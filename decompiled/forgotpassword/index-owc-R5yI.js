import {
  d,
  af as q_1,
  ag,
  x,
  ae as ae_1,
  u as e_1,
  u,
  af,
  B,
  k,
} from "./index-pEgBAsWz.js";
import { O, C } from "./index-BjZiGhmq.js";
import { I, a } from "./IconEyeOff-ConI11na.js";
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
      d._sentryDebugIds[n] = "53731cc9-553d-4d71-9982-8066c1b8bfdf";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-53731cc9-553d-4d71-9982-8066c1b8bfdf";
    }
  } catch {}
})();
const ee = "MAO6";
const se = "ZD1J";
const te = "Oq76";
const ae = "waeb";
const re = "cUOy";
const ne = "LdFG";
const le = "Z9MF";
const oe = "v4uU";
const ie = "H7zu";
const ce = "fJLR";
const de = "mrfs";
const ue = "j2is";
const pe = "cjvd";
const me = "JZMj";
const he = "cdC8";
const fe = "vdnt";
const be = "cuvD";
const Ne = "B4Qv";
const Ee = "CT4p";

const s = {
  container: ee,
  logo: se,
  form: te,
  header: ae,
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
  const [N, $] = d("");
  const [L, B] = d("");
  const [u, t] = d(null);
  const [y, p] = d(null);
  const [v, c] = d(null);
  const [m, E] = d(false);
  const [x, I] = d(false);
  const [f, h] = d("email");
  const [o, R] = d("");
  const [k, P] = d("");
  const [g, z] = d(false);
  const [C, G] = d(false);
  const [T, w] = d(null);
  const [U, O] = d(false);

  const V = (a) => {
    a.preventDefault();
    t(null);
    p(null);

    if (!n.trim()) {
      p("Введите email");
      return;
    }

    I(true);
  };

  const Z = q_1(
    async (a) => {
      I(false);
      E(true);
      try {
        const i = await ag.forgotPassword({ email: n, turnstileToken: a });
        $(i.flowToken ?? "");
        h("otp");
      } catch (i) {
        if (x(i)) {
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
    [n]
  );

  const j = q_1((a) => {
    B(a);
    t(null);
    h("password");
  }, []);

  const H = q_1(
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
      if (o !== k) {
        w("Пароли не совпадают");
        return;
      }
      E(true);
      try {
        await ag.resetPassword({
          email: n,
          flowToken: N,
          otp: L,
          newPassword: o,
        });

        e_1("/login");
      } catch (i) {
        if (x(i)) {
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
    [n, N, L, o, k]
  );

  const J = q_1(async () => {
    t(null);
    O(false);
    try {
      await ag.resendOtp({ email: n, flowToken: N });
      O(true);

      setTimeout(() => O(false), 3000 /* 3e3 */);
    } catch (a) {
      if (x(a)) {
        if (a.code === ae_1.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(a.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [n, N]);

  const S = q_1(() => {
    t(null);

    if (f === "password") {
      c(null);
      w(null);
      R("");
      P("");
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
                        value: n,
                        onInput: (a) => {
                          A(a.target.value);
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
                U &&
                  u("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                u(O, {
                  onSubmit: j,
                  onResend: J,
                  disabled: m,
                  buttonText: "Продолжить",
                }),
                u("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: S,
                  children: "Назад",
                }),
              ],
            }),
          f === "password" &&
            u("form", {
              className: s.form,
              onSubmit: H,
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
                              type: g ? "text" : "password",
                              className: `${s.input} ${v ? s.inputError : ""}`,
                              value: o,
                              onInput: (a) => {
                                R(a.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => z(!g),
                              children: g
                                ? u(I, { size: 20 })
                                : u(a, { size: 20 }),
                            }),
                          ],
                        }),
                        v &&
                          u("span", { className: s.fieldError, children: v }),
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
                              type: C ? "text" : "password",
                              className: `${s.input} ${T ? s.inputError : ""}`,
                              value: k,
                              onInput: (a) => {
                                P(a.target.value);
                                w(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => G(!C),
                              children: C
                                ? u(I, { size: 20 })
                                : u(a, { size: 20 }),
                            }),
                          ],
                        }),
                        T &&
                          u("span", { className: s.fieldError, children: T }),
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
                  onClick: S,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      u(C, { isOpen: x, onClose: () => I(false), onVerify: Z }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
