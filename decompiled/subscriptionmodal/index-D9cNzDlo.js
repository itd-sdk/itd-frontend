import { a } from "./index-CFv_0Hh6.js";
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
    const a = new e.Error().stack;

    if (a) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[a] = "2c12a470-8319-4bba-b4b7-19249ac0db4e";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-2c12a470-8319-4bba-b4b7-19249ac0db4e";
    }
  } catch {}
})();
const l = "nsXq";
const r = "r9v1";
const i = "b55L";
const h = "pbY2";
const u = "QeDT";
const n = { checkbox: l, disabled: r, input: i, checkmark: h, label: u };

export function C({
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
}) {
  const o = (d) => {
    onChange(d.target.checked);
  };
  return onChange("label", {
    className: `${n.checkbox} ${disabled ? n.disabled : ""} ${className}`,
    children: [
      onChange("input", {
        type: "checkbox",
        checked: checked,
        onChange: o,
        disabled: disabled,
        className: n.input,
      }),
      onChange("span", { className: n.checkmark }),
      label && onChange("span", { className: n.label, children: label }),
    ],
  });
}

export { C as C };
