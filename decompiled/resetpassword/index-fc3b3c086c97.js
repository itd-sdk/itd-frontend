import {
  d,
  u,
  I,
  I as I_1,
  an as S_1,
  am,
  $ as $_1,
  an,
  ao,
} from "./index-4cbec7521f6a.js";
import { I as I_2, a } from "./IconEyeOff-46afdc4444d7.js";
const z = "QHfe";
const A = "zVzo";
const R = "fzlX";
const _ = "gSMo";
const D = "iOqs";
const T = "aPyh";
const W = "L6U1";
const $ = "mO9B";
const x = "bOum";
const G = "i2cf";
const U = "N8pI";
const M = "C9dL";
const q = "qBea";
const F = "PSOF";
const H = "NeyP";
const K = "Ol9Z";
const Q = "UMYK";
const V = "aEuo";

const s = {
  container: z,
  logo: A,
  form: R,
  header: _,
  title: D,
  subtitle: T,
  error: W,
  inputs: $,
  inputGroup: x,
  label: G,
  inputWrapper: U,
  input: M,
  inputError: q,
  fieldError: F,
  hint: H,
  eyeButton: K,
  submitButton: Q,
  backLink: V,
};

export const ResetPassword = (X) => {
  const [t, y] = d("");
  const [f, I] = d("");
  const [c, v] = d(false);
  const [u, g] = d(false);
  const [N, a] = d(null);
  const [d, n] = d(null);
  const [p, m] = d(null);
  const [i, b] = d(false);

  const P = async (o) => {
    o.preventDefault();
    a(null);
    n(null);
    m(null);

    if (!t.trim()) {
      n("Введите новый пароль");
      return;
    }

    if (t.length < 10) {
      n("Минимум 10 символов");
      return;
    }
    if (t.length > 128) {
      n("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(t)) {
      n("Только латиница, цифры и знаки пунктуации");
      return;
    }
    if (t !== f) {
      m("Пароли не совпадают");
      return;
    }
    b(true);
    try {
      await am.resetPassword({ newPassword: t });
      $_1("/login");
    } catch (h) {
      if (an(h)) {
        switch (h.code) {
          case ao.MISSING_FLOW_TOKEN:
          case ao.UNAUTHORIZED:
          case ao.BAD_REQUEST: {
            a("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case ao.VALIDATION_ERROR: {
            n("Пароль не соответствует требованиям");
            break;
          }
          case ao.RATE_LIMIT_EXCEEDED: {
            a("Слишком много попыток. Попробуйте позже");
            break;
          }
          default: {
            a(h.message || "Произошла ошибка");
          }
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      b(false);
    }
  };

  return u(S_1, {
    children: u("div", {
      className: s.container,
      children: [
        u("div", { className: s.logo, children: u(I, {}) }),
        u("form", {
          className: s.form,
          onSubmit: P,
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
            N && u("div", { className: s.error, children: N }),
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
                          type: c ? "text" : "password",
                          className: `${s.input} ${d ? s.inputError : ""}`,
                          value: t,
                          onInput: (o) => {
                            y(o.target.value);
                            n(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: i,
                        }),
                        u("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => v(!c),
                          children: c
                            ? u(I_2, { size: 20 })
                            : u(a, { size: 20 }),
                        }),
                      ],
                    }),
                    u("span", {
                      className: s.hint,
                      children:
                        "Минимум 10 символов, латиница, цифры и пунктуация",
                    }),
                    d && u("span", { className: s.fieldError, children: d }),
                  ],
                }),
                u("div", {
                  className: s.inputGroup,
                  children: [
                    u("label", {
                      className: s.label,
                      children: "Подтверждение пароля",
                    }),
                    u("div", {
                      className: s.inputWrapper,
                      children: [
                        u("input", {
                          type: u ? "text" : "password",
                          className: `${s.input} ${p ? s.inputError : ""}`,
                          value: f,
                          onInput: (o) => {
                            I(o.target.value);
                            m(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: i,
                        }),
                        u("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => g(!u),
                          children: u
                            ? u(I_2, { size: 20 })
                            : u(a, { size: 20 }),
                        }),
                      ],
                    }),
                    p && u("span", { className: s.fieldError, children: p }),
                  ],
                }),
              ],
            }),
            u(I_1, {
              type: "submit",
              variant: "primary",
              size: "lg",
              fullWidth: true,
              className: s.submitButton,
              disabled: i,
              children: i ? "Сохранение..." : "Сохранить пароль",
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
      ],
    }),
  });
};

export { ResetPassword as ResetPassword, ResetPassword as default };
