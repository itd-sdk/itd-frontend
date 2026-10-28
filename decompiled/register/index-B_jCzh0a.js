import {
  d,
  d as d_1,
  q as q_1,
  r_1 as o_1,
  r as r_1,
  u,
  q_1 as q_1_1,
  B,
  S,
} from "./index-AoERIL5v.js";
import { C } from "./index-CkoXlyAD.js";
import { S as S_1 } from "./index-CbZqIuYP.js";
import { q_1 as q_1_2, d as d_2 } from "./IconEyeOff-DuL6Bcb3.js";
const c = "От 8 до 100 символов, хотя бы одна латинская буква и одна цифра.";
function z(t) {
  return t.length >= 8 && t.length <= 100 && /[A-Za-z]/.test(t) && /\d/.test(t);
}
function q(t) {
  return t.code === "INVALID_PASSWORD"
    ? true
    : t.code === "VALIDATION_ERROR" &&
        [
          "Password must be 8-100 chars with at least 1 letter and 1 number",
          "Password requirement not met",
          "Password is required",
        ].includes(t.message);
}
const F = "bMta";
const H = "m3OM";
const $ = "b6Gg";
const x = "Xz8L";
const X = "ElfZ";
const Y = "Wrvw";
const Z = "lVnP";
const j = "TC8f";
const K = "pEGU";
const Q = "ne7h";
const J = "mm1U";
const ee = "oCxS";
const re = "lO9K";
const te = "l9Nz";
const se = "mp57";
const ae = "lUoj";
const ne = "NAfU";
const ie = "qhYU";
const le = "r9TS";

const r = {
  container: F,
  logo: H,
  form: $,
  header: x,
  error: X,
  title: Y,
  subtitle: Z,
  inputs: j,
  inputGroup: K,
  inputWrapper: Q,
  input: J,
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
  const [i, y] = d("");
  const [d, v] = d("");
  const [u, C] = d(false);
  const [R, f] = d(false);
  const [N, s] = d(null);
  const [E, l] = d(null);
  const [b, p] = d(null);
  const [S, g] = d("credentials");
  const { register, status, reset } = d_1();
  const m = status === "loading";

  const O = (n) => {
    n.preventDefault();
    s(null);
    l(null);
    p(null);

    if (!i.trim()) {
      l("Введите email");
      return;
    }

    if (!z(d)) {
      p(c);
      s(c);
      return;
    }
    f(true);
  };

  const T = q_1(
    async (n) => {
      f(false);
      try {
        await register({ email: i, password: d, turnstileToken: n });
        g("verify");
      } catch (h) {
        if (o_1(h)) {
          if (q(h)) {
            p(c);
            s(c);
            return;
          }
          switch (h.code) {
            case r_1.ENTITY_ALREADY_EXISTS: {
              l("Этот email уже зарегистрирован");
              break;
            }
            case r_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              l("Почта этого домена не поддерживается");
              break;
            }
            case r_1.CAPTCHA_FAILED: {
              s("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case r_1.RATE_LIMIT_EXCEEDED: {
              s("Слишком много попыток. Попробуйте позже");
              break;
            }
            case r_1.VALIDATION_ERROR: {
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
    [i, d, register]
  );

  const k = q_1(() => {
    reset();
    g("credentials");
  }, [reset]);

  return u(S, {
    children: [
      u("div", {
        className: r.container,
        children: [
          u("div", { className: r.logo, children: u(q_1_1, {}) }),
          S === "credentials"
            ? u("form", {
                className: r.form,
                onSubmit: O,
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
                  N &&
                    u("div", {
                      className: r.error,
                      role: "alert",
                      children: N,
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
                            className: `${r.input} ${E ? r.inputError : ""}`,
                            value: i,
                            onInput: (n) => {
                              y(n.target.value);
                              l(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: m,
                          }),
                          E &&
                            u("span", {
                              className: r.fieldError,
                              children: E,
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
                                "aria-invalid": !!b,
                                className: `${r.input} ${
                                  b ? r.inputError : ""
                                }`,
                                value: d,
                                onInput: (n) => {
                                  v(n.target.value);

                                  if (b) {
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
                                onClick: () => C(!u),
                                children: u
                                  ? u(q_1_2, { size: 20 })
                                  : u(d_2, { size: 20 }),
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
            : u(S_1, { email: i, onBack: k }),
        ],
      }),
      u(C, { isOpen: R, onClose: () => f(false), onVerify: T }),
    ],
  });
};

export { Register as Register, Register as default };
