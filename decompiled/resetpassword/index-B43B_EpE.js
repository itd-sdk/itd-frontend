import { d, u, aB, B, S, aC, u as u_1, K, aA } from "./index-D4QRo1-7.js";
import { I, a } from "./IconEyeOff-mN_xIYSl.js";
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
      n._sentryDebugIds[r] = "99562d0e-247b-43e6-b6d6-c6581f7a6cdc";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-99562d0e-247b-43e6-b6d6-c6581f7a6cdc";
    }
  } catch {}
})();
const L = "MVfS";
const R = "eS76";
const T = "NF06";
const G = "toJ5";
const O = "QBVb";
const W = "pp9C";
const x = "osWN";
const z = "yxHm";
const U = "BhIG";
const $ = "jwVG";
const V = "CwZH";
const F = "QbgO";
const H = "w2Xt";
const M = "JFUE";
const Q = "B8Pe";
const X = "zdVk";
const Z = "UBZb";
const J = "uUPX";

const s = {
  container: L,
  logo: R,
  form: T,
  header: G,
  title: O,
  subtitle: W,
  error: x,
  inputs: z,
  inputGroup: U,
  label: $,
  inputWrapper: V,
  input: F,
  inputError: H,
  fieldError: M,
  hint: Q,
  eyeButton: X,
  submitButton: Z,
  backLink: J,
};

export const ResetPassword = (n) => {
  const [r, b] = d("");
  const [w, I] = d("");
  const [d, v] = d(false);
  const [u, B] = d(false);
  const [E, o] = d(null);
  const [p, a] = d(null);
  const [f, m] = d(null);
  const [c, N] = d(false);

  const k = async (i) => {
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
    if (r !== w) {
      m("Пароли не совпадают");
      return;
    }
    N(true);
    try {
      await aC.resetPassword({ newPassword: r });
      u_1("/login");
    } catch (h) {
      if (K(h)) {
        switch (h.code) {
          case aA.MISSING_FLOW_TOKEN:
          case aA.UNAUTHORIZED:
          case aA.BAD_REQUEST: {
            o("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case aA.VALIDATION_ERROR: {
            a("Пароль не соответствует требованиям");
            break;
          }
          case aA.RATE_LIMIT_EXCEEDED: {
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

  return u(S, {
    children: u("div", {
      className: s.container,
      children: [
        u("div", { className: s.logo, children: u(aB, {}) }),
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
                          className: `${s.input} ${f ? s.inputError : ""}`,
                          value: w,
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
                          onClick: () => B(!u),
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
