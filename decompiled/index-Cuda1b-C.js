import { d, $, u, B, M } from "./index-CsuAWxkQ.js";
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
      t._sentryDebugIds[n] = "734a5440-1d7e-4eba-9b8f-a496aaf70f47";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-734a5440-1d7e-4eba-9b8f-a496aaf70f47";
    }
  } catch {}
})();
const p = "WIKg";
const m = "Ijyz";
const w = "mqle";
const I = "HAtG";
const a = { content: p, title: m, subtitle: w, actions: I };

export function C({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [i, r] = confirmText(false);

  const b = async () => {
    if (!i) {
      r(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        r(false);
      }
    }
  };

  return $(
    onConfirm(M, {
      onClose: onClose,
      showHeader: false,
      children: onConfirm("div", {
        className: a.content,
        children: [
          onConfirm("h2", { className: a.title, children: title }),
          onConfirm("p", { className: a.subtitle, children: message }),
          onConfirm("div", {
            className: a.actions,
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
