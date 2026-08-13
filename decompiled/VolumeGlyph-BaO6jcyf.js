import { u, k } from "./index-B9FitUXy.js";
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
      e._sentryDebugIds[n] = "5edf628d-187b-4e76-b80a-b43e93fc318a";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-5edf628d-187b-4e76-b80a-b43e93fc318a";
    }
  } catch {}
})();

export function V({ muted = false, volume = 1, size = 20 }) {
  const o = muted || volume === 0;
  const r = !o && volume < 0.7;
  return u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    "aria-hidden": "true",
    children: u("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [
        u("path", {
          d: "M9.2 4a.6.6 0 0 0-1-.5L5.3 6.3l-.8.4h-2a1 1 0 0 0-.8.8v5a1 1 0 0 0 .8.8h2l.8.4 2.9 2.8a.6.6 0 0 0 1-.4z",
        }),
        o
          ? u("path", { d: "M13.5 8l4 4M17.5 8l-4 4" })
          : u(k, {
              children: [
                u("path", { d: "M13.3 7.5a4 4 0 0 1 0 5" }),
                !r && u("path", { d: "M16.1 15.3a7.5 7.5 0 0 0 0-10.6" }),
              ],
            }),
      ],
    }),
  });
}

export { V as V };
