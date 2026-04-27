import { d, A, d as d_1, a, B, k, B as B_1 } from "./index-BNG2MjJY.js";
const S = "L6Ln";
const K = "ovIP";
const O = "VLie";
const j = "B3Nt";
const z = "wtfO";
const H = "ce3i";
const V = "kc0o";
const J = "wpTp";
const Q = "AZTo";
const U = "RQgG";

const c = {
  form: S,
  inputGroup: K,
  label: O,
  codeInputs: j,
  codeInput: z,
  error: H,
  errorText: V,
  submitButton: J,
  resendLink: Q,
  resendButton: U,
};

const F = ({
  label = "Код с почты",
  error,
  buttonText = "Продолжить",
  resendText = "Отправить код повторно",
  countdownText = (l) => `Получить новый код через ${l}с`,
  countdownDuration = 90,
  onSubmit,
  onResend,
  disabled = false,
}) => {
  const [l, g] = buttonText(["", "", "", "", "", ""]);
  const [w, T] = buttonText(countdownDuration);
  const [k, B] = buttonText(false);
  const f = A([]);

  d_1(() => {
    f.current[0]?.focus();
  }, []);

  d_1(() => {
    if (w > 0) {
      const e = setTimeout(() => T(w - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      B(true);
    }
  }, [w]);

  const v = (e, t) => {
    if (!/^\d*$/.test(t)) {
      return;
    }
    const r = [...l];
    r[e] = t.slice(-1);
    g(r);

    if (t && e < 5) {
      f.current[e + 1]?.focus();
    }
  };

  const L = (e, t) => {
    if (t.key === "Backspace" && !l[e] && e > 0) {
      f.current[e - 1]?.focus();
    }
  };

  const R = (e) => {
    e.preventDefault();

    const r = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const C = [...l];

    r.forEach((G, N) => {
      if (N < 6) {
        C[N] = G;
      }
    });

    g(C);
    const E = Math.min(r.length, 5);
    f.current[E]?.focus();
  };

  const D = (e) => {
    e.preventDefault();
    const t = l.join("");
    onSubmit?.(t);
  };

  const A = () => {
    if (k) {
      onResend?.();
      T(countdownDuration);
      B(false);
    }
  };

  const x = l.every((e) => e !== "");

  return countdownDuration("form", {
    className: c.form,
    onSubmit: D,
    children: [
      countdownDuration("div", {
        className: c.inputGroup,
        children: [
          countdownDuration("label", { className: c.label, children: label }),
          countdownDuration("div", {
            className: c.codeInputs,
            children: l.map((e, t) =>
              countdownDuration(
                "input",
                {
                  ref: (r) => {
                    f.current[t] = r;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${c.codeInput} ${error ? c.error : ""}`,
                  value: e,
                  onInput: (r) => v(t, r.target.value),
                  onKeyDown: (r) => L(t, r),
                  onPaste: R,
                  maxLength: 1,
                  disabled: disabled,
                },
                t
              )
            ),
          }),
          error &&
            countdownDuration("p", { className: c.errorText, children: error }),
        ],
      }),
      countdownDuration(B, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: c.submitButton,
        disabled: !x || disabled,
        children: buttonText,
      }),
      countdownDuration("p", {
        className: c.resendLink,
        children: k
          ? countdownDuration("button", {
              type: "button",
              className: c.resendButton,
              onClick: A,
              disabled: disabled,
              children: resendText,
            })
          : countdownDuration(k, { children: countdownText(w) }),
      }),
    ],
  });
};

const W = "0x4AAAAAACHhxczw6fJGwPBg";
function Y({ onVerify, onExpire, onError, theme = "auto" }) {
  const u = A(null);
  const a = A(null);
  const [m, h] = onError(false);

  d_1(() => {
    window.onTurnstileLoad = () => {
      h(true);
    };

    if (document.getElementById("cf-turnstile-script")) {
      if (window.turnstile) {
        h(true);
      }
    } else {
      const s = document.createElement("script");
      s.id = "cf-turnstile-script";
      s.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }

    return () => {
      if (a.current && window.turnstile) {
        window.turnstile.remove(a.current);
        a.current = null;
      }
    };
  }, []);

  d_1(() => {
    if (!m || !u.current || a.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      a.current = window_turnstile.render(u.current, {
        sitekey: W,
        theme: theme,
        callback: onVerify,
        "expired-callback": onExpire,
        "error-callback": onError,
      });
    }
  }, [m, onVerify, onExpire, onError, theme]);

  return a("div", {
    style: { display: "flex", width: "300px", height: "65px" },
    ref: u,
  });
}
const Z = "CrD5";
const _ = { modal: Z };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const p = (u) => {
    onVerify(u);
    onClose();
  };
  return a(B_1, {
    onClose: onClose,
    showHeader: false,
    className: _.modal,
    frameless: true,
    children: a(Y, { onVerify: p, onError: () => {} }),
  });
}

export { C as C, F as O };
