import { a } from "./index-7xRaK15k.js";
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
    e.SENTRY_RELEASE = { id: "1.1.1" };
    const t = new e.Error().stack;

    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "1349bdff-3058-441f-af06-6bc47d90fef5";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-1349bdff-3058-441f-af06-6bc47d90fef5";
    }
  } catch {}
})();

const d = ({ size = 24 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    children: [
      a("path", {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      }),
      a("circle", { cx: "12", cy: "12", r: "3" }),
    ],
  });

export const I = ({ size = 24 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    children: [
      a("path", {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      }),
      a("path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242" }),
      a("path", {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      }),
      a("path", { d: "m2 2 20 20" }),
    ],
  });

export { I as I, d as a };
