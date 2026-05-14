import {
  d,
  q,
  ad,
  aa,
  ab,
  q as q_1,
  a,
  ac,
  aa as aa_1,
} from "./index-7xRaK15k.js";
import { O, C } from "./index-i6WLEtuK.js";
import { I, a as a_1 } from "./IconEyeOff-DAFH4tzs.js";
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
      d._sentryDebugIds[n] = "44134a93-9bbf-432f-ab07-b60bafcf127a";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-44134a93-9bbf-432f-ab07-b60bafcf127a";
    }
  } catch {}
})();
const j = "bAsp";
const ee = "pv8N";
const se = "BwmR";
const ae = "c7Hm";
const te = "bL0a";
const re = "oF9p";
const ne = "wxba";
const le = "kBOs";
const oe = "E0Ii";
const ie = "bz4i";
const ce = "qERZ";
const de = "wMVI";
const ue = "kZ1k";
const pe = "C6SL";
const me = "Jl4E";
const he = "Kntv";
const fe = "QU6H";
const be = "rOyI";
const Ee = "JDPH";
const Ne = "xDeT";

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
  const [P, S] = d("");
  const [u, a] = d(null);
  const [y, E] = d(null);
  const [v, c] = d(null);
  const [p, N] = d(false);
  const [F, I] = d(false);
  const [h, m] = d("email");
  const [l, A] = d("");
  const [g, L] = d("");
  const [k, W] = d(false);
  const [C, G] = d(false);
  const [T, w] = d(null);
  const [H, D] = d(false);

  const V = (t) => {
    t.preventDefault();
    a(null);
    E(null);

    if (!n.trim()) {
      E("Введите email");
      return;
    }

    I(true);
  };

  const U = q(
    async (t) => {
      I(false);
      N(true);
      try {
        const o = await ad.forgotPassword({ email: n, turnstileToken: t });
        z(o.flowToken ?? "");
        m("otp");
      } catch (o) {
        if (aa(o)) {
          switch (o.code) {
            case ab.ENTITY_NOT_FOUND: {
              E("Аккаунт с таким email не найден");
              break;
            }
            case ab.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ab.RATE_LIMIT_EXCEEDED: {
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

  const X = q((t) => {
    S(t);
    a(null);
    m("password");
  }, []);

  const Z = q(
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
      if (l !== g) {
        w("Пароли не совпадают");
        return;
      }
      N(true);
      try {
        await ad.resetPassword({
          email: n,
          flowToken: b,
          otp: P,
          newPassword: l,
        });

        q_1("/login");
      } catch (o) {
        if (aa(o)) {
          switch (o.code) {
            case ab.OTP_INVALID: {
              a("Неверный код. Попробуйте снова");
              m("otp");
              S("");
              break;
            }
            case ab.MISSING_FLOW_TOKEN:
            case ab.UNAUTHORIZED: {
              a("Сессия истекла. Начните заново");
              m("email");
              break;
            }
            case ab.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ab.VALIDATION_ERROR: {
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
    [n, b, P, l, g]
  );

  const q = q(async () => {
    a(null);
    D(false);
    try {
      await ad.resendOtp({ email: n, flowToken: b });
      D(true);

      setTimeout(() => D(false), 3000 /* 3e3 */);
    } catch (t) {
      if (aa(t)) {
        if (t.code === ab.RATE_LIMIT_EXCEEDED) {
          a("Слишком много запросов. Попробуйте позже");
        } else {
          a(t.message || "Не удалось отправить код");
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [n, b]);

  const R = q(() => {
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
                a(aa_1, {
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
                a(O, {
                  onSubmit: X,
                  onResend: q,
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
              onSubmit: Z,
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
                              value: g,
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
                              onClick: () => G(!C),
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
                a(aa_1, {
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
      a(C, { isOpen: F, onClose: () => I(false), onVerify: U }),
    ],
  });
};

export { ForgotPassword as ForgotPassword, ForgotPassword as default };
