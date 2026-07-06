import {
  ah,
  T,
  d as d_1,
  q_1 as A_1,
  y,
  d_1_1 as q_1,
  a,
  ao,
} from "./index-CFv_0Hh6.js";
import { d_1 as d_1_1, a as a_1 } from "./IconPlay-DNSvFYwZ.js";
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
      n._sentryDebugIds[t] = "eeba975a-4fa4-411a-8221-0d6ff36138b0";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-eeba975a-4fa4-411a-8221-0d6ff36138b0";
    }
  } catch {}
})();

const D = ah((n) => ({
  track: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 1,
  muted: false,
  activeAudioId: null,
  setActiveAudio: (t) => n({ activeAudioId: t }),
}));

const O = "fRsc";
const W = "ydE4";
const X = "qEq3";
const G = "uprK";
const K = "tkkO";
const V = "zuuD";
const Y = "UzL4";
const Z = "uEgZ";
const j = "aTUG";
const H = "extr";

const d = {
  voiceMessage: O,
  playButton: W,
  content: X,
  waveform: G,
  dragging: K,
  bar: V,
  played: Y,
  info: Z,
  time: j,
  duration: H,
};

const J = 45;
function Q(n) {
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
  let a = Q(n);
  for (let m = 0; m < J; m++) {
    a = (a * 9301 + 49297) % 233280;
    const h = 0.2 + (a / 233280) * 0.8;
    t.push(h);
  }
  return t;
}
function k(n) {
  if (!isFinite(n) || isNaN(n)) {
    return "0:00";
  }
  const t = Math.floor(n / 60);
  const a = Math.floor(n % 60);
  return `${t}:${a.toString().padStart(2, "0")}`;
}

export function VoiceMessage({ src, duration = 0 }) {
  const a = T(() => src, [src]);

  const m = T(() => ee(src), [src]);

  const h = D((e) => e.activeAudioId);

  const f = D((e) => e.setActiveAudio);

  const [b, N] = d_1(true);
  const [E, p] = d_1(0);
  const [o, C] = d_1(duration);
  const [y, P] = d_1(false);
  const i = A_1(null);
  const T = A_1(null);
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
      C(e.duration || duration);
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

      if (D.getState().activeAudioId === a) {
        f(null);
      }
    };
  }, [src, duration, a, f]);

  const L = q_1(() => {
    if (i.current) {
      p(i.current.currentTime);
      s.current = requestAnimationFrame(L);
    }
  }, []);

  const F = q_1(() => {
    const i_current = i.current;

    if (i_current && !b) {
      if (g) {
        i_current.pause();
        s.current && (cancelAnimationFrame(s.current), (s.current = null));
        f(null);
      } else {
        f(a);
        i_current.play();
        L();
      }
    }
  }, [g, b, a, f, L]);

  const v = q_1(
    (e) => {
      if (!T.current || !o) {
        return 0;
      }
      const r = T.current.getBoundingClientRect();
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

  const x = q_1(
    (e) => {
      const i_current = i.current;
      if (!i_current || !o) {
        return;
      }
      P(true);
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
      P(false);
    };

    document.addEventListener("mousemove", e);
    document.addEventListener("mouseup", r);

    return () => {
      document.removeEventListener("mousemove", e);
      document.removeEventListener("mouseup", r);
    };
  }, [y, o, v]);
  const S = o > 0 ? E / o : 0;
  return a("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      a("button", {
        className: d.playButton,
        onClick: F,
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
            ref: T,
            className: `${d.waveform} ${y ? d.dragging : ""}`,
            onClick: R,
            onMouseDown: x,
            children: m.map((e, r) => {
              const l = (r + 0.5) / m.length <= S;
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
              a("span", { className: d.time, children: k(g || E > 0 ? E : o) }),
              (g || E > 0) &&
                a("span", { className: d.duration, children: ["/ ", k(o)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
