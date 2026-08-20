import {
  d,
  u,
  af,
  B,
  k,
  ag,
  u as u_1,
  x as x_1,
  ae,
} from "./index-DDTOXJaD.js";
import { I, a } from "./IconEyeOff-D3w2rqGb.js";
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
      n._sentryDebugIds[r] = "02e89252-d56c-424c-90bb-6450a353d8fb";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-02e89252-d56c-424c-90bb-6450a353d8fb";
    }
  } catch {}
})();
const T = "nEfS";
const L = "rkK2";
const R = "WJE0";
const W = "Mm6A";
const x = "IJsS";
const z = "KeWt";
const O = "prn4";
const $ = "H71H";
const G = "Kl5Y";
const K = "zM9c";
const U = "vPBD";
const H = "g5J7";
const M = "SUIo";
const J = "wHii";
const Q = "Dj4v";
const Y = "U1Tw";
const j = "a83A";
const F = "fBQK";

const s = {
  container: T,
  logo: L,
  form: R,
  header: W,
  title: x,
  subtitle: z,
  error: O,
  inputs: $,
  inputGroup: G,
  label: K,
  inputWrapper: U,
  input: H,
  inputError: M,
  fieldError: J,
  hint: Q,
  eyeButton: Y,
  submitButton: j,
  backLink: F,
};

export const ResetPassword = (n) => {
  const [r, b] = d("");
  const [E, I] = d("");
  const [d, v] = d(false);
  const [u, k] = d(false);
  const [w, o] = d(null);
  const [p, a] = d(null);
  const [f, m] = d(null);
  const [c, N] = d(false);

  const B = async (i) => {
    i.preventDefault();
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

  return u(k, {
    children: u("div", {
      className: s.container,
      children: [
        u("div", { className: s.logo, children: u(af, {}) }),
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
