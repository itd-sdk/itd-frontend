import { d, a, ac, f as B_1, ad, f, aa, ab } from "./index-BCnJB3wz.js";
import { I, a as a_1 } from "./IconEyeOff-CTY4FkhJ.js";
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
      n._sentryDebugIds[r] = "fde7bdc2-773f-41c6-9b0d-2569d428c0e8";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-fde7bdc2-773f-41c6-9b0d-2569d428c0e8";
    }
  } catch {}
})();
const D = "VSRl";
const L = "SiFQ";
const A = "qVeS";
const T = "Hokx";
const O = "uMQv";
const x = "KHLa";
const z = "q0t6";
const W = "x5tc";
const $ = "DJr3";
const G = "smtg";
const M = "eFmi";
const F = "uasO";
const H = "ltjn";
const Q = "jRNn";
const U = "vsC4";
const V = "MAo4";
const j = "zP46";
const q = "MSNO";
const K = "LR5Z";

const s = {
  page: D,
  container: L,
  logo: A,
  form: T,
  header: O,
  title: x,
  subtitle: z,
  error: W,
  inputs: $,
  inputGroup: G,
  label: M,
  inputWrapper: F,
  input: H,
  inputError: Q,
  fieldError: U,
  hint: V,
  eyeButton: j,
  submitButton: q,
  backLink: K,
};

export const ResetPassword = (n) => {
  const [r, b] = d("");
  const [E, v] = d("");
  const [d, I] = d(false);
  const [u, k] = d(false);
  const [N, o] = d(null);
  const [p, a] = d(null);
  const [f, m] = d(null);
  const [c, w] = d(false);

  const S = async (i) => {
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
    w(true);
    try {
      await ad.resetPassword({ newPassword: r });
      f("/login");
    } catch (h) {
      if (aa(h)) {
        switch (h.code) {
          case ab.MISSING_FLOW_TOKEN:
          case ab.UNAUTHORIZED:
          case ab.BAD_REQUEST: {
            o("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case ab.VALIDATION_ERROR: {
            a("Пароль не соответствует требованиям");
            break;
          }
          case ab.RATE_LIMIT_EXCEEDED: {
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
      w(false);
    }
  };

  return a("div", {
    className: s.page,
    children: a("div", {
      className: s.container,
      children: [
        a("div", { className: s.logo, children: a(ac, {}) }),
        a("form", {
          className: s.form,
          onSubmit: S,
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
            N && a("div", { className: s.error, children: N }),
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
                          onClick: () => I(!d),
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
                            v(i.target.value);
                            m(null);
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
            a(B_1, {
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
