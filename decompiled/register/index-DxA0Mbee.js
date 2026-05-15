import {
  ab as d_1,
  C_1 as x_1,
  q as q_1,
  aa,
  ab,
  a,
  ac,
  B,
} from "./index-7xRaK15k.js";
import { C } from "./index-i6WLEtuK.js";
import { C as C_1 } from "./index-R2xnohpw.js";
import { q_1 as q_1_1, a as a_1 } from "./IconEyeOff-DAFH4tzs.js";
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
    const s = new a.Error().stack;

    if (s) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[s] = "d552f539-8234-4ea9-aebb-5467e357c4b3";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-d552f539-8234-4ea9-aebb-5467e357c4b3";
    }
  } catch {}
})();
const G = "eGRP";
const P = "RQN5";
const z = "WdEr";
const $ = "mpOa";
const X = "EzLD";
const Y = "eiMe";
const q = "L64o";
const F = "SvSu";
const U = "s8NZ";
const H = "vAIr";
const J = "BUx0";
const Q = "WEcz";
const Z = "aMDR";
const j = "BqsJ";
const K = "V4lO";
const ee = "eG2o";
const re = "xoeB";
const se = "oN88";
const te = "sDXV";

const r = {
  page: G,
  container: P,
  logo: z,
  form: $,
  header: X,
  error: Y,
  title: q,
  subtitle: F,
  inputs: U,
  inputGroup: H,
  inputWrapper: J,
  input: Q,
  label: Z,
  inputError: j,
  fieldError: K,
  eyeButton: ee,
  terms: re,
  submitButton: se,
  loginLink: te,
};

export const Register = (a) => {
  const [s, E] = d_1("");
  const [n, w] = d_1("");
  const [p, _] = d_1(false);
  const [A, m] = d_1(false);
  const [g, o] = d_1(null);
  const [h, c] = d_1(null);
  const [f, i] = d_1(null);
  const [k, N] = d_1("credentials");
  const { register, status, reset } = x_1();
  const u = status === "loading";

  const B = (l) => {
    l.preventDefault();
    o(null);
    c(null);
    i(null);

    if (!s.trim()) {
      c("Введите email");
      return;
    }

    if (!n.trim()) {
      i("Введите пароль");
      return;
    }
    if (n.length < 10) {
      i("Минимум 10 символов");
      return;
    }
    if (n.length > 128) {
      i("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(n)) {
      i("Только латиница, цифры и знаки пунктуации");
      return;
    }
    m(true);
  };

  const C = q_1(
    async (l) => {
      m(false);
      try {
        await register({ email: s, password: n, turnstileToken: l });
        N("verify");
      } catch (b) {
        if (aa(b)) {
          switch (b.code) {
            case ab.ENTITY_ALREADY_EXISTS: {
              c("Этот email уже зарегистрирован");
              break;
            }
            case ab.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              c("Этот email домен не разрешён");
              break;
            }
            case ab.CAPTCHA_FAILED: {
              o("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ab.RATE_LIMIT_EXCEEDED: {
              o("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ab.VALIDATION_ERROR: {
              o("Проверьте введённые данные");
              break;
            }
            default: {
              o(b.message || "Ошибка регистрации");
            }
          }
        } else {
          o("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [s, n, register]
  );

  const L = q_1(() => {
    reset();
    N("credentials");
  }, [reset]);

  return a("div", {
    className: r.page,
    children: [
      a("div", {
        className: r.container,
        children: [
          a("div", { className: r.logo, children: a(ac, {}) }),
          k === "credentials"
            ? a("form", {
                className: r.form,
                onSubmit: B,
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
                            className: `${r.input} ${h ? r.inputError : ""}`,
                            value: s,
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
                                  i(null);
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
            : a(C_1, { email: s, onBack: L }),
        ],
      }),
      a(C, { isOpen: A, onClose: () => m(false), onVerify: C }),
    ],
  });
};

export { Register as Register, Register as default };
