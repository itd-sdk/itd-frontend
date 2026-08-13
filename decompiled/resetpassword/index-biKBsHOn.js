import {
  d,
  u,
  af,
  B,
  k,
  ag,
  u as u_1,
  u_1 as u_1_1,
  ae,
} from "./index-B9FitUXy.js";
import { I, a } from "./IconEyeOff-D9eoRMHE.js";
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
      n._sentryDebugIds[r] = "567e45aa-cc15-4f09-9876-058b7d4e3a15";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-567e45aa-cc15-4f09-9876-058b7d4e3a15";
    }
  } catch {}
})();
const C = "J08T";
const L = "S6cb";
const S = "Y7MN";
const T = "yUxW";
const W = "xcvX";
const z = "Y9N8";
const O = "cIIx";
const Y = "dpAl";
const $ = "XBgD";
const G = "YuWY";
const U = "Ly2M";
const M = "BRYk";
const X = "re58";
const V = "Vg7p";
const q = "h4ze";
const F = "mIo2";
const H = "rbov";
const J = "URxq";

const s = {
  container: C,
  logo: L,
  form: S,
  header: T,
  title: W,
  subtitle: z,
  error: O,
  inputs: Y,
  inputGroup: $,
  label: G,
  inputWrapper: U,
  input: M,
  inputError: X,
  fieldError: V,
  hint: q,
  eyeButton: F,
  submitButton: H,
  backLink: J,
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
      await ag.resetPassword({ newPassword: r });
      u_1("/login");
    } catch (h) {
      if (u_1_1(h)) {
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
