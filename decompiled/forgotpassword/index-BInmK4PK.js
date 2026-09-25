import {
  d,
  q,
  ag,
  B as x_1,
  ae as ae_1,
  u as e_1,
  u,
  af,
  B,
  S,
} from "./index-gHxZkwFX.js";
import { c, O, C } from "./index-DNhfAHWL.js";
import { I, a } from "./IconEyeOff-Cv1a3BJb.js";
(() => {
  try {
    const c =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    c.SENTRY_RELEASE = { id: "1.1.4" };
    const n = new c.Error().stack;

    if (n) {
      c._sentryDebugIds = c._sentryDebugIds || {};
      c._sentryDebugIds[n] = "28af3b14-37c3-462a-8a40-5c178a5597ef";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-28af3b14-37c3-462a-8a40-5c178a5597ef";
    }
  } catch {}
})();
const ae = "LhH7";
const te = "QKbj";
const re = "Zi1F";
const ne = "xzZQ";
const le = "DAvg";
const oe = "dWSI";
const ie = "GMPJ";
const ce = "YASO";
const de = "MuvB";
const ue = "anCx";
const pe = "Kvhh";
const me = "ofVs";
const he = "Ziim";
const fe = "uapj";
const be = "zfiy";
const Ne = "qfqJ";
const Ee = "VMyt";
const we = "BGJg";
const ye = "r4NC";

const s = {
  container: ae,
  logo: te,
  form: re,
  header: ne,
  title: le,
  subtitle: oe,
  error: ie,
  inputs: ce,
  inputGroup: de,
  label: ue,
  input: pe,
  inputWrapper: me,
  inputError: he,
  fieldError: fe,
  eyeButton: be,
  success: Ne,
  backButton: Ee,
  submitButton: we,
  backLink: ye,
};

export const ForgotPassword = (c) => {
  const [n, B] = d("");
  const [E, G] = d("");
  const [L, S] = d("");
  const [d, a] = d(null);
  const [I, u] = d(null);
  const [v, i] = d(null);
  const [p, w] = d(false);
  const [$, g] = d(false);
  const [h, m] = d("email");
  const [o, P] = d("");
  const [k, R] = d("");
  const [C, F] = d(false);
  const [T, V] = d(false);
  const [_, y] = d(null);
  const [U, O] = d(false);

  const Z = (t) => {
    t.preventDefault();
    a(null);
    u(null);

    if (!n.trim()) {
      u("Введите email");
      return;
    }

    g(true);
  };

  const q = q(
    async (t, f) => {
      g(false);
      w(true);
      try {
        const b = await ag.forgotPassword({ email: n, ...c(t, f) });
        G(b.flowToken ?? "");
        m("otp");
      } catch (b) {
        if (x_1(b)) {
          switch (b.code) {
            case ae_1.ENTITY_NOT_FOUND: {
              u("Аккаунт с таким email не найден");
              break;
            }
            case ae_1.VALIDATION_ERROR: {
              u("Введите корректный email");
              break;
            }
            case ae_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              u("Почта этого домена не поддерживается");
              break;
            }
            case ae_1.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ae_1.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              a(b.message || "Произошла ошибка");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        w(false);
      }
    },
    [n]
  );

  const H = q((t) => {
    S(t);
    a(null);
    m("password");
  }, []);

  const J = q(
    async (t) => {
      t.preventDefault();
      a(null);
      i(null);
      y(null);

      if (!o.trim()) {
        i("Введите новый пароль");
        return;
      }

      if (o.length < 10) {
        i("Минимум 10 символов");
        return;
      }
      if (o.length > 128) {
        i("Максимум 128 символов");
        return;
      }
      if (!/^[\x21-\x7E]+$/.test(o)) {
        i("Только латиница, цифры и знаки пунктуации");
        return;
      }
      if (o !== k) {
        y("Пароли не совпадают");
        return;
      }
      w(true);
      try {
        await ag.resetPassword({
          email: n,
          flowToken: E,
          otp: L,
          newPassword: o,
        });

        e_1("/login");
      } catch (f) {
        if (x_1(f)) {
          switch (f.code) {
            case ae_1.OTP_INVALID: {
              a("Неверный код. Попробуйте снова");
              m("otp");
              S("");
              break;
            }
            case ae_1.MISSING_FLOW_TOKEN:
            case ae_1.UNAUTHORIZED: {
              a("Сессия истекла. Начните заново");
              m("email");
              break;
            }
            case ae_1.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ae_1.VALIDATION_ERROR: {
              i("Пароль не соответствует требованиям");
              break;
            }
            default: {
              a(f.message || "Произошла ошибка");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        w(false);
      }
    },
    [n, E, L, o, k]
  );

  const K = q(async () => {
    a(null);
    O(false);
    try {
      await ag.resendOtp({ email: n, flowToken: E });
      O(true);

      setTimeout(() => O(false), 3000 /* 3e3 */);
    } catch (t) {
      if (x_1(t)) {
        if (t.code === ae_1.RATE_LIMIT_EXCEEDED) {
          a("Слишком много запросов. Попробуйте позже");
        } else {
          a(t.message || "Не удалось отправить код");
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [n, E]);

  const M = q(() => {
    a(null);

    if (h === "password") {
      i(null);
      y(null);
      P("");
      R("");
      m("otp");
    } else {
      m("email");
    }
  }, [h]);

  return u(S, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(af, {}) }),
          h === "email" &&
            u("form", {
              className: s.form,
              onSubmit: Z,
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
                d && u("div", { className: s.error, children: d }),
                u("div", {
                  className: s.inputs,
                  children: u("div", {
                    className: s.inputGroup,
                    children: [
                      u("label", { className: s.label, children: "E-Mail" }),
                      u("input", {
                        type: "email",
                        className: `${s.input} ${I ? s.inputError : ""}`,
                        value: n,
                        onInput: (t) => {
                          B(t.target.value);
                          u(null);
                        },
                        placeholder: "ilya@gmail.com",
                        disabled: p,
                      }),
                      I && u("span", { className: s.fieldError, children: I }),
                    ],
                  }),
                }),
                u(B, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: s.submitButton,
                  disabled: p,
                  children: p ? "Отправка..." : "Отправить",
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
          h === "otp" &&
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
                d && u("div", { className: s.error, children: d }),
                U &&
                  u("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                u(O, {
                  onSubmit: H,
                  onResend: K,
                  disabled: p,
                  buttonText: "Продолжить",
                }),
                u("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: M,
                  children: "Назад",
                }),
              ],
            }),
          h === "password" &&
            u("form", {
              className: s.form,
              onSubmit: J,
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
                d && u("div", { className: s.error, children: d }),
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
                              type: C ? "text" : "password",
                              className: `${s.input} ${v ? s.inputError : ""}`,
                              value: o,
                              onInput: (t) => {
                                P(t.target.value);
                                i(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => F(!C),
                              children: C
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
                              type: T ? "text" : "password",
                              className: `${s.input} ${_ ? s.inputError : ""}`,
                              value: k,
                              onInput: (t) => {
                                R(t.target.value);
                                y(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => V(!T),
                              children: T
                                ? u(I, { size: 20 })
                                : u(a, { size: 20 }),
                            }),
                          ],
                        }),
                        _ &&
                          u("span", { className: s.fieldError, children: _ }),
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
                  disabled: p || !o.trim(),
                  children: p ? "Сброс..." : "Сбросить пароль",
                }),
                u("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: M,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      u(C, {
        isOpen: $,
        onClose: () => g(false),
        onVerify: q,
        action: "password_reset",
      }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
