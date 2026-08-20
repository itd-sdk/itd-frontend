import { w, y, ai } from "./index-DDTOXJaD.js";
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
      e._sentryDebugIds[n] = "c1b833f6-23d2-4182-9bdf-dee4593fb930";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-c1b833f6-23d2-4182-9bdf-dee4593fb930";
    }
  } catch {}
})();

export function Verification(e) {
  const n = w((i) => i.profile?.isPhoneVerified);

  y(() => {
    if (n) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(ai));
  }, [n]);

  return null;
}

export { Verification as Verification };
