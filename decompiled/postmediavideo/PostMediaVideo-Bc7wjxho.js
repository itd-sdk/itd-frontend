import { a, m, A, q, d as y_1, as, d, E, at } from "./index-BewGW5_v.js";

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
      n._sentryDebugIds[r] = "d337cf2a-56ee-4e3f-aa35-76c25b3de1dd";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-d337cf2a-56ee-4e3f-aa35-76c25b3de1dd";
    }
  } catch {}
})();
function Q({ muted = false, volume = 1, size = 20 }) {
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
const Pe = "b7IM";
const Me = "wDUG";
const Le = "TFI5";
const ke = "d8Fy";
const F = { wrapper: Pe, track: Me, fill: Le, thumb: ke };
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

  const P = 7;
  const o = 80;
  const u = P;
  const p = o - P;
  const M = u + value * (p - u);
  const C = `${M}px`;
  return a("div", {
    className: F.wrapper,
    onMouseDown: E,
    onClick: (m) => {
      m.stopPropagation();
      m.preventDefault();
    },
    children: a("div", {
      ref: i,
      className: F.track,
      children: [
        a("div", { className: F.fill, style: { height: C } }),
        a("div", { className: F.thumb, style: { bottom: `${M}px` } }),
      ],
    }),
  });
}
const Ce = 250;
function De({ videoRef, vs, attachmentId, source }) {
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
    n_current.addEventListener("timeupdate", M);
    n_current.addEventListener("loadedmetadata", C);

    if (n_current.duration > 0 && Number.isFinite(n_current.duration)) {
      E.current = Math.round(n_current.duration * 1000 /* 1e3 */);
    }

    return () => {
      n_current.removeEventListener("playing", u);
      n_current.removeEventListener("pause", p);
      n_current.removeEventListener("waiting", p);
      n_current.removeEventListener("timeupdate", M);
      n_current.removeEventListener("loadedmetadata", C);
    };
  }, [videoRef, vs, attachmentId]);
  const P = q(() => {
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

  y_1(() => () => P(), [P]);

  return { emit: P };
}
const Ne = "XakD";
const Se = "e6Ya";
const Re = "ElNA";
const Fe = "PAn9";
const Ie = "BFm0";
const Ve = "i8H5";
const Te = "NBBr";
const $e = "J0U7";
const xe = "KYvK";
const _e = "anzX";
const qe = "V1WD";
const Ae = "wmBx";
const Ge = "ggL6";
const He = "RiCg";
const Ue = "PfnK";
const Ye = "psbo";
const Oe = "lqPv";
const Xe = "RcKH";
const Ke = "VVHQ";

const c = {
  container: Ne,
  hidden: Se,
  video: Re,
  revealing: Fe,
  canvas: Ie,
  duration: Ve,
  bottomOverlay: Te,
  volumeControl: $e,
  active: xe,
  volumeSlider: _e,
  muteButton: qe,
  muteButtonMobile: Ae,
  controlButton: Ge,
  playButton: He,
  fullscreenButton: Ue,
  progressContainer: Ye,
  progressTrack: Oe,
  progressFill: Xe,
  scrubbing: Ke,
};

const Z = parseFloat(localStorage.getItem("video-volume") ?? "1");
let N = true;
let X = isNaN(Z) ? 1 : Z;
const K = new Set();
const B = new Map();
let ee = false;
let U = null;
function I() {
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
  if (U == null) {
    U = requestAnimationFrame(() => {
      U = null;
      I();
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
function O(n) {
  N = n;
  localStorage.setItem("video-muted", String(n));

  K.forEach((r) => r(n));
}
function ze(n) {
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
function Je() {
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
function Qe() {
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
  const M = A(null);
  const C = A(null);
  const m = A(null);
  const [g, L] = height(!spoiler);
  const [k, ne] = height(false);
  const [re, oe] = height(false);
  const [D, se] = height(N);
  const [V, ie] = height(X);
  const [ae, z] = height(false);
  const [ce, T] = height(0);
  const [le, W] = height(false);
  const [j, $] = height(false);
  const R = A(false);
  const x = A(false);
  const ue = postVs();
  const { emit } = De({
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
    K.add(e);

    return () => {
      K.delete(e);
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
              u_current.muted = N;
              u_current.volume = X;
              B.set(p_current, { video: u_current, userPaused: false });
              Y();
              I();
            } else {
              B.delete(p_current);
              Y();
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
      B.delete(p_current);
      Y();
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
        T((u_current.currentTime / u_current_duration) * 100);
      }
    };

    const a = () => T(0);

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

  const q = q((e) => {
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
      T(h * 100);
    }
  }, []);

  const ve = q(
    (e) => {
      e.stopPropagation();
      R.current = true;
      W(true);
      const e_currentTarget = e.currentTarget;
      try {
        e_currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      q(e.clientX);

      const a = (h) => q(h.clientX);

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
          R.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", a);
      document.addEventListener("pointerup", f);
      document.addEventListener("pointercancel", f);
      window.addEventListener("blur", f);
    },
    [q]
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

  const J = q((e) => {
    e.stopPropagation();
    e.preventDefault();
    O(!N);
  }, []);

  const A = q(() => {
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

  const G = q(() => {
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

  const pe = q(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      A();
    },
    [A]
  );

  const he = q(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      G();
    },
    [G]
  );

  const ge = q((e) => {
    ie(e);
    ze(e);

    if (u.current) {
      u.current.volume = e;
    }

    if (e > 0 && N) {
      O(false);
    } else if (e === 0 && !N) {
      O(true);
    }
  }, []);

  const H = !g && spoiler;
  return a("div", {
    ref: p,
    className: `${c.container} ${className} ${H ? c.hidden : ""} ${
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
        muted: D,
        loop: true,
        className: c.video,
        width: width,
        height: height,
      }),
      duration != null &&
        H &&
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
              children: j ? a(Je, {}) : a(je, {}),
            }),
            a("button", {
              className: `${c.controlButton} ${c.fullscreenButton}`,
              onClick: he,
              type: "button",
              "aria-label": "Fullscreen",
              children: a(Qe, {}),
            }),
            ue
              ? a("button", {
                  className: c.muteButtonMobile,
                  onClick: J,
                  type: "button",
                  "aria-label": D ? "Unmute" : "Mute",
                  children: a(Q, { muted: D, volume: V }),
                })
              : a("div", {
                  className: `${c.volumeControl} ${ae ? c.active : ""}`,
                  children: [
                    a("div", {
                      className: c.volumeSlider,
                      children: a(Be, {
                        value: D ? 0 : V,
                        onChange: ge,
                        onDragStart: () => {
                          x.current = true;
                          z(true);
                        },
                        onDragEnd: () => {
                          z(false);

                          setTimeout(() => {
                            x.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    a("button", {
                      className: c.muteButton,
                      onClick: J,
                      type: "button",
                      "aria-label": D ? "Unmute" : "Mute",
                      children: a(Q, { muted: D, volume: V }),
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
      H && a("canvas", { ref: M, className: c.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
