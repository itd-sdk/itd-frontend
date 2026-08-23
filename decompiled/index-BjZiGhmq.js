import { d, A, d as d_1, u, B, k, M } from "./index-pEgBAsWz.js";
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
      t._sentryDebugIds[r] = "0ff793c9-bf2b-4739-808f-3194ecbd85c9";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-0ff793c9-bf2b-4739-808f-3194ecbd85c9";
    }
  } catch {}
})();
const $ = "FtXX";
const K = "xgVv";
const X = "xaXc";
const j = "DQRw";
const H = "GwHW";
const O = "Fawx";
const P = "Xj9W";
const V = "mGxY";
const W = "O765";
const Y = "TKgQ";

const l = {
  form: $,
  inputGroup: K,
  label: X,
  codeInputs: j,
  codeInput: H,
  error: O,
  errorText: P,
  submitButton: V,
  resendLink: W,
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
  const [u, I] = countdownText(["", "", "", "", "", ""]);
  const [b, T] = countdownText(countdownDuration);
  const [D, R] = countdownText(false);
  const p = A([]);

  d_1(() => {
    p.current[0]?.focus();
  }, []);

  d_1(() => {
    if (b > 0) {
      const e = setTimeout(() => T(b - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      R(true);
    }
  }, [b]);

  const N = (e, n) => {
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

    const k = [...u];

    o.forEach((G, v) => {
      if (v < 6) {
        k[v] = G;
      }
    });

    I(k);
    const L = Math.min(o.length, 5);
    p.current[L]?.focus();
  };

  const x = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const E = () => {
    if (D) {
      onResend?.();
      T(countdownDuration);
      R(false);
    }
  };

  const A = u.every((e) => e !== "");

  return u("form", {
    className: l.form,
    onSubmit: x,
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
                  onInput: (o) => N(n, o.target.value),
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
        disabled: !A || disabled,
        children: buttonText,
      }),
      u("p", {
        className: l.resendLink,
        children: D
          ? u("button", {
              type: "button",
              className: l.resendButton,
              onClick: E,
              disabled: disabled,
              children: resendText,
            })
          : u(k, { children: countdownText(b) }),
      }),
    ],
  });
};

const z = "0x4AAAAAACHhxczw6fJGwPBg";
function F({ onVerify, onExpire, onError, theme = "auto" }) {
  const d = A(null);
  const a = A(null);
  const [m, h] = d(false);

  d_1(() => {
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

  d_1(() => {
    if (!m || !d.current || a.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      a.current = window_turnstile.render(d.current, {
        sitekey: z,
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
const Q = "VocR";
const J = { modal: Q };

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
    className: J.modal,
    frameless: true,
    children: u(F, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, q as O };
