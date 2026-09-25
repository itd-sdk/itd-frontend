import {
  d,
  w,
  C,
  C_1 as q_1,
  x as x_1,
  ae as ae_1,
  u,
  af,
  C as C_1,
  k,
  C_2 as z_1,
  w as w_1,
  ae_1 as ae_1_1,
} from "./index-gHxZkwFX.js";

import { c, C as C_2 } from "./index-DNhfAHWL.js";
import { z_1 as z_1_1 } from "./index-BzkQMQKD.js";
import { I, a as a_1 } from "./IconEyeOff-Cv1a3BJb.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-C5oS0y8X.js",
      "assets/index-gHxZkwFX.js",
      "assets/index-rMCJzo5v.css",
      "assets/index-DNhfAHWL.js",
      "assets/index-CAeZ2CWa.css",
      "assets/index-GljZp3-W.css",
    ])
) => i.map((i) => d[i]);
(() => {
  try {
    const t =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "1.1.4" };
    const r = new t.Error().stack;

    if (r) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[r] = "a1ea8a93-fa12-423a-9532-036d6dfad978";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-a1ea8a93-fa12-423a-9532-036d6dfad978";
    }
  } catch {}
})();
const x = "QKSs";
const F = "rHcK";
const H = "Mb3q";
const Y = "ZUKP";
const Z = "pf1h";
const $ = "nIQL";
const J = "eBpV";
const X = "C4ew";
const j = "gWNI";
const ee = "OJgt";
const ae = "UTaA";
const se = "bIuW";
const te = "T17M";
const re = "zazo";
const ne = "v6Sp";
const oe = "zfEV";
const le = "CLdW";
const ie = "cFDI";
const ce = "UPcD";
const de = "Ur7H";
const ue = "GCZG";
const pe = "PBfs";

const a = {
  container: x,
  logo: F,
  form: H,
  header: Y,
  error: Z,
  title: $,
  subtitle: J,
  inputs: X,
  inputGroup: j,
  label: ee,
  inputWrapper: ae,
  input: se,
  inputError: te,
  fieldError: re,
  eyeButton: ne,
  forgotPassword: oe,
  submitButton: le,
  signupLink: ie,
  row: ce,
  qrCol: de,
  qrLabel: ue,
  qrSlot: pe,
};

const fe = z_1(() =>
  ae_1_1(
    () => import("./index-C5oS0y8X.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5])
  ).then((t) => ({
    default: t.QrLogin,
  }))
);

export const Login = (t) => {
  const [r, h] = d("");
  const [i, C] = d("");
  const [u, I] = d(false);
  const [w, p] = d(false);
  const [b, s] = d(null);
  const [f, m] = d(null);
  const [_, E] = d("credentials");
  const { login, status, reset } = w();
  const v = C();
  const c = status === "loading";

  const A = (n) => {
    n.preventDefault();
    s(null);
    m(null);

    if (!r.trim()) {
      s("Введите email");
      return;
    }

    if (!i.trim()) {
      s("Введите пароль");
      return;
    }
    p(true);
  };

  const D = q_1(
    async (n, k) => {
      p(false);
      try {
        if (
          (await login({ email: r, password: i, ...c(n, k) })) !==
          "authenticated"
        ) {
          E("verify");
        }
      } catch (d) {
        if (x_1(d)) {
          switch (d.code) {
            case ae_1.ACCOUNT_INVALID_CREDENTIALS: {
              s("Неверный email или пароль");
              break;
            }
            case ae_1.ACCOUNT_DEACTIVATED: {
              s("Аккаунт деактивирован");
              break;
            }
            case ae_1.ACCOUNT_TEMPORARILY_LOCKED: {
              s("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case ae_1.CAPTCHA_FAILED: {
              s("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ae_1.RATE_LIMIT_EXCEEDED: {
              s("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ae_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              m("Почта этого домена не поддерживается");
              break;
            }
            default: {
              s(d.message || "Ошибка входа");
            }
          }
        } else {
          s("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [r, i, login]
  );

  const T = q_1(() => {
    reset();
    E("credentials");
  }, [reset]);

  return u(w_1, {
    children: [
      u("div", {
        className: a.container,
        children: [
          u("div", { className: a.logo, children: u(af, {}) }),
          _ === "credentials"
            ? u("div", {
                className: a.row,
                children: [
                  u("form", {
                    className: a.form,
                    onSubmit: A,
                    children: [
                      u("div", {
                        className: a.header,
                        children: [
                          u("h1", { className: a.title, children: "Вход" }),
                          u("p", {
                            className: a.subtitle,
                            children: "Пожалуйста, введите ваши данные",
                          }),
                        ],
                      }),
                      b && u("div", { className: a.error, children: b }),
                      u("div", {
                        className: a.inputs,
                        children: [
                          u("div", {
                            className: a.inputGroup,
                            children: [
                              u("label", {
                                className: a.label,
                                children: "E-Mail",
                              }),
                              u("input", {
                                type: "email",
                                className: `${a.input} ${
                                  f ? a.inputError : ""
                                }`,
                                value: r,
                                onInput: (n) => {
                                  h(n.target.value);
                                  m(null);
                                },
                                placeholder: "ilya@gmail.com",
                                disabled: c,
                              }),
                              f &&
                                u("span", {
                                  className: a.fieldError,
                                  children: f,
                                }),
                            ],
                          }),
                          u("div", {
                            className: a.inputGroup,
                            children: [
                              u("label", {
                                className: a.label,
                                children: "Пароль",
                              }),
                              u("div", {
                                className: a.inputWrapper,
                                children: [
                                  u("input", {
                                    type: u ? "text" : "password",
                                    className: a.input,
                                    value: i,
                                    onInput: (n) => C(n.target.value),
                                    placeholder: "••••••••••••",
                                    disabled: c,
                                  }),
                                  u("button", {
                                    type: "button",
                                    className: a.eyeButton,
                                    onClick: () => I(!u),
                                    children: u
                                      ? u(I, { size: 20 })
                                      : u(a_1, { size: 20 }),
                                  }),
                                ],
                              }),
                              u("a", {
                                href: "/forgot-password",
                                className: a.forgotPassword,
                                children: "Забыли пароль?",
                              }),
                            ],
                          }),
                        ],
                      }),
                      u(C_1, {
                        type: "submit",
                        variant: "primary",
                        size: "lg",
                        fullWidth: true,
                        className: a.submitButton,
                        disabled: c,
                        children: c ? "Вход..." : "Войти",
                      }),
                      u("p", {
                        className: a.signupLink,
                        children: [
                          "Еще нет аккаунта? ",
                          u("a", {
                            href: "/register",
                            children: "Создать аккаунт",
                          }),
                        ],
                      }),
                    ],
                  }),
                  !v &&
                    u("aside", {
                      className: a.qrCol,
                      children: [
                        u("p", {
                          className: a.qrLabel,
                          children: "или QR-код",
                        }),
                        u("div", {
                          className: a.qrSlot,
                          children: u(k, {
                            fallback: null,
                            children: u(fe, {
                              enabled: true,
                              caption: "Отсканируйте код в приложении ИТД",
                            }),
                          }),
                        }),
                      ],
                    }),
                ],
              })
            : u(z_1_1, { email: r, onBack: T }),
        ],
      }),
      u(C_2, {
        isOpen: w,
        onClose: () => p(false),
        onVerify: D,
        action: "login",
      }),
    ],
  });
};

export { Login as Login, Login as default };
