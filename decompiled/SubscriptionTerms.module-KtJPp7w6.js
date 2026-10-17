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
      t._sentryDebugIds[e] = "e4b08930-cfc8-4b56-aa78-6acfea3369fc";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-e4b08930-cfc8-4b56-aa78-6acfea3369fc";
    }
  } catch {}
})();
const n = "dLCW";
const s = "GNSB";
const c = "dddV";
const o = "ah4X";
const a = "uWYT";
const d = "ECkt";
const i = "vT7u";
const l = "f7Ol";
const f = "biIT";

const u = {
  legal: n,
  backButton: s,
  title: c,
  updated: o,
  section: a,
  sectionTitle: d,
  text: i,
  list: l,
  contact: f,
};

export { u as s };
