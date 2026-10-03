import {
  aB as d_1,
  Y as Y_1,
  q as q_1,
  K as K_1,
  aB,
  u,
  aC,
  Y_1 as Y_1_1,
  S,
} from "./index-CsuAWxkQ.js";
import { C } from "./index-DT1tSoMS.js";
import { S as S_1 } from "./index-S505uKQX.js";
import { I, a } from "./IconEyeOff-s_19qPRg.js";
(() => {
  try {
    const n =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    n.SENTRY_RELEASE = { id: "1.1.2" };
    const t = new n.Error().stack;

    if (t) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[t] = "cc91b068-8463-4847-9d4c-76c433a0bdb0";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-cc91b068-8463-4847-9d4c-76c433a0bdb0";
    }
  } catch {}
})();
const G = "ZkLg";
const Y = "B3xS";
const $ = "tSkc";
const z = "Xbpk";
const X = "jJSD";
const F = "nRoV";
const J = "Iysk";
const j = "yYDW";
const H = "w5tR";
const U = "PnJL";
const Z = "TJLM";
const q = "EZyH";
const K = "XFcA";
const Q = "jWiV";
const ee = "DsSa";
const re = "sVGR";
const te = "BRzr";
const se = "UIRa";

const r = {
  container: G,
  logo: Y,
  form: $,
  header: z,
  error: X,
  title: F,
  subtitle: J,
  inputs: j,
  inputGroup: H,
  inputWrapper: U,
  input: Z,
  label: q,
  inputError: K,
  fieldError: Q,
  eyeButton: ee,
  terms: re,
  submitButton: te,
  loginLink: se,
};

export const Register = (n) => {
  const [t, E] = d_1("");
  const [a, w] = d_1("");
  const [p, v] = d_1(false);
  const [_, m] = d_1(false);
  const [y, i] = d_1(null);
  const [h, c] = d_1(null);
  const [f, o] = d_1(null);
  const [A, g] = d_1("credentials");
  const { register, status, reset } = Y_1();
  const u = status === "loading";

  const D = (l) => {
    l.preventDefault();
    i(null);
    c(null);
    o(null);

    if (!t.trim()) {
      c("Введите email");
      return;
    }

    if (!a.trim()) {
      o("Введите пароль");
      return;
    }
    if (a.length < 10) {
      o("Минимум 10 символов");
      return;
    }
    if (a.length > 128) {
      o("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(a)) {
      o("Только латиница, цифры и знаки пунктуации");
      return;
    }
    m(true);
  };

  const L = q_1(
    async (l) => {
      m(false);
      try {
        await register({ email: t, password: a, turnstileToken: l });
        g("verify");
      } catch (b) {
        if (K_1(b)) {
          switch (b.code) {
            case aB.ENTITY_ALREADY_EXISTS: {
              c("Этот email уже зарегистрирован");
              break;
            }
            case aB.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              c("Почта этого домена не поддерживается");
              break;
            }
            case aB.CAPTCHA_FAILED: {
              i("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case aB.RATE_LIMIT_EXCEEDED: {
              i("Слишком много попыток. Попробуйте позже");
              break;
            }
            case aB.VALIDATION_ERROR: {
              i("Проверьте введённые данные");
              break;
            }
            default: {
              i(b.message || "Ошибка регистрации");
            }
          }
        } else {
          i("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [t, a, register]
  );

  const S = q_1(() => {
    reset();
    g("credentials");
  }, [reset]);

  return u(S, {
    children: [
      u("div", {
        className: r.container,
        children: [
          u("div", { className: r.logo, children: u(aC, {}) }),
          A === "credentials"
            ? u("form", {
                className: r.form,
                onSubmit: D,
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
                  y && u("div", { className: r.error, children: y }),
                  u("div", {
                    className: r.inputs,
                    children: [
                      u("div", {
                        className: r.inputGroup,
                        children: [
                          u("label", {
                            className: r.label,
                            children: "E-Mail",
                          }),
                          u("input", {
                            type: "email",
                            className: `${r.input} ${h ? r.inputError : ""}`,
                            value: t,
                            onInput: (l) => {
                              E(l.target.value);
                              c(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: u,
                          }),
                          h &&
                            u("span", {
                              className: r.fieldError,
                              children: h,
                            }),
                        ],
                      }),
                      u("div", {
                        className: r.inputGroup,
                        children: [
                          u("label", {
                            className: r.label,
                            children: "Пароль",
                          }),
                          u("div", {
                            className: r.inputWrapper,
                            children: [
                              u("input", {
                                type: p ? "text" : "password",
                                className: `${r.input} ${
                                  f ? r.inputError : ""
                                }`,
                                value: a,
                                onInput: (l) => {
                                  w(l.target.value);
                                  o(null);
                                },
                                placeholder: "Минимум 10 символов",
                                disabled: u,
                              }),
                              u("button", {
                                type: "button",
                                className: r.eyeButton,
                                onClick: () => v(!p),
                                children: p
                                  ? u(reset, { size: 20 })
                                  : u(a, { size: 20 }),
                              }),
                            ],
                          }),
                          f &&
                            u("span", {
                              className: r.fieldError,
                              children: f,
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
                  u(Y_1_1, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: r.submitButton,
                    disabled: u,
                    children: u ? "Регистрация..." : "Продолжить",
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
            : u(S_1, { email: t, onBack: S }),
        ],
      }),
      u(status, { isOpen: _, onClose: () => m(false), onVerify: L }),
    ],
  });
};

export { Register as Register, Register as default };
