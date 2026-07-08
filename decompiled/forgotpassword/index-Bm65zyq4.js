import {
  d,
  ad as q_1,
  ae as ae_1,
  ab,
  ac,
  q_1 as q_1_1,
  a,
  ad,
  B,
} from "./index-BewGW5_v.js";
import { ab as ab_1, C } from "./index-Cmc8MVwB.js";
import { I, a as a_1 } from "./IconEyeOff-CcCzexKA.js";
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
      d._sentryDebugIds[n] = "4b583513-0180-49cc-b39f-d54ab82c1502";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-4b583513-0180-49cc-b39f-d54ab82c1502";
    }
  } catch {}
})();
const J = "rXV4";
const ee = "Z7fd";
const se = "mTk4";
const te = "nwQZ";
const ae = "TR0X";
const re = "oQxC";
const ne = "v14o";
const le = "y9xi";
const oe = "mdGR";
const ie = "qjCH";
const ce = "P8HY";
const de = "trXv";
const ue = "SDtg";
const pe = "hbtD";
const me = "lodj";
const he = "Zpyf";
const fe = "DEs7";
const be = "jnd3";
const Ee = "nORr";
const Ne = "ZCZn";

const s = {
  page: J,
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
  submitButton: Ee,
  backLink: Ne,
};

export const ForgotPassword = (d) => {
  const [n, B] = d("");
  const [b, M] = d("");
  const [P, R] = d("");
  const [u, t] = d(null);
  const [y, E] = d(null);
  const [g, c] = d(null);
  const [p, N] = d(false);
  const [W, v] = d(false);
  const [h, m] = d("email");
  const [l, S] = d("");
  const [k, A] = d("");
  const [I, z] = d(false);
  const [C, F] = d(false);
  const [T, w] = d(null);
  const [X, D] = d(false);

  const Z = (a) => {
    a.preventDefault();
    t(null);
    E(null);

    if (!n.trim()) {
      E("Введите email");
      return;
    }

    v(true);
  };

  const V = q_1(
    async (a) => {
      v(false);
      N(true);
      try {
        const o = await ae_1.forgotPassword({ email: n, turnstileToken: a });
        M(o.flowToken ?? "");
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
    [n]
  );

  const H = q_1((a) => {
    R(a);
    t(null);
    m("password");
  }, []);

  const j = q_1(
    async (a) => {
      a.preventDefault();
      t(null);
      c(null);
      w(null);

      if (!l.trim()) {
        c("Введите новый пароль");
        return;
      }

      if (l.length < 10) {
        c("Минимум 10 символов");
        return;
      }
      if (l.length > 128) {
        c("Максимум 128 символов");
        return;
      }
      if (!/^[\x21-\x7E]+$/.test(l)) {
        c("Только латиница, цифры и знаки пунктуации");
        return;
      }
      if (l !== k) {
        w("Пароли не совпадают");
        return;
      }
      N(true);
      try {
        await ae_1.resetPassword({
          email: n,
          flowToken: b,
          otp: P,
          newPassword: l,
        });

        q_1_1("/login");
      } catch (o) {
        if (ab(o)) {
          switch (o.code) {
            case ac.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              m("otp");
              R("");
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
    [n, b, P, l, k]
  );

  const U = q_1(async () => {
    t(null);
    D(false);
    try {
      await ae_1.resendOtp({ email: n, flowToken: b });
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
  }, [n, b]);

  const L = q_1(() => {
    t(null);

    if (h === "password") {
      c(null);
      w(null);
      S("");
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
              onSubmit: Z,
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
                        value: n,
                        onInput: (a) => {
                          B(a.target.value);
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
                      children: ["Мы отправили шестизначный код на ", n],
                    }),
                  ],
                }),
                u && a("div", { className: s.error, children: u }),
                X &&
                  a("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                a(ab_1, {
                  onSubmit: H,
                  onResend: U,
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
              onSubmit: j,
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
                              type: I ? "text" : "password",
                              className: `${s.input} ${g ? s.inputError : ""}`,
                              value: l,
                              onInput: (a) => {
                                S(a.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            a("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => z(!I),
                              children: I
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
                              value: k,
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
                  disabled: p || !l.trim(),
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
      a(C, { isOpen: W, onClose: () => v(false), onVerify: V }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
