import { A, q, u, h, aT, d, a1, aU } from "./index-CsuAWxkQ.js";
import { V } from "./VolumeGlyph-Cb-V62zf.js";
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
      n._sentryDebugIds[s] = "1bd717bc-985b-4375-957a-2a05242d6c7e";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-1bd717bc-985b-4375-957a-2a05242d6c7e";
    }
  } catch {}
})();
const Ee = "le4b";
const Pe = "Ueij";
const Le = "yGjR";
const Me = "qZPT";
const I = { wrapper: Ee, track: Pe, fill: Le, thumb: Me };
function ke({ value, onChange, onDragStart, onDragEnd }) {
  const c = A(null);

  const u = q(
    (f) => {
      const c_current = c.current;
      if (!c_current) {
        return;
      }
      const M = c_current.getBoundingClientRect();
      const k = 1 - (f - M.top) / M.height;
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

      const M = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", h);
        document.removeEventListener("mouseup", M);
      };

      document.addEventListener("mousemove", h);
      document.addEventListener("mouseup", M);
    },
    [u, onDragStart, onDragEnd]
  );

  const P = 7;
  const r = 80;
  const l = P;
  const p = r - P;
  const L = l + value * (p - l);
  const S = `${L}px`;
  return u("div", {
    className: I.wrapper,
    onMouseDown: E,
    onClick: (f) => {
      f.stopPropagation();
      f.preventDefault();
    },
    children: u("div", {
      ref: c,
      className: I.track,
      children: [
        u("div", { className: I.fill, style: { height: S } }),
        u("div", { className: I.thumb, style: { bottom: `${L}px` } }),
      ],
    }),
  });
}
const De = 250;
function Se({ videoRef, vs, attachmentId, source }) {
  const c = A(0);
  const u = A(null);
  const E = A(0);
  h(() => {
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

    const L = () => {
      if (n_current.paused || u.current === null) {
        return;
      }
      const f = Date.now();
      c.current += f - u.current;
      u.current = f;
    };

    const S = () => {
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
    n_current.addEventListener("timeupdate", L);
    n_current.addEventListener("loadedmetadata", S);

    if (n_current.duration > 0 && Number.isFinite(n_current.duration)) {
      E.current = Math.round(n_current.duration * 1000 /* 1e3 */);
    }

    return () => {
      n_current.removeEventListener("playing", l);
      n_current.removeEventListener("pause", p);
      n_current.removeEventListener("waiting", p);
      n_current.removeEventListener("timeupdate", L);
      n_current.removeEventListener("loadedmetadata", S);
    };
  }, [videoRef, vs, attachmentId]);
  const P = q(() => {
    if (!(!vs || !attachmentId)) {
      if (u.current !== null) {
        c.current += Date.now() - u.current;
        u.current = null;
      }

      if (c.current >= De && E.current > 0) {
        const r = source === "post_page" || source === "link";
        aT.trackVideoProgress(
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

  h(() => () => P(), [P]);

  return { emit: P };
}
const Ce = "uopK";
const Ne = "kRr0";
const Be = "vPvP";
const Re = "lqza";
const Ie = "Ss94";
const Te = "vJXG";
const Fe = "hXCF";
const Ve = "aouj";
const $e = "flqS";
const xe = "oL6I";
const qe = "OwD6";
const _e = "PeID";
const Ge = "raWE";
const Ae = "XuGd";
const Oe = "ASJE";
const Ue = "rLDo";
const Xe = "InDb";
const Ye = "YSsD";
const je = "hJvw";

const a = {
  container: Ce,
  hidden: Ne,
  video: Be,
  revealing: Re,
  canvas: Ie,
  duration: Te,
  bottomOverlay: Fe,
  volumeControl: Ve,
  active: $e,
  volumeSlider: xe,
  muteButton: qe,
  muteButtonMobile: _e,
  controlButton: Ge,
  playButton: Ae,
  fullscreenButton: Oe,
  progressContainer: Ue,
  progressTrack: Xe,
  progressFill: Ye,
  scrubbing: je,
};

const Q = parseFloat(localStorage.getItem("video-volume") ?? "1");
let N = true;
let j = isNaN(Q) ? 1 : Q;
const z = new Set();
const D = new Map();
let ee = false;
let U = null;
function T() {
  const n = window.innerHeight / 2;
  let s = null;
  let v = Infinity;
  for (const [m] of D) {
    const c = m.getBoundingClientRect();

    if (Math.abs(c.top + c.height / 2 - n) < v) {
      v = Math.abs(c.top + c.height / 2 - n);
      s = m;
    }
  }
  for (const [m, c] of D) {
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
  if (U == null) {
    U = requestAnimationFrame(() => {
      U = null;
      T();
    });
  }
}
function X() {
  const n = D.size > 1;

  if (n !== ee) {
    n
      ? window.addEventListener("scroll", te, { passive: true })
      : window.removeEventListener("scroll", te);

    ee = n;
  }
}
function Y(n) {
  N = n;
  localStorage.setItem("video-muted", String(n));

  z.forEach((s) => s(n));
}
function ze(n) {
  j = n;
  localStorage.setItem("video-volume", String(n));
}
function He(n) {
  const s = Math.floor(n / 60);
  const v = n % 60;
  return `${s}:${v.toString().padStart(2, "0")}`;
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
function We() {
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
  const L = A(null);
  const S = A(null);
  const f = A(null);
  const [h, M] = d(!spoiler);
  const [k, ne] = d(false);
  const [re, oe] = d(false);
  const [C, se] = d(N);
  const [F, ie] = d(j);
  const [ce, H] = d(false);
  const [ae, V] = d(0);
  const [le, J] = d(false);
  const [W, $] = d(false);
  const R = A(false);
  const x = A(false);
  const ue = a1();
  const { emit } = Se({
    videoRef: l,
    vs: postVs,
    attachmentId: attachmentId,
    source: source,
  });

  const { resetOpacity } = aU(L, p, {
    isVisible: re && !h && spoiler,
    isRevealing: k,
    onRevealComplete: () => M(true),
  });

  h(() => {
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

  h(() => {
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
              l_current.volume = j;
              D.set(p_current, { video: l_current, userPaused: false });
              X();
              T();
            } else {
              D.delete(p_current);
              X();
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
      D.delete(p_current);
      X();
      T();
      emit();
    };
  }, [h, emit]);

  h(() => {
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

  h(() => {
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
      V(g * 100);
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

      const i = (g) => _(g.clientX);

      const d = () => {
        try {
          e_currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        document.removeEventListener("pointermove", i);
        document.removeEventListener("pointerup", d);
        document.removeEventListener("pointercancel", d);
        window.removeEventListener("blur", d);
        J(false);

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
      G();
    }
  };

  const fe = (e) => {
    e.stopPropagation();
    A();
  };

  const K = emit((e) => {
    e.stopPropagation();
    e.preventDefault();
    Y(!N);
  }, []);

  const G = emit(() => {
    const l_current = l.current;
    const p_current = p.current;
    if (!l_current || !p_current) {
      return;
    }
    const i = D.get(p_current);

    if (l_current.paused) {
      i && (i.userPaused = false);
      l_current.play().catch(() => {});
    } else {
      i && (i.userPaused = true);
      l_current.pause();
    }
  }, []);

  const A = emit(() => {
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
      G();
    },
    [G]
  );

  const ge = emit(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      A();
    },
    [A]
  );

  const he = emit((e) => {
    ie(e);
    ze(e);

    if (l.current) {
      l.current.volume = e;
    }

    if (e > 0 && N) {
      Y(false);
    } else if (e === 0 && !N) {
      Y(true);
    }
  }, []);

  const O = !h && spoiler;
  return className("div", {
    ref: p,
    className: `${a.container} ${className} ${O ? a.hidden : ""} ${
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
        muted: C,
        loop: true,
        className: a.video,
        width: width,
        height: height,
      }),
      duration != null &&
        O &&
        className("div", { className: a.duration, children: He(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: a.bottomOverlay,
          children: [
            className("button", {
              className: `${a.controlButton} ${a.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": W ? "Pause" : "Play",
              children: W ? className(We, {}) : className(Je, {}),
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
                  "aria-label": C ? "Unmute" : "Mute",
                  children: className(V, { muted: C, volume: F }),
                })
              : className("div", {
                  className: `${a.volumeControl} ${ce ? a.active : ""}`,
                  children: [
                    className("div", {
                      className: a.volumeSlider,
                      children: className(ke, {
                        value: C ? 0 : F,
                        onChange: he,
                        onDragStart: () => {
                          x.current = true;
                          H(true);
                        },
                        onDragEnd: () => {
                          H(false);

                          setTimeout(() => {
                            x.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    className("button", {
                      className: a.muteButton,
                      onClick: K,
                      type: "button",
                      "aria-label": C ? "Unmute" : "Mute",
                      children: className(V, { muted: C, volume: F }),
                    }),
                  ],
                }),
            className("div", {
              ref: S,
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
      O && className("canvas", { ref: L, className: a.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
