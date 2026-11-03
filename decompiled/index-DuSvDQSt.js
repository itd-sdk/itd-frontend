import { d, v as v_1, u, B, M } from "./index-GOT6tyDH.js";
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
    const e = new t.Error().stack;

    if (e) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[e] = "aa38dafe-6f06-47a1-801a-5b71f8a48561";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-aa38dafe-6f06-47a1-801a-5b71f8a48561";
    }
  } catch {}
})();
const p = "jsZD";
const m = "DRAG";
const v = "h6UT";
const w = "MsHZ";
const n = { content: p, title: m, subtitle: v, actions: w };

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

  return v_1(
    onConfirm(M, {
      onClose: onClose,
      showHeader: false,
      children: onConfirm("div", {
        className: n.content,
        children: [
          onConfirm("h2", { className: n.title, children: title }),
          onConfirm("p", { className: n.subtitle, children: message }),
          onConfirm("div", {
            className: n.actions,
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
