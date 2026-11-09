import { u, d, A, q, aJ, v, h, t, $, M, S, aD } from "./index-dnACTU3c.js";

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
      o._sentryDebugIds[m] = "d3163851-780f-4345-9d6f-8d22d864e618";
      o._sentryDebugIdIdentifier =
        "sentry-dbid-d3163851-780f-4345-9d6f-8d22d864e618";
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
    children: u("circle", { cx: "12", cy: "12", r: "10" }),
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
      u("path", { d: "M21 7v6h-6" }),
      u("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }),
    ],
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
      u("path", { d: "M3 7v6h6" }),
      u("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }),
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
      u("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      u("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
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
      u("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

const H = 0.25;
const nt = 4;
const tt = 0.15;
function tn(o, m, F) {
  const [h, T] = d(1);
  const [k, Y] = d({ x: 0, y: 0 });
  const B = A(1);
  const I = A({ x: 0, y: 0 });
  const S = A(false);
  const j = A({ x: 0, y: 0 });
  const W = A(null);

  const b = q((M, p) => {
    B.current = M;
    I.current = p;
    T(M);
    Y(p);
  }, []);

  const C = q((M, p, P, L, X) => {
    const w = (L - P.x) / M;
    const E = (X - P.y) / M;
    return { x: L - w * p, y: X - E * p };
  }, []);

  const y = q(
    (M = Infinity) => {
      const o_current = o.current;
      if (!o_current) {
        return;
      }
      const P = o_current.getBoundingClientRect();
      const L = 32;
      const X = (P.width - L * 2) / m;
      const w = (P.height - L * 2) / F;
      const E = Math.max(H, Math.min(X, w, M));
      b(E, { x: (P.width - m * E) / 2, y: (P.height - F * E) / 2 });
    },
    [m, F, b, o]
  );

  const v = q(() => {
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
    const w = Math.max(H, B_current - tt);
    b(w, C(B_current, w, I.current, P, L));
  }, [o, b, C]);

  const R = q(() => y(), [y]);

  return {
    zoom: h,
    panOffset: k,
    zoomRef: B,
    panOffsetRef: I,
    isPanningRef: S,
    panStartRef: j,
    pinchRef: W,
    updateTransform: b,
    zoomToPoint: C,
    fitAndCenter: y,
    zoomIn: v,
    zoomOut: a,
    zoomReset: R,
    MIN_ZOOM: H,
    MAX_ZOOM: nt,
  };
}
const nn = 50;
function en(o, m, F, h) {
  const T = A([]);
  const k = A(-1);
  const [Y, B] = d({ index: -1, length: 0 });

  const I = q(() => {
    const m_current = m.current;
    const o_current = o.current;
    if (!m_current || !o_current) {
      return;
    }
    const a = T.current.slice(0, k.current + 1);

    a.push({
      image: m_current.getImageData(0, 0, o_current.width, o_current.height),
      extra: h?.current,
    });

    if (a.length > nn) {
      a.shift();
    }

    T.current = a;
    k.current = a.length - 1;
    B({ index: k.current, length: a.length });
  }, [o, m, h]);

  const S = q(
    (y) => {
      const v = T.current[y];
      const m_current = m.current;

      if (v && m_current) {
        m_current.putImageData(v.image, 0, 0);
        h && v.extra !== undefined && (h.current = v.extra);
        k.current = y;
        B({ index: y, length: T.current.length });
        F.current?.();
      }
    },
    [m, F, h]
  );

  const j = q(() => S(k.current - 1), [S]);

  const W = q(() => S(k.current + 1), [S]);

  const b = q(() => S(k.current), [S]);

  const C = q(
    (y, v) => {
      T.current = [
        { image: y.getImageData(0, 0, v.width, v.height), extra: h?.current },
      ];

      k.current = 0;
      B({ index: 0, length: 1 });
    },
    [h]
  );

  return {
    historyIndex: Y.index,
    canUndo: Y.index > 0,
    canRedo: Y.index < Y.length - 1,
    saveToHistory: I,
    undo: j,
    redo: W,
    initHistory: C,
    restoreCurrent: b,
  };
}
const rn = "yZ4D";
const on = "xrUB";
const cn = "NHfT";
const sn = "oLHB";
const ln = "y7X3";
const an = "lBmg";
const un = "MvtA";
const dn = "gaXq";
const hn = "kMJI";
const fn = "UHfV";
const mn = "NqRE";
const vn = "SDKQ";
const gn = "Iunm";
const yn = "XlJy";
const pn = "IhNq";
const wn = "sZXG";
const xn = "oikc";
const Cn = "xJNW";
const kn = "jcb8";
const bn = "qCps";
const Bn = "moGx";
const Mn = "zZ67";
const Ln = "LnOL";
const Dn = "aEDl";
const Nn = "YwKQ";

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
  colorButton: vn,
  colorPicker: gn,
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
  confirmCancel: Dn,
  confirmClose: Nn,
};

const Fn = [
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

const Rn = [2, 4, 8, 12, 20, 32];

const En = aJ(
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
              children: u(jt, {}),
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
              children: u(Ht, {}),
            }),
          ],
        }),
        u("div", { className: c.separator }),
        u("div", {
          className: c.toolGroup,
          children: Rn.map((a) =>
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
            Fn.map((a) =>
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
              disabled: zoom <= H,
              title: "Уменьшить",
              children: u(Vt, {}),
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
              children: u(Qt, {}),
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
              children: u(qt, {}),
            }),
            u("button", {
              className: c.toolButton,
              onClick: onRedo,
              disabled: !canRedo,
              title: "Повторить (Ctrl+Y)",
              children: u(Jt, {}),
            }),
            u("button", {
              className: c.toolButton,
              onClick: onClear,
              title: "Очистить",
              children: u(onClear, { size: 20 }),
            }),
          ],
        }),
      ],
    })
);

function Tn(o, m, F, h) {
  if (o.current) {
    o.current = false;
    m.current = null;
    F.current = null;
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
  const [k, Y] = d(false);
  const [B, I] = d(false);

  const S = q(() => {
    I(true);
    return false;
  }, []);

  const j = q(() => {
    I(false);
    onClose();
  }, [onClose]);

  const W = q(() => {
    I(false);
  }, []);

  const b = updateTransform(null);
  const C = updateTransform(null);
  const y = updateTransform(null);
  const v = updateTransform(null);
  const a = updateTransform(1);
  const [R, M] = d("brush");
  const [p, P] = d("#000000");
  const [L, X] = d(4);
  const w = updateTransform(false);
  const E = updateTransform([]);
  const $ = updateTransform(null);
  const wt = updateTransform(0);
  const Z = updateTransform(null);
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
    const O_current = panOffsetRef.current;
    t.save();
    t.setTransform(a_current, 0, 0, a_current, 0, 0);
    t.clearRect(0, 0, d, l);
    t.translate(O_current.x, O_current.y);
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
        const q = Math.hypot(
          Z_current.current.x - Z_current.start.x,
          Z_current.current.y - Z_current.start.y
        );
        t.arc(Z_current.start.x, Z_current.start.y, q, 0, Math.PI * 2);
      }

      t.stroke();
    }
    t.restore();
  }, [width, height]);

  const G = updateTransform(ct);
  G.current = ct;

  const {
    saveToHistory,
    undo,
    redo,
    canUndo,
    canRedo,
    initHistory,
    restoreCurrent,
  } = en(y, v, G, E);

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
    v.current = l;
    E.current = [];
    $.current = null;
    w.current = false;
    initHistory(l, d);
    let u = true;
    const g = new ResizeObserver((q) => {
      for (const ft of q) {
        const { width: width_1, height: height_1 } = ft.contentRect;
        if (!(width_1 === 0 || height_1 === 0)) {
          b_current.width = width_1 * a.current;
          b_current.height = height_1 * a.current;

          if (u) {
            const mt = (width_1 - 64) / width;
            const pt = (height_1 - 64) / height;
            const et = Math.max(H, Math.min(mt, pt));
            updateTransform(et, {
              x: (width_1 - width * et) / 2,
              y: (height_1 - height * et) / 2,
            });
          }

          G.current();
        }
      }
    });
    g.observe(C_current);
    const i = setTimeout(() => {
      u = false;
    }, 500);
    return () => {
      clearTimeout(i);
      g.disconnect();
      y.current = null;
      v.current = null;
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
      const v_current = v.current;
      if (!v_current) {
        return;
      }
      const t = lt(n);
      if (mode === "banner" && E.current.length >= 2000 /* 2e3 */) {
        t.error("Рисунок слишком сложный. Упростите его перед сохранением");
        return;
      }

      if (mode === "banner") {
        wt.current = E.current.reduce(
          (s, d) => s + (d.tool === "clear" ? 0 : d.points.length),
          0
        );

        $.current = { tool: R, color: p, width: L, points: [[t.x, t.y]] };
      }

      w.current = true;

      if (R === "brush" || R === "eraser") {
        v_current.beginPath();
        v_current.moveTo(t.x, t.y);
        v_current.lineCap = "round";
        v_current.lineJoin = "round";
        v_current.lineWidth = L;
        v_current.strokeStyle = R === "eraser" ? "#FFFFFF" : p;
        v_current.lineTo(t.x, t.y);
        v_current.stroke();
      } else {
        Z.current = {
          start: t,
          current: t,
          tool: R,
          color: p,
          lineWidth: L,
        };
      }
    },
    [R, p, L, lt, mode]
  );

  const vt = q(
    (n) => {
      if (!w.current || ("touches" in n && n.touches.length > 1)) {
        return;
      }
      n.preventDefault();
      const r = lt(n);
      const $_current = $.current;
      if ($_current) {
        const s = [r.x, r.y];

        if (R === "brush" || R === "eraser") {
          $_current.points.push(s);
        } else {
          $_current.points = [$_current.points[0], s];
        }

        if (
          mode === "banner" &&
          ($_current.points.length > 4096 ||
            wt.current + $_current.points.length > 60000) /* 6e4 */
        ) {
          w.current = false;
          Z.current = null;
          $.current = null;
          restoreCurrent();

          $_current.error(
            "Штрих слишком сложный и не сохранён. Нарисуйте его несколькими частями"
          );

          return;
        }
      }
      if (R === "brush" || R === "eraser") {
        const v_current = v.current;
        if (!v_current) {
          return;
        }
        v_current.lineTo(r.x, r.y);
        v_current.stroke();
        G.current();
      } else {
        if (Z.current) {
          Z.current = { ...Z.current, current: r };
          G.current();
        }
      }
    },
    [R, lt, mode, restoreCurrent]
  );

  const at = q(() => {
    if (!w.current) {
      return;
    }
    w.current = false;
    const Z_current = Z.current;
    if (Z_current) {
      const v_current = v.current;
      if (v_current) {
        v_current.strokeStyle = Z_current.color;
        v_current.lineWidth = Z_current.lineWidth;
        v_current.lineCap = "round";
        v_current.lineJoin = "round";
        v_current.beginPath();

        if (Z_current.tool === "line") {
          v_current.moveTo(Z_current.start.x, Z_current.start.y);
          v_current.lineTo(Z_current.current.x, Z_current.current.y);
        } else if (Z_current.tool === "rectangle") {
          v_current.rect(
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
          v_current.arc(
            Z_current.start.x,
            Z_current.start.y,
            s,
            0,
            Math.PI * 2
          );
        }

        v_current.stroke();
      }
      Z.current = null;
    }
    const $_current = $.current;

    if ($_current) {
      !["brush", "eraser"].includes($_current.tool) &&
        $_current.points.length === 1 &&
        $_current.points.push($_current.points[0]);

      E.current = [...E.current, $_current];
    }

    $.current = null;
    saveToHistory();
    G.current();
  }, [saveToHistory]);

  const Mt = updateTransform(vt);
  const ut = updateTransform(at);
  Mt.current = vt;
  ut.current = at;

  const dt = q(() => {
    Tn(w, $, Z, restoreCurrent);
  }, [restoreCurrent]);

  const gt = q(() => {
    dt();
    undo();
  }, [dt, undo]);

  const ht = q(() => {
    dt();
    redo();
  }, [dt, redo]);

  const Yt = q((n) => {
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
        const O_current = panOffsetRef.current;
        updateTransform(zoomRef.current, {
          x: O_current.x + s,
          y: O_current.y + d,
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
        r.shiftKey ? ht() : gt();
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
        const g = Math.min(nt, z_current + tt);
        updateTransform(
          g,
          zoomToPoint(z_current, g, panOffsetRef.current, d, l)
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
        const g = Math.max(H, z_current - tt);
        updateTransform(
          g,
          zoomToPoint(z_current, g, panOffsetRef.current, d, l)
        );
      }

      if ((r.ctrlKey || r.metaKey) && r.key === "0") {
        r.preventDefault();
        bt();
      }
    };
    window.addEventListener("keydown", n);

    return () => window.removeEventListener("keydown", n);
  }, [isOpen, gt, ht, updateTransform, zoomToPoint, bt]);

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
        const g = t.deltaY > 0 ? -tt : tt;
        const i = Math.min(nt, Math.max(H, z_current + g));
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
        const g = l.touches[0];
        const i = l.touches[1];
        pinchRef.current = {
          dist: r(g, i),
          midX: (g.clientX + i.clientX) / 2 - u.left,
          midY: (g.clientY + i.clientY) / 2 - u.top,
        };
      }
    };

    const s = (l) => {
      if (l.touches.length === 2 && pinchRef.current) {
        l.preventDefault();
        const u = C_current.getBoundingClientRect();
        const g = l.touches[0];
        const i = l.touches[1];
        const q = r(g, i);
        const ft = (g.clientX + i.clientX) / 2 - u.left;
        const J = (g.clientY + i.clientY) / 2 - u.top;
        const Q = q / pinchRef.current.dist;
        const z_current = zoomRef.current;
        const mt = Math.min(nt, Math.max(H, z_current * Q));
        const pt = ft - pinchRef.current.midX;
        const et = J - pinchRef.current.midY;
        const Lt = zoomToPoint(
          z_current,
          mt,
          panOffsetRef.current,
          pinchRef.current.midX,
          pinchRef.current.midY
        );
        updateTransform(mt, { x: Lt.x + pt, y: Lt.y + et });
        pinchRef.current = { dist: q, midX: ft, midY: J };
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
    const v_current = v.current;

    if (v_current) {
      v_current.fillStyle = "#FFFFFF";
      v_current.fillRect(0, 0, width, height);
      E.current = [];
      $.current = null;
      Z.current = null;
      w.current = false;
      saveToHistory();
      G.current();
    }
  }, [width, height, saveToHistory]);

  const At = async () => {
    const y_current = y.current;
    if (!y_current || k) {
      return;
    }
    ut.current();
    const r = y_current.toDataURL("image/png");
    Y(true);
    try {
      await onSave(
        r,
        mode === "banner"
          ? { version: 1, width: width, height: height, ops: E.current }
          : undefined
      );

      onClose();
    } catch (t) {
      console.error("Failed to save drawing:", t);
    } finally {
      Y(false);
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
                u(En, {
                  tool: R,
                  color: p,
                  brushSize: L,
                  zoom: zoom,
                  canUndo: canUndo,
                  canRedo: canRedo,
                  onToolChange: M,
                  onColorChange: P,
                  onBrushSizeChange: X,
                  onZoomIn: zoomIn,
                  onZoomOut: zoomOut,
                  onZoomReset: zoomReset,
                  onUndo: gt,
                  onRedo: ht,
                  onClear: Zt,
                }),
                u("div", {
                  ref: C,
                  className: c.canvasContainer,
                  onMouseDown: Yt,
                  children: u("canvas", {
                    ref: b,
                    className: c.viewport,
                    onMouseDown: Bt,
                    onTouchStart: Bt,
                    onTouchMove: vt,
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
                      onClick: At,
                      disabled: k,
                      children: k
                        ? u(S, { children: [u(aD, {}), "Загрузка..."] })
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
            $(
              u("div", {
                className: c.confirmOverlay,
                onClick: W,
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
                          onClick: W,
                          children: "Отмена",
                        }),
                        u("button", {
                          className: c.confirmClose,
                          onClick: j,
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
