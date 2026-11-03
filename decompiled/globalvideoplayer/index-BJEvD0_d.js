import { A, q, u, aa, v, d, q as q_1, ab } from "./index-GOT6tyDH.js";
import { u as u_1 } from "./useBodyScrollLock-DywDeMut.js";
import { V } from "./VolumeGlyph-5Z1UAFst.js";
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
      n._sentryDebugIds[c] = "192ca5a3-c21a-4c71-ad24-de6e11d015f5";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-192ca5a3-c21a-4c71-ad24-de6e11d015f5";
    }
  } catch {}
})();
const be = "qAYs";
const ye = "wGC2";
const ke = "C4TS";
const Ee = "hJ2O";
const S = { wrapper: be, track: ye, fill: ke, thumb: Ee };
function Pe({ value, onChange, onDragStart, onDragEnd }) {
  const i = A(null);

  const P = q(
    (d) => {
      const i_current = i.current;
      if (!i_current) {
        return;
      }
      const v = i_current.getBoundingClientRect();
      const y = 1 - (d - v.top) / v.height;
      onChange(Math.max(0, Math.min(1, y)));
    },
    [onChange]
  );

  const R = q(
    (d) => {
      d.stopPropagation();
      d.preventDefault();
      onDragStart?.();
      P(d.clientY);

      const b = (y) => P(y.clientY);

      const v = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", b);
        document.removeEventListener("mouseup", v);
      };

      document.addEventListener("mousemove", b);
      document.addEventListener("mouseup", v);
    },
    [P, onDragStart, onDragEnd]
  );

  const f = 7;
  const N = 80;
  const w = f;
  const x = N - f;
  const $ = w + value * (x - w);
  return onDragStart("div", {
    className: S.wrapper,
    onMouseDown: R,
    onClick: (d) => {
      d.stopPropagation();
      d.preventDefault();
    },
    children: onDragStart("div", {
      ref: i,
      className: S.track,
      children: [
        onDragStart("div", { className: S.fill, style: { height: `${$}px` } }),
        onDragStart("div", { className: S.thumb, style: { bottom: `${$}px` } }),
      ],
    }),
  });
}
const Re = "RIVH";
const xe = "Yn8i";
const Ce = "Qjjz";
const Ne = "uknh";
const $e = "BP4j";
const Te = "tTW1";
const Be = "f9Em";
const Le = "tj7M";
const Me = "OIwk";
const Se = "fz0f";
const Fe = "NHja";
const Ie = "jtY8";
const Ae = "u5o2";
const De = "OgvA";
const Ve = "bJOQ";
const qe = "VmSK";
const Oe = "rjoF";
const ze = "BA2x";
const He = "ll6H";
const _e = "YZtP";
const je = "lJoz";
const Ge = "MX45";
const We = "v3ze";

const a = {
  overlay: Re,
  chrome: xe,
  closing: Ce,
  backdrop: Ne,
  overlayFade: $e,
  stage: Te,
  video: Be,
  poster: Le,
  bottomOverlay: Me,
  controlButton: Se,
  playButton: Fe,
  time: Ie,
  speedButton: Ae,
  volumeControl: De,
  volumeActive: Ve,
  volumeSlider: qe,
  muteButton: Oe,
  fullscreenButton: ze,
  progressContainer: He,
  progressTrack: _e,
  progressBuffered: je,
  progressFill: Ge,
  scrubbing: We,
};

const W = 280;
const Y = "cubic-bezier(0.32, 0.72, 0, 1)";
const F = [0.5, 1, 1.5, 2];
function X(n) {
  if (!isFinite(n) || n < 0) {
    return "0:00";
  }
  const c = Math.floor(n / 60);
  const u = Math.floor(n % 60);
  return `${c}:${String(u).padStart(2, "0")}`;
}
function Ye(n, c) {
  const u = Math.min(window.innerWidth / n, window.innerHeight / c);
  return { width: Math.round(n * u), height: Math.round(c * u) };
}
function J(n) {
  const c = parseFloat(n ?? "");
  return Number.isFinite(c) ? c : 0;
}
const K = parseFloat(localStorage.getItem("video-volume") ?? "1");
const Q = Number.isNaN(K) ? 1 : K;

export function GlobalVideoPlayer() {
  const n = aa((i) => i.isOpen);

  const c = aa((i) => i.options);

  const u = aa((i) => i.session);

  const p = aa((i) => i.close);

  return !n || !c
    ? null
    : v(u(Xe, { options: c, onUnmount: p }, u), document.body);
}

function Xe({ options, onUnmount }) {
  const u = A(null);
  const p = A(null);
  const i = A(null);
  const P = A(null);
  const [R, f] = d(false);
  const [N, w] = d(options.startTime ?? 0);
  const [x, $] = d(0);
  const [d, b] = d(Q);
  const [v, y] = d(false);
  const [Z, U] = d(1);
  const [ee, z] = d(false);
  const [te, H] = d(false);
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

  const [Ze, se] = d({ w: window.innerWidth, h: window.innerHeight });
  const j = A(false);
  const T = A(false);
  const I = A(false);
  u_1();
  const G = Ye(_.w, _.h);

  q_1(() => {
    const e = () => se({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", e);

    return () => window.removeEventListener("resize", e);
  }, []);

  ab(() => {
    const p_current = p.current;
    const n_sourceRect = options.sourceRect;
    if (!p_current || !n_sourceRect) {
      return;
    }
    const r = p_current.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) {
      return;
    }
    const s = n_sourceRect.width / r.width;
    const l = n_sourceRect.height / r.height;
    const k =
      n_sourceRect.left + n_sourceRect.width / 2 - (r.left + r.width / 2);
    const C =
      n_sourceRect.top + n_sourceRect.height / 2 - (r.top + r.height / 2);
    const O = J(n_sourceRect.borderRadius);
    p_current.animate(
      [
        {
          transform: `translate(${k}px, ${C}px) scale(${s}, ${l})`,
          borderRadius: `${O / Math.max(s, 0.01)}px`,
        },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: W, easing: Y, fill: "backwards" }
    );
  }, []);

  const A = q(() => {
    if (j.current) {
      return;
    }
    j.current = true;
    const i_current = i.current;
    options.onCloseStart?.(i_current?.currentTime ?? 0);
    const u_current = u.current;
    const p_current = p.current;
    u_current?.classList.add(a.closing);
    const s = options.resolveCloseRect?.() ?? options.sourceRect ?? null;
    if (!p_current || !s) {
      p_current?.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        easing: "ease-out",
        fill: "forwards",
      });

      setTimeout(onUnmount, 210);
      return;
    }
    const l = p_current.getBoundingClientRect();
    const k = s.width / l.width;
    const C = s.height / l.height;
    const O = s.left + s.width / 2 - (l.left + l.width / 2);
    const he = s.top + s.height / 2 - (l.top + l.height / 2);
    const fe = J(s.borderRadius);
    p_current
      .animate(
        [
          { transform: "none", borderRadius: "0px" },
          {
            transform: `translate(${O}px, ${he}px) scale(${k}, ${C})`,
            borderRadius: `${fe / Math.max(k, 0.01)}px`,
          },
        ],
        { duration: W, easing: Y, fill: "forwards" }
      )
      .addEventListener("finish", onUnmount);
  }, [options, onUnmount]);

  q_1(() => {
    const i_current = i.current;

    if (i_current) {
      i_current.volume = Q;
      i_current.playbackRate = F[1];
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
    const l = () => requestAnimationFrame(r);
    i_current.addEventListener("playing", l, { once: true });

    return () => {
      t = true;
      i_current.removeEventListener("playing", l);
    };
  }, []);

  q_1(() => {
    if (!R) {
      return;
    }
    let e = 0;
    const t = () => {
      const i_current = i.current;

      if (i_current && !T.current) {
        w(i_current.currentTime);
      }

      e = requestAnimationFrame(t);
    };
    e = requestAnimationFrame(t);

    return () => cancelAnimationFrame(e);
  }, [R]);

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
      for (let l = 0; l < i_current.buffered.length; l++) {
        const k = i_current.buffered.start(l);
        const C = i_current.buffered.end(l);
        s.push({
          left: (k / i_current_duration) * 100,
          width: ((C - k) / i_current_duration) * 100,
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

  const B = q(() => {
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

  const D = q((e) => {
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

  const le = q(() => {
    U((e) => {
      const t = (e + 1) % F.length;

      if (i.current) {
        i.current.playbackRate = F[t];
      }

      return t;
    });
  }, []);

  const L = q(() => {
    const u_current = u.current;
    const i_current = i.current;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }

    if (u_current?.requestFullscreen) {
      u_current.requestFullscreen().catch(() => {});
    } else {
      i_current?.webkitEnterFullscreen?.();
    }
  }, []);

  q_1(() => {
    const e = (t) => {
      switch (t.key) {
        case "Escape": {
          A();
          break;
        }
        case " ": {
          t.preventDefault();
          B();
          break;
        }
        case "ArrowLeft": {
          t.preventDefault();
          D(-5);
          break;
        }
        case "ArrowRight": {
          t.preventDefault();
          D(5);
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
          L();
          break;
        }
      }
    };
    window.addEventListener("keydown", e);

    return () => window.removeEventListener("keydown", e);
  }, [A, B, D, V, L]);

  const q = q((e) => {
    const P_current = P.current;
    const i_current = i.current;
    if (
      !P_current ||
      !i_current ||
      !Number.isFinite(i_current.duration) ||
      i_current.duration <= 0
    ) {
      return;
    }
    const s = P_current.getBoundingClientRect();
    if (s.width <= 0) {
      return;
    }
    const l = Math.min(1, Math.max(0, (e - s.left) / s.width));
    i_current.currentTime = i_current.duration * l;
    w(i_current.currentTime);
  }, []);

  const ue = q(
    (e) => {
      e.stopPropagation();
      T.current = true;
      z(true);
      const e_currentTarget = e.currentTarget;
      try {
        e_currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      q(e.clientX);

      const r = (l) => q(l.clientX);

      const s = () => {
        try {
          e_currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        document.removeEventListener("pointermove", r);
        document.removeEventListener("pointerup", s);
        document.removeEventListener("pointercancel", s);
        window.removeEventListener("blur", s);
        z(false);

        setTimeout(() => {
          T.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", r);
      document.addEventListener("pointerup", s);
      document.addEventListener("pointercancel", s);
      window.addEventListener("blur", s);
    },
    [q]
  );

  const de = x > 0 ? (N / x) * 100 : 0;
  const me = !options.sourceRect;
  return u("div", {
    ref: u,
    "data-vp": "overlay",
    className: `${a.overlay} ${me ? a.overlayFade : ""} ym-hide-content`,
    onClick: A,
    children: [
      u("div", { className: a.backdrop }),
      u("div", {
        ref: p,
        "data-vp": "stage",
        className: a.stage,
        style: { width: `${G.width}px`, height: `${G.height}px` },
        onClick: (e) => {
          e.stopPropagation();

          if (!T.current && !I.current) {
            B();
          }
        },
        onDblClick: (e) => {
          e.stopPropagation();
          L();
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
                  B();
                },
                "aria-label": R ? "Пауза" : "Воспроизвести",
                children: R ? u(Ke, {}) : u(Je, {}),
              }),
              u("span", { className: a.time, children: [X(N), " / ", X(x)] }),
              u("button", {
                type: "button",
                className: `${a.controlButton} ${a.speedButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  le();
                },
                "aria-label": "Скорость воспроизведения",
                children: [F[Z], "×"],
              }),
              u("div", {
                className: `${a.volumeControl} ${te ? a.volumeActive : ""}`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  u("div", {
                    className: a.volumeSlider,
                    children: u(Pe, {
                      value: v ? 0 : d,
                      onChange: ce,
                      onDragStart: () => {
                        I.current = true;
                        H(true);
                      },
                      onDragEnd: () => {
                        H(false);

                        setTimeout(() => {
                          I.current = false;
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
                    "aria-label": v ? "Включить звук" : "Выключить звук",
                    children: u(V, { muted: v || d === 0, volume: d }),
                  }),
                ],
              }),
              u("button", {
                type: "button",
                className: `${a.controlButton} ${a.fullscreenButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  L();
                },
                "aria-label": "На весь экран",
                children: u(Qe, {}),
              }),
              u("div", {
                "data-vp": "progress",
                className: a.progressContainer,
                onPointerDown: ue,
                onClick: (e) => e.stopPropagation(),
                children: u("div", {
                  ref: P,
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
function Ke() {
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
