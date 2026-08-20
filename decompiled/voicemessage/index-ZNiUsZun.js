import {
  ak,
  A as T_1,
  d as d_1,
  A,
  y,
  I as q_1,
  u,
  as,
} from "./index-DDTOXJaD.js";
import { I, a } from "./IconPlay-CttELGEq.js";
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
      n._sentryDebugIds[t] = "b7b61e51-08a7-4640-9259-cde2420889be";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-b7b61e51-08a7-4640-9259-cde2420889be";
    }
  } catch {}
})();

const D = ak((n) => ({
  activeAudioId: null,
  setActiveAudio: (t) => n({ activeAudioId: t }),
}));

const Q = "TvQa";
const U = "RSzr";
const W = "oLj8";
const j = "LRq4";
const O = "uX5r";
const V = "e7oe";
const Y = "P9vb";
const G = "mIQv";
const H = "IS20";
const J = "gaDh";

const d = {
  voiceMessage: Q,
  playButton: U,
  content: W,
  waveform: j,
  dragging: O,
  bar: V,
  played: Y,
  info: G,
  time: H,
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
  const o = T_1(() => src, [src]);

  const m = T_1(() => ee(src), [src]);

  const h = D((e) => e.activeAudioId);

  const f = D((e) => e.setActiveAudio);

  const [A, N] = d_1(true);
  const [I, p] = d_1(0);
  const [a, $] = d_1(duration);
  const [y, P] = d_1(false);
  const i = A(null);
  const L = A(null);
  const s = A(null);
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
      N(false);
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
      N(false);
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

      if (D.getState().activeAudioId === o) {
        f(null);
      }
    };
  }, [src, duration, o, f]);

  const M = q_1(() => {
    if (i.current) {
      p(i.current.currentTime);
      s.current = requestAnimationFrame(M);
    }
  }, []);

  const C = q_1(() => {
    const i_current = i.current;

    if (i_current && !A) {
      if (g) {
        i_current.pause();
        s.current && (cancelAnimationFrame(s.current), (s.current = null));
        f(null);
      } else {
        f(o);
        i_current.play();
        M();
      }
    }
  }, [g, A, o, f, M]);

  const v = q_1(
    (e) => {
      if (!L.current || !a) {
        return 0;
      }
      const r = L.current.getBoundingClientRect();
      const e_clientX = e.clientX;
      return Math.max(0, Math.min(e_clientX - r.left, r.width)) / r.width;
    },
    [a]
  );

  const F = q_1(
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
      P(true);
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
  return u("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      u("button", {
        className: d.playButton,
        onClick: C,
        disabled: A,
        children: A
          ? u(as, { size: 18 })
          : g
          ? u(I, { size: 18 })
          : u(a, { size: 18 }),
      }),
      u("div", {
        className: d.content,
        children: [
          u("div", {
            ref: L,
            className: `${d.waveform} ${y ? d.dragging : ""}`,
            onClick: F,
            onMouseDown: k,
            children: m.map((e, r) => {
              const l = (r + 0.5) / m.length <= x;
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
              u("span", { className: d.time, children: S(g || I > 0 ? I : a) }),
              (g || I > 0) &&
                u("span", { className: d.duration, children: ["/ ", S(a)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
