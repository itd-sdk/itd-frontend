import { d, A, y, a, B, k, M } from "./index-B0np_7Xy.js";
const K = "cXHFiYQv";
const P = "sBtkK49F";
const $ = "rF-V8nmG";
const S = "PAoOcsDi";
const z = "gnagFaYr";
const H = "InvrM4rr";
const O = "PRXm4r4u";
const j = "voYrBy5F";
const J = "tkYLykoI";
const U = "lMYxskJL";

const c = {
  form: K,
  inputGroup: P,
  label: $,
  codeInputs: S,
  codeInput: z,
  error: H,
  errorText: O,
  submitButton: j,
  resendLink: J,
  resendButton: U,
};

const W = ({
  label: i = "Код с почты",
  error: o,
  buttonText: d = "Продолжить",
  resendText: p = "Отправить код повторно",
  countdownText: u = (l) => `Получить новый код через ${l}с`,
  countdownDuration: a = 90,
  onSubmit: m,
  onResend: h,
  disabled: s = false,
}) => {
  const [l, k] = d(["", "", "", "", "", ""]);
  const [y, g] = d(a);
  const [B, v] = d(false);
  const f = A([]);

  y(() => {
    f.current[0]?.focus();
  }, []);

  y(() => {
    if (y > 0) {
      const t = setTimeout(() => g(y - 1), 1000 /* 1e3 */);
      return () => clearTimeout(t);
    } else {
      v(true);
    }
  }, [y]);

  const T = (t, e) => {
    if (!/^\d*$/.test(e)) {
      return;
    }
    const r = [...l];
    r[t] = e.slice(-1);
    k(r);

    if (e && t < 5) {
      f.current[t + 1]?.focus();
    }
  };

  const R = (t, e) => {
    if (e.key === "Backspace" && !l[t] && t > 0) {
      f.current[t - 1]?.focus();
    }
  };

  const D = (t) => {
    t.preventDefault();

    const r = (t.clipboardData?.getData("text") || "")
      .replace(/\D/g, "")
      .slice(0, 6)
      .split("");

    const C = [...l];

    r.forEach((Y, N) => {
      if (N < 6) {
        C[N] = Y;
      }
    });

    k(C);
    const M = Math.min(r.length, 5);
    f.current[M]?.focus();
  };

  const L = (t) => {
    t.preventDefault();
    const e = l.join("");
    m?.(e);
  };

  const A = () => {
    if (B) {
      h?.();
      g(a);
      v(false);
    }
  };

  const x = l.every((t) => t !== "");

  return a("form", {
    className: c.form,
    onSubmit: L,
    children: [
      a("div", {
        className: c.inputGroup,
        children: [
          a("label", { className: c.label, children: i }),
          a("div", {
            className: c.codeInputs,
            children: l.map((t, e) =>
              a(
                "input",
                {
                  ref: (r) => {
                    f.current[e] = r;
                  },
                  type: "text",
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  className: `${c.codeInput} ${o ? c.error : ""}`,
                  value: t,
                  onInput: (r) => T(e, r.target.value),
                  onKeyDown: (r) => R(e, r),
                  onPaste: D,
                  maxLength: 1,
                  disabled: s,
                },
                e
              )
            ),
          }),
          o && a("p", { className: c.errorText, children: o }),
        ],
      }),
      a(B, {
        type: "submit",
        variant: "primary",
        size: "lg",
        fullWidth: true,
        className: c.submitButton,
        disabled: !x || s,
        children: d,
      }),
      a("p", {
        className: c.resendLink,
        children: B
          ? a("button", {
              type: "button",
              className: c.resendButton,
              onClick: A,
              disabled: s,
              children: p,
            })
          : a(k, { children: u(y) }),
      }),
    ],
  });
};

const V = "0x4AAAAAACHhxczw6fJGwPBg";
function X({ onVerify: i, onExpire: o, onError: d, theme: p = "auto" }) {
  const u = A(null);
  const a = A(null);
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
      const s = document.createElement("script");
      s.id = "cf-turnstile-script";
      s.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }

    return () => {
      if (a.current && window.turnstile) {
        window.turnstile.remove(a.current);
        a.current = null;
      }
    };
  }, []);

  y(() => {
    if (!m || !u.current || !u.current || a.current) {
      return;
    }
    const s = window.turnstile;

    if (s) {
      a.current = s.render(u.current, {
        sitekey: V,
        theme: p,
        callback: i,
        "expired-callback": o,
        "error-callback": d,
      });
    }
  }, [m, i, o, d, p]);

  return a("div", {
    style: { display: "flex", width: "300px", height: "65px" },
    ref: u,
  });
}
const _ = "_7p-zmUKq";
const q = { modal: _ };

export function C({ isOpen: i, onClose: o, onVerify: d }) {
  if (!i) {
    return null;
  }
  const p = (u) => {
    d(u);
    o();
  };
  return a(M, {
    onClose: o,
    showHeader: false,
    className: q.modal,
    frameless: true,
    children: a(X, { onVerify: p, onError: () => {} }),
  });
}

export { C as C, W as O };
