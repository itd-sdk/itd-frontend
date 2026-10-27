import {
  d,
  q,
  y as D_1,
  y,
  a as z_1,
  $,
  u,
  I,
  B,
  S,
} from "./index-BQxlThnW-portal20261026.js";
import { D_1 as D_1_1, C } from "./index-GGTxnMRT-portal20261026.js";
import { I as I_1, a } from "./IconEyeOff-ONzFZVHN-portal20261026.js";
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
      d._sentryDebugIds[n] = "b183a55e-663a-4704-ab0e-11edbbf06bb5";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-b183a55e-663a-4704-ab0e-11edbbf06bb5";
    }
  } catch {}
})();
const ee = "YQNv";
const se = "uNfU";
const te = "js5C";
const ae = "iT5L";
const re = "zuNK";
const ne = "tuEr";
const le = "IX5p";
const oe = "hW97";
const ie = "wTit";
const ce = "X2Gl";
const de = "Ecv7";
const ue = "Z5lh";
const pe = "qitm";
const me = "HpVm";
const he = "mXuU";
const be = "Ln7N";
const fe = "vpnF";
const Ne = "q6XG";
const Ee = "rpFR";

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
  success: be,
  backButton: fe,
  submitButton: Ne,
  backLink: Ee,
};

export const ForgotPassword = (d) => {
  const [n, A] = d("");
  const [N, F] = d("");
  const [L, R] = d("");
  const [u, t] = d(null);
  const [y, p] = d(null);
  const [I, c] = d(null);
  const [m, E] = d(false);
  const [G, v] = d(false);
  const [b, h] = d("email");
  const [o, B] = d("");
  const [k, S] = d("");
  const [g, $] = d(false);
  const [T, X] = d(false);
  const [C, w] = d(null);
  const [x, _] = d(false);

  const U = (a) => {
    a.preventDefault();
    t(null);
    p(null);

    if (!n.trim()) {
      p("Введите email");
      return;
    }

    v(true);
  };

  const V = q(
    async (a) => {
      v(false);
      E(true);
      try {
        const i = await D_1.forgotPassword({ email: n, turnstileToken: a });
        F(i.flowToken ?? "");
        h("otp");
      } catch (i) {
        if (y(i)) {
          switch (i.code) {
            case z_1.ENTITY_NOT_FOUND: {
              p("Аккаунт с таким email не найден");
              break;
            }
            case z_1.VALIDATION_ERROR: {
              p("Введите корректный email");
              break;
            }
            case z_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              p("Почта этого домена не поддерживается");
              break;
            }
            case z_1.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case z_1.RATE_LIMIT_EXCEEDED: {
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

  const q = q((a) => {
    R(a);
    t(null);
    h("password");
  }, []);

  const H = q(
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
        await D_1.resetPassword({
          email: n,
          flowToken: N,
          otp: L,
          newPassword: o,
        });

        $("/login");
      } catch (i) {
        if (y(i)) {
          switch (i.code) {
            case z_1.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              h("otp");
              R("");
              break;
            }
            case z_1.MISSING_FLOW_TOKEN:
            case z_1.UNAUTHORIZED: {
              t("Сессия истекла. Начните заново");
              h("email");
              break;
            }
            case z_1.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case z_1.VALIDATION_ERROR: {
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

  const Y = q(async () => {
    t(null);
    _(false);
    try {
      await D_1.resendOtp({ email: n, flowToken: N });
      _(true);

      setTimeout(() => _(false), 3000 /* 3e3 */);
    } catch (a) {
      if (y(a)) {
        if (a.code === z_1.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(a.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [n, N]);

  const P = q(() => {
    t(null);

    if (b === "password") {
      c(null);
      w(null);
      B("");
      S("");
      h("otp");
    } else {
      h("email");
    }
  }, [b]);

  return u(S, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(I, {}) }),
          b === "email" &&
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
          b === "otp" &&
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
                x &&
                  u("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                u(D_1_1, {
                  onSubmit: q,
                  onResend: Y,
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
          b === "password" &&
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
                              className: `${s.input} ${I ? s.inputError : ""}`,
                              value: o,
                              onInput: (a) => {
                                B(a.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => $(!g),
                              children: g
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
                              type: T ? "text" : "password",
                              className: `${s.input} ${C ? s.inputError : ""}`,
                              value: k,
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
                              onClick: () => X(!T),
                              children: T
                                ? u(I_1, { size: 20 })
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
      u(C, { isOpen: G, onClose: () => v(false), onVerify: V }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
