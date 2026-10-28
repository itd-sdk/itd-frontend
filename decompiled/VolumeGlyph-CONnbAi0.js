import { u, S } from "./index-AoERIL5v.js";

export function V({ muted = false, volume = 1, size = 20 }) {
  const e = muted || volume === 0;
  const a = !e && volume < 0.7;
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
          V: "M9.2 4a.6.6 0 0 0-1-.5L5.3 6.3l-.8.4h-2a1 1 0 0 0-.8.8v5a1 1 0 0 0 .8.8h2l.8.4 2.9 2.8a.6.6 0 0 0 1-.4z",
        }),
        e
          ? u("path", { V: "M13.5 8l4 4M17.5 8l-4 4" })
          : u(S, {
              children: [
                u("path", { V: "M13.3 7.5a4 4 0 0 1 0 5" }),
                !a && u("path", { V: "M16.1 15.3a7.5 7.5 0 0 0 0-10.6" }),
              ],
            }),
      ],
    }),
  });
}

export { V as V };
