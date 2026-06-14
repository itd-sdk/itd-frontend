import { d, x as x_1, q as q_1, ab, ac, a, ad, B } from "./index-BAlLDjSl.js";
import { C } from "./index-BP5ArN5c.js";
import { a_1 as V_1 } from "./index-7aCb4nBj.js";
import { I, a as a_1 } from "./IconEyeOff-_f-Lat8q.js";
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
    const a = new r.Error().stack;

    if (a) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[a] = "b57c1244-1f21-4551-a97c-e65c50bcbe0c";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-b57c1244-1f21-4551-a97c-e65c50bcbe0c";
    }
  } catch {}
})();
const G = "jwRx";
const R = "sbyL";
const W = "xbM5";
const j = "PXCW";
const q = "GzGD";
const x = "ahCj";
const z = "w73G";
const U = "Wvjt";
const X = "jfq2";
const F = "XVje";
const H = "VJ8c";
const Y = "TcE4";
const $ = "M2T8";
const J = "e9iw";
const K = "qvuM";
const Q = "bmlS";
const Z = "MqfQ";
const ee = "zyqo";
const se = "raTH";

const s = {
  page: G,
  container: R,
  logo: W,
  form: j,
  header: q,
  error: x,
  title: z,
  subtitle: U,
  inputs: X,
  inputGroup: F,
  label: H,
  inputWrapper: Y,
  input: $,
  inputError: J,
  fieldError: K,
  eyeButton: Q,
  forgotPassword: Z,
  submitButton: ee,
  signupLink: se,
};

export const Login = (r) => {
  const [a, h] = d("");
  const [l, C] = d("");
  const [u, w] = d(false);
  const [I, p] = d(false);
  const [b, t] = d(null);
  const [m, f] = d(null);
  const [v, E] = d("credentials");
  const { login, status, reset } = x_1();
  const c = status === "loading";

  const T = (n) => {
    n.preventDefault();
    t(null);
    f(null);

    if (!a.trim()) {
      t("Введите email");
      return;
    }

    if (!l.trim()) {
      t("Введите пароль");
      return;
    }
    p(true);
  };

  const _ = q_1(
    async (n) => {
      p(false);
      try {
        if (
          (await login({ email: a, password: l, turnstileToken: n })) !==
          "authenticated"
        ) {
          E("verify");
        }
      } catch (d) {
        if (ab(d)) {
          switch (d.code) {
            case ac.ACCOUNT_INVALID_CREDENTIALS: {
              t("Неверный email или пароль");
              break;
            }
            case ac.ACCOUNT_DEACTIVATED: {
              t("Аккаунт деактивирован");
              break;
            }
            case ac.ACCOUNT_TEMPORARILY_LOCKED: {
              t("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case ac.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ac.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ac.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              f("Этот email домен не разрешён");
              break;
            }
            default: {
              t(d.message || "Ошибка входа");
            }
          }
        } else {
          t("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [a, l, login]
  );

  const D = q_1(() => {
    reset();
    E("credentials");
  }, [reset]);

  return a("div", {
    className: s.page,
    children: [
      a("div", {
        className: s.container,
        children: [
          a("div", { className: s.logo, children: a(ad, {}) }),
          v === "credentials"
            ? a("form", {
                className: s.form,
                onSubmit: T,
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
                            value: a,
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
                                onClick: () => w(!u),
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
            : a(V_1, { email: a, onBack: D }),
        ],
      }),
      a(C, { isOpen: I, onClose: () => p(false), onVerify: _ }),
    ],
  });
};

export { Login as Login, Login as default };
