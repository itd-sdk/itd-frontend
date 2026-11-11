import { q, d, h, A, T, u, S, C, _ as __1, $ } from "./index-dnACTU3c.js";
import { u as u_1 } from "./useBodyScrollLock-BkVCA1PT.js";
import { I } from "./IconChevronLeft-Bhjo82wQ.js";
import { I as I_1 } from "./IconChevronRight-BQQAUGem.js";
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
      e._sentryDebugIds[n] = "c3055b02-d0f9-46d7-8f9f-e2bca594b0fb";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-c3055b02-d0f9-46d7-8f9f-e2bca594b0fb";
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
function It(e, n) {
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
  const [M, S] = d(0);
  const [L, k] = d(false);
  const [v, B] = d(1);
  const [w, E] = d(null);
  const [U, C] = d(null);
  const [it, dt] = d(1);
  const [ht, pt] = d(0);
  const [ft, at] = d(0);
  const [ut, K] = d(false);
  const Z = A(1);
  const V = A({ x: 0, y: 0 });
  const T = A(false);
  const N = A(false);
  const q = A(0);
  const A = A(0);
  const j = A(0);
  const G = A(1);
  const et = A({ x: 0, y: 0 });
  const rt = A({ x: 0, y: 0 });
  const tt = A({ x: 0, y: 0 });
  const xt = A(0);
  const $ = A(0);
  const m = A(null);
  const O = A(false);
  const R = A(null);
  const W = A(null);
  const mt = A(false);

  const gt = q((f) => {
    Z.current = f;
    dt(f);
  }, []);

  const ot = q((f, u) => {
    V.current = { x: f, y: u };
    pt(f);
    at(u);
  }, []);

  const vt = q(() => {
    K(true);
    gt(1);
    ot(0, 0);

    setTimeout(() => K(false), 300);
  }, [gt, ot]);

  const Mt = q(
    (f, u, x) => {
      const r_e = imageSizes[e];
      if (!r_e) {
        return { x: 0, y: 0 };
      }
      const z = Math.max(0, (r_e.width * x - window.innerWidth) / 2);
      const H = Math.max(0, (r_e.height * x - window.innerHeight) / 2);
      return {
        x: Math.max(-z, Math.min(z, f)),
        y: Math.max(-H, Math.min(H, u)),
      };
    },
    [imageSizes, currentIndex]
  );

  isAnimating(() => {
    Z.current = 1;
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
          S(0),
          d(0),
          B(1),
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
      const u = W.current ?? currentIndex;
      let x = 0;
      const b = trackRef?.current;
      if (b) {
        const z = getComputedStyle(b).transform;
        if (z && z !== "none") {
          const H = new DOMMatrixReadOnly(z).m41;
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

      if (W.current !== null) {
        onIndexChange(W.current);
        W.current = null;
      }

      setIsAnimating(false);
      E(null);
      C(null);
      xt.current = x;
      $.current = 0;
      d(x);
      k(true);
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
      if (!L || isMobile) {
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
        $.current = u;
        d(wt(xt.current + u));
      } else if (m.current === "y") {
        S(x);
        const b = Math.min(Math.abs(x) / $t, 1);
        B(1 - b * 0.5);
      }
    },
    [L, isMobile, wt, onDragStart]
  );

  const I = q(() => {
    if (!(!L || isMobile)) {
      k(false);

      if (m.current === "x") {
        const u = W.current ?? currentIndex;
        const $_current = $.current;
        let b = u;

        if ($_current < -80 && u < imagesCount - 1) {
          b = u + 1;
        } else if ($_current > 80 && u > 0) {
          b = u - 1;
        }

        if (b !== u) {
          const z = imageSizes[b]?.width || 0;
          const H = imageSizes[u]?.width || 0;
          const nt = b > u ? -H : z;
          setIsAnimating(true);
          E(b);
          d(nt);
          W.current = b;

          R.current = window.setTimeout(() => {
            R.current = null;
            setIsAnimating(false);
            E(null);
            d(0);
            W.current = null;
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

  const J = q(
    (f) => {
      if (!isMobile) {
        return;
      }
      A.current = Math.max(A.current, f.touches.length);

      if (f.touches.length === 2) {
        T.current = true;
        N.current = true;
        j.current = It(f.touches[0], f.touches[1]);
        G.current = Z.current;
        k(false);
        m.current = null;
        d(0);
        S(0);
        B(1);
        K(false);
        return;
      }

      if (Z.current > 1) {
        A.current = 1;
        et.current = { x: f.touches[0].clientX, y: f.touches[0].clientY };
        rt.current = { ...V.current };
        k(true);
        O.current = false;
        m.current = null;
        K(false);
        const f_target_1 = f.target;
        mt.current =
          f_target_1.tagName === "IMG" &&
          f_target_1.hasAttribute("data-viewer-image");
        return;
      }
      A.current = 1;
      N.current = false;
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
      k(true);
    },
    [isMobile, cancelAnimation, setIsAnimating]
  );

  const ct = q(
    (f) => {
      if (!isMobile) {
        return;
      }
      A.current = Math.max(A.current, f.touches.length);

      if (T.current && f.touches.length >= 2) {
        const b = It(f.touches[0], f.touches[1]);
        const z = G.current * (b / j.current);
        const H = Math.min(Math.max(z, 0.5), 5);
        const nt = Mt(V.current.x, V.current.y, H);
        gt(H);
        ot(nt.x, nt.y);
        return;
      }

      if (Z.current > 1 && L && !T.current) {
        const b = f.touches[0].clientX - et.current.x;
        const z = f.touches[0].clientY - et.current.y;

        if (Math.abs(b) > 5 || Math.abs(z) > 5) {
          O.current = true;
        }

        const H = Mt(rt.current.x + b, rt.current.y + z, Z.current);
        ot(H.x, H.y);
        return;
      }
      if (!L) {
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
        S(x);
        const b = Math.min(Math.abs(x) / $t, 1);
        B(Math.round((1 - b * 0.7) * 100) / 100);
      }
    },
    [isMobile, L, gt, ot, Mt, wt, onDragStart]
  );

  const st = q(() => {
    if (isMobile) {
      if (T.current) {
        T.current = false;
        q.current = Date.now();

        if (Z.current < 1.1) {
          vt();
        }

        return;
      }
      if (Z.current > 1) {
        k(false);
        return;
      }
      if (A.current > 1 || N.current) {
        k(false);
        S(0);
        B(1);
        m.current = null;
        return;
      }
      if (Date.now() - q.current < 300) {
        k(false);
        S(0);
        B(1);
        m.current = null;
        return;
      }
      if (L) {
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
      N.current = false;
      A.current = 0;
      m.current = null;
      k(false);
      d(0);
      S(0);
      B(1);
      setIsAnimating(false);
      Z.current < 1.1 && vt();
    }
  }, [isMobile, vt, setIsAnimating]);

  const bt = q(() => {
    const W_current = W.current;
    const u = W_current ?? currentIndex;
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
        C({ width: H.width, height: H.height });
      }
    }

    if (R.current) {
      clearTimeout(R.current);
      R.current = null;
    }

    if (W_current !== null) {
      onIndexChange(W_current);
      W.current = null;
    }

    setIsAnimating(false);
    E(null);
    return u;
  }, [currentIndex, imageSizes, trackRef, onIndexChange, setIsAnimating]);

  const yt = q(() => {
    C(null);

    if (a !== 0 || M !== 0 || v !== 1) {
      setIsAnimating(true);
      d(0);
      S(0);
      B(1);
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
    const f = W.current ?? currentIndex;
    const u = imageSizes[f] || { width: 600, height: 400 };
    if (isAnimating && w !== null) {
      const x = imageSizes[w] || u;
      return { width: x.width, height: x.height };
    }
    if (L && m.current !== "y" && a !== 0) {
      const x = a < 0 ? Math.min(f + 1, imagesCount - 1) : Math.max(f - 1, 0);
      if (x === f) {
        return u;
      }
      const b = imageSizes[x] || u;
      const z = u.width / 2 + b.width / 2;
      const H = Math.min(Math.abs(a) / z, 1);
      return {
        width: u.width + (b.width - u.width) * H,
        height: u.height + (b.height - u.height) * H,
      };
    }
    return u;
  }, [U, imageSizes, currentIndex, isAnimating, w, L, a, imagesCount]);

  const St = q(() => {
    setIsAnimating(true);
    S(window.innerHeight);
    B(0);
  }, [setIsAnimating]);

  return {
    offsetX: a,
    offsetY: M,
    isDragging: L,
    opacity: v,
    wasDragging: O,
    displaySize: Rt,
    animateClose: St,
    freezeInFlight: bt,
    unfreeze: yt,
    zoom: { scale: it, panX: ht, panY: ft, isAnimating: ut },
    desktopHandlers: {
      onMouseDown: i,
      onMouseMove: s,
      onMouseUp: I,
      onMouseLeave: I,
    },
    mobileHandlers: {
      onTouchStart: J,
      onTouchMove: ct,
      onTouchEnd: st,
      onTouchCancel: Tt,
    },
  };
}
const le = "xvvv";
const fe = "IKgZ";
const de = "OV6y";
const he = "HEzj";
const pe = "jSUA";
const ge = "XqZg";
const me = "ngh0";
const we = "yA9D";
const be = "CNg7";
const ye = "XGpf";
const xe = "HFWw";
const ve = "Eyxv";
const Te = "WyAe";
const Me = "lI5c";
const Re = "WF0u";
const Se = "imtB";
const ke = "ReHC";
const $e = "G74V";
const Pe = "GSTh";
const De = "OWHP";
const Xe = "SmfJ";
const Le = "Jms2";

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
  dot: Se,
  active: ke,
  filmstrip: $e,
  filmstripLeaving: Pe,
  filmshot: De,
  filmshotActive: Xe,
  filmshotImage: Le,
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
function Ne({ total, currentIndex, onDotClick }) {
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
function Ie({ images, currentIndex, isClosing, onPick }) {
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
  const D = ((p >> 12) & 63) / 31.5 - 1;
  const a = ((p >> 18) & 31) / 31;
  const d = p >> 23;
  const M = ((l >> 3) & 63) / 63;
  const S = ((l >> 9) & 63) / 63;
  const L = l >> 15;
  const k = max(3, L ? (d ? 5 : 7) : l & 7);
  const v = max(3, L ? l & 7 : d ? 5 : 7);
  const B = d ? (e[5] & 15) / 15 : 1;
  const w = (e[5] >> 4) / 15;
  const E = d ? 6 : 5;
  let U = 0;

  const C = (T, N, q) => {
    const A = [];
    for (let j = 0; j < N; j++) {
      for (let G = j ? 0 : 1; G * N < T * (N - j); G++) {
        A.push((((e[E + (U >> 1)] >> ((U++ & 1) << 2)) & 15) / 7.5 - 1) * q);
      }
    }
    return A;
  };

  const it = C(k, v, a);
  const dt = C(3, 3, M * 1.25);
  const ht = C(3, 3, S * 1.25);
  const pt = d ? C(5, 5, w) : null;
  const ft = Ce(e);
  const at = round(ft > 1 ? 32 : 32 * ft);
  const ut = round(ft > 1 ? 32 / ft : 32);
  const K = new Uint8Array(at * ut * 4);
  const Z = [];
  const V = [];
  for (let T = 0, N = 0; T < ut; T++) {
    for (let q = 0; q < at; q++, N += 4) {
      let A = y;
      let j = P;
      let G = D;
      let et = B;
      for (let $ = 0, m = max(k, d ? 5 : 3); $ < m; $++) {
        Z[$] = cos((PI / at) * (q + 0.5) * $);
      }
      for (let $ = 0, m = max(v, d ? 5 : 3); $ < m; $++) {
        V[$] = cos((PI / ut) * (T + 0.5) * $);
      }
      for (let $ = 0, m = 0; $ < v; $++) {
        for (let O = $ ? 0 : 1, R = V[$] * 2; O * v < k * (v - $); O++, m++) {
          A += it[m] * Z[O] * R;
        }
      }
      for (let $ = 0, m = 0; $ < 3; $++) {
        for (let O = $ ? 0 : 1, R = V[$] * 2; O < 3 - $; O++, m++) {
          const W = Z[O] * R;
          j += dt[m] * W;
          G += ht[m] * W;
        }
      }
      if (d && pt) {
        for (let $ = 0, m = 0; $ < 5; $++) {
          for (let O = $ ? 0 : 1, R = V[$] * 2; O < 5 - $; O++, m++) {
            et += pt[m] * Z[O] * R;
          }
        }
      }
      const rt = A - (2 / 3) * j;
      const tt = (3 * A - rt + G) / 2;
      const xt = tt - G;
      K[N] = max(0, 255 * min(1, tt));
      K[N + 1] = max(0, 255 * min(1, xt));
      K[N + 2] = max(0, 255 * min(1, rt));
      K[N + 3] = max(0, 255 * min(1, et));
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
  for (let P = 0, D = 0, a = o - 1; P < n; P++, a += o - 1) {
    c.push(P + 1 < n ? 0 : 1, o & 255, o >> 8, ~o & 255, (o >> 8) ^ 255, 0);

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
    let d = D;
    c[d++] = a >>> 24;
    c[d++] = (a >> 16) & 255;
    c[d++] = (a >> 8) & 255;
    c[d++] = a & 255;
  }
  return `data:image/png;base64,${btoa(String.fromCharCode(...c))}`;
}
function _e(e) {
  const { w, h: h_1, rgba } = Ye(e);
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
  const [P, D] = d(null);
  const [a, d] = d(null);
  onFullReady(() => {
    if (!loadThumb || thumbUrl || a || P) {
      return;
    }
    let E = false;

    loadThumb().then((U) => {
      if (!E && U) {
        d(U);
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

  const [L, k] = d(false);
  const v = A(null);

  onFullReady(() => {
    const E = new AbortController();
    v.current = E;

    return () => E.abort();
  }, []);

  onFullReady(() => {
    if (!loadSrc || !isActive || P || L) {
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
          D(U);
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
  }, [loadSrc, isActive, P, L]);

  onFullReady(() => {
    if (loadSrc && !L) {
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
  }, [url, thumbUrl, isActive, M, loadSrc, L]);

  onFullReady(() => {
    if (isActive && M) {
      onFullReady?.();
    }
  }, [isActive, M]);

  const B = T(() => He(img.thumbhash), [img.thumbhash]);
  return u("img", {
    src:
      loadSrc && !L
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
      ...(!M && B
        ? { backgroundImage: `url(${B})`, backgroundSize: "100% 100%" }
        : {}),
    },
  });
}
const Ae = 2;
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
        const L = Math.abs(S - currentIndex) <= Ae;
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
              L &&
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
const ze = 2;
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
        const M = Math.abs(d - currentIndex) <= ze;
        const S = d === currentIndex;
        const n_d = imageSizes[d];
        const k = n_d
          ? { width: `${n_d.width}px`, height: `${n_d.height}px` }
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
const Yt = "cubic-bezier(0.32, 0.72, 0, 1)";
const We = 220;

const Ct = {
  transform: "none",
  clipPath: "inset(0px round 0px)",
  borderRadius: "0px",
};

function Be(e, n) {
  return !e || e === "0px" || n <= 0 || !Number.isFinite(n)
    ? "0px"
    : e.replace(/([\d.]+)px/g, (r, o) => {
        const h = parseFloat(o) / n;
        return Number.isFinite(h) ? `${h}px` : "0px";
      });
}
const Ot = 2.5;

const Ze = () =>
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
  const d = A(Ze()).current;
  const [M, S] = d(false);
  const [L, k] = d(sourceRect !== null && !d);
  const v = C();
  const B = ce(images, v);
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
      D.current === "open" &&
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
    const I = t.hiddenLeft ?? 0;
    const J = t.hiddenTop ?? 0;
    const ct = t.hiddenRight ?? 0;
    const st = t.hiddenBottom ?? 0;
    const Tt = t.width + I + ct;
    const bt = t.height + J + st;
    const yt = (I / Tt) * s.width;
    const Rt = (J / bt) * s.height;
    const St = (ct / Tt) * s.width;
    const f = (st / bt) * s.height;
    const u = s.width - yt - St;
    const x = s.height - Rt - f;
    const b = Math.max(t.width / u, t.height / x);
    const z = t.width / b;
    const H = t.height / b;
    const nt = Math.max(0, (u - z) / 2);
    const lt = Math.max(0, (x - H) / 2);
    const Dt = yt + nt;
    const Xt = Rt + lt;
    const Lt = St + nt;
    const Et = f + lt;
    const Ht = (Dt + (s.width - Lt)) / 2;
    const At = (Xt + (s.height - Et)) / 2;
    const Ft = s.left + s.width / 2;
    const zt = s.top + s.height / 2;
    const Ut = Ft + (Ht - s.width / 2) * b;
    const Wt = zt + (At - s.height / 2) * b;
    const Bt = t.left + t.width / 2;
    const Zt = t.top + t.height / 2;
    const Gt = Bt - Ut;
    const Vt = Zt - Wt;
    const qt = `translate(${Gt}px, ${Vt}px) scale(${b})`;
    const Nt = Be(t.borderRadius, b);
    const jt = `inset(${Xt}px ${Lt}px ${Et}px ${Dt}px round ${Nt})`;
    return { transform: qt, clipPath: jt, borderRadius: Nt };
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
      duration: kt,
      easing: Yt,
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

      k(false);
    });

    s.addEventListener("cancel", () => k(false), { once: true });
  }, []);

  const K = q(
    (t, i, s) => {
      ft(t, i);
      const I = t.animate(
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
      P.current = I;
      D.current = "close";
      a.current = t;

      I.addEventListener("finish", () => onClose());
    },
    [onClose]
  );

  const Z = q(
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
        const ct = D.current === "open";
        const st = pt(a_current);
        P_current.cancel();
        at(a_current);
        P.current = null;
        D.current = null;

        if (ct) {
          const Tt = T.freezeInFlight();
          const bt = Z(Tt);
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
      const I = T.freezeInFlight();
      const J = Z(I);
      if (t && v && !J) {
        T.animateClose();
        setTimeout(onClose, 150);
        return;
      }
      S(true);

      if (J) {
        const ct = U(I);
        const st = ht(J, ct);
        if (st && ct) {
          K(ct, { ...Ct }, st);
          return;
        }
      }

      setTimeout(onClose, kt);
    },
    [M, Z, w.currentIndex, pt, ht, ut, K, U, v, onClose, d]
  );

  const T = ue({
    currentIndex: w.currentIndex,
    imagesCount: images.length,
    imageSizes: B,
    isMobile: v,
    isAnimating: w.isAnimating,
    setIsAnimating: w.setIsAnimating,
    cancelAnimation: w.cancelAnimation,
    onIndexChange: w.goToIndex,
    onClose: V,
    trackRef: y,
    onDragStart: C,
  });

  const [N, q] = d(null);
  const A = A({ x: 0, y: 0, panX: 0, panY: 0 });
  const j = A(false);
  const G = A(false);
  const et = A(null);
  const rt = A(null);

  const tt = q(
    (t = false) => {
      if (rt.current === null) {
        if (N && !v && !d) {
          j.current = false;
          q(null);

          rt.current = window.setTimeout(() => {
            rt.current = null;
            V(t);
          }, We);

          return;
        }
        V(t);
      }
    },
    [V, v, d, N]
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

  const [$, m] = d(-1);

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
            const I = new Image();
            I.decoding = "async";
            I.src = s;
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

  const W = q((t, i, s) => {
    const I = i === "x" ? s.width : s.height;
    const J = (i === "x" ? s.originX : s.originY) / 100;
    const ct = I * J * (s.scale - 1);
    const st = I * (1 - J) * (s.scale - 1);
    return Math.max(-st, Math.min(ct, t));
  }, []);

  const mt = q(
    (t, i, s) => {
      const I = W(t, i, s);
      const J = t - I;
      return J === 0 ? t : I + Math.sign(J) * Math.min(72, Math.abs(J) * 0.18);
    },
    [W]
  );

  const gt = q(
    (t) => {
      if (!j.current || v) {
        return;
      }
      const i = t.clientX - A.current.x;
      const s = t.clientY - A.current.y;

      if (Math.abs(i) > 4 || Math.abs(s) > 4) {
        G.current = true;
      }

      q(
        (I) =>
          I && {
            ...I,
            panX: mt(A.current.panX + i, "x", I),
            panY: mt(A.current.panY + s, "y", I),
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
            panX: W(t.panX, "x", t),
            panY: W(t.panY, "y", t),
            isPanning: false,
          }
      );

      G.current &&
        (et.current !== null && window.clearTimeout(et.current),
        (et.current = window.setTimeout(() => {
          G.current = false;
          et.current = null;
        }, 0)));
    }
  }, [W]);

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
      if (!N || v) {
        T.desktopHandlers.onMouseDown(t);
        return;
      }

      if (t.button === 0) {
        j.current = true;
        G.current = false;

        A.current = {
          x: t.clientX,
          y: t.clientY,
          panX: N.panX,
          panY: N.panY,
        };

        q((i) => i && { ...i, isPanning: true });
        t.preventDefault();
      }
    },
    onMouseMove: (t) => {
      if (!N || v) {
        T.desktopHandlers.onMouseMove(t);
        return;
      }
    },
    onMouseUp: () => {
      if (!N || v) {
        T.desktopHandlers.onMouseUp();
        return;
      }
      ot();
    },
    onMouseLeave: () => {
      if (!N || v) {
        T.desktopHandlers.onMouseLeave();
        return;
      }
    },
  };

  const Mt = q(
    (t) => {
      if (G.current) {
        G.current = false;
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
      if (G.current) {
        G.current = false;
        return;
      }
      if (T.wasDragging.current) {
        T.wasDragging.current = false;
        return;
      }
      if (zoomable && !v) {
        if (N) {
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
    [V, v, zoomable, N, T.displaySize]
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
          u(Fe, {
            images: images,
            imageSizes: B,
            currentIndex: w.currentIndex,
            offsetX: T.offsetX,
            offsetY: T.offsetY,
            isAnimating: w.isAnimating,
            displaySize: T.displaySize,
            trackRef: y,
            handlers: vt,
            onImageClick: wt,
            onActiveFullReady: O,
            zoom: N,
          }),
        v &&
          u(Ue, {
            images: images,
            imageSizes: B,
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
            onNext: dt,
          }),
        thumbs
          ? u(Ie, {
              images: images,
              currentIndex: w.currentIndex,
              isClosing: M,
              onPick: (t) => {
                C();
                w.goToIndex(t);
              },
            })
          : u(Ne, {
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
