import {
  ah,
  A_1 as T_1,
  d as d_1,
  q_1 as A_1,
  y,
  q as q_1,
  a,
  an,
} from "./index-BAlLDjSl.js";
import { I, a as a_1 } from "./IconPlay-OFjM8Dz9.js";
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
    n.SENTRY_RELEASE = { id: "1.1.1" };
    const t = new n.Error().stack;

    if (t) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[t] = "ac2c835a-769f-441e-89e8-24d57a049c96";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-ac2c835a-769f-441e-89e8-24d57a049c96";
    }
  } catch {}
})();

const N = ah((n) => ({
  track: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 1,
  muted: false,
  activeAudioId: null,
  setActiveAudio: (t) => n({ activeAudioId: t }),
}));

const W = "ICtX";
const X = "UHN3";
const q = "QKcm";
const H = "KPic";
const O = "CSl6";
const Q = "B8RS";
const V = "Un7a";
const Y = "fw5I";
const j = "WHKk";
const G = "tExn";

const d = {
  voiceMessage: W,
  playButton: X,
  content: q,
  waveform: H,
  dragging: O,
  bar: Q,
  played: V,
  info: Y,
  time: j,
  duration: G,
};

const J = 45;
function Z(n) {
  let t = 0;
  for (let a = 0; a < n.length; a++) {
    const m = n.charCodeAt(a);
    t = (t << 5) - t + m;
    t = t & t;
  }
  return Math.abs(t);
}
function ee(n) {
  const t = [];
  let a = Z(n);
  for (let m = 0; m < J; m++) {
    a = (a * 9301 + 49297) % 233280;
    const h = 0.2 + (a / 233280) * 0.8;
    t.push(h);
  }
  return t;
}
function S(n) {
  if (!isFinite(n) || isNaN(n)) {
    return "0:00";
  }
  const t = Math.floor(n / 60);
  const a = Math.floor(n % 60);
  return `${t}:${a.toString().padStart(2, "0")}`;
}

export function VoiceMessage({ src, duration = 0 }) {
  const a = T_1(() => src, [src]);

  const m = T_1(() => ee(src), [src]);

  const h = N((e) => e.activeAudioId);

  const f = N((e) => e.setActiveAudio);

  const [E, P] = d_1(true);
  const [I, p] = d_1(0);
  const [o, $] = d_1(duration);
  const [y, D] = d_1(false);
  const i = A_1(null);
  const w = A_1(null);
  const s = A_1(null);
  const g = h === a;

  y(() => {
    if (h !== a && i.current && !i.current.paused) {
      i.current.pause();
      s.current && (cancelAnimationFrame(s.current), (s.current = null));
    }
  }, [h, a]);

  y(() => {
    const e = new Audio(src);
    i.current = e;

    const r = () => {
      $(e.duration || duration);
      P(false);
    };

    const c = () => {
      p(0);

      if (s.current) {
        cancelAnimationFrame(s.current);
        s.current = null;
      }

      f(null);
    };

    const l = () => {
      P(false);
    };

    e.addEventListener("loadedmetadata", r);
    e.addEventListener("ended", c);
    e.addEventListener("error", l);

    return () => {
      e.removeEventListener("loadedmetadata", r);
      e.removeEventListener("ended", c);
      e.removeEventListener("error", l);
      e.pause();
      i.current = null;

      if (s.current) {
        cancelAnimationFrame(s.current);
      }

      if (N.getState().activeAudioId === a) {
        f(null);
      }
    };
  }, [src, duration, a, f]);

  const M = q_1(() => {
    if (i.current) {
      p(i.current.currentTime);
      s.current = requestAnimationFrame(M);
    }
  }, []);

  const F = q_1(() => {
    const i_current = i.current;

    if (i_current && !E) {
      if (g) {
        i_current.pause();
        s.current && (cancelAnimationFrame(s.current), (s.current = null));
        f(null);
      } else {
        f(a);
        i_current.play();
        M();
      }
    }
  }, [g, E, a, f, M]);

  const v = q_1(
    (e) => {
      if (!w.current || !o) {
        return 0;
      }
      const r = w.current.getBoundingClientRect();
      const e_clientX = e.clientX;
      return Math.max(0, Math.min(e_clientX - r.left, r.width)) / r.width;
    },
    [o]
  );

  const R = q_1(
    (e) => {
      const i_current = i.current;
      if (!i_current || !o || y) {
        return;
      }
      const c = v(e);
      i_current.currentTime = c * o;
      p(i_current.currentTime);
    },
    [o, y, v]
  );

  const k = q_1(
    (e) => {
      const i_current = i.current;
      if (!i_current || !o) {
        return;
      }
      D(true);
      const c = v(e);
      i_current.currentTime = c * o;
      p(i_current.currentTime);
    },
    [o, v]
  );

  y(() => {
    if (!y) {
      return;
    }

    const e = (c) => {
      const i_current = i.current;
      if (!i_current || !o) {
        return;
      }
      const B = v(c);
      i_current.currentTime = B * o;
      p(i_current.currentTime);
    };

    const r = () => {
      D(false);
    };

    document.addEventListener("mousemove", e);
    document.addEventListener("mouseup", r);

    return () => {
      document.removeEventListener("mousemove", e);
      document.removeEventListener("mouseup", r);
    };
  }, [y, o, v]);
  const x = o > 0 ? I / o : 0;
  return a("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      a("button", {
        className: d.playButton,
        onClick: F,
        disabled: E,
        children: E
          ? a(an, { size: 18 })
          : g
          ? a(I, { size: 18 })
          : a(a_1, { size: 18 }),
      }),
      a("div", {
        className: d.content,
        children: [
          a("div", {
            ref: w,
            className: `${d.waveform} ${y ? d.dragging : ""}`,
            onClick: R,
            onMouseDown: k,
            children: m.map((e, r) => {
              const l = (r + 0.5) / m.length <= x;
              return a(
                "div",
                {
                  className: `${d.bar} ${l ? d.played : ""}`,
                  style: { height: `${Math.max(4, e * 24)}px` },
                },
                r
              );
            }),
          }),
          a("div", {
            className: d.info,
            children: [
              a("span", { className: d.time, children: S(g || I > 0 ? I : o) }),
              (g || I > 0) &&
                a("span", { className: d.duration, children: ["/ ", S(o)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
