import { q, d, y, A, T, u, k, E, _ as __1, $ } from "./index-B9FitUXy.js";
import { u as u_1 } from "./useBodyScrollLock-B9AhjdDt.js";
import { u as u_2 } from "./IconChevronLeft-DoFeid_h.js";
import { u as u_3 } from "./IconChevronRight-C6tvOD4p.js";
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
      e._sentryDebugIds[n] = "e27aca75-150d-406e-9a20-81135789dec0";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-e27aca75-150d-406e-9a20-81135789dec0";
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

  const P = q(() => {
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
    goToPrev: P,
    goToNext: D,
  };
}
const $t = 150;
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
  const [M, k] = d(0);
  const [X, S] = d(false);
  const [v, G] = d(1);
  const [w, N] = d(null);
  const [U, C] = d(null);
  const [it, ft] = d(1);
  const [ht, pt] = d(0);
  const [dt, at] = d(0);
  const [ut, j] = d(false);
  const W = A(1);
  const Z = A({ x: 0, y: 0 });
  const T = A(false);
  const E = A(false);
  const V = A(0);
  const F = A(0);
  const K = A(0);
  const q = A(1);
  const et = A({ x: 0, y: 0 });
  const rt = A({ x: 0, y: 0 });
  const tt = A({ x: 0, y: 0 });
  const xt = A(0);
  const $ = A(0);
  const m = A(null);
  const O = A(false);
  const R = A(null);
  const B = A(null);
  const mt = A(false);

  const gt = q((d) => {
    W.current = d;
    ft(d);
  }, []);

  const ot = q((d, u) => {
    Z.current = { x: d, y: u };
    pt(d);
    at(u);
  }, []);

  const vt = q(() => {
    j(true);
    gt(1);
    ot(0, 0);

    setTimeout(() => j(false), 300);
  }, [gt, ot]);

  const Mt = q(
    (d, u, x) => {
      const r_e = imageSizes[e];
      if (!r_e) {
        return { x: 0, y: 0 };
      }
      const A = Math.max(0, (r_e.width * x - window.innerWidth) / 2);
      const z = Math.max(0, (r_e.height * x - window.innerHeight) / 2);
      return {
        x: Math.max(-A, Math.min(A, d)),
        y: Math.max(-z, Math.min(z, u)),
      };
    },
    [imageSizes, currentIndex]
  );

  onClose(() => {
    W.current = 1;
    Z.current = { x: 0, y: 0 };
    ft(1);
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
      Math.abs(M) > $t
        ? (onClose(isMobile), true)
        : (setIsAnimating(true),
          k(0),
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
        const A = getComputedStyle(b).transform;
        if (A && A !== "none") {
          const z = new DOMMatrixReadOnly(A).m41;
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
      N(null);
      C(null);
      xt.current = x;
      $.current = 0;
      f(x);
      S(true);
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
        $.current = u;
        f(wt(xt.current + u));
      } else if (m.current === "y") {
        k(x);
        const b = Math.min(Math.abs(x) / $t, 1);
        G(1 - b * 0.5);
      }
    },
    [X, isMobile, wt, onDragStart]
  );

  const Y = q(() => {
    if (!(!X || isMobile)) {
      S(false);

      if (m.current === "x") {
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
          const z = imageSizes[u]?.width || 0;
          const nt = b > u ? -z : A;
          setIsAnimating(true);
          N(b);
          f(nt);
          B.current = b;

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
            N(null);
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

  const J = q(
    (d) => {
      if (!isMobile) {
        return;
      }
      F.current = Math.max(F.current, d.touches.length);

      if (d.touches.length === 2) {
        T.current = true;
        E.current = true;
        K.current = Yt(d.touches[0], d.touches[1]);
        q.current = W.current;
        S(false);
        m.current = null;
        f(0);
        k(0);
        G(1);
        j(false);
        return;
      }

      if (W.current > 1) {
        F.current = 1;
        et.current = { x: d.touches[0].clientX, y: d.touches[0].clientY };
        rt.current = { ...Z.current };
        S(true);
        O.current = false;
        m.current = null;
        j(false);
        const d_target_1 = d.target;
        mt.current =
          d_target_1.tagName === "IMG" &&
          d_target_1.hasAttribute("data-viewer-image");
        return;
      }
      F.current = 1;
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
      S(true);
    },
    [isMobile, cancelAnimation, setIsAnimating]
  );

  const ct = q(
    (d) => {
      if (!isMobile) {
        return;
      }
      F.current = Math.max(F.current, d.touches.length);

      if (T.current && d.touches.length >= 2) {
        const b = Yt(d.touches[0], d.touches[1]);
        const A = q.current * (b / K.current);
        const z = Math.min(Math.max(A, 0.5), 5);
        const nt = Mt(Z.current.x, Z.current.y, z);
        gt(z);
        ot(nt.x, nt.y);
        return;
      }

      if (W.current > 1 && X && !T.current) {
        const b = d.touches[0].clientX - et.current.x;
        const A = d.touches[0].clientY - et.current.y;

        if (Math.abs(b) > 5 || Math.abs(A) > 5) {
          O.current = true;
        }

        const z = Mt(rt.current.x + b, rt.current.y + A, W.current);
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
        k(x);
        const b = Math.min(Math.abs(x) / $t, 1);
        G(Math.round((1 - b * 0.7) * 100) / 100);
      }
    },
    [isMobile, X, gt, ot, Mt, wt, onDragStart]
  );

  const st = q(() => {
    if (isMobile) {
      if (T.current) {
        T.current = false;
        V.current = Date.now();

        if (W.current < 1.1) {
          vt();
        }

        return;
      }
      if (W.current > 1) {
        S(false);
        return;
      }
      if (F.current > 1 || E.current) {
        S(false);
        k(0);
        G(1);
        m.current = null;
        return;
      }
      if (Date.now() - V.current < 300) {
        S(false);
        k(0);
        G(1);
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
      F.current = 0;
      m.current = null;
      S(false);
      f(0);
      k(0);
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
    N(null);
    return u;
  }, [currentIndex, imageSizes, trackRef, onIndexChange, setIsAnimating]);

  const yt = q(() => {
    C(null);

    if (a !== 0 || M !== 0 || v !== 1) {
      setIsAnimating(true);
      f(0);
      k(0);
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
      const A = u.width / 2 + b.width / 2;
      const z = Math.min(Math.abs(a) / A, 1);
      return {
        width: u.width + (b.width - u.width) * z,
        height: u.height + (b.height - u.height) * z,
      };
    }
    return u;
  }, [U, imageSizes, currentIndex, isAnimating, w, X, a, imagesCount]);

  const kt = q(() => {
    setIsAnimating(true);
    k(window.innerHeight);
    G(0);
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
    zoom: { scale: it, panX: ht, panY: dt, isAnimating: ut },
    desktopHandlers: {
      onMouseDown: i,
      onMouseMove: s,
      onMouseUp: Y,
      onMouseLeave: Y,
    },
    mobileHandlers: {
      onTouchStart: J,
      onTouchMove: ct,
      onTouchEnd: st,
      onTouchCancel: Tt,
    },
  };
}
const le = "DGai";
const de = "uOMK";
const fe = "mZI4";
const he = "yw9q";
const pe = "BGzQ";
const ge = "Ni3U";
const me = "XcVG";
const we = "EaNG";
const be = "WpKK";
const ye = "Hg5q";
const xe = "vGdP";
const ve = "s12u";
const Te = "MlvU";
const Me = "FpqF";
const Re = "wwJg";
const ke = "a26G";
const Se = "Uxmq";
const $e = "QJ95";
const Pe = "hBCa";
const De = "BJkz";
const Le = "qcch";
const Xe = "LsVl";

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
  dot: ke,
  active: Se,
  filmstrip: $e,
  filmstripLeaving: Pe,
  filmshot: De,
  filmshotActive: Le,
  filmshotImage: Xe,
};

function Ne({ currentIndex, total, onPrev, onNext }) {
  return total <= 1
    ? null
    : u(k, {
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
  const P = ((p >> 6) & 63) / 31.5 - 1;
  const D = ((p >> 12) & 63) / 31.5 - 1;
  const a = ((p >> 18) & 31) / 31;
  const f = p >> 23;
  const M = ((l >> 3) & 63) / 63;
  const k = ((l >> 9) & 63) / 63;
  const X = l >> 15;
  const S = max(3, X ? (f ? 5 : 7) : l & 7);
  const v = max(3, X ? l & 7 : f ? 5 : 7);
  const G = f ? (e[5] & 15) / 15 : 1;
  const w = (e[5] >> 4) / 15;
  const N = f ? 6 : 5;
  let U = 0;

  const C = (T, E, V) => {
    const F = [];
    for (let K = 0; K < E; K++) {
      for (let q = K ? 0 : 1; q * E < T * (E - K); q++) {
        F.push((((e[N + (U >> 1)] >> ((U++ & 1) << 2)) & 15) / 7.5 - 1) * V);
      }
    }
    return F;
  };

  const it = C(S, v, a);
  const ft = C(3, 3, M * 1.25);
  const ht = C(3, 3, k * 1.25);
  const pt = f ? C(5, 5, w) : null;
  const dt = Ce(e);
  const at = round(dt > 1 ? 32 : 32 * dt);
  const ut = round(dt > 1 ? 32 / dt : 32);
  const j = new Uint8Array(at * ut * 4);
  const W = [];
  const Z = [];
  for (let T = 0, E = 0; T < ut; T++) {
    for (let V = 0; V < at; V++, E += 4) {
      let F = y;
      let K = P;
      let q = D;
      let et = G;
      for (let $ = 0, m = max(S, f ? 5 : 3); $ < m; $++) {
        W[$] = cos((PI / at) * (V + 0.5) * $);
      }
      for (let $ = 0, m = max(v, f ? 5 : 3); $ < m; $++) {
        Z[$] = cos((PI / ut) * (T + 0.5) * $);
      }
      for (let $ = 0, m = 0; $ < v; $++) {
        for (let O = $ ? 0 : 1, R = Z[$] * 2; O * v < S * (v - $); O++, m++) {
          F += it[m] * W[O] * R;
        }
      }
      for (let $ = 0, m = 0; $ < 3; $++) {
        for (let O = $ ? 0 : 1, R = Z[$] * 2; O < 3 - $; O++, m++) {
          const B = W[O] * R;
          K += ft[m] * B;
          q += ht[m] * B;
        }
      }
      if (f && pt) {
        for (let $ = 0, m = 0; $ < 5; $++) {
          for (let O = $ ? 0 : 1, R = Z[$] * 2; O < 5 - $; O++, m++) {
            et += pt[m] * W[O] * R;
          }
        }
      }
      const rt = F - (2 / 3) * K;
      const tt = (3 * F - rt + q) / 2;
      const xt = tt - q;
      j[E] = max(0, 255 * min(1, tt));
      j[E + 1] = max(0, 255 * min(1, xt));
      j[E + 2] = max(0, 255 * min(1, rt));
      j[E + 3] = max(0, 255 * min(1, et));
    }
  }
  return { w: at, h: ut, rgba: j };
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
  for (let P = 0, D = 0, a = o - 1; P < n; P++, a += o - 1) {
    c.push(P + 1 < n ? 0 : 1, o & 255, o >> 8, ~o & 255, (o >> 8) ^ 255, 0);

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
  for (const [P, D] of [
    [12, 29],
    [37, 41 + h],
  ]) {
    let a = -1;
    for (let M = P; M < D; M++) {
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
  const { w, h, rgba } = Ie(e);
  return Oe(w, h, rgba);
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
  const [P, D] = d(null);
  const [a, f] = d(null);
  loadThumb(() => {
    if (!loadThumb || thumbUrl || a || P) {
      return;
    }
    let N = false;

    loadThumb().then((U) => {
      if (!N && U) {
        f(U);
      }
    });

    return () => {
      N = true;
    };
  }, [loadThumb, thumbUrl, a, P]);

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

  const [X, S] = d(false);
  const v = A(null);

  loadThumb(() => {
    const N = new AbortController();
    v.current = N;

    return () => N.abort();
  }, []);

  loadThumb(() => {
    if (!loadSrc || !isActive || P || X) {
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
          D(U);
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
  }, [loadSrc, isActive, P, X]);

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
  }, [url, thumbUrl, isActive, M, loadSrc, X]);

  loadThumb(() => {
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
const Fe = 2;
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
  const f = T(() => {
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
        transform: `translateX(${-f + offsetX}px)`,
        transition: isAnimating
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: images.map((M, k) => {
        const X = Math.abs(k - currentIndex) <= Fe;
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
      children: images.map((a, f) => {
        const M = Math.abs(f - currentIndex) <= Ae;
        const k = f === currentIndex;
        const n_f = imageSizes[f];
        const S = n_f
          ? { width: `${n_f.width}px`, height: `${n_f.height}px` }
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
            "data-slide-index": f,
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
  const l = A(null);
  const y = A(null);
  const P = A(null);
  const D = A(null);
  const a = A(null);
  const f = A(We()).current;
  const [M, k] = d(false);
  const [X, S] = d(sourceRect !== null && !f);
  const v = E();
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

  const C = q(() => {
    const P_current = P.current;

    if (
      D.current === "open" &&
      P_current &&
      P_current.playState === "running"
    ) {
      P_current.finish();
    }

    S(false);
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
    const J = t.hiddenTop ?? 0;
    const ct = t.hiddenRight ?? 0;
    const st = t.hiddenBottom ?? 0;
    const Tt = t.width + Y + ct;
    const bt = t.height + J + st;
    const yt = (Y / Tt) * s.width;
    const Rt = (J / bt) * s.height;
    const kt = (ct / Tt) * s.width;
    const d = (st / bt) * s.height;
    const u = s.width - yt - kt;
    const x = s.height - Rt - d;
    const b = Math.max(t.width / u, t.height / x);
    const A = t.width / b;
    const z = t.height / b;
    const nt = Math.max(0, (u - A) / 2);
    const lt = Math.max(0, (x - z) / 2);
    const Dt = yt + nt;
    const Lt = Rt + lt;
    const Xt = kt + nt;
    const Nt = d + lt;
    const zt = (Dt + (s.width - Xt)) / 2;
    const Ft = (Lt + (s.height - Nt)) / 2;
    const Ht = s.left + s.width / 2;
    const At = s.top + s.height / 2;
    const Ut = Ht + (zt - s.width / 2) * b;
    const Bt = At + (Ft - s.height / 2) * b;
    const Gt = t.left + t.width / 2;
    const Wt = t.top + t.height / 2;
    const qt = Gt - Ut;
    const Zt = Wt - Bt;
    const Vt = `translate(${qt}px, ${Zt}px) scale(${b})`;
    const Et = Ge(t.borderRadius, b);
    const Kt = `inset(${Lt}px ${Xt}px ${Nt}px ${Dt}px round ${Et})`;
    return { transform: Vt, clipPath: Kt, borderRadius: Et };
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
      duration: St,
      easing: It,
      fill: "forwards",
    });
    P.current = s;
    D.current = "open";
    a.current = t;

    s.addEventListener("finish", () => {
      at(t);
      s.cancel();

      if (P.current === s) {
        P.current = null;
        D.current = null;
      }

      S(false);
    });

    s.addEventListener("cancel", () => S(false), { once: true });
  }, []);

  const j = q(
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
        { duration: St, easing: It, fill: "forwards" }
      );
      P.current = Y;
      D.current = "close";
      a.current = t;

      Y.addEventListener("finish", () => onClose());
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

  const Z = q(
    (t = false) => {
      if (f) {
        onClose();
        return;
      }
      const P_current = P.current;
      const a_current = a.current;
      if (P_current && P_current.playState === "running" && a_current) {
        const ct = D.current === "open";
        const st = pt(a_current);
        P_current.cancel();
        at(a_current);
        P.current = null;
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
      const Y = T.freezeInFlight();
      const J = W(Y);
      if (t && v && !J) {
        T.animateClose();
        setTimeout(onClose, 150);
        return;
      }
      k(true);

      if (J) {
        const ct = U(Y);
        const st = ht(J, ct);
        if (st && ct) {
          j(ct, { ...Ct }, st);
          return;
        }
      }

      setTimeout(onClose, St);
    },
    [M, W, w.currentIndex, pt, ht, ut, j, U, v, onClose, f]
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
    onClose: Z,
    trackRef: y,
    onDragStart: C,
  });

  const [E, V] = d(null);
  const F = A({ x: 0, y: 0, panX: 0, panY: 0 });
  const K = A(false);
  const q = A(false);
  const et = A(null);
  const rt = A(null);

  const tt = q(
    (t = false) => {
      if (rt.current === null) {
        if (E && !v && !f) {
          K.current = false;
          V(null);

          rt.current = window.setTimeout(() => {
            rt.current = null;
            Z(t);
          }, Be);

          return;
        }
        Z(t);
      }
    },
    [Z, v, f, E]
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
  se({ onClose: xt, onPrev: it, onNext: ft });

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

  const [$, m] = d(-1);

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
  }, [$, w.currentIndex, images]);

  __1(() => {
    if (!sourceRect || f) {
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
      P.current?.cancel();
    };
  }, []);

  y(() => {
    V(null);
  }, [w.currentIndex]);

  const B = q((t, i, s) => {
    const Y = i === "x" ? s.width : s.height;
    const J = (i === "x" ? s.originX : s.originY) / 100;
    const ct = Y * J * (s.scale - 1);
    const st = Y * (1 - J) * (s.scale - 1);
    return Math.max(-st, Math.min(ct, t));
  }, []);

  const mt = q(
    (t, i, s) => {
      const Y = B(t, i, s);
      const J = t - Y;
      return J === 0 ? t : Y + Math.sign(J) * Math.min(72, Math.abs(J) * 0.18);
    },
    [B]
  );

  const gt = q(
    (t) => {
      if (!K.current || v) {
        return;
      }
      const i = t.clientX - F.current.x;
      const s = t.clientY - F.current.y;

      if (Math.abs(i) > 4 || Math.abs(s) > 4) {
        q.current = true;
      }

      V(
        (Y) =>
          Y && {
            ...Y,
            panX: mt(F.current.panX + i, "x", Y),
            panY: mt(F.current.panY + s, "y", Y),
          }
      );

      t.preventDefault();
    },
    [mt, v]
  );

  const ot = q(() => {
    if (K.current) {
      K.current = false;

      V(
        (t) =>
          t && {
            ...t,
            panX: B(t.panX, "x", t),
            panY: B(t.panY, "y", t),
            isPanning: false,
          }
      );

      q.current &&
        (et.current !== null && window.clearTimeout(et.current),
        (et.current = window.setTimeout(() => {
          q.current = false;
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
        q.current = false;

        F.current = {
          x: t.clientX,
          y: t.clientY,
          panX: E.panX,
          panY: E.panY,
        };

        V((i) => i && { ...i, isPanning: true });
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
      if (q.current) {
        q.current = false;
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
      if (q.current) {
        q.current = false;
        return;
      }
      if (T.wasDragging.current) {
        T.wasDragging.current = false;
        return;
      }
      if (zoomable && !v) {
        if (E) {
          V(null);
          return;
        }
        const s = t?.currentTarget?.getBoundingClientRect();
        if (!s || !t) {
          V({
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
        V({
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
      Z(v);
    },
    [Z, v, zoomable, E, T.displaySize]
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
          u(He, {
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
            zoom: E,
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
