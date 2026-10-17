import { d, A, h, q, A as A_1, an, aG } from "./index-DqQficWb.js";
import { I, a } from "./IconPlay-CEtmniVX.js";
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
      c._sentryDebugIds[T] = "39db91ae-45aa-4b0c-b7f7-e9d60bef904f";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-39db91ae-45aa-4b0c-b7f7-e9d60bef904f";
    }
  } catch {}
})();
function we() {
  const [c, T] = d(false);
  const [M, l] = d(false);
  const [B, R] = d(0);
  const [F, x] = d(false);
  const [$, S] = d(0);
  const [j, C] = d(0);
  const [N, O] = d([]);
  const [Y, b] = d(0);
  const d = A(0);
  const i = A(null);
  const a = A(null);
  const G = A(null);
  const s = A(null);
  const g = A([]);
  const w = A(null);
  const h = A(null);
  const o = A(null);
  const y = A(null);
  const q = A(null);
  const e = A(null);
  const n = A([]);
  const t = A(false);
  const f = A(0);
  const A = A([]);
  const k = A(0);

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

      if (y.current) {
        URL.revokeObjectURL(y.current);
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
    const L = new Uint8Array(G_current_frequencyBinCount);
    G_current.getByteFrequencyData(L);
    let W = 0;
    for (let ce = 0; ce < G_current_frequencyBinCount; ce++) {
      W += L[ce];
    }
    const V = W / G_current_frequencyBinCount / 255;
    const I = Math.min(1, V * 3);
    const Q = Math.max(0.1, I);
    if (t.current) {
      const de = performance.now() - f.current;
      const ie = Math.floor(de / 80);
      A.current.push(Q);

      if (ie > k.current) {
        const A_current = A.current;

        const se =
          A_current.length > 0
            ? A_current.reduce((ae, fe) => ae + fe, 0) / A_current.length
            : 0.05;

        n.current.push(se);
        d.current += 4;

        O((ae) => [...ae, se]);

        b(d.current);
        A.current = [];
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
      if (y.current) {
        URL.revokeObjectURL(y.current);
        y.current = null;
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
      const L = v.createAnalyser();
      L.fftSize = 256;
      L.smoothingTimeConstant = 0.3;
      G.current = L;
      v.createMediaStreamSource(r).connect(L);
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
      k.current = 0;

      V.ondataavailable = (Q) => {
        if (Q.data.size > 0) {
          g.current.push(Q.data);
        }
      };

      V.start(100);
      T(true);
      l(false);
      R(0);
      S(0);
      C(0);
      x(false);
      d.current = 0;
      O([]);
      b(0);
      t.current = true;
      const I = Date.now();

      w.current = window.setInterval(() => {
        const Q = Math.floor((Date.now() - I) / 1000 /* 1e3 */);
        R(Q);
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
              const W = new Blob(g.current, { type: L });
              const V = URL.createObjectURL(W);
              y.current = V;
              q.current = W;
              const I = new Audio(V);
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
        b(0);
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

    if (y.current) {
      URL.revokeObjectURL(y.current);
      y.current = null;
    }

    q.current = null;
    T(false);
    l(false);
    R(0);
    x(false);
    S(0);
    C(0);
    d.current = 0;
    O([]);
    b(0);
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
    if (!o.current || !y.current) {
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
      .catch((v) => {
        console.error("Error playing audio:", v);
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

  const K = q(
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
          .catch((W) => {
            console.error("Error playing audio:", W);
          });
      }
    },
    [M, P]
  );

  const re = q(() => q.current, []);

  return {
    isRecording: c,
    hasRecording: M,
    recordingTime: B,
    audioLevels: N,
    slideOffset: Y,
    isPlaying: F,
    playbackProgress: $,
    duration: j,
    audioElementRef: o,
    startRecording: Z,
    stopRecording: ee,
    cancelRecording: U,
    playAudio: te,
    pauseAudio: X,
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
const be = 80;
const le = "rgba(142, 142, 147, 0.6)";
const ye = "#FFFFFF";
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
  const j = A(false);
  const C = A(0);
  const N = A(0);
  const O = A(0);
  const Y = A(0);
  const b = A(null);
  const d = A(null);
  const i = A(0);
  const [a, G] = d(0);
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
      for (const A of f) {
        const k = A.contentRect.width;

        if (k > 0) {
          G(k);
        }
      }
    });
    n.observe(S_current);
    const t = S_current.getBoundingClientRect();

    if (t.width > 0) {
      G(t.width);
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
    $_current.height = J * n;
    $_current.style.width = `${a}px`;
    $_current.style.height = `${J}px`;
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
      const A = J / 2;
      const k = J - 4;
      for (let _ = 0; _ < s; _++) {
        let H;
        if (levels.length === 0) {
          H = 0.05;
        } else if (levels.length === 1) {
          H = levels[0];
        } else {
          const X = (_ / (s - 1)) * (levels.length - 1);
          const K = Math.floor(X);
          const re = Math.min(K + 1, levels.length - 1);
          const r = X - K;
          H = levels[K] * (1 - r) + levels[re] * r;
        }
        const Z = Math.max(4, H * k);
        const ee = _ * oe;
        const U = A - Z / 2;
        const P = _ < e;
        t.fillStyle = P ? ye : le;
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
        const P = (oe / be) * U;

        if (current < O_current) {
          N.current = Math.min(O_current, current + P);
        } else {
          N.current = O_current;
        }
      }
      Y.current = e;
      t.clearRect(0, 0, $_current.width, $_current.height);
      t.save();
      t.scale(f, f);
      t.translate(-current, 0);
      const H = J / 2;
      const Z = J - 4;
      const ee = s + levels.length;
      for (let U = 0; U < ee; U++) {
        const P = U - s;
        const te = P >= 0 && P < levels.length ? levels[P] : 0.05;
        const X = Math.max(4, te * Z);
        const K = U * oe;
        const re = H - X / 2;
        t.fillStyle = le;
        const r = ne / 2;
        t.beginPath();
        t.roundRect(K, re, ne, X, r);
        t.fill();
      }
      t.restore();

      if (N.current !== O.current || isRecording) {
        b.current = requestAnimationFrame(w);
      }
    },
    [levels, a, s, isRecording]
  );

  h(() => {
    if (isRecording) {
      Y.current = performance.now();
      b.current = requestAnimationFrame(w);
    } else if (b.current) {
      cancelAnimationFrame(b.current);
      b.current = null;
    }

    return () => {
      if (b.current) {
        cancelAnimationFrame(b.current);
        b.current = null;
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

  h(() => {
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

        j.current = true;
        C.current = h(e);
      }
    },
    [hasRecording, isRecording, isPlaying, h, onPlay]
  );

  const y = q(
    (e) => {
      if (j.current) {
        C.current = h(e);
      }
    },
    [h]
  );

  const q = q(() => {
    if (j.current) {
      onSeek(C.current);
      j.current = false;
    }
  }, [onSeek]);

  h(() => {
    const e = (t) => y(t);

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
  }, [y, q]);

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
    children: A_1("canvas", { ref: $ }),
  });
}
const Ie = "wnGp";
const Te = "VWwh";
const Be = "Rjg8";
const xe = "YpiR";
const Se = "gm2S";
const Le = "N59a";
const Me = "WXhq";
const Ce = "arQ0";
const Ee = "xmKb";
const Fe = "L2PS";
const ke = "nRED";

const E = {
  voiceInput: Ie,
  circleButton: Te,
  playButton: Be,
  hasRecording: xe,
  stopButton: Se,
  recording: Le,
  sendButton: Me,
  audioVisualizer: Ce,
  waveformContainer: Ee,
  recordingTime: Fe,
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

  const y = q(
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
    E.voiceInput,
    isRecording ? E.recording : "",
    hasRecording ? E.hasRecording : "",
    isExiting ? E.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return A_1("div", {
    className: n,
    children: [
      A_1("button", {
        className: `${E.circleButton} ${E.playButton}`,
        onClick: h,
        children: isPlaying
          ? A_1(I, { size: 20 })
          : A_1(playAudio, { size: 20 }),
      }),
      A_1("div", {
        className: E.audioVisualizer,
        children: [
          A_1("div", {
            className: E.waveformContainer,
            children: A_1(Ae, {
              levels: audioLevels,
              slideOffset: slideOffset,
              audioRef: audioElementRef,
              isRecording: isRecording,
              hasRecording: hasRecording,
              isPlaying: isPlaying,
              onSeek: y,
              onPlay: playAudio,
            }),
          }),
          A_1("span", { className: E.recordingTime, children: e }),
        ],
      }),
      A_1("button", {
        className: `${E.circleButton} ${E.stopButton}`,
        onClick: o,
        children: A_1(ve, { size: 20 }),
      }),
      A_1("button", {
        className: `${E.circleButton} ${E.sendButton}`,
        onClick: q,
        disabled: B || (isRecording && recordingTime < 1),
        children: B ? A_1(an, { size: "xs" }) : A_1(aG, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
