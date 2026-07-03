import {
  ac as d_1,
  V_1 as x_1,
  q as q_1,
  ab,
  ac,
  a,
  ad,
  B,
} from "./index-DuQT229k.js";
import { C } from "./index-C8OsYe6v.js";
import { I as V_1 } from "./index-CPGZmsWm.js";
import { I, a as a_1 } from "./IconEyeOff-CDOK-c3g.js";
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
      a._sentryDebugIds[t] = "80fc853f-32d6-4d76-8666-ee8278262dcf";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-80fc853f-32d6-4d76-8666-ee8278262dcf";
    }
  } catch {}
})();
const X = "MVbk";
const M = "PzhY";
const G = "W8Xr";
const Y = "SxYn";
const $ = "EXom";
const z = "gjPw";
const F = "WZ0c";
const H = "sI2s";
const Z = "rLtS";
const j = "P6J7";
const q = "b1iC";
const J = "SNBf";
const K = "S0Zv";
const U = "kKfg";
const Q = "bDXO";
const ee = "tXFN";
const re = "wXsD";
const te = "HgxG";
const se = "Btcd";

const r = {
  page: X,
  container: M,
  logo: G,
  form: Y,
  header: $,
  error: z,
  title: F,
  subtitle: H,
  inputs: Z,
  inputGroup: j,
  inputWrapper: q,
  input: J,
  label: K,
  inputError: U,
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

  const S = q_1(
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

  const B = q_1(() => {
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
                  a(B, {
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
            : a(V_1, { email: t, onBack: B }),
        ],
      }),
      a(status, { isOpen: k, onClose: () => m(false), onVerify: S }),
    ],
  });
};

export { Register as Register, Register as default };
