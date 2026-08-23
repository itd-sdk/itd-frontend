import { A, q, u, a as a_1, $, d, y, _ } from "./index-pEgBAsWz.js";
import { u as u_1 } from "./useBodyScrollLock-DE6CqLjD.js";
import { V } from "./VolumeGlyph-DZ-00ZIW.js";
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
      n._sentryDebugIds[c] = "1172b012-3b89-4e10-a602-32661edec8a7";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-1172b012-3b89-4e10-a602-32661edec8a7";
    }
  } catch {}
})();
const we = "YILB";
const ye = "FERQ";
const ke = "vvTP";
const Ee = "wlyl";
const M = { wrapper: we, track: ye, fill: ke, thumb: Ee };
function Re({ value, onChange, onDragStart, onDragEnd }) {
  const i = A(null);

  const R = q(
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

  const x = q(
    (d) => {
      d.stopPropagation();
      d.preventDefault();
      onDragStart?.();
      R(d.clientY);

      const w = (y) => R(y.clientY);

      const v = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", w);
        document.removeEventListener("mouseup", v);
      };

      document.addEventListener("mousemove", w);
      document.addEventListener("mouseup", v);
    },
    [R, onDragStart, onDragEnd]
  );

  const f = 7;
  const B = 80;
  const b = f;
  const P = B - f;
  const T = b + value * (P - b);
  return onDragStart("div", {
    className: M.wrapper,
    onMouseDown: x,
    onClick: (d) => {
      d.stopPropagation();
      d.preventDefault();
    },
    children: onDragStart("div", {
      ref: i,
      className: M.track,
      children: [
        onDragStart("div", { className: M.fill, style: { height: `${T}px` } }),
        onDragStart("div", { className: M.thumb, style: { bottom: `${T}px` } }),
      ],
    }),
  });
}
const xe = "sabh";
const Pe = "Wt8j";
const Ne = "Usz1";
const Be = "yo5Q";
const Te = "tBQw";
const $e = "YdTw";
const Le = "Be0N";
const Ce = "Masm";
const Fe = "JBOk";
const Me = "e7Rt";
const Se = "bPvr";
const De = "FjGM";
const Ie = "FvDD";
const Ae = "ldmo";
const Ve = "vQT4";
const qe = "sKS3";
const Oe = "XD0W";
const Ge = "tSMD";
const We = "G8Xx";
const _e = "xOrE";
const ze = "ypJb";
const He = "tnNz";
const Xe = "g5ep";

const a = {
  overlay: xe,
  chrome: Pe,
  closing: Ne,
  backdrop: Be,
  overlayFade: Te,
  stage: $e,
  video: Le,
  poster: Ce,
  bottomOverlay: Fe,
  controlButton: Me,
  playButton: Se,
  time: De,
  speedButton: Ie,
  volumeControl: Ae,
  volumeActive: Ve,
  volumeSlider: qe,
  muteButton: Oe,
  fullscreenButton: Ge,
  progressContainer: We,
  progressTrack: _e,
  progressBuffered: ze,
  progressFill: He,
  scrubbing: Xe,
};

const X = 280;
const Y = "cubic-bezier(0.32, 0.72, 0, 1)";
const S = [0.5, 1, 1.5, 2];
function Q(n) {
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
function j(n) {
  const c = parseFloat(n ?? "");
  return Number.isFinite(c) ? c : 0;
}
const J = parseFloat(localStorage.getItem("video-volume") ?? "1");
const K = Number.isNaN(J) ? 1 : J;

export function GlobalVideoPlayer() {
  const n = a_1((i) => i.isOpen);

  const c = a_1((i) => i.options);

  const u = a_1((i) => i.session);

  const p = a_1((i) => i.close);

  return !n || !c
    ? null
    : $(u(Qe, { options: c, onUnmount: p }, u), document.body);
}

function Qe({ options, onUnmount }) {
  const u = A(null);
  const p = A(null);
  const i = A(null);
  const R = A(null);
  const [x, f] = d(false);
  const [B, b] = d(options.startTime ?? 0);
  const [P, T] = d(0);
  const [d, w] = d(K);
  const [v, y] = d(false);
  const [U, Z] = d(1);
  const [ee, G] = d(false);
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

  const [Ue, se] = d({ w: window.innerWidth, h: window.innerHeight });
  const z = A(false);
  const $ = A(false);
  const D = A(false);
  u_1();
  const H = Ye(_.w, _.h);

  y(() => {
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
    const l = n_sourceRect.height / r.height;
    const k =
      n_sourceRect.left + n_sourceRect.width / 2 - (r.left + r.width / 2);
    const N =
      n_sourceRect.top + n_sourceRect.height / 2 - (r.top + r.height / 2);
    const O = j(n_sourceRect.borderRadius);
    p_current.animate(
      [
        {
          transform: `translate(${k}px, ${N}px) scale(${s}, ${l})`,
          borderRadius: `${O / Math.max(s, 0.01)}px`,
        },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: X, easing: Y, fill: "backwards" }
    );
  }, []);

  const I = q(() => {
    if (z.current) {
      return;
    }
    z.current = true;
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
    const N = s.height / l.height;
    const O = s.left + s.width / 2 - (l.left + l.width / 2);
    const he = s.top + s.height / 2 - (l.top + l.height / 2);
    const fe = j(s.borderRadius);
    p_current
      .animate(
        [
          { transform: "none", borderRadius: "0px" },
          {
            transform: `translate(${O}px, ${he}px) scale(${k}, ${N})`,
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
    if (!x) {
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
  }, [x]);

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
      const t = (e + 1) % S.length;

      if (i.current) {
        i.current.playbackRate = S[t];
      }

      return t;
    });
  }, []);

  const C = q(() => {
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
          I();
          break;
        }
        case " ": {
          t.preventDefault();
          L();
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
          C();
          break;
        }
      }
    };
    window.addEventListener("keydown", e);

    return () => window.removeEventListener("keydown", e);
  }, [I, L, A, V, C]);

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

  const de = P > 0 ? (B / P) * 100 : 0;
  const me = !options.sourceRect;
  return u("div", {
    ref: u,
    "data-vp": "overlay",
    className: `${a.overlay} ${me ? a.overlayFade : ""} ym-hide-content`,
    onClick: I,
    children: [
      u("div", { className: a.backdrop }),
      u("div", {
        ref: p,
        "data-vp": "stage",
        className: a.stage,
        style: { width: `${H.width}px`, height: `${H.height}px` },
        onClick: (e) => {
          e.stopPropagation();

          if (!$.current && !D.current) {
            L();
          }
        },
        onDblClick: (e) => {
          e.stopPropagation();
          C();
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
                  L();
                },
                "aria-label": x ? "Пауза" : "Воспроизвести",
                children: x ? u(Je, {}) : u(je, {}),
              }),
              u("span", { className: a.time, children: [Q(B), " / ", Q(P)] }),
              u("button", {
                type: "button",
                className: `${a.controlButton} ${a.speedButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  le();
                },
                "aria-label": "Скорость воспроизведения",
                children: [S[U], "×"],
              }),
              u("div", {
                className: `${a.volumeControl} ${te ? a.volumeActive : ""}`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  u("div", {
                    className: a.volumeSlider,
                    children: u(Re, {
                      value: v ? 0 : d,
                      onChange: ce,
                      onDragStart: () => {
                        D.current = true;
                        W(true);
                      },
                      onDragEnd: () => {
                        W(false);

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
                  C();
                },
                "aria-label": "На весь экран",
                children: u(Ke, {}),
              }),
              u("div", {
                "data-vp": "progress",
                className: a.progressContainer,
                onPointerDown: ue,
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
