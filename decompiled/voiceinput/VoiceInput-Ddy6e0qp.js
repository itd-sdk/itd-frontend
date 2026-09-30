import { d, A, h, q, A as A_1, am, aF } from "./index-BuVp7kGl.js";
import { I, a } from "./IconPlay-DBiiuvrx.js";
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
      c._sentryDebugIds[T] = "6cd56c3e-567e-40cf-9aed-15cd77d979c7";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-6cd56c3e-567e-40cf-9aed-15cd77d979c7";
    }
  } catch {}
})();
function ve() {
  const [c, T] = d(false);
  const [C, l] = d(false);
  const [B, R] = d(0);
  const [k, x] = d(false);
  const [$, S] = d(0);
  const [X, L] = d(0);
  const [_, O] = d([]);
  const [Y, y] = d(0);
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

  const N = q(() => {
    if (!j.current) {
      return;
    }
    const j_current = j.current;
    const j_current_frequencyBinCount = j_current.frequencyBinCount;
    const M = new Uint8Array(j_current_frequencyBinCount);
    j_current.getByteFrequencyData(M);
    let W = 0;
    for (let ce = 0; ce < j_current_frequencyBinCount; ce++) {
      W += M[ce];
    }
    const V = W / j_current_frequencyBinCount / 255;
    const I = Math.min(1, V * 3);
    const K = Math.max(0.1, I);
    if (t.current) {
      const de = performance.now() - f.current;
      const ie = Math.floor(de / 80);
      A.current.push(K);

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

      h.current = requestAnimationFrame(N);
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
      j.current = M;
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
      A.current = [];
      E.current = 0;

      V.ondataavailable = (K) => {
        if (K.data.size > 0) {
          g.current.push(K.data);
        }
      };

      V.start(100);
      T(true);
      l(false);
      R(0);
      S(0);
      L(0);
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

      h.current = requestAnimationFrame(N);
    } catch (r) {
      console.error("Error accessing microphone:", r);
    }
  }, [N]);

  const ee = q(
    () =>
      new Promise((r) => {
        t.current = false;
        T(false);

        if (i.current && i.current.state !== "inactive") {
          i.current.onstop = () => {
            if (g.current.length > 0) {
              const M = i.current?.mimeType || "audio/webm";
              const W = new Blob(g.current, { type: M });
              const V = URL.createObjectURL(W);
              b.current = V;
              q.current = W;
              const I = new Audio(V);
              o.current = I;

              I.onloadedmetadata = () => {
                if (isFinite(I.duration)) {
                  L(I.duration);
                } else {
                  I.currentTime = 1e101 /* 1e101 */;

                  I.ontimeupdate = () => {
                    I.ontimeupdate = null;
                    I.currentTime = 0;
                    L(I.duration);
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
        S(0);
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
    T(false);
    l(false);
    R(0);
    x(false);
    S(0);
    L(0);
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

  const G = q(() => {
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

  const J = q(
    (r) => {
      if (!o.current || !C) {
        return;
      }
      const o_current = o.current;
      const M = Math.max(0, Math.min(1, r));
      o_current.currentTime = M * o_current.duration;
      S(M);

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
    [C, P]
  );

  const re = q(() => q.current, []);

  return {
    isRecording: c,
    hasRecording: C,
    recordingTime: B,
    audioLevels: _,
    slideOffset: Y,
    isPlaying: k,
    playbackProgress: $,
    duration: X,
    audioElementRef: o,
    startRecording: Z,
    stopRecording: ee,
    cancelRecording: U,
    playAudio: te,
    pauseAudio: G,
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
  const S = A(null);
  const X = A(false);
  const L = A(0);
  const _ = A(0);
  const O = A(0);
  const Y = A(0);
  const y = A(null);
  const d = A(null);
  const i = A(0);
  const [a, j] = d(0);
  const s = Math.max(1, Math.floor(a / oe));

  h(() => {
    O.current = slideOffset;

    if (slideOffset === 0) {
      _.current = 0;
    }
  }, [slideOffset]);

  h(() => {
    const S_current = S.current;
    if (!S_current) {
      return;
    }
    const n = new ResizeObserver((f) => {
      for (const A of f) {
        const E = A.contentRect.width;

        if (E > 0) {
          j(E);
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
      const A = Q / 2;
      const E = Q - 4;
      for (let N = 0; N < s; N++) {
        let H;
        if (levels.length === 0) {
          H = 0.05;
        } else if (levels.length === 1) {
          H = levels[0];
        } else {
          const G = (N / (s - 1)) * (levels.length - 1);
          const J = Math.floor(G);
          const re = Math.min(J + 1, levels.length - 1);
          const r = G - J;
          H = levels[J] * (1 - r) + levels[re] * r;
        }
        const Z = Math.max(4, H * E);
        const ee = N * oe;
        const U = A - Z / 2;
        const P = N < e;
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

      const { current } = _;

      if (current !== O_current) {
        const U = e - Y.current;
        const P = (oe / ye) * U;

        if (current < O_current) {
          _.current = Math.min(O_current, current + P);
        } else {
          _.current = O_current;
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
        const P = U - s;
        const te = P >= 0 && P < levels.length ? levels[P] : 0.05;
        const G = Math.max(4, te * Z);
        const J = U * oe;
        const re = H - G / 2;
        t.fillStyle = le;
        const r = ne / 2;
        t.beginPath();
        t.roundRect(J, re, ne, G, r);
        t.fill();
      }
      t.restore();

      if (_.current !== O.current || isRecording) {
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

  h(() => {
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

  h(() => {
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

        X.current = true;
        L.current = h(e);
      }
    },
    [hasRecording, isRecording, isPlaying, h, onPlay]
  );

  const b = q(
    (e) => {
      if (X.current) {
        L.current = h(e);
      }
    },
    [h]
  );

  const q = q(() => {
    if (X.current) {
      onSeek(L.current);
      X.current = false;
    }
  }, [onSeek]);

  h(() => {
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

  return A_1("div", {
    ref: S,
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
const Ie = "CXYS";
const Te = "OXfl";
const Be = "QXgC";
const xe = "kRK1";
const Se = "bN2M";
const Me = "n3A3";
const Ce = "SnD9";
const Le = "WRqg";
const Fe = "ONvZ";
const ke = "NdP5";
const Ee = "l3J3";

const F = {
  voiceInput: Ie,
  circleButton: Te,
  playButton: Be,
  hasRecording: xe,
  stopButton: Se,
  recording: Me,
  sendButton: Ce,
  audioVisualizer: Le,
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
        onClick: q,
        disabled: B || (isRecording && recordingTime < 1),
        children: B ? A_1(am, { size: "xs" }) : A_1(aF, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
