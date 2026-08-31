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
    t.SENTRY_RELEASE = { id: "1.1.3" };
    const e = new t.Error().stack;

    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "7945b4f9-3888-495f-9b0a-b9192d312ed0";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-7945b4f9-3888-495f-9b0a-b9192d312ed0";
    }
  } catch {}
})();
const n = "ytXo";
const s = "E0PD";
const o = "Gidh";
const d = "tU1p";
const c = "MMao";
const i = "k3nw";
const l = "gsjZ";
const a = "YBfq";
const b = "lbR4";

const r = {
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

export { r as s };
