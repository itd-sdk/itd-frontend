import { d, A, y, a as a_1, B, m, M } from "./index-BewGW5_v.js";
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
      t._sentryDebugIds[r] = "fc886a04-92bc-464d-9949-e9e7fe7b20ce";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-fc886a04-92bc-464d-9949-e9e7fe7b20ce";
    }
  } catch {}
})();
const $ = "CNzh";
const z = "sN1I";
const K = "rnIx";
const O = "aJ6D";
const P = "R6bR";
const Y = "uBXG";
const j = "h0DT";
const H = "B8r6";
const J = "sppy";
const W = "W6Dn";

const a = {
  form: $,
  inputGroup: z,
  label: K,
  codeInputs: O,
  codeInput: P,
  error: Y,
  errorText: j,
  submitButton: H,
  resendLink: J,
  resendButton: W,
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
  const [y, D] = countdownText(countdownDuration);
  const [T, N] = countdownText(false);
  const p = A([]);

  y(() => {
    p.current[0]?.focus();
  }, []);

  y(() => {
    if (y > 0) {
      const e = setTimeout(() => D(y - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      N(true);
    }
  }, [y]);

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

  const C = (e, n) => {
    if (n.key === "Backspace" && !u[e] && e > 0) {
      p.current[e - 1]?.focus();
    }
  };

  const v = (e) => {
    e.preventDefault();

    const o = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const B = [...u];

    o.forEach((S, R) => {
      if (R < 6) {
        B[R] = S;
      }
    });

    g(B);
    const L = Math.min(o.length, 5);
    p.current[L]?.focus();
  };

  const E = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const x = () => {
    if (T) {
      onResend?.();
      D(countdownDuration);
      N(false);
    }
  };

  const A = u.every((e) => e !== "");

  return a_1("form", {
    className: a.form,
    onSubmit: E,
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
                  ref: (o) => {
                    p.current[n] = o;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${a.codeInput} ${error ? a.error : ""}`,
                  value: e,
                  onInput: (o) => k(n, o.target.value),
                  onKeyDown: (o) => C(n, o),
                  onPaste: v,
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
        disabled: !A || disabled,
        children: buttonText,
      }),
      a_1("p", {
        className: a.resendLink,
        children: T
          ? a_1("button", {
              type: "button",
              className: a.resendButton,
              onClick: x,
              disabled: disabled,
              children: resendText,
            })
          : a_1(onSubmit, { children: countdownText(y) }),
      }),
    ],
  });
};

const U = "0x4AAAAAACHhxczw6fJGwPBg";
function V({ onVerify, onExpire, onError, theme = "auto" }) {
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

  y(() => {
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

  return a_1("div", {
    style: { display: "flex", width: "300px", height: "65px" },
    ref: d,
  });
}
const X = "OwxY";
const q = { modal: X };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (d) => {
    onVerify(d);
    onClose();
  };
  return a_1(M, {
    onClose: onClose,
    showHeader: false,
    className: q.modal,
    frameless: true,
    children: a_1(V, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, Q as O };
