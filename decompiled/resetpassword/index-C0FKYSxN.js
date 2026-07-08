import { d, a, ad, B, ae, f, ab, ac } from "./index-BewGW5_v.js";
import { I, a as a_1 } from "./IconEyeOff-CcCzexKA.js";
(() => {
  try {
    const a =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    a.SENTRY_RELEASE = { id: "1.1.2" };
    const r = new a.Error().stack;

    if (r) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[r] = "670809e4-04aa-457f-b2ac-61757f1bf442";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-670809e4-04aa-457f-b2ac-61757f1bf442";
    }
  } catch {}
})();
const A = "N4Hi";
const T = "jpCO";
const L = "Naqr";
const O = "ixZ8";
const R = "Ymcv";
const W = "ZK15";
const x = "rEFA";
const G = "KCS6";
const $ = "BwMB";
const z = "Q8Jp";
const q = "iE8X";
const K = "Xc8v";
const M = "gqoQ";
const Q = "WqO2";
const U = "DBG6";
const X = "Ic8t";
const Z = "IaES";
const F = "OJ1p";
const H = "mTbv";

const s = {
  page: A,
  container: T,
  logo: L,
  form: O,
  header: R,
  title: W,
  subtitle: x,
  error: G,
  inputs: $,
  inputGroup: z,
  label: q,
  inputWrapper: K,
  input: M,
  inputError: Q,
  fieldError: U,
  hint: X,
  eyeButton: Z,
  submitButton: F,
  backLink: H,
};

export const ResetPassword = (a) => {
  const [r, b] = d("");
  const [E, v] = d("");
  const [d, I] = d(false);
  const [u, B] = d(false);
  const [w, o] = d(null);
  const [p, n] = d(null);
  const [f, m] = d(null);
  const [c, N] = d(false);

  const k = async (i) => {
    i.preventDefault();
    o(null);
    n(null);
    m(null);

    if (!r.trim()) {
      n("Введите новый пароль");
      return;
    }

    if (r.length < 10) {
      n("Минимум 10 символов");
      return;
    }
    if (r.length > 128) {
      n("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(r)) {
      n("Только латиница, цифры и знаки пунктуации");
      return;
    }
    if (r !== E) {
      m("Пароли не совпадают");
      return;
    }
    N(true);
    try {
      await ae.resetPassword({ newPassword: r });
      f("/login");
    } catch (h) {
      if (ab(h)) {
        switch (h.code) {
          case ac.MISSING_FLOW_TOKEN:
          case ac.UNAUTHORIZED:
          case ac.BAD_REQUEST: {
            o("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case ac.VALIDATION_ERROR: {
            n("Пароль не соответствует требованиям");
            break;
          }
          case ac.RATE_LIMIT_EXCEEDED: {
            o("Слишком много попыток. Попробуйте позже");
            break;
          }
          default: {
            o(h.message || "Произошла ошибка");
          }
        }
      } else {
        o("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      N(false);
    }
  };

  return a("div", {
    className: s.page,
    children: a("div", {
      className: s.container,
      children: [
        a("div", { className: s.logo, children: a(ad, {}) }),
        a("form", {
          className: s.form,
          onSubmit: k,
          children: [
            a("div", {
              className: s.header,
              children: [
                a("h1", { className: s.title, children: "Новый пароль" }),
                a("p", {
                  className: s.subtitle,
                  children: "Придумайте новый пароль для вашего аккаунта",
                }),
              ],
            }),
            w && a("div", { className: s.error, children: w }),
            a("div", {
              className: s.inputs,
              children: [
                a("div", {
                  className: s.inputGroup,
                  children: [
                    a("label", {
                      className: s.label,
                      children: "Новый пароль",
                    }),
                    a("div", {
                      className: s.inputWrapper,
                      children: [
                        a("input", {
                          type: d ? "text" : "password",
                          className: `${s.input} ${p ? s.inputError : ""}`,
                          value: r,
                          onInput: (i) => {
                            b(i.target.value);
                            n(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: c,
                        }),
                        a("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => I(!d),
                          children: d
                            ? a(I, { size: 20 })
                            : a(a_1, { size: 20 }),
                        }),
                      ],
                    }),
                    a("span", {
                      className: s.hint,
                      children:
                        "Минимум 10 символов, латиница, цифры и пунктуация",
                    }),
                    p && a("span", { className: s.fieldError, children: p }),
                  ],
                }),
                a("div", {
                  className: s.inputGroup,
                  children: [
                    a("label", {
                      className: s.label,
                      children: "Подтверждение пароля",
                    }),
                    a("div", {
                      className: s.inputWrapper,
                      children: [
                        a("input", {
                          type: u ? "text" : "password",
                          className: `${s.input} ${f ? s.inputError : ""}`,
                          value: E,
                          onInput: (i) => {
                            v(i.target.value);
                            m(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: c,
                        }),
                        a("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => B(!u),
                          children: u
                            ? a(I, { size: 20 })
                            : a(a_1, { size: 20 }),
                        }),
                      ],
                    }),
                    f && a("span", { className: s.fieldError, children: f }),
                  ],
                }),
              ],
            }),
            a(B, {
              type: "submit",
              variant: "primary",
              size: "lg",
              fullWidth: true,
              className: s.submitButton,
              disabled: c,
              children: c ? "Сохранение..." : "Сохранить пароль",
            }),
            a("p", {
              className: s.backLink,
              children: a("a", {
                href: "/login",
                children: "Вернуться ко входу",
              }),
            }),
          ],
        }),
      ],
    }),
  });
};

export { ResetPassword as ResetPassword, ResetPassword as default };
