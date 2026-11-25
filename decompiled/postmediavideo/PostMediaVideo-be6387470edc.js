import { A, q, u, h, bo, d, bp, bq, ba, b7 } from "./index-4cbec7521f6a.js";

const Ee = "nqlA";
const Le = "g3sy";
const Me = "QhqS";
const ke = "arMz";
const R = { wrapper: Ee, track: Le, fill: Me, thumb: ke };
function Ce({ value, onChange, onDragStart, onDragEnd }) {
  const i = A(null);

  const u = q(
    (p) => {
      const i_current = i.current;
      if (!i_current) {
        return;
      }
      const M = i_current.getBoundingClientRect();
      const k = 1 - (p - M.top) / M.height;
      onChange(Math.max(0, Math.min(1, k)));
    },
    [onChange]
  );

  const y = q(
    (p) => {
      p.stopPropagation();
      p.preventDefault();
      onDragStart?.();
      u(p.clientY);

      const h = (k) => u(k.clientY);

      const M = () => {
        onDragEnd?.();
        document.removeEventListener("mousemove", h);
        document.removeEventListener("mouseup", M);
      };

      document.addEventListener("mousemove", h);
      document.addEventListener("mouseup", M);
    },
    [u, onDragStart, onDragEnd]
  );

  const E = 7;
  const n = 80;
  const l = E;
  const f = n - E;
  const L = l + value * (f - l);
  const N = `${L}px`;
  return u("div", {
    className: R.wrapper,
    onMouseDown: y,
    onClick: (p) => {
      p.stopPropagation();
      p.preventDefault();
    },
    children: u("div", {
      ref: i,
      className: R.track,
      children: [
        u("div", { className: R.fill, style: { height: N } }),
        u("div", { className: R.thumb, style: { bottom: `${L}px` } }),
      ],
    }),
  });
}
const Ne = 250;
function Be({ videoRef, vs, attachmentId, source }) {
  const i = A(0);
  const u = A(null);
  const y = A(0);
  h(() => {
    const s_current = videoRef.current;
    if (!s_current || !vs || !attachmentId) {
      return;
    }

    const l = () => {
      u.current = Date.now();
    };

    const f = () => {
      if (u.current !== null) {
        i.current += Date.now() - u.current;
        u.current = null;
      }
    };

    const L = () => {
      if (s_current.paused || u.current === null) {
        return;
      }
      const p = Date.now();
      i.current += p - u.current;
      u.current = p;
    };

    const N = () => {
      if (s_current.duration > 0 && Number.isFinite(s_current.duration)) {
        y.current = Math.round(s_current.duration * 1000 /* 1e3 */);
      }
    };

    if (!s_current.paused && s_current.readyState >= 3) {
      u.current = Date.now();
    }

    s_current.addEventListener("playing", l);
    s_current.addEventListener("pause", f);
    s_current.addEventListener("waiting", f);
    s_current.addEventListener("timeupdate", L);
    s_current.addEventListener("loadedmetadata", N);

    if (s_current.duration > 0 && Number.isFinite(s_current.duration)) {
      y.current = Math.round(s_current.duration * 1000 /* 1e3 */);
    }

    return () => {
      s_current.removeEventListener("playing", l);
      s_current.removeEventListener("pause", f);
      s_current.removeEventListener("waiting", f);
      s_current.removeEventListener("timeupdate", L);
      s_current.removeEventListener("loadedmetadata", N);
    };
  }, [videoRef, vs, attachmentId]);
  const E = q(() => {
    if (!(!vs || !attachmentId)) {
      if (u.current !== null) {
        i.current += Date.now() - u.current;
        u.current = null;
      }

      if (i.current >= Ne && y.current > 0) {
        const n = source === "post_page" || source === "link";
        bo.trackVideoProgress(
          vs,
          attachmentId,
          i.current,
          y.current,
          n ? source : undefined
        );
      }

      i.current = 0;
    }
  }, [vs, attachmentId, source]);

  h(() => () => E(), [E]);

  return { emit: E };
}
const Se = "bN3G";
const De = "FeXZ";
const Fe = "g49i";
const Re = "aPVL";
const Ve = "L1UI";
const xe = "J2SJ";
const Ie = "iGxi";
const $e = "rdxx";
const Te = "QBSH";
const qe = "NoVH";
const Ge = "e02g";
const Ae = "FdEQ";
const Oe = "LxQj";
const Ue = "GkIq";
const He = "R37i";
const _e = "r1zv";
const ze = "lAs0";
const Qe = "IvNr";
const Xe = "OUsC";

const a = {
  container: Se,
  hidden: De,
  video: Fe,
  revealing: Re,
  canvas: Ve,
  duration: xe,
  bottomOverlay: Ie,
  volumeControl: $e,
  active: Te,
  volumeSlider: qe,
  muteButton: Ge,
  muteButtonMobile: Ae,
  controlButton: Oe,
  playButton: Ue,
  fullscreenButton: He,
  progressContainer: _e,
  progressTrack: ze,
  progressFill: Qe,
  scrubbing: Xe,
};

const ee = parseFloat(b7.getItem("video-volume") ?? "1");
let S = true;
let Q = isNaN(ee) ? 1 : ee;
const X = new Set();
const C = new Map();
let te = false;
let H = null;
function V() {
  const s = window.innerHeight / 2;
  let c = null;
  let v = Infinity;
  for (const [m] of C) {
    const i = m.getBoundingClientRect();

    if (Math.abs(i.top + i.height / 2 - s) < v) {
      v = Math.abs(i.top + i.height / 2 - s);
      c = m;
    }
  }
  for (const [m, i] of C) {
    if (m === c && !i.userPaused) {
      if (i.video.paused) {
        i.video.play().catch(() => {});
      }
    } else if (!i.video.paused) {
      i.video.pause();
    }
  }
}
function ne() {
  if (H == null) {
    H = requestAnimationFrame(() => {
      H = null;
      V();
    });
  }
}
function _() {
  const s = C.size > 1;

  if (s !== te) {
    s
      ? window.addEventListener("scroll", ne, { passive: true })
      : window.removeEventListener("scroll", ne);

    te = s;
  }
}
function z(s) {
  S = s;
  b7.setItem("video-muted", String(s));

  X.forEach((c) => c(s));
}
function Ye(s) {
  Q = s;
  b7.setItem("video-volume", String(s));
}
function Je(s) {
  const c = Math.floor(s / 60);
  const v = s % 60;
  return `${c}:${v.toString().padStart(2, "0")}`;
}
function je() {
  return u("svg", {
    width: "13",
    height: "14",
    viewBox: "0 0 13 14",
    fill: "none",
    "aria-hidden": "true",
    children: u("path", {
      fill: "currentColor",
      d: "M12 5.3a2 2 0 0 1 0 3.4l-9 5c-1.3.8-3-.2-3-1.6V1.9C0 .5 1.7-.5 3 .3z",
    }),
  });
}
function We() {
  return u("svg", {
    width: "13",
    height: "14",
    viewBox: "0 0 13 14",
    fill: "currentColor",
    "aria-hidden": "true",
    children: [
      u("rect", { width: "4", height: "14", rx: "2" }),
      u("rect", { x: "9", width: "4", height: "14", rx: "2" }),
    ],
  });
}
function Ze() {
  return u("svg", {
    width: "19",
    height: "18",
    viewBox: "0 0 25 24",
    fill: "none",
    "aria-hidden": "true",
    children: u("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "3",
      d: "M4 16q0 5 5 5M22 16q0 5-5 5M22 8q0-5-5-5M4 8q0-5 5-5",
    }),
  });
}

export function PostMediaVideo({
  src,
  spoiler = false,
  width,
  height,
  duration,
  className = "",
  postVs,
  source,
  attachmentId,
}) {
  const l = A(null);
  const f = A(null);
  const L = A(null);
  const N = A(null);
  const p = A(null);
  const [h, M] = d(!spoiler);
  const [k, re] = d(false);
  const [oe, se] = d(false);
  const [B, ie] = d(S);
  const [x, ce] = d(Q);
  const [ae, J] = d(false);
  const [le, I] = d(0);
  const [ue, j] = d(false);
  const [W, $] = d(false);
  const F = A(false);
  const T = A(false);
  const de = bp();
  const { emit } = Be({
    videoRef: l,
    vs: postVs,
    attachmentId: attachmentId,
    source: source,
  });

  const { resetOpacity } = bq(L, f, {
    isVisible: oe && !h && spoiler,
    isRevealing: k,
    onRevealComplete: () => M(true),
  });

  h(() => {
    const e = (r) => {
      ie(r);

      if (l.current) {
        l.current.muted = r;
      }
    };
    X.add(e);

    return () => {
      X.delete(e);
    };
  }, []);

  h(() => {
    const f_current = f.current;
    if (!f_current) {
      return;
    }
    const r = new IntersectionObserver(
      (o) => {
        o.forEach((d) => {
          se(d.isIntersecting);
          const l_current = l.current;

          if (l_current) {
            if (d.isIntersecting) {
              l_current.currentTime = 0;
              l_current.muted = S;
              l_current.volume = Q;
              C.set(f_current, { video: l_current, userPaused: false });
              _();
              V();
            } else {
              C.delete(f_current);
              _();
              V();
              l_current.pause();
              emit();
              l_current.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    r.observe(f_current);

    return () => {
      r.disconnect();
      C.delete(f_current);
      _();
      V();
      emit();
    };
  }, [h, emit]);

  h(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }

    const r = () => {
      if (F.current) {
        return;
      }
      const l_current_duration = l_current.duration;

      if (Number.isFinite(l_current_duration) && l_current_duration > 0) {
        I((l_current.currentTime / l_current_duration) * 100);
      }
    };

    const o = () => I(0);

    l_current.addEventListener("timeupdate", r);
    l_current.addEventListener("loadedmetadata", r);
    l_current.addEventListener("emptied", o);

    return () => {
      l_current.removeEventListener("timeupdate", r);
      l_current.removeEventListener("loadedmetadata", r);
      l_current.removeEventListener("emptied", o);
    };
  }, []);

  h(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }

    const r = () => $(true);

    const o = () => $(false);

    l_current.addEventListener("play", r);
    l_current.addEventListener("pause", o);
    $(!l_current.paused);

    return () => {
      l_current.removeEventListener("play", r);
      l_current.removeEventListener("pause", o);
    };
  }, []);

  const G = emit((e) => {
    const p_current = p.current;
    const l_current = l.current;
    if (!p_current || !l_current) {
      return;
    }
    const d = p_current.getBoundingClientRect();
    if (d.width <= 0) {
      return;
    }
    const g = Math.min(1, Math.max(0, (e - d.left) / d.width));

    if (Number.isFinite(l_current.duration) && l_current.duration > 0) {
      l_current.currentTime = l_current.duration * g;
      I(g * 100);
    }
  }, []);

  const me = emit(
    (e) => {
      e.stopPropagation();
      F.current = true;
      j(true);
      const e_currentTarget = e.currentTarget;
      try {
        e_currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      G(e.clientX);

      const o = (g) => G(g.clientX);

      const d = () => {
        try {
          e_currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        document.removeEventListener("pointermove", o);
        document.removeEventListener("pointerup", d);
        document.removeEventListener("pointercancel", d);
        window.removeEventListener("blur", d);
        j(false);

        setTimeout(() => {
          F.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", o);
      document.addEventListener("pointerup", d);
      document.addEventListener("pointercancel", d);
      window.addEventListener("blur", d);
    },
    [G]
  );

  const pe = (e) => {
    e.stopPropagation();

    if (!(T.current || F.current)) {
      if (!h && !k && spoiler) {
        re(true);
        resetOpacity();
        return;
      }
      A();
    }
  };

  const fe = (e) => {
    e.stopPropagation();
    O();
  };

  const Z = emit((e) => {
    e.stopPropagation();
    e.preventDefault();
    z(!S);
  }, []);

  const A = emit(() => {
    const l_current = l.current;
    const f_current = f.current;
    if (!l_current || !f_current) {
      return;
    }
    const o = C.get(f_current);

    if (l_current.paused) {
      o && (o.userPaused = false);
      l_current.play().catch(() => {});
    } else {
      o && (o.userPaused = true);
      l_current.pause();
    }
  }, []);

  const O = emit(() => {
    const l_current = l.current;
    const f_current = f.current;
    if (!l_current) {
      return;
    }
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }
    const o = l_current;

    if (f_current?.requestFullscreen) {
      f_current.requestFullscreen().catch(() => {});
    } else if (o.webkitEnterFullscreen) {
      o.webkitEnterFullscreen();
    }
  }, []);

  const ge = emit(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      A();
    },
    [A]
  );

  const he = emit(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      O();
    },
    [O]
  );

  const be = emit((e) => {
    ce(e);
    Ye(e);

    if (l.current) {
      l.current.volume = e;
    }

    if (e > 0 && S) {
      z(false);
    } else if (e === 0 && !S) {
      z(true);
    }
  }, []);

  const U = !h && spoiler;
  return className("div", {
    ref: f,
    className: `${a.container} ${className} ${U ? a.hidden : ""} ${
      k ? a.revealing : ""
    }`,
    onClick: pe,
    onDblClick: fe,
    children: [
      className("video", {
        ref: l,
        src: src,
        preload: "metadata",
        playsInline: true,
        muted: B,
        loop: true,
        className: a.video,
        width: width,
        height: height,
      }),
      duration != null &&
        U &&
        className("div", { className: a.duration, children: Je(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: a.bottomOverlay,
          children: [
            className("button", {
              className: `${a.controlButton} ${a.playButton}`,
              onClick: ge,
              type: "button",
              "aria-label": W ? "Pause" : "Play",
              children: W ? className(We, {}) : className(je, {}),
            }),
            className("button", {
              className: `${a.controlButton} ${a.fullscreenButton}`,
              onClick: he,
              type: "button",
              "aria-label": "Fullscreen",
              children: className(Ze, {}),
            }),
            de
              ? className("button", {
                  className: a.muteButtonMobile,
                  onClick: Z,
                  type: "button",
                  "aria-label": B ? "Unmute" : "Mute",
                  children: className(ba, { muted: B, volume: x }),
                })
              : className("div", {
                  className: `${a.volumeControl} ${ae ? a.active : ""}`,
                  children: [
                    className("div", {
                      className: a.volumeSlider,
                      children: className(Ce, {
                        value: B ? 0 : x,
                        onChange: be,
                        onDragStart: () => {
                          T.current = true;
                          J(true);
                        },
                        onDragEnd: () => {
                          J(false);

                          setTimeout(() => {
                            T.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    className("button", {
                      className: a.muteButton,
                      onClick: Z,
                      type: "button",
                      "aria-label": B ? "Unmute" : "Mute",
                      children: className(ba, { muted: B, volume: x }),
                    }),
                  ],
                }),
            className("div", {
              ref: N,
              className: a.progressContainer,
              onPointerDown: me,
              onClick: (e) => e.stopPropagation(),
              children: className("div", {
                ref: p,
                className: a.progressTrack,
                children: className("div", {
                  className: `${a.progressFill} ${ue ? a.scrubbing : ""}`,
                  style: { width: `${le}%` },
                }),
              }),
            }),
          ],
        }),
      U && className("canvas", { ref: L, className: a.canvas }),
    ],
  });
}

export { PostMediaVideo as PostMediaVideo };
