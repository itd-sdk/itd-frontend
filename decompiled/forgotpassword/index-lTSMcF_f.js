import { d, q, t, o, d as d_1, $, u, I, B, S } from "./index-CR_1arh8.js";
import { P } from "./index-8U8hOU8-.js";
import { o as o_1, C } from "./index-AB-xYmxI.js";
import { I as I_1, a } from "./IconEyeOff-BlNwsMMr.js";
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
      d._sentryDebugIds[n] = "8ea9334c-4a00-4c72-8b3a-d2a26d3d5f8f";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-8ea9334c-4a00-4c72-8b3a-d2a26d3d5f8f";
    }
  } catch {}
})();
const se = "JU8U";
const te = "Gkmr";
const ae = "rs0W";
const re = "uMWk";
const ne = "oLBT";
const le = "UhNj";
const oe = "s8YQ";
const ie = "P53H";
const ce = "nBRe";
const de = "awo8";
const ue = "WH8X";
const pe = "UZjH";
const me = "lqpM";
const he = "drK4";
const fe = "Vo0d";
const be = "oQU6";
const Ne = "xDCM";
const Ee = "kAA2";
const we = "IuHj";
const ye = "Nih7";

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
  requestSubmitButton: Ee,
  submitButton: we,
  backLink: ye,
};

export const ForgotPassword = (d) => {
  const [n, D] = d("");
  const [N, $] = d("");
  const [B, L] = d("");
  const [u, t] = d(null);
  const [y, p] = d(null);
  const [I, c] = d(null);
  const [m, E] = d(false);
  const [x, k] = d(false);
  const [f, h] = d("email");
  const [o, P] = d("");
  const [v, S] = d("");
  const [g, G] = d(false);
  const [C, z] = d(false);
  const [T, w] = d(null);
  const [F, _] = d(false);

  const H = (a) => {
    a.preventDefault();
    t(null);
    p(null);

    if (!n.trim()) {
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
        const i = await t.forgotPassword({ email: n, turnstileToken: a });
        $(i.flowToken ?? "");
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
    [n]
  );

  const q = q((a) => {
    L(a);
    t(null);
    h("password");
  }, []);

  const X = q(
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
        await t.resetPassword({
          email: n,
          flowToken: N,
          otp: B,
          newPassword: o,
        });

        $("/login");
      } catch (i) {
        if (o(i)) {
          switch (i.code) {
            case d_1.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              h("otp");
              L("");
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
    [n, N, B, o, v]
  );

  const j = q(async () => {
    t(null);
    _(false);
    try {
      await t.resendOtp({ email: n, flowToken: N });
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
  }, [n, N]);

  const R = q(() => {
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

  return u(S, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(I, {}) }),
          f === "email" &&
            u("form", {
              className: s.form,
              onSubmit: H,
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
                  children: [
                    u("div", {
                      className: s.inputGroup,
                      children: [
                        u("label", {
                          className: s.label,
                          children: "E-Mail",
                        }),
                        u("input", {
                          type: "email",
                          className: `${s.input} ${y ? s.inputError : ""}`,
                          value: n,
                          onInput: (a) => {
                            D(a.target.value);
                            p(null);
                          },
                          placeholder: "ilya@gmail.com",
                          disabled: m,
                        }),
                        y &&
                          u("span", { className: s.fieldError, children: y }),
                      ],
                    }),
                    u(P, {}),
                  ],
                }),
                u(B, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: s.requestSubmitButton,
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
                F &&
                  u("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                u(o_1, {
                  onSubmit: q,
                  onResend: j,
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
              onSubmit: X,
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
                              onClick: () => G(!g),
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
                              type: C ? "text" : "password",
                              className: `${s.input} ${T ? s.inputError : ""}`,
                              value: v,
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
                              onClick: () => z(!C),
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
                  onClick: R,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      u(C, { isOpen: x, onClose: () => k(false), onVerify: V }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
