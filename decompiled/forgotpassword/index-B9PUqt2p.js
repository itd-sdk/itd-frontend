import {
  d,
  q,
  ae as ae_1,
  ab,
  ac,
  q as q_1,
  a,
  ad,
  B,
} from "./index-BAlLDjSl.js";
import { O, C } from "./index-BP5ArN5c.js";
import { I, a as a_1 } from "./IconEyeOff-_f-Lat8q.js";
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
    d.SENTRY_RELEASE = { id: "1.1.1" };
    const l = new d.Error().stack;

    if (l) {
      d._sentryDebugIds = d._sentryDebugIds || {};
      d._sentryDebugIds[l] = "3d870057-7769-42de-9a95-814b7d9d97cc";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-3d870057-7769-42de-9a95-814b7d9d97cc";
    }
  } catch {}
})();
const j = "sHid";
const ee = "nJGZ";
const se = "jbtr";
const te = "zbpz";
const ae = "P5aC";
const re = "SK8H";
const le = "ZE5L";
const ne = "lDeR";
const oe = "t4lu";
const ie = "mqIw";
const ce = "zlYU";
const de = "ISJf";
const ue = "EQ2N";
const pe = "hoWv";
const me = "pq3e";
const he = "Rl9X";
const fe = "M9Pe";
const be = "V4s7";
const Ee = "st4p";
const Ne = "YEDQ";

const s = {
  page: j,
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
  submitButton: Ee,
  backLink: Ne,
};

export const ForgotPassword = (d) => {
  const [l, S] = d("");
  const [b, $] = d("");
  const [B, O] = d("");
  const [u, t] = d(null);
  const [y, E] = d(null);
  const [g, c] = d(null);
  const [p, N] = d(false);
  const [G, v] = d(false);
  const [h, m] = d("email");
  const [n, R] = d("");
  const [I, A] = d("");
  const [k, x] = d(false);
  const [C, F] = d(false);
  const [T, w] = d(null);
  const [V, D] = d(false);

  const H = (a) => {
    a.preventDefault();
    t(null);
    E(null);

    if (!l.trim()) {
      E("Введите email");
      return;
    }

    v(true);
  };

  const U = q(
    async (a) => {
      v(false);
      N(true);
      try {
        const o = await ae_1.forgotPassword({ email: l, turnstileToken: a });
        $(o.flowToken ?? "");
        m("otp");
      } catch (o) {
        if (ab(o)) {
          switch (o.code) {
            case ac.ENTITY_NOT_FOUND: {
              E("Аккаунт с таким email не найден");
              break;
            }
            case ac.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ac.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              t(o.message || "Произошла ошибка");
            }
          }
        } else {
          t("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        N(false);
      }
    },
    [l]
  );

  const X = q((a) => {
    O(a);
    t(null);
    m("password");
  }, []);

  const Y = q(
    async (a) => {
      a.preventDefault();
      t(null);
      c(null);
      w(null);

      if (!n.trim()) {
        c("Введите новый пароль");
        return;
      }

      if (n.length < 10) {
        c("Минимум 10 символов");
        return;
      }
      if (n.length > 128) {
        c("Максимум 128 символов");
        return;
      }
      if (!/^[\x21-\x7E]+$/.test(n)) {
        c("Только латиница, цифры и знаки пунктуации");
        return;
      }
      if (n !== I) {
        w("Пароли не совпадают");
        return;
      }
      N(true);
      try {
        await ae_1.resetPassword({
          email: l,
          flowToken: b,
          otp: B,
          newPassword: n,
        });

        q_1("/login");
      } catch (o) {
        if (ab(o)) {
          switch (o.code) {
            case ac.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              m("otp");
              O("");
              break;
            }
            case ac.MISSING_FLOW_TOKEN:
            case ac.UNAUTHORIZED: {
              t("Сессия истекла. Начните заново");
              m("email");
              break;
            }
            case ac.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ac.VALIDATION_ERROR: {
              c("Пароль не соответствует требованиям");
              break;
            }
            default: {
              t(o.message || "Произошла ошибка");
            }
          }
        } else {
          t("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        N(false);
      }
    },
    [l, b, B, n, I]
  );

  const q = q(async () => {
    t(null);
    D(false);
    try {
      await ae_1.resendOtp({ email: l, flowToken: b });
      D(true);

      setTimeout(() => D(false), 3000 /* 3e3 */);
    } catch (a) {
      if (ab(a)) {
        if (a.code === ac.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(a.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [l, b]);

  const L = q(() => {
    t(null);

    if (h === "password") {
      c(null);
      w(null);
      R("");
      A("");
      m("otp");
    } else {
      m("email");
    }
  }, [h]);

  return a("div", {
    className: s.page,
    children: [
      a("div", {
        className: s.container,
        children: [
          a("div", { className: s.logo, children: a(ad, {}) }),
          h === "email" &&
            a("form", {
              className: s.form,
              onSubmit: H,
              children: [
                a("div", {
                  className: s.header,
                  children: [
                    a("h1", {
                      className: s.title,
                      children: "Забыли пароль?",
                    }),
                    a("p", {
                      className: s.subtitle,
                      children: "Введите ваш E-Mail для восстановления",
                    }),
                  ],
                }),
                u && a("div", { className: s.error, children: u }),
                a("div", {
                  className: s.inputs,
                  children: a("div", {
                    className: s.inputGroup,
                    children: [
                      a("label", { className: s.label, children: "E-Mail" }),
                      a("input", {
                        type: "email",
                        className: `${s.input} ${y ? s.inputError : ""}`,
                        value: l,
                        onInput: (a) => {
                          S(a.target.value);
                          E(null);
                        },
                        placeholder: "ilya@gmail.com",
                        disabled: p,
                      }),
                      y && a("span", { className: s.fieldError, children: y }),
                    ],
                  }),
                }),
                a(B, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: s.submitButton,
                  disabled: p,
                  children: p ? "Отправка..." : "Отправить",
                }),
                a("p", {
                  className: s.backLink,
                  children: a("a", {
                    href: "/login",
                    children: "Вернуться ко входу",
                  }),
                }),
              ],
            }),
          h === "otp" &&
            a("div", {
              className: s.form,
              children: [
                a("div", {
                  className: s.header,
                  children: [
                    a("h1", { className: s.title, children: "Введите код" }),
                    a("p", {
                      className: s.subtitle,
                      children: ["Мы отправили шестизначный код на ", l],
                    }),
                  ],
                }),
                u && a("div", { className: s.error, children: u }),
                V &&
                  a("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                a(O, {
                  onSubmit: X,
                  onResend: q,
                  disabled: p,
                  buttonText: "Продолжить",
                }),
                a("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: L,
                  children: "Назад",
                }),
              ],
            }),
          h === "password" &&
            a("form", {
              className: s.form,
              onSubmit: Y,
              children: [
                a("div", {
                  className: s.header,
                  children: [
                    a("h1", { className: s.title, children: "Новый пароль" }),
                    a("p", {
                      className: s.subtitle,
                      children: "Придумайте новый пароль для вашего аккаунта",
                    }),
                  ],
                }),
                u && a("div", { className: s.error, children: u }),
                a("div", {
                  className: s.inputs,
                  children: [
                    a("div", {
                      className: s.inputGroup,
                      children: [
                        a("label", {
                          className: s.label,
                          children: "Новый пароль",
                        }),
                        a("div", {
                          className: s.inputWrapper,
                          children: [
                            a("input", {
                              type: k ? "text" : "password",
                              className: `${s.input} ${g ? s.inputError : ""}`,
                              value: n,
                              onInput: (a) => {
                                R(a.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            a("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => x(!k),
                              children: k
                                ? a(I, { size: 20 })
                                : a(a_1, { size: 20 }),
                            }),
                          ],
                        }),
                        g &&
                          a("span", { className: s.fieldError, children: g }),
                      ],
                    }),
                    a("div", {
                      className: s.inputGroup,
                      children: [
                        a("label", {
                          className: s.label,
                          children: "Повторите пароль",
                        }),
                        a("div", {
                          className: s.inputWrapper,
                          children: [
                            a("input", {
                              type: C ? "text" : "password",
                              className: `${s.input} ${T ? s.inputError : ""}`,
                              value: I,
                              onInput: (a) => {
                                A(a.target.value);
                                w(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            a("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => F(!C),
                              children: C
                                ? a(I, { size: 20 })
                                : a(a_1, { size: 20 }),
                            }),
                          ],
                        }),
                        T &&
                          a("span", { className: s.fieldError, children: T }),
                      ],
                    }),
                  ],
                }),
                a(B, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: s.submitButton,
                  disabled: p || !n.trim(),
                  children: p ? "Сброс..." : "Сбросить пароль",
                }),
                a("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: L,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      a(C, { isOpen: G, onClose: () => v(false), onVerify: U }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
