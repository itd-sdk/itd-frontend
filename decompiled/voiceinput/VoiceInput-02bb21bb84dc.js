import { d, A, h, q, u, ah, bj } from "./index-4a2211963806.js";
import { I, a } from "./IconPlay-63cc71ccebde.js";
import { I as I_1 } from "./IconStop-4ffd2275afc5.js";
function we() {
  const [l, O] = d(false);
  const [C, s] = d(false);
  const [b, w] = d(0);
  const [F, B] = d(false);
  const [$, x] = d(0);
  const [W, M] = d(0);
  const [N, D] = d([]);
  const [X, R] = d(0);
  const d = A(0);
  const a = A(null);
  const u = A(null);
  const V = A(null);
  const i = A(null);
  const p = A([]);
  const g = A(null);
  const h = A(null);
  const c = A(null);
  const A = A(null);
  const q = A(null);
  const e = A(null);
  const n = A([]);
  const t = A(false);
  const f = A(0);
  const y = A([]);
  const k = A(0);

  h(() => {
    t.current = l;
  }, [l]);

  h(
    () => () => {
      if (g.current) {
        clearInterval(g.current);
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

  const U = q(() => {
    if (!V.current) {
      return;
    }
    const V_current = V.current;
    const V_current_frequencyBinCount = V_current.frequencyBinCount;
    const L = new Uint8Array(V_current_frequencyBinCount);
    V_current.getByteFrequencyData(L);
    let j = 0;
    for (let ce = 0; ce < V_current_frequencyBinCount; ce++) {
      j += L[ce];
    }
    const G = j / V_current_frequencyBinCount / 255;
    const I = Math.min(1, G * 3);
    const Z = Math.max(0.1, I);
    if (t.current) {
      const de = performance.now() - f.current;
      const ie = Math.floor(de / 80);
      y.current.push(Z);

      if (ie > k.current) {
        const y_current = y.current;

        const se =
          y_current.length > 0
            ? y_current.reduce((ae, fe) => ae + fe, 0) / y_current.length
            : 0.05;

        n.current.push(se);
        d.current += 4;

        D((ae) => [...ae, se]);

        R(d.current);
        y.current = [];
        k.current = ie;
      }

      h.current = requestAnimationFrame(U);
    }
  }, []);

  const H = q(() => {
    const n_current = n.current;
    return n_current.length > 0 ? [...n_current] : [];
  }, []);

  const J = q(async () => {
    try {
      if (A.current) {
        URL.revokeObjectURL(A.current);
        A.current = null;
      }

      q.current = null;

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
      const v = new AudioContext();
      u.current = v;
      const L = v.createAnalyser();
      L.fftSize = 256;
      L.smoothingTimeConstant = 0.3;
      V.current = L;
      v.createMediaStreamSource(r).connect(L);
      const G = new MediaRecorder(r, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      a.current = G;
      p.current = [];
      n.current = [];
      f.current = performance.now();
      y.current = [];
      k.current = 0;

      G.ondataavailable = (Z) => {
        if (Z.data.size > 0) {
          p.current.push(Z.data);
        }
      };

      G.start(100);
      O(true);
      s(false);
      w(0);
      x(0);
      M(0);
      B(false);
      d.current = 0;
      D([]);
      R(0);
      t.current = true;
      const I = Date.now();

      g.current = window.setInterval(() => {
        const Z = Math.floor((Date.now() - I) / 1000 /* 1e3 */);
        w(Z);
      }, 100);

      h.current = requestAnimationFrame(U);
    } catch (r) {
      console.error("Error accessing microphone:", r);
    }
  }, [U]);

  const ee = q(
    () =>
      new Promise((r) => {
        t.current = false;
        O(false);

        if (a.current && a.current.state !== "inactive") {
          a.current.onstop = () => {
            if (p.current.length > 0) {
              const L = a.current?.mimeType || "audio/webm";
              const j = new Blob(p.current, { type: L });
              const G = URL.createObjectURL(j);
              A.current = G;
              q.current = j;
              const I = new Audio(G);
              c.current = I;

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
                B(false);
                x(0);
                I.currentTime = 0;

                if (e.current) {
                  clearInterval(e.current);
                  e.current = null;
                }
              };

              s(true);
              r(j);
            } else {
              r(null);
            }
          };

          a.current.stop();
        } else {
          r(null);
        }

        if (i.current) {
          i.current.getTracks().forEach((L) => L.stop());
          i.current = null;
        }

        if (g.current) {
          clearInterval(g.current);
          g.current = null;
        }

        if (h.current) {
          cancelAnimationFrame(h.current);
          h.current = null;
        }

        if (u.current && u.current.state !== "closed") {
          u.current.close();
          u.current = null;
        }

        const v = H();
        d.current = 0;
        D(v);
        R(0);
        x(0);
      }),
    [H]
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

    if (g.current) {
      clearInterval(g.current);
      g.current = null;
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

    q.current = null;
    O(false);
    s(false);
    w(0);
    B(false);
    x(0);
    M(0);
    d.current = 0;
    D([]);
    R(0);
    n.current = [];
    p.current = [];
  }, []);

  const E = q(() => {
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
        E();
      })
      .catch((v) => {
        console.error("Error playing audio:", v);
        B(false);
      });
  }, [E]);

  const Y = q(() => {
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
      if (!c.current || !C) {
        return;
      }
      const c_current = c.current;
      const L = Math.max(0, Math.min(1, r));
      c_current.currentTime = L * c_current.duration;
      x(L);

      if (c_current.paused) {
        e.current && (clearInterval(e.current), (e.current = null));

        c_current
          .play()
          .then(() => {
            B(true);
            E();
          })
          .catch((j) => {
            console.error("Error playing audio:", j);
          });
      }
    },
    [C, E]
  );

  const re = q(() => q.current, []);

  return {
    isRecording: l,
    hasRecording: C,
    recordingTime: b,
    audioLevels: N,
    slideOffset: X,
    isPlaying: F,
    playbackProgress: $,
    duration: W,
    audioElementRef: c,
    startRecording: J,
    stopRecording: ee,
    cancelRecording: z,
    playAudio: te,
    pauseAudio: Y,
    seekTo: K,
    getAudioBlob: re,
  };
}
const ne = 2;
const Re = 2;
const oe = ne + Re;
const Q = 24;
const Ae = 80;
const le = "rgba(142, 142, 147, 0.6)";
const ye = "#FFFFFF";
function Ie({
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
  const W = A(false);
  const M = A(0);
  const N = A(0);
  const D = A(0);
  const X = A(0);
  const R = A(null);
  const d = A(null);
  const a = A(0);
  const [u, V] = d(0);
  const i = Math.max(1, Math.floor(u / oe));

  h(() => {
    D.current = slideOffset;

    if (slideOffset === 0) {
      N.current = 0;
    }
  }, [slideOffset]);

  h(() => {
    const x_current = x.current;
    if (!x_current) {
      return;
    }
    const n = new ResizeObserver((f) => {
      for (const y of f) {
        const k = y.contentRect.width;

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

  const p = q(
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
      const y = Q / 2;
      const k = Q - 4;
      for (let U = 0; U < i; U++) {
        let H;
        if (levels.length === 0) {
          H = 0.05;
        } else if (levels.length === 1) {
          H = levels[0];
        } else {
          const Y = (U / (i - 1)) * (levels.length - 1);
          const K = Math.floor(Y);
          const re = Math.min(K + 1, levels.length - 1);
          const r = Y - K;
          H = levels[K] * (1 - r) + levels[re] * r;
        }
        const J = Math.max(4, H * k);
        const ee = U * oe;
        const z = y - J / 2;
        const E = U < e;
        t.fillStyle = E ? ye : le;
        const te = ne / 2;
        t.beginPath();
        t.roundRect(ee, z, ne, J, te);
        t.fill();
      }
      t.restore();
    },
    [levels, u, i]
  );

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
      const D_current = D.current;

      const { current } = N;

      if (current !== D_current) {
        const z = e - X.current;
        const E = (oe / Ae) * z;

        if (current < D_current) {
          N.current = Math.min(D_current, current + E);
        } else {
          N.current = D_current;
        }
      }
      X.current = e;
      t.clearRect(0, 0, $_current.width, $_current.height);
      t.save();
      t.scale(f, f);
      t.translate(-current, 0);
      const H = Q / 2;
      const J = Q - 4;
      const ee = i + levels.length;
      for (let z = 0; z < ee; z++) {
        const E = z - i;
        const te = E >= 0 && E < levels.length ? levels[E] : 0.05;
        const Y = Math.max(4, te * J);
        const K = z * oe;
        const re = H - Y / 2;
        t.fillStyle = le;
        const r = ne / 2;
        t.beginPath();
        t.roundRect(K, re, ne, Y, r);
        t.fill();
      }
      t.restore();

      if (N.current !== D.current || isRecording) {
        R.current = requestAnimationFrame(g);
      }
    },
    [levels, u, i, isRecording]
  );

  h(() => {
    if (isRecording) {
      X.current = performance.now();
      R.current = requestAnimationFrame(g);
    } else if (R.current) {
      cancelAnimationFrame(R.current);
      R.current = null;
    }

    return () => {
      if (R.current) {
        cancelAnimationFrame(R.current);
        R.current = null;
      }
    };
  }, [isRecording, g]);

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
      const f = Math.ceil(t * i);

      if (f !== a.current) {
        a.current = f;
        p(f);
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
  }, [isPlaying, isRecording, audioRef, i, p]);

  h(() => {
    if (!isRecording && !isPlaying && hasRecording) {
      const C_current = audioRef.current;
      if (C_current && C_current.duration > 0 && C_current.currentTime > 0) {
        const n = C_current.currentTime / C_current.duration;
        const t = Math.ceil(n * i);
        a.current = t;
        p(t);
      } else {
        a.current = 0;
        p(0);
      }
    }
  }, [isRecording, isPlaying, hasRecording, p, audioRef, i]);

  h(() => {
    if (!isRecording && hasRecording && !isPlaying) {
      p(a.current);
    }
  }, [levels, i, isRecording, hasRecording, isPlaying, p]);

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

        W.current = true;
        M.current = h(e);
      }
    },
    [hasRecording, isRecording, isPlaying, h, onPlay]
  );

  const A = q(
    (e) => {
      if (W.current) {
        M.current = h(e);
      }
    },
    [h]
  );

  const q = q(() => {
    if (W.current) {
      onSeek(M.current);
      W.current = false;
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
const Te = "Loro";
const be = "eutr";
const Be = "KB02";
const xe = "fluI";
const Le = "h285";
const Me = "rjbF";
const Se = "E63U";
const Ce = "kvhv";
const Fe = "Q2Om";
const ke = "d6ZZ";
const Ee = "tKod";

const S = {
  voiceInput: Te,
  circleButton: be,
  playButton: Be,
  hasRecording: xe,
  stopButton: Le,
  recording: Me,
  sendButton: Se,
  audioVisualizer: Ce,
  waveformContainer: Fe,
  recordingTime: ke,
  exiting: Ee,
};

export function VoiceInput({ onCancel, onSend, isExiting, onExitComplete }) {
  const [b, w] = stopRecording(false);

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

  const g = (t) => {
    if (!isFinite(t) || isNaN(t)) {
      return "00:00";
    }
    const f = Math.floor(t / 60);
    const y = Math.floor(t % 60);
    return `${f.toString().padStart(2, "0")}:${y.toString().padStart(2, "0")}`;
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

  const q = q(async () => {
    if (!(b || !onSend)) {
      w(true);
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
        w(false);
      }
    }
  }, [
    b,
    isRecording,
    stopRecording,
    getAudioBlob,
    onSend,
    cancelRecording,
    onCancel,
  ]);

  const e = g(
    isRecording
      ? recordingTime
      : isPlaying
      ? playbackProgress * duration
      : duration
  );

  const n = [
    S.voiceInput,
    isRecording ? S.recording : "",
    hasRecording ? S.hasRecording : "",
    isExiting ? S.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return playAudio("div", {
    className: n,
    children: [
      playAudio("button", {
        className: `${S.circleButton} ${S.playButton}`,
        onClick: h,
        children: isPlaying
          ? playAudio(I, { size: 20 })
          : playAudio(cancelRecording, { size: 20 }),
      }),
      playAudio("div", {
        className: S.audioVisualizer,
        children: [
          playAudio("div", {
            className: S.waveformContainer,
            children: playAudio(Ie, {
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
          playAudio("span", { className: S.recordingTime, children: e }),
        ],
      }),
      playAudio("button", {
        className: `${S.circleButton} ${S.stopButton}`,
        onClick: c,
        children: playAudio(I_1, { size: 20 }),
      }),
      playAudio("button", {
        className: `${S.circleButton} ${S.sendButton}`,
        onClick: q,
        disabled: b || (isRecording && recordingTime < 1),
        children: b
          ? playAudio(ah, { size: "xs" })
          : playAudio(bj, { size: 20 }),
      }),
    ],
  });
}

export { VoiceInput as VoiceInput };
