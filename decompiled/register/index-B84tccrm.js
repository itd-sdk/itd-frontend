import {
  ae_1 as d_1,
  q_1 as w_1,
  q as q_1,
  c as x_1,
  ae as ae_1,
  u,
  af,
  B,
  S,
} from "./index-gHxZkwFX.js";
import { c, C } from "./index-DNhfAHWL.js";
import { B as B_1 } from "./index-BzkQMQKD.js";
import { I, a } from "./IconEyeOff-Cv1a3BJb.js";
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
    n.SENTRY_RELEASE = { id: "1.1.4" };
    const t = new n.Error().stack;

    if (t) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[t] = "cc405c93-222e-4915-8750-6290e3272511";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-cc405c93-222e-4915-8750-6290e3272511";
    }
  } catch {}
})();
const $ = "V4gn";
const q = "wTg2";
const z = "U4yQ";
const K = "qzIb";
const X = "TSt5";
const F = "OKPE";
const H = "XOFQ";
const Y = "HroK";
const J = "JgR4";
const Q = "TG9t";
const Z = "KHt4";
const j = "uqrf";
const ee = "xUXO";
const re = "LpVP";
const te = "yK7U";
const se = "BZmU";
const ne = "hkfc";
const ae = "SvJq";

const r = {
  container: $,
  logo: q,
  form: z,
  header: K,
  error: X,
  title: F,
  subtitle: H,
  inputs: Y,
  inputGroup: J,
  inputWrapper: Q,
  input: Z,
  label: j,
  inputError: ee,
  fieldError: re,
  eyeButton: te,
  terms: se,
  submitButton: ne,
  loginLink: ae,
};

export const Register = (n) => {
  const [t, b] = d_1("");
  const [a, v] = d_1("");
  const [p, _] = d_1(false);
  const [k, m] = d_1(false);
  const [y, i] = d_1(null);
  const [h, c] = d_1(null);
  const [f, o] = d_1(null);
  const [A, g] = d_1("credentials");
  const { register, status, reset } = w_1();
  const u = status === "loading";

  const C = (l) => {
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
    async (l, S) => {
      m(false);
      try {
        await register({ email: t, password: a, ...c(l, S) });
        g("verify");
      } catch (E) {
        if (x_1(E)) {
          switch (E.code) {
            case ae_1.ENTITY_ALREADY_EXISTS: {
              c("Этот email уже зарегистрирован");
              break;
            }
            case ae_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              c("Почта этого домена не поддерживается");
              break;
            }
            case ae_1.CAPTCHA_FAILED: {
              i("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ae_1.RATE_LIMIT_EXCEEDED: {
              i("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ae_1.VALIDATION_ERROR: {
              i("Проверьте введённые данные");
              break;
            }
            default: {
              i(E.message || "Ошибка регистрации");
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

  return u(S, {
    children: [
      u("div", {
        className: r.container,
        children: [
          u("div", { className: r.logo, children: u(af, {}) }),
          A === "credentials"
            ? u("form", {
                className: r.form,
                onSubmit: C,
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
                              b(l.target.value);
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
                                  v(l.target.value);
                                  o(null);
                                },
                                placeholder: "Минимум 10 символов",
                                disabled: u,
                              }),
                              u("button", {
                                type: "button",
                                className: r.eyeButton,
                                onClick: () => _(!p),
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
            : u(B_1, { email: t, onBack: L }),
        ],
      }),
      u(C, {
        isOpen: k,
        onClose: () => m(false),
        onVerify: B,
        action: "register",
      }),
    ],
  });
};

export { Register as Register, Register as default };
