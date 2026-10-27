import {
  d,
  a,
  q as q_1,
  y,
  z as z_1,
  u,
  I,
  B,
  S,
} from "./index-BQxlThnW-portal20261026.js";
import { C } from "./index-GGTxnMRT-portal20261026.js";
import { a_1 as V_1 } from "./index-DfAK_-iq-portal20261026.js";
import { I as I_1, a as a_1 } from "./IconEyeOff-ONzFZVHN-portal20261026.js";
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
      r._sentryDebugIds[a] = "19ea22cc-0673-4103-980e-42a6c3e83b5b";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-19ea22cc-0673-4103-980e-42a6c3e83b5b";
    }
  } catch {}
})();
const F = "xNFH";
const M = "KCbI";
const U = "fO2J";
const W = "s2FI";
const z = "GU6f";
const H = "zDER";
const q = "aNTq";
const x = "dd4k";
const J = "sbTg";
const K = "wWA7";
const Y = "LG9b";
const $ = "q52t";
const Q = "cQ0F";
const X = "pHSy";
const Z = "GNZF";
const j = "RJUN";
const ee = "uaCt";
const se = "HANg";

const s = {
  container: F,
  logo: M,
  form: U,
  header: W,
  error: z,
  title: H,
  subtitle: q,
  inputs: x,
  inputGroup: J,
  label: K,
  inputWrapper: Y,
  input: $,
  inputError: Q,
  fieldError: X,
  eyeButton: Z,
  forgotPassword: j,
  submitButton: ee,
  signupLink: se,
};

export const Login = (r) => {
  const [a, h] = d("");
  const [l, C] = d("");
  const [u, I] = d(false);
  const [A, p] = d(false);
  const [b, t] = d(null);
  const [m, f] = d(null);
  const [w, E] = d("credentials");
  const { login, status, reset } = a();
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
        if (reset(d)) {
          switch (d.code) {
            case z_1.ACCOUNT_INVALID_CREDENTIALS: {
              t("Неверный email или пароль");
              break;
            }
            case z_1.ACCOUNT_DEACTIVATED: {
              t("Аккаунт деактивирован");
              break;
            }
            case z_1.ACCOUNT_TEMPORARILY_LOCKED: {
              t("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case z_1.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case z_1.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case z_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
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

  return u(S, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(I, {}) }),
          w === "credentials"
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
                                onClick: () => I(!u),
                                children: u
                                  ? u(I_1, { size: 20 })
                                  : u(a_1, { size: 20 }),
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
            : u(V_1, { email: a, onBack: D }),
        ],
      }),
      u(C, { isOpen: A, onClose: () => p(false), onVerify: T }),
    ],
  });
};

export { Login as Login, Login as default };
