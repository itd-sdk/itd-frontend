import { A, q, u, h, aS, d, a1, aT } from "./index-D4QRo1-7.js";
import { V as V_1 } from "./VolumeGlyph-DjfbuZdP.js";
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
      n._sentryDebugIds[s] = "32a3cbbd-8c0e-4c6b-a8e8-ae4d835eb254";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-32a3cbbd-8c0e-4c6b-a8e8-ae4d835eb254";
    }
  } catch {}
})();
const Ee = "GLPd";
const Pe = "n7bV";
const Me = "a4RH";
const Le = "fMa2";
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
const Se = 250;
function Ce({ videoRef, vs, attachmentId, source }) {
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

      if (c.current >= Se && E.current > 0) {
        const r = source === "post_page" || source === "link";
        aS.trackVideoProgress(
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
const De = "Yqvn";
const Ne = "RhSG";
const Be = "b9rA";
const Re = "i7ZM";
const Ve = "wLu7";
const Fe = "Pg0F";
const Te = "gmh9";
const Ie = "v5KM";
const $e = "rlYD";
const xe = "Jkgt";
const _e = "Uhm6";
const qe = "hGQA";
const Ae = "lC1s";
const Ge = "ohvz";
const Oe = "ZrOg";
const Ye = "VZtV";
const Ue = "Fhz8";
const ze = "d7Sw";
const He = "spMJ";

const a = {
  container: De,
  hidden: Ne,
  video: Be,
  revealing: Re,
  canvas: Ve,
  duration: Fe,
  bottomOverlay: Te,
  volumeControl: Ie,
  active: $e,
  volumeSlider: xe,
  muteButton: _e,
  muteButtonMobile: qe,
  controlButton: Ae,
  playButton: Ge,
  fullscreenButton: Oe,
  progressContainer: Ye,
  progressTrack: Ue,
  progressFill: ze,
  scrubbing: He,
};

const j = parseFloat(localStorage.getItem("video-volume") ?? "1");
let N = true;
let H = isNaN(j) ? 1 : j;
const X = new Set();
const S = new Map();
let ee = false;
let Y = null;
function F() {
  const n = window.innerHeight / 2;
  let s = null;
  let v = Infinity;
  for (const [m] of S) {
    const c = m.getBoundingClientRect();

    if (Math.abs(c.top + c.height / 2 - n) < v) {
      v = Math.abs(c.top + c.height / 2 - n);
      s = m;
    }
  }
  for (const [m, c] of S) {
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
  if (Y == null) {
    Y = requestAnimationFrame(() => {
      Y = null;
      F();
    });
  }
}
function U() {
  const n = S.size > 1;

  if (n !== ee) {
    n
      ? window.addEventListener("scroll", te, { passive: true })
      : window.removeEventListener("scroll", te);

    ee = n;
  }
}
function z(n) {
  N = n;
  localStorage.setItem("video-muted", String(n));

  X.forEach((s) => s(n));
}
function Xe(n) {
  H = n;
  localStorage.setItem("video-volume", String(n));
}
function Ze(n) {
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
  const M = A(null);
  const C = A(null);
  const f = A(null);
  const [h, L] = d(!spoiler);
  const [k, ne] = d(false);
  const [re, oe] = d(false);
  const [D, se] = d(N);
  const [T, ie] = d(H);
  const [ce, Z] = d(false);
  const [ae, I] = d(0);
  const [le, J] = d(false);
  const [K, $] = d(false);
  const R = A(false);
  const x = A(false);
  const ue = a1();
  const { emit } = Ce({
    videoRef: l,
    vs: postVs,
    attachmentId: attachmentId,
    source: source,
  });

  const { resetOpacity } = aT(M, p, {
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
              l_current.muted = N;
              l_current.volume = H;
              S.set(p_current, { video: l_current, userPaused: false });
              U();
              F();
            } else {
              S.delete(p_current);
              U();
              F();
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
      S.delete(p_current);
      U();
      F();
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
      R.current = true;
      J(true);
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
    [q]
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

  const Q = q((e) => {
    e.stopPropagation();
    e.preventDefault();
    z(!N);
  }, []);

  const A = q(() => {
    const l_current = l.current;
    const p_current = p.current;
    if (!l_current || !p_current) {
      return;
    }
    const i = S.get(p_current);

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

    if (e > 0 && N) {
      z(false);
    } else if (e === 0 && !N) {
      z(true);
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
        muted: D,
        loop: true,
        className: a.video,
        width: width,
        height: height,
      }),
      duration != null &&
        O &&
        className("div", { className: a.duration, children: Ze(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: a.bottomOverlay,
          children: [
            className("button", {
              className: `${a.controlButton} ${a.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": K ? "Pause" : "Play",
              children: K ? className(Ke, {}) : className(Je, {}),
            }),
            className("button", {
              className: `${a.controlButton} ${a.fullscreenButton}`,
              onClick: ge,
              type: "button",
              "aria-label": "Fullscreen",
              children: className(Qe, {}),
            }),
            ue
              ? className("button", {
                  className: a.muteButtonMobile,
                  onClick: Q,
                  type: "button",
                  "aria-label": D ? "Unmute" : "Mute",
                  children: className(V_1, { muted: D, volume: T }),
                })
              : className("div", {
                  className: `${a.volumeControl} ${ce ? a.active : ""}`,
                  children: [
                    className("div", {
                      className: a.volumeSlider,
                      children: className(ke, {
                        value: D ? 0 : T,
                        onChange: he,
                        onDragStart: () => {
                          x.current = true;
                          Z(true);
                        },
                        onDragEnd: () => {
                          Z(false);

                          setTimeout(() => {
                            x.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    className("button", {
                      className: a.muteButton,
                      onClick: Q,
                      type: "button",
                      "aria-label": D ? "Unmute" : "Mute",
                      children: className(V_1, { muted: D, volume: T }),
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
      O && className("canvas", { ref: M, className: a.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
