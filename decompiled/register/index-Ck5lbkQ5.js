import {
  aA as d_1,
  Y as Y_1,
  q as q_1,
  K as K_1,
  aA,
  u,
  aB,
  B,
  K_1 as K_1_1,
} from "./index-D4QRo1-7.js";
import { C } from "./index-CfgNx4Vk.js";
import { q_1_1 as V_1 } from "./index-CV1poIIC.js";
import { q_1 as q_1_1, a } from "./IconEyeOff-mN_xIYSl.js";
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
      a._sentryDebugIds[t] = "d7c86a66-c651-4f97-97e5-f055662eea21";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-d7c86a66-c651-4f97-97e5-f055662eea21";
    }
  } catch {}
})();
const W = "tbjM";
const Y = "prUk";
const $ = "DRoO";
const x = "LZPl";
const G = "EeKZ";
const U = "wnAa";
const X = "kowD";
const j = "Eeaz";
const K = "ecyK";
const q = "FXb2";
const H = "LXiO";
const Z = "fMFS";
const Q = "YqOU";
const J = "FHQz";
const ee = "tBjE";
const re = "BEaz";
const te = "j3ge";
const se = "peUc";

const r = {
  container: W,
  logo: Y,
  form: $,
  header: x,
  error: G,
  title: U,
  subtitle: X,
  inputs: j,
  inputGroup: K,
  inputWrapper: q,
  input: H,
  label: Z,
  inputError: Q,
  fieldError: J,
  eyeButton: ee,
  terms: re,
  submitButton: te,
  loginLink: se,
};

export const Register = (a) => {
  const [t, b] = d_1("");
  const [n, v] = d_1("");
  const [p, A] = d_1(false);
  const [_, m] = d_1(false);
  const [y, i] = d_1(null);
  const [f, c] = d_1(null);
  const [h, o] = d_1(null);
  const [k, g] = d_1("credentials");
  const { register, status, reset } = Y_1();
  const u = status === "loading";

  const C = (l) => {
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

  const D = q_1(
    async (l) => {
      m(false);
      try {
        await register({ email: t, password: n, turnstileToken: l });
        g("verify");
      } catch (E) {
        if (K_1(E)) {
          switch (E.code) {
            case aA.ENTITY_ALREADY_EXISTS: {
              c("Этот email уже зарегистрирован");
              break;
            }
            case aA.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              c("Почта этого домена не поддерживается");
              break;
            }
            case aA.CAPTCHA_FAILED: {
              i("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case aA.RATE_LIMIT_EXCEEDED: {
              i("Слишком много попыток. Попробуйте позже");
              break;
            }
            case aA.VALIDATION_ERROR: {
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

  const L = q_1(() => {
    reset();
    g("credentials");
  }, [reset]);

  return u(K_1_1, {
    children: [
      u("div", {
        className: r.container,
        children: [
          u("div", { className: r.logo, children: u(aB, {}) }),
          k === "credentials"
            ? u("form", {
                className: r.form,
                onSubmit: C,
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
                            className: `${r.input} ${f ? r.inputError : ""}`,
                            value: t,
                            onInput: (l) => {
                              b(l.target.value);
                              c(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: u,
                          }),
                          f &&
                            u("span", {
                              className: r.fieldError,
                              children: f,
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
                                onClick: () => A(!p),
                                children: p
                                  ? u(q_1_1, { size: 20 })
                                  : u(a, { size: 20 }),
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
                  u(status, {
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
            : u(V_1, { email: t, onBack: L }),
        ],
      }),
      u(C, { isOpen: _, onClose: () => m(false), onVerify: D }),
    ],
  });
};

export { Register as Register, Register as default };
