import { E, h, aq } from "./index-B74jCtUp.js";
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
    const n = new e.Error().stack;

    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "1d9b145a-c3b0-4dab-93b5-5841623c987d";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-1d9b145a-c3b0-4dab-93b5-5841623c987d";
    }
  } catch {}
})();

export function Verification(e) {
  const n = E((i) => i.profile?.isPhoneVerified);

  h(() => {
    if (n) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(aq));
  }, [n]);

  return null;
}

export { Verification as Verification };
