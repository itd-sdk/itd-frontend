import {
  d,
  u,
  I,
  B,
  S as S_1,
  d as d_1,
  $ as $_1,
  o,
  r,
} from "./index-CR_1arh8.js";
import { I as I_1, a } from "./IconEyeOff-BlNwsMMr.js";
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
      n._sentryDebugIds[r] = "e203e8f7-fd08-4a03-9f09-f7f0f4c3e2c2";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-e203e8f7-fd08-4a03-9f09-f7f0f4c3e2c2";
    }
  } catch {}
})();
const S = "ZHWK";
const D = "U0lQ";
const T = "UBPP";
const W = "i8h6";
const O = "o8pk";
const G = "XGVj";
const U = "WKCJ";
const $ = "Ln0L";
const x = "lV3O";
const z = "syAm";
const V = "m49M";
const K = "jR6i";
const M = "lPyB";
const j = "BWP2";
const H = "wd4V";
const Q = "BsRP";
const X = "SsvU";
const Z = "RaAt";

const s = {
  container: S,
  logo: D,
  form: T,
  header: W,
  title: O,
  subtitle: G,
  error: U,
  inputs: $,
  inputGroup: x,
  label: z,
  inputWrapper: V,
  input: K,
  inputError: M,
  fieldError: j,
  hint: H,
  eyeButton: Q,
  submitButton: X,
  backLink: Z,
};

export const ResetPassword = (n) => {
  const [r, b] = d("");
  const [E, I] = d("");
  const [d, v] = d(false);
  const [u, P] = d(false);
  const [w, o] = d(null);
  const [p, a] = d(null);
  const [f, m] = d(null);
  const [c, N] = d(false);

  const B = async (l) => {
    l.preventDefault();
    o(null);
    a(null);
    m(null);

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
      m("Пароли не совпадают");
      return;
    }
    N(true);
    try {
      await d_1.resetPassword({ newPassword: r });
      $_1("/login");
    } catch (h) {
      if (o(h)) {
        switch (h.code) {
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
            o(h.message || "Произошла ошибка");
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
          onSubmit: B,
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
                          onInput: (l) => {
                            b(l.target.value);
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
                          onInput: (l) => {
                            I(l.target.value);
                            m(null);
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
                            ? u(I_1, { size: 20 })
                            : u(a, { size: 20 }),
                        }),
                      ],
                    }),
                    f && u("span", { className: s.fieldError, children: f }),
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
