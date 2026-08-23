import {
  ak,
  T,
  d as d_1,
  q_1 as A_1,
  y,
  q as q_1,
  u,
  as,
} from "./index-pEgBAsWz.js";
import { d_1 as d_1_1, a } from "./IconPlay-BkGkbvM5.js";
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
      n._sentryDebugIds[t] = "f0baac17-cdcb-4fe4-8fe4-c13a4e1b9aae";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-f0baac17-cdcb-4fe4-8fe4-c13a4e1b9aae";
    }
  } catch {}
})();

const N = ak((n) => ({
  activeAudioId: null,
  setActiveAudio: (t) => n({ activeAudioId: t }),
}));

const q = "FnIm";
const V = "sb3U";
const X = "aNV9";
const H = "Ak4u";
const O = "QNar";
const Q = "WxAM";
const Y = "uDna";
const j = "d8zT";
const G = "zzMH";
const J = "BAlx";

const d = {
  voiceMessage: q,
  playButton: V,
  content: X,
  waveform: H,
  dragging: O,
  bar: Q,
  played: Y,
  info: j,
  time: G,
  duration: J,
};

const K = 45;
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
  for (let m = 0; m < K; m++) {
    a = (a * 9301 + 49297) % 233280;
    const h = 0.2 + (a / 233280) * 0.8;
    t.push(h);
  }
  return t;
}
function $(n) {
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

  const h = N((e) => e.activeAudioId);

  const f = N((e) => e.setActiveAudio);

  const [b, D] = d_1(true);
  const [E, p] = d_1(0);
  const [o, x] = d_1(duration);
  const [y, P] = d_1(false);
  const i = A_1(null);
  const M = A_1(null);
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
      x(e.duration || duration);
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

      if (N.getState().activeAudioId === a) {
        f(null);
      }
    };
  }, [src, duration, a, f]);

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
        f(a);
        i_current.play();
        T();
      }
    }
  }, [g, b, a, f, T]);

  const v = q_1(
    (e) => {
      if (!M.current || !o) {
        return 0;
      }
      const r = M.current.getBoundingClientRect();
      const e_clientX = e.clientX;
      return Math.max(0, Math.min(e_clientX - r.left, r.width)) / r.width;
    },
    [o]
  );

  const k = q_1(
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

  const B = q_1(
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
      const S = v(c);
      i_current.currentTime = S * o;
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
  const R = o > 0 ? E / o : 0;
  return u("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      u("button", {
        className: d.playButton,
        onClick: C,
        disabled: b,
        children: b
          ? u(as, { size: 18 })
          : g
          ? u(d_1_1, { size: 18 })
          : u(a, { size: 18 }),
      }),
      u("div", {
        className: d.content,
        children: [
          u("div", {
            ref: M,
            className: `${d.waveform} ${y ? d.dragging : ""}`,
            onClick: k,
            onMouseDown: B,
            children: m.map((e, r) => {
              const l = (r + 0.5) / m.length <= R;
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
              u("span", { className: d.time, children: $(g || E > 0 ? E : o) }),
              (g || E > 0) &&
                u("span", { className: d.duration, children: ["/ ", $(o)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
