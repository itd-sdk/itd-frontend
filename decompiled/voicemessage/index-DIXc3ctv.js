import {
  ak,
  A as T_1,
  d as d_1,
  A,
  y,
  q as q_1,
  u,
  as,
} from "./index-DBLtLuBZ.js";
import { I, a } from "./IconPlay-B-J82sYi.js";
(() => {
  try {
    const t =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "1.1.2" };
    const n = new t.Error().stack;

    if (n) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[n] = "d1b0d346-e802-4b3f-a34e-61ab90ea70ff";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-d1b0d346-e802-4b3f-a34e-61ab90ea70ff";
    }
  } catch {}
})();

const N = ak((t) => ({
  activeAudioId: null,
  setActiveAudio: (n) => t({ activeAudioId: n }),
}));

const q = "iCrV";
const O = "rL2f";
const W = "S3tl";
const X = "Mgea";
const j = "uCGt";
const G = "Nt0V";
const J = "So7T";
const Y = "jMUx";
const H = "R8JO";
const K = "a6kf";

const d = {
  voiceMessage: q,
  playButton: O,
  content: W,
  waveform: X,
  dragging: j,
  bar: G,
  played: J,
  info: Y,
  time: H,
  duration: K,
};

const Q = 45;
function Z(t) {
  let n = 0;
  for (let o = 0; o < t.length; o++) {
    const m = t.charCodeAt(o);
    n = (n << 5) - n + m;
    n = n & n;
  }
  return Math.abs(n);
}
function ee(t) {
  const n = [];
  let o = Z(t);
  for (let m = 0; m < Q; m++) {
    o = (o * 9301 + 49297) % 233280;
    const h = 0.2 + (o / 233280) * 0.8;
    n.push(h);
  }
  return n;
}
function S(t) {
  if (!isFinite(t) || isNaN(t)) {
    return "0:00";
  }
  const n = Math.floor(t / 60);
  const o = Math.floor(t % 60);
  return `${n}:${o.toString().padStart(2, "0")}`;
}

export function VoiceMessage({ src, duration = 0 }) {
  const o = T_1(() => src, [src]);

  const m = T_1(() => ee(src), [src]);

  const h = N((e) => e.activeAudioId);

  const f = N((e) => e.setActiveAudio);

  const [A, D] = d_1(true);
  const [E, p] = d_1(0);
  const [a, $] = d_1(duration);
  const [y, C] = d_1(false);
  const i = A(null);
  const I = A(null);
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

  const L = q_1(() => {
    if (i.current) {
      p(i.current.currentTime);
      s.current = requestAnimationFrame(L);
    }
  }, []);

  const F = q_1(() => {
    const i_current = i.current;

    if (i_current && !A) {
      if (g) {
        i_current.pause();
        s.current && (cancelAnimationFrame(s.current), (s.current = null));
        f(null);
      } else {
        f(o);
        i_current.play();
        L();
      }
    }
  }, [g, A, o, f, L]);

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
      C(true);
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
      C(false);
    };

    document.addEventListener("mousemove", e);
    document.addEventListener("mouseup", r);

    return () => {
      document.removeEventListener("mousemove", e);
      document.removeEventListener("mouseup", r);
    };
  }, [y, a, v]);
  const x = a > 0 ? E / a : 0;
  return u("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      u("button", {
        className: d.playButton,
        onClick: F,
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
            ref: I,
            className: `${d.waveform} ${y ? d.dragging : ""}`,
            onClick: R,
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
              u("span", { className: d.time, children: S(g || E > 0 ? E : a) }),
              (g || E > 0) &&
                u("span", { className: d.duration, children: ["/ ", S(a)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
