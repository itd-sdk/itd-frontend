import {
  aB as d_1,
  Y as Y_1,
  q as q_1,
  K as K_1,
  aB,
  u,
  aC,
  Y_1 as Y_1_1,
  S,
} from "./index-DK2L49XD.js";
import { C } from "./index-CyfpzJs8.js";
import { a as V_1 } from "./index-RmzjTx3s.js";
import { I, a } from "./IconEyeOff-89JgB8fW.js";
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
      a._sentryDebugIds[t] = "898d280a-6597-4a49-908d-2a991ae29371";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-898d280a-6597-4a49-908d-2a991ae29371";
    }
  } catch {}
})();
const W = "bE8w";
const Y = "KySu";
const $ = "GDsT";
const z = "IF6P";
const F = "xxT0";
const H = "SmI6";
const X = "eXM9";
const q = "FJHs";
const K = "nggq";
const j = "IHhY";
const J = "C0tE";
const U = "PppD";
const Q = "WuSe";
const Z = "iEbg";
const ee = "Gy0j";
const re = "HEbo";
const te = "BPz5";
const se = "guY0";

const r = {
  container: W,
  logo: Y,
  form: $,
  header: z,
  error: F,
  title: H,
  subtitle: X,
  inputs: q,
  inputGroup: K,
  inputWrapper: j,
  input: J,
  label: U,
  inputError: Q,
  fieldError: Z,
  eyeButton: ee,
  terms: re,
  submitButton: te,
  loginLink: se,
};

export const Register = (a) => {
  const [t, b] = d_1("");
  const [n, v] = d_1("");
  const [p, _] = d_1(false);
  const [A, m] = d_1(false);
  const [g, i] = d_1(null);
  const [h, c] = d_1(null);
  const [f, o] = d_1(null);
  const [C, y] = d_1("credentials");
  const { register, status, reset } = Y_1();
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
      } catch (E) {
        if (K_1(E)) {
          switch (E.code) {
            case aB.ENTITY_ALREADY_EXISTS: {
              c("Этот email уже зарегистрирован");
              break;
            }
            case aB.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              c("Почта этого домена не поддерживается");
              break;
            }
            case aB.CAPTCHA_FAILED: {
              i("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case aB.RATE_LIMIT_EXCEEDED: {
              i("Слишком много попыток. Попробуйте позже");
              break;
            }
            case aB.VALIDATION_ERROR: {
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
    [t, n, register]
  );

  const T = q_1(() => {
    reset();
    y("credentials");
  }, [reset]);

  return u(S, {
    children: [
      u("div", {
        className: r.container,
        children: [
          u("div", { className: r.logo, children: u(aC, {}) }),
          C === "credentials"
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
                  u(Y_1_1, {
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
            : u(V_1, { email: t, onBack: T }),
        ],
      }),
      u(C, { isOpen: A, onClose: () => m(false), onVerify: S }),
    ],
  });
};

export { Register as Register, Register as default };
