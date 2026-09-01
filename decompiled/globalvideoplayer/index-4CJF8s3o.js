import { A, q, u, a, $, d, q as q_1, _ } from "./index-gHxZkwFX.js";
import { u as u_1 } from "./useBodyScrollLock-hVXIewUP.js";
import { V } from "./VolumeGlyph-B_VL4u7Q.js";
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
    n.SENTRY_RELEASE = { id: "1.1.4" };
    const a = new n.Error().stack;

    if (a) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[a] = "0e4d6d52-e22c-4c31-8b1a-4010c981dbdf";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-0e4d6d52-e22c-4c31-8b1a-4010c981dbdf";
    }
  } catch {}
})();
const we = "I30i";
const ye = "Ebh2";
const ke = "HHdZ";
const Ee = "ve2n";
const F = { wrapper: we, track: ye, fill: ke, thumb: Ee };
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

  const x = q(
    (d) => {
      d.stopPropagation();
      d.preventDefault();
      onDragStart?.();
      R(d.clientY);

      const w = (y) => R(y.clientY);

      const p = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", w);
        document.removeEventListener("mouseup", p);
      };

      document.addEventListener("mousemove", w);
      document.addEventListener("mouseup", p);
    },
    [R, onDragStart, onDragEnd]
  );

  const f = 7;
  const N = 80;
  const b = f;
  const P = N - f;
  const T = b + value * (P - b);
  return u("div", {
    className: F.wrapper,
    onMouseDown: x,
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
const xe = "DZy1";
const Pe = "YK1U";
const $e = "AtAF";
const Ne = "kjge";
const Te = "RVO1";
const Ce = "yAOX";
const Le = "rnVi";
const Be = "OMiW";
const Me = "W5MR";
const Fe = "Gea4";
const Se = "Td20";
const Ie = "cHGB";
const Ae = "MtaV";
const De = "OV8R";
const Ve = "Iome";
const qe = "uxAE";
const Oe = "zXFY";
const He = "aad2";
const Ge = "jhtA";
const We = "w1uT";
const _e = "okox";
const ze = "sl2X";
const Xe = "qcHS";

const c = {
  overlay: xe,
  chrome: Pe,
  closing: $e,
  backdrop: Ne,
  overlayFade: Te,
  stage: Ce,
  video: Le,
  poster: Be,
  bottomOverlay: Me,
  controlButton: Fe,
  playButton: Se,
  time: Ie,
  speedButton: Ae,
  volumeControl: De,
  volumeActive: Ve,
  volumeSlider: qe,
  muteButton: Oe,
  fullscreenButton: He,
  progressContainer: Ge,
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
  const a = Math.floor(n / 60);
  const l = Math.floor(n % 60);
  return `${a}:${String(l).padStart(2, "0")}`;
}
function Ye(n, a) {
  const l = Math.min(window.innerWidth / n, window.innerHeight / a);
  return { width: Math.round(n * l), height: Math.round(a * l) };
}
function K(n) {
  const a = parseFloat(n ?? "");
  return Number.isFinite(a) ? a : 0;
}
const Z = parseFloat(localStorage.getItem("video-volume") ?? "1");
const U = Number.isNaN(Z) ? 1 : Z;

export function GlobalVideoPlayer() {
  const n = a((i) => i.isOpen);

  const a = a((i) => i.options);

  const l = a((i) => i.session);

  const v = a((i) => i.close);

  return !n || !a
    ? null
    : $(u(je, { options: a, onUnmount: v }, l), document.body);
}

function je({ options, onUnmount }) {
  const l = A(null);
  const v = A(null);
  const i = A(null);
  const R = A(null);
  const [x, f] = d(false);
  const [N, b] = d(options.startTime ?? 0);
  const [P, T] = d(0);
  const [d, w] = d(U);
  const [p, y] = d(false);
  const [J, Q] = d(1);
  const [ee, H] = d(false);
  const [te, G] = d(false);
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

  const [Je, se] = d({ w: window.innerWidth, h: window.innerHeight });
  const _ = A(false);
  const C = A(false);
  const I = A(false);
  u_1();
  const z = Ye(W.w, W.h);

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
    const $ =
      n_sourceRect.top + n_sourceRect.height / 2 - (r.top + r.height / 2);
    const O = K(n_sourceRect.borderRadius);
    v_current.animate(
      [
        {
          transform: `translate(${k}px, ${$}px) scale(${s}, ${u})`,
          borderRadius: `${O / Math.max(s, 0.01)}px`,
        },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: X, easing: Y, fill: "backwards" }
    );
  }, []);

  const A = q(() => {
    if (_.current) {
      return;
    }
    _.current = true;
    const i_current = i.current;
    options.onCloseStart?.(i_current?.currentTime ?? 0);
    const l_current = l.current;
    const v_current = v.current;
    l_current?.classList.add(c.closing);
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
    const $ = s.height / u.height;
    const O = s.left + s.width / 2 - (u.left + u.width / 2);
    const he = s.top + s.height / 2 - (u.top + u.height / 2);
    const fe = K(s.borderRadius);
    v_current
      .animate(
        [
          { transform: "none", borderRadius: "0px" },
          {
            transform: `translate(${O}px, ${he}px) scale(${k}, ${$})`,
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
      i_current.volume = U;
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
    if (!x) {
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
  }, [x]);

  const [ie, ce] = d([]);
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
        const $ = i_current.buffered.end(u);
        s.push({
          left: (k / i_current_duration) * 100,
          width: (($ - k) / i_current_duration) * 100,
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

  const L = q(() => {
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

  const ue = q(() => {
    Q((e) => {
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
          A();
          break;
        }
        case " ": {
          t.preventDefault();
          L();
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
  }, [A, L, D, V, B]);

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
    b(i_current.currentTime);
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

  const de = P > 0 ? (N / P) * 100 : 0;
  const me = !options.sourceRect;
  return u("div", {
    ref: l,
    "data-vp": "overlay",
    className: `${c.overlay} ${me ? c.overlayFade : ""} ym-hide-content`,
    onClick: A,
    children: [
      u("div", { className: c.backdrop }),
      u("div", {
        ref: v,
        "data-vp": "stage",
        className: c.stage,
        style: { width: `${z.width}px`, height: `${z.height}px` },
        onClick: (e) => {
          e.stopPropagation();

          if (!C.current && !I.current) {
            L();
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
            className: c.video,
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
                  L();
                },
                "aria-label": x ? "Пауза" : "Воспроизвести",
                children: x ? u(Ze, {}) : u(Ke, {}),
              }),
              u("span", { className: c.time, children: [j(N), " / ", j(P)] }),
              u("button", {
                type: "button",
                className: `${c.controlButton} ${c.speedButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  ue();
                },
                "aria-label": "Скорость воспроизведения",
                children: [S[J], "×"],
              }),
              u("div", {
                className: `${c.volumeControl} ${te ? c.volumeActive : ""}`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  u("div", {
                    className: c.volumeSlider,
                    children: u(Re, {
                      value: p ? 0 : d,
                      onChange: ae,
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
                    className: c.muteButton,
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
                className: `${c.controlButton} ${c.fullscreenButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  B();
                },
                "aria-label": "На весь экран",
                children: u(Ue, {}),
              }),
              u("div", {
                "data-vp": "progress",
                className: c.progressContainer,
                onPointerDown: le,
                onClick: (e) => e.stopPropagation(),
                children: u("div", {
                  ref: R,
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
function Ke() {
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
