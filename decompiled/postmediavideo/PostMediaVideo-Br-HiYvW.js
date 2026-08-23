import { A, q, u, A as A_1, ax, d, E, ay } from "./index-pEgBAsWz.js";
import { V as V_1 } from "./VolumeGlyph-DZ-00ZIW.js";
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
      n._sentryDebugIds[s] = "146e2edb-c4b9-46ee-8fea-10a70ebc6085";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-146e2edb-c4b9-46ee-8fea-10a70ebc6085";
    }
  } catch {}
})();
const Ee = "H6wP";
const Pe = "lSVQ";
const Me = "uTwr";
const Le = "d6BI";
const V = { wrapper: Ee, track: Pe, fill: Me, thumb: Le };
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
  const C = `${M}px`;
  return u("div", {
    className: V.wrapper,
    onMouseDown: E,
    onClick: (f) => {
      f.stopPropagation();
      f.preventDefault();
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
const Be = 250;
function Ce({ videoRef, vs, attachmentId, source }) {
  const c = A(0);
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

      if (c.current >= Be && E.current > 0) {
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

  A_1(() => () => P(), [P]);

  return { emit: P };
}
const De = "vjVQ";
const Se = "vf0x";
const Ne = "zluA";
const Re = "Ruvm";
const Ve = "uUbD";
const Te = "R3R1";
const Ie = "tkpm";
const Fe = "Yk2j";
const $e = "ITn8";
const xe = "BHHf";
const qe = "TP5v";
const _e = "lPXy";
const Ae = "KQ7e";
const Ge = "V2Rx";
const He = "VDaH";
const Oe = "qq9F";
const Ue = "c7BB";
const Ye = "fhGC";
const Xe = "Zfs3";

const a = {
  container: De,
  hidden: Se,
  video: Ne,
  revealing: Re,
  canvas: Ve,
  duration: Te,
  bottomOverlay: Ie,
  volumeControl: Fe,
  active: $e,
  volumeSlider: xe,
  muteButton: qe,
  muteButtonMobile: _e,
  controlButton: Ae,
  playButton: Ge,
  fullscreenButton: He,
  progressContainer: Oe,
  progressTrack: Ue,
  progressFill: Ye,
  scrubbing: Xe,
};

const J = parseFloat(localStorage.getItem("video-volume") ?? "1");
let S = true;
let X = isNaN(J) ? 1 : J;
const z = new Set();
const B = new Map();
let ee = false;
let O = null;
function T() {
  const n = window.innerHeight / 2;
  let s = null;
  let v = Infinity;
  for (const [m] of B) {
    const c = m.getBoundingClientRect();

    if (Math.abs(c.top + c.height / 2 - n) < v) {
      v = Math.abs(c.top + c.height / 2 - n);
      s = m;
    }
  }
  for (const [m, c] of B) {
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
      T();
    });
  }
}
function U() {
  const n = B.size > 1;

  if (n !== ee) {
    n
      ? window.addEventListener("scroll", te, { passive: true })
      : window.removeEventListener("scroll", te);

    ee = n;
  }
}
function Y(n) {
  S = n;
  localStorage.setItem("video-muted", String(n));

  z.forEach((s) => s(n));
}
function ze(n) {
  X = n;
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
function Ke() {
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
function We() {
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
  const C = A(null);
  const f = A(null);
  const [h, L] = d(!spoiler);
  const [k, ne] = d(false);
  const [re, oe] = d(false);
  const [D, se] = d(S);
  const [I, ie] = d(X);
  const [ce, Q] = d(false);
  const [ae, F] = d(0);
  const [le, j] = d(false);
  const [K, $] = d(false);
  const R = A(false);
  const x = A(false);
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

  A_1(() => {
    const e = (o) => {
      se(o);

      if (l.current) {
        l.current.muted = o;
      }
    };
    z.add(e);

    return () => {
      z.delete(e);
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
              l_current.volume = X;
              B.set(p_current, { video: l_current, userPaused: false });
              U();
              T();
            } else {
              B.delete(p_current);
              U();
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
      B.delete(p_current);
      U();
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

  const _ = emit((e) => {
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

  const ve = emit(
    (e) => {
      e.stopPropagation();
      R.current = true;
      j(true);
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
    [_]
  );

  const me = (e) => {
    e.stopPropagation();

    if (!(x.current || R.current)) {
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

  const W = emit((e) => {
    e.stopPropagation();
    e.preventDefault();
    Y(!S);
  }, []);

  const A = emit(() => {
    const l_current = l.current;
    const p_current = p.current;
    if (!l_current || !p_current) {
      return;
    }
    const i = B.get(p_current);

    if (l_current.paused) {
      i && (i.userPaused = false);
      l_current.play().catch(() => {});
    } else {
      i && (i.userPaused = true);
      l_current.pause();
    }
  }, []);

  const G = emit(() => {
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
      A();
    },
    [A]
  );

  const ge = emit(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      G();
    },
    [G]
  );

  const he = emit((e) => {
    ie(e);
    ze(e);

    if (l.current) {
      l.current.volume = e;
    }

    if (e > 0 && S) {
      Y(false);
    } else if (e === 0 && !S) {
      Y(true);
    }
  }, []);

  const H = !h && spoiler;
  return className("div", {
    ref: p,
    className: `${a.container} ${className} ${H ? a.hidden : ""} ${
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
        muted: D,
        loop: true,
        className: a.video,
        width: width,
        height: height,
      }),
      duration != null &&
        H &&
        className("div", { className: a.duration, children: Qe(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: a.bottomOverlay,
          children: [
            className("button", {
              className: `${a.controlButton} ${a.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": K ? "Pause" : "Play",
              children: K ? className(Ke, {}) : className(je, {}),
            }),
            className("button", {
              className: `${a.controlButton} ${a.fullscreenButton}`,
              onClick: ge,
              type: "button",
              "aria-label": "Fullscreen",
              children: className(We, {}),
            }),
            ue
              ? className("button", {
                  className: a.muteButtonMobile,
                  onClick: W,
                  type: "button",
                  "aria-label": D ? "Unmute" : "Mute",
                  children: className(V_1, { muted: D, volume: I }),
                })
              : className("div", {
                  className: `${a.volumeControl} ${ce ? a.active : ""}`,
                  children: [
                    className("div", {
                      className: a.volumeSlider,
                      children: className(ke, {
                        value: D ? 0 : I,
                        onChange: he,
                        onDragStart: () => {
                          x.current = true;
                          Q(true);
                        },
                        onDragEnd: () => {
                          Q(false);

                          setTimeout(() => {
                            x.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    className("button", {
                      className: a.muteButton,
                      onClick: W,
                      type: "button",
                      "aria-label": D ? "Unmute" : "Mute",
                      children: className(V_1, { muted: D, volume: I }),
                    }),
                  ],
                }),
            className("div", {
              ref: C,
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
      H && className("canvas", { ref: M, className: a.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
