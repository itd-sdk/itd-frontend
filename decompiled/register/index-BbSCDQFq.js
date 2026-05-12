import {
  a9 as d_1,
  w,
  q as q_1,
  a8,
  a9,
  a,
  aa,
  w as w_1,
} from "./index-DDCL-vHK.js";
import { C } from "./index-Bt-cCGG-.js";
import { I as V_1 } from "./index-scvl2LQN.js";
import { I, a as a_1 } from "./IconEyeOff-DkfQwtOQ.js";
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
    a.SENTRY_RELEASE = { id: "1.1.0" };
    const t = new a.Error().stack;

    if (t) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[t] = "5ec0e1ae-9707-4e99-8802-7910963021c7";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-5ec0e1ae-9707-4e99-8802-7910963021c7";
    }
  } catch {}
})();
const G = "Dsxb";
const M = "uee3";
const $ = "c78q";
const z = "LW9J";
const H = "rzt7";
const X = "elpY";
const Y = "vAlL";
const F = "xua0";
const q = "JZnc";
const J = "HsPk";
const K = "AGx7";
const Z = "g3Sw";
const U = "slbX";
const j = "uXKZ";
const Q = "H1eN";
const ee = "HlKN";
const re = "fpfw";
const te = "OO47";
const se = "Fa6T";

const r = {
  page: G,
  container: M,
  logo: $,
  form: z,
  header: H,
  error: X,
  title: Y,
  subtitle: F,
  inputs: q,
  inputGroup: J,
  inputWrapper: K,
  input: Z,
  label: U,
  inputError: j,
  fieldError: Q,
  eyeButton: ee,
  terms: re,
  submitButton: te,
  loginLink: se,
};

export const Register = (a) => {
  const [t, E] = d_1("");
  const [n, I] = d_1("");
  const [p, A] = d_1(false);
  const [_, m] = d_1(false);
  const [g, i] = d_1(null);
  const [h, c] = d_1(null);
  const [f, o] = d_1(null);
  const [k, y] = d_1("credentials");
  const { register, status, reset } = reset();
  const u = status === "loading";

  const L = (l) => {
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
        y("verify");
      } catch (b) {
        if (a8(b)) {
          switch (b.code) {
            case a9.ENTITY_ALREADY_EXISTS: {
              c("Этот email уже зарегистрирован");
              break;
            }
            case a9.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              c("Этот email домен не разрешён");
              break;
            }
            case a9.CAPTCHA_FAILED: {
              i("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case a9.RATE_LIMIT_EXCEEDED: {
              i("Слишком много попыток. Попробуйте позже");
              break;
            }
            case a9.VALIDATION_ERROR: {
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
    y("credentials");
  }, [reset]);

  return a("div", {
    className: r.page,
    children: [
      a("div", {
        className: r.container,
        children: [
          a("div", { className: r.logo, children: a(aa, {}) }),
          k === "credentials"
            ? a("form", {
                className: r.form,
                onSubmit: L,
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
                  a(w_1, {
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
      a(status, { isOpen: _, onClose: () => m(false), onVerify: D }),
    ],
  });
};

export { Register as Register, Register as default };
