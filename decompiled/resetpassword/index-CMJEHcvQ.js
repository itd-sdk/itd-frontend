import {
  d,
  u,
  af,
  S_1 as B_1,
  x_1 as S_1,
  ag,
  u as u_1,
  x as x_1,
  ae,
} from "./index-ORJLmKGS.js";
import { I, a } from "./IconEyeOff-DYJifF4N.js";
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
    n.SENTRY_RELEASE = { id: "1.1.3" };
    const r = new n.Error().stack;

    if (r) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[r] = "0c758703-969b-45a0-9b16-983466483498";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-0c758703-969b-45a0-9b16-983466483498";
    }
  } catch {}
})();
const T = "kM2Z";
const A = "erIw";
const R = "Jw32";
const G = "ZXiG";
const x = "dbUg";
const z = "oiLF";
const O = "qNaa";
const W = "q36Q";
const $ = "JM2o";
const M = "EoHj";
const Q = "MfGC";
const U = "XcCH";
const q = "QCzk";
const H = "ltTw";
const J = "Ihma";
const X = "GSDl";
const Z = "PQ80";
const F = "L7qJ";

const s = {
  container: T,
  logo: A,
  form: R,
  header: G,
  title: x,
  subtitle: z,
  error: O,
  inputs: W,
  inputGroup: $,
  label: M,
  inputWrapper: Q,
  input: U,
  inputError: q,
  fieldError: H,
  hint: J,
  eyeButton: X,
  submitButton: Z,
  backLink: F,
};

export const ResetPassword = (n) => {
  const [r, b] = d("");
  const [w, I] = d("");
  const [d, v] = d(false);
  const [u, k] = d(false);
  const [E, o] = d(null);
  const [p, a] = d(null);
  const [m, f] = d(null);
  const [c, N] = d(false);

  const C = async (i) => {
    i.preventDefault();
    o(null);
    a(null);
    f(null);

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
    if (r !== w) {
      f("Пароли не совпадают");
      return;
    }
    N(true);
    try {
      await ag.resetPassword({ newPassword: r });
      u_1("/login");
    } catch (h) {
      if (x_1(h)) {
        switch (h.code) {
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
        u("div", { className: s.logo, children: u(af, {}) }),
        u("form", {
          className: s.form,
          onSubmit: C,
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
            E && u("div", { className: s.error, children: E }),
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
                          value: w,
                          onInput: (i) => {
                            I(i.target.value);
                            f(null);
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
          ],
        }),
      ],
    }),
  });
};

export { ResetPassword as ResetPassword, ResetPassword as default };
