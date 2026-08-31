import { A, q, u, h, ay, d, C as C_1, az } from "./index-ORJLmKGS.js";
import { V } from "./VolumeGlyph-6cXmdbhe.js";
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
    n.SENTRY_RELEASE = { id: "1.1.3" };
    const s = new n.Error().stack;

    if (s) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[s] = "450c46c6-2c67-4395-a5d4-e4e1f509dd70";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-450c46c6-2c67-4395-a5d4-e4e1f509dd70";
    }
  } catch {}
})();
const Ee = "Kokd";
const Pe = "Hnmy";
const Me = "njnt";
const Le = "cta2";
const R = { wrapper: Ee, track: Pe, fill: Me, thumb: Le };
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
    className: R.wrapper,
    onMouseDown: E,
    onClick: (f) => {
      f.stopPropagation();
      f.preventDefault();
    },
    children: u("div", {
      ref: c,
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
        ay.trackVideoProgress(
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
const Se = "WuNC";
const Be = "lWld";
const De = "nVAf";
const Ve = "V54A";
const Re = "wA31";
const Fe = "z2Gp";
const Te = "ZYnW";
const Ie = "uUbP";
const $e = "xTFd";
const xe = "w1jo";
const Ae = "retp";
const _e = "QdZW";
const qe = "e8fK";
const Ge = "SVQw";
const Ue = "Vxoi";
const We = "ZzoF";
const ze = "m6d0";
const Oe = "e1Nc";
const Ye = "ANWU";

const a = {
  container: Se,
  hidden: Be,
  video: De,
  revealing: Ve,
  canvas: Re,
  duration: Fe,
  bottomOverlay: Te,
  volumeControl: Ie,
  active: $e,
  volumeSlider: xe,
  muteButton: Ae,
  muteButtonMobile: _e,
  controlButton: qe,
  playButton: Ge,
  fullscreenButton: Ue,
  progressContainer: We,
  progressTrack: ze,
  progressFill: Oe,
  scrubbing: Ye,
};

const J = parseFloat(localStorage.getItem("video-volume") ?? "1");
let B = true;
let Y = isNaN(J) ? 1 : J;
const H = new Set();
const C = new Map();
let ee = false;
let W = null;
function F() {
  const n = window.innerHeight / 2;
  let s = null;
  let m = Infinity;
  for (const [v] of C) {
    const c = v.getBoundingClientRect();

    if (Math.abs(c.top + c.height / 2 - n) < m) {
      m = Math.abs(c.top + c.height / 2 - n);
      s = v;
    }
  }
  for (const [v, c] of C) {
    if (v === s && !c.userPaused) {
      if (c.video.paused) {
        c.video.play().catch(() => {});
      }
    } else if (!c.video.paused) {
      c.video.pause();
    }
  }
}
function te() {
  if (W == null) {
    W = requestAnimationFrame(() => {
      W = null;
      F();
    });
  }
}
function z() {
  const n = C.size > 1;

  if (n !== ee) {
    n
      ? window.addEventListener("scroll", te, { passive: true })
      : window.removeEventListener("scroll", te);

    ee = n;
  }
}
function O(n) {
  B = n;
  localStorage.setItem("video-muted", String(n));

  H.forEach((s) => s(n));
}
function He(n) {
  Y = n;
  localStorage.setItem("video-volume", String(n));
}
function Xe(n) {
  const s = Math.floor(n / 60);
  const m = n % 60;
  return `${s}:${m.toString().padStart(2, "0")}`;
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
  const [S, se] = d(B);
  const [T, ie] = d(Y);
  const [ce, X] = d(false);
  const [ae, I] = d(0);
  const [le, Z] = d(false);
  const [j, $] = d(false);
  const V = emit(false);
  const x = emit(false);
  const ue = C_1();
  const { emit } = Ne({
    videoRef: l,
    vs: postVs,
    attachmentId: attachmentId,
    source: source,
  });

  const { resetOpacity } = az(M, p, {
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
    H.add(e);

    return () => {
      H.delete(e);
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
              l_current.muted = B;
              l_current.volume = Y;
              C.set(p_current, { video: l_current, userPaused: false });
              z();
              F();
            } else {
              C.delete(p_current);
              z();
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
      C.delete(p_current);
      z();
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
      if (V.current) {
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
      I(g * 100);
    }
  }, []);

  const me = q(
    (e) => {
      e.stopPropagation();
      V.current = true;
      Z(true);
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
        Z(false);

        setTimeout(() => {
          V.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", i);
      document.addEventListener("pointerup", d);
      document.addEventListener("pointercancel", d);
      window.addEventListener("blur", d);
    },
    [_]
  );

  const ve = (e) => {
    e.stopPropagation();

    if (!(x.current || V.current)) {
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
    O(!B);
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
    He(e);

    if (l.current) {
      l.current.volume = e;
    }

    if (e > 0 && B) {
      O(false);
    } else if (e === 0 && !B) {
      O(true);
    }
  }, []);

  const U = !h && spoiler;
  return className("div", {
    ref: p,
    className: `${a.container} ${className} ${U ? a.hidden : ""} ${
      k ? a.revealing : ""
    }`,
    onClick: ve,
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
        U &&
        className("div", { className: a.duration, children: Xe(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: a.bottomOverlay,
          children: [
            className("button", {
              className: `${a.controlButton} ${a.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": j ? "Pause" : "Play",
              children: j ? className(je, {}) : className(Ze, {}),
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
                  "aria-label": S ? "Unmute" : "Mute",
                  children: className(V, { muted: S, volume: T }),
                })
              : className("div", {
                  className: `${a.volumeControl} ${ce ? a.active : ""}`,
                  children: [
                    className("div", {
                      className: a.volumeSlider,
                      children: className(ke, {
                        value: S ? 0 : T,
                        onChange: he,
                        onDragStart: () => {
                          x.current = true;
                          X(true);
                        },
                        onDragEnd: () => {
                          X(false);

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
                      "aria-label": S ? "Unmute" : "Mute",
                      children: className(V, { muted: S, volume: T }),
                    }),
                  ],
                }),
            className("div", {
              ref: N,
              className: a.progressContainer,
              onPointerDown: me,
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
      U && className("canvas", { ref: M, className: a.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
