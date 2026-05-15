import { d, A, y, q, a, a3, ag } from "./index-7xRaK15k.js";
import { I, a as a_1 } from "./IconPlay-siNt7r4g.js";
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
    c.SENTRY_RELEASE = { id: "1.1.1" };
    const T = new c.Error().stack;

    if (T) {
      c._sentryDebugIds = c._sentryDebugIds || {};
      c._sentryDebugIds[T] = "ee219268-7bdd-4f28-a0b3-0b6b391385f2";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-ee219268-7bdd-4f28-a0b3-0b6b391385f2";
    }
  } catch {}
})();
function we() {
  const [c, T] = d(false);
  const [S, l] = d(false);
  const [B, R] = d(0);
  const [E, x] = d(false);
  const [$, L] = d(0);
  const [W, C] = d(0);
  const [N, O] = d([]);
  const [Y, y] = d(0);
  const d = A(0);
  const i = A(null);
  const a = A(null);
  const V = A(null);
  const s = A(null);
  const g = A([]);
  const w = A(null);
  const h = A(null);
  const o = A(null);
  const b = A(null);
  const q = A(null);
  const e = A(null);
  const n = A([]);
  const t = A(false);
  const f = A(0);
  const A = A([]);
  const F = A(0);

  y(() => {
    t.current = c;
  }, [c]);

  y(
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

      if (b.current) {
        URL.revokeObjectURL(b.current);
      }
    },
    []
  );

  const _ = q(() => {
    if (!V.current) {
      return;
    }
    const V_current = V.current;
    const V_current_frequencyBinCount = V_current.frequencyBinCount;
    const M = new Uint8Array(V_current_frequencyBinCount);
    V_current.getByteFrequencyData(M);
    let j = 0;
    for (let ce = 0; ce < V_current_frequencyBinCount; ce++) {
      j += M[ce];
    }
    const G = j / V_current_frequencyBinCount / 255;
    const I = Math.min(1, G * 3);
    const K = Math.max(0.1, I);
    if (t.current) {
      const de = performance.now() - f.current;
      const ie = Math.floor(de / 80);
      A.current.push(K);

      if (ie > F.current) {
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
        F.current = ie;
      }

      h.current = requestAnimationFrame(_);
    }
  }, []);

  const H = q(() => {
    const n_current = n.current;
    return n_current.length > 0 ? [...n_current] : [];
  }, []);

  const Z = q(async () => {
    try {
      if (b.current) {
        URL.revokeObjectURL(b.current);
        b.current = null;
      }

      q.current = null;

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
      const M = v.createAnalyser();
      M.fftSize = 256;
      M.smoothingTimeConstant = 0.3;
      V.current = M;
      v.createMediaStreamSource(r).connect(M);
      const G = new MediaRecorder(r, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      i.current = G;
      g.current = [];
      n.current = [];
      f.current = performance.now();
      A.current = [];
      F.current = 0;

      G.ondataavailable = (K) => {
        if (K.data.size > 0) {
          g.current.push(K.data);
        }
      };

      G.start(100);
      T(true);
      l(false);
      R(0);
      L(0);
      C(0);
      x(false);
      d.current = 0;
      O([]);
      y(0);
      t.current = true;
      const I = Date.now();

      w.current = window.setInterval(() => {
        const K = Math.floor((Date.now() - I) / 1000 /* 1e3 */);
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
        T(false);

        if (i.current && i.current.state !== "inactive") {
          i.current.onstop = () => {
            if (g.current.length > 0) {
              const M = i.current?.mimeType || "audio/webm";
              const j = new Blob(g.current, { type: M });
              const G = URL.createObjectURL(j);
              b.current = G;
              q.current = j;
              const I = new Audio(G);
              o.current = I;

              I.onloadedmetadata = () => {
                if (isFinite(I.duration)) {
                  C(I.duration);
                } else {
                  I.currentTime = 1e101 /* 1e101 */;

                  I.ontimeupdate = () => {
                    I.ontimeupdate = null;
                    I.currentTime = 0;
                    C(I.duration);
                  };
                }
              };

              I.onended = () => {
                x(false);
                L(0);
                I.currentTime = 0;

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
          s.current.getTracks().forEach((M) => M.stop());
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
        L(0);
      }),
    [H]
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

    if (b.current) {
      URL.revokeObjectURL(b.current);
      b.current = null;
    }

    q.current = null;
    T(false);
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

  const D = q(() => {
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
        D();
      })
      .catch((v) => {
        console.error("Error playing audio:", v);
        x(false);
      });
  }, [D]);

  const X = q(() => {
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

  const J = q(
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
            D();
          })
          .catch((j) => {
            console.error("Error playing audio:", j);
          });
      }
    },
    [S, D]
  );

  const re = q(() => q.current, []);

  return {
    isRecording: c,
    hasRecording: S,
    recordingTime: B,
    audioLevels: N,
    slideOffset: Y,
    isPlaying: E,
    playbackProgress: $,
    duration: W,
    audioElementRef: o,
    startRecording: Z,
    stopRecording: ee,
    cancelRecording: U,
    playAudio: te,
    pauseAudio: X,
    seekTo: J,
    getAudioBlob: re,
  };
}

const ve = ({ size = 16 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 16 16",
    children: a("rect", {
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
const Q = 24;
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
  const W = A(false);
  const C = A(0);
  const N = A(0);
  const O = A(0);
  const Y = A(0);
  const y = A(null);
  const d = A(null);
  const i = A(0);
  const [a, V] = d(0);
  const s = Math.max(1, Math.floor(a / oe));

  y(() => {
    O.current = slideOffset;

    if (slideOffset === 0) {
      N.current = 0;
    }
  }, [slideOffset]);

  y(() => {
    const L_current = L.current;
    if (!L_current) {
      return;
    }
    const n = new ResizeObserver((f) => {
      for (const A of f) {
        const F = A.contentRect.width;

        if (F > 0) {
          V(F);
        }
      }
    });
    n.observe(L_current);
    const t = L_current.getBoundingClientRect();

    if (t.width > 0) {
      V(t.width);
    }

    return () => {
      n.disconnect();
    };
  }, []);

  y(() => {
    const $_current = $.current;
    if (!$_current || a === 0) {
      return;
    }
    const n = window.devicePixelRatio || 1;
    $_current.width = a * n;
    $_current.height = Q * n;
    $_current.style.width = `${a}px`;
    $_current.style.height = `${Q}px`;
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
      const A = Q / 2;
      const F = Q - 4;
      for (let _ = 0; _ < s; _++) {
        let H;
        if (levels.length === 0) {
          H = 0.05;
        } else if (levels.length === 1) {
          H = levels[0];
        } else {
          const X = (_ / (s - 1)) * (levels.length - 1);
          const J = Math.floor(X);
          const re = Math.min(J + 1, levels.length - 1);
          const r = X - J;
          H = levels[J] * (1 - r) + levels[re] * r;
        }
        const Z = Math.max(4, H * F);
        const ee = _ * oe;
        const U = A - Z / 2;
        const D = _ < e;
        t.fillStyle = D ? be : le;
        const te = ne / 2;
        t.beginPath();
        t.roundRect(ee, U, ne, Z, te);
        t.fill();
      }
      t.restore();
    },
    [levels, a, s]
  );

  const w = q(
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
        const U = e - Y.current;
        const D = (oe / ye) * U;

        if (current < O_current) {
          N.current = Math.min(O_current, current + D);
        } else {
          N.current = O_current;
        }
      }
      Y.current = e;
      t.clearRect(0, 0, $_current.width, $_current.height);
      t.save();
      t.scale(f, f);
      t.translate(-current, 0);
      const H = Q / 2;
      const Z = Q - 4;
      const ee = s + levels.length;
      for (let U = 0; U < ee; U++) {
        const D = U - s;
        const te = D >= 0 && D < levels.length ? levels[D] : 0.05;
        const X = Math.max(4, te * Z);
        const J = U * oe;
        const re = H - X / 2;
        t.fillStyle = le;
        const r = ne / 2;
        t.beginPath();
        t.roundRect(J, re, ne, X, r);
        t.fill();
      }
      t.restore();

      if (N.current !== O.current || isRecording) {
        y.current = requestAnimationFrame(w);
      }
    },
    [levels, a, s, isRecording]
  );

  y(() => {
    if (isRecording) {
      Y.current = performance.now();
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

  y(() => {
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

  y(() => {
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

  y(() => {
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

        W.current = true;
        C.current = h(e);
      }
    },
    [hasRecording, isRecording, isPlaying, h, onPlay]
  );

  const b = q(
    (e) => {
      if (W.current) {
        C.current = h(e);
      }
    },
    [h]
  );

  const q = q(() => {
    if (W.current) {
      onSeek(C.current);
      W.current = false;
    }
  }, [onSeek]);

  y(() => {
    const e = (t) => b(t);

    const n = () => q();

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
  }, [b, q]);

  return a("div", {
    ref: L,
    style: {
      width: "100%",
      height: `${Q}px`,
      overflow: "hidden",
      cursor: hasRecording && !isRecording ? "pointer" : "default",
    },
    onMouseDown: o,
    onTouchStart: o,
    children: a("canvas", { ref: $ }),
  });
}
const Ie = "adg9";
const Te = "Qaik";
const Be = "De0L";
const xe = "lwjW";
const Le = "awjw";
const Me = "JRw7";
const Se = "utCg";
const Ce = "cvRc";
const ke = "kZjc";
const Ee = "gpqu";
const Fe = "L18K";

const k = {
  voiceInput: Ie,
  circleButton: Te,
  playButton: Be,
  hasRecording: xe,
  stopButton: Le,
  recording: Me,
  sendButton: Se,
  audioVisualizer: Ce,
  waveformContainer: ke,
  recordingTime: Ee,
  exiting: Fe,
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
  } = we();

  startRecording(() => {
    startRecording();
  }, []);

  startRecording(() => {
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

  const q = q(async () => {
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

  return playAudio("div", {
    className: n,
    children: [
      playAudio("button", {
        className: `${k.circleButton} ${k.playButton}`,
        onClick: h,
        children: isPlaying
          ? playAudio(I, { size: 20 })
          : playAudio(a_1, { size: 20 }),
      }),
      playAudio("div", {
        className: k.audioVisualizer,
        children: [
          playAudio("div", {
            className: k.waveformContainer,
            children: playAudio(Ae, {
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
          playAudio("span", { className: k.recordingTime, children: e }),
        ],
      }),
      playAudio("button", {
        className: `${k.circleButton} ${k.stopButton}`,
        onClick: o,
        children: playAudio(ve, { size: 20 }),
      }),
      playAudio("button", {
        className: `${k.circleButton} ${k.sendButton}`,
        onClick: q,
        disabled: B || (isRecording && recordingTime < 1),
        children: B
          ? playAudio(a3, { size: "xs" })
          : playAudio(ag, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
