import { d, c, q as q_1, i, a8, a, B } from "./index-B0np_7Xy.js";
import { C } from "./index-DhZR2sBI.js";
import { V as V_1 } from "./index-DJbn-CQN.js";
import { I } from "./IconBrand-_ck_iX4k.js";
import { I as I_1, a as a_1 } from "./IconEyeOff-Bueeui0k.js";
const W = "t5oO8-4Z";
const V = "_08esxaRX";
const U = "r8lsLZcX";
const Z = "a-AltNnW";
const F = "sLmgZn7O";
const G = "gwOnNlDG";
const M = "I0E2SIQH";
const x = "h1muhFRY";
const z = "K6LUzmSd";
const q = "F-eZP3Z3";
const H = "i8qYWkc1";
const Y = "CxUaWUwc";
const X = "snRcI1jZ";
const j = "qb1vvhxv";
const K = "WFEAG6J2";
const Q = "eiB-iHqV";
const $ = "jyNy1FoY";
const J = "Iy7f3zBR";
const ee = "ZQrfRHNk";

const s = {
  page: W,
  container: V,
  logo: U,
  form: Z,
  header: F,
  error: G,
  title: M,
  subtitle: x,
  inputs: z,
  inputGroup: q,
  label: H,
  inputWrapper: Y,
  input: X,
  inputError: j,
  fieldError: K,
  eyeButton: Q,
  forgotPassword: $,
  submitButton: J,
  signupLink: ee,
};

export const Login = (se) => {
  const [o, g] = d("");
  const [i, C] = d("");
  const [u, y] = d(false);
  const [A, d] = d(false);
  const [h, a] = d(null);
  const [p, m] = d(null);
  const [I, f] = d("credentials");
  const { login: N, status: v, reset: E } = c();
  const l = v === "loading";

  const w = (t) => {
    t.preventDefault();
    a(null);
    m(null);

    if (!o.trim()) {
      a("Введите email");
      return;
    }

    if (!i.trim()) {
      a("Введите пароль");
      return;
    }
    d(true);
  };

  const L = q_1(
    async (t) => {
      d(false);
      try {
        if (
          (await N({ email: o, password: i, turnstileToken: t })) !==
          "authenticated"
        ) {
          f("verify");
        }
      } catch (c) {
        if (i(c)) {
          switch (c.code) {
            case a8.ACCOUNT_INVALID_CREDENTIALS: {
              a("Неверный email или пароль");
              break;
            }
            case a8.ACCOUNT_DEACTIVATED: {
              a("Аккаунт деактивирован");
              break;
            }
            case a8.ACCOUNT_TEMPORARILY_LOCKED: {
              a("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case a8.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case a8.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case a8.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              m("Этот email домен не разрешён");
              break;
            }
            default: {
              a(c.message || "Ошибка входа");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [o, i, N]
  );

  const k = q_1(() => {
    E();
    f("credentials");
  }, [E]);

  return a("div", {
    className: s.page,
    children: [
      a("div", {
        className: s.container,
        children: [
          a("div", { className: s.logo, children: a(I, {}) }),
          I === "credentials"
            ? a("form", {
                className: s.form,
                onSubmit: w,
                children: [
                  a("div", {
                    className: s.header,
                    children: [
                      a("h1", { className: s.title, children: "Вход" }),
                      a("p", {
                        className: s.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  h && a("div", { className: s.error, children: h }),
                  a("div", {
                    className: s.inputs,
                    children: [
                      a("div", {
                        className: s.inputGroup,
                        children: [
                          a("label", {
                            className: s.label,
                            children: "E-Mail",
                          }),
                          a("input", {
                            type: "email",
                            className: `${s.input} ${p ? s.inputError : ""}`,
                            value: o,
                            onInput: (t) => {
                              g(t.target.value);
                              m(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: l,
                          }),
                          p &&
                            a("span", {
                              className: s.fieldError,
                              children: p,
                            }),
                        ],
                      }),
                      a("div", {
                        className: s.inputGroup,
                        children: [
                          a("label", {
                            className: s.label,
                            children: "Пароль",
                          }),
                          a("div", {
                            className: s.inputWrapper,
                            children: [
                              a("input", {
                                type: u ? "text" : "password",
                                className: s.input,
                                value: i,
                                onInput: (t) => C(t.target.value),
                                placeholder: "••••••••••••",
                                disabled: l,
                              }),
                              a("button", {
                                type: "button",
                                className: s.eyeButton,
                                onClick: () => y(!u),
                                children: u
                                  ? a(I_1, { size: 20 })
                                  : a(a_1, { size: 20 }),
                              }),
                            ],
                          }),
                          a("a", {
                            href: "/forgot-password",
                            className: s.forgotPassword,
                            children: "Забыли пароль?",
                          }),
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
                    disabled: l,
                    children: l ? "Вход..." : "Войти",
                  }),
                  a("p", {
                    className: s.signupLink,
                    children: [
                      "Еще нет аккаунта? ",
                      a("a", {
                        href: "/register",
                        children: "Создать аккаунт",
                      }),
                    ],
                  }),
                ],
              })
            : a(V_1, { email: o, onBack: k }),
        ],
      }),
      a(C, { isOpen: A, onClose: () => d(false), onVerify: L }),
    ],
  });
};

export { Login as Login, Login as default };
