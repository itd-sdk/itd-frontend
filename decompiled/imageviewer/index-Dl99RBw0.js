import { q, d, y, A, a as T_1, a, m, E, J, $ } from "./index-CFv_0Hh6.js";
import { I } from "./IconChevronLeft-DRcQfgI5.js";
import { I as I_1 } from "./IconChevronRight-DH-EtvDX.js";
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
      t._sentryDebugIds[e] = "3f90ceb4-47e5-44ed-913e-4985e2b5985e";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-3f90ceb4-47e5-44ed-913e-4985e2b5985e";
    }
  } catch {}
})();
function Dt(t) {
  const e = q(() => {
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
function St() {
  y(() => {
    const document_documentElement = document.documentElement;
    const e = document_documentElement.style.overflow;
    document_documentElement.style.overflow = "hidden";

    return () => {
      document_documentElement.style.overflow = e;
    };
  }, []);
}
function Nt({ onClose, onPrev, onNext }) {
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
function $t({ initialIndex, total }) {
  const [n, s] = d(initialIndex);
  const [a, i] = d(false);
  const g = A(null);

  const b = q(() => {
    if (g.current) {
      clearTimeout(g.current);
      g.current = null;
      i(false);
    }
  }, []);

  const M = q(
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

  const w = q(() => {
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
    cancelAnimation: b,
    goToIndex: M,
    goToPrev: w,
    goToNext: u,
  };
}
const gt = 150;
const Et = 0.3;
function mt(t, e) {
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
  const [p, v] = d(false);
  const [$, y] = d(1);
  const [q, _] = d(null);
  const [h, S] = d(1);
  const [f, Y] = d(0);
  const [nt, K] = d(0);
  const [rt, C] = d(false);
  const X = A(1);
  const W = A({ x: 0, y: 0 });
  const H = A(false);
  const V = A(false);
  const j = A(0);
  const L = A(0);
  const J = A(0);
  const P = A(1);
  const tt = A({ x: 0, y: 0 });
  const et = A({ x: 0, y: 0 });
  const z = A({ x: 0, y: 0 });
  const m = A(null);
  const A = A(false);
  const k = A(null);
  const I = A(null);
  const G = A(false);

  const B = q((c) => {
    X.current = c;
    S(c);
  }, []);

  const Z = q((c, o) => {
    W.current = { x: c, y: o };
    Y(c);
    K(o);
  }, []);

  const ot = q(() => {
    C(true);
    B(1);
    Z(0, 0);

    setTimeout(() => C(false), 300);
  }, [B, Z]);

  y(() => {
    X.current = 1;
    W.current = { x: 0, y: 0 };
    S(1);
    Y(0);
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

  const F = q(
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

  const Q = q(
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
        _(null);
        u(0);
        v(true);
        A.current = false;
        z.current = { x: c.clientX, y: c.clientY };
        m.current = null;
        c.preventDefault();
      }
    },
    [isMobile, imagesCount, cancelAnimation, onIndexChange, setIsAnimating]
  );

  const at = q(
    (c) => {
      if (!p || isMobile) {
        return;
      }
      const o = c.clientX - z.current.x;
      const d = c.clientY - z.current.y;

      if (!m.current && (Math.abs(o) > 10 || Math.abs(d) > 10)) {
        m.current = Math.abs(o) > Math.abs(d) ? "x" : "y";
        A.current = true;
      }

      if (m.current === "x") {
        u(F(o));
      } else if (m.current === "y") {
        r(d);
        const E = Math.min(Math.abs(d) / gt, 1);
        y(1 - E * 0.5);
      }
    },
    [p, isMobile, F]
  );

  const ct = q(() => {
    if (!(!p || isMobile)) {
      v(false);

      if (m.current === "x") {
        const o = I.current ?? currentIndex;
        let d = o;

        if (w < -80 && o < imagesCount - 1) {
          d = o + 1;
        } else if (w > 80 && o > 0) {
          d = o - 1;
        }

        if (d !== o) {
          const E = imageSizes[d]?.width || 0;
          const O = imageSizes[o]?.width || 0;
          const st = d > o ? -O : E;
          setIsAnimating(true);
          _(d);
          u(st);
          I.current = d;

          k.current = window.setTimeout(() => {
            k.current = null;
            setIsAnimating(false);
            _(null);
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
        if (m.current === "y") {
          Q();
        }
      }

      m.current = null;
    }
  }, [
    p,
    isMobile,
    currentIndex,
    w,
    imagesCount,
    imageSizes,
    Q,
    onIndexChange,
    setIsAnimating,
  ]);

  const ut = q(
    (c) => {
      if (!isMobile) {
        return;
      }
      L.current = Math.max(L.current, c.touches.length);

      if (c.touches.length === 2) {
        H.current = true;
        V.current = true;
        J.current = mt(c.touches[0], c.touches[1]);
        P.current = X.current;
        v(false);
        m.current = null;
        u(0);
        r(0);
        y(1);
        C(false);
        return;
      }

      if (X.current > 1) {
        L.current = 1;
        tt.current = { x: c.touches[0].clientX, y: c.touches[0].clientY };
        et.current = { ...W.current };
        v(true);
        A.current = false;
        m.current = null;
        C(false);
        const c_target_1 = c.target;
        G.current =
          c_target_1.tagName === "IMG" &&
          c_target_1.hasAttribute("data-viewer-image");
        return;
      }
      L.current = 1;
      V.current = false;
      cancelAnimation();

      if (k.current) {
        clearTimeout(k.current);
        k.current = null;
      }

      setIsAnimating(false);
      u(0);
      const c_target = c.target;
      G.current =
        c_target.tagName === "IMG" &&
        c_target.hasAttribute("data-viewer-image");
      z.current = { x: c.touches[0].clientX, y: c.touches[0].clientY };
      m.current = null;
      v(true);
    },
    [isMobile, cancelAnimation, setIsAnimating]
  );

  const lt = q(
    (c) => {
      if (!isMobile) {
        return;
      }
      L.current = Math.max(L.current, c.touches.length);

      if (H.current && c.touches.length >= 2) {
        const E = mt(c.touches[0], c.touches[1]);
        const O = P.current * (E / J.current);
        B(Math.min(Math.max(O, 0.5), 5));
        return;
      }

      if (X.current > 1 && p && !H.current) {
        const E = c.touches[0].clientX - tt.current.x;
        const O = c.touches[0].clientY - tt.current.y;

        if (Math.abs(E) > 5 || Math.abs(O) > 5) {
          A.current = true;
        }

        Z(et.current.x + E, et.current.y + O);
        return;
      }
      if (!p) {
        return;
      }
      const o = c.touches[0].clientX - z.current.x;
      const d = c.touches[0].clientY - z.current.y;

      if (!m.current && (Math.abs(o) > 10 || Math.abs(d) > 10)) {
        m.current = Math.abs(o) > Math.abs(d) ? "x" : "y";
      }

      if (m.current === "x") {
        u(F(o));
      } else if (m.current === "y") {
        r(d);
        const E = Math.min(Math.abs(d) / gt, 1);
        y(Math.round((1 - E * 0.7) * 100) / 100);
      }
    },
    [isMobile, p, B, Z, F]
  );

  const ht = q(() => {
    if (isMobile) {
      if (H.current) {
        H.current = false;
        j.current = Date.now();

        if (X.current < 1.1) {
          ot();
        }

        return;
      }
      if (X.current > 1) {
        v(false);
        return;
      }
      if (L.current > 1 || V.current) {
        v(false);
        r(0);
        y(1);
        m.current = null;
        return;
      }
      if (Date.now() - j.current < 300) {
        v(false);
        r(0);
        y(1);
        m.current = null;
        return;
      }
      if (p) {
        v(false);

        if (!G.current) {
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
          if (m.current === "y") {
            Q();
          }
        }
        m.current = null;
      }
    }
  }, [
    isMobile,
    p,
    currentIndex,
    w,
    l,
    imagesCount,
    Q,
    onIndexChange,
    onClose,
    setIsAnimating,
    ot,
  ]);

  const ft = T_1(() => {
    const c = I.current ?? currentIndex;
    const o = imageSizes[c] || { width: 600, height: 400 };
    if (isAnimating && q !== null) {
      const d = imageSizes[q] || o;
      return { width: d.width, height: d.height };
    }
    if (p && m.current === "x" && w !== 0) {
      const d = w < 0 ? Math.min(c + 1, imagesCount - 1) : Math.max(c - 1, 0);
      if (d === c) {
        return o;
      }
      const E = imageSizes[d] || o;
      const O = o.width / 2 + E.width / 2;
      const st = Math.min(Math.abs(w) / O, 1);
      return {
        width: o.width + (E.width - o.width) * st,
        height: o.height + (E.height - o.height) * st,
      };
    }
    return o;
  }, [imageSizes, currentIndex, isAnimating, q, p, w, imagesCount]);

  const dt = q(() => {
    setIsAnimating(true);
    r(window.innerHeight);
    y(0);
  }, [setIsAnimating]);

  return {
    offsetX: w,
    offsetY: l,
    isDragging: p,
    opacity: $,
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
const Yt = "bHm4";
const Xt = "aaMT";
const Lt = "STys";
const It = "VFa7";
const Pt = "C514";
const zt = "j5k3";
const Ct = "luYR";
const Ht = "Nx2i";
const At = "YQZ3";
const Ot = "nmsY";
const _t = "v8Qo";
const Wt = "Tt2Q";
const Vt = "Dw7d";
const Gt = "GT1Q";
const Bt = "iH14";
const Zt = "QKiu";

const N = {
  viewer: Yt,
  transitioning: Xt,
  windowContainer: Lt,
  mobileContainer: It,
  mobileSlide: Pt,
  closing: zt,
  slide: Ct,
  backdrop: Ht,
  dots: At,
  navArea: Ot,
  track: _t,
  mobileTrack: Wt,
  navLeft: Vt,
  navRight: Gt,
  dot: Bt,
  active: Zt,
};

function Ft({ currentIndex, total, onPrev, onNext }) {
  return total <= 1
    ? null
    : a(m, {
        children: [
          a("button", {
            className: `${N.navArea} ${N.navLeft}`,
            onClick: onPrev,
            disabled: currentIndex === 0,
            children: a(I, { size: 24 }),
          }),
          a("button", {
            className: `${N.navArea} ${N.navRight}`,
            onClick: onNext,
            disabled: currentIndex === total - 1,
            children: a(I_1, { size: 24 }),
          }),
        ],
      });
}
function Qt({ total, currentIndex, onDotClick }) {
  return total <= 1
    ? null
    : a("div", {
        className: N.dots,
        children: Array.from({ length: total }, (s, a) =>
          a(
            "button",
            {
              className: `${N.dot} ${a === currentIndex ? N.active : ""}`,
              onClick: () => onDotClick(a),
            },
            a
          )
        ),
      });
}
const Ut = 2;
function qt({
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
    className: N.windowContainer,
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
      className: N.track,
      style: {
        transform: `translateX(${-u + offsetX}px)`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((l, r) => {
        const p = Math.abs(r - currentIndex) <= Ut;
        const e_r = imageSizes[r];
        const $ = r === currentIndex;
        return offsetY(
          "div",
          {
            className: N.slide,
            onClick: onImageClick,
            style: e_r
              ? { width: `${e_r.width}px`, height: `${e_r.height}px` }
              : undefined,
            "data-active-slide": $ ? "" : undefined,
            children:
              p &&
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
    className: N.mobileContainer,
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
      className: N.mobileTrack,
      style: {
        transform: `translateX(calc(-${currentIndex * 100}% + ${offsetX}px))`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((u, l) => {
        const r = Math.abs(l - currentIndex) <= Kt;
        const p = l === currentIndex;
        const e_l = imageSizes[l];
        const $ = e_l
          ? { width: `${e_l.width}px`, height: `${e_l.height}px` }
          : {};

        if (p && zoom.scale !== 1) {
          $.transform = `translate(${zoom.panX}px, ${zoom.panY}px) scale(${zoom.scale})`;

          $.transition = zoom.isAnimating
            ? "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
            : "none";
        }

        return offsetY(
          "div",
          {
            className: N.mobileSlide,
            onClick: onImageClick,
            "data-active-slide": p ? "" : undefined,
            children:
              r &&
              offsetY("img", {
                src: u.url,
                alt: "",
                draggable: false,
                decoding: p ? "sync" : "async",
                loading: p ? "eager" : "lazy",
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
const pt = "cubic-bezier(0.32, 0.72, 0, 1)";
function Jt(t, e) {
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
  const l = Dt(images);
  const r = $t({ initialIndex: initialIndex, total: images.length });
  St();

  const p = q(() => {
    const i_current = i.current;
    return i_current
      ? i_current.querySelector("[data-active-slide] img")
      : null;
  }, []);

  const v = q(
    (h) => {
      const S = p();
      if (!S) {
        return null;
      }
      const f = S.getBoundingClientRect();
      if (f.width === 0 || f.height === 0) {
        return null;
      }
      const Y = h.hiddenLeft ?? 0;
      const nt = h.hiddenTop ?? 0;
      const K = h.hiddenRight ?? 0;
      const rt = h.hiddenBottom ?? 0;
      const C = h.width + Y + K;
      const X = h.height + nt + rt;
      const W = (Y / C) * f.width;
      const H = (nt / X) * f.height;
      const V = (K / C) * f.width;
      const j = (rt / X) * f.height;
      const L = f.width - W - V;
      const J = f.height - H - j;
      const P = Math.max(h.width / L, h.height / J);
      const tt = h.width / P;
      const et = h.height / P;
      const z = Math.max(0, (L - tt) / 2);
      const m = Math.max(0, (J - et) / 2);
      const A = W + z;
      const k = H + m;
      const I = V + z;
      const G = j + m;
      const B = (A + (f.width - I)) / 2;
      const Z = (k + (f.height - G)) / 2;
      const ot = f.left + f.width / 2;
      const F = f.top + f.height / 2;
      const Q = ot + (B - f.width / 2) * P;
      const it = F + (Z - f.height / 2) * P;
      const at = h.left + h.width / 2;
      const ct = h.top + h.height / 2;
      const ut = at - Q;
      const lt = ct - it;
      const ht = `translate(${ut}px, ${lt}px) scale(${P})`;
      const ft = Jt(h.borderRadius, P);
      const dt = `inset(${k}px ${I}px ${G}px ${A}px round ${ft})`;
      return { transform: ht, clipPath: dt };
    },
    [p]
  );

  const $ = q(
    (h = false) => {
      if (g) {
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

      b(true);

      if (S) {
        const f = v(S);
        const Y = p();

        if (f && Y) {
          Y.animate(
            [
              { transform: "none", clipPath: "inset(0px round 0px)" },
              { transform: f.transform, clipPath: f.clipPath },
            ],
            { duration: wt, easing: pt, fill: "forwards" }
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
      p,
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

  Nt({ onClose: $, onPrev: r.goToPrev, onNext: r.goToNext });

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
      const f = new Image();
      f.decoding = "async";
      f.src = S.url;
    }
  }, [images, r.currentIndex]);

  J(() => {
    if (!sourceRect) {
      return;
    }
    const h = p();
    if (!h) {
      return;
    }
    const S = v(sourceRect);
    if (!S) {
      return;
    }

    const f = h.animate(
      [
        { transform: S.transform, clipPath: S.clipPath },
        { transform: "none", clipPath: "inset(0px round 0px)" },
      ],
      { duration: wt, easing: pt }
    );

    const Y = () => w(false);

    f.addEventListener("finish", Y, { once: true });
    f.addEventListener("cancel", Y, { once: true });

    return () => {
      f.cancel();
    };
  }, []);

  const q = q(
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

  const _ = q(() => {
    if (y.wasDragging.current) {
      y.wasDragging.current = false;
      return;
    }
    $(u);
  }, [$, u]);

  return $(
    onClose("div", {
      ref: i,
      className: `${N.viewer} ${g ? N.closing : ""} ${
        M ? N.transitioning : ""
      }`,
      style: {
        "--opacity": y.opacity,
        "--opacity-transition": r.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: q,
      children: [
        onClose("div", { className: N.backdrop, "aria-hidden": true }),
        !u &&
          onClose(qt, {
            images: images,
            imageSizes: l,
            currentIndex: r.currentIndex,
            offsetX: y.offsetX,
            offsetY: y.offsetY,
            isAnimating: r.isAnimating,
            displaySize: y.displaySize,
            handlers: y.desktopHandlers,
            onImageClick: _,
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
            onImageClick: _,
            zoom: y.zoom,
          }),
        !u &&
          onClose(Ft, {
            currentIndex: r.currentIndex,
            total: images.length,
            onPrev: r.goToPrev,
            onNext: r.goToNext,
          }),
        onClose(Qt, {
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
