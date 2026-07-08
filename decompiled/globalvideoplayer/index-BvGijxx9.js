import {
  d as u_1,
  I as A_1,
  d,
  u_1 as u_1_1,
  $ as $_1,
  a,
  I,
  b,
} from "./index-BewGW5_v.js";
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
      n._sentryDebugIds[a] = "2605b8b7-7a43-4f9d-bb14-921f8bfc5abc";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-2605b8b7-7a43-4f9d-bb14-921f8bfc5abc";
    }
  } catch {}
})();
const R = "Hgg3";
const $ = "MJzV";
const z = "HAXa";
const _ = "FzzI";
const H = "MPdP";
const q = "J3k0";
const K = "BDpZ";
const W = "TTw5";
const Z = "qK1G";
const G = "UKgw";
const J = "AmW6";

const o = {
  backdrop: R,
  closeBtn: $,
  stage: z,
  video: _,
  controls: H,
  ctrlBtn: q,
  speedBtn: K,
  time: W,
  progressTrack: Z,
  progressBar: G,
  volSlider: J,
};

const p = [0.5, 1, 1.5, 2];
function P(n) {
  if (!isFinite(n) || n < 0) {
    return "0:00";
  }
  const a = Math.floor(n / 60);
  const i = Math.floor(n % 60);
  return `${a}:${String(i).padStart(2, "0")}`;
}

export function GlobalVideoPlayer() {
  const n = u_1((e) => e.isOpen);

  const a = u_1((e) => e.url);

  const i = u_1((e) => e.close);

  const s = A_1(null);
  const [f, c] = d(false);
  const [k, h] = d(0);
  const [l, w] = d(0);
  const [B, T] = d(1);
  const [m, g] = d(false);
  const [C, I] = d(1);

  u_1_1(() => {
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

  u_1_1(() => {
    if (!n) {
      c(false);
      h(0);
      w(0);
      I(1);
      return;
    }
    const s_current = s.current;

    if (s_current) {
      s_current.playbackRate = p[1];

      s_current
        .play()
        .then(() => c(true))
        .catch(() => {});
    }
  }, [n]);

  u_1_1(() => {
    if (!f) {
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
  }, [f]);

  if (!n || !a) {
    return null;
  }

  const b = () => {
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

  const M = (e) => {
    const s_current = s.current;
    if (!s_current || l <= 0) {
      return;
    }
    const d = e.currentTarget.getBoundingClientRect();
    const L = (e.clientX - d.left) / d.width;
    s_current.currentTime = Math.max(0, Math.min(l, L * l));
  };

  const N = () => {
    const e = (C + 1) % p.length;
    I(e);

    if (s.current) {
      s.current.playbackRate = p[e];
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
    T(r);

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
              onClick: b,
              onPlay: () => c(true),
              onPause: () => c(false),
              onLoadedMetadata: (e) => w(e.currentTarget.duration),
              onSeeked: (e) => h(e.currentTarget.currentTime),
              onEnded: () => c(false),
              onVolumeChange: (e) => {
                T(e.currentTarget.volume);
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
                  "aria-label": f ? "Пауза" : "Воспроизвести",
                  children: f ? a(O, {}) : a(b, { size: 16 }),
                }),
                a("span", { className: o.time, children: P(k) }),
                a("div", {
                  className: o.progressTrack,
                  onClick: M,
                  children: a("div", {
                    className: o.progressBar,
                    style: { width: `${E}%` },
                  }),
                }),
                a("span", { className: o.time, children: P(l) }),
                a("button", {
                  type: "button",
                  className: `${o.ctrlBtn} ${o.speedBtn}`,
                  onClick: N,
                  "aria-label": "Скорость",
                  children: [p[C], "×"],
                }),
                a("button", {
                  type: "button",
                  className: o.ctrlBtn,
                  onClick: S,
                  "aria-label": m ? "Включить звук" : "Выключить звук",
                  children: m || B === 0 ? a(U, {}) : a(X, {}),
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

function O() {
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
        d: "M15.5 8.5a5 5 0 0 1 0 7",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
    ],
  });
}
function U() {
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
