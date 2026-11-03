import { A, q, u, h, ai, d, aj, ak } from "./index-GOT6tyDH.js";
import { V } from "./VolumeGlyph-5Z1UAFst.js";
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
      n._sentryDebugIds[s] = "70cfd542-dc01-4b12-a72b-fba41a184da4";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-70cfd542-dc01-4b12-a72b-fba41a184da4";
    }
  } catch {}
})();
const Ee = "AHhz";
const Pe = "V7so";
const Le = "FzdT";
const Me = "Z0gI";
const F = { wrapper: Ee, track: Pe, fill: Le, thumb: Me };
function ke({ value, onChange, onDragStart, onDragEnd }) {
  const a = A(null);

  const u = q(
    (f) => {
      const a_current = a.current;
      if (!a_current) {
        return;
      }
      const M = a_current.getBoundingClientRect();
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
    className: F.wrapper,
    onMouseDown: E,
    onClick: (f) => {
      f.stopPropagation();
      f.preventDefault();
    },
    children: u("div", {
      ref: a,
      className: F.track,
      children: [
        u("div", { className: F.fill, style: { height: S } }),
        u("div", { className: F.thumb, style: { bottom: `${L}px` } }),
      ],
    }),
  });
}
const Ce = 250;
function Se({ videoRef, vs, attachmentId, source }) {
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

    const L = () => {
      if (n_current.paused || u.current === null) {
        return;
      }
      const f = Date.now();
      a.current += f - u.current;
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
        a.current += Date.now() - u.current;
        u.current = null;
      }

      if (a.current >= Ce && E.current > 0) {
        const r = source === "post_page" || source === "link";
        ai.trackVideoProgress(
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
const Ne = "bVsa";
const De = "tFTb";
const Be = "THaa";
const Te = "jHRw";
const Fe = "o5aT";
const Re = "SVCO";
const Ve = "ORFO";
const Ie = "o7Qt";
const $e = "Gmya";
const xe = "XLFT";
const _e = "CJZF";
const qe = "SQDG";
const Ae = "ils3";
const Ge = "kLNJ";
const Oe = "LKt6";
const He = "Ye99";
const Ye = "iJr9";
const ze = "fKun";
const Ue = "ipE3";

const c = {
  container: Ne,
  hidden: De,
  video: Be,
  revealing: Te,
  canvas: Fe,
  duration: Re,
  bottomOverlay: Ve,
  volumeControl: Ie,
  active: $e,
  volumeSlider: xe,
  muteButton: _e,
  muteButtonMobile: qe,
  controlButton: Ae,
  playButton: Ge,
  fullscreenButton: Oe,
  progressContainer: He,
  progressTrack: Ye,
  progressFill: ze,
  scrubbing: Ue,
};

const W = parseFloat(localStorage.getItem("video-volume") ?? "1");
let D = true;
let U = isNaN(W) ? 1 : W;
const X = new Set();
const C = new Map();
let ee = false;
let H = null;
function R() {
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
  if (H == null) {
    H = requestAnimationFrame(() => {
      H = null;
      R();
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
  D = n;
  localStorage.setItem("video-muted", String(n));

  X.forEach((s) => s(n));
}
function Xe(n) {
  U = n;
  localStorage.setItem("video-volume", String(n));
}
function Je(n) {
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
  const l = A(null);
  const p = A(null);
  const L = A(null);
  const S = A(null);
  const f = A(null);
  const [h, M] = d(!spoiler);
  const [k, ne] = d(false);
  const [re, oe] = d(false);
  const [N, se] = d(D);
  const [V, ie] = d(U);
  const [ae, J] = d(false);
  const [ce, I] = d(0);
  const [le, j] = d(false);
  const [K, $] = d(false);
  const T = A(false);
  const x = A(false);
  const ue = aj();
  const { emit } = Se({
    videoRef: l,
    vs: postVs,
    attachmentId: attachmentId,
    source: source,
  });

  const { resetOpacity } = ak(L, p, {
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
    X.add(e);

    return () => {
      X.delete(e);
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
              l_current.volume = U;
              C.set(p_current, { video: l_current, userPaused: false });
              Y();
              R();
            } else {
              C.delete(p_current);
              Y();
              R();
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
      R();
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
        I((l_current.currentTime / l_current_duration) * 100);
      }
    };

    const i = () => I(0);

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
      I(g * 100);
    }
  }, []);

  const ve = q(
    (e) => {
      e.stopPropagation();
      T.current = true;
      j(true);
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
        j(false);

        setTimeout(() => {
          T.current = false;
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

    if (!(x.current || T.current)) {
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

  const Q = q((e) => {
    e.stopPropagation();
    e.preventDefault();
    z(!D);
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

    if (e > 0 && D) {
      z(false);
    } else if (e === 0 && !D) {
      z(true);
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
        muted: N,
        loop: true,
        className: c.video,
        width: width,
        height: height,
      }),
      duration != null &&
        O &&
        className("div", { className: c.duration, children: Je(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: c.bottomOverlay,
          children: [
            className("button", {
              className: `${c.controlButton} ${c.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": K ? "Pause" : "Play",
              children: K ? className(Ke, {}) : className(je, {}),
            }),
            className("button", {
              className: `${c.controlButton} ${c.fullscreenButton}`,
              onClick: ge,
              type: "button",
              "aria-label": "Fullscreen",
              children: className(Qe, {}),
            }),
            ue
              ? className("button", {
                  className: c.muteButtonMobile,
                  onClick: Q,
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
                    className("button", {
                      className: c.muteButton,
                      onClick: Q,
                      type: "button",
                      "aria-label": N ? "Unmute" : "Mute",
                      children: className(V, { muted: N, volume: V }),
                    }),
                  ],
                }),
            className("div", {
              ref: S,
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
      O && className("canvas", { ref: L, className: c.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
