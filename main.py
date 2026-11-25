import glob as glob_module
from collections import Counter
from datetime import datetime
from os import environ, makedirs
from os.path import basename, isdir
from re import compile as re_compile
from re import findall, search
from re import sub as re_sub
from shutil import move, rmtree
from subprocess import PIPE, run
from sys import argv
from urllib.parse import quote, urljoin, urlparse

from bs4 import BeautifulSoup
from requests import Session

from svg_extractor import extract_svgs

session = Session()

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:140.0) Gecko/20100101 Firefox/140.0"


def _get_jhash(b: int) -> int:
    x = 123456789
    k = 0
    for i in range(1677696):
        x = ((x + b) ^ (x + (x % 3) + (x % 17) + b) ^ i) % 16776960
        if x % 117 == 0:
            k = (k + 1) % 1111
    return k


def _solve_ddos_guard(resp):
    if "<html>" not in resp.text[:500] or "get_jhash" not in resp.text:
        return False
    js_p = session.cookies.get("__js_p_")
    if not js_p:
        return False
    code = int(js_p.split(",")[0])
    jhash = _get_jhash(code)
    print(f"DDoS-Guard challenge: code={code} -> jhash={jhash}")
    session.cookies.set("__jhash_", str(jhash), domain="xn--d1ah4a.com", path="/")
    session.cookies.set("__jua_", quote(UA, safe=""), domain="xn--d1ah4a.com", path="/")
    return True


def get(url):
    resp = session.get(url, headers={"User-Agent": UA})
    for _ in range(3):
        if not _solve_ddos_guard(resp):
            break
        resp = session.get(url, headers={"User-Agent": UA})
    return resp


def clear_dir(path):
    try:
        rmtree(path)
    except FileNotFoundError:
        pass
    makedirs(path)


ORIGIN = environ.get("ITD_ORIGIN", "https://xn--d1ah4a.com").rstrip("/")
FORCE = "--force" in argv

print("find scripts")
scripts = {}  # file name -> content, every <script src> of the page
for script in BeautifulSoup(get(ORIGIN).text, "html.parser").find_all("script"):
    src = script.attrs.get("src")
    if not src:
        continue
    name = basename(urlparse(str(src)).path)
    print(f"found: {src}", end="")
    scripts[name] = get(urljoin(f"{ORIGIN}/", str(src))).text
    print(f", loaded {len(scripts[name].splitlines())} lines")
assert scripts, "No scripts found on the page"

# The page has more than one script now (e.g. checkpoint-observe-*.js): the main bundle is the one with the
# dependency map of the lazy chunks, otherwise the biggest one
base_script_name = next((n for n, c in scripts.items() if "__vite__mapDeps" in c), None) or max(
    scripts, key=lambda n: len(scripts[n])
)
base_script = scripts[base_script_name]
print(f"main bundle: {base_script_name}")

# Parse __vite__mapDeps file list: const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/..."])))=>...
deps_match = search(r"(\w+)\.f\|\|\(\1\.f=\[(.*?)\]\)", base_script)
assert deps_match, f"__vite__mapDeps not found in {base_script_name}"
dep_files = findall(r'"assets/([^"]+)"', deps_match.group(2))
print(
    f"found {len(dep_files)} dep files ({sum(1 for f in dep_files if f.endswith('.css'))} css, {sum(1 for f in dep_files if f.endswith('.js'))} js)"
)

# Parse lazy page imports: import("./x.js"),__vite__mapDeps([1,2]) or import("./x.js"),[] ... .then(e=>({default:e.Page}))
page_imports = {}
for js_file, indices_str, component_name in findall(
    r'import\("\./([^"]+)"\),(?:__vite__mapDeps\(\[([^\]]*)\]\)|\[\])\)\.then\(\w+=>\(\{default:\w+\.(\w+)\}\)\)',
    base_script,
):
    indices = [int(x.strip()) for x in indices_str.split(",") if x.strip()]
    page_imports[component_name] = {"js_file": js_file, "dep_indices": indices}
assert page_imports, f"No lazy page imports found in {base_script_name}"
# every dynamic import of the main bundle, pages or not
lazy_chunks = set(findall(r'import\("\./([^"]+)"\)', base_script))
# service workers live at the site root, not in /assets (e.g. /messenger-sw.js)
workers = set(findall(r'serviceWorker\s*\.register\(\s*"/([\w.-]+\.js)"', base_script))

print(f"found {len(page_imports)} pages: {', '.join(page_imports.keys())}")

# File names carry content hashes: the same set of names as in raw/ means nothing changed on the site
expected = set(scripts) | set(dep_files) | lazy_chunks | workers | {info["js_file"] for info in page_imports.values()}
current = {basename(p) for p in glob_module.glob("raw/**/*", recursive=True) if not isdir(p)}
# (raw/ may hold more: chunks imported only by other chunks; a change there renames their importers too)
if expected <= current and glob_module.glob("decompiled/**/*.js", recursive=True) and not FORCE:
    print("no changes: file hashes are the same as in raw/ (run with --force to update anyway)")
    exit(0)
if current:
    added = sorted(expected - current)
    print(f"changed files: {len(added)} new")
    for name in added:
        print(f"  + {name}")

print("clear old files")
clear_dir("raw")
clear_dir("decompiled")
for name, content in scripts.items():
    with open(f"raw/{name}", "w", encoding="utf-8") as fl:
        fl.write(content)

# Files used in 2+ pages go to raw/ root
dep_usage = Counter()
for info in page_imports.values():
    for idx in info["dep_indices"]:
        dep_usage[dep_files[idx]] += 1

shared_files = {f for f, count in dep_usage.items() if count > 1}
print(f"shared files (raw/): {', '.join(sorted(shared_files))}")

# Download files
# file_dest[filename] = 'raw' | 'raw/pagename'
file_dest = {}
downloaded = set()

for component_name, info in page_imports.items():
    page_dir = f"raw/{component_name.lower()}"
    makedirs(page_dir, exist_ok=True)

    js_file = info["js_file"]
    print(f"  [{component_name}] {js_file}                    ", end="\r")
    content = get(f"{ORIGIN}/assets/{js_file}").text
    with open(f"{page_dir}/{js_file}", "w", encoding="utf-8") as fl:
        fl.write(content)
    file_dest[js_file] = page_dir

    for idx in info["dep_indices"]:
        filename = dep_files[idx]
        dest_dir = "raw" if filename in shared_files else page_dir
        dest_path = f"{dest_dir}/{filename}"

        if dest_path not in downloaded:
            downloaded.add(dest_path)
            print(f"  [{component_name}] {filename}                    ", end="\r")
            content = get(f"{ORIGIN}/assets/{filename}").text
            with open(dest_path, "w", encoding="utf-8") as fl:
                fl.write(content)

        if filename not in file_dest:
            file_dest[filename] = dest_dir

# Chunks that no page lists (lazy modules like the chats route or messengerMediaApi) and whatever they import
# "./x.js" imports, "assets/x.css" in a chunk's own dependency map, "/assets/x.js" workers (new URL(...))
chunk_ref = re_compile(r'["`(](?:\./|/?assets/)([\w.-]+\.(?:js|css))["`)]')
saved = {basename(p) for p in glob_module.glob("raw/**/*", recursive=True) if not isdir(p)}
pending = sorted((set(dep_files) | set(lazy_chunks)) - saved)
for js in glob_module.glob("raw/**/*.js", recursive=True):
    with open(js, "r", encoding="utf-8") as fl:
        pending += [n for n in chunk_ref.findall(fl.read()) if n not in saved]
for name in sorted(workers):
    resp = get(f"{ORIGIN}/{name}")
    if resp.status_code == 200:
        with open(f"raw/{name}", "w", encoding="utf-8") as fl:
            fl.write(resp.text)
        saved.add(name)
        file_dest[name] = "raw"
        pending += [n for n in chunk_ref.findall(resp.text) if n not in saved]
    else:
        print(f"  warning: /{name}: HTTP {resp.status_code}")
while pending:
    filename = pending.pop()
    if filename in saved:
        continue
    saved.add(filename)
    print(f"  [chunks] {filename}                    ", end="\r")
    resp = get(f"{ORIGIN}/assets/{filename}")
    if resp.status_code != 200:
        print(f"  warning: {filename}: HTTP {resp.status_code}")
        continue
    with open(f"raw/{filename}", "w", encoding="utf-8") as fl:
        fl.write(resp.text)
    file_dest[filename] = "raw"
    if filename.endswith(".js"):
        pending += [n for n in chunk_ref.findall(resp.text) if n not in saved]

print("all files downloaded              ")

# --- Decompile all JS in one wakaru call ---
for name in scripts:
    file_dest[name] = "raw"  # ensure the page scripts get moved to decompiled/
all_js_files = [
    f.replace("\\", "/") for f in glob_module.glob("raw/**/*.js", recursive=True)
]

print(f"decompiling {len(all_js_files)} JS files...")
makedirs("decompiled_tmp", exist_ok=True)
run(["wakaru", "unminify"] + all_js_files + ["-o", "decompiled_tmp/", "-f"], check=True)

# Find all files wakaru produced (may mirror directory structure)
produced = {
    basename(p): p.replace("\\", "/")
    for p in glob_module.glob("decompiled_tmp/**/*", recursive=True)
    if not isdir(p)
}

# Distribute to correct output directories
for filename, dest_dir in file_dest.items():
    if not filename.endswith(".js"):
        continue
    if filename not in produced:
        print(f"  warning: decompiled file not found: {filename}")
        continue
    out_dir = dest_dir.replace("raw", "decompiled", 1)
    makedirs(out_dir, exist_ok=True)
    move(produced[filename], f"{out_dir}/{filename}")

rmtree("decompiled_tmp", ignore_errors=True)
print("JS decompiled")

# --- Format all CSS with cssbeautifier (pure Python, no npx) ---
all_css_files = glob_module.glob("raw/**/*.css", recursive=True)
print(f"formatting {len(all_css_files)} CSS files...")
for css_file in all_css_files:
    filename = basename(css_file)
    dest_dir = file_dest.get(filename, "raw")
    out_dir = dest_dir.replace("raw", "decompiled", 1)
    makedirs(out_dir, exist_ok=True)
    with open(css_file, "r", encoding="utf-8") as f:
        content = f.read()
    content = re_sub(r"\s*\{\s*", " {\n    ", content)
    content = re_sub(r";\s*", ";\n    ", content)
    content = re_sub(r"\s*\}\s*", "\n}\n", content)
    with open(f"{out_dir}/{filename}", "w", encoding="utf-8") as f:
        f.write(content.strip())
print("CSS formatted")

# --- Extract SVGs from all raw JS files ---
# print('extracting SVGs...')
# makedirs('decompiled/svg', exist_ok=True)
# svg_count = 0
# seen_svgs = set()

# for js_file in glob_module.glob('raw/**/*.js', recursive=True):
#     with open(js_file, 'r', encoding='utf-8') as f:
#         content = f.read()
#     svgs = extract_svgs(content)
#     stem = basename(js_file).replace('.js', '')
#     for i, xml in enumerate(svgs):
#         if xml in seen_svgs:
#             continue
#         seen_svgs.add(xml)
#         suffix = f'_{i + 1}' if len(svgs) > 1 else ''
#         with open(f'decompiled/svg/{stem}{suffix}.svg', 'w', encoding='utf-8') as f:
#             f.write(f'<?xml version="1.0" encoding="utf-8"?>\n{xml}\n')
#         svg_count += 1

# print(f'extracted {svg_count} SVGs')
print("done")
