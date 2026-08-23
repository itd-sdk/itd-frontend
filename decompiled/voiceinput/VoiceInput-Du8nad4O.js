import { d, A, y, q, A as A_1, a5, aj } from "./index-pEgBAsWz.js";
import { I, a } from "./IconPlay-BkGkbvM5.js";
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
      c._sentryDebugIds[T] = "3868d10a-ff6f-450f-84e8-95a7f25b96f9";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-3868d10a-ff6f-450f-84e8-95a7f25b96f9";
    }
  } catch {}
})();
function ve() {
  const [c, T] = d(false);
  const [C, l] = d(false);
  const [B, R] = d(0);
  const [E, x] = d(false);
  const [H, L] = d(0);
  const [W, M] = d(0);
  const [N, P] = d([]);
  const [V, y] = d(0);
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
    if (!G.current) {
      return;
    }
    const G_current = G.current;
    const G_current_frequencyBinCount = G_current.frequencyBinCount;
    const S = new Uint8Array(G_current_frequencyBinCount);
    G_current.getByteFrequencyData(S);
    let j = 0;
    for (let ce = 0; ce < G_current_frequencyBinCount; ce++) {
      j += S[ce];
    }
    const Y = j / G_current_frequencyBinCount / 255;
    const I = Math.min(1, Y * 3);
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

        P((ae) => [...ae, se]);

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

  const Q = q(async () => {
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
      const S = w.createAnalyser();
      S.fftSize = 256;
      S.smoothingTimeConstant = 0.3;
      G.current = S;
      w.createMediaStreamSource(r).connect(S);
      const Y = new MediaRecorder(r, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      i.current = Y;
      g.current = [];
      n.current = [];
      f.current = performance.now();
      A.current = [];
      k.current = 0;

      Y.ondataavailable = (K) => {
        if (K.data.size > 0) {
          g.current.push(K.data);
        }
      };

      Y.start(100);
      T(true);
      l(false);
      R(0);
      L(0);
      M(0);
      x(false);
      d.current = 0;
      P([]);
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
              const j = new Blob(g.current, { type: S });
              const Y = URL.createObjectURL(j);
              b.current = Y;
              $.current = j;
              const I = new Audio(Y);
              o.current = I;

              I.onloadedmetadata = () => {
                if (isFinite(I.duration)) {
                  M(I.duration);
                } else {
                  I.currentTime = 1e101 /* 1e101 */;

                  I.ontimeupdate = () => {
                    I.ontimeupdate = null;
                    I.currentTime = 0;
                    M(I.duration);
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

        const w = q();
        d.current = 0;
        P(w);
        y(0);
        L(0);
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
    L(0);
    M(0);
    d.current = 0;
    P([]);
    y(0);
    n.current = [];
    g.current = [];
  }, []);

  const O = q(() => {
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
        O();
      })
      .catch((w) => {
        console.error("Error playing audio:", w);
        x(false);
      });
  }, [O]);

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
      if (!o.current || !C) {
        return;
      }
      const o_current = o.current;
      const S = Math.max(0, Math.min(1, r));
      o_current.currentTime = S * o_current.duration;
      L(S);

      if (o_current.paused) {
        e.current && (clearInterval(e.current), (e.current = null));

        o_current
          .play()
          .then(() => {
            x(true);
            O();
          })
          .catch((j) => {
            console.error("Error playing audio:", j);
          });
      }
    },
    [C, O]
  );

  const re = q(() => $.current, []);

  return {
    isRecording: c,
    hasRecording: C,
    recordingTime: B,
    audioLevels: N,
    slideOffset: V,
    isPlaying: E,
    playbackProgress: H,
    duration: W,
    audioElementRef: o,
    startRecording: Q,
    stopRecording: ee,
    cancelRecording: U,
    playAudio: te,
    pauseAudio: X,
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
  const H = A(null);
  const L = A(null);
  const W = A(false);
  const M = A(0);
  const N = A(0);
  const P = A(0);
  const V = A(0);
  const y = A(null);
  const d = A(null);
  const i = A(0);
  const [a, G] = d(0);
  const s = Math.max(1, Math.floor(a / oe));

  y(() => {
    P.current = slideOffset;

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
        const k = A.contentRect.width;

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
    const H_current = H.current;
    if (!H_current || a === 0) {
      return;
    }
    const n = window.devicePixelRatio || 1;
    H_current.width = a * n;
    H_current.height = Z * n;
    H_current.style.width = `${a}px`;
    H_current.style.height = `${Z}px`;
  }, [a]);

  const g = q(
    (e) => {
      const H_current = H.current;
      if (!H_current || a === 0) {
        return;
      }
      const t = H_current.getContext("2d");
      if (!t) {
        return;
      }
      const f = window.devicePixelRatio || 1;
      t.clearRect(0, 0, H_current.width, H_current.height);
      t.save();
      t.scale(f, f);
      const A = Z / 2;
      const k = Z - 4;
      for (let _ = 0; _ < s; _++) {
        let q;
        if (levels.length === 0) {
          q = 0.05;
        } else if (levels.length === 1) {
          q = levels[0];
        } else {
          const X = (_ / (s - 1)) * (levels.length - 1);
          const J = Math.floor(X);
          const re = Math.min(J + 1, levels.length - 1);
          const r = X - J;
          q = levels[J] * (1 - r) + levels[re] * r;
        }
        const Q = Math.max(4, q * k);
        const ee = _ * oe;
        const U = A - Q / 2;
        const O = _ < e;
        t.fillStyle = O ? be : le;
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
      const H_current = H.current;
      if (!H_current || a === 0) {
        return;
      }
      const t = H_current.getContext("2d");
      if (!t) {
        return;
      }
      const f = window.devicePixelRatio || 1;
      const P_current = P.current;

      const { current } = N;

      if (current !== P_current) {
        const U = e - V.current;
        const O = (oe / ye) * U;

        if (current < P_current) {
          N.current = Math.min(P_current, current + O);
        } else {
          N.current = P_current;
        }
      }
      V.current = e;
      t.clearRect(0, 0, H_current.width, H_current.height);
      t.save();
      t.scale(f, f);
      t.translate(-current, 0);
      const q = Z / 2;
      const Q = Z - 4;
      const ee = s + levels.length;
      for (let U = 0; U < ee; U++) {
        const O = U - s;
        const te = O >= 0 && O < levels.length ? levels[O] : 0.05;
        const X = Math.max(4, te * Q);
        const J = U * oe;
        const re = q - X / 2;
        t.fillStyle = le;
        const r = ne / 2;
        t.beginPath();
        t.roundRect(J, re, ne, X, r);
        t.fill();
      }
      t.restore();

      if (N.current !== P.current || isRecording) {
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
      const C_current = audioRef.current;
      if (!C_current || C_current.paused || C_current.ended) {
        d.current = null;
        return;
      }
      const t = C_current.currentTime / C_current.duration;
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
      const C_current = audioRef.current;
      if (C_current && C_current.duration > 0 && C_current.currentTime > 0) {
        const n = C_current.currentTime / C_current.duration;
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
        M.current = h(e);
      }
    },
    [hasRecording, isRecording, isPlaying, h, onPlay]
  );

  const b = q(
    (e) => {
      if (W.current) {
        M.current = h(e);
      }
    },
    [h]
  );

  const $ = q(() => {
    if (W.current) {
      onSeek(M.current);
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
    ref: L,
    style: {
      width: "100%",
      height: `${Z}px`,
      overflow: "hidden",
      cursor: hasRecording && !isRecording ? "pointer" : "default",
    },
    onMouseDown: o,
    onTouchStart: o,
    children: A_1("canvas", { ref: H }),
  });
}
const Ie = "iOOm";
const Te = "ICHl";
const Be = "LnDZ";
const xe = "YYgt";
const Le = "KjiS";
const Se = "JGoX";
const Ce = "fuCJ";
const Me = "KHs5";
const Fe = "v0F7";
const Ee = "LeFn";
const ke = "OGgB";

const F = {
  voiceInput: Ie,
  circleButton: Te,
  playButton: Be,
  hasRecording: xe,
  stopButton: Le,
  recording: Se,
  sendButton: Ce,
  audioVisualizer: Me,
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
