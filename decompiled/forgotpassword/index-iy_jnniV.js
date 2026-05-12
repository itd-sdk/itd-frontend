import {
  d,
  C as q_1,
  ab,
  a8,
  a9,
  a as e_1,
  a,
  aa,
  B,
} from "./index-DDCL-vHK.js";
import { ab as ab_1, C } from "./index-Bt-cCGG-.js";
import { I, a as a_1 } from "./IconEyeOff-DkfQwtOQ.js";
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
    d.SENTRY_RELEASE = { id: "1.1.0" };
    const n = new d.Error().stack;

    if (n) {
      d._sentryDebugIds = d._sentryDebugIds || {};
      d._sentryDebugIds[n] = "af045456-6fb3-47dd-859c-d2c2c82e7673";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-af045456-6fb3-47dd-859c-d2c2c82e7673";
    }
  } catch {}
})();
const J = "WpFH";
const ee = "s8Cv";
const se = "sDej";
const ae = "DOIh";
const te = "Kn91";
const re = "nVPf";
const ne = "oDvL";
const le = "Tuaf";
const oe = "Qp16";
const ie = "XmdT";
const ce = "HuOT";
const de = "MOE0";
const ue = "ZE7P";
const pe = "RKPB";
const me = "QYTY";
const he = "l8v2";
const fe = "t5ho";
const be = "fcOS";
const Ee = "oZXw";
const Ne = "HJEf";

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
  const [b, F] = d("");
  const [B, S] = d("");
  const [u, a] = d(null);
  const [y, E] = d(null);
  const [v, c] = d(null);
  const [p, N] = d(false);
  const [x, g] = d(false);
  const [h, m] = d("email");
  const [l, A] = d("");
  const [I, L] = d("");
  const [k, z] = d(false);
  const [T, G] = d(false);
  const [C, w] = d(null);
  const [H, D] = d(false);

  const V = (t) => {
    t.preventDefault();
    a(null);
    E(null);

    if (!n.trim()) {
      E("Введите email");
      return;
    }

    g(true);
  };

  const X = q_1(
    async (t) => {
      g(false);
      N(true);
      try {
        const o = await ab.forgotPassword({ email: n, turnstileToken: t });
        F(o.flowToken ?? "");
        m("otp");
      } catch (o) {
        if (a8(o)) {
          switch (o.code) {
            case a9.ENTITY_NOT_FOUND: {
              E("Аккаунт с таким email не найден");
              break;
            }
            case a9.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case a9.RATE_LIMIT_EXCEEDED: {
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

  const Y = q_1((t) => {
    S(t);
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
        await ab.resetPassword({
          email: n,
          flowToken: b,
          otp: B,
          newPassword: l,
        });

        e_1("/login");
      } catch (o) {
        if (a8(o)) {
          switch (o.code) {
            case a9.OTP_INVALID: {
              a("Неверный код. Попробуйте снова");
              m("otp");
              S("");
              break;
            }
            case a9.MISSING_FLOW_TOKEN:
            case a9.UNAUTHORIZED: {
              a("Сессия истекла. Начните заново");
              m("email");
              break;
            }
            case a9.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case a9.VALIDATION_ERROR: {
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
    [n, b, B, l, I]
  );

  const U = q_1(async () => {
    a(null);
    D(false);
    try {
      await ab.resendOtp({ email: n, flowToken: b });
      D(true);

      setTimeout(() => D(false), 3000 /* 3e3 */);
    } catch (t) {
      if (a8(t)) {
        if (t.code === a9.RATE_LIMIT_EXCEEDED) {
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
          a("div", { className: s.logo, children: a(aa, {}) }),
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
                H &&
                  a("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                a(ab_1, {
                  onSubmit: Y,
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
                              onClick: () => z(!k),
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
                              type: T ? "text" : "password",
                              className: `${s.input} ${C ? s.inputError : ""}`,
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
                              onClick: () => G(!T),
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
                  onClick: R,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      a(C, { isOpen: x, onClose: () => g(false), onVerify: X }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
