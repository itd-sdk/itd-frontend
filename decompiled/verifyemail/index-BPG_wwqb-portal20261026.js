import { h, $ } from "./index-BQxlThnW-portal20261026.js";
(() => {
  try {
    const e =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "1.1.2" };
    const f = new e.Error().stack;

    if (f) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[f] = "9b769fac-495f-4aa8-a3b2-abe3f5ecfc71";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-9b769fac-495f-4aa8-a3b2-abe3f5ecfc71";
    }
  } catch {}
})();

export const VerifyEmail = (e) => {
  h(() => {
    $("/login", true);
  }, []);

  return null;
};

export { VerifyEmail as VerifyEmail, VerifyEmail as default };
