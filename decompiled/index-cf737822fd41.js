import { d, A as A_1, h, u, B, S } from "./index-4cbec7521f6a.js";
const j = "XmBk";
const x = "OJ4e";
const F = "hFGE";
const K = "ra1G";
const M = "FnxB";
const z = "ZHQi";
const A = "gRUh";
const H = "gjPw";
const J = "fv7Y";
const Q = "Tn4E";

const o = {
  form: j,
  inputGroup: x,
  label: F,
  codeInputs: K,
  codeInput: M,
  error: z,
  errorText: A,
  submitButton: H,
  resendLink: J,
  resendButton: Q,
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
  const [c, d] = d(["", "", "", "", "", ""]);
  const [a, m] = d(countdownDuration);
  const [f, h] = d(false);
  const r = A_1([]);

  h(() => {
    r.current[0]?.focus();
  }, []);

  h(() => {
    if (a > 0) {
      const t = setTimeout(() => m(a - 1), 1000 /* 1e3 */);
      return () => clearTimeout(t);
    } else {
      h(true);
    }
  }, [a]);

  const v = (t, e) => {
    if (!/^\d*$/.test(e)) {
      return;
    }
    const n = [...c];
    n[t] = e.slice(-1);
    d(n);

    if (e && t < 5) {
      r.current[t + 1]?.focus();
    }
  };

  const w = (t, e) => {
    if (e.key === "Backspace" && !c[t] && t > 0) {
      r.current[t - 1]?.focus();
    }
  };

  const T = (t) => {
    t.preventDefault();

    const n = (t.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const b = [...c];

    n.forEach((E, B) => {
      if (B < 6) {
        b[B] = E;
      }
    });

    d(b);
    const $ = Math.min(n.length, 5);
    r.current[$]?.focus();
  };

  const G = (t) => {
    t.preventDefault();
    const e = c.join("");
    onSubmit?.(e);
  };

  const R = () => {
    if (f) {
      onResend?.();
      m(countdownDuration);
      h(false);
    }
  };

  const L = c.every((t) => t !== "");

  return error("form", {
    className: o.form,
    onSubmit: G,
    children: [
      error("div", {
        className: o.inputGroup,
        children: [
          error("label", { className: o.label, children: label }),
          error("div", {
            className: o.codeInputs,
            children: c.map((t, e) =>
              error(
                "input",
                {
                  ref: (n) => {
                    r.current[e] = n;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${o.codeInput} ${error ? o.error : ""}`,
                  value: t,
                  onInput: (n) => v(e, n.target.value),
                  onKeyDown: (n) => w(e, n),
                  onPaste: T,
                  maxLength: 1,
                  disabled: disabled,
                },
                e
              )
            ),
          }),
          error && error("p", { className: o.errorText, children: error }),
        ],
      }),
      error(B, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: o.submitButton,
        disabled: !L || disabled,
        children: buttonText,
      }),
      error("p", {
        className: o.resendLink,
        children: f
          ? error("button", {
              type: "button",
              className: o.resendButton,
              onClick: R,
              disabled: disabled,
              children: resendText,
            })
          : error(S, { children: countdownText(a) }),
      }),
    ],
  });
};

export { W as A_1 };
