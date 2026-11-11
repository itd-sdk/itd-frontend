import {
  ar,
  h as T_1,
  d as d_1,
  A,
  h,
  aD as q_1,
  u,
  aD,
} from "./index-dnACTU3c.js";
import { d_1 as d_1_1, a } from "./IconPlay-C5j1JZ6K.js";
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
      n._sentryDebugIds[t] = "5727d036-b6ce-471d-a0bb-3ad79fc8ae27";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-5727d036-b6ce-471d-a0bb-3ad79fc8ae27";
    }
  } catch {}
})();

const D = ar((n) => ({
  activeAudioId: null,
  setActiveAudio: (t) => n({ activeAudioId: t }),
}));

const O = "HJrJ";
const H = "HSqL";
const U = "pjNm";
const W = "YCqp";
const X = "Bk3c";
const Y = "bOyJ";
const j = "BzGO";
const G = "ndPC";
const V = "dDDf";
const K = "wc11";

const d = {
  voiceMessage: O,
  playButton: H,
  content: U,
  waveform: W,
  dragging: X,
  bar: Y,
  played: j,
  info: G,
  time: V,
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

  const h = D((e) => e.activeAudioId);

  const f = D((e) => e.setActiveAudio);

  const [A, N] = d_1(true);
  const [E, p] = d_1(0);
  const [a, B] = d_1(duration);
  const [y, P] = d_1(false);
  const i = A(null);
  const w = A(null);
  const s = A(null);
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
      B(e.duration || duration);
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
      if (!w.current || !a) {
        return 0;
      }
      const r = w.current.getBoundingClientRect();
      const e_clientX = e.clientX;
      return Math.max(0, Math.min(e_clientX - r.left, r.width)) / r.width;
    },
    [a]
  );

  const S = q_1(
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
        onClick: F,
        disabled: A,
        children: A
          ? u(aD, { size: 18 })
          : g
          ? u(d_1_1, { size: 18 })
          : u(a, { size: 18 }),
      }),
      u("div", {
        className: d.content,
        children: [
          u("div", {
            ref: w,
            className: `${d.waveform} ${y ? d.dragging : ""}`,
            onClick: S,
            onMouseDown: R,
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
