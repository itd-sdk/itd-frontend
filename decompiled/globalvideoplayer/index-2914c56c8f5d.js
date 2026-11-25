import {
  A as A_1,
  q,
  u,
  b4,
  aB,
  d,
  b5,
  h,
  b6,
  b7,
  b8,
  b9,
  ba,
  bb,
  bc,
} from "./index-4cbec7521f6a.js";
import { I as I_1 } from "./IconDownload-d2a2b88e486d.js";
const Be = "Uvoj";
const $e = "UC1X";
const Te = "FXPR";
const Fe = "zNLk";
const A = { wrapper: Be, track: $e, fill: Te, thumb: Fe };
function Me({ value, onChange, onDragStart, onDragEnd }) {
  const i = A_1(null);

  const v = q(
    (u) => {
      const i_current = i.current;
      if (!i_current) {
        return;
      }
      const y = i_current.getBoundingClientRect();
      const k = 1 - (u - y.top) / y.height;
      onChange(Math.max(0, Math.min(1, k)));
    },
    [onChange]
  );

  const x = q(
    (u) => {
      u.stopPropagation();
      u.preventDefault();
      onDragStart?.();
      v(u.clientY);

      const f = (k) => v(k.clientY);

      const y = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", f);
        document.removeEventListener("mouseup", y);
      };

      document.addEventListener("mousemove", f);
      document.addEventListener("mouseup", y);
    },
    [v, onDragStart, onDragEnd]
  );

  const w = 7;
  const p = 80;
  const E = w;
  const R = p - w;
  const P = E + value * (R - E);
  return u("div", {
    className: A.wrapper,
    onMouseDown: x,
    onClick: (u) => {
      u.stopPropagation();
      u.preventDefault();
    },
    children: u("div", {
      ref: i,
      className: A.track,
      children: [
        u("div", { className: A.fill, style: { height: `${P}px` } }),
        u("div", { className: A.thumb, style: { bottom: `${P}px` } }),
      ],
    }),
  });
}
const De = "jIwX";
const Se = "WUe7";
const Ae = "tDtp";
const Ie = "NblF";
const Ve = "wecm";
const qe = "jka5";
const ze = "bT84";
const Ge = "yen0";
const Oe = "sNG3";
const je = "gOBv";
const We = "h2le";
const He = "kKi3";
const Ue = "as5K";
const Xe = "ZWjs";
const Ke = "j58j";
const _e = "ajll";
const Ye = "X488";
const Je = "Up0K";
const Qe = "vTdn";
const Ze = "Jmlk";
const et = "hLlr";
const tt = "Gzjz";
const nt = "Gno0";
const rt = "AHcq";
const ot = "LFQE";
const st = "kTIi";

const a = {
  overlay: De,
  chrome: Se,
  closing: Ae,
  backdrop: Ie,
  overlayFade: Ve,
  stage: qe,
  video: ze,
  bottomOverlay: Ge,
  topActions: Oe,
  mediaError: je,
  errorDownload: We,
  poster: He,
  controlButton: Ue,
  playButton: Xe,
  time: Ke,
  speedButton: _e,
  volumeControl: Ye,
  volumeActive: Je,
  volumeSlider: Qe,
  muteButton: Ze,
  fullscreenButton: et,
  progressContainer: tt,
  progressTrack: nt,
  progressBuffered: rt,
  progressFill: ot,
  scrubbing: st,
};

const J = 280;
const Q = "cubic-bezier(0.32, 0.72, 0, 1)";
const I = [0.5, 1, 1.5, 2];
function Z(r) {
  return bb(r);
}
function at(r, l) {
  const h = Math.min(window.innerWidth / r, window.innerHeight / l);
  return { width: Math.round(r * h), height: Math.round(l * h) };
}
function ee(r) {
  const l = parseFloat(r ?? "");
  return Number.isFinite(l) ? l : 0;
}
const te = parseFloat(b7.getItem("video-volume") ?? "1");
const ne = Number.isNaN(te) ? 1 : te;

export function GlobalVideoPlayer() {
  const r = b4((i) => i.isOpen);

  const l = b4((i) => i.options);

  const h = b4((i) => i.session);

  const b = b4((i) => i.close);

  return !r || !l
    ? null
    : aB(u(it, { options: l, onUnmount: b }, h), document.body);
}

function it({ options, onUnmount }) {
  const h = A_1(null);
  const b = A_1(null);
  const i = A_1(null);
  const v = A_1(new bc()).current;
  const x = A_1(null);
  const [w, p] = d(false);
  const [E, R] = d(false);
  const [P, u] = d(options.startTime ?? 0);
  const [f, y] = d(0);
  const [k, oe] = d(ne);
  const [V, q] = d(false);
  const [se, ae] = d(1);
  const [ie, H] = d(false);
  const [ce, U] = d(false);
  const [le, X] = d(!!options.poster);

  const [K, ue] = d(() => {
    if (options.width && options.height) {
      return { w: options.width, h: options.height };
    }
    const r_sourceRect = options.sourceRect;
    return r_sourceRect && r_sourceRect.width > 0 && r_sourceRect.height > 0
      ? { w: r_sourceRect.width, h: r_sourceRect.height }
      : { w: 16, h: 9 };
  });

  const [dt, de] = d({ w: window.innerWidth, h: window.innerHeight });
  const B = A_1(false);
  const $ = A_1(false);
  const z = A_1(false);
  b5();
  const _ = at(K.w, K.h);

  h(() => {
    const e = () => de({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", e);

    return () => window.removeEventListener("resize", e);
  }, []);

  b6(() => {
    const b_current = b.current;
    const r_sourceRect = options.sourceRect;
    if (!b_current || !r_sourceRect) {
      return;
    }
    const o = b_current.getBoundingClientRect();
    if (o.width <= 0 || o.height <= 0) {
      return;
    }
    const s = r_sourceRect.width / o.width;
    const c = r_sourceRect.height / o.height;
    const N =
      r_sourceRect.left + r_sourceRect.width / 2 - (o.left + o.width / 2);
    const L =
      r_sourceRect.top + r_sourceRect.height / 2 - (o.top + o.height / 2);
    const W = ee(r_sourceRect.borderRadius);
    b_current.animate(
      [
        {
          transform: `translate(${N}px, ${L}px) scale(${s}, ${c})`,
          borderRadius: `${W / Math.max(s, 0.01)}px`,
        },
        { transform: "none", borderRadius: "0px" },
      ],
      { duration: J, easing: Q, fill: "backwards" }
    );
  }, []);

  const T = q(() => {
    if (B.current) {
      return;
    }
    B.current = true;
    v.cancel();
    const i_current = i.current;
    options.onCloseStart?.(i_current?.currentTime ?? 0);
    const h_current = h.current;
    const b_current = b.current;
    h_current?.classList.add(a.closing);
    const s = options.resolveCloseRect?.() ?? options.sourceRect ?? null;
    if (!b_current || !s) {
      b_current?.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        easing: "ease-out",
        fill: "forwards",
      });

      setTimeout(onUnmount, 210);
      return;
    }
    const c = b_current.getBoundingClientRect();
    const N = s.width / c.width;
    const L = s.height / c.height;
    const W = s.left + s.width / 2 - (c.left + c.width / 2);
    const we = s.top + s.height / 2 - (c.top + c.height / 2);
    const ye = ee(s.borderRadius);
    b_current
      .animate(
        [
          { transform: "none", borderRadius: "0px" },
          {
            transform: `translate(${W}px, ${we}px) scale(${N}, ${L})`,
            borderRadius: `${ye / Math.max(N, 0.01)}px`,
          },
        ],
        { duration: J, easing: Q, fill: "forwards" }
      )
      .addEventListener("finish", onUnmount);
  }, [options, onUnmount]);

  h(() => {
    const i_current = i.current;

    if (i_current) {
      i_current.volume = ne;
      i_current.playbackRate = I[1];
      options.startTime &&
        options.startTime > 0 &&
        (i_current.currentTime = options.startTime);

      i_current
        .play()
        .then(() => p(true))
        .catch(() => {
          i_current.muted = true;
          q(true);

          i_current
            .play()
            .then(() => p(true))
            .catch(() => {});
        });
    }
  }, []);

  h(() => {
    const i_current = i.current;
    return () => {
      v.cancel();

      if (!!i_current) {
        try {
          i_current.pause();
          i_current.removeAttribute("src");
          i_current.load();
        } catch {}
      }
    };
  }, []);

  h(() => {
    const i_current = i.current;
    if (!i_current || !options.poster) {
      return;
    }
    let t = false;

    const o = () => {
      if (!t) {
        X(false);
      }
    };

    const i_current_requestVideoFrameCallback =
      i_current.requestVideoFrameCallback;
    if (typeof i_current_requestVideoFrameCallback == "function") {
      i_current_requestVideoFrameCallback.call(i_current, o);

      return () => {
        t = true;
      };
    }
    const c = () => requestAnimationFrame(o);
    i_current.addEventListener("playing", c, { once: true });

    return () => {
      t = true;
      i_current.removeEventListener("playing", c);
    };
  }, []);

  h(() => {
    if (!w) {
      return;
    }
    let e = 0;
    const t = () => {
      const i_current = i.current;

      if (i_current && !$.current) {
        u(i_current.currentTime);
      }

      e = requestAnimationFrame(t);
    };
    e = requestAnimationFrame(t);

    return () => cancelAnimationFrame(e);
  }, [w]);

  const [me, he] = d([]);
  h(() => {
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
      for (let c = 0; c < i_current.buffered.length; c++) {
        const N = i_current.buffered.start(c);
        const L = i_current.buffered.end(c);
        s.push({
          left: (N / i_current_duration) * 100,
          width: ((L - N) / i_current_duration) * 100,
        });
      }
      he(s);
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

  const F = q(() => {
    const i_current = i.current;

    if (i_current) {
      if (i_current.paused) {
        v.prepare(
          i_current,
          options.resolveUrl,
          i_current.currentTime,
          () => i_current.isConnected && !B.current
        )
          .then(async (t) => {
            if (t) {
              await i_current.play();
            }
          })
          .catch(() => {});
      } else {
        v.cancel();
        i_current.pause();
        p(false);
      }
    }
  }, []);

  const M = q((e) => {
    const i_current = i.current;
    if (!i_current || !Number.isFinite(e)) {
      return;
    }
    const o = !i_current.paused;
    const s = Math.max(0, Math.min(i_current.duration || e, e));
    if (!options.resolveUrl) {
      i_current.currentTime = s;
      u(s);
      return;
    }
    v.prepare(
      i_current,
      options.resolveUrl,
      s,
      () => i_current.isConnected && !B.current
    )
      .then(async (c) => {
        if (c) {
          i_current.currentTime = s;
          u(s);
          o && (await i_current.play());
        }
      })
      .catch(() => {});
  }, []);

  const G = q(
    (e) => {
      const i_current = i.current;

      if (i_current && Number.isFinite(i_current.duration)) {
        M(i_current.currentTime + e);
      }
    },
    [M]
  );

  const O = q(() => {
    const i_current = i.current;

    if (i_current) {
      i_current.muted = !i_current.muted;
      q(i_current.muted);
    }
  }, []);

  const ve = q((e) => {
    oe(e);
    b7.setItem("video-volume", String(e));
    const i_current = i.current;

    if (i_current) {
      i_current.volume = e;
      i_current.muted = e === 0;
      q(e === 0);
    }
  }, []);

  const pe = q(() => {
    ae((e) => {
      const t = (e + 1) % I.length;

      if (i.current) {
        i.current.playbackRate = I[t];
      }

      return t;
    });
  }, []);

  const D = q(() => {
    const h_current = h.current;
    const i_current = i.current;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }

    if (h_current?.requestFullscreen) {
      h_current.requestFullscreen().catch(() => {});
    } else {
      i_current?.webkitEnterFullscreen?.();
    }
  }, []);

  h(() => {
    const e = (t) => {
      switch (t.key) {
        case "Escape": {
          T();
          break;
        }
        case " ": {
          t.preventDefault();
          F();
          break;
        }
        case "ArrowLeft": {
          t.preventDefault();
          G(-5);
          break;
        }
        case "ArrowRight": {
          t.preventDefault();
          G(5);
          break;
        }
        case "m":
        case "M":
        case "ь":
        case "Ь": {
          O();
          break;
        }
        case "f":
        case "F":
        case "а":
        case "А": {
          D();
          break;
        }
      }
    };
    window.addEventListener("keydown", e);

    return () => window.removeEventListener("keydown", e);
  }, [T, F, G, O, D]);

  const j = q(
    (e) => {
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
      const c = Math.min(1, Math.max(0, (e - s.left) / s.width));
      M(i_current.duration * c);
    },
    [M]
  );

  const fe = q(
    (e) => {
      e.stopPropagation();
      $.current = true;
      H(true);
      const e_currentTarget = e.currentTarget;
      try {
        e_currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      j(e.clientX);

      const o = (c) => j(c.clientX);

      const s = () => {
        try {
          e_currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        document.removeEventListener("pointermove", o);
        document.removeEventListener("pointerup", s);
        document.removeEventListener("pointercancel", s);
        window.removeEventListener("blur", s);
        H(false);

        setTimeout(() => {
          $.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", o);
      document.addEventListener("pointerup", s);
      document.addEventListener("pointercancel", s);
      window.addEventListener("blur", s);
    },
    [j]
  );

  const ge = f > 0 ? (P / f) * 100 : 0;
  const be = !options.sourceRect;
  return u("div", {
    ref: h,
    "data-vp": "overlay",
    className: `${a.overlay} ${be ? a.overlayFade : ""} ym-hide-content`,
    onClick: T,
    children: [
      u("div", { className: a.backdrop }),
      u("div", {
        className: `${a.chrome} ${a.topActions}`,
        children: [
          options.onDownload &&
            u("button", {
              type: "button",
              className: a.controlButton,
              "aria-label": "Скачать видео",
              onClick: (e) => {
                e.stopPropagation();
                options.onDownload?.();
              },
              children: u(I_1, { size: 22 }),
            }),
          u("button", {
            type: "button",
            className: a.controlButton,
            "aria-label": "Закрыть видео",
            onClick: (e) => {
              e.stopPropagation();
              T();
            },
            children: u(b8, { size: 24 }),
          }),
        ],
      }),
      u("div", {
        ref: b,
        "data-vp": "stage",
        className: a.stage,
        style: { width: `${_.width}px`, height: `${_.height}px` },
        onClick: (e) => {
          e.stopPropagation();

          if (!$.current && !z.current) {
            F();
          }
        },
        onDblClick: (e) => {
          e.stopPropagation();
          D();
        },
        children: [
          u("video", {
            ref: i,
            "data-vp": "video",
            src: options.url,
            className: a.video,
            playsInline: true,
            onPlay: () => {
              b9();
              p(true);
              R(false);
            },
            onError: () => {
              R(true);
              p(false);
              X(false);
            },
            onPause: () => p(false),
            onEnded: () => p(false),
            onLoadedMetadata: (e) => {
              const e_currentTarget = e.currentTarget;
              y(e_currentTarget.duration);

              if (
                !options.width &&
                e_currentTarget.videoWidth > 0 &&
                e_currentTarget.videoHeight > 0
              ) {
                ue({
                  w: e_currentTarget.videoWidth,
                  h: e_currentTarget.videoHeight,
                });
              }
            },
            onSeeked: (e) => u(e.currentTarget.currentTime),
          }),
          options.poster &&
            le &&
            u("img", {
              className: a.poster,
              src: options.poster,
              alt: "",
              "aria-hidden": "true",
            }),
          E &&
            u("div", {
              className: a.mediaError,
              role: "alert",
              onClick: (e) => e.stopPropagation(),
              children: [
                u("strong", { children: "Не удалось воспроизвести видео" }),
                u("p", {
                  children:
                    "Формат может не поддерживаться браузером. Попробуйте открыть файл на устройстве.",
                }),
                options.onDownload &&
                  u("button", {
                    type: "button",
                    className: a.errorDownload,
                    onClick: () => {
                      options.onDownload?.();
                    },
                    children: [u(I_1, { size: 18 }), " Скачать видео"],
                  }),
              ],
            }),
          u("div", {
            className: `${a.chrome} ${a.bottomOverlay}`,
            hidden: E,
            onDblClick: (e) => e.stopPropagation(),
            children: [
              u("button", {
                type: "button",
                className: `${a.controlButton} ${a.playButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  F();
                },
                "aria-label": w ? "Пауза" : "Воспроизвести",
                children: w ? u(lt, {}) : u(ct, {}),
              }),
              u("span", { className: a.time, children: [Z(P), " / ", Z(f)] }),
              u("button", {
                type: "button",
                className: `${a.controlButton} ${a.speedButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  pe();
                },
                "aria-label": "Скорость воспроизведения",
                children: [I[se], "×"],
              }),
              u("div", {
                className: `${a.volumeControl} ${ce ? a.volumeActive : ""}`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  u("div", {
                    className: a.volumeSlider,
                    children: u(Me, {
                      value: V ? 0 : k,
                      onChange: ve,
                      onDragStart: () => {
                        z.current = true;
                        U(true);
                      },
                      onDragEnd: () => {
                        U(false);

                        setTimeout(() => {
                          z.current = false;
                        }, 0);
                      },
                    }),
                  }),
                  u("button", {
                    type: "button",
                    className: a.muteButton,
                    onClick: (e) => {
                      e.stopPropagation();
                      O();
                    },
                    "aria-label": V ? "Включить звук" : "Выключить звук",
                    children: u(ba, { muted: V || k === 0, volume: k }),
                  }),
                ],
              }),
              u("button", {
                type: "button",
                className: `${a.controlButton} ${a.fullscreenButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  D();
                },
                "aria-label": "На весь экран",
                children: u(ut, {}),
              }),
              u("div", {
                "data-vp": "progress",
                className: a.progressContainer,
                onPointerDown: fe,
                onClick: (e) => e.stopPropagation(),
                children: u("div", {
                  ref: x,
                  className: a.progressTrack,
                  children: [
                    me.map((e, t) =>
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
                      className: `${a.progressFill} ${ie ? a.scrubbing : ""}`,
                      style: { width: `${ge}%` },
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
function ct() {
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
function lt() {
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
function ut() {
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
