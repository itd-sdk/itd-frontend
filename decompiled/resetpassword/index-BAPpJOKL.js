import { d, a, ac, B, ad, f, aa, ab } from "./index-7xRaK15k.js";
import { I, a as a_1 } from "./IconEyeOff-DAFH4tzs.js";
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
      n._sentryDebugIds[r] = "42a469a2-0430-45c2-9541-d76b9165e83b";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-42a469a2-0430-45c2-9541-d76b9165e83b";
    }
  } catch {}
})();
const S = "r7c8";
const A = "gJi6";
const L = "HdJl";
const T = "k3oo";
const G = "m3Ma";
const W = "odzq";
const z = "iBYZ";
const O = "gEWd";
const $ = "K97q";
const x = "a0G4";
const M = "Btgb";
const H = "eNVI";
const K = "sIiw";
const U = "Kl1G";
const Z = "pvmr";
const q = "Elpb";
const J = "MRBd";
const V = "HtSn";
const Y = "ZacC";

const s = {
  page: S,
  container: A,
  logo: L,
  form: T,
  header: G,
  title: W,
  subtitle: z,
  error: O,
  inputs: $,
  inputGroup: x,
  label: M,
  inputWrapper: H,
  input: K,
  inputError: U,
  fieldError: Z,
  hint: q,
  eyeButton: J,
  submitButton: V,
  backLink: Y,
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

  const k = async (i) => {
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
      N(false);
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
                            : a(a_1, { size: 20 }),
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
