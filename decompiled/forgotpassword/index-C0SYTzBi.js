import {
  d,
  aC as q_1,
  aD,
  K,
  aB,
  u as e_1,
  u,
  aC,
  B,
  S,
} from "./index-DK2L49XD.js";
import { K as K_1, C } from "./index-CyfpzJs8.js";
import { I, a } from "./IconEyeOff-89JgB8fW.js";
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
      d._sentryDebugIds[l] = "7d7c5238-8b31-43aa-a5fa-300b7f323ce3";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-7d7c5238-8b31-43aa-a5fa-300b7f323ce3";
    }
  } catch {}
})();
const ee = "QW2i";
const se = "lpXo";
const ae = "Db1j";
const te = "dVHm";
const re = "U333";
const le = "nuFN";
const ne = "Ia0U";
const oe = "E3vm";
const ie = "X6bG";
const ce = "hDBh";
const de = "BJ7D";
const ue = "LHk5";
const pe = "imvr";
const me = "YgIL";
const he = "ulk0";
const fe = "eOdU";
const be = "wrlR";
const Ne = "lvSG";
const Ee = "h5Nn";

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
  const [l, A] = d("");
  const [N, $] = d("");
  const [B, L] = d("");
  const [u, a] = d(null);
  const [y, p] = d(null);
  const [I, c] = d(null);
  const [m, E] = d(false);
  const [F, k] = d(false);
  const [f, h] = d("email");
  const [o, R] = d("");
  const [v, S] = d("");
  const [g, U] = d(false);
  const [C, x] = d(false);
  const [T, w] = d(null);
  const [z, D] = d(false);

  const V = (t) => {
    t.preventDefault();
    a(null);
    p(null);

    if (!l.trim()) {
      p("Введите email");
      return;
    }

    k(true);
  };

  const X = q_1(
    async (t) => {
      k(false);
      E(true);
      try {
        const i = await aD.forgotPassword({ email: l, turnstileToken: t });
        $(i.flowToken ?? "");
        h("otp");
      } catch (i) {
        if (K(i)) {
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
    [l]
  );

  const H = q_1((t) => {
    L(t);
    a(null);
    h("password");
  }, []);

  const Y = q_1(
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
        await aD.resetPassword({
          email: l,
          flowToken: N,
          otp: B,
          newPassword: o,
        });

        e_1("/login");
      } catch (i) {
        if (K(i)) {
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
    [l, N, B, o, v]
  );

  const K = q_1(async () => {
    a(null);
    D(false);
    try {
      await aD.resendOtp({ email: l, flowToken: N });
      D(true);

      setTimeout(() => D(false), 3000 /* 3e3 */);
    } catch (t) {
      if (K(t)) {
        if (t.code === aB.RATE_LIMIT_EXCEEDED) {
          a("Слишком много запросов. Попробуйте позже");
        } else {
          a(t.message || "Не удалось отправить код");
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [l, N]);

  const P = q_1(() => {
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
                      children: ["Мы отправили шестизначный код на ", l],
                    }),
                  ],
                }),
                u && u("div", { className: s.error, children: u }),
                z &&
                  u("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                u(K_1, {
                  onSubmit: H,
                  onResend: K,
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
                              type: g ? "text" : "password",
                              className: `${s.input} ${I ? s.inputError : ""}`,
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
                              onClick: () => U(!g),
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
                              type: C ? "text" : "password",
                              className: `${s.input} ${T ? s.inputError : ""}`,
                              value: v,
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
                              onClick: () => x(!C),
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
      u(C, { isOpen: F, onClose: () => k(false), onVerify: X }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
