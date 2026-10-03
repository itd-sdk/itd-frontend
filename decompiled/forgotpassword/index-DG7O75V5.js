import {
  d,
  q,
  aD,
  e_1 as K_1,
  aB,
  u as e_1,
  u,
  aC,
  B,
  S,
} from "./index-CsuAWxkQ.js";
import { K_1 as K_1_1, C } from "./index-DT1tSoMS.js";
import { I, a } from "./IconEyeOff-s_19qPRg.js";
(() => {
  try {
    const d =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    d.SENTRY_RELEASE = { id: "1.1.2" };
    const n = new d.Error().stack;

    if (n) {
      d._sentryDebugIds = d._sentryDebugIds || {};
      d._sentryDebugIds[n] = "7c9c7b0b-48a0-4fbe-871f-23858b41b8f4";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-7c9c7b0b-48a0-4fbe-871f-23858b41b8f4";
    }
  } catch {}
})();
const ee = "elzE";
const se = "umKP";
const ae = "Tf7m";
const te = "wg0N";
const re = "joah";
const ne = "D6nq";
const le = "zDXx";
const oe = "urD6";
const ie = "q1ea";
const ce = "bTkg";
const de = "YSmg";
const ue = "YgWJ";
const pe = "WzeY";
const me = "QhBh";
const he = "O3Rh";
const fe = "Mo9M";
const be = "gibb";
const Ne = "xb88";
const Ee = "jHQm";

const s = {
  container: ee,
  logo: se,
  form: ae,
  header: te,
  title: re,
  subtitle: ne,
  error: le,
  inputs: oe,
  inputGroup: ie,
  label: ce,
  input: de,
  inputWrapper: ue,
  inputError: pe,
  fieldError: me,
  eyeButton: he,
  success: fe,
  backButton: be,
  submitButton: Ne,
  backLink: Ee,
};

export const ForgotPassword = (d) => {
  const [n, A] = d("");
  const [N, x] = d("");
  const [B, L] = d("");
  const [u, a] = d(null);
  const [y, p] = d(null);
  const [g, c] = d(null);
  const [m, E] = d(false);
  const [$, I] = d(false);
  const [f, h] = d("email");
  const [o, R] = d("");
  const [k, S] = d("");
  const [v, F] = d(false);
  const [T, G] = d(false);
  const [C, w] = d(null);
  const [V, D] = d(false);

  const Y = (t) => {
    t.preventDefault();
    a(null);
    p(null);

    if (!n.trim()) {
      p("Введите email");
      return;
    }

    I(true);
  };

  const U = q(
    async (t) => {
      I(false);
      E(true);
      try {
        const i = await aD.forgotPassword({ email: n, turnstileToken: t });
        x(i.flowToken ?? "");
        h("otp");
      } catch (i) {
        if (K_1(i)) {
          switch (i.code) {
            case aB.ENTITY_NOT_FOUND: {
              p("Аккаунт с таким email не найден");
              break;
            }
            case aB.VALIDATION_ERROR: {
              p("Введите корректный email");
              break;
            }
            case aB.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              p("Почта этого домена не поддерживается");
              break;
            }
            case aB.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case aB.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              a(i.message || "Произошла ошибка");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        E(false);
      }
    },
    [n]
  );

  const X = q((t) => {
    L(t);
    a(null);
    h("password");
  }, []);

  const q = q(
    async (t) => {
      t.preventDefault();
      a(null);
      c(null);
      w(null);

      if (!o.trim()) {
        c("Введите новый пароль");
        return;
      }

      if (o.length < 10) {
        c("Минимум 10 символов");
        return;
      }
      if (o.length > 128) {
        c("Максимум 128 символов");
        return;
      }
      if (!/^[\x21-\x7E]+$/.test(o)) {
        c("Только латиница, цифры и знаки пунктуации");
        return;
      }
      if (o !== k) {
        w("Пароли не совпадают");
        return;
      }
      E(true);
      try {
        await aD.resetPassword({
          email: n,
          flowToken: N,
          otp: B,
          newPassword: o,
        });

        e_1("/login");
      } catch (i) {
        if (K_1(i)) {
          switch (i.code) {
            case aB.OTP_INVALID: {
              a("Неверный код. Попробуйте снова");
              h("otp");
              L("");
              break;
            }
            case aB.MISSING_FLOW_TOKEN:
            case aB.UNAUTHORIZED: {
              a("Сессия истекла. Начните заново");
              h("email");
              break;
            }
            case aB.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case aB.VALIDATION_ERROR: {
              c("Пароль не соответствует требованиям");
              break;
            }
            default: {
              a(i.message || "Произошла ошибка");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        E(false);
      }
    },
    [n, N, B, o, k]
  );

  const H = q(async () => {
    a(null);
    D(false);
    try {
      await aD.resendOtp({ email: n, flowToken: N });
      D(true);

      setTimeout(() => D(false), 3000 /* 3e3 */);
    } catch (t) {
      if (K_1(t)) {
        if (t.code === aB.RATE_LIMIT_EXCEEDED) {
          a("Слишком много запросов. Попробуйте позже");
        } else {
          a(t.message || "Не удалось отправить код");
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [n, N]);

  const P = q(() => {
    a(null);

    if (f === "password") {
      c(null);
      w(null);
      R("");
      S("");
      h("otp");
    } else {
      h("email");
    }
  }, [f]);

  return u(S, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(aC, {}) }),
          f === "email" &&
            u("form", {
              className: s.form,
              onSubmit: Y,
              children: [
                u("div", {
                  className: s.header,
                  children: [
                    u("h1", {
                      className: s.title,
                      children: "Забыли пароль?",
                    }),
                    u("p", {
                      className: s.subtitle,
                      children: "Введите ваш E-Mail для восстановления",
                    }),
                  ],
                }),
                u && u("div", { className: s.error, children: u }),
                u("div", {
                  className: s.inputs,
                  children: u("div", {
                    className: s.inputGroup,
                    children: [
                      u("label", { className: s.label, children: "E-Mail" }),
                      u("input", {
                        type: "email",
                        className: `${s.input} ${y ? s.inputError : ""}`,
                        value: n,
                        onInput: (t) => {
                          A(t.target.value);
                          p(null);
                        },
                        placeholder: "ilya@gmail.com",
                        disabled: m,
                      }),
                      y && u("span", { className: s.fieldError, children: y }),
                    ],
                  }),
                }),
                u(B, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: s.submitButton,
                  disabled: m,
                  children: m ? "Отправка..." : "Отправить",
                }),
                u("p", {
                  className: s.backLink,
                  children: u("a", {
                    href: "/login",
                    children: "Вернуться ко входу",
                  }),
                }),
              ],
            }),
          f === "otp" &&
            u("div", {
              className: s.form,
              children: [
                u("div", {
                  className: s.header,
                  children: [
                    u("h1", { className: s.title, children: "Введите код" }),
                    u("p", {
                      className: s.subtitle,
                      children: ["Мы отправили шестизначный код на ", n],
                    }),
                  ],
                }),
                u && u("div", { className: s.error, children: u }),
                V &&
                  u("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                u(K_1_1, {
                  onSubmit: X,
                  onResend: H,
                  disabled: m,
                  buttonText: "Продолжить",
                }),
                u("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: P,
                  children: "Назад",
                }),
              ],
            }),
          f === "password" &&
            u("form", {
              className: s.form,
              onSubmit: q,
              children: [
                u("div", {
                  className: s.header,
                  children: [
                    u("h1", { className: s.title, children: "Новый пароль" }),
                    u("p", {
                      className: s.subtitle,
                      children: "Придумайте новый пароль для вашего аккаунта",
                    }),
                  ],
                }),
                u && u("div", { className: s.error, children: u }),
                u("div", {
                  className: s.inputs,
                  children: [
                    u("div", {
                      className: s.inputGroup,
                      children: [
                        u("label", {
                          className: s.label,
                          children: "Новый пароль",
                        }),
                        u("div", {
                          className: s.inputWrapper,
                          children: [
                            u("input", {
                              type: v ? "text" : "password",
                              className: `${s.input} ${g ? s.inputError : ""}`,
                              value: o,
                              onInput: (t) => {
                                R(t.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => F(!v),
                              children: v
                                ? u(I, { size: 20 })
                                : u(a, { size: 20 }),
                            }),
                          ],
                        }),
                        g &&
                          u("span", { className: s.fieldError, children: g }),
                      ],
                    }),
                    u("div", {
                      className: s.inputGroup,
                      children: [
                        u("label", {
                          className: s.label,
                          children: "Повторите пароль",
                        }),
                        u("div", {
                          className: s.inputWrapper,
                          children: [
                            u("input", {
                              type: T ? "text" : "password",
                              className: `${s.input} ${C ? s.inputError : ""}`,
                              value: k,
                              onInput: (t) => {
                                S(t.target.value);
                                w(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => G(!T),
                              children: T
                                ? u(I, { size: 20 })
                                : u(a, { size: 20 }),
                            }),
                          ],
                        }),
                        C &&
                          u("span", { className: s.fieldError, children: C }),
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
                  disabled: m || !o.trim(),
                  children: m ? "Сброс..." : "Сбросить пароль",
                }),
                u("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: P,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      u(C, { isOpen: $, onClose: () => I(false), onVerify: U }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
