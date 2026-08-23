import { d, u, B, M } from "./index-DBLtLuBZ.js";
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
    const a = new t.Error().stack;

    if (a) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[a] = "9fa8c312-3a24-4975-9067-a84a232f1736";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-9fa8c312-3a24-4975-9067-a84a232f1736";
    }
  } catch {}
})();
const b = "Y2Cy";
const p = "gtUU";
const m = "zZGP";
const w = "p3AC";
const e = { content: b, title: p, subtitle: m, actions: w };
function C({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [i, d] = d(false);

  const y = async () => {
    if (!i) {
      d(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        d(false);
      }
    }
  };

  return onConfirm(M, {
    onClose: onClose,
    showHeader: false,
    children: onConfirm("div", {
      className: e.content,
      children: [
        onConfirm("h2", { className: e.title, children: title }),
        onConfirm("p", { className: e.subtitle, children: message }),
        onConfirm("div", {
          className: e.actions,
          children: [
            onConfirm(B, {
              variant: "secondary",
              onClick: (o) => {
                o.stopPropagation();
                onClose();
              },
              children: cancelText,
            }),
            onConfirm(B, {
              variant: danger ? "danger" : "primary",
              onClick: (o) => {
                o.stopPropagation();
                y();
              },
              disabled: i,
              loading: i,
              children: confirmText,
            }),
          ],
        }),
      ],
    }),
  });
}
export { C };
