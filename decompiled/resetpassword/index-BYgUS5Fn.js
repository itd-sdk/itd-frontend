import { d, a, ad, B, ae, f, ab, ac } from "./index-DuQT229k.js";
import { I, a as a_1 } from "./IconEyeOff-CDOK-c3g.js";
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
      n._sentryDebugIds[r] = "01fed8f8-9c8d-4dbb-9f96-9e1caa21771d";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-01fed8f8-9c8d-4dbb-9f96-9e1caa21771d";
    }
  } catch {}
})();
const C = "xg7Z";
const D = "axmb";
const A = "HhEh";
const L = "iH7h";
const x = "V7hO";
const W = "gSBZ";
const O = "drNE";
const G = "UW8j";
const $ = "kwW0";
const z = "X3SS";
const U = "rEGb";
const X = "mekR";
const Z = "Bmhx";
const H = "Rq5p";
const V = "eZVX";
const j = "FgsJ";
const F = "T5fX";
const M = "URbT";
const q = "lujn";

const s = {
  page: C,
  container: D,
  logo: A,
  form: L,
  header: x,
  title: W,
  subtitle: O,
  error: G,
  inputs: $,
  inputGroup: z,
  label: U,
  inputWrapper: X,
  input: Z,
  inputError: H,
  fieldError: V,
  hint: j,
  eyeButton: F,
  submitButton: M,
  backLink: q,
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

  const B = async (i) => {
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
                          onInput: (i) => {
                            I(i.target.value);
                            h(null);
                          },
                          placeholder: "••••••••••••",
                          autoComplete: "new-password",
                          disabled: c,
                        }),
                        a("button", {
                          type: "button",
                          className: s.eyeButton,
                          onClick: () => k(!u),
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
