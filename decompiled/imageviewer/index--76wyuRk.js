import { a, q, d, y, A, q as q_1, I, m, E, af, $ } from "./index-BCnJB3wz.js";
import { I as I_1 } from "./IconChevronLeft-WQg0EXIc.js";
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
    const n = new t.Error().stack;

    if (n) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[n] = "a0613bb3-6a31-4251-a587-dc0362c6fa88";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-a0613bb3-6a31-4251-a587-dc0362c6fa88";
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
function Dt(t) {
  const n = q(() => {
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

  const [e, s] = d(n);

  y(() => {
    const a = () => s(n());
    window.addEventListener("resize", a);

    return () => window.removeEventListener("resize", a);
  }, [n]);

  return e;
}
function St() {
  y(() => {
    const document_documentElement = document.documentElement;
    const n = document_documentElement.style.overflow;
    document_documentElement.style.overflow = "hidden";

    return () => {
      document_documentElement.style.overflow = n;
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
  const [e, s] = d(initialIndex);
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
      if (l !== e && l >= 0 && l < total) {
        v();
        i(true);
        s(l);

        w.current = window.setTimeout(() => {
          w.current = null;
          i(false);
        }, 500);
      }
    },
    [e, total, v]
  );

  const p = q(() => {
    if (e > 0) {
      M(e - 1);
    }
  }, [e, M]);

  const u = q(() => {
    if (e < total - 1) {
      M(e + 1);
    }
  }, [e, total, M]);

  return {
    currentIndex: e,
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
function pt(t, n) {
  const e = t.clientX - n.clientX;
  const s = t.clientY - n.clientY;
  return Math.sqrt(e * e + s * s);
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
  const [b, x] = d(false);
  const [$, y] = d(1);
  const [j, B] = d(null);
  const [h, S] = d(1);
  const [d, R] = d(0);
  const [et, q] = d(0);
  const [rt, z] = d(false);
  const X = A(1);
  const _ = A({ x: 0, y: 0 });
  const O = A(false);
  const W = A(false);
  const Q = A(0);
  const Y = A(0);
  const J = A(0);
  const C = A(1);
  const tt = A({ x: 0, y: 0 });
  const nt = A({ x: 0, y: 0 });
  const P = A({ x: 0, y: 0 });
  const m = A(null);
  const A = A(false);
  const k = A(null);
  const I = A(null);
  const V = A(false);

  const G = q((c) => {
    X.current = c;
    S(c);
  }, []);

  const F = q((c, o) => {
    _.current = { x: c, y: o };
    R(c);
    q(o);
  }, []);

  const ot = q(() => {
    z(true);
    G(1);
    F(0, 0);

    setTimeout(() => z(false), 300);
  }, [G, F]);

  y(() => {
    X.current = 1;
    _.current = { x: 0, y: 0 };
    S(1);
    R(0);
    q(0);
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

  const Z = q(
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

  const K = q(
    () =>
      Math.abs(l) > gt
        ? (onClose(isMobile), true)
        : (setIsAnimating(true),
          r(0),
          y(1),
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
        I.current !== null && (onIndexChange(I.current), (I.current = null));
        setIsAnimating(false);
        B(null);
        u(0);
        x(true);
        A.current = false;
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
        A.current = true;
      }

      if (m.current === "x") {
        u(Z(o));
      } else if (m.current === "y") {
        r(g);
        const E = Math.min(Math.abs(g) / gt, 1);
        y(1 - E * 0.5);
      }
    },
    [b, isMobile, Z]
  );

  const ct = q(() => {
    if (!(!b || isMobile)) {
      x(false);

      if (m.current === "x") {
        const o = I.current ?? currentIndex;
        let g = o;

        if (p < -80 && o < imagesCount - 1) {
          g = o + 1;
        } else if (p > 80 && o > 0) {
          g = o - 1;
        }

        if (g !== o) {
          const E = imageSizes[g]?.width || 0;
          const H = imageSizes[o]?.width || 0;
          const st = g > o ? -H : E;
          setIsAnimating(true);
          B(g);
          u(st);
          I.current = g;

          k.current = window.setTimeout(() => {
            k.current = null;
            setIsAnimating(false);
            B(null);
            u(0);
            I.current = null;
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
          K();
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
    K,
    onIndexChange,
    setIsAnimating,
  ]);

  const ut = q(
    (c) => {
      if (!isMobile) {
        return;
      }
      Y.current = Math.max(Y.current, c.touches.length);

      if (c.touches.length === 2) {
        O.current = true;
        W.current = true;
        J.current = pt(c.touches[0], c.touches[1]);
        C.current = X.current;
        x(false);
        m.current = null;
        u(0);
        r(0);
        y(1);
        z(false);
        return;
      }

      if (X.current > 1) {
        Y.current = 1;
        tt.current = { x: c.touches[0].clientX, y: c.touches[0].clientY };
        nt.current = { ..._.current };
        x(true);
        A.current = false;
        m.current = null;
        z(false);
        const c_target_1 = c.target;
        V.current =
          c_target_1.tagName === "IMG" &&
          c_target_1.hasAttribute("data-viewer-image");
        return;
      }
      Y.current = 1;
      W.current = false;
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
      x(true);
    },
    [isMobile, cancelAnimation, setIsAnimating]
  );

  const lt = q(
    (c) => {
      if (!isMobile) {
        return;
      }
      Y.current = Math.max(Y.current, c.touches.length);

      if (O.current && c.touches.length >= 2) {
        const E = pt(c.touches[0], c.touches[1]);
        const H = C.current * (E / J.current);
        G(Math.min(Math.max(H, 0.5), 5));
        return;
      }

      if (X.current > 1 && b && !O.current) {
        const E = c.touches[0].clientX - tt.current.x;
        const H = c.touches[0].clientY - tt.current.y;

        if (Math.abs(E) > 5 || Math.abs(H) > 5) {
          A.current = true;
        }

        F(nt.current.x + E, nt.current.y + H);
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
        u(Z(o));
      } else if (m.current === "y") {
        r(g);
        const E = Math.min(Math.abs(g) / gt, 1);
        y(Math.round((1 - E * 0.7) * 100) / 100);
      }
    },
    [isMobile, b, G, F, Z]
  );

  const ht = q(() => {
    if (isMobile) {
      if (O.current) {
        O.current = false;
        Q.current = Date.now();

        if (X.current < 1.1) {
          ot();
        }

        return;
      }
      if (X.current > 1) {
        x(false);
        return;
      }
      if (Y.current > 1 || W.current) {
        x(false);
        r(0);
        y(1);
        m.current = null;
        return;
      }
      if (Date.now() - Q.current < 300) {
        x(false);
        r(0);
        y(1);
        m.current = null;
        return;
      }
      if (b) {
        x(false);

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
            K();
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
    K,
    onIndexChange,
    onClose,
    setIsAnimating,
    ot,
  ]);

  const dt = q_1(() => {
    const c = I.current ?? currentIndex;
    const o = imageSizes[c] || { width: 600, height: 400 };
    if (isAnimating && j !== null) {
      const g = imageSizes[j] || o;
      return { width: g.width, height: g.height };
    }
    if (b && m.current === "x" && p !== 0) {
      const g = p < 0 ? Math.min(c + 1, imagesCount - 1) : Math.max(c - 1, 0);
      if (g === c) {
        return o;
      }
      const E = imageSizes[g] || o;
      const H = o.width / 2 + E.width / 2;
      const st = Math.min(Math.abs(p) / H, 1);
      return {
        width: o.width + (E.width - o.width) * st,
        height: o.height + (E.height - o.height) * st,
      };
    }
    return o;
  }, [imageSizes, currentIndex, isAnimating, j, b, p, imagesCount]);

  const ft = q(() => {
    setIsAnimating(true);
    r(window.innerHeight);
    y(0);
  }, [setIsAnimating]);

  return {
    offsetX: p,
    offsetY: l,
    isDragging: b,
    opacity: $,
    wasDragging: A,
    displaySize: dt,
    animateClose: ft,
    zoom: { scale: h, panX: d, panY: et, isAnimating: rt },
    desktopHandlers: {
      onMouseDown: it,
      onMouseMove: at,
      onMouseUp: ct,
      onMouseLeave: ct,
    },
    mobileHandlers: { onTouchStart: ut, onTouchMove: lt, onTouchEnd: ht },
  };
}
const Xt = "mQ6T";
const Yt = "dKOl";
const It = "QBAb";
const Ct = "iEmX";
const Pt = "nrxb";
const zt = "FH49";
const Ot = "Bx7Y";
const At = "xgts";
const Ht = "OF5N";
const Bt = "XAKK";
const _t = "K0kc";
const Wt = "UY5j";
const Vt = "NuXj";
const Gt = "sDiS";
const Ft = "cozr";
const Zt = "nDRM";
const Kt = "ZdoH";
const Ut = "OG6E";

const D = {
  viewer: Xt,
  transitioning: Yt,
  windowContainer: It,
  mobileContainer: Ct,
  mobileSlide: Pt,
  closing: zt,
  slide: Ot,
  backdrop: At,
  closeButton: Ht,
  counter: Bt,
  dots: _t,
  navArea: Wt,
  track: Vt,
  mobileTrack: Gt,
  navLeft: Ft,
  navRight: Zt,
  dot: Kt,
  active: Ut,
};

function jt({ onClick }) {
  return a("button", {
    className: D.closeButton,
    onClick: onClick,
    children: a(I, { size: 24 }),
  });
}
function qt({ current, total }) {
  return total <= 1
    ? null
    : a("div", { className: D.counter, children: [current + 1, " / ", total] });
}
function Qt({ currentIndex, total, onPrev, onNext }) {
  return total <= 1
    ? null
    : a(m, {
        children: [
          a("button", {
            className: `${D.navArea} ${D.navLeft}`,
            onClick: onPrev,
            disabled: currentIndex === 0,
            children: a(I_1, { size: 24 }),
          }),
          a("button", {
            className: `${D.navArea} ${D.navRight}`,
            onClick: onNext,
            disabled: currentIndex === total - 1,
            children: a(Nt, { size: 24 }),
          }),
        ],
      });
}
function Jt({ total, currentIndex, onDotClick }) {
  return total <= 1
    ? null
    : a("div", {
        className: D.dots,
        children: Array.from({ length: total }, (s, a) =>
          a(
            "button",
            {
              className: `${D.dot} ${a === currentIndex ? D.active : ""}`,
              onClick: () => onDotClick(a),
            },
            a
          )
        ),
      });
}
const tn = 2;
function nn({
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
    className: D.windowContainer,
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
      className: D.track,
      style: {
        transform: `translateX(${-u + offsetX}px)`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((l, r) => {
        const b = Math.abs(r - currentIndex) <= tn;
        const n_r = imageSizes[r];
        const $ = r === currentIndex;
        return offsetY(
          "div",
          {
            className: D.slide,
            onClick: onImageClick,
            style: n_r
              ? { width: `${n_r.width}px`, height: `${n_r.height}px` }
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
                  width: n_r?.width || "auto",
                  height: n_r?.height || "auto",
                },
              }),
          },
          l.id
        );
      }),
    }),
  });
}
const en = 2;
function rn({
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
    className: D.mobileContainer,
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
      className: D.mobileTrack,
      style: {
        transform: `translateX(calc(-${currentIndex * 100}% + ${offsetX}px))`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((u, l) => {
        const r = Math.abs(l - currentIndex) <= en;
        const b = l === currentIndex;
        const n_l = imageSizes[l];
        const $ = n_l
          ? { width: `${n_l.width}px`, height: `${n_l.height}px` }
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
            className: D.mobileSlide,
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
function on(t, n) {
  return !t || t === "0px" || n <= 0 || !Number.isFinite(n)
    ? "0px"
    : t.replace(/([\d.]+)px/g, (e, s) => {
        const a = parseFloat(s) / n;
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
  const l = Dt(images);
  const r = Et({ initialIndex: initialIndex, total: images.length });
  St();

  const b = q(() => {
    const i_current = i.current;
    return i_current
      ? i_current.querySelector("[data-active-slide] img")
      : null;
  }, []);

  const x = q(
    (h) => {
      const S = b();
      if (!S) {
        return null;
      }
      const d = S.getBoundingClientRect();
      if (d.width === 0 || d.height === 0) {
        return null;
      }
      const R = h.hiddenLeft ?? 0;
      const et = h.hiddenTop ?? 0;
      const q = h.hiddenRight ?? 0;
      const rt = h.hiddenBottom ?? 0;
      const z = h.width + R + q;
      const X = h.height + et + rt;
      const _ = (R / z) * d.width;
      const O = (et / X) * d.height;
      const W = (q / z) * d.width;
      const Q = (rt / X) * d.height;
      const Y = d.width - _ - W;
      const J = d.height - O - Q;
      const C = Math.max(h.width / Y, h.height / J);
      const tt = h.width / C;
      const nt = h.height / C;
      const P = Math.max(0, (Y - tt) / 2);
      const m = Math.max(0, (J - nt) / 2);
      const A = _ + P;
      const k = O + m;
      const I = W + P;
      const V = Q + m;
      const G = (A + (d.width - I)) / 2;
      const F = (k + (d.height - V)) / 2;
      const ot = d.left + d.width / 2;
      const Z = d.top + d.height / 2;
      const K = ot + (G - d.width / 2) * C;
      const it = Z + (F - d.height / 2) * C;
      const at = h.left + h.width / 2;
      const ct = h.top + h.height / 2;
      const ut = at - K;
      const lt = ct - it;
      const ht = `translate(${ut}px, ${lt}px) scale(${C})`;
      const dt = on(h.borderRadius, C);
      const ft = `inset(${k}px ${I}px ${V}px ${A}px round ${dt})`;
      return { transform: ht, clipPath: ft };
    },
    [b]
  );

  const $ = q(
    (h = false) => {
      if (w) {
        return;
      }
      let S = null;

      if (r.currentIndex === initialIndex) {
        S = sourceRect;
      } else if (resolveSourceRect) {
        S = resolveSourceRect(r.currentIndex);
      }

      if (h && u && !S) {
        y.animateClose();
        setTimeout(onClose, 150);
        return;
      }

      v(true);

      if (S) {
        const d = x(S);
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
      x,
      b,
      u,
      onClose,
    ]
  );

  const y = Rt({
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
    for (const S of h) {
      if (!S) {
        continue;
      }
      const d = new Image();
      d.decoding = "async";
      d.src = S.url;
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
    const S = x(sourceRect);
    if (!S) {
      return;
    }

    const d = h.animate(
      [
        { transform: S.transform, clipPath: S.clipPath },
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

  const j = q(
    (h) => {
      if (y.wasDragging.current) {
        y.wasDragging.current = false;
        return;
      }

      if (h.target === i.current) {
        $();
      }
    },
    [$]
  );

  const B = q(() => {
    if (y.wasDragging.current) {
      y.wasDragging.current = false;
      return;
    }
    $(u);
  }, [$, u]);

  return $(
    onClose("div", {
      ref: i,
      className: `${D.viewer} ${w ? D.closing : ""} ${
        M ? D.transitioning : ""
      }`,
      style: {
        "--opacity": y.opacity,
        transition: r.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: j,
      children: [
        onClose("div", { className: D.backdrop, "aria-hidden": true }),
        !u && onClose(jt, { onClick: $ }),
        onClose(qt, { current: r.currentIndex, total: images.length }),
        !u &&
          onClose(nn, {
            images: images,
            imageSizes: l,
            currentIndex: r.currentIndex,
            offsetX: y.offsetX,
            offsetY: y.offsetY,
            isAnimating: r.isAnimating,
            displaySize: y.displaySize,
            handlers: y.desktopHandlers,
            onImageClick: B,
          }),
        u &&
          onClose(rn, {
            images: images,
            imageSizes: l,
            currentIndex: r.currentIndex,
            offsetX: y.offsetX,
            offsetY: y.offsetY,
            isAnimating: r.isAnimating,
            isClosing: false,
            handlers: y.mobileHandlers,
            onImageClick: B,
            zoom: y.zoom,
          }),
        !u &&
          onClose(Qt, {
            currentIndex: r.currentIndex,
            total: images.length,
            onPrev: r.goToPrev,
            onNext: r.goToNext,
          }),
        onClose(Jt, {
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
