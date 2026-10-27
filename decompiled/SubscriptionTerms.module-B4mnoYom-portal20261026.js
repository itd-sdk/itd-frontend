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
      t._sentryDebugIds[e] = "1c6fc0a3-1fe5-40f7-a2ce-0ef9d841688f";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-1c6fc0a3-1fe5-40f7-a2ce-0ef9d841688f";
    }
  } catch {}
})();
const n = "wbEI";
const s = "DTOT";
const o = "vIAa";
const c = "m7HV";
const d = "ARvy";
const i = "o1mC";
const a = "ydsz";
const f = "YFOI";
const l = "NUSI";

const u = {
  legal: n,
  backButton: s,
  title: o,
  updated: c,
  section: d,
  sectionTitle: i,
  text: a,
  list: f,
  contact: l,
};

export { u as s };
