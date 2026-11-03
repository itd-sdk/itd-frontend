import { d, q, t, o, d as d_1, $, u, I, B, S } from "./index-GOT6tyDH.js";
import { o as o_1, C } from "./index-B6C6UwNl.js";
import { I as I_1, a } from "./IconEyeOff-iWQmBgHn.js";
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
      d._sentryDebugIds[l] = "b3d68cdb-573d-465f-b570-f5d9b92a61e3";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-b3d68cdb-573d-465f-b570-f5d9b92a61e3";
    }
  } catch {}
})();
const ee = "NDj7";
const se = "p8AX";
const te = "D5SH";
const ae = "Uwsw";
const re = "z9j7";
const le = "wERG";
const ne = "d0Ms";
const oe = "S99u";
const ie = "zPE4";
const ce = "zmlQ";
const de = "bFzb";
const ue = "KZ47";
const pe = "N8Fr";
const me = "ejHl";
const he = "fzPW";
const fe = "Pc9c";
const be = "Sl4g";
const Ne = "HW6b";
const Ee = "qW3M";

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
  const [l, A] = d("");
  const [N, F] = d("");
  const [S, P] = d("");
  const [u, t] = d(null);
  const [y, p] = d(null);
  const [I, c] = d(null);
  const [m, E] = d(false);
  const [$, k] = d(false);
  const [f, h] = d("email");
  const [o, L] = d("");
  const [g, R] = d("");
  const [v, G] = d(false);
  const [C, x] = d(false);
  const [T, w] = d(null);
  const [H, _] = d(false);

  const U = (a) => {
    a.preventDefault();
    t(null);
    p(null);

    if (!l.trim()) {
      p("Введите email");
      return;
    }

    k(true);
  };

  const V = q(
    async (a) => {
      k(false);
      E(true);
      try {
        const i = await t.forgotPassword({ email: l, turnstileToken: a });
        F(i.flowToken ?? "");
        h("otp");
      } catch (i) {
        if (o(i)) {
          switch (i.code) {
            case d_1.ENTITY_NOT_FOUND: {
              p("Аккаунт с таким email не найден");
              break;
            }
            case d_1.VALIDATION_ERROR: {
              p("Введите корректный email");
              break;
            }
            case d_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              p("Почта этого домена не поддерживается");
              break;
            }
            case d_1.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case d_1.RATE_LIMIT_EXCEEDED: {
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

  const X = q((a) => {
    P(a);
    t(null);
    h("password");
  }, []);

  const j = q(
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
        await t.resetPassword({
          email: l,
          flowToken: N,
          otp: S,
          newPassword: o,
        });

        $("/login");
      } catch (i) {
        if (o(i)) {
          switch (i.code) {
            case d_1.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              h("otp");
              P("");
              break;
            }
            case d_1.MISSING_FLOW_TOKEN:
            case d_1.UNAUTHORIZED: {
              t("Сессия истекла. Начните заново");
              h("email");
              break;
            }
            case d_1.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case d_1.VALIDATION_ERROR: {
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
    [l, N, S, o, g]
  );

  const q = q(async () => {
    t(null);
    _(false);
    try {
      await t.resendOtp({ email: l, flowToken: N });
      _(true);

      setTimeout(() => _(false), 3000 /* 3e3 */);
    } catch (a) {
      if (o(a)) {
        if (a.code === d_1.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(a.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [l, N]);

  const B = q(() => {
    t(null);

    if (f === "password") {
      c(null);
      w(null);
      L("");
      R("");
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
          u("div", { className: s.logo, children: u(I, {}) }),
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
                        value: l,
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
                      children: ["Мы отправили шестизначный код на ", l],
                    }),
                  ],
                }),
                u && u("div", { className: s.error, children: u }),
                H &&
                  u("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                u(o_1, {
                  onSubmit: X,
                  onResend: q,
                  disabled: m,
                  buttonText: "Продолжить",
                }),
                u("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: B,
                  children: "Назад",
                }),
              ],
            }),
          f === "password" &&
            u("form", {
              className: s.form,
              onSubmit: j,
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
                                L(a.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => G(!v),
                              children: v
                                ? u(I_1, { size: 20 })
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
                              value: g,
                              onInput: (a) => {
                                R(a.target.value);
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
                                ? u(I_1, { size: 20 })
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
                  onClick: B,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      u(C, { isOpen: $, onClose: () => k(false), onVerify: V }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
