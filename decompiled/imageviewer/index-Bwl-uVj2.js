import {
  a,
  q,
  d,
  y,
  A,
  q as q_1,
  m,
  d as d_1,
  J,
  $,
} from "./index-BAlLDjSl.js";
import { I } from "./IconChevronLeft-DL9-Okiv.js";
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
      t._sentryDebugIds[e] = "503b91c3-dbd0-4790-9cd2-f6f8fddb6841";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-503b91c3-dbd0-4790-9cd2-f6f8fddb6841";
    }
  } catch {}
})();
const kt = ({ size = 24 }) =>
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
function Dt({ onClose, onPrev, onNext }) {
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
const Lt = 0.3;
function pt(t, e) {
  const n = t.clientX - e.clientX;
  const s = t.clientY - e.clientY;
  return Math.sqrt(n * n + s * s);
}
function Et({
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
  const [q, W] = d(null);
  const [h, N] = d(1);
  const [d, R] = d(0);
  const [nt, j] = d(0);
  const [rt, z] = d(false);
  const X = A(1);
  const _ = A({ x: 0, y: 0 });
  const H = A(false);
  const V = A(false);
  const J = A(0);
  const Y = A(0);
  const Q = A(0);
  const P = A(1);
  const tt = A({ x: 0, y: 0 });
  const et = A({ x: 0, y: 0 });
  const C = A({ x: 0, y: 0 });
  const p = A(null);
  const O = A(false);
  const k = A(null);
  const I = A(null);
  const B = A(false);

  const G = q((c) => {
    X.current = c;
    N(c);
  }, []);

  const F = q((c, o) => {
    _.current = { x: c, y: o };
    R(c);
    j(o);
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
    N(1);
    R(0);
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
        W(null);
        u(0);
        v(true);
        O.current = false;
        C.current = { x: c.clientX, y: c.clientY };
        p.current = null;
        c.preventDefault();
      }
    },
    [isMobile, imagesCount, cancelAnimation, onIndexChange, setIsAnimating]
  );

  const at = q(
    (c) => {
      if (!m || isMobile) {
        return;
      }
      const o = c.clientX - C.current.x;
      const f = c.clientY - C.current.y;

      if (!p.current && (Math.abs(o) > 10 || Math.abs(f) > 10)) {
        p.current = Math.abs(o) > Math.abs(f) ? "x" : "y";
        O.current = true;
      }

      if (p.current === "x") {
        u(Z(o));
      } else if (p.current === "y") {
        r(f);
        const L = Math.min(Math.abs(f) / gt, 1);
        y(1 - L * 0.5);
      }
    },
    [m, isMobile, Z]
  );

  const ct = q(() => {
    if (!(!m || isMobile)) {
      v(false);

      if (p.current === "x") {
        const o = I.current ?? currentIndex;
        let f = o;

        if (w < -80 && o < imagesCount - 1) {
          f = o + 1;
        } else if (w > 80 && o > 0) {
          f = o - 1;
        }

        if (f !== o) {
          const L = imageSizes[f]?.width || 0;
          const A = imageSizes[o]?.width || 0;
          const st = f > o ? -A : L;
          setIsAnimating(true);
          W(f);
          u(st);
          I.current = f;

          k.current = window.setTimeout(() => {
            k.current = null;
            setIsAnimating(false);
            W(null);
            u(0);
            I.current = null;
            onIndexChange(f);
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
          K();
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
        H.current = true;
        V.current = true;
        Q.current = pt(c.touches[0], c.touches[1]);
        P.current = X.current;
        v(false);
        p.current = null;
        u(0);
        r(0);
        y(1);
        z(false);
        return;
      }

      if (X.current > 1) {
        Y.current = 1;
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
      Y.current = 1;
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
      C.current = { x: c.touches[0].clientX, y: c.touches[0].clientY };
      p.current = null;
      v(true);
    },
    [isMobile, cancelAnimation, setIsAnimating]
  );

  const lt = q(
    (c) => {
      if (!isMobile) {
        return;
      }
      Y.current = Math.max(Y.current, c.touches.length);

      if (H.current && c.touches.length >= 2) {
        const L = pt(c.touches[0], c.touches[1]);
        const A = P.current * (L / Q.current);
        G(Math.min(Math.max(A, 0.5), 5));
        return;
      }

      if (X.current > 1 && m && !H.current) {
        const L = c.touches[0].clientX - tt.current.x;
        const A = c.touches[0].clientY - tt.current.y;

        if (Math.abs(L) > 5 || Math.abs(A) > 5) {
          O.current = true;
        }

        F(et.current.x + L, et.current.y + A);
        return;
      }
      if (!m) {
        return;
      }
      const o = c.touches[0].clientX - C.current.x;
      const f = c.touches[0].clientY - C.current.y;

      if (!p.current && (Math.abs(o) > 10 || Math.abs(f) > 10)) {
        p.current = Math.abs(o) > Math.abs(f) ? "x" : "y";
      }

      if (p.current === "x") {
        u(Z(o));
      } else if (p.current === "y") {
        r(f);
        const L = Math.min(Math.abs(f) / gt, 1);
        y(Math.round((1 - L * 0.7) * 100) / 100);
      }
    },
    [isMobile, m, G, F, Z]
  );

  const ht = q(() => {
    if (isMobile) {
      if (H.current) {
        H.current = false;
        J.current = Date.now();

        if (X.current < 1.1) {
          ot();
        }

        return;
      }
      if (X.current > 1) {
        v(false);
        return;
      }
      if (Y.current > 1 || V.current) {
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
            K();
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
    K,
    onIndexChange,
    onClose,
    setIsAnimating,
    ot,
  ]);

  const dt = q_1(() => {
    const c = I.current ?? currentIndex;
    const o = imageSizes[c] || { width: 600, height: 400 };
    if (isAnimating && q !== null) {
      const f = imageSizes[q] || o;
      return { width: f.width, height: f.height };
    }
    if (m && p.current === "x" && w !== 0) {
      const f = w < 0 ? Math.min(c + 1, imagesCount - 1) : Math.max(c - 1, 0);
      if (f === c) {
        return o;
      }
      const L = imageSizes[f] || o;
      const A = o.width / 2 + L.width / 2;
      const st = Math.min(Math.abs(w) / A, 1);
      return {
        width: o.width + (L.width - o.width) * st,
        height: o.height + (L.height - o.height) * st,
      };
    }
    return o;
  }, [imageSizes, currentIndex, isAnimating, q, m, w, imagesCount]);

  const ft = q(() => {
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
const Rt = "hL6F";
const Xt = "SChH";
const Yt = "FgKI";
const It = "VuHX";
const Pt = "Sws1";
const Ct = "Va5W";
const zt = "zNL7";
const Ht = "aO5J";
const Ot = "PxCs";
const At = "bxrg";
const Wt = "mG95";
const _t = "KnI4";
const Vt = "gLhR";
const Bt = "YM3V";
const Gt = "RoN9";
const Ft = "Qfj0";

const D = {
  viewer: Rt,
  transitioning: Xt,
  windowContainer: Yt,
  mobileContainer: It,
  mobileSlide: Pt,
  closing: Ct,
  slide: zt,
  backdrop: Ht,
  dots: Ot,
  navArea: At,
  track: Wt,
  mobileTrack: _t,
  navLeft: Vt,
  navRight: Bt,
  dot: Gt,
  active: Ft,
};

function Zt({ currentIndex, total, onPrev, onNext }) {
  return total <= 1
    ? null
    : a(m, {
        children: [
          a("button", {
            className: `${D.navArea} ${D.navLeft}`,
            onClick: onPrev,
            disabled: currentIndex === 0,
            children: a(I, { size: 24 }),
          }),
          a("button", {
            className: `${D.navArea} ${D.navRight}`,
            onClick: onNext,
            disabled: currentIndex === total - 1,
            children: a(kt, { size: 24 }),
          }),
        ],
      });
}
function Kt({ total, currentIndex, onDotClick }) {
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
      ref: w,
      className: D.track,
      style: {
        transform: `translateX(${-u + offsetX}px)`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((l, r) => {
        const m = Math.abs(r - currentIndex) <= Ut;
        const e_r = imageSizes[r];
        const $ = r === currentIndex;
        return offsetY(
          "div",
          {
            className: D.slide,
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
            className: D.mobileSlide,
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
  const u = d_1();
  const l = St(images);
  const r = $t({ initialIndex: initialIndex, total: images.length });
  Nt();

  const m = q(() => {
    const i_current = i.current;
    return i_current
      ? i_current.querySelector("[data-active-slide] img")
      : null;
  }, []);

  const v = q(
    (h) => {
      const N = m();
      if (!N) {
        return null;
      }
      const d = N.getBoundingClientRect();
      if (d.width === 0 || d.height === 0) {
        return null;
      }
      const R = h.hiddenLeft ?? 0;
      const nt = h.hiddenTop ?? 0;
      const j = h.hiddenRight ?? 0;
      const rt = h.hiddenBottom ?? 0;
      const z = h.width + R + j;
      const X = h.height + nt + rt;
      const _ = (R / z) * d.width;
      const H = (nt / X) * d.height;
      const V = (j / z) * d.width;
      const J = (rt / X) * d.height;
      const Y = d.width - _ - V;
      const Q = d.height - H - J;
      const P = Math.max(h.width / Y, h.height / Q);
      const tt = h.width / P;
      const et = h.height / P;
      const C = Math.max(0, (Y - tt) / 2);
      const p = Math.max(0, (Q - et) / 2);
      const O = _ + C;
      const k = H + p;
      const I = V + C;
      const B = J + p;
      const G = (O + (d.width - I)) / 2;
      const F = (k + (d.height - B)) / 2;
      const ot = d.left + d.width / 2;
      const Z = d.top + d.height / 2;
      const K = ot + (G - d.width / 2) * P;
      const it = Z + (F - d.height / 2) * P;
      const at = h.left + h.width / 2;
      const ct = h.top + h.height / 2;
      const ut = at - K;
      const lt = ct - it;
      const ht = `translate(${ut}px, ${lt}px) scale(${P})`;
      const dt = Qt(h.borderRadius, P);
      const ft = `inset(${k}px ${I}px ${B}px ${O}px round ${dt})`;
      return { transform: ht, clipPath: ft };
    },
    [m]
  );

  const $ = q(
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
        const d = v(N);
        const R = m();

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

  const y = Et({
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

  Dt({ onClose: $, onPrev: r.goToPrev, onNext: r.goToNext });

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
      const d = new Image();
      d.decoding = "async";
      d.src = N.url;
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

    const d = h.animate(
      [
        { transform: N.transform, clipPath: N.clipPath },
        { transform: "none", clipPath: "inset(0px round 0px)" },
      ],
      { duration: wt, easing: mt }
    );

    const R = () => w(false);

    d.addEventListener("finish", R, { once: true });
    d.addEventListener("cancel", R, { once: true });

    return () => {
      d.cancel();
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

  const W = q(() => {
    if (y.wasDragging.current) {
      y.wasDragging.current = false;
      return;
    }
    $(u);
  }, [$, u]);

  return $(
    onClose("div", {
      ref: i,
      className: `${D.viewer} ${g ? D.closing : ""} ${
        M ? D.transitioning : ""
      }`,
      style: {
        "--opacity": y.opacity,
        "--opacity-transition": r.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: q,
      children: [
        onClose("div", { className: D.backdrop, "aria-hidden": true }),
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
        onClose(Kt, {
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
