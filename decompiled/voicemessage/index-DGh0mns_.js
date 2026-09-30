import { aG, a5, d as d_1, A, h, aO as q_1, u, aO } from "./index-BuVp7kGl.js";
import { d_1 as d_1_1, a } from "./IconPlay-DBiiuvrx.js";
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
      n._sentryDebugIds[t] = "9af61147-613e-40ef-b3e2-e17a085c51fb";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-9af61147-613e-40ef-b3e2-e17a085c51fb";
    }
  } catch {}
})();

const N = aG((n) => ({
  activeAudioId: null,
  setActiveAudio: (t) => n({ activeAudioId: t }),
}));

const X = "F2oh";
const O = "WERb";
const U = "V0YX";
const V = "ceNI";
const Y = "qaPe";
const G = "sTlW";
const j = "pk1z";
const H = "qFSL";
const J = "yxBX";
const K = "i0sC";

const d = {
  voiceMessage: X,
  playButton: O,
  content: U,
  waveform: V,
  dragging: Y,
  bar: G,
  played: j,
  info: H,
  time: J,
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
function C(n) {
  if (!isFinite(n) || isNaN(n)) {
    return "0:00";
  }
  const t = Math.floor(n / 60);
  const o = Math.floor(n % 60);
  return `${t}:${o.toString().padStart(2, "0")}`;
}

export function VoiceMessage({ src, duration = 0 }) {
  const o = a5(() => src, [src]);

  const m = a5(() => ee(src), [src]);

  const h = N((e) => e.activeAudioId);

  const f = N((e) => e.setActiveAudio);

  const [A, D] = d_1(true);
  const [E, p] = d_1(0);
  const [a, $] = d_1(duration);
  const [y, P] = d_1(false);
  const i = A(null);
  const L = A(null);
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

  const M = q_1(() => {
    if (i.current) {
      p(i.current.currentTime);
      s.current = requestAnimationFrame(M);
    }
  }, []);

  const R = q_1(() => {
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

  const x = q_1(
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
      const k = v(c);
      i_current.currentTime = k * a;
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
  const B = a > 0 ? E / a : 0;
  return u("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      u("button", {
        className: d.playButton,
        onClick: R,
        disabled: A,
        children: A
          ? u(aO, { size: 18 })
          : g
          ? u(d_1_1, { size: 18 })
          : u(a, { size: 18 }),
      }),
      u("div", {
        className: d.content,
        children: [
          u("div", {
            ref: L,
            className: `${d.waveform} ${y ? d.dragging : ""}`,
            onClick: S,
            onMouseDown: x,
            children: m.map((e, r) => {
              const l = (r + 0.5) / m.length <= B;
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
              u("span", { className: d.time, children: C(g || E > 0 ? E : a) }),
              (g || E > 0) &&
                u("span", { className: d.duration, children: ["/ ", C(a)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
