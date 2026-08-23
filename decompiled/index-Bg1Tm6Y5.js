import { d, u, B, M } from "./index-pEgBAsWz.js";
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
      t._sentryDebugIds[n] = "8508602c-fdba-4c9e-8c7f-e19dc49b2070";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-8508602c-fdba-4c9e-8c7f-e19dc49b2070";
    }
  } catch {}
})();
const g = "DW1Z";
const p = "d7Ib";
const m = "M9Cc";
const w = "sEab";
const a = { content: g, title: p, subtitle: m, actions: w };

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

  const u = async () => {
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

  return u(M, {
    onClose: onClose,
    showHeader: false,
    children: u("div", {
      className: a.content,
      children: [
        u("h2", { className: a.title, children: title }),
        u("p", { className: a.subtitle, children: message }),
        u("div", {
          className: a.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: (c) => {
                c.stopPropagation();
                onClose();
              },
              children: cancelText,
            }),
            u(B, {
              variant: danger ? "danger" : "primary",
              onClick: (c) => {
                c.stopPropagation();
                u();
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

export { C as C };
