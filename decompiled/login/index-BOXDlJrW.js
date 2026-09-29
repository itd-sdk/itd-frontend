import {
  d,
  Y as Y_1,
  q as q_1,
  K as K_1,
  aA,
  u,
  aB,
  B,
  S,
} from "./index-D4QRo1-7.js";
import { C } from "./index-CfgNx4Vk.js";
import { a as V_1 } from "./index-CV1poIIC.js";
import { I, a } from "./IconEyeOff-mN_xIYSl.js";
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
      r._sentryDebugIds[a] = "18e74174-9287-4f18-b8a6-da4b7f720dd0";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-18e74174-9287-4f18-b8a6-da4b7f720dd0";
    }
  } catch {}
})();
const z = "IEdR";
const U = "tBar";
const W = "KTC3";
const G = "cMCt";
const q = "JotQ";
const F = "Uw2k";
const H = "dOkC";
const K = "LZPz";
const X = "DFXv";
const Y = "ziLj";
const x = "yNHf";
const $ = "ycH8";
const j = "Dqmq";
const J = "i2Nn";
const Q = "fDEe";
const Z = "ogOp";
const ee = "R8fn";
const se = "XMA7";

const s = {
  container: z,
  logo: U,
  form: W,
  header: G,
  error: q,
  title: F,
  subtitle: H,
  inputs: K,
  inputGroup: X,
  label: Y,
  inputWrapper: x,
  input: $,
  inputError: j,
  fieldError: J,
  eyeButton: Q,
  forgotPassword: Z,
  submitButton: ee,
  signupLink: se,
};

export const Login = (r) => {
  const [a, h] = d("");
  const [l, C] = d("");
  const [u, A] = d(false);
  const [I, p] = d(false);
  const [b, t] = d(null);
  const [f, m] = d(null);
  const [w, E] = d("credentials");
  const { login, status, reset } = Y_1();
  const c = status === "loading";

  const D = (n) => {
    n.preventDefault();
    t(null);
    m(null);

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
        if (K_1(d)) {
          switch (d.code) {
            case aA.ACCOUNT_INVALID_CREDENTIALS: {
              t("Неверный email или пароль");
              break;
            }
            case aA.ACCOUNT_DEACTIVATED: {
              t("Аккаунт деактивирован");
              break;
            }
            case aA.ACCOUNT_TEMPORARILY_LOCKED: {
              t("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case aA.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case aA.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case aA.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              m("Почта этого домена не поддерживается");
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

  return u(S, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(aB, {}) }),
          w === "credentials"
            ? u("form", {
                className: s.form,
                onSubmit: D,
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
                            className: `${s.input} ${f ? s.inputError : ""}`,
                            value: a,
                            onInput: (n) => {
                              h(n.target.value);
                              m(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: c,
                          }),
                          f &&
                            u("span", {
                              className: s.fieldError,
                              children: f,
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
            : u(V_1, { email: a, onBack: L }),
        ],
      }),
      u(C, { isOpen: I, onClose: () => p(false), onVerify: _ }),
    ],
  });
};

export { Login as Login, Login as default };
