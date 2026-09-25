import { q, d, h, A, T, u, S, C, _ as __1, $ } from "./index-gHxZkwFX.js";
import { u as u_1 } from "./useBodyScrollLock-hVXIewUP.js";
import { u as u_2 } from "./IconChevronLeft-CtO78HWI.js";
import { u as u_3 } from "./IconChevronRight-s5obFhYp.js";
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
    e.SENTRY_RELEASE = { id: "1.1.4" };
    const n = new e.Error().stack;

    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "c7d111b4-ce6b-4abc-bb32-42ff2a4523be";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-c7d111b4-ce6b-4abc-bb32-42ff2a4523be";
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
function Yt(e, n) {
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
  const [v, W] = d(1);
  const [w, N] = d(null);
  const [B, C] = d(null);
  const [it, ft] = d(1);
  const [ht, pt] = d(0);
  const [dt, at] = d(0);
  const [ut, J] = d(false);
  const G = A(1);
  const V = A({ x: 0, y: 0 });
  const T = A(false);
  const E = A(false);
  const q = A(0);
  const z = A(0);
  const j = A(0);
  const Z = A(1);
  const et = A({ x: 0, y: 0 });
  const rt = A({ x: 0, y: 0 });
  const tt = A({ x: 0, y: 0 });
  const xt = A(0);
  const P = A(0);
  const m = A(null);
  const O = A(false);
  const R = A(null);
  const U = A(null);
  const mt = A(false);

  const gt = q((d) => {
    G.current = d;
    ft(d);
  }, []);

  const ot = q((d, u) => {
    V.current = { x: d, y: u };
    pt(d);
    at(u);
  }, []);

  const vt = q(() => {
    J(true);
    gt(1);
    ot(0, 0);

    setTimeout(() => J(false), 300);
  }, [gt, ot]);

  const Mt = q(
    (d, u, x) => {
      const r_e = imageSizes[e];
      if (!r_e) {
        return { x: 0, y: 0 };
      }
      const A = Math.max(0, (r_e.width * x - window.innerWidth) / 2);
      const H = Math.max(0, (r_e.height * x - window.innerHeight) / 2);
      return {
        x: Math.max(-A, Math.min(A, d)),
        y: Math.max(-H, Math.min(H, u)),
      };
    },
    [imageSizes, currentIndex]
  );

  isAnimating(() => {
    G.current = 1;
    V.current = { x: 0, y: 0 };
    ft(1);
    pt(0);
    at(0);
    J(false);
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
      Math.abs(M) > Pt
        ? (onClose(isMobile), true)
        : (setIsAnimating(true),
          S(0),
          f(0),
          W(1),
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
      const u = U.current ?? currentIndex;
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

      if (U.current !== null) {
        onIndexChange(U.current);
        U.current = null;
      }

      setIsAnimating(false);
      N(null);
      C(null);
      xt.current = x;
      P.current = 0;
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
        P.current = u;
        f(wt(xt.current + u));
      } else if (m.current === "y") {
        S(x);
        const b = Math.min(Math.abs(x) / Pt, 1);
        W(1 - b * 0.5);
      }
    },
    [X, isMobile, wt, onDragStart]
  );

  const Y = q(() => {
    if (!(!X || isMobile)) {
      k(false);

      if (m.current === "x") {
        const u = U.current ?? currentIndex;
        const P_current = P.current;
        let b = u;

        if (P_current < -80 && u < imagesCount - 1) {
          b = u + 1;
        } else if (P_current > 80 && u > 0) {
          b = u - 1;
        }

        if (b !== u) {
          const A = imageSizes[b]?.width || 0;
          const H = imageSizes[u]?.width || 0;
          const nt = b > u ? -H : A;
          setIsAnimating(true);
          N(b);
          f(nt);
          U.current = b;

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
            N(null);
            f(0);
            U.current = null;
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

  const K = q(
    (d) => {
      if (!isMobile) {
        return;
      }
      z.current = Math.max(z.current, d.touches.length);

      if (d.touches.length === 2) {
        T.current = true;
        E.current = true;
        j.current = Yt(d.touches[0], d.touches[1]);
        Z.current = G.current;
        k(false);
        m.current = null;
        f(0);
        S(0);
        W(1);
        J(false);
        return;
      }

      if (G.current > 1) {
        z.current = 1;
        et.current = { x: d.touches[0].clientX, y: d.touches[0].clientY };
        rt.current = { ...V.current };
        k(true);
        O.current = false;
        m.current = null;
        J(false);
        const d_target_1 = d.target;
        mt.current =
          d_target_1.tagName === "IMG" &&
          d_target_1.hasAttribute("data-viewer-image");
        return;
      }
      z.current = 1;
      E.current = false;
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
      z.current = Math.max(z.current, d.touches.length);

      if (T.current && d.touches.length >= 2) {
        const b = Yt(d.touches[0], d.touches[1]);
        const A = Z.current * (b / j.current);
        const H = Math.min(Math.max(A, 0.5), 5);
        const nt = Mt(V.current.x, V.current.y, H);
        gt(H);
        ot(nt.x, nt.y);
        return;
      }

      if (G.current > 1 && X && !T.current) {
        const b = d.touches[0].clientX - et.current.x;
        const A = d.touches[0].clientY - et.current.y;

        if (Math.abs(b) > 5 || Math.abs(A) > 5) {
          O.current = true;
        }

        const H = Mt(rt.current.x + b, rt.current.y + A, G.current);
        ot(H.x, H.y);
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
        const b = Math.min(Math.abs(x) / Pt, 1);
        W(Math.round((1 - b * 0.7) * 100) / 100);
      }
    },
    [isMobile, X, gt, ot, Mt, wt, onDragStart]
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
        k(false);
        return;
      }
      if (z.current > 1 || E.current) {
        k(false);
        S(0);
        W(1);
        m.current = null;
        return;
      }
      if (Date.now() - q.current < 300) {
        k(false);
        S(0);
        W(1);
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
      E.current = false;
      z.current = 0;
      m.current = null;
      k(false);
      f(0);
      S(0);
      W(1);
      setIsAnimating(false);
      G.current < 1.1 && vt();
    }
  }, [isMobile, vt, setIsAnimating]);

  const bt = q(() => {
    const U_current = U.current;
    const u = U_current ?? currentIndex;
    const x = trackRef?.current;
    if (x) {
      const b = getComputedStyle(x).transform;
      if (b && b !== "none") {
        const H = new DOMMatrixReadOnly(b).m41;
        let nt = 0;
        for (let lt = 0; lt < u; lt++) {
          nt += imageSizes[lt]?.width || 0;
        }
        f(H + nt);
      }
      const x_parentElement = x.parentElement;
      if (x_parentElement) {
        const H = x_parentElement.getBoundingClientRect();
        C({ width: H.width, height: H.height });
      }
    }

    if (R.current) {
      clearTimeout(R.current);
      R.current = null;
    }

    if (U_current !== null) {
      onIndexChange(U_current);
      U.current = null;
    }

    setIsAnimating(false);
    N(null);
    return u;
  }, [currentIndex, imageSizes, trackRef, onIndexChange, setIsAnimating]);

  const yt = q(() => {
    C(null);

    if (a !== 0 || M !== 0 || v !== 1) {
      setIsAnimating(true);
      f(0);
      S(0);
      W(1);
      R.current && clearTimeout(R.current);

      R.current = window.setTimeout(() => {
        R.current = null;
        setIsAnimating(false);
      }, 300);
    }
  }, [a, M, v, setIsAnimating]);

  const Rt = T(() => {
    if (B) {
      return B;
    }
    const d = U.current ?? currentIndex;
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
      const A = u.width / 2 + b.width / 2;
      const H = Math.min(Math.abs(a) / A, 1);
      return {
        width: u.width + (b.width - u.width) * H,
        height: u.height + (b.height - u.height) * H,
      };
    }
    return u;
  }, [B, imageSizes, currentIndex, isAnimating, w, X, a, imagesCount]);

  const St = q(() => {
    setIsAnimating(true);
    S(window.innerHeight);
    W(0);
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
      onMouseUp: Y,
      onMouseLeave: Y,
    },
    mobileHandlers: {
      onTouchStart: K,
      onTouchMove: ct,
      onTouchEnd: st,
      onTouchCancel: Tt,
    },
  };
}
const le = "yBMc";
const de = "d1vP";
const fe = "kwWM";
const he = "B5Lr";
const pe = "txUn";
const ge = "zpdT";
const me = "rvQw";
const we = "EETJ";
const be = "D3jr";
const ye = "RVlS";
const xe = "dBB0";
const ve = "EN7x";
const Te = "BBsF";
const Me = "G6do";
const Re = "Qxxb";
const Se = "BcJn";
const ke = "dTJH";
const Pe = "wOuN";
const $e = "GNPm";
const De = "Ga8A";
const Le = "Mk56";
const Xe = "tJPq";

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
  filmstrip: Pe,
  filmstripLeaving: $e,
  filmshot: De,
  filmshotActive: Le,
  filmshotImage: Xe,
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
function Ye({ images, currentIndex, isClosing, onPick }) {
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
  const $ = ((p >> 6) & 63) / 31.5 - 1;
  const D = ((p >> 12) & 63) / 31.5 - 1;
  const a = ((p >> 18) & 31) / 31;
  const f = p >> 23;
  const M = ((l >> 3) & 63) / 63;
  const S = ((l >> 9) & 63) / 63;
  const X = l >> 15;
  const k = max(3, X ? (f ? 5 : 7) : l & 7);
  const v = max(3, X ? l & 7 : f ? 5 : 7);
  const W = f ? (e[5] & 15) / 15 : 1;
  const w = (e[5] >> 4) / 15;
  const N = f ? 6 : 5;
  let B = 0;

  const C = (T, E, q) => {
    const z = [];
    for (let j = 0; j < E; j++) {
      for (let Z = j ? 0 : 1; Z * E < T * (E - j); Z++) {
        z.push((((e[N + (B >> 1)] >> ((B++ & 1) << 2)) & 15) / 7.5 - 1) * q);
      }
    }
    return z;
  };

  const it = C(k, v, a);
  const ft = C(3, 3, M * 1.25);
  const ht = C(3, 3, S * 1.25);
  const pt = f ? C(5, 5, w) : null;
  const dt = Ce(e);
  const at = round(dt > 1 ? 32 : 32 * dt);
  const ut = round(dt > 1 ? 32 / dt : 32);
  const J = new Uint8Array(at * ut * 4);
  const G = [];
  const V = [];
  for (let T = 0, E = 0; T < ut; T++) {
    for (let q = 0; q < at; q++, E += 4) {
      let z = y;
      let j = $;
      let Z = D;
      let et = W;
      for (let P = 0, m = max(k, f ? 5 : 3); P < m; P++) {
        G[P] = cos((PI / at) * (q + 0.5) * P);
      }
      for (let P = 0, m = max(v, f ? 5 : 3); P < m; P++) {
        V[P] = cos((PI / ut) * (T + 0.5) * P);
      }
      for (let P = 0, m = 0; P < v; P++) {
        for (let O = P ? 0 : 1, R = V[P] * 2; O * v < k * (v - P); O++, m++) {
          z += it[m] * G[O] * R;
        }
      }
      for (let P = 0, m = 0; P < 3; P++) {
        for (let O = P ? 0 : 1, R = V[P] * 2; O < 3 - P; O++, m++) {
          const U = G[O] * R;
          j += ft[m] * U;
          Z += ht[m] * U;
        }
      }
      if (f && pt) {
        for (let P = 0, m = 0; P < 5; P++) {
          for (let O = P ? 0 : 1, R = V[P] * 2; O < 5 - P; O++, m++) {
            et += pt[m] * G[O] * R;
          }
        }
      }
      const rt = z - (2 / 3) * j;
      const tt = (3 * z - rt + Z) / 2;
      const xt = tt - Z;
      J[E] = max(0, 255 * min(1, tt));
      J[E + 1] = max(0, 255 * min(1, xt));
      J[E + 2] = max(0, 255 * min(1, rt));
      J[E + 3] = max(0, 255 * min(1, et));
    }
  }
  return { w: at, h: ut, rgba: J };
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
  for (let $ = 0, D = 0, a = o - 1; $ < n; $++, a += o - 1) {
    c.push($ + 1 < n ? 0 : 1, o & 255, o >> 8, ~o & 255, (o >> 8) ^ 255, 0);

    for (y = (y + l) % 65521; D < a; D++) {
      const f = r[D] & 255;
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
    let f = D;
    c[f++] = a >>> 24;
    c[f++] = (a >> 16) & 255;
    c[f++] = (a >> 8) & 255;
    c[f++] = a & 255;
  }
  return `data:image/png;base64,${btoa(String.fromCharCode(...c))}`;
}
function _e(e) {
  const { w, h: h_1, rgba } = Ie(e);
  return Oe(w, h_1, rgba);
}
function He(e) {
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
  const [a, f] = d(null);
  onFullReady(() => {
    if (!loadThumb || thumbUrl || a || $) {
      return;
    }
    let N = false;

    loadThumb().then((B) => {
      if (!N && B) {
        f(B);
      }
    });

    return () => {
      N = true;
    };
  }, [loadThumb, thumbUrl, a, $]);

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

  const [X, k] = d(false);
  const v = A(null);

  onFullReady(() => {
    const N = new AbortController();
    v.current = N;

    return () => N.abort();
  }, []);

  onFullReady(() => {
    if (!loadSrc || !isActive || $ || X) {
      return;
    }
    let N = false;

    loadSrc(v.current?.signal).then((B) => {
      if (N) {
        return;
      }
      if (!B) {
        k(true);
        return;
      }
      const C = new Image();
      C.src = B;
      const it = () => {
        if (!N) {
          D(B);
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
      N = true;
    };
  }, [loadSrc, isActive, $, X]);

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
    const N = new Image();
    N.src = url;

    if (N.complete) {
      S(true);
      return;
    }

    let B = false;
    const C = () => {
      if (!B) {
        S(true);
      }
    };

    N.onload = () => {
      (N.decode ? N.decode() : Promise.resolve()).catch(() => {}).then(C);
    };

    return () => {
      B = true;
      N.onload = null;
    };
  }, [url, thumbUrl, isActive, M, loadSrc, X]);

  onFullReady(() => {
    if (isActive && M) {
      onFullReady?.();
    }
  }, [isActive, M]);

  const W = T(() => He(img.thumbhash), [img.thumbhash]);
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
      ...(!M && W
        ? { backgroundImage: `url(${W})`, backgroundSize: "100% 100%" }
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
        const X = Math.abs(S - currentIndex) <= ze;
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
const Ae = 2;
function Be({
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
        const M = Math.abs(f - currentIndex) <= Ae;
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
const It = "cubic-bezier(0.32, 0.72, 0, 1)";
const Ue = 220;

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
  const $ = A(null);
  const D = A(null);
  const a = A(null);
  const f = A(Ge()).current;
  const [M, S] = d(false);
  const [X, k] = d(sourceRect !== null && !f);
  const v = C();
  const W = ce(images, v);
  const w = ie({ initialIndex: initialIndex, total: images.length });
  u_1();

  const N = q(() => {
    const l_current = l.current;
    return l_current
      ? l_current.querySelector("[data-active-slide] img")
      : null;
  }, []);

  const B = q((t) => {
    const l_current = l.current;
    return l_current
      ? l_current.querySelector(`[data-slide-index="${t}"] img`)
      : null;
  }, []);

  const C = q(() => {
    const $_current = $.current;

    if (
      D.current === "open" &&
      $_current &&
      $_current.playState === "running"
    ) {
      $_current.finish();
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
    const Y = t.hiddenLeft ?? 0;
    const K = t.hiddenTop ?? 0;
    const ct = t.hiddenRight ?? 0;
    const st = t.hiddenBottom ?? 0;
    const Tt = t.width + Y + ct;
    const bt = t.height + K + st;
    const yt = (Y / Tt) * s.width;
    const Rt = (K / bt) * s.height;
    const St = (ct / Tt) * s.width;
    const d = (st / bt) * s.height;
    const u = s.width - yt - St;
    const x = s.height - Rt - d;
    const b = Math.max(t.width / u, t.height / x);
    const A = t.width / b;
    const H = t.height / b;
    const nt = Math.max(0, (u - A) / 2);
    const lt = Math.max(0, (x - H) / 2);
    const Dt = yt + nt;
    const Lt = Rt + lt;
    const Xt = St + nt;
    const Nt = d + lt;
    const Ht = (Dt + (s.width - Xt)) / 2;
    const zt = (Lt + (s.height - Nt)) / 2;
    const Ft = s.left + s.width / 2;
    const At = s.top + s.height / 2;
    const Bt = Ft + (Ht - s.width / 2) * b;
    const Ut = At + (zt - s.height / 2) * b;
    const Wt = t.left + t.width / 2;
    const Gt = t.top + t.height / 2;
    const Zt = Wt - Bt;
    const Vt = Gt - Ut;
    const qt = `translate(${Zt}px, ${Vt}px) scale(${b})`;
    const Et = We(t.borderRadius, b);
    const jt = `inset(${Lt}px ${Xt}px ${Nt}px ${Dt}px round ${Et})`;
    return { transform: qt, clipPath: jt, borderRadius: Et };
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
      easing: It,
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

      k(false);
    });

    s.addEventListener("cancel", () => k(false), { once: true });
  }, []);

  const J = q(
    (t, i, s) => {
      dt(t, i);
      const Y = t.animate(
        [
          i,
          {
            transform: s.transform,
            clipPath: s.clipPath,
            borderRadius: s.borderRadius,
          },
        ],
        { duration: kt, easing: It, fill: "forwards" }
      );
      $.current = Y;
      D.current = "close";
      a.current = t;

      Y.addEventListener("finish", () => onClose());
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
      if (f) {
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
          const bt = G(Tt);
          const yt = bt ? ht(bt, a_current) : null;
          S(true);

          if (yt) {
            J(a_current, st, yt);
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
      const Y = T.freezeInFlight();
      const K = G(Y);
      if (t && v && !K) {
        T.animateClose();
        setTimeout(onClose, 150);
        return;
      }
      S(true);

      if (K) {
        const ct = B(Y);
        const st = ht(K, ct);
        if (st && ct) {
          J(ct, { ...Ct }, st);
          return;
        }
      }

      setTimeout(onClose, kt);
    },
    [M, G, w.currentIndex, pt, ht, ut, J, B, v, onClose, f]
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

  const [E, q] = d(null);
  const z = A({ x: 0, y: 0, panX: 0, panY: 0 });
  const j = A(false);
  const Z = A(false);
  const et = A(null);
  const rt = A(null);

  const tt = q(
    (t = false) => {
      if (rt.current === null) {
        if (E && !v && !f) {
          j.current = false;
          q(null);

          rt.current = window.setTimeout(() => {
            rt.current = null;
            V(t);
          }, Ue);

          return;
        }
        V(t);
      }
    },
    [V, v, f, E]
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

  const [P, m] = d(-1);

  const O = q(() => {
    m(w.currentIndex);
  }, [w.currentIndex]);

  const R = A(null);

  zoomable(() => {
    const t = new AbortController();
    R.current = t;

    return () => t.abort();
  }, []);

  zoomable(() => {
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
            const Y = new Image();
            Y.decoding = "async";
            Y.src = s;
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
    if (!sourceRect || f) {
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
      $.current?.cancel();
    };
  }, []);

  zoomable(() => {
    q(null);
  }, [w.currentIndex]);

  const U = q((t, i, s) => {
    const Y = i === "x" ? s.width : s.height;
    const K = (i === "x" ? s.originX : s.originY) / 100;
    const ct = Y * K * (s.scale - 1);
    const st = Y * (1 - K) * (s.scale - 1);
    return Math.max(-st, Math.min(ct, t));
  }, []);

  const mt = q(
    (t, i, s) => {
      const Y = U(t, i, s);
      const K = t - Y;
      return K === 0 ? t : Y + Math.sign(K) * Math.min(72, Math.abs(K) * 0.18);
    },
    [U]
  );

  const gt = q(
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
        (Y) =>
          Y && {
            ...Y,
            panX: mt(z.current.panX + i, "x", Y),
            panY: mt(z.current.panY + s, "y", Y),
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
            panX: U(t.panX, "x", t),
            panY: U(t.panY, "y", t),
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
  }, [U]);

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
      if (!E || v) {
        T.desktopHandlers.onMouseDown(t);
        return;
      }

      if (t.button === 0) {
        j.current = true;
        Z.current = false;

        z.current = {
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
      V(v);
    },
    [V, v, zoomable, E, T.displaySize]
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
          u(Fe, {
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
            zoom: E,
          }),
        v &&
          u(Be, {
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
            onNext: ft,
          }),
        thumbs
          ? u(Ye, {
              images: images,
              currentIndex: w.currentIndex,
              isClosing: M,
              onPick: (t) => {
                C();
                w.goToIndex(t);
              },
            })
          : u(Ee, {
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
