import { d, $, u, B, M } from "./index-DK2L49XD.js";
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
      t._sentryDebugIds[n] = "18e4801a-43d2-4d49-850b-5c9b9b2824ed";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-18e4801a-43d2-4d49-850b-5c9b9b2824ed";
    }
  } catch {}
})();
const p = "wvqi";
const m = "OBJt";
const v = "vcJp";
const w = "ZTRi";
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
  const [s, c] = d(false);

  const u = async () => {
    if (!s) {
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
