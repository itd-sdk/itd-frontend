import { d, A, y, u, B, k, M } from "./index-DDTOXJaD.js";
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
      t._sentryDebugIds[r] = "72ad3753-4256-4347-92dd-11cf0c28b1f6";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-72ad3753-4256-4347-92dd-11cf0c28b1f6";
    }
  } catch {}
})();
const $ = "yFWK";
const G = "Ntdl";
const P = "KDZU";
const j = "xZUl";
const H = "iTM7";
const U = "q7Qj";
const W = "IMNo";
const z = "oP6t";
const F = "KTHx";
const O = "FpMW";

const l = {
  form: $,
  inputGroup: G,
  label: P,
  codeInputs: j,
  codeInput: H,
  error: U,
  errorText: W,
  submitButton: z,
  resendLink: F,
  resendButton: O,
};

const V = ({
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
  const [N, D] = buttonText(false);
  const p = A([]);

  y(() => {
    p.current[0]?.focus();
  }, []);

  y(() => {
    if (y > 0) {
      const e = setTimeout(() => T(y - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      D(true);
    }
  }, [y]);

  const B = (e, n) => {
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

  const C = (e, n) => {
    if (n.key === "Backspace" && !u[e] && e > 0) {
      p.current[e - 1]?.focus();
    }
  };

  const E = (e) => {
    e.preventDefault();

    const c = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const k = [...u];

    c.forEach((M, v) => {
      if (v < 6) {
        k[v] = M;
      }
    });

    g(k);
    const L = Math.min(c.length, 5);
    p.current[L]?.focus();
  };

  const R = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const x = () => {
    if (N) {
      onResend?.();
      T(countdownDuration);
      D(false);
    }
  };

  const A = u.every((e) => e !== "");

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
                  ref: (c) => {
                    p.current[n] = c;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${l.codeInput} ${error ? l.error : ""}`,
                  value: e,
                  onInput: (c) => B(n, c.target.value),
                  onKeyDown: (c) => C(n, c),
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
        disabled: !A || disabled,
        children: buttonText,
      }),
      u("p", {
        className: l.resendLink,
        children: N
          ? u("button", {
              type: "button",
              className: l.resendButton,
              onClick: x,
              disabled: disabled,
              children: resendText,
            })
          : u(k, { children: countdownText(y) }),
      }),
    ],
  });
};

const Y = "0x4AAAAAACHhxczw6fJGwPBg";
function Z({ onVerify, onExpire, onError, theme = "auto" }) {
  const i = A(null);
  const a = A(null);
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
      if (a.current && window.turnstile) {
        window.turnstile.remove(a.current);
        a.current = null;
      }
    };
  }, []);

  y(() => {
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
const q = "yrmE";
const J = { modal: q };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (i) => {
    onVerify(i);
    onClose();
  };
  return u(M, {
    onClose: onClose,
    showHeader: false,
    className: J.modal,
    frameless: true,
    children: u(Z, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, V as O };
