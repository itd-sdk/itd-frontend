import {
  d,
  u,
  an,
  u_1 as B_1,
  S,
  ao,
  u as u_1,
  r,
  am,
} from "./index-B74jCtUp.js";
import { I, a } from "./IconEyeOff-BbmM5Yy0.js";
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
      n._sentryDebugIds[r] = "a1e26ea0-abc3-42a2-8084-a939a835b2c2";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-a1e26ea0-abc3-42a2-8084-a939a835b2c2";
    }
  } catch {}
})();
const R = "DXkr";
const C = "Hh82";
const T = "lcAl";
const O = "NqLM";
const W = "gaoe";
const z = "QkuL";
const $ = "wzFX";
const x = "SnQa";
const G = "EfPY";
const F = "eSZg";
const K = "OVRj";
const U = "A3h1";
const X = "XbVU";
const M = "AeFW";
const Q = "nroI";
const V = "EDgb";
const H = "RnKK";
const Y = "sFK5";

const s = {
  container: R,
  logo: C,
  form: T,
  header: O,
  title: W,
  subtitle: z,
  error: $,
  inputs: x,
  inputGroup: G,
  label: F,
  inputWrapper: K,
  input: U,
  inputError: X,
  fieldError: M,
  hint: Q,
  eyeButton: V,
  submitButton: H,
  backLink: Y,
};

export const ResetPassword = (n) => {
  const [r, b] = d("");
  const [E, I] = d("");
  const [d, v] = d(false);
  const [u, k] = d(false);
  const [w, o] = d(null);
  const [p, a] = d(null);
  const [h, m] = d(null);
  const [c, N] = d(false);

  const A = async (l) => {
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
      await ao.resetPassword({ newPassword: r });
      u_1("/login");
    } catch (f) {
      if (r(f)) {
        switch (f.code) {
          case am.MISSING_FLOW_TOKEN:
          case am.UNAUTHORIZED:
          case am.BAD_REQUEST: {
            o("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case am.VALIDATION_ERROR: {
            a("Пароль не соответствует требованиям");
            break;
          }
          case am.RATE_LIMIT_EXCEEDED: {
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

  return u(S, {
    children: u("div", {
      className: s.container,
      children: [
        u("div", { className: s.logo, children: u(an, {}) }),
        u("form", {
          className: s.form,
          onSubmit: A,
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
                          className: `${s.input} ${h ? s.inputError : ""}`,
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
                          onClick: () => k(!u),
                          children: u ? u(I, { size: 20 }) : u(a, { size: 20 }),
                        }),
                      ],
                    }),
                    h && u("span", { className: s.fieldError, children: h }),
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
          ],
        }),
      ],
    }),
  });
};

export { ResetPassword as ResetPassword, ResetPassword as default };
