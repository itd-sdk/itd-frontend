import { a } from "./index-DuQT229k.js";
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
    const s = new e.Error().stack;

    if (s) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[s] = "93065d4d-514b-47b5-8f80-26d774f0b964";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-93065d4d-514b-47b5-8f80-26d774f0b964";
    }
  } catch {}
})();
const b = "LClW";
const i = "bRT1";
const r = "BTua";
const f = "pMWL";
const h = "p6VC";
const n = { checkbox: b, disabled: i, input: r, checkmark: f, label: h };

export function C({
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
}) {
  const o = (l) => {
    onChange(l.target.checked);
  };
  return a("label", {
    className: `${n.checkbox} ${disabled ? n.disabled : ""} ${className}`,
    children: [
      a("input", {
        type: "checkbox",
        checked: checked,
        onChange: o,
        disabled: disabled,
        className: n.input,
      }),
      a("span", { className: n.checkmark }),
      label && a("span", { className: n.label, children: label }),
    ],
  });
}

export { C as C };
