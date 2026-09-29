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
      t._sentryDebugIds[e] = "d97ea8f8-efd8-4664-a585-ae0d100d1620";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-d97ea8f8-efd8-4664-a585-ae0d100d1620";
    }
  } catch {}
})();
const n = "n6Mn";
const s = "tuEV";
const o = "K5ET";
const d = "CT8Q";
const a = "Atfv";
const c = "ju73";
const i = "J2xu";
const l = "aXR0";
const f = "naLN";

const r = {
  legal: n,
  backButton: s,
  title: o,
  updated: d,
  section: a,
  sectionTitle: c,
  text: i,
  list: l,
  contact: f,
};

export { r as s };
