import { d, u, B, M } from "./index-DDTOXJaD.js";
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
      e._sentryDebugIds[n] = "3a1ba036-fc85-4e98-bdcc-b4a72fe420ae";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-3a1ba036-fc85-4e98-bdcc-b4a72fe420ae";
    }
  } catch {}
})();
const g = "FLyw";
const p = "sxRv";
const m = "TvAK";
const v = "XDdX";
const a = { content: g, title: p, subtitle: m, actions: v };

export function C({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [i, d] = d(false);

  const u = async () => {
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
              onClick: (o) => {
                o.stopPropagation();
                onClose();
              },
              children: cancelText,
            }),
            u(B, {
              variant: danger ? "danger" : "primary",
              onClick: (o) => {
                o.stopPropagation();
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
