import {
  d,
  w,
  q as q_1,
  x as x_1,
  ae,
  u,
  af,
  B,
  af as af_1,
} from "./index-pEgBAsWz.js";
import { C } from "./index-BjZiGhmq.js";
import { C as C_1 } from "./index-IxAI1HCP.js";
import { I, a } from "./IconEyeOff-ConI11na.js";
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
    const a = new r.Error().stack;

    if (a) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[a] = "b951ed16-6ea8-499e-b108-6d2e2608a41a";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-b951ed16-6ea8-499e-b108-6d2e2608a41a";
    }
  } catch {}
})();
const W = "wc4o";
const U = "Ch2V";
const G = "lOsC";
const q = "joNR";
const x = "I7EU";
const z = "epZK";
const K = "vqqH";
const X = "dwXD";
const F = "LJVt";
const H = "yQOO";
const J = "sJ1e";
const Q = "sKeR";
const Y = "XWA0";
const Z = "c57l";
const $ = "lO4o";
const j = "uIie";
const ee = "NsZ0";
const se = "vQgT";

const s = {
  container: W,
  logo: U,
  form: G,
  header: q,
  error: x,
  title: z,
  subtitle: K,
  inputs: X,
  inputGroup: F,
  label: H,
  inputWrapper: J,
  input: Q,
  inputError: Y,
  fieldError: Z,
  eyeButton: $,
  forgotPassword: j,
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
  const [A, E] = d("credentials");
  const { login, status, reset } = w();
  const c = status === "loading";

  const _ = (n) => {
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

  const D = q_1(
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
        if (x_1(d)) {
          switch (d.code) {
            case ae.ACCOUNT_INVALID_CREDENTIALS: {
              t("Неверный email или пароль");
              break;
            }
            case ae.ACCOUNT_DEACTIVATED: {
              t("Аккаунт деактивирован");
              break;
            }
            case ae.ACCOUNT_TEMPORARILY_LOCKED: {
              t("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case ae.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ae.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ae.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              f("Почта этого домена не поддерживается");
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

  const L = q_1(() => {
    reset();
    E("credentials");
  }, [reset]);

  return u(af_1, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(af, {}) }),
          A === "credentials"
            ? u("form", {
                className: s.form,
                onSubmit: _,
                children: [
                  u("div", {
                    className: s.header,
                    children: [
                      u("h1", { className: s.title, children: "Вход" }),
                      u("p", {
                        className: s.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  b && u("div", { className: s.error, children: b }),
                  u("div", {
                    className: s.inputs,
                    children: [
                      u("div", {
                        className: s.inputGroup,
                        children: [
                          u("label", {
                            className: s.label,
                            children: "E-Mail",
                          }),
                          u("input", {
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
                            u("span", {
                              className: s.fieldError,
                              children: m,
                            }),
                        ],
                      }),
                      u("div", {
                        className: s.inputGroup,
                        children: [
                          u("label", {
                            className: s.label,
                            children: "Пароль",
                          }),
                          u("div", {
                            className: s.inputWrapper,
                            children: [
                              u("input", {
                                type: u ? "text" : "password",
                                className: s.input,
                                value: l,
                                onInput: (n) => C(n.target.value),
                                placeholder: "••••••••••••",
                                disabled: c,
                              }),
                              u("button", {
                                type: "button",
                                className: s.eyeButton,
                                onClick: () => w(!u),
                                children: u
                                  ? u(I, { size: 20 })
                                  : u(a, { size: 20 }),
                              }),
                            ],
                          }),
                          u("a", {
                            href: "/forgot-password",
                            className: s.forgotPassword,
                            children: "Забыли пароль?",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: s.submitButton,
                    disabled: c,
                    children: c ? "Вход..." : "Войти",
                  }),
                  u("p", {
                    className: s.signupLink,
                    children: [
                      "Еще нет аккаунта? ",
                      u("a", {
                        href: "/register",
                        children: "Создать аккаунт",
                      }),
                    ],
                  }),
                ],
              })
            : u(C_1, { email: a, onBack: L }),
        ],
      }),
      u(C, { isOpen: I, onClose: () => p(false), onVerify: D }),
    ],
  });
};

export { Login as Login, Login as default };
