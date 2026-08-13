import {
  ae as d_1,
  q_1 as w_1,
  q as q_1,
  C as x_1,
  ae,
  u,
  af,
  x_1 as x_1_1,
  k,
} from "./index-B9FitUXy.js";
import { C } from "./index-CanNJpc-.js";
import { k as k_1 } from "./index-baAbDm8Z.js";
import { I, a } from "./IconEyeOff-D9eoRMHE.js";
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
    const t = new a.Error().stack;

    if (t) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[t] = "541cb5c7-9ef7-48e5-9a26-7f3ccba35b01";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-541cb5c7-9ef7-48e5-9a26-7f3ccba35b01";
    }
  } catch {}
})();
const G = "ubV1";
const $ = "mqZe";
const q = "ZmQq";
const X = "DAKV";
const Y = "R7gQ";
const z = "PQ9g";
const H = "JuOx";
const Q = "gXk9";
const Z = "ROdG";
const F = "ibbK";
const J = "qrfP";
const K = "RSm7";
const U = "SXS7";
const j = "s0Te";
const ee = "JLMW";
const re = "HbY4";
const te = "oHbm";
const se = "xZ5n";

const r = {
  container: G,
  logo: $,
  form: q,
  header: X,
  error: Y,
  title: z,
  subtitle: H,
  inputs: Q,
  inputGroup: Z,
  inputWrapper: F,
  input: J,
  label: K,
  inputError: U,
  fieldError: j,
  eyeButton: ee,
  terms: re,
  submitButton: te,
  loginLink: se,
};

export const Register = (a) => {
  const [t, E] = d_1("");
  const [n, v] = d_1("");
  const [p, _] = d_1(false);
  const [k, m] = d_1(false);
  const [g, i] = d_1(null);
  const [f, c] = d_1(null);
  const [h, o] = d_1(null);
  const [A, y] = d_1("credentials");
  const { register, status, reset } = w_1();
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

    if (!n.trim()) {
      o("Введите пароль");
      return;
    }
    if (n.length < 10) {
      o("Минимум 10 символов");
      return;
    }
    if (n.length > 128) {
      o("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(n)) {
      o("Только латиница, цифры и знаки пунктуации");
      return;
    }
    m(true);
  };

  const L = q_1(
    async (l) => {
      m(false);
      try {
        await register({ email: t, password: n, turnstileToken: l });
        y("verify");
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
    [t, n, register]
  );

  const S = q_1(() => {
    reset();
    y("credentials");
  }, [reset]);

  return u(k, {
    children: [
      u("div", {
        className: r.container,
        children: [
          u("div", { className: r.logo, children: u(af, {}) }),
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
                  g && u("div", { className: r.error, children: g }),
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
                                value: n,
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
                  u(x_1_1, {
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
            : u(k_1, { email: t, onBack: S }),
        ],
      }),
      u(status, { isOpen: k, onClose: () => m(false), onVerify: L }),
    ],
  });
};

export { Register as Register, Register as default };
