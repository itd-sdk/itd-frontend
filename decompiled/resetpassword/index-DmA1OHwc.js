import {
  d,
  u,
  af,
  S_1 as B_1,
  P as S_1,
  am,
  u as u_1,
  x as x_1,
  ae,
} from "./index-dnACTU3c.js";
import { P } from "./index-CTpGM1z1.js";
import { I, a } from "./IconEyeOff-B7iRtqfA.js";
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
      n._sentryDebugIds[r] = "b00c7bd1-e41b-4032-9cee-b4dd3997a343";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-b00c7bd1-e41b-4032-9cee-b4dd3997a343";
    }
  } catch {}
})();
const A = "sKM3";
const R = "eo4Y";
const W = "nwIY";
const x = "l34e";
const O = "jO1u";
const z = "D70d";
const G = "NaPa";
const $ = "gaEX";
const U = "x7CT";
const j = "vksE";
const K = "LZHj";
const M = "rQWg";
const Q = "hQNV";
const Y = "FyWT";
const F = "kzh8";
const H = "G5h9";
const V = "K6jU";
const X = "dIC5";

const s = {
  container: A,
  logo: R,
  form: W,
  header: x,
  title: O,
  subtitle: z,
  error: G,
  inputs: $,
  inputGroup: U,
  label: j,
  inputWrapper: K,
  input: M,
  inputError: Q,
  fieldError: Y,
  hint: F,
  eyeButton: H,
  submitButton: V,
  backLink: X,
};

export const ResetPassword = (n) => {
  const [r, b] = d("");
  const [E, I] = d("");
  const [d, v] = d(false);
  const [u, k] = d(false);
  const [w, o] = d(null);
  const [p, a] = d(null);
  const [m, h] = d(null);
  const [c, N] = d(false);

  const P = async (i) => {
    i.preventDefault();
    o(null);
    a(null);
    h(null);

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
      h("Пароли не совпадают");
      return;
    }
    N(true);
    try {
      await am.resetPassword({ newPassword: r });
      u_1("/login");
    } catch (f) {
      if (x_1(f)) {
        switch (f.code) {
          case ae.MISSING_FLOW_TOKEN:
          case ae.UNAUTHORIZED:
          case ae.BAD_REQUEST: {
            o("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case ae.VALIDATION_ERROR: {
            a("Пароль не соответствует требованиям");
            break;
          }
          case ae.RATE_LIMIT_EXCEEDED: {
            o("Слишком много попыток. Попробуйте позже");
            break;
          }
          default: {
            o(f.message || "Произошла ошибка");
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
        u("div", { className: s.logo, children: u(af, {}) }),
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
                            b(i.target.value);
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
                          children: d ? u(I, { size: 20 }) : u(a, { size: 20 }),
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
                          className: `${s.input} ${m ? s.inputError : ""}`,
                          value: E,
                          onInput: (i) => {
                            I(i.target.value);
                            h(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: c,
                        }),
                        u("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => k(!u),
                          children: u ? u(I, { size: 20 }) : u(a, { size: 20 }),
                        }),
                      ],
                    }),
                    m && u("span", { className: s.fieldError, children: m }),
                  ],
                }),
              ],
            }),
            u(B_1, {
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
            u(P, {}),
          ],
        }),
      ],
    }),
  });
};

export { ResetPassword as ResetPassword, ResetPassword as default };
