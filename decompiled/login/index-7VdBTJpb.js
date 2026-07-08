import { d, x as x_1, q as q_1, ab, ac, a, ad, B } from "./index-BewGW5_v.js";
import { C } from "./index-Cmc8MVwB.js";
import { V as V_1 } from "./index-DbeDp2u9.js";
import { I, a as a_1 } from "./IconEyeOff-CcCzexKA.js";
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
      r._sentryDebugIds[t] = "426862f2-ce1f-4f94-b23c-fa5bb210854a";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-426862f2-ce1f-4f94-b23c-fa5bb210854a";
    }
  } catch {}
})();
const V = "mMQ3";
const W = "lGjv";
const R = "Ar76";
const U = "yrCJ";
const z = "YnHI";
const F = "Wk1u";
const Y = "sWHg";
const x = "YvFE";
const H = "p6lL";
const K = "ffFP";
const Q = "Nl9K";
const $ = "cm67";
const j = "GKez";
const q = "sQsi";
const J = "ZnGU";
const X = "sihy";
const Z = "wIBr";
const ee = "OGSG";
const se = "PPNU";

const s = {
  page: V,
  container: W,
  logo: R,
  form: U,
  header: z,
  error: F,
  title: Y,
  subtitle: x,
  inputs: H,
  inputGroup: K,
  label: Q,
  inputWrapper: $,
  input: j,
  inputError: q,
  fieldError: J,
  eyeButton: X,
  forgotPassword: Z,
  submitButton: ee,
  signupLink: se,
};

export const Login = (r) => {
  const [t, h] = d("");
  const [l, C] = d("");
  const [u, I] = d(false);
  const [w, p] = d(false);
  const [b, a] = d(null);
  const [f, m] = d(null);
  const [A, E] = d("credentials");
  const { login, status, reset } = x_1();
  const c = status === "loading";

  const _ = (n) => {
    n.preventDefault();
    a(null);
    m(null);

    if (!t.trim()) {
      a("Введите email");
      return;
    }

    if (!l.trim()) {
      a("Введите пароль");
      return;
    }
    p(true);
  };

  const L = q_1(
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
              a("Неверный email или пароль");
              break;
            }
            case ac.ACCOUNT_DEACTIVATED: {
              a("Аккаунт деактивирован");
              break;
            }
            case ac.ACCOUNT_TEMPORARILY_LOCKED: {
              a("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case ac.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ac.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ac.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              m("Этот email домен не разрешён");
              break;
            }
            default: {
              a(d.message || "Ошибка входа");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [t, l, login]
  );

  const k = q_1(() => {
    reset();
    E("credentials");
  }, [reset]);

  return a("div", {
    className: s.page,
    children: [
      a("div", {
        className: s.container,
        children: [
          a("div", { className: s.logo, children: a(ad, {}) }),
          A === "credentials"
            ? a("form", {
                className: s.form,
                onSubmit: _,
                children: [
                  a("div", {
                    className: s.header,
                    children: [
                      a("h1", { className: s.title, children: "Вход" }),
                      a("p", {
                        className: s.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  b && a("div", { className: s.error, children: b }),
                  a("div", {
                    className: s.inputs,
                    children: [
                      a("div", {
                        className: s.inputGroup,
                        children: [
                          a("label", {
                            className: s.label,
                            children: "E-Mail",
                          }),
                          a("input", {
                            type: "email",
                            className: `${s.input} ${f ? s.inputError : ""}`,
                            value: t,
                            onInput: (n) => {
                              h(n.target.value);
                              m(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: c,
                          }),
                          f &&
                            a("span", {
                              className: s.fieldError,
                              children: f,
                            }),
                        ],
                      }),
                      a("div", {
                        className: s.inputGroup,
                        children: [
                          a("label", {
                            className: s.label,
                            children: "Пароль",
                          }),
                          a("div", {
                            className: s.inputWrapper,
                            children: [
                              a("input", {
                                type: u ? "text" : "password",
                                className: s.input,
                                value: l,
                                onInput: (n) => C(n.target.value),
                                placeholder: "••••••••••••",
                                disabled: c,
                              }),
                              a("button", {
                                type: "button",
                                className: s.eyeButton,
                                onClick: () => I(!u),
                                children: u
                                  ? a(I, { size: 20 })
                                  : a(a_1, { size: 20 }),
                              }),
                            ],
                          }),
                          a("a", {
                            href: "/forgot-password",
                            className: s.forgotPassword,
                            children: "Забыли пароль?",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: s.submitButton,
                    disabled: c,
                    children: c ? "Вход..." : "Войти",
                  }),
                  a("p", {
                    className: s.signupLink,
                    children: [
                      "Еще нет аккаунта? ",
                      a("a", {
                        href: "/register",
                        children: "Создать аккаунт",
                      }),
                    ],
                  }),
                ],
              })
            : a(V_1, { email: t, onBack: k }),
        ],
      }),
      a(C, { isOpen: w, onClose: () => p(false), onVerify: L }),
    ],
  });
};

export { Login as Login, Login as default };
