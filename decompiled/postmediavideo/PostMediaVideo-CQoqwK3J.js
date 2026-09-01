import { A, q, u, h, ay, d, C as C_1, az } from "./index-gHxZkwFX.js";
import { V } from "./VolumeGlyph-B_VL4u7Q.js";
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
    n.SENTRY_RELEASE = { id: "1.1.4" };
    const s = new n.Error().stack;

    if (s) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[s] = "c857b392-46f9-4a73-913b-98458c8d858a";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-c857b392-46f9-4a73-913b-98458c8d858a";
    }
  } catch {}
})();
const Pe = "Jwg5";
const Ee = "U9tZ";
const Le = "CO2G";
const Me = "DRqH";
const I = { wrapper: Pe, track: Ee, fill: Le, thumb: Me };
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

  const P = q(
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

  const E = 7;
  const r = 80;
  const l = E;
  const p = r - E;
  const L = l + value * (p - l);
  const D = `${L}px`;
  return u("div", {
    className: I.wrapper,
    onMouseDown: P,
    onClick: (f) => {
      f.stopPropagation();
      f.preventDefault();
    },
    children: u("div", {
      ref: c,
      className: I.track,
      children: [
        u("div", { className: I.fill, style: { height: D } }),
        u("div", { className: I.thumb, style: { bottom: `${L}px` } }),
      ],
    }),
  });
}
const Ce = 250;
function De({ videoRef, vs, attachmentId, source }) {
  const c = A(0);
  const u = A(null);
  const P = A(0);
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
    n_current.addEventListener("timeupdate", L);
    n_current.addEventListener("loadedmetadata", D);

    if (n_current.duration > 0 && Number.isFinite(n_current.duration)) {
      P.current = Math.round(n_current.duration * 1000 /* 1e3 */);
    }

    return () => {
      n_current.removeEventListener("playing", l);
      n_current.removeEventListener("pause", p);
      n_current.removeEventListener("waiting", p);
      n_current.removeEventListener("timeupdate", L);
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
        ay.trackVideoProgress(
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

  h(() => () => E(), [E]);

  return { emit: E };
}
const Ne = "tyZX";
const Se = "iuNT";
const Be = "YYsc";
const Re = "XytR";
const Ie = "CbCQ";
const Te = "XXeQ";
const Ve = "R76l";
const Fe = "gA3Q";
const $e = "mKpb";
const xe = "XTnf";
const _e = "D19m";
const qe = "ePpu";
const Ae = "AVLO";
const Ge = "bI1d";
const Oe = "GIQe";
const Xe = "r0ot";
const Ye = "P7OC";
const Ue = "G1eb";
const He = "gPP6";

const a = {
  container: Ne,
  hidden: Se,
  video: Be,
  revealing: Re,
  canvas: Ie,
  duration: Te,
  bottomOverlay: Ve,
  volumeControl: Fe,
  active: $e,
  volumeSlider: xe,
  muteButton: _e,
  muteButtonMobile: qe,
  controlButton: Ae,
  playButton: Ge,
  fullscreenButton: Oe,
  progressContainer: Xe,
  progressTrack: Ye,
  progressFill: Ue,
  scrubbing: He,
};

const j = parseFloat(localStorage.getItem("video-volume") ?? "1");
let S = true;
let H = isNaN(j) ? 1 : j;
const Q = new Set();
const C = new Map();
let ee = false;
let X = null;
function T() {
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
  if (X == null) {
    X = requestAnimationFrame(() => {
      X = null;
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
function U(n) {
  S = n;
  localStorage.setItem("video-muted", String(n));

  Q.forEach((s) => s(n));
}
function Qe(n) {
  H = n;
  localStorage.setItem("video-volume", String(n));
}
function ze(n) {
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
  const L = A(null);
  const D = A(null);
  const f = A(null);
  const [h, M] = d(!spoiler);
  const [k, ne] = d(false);
  const [re, oe] = d(false);
  const [N, se] = d(S);
  const [V, ie] = d(H);
  const [ce, z] = d(false);
  const [ae, F] = d(0);
  const [le, Z] = d(false);
  const [J, $] = d(false);
  const R = A(false);
  const x = A(false);
  const ue = C_1();
  const { emit } = De({
    videoRef: l,
    vs: postVs,
    attachmentId: attachmentId,
    source: source,
  });

  const { resetOpacity } = az(L, p, {
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
    Q.add(e);

    return () => {
      Q.delete(e);
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
              l_current.muted = S;
              l_current.volume = H;
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

  const me = q(
    (e) => {
      e.stopPropagation();
      R.current = true;
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

  const ve = (e) => {
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

  const K = q((e) => {
    e.stopPropagation();
    e.preventDefault();
    U(!S);
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
    Qe(e);

    if (l.current) {
      l.current.volume = e;
    }

    if (e > 0 && S) {
      U(false);
    } else if (e === 0 && !S) {
      U(true);
    }
  }, []);

  const O = !h && spoiler;
  return className("div", {
    ref: p,
    className: `${a.container} ${className} ${O ? a.hidden : ""} ${
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
        muted: N,
        loop: true,
        className: a.video,
        width: width,
        height: height,
      }),
      duration != null &&
        O &&
        className("div", { className: a.duration, children: ze(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: a.bottomOverlay,
          children: [
            className("button", {
              className: `${a.controlButton} ${a.playButton}`,
              onClick: pe,
              type: "button",
              "aria-label": J ? "Pause" : "Play",
              children: J ? className(Je, {}) : className(Ze, {}),
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
                  children: className(V, { muted: N, volume: V }),
                })
              : className("div", {
                  className: `${a.volumeControl} ${ce ? a.active : ""}`,
                  children: [
                    className("div", {
                      className: a.volumeSlider,
                      children: className(ke, {
                        value: N ? 0 : V,
                        onChange: he,
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
                    className("button", {
                      className: a.muteButton,
                      onClick: K,
                      type: "button",
                      "aria-label": N ? "Unmute" : "Mute",
                      children: className(V, { muted: N, volume: V }),
                    }),
                  ],
                }),
            className("div", {
              ref: D,
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
      O && className("canvas", { ref: L, className: a.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
