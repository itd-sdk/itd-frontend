import { d, A, h, q, u, O, ah } from "./index-AoERIL5v.js";
import { I, a } from "./IconPlay-mEvCLOl1.js";
function ve() {
  const [s, E] = d(false);
  const [S, l] = d(false);
  const [I, R] = d(0);
  const [F, B] = d(false);
  const [$, x] = d(0);
  const [j, C] = d(0);
  const [U, D] = d([]);
  const [Y, y] = d(0);
  const d = A(0);
  const a = A(null);
  const u = A(null);
  const V = A(null);
  const i = A(null);
  const g = A([]);
  const v = A(null);
  const h = A(null);
  const c = A(null);
  const A = A(null);
  const H = A(null);
  const e = A(null);
  const n = A([]);
  const t = A(false);
  const f = A(0);
  const T = A([]);
  const k = A(0);

  h(() => {
    t.current = s;
  }, [s]);

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

      if (i.current) {
        i.current.getTracks().forEach((r) => r.stop());
      }

      if (a.current) {
        a.current.ondataavailable = null;
        a.current.onstop = null;
      }

      if (u.current && u.current.state !== "closed") {
        u.current.close();
      }

      if (c.current) {
        c.current.pause();
        c.current.onloadedmetadata = null;
        c.current.ontimeupdate = null;
        c.current.onended = null;
        c.current = null;
      }

      if (A.current) {
        URL.revokeObjectURL(A.current);
      }
    },
    []
  );

  const N = q(() => {
    if (!V.current) {
      return;
    }
    const V_current = V.current;
    const V_current_frequencyBinCount = V_current.frequencyBinCount;
    const M = new Uint8Array(V_current_frequencyBinCount);
    V_current.getByteFrequencyData(M);
    let W = 0;
    for (let ce = 0; ce < V_current_frequencyBinCount; ce++) {
      W += M[ce];
    }
    const G = W / V_current_frequencyBinCount / 255;
    const b = Math.min(1, G * 3);
    const J = Math.max(0.1, b);
    if (t.current) {
      const de = performance.now() - f.current;
      const ie = Math.floor(de / 80);
      T.current.push(J);

      if (ie > k.current) {
        const T_current = T.current;

        const se =
          T_current.length > 0
            ? T_current.reduce((ae, fe) => ae + fe, 0) / T_current.length
            : 0.05;

        n.current.push(se);
        d.current += 4;

        D((ae) => [...ae, se]);

        y(d.current);
        T.current = [];
        k.current = ie;
      }

      h.current = requestAnimationFrame(N);
    }
  }, []);

  const q = q(() => {
    const n_current = n.current;
    return n_current.length > 0 ? [...n_current] : [];
  }, []);

  const Z = q(async () => {
    try {
      if (A.current) {
        URL.revokeObjectURL(A.current);
        A.current = null;
      }

      H.current = null;

      if (c.current) {
        c.current.pause();
        c.current = null;
      }

      const r = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      i.current = r;
      const w = new AudioContext();
      u.current = w;
      const M = w.createAnalyser();
      M.fftSize = 256;
      M.smoothingTimeConstant = 0.3;
      V.current = M;
      w.createMediaStreamSource(r).connect(M);
      const G = new MediaRecorder(r, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      a.current = G;
      g.current = [];
      n.current = [];
      f.current = performance.now();
      T.current = [];
      k.current = 0;

      G.ondataavailable = (J) => {
        if (J.data.size > 0) {
          g.current.push(J.data);
        }
      };

      G.start(100);
      E(true);
      l(false);
      R(0);
      x(0);
      C(0);
      B(false);
      d.current = 0;
      D([]);
      y(0);
      t.current = true;
      const b = Date.now();

      v.current = window.setInterval(() => {
        const J = Math.floor((Date.now() - b) / 1000 /* 1e3 */);
        R(J);
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
        E(false);

        if (a.current && a.current.state !== "inactive") {
          a.current.onstop = () => {
            if (g.current.length > 0) {
              const M = a.current?.mimeType || "audio/webm";
              const W = new Blob(g.current, { type: M });
              const G = URL.createObjectURL(W);
              A.current = G;
              H.current = W;
              const b = new Audio(G);
              c.current = b;

              b.onloadedmetadata = () => {
                if (isFinite(b.duration)) {
                  C(b.duration);
                } else {
                  b.currentTime = 1e101 /* 1e101 */;

                  b.ontimeupdate = () => {
                    b.ontimeupdate = null;
                    b.currentTime = 0;
                    C(b.duration);
                  };
                }
              };

              b.onended = () => {
                B(false);
                x(0);
                b.currentTime = 0;

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

          a.current.stop();
        } else {
          r(null);
        }

        if (i.current) {
          i.current.getTracks().forEach((M) => M.stop());
          i.current = null;
        }

        if (v.current) {
          clearInterval(v.current);
          v.current = null;
        }

        if (h.current) {
          cancelAnimationFrame(h.current);
          h.current = null;
        }

        if (u.current && u.current.state !== "closed") {
          u.current.close();
          u.current = null;
        }

        const w = q();
        d.current = 0;
        D(w);
        y(0);
        x(0);
      }),
    [q]
  );

  const z = q(() => {
    t.current = false;

    if (a.current) {
      a.current.ondataavailable = null;
      a.current.onstop = null;
      a.current.state !== "inactive" && a.current.stop();
      a.current = null;
    }

    if (i.current) {
      i.current.getTracks().forEach((r) => r.stop());
      i.current = null;
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

    if (u.current && u.current.state !== "closed") {
      u.current.close();
      u.current = null;
    }

    if (c.current) {
      c.current.pause();
      c.current = null;
    }

    if (A.current) {
      URL.revokeObjectURL(A.current);
      A.current = null;
    }

    H.current = null;
    E(false);
    l(false);
    R(0);
    B(false);
    x(0);
    C(0);
    d.current = 0;
    D([]);
    y(0);
    n.current = [];
    g.current = [];
  }, []);

  const O = q(() => {
    if (e.current) {
      clearInterval(e.current);
    }

    e.current = window.setInterval(() => {
      const c_current = c.current;
      if (!c_current || c_current.paused || c_current.ended) {
        if (e.current) {
          clearInterval(e.current);
          e.current = null;
        }

        return;
      }

      if (c_current.duration > 0) {
        x(c_current.currentTime / c_current.duration);
      }
    }, 100);
  }, []);

  const te = q(() => {
    if (!c.current || !A.current) {
      return;
    }

    if (e.current) {
      clearInterval(e.current);
      e.current = null;
    }

    const c_current = c.current;

    if (c_current.ended || c_current.currentTime >= c_current.duration) {
      c_current.currentTime = 0;
      x(0);
    }

    B(true);

    c_current
      .play()
      .then(() => {
        O();
      })
      .catch((w) => {
        console.error("Error playing audio:", w);
        B(false);
      });
  }, [O]);

  const X = q(() => {
    if (e.current) {
      clearInterval(e.current);
      e.current = null;
    }

    if (c.current) {
      c.current.pause();

      c.current.duration > 0 && x(c.current.currentTime / c.current.duration);
    }

    B(false);
  }, []);

  const K = q(
    (r) => {
      if (!c.current || !S) {
        return;
      }
      const c_current = c.current;
      const M = Math.max(0, Math.min(1, r));
      c_current.currentTime = M * c_current.duration;
      x(M);

      if (c_current.paused) {
        e.current && (clearInterval(e.current), (e.current = null));

        c_current
          .play()
          .then(() => {
            B(true);
            O();
          })
          .catch((W) => {
            console.error("Error playing audio:", W);
          });
      }
    },
    [S, O]
  );

  const re = q(() => H.current, []);

  return {
    isRecording: s,
    hasRecording: S,
    recordingTime: I,
    audioLevels: U,
    slideOffset: Y,
    isPlaying: F,
    playbackProgress: $,
    duration: j,
    audioElementRef: c,
    startRecording: Z,
    stopRecording: ee,
    cancelRecording: z,
    playAudio: te,
    pauseAudio: X,
    seekTo: K,
    getAudioBlob: re,
  };
}

const we = ({ size = 16 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 16 16",
    children: u("rect", {
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
  const x = A(null);
  const j = A(false);
  const C = A(0);
  const U = A(0);
  const D = A(0);
  const Y = A(0);
  const y = A(null);
  const d = A(null);
  const a = A(0);
  const [u, V] = d(0);
  const i = Math.max(1, Math.floor(u / oe));

  h(() => {
    D.current = slideOffset;

    if (slideOffset === 0) {
      U.current = 0;
    }
  }, [slideOffset]);

  h(() => {
    const x_current = x.current;
    if (!x_current) {
      return;
    }
    const n = new ResizeObserver((f) => {
      for (const T of f) {
        const k = T.contentRect.width;

        if (k > 0) {
          V(k);
        }
      }
    });
    n.observe(x_current);
    const t = x_current.getBoundingClientRect();

    if (t.width > 0) {
      V(t.width);
    }

    return () => {
      n.disconnect();
    };
  }, []);

  h(() => {
    const $_current = $.current;
    if (!$_current || u === 0) {
      return;
    }
    const n = window.devicePixelRatio || 1;
    $_current.width = u * n;
    $_current.height = Q * n;
    $_current.style.width = `${u}px`;
    $_current.style.height = `${Q}px`;
  }, [u]);

  const g = q(
    (e) => {
      const $_current = $.current;
      if (!$_current || u === 0) {
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
      for (let N = 0; N < i; N++) {
        let q;
        if (levels.length === 0) {
          q = 0.05;
        } else if (levels.length === 1) {
          q = levels[0];
        } else {
          const X = (N / (i - 1)) * (levels.length - 1);
          const K = Math.floor(X);
          const re = Math.min(K + 1, levels.length - 1);
          const r = X - K;
          q = levels[K] * (1 - r) + levels[re] * r;
        }
        const Z = Math.max(4, q * k);
        const ee = N * oe;
        const z = T - Z / 2;
        const O = N < e;
        t.fillStyle = O ? Ae : le;
        const te = ne / 2;
        t.beginPath();
        t.roundRect(ee, z, ne, Z, te);
        t.fill();
      }
      t.restore();
    },
    [levels, u, i]
  );

  const v = q(
    (e) => {
      const $_current = $.current;
      if (!$_current || u === 0) {
        return;
      }
      const t = $_current.getContext("2d");
      if (!t) {
        return;
      }
      const f = window.devicePixelRatio || 1;
      const D_current = D.current;

      const { current } = U;

      if (current !== D_current) {
        const z = e - Y.current;
        const O = (oe / ye) * z;

        if (current < D_current) {
          U.current = Math.min(D_current, current + O);
        } else {
          U.current = D_current;
        }
      }
      Y.current = e;
      t.clearRect(0, 0, $_current.width, $_current.height);
      t.save();
      t.scale(f, f);
      t.translate(-current, 0);
      const q = Q / 2;
      const Z = Q - 4;
      const ee = i + levels.length;
      for (let z = 0; z < ee; z++) {
        const O = z - i;
        const te = O >= 0 && O < levels.length ? levels[O] : 0.05;
        const X = Math.max(4, te * Z);
        const K = z * oe;
        const re = q - X / 2;
        t.fillStyle = le;
        const r = ne / 2;
        t.beginPath();
        t.roundRect(K, re, ne, X, r);
        t.fill();
      }
      t.restore();

      if (U.current !== D.current || isRecording) {
        y.current = requestAnimationFrame(v);
      }
    },
    [levels, u, i, isRecording]
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
      const f = Math.ceil(t * i);

      if (f !== a.current) {
        a.current = f;
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
  }, [isPlaying, isRecording, audioRef, i, g]);

  h(() => {
    if (!isRecording && !isPlaying && hasRecording) {
      const S_current = audioRef.current;
      if (S_current && S_current.duration > 0 && S_current.currentTime > 0) {
        const n = S_current.currentTime / S_current.duration;
        const t = Math.ceil(n * i);
        a.current = t;
        g(t);
      } else {
        a.current = 0;
        g(0);
      }
    }
  }, [isRecording, isPlaying, hasRecording, g, audioRef, i]);

  h(() => {
    if (!isRecording && hasRecording && !isPlaying) {
      g(a.current);
    }
  }, [levels, i, isRecording, hasRecording, isPlaying, g]);

  const h = q((e) => {
    const x_current = x.current;
    if (!x_current) {
      return 0;
    }
    const t = x_current.getBoundingClientRect();
    const f = "touches" in e ? e.touches[0].clientX : e.clientX;
    return Math.max(0, Math.min(1, (f - t.left) / t.width));
  }, []);

  const c = q(
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

  const A = q(
    (e) => {
      if (j.current) {
        C.current = h(e);
      }
    },
    [h]
  );

  const H = q(() => {
    if (j.current) {
      onSeek(C.current);
      j.current = false;
    }
  }, [onSeek]);

  h(() => {
    const e = (t) => A(t);

    const n = () => H();

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
  }, [A, H]);

  return u("div", {
    ref: x,
    style: {
      width: "100%",
      height: `${Q}px`,
      overflow: "hidden",
      cursor: hasRecording && !isRecording ? "pointer" : "default",
    },
    onMouseDown: c,
    onTouchStart: c,
    children: u("canvas", { ref: $ }),
  });
}
const be = "LphD";
const Ie = "kjtl";
const Be = "wYo5";
const xe = "syhY";
const Me = "bKzK";
const Ce = "mxrR";
const Le = "MsHC";
const Se = "MOCg";
const Fe = "RN6V";
const ke = "bmOJ";
const Oe = "GAv3";

const L = {
  voiceInput: be,
  circleButton: Ie,
  playButton: Be,
  hasRecording: xe,
  stopButton: Me,
  recording: Ce,
  sendButton: Le,
  audioVisualizer: Se,
  waveformContainer: Fe,
  recordingTime: ke,
  exiting: Oe,
};

export function VoiceInput({ onCancel, onSend, isExiting, onExitComplete }) {
  const [I, R] = stopRecording(false);

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

  const c = () => {
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

  const H = q(async () => {
    if (!(I || !onSend)) {
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
    I,
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
    L.voiceInput,
    isRecording ? L.recording : "",
    hasRecording ? L.hasRecording : "",
    isExiting ? L.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return playAudio("div", {
    className: n,
    children: [
      playAudio("button", {
        className: `${L.circleButton} ${L.playButton}`,
        onClick: h,
        children: isPlaying
          ? playAudio(I, { size: 20 })
          : playAudio(cancelRecording, { size: 20 }),
      }),
      playAudio("div", {
        className: L.audioVisualizer,
        children: [
          playAudio("div", {
            className: L.waveformContainer,
            children: playAudio(Te, {
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
          playAudio("span", { className: L.recordingTime, children: e }),
        ],
      }),
      playAudio("button", {
        className: `${L.circleButton} ${L.stopButton}`,
        onClick: c,
        children: playAudio(we, { size: 20 }),
      }),
      playAudio("button", {
        className: `${L.circleButton} ${L.sendButton}`,
        onClick: H,
        disabled: I || (isRecording && recordingTime < 1),
        children: I
          ? playAudio(O, { size: "xs" })
          : playAudio(ah, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
