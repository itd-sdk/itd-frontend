import { A, q, u, a as a_1, $, d, q as q_1, _ } from "./index-D4QRo1-7.js";
import { u as u_1 } from "./useBodyScrollLock-gmiKiKmy.js";
import { V } from "./VolumeGlyph-DjfbuZdP.js";
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
      n._sentryDebugIds[c] = "375f8ff7-0b56-4fec-93a7-46110be55e28";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-375f8ff7-0b56-4fec-93a7-46110be55e28";
    }
  } catch {}
})();
const we = "fsHb";
const ye = "AmYj";
const ke = "MJy0";
const Ee = "zl6R";
const S = { wrapper: we, track: ye, fill: ke, thumb: Ee };
function Pe({ value, onChange, onDragStart, onDragEnd }) {
  const i = A(null);

  const P = q(
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
      P(d.clientY);

      const w = (y) => P(y.clientY);

      const p = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", w);
        document.removeEventListener("mouseup", p);
      };

      document.addEventListener("mousemove", w);
      document.addEventListener("mouseup", p);
    },
    [P, onDragStart, onDragEnd]
  );

  const f = 7;
  const $ = 80;
  const b = f;
  const x = $ - f;
  const C = b + value * (x - b);
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
        onDragStart("div", { className: S.fill, style: { height: `${C}px` } }),
        onDragStart("div", { className: S.thumb, style: { bottom: `${C}px` } }),
      ],
    }),
  });
}
const Re = "t4wh";
const xe = "WPki";
const Ne = "i1M3";
const $e = "wj4m";
const Ce = "YB0u";
const Le = "IUz2";
const Te = "Dzos";
const Be = "fFfS";
const Me = "Y1AG";
const Se = "wjI5";
const Fe = "pREs";
const Ie = "V0PS";
const De = "GZOt";
const Ae = "xM4s";
const Ve = "EOyD";
const qe = "znHT";
const Oe = "IQkb";
const ze = "mKoO";
const Ge = "wJCr";
const He = "edPN";
const _e = "lGXa";
const We = "OpJG";
const Ye = "Ntzv";

const a = {
  overlay: Re,
  chrome: xe,
  closing: Ne,
  backdrop: $e,
  overlayFade: Ce,
  stage: Le,
  video: Te,
  poster: Be,
  bottomOverlay: Me,
  controlButton: Se,
  playButton: Fe,
  time: Ie,
  speedButton: De,
  volumeControl: Ae,
  volumeActive: Ve,
  volumeSlider: qe,
  muteButton: Oe,
  fullscreenButton: ze,
  progressContainer: Ge,
  progressTrack: He,
  progressBuffered: _e,
  progressFill: We,
  scrubbing: Ye,
};

const Y = 280;
const X = "cubic-bezier(0.32, 0.72, 0, 1)";
const F = [0.5, 1, 1.5, 2];
function j(n) {
  if (!isFinite(n) || n < 0) {
    return "0:00";
  }
  const c = Math.floor(n / 60);
  const u = Math.floor(n % 60);
  return `${c}:${String(u).padStart(2, "0")}`;
}
function Xe(n, c) {
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
  const n = a_1((i) => i.isOpen);

  const c = a_1((i) => i.options);

  const u = a_1((i) => i.session);

  const v = a_1((i) => i.close);

  return !n || !c
    ? null
    : $(u(je, { options: c, onUnmount: v }, u), document.body);
}

function je({ options, onUnmount }) {
  const u = A(null);
  const v = A(null);
  const i = A(null);
  const P = A(null);
  const [R, f] = d(false);
  const [$, b] = d(options.startTime ?? 0);
  const [x, C] = d(0);
  const [d, w] = d(Q);
  const [p, y] = d(false);
  const [U, Z] = d(1);
  const [ee, z] = d(false);
  const [te, G] = d(false);
  const [ne, re] = d(!!options.poster);

  const [H, oe] = d(() => {
    if (options.width && options.height) {
      return { w: options.width, h: options.height };
    }
    const n_sourceRect = options.sourceRect;
    return n_sourceRect && n_sourceRect.width > 0 && n_sourceRect.height > 0
      ? { w: n_sourceRect.width, h: n_sourceRect.height }
      : { w: 16, h: 9 };
  });

  const [Ue, se] = d({ w: window.innerWidth, h: window.innerHeight });
  const _ = A(false);
  const L = A(false);
  const I = A(false);
  u_1();
  const W = Xe(H.w, H.h);

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
    const l = n_sourceRect.height / r.height;
    const k =
      n_sourceRect.left + n_sourceRect.width / 2 - (r.left + r.width / 2);
    const N =
      n_sourceRect.top + n_sourceRect.height / 2 - (r.top + r.height / 2);
    const O = J(n_sourceRect.borderRadius);
    v_current.animate(
      [
        {
          transform: `translate(${k}px, ${N}px) scale(${s}, ${l})`,
          borderRadius: `${O / Math.max(s, 0.01)}px`,
        },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: Y, easing: X, fill: "backwards" }
    );
  }, []);

  const D = q(() => {
    if (_.current) {
      return;
    }
    _.current = true;
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
    const N = s.height / l.height;
    const O = s.left + s.width / 2 - (l.left + l.width / 2);
    const he = s.top + s.height / 2 - (l.top + l.height / 2);
    const fe = J(s.borderRadius);
    v_current
      .animate(
        [
          { transform: "none", borderRadius: "0px" },
          {
            transform: `translate(${O}px, ${he}px) scale(${k}, ${N})`,
            borderRadius: `${fe / Math.max(k, 0.01)}px`,
          },
        ],
        { duration: Y, easing: X, fill: "forwards" }
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

      if (i_current && !L.current) {
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
      for (let l = 0; l < i_current.buffered.length; l++) {
        const k = i_current.buffered.start(l);
        const N = i_current.buffered.end(l);
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
    Z((e) => {
      const t = (e + 1) % F.length;

      if (i.current) {
        i.current.playbackRate = F[t];
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

  q_1(() => {
    const e = (t) => {
      switch (t.key) {
        case "Escape": {
          D();
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
  }, [D, T, A, V, B]);

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
    b(i_current.currentTime);
  }, []);

  const ue = q(
    (e) => {
      e.stopPropagation();
      L.current = true;
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
          L.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", r);
      document.addEventListener("pointerup", s);
      document.addEventListener("pointercancel", s);
      window.addEventListener("blur", s);
    },
    [q]
  );

  const de = x > 0 ? ($ / x) * 100 : 0;
  const me = !options.sourceRect;
  return u("div", {
    ref: u,
    "data-vp": "overlay",
    className: `${a.overlay} ${me ? a.overlayFade : ""} ym-hide-content`,
    onClick: D,
    children: [
      u("div", { className: a.backdrop }),
      u("div", {
        ref: v,
        "data-vp": "stage",
        className: a.stage,
        style: { width: `${W.width}px`, height: `${W.height}px` },
        onClick: (e) => {
          e.stopPropagation();

          if (!L.current && !I.current) {
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
              u("span", { className: a.time, children: [j($), " / ", j(x)] }),
              u("button", {
                type: "button",
                className: `${a.controlButton} ${a.speedButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  le();
                },
                "aria-label": "Скорость воспроизведения",
                children: [F[U], "×"],
              }),
              u("div", {
                className: `${a.volumeControl} ${te ? a.volumeActive : ""}`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  u("div", {
                    className: a.volumeSlider,
                    children: u(Pe, {
                      value: p ? 0 : d,
                      onChange: ce,
                      onDragStart: () => {
                        I.current = true;
                        G(true);
                      },
                      onDragEnd: () => {
                        G(false);

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
