import { d, A, y, q, A as A_1, a5, aj } from "./index-DDTOXJaD.js";
import { I, a } from "./IconPlay-CttELGEq.js";
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
      c._sentryDebugIds[T] = "89650ce1-ebbc-4eea-9b24-7e5a63e5f3d3";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-89650ce1-ebbc-4eea-9b24-7e5a63e5f3d3";
    }
  } catch {}
})();
function ve() {
  const [c, T] = d(false);
  const [M, l] = d(false);
  const [B, R] = d(0);
  const [E, x] = d(false);
  const [z, S] = d(0);
  const [W, C] = d(0);
  const [N, D] = d([]);
  const [Q, y] = d(0);
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
  const $ = A(null);
  const e = A(null);
  const n = A([]);
  const t = A(false);
  const f = A(0);
  const A = A([]);
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
    if (!j.current) {
      return;
    }
    const j_current = j.current;
    const j_current_frequencyBinCount = j_current.frequencyBinCount;
    const L = new Uint8Array(j_current_frequencyBinCount);
    j_current.getByteFrequencyData(L);
    let V = 0;
    for (let ce = 0; ce < j_current_frequencyBinCount; ce++) {
      V += L[ce];
    }
    const G = V / j_current_frequencyBinCount / 255;
    const I = Math.min(1, G * 3);
    const K = Math.max(0.1, I);
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

        D((ae) => [...ae, se]);

        y(d.current);
        A.current = [];
        k.current = ie;
      }

      h.current = requestAnimationFrame(_);
    }
  }, []);

  const q = q(() => {
    const n_current = n.current;
    return n_current.length > 0 ? [...n_current] : [];
  }, []);

  const Z = q(async () => {
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
      j.current = L;
      w.createMediaStreamSource(r).connect(L);
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
      k.current = 0;

      G.ondataavailable = (K) => {
        if (K.data.size > 0) {
          g.current.push(K.data);
        }
      };

      G.start(100);
      T(true);
      l(false);
      R(0);
      S(0);
      C(0);
      x(false);
      d.current = 0;
      D([]);
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
              const L = i.current?.mimeType || "audio/webm";
              const V = new Blob(g.current, { type: L });
              const G = URL.createObjectURL(V);
              b.current = G;
              $.current = V;
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
                S(0);
                I.currentTime = 0;

                if (e.current) {
                  clearInterval(e.current);
                  e.current = null;
                }
              };

              l(true);
              r(V);
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

        const w = q();
        d.current = 0;
        D(w);
        y(0);
        S(0);
      }),
    [q]
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

    $.current = null;
    T(false);
    l(false);
    R(0);
    x(false);
    S(0);
    C(0);
    d.current = 0;
    D([]);
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
        S(o_current.currentTime / o_current.duration);
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
      S(0);
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

  const X = q(() => {
    if (e.current) {
      clearInterval(e.current);
      e.current = null;
    }

    if (o.current) {
      o.current.pause();

      o.current.duration > 0 && S(o.current.currentTime / o.current.duration);
    }

    x(false);
  }, []);

  const Y = q(
    (r) => {
      if (!o.current || !M) {
        return;
      }
      const o_current = o.current;
      const L = Math.max(0, Math.min(1, r));
      o_current.currentTime = L * o_current.duration;
      S(L);

      if (o_current.paused) {
        e.current && (clearInterval(e.current), (e.current = null));

        o_current
          .play()
          .then(() => {
            x(true);
            P();
          })
          .catch((V) => {
            console.error("Error playing audio:", V);
          });
      }
    },
    [M, P]
  );

  const re = q(() => $.current, []);

  return {
    isRecording: c,
    hasRecording: M,
    recordingTime: B,
    audioLevels: N,
    slideOffset: Q,
    isPlaying: E,
    playbackProgress: z,
    duration: W,
    audioElementRef: o,
    startRecording: Z,
    stopRecording: ee,
    cancelRecording: U,
    playAudio: te,
    pauseAudio: X,
    seekTo: Y,
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
  const z = A(null);
  const S = A(null);
  const W = A(false);
  const C = A(0);
  const N = A(0);
  const D = A(0);
  const Q = A(0);
  const y = A(null);
  const d = A(null);
  const i = A(0);
  const [a, j] = d(0);
  const s = Math.max(1, Math.floor(a / oe));

  y(() => {
    D.current = slideOffset;

    if (slideOffset === 0) {
      N.current = 0;
    }
  }, [slideOffset]);

  y(() => {
    const S_current = S.current;
    if (!S_current) {
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
    n.observe(S_current);
    const t = S_current.getBoundingClientRect();

    if (t.width > 0) {
      j(t.width);
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
    z_current.height = J * n;
    z_current.style.width = `${a}px`;
    z_current.style.height = `${J}px`;
  }, [a]);

  const g = q(
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
      const A = J / 2;
      const k = J - 4;
      for (let _ = 0; _ < s; _++) {
        let q;
        if (levels.length === 0) {
          q = 0.05;
        } else if (levels.length === 1) {
          q = levels[0];
        } else {
          const X = (_ / (s - 1)) * (levels.length - 1);
          const Y = Math.floor(X);
          const re = Math.min(Y + 1, levels.length - 1);
          const r = X - Y;
          q = levels[Y] * (1 - r) + levels[re] * r;
        }
        const Z = Math.max(4, q * k);
        const ee = _ * oe;
        const U = A - Z / 2;
        const P = _ < e;
        t.fillStyle = P ? be : le;
        const te = ne / 2;
        t.beginPath();
        t.roundRect(ee, U, ne, Z, te);
        t.fill();
      }
      t.restore();
    },
    [levels, a, s]
  );

  const v = q(
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
      const D_current = D.current;

      const { current } = N;

      if (current !== D_current) {
        const U = e - Q.current;
        const P = (oe / ye) * U;

        if (current < D_current) {
          N.current = Math.min(D_current, current + P);
        } else {
          N.current = D_current;
        }
      }
      Q.current = e;
      t.clearRect(0, 0, z_current.width, z_current.height);
      t.save();
      t.scale(f, f);
      t.translate(-current, 0);
      const q = J / 2;
      const Z = J - 4;
      const ee = s + levels.length;
      for (let U = 0; U < ee; U++) {
        const P = U - s;
        const te = P >= 0 && P < levels.length ? levels[P] : 0.05;
        const X = Math.max(4, te * Z);
        const Y = U * oe;
        const re = q - X / 2;
        t.fillStyle = le;
        const r = ne / 2;
        t.beginPath();
        t.roundRect(Y, re, ne, X, r);
        t.fill();
      }
      t.restore();

      if (N.current !== D.current || isRecording) {
        y.current = requestAnimationFrame(v);
      }
    },
    [levels, a, s, isRecording]
  );

  y(() => {
    if (isRecording) {
      Q.current = performance.now();
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
      const M_current = audioRef.current;
      if (!M_current || M_current.paused || M_current.ended) {
        d.current = null;
        return;
      }
      const t = M_current.currentTime / M_current.duration;
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
      const M_current = audioRef.current;
      if (M_current && M_current.duration > 0 && M_current.currentTime > 0) {
        const n = M_current.currentTime / M_current.duration;
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
    const S_current = S.current;
    if (!S_current) {
      return 0;
    }
    const t = S_current.getBoundingClientRect();
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

  const $ = q(() => {
    if (W.current) {
      onSeek(C.current);
      W.current = false;
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
const Ie = "NPQH";
const Te = "ngdO";
const Be = "KhiV";
const xe = "wSQF";
const Se = "fFtH";
const Le = "HmqA";
const Me = "rerm";
const Ce = "gAo0";
const Fe = "VXmO";
const Ee = "lh8Q";
const ke = "Qhm0";

const F = {
  voiceInput: Ie,
  circleButton: Te,
  playButton: Be,
  hasRecording: xe,
  stopButton: Se,
  recording: Le,
  sendButton: Me,
  audioVisualizer: Ce,
  waveformContainer: Fe,
  recordingTime: Ee,
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

  const $ = q(async () => {
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
        children: B ? A_1(a5, { size: "xs" }) : A_1(aj, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
