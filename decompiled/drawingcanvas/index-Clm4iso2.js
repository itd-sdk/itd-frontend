import {
  d,
  A,
  q,
  al,
  ao as y_1,
  am,
  an,
  a,
  a9,
  M,
  ao,
  ap,
  k,
  aj,
  aq,
} from "./index-BNG2MjJY.js";
const gt = 50;
function zt(m, w, B) {
  const [O, N] = d([]);
  const [R, Y] = d(-1);
  const D = A(-1);
  D.current = R;

  const A = q(() => {
    const w_current = w.current;
    const m_current = m.current;
    if (!w_current || !m_current) {
      return;
    }
    const f = w_current.getImageData(0, 0, m_current.width, m_current.height);

    N((d) => {
      const T = d.slice(0, D.current + 1);
      T.push(f);

      if (T.length > gt) {
        T.shift();
      }

      return T;
    });

    Y((d) => Math.min(d + 1, gt - 1));
  }, [m, w]);

  const U = q(() => {
    N((u) => {
      const D_current = D.current;
      if (D_current <= 0) {
        return u;
      }
      const w_current = w.current;
      if (!w_current) {
        return u;
      }
      const d = u[D_current - 1];

      if (d) {
        w_current.putImageData(d, 0, 0);
        D.current = D_current - 1;
        Y(D_current - 1);
        B.current?.();
      }

      return u;
    });
  }, [w, B]);

  const ct = q(() => {
    N((u) => {
      const D_current = D.current;
      if (D_current >= u.length - 1) {
        return u;
      }
      const w_current = w.current;
      if (!w_current) {
        return u;
      }
      const d = u[D_current + 1];

      if (d) {
        w_current.putImageData(d, 0, 0);
        D.current = D_current + 1;
        Y(D_current + 1);
        B.current?.();
      }

      return u;
    });
  }, [w, B]);

  const _ = q((u, s) => {
    const f = u.getImageData(0, 0, s.width, s.height);
    N([f]);
    Y(0);
    D.current = 0;
  }, []);

  return {
    historyIndex: R,
    canUndo: R > 0,
    canRedo: R < O.length - 1,
    saveToHistory: A,
    undo: U,
    redo: ct,
    initHistory: _,
  };
}
const Kt = {
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
  const [R, Y] = d(false);
  const [D, A] = d(false);

  const U = q(() => {
    A(true);
    return false;
  }, []);

  const ct = q(() => {
    A(false);
    onClose();
  }, [onClose]);

  const _ = q(() => {
    A(false);
  }, []);

  const u = A(null);
  const s = A(null);
  const f = A(null);
  const d = A(null);
  const T = A(1);
  const [b, xt] = d("brush");
  const [q, pt] = d("#000000");
  const [H, Ct] = d(4);
  const Z = A(false);
  const S = A(null);
  const { width, height } = Kt[O];

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
  } = al(s, width, height);

  const V = q(() => {
    const u_current = u.current;
    const f_current = f.current;
    if (!u_current || !f_current) {
      return;
    }
    const e = u_current.getContext("2d");
    if (!e) {
      return;
    }
    const T_current = T.current;
    const a = u_current.width / T_current;
    const o = u_current.height / T_current;
    const E_current = zoomRef.current;
    const M_current = panOffsetRef.current;
    e.save();
    e.setTransform(T_current, 0, 0, T_current, 0, 0);
    e.clearRect(0, 0, a, o);
    e.translate(M_current.x, M_current.y);
    e.scale(E_current, E_current);
    e.shadowColor = "rgba(0, 0, 0, 0.15)";
    e.shadowBlur = 20 / E_current;
    e.shadowOffsetX = 0;
    e.shadowOffsetY = 4 / E_current;
    e.fillStyle = "#FFFFFF";
    e.fillRect(0, 0, width, height);
    e.shadowColor = "transparent";
    e.shadowBlur = 0;
    e.shadowOffsetY = 0;
    e.imageSmoothingEnabled = E_current < 2;
    e.drawImage(f_current, 0, 0, width, height);
    e.imageSmoothingEnabled = true;
    const S_current = S.current;
    if (S_current) {
      e.strokeStyle = S_current.color;
      e.lineWidth = S_current.lineWidth;
      e.lineCap = "round";
      e.lineJoin = "round";
      e.beginPath();

      if (S_current.tool === "line") {
        e.moveTo(S_current.start.x, S_current.start.y);
        e.lineTo(S_current.current.x, S_current.current.y);
      } else if (S_current.tool === "rectangle") {
        e.rect(
          S_current.start.x,
          S_current.start.y,
          S_current.current.x - S_current.start.x,
          S_current.current.y - S_current.start.y
        );
      } else if (S_current.tool === "circle") {
        const z = Math.hypot(
          S_current.current.x - S_current.start.x,
          S_current.current.y - S_current.start.y
        );
        e.arc(S_current.start.x, S_current.start.y, z, 0, Math.PI * 2);
      }

      e.stroke();
    }
    e.restore();
  }, [width, height]);

  const k = A(V);
  k.current = V;

  const { saveToHistory, undo, redo, canUndo, canRedo, initHistory } = zt(
    f,
    d,
    k
  );

  const ht = fitAndCenter;

  y_1(() => {
    if (!isOpen || !u.current || !s.current) {
      return;
    }
    const u_current = u.current;
    const s_current = s.current;
    const e = window.devicePixelRatio || 1;
    T.current = e;
    const i = s_current.getBoundingClientRect();
    u_current.width = i.width * e;
    u_current.height = i.height * e;
    const a = document.createElement("canvas");
    a.width = width * e;
    a.height = height * e;
    const o = a.getContext("2d", { willReadFrequently: true });
    if (!o) {
      return;
    }
    o.scale(e, e);
    o.fillStyle = "#FFFFFF";
    o.fillRect(0, 0, width, height);
    f.current = a;
    d.current = o;
    initHistory(o, a);
    let c = true;
    const l = new ResizeObserver((z) => {
      for (const et of z) {
        const { width: width_1, height: height_1 } = et.contentRect;
        if (!(width_1 === 0 || height_1 === 0)) {
          u_current.width = width_1 * T.current;
          u_current.height = height_1 * T.current;

          if (c) {
            const nt = (width_1 - 64) / width;
            const ut = (height_1 - 64) / height;
            const W = Math.max(am, Math.min(nt, ut));
            updateTransform(W, {
              x: (width_1 - width * W) / 2,
              y: (height_1 - height * W) / 2,
            });
          }

          k.current();
        }
      }
    });
    l.observe(s_current);
    const r = setTimeout(() => {
      c = false;
    }, 500);
    return () => {
      clearTimeout(r);
      l.disconnect();
      f.current = null;
      d.current = null;
    };
  }, [isOpen, width, height]);

  y_1(() => {
    V();
  }, [zoom, panOffset, V]);

  const Q = q((t) => {
    const u_current = u.current;
    if (!u_current) {
      return { x: 0, y: 0 };
    }
    const e = u_current.getBoundingClientRect();
    let i;
    let a;

    if ("touches" in t) {
      i = t.touches[0].clientX;
      a = t.touches[0].clientY;
    } else {
      i = t.clientX;
      a = t.clientY;
    }

    return {
      x: (i - e.left - panOffsetRef.current.x) / zoomRef.current,
      y: (a - e.top - panOffsetRef.current.y) / zoomRef.current,
    };
  }, []);

  const ft = q(
    (t) => {
      if (
        ("button" in t && t.button !== 0) ||
        ("touches" in t && t.touches.length > 1)
      ) {
        return;
      }
      t.preventDefault();
      const d_current = d.current;
      if (!d_current) {
        return;
      }
      const e = Q(t);
      Z.current = true;

      if (b === "brush" || b === "eraser") {
        d_current.beginPath();
        d_current.moveTo(e.x, e.y);
        d_current.lineCap = "round";
        d_current.lineJoin = "round";
        d_current.lineWidth = H;
        d_current.strokeStyle = b === "eraser" ? "#FFFFFF" : q;
      } else {
        S.current = {
          start: e,
          current: e,
          tool: b,
          color: q,
          lineWidth: H,
        };
      }
    },
    [b, q, H, Q]
  );

  const it = q(
    (t) => {
      if (!Z.current || ("touches" in t && t.touches.length > 1)) {
        return;
      }
      t.preventDefault();
      const n = Q(t);
      if (b === "brush" || b === "eraser") {
        const d_current = d.current;
        if (!d_current) {
          return;
        }
        d_current.lineTo(n.x, n.y);
        d_current.stroke();
        k.current();
      } else {
        if (S.current) {
          S.current = { ...S.current, current: n };
          k.current();
        }
      }
    },
    [b, Q]
  );

  const tt = q(() => {
    if (!Z.current) {
      return;
    }
    Z.current = false;
    const S_current = S.current;
    if (S_current) {
      const d_current = d.current;
      if (d_current) {
        d_current.strokeStyle = S_current.color;
        d_current.lineWidth = S_current.lineWidth;
        d_current.lineCap = "round";
        d_current.lineJoin = "round";
        d_current.beginPath();

        if (S_current.tool === "line") {
          d_current.moveTo(S_current.start.x, S_current.start.y);
          d_current.lineTo(S_current.current.x, S_current.current.y);
        } else if (S_current.tool === "rectangle") {
          d_current.rect(
            S_current.start.x,
            S_current.start.y,
            S_current.current.x - S_current.start.x,
            S_current.current.y - S_current.start.y
          );
        } else if (S_current.tool === "circle") {
          const e = Math.hypot(
            S_current.current.x - S_current.start.x,
            S_current.current.y - S_current.start.y
          );
          d_current.arc(
            S_current.start.x,
            S_current.start.y,
            e,
            0,
            Math.PI * 2
          );
        }

        d_current.stroke();
      }
      S.current = null;
    }
    saveToHistory();
    k.current();
  }, [saveToHistory]);

  const mt = A(it);
  const vt = A(tt);
  mt.current = it;
  vt.current = tt;
  const Yt = q((t) => {
    if (t.button === 1) {
      t.preventDefault();
      isPanningRef.current = true;
      panStartRef.current = { x: t.clientX, y: t.clientY };
    }
  }, []);

  y_1(() => {
    if (!isOpen) {
      return;
    }

    const t = (e) => {
      if (isPanningRef.current) {
        const i = e.clientX - panStartRef.current.x;
        const a = e.clientY - panStartRef.current.y;
        panStartRef.current = { x: e.clientX, y: e.clientY };
        const M_current = panOffsetRef.current;
        updateTransform(zoomRef.current, {
          x: M_current.x + i,
          y: M_current.y + a,
        });
        return;
      }
      mt.current(e);
    };

    const n = () => {
      if (isPanningRef.current) {
        isPanningRef.current = false;
        return;
      }
      vt.current();
    };

    window.addEventListener("mousemove", t);
    window.addEventListener("mouseup", n);

    return () => {
      window.removeEventListener("mousemove", t);
      window.removeEventListener("mouseup", n);
    };
  }, [isOpen, updateTransform]);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    const t = (n) => {
      if ((n.ctrlKey || n.metaKey) && n.key === "z") {
        n.preventDefault();
        n.shiftKey ? redo() : undo();
      }

      if ((n.ctrlKey || n.metaKey) && n.key === "y") {
        n.preventDefault();
        redo();
      }

      if ((n.ctrlKey || n.metaKey) && (n.key === "=" || n.key === "+")) {
        n.preventDefault();
        const s_current = s.current;
        if (!s_current) {
          return;
        }
        const i = s_current.getBoundingClientRect();
        const a = i.width / 2;
        const o = i.height / 2;
        const E_current = zoomRef.current;
        const l = Math.min(aq, E_current + an);
        updateTransform(
          l,
          zoomToPoint(E_current, l, panOffsetRef.current, a, o)
        );
      }

      if ((n.ctrlKey || n.metaKey) && n.key === "-") {
        n.preventDefault();
        const s_current = s.current;
        if (!s_current) {
          return;
        }
        const i = s_current.getBoundingClientRect();
        const a = i.width / 2;
        const o = i.height / 2;
        const E_current = zoomRef.current;
        const l = Math.max(am, E_current - an);
        updateTransform(
          l,
          zoomToPoint(E_current, l, panOffsetRef.current, a, o)
        );
      }

      if ((n.ctrlKey || n.metaKey) && n.key === "0") {
        n.preventDefault();
        ht();
      }
    };
    window.addEventListener("keydown", t);

    return () => window.removeEventListener("keydown", t);
  }, [isOpen, undo, redo, updateTransform, zoomToPoint, ht]);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    const s_current = s.current;
    if (!s_current) {
      return;
    }
    const n = (e) => {
      e.preventDefault();
      const i = s_current.getBoundingClientRect();
      const a = e.clientX - i.left;
      const o = e.clientY - i.top;
      if (e.ctrlKey || e.metaKey) {
        const E_current = zoomRef.current;
        const l = e.deltaY > 0 ? -an : an;
        const r = Math.min(aq, Math.max(am, E_current + l));
        if (r === E_current) {
          return;
        }
        updateTransform(
          r,
          zoomToPoint(E_current, r, panOffsetRef.current, a, o)
        );
      } else {
        updateTransform(zoomRef.current, {
          x: panOffsetRef.current.x - e.deltaX,
          y: panOffsetRef.current.y - e.deltaY,
        });
      }
    };
    s_current.addEventListener("wheel", n, { passive: false });

    return () => s_current.removeEventListener("wheel", n);
  }, [isOpen, updateTransform, zoomToPoint]);

  y_1(() => {
    if (!isOpen) {
      return;
    }
    const s_current = s.current;
    if (!s_current) {
      return;
    }

    const n = (o, c) =>
      Math.hypot(c.clientX - o.clientX, c.clientY - o.clientY);

    const e = (o) => {
      if (o.touches.length === 2) {
        o.preventDefault();

        if (Z.current) {
          Z.current = false;
          S.current = null;
        }

        const c = s_current.getBoundingClientRect();
        const l = o.touches[0];
        const r = o.touches[1];
        pinchRef.current = {
          dist: n(l, r),
          midX: (l.clientX + r.clientX) / 2 - c.left,
          midY: (l.clientY + r.clientY) / 2 - c.top,
        };
      }
    };

    const i = (o) => {
      if (o.touches.length === 2 && pinchRef.current) {
        o.preventDefault();
        const c = s_current.getBoundingClientRect();
        const l = o.touches[0];
        const r = o.touches[1];
        const z = n(l, r);
        const et = (l.clientX + r.clientX) / 2 - c.left;
        const L = (l.clientY + r.clientY) / 2 - c.top;
        const K = z / pinchRef.current.dist;
        const E_current = zoomRef.current;
        const nt = Math.min(aq, Math.max(am, E_current * K));
        const ut = et - pinchRef.current.midX;
        const W = L - pinchRef.current.midY;
        const yt = zoomToPoint(
          E_current,
          nt,
          panOffsetRef.current,
          pinchRef.current.midX,
          pinchRef.current.midY
        );
        updateTransform(nt, { x: yt.x + ut, y: yt.y + W });
        pinchRef.current = { dist: z, midX: et, midY: L };
      }
    };

    const a = (o) => {
      if (o.touches.length < 2) {
        pinchRef.current = null;
      }
    };

    s_current.addEventListener("touchstart", e, { passive: false });
    s_current.addEventListener("touchmove", i, { passive: false });
    s_current.addEventListener("touchend", a);
    s_current.addEventListener("touchcancel", a);

    return () => {
      s_current.removeEventListener("touchstart", e);
      s_current.removeEventListener("touchmove", i);
      s_current.removeEventListener("touchend", a);
      s_current.removeEventListener("touchcancel", a);
    };
  }, [isOpen, updateTransform, zoomToPoint]);

  const Xt = q(() => {
    const d_current = d.current;

    if (d_current) {
      d_current.fillStyle = "#FFFFFF";
      d_current.fillRect(0, 0, width, height);
      saveToHistory();
      k.current();
    }
  }, [width, height, saveToHistory]);

  const kt = async () => {
    const f_current = f.current;
    if (!f_current || R) {
      return;
    }
    const n = f_current.toDataURL("image/png");
    Y(true);
    try {
      await onSave(n);
      onClose();
    } catch (e) {
      console.error("Failed to save drawing:", e);
    } finally {
      Y(false);
    }
  };

  return isOpen
    ? a(k, {
        children: [
          a(panOffsetRef, {
            onClose: onClose,
            onBeforeClose: U,
            showHeader: false,
            contentClassName: ao.modalContent,
            size: "wide",
            children: a("div", {
              className: ao.container,
              children: [
                a(ap, {
                  tool: b,
                  color: q,
                  brushSize: H,
                  zoom: zoom,
                  canUndo: canUndo,
                  canRedo: canRedo,
                  onToolChange: xt,
                  onColorChange: pt,
                  onBrushSizeChange: Ct,
                  onZoomIn: zoomIn,
                  onZoomOut: zoomOut,
                  onZoomReset: zoomReset,
                  onUndo: undo,
                  onRedo: redo,
                  onClear: Xt,
                }),
                a("div", {
                  ref: s,
                  className: ao.canvasContainer,
                  onMouseDown: Yt,
                  children: a("canvas", {
                    ref: u,
                    className: ao.viewport,
                    onMouseDown: ft,
                    onTouchStart: ft,
                    onTouchMove: it,
                    onTouchEnd: tt,
                    onTouchCancel: tt,
                  }),
                }),
                a("div", {
                  className: ao.actions,
                  children: [
                    a("button", {
                      className: ao.cancelButton,
                      onClick: () => U(),
                      disabled: R,
                      children: "Отмена",
                    }),
                    a("button", {
                      className: ao.saveButton,
                      onClick: kt,
                      disabled: R,
                      children: R
                        ? a(k, { children: [a(aj, {}), "Загрузка..."] })
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
          D &&
            a9(
              a("div", {
                className: ao.confirmOverlay,
                onClick: _,
                children: a("div", {
                  className: ao.confirmDialog,
                  onClick: (t) => t.stopPropagation(),
                  children: [
                    a("p", {
                      className: ao.confirmText,
                      children:
                        "Вы действительно хотите закрыть рисовалку? Ваши изменения будут не сохранены.",
                    }),
                    a("div", {
                      className: ao.confirmActions,
                      children: [
                        a("button", {
                          className: ao.confirmCancel,
                          onClick: _,
                          children: "Отмена",
                        }),
                        a("button", {
                          className: ao.confirmClose,
                          onClick: ct,
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
