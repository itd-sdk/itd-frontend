import { A, q, u, A as A_1, ax, d, E, ay } from "./index-DBLtLuBZ.js";
import { V } from "./VolumeGlyph-Cwzt3bkb.js";
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
      n._sentryDebugIds[s] = "10132d55-534d-4be9-8c47-4fc98c532c94";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-10132d55-534d-4be9-8c47-4fc98c532c94";
    }
  } catch {}
})();
const Pe = "extz";
const Ee = "rUK6";
const Me = "ToOf";
const Le = "Rn49";
const F = { wrapper: Pe, track: Ee, fill: Me, thumb: Le };
function ke({ value, onChange, onDragStart, onDragEnd }) {
  const c = A(null);

  const u = q(
    (f) => {
      const c_current = c.current;
      if (!c_current) {
        return;
      }
      const L = c_current.getBoundingClientRect();
      const k = 1 - (f - L.top) / L.height;
      onChange(Math.max(0, Math.min(1, k)));
    },
    [onChange]
  );

  const P = q(
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

  const E = 7;
  const r = 80;
  const l = E;
  const p = r - E;
  const M = l + value * (p - l);
  const D = `${M}px`;
  return u("div", {
    className: F.wrapper,
    onMouseDown: P,
    onClick: (f) => {
      f.stopPropagation();
      f.preventDefault();
    },
    children: u("div", {
      ref: c,
      className: F.track,
      children: [
        u("div", { className: F.fill, style: { height: D } }),
        u("div", { className: F.thumb, style: { bottom: `${M}px` } }),
      ],
    }),
  });
}
const Ce = 250;
function De({ videoRef, vs, attachmentId, source }) {
  const c = A(0);
  const u = A(null);
  const P = A(0);
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
        c.current += Date.now() - u.current;
        u.current = null;
      }
    };

    const M = () => {
      if (n_current.paused || u.current === null) {
        return;
      }
      const f = Date.now();
      c.current += f - u.current;
      u.current = f;
    };

    const D = () => {
      if (n_current.duration > 0 && Number.isFinite(n_current.duration)) {
        P.current = Math.round(n_current.duration * 1000 /* 1e3 */);
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
      P.current = Math.round(n_current.duration * 1000 /* 1e3 */);
    }

    return () => {
      n_current.removeEventListener("playing", l);
      n_current.removeEventListener("pause", p);
      n_current.removeEventListener("waiting", p);
      n_current.removeEventListener("timeupdate", M);
      n_current.removeEventListener("loadedmetadata", D);
    };
  }, [videoRef, vs, attachmentId]);
  const E = q(() => {
    if (!(!vs || !attachmentId)) {
      if (u.current !== null) {
        c.current += Date.now() - u.current;
        u.current = null;
      }

      if (c.current >= Ce && P.current > 0) {
        const r = source === "post_page" || source === "link";
        ax.trackVideoProgress(
          vs,
          attachmentId,
          c.current,
          P.current,
          r ? source : undefined
        );
      }

      c.current = 0;
    }
  }, [vs, attachmentId, source]);

  A_1(() => () => E(), [E]);

  return { emit: E };
}
const Ne = "pGRQ";
const Se = "ec7P";
const Be = "xfMz";
const Re = "iFGY";
const Fe = "sI85";
const Ie = "Mv5w";
const Te = "P5mt";
const Ve = "j0nF";
const xe = "hmD6";
const $e = "CUX2";
const _e = "x8wn";
const Ge = "yPfs";
const Ue = "bVXJ";
const qe = "MwhP";
const Ae = "FULU";
const Oe = "jYh9";
const Ye = "lQGx";
const Xe = "QAOr";
const ze = "UdxO";

const a = {
  container: Ne,
  hidden: Se,
  video: Be,
  revealing: Re,
  canvas: Fe,
  duration: Ie,
  bottomOverlay: Te,
  volumeControl: Ve,
  active: xe,
  volumeSlider: $e,
  muteButton: _e,
  muteButtonMobile: Ge,
  controlButton: Ue,
  playButton: qe,
  fullscreenButton: Ae,
  progressContainer: Oe,
  progressTrack: Ye,
  progressFill: Xe,
  scrubbing: ze,
};

const Z = parseFloat(localStorage.getItem("video-volume") ?? "1");
let S = true;
let z = isNaN(Z) ? 1 : Z;
const H = new Set();
const C = new Map();
let ee = false;
let O = null;
function I() {
  const n = window.innerHeight / 2;
  let s = null;
  let v = Infinity;
  for (const [m] of C) {
    const c = m.getBoundingClientRect();

    if (Math.abs(c.top + c.height / 2 - n) < v) {
      v = Math.abs(c.top + c.height / 2 - n);
      s = m;
    }
  }
  for (const [m, c] of C) {
    if (m === s && !c.userPaused) {
      if (c.video.paused) {
        c.video.play().catch(() => {});
      }
    } else if (!c.video.paused) {
      c.video.pause();
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
function Y() {
  const n = C.size > 1;

  if (n !== ee) {
    n
      ? window.addEventListener("scroll", te, { passive: true })
      : window.removeEventListener("scroll", te);

    ee = n;
  }
}
function X(n) {
  S = n;
  localStorage.setItem("video-muted", String(n));

  H.forEach((s) => s(n));
}
function He(n) {
  z = n;
  localStorage.setItem("video-volume", String(n));
}
function Qe(n) {
  const s = Math.floor(n / 60);
  const v = n % 60;
  return `${s}:${v.toString().padStart(2, "0")}`;
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
  const [N, se] = d(S);
  const [T, ie] = d(z);
  const [ce, Q] = d(false);
  const [ae, V] = d(0);
  const [le, j] = d(false);
  const [J, x] = d(false);
  const R = A(false);
  const $ = A(false);
  const ue = source();
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
    H.add(e);

    return () => {
      H.delete(e);
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
              l_current.muted = S;
              l_current.volume = z;
              C.set(p_current, { video: l_current, userPaused: false });
              Y();
              I();
            } else {
              C.delete(p_current);
              Y();
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
      C.delete(p_current);
      Y();
      I();
      emit();
    };
  }, [h, emit]);

  A_1(() => {
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
        V((l_current.currentTime / l_current_duration) * 100);
      }
    };

    const i = () => V(0);

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

    const o = () => x(true);

    const i = () => x(false);

    l_current.addEventListener("play", o);
    l_current.addEventListener("pause", i);
    x(!l_current.paused);

    return () => {
      l_current.removeEventListener("play", o);
      l_current.removeEventListener("pause", i);
    };
  }, []);

  const G = q((e) => {
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
      V(g * 100);
    }
  }, []);

  const ve = q(
    (e) => {
      e.stopPropagation();
      R.current = true;
      j(true);
      const e_currentTarget = e.currentTarget;
      try {
        e_currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      G(e.clientX);

      const i = (g) => G(g.clientX);

      const d = () => {
        try {
          e_currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        document.removeEventListener("pointermove", i);
        document.removeEventListener("pointerup", d);
        document.removeEventListener("pointercancel", d);
        window.removeEventListener("blur", d);
        j(false);

        setTimeout(() => {
          R.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", i);
      document.addEventListener("pointerup", d);
      document.addEventListener("pointercancel", d);
      window.addEventListener("blur", d);
    },
    [G]
  );

  const me = (e) => {
    e.stopPropagation();

    if (!($.current || R.current)) {
      if (!h && !k && spoiler) {
        ne(true);
        resetOpacity();
        return;
      }
      U();
    }
  };

  const fe = (e) => {
    e.stopPropagation();
    q();
  };

  const K = q((e) => {
    e.stopPropagation();
    e.preventDefault();
    X(!S);
  }, []);

  const U = q(() => {
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

  const q = q(() => {
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
      U();
    },
    [U]
  );

  const ge = q(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      q();
    },
    [q]
  );

  const he = q((e) => {
    ie(e);
    He(e);

    if (l.current) {
      l.current.volume = e;
    }

    if (e > 0 && S) {
      X(false);
    } else if (e === 0 && !S) {
      X(true);
    }
  }, []);

  const A = !h && spoiler;
  return className("div", {
    ref: p,
    className: `${a.container} ${className} ${A ? a.hidden : ""} ${
      k ? a.revealing : ""
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
        className: a.video,
        width: width,
        height: height,
      }),
      duration != null &&
        A &&
        className("div", { className: a.duration, children: Qe(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: a.bottomOverlay,
          children: [
            className("button", {
              className: `${a.controlButton} ${a.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": J ? "Pause" : "Play",
              children: J ? className(Je, {}) : className(je, {}),
            }),
            className("button", {
              className: `${a.controlButton} ${a.fullscreenButton}`,
              onClick: ge,
              type: "button",
              "aria-label": "Fullscreen",
              children: className(Ke, {}),
            }),
            ue
              ? className("button", {
                  className: a.muteButtonMobile,
                  onClick: K,
                  type: "button",
                  "aria-label": N ? "Unmute" : "Mute",
                  children: className(V, { muted: N, volume: T }),
                })
              : className("div", {
                  className: `${a.volumeControl} ${ce ? a.active : ""}`,
                  children: [
                    className("div", {
                      className: a.volumeSlider,
                      children: className(ke, {
                        value: N ? 0 : T,
                        onChange: he,
                        onDragStart: () => {
                          $.current = true;
                          Q(true);
                        },
                        onDragEnd: () => {
                          Q(false);

                          setTimeout(() => {
                            $.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    className("button", {
                      className: a.muteButton,
                      onClick: K,
                      type: "button",
                      "aria-label": N ? "Unmute" : "Mute",
                      children: className(V, { muted: N, volume: T }),
                    }),
                  ],
                }),
            className("div", {
              ref: D,
              className: a.progressContainer,
              onPointerDown: ve,
              onClick: (e) => e.stopPropagation(),
              children: className("div", {
                ref: f,
                className: a.progressTrack,
                children: className("div", {
                  className: `${a.progressFill} ${le ? a.scrubbing : ""}`,
                  style: { width: `${ae}%` },
                }),
              }),
            }),
          ],
        }),
      A && className("canvas", { ref: M, className: a.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
