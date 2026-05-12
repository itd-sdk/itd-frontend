import { ae, T, d as d_1, A, y, a_1 as q_1, a, ao } from "./index-DDCL-vHK.js";
import { d_1 as d_1_1, a as a_1 } from "./IconPlay-CbwDz6zO.js";
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
    n.SENTRY_RELEASE = { id: "1.1.0" };
    const t = new n.Error().stack;

    if (t) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[t] = "b5b1d775-cb51-4d9f-811b-be7de41ae5dd";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-b5b1d775-cb51-4d9f-811b-be7de41ae5dd";
    }
  } catch {}
})();

const N = ae((n) => ({
  track: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 1,
  muted: false,
  activeAudioId: null,
  setActiveAudio: (t) => n({ activeAudioId: t }),
}));

const U = "qzYv";
const G = "XKAP";
const K = "Gy8U";
const V = "VH5K";
const W = "gFu6";
const Y = "ro2N";
const H = "yRTX";
const J = "x8cL";
const O = "GFNR";
const j = "BuJL";

const d = {
  voiceMessage: U,
  playButton: G,
  content: K,
  waveform: V,
  dragging: W,
  bar: Y,
  played: H,
  info: J,
  time: O,
  duration: j,
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
function R(n) {
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

  const [A, P] = d_1(true);
  const [E, p] = d_1(0);
  const [a, $] = d_1(duration);
  const [y, D] = d_1(false);
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
      if (!L.current || !a) {
        return 0;
      }
      const r = L.current.getBoundingClientRect();
      const e_clientX = e.clientX;
      return Math.max(0, Math.min(e_clientX - r.left, r.width)) / r.width;
    },
    [a]
  );

  const x = q_1(
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

  const B = q_1(
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
      const k = v(c);
      i_current.currentTime = k * a;
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
  const S = a > 0 ? E / a : 0;
  return a("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      a("button", {
        className: d.playButton,
        onClick: C,
        disabled: A,
        children: A
          ? a(ao, { size: 18 })
          : g
          ? a(d_1_1, { size: 18 })
          : a(a_1, { size: 18 }),
      }),
      a("div", {
        className: d.content,
        children: [
          a("div", {
            ref: L,
            className: `${d.waveform} ${y ? d.dragging : ""}`,
            onClick: x,
            onMouseDown: B,
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
              a("span", { className: d.time, children: R(g || E > 0 ? E : a) }),
              (g || E > 0) &&
                a("span", { className: d.duration, children: ["/ ", R(a)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
