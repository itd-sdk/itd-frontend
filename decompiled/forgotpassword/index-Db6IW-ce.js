import {
  d,
  q,
  aC,
  e_1 as K_1,
  aA,
  u as e_1,
  u,
  aB,
  B,
  S,
} from "./index-D4QRo1-7.js";
import { K_1 as K_1_1, C } from "./index-CfgNx4Vk.js";
import { I, a } from "./IconEyeOff-mN_xIYSl.js";
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
      d._sentryDebugIds[l] = "9e92bd6c-93ad-443d-9fdd-f050aed29c06";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-9e92bd6c-93ad-443d-9fdd-f050aed29c06";
    }
  } catch {}
})();
const ee = "XiTf";
const se = "Jqpq";
const ae = "AcJv";
const te = "MpXa";
const re = "fQz5";
const le = "mgmR";
const ne = "PYXc";
const oe = "MIfR";
const ie = "osJW";
const ce = "JgiW";
const de = "SK63";
const ue = "v0fm";
const pe = "EJuZ";
const me = "Wli8";
const he = "fyZN";
const fe = "rizR";
const be = "L6bT";
const Ne = "ZrV0";
const Ee = "kVtS";

const s = {
  container: ee,
  logo: se,
  form: ae,
  header: te,
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
  const [R, L] = d("");
  const [u, a] = d(null);
  const [y, p] = d(null);
  const [I, c] = d(null);
  const [m, E] = d(false);
  const [V, k] = d(false);
  const [f, h] = d("email");
  const [o, S] = d("");
  const [v, B] = d("");
  const [g, x] = d(false);
  const [T, F] = d(false);
  const [C, w] = d(null);
  const [G, _] = d(false);

  const X = (t) => {
    t.preventDefault();
    a(null);
    p(null);

    if (!l.trim()) {
      p("Введите email");
      return;
    }

    k(true);
  };

  const J = q(
    async (t) => {
      k(false);
      E(true);
      try {
        const i = await aC.forgotPassword({ email: l, turnstileToken: t });
        $(i.flowToken ?? "");
        h("otp");
      } catch (i) {
        if (K_1(i)) {
          switch (i.code) {
            case aA.ENTITY_NOT_FOUND: {
              p("Аккаунт с таким email не найден");
              break;
            }
            case aA.VALIDATION_ERROR: {
              p("Введите корректный email");
              break;
            }
            case aA.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              p("Почта этого домена не поддерживается");
              break;
            }
            case aA.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case aA.RATE_LIMIT_EXCEEDED: {
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
    [l]
  );

  const U = q((t) => {
    L(t);
    a(null);
    h("password");
  }, []);

  const Z = q(
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
      if (o !== v) {
        w("Пароли не совпадают");
        return;
      }
      E(true);
      try {
        await aC.resetPassword({
          email: l,
          flowToken: N,
          otp: R,
          newPassword: o,
        });

        e_1("/login");
      } catch (i) {
        if (K_1(i)) {
          switch (i.code) {
            case aA.OTP_INVALID: {
              a("Неверный код. Попробуйте снова");
              h("otp");
              L("");
              break;
            }
            case aA.MISSING_FLOW_TOKEN:
            case aA.UNAUTHORIZED: {
              a("Сессия истекла. Начните заново");
              h("email");
              break;
            }
            case aA.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case aA.VALIDATION_ERROR: {
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
    [l, N, R, o, v]
  );

  const q = q(async () => {
    a(null);
    _(false);
    try {
      await aC.resendOtp({ email: l, flowToken: N });
      _(true);

      setTimeout(() => _(false), 3000 /* 3e3 */);
    } catch (t) {
      if (K_1(t)) {
        if (t.code === aA.RATE_LIMIT_EXCEEDED) {
          a("Слишком много запросов. Попробуйте позже");
        } else {
          a(t.message || "Не удалось отправить код");
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [l, N]);

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

  return u(S, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(aB, {}) }),
          f === "email" &&
            u("form", {
              className: s.form,
              onSubmit: X,
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
                      children: ["Мы отправили шестизначный код на ", l],
                    }),
                  ],
                }),
                u && u("div", { className: s.error, children: u }),
                G &&
                  u("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                u(K_1_1, {
                  onSubmit: U,
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
              onSubmit: Z,
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
                              onClick: () => x(!g),
                              children: g
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
                              value: v,
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
                              onClick: () => F(!T),
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
      u(C, { isOpen: V, onClose: () => k(false), onVerify: J }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
