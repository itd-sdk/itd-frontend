import { w, h, ap } from "./index-dnACTU3c.js";
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
      e._sentryDebugIds[n] = "338865bf-1922-40df-8906-e70dd8289132";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-338865bf-1922-40df-8906-e70dd8289132";
    }
  } catch {}
})();

export function Verification(e) {
  const n = w((i) => i.profile?.isPhoneVerified);

  h(() => {
    if (n) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(ap));
  }, [n]);

  return null;
}

export { Verification as Verification };
