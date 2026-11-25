import { Z, _ as __1, a0 } from "./index-4cbec7521f6a.js";
const l = "itd-filebox-v2";
const g = 500 * 1024 * 1024;
const _ = 720 * 3600 * 1000/* 1e3 */;
async function M(t = g, c = _) {
  try {
    if (typeof caches === "undefined") {
      return;
    }
    const e = Z();
    if (!__1(e)) {
      return;
    }
    const a = await caches.open(a0(e));
    const n = await a.keys();
    const o = new Map();
    for (const s of n) {
      const r = new URL(s.url).pathname.match(/^\/__filebox\/([^/]+)\//);
      if (!r) {
        continue;
      }
      const h = o.get(r[1]) ?? { keys: [], bytes: 0 };
      h.keys.push(s);
      const d = await a.match(s);
      (h.bytes += Number(d?.headers.get("x-bytes") ?? 0));
      o.set(r[1], h);
    }
    if (o.size === 0) {
      return;
    }
    const i = await S();
    const u = Date.now();

    const m = async (s) => {
      for (const r of o.get(s).keys) {
        await a.delete(r);
      }
      w(s);
    };

    for (const s of [...o.keys()]) {
      const r = i.get(s);
      if (r === undefined) {
        B(s, u);
        continue;
      }

      if (u - r > c) {
        await m(s);
        o.delete(s);
      }
    }
    let f = 0;
    for (const s of o.values()) {
      f += s.bytes;
    }
    if (f <= t) {
      return;
    }
    const p = [...o.keys()].sort((s, r) => (i.get(s) ?? u) - (i.get(r) ?? u));
    for (const s of p) {
      if (f <= t) {
        break;
      }
      (f -= o.get(s).bytes);
      await m(s);
    }
  } catch {}
}
async function A() {
  try {
    await caches.delete(l);
  } catch {}
  await new Promise((t) => {
    try {
      const c = indexedDB.deleteDatabase("itd-filebox");

      (c.onsuccess = () => t());

      (c.onerror = () => t());

      (c.onblocked = () => t());
    } catch {
      t();
    }
  });
}
function y() {
  return new Promise((t, c) => {
    const e = indexedDB.open("itd-filebox", 1);

    (e.onupgradeneeded = () => {
      e.result.createObjectStore("touch");
    });

    (e.onsuccess = () => t(e.result));

    (e.onerror = () => c(e.error));
  });
}
async function S() {
  const t = new Map();
  try {
    const c = await y();

    await new Promise((e) => {
      const n = c
        .transaction("touch", "readonly")
        .objectStore("touch")
        .openCursor();

      (n.onsuccess = () => {
        const n_result = n.result;
        if (!n_result) {
          e();
          return;
        }
        t.set(String(n_result.key), Number(n_result.value) || 0);
        n_result.continue();
      });

      (n.onerror = () => e());
    });

    c.close();
  } catch {}
  return t;
}
function B(t, c) {
  y()
    .then((e) => {
      try {
        const a = e.transaction("touch", "readwrite");
        a.objectStore("touch").put(c, t);

        (a.oncomplete = () => e.close());

        (a.onerror = () => e.close());
      } catch {
        e.close();
      }
    })
    .catch(() => {});
}
function w(t) {
  y()
    .then((c) => {
      try {
        const e = c.transaction("touch", "readwrite");
        e.objectStore("touch").delete(t);

        (e.oncomplete = () => c.close());

        (e.onerror = () => c.close());
      } catch {
        c.close();
      }
    })
    .catch(() => {});
}
async function F() {
  if (typeof caches === "undefined") {
    return [];
  }
  try {
    const t = await caches.open(l);
    const c = await t.keys();
    const e = new Map();
    for (const a of c) {
      const n = new URL(a.url).pathname.match(
        /^\/__filebox\/([^/]+)\/([^/]+)\/(meta|chunk\/\d+)$/
      );
      if (!n) {
        continue;
      }
      const o = e.get(n[1]) ?? { bytes: 0, mime: "" };
      const i = await t.match(a);
      if (n[3] === "meta") {
        if (!o.mime || n[2] === "main") {
          try {
            const u = await i?.clone().json();
            o.mime = u?.mime ?? o.mime;
          } catch {}
        }
      } else {
        o.bytes += Number(i?.headers.get("x-bytes") ?? 0);
      }
      e.set(n[1], o);
    }
    return [...e.entries()].map(([a, n]) => ({
      fileId: a,
      ...n
    }));
  } catch {
    return [];
  }
}

export function evictFileBoxFiles(t) {
  if (!(typeof caches === "undefined" || t.length === 0)) {
    try {
      const c = new Set(t);
      const e = await caches.open(l);
      const a = await e.keys();
      for (const n of a) {
        const o = new URL(n.url).pathname.match(/^\/__filebox\/([^/]+)\//);

        if (o && c.has(o[1])) {
          (await e.delete(n));
        }
      }
      for (const n of t) {
        w(n);
      }
    } catch {}
  }
}

export {
  evictFileBoxFiles as evictFileBoxFiles,
  A as purgeFileBox,
  M as runFileBoxMaintenance,
  F as scanFileBox,
};
