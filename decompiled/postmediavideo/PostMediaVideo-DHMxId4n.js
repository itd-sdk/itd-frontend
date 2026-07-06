import { a, m, A, q, d as y_1, as, d, E, at } from "./index-CFv_0Hh6.js";

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
      n._sentryDebugIds[r] = "865299aa-f254-401b-af85-246d3378ee97";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-865299aa-f254-401b-af85-246d3378ee97";
    }
  } catch {}
})();
function K({ muted = false, volume = 1, size = 20 }) {
  const d = muted || volume === 0;
  const i = !d && volume < 0.7;
  return a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    "aria-hidden": "true",
    children: a("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [
        a("path", {
          d: "M9.2 4a.6.6 0 0 0-1-.5L5.3 6.3l-.8.4h-2a1 1 0 0 0-.8.8v5a1 1 0 0 0 .8.8h2l.8.4 2.9 2.8a.6.6 0 0 0 1-.4z",
        }),
        d
          ? a("path", { d: "M13.5 8l4 4M17.5 8l-4 4" })
          : a(m, {
              children: [
                a("path", { d: "M13.3 7.5a4 4 0 0 1 0 5" }),
                !i && a("path", { d: "M16.1 15.3a7.5 7.5 0 0 0 0-10.6" }),
              ],
            }),
      ],
    }),
  });
}
const Me = "HTuL";
const Pe = "vEJs";
const Le = "suEv";
const ke = "qqu6";
const I = { wrapper: Me, track: Pe, fill: Le, thumb: ke };
function Be({ value, onChange, onDragStart, onDragEnd }) {
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

  const M = 7;
  const o = 80;
  const u = M;
  const p = o - M;
  const P = u + value * (p - u);
  const C = `${P}px`;
  return a("div", {
    className: I.wrapper,
    onMouseDown: E,
    onClick: (m) => {
      m.stopPropagation();
      m.preventDefault();
    },
    children: a("div", {
      ref: i,
      className: I.track,
      children: [
        a("div", { className: I.fill, style: { height: C } }),
        a("div", { className: I.thumb, style: { bottom: `${P}px` } }),
      ],
    }),
  });
}
const Ce = 250;
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

    const P = () => {
      if (n_current.paused || v.current === null) {
        return;
      }
      const m = Date.now();
      i.current += m - v.current;
      v.current = m;
    };

    const C = () => {
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
    n_current.addEventListener("timeupdate", P);
    n_current.addEventListener("loadedmetadata", C);

    if (n_current.duration > 0 && Number.isFinite(n_current.duration)) {
      E.current = Math.round(n_current.duration * 1000 /* 1e3 */);
    }

    return () => {
      n_current.removeEventListener("playing", u);
      n_current.removeEventListener("pause", p);
      n_current.removeEventListener("waiting", p);
      n_current.removeEventListener("timeupdate", P);
      n_current.removeEventListener("loadedmetadata", C);
    };
  }, [videoRef, vs, attachmentId]);
  const M = q(() => {
    if (!(!vs || !attachmentId)) {
      if (v.current !== null) {
        i.current += Date.now() - v.current;
        v.current = null;
      }

      if (i.current >= Ce && E.current > 0) {
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

  y_1(() => () => M(), [M]);

  return { emit: M };
}
const De = "zMvB";
const Se = "fXfl";
const Ve = "oAOA";
const Ie = "mT0Z";
const Re = "mVrt";
const Te = "eia2";
const Fe = "PBlO";
const $e = "W54O";
const xe = "I54Y";
const qe = "HMG0";
const Ae = "CxdP";
const _e = "bd0s";
const Ge = "or3B";
const Oe = "GVQV";
const He = "NVQq";
const Ye = "KDfm";
const Ue = "HjLA";
const Xe = "JJ9b";
const ze = "IMwM";

const c = {
  container: De,
  hidden: Se,
  video: Ve,
  revealing: Ie,
  canvas: Re,
  duration: Te,
  bottomOverlay: Fe,
  volumeControl: $e,
  active: xe,
  volumeSlider: qe,
  muteButton: Ae,
  muteButtonMobile: _e,
  controlButton: Ge,
  playButton: Oe,
  fullscreenButton: He,
  progressContainer: Ye,
  progressTrack: Ue,
  progressFill: Xe,
  scrubbing: ze,
};

const Z = parseFloat(localStorage.getItem("video-volume") ?? "1");
let D = true;
let X = isNaN(Z) ? 1 : Z;
const z = new Set();
const B = new Map();
let ee = false;
let H = null;
function R() {
  const n = window.innerHeight / 2;
  let r = null;
  let l = Infinity;
  for (const [d] of B) {
    const i = d.getBoundingClientRect();

    if (Math.abs(i.top + i.height / 2 - n) < l) {
      l = Math.abs(i.top + i.height / 2 - n);
      r = d;
    }
  }
  for (const [d, i] of B) {
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
  if (H == null) {
    H = requestAnimationFrame(() => {
      H = null;
      R();
    });
  }
}
function Y() {
  const n = B.size > 1;

  if (n !== ee) {
    n
      ? window.addEventListener("scroll", te, { passive: true })
      : window.removeEventListener("scroll", te);

    ee = n;
  }
}
function U(n) {
  D = n;
  localStorage.setItem("video-muted", String(n));

  z.forEach((r) => r(n));
}
function Je(n) {
  X = n;
  localStorage.setItem("video-volume", String(n));
}
function We(n) {
  const r = Math.floor(n / 60);
  const l = n % 60;
  return `${r}:${l.toString().padStart(2, "0")}`;
}
function je() {
  return a("svg", {
    width: "13",
    height: "14",
    viewBox: "0 0 13 14",
    fill: "none",
    "aria-hidden": "true",
    children: a("path", {
      fill: "currentColor",
      d: "M12 5.3a2 2 0 0 1 0 3.4l-9 5c-1.3.8-3-.2-3-1.6V1.9C0 .5 1.7-.5 3 .3z",
    }),
  });
}
function Qe() {
  return a("svg", {
    width: "13",
    height: "14",
    viewBox: "0 0 13 14",
    fill: "currentColor",
    "aria-hidden": "true",
    children: [
      a("rect", { width: "4", height: "14", rx: "2" }),
      a("rect", { x: "9", width: "4", height: "14", rx: "2" }),
    ],
  });
}
function Ke() {
  return a("svg", {
    width: "19",
    height: "18",
    viewBox: "0 0 25 24",
    fill: "none",
    "aria-hidden": "true",
    children: a("path", {
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
  const P = A(null);
  const C = A(null);
  const m = A(null);
  const [g, L] = height(!spoiler);
  const [k, ne] = height(false);
  const [re, oe] = height(false);
  const [N, se] = height(D);
  const [T, ie] = height(X);
  const [ae, J] = height(false);
  const [ce, F] = height(0);
  const [le, W] = height(false);
  const [j, $] = height(false);
  const V = A(false);
  const x = A(false);
  const ue = postVs();
  const { emit } = Ne({
    videoRef: u,
    vs: postVs,
    attachmentId: attachmentId,
    source: source,
  });

  const { resetOpacity } = at(P, p, {
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
    z.add(e);

    return () => {
      z.delete(e);
    };
  }, []);

  y_1(() => {
    const p_current = p.current;
    if (!p_current) {
      return;
    }
    const s = new IntersectionObserver(
      (a) => {
        a.forEach((f) => {
          oe(f.isIntersecting);
          const u_current = u.current;

          if (u_current) {
            if (f.isIntersecting) {
              u_current.currentTime = 0;
              u_current.muted = D;
              u_current.volume = X;
              B.set(p_current, { video: u_current, userPaused: false });
              Y();
              R();
            } else {
              B.delete(p_current);
              Y();
              R();
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
      B.delete(p_current);
      Y();
      R();
      emit();
    };
  }, [g, emit]);

  y_1(() => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }

    const s = () => {
      if (V.current) {
        return;
      }
      const u_current_duration = u_current.duration;

      if (Number.isFinite(u_current_duration) && u_current_duration > 0) {
        F((u_current.currentTime / u_current_duration) * 100);
      }
    };

    const a = () => F(0);

    u_current.addEventListener("timeupdate", s);
    u_current.addEventListener("loadedmetadata", s);
    u_current.addEventListener("emptied", a);

    return () => {
      u_current.removeEventListener("timeupdate", s);
      u_current.removeEventListener("loadedmetadata", s);
      u_current.removeEventListener("emptied", a);
    };
  }, []);

  y_1(() => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }

    const s = () => $(true);

    const a = () => $(false);

    u_current.addEventListener("play", s);
    u_current.addEventListener("pause", a);
    $(!u_current.paused);

    return () => {
      u_current.removeEventListener("play", s);
      u_current.removeEventListener("pause", a);
    };
  }, []);

  const A = emit((e) => {
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
      V.current = true;
      W(true);
      const e_currentTarget = e.currentTarget;
      try {
        e_currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      A(e.clientX);

      const a = (h) => A(h.clientX);

      const f = () => {
        try {
          e_currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        document.removeEventListener("pointermove", a);
        document.removeEventListener("pointerup", f);
        document.removeEventListener("pointercancel", f);
        window.removeEventListener("blur", f);
        W(false);

        setTimeout(() => {
          V.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", a);
      document.addEventListener("pointerup", f);
      document.addEventListener("pointercancel", f);
      window.addEventListener("blur", f);
    },
    [A]
  );

  const fe = (e) => {
    e.stopPropagation();

    if (!(x.current || V.current)) {
      if (!g && !k && spoiler) {
        ne(true);
        resetOpacity();
        return;
      }
      _();
    }
  };

  const me = (e) => {
    e.stopPropagation();
    G();
  };

  const Q = emit((e) => {
    e.stopPropagation();
    e.preventDefault();
    U(!D);
  }, []);

  const _ = emit(() => {
    const u_current = u.current;
    const p_current = p.current;
    if (!u_current || !p_current) {
      return;
    }
    const a = B.get(p_current);

    if (u_current.paused) {
      a && (a.userPaused = false);
      u_current.play().catch(() => {});
    } else {
      a && (a.userPaused = true);
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
    const a = u_current;

    if (p_current?.requestFullscreen) {
      p_current.requestFullscreen().catch(() => {});
    } else if (a.webkitEnterFullscreen) {
      a.webkitEnterFullscreen();
    }
  }, []);

  const pe = emit(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      _();
    },
    [_]
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
    Je(e);

    if (u.current) {
      u.current.volume = e;
    }

    if (e > 0 && D) {
      U(false);
    } else if (e === 0 && !D) {
      U(true);
    }
  }, []);

  const O = !g && spoiler;
  return a("div", {
    ref: p,
    className: `${c.container} ${className} ${O ? c.hidden : ""} ${
      k ? c.revealing : ""
    }`,
    onClick: fe,
    onDblClick: me,
    children: [
      a("video", {
        ref: u,
        src: src,
        preload: "metadata",
        playsInline: true,
        muted: N,
        loop: true,
        className: c.video,
        width: width,
        height: height,
      }),
      duration != null &&
        O &&
        a("div", { className: c.duration, children: We(duration) }),
      (g || !spoiler) &&
        a("div", {
          className: c.bottomOverlay,
          children: [
            a("button", {
              className: `${c.controlButton} ${c.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": j ? "Pause" : "Play",
              children: j ? a(Qe, {}) : a(je, {}),
            }),
            a("button", {
              className: `${c.controlButton} ${c.fullscreenButton}`,
              onClick: he,
              type: "button",
              "aria-label": "Fullscreen",
              children: a(Ke, {}),
            }),
            ue
              ? a("button", {
                  className: c.muteButtonMobile,
                  onClick: Q,
                  type: "button",
                  "aria-label": N ? "Unmute" : "Mute",
                  children: a(K, { muted: N, volume: T }),
                })
              : a("div", {
                  className: `${c.volumeControl} ${ae ? c.active : ""}`,
                  children: [
                    a("div", {
                      className: c.volumeSlider,
                      children: a(Be, {
                        value: N ? 0 : T,
                        onChange: ge,
                        onDragStart: () => {
                          x.current = true;
                          J(true);
                        },
                        onDragEnd: () => {
                          J(false);

                          setTimeout(() => {
                            x.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    a("button", {
                      className: c.muteButton,
                      onClick: Q,
                      type: "button",
                      "aria-label": N ? "Unmute" : "Mute",
                      children: a(K, { muted: N, volume: T }),
                    }),
                  ],
                }),
            a("div", {
              ref: C,
              className: c.progressContainer,
              onPointerDown: ve,
              onClick: (e) => e.stopPropagation(),
              children: a("div", {
                ref: m,
                className: c.progressTrack,
                children: a("div", {
                  className: `${c.progressFill} ${le ? c.scrubbing : ""}`,
                  style: { width: `${ce}%` },
                }),
              }),
            }),
          ],
        }),
      O && a("canvas", { ref: P, className: c.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
