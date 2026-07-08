import { I as I_1 } from "./index-BewGW5_v.js";
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
    const t = new e.Error().stack;

    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "73a90a5a-fe3e-4622-8a3f-5c72418ab2a7";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-73a90a5a-fe3e-4622-8a3f-5c72418ab2a7";
    }
  } catch {}
})();

export const I = ({ size = 24 }) =>
  I_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      I_1("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      I_1("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M12 16v-4m0-4h.01",
      }),
    ],
  });

export { I as I };
