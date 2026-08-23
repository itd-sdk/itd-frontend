import {
  d,
  e_1 as q_1,
  ag,
  a as x_1,
  ae as ae_1,
  u as e_1,
  u,
  af,
  B,
  k,
} from "./index-DBLtLuBZ.js";
import { O, C } from "./index-CqDyc-Mo.js";
import { I, a } from "./IconEyeOff-47Vevy3T.js";
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
    const l = new d.Error().stack;

    if (l) {
      d._sentryDebugIds = d._sentryDebugIds || {};
      d._sentryDebugIds[l] = "28d4b2e5-f42e-44b3-9c2e-bd96bfb48f84";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-28d4b2e5-f42e-44b3-9c2e-bd96bfb48f84";
    }
  } catch {}
})();
const ee = "O2cV";
const se = "skc0";
const te = "XspA";
const ae = "P44e";
const re = "gOmt";
const le = "DwIP";
const ne = "xa5T";
const oe = "fH98";
const ie = "SvLH";
const ce = "eBlH";
const de = "pt4s";
const ue = "jFWh";
const pe = "MgkU";
const me = "lf09";
const he = "pnu3";
const fe = "zMMU";
const be = "Z8aZ";
const Ne = "qwhA";
const Ee = "SmiY";

const s = {
  container: ee,
  logo: se,
  form: te,
  header: ae,
  title: re,
  subtitle: le,
  error: ne,
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
  const [l, D] = d("");
  const [N, $] = d("");
  const [L, B] = d("");
  const [u, t] = d(null);
  const [y, p] = d(null);
  const [I, c] = d(null);
  const [m, E] = d(false);
  const [z, k] = d(false);
  const [f, h] = d("email");
  const [o, P] = d("");
  const [g, S] = d("");
  const [v, F] = d(false);
  const [T, G] = d(false);
  const [C, w] = d(null);
  const [U, O] = d(false);

  const V = (a) => {
    a.preventDefault();
    t(null);
    p(null);

    if (!l.trim()) {
      p("Введите email");
      return;
    }

    k(true);
  };

  const H = q_1(
    async (a) => {
      k(false);
      E(true);
      try {
        const i = await ag.forgotPassword({ email: l, turnstileToken: a });
        $(i.flowToken ?? "");
        h("otp");
      } catch (i) {
        if (x_1(i)) {
          switch (i.code) {
            case ae_1.ENTITY_NOT_FOUND: {
              p("Аккаунт с таким email не найден");
              break;
            }
            case ae_1.VALIDATION_ERROR: {
              p("Введите корректный email");
              break;
            }
            case ae_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              p("Почта этого домена не поддерживается");
              break;
            }
            case ae_1.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ae_1.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              t(i.message || "Произошла ошибка");
            }
          }
        } else {
          t("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        E(false);
      }
    },
    [l]
  );

  const X = q_1((a) => {
    B(a);
    t(null);
    h("password");
  }, []);

  const Y = q_1(
    async (a) => {
      a.preventDefault();
      t(null);
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
      if (o !== g) {
        w("Пароли не совпадают");
        return;
      }
      E(true);
      try {
        await ag.resetPassword({
          email: l,
          flowToken: N,
          otp: L,
          newPassword: o,
        });

        e_1("/login");
      } catch (i) {
        if (x_1(i)) {
          switch (i.code) {
            case ae_1.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              h("otp");
              B("");
              break;
            }
            case ae_1.MISSING_FLOW_TOKEN:
            case ae_1.UNAUTHORIZED: {
              t("Сессия истекла. Начните заново");
              h("email");
              break;
            }
            case ae_1.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ae_1.VALIDATION_ERROR: {
              c("Пароль не соответствует требованиям");
              break;
            }
            default: {
              t(i.message || "Произошла ошибка");
            }
          }
        } else {
          t("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        E(false);
      }
    },
    [l, N, L, o, g]
  );

  const Z = q_1(async () => {
    t(null);
    O(false);
    try {
      await ag.resendOtp({ email: l, flowToken: N });
      O(true);

      setTimeout(() => O(false), 3000 /* 3e3 */);
    } catch (a) {
      if (x_1(a)) {
        if (a.code === ae_1.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(a.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [l, N]);

  const R = q_1(() => {
    t(null);

    if (f === "password") {
      c(null);
      w(null);
      P("");
      S("");
      h("otp");
    } else {
      h("email");
    }
  }, [f]);

  return u(k, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(af, {}) }),
          f === "email" &&
            u("form", {
              className: s.form,
              onSubmit: V,
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
                        value: l,
                        onInput: (a) => {
                          D(a.target.value);
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
                      children: ["Мы отправили шестизначный код на ", l],
                    }),
                  ],
                }),
                u && u("div", { className: s.error, children: u }),
                U &&
                  u("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                u(O, {
                  onSubmit: X,
                  onResend: Z,
                  disabled: m,
                  buttonText: "Продолжить",
                }),
                u("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: R,
                  children: "Назад",
                }),
              ],
            }),
          f === "password" &&
            u("form", {
              className: s.form,
              onSubmit: Y,
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
                              className: `${s.input} ${I ? s.inputError : ""}`,
                              value: o,
                              onInput: (a) => {
                                P(a.target.value);
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
                        I &&
                          u("span", { className: s.fieldError, children: I }),
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
                              value: g,
                              onInput: (a) => {
                                S(a.target.value);
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
                  onClick: R,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      u(C, { isOpen: z, onClose: () => k(false), onVerify: H }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
