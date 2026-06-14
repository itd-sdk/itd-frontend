import {
  ac as d_1,
  q_1_1 as x_1,
  q as q_1,
  ab,
  ac,
  a,
  ad,
  ab as ab_1,
} from "./index-BAlLDjSl.js";
import { C } from "./index-BP5ArN5c.js";
import { C as C_1 } from "./index-7aCb4nBj.js";
import { q_1 as q_1_1, a as a_1 } from "./IconEyeOff-_f-Lat8q.js";
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
    a.SENTRY_RELEASE = { id: "1.1.1" };
    const t = new a.Error().stack;

    if (t) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[t] = "ade8061a-0539-4b54-8253-20ef6baf4ac6";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-ade8061a-0539-4b54-8253-20ef6baf4ac6";
    }
  } catch {}
})();
const W = "Vgl9";
const G = "bVYs";
const U = "Usbg";
const Y = "Pey1";
const $ = "CAww";
const q = "RkMJ";
const z = "y1Gh";
const j = "VjLj";
const F = "sWep";
const H = "U4lN";
const J = "p5bw";
const X = "OSax";
const K = "b9qg";
const Q = "qH5l";
const Z = "rkDZ";
const ee = "NY8K";
const re = "OJSU";
const te = "wUP9";
const se = "tbpQ";

const r = {
  page: W,
  container: G,
  logo: U,
  form: Y,
  header: $,
  error: q,
  title: z,
  subtitle: j,
  inputs: F,
  inputGroup: H,
  inputWrapper: J,
  input: X,
  label: K,
  inputError: Q,
  fieldError: Z,
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
  const { register, status, reset } = x_1();
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
        if (ab(b)) {
          switch (b.code) {
            case ac.ENTITY_ALREADY_EXISTS: {
              c("Этот email уже зарегистрирован");
              break;
            }
            case ac.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              c("Этот email домен не разрешён");
              break;
            }
            case ac.CAPTCHA_FAILED: {
              i("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ac.RATE_LIMIT_EXCEEDED: {
              i("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ac.VALIDATION_ERROR: {
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

  return a("div", {
    className: r.page,
    children: [
      a("div", {
        className: r.container,
        children: [
          a("div", { className: r.logo, children: a(ad, {}) }),
          A === "credentials"
            ? a("form", {
                className: r.form,
                onSubmit: D,
                children: [
                  a("div", {
                    className: r.header,
                    children: [
                      a("h1", {
                        className: r.title,
                        children: "Создание аккаунта",
                      }),
                      a("p", {
                        className: r.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  g && a("div", { className: r.error, children: g }),
                  a("div", {
                    className: r.inputs,
                    children: [
                      a("div", {
                        className: r.inputGroup,
                        children: [
                          a("label", {
                            className: r.label,
                            children: "E-Mail",
                          }),
                          a("input", {
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
                            a("span", {
                              className: r.fieldError,
                              children: f,
                            }),
                        ],
                      }),
                      a("div", {
                        className: r.inputGroup,
                        children: [
                          a("label", {
                            className: r.label,
                            children: "Пароль",
                          }),
                          a("div", {
                            className: r.inputWrapper,
                            children: [
                              a("input", {
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
                              a("button", {
                                type: "button",
                                className: r.eyeButton,
                                onClick: () => _(!p),
                                children: p
                                  ? a(q_1_1, { size: 20 })
                                  : a(a_1, { size: 20 }),
                              }),
                            ],
                          }),
                          h &&
                            a("span", {
                              className: r.fieldError,
                              children: h,
                            }),
                        ],
                      }),
                    ],
                  }),
                  a("p", {
                    className: r.terms,
                    children: [
                      "Продолжая, вы соглашаетесь с",
                      " ",
                      a("a", {
                        href: "/terms",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "условиями использования",
                      }),
                      " и",
                      " ",
                      a("a", {
                        href: "/privacy",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "политикой конфиденциальности",
                      }),
                    ],
                  }),
                  a(ab_1, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: r.submitButton,
                    disabled: u,
                    children: u ? "Регистрация..." : "Продолжить",
                  }),
                  a("p", {
                    className: r.loginLink,
                    children: [
                      "Уже есть аккаунт? ",
                      a("a", { href: "/login", children: "Войти" }),
                    ],
                  }),
                ],
              })
            : a(C_1, { email: t, onBack: S }),
        ],
      }),
      a(status, { isOpen: k, onClose: () => m(false), onVerify: L }),
    ],
  });
};

export { Register as Register, Register as default };
