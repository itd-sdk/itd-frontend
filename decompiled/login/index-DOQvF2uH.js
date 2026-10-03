import {
  d,
  Y as Y_1,
  q as q_1,
  K as K_1,
  aB,
  u,
  aC,
  K_1 as K_1_1,
  S,
} from "./index-CsuAWxkQ.js";
import { C } from "./index-DT1tSoMS.js";
import { I as V_1 } from "./index-S505uKQX.js";
import { I, a } from "./IconEyeOff-s_19qPRg.js";
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
      r._sentryDebugIds[a] = "be7a1c4e-f58d-4299-a0b5-fa304ee53410";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-be7a1c4e-f58d-4299-a0b5-fa304ee53410";
    }
  } catch {}
})();
const W = "cwlg";
const G = "YBW2";
const K = "uhMH";
const U = "BAFK";
const Y = "rXPo";
const x = "Egvm";
const z = "qBGS";
const F = "mNln";
const H = "PE23";
const q = "x0hm";
const X = "apbK";
const $ = "TZ8I";
const Z = "L26b";
const j = "O8VH";
const J = "yakM";
const Q = "nc8f";
const ee = "y59u";
const se = "s7r5";

const s = {
  container: W,
  logo: G,
  form: K,
  header: U,
  error: Y,
  title: x,
  subtitle: z,
  inputs: F,
  inputGroup: H,
  label: q,
  inputWrapper: X,
  input: $,
  inputError: Z,
  fieldError: j,
  eyeButton: J,
  forgotPassword: Q,
  submitButton: ee,
  signupLink: se,
};

export const Login = (r) => {
  const [a, h] = d("");
  const [l, C] = d("");
  const [u, I] = d(false);
  const [w, p] = d(false);
  const [b, t] = d(null);
  const [m, f] = d(null);
  const [A, E] = d("credentials");
  const { login, status, reset } = Y_1();
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

  const L = q_1(
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
        if (K_1(d)) {
          switch (d.code) {
            case aB.ACCOUNT_INVALID_CREDENTIALS: {
              t("Неверный email или пароль");
              break;
            }
            case aB.ACCOUNT_DEACTIVATED: {
              t("Аккаунт деактивирован");
              break;
            }
            case aB.ACCOUNT_TEMPORARILY_LOCKED: {
              t("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case aB.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case aB.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case aB.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
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

  const T = q_1(() => {
    reset();
    E("credentials");
  }, [reset]);

  return u(S, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(aC, {}) }),
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
                                onClick: () => I(!u),
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
                  u(K_1_1, {
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
            : u(V_1, { email: a, onBack: T }),
        ],
      }),
      u(C, { isOpen: w, onClose: () => p(false), onVerify: L }),
    ],
  });
};

export { Login as Login, Login as default };
