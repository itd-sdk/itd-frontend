import { q, d, h, A, T, u, S, aj, ab, v } from "./index-AoERIL5v.js";
import { u as u_1 } from "./useBodyScrollLock-BHjBvd5o.js";
import { I } from "./IconChevronLeft-esjxi0mx.js";
import { I as I_1 } from "./IconChevronRight-DcSEN6NO.js";
const oe = 100;
function ce(e, r) {
  const n = q(() => {
    const c = r ? window.innerWidth : window.innerWidth - oe * 2;
    const window_innerHeight = window.innerHeight;
    return e.map((l) => {
      if (!l.width || !l.height) {
        return { width: c, height: window_innerHeight };
      }
      const y = Math.min(c / l.width, window_innerHeight / l.height);
      return { width: l.width * y, height: l.height * y };
    });
  }, [e, r]);

  const [o, h] = d(n);

  h(() => {
    h(n());
    const c = () => h(n());
    window.addEventListener("resize", c);

    return () => window.removeEventListener("resize", c);
  }, [n]);

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
  const [n, o] = d(initialIndex);
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
      if (a !== n && a >= 0 && a < total) {
        l();
        c(true);
        o(a);

        p.current = window.setTimeout(() => {
          p.current = null;
          c(false);
        }, 500);
      }
    },
    [n, total, l]
  );

  const P = q(() => {
    if (n > 0) {
      y(n - 1);
    }
  }, [n, y]);

  const L = q(() => {
    if (n < total - 1) {
      y(n + 1);
    }
  }, [n, total, y]);

  return {
    currentIndex: n,
    setCurrentIndex: o,
    isAnimating: h,
    setIsAnimating: c,
    cancelAnimation: l,
    goToIndex: y,
    goToPrev: P,
    goToNext: L,
  };
}
const $t = 150;
const ae = 0.3;
function Ct(e, r) {
  const n = e.clientX - r.clientX;
  const o = e.clientY - r.clientY;
  return Math.sqrt(n * n + o * o);
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
  const [M, S] = d(0);
  const [D, k] = d(false);
  const [v, G] = d(1);
  const [w, N] = d(null);
  const [U, O] = d(null);
  const [it, dt] = d(1);
  const [ht, pt] = d(0);
  const [ft, at] = d(0);
  const [ut, Q] = d(false);
  const W = A(1);
  const V = A({ x: 0, y: 0 });
  const T = A(false);
  const Y = A(false);
  const q = A(0);
  const z = A(0);
  const K = A(0);
  const Z = A(1);
  const et = A({ x: 0, y: 0 });
  const rt = A({ x: 0, y: 0 });
  const tt = A({ x: 0, y: 0 });
  const xt = A(0);
  const $ = A(0);
  const g = A(null);
  const I = A(false);
  const R = A(null);
  const B = A(null);
  const gt = A(false);

  const mt = q((f) => {
    W.current = f;
    dt(f);
  }, []);

  const ot = q((f, u) => {
    V.current = { x: f, y: u };
    pt(f);
    at(u);
  }, []);

  const vt = q(() => {
    Q(true);
    mt(1);
    ot(0, 0);

    setTimeout(() => Q(false), 300);
  }, [mt, ot]);

  const Mt = q(
    (f, u, x) => {
      const n_e = imageSizes[e];
      if (!n_e) {
        return { x: 0, y: 0 };
      }
      const A = Math.max(0, (n_e.width * x - window.innerWidth) / 2);
      const H = Math.max(0, (n_e.height * x - window.innerHeight) / 2);
      return {
        x: Math.max(-A, Math.min(A, f)),
        y: Math.max(-H, Math.min(H, u)),
      };
    },
    [imageSizes, currentIndex]
  );

  isAnimating(() => {
    W.current = 1;
    V.current = { x: 0, y: 0 };
    dt(1);
    pt(0);
    at(0);
    Q(false);
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
      Math.abs(M) > $t
        ? (onClose(isMobile), true)
        : (setIsAnimating(true),
          S(0),
          d(0),
          G(1),
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
          const H = new DOMMatrixReadOnly(A).m41;
          let nt = 0;
          for (let lt = 0; lt < u; lt++) {
            nt += imageSizes[lt]?.width || 0;
          }
          x = H + nt;

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
      N(null);
      O(null);
      xt.current = x;
      $.current = 0;
      d(x);
      k(true);
      I.current = false;
      tt.current = { x: f.clientX, y: f.clientY };
      g.current = null;
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
      if (!D || isMobile) {
        return;
      }
      const u = f.clientX - tt.current.x;
      const x = f.clientY - tt.current.y;

      if (!g.current && (Math.abs(u) > 10 || Math.abs(x) > 10)) {
        g.current = Math.abs(u) > Math.abs(x) ? "x" : "y";
        I.current = true;
        onDragStart?.();
      }

      if (g.current === "x") {
        $.current = u;
        d(wt(xt.current + u));
      } else if (g.current === "y") {
        S(x);
        const b = Math.min(Math.abs(x) / $t, 1);
        G(1 - b * 0.5);
      }
    },
    [D, isMobile, wt, onDragStart]
  );

  const C = q(() => {
    if (!(!D || isMobile)) {
      k(false);

      if (g.current === "x") {
        const u = B.current ?? currentIndex;
        const $_current = $.current;
        let b = u;

        if ($_current < -80 && u < imagesCount - 1) {
          b = u + 1;
        } else if ($_current > 80 && u > 0) {
          b = u - 1;
        }

        if (b !== u) {
          const A = imageSizes[b]?.width || 0;
          const H = imageSizes[u]?.width || 0;
          const nt = b > u ? -H : A;
          setIsAnimating(true);
          N(b);
          d(nt);
          B.current = b;

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
            N(null);
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
        if (g.current === "y") {
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

      g.current = null;
    }
  }, [
    D,
    isMobile,
    currentIndex,
    a,
    imagesCount,
    imageSizes,
    t,
    onIndexChange,
    setIsAnimating,
  ]);

  const j = q(
    (f) => {
      if (!isMobile) {
        return;
      }
      z.current = Math.max(z.current, f.touches.length);

      if (f.touches.length === 2) {
        T.current = true;
        Y.current = true;
        K.current = Ct(f.touches[0], f.touches[1]);
        Z.current = W.current;
        k(false);
        g.current = null;
        d(0);
        S(0);
        G(1);
        Q(false);
        return;
      }

      if (W.current > 1) {
        z.current = 1;
        et.current = { x: f.touches[0].clientX, y: f.touches[0].clientY };
        rt.current = { ...V.current };
        k(true);
        I.current = false;
        g.current = null;
        Q(false);
        const f_target_1 = f.target;
        gt.current =
          f_target_1.tagName === "IMG" &&
          f_target_1.hasAttribute("data-viewer-image");
        return;
      }
      z.current = 1;
      Y.current = false;
      cancelAnimation();

      if (R.current) {
        clearTimeout(R.current);
        R.current = null;
      }

      setIsAnimating(false);
      d(0);
      I.current = false;
      const f_target = f.target;
      gt.current =
        f_target.tagName === "IMG" &&
        f_target.hasAttribute("data-viewer-image");
      tt.current = { x: f.touches[0].clientX, y: f.touches[0].clientY };
      g.current = null;
      k(true);
    },
    [isMobile, cancelAnimation, setIsAnimating]
  );

  const ct = q(
    (f) => {
      if (!isMobile) {
        return;
      }
      z.current = Math.max(z.current, f.touches.length);

      if (T.current && f.touches.length >= 2) {
        const b = Ct(f.touches[0], f.touches[1]);
        const A = Z.current * (b / K.current);
        const H = Math.min(Math.max(A, 0.5), 5);
        const nt = Mt(V.current.x, V.current.y, H);
        mt(H);
        ot(nt.x, nt.y);
        return;
      }

      if (W.current > 1 && D && !T.current) {
        const b = f.touches[0].clientX - et.current.x;
        const A = f.touches[0].clientY - et.current.y;

        if (Math.abs(b) > 5 || Math.abs(A) > 5) {
          I.current = true;
        }

        const H = Mt(rt.current.x + b, rt.current.y + A, W.current);
        ot(H.x, H.y);
        return;
      }
      if (!D) {
        return;
      }
      const u = f.touches[0].clientX - tt.current.x;
      const x = f.touches[0].clientY - tt.current.y;

      if (!g.current && (Math.abs(u) > 10 || Math.abs(x) > 10)) {
        g.current = Math.abs(u) > Math.abs(x) ? "x" : "y";
        I.current = true;
        onDragStart?.();
      }

      if (g.current === "x") {
        d(wt(u));
      } else if (g.current === "y") {
        S(x);
        const b = Math.min(Math.abs(x) / $t, 1);
        G(Math.round((1 - b * 0.7) * 100) / 100);
      }
    },
    [isMobile, D, mt, ot, Mt, wt, onDragStart]
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
      if (z.current > 1 || Y.current) {
        k(false);
        S(0);
        G(1);
        g.current = null;
        return;
      }
      if (Date.now() - q.current < 300) {
        k(false);
        S(0);
        G(1);
        g.current = null;
        return;
      }
      if (D) {
        k(false);

        if (!gt.current) {
          if (!g.current) {
            I.current = true;
            onClose(true);
            return;
          }
          if (g.current === "y" && M > 30) {
            I.current = true;
            onClose(true);
            return;
          }
        }

        if (g.current === "x") {
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
          if (g.current === "y") {
            t();
          }
        }
        g.current = null;
      }
    }
  }, [
    isMobile,
    D,
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
      Y.current = false;
      z.current = 0;
      g.current = null;
      k(false);
      d(0);
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
        const H = new DOMMatrixReadOnly(b).m41;
        let nt = 0;
        for (let lt = 0; lt < u; lt++) {
          nt += imageSizes[lt]?.width || 0;
        }
        d(H + nt);
      }
      const x_parentElement = x.parentElement;
      if (x_parentElement) {
        const H = x_parentElement.getBoundingClientRect();
        O({ width: H.width, height: H.height });
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
    N(null);
    return u;
  }, [currentIndex, imageSizes, trackRef, onIndexChange, setIsAnimating]);

  const yt = q(() => {
    O(null);

    if (a !== 0 || M !== 0 || v !== 1) {
      setIsAnimating(true);
      d(0);
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
    const f = B.current ?? currentIndex;
    const u = imageSizes[f] || { width: 600, height: 400 };
    if (isAnimating && w !== null) {
      const x = imageSizes[w] || u;
      return { width: x.width, height: x.height };
    }
    if (D && g.current !== "y" && a !== 0) {
      const x = a < 0 ? Math.min(f + 1, imagesCount - 1) : Math.max(f - 1, 0);
      if (x === f) {
        return u;
      }
      const b = imageSizes[x] || u;
      const A = u.width / 2 + b.width / 2;
      const H = Math.min(Math.abs(a) / A, 1);
      return {
        width: u.width + (b.width - u.width) * H,
        height: u.height + (b.height - u.height) * H,
      };
    }
    return u;
  }, [U, imageSizes, currentIndex, isAnimating, w, D, a, imagesCount]);

  const St = q(() => {
    setIsAnimating(true);
    S(window.innerHeight);
    G(0);
  }, [setIsAnimating]);

  return {
    offsetX: a,
    offsetY: M,
    isDragging: D,
    opacity: v,
    wasDragging: I,
    displaySize: Rt,
    animateClose: St,
    freezeInFlight: bt,
    unfreeze: yt,
    zoom: { scale: it, panX: ht, panY: ft, isAnimating: ut },
    desktopHandlers: {
      onMouseDown: i,
      onMouseMove: s,
      onMouseUp: C,
      onMouseLeave: C,
    },
    mobileHandlers: {
      onTouchStart: j,
      onTouchMove: ct,
      onTouchEnd: st,
      onTouchCancel: Tt,
    },
  };
}
const le = "QfmT";
const fe = "xqy4";
const de = "NpzD";
const he = "HGui";
const pe = "NtQC";
const me = "cCKk";
const ge = "XR1a";
const we = "n4wQ";
const be = "RNfl";
const ye = "OwUe";
const xe = "Lybd";
const ve = "FNyl";
const Te = "Guw5";
const Me = "rGLA";
const Re = "ASoN";
const Se = "QHx6";
const ke = "uxv8";
const $e = "ExKt";
const Pe = "VB9P";
const Le = "c7tf";
const Xe = "oqQI";
const De = "xbra";

const _ = {
  viewer: le,
  transitioning: fe,
  windowContainer: de,
  mobileContainer: he,
  mobileSlide: pe,
  closing: me,
  slide: ge,
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
  filmstrip: $e,
  filmstripLeaving: Pe,
  filmshot: Le,
  filmshotActive: Xe,
  filmshotImage: De,
};

function Ne({ currentIndex, total, onPrev, onNext }) {
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
function Ye({ total, currentIndex, onDotClick }) {
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
function Ce({ images, currentIndex, isClosing, onPick }) {
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
function Ee(e) {
  const { PI, min, max, cos, round } = Math;
  const p = e[0] | (e[1] << 8) | (e[2] << 16);
  const l = e[3] | (e[4] << 8);
  const y = (p & 63) / 63;
  const P = ((p >> 6) & 63) / 31.5 - 1;
  const L = ((p >> 12) & 63) / 31.5 - 1;
  const a = ((p >> 18) & 31) / 31;
  const d = p >> 23;
  const M = ((l >> 3) & 63) / 63;
  const S = ((l >> 9) & 63) / 63;
  const D = l >> 15;
  const k = max(3, D ? (d ? 5 : 7) : l & 7);
  const v = max(3, D ? l & 7 : d ? 5 : 7);
  const G = d ? (e[5] & 15) / 15 : 1;
  const w = (e[5] >> 4) / 15;
  const N = d ? 6 : 5;
  let U = 0;

  const O = (T, Y, q) => {
    const z = [];
    for (let K = 0; K < Y; K++) {
      for (let Z = K ? 0 : 1; Z * Y < T * (Y - K); Z++) {
        z.push((((e[N + (U >> 1)] >> ((U++ & 1) << 2)) & 15) / 7.5 - 1) * q);
      }
    }
    return z;
  };

  const it = O(k, v, a);
  const dt = O(3, 3, M * 1.25);
  const ht = O(3, 3, S * 1.25);
  const pt = d ? O(5, 5, w) : null;
  const ft = Oe(e);
  const at = round(ft > 1 ? 32 : 32 * ft);
  const ut = round(ft > 1 ? 32 / ft : 32);
  const Q = new Uint8Array(at * ut * 4);
  const W = [];
  const V = [];
  for (let T = 0, Y = 0; T < ut; T++) {
    for (let q = 0; q < at; q++, Y += 4) {
      let z = y;
      let K = P;
      let Z = L;
      let et = G;
      for (let $ = 0, g = max(k, d ? 5 : 3); $ < g; $++) {
        W[$] = cos((PI / at) * (q + 0.5) * $);
      }
      for (let $ = 0, g = max(v, d ? 5 : 3); $ < g; $++) {
        V[$] = cos((PI / ut) * (T + 0.5) * $);
      }
      for (let $ = 0, g = 0; $ < v; $++) {
        for (let I = $ ? 0 : 1, R = V[$] * 2; I * v < k * (v - $); I++, g++) {
          z += it[g] * W[I] * R;
        }
      }
      for (let $ = 0, g = 0; $ < 3; $++) {
        for (let I = $ ? 0 : 1, R = V[$] * 2; I < 3 - $; I++, g++) {
          const B = W[I] * R;
          K += dt[g] * B;
          Z += ht[g] * B;
        }
      }
      if (d && pt) {
        for (let $ = 0, g = 0; $ < 5; $++) {
          for (let I = $ ? 0 : 1, R = V[$] * 2; I < 5 - $; I++, g++) {
            et += pt[g] * W[I] * R;
          }
        }
      }
      const rt = z - (2 / 3) * K;
      const tt = (3 * z - rt + Z) / 2;
      const xt = tt - Z;
      Q[Y] = max(0, 255 * min(1, tt));
      Q[Y + 1] = max(0, 255 * min(1, xt));
      Q[Y + 2] = max(0, 255 * min(1, rt));
      Q[Y + 3] = max(0, 255 * min(1, et));
    }
  }
  return { w: at, h: ut, rgba: Q };
}
function Oe(e) {
  const [, , , r] = e;
  const n = e[2] & 128;
  const o = e[4] & 128;
  const h = o ? (n ? 5 : 7) : r & 7;
  const c = o ? r & 7 : n ? 5 : 7;
  return h / c;
}
function Ie(e, r, n) {
  const o = e * 4 + 1;
  const h = 6 + r * (5 + o);

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
    r >> 8,
    r & 255,
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
  for (let P = 0, L = 0, a = o - 1; P < r; P++, a += o - 1) {
    c.push(P + 1 < r ? 0 : 1, o & 255, o >> 8, ~o & 255, (o >> 8) ^ 255, 0);

    for (y = (y + l) % 65521; L < a; L++) {
      const d = n[L] & 255;
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
  for (const [P, L] of [
    [12, 29],
    [37, 41 + h],
  ]) {
    let a = -1;
    for (let M = P; M < L; M++) {
      a ^= c[M];
      a = (a >>> 4) ^ p[a & 15];
      a = (a >>> 4) ^ p[a & 15];
    }
    a = ~a;
    let d = L;
    c[d++] = a >>> 24;
    c[d++] = (a >> 16) & 255;
    c[d++] = (a >> 8) & 255;
    c[d++] = a & 255;
  }
  return `data:image/png;base64,${btoa(String.fromCharCode(...c))}`;
}
function _e(e) {
  const { w, h: h_1, rgba } = Ee(e);
  return Ie(w, h_1, rgba);
}
function He(e) {
  if (!e) {
    return null;
  }
  try {
    const r = atob(e);
    const n = new Uint8Array(r.length);
    for (let o = 0; o < r.length; o++) {
      n[o] = r.charCodeAt(o);
    }
    return _e(n);
  } catch {
    return null;
  }
}
function _t({ img, isActive, style, dataViewerImage, onFullReady }) {
  const { url, thumbUrl, loadSrc, loadThumb } = img;
  const [P, L] = d(null);
  const [a, d] = d(null);
  onFullReady(() => {
    if (!loadThumb || thumbUrl || a || P) {
      return;
    }
    let N = false;

    loadThumb().then((U) => {
      if (!N && U) {
        d(U);
      }
    });

    return () => {
      N = true;
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
    const N = new Image();
    N.src = url;
    return N.complete;
  });

  const [D, k] = d(false);
  const v = A(null);

  onFullReady(() => {
    const N = new AbortController();
    v.current = N;

    return () => N.abort();
  }, []);

  onFullReady(() => {
    if (!loadSrc || !isActive || P || D) {
      return;
    }
    let N = false;

    loadSrc(v.current?.signal).then((U) => {
      if (N) {
        return;
      }
      if (!U) {
        k(true);
        return;
      }
      const O = new Image();
      O.src = U;
      const it = () => {
        if (!N) {
          L(U);
          S(true);
        }
      };
      if (O.complete) {
        it();
        return;
      }
      O.onload = () => {
        (O.decode ? O.decode() : Promise.resolve()).catch(() => {}).then(it);
      };
    });

    return () => {
      N = true;
    };
  }, [loadSrc, isActive, P, D]);

  onFullReady(() => {
    if (loadSrc && !D) {
      return;
    }
    if (!thumbUrl) {
      S(true);
      return;
    }
    if (M || !isActive) {
      return;
    }
    const N = new Image();
    N.src = url;

    if (N.complete) {
      S(true);
      return;
    }

    let U = false;
    const O = () => {
      if (!U) {
        S(true);
      }
    };

    N.onload = () => {
      (N.decode ? N.decode() : Promise.resolve()).catch(() => {}).then(O);
    };

    return () => {
      U = true;
      N.onload = null;
    };
  }, [url, thumbUrl, isActive, M, loadSrc, D]);

  onFullReady(() => {
    if (isActive && M) {
      onFullReady?.();
    }
  }, [isActive, M]);

  const G = T(() => He(img.thumbhash), [img.thumbhash]);
  return u("img", {
    src:
      loadSrc && !D
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
const ze = 2;
function Fe({
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
        transform: `translateX(${-d + offsetX}px)`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((M, S) => {
        const D = Math.abs(S - currentIndex) <= ze;
        const r_S = imageSizes[S];
        const v = S === currentIndex;
        return u(
          "div",
          {
            className: _.slide,
            onClick: onImageClick,
            style: {
              ...(r_S
                ? { width: `${r_S.width}px`, height: `${r_S.height}px` }
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
              D &&
              u(_t, {
                img: M,
                isActive: v,
                onFullReady: v ? onActiveFullReady : undefined,
                style: {
                  width: r_S?.width || "auto",
                  height: r_S?.height || "auto",
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
        const S = d === currentIndex;
        const r_d = imageSizes[d];
        const k = r_d
          ? { width: `${r_d.width}px`, height: `${r_d.height}px` }
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
            "data-slide-index": d,
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
const Et = "cubic-bezier(0.32, 0.72, 0, 1)";
const Be = 220;

const Ot = {
  transform: "none",
  clipPath: "inset(0px round 0px)",
  borderRadius: "0px",
};

function Ge(e, r) {
  return !e || e === "0px" || r <= 0 || !Number.isFinite(r)
    ? "0px"
    : e.replace(/([\d.]+)px/g, (n, o) => {
        const h = parseFloat(o) / r;
        return Number.isFinite(h) ? `${h}px` : "0px";
      });
}
const It = 2.5;

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
  const P = A(null);
  const L = A(null);
  const a = A(null);
  const d = A(We()).current;
  const [M, S] = d(false);
  const [D, k] = d(sourceRect !== null && !d);
  const v = aj();
  const G = ce(images, v);
  const w = ie({ initialIndex: initialIndex, total: images.length });
  u_1();

  const N = q(() => {
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

  const O = q(() => {
    const P_current = P.current;

    if (
      L.current === "open" &&
      P_current &&
      P_current.playState === "running"
    ) {
      P_current.finish();
    }

    k(false);
  }, []);

  const it = q(() => {
    O();
    w.goToPrev();
  }, [O, w.goToPrev]);

  const dt = q(() => {
    O();
    w.goToNext();
  }, [O, w.goToNext]);

  const ht = q((t, i) => {
    if (!i) {
      return null;
    }
    const s = i.getBoundingClientRect();
    if (s.width === 0 || s.height === 0) {
      return null;
    }
    const C = t.hiddenLeft ?? 0;
    const j = t.hiddenTop ?? 0;
    const ct = t.hiddenRight ?? 0;
    const st = t.hiddenBottom ?? 0;
    const Tt = t.width + C + ct;
    const bt = t.height + j + st;
    const yt = (C / Tt) * s.width;
    const Rt = (j / bt) * s.height;
    const St = (ct / Tt) * s.width;
    const f = (st / bt) * s.height;
    const u = s.width - yt - St;
    const x = s.height - Rt - f;
    const b = Math.max(t.width / u, t.height / x);
    const A = t.width / b;
    const H = t.height / b;
    const nt = Math.max(0, (u - A) / 2);
    const lt = Math.max(0, (x - H) / 2);
    const Lt = yt + nt;
    const Xt = Rt + lt;
    const Dt = St + nt;
    const Nt = f + lt;
    const Ht = (Lt + (s.width - Dt)) / 2;
    const zt = (Xt + (s.height - Nt)) / 2;
    const Ft = s.left + s.width / 2;
    const At = s.top + s.height / 2;
    const Ut = Ft + (Ht - s.width / 2) * b;
    const Bt = At + (zt - s.height / 2) * b;
    const Gt = t.left + t.width / 2;
    const Wt = t.top + t.height / 2;
    const Zt = Gt - Ut;
    const Vt = Wt - Bt;
    const qt = `translate(${Zt}px, ${Vt}px) scale(${b})`;
    const Yt = Ge(t.borderRadius, b);
    const Kt = `inset(${Xt}px ${Dt}px ${Nt}px ${Lt}px round ${Yt})`;
    return { transform: qt, clipPath: Kt, borderRadius: Yt };
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
    const s = t.animate([i, { ...Ot }], {
      duration: kt,
      easing: Et,
      fill: "forwards",
    });
    P.current = s;
    L.current = "open";
    a.current = t;

    s.addEventListener("finish", () => {
      at(t);
      s.cancel();

      if (P.current === s) {
        P.current = null;
        L.current = null;
      }

      k(false);
    });

    s.addEventListener("cancel", () => k(false), { once: true });
  }, []);

  const Q = q(
    (t, i, s) => {
      ft(t, i);
      const C = t.animate(
        [
          i,
          {
            transform: s.transform,
            clipPath: s.clipPath,
            borderRadius: s.borderRadius,
          },
        ],
        { duration: kt, easing: Et, fill: "forwards" }
      );
      P.current = C;
      L.current = "close";
      a.current = t;

      C.addEventListener("finish", () => onClose());
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
      if (d) {
        onClose();
        return;
      }
      const P_current = P.current;
      const a_current = a.current;
      if (P_current && P_current.playState === "running" && a_current) {
        const ct = L.current === "open";
        const st = pt(a_current);
        P_current.cancel();
        at(a_current);
        P.current = null;
        L.current = null;

        if (ct) {
          const Tt = T.freezeInFlight();
          const bt = W(Tt);
          const yt = bt ? ht(bt, a_current) : null;
          S(true);

          if (yt) {
            Q(a_current, st, yt);
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
      const C = T.freezeInFlight();
      const j = W(C);
      if (t && v && !j) {
        T.animateClose();
        setTimeout(onClose, 150);
        return;
      }
      S(true);

      if (j) {
        const ct = U(C);
        const st = ht(j, ct);
        if (st && ct) {
          Q(ct, { ...Ot }, st);
          return;
        }
      }

      setTimeout(onClose, kt);
    },
    [M, W, w.currentIndex, pt, ht, ut, Q, U, v, onClose, d]
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
    onDragStart: O,
  });

  const [Y, q] = d(null);
  const z = A({ x: 0, y: 0, panX: 0, panY: 0 });
  const K = A(false);
  const Z = A(false);
  const et = A(null);
  const rt = A(null);

  const tt = q(
    (t = false) => {
      if (rt.current === null) {
        if (Y && !v && !d) {
          K.current = false;
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
    [V, v, d, Y]
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
  se({ onClose: xt, onPrev: it, onNext: dt });

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

  const [$, g] = d(-1);

  const I = q(() => {
    g(w.currentIndex);
  }, [w.currentIndex]);

  const R = A(null);

  zoomable(() => {
    const t = new AbortController();
    R.current = t;

    return () => t.abort();
  }, []);

  zoomable(() => {
    if ($ === w.currentIndex) {
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
            const C = new Image();
            C.decoding = "async";
            C.src = s;
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
  }, [$, w.currentIndex, images]);

  ab(() => {
    if (!sourceRect || d) {
      k(false);
      return;
    }
    const t = N();
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
    const C = i === "x" ? s.width : s.height;
    const j = (i === "x" ? s.originX : s.originY) / 100;
    const ct = C * j * (s.scale - 1);
    const st = C * (1 - j) * (s.scale - 1);
    return Math.max(-st, Math.min(ct, t));
  }, []);

  const gt = q(
    (t, i, s) => {
      const C = B(t, i, s);
      const j = t - C;
      return j === 0 ? t : C + Math.sign(j) * Math.min(72, Math.abs(j) * 0.18);
    },
    [B]
  );

  const mt = q(
    (t) => {
      if (!K.current || v) {
        return;
      }
      const i = t.clientX - z.current.x;
      const s = t.clientY - z.current.y;

      if (Math.abs(i) > 4 || Math.abs(s) > 4) {
        Z.current = true;
      }

      q(
        (C) =>
          C && {
            ...C,
            panX: gt(z.current.panX + i, "x", C),
            panY: gt(z.current.panY + s, "y", C),
          }
      );

      t.preventDefault();
    },
    [gt, v]
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

      Z.current &&
        (et.current !== null && window.clearTimeout(et.current),
        (et.current = window.setTimeout(() => {
          Z.current = false;
          et.current = null;
        }, 0)));
    }
  }, [B]);

  zoomable(() => {
    window.addEventListener("mousemove", mt);
    window.addEventListener("mouseup", ot);
    window.addEventListener("blur", ot);

    return () => {
      window.removeEventListener("mousemove", mt);
      window.removeEventListener("mouseup", ot);
      window.removeEventListener("blur", ot);

      if (et.current !== null) {
        window.clearTimeout(et.current);
      }
    };
  }, [ot, mt]);

  const vt = {
    onMouseDown: (t) => {
      if (!Y || v) {
        T.desktopHandlers.onMouseDown(t);
        return;
      }

      if (t.button === 0) {
        K.current = true;
        Z.current = false;

        z.current = {
          x: t.clientX,
          y: t.clientY,
          panX: Y.panX,
          panY: Y.panY,
        };

        q((i) => i && { ...i, isPanning: true });
        t.preventDefault();
      }
    },
    onMouseMove: (t) => {
      if (!Y || v) {
        T.desktopHandlers.onMouseMove(t);
        return;
      }
    },
    onMouseUp: () => {
      if (!Y || v) {
        T.desktopHandlers.onMouseUp();
        return;
      }
      ot();
    },
    onMouseLeave: () => {
      if (!Y || v) {
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
        if (Y) {
          q(null);
          return;
        }
        const s = t?.currentTarget?.getBoundingClientRect();
        if (!s || !t) {
          q({
            scale: It,
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
          scale: It,
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
    [V, v, zoomable, Y, T.displaySize]
  );

  return v(
    u("div", {
      ref: l,
      className: `${_.viewer} ${M ? _.closing : ""} ${
        D ? _.transitioning : ""
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
          u(Fe, {
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
            onActiveFullReady: I,
            zoom: Y,
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
            onActiveFullReady: I,
            zoom: T.zoom,
          }),
        !v &&
          u(Ne, {
            currentIndex: w.currentIndex,
            total: images.length,
            onPrev: it,
            onNext: dt,
          }),
        thumbs
          ? u(Ce, {
              images: images,
              currentIndex: w.currentIndex,
              isClosing: M,
              onPick: (t) => {
                O();
                w.goToIndex(t);
              },
            })
          : u(Ye, {
              total: images.length,
              currentIndex: w.currentIndex,
              onDotClick: (t) => {
                O();
                w.goToIndex(t);
              },
            }),
      ],
    }),
    document.body
  );
}

export { ImageViewer as ImageViewer, ImageViewer as default };
