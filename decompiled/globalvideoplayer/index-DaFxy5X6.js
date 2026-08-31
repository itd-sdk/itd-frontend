import { A, q, u, a, $, d, d as d_1, _ } from "./index-ORJLmKGS.js";
import { u as u_1 } from "./useBodyScrollLock-DaWiuPw0.js";
import { V } from "./VolumeGlyph-6cXmdbhe.js";
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
    n.SENTRY_RELEASE = { id: "1.1.3" };
    const a = new n.Error().stack;

    if (a) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[a] = "a2a5dbad-2527-44c1-b466-e9e0c23f1caf";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-a2a5dbad-2527-44c1-b466-e9e0c23f1caf";
    }
  } catch {}
})();
const we = "jhnM";
const ye = "p53t";
const ke = "hxIY";
const Ee = "O52J";
const F = { wrapper: we, track: ye, fill: ke, thumb: Ee };
function xe({ value, onChange, onDragStart, onDragEnd }) {
  const i = A(null);

  const x = q(
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
      x(d.clientY);

      const w = (y) => x(y.clientY);

      const p = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", w);
        document.removeEventListener("mouseup", p);
      };

      document.addEventListener("mousemove", w);
      document.addEventListener("mouseup", p);
    },
    [x, onDragStart, onDragEnd]
  );

  const f = 7;
  const N = 80;
  const b = f;
  const L = N - f;
  const C = b + value * (L - b);
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
        onDragStart("div", { className: F.fill, style: { height: `${C}px` } }),
        onDragStart("div", { className: F.thumb, style: { bottom: `${C}px` } }),
      ],
    }),
  });
}
const Re = "gB2V";
const Le = "spxC";
const Pe = "cGP2";
const Ne = "KnFX";
const Ce = "JeEj";
const $e = "tBV0";
const Be = "TVlu";
const Te = "ARhh";
const Me = "HZ5N";
const Fe = "fCdH";
const Se = "BcZL";
const Ie = "cYgL";
const De = "Gh13";
const Ve = "c3LY";
const Ae = "aAIr";
const qe = "KZ70";
const Oe = "DqIr";
const Ge = "xtlK";
const He = "rnv8";
const _e = "W81V";
const We = "LnVm";
const Ye = "ioJk";
const ze = "DNyM";

const c = {
  overlay: Re,
  chrome: Le,
  closing: Pe,
  backdrop: Ne,
  overlayFade: Ce,
  stage: $e,
  video: Be,
  poster: Te,
  bottomOverlay: Me,
  controlButton: Fe,
  playButton: Se,
  time: Ie,
  speedButton: De,
  volumeControl: Ve,
  volumeActive: Ae,
  volumeSlider: qe,
  muteButton: Oe,
  fullscreenButton: Ge,
  progressContainer: He,
  progressTrack: _e,
  progressBuffered: We,
  progressFill: Ye,
  scrubbing: ze,
};

const z = 280;
const K = "cubic-bezier(0.32, 0.72, 0, 1)";
const S = [0.5, 1, 1.5, 2];
function X(n) {
  if (!isFinite(n) || n < 0) {
    return "0:00";
  }
  const a = Math.floor(n / 60);
  const u = Math.floor(n % 60);
  return `${a}:${String(u).padStart(2, "0")}`;
}
function Ke(n, a) {
  const u = Math.min(window.innerWidth / n, window.innerHeight / a);
  return { width: Math.round(n * u), height: Math.round(a * u) };
}
function J(n) {
  const a = parseFloat(n ?? "");
  return Number.isFinite(a) ? a : 0;
}
const Z = parseFloat(localStorage.getItem("video-volume") ?? "1");
const j = Number.isNaN(Z) ? 1 : Z;

export function GlobalVideoPlayer() {
  const n = a((i) => i.isOpen);

  const a = a((i) => i.options);

  const u = a((i) => i.session);

  const v = a((i) => i.close);

  return !n || !a
    ? null
    : $(u(Xe, { options: a, onUnmount: v }, u), document.body);
}

function Xe({ options, onUnmount }) {
  const u = A(null);
  const v = A(null);
  const i = A(null);
  const x = A(null);
  const [R, f] = d(false);
  const [N, b] = d(options.startTime ?? 0);
  const [L, C] = d(0);
  const [d, w] = d(j);
  const [p, y] = d(false);
  const [Q, U] = d(1);
  const [ee, G] = d(false);
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

  const [Qe, se] = d({ w: window.innerWidth, h: window.innerHeight });
  const W = A(false);
  const $ = A(false);
  const I = A(false);
  u_1();
  const Y = Ke(_.w, _.h);

  d_1(() => {
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
    const P =
      n_sourceRect.top + n_sourceRect.height / 2 - (r.top + r.height / 2);
    const O = J(n_sourceRect.borderRadius);
    v_current.animate(
      [
        {
          transform: `translate(${k}px, ${P}px) scale(${s}, ${l})`,
          borderRadius: `${O / Math.max(s, 0.01)}px`,
        },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: z, easing: K, fill: "backwards" }
    );
  }, []);

  const D = q(() => {
    if (W.current) {
      return;
    }
    W.current = true;
    const i_current = i.current;
    options.onCloseStart?.(i_current?.currentTime ?? 0);
    const u_current = u.current;
    const v_current = v.current;
    u_current?.classList.add(c.closing);
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
    const P = s.height / l.height;
    const O = s.left + s.width / 2 - (l.left + l.width / 2);
    const me = s.top + s.height / 2 - (l.top + l.height / 2);
    const fe = J(s.borderRadius);
    v_current
      .animate(
        [
          { transform: "none", borderRadius: "0px" },
          {
            transform: `translate(${O}px, ${me}px) scale(${k}, ${P})`,
            borderRadius: `${fe / Math.max(k, 0.01)}px`,
          },
        ],
        { duration: z, easing: K, fill: "forwards" }
      )
      .addEventListener("finish", onUnmount);
  }, [options, onUnmount]);

  d_1(() => {
    const i_current = i.current;

    if (i_current) {
      i_current.volume = j;
      i_current.playbackRate = S[1];
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

  d_1(() => {
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

  d_1(() => {
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

  d_1(() => {
    if (!R) {
      return;
    }
    let e = 0;
    const t = () => {
      const i_current = i.current;

      if (i_current && !$.current) {
        b(i_current.currentTime);
      }

      e = requestAnimationFrame(t);
    };
    e = requestAnimationFrame(t);

    return () => cancelAnimationFrame(e);
  }, [R]);

  const [ie, ce] = d([]);
  d_1(() => {
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
        const P = i_current.buffered.end(l);
        s.push({
          left: (k / i_current_duration) * 100,
          width: ((P - k) / i_current_duration) * 100,
        });
      }
      ce(s);
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

  const V = q((e) => {
    const i_current = i.current;

    if (i_current && Number.isFinite(i_current.duration)) {
      i_current.currentTime = Math.max(
        0,
        Math.min(i_current.duration, i_current.currentTime + e)
      );
      b(i_current.currentTime);
    }
  }, []);

  const A = q(() => {
    const i_current = i.current;

    if (i_current) {
      i_current.muted = !i_current.muted;
      y(i_current.muted);
    }
  }, []);

  const ae = q((e) => {
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
    U((e) => {
      const t = (e + 1) % S.length;

      if (i.current) {
        i.current.playbackRate = S[t];
      }

      return t;
    });
  }, []);

  const T = q(() => {
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

  d_1(() => {
    const e = (t) => {
      switch (t.key) {
        case "Escape": {
          D();
          break;
        }
        case " ": {
          t.preventDefault();
          B();
          break;
        }
        case "ArrowLeft": {
          t.preventDefault();
          V(-5);
          break;
        }
        case "ArrowRight": {
          t.preventDefault();
          V(5);
          break;
        }
        case "m":
        case "M":
        case "ь":
        case "Ь": {
          A();
          break;
        }
        case "f":
        case "F":
        case "а":
        case "А": {
          T();
          break;
        }
      }
    };
    window.addEventListener("keydown", e);

    return () => window.removeEventListener("keydown", e);
  }, [D, B, V, A, T]);

  const q = q((e) => {
    const x_current = x.current;
    const i_current = i.current;
    if (
      !x_current ||
      !i_current ||
      !Number.isFinite(i_current.duration) ||
      i_current.duration <= 0
    ) {
      return;
    }
    const s = x_current.getBoundingClientRect();
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
      $.current = true;
      G(true);
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
        G(false);

        setTimeout(() => {
          $.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", r);
      document.addEventListener("pointerup", s);
      document.addEventListener("pointercancel", s);
      window.addEventListener("blur", s);
    },
    [q]
  );

  const de = L > 0 ? (N / L) * 100 : 0;
  const he = !options.sourceRect;
  return u("div", {
    ref: u,
    "data-vp": "overlay",
    className: `${c.overlay} ${he ? c.overlayFade : ""} ym-hide-content`,
    onClick: D,
    children: [
      u("div", { className: c.backdrop }),
      u("div", {
        ref: v,
        "data-vp": "stage",
        className: c.stage,
        style: { width: `${Y.width}px`, height: `${Y.height}px` },
        onClick: (e) => {
          e.stopPropagation();

          if (!$.current && !I.current) {
            B();
          }
        },
        onDblClick: (e) => {
          e.stopPropagation();
          T();
        },
        children: [
          u("video", {
            ref: i,
            "data-vp": "video",
            src: options.url,
            className: c.video,
            playsInline: true,
            onPlay: () => f(true),
            onPause: () => f(false),
            onEnded: () => f(false),
            onLoadedMetadata: (e) => {
              const e_currentTarget = e.currentTarget;
              C(e_currentTarget.duration);

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
              className: c.poster,
              src: options.poster,
              alt: "",
              "aria-hidden": "true",
            }),
          u("div", {
            className: `${c.chrome} ${c.bottomOverlay}`,
            onDblClick: (e) => e.stopPropagation(),
            children: [
              u("button", {
                type: "button",
                className: `${c.controlButton} ${c.playButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  B();
                },
                "aria-label": R ? "Пауза" : "Воспроизвести",
                children: R ? u(Ze, {}) : u(Je, {}),
              }),
              u("span", { className: c.time, children: [X(N), " / ", X(L)] }),
              u("button", {
                type: "button",
                className: `${c.controlButton} ${c.speedButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  le();
                },
                "aria-label": "Скорость воспроизведения",
                children: [S[Q], "×"],
              }),
              u("div", {
                className: `${c.volumeControl} ${te ? c.volumeActive : ""}`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  u("div", {
                    className: c.volumeSlider,
                    children: u(xe, {
                      value: p ? 0 : d,
                      onChange: ae,
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
                    className: c.muteButton,
                    onClick: (e) => {
                      e.stopPropagation();
                      A();
                    },
                    "aria-label": p ? "Включить звук" : "Выключить звук",
                    children: u(V, { muted: p || d === 0, volume: d }),
                  }),
                ],
              }),
              u("button", {
                type: "button",
                className: `${c.controlButton} ${c.fullscreenButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  T();
                },
                "aria-label": "На весь экран",
                children: u(je, {}),
              }),
              u("div", {
                "data-vp": "progress",
                className: c.progressContainer,
                onPointerDown: ue,
                onClick: (e) => e.stopPropagation(),
                children: u("div", {
                  ref: x,
                  className: c.progressTrack,
                  children: [
                    ie.map((e, t) =>
                      u(
                        "div",
                        {
                          className: c.progressBuffered,
                          style: { left: `${e.left}%`, width: `${e.width}%` },
                        },
                        t
                      )
                    ),
                    u("div", {
                      className: `${c.progressFill} ${ee ? c.scrubbing : ""}`,
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
function Ze() {
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
function je() {
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
