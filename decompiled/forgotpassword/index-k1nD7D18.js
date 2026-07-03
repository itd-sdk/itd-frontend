import {
  d,
  q,
  ae as ae_1,
  ab,
  ac,
  q as q_1,
  a,
  ad,
  ab as ab_1,
} from "./index-DuQT229k.js";
import { O, C } from "./index-C8OsYe6v.js";
import { I, a as a_1 } from "./IconEyeOff-CDOK-c3g.js";
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
      d._sentryDebugIds[n] = "b1b080ee-146a-4658-ace1-a86989179019";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-b1b080ee-146a-4658-ace1-a86989179019";
    }
  } catch {}
})();
const j = "OAWt";
const ee = "T7gn";
const se = "xEWS";
const ae = "sz1O";
const te = "Gg1T";
const re = "HUua";
const ne = "gV7c";
const le = "wQ4T";
const oe = "UwFJ";
const ie = "w7WI";
const ce = "rb8a";
const de = "bsBB";
const ue = "FM7C";
const pe = "wiGN";
const me = "XFkL";
const he = "wSzv";
const fe = "SwHr";
const be = "XPER";
const Ee = "RY7u";
const Ne = "MSsp";

const s = {
  page: j,
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
  submitButton: Ee,
  backLink: Ne,
};

export const ForgotPassword = (d) => {
  const [n, O] = d("");
  const [b, z] = d("");
  const [D, P] = d("");
  const [u, a] = d(null);
  const [y, E] = d(null);
  const [g, c] = d(null);
  const [p, N] = d(false);
  const [G, v] = d(false);
  const [h, m] = d("email");
  const [l, A] = d("");
  const [I, R] = d("");
  const [k, $] = d(false);
  const [T, x] = d(false);
  const [C, w] = d(null);
  const [U, S] = d(false);

  const V = (t) => {
    t.preventDefault();
    a(null);
    E(null);

    if (!n.trim()) {
      E("Введите email");
      return;
    }

    v(true);
  };

  const X = q(
    async (t) => {
      v(false);
      N(true);
      try {
        const o = await ae_1.forgotPassword({ email: n, turnstileToken: t });
        z(o.flowToken ?? "");
        m("otp");
      } catch (o) {
        if (ab(o)) {
          switch (o.code) {
            case ac.ENTITY_NOT_FOUND: {
              E("Аккаунт с таким email не найден");
              break;
            }
            case ac.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ac.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              a(o.message || "Произошла ошибка");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        N(false);
      }
    },
    [n]
  );

  const H = q((t) => {
    P(t);
    a(null);
    m("password");
  }, []);

  const Y = q(
    async (t) => {
      t.preventDefault();
      a(null);
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
      if (l !== I) {
        w("Пароли не совпадают");
        return;
      }
      N(true);
      try {
        await ae_1.resetPassword({
          email: n,
          flowToken: b,
          otp: D,
          newPassword: l,
        });

        q_1("/login");
      } catch (o) {
        if (ab(o)) {
          switch (o.code) {
            case ac.OTP_INVALID: {
              a("Неверный код. Попробуйте снова");
              m("otp");
              P("");
              break;
            }
            case ac.MISSING_FLOW_TOKEN:
            case ac.UNAUTHORIZED: {
              a("Сессия истекла. Начните заново");
              m("email");
              break;
            }
            case ac.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ac.VALIDATION_ERROR: {
              c("Пароль не соответствует требованиям");
              break;
            }
            default: {
              a(o.message || "Произошла ошибка");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        N(false);
      }
    },
    [n, b, D, l, I]
  );

  const q = q(async () => {
    a(null);
    S(false);
    try {
      await ae_1.resendOtp({ email: n, flowToken: b });
      S(true);

      setTimeout(() => S(false), 3000 /* 3e3 */);
    } catch (t) {
      if (ab(t)) {
        if (t.code === ac.RATE_LIMIT_EXCEEDED) {
          a("Слишком много запросов. Попробуйте позже");
        } else {
          a(t.message || "Не удалось отправить код");
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [n, b]);

  const L = q(() => {
    a(null);

    if (h === "password") {
      c(null);
      w(null);
      A("");
      R("");
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
              onSubmit: V,
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
                        onInput: (t) => {
                          O(t.target.value);
                          E(null);
                        },
                        placeholder: "ilya@gmail.com",
                        disabled: p,
                      }),
                      y && a("span", { className: s.fieldError, children: y }),
                    ],
                  }),
                }),
                a(ab_1, {
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
                U &&
                  a("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                a(O, {
                  onSubmit: H,
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
                              value: l,
                              onInput: (t) => {
                                A(t.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            a("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => $(!k),
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
                              type: T ? "text" : "password",
                              className: `${s.input} ${C ? s.inputError : ""}`,
                              value: I,
                              onInput: (t) => {
                                R(t.target.value);
                                w(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            a("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => x(!T),
                              children: T
                                ? a(I, { size: 20 })
                                : a(a_1, { size: 20 }),
                            }),
                          ],
                        }),
                        C &&
                          a("span", { className: s.fieldError, children: C }),
                      ],
                    }),
                  ],
                }),
                a(ab_1, {
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
      a(C, { isOpen: G, onClose: () => v(false), onVerify: X }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
