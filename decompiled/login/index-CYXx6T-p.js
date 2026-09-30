import {
  d,
  Y as Y_1,
  q as q_1,
  K as K_1,
  aA,
  u,
  aB,
  aB as aB_1,
  S,
} from "./index-BuVp7kGl.js";
import { C } from "./index-9BixCiVZ.js";
import { I as V_1 } from "./index-BFkLWxDC.js";
import { I, a } from "./IconEyeOff-BHy0L5gs.js";
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
      a._sentryDebugIds[r] = "c1099ef5-4f09-4c3c-a204-06162682047d";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-c1099ef5-4f09-4c3c-a204-06162682047d";
    }
  } catch {}
})();
const R = "k4mh";
const x = "JCH7";
const U = "GlBg";
const W = "BytK";
const K = "ueKT";
const z = "gwxL";
const F = "xNoe";
const H = "u7x5";
const Y = "DU0t";
const $ = "Ly3h";
const q = "ysB8";
const J = "o5I5";
const X = "HRpG";
const Z = "GFnG";
const j = "gxh3";
const Q = "dECa";
const ee = "MZih";
const se = "dTV9";

const s = {
  container: R,
  logo: x,
  form: U,
  header: W,
  error: K,
  title: z,
  subtitle: F,
  inputs: H,
  inputGroup: Y,
  label: $,
  inputWrapper: q,
  input: J,
  inputError: X,
  fieldError: Z,
  eyeButton: j,
  forgotPassword: Q,
  submitButton: ee,
  signupLink: se,
};

export const Login = (a) => {
  const [r, h] = d("");
  const [l, C] = d("");
  const [u, I] = d(false);
  const [w, p] = d(false);
  const [E, t] = d(null);
  const [m, f] = d(null);
  const [A, b] = d("credentials");
  const { login, status, reset } = Y_1();
  const c = status === "loading";

  const v = (n) => {
    n.preventDefault();
    t(null);
    f(null);

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

  const L = q_1(
    async (n) => {
      p(false);
      try {
        if (
          (await login({ email: r, password: l, turnstileToken: n })) !==
          "authenticated"
        ) {
          b("verify");
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
    [r, l, login]
  );

  const T = q_1(() => {
    reset();
    b("credentials");
  }, [reset]);

  return u(S, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(aB, {}) }),
          A === "credentials"
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
                            value: r,
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
                  u(aB_1, {
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
            : u(V_1, { email: r, onBack: T }),
        ],
      }),
      u(C, { isOpen: w, onClose: () => p(false), onVerify: L }),
    ],
  });
};

export { Login as Login, Login as default };
