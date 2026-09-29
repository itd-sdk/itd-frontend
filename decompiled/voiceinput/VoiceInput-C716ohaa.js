import { d, A, h, d as d_1, A as A_1, am, aF } from "./index-D4QRo1-7.js";
import { I, a } from "./IconPlay-C88dmHUd.js";
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
      c._sentryDebugIds[T] = "3a681ede-0393-4464-b333-d1e6481e3ffa";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-3a681ede-0393-4464-b333-d1e6481e3ffa";
    }
  } catch {}
})();
function ve() {
  const [c, T] = d(false);
  const [S, l] = d(false);
  const [B, R] = d(0);
  const [k, x] = d(false);
  const [z, M] = d(0);
  const [G, C] = d(0);
  const [N, O] = d([]);
  const [Y, y] = d(0);
  const d = A(0);
  const i = A(null);
  const a = A(null);
  const V = A(null);
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
  const E = A(0);

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

  const _ = d_1(() => {
    if (!V.current) {
      return;
    }
    const V_current = V.current;
    const V_current_frequencyBinCount = V_current.frequencyBinCount;
    const L = new Uint8Array(V_current_frequencyBinCount);
    V_current.getByteFrequencyData(L);
    let W = 0;
    for (let ce = 0; ce < V_current_frequencyBinCount; ce++) {
      W += L[ce];
    }
    const j = W / V_current_frequencyBinCount / 255;
    const I = Math.min(1, j * 3);
    const J = Math.max(0.1, I);
    if (t.current) {
      const de = performance.now() - f.current;
      const ie = Math.floor(de / 80);
      A.current.push(J);

      if (ie > E.current) {
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
        E.current = ie;
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
      const L = w.createAnalyser();
      L.fftSize = 256;
      L.smoothingTimeConstant = 0.3;
      V.current = L;
      w.createMediaStreamSource(r).connect(L);
      const j = new MediaRecorder(r, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      i.current = j;
      g.current = [];
      n.current = [];
      f.current = performance.now();
      A.current = [];
      E.current = 0;

      j.ondataavailable = (J) => {
        if (J.data.size > 0) {
          g.current.push(J.data);
        }
      };

      j.start(100);
      T(true);
      l(false);
      R(0);
      M(0);
      C(0);
      x(false);
      d.current = 0;
      O([]);
      y(0);
      t.current = true;
      const I = Date.now();

      v.current = window.setInterval(() => {
        const J = Math.floor((Date.now() - I) / 1000 /* 1e3 */);
        R(J);
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
              const L = i.current?.mimeType || "audio/webm";
              const W = new Blob(g.current, { type: L });
              const j = URL.createObjectURL(W);
              b.current = j;
              $.current = W;
              const I = new Audio(j);
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
    M(0);
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
        M(o_current.currentTime / o_current.duration);
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

  const X = d_1(() => {
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

  const Z = d_1(
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

  const re = d_1(() => $.current, []);

  return {
    isRecording: c,
    hasRecording: S,
    recordingTime: B,
    audioLevels: N,
    slideOffset: Y,
    isPlaying: k,
    playbackProgress: z,
    duration: G,
    audioElementRef: o,
    startRecording: Q,
    stopRecording: ee,
    cancelRecording: U,
    playAudio: te,
    pauseAudio: X,
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
const K = 24;
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
  const M = A(null);
  const G = A(false);
  const C = A(0);
  const N = A(0);
  const O = A(0);
  const Y = A(0);
  const y = A(null);
  const d = A(null);
  const i = A(0);
  const [a, V] = d(0);
  const s = Math.max(1, Math.floor(a / oe));

  h(() => {
    O.current = slideOffset;

    if (slideOffset === 0) {
      N.current = 0;
    }
  }, [slideOffset]);

  h(() => {
    const M_current = M.current;
    if (!M_current) {
      return;
    }
    const n = new ResizeObserver((f) => {
      for (const A of f) {
        const E = A.contentRect.width;

        if (E > 0) {
          V(E);
        }
      }
    });
    n.observe(M_current);
    const t = M_current.getBoundingClientRect();

    if (t.width > 0) {
      V(t.width);
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
    z_current.height = K * n;
    z_current.style.width = `${a}px`;
    z_current.style.height = `${K}px`;
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
      const A = K / 2;
      const E = K - 4;
      for (let _ = 0; _ < s; _++) {
        let H;
        if (levels.length === 0) {
          H = 0.05;
        } else if (levels.length === 1) {
          H = levels[0];
        } else {
          const X = (_ / (s - 1)) * (levels.length - 1);
          const Z = Math.floor(X);
          const re = Math.min(Z + 1, levels.length - 1);
          const r = X - Z;
          H = levels[Z] * (1 - r) + levels[re] * r;
        }
        const Q = Math.max(4, H * E);
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

      const { current } = N;

      if (current !== O_current) {
        const U = e - Y.current;
        const P = (oe / ye) * U;

        if (current < O_current) {
          N.current = Math.min(O_current, current + P);
        } else {
          N.current = O_current;
        }
      }
      Y.current = e;
      t.clearRect(0, 0, z_current.width, z_current.height);
      t.save();
      t.scale(f, f);
      t.translate(-current, 0);
      const H = K / 2;
      const Q = K - 4;
      const ee = s + levels.length;
      for (let U = 0; U < ee; U++) {
        const P = U - s;
        const te = P >= 0 && P < levels.length ? levels[P] : 0.05;
        const X = Math.max(4, te * Q);
        const Z = U * oe;
        const re = H - X / 2;
        t.fillStyle = le;
        const r = ne / 2;
        t.beginPath();
        t.roundRect(Z, re, ne, X, r);
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
      Y.current = performance.now();
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

  const h = d_1((e) => {
    const M_current = M.current;
    if (!M_current) {
      return 0;
    }
    const t = M_current.getBoundingClientRect();
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

        G.current = true;
        C.current = h(e);
      }
    },
    [hasRecording, isRecording, isPlaying, h, onPlay]
  );

  const b = d_1(
    (e) => {
      if (G.current) {
        C.current = h(e);
      }
    },
    [h]
  );

  const $ = d_1(() => {
    if (G.current) {
      onSeek(C.current);
      G.current = false;
    }
  }, [onSeek]);

  h(() => {
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

  return A_1("div", {
    ref: M,
    style: {
      width: "100%",
      height: `${K}px`,
      overflow: "hidden",
      cursor: hasRecording && !isRecording ? "pointer" : "default",
    },
    onMouseDown: o,
    onTouchStart: o,
    children: A_1("canvas", { ref: z }),
  });
}
const Ie = "xVIr";
const Te = "W7oG";
const Be = "B7hg";
const xe = "lMTO";
const Me = "ZF7q";
const Le = "Clfa";
const Se = "g9Yb";
const Ce = "oegi";
const Fe = "X8GM";
const ke = "kfcm";
const Ee = "Nldq";

const F = {
  voiceInput: Ie,
  circleButton: Te,
  playButton: Be,
  hasRecording: xe,
  stopButton: Me,
  recording: Le,
  sendButton: Se,
  audioVisualizer: Ce,
  waveformContainer: Fe,
  recordingTime: ke,
  exiting: Ee,
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
    F.voiceInput,
    isRecording ? F.recording : "",
    hasRecording ? F.hasRecording : "",
    isExiting ? F.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return A_1("div", {
    className: n,
    children: [
      A_1("button", {
        className: `${F.circleButton} ${F.playButton}`,
        onClick: h,
        children: isPlaying
          ? A_1(I, { size: 20 })
          : A_1(playAudio, { size: 20 }),
      }),
      A_1("div", {
        className: F.audioVisualizer,
        children: [
          A_1("div", {
            className: F.waveformContainer,
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
          A_1("span", { className: F.recordingTime, children: e }),
        ],
      }),
      A_1("button", {
        className: `${F.circleButton} ${F.stopButton}`,
        onClick: o,
        children: A_1(we, { size: 20 }),
      }),
      A_1("button", {
        className: `${F.circleButton} ${F.sendButton}`,
        onClick: $,
        disabled: B || (isRecording && recordingTime < 1),
        children: B ? A_1(am, { size: "xs" }) : A_1(aF, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
