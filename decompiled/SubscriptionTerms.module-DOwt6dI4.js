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
      t._sentryDebugIds[e] = "1850a352-0b5a-4f9b-bd6e-24beb8e58135";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-1850a352-0b5a-4f9b-bd6e-24beb8e58135";
    }
  } catch {}
})();
const n = "I3yw";
const s = "KO3d";
const o = "jDFd";
const d = "MD8A";
const c = "SL9Q";
const i = "N26d";
const a = "yeKK";
const b = "U2nJ";
const l = "MUcQ";

const r = {
  legal: n,
  backButton: s,
  title: o,
  updated: d,
  section: c,
  sectionTitle: i,
  text: a,
  list: b,
  contact: l,
};

export { r as s };
