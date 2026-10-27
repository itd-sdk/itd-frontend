import {
  A,
  q,
  u,
  ac,
  q_1 as E_1,
  d,
  q as q_1,
  ad,
} from "./index-BQxlThnW-portal20261026.js";
import { u as u_1 } from "./useBodyScrollLock-DKG5YmLv-portal20261026.js";
import { V } from "./VolumeGlyph-qk2s26SZ-portal20261026.js";
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
    const c = new n.Error().stack;

    if (c) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[c] = "c26c25fd-f1e0-42e2-9caa-ddd26597987d";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-c26c25fd-f1e0-42e2-9caa-ddd26597987d";
    }
  } catch {}
})();
const be = "Hx92";
const ye = "Dc5y";
const ke = "sNRI";
const Ee = "d25F";
const F = { wrapper: be, track: ye, fill: ke, thumb: Ee };
function Re({ value, onChange, onDragStart, onDragEnd }) {
  const i = A(null);

  const R = q(
    (d) => {
      const i_current = i.current;
      if (!i_current) {
        return;
      }
      const p = i_current.getBoundingClientRect();
      const y = 1 - (d - p.top) / p.height;
      onChange(Math.max(0, Math.min(1, y)));
    },
    [onChange]
  );

  const P = q(
    (d) => {
      d.stopPropagation();
      d.preventDefault();
      onDragStart?.();
      R(d.clientY);

      const b = (y) => R(y.clientY);

      const p = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", b);
        document.removeEventListener("mouseup", p);
      };

      document.addEventListener("mousemove", b);
      document.addEventListener("mouseup", p);
    },
    [R, onDragStart, onDragEnd]
  );

  const f = 7;
  const L = 80;
  const w = f;
  const x = L - f;
  const $ = w + value * (x - w);
  return u("div", {
    className: F.wrapper,
    onMouseDown: P,
    onClick: (d) => {
      d.stopPropagation();
      d.preventDefault();
    },
    children: u("div", {
      ref: i,
      className: F.track,
      children: [
        u("div", { className: F.fill, style: { height: `${$}px` } }),
        u("div", { className: F.thumb, style: { bottom: `${$}px` } }),
      ],
    }),
  });
}
const Pe = "KZtK";
const xe = "H1oy";
const Ne = "P52f";
const Le = "UPm9";
const $e = "TS1h";
const Ce = "KThb";
const Te = "JaLe";
const Be = "iDx8";
const Se = "PSQX";
const Fe = "iCXJ";
const Me = "fLaN";
const De = "aNqe";
const Ie = "ULwR";
const Ae = "zNRa";
const Ve = "zPEm";
const qe = "j9AQ";
const ze = "Yg8S";
const He = "NcSt";
const Oe = "qd2u";
const _e = "rJRU";
const Ge = "Daal";
const We = "oxBb";
const Xe = "zgE6";

const a = {
  overlay: Pe,
  chrome: xe,
  closing: Ne,
  backdrop: Le,
  overlayFade: $e,
  stage: Ce,
  video: Te,
  poster: Be,
  bottomOverlay: Se,
  controlButton: Fe,
  playButton: Me,
  time: De,
  speedButton: Ie,
  volumeControl: Ae,
  volumeActive: Ve,
  volumeSlider: qe,
  muteButton: ze,
  fullscreenButton: He,
  progressContainer: Oe,
  progressTrack: _e,
  progressBuffered: Ge,
  progressFill: We,
  scrubbing: Xe,
};

const X = 280;
const K = "cubic-bezier(0.32, 0.72, 0, 1)";
const M = [0.5, 1, 1.5, 2];
function Y(n) {
  if (!isFinite(n) || n < 0) {
    return "0:00";
  }
  const c = Math.floor(n / 60);
  const l = Math.floor(n % 60);
  return `${c}:${String(l).padStart(2, "0")}`;
}
function Ke(n, c) {
  const l = Math.min(window.innerWidth / n, window.innerHeight / c);
  return { width: Math.round(n * l), height: Math.round(c * l) };
}
function J(n) {
  const c = parseFloat(n ?? "");
  return Number.isFinite(c) ? c : 0;
}
const U = parseFloat(localStorage.getItem("video-volume") ?? "1");
const Q = Number.isNaN(U) ? 1 : U;

export function GlobalVideoPlayer() {
  const n = ac((i) => i.isOpen);

  const c = ac((i) => i.options);

  const l = ac((i) => i.session);

  const v = ac((i) => i.close);

  return !n || !c
    ? null
    : E_1(u(Ye, { options: c, onUnmount: v }, l), document.body);
}

function Ye({ options, onUnmount }) {
  const l = A(null);
  const v = A(null);
  const i = A(null);
  const R = A(null);
  const [P, f] = d(false);
  const [L, w] = d(options.startTime ?? 0);
  const [x, $] = d(0);
  const [d, b] = d(Q);
  const [p, y] = d(false);
  const [j, Z] = d(1);
  const [ee, H] = d(false);
  const [te, O] = d(false);
  const [ne, re] = d(!!options.poster);

  const [_, oe] = d(() => {
    if (options.width && options.height) {
      return { w: options.width, h: options.height };
    }
    const n_sourceRect = options.sourceRect;
    return n_sourceRect && n_sourceRect.width > 0 && n_sourceRect.height > 0
      ? { w: n_sourceRect.width, h: n_sourceRect.height }
      : { w: 16, h: 9 };
  });

  const [je, se] = d({ w: window.innerWidth, h: window.innerHeight });
  const G = A(false);
  const C = A(false);
  const D = A(false);
  u_1();
  const W = Ke(_.w, _.h);

  q_1(() => {
    const e = () => se({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", e);

    return () => window.removeEventListener("resize", e);
  }, []);

  ad(() => {
    const v_current = v.current;
    const n_sourceRect = options.sourceRect;
    if (!v_current || !n_sourceRect) {
      return;
    }
    const r = v_current.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) {
      return;
    }
    const s = n_sourceRect.width / r.width;
    const u = n_sourceRect.height / r.height;
    const k =
      n_sourceRect.left + n_sourceRect.width / 2 - (r.left + r.width / 2);
    const N =
      n_sourceRect.top + n_sourceRect.height / 2 - (r.top + r.height / 2);
    const z = J(n_sourceRect.borderRadius);
    v_current.animate(
      [
        {
          transform: `translate(${k}px, ${N}px) scale(${s}, ${u})`,
          borderRadius: `${z / Math.max(s, 0.01)}px`,
        },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: X, easing: K, fill: "backwards" }
    );
  }, []);

  const I = q(() => {
    if (G.current) {
      return;
    }
    G.current = true;
    const i_current = i.current;
    options.onCloseStart?.(i_current?.currentTime ?? 0);
    const l_current = l.current;
    const v_current = v.current;
    l_current?.classList.add(a.closing);
    const s = options.resolveCloseRect?.() ?? options.sourceRect ?? null;
    if (!v_current || !s) {
      v_current?.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        easing: "ease-out",
        fill: "forwards",
      });

      setTimeout(onUnmount, 210);
      return;
    }
    const u = v_current.getBoundingClientRect();
    const k = s.width / u.width;
    const N = s.height / u.height;
    const z = s.left + s.width / 2 - (u.left + u.width / 2);
    const he = s.top + s.height / 2 - (u.top + u.height / 2);
    const fe = J(s.borderRadius);
    v_current
      .animate(
        [
          { transform: "none", borderRadius: "0px" },
          {
            transform: `translate(${z}px, ${he}px) scale(${k}, ${N})`,
            borderRadius: `${fe / Math.max(k, 0.01)}px`,
          },
        ],
        { duration: X, easing: K, fill: "forwards" }
      )
      .addEventListener("finish", onUnmount);
  }, [options, onUnmount]);

  q_1(() => {
    const i_current = i.current;

    if (i_current) {
      i_current.volume = Q;
      i_current.playbackRate = M[1];
      options.startTime &&
        options.startTime > 0 &&
        (i_current.currentTime = options.startTime);

      i_current
        .play()
        .then(() => f(true))
        .catch(() => {
          i_current.muted = true;
          y(true);

          i_current
            .play()
            .then(() => f(true))
            .catch(() => {});
        });
    }
  }, []);

  q_1(() => {
    const i_current = i.current;
    return () => {
      if (i_current) {
        try {
          i_current.pause();
          i_current.removeAttribute("src");
          i_current.load();
        } catch {}
      }
    };
  }, []);

  q_1(() => {
    const i_current = i.current;
    if (!i_current || !options.poster) {
      return;
    }
    let t = false;

    const r = () => {
      if (!t) {
        re(false);
      }
    };

    const i_current_requestVideoFrameCallback =
      i_current.requestVideoFrameCallback;
    if (typeof i_current_requestVideoFrameCallback == "function") {
      i_current_requestVideoFrameCallback.call(i_current, r);

      return () => {
        t = true;
      };
    }
    const u = () => requestAnimationFrame(r);
    i_current.addEventListener("playing", u, { once: true });

    return () => {
      t = true;
      i_current.removeEventListener("playing", u);
    };
  }, []);

  q_1(() => {
    if (!P) {
      return;
    }
    let e = 0;
    const t = () => {
      const i_current = i.current;

      if (i_current && !C.current) {
        w(i_current.currentTime);
      }

      e = requestAnimationFrame(t);
    };
    e = requestAnimationFrame(t);

    return () => cancelAnimationFrame(e);
  }, [P]);

  const [ie, ae] = d([]);
  q_1(() => {
    const i_current = i.current;
    if (!i_current) {
      return;
    }
    const t = () => {
      const i_current_duration = i_current.duration;
      if (!Number.isFinite(i_current_duration) || i_current_duration <= 0) {
        return;
      }
      const s = [];
      for (let u = 0; u < i_current.buffered.length; u++) {
        const k = i_current.buffered.start(u);
        const N = i_current.buffered.end(u);
        s.push({
          left: (k / i_current_duration) * 100,
          width: ((N - k) / i_current_duration) * 100,
        });
      }
      ae(s);
    };
    i_current.addEventListener("progress", t);
    i_current.addEventListener("loadedmetadata", t);
    i_current.addEventListener("durationchange", t);
    i_current.addEventListener("seeked", t);
    t();

    return () => {
      i_current.removeEventListener("progress", t);
      i_current.removeEventListener("loadedmetadata", t);
      i_current.removeEventListener("durationchange", t);
      i_current.removeEventListener("seeked", t);
    };
  }, []);

  const T = q(() => {
    const i_current = i.current;

    if (i_current) {
      if (i_current.paused) {
        i_current
          .play()
          .then(() => f(true))
          .catch(() => {});
      } else {
        i_current.pause();
        f(false);
      }
    }
  }, []);

  const A = q((e) => {
    const i_current = i.current;

    if (i_current && Number.isFinite(i_current.duration)) {
      i_current.currentTime = Math.max(
        0,
        Math.min(i_current.duration, i_current.currentTime + e)
      );
      w(i_current.currentTime);
    }
  }, []);

  const V = q(() => {
    const i_current = i.current;

    if (i_current) {
      i_current.muted = !i_current.muted;
      y(i_current.muted);
    }
  }, []);

  const ce = q((e) => {
    b(e);
    localStorage.setItem("video-volume", String(e));
    const i_current = i.current;

    if (i_current) {
      i_current.volume = e;
      i_current.muted = e === 0;
      y(e === 0);
    }
  }, []);

  const ue = q(() => {
    Z((e) => {
      const t = (e + 1) % M.length;

      if (i.current) {
        i.current.playbackRate = M[t];
      }

      return t;
    });
  }, []);

  const B = q(() => {
    const l_current = l.current;
    const i_current = i.current;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }

    if (l_current?.requestFullscreen) {
      l_current.requestFullscreen().catch(() => {});
    } else {
      i_current?.webkitEnterFullscreen?.();
    }
  }, []);

  q_1(() => {
    const e = (t) => {
      switch (t.key) {
        case "Escape": {
          I();
          break;
        }
        case " ": {
          t.preventDefault();
          T();
          break;
        }
        case "ArrowLeft": {
          t.preventDefault();
          A(-5);
          break;
        }
        case "ArrowRight": {
          t.preventDefault();
          A(5);
          break;
        }
        case "m":
        case "M":
        case "ь":
        case "Ь": {
          V();
          break;
        }
        case "f":
        case "F":
        case "а":
        case "А": {
          B();
          break;
        }
      }
    };
    window.addEventListener("keydown", e);

    return () => window.removeEventListener("keydown", e);
  }, [I, T, A, V, B]);

  const q = q((e) => {
    const R_current = R.current;
    const i_current = i.current;
    if (
      !R_current ||
      !i_current ||
      !Number.isFinite(i_current.duration) ||
      i_current.duration <= 0
    ) {
      return;
    }
    const s = R_current.getBoundingClientRect();
    if (s.width <= 0) {
      return;
    }
    const u = Math.min(1, Math.max(0, (e - s.left) / s.width));
    i_current.currentTime = i_current.duration * u;
    w(i_current.currentTime);
  }, []);

  const le = q(
    (e) => {
      e.stopPropagation();
      C.current = true;
      H(true);
      const e_currentTarget = e.currentTarget;
      try {
        e_currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      q(e.clientX);

      const r = (u) => q(u.clientX);

      const s = () => {
        try {
          e_currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        document.removeEventListener("pointermove", r);
        document.removeEventListener("pointerup", s);
        document.removeEventListener("pointercancel", s);
        window.removeEventListener("blur", s);
        H(false);

        setTimeout(() => {
          C.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", r);
      document.addEventListener("pointerup", s);
      document.addEventListener("pointercancel", s);
      window.addEventListener("blur", s);
    },
    [q]
  );

  const de = x > 0 ? (L / x) * 100 : 0;
  const me = !options.sourceRect;
  return u("div", {
    ref: l,
    "data-vp": "overlay",
    className: `${a.overlay} ${me ? a.overlayFade : ""} ym-hide-content`,
    onClick: I,
    children: [
      u("div", { className: a.backdrop }),
      u("div", {
        ref: v,
        "data-vp": "stage",
        className: a.stage,
        style: { width: `${W.width}px`, height: `${W.height}px` },
        onClick: (e) => {
          e.stopPropagation();

          if (!C.current && !D.current) {
            T();
          }
        },
        onDblClick: (e) => {
          e.stopPropagation();
          B();
        },
        children: [
          u("video", {
            ref: i,
            "data-vp": "video",
            src: options.url,
            className: a.video,
            playsInline: true,
            onPlay: () => f(true),
            onPause: () => f(false),
            onEnded: () => f(false),
            onLoadedMetadata: (e) => {
              const e_currentTarget = e.currentTarget;
              $(e_currentTarget.duration);

              if (
                !options.width &&
                e_currentTarget.videoWidth > 0 &&
                e_currentTarget.videoHeight > 0
              ) {
                oe({
                  w: e_currentTarget.videoWidth,
                  h: e_currentTarget.videoHeight,
                });
              }
            },
            onSeeked: (e) => w(e.currentTarget.currentTime),
          }),
          options.poster &&
            ne &&
            u("img", {
              className: a.poster,
              src: options.poster,
              alt: "",
              "aria-hidden": "true",
            }),
          u("div", {
            className: `${a.chrome} ${a.bottomOverlay}`,
            onDblClick: (e) => e.stopPropagation(),
            children: [
              u("button", {
                type: "button",
                className: `${a.controlButton} ${a.playButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  T();
                },
                "aria-label": P ? "Пауза" : "Воспроизвести",
                children: P ? u(Ue, {}) : u(Je, {}),
              }),
              u("span", { className: a.time, children: [Y(L), " / ", Y(x)] }),
              u("button", {
                type: "button",
                className: `${a.controlButton} ${a.speedButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  ue();
                },
                "aria-label": "Скорость воспроизведения",
                children: [M[j], "×"],
              }),
              u("div", {
                className: `${a.volumeControl} ${te ? a.volumeActive : ""}`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  u("div", {
                    className: a.volumeSlider,
                    children: u(Re, {
                      value: p ? 0 : d,
                      onChange: ce,
                      onDragStart: () => {
                        D.current = true;
                        O(true);
                      },
                      onDragEnd: () => {
                        O(false);

                        setTimeout(() => {
                          D.current = false;
                        }, 0);
                      },
                    }),
                  }),
                  u("button", {
                    type: "button",
                    className: a.muteButton,
                    onClick: (e) => {
                      e.stopPropagation();
                      V();
                    },
                    "aria-label": p ? "Включить звук" : "Выключить звук",
                    children: u(V, { muted: p || d === 0, volume: d }),
                  }),
                ],
              }),
              u("button", {
                type: "button",
                className: `${a.controlButton} ${a.fullscreenButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  B();
                },
                "aria-label": "На весь экран",
                children: u(Qe, {}),
              }),
              u("div", {
                "data-vp": "progress",
                className: a.progressContainer,
                onPointerDown: le,
                onClick: (e) => e.stopPropagation(),
                children: u("div", {
                  ref: R,
                  className: a.progressTrack,
                  children: [
                    ie.map((e, t) =>
                      u(
                        "div",
                        {
                          className: a.progressBuffered,
                          style: { left: `${e.left}%`, width: `${e.width}%` },
                        },
                        t
                      )
                    ),
                    u("div", {
                      className: `${a.progressFill} ${ee ? a.scrubbing : ""}`,
                      style: { width: `${de}%` },
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Je() {
  return u("svg", {
    width: "13",
    height: "14",
    viewBox: "0 0 13 14",
    fill: "none",
    "aria-hidden": "true",
    children: u("path", {
      fill: "currentColor",
      d: "M12 5.3a2 2 0 0 1 0 3.4l-9 5c-1.3.8-3-.2-3-1.6V1.9C0 .5 1.7-.5 3 .3z",
    }),
  });
}
function Ue() {
  return u("svg", {
    width: "13",
    height: "14",
    viewBox: "0 0 13 14",
    fill: "currentColor",
    "aria-hidden": "true",
    children: [
      u("rect", { width: "4", height: "14", rx: "2" }),
      u("rect", { x: "9", width: "4", height: "14", rx: "2" }),
    ],
  });
}
function Qe() {
  return u("svg", {
    width: "19",
    height: "18",
    viewBox: "0 0 25 24",
    fill: "none",
    "aria-hidden": "true",
    children: u("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "3",
      d: "M4 16q0 5 5 5M22 16q0 5-5 5M22 8q0-5-5-5M4 8q0-5 5-5",
    }),
  });
}
export { GlobalVideoPlayer as GlobalVideoPlayer };
