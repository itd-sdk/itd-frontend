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
    const o = new e.Error().stack;

    if (o) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[o] = "9e401312-9f73-4454-8bba-1ffa5196d021";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-9e401312-9f73-4454-8bba-1ffa5196d021";
    }
  } catch {}
})();

export const I = ({ size = 48 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
      u("polyline", { points: "22 4 12 14.01 9 11.01" }),
    ],
  });

export { I as I };
