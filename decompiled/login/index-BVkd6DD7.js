import { d, x as x_1, q as q_1, aa, ab, a, ac, B } from "./index-BCnJB3wz.js";
import { C } from "./index-BDEp0-_x.js";
import { a_1 as V_1 } from "./index-DMsDt-7k.js";
import { I, a as a_1 } from "./IconEyeOff-CTY4FkhJ.js";
(() => {
  try {
    const r =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    r.SENTRY_RELEASE = { id: "1.1.1" };
    const t = new r.Error().stack;

    if (t) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[t] = "4c3df039-6500-4482-852f-1b000c70a2cb";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-4c3df039-6500-4482-852f-1b000c70a2cb";
    }
  } catch {}
})();
const G = "dG3i";
const R = "m8Cs";
const W = "MLlb";
const x = "C2tl";
const z = "UISo";
const K = "qZnD";
const U = "Agma";
const j = "TpA0";
const q = "KKKd";
const F = "jJro";
const X = "uXxa";
const Y = "Iy7I";
const Z = "VZx1";
const $ = "pBCP";
const H = "iESK";
const J = "OGzd";
const Q = "aGIN";
const ee = "Lj1D";
const se = "tzWM";

const s = {
  page: G,
  container: R,
  logo: W,
  form: x,
  header: z,
  error: K,
  title: U,
  subtitle: j,
  inputs: q,
  inputGroup: F,
  label: X,
  inputWrapper: Y,
  input: Z,
  inputError: $,
  fieldError: H,
  eyeButton: J,
  forgotPassword: Q,
  submitButton: ee,
  signupLink: se,
};

export const Login = (r) => {
  const [t, h] = d("");
  const [l, C] = d("");
  const [u, I] = d(false);
  const [A, p] = d(false);
  const [b, a] = d(null);
  const [m, f] = d(null);
  const [w, E] = d("credentials");
  const { login, status, reset } = x_1();
  const c = status === "loading";

  const _ = (n) => {
    n.preventDefault();
    a(null);
    f(null);

    if (!t.trim()) {
      a("Введите email");
      return;
    }

    if (!l.trim()) {
      a("Введите пароль");
      return;
    }
    p(true);
  };

  const D = q_1(
    async (n) => {
      p(false);
      try {
        if (
          (await login({ email: t, password: l, turnstileToken: n })) !==
          "authenticated"
        ) {
          E("verify");
        }
      } catch (d) {
        if (aa(d)) {
          switch (d.code) {
            case ab.ACCOUNT_INVALID_CREDENTIALS: {
              a("Неверный email или пароль");
              break;
            }
            case ab.ACCOUNT_DEACTIVATED: {
              a("Аккаунт деактивирован");
              break;
            }
            case ab.ACCOUNT_TEMPORARILY_LOCKED: {
              a("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case ab.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ab.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ab.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              f("Этот email домен не разрешён");
              break;
            }
            default: {
              a(d.message || "Ошибка входа");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [t, l, login]
  );

  const L = q_1(() => {
    reset();
    E("credentials");
  }, [reset]);

  return a("div", {
    className: s.page,
    children: [
      a("div", {
        className: s.container,
        children: [
          a("div", { className: s.logo, children: a(ac, {}) }),
          w === "credentials"
            ? a("form", {
                className: s.form,
                onSubmit: _,
                children: [
                  a("div", {
                    className: s.header,
                    children: [
                      a("h1", { className: s.title, children: "Вход" }),
                      a("p", {
                        className: s.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  b && a("div", { className: s.error, children: b }),
                  a("div", {
                    className: s.inputs,
                    children: [
                      a("div", {
                        className: s.inputGroup,
                        children: [
                          a("label", {
                            className: s.label,
                            children: "E-Mail",
                          }),
                          a("input", {
                            type: "email",
                            className: `${s.input} ${m ? s.inputError : ""}`,
                            value: t,
                            onInput: (n) => {
                              h(n.target.value);
                              f(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: c,
                          }),
                          m &&
                            a("span", {
                              className: s.fieldError,
                              children: m,
                            }),
                        ],
                      }),
                      a("div", {
                        className: s.inputGroup,
                        children: [
                          a("label", {
                            className: s.label,
                            children: "Пароль",
                          }),
                          a("div", {
                            className: s.inputWrapper,
                            children: [
                              a("input", {
                                type: u ? "text" : "password",
                                className: s.input,
                                value: l,
                                onInput: (n) => C(n.target.value),
                                placeholder: "••••••••••••",
                                disabled: c,
                              }),
                              a("button", {
                                type: "button",
                                className: s.eyeButton,
                                onClick: () => I(!u),
                                children: u
                                  ? a(I, { size: 20 })
                                  : a(a_1, { size: 20 }),
                              }),
                            ],
                          }),
                          a("a", {
                            href: "/forgot-password",
                            className: s.forgotPassword,
                            children: "Забыли пароль?",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: s.submitButton,
                    disabled: c,
                    children: c ? "Вход..." : "Войти",
                  }),
                  a("p", {
                    className: s.signupLink,
                    children: [
                      "Еще нет аккаунта? ",
                      a("a", {
                        href: "/register",
                        children: "Создать аккаунт",
                      }),
                    ],
                  }),
                ],
              })
            : a(V_1, { email: t, onBack: L }),
        ],
      }),
      a(C, { isOpen: A, onClose: () => p(false), onVerify: D }),
    ],
  });
};

export { Login as Login, Login as default };
