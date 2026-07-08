import {
  y as q_1,
  d,
  y,
  A,
  a as T_1,
  a,
  m,
  E,
  J,
  $ as $_1,
} from "./index-BewGW5_v.js";
import { I } from "./IconChevronLeft-Cn8Oe6J-.js";
import { I as I_1 } from "./IconChevronRight-DvXA9WYU.js";
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
    t.SENTRY_RELEASE = { id: "1.1.2" };
    const e = new t.Error().stack;

    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "0c74e482-b77f-4d56-ac2f-3c4d3dc72842";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-0c74e482-b77f-4d56-ac2f-3c4d3dc72842";
    }
  } catch {}
})();
function St(t) {
  const e = q_1(() => {
    const { innerWidth, innerHeight } = window;

    return t.map((g) => {
      const b = g.width / g.height;
      const M = Math.min(innerWidth, g.width);
      const w = Math.min(innerHeight, g.height);

      let { width, height } = g;

      if (width > M) {
        width = M;
        height = width / b;
      }

      if (height > w) {
        height = w;
        width = height * b;
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
function Nt({ initialIndex, total }) {
  const [n, s] = d(initialIndex);
  const [a, i] = d(false);
  const g = A(null);

  const b = q_1(() => {
    if (g.current) {
      clearTimeout(g.current);
      g.current = null;
      i(false);
    }
  }, []);

  const M = q_1(
    (l) => {
      if (l !== n && l >= 0 && l < total) {
        b();
        i(true);
        s(l);

        g.current = window.setTimeout(() => {
          g.current = null;
          i(false);
        }, 500);
      }
    },
    [n, total, b]
  );

  const w = q_1(() => {
    if (n > 0) {
      M(n - 1);
    }
  }, [n, M]);

  const u = q_1(() => {
    if (n < total - 1) {
      M(n + 1);
    }
  }, [n, total, M]);

  return {
    currentIndex: n,
    setCurrentIndex: s,
    isAnimating: a,
    setIsAnimating: i,
    cancelAnimation: b,
    goToIndex: M,
    goToPrev: w,
    goToNext: u,
  };
}
const gt = 150;
const Et = 0.3;
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
  const [w, u] = d(0);
  const [l, r] = d(0);
  const [m, v] = d(false);
  const [N, y] = d(1);
  const [J, W] = d(null);
  const [h, D] = d(1);
  const [f, X] = d(0);
  const [nt, K] = d(0);
  const [rt, C] = d(false);
  const Y = A(1);
  const _ = A({ x: 0, y: 0 });
  const O = A(false);
  const B = A(false);
  const j = A(0);
  const L = A(0);
  const Q = A(0);
  const P = A(1);
  const tt = A({ x: 0, y: 0 });
  const et = A({ x: 0, y: 0 });
  const z = A({ x: 0, y: 0 });
  const p = A(null);
  const A = A(false);
  const k = A(null);
  const I = A(null);
  const V = A(false);

  const G = q_1((c) => {
    Y.current = c;
    D(c);
  }, []);

  const F = q_1((c, o) => {
    _.current = { x: c, y: o };
    X(c);
    K(o);
  }, []);

  const ot = q_1(() => {
    C(true);
    G(1);
    F(0, 0);

    setTimeout(() => C(false), 300);
  }, [G, F]);

  y(() => {
    Y.current = 1;
    _.current = { x: 0, y: 0 };
    D(1);
    X(0);
    K(0);
    C(false);
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

  const Z = q_1(
    (c) => {
      let o = c;

      if (
        (currentIndex === 0 && o > 0) ||
        (currentIndex === imagesCount - 1 && o < 0)
      ) {
        o *= Et;
      }

      return o;
    },
    [currentIndex, imagesCount]
  );

  const U = q_1(
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

  const it = q_1(
    (c) => {
      if (!isMobile && imagesCount > 1) {
        cancelAnimation();
        k.current && (clearTimeout(k.current), (k.current = null));
        I.current !== null && (onIndexChange(I.current), (I.current = null));
        setIsAnimating(false);
        W(null);
        u(0);
        v(true);
        A.current = false;
        z.current = { x: c.clientX, y: c.clientY };
        p.current = null;
        c.preventDefault();
      }
    },
    [isMobile, imagesCount, cancelAnimation, onIndexChange, setIsAnimating]
  );

  const at = q_1(
    (c) => {
      if (!m || isMobile) {
        return;
      }
      const o = c.clientX - z.current.x;
      const d = c.clientY - z.current.y;

      if (!p.current && (Math.abs(o) > 10 || Math.abs(d) > 10)) {
        p.current = Math.abs(o) > Math.abs(d) ? "x" : "y";
        A.current = true;
      }

      if (p.current === "x") {
        u(Z(o));
      } else if (p.current === "y") {
        r(d);
        const E = Math.min(Math.abs(d) / gt, 1);
        y(1 - E * 0.5);
      }
    },
    [m, isMobile, Z]
  );

  const ct = q_1(() => {
    if (!(!m || isMobile)) {
      v(false);

      if (p.current === "x") {
        const o = I.current ?? currentIndex;
        let d = o;

        if (w < -80 && o < imagesCount - 1) {
          d = o + 1;
        } else if (w > 80 && o > 0) {
          d = o - 1;
        }

        if (d !== o) {
          const E = imageSizes[d]?.width || 0;
          const H = imageSizes[o]?.width || 0;
          const st = d > o ? -H : E;
          setIsAnimating(true);
          W(d);
          u(st);
          I.current = d;

          k.current = window.setTimeout(() => {
            k.current = null;
            setIsAnimating(false);
            W(null);
            u(0);
            I.current = null;
            onIndexChange(d);
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
        if (p.current === "y") {
          U();
        }
      }

      p.current = null;
    }
  }, [
    m,
    isMobile,
    currentIndex,
    w,
    imagesCount,
    imageSizes,
    U,
    onIndexChange,
    setIsAnimating,
  ]);

  const ut = q_1(
    (c) => {
      if (!isMobile) {
        return;
      }
      L.current = Math.max(L.current, c.touches.length);

      if (c.touches.length === 2) {
        O.current = true;
        B.current = true;
        Q.current = pt(c.touches[0], c.touches[1]);
        P.current = Y.current;
        v(false);
        p.current = null;
        u(0);
        r(0);
        y(1);
        C(false);
        return;
      }

      if (Y.current > 1) {
        L.current = 1;
        tt.current = { x: c.touches[0].clientX, y: c.touches[0].clientY };
        et.current = { ..._.current };
        v(true);
        A.current = false;
        p.current = null;
        C(false);
        const c_target_1 = c.target;
        V.current =
          c_target_1.tagName === "IMG" &&
          c_target_1.hasAttribute("data-viewer-image");
        return;
      }
      L.current = 1;
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
      z.current = { x: c.touches[0].clientX, y: c.touches[0].clientY };
      p.current = null;
      v(true);
    },
    [isMobile, cancelAnimation, setIsAnimating]
  );

  const lt = q_1(
    (c) => {
      if (!isMobile) {
        return;
      }
      L.current = Math.max(L.current, c.touches.length);

      if (O.current && c.touches.length >= 2) {
        const E = pt(c.touches[0], c.touches[1]);
        const H = P.current * (E / Q.current);
        G(Math.min(Math.max(H, 0.5), 5));
        return;
      }

      if (Y.current > 1 && m && !O.current) {
        const E = c.touches[0].clientX - tt.current.x;
        const H = c.touches[0].clientY - tt.current.y;

        if (Math.abs(E) > 5 || Math.abs(H) > 5) {
          A.current = true;
        }

        F(et.current.x + E, et.current.y + H);
        return;
      }
      if (!m) {
        return;
      }
      const o = c.touches[0].clientX - z.current.x;
      const d = c.touches[0].clientY - z.current.y;

      if (!p.current && (Math.abs(o) > 10 || Math.abs(d) > 10)) {
        p.current = Math.abs(o) > Math.abs(d) ? "x" : "y";
      }

      if (p.current === "x") {
        u(Z(o));
      } else if (p.current === "y") {
        r(d);
        const E = Math.min(Math.abs(d) / gt, 1);
        y(Math.round((1 - E * 0.7) * 100) / 100);
      }
    },
    [isMobile, m, G, F, Z]
  );

  const ht = q_1(() => {
    if (isMobile) {
      if (O.current) {
        O.current = false;
        j.current = Date.now();

        if (Y.current < 1.1) {
          ot();
        }

        return;
      }
      if (Y.current > 1) {
        v(false);
        return;
      }
      if (L.current > 1 || B.current) {
        v(false);
        r(0);
        y(1);
        p.current = null;
        return;
      }
      if (Date.now() - j.current < 300) {
        v(false);
        r(0);
        y(1);
        p.current = null;
        return;
      }
      if (m) {
        v(false);

        if (!V.current) {
          if (!p.current) {
            onClose(true);
            return;
          }
          if (p.current === "y" && l > 30) {
            onClose(true);
            return;
          }
        }

        if (p.current === "x") {
          let o = currentIndex;

          if (w < -50 && currentIndex < imagesCount - 1) {
            o = currentIndex + 1;
          } else if (w > 50 && currentIndex > 0) {
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
          if (p.current === "y") {
            U();
          }
        }
        p.current = null;
      }
    }
  }, [
    isMobile,
    m,
    currentIndex,
    w,
    l,
    imagesCount,
    U,
    onIndexChange,
    onClose,
    setIsAnimating,
    ot,
  ]);

  const ft = T_1(() => {
    const c = I.current ?? currentIndex;
    const o = imageSizes[c] || { width: 600, height: 400 };
    if (isAnimating && J !== null) {
      const d = imageSizes[J] || o;
      return { width: d.width, height: d.height };
    }
    if (m && p.current === "x" && w !== 0) {
      const d = w < 0 ? Math.min(c + 1, imagesCount - 1) : Math.max(c - 1, 0);
      if (d === c) {
        return o;
      }
      const E = imageSizes[d] || o;
      const H = o.width / 2 + E.width / 2;
      const st = Math.min(Math.abs(w) / H, 1);
      return {
        width: o.width + (E.width - o.width) * st,
        height: o.height + (E.height - o.height) * st,
      };
    }
    return o;
  }, [imageSizes, currentIndex, isAnimating, J, m, w, imagesCount]);

  const dt = q_1(() => {
    setIsAnimating(true);
    r(window.innerHeight);
    y(0);
  }, [setIsAnimating]);

  return {
    offsetX: w,
    offsetY: l,
    isDragging: m,
    opacity: N,
    wasDragging: A,
    displaySize: ft,
    animateClose: dt,
    zoom: { scale: h, panX: f, panY: nt, isAnimating: rt },
    desktopHandlers: {
      onMouseDown: it,
      onMouseMove: at,
      onMouseUp: ct,
      onMouseLeave: ct,
    },
    mobileHandlers: { onTouchStart: ut, onTouchMove: lt, onTouchEnd: ht },
  };
}
const Xt = "SR3s";
const Yt = "EKO7";
const Lt = "knXB";
const It = "Mst9";
const Pt = "aeYt";
const zt = "eCzc";
const Ct = "YMnP";
const Ot = "mWRW";
const At = "f2bx";
const Ht = "TiCn";
const Wt = "XhWk";
const _t = "fJuL";
const Bt = "rOhM";
const Vt = "RIBx";
const Gt = "yo8F";
const Ft = "WtBJ";

const $ = {
  viewer: Xt,
  transitioning: Yt,
  windowContainer: Lt,
  mobileContainer: It,
  mobileSlide: Pt,
  closing: zt,
  slide: Ct,
  backdrop: Ot,
  dots: At,
  navArea: Ht,
  track: Wt,
  mobileTrack: _t,
  navLeft: Bt,
  navRight: Vt,
  dot: Gt,
  active: Ft,
};

function Zt({ currentIndex, total, onPrev, onNext }) {
  return total <= 1
    ? null
    : a(m, {
        children: [
          a("button", {
            className: `${$.navArea} ${$.navLeft}`,
            onClick: onPrev,
            disabled: currentIndex === 0,
            children: a(I, { size: 24 }),
          }),
          a("button", {
            className: `${$.navArea} ${$.navRight}`,
            onClick: onNext,
            disabled: currentIndex === total - 1,
            children: a(I_1, { size: 24 }),
          }),
        ],
      });
}
function Ut({ total, currentIndex, onDotClick }) {
  return total <= 1
    ? null
    : a("div", {
        className: $.dots,
        children: Array.from({ length: total }, (s, a) =>
          a(
            "button",
            {
              className: `${$.dot} ${a === currentIndex ? $.active : ""}`,
              onClick: () => onDotClick(a),
            },
            a
          )
        ),
      });
}
const qt = 2;
function Jt({
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
  const w = A(null);

  const u = T_1(() => {
    let l = 0;
    for (let r = 0; r < currentIndex; r++) {
      l += imageSizes[r]?.width || 0;
    }
    return l;
  }, [currentIndex, imageSizes]);

  return offsetY("div", {
    className: $.windowContainer,
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
      ref: w,
      className: $.track,
      style: {
        transform: `translateX(${-u + offsetX}px)`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((l, r) => {
        const m = Math.abs(r - currentIndex) <= qt;
        const e_r = imageSizes[r];
        const N = r === currentIndex;
        return offsetY(
          "div",
          {
            className: $.slide,
            onClick: onImageClick,
            style: e_r
              ? { width: `${e_r.width}px`, height: `${e_r.height}px` }
              : undefined,
            "data-active-slide": N ? "" : undefined,
            children:
              m &&
              offsetY("img", {
                src: l.url,
                alt: "",
                draggable: false,
                decoding: N ? "sync" : "async",
                loading: N ? "eager" : "lazy",
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
const Kt = 2;
function jt({
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
    className: $.mobileContainer,
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
      className: $.mobileTrack,
      style: {
        transform: `translateX(calc(-${currentIndex * 100}% + ${offsetX}px))`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((u, l) => {
        const r = Math.abs(l - currentIndex) <= Kt;
        const m = l === currentIndex;
        const e_l = imageSizes[l];
        const N = e_l
          ? { width: `${e_l.width}px`, height: `${e_l.height}px` }
          : {};

        if (m && zoom.scale !== 1) {
          N.transform = `translate(${zoom.panX}px, ${zoom.panY}px) scale(${zoom.scale})`;

          N.transition = zoom.isAnimating
            ? "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
            : "none";
        }

        return offsetY(
          "div",
          {
            className: $.mobileSlide,
            onClick: onImageClick,
            "data-active-slide": m ? "" : undefined,
            children:
              r &&
              offsetY("img", {
                src: u.url,
                alt: "",
                draggable: false,
                decoding: m ? "sync" : "async",
                loading: m ? "eager" : "lazy",
                "data-viewer-image": true,
                style: N,
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
function Qt(t, e) {
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
  const [g, b] = d(false);
  const [M, w] = d(sourceRect !== null);
  const u = E();
  const l = St(images);
  const r = Nt({ initialIndex: initialIndex, total: images.length });
  Dt();

  const m = q_1(() => {
    const i_current = i.current;
    return i_current
      ? i_current.querySelector("[data-active-slide] img")
      : null;
  }, []);

  const v = q_1(
    (h) => {
      const D = m();
      if (!D) {
        return null;
      }
      const f = D.getBoundingClientRect();
      if (f.width === 0 || f.height === 0) {
        return null;
      }
      const X = h.hiddenLeft ?? 0;
      const nt = h.hiddenTop ?? 0;
      const K = h.hiddenRight ?? 0;
      const rt = h.hiddenBottom ?? 0;
      const C = h.width + X + K;
      const Y = h.height + nt + rt;
      const _ = (X / C) * f.width;
      const O = (nt / Y) * f.height;
      const B = (K / C) * f.width;
      const j = (rt / Y) * f.height;
      const L = f.width - _ - B;
      const Q = f.height - O - j;
      const P = Math.max(h.width / L, h.height / Q);
      const tt = h.width / P;
      const et = h.height / P;
      const z = Math.max(0, (L - tt) / 2);
      const p = Math.max(0, (Q - et) / 2);
      const A = _ + z;
      const k = O + p;
      const I = B + z;
      const V = j + p;
      const G = (A + (f.width - I)) / 2;
      const F = (k + (f.height - V)) / 2;
      const ot = f.left + f.width / 2;
      const Z = f.top + f.height / 2;
      const U = ot + (G - f.width / 2) * P;
      const it = Z + (F - f.height / 2) * P;
      const at = h.left + h.width / 2;
      const ct = h.top + h.height / 2;
      const ut = at - U;
      const lt = ct - it;
      const ht = `translate(${ut}px, ${lt}px) scale(${P})`;
      const ft = Qt(h.borderRadius, P);
      const dt = `inset(${k}px ${I}px ${V}px ${A}px round ${ft})`;
      return { transform: ht, clipPath: dt };
    },
    [m]
  );

  const N = q_1(
    (h = false) => {
      if (g) {
        return;
      }
      let D = null;

      if (r.currentIndex === initialIndex) {
        D = sourceRect;
      } else if (resolveSourceRect) {
        D = resolveSourceRect(r.currentIndex);
      }

      if (h && u && !D) {
        y.animateClose();
        setTimeout(onClose, 150);
        return;
      }

      b(true);

      if (D) {
        const f = v(D);
        const X = m();

        if (f && X) {
          X.animate(
            [
              { transform: "none", clipPath: "inset(0px round 0px)" },
              { transform: f.transform, clipPath: f.clipPath },
            ],
            { duration: wt, easing: mt, fill: "forwards" }
          );
        }
      }

      setTimeout(onClose, wt);
    },
    [
      g,
      sourceRect,
      resolveSourceRect,
      r.currentIndex,
      initialIndex,
      v,
      m,
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
    onClose: N,
  });

  $t({ onClose: N, onPrev: r.goToPrev, onNext: r.goToNext });

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
      const f = new Image();
      f.decoding = "async";
      f.src = D.url;
    }
  }, [images, r.currentIndex]);

  J(() => {
    if (!sourceRect) {
      return;
    }
    const h = m();
    if (!h) {
      return;
    }
    const D = v(sourceRect);
    if (!D) {
      return;
    }

    const f = h.animate(
      [
        { transform: D.transform, clipPath: D.clipPath },
        { transform: "none", clipPath: "inset(0px round 0px)" },
      ],
      { duration: wt, easing: mt }
    );

    const X = () => w(false);

    f.addEventListener("finish", X, { once: true });
    f.addEventListener("cancel", X, { once: true });

    return () => {
      f.cancel();
    };
  }, []);

  const J = q_1(
    (h) => {
      if (y.wasDragging.current) {
        y.wasDragging.current = false;
        return;
      }

      if (h.target === i.current) {
        N();
      }
    },
    [N]
  );

  const W = q_1(() => {
    if (y.wasDragging.current) {
      y.wasDragging.current = false;
      return;
    }
    N(u);
  }, [N, u]);

  return $_1(
    onClose("div", {
      ref: i,
      className: `${$.viewer} ${g ? $.closing : ""} ${
        M ? $.transitioning : ""
      }`,
      style: {
        "--opacity": y.opacity,
        "--opacity-transition": r.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: J,
      children: [
        onClose("div", { className: $.backdrop, "aria-hidden": true }),
        !u &&
          onClose(Jt, {
            images: images,
            imageSizes: l,
            currentIndex: r.currentIndex,
            offsetX: y.offsetX,
            offsetY: y.offsetY,
            isAnimating: r.isAnimating,
            displaySize: y.displaySize,
            handlers: y.desktopHandlers,
            onImageClick: W,
          }),
        u &&
          onClose(jt, {
            images: images,
            imageSizes: l,
            currentIndex: r.currentIndex,
            offsetX: y.offsetX,
            offsetY: y.offsetY,
            isAnimating: r.isAnimating,
            isClosing: false,
            handlers: y.mobileHandlers,
            onImageClick: W,
            zoom: y.zoom,
          }),
        !u &&
          onClose(Zt, {
            currentIndex: r.currentIndex,
            total: images.length,
            onPrev: r.goToPrev,
            onNext: r.goToNext,
          }),
        onClose(Ut, {
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
