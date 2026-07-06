import {
  d,
  ad as q_1,
  ae as ae_1,
  ab,
  ac,
  q_1 as q_1_1,
  a,
  ad,
  ae_1 as ae_1_1,
} from "./index-CFv_0Hh6.js";
import { O, C } from "./index-DL9gK-0-.js";
import { I, a as a_1 } from "./IconEyeOff-C3SWTYTF.js";
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
      d._sentryDebugIds[n] = "312cb588-f643-49f9-af14-0f4705b92a5c";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-312cb588-f643-49f9-af14-0f4705b92a5c";
    }
  } catch {}
})();
const J = "OGv2";
const ee = "A6qW";
const se = "KPLa";
const ae = "PBG0";
const te = "z73s";
const re = "Bovz";
const ne = "uss5";
const le = "PFfm";
const oe = "IyjA";
const ie = "MrYQ";
const ce = "kx3M";
const de = "Fvs4";
const ue = "I315";
const pe = "YFsX";
const me = "eVcZ";
const he = "w0en";
const fe = "VZtn";
const be = "KEra";
const Ee = "HsQD";
const Ne = "XAcS";

const s = {
  page: J,
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
  const [n, P] = d("");
  const [b, G] = d("");
  const [A, O] = d("");
  const [u, a] = d(null);
  const [y, E] = d(null);
  const [v, c] = d(null);
  const [p, N] = d(false);
  const [W, g] = d(false);
  const [h, m] = d("email");
  const [l, S] = d("");
  const [I, L] = d("");
  const [k, $] = d(false);
  const [C, x] = d(false);
  const [T, w] = d(null);
  const [V, _] = d(false);

  const X = (t) => {
    t.preventDefault();
    a(null);
    E(null);

    if (!n.trim()) {
      E("Введите email");
      return;
    }

    g(true);
  };

  const Y = q_1(
    async (t) => {
      g(false);
      N(true);
      try {
        const o = await ae_1.forgotPassword({ email: n, turnstileToken: t });
        G(o.flowToken ?? "");
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

  const H = q_1((t) => {
    O(t);
    a(null);
    m("password");
  }, []);

  const K = q_1(
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
          otp: A,
          newPassword: l,
        });

        q_1_1("/login");
      } catch (o) {
        if (ab(o)) {
          switch (o.code) {
            case ac.OTP_INVALID: {
              a("Неверный код. Попробуйте снова");
              m("otp");
              O("");
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
    [n, b, A, l, I]
  );

  const U = q_1(async () => {
    a(null);
    _(false);
    try {
      await ae_1.resendOtp({ email: n, flowToken: b });
      _(true);

      setTimeout(() => _(false), 3000 /* 3e3 */);
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

  const R = q_1(() => {
    a(null);

    if (h === "password") {
      c(null);
      w(null);
      S("");
      L("");
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
              onSubmit: X,
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
                          P(t.target.value);
                          E(null);
                        },
                        placeholder: "ilya@gmail.com",
                        disabled: p,
                      }),
                      y && a("span", { className: s.fieldError, children: y }),
                    ],
                  }),
                }),
                a(ae_1_1, {
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
                V &&
                  a("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                a(O, {
                  onSubmit: H,
                  onResend: U,
                  disabled: p,
                  buttonText: "Продолжить",
                }),
                a("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: R,
                  children: "Назад",
                }),
              ],
            }),
          h === "password" &&
            a("form", {
              className: s.form,
              onSubmit: K,
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
                              className: `${s.input} ${v ? s.inputError : ""}`,
                              value: l,
                              onInput: (t) => {
                                S(t.target.value);
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
                        v &&
                          a("span", { className: s.fieldError, children: v }),
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
                              onInput: (t) => {
                                L(t.target.value);
                                w(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            a("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => x(!C),
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
                a(ae_1_1, {
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
                  onClick: R,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      a(C, { isOpen: W, onClose: () => g(false), onVerify: Y }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
