import { w, y, ac } from "./index-DDCL-vHK.js";
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
    e.SENTRY_RELEASE = { id: "1.1.0" };
    const n = new e.Error().stack;

    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "52f375e2-0254-4513-a2f5-ff79fefb8991";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-52f375e2-0254-4513-a2f5-ff79fefb8991";
    }
  } catch {}
})();

export function Verification(e) {
  const n = w((f) => f.profile?.isPhoneVerified);

  y(() => {
    if (n) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(ac));
  }, [n]);

  return null;
}

export { Verification as Verification };
