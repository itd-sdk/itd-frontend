import { d, A, y, q, a, a4, ag } from "./index-DuQT229k.js";
import { I, a as a_1 } from "./IconPlay-D_saP_Lm.js";
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
      c._sentryDebugIds[I] = "89f84d06-1ec7-4322-87d1-b92b16f5ad06";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-89f84d06-1ec7-4322-87d1-b92b16f5ad06";
    }
  } catch {}
})();
function ve() {
  const [c, I] = d(false);
  const [S, l] = d(false);
  const [B, R] = d(0);
  const [k, x] = d(false);
  const [$, M] = d(0);
  const [G, C] = d(0);
  const [U, O] = d([]);
  const [X, y] = d(0);
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
    const L = new Uint8Array(j_current_frequencyBinCount);
    j_current.getByteFrequencyData(L);
    let W = 0;
    for (let ce = 0; ce < j_current_frequencyBinCount; ce++) {
      W += L[ce];
    }
    const V = W / j_current_frequencyBinCount / 255;
    const T = Math.min(1, V * 3);
    const K = Math.max(0.1, T);
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
      const w = new AudioContext();
      a.current = w;
      const L = w.createAnalyser();
      L.fftSize = 256;
      L.smoothingTimeConstant = 0.3;
      j.current = L;
      w.createMediaStreamSource(r).connect(L);
      const V = new MediaRecorder(r, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      i.current = V;
      g.current = [];
      n.current = [];
      f.current = performance.now();
      A.current = [];
      F.current = 0;

      V.ondataavailable = (K) => {
        if (K.data.size > 0) {
          g.current.push(K.data);
        }
      };

      V.start(100);
      I(true);
      l(false);
      R(0);
      M(0);
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
              const L = i.current?.mimeType || "audio/webm";
              const W = new Blob(g.current, { type: L });
              const V = URL.createObjectURL(W);
              b.current = V;
              q.current = W;
              const T = new Audio(V);
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
                M(0);
                T.currentTime = 0;

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
          s.current.getTracks().forEach((L) => L.stop());
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
        M(0);
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
    x(false);
    M(0);
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
        M(o_current.currentTime / o_current.duration);
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
      M(0);
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

      o.current.duration > 0 && M(o.current.currentTime / o.current.duration);
    }

    x(false);
  }, []);

  const J = q(
    (r) => {
      if (!o.current || !S) {
        return;
      }
      const o_current = o.current;
      const L = Math.max(0, Math.min(1, r));
      o_current.currentTime = L * o_current.duration;
      M(L);

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

  const re = q(() => q.current, []);

  return {
    isRecording: c,
    hasRecording: S,
    recordingTime: B,
    audioLevels: U,
    slideOffset: X,
    isPlaying: k,
    playbackProgress: $,
    duration: G,
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
  const M = A(null);
  const G = A(false);
  const C = A(0);
  const U = A(0);
  const O = A(0);
  const X = A(0);
  const y = A(null);
  const d = A(null);
  const i = A(0);
  const [a, j] = d(0);
  const s = Math.max(1, Math.floor(a / oe));

  y(() => {
    O.current = slideOffset;

    if (slideOffset === 0) {
      U.current = 0;
    }
  }, [slideOffset]);

  y(() => {
    const M_current = M.current;
    if (!M_current) {
      return;
    }
    const n = new ResizeObserver((f) => {
      for (const A of f) {
        const F = A.contentRect.width;

        if (F > 0) {
          j(F);
        }
      }
    });
    n.observe(M_current);
    const t = M_current.getBoundingClientRect();

    if (t.width > 0) {
      j(t.width);
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
          const Y = (_ / (s - 1)) * (levels.length - 1);
          const J = Math.floor(Y);
          const re = Math.min(J + 1, levels.length - 1);
          const r = Y - J;
          H = levels[J] * (1 - r) + levels[re] * r;
        }
        const Z = Math.max(4, H * F);
        const ee = _ * oe;
        const N = A - Z / 2;
        const P = _ < e;
        t.fillStyle = P ? be : le;
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
        const P = (oe / ye) * N;

        if (current < O_current) {
          U.current = Math.min(O_current, current + P);
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
        const P = N - s;
        const te = P >= 0 && P < levels.length ? levels[P] : 0.05;
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
    const M_current = M.current;
    if (!M_current) {
      return 0;
    }
    const t = M_current.getBoundingClientRect();
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

        G.current = true;
        C.current = h(e);
      }
    },
    [hasRecording, isRecording, isPlaying, h, onPlay]
  );

  const b = q(
    (e) => {
      if (G.current) {
        C.current = h(e);
      }
    },
    [h]
  );

  const q = q(() => {
    if (G.current) {
      onSeek(C.current);
      G.current = false;
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
    ref: M,
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
const Te = "Eg9M";
const Ie = "ricR";
const Be = "k427";
const xe = "XtoB";
const Me = "unJi";
const Le = "xEB0";
const Se = "k5Gh";
const Ce = "Uz0G";
const Ee = "TsBp";
const ke = "v8nu";
const Fe = "EKCe";

const E = {
  voiceInput: Te,
  circleButton: Ie,
  playButton: Be,
  hasRecording: xe,
  stopButton: Me,
  recording: Le,
  sendButton: Se,
  audioVisualizer: Ce,
  waveformContainer: Ee,
  recordingTime: ke,
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
        disabled: B || (isRecording && recordingTime < 1),
        children: B
          ? playAudio(a4, { size: "xs" })
          : playAudio(ag, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
