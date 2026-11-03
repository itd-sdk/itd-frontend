import { d, A, h, u, B, S, S as S_1 } from "./index-GOT6tyDH.js";
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
      t._sentryDebugIds[r] = "fe355535-eeb6-4186-9d57-874bbb41ca12";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-fe355535-eeb6-4186-9d57-874bbb41ca12";
    }
  } catch {}
})();
const _ = "LUuG";
const $ = "iDaN";
const K = "BGo2";
const W = "yqSP";
const j = "kPs8";
const z = "rW6s";
const H = "XmbE";
const O = "s0Wf";
const U = "MGKP";
const Y = "BvCE";

const l = {
  form: _,
  inputGroup: $,
  label: K,
  codeInputs: W,
  codeInput: j,
  error: z,
  errorText: H,
  submitButton: O,
  resendLink: U,
  resendButton: Y,
};

const F = ({
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
  const [B, D] = countdownText(false);
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

  const v = (e, n) => {
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

    const N = [...u];

    c.forEach((G, k) => {
      if (k < 6) {
        N[k] = G;
      }
    });

    I(N);
    const S = Math.min(c.length, 5);
    p.current[S]?.focus();
  };

  const R = (e) => {
    e.preventDefault();
    const n = u.join("");
    onSubmit?.(n);
  };

  const L = () => {
    if (B) {
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
                  onInput: (c) => v(n, c.target.value),
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
        children: B
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

const q = "0x4AAAAAACHhxczw6fJGwPBg";
function J({ onVerify, onExpire, onError, theme = "auto" }) {
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
    if (!m || !d.current || a.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      a.current = window_turnstile.render(d.current, {
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
const Q = "htoQ";
const V = { modal: Q };

export function C({ isOpen, onClose, onVerify }) {
  if (!isOpen) {
    return null;
  }
  const f = (d) => {
    onVerify(d);
    onClose();
  };
  return u(S_1, {
    onClose: onClose,
    showHeader: false,
    className: V.modal,
    frameless: true,
    children: u(J, { onVerify: f, onError: () => {} }),
  });
}

export { C as C, F as O };
