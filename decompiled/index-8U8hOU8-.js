import { u, R } from "./index-CR_1arh8.js";
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
      e._sentryDebugIds[n] = "82571b17-534a-49dc-81a4-604441b449d7";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-82571b17-534a-49dc-81a4-604441b449d7";
    }
  } catch {}
})();
const t = "CMsd";
const i = { link: t };

export function P() {
  return u("a", {
    className: i.link,
    href: R.PRIVACY,
    target: "_blank",
    rel: "noopener noreferrer",
    children: "Политика конфиденциальности",
  });
}

export { P as P };
