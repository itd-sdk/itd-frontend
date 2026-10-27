import { d, A, h, u, B, S, B as B_1 } from "./index-BQxlThnW-portal20261026.js";
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
      t._sentryDebugIds[r] = "de40926a-f647-4376-9b53-9089f5e23aa1";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-de40926a-f647-4376-9b53-9089f5e23aa1";
    }
  } catch {}
})();
const G = "Sr6x";
const K = "C2Lr";
const P = "pWXi";
const V = "yxWw";
const W = "UN4k";
const X = "e6ms";
const Y = "sXIV";
const j = "b1x8";
const z = "YXJi";
const H = "MMkT";

const a = {
  form: G,
  inputGroup: K,
  label: P,
  codeInputs: V,
  codeInput: W,
  error: X,
  errorText: Y,
  submitButton: j,
  resendLink: z,
  resendButton: H,
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
  const [u, g] = countdownText(["", "", "", "", "", ""]);
  const [y, T] = countdownText(countdownDuration);
  const [k, N] = countdownText(false);
  const p = A([]);

  onResend(() => {
    p.current[0]?.focus();
  }, []);

  onResend(() => {
    if (y > 0) {
      const e = setTimeout(() => T(y - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      N(true);
    }
  }, [y]);

  const v = (e, n) => {
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

  const B = (e, n) => {
    if (n.key === "Backspace" && !u[e] && e > 0) {
      p.current[e - 1]?.focus();
    }
  };

  const R = (e) => {
    e.preventDefault();

    const c = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const C = [...u];

    c.forEach((S, D) => {
      if (D < 6) {
        C[D] = S;
      }
    });

    g(C);
    const A = Math.min(c.length, 5);
    p.current[A]?.focus();
  };

  const E = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const L = () => {
    if (k) {
      onResend?.();
      T(countdownDuration);
      N(false);
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
                  ref: (c) => {
                    p.current[n] = c;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${a.codeInput} ${error ? a.error : ""}`,
                  value: e,
                  onInput: (c) => v(n, c.target.value),
                  onKeyDown: (c) => B(n, c),
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
        children: k
          ? u("button", {
              type: "button",
              className: a.resendButton,
              onClick: L,
              disabled: disabled,
              children: resendText,
            })
          : u(S, { children: countdownText(y) }),
      }),
    ],
  });
};

const J = "0x4AAAAAACHhxczw6fJGwPBg";
function O({ onVerify, onExpire, onError, theme = "auto" }) {
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
const U = "cVeL";
const q = { modal: U };

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
    className: q.modal,
    frameless: true,
    children: u(O, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, Q as O };
