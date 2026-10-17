import { d, $, u, B, M } from "./index-DqQficWb.js";
(() => {
  try {
    const t =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "1.1.2" };
    const n = new t.Error().stack;

    if (n) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[n] = "29f0e86e-dc84-45f0-803c-6b708c9d7b09";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-29f0e86e-dc84-45f0-803c-6b708c9d7b09";
    }
  } catch {}
})();
const p = "yf7j";
const m = "Xghc";
const v = "csvB";
const w = "cJ4O";
const s = { content: p, title: m, subtitle: v, actions: w };

export function C({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [i, o] = confirmText(false);

  const b = async () => {
    if (!i) {
      o(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        o(false);
      }
    }
  };

  return $(
    onConfirm(M, {
      onClose: onClose,
      showHeader: false,
      children: onConfirm("div", {
        className: s.content,
        children: [
          onConfirm("h2", { className: s.title, children: title }),
          onConfirm("p", { className: s.subtitle, children: message }),
          onConfirm("div", {
            className: s.actions,
            children: [
              onConfirm(B, {
                variant: "secondary",
                onClick: (c) => {
                  c.stopPropagation();
                  onClose();
                },
                children: cancelText,
              }),
              onConfirm(B, {
                variant: danger ? "danger" : "primary",
                onClick: (c) => {
                  c.stopPropagation();
                  b();
                },
                disabled: i,
                loading: i,
                children: confirmText,
              }),
            ],
          }),
        ],
      }),
    }),
    document.body
  );
}

export { C as C };
