import { a } from "./index-BewGW5_v.js";
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
      e._sentryDebugIds[o] = "957e225e-b6e5-4ca7-914e-349f870a1f55";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-957e225e-b6e5-4ca7-914e-349f870a1f55";
    }
  } catch {}
})();

export const I = ({ size = 48 }) =>
  a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      a("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
      a("polyline", { points: "22 4 12 14.01 9 11.01" }),
    ],
  });

export { I as I };
