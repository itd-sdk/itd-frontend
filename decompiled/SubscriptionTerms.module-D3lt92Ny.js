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
      t._sentryDebugIds[e] = "def73cce-316f-492e-8051-31df51905309";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-def73cce-316f-492e-8051-31df51905309";
    }
  } catch {}
})();
const n = "iKKr";
const s = "aYF8";
const o = "WJ4u";
const c = "iLVe";
const d = "BbXq";
const i = "LYoO";
const l = "HNOC";
const a = "DNcS";
const f = "QLso";

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
