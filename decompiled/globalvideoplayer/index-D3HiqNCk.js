import { A, q, u, a as a_1, $, d, y, _ } from "./index-B9FitUXy.js";
import { u as u_1 } from "./useBodyScrollLock-B9AhjdDt.js";
import { V } from "./VolumeGlyph-BaO6jcyf.js";
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
      n._sentryDebugIds[c] = "a7a17b4a-43c0-49c9-aac4-7170b0b8f5db";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-a7a17b4a-43c0-49c9-aac4-7170b0b8f5db";
    }
  } catch {}
})();
const we = "fnC9";
const ye = "VWZV";
const ke = "byKD";
const xe = "qiLm";
const F = { wrapper: we, track: ye, fill: ke, thumb: xe };
function Ee({ value, onChange, onDragStart, onDragEnd }) {
  const i = A(null);

  const E = q(
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

  const R = q(
    (d) => {
      d.stopPropagation();
      d.preventDefault();
      onDragStart?.();
      E(d.clientY);

      const w = (y) => E(y.clientY);

      const p = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", w);
        document.removeEventListener("mouseup", p);
      };

      document.addEventListener("mousemove", w);
      document.addEventListener("mouseup", p);
    },
    [E, onDragStart, onDragEnd]
  );

  const f = 7;
  const N = 80;
  const b = f;
  const P = N - f;
  const $ = b + value * (P - b);
  return onDragStart("div", {
    className: F.wrapper,
    onMouseDown: R,
    onClick: (d) => {
      d.stopPropagation();
      d.preventDefault();
    },
    children: onDragStart("div", {
      ref: i,
      className: F.track,
      children: [
        onDragStart("div", { className: F.fill, style: { height: `${$}px` } }),
        onDragStart("div", { className: F.thumb, style: { bottom: `${$}px` } }),
      ],
    }),
  });
}
const Re = "mi1B";
const Pe = "PPXf";
const Le = "ZHla";
const Ne = "uT69";
const $e = "LliR";
const Ce = "N83x";
const Te = "ZLhs";
const Be = "zc4l";
const Se = "AYII";
const Fe = "TBY8";
const Me = "lbXS";
const Ie = "Onl2";
const Ae = "llvj";
const De = "iRFa";
const Ve = "a3n2";
const qe = "gxNS";
const Oe = "kREn";
const He = "eAGg";
const We = "U1Xr";
const _e = "x3cV";
const Ge = "SVmm";
const ze = "xWdA";
const Xe = "yHPK";

const a = {
  overlay: Re,
  chrome: Pe,
  closing: Le,
  backdrop: Ne,
  overlayFade: $e,
  stage: Ce,
  video: Te,
  poster: Be,
  bottomOverlay: Se,
  controlButton: Fe,
  playButton: Me,
  time: Ie,
  speedButton: Ae,
  volumeControl: De,
  volumeActive: Ve,
  volumeSlider: qe,
  muteButton: Oe,
  fullscreenButton: He,
  progressContainer: We,
  progressTrack: _e,
  progressBuffered: Ge,
  progressFill: ze,
  scrubbing: Xe,
};

const X = 280;
const Y = "cubic-bezier(0.32, 0.72, 0, 1)";
const M = [0.5, 1, 1.5, 2];
function K(n) {
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
function Z(n) {
  const c = parseFloat(n ?? "");
  return Number.isFinite(c) ? c : 0;
}
const j = parseFloat(localStorage.getItem("video-volume") ?? "1");
const U = Number.isNaN(j) ? 1 : j;

export function GlobalVideoPlayer() {
  const n = a_1((i) => i.isOpen);

  const c = a_1((i) => i.options);

  const u = a_1((i) => i.session);

  const v = a_1((i) => i.close);

  return !n || !c
    ? null
    : $(u(Ke, { options: c, onUnmount: v }, u), document.body);
}

function Ke({ options, onUnmount }) {
  const u = A(null);
  const v = A(null);
  const i = A(null);
  const E = A(null);
  const [R, f] = d(false);
  const [N, b] = d(options.startTime ?? 0);
  const [P, $] = d(0);
  const [d, w] = d(U);
  const [p, y] = d(false);
  const [J, Q] = d(1);
  const [ee, H] = d(false);
  const [te, W] = d(false);
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

  const [Je, se] = d({ w: window.innerWidth, h: window.innerHeight });
  const G = A(false);
  const C = A(false);
  const I = A(false);
  u_1();
  const z = Ye(_.w, _.h);

  y(() => {
    const e = () => se({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", e);

    return () => window.removeEventListener("resize", e);
  }, []);

  _(() => {
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
    const l = n_sourceRect.height / r.height;
    const k =
      n_sourceRect.left + n_sourceRect.width / 2 - (r.left + r.width / 2);
    const L =
      n_sourceRect.top + n_sourceRect.height / 2 - (r.top + r.height / 2);
    const O = Z(n_sourceRect.borderRadius);
    v_current.animate(
      [
        {
          transform: `translate(${k}px, ${L}px) scale(${s}, ${l})`,
          borderRadius: `${O / Math.max(s, 0.01)}px`,
        },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: X, easing: Y, fill: "backwards" }
    );
  }, []);

  const A = q(() => {
    if (G.current) {
      return;
    }
    G.current = true;
    const i_current = i.current;
    options.onCloseStart?.(i_current?.currentTime ?? 0);
    const u_current = u.current;
    const v_current = v.current;
    u_current?.classList.add(a.closing);
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
    const l = v_current.getBoundingClientRect();
    const k = s.width / l.width;
    const L = s.height / l.height;
    const O = s.left + s.width / 2 - (l.left + l.width / 2);
    const he = s.top + s.height / 2 - (l.top + l.height / 2);
    const fe = Z(s.borderRadius);
    v_current
      .animate(
        [
          { transform: "none", borderRadius: "0px" },
          {
            transform: `translate(${O}px, ${he}px) scale(${k}, ${L})`,
            borderRadius: `${fe / Math.max(k, 0.01)}px`,
          },
        ],
        { duration: X, easing: Y, fill: "forwards" }
      )
      .addEventListener("finish", onUnmount);
  }, [options, onUnmount]);

  y(() => {
    const i_current = i.current;

    if (i_current) {
      i_current.volume = U;
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

  y(() => {
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

  y(() => {
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

  y(() => {
    if (!R) {
      return;
    }
    let e = 0;
    const t = () => {
      const i_current = i.current;

      if (i_current && !C.current) {
        b(i_current.currentTime);
      }

      e = requestAnimationFrame(t);
    };
    e = requestAnimationFrame(t);

    return () => cancelAnimationFrame(e);
  }, [R]);

  const [ie, ae] = d([]);
  y(() => {
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
        const L = i_current.buffered.end(l);
        s.push({
          left: (k / i_current_duration) * 100,
          width: ((L - k) / i_current_duration) * 100,
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

  const D = q((e) => {
    const i_current = i.current;

    if (i_current && Number.isFinite(i_current.duration)) {
      i_current.currentTime = Math.max(
        0,
        Math.min(i_current.duration, i_current.currentTime + e)
      );
      b(i_current.currentTime);
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
    w(e);
    localStorage.setItem("video-volume", String(e));
    const i_current = i.current;

    if (i_current) {
      i_current.volume = e;
      i_current.muted = e === 0;
      y(e === 0);
    }
  }, []);

  const le = q(() => {
    Q((e) => {
      const t = (e + 1) % M.length;

      if (i.current) {
        i.current.playbackRate = M[t];
      }

      return t;
    });
  }, []);

  const B = q(() => {
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

  y(() => {
    const e = (t) => {
      switch (t.key) {
        case "Escape": {
          A();
          break;
        }
        case " ": {
          t.preventDefault();
          T();
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
          B();
          break;
        }
      }
    };
    window.addEventListener("keydown", e);

    return () => window.removeEventListener("keydown", e);
  }, [A, T, D, V, B]);

  const q = q((e) => {
    const E_current = E.current;
    const i_current = i.current;
    if (
      !E_current ||
      !i_current ||
      !Number.isFinite(i_current.duration) ||
      i_current.duration <= 0
    ) {
      return;
    }
    const s = E_current.getBoundingClientRect();
    if (s.width <= 0) {
      return;
    }
    const l = Math.min(1, Math.max(0, (e - s.left) / s.width));
    i_current.currentTime = i_current.duration * l;
    b(i_current.currentTime);
  }, []);

  const ue = q(
    (e) => {
      e.stopPropagation();
      C.current = true;
      H(true);
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

  const de = P > 0 ? (N / P) * 100 : 0;
  const me = !options.sourceRect;
  return u("div", {
    ref: u,
    "data-vp": "overlay",
    className: `${a.overlay} ${me ? a.overlayFade : ""} ym-hide-content`,
    onClick: A,
    children: [
      u("div", { className: a.backdrop }),
      u("div", {
        ref: v,
        "data-vp": "stage",
        className: a.stage,
        style: { width: `${z.width}px`, height: `${z.height}px` },
        onClick: (e) => {
          e.stopPropagation();

          if (!C.current && !I.current) {
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
            onSeeked: (e) => b(e.currentTarget.currentTime),
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
                "aria-label": R ? "Пауза" : "Воспроизвести",
                children: R ? u(je, {}) : u(Ze, {}),
              }),
              u("span", { className: a.time, children: [K(N), " / ", K(P)] }),
              u("button", {
                type: "button",
                className: `${a.controlButton} ${a.speedButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  le();
                },
                "aria-label": "Скорость воспроизведения",
                children: [M[J], "×"],
              }),
              u("div", {
                className: `${a.volumeControl} ${te ? a.volumeActive : ""}`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  u("div", {
                    className: a.volumeSlider,
                    children: u(Ee, {
                      value: p ? 0 : d,
                      onChange: ce,
                      onDragStart: () => {
                        I.current = true;
                        W(true);
                      },
                      onDragEnd: () => {
                        W(false);

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
                children: u(Ue, {}),
              }),
              u("div", {
                "data-vp": "progress",
                className: a.progressContainer,
                onPointerDown: ue,
                onClick: (e) => e.stopPropagation(),
                children: u("div", {
                  ref: E,
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
function Ze() {
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
function je() {
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
function Ue() {
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
