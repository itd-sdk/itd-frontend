import {
  A as A_1,
  q,
  u,
  A_1 as A_1_1,
  ax,
  d,
  E,
  ay,
} from "./index-B9FitUXy.js";
import { V as V_1 } from "./VolumeGlyph-BaO6jcyf.js";
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
    const s = new n.Error().stack;

    if (s) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[s] = "ade8cee8-1758-4f9a-85e0-84fb1dbfd716";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-ade8cee8-1758-4f9a-85e0-84fb1dbfd716";
    }
  } catch {}
})();
const Ee = "p90n";
const Pe = "rH07";
const Me = "L3qg";
const Le = "nZ52";
const V = { wrapper: Ee, track: Pe, fill: Me, thumb: Le };
function ke({ value, onChange, onDragStart, onDragEnd }) {
  const c = A_1(null);

  const u = q(
    (m) => {
      const c_current = c.current;
      if (!c_current) {
        return;
      }
      const L = c_current.getBoundingClientRect();
      const k = 1 - (m - L.top) / L.height;
      onChange(Math.max(0, Math.min(1, k)));
    },
    [onChange]
  );

  const E = q(
    (m) => {
      m.stopPropagation();
      m.preventDefault();
      onDragStart?.();
      u(m.clientY);

      const h = (k) => u(k.clientY);

      const L = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", h);
        document.removeEventListener("mouseup", L);
      };

      document.addEventListener("mousemove", h);
      document.addEventListener("mouseup", L);
    },
    [u, onDragStart, onDragEnd]
  );

  const P = 7;
  const r = 80;
  const l = P;
  const p = r - P;
  const M = l + value * (p - l);
  const C = `${M}px`;
  return u("div", {
    className: V.wrapper,
    onMouseDown: E,
    onClick: (m) => {
      m.stopPropagation();
      m.preventDefault();
    },
    children: u("div", {
      ref: c,
      className: V.track,
      children: [
        u("div", { className: V.fill, style: { height: C } }),
        u("div", { className: V.thumb, style: { bottom: `${M}px` } }),
      ],
    }),
  });
}
const Se = 250;
function Ce({ videoRef, vs, attachmentId, source }) {
  const c = A_1(0);
  const u = A_1(null);
  const E = A_1(0);
  A_1_1(() => {
    const n_current = videoRef.current;
    if (!n_current || !vs || !attachmentId) {
      return;
    }

    const l = () => {
      u.current = Date.now();
    };

    const p = () => {
      if (u.current !== null) {
        c.current += Date.now() - u.current;
        u.current = null;
      }
    };

    const M = () => {
      if (n_current.paused || u.current === null) {
        return;
      }
      const m = Date.now();
      c.current += m - u.current;
      u.current = m;
    };

    const C = () => {
      if (n_current.duration > 0 && Number.isFinite(n_current.duration)) {
        E.current = Math.round(n_current.duration * 1000 /* 1e3 */);
      }
    };

    if (!n_current.paused && n_current.readyState >= 3) {
      u.current = Date.now();
    }

    n_current.addEventListener("playing", l);
    n_current.addEventListener("pause", p);
    n_current.addEventListener("waiting", p);
    n_current.addEventListener("timeupdate", M);
    n_current.addEventListener("loadedmetadata", C);

    if (n_current.duration > 0 && Number.isFinite(n_current.duration)) {
      E.current = Math.round(n_current.duration * 1000 /* 1e3 */);
    }

    return () => {
      n_current.removeEventListener("playing", l);
      n_current.removeEventListener("pause", p);
      n_current.removeEventListener("waiting", p);
      n_current.removeEventListener("timeupdate", M);
      n_current.removeEventListener("loadedmetadata", C);
    };
  }, [videoRef, vs, attachmentId]);
  const P = q(() => {
    if (!(!vs || !attachmentId)) {
      if (u.current !== null) {
        c.current += Date.now() - u.current;
        u.current = null;
      }

      if (c.current >= Se && E.current > 0) {
        const r = source === "post_page" || source === "link";
        ax.trackVideoProgress(
          vs,
          attachmentId,
          c.current,
          E.current,
          r ? source : undefined
        );
      }

      c.current = 0;
    }
  }, [vs, attachmentId, source]);

  A_1_1(() => () => P(), [P]);

  return { emit: P };
}
const De = "dSvy";
const Ne = "vizQ";
const Be = "N0bH";
const Re = "D8Mf";
const Ve = "oj9M";
const Ie = "Opfu";
const Te = "TIqL";
const Fe = "VCRW";
const $e = "gz3M";
const xe = "zKHO";
const qe = "fUkc";
const _e = "SufL";
const He = "EyVS";
const Oe = "zvlz";
const ze = "DVml";
const Ae = "doO1";
const Ge = "W866";
const Ue = "KHxe";
const Ye = "KIpH";

const a = {
  container: De,
  hidden: Ne,
  video: Be,
  revealing: Re,
  canvas: Ve,
  duration: Ie,
  bottomOverlay: Te,
  volumeControl: Fe,
  active: $e,
  volumeSlider: xe,
  muteButton: qe,
  muteButtonMobile: _e,
  controlButton: He,
  playButton: Oe,
  fullscreenButton: ze,
  progressContainer: Ae,
  progressTrack: Ge,
  progressFill: Ue,
  scrubbing: Ye,
};

const J = parseFloat(localStorage.getItem("video-volume") ?? "1");
let N = true;
let Y = isNaN(J) ? 1 : J;
const K = new Set();
const S = new Map();
let ee = false;
let A = null;
function I() {
  const n = window.innerHeight / 2;
  let s = null;
  let f = Infinity;
  for (const [v] of S) {
    const c = v.getBoundingClientRect();

    if (Math.abs(c.top + c.height / 2 - n) < f) {
      f = Math.abs(c.top + c.height / 2 - n);
      s = v;
    }
  }
  for (const [v, c] of S) {
    if (v === s && !c.userPaused) {
      if (c.video.paused) {
        c.video.play().catch(() => {});
      }
    } else if (!c.video.paused) {
      c.video.pause();
    }
  }
}
function te() {
  if (A == null) {
    A = requestAnimationFrame(() => {
      A = null;
      I();
    });
  }
}
function G() {
  const n = S.size > 1;

  if (n !== ee) {
    n
      ? window.addEventListener("scroll", te, { passive: true })
      : window.removeEventListener("scroll", te);

    ee = n;
  }
}
function U(n) {
  N = n;
  localStorage.setItem("video-muted", String(n));

  K.forEach((s) => s(n));
}
function Ke(n) {
  Y = n;
  localStorage.setItem("video-volume", String(n));
}
function We(n) {
  const s = Math.floor(n / 60);
  const f = n % 60;
  return `${s}:${f.toString().padStart(2, "0")}`;
}
function Xe() {
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

export function PostMediaVideo({
  src,
  spoiler = false,
  width,
  height,
  duration,
  className = "",
  postVs,
  source,
  attachmentId,
}) {
  const l = A_1(null);
  const p = A_1(null);
  const M = A_1(null);
  const C = A_1(null);
  const m = A_1(null);
  const [h, L] = d(!spoiler);
  const [k, ne] = d(false);
  const [re, oe] = d(false);
  const [D, se] = d(N);
  const [T, ie] = d(Y);
  const [ce, W] = d(false);
  const [ae, F] = d(0);
  const [le, X] = d(false);
  const [j, $] = d(false);
  const R = A_1(false);
  const x = A_1(false);
  const ue = postVs();
  const { emit } = Ce({
    videoRef: l,
    vs: postVs,
    attachmentId: attachmentId,
    source: source,
  });

  const { resetOpacity } = ay(M, p, {
    isVisible: re && !h && spoiler,
    isRevealing: k,
    onRevealComplete: () => L(true),
  });

  A_1_1(() => {
    const e = (o) => {
      se(o);

      if (l.current) {
        l.current.muted = o;
      }
    };
    K.add(e);

    return () => {
      K.delete(e);
    };
  }, []);

  A_1_1(() => {
    const p_current = p.current;
    if (!p_current) {
      return;
    }
    const o = new IntersectionObserver(
      (i) => {
        i.forEach((d) => {
          oe(d.isIntersecting);
          const l_current = l.current;

          if (l_current) {
            if (d.isIntersecting) {
              l_current.currentTime = 0;
              l_current.muted = N;
              l_current.volume = Y;
              S.set(p_current, { video: l_current, userPaused: false });
              G();
              I();
            } else {
              S.delete(p_current);
              G();
              I();
              l_current.pause();
              emit();
              l_current.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    o.observe(p_current);

    return () => {
      o.disconnect();
      S.delete(p_current);
      G();
      I();
      emit();
    };
  }, [h, emit]);

  A_1_1(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }

    const o = () => {
      if (R.current) {
        return;
      }
      const l_current_duration = l_current.duration;

      if (Number.isFinite(l_current_duration) && l_current_duration > 0) {
        F((l_current.currentTime / l_current_duration) * 100);
      }
    };

    const i = () => F(0);

    l_current.addEventListener("timeupdate", o);
    l_current.addEventListener("loadedmetadata", o);
    l_current.addEventListener("emptied", i);

    return () => {
      l_current.removeEventListener("timeupdate", o);
      l_current.removeEventListener("loadedmetadata", o);
      l_current.removeEventListener("emptied", i);
    };
  }, []);

  A_1_1(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }

    const o = () => $(true);

    const i = () => $(false);

    l_current.addEventListener("play", o);
    l_current.addEventListener("pause", i);
    $(!l_current.paused);

    return () => {
      l_current.removeEventListener("play", o);
      l_current.removeEventListener("pause", i);
    };
  }, []);

  const _ = emit((e) => {
    const m_current = m.current;
    const l_current = l.current;
    if (!m_current || !l_current) {
      return;
    }
    const d = m_current.getBoundingClientRect();
    if (d.width <= 0) {
      return;
    }
    const g = Math.min(1, Math.max(0, (e - d.left) / d.width));

    if (Number.isFinite(l_current.duration) && l_current.duration > 0) {
      l_current.currentTime = l_current.duration * g;
      F(g * 100);
    }
  }, []);

  const fe = emit(
    (e) => {
      e.stopPropagation();
      R.current = true;
      X(true);
      const e_currentTarget = e.currentTarget;
      try {
        e_currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      _(e.clientX);

      const i = (g) => _(g.clientX);

      const d = () => {
        try {
          e_currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        document.removeEventListener("pointermove", i);
        document.removeEventListener("pointerup", d);
        document.removeEventListener("pointercancel", d);
        window.removeEventListener("blur", d);
        X(false);

        setTimeout(() => {
          R.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", i);
      document.addEventListener("pointerup", d);
      document.addEventListener("pointercancel", d);
      window.addEventListener("blur", d);
    },
    [_]
  );

  const ve = (e) => {
    e.stopPropagation();

    if (!(x.current || R.current)) {
      if (!h && !k && spoiler) {
        ne(true);
        resetOpacity();
        return;
      }
      H();
    }
  };

  const me = (e) => {
    e.stopPropagation();
    O();
  };

  const Q = emit((e) => {
    e.stopPropagation();
    e.preventDefault();
    U(!N);
  }, []);

  const H = emit(() => {
    const l_current = l.current;
    const p_current = p.current;
    if (!l_current || !p_current) {
      return;
    }
    const i = S.get(p_current);

    if (l_current.paused) {
      i && (i.userPaused = false);
      l_current.play().catch(() => {});
    } else {
      i && (i.userPaused = true);
      l_current.pause();
    }
  }, []);

  const O = emit(() => {
    const l_current = l.current;
    const p_current = p.current;
    if (!l_current) {
      return;
    }
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }
    const i = l_current;

    if (p_current?.requestFullscreen) {
      p_current.requestFullscreen().catch(() => {});
    } else if (i.webkitEnterFullscreen) {
      i.webkitEnterFullscreen();
    }
  }, []);

  const pe = emit(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      H();
    },
    [H]
  );

  const ge = emit(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      O();
    },
    [O]
  );

  const he = emit((e) => {
    ie(e);
    Ke(e);

    if (l.current) {
      l.current.volume = e;
    }

    if (e > 0 && N) {
      U(false);
    } else if (e === 0 && !N) {
      U(true);
    }
  }, []);

  const z = !h && spoiler;
  return className("div", {
    ref: p,
    className: `${a.container} ${className} ${z ? a.hidden : ""} ${
      k ? a.revealing : ""
    }`,
    onClick: ve,
    onDblClick: me,
    children: [
      className("video", {
        ref: l,
        src: src,
        preload: "metadata",
        playsInline: true,
        muted: D,
        loop: true,
        className: a.video,
        width: width,
        height: height,
      }),
      duration != null &&
        z &&
        className("div", { className: a.duration, children: We(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: a.bottomOverlay,
          children: [
            className("button", {
              className: `${a.controlButton} ${a.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": j ? "Pause" : "Play",
              children: j ? className(je, {}) : className(Xe, {}),
            }),
            className("button", {
              className: `${a.controlButton} ${a.fullscreenButton}`,
              onClick: ge,
              type: "button",
              "aria-label": "Fullscreen",
              children: className(Qe, {}),
            }),
            ue
              ? className("button", {
                  className: a.muteButtonMobile,
                  onClick: Q,
                  type: "button",
                  "aria-label": D ? "Unmute" : "Mute",
                  children: className(V_1, { muted: D, volume: T }),
                })
              : className("div", {
                  className: `${a.volumeControl} ${ce ? a.active : ""}`,
                  children: [
                    className("div", {
                      className: a.volumeSlider,
                      children: className(ke, {
                        value: D ? 0 : T,
                        onChange: he,
                        onDragStart: () => {
                          x.current = true;
                          W(true);
                        },
                        onDragEnd: () => {
                          W(false);

                          setTimeout(() => {
                            x.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    className("button", {
                      className: a.muteButton,
                      onClick: Q,
                      type: "button",
                      "aria-label": D ? "Unmute" : "Mute",
                      children: className(V_1, { muted: D, volume: T }),
                    }),
                  ],
                }),
            className("div", {
              ref: C,
              className: a.progressContainer,
              onPointerDown: fe,
              onClick: (e) => e.stopPropagation(),
              children: className("div", {
                ref: m,
                className: a.progressTrack,
                children: className("div", {
                  className: `${a.progressFill} ${le ? a.scrubbing : ""}`,
                  style: { width: `${ae}%` },
                }),
              }),
            }),
          ],
        }),
      z && className("canvas", { ref: M, className: a.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
