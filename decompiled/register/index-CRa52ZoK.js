import {
  ac as d_1,
  C as x_1,
  q as q_1,
  ab,
  ac,
  a,
  ad,
  B,
} from "./index-BewGW5_v.js";
import { C } from "./index-Cmc8MVwB.js";
import { a_1 as V_1 } from "./index-DbeDp2u9.js";
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
    const t = new a.Error().stack;

    if (t) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[t] = "15176f1c-8e01-4459-a319-b7a1a87bedd4";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-15176f1c-8e01-4459-a319-b7a1a87bedd4";
    }
  } catch {}
})();
const z = "l7xU";
const P = "wORr";
const W = "sUhv";
const $ = "p0a3";
const Y = "ieMG";
const U = "Ez3t";
const F = "ZxdI";
const K = "xoxR";
const X = "s1OB";
const Z = "mkmx";
const q = "St51";
const H = "hsZ2";
const j = "BYKy";
const J = "vIK6";
const Q = "o8o0";
const ee = "zlBb";
const re = "sDd2";
const te = "RyTi";
const se = "c9NG";

const r = {
  page: z,
  container: P,
  logo: W,
  form: $,
  header: Y,
  error: U,
  title: F,
  subtitle: K,
  inputs: X,
  inputGroup: Z,
  inputWrapper: q,
  input: H,
  label: j,
  inputError: J,
  fieldError: Q,
  eyeButton: ee,
  terms: re,
  submitButton: te,
  loginLink: se,
};

export const Register = (a) => {
  const [t, E] = d_1("");
  const [n, w] = d_1("");
  const [p, _] = d_1(false);
  const [k, m] = d_1(false);
  const [y, i] = d_1(null);
  const [h, c] = d_1(null);
  const [f, o] = d_1(null);
  const [A, g] = d_1("credentials");
  const { register, status, reset } = x_1();
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

  const D = q_1(
    async (l) => {
      m(false);
      try {
        await register({ email: t, password: n, turnstileToken: l });
        g("verify");
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

  const T = q_1(() => {
    reset();
    g("credentials");
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
                onSubmit: C,
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
                  y && a("div", { className: r.error, children: y }),
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
                            a("span", {
                              className: r.fieldError,
                              children: h,
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
                                  f ? r.inputError : ""
                                }`,
                                value: n,
                                onInput: (l) => {
                                  w(l.target.value);
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
                                  ? a(reset, { size: 20 })
                                  : a(a_1, { size: 20 }),
                              }),
                            ],
                          }),
                          f &&
                            a("span", {
                              className: r.fieldError,
                              children: f,
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
                  a(status, {
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
            : a(V_1, { email: t, onBack: T }),
        ],
      }),
      a(C, { isOpen: k, onClose: () => m(false), onVerify: D }),
    ],
  });
};

export { Register as Register, Register as default };
