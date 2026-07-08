import {
  ah,
  T,
  d as d_1,
  q_1 as A_1,
  y,
  a_1 as q_1,
  a,
  ao,
} from "./index-BewGW5_v.js";
import { d_1 as d_1_1, a as a_1 } from "./IconPlay-DHRavKjC.js";
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
      n._sentryDebugIds[t] = "d243ef78-7760-431d-8798-2d51d156c086";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-d243ef78-7760-431d-8798-2d51d156c086";
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

const G = "HZyt";
const H = "iAAH";
const U = "Kfvq";
const V = "tgBf";
const X = "QYpW";
const Y = "WRGv";
const K = "DBI8";
const O = "a7Ga";
const Q = "fB36";
const Z = "VAzT";

const d = {
  voiceMessage: G,
  playButton: H,
  content: U,
  waveform: V,
  dragging: X,
  bar: Y,
  played: K,
  info: O,
  time: Q,
  duration: Z,
};

const j = 45;
function J(n) {
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
  let o = J(n);
  for (let m = 0; m < j; m++) {
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
  const o = T(() => src, [src]);

  const m = T(() => ee(src), [src]);

  const h = D((e) => e.activeAudioId);

  const f = D((e) => e.setActiveAudio);

  const [b, N] = d_1(true);
  const [E, p] = d_1(0);
  const [a, C] = d_1(duration);
  const [y, P] = d_1(false);
  const i = A_1(null);
  const T = A_1(null);
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

  const F = q_1(() => {
    const i_current = i.current;

    if (i_current && !b) {
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
  }, [g, b, o, f, M]);

  const v = q_1(
    (e) => {
      if (!T.current || !a) {
        return 0;
      }
      const r = T.current.getBoundingClientRect();
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

  const S = q_1(
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
            onMouseDown: S,
            children: m.map((e, r) => {
              const l = (r + 0.5) / m.length <= k;
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
              a("span", { className: d.time, children: $(g || E > 0 ? E : a) }),
              (g || E > 0) &&
                a("span", { className: d.duration, children: ["/ ", $(a)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
