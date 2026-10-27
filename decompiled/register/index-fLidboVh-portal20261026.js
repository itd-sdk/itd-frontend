import {
  d,
  a,
  q as q_1,
  y,
  I_1 as z_1,
  u,
  I,
  B,
  S,
} from "./index-BQxlThnW-portal20261026.js";
import { C } from "./index-GGTxnMRT-portal20261026.js";
import { S as S_1 } from "./index-DfAK_-iq-portal20261026.js";
import { I as I_1, a as a_1 } from "./IconEyeOff-ONzFZVHN-portal20261026.js";
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
    const a = new t.Error().stack;

    if (a) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[a] = "0973aa2e-e7f5-4f40-916c-3a2be19a36a3";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-0973aa2e-e7f5-4f40-916c-3a2be19a36a3";
    }
  } catch {}
})();
const c = "От 8 до 100 символов, хотя бы одна латинская буква и одна цифра.";
function G(t) {
  return t.length >= 8 && t.length <= 100 && /[A-Za-z]/.test(t) && /\d/.test(t);
}
function x(t) {
  return t.code === "INVALID_PASSWORD"
    ? true
    : t.code === "VALIDATION_ERROR" &&
        [
          "Password must be 8-100 chars with at least 1 letter and 1 number",
          "Password requirement not met",
          "Password is required",
        ].includes(t.message);
}
const q = "Vig6";
const H = "BnPi";
const Y = "zvBL";
const $ = "DFlq";
const U = "ZSZb";
const Z = "Fe72";
const X = "A0N1";
const j = "r4Y7";
const J = "g0MD";
const Q = "erMT";
const K = "WxJy";
const ee = "NOii";
const re = "xPPz";
const te = "oCDa";
const se = "wDfG";
const ae = "xymj";
const ne = "BUPC";
const ie = "kd1I";
const le = "hdvr";

const r = {
  container: q,
  logo: H,
  form: Y,
  header: $,
  error: U,
  title: Z,
  subtitle: X,
  inputs: j,
  inputGroup: J,
  inputWrapper: Q,
  input: K,
  label: ee,
  inputError: re,
  fieldError: te,
  passwordHint: se,
  eyeButton: ae,
  terms: ne,
  submitButton: ie,
  loginLink: le,
};

export const Register = (t) => {
  const [a, g] = d("");
  const [d, _] = d("");
  const [u, v] = d(false);
  const [D, f] = d(false);
  const [y, s] = d(null);
  const [b, l] = d(null);
  const [E, p] = d(null);
  const [R, N] = d("credentials");
  const { register, status, reset } = a();
  const m = status === "loading";

  const S = (i) => {
    i.preventDefault();
    s(null);
    l(null);
    p(null);

    if (!a.trim()) {
      l("Введите email");
      return;
    }

    if (!G(d)) {
      p(c);
      s(c);
      return;
    }
    f(true);
  };

  const T = q_1(
    async (i) => {
      f(false);
      try {
        await register({ email: a, password: d, turnstileToken: i });
        N("verify");
      } catch (h) {
        if (y(h)) {
          if (x(h)) {
            p(c);
            s(c);
            return;
          }
          switch (h.code) {
            case z_1.ENTITY_ALREADY_EXISTS: {
              l("Этот email уже зарегистрирован");
              break;
            }
            case z_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              l("Почта этого домена не поддерживается");
              break;
            }
            case z_1.CAPTCHA_FAILED: {
              s("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case z_1.RATE_LIMIT_EXCEEDED: {
              s("Слишком много попыток. Попробуйте позже");
              break;
            }
            case z_1.VALIDATION_ERROR: {
              s("Проверьте введённые данные");
              break;
            }
            default: {
              s(h.message || "Ошибка регистрации");
            }
          }
        } else {
          s("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [a, d, register]
  );

  const k = q_1(() => {
    reset();
    N("credentials");
  }, [reset]);

  return u(S, {
    children: [
      u("div", {
        className: r.container,
        children: [
          u("div", { className: r.logo, children: u(reset, {}) }),
          R === "credentials"
            ? u("form", {
                className: r.form,
                onSubmit: S,
                children: [
                  u("div", {
                    className: r.header,
                    children: [
                      u("h1", {
                        className: r.title,
                        children: "Создание аккаунта",
                      }),
                      u("p", {
                        className: r.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  y &&
                    u("div", {
                      className: r.error,
                      role: "alert",
                      children: y,
                    }),
                  u("div", {
                    className: r.inputs,
                    children: [
                      u("div", {
                        className: r.inputGroup,
                        children: [
                          u("label", {
                            className: r.label,
                            htmlFor: "register-email",
                            children: "E-Mail",
                          }),
                          u("input", {
                            id: "register-email",
                            type: "email",
                            autoComplete: "email",
                            className: `${r.input} ${b ? r.inputError : ""}`,
                            value: a,
                            onInput: (i) => {
                              g(i.target.value);
                              l(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: m,
                          }),
                          b &&
                            u("span", {
                              className: r.fieldError,
                              children: b,
                            }),
                        ],
                      }),
                      u("div", {
                        className: r.inputGroup,
                        children: [
                          u("label", {
                            className: r.label,
                            htmlFor: "register-password",
                            children: "Пароль",
                          }),
                          u("div", {
                            className: r.inputWrapper,
                            children: [
                              u("input", {
                                id: "register-password",
                                type: u ? "text" : "password",
                                autoComplete: "new-password",
                                "aria-describedby": "register-password-hint",
                                "aria-invalid": !!E,
                                className: `${r.input} ${
                                  E ? r.inputError : ""
                                }`,
                                value: d,
                                onInput: (i) => {
                                  _(i.target.value);

                                  if (E) {
                                    s(null);
                                  }

                                  p(null);
                                },
                                placeholder: "Введите пароль",
                                disabled: m,
                              }),
                              u("button", {
                                type: "button",
                                "aria-label": u
                                  ? "Скрыть пароль"
                                  : "Показать пароль",
                                className: r.eyeButton,
                                onClick: () => v(!u),
                                children: u
                                  ? u(I_1, { size: 20 })
                                  : u(a_1, { size: 20 }),
                              }),
                            ],
                          }),
                          u("p", {
                            id: "register-password-hint",
                            className: r.passwordHint,
                            children: c,
                          }),
                        ],
                      }),
                    ],
                  }),
                  u("p", {
                    className: r.terms,
                    children: [
                      "Продолжая, вы соглашаетесь с",
                      " ",
                      u("a", {
                        href: "/terms",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "условиями использования",
                      }),
                      " и",
                      " ",
                      u("a", {
                        href: "/privacy",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "политикой конфиденциальности",
                      }),
                    ],
                  }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: r.submitButton,
                    disabled: m,
                    children: m ? "Регистрация..." : "Продолжить",
                  }),
                  u("p", {
                    className: r.loginLink,
                    children: [
                      "Уже есть аккаунт? ",
                      u("a", { href: "/login", children: "Войти" }),
                    ],
                  }),
                ],
              })
            : u(S_1, { email: a, onBack: k }),
        ],
      }),
      u(status, { isOpen: D, onClose: () => f(false), onVerify: T }),
    ],
  });
};

export { Register as Register, Register as default };
