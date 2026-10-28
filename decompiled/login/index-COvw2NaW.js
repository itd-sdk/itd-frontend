import {
  d,
  d as d_1,
  q as q_1,
  o,
  r,
  u,
  I,
  d_1 as d_1_1,
  I_1 as S_1,
} from "./index-AoERIL5v.js";
import { C } from "./index-CkoXlyAD.js";
import { d_2 as V_1 } from "./index-CbZqIuYP.js";
import { I as I_1, d as d_2 } from "./IconEyeOff-DuL6Bcb3.js";
const q = "HPbr";
const R = "quLd";
const W = "qIDh";
const G = "qdEk";
const U = "luIb";
const x = "QsC8";
const z = "iSn1";
const H = "CouB";
const F = "RxX9";
const Q = "YptM";
const X = "VsBJ";
const Y = "Qsbq";
const Z = "M7Mf";
const $ = "H2Pt";
const J = "TD2y";
const K = "Rdep";
const j = "Z6un";
const ee = "qZV7";

const s = {
  container: q,
  logo: R,
  form: W,
  header: G,
  error: U,
  title: x,
  subtitle: z,
  inputs: H,
  inputGroup: F,
  label: Q,
  inputWrapper: X,
  input: Y,
  inputError: Z,
  fieldError: $,
  eyeButton: J,
  forgotPassword: K,
  submitButton: j,
  signupLink: ee,
};

export const Login = (se) => {
  const [o, C] = d("");
  const [i, g] = d("");
  const [u, y] = d(false);
  const [A, d] = d(false);
  const [h, t] = d(null);
  const [p, m] = d(null);
  const [I, f] = d("credentials");
  const { login, status, reset } = d_1();
  const l = status === "loading";

  const w = (r) => {
    r.preventDefault();
    t(null);
    m(null);

    if (!o.trim()) {
      t("Введите email");
      return;
    }

    if (!i.trim()) {
      t("Введите пароль");
      return;
    }
    d(true);
  };

  const L = q_1(
    async (r) => {
      d(false);
      try {
        if (
          (await login({ email: o, password: i, turnstileToken: r })) !==
          "authenticated"
        ) {
          f("verify");
        }
      } catch (c) {
        if (o(c)) {
          switch (c.code) {
            case r.ACCOUNT_INVALID_CREDENTIALS: {
              t("Неверный email или пароль");
              break;
            }
            case r.ACCOUNT_DEACTIVATED: {
              t("Аккаунт деактивирован");
              break;
            }
            case r.ACCOUNT_TEMPORARILY_LOCKED: {
              t("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case r.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case r.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case r.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              m("Почта этого домена не поддерживается");
              break;
            }
            default: {
              t(c.message || "Ошибка входа");
            }
          }
        } else {
          t("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [o, i, login]
  );

  const k = q_1(() => {
    reset();
    f("credentials");
  }, [reset]);

  return u(S_1, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(I, {}) }),
          I === "credentials"
            ? u("form", {
                className: s.form,
                onSubmit: w,
                children: [
                  u("div", {
                    className: s.header,
                    children: [
                      u("h1", { className: s.title, children: "Вход" }),
                      u("p", {
                        className: s.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  h && u("div", { className: s.error, children: h }),
                  u("div", {
                    className: s.inputs,
                    children: [
                      u("div", {
                        className: s.inputGroup,
                        children: [
                          u("label", {
                            className: s.label,
                            children: "E-Mail",
                          }),
                          u("input", {
                            type: "email",
                            className: `${s.input} ${p ? s.inputError : ""}`,
                            value: o,
                            onInput: (r) => {
                              C(r.target.value);
                              m(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: l,
                          }),
                          p &&
                            u("span", {
                              className: s.fieldError,
                              children: p,
                            }),
                        ],
                      }),
                      u("div", {
                        className: s.inputGroup,
                        children: [
                          u("label", {
                            className: s.label,
                            children: "Пароль",
                          }),
                          u("div", {
                            className: s.inputWrapper,
                            children: [
                              u("input", {
                                type: u ? "text" : "password",
                                className: s.input,
                                value: i,
                                onInput: (r) => g(r.target.value),
                                placeholder: "••••••••••••",
                                disabled: l,
                              }),
                              u("button", {
                                type: "button",
                                className: s.eyeButton,
                                onClick: () => y(!u),
                                children: u
                                  ? u(I_1, { size: 20 })
                                  : u(d_2, { size: 20 }),
                              }),
                            ],
                          }),
                          u("a", {
                            href: "/forgot-password",
                            className: s.forgotPassword,
                            children: "Забыли пароль?",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u(d_1_1, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: s.submitButton,
                    disabled: l,
                    children: l ? "Вход..." : "Войти",
                  }),
                  u("p", {
                    className: s.signupLink,
                    children: [
                      "Еще нет аккаунта? ",
                      u("a", {
                        href: "/register",
                        children: "Создать аккаунт",
                      }),
                    ],
                  }),
                ],
              })
            : u(V_1, { email: o, onBack: k }),
        ],
      }),
      u(C, { isOpen: A, onClose: () => d(false), onVerify: L }),
    ],
  });
};

export { Login as Login, Login as default };
