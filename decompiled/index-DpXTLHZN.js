import { d, v as v_1, u, B, M } from "./index-CR_1arh8.js";
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
      t._sentryDebugIds[n] = "9e78f1d4-302a-409a-a095-a36c31272d8f";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-9e78f1d4-302a-409a-a095-a36c31272d8f";
    }
  } catch {}
})();
const g = "Uxte";
const m = "IEpp";
const v = "KmSf";
const w = "colZ";
const a = { content: g, title: m, subtitle: v, actions: w };

export function C({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [i, c] = confirmText(false);

  const y = async () => {
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

  return v_1(
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
                  y();
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
