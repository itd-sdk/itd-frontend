import { d, A, h, u, B, S, M as M_1 } from "./index-B74jCtUp.js";
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
      t._sentryDebugIds[r] = "fbb8e359-e55f-43e9-b4d4-ec9d3c7827ea";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-fbb8e359-e55f-43e9-b4d4-ec9d3c7827ea";
    }
  } catch {}
})();
const M = "SOxG";
const $ = "aUQl";
const z = "XntC";
const P = "b2iz";
const j = "GvPw";
const O = "Kcjc";
const H = "XAKl";
const U = "d30A";
const V = "dr2b";
const X = "Ez3r";

const l = {
  form: M,
  inputGroup: $,
  label: z,
  codeInputs: P,
  codeInput: j,
  error: O,
  errorText: H,
  submitButton: U,
  resendLink: V,
  resendButton: X,
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
  const [u, g] = buttonText(["", "", "", "", "", ""]);
  const [b, T] = buttonText(countdownDuration);
  const [v, C] = buttonText(false);
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

  const E = (e) => {
    e.preventDefault();

    const o = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const D = [...u];

    o.forEach((x, N) => {
      if (N < 6) {
        D[N] = x;
      }
    });

    g(D);
    const S = Math.min(o.length, 5);
    p.current[S]?.focus();
  };

  const R = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const A = () => {
    if (v) {
      onResend?.();
      T(countdownDuration);
      C(false);
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
                  onPaste: E,
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
        children: v
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

const Y = "0x4AAAAAACHhxczw6fJGwPBg";
function F({ onVerify, onExpire, onError, theme = "auto" }) {
  const i = A(null);
  const a = A(null);
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
      if (a.current && window.turnstile) {
        window.turnstile.remove(a.current);
        a.current = null;
      }
    };
  }, []);

  h(() => {
    if (!m || !i.current || a.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      a.current = window_turnstile.render(i.current, {
        sitekey: Y,
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
const J = "FVZI";
const Q = { modal: J };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (i) => {
    onVerify(i);
    onClose();
  };
  return u(M_1, {
    onClose: onClose,
    showHeader: false,
    className: Q.modal,
    frameless: true,
    children: u(F, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, Z as O };
