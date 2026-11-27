import { bk, bg, Z, bl, bm } from "./index-4a2211963806.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["assets/index-4a2211963806.js", "assets/index-Z1cpWBZa.css"])
) => i.map((i) => d[i]);
class S {
  active = 0;
  pending = [];
  limit;
  constructor(t = 2) {
    this.limit = t;
  }
  async run(t, r) {
    if (r?.aborted) {
      throw new DOMException("Upload cancelled", "AbortError");
    }
    await new Promise((n, i) => {
      const a = () => {
        r?.removeEventListener("abort", o);
        this.active++;
        n();
      };

      const o = () => {
        this.pending = this.pending.filter((l) => l !== a);

        i(new DOMException("Upload cancelled", "AbortError"));
      };

      if (this.active < this.limit) {
        a();
      } else {
        this.pending.push(a);
        r?.addEventListener("abort", o, { once: true });
      }
    });
    try {
      if (r?.aborted) {
        throw new DOMException("Upload cancelled", "AbortError");
      }
      return await t();
    } finally {
      this.active--;
      this.pending.shift()?.();
    }
  }
}
const _ = new S();
let x = 0;
async function I(e, t, r) {
  if (e && typeof navigator !== "undefined" && navigator.locks) {
    const n = x++ % 2;
    return navigator.locks.request(
      `itd:upload:${e}:part:${n}`,
      { mode: "exclusive", signal: r },
      async () => {
        if (r?.aborted) {
          throw new DOMException("Upload cancelled", "AbortError");
        }
        return t();
      }
    );
  }
  return _.run(t, r);
}
function v(e, t) {
  return t?.aborted
    ? Promise.reject(new DOMException("Upload cancelled", "AbortError"))
    : new Promise((r, n) => {
        const a = setTimeout(() => {
          t?.removeEventListener("abort", o);
          r();
        }, e);

        const o = () => {
          clearTimeout(a);
          t?.removeEventListener("abort", o);
          n(new DOMException("Upload cancelled", "AbortError"));
        };

        t?.addEventListener("abort", o, { once: true });
      });
}
async function f(e, t) {
  const r = performance.now();
  let n = 0;
  let i = 0;

  while (true) {
    if (t?.aborted) {
      throw new DOMException("Upload cancelled", "AbortError");
    }
    try {
      return await e();
    } catch (a) {
      if (t?.aborted || (a instanceof Error && a.name === "AbortError")) {
        throw a;
      }
      const o = a;
      if (o.status === 503 && o.code === "UPLOAD_BUSY") {
        if (performance.now() - r >= 120000 /* 12e4 */ || ++i > 30) {
          throw a;
        }
        await v(
          Math.min(1000 /* 1e3 */ * 2 ** Math.min(i - 1, 3), 5000 /* 5e3 */),
          t
        );
        continue;
      }
      if (
        !(
          (typeof o.status == "number" && o.status >= 500 && o.status <= 599) ||
          ((o.status === undefined || o.status === 0) && a instanceof TypeError)
        ) ||
        ++n >= 3
      ) {
        throw a;
      }
      await v(500 * 3 ** (n - 1), t);
    }
  }
}
async function L(e, t, r) {
  if (t.toLowerCase() === "image/gif") {
    return false;
  }
  try {
    const n = await e.slice(0, 6).text();
    return n === "GIF87a" || n === "GIF89a"
      ? false
      : r === e.size + (Math.floor(e.size / (1024 * 1024)) + 1) * 16;
  } catch {
    return false;
  }
}
function m(...e) {}
const O = 2 * 1024 * 1024 * 1024;
export const CHUNK_SIZE = 5 * 1024 * 1024;
const $ = 2;
async function B(e) {
  try {
    const t = await createImageBitmap(e);
    const r = { width: t.width, height: t.height };
    t.close();
    return r;
  } catch {
    return null;
  }
}
async function C(e, t, r, n) {
  const i = Date.now();

  const a = await bl(`${bm}/media/upload/${e}/part/${t}`, {
    method: "PUT",
    headers: { "Content-Type": "application/octet-stream" },
    body: r,
    signal: n,
  });

  m(`часть ${t}: ${a.status}`, { bytes: r.byteLength, ms: Date.now() - i });

  if (!a.ok) {
    let o = `part ${t} failed: ${a.status}`;
    let l;
    try {
      const d = await a.json();

      if (typeof d.error == "object") {
        l = d.error?.code;
      }

      const u = typeof d.error == "object" ? d.error?.message : d.error;

      if (u) {
        o = u;
      }
    } catch {}
    const c = new Error(o);
    c.status = a.status;
    c.code = l;
    throw c;
  }
}
async function F(e, t) {
  const r = Z();
  const n = t.mime || "application/octet-stream";
  if (e.size > O) {
    throw new Error(`file too large: ${e.size}`);
  }
  if (e.size === 0) {
    throw new Error("empty file");
  }
  const i = Math.max(1, Math.ceil(e.size / CHUNK_SIZE));
  const a = Date.now();
  m("старт", { name: e.name, bytes: e.size, mime: n, totalParts: i });

  const { uploadId } = await f(
    () =>
      bk.post(
        "/media/upload/init",
        { mime: n, size: e.size, totalParts: i },
        { signal: t.signal, skipErrorToast: true }
      ),
    t.signal
  );

  const l =
    t.width && t.height
      ? { width: t.width, height: t.height }
      : n.startsWith("image/")
      ? await B(e)
      : null;

  let c = 0;
  let d = 0;
  let u = null;

  const M = async () => {
    for (let s = d++; s < i && u === null; s = d++) {
      const y = s * CHUNK_SIZE;
      const A = Math.min(y + CHUNK_SIZE, e.size);
      const E = await e.slice(y, A).arrayBuffer();
      try {
        await I(
          r?.namespace.split(":")[0],
          () => f(() => C(uploadId, s, E, t.signal), t.signal),
          t.signal
        );
      } catch (h) {
        u = h;

        m(`ЧАСТЬ ${s} ПРОВАЛЕНА окончательно`, {
          status: h?.status ?? "(нет — транспорт)",
          reason: String(h?.message ?? h),
          uploadedBytes: c,
          ofBytes: e.size,
        });

        throw h;
      }
      c += E.byteLength;
      t.onProgress?.(c, e.size);
    }
  };

  const b = (
    await Promise.allSettled(Array.from({ length: Math.min($, i) }, M))
  ).find((s) => s.status === "rejected");

  if (b) {
    m("АПЛОАД ПРОВАЛЕН на этапе частей", {
      uploadId: uploadId,
      uploadedBytes: c,
      ofBytes: e.size,
      elapsedMs: Date.now() - a,
    });

    throw b.reason;
  }
  const w = await f(
    () =>
      bk.post(
        `/media/upload/${uploadId}/finalize`,
        {
          ...(t.filename != null ? { filename: t.filename } : {}),
          ...(l ?? {}),
          ...(t.durationMs !== undefined ? { durationMs: t.durationMs } : {}),
          ...(t.waveform ? { waveform: t.waveform } : {}),
          ...(t.thumbhash ? { thumbhash: t.thumbhash } : {}),
          ...(t.thumb ? { thumb: t.thumb } : {}),
        },
        { signal: t.signal, skipErrorToast: true }
      ),
    t.signal
  );
  m("ГОТОВО", { fileId: w.fileId, elapsedMs: Date.now() - a });

  bg(
    () => import("./index-4a2211963806.js").then((s) => s.dV),
    __vite__mapDeps([0, 1])
  )
    .then(async ({ seedFileBox }) => {
      if (await L(e, n, w.sizeCipher)) {
        seedFileBox(w.fileId, e, n, r);
      }
    })
    .catch(() => {});

  return w;
}
export {
  CHUNK_SIZE as CHUNK_SIZE,
  O as MAX_FILE_SIZE,
  $ as UPLOAD_CONCURRENCY,
  F as uploadFile,
};
