import { a, A, q as q_1, d, C, ap, y } from "./index-DDCL-vHK.js";
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
    e.SENTRY_RELEASE = { id: "1.1.0" };
    const n = new e.Error().stack;

    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "7e51ab77-9cd0-433b-a2f9-87759d090ac9";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-7e51ab77-9cd0-433b-a2f9-87759d090ac9";
    }
  } catch {}
})();

const ee = ({ size = 20 }) =>
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

const te = ({ size = 20 }) =>
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

const ne = ({ size = 20 }) =>
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

const oe = "xzm1";
const re = "owQ9";
const se = "fPfm";
const ie = "HgVf";
const L = { wrapper: oe, track: re, fill: se, thumb: ie };
function le({ value, onChange, onDragStart, onDragEnd }) {
  const r = A(null);

  const M = q_1(
    (c) => {
      const r_current = r.current;
      if (!r_current) {
        return;
      }
      const s = r_current.getBoundingClientRect();
      const C = 1 - (c - s.top) / s.height;
      onChange(Math.max(0, Math.min(1, C)));
    },
    [onChange]
  );

  const d = q_1(
    (c) => {
      c.stopPropagation();
      c.preventDefault();
      onDragStart?.();
      M(c.clientY);

      const v = (C) => M(C.clientY);

      const s = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", v);
        document.removeEventListener("mouseup", s);
      };

      document.addEventListener("mousemove", v);
      document.addEventListener("mouseup", s);
    },
    [M, onDragStart, onDragEnd]
  );

  const m = 7;
  const y = 80;
  const f = m;
  const R = y - m;
  const b = f + value * (R - f);
  const A = `${b}px`;
  return onDragStart("div", {
    className: L.wrapper,
    onMouseDown: d,
    onClick: (c) => {
      c.stopPropagation();
      c.preventDefault();
    },
    children: onDragStart("div", {
      ref: r,
      className: L.track,
      children: [
        onDragStart("div", { className: L.fill, style: { height: A } }),
        onDragStart("div", { className: L.thumb, style: { bottom: `${b}px` } }),
      ],
    }),
  });
}
const ae = "J5YV";
const ce = "XluR";
const ue = "Q7ho";
const de = "EVXO";
const fe = "eZwX";
const me = "WqKN";
const ve = "Zi06";
const he = "ENIn";
const pe = "X79C";
const ge = "kxcC";
const be = "iG8s";

const l = {
  container: ae,
  hidden: ce,
  video: ue,
  revealing: de,
  canvas: fe,
  duration: me,
  volumeControl: ve,
  active: he,
  volumeSlider: pe,
  muteButton: ge,
  muteButtonMobile: be,
};

const O = parseFloat(localStorage.getItem("video-volume") ?? "1");
let k = true;
let H = isNaN(O) ? 1 : O;
const T = new Set();
const g = new Map();
let X = false;
let B = null;
function S() {
  const e = window.innerHeight / 2;
  let n = null;
  let a = Infinity;
  for (const [u] of g) {
    const r = u.getBoundingClientRect();

    if (Math.abs(r.top + r.height / 2 - e) < a) {
      a = Math.abs(r.top + r.height / 2 - e);
      n = u;
    }
  }
  for (const [u, r] of g) {
    if (u === n && !r.userPaused) {
      if (r.video.paused) {
        r.video.play().catch(() => {});
      }
    } else if (!r.video.paused) {
      r.video.pause();
    }
  }
}
function Y() {
  if (B == null) {
    B = requestAnimationFrame(() => {
      B = null;
      S();
    });
  }
}
function D() {
  const e = g.size > 1;

  if (e !== X) {
    e
      ? window.addEventListener("scroll", Y, { passive: true })
      : window.removeEventListener("scroll", Y);

    X = e;
  }
}
function $(e) {
  k = e;
  localStorage.setItem("video-muted", String(e));

  T.forEach((n) => n(e));
}
function we(e) {
  H = e;
  localStorage.setItem("video-volume", String(e));
}
function ke(e) {
  const n = Math.floor(e / 60);
  const a = e % 60;
  return `${n}:${a.toString().padStart(2, "0")}`;
}
function q({ muted, volume }) {
  if (muted || volume === 0) {
    return a(te, {});
  }

  if (volume < 0.7) {
    return a(ee, {});
  }

  return a(ne, {});
}

export function PostMediaVideo({
  src,
  spoiler = false,
  width,
  height,
  duration,
  className = "",
}) {
  const d = A(null);
  const m = A(null);
  const y = A(null);
  const [f, R] = d(!spoiler);
  const [b, A] = d(false);
  const [c, v] = d(false);
  const [s, C] = d(k);
  const [E, G] = d(H);
  const [U, W] = d(false);
  const P = A(false);
  const F = C();

  const { resetOpacity } = ap(y, m, {
    isVisible: c && !f && spoiler,
    isRevealing: b,
    onRevealComplete: () => R(true),
  });

  y(() => {
    const o = (i) => {
      C(i);

      if (d.current) {
        d.current.muted = i;
      }
    };
    T.add(o);

    return () => {
      T.delete(o);
    };
  }, []);

  y(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const i = new IntersectionObserver(
      (V) => {
        V.forEach((h) => {
          v(h.isIntersecting);
          const d_current = d.current;

          if (d_current) {
            if (h.isIntersecting) {
              d_current.currentTime = 0;
              d_current.muted = k;
              d_current.volume = H;
              g.set(m_current, { video: d_current, userPaused: false });
              D();
              S();
            } else {
              g.delete(m_current);
              D();
              S();
              d_current.pause();
              d_current.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    i.observe(m_current);

    return () => {
      i.disconnect();
      g.delete(m_current);
      D();
      S();
    };
  }, [f]);

  const Z = (o) => {
    o.stopPropagation();

    if (P.current) {
      return;
    }

    if (!f && !b && spoiler) {
      A(true);
      resetOpacity();
      return;
    }
    const d_current = d.current;
    const m_current = m.current;
    if (!d_current || !m_current) {
      return;
    }
    const h = g.get(m_current);

    if (d_current.paused) {
      h && (h.userPaused = false);
      d_current.play().catch(() => {});
    } else {
      h && (h.userPaused = true);
      d_current.pause();
    }
  };

  const _ = q_1((o) => {
    o.stopPropagation();
    o.preventDefault();
    $(!k);
  }, []);

  const z = q_1((o) => {
    G(o);
    we(o);

    if (d.current) {
      d.current.volume = o;
    }

    if (o > 0 && k) {
      $(false);
    } else if (o === 0 && !k) {
      $(true);
    }
  }, []);

  const x = !f && spoiler;
  return width("div", {
    ref: m,
    className: `${l.container} ${className} ${x ? l.hidden : ""} ${
      b ? l.revealing : ""
    }`,
    onClick: Z,
    children: [
      width("video", {
        ref: d,
        src: src,
        preload: "metadata",
        playsInline: true,
        muted: s,
        loop: true,
        className: l.video,
        width: width,
        height: height,
      }),
      (f || !spoiler) &&
        (F
          ? width("button", {
              className: l.muteButtonMobile,
              onClick: _,
              type: "button",
              "aria-label": s ? "Unmute" : "Mute",
              children: width(q, { muted: s, volume: E }),
            })
          : width("div", {
              className: `${l.volumeControl} ${U ? l.active : ""}`,
              children: [
                width("div", {
                  className: l.volumeSlider,
                  children: width(le, {
                    value: s ? 0 : E,
                    onChange: z,
                    onDragStart: () => {
                      P.current = true;
                      W(true);
                    },
                    onDragEnd: () => {
                      W(false);

                      setTimeout(() => {
                        P.current = false;
                      }, 0);
                    },
                  }),
                }),
                width("button", {
                  className: l.muteButton,
                  onClick: _,
                  type: "button",
                  "aria-label": s ? "Unmute" : "Mute",
                  children: width(q, { muted: s, volume: E }),
                }),
              ],
            })),
      duration != null &&
        x &&
        width("div", { className: l.duration, children: ke(duration) }),
      x && width("canvas", { ref: y, className: l.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
