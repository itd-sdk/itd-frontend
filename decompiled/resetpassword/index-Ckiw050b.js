import {
  d,
  u,
  aC,
  aC as aC_1,
  S as S_1,
  aD,
  u as u_1,
  K as K_1,
  aB,
} from "./index-CsuAWxkQ.js";
import { I, a } from "./IconEyeOff-s_19qPRg.js";
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
      n._sentryDebugIds[r] = "342340a8-8352-4c61-9249-173b2231c942";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-342340a8-8352-4c61-9249-173b2231c942";
    }
  } catch {}
})();
const L = "Lz4y";
const S = "XyOZ";
const T = "kvu2";
const R = "De1Q";
const O = "vzgQ";
const W = "IWTf";
const $ = "Ws1U";
const x = "prFF";
const G = "Ufau";
const U = "Cy3O";
const q = "ziV2";
const F = "Xk3p";
const M = "oYqq";
const Q = "hz9q";
const X = "dIFw";
const K = "A1sg";
const V = "kAoN";
const Y = "qzDM";

const s = {
  container: L,
  logo: S,
  form: T,
  header: R,
  title: O,
  subtitle: W,
  error: $,
  inputs: x,
  inputGroup: G,
  label: U,
  inputWrapper: q,
  input: F,
  inputError: M,
  fieldError: Q,
  hint: X,
  eyeButton: K,
  submitButton: V,
  backLink: Y,
};

export const ResetPassword = (n) => {
  const [r, b] = d("");
  const [E, I] = d("");
  const [d, v] = d(false);
  const [u, k] = d(false);
  const [w, o] = d(null);
  const [p, a] = d(null);
  const [f, h] = d(null);
  const [c, N] = d(false);

  const D = async (i) => {
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
      await aD.resetPassword({ newPassword: r });
      u_1("/login");
    } catch (m) {
      if (K_1(m)) {
        switch (m.code) {
          case aB.MISSING_FLOW_TOKEN:
          case aB.UNAUTHORIZED:
          case aB.BAD_REQUEST: {
            o("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case aB.VALIDATION_ERROR: {
            a("Пароль не соответствует требованиям");
            break;
          }
          case aB.RATE_LIMIT_EXCEEDED: {
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
        u("div", { className: s.logo, children: u(aC, {}) }),
        u("form", {
          className: s.form,
          onSubmit: D,
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
                          className: `${s.input} ${f ? s.inputError : ""}`,
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
                    f && u("span", { className: s.fieldError, children: f }),
                  ],
                }),
              ],
            }),
            u(aC_1, {
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
