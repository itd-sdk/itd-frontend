import {
  ak,
  T,
  d as d_1,
  q_1 as A_1,
  y,
  q as q_1,
  u,
  as,
} from "./index-B9FitUXy.js";
import { I, a } from "./IconPlay-BwitoxO4.js";
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
      n._sentryDebugIds[t] = "5e59e985-a0f9-44de-96e8-5b957c9cce18";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-5e59e985-a0f9-44de-96e8-5b957c9cce18";
    }
  } catch {}
})();

const N = ak((n) => ({
  activeAudioId: null,
  setActiveAudio: (t) => n({ activeAudioId: t }),
}));

const q = "Qdwu";
const H = "olnT";
const O = "vIlB";
const Q = "g3uU";
const V = "Oahv";
const X = "TcTI";
const G = "g0N6";
const Y = "voQv";
const j = "tHsH";
const J = "VGPW";

const d = {
  voiceMessage: q,
  playButton: H,
  content: O,
  waveform: Q,
  dragging: V,
  bar: X,
  played: G,
  info: Y,
  time: j,
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
function C(n) {
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

  const [b, D] = d_1(true);
  const [I, p] = d_1(0);
  const [a, F] = d_1(duration);
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
      F(e.duration || duration);
      D(false);
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

      if (N.getState().activeAudioId === o) {
        f(null);
      }
    };
  }, [src, duration, o, f]);

  const w = q_1(() => {
    if (i.current) {
      p(i.current.currentTime);
      s.current = requestAnimationFrame(w);
    }
  }, []);

  const B = q_1(() => {
    const i_current = i.current;

    if (i_current && !b) {
      if (g) {
        i_current.pause();
        s.current && (cancelAnimationFrame(s.current), (s.current = null));
        f(null);
      } else {
        f(o);
        i_current.play();
        w();
      }
    }
  }, [g, b, o, f, w]);

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
  const k = a > 0 ? I / a : 0;
  return u("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      u("button", {
        className: d.playButton,
        onClick: B,
        disabled: b,
        children: b
          ? u(as, { size: 18 })
          : g
          ? u(I, { size: 18 })
          : u(a, { size: 18 }),
      }),
      u("div", {
        className: d.content,
        children: [
          u("div", {
            ref: T,
            className: `${d.waveform} ${y ? d.dragging : ""}`,
            onClick: R,
            onMouseDown: S,
            children: m.map((e, r) => {
              const l = (r + 0.5) / m.length <= k;
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
              u("span", { className: d.time, children: C(g || I > 0 ? I : a) }),
              (g || I > 0) &&
                u("span", { className: d.duration, children: ["/ ", C(a)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
