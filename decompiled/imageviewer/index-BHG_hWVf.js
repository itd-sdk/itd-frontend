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
  $,
} from "./index-DuQT229k.js";
import { I } from "./IconChevronLeft-CbQdWkHt.js";
import { I as I_1 } from "./IconChevronRight-DoykIv9y.js";
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
      t._sentryDebugIds[e] = "6b5f3a66-e883-4925-a194-bca8f87df494";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-6b5f3a66-e883-4925-a194-bca8f87df494";
    }
  } catch {}
})();
function Dt(t) {
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
function Nt() {
  y(() => {
    const document_documentElement = document.documentElement;
    const e = document_documentElement.style.overflow;
    document_documentElement.style.overflow = "hidden";

    return () => {
      document_documentElement.style.overflow = e;
    };
  }, []);
}
function St({ onClose, onPrev, onNext }) {
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
  const [$, y] = d(1);
  const [K, W] = d(null);
  const [h, N] = d(1);
  const [f, I] = d(0);
  const [nt, j] = d(0);
  const [rt, z] = d(false);
  const L = A(1);
  const _ = A({ x: 0, y: 0 });
  const A = A(false);
  const V = A(false);
  const J = A(0);
  const X = A(0);
  const Q = A(0);
  const C = A(1);
  const tt = A({ x: 0, y: 0 });
  const et = A({ x: 0, y: 0 });
  const P = A({ x: 0, y: 0 });
  const p = A(null);
  const O = A(false);
  const k = A(null);
  const Y = A(null);
  const B = A(false);

  const G = q_1((c) => {
    L.current = c;
    N(c);
  }, []);

  const U = q_1((c, o) => {
    _.current = { x: c, y: o };
    I(c);
    j(o);
  }, []);

  const ot = q_1(() => {
    z(true);
    G(1);
    U(0, 0);

    setTimeout(() => z(false), 300);
  }, [G, U]);

  y(() => {
    L.current = 1;
    _.current = { x: 0, y: 0 };
    N(1);
    I(0);
    j(0);
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

  const F = q_1(
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
        Y.current !== null && (onIndexChange(Y.current), (Y.current = null));
        setIsAnimating(false);
        W(null);
        u(0);
        v(true);
        O.current = false;
        P.current = { x: c.clientX, y: c.clientY };
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
      const o = c.clientX - P.current.x;
      const d = c.clientY - P.current.y;

      if (!p.current && (Math.abs(o) > 10 || Math.abs(d) > 10)) {
        p.current = Math.abs(o) > Math.abs(d) ? "x" : "y";
        O.current = true;
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
        const o = Y.current ?? currentIndex;
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
          Y.current = d;

          k.current = window.setTimeout(() => {
            k.current = null;
            setIsAnimating(false);
            W(null);
            u(0);
            Y.current = null;
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
          F();
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
    F,
    onIndexChange,
    setIsAnimating,
  ]);

  const ut = q_1(
    (c) => {
      if (!isMobile) {
        return;
      }
      X.current = Math.max(X.current, c.touches.length);

      if (c.touches.length === 2) {
        A.current = true;
        V.current = true;
        Q.current = pt(c.touches[0], c.touches[1]);
        C.current = L.current;
        v(false);
        p.current = null;
        u(0);
        r(0);
        y(1);
        z(false);
        return;
      }

      if (L.current > 1) {
        X.current = 1;
        tt.current = { x: c.touches[0].clientX, y: c.touches[0].clientY };
        et.current = { ..._.current };
        v(true);
        O.current = false;
        p.current = null;
        z(false);
        const c_target_1 = c.target;
        B.current =
          c_target_1.tagName === "IMG" &&
          c_target_1.hasAttribute("data-viewer-image");
        return;
      }
      X.current = 1;
      V.current = false;
      cancelAnimation();

      if (k.current) {
        clearTimeout(k.current);
        k.current = null;
      }

      setIsAnimating(false);
      u(0);
      const c_target = c.target;
      B.current =
        c_target.tagName === "IMG" &&
        c_target.hasAttribute("data-viewer-image");
      P.current = { x: c.touches[0].clientX, y: c.touches[0].clientY };
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
      X.current = Math.max(X.current, c.touches.length);

      if (A.current && c.touches.length >= 2) {
        const E = pt(c.touches[0], c.touches[1]);
        const H = C.current * (E / Q.current);
        G(Math.min(Math.max(H, 0.5), 5));
        return;
      }

      if (L.current > 1 && m && !A.current) {
        const E = c.touches[0].clientX - tt.current.x;
        const H = c.touches[0].clientY - tt.current.y;

        if (Math.abs(E) > 5 || Math.abs(H) > 5) {
          O.current = true;
        }

        U(et.current.x + E, et.current.y + H);
        return;
      }
      if (!m) {
        return;
      }
      const o = c.touches[0].clientX - P.current.x;
      const d = c.touches[0].clientY - P.current.y;

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
    [isMobile, m, G, U, Z]
  );

  const ht = q_1(() => {
    if (isMobile) {
      if (A.current) {
        A.current = false;
        J.current = Date.now();

        if (L.current < 1.1) {
          ot();
        }

        return;
      }
      if (L.current > 1) {
        v(false);
        return;
      }
      if (X.current > 1 || V.current) {
        v(false);
        r(0);
        y(1);
        p.current = null;
        return;
      }
      if (Date.now() - J.current < 300) {
        v(false);
        r(0);
        y(1);
        p.current = null;
        return;
      }
      if (m) {
        v(false);

        if (!B.current) {
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
            F();
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
    F,
    onIndexChange,
    onClose,
    setIsAnimating,
    ot,
  ]);

  const ft = T_1(() => {
    const c = Y.current ?? currentIndex;
    const o = imageSizes[c] || { width: 600, height: 400 };
    if (isAnimating && K !== null) {
      const d = imageSizes[K] || o;
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
  }, [imageSizes, currentIndex, isAnimating, K, m, w, imagesCount]);

  const dt = q_1(() => {
    setIsAnimating(true);
    r(window.innerHeight);
    y(0);
  }, [setIsAnimating]);

  return {
    offsetX: w,
    offsetY: l,
    isDragging: m,
    opacity: $,
    wasDragging: O,
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
const It = "V98C";
const Lt = "MCaE";
const Xt = "LkWw";
const Yt = "UpuN";
const Ct = "YFnI";
const Pt = "iPLr";
const zt = "z1Cm";
const At = "xU0K";
const Ot = "gRoO";
const Ht = "mvdA";
const Wt = "IATb";
const _t = "o38o";
const Vt = "lUIf";
const Bt = "QgCj";
const Gt = "h2vZ";
const Ut = "dTvW";

const S = {
  viewer: It,
  transitioning: Lt,
  windowContainer: Xt,
  mobileContainer: Yt,
  mobileSlide: Ct,
  closing: Pt,
  slide: zt,
  backdrop: At,
  dots: Ot,
  navArea: Ht,
  track: Wt,
  mobileTrack: _t,
  navLeft: Vt,
  navRight: Bt,
  dot: Gt,
  active: Ut,
};

function Zt({ currentIndex, total, onPrev, onNext }) {
  return total <= 1
    ? null
    : a(m, {
        children: [
          a("button", {
            className: `${S.navArea} ${S.navLeft}`,
            onClick: onPrev,
            disabled: currentIndex === 0,
            children: a(I, { size: 24 }),
          }),
          a("button", {
            className: `${S.navArea} ${S.navRight}`,
            onClick: onNext,
            disabled: currentIndex === total - 1,
            children: a(I_1, { size: 24 }),
          }),
        ],
      });
}
function Ft({ total, currentIndex, onDotClick }) {
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
const qt = 2;
function Kt({
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
      ref: w,
      className: S.track,
      style: {
        transform: `translateX(${-u + offsetX}px)`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((l, r) => {
        const m = Math.abs(r - currentIndex) <= qt;
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
              m &&
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
const jt = 2;
function Jt({
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
        const r = Math.abs(l - currentIndex) <= jt;
        const m = l === currentIndex;
        const e_l = imageSizes[l];
        const $ = e_l
          ? { width: `${e_l.width}px`, height: `${e_l.height}px` }
          : {};

        if (m && zoom.scale !== 1) {
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
  const l = Dt(images);
  const r = $t({ initialIndex: initialIndex, total: images.length });
  Nt();

  const m = q_1(() => {
    const i_current = i.current;
    return i_current
      ? i_current.querySelector("[data-active-slide] img")
      : null;
  }, []);

  const v = q_1(
    (h) => {
      const N = m();
      if (!N) {
        return null;
      }
      const f = N.getBoundingClientRect();
      if (f.width === 0 || f.height === 0) {
        return null;
      }
      const I = h.hiddenLeft ?? 0;
      const nt = h.hiddenTop ?? 0;
      const j = h.hiddenRight ?? 0;
      const rt = h.hiddenBottom ?? 0;
      const z = h.width + I + j;
      const L = h.height + nt + rt;
      const _ = (I / z) * f.width;
      const A = (nt / L) * f.height;
      const V = (j / z) * f.width;
      const J = (rt / L) * f.height;
      const X = f.width - _ - V;
      const Q = f.height - A - J;
      const C = Math.max(h.width / X, h.height / Q);
      const tt = h.width / C;
      const et = h.height / C;
      const P = Math.max(0, (X - tt) / 2);
      const p = Math.max(0, (Q - et) / 2);
      const O = _ + P;
      const k = A + p;
      const Y = V + P;
      const B = J + p;
      const G = (O + (f.width - Y)) / 2;
      const U = (k + (f.height - B)) / 2;
      const ot = f.left + f.width / 2;
      const Z = f.top + f.height / 2;
      const F = ot + (G - f.width / 2) * C;
      const it = Z + (U - f.height / 2) * C;
      const at = h.left + h.width / 2;
      const ct = h.top + h.height / 2;
      const ut = at - F;
      const lt = ct - it;
      const ht = `translate(${ut}px, ${lt}px) scale(${C})`;
      const ft = Qt(h.borderRadius, C);
      const dt = `inset(${k}px ${Y}px ${B}px ${O}px round ${ft})`;
      return { transform: ht, clipPath: dt };
    },
    [m]
  );

  const $ = q_1(
    (h = false) => {
      if (g) {
        return;
      }
      let N = null;

      if (r.currentIndex === initialIndex) {
        N = sourceRect;
      } else if (resolveSourceRect) {
        N = resolveSourceRect(r.currentIndex);
      }

      if (h && u && !N) {
        y.animateClose();
        setTimeout(onClose, 150);
        return;
      }

      b(true);

      if (N) {
        const f = v(N);
        const I = m();

        if (f && I) {
          I.animate(
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
    onClose: $,
  });

  St({ onClose: $, onPrev: r.goToPrev, onNext: r.goToNext });

  y(() => {
    const h = [
      images[r.currentIndex - 1],
      images[r.currentIndex + 1],
      images[r.currentIndex - 2],
      images[r.currentIndex + 2],
    ];
    for (const N of h) {
      if (!N) {
        continue;
      }
      const f = new Image();
      f.decoding = "async";
      f.src = N.url;
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
    const N = v(sourceRect);
    if (!N) {
      return;
    }

    const f = h.animate(
      [
        { transform: N.transform, clipPath: N.clipPath },
        { transform: "none", clipPath: "inset(0px round 0px)" },
      ],
      { duration: wt, easing: mt }
    );

    const I = () => w(false);

    f.addEventListener("finish", I, { once: true });
    f.addEventListener("cancel", I, { once: true });

    return () => {
      f.cancel();
    };
  }, []);

  const K = q_1(
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

  const W = q_1(() => {
    if (y.wasDragging.current) {
      y.wasDragging.current = false;
      return;
    }
    $(u);
  }, [$, u]);

  return $(
    onClose("div", {
      ref: i,
      className: `${S.viewer} ${g ? S.closing : ""} ${
        M ? S.transitioning : ""
      }`,
      style: {
        "--opacity": y.opacity,
        "--opacity-transition": r.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: K,
      children: [
        onClose("div", { className: S.backdrop, "aria-hidden": true }),
        !u &&
          onClose(Kt, {
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
          onClose(Jt, {
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
        onClose(Ft, {
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
