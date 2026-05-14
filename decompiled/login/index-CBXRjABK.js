import { d, x as x_1, q as q_1, aa, ab, a, ac, B } from "./index-7xRaK15k.js";
import { C } from "./index-i6WLEtuK.js";
import { V as V_1 } from "./index-R2xnohpw.js";
import { I, a as a_1 } from "./IconEyeOff-DAFH4tzs.js";
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
    r.SENTRY_RELEASE = { id: "1.1.1" };
    const t = new r.Error().stack;

    if (t) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[t] = "06c9a021-1970-4ccc-8c19-947fc3c5c705";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-06c9a021-1970-4ccc-8c19-947fc3c5c705";
    }
  } catch {}
})();
const V = "k35J";
const M = "nyd4";
const x = "rheG";
const W = "Naub";
const U = "AQr9";
const Y = "d1Qf";
const z = "Yx9b";
const Q = "mZaG";
const F = "heNc";
const J = "QZYO";
const Z = "NeGP";
const $ = "o4Bh";
const j = "o7Ja";
const q = "d2AC";
const H = "eRGG";
const K = "DAIg";
const X = "jxG2";
const ee = "b9y0";
const se = "ocfo";

const s = {
  page: V,
  container: M,
  logo: x,
  form: W,
  header: U,
  error: Y,
  title: z,
  subtitle: Q,
  inputs: F,
  inputGroup: J,
  label: Z,
  inputWrapper: $,
  input: j,
  inputError: q,
  fieldError: H,
  eyeButton: K,
  forgotPassword: X,
  submitButton: ee,
  signupLink: se,
};

export const Login = (r) => {
  const [t, h] = d("");
  const [l, C] = d("");
  const [u, A] = d(false);
  const [I, p] = d(false);
  const [b, a] = d(null);
  const [m, f] = d(null);
  const [w, E] = d("credentials");
  const { login, status, reset } = x_1();
  const c = status === "loading";

  const _ = (n) => {
    n.preventDefault();
    a(null);
    f(null);

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
        if (aa(d)) {
          switch (d.code) {
            case ab.ACCOUNT_INVALID_CREDENTIALS: {
              a("Неверный email или пароль");
              break;
            }
            case ab.ACCOUNT_DEACTIVATED: {
              a("Аккаунт деактивирован");
              break;
            }
            case ab.ACCOUNT_TEMPORARILY_LOCKED: {
              a("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case ab.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ab.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ab.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              f("Этот email домен не разрешён");
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
          a("div", { className: s.logo, children: a(ac, {}) }),
          w === "credentials"
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
                            className: `${s.input} ${m ? s.inputError : ""}`,
                            value: t,
                            onInput: (n) => {
                              h(n.target.value);
                              f(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: c,
                          }),
                          m &&
                            a("span", {
                              className: s.fieldError,
                              children: m,
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
                                onClick: () => A(!u),
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
      a(C, { isOpen: I, onClose: () => p(false), onVerify: D }),
    ],
  });
};

export { Login as Login, Login as default };
