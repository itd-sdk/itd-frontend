import { d, a, ad, B, ae, f, ab, ac } from "./index-BAlLDjSl.js";
import { I, a as a_1 } from "./IconEyeOff-_f-Lat8q.js";
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
    n.SENTRY_RELEASE = { id: "1.1.1" };
    const r = new n.Error().stack;

    if (r) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[r] = "7eb5cdf2-6b2e-4230-8cfd-99b9dcb0e509";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-7eb5cdf2-6b2e-4230-8cfd-99b9dcb0e509";
    }
  } catch {}
})();
const C = "SeDl";
const R = "f6p5";
const S = "fYh8";
const z = "aPbg";
const T = "EFlc";
const O = "z4Rh";
const W = "AB8v";
const $ = "zAse";
const x = "wO9d";
const G = "NIhz";
const Q = "wOHC";
const F = "bLIq";
const M = "AQJQ";
const U = "QFo6";
const q = "hagD";
const H = "BLqm";
const Y = "Pz8g";
const J = "Lb2g";
const K = "PRvM";

const s = {
  page: C,
  container: R,
  logo: S,
  form: z,
  header: T,
  title: O,
  subtitle: W,
  error: $,
  inputs: x,
  inputGroup: G,
  label: Q,
  inputWrapper: F,
  input: M,
  inputError: U,
  fieldError: q,
  hint: H,
  eyeButton: Y,
  submitButton: J,
  backLink: K,
};

export const ResetPassword = (n) => {
  const [r, b] = d("");
  const [E, I] = d("");
  const [d, v] = d(false);
  const [u, P] = d(false);
  const [w, o] = d(null);
  const [p, a] = d(null);
  const [f, h] = d(null);
  const [c, N] = d(false);

  const B = async (l) => {
    l.preventDefault();
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
      await ae.resetPassword({ newPassword: r });
      f("/login");
    } catch (m) {
      if (ab(m)) {
        switch (m.code) {
          case ac.MISSING_FLOW_TOKEN:
          case ac.UNAUTHORIZED:
          case ac.BAD_REQUEST: {
            o("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case ac.VALIDATION_ERROR: {
            a("Пароль не соответствует требованиям");
            break;
          }
          case ac.RATE_LIMIT_EXCEEDED: {
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

  return a("div", {
    className: s.page,
    children: a("div", {
      className: s.container,
      children: [
        a("div", { className: s.logo, children: a(ad, {}) }),
        a("form", {
          className: s.form,
          onSubmit: B,
          children: [
            a("div", {
              className: s.header,
              children: [
                a("h1", { className: s.title, children: "Новый пароль" }),
                a("p", {
                  className: s.subtitle,
                  children: "Придумайте новый пароль для вашего аккаунта",
                }),
              ],
            }),
            w && a("div", { className: s.error, children: w }),
            a("div", {
              className: s.inputs,
              children: [
                a("div", {
                  className: s.inputGroup,
                  children: [
                    a("label", {
                      className: s.label,
                      children: "Новый пароль",
                    }),
                    a("div", {
                      className: s.inputWrapper,
                      children: [
                        a("input", {
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
                        a("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => v(!d),
                          children: d
                            ? a(I, { size: 20 })
                            : a(a_1, { size: 20 }),
                        }),
                      ],
                    }),
                    a("span", {
                      className: s.hint,
                      children:
                        "Минимум 10 символов, латиница, цифры и пунктуация",
                    }),
                    p && a("span", { className: s.fieldError, children: p }),
                  ],
                }),
                a("div", {
                  className: s.inputGroup,
                  children: [
                    a("label", {
                      className: s.label,
                      children: "Подтверждение пароля",
                    }),
                    a("div", {
                      className: s.inputWrapper,
                      children: [
                        a("input", {
                          type: u ? "text" : "password",
                          className: `${s.input} ${f ? s.inputError : ""}`,
                          value: E,
                          onInput: (l) => {
                            I(l.target.value);
                            h(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: c,
                        }),
                        a("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => P(!u),
                          children: u
                            ? a(I, { size: 20 })
                            : a(a_1, { size: 20 }),
                        }),
                      ],
                    }),
                    f && a("span", { className: s.fieldError, children: f }),
                  ],
                }),
              ],
            }),
            a(B, {
              type: "submit",
              variant: "primary",
              size: "lg",
              fullWidth: true,
              className: s.submitButton,
              disabled: c,
              children: c ? "Сохранение..." : "Сохранить пароль",
            }),
            a("p", {
              className: s.backLink,
              children: a("a", {
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
