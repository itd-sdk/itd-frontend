import { Y, h, aF } from "./index-CsuAWxkQ.js";
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
      e._sentryDebugIds[n] = "c8c8f649-3d1b-4ac9-840a-1b75820f8032";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-c8c8f649-3d1b-4ac9-840a-1b75820f8032";
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
    window.dispatchEvent(new Event(aF));
  }, [n]);

  return null;
}

export { Verification as Verification };
