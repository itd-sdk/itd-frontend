import {
  d,
  a,
  q as q_1,
  d as d_1,
  r,
  u,
  I,
  B,
  S_1_1 as S_1,
} from "./index-CR_1arh8.js";
import { S_1 as S_1_1 } from "./index-8U8hOU8-.js";
import { C } from "./index-AB-xYmxI.js";
import { C as C_1 } from "./index-BHjRP1BG.js";
import { I as I_1, a as a_1 } from "./IconEyeOff-BlNwsMMr.js";
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
      r._sentryDebugIds[a] = "82c78d8b-7d66-479a-9518-368afac89676";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-82c78d8b-7d66-479a-9518-368afac89676";
    }
  } catch {}
})();
const M = "UPzJ";
const R = "TQ1g";
const U = "wo6k";
const x = "KDxt";
const H = "iJzC";
const K = "N0Hm";
const Y = "uHdK";
const F = "VBWp";
const J = "yxpI";
const Q = "ehLL";
const $ = "oHOy";
const j = "Ik5a";
const q = "lWYa";
const X = "G9Qt";
const Z = "jA0x";
const ee = "zTGa";
const se = "U7Zo";
const te = "ySI6";

const s = {
  container: M,
  logo: R,
  form: U,
  header: x,
  error: H,
  title: K,
  subtitle: Y,
  inputs: F,
  inputGroup: J,
  label: Q,
  inputWrapper: $,
  input: j,
  inputError: q,
  fieldError: X,
  eyeButton: Z,
  forgotPassword: ee,
  submitButton: se,
  signupLink: te,
};

export const Login = (r) => {
  const [a, h] = d("");
  const [l, I] = d("");
  const [u, C] = d(false);
  const [w, p] = d(false);
  const [b, t] = d(null);
  const [m, f] = d(null);
  const [A, E] = d("credentials");
  const { login, status, reset } = a();
  const c = status === "loading";

  const L = (n) => {
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
        if (d_1(d)) {
          switch (d.code) {
            case r.ACCOUNT_INVALID_CREDENTIALS: {
              t("Неверный email или пароль");
              break;
            }
            case r.ACCOUNT_DEACTIVATED: {
              t("Аккаунт деактивирован");
              break;
            }
            case r.ACCOUNT_TEMPORARILY_LOCKED: {
              t("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case r.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case r.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case r.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
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

  const k = q_1(() => {
    reset();
    E("credentials");
  }, [reset]);

  return u(S_1, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(I, {}) }),
          A === "credentials"
            ? u("form", {
                className: s.form,
                onSubmit: L,
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
                                onInput: (n) => I(n.target.value),
                                placeholder: "••••••••••••",
                                disabled: c,
                              }),
                              u("button", {
                                type: "button",
                                className: s.eyeButton,
                                onClick: () => C(!u),
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
                      u(S_1_1, {}),
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
            : u(C_1, { email: a, onBack: k }),
        ],
      }),
      u(C, { isOpen: w, onClose: () => p(false), onVerify: _ }),
    ],
  });
};

export { Login as Login, Login as default };
