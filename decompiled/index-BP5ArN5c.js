import { d, A, y, a as a_1, B, m, M } from "./index-BAlLDjSl.js";
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
      t._sentryDebugIds[r] = "95e385f1-2665-42c4-882e-f8fa4d32d35b";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-95e385f1-2665-42c4-882e-f8fa4d32d35b";
    }
  } catch {}
})();
const $ = "OAQ3";
const G = "F0E3";
const K = "sZOH";
const O = "HHkl";
const P = "wvaR";
const j = "Uyfb";
const z = "KDIE";
const Q = "Q1c3";
const U = "ncZT";
const Y = "mrd2";

const a = {
  form: $,
  inputGroup: G,
  label: K,
  codeInputs: O,
  codeInput: P,
  error: j,
  errorText: z,
  submitButton: Q,
  resendLink: U,
  resendButton: Y,
};

const q = ({
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
  const [u, g] = buttonText(["", "", "", "", "", ""]);
  const [y, T] = buttonText(countdownDuration);
  const [D, k] = buttonText(false);
  const p = A([]);

  y(() => {
    p.current[0]?.focus();
  }, []);

  y(() => {
    if (y > 0) {
      const e = setTimeout(() => T(y - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      k(true);
    }
  }, [y]);

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

    c.forEach((S, E) => {
      if (E < 6) {
        v[E] = S;
      }
    });

    g(v);
    const x = Math.min(c.length, 5);
    p.current[x]?.focus();
  };

  const C = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const A = () => {
    if (D) {
      onResend?.();
      T(countdownDuration);
      k(false);
    }
  };

  const L = u.every((e) => e !== "");

  return a_1("form", {
    className: a.form,
    onSubmit: C,
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
        children: D
          ? a_1("button", {
              type: "button",
              className: a.resendButton,
              onClick: A,
              disabled: disabled,
              children: resendText,
            })
          : a_1(onSubmit, { children: countdownText(y) }),
      }),
    ],
  });
};

const Z = "0x4AAAAAACHhxczw6fJGwPBg";
function F({ onVerify, onExpire, onError, theme = "auto" }) {
  const i = A(null);
  const l = A(null);
  const [m, h] = onError(false);

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
    if (!m || !i.current || l.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      l.current = window_turnstile.render(i.current, {
        sitekey: Z,
        theme: theme,
        callback: onVerify,
        "expired-callback": onExpire,
        "error-callback": onError,
      });
    }
  }, [m, onVerify, onExpire, onError, theme]);

  return a_1("div", {
    style: { display: "flex", width: "300px", height: "65px" },
    ref: i,
  });
}
const J = "bw2D";
const V = { modal: J };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (i) => {
    onVerify(i);
    onClose();
  };
  return a_1(M, {
    onClose: onClose,
    showHeader: false,
    className: V.modal,
    frameless: true,
    children: a_1(F, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, q as O };
