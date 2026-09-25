import { h } from "./index-gHxZkwFX.js";
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
    e.SENTRY_RELEASE = { id: "1.1.4" };
    const o = new e.Error().stack;

    if (o) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[o] = "4dbb2767-cb22-4fe4-b01c-d6ae2c719e98";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-4dbb2767-cb22-4fe4-b01c-d6ae2c719e98";
    }
  } catch {}
})();

export function u() {
  h(() => {
    const document_documentElement = document.documentElement;
    const o = document_documentElement.style.overflow;
    document_documentElement.style.overflow = "hidden";

    return () => {
      document_documentElement.style.overflow = o;
    };
  }, []);
}

export { u as u };
