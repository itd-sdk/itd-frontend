import {
  d,
  u,
  I,
  I as I_1,
  $_1 as S_1,
  d as d_1,
  $ as $_1,
  o,
  r,
} from "./index-GOT6tyDH.js";
import { I as I_2, a } from "./IconEyeOff-iWQmBgHn.js";
(() => {
  try {
    const n =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    n.SENTRY_RELEASE = { id: "1.1.2" };
    const r = new n.Error().stack;

    if (r) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[r] = "bf60b5b0-b314-4baf-9b1e-fe2f58e126da";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-bf60b5b0-b314-4baf-9b1e-fe2f58e126da";
    }
  } catch {}
})();
const L = "BFbX";
const O = "uStO";
const R = "G7NQ";
const A = "UHNU";
const T = "DIeL";
const W = "Rp5V";
const $ = "HKmZ";
const x = "sFt3";
const z = "qwXD";
const U = "jyIc";
const F = "wP1E";
const H = "gGN9";
const K = "fPGK";
const V = "PO85";
const X = "F0oH";
const M = "OGeg";
const Q = "sGVh";
const Z = "OiG2";

const s = {
  container: L,
  logo: O,
  form: R,
  header: A,
  title: T,
  subtitle: W,
  error: $,
  inputs: x,
  inputGroup: z,
  label: U,
  inputWrapper: F,
  input: H,
  inputError: K,
  fieldError: V,
  hint: X,
  eyeButton: M,
  submitButton: Q,
  backLink: Z,
};

export const ResetPassword = (n) => {
  const [r, h] = d("");
  const [E, I] = d("");
  const [d, v] = d(false);
  const [u, P] = d(false);
  const [w, o] = d(null);
  const [p, a] = d(null);
  const [f, b] = d(null);
  const [c, N] = d(false);

  const k = async (i) => {
    i.preventDefault();
    o(null);
    a(null);
    b(null);

    if (!r.trim()) {
      a("Введите новый пароль");
      return;
    }

    if (r.length < 10) {
      a("Минимум 10 символов");
      return;
    }
    if (r.length > 128) {
      a("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(r)) {
      a("Только латиница, цифры и знаки пунктуации");
      return;
    }
    if (r !== E) {
      b("Пароли не совпадают");
      return;
    }
    N(true);
    try {
      await d_1.resetPassword({ newPassword: r });
      $_1("/login");
    } catch (m) {
      if (o(m)) {
        switch (m.code) {
          case r.MISSING_FLOW_TOKEN:
          case r.UNAUTHORIZED:
          case r.BAD_REQUEST: {
            o("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case r.VALIDATION_ERROR: {
            a("Пароль не соответствует требованиям");
            break;
          }
          case r.RATE_LIMIT_EXCEEDED: {
            o("Слишком много попыток. Попробуйте позже");
            break;
          }
          default: {
            o(m.message || "Произошла ошибка");
          }
        }
      } else {
        o("Произошла ошибка. Попробуйте позже");
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
          onSubmit: k,
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
            w && u("div", { className: s.error, children: w }),
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
                          type: d ? "text" : "password",
                          className: `${s.input} ${p ? s.inputError : ""}`,
                          value: r,
                          onInput: (i) => {
                            h(i.target.value);
                            a(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: c,
                        }),
                        u("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => v(!d),
                          children: d
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
                    p && u("span", { className: s.fieldError, children: p }),
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
                          className: `${s.input} ${f ? s.inputError : ""}`,
                          value: E,
                          onInput: (i) => {
                            I(i.target.value);
                            b(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: c,
                        }),
                        u("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => P(!u),
                          children: u
                            ? u(I_2, { size: 20 })
                            : u(a, { size: 20 }),
                        }),
                      ],
                    }),
                    f && u("span", { className: s.fieldError, children: f }),
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
              disabled: c,
              children: c ? "Сохранение..." : "Сохранить пароль",
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
