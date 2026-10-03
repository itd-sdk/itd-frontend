import { d, A, h, u, B, S, S as S_1 } from "./index-CsuAWxkQ.js";
(() => {
  try {
    const t =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "1.1.2" };
    const r = new t.Error().stack;

    if (r) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[r] = "5d5dbcd6-76bc-437c-b8dc-f4f1b5f4ffc5";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-5d5dbcd6-76bc-437c-b8dc-f4f1b5f4ffc5";
    }
  } catch {}
})();
const G = "qCug";
const $ = "KZ0w";
const q = "dOfT";
const P = "ZAKq";
const j = "UuqK";
const H = "Pjqy";
const O = "uG5V";
const U = "fe9m";
const Y = "HBm5";
const z = "UQMs";

const l = {
  form: G,
  inputGroup: $,
  label: q,
  codeInputs: P,
  codeInput: j,
  error: H,
  errorText: O,
  submitButton: U,
  resendLink: Y,
  resendButton: z,
};

const W = ({
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
  const [a, I] = buttonText(["", "", "", "", "", ""]);
  const [b, T] = buttonText(countdownDuration);
  const [B, C] = buttonText(false);
  const p = A([]);

  onResend(() => {
    p.current[0]?.focus();
  }, []);

  onResend(() => {
    if (b > 0) {
      const e = setTimeout(() => T(b - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      C(true);
    }
  }, [b]);

  const k = (e, n) => {
    if (!/^\d*$/.test(n)) {
      return;
    }
    const o = [...a];
    o[e] = n.slice(-1);
    I(o);

    if (n && e < 5) {
      p.current[e + 1]?.focus();
    }
  };

  const v = (e, n) => {
    if (n.key === "Backspace" && !a[e] && e > 0) {
      p.current[e - 1]?.focus();
    }
  };

  const R = (e) => {
    e.preventDefault();

    const o = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const D = [...a];

    o.forEach((x, N) => {
      if (N < 6) {
        D[N] = x;
      }
    });

    I(D);
    const S = Math.min(o.length, 5);
    p.current[S]?.focus();
  };

  const E = (e) => {
    e.preventDefault();
    const n = a.join("");
    onSubmit?.(n);
  };

  const A = () => {
    if (B) {
      onResend?.();
      T(countdownDuration);
      C(false);
    }
  };

  const L = a.every((e) => e !== "");

  return countdownDuration("form", {
    className: l.form,
    onSubmit: E,
    children: [
      countdownDuration("div", {
        className: l.inputGroup,
        children: [
          countdownDuration("label", { className: l.label, children: label }),
          countdownDuration("div", {
            className: l.codeInputs,
            children: a.map((e, n) =>
              countdownDuration(
                "input",
                {
                  ref: (o) => {
                    p.current[n] = o;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${l.codeInput} ${error ? l.error : ""}`,
                  value: e,
                  onInput: (o) => k(n, o.target.value),
                  onKeyDown: (o) => v(n, o),
                  onPaste: R,
                  maxLength: 1,
                  disabled: disabled,
                },
                n
              )
            ),
          }),
          error &&
            countdownDuration("p", { className: l.errorText, children: error }),
        ],
      }),
      countdownDuration(B, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: l.submitButton,
        disabled: !L || disabled,
        children: buttonText,
      }),
      countdownDuration("p", {
        className: l.resendLink,
        children: B
          ? countdownDuration("button", {
              type: "button",
              className: l.resendButton,
              onClick: A,
              disabled: disabled,
              children: resendText,
            })
          : countdownDuration(S, { children: countdownText(b) }),
      }),
    ],
  });
};

const V = "0x4AAAAAACHhxczw6fJGwPBg";
function Z({ onVerify, onExpire, onError, theme = "auto" }) {
  const i = A(null);
  const u = A(null);
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
      const c = document.createElement("script");
      c.id = "cf-turnstile-script";
      c.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      c.async = true;
      c.defer = true;
      document.head.appendChild(c);
    }

    return () => {
      if (u.current && window.turnstile) {
        window.turnstile.remove(u.current);
        u.current = null;
      }
    };
  }, []);

  h(() => {
    if (!m || !i.current || u.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      u.current = window_turnstile.render(i.current, {
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
    ref: i,
  });
}
const F = "YF26";
const J = { modal: F };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (i) => {
    onVerify(i);
    onClose();
  };
  return u(S_1, {
    onClose: onClose,
    showHeader: false,
    className: J.modal,
    frameless: true,
    children: u(Z, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, W as O };
