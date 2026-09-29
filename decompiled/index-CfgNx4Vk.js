import { d, A, h, u, B, S, S as S_1 } from "./index-D4QRo1-7.js";
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
      t._sentryDebugIds[r] = "4e3d6502-e903-49f9-bfc0-a30cf9f7b430";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-4e3d6502-e903-49f9-bfc0-a30cf9f7b430";
    }
  } catch {}
})();
const $ = "IzGf";
const P = "wsB0";
const z = "kayP";
const K = "VcBA";
const U = "xgMa";
const V = "v0gX";
const j = "qVCU";
const q = "s2qZ";
const H = "tc6U";
const J = "ZJ5S";

const a = {
  form: $,
  inputGroup: P,
  label: z,
  codeInputs: K,
  codeInput: U,
  error: V,
  errorText: j,
  submitButton: q,
  resendLink: H,
  resendButton: J,
};

const F = ({
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
  const [y, T] = countdownText(countdownDuration);
  const [v, B] = countdownText(false);
  const p = A([]);

  onResend(() => {
    p.current[0]?.focus();
  }, []);

  onResend(() => {
    if (y > 0) {
      const e = setTimeout(() => T(y - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      B(true);
    }
  }, [y]);

  const D = (e, n) => {
    if (!/^\d*$/.test(n)) {
      return;
    }
    const o = [...u];
    o[e] = n.slice(-1);
    I(o);

    if (n && e < 5) {
      p.current[e + 1]?.focus();
    }
  };

  const N = (e, n) => {
    if (n.key === "Backspace" && !u[e] && e > 0) {
      p.current[e - 1]?.focus();
    }
  };

  const R = (e) => {
    e.preventDefault();

    const o = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const k = [...u];

    o.forEach((S, C) => {
      if (C < 6) {
        k[C] = S;
      }
    });

    I(k);
    const L = Math.min(o.length, 5);
    p.current[L]?.focus();
  };

  const E = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const A = () => {
    if (v) {
      onResend?.();
      T(countdownDuration);
      B(false);
    }
  };

  const x = u.every((e) => e !== "");

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
                  ref: (o) => {
                    p.current[n] = o;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${a.codeInput} ${error ? a.error : ""}`,
                  value: e,
                  onInput: (o) => D(n, o.target.value),
                  onKeyDown: (o) => N(n, o),
                  onPaste: R,
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
        disabled: !x || disabled,
        children: buttonText,
      }),
      u("p", {
        className: a.resendLink,
        children: v
          ? u("button", {
              type: "button",
              className: a.resendButton,
              onClick: A,
              disabled: disabled,
              children: resendText,
            })
          : u(S, { children: countdownText(y) }),
      }),
    ],
  });
};

const O = "0x4AAAAAACHhxczw6fJGwPBg";
function W({ onVerify, onExpire, onError, theme = "auto" }) {
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
      const c = document.createElement("script");
      c.id = "cf-turnstile-script";
      c.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      c.async = true;
      c.defer = true;
      document.head.appendChild(c);
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
        sitekey: O,
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
const Y = "WGxv";
const Z = { modal: Y };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (d) => {
    onVerify(d);
    onClose();
  };
  return u(S_1, {
    onClose: onClose,
    showHeader: false,
    className: Z.modal,
    frameless: true,
    children: u(W, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, F as O };
