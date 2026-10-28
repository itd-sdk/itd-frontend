import { A, q, u, h, ai, d, aj, ak } from "./index-AoERIL5v.js";
import { V as V_1 } from "./VolumeGlyph-CONnbAi0.js";
const Ee = "NOv2";
const ye = "DStL";
const Le = "uT8Y";
const Me = "SHAP";
const V = { wrapper: Ee, track: ye, fill: Le, thumb: Me };
function ke({ value, onChange, onDragStart, onDragEnd }) {
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

  const E = q(
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

  const y = 7;
  const n = 80;
  const l = y;
  const f = n - y;
  const L = l + value * (f - l);
  const B = `${L}px`;
  return u("div", {
    className: V.wrapper,
    onMouseDown: E,
    onClick: (p) => {
      p.stopPropagation();
      p.preventDefault();
    },
    children: u("div", {
      ref: i,
      className: V.track,
      children: [
        u("div", { className: V.fill, style: { height: B } }),
        u("div", { className: V.thumb, style: { bottom: `${L}px` } }),
      ],
    }),
  });
}
const Ce = 250;
function Be({ videoRef, vs, attachmentId, source }) {
  const i = A(0);
  const u = A(null);
  const E = A(0);
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

    const B = () => {
      if (s_current.duration > 0 && Number.isFinite(s_current.duration)) {
        E.current = Math.round(s_current.duration * 1000 /* 1e3 */);
      }
    };

    if (!s_current.paused && s_current.readyState >= 3) {
      u.current = Date.now();
    }

    s_current.addEventListener("playing", l);
    s_current.addEventListener("pause", f);
    s_current.addEventListener("waiting", f);
    s_current.addEventListener("timeupdate", L);
    s_current.addEventListener("loadedmetadata", B);

    if (s_current.duration > 0 && Number.isFinite(s_current.duration)) {
      E.current = Math.round(s_current.duration * 1000 /* 1e3 */);
    }

    return () => {
      s_current.removeEventListener("playing", l);
      s_current.removeEventListener("pause", f);
      s_current.removeEventListener("waiting", f);
      s_current.removeEventListener("timeupdate", L);
      s_current.removeEventListener("loadedmetadata", B);
    };
  }, [videoRef, vs, attachmentId]);
  const y = q(() => {
    if (!(!vs || !attachmentId)) {
      if (u.current !== null) {
        i.current += Date.now() - u.current;
        u.current = null;
      }

      if (i.current >= Ce && E.current > 0) {
        const n = source === "post_page" || source === "link";
        ai.trackVideoProgress(
          vs,
          attachmentId,
          i.current,
          E.current,
          n ? source : undefined
        );
      }

      i.current = 0;
    }
  }, [vs, attachmentId, source]);

  h(() => () => y(), [y]);

  return { emit: y };
}
const Ne = "aQjU";
const Se = "aANT";
const De = "pqdu";
const Re = "eoRR";
const Ve = "UjXV";
const Fe = "LS4n";
const Te = "Tvmj";
const $e = "gxxp";
const xe = "PLCi";
const Ie = "DdwF";
const qe = "I3f8";
const Ae = "mdgo";
const Ge = "o2Lo";
const Oe = "JuGB";
const Ue = "cwYw";
const Ye = "xvQd";
const _e = "uO9E";
const je = "rJBW";
const He = "rIpP";

const a = {
  container: Ne,
  hidden: Se,
  video: De,
  revealing: Re,
  canvas: Ve,
  duration: Fe,
  bottomOverlay: Te,
  volumeControl: $e,
  active: xe,
  volumeSlider: Ie,
  muteButton: qe,
  muteButtonMobile: Ae,
  controlButton: Ge,
  playButton: Oe,
  fullscreenButton: Ue,
  progressContainer: Ye,
  progressTrack: _e,
  progressFill: je,
  scrubbing: He,
};

const Z = parseFloat(localStorage.getItem("video-volume") ?? "1");
let S = true;
let H = isNaN(Z) ? 1 : Z;
const X = new Set();
const C = new Map();
let ee = false;
let Y = null;
function F() {
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
function te() {
  if (Y == null) {
    Y = requestAnimationFrame(() => {
      Y = null;
      F();
    });
  }
}
function _() {
  const s = C.size > 1;

  if (s !== ee) {
    s
      ? window.addEventListener("scroll", te, { passive: true })
      : window.removeEventListener("scroll", te);

    ee = s;
  }
}
function j(s) {
  S = s;
  localStorage.setItem("video-muted", String(s));

  X.forEach((c) => c(s));
}
function Xe(s) {
  H = s;
  localStorage.setItem("video-volume", String(s));
}
function ze(s) {
  const c = Math.floor(s / 60);
  const v = s % 60;
  return `${c}:${v.toString().padStart(2, "0")}`;
}
function Je() {
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
function Qe() {
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
function We() {
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
  const B = A(null);
  const p = A(null);
  const [h, M] = d(!spoiler);
  const [k, ne] = d(false);
  const [re, oe] = d(false);
  const [N, se] = d(S);
  const [T, ie] = d(H);
  const [ce, z] = d(false);
  const [ae, $] = d(0);
  const [le, J] = d(false);
  const [Q, x] = d(false);
  const R = A(false);
  const I = A(false);
  const ue = aj();
  const { emit } = Be({
    videoRef: l,
    vs: postVs,
    attachmentId: attachmentId,
    source: source,
  });

  const { resetOpacity } = ak(L, f, {
    isVisible: re && !h && spoiler,
    isRevealing: k,
    onRevealComplete: () => M(true),
  });

  h(() => {
    const e = (r) => {
      se(r);

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
          oe(d.isIntersecting);
          const l_current = l.current;

          if (l_current) {
            if (d.isIntersecting) {
              l_current.currentTime = 0;
              l_current.muted = S;
              l_current.volume = H;
              C.set(f_current, { video: l_current, userPaused: false });
              _();
              F();
            } else {
              C.delete(f_current);
              _();
              F();
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
      F();
      emit();
    };
  }, [h, emit]);

  h(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }

    const r = () => {
      if (R.current) {
        return;
      }
      const l_current_duration = l_current.duration;

      if (Number.isFinite(l_current_duration) && l_current_duration > 0) {
        $((l_current.currentTime / l_current_duration) * 100);
      }
    };

    const o = () => $(0);

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

    const r = () => x(true);

    const o = () => x(false);

    l_current.addEventListener("play", r);
    l_current.addEventListener("pause", o);
    x(!l_current.paused);

    return () => {
      l_current.removeEventListener("play", r);
      l_current.removeEventListener("pause", o);
    };
  }, []);

  const A = emit((e) => {
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
      $(g * 100);
    }
  }, []);

  const ve = emit(
    (e) => {
      e.stopPropagation();
      R.current = true;
      J(true);
      const e_currentTarget = e.currentTarget;
      try {
        e_currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      A(e.clientX);

      const o = (g) => A(g.clientX);

      const d = () => {
        try {
          e_currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        document.removeEventListener("pointermove", o);
        document.removeEventListener("pointerup", d);
        document.removeEventListener("pointercancel", d);
        window.removeEventListener("blur", d);
        J(false);

        setTimeout(() => {
          R.current = false;
        }, 0);
      };

      document.addEventListener("pointermove", o);
      document.addEventListener("pointerup", d);
      document.addEventListener("pointercancel", d);
      window.addEventListener("blur", d);
    },
    [A]
  );

  const me = (e) => {
    e.stopPropagation();

    if (!(I.current || R.current)) {
      if (!h && !k && spoiler) {
        ne(true);
        resetOpacity();
        return;
      }
      G();
    }
  };

  const pe = (e) => {
    e.stopPropagation();
    O();
  };

  const W = emit((e) => {
    e.stopPropagation();
    e.preventDefault();
    j(!S);
  }, []);

  const G = emit(() => {
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

  const fe = emit(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      G();
    },
    [G]
  );

  const ge = emit(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      O();
    },
    [O]
  );

  const he = emit((e) => {
    ie(e);
    Xe(e);

    if (l.current) {
      l.current.volume = e;
    }

    if (e > 0 && S) {
      j(false);
    } else if (e === 0 && !S) {
      j(true);
    }
  }, []);

  const U = !h && spoiler;
  return className("div", {
    ref: f,
    className: `${a.container} ${className} ${U ? a.hidden : ""} ${
      k ? a.revealing : ""
    }`,
    onClick: me,
    onDblClick: pe,
    children: [
      className("video", {
        ref: l,
        src: src,
        preload: "metadata",
        playsInline: true,
        muted: N,
        loop: true,
        className: a.video,
        width: width,
        height: height,
      }),
      duration != null &&
        U &&
        className("div", { className: a.duration, children: ze(duration) }),
      (h || !spoiler) &&
        className("div", {
          className: a.bottomOverlay,
          children: [
            className("button", {
              className: `${a.controlButton} ${a.playButton}`,
              onClick: fe,
              type: "button",
              "aria-label": Q ? "Pause" : "Play",
              children: Q ? className(Qe, {}) : className(Je, {}),
            }),
            className("button", {
              className: `${a.controlButton} ${a.fullscreenButton}`,
              onClick: ge,
              type: "button",
              "aria-label": "Fullscreen",
              children: className(We, {}),
            }),
            ue
              ? className("button", {
                  className: a.muteButtonMobile,
                  onClick: W,
                  type: "button",
                  "aria-label": N ? "Unmute" : "Mute",
                  children: className(V_1, { muted: N, volume: T }),
                })
              : className("div", {
                  className: `${a.volumeControl} ${ce ? a.active : ""}`,
                  children: [
                    className("div", {
                      className: a.volumeSlider,
                      children: className(ke, {
                        value: N ? 0 : T,
                        onChange: he,
                        onDragStart: () => {
                          I.current = true;
                          z(true);
                        },
                        onDragEnd: () => {
                          z(false);

                          setTimeout(() => {
                            I.current = false;
                          }, 0);
                        },
                      }),
                    }),
                    className("button", {
                      className: a.muteButton,
                      onClick: W,
                      type: "button",
                      "aria-label": N ? "Unmute" : "Mute",
                      children: className(V_1, { muted: N, volume: T }),
                    }),
                  ],
                }),
            className("div", {
              ref: B,
              className: a.progressContainer,
              onPointerDown: ve,
              onClick: (e) => e.stopPropagation(),
              children: className("div", {
                ref: p,
                className: a.progressTrack,
                children: className("div", {
                  className: `${a.progressFill} ${le ? a.scrubbing : ""}`,
                  style: { width: `${ae}%` },
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
