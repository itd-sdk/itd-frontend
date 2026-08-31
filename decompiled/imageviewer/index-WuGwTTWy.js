import {
  q,
  d,
  h,
  d as d_1,
  T,
  u,
  S,
  C,
  _ as __1,
  $,
} from "./index-ORJLmKGS.js";
import { u as u_1 } from "./useBodyScrollLock-DaWiuPw0.js";
import { I } from "./IconChevronLeft-DN-Go-1D.js";
import { I as I_1 } from "./IconChevronRight-D5bRqvrU.js";
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
    e.SENTRY_RELEASE = { id: "1.1.3" };
    const n = new e.Error().stack;

    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "136211d5-bf1b-4e6e-a713-16919e07dd83";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-136211d5-bf1b-4e6e-a713-16919e07dd83";
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

  h(() => {
    h(r());
    const c = () => h(r());
    window.addEventListener("resize", c);

    return () => window.removeEventListener("resize", c);
  }, [r]);

  return o;
}
function se({ onClose, onPrev, onNext }) {
  h(() => {
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
  const p = d_1(null);

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

  const P = q(() => {
    if (r > 0) {
      y(r - 1);
    }
  }, [r, y]);

  const $ = q(() => {
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
    goToPrev: P,
    goToNext: $,
  };
}
const Dt = 150;
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
  const [a, f] = d(0);
  const [M, S] = d(0);
  const [X, k] = d(false);
  const [v, G] = d(1);
  const [w, E] = d(null);
  const [U, C] = d(null);
  const [it, ft] = d(1);
  const [ht, pt] = d(0);
  const [dt, at] = d(0);
  const [ut, K] = d(false);
  const W = d_1(1);
  const V = d_1({ x: 0, y: 0 });
  const T = d_1(false);
  const I = d_1(false);
  const q = d_1(0);
  const H = d_1(0);
  const j = d_1(0);
  const Z = d_1(1);
  const et = d_1({ x: 0, y: 0 });
  const rt = d_1({ x: 0, y: 0 });
  const tt = d_1({ x: 0, y: 0 });
  const xt = d_1(0);
  const D = d_1(0);
  const m = d_1(null);
  const O = d_1(false);
  const R = d_1(null);
  const B = d_1(null);
  const mt = d_1(false);

  const gt = q((d) => {
    W.current = d;
    ft(d);
  }, []);

  const ot = q((d, u) => {
    V.current = { x: d, y: u };
    pt(d);
    at(u);
  }, []);

  const vt = q(() => {
    K(true);
    gt(1);
    ot(0, 0);

    setTimeout(() => K(false), 300);
  }, [gt, ot]);

  const Mt = q(
    (d, u, x) => {
      const r_e = imageSizes[e];
      if (!r_e) {
        return { x: 0, y: 0 };
      }
      const F = Math.max(0, (r_e.width * x - window.innerWidth) / 2);
      const z = Math.max(0, (r_e.height * x - window.innerHeight) / 2);
      return {
        x: Math.max(-F, Math.min(F, d)),
        y: Math.max(-z, Math.min(z, u)),
      };
    },
    [imageSizes, currentIndex]
  );

  isAnimating(() => {
    W.current = 1;
    V.current = { x: 0, y: 0 };
    ft(1);
    pt(0);
    at(0);
    K(false);
  }, [currentIndex]);

  isAnimating(
    () => () => {
      if (R.current) {
        clearTimeout(R.current);
        R.current = null;
      }
    },
    []
  );

  const wt = q(
    (d) => {
      let u = d;

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
      Math.abs(M) > Dt
        ? (onClose(isMobile), true)
        : (setIsAnimating(true),
          S(0),
          f(0),
          G(1),
          (R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
          }, 300)),
          false),
    [M, isMobile, onClose, setIsAnimating]
  );

  const i = q(
    (d) => {
      if (isMobile || d.button !== 0) {
        return;
      }
      const u = B.current ?? currentIndex;
      let x = 0;
      const b = trackRef?.current;
      if (b) {
        const F = getComputedStyle(b).transform;
        if (F && F !== "none") {
          const z = new DOMMatrixReadOnly(F).m41;
          let nt = 0;
          for (let lt = 0; lt < u; lt++) {
            nt += imageSizes[lt]?.width || 0;
          }
          x = z + nt;

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
      E(null);
      C(null);
      xt.current = x;
      D.current = 0;
      f(x);
      k(true);
      O.current = false;
      tt.current = { x: d.clientX, y: d.clientY };
      m.current = null;
      d.preventDefault();
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
    (d) => {
      if (!X || isMobile) {
        return;
      }
      const u = d.clientX - tt.current.x;
      const x = d.clientY - tt.current.y;

      if (!m.current && (Math.abs(u) > 10 || Math.abs(x) > 10)) {
        m.current = Math.abs(u) > Math.abs(x) ? "x" : "y";
        O.current = true;
        onDragStart?.();
      }

      if (m.current === "x") {
        D.current = u;
        f(wt(xt.current + u));
      } else if (m.current === "y") {
        S(x);
        const b = Math.min(Math.abs(x) / Dt, 1);
        G(1 - b * 0.5);
      }
    },
    [X, isMobile, wt, onDragStart]
  );

  const N = q(() => {
    if (!(!X || isMobile)) {
      k(false);

      if (m.current === "x") {
        const u = B.current ?? currentIndex;
        const D_current = D.current;
        let b = u;

        if (D_current < -80 && u < imagesCount - 1) {
          b = u + 1;
        } else if (D_current > 80 && u > 0) {
          b = u - 1;
        }

        if (b !== u) {
          const F = imageSizes[b]?.width || 0;
          const z = imageSizes[u]?.width || 0;
          const nt = b > u ? -z : F;
          setIsAnimating(true);
          E(b);
          f(nt);
          B.current = b;

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
            E(null);
            f(0);
            B.current = null;
            onIndexChange(b);
          }, 500);
        } else {
          setIsAnimating(true);
          f(0);

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
          f(0);

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
    (d) => {
      if (!isMobile) {
        return;
      }
      H.current = Math.max(H.current, d.touches.length);

      if (d.touches.length === 2) {
        T.current = true;
        I.current = true;
        j.current = Nt(d.touches[0], d.touches[1]);
        Z.current = W.current;
        k(false);
        m.current = null;
        f(0);
        S(0);
        G(1);
        K(false);
        return;
      }

      if (W.current > 1) {
        H.current = 1;
        et.current = { x: d.touches[0].clientX, y: d.touches[0].clientY };
        rt.current = { ...V.current };
        k(true);
        O.current = false;
        m.current = null;
        K(false);
        const d_target_1 = d.target;
        mt.current =
          d_target_1.tagName === "IMG" &&
          d_target_1.hasAttribute("data-viewer-image");
        return;
      }
      H.current = 1;
      I.current = false;
      cancelAnimation();

      if (R.current) {
        clearTimeout(R.current);
        R.current = null;
      }

      setIsAnimating(false);
      f(0);
      O.current = false;
      const d_target = d.target;
      mt.current =
        d_target.tagName === "IMG" &&
        d_target.hasAttribute("data-viewer-image");
      tt.current = { x: d.touches[0].clientX, y: d.touches[0].clientY };
      m.current = null;
      k(true);
    },
    [isMobile, cancelAnimation, setIsAnimating]
  );

  const ct = q(
    (d) => {
      if (!isMobile) {
        return;
      }
      H.current = Math.max(H.current, d.touches.length);

      if (T.current && d.touches.length >= 2) {
        const b = Nt(d.touches[0], d.touches[1]);
        const F = Z.current * (b / j.current);
        const z = Math.min(Math.max(F, 0.5), 5);
        const nt = Mt(V.current.x, V.current.y, z);
        gt(z);
        ot(nt.x, nt.y);
        return;
      }

      if (W.current > 1 && X && !T.current) {
        const b = d.touches[0].clientX - et.current.x;
        const F = d.touches[0].clientY - et.current.y;

        if (Math.abs(b) > 5 || Math.abs(F) > 5) {
          O.current = true;
        }

        const z = Mt(rt.current.x + b, rt.current.y + F, W.current);
        ot(z.x, z.y);
        return;
      }
      if (!X) {
        return;
      }
      const u = d.touches[0].clientX - tt.current.x;
      const x = d.touches[0].clientY - tt.current.y;

      if (!m.current && (Math.abs(u) > 10 || Math.abs(x) > 10)) {
        m.current = Math.abs(u) > Math.abs(x) ? "x" : "y";
        O.current = true;
        onDragStart?.();
      }

      if (m.current === "x") {
        f(wt(u));
      } else if (m.current === "y") {
        S(x);
        const b = Math.min(Math.abs(x) / Dt, 1);
        G(Math.round((1 - b * 0.7) * 100) / 100);
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
        k(false);
        return;
      }
      if (H.current > 1 || I.current) {
        k(false);
        S(0);
        G(1);
        m.current = null;
        return;
      }
      if (Date.now() - q.current < 300) {
        k(false);
        S(0);
        G(1);
        m.current = null;
        return;
      }
      if (X) {
        k(false);

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
          f(0);

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
      I.current = false;
      H.current = 0;
      m.current = null;
      k(false);
      f(0);
      S(0);
      G(1);
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
        const z = new DOMMatrixReadOnly(b).m41;
        let nt = 0;
        for (let lt = 0; lt < u; lt++) {
          nt += imageSizes[lt]?.width || 0;
        }
        f(z + nt);
      }
      const x_parentElement = x.parentElement;
      if (x_parentElement) {
        const z = x_parentElement.getBoundingClientRect();
        C({ width: z.width, height: z.height });
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
    E(null);
    return u;
  }, [currentIndex, imageSizes, trackRef, onIndexChange, setIsAnimating]);

  const yt = q(() => {
    C(null);

    if (a !== 0 || M !== 0 || v !== 1) {
      setIsAnimating(true);
      f(0);
      S(0);
      G(1);
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
    const d = B.current ?? currentIndex;
    const u = imageSizes[d] || { width: 600, height: 400 };
    if (isAnimating && w !== null) {
      const x = imageSizes[w] || u;
      return { width: x.width, height: x.height };
    }
    if (X && m.current !== "y" && a !== 0) {
      const x = a < 0 ? Math.min(d + 1, imagesCount - 1) : Math.max(d - 1, 0);
      if (x === d) {
        return u;
      }
      const b = imageSizes[x] || u;
      const F = u.width / 2 + b.width / 2;
      const z = Math.min(Math.abs(a) / F, 1);
      return {
        width: u.width + (b.width - u.width) * z,
        height: u.height + (b.height - u.height) * z,
      };
    }
    return u;
  }, [U, imageSizes, currentIndex, isAnimating, w, X, a, imagesCount]);

  const St = q(() => {
    setIsAnimating(true);
    S(window.innerHeight);
    G(0);
  }, [setIsAnimating]);

  return {
    offsetX: a,
    offsetY: M,
    isDragging: X,
    opacity: v,
    wasDragging: O,
    displaySize: Rt,
    animateClose: St,
    freezeInFlight: bt,
    unfreeze: yt,
    zoom: { scale: it, panX: ht, panY: dt, isAnimating: ut },
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
const le = "tGCA";
const de = "EYz5";
const fe = "Lx1R";
const he = "jE6z";
const pe = "PZig";
const ge = "IbcQ";
const me = "wrIP";
const we = "ODuV";
const be = "ziXG";
const ye = "Si3Q";
const xe = "rvwG";
const ve = "guid";
const Te = "Ho4c";
const Me = "UBxE";
const Re = "N6rI";
const Se = "Waz4";
const ke = "dGwp";
const De = "X97x";
const Pe = "wz72";
const $e = "dIez";
const Le = "CD1V";
const Xe = "TtOD";

const _ = {
  viewer: le,
  transitioning: de,
  windowContainer: fe,
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
  dot: Se,
  active: ke,
  filmstrip: De,
  filmstripLeaving: Pe,
  filmshot: $e,
  filmshotActive: Le,
  filmshotImage: Xe,
};

function Ee({ currentIndex, total, onPrev, onNext }) {
  return total <= 1
    ? null
    : u(S, {
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
function Ie({ total, currentIndex, onDotClick }) {
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
function Ye(e) {
  const { PI, min, max, cos, round } = Math;
  const p = e[0] | (e[1] << 8) | (e[2] << 16);
  const l = e[3] | (e[4] << 8);
  const y = (p & 63) / 63;
  const P = ((p >> 6) & 63) / 31.5 - 1;
  const $ = ((p >> 12) & 63) / 31.5 - 1;
  const a = ((p >> 18) & 31) / 31;
  const f = p >> 23;
  const M = ((l >> 3) & 63) / 63;
  const S = ((l >> 9) & 63) / 63;
  const X = l >> 15;
  const k = max(3, X ? (f ? 5 : 7) : l & 7);
  const v = max(3, X ? l & 7 : f ? 5 : 7);
  const G = f ? (e[5] & 15) / 15 : 1;
  const w = (e[5] >> 4) / 15;
  const E = f ? 6 : 5;
  let U = 0;

  const C = (T, I, q) => {
    const H = [];
    for (let j = 0; j < I; j++) {
      for (let Z = j ? 0 : 1; Z * I < T * (I - j); Z++) {
        H.push((((e[E + (U >> 1)] >> ((U++ & 1) << 2)) & 15) / 7.5 - 1) * q);
      }
    }
    return H;
  };

  const it = C(k, v, a);
  const ft = C(3, 3, M * 1.25);
  const ht = C(3, 3, S * 1.25);
  const pt = f ? C(5, 5, w) : null;
  const dt = Ce(e);
  const at = round(dt > 1 ? 32 : 32 * dt);
  const ut = round(dt > 1 ? 32 / dt : 32);
  const K = new Uint8Array(at * ut * 4);
  const W = [];
  const V = [];
  for (let T = 0, I = 0; T < ut; T++) {
    for (let q = 0; q < at; q++, I += 4) {
      let H = y;
      let j = P;
      let Z = $;
      let et = G;
      for (let D = 0, m = max(k, f ? 5 : 3); D < m; D++) {
        W[D] = cos((PI / at) * (q + 0.5) * D);
      }
      for (let D = 0, m = max(v, f ? 5 : 3); D < m; D++) {
        V[D] = cos((PI / ut) * (T + 0.5) * D);
      }
      for (let D = 0, m = 0; D < v; D++) {
        for (let O = D ? 0 : 1, R = V[D] * 2; O * v < k * (v - D); O++, m++) {
          H += it[m] * W[O] * R;
        }
      }
      for (let D = 0, m = 0; D < 3; D++) {
        for (let O = D ? 0 : 1, R = V[D] * 2; O < 3 - D; O++, m++) {
          const B = W[O] * R;
          j += ft[m] * B;
          Z += ht[m] * B;
        }
      }
      if (f && pt) {
        for (let D = 0, m = 0; D < 5; D++) {
          for (let O = D ? 0 : 1, R = V[D] * 2; O < 5 - D; O++, m++) {
            et += pt[m] * W[O] * R;
          }
        }
      }
      const rt = H - (2 / 3) * j;
      const tt = (3 * H - rt + Z) / 2;
      const xt = tt - Z;
      K[I] = max(0, 255 * min(1, tt));
      K[I + 1] = max(0, 255 * min(1, xt));
      K[I + 2] = max(0, 255 * min(1, rt));
      K[I + 3] = max(0, 255 * min(1, et));
    }
  }
  return { w: at, h: ut, rgba: K };
}
function Ce(e) {
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
  for (let P = 0, $ = 0, a = o - 1; P < n; P++, a += o - 1) {
    c.push(P + 1 < n ? 0 : 1, o & 255, o >> 8, ~o & 255, (o >> 8) ^ 255, 0);

    for (y = (y + l) % 65521; $ < a; $++) {
      const f = r[$] & 255;
      c.push(f);
      l = (l + f) % 65521;
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
  for (const [P, $] of [
    [12, 29],
    [37, 41 + h],
  ]) {
    let a = -1;
    for (let M = P; M < $; M++) {
      a ^= c[M];
      a = (a >>> 4) ^ p[a & 15];
      a = (a >>> 4) ^ p[a & 15];
    }
    a = ~a;
    let f = $;
    c[f++] = a >>> 24;
    c[f++] = (a >> 16) & 255;
    c[f++] = (a >> 8) & 255;
    c[f++] = a & 255;
  }
  return `data:image/png;base64,${btoa(String.fromCharCode(...c))}`;
}
function _e(e) {
  const { w, h: h_1, rgba } = Ye(e);
  return Oe(w, h_1, rgba);
}
function ze(e) {
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
  const [P, $] = d(null);
  const [a, f] = d(null);
  onFullReady(() => {
    if (!loadThumb || thumbUrl || a || P) {
      return;
    }
    let E = false;

    loadThumb().then((U) => {
      if (!E && U) {
        f(U);
      }
    });

    return () => {
      E = true;
    };
  }, [loadThumb, thumbUrl, a, P]);

  const [M, S] = d(() => {
    if (loadSrc) {
      return false;
    }
    if (!thumbUrl) {
      return true;
    }
    if (!isActive) {
      return false;
    }
    const E = new Image();
    E.src = url;
    return E.complete;
  });

  const [X, k] = d(false);
  const v = d_1(null);

  onFullReady(() => {
    const E = new AbortController();
    v.current = E;

    return () => E.abort();
  }, []);

  onFullReady(() => {
    if (!loadSrc || !isActive || P || X) {
      return;
    }
    let E = false;

    loadSrc(v.current?.signal).then((U) => {
      if (E) {
        return;
      }
      if (!U) {
        k(true);
        return;
      }
      const C = new Image();
      C.src = U;
      const it = () => {
        if (!E) {
          $(U);
          S(true);
        }
      };
      if (C.complete) {
        it();
        return;
      }
      C.onload = () => {
        (C.decode ? C.decode() : Promise.resolve()).catch(() => {}).then(it);
      };
    });

    return () => {
      E = true;
    };
  }, [loadSrc, isActive, P, X]);

  onFullReady(() => {
    if (loadSrc && !X) {
      return;
    }
    if (!thumbUrl) {
      S(true);
      return;
    }
    if (M || !isActive) {
      return;
    }
    const E = new Image();
    E.src = url;

    if (E.complete) {
      S(true);
      return;
    }

    let U = false;
    const C = () => {
      if (!U) {
        S(true);
      }
    };

    E.onload = () => {
      (E.decode ? E.decode() : Promise.resolve()).catch(() => {}).then(C);
    };

    return () => {
      U = true;
      E.onload = null;
    };
  }, [url, thumbUrl, isActive, M, loadSrc, X]);

  onFullReady(() => {
    if (isActive && M) {
      onFullReady?.();
    }
  }, [isActive, M]);

  const G = T(() => ze(img.thumbhash), [img.thumbhash]);
  return u("img", {
    src:
      loadSrc && !X
        ? P ?? thumbUrl ?? a ?? undefined
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
      ...(!M && G
        ? { backgroundImage: `url(${G})`, backgroundSize: "100% 100%" }
        : {}),
    },
  });
}
const He = 2;
function Ae({
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
  const f = T(() => {
    let M = 0;
    for (let S = 0; S < currentIndex; S++) {
      M += imageSizes[S]?.width || 0;
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
        transform: `translateX(${-f + offsetX}px)`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((M, S) => {
        const X = Math.abs(S - currentIndex) <= He;
        const n_S = imageSizes[S];
        const v = S === currentIndex;
        return u(
          "div",
          {
            className: _.slide,
            onClick: onImageClick,
            style: {
              ...(n_S
                ? { width: `${n_S.width}px`, height: `${n_S.height}px` }
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
            "data-slide-index": S,
            children:
              X &&
              u(_t, {
                img: M,
                isActive: v,
                onFullReady: v ? onActiveFullReady : undefined,
                style: {
                  width: n_S?.width || "auto",
                  height: n_S?.height || "auto",
                },
              }),
          },
          M.id
        );
      }),
    }),
  });
}
const Fe = 2;
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
      children: images.map((a, f) => {
        const M = Math.abs(f - currentIndex) <= Fe;
        const S = f === currentIndex;
        const n_f = imageSizes[f];
        const k = n_f
          ? { width: `${n_f.width}px`, height: `${n_f.height}px` }
          : {};

        if (S && zoom.scale !== 1) {
          k.transform = `translate(${zoom.panX}px, ${zoom.panY}px) scale(${zoom.scale})`;

          k.transition = zoom.isAnimating
            ? "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
            : "none";
        }

        return u(
          "div",
          {
            className: _.mobileSlide,
            onClick: onImageClick,
            "data-active-slide": S ? "" : undefined,
            "data-slide-index": f,
            children:
              M &&
              u(_t, {
                img: a,
                isActive: S,
                onFullReady: S ? onActiveFullReady : undefined,
                dataViewerImage: true,
                style: k,
              }),
          },
          a.id
        );
      }),
    }),
  });
}
const kt = 280;
const Yt = "cubic-bezier(0.32, 0.72, 0, 1)";
const Be = 220;

const Ct = {
  transform: "none",
  clipPath: "inset(0px round 0px)",
  borderRadius: "0px",
};

function Ge(e, n) {
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
  const l = d_1(null);
  const y = d_1(null);
  const P = d_1(null);
  const $ = d_1(null);
  const a = d_1(null);
  const f = d_1(We()).current;
  const [M, S] = d(false);
  const [X, k] = d(sourceRect !== null && !f);
  const v = C();
  const G = ce(images, v);
  const w = ie({ initialIndex: initialIndex, total: images.length });
  u_1();

  const E = q(() => {
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

  const C = q(() => {
    const P_current = P.current;

    if (
      $.current === "open" &&
      P_current &&
      P_current.playState === "running"
    ) {
      P_current.finish();
    }

    k(false);
  }, []);

  const it = q(() => {
    C();
    w.goToPrev();
  }, [C, w.goToPrev]);

  const ft = q(() => {
    C();
    w.goToNext();
  }, [C, w.goToNext]);

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
    const St = (ct / Tt) * s.width;
    const d = (st / bt) * s.height;
    const u = s.width - yt - St;
    const x = s.height - Rt - d;
    const b = Math.max(t.width / u, t.height / x);
    const F = t.width / b;
    const z = t.height / b;
    const nt = Math.max(0, (u - F) / 2);
    const lt = Math.max(0, (x - z) / 2);
    const $t = yt + nt;
    const Lt = Rt + lt;
    const Xt = St + nt;
    const Et = d + lt;
    const zt = ($t + (s.width - Xt)) / 2;
    const Ht = (Lt + (s.height - Et)) / 2;
    const At = s.left + s.width / 2;
    const Ft = s.top + s.height / 2;
    const Ut = At + (zt - s.width / 2) * b;
    const Bt = Ft + (Ht - s.height / 2) * b;
    const Gt = t.left + t.width / 2;
    const Wt = t.top + t.height / 2;
    const Zt = Gt - Ut;
    const Vt = Wt - Bt;
    const qt = `translate(${Zt}px, ${Vt}px) scale(${b})`;
    const It = Ge(t.borderRadius, b);
    const jt = `inset(${Lt}px ${Xt}px ${Et}px ${$t}px round ${It})`;
    return { transform: qt, clipPath: jt, borderRadius: It };
  }, []);

  const pt = q((t) => {
    const i = getComputedStyle(t);
    return {
      transform: i.transform === "none" ? "none" : i.transform,
      clipPath: i.clipPath === "none" ? "inset(0px round 0px)" : i.clipPath,
      borderRadius: `${i.borderTopLeftRadius} ${i.borderTopRightRadius} ${i.borderBottomRightRadius} ${i.borderBottomLeftRadius}`,
    };
  }, []);

  const dt = (t, i) => {
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
    dt(t, i);
    const s = t.animate([i, { ...Ct }], {
      duration: kt,
      easing: Yt,
      fill: "forwards",
    });
    P.current = s;
    $.current = "open";
    a.current = t;

    s.addEventListener("finish", () => {
      at(t);
      s.cancel();

      if (P.current === s) {
        P.current = null;
        $.current = null;
      }

      k(false);
    });

    s.addEventListener("cancel", () => k(false), { once: true });
  }, []);

  const K = q(
    (t, i, s) => {
      dt(t, i);
      const N = t.animate(
        [
          i,
          {
            transform: s.transform,
            clipPath: s.clipPath,
            borderRadius: s.borderRadius,
          },
        ],
        { duration: kt, easing: Yt, fill: "forwards" }
      );
      P.current = N;
      $.current = "close";
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

  const V = q(
    (t = false) => {
      if (f) {
        onClose();
        return;
      }
      const P_current = P.current;
      const a_current = a.current;
      if (P_current && P_current.playState === "running" && a_current) {
        const ct = $.current === "open";
        const st = pt(a_current);
        P_current.cancel();
        at(a_current);
        P.current = null;
        $.current = null;

        if (ct) {
          const Tt = T.freezeInFlight();
          const bt = W(Tt);
          const yt = bt ? ht(bt, a_current) : null;
          S(true);

          if (yt) {
            K(a_current, st, yt);
          } else {
            setTimeout(onClose, kt);
          }
        } else {
          T.unfreeze();
          S(false);
          k(true);
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
      S(true);

      if (Q) {
        const ct = U(N);
        const st = ht(Q, ct);
        if (st && ct) {
          K(ct, { ...Ct }, st);
          return;
        }
      }

      setTimeout(onClose, kt);
    },
    [M, W, w.currentIndex, pt, ht, ut, K, U, v, onClose, f]
  );

  const T = ue({
    currentIndex: w.currentIndex,
    imagesCount: images.length,
    imageSizes: G,
    isMobile: v,
    isAnimating: w.isAnimating,
    setIsAnimating: w.setIsAnimating,
    cancelAnimation: w.cancelAnimation,
    onIndexChange: w.goToIndex,
    onClose: V,
    trackRef: y,
    onDragStart: C,
  });

  const [I, q] = d(null);
  const H = d_1({ x: 0, y: 0, panX: 0, panY: 0 });
  const j = d_1(false);
  const Z = d_1(false);
  const et = d_1(null);
  const rt = d_1(null);

  const tt = q(
    (t = false) => {
      if (rt.current === null) {
        if (I && !v && !f) {
          j.current = false;
          q(null);

          rt.current = window.setTimeout(() => {
            rt.current = null;
            V(t);
          }, Be);

          return;
        }
        V(t);
      }
    },
    [V, v, f, I]
  );

  zoomable(
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
  se({ onClose: xt, onPrev: it, onNext: ft });

  zoomable(() => {
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

  const [D, m] = d(-1);

  const O = q(() => {
    m(w.currentIndex);
  }, [w.currentIndex]);

  const R = d_1(null);

  zoomable(() => {
    const t = new AbortController();
    R.current = t;

    return () => t.abort();
  }, []);

  zoomable(() => {
    if (D === w.currentIndex) {
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
  }, [D, w.currentIndex, images]);

  __1(() => {
    if (!sourceRect || f) {
      k(false);
      return;
    }
    const t = E();
    if (!t) {
      k(false);
      return;
    }
    const i = ht(sourceRect, t);
    if (!i) {
      k(false);
      return;
    }

    ut(t, {
      transform: i.transform,
      clipPath: i.clipPath,
      borderRadius: i.borderRadius,
    });

    return () => {
      P.current?.cancel();
    };
  }, []);

  zoomable(() => {
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
      if (!j.current || v) {
        return;
      }
      const i = t.clientX - H.current.x;
      const s = t.clientY - H.current.y;

      if (Math.abs(i) > 4 || Math.abs(s) > 4) {
        Z.current = true;
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
    if (j.current) {
      j.current = false;

      q(
        (t) =>
          t && {
            ...t,
            panX: B(t.panX, "x", t),
            panY: B(t.panY, "y", t),
            isPanning: false,
          }
      );

      Z.current &&
        (et.current !== null && window.clearTimeout(et.current),
        (et.current = window.setTimeout(() => {
          Z.current = false;
          et.current = null;
        }, 0)));
    }
  }, [B]);

  zoomable(() => {
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
      if (!I || v) {
        T.desktopHandlers.onMouseDown(t);
        return;
      }

      if (t.button === 0) {
        j.current = true;
        Z.current = false;

        H.current = {
          x: t.clientX,
          y: t.clientY,
          panX: I.panX,
          panY: I.panY,
        };

        q((i) => i && { ...i, isPanning: true });
        t.preventDefault();
      }
    },
    onMouseMove: (t) => {
      if (!I || v) {
        T.desktopHandlers.onMouseMove(t);
        return;
      }
    },
    onMouseUp: () => {
      if (!I || v) {
        T.desktopHandlers.onMouseUp();
        return;
      }
      ot();
    },
    onMouseLeave: () => {
      if (!I || v) {
        T.desktopHandlers.onMouseLeave();
        return;
      }
    },
  };

  const Mt = q(
    (t) => {
      if (Z.current) {
        Z.current = false;
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
      if (Z.current) {
        Z.current = false;
        return;
      }
      if (T.wasDragging.current) {
        T.wasDragging.current = false;
        return;
      }
      if (zoomable && !v) {
        if (I) {
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
      V(v);
    },
    [V, v, zoomable, I, T.displaySize]
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
          u(Ae, {
            images: images,
            imageSizes: G,
            currentIndex: w.currentIndex,
            offsetX: T.offsetX,
            offsetY: T.offsetY,
            isAnimating: w.isAnimating,
            displaySize: T.displaySize,
            trackRef: y,
            handlers: vt,
            onImageClick: wt,
            onActiveFullReady: O,
            zoom: I,
          }),
        v &&
          u(Ue, {
            images: images,
            imageSizes: G,
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
          u(Ee, {
            currentIndex: w.currentIndex,
            total: images.length,
            onPrev: it,
            onNext: ft,
          }),
        thumbs
          ? u(Ne, {
              images: images,
              currentIndex: w.currentIndex,
              isClosing: M,
              onPick: (t) => {
                C();
                w.goToIndex(t);
              },
            })
          : u(Ie, {
              total: images.length,
              currentIndex: w.currentIndex,
              onDotClick: (t) => {
                C();
                w.goToIndex(t);
              },
            }),
      ],
    }),
    document.body
  );
}

export { ImageViewer as ImageViewer, ImageViewer as default };
