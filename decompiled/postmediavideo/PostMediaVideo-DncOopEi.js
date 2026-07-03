import { a as a_1, m, A, q, d as y_1, as, d, E, at } from "./index-DuQT229k.js";

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
    const r = new n.Error().stack;

    if (r) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[r] = "ee990c48-ca52-4ec4-89bd-9f5a7957010e";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-ee990c48-ca52-4ec4-89bd-9f5a7957010e";
    }
  } catch {}
})();
function j({ muted = false, volume = 1, size = 20 }) {
  const d = muted || volume === 0;
  const i = !d && volume < 0.7;
  return a_1("svg", {
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    "aria-hidden": "true",
    children: a_1("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [
        a_1("path", {
          d: "M9.2 4a.6.6 0 0 0-1-.5L5.3 6.3l-.8.4h-2a1 1 0 0 0-.8.8v5a1 1 0 0 0 .8.8h2l.8.4 2.9 2.8a.6.6 0 0 0 1-.4z",
        }),
        d
          ? a_1("path", { d: "M13.5 8l4 4M17.5 8l-4 4" })
          : a_1(m, {
              children: [
                a_1("path", { d: "M13.3 7.5a4 4 0 0 1 0 5" }),
                !i && a_1("path", { d: "M16.1 15.3a7.5 7.5 0 0 0 0-10.6" }),
              ],
            }),
      ],
    }),
  });
}
const Pe = "Y4ap";
const Me = "Zz9f";
const Le = "xTT6";
const ke = "V7NU";
const T = { wrapper: Pe, track: Me, fill: Le, thumb: ke };
function Ce({ value, onChange, onDragStart, onDragEnd }) {
  const i = A(null);

  const v = q(
    (m) => {
      const i_current = i.current;
      if (!i_current) {
        return;
      }
      const L = i_current.getBoundingClientRect();
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
      v(m.clientY);

      const g = (k) => v(k.clientY);

      const L = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", g);
        document.removeEventListener("mouseup", L);
      };

      document.addEventListener("mousemove", g);
      document.addEventListener("mouseup", L);
    },
    [v, onDragStart, onDragEnd]
  );

  const P = 7;
  const o = 80;
  const u = P;
  const p = o - P;
  const M = u + value * (p - u);
  const D = `${M}px`;
  return a_1("div", {
    className: T.wrapper,
    onMouseDown: E,
    onClick: (m) => {
      m.stopPropagation();
      m.preventDefault();
    },
    children: a_1("div", {
      ref: i,
      className: T.track,
      children: [
        a_1("div", { className: T.fill, style: { height: D } }),
        a_1("div", { className: T.thumb, style: { bottom: `${M}px` } }),
      ],
    }),
  });
}
const De = 250;
function Ne({ videoRef, vs, attachmentId, source }) {
  const i = A(0);
  const v = A(null);
  const E = A(0);
  y_1(() => {
    const n_current = videoRef.current;
    if (!n_current || !vs || !attachmentId) {
      return;
    }

    const u = () => {
      v.current = Date.now();
    };

    const p = () => {
      if (v.current !== null) {
        i.current += Date.now() - v.current;
        v.current = null;
      }
    };

    const M = () => {
      if (n_current.paused || v.current === null) {
        return;
      }
      const m = Date.now();
      i.current += m - v.current;
      v.current = m;
    };

    const D = () => {
      if (n_current.duration > 0 && Number.isFinite(n_current.duration)) {
        E.current = Math.round(n_current.duration * 1000 /* 1e3 */);
      }
    };

    if (!n_current.paused && n_current.readyState >= 3) {
      v.current = Date.now();
    }

    n_current.addEventListener("playing", u);
    n_current.addEventListener("pause", p);
    n_current.addEventListener("waiting", p);
    n_current.addEventListener("timeupdate", M);
    n_current.addEventListener("loadedmetadata", D);

    if (n_current.duration > 0 && Number.isFinite(n_current.duration)) {
      E.current = Math.round(n_current.duration * 1000 /* 1e3 */);
    }

    return () => {
      n_current.removeEventListener("playing", u);
      n_current.removeEventListener("pause", p);
      n_current.removeEventListener("waiting", p);
      n_current.removeEventListener("timeupdate", M);
      n_current.removeEventListener("loadedmetadata", D);
    };
  }, [videoRef, vs, attachmentId]);
  const P = q(() => {
    if (!(!vs || !attachmentId)) {
      if (v.current !== null) {
        i.current += Date.now() - v.current;
        v.current = null;
      }

      if (i.current >= De && E.current > 0) {
        const o = source === "post_page" || source === "link";
        as.trackVideoProgress(
          vs,
          attachmentId,
          i.current,
          E.current,
          o ? source : undefined
        );
      }

      i.current = 0;
    }
  }, [vs, attachmentId, source]);

  y_1(() => () => P(), [P]);

  return { emit: P };
}
const Be = "t1wL";
const Se = "m6C8";
const Re = "z8ca";
const Te = "gJfU";
const Ie = "n3W5";
const Ve = "kHI7";
const Fe = "KtCW";
const $e = "teml";
const xe = "c0DV";
const qe = "kO94";
const _e = "cDZH";
const Ae = "xqrD";
const Ge = "tPqv";
const He = "w8Jw";
const Oe = "FR3m";
const Ue = "Yvqb";
const Ye = "C3DM";
const ze = "HPQN";
const We = "wuKC";

const a = {
  container: Be,
  hidden: Se,
  video: Re,
  revealing: Te,
  canvas: Ie,
  duration: Ve,
  bottomOverlay: Fe,
  volumeControl: $e,
  active: xe,
  volumeSlider: qe,
  muteButton: _e,
  muteButtonMobile: Ae,
  controlButton: Ge,
  playButton: He,
  fullscreenButton: Oe,
  progressContainer: Ue,
  progressTrack: Ye,
  progressFill: ze,
  scrubbing: We,
};

const Q = parseFloat(localStorage.getItem("video-volume") ?? "1");
let B = true;
let z = isNaN(Q) ? 1 : Q;
const W = new Set();
const C = new Map();
let ee = false;
let O = null;
function I() {
  const n = window.innerHeight / 2;
  let r = null;
  let l = Infinity;
  for (const [d] of C) {
    const i = d.getBoundingClientRect();

    if (Math.abs(i.top + i.height / 2 - n) < l) {
      l = Math.abs(i.top + i.height / 2 - n);
      r = d;
    }
  }
  for (const [d, i] of C) {
    if (d === r && !i.userPaused) {
      if (i.video.paused) {
        i.video.play().catch(() => {});
      }
    } else if (!i.video.paused) {
      i.video.pause();
    }
  }
}
function te() {
  if (O == null) {
    O = requestAnimationFrame(() => {
      O = null;
      I();
    });
  }
}
function U() {
  const n = C.size > 1;

  if (n !== ee) {
    n
      ? window.addEventListener("scroll", te, { passive: true })
      : window.removeEventListener("scroll", te);

    ee = n;
  }
}
function Y(n) {
  B = n;
  localStorage.setItem("video-muted", String(n));

  W.forEach((r) => r(n));
}
function Xe(n) {
  z = n;
  localStorage.setItem("video-volume", String(n));
}
function Je(n) {
  const r = Math.floor(n / 60);
  const l = n % 60;
  return `${r}:${l.toString().padStart(2, "0")}`;
}
function Ke() {
  return a_1("svg", {
    width: "13",
    height: "14",
    viewBox: "0 0 13 14",
    fill: "none",
    "aria-hidden": "true",
    children: a_1("path", {
      fill: "currentColor",
      d: "M12 5.3a2 2 0 0 1 0 3.4l-9 5c-1.3.8-3-.2-3-1.6V1.9C0 .5 1.7-.5 3 .3z",
    }),
  });
}
function Ze() {
  return a_1("svg", {
    width: "13",
    height: "14",
    viewBox: "0 0 13 14",
    fill: "currentColor",
    "aria-hidden": "true",
    children: [
      a_1("rect", { width: "4", height: "14", rx: "2" }),
      a_1("rect", { x: "9", width: "4", height: "14", rx: "2" }),
    ],
  });
}
function je() {
  return a_1("svg", {
    width: "19",
    height: "18",
    viewBox: "0 0 25 24",
    fill: "none",
    "aria-hidden": "true",
    children: a_1("path", {
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
  const u = A(null);
  const p = A(null);
  const M = A(null);
  const D = A(null);
  const m = A(null);
  const [g, L] = height(!spoiler);
  const [k, ne] = height(false);
  const [re, oe] = height(false);
  const [N, se] = height(B);
  const [V, ie] = height(z);
  const [ce, X] = height(false);
  const [ae, F] = height(0);
  const [le, J] = height(false);
  const [K, $] = height(false);
  const R = A(false);
  const x = A(false);
  const ue = postVs();
  const { emit } = Ne({
    videoRef: u,
    vs: postVs,
    attachmentId: attachmentId,
    source: source,
  });

  const { resetOpacity } = at(M, p, {
    isVisible: re && !g && spoiler,
    isRevealing: k,
    onRevealComplete: () => L(true),
  });

  y_1(() => {
    const e = (s) => {
      se(s);

      if (u.current) {
        u.current.muted = s;
      }
    };
    W.add(e);

    return () => {
      W.delete(e);
    };
  }, []);

  y_1(() => {
    const p_current = p.current;
    if (!p_current) {
      return;
    }
    const s = new IntersectionObserver(
      (c) => {
        c.forEach((f) => {
          oe(f.isIntersecting);
          const u_current = u.current;

          if (u_current) {
            if (f.isIntersecting) {
              u_current.currentTime = 0;
              u_current.muted = B;
              u_current.volume = z;
              C.set(p_current, { video: u_current, userPaused: false });
              U();
              I();
            } else {
              C.delete(p_current);
              U();
              I();
              u_current.pause();
              emit();
              u_current.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    s.observe(p_current);

    return () => {
      s.disconnect();
      C.delete(p_current);
      U();
      I();
      emit();
    };
  }, [g, emit]);

  y_1(() => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }

    const s = () => {
      if (R.current) {
        return;
      }
      const u_current_duration = u_current.duration;

      if (Number.isFinite(u_current_duration) && u_current_duration > 0) {
        F((u_current.currentTime / u_current_duration) * 100);
      }
    };

    const c = () => F(0);

    u_current.addEventListener("timeupdate", s);
    u_current.addEventListener("loadedmetadata", s);
    u_current.addEventListener("emptied", c);

    return () => {
      u_current.removeEventListener("timeupdate", s);
      u_current.removeEventListener("loadedmetadata", s);
      u_current.removeEventListener("emptied", c);
    };
  }, []);

  y_1(() => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }

    const s = () => $(true);

    const c = () => $(false);

    u_current.addEventListener("play", s);
    u_current.addEventListener("pause", c);
    $(!u_current.paused);

    return () => {
      u_current.removeEventListener("play", s);
      u_current.removeEventListener("pause", c);
    };
  }, []);

  const _ = emit((e) => {
    const m_current = m.current;
    const u_current = u.current;
    if (!m_current || !u_current) {
      return;
    }
    const f = m_current.getBoundingClientRect();
    if (f.width <= 0) {
      return;
    }
    const h = Math.min(1, Math.max(0, (e - f.left) / f.width));

    if (Number.isFinite(u_current.duration) && u_current.duration > 0) {
      u_current.currentTime = u_current.duration * h;
      F(h * 100);
    }
  }, []);

  const ve = emit(
    (e) => {
      e.stopPropagation();
      R.current = true;
      J(true);
      const e_currentTarget = e.currentTarget;
      try {
        e_currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      _(e.clientX);

      const c = (h) => _(h.clientX);

      const f = () => {
        try {
          e_currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        document.removeEventListener("pointermove", c);
        document.removeEventListener("pointerup", f);
        document.removeEventListener("pointercancel", f);
        window.removeEventListener("blur", f);
        J(false);

        setTimeout(() => {
          R.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", c);
      document.addEventListener("pointerup", f);
      document.addEventListener("pointercancel", f);
      window.addEventListener("blur", f);
    },
    [_]
  );

  const fe = (e) => {
    e.stopPropagation();

    if (!(x.current || R.current)) {
      if (!g && !k && spoiler) {
        ne(true);
        resetOpacity();
        return;
      }
      A();
    }
  };

  const me = (e) => {
    e.stopPropagation();
    G();
  };

  const Z = emit((e) => {
    e.stopPropagation();
    e.preventDefault();
    Y(!B);
  }, []);

  const A = emit(() => {
    const u_current = u.current;
    const p_current = p.current;
    if (!u_current || !p_current) {
      return;
    }
    const c = C.get(p_current);

    if (u_current.paused) {
      c && (c.userPaused = false);
      u_current.play().catch(() => {});
    } else {
      c && (c.userPaused = true);
      u_current.pause();
    }
  }, []);

  const G = emit(() => {
    const u_current = u.current;
    const p_current = p.current;
    if (!u_current) {
      return;
    }
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }
    const c = u_current;

    if (p_current?.requestFullscreen) {
      p_current.requestFullscreen().catch(() => {});
    } else if (c.webkitEnterFullscreen) {
      c.webkitEnterFullscreen();
    }
  }, []);

  const pe = emit(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      A();
    },
    [A]
  );

  const he = emit(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      G();
    },
    [G]
  );

  const ge = emit((e) => {
    ie(e);
    Xe(e);

    if (u.current) {
      u.current.volume = e;
    }

    if (e > 0 && B) {
      Y(false);
    } else if (e === 0 && !B) {
      Y(true);
    }
  }, []);

  const H = !g && spoiler;
  return a_1("div", {
    ref: p,
    className: `${a.container} ${className} ${H ? a.hidden : ""} ${
      k ? a.revealing : ""
    }`,
    onClick: fe,
    onDblClick: me,
    children: [
      a_1("video", {
        ref: u,
        src: src,
        preload: "metadata",
        playsInline: true,
        muted: N,
        loop: true,
        className: a.video,
        width: width,
        height: height,
      }),
      duration != null &&
        H &&
        a_1("div", { className: a.duration, children: Je(duration) }),
      (g || !spoiler) &&
        a_1("div", {
          className: a.bottomOverlay,
          children: [
            a_1("button", {
              className: `${a.controlButton} ${a.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": K ? "Pause" : "Play",
              children: K ? a_1(Ze, {}) : a_1(Ke, {}),
            }),
            a_1("button", {
              className: `${a.controlButton} ${a.fullscreenButton}`,
              onClick: he,
              type: "button",
              "aria-label": "Fullscreen",
              children: a_1(je, {}),
            }),
            ue
              ? a_1("button", {
                  className: a.muteButtonMobile,
                  onClick: Z,
                  type: "button",
                  "aria-label": N ? "Unmute" : "Mute",
                  children: a_1(j, { muted: N, volume: V }),
                })
              : a_1("div", {
                  className: `${a.volumeControl} ${ce ? a.active : ""}`,
                  children: [
                    a_1("div", {
                      className: a.volumeSlider,
                      children: a_1(Ce, {
                        value: N ? 0 : V,
                        onChange: ge,
                        onDragStart: () => {
                          x.current = true;
                          X(true);
                        },
                        onDragEnd: () => {
                          X(false);

                          setTimeout(() => {
                            x.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    a_1("button", {
                      className: a.muteButton,
                      onClick: Z,
                      type: "button",
                      "aria-label": N ? "Unmute" : "Mute",
                      children: a_1(j, { muted: N, volume: V }),
                    }),
                  ],
                }),
            a_1("div", {
              ref: D,
              className: a.progressContainer,
              onPointerDown: ve,
              onClick: (e) => e.stopPropagation(),
              children: a_1("div", {
                ref: m,
                className: a.progressTrack,
                children: a_1("div", {
                  className: `${a.progressFill} ${le ? a.scrubbing : ""}`,
                  style: { width: `${ae}%` },
                }),
              }),
            }),
          ],
        }),
      H && a_1("canvas", { ref: M, className: a.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
