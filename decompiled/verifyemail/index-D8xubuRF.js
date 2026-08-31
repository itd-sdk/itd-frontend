import { h, e } from "./index-ORJLmKGS.js";
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
    e.SENTRY_RELEASE = { id: "1.1.3" };
    const d = new e.Error().stack;

    if (d) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[d] = "c9ccb8bb-5e69-4a05-8f6b-d6563ee6373d";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-c9ccb8bb-5e69-4a05-8f6b-d6563ee6373d";
    }
  } catch {}
})();

export const VerifyEmail = (e) => {
  h(() => {
    e("/login", true);
  }, []);

  return null;
};

export { VerifyEmail as VerifyEmail, VerifyEmail as default };
