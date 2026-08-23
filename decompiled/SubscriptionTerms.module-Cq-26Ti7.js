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
      t._sentryDebugIds[e] = "d868e8ad-fcdf-42cb-bd9c-3ef8d385ba1e";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-d868e8ad-fcdf-42cb-bd9c-3ef8d385ba1e";
    }
  } catch {}
})();
const n = "jfo1";
const s = "DBfc";
const d = "QOzT";
const o = "W2kK";
const c = "DZvl";
const i = "V5UG";
const l = "BNGC";
const a = "vrWk";
const f = "Zv4v";

const r = {
  legal: n,
  backButton: s,
  title: d,
  updated: o,
  section: c,
  sectionTitle: i,
  text: l,
  list: a,
  contact: f,
};

export { r as s };
