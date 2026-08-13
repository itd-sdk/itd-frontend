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
      t._sentryDebugIds[e] = "dad0a9e6-9633-4fa3-990c-5d7ae28cbb57";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-dad0a9e6-9633-4fa3-990c-5d7ae28cbb57";
    }
  } catch {}
})();
const n = "hPf1";
const s = "FbnR";
const o = "MNyX";
const c = "fVRD";
const d = "YWbK";
const a = "QnHL";
const i = "M9B5";
const l = "y6Qq";
const b = "wCza";

const r = {
  legal: n,
  backButton: s,
  title: o,
  updated: c,
  section: d,
  sectionTitle: a,
  text: i,
  list: l,
  contact: b,
};

export { r as s };
