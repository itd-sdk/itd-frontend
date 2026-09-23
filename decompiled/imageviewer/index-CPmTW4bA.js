import { q, d, h, A, T, u, S, G, _ as __1, $ } from "./index-B74jCtUp.js";
import { u as u_1 } from "./useBodyScrollLock-cBCPbJow.js";
import { u as u_2 } from "./IconChevronLeft-DjelCr6A.js";
import { u as u_3 } from "./IconChevronRight-CQP7oqfs.js";
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
      e._sentryDebugIds[n] = "68d6ed26-af93-4026-ab01-6579b205ec03";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-68d6ed26-af93-4026-ab01-6579b205ec03";
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

  const D = q(() => {
    if (r > 0) {
      y(r - 1);
    }
  }, [r, y]);

  const P = q(() => {
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
    goToPrev: D,
    goToNext: P,
  };
}
const $t = 150;
const ae = 0.3;
function Et(e, n) {
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
  const [L, S] = d(false);
  const [v, W] = d(1);
  const [w, N] = d(null);
  const [U, C] = d(null);
  const [it, dt] = d(1);
  const [ht, pt] = d(0);
  const [ft, at] = d(0);
  const [ut, K] = d(false);
  const G = A(1);
  const V = A({ x: 0, y: 0 });
  const T = A(false);
  const Y = A(false);
  const q = A(0);
  const z = A(0);
  const j = A(0);
  const Z = A(1);
  const et = A({ x: 0, y: 0 });
  const rt = A({ x: 0, y: 0 });
  const tt = A({ x: 0, y: 0 });
  const xt = A(0);
  const $ = A(0);
  const g = A(null);
  const O = A(false);
  const R = A(null);
  const B = A(null);
  const gt = A(false);

  const mt = q((f) => {
    G.current = f;
    dt(f);
  }, []);

  const ot = q((f, u) => {
    V.current = { x: f, y: u };
    pt(f);
    at(u);
  }, []);

  const vt = q(() => {
    K(true);
    mt(1);
    ot(0, 0);

    setTimeout(() => K(false), 300);
  }, [mt, ot]);

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

  isAnimating(() => {
    G.current = 1;
    V.current = { x: 0, y: 0 };
    dt(1);
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
          k(0),
          d(0),
          W(1),
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
      N(null);
      C(null);
      xt.current = x;
      $.current = 0;
      d(x);
      S(true);
      O.current = false;
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
      if (!L || isMobile) {
        return;
      }
      const u = f.clientX - tt.current.x;
      const x = f.clientY - tt.current.y;

      if (!g.current && (Math.abs(u) > 10 || Math.abs(x) > 10)) {
        g.current = Math.abs(u) > Math.abs(x) ? "x" : "y";
        O.current = true;
        onDragStart?.();
      }

      if (g.current === "x") {
        $.current = u;
        d(wt(xt.current + u));
      } else if (g.current === "y") {
        k(x);
        const b = Math.min(Math.abs(x) / $t, 1);
        W(1 - b * 0.5);
      }
    },
    [L, isMobile, wt, onDragStart]
  );

  const E = q(() => {
    if (!(!L || isMobile)) {
      S(false);

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
          const F = imageSizes[u]?.width || 0;
          const nt = b > u ? -F : A;
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
    L,
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
      z.current = Math.max(z.current, f.touches.length);

      if (f.touches.length === 2) {
        T.current = true;
        Y.current = true;
        j.current = Et(f.touches[0], f.touches[1]);
        Z.current = G.current;
        S(false);
        g.current = null;
        d(0);
        k(0);
        W(1);
        K(false);
        return;
      }

      if (G.current > 1) {
        z.current = 1;
        et.current = { x: f.touches[0].clientX, y: f.touches[0].clientY };
        rt.current = { ...V.current };
        S(true);
        O.current = false;
        g.current = null;
        K(false);
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
      O.current = false;
      const f_target = f.target;
      gt.current =
        f_target.tagName === "IMG" &&
        f_target.hasAttribute("data-viewer-image");
      tt.current = { x: f.touches[0].clientX, y: f.touches[0].clientY };
      g.current = null;
      S(true);
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
        const b = Et(f.touches[0], f.touches[1]);
        const A = Z.current * (b / j.current);
        const F = Math.min(Math.max(A, 0.5), 5);
        const nt = Mt(V.current.x, V.current.y, F);
        mt(F);
        ot(nt.x, nt.y);
        return;
      }

      if (G.current > 1 && L && !T.current) {
        const b = f.touches[0].clientX - et.current.x;
        const A = f.touches[0].clientY - et.current.y;

        if (Math.abs(b) > 5 || Math.abs(A) > 5) {
          O.current = true;
        }

        const F = Mt(rt.current.x + b, rt.current.y + A, G.current);
        ot(F.x, F.y);
        return;
      }
      if (!L) {
        return;
      }
      const u = f.touches[0].clientX - tt.current.x;
      const x = f.touches[0].clientY - tt.current.y;

      if (!g.current && (Math.abs(u) > 10 || Math.abs(x) > 10)) {
        g.current = Math.abs(u) > Math.abs(x) ? "x" : "y";
        O.current = true;
        onDragStart?.();
      }

      if (g.current === "x") {
        d(wt(u));
      } else if (g.current === "y") {
        k(x);
        const b = Math.min(Math.abs(x) / $t, 1);
        W(Math.round((1 - b * 0.7) * 100) / 100);
      }
    },
    [isMobile, L, mt, ot, Mt, wt, onDragStart]
  );

  const st = q(() => {
    if (isMobile) {
      if (T.current) {
        T.current = false;
        q.current = Date.now();

        if (G.current < 1.1) {
          vt();
        }

        return;
      }
      if (G.current > 1) {
        S(false);
        return;
      }
      if (z.current > 1 || Y.current) {
        S(false);
        k(0);
        W(1);
        g.current = null;
        return;
      }
      if (Date.now() - q.current < 300) {
        S(false);
        k(0);
        W(1);
        g.current = null;
        return;
      }
      if (L) {
        S(false);

        if (!gt.current) {
          if (!g.current) {
            O.current = true;
            onClose(true);
            return;
          }
          if (g.current === "y" && M > 30) {
            O.current = true;
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
    L,
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
      S(false);
      d(0);
      k(0);
      W(1);
      setIsAnimating(false);
      G.current < 1.1 && vt();
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
        C({ width: F.width, height: F.height });
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
    C(null);

    if (a !== 0 || M !== 0 || v !== 1) {
      setIsAnimating(true);
      d(0);
      k(0);
      W(1);
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
    if (L && g.current !== "y" && a !== 0) {
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
  }, [U, imageSizes, currentIndex, isAnimating, w, L, a, imagesCount]);

  const kt = q(() => {
    setIsAnimating(true);
    k(window.innerHeight);
    W(0);
  }, [setIsAnimating]);

  return {
    offsetX: a,
    offsetY: M,
    isDragging: L,
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
      onMouseUp: E,
      onMouseLeave: E,
    },
    mobileHandlers: {
      onTouchStart: Q,
      onTouchMove: ct,
      onTouchEnd: st,
      onTouchCancel: Tt,
    },
  };
}
const le = "BsEn";
const fe = "TqE9";
const de = "T6UE";
const he = "G97F";
const pe = "XsBk";
const me = "MBpP";
const ge = "hu7U";
const we = "NtR0";
const be = "tvYM";
const ye = "k6AQ";
const xe = "FjY7";
const ve = "pUD4";
const Te = "VtQt";
const Me = "fX57";
const Re = "I7ou";
const ke = "j9Bp";
const Se = "mIF4";
const $e = "cYXD";
const De = "zsQF";
const Pe = "Nfux";
const Xe = "jNak";
const Le = "pjmk";

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
  dot: ke,
  active: Se,
  filmstrip: $e,
  filmstripLeaving: De,
  filmshot: Pe,
  filmshotActive: Xe,
  filmshotImage: Le,
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
            children: u(u_2, { size: 24 }),
          }),
          u("button", {
            className: `${_.navArea} ${_.navRight}`,
            onClick: onNext,
            disabled: currentIndex === total - 1,
            children: u(u_3, { size: 24 }),
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
function Ee({ images, currentIndex, isClosing, onPick }) {
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
function Ie(e) {
  const { PI, min, max, cos, round } = Math;
  const p = e[0] | (e[1] << 8) | (e[2] << 16);
  const l = e[3] | (e[4] << 8);
  const y = (p & 63) / 63;
  const D = ((p >> 6) & 63) / 31.5 - 1;
  const P = ((p >> 12) & 63) / 31.5 - 1;
  const a = ((p >> 18) & 31) / 31;
  const d = p >> 23;
  const M = ((l >> 3) & 63) / 63;
  const k = ((l >> 9) & 63) / 63;
  const L = l >> 15;
  const S = max(3, L ? (d ? 5 : 7) : l & 7);
  const v = max(3, L ? l & 7 : d ? 5 : 7);
  const W = d ? (e[5] & 15) / 15 : 1;
  const w = (e[5] >> 4) / 15;
  const N = d ? 6 : 5;
  let U = 0;

  const C = (T, Y, q) => {
    const z = [];
    for (let j = 0; j < Y; j++) {
      for (let Z = j ? 0 : 1; Z * Y < T * (Y - j); Z++) {
        z.push((((e[N + (U >> 1)] >> ((U++ & 1) << 2)) & 15) / 7.5 - 1) * q);
      }
    }
    return z;
  };

  const it = C(S, v, a);
  const dt = C(3, 3, M * 1.25);
  const ht = C(3, 3, k * 1.25);
  const pt = d ? C(5, 5, w) : null;
  const ft = Ce(e);
  const at = round(ft > 1 ? 32 : 32 * ft);
  const ut = round(ft > 1 ? 32 / ft : 32);
  const K = new Uint8Array(at * ut * 4);
  const G = [];
  const V = [];
  for (let T = 0, Y = 0; T < ut; T++) {
    for (let q = 0; q < at; q++, Y += 4) {
      let z = y;
      let j = D;
      let Z = P;
      let et = W;
      for (let $ = 0, g = max(S, d ? 5 : 3); $ < g; $++) {
        G[$] = cos((PI / at) * (q + 0.5) * $);
      }
      for (let $ = 0, g = max(v, d ? 5 : 3); $ < g; $++) {
        V[$] = cos((PI / ut) * (T + 0.5) * $);
      }
      for (let $ = 0, g = 0; $ < v; $++) {
        for (let O = $ ? 0 : 1, R = V[$] * 2; O * v < S * (v - $); O++, g++) {
          z += it[g] * G[O] * R;
        }
      }
      for (let $ = 0, g = 0; $ < 3; $++) {
        for (let O = $ ? 0 : 1, R = V[$] * 2; O < 3 - $; O++, g++) {
          const B = G[O] * R;
          j += dt[g] * B;
          Z += ht[g] * B;
        }
      }
      if (d && pt) {
        for (let $ = 0, g = 0; $ < 5; $++) {
          for (let O = $ ? 0 : 1, R = V[$] * 2; O < 5 - $; O++, g++) {
            et += pt[g] * G[O] * R;
          }
        }
      }
      const rt = z - (2 / 3) * j;
      const tt = (3 * z - rt + Z) / 2;
      const xt = tt - Z;
      K[Y] = max(0, 255 * min(1, tt));
      K[Y + 1] = max(0, 255 * min(1, xt));
      K[Y + 2] = max(0, 255 * min(1, rt));
      K[Y + 3] = max(0, 255 * min(1, et));
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
  for (let D = 0, P = 0, a = o - 1; D < n; D++, a += o - 1) {
    c.push(D + 1 < n ? 0 : 1, o & 255, o >> 8, ~o & 255, (o >> 8) ^ 255, 0);

    for (y = (y + l) % 65521; P < a; P++) {
      const d = r[P] & 255;
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
  for (const [D, P] of [
    [12, 29],
    [37, 41 + h],
  ]) {
    let a = -1;
    for (let M = D; M < P; M++) {
      a ^= c[M];
      a = (a >>> 4) ^ p[a & 15];
      a = (a >>> 4) ^ p[a & 15];
    }
    a = ~a;
    let d = P;
    c[d++] = a >>> 24;
    c[d++] = (a >> 16) & 255;
    c[d++] = (a >> 8) & 255;
    c[d++] = a & 255;
  }
  return `data:image/png;base64,${btoa(String.fromCharCode(...c))}`;
}
function _e(e) {
  const { w, h: h_1, rgba } = Ie(e);
  return Oe(w, h_1, rgba);
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
  const [D, P] = d(null);
  const [a, d] = d(null);
  onFullReady(() => {
    if (!loadThumb || thumbUrl || a || D) {
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
  }, [loadThumb, thumbUrl, a, D]);

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
    const N = new Image();
    N.src = url;
    return N.complete;
  });

  const [L, S] = d(false);
  const v = A(null);

  onFullReady(() => {
    const N = new AbortController();
    v.current = N;

    return () => N.abort();
  }, []);

  onFullReady(() => {
    if (!loadSrc || !isActive || D || L) {
      return;
    }
    let N = false;

    loadSrc(v.current?.signal).then((U) => {
      if (N) {
        return;
      }
      if (!U) {
        S(true);
        return;
      }
      const C = new Image();
      C.src = U;
      const it = () => {
        if (!N) {
          P(U);
          k(true);
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
      N = true;
    };
  }, [loadSrc, isActive, D, L]);

  onFullReady(() => {
    if (loadSrc && !L) {
      return;
    }
    if (!thumbUrl) {
      k(true);
      return;
    }
    if (M || !isActive) {
      return;
    }
    const N = new Image();
    N.src = url;

    if (N.complete) {
      k(true);
      return;
    }

    let U = false;
    const C = () => {
      if (!U) {
        k(true);
      }
    };

    N.onload = () => {
      (N.decode ? N.decode() : Promise.resolve()).catch(() => {}).then(C);
    };

    return () => {
      U = true;
      N.onload = null;
    };
  }, [url, thumbUrl, isActive, M, loadSrc, L]);

  onFullReady(() => {
    if (isActive && M) {
      onFullReady?.();
    }
  }, [isActive, M]);

  const W = T(() => Fe(img.thumbhash), [img.thumbhash]);
  return u("img", {
    src:
      loadSrc && !L
        ? D ?? thumbUrl ?? a ?? undefined
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
      ...(!M && W
        ? { backgroundImage: `url(${W})`, backgroundSize: "100% 100%" }
        : {}),
    },
  });
}
const ze = 2;
function He({
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
        const L = Math.abs(k - currentIndex) <= ze;
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
              L &&
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
const It = "cubic-bezier(0.32, 0.72, 0, 1)";
const Be = 220;

const Ct = {
  transform: "none",
  clipPath: "inset(0px round 0px)",
  borderRadius: "0px",
};

function We(e, n) {
  return !e || e === "0px" || n <= 0 || !Number.isFinite(n)
    ? "0px"
    : e.replace(/([\d.]+)px/g, (r, o) => {
        const h = parseFloat(o) / n;
        return Number.isFinite(h) ? `${h}px` : "0px";
      });
}
const Ot = 2.5;

const Ge = () =>
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
  const D = A(null);
  const P = A(null);
  const a = A(null);
  const d = A(Ge()).current;
  const [M, k] = d(false);
  const [L, S] = d(sourceRect !== null && !d);
  const v = G();
  const W = ce(images, v);
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

  const C = q(() => {
    const D_current = D.current;

    if (
      P.current === "open" &&
      D_current &&
      D_current.playState === "running"
    ) {
      D_current.finish();
    }

    S(false);
  }, []);

  const it = q(() => {
    C();
    w.goToPrev();
  }, [C, w.goToPrev]);

  const dt = q(() => {
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
    const E = t.hiddenLeft ?? 0;
    const Q = t.hiddenTop ?? 0;
    const ct = t.hiddenRight ?? 0;
    const st = t.hiddenBottom ?? 0;
    const Tt = t.width + E + ct;
    const bt = t.height + Q + st;
    const yt = (E / Tt) * s.width;
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
    const Pt = yt + nt;
    const Xt = Rt + lt;
    const Lt = kt + nt;
    const Nt = f + lt;
    const Ft = (Pt + (s.width - Lt)) / 2;
    const zt = (Xt + (s.height - Nt)) / 2;
    const Ht = s.left + s.width / 2;
    const At = s.top + s.height / 2;
    const Ut = Ht + (Ft - s.width / 2) * b;
    const Bt = At + (zt - s.height / 2) * b;
    const Wt = t.left + t.width / 2;
    const Gt = t.top + t.height / 2;
    const Zt = Wt - Ut;
    const Vt = Gt - Bt;
    const qt = `translate(${Zt}px, ${Vt}px) scale(${b})`;
    const Yt = We(t.borderRadius, b);
    const jt = `inset(${Xt}px ${Lt}px ${Nt}px ${Pt}px round ${Yt})`;
    return { transform: qt, clipPath: jt, borderRadius: Yt };
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
    const s = t.animate([i, { ...Ct }], {
      duration: St,
      easing: It,
      fill: "forwards",
    });
    D.current = s;
    P.current = "open";
    a.current = t;

    s.addEventListener("finish", () => {
      at(t);
      s.cancel();

      if (D.current === s) {
        D.current = null;
        P.current = null;
      }

      S(false);
    });

    s.addEventListener("cancel", () => S(false), { once: true });
  }, []);

  const K = q(
    (t, i, s) => {
      ft(t, i);
      const E = t.animate(
        [
          i,
          {
            transform: s.transform,
            clipPath: s.clipPath,
            borderRadius: s.borderRadius,
          },
        ],
        { duration: St, easing: It, fill: "forwards" }
      );
      D.current = E;
      P.current = "close";
      a.current = t;

      E.addEventListener("finish", () => onClose());
    },
    [onClose]
  );

  const G = q(
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
      const D_current = D.current;
      const a_current = a.current;
      if (D_current && D_current.playState === "running" && a_current) {
        const ct = P.current === "open";
        const st = pt(a_current);
        D_current.cancel();
        at(a_current);
        D.current = null;
        P.current = null;

        if (ct) {
          const Tt = T.freezeInFlight();
          const bt = G(Tt);
          const yt = bt ? ht(bt, a_current) : null;
          k(true);

          if (yt) {
            K(a_current, st, yt);
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
      const E = T.freezeInFlight();
      const Q = G(E);
      if (t && v && !Q) {
        T.animateClose();
        setTimeout(onClose, 150);
        return;
      }
      k(true);

      if (Q) {
        const ct = U(E);
        const st = ht(Q, ct);
        if (st && ct) {
          K(ct, { ...Ct }, st);
          return;
        }
      }

      setTimeout(onClose, St);
    },
    [M, G, w.currentIndex, pt, ht, ut, K, U, v, onClose, d]
  );

  const T = ue({
    currentIndex: w.currentIndex,
    imagesCount: images.length,
    imageSizes: W,
    isMobile: v,
    isAnimating: w.isAnimating,
    setIsAnimating: w.setIsAnimating,
    cancelAnimation: w.cancelAnimation,
    onIndexChange: w.goToIndex,
    onClose: V,
    trackRef: y,
    onDragStart: C,
  });

  const [Y, q] = d(null);
  const z = A({ x: 0, y: 0, panX: 0, panY: 0 });
  const j = A(false);
  const Z = A(false);
  const et = A(null);
  const rt = A(null);

  const tt = q(
    (t = false) => {
      if (rt.current === null) {
        if (Y && !v && !d) {
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

  const O = q(() => {
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
            const E = new Image();
            E.decoding = "async";
            E.src = s;
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

  __1(() => {
    if (!sourceRect || d) {
      S(false);
      return;
    }
    const t = N();
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
      D.current?.cancel();
    };
  }, []);

  zoomable(() => {
    q(null);
  }, [w.currentIndex]);

  const B = q((t, i, s) => {
    const E = i === "x" ? s.width : s.height;
    const Q = (i === "x" ? s.originX : s.originY) / 100;
    const ct = E * Q * (s.scale - 1);
    const st = E * (1 - Q) * (s.scale - 1);
    return Math.max(-st, Math.min(ct, t));
  }, []);

  const gt = q(
    (t, i, s) => {
      const E = B(t, i, s);
      const Q = t - E;
      return Q === 0 ? t : E + Math.sign(Q) * Math.min(72, Math.abs(Q) * 0.18);
    },
    [B]
  );

  const mt = q(
    (t) => {
      if (!j.current || v) {
        return;
      }
      const i = t.clientX - z.current.x;
      const s = t.clientY - z.current.y;

      if (Math.abs(i) > 4 || Math.abs(s) > 4) {
        Z.current = true;
      }

      q(
        (E) =>
          E && {
            ...E,
            panX: gt(z.current.panX + i, "x", E),
            panY: gt(z.current.panY + s, "y", E),
          }
      );

      t.preventDefault();
    },
    [gt, v]
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
        j.current = true;
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
    [V, v, zoomable, Y, T.displaySize]
  );

  return $(
    u("div", {
      ref: l,
      className: `${_.viewer} ${M ? _.closing : ""} ${
        L ? _.transitioning : ""
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
          u(He, {
            images: images,
            imageSizes: W,
            currentIndex: w.currentIndex,
            offsetX: T.offsetX,
            offsetY: T.offsetY,
            isAnimating: w.isAnimating,
            displaySize: T.displaySize,
            trackRef: y,
            handlers: vt,
            onImageClick: wt,
            onActiveFullReady: O,
            zoom: Y,
          }),
        v &&
          u(Ue, {
            images: images,
            imageSizes: W,
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
          u(Ne, {
            currentIndex: w.currentIndex,
            total: images.length,
            onPrev: it,
            onNext: dt,
          }),
        thumbs
          ? u(Ee, {
              images: images,
              currentIndex: w.currentIndex,
              isClosing: M,
              onPick: (t) => {
                C();
                w.goToIndex(t);
              },
            })
          : u(Ye, {
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
