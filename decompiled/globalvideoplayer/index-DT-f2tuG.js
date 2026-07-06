import {
  u,
  A as A_1,
  d,
  u as u_1,
  u_1_1 as $_1,
  a,
  I,
  u_1 as u_1_1,
} from "./index-CFv_0Hh6.js";
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
    n.SENTRY_RELEASE = { id: "1.1.2" };
    const a = new n.Error().stack;

    if (a) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[a] = "25fba393-16dd-4ce6-801b-9f874478d3e0";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-25fba393-16dd-4ce6-801b-9f874478d3e0";
    }
  } catch {}
})();
const A = "WYTB";
const F = "jHai";
const _ = "g0p9";
const j = "XG9Y";
const H = "hhM9";
const W = "vonp";
const Y = "oe9j";
const q = "PLTi";
const z = "jnnI";
const G = "xaxT";
const O = "kIbf";

const o = {
  backdrop: A,
  closeBtn: F,
  stage: _,
  video: j,
  controls: H,
  ctrlBtn: W,
  speedBtn: Y,
  time: q,
  progressTrack: z,
  progressBar: G,
  volSlider: O,
};

const f = [0.5, 1, 1.5, 2];
function x(n) {
  if (!isFinite(n) || n < 0) {
    return "0:00";
  }
  const a = Math.floor(n / 60);
  const i = Math.floor(n % 60);
  return `${a}:${String(i).padStart(2, "0")}`;
}

export function GlobalVideoPlayer() {
  const n = u((e) => e.isOpen);

  const a = u((e) => e.url);

  const i = u((e) => e.close);

  const s = A_1(null);
  const [p, c] = d(false);
  const [k, h] = d(0);
  const [l, w] = d(0);
  const [T, B] = d(1);
  const [m, g] = d(false);
  const [C, I] = d(1);

  u_1(() => {
    if (!n) {
      return;
    }
    const e = (r) => {
      if (r.key === "Escape") {
        i();
      }

      if (r.key === " ") {
        r.preventDefault();
        v();
      }
    };
    window.addEventListener("keydown", e);

    return () => window.removeEventListener("keydown", e);
  }, [n]);

  u_1(() => {
    if (!n) {
      c(false);
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
        .then(() => c(true))
        .catch(() => {});
    }
  }, [n]);

  u_1(() => {
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

  if (!n || !a) {
    return null;
  }

  const v = () => {
    const s_current = s.current;

    if (s_current) {
      if (s_current.paused) {
        s_current
          .play()
          .then(() => c(true))
          .catch(() => {});
      } else {
        s_current.pause();
        c(false);
      }
    }
  };

  const N = (e) => {
    const s_current = s.current;
    if (!s_current || l <= 0) {
      return;
    }
    const u = e.currentTarget.getBoundingClientRect();
    const L = (e.clientX - u.left) / u.width;
    s_current.currentTime = Math.max(0, Math.min(l, L * l));
  };

  const P = () => {
    const e = (C + 1) % f.length;
    I(e);

    if (s.current) {
      s.current.playbackRate = f[e];
    }
  };

  const M = () => {
    const s_current = s.current;

    if (s_current) {
      s_current.muted = !s_current.muted;
      g(s_current.muted);
    }
  };

  const S = (e) => {
    const r = Number(e.currentTarget.value);
    B(r);

    if (s.current) {
      s.current.volume = r;
      s.current.muted = r === 0;
      g(r === 0);
    }
  };

  const E = l > 0 ? (k / l) * 100 : 0;
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
              src: a,
              className: o.video,
              playsInline: true,
              onClick: v,
              onPlay: () => c(true),
              onPause: () => c(false),
              onLoadedMetadata: (e) => w(e.currentTarget.duration),
              onSeeked: (e) => h(e.currentTarget.currentTime),
              onEnded: () => c(false),
              onVolumeChange: (e) => {
                B(e.currentTarget.volume);
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
                  onClick: v,
                  "aria-label": p ? "Пауза" : "Воспроизвести",
                  children: p ? a(X, {}) : a(u_1_1, { size: 16 }),
                }),
                a("span", { className: o.time, children: x(k) }),
                a("div", {
                  className: o.progressTrack,
                  onClick: N,
                  children: a("div", {
                    className: o.progressBar,
                    style: { width: `${E}%` },
                  }),
                }),
                a("span", { className: o.time, children: x(l) }),
                a("button", {
                  type: "button",
                  className: `${o.ctrlBtn} ${o.speedBtn}`,
                  onClick: P,
                  "aria-label": "Скорость",
                  children: [f[C], "×"],
                }),
                a("button", {
                  type: "button",
                  className: o.ctrlBtn,
                  onClick: M,
                  "aria-label": m ? "Включить звук" : "Выключить звук",
                  children: m || T === 0 ? a(K, {}) : a(Z, {}),
                }),
                a("input", {
                  className: o.volSlider,
                  type: "range",
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: m ? 0 : T,
                  onInput: S,
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
        d: "M15.5 8.5a5 5 0 0 1 0 7",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
    ],
  });
}
function K() {
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
