import { d, a, aa, B, ab, a as a_1, a8, a9 } from "./index-DDCL-vHK.js";
import { I, a as a_2 } from "./IconEyeOff-DkfQwtOQ.js";
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
    n.SENTRY_RELEASE = { id: "1.1.0" };
    const r = new n.Error().stack;

    if (r) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[r] = "15c2cb23-634e-4851-8e23-86959383a9fe";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-15c2cb23-634e-4851-8e23-86959383a9fe";
    }
  } catch {}
})();
const R = "RXf4";
const S = "BPoe";
const L = "tT3F";
const A = "Cp7c";
const O = "uNx0";
const W = "Iy6W";
const x = "COED";
const z = "J9au";
const $ = "zbFD";
const G = "Na6L";
const M = "KqSM";
const U = "O9mB";
const F = "T3hi";
const K = "CaTO";
const Q = "ih7R";
const V = "mt59";
const X = "USMs";
const Z = "bTZV";
const q = "nnQw";

const s = {
  page: R,
  container: S,
  logo: L,
  form: A,
  header: O,
  title: W,
  subtitle: x,
  error: z,
  inputs: $,
  inputGroup: G,
  label: M,
  inputWrapper: U,
  input: F,
  inputError: K,
  fieldError: Q,
  hint: V,
  eyeButton: X,
  submitButton: Z,
  backLink: q,
};

export const ResetPassword = (n) => {
  const [r, b] = d("");
  const [E, I] = d("");
  const [d, v] = d(false);
  const [u, B] = d(false);
  const [w, o] = d(null);
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
    if (r !== E) {
      f("Пароли не совпадают");
      return;
    }
    N(true);
    try {
      await ab.resetPassword({ newPassword: r });
      a_1("/login");
    } catch (h) {
      if (a8(h)) {
        switch (h.code) {
          case a9.MISSING_FLOW_TOKEN:
          case a9.UNAUTHORIZED:
          case a9.BAD_REQUEST: {
            o("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case a9.VALIDATION_ERROR: {
            a("Пароль не соответствует требованиям");
            break;
          }
          case a9.RATE_LIMIT_EXCEEDED: {
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

  return a("div", {
    className: s.page,
    children: a("div", {
      className: s.container,
      children: [
        a("div", { className: s.logo, children: a(aa, {}) }),
        a("form", {
          className: s.form,
          onSubmit: C,
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
                          onInput: (i) => {
                            b(i.target.value);
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
                            : a(a_2, { size: 20 }),
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
                          className: `${s.input} ${m ? s.inputError : ""}`,
                          value: E,
                          onInput: (i) => {
                            I(i.target.value);
                            f(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: c,
                        }),
                        a("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => B(!u),
                          children: u
                            ? a(I, { size: 20 })
                            : a(a_2, { size: 20 }),
                        }),
                      ],
                    }),
                    m && a("span", { className: s.fieldError, children: m }),
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
