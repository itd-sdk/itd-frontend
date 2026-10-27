import {
  a3,
  T as T_1,
  d as d_1,
  q_1 as A_1,
  h,
  q as q_1,
  u,
  a4,
} from "./index-BQxlThnW-portal20261026.js";
import { I, a } from "./IconPlay-DVzAkTqd-portal20261026.js";
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
    const t = new n.Error().stack;

    if (t) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[t] = "0f062b24-be1f-4c8c-82f5-5f4da0f276bf";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-0f062b24-be1f-4c8c-82f5-5f4da0f276bf";
    }
  } catch {}
})();

const T = a3((n) => ({
  activeAudioId: null,
  setActiveAudio: (t) => n({ activeAudioId: t }),
}));

const X = "Bnsp";
const q = "NJWM";
const O = "LAQ8";
const Q = "LNoV";
const U = "WXkt";
const V = "jfOS";
const Y = "aEfe";
const j = "JLrw";
const H = "FYHN";
const G = "JQmA";

const d = {
  voiceMessage: X,
  playButton: q,
  content: O,
  waveform: Q,
  dragging: U,
  bar: V,
  played: Y,
  info: j,
  time: H,
  duration: G,
};

const K = 45;
function Z(n) {
  let t = 0;
  for (let o = 0; o < n.length; o++) {
    const f = n.charCodeAt(o);
    t = (t << 5) - t + f;
    t = t & t;
  }
  return Math.abs(t);
}
function ee(n) {
  const t = [];
  let o = Z(n);
  for (let f = 0; f < K; f++) {
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

  const f = T_1(() => ee(src), [src]);

  const h = T((e) => e.activeAudioId);

  const m = T((e) => e.setActiveAudio);

  const [b, D] = d_1(true);
  const [E, p] = d_1(0);
  const [a, C] = d_1(duration);
  const [y, P] = d_1(false);
  const i = A_1(null);
  const I = A_1(null);
  const s = A_1(null);
  const g = h === o;

  h(() => {
    if (h !== o && i.current && !i.current.paused) {
      i.current.pause();
      s.current && (cancelAnimationFrame(s.current), (s.current = null));
    }
  }, [h, o]);

  h(() => {
    const e = new Audio(src);
    i.current = e;

    const r = () => {
      C(e.duration || duration);
      D(false);
    };

    const c = () => {
      p(0);

      if (s.current) {
        cancelAnimationFrame(s.current);
        s.current = null;
      }

      m(null);
    };

    const l = () => {
      D(false);
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

      if (T.getState().activeAudioId === o) {
        m(null);
      }
    };
  }, [src, duration, o, m]);

  const M = q_1(() => {
    if (i.current) {
      p(i.current.currentTime);
      s.current = requestAnimationFrame(M);
    }
  }, []);

  const S = q_1(() => {
    const i_current = i.current;

    if (i_current && !b) {
      if (g) {
        i_current.pause();
        s.current && (cancelAnimationFrame(s.current), (s.current = null));
        m(null);
      } else {
        m(o);
        i_current.play();
        M();
      }
    }
  }, [g, b, o, m, M]);

  const v = q_1(
    (e) => {
      if (!I.current || !a) {
        return 0;
      }
      const r = I.current.getBoundingClientRect();
      const e_clientX = e.clientX;
      return Math.max(0, Math.min(e_clientX - r.left, r.width)) / r.width;
    },
    [a]
  );

  const B = q_1(
    (e) => {
      const i_current = i.current;
      if (!i_current || !a || y) {
        return;
      }
      const c = v(e);
      i_current.currentTime = c * a;
      p(i_current.currentTime);
    },
    [a, y, v]
  );

  const R = q_1(
    (e) => {
      const i_current = i.current;
      if (!i_current || !a) {
        return;
      }
      P(true);
      const c = v(e);
      i_current.currentTime = c * a;
      p(i_current.currentTime);
    },
    [a, v]
  );

  h(() => {
    if (!y) {
      return;
    }

    const e = (c) => {
      const i_current = i.current;
      if (!i_current || !a) {
        return;
      }
      const x = v(c);
      i_current.currentTime = x * a;
      p(i_current.currentTime);
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
  const k = a > 0 ? E / a : 0;
  return u("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      u("button", {
        className: d.playButton,
        onClick: S,
        disabled: b,
        children: b
          ? u(a4, { size: 18 })
          : g
          ? u(I, { size: 18 })
          : u(a, { size: 18 }),
      }),
      u("div", {
        className: d.content,
        children: [
          u("div", {
            ref: I,
            className: `${d.waveform} ${y ? d.dragging : ""}`,
            onClick: B,
            onMouseDown: R,
            children: f.map((e, r) => {
              const l = (r + 0.5) / f.length <= k;
              return u(
                "div",
                {
                  className: `${d.bar} ${l ? d.played : ""}`,
                  style: { height: `${Math.max(4, e * 24)}px` },
                },
                r
              );
            }),
          }),
          u("div", {
            className: d.info,
            children: [
              u("span", { className: d.time, children: $(g || E > 0 ? E : a) }),
              (g || E > 0) &&
                u("span", { className: d.duration, children: ["/ ", $(a)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
