import { Y, h, aE } from "./index-BuVp7kGl.js";
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
      e._sentryDebugIds[n] = "3cdd65ba-07ad-4365-8af5-914202326acf";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-3cdd65ba-07ad-4365-8af5-914202326acf";
    }
  } catch {}
})();

export function Verification(e) {
  const n = Y((i) => i.profile?.isPhoneVerified);

  h(() => {
    if (n) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(aE));
  }, [n]);

  return null;
}

export { Verification as Verification };
