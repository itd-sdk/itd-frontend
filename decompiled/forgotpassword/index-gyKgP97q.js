import { d, q, aC, K, aA, u as e_1, u, aB, B, S } from "./index-BuVp7kGl.js";
import { K as K_1, C } from "./index-9BixCiVZ.js";
import { I, a } from "./IconEyeOff-BHy0L5gs.js";
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
      d._sentryDebugIds[n] = "736b516b-89ee-46e9-a829-0d1b2a9ad1e9";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-736b516b-89ee-46e9-a829-0d1b2a9ad1e9";
    }
  } catch {}
})();
const ee = "vRqh";
const se = "EBaF";
const ae = "zW4K";
const te = "ZJo2";
const re = "Rl2g";
const ne = "P1kc";
const le = "qCwR";
const oe = "PBWx";
const ie = "d4Te";
const ce = "bFud";
const de = "chvn";
const ue = "AJvL";
const pe = "WqpF";
const me = "M2Lj";
const he = "aA43";
const fe = "thpQ";
const be = "jdpJ";
const Ne = "YNgq";
const Ee = "Mnru";

const s = {
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
  submitButton: Ne,
  backLink: Ee,
};

export const ForgotPassword = (d) => {
  const [n, D] = d("");
  const [N, $] = d("");
  const [B, L] = d("");
  const [u, a] = d(null);
  const [y, p] = d(null);
  const [I, c] = d(null);
  const [m, E] = d(false);
  const [x, v] = d(false);
  const [f, h] = d("email");
  const [o, R] = d("");
  const [k, P] = d("");
  const [g, z] = d(false);
  const [C, G] = d(false);
  const [T, w] = d(null);
  const [q, _] = d(false);

  const V = (t) => {
    t.preventDefault();
    a(null);
    p(null);

    if (!n.trim()) {
      p("Введите email");
      return;
    }

    v(true);
  };

  const U = q(
    async (t) => {
      v(false);
      E(true);
      try {
        const i = await aC.forgotPassword({ email: n, turnstileToken: t });
        $(i.flowToken ?? "");
        h("otp");
      } catch (i) {
        if (K(i)) {
          switch (i.code) {
            case aA.ENTITY_NOT_FOUND: {
              p("Аккаунт с таким email не найден");
              break;
            }
            case aA.VALIDATION_ERROR: {
              p("Введите корректный email");
              break;
            }
            case aA.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              p("Почта этого домена не поддерживается");
              break;
            }
            case aA.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case aA.RATE_LIMIT_EXCEEDED: {
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
        E(false);
      }
    },
    [n]
  );

  const J = q((t) => {
    L(t);
    a(null);
    h("password");
  }, []);

  const K = q(
    async (t) => {
      t.preventDefault();
      a(null);
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
      if (o !== k) {
        w("Пароли не совпадают");
        return;
      }
      E(true);
      try {
        await aC.resetPassword({
          email: n,
          flowToken: N,
          otp: B,
          newPassword: o,
        });

        e_1("/login");
      } catch (i) {
        if (K(i)) {
          switch (i.code) {
            case aA.OTP_INVALID: {
              a("Неверный код. Попробуйте снова");
              h("otp");
              L("");
              break;
            }
            case aA.MISSING_FLOW_TOKEN:
            case aA.UNAUTHORIZED: {
              a("Сессия истекла. Начните заново");
              h("email");
              break;
            }
            case aA.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case aA.VALIDATION_ERROR: {
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
        E(false);
      }
    },
    [n, N, B, o, k]
  );

  const X = q(async () => {
    a(null);
    _(false);
    try {
      await aC.resendOtp({ email: n, flowToken: N });
      _(true);

      setTimeout(() => _(false), 3000 /* 3e3 */);
    } catch (t) {
      if (K(t)) {
        if (t.code === aA.RATE_LIMIT_EXCEEDED) {
          a("Слишком много запросов. Попробуйте позже");
        } else {
          a(t.message || "Не удалось отправить код");
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [n, N]);

  const S = q(() => {
    a(null);

    if (f === "password") {
      c(null);
      w(null);
      R("");
      P("");
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
          u("div", { className: s.logo, children: u(aB, {}) }),
          f === "email" &&
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
                        className: `${s.input} ${y ? s.inputError : ""}`,
                        value: n,
                        onInput: (t) => {
                          D(t.target.value);
                          p(null);
                        },
                        placeholder: "ilya@gmail.com",
                        disabled: m,
                      }),
                      y && u("span", { className: s.fieldError, children: y }),
                    ],
                  }),
                }),
                u(B, {
                  type: "submit",
                  variant: "primary",
                  size: "lg",
                  fullWidth: true,
                  className: s.submitButton,
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
                q &&
                  u("div", {
                    className: s.success,
                    children: "Код отправлен повторно",
                  }),
                u(K_1, {
                  onSubmit: J,
                  onResend: X,
                  disabled: m,
                  buttonText: "Продолжить",
                }),
                u("button", {
                  type: "button",
                  className: s.backButton,
                  onClick: S,
                  children: "Назад",
                }),
              ],
            }),
          f === "password" &&
            u("form", {
              className: s.form,
              onSubmit: K,
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
                              onInput: (t) => {
                                R(t.target.value);
                                c(null);
                              },
                              placeholder: "Минимум 10 символов",
                              autoComplete: "new-password",
                              autoFocus: true,
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => z(!g),
                              children: g
                                ? u(I, { size: 20 })
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
                              value: k,
                              onInput: (t) => {
                                P(t.target.value);
                                w(null);
                              },
                              placeholder: "Повторите пароль",
                              autoComplete: "new-password",
                            }),
                            u("button", {
                              type: "button",
                              className: s.eyeButton,
                              onClick: () => G(!C),
                              children: C
                                ? u(I, { size: 20 })
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
                  onClick: S,
                  children: "Назад",
                }),
              ],
            }),
        ],
      }),
      u(C, { isOpen: x, onClose: () => v(false), onVerify: U }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
