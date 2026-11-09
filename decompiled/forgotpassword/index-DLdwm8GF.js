import {
  d,
  q,
  am,
  x,
  ae as ae_1,
  u as e_1,
  u,
  af,
  B,
  S,
} from "./index-dnACTU3c.js";
import { C } from "./index-CiDq3Nyc.js";
import { P } from "./index-CTpGM1z1.js";
import { am as am_1 } from "./index-DlH86GaB.js";
import { I, a } from "./IconEyeOff-B7iRtqfA.js";
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
      d._sentryDebugIds[n] = "8868832b-fffb-4bd6-8b22-acea0bc37e97";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-8868832b-fffb-4bd6-8b22-acea0bc37e97";
    }
  } catch {}
})();
const se = "remD";
const te = "YOiL";
const ae = "VlFq";
const re = "KSJC";
const ne = "zXpL";
const le = "WGIT";
const oe = "AzpI";
const ie = "GfyZ";
const ce = "NFCu";
const de = "iFcH";
const ue = "T9zY";
const pe = "FDgq";
const me = "KTt0";
const he = "swsP";
const fe = "NJqP";
const be = "ysUg";
const Ne = "ZuQb";
const Ee = "vZ9I";
const we = "cGUX";

const s = {
  container: se,
  logo: te,
  form: ae,
  header: re,
  title: ne,
  subtitle: le,
  error: oe,
  inputs: ie,
  inputGroup: ce,
  label: de,
  input: ue,
  inputWrapper: pe,
  inputError: me,
  fieldError: he,
  eyeButton: fe,
  success: be,
  backButton: Ne,
  submitButton: Ee,
  backLink: we,
};

export const ForgotPassword = (d) => {
  const [n, A] = d("");
  const [N, M] = d("");
  const [L, P] = d("");
  const [u, t] = d(null);
  const [y, p] = d(null);
  const [I, c] = d(null);
  const [m, E] = d(false);
  const [W, k] = d(false);
  const [f, h] = d("email");
  const [o, S] = d("");
  const [v, B] = d("");
  const [g, $] = d(false);
  const [T, x] = d(false);
  const [C, w] = d(null);
  const [U, _] = d(false);

  const V = (a) => {
    a.preventDefault();
    t(null);
    p(null);

    if (!n.trim()) {
      p("Введите email");
      return;
    }

    k(true);
  };

  const X = q(
    async (a) => {
      k(false);
      E(true);
      try {
        const i = await am.forgotPassword({ email: n, captcha: a });
        M(i.flowToken ?? "");
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

  const q = q((a) => {
    P(a);
    t(null);
    h("password");
  }, []);

  const Y = q(
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
      if (o !== v) {
        w("Пароли не совпадают");
        return;
      }
      E(true);
      try {
        await am.resetPassword({
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
              P("");
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
    [n, N, L, o, v]
  );

  const Z = q(async () => {
    t(null);
    _(false);
    try {
      await am.resendOtp({ email: n, flowToken: N });
      _(true);

      setTimeout(() => _(false), 3000 /* 3e3 */);
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

  const R = q(() => {
    t(null);

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
                u(P, {}),
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
                u(am_1, {
                  onSubmit: q,
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
                              type: g ? "text" : "password",
                              className: `${s.input} ${I ? s.inputError : ""}`,
                              value: o,
                              onInput: (a) => {
                                S(a.target.value);
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
                              onInput: (a) => {
                                B(a.target.value);
                                w(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => x(!T),
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
      u(C, { isOpen: W, onClose: () => k(false), onVerify: X }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
