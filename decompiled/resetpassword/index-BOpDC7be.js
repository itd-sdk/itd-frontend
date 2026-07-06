import { d, a, ad, B, ae, f, ab, ac } from "./index-CFv_0Hh6.js";
import { I, a as a_1 } from "./IconEyeOff-C3SWTYTF.js";
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
      n._sentryDebugIds[r] = "0f298ce3-4af6-4b22-b543-95ff765ab927";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-0f298ce3-4af6-4b22-b543-95ff765ab927";
    }
  } catch {}
})();
const C = "lGhP";
const L = "p4Gl";
const R = "QYrP";
const T = "n6Is";
const W = "lhVs";
const G = "Jflm";
const O = "Wvsx";
const x = "fdZo";
const $ = "bSPM";
const z = "D7W1";
const J = "F9js";
const F = "t5Yf";
const M = "HSV7";
const U = "JAFJ";
const V = "p3EM";
const Y = "Jntv";
const Z = "ObWZ";
const j = "dI02";
const H = "qjJF";

const s = {
  page: C,
  container: L,
  logo: R,
  form: T,
  header: W,
  title: G,
  subtitle: O,
  error: x,
  inputs: $,
  inputGroup: z,
  label: J,
  inputWrapper: F,
  input: M,
  inputError: U,
  fieldError: V,
  hint: Y,
  eyeButton: Z,
  submitButton: j,
  backLink: H,
};

export const ResetPassword = (n) => {
  const [r, b] = d("");
  const [E, I] = d("");
  const [d, v] = d(false);
  const [u, P] = d(false);
  const [w, o] = d(null);
  const [p, a] = d(null);
  const [f, m] = d(null);
  const [c, N] = d(false);

  const k = async (l) => {
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
      await ae.resetPassword({ newPassword: r });
      f("/login");
    } catch (h) {
      if (ab(h)) {
        switch (h.code) {
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
        a("div", { className: s.logo, children: a(ad, {}) }),
        a("form", {
          className: s.form,
          onSubmit: k,
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
                            m(null);
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
