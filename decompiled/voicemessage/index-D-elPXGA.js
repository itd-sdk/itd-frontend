import {
  ah,
  y as T_1,
  d as d_1,
  q_1 as A_1,
  y,
  q as q_1,
  a,
  ar,
} from "./index-BCnJB3wz.js";
import { I, a as a_1 } from "./IconPlay-B0iljPxh.js";
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
      n._sentryDebugIds[t] = "f1de6e62-3bc8-466c-98c7-8df6d3dccd7c";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-f1de6e62-3bc8-466c-98c7-8df6d3dccd7c";
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

const q = "dops";
const H = "shDf";
const U = "tkNb";
const Y = "WMwH";
const j = "RcHI";
const J = "fL04";
const O = "IjXd";
const V = "y53o";
const G = "vzYa";
const K = "JWF8";

const d = {
  voiceMessage: q,
  playButton: H,
  content: U,
  waveform: Y,
  dragging: j,
  bar: J,
  played: O,
  info: V,
  time: G,
  duration: K,
};

const Q = 45;
function Z(n) {
  let t = 0;
  for (let o = 0; o < n.length; o++) {
    const m = n.charCodeAt(o);
    t = (t << 5) - t + m;
    t = t & t;
  }
  return Math.abs(t);
}
function ee(n) {
  const t = [];
  let o = Z(n);
  for (let m = 0; m < Q; m++) {
    o = (o * 9301 + 49297) % 233280;
    const h = 0.2 + (o / 233280) * 0.8;
    t.push(h);
  }
  return t;
}
function $(n) {
  if (!isFinite(n) || isNaN(n)) {
    return "0:00";
  }
  const t = Math.floor(n / 60);
  const o = Math.floor(n % 60);
  return `${t}:${o.toString().padStart(2, "0")}`;
}

export function VoiceMessage({ src, duration = 0 }) {
  const o = T_1(() => src, [src]);

  const m = T_1(() => ee(src), [src]);

  const h = N((e) => e.activeAudioId);

  const f = N((e) => e.setActiveAudio);

  const [b, D] = d_1(true);
  const [I, p] = d_1(0);
  const [a, C] = d_1(duration);
  const [y, P] = d_1(false);
  const c = A_1(null);
  const M = A_1(null);
  const s = A_1(null);
  const g = h === o;

  y(() => {
    if (h !== o && c.current && !c.current.paused) {
      c.current.pause();
      s.current && (cancelAnimationFrame(s.current), (s.current = null));
    }
  }, [h, o]);

  y(() => {
    const e = new Audio(src);
    c.current = e;

    const r = () => {
      C(e.duration || duration);
      D(false);
    };

    const i = () => {
      p(0);

      if (s.current) {
        cancelAnimationFrame(s.current);
        s.current = null;
      }

      f(null);
    };

    const l = () => {
      D(false);
    };

    e.addEventListener("loadedmetadata", r);
    e.addEventListener("ended", i);
    e.addEventListener("error", l);

    return () => {
      e.removeEventListener("loadedmetadata", r);
      e.removeEventListener("ended", i);
      e.removeEventListener("error", l);
      e.pause();
      c.current = null;

      if (s.current) {
        cancelAnimationFrame(s.current);
      }

      if (N.getState().activeAudioId === o) {
        f(null);
      }
    };
  }, [src, duration, o, f]);

  const w = q_1(() => {
    if (c.current) {
      p(c.current.currentTime);
      s.current = requestAnimationFrame(w);
    }
  }, []);

  const R = q_1(() => {
    const c_current = c.current;

    if (c_current && !b) {
      if (g) {
        c_current.pause();
        s.current && (cancelAnimationFrame(s.current), (s.current = null));
        f(null);
      } else {
        f(o);
        c_current.play();
        w();
      }
    }
  }, [g, b, o, f, w]);

  const v = q_1(
    (e) => {
      if (!M.current || !a) {
        return 0;
      }
      const r = M.current.getBoundingClientRect();
      const e_clientX = e.clientX;
      return Math.max(0, Math.min(e_clientX - r.left, r.width)) / r.width;
    },
    [a]
  );

  const k = q_1(
    (e) => {
      const c_current = c.current;
      if (!c_current || !a || y) {
        return;
      }
      const i = v(e);
      c_current.currentTime = i * a;
      p(c_current.currentTime);
    },
    [a, y, v]
  );

  const S = q_1(
    (e) => {
      const c_current = c.current;
      if (!c_current || !a) {
        return;
      }
      P(true);
      const i = v(e);
      c_current.currentTime = i * a;
      p(c_current.currentTime);
    },
    [a, v]
  );

  y(() => {
    if (!y) {
      return;
    }

    const e = (i) => {
      const c_current = c.current;
      if (!c_current || !a) {
        return;
      }
      const B = v(i);
      c_current.currentTime = B * a;
      p(c_current.currentTime);
    };

    const r = () => {
      P(false);
    };

    document.addEventListener("mousemove", e);
    document.addEventListener("mouseup", r);

    return () => {
      document.removeEventListener("mousemove", e);
      document.removeEventListener("mouseup", r);
    };
  }, [y, a, v]);
  const x = a > 0 ? I / a : 0;
  return a("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      a("button", {
        className: d.playButton,
        onClick: R,
        disabled: b,
        children: b
          ? a(ar, { size: 18 })
          : g
          ? a(I, { size: 18 })
          : a(a_1, { size: 18 }),
      }),
      a("div", {
        className: d.content,
        children: [
          a("div", {
            ref: M,
            className: `${d.waveform} ${y ? d.dragging : ""}`,
            onClick: k,
            onMouseDown: S,
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
              a("span", { className: d.time, children: $(g || I > 0 ? I : a) }),
              (g || I > 0) &&
                a("span", { className: d.duration, children: ["/ ", $(a)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
