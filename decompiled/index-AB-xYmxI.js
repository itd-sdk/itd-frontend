import { d, A, h, u, B, S, B as B_1 } from "./index-CR_1arh8.js";
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
      t._sentryDebugIds[r] = "8f6a7402-b672-41f7-8c8b-bb199a231ab1";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-8f6a7402-b672-41f7-8c8b-bb199a231ab1";
    }
  } catch {}
})();
const z = "k4uM";
const G = "UdRm";
const P = "DDII";
const j = "QzPF";
const K = "quv7";
const V = "Vmc2";
const Y = "QYmp";
const H = "LXne";
const O = "jS7L";
const Q = "EzCh";

const a = {
  form: z,
  inputGroup: G,
  label: P,
  codeInputs: j,
  codeInput: K,
  error: V,
  errorText: Y,
  submitButton: H,
  resendLink: O,
  resendButton: Q,
};

const X = ({
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
  const [b, D] = countdownText(countdownDuration);
  const [T, k] = countdownText(false);
  const p = A([]);

  onResend(() => {
    p.current[0]?.focus();
  }, []);

  onResend(() => {
    if (b > 0) {
      const e = setTimeout(() => D(b - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      k(true);
    }
  }, [b]);

  const N = (e, n) => {
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

  const R = (e, n) => {
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

    const v = [...u];

    c.forEach((x, C) => {
      if (C < 6) {
        v[C] = x;
      }
    });

    g(v);
    const A = Math.min(c.length, 5);
    p.current[A]?.focus();
  };

  const E = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const L = () => {
    if (T) {
      onResend?.();
      D(countdownDuration);
      k(false);
    }
  };

  const S = u.every((e) => e !== "");

  return u("form", {
    className: a.form,
    onSubmit: E,
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
                  onInput: (c) => N(n, c.target.value),
                  onKeyDown: (c) => R(n, c),
                  onPaste: B,
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
        disabled: !S || disabled,
        children: buttonText,
      }),
      u("p", {
        className: a.resendLink,
        children: T
          ? u("button", {
              type: "button",
              className: a.resendButton,
              onClick: L,
              disabled: disabled,
              children: resendText,
            })
          : u(S, { children: countdownText(b) }),
      }),
    ],
  });
};

const U = "0x4AAAAAACHhxczw6fJGwPBg";
function q({ onVerify, onExpire, onError, theme = "auto" }) {
  const d = A(null);
  const l = A(null);
  const [m, h] = d(false);

  h(() => {
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

  h(() => {
    if (!m || !d.current || l.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      l.current = window_turnstile.render(d.current, {
        sitekey: U,
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
const F = "VSL1";
const J = { modal: F };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (d) => {
    onVerify(d);
    onClose();
  };
  return u(B_1, {
    onClose: onClose,
    showHeader: false,
    className: J.modal,
    frameless: true,
    children: u(q, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, X as O };
