import { d, A, y, a as a_1, B, l, l as l_1 } from "./index-DDCL-vHK.js";
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
    t.SENTRY_RELEASE = { id: "1.1.0" };
    const r = new t.Error().stack;

    if (r) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[r] = "7750e02e-5a44-48eb-8909-40f365b6a9c5";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-7750e02e-5a44-48eb-8909-40f365b6a9c5";
    }
  } catch {}
})();
const G = "WthZ";
const K = "DqAH";
const O = "VXDQ";
const q = "udKl";
const H = "UFmh";
const J = "C0rU";
const P = "X7JO";
const U = "s9qk";
const j = "R0gt";
const z = "FqOy";

const a = {
  form: G,
  inputGroup: K,
  label: O,
  codeInputs: q,
  codeInput: H,
  error: J,
  errorText: P,
  submitButton: U,
  resendLink: j,
  resendButton: z,
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

  const R = (e, n) => {
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

  const v = (e, n) => {
    if (n.key === "Backspace" && !u[e] && e > 0) {
      p.current[e - 1]?.focus();
    }
  };

  const B = (e) => {
    e.preventDefault();

    const c = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const C = [...u];

    c.forEach((S, N) => {
      if (N < 6) {
        C[N] = S;
      }
    });

    I(C);
    const x = Math.min(c.length, 5);
    p.current[x]?.focus();
  };

  const E = (e) => {
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

  return a_1("form", {
    className: a.form,
    onSubmit: E,
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
                  onInput: (c) => R(n, c.target.value),
                  onKeyDown: (c) => v(n, c),
                  onPaste: B,
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
          : a_1(countdownDuration, { children: countdownText(y) }),
      }),
    ],
  });
};

const F = "0x4AAAAAACHhxczw6fJGwPBg";
function V({ onVerify, onExpire, onError, theme = "auto" }) {
  const d = A(null);
  const l = A(null);
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
      if (l.current && window.turnstile) {
        window.turnstile.remove(l.current);
        l.current = null;
      }
    };
  }, []);

  y(() => {
    if (!m || !d.current || l.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      l.current = window_turnstile.render(d.current, {
        sitekey: F,
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
const W = "Jb5L";
const X = { modal: W };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (d) => {
    onVerify(d);
    onClose();
  };
  return a_1(l_1, {
    onClose: onClose,
    showHeader: false,
    className: X.modal,
    frameless: true,
    children: a_1(V, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, Q as O };
