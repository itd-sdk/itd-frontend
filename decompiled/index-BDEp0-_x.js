import { d, A, y, a as a_1, B, m, B as B_1 } from "./index-BCnJB3wz.js";
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
      t._sentryDebugIds[r] = "a43b143a-d973-43c4-8fec-8fcc8d263e2a";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-a43b143a-d973-43c4-8fec-8fcc8d263e2a";
    }
  } catch {}
})();
const $ = "LnhS";
const j = "ZGro";
const K = "Ax5M";
const P = "tbrm";
const O = "PKfY";
const Y = "o3Sj";
const z = "i8VL";
const H = "DZmL";
const J = "AOor";
const V = "y8jf";

const a = {
  form: $,
  inputGroup: j,
  label: K,
  codeInputs: P,
  codeInput: O,
  error: Y,
  errorText: z,
  submitButton: H,
  resendLink: J,
  resendButton: V,
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
  const [y, T] = countdownText(countdownDuration);
  const [D, k] = countdownText(false);
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

  const A = (e, n) => {
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

  const B = (e, n) => {
    if (n.key === "Backspace" && !u[e] && e > 0) {
      p.current[e - 1]?.focus();
    }
  };

  const C = (e) => {
    e.preventDefault();

    const c = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const N = [...u];

    c.forEach((x, v) => {
      if (v < 6) {
        N[v] = x;
      }
    });

    I(N);
    const S = Math.min(c.length, 5);
    p.current[S]?.focus();
  };

  const L = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const R = () => {
    if (D) {
      onResend?.();
      T(countdownDuration);
      k(false);
    }
  };

  const E = u.every((e) => e !== "");

  return a_1("form", {
    className: a.form,
    onSubmit: L,
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
                  onInput: (c) => A(n, c.target.value),
                  onKeyDown: (c) => B(n, c),
                  onPaste: C,
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
        disabled: !E || disabled,
        children: buttonText,
      }),
      a_1("p", {
        className: a.resendLink,
        children: D
          ? a_1("button", {
              type: "button",
              className: a.resendButton,
              onClick: R,
              disabled: disabled,
              children: resendText,
            })
          : a_1(onSubmit, { children: countdownText(y) }),
      }),
    ],
  });
};

const Z = "0x4AAAAAACHhxczw6fJGwPBg";
function U({ onVerify, onExpire, onError, theme = "auto" }) {
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
    ref: d,
  });
}
const W = "AJ2a";
const q = { modal: W };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (d) => {
    onVerify(d);
    onClose();
  };
  return a_1(B_1, {
    onClose: onClose,
    showHeader: false,
    className: q.modal,
    frameless: true,
    children: a_1(U, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, Q as O };
