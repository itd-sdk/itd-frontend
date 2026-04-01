import {
  d,
  A,
  y,
  q,
  u,
  a2,
  a3,
  m,
  a4,
  a5,
  o,
  a6,
  a7,
  a8,
  T,
  a9,
  aa,
  n,
  ab,
  b,
  Y,
  F,
  x,
  U,
  D,
  v,
  k,
  ac,
  ad,
  ae,
  a0,
  af,
  a,
  c,
  ag,
  B,
  M,
  R,
  ah,
  r,
  $ as $_1,
  Q as Q_1,
} from "./index-CJNMmwsR.js";

import { A as A_1 } from "./IconChevronLeft-BY_SihzH.js";
function ft() {
  const [t, c] = d(false);
  const [l, s] = d(false);
  const [d, g] = d(0);
  const [v, R] = d(false);
  const [A, x] = d(0);
  const [C, L] = d(0);
  const [b, E] = d([]);
  const [p, M] = d(0);
  const f = A(0);
  const m = A(null);
  const w = A(null);
  const P = A(null);
  const u = A(null);
  const T = A([]);
  const k = A(null);
  const S = A(null);
  const o = A(null);
  const h = A(null);
  const B = A(null);
  const n = A(null);
  const r = A([]);
  const a = A(false);
  const F = A(0);
  const z = A([]);
  const V = A(0);

  y(() => {
    a.current = t;
  }, [t]);

  y(
    () => () => {
      if (k.current) {
        clearInterval(k.current);
      }

      if (S.current) {
        cancelAnimationFrame(S.current);
      }

      if (n.current) {
        clearInterval(n.current);
      }

      if (u.current) {
        u.current.getTracks().forEach((y) => y.stop());
      }

      if (m.current) {
        m.current.ondataavailable = null;
        m.current.onstop = null;
      }

      if (w.current && w.current.state !== "closed") {
        w.current.close();
      }

      if (o.current) {
        o.current.pause();
        o.current.onloadedmetadata = null;
        o.current.ontimeupdate = null;
        o.current.onended = null;
        o.current = null;
      }

      if (h.current) {
        URL.revokeObjectURL(h.current);
      }
    },
    []
  );

  const X = q(() => {
    if (!P.current) {
      return;
    }
    const y = P.current;
    const G = y.frequencyBinCount;
    const O = new Uint8Array(G);
    y.getByteFrequencyData(O);
    let Z = 0;
    for (let ie = 0; ie < G; ie++) {
      Z += O[ie];
    }
    const re = Z / G / 255;
    const Y = Math.min(1, re * 3);
    const oe = Math.max(0.1, Y);
    if (a.current) {
      const ze = performance.now() - F.current;
      const Ne = Math.floor(ze / 80);
      z.current.push(oe);

      if (Ne > V.current) {
        const pe = z.current;

        const Me =
          pe.length > 0 ? pe.reduce((ge, Ve) => ge + Ve, 0) / pe.length : 0.05;

        r.current.push(Me);
        f.current += 4;

        E((ge) => [...ge, Me]);

        M(f.current);
        z.current = [];
        V.current = Ne;
      }

      S.current = requestAnimationFrame(X);
    }
  }, []);

  const U = q(() => {
    const y = r.current;
    return y.length > 0 ? [...y] : [];
  }, []);

  const ne = q(async () => {
    try {
      if (h.current) {
        URL.revokeObjectURL(h.current);
        h.current = null;
      }

      B.current = null;

      if (o.current) {
        o.current.pause();
        o.current = null;
      }

      const y = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      u.current = y;
      const G = new AudioContext();
      w.current = G;
      const O = G.createAnalyser();
      O.fftSize = 256;
      O.smoothingTimeConstant = 0.3;
      P.current = O;
      G.createMediaStreamSource(y).connect(O);
      const re = new MediaRecorder(y, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      m.current = re;
      T.current = [];
      r.current = [];
      F.current = performance.now();
      z.current = [];
      V.current = 0;

      re.ondataavailable = (oe) => {
        if (oe.data.size > 0) {
          T.current.push(oe.data);
        }
      };

      re.start(100);
      c(true);
      s(false);
      g(0);
      x(0);
      L(0);
      R(false);
      f.current = 0;
      E([]);
      M(0);
      a.current = true;
      const Y = Date.now();

      k.current = window.setInterval(() => {
        const oe = Math.floor((Date.now() - Y) / 1000 /* 1e3 */);
        g(oe);
      }, 100);

      S.current = requestAnimationFrame(X);
    } catch (y) {
      console.error("Error accessing microphone:", y);
    }
  }, [X]);

  const ae = q(
    () =>
      new Promise((y) => {
        a.current = false;
        c(false);

        if (m.current && m.current.state !== "inactive") {
          m.current.onstop = () => {
            if (T.current.length > 0) {
              const O = m.current?.mimeType || "audio/webm";
              const Z = new Blob(T.current, { type: O });
              const re = URL.createObjectURL(Z);
              h.current = re;
              B.current = Z;
              const Y = new Audio(re);
              o.current = Y;

              Y.onloadedmetadata = () => {
                if (isFinite(Y.duration)) {
                  L(Y.duration);
                } else {
                  Y.currentTime = 1e101 /* 1e101 */;

                  Y.ontimeupdate = () => {
                    Y.ontimeupdate = null;
                    Y.currentTime = 0;
                    L(Y.duration);
                  };
                }
              };

              Y.onended = () => {
                R(false);
                x(0);
                Y.currentTime = 0;

                if (n.current) {
                  clearInterval(n.current);
                  n.current = null;
                }
              };

              s(true);
              y(Z);
            } else {
              y(null);
            }
          };

          m.current.stop();
        } else {
          y(null);
        }

        if (u.current) {
          u.current.getTracks().forEach((O) => O.stop());
          u.current = null;
        }

        if (k.current) {
          clearInterval(k.current);
          k.current = null;
        }

        if (S.current) {
          cancelAnimationFrame(S.current);
          S.current = null;
        }

        if (w.current && w.current.state !== "closed") {
          w.current.close();
          w.current = null;
        }

        const G = U();
        f.current = 0;
        E(G);
        M(0);
        x(0);
      }),
    [U]
  );

  const J = q(() => {
    a.current = false;

    if (m.current) {
      m.current.ondataavailable = null;
      m.current.onstop = null;
      m.current.state !== "inactive" && m.current.stop();
      m.current = null;
    }

    if (u.current) {
      u.current.getTracks().forEach((y) => y.stop());
      u.current = null;
    }

    if (k.current) {
      clearInterval(k.current);
      k.current = null;
    }

    if (S.current) {
      cancelAnimationFrame(S.current);
      S.current = null;
    }

    if (n.current) {
      clearInterval(n.current);
      n.current = null;
    }

    if (w.current && w.current.state !== "closed") {
      w.current.close();
      w.current = null;
    }

    if (o.current) {
      o.current.pause();
      o.current = null;
    }

    if (h.current) {
      URL.revokeObjectURL(h.current);
      h.current = null;
    }

    B.current = null;
    c(false);
    s(false);
    g(0);
    R(false);
    x(0);
    L(0);
    f.current = 0;
    E([]);
    M(0);
    r.current = [];
    T.current = [];
  }, []);

  const i = q(() => {
    if (n.current) {
      clearInterval(n.current);
    }

    n.current = window.setInterval(() => {
      const y = o.current;
      if (!y || y.paused || y.paused || y.ended) {
        if (n.current) {
          clearInterval(n.current);
          n.current = null;
        }

        return;
      }

      if (y.duration > 0) {
        x(y.currentTime / y.duration);
      }
    }, 100);
  }, []);

  const H = q(() => {
    if (!o.current || !h.current) {
      return;
    }

    if (n.current) {
      clearInterval(n.current);
      n.current = null;
    }

    const y = o.current;

    if (y.ended || y.currentTime >= y.duration) {
      y.currentTime = 0;
      x(0);
    }

    R(true);

    y.play()
      .then(() => {
        i();
      })
      .catch((G) => {
        console.error("Error playing audio:", G);
        R(false);
      });
  }, [i]);

  const D = q(() => {
    if (n.current) {
      clearInterval(n.current);
      n.current = null;
    }

    if (o.current) {
      o.current.pause();

      o.current.duration > 0 && x(o.current.currentTime / o.current.duration);
    }

    R(false);
  }, []);

  const q = q(
    (y) => {
      if (!o.current || !l) {
        return;
      }
      const G = o.current;
      const O = Math.max(0, Math.min(1, y));
      G.currentTime = O * G.duration;
      x(O);

      if (G.paused) {
        n.current && (clearInterval(n.current), (n.current = null));

        G.play()
          .then(() => {
            R(true);
            i();
          })
          .catch((Z) => {
            console.error("Error playing audio:", Z);
          });
      }
    },
    [l, i]
  );

  const K = q(() => B.current, []);

  return {
    isRecording: t,
    hasRecording: l,
    recordingTime: d,
    audioLevels: b,
    slideOffset: p,
    isPlaying: v,
    playbackProgress: A,
    duration: C,
    audioElementRef: o,
    startRecording: ne,
    stopRecording: ae,
    cancelRecording: J,
    playAudio: H,
    pauseAudio: D,
    seekTo: q,
    getAudioBlob: K,
  };
}

const $e = ({ size: t = 24 }) =>
  u("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      u("path", {
        d: "M5 12L12 5L19 12",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      u("path", {
        d: "M12 19V5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const pt = ({ size: t = 18 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 18 18",
    children: u("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [
        u("path", {
          d: "M9 2c-.53 0-1.04.219-1.414.608C7.21 2.998 7 3.526 7 4.077v4.846c0 .55.21 1.08.586 1.469.375.39.884.608 1.414.608.53 0 1.04-.219 1.414-.608.375-.39.586-.918.586-1.469V4.077c0-.55-.21-1.08-.586-1.469A1.963 1.963 0 0 0 9 2Z",
        }),
        u("path", {
          d: "M14 8v1.333c0 1.238-.527 2.425-1.464 3.3C11.598 13.508 10.326 14 9 14s-2.598-.492-3.536-1.367C4.527 11.758 4 10.571 4 9.333V8M9 14v2",
        }),
      ],
    }),
  });

const He = ({ size: t = 16 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 16 16",
    children: [
      u("rect", {
        width: "4",
        height: "10",
        x: "3",
        y: "3",
        fill: "currentColor",
        rx: "1.5",
      }),
      u("rect", {
        width: "4",
        height: "10",
        x: "9",
        y: "3",
        fill: "currentColor",
        rx: "1.5",
      }),
    ],
  });

const We = ({ size: t = 16 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 16 16",
    children: u("path", {
      fill: "currentColor",
      d: "M13 6.268c1.333.77 1.333 2.694 0 3.464l-6 3.464c-1.333.77-3-.192-3-1.732V4.536c0-1.54 1.667-2.502 3-1.732l6 3.464Z",
    }),
  });

const gt = ({ size: t = 16 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
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

const Ie = (t) => Symbol.iterator in t;

const Se = (t) => "entries" in t;

const Ae = (t, c) => {
  const l = t instanceof Map ? t : new Map(t.entries());
  const s = c instanceof Map ? c : new Map(c.entries());
  if (l.size !== s.size) {
    return false;
  }
  for (const [d, g] of l) {
    if (!s.has(d) || !Object.is(g, s.get(d))) {
      return false;
    }
  }
  return true;
};

const vt = (t, c) => {
  const l = t[Symbol.iterator]();
  const s = c[Symbol.iterator]();
  let d = l.next();
  let g = s.next();

  while (!d.done && !g.done) {
    if (!Object.is(d.value, g.value)) {
      return false;
    }
    d = l.next();
    g = s.next();
  }

  return !!d.done && !!g.done;
};

function yt(t, c) {
  return Object.is(t, c)
    ? true
    : typeof t != "object" ||
      t === null ||
      typeof c != "object" ||
      c === null ||
      Object.getPrototypeOf(t) !== Object.getPrototypeOf(c)
    ? false
    : Ie(t) && Ie(c)
    ? Se(t) && Se(c)
      ? Ae(t, c)
      : vt(t, c)
    : Ae(
        { entries: () => Object.entries(t) },
        { entries: () => Object.entries(c) }
      );
}
function ke(t) {
  const c = a2.useRef(undefined);
  return (l) => {
    const s = t(l);
    return yt(c.current, s) ? c.current : (c.current = s);
  };
}
const Ct = "cZnuRugG";
const wt = "gXPlO0SF";
const Rt = "yfGqJGgk";
const Nt = "a3a8DYnF";
const Mt = "Zm7GdliE";
const bt = "x-TM77c0";
const xt = "vqhGsmVx";
const Lt = "wXZfEkKN";
const Tt = "C4SARhpg";
const It = "epV7SM-L";
const St = "Bkxq4G-V";
const At = "M1orzhg7";
const kt = "VQtopWsI";
const Bt = "vI-SLgZ3";
const Et = "hWCpL6Hf";
const Pt = "WAYqGGYB";
const Ft = "OWLYzJZs";
const Ot = "P15SrtYp";
const Dt = "y-9i4poD";
const $t = "qTvjpE7N";
const Ht = "rKM-vAOv";

const _ = {
  commentInput: Ct,
  replyMode: wt,
  inputRow: Rt,
  attachmentStrip: Nt,
  circleButton: Mt,
  micButton: bt,
  sendButton: xt,
  submitting: Lt,
  textareaContainer: Tt,
  expanded: It,
  voiceMode: St,
  inputWrapper: At,
  commentCharCount: kt,
  error: Bt,
  input: Et,
  replyHeader: Pt,
  replyText: Ft,
  replyName: Ot,
  replyClose: Dt,
  dragActive: $t,
  dragOverlay: Ht,
};

const Wt = "_2mmgs8Ne";
const zt = "WFxp3J8v";
const Vt = "abwLbpfW";
const ye = { textInput: Wt, entering: zt, sendButton: Vt };
const _t = 1000; /* 1e3 */
function jt({
  text: t,
  spans: c,
  onChange: l,
  placeholder: s,
  onSubmit: d,
  isEntering: g,
  autoFocus: v,
  isSubmitting: R,
  sendDisabled: A,
  onImagePaste: x,
}) {
  const C = _t - t.length;
  const L = C < 0;
  const b = [ye.textInput, g ? ye.entering : ""].filter(Boolean).join(" ");
  return u("div", {
    className: b,
    children: [
      u("div", {
        className: _.inputWrapper,
        children: [
          u(a3, {
            value: t,
            spans: c,
            onChange: l,
            placeholder: s,
            autoFocus: v,
            className: _.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: L || d,
            disableFormatting: true,
            onImagePaste: x,
          }),
          L &&
            u("span", {
              className: `${_.commentCharCount} ${_.error}`,
              children: C,
            }),
        ],
      }),
      u("button", {
        className: `${_.circleButton} ${_.sendButton} ${ye.sendButton} ${
          R ? _.submitting : ""
        }`,
        onClick: d,
        disabled: R || A || A || L,
        children: R ? u(m, { size: "xs" }) : u($e, { size: 20 }),
      }),
    ],
  });
}
const de = 2;
const Ut = 2;
const me = de + Ut;
const le = 24;
const qt = 80;
const Be = "rgba(142, 142, 147, 0.6)";
const Gt = "#FFFFFF";
function Xt({
  levels: t,
  slideOffset: c,
  audioRef: l,
  isRecording: s,
  hasRecording: d,
  isPlaying: g,
  onSeek: v,
  onPlay: R,
}) {
  const A = A(null);
  const x = A(null);
  const C = A(false);
  const L = A(0);
  const b = A(0);
  const E = A(0);
  const p = A(0);
  const M = A(null);
  const f = A(null);
  const m = A(0);
  const [w, P] = d(0);
  const u = Math.max(1, Math.floor(w / me));

  y(() => {
    E.current = c;

    if (c === 0) {
      b.current = 0;
    }
  }, [c]);

  y(() => {
    const n = x.current;
    if (!n) {
      return;
    }
    const r = new ResizeObserver((F) => {
      for (const z of F) {
        const V = z.contentRect.width;

        if (V > 0) {
          P(V);
        }
      }
    });
    r.observe(n);
    const a = n.getBoundingClientRect();

    if (a.width > 0) {
      P(a.width);
    }

    return () => {
      r.disconnect();
    };
  }, []);

  y(() => {
    const n = A.current;
    if (!n || w === 0) {
      return;
    }
    const r = window.devicePixelRatio || 1;
    n.width = w * r;
    n.height = le * r;
    n.style.width = `${w}px`;
    n.style.height = `${le}px`;
  }, [w]);

  const T = q(
    (n) => {
      const r = A.current;
      if (!r || w === 0) {
        return;
      }
      const a = r.getContext("2d");
      if (!a) {
        return;
      }
      const F = window.devicePixelRatio || 1;
      a.clearRect(0, 0, r.width, r.height);
      a.save();
      a.scale(F, F);
      const z = le / 2;
      const V = le - 4;
      for (let X = 0; X < u; X++) {
        let U;
        if (t.length === 0) {
          U = 0.05;
        } else if (t.length === 1) {
          U = t[0];
        } else {
          const D = (X / (u - 1)) * (t.length - 1);
          const q = Math.floor(D);
          const K = Math.min(q + 1, t.length - 1);
          const y = D - q;
          U = t[q] * (1 - y) + t[K] * y;
        }
        const ne = Math.max(4, U * V);
        const ae = X * me;
        const J = z - ne / 2;
        const i = X < n;
        a.fillStyle = i ? Gt : Be;
        const H = de / 2;
        a.beginPath();
        a.roundRect(ae, J, de, ne, H);
        a.fill();
      }
      a.restore();
    },
    [t, w, u]
  );

  const k = q(
    (n) => {
      const r = A.current;
      if (!r || w === 0) {
        return;
      }
      const a = r.getContext("2d");
      if (!a) {
        return;
      }
      const F = window.devicePixelRatio || 1;
      const z = E.current;
      const V = b.current;
      if (V !== z) {
        const J = n - p.current;
        const i = (me / qt) * J;

        if (V < z) {
          b.current = Math.min(z, V + i);
        } else {
          b.current = z;
        }
      }
      p.current = n;
      const X = b.current;
      a.clearRect(0, 0, r.width, r.height);
      a.save();
      a.scale(F, F);
      a.translate(-X, 0);
      const U = le / 2;
      const ne = le - 4;
      const ae = u + t.length;
      for (let J = 0; J < ae; J++) {
        const i = J - u;
        const H = i >= 0 && i < t.length ? t[i] : 0.05;
        const D = Math.max(4, H * ne);
        const q = J * me;
        const K = U - D / 2;
        a.fillStyle = Be;
        const y = de / 2;
        a.beginPath();
        a.roundRect(q, K, de, D, y);
        a.fill();
      }
      a.restore();

      if (b.current !== E.current || s) {
        M.current = requestAnimationFrame(k);
      }
    },
    [t, w, u, s]
  );

  y(() => {
    if (s) {
      p.current = performance.now();
      M.current = requestAnimationFrame(k);
    } else if (M.current) {
      cancelAnimationFrame(M.current);
      M.current = null;
    }

    return () => {
      if (M.current) {
        cancelAnimationFrame(M.current);
        M.current = null;
      }
    };
  }, [s, k]);

  y(() => {
    if (!g || s) {
      if (f.current) {
        cancelAnimationFrame(f.current);
        f.current = null;
      }

      return;
    }
    const n = () => {
      const r = l.current;
      if (!r || r.paused || r.paused || r.ended) {
        f.current = null;
        return;
      }
      const a = r.currentTime / r.duration;
      const F = Math.ceil(a * u);

      if (F !== m.current) {
        m.current = F;
        T(F);
      }

      f.current = requestAnimationFrame(n);
    };
    f.current = requestAnimationFrame(n);

    return () => {
      if (f.current) {
        cancelAnimationFrame(f.current);
        f.current = null;
      }
    };
  }, [g, s, l, u, T]);

  y(() => {
    if (!s && !g && d) {
      const n = l.current;
      if (n && n.duration > 0 && n.currentTime > 0) {
        const r = n.currentTime / n.duration;
        const a = Math.ceil(r * u);
        m.current = a;
        T(a);
      } else {
        m.current = 0;
        T(0);
      }
    }
  }, [s, g, d, T, l, u]);

  y(() => {
    if (!s && d && !g) {
      T(m.current);
    }
  }, [t, u, s, d, g, T]);

  const S = q((n) => {
    const r = x.current;
    if (!r) {
      return 0;
    }
    const a = r.getBoundingClientRect();
    const F = "touches" in n ? n.touches[0].clientX : n.clientX;
    return Math.max(0, Math.min(1, (F - a.left) / a.width));
  }, []);

  const o = q(
    (n) => {
      if (!(!d || s)) {
        n.preventDefault();

        if (!g) {
          R();
          return;
        }

        C.current = true;
        L.current = S(n);
      }
    },
    [d, s, g, S, R]
  );

  const h = q(
    (n) => {
      if (C.current) {
        L.current = S(n);
      }
    },
    [S]
  );

  const B = q(() => {
    if (C.current) {
      v(L.current);
      C.current = false;
    }
  }, [v]);

  y(() => {
    const n = (a) => h(a);

    const r = () => B();

    window.addEventListener("mousemove", n);
    window.addEventListener("mouseup", r);
    window.addEventListener("touchmove", n);
    window.addEventListener("touchend", r);

    return () => {
      window.removeEventListener("mousemove", n);
      window.removeEventListener("mouseup", r);
      window.removeEventListener("touchmove", n);
      window.removeEventListener("touchend", r);
    };
  }, [h, B]);

  return u("div", {
    ref: x,
    style: {
      width: "100%",
      height: `${le}px`,
      overflow: "hidden",
      cursor: d && !s ? "pointer" : "default",
    },
    onMouseDown: o,
    onTouchStart: o,
    children: u("canvas", { ref: A }),
  });
}
const Yt = "-Ho1i5aD";
const Zt = "tC8l4Awz";
const Jt = "qgaHaLq2";
const Kt = "ABusj9On";
const Qt = "QN61mWs7";
const en = "sb0Zcaza";
const tn = "zYZ8RG9n";
const nn = "kV8tSOUW";
const rn = "MazmNAnz";
const on = "IygqjuIv";
const an = "Danfku1z";

const Q = {
  voiceInput: Yt,
  circleButton: Zt,
  playButton: Jt,
  hasRecording: Kt,
  stopButton: Qt,
  recording: en,
  sendButton: tn,
  audioVisualizer: nn,
  waveformContainer: rn,
  recordingTime: on,
  exiting: an,
};

function cn({ onCancel: t, onSend: c, isExiting: l, onExitComplete: s }) {
  const [d, g] = d(false);

  const {
    isRecording: v,
    hasRecording: R,
    recordingTime: A,
    audioLevels: x,
    slideOffset: C,
    isPlaying: L,
    playbackProgress: b,
    duration: E,
    audioElementRef: p,
    startRecording: M,
    stopRecording: f,
    cancelRecording: m,
    playAudio: w,
    pauseAudio: P,
    seekTo: u,
    getAudioBlob: T,
  } = ft();

  y(() => {
    M();
  }, []);

  y(() => {
    if (l && s) {
      const a = setTimeout(s, 300);
      return () => clearTimeout(a);
    }
  }, [l, s]);

  const k = (a) => {
    if (!isFinite(a) || isNaN(a)) {
      return "00:00";
    }
    const F = Math.floor(a / 60);
    const z = Math.floor(a % 60);
    return `${F.toString().padStart(2, "0")}:${z.toString().padStart(2, "0")}`;
  };

  const S = () => {
    if (R) {
      if (L) {
        P();
      } else {
        w();
      }
    }
  };

  const o = () => {
    if (v) {
      f();
    }
  };

  const h = q(
    (a) => {
      u(a);
    },
    [u]
  );

  const B = q(async () => {
    if (!(d || !c)) {
      g(true);
      try {
        let a = null;

        if (v) {
          a = await f();
        } else {
          a = T();
        }

        if (!a) {
          return;
        }

        await c(a);
        m();
        t();
      } catch (a) {
        console.error("Failed to send voice message:", a);
      } finally {
        g(false);
      }
    }
  }, [d, v, f, T, c, m, t]);

  const n = k(v ? A : L ? b * E : E);

  const r = [
    Q.voiceInput,
    v ? Q.recording : "",
    R ? Q.hasRecording : "",
    l ? Q.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return u("div", {
    className: r,
    children: [
      u("button", {
        className: `${Q.circleButton} ${Q.playButton}`,
        onClick: S,
        children: L ? u(He, { size: 20 }) : u(We, { size: 20 }),
      }),
      u("div", {
        className: Q.audioVisualizer,
        children: [
          u("div", {
            className: Q.waveformContainer,
            children: u(Xt, {
              levels: x,
              slideOffset: C,
              audioRef: p,
              isRecording: v,
              hasRecording: R,
              isPlaying: L,
              onSeek: h,
              onPlay: w,
            }),
          }),
          u("span", { className: Q.recordingTime, children: n }),
        ],
      }),
      u("button", {
        className: `${Q.circleButton} ${Q.stopButton}`,
        onClick: o,
        children: u(gt, { size: 20 }),
      }),
      u("button", {
        className: `${Q.circleButton} ${Q.sendButton}`,
        onClick: B,
        disabled: d || (v && A < 1),
        children: d ? u(m, { size: "xs" }) : u($e, { size: 20 }),
      }),
    ],
  });
}
function Re({
  onSubmit: t,
  onVoiceSend: c,
  placeholder: l = "Написать комментарий...",
  replyTo: s,
  onCancelReply: d,
  autoFocus: g,
}) {
  const { text: v, spans: R, handleChange: A, reset: x } = a4();
  const [C, L] = d("text");
  const [b, E] = d(false);
  const [p, M] = d(false);
  const [f, m] = d(false);
  const [w, P] = d(false);
  const u = A(false);
  const T = A(null);
  const k = A(0);

  const {
    images: S,
    uploadingImages: o,
    isUploading: h,
    openFilePicker: B,
    removeImage: n,
    uploadFiles: r,
    clearAll: a,
    fileInputRef: F,
    handleFileChange: z,
  } = a5(4);

  y(
    () => () => {
      if (T.current) {
        clearTimeout(T.current);
      }
    },
    []
  );
  const V = S.length > 0 || o.length > 0;
  const X = v.length > 0 || f || f || V;
  const U = C === "voice";
  const ne = 1000; /* 1e3 */

  const ae = async () => {
    const O = v.trim().length > 0;
    const Z = S.length > 0;
    if ((!O && !Z) || f || h || v.length > ne) {
      return;
    }
    const re = v.trim();
    const Y = [...R];

    const oe = S.map((ie) => ({
      mediaId: ie.mediaId,
    }));

    m(true);
    try {
      await t(re, Y, oe.length > 0 ? oe : undefined);
      x();
      a();
    } catch (ie) {
      console.error("Failed to submit comment:", ie);
    } finally {
      m(false);
    }
  };

  const J = () => {
    u.current = true;
    L("voice");
    M(false);
  };

  const i = () => {
    E(true);
  };

  const H = () => {
    E(false);
    L("text");
    M(true);

    if (T.current) {
      clearTimeout(T.current);
    }

    T.current = window.setTimeout(() => {
      T.current = null;
      M(false);
    }, 300);
  };

  const D = q((O) => {
    O.preventDefault();
    O.stopPropagation();
    k.current++;

    if (O.dataTransfer?.types.includes("Files")) {
      P(true);
    }
  }, []);

  const q = q((O) => {
    O.preventDefault();
    O.stopPropagation();
  }, []);

  const K = q((O) => {
    O.preventDefault();
    O.stopPropagation();
    k.current--;

    if (k.current === 0) {
      P(false);
    }
  }, []);

  const y = q(
    (O) => {
      O.preventDefault();
      O.stopPropagation();
      k.current = 0;
      P(false);
      const Z = O.dataTransfer?.files;

      if (Z && Z.length > 0) {
        r(Array.from(Z));
      }
    },
    [r]
  );

  const G = [
    _.commentInput,
    X ? _.expanded : "",
    U ? _.voiceMode : "",
    s ? _.replyMode : "",
    w ? _.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return u("div", {
    className: G,
    onDragEnter: D,
    onDragOver: q,
    onDragLeave: K,
    onDrop: y,
    children: [
      w &&
        u("div", {
          className: _.dragOverlay,
          children: [
            u("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                u("rect", {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2",
                  ry: "2",
                }),
                u("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                u("polyline", { points: "21 15 16 10 5 21" }),
              ],
            }),
            u("span", { children: "Перетащите изображение" }),
          ],
        }),
      s &&
        u("div", {
          className: _.replyHeader,
          children: [
            u("span", {
              className: _.replyText,
              children: [
                "Ответ для ",
                u("span", { className: _.replyName, children: s.authorName }),
              ],
            }),
            u("button", {
              className: _.replyClose,
              onClick: d,
              children: u(o, { size: 16 }),
            }),
          ],
        }),
      !U &&
        !b &&
        V &&
        u("div", {
          className: _.attachmentStrip,
          children: u(a6, { images: S, uploadingImages: o, onRemove: n }),
        }),
      u("div", {
        className: _.inputRow,
        children: [
          u("button", {
            className: _.circleButton,
            onClick: U ? i : B,
            children: U ? u(o, { size: 20 }) : u(a7, { size: 20 }),
          }),
          u("div", {
            className: _.textareaContainer,
            children:
              U || b
                ? u(cn, {
                    onCancel: i,
                    onSend: c,
                    isExiting: b,
                    onExitComplete: H,
                  })
                : u(jt, {
                    text: v,
                    spans: R,
                    onChange: A,
                    placeholder: l,
                    onSubmit: ae,
                    isEntering: p,
                    autoFocus: g,
                    isSubmitting: f,
                    sendDisabled: h,
                    onImagePaste: r,
                  }),
          }),
          !U &&
            !b &&
            u("button", {
              className: `${_.circleButton} ${_.micButton}`,
              onClick: J,
              children: u(pt, { size: 20 }),
            }),
        ],
      }),
      u("input", {
        ref: F,
        type: "file",
        accept: a8,
        multiple: true,
        onChange: z,
        style: { display: "none" },
      }),
    ],
  });
}
const sn = "_4REluXTH";
const ln = "csThJX40";
const un = "_7tEz9WJs";
const dn = "yICArXOf";
const mn = "-QGEO-Ir";
const hn = "F2vpEy3t";
const fn = "thwOd-Oi";
const pn = "cU3NuD-h";
const gn = "koGcQrYR";
const vn = "Ka6vy6TO";

const te = {
  voiceMessage: sn,
  playButton: ln,
  content: un,
  waveform: dn,
  dragging: mn,
  bar: hn,
  played: fn,
  info: pn,
  time: gn,
  duration: vn,
};

const yn = 45;
function Cn(t) {
  let c = 0;
  for (let l = 0; l < t.length; l++) {
    const s = t.charCodeAt(l);
    c = (c << 5) - c + s;
    c = c & c;
  }
  return Math.abs(c);
}
function wn(t) {
  const c = [];
  let l = Cn(t);
  for (let s = 0; s < yn; s++) {
    l = (l * 9301 + 49297) % 233280;
    const d = 0.2 + (l / 233280) * 0.8;
    c.push(d);
  }
  return c;
}
function Ee(t) {
  if (!isFinite(t) || isNaN(t)) {
    return "0:00";
  }
  const c = Math.floor(t / 60);
  const l = Math.floor(t % 60);
  return `${c}:${l.toString().padStart(2, "0")}`;
}
function Rn({ src: t, duration: c = 0 }) {
  const l = T(() => t, [t]);

  const s = T(() => wn(t), [t]);

  const d = a9((o) => o.activeAudioId);

  const g = a9((o) => o.setActiveAudio);

  const [v, R] = d(true);
  const [A, x] = d(0);
  const [C, L] = d(c);
  const [b, E] = d(false);
  const p = A(null);
  const M = A(null);
  const f = A(null);
  const m = d === l;

  y(() => {
    if (d !== l && p.current && !p.current.paused) {
      p.current.pause();
      f.current && (cancelAnimationFrame(f.current), (f.current = null));
    }
  }, [d, l]);

  y(() => {
    const o = new Audio(t);
    p.current = o;

    const h = () => {
      L(o.duration || c);
      R(false);
    };

    const B = () => {
      x(0);

      if (f.current) {
        cancelAnimationFrame(f.current);
        f.current = null;
      }

      g(null);
    };

    const n = () => {
      R(false);
    };

    o.addEventListener("loadedmetadata", h);
    o.addEventListener("ended", B);
    o.addEventListener("error", n);

    return () => {
      o.removeEventListener("loadedmetadata", h);
      o.removeEventListener("ended", B);
      o.removeEventListener("error", n);
      o.pause();
      p.current = null;

      if (f.current) {
        cancelAnimationFrame(f.current);
      }

      if (a9.getState().activeAudioId === l) {
        g(null);
      }
    };
  }, [t, c, l, g]);

  const w = q(() => {
    if (p.current) {
      x(p.current.currentTime);
      f.current = requestAnimationFrame(w);
    }
  }, []);

  const P = q(() => {
    const o = p.current;

    if (o && !v) {
      if (m) {
        o.pause();
        f.current && (cancelAnimationFrame(f.current), (f.current = null));
        g(null);
      } else {
        g(l);
        o.play();
        w();
      }
    }
  }, [m, v, l, g, w]);

  const u = q(
    (o) => {
      if (!M.current || !C) {
        return 0;
      }
      const h = M.current.getBoundingClientRect();
      const B = o.clientX;
      return Math.max(0, Math.min(B - h.left, h.width)) / h.width;
    },
    [C]
  );

  const T = q(
    (o) => {
      const h = p.current;
      if (!h || !C || !C || b) {
        return;
      }
      const B = u(o);
      h.currentTime = B * C;
      x(h.currentTime);
    },
    [C, b, u]
  );

  const k = q(
    (o) => {
      const h = p.current;
      if (!h || !C) {
        return;
      }
      E(true);
      const B = u(o);
      h.currentTime = B * C;
      x(h.currentTime);
    },
    [C, u]
  );

  y(() => {
    if (!b) {
      return;
    }

    const o = (B) => {
      const n = p.current;
      if (!n || !C) {
        return;
      }
      const r = u(B);
      n.currentTime = r * C;
      x(n.currentTime);
    };

    const h = () => {
      E(false);
    };

    document.addEventListener("mousemove", o);
    document.addEventListener("mouseup", h);

    return () => {
      document.removeEventListener("mousemove", o);
      document.removeEventListener("mouseup", h);
    };
  }, [b, C, u]);
  const S = C > 0 ? A / C : 0;
  return u("div", {
    className: `${te.voiceMessage} ${m ? te.playing : ""}`,
    children: [
      u("button", {
        className: te.playButton,
        onClick: P,
        disabled: v,
        children: v
          ? u(aa, { size: 18 })
          : m
          ? u(He, { size: 18 })
          : u(We, { size: 18 }),
      }),
      u("div", {
        className: te.content,
        children: [
          u("div", {
            ref: M,
            className: `${te.waveform} ${b ? te.dragging : ""}`,
            onClick: T,
            onMouseDown: k,
            children: s.map((o, h) => {
              const n = (h + 0.5) / s.length <= S;
              return u(
                "div",
                {
                  className: `${te.bar} ${n ? te.played : ""}`,
                  style: { height: `${Math.max(4, o * 24)}px` },
                },
                h
              );
            }),
          }),
          u("div", {
            className: te.info,
            children: [
              u("span", {
                className: te.time,
                children: Ee(m || A > 0 ? A : C),
              }),
              (m || A > 0) &&
                u("span", { className: te.duration, children: ["/ ", Ee(C)] }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Nn = "EMoEIZFv";
const Mn = "TCFYTRkG";
const bn = "-Jv0cl93";
const xn = "_8ZH4gvtt";
const Ln = "VgMMM-FP";
const Tn = "MHUIw-Bn";
const In = "ugI7Vwfw";
const Sn = "eYiDjO7I";
const An = "efgl9R1v";
const kn = "N5ciicq2";
const Bn = "Y3Xvuphx";
const En = "P1lAENLs";
const Pn = "EafRTyEa";
const Fn = "YgCVK2-C";
const On = "E34stxAv";
const Dn = "_5xeGurR-";
const $n = "_8CHHNoFp";
const Hn = "qBk55euG";
const Wn = "NTrrYRK4";
const zn = "Oy71u1HK";
const Vn = "Az3ELd41";
const _n = "g9UiDqsQ";
const jn = "-tabj2ls";
const Un = "LiWVk6u3";

const $ = {
  commentWrapper: Nn,
  threadItem: Mn,
  avatarWrapper: bn,
  threadLine: xn,
  commentBody: Ln,
  showMoreBtn: Tn,
  avatarPlaceholder: In,
  comment: Sn,
  small: An,
  commentTime: kn,
  commentText: Bn,
  commentActions: En,
  commentContent: Pn,
  avatarLink: Fn,
  authorLink: On,
  commentHeader: Dn,
  moreButton: $n,
  commentHeaderLeft: Hn,
  replyMention: Wn,
  commentMedia: zn,
  reactionWrapper: Vn,
  commentAction: _n,
  liked: jn,
  replyButton: Un,
};

function qn({
  author: t,
  commentId: c,
  text: l,
  spans: s = [],
  attachments: d = [],
  createdAt: g,
  reactionsCount: v,
  isReacted: R,
  size: A = "sm",
  onLike: x,
  onReply: C,
  onReport: L,
  onEdit: b,
  onDelete: E,
  replyTo: p,
  hideAvatar: M = false,
  isWallOwner: f = false,
}) {
  console.log("[CommentBase] RENDER", { commentId: c, text: l.slice(0, 20) });
  const m = ab(g);

  const w = b((o) => o.profile?.id);

  const P = t.id === w;
  const u = P || f;
  const T = A === "xs";

  const k = T(() => {
    const o = [];

    if (P && b) {
      o.push({
        id: "edit",
        label: "Редактировать",
        icon: u(Y, { size: 16 }),
        onClick: () => b(c),
      });
    }

    if (u && E) {
      o.push({
        id: "delete",
        label: "Удалить",
        icon: u(F, { size: 16 }),
        danger: true,
        onClick: () => E(c),
      });
    }

    if (!P) {
      o.push({
        id: "report",
        label: "Пожаловаться",
        icon: u(x, { size: 16 }),
        danger: true,
        onClick: () => L(c),
      });
    }

    return o;
  }, [P, u, c, b, E, L]);

  const S = `/@${t.username ?? t.id}`;
  return u("div", {
    className: `${$.comment} ${T ? $.small : ""}`,
    children: [
      !M &&
        u("a", {
          href: S,
          className: $.avatarLink,
          children: u(n, { src: t.avatar, alt: t.displayName, size: A }),
        }),
      u("div", {
        className: $.commentContent,
        children: [
          u("div", {
            className: $.commentHeader,
            children: [
              u("div", {
                className: $.commentHeaderLeft,
                children: [
                  u("a", {
                    href: S,
                    className: $.authorLink,
                    children: u(U, {
                      name: t.displayName,
                      verified: t.isVerified,
                      pin: t.pin,
                      size: A,
                    }),
                  }),
                  u("span", { className: $.commentTime, children: m }),
                ],
              }),
              u(D, {
                trigger: u(v, { size: T ? 14 : 16 }),
                items: k,
                position: "bottom-right",
                className: $.moreButton,
              }),
            ],
          }),
          (p || l) &&
            u("div", {
              className: $.commentText,
              children: [
                p &&
                  u(k, {
                    children: [
                      u("a", {
                        href: `/@${p.username}`,
                        className: $.replyMention,
                        children: ["@", p.displayName],
                      }),
                      ", ",
                    ],
                  }),
                l && u(ac, { text: l, spans: s }),
              ],
            }),
          ad(d).length > 0 &&
            u("div", {
              className: $.commentMedia,
              children: u(ae, { media: ad(d) }),
            }),
          d
            .filter((o) => o.type === "audio")
            .map((o) => u(Rn, { src: o.url, duration: o.duration }, o.id)),
          u("div", {
            className: $.commentActions,
            children: [
              u("button", {
                className: $.replyButton,
                onClick: C,
                children: "Ответить",
              }),
              u("div", {
                className: $.reactionWrapper,
                children: u("button", {
                  className: `${$.commentAction} ${R ? $.liked : ""}`,
                  onClick: () => x(),
                  children: [
                    u(a0, { size: 14, filled: R }),
                    u(af, { value: v }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Gn({
  comment: t,
  onLike: c,
  onReaction: l,
  onLikeReply: s,
  onReactionReply: d,
  replyingTo: g,
  onStartReply: v,
  onCancelReply: R,
  onSubmitReply: A,
  onVoiceSend: x,
  onLoadReplies: C,
  onReport: L,
  onEdit: b,
  onDelete: E,
  isLoadingReplies: p = false,
  flashingCommentId: M,
  isWallOwner: f = false,
}) {
  console.log("[CommentItem] RENDER", { commentId: t.id });
  const m = g?.commentId === t.id;

  const w = {
    id: t.author.id,
    username: t.author.username,
    avatar: t.author.avatar ?? "",
    displayName: t.author.displayName,
    isVerified: t.author.isVerified,
    pin: t.author.pin,
  };

  const P = t.previewReplies ?? [];
  const u = M === t.id;
  const [T] = d({});
  const [k] = d({});
  const S = q(async () => {}, [t.id]);
  const o = q(async (n) => {}, []);
  const h = t.stats.replies > P.length;

  const B = [
    { type: "parent", data: t, author: w },
    ...P.map((n) => ({
      type: "reply",
      data: n,

      author: {
        id: n.author.id,
        username: n.author.username,
        avatar: n.author.avatar ?? "",
        displayName: n.author.displayName,
        isVerified: n.author.isVerified,
        pin: n.author.pin,
      },
    })),
  ];

  return u("div", {
    className: `${$.commentWrapper} ${u ? "flash-highlight" : ""}`,
    "data-comment-id": t.id,
    children: [
      B.map((n, r) => {
        const F = !(r === B.length - 1 && !m && !h);
        const z = M === n.data.id;
        return u(
          "div",
          {
            "data-comment-id": n.data.id,
            className: `${$.threadItem} ${z ? "flash-highlight" : ""}`,
            children: [
              u("div", {
                className: $.avatarWrapper,
                children: [
                  u("a", {
                    href: `/@${n.author.username ?? n.author.id}`,
                    className: $.avatarLink,
                    children: u(n, {
                      src: n.author.avatar,
                      alt: n.author.displayName,
                      size: "sm",
                    }),
                  }),
                  F && u("div", { className: $.threadLine }),
                ],
              }),
              u("div", {
                className: $.commentBody,
                children: u(qn, {
                  author: n.author,
                  commentId: n.data.id,
                  text: n.data.text,
                  spans: n.data.spans ?? [],
                  attachments: n.data.attachments ?? [],
                  replyTo: n.data.replyTo,
                  createdAt: n.data.createdAt,
                  reactionsCount: n.data.reactions.total,
                  isReacted: n.data.reactions.myReaction !== null,
                  selectedReaction: n.data.reactions.myReaction,
                  reactionCounts: n.type === "parent" ? T : k[n.data.id] ?? {},
                  size: "sm",
                  onLike: n.type === "parent" ? c : () => s(n.data.id),
                  onReaction:
                    n.type === "parent"
                      ? l
                        ? (V) => l(t.id, V)
                        : undefined
                      : d
                      ? (V) => d(n.data.id, V)
                      : undefined,
                  onReply: () =>
                    n.type === "parent"
                      ? v(
                          t.id,
                          t.author.username ?? t.author.id,
                          t.author.displayName,
                          t.author.id
                        )
                      : v(
                          t.id,
                          n.data.author.username ?? n.data.author.id,
                          n.data.author.displayName,
                          n.data.author.id,
                          n.data.id
                        ),
                  onReport: L,
                  onEdit: b,
                  onDelete: E,
                  onHoverReaction: n.type === "parent" ? S : () => o(n.data.id),
                  hideAvatar: true,
                  isWallOwner: f,
                }),
              }),
            ],
          },
          n.data.id
        );
      }),
      m &&
        u("div", {
          className: $.threadItem,
          children: [
            u("div", {
              className: $.avatarWrapper,
              children: [
                u("div", { className: $.avatarPlaceholder }),
                h && u("div", { className: $.threadLine }),
              ],
            }),
            u("div", {
              className: $.commentBody,
              children: u(Re, {
                placeholder: "Написать ответ...",
                replyTo: { id: g.commentId, authorName: g.displayName },
                onCancelReply: R,
                onSubmit: A,
                onVoiceSend: x,
                autoFocus: true,
              }),
            }),
          ],
        }),
      h &&
        !p &&
        u("button", {
          className: $.showMoreBtn,
          onClick: () => C(t.id),
          children: ["Показать ещё ", t.stats.replies - P.length, " ответов"],
        }),
    ],
  });
}
const Xn = "OSYFbJTc";
const Yn = "BZs335wO";
const Zn = "uHfvgHkC";
const Jn = "_0mjuADLO";
const Kn = "-irX9LBI";
const Qn = "PkENmhoL";
const er = "Ipy3h0nq";
const tr = "_7EbOLXPm";
const nr = "EO684LVX";

const ce = {
  comments: Xn,
  sortWrapper: Yn,
  sortSelect: Zn,
  commentsList: Jn,
  commentItem: Kn,
  empty: Qn,
  loading: er,
  loadMoreSentinel: tr,
  inputWrapper: nr,
};

const rr = "DolcZKu1";
const or = "_1lo2seB9";
const ar = "X0vaA15E";
const cr = "JmzJKMT2";
const sr = "p8fSWBtD";
const ir = "TvBLZ6Xz";
const lr = "ML3QZih-";
const ur = "F8sHrsZA";
const dr = "DicPhJTL";
const mr = "L6r5VJk9";
const hr = "lHdqCdp-";
const fr = "rfKDp2t8";

const ee = {
  editCommentModal: rr,
  form: or,
  header: ar,
  title: cr,
  content: sr,
  editor: ir,
  actions: lr,
  mediaButtons: ur,
  mediaButton: dr,
  submitGroup: mr,
  charCount: hr,
  error: fr,
};

const Pe = 2000; /* 2e3 */
function pr({ commentId: t, initialText: c, initialSpans: l = [] }) {
  const { closeModal: s } = a();

  const d = c((u) => u.editComment);

  const g = b((u) => u.profile);

  const {
    text: v,
    spans: R,
    editorRef: A,
    handleChange: x,
    insertText: C,
  } = a4(c, l);

  const [L, b] = d(false);
  const E = Pe - v.length;
  const p = E < 0;
  const M = v !== c;
  const f = JSON.stringify(R) !== JSON.stringify(l);
  const m = M || f;

  const w = q(
    (u) => {
      C(u.emoji);
    },
    [C]
  );

  const P = q(async () => {
    if (!(!v.trim() || p || p || !m || p || !m || L)) {
      b(true);
      try {
        await d(t, v, R);
        s();
      } catch (u) {
        console.error("Failed to update comment:", u);
      } finally {
        b(false);
      }
    }
  }, [v, R, p, m, L, d, t, s]);

  return u(M, {
    frameless: true,
    onClose: s,
    className: ee.editCommentModal,
    children: u("div", {
      className: ee.form,
      children: [
        u("div", {
          className: ee.header,
          children: u("span", {
            className: ee.title,
            children: "Редактирование комментария",
          }),
        }),
        u("div", {
          className: ee.content,
          children: [
            u(n, { src: g?.avatar ?? "", size: "sm" }),
            u(a3, {
              ref: A,
              value: v,
              spans: R,
              onChange: x,
              placeholder: "Комментарий...",
              maxLength: Pe,
              autoFocus: true,
              className: ee.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        u("div", {
          className: ee.actions,
          children: [
            u("div", {
              className: ee.mediaButtons,
              children: u(ag, {
                onEmojiSelect: w,
                buttonClassName: ee.mediaButton,
              }),
            }),
            u("div", {
              className: ee.submitGroup,
              children: [
                p &&
                  u("span", {
                    className: `${ee.charCount} ${ee.error}`,
                    children: E,
                  }),
                u(B, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => s(),
                  children: "Отмена",
                }),
                u(B, {
                  size: "md",
                  disabled: !v.trim() || p || p || !m || p || !m || L,
                  onClick: P,
                  children: L ? "Сохранение..." : "Сохранить",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function gr({
  comments: t,
  isLoading: c,
  isLoadingMore: l,
  hasMore: s,
  sort: d,
  onSortChange: g,
  onLikeComment: v,
  onReactionComment: R,
  onAddComment: A,
  onVoiceSend: x,
  onLoadMore: C,
  isWallOwner: L = false,
  variant: b = "modal",
  hideInput: E = false,
}) {
  console.log("[Comments] RENDER", {
    commentsCount: t.length,
    isLoading: c,
    isLoadingMore: l,
    hasMore: s,
    sort: d,
  });
  const [p, M] = d(null);
  const [f, m] = d(null);
  const [w, P] = d(null);
  const [u, T] = d(null);
  const k = A(null);
  const { openModal: S } = a();

  const o = c((i) => i.highlightedCommentId);

  const h = c((i) => i.clearHighlightedComment);

  const B = c((i) => i.loadReplies);

  const n = c((i) => i.deleteComment);

  const r = c((i) => i.toggleCommentReaction);

  y(() => {
    if (!s || l) {
      return;
    }

    const i = new IntersectionObserver(
      (D) => {
        if (D[0].isIntersecting) {
          C();
        }
      },
      { rootMargin: "200px" }
    );

    const H = k.current;

    if (H) {
      i.observe(H);
    }

    return () => {
      if (H) {
        i.unobserve(H);
      }
    };
  }, [s, l, C]);

  y(() => {
    if (!o) {
      return;
    }
    const i =
      document.querySelector("[data-comments-scroll]") ||
      document.querySelector("[data-comments-modal]");
    if (i) {
      i.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const D = document.querySelector("[data-comments-section]");

      if (D) {
        D.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    const H = window.setTimeout(() => {
      m(o);
      h();
      const D = window.setTimeout(() => {
        m(null);
      }, 600);
      return () => clearTimeout(D);
    }, 300);
    return () => clearTimeout(H);
  }, [o, h]);

  const a = async (i, H, D) => {
    if (p) {
      await A(
        i,
        H,
        p.commentId,
        p.userId,
        { id: p.userId, username: p.username, displayName: p.displayName },
        D
      );

      M(null);
    }
  };

  const F = (i, H, D, q, K) => {
    M({ commentId: i, username: H, displayName: D, userId: q, replyId: K });
  };

  const z = () => {
    M(null);
  };

  const V = q(
    (i) => {
      for (const H of t) {
        const D = H.previewReplies?.find((q) => q.id === i);
        if (D) {
          r(i, (D.reactions.myReaction === "love", "love"));
          return;
        }
      }
    },
    [t, r]
  );

  const X = q(
    (i, H) => {
      r(i, H);
    },
    [r]
  );

  const U = q(
    async (i) => {
      P(i);
      try {
        await B(i);
      } finally {
        P(null);
      }
    },
    [B]
  );

  const ne = q((i) => {
    T(i);
  }, []);

  const ae = q(
    (i) => {
      let H = "";
      let D = [];
      for (const q of t) {
        if (q.id === i) {
          H = q.text;
          D = q.spans ?? [];
          break;
        }
        const K = q.previewReplies?.find((y) => y.id === i);
        if (K) {
          H = K.text;
          D = K.spans ?? [];
          break;
        }
      }
      S(u(pr, { commentId: i, initialText: H, initialSpans: D }));
    },
    [t, S]
  );

  const J = q(
    (i) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        n(i);
      }
    },
    [n]
  );

  return u("div", {
    className: ce.comments,
    children: [
      u("div", {
        className: ce.sortWrapper,
        children: u("select", {
          value: d,
          onChange: (i) => g(i.target.value),
          className: ce.sortSelect,
          children: [
            u("option", { value: "new", children: "Новые" }),
            u("option", { value: "old", children: "Старые" }),
            u("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      c
        ? u("div", { className: ce.loading, children: u(m, {}) })
        : t.length === 0
        ? u("div", { className: ce.empty, children: "Нет комментариев" })
        : u("div", {
            className: ce.commentsList,
            children: [
              t.map((i) =>
                u(
                  "div",
                  {
                    className: ce.commentItem,
                    children: u(Gn, {
                      comment: i,
                      onLike: () => v(i.id, i.reactions.myReaction),
                      onReaction: R,
                      onLikeReply: V,
                      onReactionReply: X,
                      replyingTo: p?.commentId === i.id ? p : null,
                      onStartReply: F,
                      onCancelReply: z,
                      onSubmitReply: a,
                      onVoiceSend: x,
                      onLoadReplies: U,
                      onReport: ne,
                      onEdit: ae,
                      onDelete: J,
                      isLoadingReplies: w === i.id,
                      flashingCommentId: f,
                      isWallOwner: L,
                    }),
                  },
                  i.id
                )
              ),
              s &&
                u("div", {
                  ref: k,
                  className: ce.loadMoreSentinel,
                  children: l && u(m, { size: "sm" }),
                }),
            ],
          }),
      !E &&
        u("div", {
          className: ce.inputWrapper,
          children: u(Re, {
            onSubmit: (i, H, D) => A(i, H, undefined, undefined, undefined, D),
            onVoiceSend: x,
          }),
        }),
      u && u(R, { targetType: "comment", targetId: u, onClose: () => T(null) }),
    ],
  });
}
const vr = "NCJMh6VC";
const yr = "Q1CXQizH";
const Cr = "lp5GRZTP";
const wr = "jnSbHonP";
const Rr = "nDnu9hhf";
const Nr = "s32UFpYS";
const Mr = "_1w3Yc5mB";
const br = "aX-yM5Hy";
const xr = "lGzPgBLd";

const se = {
  postPage: vr,
  pageHeader: yr,
  pageTitle: Cr,
  postSection: wr,
  backButton: Rr,
  post: Nr,
  commentsSection: Mr,
  fixedInputWrapper: br,
  notFound: xr,
};

export function PostPage({ postId: t, comment: c }) {
  const l = A(null);

  const s = T(
    () =>
      c ||
      new URLSearchParams(window.location.search).get("comment") ||
      new URLSearchParams(window.location.search).get("comment") ||
      undefined,
    [c]
  );

  const {
    currentPost: d,
    currentPostError: g,
    comments: v,
    commentsLoading: R,
    commentsLoadingMore: A,
    commentsHasMore: x,
    fetchPost: C,
    clearComments: L,
    fetchComments: b,
    loadMoreComments: E,
    toggleCommentReaction: p,
    addComment: M,
    setHighlightedCommentId: f,
  } = c(
    ke((r) => ({
      currentPost: r.currentPost,
      currentPostError: r.currentPostError,
      comments: r.comments,
      commentsLoading: r.commentsLoading,
      commentsLoadingMore: r.commentsLoadingMore,
      commentsHasMore: r.commentsHasMore,
      fetchPost: r.fetchPost,
      clearComments: r.clearComments,
      fetchComments: r.fetchComments,
      loadMoreComments: r.loadMoreComments,
      toggleCommentReaction: r.toggleCommentReaction,
      addComment: r.addComment,
      setHighlightedCommentId: r.setHighlightedCommentId,
    }))
  );

  if (t && l.current !== t) {
    l.current = t;
    L();
  }

  const { commentsSort: m, setCommentsSort: w } = ah(
    ke((r) => ({
      commentsSort: r.commentsSort,
      setCommentsSort: r.setCommentsSort,
    }))
  );

  const P = b((r) => r.profile?.id);

  const u = d?.wallOwnerId === P;

  y(() => {
    if (!s) {
      window.scrollTo(0, 0);
    }
  }, [t, s]);

  y(() => {
    if (!t) {
      return;
    }
    let r = false;

    (async () => {
      await C(t);
      return r || (await b(t));
    })();

    return () => {
      r = true;
    };
  }, [t, C, b]);

  y(() => {
    if (s && !R && v.length > 0) {
      f(s);
    }
  }, [s, R, v.length, f]);

  const T = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $_1("/");
    }
  };

  const k = (r) => {
    w(r);

    if (t) {
      b(t);
    }
  };

  const S = () => {
    if (t && x && !A) {
      E(t);
    }
  };

  const o = (r, a) => {
    p(r, a ?? "love");
  };

  const h = q(
    (r, a) => {
      p(r, a);
    },
    [p]
  );

  const B = async (r, a, F, z, V, X) => {
    if (t) {
      await M(t, r, a, F, X, z, V);
    }
  };

  const n = q(
    async (r) => {
      if (t) {
        try {
          const a = `voice_${Date.now()}.webm`;
          const F = new File([r], a, { type: r.type || "audio/webm" });
          const z = await r.uploadMedia(F);
          await M(t, "", [], undefined, [{ mediaId: z.id }]);
        } catch (a) {
          console.error("Failed to send voice message:", a);
        }
      }
    },
    [M, t]
  );

  return g
    ? u("div", {
        className: se.notFound,
        children: [
          u("h2", { children: "Пост не найден" }),
          u("button", {
            onClick: () => $_1("/"),
            children: "Вернуться на главную",
          }),
        ],
      })
    : d
    ? u("div", {
        className: se.postPage,
        children: [
          u("header", {
            className: se.pageHeader,
            children: [
              u("button", {
                className: se.backButton,
                onClick: T,
                children: u(A_1, { size: 24 }),
              }),
              u("h1", { className: se.pageTitle, children: "Пост" }),
            ],
          }),
          u("div", {
            className: se.postSection,
            children: [
              u(Q_1, { className: se.post, post: d, variant: "modal" }),
              u("div", {
                className: se.commentsSection,
                "data-comments-section": true,
                children: u(gr, {
                  comments: v,
                  isLoading: R,
                  isLoadingMore: A,
                  hasMore: x,
                  sort: m,
                  onSortChange: k,
                  onLikeComment: o,
                  onReactionComment: h,
                  onAddComment: B,
                  onVoiceSend: n,
                  onLoadMore: S,
                  isWallOwner: u,
                  variant: "page",
                  hideInput: true,
                }),
              }),
            ],
          }),
          u("div", {
            className: se.fixedInputWrapper,
            children: u(Re, {
              onSubmit: (r, a, F) =>
                B(r, a, undefined, undefined, undefined, F),
              onVoiceSend: n,
            }),
          }),
        ],
      })
    : null;
}

export { PostPage as PostPage, PostPage as default };
