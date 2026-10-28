import { d, A, h, u, B, S, M } from "./index-AoERIL5v.js";
const G = "DDcN";
const P = "PBjC";
const j = "qwrx";
const z = "OAiK";
const O = "nio9";
const H = "niMQ";
const U = "oz3u";
const q = "lUg2";
const J = "h1Xk";
const Q = "itx3";

const c = {
  form: G,
  inputGroup: P,
  label: j,
  codeInputs: z,
  codeInput: O,
  error: H,
  errorText: U,
  submitButton: q,
  resendLink: J,
  resendButton: Q,
};

const F = ({
  label = "Код с почты",
  error,
  buttonText = "Продолжить",
  resendText = "Отправить код повторно",
  countdownText = (a) => `Получить новый код через ${a}с`,
  countdownDuration = 90,
  onSubmit,
  onResend,
  disabled = false,
}) => {
  const [a, g] = buttonText(["", "", "", "", "", ""]);
  const [w, k] = buttonText(countdownDuration);
  const [B, C] = buttonText(false);
  const f = A([]);

  onResend(() => {
    f.current[0]?.focus();
  }, []);

  onResend(() => {
    if (w > 0) {
      const t = setTimeout(() => k(w - 1), 1000 /* 1e3 */);
      return () => clearTimeout(t);
    } else {
      C(true);
    }
  }, [w]);

  const D = (t, e) => {
    if (!/^\d*$/.test(e)) {
      return;
    }
    const r = [...a];
    r[t] = e.slice(-1);
    g(r);

    if (e && t < 5) {
      f.current[t + 1]?.focus();
    }
  };

  const v = (t, e) => {
    if (e.key === "Backspace" && !a[t] && t > 0) {
      f.current[t - 1]?.focus();
    }
  };

  const R = (t) => {
    t.preventDefault();

    const r = (t.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const N = [...a];

    r.forEach((E, T) => {
      if (T < 6) {
        N[T] = E;
      }
    });

    g(N);
    const M = Math.min(r.length, 5);
    f.current[M]?.focus();
  };

  const x = (t) => {
    t.preventDefault();
    const e = a.join("");
    onSubmit?.(e);
  };

  const A = () => {
    if (B) {
      onResend?.();
      k(countdownDuration);
      C(false);
    }
  };

  const L = a.every((t) => t !== "");

  return countdownText("form", {
    className: c.form,
    onSubmit: x,
    children: [
      countdownText("div", {
        className: c.inputGroup,
        children: [
          countdownText("label", { className: c.label, children: label }),
          countdownText("div", {
            className: c.codeInputs,
            children: a.map((t, e) =>
              countdownText(
                "input",
                {
                  ref: (r) => {
                    f.current[e] = r;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${c.codeInput} ${error ? c.error : ""}`,
                  value: t,
                  onInput: (r) => D(e, r.target.value),
                  onKeyDown: (r) => v(e, r),
                  onPaste: R,
                  maxLength: 1,
                  disabled: disabled,
                },
                e
              )
            ),
          }),
          error &&
            countdownText("p", { className: c.errorText, children: error }),
        ],
      }),
      countdownText(B, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: c.submitButton,
        disabled: !L || disabled,
        children: buttonText,
      }),
      countdownText("p", {
        className: c.resendLink,
        children: B
          ? countdownText("button", {
              type: "button",
              className: c.resendButton,
              onClick: A,
              disabled: disabled,
              children: resendText,
            })
          : countdownText(S, { children: countdownText(w) }),
      }),
    ],
  });
};

const V = "0x4AAAAAACHhxczw6fJGwPBg";
function W({ onVerify, onExpire, onError, theme = "auto" }) {
  const u = A(null);
  const l = A(null);
  const [m, h] = onError(false);

  h(() => {
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
      if (l.current && window.turnstile) {
        window.turnstile.remove(l.current);
        l.current = null;
      }
    };
  }, []);

  h(() => {
    if (!m || !u.current || l.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      l.current = window_turnstile.render(u.current, {
        sitekey: V,
        theme: theme,
        callback: onVerify,
        "expired-callback": onExpire,
        "error-callback": onError,
      });
    }
  }, [m, onVerify, onExpire, onError, theme]);

  return u("div", {
    style: { display: "flex", width: "300px", height: "65px" },
    ref: u,
  });
}
const X = "IKyk";
const Y = { modal: X };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const p = (u) => {
    onVerify(u);
    onClose();
  };
  return u(M, {
    onClose: onClose,
    showHeader: false,
    className: Y.modal,
    frameless: true,
    children: u(W, { onVerify: p, onError: () => {} }),
  });
}

export { C as C, F as O };
