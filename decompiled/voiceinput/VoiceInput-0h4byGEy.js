import { d, A, h, d as d_1, A as A_1, a5, ak } from "./index-ORJLmKGS.js";
import { I, a } from "./IconPlay-D4hSN_pq.js";
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
    c.SENTRY_RELEASE = { id: "1.1.3" };
    const I = new c.Error().stack;

    if (I) {
      c._sentryDebugIds = c._sentryDebugIds || {};
      c._sentryDebugIds[I] = "8067772c-a9ec-47ee-9cfc-581887f491f5";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-8067772c-a9ec-47ee-9cfc-581887f491f5";
    }
  } catch {}
})();
function we() {
  const [c, I] = d(false);
  const [L, l] = d(false);
  const [x, R] = d(0);
  const [E, B] = d(false);
  const [z, S] = d(0);
  const [V, M] = d(0);
  const [N, O] = d([]);
  const [X, y] = d(0);
  const d = A(0);
  const i = A(null);
  const a = A(null);
  const W = A(null);
  const s = A(null);
  const g = A([]);
  const w = A(null);
  const h = A(null);
  const o = A(null);
  const A = A(null);
  const $ = A(null);
  const e = A(null);
  const n = A([]);
  const t = A(false);
  const f = A(0);
  const b = A([]);
  const F = A(0);

  h(() => {
    t.current = c;
  }, [c]);

  h(
    () => () => {
      if (w.current) {
        clearInterval(w.current);
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

      if (A.current) {
        URL.revokeObjectURL(A.current);
      }
    },
    []
  );

  const _ = d_1(() => {
    if (!W.current) {
      return;
    }
    const W_current = W.current;
    const W_current_frequencyBinCount = W_current.frequencyBinCount;
    const C = new Uint8Array(W_current_frequencyBinCount);
    W_current.getByteFrequencyData(C);
    let j = 0;
    for (let ce = 0; ce < W_current_frequencyBinCount; ce++) {
      j += C[ce];
    }
    const G = j / W_current_frequencyBinCount / 255;
    const T = Math.min(1, G * 3);
    const Z = Math.max(0.1, T);
    if (t.current) {
      const de = performance.now() - f.current;
      const ie = Math.floor(de / 80);
      b.current.push(Z);

      if (ie > F.current) {
        const b_current = b.current;

        const se =
          b_current.length > 0
            ? b_current.reduce((ae, fe) => ae + fe, 0) / b_current.length
            : 0.05;

        n.current.push(se);
        d.current += 4;

        O((ae) => [...ae, se]);

        y(d.current);
        b.current = [];
        F.current = ie;
      }

      h.current = requestAnimationFrame(_);
    }
  }, []);

  const H = d_1(() => {
    const n_current = n.current;
    return n_current.length > 0 ? [...n_current] : [];
  }, []);

  const Q = d_1(async () => {
    try {
      if (A.current) {
        URL.revokeObjectURL(A.current);
        A.current = null;
      }

      $.current = null;

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
      const v = new AudioContext();
      a.current = v;
      const C = v.createAnalyser();
      C.fftSize = 256;
      C.smoothingTimeConstant = 0.3;
      W.current = C;
      v.createMediaStreamSource(r).connect(C);
      const G = new MediaRecorder(r, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      i.current = G;
      g.current = [];
      n.current = [];
      f.current = performance.now();
      b.current = [];
      F.current = 0;

      G.ondataavailable = (Z) => {
        if (Z.data.size > 0) {
          g.current.push(Z.data);
        }
      };

      G.start(100);
      I(true);
      l(false);
      R(0);
      S(0);
      M(0);
      B(false);
      d.current = 0;
      O([]);
      y(0);
      t.current = true;
      const T = Date.now();

      w.current = window.setInterval(() => {
        const Z = Math.floor((Date.now() - T) / 1000 /* 1e3 */);
        R(Z);
      }, 100);

      h.current = requestAnimationFrame(_);
    } catch (r) {
      console.error("Error accessing microphone:", r);
    }
  }, [_]);

  const ee = d_1(
    () =>
      new Promise((r) => {
        t.current = false;
        I(false);

        if (i.current && i.current.state !== "inactive") {
          i.current.onstop = () => {
            if (g.current.length > 0) {
              const C = i.current?.mimeType || "audio/webm";
              const j = new Blob(g.current, { type: C });
              const G = URL.createObjectURL(j);
              A.current = G;
              $.current = j;
              const T = new Audio(G);
              o.current = T;

              T.onloadedmetadata = () => {
                if (isFinite(T.duration)) {
                  M(T.duration);
                } else {
                  T.currentTime = 1e101 /* 1e101 */;

                  T.ontimeupdate = () => {
                    T.ontimeupdate = null;
                    T.currentTime = 0;
                    M(T.duration);
                  };
                }
              };

              T.onended = () => {
                B(false);
                S(0);
                T.currentTime = 0;

                if (e.current) {
                  clearInterval(e.current);
                  e.current = null;
                }
              };

              l(true);
              r(j);
            } else {
              r(null);
            }
          };

          i.current.stop();
        } else {
          r(null);
        }

        if (s.current) {
          s.current.getTracks().forEach((C) => C.stop());
          s.current = null;
        }

        if (w.current) {
          clearInterval(w.current);
          w.current = null;
        }

        if (h.current) {
          cancelAnimationFrame(h.current);
          h.current = null;
        }

        if (a.current && a.current.state !== "closed") {
          a.current.close();
          a.current = null;
        }

        const v = H();
        d.current = 0;
        O(v);
        y(0);
        S(0);
      }),
    [H]
  );

  const U = d_1(() => {
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

    if (w.current) {
      clearInterval(w.current);
      w.current = null;
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

    if (A.current) {
      URL.revokeObjectURL(A.current);
      A.current = null;
    }

    $.current = null;
    I(false);
    l(false);
    R(0);
    B(false);
    S(0);
    M(0);
    d.current = 0;
    O([]);
    y(0);
    n.current = [];
    g.current = [];
  }, []);

  const D = d_1(() => {
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
        S(o_current.currentTime / o_current.duration);
      }
    }, 100);
  }, []);

  const te = d_1(() => {
    if (!o.current || !A.current) {
      return;
    }

    if (e.current) {
      clearInterval(e.current);
      e.current = null;
    }

    const o_current = o.current;

    if (o_current.ended || o_current.currentTime >= o_current.duration) {
      o_current.currentTime = 0;
      S(0);
    }

    B(true);

    o_current
      .play()
      .then(() => {
        D();
      })
      .catch((v) => {
        console.error("Error playing audio:", v);
        B(false);
      });
  }, [D]);

  const Y = d_1(() => {
    if (e.current) {
      clearInterval(e.current);
      e.current = null;
    }

    if (o.current) {
      o.current.pause();

      o.current.duration > 0 && S(o.current.currentTime / o.current.duration);
    }

    B(false);
  }, []);

  const K = d_1(
    (r) => {
      if (!o.current || !L) {
        return;
      }
      const o_current = o.current;
      const C = Math.max(0, Math.min(1, r));
      o_current.currentTime = C * o_current.duration;
      S(C);

      if (o_current.paused) {
        e.current && (clearInterval(e.current), (e.current = null));

        o_current
          .play()
          .then(() => {
            B(true);
            D();
          })
          .catch((j) => {
            console.error("Error playing audio:", j);
          });
      }
    },
    [L, D]
  );

  const re = d_1(() => $.current, []);

  return {
    isRecording: c,
    hasRecording: L,
    recordingTime: x,
    audioLevels: N,
    slideOffset: X,
    isPlaying: E,
    playbackProgress: z,
    duration: V,
    audioElementRef: o,
    startRecording: Q,
    stopRecording: ee,
    cancelRecording: U,
    playAudio: te,
    pauseAudio: Y,
    seekTo: K,
    getAudioBlob: re,
  };
}

const ve = ({ size = 16 }) =>
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
const Ae = "#FFFFFF";
function be({
  levels,
  slideOffset,
  audioRef,
  isRecording,
  hasRecording,
  isPlaying,
  onSeek,
  onPlay,
}) {
  const z = A(null);
  const S = A(null);
  const V = A(false);
  const M = A(0);
  const N = A(0);
  const O = A(0);
  const X = A(0);
  const y = A(null);
  const d = A(null);
  const i = A(0);
  const [a, W] = d(0);
  const s = Math.max(1, Math.floor(a / oe));

  h(() => {
    O.current = slideOffset;

    if (slideOffset === 0) {
      N.current = 0;
    }
  }, [slideOffset]);

  h(() => {
    const S_current = S.current;
    if (!S_current) {
      return;
    }
    const n = new ResizeObserver((f) => {
      for (const b of f) {
        const F = b.contentRect.width;

        if (F > 0) {
          W(F);
        }
      }
    });
    n.observe(S_current);
    const t = S_current.getBoundingClientRect();

    if (t.width > 0) {
      W(t.width);
    }

    return () => {
      n.disconnect();
    };
  }, []);

  h(() => {
    const z_current = z.current;
    if (!z_current || a === 0) {
      return;
    }
    const n = window.devicePixelRatio || 1;
    z_current.width = a * n;
    z_current.height = J * n;
    z_current.style.width = `${a}px`;
    z_current.style.height = `${J}px`;
  }, [a]);

  const g = d_1(
    (e) => {
      const z_current = z.current;
      if (!z_current || a === 0) {
        return;
      }
      const t = z_current.getContext("2d");
      if (!t) {
        return;
      }
      const f = window.devicePixelRatio || 1;
      t.clearRect(0, 0, z_current.width, z_current.height);
      t.save();
      t.scale(f, f);
      const b = J / 2;
      const F = J - 4;
      for (let _ = 0; _ < s; _++) {
        let H;
        if (levels.length === 0) {
          H = 0.05;
        } else if (levels.length === 1) {
          H = levels[0];
        } else {
          const Y = (_ / (s - 1)) * (levels.length - 1);
          const K = Math.floor(Y);
          const re = Math.min(K + 1, levels.length - 1);
          const r = Y - K;
          H = levels[K] * (1 - r) + levels[re] * r;
        }
        const Q = Math.max(4, H * F);
        const ee = _ * oe;
        const U = b - Q / 2;
        const D = _ < e;
        t.fillStyle = D ? Ae : le;
        const te = ne / 2;
        t.beginPath();
        t.roundRect(ee, U, ne, Q, te);
        t.fill();
      }
      t.restore();
    },
    [levels, a, s]
  );

  const w = d_1(
    (e) => {
      const z_current = z.current;
      if (!z_current || a === 0) {
        return;
      }
      const t = z_current.getContext("2d");
      if (!t) {
        return;
      }
      const f = window.devicePixelRatio || 1;
      const O_current = O.current;

      const { current } = N;

      if (current !== O_current) {
        const U = e - X.current;
        const D = (oe / ye) * U;

        if (current < O_current) {
          N.current = Math.min(O_current, current + D);
        } else {
          N.current = O_current;
        }
      }
      X.current = e;
      t.clearRect(0, 0, z_current.width, z_current.height);
      t.save();
      t.scale(f, f);
      t.translate(-current, 0);
      const H = J / 2;
      const Q = J - 4;
      const ee = s + levels.length;
      for (let U = 0; U < ee; U++) {
        const D = U - s;
        const te = D >= 0 && D < levels.length ? levels[D] : 0.05;
        const Y = Math.max(4, te * Q);
        const K = U * oe;
        const re = H - Y / 2;
        t.fillStyle = le;
        const r = ne / 2;
        t.beginPath();
        t.roundRect(K, re, ne, Y, r);
        t.fill();
      }
      t.restore();

      if (N.current !== O.current || isRecording) {
        y.current = requestAnimationFrame(w);
      }
    },
    [levels, a, s, isRecording]
  );

  h(() => {
    if (isRecording) {
      X.current = performance.now();
      y.current = requestAnimationFrame(w);
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
  }, [isRecording, w]);

  h(() => {
    if (!isPlaying || isRecording) {
      if (d.current) {
        cancelAnimationFrame(d.current);
        d.current = null;
      }

      return;
    }
    const e = () => {
      const L_current = audioRef.current;
      if (!L_current || L_current.paused || L_current.ended) {
        d.current = null;
        return;
      }
      const t = L_current.currentTime / L_current.duration;
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
      const L_current = audioRef.current;
      if (L_current && L_current.duration > 0 && L_current.currentTime > 0) {
        const n = L_current.currentTime / L_current.duration;
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

  const h = d_1((e) => {
    const S_current = S.current;
    if (!S_current) {
      return 0;
    }
    const t = S_current.getBoundingClientRect();
    const f = "touches" in e ? e.touches[0].clientX : e.clientX;
    return Math.max(0, Math.min(1, (f - t.left) / t.width));
  }, []);

  const o = d_1(
    (e) => {
      if (!(!hasRecording || isRecording)) {
        e.preventDefault();

        if (!isPlaying) {
          onPlay();
          return;
        }

        V.current = true;
        M.current = h(e);
      }
    },
    [hasRecording, isRecording, isPlaying, h, onPlay]
  );

  const A = d_1(
    (e) => {
      if (V.current) {
        M.current = h(e);
      }
    },
    [h]
  );

  const $ = d_1(() => {
    if (V.current) {
      onSeek(M.current);
      V.current = false;
    }
  }, [onSeek]);

  h(() => {
    const e = (t) => A(t);

    const n = () => $();

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
  }, [A, $]);

  return A_1("div", {
    ref: S,
    style: {
      width: "100%",
      height: `${J}px`,
      overflow: "hidden",
      cursor: hasRecording && !isRecording ? "pointer" : "default",
    },
    onMouseDown: o,
    onTouchStart: o,
    children: A_1("canvas", { ref: z }),
  });
}
const Te = "O2Ai";
const Ie = "Ax1N";
const xe = "k6a7";
const Be = "j7C0";
const Se = "x9SX";
const Ce = "wCcT";
const Le = "q0Dq";
const Me = "hSV3";
const ke = "jj7I";
const Ee = "TVKH";
const Fe = "wdmZ";

const k = {
  voiceInput: Te,
  circleButton: Ie,
  playButton: xe,
  hasRecording: Be,
  stopButton: Se,
  recording: Ce,
  sendButton: Le,
  audioVisualizer: Me,
  waveformContainer: ke,
  recordingTime: Ee,
  exiting: Fe,
};

export function VoiceInput({ onCancel, onSend, isExiting, onExitComplete }) {
  const [x, R] = stopRecording(false);

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
  } = we();

  h(() => {
    startRecording();
  }, []);

  h(() => {
    if (isExiting && onExitComplete) {
      const t = setTimeout(onExitComplete, 300);
      return () => clearTimeout(t);
    }
  }, [isExiting, onExitComplete]);

  const w = (t) => {
    if (!isFinite(t) || isNaN(t)) {
      return "00:00";
    }
    const f = Math.floor(t / 60);
    const b = Math.floor(t % 60);
    return `${f.toString().padStart(2, "0")}:${b.toString().padStart(2, "0")}`;
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

  const A = d_1(
    (t) => {
      seekTo(t);
    },
    [seekTo]
  );

  const $ = d_1(async () => {
    if (!(x || !onSend)) {
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
    x,
    isRecording,
    stopRecording,
    getAudioBlob,
    onSend,
    cancelRecording,
    onCancel,
  ]);

  const e = w(
    isRecording
      ? recordingTime
      : isPlaying
      ? playbackProgress * duration
      : duration
  );

  const n = [
    k.voiceInput,
    isRecording ? k.recording : "",
    hasRecording ? k.hasRecording : "",
    isExiting ? k.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return A_1("div", {
    className: n,
    children: [
      A_1("button", {
        className: `${k.circleButton} ${k.playButton}`,
        onClick: h,
        children: isPlaying
          ? A_1(onSend, { size: 20 })
          : A_1(playAudio, { size: 20 }),
      }),
      A_1("div", {
        className: k.audioVisualizer,
        children: [
          A_1("div", {
            className: k.waveformContainer,
            children: A_1(be, {
              levels: audioLevels,
              slideOffset: slideOffset,
              audioRef: audioElementRef,
              isRecording: isRecording,
              hasRecording: hasRecording,
              isPlaying: isPlaying,
              onSeek: A,
              onPlay: playAudio,
            }),
          }),
          A_1("span", { className: k.recordingTime, children: e }),
        ],
      }),
      A_1("button", {
        className: `${k.circleButton} ${k.stopButton}`,
        onClick: o,
        children: A_1(ve, { size: 20 }),
      }),
      A_1("button", {
        className: `${k.circleButton} ${k.sendButton}`,
        onClick: $,
        disabled: x || (isRecording && recordingTime < 1),
        children: x ? A_1(a5, { size: "xs" }) : A_1(ak, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
