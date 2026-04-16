import { d, a8 as c_1, q as q_1, i, a8, a, B } from "./index-B0np_7Xy.js";
import { C } from "./index-DhZR2sBI.js";
import { I as V_1 } from "./index-DJbn-CQN.js";
import { I } from "./IconBrand-_ck_iX4k.js";
import { I as I_1, a as a_1 } from "./IconEyeOff-Bueeui0k.js";
const P = "HAwgnEEf";
const W = "_520SIeft";
const x = "aO9i5DDs";
const G = "m-XHVEdA";
const J = "EVVlDXCO";
const $ = "uk3dJE8m";
const z = "Qn2m-esi";
const X = "PRyD6ovh";
const j = "JRZJnqe4";
const q = "-xNqEKaQ";
const Q = "uezMG7CZ";
const Z = "BbAvZc1-";
const F = "HQjTHL0b";
const Y = "jwmo1tBu";
const K = "jpW4bCwR";
const U = "_9T3LHe9E";
const ee = "NH9H9-Ir";
const re = "eibNJeO1";
const te = "NL2n67AJ";

const r = {
  page: P,
  container: W,
  logo: x,
  form: G,
  header: J,
  error: $,
  title: z,
  subtitle: X,
  inputs: j,
  inputGroup: q,
  inputWrapper: Q,
  input: Z,
  label: F,
  inputError: Y,
  fieldError: K,
  eyeButton: U,
  terms: ee,
  submitButton: re,
  loginLink: te,
};

export const Register = (se) => {
  const [i, v] = d("");
  const [s, A] = d("");
  const [p, I] = d(false);
  const [C, d] = d(false);
  const [E, n] = d(null);
  const [m, o] = d(null);
  const [h, l] = d(null);
  const [w, b] = d("credentials");
  const { register: N, status: k, reset: g } = c_1();
  const u = k === "loading";

  const _ = (a) => {
    a.preventDefault();
    n(null);
    o(null);
    l(null);

    if (!i.trim()) {
      o("Введите email");
      return;
    }

    if (!s.trim()) {
      l("Введите пароль");
      return;
    }
    if (s.length < 10) {
      l("Минимум 10 символов");
      return;
    }
    if (s.length > 128) {
      l("Максимум 128 символов");
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(s)) {
      l("Только латиница, цифры и знаки пунктуации");
      return;
    }
    d(true);
  };

  const L = q_1(
    async (a) => {
      d(false);
      try {
        await N({ email: i, password: s, turnstileToken: a });
        b("verify");
      } catch (f) {
        if (i(f)) {
          switch (f.code) {
            case a8.ENTITY_ALREADY_EXISTS: {
              o("Этот email уже зарегистрирован");
              break;
            }
            case a8.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              o("Этот email домен не разрешён");
              break;
            }
            case a8.CAPTCHA_FAILED: {
              n("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case a8.RATE_LIMIT_EXCEEDED: {
              n("Слишком много попыток. Попробуйте позже");
              break;
            }
            case a8.VALIDATION_ERROR: {
              n("Проверьте введённые данные");
              break;
            }
            default: {
              n(f.message || "Ошибка регистрации");
            }
          }
        } else {
          n("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [i, s, N]
  );

  const B = q_1(() => {
    g();
    b("credentials");
  }, [g]);

  return a("div", {
    className: r.page,
    children: [
      a("div", {
        className: r.container,
        children: [
          a("div", { className: r.logo, children: a(I, {}) }),
          w === "credentials"
            ? a("form", {
                className: r.form,
                onSubmit: _,
                children: [
                  a("div", {
                    className: r.header,
                    children: [
                      a("h1", {
                        className: r.title,
                        children: "Создание аккаунта",
                      }),
                      a("p", {
                        className: r.subtitle,
                        children: "Пожалуйста, введите ваши данные",
                      }),
                    ],
                  }),
                  E && a("div", { className: r.error, children: E }),
                  a("div", {
                    className: r.inputs,
                    children: [
                      a("div", {
                        className: r.inputGroup,
                        children: [
                          a("label", {
                            className: r.label,
                            children: "E-Mail",
                          }),
                          a("input", {
                            type: "email",
                            className: `${r.input} ${m ? r.inputError : ""}`,
                            value: i,
                            onInput: (a) => {
                              v(a.target.value);
                              o(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: u,
                          }),
                          m &&
                            a("span", {
                              className: r.fieldError,
                              children: m,
                            }),
                        ],
                      }),
                      a("div", {
                        className: r.inputGroup,
                        children: [
                          a("label", {
                            className: r.label,
                            children: "Пароль",
                          }),
                          a("div", {
                            className: r.inputWrapper,
                            children: [
                              a("input", {
                                type: p ? "text" : "password",
                                className: `${r.input} ${
                                  h ? r.inputError : ""
                                }`,
                                value: s,
                                onInput: (a) => {
                                  A(a.target.value);
                                  l(null);
                                },
                                placeholder: "Минимум 10 символов",
                                disabled: u,
                              }),
                              a("button", {
                                type: "button",
                                className: r.eyeButton,
                                onClick: () => I(!p),
                                children: p
                                  ? a(I_1, { size: 20 })
                                  : a(a_1, { size: 20 }),
                              }),
                            ],
                          }),
                          h &&
                            a("span", {
                              className: r.fieldError,
                              children: h,
                            }),
                        ],
                      }),
                    ],
                  }),
                  a("p", {
                    className: r.terms,
                    children: [
                      "Продолжая, вы соглашаетесь с",
                      " ",
                      a("a", {
                        href: "/terms",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "условиями использования",
                      }),
                      " и",
                      " ",
                      a("a", {
                        href: "/privacy",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "политикой конфиденциальности",
                      }),
                    ],
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: r.submitButton,
                    disabled: u,
                    children: u ? "Регистрация..." : "Продолжить",
                  }),
                  a("p", {
                    className: r.loginLink,
                    children: [
                      "Уже есть аккаунт? ",
                      a("a", { href: "/login", children: "Войти" }),
                    ],
                  }),
                ],
              })
            : a(V_1, { email: i, onBack: B }),
        ],
      }),
      a(C, { isOpen: C, onClose: () => d(false), onVerify: L }),
    ],
  });
};

export { Register as Register, Register as default };
