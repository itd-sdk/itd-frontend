import { a, h, P } from "./index-BQxlThnW-portal20261026.js";
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
      e._sentryDebugIds[n] = "af322930-c4bf-49f3-9900-197fbc6fa96e";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-af322930-c4bf-49f3-9900-197fbc6fa96e";
    }
  } catch {}
})();

export function Verification(e) {
  const n = a((f) => f.profile?.isPhoneVerified);

  h(() => {
    if (n) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(P));
  }, [n]);

  return null;
}

export { Verification as Verification };
