import {
  d,
  w,
  q as q_1,
  x as x_1,
  ae,
  u,
  af,
  af as af_1,
  x_1 as x_1_1,
} from "./index-DBLtLuBZ.js";
import { C } from "./index-CqDyc-Mo.js";
import { C as C_1 } from "./index-6BJWrSY3.js";
import { I, a } from "./IconEyeOff-47Vevy3T.js";
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
      r._sentryDebugIds[a] = "b0fee384-ee4c-495a-a688-b9790d070713";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-b0fee384-ee4c-495a-a688-b9790d070713";
    }
  } catch {}
})();
const z = "Sl26";
const M = "aAWp";
const R = "EGLT";
const U = "njHJ";
const Y = "ZEBz";
const x = "bV67";
const H = "YAwN";
const J = "GV5H";
const q = "zAW6";
const F = "iOEW";
const $ = "cz9o";
const j = "sIgQ";
const K = "om4s";
const Q = "sqSG";
const X = "JynE";
const Z = "TYD5";
const ee = "Gc3C";
const se = "JgBy";

const s = {
  container: z,
  logo: M,
  form: R,
  header: U,
  error: Y,
  title: x,
  subtitle: H,
  inputs: J,
  inputGroup: q,
  label: F,
  inputWrapper: $,
  input: j,
  inputError: K,
  fieldError: Q,
  eyeButton: X,
  forgotPassword: Z,
  submitButton: ee,
  signupLink: se,
};

export const Login = (r) => {
  const [a, h] = d("");
  const [l, C] = d("");
  const [u, A] = d(false);
  const [w, p] = d(false);
  const [b, t] = d(null);
  const [m, f] = d(null);
  const [I, E] = d("credentials");
  const { login, status, reset } = w();
  const c = status === "loading";

  const v = (n) => {
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

  const T = q_1(
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

  const D = q_1(() => {
    reset();
    E("credentials");
  }, [reset]);

  return u(x_1_1, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(af, {}) }),
          I === "credentials"
            ? u("form", {
                className: s.form,
                onSubmit: v,
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
                                onClick: () => A(!u),
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
                  u(af_1, {
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
            : u(C_1, { email: a, onBack: D }),
        ],
      }),
      u(C, { isOpen: w, onClose: () => p(false), onVerify: T }),
    ],
  });
};

export { Login as Login, Login as default };
