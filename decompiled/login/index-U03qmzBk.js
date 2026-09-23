import { d, E, q as q_1, r, am, u, an, B, C as S_1 } from "./index-B74jCtUp.js";
import { C } from "./index-CyFcwqk9.js";
import { V } from "./index-BB70SdwT.js";
import { I, a } from "./IconEyeOff-BbmM5Yy0.js";
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
      r._sentryDebugIds[a] = "32ac1109-872a-4e26-80a4-30561ae8c8d5";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-32ac1109-872a-4e26-80a4-30561ae8c8d5";
    }
  } catch {}
})();
const W = "Nf45";
const z = "lIcw";
const G = "dVHg";
const U = "T3AZ";
const x = "ohPu";
const H = "mu2E";
const j = "AVyT";
const q = "xPAe";
const F = "da86";
const Y = "paue";
const $ = "ENzh";
const J = "tp0o";
const K = "HLP2";
const X = "qjej";
const Z = "A04R";
const Q = "mkc2";
const ee = "c1fb";
const se = "E9cJ";

const s = {
  container: W,
  logo: z,
  form: G,
  header: U,
  error: x,
  title: H,
  subtitle: j,
  inputs: q,
  inputGroup: F,
  label: Y,
  inputWrapper: $,
  input: J,
  inputError: K,
  fieldError: X,
  eyeButton: Z,
  forgotPassword: Q,
  submitButton: ee,
  signupLink: se,
};

export const Login = (r) => {
  const [a, h] = d("");
  const [l, A] = d("");
  const [u, C] = d(false);
  const [I, p] = d(false);
  const [E, t] = d(null);
  const [m, f] = d(null);
  const [w, b] = d("credentials");
  const { login, status, reset } = E();
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
          b("verify");
        }
      } catch (d) {
        if (r(d)) {
          switch (d.code) {
            case am.ACCOUNT_INVALID_CREDENTIALS: {
              t("Неверный email или пароль");
              break;
            }
            case am.ACCOUNT_DEACTIVATED: {
              t("Аккаунт деактивирован");
              break;
            }
            case am.ACCOUNT_TEMPORARILY_LOCKED: {
              t("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case am.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case am.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case am.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
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
    b("credentials");
  }, [reset]);

  return u(S_1, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(an, {}) }),
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
                  E && u("div", { className: s.error, children: E }),
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
                                onInput: (n) => A(n.target.value),
                                placeholder: "••••••••••••",
                                disabled: c,
                              }),
                              u("button", {
                                type: "button",
                                className: s.eyeButton,
                                onClick: () => C(!u),
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
            : u(V, { email: a, onBack: L }),
        ],
      }),
      u(C, { isOpen: I, onClose: () => p(false), onVerify: T }),
    ],
  });
};

export { Login as Login, Login as default };
