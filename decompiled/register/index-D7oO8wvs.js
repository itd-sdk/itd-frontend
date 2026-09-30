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
} from "./index-BuVp7kGl.js";
import { C } from "./index-9BixCiVZ.js";
import { K_1_1 as K_1_1_1 } from "./index-BFkLWxDC.js";
import { I, a } from "./IconEyeOff-BHy0L5gs.js";
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
      a._sentryDebugIds[t] = "6a87b169-ab17-41ed-9d56-499a91b56ec8";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-6a87b169-ab17-41ed-9d56-499a91b56ec8";
    }
  } catch {}
})();
const z = "fVMN";
const U = "cVGD";
const Y = "mFIC";
const $ = "nhfI";
const x = "U6iH";
const H = "a5k5";
const q = "o842";
const F = "UQPm";
const X = "ADZu";
const K = "ztBX";
const Q = "YmKv";
const Z = "Monq";
const j = "C9kG";
const J = "NWql";
const ee = "CyIU";
const re = "H1vH";
const te = "REuU";
const se = "Bnzw";

const r = {
  container: z,
  logo: U,
  form: Y,
  header: $,
  error: x,
  title: H,
  subtitle: q,
  inputs: F,
  inputGroup: X,
  inputWrapper: K,
  input: Q,
  label: Z,
  inputError: j,
  fieldError: J,
  eyeButton: ee,
  terms: re,
  submitButton: te,
  loginLink: se,
};

export const Register = (a) => {
  const [t, E] = d_1("");
  const [n, w] = d_1("");
  const [p, A] = d_1(false);
  const [_, m] = d_1(false);
  const [y, i] = d_1(null);
  const [h, c] = d_1(null);
  const [f, o] = d_1(null);
  const [k, N] = d_1("credentials");
  const { register, status, reset } = Y_1();
  const u = status === "loading";

  const B = (l) => {
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
        N("verify");
      } catch (b) {
        if (K_1(b)) {
          switch (b.code) {
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

  const L = q_1(() => {
    reset();
    N("credentials");
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
                onSubmit: B,
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
                                onClick: () => A(!p),
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
            : u(K_1_1_1, { email: t, onBack: L }),
        ],
      }),
      u(status, { isOpen: _, onClose: () => m(false), onVerify: D }),
    ],
  });
};

export { Register as Register, Register as default };
