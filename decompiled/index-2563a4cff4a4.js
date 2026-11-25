import { u, ap, aq } from "./index-4cbec7521f6a.js";
const m = "G6Jj";
const c = { modal: m };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }

  const o = (l) => {
    onVerify(l);
    onClose();
  };

  const n =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";

  return u(aq, {
    onClose: onClose,
    showHeader: false,
    className: c.modal,
    frameless: true,
    children: u(ap, { onVerify: o, onError: () => {}, theme: n }),
  });
}

export { C as C };
