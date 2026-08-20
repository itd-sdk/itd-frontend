import { y } from "./index-DDTOXJaD.js";
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
    const o = new e.Error().stack;

    if (o) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[o] = "3fd4e5ad-fe22-4610-9c11-b8ea828d7c46";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-3fd4e5ad-fe22-4610-9c11-b8ea828d7c46";
    }
  } catch {}
})();

export function u() {
  y(() => {
    const document_documentElement = document.documentElement;
    const o = document_documentElement.style.overflow;
    document_documentElement.style.overflow = "hidden";

    return () => {
      document_documentElement.style.overflow = o;
    };
  }, []);
}

export { u as u };
