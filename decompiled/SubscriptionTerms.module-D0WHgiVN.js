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
      t._sentryDebugIds[e] = "6876c32e-3ffe-49bc-a2d3-eed983795394";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-6876c32e-3ffe-49bc-a2d3-eed983795394";
    }
  } catch {}
})();
const n = "cdhw";
const s = "ENrZ";
const o = "ha5j";
const c = "sqJK";
const d = "juZ6";
const i = "FTWu";
const a = "GR5a";
const l = "IQJO";
const f = "DoAj";

const r = {
  legal: n,
  backButton: s,
  title: o,
  updated: c,
  section: d,
  sectionTitle: i,
  text: a,
  list: l,
  contact: f,
};

export { r as s };
