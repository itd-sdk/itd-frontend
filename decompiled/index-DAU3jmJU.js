import { d, $, u, B, M } from "./index-B74jCtUp.js";
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
      t._sentryDebugIds[a] = "a5756af4-904a-4059-a6ea-ec8c8ca66f65";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-a5756af4-904a-4059-a6ea-ec8c8ca66f65";
    }
  } catch {}
})();
const p = "q8mT";
const m = "TNJZ";
const w = "i3w9";
const N = "QUYN";
const n = { content: p, title: m, subtitle: w, actions: N };

export function C({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [s, d] = d(false);

  const y = async () => {
    if (!s) {
      d(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        d(false);
      }
    }
  };

  return $(
    onConfirm(M, {
      onClose: onClose,
      showHeader: false,
      children: onConfirm("div", {
        className: n.content,
        children: [
          onConfirm("h2", { className: n.title, children: title }),
          onConfirm("p", { className: n.subtitle, children: message }),
          onConfirm("div", {
            className: n.actions,
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
                disabled: s,
                loading: s,
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
