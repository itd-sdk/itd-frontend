import {
  d as u_1,
  A as A_1,
  d,
  y,
  $ as $_1,
  a,
  I,
  y as y_1,
} from "./index-7xRaK15k.js";
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
    const s = new n.Error().stack;

    if (s) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[s] = "27c90c3d-c58c-4aaf-aeed-5f866bc1fa22";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-27c90c3d-c58c-4aaf-aeed-5f866bc1fa22";
    }
  } catch {}
})();
const $ = "KqG5";
const q = "tfDk";
const A = "yJeh";
const _ = "qzCh";
const z = "ihhR";
const H = "b4jo";
const K = "UMFm";
const O = "nfOV";
const G = "T0Ey";
const W = "HaCK";
const Z = "e9dq";

const o = {
  backdrop: $,
  closeBtn: q,
  stage: A,
  video: _,
  controls: z,
  ctrlBtn: H,
  speedBtn: K,
  time: O,
  progressTrack: G,
  progressBar: W,
  volSlider: Z,
};

const h = [0.5, 1, 1.5, 2];
function N(n) {
  if (!isFinite(n) || n < 0) {
    return "0:00";
  }
  const s = Math.floor(n / 60);
  const i = Math.floor(n % 60);
  return `${s}:${String(i).padStart(2, "0")}`;
}

export function GlobalVideoPlayer() {
  const n = u_1((e) => e.isOpen);

  const s = u_1((e) => e.url);

  const i = u_1((e) => e.close);

  const c = A_1(null);
  const [f, a] = d(false);
  const [k, p] = d(0);
  const [l, w] = d(0);
  const [C, B] = d(1);
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
      a(false);
      p(0);
      w(0);
      I(1);
      return;
    }
    const c_current = c.current;

    if (c_current) {
      c_current.playbackRate = h[1];

      c_current
        .play()
        .then(() => a(true))
        .catch(() => {});
    }
  }, [n]);

  y(() => {
    if (!f) {
      return;
    }
    let e = 0;
    const r = () => {
      const c_current = c.current;

      if (c_current) {
        p(c_current.currentTime);
      }

      e = requestAnimationFrame(r);
    };
    e = requestAnimationFrame(r);

    return () => cancelAnimationFrame(e);
  }, [f]);

  if (!n || !s) {
    return null;
  }

  const y = () => {
    const c_current = c.current;

    if (c_current) {
      if (c_current.paused) {
        c_current
          .play()
          .then(() => a(true))
          .catch(() => {});
      } else {
        c_current.pause();
        a(false);
      }
    }
  };

  const M = (e) => {
    const c_current = c.current;
    if (!c_current || l <= 0) {
      return;
    }
    const d = e.currentTarget.getBoundingClientRect();
    const L = (e.clientX - d.left) / d.width;
    c_current.currentTime = Math.max(0, Math.min(l, L * l));
  };

  const P = () => {
    const e = (T + 1) % h.length;
    I(e);

    if (c.current) {
      c.current.playbackRate = h[e];
    }
  };

  const S = () => {
    const c_current = c.current;

    if (c_current) {
      c_current.muted = !c_current.muted;
      g(c_current.muted);
    }
  };

  const x = (e) => {
    const r = Number(e.currentTarget.value);
    B(r);

    if (c.current) {
      c.current.volume = r;
      c.current.muted = r === 0;
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
              ref: c,
              src: s,
              className: o.video,
              playsInline: true,
              onClick: y,
              onPlay: () => a(true),
              onPause: () => a(false),
              onLoadedMetadata: (e) => w(e.currentTarget.duration),
              onSeeked: (e) => p(e.currentTarget.currentTime),
              onEnded: () => a(false),
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
                  onClick: y,
                  "aria-label": f ? "Пауза" : "Воспроизвести",
                  children: f ? a(j, {}) : a(y_1, { size: 16 }),
                }),
                a("span", { className: o.time, children: N(k) }),
                a("div", {
                  className: o.progressTrack,
                  onClick: M,
                  children: a("div", {
                    className: o.progressBar,
                    style: { width: `${E}%` },
                  }),
                }),
                a("span", { className: o.time, children: N(l) }),
                a("button", {
                  type: "button",
                  className: `${o.ctrlBtn} ${o.speedBtn}`,
                  onClick: P,
                  "aria-label": "Скорость",
                  children: [h[T], "×"],
                }),
                a("button", {
                  type: "button",
                  className: o.ctrlBtn,
                  onClick: S,
                  "aria-label": m ? "Включить звук" : "Выключить звук",
                  children: m || C === 0 ? a(U, {}) : a(J, {}),
                }),
                a("input", {
                  className: o.volSlider,
                  type: "range",
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: m ? 0 : C,
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
function J() {
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
