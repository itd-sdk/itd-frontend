import { d, A, d as d_1, u, B, k, M } from "./index-B9FitUXy.js";
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
      t._sentryDebugIds[r] = "3c705aea-e264-4c3a-90b9-c3725bcbd7e7";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-3c705aea-e264-4c3a-90b9-c3725bcbd7e7";
    }
  } catch {}
})();
const K = "LEZp";
const $ = "X0py";
const O = "bnkL";
const j = "DCwq";
const z = "KFsu";
const P = "MsbL";
const F = "ghOF";
const H = "jIoz";
const X = "GOKN";
const Y = "CX6b";

const a = {
  form: K,
  inputGroup: $,
  label: O,
  codeInputs: j,
  codeInput: z,
  error: P,
  errorText: F,
  submitButton: H,
  resendLink: X,
  resendButton: Y,
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
  const [u, I] = countdownText(["", "", "", "", "", ""]);
  const [b, T] = countdownText(countdownDuration);
  const [k, C] = countdownText(false);
  const p = A([]);

  d_1(() => {
    p.current[0]?.focus();
  }, []);

  d_1(() => {
    if (b > 0) {
      const e = setTimeout(() => T(b - 1), 1000 /* 1e3 */);
      return () => clearTimeout(e);
    } else {
      C(true);
    }
  }, [b]);

  const L = (e, n) => {
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

  const v = (e, n) => {
    if (n.key === "Backspace" && !u[e] && e > 0) {
      p.current[e - 1]?.focus();
    }
  };

  const B = (e) => {
    e.preventDefault();

    const o = (e.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const D = [...u];

    o.forEach((M, N) => {
      if (N < 6) {
        D[N] = M;
      }
    });

    I(D);
    const x = Math.min(o.length, 5);
    p.current[x]?.focus();
  };

  const E = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const R = () => {
    if (k) {
      onResend?.();
      T(countdownDuration);
      C(false);
    }
  };

  const A = u.every((e) => e !== "");

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
                  ref: (o) => {
                    p.current[n] = o;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${a.codeInput} ${error ? a.error : ""}`,
                  value: e,
                  onInput: (o) => L(n, o.target.value),
                  onKeyDown: (o) => v(n, o),
                  onPaste: B,
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
        disabled: !A || disabled,
        children: buttonText,
      }),
      u("p", {
        className: a.resendLink,
        children: k
          ? u("button", {
              type: "button",
              className: a.resendButton,
              onClick: R,
              disabled: disabled,
              children: resendText,
            })
          : u(k, { children: countdownText(b) }),
      }),
    ],
  });
};

const q = "0x4AAAAAACHhxczw6fJGwPBg";
function J({ onVerify, onExpire, onError, theme = "auto" }) {
  const d = A(null);
  const l = A(null);
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
      if (l.current && window.turnstile) {
        window.turnstile.remove(l.current);
        l.current = null;
      }
    };
  }, []);

  d_1(() => {
    if (!m || !d.current || l.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      l.current = window_turnstile.render(d.current, {
        sitekey: q,
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
const U = "ALAf";
const V = { modal: U };

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
    className: V.modal,
    frameless: true,
    children: u(J, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, Z as O };
