import {
  d,
  q,
  ag,
  x,
  ae as ae_1,
  u as e_1,
  u,
  af,
  B,
  k,
} from "./index-B9FitUXy.js";
import { O, C } from "./index-CanNJpc-.js";
import { I, a } from "./IconEyeOff-D9eoRMHE.js";
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
      d._sentryDebugIds[n] = "e636f5d9-e964-47e6-ae28-f333a1fc7d2e";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-e636f5d9-e964-47e6-ae28-f333a1fc7d2e";
    }
  } catch {}
})();
const ee = "sLtf";
const se = "NbSI";
const ae = "gzqm";
const te = "bWmZ";
const re = "VfLS";
const ne = "OWOa";
const le = "Pv16";
const oe = "UEdF";
const ie = "sPQJ";
const ce = "wAJv";
const de = "e1I0";
const ue = "mVcc";
const pe = "MwJ8";
const me = "RdwH";
const he = "IBNS";
const fe = "gn6F";
const be = "R2p6";
const Ne = "s2D4";
const Ee = "X00K";

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
  const [n, D] = d("");
  const [N, $] = d("");
  const [L, R] = d("");
  const [u, a] = d(null);
  const [y, p] = d(null);
  const [I, c] = d(null);
  const [m, E] = d(false);
  const [x, g] = d(false);
  const [f, h] = d("email");
  const [o, S] = d("");
  const [k, B] = d("");
  const [v, z] = d(false);
  const [C, V] = d(false);
  const [T, w] = d(null);
  const [G, O] = d(false);

  const U = (t) => {
    t.preventDefault();
    a(null);
    p(null);

    if (!n.trim()) {
      p("Введите email");
      return;
    }

    g(true);
  };

  const X = q(
    async (t) => {
      g(false);
      E(true);
      try {
        const i = await ag.forgotPassword({ email: n, turnstileToken: t });
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
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ae_1.RATE_LIMIT_EXCEEDED: {
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

  const H = q((t) => {
    R(t);
    a(null);
    h("password");
  }, []);

  const J = q(
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
              a("Неверный код. Попробуйте снова");
              h("otp");
              R("");
              break;
            }
            case ae_1.MISSING_FLOW_TOKEN:
            case ae_1.UNAUTHORIZED: {
              a("Сессия истекла. Начните заново");
              h("email");
              break;
            }
            case ae_1.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ae_1.VALIDATION_ERROR: {
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
    [n, N, L, o, k]
  );

  const q = q(async () => {
    a(null);
    O(false);
    try {
      await ag.resendOtp({ email: n, flowToken: N });
      O(true);

      setTimeout(() => O(false), 3000 /* 3e3 */);
    } catch (t) {
      if (x(t)) {
        if (t.code === ae_1.RATE_LIMIT_EXCEEDED) {
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
      S("");
      B("");
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
              onSubmit: U,
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
                          D(t.target.value);
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
                G &&
                  u("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                u(O, {
                  onSubmit: H,
                  onResend: q,
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
                              onInput: (t) => {
                                S(t.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => z(!v),
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
                              type: C ? "text" : "password",
                              className: `${s.input} ${T ? s.inputError : ""}`,
                              value: k,
                              onInput: (t) => {
                                B(t.target.value);
                                w(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => V(!C),
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
                  onClick: P,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      u(C, { isOpen: x, onClose: () => g(false), onVerify: X }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
