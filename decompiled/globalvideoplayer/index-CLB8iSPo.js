import {
  u,
  y_1 as A_1,
  d,
  y,
  $ as $_1,
  a,
  I,
  y as y_1,
} from "./index-DuQT229k.js";
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
      n._sentryDebugIds[a] = "de58967d-3d3a-4836-827b-09374e5060be";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-de58967d-3d3a-4836-827b-09374e5060be";
    }
  } catch {}
})();
const $ = "mSSt";
const F = "yoYv";
const _ = "jW4R";
const z = "LOzC";
const H = "gEiP";
const K = "KEHw";
const O = "La6r";
const W = "tzAK";
const q = "Mxaf";
const Y = "Bf10";
const Z = "fP6M";

const o = {
  backdrop: $,
  closeBtn: F,
  stage: _,
  video: z,
  controls: H,
  ctrlBtn: K,
  speedBtn: O,
  time: W,
  progressTrack: q,
  progressBar: Y,
  volSlider: Z,
};

const f = [0.5, 1, 1.5, 2];
function P(n) {
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
        y();
      }
    };
    window.addEventListener("keydown", e);

    return () => window.removeEventListener("keydown", e);
  }, [n]);

  y(() => {
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

  if (!n || !a) {
    return null;
  }

  const y = () => {
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

  const S = (e) => {
    const s_current = s.current;
    if (!s_current || l <= 0) {
      return;
    }
    const u = e.currentTarget.getBoundingClientRect();
    const L = (e.clientX - u.left) / u.width;
    s_current.currentTime = Math.max(0, Math.min(l, L * l));
  };

  const M = () => {
    const e = (T + 1) % f.length;
    I(e);

    if (s.current) {
      s.current.playbackRate = f[e];
    }
  };

  const N = () => {
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
              onClick: y,
              onPlay: () => c(true),
              onPause: () => c(false),
              onLoadedMetadata: (e) => w(e.currentTarget.duration),
              onSeeked: (e) => h(e.currentTarget.currentTime),
              onEnded: () => c(false),
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
                  onClick: y,
                  "aria-label": p ? "Пауза" : "Воспроизвести",
                  children: p ? a(j, {}) : a(y_1, { size: 16 }),
                }),
                a("span", { className: o.time, children: P(k) }),
                a("div", {
                  className: o.progressTrack,
                  onClick: S,
                  children: a("div", {
                    className: o.progressBar,
                    style: { width: `${E}%` },
                  }),
                }),
                a("span", { className: o.time, children: P(l) }),
                a("button", {
                  type: "button",
                  className: `${o.ctrlBtn} ${o.speedBtn}`,
                  onClick: M,
                  "aria-label": "Скорость",
                  children: [f[T], "×"],
                }),
                a("button", {
                  type: "button",
                  className: o.ctrlBtn,
                  onClick: N,
                  "aria-label": m ? "Включить звук" : "Выключить звук",
                  children: m || B === 0 ? a(X, {}) : a(G, {}),
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

function j() {
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
function G() {
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
function X() {
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
