import {
  a,
  q as q_1,
  a as a_1,
  A as y_1,
  A,
  T as T_1,
  I,
  l,
  C,
  $,
} from "./index-DDCL-vHK.js";
import { I as I_1 } from "./IconChevronLeft-Dk6onnGB.js";
(() => {
  try {
    const t =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "1.1.0" };
    const e = new t.Error().stack;

    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "a82e119b-7a40-4081-bc7d-4023c59e4c97";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-a82e119b-7a40-4081-bc7d-4023c59e4c97";
    }
  } catch {}
})();
const Tt = ({ size = 24 }) =>
  a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: a("path", {
      d: "M9 18L15 12L9 6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
function Mt(t) {
  const e = q_1(() => {
    const a = window.innerWidth * 0.9;
    const i = window.innerHeight * 0.9;
    return t.map((n) => {
      const f = n.width / n.height;
      const s = Math.min(a, n.width);
      const g = Math.min(i, n.height);

      let { width, height } = n;

      if (width > s) {
        width = s;
        height = width / f;
      }

      if (height > g) {
        height = g;
        width = height * f;
      }

      return { width: width, height: height };
    });
  }, [t]);

  const [c, u] = a_1(e);

  y_1(() => {
    const a = () => u(e());
    window.addEventListener("resize", a);

    return () => window.removeEventListener("resize", a);
  }, [e]);

  return c;
}
function kt() {
  y_1(() => {
    const document_documentElement = document.documentElement;
    const e = document_documentElement.style.overflow;
    document_documentElement.style.overflow = "hidden";

    return () => {
      document_documentElement.style.overflow = e;
    };
  }, []);
}
function Dt({ onClose, onPrev, onNext }) {
  y_1(() => {
    const u = (a) => {
      switch (a.key) {
        case "Escape": {
          a.preventDefault();
          a.stopPropagation();
          onClose();
          break;
        }
        case "ArrowLeft": {
          a.preventDefault();
          a.stopPropagation();
          onPrev();
          break;
        }
        case "ArrowRight": {
          a.preventDefault();
          a.stopPropagation();
          onNext();
          break;
        }
      }
    };
    window.addEventListener("keydown", u, true);

    return () => window.removeEventListener("keydown", u, true);
  }, [onClose, onPrev, onNext]);
}
function Nt({ initialIndex, total }) {
  const [c, u] = a_1(initialIndex);
  const [a, i] = a_1(false);
  const n = A(null);

  const f = q_1(() => {
    if (n.current) {
      clearTimeout(n.current);
      n.current = null;
      i(false);
    }
  }, []);

  const s = q_1(
    (l) => {
      if (l !== c && l >= 0 && l < total) {
        f();
        i(true);
        u(l);

        n.current = window.setTimeout(() => {
          n.current = null;
          i(false);
        }, 500);
      }
    },
    [c, total, f]
  );

  const g = q_1(() => {
    if (c > 0) {
      s(c - 1);
    }
  }, [c, s]);

  const w = q_1(() => {
    if (c < total - 1) {
      s(c + 1);
    }
  }, [c, total, s]);

  return {
    currentIndex: c,
    setCurrentIndex: u,
    isAnimating: a,
    setIsAnimating: i,
    cancelAnimation: f,
    goToIndex: s,
    goToPrev: g,
    goToNext: w,
  };
}
const q = 150;
const Et = 0.3;
function rt(t, e) {
  const c = t.clientX - e.clientX;
  const u = t.clientY - e.clientY;
  return Math.sqrt(c * c + u * u);
}
function Rt({
  currentIndex,
  imagesCount,
  imageSizes,
  isMobile,
  isAnimating,
  setIsAnimating,
  cancelAnimation,
  onIndexChange,
  onClose,
}) {
  const [g, w] = a_1(0);
  const [l, p] = a_1(0);
  const [b, M] = a_1(false);
  const [ct, E] = a_1(1);
  const [H, _] = a_1(null);
  const [st, j] = a_1(1);
  const [at, J] = a_1(0);
  const [ut, K] = a_1(0);
  const [it, $] = a_1(false);
  const R = A(1);
  const B = A({ x: 0, y: 0 });
  const I = A(false);
  const Z = A(false);
  const F = A(0);
  const S = A(0);
  const Q = A(0);
  const tt = A(1);
  const G = A({ x: 0, y: 0 });
  const V = A({ x: 0, y: 0 });
  const X = A({ x: 0, y: 0 });
  const v = A(null);
  const L = A(false);
  const x = A(null);
  const Y = A(null);
  const U = A(false);

  const A = q_1((o) => {
    R.current = o;
    j(o);
  }, []);

  const C = q_1((o, r) => {
    B.current = { x: o, y: r };
    J(o);
    K(r);
  }, []);

  const et = q_1(() => {
    $(true);
    A(1);
    C(0, 0);

    setTimeout(() => $(false), 300);
  }, [A, C]);

  y_1(() => {
    R.current = 1;
    B.current = { x: 0, y: 0 };
    j(1);
    J(0);
    K(0);
    $(false);
  }, [currentIndex]);

  y_1(
    () => () => {
      if (x.current) {
        clearTimeout(x.current);
        x.current = null;
      }
    },
    []
  );

  const O = q_1(
    (o) => {
      let r = o;

      if (
        (currentIndex === 0 && r > 0) ||
        (currentIndex === imagesCount - 1 && r < 0)
      ) {
        r *= Et;
      }

      return r;
    },
    [currentIndex, imagesCount]
  );

  const P = q_1(
    () =>
      Math.abs(l) > q
        ? (onClose(isMobile), true)
        : (setIsAnimating(true),
          p(0),
          E(1),
          (x.current = window.setTimeout(() => {
            x.current = null;
            setIsAnimating(false);
          }, 300)),
          false),
    [l, isMobile, onClose, setIsAnimating]
  );

  const lt = q_1(
    (o) => {
      if (!isMobile && imagesCount > 1) {
        cancelAnimation();
        x.current && (clearTimeout(x.current), (x.current = null));
        Y.current !== null && (onIndexChange(Y.current), (Y.current = null));
        setIsAnimating(false);
        _(null);
        w(0);
        M(true);
        L.current = false;
        X.current = { x: o.clientX, y: o.clientY };
        v.current = null;
        o.preventDefault();
      }
    },
    [isMobile, imagesCount, cancelAnimation, onIndexChange, setIsAnimating]
  );

  const ft = q_1(
    (o) => {
      if (!b || isMobile) {
        return;
      }
      const r = o.clientX - X.current.x;
      const h = o.clientY - X.current.y;

      if (!v.current && (Math.abs(r) > 10 || Math.abs(h) > 10)) {
        v.current = Math.abs(r) > Math.abs(h) ? "x" : "y";
        L.current = true;
      }

      if (v.current === "x") {
        w(O(r));
      } else if (v.current === "y") {
        p(h);
        const k = Math.min(Math.abs(h) / q, 1);
        E(1 - k * 0.5);
      }
    },
    [b, isMobile, O]
  );

  const nt = q_1(() => {
    if (!(!b || isMobile)) {
      M(false);

      if (v.current === "x") {
        const r = Y.current ?? currentIndex;
        let h = r;

        if (g < -80 && r < imagesCount - 1) {
          h = r + 1;
        } else if (g > 80 && r > 0) {
          h = r - 1;
        }

        if (h !== r) {
          const k = imageSizes[h]?.width || 0;
          const N = imageSizes[r]?.width || 0;
          const W = h > r ? -N : k;
          setIsAnimating(true);
          _(h);
          w(W);
          Y.current = h;

          x.current = window.setTimeout(() => {
            x.current = null;
            setIsAnimating(false);
            _(null);
            w(0);
            Y.current = null;
            onIndexChange(h);
          }, 500);
        } else {
          setIsAnimating(true);
          w(0);

          x.current = window.setTimeout(() => {
            x.current = null;
            setIsAnimating(false);
          }, 300);
        }
      } else {
        if (v.current === "y") {
          P();
        }
      }

      v.current = null;
    }
  }, [
    b,
    isMobile,
    currentIndex,
    g,
    imagesCount,
    imageSizes,
    P,
    onIndexChange,
    setIsAnimating,
  ]);

  const ht = q_1(
    (o) => {
      if (!isMobile) {
        return;
      }
      S.current = Math.max(S.current, o.touches.length);

      if (o.touches.length === 2) {
        I.current = true;
        Z.current = true;
        Q.current = rt(o.touches[0], o.touches[1]);
        tt.current = R.current;
        M(false);
        v.current = null;
        w(0);
        p(0);
        E(1);
        $(false);
        return;
      }

      if (R.current > 1) {
        S.current = 1;
        G.current = { x: o.touches[0].clientX, y: o.touches[0].clientY };
        V.current = { ...B.current };
        M(true);
        L.current = false;
        v.current = null;
        $(false);
        const o_target_1 = o.target;
        U.current =
          o_target_1.tagName === "IMG" &&
          o_target_1.hasAttribute("data-viewer-image");
        return;
      }
      S.current = 1;
      Z.current = false;
      cancelAnimation();

      if (x.current) {
        clearTimeout(x.current);
        x.current = null;
      }

      setIsAnimating(false);
      w(0);
      const o_target = o.target;
      U.current =
        o_target.tagName === "IMG" &&
        o_target.hasAttribute("data-viewer-image");
      X.current = { x: o.touches[0].clientX, y: o.touches[0].clientY };
      v.current = null;
      M(true);
    },
    [isMobile, cancelAnimation, setIsAnimating]
  );

  const dt = q_1(
    (o) => {
      if (!isMobile) {
        return;
      }
      S.current = Math.max(S.current, o.touches.length);

      if (I.current && o.touches.length >= 2) {
        const k = rt(o.touches[0], o.touches[1]);
        const N = tt.current * (k / Q.current);
        A(Math.min(Math.max(N, 0.5), 5));
        return;
      }

      if (R.current > 1 && b && !I.current) {
        const k = o.touches[0].clientX - G.current.x;
        const N = o.touches[0].clientY - G.current.y;

        if (Math.abs(k) > 5 || Math.abs(N) > 5) {
          L.current = true;
        }

        C(V.current.x + k, V.current.y + N);
        return;
      }
      if (!b) {
        return;
      }
      const r = o.touches[0].clientX - X.current.x;
      const h = o.touches[0].clientY - X.current.y;

      if (!v.current && (Math.abs(r) > 10 || Math.abs(h) > 10)) {
        v.current = Math.abs(r) > Math.abs(h) ? "x" : "y";
      }

      if (v.current === "x") {
        w(O(r));
      } else if (v.current === "y") {
        p(h);
        const k = Math.min(Math.abs(h) / q, 1);
        E(Math.round((1 - k * 0.7) * 100) / 100);
      }
    },
    [isMobile, b, A, C, O]
  );

  const wt = q_1(() => {
    if (isMobile) {
      if (I.current) {
        I.current = false;
        F.current = Date.now();

        if (R.current < 1.1) {
          et();
        }

        return;
      }
      if (R.current > 1) {
        M(false);
        return;
      }
      if (S.current > 1 || Z.current) {
        M(false);
        p(0);
        E(1);
        v.current = null;
        return;
      }
      if (Date.now() - F.current < 300) {
        M(false);
        p(0);
        E(1);
        v.current = null;
        return;
      }
      if (b) {
        M(false);

        if (!U.current) {
          if (!v.current) {
            onClose(true);
            return;
          }
          if (v.current === "y" && l > 30) {
            onClose(true);
            return;
          }
        }

        if (v.current === "x") {
          let r = currentIndex;

          if (g < -50 && currentIndex < imagesCount - 1) {
            r = currentIndex + 1;
          } else if (g > 50 && currentIndex > 0) {
            r = currentIndex - 1;
          }

          setIsAnimating(true);
          w(0);

          if (r !== currentIndex) {
            onIndexChange(r);
          }

          x.current = window.setTimeout(() => {
            x.current = null;
            setIsAnimating(false);
          }, 500);
        } else {
          if (v.current === "y") {
            P();
          }
        }
        v.current = null;
      }
    }
  }, [
    isMobile,
    b,
    currentIndex,
    g,
    l,
    imagesCount,
    P,
    onIndexChange,
    onClose,
    setIsAnimating,
    et,
  ]);

  const gt = T_1(() => {
    const o = Y.current ?? currentIndex;
    const r = imageSizes[o] || { width: 600, height: 400 };
    if (isAnimating && H !== null) {
      const h = imageSizes[H] || r;
      return { width: h.width, height: h.height };
    }
    if (b && v.current === "x" && g !== 0) {
      const h = g < 0 ? Math.min(o + 1, imagesCount - 1) : Math.max(o - 1, 0);
      if (h === o) {
        return r;
      }
      const k = imageSizes[h] || r;
      const N = r.width / 2 + k.width / 2;
      const W = Math.min(Math.abs(g) / N, 1);
      return {
        width: r.width + (k.width - r.width) * W,
        height: r.height + (k.height - r.height) * W,
      };
    }
    return r;
  }, [imageSizes, currentIndex, isAnimating, H, b, g, imagesCount]);

  const vt = q_1(() => {
    setIsAnimating(true);
    p(window.innerHeight);
    E(0);
  }, [setIsAnimating]);

  return {
    offsetX: g,
    offsetY: l,
    isDragging: b,
    opacity: ct,
    wasDragging: L,
    displaySize: gt,
    animateClose: vt,
    zoom: { scale: st, panX: at, panY: ut, isAnimating: it },
    desktopHandlers: {
      onMouseDown: lt,
      onMouseMove: ft,
      onMouseUp: nt,
      onMouseLeave: nt,
    },
    mobileHandlers: { onTouchStart: ht, onTouchMove: dt, onTouchEnd: wt },
  };
}
const St = "ZtYA";
const Yt = "c1rv";
const Xt = "qIcD";
const zt = "RCz4";
const $t = "sNRF";
const It = "xAp7";
const Lt = "ARSA";
const At = "WwaO";
const Ct = "gBld";
const Ot = "T8o7";
const Pt = "JJeW";
const Wt = "ZYom";
const Ht = "k2ul";
const _t = "tjI4";
const Bt = "zOca";

const T = {
  viewer: St,
  closeButton: Yt,
  counter: Xt,
  windowContainer: zt,
  track: $t,
  slide: It,
  mobileContainer: Lt,
  mobileTrack: At,
  mobileSlide: Ct,
  navArea: Ot,
  navLeft: Pt,
  navRight: Wt,
  dots: Ht,
  dot: _t,
  active: Bt,
};

function Zt({ onClick }) {
  return a("button", {
    className: T.closeButton,
    onClick: onClick,
    children: a(I, { size: 24 }),
  });
}
function Gt({ current, total }) {
  return total <= 1
    ? null
    : a("div", { className: T.counter, children: [current + 1, " / ", total] });
}
function Vt({ currentIndex, total, onPrev, onNext }) {
  return total <= 1
    ? null
    : a(l, {
        children: [
          a("button", {
            className: `${T.navArea} ${T.navLeft}`,
            onClick: onPrev,
            disabled: currentIndex === 0,
            children: a(I_1, { size: 24 }),
          }),
          a("button", {
            className: `${T.navArea} ${T.navRight}`,
            onClick: onNext,
            disabled: currentIndex === total - 1,
            children: a(Tt, { size: 24 }),
          }),
        ],
      });
}
function Ut({ total, currentIndex, onDotClick }) {
  return total <= 1
    ? null
    : a("div", {
        className: T.dots,
        children: Array.from({ length: total }, (u, a) =>
          a(
            "button",
            {
              className: `${T.dot} ${a === currentIndex ? T.active : ""}`,
              onClick: () => onDotClick(a),
            },
            a
          )
        ),
      });
}
const qt = 2;
function jt({
  images,
  imageSizes,
  currentIndex,
  offsetX,
  offsetY,
  isAnimating,
  displaySize,
  handlers,
  onImageClick,
}) {
  const g = A(null);

  const w = T_1(() => {
    let l = 0;
    for (let p = 0; p < currentIndex; p++) {
      l += imageSizes[p]?.width || 0;
    }
    return l;
  }, [currentIndex, imageSizes]);

  return offsetY("div", {
    className: T.windowContainer,
    style: {
      width: `${displaySize.width}px`,
      height: `${displaySize.height}px`,
      transform: `translateY(${offsetY}px)`,
      transition: isAnimating
        ? "width 0.5s cubic-bezier(0.32, 0.72, 0, 1), height 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
        : "none",
    },
    onMouseDown: handlers.onMouseDown,
    onMouseMove: handlers.onMouseMove,
    onMouseUp: handlers.onMouseUp,
    onMouseLeave: handlers.onMouseLeave,
    children: offsetY("div", {
      ref: g,
      className: T.track,
      style: {
        transform: `translateX(${-w + offsetX}px)`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((l, p) => {
        const b = Math.abs(p - currentIndex) <= qt;
        const e_p = imageSizes[p];
        return offsetY(
          "div",
          {
            className: T.slide,
            onClick: onImageClick,
            style: e_p
              ? { width: `${e_p.width}px`, height: `${e_p.height}px` }
              : undefined,
            children:
              b &&
              offsetY("img", {
                src: l.url,
                alt: "",
                draggable: false,
                decoding: "async",
                loading: "lazy",
                style: {
                  width: e_p?.width || "auto",
                  height: e_p?.height || "auto",
                },
              }),
          },
          l.id
        );
      }),
    }),
  });
}
const Jt = 2;
function Kt({
  images,
  currentIndex,
  offsetX,
  offsetY,
  isAnimating,
  isClosing,
  handlers,
  onImageClick,
  zoom,
}) {
  return isAnimating("div", {
    className: T.mobileContainer,
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
    children: isAnimating("div", {
      className: T.mobileTrack,
      style: {
        transform: `translateX(calc(-${currentIndex * 100}% + ${offsetX}px))`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((g, w) => {
        const l = Math.abs(w - currentIndex) <= Jt;
        return isAnimating(
          "div",
          {
            className: T.mobileSlide,
            onClick: onImageClick,
            children:
              l &&
              isAnimating("img", {
                src: g.url,
                alt: "",
                draggable: false,
                decoding: "async",
                loading: "lazy",
                "data-viewer-image": true,
                style:
                  w === currentIndex && zoom.scale !== 1
                    ? {
                        transform: `translate(${zoom.panX}px, ${zoom.panY}px) scale(${zoom.scale})`,
                        transition: zoom.isAnimating
                          ? "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
                          : "none",
                      }
                    : undefined,
              }),
          },
          g.id
        );
      }),
    }),
  });
}

export function ImageViewer({ images, initialIndex, onClose }) {
  const u = A(null);
  const a = C();
  const i = Mt(images);
  const n = Nt({ initialIndex: initialIndex, total: images.length });
  kt();

  const f = q_1(
    (l = false) => {
      if (l && a) {
        s.animateClose();
        setTimeout(onClose, 150);
      } else {
        onClose();
      }
    },
    [a, onClose]
  );

  const s = Rt({
    currentIndex: n.currentIndex,
    imagesCount: images.length,
    imageSizes: i,
    isMobile: a,
    isAnimating: n.isAnimating,
    setIsAnimating: n.setIsAnimating,
    cancelAnimation: n.cancelAnimation,
    onIndexChange: n.goToIndex,
    onClose: f,
  });

  Dt({ onClose: f, onPrev: n.goToPrev, onNext: n.goToNext });

  y_1(() => {
    const l = [
      images[n.currentIndex - 1],
      images[n.currentIndex + 1],
      images[n.currentIndex - 2],
      images[n.currentIndex + 2],
    ];
    for (const p of l) {
      if (!p) {
        continue;
      }
      const b = new Image();
      b.decoding = "async";
      b.src = p.url;
    }
  }, [images, n.currentIndex]);

  const g = q_1(
    (l) => {
      if (s.wasDragging.current) {
        s.wasDragging.current = false;
        return;
      }

      if (l.target === u.current) {
        f();
      }
    },
    [f]
  );

  const w = q_1(() => {
    if (s.wasDragging.current) {
      s.wasDragging.current = false;
      return;
    }
    f(a);
  }, [f, a]);

  return $(
    a("div", {
      ref: u,
      className: T.viewer,
      style: {
        "--opacity": s.opacity,
        transition: n.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: g,
      children: [
        !a && a(Zt, { onClick: f }),
        a(Gt, { current: n.currentIndex, total: images.length }),
        !a &&
          a(jt, {
            images: images,
            imageSizes: i,
            currentIndex: n.currentIndex,
            offsetX: s.offsetX,
            offsetY: s.offsetY,
            isAnimating: n.isAnimating,
            displaySize: s.displaySize,
            handlers: s.desktopHandlers,
            onImageClick: w,
          }),
        a &&
          a(Kt, {
            images: images,
            currentIndex: n.currentIndex,
            offsetX: s.offsetX,
            offsetY: s.offsetY,
            isAnimating: n.isAnimating,
            isClosing: false,
            handlers: s.mobileHandlers,
            onImageClick: w,
            zoom: s.zoom,
          }),
        !a &&
          a(Vt, {
            currentIndex: n.currentIndex,
            total: images.length,
            onPrev: n.goToPrev,
            onNext: n.goToNext,
          }),
        a(Ut, {
          total: images.length,
          currentIndex: n.currentIndex,
          onDotClick: n.goToIndex,
        }),
      ],
    }),
    document.body
  );
}

export { ImageViewer as ImageViewer, ImageViewer as default };
