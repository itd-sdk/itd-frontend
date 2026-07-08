import { a, d, A, y as q_1, ar, w, y, $, M, m, ao } from "./index-BewGW5_v.js";

(() => {
  try {
    const r =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    r.SENTRY_RELEASE = { id: "1.1.2" };
    const f = new r.Error().stack;

    if (f) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[f] = "38d11e8b-b640-41a1-962d-6018fb3cdcdb";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-38d11e8b-b640-41a1-962d-6018fb3cdcdb";
    }
  } catch {}
})();

const Xt = ({ size = 20 }) =>
  a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      a("path", {
        d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",
      }),
      a("path", {
        d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      }),
    ],
  });

const At = ({ size = 20 }) =>
  a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: a("circle", { cx: "12", cy: "12", r: "10" }),
  });

const zt = ({ size = 20 }) =>
  a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      a("path", {
        d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      }),
      a("path", { d: "M22 21H7" }),
      a("path", { d: "m5 11 9 9" }),
    ],
  });

const Kt = ({ size = 20 }) =>
  a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: a("line", { x1: "5", y1: "19", x2: "19", y2: "5" }),
  });

const $t = ({ size = 20 }) =>
  a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: a("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
    }),
  });

const Ot = ({ size = 20 }) =>
  a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      a("path", { d: "M21 7v6h-6" }),
      a("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }),
    ],
  });

const Wt = ({ size = 20 }) =>
  a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      a("path", { d: "M3 7v6h6" }),
      a("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }),
    ],
  });

const _t = ({ size = 20 }) =>
  a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      a("circle", { cx: "11", cy: "11", r: "8" }),
      a("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      a("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      a("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

const jt = ({ size = 20 }) =>
  a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      a("circle", { cx: "11", cy: "11", r: "8" }),
      a("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      a("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

const W = 0.25;
const V = 4;
const Q = 0.15;
function Ut(r, f, B) {
  const [K, D] = d(1);
  const [L, E] = d({ x: 0, y: 0 });
  const w = A(1);
  const F = A({ x: 0, y: 0 });
  const $ = A(false);
  const _ = A({ x: 0, y: 0 });
  const O = A(null);

  const l = q_1((b, x) => {
    w.current = b;
    F.current = x;
    D(b);
    E(x);
  }, []);

  const i = q_1((b, x, N, M, T) => {
    const C = (M - N.x) / b;
    const R = (T - N.y) / b;
    return { x: M - C * x, y: T - R * x };
  }, []);

  const v = q_1(
    (b = Infinity) => {
      const r_current = r.current;
      if (!r_current) {
        return;
      }
      const N = r_current.getBoundingClientRect();
      const M = 32;
      const T = (N.width - M * 2) / f;
      const C = (N.height - M * 2) / B;
      const R = Math.max(W, Math.min(T, C, b));
      l(R, { x: (N.width - f * R) / 2, y: (N.height - B * R) / 2 });
    },
    [f, B, l, r]
  );

  const y = q_1(() => {
    const r_current = r.current;
    if (!r_current) {
      return;
    }
    const x = r_current.getBoundingClientRect();
    const N = x.width / 2;
    const M = x.height / 2;
    const w_current = w.current;
    const C = Math.min(V, w_current + Q);
    l(C, i(w_current, C, F.current, N, M));
  }, [r, l, i]);

  const d = q_1(() => {
    const r_current = r.current;
    if (!r_current) {
      return;
    }
    const x = r_current.getBoundingClientRect();
    const N = x.width / 2;
    const M = x.height / 2;
    const w_current = w.current;
    const C = Math.max(W, w_current - Q);
    l(C, i(w_current, C, F.current, N, M));
  }, [r, l, i]);

  const I = q_1(() => v(), [v]);

  return {
    zoom: K,
    panOffset: L,
    zoomRef: w,
    panOffsetRef: F,
    isPanningRef: $,
    panStartRef: _,
    pinchRef: O,
    updateTransform: l,
    zoomToPoint: i,
    fitAndCenter: v,
    zoomIn: y,
    zoomOut: d,
    zoomReset: I,
    MIN_ZOOM: W,
    MAX_ZOOM: V,
  };
}
const Ct = 50;
function Gt(r, f, B) {
  const [K, D] = d([]);
  const [L, E] = d(-1);
  const w = A(-1);
  w.current = L;

  const F = q_1(() => {
    const f_current = f.current;
    const r_current = r.current;
    if (!f_current || !r_current) {
      return;
    }
    const v = f_current.getImageData(0, 0, r_current.width, r_current.height);

    D((y) => {
      const d = y.slice(0, w.current + 1);
      d.push(v);

      if (d.length > Ct) {
        d.shift();
      }

      return d;
    });

    E((y) => Math.min(y + 1, Ct - 1));
  }, [r, f]);

  const $ = q_1(() => {
    D((l) => {
      const w_current = w.current;
      if (w_current <= 0) {
        return l;
      }
      const f_current = f.current;
      if (!f_current) {
        return l;
      }
      const y = l[w_current - 1];

      if (y) {
        f_current.putImageData(y, 0, 0);
        w.current = w_current - 1;
        E(w_current - 1);
        B.current?.();
      }

      return l;
    });
  }, [f, B]);

  const _ = q_1(() => {
    D((l) => {
      const w_current = w.current;
      if (w_current >= l.length - 1) {
        return l;
      }
      const f_current = f.current;
      if (!f_current) {
        return l;
      }
      const y = l[w_current + 1];

      if (y) {
        f_current.putImageData(y, 0, 0);
        w.current = w_current + 1;
        E(w_current + 1);
        B.current?.();
      }

      return l;
    });
  }, [f, B]);

  const O = q_1((l, i) => {
    const v = l.getImageData(0, 0, i.width, i.height);
    D([v]);
    E(0);
    w.current = 0;
  }, []);

  return {
    historyIndex: L,
    canUndo: L > 0,
    canRedo: L < K.length - 1,
    saveToHistory: F,
    undo: $,
    redo: _,
    initHistory: O,
  };
}
const Jt = "wXtS";
const Ht = "sBRi";
const qt = "MycE";
const Qt = "tmMM";
const Vt = "J5a8";
const tn = "TAlN";
const nn = "cs1N";
const en = "wLcz";
const on = "U1f5";
const rn = "ZTGi";
const cn = "ruUO";
const sn = "Jbdu";
const an = "QEJp";
const ln = "mPbF";
const un = "RbAe";
const dn = "lIpw";
const hn = "fcdB";
const fn = "spTZ";
const mn = "jFK8";
const vn = "eYR7";
const yn = "agD5";
const gn = "i0MR";
const wn = "YRDf";
const pn = "FSus";
const xn = "KM9C";

const c = {
  modalContent: Jt,
  container: Ht,
  toolbar: qt,
  toolGroup: Qt,
  separator: Vt,
  spacer: tn,
  toolButton: nn,
  active: en,
  sizeButton: on,
  sizePreview: rn,
  colorPalette: cn,
  colorButton: sn,
  colorPicker: an,
  zoomLabel: ln,
  canvasContainer: un,
  viewport: dn,
  actions: hn,
  cancelButton: fn,
  saveButton: mn,
  confirmOverlay: vn,
  confirmDialog: yn,
  confirmText: gn,
  confirmActions: wn,
  confirmCancel: pn,
  confirmClose: xn,
};

const Cn = [
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

const kn = [2, 4, 8, 12, 20, 32];

const bn = ar(
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
    a("div", {
      className: c.toolbar,
      children: [
        a("div", {
          className: c.toolGroup,
          children: [
            a("button", {
              className: `${c.toolButton} ${tool === "brush" ? c.active : ""}`,
              onClick: () => onToolChange("brush"),
              title: "Кисть",
              children: a(Xt, {}),
            }),
            a("button", {
              className: `${c.toolButton} ${tool === "eraser" ? c.active : ""}`,
              onClick: () => onToolChange("eraser"),
              title: "Ластик",
              children: a(zt, {}),
            }),
            a("button", {
              className: `${c.toolButton} ${tool === "line" ? c.active : ""}`,
              onClick: () => onToolChange("line"),
              title: "Линия",
              children: a(Kt, {}),
            }),
            a("button", {
              className: `${c.toolButton} ${
                tool === "rectangle" ? c.active : ""
              }`,
              onClick: () => onToolChange("rectangle"),
              title: "Прямоугольник",
              children: a($t, {}),
            }),
            a("button", {
              className: `${c.toolButton} ${tool === "circle" ? c.active : ""}`,
              onClick: () => onToolChange("circle"),
              title: "Круг",
              children: a(At, {}),
            }),
          ],
        }),
        a("div", { className: c.separator }),
        a("div", {
          className: c.toolGroup,
          children: kn.map((d) =>
            a(
              "button",
              {
                className: `${c.sizeButton} ${brushSize === d ? c.active : ""}`,
                onClick: () => onBrushSizeChange(d),
                title: `${d}px`,
                children: a("span", {
                  className: c.sizePreview,
                  style: { width: Math.min(d, 20), height: Math.min(d, 20) },
                }),
              },
              d
            )
          ),
        }),
        a("div", { className: c.separator }),
        a("div", {
          className: c.colorPalette,
          children: [
            Cn.map((d) =>
              a(
                "button",
                {
                  className: `${c.colorButton} ${color === d ? c.active : ""}`,
                  style: { backgroundColor: d },
                  onClick: () => onColorChange(d),
                  title: d,
                },
                d
              )
            ),
            a("input", {
              type: "color",
              value: color,
              onChange: (d) => onColorChange(d.currentTarget.value),
              className: c.colorPicker,
              title: "Свой цвет",
            }),
          ],
        }),
        a("div", { className: c.spacer }),
        a("div", {
          className: c.toolGroup,
          children: [
            a("button", {
              className: c.toolButton,
              onClick: onZoomOut,
              disabled: zoom <= W,
              title: "Уменьшить",
              children: a(jt, {}),
            }),
            a("button", {
              className: c.zoomLabel,
              onClick: onZoomReset,
              title: "Сбросить зум",
              children: [Math.round(zoom * 100), "%"],
            }),
            a("button", {
              className: c.toolButton,
              onClick: onZoomIn,
              disabled: zoom >= V,
              title: "Увеличить",
              children: a(_t, {}),
            }),
          ],
        }),
        a("div", { className: c.separator }),
        a("div", {
          className: c.toolGroup,
          children: [
            a("button", {
              className: c.toolButton,
              onClick: onUndo,
              disabled: !canUndo,
              title: "Отменить (Ctrl+Z)",
              children: a(Wt, {}),
            }),
            a("button", {
              className: c.toolButton,
              onClick: onRedo,
              disabled: !canRedo,
              title: "Повторить (Ctrl+Y)",
              children: a(Ot, {}),
            }),
            a("button", {
              className: c.toolButton,
              onClick: onClear,
              title: "Очистить",
              children: a(onToolChange, { size: 20 }),
            }),
          ],
        }),
      ],
    })
);

const Bn = {
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
  const [L, E] = d(false);
  const [w, F] = d(false);

  const $ = q_1(() => {
    F(true);
    return false;
  }, []);

  const _ = q_1(() => {
    F(false);
    onClose();
  }, [onClose]);

  const O = q_1(() => {
    F(false);
  }, []);

  const l = pinchRef(null);
  const i = pinchRef(null);
  const v = pinchRef(null);
  const y = pinchRef(null);
  const d = pinchRef(1);
  const [I, b] = d("brush");
  const [x, N] = d("#000000");
  const [M, T] = d(4);
  const C = pinchRef(false);
  const R = pinchRef(null);
  const { width, height } = Bn[K];

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
  } = Ut(i, width, height);

  const ot = q_1(() => {
    const l_current = l.current;
    const v_current = v.current;
    if (!l_current || !v_current) {
      return;
    }
    const e = l_current.getContext("2d");
    if (!e) {
      return;
    }
    const d_current = d.current;
    const m = l_current.width / d_current;
    const a = l_current.height / d_current;
    const X_current = zoomRef.current;
    const Z_current = panOffsetRef.current;
    e.save();
    e.setTransform(d_current, 0, 0, d_current, 0, 0);
    e.clearRect(0, 0, m, a);
    e.translate(Z_current.x, Z_current.y);
    e.scale(X_current, X_current);
    e.shadowColor = "rgba(0, 0, 0, 0.15)";
    e.shadowBlur = 20 / X_current;
    e.shadowOffsetX = 0;
    e.shadowOffsetY = 4 / X_current;
    e.fillStyle = "#FFFFFF";
    e.fillRect(0, 0, width, height);
    e.shadowColor = "transparent";
    e.shadowBlur = 0;
    e.shadowOffsetY = 0;
    e.imageSmoothingEnabled = X_current < 2;
    e.drawImage(v_current, 0, 0, width, height);
    e.imageSmoothingEnabled = true;
    const R_current = R.current;
    if (R_current) {
      e.strokeStyle = R_current.color;
      e.lineWidth = R_current.lineWidth;
      e.lineCap = "round";
      e.lineJoin = "round";
      e.beginPath();

      if (R_current.tool === "line") {
        e.moveTo(R_current.start.x, R_current.start.y);
        e.lineTo(R_current.current.x, R_current.current.y);
      } else if (R_current.tool === "rectangle") {
        e.rect(
          R_current.start.x,
          R_current.start.y,
          R_current.current.x - R_current.start.x,
          R_current.current.y - R_current.start.y
        );
      } else if (R_current.tool === "circle") {
        const J = Math.hypot(
          R_current.current.x - R_current.start.x,
          R_current.current.y - R_current.start.y
        );
        e.arc(R_current.start.x, R_current.start.y, J, 0, Math.PI * 2);
      }

      e.stroke();
    }
    e.restore();
  }, [width, height]);

  const U = pinchRef(ot);
  U.current = ot;

  const { saveToHistory, undo, redo, canUndo, canRedo, initHistory } = Gt(
    v,
    y,
    U
  );

  const vt = fitAndCenter;

  y(() => {
    if (!isOpen || !l.current || !i.current) {
      return;
    }
    const l_current = l.current;
    const i_current = i.current;
    const e = window.devicePixelRatio || 1;
    d.current = e;
    const h = i_current.getBoundingClientRect();
    l_current.width = h.width * e;
    l_current.height = h.height * e;
    const m = document.createElement("canvas");
    m.width = width * e;
    m.height = height * e;
    const a = m.getContext("2d", { willReadFrequently: true });
    if (!a) {
      return;
    }
    a.scale(e, e);
    a.fillStyle = "#FFFFFF";
    a.fillRect(0, 0, width, height);
    v.current = m;
    y.current = a;
    initHistory(a, m);
    let u = true;
    const g = new ResizeObserver((J) => {
      for (const at of J) {
        const { width: width_1, height: height_1 } = at.contentRect;
        if (!(width_1 === 0 || height_1 === 0)) {
          l_current.width = width_1 * d.current;
          l_current.height = height_1 * d.current;

          if (u) {
            const lt = (width_1 - 64) / width;
            const ft = (height_1 - 64) / height;
            const tt = Math.max(W, Math.min(lt, ft));
            updateTransform(tt, {
              x: (width_1 - width * tt) / 2,
              y: (height_1 - height * tt) / 2,
            });
          }

          U.current();
        }
      }
    });
    g.observe(i_current);
    const s = setTimeout(() => {
      u = false;
    }, 500);
    return () => {
      clearTimeout(s);
      g.disconnect();
      v.current = null;
      y.current = null;
    };
  }, [isOpen, width, height]);

  y(() => {
    ot();
  }, [zoom, panOffset, ot]);

  const st = q_1((t) => {
    const l_current = l.current;
    if (!l_current) {
      return { x: 0, y: 0 };
    }
    const e = l_current.getBoundingClientRect();
    let h;
    let m;

    if ("touches" in t) {
      h = t.touches[0].clientX;
      m = t.touches[0].clientY;
    } else {
      h = t.clientX;
      m = t.clientY;
    }

    return {
      x: (h - e.left - panOffsetRef.current.x) / zoomRef.current,
      y: (m - e.top - panOffsetRef.current.y) / zoomRef.current,
    };
  }, []);

  const yt = q_1(
    (t) => {
      if (
        ("button" in t && t.button !== 0) ||
        ("touches" in t && t.touches.length > 1)
      ) {
        return;
      }
      t.preventDefault();
      const y_current = y.current;
      if (!y_current) {
        return;
      }
      const e = st(t);
      C.current = true;

      if (I === "brush" || I === "eraser") {
        y_current.beginPath();
        y_current.moveTo(e.x, e.y);
        y_current.lineCap = "round";
        y_current.lineJoin = "round";
        y_current.lineWidth = M;
        y_current.strokeStyle = I === "eraser" ? "#FFFFFF" : x;
      } else {
        R.current = {
          start: e,
          current: e,
          tool: I,
          color: x,
          lineWidth: M,
        };
      }
    },
    [I, x, M, st]
  );

  const dt = q_1(
    (t) => {
      if (!C.current || ("touches" in t && t.touches.length > 1)) {
        return;
      }
      t.preventDefault();
      const o = st(t);
      if (I === "brush" || I === "eraser") {
        const y_current = y.current;
        if (!y_current) {
          return;
        }
        y_current.lineTo(o.x, o.y);
        y_current.stroke();
        U.current();
      } else {
        if (R.current) {
          R.current = { ...R.current, current: o };
          U.current();
        }
      }
    },
    [I, st]
  );

  const it = q_1(() => {
    if (!C.current) {
      return;
    }
    C.current = false;
    const R_current = R.current;
    if (R_current) {
      const y_current = y.current;
      if (y_current) {
        y_current.strokeStyle = R_current.color;
        y_current.lineWidth = R_current.lineWidth;
        y_current.lineCap = "round";
        y_current.lineJoin = "round";
        y_current.beginPath();

        if (R_current.tool === "line") {
          y_current.moveTo(R_current.start.x, R_current.start.y);
          y_current.lineTo(R_current.current.x, R_current.current.y);
        } else if (R_current.tool === "rectangle") {
          y_current.rect(
            R_current.start.x,
            R_current.start.y,
            R_current.current.x - R_current.start.x,
            R_current.current.y - R_current.start.y
          );
        } else if (R_current.tool === "circle") {
          const e = Math.hypot(
            R_current.current.x - R_current.start.x,
            R_current.current.y - R_current.start.y
          );
          y_current.arc(
            R_current.start.x,
            R_current.start.y,
            e,
            0,
            Math.PI * 2
          );
        }

        y_current.stroke();
      }
      R.current = null;
    }
    saveToHistory();
    U.current();
  }, [saveToHistory]);

  const gt = pinchRef(dt);
  const wt = pinchRef(it);
  gt.current = dt;
  wt.current = it;
  const Dt = q_1((t) => {
    if (t.button === 1) {
      t.preventDefault();
      isPanningRef.current = true;
      panStartRef.current = { x: t.clientX, y: t.clientY };
    }
  }, []);

  y(() => {
    if (!isOpen) {
      return;
    }

    const t = (e) => {
      if (isPanningRef.current) {
        const h = e.clientX - panStartRef.current.x;
        const m = e.clientY - panStartRef.current.y;
        panStartRef.current = { x: e.clientX, y: e.clientY };
        const Z_current = panOffsetRef.current;
        updateTransform(zoomRef.current, {
          x: Z_current.x + h,
          y: Z_current.y + m,
        });
        return;
      }
      gt.current(e);
    };

    const o = () => {
      if (isPanningRef.current) {
        isPanningRef.current = false;
        return;
      }
      wt.current();
    };

    window.addEventListener("mousemove", t);
    window.addEventListener("mouseup", o);

    return () => {
      window.removeEventListener("mousemove", t);
      window.removeEventListener("mouseup", o);
    };
  }, [isOpen, updateTransform]);

  y(() => {
    if (!isOpen) {
      return;
    }
    const t = (o) => {
      if ((o.ctrlKey || o.metaKey) && o.key === "z") {
        o.preventDefault();
        o.shiftKey ? redo() : undo();
      }

      if ((o.ctrlKey || o.metaKey) && o.key === "y") {
        o.preventDefault();
        redo();
      }

      if ((o.ctrlKey || o.metaKey) && (o.key === "=" || o.key === "+")) {
        o.preventDefault();
        const i_current = i.current;
        if (!i_current) {
          return;
        }
        const h = i_current.getBoundingClientRect();
        const m = h.width / 2;
        const a = h.height / 2;
        const X_current = zoomRef.current;
        const g = Math.min(V, X_current + Q);
        updateTransform(
          g,
          zoomToPoint(X_current, g, panOffsetRef.current, m, a)
        );
      }

      if ((o.ctrlKey || o.metaKey) && o.key === "-") {
        o.preventDefault();
        const i_current = i.current;
        if (!i_current) {
          return;
        }
        const h = i_current.getBoundingClientRect();
        const m = h.width / 2;
        const a = h.height / 2;
        const X_current = zoomRef.current;
        const g = Math.max(W, X_current - Q);
        updateTransform(
          g,
          zoomToPoint(X_current, g, panOffsetRef.current, m, a)
        );
      }

      if ((o.ctrlKey || o.metaKey) && o.key === "0") {
        o.preventDefault();
        vt();
      }
    };
    window.addEventListener("keydown", t);

    return () => window.removeEventListener("keydown", t);
  }, [isOpen, undo, redo, updateTransform, zoomToPoint, vt]);

  y(() => {
    if (!isOpen) {
      return;
    }
    const i_current = i.current;
    if (!i_current) {
      return;
    }
    const o = (e) => {
      e.preventDefault();
      const h = i_current.getBoundingClientRect();
      const m = e.clientX - h.left;
      const a = e.clientY - h.top;
      if (e.ctrlKey || e.metaKey) {
        const X_current = zoomRef.current;
        const g = e.deltaY > 0 ? -Q : Q;
        const s = Math.min(V, Math.max(W, X_current + g));
        if (s === X_current) {
          return;
        }
        updateTransform(
          s,
          zoomToPoint(X_current, s, panOffsetRef.current, m, a)
        );
      } else {
        updateTransform(zoomRef.current, {
          x: panOffsetRef.current.x - e.deltaX,
          y: panOffsetRef.current.y - e.deltaY,
        });
      }
    };
    i_current.addEventListener("wheel", o, { passive: false });

    return () => i_current.removeEventListener("wheel", o);
  }, [isOpen, updateTransform, zoomToPoint]);

  y(() => {
    if (!isOpen) {
      return;
    }
    const i_current = i.current;
    if (!i_current) {
      return;
    }

    const o = (a, u) =>
      Math.hypot(u.clientX - a.clientX, u.clientY - a.clientY);

    const e = (a) => {
      if (a.touches.length === 2) {
        a.preventDefault();

        if (C.current) {
          C.current = false;
          R.current = null;
        }

        const u = i_current.getBoundingClientRect();
        const g = a.touches[0];
        const s = a.touches[1];
        pinchRef.current = {
          dist: o(g, s),
          midX: (g.clientX + s.clientX) / 2 - u.left,
          midY: (g.clientY + s.clientY) / 2 - u.top,
        };
      }
    };

    const h = (a) => {
      if (a.touches.length === 2 && pinchRef.current) {
        a.preventDefault();
        const u = i_current.getBoundingClientRect();
        const g = a.touches[0];
        const s = a.touches[1];
        const J = o(g, s);
        const at = (g.clientX + s.clientX) / 2 - u.left;
        const G = (g.clientY + s.clientY) / 2 - u.top;
        const H = J / pinchRef.current.dist;
        const X_current = zoomRef.current;
        const lt = Math.min(V, Math.max(W, X_current * H));
        const ft = at - pinchRef.current.midX;
        const tt = G - pinchRef.current.midY;
        const pt = zoomToPoint(
          X_current,
          lt,
          panOffsetRef.current,
          pinchRef.current.midX,
          pinchRef.current.midY
        );
        updateTransform(lt, { x: pt.x + ft, y: pt.y + tt });
        pinchRef.current = { dist: J, midX: at, midY: G };
      }
    };

    const m = (a) => {
      if (a.touches.length < 2) {
        pinchRef.current = null;
      }
    };

    i_current.addEventListener("touchstart", e, { passive: false });
    i_current.addEventListener("touchmove", h, { passive: false });
    i_current.addEventListener("touchend", m);
    i_current.addEventListener("touchcancel", m);

    return () => {
      i_current.removeEventListener("touchstart", e);
      i_current.removeEventListener("touchmove", h);
      i_current.removeEventListener("touchend", m);
      i_current.removeEventListener("touchcancel", m);
    };
  }, [isOpen, updateTransform, zoomToPoint]);

  const Tt = q_1(() => {
    const y_current = y.current;

    if (y_current) {
      y_current.fillStyle = "#FFFFFF";
      y_current.fillRect(0, 0, width, height);
      saveToHistory();
      U.current();
    }
  }, [width, height, saveToHistory]);

  const Et = async () => {
    const v_current = v.current;
    if (!v_current || L) {
      return;
    }
    const o = v_current.toDataURL("image/png");
    E(true);
    try {
      await onSave(o);
      onClose();
    } catch (e) {
      console.error("Failed to save drawing:", e);
    } finally {
      E(false);
    }
  };

  return isOpen
    ? a(m, {
        children: [
          a(M, {
            onClose: onClose,
            onBeforeClose: $,
            showHeader: false,
            contentClassName: c.modalContent,
            size: "wide",
            children: a("div", {
              className: c.container,
              children: [
                a(bn, {
                  tool: I,
                  color: x,
                  brushSize: M,
                  zoom: zoom,
                  canUndo: canUndo,
                  canRedo: canRedo,
                  onToolChange: b,
                  onColorChange: N,
                  onBrushSizeChange: T,
                  onZoomIn: zoomIn,
                  onZoomOut: zoomOut,
                  onZoomReset: zoomReset,
                  onUndo: undo,
                  onRedo: redo,
                  onClear: Tt,
                }),
                a("div", {
                  ref: i,
                  className: c.canvasContainer,
                  onMouseDown: Dt,
                  children: a("canvas", {
                    ref: l,
                    className: c.viewport,
                    onMouseDown: yt,
                    onTouchStart: yt,
                    onTouchMove: dt,
                    onTouchEnd: it,
                    onTouchCancel: it,
                  }),
                }),
                a("div", {
                  className: c.actions,
                  children: [
                    a("button", {
                      className: c.cancelButton,
                      onClick: () => $(),
                      disabled: L,
                      children: "Отмена",
                    }),
                    a("button", {
                      className: c.saveButton,
                      onClick: Et,
                      disabled: L,
                      children: L
                        ? a(m, { children: [a(ao, {}), "Загрузка..."] })
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
          w &&
            $(
              a("div", {
                className: c.confirmOverlay,
                onClick: O,
                children: a("div", {
                  className: c.confirmDialog,
                  onClick: (t) => t.stopPropagation(),
                  children: [
                    a("p", {
                      className: c.confirmText,
                      children:
                        "Вы действительно хотите закрыть рисовалку? Ваши изменения будут не сохранены.",
                    }),
                    a("div", {
                      className: c.confirmActions,
                      children: [
                        a("button", {
                          className: c.confirmCancel,
                          onClick: O,
                          children: "Отмена",
                        }),
                        a("button", {
                          className: c.confirmClose,
                          onClick: _,
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
