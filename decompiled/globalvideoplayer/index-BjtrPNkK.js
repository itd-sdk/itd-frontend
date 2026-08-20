import { A, q, u, a, $, d, y, _ } from "./index-DDTOXJaD.js";
import { u as u_1 } from "./useBodyScrollLock-BeyLdAVZ.js";
import { V } from "./VolumeGlyph-CLzPRCnq.js";
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
      n._sentryDebugIds[a] = "2c94774c-885b-48b1-ae69-c15e9bd6081d";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-2c94774c-885b-48b1-ae69-c15e9bd6081d";
    }
  } catch {}
})();
const we = "zObB";
const ye = "jIZT";
const ke = "RqN0";
const Ee = "eIqI";
const M = { wrapper: we, track: ye, fill: ke, thumb: Ee };
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

  const C = q(
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
  const L = 80;
  const b = f;
  const P = L - f;
  const N = b + value * (P - b);
  return u("div", {
    className: M.wrapper,
    onMouseDown: C,
    onClick: (d) => {
      d.stopPropagation();
      d.preventDefault();
    },
    children: u("div", {
      ref: i,
      className: M.track,
      children: [
        u("div", { className: M.fill, style: { height: `${N}px` } }),
        u("div", { className: M.thumb, style: { bottom: `${N}px` } }),
      ],
    }),
  });
}
const Ce = "C3UY";
const Pe = "tCi9";
const xe = "aXXI";
const Le = "O43m";
const Ne = "Fqni";
const $e = "IFvu";
const Be = "RVuE";
const Te = "vBKI";
const Fe = "JLtP";
const Me = "QXrM";
const Se = "hk4M";
const Ie = "dvBJ";
const De = "ezcp";
const Ae = "tKuc";
const Ve = "kCHo";
const qe = "kwFS";
const Oe = "l1Ci";
const ze = "sGrQ";
const Ge = "pDpl";
const We = "iW8l";
const _e = "esGp";
const He = "FzDL";
const Xe = "a8Wd";

const c = {
  overlay: Ce,
  chrome: Pe,
  closing: xe,
  backdrop: Le,
  overlayFade: Ne,
  stage: $e,
  video: Be,
  poster: Te,
  bottomOverlay: Fe,
  controlButton: Me,
  playButton: Se,
  time: Ie,
  speedButton: De,
  volumeControl: Ae,
  volumeActive: Ve,
  volumeSlider: qe,
  muteButton: Oe,
  fullscreenButton: ze,
  progressContainer: Ge,
  progressTrack: We,
  progressBuffered: _e,
  progressFill: He,
  scrubbing: Xe,
};

const X = 280;
const Y = "cubic-bezier(0.32, 0.72, 0, 1)";
const S = [0.5, 1, 1.5, 2];
function K(n) {
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
function J(n) {
  const a = parseFloat(n ?? "");
  return Number.isFinite(a) ? a : 0;
}
const Q = parseFloat(localStorage.getItem("video-volume") ?? "1");
const j = Number.isNaN(Q) ? 1 : Q;

export function GlobalVideoPlayer() {
  const n = a((i) => i.isOpen);

  const a = a((i) => i.options);

  const l = a((i) => i.session);

  const v = a((i) => i.close);

  return !n || !a
    ? null
    : $(u(Ke, { options: a, onUnmount: v }, l), document.body);
}

function Ke({ options, onUnmount }) {
  const l = A(null);
  const v = A(null);
  const i = A(null);
  const R = A(null);
  const [C, f] = d(false);
  const [L, b] = d(options.startTime ?? 0);
  const [P, N] = d(0);
  const [d, w] = d(j);
  const [p, y] = d(false);
  const [U, Z] = d(1);
  const [ee, z] = d(false);
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

  const [Ue, se] = d({ w: window.innerWidth, h: window.innerHeight });
  const _ = A(false);
  const $ = A(false);
  const I = A(false);
  u_1();
  const H = Ye(W.w, W.h);

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
    const u = n_sourceRect.height / r.height;
    const k =
      n_sourceRect.left + n_sourceRect.width / 2 - (r.left + r.width / 2);
    const x =
      n_sourceRect.top + n_sourceRect.height / 2 - (r.top + r.height / 2);
    const O = J(n_sourceRect.borderRadius);
    v_current.animate(
      [
        {
          transform: `translate(${k}px, ${x}px) scale(${s}, ${u})`,
          borderRadius: `${O / Math.max(s, 0.01)}px`,
        },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: X, easing: Y, fill: "backwards" }
    );
  }, []);

  const D = q(() => {
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
    const x = s.height / u.height;
    const O = s.left + s.width / 2 - (u.left + u.width / 2);
    const he = s.top + s.height / 2 - (u.top + u.height / 2);
    const fe = J(s.borderRadius);
    v_current
      .animate(
        [
          { transform: "none", borderRadius: "0px" },
          {
            transform: `translate(${O}px, ${he}px) scale(${k}, ${x})`,
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
    const u = () => requestAnimationFrame(r);
    i_current.addEventListener("playing", u, { once: true });

    return () => {
      t = true;
      i_current.removeEventListener("playing", u);
    };
  }, []);

  y(() => {
    if (!C) {
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
  }, [C]);

  const [ie, ce] = d([]);
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
      for (let u = 0; u < i_current.buffered.length; u++) {
        const k = i_current.buffered.start(u);
        const x = i_current.buffered.end(u);
        s.push({
          left: (k / i_current_duration) * 100,
          width: ((x - k) / i_current_duration) * 100,
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
    Z((e) => {
      const t = (e + 1) % S.length;

      if (i.current) {
        i.current.playbackRate = S[t];
      }

      return t;
    });
  }, []);

  const T = q(() => {
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

  y(() => {
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
          T();
          break;
        }
      }
    };
    window.addEventListener("keydown", e);

    return () => window.removeEventListener("keydown", e);
  }, [D, B, A, V, T]);

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
      $.current = true;
      z(true);
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
        z(false);

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

  const de = P > 0 ? (L / P) * 100 : 0;
  const me = !options.sourceRect;
  return u("div", {
    ref: l,
    "data-vp": "overlay",
    className: `${c.overlay} ${me ? c.overlayFade : ""} ym-hide-content`,
    onClick: D,
    children: [
      u("div", { className: c.backdrop }),
      u("div", {
        ref: v,
        "data-vp": "stage",
        className: c.stage,
        style: { width: `${H.width}px`, height: `${H.height}px` },
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
              N(e_currentTarget.duration);

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
                "aria-label": C ? "Пауза" : "Воспроизвести",
                children: C ? u(Qe, {}) : u(Je, {}),
              }),
              u("span", { className: c.time, children: [K(L), " / ", K(P)] }),
              u("button", {
                type: "button",
                className: `${c.controlButton} ${c.speedButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  ue();
                },
                "aria-label": "Скорость воспроизведения",
                children: [S[U], "×"],
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
                  T();
                },
                "aria-label": "На весь экран",
                children: u(je, {}),
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
function Qe() {
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
