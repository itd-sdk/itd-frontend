import {
  d,
  A as A_1,
  h,
  u,
  B,
  S,
  ah,
  a7,
  a7 as a7_1,
} from "./index-ORJLmKGS.js";
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
    t.SENTRY_RELEASE = { id: "1.1.3" };
    const n = new t.Error().stack;

    if (n) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[n] = "64f50aaf-cc25-4817-9f85-667ad70c7784";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-64f50aaf-cc25-4817-9f85-667ad70c7784";
    }
  } catch {}
})();
const H = "pzTq";
const O = "XYMz";
const V = "Sukx";
const j = "vgZY";
const F = "tDGV";
const J = "lCle";
const W = "Klcn";
const X = "C7uu";
const Z = "spmU";
const Q = "zaVm";

const y = {
  form: H,
  inputGroup: O,
  label: V,
  codeInputs: j,
  codeInput: F,
  error: J,
  errorText: W,
  submitButton: X,
  resendLink: Z,
  resendButton: Q,
};

const mt = ({
  label = "Код с почты",
  error,
  buttonText = "Продолжить",
  resendText = "Отправить код повторно",
  countdownText = (e) => `Получить новый код через ${e}с`,
  countdownDuration = 90,
  onSubmit,
  onResend,
  disabled = false,
}) => {
  const [e, f] = d(["", "", "", "", "", ""]);
  const [m, w] = d(countdownDuration);
  const [C, g] = d(false);
  const E = A_1([]);

  onResend(() => {
    E.current[0]?.focus();
  }, []);

  onResend(() => {
    if (m > 0) {
      const c = setTimeout(() => w(m - 1), 1000 /* 1e3 */);
      return () => clearTimeout(c);
    } else {
      g(true);
    }
  }, [m]);

  const B = (c, d) => {
    if (!/^\d*$/.test(d)) {
      return;
    }
    const p = [...e];
    p[c] = d.slice(-1);
    f(p);

    if (d && c < 5) {
      E.current[c + 1]?.focus();
    }
  };

  const N = (c, d) => {
    if (d.key === "Backspace" && !e[c] && c > 0) {
      E.current[c - 1]?.focus();
    }
  };

  const P = (c) => {
    c.preventDefault();

    const p = (c.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const R = [...e];

    p.forEach((z, S) => {
      if (S < 6) {
        R[S] = z;
      }
    });

    f(R);
    const G = Math.min(p.length, 5);
    E.current[G]?.focus();
  };

  const x = (c) => {
    c.preventDefault();
    const d = e.join("");
    onSubmit?.(d);
  };

  const K = () => {
    if (C) {
      onResend?.();
      w(countdownDuration);
      g(false);
    }
  };

  const M = e.every((c) => c !== "");

  return onSubmit("form", {
    className: y.form,
    onSubmit: x,
    children: [
      onSubmit("div", {
        className: y.inputGroup,
        children: [
          onSubmit("label", { className: y.label, children: label }),
          onSubmit("div", {
            className: y.codeInputs,
            children: e.map((c, d) =>
              onSubmit(
                "input",
                {
                  ref: (p) => {
                    E.current[d] = p;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${y.codeInput} ${error ? y.error : ""}`,
                  value: c,
                  onInput: (p) => B(d, p.target.value),
                  onKeyDown: (p) => N(d, p),
                  onPaste: P,
                  maxLength: 1,
                  disabled: disabled,
                },
                d
              )
            ),
          }),
          error && onSubmit("p", { className: y.errorText, children: error }),
        ],
      }),
      onSubmit(B, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: y.submitButton,
        disabled: !M || disabled,
        children: buttonText,
      }),
      onSubmit("p", {
        className: y.resendLink,
        children: C
          ? onSubmit("button", {
              type: "button",
              className: y.resendButton,
              onClick: K,
              disabled: disabled,
              children: resendText,
            })
          : onSubmit(S, { children: countdownText(m) }),
      }),
    ],
  });
};

const L = { provider: "cloudflare", field: "turnstileToken" };
let b = null;
const tt = 3000; /* 3e3 */
function et() {
  return (
    b ||
    ((b = (async () => {
      try {
        const t = await ah.get(a7.auth.captchaProvider, {
          timeout: tt,
          skipErrorToast: true,
        });
        return (t?.provider === "itd" && t.field === "token") ||
          (t?.provider === "cloudflare" && t.field === "turnstileToken")
          ? t
          : L;
      } catch {
        b = null;
        return L;
      }
    })()),
    b)
  );
}
function yt(t, n) {
  return n === "token" ? { token: t } : { turnstileToken: t };
}
const nt = "0x4AAAAAACHhxczw6fJGwPBg";
const rt = "https://captcha.xn--d1ah4a.com";
const ct = "sk_44d64cf7bf8bc8377f5b";
function ot({ provider = L.provider, ...n }) {
  return provider === "itd" ? u(it, { ...n }) : u(st, { ...n });
}
function st({ onVerify, onExpire, onError, onReady, theme = "auto" }) {
  const l = A_1(null);
  const u = A_1(null);
  const [h, i] = d(false);

  h(() => {
    window.onTurnstileLoad = () => {
      i(true);
    };

    if (document.getElementById("cf-turnstile-script")) {
      if (window.turnstile) {
        i(true);
      }
    } else {
      const e = document.createElement("script");
      e.id = "cf-turnstile-script";
      e.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      e.async = true;
      e.defer = true;
      document.head.appendChild(e);
    }

    return () => {
      if (u.current && window.turnstile) {
        window.turnstile.remove(u.current);
        u.current = null;
      }
    };
  }, []);

  h(() => {
    if (!h || !l.current || u.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      u.current = window_turnstile.render(l.current, {
        sitekey: nt,
        theme: theme,
        callback: (f) => onVerify(f, "turnstileToken"),
        "expired-callback": onExpire,
        "error-callback": onError,
      });

      onReady?.();
    }
  }, [h, onVerify, onExpire, onError, onReady, theme]);

  return u("div", {
    style: { display: "flex", width: "300px", height: "65px" },
    ref: l,
  });
}
const A = "itd-captcha-script";
let k = null;
function at() {
  if (window.itdCaptcha) {
    return Promise.resolve();
  }

  if (!k) {
    k = new Promise((t, n) => {
      const s = () =>
        window.itdCaptcha ? t() : n(new Error("itd captcha api missing"));

      const a = document.getElementById(A);
      if (a) {
        a.addEventListener("load", s, { once: true });

        a.addEventListener(
          "error",
          () => n(new Error("itd captcha script failed")),
          { once: true }
        );

        return;
      }
      const r = document.createElement("script");
      r.id = A;
      r.src = `${rt}/c.js`;
      r.async = true;
      r.defer = true;
      r.addEventListener("load", s, { once: true });

      r.addEventListener(
        "error",
        () => n(new Error("itd captcha script failed")),
        { once: true }
      );

      document.head.appendChild(r);
    });

    return k;
  }
}
function it({
  onVerify,
  onExpire,
  onError,
  onReady,
  theme = "auto",
  action = "",
}) {
  const u = A_1(null);
  const h = A_1(false);
  const i = A_1({
    onVerify: onVerify,
    onExpire: onExpire,
    onError: onError,
    onReady: onReady,
  });
  i.current = {
    onVerify: onVerify,
    onExpire: onExpire,
    onError: onError,
    onReady: onReady,
  };

  h(() => {
    const u_current = u.current;
    if (!u_current || h.current) {
      return;
    }
    const f = (w) => {
      const w_detail = w.detail;

      const g =
        u_current.querySelector('input[name="itd-captcha-response"]')?.value ??
        "";

      if (w_detail?.ready && g) {
        i.current.onVerify(g, "token");
      } else {
        i.current.onExpire?.();
      }
    };
    u_current.addEventListener("itd-captcha", f);
    let m = false;

    at()
      .then(() => {
        if (!m && !h.current && window.itdCaptcha) {
          h.current = true;
          window.itdCaptcha.render(u_current);
          i.current.onReady?.();
        }
      })
      .catch(() => {
        if (!m) {
          i.current.onError?.();
        }
      });

    return () => {
      m = true;
      u_current.removeEventListener("itd-captcha", f);
    };
  }, []);

  return u("div", {
    ref: u,
    class: "itd-captcha",
    "data-sitekey": ct,
    "data-theme": theme,
    "data-action": action,
  });
}
function ut(t) {
  const [n, s] = d(null);

  h(() => {
    if (!t || n) {
      return;
    }
    let a = true;

    et().then((r) => {
      if (a) {
        s(r);
      }
    });

    return () => {
      a = false;
    };
  }, [t, n]);

  return n;
}
const dt = "Gyz3";
const lt = "KAlS";
const ft = "K0ni";
const D = { overlay: dt, loader: lt, pending: ft };
const pt = 15000; /* 15e3 */

export function C({ isOpen, onClose, onVerify, action = "" }) {
  const [r, l] = d(false);
  const u = ut(isOpen);

  h(() => {
    if (!isOpen) {
      return;
    }
    const e = (w) => {
      if (w.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", e);
    const f = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const m = setTimeout(() => l(true), pt);
    return () => {
      document.removeEventListener("keydown", e);
      document.body.style.overflow = f;
      clearTimeout(m);
    };
  }, [isOpen, onClose]);

  h(() => {
    if (!isOpen) {
      l(false);
    }
  }, [isOpen]);

  const h = a7_1(
    (e, f) => {
      onVerify(e, f);
      onClose();
    },
    [onVerify, onClose]
  );

  const i = a7_1(() => l(true), []);

  return isOpen
    ? u("div", {
        class: D.overlay,
        onMouseDown: (e) => {
          if (e.target !== e.currentTarget) {
            e.stopPropagation();
          }
        },
        onClick: (e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        },
        children: [
          (!r || !u) &&
            u("div", { class: D.loader, "aria-label": "Загрузка проверки" }),
          u &&
            u("div", {
              class: r ? undefined : D.pending,
              children: u(ot, {
                provider: u.provider,
                onVerify: h,
                onReady: i,
                onError: i,
                action: action,
              }),
            }),
        ],
      })
    : null;
}

export { C as C, mt as O, yt as c };
