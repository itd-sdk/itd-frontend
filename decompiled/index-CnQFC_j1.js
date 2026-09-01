import { d, u, B, M } from "./index-gHxZkwFX.js";
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
    e.SENTRY_RELEASE = { id: "1.1.4" };
    const n = new e.Error().stack;

    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "0efc4fef-236c-4d0f-a32d-a45a6eabe7c7";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-0efc4fef-236c-4d0f-a32d-a45a6eabe7c7";
    }
  } catch {}
})();
const g = "yMWv";
const p = "rlHi";
const m = "trjW";
const v = "QJrx";
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
  const [s, r] = d(false);

  const y = async () => {
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

  return onConfirm(M, {
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
              onClick: (d) => {
                d.stopPropagation();
                onClose();
              },
              children: cancelText,
            }),
            onConfirm(B, {
              variant: danger ? "danger" : "primary",
              onClick: (d) => {
                d.stopPropagation();
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
  });
}

export { C as C };
