import { d, $, u, B, M } from "./index-BuVp7kGl.js";
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
      t._sentryDebugIds[e] = "43af6dcb-88db-4ac8-adf1-7b949b64bc39";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-43af6dcb-88db-4ac8-adf1-7b949b64bc39";
    }
  } catch {}
})();
const p = "VbDr";
const m = "HAdv";
const v = "TPVX";
const w = "MrPs";
const a = { content: p, title: m, subtitle: v, actions: w };

export function C({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [d, c] = d(false);

  const u = async () => {
    if (!d) {
      c(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        c(false);
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
                onClick: (i) => {
                  i.stopPropagation();
                  onClose();
                },
                children: cancelText,
              }),
              u(B, {
                variant: danger ? "danger" : "primary",
                onClick: (i) => {
                  i.stopPropagation();
                  u();
                },
                disabled: d,
                loading: d,
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
