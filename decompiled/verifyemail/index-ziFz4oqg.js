import { y, e } from "./index-pEgBAsWz.js";
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
    const d = new e.Error().stack;

    if (d) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[d] = "2c420d08-0ac9-4d8b-8868-e20d905b98fb";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-2c420d08-0ac9-4d8b-8868-e20d905b98fb";
    }
  } catch {}
})();

export const VerifyEmail = (e) => {
  y(() => {
    e("/login", true);
  }, []);

  return null;
};

export { VerifyEmail as VerifyEmail, VerifyEmail as default };
