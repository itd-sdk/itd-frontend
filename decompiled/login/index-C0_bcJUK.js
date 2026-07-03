import {
  d,
  x as x_1,
  q as q_1,
  ab,
  ac,
  a,
  ad,
  ad as ad_1,
} from "./index-DuQT229k.js";
import { C } from "./index-C8OsYe6v.js";
import { I as V_1 } from "./index-CPGZmsWm.js";
import { I, a as a_1 } from "./IconEyeOff-CDOK-c3g.js";
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
    r.SENTRY_RELEASE = { id: "1.1.2" };
    const t = new r.Error().stack;

    if (t) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[t] = "8236d303-b8d3-4bf3-a63f-5522f1cabc51";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-8236d303-b8d3-4bf3-a63f-5522f1cabc51";
    }
  } catch {}
})();
const G = "puod";
const M = "bJdB";
const W = "avFH";
const Q = "iweq";
const U = "QQwD";
const x = "Cv36";
const z = "BUuV";
const K = "zJqc";
const q = "CaG9";
const F = "Da6Q";
const H = "KQcb";
const J = "NwyC";
const Y = "xW0n";
const $ = "PyKK";
const X = "ATN6";
const j = "o8OS";
const Z = "QD5s";
const ee = "yREs";
const se = "G7Vm";

const s = {
  page: G,
  container: M,
  logo: W,
  form: Q,
  header: U,
  error: x,
  title: z,
  subtitle: K,
  inputs: q,
  inputGroup: F,
  label: H,
  inputWrapper: J,
  input: Y,
  inputError: $,
  fieldError: X,
  eyeButton: j,
  forgotPassword: Z,
  submitButton: ee,
  signupLink: se,
};

export const Login = (r) => {
  const [t, h] = d("");
  const [l, C] = d("");
  const [u, w] = d(false);
  const [A, p] = d(false);
  const [b, a] = d(null);
  const [m, f] = d(null);
  const [I, E] = d("credentials");
  const { login, status, reset } = x_1();
  const c = status === "loading";

  const D = (n) => {
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

  const _ = q_1(
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
        if (ab(d)) {
          switch (d.code) {
            case ac.ACCOUNT_INVALID_CREDENTIALS: {
              a("Неверный email или пароль");
              break;
            }
            case ac.ACCOUNT_DEACTIVATED: {
              a("Аккаунт деактивирован");
              break;
            }
            case ac.ACCOUNT_TEMPORARILY_LOCKED: {
              a("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case ac.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ac.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ac.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
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

  const T = q_1(() => {
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
          I === "credentials"
            ? a("form", {
                className: s.form,
                onSubmit: D,
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
                  a(ad_1, {
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
            : a(V_1, { email: t, onBack: T }),
        ],
      }),
      a(C, { isOpen: A, onClose: () => p(false), onVerify: _ }),
    ],
  });
};

export { Login as Login, Login as default };
