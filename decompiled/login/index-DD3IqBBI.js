import {
  d,
  x as x_1,
  q as q_1,
  ab,
  ac,
  a as a_1,
  ad,
  ad as ad_1,
} from "./index-CFv_0Hh6.js";
import { C } from "./index-DL9gK-0-.js";
import { V as V_1 } from "./index-Doon_v0g.js";
import { I, a as a_2 } from "./IconEyeOff-C3SWTYTF.js";
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
      r._sentryDebugIds[t] = "a3e23039-7df3-4c25-aa0b-d4bacefad982";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-a3e23039-7df3-4c25-aa0b-d4bacefad982";
    }
  } catch {}
})();
const V = "Ajfi";
const G = "qoD5";
const R = "ikiU";
const U = "nIlj";
const H = "P7ug";
const z = "qC3T";
const F = "r6wI";
const q = "yyHT";
const x = "JtHE";
const j = "GAiH";
const K = "MPoe";
const Y = "BAAC";
const $ = "tOIi";
const J = "Dgrz";
const X = "W4lB";
const Q = "BGWU";
const Z = "fHkW";
const ee = "FKFA";
const ae = "MwS2";

const a = {
  page: V,
  container: G,
  logo: R,
  form: U,
  header: H,
  error: z,
  title: F,
  subtitle: q,
  inputs: x,
  inputGroup: j,
  label: K,
  inputWrapper: Y,
  input: $,
  inputError: J,
  fieldError: X,
  eyeButton: Q,
  forgotPassword: Z,
  submitButton: ee,
  signupLink: ae,
};

export const Login = (r) => {
  const [t, h] = d("");
  const [l, A] = d("");
  const [u, C] = d(false);
  const [I, p] = d(false);
  const [b, s] = d(null);
  const [f, m] = d(null);
  const [w, E] = d("credentials");
  const { login, status, reset } = x_1();
  const c = status === "loading";

  const _ = (n) => {
    n.preventDefault();
    s(null);
    m(null);

    if (!t.trim()) {
      s("Введите email");
      return;
    }

    if (!l.trim()) {
      s("Введите пароль");
      return;
    }
    p(true);
  };

  const D = q_1(
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
              s("Неверный email или пароль");
              break;
            }
            case ac.ACCOUNT_DEACTIVATED: {
              s("Аккаунт деактивирован");
              break;
            }
            case ac.ACCOUNT_TEMPORARILY_LOCKED: {
              s("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case ac.CAPTCHA_FAILED: {
              s("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ac.RATE_LIMIT_EXCEEDED: {
              s("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ac.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              m("Этот email домен не разрешён");
              break;
            }
            default: {
              s(d.message || "Ошибка входа");
            }
          }
        } else {
          s("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [t, l, login]
  );

  const T = q_1(() => {
    reset();
    E("credentials");
  }, [reset]);

  return a_1("div", {
    className: a.page,
    children: [
      a_1("div", {
        className: a.container,
        children: [
          a_1("div", { className: a.logo, children: a_1(ad, {}) }),
          w === "credentials"
            ? a_1("form", {
                className: a.form,
                onSubmit: _,
                children: [
                  a_1("div", {
                    className: a.header,
                    children: [
                      a_1("h1", { className: a.title, children: "Вход" }),
                      a_1("p", {
                        className: a.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  b && a_1("div", { className: a.error, children: b }),
                  a_1("div", {
                    className: a.inputs,
                    children: [
                      a_1("div", {
                        className: a.inputGroup,
                        children: [
                          a_1("label", {
                            className: a.label,
                            children: "E-Mail",
                          }),
                          a_1("input", {
                            type: "email",
                            className: `${a.input} ${f ? a.inputError : ""}`,
                            value: t,
                            onInput: (n) => {
                              h(n.target.value);
                              m(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: c,
                          }),
                          f &&
                            a_1("span", {
                              className: a.fieldError,
                              children: f,
                            }),
                        ],
                      }),
                      a_1("div", {
                        className: a.inputGroup,
                        children: [
                          a_1("label", {
                            className: a.label,
                            children: "Пароль",
                          }),
                          a_1("div", {
                            className: a.inputWrapper,
                            children: [
                              a_1("input", {
                                type: u ? "text" : "password",
                                className: a.input,
                                value: l,
                                onInput: (n) => A(n.target.value),
                                placeholder: "••••••••••••",
                                disabled: c,
                              }),
                              a_1("button", {
                                type: "button",
                                className: a.eyeButton,
                                onClick: () => C(!u),
                                children: u
                                  ? a_1(I, { size: 20 })
                                  : a_1(a_2, { size: 20 }),
                              }),
                            ],
                          }),
                          a_1("a", {
                            href: "/forgot-password",
                            className: a.forgotPassword,
                            children: "Забыли пароль?",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a_1(ad_1, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: a.submitButton,
                    disabled: c,
                    children: c ? "Вход..." : "Войти",
                  }),
                  a_1("p", {
                    className: a.signupLink,
                    children: [
                      "Еще нет аккаунта? ",
                      a_1("a", {
                        href: "/register",
                        children: "Создать аккаунт",
                      }),
                    ],
                  }),
                ],
              })
            : a_1(V_1, { email: t, onBack: T }),
        ],
      }),
      a_1(C, { isOpen: I, onClose: () => p(false), onVerify: D }),
    ],
  });
};

export { Login as Login, Login as default };
