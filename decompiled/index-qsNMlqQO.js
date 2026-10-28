import { d, v as v_1, u, C as C_1, M } from "./index-AoERIL5v.js";
const b = "BMdi";
const g = "Nzi4";
const v = "f3Qr";
const N = "uTs2";
const a = { content: b, title: g, subtitle: v, actions: N };

export function C({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [s, e] = cancelText(false);

  const f = async () => {
    if (!s) {
      e(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        e(false);
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
              onConfirm(C_1, {
                variant: "secondary",
                onClick: (i) => {
                  i.stopPropagation();
                  onClose();
                },
                children: cancelText,
              }),
              onConfirm(C_1, {
                variant: danger ? "danger" : "primary",
                onClick: (i) => {
                  i.stopPropagation();
                  f();
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
