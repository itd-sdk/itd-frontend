import { d, A, h, u, B, S, M } from "./index-DK2L49XD.js";
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
      t._sentryDebugIds[r] = "3ae0251c-c888-4103-9caf-e5d89bfc6fb4";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-3ae0251c-c888-4103-9caf-e5d89bfc6fb4";
    }
  } catch {}
})();
const $ = "IJ50";
const K = "iItr";
const j = "iput";
const O = "qOL1";
const P = "MY2v";
const V = "uAGT";
const Y = "VjWE";
const z = "M8IV";
const H = "TwDr";
const J = "ENlr";

const l = {
  form: $,
  inputGroup: K,
  label: j,
  codeInputs: O,
  codeInput: P,
  error: V,
  errorText: Y,
  submitButton: z,
  resendLink: H,
  resendButton: J,
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
  const [b, T] = countdownText(countdownDuration);
  const [D, N] = countdownText(false);
  const p = A([]);

  onResend(() => {
    p.current[0]?.focus();
  }, []);

  onResend(() => {
    if (b > 0) {
      const e = setTimeout(() => T(b - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      N(true);
    }
  }, [b]);

  const k = (e, n) => {
    if (!/^\d*$/.test(n)) {
      return;
    }
    const o = [...u];
    o[e] = n.slice(-1);
    g(o);

    if (n && e < 5) {
      p.current[e + 1]?.focus();
    }
  };

  const B = (e, n) => {
    if (n.key === "Backspace" && !u[e] && e > 0) {
      p.current[e - 1]?.focus();
    }
  };

  const C = (e) => {
    e.preventDefault();

    const o = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const v = [...u];

    o.forEach((S, E) => {
      if (E < 6) {
        v[E] = S;
      }
    });

    g(v);
    const M = Math.min(o.length, 5);
    p.current[M]?.focus();
  };

  const R = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const A = () => {
    if (D) {
      onResend?.();
      T(countdownDuration);
      N(false);
    }
  };

  const L = u.every((e) => e !== "");

  return u("form", {
    className: l.form,
    onSubmit: R,
    children: [
      u("div", {
        className: l.inputGroup,
        children: [
          u("label", { className: l.label, children: label }),
          u("div", {
            className: l.codeInputs,
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
                  className: `${l.codeInput} ${error ? l.error : ""}`,
                  value: e,
                  onInput: (o) => k(n, o.target.value),
                  onKeyDown: (o) => B(n, o),
                  onPaste: C,
                  maxLength: 1,
                  disabled: disabled,
                },
                n
              )
            ),
          }),
          error && u("p", { className: l.errorText, children: error }),
        ],
      }),
      u(B, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: l.submitButton,
        disabled: !L || disabled,
        children: buttonText,
      }),
      u("p", {
        className: l.resendLink,
        children: D
          ? u("button", {
              type: "button",
              className: l.resendButton,
              onClick: A,
              disabled: disabled,
              children: resendText,
            })
          : u(S, { children: countdownText(b) }),
      }),
    ],
  });
};

const W = "0x4AAAAAACHhxczw6fJGwPBg";
function q({ onVerify, onExpire, onError, theme = "auto" }) {
  const d = A(null);
  const a = A(null);
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
      if (a.current && window.turnstile) {
        window.turnstile.remove(a.current);
        a.current = null;
      }
    };
  }, []);

  h(() => {
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

  return u("div", {
    style: { display: "flex", width: "300px", height: "65px" },
    ref: d,
  });
}
const U = "h1K4";
const F = { modal: U };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (d) => {
    onVerify(d);
    onClose();
  };
  return u(M, {
    onClose: onClose,
    showHeader: false,
    className: F.modal,
    frameless: true,
    children: u(q, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, X as O };
