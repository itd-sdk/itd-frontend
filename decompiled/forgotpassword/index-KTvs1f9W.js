import {
  d,
  q_1_1 as q_1,
  ad,
  aa,
  ab,
  q_1 as q_1_1,
  a,
  ac,
  ad as ad_1,
} from "./index-BCnJB3wz.js";
import { aa as aa_1, C } from "./index-BDEp0-_x.js";
import { I, a as a_1 } from "./IconEyeOff-CTY4FkhJ.js";
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
    const n = new d.Error().stack;

    if (n) {
      d._sentryDebugIds = d._sentryDebugIds || {};
      d._sentryDebugIds[n] = "b7e80825-ae45-434c-8639-dc816d7d790e";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-b7e80825-ae45-434c-8639-dc816d7d790e";
    }
  } catch {}
})();
const Z = "hNzP";
const ee = "OPIG";
const se = "iCzU";
const te = "OziA";
const ae = "A9Ph";
const re = "yJ3c";
const ne = "x5TL";
const le = "bruJ";
const oe = "djvL";
const ie = "E8Qy";
const ce = "tUKY";
const de = "Xb2o";
const ue = "oy7B";
const pe = "yeR4";
const me = "dTQJ";
const he = "myIk";
const fe = "Bxq9";
const be = "Svj8";
const Ne = "YZ9C";
const Ee = "S7tN";

const s = {
  page: Z,
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
  submitButton: Ne,
  backLink: Ee,
};

export const ForgotPassword = (d) => {
  const [n, P] = d("");
  const [b, G] = d("");
  const [D, S] = d("");
  const [u, t] = d(null);
  const [y, N] = d(null);
  const [v, c] = d(null);
  const [p, E] = d(false);
  const [M, g] = d(false);
  const [h, m] = d("email");
  const [l, A] = d("");
  const [I, L] = d("");
  const [k, W] = d(false);
  const [C, F] = d(false);
  const [T, w] = d(null);
  const [U, _] = d(false);

  const V = (a) => {
    a.preventDefault();
    t(null);
    N(null);

    if (!n.trim()) {
      N("Введите email");
      return;
    }

    g(true);
  };

  const X = q_1(
    async (a) => {
      g(false);
      E(true);
      try {
        const o = await ad.forgotPassword({ email: n, turnstileToken: a });
        G(o.flowToken ?? "");
        m("otp");
      } catch (o) {
        if (aa(o)) {
          switch (o.code) {
            case ab.ENTITY_NOT_FOUND: {
              N("Аккаунт с таким email не найден");
              break;
            }
            case ab.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ab.RATE_LIMIT_EXCEEDED: {
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
        E(false);
      }
    },
    [n]
  );

  const Y = q_1((a) => {
    S(a);
    t(null);
    m("password");
  }, []);

  const J = q_1(
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
      if (l !== I) {
        w("Пароли не совпадают");
        return;
      }
      E(true);
      try {
        await ad.resetPassword({
          email: n,
          flowToken: b,
          otp: D,
          newPassword: l,
        });

        q_1_1("/login");
      } catch (o) {
        if (aa(o)) {
          switch (o.code) {
            case ab.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              m("otp");
              S("");
              break;
            }
            case ab.MISSING_FLOW_TOKEN:
            case ab.UNAUTHORIZED: {
              t("Сессия истекла. Начните заново");
              m("email");
              break;
            }
            case ab.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ab.VALIDATION_ERROR: {
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
        E(false);
      }
    },
    [n, b, D, l, I]
  );

  const j = q_1(async () => {
    t(null);
    _(false);
    try {
      await ad.resendOtp({ email: n, flowToken: b });
      _(true);

      setTimeout(() => _(false), 3000 /* 3e3 */);
    } catch (a) {
      if (aa(a)) {
        if (a.code === ab.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(a.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [n, b]);

  const R = q_1(() => {
    t(null);

    if (h === "password") {
      c(null);
      w(null);
      A("");
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
          a("div", { className: s.logo, children: a(ac, {}) }),
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
                        onInput: (a) => {
                          P(a.target.value);
                          N(null);
                        },
                        placeholder: "ilya@gmail.com",
                        disabled: p,
                      }),
                      y && a("span", { className: s.fieldError, children: y }),
                    ],
                  }),
                }),
                a(ad_1, {
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
                a(aa_1, {
                  onSubmit: Y,
                  onResend: j,
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
              onSubmit: J,
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
                              onInput: (a) => {
                                A(a.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            a("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => W(!k),
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
                              onInput: (a) => {
                                L(a.target.value);
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
                a(ad_1, {
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
      a(C, { isOpen: M, onClose: () => g(false), onVerify: X }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
