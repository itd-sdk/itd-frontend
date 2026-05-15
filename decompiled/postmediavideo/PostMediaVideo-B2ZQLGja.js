import { a, A, q as q_1, y, as, d, E, at } from "./index-7xRaK15k.js";
(() => {
  try {
    const e =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "1.1.1" };
    const r = new e.Error().stack;

    if (r) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[r] = "48ad482c-78cb-41b0-938d-189175a246ee";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-48ad482c-78cb-41b0-938d-189175a246ee";
    }
  } catch {}
})();

const fe = ({ size = 20 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      a("path", {
        fill: "currentColor",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      }),
      a("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M16 9a5 5 0 0 1 0 6",
      }),
    ],
  });

const pe = ({ size = 20 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      a("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M16 9a5 5 0 0 1 .95 2.293M19.364 5.636a9 9 0 0 1 1.889 9.96M2 2l20 20",
      }),
      a("path", {
        fill: "currentColor",
        d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",
      }),
      a("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11M9.828 4.172A.686.686 0 0 1 11 4.657v.686",
      }),
    ],
  });

const ge = ({ size = 20 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      a("path", {
        fill: "currentColor",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M11 4.702a.706.706 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      }),
      a("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M16 9a5 5 0 0 1 0 6M19.364 18.364a9 9 0 0 0 0-12.728",
      }),
    ],
  });

const he = "Wtnk";
const be = "tknD";
const we = "S1Fm";
const ke = "fYHG";
const R = { wrapper: he, track: be, fill: we, thumb: ke };
function Le({ value, onChange, onDragStart, onDragEnd }) {
  const s = A(null);

  const c = q_1(
    (f) => {
      const s_current = s.current;
      if (!s_current) {
        return;
      }
      const E = s_current.getBoundingClientRect();
      const y = 1 - (f - E.top) / E.height;
      onChange(Math.max(0, Math.min(1, y)));
    },
    [onChange]
  );

  const w = q_1(
    (f) => {
      f.stopPropagation();
      f.preventDefault();
      onDragStart?.();
      c(f.clientY);

      const h = (y) => c(y.clientY);

      const E = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", h);
        document.removeEventListener("mouseup", E);
      };

      document.addEventListener("mousemove", h);
      document.addEventListener("mouseup", E);
    },
    [c, onDragStart, onDragEnd]
  );

  const k = 7;
  const o = 80;
  const l = k;
  const g = o - k;
  const L = l + value * (g - l);
  const S = `${L}px`;
  return a("div", {
    className: R.wrapper,
    onMouseDown: w,
    onClick: (f) => {
      f.stopPropagation();
      f.preventDefault();
    },
    children: a("div", {
      ref: s,
      className: R.track,
      children: [
        a("div", { className: R.fill, style: { height: S } }),
        a("div", { className: R.thumb, style: { bottom: `${L}px` } }),
      ],
    }),
  });
}
const Me = 250;
function Ee({ videoRef, vs, attachmentId, source }) {
  const s = A(0);
  const c = A(null);
  const w = A(0);
  y(() => {
    const e_current = videoRef.current;
    if (!e_current || !vs || !attachmentId) {
      return;
    }

    const l = () => {
      c.current = Date.now();
    };

    const g = () => {
      if (c.current !== null) {
        s.current += Date.now() - c.current;
        c.current = null;
      }
    };

    const L = () => {
      if (e_current.paused || c.current === null) {
        return;
      }
      const f = Date.now();
      s.current += f - c.current;
      c.current = f;
    };

    const S = () => {
      if (e_current.duration > 0 && Number.isFinite(e_current.duration)) {
        w.current = Math.round(e_current.duration * 1000 /* 1e3 */);
      }
    };

    if (!e_current.paused && e_current.readyState >= 3) {
      c.current = Date.now();
    }

    e_current.addEventListener("playing", l);
    e_current.addEventListener("pause", g);
    e_current.addEventListener("waiting", g);
    e_current.addEventListener("timeupdate", L);
    e_current.addEventListener("loadedmetadata", S);

    if (e_current.duration > 0 && Number.isFinite(e_current.duration)) {
      w.current = Math.round(e_current.duration * 1000 /* 1e3 */);
    }

    return () => {
      e_current.removeEventListener("playing", l);
      e_current.removeEventListener("pause", g);
      e_current.removeEventListener("waiting", g);
      e_current.removeEventListener("timeupdate", L);
      e_current.removeEventListener("loadedmetadata", S);
    };
  }, [videoRef, vs, attachmentId]);
  const k = q_1(() => {
    if (!(!vs || !attachmentId)) {
      if (c.current !== null) {
        s.current += Date.now() - c.current;
        c.current = null;
      }

      if (s.current >= Me && w.current > 0) {
        const o = source === "post_page" || source === "link";
        as.trackVideoProgress(
          vs,
          attachmentId,
          s.current,
          w.current,
          o ? source : undefined
        );
      }

      s.current = 0;
    }
  }, [vs, attachmentId, source]);

  y(() => () => k(), [k]);

  return { emit: k };
}
const ye = "JX7G";
const Pe = "BGiy";
const Ce = "kAsv";
const Se = "NYW8";
const Ne = "pCFs";
const Ve = "HYll";
const Ie = "XL6O";
const De = "wBoc";
const Re = "lgVE";
const Te = "O62f";
const Ae = "iPyK";
const Be = "XBqb";
const $e = "WmkJ";
const xe = "u3Ek";
const Fe = "OLh1";
const _e = "ZsiJ";

const m = {
  container: ye,
  hidden: Pe,
  video: Ce,
  revealing: Se,
  canvas: Ne,
  duration: Ve,
  bottomOverlay: Ie,
  volumeControl: De,
  active: Re,
  volumeSlider: Te,
  muteButton: Ae,
  muteButtonMobile: Be,
  progressContainer: $e,
  progressTrack: xe,
  progressFill: Fe,
  scrubbing: _e,
};

const q = parseFloat(localStorage.getItem("video-volume") ?? "1");
let V = true;
let Y = isNaN(q) ? 1 : q;
const j = new Set();
const C = new Map();
let J = false;
let H = null;
function T() {
  const e = window.innerHeight / 2;
  let r = null;
  let u = Infinity;
  for (const [v] of C) {
    const s = v.getBoundingClientRect();

    if (Math.abs(s.top + s.height / 2 - e) < u) {
      u = Math.abs(s.top + s.height / 2 - e);
      r = v;
    }
  }
  for (const [v, s] of C) {
    if (v === r && !s.userPaused) {
      if (s.video.paused) {
        s.video.play().catch(() => {});
      }
    } else if (!s.video.paused) {
      s.video.pause();
    }
  }
}
function K() {
  if (H == null) {
    H = requestAnimationFrame(() => {
      H = null;
      T();
    });
  }
}
function O() {
  const e = C.size > 1;

  if (e !== J) {
    e
      ? window.addEventListener("scroll", K, { passive: true })
      : window.removeEventListener("scroll", K);

    J = e;
  }
}
function W(e) {
  V = e;
  localStorage.setItem("video-muted", String(e));

  j.forEach((r) => r(e));
}
function He(e) {
  Y = e;
  localStorage.setItem("video-volume", String(e));
}
function Oe(e) {
  const r = Math.floor(e / 60);
  const u = e % 60;
  return `${r}:${u.toString().padStart(2, "0")}`;
}
function Z({ muted, volume }) {
  if (muted || volume === 0) {
    return a(pe, {});
  }

  if (volume < 0.7) {
    return a(fe, {});
  }

  return a(ge, {});
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
  const g = A(null);
  const L = A(null);
  const S = A(null);
  const f = A(null);
  const [h, E] = d(!spoiler);
  const [y, z] = d(false);
  const [Q, ee] = d(false);
  const [N, te] = d(V);
  const [A, ne] = d(Y);
  const [re, X] = d(false);
  const [oe, B] = d(0);
  const [se, G] = d(false);
  const D = A(false);
  const $ = A(false);
  const ie = E();
  const { emit } = Ee({
    videoRef: l,
    vs: postVs,
    attachmentId: attachmentId,
    source: source,
  });

  const { resetOpacity } = at(L, g, {
    isVisible: Q && !h && spoiler,
    isRevealing: y,
    onRevealComplete: () => E(true),
  });

  y(() => {
    const t = (i) => {
      te(i);

      if (l.current) {
        l.current.muted = i;
      }
    };
    j.add(t);

    return () => {
      j.delete(t);
    };
  }, []);

  y(() => {
    const g_current = g.current;
    if (!g_current) {
      return;
    }
    const i = new IntersectionObserver(
      (d) => {
        d.forEach((a) => {
          ee(a.isIntersecting);
          const l_current = l.current;

          if (l_current) {
            if (a.isIntersecting) {
              l_current.currentTime = 0;
              l_current.muted = V;
              l_current.volume = Y;
              C.set(g_current, { video: l_current, userPaused: false });
              O();
              T();
            } else {
              C.delete(g_current);
              O();
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
    i.observe(g_current);

    return () => {
      i.disconnect();
      C.delete(g_current);
      O();
      T();
      emit();
    };
  }, [h, emit]);

  y(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }

    const i = () => {
      if (D.current) {
        return;
      }
      const l_current_duration = l_current.duration;

      if (Number.isFinite(l_current_duration) && l_current_duration > 0) {
        B((l_current.currentTime / l_current_duration) * 100);
      }
    };

    const d = () => B(0);

    l_current.addEventListener("timeupdate", i);
    l_current.addEventListener("loadedmetadata", i);
    l_current.addEventListener("emptied", d);

    return () => {
      l_current.removeEventListener("timeupdate", i);
      l_current.removeEventListener("loadedmetadata", i);
      l_current.removeEventListener("emptied", d);
    };
  }, []);

  const F = q_1((t) => {
    const f_current = f.current;
    const l_current = l.current;
    if (!f_current || !l_current) {
      return;
    }
    const a = f_current.getBoundingClientRect();
    if (a.width <= 0) {
      return;
    }
    const p = Math.min(1, Math.max(0, (t - a.left) / a.width));

    if (Number.isFinite(l_current.duration) && l_current.duration > 0) {
      l_current.currentTime = l_current.duration * p;
      B(p * 100);
    }
  }, []);

  const ce = q_1(
    (t) => {
      t.stopPropagation();
      D.current = true;
      G(true);
      const t_currentTarget = t.currentTarget;
      try {
        t_currentTarget.setPointerCapture(t.pointerId);
      } catch {}
      F(t.clientX);

      const d = (p) => F(p.clientX);

      const a = () => {
        try {
          t_currentTarget.releasePointerCapture(t.pointerId);
        } catch {}
        document.removeEventListener("pointermove", d);
        document.removeEventListener("pointerup", a);
        document.removeEventListener("pointercancel", a);
        window.removeEventListener("blur", a);
        G(false);

        setTimeout(() => {
          D.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", d);
      document.addEventListener("pointerup", a);
      document.addEventListener("pointercancel", a);
      window.addEventListener("blur", a);
    },
    [F]
  );

  const ue = (t) => {
    t.stopPropagation();

    if ($.current || D.current) {
      return;
    }

    if (!h && !y && spoiler) {
      z(true);
      resetOpacity();
      return;
    }
    const l_current = l.current;
    const g_current = g.current;
    if (!l_current || !g_current) {
      return;
    }
    const a = C.get(g_current);

    if (l_current.paused) {
      a && (a.userPaused = false);
      l_current.play().catch(() => {});
    } else {
      a && (a.userPaused = true);
      l_current.pause();
    }
  };

  const U = q_1((t) => {
    t.stopPropagation();
    t.preventDefault();
    W(!V);
  }, []);

  const le = q_1((t) => {
    ne(t);
    He(t);

    if (l.current) {
      l.current.volume = t;
    }

    if (t > 0 && V) {
      W(false);
    } else if (t === 0 && !V) {
      W(true);
    }
  }, []);

  const _ = !h && spoiler;
  return a("div", {
    ref: g,
    className: `${m.container} ${className} ${_ ? m.hidden : ""} ${
      y ? m.revealing : ""
    }`,
    onClick: ue,
    children: [
      a("video", {
        ref: l,
        src: src,
        preload: "metadata",
        playsInline: true,
        muted: N,
        loop: true,
        className: m.video,
        width: width,
        height: height,
      }),
      duration != null &&
        _ &&
        a("div", { className: m.duration, children: Oe(duration) }),
      (h || !spoiler) &&
        a("div", {
          className: m.bottomOverlay,
          children: [
            ie
              ? a("button", {
                  className: m.muteButtonMobile,
                  onClick: U,
                  type: "button",
                  "aria-label": N ? "Unmute" : "Mute",
                  children: a(Z, { muted: N, volume: A }),
                })
              : a("div", {
                  className: `${m.volumeControl} ${re ? m.active : ""}`,
                  children: [
                    a("div", {
                      className: m.volumeSlider,
                      children: a(Le, {
                        value: N ? 0 : A,
                        onChange: le,
                        onDragStart: () => {
                          $.current = true;
                          X(true);
                        },
                        onDragEnd: () => {
                          X(false);

                          setTimeout(() => {
                            $.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    a("button", {
                      className: m.muteButton,
                      onClick: U,
                      type: "button",
                      "aria-label": N ? "Unmute" : "Mute",
                      children: a(Z, { muted: N, volume: A }),
                    }),
                  ],
                }),
            a("div", {
              ref: S,
              className: m.progressContainer,
              onPointerDown: ce,
              onClick: (t) => t.stopPropagation(),
              children: a("div", {
                ref: f,
                className: m.progressTrack,
                children: a("div", {
                  className: `${m.progressFill} ${se ? m.scrubbing : ""}`,
                  style: { width: `${oe}%` },
                }),
              }),
            }),
          ],
        }),
      _ && a("canvas", { ref: L, className: m.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
