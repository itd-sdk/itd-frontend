import { B as d_1, u, B, M } from "./index-B9FitUXy.js";
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
      e._sentryDebugIds[n] = "c2f78e79-9059-4fbb-80cb-fe558c431ad5";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-c2f78e79-9059-4fbb-80cb-fe558c431ad5";
    }
  } catch {}
})();
const g = "Ke4C";
const p = "nkr6";
const m = "CwYT";
const w = "Vr4h";
const a = { content: g, title: p, subtitle: m, actions: w };
function C({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [i, r] = d_1(false);

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
export { C };
