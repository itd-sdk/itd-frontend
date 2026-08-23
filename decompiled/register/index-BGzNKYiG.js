import {
  ae as d_1,
  w,
  q as q_1,
  k_1 as x_1,
  ae,
  u,
  af,
  w as w_1,
  k,
} from "./index-pEgBAsWz.js";
import { C } from "./index-BjZiGhmq.js";
import { k as k_1 } from "./index-IxAI1HCP.js";
import { I, a } from "./IconEyeOff-ConI11na.js";
(() => {
  try {
    const a =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    a.SENTRY_RELEASE = { id: "1.1.2" };
    const t = new a.Error().stack;

    if (t) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[t] = "017e5698-7bae-4666-9ab4-d325deed2da3";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-017e5698-7bae-4666-9ab4-d325deed2da3";
    }
  } catch {}
})();
const M = "i4pF";
const X = "WIni";
const Y = "zzRn";
const $ = "oo6J";
const F = "V3Hq";
const G = "VrD5";
const q = "tXV2";
const H = "Rt96";
const J = "YhFW";
const U = "bINi";
const Z = "XUcX";
const j = "xJnO";
const K = "LPtI";
const Q = "bWNZ";
const ee = "oTaI";
const re = "y1e5";
const te = "bavY";
const se = "g6eZ";

const r = {
  container: M,
  logo: X,
  form: Y,
  header: $,
  error: F,
  title: G,
  subtitle: q,
  inputs: H,
  inputGroup: J,
  inputWrapper: U,
  input: Z,
  label: j,
  inputError: K,
  fieldError: Q,
  eyeButton: ee,
  terms: re,
  submitButton: te,
  loginLink: se,
};

export const Register = (a) => {
  const [t, E] = d_1("");
  const [n, w] = d_1("");
  const [p, _] = d_1(false);
  const [k, m] = d_1(false);
  const [y, i] = d_1(null);
  const [h, c] = d_1(null);
  const [f, o] = d_1(null);
  const [A, g] = d_1("credentials");
  const { register, status, reset } = w();
  const u = status === "loading";

  const D = (l) => {
    l.preventDefault();
    i(null);
    c(null);
    o(null);

    if (!t.trim()) {
      c("Введите email");
      return;
    }

    if (!n.trim()) {
      o("Введите пароль");
      return;
    }
    if (n.length < 10) {
      o("Минимум 10 символов");
      return;
    }
    if (n.length > 128) {
      o("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(n)) {
      o("Только латиница, цифры и знаки пунктуации");
      return;
    }
    m(true);
  };

  const L = q_1(
    async (l) => {
      m(false);
      try {
        await register({ email: t, password: n, turnstileToken: l });
        g("verify");
      } catch (b) {
        if (x_1(b)) {
          switch (b.code) {
            case ae.ENTITY_ALREADY_EXISTS: {
              c("Этот email уже зарегистрирован");
              break;
            }
            case ae.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              c("Почта этого домена не поддерживается");
              break;
            }
            case ae.CAPTCHA_FAILED: {
              i("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ae.RATE_LIMIT_EXCEEDED: {
              i("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ae.VALIDATION_ERROR: {
              i("Проверьте введённые данные");
              break;
            }
            default: {
              i(b.message || "Ошибка регистрации");
            }
          }
        } else {
          i("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [t, n, register]
  );

  const T = q_1(() => {
    reset();
    g("credentials");
  }, [reset]);

  return u(k, {
    children: [
      u("div", {
        className: r.container,
        children: [
          u("div", { className: r.logo, children: u(af, {}) }),
          A === "credentials"
            ? u("form", {
                className: r.form,
                onSubmit: D,
                children: [
                  u("div", {
                    className: r.header,
                    children: [
                      u("h1", {
                        className: r.title,
                        children: "Создание аккаунта",
                      }),
                      u("p", {
                        className: r.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  y && u("div", { className: r.error, children: y }),
                  u("div", {
                    className: r.inputs,
                    children: [
                      u("div", {
                        className: r.inputGroup,
                        children: [
                          u("label", {
                            className: r.label,
                            children: "E-Mail",
                          }),
                          u("input", {
                            type: "email",
                            className: `${r.input} ${h ? r.inputError : ""}`,
                            value: t,
                            onInput: (l) => {
                              E(l.target.value);
                              c(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: u,
                          }),
                          h &&
                            u("span", {
                              className: r.fieldError,
                              children: h,
                            }),
                        ],
                      }),
                      u("div", {
                        className: r.inputGroup,
                        children: [
                          u("label", {
                            className: r.label,
                            children: "Пароль",
                          }),
                          u("div", {
                            className: r.inputWrapper,
                            children: [
                              u("input", {
                                type: p ? "text" : "password",
                                className: `${r.input} ${
                                  f ? r.inputError : ""
                                }`,
                                value: n,
                                onInput: (l) => {
                                  w(l.target.value);
                                  o(null);
                                },
                                placeholder: "Минимум 10 символов",
                                disabled: u,
                              }),
                              u("button", {
                                type: "button",
                                className: r.eyeButton,
                                onClick: () => _(!p),
                                children: p
                                  ? u(reset, { size: 20 })
                                  : u(a, { size: 20 }),
                              }),
                            ],
                          }),
                          f &&
                            u("span", {
                              className: r.fieldError,
                              children: f,
                            }),
                        ],
                      }),
                    ],
                  }),
                  u("p", {
                    className: r.terms,
                    children: [
                      "Продолжая, вы соглашаетесь с",
                      " ",
                      u("a", {
                        href: "/terms",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "условиями использования",
                      }),
                      " и",
                      " ",
                      u("a", {
                        href: "/privacy",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "политикой конфиденциальности",
                      }),
                    ],
                  }),
                  u(w_1, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: r.submitButton,
                    disabled: u,
                    children: u ? "Регистрация..." : "Продолжить",
                  }),
                  u("p", {
                    className: r.loginLink,
                    children: [
                      "Уже есть аккаунт? ",
                      u("a", { href: "/login", children: "Войти" }),
                    ],
                  }),
                ],
              })
            : u(k_1, { email: t, onBack: T }),
        ],
      }),
      u(status, { isOpen: k, onClose: () => m(false), onVerify: L }),
    ],
  });
};

export { Register as Register, Register as default };
