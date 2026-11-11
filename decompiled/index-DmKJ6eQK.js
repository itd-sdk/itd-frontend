import { d, u, B, M } from "./index-dnACTU3c.js";
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
      t._sentryDebugIds[n] = "f7a4119b-700c-4d1c-93b0-71b121eb751d";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-f7a4119b-700c-4d1c-93b0-71b121eb751d";
    }
  } catch {}
})();
const g = "O3tk";
const p = "F1r7";
const m = "DzBc";
const w = "Gl84";
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
  const [i, c] = d(false);

  const u = async () => {
    if (!i) {
      c(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        c(false);
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
              onClick: (d) => {
                d.stopPropagation();
                onClose();
              },
              children: cancelText,
            }),
            u(B, {
              variant: danger ? "danger" : "primary",
              onClick: (d) => {
                d.stopPropagation();
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
