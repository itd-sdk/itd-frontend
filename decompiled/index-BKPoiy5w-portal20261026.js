import { d, E, u, B, M } from "./index-BQxlThnW-portal20261026.js";
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
      t._sentryDebugIds[n] = "82f73323-0e86-4bbf-99b1-b851eaf3f213";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-82f73323-0e86-4bbf-99b1-b851eaf3f213";
    }
  } catch {}
})();
const p = "i2gj";
const m = "duC3";
const w = "rYTW";
const v = "t8jB";
const a = { content: p, title: m, subtitle: w, actions: v };

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

  const u = async () => {
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

  return E(
    u(M, {
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
    }),
    document.body
  );
}

export { C as C };
