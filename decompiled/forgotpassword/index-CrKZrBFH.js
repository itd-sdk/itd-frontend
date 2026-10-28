import {
  d,
  I as q_1,
  t,
  o,
  d as d_1,
  $,
  u,
  I,
  B,
  I_1 as S_1,
} from "./index-AoERIL5v.js";
import { O, C } from "./index-CkoXlyAD.js";
import { I as I_1, a } from "./IconEyeOff-DuL6Bcb3.js";
const j = "McA1";
const ee = "vlnp";
const se = "g1Qf";
const te = "U3nV";
const ae = "rsw7";
const re = "ED75";
const le = "TrP1";
const ne = "Lq75";
const oe = "w5ZL";
const ie = "YTmk";
const ce = "S3nN";
const ue = "HPRn";
const de = "KN3d";
const pe = "dnkO";
const me = "gA25";
const he = "r6UG";
const fe = "EtJZ";
const Ne = "Xpep";
const be = "MKmW";

const s = {
  container: j,
  logo: ee,
  form: se,
  header: te,
  title: ae,
  subtitle: re,
  error: le,
  inputs: ne,
  inputGroup: oe,
  label: ie,
  input: ce,
  inputWrapper: ue,
  inputError: de,
  fieldError: pe,
  eyeButton: me,
  success: he,
  backButton: fe,
  submitButton: Ne,
  backLink: be,
};

export const ForgotPassword = (Ee) => {
  const [n, W] = d("");
  const [N, $] = d("");
  const [_, L] = d("");
  const [u, t] = d(null);
  const [w, d] = d(null);
  const [k, c] = d(null);
  const [p, b] = d(false);
  const [G, y] = d(false);
  const [h, m] = d("email");
  const [o, D] = d("");
  const [I, P] = d("");
  const [v, x] = d(false);
  const [C, z] = d(false);
  const [T, E] = d(null);
  const [F, O] = d(false);

  const U = (a) => {
    a.preventDefault();
    t(null);
    d(null);

    if (!n.trim()) {
      d("Введите email");
      return;
    }

    y(true);
  };

  const V = q_1(
    async (a) => {
      y(false);
      b(true);
      try {
        const i = await t.forgotPassword({ email: n, turnstileToken: a });
        $(i.flowToken ?? "");
        m("otp");
      } catch (i) {
        if (o(i)) {
          switch (i.code) {
            case d_1.ENTITY_NOT_FOUND: {
              d("Аккаунт с таким email не найден");
              break;
            }
            case d_1.VALIDATION_ERROR: {
              d("Введите корректный email");
              break;
            }
            case d_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              d("Почта этого домена не поддерживается");
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
        b(false);
      }
    },
    [n]
  );

  const X = q_1((a) => {
    L(a);
    t(null);
    m("password");
  }, []);

  const H = q_1(
    async (a) => {
      a.preventDefault();
      t(null);
      c(null);
      E(null);

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
      if (o !== I) {
        E("Пароли не совпадают");
        return;
      }
      b(true);
      try {
        await t.resetPassword({
          email: n,
          flowToken: N,
          otp: _,
          newPassword: o,
        });

        $("/login");
      } catch (i) {
        if (o(i)) {
          switch (i.code) {
            case d_1.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              m("otp");
              L("");
              break;
            }
            case d_1.MISSING_FLOW_TOKEN:
            case d_1.UNAUTHORIZED: {
              t("Сессия истекла. Начните заново");
              m("email");
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
        b(false);
      }
    },
    [n, N, _, o, I]
  );

  const K = q_1(async () => {
    t(null);
    O(false);
    try {
      await t.resendOtp({ email: n, flowToken: N });
      O(true);

      setTimeout(() => O(false), 3000 /* 3e3 */);
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

  const B = q_1(() => {
    t(null);

    if (h === "password") {
      c(null);
      E(null);
      D("");
      P("");
      m("otp");
    } else {
      m("email");
    }
  }, [h]);

  return u(S_1, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(I, {}) }),
          h === "email" &&
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
                        className: `${s.input} ${w ? s.inputError : ""}`,
                        value: n,
                        onInput: (a) => {
                          W(a.target.value);
                          d(null);
                        },
                        placeholder: "ilya@gmail.com",
                        disabled: p,
                      }),
                      w && u("span", { className: s.fieldError, children: w }),
                    ],
                  }),
                }),
                u(B, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: s.submitButton,
                  disabled: p,
                  children: p ? "Отправка..." : "Отправить",
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
          h === "otp" &&
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
                u(O, {
                  onSubmit: X,
                  onResend: K,
                  disabled: p,
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
          h === "password" &&
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
                              type: v ? "text" : "password",
                              className: `${s.input} ${k ? s.inputError : ""}`,
                              value: o,
                              onInput: (a) => {
                                D(a.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => x(!v),
                              children: v
                                ? u(I_1, { size: 20 })
                                : u(a, { size: 20 }),
                            }),
                          ],
                        }),
                        k &&
                          u("span", { className: s.fieldError, children: k }),
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
                              value: I,
                              onInput: (a) => {
                                P(a.target.value);
                                E(null);
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
                  disabled: p || !o.trim(),
                  children: p ? "Сброс..." : "Сбросить пароль",
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
      u(C, { isOpen: G, onClose: () => y(false), onVerify: V }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
