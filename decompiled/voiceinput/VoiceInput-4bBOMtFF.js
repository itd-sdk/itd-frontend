import { d, A, y, d as d_1, a, a4, ag } from "./index-BAlLDjSl.js";
import { I, a as a_1 } from "./IconPlay-OFjM8Dz9.js";
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
      c._sentryDebugIds[T] = "913a791e-5a12-415b-9b89-57aed5359d6c";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-913a791e-5a12-415b-9b89-57aed5359d6c";
    }
  } catch {}
})();
function ve() {
  const [c, T] = d(false);
  const [S, l] = d(false);
  const [B, R] = d(0);
  const [E, x] = d(false);
  const [z, L] = d(0);
  const [j, C] = d(0);
  const [U, O] = d([]);
  const [V, y] = d(0);
  const d = A(0);
  const i = A(null);
  const a = A(null);
  const X = A(null);
  const s = A(null);
  const g = A([]);
  const v = A(null);
  const h = A(null);
  const o = A(null);
  const b = A(null);
  const $ = A(null);
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

  const _ = d_1(() => {
    if (!X.current) {
      return;
    }
    const X_current = X.current;
    const X_current_frequencyBinCount = X_current.frequencyBinCount;
    const M = new Uint8Array(X_current_frequencyBinCount);
    X_current.getByteFrequencyData(M);
    let W = 0;
    for (let ce = 0; ce < X_current_frequencyBinCount; ce++) {
      W += M[ce];
    }
    const G = W / X_current_frequencyBinCount / 255;
    const I = Math.min(1, G * 3);
    const Q = Math.max(0.1, I);
    if (t.current) {
      const de = performance.now() - f.current;
      const ie = Math.floor(de / 80);
      A.current.push(Q);

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

  const H = d_1(() => {
    const n_current = n.current;
    return n_current.length > 0 ? [...n_current] : [];
  }, []);

  const J = d_1(async () => {
    try {
      if (b.current) {
        URL.revokeObjectURL(b.current);
        b.current = null;
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
      const w = new AudioContext();
      a.current = w;
      const M = w.createAnalyser();
      M.fftSize = 256;
      M.smoothingTimeConstant = 0.3;
      X.current = M;
      w.createMediaStreamSource(r).connect(M);
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

      G.ondataavailable = (Q) => {
        if (Q.data.size > 0) {
          g.current.push(Q.data);
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

      v.current = window.setInterval(() => {
        const Q = Math.floor((Date.now() - I) / 1000 /* 1e3 */);
        R(Q);
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
        T(false);

        if (i.current && i.current.state !== "inactive") {
          i.current.onstop = () => {
            if (g.current.length > 0) {
              const M = i.current?.mimeType || "audio/webm";
              const W = new Blob(g.current, { type: M });
              const G = URL.createObjectURL(W);
              b.current = G;
              $.current = W;
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
              r(W);
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

        const w = H();
        d.current = 0;
        O(w);
        y(0);
        L(0);
      }),
    [H]
  );

  const N = d_1(() => {
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

    $.current = null;
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

  const P = d_1(() => {
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

  const te = d_1(() => {
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

  const Y = d_1(() => {
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

  const K = d_1(
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
          .catch((W) => {
            console.error("Error playing audio:", W);
          });
      }
    },
    [S, P]
  );

  const re = d_1(() => $.current, []);

  return {
    isRecording: c,
    hasRecording: S,
    recordingTime: B,
    audioLevels: U,
    slideOffset: V,
    isPlaying: E,
    playbackProgress: z,
    duration: j,
    audioElementRef: o,
    startRecording: J,
    stopRecording: ee,
    cancelRecording: N,
    playAudio: te,
    pauseAudio: Y,
    seekTo: K,
    getAudioBlob: re,
  };
}

const we = ({ size = 16 }) =>
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
const Z = 24;
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
  const z = A(null);
  const L = A(null);
  const j = A(false);
  const C = A(0);
  const U = A(0);
  const O = A(0);
  const V = A(0);
  const y = A(null);
  const d = A(null);
  const i = A(0);
  const [a, X] = d(0);
  const s = Math.max(1, Math.floor(a / oe));

  y(() => {
    O.current = slideOffset;

    if (slideOffset === 0) {
      U.current = 0;
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
          X(F);
        }
      }
    });
    n.observe(L_current);
    const t = L_current.getBoundingClientRect();

    if (t.width > 0) {
      X(t.width);
    }

    return () => {
      n.disconnect();
    };
  }, []);

  y(() => {
    const z_current = z.current;
    if (!z_current || a === 0) {
      return;
    }
    const n = window.devicePixelRatio || 1;
    z_current.width = a * n;
    z_current.height = Z * n;
    z_current.style.width = `${a}px`;
    z_current.style.height = `${Z}px`;
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
      const A = Z / 2;
      const F = Z - 4;
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
        const J = Math.max(4, H * F);
        const ee = _ * oe;
        const N = A - J / 2;
        const P = _ < e;
        t.fillStyle = P ? be : le;
        const te = ne / 2;
        t.beginPath();
        t.roundRect(ee, N, ne, J, te);
        t.fill();
      }
      t.restore();
    },
    [levels, a, s]
  );

  const v = d_1(
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

      const { current } = U;

      if (current !== O_current) {
        const N = e - V.current;
        const P = (oe / ye) * N;

        if (current < O_current) {
          U.current = Math.min(O_current, current + P);
        } else {
          U.current = O_current;
        }
      }
      V.current = e;
      t.clearRect(0, 0, z_current.width, z_current.height);
      t.save();
      t.scale(f, f);
      t.translate(-current, 0);
      const H = Z / 2;
      const J = Z - 4;
      const ee = s + levels.length;
      for (let N = 0; N < ee; N++) {
        const P = N - s;
        const te = P >= 0 && P < levels.length ? levels[P] : 0.05;
        const Y = Math.max(4, te * J);
        const K = N * oe;
        const re = H - Y / 2;
        t.fillStyle = le;
        const r = ne / 2;
        t.beginPath();
        t.roundRect(K, re, ne, Y, r);
        t.fill();
      }
      t.restore();

      if (U.current !== O.current || isRecording) {
        y.current = requestAnimationFrame(v);
      }
    },
    [levels, a, s, isRecording]
  );

  y(() => {
    if (isRecording) {
      V.current = performance.now();
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

  const h = d_1((e) => {
    const L_current = L.current;
    if (!L_current) {
      return 0;
    }
    const t = L_current.getBoundingClientRect();
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

        j.current = true;
        C.current = h(e);
      }
    },
    [hasRecording, isRecording, isPlaying, h, onPlay]
  );

  const b = d_1(
    (e) => {
      if (j.current) {
        C.current = h(e);
      }
    },
    [h]
  );

  const $ = d_1(() => {
    if (j.current) {
      onSeek(C.current);
      j.current = false;
    }
  }, [onSeek]);

  y(() => {
    const e = (t) => b(t);

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
  }, [b, $]);

  return a("div", {
    ref: L,
    style: {
      width: "100%",
      height: `${Z}px`,
      overflow: "hidden",
      cursor: hasRecording && !isRecording ? "pointer" : "default",
    },
    onMouseDown: o,
    onTouchStart: o,
    children: a("canvas", { ref: z }),
  });
}
const Ie = "qXk7";
const Te = "UaKX";
const Be = "hHiT";
const xe = "OKjm";
const Le = "qKXm";
const Me = "vQpI";
const Se = "sG5L";
const Ce = "AvZy";
const ke = "Impi";
const Ee = "UvnW";
const Fe = "jyPb";

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
  } = ve();

  startRecording(() => {
    startRecording();
  }, []);

  startRecording(() => {
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

  const b = d_1(
    (t) => {
      seekTo(t);
    },
    [seekTo]
  );

  const $ = d_1(async () => {
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
        children: playAudio(we, { size: 20 }),
      }),
      playAudio("button", {
        className: `${k.circleButton} ${k.sendButton}`,
        onClick: $,
        disabled: B || (isRecording && recordingTime < 1),
        children: B
          ? playAudio(a4, { size: "xs" })
          : playAudio(ag, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
