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
      t._sentryDebugIds[e] = "1f01bbd3-5d6e-4061-ba0e-79951571e819";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-1f01bbd3-5d6e-4061-ba0e-79951571e819";
    }
  } catch {}
})();
const n = "janN";
const s = "DLv1";
const o = "RbmX";
const d = "DIwJ";
const c = "SdSl";
const i = "SvsL";
const l = "oz2W";
const a = "JzKl";
const b = "ouJL";

const u = {
  legal: n,
  backButton: s,
  title: o,
  updated: d,
  section: c,
  sectionTitle: i,
  text: l,
  list: a,
  contact: b,
};

export { u as s };
