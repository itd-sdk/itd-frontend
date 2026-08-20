import { q, d, y, A, T, u, k, E, _ as __1, $ } from "./index-DDTOXJaD.js";
import { u as u_1 } from "./useBodyScrollLock-BeyLdAVZ.js";
import { I } from "./IconChevronLeft-6Kf2Hf_x.js";
import { I as I_1 } from "./IconChevronRight--Up5c7Ds.js";
(() => {
  try {
    const e =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "1.1.2" };
    const n = new e.Error().stack;

    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "171abfb7-ac68-41c7-87fa-f01f22b18cbb";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-171abfb7-ac68-41c7-87fa-f01f22b18cbb";
    }
  } catch {}
})();
const oe = 100;
function ce(e, n) {
  const r = q(() => {
    const c = n ? window.innerWidth : window.innerWidth - oe * 2;
    const window_innerHeight = window.innerHeight;
    return e.map((l) => {
      if (!l.width || !l.height) {
        return { width: c, height: window_innerHeight };
      }
      const y = Math.min(c / l.width, window_innerHeight / l.height);
      return { width: l.width * y, height: l.height * y };
    });
  }, [e, n]);

  const [o, h] = d(r);

  y(() => {
    h(r());
    const c = () => h(r());
    window.addEventListener("resize", c);

    return () => window.removeEventListener("resize", c);
  }, [r]);

  return o;
}
function se({ onClose, onPrev, onNext }) {
  y(() => {
    const o = (h) => {
      switch (h.key) {
        case "Escape": {
          h.preventDefault();
          h.stopPropagation();
          onClose();
          break;
        }
        case "ArrowLeft": {
          h.preventDefault();
          h.stopPropagation();
          onPrev();
          break;
        }
        case "ArrowRight": {
          h.preventDefault();
          h.stopPropagation();
          onNext();
          break;
        }
      }
    };
    window.addEventListener("keydown", o, true);

    return () => window.removeEventListener("keydown", o, true);
  }, [onClose, onPrev, onNext]);
}
function ie({ initialIndex, total }) {
  const [r, o] = d(initialIndex);
  const [h, c] = d(false);
  const p = A(null);

  const l = q(() => {
    if (p.current) {
      clearTimeout(p.current);
      p.current = null;
      c(false);
    }
  }, []);

  const y = q(
    (a) => {
      if (a !== r && a >= 0 && a < total) {
        l();
        c(true);
        o(a);

        p.current = window.setTimeout(() => {
          p.current = null;
          c(false);
        }, 500);
      }
    },
    [r, total, l]
  );

  const $ = q(() => {
    if (r > 0) {
      y(r - 1);
    }
  }, [r, y]);

  const D = q(() => {
    if (r < total - 1) {
      y(r + 1);
    }
  }, [r, total, y]);

  return {
    currentIndex: r,
    setCurrentIndex: o,
    isAnimating: h,
    setIsAnimating: c,
    cancelAnimation: l,
    goToIndex: y,
    goToPrev: $,
    goToNext: D,
  };
}
const Pt = 150;
const ae = 0.3;
function Nt(e, n) {
  const r = e.clientX - n.clientX;
  const o = e.clientY - n.clientY;
  return Math.sqrt(r * r + o * o);
}
function ue({
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
  const [a, d] = d(0);
  const [M, k] = d(0);
  const [X, S] = d(false);
  const [v, Z] = d(1);
  const [w, Y] = d(null);
  const [U, I] = d(null);
  const [it, dt] = d(1);
  const [ht, pt] = d(0);
  const [ft, at] = d(0);
  const [ut, j] = d(false);
  const W = A(1);
  const G = A({ x: 0, y: 0 });
  const T = A(false);
  const E = A(false);
  const q = A(0);
  const H = A(0);
  const K = A(0);
  const V = A(1);
  const et = A({ x: 0, y: 0 });
  const rt = A({ x: 0, y: 0 });
  const tt = A({ x: 0, y: 0 });
  const xt = A(0);
  const P = A(0);
  const m = A(null);
  const O = A(false);
  const R = A(null);
  const B = A(null);
  const mt = A(false);

  const gt = q((f) => {
    W.current = f;
    dt(f);
  }, []);

  const ot = q((f, u) => {
    G.current = { x: f, y: u };
    pt(f);
    at(u);
  }, []);

  const vt = q(() => {
    j(true);
    gt(1);
    ot(0, 0);

    setTimeout(() => j(false), 300);
  }, [gt, ot]);

  const Mt = q(
    (f, u, x) => {
      const r_e = imageSizes[e];
      if (!r_e) {
        return { x: 0, y: 0 };
      }
      const A = Math.max(0, (r_e.width * x - window.innerWidth) / 2);
      const F = Math.max(0, (r_e.height * x - window.innerHeight) / 2);
      return {
        x: Math.max(-A, Math.min(A, f)),
        y: Math.max(-F, Math.min(F, u)),
      };
    },
    [imageSizes, currentIndex]
  );

  onClose(() => {
    W.current = 1;
    G.current = { x: 0, y: 0 };
    dt(1);
    pt(0);
    at(0);
    j(false);
  }, [currentIndex]);

  onClose(
    () => () => {
      if (R.current) {
        clearTimeout(R.current);
        R.current = null;
      }
    },
    []
  );

  const wt = q(
    (f) => {
      let u = f;

      if (
        (currentIndex === 0 && u > 0) ||
        (currentIndex === imagesCount - 1 && u < 0)
      ) {
        u *= ae;
      }

      return u;
    },
    [currentIndex, imagesCount]
  );

  const t = q(
    () =>
      Math.abs(M) > Pt
        ? (onClose(isMobile), true)
        : (setIsAnimating(true),
          k(0),
          d(0),
          Z(1),
          (R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
          }, 300)),
          false),
    [M, isMobile, onClose, setIsAnimating]
  );

  const i = q(
    (f) => {
      if (isMobile || f.button !== 0) {
        return;
      }
      const u = B.current ?? currentIndex;
      let x = 0;
      const b = trackRef?.current;
      if (b) {
        const A = getComputedStyle(b).transform;
        if (A && A !== "none") {
          const F = new DOMMatrixReadOnly(A).m41;
          let nt = 0;
          for (let lt = 0; lt < u; lt++) {
            nt += imageSizes[lt]?.width || 0;
          }
          x = F + nt;

          if (Math.abs(x) < 1) {
            x = 0;
          }
        }
      }
      cancelAnimation();

      if (R.current) {
        clearTimeout(R.current);
        R.current = null;
      }

      if (B.current !== null) {
        onIndexChange(B.current);
        B.current = null;
      }

      setIsAnimating(false);
      Y(null);
      I(null);
      xt.current = x;
      P.current = 0;
      d(x);
      S(true);
      O.current = false;
      tt.current = { x: f.clientX, y: f.clientY };
      m.current = null;
      f.preventDefault();
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

  const s = q(
    (f) => {
      if (!X || isMobile) {
        return;
      }
      const u = f.clientX - tt.current.x;
      const x = f.clientY - tt.current.y;

      if (!m.current && (Math.abs(u) > 10 || Math.abs(x) > 10)) {
        m.current = Math.abs(u) > Math.abs(x) ? "x" : "y";
        O.current = true;
        onDragStart?.();
      }

      if (m.current === "x") {
        P.current = u;
        d(wt(xt.current + u));
      } else if (m.current === "y") {
        k(x);
        const b = Math.min(Math.abs(x) / Pt, 1);
        Z(1 - b * 0.5);
      }
    },
    [X, isMobile, wt, onDragStart]
  );

  const N = q(() => {
    if (!(!X || isMobile)) {
      S(false);

      if (m.current === "x") {
        const u = B.current ?? currentIndex;
        const P_current = P.current;
        let b = u;

        if (P_current < -80 && u < imagesCount - 1) {
          b = u + 1;
        } else if (P_current > 80 && u > 0) {
          b = u - 1;
        }

        if (b !== u) {
          const A = imageSizes[b]?.width || 0;
          const F = imageSizes[u]?.width || 0;
          const nt = b > u ? -F : A;
          setIsAnimating(true);
          Y(b);
          d(nt);
          B.current = b;

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
            Y(null);
            d(0);
            B.current = null;
            onIndexChange(b);
          }, 500);
        } else {
          setIsAnimating(true);
          d(0);

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
          }, 300);
        }
      } else {
        if (m.current === "y") {
          t();
        } else if (a !== 0) {
          setIsAnimating(true);
          d(0);

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
          }, 300);
        }
      }

      m.current = null;
    }
  }, [
    X,
    isMobile,
    currentIndex,
    a,
    imagesCount,
    imageSizes,
    t,
    onIndexChange,
    setIsAnimating,
  ]);

  const Q = q(
    (f) => {
      if (!isMobile) {
        return;
      }
      H.current = Math.max(H.current, f.touches.length);

      if (f.touches.length === 2) {
        T.current = true;
        E.current = true;
        K.current = Nt(f.touches[0], f.touches[1]);
        V.current = W.current;
        S(false);
        m.current = null;
        d(0);
        k(0);
        Z(1);
        j(false);
        return;
      }

      if (W.current > 1) {
        H.current = 1;
        et.current = { x: f.touches[0].clientX, y: f.touches[0].clientY };
        rt.current = { ...G.current };
        S(true);
        O.current = false;
        m.current = null;
        j(false);
        const f_target_1 = f.target;
        mt.current =
          f_target_1.tagName === "IMG" &&
          f_target_1.hasAttribute("data-viewer-image");
        return;
      }
      H.current = 1;
      E.current = false;
      cancelAnimation();

      if (R.current) {
        clearTimeout(R.current);
        R.current = null;
      }

      setIsAnimating(false);
      d(0);
      O.current = false;
      const f_target = f.target;
      mt.current =
        f_target.tagName === "IMG" &&
        f_target.hasAttribute("data-viewer-image");
      tt.current = { x: f.touches[0].clientX, y: f.touches[0].clientY };
      m.current = null;
      S(true);
    },
    [isMobile, cancelAnimation, setIsAnimating]
  );

  const ct = q(
    (f) => {
      if (!isMobile) {
        return;
      }
      H.current = Math.max(H.current, f.touches.length);

      if (T.current && f.touches.length >= 2) {
        const b = Nt(f.touches[0], f.touches[1]);
        const A = V.current * (b / K.current);
        const F = Math.min(Math.max(A, 0.5), 5);
        const nt = Mt(G.current.x, G.current.y, F);
        gt(F);
        ot(nt.x, nt.y);
        return;
      }

      if (W.current > 1 && X && !T.current) {
        const b = f.touches[0].clientX - et.current.x;
        const A = f.touches[0].clientY - et.current.y;

        if (Math.abs(b) > 5 || Math.abs(A) > 5) {
          O.current = true;
        }

        const F = Mt(rt.current.x + b, rt.current.y + A, W.current);
        ot(F.x, F.y);
        return;
      }
      if (!X) {
        return;
      }
      const u = f.touches[0].clientX - tt.current.x;
      const x = f.touches[0].clientY - tt.current.y;

      if (!m.current && (Math.abs(u) > 10 || Math.abs(x) > 10)) {
        m.current = Math.abs(u) > Math.abs(x) ? "x" : "y";
        O.current = true;
        onDragStart?.();
      }

      if (m.current === "x") {
        d(wt(u));
      } else if (m.current === "y") {
        k(x);
        const b = Math.min(Math.abs(x) / Pt, 1);
        Z(Math.round((1 - b * 0.7) * 100) / 100);
      }
    },
    [isMobile, X, gt, ot, Mt, wt, onDragStart]
  );

  const st = q(() => {
    if (isMobile) {
      if (T.current) {
        T.current = false;
        q.current = Date.now();

        if (W.current < 1.1) {
          vt();
        }

        return;
      }
      if (W.current > 1) {
        S(false);
        return;
      }
      if (H.current > 1 || E.current) {
        S(false);
        k(0);
        Z(1);
        m.current = null;
        return;
      }
      if (Date.now() - q.current < 300) {
        S(false);
        k(0);
        Z(1);
        m.current = null;
        return;
      }
      if (X) {
        S(false);

        if (!mt.current) {
          if (!m.current) {
            O.current = true;
            onClose(true);
            return;
          }
          if (m.current === "y" && M > 30) {
            O.current = true;
            onClose(true);
            return;
          }
        }

        if (m.current === "x") {
          let u = currentIndex;

          if (a < -50 && currentIndex < imagesCount - 1) {
            u = currentIndex + 1;
          } else if (a > 50 && currentIndex > 0) {
            u = currentIndex - 1;
          }

          setIsAnimating(true);
          d(0);

          if (u !== currentIndex) {
            onIndexChange(u);
          }

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
          }, 500);
        } else {
          if (m.current === "y") {
            t();
          }
        }
        m.current = null;
      }
    }
  }, [
    isMobile,
    X,
    currentIndex,
    a,
    M,
    imagesCount,
    t,
    onIndexChange,
    onClose,
    setIsAnimating,
    vt,
  ]);

  const Tt = q(() => {
    if (isMobile) {
      T.current = false;
      E.current = false;
      H.current = 0;
      m.current = null;
      S(false);
      d(0);
      k(0);
      Z(1);
      setIsAnimating(false);
      W.current < 1.1 && vt();
    }
  }, [isMobile, vt, setIsAnimating]);

  const bt = q(() => {
    const B_current = B.current;
    const u = B_current ?? currentIndex;
    const x = trackRef?.current;
    if (x) {
      const b = getComputedStyle(x).transform;
      if (b && b !== "none") {
        const F = new DOMMatrixReadOnly(b).m41;
        let nt = 0;
        for (let lt = 0; lt < u; lt++) {
          nt += imageSizes[lt]?.width || 0;
        }
        d(F + nt);
      }
      const x_parentElement = x.parentElement;
      if (x_parentElement) {
        const F = x_parentElement.getBoundingClientRect();
        I({ width: F.width, height: F.height });
      }
    }

    if (R.current) {
      clearTimeout(R.current);
      R.current = null;
    }

    if (B_current !== null) {
      onIndexChange(B_current);
      B.current = null;
    }

    setIsAnimating(false);
    Y(null);
    return u;
  }, [currentIndex, imageSizes, trackRef, onIndexChange, setIsAnimating]);

  const yt = q(() => {
    I(null);

    if (a !== 0 || M !== 0 || v !== 1) {
      setIsAnimating(true);
      d(0);
      k(0);
      Z(1);
      R.current && clearTimeout(R.current);

      R.current = window.setTimeout(() => {
        R.current = null;
        setIsAnimating(false);
      }, 300);
    }
  }, [a, M, v, setIsAnimating]);

  const Rt = T(() => {
    if (U) {
      return U;
    }
    const f = B.current ?? currentIndex;
    const u = imageSizes[f] || { width: 600, height: 400 };
    if (isAnimating && w !== null) {
      const x = imageSizes[w] || u;
      return { width: x.width, height: x.height };
    }
    if (X && m.current !== "y" && a !== 0) {
      const x = a < 0 ? Math.min(f + 1, imagesCount - 1) : Math.max(f - 1, 0);
      if (x === f) {
        return u;
      }
      const b = imageSizes[x] || u;
      const A = u.width / 2 + b.width / 2;
      const F = Math.min(Math.abs(a) / A, 1);
      return {
        width: u.width + (b.width - u.width) * F,
        height: u.height + (b.height - u.height) * F,
      };
    }
    return u;
  }, [U, imageSizes, currentIndex, isAnimating, w, X, a, imagesCount]);

  const kt = q(() => {
    setIsAnimating(true);
    k(window.innerHeight);
    Z(0);
  }, [setIsAnimating]);

  return {
    offsetX: a,
    offsetY: M,
    isDragging: X,
    opacity: v,
    wasDragging: O,
    displaySize: Rt,
    animateClose: kt,
    freezeInFlight: bt,
    unfreeze: yt,
    zoom: { scale: it, panX: ht, panY: ft, isAnimating: ut },
    desktopHandlers: {
      onMouseDown: i,
      onMouseMove: s,
      onMouseUp: N,
      onMouseLeave: N,
    },
    mobileHandlers: {
      onTouchStart: Q,
      onTouchMove: ct,
      onTouchEnd: st,
      onTouchCancel: Tt,
    },
  };
}
const le = "v8ki";
const fe = "h9gZ";
const de = "VQa2";
const he = "DoF9";
const pe = "ToBX";
const ge = "FCLz";
const me = "MYVS";
const we = "KjQR";
const be = "PEne";
const ye = "frZt";
const xe = "Uk5b";
const ve = "Y2Yb";
const Te = "noM1";
const Me = "Q2RW";
const Re = "KNM9";
const ke = "Hqx3";
const Se = "CphJ";
const Pe = "vplB";
const $e = "KcG0";
const De = "y1Fy";
const Le = "lZhP";
const Xe = "vedn";

const _ = {
  viewer: le,
  transitioning: fe,
  windowContainer: de,
  mobileContainer: he,
  mobileSlide: pe,
  closing: ge,
  slide: me,
  navArea: we,
  dots: be,
  backdrop: ye,
  windowZoomed: xe,
  track: ve,
  mobileTrack: Te,
  navLeft: Me,
  navRight: Re,
  dot: ke,
  active: Se,
  filmstrip: Pe,
  filmstripLeaving: $e,
  filmshot: De,
  filmshotActive: Le,
  filmshotImage: Xe,
};

function Ye({ currentIndex, total, onPrev, onNext }) {
  return total <= 1
    ? null
    : u(k, {
        children: [
          u("button", {
            className: `${_.navArea} ${_.navLeft}`,
            onClick: onPrev,
            disabled: currentIndex === 0,
            children: u(I, { size: 24 }),
          }),
          u("button", {
            className: `${_.navArea} ${_.navRight}`,
            onClick: onNext,
            disabled: currentIndex === total - 1,
            children: u(I_1, { size: 24 }),
          }),
        ],
      });
}
function Ee({ total, currentIndex, onDotClick }) {
  return total <= 1
    ? null
    : u("div", {
        className: _.dots,
        children: Array.from({ length: total }, (o, h) =>
          u(
            "button",
            {
              className: `${_.dot} ${h === currentIndex ? _.active : ""}`,
              onClick: () => onDotClick(h),
            },
            h
          )
        ),
      });
}
function Ne({ images, currentIndex, isClosing, onPick }) {
  return images.length <= 1
    ? null
    : u("div", {
        className: `${_.filmstrip} ${isClosing ? _.filmstripLeaving : ""}`,
        children: images.map((h, c) =>
          u(
            "button",
            {
              type: "button",
              className: `${_.filmshot} ${
                c === currentIndex ? _.filmshotActive : ""
              }`,
              onClick: (p) => {
                p.stopPropagation();
                onPick(c);
              },
              "aria-label": `Фотография ${c + 1}`,
              "aria-pressed": c === currentIndex,
              children: u("img", {
                src: h.thumbUrl || h.url,
                alt: "",
                className: _.filmshotImage,
              }),
            },
            h.id
          )
        ),
      });
}
function Ce(e) {
  const { PI, min, max, cos, round } = Math;
  const p = e[0] | (e[1] << 8) | (e[2] << 16);
  const l = e[3] | (e[4] << 8);
  const y = (p & 63) / 63;
  const $ = ((p >> 6) & 63) / 31.5 - 1;
  const D = ((p >> 12) & 63) / 31.5 - 1;
  const a = ((p >> 18) & 31) / 31;
  const d = p >> 23;
  const M = ((l >> 3) & 63) / 63;
  const k = ((l >> 9) & 63) / 63;
  const X = l >> 15;
  const S = max(3, X ? (d ? 5 : 7) : l & 7);
  const v = max(3, X ? l & 7 : d ? 5 : 7);
  const Z = d ? (e[5] & 15) / 15 : 1;
  const w = (e[5] >> 4) / 15;
  const Y = d ? 6 : 5;
  let U = 0;

  const I = (T, E, q) => {
    const H = [];
    for (let K = 0; K < E; K++) {
      for (let V = K ? 0 : 1; V * E < T * (E - K); V++) {
        H.push((((e[Y + (U >> 1)] >> ((U++ & 1) << 2)) & 15) / 7.5 - 1) * q);
      }
    }
    return H;
  };

  const it = I(S, v, a);
  const dt = I(3, 3, M * 1.25);
  const ht = I(3, 3, k * 1.25);
  const pt = d ? I(5, 5, w) : null;
  const ft = Ie(e);
  const at = round(ft > 1 ? 32 : 32 * ft);
  const ut = round(ft > 1 ? 32 / ft : 32);
  const j = new Uint8Array(at * ut * 4);
  const W = [];
  const G = [];
  for (let T = 0, E = 0; T < ut; T++) {
    for (let q = 0; q < at; q++, E += 4) {
      let H = y;
      let K = $;
      let V = D;
      let et = Z;
      for (let P = 0, m = max(S, d ? 5 : 3); P < m; P++) {
        W[P] = cos((PI / at) * (q + 0.5) * P);
      }
      for (let P = 0, m = max(v, d ? 5 : 3); P < m; P++) {
        G[P] = cos((PI / ut) * (T + 0.5) * P);
      }
      for (let P = 0, m = 0; P < v; P++) {
        for (let O = P ? 0 : 1, R = G[P] * 2; O * v < S * (v - P); O++, m++) {
          H += it[m] * W[O] * R;
        }
      }
      for (let P = 0, m = 0; P < 3; P++) {
        for (let O = P ? 0 : 1, R = G[P] * 2; O < 3 - P; O++, m++) {
          const B = W[O] * R;
          K += dt[m] * B;
          V += ht[m] * B;
        }
      }
      if (d && pt) {
        for (let P = 0, m = 0; P < 5; P++) {
          for (let O = P ? 0 : 1, R = G[P] * 2; O < 5 - P; O++, m++) {
            et += pt[m] * W[O] * R;
          }
        }
      }
      const rt = H - (2 / 3) * K;
      const tt = (3 * H - rt + V) / 2;
      const xt = tt - V;
      j[E] = max(0, 255 * min(1, tt));
      j[E + 1] = max(0, 255 * min(1, xt));
      j[E + 2] = max(0, 255 * min(1, rt));
      j[E + 3] = max(0, 255 * min(1, et));
    }
  }
  return { w: at, h: ut, rgba: j };
}
function Ie(e) {
  const [, , , n] = e;
  const r = e[2] & 128;
  const o = e[4] & 128;
  const h = o ? (r ? 5 : 7) : n & 7;
  const c = o ? n & 7 : r ? 5 : 7;
  return h / c;
}
function Oe(e, n, r) {
  const o = e * 4 + 1;
  const h = 6 + n * (5 + o);

  const c = [
    137,
    80,
    78,
    71,
    13,
    10,
    26,
    10,
    0,
    0,
    0,
    13,
    73,
    72,
    68,
    82,
    0,
    0,
    e >> 8,
    e & 255,
    0,
    0,
    n >> 8,
    n & 255,
    8,
    6,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    h >>> 24,
    (h >> 16) & 255,
    (h >> 8) & 255,
    h & 255,
    73,
    68,
    65,
    84,
    120,
    1,
  ];

  const p = [
    0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960,
    1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376,
    -2032938284, -1609899400, -1111625188,
  ];

  let l = 1;
  let y = 0;
  for (let $ = 0, D = 0, a = o - 1; $ < n; $++, a += o - 1) {
    c.push($ + 1 < n ? 0 : 1, o & 255, o >> 8, ~o & 255, (o >> 8) ^ 255, 0);

    for (y = (y + l) % 65521; D < a; D++) {
      const d = r[D] & 255;
      c.push(d);
      l = (l + d) % 65521;
      y = (y + l) % 65521;
    }
  }
  c.push(
    y >> 8,
    y & 255,
    l >> 8,
    l & 255,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    73,
    69,
    78,
    68,
    174,
    66,
    96,
    130
  );
  for (const [$, D] of [
    [12, 29],
    [37, 41 + h],
  ]) {
    let a = -1;
    for (let M = $; M < D; M++) {
      a ^= c[M];
      a = (a >>> 4) ^ p[a & 15];
      a = (a >>> 4) ^ p[a & 15];
    }
    a = ~a;
    let d = D;
    c[d++] = a >>> 24;
    c[d++] = (a >> 16) & 255;
    c[d++] = (a >> 8) & 255;
    c[d++] = a & 255;
  }
  return `data:image/png;base64,${btoa(String.fromCharCode(...c))}`;
}
function _e(e) {
  const { w, h, rgba } = Ce(e);
  return Oe(w, h, rgba);
}
function Fe(e) {
  if (!e) {
    return null;
  }
  try {
    const n = atob(e);
    const r = new Uint8Array(n.length);
    for (let o = 0; o < n.length; o++) {
      r[o] = n.charCodeAt(o);
    }
    return _e(r);
  } catch {
    return null;
  }
}
function _t({ img, isActive, style, dataViewerImage, onFullReady }) {
  const { url, thumbUrl, loadSrc, loadThumb } = img;
  const [$, D] = d(null);
  const [a, d] = d(null);
  loadThumb(() => {
    if (!loadThumb || thumbUrl || a || $) {
      return;
    }
    let Y = false;

    loadThumb().then((U) => {
      if (!Y && U) {
        d(U);
      }
    });

    return () => {
      Y = true;
    };
  }, [loadThumb, thumbUrl, a, $]);

  const [M, k] = d(() => {
    if (loadSrc) {
      return false;
    }
    if (!thumbUrl) {
      return true;
    }
    if (!isActive) {
      return false;
    }
    const Y = new Image();
    Y.src = url;
    return Y.complete;
  });

  const [X, S] = d(false);
  const v = A(null);

  loadThumb(() => {
    const Y = new AbortController();
    v.current = Y;

    return () => Y.abort();
  }, []);

  loadThumb(() => {
    if (!loadSrc || !isActive || $ || X) {
      return;
    }
    let Y = false;

    loadSrc(v.current?.signal).then((U) => {
      if (Y) {
        return;
      }
      if (!U) {
        S(true);
        return;
      }
      const I = new Image();
      I.src = U;
      const it = () => {
        if (!Y) {
          D(U);
          k(true);
        }
      };
      if (I.complete) {
        it();
        return;
      }
      I.onload = () => {
        (I.decode ? I.decode() : Promise.resolve()).catch(() => {}).then(it);
      };
    });

    return () => {
      Y = true;
    };
  }, [loadSrc, isActive, $, X]);

  loadThumb(() => {
    if (loadSrc && !X) {
      return;
    }
    if (!thumbUrl) {
      k(true);
      return;
    }
    if (M || !isActive) {
      return;
    }
    const Y = new Image();
    Y.src = url;

    if (Y.complete) {
      k(true);
      return;
    }

    let U = false;
    const I = () => {
      if (!U) {
        k(true);
      }
    };

    Y.onload = () => {
      (Y.decode ? Y.decode() : Promise.resolve()).catch(() => {}).then(I);
    };

    return () => {
      U = true;
      Y.onload = null;
    };
  }, [url, thumbUrl, isActive, M, loadSrc, X]);

  loadThumb(() => {
    if (isActive && M) {
      onFullReady?.();
    }
  }, [isActive, M]);

  const Z = T(() => Fe(img.thumbhash), [img.thumbhash]);
  return u("img", {
    src:
      loadSrc && !X
        ? $ ?? thumbUrl ?? a ?? undefined
        : M || !thumbUrl
        ? url
        : thumbUrl,
    alt: "",
    draggable: false,
    decoding: isActive ? "sync" : "async",
    loading: isActive ? "eager" : "lazy",
    ...(dataViewerImage ? { "data-viewer-image": true } : {}),
    style: {
      ...(style ?? {}),
      ...(!M && Z
        ? { backgroundImage: `url(${Z})`, backgroundSize: "100% 100%" }
        : {}),
    },
  });
}
const He = 2;
function ze({
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
  const d = T(() => {
    let M = 0;
    for (let k = 0; k < currentIndex; k++) {
      M += imageSizes[k]?.width || 0;
    }
    return M;
  }, [currentIndex, imageSizes]);
  return u("div", {
    className: `${_.windowContainer} ${zoom ? _.windowZoomed : ""}`,
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
    children: u("div", {
      ref: trackRef,
      className: _.track,
      style: {
        transform: `translateX(${-d + offsetX}px)`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((M, k) => {
        const X = Math.abs(k - currentIndex) <= He;
        const n_k = imageSizes[k];
        const v = k === currentIndex;
        return u(
          "div",
          {
            className: _.slide,
            onClick: onImageClick,
            style: {
              ...(n_k
                ? { width: `${n_k.width}px`, height: `${n_k.height}px` }
                : {}),
              transition: zoom?.isPanning
                ? "none"
                : "transform 220ms cubic-bezier(0.32, 0.72, 0, 1)",
              ...(v && zoom
                ? {
                    transform: `translate(${zoom.panX}px, ${zoom.panY}px) scale(${zoom.scale})`,
                    transformOrigin: `${zoom.originX}% ${zoom.originY}%`,
                  }
                : {}),
            },
            "data-active-slide": v ? "" : undefined,
            "data-slide-index": k,
            children:
              X &&
              u(_t, {
                img: M,
                isActive: v,
                onFullReady: v ? onActiveFullReady : undefined,
                style: {
                  width: n_k?.width || "auto",
                  height: n_k?.height || "auto",
                },
              }),
          },
          M.id
        );
      }),
    }),
  });
}
const Ae = 2;
function Ue({
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
  return u("div", {
    className: _.mobileContainer,
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
    children: u("div", {
      className: _.mobileTrack,
      style: {
        transform: `translateX(calc(-${currentIndex * 100}% + ${offsetX}px))`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((a, d) => {
        const M = Math.abs(d - currentIndex) <= Ae;
        const k = d === currentIndex;
        const n_d = imageSizes[d];
        const S = n_d
          ? { width: `${n_d.width}px`, height: `${n_d.height}px` }
          : {};

        if (k && zoom.scale !== 1) {
          S.transform = `translate(${zoom.panX}px, ${zoom.panY}px) scale(${zoom.scale})`;

          S.transition = zoom.isAnimating
            ? "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
            : "none";
        }

        return u(
          "div",
          {
            className: _.mobileSlide,
            onClick: onImageClick,
            "data-active-slide": k ? "" : undefined,
            "data-slide-index": d,
            children:
              M &&
              u(_t, {
                img: a,
                isActive: k,
                onFullReady: k ? onActiveFullReady : undefined,
                dataViewerImage: true,
                style: S,
              }),
          },
          a.id
        );
      }),
    }),
  });
}
const St = 280;
const Ct = "cubic-bezier(0.32, 0.72, 0, 1)";
const Be = 220;

const It = {
  transform: "none",
  clipPath: "inset(0px round 0px)",
  borderRadius: "0px",
};

function Ze(e, n) {
  return !e || e === "0px" || n <= 0 || !Number.isFinite(n)
    ? "0px"
    : e.replace(/([\d.]+)px/g, (r, o) => {
        const h = parseFloat(o) / n;
        return Number.isFinite(h) ? `${h}px` : "0px";
      });
}
const Ot = 2.5;

const We = () =>
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
  const l = A(null);
  const y = A(null);
  const $ = A(null);
  const D = A(null);
  const a = A(null);
  const d = A(We()).current;
  const [M, k] = d(false);
  const [X, S] = d(sourceRect !== null && !d);
  const v = E();
  const Z = ce(images, v);
  const w = ie({ initialIndex: initialIndex, total: images.length });
  u_1();

  const Y = q(() => {
    const l_current = l.current;
    return l_current
      ? l_current.querySelector("[data-active-slide] img")
      : null;
  }, []);

  const U = q((t) => {
    const l_current = l.current;
    return l_current
      ? l_current.querySelector(`[data-slide-index="${t}"] img`)
      : null;
  }, []);

  const I = q(() => {
    const $_current = $.current;

    if (
      D.current === "open" &&
      $_current &&
      $_current.playState === "running"
    ) {
      $_current.finish();
    }

    S(false);
  }, []);

  const it = q(() => {
    I();
    w.goToPrev();
  }, [I, w.goToPrev]);

  const dt = q(() => {
    I();
    w.goToNext();
  }, [I, w.goToNext]);

  const ht = q((t, i) => {
    if (!i) {
      return null;
    }
    const s = i.getBoundingClientRect();
    if (s.width === 0 || s.height === 0) {
      return null;
    }
    const N = t.hiddenLeft ?? 0;
    const Q = t.hiddenTop ?? 0;
    const ct = t.hiddenRight ?? 0;
    const st = t.hiddenBottom ?? 0;
    const Tt = t.width + N + ct;
    const bt = t.height + Q + st;
    const yt = (N / Tt) * s.width;
    const Rt = (Q / bt) * s.height;
    const kt = (ct / Tt) * s.width;
    const f = (st / bt) * s.height;
    const u = s.width - yt - kt;
    const x = s.height - Rt - f;
    const b = Math.max(t.width / u, t.height / x);
    const A = t.width / b;
    const F = t.height / b;
    const nt = Math.max(0, (u - A) / 2);
    const lt = Math.max(0, (x - F) / 2);
    const Dt = yt + nt;
    const Lt = Rt + lt;
    const Xt = kt + nt;
    const Yt = f + lt;
    const Ft = (Dt + (s.width - Xt)) / 2;
    const Ht = (Lt + (s.height - Yt)) / 2;
    const zt = s.left + s.width / 2;
    const At = s.top + s.height / 2;
    const Ut = zt + (Ft - s.width / 2) * b;
    const Bt = At + (Ht - s.height / 2) * b;
    const Zt = t.left + t.width / 2;
    const Wt = t.top + t.height / 2;
    const Vt = Zt - Ut;
    const Gt = Wt - Bt;
    const qt = `translate(${Vt}px, ${Gt}px) scale(${b})`;
    const Et = Ze(t.borderRadius, b);
    const Kt = `inset(${Lt}px ${Xt}px ${Yt}px ${Dt}px round ${Et})`;
    return { transform: qt, clipPath: Kt, borderRadius: Et };
  }, []);

  const pt = q((t) => {
    const i = getComputedStyle(t);
    return {
      transform: i.transform === "none" ? "none" : i.transform,
      clipPath: i.clipPath === "none" ? "inset(0px round 0px)" : i.clipPath,
      borderRadius: `${i.borderTopLeftRadius} ${i.borderTopRightRadius} ${i.borderBottomRightRadius} ${i.borderBottomLeftRadius}`,
    };
  }, []);

  const ft = (t, i) => {
    t.style.transform = i.transform;
    t.style.clipPath = i.clipPath;
    t.style.borderRadius = i.borderRadius;
  };

  const at = (t) => {
    t.style.removeProperty("transform");
    t.style.removeProperty("clip-path");
    t.style.removeProperty("border-radius");
  };

  const ut = q((t, i) => {
    ft(t, i);
    const s = t.animate([i, { ...It }], {
      duration: St,
      easing: Ct,
      fill: "forwards",
    });
    $.current = s;
    D.current = "open";
    a.current = t;

    s.addEventListener("finish", () => {
      at(t);
      s.cancel();

      if ($.current === s) {
        $.current = null;
        D.current = null;
      }

      S(false);
    });

    s.addEventListener("cancel", () => S(false), { once: true });
  }, []);

  const j = q(
    (t, i, s) => {
      ft(t, i);
      const N = t.animate(
        [
          i,
          {
            transform: s.transform,
            clipPath: s.clipPath,
            borderRadius: s.borderRadius,
          },
        ],
        { duration: St, easing: Ct, fill: "forwards" }
      );
      $.current = N;
      D.current = "close";
      a.current = t;

      N.addEventListener("finish", () => onClose());
    },
    [onClose]
  );

  const W = q(
    (t) =>
      resolveSourceRect
        ? resolveSourceRect(t)
        : t === initialIndex
        ? sourceRect
        : null,
    [resolveSourceRect, initialIndex, sourceRect]
  );

  const G = q(
    (t = false) => {
      if (d) {
        onClose();
        return;
      }
      const $_current = $.current;
      const a_current = a.current;
      if ($_current && $_current.playState === "running" && a_current) {
        const ct = D.current === "open";
        const st = pt(a_current);
        $_current.cancel();
        at(a_current);
        $.current = null;
        D.current = null;

        if (ct) {
          const Tt = T.freezeInFlight();
          const bt = W(Tt);
          const yt = bt ? ht(bt, a_current) : null;
          k(true);

          if (yt) {
            j(a_current, st, yt);
          } else {
            setTimeout(onClose, St);
          }
        } else {
          T.unfreeze();
          k(false);
          S(true);
          ut(a_current, st);
        }

        return;
      }
      if (M) {
        return;
      }
      const N = T.freezeInFlight();
      const Q = W(N);
      if (t && v && !Q) {
        T.animateClose();
        setTimeout(onClose, 150);
        return;
      }
      k(true);

      if (Q) {
        const ct = U(N);
        const st = ht(Q, ct);
        if (st && ct) {
          j(ct, { ...It }, st);
          return;
        }
      }

      setTimeout(onClose, St);
    },
    [M, W, w.currentIndex, pt, ht, ut, j, U, v, onClose, d]
  );

  const T = ue({
    currentIndex: w.currentIndex,
    imagesCount: images.length,
    imageSizes: Z,
    isMobile: v,
    isAnimating: w.isAnimating,
    setIsAnimating: w.setIsAnimating,
    cancelAnimation: w.cancelAnimation,
    onIndexChange: w.goToIndex,
    onClose: G,
    trackRef: y,
    onDragStart: I,
  });

  const [E, q] = d(null);
  const H = A({ x: 0, y: 0, panX: 0, panY: 0 });
  const K = A(false);
  const V = A(false);
  const et = A(null);
  const rt = A(null);

  const tt = q(
    (t = false) => {
      if (rt.current === null) {
        if (E && !v && !d) {
          K.current = false;
          q(null);

          rt.current = window.setTimeout(() => {
            rt.current = null;
            G(t);
          }, Be);

          return;
        }
        G(t);
      }
    },
    [G, v, d, E]
  );

  y(
    () => () => {
      if (rt.current !== null) {
        window.clearTimeout(rt.current);
      }
    },
    []
  );
  const xt = q(() => {
    if (!M) {
      tt();
    }
  }, [M, tt]);
  se({ onClose: xt, onPrev: it, onNext: dt });

  y(() => {
    const t = [
      images[w.currentIndex - 1],
      images[w.currentIndex + 1],
      images[w.currentIndex - 2],
      images[w.currentIndex + 2],
    ];
    for (const i of t) {
      if (!i || (i.loadSrc && !i.thumbUrl)) {
        continue;
      }
      const s = new Image();
      s.decoding = "async";
      s.src = i.thumbUrl || i.url;
    }
  }, [images, w.currentIndex]);

  const [P, m] = d(-1);

  const O = q(() => {
    m(w.currentIndex);
  }, [w.currentIndex]);

  const R = A(null);

  y(() => {
    const t = new AbortController();
    R.current = t;

    return () => t.abort();
  }, []);

  y(() => {
    if (P === w.currentIndex) {
      for (const t of [
        images[w.currentIndex - 1],
        images[w.currentIndex + 1],
      ]) {
        if (!t) {
          continue;
        }
        if (t.loadSrc) {
          t.loadSrc(R.current?.signal).then((s) => {
            if (!s) {
              return;
            }
            const N = new Image();
            N.decoding = "async";
            N.src = s;
          });
          continue;
        }
        if (!t.thumbUrl) {
          continue;
        }
        const i = new Image();
        i.decoding = "async";
        i.src = t.url;
      }
    }
  }, [P, w.currentIndex, images]);

  __1(() => {
    if (!sourceRect || d) {
      S(false);
      return;
    }
    const t = Y();
    if (!t) {
      S(false);
      return;
    }
    const i = ht(sourceRect, t);
    if (!i) {
      S(false);
      return;
    }

    ut(t, {
      transform: i.transform,
      clipPath: i.clipPath,
      borderRadius: i.borderRadius,
    });

    return () => {
      $.current?.cancel();
    };
  }, []);

  y(() => {
    q(null);
  }, [w.currentIndex]);

  const B = q((t, i, s) => {
    const N = i === "x" ? s.width : s.height;
    const Q = (i === "x" ? s.originX : s.originY) / 100;
    const ct = N * Q * (s.scale - 1);
    const st = N * (1 - Q) * (s.scale - 1);
    return Math.max(-st, Math.min(ct, t));
  }, []);

  const mt = q(
    (t, i, s) => {
      const N = B(t, i, s);
      const Q = t - N;
      return Q === 0 ? t : N + Math.sign(Q) * Math.min(72, Math.abs(Q) * 0.18);
    },
    [B]
  );

  const gt = q(
    (t) => {
      if (!K.current || v) {
        return;
      }
      const i = t.clientX - H.current.x;
      const s = t.clientY - H.current.y;

      if (Math.abs(i) > 4 || Math.abs(s) > 4) {
        V.current = true;
      }

      q(
        (N) =>
          N && {
            ...N,
            panX: mt(H.current.panX + i, "x", N),
            panY: mt(H.current.panY + s, "y", N),
          }
      );

      t.preventDefault();
    },
    [mt, v]
  );

  const ot = q(() => {
    if (K.current) {
      K.current = false;

      q(
        (t) =>
          t && {
            ...t,
            panX: B(t.panX, "x", t),
            panY: B(t.panY, "y", t),
            isPanning: false,
          }
      );

      V.current &&
        (et.current !== null && window.clearTimeout(et.current),
        (et.current = window.setTimeout(() => {
          V.current = false;
          et.current = null;
        }, 0)));
    }
  }, [B]);

  y(() => {
    window.addEventListener("mousemove", gt);
    window.addEventListener("mouseup", ot);
    window.addEventListener("blur", ot);

    return () => {
      window.removeEventListener("mousemove", gt);
      window.removeEventListener("mouseup", ot);
      window.removeEventListener("blur", ot);

      if (et.current !== null) {
        window.clearTimeout(et.current);
      }
    };
  }, [ot, gt]);

  const vt = {
    onMouseDown: (t) => {
      if (!E || v) {
        T.desktopHandlers.onMouseDown(t);
        return;
      }

      if (t.button === 0) {
        K.current = true;
        V.current = false;

        H.current = {
          x: t.clientX,
          y: t.clientY,
          panX: E.panX,
          panY: E.panY,
        };

        q((i) => i && { ...i, isPanning: true });
        t.preventDefault();
      }
    },
    onMouseMove: (t) => {
      if (!E || v) {
        T.desktopHandlers.onMouseMove(t);
        return;
      }
    },
    onMouseUp: () => {
      if (!E || v) {
        T.desktopHandlers.onMouseUp();
        return;
      }
      ot();
    },
    onMouseLeave: () => {
      if (!E || v) {
        T.desktopHandlers.onMouseLeave();
        return;
      }
    },
  };

  const Mt = q(
    (t) => {
      if (V.current) {
        V.current = false;
        return;
      }
      if (T.wasDragging.current) {
        T.wasDragging.current = false;
        return;
      }

      if (t.target === l.current) {
        tt();
      }
    },
    [tt]
  );

  const wt = q(
    (t) => {
      if (V.current) {
        V.current = false;
        return;
      }
      if (T.wasDragging.current) {
        T.wasDragging.current = false;
        return;
      }
      if (zoomable && !v) {
        if (E) {
          q(null);
          return;
        }
        const s = t?.currentTarget?.getBoundingClientRect();
        if (!s || !t) {
          q({
            scale: Ot,
            originX: 50,
            originY: 50,
            panX: 0,
            panY: 0,
            width: s?.width || T.displaySize.width,
            height: s?.height || T.displaySize.height,
            isPanning: false,
          });
          return;
        }
        q({
          scale: Ot,
          originX: ((t.clientX - s.left) / s.width) * 100,
          originY: ((t.clientY - s.top) / s.height) * 100,
          panX: 0,
          panY: 0,
          width: s.width,
          height: s.height,
          isPanning: false,
        });
        return;
      }
      G(v);
    },
    [G, v, zoomable, E, T.displaySize]
  );

  return $(
    u("div", {
      ref: l,
      className: `${_.viewer} ${M ? _.closing : ""} ${
        X ? _.transitioning : ""
      } ym-hide-content`,
      style: {
        "--opacity": T.opacity,
        "--opacity-transition": w.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: Mt,
      children: [
        u("div", { className: _.backdrop, "aria-hidden": true }),
        !v &&
          u(ze, {
            images: images,
            imageSizes: Z,
            currentIndex: w.currentIndex,
            offsetX: T.offsetX,
            offsetY: T.offsetY,
            isAnimating: w.isAnimating,
            displaySize: T.displaySize,
            trackRef: y,
            handlers: vt,
            onImageClick: wt,
            onActiveFullReady: O,
            zoom: E,
          }),
        v &&
          u(Ue, {
            images: images,
            imageSizes: Z,
            currentIndex: w.currentIndex,
            offsetX: T.offsetX,
            offsetY: T.offsetY,
            isAnimating: w.isAnimating,
            isClosing: false,
            handlers: T.mobileHandlers,
            onImageClick: wt,
            onActiveFullReady: O,
            zoom: T.zoom,
          }),
        !v &&
          u(Ye, {
            currentIndex: w.currentIndex,
            total: images.length,
            onPrev: it,
            onNext: dt,
          }),
        thumbs
          ? u(Ne, {
              images: images,
              currentIndex: w.currentIndex,
              isClosing: M,
              onPick: (t) => {
                I();
                w.goToIndex(t);
              },
            })
          : u(Ee, {
              total: images.length,
              currentIndex: w.currentIndex,
              onDotClick: (t) => {
                I();
                w.goToIndex(t);
              },
            }),
      ],
    }),
    document.body
  );
}

export { ImageViewer as ImageViewer, ImageViewer as default };
