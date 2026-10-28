import { A, q, u, aa, v, d, q as q_1, ab } from "./index-AoERIL5v.js";
import { u as u_1 } from "./useBodyScrollLock-BHjBvd5o.js";
import { V } from "./VolumeGlyph-CONnbAi0.js";
const be = "lH8I";
const ye = "PrLn";
const ke = "p1VN";
const Pe = "uZgY";
const M = { wrapper: be, track: ye, fill: ke, thumb: Pe };
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

  const E = q(
    (d) => {
      d.stopPropagation();
      d.preventDefault();
      onDragStart?.();
      x(d.clientY);

      const b = (y) => x(y.clientY);

      const p = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", b);
        document.removeEventListener("mouseup", p);
      };

      document.addEventListener("mousemove", b);
      document.addEventListener("mouseup", p);
    },
    [x, onDragStart, onDragEnd]
  );

  const v = 7;
  const N = 80;
  const w = v;
  const L = N - v;
  const $ = w + value * (L - w);
  return onChange("div", {
    className: M.wrapper,
    onMouseDown: E,
    onClick: (d) => {
      d.stopPropagation();
      d.preventDefault();
    },
    children: onChange("div", {
      ref: i,
      className: M.track,
      children: [
        onChange("div", { className: M.fill, style: { height: `${$}px` } }),
        onChange("div", { className: M.thumb, style: { bottom: `${$}px` } }),
      ],
    }),
  });
}
const Ee = "vswd";
const Le = "o97A";
const Re = "oFrs";
const Ne = "Hqd8";
const $e = "TFm8";
const Ce = "Ecr9";
const Be = "pU2S";
const Fe = "M6GO";
const Te = "gyx6";
const Me = "qELR";
const Se = "FxHO";
const Ae = "iPhf";
const Ve = "sJr7";
const Ie = "L40P";
const De = "l8V6";
const qe = "EuKS";
const Oe = "fAdJ";
const He = "vLgm";
const Ge = "c9Xz";
const ze = "ErkA";
const We = "ZcNs";
const Xe = "ApKV";
const Ke = "QLyf";

const c = {
  overlay: Ee,
  chrome: Le,
  closing: Re,
  backdrop: Ne,
  overlayFade: $e,
  stage: Ce,
  video: Be,
  poster: Fe,
  bottomOverlay: Te,
  controlButton: Me,
  playButton: Se,
  time: Ae,
  speedButton: Ve,
  volumeControl: Ie,
  volumeActive: De,
  volumeSlider: qe,
  muteButton: Oe,
  fullscreenButton: He,
  progressContainer: Ge,
  progressTrack: ze,
  progressBuffered: We,
  progressFill: Xe,
  scrubbing: Ke,
};

const K = 280;
const Y = "cubic-bezier(0.32, 0.72, 0, 1)";
const S = [0.5, 1, 1.5, 2];
function _(n) {
  if (!isFinite(n) || n < 0) {
    return "0:00";
  }
  const u = Math.floor(n / 60);
  const l = Math.floor(n % 60);
  return `${u}:${String(l).padStart(2, "0")}`;
}
function Ye(n, u) {
  const l = Math.min(window.innerWidth / n, window.innerHeight / u);
  return { width: Math.round(n * l), height: Math.round(u * l) };
}
function J(n) {
  const u = parseFloat(n ?? "");
  return Number.isFinite(u) ? u : 0;
}
const Z = parseFloat(localStorage.getItem("video-volume") ?? "1");
const Q = Number.isNaN(Z) ? 1 : Z;

export function GlobalVideoPlayer() {
  const n = aa((i) => i.isOpen);

  const u = aa((i) => i.options);

  const l = aa((i) => i.session);

  const f = aa((i) => i.close);

  return !n || !u
    ? null
    : v(u(_e, { options: u, onUnmount: f }, l), document.body);
}

function _e({ options, onUnmount }) {
  const l = A(null);
  const f = A(null);
  const i = A(null);
  const x = A(null);
  const [E, v] = d(false);
  const [N, w] = d(options.startTime ?? 0);
  const [L, $] = d(0);
  const [d, b] = d(Q);
  const [p, y] = d(false);
  const [U, j] = d(1);
  const [ee, H] = d(false);
  const [te, G] = d(false);
  const [ne, re] = d(!!options.poster);

  const [z, oe] = d(() => {
    if (options.width && options.height) {
      return { w: options.width, h: options.height };
    }
    const n_sourceRect = options.sourceRect;
    return n_sourceRect && n_sourceRect.width > 0 && n_sourceRect.height > 0
      ? { w: n_sourceRect.width, h: n_sourceRect.height }
      : { w: 16, h: 9 };
  });

  const [Ue, se] = d({ w: window.innerWidth, h: window.innerHeight });
  const W = A(false);
  const C = A(false);
  const A = A(false);
  u_1();
  const X = Ye(z.w, z.h);

  q_1(() => {
    const e = () => se({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", e);

    return () => window.removeEventListener("resize", e);
  }, []);

  ab(() => {
    const f_current = f.current;
    const n_sourceRect = options.sourceRect;
    if (!f_current || !n_sourceRect) {
      return;
    }
    const r = f_current.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) {
      return;
    }
    const s = n_sourceRect.width / r.width;
    const a = n_sourceRect.height / r.height;
    const k =
      n_sourceRect.left + n_sourceRect.width / 2 - (r.left + r.width / 2);
    const R =
      n_sourceRect.top + n_sourceRect.height / 2 - (r.top + r.height / 2);
    const O = J(n_sourceRect.borderRadius);
    f_current.animate(
      [
        {
          transform: `translate(${k}px, ${R}px) scale(${s}, ${a})`,
          borderRadius: `${O / Math.max(s, 0.01)}px`,
        },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: K, easing: Y, fill: "backwards" }
    );
  }, []);

  const V = q(() => {
    if (W.current) {
      return;
    }
    W.current = true;
    const i_current = i.current;
    options.onCloseStart?.(i_current?.currentTime ?? 0);
    const l_current = l.current;
    const f_current = f.current;
    l_current?.classList.add(c.closing);
    const s = options.resolveCloseRect?.() ?? options.sourceRect ?? null;
    if (!f_current || !s) {
      f_current?.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        easing: "ease-out",
        fill: "forwards",
      });

      setTimeout(onUnmount, 210);
      return;
    }
    const a = f_current.getBoundingClientRect();
    const k = s.width / a.width;
    const R = s.height / a.height;
    const O = s.left + s.width / 2 - (a.left + a.width / 2);
    const he = s.top + s.height / 2 - (a.top + a.height / 2);
    const ve = J(s.borderRadius);
    f_current
      .animate(
        [
          { transform: "none", borderRadius: "0px" },
          {
            transform: `translate(${O}px, ${he}px) scale(${k}, ${R})`,
            borderRadius: `${ve / Math.max(k, 0.01)}px`,
          },
        ],
        { duration: K, easing: Y, fill: "forwards" }
      )
      .addEventListener("finish", onUnmount);
  }, [options, onUnmount]);

  q_1(() => {
    const i_current = i.current;

    if (i_current) {
      i_current.volume = Q;
      i_current.playbackRate = S[1];
      options.startTime &&
        options.startTime > 0 &&
        (i_current.currentTime = options.startTime);

      i_current
        .play()
        .then(() => v(true))
        .catch(() => {
          i_current.muted = true;
          y(true);

          i_current
            .play()
            .then(() => v(true))
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
    const a = () => requestAnimationFrame(r);
    i_current.addEventListener("playing", a, { once: true });

    return () => {
      t = true;
      i_current.removeEventListener("playing", a);
    };
  }, []);

  q_1(() => {
    if (!E) {
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
  }, [E]);

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
      for (let a = 0; a < i_current.buffered.length; a++) {
        const k = i_current.buffered.start(a);
        const R = i_current.buffered.end(a);
        s.push({
          left: (k / i_current_duration) * 100,
          width: ((R - k) / i_current_duration) * 100,
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
          .then(() => v(true))
          .catch(() => {});
      } else {
        i_current.pause();
        v(false);
      }
    }
  }, []);

  const I = q((e) => {
    const i_current = i.current;

    if (i_current && Number.isFinite(i_current.duration)) {
      i_current.currentTime = Math.max(
        0,
        Math.min(i_current.duration, i_current.currentTime + e)
      );
      w(i_current.currentTime);
    }
  }, []);

  const D = q(() => {
    const i_current = i.current;

    if (i_current) {
      i_current.muted = !i_current.muted;
      y(i_current.muted);
    }
  }, []);

  const ae = q((e) => {
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
    j((e) => {
      const t = (e + 1) % S.length;

      if (i.current) {
        i.current.playbackRate = S[t];
      }

      return t;
    });
  }, []);

  const F = q(() => {
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
          V();
          break;
        }
        case " ": {
          t.preventDefault();
          B();
          break;
        }
        case "ArrowLeft": {
          t.preventDefault();
          I(-5);
          break;
        }
        case "ArrowRight": {
          t.preventDefault();
          I(5);
          break;
        }
        case "m":
        case "M":
        case "ь":
        case "Ь": {
          D();
          break;
        }
        case "f":
        case "F":
        case "а":
        case "А": {
          F();
          break;
        }
      }
    };
    window.addEventListener("keydown", e);

    return () => window.removeEventListener("keydown", e);
  }, [V, B, I, D, F]);

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
    const a = Math.min(1, Math.max(0, (e - s.left) / s.width));
    i_current.currentTime = i_current.duration * a;
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

      const r = (a) => q(a.clientX);

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

  const de = L > 0 ? (N / L) * 100 : 0;
  const me = !options.sourceRect;
  return onUnmount("div", {
    ref: l,
    "data-vp": "overlay",
    className: `${c.overlay} ${me ? c.overlayFade : ""} ym-hide-content`,
    onClick: V,
    children: [
      onUnmount("div", { className: c.backdrop }),
      onUnmount("div", {
        ref: f,
        "data-vp": "stage",
        className: c.stage,
        style: { width: `${X.width}px`, height: `${X.height}px` },
        onClick: (e) => {
          e.stopPropagation();

          if (!C.current && !A.current) {
            B();
          }
        },
        onDblClick: (e) => {
          e.stopPropagation();
          F();
        },
        children: [
          onUnmount("video", {
            ref: i,
            "data-vp": "video",
            src: options.url,
            className: c.video,
            playsInline: true,
            onPlay: () => v(true),
            onPause: () => v(false),
            onEnded: () => v(false),
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
            onUnmount("img", {
              className: c.poster,
              src: options.poster,
              alt: "",
              "aria-hidden": "true",
            }),
          onUnmount("div", {
            className: `${c.chrome} ${c.bottomOverlay}`,
            onDblClick: (e) => e.stopPropagation(),
            children: [
              onUnmount("button", {
                type: "button",
                className: `${c.controlButton} ${c.playButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  B();
                },
                "aria-label": E ? "Пауза" : "Воспроизвести",
                children: E ? onUnmount(Ze, {}) : onUnmount(Je, {}),
              }),
              onUnmount("span", {
                className: c.time,
                children: [_(N), " / ", _(L)],
              }),
              onUnmount("button", {
                type: "button",
                className: `${c.controlButton} ${c.speedButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  ue();
                },
                "aria-label": "Скорость воспроизведения",
                children: [S[U], "×"],
              }),
              onUnmount("div", {
                className: `${c.volumeControl} ${te ? c.volumeActive : ""}`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  onUnmount("div", {
                    className: c.volumeSlider,
                    children: onUnmount(xe, {
                      value: p ? 0 : d,
                      onChange: ae,
                      onDragStart: () => {
                        A.current = true;
                        G(true);
                      },
                      onDragEnd: () => {
                        G(false);

                        setTimeout(() => {
                          A.current = false;
                        }, 0);
                      },
                    }),
                  }),
                  onUnmount("button", {
                    type: "button",
                    className: c.muteButton,
                    onClick: (e) => {
                      e.stopPropagation();
                      D();
                    },
                    "aria-label": p ? "Включить звук" : "Выключить звук",
                    children: onUnmount(V, { muted: p || d === 0, volume: d }),
                  }),
                ],
              }),
              onUnmount("button", {
                type: "button",
                className: `${c.controlButton} ${c.fullscreenButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  F();
                },
                "aria-label": "На весь экран",
                children: onUnmount(Qe, {}),
              }),
              onUnmount("div", {
                "data-vp": "progress",
                className: c.progressContainer,
                onPointerDown: le,
                onClick: (e) => e.stopPropagation(),
                children: onUnmount("div", {
                  ref: x,
                  className: c.progressTrack,
                  children: [
                    ie.map((e, t) =>
                      onUnmount(
                        "div",
                        {
                          className: c.progressBuffered,
                          style: { left: `${e.left}%`, width: `${e.width}%` },
                        },
                        t
                      )
                    ),
                    onUnmount("div", {
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
