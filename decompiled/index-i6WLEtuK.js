import { d, A, y, a, B, m, B as B_1 } from "./index-7xRaK15k.js";
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
    t.SENTRY_RELEASE = { id: "1.1.1" };
    const r = new t.Error().stack;

    if (r) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[r] = "2f91b03d-13c0-44bf-83d2-64c954710943";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-2f91b03d-13c0-44bf-83d2-64c954710943";
    }
  } catch {}
})();
const $ = "uc5H";
const G = "X0PY";
const O = "s79J";
const z = "yOif";
const H = "IUDv";
const K = "znNO";
const Y = "Wnkd";
const j = "PPoD";
const J = "CABF";
const U = "gXEt";

const l = {
  form: $,
  inputGroup: G,
  label: O,
  codeInputs: z,
  codeInput: H,
  error: K,
  errorText: Y,
  submitButton: j,
  resendLink: J,
  resendButton: U,
};

const Q = ({
  label = "Код с почты",
  error,
  buttonText = "Продолжить",
  resendText = "Отправить код повторно",
  countdownText = (u) => `Получить новый код через ${u}с`,
  countdownDuration = 90,
  onSubmit,
  onResend,
  disabled = false,
}) => {
  const [u, I] = countdownText(["", "", "", "", "", ""]);
  const [y, D] = countdownText(countdownDuration);
  const [T, k] = countdownText(false);
  const p = A([]);

  y(() => {
    p.current[0]?.focus();
  }, []);

  y(() => {
    if (y > 0) {
      const e = setTimeout(() => D(y - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      k(true);
    }
  }, [y]);

  const v = (e, n) => {
    if (!/^\d*$/.test(n)) {
      return;
    }
    const c = [...u];
    c[e] = n.slice(-1);
    I(c);

    if (n && e < 5) {
      p.current[e + 1]?.focus();
    }
  };

  const C = (e, n) => {
    if (n.key === "Backspace" && !u[e] && e > 0) {
      p.current[e - 1]?.focus();
    }
  };

  const E = (e) => {
    e.preventDefault();

    const c = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const B = [...u];

    c.forEach((x, N) => {
      if (N < 6) {
        B[N] = x;
      }
    });

    I(B);
    const S = Math.min(c.length, 5);
    p.current[S]?.focus();
  };

  const R = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const A = () => {
    if (T) {
      onResend?.();
      D(countdownDuration);
      k(false);
    }
  };

  const L = u.every((e) => e !== "");

  return countdownDuration("form", {
    className: l.form,
    onSubmit: R,
    children: [
      countdownDuration("div", {
        className: l.inputGroup,
        children: [
          countdownDuration("label", { className: l.label, children: label }),
          countdownDuration("div", {
            className: l.codeInputs,
            children: u.map((e, n) =>
              countdownDuration(
                "input",
                {
                  ref: (c) => {
                    p.current[n] = c;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${l.codeInput} ${error ? l.error : ""}`,
                  value: e,
                  onInput: (c) => v(n, c.target.value),
                  onKeyDown: (c) => C(n, c),
                  onPaste: E,
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
        children: T
          ? countdownDuration("button", {
              type: "button",
              className: l.resendButton,
              onClick: A,
              disabled: disabled,
              children: resendText,
            })
          : countdownDuration(onSubmit, { children: countdownText(y) }),
      }),
    ],
  });
};

const W = "0x4AAAAAACHhxczw6fJGwPBg";
function X({ onVerify, onExpire, onError, theme = "auto" }) {
  const d = A(null);
  const a = A(null);
  const [m, h] = d(false);

  y(() => {
    window.onTurnstileLoad = () => {
      h(true);
    };

    if (document.getElementById("cf-turnstile-script")) {
      if (window.turnstile) {
        h(true);
      }
    } else {
      const o = document.createElement("script");
      o.id = "cf-turnstile-script";
      o.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      o.async = true;
      o.defer = true;
      document.head.appendChild(o);
    }

    return () => {
      if (a.current && window.turnstile) {
        window.turnstile.remove(a.current);
        a.current = null;
      }
    };
  }, []);

  y(() => {
    if (!m || !d.current || a.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      a.current = window_turnstile.render(d.current, {
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
    ref: d,
  });
}
const F = "DSBM";
const V = { modal: F };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (d) => {
    onVerify(d);
    onClose();
  };
  return a(B_1, {
    onClose: onClose,
    showHeader: false,
    className: V.modal,
    frameless: true,
    children: a(X, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, Q as O };
