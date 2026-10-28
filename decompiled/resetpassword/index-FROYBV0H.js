import {
  d,
  u,
  I,
  B,
  o as S_1,
  t,
  $ as $_1,
  o,
  d as d_1,
} from "./index-AoERIL5v.js";
import { I as I_1, a } from "./IconEyeOff-DuL6Bcb3.js";
const D = "xbyO";
const O = "WWFM";
const R = "Ymnr";
const W = "e87f";
const x = "BQic";
const _ = "XuZV";
const T = "ahtY";
const $ = "awlk";
const z = "mDbm";
const G = "X3YL";
const Y = "QRDo";
const M = "aEnA";
const Q = "xrPS";
const U = "YhJh";
const X = "ONnh";
const F = "PPqv";
const K = "tNlm";
const V = "Klvg";

const s = {
  container: D,
  logo: O,
  form: R,
  header: W,
  title: x,
  subtitle: _,
  error: T,
  inputs: $,
  inputGroup: z,
  label: G,
  inputWrapper: Y,
  input: M,
  inputError: Q,
  fieldError: U,
  hint: X,
  eyeButton: F,
  submitButton: K,
  backLink: V,
};

export const ResetPassword = (Z) => {
  const [t, v] = d("");
  const [f, y] = d("");
  const [c, I] = d(false);
  const [u, g] = d(false);
  const [b, a] = d(null);
  const [d, n] = d(null);
  const [p, m] = d(null);
  const [i, N] = d(false);

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
    N(true);
    try {
      await t.resetPassword({ newPassword: t });
      $_1("/login");
    } catch (h) {
      if (o(h)) {
        switch (h.code) {
          case d_1.MISSING_FLOW_TOKEN:
          case d_1.UNAUTHORIZED:
          case d_1.BAD_REQUEST: {
            a("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case d_1.VALIDATION_ERROR: {
            n("Пароль не соответствует требованиям");
            break;
          }
          case d_1.RATE_LIMIT_EXCEEDED: {
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
      N(false);
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
            b && u("div", { className: s.error, children: b }),
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
                            v(o.target.value);
                            n(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: i,
                        }),
                        u("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => I(!c),
                          children: c
                            ? u(I_1, { size: 20 })
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
                            y(o.target.value);
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
                            ? u(I_1, { size: 20 })
                            : u(a, { size: 20 }),
                        }),
                      ],
                    }),
                    p && u("span", { className: s.fieldError, children: p }),
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
