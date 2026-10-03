import { A, q, u, h, aT, d, a1, aU } from "./index-DK2L49XD.js";
import { V } from "./VolumeGlyph-BiXmcgfO.js";
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
      n._sentryDebugIds[s] = "3ae964af-247b-4094-900b-2a174bcd72aa";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-3ae964af-247b-4094-900b-2a174bcd72aa";
    }
  } catch {}
})();
const Ee = "ojbF";
const Pe = "S0nD";
const Me = "AHXX";
const Le = "YWmb";
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
  const N = `${M}px`;
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
        u("div", { className: R.fill, style: { height: N } }),
        u("div", { className: R.thumb, style: { bottom: `${M}px` } }),
      ],
    }),
  });
}
const Ce = 250;
function Ne({ videoRef, vs, attachmentId, source }) {
  const a = A(0);
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

    const N = () => {
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
    n_current.addEventListener("loadedmetadata", N);

    if (n_current.duration > 0 && Number.isFinite(n_current.duration)) {
      E.current = Math.round(n_current.duration * 1000 /* 1e3 */);
    }

    return () => {
      n_current.removeEventListener("playing", l);
      n_current.removeEventListener("pause", p);
      n_current.removeEventListener("waiting", p);
      n_current.removeEventListener("timeupdate", M);
      n_current.removeEventListener("loadedmetadata", N);
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
        aT.trackVideoProgress(
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

  h(() => () => P(), [P]);

  return { emit: P };
}
const Se = "s88G";
const De = "pTS8";
const Be = "t5Ml";
const Te = "K0fx";
const Re = "WoQc";
const Ie = "Cp1w";
const Fe = "Z7n8";
const Ve = "NvAg";
const $e = "K3Co";
const xe = "QfkA";
const Ae = "NA5U";
const _e = "muEO";
const qe = "kWtM";
const Ge = "jD61";
const Oe = "l0T7";
const Ue = "Jt9i";
const He = "HIqd";
const Xe = "w1LM";
const Ye = "Ju7u";

const c = {
  container: Se,
  hidden: De,
  video: Be,
  revealing: Te,
  canvas: Re,
  duration: Ie,
  bottomOverlay: Fe,
  volumeControl: Ve,
  active: $e,
  volumeSlider: xe,
  muteButton: Ae,
  muteButtonMobile: _e,
  controlButton: qe,
  playButton: Ge,
  fullscreenButton: Oe,
  progressContainer: Ue,
  progressTrack: He,
  progressFill: Xe,
  scrubbing: Ye,
};

const Z = parseFloat(localStorage.getItem("video-volume") ?? "1");
let D = true;
let Y = isNaN(Z) ? 1 : Z;
const W = new Set();
const C = new Map();
let ee = false;
let U = null;
function I() {
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
  if (U == null) {
    U = requestAnimationFrame(() => {
      U = null;
      I();
    });
  }
}
function H() {
  const n = C.size > 1;

  if (n !== ee) {
    n
      ? window.addEventListener("scroll", te, { passive: true })
      : window.removeEventListener("scroll", te);

    ee = n;
  }
}
function X(n) {
  D = n;
  localStorage.setItem("video-muted", String(n));

  W.forEach((s) => s(n));
}
function We(n) {
  Y = n;
  localStorage.setItem("video-volume", String(n));
}
function je(n) {
  const s = Math.floor(n / 60);
  const v = n % 60;
  return `${s}:${v.toString().padStart(2, "0")}`;
}
function ze() {
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
  const l = emit(null);
  const p = emit(null);
  const M = emit(null);
  const N = emit(null);
  const f = emit(null);
  const [h, L] = d(!spoiler);
  const [k, ne] = d(false);
  const [re, oe] = d(false);
  const [S, se] = d(D);
  const [F, ie] = d(Y);
  const [ae, j] = d(false);
  const [ce, V] = d(0);
  const [le, z] = d(false);
  const [J, $] = d(false);
  const T = emit(false);
  const x = emit(false);
  const ue = a1();
  const { emit } = Ne({
    videoRef: l,
    vs: postVs,
    attachmentId: attachmentId,
    source: source,
  });

  const { resetOpacity } = aU(M, p, {
    isVisible: re && !h && spoiler,
    isRevealing: k,
    onRevealComplete: () => L(true),
  });

  h(() => {
    const e = (o) => {
      se(o);

      if (l.current) {
        l.current.muted = o;
      }
    };
    W.add(e);

    return () => {
      W.delete(e);
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
              l_current.muted = D;
              l_current.volume = Y;
              C.set(p_current, { video: l_current, userPaused: false });
              H();
              I();
            } else {
              C.delete(p_current);
              H();
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
      H();
      I();
      emit();
    };
  }, [h, emit]);

  h(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }

    const o = () => {
      if (T.current) {
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

  const _ = q((e) => {
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
      T.current = true;
      z(true);
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
        z(false);

        setTimeout(() => {
          T.current = false;
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

    if (!(x.current || T.current)) {
      if (!h && !k && spoiler) {
        ne(true);
        resetOpacity();
        return;
      }
      q();
    }
  };

  const fe = (e) => {
    e.stopPropagation();
    G();
  };

  const K = q((e) => {
    e.stopPropagation();
    e.preventDefault();
    X(!D);
  }, []);

  const q = q(() => {
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
      q();
    },
    [q]
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
    We(e);

    if (l.current) {
      l.current.volume = e;
    }

    if (e > 0 && D) {
      X(false);
    } else if (e === 0 && !D) {
      X(true);
    }
  }, []);

  const O = !h && spoiler;
  return className("div", {
    ref: p,
    className: `${c.container} ${className} ${O ? c.hidden : ""} ${
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
        muted: S,
        loop: true,
        className: c.video,
        width: width,
        height: height,
      }),
      duration != null &&
        O &&
        className("div", { className: c.duration, children: je(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: c.bottomOverlay,
          children: [
            className("button", {
              className: `${c.controlButton} ${c.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": J ? "Pause" : "Play",
              children: J ? className(Je, {}) : className(ze, {}),
            }),
            className("button", {
              className: `${c.controlButton} ${c.fullscreenButton}`,
              onClick: ge,
              type: "button",
              "aria-label": "Fullscreen",
              children: className(Ke, {}),
            }),
            ue
              ? className("button", {
                  className: c.muteButtonMobile,
                  onClick: K,
                  type: "button",
                  "aria-label": S ? "Unmute" : "Mute",
                  children: className(V, { muted: S, volume: F }),
                })
              : className("div", {
                  className: `${c.volumeControl} ${ae ? c.active : ""}`,
                  children: [
                    className("div", {
                      className: c.volumeSlider,
                      children: className(ke, {
                        value: S ? 0 : F,
                        onChange: he,
                        onDragStart: () => {
                          x.current = true;
                          j(true);
                        },
                        onDragEnd: () => {
                          j(false);

                          setTimeout(() => {
                            x.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    className("button", {
                      className: c.muteButton,
                      onClick: K,
                      type: "button",
                      "aria-label": S ? "Unmute" : "Mute",
                      children: className(V, { muted: S, volume: F }),
                    }),
                  ],
                }),
            className("div", {
              ref: N,
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
      O && className("canvas", { ref: M, className: c.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
