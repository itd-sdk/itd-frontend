import { d, $, u, B, M } from "./index-D4QRo1-7.js";
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
      t._sentryDebugIds[n] = "e3ff80a3-d325-4731-931b-a0d4edb155b1";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-e3ff80a3-d325-4731-931b-a0d4edb155b1";
    }
  } catch {}
})();
const p = "gW6Z";
const m = "MsiE";
const w = "au6K";
const v = "RSin";
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
  const [s, r] = d(false);

  const u = async () => {
    if (!s) {
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
