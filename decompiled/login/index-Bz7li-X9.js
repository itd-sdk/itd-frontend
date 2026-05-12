import { d, w, q as q_1, a8, a9, a, aa, B } from "./index-DDCL-vHK.js";
import { C } from "./index-Bt-cCGG-.js";
import { a_1 as V_1 } from "./index-scvl2LQN.js";
import { I, a as a_1 } from "./IconEyeOff-DkfQwtOQ.js";
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
    r.SENTRY_RELEASE = { id: "1.1.0" };
    const t = new r.Error().stack;

    if (t) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[t] = "961310cf-3c23-4a8c-a489-31a2793cdca7";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-961310cf-3c23-4a8c-a489-31a2793cdca7";
    }
  } catch {}
})();
const M = "ocqg";
const W = "VYcU";
const G = "L2Kv";
const U = "Fl6L";
const q = "VgHq";
const F = "PwUg";
const J = "cR32";
const Y = "WPW7";
const x = "EtIJ";
const z = "j7Jb";
const H = "FMNJ";
const K = "bYdm";
const j = "RIAJ";
const $ = "a1lG";
const X = "osqC";
const Q = "k1Rp";
const Z = "cmKx";
const ee = "HRBv";
const se = "GOnj";

const s = {
  page: M,
  container: W,
  logo: G,
  form: U,
  header: q,
  error: F,
  title: J,
  subtitle: Y,
  inputs: x,
  inputGroup: z,
  label: H,
  inputWrapper: K,
  input: j,
  inputError: $,
  fieldError: X,
  eyeButton: Q,
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
  const [m, f] = d(null);
  const [A, E] = d("credentials");
  const { login, status, reset } = w();
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
        if (a8(d)) {
          switch (d.code) {
            case a9.ACCOUNT_INVALID_CREDENTIALS: {
              a("Неверный email или пароль");
              break;
            }
            case a9.ACCOUNT_DEACTIVATED: {
              a("Аккаунт деактивирован");
              break;
            }
            case a9.ACCOUNT_TEMPORARILY_LOCKED: {
              a("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case a9.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case a9.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case a9.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
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
          a("div", { className: s.logo, children: a(aa, {}) }),
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
