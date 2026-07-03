import {
  ah,
  T,
  d as d_1,
  q_1 as A_1,
  y,
  q as q_1,
  a,
  ao,
} from "./index-DuQT229k.js";
import { d_1 as d_1_1, a as a_1 } from "./IconPlay-D_saP_Lm.js";
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
      n._sentryDebugIds[t] = "af2051be-c511-43ae-8437-5a873089b5d5";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-af2051be-c511-43ae-8437-5a873089b5d5";
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

const X = "aFoo";
const q = "TrF9";
const Q = "eFuV";
const V = "vSXQ";
const Y = "fWiP";
const j = "YH1N";
const H = "ewje";
const O = "MflU";
const G = "S9Qu";
const J = "zUU7";

const d = {
  voiceMessage: X,
  playButton: q,
  content: Q,
  waveform: V,
  dragging: Y,
  bar: j,
  played: H,
  info: O,
  time: G,
  duration: J,
};

const K = 45;
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
  for (let m = 0; m < K; m++) {
    o = (o * 9301 + 49297) % 233280;
    const h = 0.2 + (o / 233280) * 0.8;
    t.push(h);
  }
  return t;
}
function S(n) {
  if (!isFinite(n) || isNaN(n)) {
    return "0:00";
  }
  const t = Math.floor(n / 60);
  const o = Math.floor(n % 60);
  return `${t}:${o.toString().padStart(2, "0")}`;
}

export function VoiceMessage({ src, duration = 0 }) {
  const o = T(() => src, [src]);

  const m = T(() => ee(src), [src]);

  const h = N((e) => e.activeAudioId);

  const f = N((e) => e.setActiveAudio);

  const [b, P] = d_1(true);
  const [E, p] = d_1(0);
  const [a, $] = d_1(duration);
  const [y, D] = d_1(false);
  const i = A_1(null);
  const M = A_1(null);
  const s = A_1(null);
  const g = h === o;

  y(() => {
    if (h !== o && i.current && !i.current.paused) {
      i.current.pause();
      s.current && (cancelAnimationFrame(s.current), (s.current = null));
    }
  }, [h, o]);

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

      if (N.getState().activeAudioId === o) {
        f(null);
      }
    };
  }, [src, duration, o, f]);

  const T = q_1(() => {
    if (i.current) {
      p(i.current.currentTime);
      s.current = requestAnimationFrame(T);
    }
  }, []);

  const C = q_1(() => {
    const i_current = i.current;

    if (i_current && !b) {
      if (g) {
        i_current.pause();
        s.current && (cancelAnimationFrame(s.current), (s.current = null));
        f(null);
      } else {
        f(o);
        i_current.play();
        T();
      }
    }
  }, [g, b, o, f, T]);

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

  const R = q_1(
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

  const k = q_1(
    (e) => {
      const i_current = i.current;
      if (!i_current || !a) {
        return;
      }
      D(true);
      const c = v(e);
      i_current.currentTime = c * a;
      p(i_current.currentTime);
    },
    [a, v]
  );

  y(() => {
    if (!y) {
      return;
    }

    const e = (c) => {
      const i_current = i.current;
      if (!i_current || !a) {
        return;
      }
      const B = v(c);
      i_current.currentTime = B * a;
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
  }, [y, a, v]);
  const x = a > 0 ? E / a : 0;
  return a("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      a("button", {
        className: d.playButton,
        onClick: C,
        disabled: b,
        children: b
          ? a(ao, { size: 18 })
          : g
          ? a(d_1_1, { size: 18 })
          : a(a_1, { size: 18 }),
      }),
      a("div", {
        className: d.content,
        children: [
          a("div", {
            ref: M,
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
              a("span", { className: d.time, children: S(g || E > 0 ? E : a) }),
              (g || E > 0) &&
                a("span", { className: d.duration, children: ["/ ", S(a)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
