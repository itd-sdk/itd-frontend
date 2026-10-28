import {
  Z as Z_1,
  T,
  d as d_1,
  A,
  h,
  q as q_1,
  u,
  a2,
} from "./index-AoERIL5v.js";
import { I, a } from "./IconPlay-mEvCLOl1.js";

const w = Z_1((n) => ({
  activeAudioId: null,
  setActiveAudio: (r) => n({ activeAudioId: r }),
}));

const W = "JrV7";
const q = "kap5";
const J = "dIFA";
const Z = "xVX5";
const H = "JCEz";
const O = "bRsz";
const _ = "USXu";
const j = "rhaa";
const G = "ZuHV";
const K = "dcWV";

const d = {
  voiceMessage: W,
  playButton: q,
  content: J,
  waveform: Z,
  dragging: H,
  bar: O,
  played: _,
  info: j,
  time: G,
  duration: K,
};

const Q = 45;
function Y(n) {
  let r = 0;
  for (let o = 0; o < n.length; o++) {
    const m = n.charCodeAt(o);
    r = (r << 5) - r + m;
    r = r & r;
  }
  return Math.abs(r);
}
function ee(n) {
  const r = [];
  let o = Y(n);
  for (let m = 0; m < Q; m++) {
    o = (o * 9301 + 49297) % 233280;
    const h = 0.2 + (o / 233280) * 0.8;
    r.push(h);
  }
  return r;
}
function $(n) {
  if (!isFinite(n) || isNaN(n)) {
    return "0:00";
  }
  const r = Math.floor(n / 60);
  const o = Math.floor(n % 60);
  return `${r}:${o.toString().padStart(2, "0")}`;
}

export function VoiceMessage({ src, duration = 0 }) {
  const o = T(() => src, [src]);

  const m = T(() => ee(src), [src]);

  const h = w((e) => e.activeAudioId);

  const f = w((e) => e.setActiveAudio);

  const [y, P] = d_1(true);
  const [E, p] = d_1(0);
  const [a, x] = d_1(duration);
  const [A, C] = d_1(false);
  const c = A(null);
  const I = A(null);
  const s = A(null);
  const v = h === o;

  h(() => {
    if (h !== o && c.current && !c.current.paused) {
      c.current.pause();
      s.current && (cancelAnimationFrame(s.current), (s.current = null));
    }
  }, [h, o]);

  h(() => {
    const e = new Audio(src);
    c.current = e;

    const t = () => {
      x(e.duration || duration);
      P(false);
    };

    const i = () => {
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

    e.addEventListener("loadedmetadata", t);
    e.addEventListener("ended", i);
    e.addEventListener("error", l);

    return () => {
      e.removeEventListener("loadedmetadata", t);
      e.removeEventListener("ended", i);
      e.removeEventListener("error", l);
      e.pause();
      c.current = null;

      if (s.current) {
        cancelAnimationFrame(s.current);
      }

      if (w.getState().activeAudioId === o) {
        f(null);
      }
    };
  }, [src, duration, o, f]);

  const T = q_1(() => {
    if (c.current) {
      p(c.current.currentTime);
      s.current = requestAnimationFrame(T);
    }
  }, []);

  const D = q_1(() => {
    const c_current = c.current;

    if (c_current && !y) {
      if (v) {
        c_current.pause();
        s.current && (cancelAnimationFrame(s.current), (s.current = null));
        f(null);
      } else {
        f(o);
        c_current.play();
        T();
      }
    }
  }, [v, y, o, f, T]);

  const g = q_1(
    (e) => {
      if (!I.current || !a) {
        return 0;
      }
      const t = I.current.getBoundingClientRect();
      const e_clientX = e.clientX;
      return Math.max(0, Math.min(e_clientX - t.left, t.width)) / t.width;
    },
    [a]
  );

  const B = q_1(
    (e) => {
      const c_current = c.current;
      if (!c_current || !a || A) {
        return;
      }
      const i = g(e);
      c_current.currentTime = i * a;
      p(c_current.currentTime);
    },
    [a, A, g]
  );

  const R = q_1(
    (e) => {
      const c_current = c.current;
      if (!c_current || !a) {
        return;
      }
      C(true);
      const i = g(e);
      c_current.currentTime = i * a;
      p(c_current.currentTime);
    },
    [a, g]
  );

  h(() => {
    if (!A) {
      return;
    }

    const e = (i) => {
      const c_current = c.current;
      if (!c_current || !a) {
        return;
      }
      const k = g(i);
      c_current.currentTime = k * a;
      p(c_current.currentTime);
    };

    const t = () => {
      C(false);
    };

    document.addEventListener("mousemove", e);
    document.addEventListener("mouseup", t);

    return () => {
      document.removeEventListener("mousemove", e);
      document.removeEventListener("mouseup", t);
    };
  }, [A, a, g]);
  const S = a > 0 ? E / a : 0;
  return u("div", {
    className: `${d.voiceMessage} ${v ? d.playing : ""}`,
    children: [
      u("button", {
        className: d.playButton,
        onClick: D,
        disabled: y,
        children: y
          ? u(a2, { size: 18 })
          : v
          ? u(I, { size: 18 })
          : u(a, { size: 18 }),
      }),
      u("div", {
        className: d.content,
        children: [
          u("div", {
            ref: I,
            className: `${d.waveform} ${A ? d.dragging : ""}`,
            onClick: B,
            onMouseDown: R,
            children: m.map((e, t) => {
              const l = (t + 0.5) / m.length <= S;
              return u(
                "div",
                {
                  className: `${d.bar} ${l ? d.played : ""}`,
                  style: { height: `${Math.max(4, e * 24)}px` },
                },
                t
              );
            }),
          }),
          u("div", {
            className: d.info,
            children: [
              u("span", { className: d.time, children: $(v || E > 0 ? E : a) }),
              (v || E > 0) &&
                u("span", { className: d.duration, children: ["/ ", $(a)] }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { VoiceMessage as VoiceMessage, VoiceMessage as default };
