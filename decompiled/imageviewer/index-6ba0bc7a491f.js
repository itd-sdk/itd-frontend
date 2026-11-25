import {
  q,
  d,
  h,
  A,
  a6,
  u,
  S,
  bG,
  b6,
  bp,
  b5,
  aB,
  b8,
} from "./index-4cbec7521f6a.js";
import { d as d_1 } from "./IconDownload-d2a2b88e486d.js";
import { d as d_2 } from "./IconChevronLeft-e0277eea8342.js";
import { d as d_3 } from "./IconChevronRight-5c311b786bfd.js";
const fe = 100;
function he(e, i) {
  const o = q(() => {
    const s = i ? window.innerWidth : window.innerWidth - fe * 2;
    const window_innerHeight = window.innerHeight;
    return e.map((d) => {
      if (!d.width || !d.height) {
        return { width: s, height: window_innerHeight };
      }
      const S = Math.min(s / d.width, window_innerHeight / d.height);
      return { width: d.width * S, height: d.height * S };
    });
  }, [e, i]);

  const [u, g] = d(o);

  h(() => {
    g(o());
    const s = () => g(o());
    window.addEventListener("resize", s);

    return () => window.removeEventListener("resize", s);
  }, [o]);

  return u;
}
function pe({ onClose, onPrev, onNext }) {
  h(() => {
    const u = (g) => {
      switch (g.key) {
        case "Escape": {
          g.preventDefault();
          g.stopPropagation();
          onClose();
          break;
        }
        case "ArrowLeft": {
          g.preventDefault();
          g.stopPropagation();
          onPrev();
          break;
        }
        case "ArrowRight": {
          g.preventDefault();
          g.stopPropagation();
          onNext();
          break;
        }
      }
    };
    window.addEventListener("keydown", u, true);

    return () => window.removeEventListener("keydown", u, true);
  }, [onClose, onPrev, onNext]);
}
function me({ initialIndex, total }) {
  const [o, u] = d(initialIndex);
  const [g, s] = d(false);
  const p = A(null);

  const d = q(() => {
    if (p.current) {
      clearTimeout(p.current);
      p.current = null;
      s(false);
    }
  }, []);

  const S = q(
    (m) => {
      if (m !== o && m >= 0 && m < total) {
        d();
        s(true);
        u(m);

        p.current = window.setTimeout(() => {
          p.current = null;
          s(false);
        }, 500);
      }
    },
    [o, total, d]
  );

  const z = q(() => {
    if (o > 0) {
      S(o - 1);
    }
  }, [o, S]);

  const O = q(() => {
    if (o < total - 1) {
      S(o + 1);
    }
  }, [o, total, S]);

  return {
    currentIndex: o,
    setCurrentIndex: u,
    isAnimating: g,
    setIsAnimating: s,
    cancelAnimation: d,
    goToIndex: S,
    goToPrev: z,
    goToNext: O,
  };
}
const $t = 150;
const ge = 0.3;
function zt(e, i) {
  const o = e.clientX - i.clientX;
  const u = e.clientY - i.clientY;
  return Math.sqrt(o * o + u * u);
}
function we({
  currentIndex,
  imagesCount,
  imageSizes,
  isMobile,
  isAnimating,
  setIsAnimating,
  cancelAnimation,
  onIndexChange,
  onClose,
  trackRef,
  onDragStart,
}) {
  const [m, y] = onIndexChange(0);
  const [P, v] = onIndexChange(0);
  const [T, $] = onIndexChange(false);
  const [F, _] = onIndexChange(1);
  const [pt, X] = onIndexChange(null);
  const [N, k] = onIndexChange(null);
  const [nt, h] = onIndexChange(1);
  const [St, vt] = onIndexChange(0);
  const [rt, xt] = onIndexChange(0);
  const [Tt, tt] = onIndexChange(false);
  const V = A(1);
  const ot = A({ x: 0, y: 0 });
  const ct = A(false);
  const at = A(false);
  const gt = A(0);
  const K = A(0);
  const st = A(0);
  const C = A(1);
  const H = A({ x: 0, y: 0 });
  const q = A({ x: 0, y: 0 });
  const J = A({ x: 0, y: 0 });
  const ut = A(0);
  const Q = A(0);
  const M = A(null);
  const B = A(false);
  const R = A(null);
  const W = A(null);
  const wt = A(false);

  const bt = q((a) => {
    V.current = a;
    h(a);
  }, []);

  const lt = q((a, c) => {
    ot.current = { x: a, y: c };
    vt(a);
    xt(c);
  }, []);

  const mt = q(() => {
    tt(true);
    bt(1);
    lt(0, 0);

    setTimeout(() => tt(false), 300);
  }, [bt, lt]);

  const it = q(
    (a, c, f) => {
      const o_e = imageSizes[e];
      if (!o_e) {
        return { x: 0, y: 0 };
      }
      const Y = Math.max(0, (o_e.width * f - window.innerWidth) / 2);
      const E = Math.max(0, (o_e.height * f - window.innerHeight) / 2);
      return {
        x: Math.max(-Y, Math.min(Y, a)),
        y: Math.max(-E, Math.min(E, c)),
      };
    },
    [imageSizes, currentIndex]
  );

  h(() => {
    V.current = 1;
    ot.current = { x: 0, y: 0 };
    h(1);
    vt(0);
    xt(0);
    tt(false);
  }, [currentIndex]);

  h(
    () => () => {
      if (R.current) {
        clearTimeout(R.current);
        R.current = null;
      }
    },
    []
  );

  const dt = q(
    (a) => {
      let c = a;

      if (
        (currentIndex === 0 && c > 0) ||
        (currentIndex === imagesCount - 1 && c < 0)
      ) {
        c *= ge;
      }

      return c;
    },
    [currentIndex, imagesCount]
  );

  const ft = q(
    () =>
      Math.abs(P) > $t
        ? (onClose(isMobile), true)
        : (setIsAnimating(true),
          v(0),
          y(0),
          _(1),
          (R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
          }, 300)),
          false),
    [P, isMobile, onClose, setIsAnimating]
  );

  const ht = q(
    (a) => {
      if (isMobile || a.button !== 0) {
        return;
      }
      const c = W.current ?? currentIndex;
      let f = 0;
      const w = trackRef?.current;
      if (w) {
        const Y = getComputedStyle(w).transform;
        if (Y && Y !== "none") {
          const E = new DOMMatrixReadOnly(Y).m41;
          let G = 0;
          for (let et = 0; et < c; et++) {
            G += imageSizes[et]?.width || 0;
          }
          f = E + G;

          if (Math.abs(f) < 1) {
            f = 0;
          }
        }
      }
      cancelAnimation();

      if (R.current) {
        clearTimeout(R.current);
        R.current = null;
      }

      if (W.current !== null) {
        onIndexChange(W.current);
        W.current = null;
      }

      setIsAnimating(false);
      X(null);
      k(null);
      ut.current = f;
      Q.current = 0;
      y(f);
      $(true);
      B.current = false;
      J.current = { x: a.clientX, y: a.clientY };
      M.current = null;
      a.preventDefault();
    },
    [
      isMobile,
      currentIndex,
      imageSizes,
      trackRef,
      cancelAnimation,
      onIndexChange,
      setIsAnimating,
    ]
  );

  const Pt = q(
    (a) => {
      if (!T || isMobile) {
        return;
      }
      const c = a.clientX - J.current.x;
      const f = a.clientY - J.current.y;

      if (!M.current && (Math.abs(c) > 10 || Math.abs(f) > 10)) {
        M.current = Math.abs(c) > Math.abs(f) ? "x" : "y";
        B.current = true;
        onDragStart?.();
      }

      if (M.current === "x") {
        Q.current = c;
        y(dt(ut.current + c));
      } else if (M.current === "y") {
        v(f);
        const w = Math.min(Math.abs(f) / $t, 1);
        _(1 - w * 0.5);
      }
    },
    [T, isMobile, dt, onDragStart]
  );

  const Mt = q(() => {
    if (!(!T || isMobile)) {
      $(false);

      if (M.current === "x") {
        const c = W.current ?? currentIndex;
        const Q_current = Q.current;
        let w = c;

        if (Q_current < -80 && c < imagesCount - 1) {
          w = c + 1;
        } else if (Q_current > 80 && c > 0) {
          w = c - 1;
        }

        if (w !== c) {
          const Y = imageSizes[w]?.width || 0;
          const E = imageSizes[c]?.width || 0;
          const G = w > c ? -E : Y;
          setIsAnimating(true);
          X(w);
          y(G);
          W.current = w;

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
            X(null);
            y(0);
            W.current = null;
            onIndexChange(w);
          }, 500);
        } else {
          setIsAnimating(true);
          y(0);

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
          }, 300);
        }
      } else {
        if (M.current === "y") {
          ft();
        } else if (m !== 0) {
          setIsAnimating(true);
          y(0);

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
          }, 300);
        }
      }

      M.current = null;
    }
  }, [
    T,
    isMobile,
    currentIndex,
    m,
    imagesCount,
    imageSizes,
    ft,
    onIndexChange,
    setIsAnimating,
  ]);

  const Rt = q(
    (a) => {
      if (!isMobile) {
        return;
      }
      K.current = Math.max(K.current, a.touches.length);

      if (a.touches.length === 2) {
        ct.current = true;
        at.current = true;
        st.current = zt(a.touches[0], a.touches[1]);
        C.current = V.current;
        $(false);
        M.current = null;
        y(0);
        v(0);
        _(1);
        tt(false);
        return;
      }

      if (V.current > 1) {
        K.current = 1;
        H.current = { x: a.touches[0].clientX, y: a.touches[0].clientY };
        q.current = { ...ot.current };
        $(true);
        B.current = false;
        M.current = null;
        tt(false);
        const a_target_1 = a.target;
        wt.current =
          a_target_1.tagName === "IMG" &&
          a_target_1.hasAttribute("data-viewer-image");
        return;
      }
      K.current = 1;
      at.current = false;
      cancelAnimation();

      if (R.current) {
        clearTimeout(R.current);
        R.current = null;
      }

      setIsAnimating(false);
      y(0);
      B.current = false;
      const a_target = a.target;
      wt.current =
        a_target.tagName === "IMG" &&
        a_target.hasAttribute("data-viewer-image");
      J.current = { x: a.touches[0].clientX, y: a.touches[0].clientY };
      M.current = null;
      $(true);
    },
    [isMobile, cancelAnimation, setIsAnimating]
  );

  const t = q(
    (a) => {
      if (!isMobile) {
        return;
      }
      K.current = Math.max(K.current, a.touches.length);

      if (ct.current && a.touches.length >= 2) {
        const w = zt(a.touches[0], a.touches[1]);
        const Y = C.current * (w / st.current);
        const E = Math.min(Math.max(Y, 0.5), 5);
        const G = it(ot.current.x, ot.current.y, E);
        bt(E);
        lt(G.x, G.y);
        return;
      }

      if (V.current > 1 && T && !ct.current) {
        const w = a.touches[0].clientX - H.current.x;
        const Y = a.touches[0].clientY - H.current.y;

        if (Math.abs(w) > 5 || Math.abs(Y) > 5) {
          B.current = true;
        }

        const E = it(q.current.x + w, q.current.y + Y, V.current);
        lt(E.x, E.y);
        return;
      }
      if (!T) {
        return;
      }
      const c = a.touches[0].clientX - J.current.x;
      const f = a.touches[0].clientY - J.current.y;

      if (!M.current && (Math.abs(c) > 10 || Math.abs(f) > 10)) {
        M.current = Math.abs(c) > Math.abs(f) ? "x" : "y";
        B.current = true;
        onDragStart?.();
      }

      if (M.current === "x") {
        y(dt(c));
      } else if (M.current === "y") {
        v(f);
        const w = Math.min(Math.abs(f) / $t, 1);
        _(Math.round((1 - w * 0.7) * 100) / 100);
      }
    },
    [isMobile, T, bt, lt, it, dt, onDragStart]
  );

  const r = q(() => {
    if (isMobile) {
      if (ct.current) {
        ct.current = false;
        gt.current = Date.now();

        if (V.current < 1.1) {
          mt();
        }

        return;
      }
      if (V.current > 1) {
        $(false);
        return;
      }
      if (K.current > 1 || at.current) {
        $(false);
        v(0);
        _(1);
        M.current = null;
        return;
      }
      if (Date.now() - gt.current < 300) {
        $(false);
        v(0);
        _(1);
        M.current = null;
        return;
      }
      if (T) {
        $(false);

        if (!wt.current) {
          if (!M.current) {
            B.current = true;
            onClose(true);
            return;
          }
          if (M.current === "y" && P > 30) {
            B.current = true;
            onClose(true);
            return;
          }
        }

        if (M.current === "x") {
          let c = currentIndex;

          if (m < -50 && currentIndex < imagesCount - 1) {
            c = currentIndex + 1;
          } else if (m > 50 && currentIndex > 0) {
            c = currentIndex - 1;
          }

          setIsAnimating(true);
          y(0);

          if (c !== currentIndex) {
            onIndexChange(c);
          }

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
          }, 500);
        } else {
          if (M.current === "y") {
            ft();
          }
        }
        M.current = null;
      }
    }
  }, [
    isMobile,
    T,
    currentIndex,
    m,
    P,
    imagesCount,
    ft,
    onIndexChange,
    onClose,
    setIsAnimating,
    mt,
  ]);

  const n = q(() => {
    if (isMobile) {
      ct.current = false;
      at.current = false;
      K.current = 0;
      M.current = null;
      $(false);
      y(0);
      v(0);
      _(1);
      setIsAnimating(false);
      V.current < 1.1 && mt();
    }
  }, [isMobile, mt, setIsAnimating]);

  const D = q(() => {
    const W_current = W.current;
    const c = W_current ?? currentIndex;
    const f = trackRef?.current;
    if (f) {
      const w = getComputedStyle(f).transform;
      if (w && w !== "none") {
        const E = new DOMMatrixReadOnly(w).m41;
        let G = 0;
        for (let et = 0; et < c; et++) {
          G += imageSizes[et]?.width || 0;
        }
        y(E + G);
      }
      const f_parentElement = f.parentElement;
      if (f_parentElement) {
        const E = f_parentElement.getBoundingClientRect();
        k({ width: E.width, height: E.height });
      }
    }

    if (R.current) {
      clearTimeout(R.current);
      R.current = null;
    }

    if (W_current !== null) {
      onIndexChange(W_current);
      W.current = null;
    }

    setIsAnimating(false);
    X(null);
    return c;
  }, [currentIndex, imageSizes, trackRef, onIndexChange, setIsAnimating]);

  const A = q(() => {
    k(null);

    if (m !== 0 || P !== 0 || F !== 1) {
      setIsAnimating(true);
      y(0);
      v(0);
      _(1);
      R.current && clearTimeout(R.current);

      R.current = window.setTimeout(() => {
        R.current = null;
        setIsAnimating(false);
      }, 300);
    }
  }, [m, P, F, setIsAnimating]);

  const j = a6(() => {
    if (N) {
      return N;
    }
    const a = W.current ?? currentIndex;
    const c = imageSizes[a] || { width: 600, height: 400 };
    if (isAnimating && pt !== null) {
      const f = imageSizes[pt] || c;
      return { width: f.width, height: f.height };
    }
    if (T && M.current !== "y" && m !== 0) {
      const f = m < 0 ? Math.min(a + 1, imagesCount - 1) : Math.max(a - 1, 0);
      if (f === a) {
        return c;
      }
      const w = imageSizes[f] || c;
      const Y = c.width / 2 + w.width / 2;
      const E = Math.min(Math.abs(m) / Y, 1);
      return {
        width: c.width + (w.width - c.width) * E,
        height: c.height + (w.height - c.height) * E,
      };
    }
    return c;
  }, [N, imageSizes, currentIndex, isAnimating, pt, T, m, imagesCount]);

  const Z = q(() => {
    setIsAnimating(true);
    v(window.innerHeight);
    _(0);
  }, [setIsAnimating]);

  return {
    offsetX: m,
    offsetY: P,
    isDragging: T,
    opacity: F,
    wasDragging: B,
    displaySize: j,
    animateClose: Z,
    freezeInFlight: D,
    unfreeze: A,
    zoom: { scale: nt, panX: St, panY: rt, isAnimating: Tt },
    desktopHandlers: {
      onMouseDown: ht,
      onMouseMove: Pt,
      onMouseUp: Mt,
      onMouseLeave: Mt,
    },
    mobileHandlers: {
      onTouchStart: Rt,
      onTouchMove: t,
      onTouchEnd: r,
      onTouchCancel: n,
    },
  };
}
const be = "VsY6";
const ye = "yHaJ";
const ve = "RecR";
const xe = "fKBh";
const Te = "TK59";
const Me = "gTzc";
const Re = "UE9e";
const ke = "T6kD";
const Se = "I3UD";
const Pe = "zhcG";
const $e = "C1ME";
const De = "PJt3";
const Xe = "eQCL";
const Ce = "XsCH";
const Le = "BXJe";
const Ee = "kbv2";
const Ie = "DvQR";
const Ne = "h7f9";
const Ye = "xOtT";
const Oe = "fv0f";
const ze = "PjxX";
const Fe = "ILcY";
const He = "pdeI";
const Be = "Myl6";
const Ae = "ynmZ";

const L = {
  viewer: be,
  transitioning: ye,
  windowContainer: ve,
  mobileContainer: xe,
  mobileSlide: Te,
  closing: Me,
  slide: Re,
  navArea: ke,
  dots: Se,
  backdrop: Pe,
  fadeClosing: $e,
  toolbar: De,
  counter: Xe,
  windowZoomed: Ce,
  track: Le,
  mobileTrack: Ee,
  navLeft: Ie,
  navRight: Ne,
  dot: Ye,
  active: Oe,
  filmstrip: ze,
  filmstripLeaving: Fe,
  filmshot: He,
  filmshotActive: Be,
  filmshotImage: Ae,
};

function Ue({ currentIndex, total, onPrev, onNext }) {
  return total <= 1
    ? null
    : onNext(S, {
        children: [
          onNext("button", {
            type: "button",
            "aria-label": "Предыдущее изображение",
            className: `${L.navArea} ${L.navLeft}`,
            onClick: onPrev,
            disabled: currentIndex === 0,
            children: onNext(d_2, { size: 24 }),
          }),
          onNext("button", {
            type: "button",
            "aria-label": "Следующее изображение",
            className: `${L.navArea} ${L.navRight}`,
            onClick: onNext,
            disabled: currentIndex === total - 1,
            children: onNext(d_3, { size: 24 }),
          }),
        ],
      });
}
function _e({ total, currentIndex, onDotClick }) {
  return total <= 1
    ? null
    : u("div", {
        className: L.dots,
        children: Array.from({ length: total }, (u, g) =>
          u(
            "button",
            {
              className: `${L.dot} ${g === currentIndex ? L.active : ""}`,
              onClick: () => onDotClick(g),
            },
            g
          )
        ),
      });
}
function We({ images, currentIndex, isClosing, onPick }) {
  return images.length <= 1
    ? null
    : onPick("div", {
        className: `${L.filmstrip} ${isClosing ? L.filmstripLeaving : ""}`,
        children: images.map((g, s) =>
          onPick(
            "button",
            {
              type: "button",
              className: `${L.filmshot} ${
                s === currentIndex ? L.filmshotActive : ""
              }`,
              onClick: (p) => {
                p.stopPropagation();
                onPick(s);
              },
              "aria-label": `Фотография ${s + 1}`,
              "aria-pressed": s === currentIndex,
              children: onPick("img", {
                src: g.thumbUrl || g.url,
                alt: "",
                className: L.filmshotImage,
              }),
            },
            g.id
          )
        ),
      });
}
function At({ img, isActive, style, dataViewerImage, onFullReady }) {
  const { url, thumbUrl, loadSrc, loadThumb } = img;
  const [z, O] = loadSrc(null);
  const [m, y] = loadSrc(null);
  h(() => {
    if (!loadThumb || thumbUrl || m || z) {
      return;
    }
    let X = false;

    loadThumb().then((N) => {
      if (!X && N) {
        y(N);
      }
    });

    return () => {
      X = true;
    };
  }, [loadThumb, thumbUrl, m, z]);

  const [P, v] = loadSrc(() => {
    if (loadSrc) {
      return false;
    }
    if (!thumbUrl) {
      return true;
    }
    if (!isActive) {
      return false;
    }
    const X = new Image();
    X.src = url;
    return X.complete;
  });

  const [T, $] = loadSrc(false);
  const F = A(null);

  h(() => {
    const X = new AbortController();
    F.current = X;

    return () => X.abort();
  }, []);

  h(() => {
    if (!loadSrc || !isActive || z || T) {
      return;
    }
    let X = false;

    loadSrc(F.current?.signal).then((N) => {
      if (X) {
        return;
      }
      if (!N) {
        $(true);
        return;
      }
      const k = new Image();
      k.src = N;
      const nt = () => {
        if (!X) {
          O(N);
          v(true);
        }
      };
      if (k.complete) {
        nt();
        return;
      }
      k.onload = () => {
        (k.decode ? k.decode() : Promise.resolve()).catch(() => {}).then(nt);
      };
    });

    return () => {
      X = true;
    };
  }, [loadSrc, isActive, z, T]);

  h(() => {
    if (loadSrc && !T) {
      return;
    }
    if (!thumbUrl) {
      v(true);
      return;
    }
    if (P || !isActive) {
      return;
    }
    const X = new Image();
    X.src = url;

    if (X.complete) {
      v(true);
      return;
    }

    let N = false;
    const k = () => {
      if (!N) {
        v(true);
      }
    };

    X.onload = () => {
      (X.decode ? X.decode() : Promise.resolve()).catch(() => {}).then(k);
    };

    return () => {
      N = true;
      X.onload = null;
    };
  }, [url, thumbUrl, isActive, P, loadSrc, T]);

  h(() => {
    if (isActive && P) {
      onFullReady?.();
    }
  }, [isActive, P]);

  const _ = a6(() => bG(img.thumbhash), [img.thumbhash]);
  return dataViewerImage("img", {
    src:
      loadSrc && !T
        ? z ?? thumbUrl ?? m ?? undefined
        : P || !thumbUrl
        ? url
        : thumbUrl,
    alt: "",
    draggable: false,
    decoding: isActive ? "sync" : "async",
    loading: isActive ? "eager" : "lazy",
    ...(dataViewerImage ? { "data-viewer-image": true } : {}),
    style: {
      ...(style ?? {}),
      ...(!P && _
        ? { backgroundImage: `url(${_})`, backgroundSize: "100% 100%" }
        : {}),
    },
  });
}
const Ze = 2;
function Ge({
  images,
  imageSizes,
  currentIndex,
  offsetX,
  offsetY,
  isAnimating,
  displaySize,
  trackRef,
  handlers,
  onImageClick,
  onActiveFullReady,
  zoom = null,
}) {
  const y = a6(() => {
    let P = 0;
    for (let v = 0; v < currentIndex; v++) {
      P += imageSizes[v]?.width || 0;
    }
    return P;
  }, [currentIndex, imageSizes]);
  return offsetX("div", {
    className: `${L.windowContainer} ${zoom ? L.windowZoomed : ""}`,
    style: {
      width: `${displaySize.width}px`,
      height: `${displaySize.height}px`,
      transform: `translateY(${offsetY}px)`,
      transition: isAnimating
        ? "width 0.5s cubic-bezier(0.32, 0.72, 0, 1), height 0.5s cubic-bezier(0.32, 0.72, 0, 1), transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
        : "none",
    },
    onMouseDown: handlers.onMouseDown,
    onMouseMove: handlers.onMouseMove,
    onMouseUp: handlers.onMouseUp,
    onMouseLeave: handlers.onMouseLeave,
    children: offsetX("div", {
      ref: trackRef,
      className: L.track,
      style: {
        transform: `translateX(${-y + offsetX}px)`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((P, v) => {
        const T = Math.abs(v - currentIndex) <= Ze;
        const i_v = imageSizes[v];
        const F = v === currentIndex;
        return offsetX(
          "div",
          {
            className: L.slide,
            onClick: onImageClick,
            style: {
              ...(i_v
                ? { width: `${i_v.width}px`, height: `${i_v.height}px` }
                : {}),
              transition: zoom?.isPanning
                ? "none"
                : "transform 220ms cubic-bezier(0.32, 0.72, 0, 1)",
              ...(F && zoom
                ? {
                    transform: `translate(${zoom.panX}px, ${zoom.panY}px) scale(${zoom.scale})`,
                    transformOrigin: `${zoom.originX}% ${zoom.originY}%`,
                  }
                : {}),
            },
            "data-active-slide": F ? "" : undefined,
            "data-slide-index": v,
            children:
              T &&
              offsetX(At, {
                img: P,
                isActive: F,
                onFullReady: F ? onActiveFullReady : undefined,
                style: {
                  width: i_v?.width || "auto",
                  height: i_v?.height || "auto",
                },
              }),
          },
          P.id
        );
      }),
    }),
  });
}
const Ve = 2;
function Ke({
  images,
  imageSizes,
  currentIndex,
  offsetX,
  offsetY,
  isAnimating,
  isClosing,
  handlers,
  onImageClick,
  onActiveFullReady,
  zoom,
}) {
  return offsetX("div", {
    className: L.mobileContainer,
    style: {
      transform: `translateY(${offsetY}px)`,
      transition: isAnimating
        ? `transform ${
            isClosing ? "0.15s" : "0.3s"
          } cubic-bezier(0.32, 0.72, 0, 1)`
        : "none",
    },
    onTouchStart: handlers.onTouchStart,
    onTouchMove: handlers.onTouchMove,
    onTouchEnd: handlers.onTouchEnd,
    onTouchCancel: handlers.onTouchCancel,
    children: offsetX("div", {
      className: L.mobileTrack,
      style: {
        transform: `translateX(calc(-${currentIndex * 100}% + ${offsetX}px))`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((m, y) => {
        const P = Math.abs(y - currentIndex) <= Ve;
        const v = y === currentIndex;
        const i_y = imageSizes[y];
        const $ = i_y
          ? { width: `${i_y.width}px`, height: `${i_y.height}px` }
          : {};

        if (v && zoom.scale !== 1) {
          $.transform = `translate(${zoom.panX}px, ${zoom.panY}px) scale(${zoom.scale})`;

          $.transition = zoom.isAnimating
            ? "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
            : "none";
        }

        return offsetX(
          "div",
          {
            className: L.mobileSlide,
            onClick: (F) => {
              F.stopPropagation();
              onImageClick();
            },
            "data-active-slide": v ? "" : undefined,
            "data-slide-index": y,
            children:
              P &&
              offsetX(At, {
                img: m,
                isActive: v,
                onFullReady: v ? onActiveFullReady : undefined,
                dataViewerImage: true,
                style: $,
              }),
          },
          m.id
        );
      }),
    }),
  });
}
const kt = 280;
const Ft = "cubic-bezier(0.32, 0.72, 0, 1)";
const qe = 220;

const Ht = {
  transform: "none",
  clipPath: "inset(0px round 0px)",
  borderRadius: "0px",
};

function Je(e, i) {
  return !e || e === "0px" || i <= 0 || !Number.isFinite(i)
    ? "0px"
    : e.replace(/([\d.]+)px/g, (o, u) => {
        const g = parseFloat(u) / i;
        return Number.isFinite(g) ? `${g}px` : "0px";
      });
}
const Bt = 2.5;

const Qe = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function ImageViewer({
  images,
  initialIndex,
  sourceRect = null,
  resolveSourceRect = null,
  zoomable = false,
  thumbs = false,
  onClose,
}) {
  const d = A(null);
  const S = A(false);
  const [z, O] = d(false);
  b6(() => {
    const document_activeElement = document.activeElement;

    d.current
      ?.querySelector("[data-viewer-close]")
      ?.focus({ preventScroll: true });

    return () => {
      if (
        document_activeElement instanceof HTMLElement &&
        document_activeElement.isConnected
      ) {
        document_activeElement.focus({ preventScroll: true });
      }
    };
  }, []);
  const m = A(null);
  const y = A(null);
  const P = A(null);
  const v = A(null);
  const T = A(Qe()).current;
  const [$, F] = d(false);
  const [_, pt] = d(false);
  const [X, N] = d(sourceRect !== null && !T);
  const k = bp();
  const nt = he(images, k);
  const h = me({ initialIndex: initialIndex, total: images.length });
  b5();

  const St = q(() => {
    const d_current = d.current;
    return d_current
      ? d_current.querySelector("[data-active-slide] img")
      : null;
  }, []);

  const vt = q((t) => {
    const d_current = d.current;
    return d_current
      ? d_current.querySelector(`[data-slide-index="${t}"] img`)
      : null;
  }, []);

  const rt = q(() => {
    const y_current = y.current;

    if (
      P.current === "open" &&
      y_current &&
      y_current.playState === "running"
    ) {
      y_current.finish();
    }

    N(false);
  }, []);

  const xt = q(() => {
    rt();
    h.goToPrev();
  }, [rt, h.goToPrev]);

  const Tt = q(() => {
    rt();
    h.goToNext();
  }, [rt, h.goToNext]);

  const tt = q((t, r) => {
    if (!r) {
      return null;
    }
    const n = r.getBoundingClientRect();
    if (n.width === 0 || n.height === 0) {
      return null;
    }
    const D = t.hiddenLeft ?? 0;
    const A = t.hiddenTop ?? 0;
    const j = t.hiddenRight ?? 0;
    const Z = t.hiddenBottom ?? 0;
    const a = t.width + D + j;
    const c = t.height + A + Z;
    const f = (D / a) * n.width;
    const w = (A / c) * n.height;
    const Y = (j / a) * n.width;
    const E = (Z / c) * n.height;
    const G = n.width - f - Y;
    const et = n.height - w - E;
    const yt = Math.max(t.width / G, t.height / et);
    const Ut = t.width / yt;
    const _t = t.height / yt;
    const Xt = Math.max(0, (G - Ut) / 2);
    const Ct = Math.max(0, (et - _t) / 2);
    const Lt = f + Xt;
    const Et = w + Ct;
    const It = Y + Xt;
    const Nt = E + Ct;
    const Wt = (Lt + (n.width - It)) / 2;
    const Zt = (Et + (n.height - Nt)) / 2;
    const Gt = n.left + n.width / 2;
    const Vt = n.top + n.height / 2;
    const Kt = Gt + (Wt - n.width / 2) * yt;
    const qt = Vt + (Zt - n.height / 2) * yt;
    const Jt = t.left + t.width / 2;
    const Qt = t.top + t.height / 2;
    const jt = Jt - Kt;
    const te = Qt - qt;
    const ee = `translate(${jt}px, ${te}px) scale(${yt})`;
    const Yt = Je(t.borderRadius, yt);
    const ne = `inset(${Et}px ${It}px ${Nt}px ${Lt}px round ${Yt})`;
    return { transform: ee, clipPath: ne, borderRadius: Yt };
  }, []);

  const V = q((t) => {
    const r = getComputedStyle(t);
    return {
      transform: r.transform === "none" ? "none" : r.transform,
      clipPath: r.clipPath === "none" ? "inset(0px round 0px)" : r.clipPath,
      borderRadius: `${r.borderTopLeftRadius} ${r.borderTopRightRadius} ${r.borderBottomRightRadius} ${r.borderBottomLeftRadius}`,
    };
  }, []);

  const ot = (t, r) => {
    t.style.transform = r.transform;
    t.style.clipPath = r.clipPath;
    t.style.borderRadius = r.borderRadius;
  };

  const ct = (t) => {
    t.style.removeProperty("transform");
    t.style.removeProperty("clip-path");
    t.style.removeProperty("border-radius");
  };

  const at = q((t, r) => {
    ot(t, r);
    const n = t.animate([r, { ...Ht }], {
      duration: kt,
      easing: Ft,
      fill: "forwards",
    });
    y.current = n;
    P.current = "open";
    v.current = t;

    n.addEventListener("finish", () => {
      ct(t);
      n.cancel();

      if (y.current === n) {
        y.current = null;
        P.current = null;
      }

      N(false);
    });

    n.addEventListener("cancel", () => N(false), { once: true });
  }, []);

  const gt = q(
    (t, r, n) => {
      ot(t, r);
      const D = t.animate(
        [
          r,
          {
            transform: n.transform,
            clipPath: n.clipPath,
            borderRadius: n.borderRadius,
          },
        ],
        { duration: kt, easing: Ft, fill: "forwards" }
      );
      y.current = D;
      P.current = "close";
      v.current = t;

      D.addEventListener("finish", () => onClose());
    },
    [onClose]
  );

  const K = q(
    (t) =>
      resolveSourceRect
        ? resolveSourceRect(t)
        : t === initialIndex
        ? sourceRect
        : null,
    [resolveSourceRect, initialIndex, sourceRect]
  );

  const st = q(
    (t = false) => {
      if (T) {
        onClose();
        return;
      }
      const y_current = y.current;
      const v_current = v.current;
      if (y_current && y_current.playState === "running" && v_current) {
        const j = P.current === "open";
        const Z = V(v_current);
        y_current.cancel();
        ct(v_current);
        y.current = null;
        P.current = null;

        if (j) {
          const a = C.freezeInFlight();
          const c = K(a);
          const f = c ? tt(c, v_current) : null;
          F(true);

          if (f) {
            gt(v_current, Z, f);
          } else {
            ot(v_current, Z);
            pt(true);
            setTimeout(onClose, kt);
          }
        } else {
          C.unfreeze();
          F(false);
          N(true);
          at(v_current, Z);
        }

        return;
      }
      if ($) {
        return;
      }
      const D = C.freezeInFlight();
      const A = K(D);
      if (t && k && !A) {
        C.animateClose();
        setTimeout(onClose, 150);
        return;
      }
      F(true);

      if (A) {
        const j = vt(D);
        const Z = tt(A, j);
        if (Z && j) {
          gt(j, { ...Ht }, Z);
          return;
        }
      }

      pt(true);
      setTimeout(onClose, kt);
    },
    [$, K, h.currentIndex, V, tt, at, gt, vt, k, onClose, T]
  );

  const C = we({
    currentIndex: h.currentIndex,
    imagesCount: images.length,
    imageSizes: nt,
    isMobile: k,
    isAnimating: h.isAnimating,
    setIsAnimating: h.setIsAnimating,
    cancelAnimation: h.cancelAnimation,
    onIndexChange: h.goToIndex,
    onClose: st,
    trackRef: m,
    onDragStart: rt,
  });

  const [H, q] = d(null);
  const J = A({ x: 0, y: 0, panX: 0, panY: 0 });
  const ut = A(false);
  const Q = A(false);
  const M = A(null);
  const B = A(null);

  const R = q(
    (t = false) => {
      if (B.current === null) {
        if (H && !k && !T) {
          ut.current = false;
          q(null);

          B.current = window.setTimeout(() => {
            B.current = null;
            st(t);
          }, qe);

          return;
        }
        st(t);
      }
    },
    [st, k, T, H]
  );

  h(
    () => () => {
      if (B.current !== null) {
        window.clearTimeout(B.current);
      }
    },
    []
  );
  const W = q(() => {
    if (!$) {
      R(true);
    }
  }, [$, R]);
  pe({ onClose: W, onPrev: xt, onNext: Tt });

  h(() => {
    const t = [
      images[h.currentIndex - 1],
      images[h.currentIndex + 1],
      images[h.currentIndex - 2],
      images[h.currentIndex + 2],
    ];
    for (const r of t) {
      if (!r || (r.loadSrc && !r.thumbUrl)) {
        continue;
      }
      const n = new Image();
      n.decoding = "async";
      n.src = r.thumbUrl || r.url;
    }
  }, [images, h.currentIndex]);

  const [wt, bt] = d(-1);

  const lt = q(() => {
    bt(h.currentIndex);
  }, [h.currentIndex]);

  const mt = A(null);

  h(() => {
    const t = new AbortController();
    mt.current = t;

    return () => t.abort();
  }, []);

  h(() => {
    if (wt === h.currentIndex) {
      for (const t of [
        images[h.currentIndex - 1],
        images[h.currentIndex + 1],
      ]) {
        if (!t) {
          continue;
        }
        if (t.loadSrc) {
          t.loadSrc(mt.current?.signal).then((n) => {
            if (!n) {
              return;
            }
            const D = new Image();
            D.decoding = "async";
            D.src = n;
          });
          continue;
        }
        if (!t.thumbUrl) {
          continue;
        }
        const r = new Image();
        r.decoding = "async";
        r.src = t.url;
      }
    }
  }, [wt, h.currentIndex, images]);

  b6(() => {
    if (!sourceRect || T) {
      N(false);
      return;
    }
    const t = St();
    if (!t) {
      N(false);
      return;
    }
    const r = tt(sourceRect, t);
    if (!r) {
      N(false);
      return;
    }

    at(t, {
      transform: r.transform,
      clipPath: r.clipPath,
      borderRadius: r.borderRadius,
    });

    return () => {
      y.current?.cancel();
    };
  }, []);

  h(() => {
    q(null);
  }, [h.currentIndex]);

  const it = q((t, r, n) => {
    const D = r === "x" ? n.width : n.height;
    const A = (r === "x" ? n.originX : n.originY) / 100;
    const j = D * A * (n.scale - 1);
    const Z = D * (1 - A) * (n.scale - 1);
    return Math.max(-Z, Math.min(j, t));
  }, []);

  const dt = q(
    (t, r, n) => {
      const D = it(t, r, n);
      const A = t - D;
      return A === 0 ? t : D + Math.sign(A) * Math.min(72, Math.abs(A) * 0.18);
    },
    [it]
  );

  const ft = q(
    (t) => {
      if (!ut.current || k) {
        return;
      }
      const r = t.clientX - J.current.x;
      const n = t.clientY - J.current.y;

      if (Math.abs(r) > 4 || Math.abs(n) > 4) {
        Q.current = true;
      }

      q(
        (D) =>
          D && {
            ...D,
            panX: dt(J.current.panX + r, "x", D),
            panY: dt(J.current.panY + n, "y", D),
          }
      );

      t.preventDefault();
    },
    [dt, k]
  );

  const ht = q(() => {
    if (ut.current) {
      ut.current = false;

      q(
        (t) =>
          t && {
            ...t,
            panX: it(t.panX, "x", t),
            panY: it(t.panY, "y", t),
            isPanning: false,
          }
      );

      Q.current &&
        (M.current !== null && window.clearTimeout(M.current),
        (M.current = window.setTimeout(() => {
          Q.current = false;
          M.current = null;
        }, 0)));
    }
  }, [it]);

  h(() => {
    window.addEventListener("mousemove", ft);
    window.addEventListener("mouseup", ht);
    window.addEventListener("blur", ht);

    return () => {
      window.removeEventListener("mousemove", ft);
      window.removeEventListener("mouseup", ht);
      window.removeEventListener("blur", ht);

      if (M.current !== null) {
        window.clearTimeout(M.current);
      }
    };
  }, [ht, ft]);

  const Pt = {
    onMouseDown: (t) => {
      if (!H || k) {
        C.desktopHandlers.onMouseDown(t);
        return;
      }

      if (t.button === 0) {
        ut.current = true;
        Q.current = false;

        J.current = {
          x: t.clientX,
          y: t.clientY,
          panX: H.panX,
          panY: H.panY,
        };

        q((r) => r && { ...r, isPanning: true });
        t.preventDefault();
      }
    },
    onMouseMove: (t) => {
      if (!H || k) {
        C.desktopHandlers.onMouseMove(t);
        return;
      }
    },
    onMouseUp: () => {
      if (!H || k) {
        C.desktopHandlers.onMouseUp();
        return;
      }
      ht();
    },
    onMouseLeave: () => {
      if (!H || k) {
        C.desktopHandlers.onMouseLeave();
        return;
      }
    },
  };

  const Mt = q(
    (t) => {
      if (Q.current) {
        Q.current = false;
        return;
      }
      if (C.wasDragging.current) {
        C.wasDragging.current = false;
        return;
      }

      if (
        t.target instanceof Element &&
        !t.target.closest('img,button,a,[role="button"]')
      ) {
        R(true);
      }
    },
    [R]
  );

  const Rt = q(
    (t) => {
      if (Q.current) {
        Q.current = false;
        return;
      }
      if (C.wasDragging.current) {
        C.wasDragging.current = false;
        return;
      }
      if (zoomable && !k) {
        if (H) {
          q(null);
          return;
        }
        const n = t?.currentTarget?.getBoundingClientRect();
        if (!n || !t) {
          q({
            scale: Bt,
            originX: 50,
            originY: 50,
            panX: 0,
            panY: 0,
            width: n?.width || C.displaySize.width,
            height: n?.height || C.displaySize.height,
            isPanning: false,
          });
          return;
        }
        q({
          scale: Bt,
          originX: ((t.clientX - n.left) / n.width) * 100,
          originY: ((t.clientY - n.top) / n.height) * 100,
          panX: 0,
          panY: 0,
          width: n.width,
          height: n.height,
          isPanning: false,
        });
        return;
      }
      st(k);
    },
    [st, k, zoomable, H, C.displaySize]
  );

  return aB(
    resolveSourceRect("div", {
      ref: d,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Просмотр изображений",
      onKeyDown: (t) => {
        if (t.key !== "Tab") {
          return;
        }

        const r = Array.from(
          d.current?.querySelectorAll(
            'button:not(:disabled),a[href],[tabindex="0"]'
          ) ?? []
        ).filter((D) => D.getClientRects().length > 0);

        const n = t.shiftKey ? r.at(-1) : r[0];

        if (
          (!t.shiftKey && document.activeElement === r.at(-1)) ||
          (t.shiftKey && document.activeElement === r[0])
        ) {
          t.preventDefault();
          n?.focus();
        }
      },
      className: `${L.viewer} ${$ ? L.closing : ""} ${_ ? L.fadeClosing : ""} ${
        X ? L.transitioning : ""
      } ym-hide-content`,
      style: {
        "--opacity": C.opacity,
        "--opacity-transition": h.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: Mt,
      children: [
        resolveSourceRect("div", {
          className: L.backdrop,
          "aria-hidden": true,
        }),
        resolveSourceRect("div", {
          className: L.toolbar,
          children: [
            resolveSourceRect("span", {
              className: L.counter,
              "aria-live": "polite",
              children: [h.currentIndex + 1, " из ", images.length],
            }),
            images[h.currentIndex]?.onDownload &&
              resolveSourceRect("button", {
                type: "button",
                "aria-label": "Скачать изображение",
                disabled: z,
                onClick: async (t) => {
                  t.stopPropagation();

                  if (S.current) {
                    return;
                  }

                  const r = images[h.currentIndex]?.onDownload;
                  if (r) {
                    S.current = true;
                    O(true);
                    try {
                      await r();
                    } finally {
                      S.current = false;
                      O(false);
                    }
                  }
                },
                children: resolveSourceRect(d_1, { size: 22 }),
              }),
            resolveSourceRect("button", {
              type: "button",
              "data-viewer-close": true,
              "aria-label": "Закрыть изображение",
              onClick: (t) => {
                t.stopPropagation();
                W();
              },
              children: resolveSourceRect(b8, { size: 24 }),
            }),
          ],
        }),
        !k &&
          resolveSourceRect(Ge, {
            images: images,
            imageSizes: nt,
            currentIndex: h.currentIndex,
            offsetX: C.offsetX,
            offsetY: C.offsetY,
            isAnimating: h.isAnimating,
            displaySize: C.displaySize,
            trackRef: m,
            handlers: Pt,
            onImageClick: Rt,
            onActiveFullReady: lt,
            zoom: H,
          }),
        k &&
          resolveSourceRect(Ke, {
            images: images,
            imageSizes: nt,
            currentIndex: h.currentIndex,
            offsetX: C.offsetX,
            offsetY: C.offsetY,
            isAnimating: h.isAnimating,
            isClosing: false,
            handlers: C.mobileHandlers,
            onImageClick: Rt,
            onActiveFullReady: lt,
            zoom: C.zoom,
          }),
        !k &&
          resolveSourceRect(Ue, {
            currentIndex: h.currentIndex,
            total: images.length,
            onPrev: xt,
            onNext: Tt,
          }),
        thumbs
          ? resolveSourceRect(We, {
              images: images,
              currentIndex: h.currentIndex,
              isClosing: $,
              onPick: (t) => {
                rt();
                h.goToIndex(t);
              },
            })
          : resolveSourceRect(_e, {
              total: images.length,
              currentIndex: h.currentIndex,
              onDotClick: (t) => {
                rt();
                h.goToIndex(t);
              },
            }),
      ],
    }),
    document.body
  );
}

export { ImageViewer as ImageViewer, ImageViewer as default };
