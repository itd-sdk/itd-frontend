import { x, y, af } from "./index-BewGW5_v.js";
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
      e._sentryDebugIds[n] = "0a2a59f9-e3ce-49d9-a1f5-153efcb70266";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-0a2a59f9-e3ce-49d9-a1f5-153efcb70266";
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
    window.dispatchEvent(new Event(af));
  }, [n]);

  return null;
}

export { Verification as Verification };
