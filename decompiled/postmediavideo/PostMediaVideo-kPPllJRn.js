import { A, q, u, A as A_1, ax, d, E, ay } from "./index-DDTOXJaD.js";
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
    const s = new n.Error().stack;

    if (s) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[s] = "8da7e010-eb01-4608-8297-494aa9d95ef9";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-8da7e010-eb01-4608-8297-494aa9d95ef9";
    }
  } catch {}
})();
const Ee = "nuAL";
const Pe = "T3Ik";
const Me = "MG9I";
const Le = "CZFa";
const R = { wrapper: Ee, track: Pe, fill: Me, thumb: Le };
function ke({ value, onChange, onDragStart, onDragEnd }) {
  const a = A(null);

  const u = q(
    (f) => {
      const a_current = a.current;
      if (!a_current) {
        return;
      }
      const L = a_current.getBoundingClientRect();
      const k = 1 - (f - L.top) / L.height;
      onChange(Math.max(0, Math.min(1, k)));
    },
    [onChange]
  );

  const E = q(
    (f) => {
      f.stopPropagation();
      f.preventDefault();
      onDragStart?.();
      u(f.clientY);

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
  const D = `${M}px`;
  return u("div", {
    className: R.wrapper,
    onMouseDown: E,
    onClick: (f) => {
      f.stopPropagation();
      f.preventDefault();
    },
    children: u("div", {
      ref: a,
      className: R.track,
      children: [
        u("div", { className: R.fill, style: { height: D } }),
        u("div", { className: R.thumb, style: { bottom: `${M}px` } }),
      ],
    }),
  });
}
const Ce = 250;
function De({ videoRef, vs, attachmentId, source }) {
  const a = A(0);
  const u = A(null);
  const E = A(0);
  A_1(() => {
    const n_current = videoRef.current;
    if (!n_current || !vs || !attachmentId) {
      return;
    }

    const l = () => {
      u.current = Date.now();
    };

    const p = () => {
      if (u.current !== null) {
        a.current += Date.now() - u.current;
        u.current = null;
      }
    };

    const M = () => {
      if (n_current.paused || u.current === null) {
        return;
      }
      const f = Date.now();
      a.current += f - u.current;
      u.current = f;
    };

    const D = () => {
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
    n_current.addEventListener("loadedmetadata", D);

    if (n_current.duration > 0 && Number.isFinite(n_current.duration)) {
      E.current = Math.round(n_current.duration * 1000 /* 1e3 */);
    }

    return () => {
      n_current.removeEventListener("playing", l);
      n_current.removeEventListener("pause", p);
      n_current.removeEventListener("waiting", p);
      n_current.removeEventListener("timeupdate", M);
      n_current.removeEventListener("loadedmetadata", D);
    };
  }, [videoRef, vs, attachmentId]);
  const P = q(() => {
    if (!(!vs || !attachmentId)) {
      if (u.current !== null) {
        a.current += Date.now() - u.current;
        u.current = null;
      }

      if (a.current >= Ce && E.current > 0) {
        const r = source === "post_page" || source === "link";
        ax.trackVideoProgress(
          vs,
          attachmentId,
          a.current,
          E.current,
          r ? source : undefined
        );
      }

      a.current = 0;
    }
  }, [vs, attachmentId, source]);

  A_1(() => () => P(), [P]);

  return { emit: P };
}
const Ne = "frnF";
const Be = "Rktq";
const Ie = "ZDr1";
const Se = "Bj7z";
const Re = "IfmX";
const Te = "kDhp";
const Ve = "AWxe";
const Fe = "YQfI";
const $e = "ZvJ0";
const xe = "OtTn";
const _e = "Lbnd";
const qe = "HRhH";
const Ae = "N3Dm";
const Ge = "HG4V";
const He = "uLnK";
const Oe = "aV74";
const Ye = "MlIz";
const ze = "MsND";
const Ue = "CIW8";

const c = {
  container: Ne,
  hidden: Be,
  video: Ie,
  revealing: Se,
  canvas: Re,
  duration: Te,
  bottomOverlay: Ve,
  volumeControl: Fe,
  active: $e,
  volumeSlider: xe,
  muteButton: _e,
  muteButtonMobile: qe,
  controlButton: Ae,
  playButton: Ge,
  fullscreenButton: He,
  progressContainer: Oe,
  progressTrack: Ye,
  progressFill: ze,
  scrubbing: Ue,
};

const Q = parseFloat(localStorage.getItem("video-volume") ?? "1");
let B = true;
let U = isNaN(Q) ? 1 : Q;
const X = new Set();
const C = new Map();
let ee = false;
let O = null;
function T() {
  const n = window.innerHeight / 2;
  let s = null;
  let v = Infinity;
  for (const [m] of C) {
    const a = m.getBoundingClientRect();

    if (Math.abs(a.top + a.height / 2 - n) < v) {
      v = Math.abs(a.top + a.height / 2 - n);
      s = m;
    }
  }
  for (const [m, a] of C) {
    if (m === s && !a.userPaused) {
      if (a.video.paused) {
        a.video.play().catch(() => {});
      }
    } else if (!a.video.paused) {
      a.video.pause();
    }
  }
}
function te() {
  if (O == null) {
    O = requestAnimationFrame(() => {
      O = null;
      T();
    });
  }
}
function Y() {
  const n = C.size > 1;

  if (n !== ee) {
    n
      ? window.addEventListener("scroll", te, { passive: true })
      : window.removeEventListener("scroll", te);

    ee = n;
  }
}
function z(n) {
  B = n;
  localStorage.setItem("video-muted", String(n));

  X.forEach((s) => s(n));
}
function Xe(n) {
  U = n;
  localStorage.setItem("video-volume", String(n));
}
function We(n) {
  const s = Math.floor(n / 60);
  const v = n % 60;
  return `${s}:${v.toString().padStart(2, "0")}`;
}
function Ze() {
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
function Je() {
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
  const l = A(null);
  const p = A(null);
  const M = A(null);
  const D = A(null);
  const f = A(null);
  const [h, L] = d(!spoiler);
  const [k, ne] = d(false);
  const [re, oe] = d(false);
  const [N, se] = d(B);
  const [V, ie] = d(U);
  const [ae, W] = d(false);
  const [ce, F] = d(0);
  const [le, Z] = d(false);
  const [j, $] = d(false);
  const S = A(false);
  const x = A(false);
  const ue = postVs();
  const { emit } = De({
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

  A_1(() => {
    const e = (o) => {
      se(o);

      if (l.current) {
        l.current.muted = o;
      }
    };
    X.add(e);

    return () => {
      X.delete(e);
    };
  }, []);

  A_1(() => {
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
              l_current.muted = B;
              l_current.volume = U;
              C.set(p_current, { video: l_current, userPaused: false });
              Y();
              T();
            } else {
              C.delete(p_current);
              Y();
              T();
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
      C.delete(p_current);
      Y();
      T();
      emit();
    };
  }, [h, emit]);

  A_1(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }

    const o = () => {
      if (S.current) {
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

  A_1(() => {
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

  const q = q((e) => {
    const f_current = f.current;
    const l_current = l.current;
    if (!f_current || !l_current) {
      return;
    }
    const d = f_current.getBoundingClientRect();
    if (d.width <= 0) {
      return;
    }
    const g = Math.min(1, Math.max(0, (e - d.left) / d.width));

    if (Number.isFinite(l_current.duration) && l_current.duration > 0) {
      l_current.currentTime = l_current.duration * g;
      F(g * 100);
    }
  }, []);

  const ve = q(
    (e) => {
      e.stopPropagation();
      S.current = true;
      Z(true);
      const e_currentTarget = e.currentTarget;
      try {
        e_currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      q(e.clientX);

      const i = (g) => q(g.clientX);

      const d = () => {
        try {
          e_currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        document.removeEventListener("pointermove", i);
        document.removeEventListener("pointerup", d);
        document.removeEventListener("pointercancel", d);
        window.removeEventListener("blur", d);
        Z(false);

        setTimeout(() => {
          S.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", i);
      document.addEventListener("pointerup", d);
      document.addEventListener("pointercancel", d);
      window.addEventListener("blur", d);
    },
    [q]
  );

  const me = (e) => {
    e.stopPropagation();

    if (!(x.current || S.current)) {
      if (!h && !k && spoiler) {
        ne(true);
        resetOpacity();
        return;
      }
      A();
    }
  };

  const fe = (e) => {
    e.stopPropagation();
    G();
  };

  const J = q((e) => {
    e.stopPropagation();
    e.preventDefault();
    z(!B);
  }, []);

  const A = q(() => {
    const l_current = l.current;
    const p_current = p.current;
    if (!l_current || !p_current) {
      return;
    }
    const i = C.get(p_current);

    if (l_current.paused) {
      i && (i.userPaused = false);
      l_current.play().catch(() => {});
    } else {
      i && (i.userPaused = true);
      l_current.pause();
    }
  }, []);

  const G = q(() => {
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

  const pe = q(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      A();
    },
    [A]
  );

  const ge = q(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      G();
    },
    [G]
  );

  const he = q((e) => {
    ie(e);
    Xe(e);

    if (l.current) {
      l.current.volume = e;
    }

    if (e > 0 && B) {
      z(false);
    } else if (e === 0 && !B) {
      z(true);
    }
  }, []);

  const H = !h && spoiler;
  return className("div", {
    ref: p,
    className: `${c.container} ${className} ${H ? c.hidden : ""} ${
      k ? c.revealing : ""
    }`,
    onClick: me,
    onDblClick: fe,
    children: [
      className("video", {
        ref: l,
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
        H &&
        className("div", { className: c.duration, children: We(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: c.bottomOverlay,
          children: [
            className("button", {
              className: `${c.controlButton} ${c.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": j ? "Pause" : "Play",
              children: j ? className(je, {}) : className(Ze, {}),
            }),
            className("button", {
              className: `${c.controlButton} ${c.fullscreenButton}`,
              onClick: ge,
              type: "button",
              "aria-label": "Fullscreen",
              children: className(Je, {}),
            }),
            ue
              ? className("button", {
                  className: c.muteButtonMobile,
                  onClick: J,
                  type: "button",
                  "aria-label": N ? "Unmute" : "Mute",
                  children: className(V, { muted: N, volume: V }),
                })
              : className("div", {
                  className: `${c.volumeControl} ${ae ? c.active : ""}`,
                  children: [
                    className("div", {
                      className: c.volumeSlider,
                      children: className(ke, {
                        value: N ? 0 : V,
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
                      className: c.muteButton,
                      onClick: J,
                      type: "button",
                      "aria-label": N ? "Unmute" : "Mute",
                      children: className(V, { muted: N, volume: V }),
                    }),
                  ],
                }),
            className("div", {
              ref: D,
              className: c.progressContainer,
              onPointerDown: ve,
              onClick: (e) => e.stopPropagation(),
              children: className("div", {
                ref: f,
                className: c.progressTrack,
                children: className("div", {
                  className: `${c.progressFill} ${le ? c.scrubbing : ""}`,
                  style: { width: `${ce}%` },
                }),
              }),
            }),
          ],
        }),
      H && className("canvas", { ref: M, className: c.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
