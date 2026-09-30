import { d, A, h, u, B, S, S as S_1 } from "./index-BuVp7kGl.js";
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
      t._sentryDebugIds[r] = "b8c14d99-a6e6-4057-a7dd-2d2477d57700";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-b8c14d99-a6e6-4057-a7dd-2d2477d57700";
    }
  } catch {}
})();
const $ = "ChSq";
const z = "Bwq9";
const K = "CZM7";
const H = "GS55";
const O = "l5iK";
const P = "O6Vz";
const j = "wIpR";
const q = "L4n8";
const V = "z5Ib";
const Y = "rxsG";

const l = {
  form: $,
  inputGroup: z,
  label: K,
  codeInputs: H,
  codeInput: O,
  error: P,
  errorText: j,
  submitButton: q,
  resendLink: V,
  resendButton: Y,
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
  const [u, g] = buttonText(["", "", "", "", "", ""]);
  const [b, T] = buttonText(countdownDuration);
  const [C, B] = buttonText(false);
  const p = A([]);

  onResend(() => {
    p.current[0]?.focus();
  }, []);

  onResend(() => {
    if (b > 0) {
      const e = setTimeout(() => T(b - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      B(true);
    }
  }, [b]);

  const R = (e, n) => {
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

  const k = (e, n) => {
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

    const D = [...u];

    c.forEach((x, N) => {
      if (N < 6) {
        D[N] = x;
      }
    });

    g(D);
    const A = Math.min(c.length, 5);
    p.current[A]?.focus();
  };

  const E = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const L = () => {
    if (C) {
      onResend?.();
      T(countdownDuration);
      B(false);
    }
  };

  const S = u.every((e) => e !== "");

  return u("form", {
    className: l.form,
    onSubmit: E,
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
                  ref: (c) => {
                    p.current[n] = c;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${l.codeInput} ${error ? l.error : ""}`,
                  value: e,
                  onInput: (c) => R(n, c.target.value),
                  onKeyDown: (c) => k(n, c),
                  onPaste: v,
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
        disabled: !S || disabled,
        children: buttonText,
      }),
      u("p", {
        className: l.resendLink,
        children: C
          ? u("button", {
              type: "button",
              className: l.resendButton,
              onClick: L,
              disabled: disabled,
              children: resendText,
            })
          : u(S, { children: countdownText(b) }),
      }),
    ],
  });
};

const J = "0x4AAAAAACHhxczw6fJGwPBg";
function U({ onVerify, onExpire, onError, theme = "auto" }) {
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

  h(() => {
    if (!m || !i.current || a.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      a.current = window_turnstile.render(i.current, {
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
    ref: i,
  });
}
const W = "rfHb";
const Z = { modal: W };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (i) => {
    onVerify(i);
    onClose();
  };
  return u(S_1, {
    onClose: onClose,
    showHeader: false,
    className: Z.modal,
    frameless: true,
    children: u(U, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, Q as O };
