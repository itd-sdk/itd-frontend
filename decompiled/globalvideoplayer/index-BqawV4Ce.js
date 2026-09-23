import { A, q, u, a as a_1, $, d, q as q_1, _ } from "./index-B74jCtUp.js";
import { u as u_1 } from "./useBodyScrollLock-cBCPbJow.js";
import { V } from "./VolumeGlyph-BikmA2y8.js";
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
      n._sentryDebugIds[c] = "77e2db57-352e-4bf4-a8a9-f1ee6e2f90b8";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-77e2db57-352e-4bf4-a8a9-f1ee6e2f90b8";
    }
  } catch {}
})();
const we = "yq04";
const ye = "Tviz";
const ke = "rkck";
const Ee = "mAyg";
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

  const P = q(
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
  const C = 80;
  const b = f;
  const L = C - f;
  const T = b + value * (L - b);
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
        u("div", { className: F.fill, style: { height: `${T}px` } }),
        u("div", { className: F.thumb, style: { bottom: `${T}px` } }),
      ],
    }),
  });
}
const Pe = "kdn2";
const Le = "EZYY";
const Re = "IIWr";
const Ce = "JVeZ";
const Te = "r1Jo";
const $e = "cuCI";
const Be = "ILqf";
const Ne = "B3ZO";
const Me = "DfWe";
const Fe = "WiwE";
const Se = "ZpT8";
const Ie = "xabj";
const De = "sCe4";
const Ae = "L3tm";
const Ve = "PnBH";
const qe = "ZATE";
const We = "iDxw";
const Oe = "j4cG";
const He = "CqBL";
const _e = "sd5M";
const ze = "X7UL";
const Ge = "ZtQW";
const Ze = "zHPc";

const a = {
  overlay: Pe,
  chrome: Le,
  closing: Re,
  backdrop: Ce,
  overlayFade: Te,
  stage: $e,
  video: Be,
  poster: Ne,
  bottomOverlay: Me,
  controlButton: Fe,
  playButton: Se,
  time: Ie,
  speedButton: De,
  volumeControl: Ae,
  volumeActive: Ve,
  volumeSlider: qe,
  muteButton: We,
  fullscreenButton: Oe,
  progressContainer: He,
  progressTrack: _e,
  progressBuffered: ze,
  progressFill: Ge,
  scrubbing: Ze,
};

const Z = 280;
const Y = "cubic-bezier(0.32, 0.72, 0, 1)";
const S = [0.5, 1, 1.5, 2];
function X(n) {
  if (!isFinite(n) || n < 0) {
    return "0:00";
  }
  const c = Math.floor(n / 60);
  const l = Math.floor(n % 60);
  return `${c}:${String(l).padStart(2, "0")}`;
}
function Ye(n, c) {
  const l = Math.min(window.innerWidth / n, window.innerHeight / c);
  return { width: Math.round(n * l), height: Math.round(c * l) };
}
function j(n) {
  const c = parseFloat(n ?? "");
  return Number.isFinite(c) ? c : 0;
}
const J = parseFloat(localStorage.getItem("video-volume") ?? "1");
const K = Number.isNaN(J) ? 1 : J;

export function GlobalVideoPlayer() {
  const n = a_1((i) => i.isOpen);

  const c = a_1((i) => i.options);

  const l = a_1((i) => i.session);

  const v = a_1((i) => i.close);

  return !n || !c
    ? null
    : $(u(Xe, { options: c, onUnmount: v }, l), document.body);
}

function Xe({ options, onUnmount }) {
  const l = A(null);
  const v = A(null);
  const i = A(null);
  const x = A(null);
  const [P, f] = d(false);
  const [C, b] = d(options.startTime ?? 0);
  const [L, T] = d(0);
  const [d, w] = d(K);
  const [p, y] = d(false);
  const [Q, U] = d(1);
  const [ee, O] = d(false);
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
  const z = A(false);
  const $ = A(false);
  const I = A(false);
  u_1();
  const G = Ye(_.w, _.h);

  q_1(() => {
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
    const u = n_sourceRect.height / r.height;
    const k =
      n_sourceRect.left + n_sourceRect.width / 2 - (r.left + r.width / 2);
    const R =
      n_sourceRect.top + n_sourceRect.height / 2 - (r.top + r.height / 2);
    const W = j(n_sourceRect.borderRadius);
    v_current.animate(
      [
        {
          transform: `translate(${k}px, ${R}px) scale(${s}, ${u})`,
          borderRadius: `${W / Math.max(s, 0.01)}px`,
        },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: Z, easing: Y, fill: "backwards" }
    );
  }, []);

  const D = q(() => {
    if (z.current) {
      return;
    }
    z.current = true;
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
    const R = s.height / u.height;
    const W = s.left + s.width / 2 - (u.left + u.width / 2);
    const he = s.top + s.height / 2 - (u.top + u.height / 2);
    const fe = j(s.borderRadius);
    v_current
      .animate(
        [
          { transform: "none", borderRadius: "0px" },
          {
            transform: `translate(${W}px, ${he}px) scale(${k}, ${R})`,
            borderRadius: `${fe / Math.max(k, 0.01)}px`,
          },
        ],
        { duration: Z, easing: Y, fill: "forwards" }
      )
      .addEventListener("finish", onUnmount);
  }, [options, onUnmount]);

  q_1(() => {
    const i_current = i.current;

    if (i_current) {
      i_current.volume = K;
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

      if (i_current && !$.current) {
        b(i_current.currentTime);
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
        const R = i_current.buffered.end(u);
        s.push({
          left: (k / i_current_duration) * 100,
          width: ((R - k) / i_current_duration) * 100,
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

  const A = q((e) => {
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

  const ue = q(() => {
    U((e) => {
      const t = (e + 1) % S.length;

      if (i.current) {
        i.current.playbackRate = S[t];
      }

      return t;
    });
  }, []);

  const N = q(() => {
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
          N();
          break;
        }
      }
    };
    window.addEventListener("keydown", e);

    return () => window.removeEventListener("keydown", e);
  }, [D, B, A, V, N]);

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
    const u = Math.min(1, Math.max(0, (e - s.left) / s.width));
    i_current.currentTime = i_current.duration * u;
    b(i_current.currentTime);
  }, []);

  const le = q(
    (e) => {
      e.stopPropagation();
      $.current = true;
      O(true);
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
        O(false);

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

  const de = L > 0 ? (C / L) * 100 : 0;
  const me = !options.sourceRect;
  return u("div", {
    ref: l,
    "data-vp": "overlay",
    className: `${a.overlay} ${me ? a.overlayFade : ""} ym-hide-content`,
    onClick: D,
    children: [
      u("div", { className: a.backdrop }),
      u("div", {
        ref: v,
        "data-vp": "stage",
        className: a.stage,
        style: { width: `${G.width}px`, height: `${G.height}px` },
        onClick: (e) => {
          e.stopPropagation();

          if (!$.current && !I.current) {
            B();
          }
        },
        onDblClick: (e) => {
          e.stopPropagation();
          N();
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
              T(e_currentTarget.duration);

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
                  B();
                },
                "aria-label": P ? "Пауза" : "Воспроизвести",
                children: P ? u(Je, {}) : u(je, {}),
              }),
              u("span", { className: a.time, children: [X(C), " / ", X(L)] }),
              u("button", {
                type: "button",
                className: `${a.controlButton} ${a.speedButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  ue();
                },
                "aria-label": "Скорость воспроизведения",
                children: [S[Q], "×"],
              }),
              u("div", {
                className: `${a.volumeControl} ${te ? a.volumeActive : ""}`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  u("div", {
                    className: a.volumeSlider,
                    children: u(xe, {
                      value: p ? 0 : d,
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
                  N();
                },
                "aria-label": "На весь экран",
                children: u(Ke, {}),
              }),
              u("div", {
                "data-vp": "progress",
                className: a.progressContainer,
                onPointerDown: le,
                onClick: (e) => e.stopPropagation(),
                children: u("div", {
                  ref: x,
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
function je() {
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
function Je() {
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
function Ke() {
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
