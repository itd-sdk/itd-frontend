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
      t._sentryDebugIds[e] = "dcffb8ec-618b-42ef-b477-404f7781dd2e";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-dcffb8ec-618b-42ef-b477-404f7781dd2e";
    }
  } catch {}
})();
const n = "XsIx";
const s = "adbW";
const o = "yfxX";
const d = "EO8k";
const c = "pJX1";
const i = "yHel";
const l = "j7Bk";
const f = "u64V";
const a = "Am7C";

const u = {
  legal: n,
  backButton: s,
  title: o,
  updated: d,
  section: c,
  sectionTitle: i,
  text: l,
  list: f,
  contact: a,
};

export { u as s };
