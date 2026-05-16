import { x, y, ae } from "./index-BCnJB3wz.js";
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
      e._sentryDebugIds[n] = "2841cec8-8052-4ee4-8ef2-317d2802e0a3";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-2841cec8-8052-4ee4-8ef2-317d2802e0a3";
    }
  } catch {}
})();

export function Verification(e) {
  const n = x((i) => i.profile?.isPhoneVerified);

  y(() => {
    if (n) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(ae));
  }, [n]);

  return null;
}

export { Verification as Verification };
