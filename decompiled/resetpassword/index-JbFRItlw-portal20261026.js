import {
  d,
  u,
  I,
  B,
  y_1 as S_1,
  D,
  $ as $_1,
  I_1 as y_1,
  z as z_1,
} from "./index-BQxlThnW-portal20261026.js";
import { I as I_1, a } from "./IconEyeOff-ONzFZVHN-portal20261026.js";
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
      n._sentryDebugIds[r] = "784919a5-2a38-499d-8ac8-ec2c1bc61c88";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-784919a5-2a38-499d-8ac8-ec2c1bc61c88";
    }
  } catch {}
})();
const C = "i01f";
const L = "JN0I";
const T = "uvhz";
const z = "SYPc";
const G = "eoh2";
const x = "bs8R";
const O = "kx4U";
const W = "eGge";
const $ = "ohnx";
const U = "PEBJ";
const J = "tik5";
const Z = "XrAq";
const j = "z7J4";
const M = "GZ3G";
const V = "jbBV";
const X = "uZRN";
const Y = "ilBA";
const q = "jIw4";

const s = {
  container: C,
  logo: L,
  form: T,
  header: z,
  title: G,
  subtitle: x,
  error: O,
  inputs: W,
  inputGroup: $,
  label: U,
  inputWrapper: J,
  input: Z,
  inputError: j,
  fieldError: M,
  hint: V,
  eyeButton: X,
  submitButton: Y,
  backLink: q,
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
      await D.resetPassword({ newPassword: r });
      $_1("/login");
    } catch (f) {
      if (y_1(f)) {
        switch (f.code) {
          case z_1.MISSING_FLOW_TOKEN:
          case z_1.UNAUTHORIZED:
          case z_1.BAD_REQUEST: {
            o("Сессия сброса пароля истекла. Начните заново");
            break;
          }
          case z_1.VALIDATION_ERROR: {
            a("Пароль не соответствует требованиям");
            break;
          }
          case z_1.RATE_LIMIT_EXCEEDED: {
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

  return u(S_1, {
    children: u("div", {
      className: s.container,
      children: [
        u("div", { className: s.logo, children: u(I, {}) }),
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
                          children: d
                            ? u(I_1, { size: 20 })
                            : u(a, { size: 20 }),
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
                          children: u
                            ? u(I_1, { size: 20 })
                            : u(a, { size: 20 }),
                        }),
                      ],
                    }),
                    h && u("span", { className: s.fieldError, children: h }),
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
