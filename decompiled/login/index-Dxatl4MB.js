import { d, w, q as q_1, x as x_1, ae, u, af, B, k } from "./index-B9FitUXy.js";
import { C } from "./index-CanNJpc-.js";
import { k as k_1 } from "./index-baAbDm8Z.js";
import { I, a } from "./IconEyeOff-D9eoRMHE.js";
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
      r._sentryDebugIds[a] = "4071b4f9-30d0-4453-ac53-c3b3f6a3add6";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-4071b4f9-30d0-4453-ac53-c3b3f6a3add6";
    }
  } catch {}
})();
const U = "ZjsI";
const W = "T1kv";
const q = "CNnV";
const G = "ac5F";
const x = "skUO";
const z = "TCyR";
const F = "VRJ0";
const H = "VEHg";
const Y = "qELo";
const Z = "qrQE";
const J = "ebq3";
const X = "IdmX";
const $ = "IZPY";
const j = "chIc";
const K = "lv4o";
const Q = "w69u";
const ee = "B2AZ";
const se = "sRHJ";

const s = {
  container: U,
  logo: W,
  form: q,
  header: G,
  error: x,
  title: z,
  subtitle: F,
  inputs: H,
  inputGroup: Y,
  label: Z,
  inputWrapper: J,
  input: X,
  inputError: $,
  fieldError: j,
  eyeButton: K,
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
  const [f, m] = d(null);
  const [A, E] = d("credentials");
  const { login, status, reset } = w();
  const c = status === "loading";

  const _ = (n) => {
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

  const k = q_1(
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
    [a, l, login]
  );

  const T = q_1(() => {
    reset();
    E("credentials");
  }, [reset]);

  return u(k, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(af, {}) }),
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
            : u(k_1, { email: a, onBack: T }),
        ],
      }),
      u(C, { isOpen: w, onClose: () => p(false), onVerify: k }),
    ],
  });
};

export { Login as Login, Login as default };
