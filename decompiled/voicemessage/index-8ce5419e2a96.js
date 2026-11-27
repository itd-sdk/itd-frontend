import {
  a6,
  aH,
  d as d_1,
  A,
  h,
  q as q_1,
  u,
  aI,
} from "./index-4a2211963806.js";
import { I, a } from "./IconPlay-63cc71ccebde.js";
const H = "Nwat";
const O = "UEhI";
const X = "F6R7";
const q = "TrGp";
const G = "OO0d";
const V = "yxU1";
const Y = "HEFF";
const _ = "DWWY";
const j = "cXDe";
const J = "tH7t";

const d = {
  voiceMessage: H,
  playButton: O,
  content: X,
  waveform: q,
  dragging: G,
  bar: V,
  played: Y,
  info: _,
  time: j,
  duration: J,
};

const K = 45;
function Q(r) {
  let o = 0;
  for (let n = 0; n < r.length; n++) {
    const m = r.charCodeAt(n);
    o = (o << 5) - o + m;
    o = o & o;
  }
  return Math.abs(o);
}
function Z(r) {
  const o = [];
  let n = Q(r);
  for (let m = 0; m < K; m++) {
    n = (n * 9301 + 49297) % 233280;
    const h = 0.2 + (n / 233280) * 0.8;
    o.push(h);
  }
  return o;
}
function $(r) {
  if (!isFinite(r) || isNaN(r)) {
    return "0:00";
  }
  const o = Math.floor(r / 60);
  const n = Math.floor(r % 60);
  return `${o}:${n.toString().padStart(2, "0")}`;
}

export function VoiceMessage({ src, duration = 0 }) {
  const n = a6(() => src, [src]);

  const m = a6(() => Z(src), [src]);

  const h = aH((e) => e.activeAudioId);

  const f = aH((e) => e.setActiveAudio);

  const [M, P] = d_1(true);
  const [E, p] = d_1(0);
  const [a, C] = d_1(duration);
  const [A, b] = d_1(false);
  const c = A(null);
  const T = A(null);
  const s = A(null);
  const g = h === n;

  h(() => {
    if (h !== n && c.current && !c.current.paused) {
      c.current.pause();
      s.current && (cancelAnimationFrame(s.current), (s.current = null));
    }
  }, [h, n]);

  h(() => {
    const e = new Audio(src);
    c.current = e;

    const t = () => {
      C(e.duration || duration);
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

      if (aH.getState().activeAudioId === n) {
        f(null);
      }
    };
  }, [src, duration, n, f]);

  const I = q_1(() => {
    if (c.current) {
      p(c.current.currentTime);
      s.current = requestAnimationFrame(I);
    }
  }, []);

  const x = q_1(() => {
    const c_current = c.current;

    if (c_current && !M) {
      if (g) {
        c_current.pause();
        s.current && (cancelAnimationFrame(s.current), (s.current = null));
        f(null);
      } else {
        f(n);
        c_current.play();
        I();
      }
    }
  }, [g, M, n, f, I]);

  const v = q_1(
    (e) => {
      if (!T.current || !a) {
        return 0;
      }
      const t = T.current.getBoundingClientRect();
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
      const i = v(e);
      c_current.currentTime = i * a;
      p(c_current.currentTime);
    },
    [a, A, v]
  );

  const R = q_1(
    (e) => {
      const c_current = c.current;
      if (!c_current || !a) {
        return;
      }
      b(true);
      const i = v(e);
      c_current.currentTime = i * a;
      p(c_current.currentTime);
    },
    [a, v]
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
      const k = v(i);
      c_current.currentTime = k * a;
      p(c_current.currentTime);
    };

    const t = () => {
      b(false);
    };

    document.addEventListener("mousemove", e);
    document.addEventListener("mouseup", t);

    return () => {
      document.removeEventListener("mousemove", e);
      document.removeEventListener("mouseup", t);
    };
  }, [A, a, v]);
  const S = a > 0 ? E / a : 0;
  return u("div", {
    className: `${d.voiceMessage} ${g ? d.playing : ""}`,
    children: [
      u("button", {
        className: d.playButton,
        onClick: x,
        disabled: M,
        children: M
          ? u(aI, { size: 18 })
          : g
          ? u(I, { size: 18 })
          : u(a, { size: 18 }),
      }),
      u("div", {
        className: d.content,
        children: [
          u("div", {
            ref: T,
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
