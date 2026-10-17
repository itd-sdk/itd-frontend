import { d, A, h, u, B, S, B as B_1 } from "./index-DqQficWb.js";
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
      t._sentryDebugIds[r] = "25ba8993-da0c-4be5-90d2-e6df26a21fc0";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-25ba8993-da0c-4be5-90d2-e6df26a21fc0";
    }
  } catch {}
})();
const $ = "YEFM";
const j = "Y3Ik";
const z = "aSWE";
const Y = "U5zN";
const K = "uzUL";
const P = "xDjj";
const U = "h1Co";
const W = "xCLx";
const F = "brQW";
const H = "FcEG";

const a = {
  form: $,
  inputGroup: j,
  label: z,
  codeInputs: Y,
  codeInput: K,
  error: P,
  errorText: U,
  submitButton: W,
  resendLink: F,
  resendButton: H,
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
  const [u, g] = buttonText(["", "", "", "", "", ""]);
  const [b, T] = buttonText(countdownDuration);
  const [C, D] = buttonText(false);
  const p = A([]);

  onResend(() => {
    p.current[0]?.focus();
  }, []);

  onResend(() => {
    if (b > 0) {
      const e = setTimeout(() => T(b - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      D(true);
    }
  }, [b]);

  const k = (e, n) => {
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

  const v = (e) => {
    e.preventDefault();

    const c = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const E = [...u];

    c.forEach((S, N) => {
      if (N < 6) {
        E[N] = S;
      }
    });

    g(E);
    const A = Math.min(c.length, 5);
    p.current[A]?.focus();
  };

  const B = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const L = () => {
    if (C) {
      onResend?.();
      T(countdownDuration);
      D(false);
    }
  };

  const x = u.every((e) => e !== "");

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
                  onInput: (c) => k(n, c.target.value),
                  onKeyDown: (c) => R(n, c),
                  onPaste: v,
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
        children: C
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

const O = "0x4AAAAAACHhxczw6fJGwPBg";
function J({ onVerify, onExpire, onError, theme = "auto" }) {
  const i = A(null);
  const l = A(null);
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
    if (!m || !i.current || l.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      l.current = window_turnstile.render(i.current, {
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
    ref: i,
  });
}
const Q = "Rcwa";
const V = { modal: Q };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (i) => {
    onVerify(i);
    onClose();
  };
  return u(B_1, {
    onClose: onClose,
    showHeader: false,
    className: V.modal,
    frameless: true,
    children: u(J, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, X as O };
