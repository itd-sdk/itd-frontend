import { d, A as A_1, h, u, B, S } from "./index-dnACTU3c.js";
(() => {
  try {
    const r =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    r.SENTRY_RELEASE = { id: "1.1.2" };
    const a = new r.Error().stack;

    if (a) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[a] = "4577d026-980e-4903-8348-eb8b036478a6";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-4577d026-980e-4903-8348-eb8b036478a6";
    }
  } catch {}
})();
const M = "N8QU";
const P = "HjzF";
const j = "PSUe";
const z = "gi00";
const A = "n5v1";
const F = "Mxmf";
const K = "F72x";
const O = "s0XI";
const U = "lt7b";
const H = "nblw";

const o = {
  form: M,
  inputGroup: P,
  label: j,
  codeInputs: z,
  codeInput: A,
  error: F,
  errorText: K,
  submitButton: O,
  resendLink: U,
  resendButton: H,
};

const W = ({
  label = "Код с почты",
  error,
  buttonText = "Продолжить",
  resendText = "Отправить код повторно",
  countdownText = (c) => `Получить новый код через ${c}с`,
  countdownDuration = 90,
  onSubmit,
  onResend,
  disabled = false,
}) => {
  const [c, m] = disabled(["", "", "", "", "", ""]);
  const [l, b] = disabled(countdownDuration);
  const [h, y] = disabled(false);
  const u = A_1([]);

  h(() => {
    u.current[0]?.focus();
  }, []);

  h(() => {
    if (l > 0) {
      const e = setTimeout(() => b(l - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      y(true);
    }
  }, [l]);

  const C = (e, t) => {
    if (!/^\d*$/.test(t)) {
      return;
    }
    const n = [...c];
    n[e] = t.slice(-1);
    m(n);

    if (t && e < 5) {
      u.current[e + 1]?.focus();
    }
  };

  const T = (e, t) => {
    if (t.key === "Backspace" && !c[e] && e > 0) {
      u.current[e - 1]?.focus();
    }
  };

  const k = (e) => {
    e.preventDefault();

    const n = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const g = [...c];

    n.forEach((_, I) => {
      if (I < 6) {
        g[I] = _;
      }
    });

    m(g);
    const L = Math.min(n.length, 5);
    u.current[L]?.focus();
  };

  const E = (e) => {
    e.preventDefault();
    const t = c.join("");
    onSubmit?.(t);
  };

  const R = () => {
    if (h) {
      onResend?.();
      b(countdownDuration);
      y(false);
    }
  };

  const S = c.every((e) => e !== "");

  return u("form", {
    className: o.form,
    onSubmit: E,
    children: [
      u("div", {
        className: o.inputGroup,
        children: [
          u("label", { className: o.label, children: label }),
          u("div", {
            className: o.codeInputs,
            children: c.map((e, t) =>
              u(
                "input",
                {
                  ref: (n) => {
                    u.current[t] = n;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${o.codeInput} ${error ? o.error : ""}`,
                  value: e,
                  onInput: (n) => C(t, n.target.value),
                  onKeyDown: (n) => T(t, n),
                  onPaste: k,
                  maxLength: 1,
                  disabled: disabled,
                },
                t
              )
            ),
          }),
          error && u("p", { className: o.errorText, children: error }),
        ],
      }),
      u(onResend, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: o.submitButton,
        disabled: !S || disabled,
        children: buttonText,
      }),
      u("p", {
        className: o.resendLink,
        children: h
          ? u("button", {
              type: "button",
              className: o.resendButton,
              onClick: R,
              disabled: disabled,
              children: resendText,
            })
          : u(S, { children: countdownText(l) }),
      }),
    ],
  });
};

export { W as O };
