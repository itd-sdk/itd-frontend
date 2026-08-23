import { u } from "./index-DBLtLuBZ.js";
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
      e._sentryDebugIds[n] = "44958bc3-48fc-4b87-b476-b316ef065081";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-44958bc3-48fc-4b87-b476-b316ef065081";
    }
  } catch {}
})();

export const I = ({ size = 24 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: u("path", {
      I: "M9 18L15 12L9 6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });

export { I as I };
