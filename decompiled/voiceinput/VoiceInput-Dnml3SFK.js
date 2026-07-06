import { d, A, y, q, a, a4, ag } from "./index-CFv_0Hh6.js";
import { I, a as a_1 } from "./IconPlay-DNSvFYwZ.js";
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
      c._sentryDebugIds[I] = "056d7bf8-cd7f-4a90-9515-3557f0b7d826";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-056d7bf8-cd7f-4a90-9515-3557f0b7d826";
    }
  } catch {}
})();
function ve() {
  const [c, I] = d(false);
  const [S, l] = d(false);
  const [x, R] = d(0);
  const [F, B] = d(false);
  const [$, L] = d(0);
  const [W, C] = d(0);
  const [U, O] = d([]);
  const [X, y] = d(0);
  const d = A(0);
  const i = A(null);
  const a = A(null);
  const G = A(null);
  const s = A(null);
  const g = A([]);
  const v = A(null);
  const h = A(null);
  const o = A(null);
  const b = A(null);
  const q = A(null);
  const e = A(null);
  const n = A([]);
  const t = A(false);
  const f = A(0);
  const T = A([]);
  const k = A(0);

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

  const _ = q(() => {
    if (!G.current) {
      return;
    }
    const G_current = G.current;
    const G_current_frequencyBinCount = G_current.frequencyBinCount;
    const M = new Uint8Array(G_current_frequencyBinCount);
    G_current.getByteFrequencyData(M);
    let j = 0;
    for (let ce = 0; ce < G_current_frequencyBinCount; ce++) {
      j += M[ce];
    }
    const V = j / G_current_frequencyBinCount / 255;
    const A = Math.min(1, V * 3);
    const K = Math.max(0.1, A);
    if (t.current) {
      const de = performance.now() - f.current;
      const ie = Math.floor(de / 80);
      T.current.push(K);

      if (ie > k.current) {
        const T_current = T.current;

        const se =
          T_current.length > 0
            ? T_current.reduce((ae, fe) => ae + fe, 0) / T_current.length
            : 0.05;

        n.current.push(se);
        d.current += 4;

        O((ae) => [...ae, se]);

        y(d.current);
        T.current = [];
        k.current = ie;
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
      const w = new AudioContext();
      a.current = w;
      const M = w.createAnalyser();
      M.fftSize = 256;
      M.smoothingTimeConstant = 0.3;
      G.current = M;
      w.createMediaStreamSource(r).connect(M);
      const V = new MediaRecorder(r, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      i.current = V;
      g.current = [];
      n.current = [];
      f.current = performance.now();
      T.current = [];
      k.current = 0;

      V.ondataavailable = (K) => {
        if (K.data.size > 0) {
          g.current.push(K.data);
        }
      };

      V.start(100);
      I(true);
      l(false);
      R(0);
      L(0);
      C(0);
      B(false);
      d.current = 0;
      O([]);
      y(0);
      t.current = true;
      const A = Date.now();

      v.current = window.setInterval(() => {
        const K = Math.floor((Date.now() - A) / 1000 /* 1e3 */);
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
              const j = new Blob(g.current, { type: M });
              const V = URL.createObjectURL(j);
              b.current = V;
              q.current = j;
              const A = new Audio(V);
              o.current = A;

              A.onloadedmetadata = () => {
                if (isFinite(A.duration)) {
                  C(A.duration);
                } else {
                  A.currentTime = 1e101 /* 1e101 */;

                  A.ontimeupdate = () => {
                    A.ontimeupdate = null;
                    A.currentTime = 0;
                    C(A.duration);
                  };
                }
              };

              A.onended = () => {
                B(false);
                L(0);
                A.currentTime = 0;

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

  const N = q(() => {
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

    q.current = null;
    I(false);
    l(false);
    R(0);
    B(false);
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

    B(true);

    o_current
      .play()
      .then(() => {
        D();
      })
      .catch((w) => {
        console.error("Error playing audio:", w);
        B(false);
      });
  }, [D]);

  const Y = q(() => {
    if (e.current) {
      clearInterval(e.current);
      e.current = null;
    }

    if (o.current) {
      o.current.pause();

      o.current.duration > 0 && L(o.current.currentTime / o.current.duration);
    }

    B(false);
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
            B(true);
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
    recordingTime: x,
    audioLevels: U,
    slideOffset: X,
    isPlaying: F,
    playbackProgress: $,
    duration: W,
    audioElementRef: o,
    startRecording: Z,
    stopRecording: ee,
    cancelRecording: N,
    playAudio: te,
    pauseAudio: Y,
    seekTo: J,
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
const Q = 24;
const ye = 80;
const le = "rgba(142, 142, 147, 0.6)";
const be = "#FFFFFF";
function Te({
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
  const U = A(0);
  const O = A(0);
  const X = A(0);
  const y = A(null);
  const d = A(null);
  const i = A(0);
  const [a, G] = d(0);
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
      for (const T of f) {
        const k = T.contentRect.width;

        if (k > 0) {
          G(k);
        }
      }
    });
    n.observe(L_current);
    const t = L_current.getBoundingClientRect();

    if (t.width > 0) {
      G(t.width);
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
      const T = Q / 2;
      const k = Q - 4;
      for (let _ = 0; _ < s; _++) {
        let H;
        if (levels.length === 0) {
          H = 0.05;
        } else if (levels.length === 1) {
          H = levels[0];
        } else {
          const Y = (_ / (s - 1)) * (levels.length - 1);
          const J = Math.floor(Y);
          const re = Math.min(J + 1, levels.length - 1);
          const r = Y - J;
          H = levels[J] * (1 - r) + levels[re] * r;
        }
        const Z = Math.max(4, H * k);
        const ee = _ * oe;
        const N = T - Z / 2;
        const D = _ < e;
        t.fillStyle = D ? be : le;
        const te = ne / 2;
        t.beginPath();
        t.roundRect(ee, N, ne, Z, te);
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

      const { current } = U;

      if (current !== O_current) {
        const N = e - X.current;
        const D = (oe / ye) * N;

        if (current < O_current) {
          U.current = Math.min(O_current, current + D);
        } else {
          U.current = O_current;
        }
      }
      X.current = e;
      t.clearRect(0, 0, $_current.width, $_current.height);
      t.save();
      t.scale(f, f);
      t.translate(-current, 0);
      const H = Q / 2;
      const Z = Q - 4;
      const ee = s + levels.length;
      for (let N = 0; N < ee; N++) {
        const D = N - s;
        const te = D >= 0 && D < levels.length ? levels[D] : 0.05;
        const Y = Math.max(4, te * Z);
        const J = N * oe;
        const re = H - Y / 2;
        t.fillStyle = le;
        const r = ne / 2;
        t.beginPath();
        t.roundRect(J, re, ne, Y, r);
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
      X.current = performance.now();
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
const Ae = "lJio";
const Ie = "ll6l";
const xe = "wUXb";
const Be = "K4xp";
const Le = "jTjp";
const Me = "i46Q";
const Se = "rTDx";
const Ce = "mpYF";
const Ee = "XEew";
const Fe = "fOvG";
const ke = "rJ8q";

const E = {
  voiceInput: Ae,
  circleButton: Ie,
  playButton: xe,
  hasRecording: Be,
  stopButton: Le,
  recording: Me,
  sendButton: Se,
  audioVisualizer: Ce,
  waveformContainer: Ee,
  recordingTime: Fe,
  exiting: ke,
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
    const T = Math.floor(t % 60);
    return `${f.toString().padStart(2, "0")}:${T.toString().padStart(2, "0")}`;
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

  return playAudio("div", {
    className: n,
    children: [
      playAudio("button", {
        className: `${E.circleButton} ${E.playButton}`,
        onClick: h,
        children: isPlaying
          ? playAudio(onSend, { size: 20 })
          : playAudio(a_1, { size: 20 }),
      }),
      playAudio("div", {
        className: E.audioVisualizer,
        children: [
          playAudio("div", {
            className: E.waveformContainer,
            children: playAudio(Te, {
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
          playAudio("span", { className: E.recordingTime, children: e }),
        ],
      }),
      playAudio("button", {
        className: `${E.circleButton} ${E.stopButton}`,
        onClick: o,
        children: playAudio(we, { size: 20 }),
      }),
      playAudio("button", {
        className: `${E.circleButton} ${E.sendButton}`,
        onClick: q,
        disabled: x || (isRecording && recordingTime < 1),
        children: x
          ? playAudio(a4, { size: "xs" })
          : playAudio(ag, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
