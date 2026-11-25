import {
  d,
  q,
  am,
  an,
  ao,
  $,
  u,
  I,
  B,
  am as am_1,
  B as B_1,
} from "./index-4cbec7521f6a.js";
import { C } from "./index-2563a4cff4a4.js";
import { O } from "./index-cf737822fd41.js";
import { I as I_1, a } from "./IconEyeOff-46afdc4444d7.js";
const ee = "okCN";
const se = "wV83";
const ae = "y062";
const te = "DfdA";
const re = "Bx9n";
const le = "Yd2u";
const ne = "oLtF";
const oe = "WPEJ";
const ie = "KqXv";
const ce = "bJXl";
const ue = "insp";
const de = "CMd1";
const pe = "U30n";
const me = "S5PB";
const he = "MBG2";
const fe = "JTxs";
const be = "cnDm";
const Ne = "S2ev";
const Ee = "FG57";

const s = {
  container: ee,
  logo: se,
  form: ae,
  header: te,
  title: re,
  subtitle: le,
  error: ne,
  inputs: oe,
  inputGroup: ie,
  label: ce,
  input: ue,
  inputWrapper: de,
  inputError: pe,
  fieldError: me,
  eyeButton: he,
  success: fe,
  backButton: be,
  submitButton: Ne,
  backLink: Ee,
};

export const ForgotPassword = (we) => {
  const [n, W] = d("");
  const [b, x] = d("");
  const [B, _] = d("");
  const [u, a] = d(null);
  const [w, d] = d(null);
  const [k, c] = d(null);
  const [p, N] = d(false);
  const [F, y] = d(false);
  const [h, m] = d("email");
  const [o, D] = d("");
  const [v, L] = d("");
  const [I, G] = d(false);
  const [C, $] = d(false);
  const [T, E] = d(null);
  const [z, O] = d(false);

  const V = (t) => {
    t.preventDefault();
    a(null);
    d(null);

    if (!n.trim()) {
      d("Введите ник в Telegram");
      return;
    }

    U(undefined);
  };

  const U = q(
    async (t) => {
      y(false);
      N(true);
      try {
        const i = await am.forgotPassword({ email: n, captcha: t });
        x(i.flowToken ?? "");
        m("otp");
      } catch (i) {
        if (an(i)) {
          switch (i.code) {
            case ao.ENTITY_NOT_FOUND: {
              d("Аккаунт с таким email не найден");
              break;
            }
            case ao.VALIDATION_ERROR: {
              d("Введите корректный ник Telegram");
              break;
            }
            case ao.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              d("Почта этого домена не поддерживается");
              break;
            }
            case ao.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ao.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              a(i.message || "Произошла ошибка");
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

  const X = q((t) => {
    _(t);
    a(null);
    m("password");
  }, []);

  const J = q(
    async (t) => {
      t.preventDefault();
      a(null);
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
      if (o !== v) {
        E("Пароли не совпадают");
        return;
      }
      N(true);
      try {
        await am.resetPassword({
          email: n,
          flowToken: b,
          otp: B,
          newPassword: o,
        });

        $("/login");
      } catch (i) {
        if (an(i)) {
          switch (i.code) {
            case ao.OTP_INVALID: {
              a("Неверный код. Попробуйте снова");
              m("otp");
              _("");
              break;
            }
            case ao.MISSING_FLOW_TOKEN:
            case ao.UNAUTHORIZED: {
              a("Сессия истекла. Начните заново");
              m("email");
              break;
            }
            case ao.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ao.VALIDATION_ERROR: {
              c("Пароль не соответствует требованиям");
              break;
            }
            default: {
              a(i.message || "Произошла ошибка");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        N(false);
      }
    },
    [n, b, B, o, v]
  );

  const q = q(async () => {
    a(null);
    O(false);
    try {
      await am.resendOtp({ email: n, flowToken: b });
      O(true);

      setTimeout(() => O(false), 3000 /* 3e3 */);
    } catch (t) {
      if (an(t)) {
        if (t.code === ao.RATE_LIMIT_EXCEEDED) {
          a("Слишком много запросов. Попробуйте позже");
        } else {
          a(t.message || "Не удалось отправить код");
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [n, b]);

  const P = q(() => {
    a(null);

    if (h === "password") {
      c(null);
      E(null);
      D("");
      L("");
      m("otp");
    } else {
      m("email");
    }
  }, [h]);

  return u(B_1, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(I, {}) }),
          h === "email" &&
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
                      children: "Введите ваш ник в Telegram — код придёт в бот @openitd_bot",
                    }),
                  ],
                }),
                u && u("div", { className: s.error, children: u }),
                u("div", {
                  className: s.inputs,
                  children: u("div", {
                    className: s.inputGroup,
                    children: [
                      u("label", { className: s.label, children: "Telegram" }),
                      u("input", {
                        type: "text",
                        autoComplete: "username",
                        className: `${s.input} ${w ? s.inputError : ""}`,
                        value: n,
                        onInput: (t) => {
                          W(t.target.value);
                          d(null);
                        },
                        placeholder: "@username",
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
                      children: ["Мы отправили шестизначный код в Telegram-бот @openitd_bot для ", n],
                    }),
                  ],
                }),
                u && u("div", { className: s.error, children: u }),
                z &&
                  u("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                u(O, {
                  onSubmit: X,
                  onResend: q,
                  disabled: p,
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
          h === "password" &&
            u("form", {
              className: s.form,
              onSubmit: J,
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
                              type: I ? "text" : "password",
                              className: `${s.input} ${k ? s.inputError : ""}`,
                              value: o,
                              onInput: (t) => {
                                D(t.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => G(!I),
                              children: I
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
                              value: v,
                              onInput: (t) => {
                                L(t.target.value);
                                E(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => $(!C),
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
                  onClick: P,
                  children: "Назад",
                }),
              ],
            }),
          u(am_1, {}),
        ],
      }),
      u(C, { isOpen: F, onClose: () => y(false), onVerify: U }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
