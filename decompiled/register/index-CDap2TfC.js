import {
  ae_1 as d_1,
  w,
  q as q_1,
  w_1 as x_1,
  ae as ae_1,
  u,
  af,
  B,
  w as w_1,
} from "./index-ORJLmKGS.js";
import { c, C } from "./index-DqoxCUqS.js";
import { C as C_1 } from "./index-UGby2vlZ.js";
import { q_1 as q_1_1, d_1 as d_1_1 } from "./IconEyeOff-DYJifF4N.js";
(() => {
  try {
    const s =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    s.SENTRY_RELEASE = { id: "1.1.3" };
    const t = new s.Error().stack;

    if (t) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[t] = "a609a32a-d8f5-4d62-a5d9-1c5c64d4fc3c";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-a609a32a-d8f5-4d62-a5d9-1c5c64d4fc3c";
    }
  } catch {}
})();
const Y = "CeYT";
const $ = "wzCQ";
const X = "UYmp";
const Q = "bAgK";
const j = "vDMh";
const q = "fzjh";
const F = "OX0C";
const H = "VIcz";
const U = "t5x5";
const K = "QkDw";
const J = "Nfjy";
const Z = "ayqz";
const ee = "XeGR";
const re = "Ifx4";
const te = "aWSW";
const ae = "GdHE";
const se = "wTB5";
const ne = "QEW6";

const r = {
  container: Y,
  logo: $,
  form: X,
  header: Q,
  error: j,
  title: q,
  subtitle: F,
  inputs: H,
  inputGroup: U,
  inputWrapper: K,
  input: J,
  label: Z,
  inputError: ee,
  fieldError: re,
  eyeButton: te,
  terms: ae,
  submitButton: se,
  loginLink: ne,
};

export const Register = (s) => {
  const [t, b] = d_1("");
  const [n, v] = d_1("");
  const [p, _] = d_1(false);
  const [A, f] = d_1(false);
  const [y, i] = d_1(null);
  const [m, c] = d_1(null);
  const [h, o] = d_1(null);
  const [C, g] = d_1("credentials");
  const { register, status, reset } = reset();
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
    f(true);
  };

  const T = q_1(
    async (l, L) => {
      f(false);
      try {
        await register({ email: t, password: n, ...c(l, L) });
        g("verify");
      } catch (E) {
        if (x_1(E)) {
          switch (E.code) {
            case ae_1.ENTITY_ALREADY_EXISTS: {
              c("Этот email уже зарегистрирован");
              break;
            }
            case ae_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              c("Почта этого домена не поддерживается");
              break;
            }
            case ae_1.CAPTCHA_FAILED: {
              i("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ae_1.RATE_LIMIT_EXCEEDED: {
              i("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ae_1.VALIDATION_ERROR: {
              i("Проверьте введённые данные");
              break;
            }
            default: {
              i(E.message || "Ошибка регистрации");
            }
          }
        } else {
          i("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [t, n, register]
  );

  const B = q_1(() => {
    reset();
    g("credentials");
  }, [reset]);

  return u(w_1, {
    children: [
      u("div", {
        className: r.container,
        children: [
          u("div", { className: r.logo, children: u(af, {}) }),
          C === "credentials"
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
                            className: `${r.input} ${m ? r.inputError : ""}`,
                            value: t,
                            onInput: (l) => {
                              b(l.target.value);
                              c(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: u,
                          }),
                          m &&
                            u("span", {
                              className: r.fieldError,
                              children: m,
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
                                  h ? r.inputError : ""
                                }`,
                                value: n,
                                onInput: (l) => {
                                  v(l.target.value);
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
                                  ? u(q_1_1, { size: 20 })
                                  : u(d_1_1, { size: 20 }),
                              }),
                            ],
                          }),
                          h &&
                            u("span", {
                              className: r.fieldError,
                              children: h,
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
                  u(B, {
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
            : u(C_1, { email: t, onBack: B }),
        ],
      }),
      u(C, {
        isOpen: A,
        onClose: () => f(false),
        onVerify: T,
        action: "register",
      }),
    ],
  });
};

export { Register as Register, Register as default };
