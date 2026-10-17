import { A, q, u, h, aT, d, a1, aU } from "./index-DqQficWb.js";
import { V } from "./VolumeGlyph-1KeqkCqF.js";
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
      n._sentryDebugIds[s] = "36990ad7-e04f-4f67-9019-b99ecc4bd1cf";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-36990ad7-e04f-4f67-9019-b99ecc4bd1cf";
    }
  } catch {}
})();
const Ee = "sQMm";
const Pe = "tPhn";
const Me = "oo6p";
const Le = "JMWP";
const T = { wrapper: Ee, track: Pe, fill: Me, thumb: Le };
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
  const N = `${M}px`;
  return u("div", {
    className: T.wrapper,
    onMouseDown: E,
    onClick: (f) => {
      f.stopPropagation();
      f.preventDefault();
    },
    children: u("div", {
      ref: c,
      className: T.track,
      children: [
        u("div", { className: T.fill, style: { height: N } }),
        u("div", { className: T.thumb, style: { bottom: `${M}px` } }),
      ],
    }),
  });
}
const Ce = 250;
function Ne({ videoRef, vs, attachmentId, source }) {
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

    const M = () => {
      if (n_current.paused || u.current === null) {
        return;
      }
      const f = Date.now();
      c.current += f - u.current;
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
        c.current += Date.now() - u.current;
        u.current = null;
      }

      if (c.current >= Ce && E.current > 0) {
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
const Se = "a1Rg";
const De = "hYkE";
const Be = "ZAx8";
const Re = "AnC5";
const Te = "m9s5";
const Ie = "gHkg";
const Ve = "YLo1";
const Fe = "gdP7";
const $e = "Qysl";
const xe = "u9i3";
const _e = "hklY";
const Ae = "vJGE";
const qe = "H4hi";
const Ye = "DuZ7";
const Ge = "YtuS";
const Oe = "tzXu";
const He = "L920";
const Ue = "ZN6r";
const Xe = "OW2Q";

const a = {
  container: Se,
  hidden: De,
  video: Be,
  revealing: Re,
  canvas: Te,
  duration: Ie,
  bottomOverlay: Ve,
  volumeControl: Fe,
  active: $e,
  volumeSlider: xe,
  muteButton: _e,
  muteButtonMobile: Ae,
  controlButton: qe,
  playButton: Ye,
  fullscreenButton: Ge,
  progressContainer: Oe,
  progressTrack: He,
  progressFill: Ue,
  scrubbing: Xe,
};

const K = parseFloat(localStorage.getItem("video-volume") ?? "1");
let D = true;
let X = isNaN(K) ? 1 : K;
const z = new Set();
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
function H() {
  const n = C.size > 1;

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
function We() {
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
function Ze() {
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
  const N = A(null);
  const f = A(null);
  const [h, L] = d(!spoiler);
  const [k, ne] = d(false);
  const [re, oe] = d(false);
  const [S, se] = d(D);
  const [V, ie] = d(X);
  const [ce, Q] = d(false);
  const [ae, F] = d(0);
  const [le, W] = d(false);
  const [Z, $] = d(false);
  const R = A(false);
  const x = A(false);
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
              l_current.muted = D;
              l_current.volume = X;
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

  const A = q((e) => {
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
      R.current = true;
      W(true);
      const e_currentTarget = e.currentTarget;
      try {
        e_currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      A(e.clientX);

      const i = (g) => A(g.clientX);

      const d = () => {
        try {
          e_currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        document.removeEventListener("pointermove", i);
        document.removeEventListener("pointerup", d);
        document.removeEventListener("pointercancel", d);
        window.removeEventListener("blur", d);
        W(false);

        setTimeout(() => {
          R.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", i);
      document.addEventListener("pointerup", d);
      document.addEventListener("pointercancel", d);
      window.addEventListener("blur", d);
    },
    [A]
  );

  const me = (e) => {
    e.stopPropagation();

    if (!(x.current || R.current)) {
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
    Y();
  };

  const J = q((e) => {
    e.stopPropagation();
    e.preventDefault();
    U(!D);
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

  const Y = q(() => {
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
      Y();
    },
    [Y]
  );

  const he = q((e) => {
    ie(e);
    ze(e);

    if (l.current) {
      l.current.volume = e;
    }

    if (e > 0 && D) {
      U(false);
    } else if (e === 0 && !D) {
      U(true);
    }
  }, []);

  const G = !h && spoiler;
  return className("div", {
    ref: p,
    className: `${a.container} ${className} ${G ? a.hidden : ""} ${
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
        muted: S,
        loop: true,
        className: a.video,
        width: width,
        height: height,
      }),
      duration != null &&
        G &&
        className("div", { className: a.duration, children: Qe(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: a.bottomOverlay,
          children: [
            className("button", {
              className: `${a.controlButton} ${a.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": Z ? "Pause" : "Play",
              children: Z ? className(Ze, {}) : className(We, {}),
            }),
            className("button", {
              className: `${a.controlButton} ${a.fullscreenButton}`,
              onClick: ge,
              type: "button",
              "aria-label": "Fullscreen",
              children: className(Je, {}),
            }),
            ue
              ? className("button", {
                  className: a.muteButtonMobile,
                  onClick: J,
                  type: "button",
                  "aria-label": S ? "Unmute" : "Mute",
                  children: className(V, { muted: S, volume: V }),
                })
              : className("div", {
                  className: `${a.volumeControl} ${ce ? a.active : ""}`,
                  children: [
                    className("div", {
                      className: a.volumeSlider,
                      children: className(ke, {
                        value: S ? 0 : V,
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
                      onClick: J,
                      type: "button",
                      "aria-label": S ? "Unmute" : "Mute",
                      children: className(V, { muted: S, volume: V }),
                    }),
                  ],
                }),
            className("div", {
              ref: N,
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
      G && className("canvas", { ref: M, className: a.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
