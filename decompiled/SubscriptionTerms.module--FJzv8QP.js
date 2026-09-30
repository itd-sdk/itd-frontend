(() => {
  try {
    const t =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "1.1.2" };
    const e = new t.Error().stack;

    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "623842fa-8760-41b1-b3d2-ef1cfb849c32";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-623842fa-8760-41b1-b3d2-ef1cfb849c32";
    }
  } catch {}
})();
const n = "yPpE";
const s = "D3J4";
const o = "M3BN";
const c = "cAY1";
const d = "OLhq";
const i = "fX82";
const l = "edFQ";
const a = "u4my";
const f = "xICT";

const u = {
  legal: n,
  backButton: s,
  title: o,
  updated: c,
  section: d,
  sectionTitle: i,
  text: l,
  list: a,
  contact: f,
};

export { u as s };
