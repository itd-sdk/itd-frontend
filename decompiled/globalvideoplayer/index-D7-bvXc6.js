import { A, q, u, a as a_1, $, d, q as q_1, _ } from "./index-CsuAWxkQ.js";
import { u as u_1 } from "./useBodyScrollLock-CNHmw-An.js";
import { V } from "./VolumeGlyph-Cb-V62zf.js";
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
      n._sentryDebugIds[c] = "dd2a77a5-6e4d-4043-9815-d5e036169b84";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-dd2a77a5-6e4d-4043-9815-d5e036169b84";
    }
  } catch {}
})();
const we = "Hq9h";
const ye = "flsj";
const ke = "Foxq";
const Ee = "vxnO";
const M = { wrapper: we, track: ye, fill: ke, thumb: Ee };
function xe({ value, onChange, onDragStart, onDragEnd }) {
  const i = A(null);

  const x = q(
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
      x(d.clientY);

      const w = (y) => x(y.clientY);

      const v = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", w);
        document.removeEventListener("mouseup", v);
      };

      document.addEventListener("mousemove", w);
      document.addEventListener("mouseup", v);
    },
    [x, onDragStart, onDragEnd]
  );

  const f = 7;
  const N = 80;
  const b = f;
  const P = N - f;
  const $ = b + value * (P - b);
  return u("div", {
    className: M.wrapper,
    onMouseDown: R,
    onClick: (d) => {
      d.stopPropagation();
      d.preventDefault();
    },
    children: u("div", {
      ref: i,
      className: M.track,
      children: [
        u("div", { className: M.fill, style: { height: `${$}px` } }),
        u("div", { className: M.thumb, style: { bottom: `${$}px` } }),
      ],
    }),
  });
}
const Re = "d3FE";
const Pe = "nq6E";
const Le = "sLGm";
const Ne = "gRaD";
const $e = "aHRD";
const Ce = "ngCh";
const Te = "e6Ge";
const Be = "gNe1";
const Fe = "WwDL";
const Me = "K3Jo";
const Se = "mtXE";
const De = "edjn";
const Ie = "VRxb";
const Ae = "iBub";
const Ve = "ypWw";
const qe = "ZoJ0";
const Ge = "vLXl";
const Oe = "P7xG";
const He = "VoOu";
const We = "Yakm";
const _e = "z4bx";
const ze = "Fvdg";
const Xe = "G58T";

const a = {
  overlay: Re,
  chrome: Pe,
  closing: Le,
  backdrop: Ne,
  overlayFade: $e,
  stage: Ce,
  video: Te,
  poster: Be,
  bottomOverlay: Fe,
  controlButton: Me,
  playButton: Se,
  time: De,
  speedButton: Ie,
  volumeControl: Ae,
  volumeActive: Ve,
  volumeSlider: qe,
  muteButton: Ge,
  fullscreenButton: Oe,
  progressContainer: He,
  progressTrack: We,
  progressBuffered: _e,
  progressFill: ze,
  scrubbing: Xe,
};

const X = 280;
const Y = "cubic-bezier(0.32, 0.72, 0, 1)";
const S = [0.5, 1, 1.5, 2];
function j(n) {
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
function J(n) {
  const c = parseFloat(n ?? "");
  return Number.isFinite(c) ? c : 0;
}
const K = parseFloat(localStorage.getItem("video-volume") ?? "1");
const Z = Number.isNaN(K) ? 1 : K;

export function GlobalVideoPlayer() {
  const n = a_1((i) => i.isOpen);

  const c = a_1((i) => i.options);

  const l = a_1((i) => i.session);

  const p = a_1((i) => i.close);

  return !n || !c
    ? null
    : $(u(je, { options: c, onUnmount: p }, l), document.body);
}

function je({ options, onUnmount }) {
  const l = A(null);
  const p = A(null);
  const i = A(null);
  const x = A(null);
  const [R, f] = d(false);
  const [N, b] = d(options.startTime ?? 0);
  const [P, $] = d(0);
  const [d, w] = d(Z);
  const [v, y] = d(false);
  const [Q, U] = d(1);
  const [ee, O] = d(false);
  const [te, H] = d(false);
  const [ne, re] = d(!!options.poster);

  const [W, oe] = d(() => {
    if (options.width && options.height) {
      return { w: options.width, h: options.height };
    }
    const n_sourceRect = options.sourceRect;
    return n_sourceRect && n_sourceRect.width > 0 && n_sourceRect.height > 0
      ? { w: n_sourceRect.width, h: n_sourceRect.height }
      : { w: 16, h: 9 };
  });

  const [Qe, se] = d({ w: window.innerWidth, h: window.innerHeight });
  const _ = A(false);
  const C = A(false);
  const D = A(false);
  u_1();
  const z = Ye(W.w, W.h);

  q_1(() => {
    const e = () => se({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", e);

    return () => window.removeEventListener("resize", e);
  }, []);

  _(() => {
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
    const u = n_sourceRect.height / r.height;
    const k =
      n_sourceRect.left + n_sourceRect.width / 2 - (r.left + r.width / 2);
    const L =
      n_sourceRect.top + n_sourceRect.height / 2 - (r.top + r.height / 2);
    const G = J(n_sourceRect.borderRadius);
    p_current.animate(
      [
        {
          transform: `translate(${k}px, ${L}px) scale(${s}, ${u})`,
          borderRadius: `${G / Math.max(s, 0.01)}px`,
        },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: X, easing: Y, fill: "backwards" }
    );
  }, []);

  const I = q(() => {
    if (_.current) {
      return;
    }
    _.current = true;
    const i_current = i.current;
    options.onCloseStart?.(i_current?.currentTime ?? 0);
    const l_current = l.current;
    const p_current = p.current;
    l_current?.classList.add(a.closing);
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
    const u = p_current.getBoundingClientRect();
    const k = s.width / u.width;
    const L = s.height / u.height;
    const G = s.left + s.width / 2 - (u.left + u.width / 2);
    const he = s.top + s.height / 2 - (u.top + u.height / 2);
    const fe = J(s.borderRadius);
    p_current
      .animate(
        [
          { transform: "none", borderRadius: "0px" },
          {
            transform: `translate(${G}px, ${he}px) scale(${k}, ${L})`,
            borderRadius: `${fe / Math.max(k, 0.01)}px`,
          },
        ],
        { duration: X, easing: Y, fill: "forwards" }
      )
      .addEventListener("finish", onUnmount);
  }, [options, onUnmount]);

  q_1(() => {
    const i_current = i.current;

    if (i_current) {
      i_current.volume = Z;
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
        const L = i_current.buffered.end(u);
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
      C.current = true;
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
    ref: l,
    "data-vp": "overlay",
    className: `${a.overlay} ${me ? a.overlayFade : ""} ym-hide-content`,
    onClick: I,
    children: [
      u("div", { className: a.backdrop }),
      u("div", {
        ref: p,
        "data-vp": "stage",
        className: a.stage,
        style: { width: `${z.width}px`, height: `${z.height}px` },
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
                children: R ? u(Ke, {}) : u(Je, {}),
              }),
              u("span", { className: a.time, children: [j(N), " / ", j(P)] }),
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
                      value: v ? 0 : d,
                      onChange: ce,
                      onDragStart: () => {
                        D.current = true;
                        H(true);
                      },
                      onDragEnd: () => {
                        H(false);

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
                  B();
                },
                "aria-label": "На весь экран",
                children: u(Ze, {}),
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
function Ze() {
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
