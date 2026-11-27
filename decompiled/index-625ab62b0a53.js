import { d, aB, u, B, aq } from "./index-4a2211963806.js";
const b = "LmeP";
const g = "Vj9I";
const N = "XMN8";
const v = "sqDy";
const a = { content: b, title: g, subtitle: N, actions: v };

export function ConfirmModal({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [e, i] = cancelText(false);

  const u = async () => {
    if (!e) {
      i(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        i(false);
      }
    }
  };

  return aB(
    u(aq, {
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
                onClick: (s) => {
                  s.stopPropagation();
                  onClose();
                },
                children: cancelText,
              }),
              u(B, {
                variant: danger ? "danger" : "primary",
                onClick: (s) => {
                  s.stopPropagation();
                  u();
                },
                disabled: e,
                loading: e,
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

export { ConfirmModal as ConfirmModal };
