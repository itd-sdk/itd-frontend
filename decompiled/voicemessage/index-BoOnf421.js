import { _, T, d as d_1, A, h, q as q_1, u, a2 } from "./index-CR_1arh8.js";
import { d_1 as d_1_1, a } from "./IconPlay-BsLzOCWp.js";
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
      t._sentryDebugIds[n] = "f1c2fa97-b692-4980-a9ad-db8c9891f492";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-f1c2fa97-b692-4980-a9ad-db8c9891f492";
    }
  } catch {}
})();

const D = _((t) => ({
  activeAudioId: null,
  setActiveAudio: (n) => t({ activeAudioId: n }),
}));

const U = "rtsD";
const j = "zmWU";
const q = "hBzQ";
const J = "WJQt";
const Q = "MEX4";
const Z = "LmlZ";
const H = "JFh9";
const O = "TjTi";
const V = "uZXb";
const Y = "tHjx";

const d = {
  voiceMessage: U,
  playButton: j,
  content: q,
  waveform: J,
  dragging: Q,
  bar: Z,
  played: H,
  info: O,
  time: V,
  duration: Y,
};

const G = 45;
function K(t) {
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
  let o = K(t);
  for (let m = 0; m < G; m++) {
    o = (o * 9301 + 49297) % 233280;
    const h = 0.2 + (o / 233280) * 0.8;
    n.push(h);
  }
  return n;
}
function $(t) {
  if (!isFinite(t) || isNaN(t)) {
    return "0:00";
  }
  const n = Math.floor(t / 60);
  const o = Math.floor(t % 60);
  return `${n}:${o.toString().padStart(2, "0")}`;
}

export function VoiceMessage({ src, duration = 0 }) {
  const o = T(() => src, [src]);

  const m = T(() => ee(src), [src]);

  const h = D((e) => e.activeAudioId);

  const f = D((e) => e.setActiveAudio);

  const [A, N] = d_1(true);
  const [E, p] = d_1(0);
  const [a, C] = d_1(duration);
  const [y, P] = d_1(false);
  const i = A(null);
  const M = A(null);
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

  const T = q_1(() => {
    if (i.current) {
      p(i.current.currentTime);
      s.current = requestAnimationFrame(T);
    }
  }, []);

  const x = q_1(() => {
    const i_current = i.current;

    if (i_current && !A) {
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
  }, [g, A, o, f, T]);

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
      const _ = v(c);
      i_current.currentTime = _ * a;
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
  const S = a > 0 ? E / a : 0;
  return u("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      u("button", {
        className: d.playButton,
        onClick: x,
        disabled: A,
        children: A
          ? u(a2, { size: 18 })
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
            onClick: B,
            onMouseDown: R,
            children: m.map((e, r) => {
              const l = (r + 0.5) / m.length <= S;
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
