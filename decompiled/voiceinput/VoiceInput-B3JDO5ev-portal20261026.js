import {
  d,
  A,
  h,
  q,
  A as A_1,
  Z,
  ai,
} from "./index-BQxlThnW-portal20261026.js";
import { I, a } from "./IconPlay-DVzAkTqd-portal20261026.js";
(() => {
  try {
    const c =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    c.SENTRY_RELEASE = { id: "1.1.2" };
    const I = new c.Error().stack;

    if (I) {
      c._sentryDebugIds = c._sentryDebugIds || {};
      c._sentryDebugIds[I] = "05c45122-3062-45bd-b8a4-bc8e28da3f30";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-05c45122-3062-45bd-b8a4-bc8e28da3f30";
    }
  } catch {}
})();
function ve() {
  const [c, I] = d(false);
  const [S, l] = d(false);
  const [B, R] = d(0);
  const [F, x] = d(false);
  const [$, L] = d(0);
  const [V, C] = d(0);
  const [N, O] = d([]);
  const [G, y] = d(0);
  const d = A(0);
  const i = A(null);
  const a = A(null);
  const j = A(null);
  const s = A(null);
  const g = A([]);
  const v = A(null);
  const h = A(null);
  const o = A(null);
  const b = A(null);
  const H = A(null);
  const e = A(null);
  const n = A([]);
  const t = A(false);
  const f = A(0);
  const A = A([]);
  const k = A(0);

  h(() => {
    t.current = c;
  }, [c]);

  h(
    () => () => {
      if (v.current) {
        clearInterval(v.current);
      }

      if (h.current) {
        cancelAnimationFrame(h.current);
      }

      if (e.current) {
        clearInterval(e.current);
      }

      if (s.current) {
        s.current.getTracks().forEach((r) => r.stop());
      }

      if (i.current) {
        i.current.ondataavailable = null;
        i.current.onstop = null;
      }

      if (a.current && a.current.state !== "closed") {
        a.current.close();
      }

      if (o.current) {
        o.current.pause();
        o.current.onloadedmetadata = null;
        o.current.ontimeupdate = null;
        o.current.onended = null;
        o.current = null;
      }

      if (b.current) {
        URL.revokeObjectURL(b.current);
      }
    },
    []
  );

  const _ = q(() => {
    if (!j.current) {
      return;
    }
    const j_current = j.current;
    const j_current_frequencyBinCount = j_current.frequencyBinCount;
    const M = new Uint8Array(j_current_frequencyBinCount);
    j_current.getByteFrequencyData(M);
    let q = 0;
    for (let ce = 0; ce < j_current_frequencyBinCount; ce++) {
      q += M[ce];
    }
    const X = q / j_current_frequencyBinCount / 255;
    const T = Math.min(1, X * 3);
    const K = Math.max(0.1, T);
    if (t.current) {
      const de = performance.now() - f.current;
      const ie = Math.floor(de / 80);
      A.current.push(K);

      if (ie > k.current) {
        const A_current = A.current;

        const se =
          A_current.length > 0
            ? A_current.reduce((ae, fe) => ae + fe, 0) / A_current.length
            : 0.05;

        n.current.push(se);
        d.current += 4;

        O((ae) => [...ae, se]);

        y(d.current);
        A.current = [];
        k.current = ie;
      }

      h.current = requestAnimationFrame(_);
    }
  }, []);

  const W = q(() => {
    const n_current = n.current;
    return n_current.length > 0 ? [...n_current] : [];
  }, []);

  const Q = q(async () => {
    try {
      if (b.current) {
        URL.revokeObjectURL(b.current);
        b.current = null;
      }

      H.current = null;

      if (o.current) {
        o.current.pause();
        o.current = null;
      }

      const r = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      s.current = r;
      const w = new AudioContext();
      a.current = w;
      const M = w.createAnalyser();
      M.fftSize = 256;
      M.smoothingTimeConstant = 0.3;
      j.current = M;
      w.createMediaStreamSource(r).connect(M);
      const X = new MediaRecorder(r, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      i.current = X;
      g.current = [];
      n.current = [];
      f.current = performance.now();
      A.current = [];
      k.current = 0;

      X.ondataavailable = (K) => {
        if (K.data.size > 0) {
          g.current.push(K.data);
        }
      };

      X.start(100);
      I(true);
      l(false);
      R(0);
      L(0);
      C(0);
      x(false);
      d.current = 0;
      O([]);
      y(0);
      t.current = true;
      const T = Date.now();

      v.current = window.setInterval(() => {
        const K = Math.floor((Date.now() - T) / 1000 /* 1e3 */);
        R(K);
      }, 100);

      h.current = requestAnimationFrame(_);
    } catch (r) {
      console.error("Error accessing microphone:", r);
    }
  }, [_]);

  const ee = q(
    () =>
      new Promise((r) => {
        t.current = false;
        I(false);

        if (i.current && i.current.state !== "inactive") {
          i.current.onstop = () => {
            if (g.current.length > 0) {
              const M = i.current?.mimeType || "audio/webm";
              const q = new Blob(g.current, { type: M });
              const X = URL.createObjectURL(q);
              b.current = X;
              H.current = q;
              const T = new Audio(X);
              o.current = T;

              T.onloadedmetadata = () => {
                if (isFinite(T.duration)) {
                  C(T.duration);
                } else {
                  T.currentTime = 1e101 /* 1e101 */;

                  T.ontimeupdate = () => {
                    T.ontimeupdate = null;
                    T.currentTime = 0;
                    C(T.duration);
                  };
                }
              };

              T.onended = () => {
                x(false);
                L(0);
                T.currentTime = 0;

                if (e.current) {
                  clearInterval(e.current);
                  e.current = null;
                }
              };

              l(true);
              r(q);
            } else {
              r(null);
            }
          };

          i.current.stop();
        } else {
          r(null);
        }

        if (s.current) {
          s.current.getTracks().forEach((M) => M.stop());
          s.current = null;
        }

        if (v.current) {
          clearInterval(v.current);
          v.current = null;
        }

        if (h.current) {
          cancelAnimationFrame(h.current);
          h.current = null;
        }

        if (a.current && a.current.state !== "closed") {
          a.current.close();
          a.current = null;
        }

        const w = W();
        d.current = 0;
        O(w);
        y(0);
        L(0);
      }),
    [W]
  );

  const U = q(() => {
    t.current = false;

    if (i.current) {
      i.current.ondataavailable = null;
      i.current.onstop = null;
      i.current.state !== "inactive" && i.current.stop();
      i.current = null;
    }

    if (s.current) {
      s.current.getTracks().forEach((r) => r.stop());
      s.current = null;
    }

    if (v.current) {
      clearInterval(v.current);
      v.current = null;
    }

    if (h.current) {
      cancelAnimationFrame(h.current);
      h.current = null;
    }

    if (e.current) {
      clearInterval(e.current);
      e.current = null;
    }

    if (a.current && a.current.state !== "closed") {
      a.current.close();
      a.current = null;
    }

    if (o.current) {
      o.current.pause();
      o.current = null;
    }

    if (b.current) {
      URL.revokeObjectURL(b.current);
      b.current = null;
    }

    H.current = null;
    I(false);
    l(false);
    R(0);
    x(false);
    L(0);
    C(0);
    d.current = 0;
    O([]);
    y(0);
    n.current = [];
    g.current = [];
  }, []);

  const P = q(() => {
    if (e.current) {
      clearInterval(e.current);
    }

    e.current = window.setInterval(() => {
      const o_current = o.current;
      if (!o_current || o_current.paused || o_current.ended) {
        if (e.current) {
          clearInterval(e.current);
          e.current = null;
        }

        return;
      }

      if (o_current.duration > 0) {
        L(o_current.currentTime / o_current.duration);
      }
    }, 100);
  }, []);

  const te = q(() => {
    if (!o.current || !b.current) {
      return;
    }

    if (e.current) {
      clearInterval(e.current);
      e.current = null;
    }

    const o_current = o.current;

    if (o_current.ended || o_current.currentTime >= o_current.duration) {
      o_current.currentTime = 0;
      L(0);
    }

    x(true);

    o_current
      .play()
      .then(() => {
        P();
      })
      .catch((w) => {
        console.error("Error playing audio:", w);
        x(false);
      });
  }, [P]);

  const Y = q(() => {
    if (e.current) {
      clearInterval(e.current);
      e.current = null;
    }

    if (o.current) {
      o.current.pause();

      o.current.duration > 0 && L(o.current.currentTime / o.current.duration);
    }

    x(false);
  }, []);

  const Z = q(
    (r) => {
      if (!o.current || !S) {
        return;
      }
      const o_current = o.current;
      const M = Math.max(0, Math.min(1, r));
      o_current.currentTime = M * o_current.duration;
      L(M);

      if (o_current.paused) {
        e.current && (clearInterval(e.current), (e.current = null));

        o_current
          .play()
          .then(() => {
            x(true);
            P();
          })
          .catch((q) => {
            console.error("Error playing audio:", q);
          });
      }
    },
    [S, P]
  );

  const re = q(() => H.current, []);

  return {
    isRecording: c,
    hasRecording: S,
    recordingTime: B,
    audioLevels: N,
    slideOffset: G,
    isPlaying: F,
    playbackProgress: $,
    duration: V,
    audioElementRef: o,
    startRecording: Q,
    stopRecording: ee,
    cancelRecording: U,
    playAudio: te,
    pauseAudio: Y,
    seekTo: Z,
    getAudioBlob: re,
  };
}

const we = ({ size = 16 }) =>
  A_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 16 16",
    children: A_1("rect", {
      width: "10",
      height: "10",
      x: "3",
      y: "3",
      fill: "currentColor",
      rx: "3",
    }),
  });

const ne = 2;
const Re = 2;
const oe = ne + Re;
const J = 24;
const ye = 80;
const le = "rgba(142, 142, 147, 0.6)";
const be = "#FFFFFF";
function Ae({
  levels,
  slideOffset,
  audioRef,
  isRecording,
  hasRecording,
  isPlaying,
  onSeek,
  onPlay,
}) {
  const $ = A(null);
  const L = A(null);
  const V = A(false);
  const C = A(0);
  const N = A(0);
  const O = A(0);
  const G = A(0);
  const y = A(null);
  const d = A(null);
  const i = A(0);
  const [a, j] = d(0);
  const s = Math.max(1, Math.floor(a / oe));

  h(() => {
    O.current = slideOffset;

    if (slideOffset === 0) {
      N.current = 0;
    }
  }, [slideOffset]);

  h(() => {
    const L_current = L.current;
    if (!L_current) {
      return;
    }
    const n = new ResizeObserver((f) => {
      for (const A of f) {
        const k = A.contentRect.width;

        if (k > 0) {
          j(k);
        }
      }
    });
    n.observe(L_current);
    const t = L_current.getBoundingClientRect();

    if (t.width > 0) {
      j(t.width);
    }

    return () => {
      n.disconnect();
    };
  }, []);

  h(() => {
    const $_current = $.current;
    if (!$_current || a === 0) {
      return;
    }
    const n = window.devicePixelRatio || 1;
    $_current.width = a * n;
    $_current.height = J * n;
    $_current.style.width = `${a}px`;
    $_current.style.height = `${J}px`;
  }, [a]);

  const g = q(
    (e) => {
      const $_current = $.current;
      if (!$_current || a === 0) {
        return;
      }
      const t = $_current.getContext("2d");
      if (!t) {
        return;
      }
      const f = window.devicePixelRatio || 1;
      t.clearRect(0, 0, $_current.width, $_current.height);
      t.save();
      t.scale(f, f);
      const A = J / 2;
      const k = J - 4;
      for (let _ = 0; _ < s; _++) {
        let W;
        if (levels.length === 0) {
          W = 0.05;
        } else if (levels.length === 1) {
          W = levels[0];
        } else {
          const Y = (_ / (s - 1)) * (levels.length - 1);
          const Z = Math.floor(Y);
          const re = Math.min(Z + 1, levels.length - 1);
          const r = Y - Z;
          W = levels[Z] * (1 - r) + levels[re] * r;
        }
        const Q = Math.max(4, W * k);
        const ee = _ * oe;
        const U = A - Q / 2;
        const P = _ < e;
        t.fillStyle = P ? be : le;
        const te = ne / 2;
        t.beginPath();
        t.roundRect(ee, U, ne, Q, te);
        t.fill();
      }
      t.restore();
    },
    [levels, a, s]
  );

  const v = q(
    (e) => {
      const $_current = $.current;
      if (!$_current || a === 0) {
        return;
      }
      const t = $_current.getContext("2d");
      if (!t) {
        return;
      }
      const f = window.devicePixelRatio || 1;
      const O_current = O.current;

      const { current } = N;

      if (current !== O_current) {
        const U = e - G.current;
        const P = (oe / ye) * U;

        if (current < O_current) {
          N.current = Math.min(O_current, current + P);
        } else {
          N.current = O_current;
        }
      }
      G.current = e;
      t.clearRect(0, 0, $_current.width, $_current.height);
      t.save();
      t.scale(f, f);
      t.translate(-current, 0);
      const W = J / 2;
      const Q = J - 4;
      const ee = s + levels.length;
      for (let U = 0; U < ee; U++) {
        const P = U - s;
        const te = P >= 0 && P < levels.length ? levels[P] : 0.05;
        const Y = Math.max(4, te * Q);
        const Z = U * oe;
        const re = W - Y / 2;
        t.fillStyle = le;
        const r = ne / 2;
        t.beginPath();
        t.roundRect(Z, re, ne, Y, r);
        t.fill();
      }
      t.restore();

      if (N.current !== O.current || isRecording) {
        y.current = requestAnimationFrame(v);
      }
    },
    [levels, a, s, isRecording]
  );

  h(() => {
    if (isRecording) {
      G.current = performance.now();
      y.current = requestAnimationFrame(v);
    } else if (y.current) {
      cancelAnimationFrame(y.current);
      y.current = null;
    }

    return () => {
      if (y.current) {
        cancelAnimationFrame(y.current);
        y.current = null;
      }
    };
  }, [isRecording, v]);

  h(() => {
    if (!isPlaying || isRecording) {
      if (d.current) {
        cancelAnimationFrame(d.current);
        d.current = null;
      }

      return;
    }
    const e = () => {
      const S_current = audioRef.current;
      if (!S_current || S_current.paused || S_current.ended) {
        d.current = null;
        return;
      }
      const t = S_current.currentTime / S_current.duration;
      const f = Math.ceil(t * s);

      if (f !== i.current) {
        i.current = f;
        g(f);
      }

      d.current = requestAnimationFrame(e);
    };
    d.current = requestAnimationFrame(e);

    return () => {
      if (d.current) {
        cancelAnimationFrame(d.current);
        d.current = null;
      }
    };
  }, [isPlaying, isRecording, audioRef, s, g]);

  h(() => {
    if (!isRecording && !isPlaying && hasRecording) {
      const S_current = audioRef.current;
      if (S_current && S_current.duration > 0 && S_current.currentTime > 0) {
        const n = S_current.currentTime / S_current.duration;
        const t = Math.ceil(n * s);
        i.current = t;
        g(t);
      } else {
        i.current = 0;
        g(0);
      }
    }
  }, [isRecording, isPlaying, hasRecording, g, audioRef, s]);

  h(() => {
    if (!isRecording && hasRecording && !isPlaying) {
      g(i.current);
    }
  }, [levels, s, isRecording, hasRecording, isPlaying, g]);

  const h = q((e) => {
    const L_current = L.current;
    if (!L_current) {
      return 0;
    }
    const t = L_current.getBoundingClientRect();
    const f = "touches" in e ? e.touches[0].clientX : e.clientX;
    return Math.max(0, Math.min(1, (f - t.left) / t.width));
  }, []);

  const o = q(
    (e) => {
      if (!(!hasRecording || isRecording)) {
        e.preventDefault();

        if (!isPlaying) {
          onPlay();
          return;
        }

        V.current = true;
        C.current = h(e);
      }
    },
    [hasRecording, isRecording, isPlaying, h, onPlay]
  );

  const b = q(
    (e) => {
      if (V.current) {
        C.current = h(e);
      }
    },
    [h]
  );

  const H = q(() => {
    if (V.current) {
      onSeek(C.current);
      V.current = false;
    }
  }, [onSeek]);

  h(() => {
    const e = (t) => b(t);

    const n = () => H();

    window.addEventListener("mousemove", e);
    window.addEventListener("mouseup", n);
    window.addEventListener("touchmove", e);
    window.addEventListener("touchend", n);

    return () => {
      window.removeEventListener("mousemove", e);
      window.removeEventListener("mouseup", n);
      window.removeEventListener("touchmove", e);
      window.removeEventListener("touchend", n);
    };
  }, [b, H]);

  return A_1("div", {
    ref: L,
    style: {
      width: "100%",
      height: `${J}px`,
      overflow: "hidden",
      cursor: hasRecording && !isRecording ? "pointer" : "default",
    },
    onMouseDown: o,
    onTouchStart: o,
    children: A_1("canvas", { ref: $ }),
  });
}
const Te = "W7LN";
const Ie = "dwTO";
const Be = "cHoK";
const xe = "i5Wh";
const Le = "ABXK";
const Me = "RPnW";
const Se = "OVXb";
const Ce = "hxRB";
const Ee = "Zm8D";
const Fe = "yZv8";
const ke = "l6Eb";

const E = {
  voiceInput: Te,
  circleButton: Ie,
  playButton: Be,
  hasRecording: xe,
  stopButton: Le,
  recording: Me,
  sendButton: Se,
  audioVisualizer: Ce,
  waveformContainer: Ee,
  recordingTime: Fe,
  exiting: ke,
};

export function VoiceInput({ onCancel, onSend, isExiting, onExitComplete }) {
  const [B, R] = stopRecording(false);

  const {
    isRecording,
    hasRecording,
    recordingTime,
    audioLevels,
    slideOffset,
    isPlaying,
    playbackProgress,
    duration,
    audioElementRef,
    startRecording,
    stopRecording,
    cancelRecording,
    playAudio,
    pauseAudio,
    seekTo,
    getAudioBlob,
  } = ve();

  h(() => {
    startRecording();
  }, []);

  h(() => {
    if (isExiting && onExitComplete) {
      const t = setTimeout(onExitComplete, 300);
      return () => clearTimeout(t);
    }
  }, [isExiting, onExitComplete]);

  const v = (t) => {
    if (!isFinite(t) || isNaN(t)) {
      return "00:00";
    }
    const f = Math.floor(t / 60);
    const A = Math.floor(t % 60);
    return `${f.toString().padStart(2, "0")}:${A.toString().padStart(2, "0")}`;
  };

  const h = () => {
    if (hasRecording) {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    }
  };

  const o = () => {
    if (isRecording) {
      stopRecording();
    }
  };

  const b = q(
    (t) => {
      seekTo(t);
    },
    [seekTo]
  );

  const H = q(async () => {
    if (!(B || !onSend)) {
      R(true);
      try {
        let t = null;

        if (isRecording) {
          t = await stopRecording();
        } else {
          t = getAudioBlob();
        }

        if (!t) {
          return;
        }

        await onSend(t);
        cancelRecording();
        onCancel();
      } catch (t) {
        console.error("Failed to send voice message:", t);
      } finally {
        R(false);
      }
    }
  }, [
    B,
    isRecording,
    stopRecording,
    getAudioBlob,
    onSend,
    cancelRecording,
    onCancel,
  ]);

  const e = v(
    isRecording
      ? recordingTime
      : isPlaying
      ? playbackProgress * duration
      : duration
  );

  const n = [
    E.voiceInput,
    isRecording ? E.recording : "",
    hasRecording ? E.hasRecording : "",
    isExiting ? E.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return A_1("div", {
    className: n,
    children: [
      A_1("button", {
        className: `${E.circleButton} ${E.playButton}`,
        onClick: h,
        children: isPlaying
          ? A_1(onSend, { size: 20 })
          : A_1(playAudio, { size: 20 }),
      }),
      A_1("div", {
        className: E.audioVisualizer,
        children: [
          A_1("div", {
            className: E.waveformContainer,
            children: A_1(Ae, {
              levels: audioLevels,
              slideOffset: slideOffset,
              audioRef: audioElementRef,
              isRecording: isRecording,
              hasRecording: hasRecording,
              isPlaying: isPlaying,
              onSeek: b,
              onPlay: playAudio,
            }),
          }),
          A_1("span", { className: E.recordingTime, children: e }),
        ],
      }),
      A_1("button", {
        className: `${E.circleButton} ${E.stopButton}`,
        onClick: o,
        children: A_1(we, { size: 20 }),
      }),
      A_1("button", {
        className: `${E.circleButton} ${E.sendButton}`,
        onClick: H,
        disabled: B || (isRecording && recordingTime < 1),
        children: B ? A_1(Z, { size: "xs" }) : A_1(ai, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
