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
      t._sentryDebugIds[e] = "998bf17f-f5a0-4574-92d8-7cc34376c11a";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-998bf17f-f5a0-4574-92d8-7cc34376c11a";
    }
  } catch {}
})();
const n = "EoN0";
const o = "jBIk";
const s = "jFp0";
const c = "JrWy";
const d = "MQoQ";
const i = "Apmg";
const l = "mHfn";
const a = "W97R";
const f = "tL7l";

const b = {
  legal: n,
  backButton: o,
  title: s,
  updated: c,
  section: d,
  sectionTitle: i,
  text: l,
  list: a,
  contact: f,
};

export { b as s };
