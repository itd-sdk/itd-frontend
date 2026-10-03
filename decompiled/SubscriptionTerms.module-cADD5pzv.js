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
      t._sentryDebugIds[e] = "68c77a93-0eda-4e7a-9ff2-c8fac4cca4de";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-68c77a93-0eda-4e7a-9ff2-c8fac4cca4de";
    }
  } catch {}
})();
const n = "WS3F";
const c = "qPQ6";
const s = "XNz3";
const o = "w4DR";
const a = "rnhA";
const d = "bNLy";
const i = "Dl1g";
const l = "Ddpf";
const f = "xhPG";

const u = {
  legal: n,
  backButton: c,
  title: s,
  updated: o,
  section: a,
  sectionTitle: d,
  text: i,
  list: l,
  contact: f,
};

export { u as s };
