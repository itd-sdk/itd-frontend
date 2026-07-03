import { d, A, d as d_1, a as a_1, B, m, M } from "./index-DuQT229k.js";
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
      t._sentryDebugIds[r] = "1197db86-e256-42b1-a9fe-78a13bc4a1f7";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-1197db86-e256-42b1-a9fe-78a13bc4a1f7";
    }
  } catch {}
})();
const $ = "LqXF";
const P = "g9AN";
const K = "mJNG";
const Y = "BAEB";
const j = "f0Xt";
const q = "nM5v";
const z = "htT3";
const F = "gY4q";
const H = "PrI3";
const J = "E0NM";

const a = {
  form: $,
  inputGroup: P,
  label: K,
  codeInputs: Y,
  codeInput: j,
  error: q,
  errorText: z,
  submitButton: F,
  resendLink: H,
  resendButton: J,
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
  const [b, N] = countdownText(countdownDuration);
  const [T, B] = countdownText(false);
  const p = A([]);

  d_1(() => {
    p.current[0]?.focus();
  }, []);

  d_1(() => {
    if (b > 0) {
      const e = setTimeout(() => N(b - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      B(true);
    }
  }, [b]);

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

  const E = (e, n) => {
    if (n.key === "Backspace" && !u[e] && e > 0) {
      p.current[e - 1]?.focus();
    }
  };

  const C = (e) => {
    e.preventDefault();

    const c = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const D = [...u];

    c.forEach((x, k) => {
      if (k < 6) {
        D[k] = x;
      }
    });

    I(D);
    const M = Math.min(c.length, 5);
    p.current[M]?.focus();
  };

  const R = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const A = () => {
    if (T) {
      onResend?.();
      N(countdownDuration);
      B(false);
    }
  };

  const L = u.every((e) => e !== "");

  return a_1("form", {
    className: a.form,
    onSubmit: R,
    children: [
      a_1("div", {
        className: a.inputGroup,
        children: [
          a_1("label", { className: a.label, children: label }),
          a_1("div", {
            className: a.codeInputs,
            children: u.map((e, n) =>
              a_1(
                "input",
                {
                  ref: (c) => {
                    p.current[n] = c;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${a.codeInput} ${error ? a.error : ""}`,
                  value: e,
                  onInput: (c) => v(n, c.target.value),
                  onKeyDown: (c) => E(n, c),
                  onPaste: C,
                  maxLength: 1,
                  disabled: disabled,
                },
                n
              )
            ),
          }),
          error && a_1("p", { className: a.errorText, children: error }),
        ],
      }),
      a_1(B, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: a.submitButton,
        disabled: !L || disabled,
        children: buttonText,
      }),
      a_1("p", {
        className: a.resendLink,
        children: T
          ? a_1("button", {
              type: "button",
              className: a.resendButton,
              onClick: A,
              disabled: disabled,
              children: resendText,
            })
          : a_1(onSubmit, { children: countdownText(b) }),
      }),
    ],
  });
};

const O = "0x4AAAAAACHhxczw6fJGwPBg";
function X({ onVerify, onExpire, onError, theme = "auto" }) {
  const d = A(null);
  const l = A(null);
  const [m, h] = d(false);

  d_1(() => {
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
      if (l.current && window.turnstile) {
        window.turnstile.remove(l.current);
        l.current = null;
      }
    };
  }, []);

  d_1(() => {
    if (!m || !d.current || l.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      l.current = window_turnstile.render(d.current, {
        sitekey: O,
        theme: theme,
        callback: onVerify,
        "expired-callback": onExpire,
        "error-callback": onError,
      });
    }
  }, [m, onVerify, onExpire, onError, theme]);

  return a_1("div", {
    style: { display: "flex", width: "300px", height: "65px" },
    ref: d,
  });
}
const U = "FiND";
const V = { modal: U };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (d) => {
    onVerify(d);
    onClose();
  };
  return a_1(M, {
    onClose: onClose,
    showHeader: false,
    className: V.modal,
    frameless: true,
    children: a_1(X, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, Q as O };
