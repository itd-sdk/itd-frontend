import {
  d as u_1,
  A as A_1,
  d,
  y,
  $ as $_1,
  a,
  I,
  b,
} from "./index-BCnJB3wz.js";
(() => {
  try {
    const n =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    n.SENTRY_RELEASE = { id: "1.1.1" };
    const c = new n.Error().stack;

    if (c) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[c] = "3b808ec7-c32f-45d1-871c-d06b13b8fb84";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-3b808ec7-c32f-45d1-871c-d06b13b8fb84";
    }
  } catch {}
})();
const R = "m7c0";
const $ = "BaFr";
const A = "GUqE";
const _ = "TpVt";
const G = "qj8J";
const H = "q2J0";
const J = "XYwE";
const z = "EUkv";
const O = "wVG1";
const U = "Jqqe";
const W = "HwD1";

const o = {
  backdrop: R,
  closeBtn: $,
  stage: A,
  video: _,
  controls: G,
  ctrlBtn: H,
  speedBtn: J,
  time: z,
  progressTrack: O,
  progressBar: U,
  volSlider: W,
};

const f = [0.5, 1, 1.5, 2];
function N(n) {
  if (!isFinite(n) || n < 0) {
    return "0:00";
  }
  const c = Math.floor(n / 60);
  const i = Math.floor(n % 60);
  return `${c}:${String(i).padStart(2, "0")}`;
}

export function GlobalVideoPlayer() {
  const n = u_1((e) => e.isOpen);

  const c = u_1((e) => e.url);

  const i = u_1((e) => e.close);

  const s = A_1(null);
  const [p, a] = d(false);
  const [k, h] = d(0);
  const [l, w] = d(0);
  const [B, C] = d(1);
  const [m, g] = d(false);
  const [T, I] = d(1);

  y(() => {
    if (!n) {
      return;
    }
    const e = (r) => {
      if (r.key === "Escape") {
        i();
      }

      if (r.key === " ") {
        r.preventDefault();
        b();
      }
    };
    window.addEventListener("keydown", e);

    return () => window.removeEventListener("keydown", e);
  }, [n]);

  y(() => {
    if (!n) {
      a(false);
      h(0);
      w(0);
      I(1);
      return;
    }
    const s_current = s.current;

    if (s_current) {
      s_current.playbackRate = f[1];

      s_current
        .play()
        .then(() => a(true))
        .catch(() => {});
    }
  }, [n]);

  y(() => {
    if (!p) {
      return;
    }
    let e = 0;
    const r = () => {
      const s_current = s.current;

      if (s_current) {
        h(s_current.currentTime);
      }

      e = requestAnimationFrame(r);
    };
    e = requestAnimationFrame(r);

    return () => cancelAnimationFrame(e);
  }, [p]);

  if (!n || !c) {
    return null;
  }

  const b = () => {
    const s_current = s.current;

    if (s_current) {
      if (s_current.paused) {
        s_current
          .play()
          .then(() => a(true))
          .catch(() => {});
      } else {
        s_current.pause();
        a(false);
      }
    }
  };

  const E = (e) => {
    const s_current = s.current;
    if (!s_current || l <= 0) {
      return;
    }
    const d = e.currentTarget.getBoundingClientRect();
    const V = (e.clientX - d.left) / d.width;
    s_current.currentTime = Math.max(0, Math.min(l, V * l));
  };

  const P = () => {
    const e = (T + 1) % f.length;
    I(e);

    if (s.current) {
      s.current.playbackRate = f[e];
    }
  };

  const S = () => {
    const s_current = s.current;

    if (s_current) {
      s_current.muted = !s_current.muted;
      g(s_current.muted);
    }
  };

  const x = (e) => {
    const r = Number(e.currentTarget.value);
    C(r);

    if (s.current) {
      s.current.volume = r;
      s.current.muted = r === 0;
      g(r === 0);
    }
  };

  const M = l > 0 ? (k / l) * 100 : 0;
  return $_1(
    a("div", {
      className: o.backdrop,
      onClick: i,
      children: [
        a("button", {
          type: "button",
          className: o.closeBtn,
          onClick: (e) => {
            e.stopPropagation();
            i();
          },
          "aria-label": "Закрыть",
          children: a(I, { size: 24 }),
        }),
        a("div", {
          className: o.stage,
          onClick: (e) => e.stopPropagation(),
          children: [
            a("video", {
              ref: s,
              src: c,
              className: o.video,
              playsInline: true,
              onClick: b,
              onPlay: () => a(true),
              onPause: () => a(false),
              onLoadedMetadata: (e) => w(e.currentTarget.duration),
              onSeeked: (e) => h(e.currentTarget.currentTime),
              onEnded: () => a(false),
              onVolumeChange: (e) => {
                C(e.currentTarget.volume);
                g(e.currentTarget.muted);
              },
            }),
            a("div", {
              className: o.controls,
              onClick: (e) => e.stopPropagation(),
              children: [
                a("button", {
                  type: "button",
                  className: o.ctrlBtn,
                  onClick: b,
                  "aria-label": p ? "Пауза" : "Воспроизвести",
                  children: p ? a(X, {}) : a(b, { size: 16 }),
                }),
                a("span", { className: o.time, children: N(k) }),
                a("div", {
                  className: o.progressTrack,
                  onClick: E,
                  children: a("div", {
                    className: o.progressBar,
                    style: { width: `${M}%` },
                  }),
                }),
                a("span", { className: o.time, children: N(l) }),
                a("button", {
                  type: "button",
                  className: `${o.ctrlBtn} ${o.speedBtn}`,
                  onClick: P,
                  "aria-label": "Скорость",
                  children: [f[T], "×"],
                }),
                a("button", {
                  type: "button",
                  className: o.ctrlBtn,
                  onClick: S,
                  "aria-label": m ? "Включить звук" : "Выключить звук",
                  children: m || B === 0 ? a(Z, {}) : a(Y, {}),
                }),
                a("input", {
                  className: o.volSlider,
                  type: "range",
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: m ? 0 : B,
                  onInput: x,
                  "aria-label": "Громкость",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    document.body
  );
}

function X() {
  return a("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    children: [
      a("rect", { x: "6", y: "5", width: "4", height: "14", rx: "1" }),
      a("rect", { x: "14", y: "5", width: "4", height: "14", rx: "1" }),
    ],
  });
}
function Y() {
  return a("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [
      a("path", { d: "M11 5L6 9H3v6h3l5 4V5Z", fill: "currentColor" }),
      a("path", {
        d: "M15.5 8.5a5 5 0 0 1 0 7",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
    ],
  });
}
function Z() {
  return a("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [
      a("path", { d: "M11 5L6 9H3v6h3l5 4V5Z", fill: "currentColor" }),
      a("path", {
        d: "M17 9L21 13M21 9L17 13",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
    ],
  });
}
export { GlobalVideoPlayer as GlobalVideoPlayer };
