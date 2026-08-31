import { d, u, B, M } from "./index-ORJLmKGS.js";
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
    t.SENTRY_RELEASE = { id: "1.1.3" };
    const e = new t.Error().stack;

    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "13fffd5f-7460-4dc0-a882-5341735fd2ab";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-13fffd5f-7460-4dc0-a882-5341735fd2ab";
    }
  } catch {}
})();
const g = "lxvs";
const p = "aR7L";
const m = "QV95";
const v = "ka7W";
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
  const [i, r] = d(false);

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
  });
}

export { C as C };
