import {
  u,
  d,
  A,
  q,
  al,
  am,
  h,
  an as an_1,
  M,
  S,
  a2,
  v,
} from "./index-GOT6tyDH.js";

(() => {
  try {
    const o =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    o.SENTRY_RELEASE = { id: "1.1.2" };
    const m = new o.Error().stack;

    if (m) {
      o._sentryDebugIds = o._sentryDebugIds || {};
      o._sentryDebugIds[m] = "6f5f06ae-255e-4912-9b41-5d6a37ec05ba";
      o._sentryDebugIdIdentifier =
        "sentry-dbid-6f5f06ae-255e-4912-9b41-5d6a37ec05ba";
    }
  } catch {}
})();

const _t = ({ size = 20 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("path", {
        d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",
      }),
      u("path", {
        d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      }),
    ],
  });

const jt = ({ size = 20 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: u("circle", { cx: "12", cy: "12", r: "10" }),
  });

const Ht = ({ size = 20 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("path", {
        d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      }),
      u("path", { d: "M22 21H7" }),
      u("path", { d: "m5 11 9 9" }),
    ],
  });

const Ut = ({ size = 20 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: u("line", { x1: "5", y1: "19", x2: "19", y2: "5" }),
  });

const Gt = ({ size = 20 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: u("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
    }),
  });

const qt = ({ size = 20 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("path", { d: "M21 7v6h-6" }),
      u("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }),
    ],
  });

const Jt = ({ size = 20 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("path", { d: "M3 7v6h6" }),
      u("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }),
    ],
  });

const Vt = ({ size = 20 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("circle", { cx: "11", cy: "11", r: "8" }),
      u("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      u("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      u("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

const Qt = ({ size = 20 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("circle", { cx: "11", cy: "11", r: "8" }),
      u("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      u("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

const j = 0.25;
const nt = 4;
const tt = 0.15;
function tn(o, m, R) {
  const [h, E] = d(1);
  const [k, X] = d({ x: 0, y: 0 });
  const B = A(1);
  const I = A({ x: 0, y: 0 });
  const S = A(false);
  const H = A({ x: 0, y: 0 });
  const K = A(null);

  const b = q((M, p) => {
    B.current = M;
    I.current = p;
    E(M);
    X(p);
  }, []);

  const C = q((M, p, P, L, Y) => {
    const w = (L - P.x) / M;
    const T = (Y - P.y) / M;
    return { x: L - w * p, y: Y - T * p };
  }, []);

  const y = q(
    (M = Infinity) => {
      const o_current = o.current;
      if (!o_current) {
        return;
      }
      const P = o_current.getBoundingClientRect();
      const L = 32;
      const Y = (P.width - L * 2) / m;
      const w = (P.height - L * 2) / R;
      const T = Math.max(j, Math.min(Y, w, M));
      b(T, { x: (P.width - m * T) / 2, y: (P.height - R * T) / 2 });
    },
    [m, R, b, o]
  );

  const g = q(() => {
    const o_current = o.current;
    if (!o_current) {
      return;
    }
    const p = o_current.getBoundingClientRect();
    const P = p.width / 2;
    const L = p.height / 2;
    const B_current = B.current;
    const w = Math.min(nt, B_current + tt);
    b(w, C(B_current, w, I.current, P, L));
  }, [o, b, C]);

  const a = q(() => {
    const o_current = o.current;
    if (!o_current) {
      return;
    }
    const p = o_current.getBoundingClientRect();
    const P = p.width / 2;
    const L = p.height / 2;
    const B_current = B.current;
    const w = Math.max(j, B_current - tt);
    b(w, C(B_current, w, I.current, P, L));
  }, [o, b, C]);

  const D = q(() => y(), [y]);

  return {
    zoom: h,
    panOffset: k,
    zoomRef: B,
    panOffsetRef: I,
    isPanningRef: S,
    panStartRef: H,
    pinchRef: K,
    updateTransform: b,
    zoomToPoint: C,
    fitAndCenter: y,
    zoomIn: g,
    zoomOut: a,
    zoomReset: D,
    MIN_ZOOM: j,
    MAX_ZOOM: nt,
  };
}
const nn = 50;
function en(o, m, R, h) {
  const E = A([]);
  const k = A(-1);
  const [X, B] = d({ index: -1, length: 0 });

  const I = q(() => {
    const m_current = m.current;
    const o_current = o.current;
    if (!m_current || !o_current) {
      return;
    }
    const a = E.current.slice(0, k.current + 1);

    a.push({
      image: m_current.getImageData(0, 0, o_current.width, o_current.height),
      extra: h?.current,
    });

    if (a.length > nn) {
      a.shift();
    }

    E.current = a;
    k.current = a.length - 1;
    B({ index: k.current, length: a.length });
  }, [o, m, h]);

  const S = q(
    (y) => {
      const g = E.current[y];
      const m_current = m.current;

      if (g && m_current) {
        m_current.putImageData(g.image, 0, 0);
        h && g.extra !== undefined && (h.current = g.extra);
        k.current = y;
        B({ index: y, length: E.current.length });
        R.current?.();
      }
    },
    [m, R, h]
  );

  const H = q(() => S(k.current - 1), [S]);

  const K = q(() => S(k.current + 1), [S]);

  const b = q(() => S(k.current), [S]);

  const C = q(
    (y, g) => {
      E.current = [
        { image: y.getImageData(0, 0, g.width, g.height), extra: h?.current },
      ];

      k.current = 0;
      B({ index: 0, length: 1 });
    },
    [h]
  );

  return {
    historyIndex: X.index,
    canUndo: X.index > 0,
    canRedo: X.index < X.length - 1,
    saveToHistory: I,
    undo: H,
    redo: K,
    initHistory: C,
    restoreCurrent: b,
  };
}
const rn = "ccq9";
const on = "G5pO";
const cn = "hLVY";
const sn = "N0ef";
const ln = "B25g";
const an = "oZm3";
const un = "F4YP";
const dn = "YU59";
const hn = "gz5g";
const fn = "uvEh";
const mn = "OXIV";
const gn = "y0uI";
const vn = "NrTa";
const yn = "S1d8";
const pn = "enKD";
const wn = "cXHv";
const xn = "cij9";
const Cn = "xMPR";
const kn = "rRq2";
const bn = "i31n";
const Bn = "eM48";
const Mn = "AxJd";
const Ln = "ggMF";
const Fn = "fuxY";
const Nn = "yhNG";

const c = {
  modalContent: rn,
  container: on,
  toolbar: cn,
  toolGroup: sn,
  separator: ln,
  spacer: an,
  toolButton: un,
  active: dn,
  sizeButton: hn,
  sizePreview: fn,
  colorPalette: mn,
  colorButton: gn,
  colorPicker: vn,
  zoomLabel: yn,
  canvasContainer: pn,
  viewport: wn,
  actions: xn,
  cancelButton: Cn,
  saveButton: kn,
  confirmOverlay: bn,
  confirmDialog: Bn,
  confirmText: Mn,
  confirmActions: Ln,
  confirmCancel: Fn,
  confirmClose: Nn,
};

const Rn = [
  "#000000",
  "#FFFFFF",
  "#FF3B30",
  "#FF9500",
  "#FFCC00",
  "#34C759",
  "#007AFF",
  "#5856D6",
  "#AF52DE",
  "#FF2D55",
  "#8E8E93",
  "#00C7BE",
];

const Dn = [2, 4, 8, 12, 20, 32];

const Tn = al(
  ({
    tool,
    color,
    brushSize,
    zoom,
    canUndo,
    canRedo,
    onToolChange,
    onColorChange,
    onBrushSizeChange,
    onZoomIn,
    onZoomOut,
    onZoomReset,
    onUndo,
    onRedo,
    onClear,
  }) =>
    u("div", {
      className: c.toolbar,
      children: [
        u("div", {
          className: c.toolGroup,
          children: [
            u("button", {
              className: `${c.toolButton} ${tool === "brush" ? c.active : ""}`,
              onClick: () => onToolChange("brush"),
              title: "Кисть",
              children: u(_t, {}),
            }),
            u("button", {
              className: `${c.toolButton} ${tool === "eraser" ? c.active : ""}`,
              onClick: () => onToolChange("eraser"),
              title: "Ластик",
              children: u(Ht, {}),
            }),
            u("button", {
              className: `${c.toolButton} ${tool === "line" ? c.active : ""}`,
              onClick: () => onToolChange("line"),
              title: "Линия",
              children: u(Ut, {}),
            }),
            u("button", {
              className: `${c.toolButton} ${
                tool === "rectangle" ? c.active : ""
              }`,
              onClick: () => onToolChange("rectangle"),
              title: "Прямоугольник",
              children: u(Gt, {}),
            }),
            u("button", {
              className: `${c.toolButton} ${tool === "circle" ? c.active : ""}`,
              onClick: () => onToolChange("circle"),
              title: "Круг",
              children: u(jt, {}),
            }),
          ],
        }),
        u("div", { className: c.separator }),
        u("div", {
          className: c.toolGroup,
          children: Dn.map((a) =>
            u(
              "button",
              {
                className: `${c.sizeButton} ${brushSize === a ? c.active : ""}`,
                onClick: () => onBrushSizeChange(a),
                title: `${a}px`,
                children: u("span", {
                  className: c.sizePreview,
                  style: { width: Math.min(a, 20), height: Math.min(a, 20) },
                }),
              },
              a
            )
          ),
        }),
        u("div", { className: c.separator }),
        u("div", {
          className: c.colorPalette,
          children: [
            Rn.map((a) =>
              u(
                "button",
                {
                  className: `${c.colorButton} ${color === a ? c.active : ""}`,
                  style: { backgroundColor: a },
                  onClick: () => onColorChange(a),
                  title: a,
                },
                a
              )
            ),
            u("input", {
              type: "color",
              value: color,
              onChange: (a) => onColorChange(a.currentTarget.value),
              className: c.colorPicker,
              title: "Свой цвет",
            }),
          ],
        }),
        u("div", { className: c.spacer }),
        u("div", {
          className: c.toolGroup,
          children: [
            u("button", {
              className: c.toolButton,
              onClick: onZoomOut,
              disabled: zoom <= j,
              title: "Уменьшить",
              children: u(Qt, {}),
            }),
            u("button", {
              className: c.zoomLabel,
              onClick: onZoomReset,
              title: "Сбросить зум",
              children: [Math.round(zoom * 100), "%"],
            }),
            u("button", {
              className: c.toolButton,
              onClick: onZoomIn,
              disabled: zoom >= nt,
              title: "Увеличить",
              children: u(Vt, {}),
            }),
          ],
        }),
        u("div", { className: c.separator }),
        u("div", {
          className: c.toolGroup,
          children: [
            u("button", {
              className: c.toolButton,
              onClick: onUndo,
              disabled: !canUndo,
              title: "Отменить (Ctrl+Z)",
              children: u(Jt, {}),
            }),
            u("button", {
              className: c.toolButton,
              onClick: onRedo,
              disabled: !canRedo,
              title: "Повторить (Ctrl+Y)",
              children: u(qt, {}),
            }),
            u("button", {
              className: c.toolButton,
              onClick: onClear,
              title: "Очистить",
              children: u(am, { size: 20 }),
            }),
          ],
        }),
      ],
    })
);

function En(o, m, R, h) {
  if (o.current) {
    o.current = false;
    m.current = null;
    R.current = null;
    h();
  }
}
const In = {
  post: { width: 800, height: 500 },
  banner: { width: 1100, height: 380 },
};

export function DrawingCanvas({
  isOpen,
  onClose,
  onSave,
  mode = "post",
  saveButtonText,
}) {
  const [k, X] = d(false);
  const [B, I] = d(false);

  const S = q(() => {
    I(true);
    return false;
  }, []);

  const H = q(() => {
    I(false);
    onClose();
  }, [onClose]);

  const K = q(() => {
    I(false);
  }, []);

  const b = panOffsetRef(null);
  const C = panOffsetRef(null);
  const y = panOffsetRef(null);
  const g = panOffsetRef(null);
  const a = panOffsetRef(1);
  const [D, M] = d("brush");
  const [p, P] = d("#000000");
  const [L, Y] = d(4);
  const w = panOffsetRef(false);
  const T = panOffsetRef([]);
  const W = panOffsetRef(null);
  const wt = panOffsetRef(0);
  const Z = panOffsetRef(null);
  const { width, height } = In[h];

  const {
    zoom,
    panOffset,
    zoomRef,
    panOffsetRef,
    isPanningRef,
    panStartRef,
    pinchRef,
    updateTransform,
    zoomToPoint,
    fitAndCenter,
    zoomIn,
    zoomOut,
    zoomReset,
  } = tn(C, width, height);

  const ct = q(() => {
    const b_current = b.current;
    const y_current = y.current;
    if (!b_current || !y_current) {
      return;
    }
    const t = b_current.getContext("2d");
    if (!t) {
      return;
    }
    const a_current = a.current;
    const d = b_current.width / a_current;
    const l = b_current.height / a_current;
    const z_current = zoomRef.current;
    const A_current = panOffsetRef.current;
    t.save();
    t.setTransform(a_current, 0, 0, a_current, 0, 0);
    t.clearRect(0, 0, d, l);
    t.translate(A_current.x, A_current.y);
    t.scale(z_current, z_current);
    t.shadowColor = "rgba(0, 0, 0, 0.15)";
    t.shadowBlur = 20 / z_current;
    t.shadowOffsetX = 0;
    t.shadowOffsetY = 4 / z_current;
    t.fillStyle = "#FFFFFF";
    t.fillRect(0, 0, width, height);
    t.shadowColor = "transparent";
    t.shadowBlur = 0;
    t.shadowOffsetY = 0;
    t.imageSmoothingEnabled = z_current < 2;
    t.drawImage(y_current, 0, 0, width, height);
    t.imageSmoothingEnabled = true;
    const Z_current = Z.current;
    if (Z_current) {
      t.strokeStyle = Z_current.color;
      t.lineWidth = Z_current.lineWidth;
      t.lineCap = "round";
      t.lineJoin = "round";
      t.beginPath();

      if (Z_current.tool === "line") {
        t.moveTo(Z_current.start.x, Z_current.start.y);
        t.lineTo(Z_current.current.x, Z_current.current.y);
      } else if (Z_current.tool === "rectangle") {
        t.rect(
          Z_current.start.x,
          Z_current.start.y,
          Z_current.current.x - Z_current.start.x,
          Z_current.current.y - Z_current.start.y
        );
      } else if (Z_current.tool === "circle") {
        const J = Math.hypot(
          Z_current.current.x - Z_current.start.x,
          Z_current.current.y - Z_current.start.y
        );
        t.arc(Z_current.start.x, Z_current.start.y, J, 0, Math.PI * 2);
      }

      t.stroke();
    }
    t.restore();
  }, [width, height]);

  const G = panOffsetRef(ct);
  G.current = ct;

  const {
    saveToHistory,
    undo,
    redo,
    canUndo,
    canRedo,
    initHistory,
    restoreCurrent,
  } = en(y, g, G, T);

  const bt = fitAndCenter;

  mode(() => {
    if (!isOpen || !b.current || !C.current) {
      return;
    }
    const b_current = b.current;
    const C_current = C.current;
    const t = window.devicePixelRatio || 1;
    a.current = t;
    const s = C_current.getBoundingClientRect();
    b_current.width = s.width * t;
    b_current.height = s.height * t;
    const d = document.createElement("canvas");
    d.width = width * t;
    d.height = height * t;
    const l = d.getContext("2d", { willReadFrequently: true });
    if (!l) {
      return;
    }
    l.scale(t, t);
    l.fillStyle = "#FFFFFF";
    l.fillRect(0, 0, width, height);
    y.current = d;
    g.current = l;
    T.current = [];
    W.current = null;
    w.current = false;
    initHistory(l, d);
    let u = true;
    const v = new ResizeObserver((J) => {
      for (const ft of J) {
        const { width: width_1, height: height_1 } = ft.contentRect;
        if (!(width_1 === 0 || height_1 === 0)) {
          b_current.width = width_1 * a.current;
          b_current.height = height_1 * a.current;

          if (u) {
            const mt = (width_1 - 64) / width;
            const pt = (height_1 - 64) / height;
            const et = Math.max(j, Math.min(mt, pt));
            updateTransform(et, {
              x: (width_1 - width * et) / 2,
              y: (height_1 - height * et) / 2,
            });
          }

          G.current();
        }
      }
    });
    v.observe(C_current);
    const i = setTimeout(() => {
      u = false;
    }, 500);
    return () => {
      clearTimeout(i);
      v.disconnect();
      y.current = null;
      g.current = null;
    };
  }, [isOpen, width, height]);

  mode(() => {
    ct();
  }, [zoom, panOffset, ct]);

  const lt = q(
    (n) => {
      const b_current = b.current;
      if (!b_current) {
        return { x: 0, y: 0 };
      }
      const t = b_current.getBoundingClientRect();
      let s;
      let d;

      if ("touches" in n) {
        s = n.touches[0].clientX;
        d = n.touches[0].clientY;
      } else {
        s = n.clientX;
        d = n.clientY;
      }

      const l = (s - t.left - panOffsetRef.current.x) / zoomRef.current;
      const u = (d - t.top - panOffsetRef.current.y) / zoomRef.current;
      return mode === "banner"
        ? {
            x:
              Math.round(Math.max(-2 * width, Math.min(3 * width, l)) * 100) /
              100,
            y:
              Math.round(Math.max(-2 * height, Math.min(3 * height, u)) * 100) /
              100,
          }
        : { x: l, y: u };
    },
    [width, height, mode]
  );

  const Bt = q(
    (n) => {
      if (
        ("button" in n && n.button !== 0) ||
        ("touches" in n && n.touches.length > 1)
      ) {
        return;
      }
      n.preventDefault();
      const g_current = g.current;
      if (!g_current) {
        return;
      }
      const t = lt(n);
      if (mode === "banner" && T.current.length >= 2000 /* 2e3 */) {
        an_1.error("Рисунок слишком сложный. Упростите его перед сохранением");
        return;
      }

      if (mode === "banner") {
        wt.current = T.current.reduce(
          (s, d) => s + (d.tool === "clear" ? 0 : d.points.length),
          0
        );

        W.current = { tool: D, color: p, width: L, points: [[t.x, t.y]] };
      }

      w.current = true;

      if (D === "brush" || D === "eraser") {
        g_current.beginPath();
        g_current.moveTo(t.x, t.y);
        g_current.lineCap = "round";
        g_current.lineJoin = "round";
        g_current.lineWidth = L;
        g_current.strokeStyle = D === "eraser" ? "#FFFFFF" : p;
        g_current.lineTo(t.x, t.y);
        g_current.stroke();
      } else {
        Z.current = {
          start: t,
          current: t,
          tool: D,
          color: p,
          lineWidth: L,
        };
      }
    },
    [D, p, L, lt, mode]
  );

  const gt = q(
    (n) => {
      if (!w.current || ("touches" in n && n.touches.length > 1)) {
        return;
      }
      n.preventDefault();
      const r = lt(n);
      const W_current = W.current;
      if (W_current) {
        const s = [r.x, r.y];

        if (D === "brush" || D === "eraser") {
          W_current.points.push(s);
        } else {
          W_current.points = [W_current.points[0], s];
        }

        if (
          mode === "banner" &&
          (W_current.points.length > 4096 ||
            wt.current + W_current.points.length > 60000) /* 6e4 */
        ) {
          w.current = false;
          Z.current = null;
          W.current = null;
          restoreCurrent();

          an_1.error(
            "Штрих слишком сложный и не сохранён. Нарисуйте его несколькими частями"
          );

          return;
        }
      }
      if (D === "brush" || D === "eraser") {
        const g_current = g.current;
        if (!g_current) {
          return;
        }
        g_current.lineTo(r.x, r.y);
        g_current.stroke();
        G.current();
      } else {
        if (Z.current) {
          Z.current = { ...Z.current, current: r };
          G.current();
        }
      }
    },
    [D, lt, mode, restoreCurrent]
  );

  const at = q(() => {
    if (!w.current) {
      return;
    }
    w.current = false;
    const Z_current = Z.current;
    if (Z_current) {
      const g_current = g.current;
      if (g_current) {
        g_current.strokeStyle = Z_current.color;
        g_current.lineWidth = Z_current.lineWidth;
        g_current.lineCap = "round";
        g_current.lineJoin = "round";
        g_current.beginPath();

        if (Z_current.tool === "line") {
          g_current.moveTo(Z_current.start.x, Z_current.start.y);
          g_current.lineTo(Z_current.current.x, Z_current.current.y);
        } else if (Z_current.tool === "rectangle") {
          g_current.rect(
            Z_current.start.x,
            Z_current.start.y,
            Z_current.current.x - Z_current.start.x,
            Z_current.current.y - Z_current.start.y
          );
        } else if (Z_current.tool === "circle") {
          const s = Math.hypot(
            Z_current.current.x - Z_current.start.x,
            Z_current.current.y - Z_current.start.y
          );
          g_current.arc(
            Z_current.start.x,
            Z_current.start.y,
            s,
            0,
            Math.PI * 2
          );
        }

        g_current.stroke();
      }
      Z.current = null;
    }
    const W_current = W.current;

    if (W_current) {
      !["brush", "eraser"].includes(W_current.tool) &&
        W_current.points.length === 1 &&
        W_current.points.push(W_current.points[0]);

      T.current = [...T.current, W_current];
    }

    W.current = null;
    saveToHistory();
    G.current();
  }, [saveToHistory]);

  const Mt = panOffsetRef(gt);
  const ut = panOffsetRef(at);
  Mt.current = gt;
  ut.current = at;

  const dt = q(() => {
    En(w, W, Z, restoreCurrent);
  }, [restoreCurrent]);

  const vt = q(() => {
    dt();
    undo();
  }, [dt, undo]);

  const ht = q(() => {
    dt();
    redo();
  }, [dt, redo]);

  const Xt = q((n) => {
    if (n.button === 1) {
      n.preventDefault();
      isPanningRef.current = true;
      panStartRef.current = { x: n.clientX, y: n.clientY };
    }
  }, []);

  mode(() => {
    if (!isOpen) {
      return;
    }

    const n = (t) => {
      if (isPanningRef.current) {
        const s = t.clientX - panStartRef.current.x;
        const d = t.clientY - panStartRef.current.y;
        panStartRef.current = { x: t.clientX, y: t.clientY };
        const A_current = panOffsetRef.current;
        updateTransform(zoomRef.current, {
          x: A_current.x + s,
          y: A_current.y + d,
        });
        return;
      }
      Mt.current(t);
    };

    const r = () => {
      if (isPanningRef.current) {
        isPanningRef.current = false;
        return;
      }
      ut.current();
    };

    window.addEventListener("mousemove", n);
    window.addEventListener("mouseup", r);

    return () => {
      window.removeEventListener("mousemove", n);
      window.removeEventListener("mouseup", r);
    };
  }, [isOpen, updateTransform]);

  mode(() => {
    if (!isOpen) {
      return;
    }
    const n = (r) => {
      if ((r.ctrlKey || r.metaKey) && r.key === "z") {
        r.preventDefault();
        r.shiftKey ? ht() : vt();
      }

      if ((r.ctrlKey || r.metaKey) && r.key === "y") {
        r.preventDefault();
        ht();
      }

      if ((r.ctrlKey || r.metaKey) && (r.key === "=" || r.key === "+")) {
        r.preventDefault();
        const C_current = C.current;
        if (!C_current) {
          return;
        }
        const s = C_current.getBoundingClientRect();
        const d = s.width / 2;
        const l = s.height / 2;
        const z_current = zoomRef.current;
        const v = Math.min(nt, z_current + tt);
        updateTransform(
          v,
          zoomToPoint(z_current, v, panOffsetRef.current, d, l)
        );
      }

      if ((r.ctrlKey || r.metaKey) && r.key === "-") {
        r.preventDefault();
        const C_current = C.current;
        if (!C_current) {
          return;
        }
        const s = C_current.getBoundingClientRect();
        const d = s.width / 2;
        const l = s.height / 2;
        const z_current = zoomRef.current;
        const v = Math.max(j, z_current - tt);
        updateTransform(
          v,
          zoomToPoint(z_current, v, panOffsetRef.current, d, l)
        );
      }

      if ((r.ctrlKey || r.metaKey) && r.key === "0") {
        r.preventDefault();
        bt();
      }
    };
    window.addEventListener("keydown", n);

    return () => window.removeEventListener("keydown", n);
  }, [isOpen, vt, ht, updateTransform, zoomToPoint, bt]);

  mode(() => {
    if (!isOpen) {
      return;
    }
    const C_current = C.current;
    if (!C_current) {
      return;
    }
    const r = (t) => {
      t.preventDefault();
      const s = C_current.getBoundingClientRect();
      const d = t.clientX - s.left;
      const l = t.clientY - s.top;
      if (t.ctrlKey || t.metaKey) {
        const z_current = zoomRef.current;
        const v = t.deltaY > 0 ? -tt : tt;
        const i = Math.min(nt, Math.max(j, z_current + v));
        if (i === z_current) {
          return;
        }
        updateTransform(
          i,
          zoomToPoint(z_current, i, panOffsetRef.current, d, l)
        );
      } else {
        updateTransform(zoomRef.current, {
          x: panOffsetRef.current.x - t.deltaX,
          y: panOffsetRef.current.y - t.deltaY,
        });
      }
    };
    C_current.addEventListener("wheel", r, { passive: false });

    return () => C_current.removeEventListener("wheel", r);
  }, [isOpen, updateTransform, zoomToPoint]);

  mode(() => {
    if (!isOpen) {
      return;
    }
    const C_current = C.current;
    if (!C_current) {
      return;
    }

    const r = (l, u) =>
      Math.hypot(u.clientX - l.clientX, u.clientY - l.clientY);

    const t = (l) => {
      if (l.touches.length === 2) {
        l.preventDefault();

        if (w.current) {
          if (mode === "banner") {
            ut.current();
          } else {
            w.current = false;
            Z.current = null;
          }
        }

        const u = C_current.getBoundingClientRect();
        const v = l.touches[0];
        const i = l.touches[1];
        pinchRef.current = {
          dist: r(v, i),
          midX: (v.clientX + i.clientX) / 2 - u.left,
          midY: (v.clientY + i.clientY) / 2 - u.top,
        };
      }
    };

    const s = (l) => {
      if (l.touches.length === 2 && pinchRef.current) {
        l.preventDefault();
        const u = C_current.getBoundingClientRect();
        const v = l.touches[0];
        const i = l.touches[1];
        const J = r(v, i);
        const ft = (v.clientX + i.clientX) / 2 - u.left;
        const q = (v.clientY + i.clientY) / 2 - u.top;
        const V = J / pinchRef.current.dist;
        const z_current = zoomRef.current;
        const mt = Math.min(nt, Math.max(j, z_current * V));
        const pt = ft - pinchRef.current.midX;
        const et = q - pinchRef.current.midY;
        const Lt = zoomToPoint(
          z_current,
          mt,
          panOffsetRef.current,
          pinchRef.current.midX,
          pinchRef.current.midY
        );
        updateTransform(mt, { x: Lt.x + pt, y: Lt.y + et });
        pinchRef.current = { dist: J, midX: ft, midY: q };
      }
    };

    const d = (l) => {
      if (l.touches.length < 2) {
        pinchRef.current = null;
      }
    };

    C_current.addEventListener("touchstart", t, { passive: false });
    C_current.addEventListener("touchmove", s, { passive: false });
    C_current.addEventListener("touchend", d);
    C_current.addEventListener("touchcancel", d);

    return () => {
      C_current.removeEventListener("touchstart", t);
      C_current.removeEventListener("touchmove", s);
      C_current.removeEventListener("touchend", d);
      C_current.removeEventListener("touchcancel", d);
    };
  }, [isOpen, updateTransform, zoomToPoint, mode]);

  const Zt = q(() => {
    const g_current = g.current;

    if (g_current) {
      g_current.fillStyle = "#FFFFFF";
      g_current.fillRect(0, 0, width, height);
      T.current = [];
      W.current = null;
      Z.current = null;
      w.current = false;
      saveToHistory();
      G.current();
    }
  }, [width, height, saveToHistory]);

  const Ot = async () => {
    const y_current = y.current;
    if (!y_current || k) {
      return;
    }
    ut.current();
    const r = y_current.toDataURL("image/png");
    X(true);
    try {
      await onSave(
        r,
        mode === "banner"
          ? { version: 1, width: width, height: height, ops: T.current }
          : undefined
      );

      onClose();
    } catch (t) {
      console.error("Failed to save drawing:", t);
    } finally {
      X(false);
    }
  };

  return isOpen
    ? u(S, {
        children: [
          u(M, {
            onClose: onClose,
            onBeforeClose: S,
            showHeader: false,
            contentClassName: c.modalContent,
            size: "wide",
            children: u("div", {
              className: c.container,
              children: [
                u(Tn, {
                  tool: D,
                  color: p,
                  brushSize: L,
                  zoom: zoom,
                  canUndo: canUndo,
                  canRedo: canRedo,
                  onToolChange: M,
                  onColorChange: P,
                  onBrushSizeChange: Y,
                  onZoomIn: zoomIn,
                  onZoomOut: zoomOut,
                  onZoomReset: zoomReset,
                  onUndo: vt,
                  onRedo: ht,
                  onClear: Zt,
                }),
                u("div", {
                  ref: C,
                  className: c.canvasContainer,
                  onMouseDown: Xt,
                  children: u("canvas", {
                    ref: b,
                    className: c.viewport,
                    onMouseDown: Bt,
                    onTouchStart: Bt,
                    onTouchMove: gt,
                    onTouchEnd: at,
                    onTouchCancel: at,
                  }),
                }),
                u("div", {
                  className: c.actions,
                  children: [
                    u("button", {
                      className: c.cancelButton,
                      onClick: () => S(),
                      disabled: k,
                      children: "Отмена",
                    }),
                    u("button", {
                      className: c.saveButton,
                      onClick: Ot,
                      disabled: k,
                      children: k
                        ? u(S, { children: [u(a2, {}), "Загрузка..."] })
                        : saveButtonText ||
                          (mode === "banner"
                            ? "Загрузить баннер"
                            : "Добавить рисунок"),
                    }),
                  ],
                }),
              ],
            }),
          }),
          B &&
            v(
              u("div", {
                className: c.confirmOverlay,
                onClick: K,
                children: u("div", {
                  className: c.confirmDialog,
                  onClick: (n) => n.stopPropagation(),
                  children: [
                    u("p", {
                      className: c.confirmText,
                      children:
                        "Вы действительно хотите закрыть рисовалку? Ваши изменения будут не сохранены.",
                    }),
                    u("div", {
                      className: c.confirmActions,
                      children: [
                        u("button", {
                          className: c.confirmCancel,
                          onClick: K,
                          children: "Отмена",
                        }),
                        u("button", {
                          className: c.confirmClose,
                          onClick: H,
                          children: "Закрыть",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              document.body
            ),
        ],
      })
    : null;
}

export { DrawingCanvas as DrawingCanvas };
