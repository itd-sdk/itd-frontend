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
      t._sentryDebugIds[e] = "0e3c6660-bf26-465e-a577-2d6991e6b6eb";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-0e3c6660-bf26-465e-a577-2d6991e6b6eb";
    }
  } catch {}
})();
const n = "GbbW";
const s = "Tksy";
const o = "e1T8";
const c = "aKj0";
const d = "Eww6";
const i = "IrDj";
const l = "r9YR";
const a = "k10m";
const b = "VEPT";

const f = {
  legal: n,
  backButton: s,
  title: o,
  updated: c,
  section: d,
  sectionTitle: i,
  text: l,
  list: a,
  contact: b,
};

export { f as s };
