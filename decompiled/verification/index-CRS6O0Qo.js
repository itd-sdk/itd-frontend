import { w, h, aj } from "./index-ORJLmKGS.js";
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
    const n = new e.Error().stack;

    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "13694529-0de1-4517-83fb-2cb1d84fcc36";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-13694529-0de1-4517-83fb-2cb1d84fcc36";
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
    window.dispatchEvent(new Event(aj));
  }, [n]);

  return null;
}

export { Verification as Verification };
