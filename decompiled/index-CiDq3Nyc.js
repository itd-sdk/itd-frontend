import { u as u_1, an, M } from "./index-dnACTU3c.js";
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
    const t = new e.Error().stack;

    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "779b4e34-730a-4149-b5d0-313c5b45d015";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-779b4e34-730a-4149-b5d0-313c5b45d015";
    }
  } catch {}
})();
const i = "D2Mu";
const u = { modal: i };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }

  const r = (o) => {
    onVerify(o);
    onClose();
  };

  const a =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";

  return u_1(M, {
    onClose: onClose,
    showHeader: false,
    className: u.modal,
    frameless: true,
    children: u_1(an, { onVerify: r, onError: () => {}, theme: a }),
  });
}

export { C as C };
