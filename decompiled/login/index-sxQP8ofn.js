import { d, w, q as q_1, x as x_1, ae, u, af, B, k } from "./index-DDTOXJaD.js";
import { C } from "./index-CtrmDHPu.js";
import { I as V_1 } from "./index-Ud_qOePC.js";
import { I, a } from "./IconEyeOff-D3w2rqGb.js";
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
    const r = new a.Error().stack;

    if (r) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[r] = "dbd6f961-c28a-402e-997e-191f199a6577";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-dbd6f961-c28a-402e-997e-191f199a6577";
    }
  } catch {}
})();
const U = "ShiD";
const W = "r4re";
const z = "zfiD";
const G = "Qo2d";
const x = "gQOS";
const Y = "srhl";
const F = "EIUG";
const Q = "pnbD";
const X = "YZRX";
const $ = "A7k0";
const q = "dCPW";
const H = "BRxR";
const K = "MPkD";
const Z = "Azrh";
const j = "SuVt";
const J = "Oom0";
const ee = "PUaA";
const se = "ykwa";

const s = {
  container: U,
  logo: W,
  form: z,
  header: G,
  error: x,
  title: Y,
  subtitle: F,
  inputs: Q,
  inputGroup: X,
  label: $,
  inputWrapper: q,
  input: H,
  inputError: K,
  fieldError: Z,
  eyeButton: j,
  forgotPassword: J,
  submitButton: ee,
  signupLink: se,
};

export const Login = (a) => {
  const [r, h] = d("");
  const [l, C] = d("");
  const [u, A] = d(false);
  const [w, p] = d(false);
  const [b, t] = d(null);
  const [f, m] = d(null);
  const [I, E] = d("credentials");
  const { login, status, reset } = w();
  const c = status === "loading";

  const k = (n) => {
    n.preventDefault();
    t(null);
    m(null);

    if (!r.trim()) {
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
          (await login({ email: r, password: l, turnstileToken: n })) !==
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
    [r, l, login]
  );

  const v = q_1(() => {
    reset();
    E("credentials");
  }, [reset]);

  return u(k, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(af, {}) }),
          I === "credentials"
            ? u("form", {
                className: s.form,
                onSubmit: k,
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
                            value: r,
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
            : u(V_1, { email: r, onBack: v }),
        ],
      }),
      u(C, { isOpen: w, onClose: () => p(false), onVerify: _ }),
    ],
  });
};

export { Login as Login, Login as default };
