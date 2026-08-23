import { d, A, d as d_1, u, B, k, k as k_1 } from "./index-DBLtLuBZ.js";
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
      t._sentryDebugIds[r] = "57a706aa-8c32-481b-99a3-06a27a1850b3";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-57a706aa-8c32-481b-99a3-06a27a1850b3";
    }
  } catch {}
})();
const G = "E8vl";
const H = "CvZ3";
const K = "vhwr";
const P = "bq9k";
const j = "R2rl";
const q = "cE0H";
const z = "dQhh";
const O = "u8IX";
const X = "yavX";
const Y = "Rqmp";

const a = {
  form: G,
  inputGroup: H,
  label: K,
  codeInputs: P,
  codeInput: j,
  error: q,
  errorText: z,
  submitButton: O,
  resendLink: X,
  resendButton: Y,
};

const Z = ({
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
  const [u, g] = countdownText(["", "", "", "", "", ""]);
  const [b, v] = countdownText(countdownDuration);
  const [T, k] = countdownText(false);
  const p = A([]);

  d_1(() => {
    p.current[0]?.focus();
  }, []);

  d_1(() => {
    if (b > 0) {
      const e = setTimeout(() => v(b - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      k(true);
    }
  }, [b]);

  const C = (e, n) => {
    if (!/^\d*$/.test(n)) {
      return;
    }
    const c = [...u];
    c[e] = n.slice(-1);
    g(c);

    if (n && e < 5) {
      p.current[e + 1]?.focus();
    }
  };

  const E = (e, n) => {
    if (n.key === "Backspace" && !u[e] && e > 0) {
      p.current[e - 1]?.focus();
    }
  };

  const N = (e) => {
    e.preventDefault();

    const c = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const D = [...u];

    c.forEach((S, R) => {
      if (R < 6) {
        D[R] = S;
      }
    });

    g(D);
    const x = Math.min(c.length, 5);
    p.current[x]?.focus();
  };

  const B = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const A = () => {
    if (T) {
      onResend?.();
      v(countdownDuration);
      k(false);
    }
  };

  const L = u.every((e) => e !== "");

  return u("form", {
    className: a.form,
    onSubmit: B,
    children: [
      u("div", {
        className: a.inputGroup,
        children: [
          u("label", { className: a.label, children: label }),
          u("div", {
            className: a.codeInputs,
            children: u.map((e, n) =>
              u(
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
                  onInput: (c) => C(n, c.target.value),
                  onKeyDown: (c) => E(n, c),
                  onPaste: N,
                  maxLength: 1,
                  disabled: disabled,
                },
                n
              )
            ),
          }),
          error && u("p", { className: a.errorText, children: error }),
        ],
      }),
      u(B, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: a.submitButton,
        disabled: !L || disabled,
        children: buttonText,
      }),
      u("p", {
        className: a.resendLink,
        children: T
          ? u("button", {
              type: "button",
              className: a.resendButton,
              onClick: A,
              disabled: disabled,
              children: resendText,
            })
          : u(k, { children: countdownText(b) }),
      }),
    ],
  });
};

const J = "0x4AAAAAACHhxczw6fJGwPBg";
function Q({ onVerify, onExpire, onError, theme = "auto" }) {
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
        sitekey: J,
        theme: theme,
        callback: onVerify,
        "expired-callback": onExpire,
        "error-callback": onError,
      });
    }
  }, [m, onVerify, onExpire, onError, theme]);

  return u("div", {
    style: { display: "flex", width: "300px", height: "65px" },
    ref: d,
  });
}
const U = "hDba";
const V = { modal: U };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (d) => {
    onVerify(d);
    onClose();
  };
  return u(k_1, {
    onClose: onClose,
    showHeader: false,
    className: V.modal,
    frameless: true,
    children: u(Q, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, Z as O };
