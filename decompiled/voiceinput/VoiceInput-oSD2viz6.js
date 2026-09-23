import { d, A, h, q, A as A_1, a8, ar } from "./index-B74jCtUp.js";
import { I, a } from "./IconPlay-CPVHR2f4.js";
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
    const T = new c.Error().stack;

    if (T) {
      c._sentryDebugIds = c._sentryDebugIds || {};
      c._sentryDebugIds[T] = "26e22a3a-1f9b-4c03-8fac-3d19070d3536";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-26e22a3a-1f9b-4c03-8fac-3d19070d3536";
    }
  } catch {}
})();
function ve() {
  const [c, T] = d(false);
  const [L, l] = d(false);
  const [B, R] = d(0);
  const [E, x] = d(false);
  const [$, M] = d(0);
  const [G, k] = d(0);
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
  const A = A(null);
  const q = A(null);
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

      if (A.current) {
        URL.revokeObjectURL(A.current);
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
    const S = new Uint8Array(j_current_frequencyBinCount);
    j_current.getByteFrequencyData(S);
    let W = 0;
    for (let ce = 0; ce < j_current_frequencyBinCount; ce++) {
      W += S[ce];
    }
    const V = W / j_current_frequencyBinCount / 255;
    const I = Math.min(1, V * 3);
    const K = Math.max(0.1, I);
    if (t.current) {
      const de = performance.now() - f.current;
      const ie = Math.floor(de / 80);
      b.current.push(K);

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

  const H = q(() => {
    const n_current = n.current;
    return n_current.length > 0 ? [...n_current] : [];
  }, []);

  const Z = q(async () => {
    try {
      if (A.current) {
        URL.revokeObjectURL(A.current);
        A.current = null;
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
      const S = w.createAnalyser();
      S.fftSize = 256;
      S.smoothingTimeConstant = 0.3;
      j.current = S;
      w.createMediaStreamSource(r).connect(S);
      const V = new MediaRecorder(r, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      i.current = V;
      g.current = [];
      n.current = [];
      f.current = performance.now();
      b.current = [];
      F.current = 0;

      V.ondataavailable = (K) => {
        if (K.data.size > 0) {
          g.current.push(K.data);
        }
      };

      V.start(100);
      T(true);
      l(false);
      R(0);
      M(0);
      k(0);
      x(false);
      d.current = 0;
      O([]);
      y(0);
      t.current = true;
      const I = Date.now();

      v.current = window.setInterval(() => {
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
              const S = i.current?.mimeType || "audio/webm";
              const W = new Blob(g.current, { type: S });
              const V = URL.createObjectURL(W);
              A.current = V;
              q.current = W;
              const I = new Audio(V);
              o.current = I;

              I.onloadedmetadata = () => {
                if (isFinite(I.duration)) {
                  k(I.duration);
                } else {
                  I.currentTime = 1e101 /* 1e101 */;

                  I.ontimeupdate = () => {
                    I.ontimeupdate = null;
                    I.currentTime = 0;
                    k(I.duration);
                  };
                }
              };

              I.onended = () => {
                x(false);
                M(0);
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
          s.current.getTracks().forEach((S) => S.stop());
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

    if (A.current) {
      URL.revokeObjectURL(A.current);
      A.current = null;
    }

    q.current = null;
    T(false);
    l(false);
    R(0);
    x(false);
    M(0);
    k(0);
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
      if (!o.current || !L) {
        return;
      }
      const o_current = o.current;
      const S = Math.max(0, Math.min(1, r));
      o_current.currentTime = S * o_current.duration;
      M(S);

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
    [L, P]
  );

  const re = q(() => q.current, []);

  return {
    isRecording: c,
    hasRecording: L,
    recordingTime: B,
    audioLevels: U,
    slideOffset: X,
    isPlaying: E,
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
const Q = 24;
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
  const $ = A(null);
  const M = A(null);
  const G = A(false);
  const k = A(0);
  const U = A(0);
  const O = A(0);
  const X = A(0);
  const y = A(null);
  const d = A(null);
  const i = A(0);
  const [a, j] = d(0);
  const s = Math.max(1, Math.floor(a / oe));

  h(() => {
    O.current = slideOffset;

    if (slideOffset === 0) {
      U.current = 0;
    }
  }, [slideOffset]);

  h(() => {
    const M_current = M.current;
    if (!M_current) {
      return;
    }
    const n = new ResizeObserver((f) => {
      for (const b of f) {
        const F = b.contentRect.width;

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

  h(() => {
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
      const b = Q / 2;
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
        const N = b - Z / 2;
        const P = _ < e;
        t.fillStyle = P ? Ae : le;
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

  h(() => {
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
        k.current = h(e);
      }
    },
    [hasRecording, isRecording, isPlaying, h, onPlay]
  );

  const A = q(
    (e) => {
      if (G.current) {
        k.current = h(e);
      }
    },
    [h]
  );

  const q = q(() => {
    if (G.current) {
      onSeek(k.current);
      G.current = false;
    }
  }, [onSeek]);

  h(() => {
    const e = (t) => A(t);

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
  }, [A, q]);

  return A_1("div", {
    ref: M,
    style: {
      width: "100%",
      height: `${Q}px`,
      overflow: "hidden",
      cursor: hasRecording && !isRecording ? "pointer" : "default",
    },
    onMouseDown: o,
    onTouchStart: o,
    children: A_1("canvas", { ref: $ }),
  });
}
const Ie = "Mfm8";
const Te = "I4Gl";
const Be = "ksx1";
const xe = "rFkA";
const Me = "Jk1i";
const Se = "pXW3";
const Le = "U5cq";
const ke = "veEI";
const Ce = "ASck";
const Ee = "AGRd";
const Fe = "ovAu";

const C = {
  voiceInput: Ie,
  circleButton: Te,
  playButton: Be,
  hasRecording: xe,
  stopButton: Me,
  recording: Se,
  sendButton: Le,
  audioVisualizer: ke,
  waveformContainer: Ce,
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

  const A = q(
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
    C.voiceInput,
    isRecording ? C.recording : "",
    hasRecording ? C.hasRecording : "",
    isExiting ? C.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return A_1("div", {
    className: n,
    children: [
      A_1("button", {
        className: `${C.circleButton} ${C.playButton}`,
        onClick: h,
        children: isPlaying
          ? A_1(I, { size: 20 })
          : A_1(playAudio, { size: 20 }),
      }),
      A_1("div", {
        className: C.audioVisualizer,
        children: [
          A_1("div", {
            className: C.waveformContainer,
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
          A_1("span", { className: C.recordingTime, children: e }),
        ],
      }),
      A_1("button", {
        className: `${C.circleButton} ${C.stopButton}`,
        onClick: o,
        children: A_1(we, { size: 20 }),
      }),
      A_1("button", {
        className: `${C.circleButton} ${C.sendButton}`,
        onClick: q,
        disabled: B || (isRecording && recordingTime < 1),
        children: B ? A_1(a8, { size: "xs" }) : A_1(ar, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
