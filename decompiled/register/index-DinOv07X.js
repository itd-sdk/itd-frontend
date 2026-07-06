import {
  ac as d_1,
  C as x_1,
  q as q_1,
  ab,
  ac,
  a,
  ad,
  ab as ab_1,
} from "./index-CFv_0Hh6.js";
import { C } from "./index-DL9gK-0-.js";
import { V as V_1 } from "./index-Doon_v0g.js";
import { I, a as a_1 } from "./IconEyeOff-C3SWTYTF.js";
(() => {
  try {
    const s =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    s.SENTRY_RELEASE = { id: "1.1.2" };
    const a = new s.Error().stack;

    if (a) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[a] = "7e446a49-f39a-4a9e-8dad-be5ea7502a96";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-7e446a49-f39a-4a9e-8dad-be5ea7502a96";
    }
  } catch {}
})();
const V = "Y2hz";
const X = "v8P3";
const z = "EApq";
const W = "XasO";
const $ = "JXGX";
const F = "sjH5";
const Y = "AqFd";
const q = "vXxO";
const H = "RGtH";
const Q = "wQaL";
const Z = "rf7Z";
const j = "pwzS";
const J = "tcvx";
const K = "QgcF";
const U = "c4vS";
const ee = "AMmZ";
const re = "hvnD";
const ae = "r49o";
const te = "yiGK";

const r = {
  page: V,
  container: X,
  logo: z,
  form: W,
  header: $,
  error: F,
  title: Y,
  subtitle: q,
  inputs: H,
  inputGroup: Q,
  inputWrapper: Z,
  input: j,
  label: J,
  inputError: K,
  fieldError: U,
  eyeButton: ee,
  terms: re,
  submitButton: ae,
  loginLink: te,
};

export const Register = (s) => {
  const [a, E] = d_1("");
  const [n, I] = d_1("");
  const [p, A] = d_1(false);
  const [_, m] = d_1(false);
  const [g, i] = d_1(null);
  const [h, c] = d_1(null);
  const [f, o] = d_1(null);
  const [k, y] = d_1("credentials");
  const { register, status, reset } = x_1();
  const u = status === "loading";

  const D = (l) => {
    l.preventDefault();
    i(null);
    c(null);
    o(null);

    if (!a.trim()) {
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
        await register({ email: a, password: n, turnstileToken: l });
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
    [a, n, register]
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
          k === "credentials"
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
                            className: `${r.input} ${h ? r.inputError : ""}`,
                            value: a,
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
                                  I(l.target.value);
                                  o(null);
                                },
                                placeholder: "Минимум 10 символов",
                                disabled: u,
                              }),
                              a("button", {
                                type: "button",
                                className: r.eyeButton,
                                onClick: () => A(!p),
                                children: p
                                  ? a(I, { size: 20 })
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
            : a(V_1, { email: a, onBack: S }),
        ],
      }),
      a(status, { isOpen: _, onClose: () => m(false), onVerify: L }),
    ],
  });
};

export { Register as Register, Register as default };
