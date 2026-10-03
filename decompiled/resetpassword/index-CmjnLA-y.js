import {
  d,
  u,
  aC,
  B,
  K_1 as S_1,
  aD,
  u as u_1,
  K as K_1,
  aB,
} from "./index-DK2L49XD.js";
import { I, a } from "./IconEyeOff-89JgB8fW.js";
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
      n._sentryDebugIds[r] = "6a6b211b-29ae-487c-8fad-8182856b50c5";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-6a6b211b-29ae-487c-8fad-8182856b50c5";
    }
  } catch {}
})();
const T = "XPyz";
const L = "EEkW";
const R = "UFEU";
const K = "o3UN";
const U = "NNqk";
const W = "ylK4";
const z = "Kgl2";
const O = "Vmcp";
const $ = "QAqk";
const x = "q2no";
const G = "hnPf";
const q = "hSaA";
const Q = "VwKT";
const V = "oZfm";
const Z = "mD8H";
const F = "KZtQ";
const H = "ybUe";
const M = "wAKy";

const s = {
  container: T,
  logo: L,
  form: R,
  header: K,
  title: U,
  subtitle: W,
  error: z,
  inputs: O,
  inputGroup: $,
  label: x,
  inputWrapper: G,
  input: q,
  inputError: Q,
  fieldError: V,
  hint: Z,
  eyeButton: F,
  submitButton: H,
  backLink: M,
};

export const ResetPassword = (n) => {
  const [r, b] = d("");
  const [E, I] = d("");
  const [d, v] = d(false);
  const [u, k] = d(false);
  const [w, o] = d(null);
  const [p, a] = d(null);
  const [m, f] = d(null);
  const [c, N] = d(false);

  const P = async (l) => {
    l.preventDefault();
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
    if (r !== E) {
      f("Пароли не совпадают");
      return;
    }
    N(true);
    try {
      await aD.resetPassword({ newPassword: r });
      u_1("/login");
    } catch (h) {
      if (K_1(h)) {
        switch (h.code) {
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
        u("div", { className: s.logo, children: u(aC, {}) }),
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
                          className: `${s.input} ${m ? s.inputError : ""}`,
                          value: E,
                          onInput: (l) => {
                            I(l.target.value);
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
