import { y, f } from "./index-BAlLDjSl.js";
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
    e.SENTRY_RELEASE = { id: "1.1.1" };
    const n = new e.Error().stack;

    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "8e578574-1b27-4a4b-a5ae-a27ee7491e34";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-8e578574-1b27-4a4b-a5ae-a27ee7491e34";
    }
  } catch {}
})();

export const VerifyEmail = (e) => {
  y(() => {
    f("/login", true);
  }, []);

  return null;
};

export { VerifyEmail as VerifyEmail, VerifyEmail as default };
