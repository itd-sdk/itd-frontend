import {
  d,
  q_1 as A_1,
  h,
  u,
  B,
  S,
  ah,
  a7,
  q as q_1,
} from "./index-gHxZkwFX.js";
(() => {
  try {
    const e =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "1.1.4" };
    const n = new e.Error().stack;

    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "b7085773-f67a-47aa-9ffb-f82e3800c971";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-b7085773-f67a-47aa-9ffb-f82e3800c971";
    }
  } catch {}
})();
const O = "EiOa";
const j = "cxvf";
const J = "M24m";
const W = "LMih";
const Y = "QnWI";
const q = "plsf";
const F = "PIjJ";
const Q = "Li0X";
const X = "SvXs";
const V = "QPqP";

const m = {
  form: O,
  inputGroup: j,
  label: J,
  codeInputs: W,
  codeInput: Y,
  error: q,
  errorText: F,
  submitButton: Q,
  resendLink: X,
  resendButton: V,
};

const pe = ({
  label = "Код с почты",
  error,
  buttonText = "Продолжить",
  resendText = "Отправить код повторно",
  countdownText = (t) => `Получить новый код через ${t}с`,
  countdownDuration = 90,
  onSubmit,
  onResend,
  disabled = false,
}) => {
  const [t, h] = countdownDuration(["", "", "", "", "", ""]);
  const [w, I] = countdownDuration(countdownDuration);
  const [v, c] = countdownDuration(false);
  const T = A_1([]);

  h(() => {
    T.current[0]?.focus();
  }, []);

  h(() => {
    if (w > 0) {
      const r = setTimeout(() => I(w - 1), 1000 /* 1e3 */);
      return () => clearTimeout(r);
    } else {
      c(true);
    }
  }, [w]);

  const S = (r, a) => {
    if (!/^\d*$/.test(a)) {
      return;
    }
    const p = [...t];
    p[r] = a.slice(-1);
    h(p);

    if (a && r < 5) {
      T.current[r + 1]?.focus();
    }
  };

  const _ = (r, a) => {
    if (a.key === "Backspace" && !t[r] && r > 0) {
      T.current[r - 1]?.focus();
    }
  };

  const B = (r) => {
    r.preventDefault();

    const p = (r.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const R = [...t];

    p.forEach((K, D) => {
      if (D < 6) {
        R[D] = K;
      }
    });

    h(R);
    const $ = Math.min(p.length, 5);
    T.current[$]?.focus();
  };

  const M = (r) => {
    r.preventDefault();
    const a = t.join("");
    onSubmit?.(a);
  };

  const P = () => {
    if (v) {
      onResend?.();
      I(countdownDuration);
      c(false);
    }
  };

  const x = t.every((r) => r !== "");

  return resendText("form", {
    className: m.form,
    onSubmit: M,
    children: [
      resendText("div", {
        className: m.inputGroup,
        children: [
          resendText("label", { className: m.label, children: label }),
          resendText("div", {
            className: m.codeInputs,
            children: t.map((r, a) =>
              resendText(
                "input",
                {
                  ref: (p) => {
                    T.current[a] = p;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${m.codeInput} ${error ? m.error : ""}`,
                  value: r,
                  onInput: (p) => S(a, p.target.value),
                  onKeyDown: (p) => _(a, p),
                  onPaste: B,
                  maxLength: 1,
                  disabled: disabled,
                },
                a
              )
            ),
          }),
          error && resendText("p", { className: m.errorText, children: error }),
        ],
      }),
      resendText(B, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: m.submitButton,
        disabled: !x || disabled,
        children: buttonText,
      }),
      resendText("p", {
        className: m.resendLink,
        children: v
          ? resendText("button", {
              type: "button",
              className: m.resendButton,
              onClick: P,
              disabled: disabled,
              children: resendText,
            })
          : resendText(S, { children: countdownText(w) }),
      }),
    ],
  });
};

const L = { provider: "cloudflare", field: "turnstileToken" };
let k = null;
const Z = 3000; /* 3e3 */
function ee() {
  return (
    k ||
    ((k = (async () => {
      try {
        const e = await ah.get(a7.auth.captchaProvider, {
          timeout: Z,
          skipErrorToast: true,
        });
        return (e?.provider === "itd" && e.field === "token") ||
          (e?.provider === "cloudflare" && e.field === "turnstileToken")
          ? e
          : L;
      } catch {
        k = null;
        return L;
      }
    })()),
    k)
  );
}
function he(e, n) {
  return n === "token" ? { token: e } : { turnstileToken: e };
}
const te = "0x4AAAAAACHhxczw6fJGwPBg";
const N = "https://captcha.xn--d1ah4a.com";
const ne = "sk_44d64cf7bf8bc8377f5b";
function re({ provider = L.provider, ...n }) {
  return provider === "itd" ? u(ce, { ...n }) : u(oe, { ...n });
}
function oe({ onVerify, onExpire, onError, onReady, theme = "auto" }) {
  const d = A_1(null);
  const s = A_1(null);
  const [y, f] = d(false);

  h(() => {
    window.onTurnstileLoad = () => {
      f(true);
    };

    if (document.getElementById("cf-turnstile-script")) {
      if (window.turnstile) {
        f(true);
      }
    } else {
      const t = document.createElement("script");
      t.id = "cf-turnstile-script";
      t.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      t.async = true;
      t.defer = true;
      document.head.appendChild(t);
    }

    return () => {
      if (s.current && window.turnstile) {
        window.turnstile.remove(s.current);
        s.current = null;
      }
    };
  }, []);

  h(() => {
    if (!y || !d.current || s.current) {
      return;
    }
    const window_turnstile = window.turnstile;

    if (window_turnstile) {
      s.current = window_turnstile.render(d.current, {
        sitekey: te,
        theme: theme,
        callback: (h) => onVerify(h, "turnstileToken"),
        "expired-callback": onExpire,
        "error-callback": onError,
      });

      onReady?.();
    }
  }, [y, onVerify, onExpire, onError, onReady, theme]);

  return onReady("div", {
    style: { display: "flex", width: "300px", height: "65px" },
    ref: d,
  });
}
const se = { width: 300, height: 74 };
function ce({
  onVerify,
  onExpire,
  onError,
  onReady,
  theme = "auto",
  action = "",
}) {
  const s = A_1(null);
  const [y, f] = action(se);
  const t = A_1({
    onVerify: onVerify,
    onExpire: onExpire,
    onError: onError,
    onReady: onReady,
  });

  h(() => {
    t.current = {
      onVerify: onVerify,
      onExpire: onExpire,
      onError: onError,
      onReady: onReady,
    };
  });

  h(() => {
    const I = (v) => {
      if (
        v.origin !== N ||
        (s.current && v.source !== s.current.contentWindow)
      ) {
        return;
      }
      let c;
      try {
        c = typeof v.data == "string" ? JSON.parse(v.data) : v.data;
      } catch {
        return;
      }

      if (c.type === "token" && c.token) {
        t.current.onVerify(c.token, "token");
      } else if (c.type === "expired") {
        t.current.onExpire?.();
      } else if (c.type === "error") {
        t.current.onError?.();
      } else if (c.type === "ready") {
        t.current.onReady?.();
      } else if (c.type === "size" && c.width && c.height) {
        f({ width: c.width, height: c.height });
      }
    };
    window.addEventListener("message", I);

    return () => window.removeEventListener("message", I);
  }, []);

  const h =
    theme !== "auto"
      ? theme
      : document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";

  const w = `${N}/widget.html?sitekey=${encodeURIComponent(
    ne
  )}&theme=${h}&action=${encodeURIComponent(action)}`;

  return onReady("iframe", {
    ref: s,
    src: w,
    title: "Проверка",
    width: y.width,
    height: y.height,
    style: { border: 0, colorScheme: "normal", display: "block" },
  });
}
function ie(e) {
  const [n, i] = d(null);

  h(() => {
    if (!e || n) {
      return;
    }
    let u = true;

    ee().then((l) => {
      if (u) {
        i(l);
      }
    });

    return () => {
      u = false;
    };
  }, [e, n]);

  return n;
}
const ae = "RAHI";
const ue = "wiKU";
const le = "FnKH";
const C = { overlay: ae, loader: ue, pending: le };
const de = 15000; /* 15e3 */
function me({ isOpen, onClose, onVerify, action = "" }) {
  const [l, d] = d(false);
  const s = ie(isOpen);

  h(() => {
    if (!isOpen) {
      return;
    }
    const t = (I) => {
      if (I.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", t);
    const h = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const w = setTimeout(() => d(true), de);
    return () => {
      document.removeEventListener("keydown", t);
      document.body.style.overflow = h;
      clearTimeout(w);
    };
  }, [isOpen, onClose]);

  h(() => {
    if (!isOpen) {
      d(false);
    }
  }, [isOpen]);

  const y = q_1(
    (t, h) => {
      onVerify(t, h);
      onClose();
    },
    [onVerify, onClose]
  );

  const f = q_1(() => d(true), []);

  return isOpen
    ? action("div", {
        class: C.overlay,
        onMouseDown: (t) => {
          if (t.target !== t.currentTarget) {
            t.stopPropagation();
          }
        },
        onClick: (t) => {
          if (t.target === t.currentTarget) {
            onClose();
          }
        },
        children: [
          (!l || !s) &&
            action("div", {
              class: C.loader,
              "aria-label": "Загрузка проверки",
            }),
          s &&
            action("div", {
              class: l ? undefined : C.pending,
              children: action(re, {
                provider: s.provider,
                onVerify: y,
                onReady: f,
                onError: f,
                action: action,
              }),
            }),
        ],
      })
    : null;
}
export { me as C, pe as O, he as c };
