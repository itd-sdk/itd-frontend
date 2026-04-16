import { d, I as q_1, b, a8 as i_1, a8, $, a, B } from "./index-B0np_7Xy.js";
import { O, C } from "./index-DhZR2sBI.js";
import { I } from "./IconBrand-_ck_iX4k.js";
import { I as I_1, a as a_1 } from "./IconEyeOff-Bueeui0k.js";
const J = "Gg-jaKhJ";
const Q = "ZErji8sj";
const ee = "ou65Phlx";
const se = "cTITFY-E";
const ae = "_3FjoFZVP";
const te = "_80V73aEo";
const re = "RRmPC49I";
const le = "_6fpmynge";
const ne = "pFP73xlN";
const oe = "Kg8GnmDR";
const ie = "FTOzVBbr";
const ce = "BVd3KxXM";
const ue = "_5mV0Kro-";
const de = "pW4sajix";
const pe = "-riFQDw4";
const me = "_1YXTFfpL";
const he = "nrzp4u-U";
const fe = "-FYqI2e9";
const be = "Ltc7zG-x";
const Ne = "JCPAHCFA";

const s = {
  page: J,
  container: Q,
  logo: ee,
  form: se,
  header: ae,
  title: te,
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
  submitButton: be,
  backLink: Ne,
};

export const ForgotPassword = (Ee) => {
  const [l, x] = d("");
  const [f, z] = d("");
  const [B, O] = d("");
  const [u, a] = d(null);
  const [w, b] = d(null);
  const [y, c] = d(null);
  const [d, N] = d(false);
  const [G, v] = d(false);
  const [m, p] = d("email");
  const [n, A] = d("");
  const [I, D] = d("");
  const [k, V] = d(false);
  const [g, M] = d(false);
  const [C, E] = d(null);
  const [W, T] = d(false);

  const $ = (t) => {
    t.preventDefault();
    a(null);
    b(null);

    if (!l.trim()) {
      b("Введите email");
      return;
    }

    v(true);
  };

  const j = q_1(
    async (t) => {
      v(false);
      N(true);
      try {
        const o = await b.forgotPassword({ email: l, turnstileToken: t });
        z(o.flowToken ?? "");
        p("otp");
      } catch (o) {
        if (i_1(o)) {
          switch (o.code) {
            case a8.ENTITY_NOT_FOUND: {
              b("Аккаунт с таким email не найден");
              break;
            }
            case a8.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case a8.RATE_LIMIT_EXCEEDED: {
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
    [l]
  );

  const K = q_1((t) => {
    O(t);
    a(null);
    p("password");
  }, []);

  const X = q_1(
    async (t) => {
      t.preventDefault();
      a(null);
      c(null);
      E(null);

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
        E("Пароли не совпадают");
        return;
      }
      N(true);
      try {
        await b.resetPassword({
          email: l,
          flowToken: f,
          otp: B,
          newPassword: n,
        });

        $("/login");
      } catch (o) {
        if (i_1(o)) {
          switch (o.code) {
            case a8.OTP_INVALID: {
              a("Неверный код. Попробуйте снова");
              p("otp");
              O("");
              break;
            }
            case a8.MISSING_FLOW_TOKEN:
            case a8.UNAUTHORIZED: {
              a("Сессия истекла. Начните заново");
              p("email");
              break;
            }
            case a8.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case a8.VALIDATION_ERROR: {
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
    [l, f, B, n, I]
  );

  const U = q_1(async () => {
    a(null);
    T(false);
    try {
      await b.resendOtp({ email: l, flowToken: f });
      T(true);

      setTimeout(() => T(false), 3000 /* 3e3 */);
    } catch (t) {
      if (i_1(t)) {
        if (t.code === a8.RATE_LIMIT_EXCEEDED) {
          a("Слишком много запросов. Попробуйте позже");
        } else {
          a(t.message || "Не удалось отправить код");
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [l, f]);

  const F = q_1(() => {
    a(null);

    if (m === "password") {
      c(null);
      E(null);
      A("");
      D("");
      p("otp");
    } else {
      p("email");
    }
  }, [m]);

  return a("div", {
    className: s.page,
    children: [
      a("div", {
        className: s.container,
        children: [
          a("div", { className: s.logo, children: a(I, {}) }),
          m === "email" &&
            a("form", {
              className: s.form,
              onSubmit: $,
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
                        className: `${s.input} ${w ? s.inputError : ""}`,
                        value: l,
                        onInput: (t) => {
                          x(t.target.value);
                          b(null);
                        },
                        placeholder: "ilya@gmail.com",
                        disabled: d,
                      }),
                      w && a("span", { className: s.fieldError, children: w }),
                    ],
                  }),
                }),
                a(B, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: s.submitButton,
                  disabled: d,
                  children: d ? "Отправка..." : "Отправить",
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
          m === "otp" &&
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
                W &&
                  a("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                a(O, {
                  onSubmit: K,
                  onResend: U,
                  disabled: d,
                  buttonText: "Продолжить",
                }),
                a("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: F,
                  children: "Назад",
                }),
              ],
            }),
          m === "password" &&
            a("form", {
              className: s.form,
              onSubmit: X,
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
                              className: `${s.input} ${y ? s.inputError : ""}`,
                              value: n,
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
                              onClick: () => V(!k),
                              children: k
                                ? a(I_1, { size: 20 })
                                : a(a_1, { size: 20 }),
                            }),
                          ],
                        }),
                        y &&
                          a("span", { className: s.fieldError, children: y }),
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
                              type: g ? "text" : "password",
                              className: `${s.input} ${C ? s.inputError : ""}`,
                              value: I,
                              onInput: (t) => {
                                D(t.target.value);
                                E(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            a("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => M(!g),
                              children: g
                                ? a(I_1, { size: 20 })
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
                a(B, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: s.submitButton,
                  disabled: d || !n.trim(),
                  children: d ? "Сброс..." : "Сбросить пароль",
                }),
                a("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: F,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      a(C, { isOpen: G, onClose: () => v(false), onVerify: j }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
