import { u, aI } from "./index-dnACTU3c.js";
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
    const r = new e.Error().stack;

    if (r) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[r] = "6896dc91-636c-44a8-a07d-e4d431787a39";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-6896dc91-636c-44a8-a07d-e4d431787a39";
    }
  } catch {}
})();
const d = "YbFU";
const t = { privacy: d };

export function P() {
  return u("p", {
    className: t.privacy,
    children: u("a", {
      href: aI.PRIVACY,
      target: "_blank",
      rel: "noopener noreferrer",
      children: "Политика конфиденциальности",
    }),
  });
}

export { P as P };
