import { a, q, d, y, A, q as q_1, I, m, E, af, $ } from "./index-7xRaK15k.js";
import { I as I_1 } from "./IconChevronLeft-CN0ttJhV.js";
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
    t.SENTRY_RELEASE = { id: "1.1.1" };
    const e = new t.Error().stack;

    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "e3f6dd2b-ee79-45a4-83e0-19f8032ca4b3";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-e3f6dd2b-ee79-45a4-83e0-19f8032ca4b3";
    }
  } catch {}
})();
const Nt = ({ size = 24 }) =>
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
function St(t) {
  const e = q(() => {
    const { innerWidth, innerHeight } = window;

    return t.map((w) => {
      const v = w.width / w.height;
      const M = Math.min(innerWidth, w.width);
      const p = Math.min(innerHeight, w.height);

      let { width, height } = w;

      if (width > M) {
        width = M;
        height = width / v;
      }

      if (height > p) {
        height = p;
        width = height * v;
      }

      return { width: width, height: height };
    });
  }, [t]);

  const [n, s] = d(e);

  y(() => {
    const a = () => s(e());
    window.addEventListener("resize", a);

    return () => window.removeEventListener("resize", a);
  }, [e]);

  return n;
}
function Dt() {
  y(() => {
    const document_documentElement = document.documentElement;
    const e = document_documentElement.style.overflow;
    document_documentElement.style.overflow = "hidden";

    return () => {
      document_documentElement.style.overflow = e;
    };
  }, []);
}
function $t({ onClose, onPrev, onNext }) {
  y(() => {
    const s = (a) => {
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
    window.addEventListener("keydown", s, true);

    return () => window.removeEventListener("keydown", s, true);
  }, [onClose, onPrev, onNext]);
}
function Et({ initialIndex, total }) {
  const [n, s] = d(initialIndex);
  const [a, i] = d(false);
  const w = A(null);

  const v = q(() => {
    if (w.current) {
      clearTimeout(w.current);
      w.current = null;
      i(false);
    }
  }, []);

  const M = q(
    (l) => {
      if (l !== n && l >= 0 && l < total) {
        v();
        i(true);
        s(l);

        w.current = window.setTimeout(() => {
          w.current = null;
          i(false);
        }, 500);
      }
    },
    [n, total, v]
  );

  const p = q(() => {
    if (n > 0) {
      M(n - 1);
    }
  }, [n, M]);

  const u = q(() => {
    if (n < total - 1) {
      M(n + 1);
    }
  }, [n, total, M]);

  return {
    currentIndex: n,
    setCurrentIndex: s,
    isAnimating: a,
    setIsAnimating: i,
    cancelAnimation: v,
    goToIndex: M,
    goToPrev: p,
    goToNext: u,
  };
}
const gt = 150;
const Lt = 0.3;
function pt(t, e) {
  const n = t.clientX - e.clientX;
  const s = t.clientY - e.clientY;
  return Math.sqrt(n * n + s * s);
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
  const [p, u] = d(0);
  const [l, r] = d(0);
  const [b, y] = d(false);
  const [$, x] = d(1);
  const [Q, W] = d(null);
  const [h, D] = d(1);
  const [d, R] = d(0);
  const [nt, J] = d(0);
  const [rt, z] = d(false);
  const X = A(1);
  const _ = A({ x: 0, y: 0 });
  const A = A(false);
  const B = A(false);
  const K = A(0);
  const I = A(0);
  const j = A(0);
  const C = A(1);
  const tt = A({ x: 0, y: 0 });
  const et = A({ x: 0, y: 0 });
  const P = A({ x: 0, y: 0 });
  const m = A(null);
  const H = A(false);
  const k = A(null);
  const Y = A(null);
  const V = A(false);

  const U = q((c) => {
    X.current = c;
    D(c);
  }, []);

  const Z = q((c, o) => {
    _.current = { x: c, y: o };
    R(c);
    J(o);
  }, []);

  const ot = q(() => {
    z(true);
    U(1);
    Z(0, 0);

    setTimeout(() => z(false), 300);
  }, [U, Z]);

  y(() => {
    X.current = 1;
    _.current = { x: 0, y: 0 };
    D(1);
    R(0);
    J(0);
    z(false);
  }, [currentIndex]);

  y(
    () => () => {
      if (k.current) {
        clearTimeout(k.current);
        k.current = null;
      }
    },
    []
  );

  const G = q(
    (c) => {
      let o = c;

      if (
        (currentIndex === 0 && o > 0) ||
        (currentIndex === imagesCount - 1 && o < 0)
      ) {
        o *= Lt;
      }

      return o;
    },
    [currentIndex, imagesCount]
  );

  const q = q(
    () =>
      Math.abs(l) > gt
        ? (onClose(isMobile), true)
        : (setIsAnimating(true),
          r(0),
          x(1),
          (k.current = window.setTimeout(() => {
            k.current = null;
            setIsAnimating(false);
          }, 300)),
          false),
    [l, isMobile, onClose, setIsAnimating]
  );

  const it = q(
    (c) => {
      if (!isMobile && imagesCount > 1) {
        cancelAnimation();
        k.current && (clearTimeout(k.current), (k.current = null));
        Y.current !== null && (onIndexChange(Y.current), (Y.current = null));
        setIsAnimating(false);
        W(null);
        u(0);
        y(true);
        H.current = false;
        P.current = { x: c.clientX, y: c.clientY };
        m.current = null;
        c.preventDefault();
      }
    },
    [isMobile, imagesCount, cancelAnimation, onIndexChange, setIsAnimating]
  );

  const at = q(
    (c) => {
      if (!b || isMobile) {
        return;
      }
      const o = c.clientX - P.current.x;
      const g = c.clientY - P.current.y;

      if (!m.current && (Math.abs(o) > 10 || Math.abs(g) > 10)) {
        m.current = Math.abs(o) > Math.abs(g) ? "x" : "y";
        H.current = true;
      }

      if (m.current === "x") {
        u(G(o));
      } else if (m.current === "y") {
        r(g);
        const E = Math.min(Math.abs(g) / gt, 1);
        x(1 - E * 0.5);
      }
    },
    [b, isMobile, G]
  );

  const ct = q(() => {
    if (!(!b || isMobile)) {
      y(false);

      if (m.current === "x") {
        const o = Y.current ?? currentIndex;
        let g = o;

        if (p < -80 && o < imagesCount - 1) {
          g = o + 1;
        } else if (p > 80 && o > 0) {
          g = o - 1;
        }

        if (g !== o) {
          const E = imageSizes[g]?.width || 0;
          const O = imageSizes[o]?.width || 0;
          const st = g > o ? -O : E;
          setIsAnimating(true);
          W(g);
          u(st);
          Y.current = g;

          k.current = window.setTimeout(() => {
            k.current = null;
            setIsAnimating(false);
            W(null);
            u(0);
            Y.current = null;
            onIndexChange(g);
          }, 500);
        } else {
          setIsAnimating(true);
          u(0);

          k.current = window.setTimeout(() => {
            k.current = null;
            setIsAnimating(false);
          }, 300);
        }
      } else {
        if (m.current === "y") {
          q();
        }
      }

      m.current = null;
    }
  }, [
    b,
    isMobile,
    currentIndex,
    p,
    imagesCount,
    imageSizes,
    q,
    onIndexChange,
    setIsAnimating,
  ]);

  const ut = q(
    (c) => {
      if (!isMobile) {
        return;
      }
      I.current = Math.max(I.current, c.touches.length);

      if (c.touches.length === 2) {
        A.current = true;
        B.current = true;
        j.current = pt(c.touches[0], c.touches[1]);
        C.current = X.current;
        y(false);
        m.current = null;
        u(0);
        r(0);
        x(1);
        z(false);
        return;
      }

      if (X.current > 1) {
        I.current = 1;
        tt.current = { x: c.touches[0].clientX, y: c.touches[0].clientY };
        et.current = { ..._.current };
        y(true);
        H.current = false;
        m.current = null;
        z(false);
        const c_target_1 = c.target;
        V.current =
          c_target_1.tagName === "IMG" &&
          c_target_1.hasAttribute("data-viewer-image");
        return;
      }
      I.current = 1;
      B.current = false;
      cancelAnimation();

      if (k.current) {
        clearTimeout(k.current);
        k.current = null;
      }

      setIsAnimating(false);
      u(0);
      const c_target = c.target;
      V.current =
        c_target.tagName === "IMG" &&
        c_target.hasAttribute("data-viewer-image");
      P.current = { x: c.touches[0].clientX, y: c.touches[0].clientY };
      m.current = null;
      y(true);
    },
    [isMobile, cancelAnimation, setIsAnimating]
  );

  const lt = q(
    (c) => {
      if (!isMobile) {
        return;
      }
      I.current = Math.max(I.current, c.touches.length);

      if (A.current && c.touches.length >= 2) {
        const E = pt(c.touches[0], c.touches[1]);
        const O = C.current * (E / j.current);
        U(Math.min(Math.max(O, 0.5), 5));
        return;
      }

      if (X.current > 1 && b && !A.current) {
        const E = c.touches[0].clientX - tt.current.x;
        const O = c.touches[0].clientY - tt.current.y;

        if (Math.abs(E) > 5 || Math.abs(O) > 5) {
          H.current = true;
        }

        Z(et.current.x + E, et.current.y + O);
        return;
      }
      if (!b) {
        return;
      }
      const o = c.touches[0].clientX - P.current.x;
      const g = c.touches[0].clientY - P.current.y;

      if (!m.current && (Math.abs(o) > 10 || Math.abs(g) > 10)) {
        m.current = Math.abs(o) > Math.abs(g) ? "x" : "y";
      }

      if (m.current === "x") {
        u(G(o));
      } else if (m.current === "y") {
        r(g);
        const E = Math.min(Math.abs(g) / gt, 1);
        x(Math.round((1 - E * 0.7) * 100) / 100);
      }
    },
    [isMobile, b, U, Z, G]
  );

  const ht = q(() => {
    if (isMobile) {
      if (A.current) {
        A.current = false;
        K.current = Date.now();

        if (X.current < 1.1) {
          ot();
        }

        return;
      }
      if (X.current > 1) {
        y(false);
        return;
      }
      if (I.current > 1 || B.current) {
        y(false);
        r(0);
        x(1);
        m.current = null;
        return;
      }
      if (Date.now() - K.current < 300) {
        y(false);
        r(0);
        x(1);
        m.current = null;
        return;
      }
      if (b) {
        y(false);

        if (!V.current) {
          if (!m.current) {
            onClose(true);
            return;
          }
          if (m.current === "y" && l > 30) {
            onClose(true);
            return;
          }
        }

        if (m.current === "x") {
          let o = currentIndex;

          if (p < -50 && currentIndex < imagesCount - 1) {
            o = currentIndex + 1;
          } else if (p > 50 && currentIndex > 0) {
            o = currentIndex - 1;
          }

          setIsAnimating(true);
          u(0);

          if (o !== currentIndex) {
            onIndexChange(o);
          }

          k.current = window.setTimeout(() => {
            k.current = null;
            setIsAnimating(false);
          }, 500);
        } else {
          if (m.current === "y") {
            q();
          }
        }
        m.current = null;
      }
    }
  }, [
    isMobile,
    b,
    currentIndex,
    p,
    l,
    imagesCount,
    q,
    onIndexChange,
    onClose,
    setIsAnimating,
    ot,
  ]);

  const dt = q_1(() => {
    const c = Y.current ?? currentIndex;
    const o = imageSizes[c] || { width: 600, height: 400 };
    if (isAnimating && Q !== null) {
      const g = imageSizes[Q] || o;
      return { width: g.width, height: g.height };
    }
    if (b && m.current === "x" && p !== 0) {
      const g = p < 0 ? Math.min(c + 1, imagesCount - 1) : Math.max(c - 1, 0);
      if (g === c) {
        return o;
      }
      const E = imageSizes[g] || o;
      const O = o.width / 2 + E.width / 2;
      const st = Math.min(Math.abs(p) / O, 1);
      return {
        width: o.width + (E.width - o.width) * st,
        height: o.height + (E.height - o.height) * st,
      };
    }
    return o;
  }, [imageSizes, currentIndex, isAnimating, Q, b, p, imagesCount]);

  const ft = q(() => {
    setIsAnimating(true);
    r(window.innerHeight);
    x(0);
  }, [setIsAnimating]);

  return {
    offsetX: p,
    offsetY: l,
    isDragging: b,
    opacity: $,
    wasDragging: H,
    displaySize: dt,
    animateClose: ft,
    zoom: { scale: h, panX: d, panY: nt, isAnimating: rt },
    desktopHandlers: {
      onMouseDown: it,
      onMouseMove: at,
      onMouseUp: ct,
      onMouseLeave: ct,
    },
    mobileHandlers: { onTouchStart: ut, onTouchMove: lt, onTouchEnd: ht },
  };
}
const Xt = "Zk01";
const It = "BQ8J";
const Yt = "QN1n";
const Ct = "HOrg";
const Pt = "INR0";
const zt = "AouS";
const At = "UymN";
const Ht = "lcH7";
const Ot = "m3Ya";
const Wt = "OZsh";
const _t = "LUuU";
const Bt = "X7kh";
const Vt = "YyQ2";
const Ut = "HwqW";
const Zt = "VLTJ";
const Gt = "UQPq";
const qt = "ARaX";
const Ft = "flSA";

const S = {
  viewer: Xt,
  transitioning: It,
  windowContainer: Yt,
  mobileContainer: Ct,
  mobileSlide: Pt,
  closing: zt,
  slide: At,
  backdrop: Ht,
  closeButton: Ot,
  counter: Wt,
  dots: _t,
  navArea: Bt,
  track: Vt,
  mobileTrack: Ut,
  navLeft: Zt,
  navRight: Gt,
  dot: qt,
  active: Ft,
};

function Qt({ onClick }) {
  return a("button", {
    className: S.closeButton,
    onClick: onClick,
    children: a(I, { size: 24 }),
  });
}
function Jt({ current, total }) {
  return total <= 1
    ? null
    : a("div", { className: S.counter, children: [current + 1, " / ", total] });
}
function Kt({ currentIndex, total, onPrev, onNext }) {
  return total <= 1
    ? null
    : a(m, {
        children: [
          a("button", {
            className: `${S.navArea} ${S.navLeft}`,
            onClick: onPrev,
            disabled: currentIndex === 0,
            children: a(I_1, { size: 24 }),
          }),
          a("button", {
            className: `${S.navArea} ${S.navRight}`,
            onClick: onNext,
            disabled: currentIndex === total - 1,
            children: a(Nt, { size: 24 }),
          }),
        ],
      });
}
function jt({ total, currentIndex, onDotClick }) {
  return total <= 1
    ? null
    : a("div", {
        className: S.dots,
        children: Array.from({ length: total }, (s, a) =>
          a(
            "button",
            {
              className: `${S.dot} ${a === currentIndex ? S.active : ""}`,
              onClick: () => onDotClick(a),
            },
            a
          )
        ),
      });
}
const te = 2;
function ee({
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
  const p = A(null);

  const u = q_1(() => {
    let l = 0;
    for (let r = 0; r < currentIndex; r++) {
      l += imageSizes[r]?.width || 0;
    }
    return l;
  }, [currentIndex, imageSizes]);

  return offsetY("div", {
    className: S.windowContainer,
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
      ref: p,
      className: S.track,
      style: {
        transform: `translateX(${-u + offsetX}px)`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((l, r) => {
        const b = Math.abs(r - currentIndex) <= te;
        const e_r = imageSizes[r];
        const $ = r === currentIndex;
        return offsetY(
          "div",
          {
            className: S.slide,
            onClick: onImageClick,
            style: e_r
              ? { width: `${e_r.width}px`, height: `${e_r.height}px` }
              : undefined,
            "data-active-slide": $ ? "" : undefined,
            children:
              b &&
              offsetY("img", {
                src: l.url,
                alt: "",
                draggable: false,
                decoding: $ ? "sync" : "async",
                loading: $ ? "eager" : "lazy",
                style: {
                  width: e_r?.width || "auto",
                  height: e_r?.height || "auto",
                },
              }),
          },
          l.id
        );
      }),
    }),
  });
}
const ne = 2;
function re({
  images,
  imageSizes,
  currentIndex,
  offsetX,
  offsetY,
  isAnimating,
  isClosing,
  handlers,
  onImageClick,
  zoom,
}) {
  return offsetY("div", {
    className: S.mobileContainer,
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
    children: offsetY("div", {
      className: S.mobileTrack,
      style: {
        transform: `translateX(calc(-${currentIndex * 100}% + ${offsetX}px))`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((u, l) => {
        const r = Math.abs(l - currentIndex) <= ne;
        const b = l === currentIndex;
        const e_l = imageSizes[l];
        const $ = e_l
          ? { width: `${e_l.width}px`, height: `${e_l.height}px` }
          : {};

        if (b && zoom.scale !== 1) {
          $.transform = `translate(${zoom.panX}px, ${zoom.panY}px) scale(${zoom.scale})`;

          $.transition = zoom.isAnimating
            ? "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
            : "none";
        }

        return offsetY(
          "div",
          {
            className: S.mobileSlide,
            onClick: onImageClick,
            "data-active-slide": b ? "" : undefined,
            children:
              r &&
              offsetY("img", {
                src: u.url,
                alt: "",
                draggable: false,
                decoding: b ? "sync" : "async",
                loading: b ? "eager" : "lazy",
                "data-viewer-image": true,
                style: $,
              }),
          },
          u.id
        );
      }),
    }),
  });
}
const wt = 280;
const mt = "cubic-bezier(0.32, 0.72, 0, 1)";
function oe(t, e) {
  return !t || t === "0px" || e <= 0 || !Number.isFinite(e)
    ? "0px"
    : t.replace(/([\d.]+)px/g, (n, s) => {
        const a = parseFloat(s) / e;
        return Number.isFinite(a) ? `${a}px` : "0px";
      });
}

export function ImageViewer({
  images,
  initialIndex,
  sourceRect = null,
  resolveSourceRect = null,
  onClose,
}) {
  const i = A(null);
  const [w, v] = d(false);
  const [M, p] = d(sourceRect !== null);
  const u = E();
  const l = St(images);
  const r = Et({ initialIndex: initialIndex, total: images.length });
  Dt();

  const b = q(() => {
    const i_current = i.current;
    return i_current
      ? i_current.querySelector("[data-active-slide] img")
      : null;
  }, []);

  const y = q(
    (h) => {
      const D = b();
      if (!D) {
        return null;
      }
      const d = D.getBoundingClientRect();
      if (d.width === 0 || d.height === 0) {
        return null;
      }
      const R = h.hiddenLeft ?? 0;
      const nt = h.hiddenTop ?? 0;
      const J = h.hiddenRight ?? 0;
      const rt = h.hiddenBottom ?? 0;
      const z = h.width + R + J;
      const X = h.height + nt + rt;
      const _ = (R / z) * d.width;
      const A = (nt / X) * d.height;
      const B = (J / z) * d.width;
      const K = (rt / X) * d.height;
      const I = d.width - _ - B;
      const j = d.height - A - K;
      const C = Math.max(h.width / I, h.height / j);
      const tt = h.width / C;
      const et = h.height / C;
      const P = Math.max(0, (I - tt) / 2);
      const m = Math.max(0, (j - et) / 2);
      const H = _ + P;
      const k = A + m;
      const Y = B + P;
      const V = K + m;
      const U = (H + (d.width - Y)) / 2;
      const Z = (k + (d.height - V)) / 2;
      const ot = d.left + d.width / 2;
      const G = d.top + d.height / 2;
      const q = ot + (U - d.width / 2) * C;
      const it = G + (Z - d.height / 2) * C;
      const at = h.left + h.width / 2;
      const ct = h.top + h.height / 2;
      const ut = at - q;
      const lt = ct - it;
      const ht = `translate(${ut}px, ${lt}px) scale(${C})`;
      const dt = oe(h.borderRadius, C);
      const ft = `inset(${k}px ${Y}px ${V}px ${H}px round ${dt})`;
      return { transform: ht, clipPath: ft };
    },
    [b]
  );

  const $ = q(
    (h = false) => {
      if (w) {
        return;
      }
      let D = null;

      if (r.currentIndex === initialIndex) {
        D = sourceRect;
      } else if (resolveSourceRect) {
        D = resolveSourceRect(r.currentIndex);
      }

      if (h && u && !D) {
        x.animateClose();
        setTimeout(onClose, 150);
        return;
      }

      v(true);

      if (D) {
        const d = y(D);
        const R = b();

        if (d && R) {
          R.animate(
            [
              { transform: "none", clipPath: "inset(0px round 0px)" },
              { transform: d.transform, clipPath: d.clipPath },
            ],
            { duration: wt, easing: mt, fill: "forwards" }
          );
        }
      }

      setTimeout(onClose, wt);
    },
    [
      w,
      sourceRect,
      resolveSourceRect,
      r.currentIndex,
      initialIndex,
      y,
      b,
      u,
      onClose,
    ]
  );

  const x = Rt({
    currentIndex: r.currentIndex,
    imagesCount: images.length,
    imageSizes: l,
    isMobile: u,
    isAnimating: r.isAnimating,
    setIsAnimating: r.setIsAnimating,
    cancelAnimation: r.cancelAnimation,
    onIndexChange: r.goToIndex,
    onClose: $,
  });

  $t({ onClose: $, onPrev: r.goToPrev, onNext: r.goToNext });

  y(() => {
    const h = [
      images[r.currentIndex - 1],
      images[r.currentIndex + 1],
      images[r.currentIndex - 2],
      images[r.currentIndex + 2],
    ];
    for (const D of h) {
      if (!D) {
        continue;
      }
      const d = new Image();
      d.decoding = "async";
      d.src = D.url;
    }
  }, [images, r.currentIndex]);

  af(() => {
    if (!sourceRect) {
      return;
    }
    const h = b();
    if (!h) {
      return;
    }
    const D = y(sourceRect);
    if (!D) {
      return;
    }

    const d = h.animate(
      [
        { transform: D.transform, clipPath: D.clipPath },
        { transform: "none", clipPath: "inset(0px round 0px)" },
      ],
      { duration: wt, easing: mt }
    );

    const R = () => p(false);

    d.addEventListener("finish", R, { once: true });
    d.addEventListener("cancel", R, { once: true });

    return () => {
      d.cancel();
    };
  }, []);

  const Q = q(
    (h) => {
      if (x.wasDragging.current) {
        x.wasDragging.current = false;
        return;
      }

      if (h.target === i.current) {
        $();
      }
    },
    [$]
  );

  const W = q(() => {
    if (x.wasDragging.current) {
      x.wasDragging.current = false;
      return;
    }
    $(u);
  }, [$, u]);

  return $(
    onClose("div", {
      ref: i,
      className: `${S.viewer} ${w ? S.closing : ""} ${
        M ? S.transitioning : ""
      }`,
      style: {
        "--opacity": x.opacity,
        transition: r.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: Q,
      children: [
        onClose("div", { className: S.backdrop, "aria-hidden": true }),
        !u && onClose(Qt, { onClick: $ }),
        onClose(Jt, { current: r.currentIndex, total: images.length }),
        !u &&
          onClose(ee, {
            images: images,
            imageSizes: l,
            currentIndex: r.currentIndex,
            offsetX: x.offsetX,
            offsetY: x.offsetY,
            isAnimating: r.isAnimating,
            displaySize: x.displaySize,
            handlers: x.desktopHandlers,
            onImageClick: W,
          }),
        u &&
          onClose(re, {
            images: images,
            imageSizes: l,
            currentIndex: r.currentIndex,
            offsetX: x.offsetX,
            offsetY: x.offsetY,
            isAnimating: r.isAnimating,
            isClosing: false,
            handlers: x.mobileHandlers,
            onImageClick: W,
            zoom: x.zoom,
          }),
        !u &&
          onClose(Kt, {
            currentIndex: r.currentIndex,
            total: images.length,
            onPrev: r.goToPrev,
            onNext: r.goToNext,
          }),
        onClose(jt, {
          total: images.length,
          currentIndex: r.currentIndex,
          onDotClick: r.goToIndex,
        }),
      ],
    }),
    document.body
  );
}

export { ImageViewer as ImageViewer, ImageViewer as default };
