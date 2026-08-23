import {
  ae as d_1,
  w,
  q as q_1,
  C as x_1,
  ae,
  u,
  af,
  B,
  k,
} from "./index-DBLtLuBZ.js";
import { C } from "./index-CqDyc-Mo.js";
import { I as V_1 } from "./index-6BJWrSY3.js";
import { I, a } from "./IconEyeOff-47Vevy3T.js";
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
      n._sentryDebugIds[t] = "0642d3c9-0dc2-4cf0-9f8b-8c6dc60e39d1";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-0642d3c9-0dc2-4cf0-9f8b-8c6dc60e39d1";
    }
  } catch {}
})();
const W = "l7DU";
const X = "zQoG";
const $ = "TOQE";
const z = "DhSs";
const q = "bQb7";
const F = "xdkA";
const J = "jAvh";
const Q = "pgqU";
const U = "BC8r";
const Y = "ABcI";
const j = "qmMy";
const H = "ROtm";
const K = "uJbF";
const Z = "LXcu";
const ee = "XXSC";
const re = "dGdn";
const te = "nrJJ";
const se = "yM71";

const r = {
  container: W,
  logo: X,
  form: $,
  header: z,
  error: q,
  title: F,
  subtitle: J,
  inputs: Q,
  inputGroup: U,
  inputWrapper: Y,
  input: j,
  label: H,
  inputError: K,
  fieldError: Z,
  eyeButton: ee,
  terms: re,
  submitButton: te,
  loginLink: se,
};

export const Register = (n) => {
  const [t, E] = d_1("");
  const [a, w] = d_1("");
  const [p, A] = d_1(false);
  const [_, m] = d_1(false);
  const [y, i] = d_1(null);
  const [f, c] = d_1(null);
  const [h, o] = d_1(null);
  const [k, g] = d_1("credentials");
  const { register, status, reset } = w();
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

  const B = q_1(
    async (l) => {
      m(false);
      try {
        await register({ email: t, password: a, turnstileToken: l });
        g("verify");
      } catch (b) {
        if (x_1(b)) {
          switch (b.code) {
            case ae.ENTITY_ALREADY_EXISTS: {
              c("Этот email уже зарегистрирован");
              break;
            }
            case ae.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              c("Почта этого домена не поддерживается");
              break;
            }
            case ae.CAPTCHA_FAILED: {
              i("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ae.RATE_LIMIT_EXCEEDED: {
              i("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ae.VALIDATION_ERROR: {
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

  const L = q_1(() => {
    reset();
    g("credentials");
  }, [reset]);

  return u(k, {
    children: [
      u("div", {
        className: r.container,
        children: [
          u("div", { className: r.logo, children: u(af, {}) }),
          k === "credentials"
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
                            className: `${r.input} ${f ? r.inputError : ""}`,
                            value: t,
                            onInput: (l) => {
                              E(l.target.value);
                              c(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: u,
                          }),
                          f &&
                            u("span", {
                              className: r.fieldError,
                              children: f,
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
                                  h ? r.inputError : ""
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
                                onClick: () => A(!p),
                                children: p
                                  ? u(reset, { size: 20 })
                                  : u(a, { size: 20 }),
                              }),
                            ],
                          }),
                          h &&
                            u("span", {
                              className: r.fieldError,
                              children: h,
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
            : u(V_1, { email: t, onBack: L }),
        ],
      }),
      u(status, { isOpen: _, onClose: () => m(false), onVerify: B }),
    ],
  });
};

export { Register as Register, Register as default };
