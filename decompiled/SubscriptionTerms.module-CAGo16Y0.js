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
    t.SENTRY_RELEASE = { id: "1.1.4" };
    const e = new t.Error().stack;

    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "fe1d706f-20d1-4d73-89a6-39b52b28ff70";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-fe1d706f-20d1-4d73-89a6-39b52b28ff70";
    }
  } catch {}
})();
const n = "GB3A";
const s = "OSI8";
const d = "QUd1";
const o = "uLwG";
const c = "PfgM";
const i = "Cg05";
const f = "drtL";
const l = "dkdR";
const a = "cbjW";

const r = {
  legal: n,
  backButton: s,
  title: d,
  updated: o,
  section: c,
  sectionTitle: i,
  text: f,
  list: l,
  contact: a,
};

export { r as s };
