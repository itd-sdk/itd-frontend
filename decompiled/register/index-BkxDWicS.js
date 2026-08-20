import {
  ae as d_1,
  w,
  q as q_1,
  a as x_1,
  ae,
  u,
  af,
  w as w_1,
  k,
} from "./index-DDTOXJaD.js";
import { C } from "./index-CtrmDHPu.js";
import { V } from "./index-Ud_qOePC.js";
import { I, a } from "./IconEyeOff-D3w2rqGb.js";
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
      a._sentryDebugIds[t] = "e24944a3-2a33-4d40-81ab-c2265474291a";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-e24944a3-2a33-4d40-81ab-c2265474291a";
    }
  } catch {}
})();
const M = "PUZ4";
const $ = "Zg6l";
const z = "gbFi";
const X = "IbZE";
const Y = "Ycjv";
const Z = "qNXT";
const q = "CgXO";
const F = "qbG7";
const H = "IsPJ";
const J = "ga9A";
const U = "ZnGz";
const j = "nH5O";
const Q = "Qtus";
const K = "fy30";
const ee = "dTiI";
const re = "WfAl";
const te = "rv7L";
const se = "NeJf";

const r = {
  container: M,
  logo: $,
  form: z,
  header: X,
  error: Y,
  title: Z,
  subtitle: q,
  inputs: F,
  inputGroup: H,
  inputWrapper: J,
  input: U,
  label: j,
  inputError: Q,
  fieldError: K,
  eyeButton: ee,
  terms: re,
  submitButton: te,
  loginLink: se,
};

export const Register = (a) => {
  const [t, E] = d_1("");
  const [n, w] = d_1("");
  const [p, A] = d_1(false);
  const [_, m] = d_1(false);
  const [g, i] = d_1(null);
  const [f, c] = d_1(null);
  const [h, o] = d_1(null);
  const [k, y] = d_1("credentials");
  const { register, status, reset } = w();
  const u = status === "loading";

  const T = (l) => {
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

  const D = q_1(() => {
    reset();
    y("credentials");
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
                onSubmit: T,
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
                  u(w_1, {
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
            : u(V, { email: t, onBack: D }),
        ],
      }),
      u(status, { isOpen: _, onClose: () => m(false), onVerify: L }),
    ],
  });
};

export { Register as Register, Register as default };
