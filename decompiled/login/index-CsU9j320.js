import {
  d,
  w,
  C,
  w as w_1,
  I as x_1,
  ae as ae_1,
  u,
  af,
  B,
  k,
  ae_1_1 as z_1,
  C as C_1,
  ae_1 as ae_1_1,
} from "./index-ORJLmKGS.js";

import { c, C as C_2 } from "./index-DqoxCUqS.js";
import { C_1 as C_1_1 } from "./index-UGby2vlZ.js";
import { I, a } from "./IconEyeOff-DYJifF4N.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DDN0Rd-e.js",
      "assets/index-ORJLmKGS.js",
      "assets/index-BDqmq5tE.css",
      "assets/index-DqoxCUqS.js",
      "assets/index-Br4OoRuO.css",
      "assets/index-DL9W2FIi.css",
    ])
) => i.map((i) => d[i]);
(() => {
  try {
    const r =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    r.SENTRY_RELEASE = { id: "1.1.3" };
    const a = new r.Error().stack;

    if (a) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[a] = "13e794b4-93f4-467c-bfc2-671147865189";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-13e794b4-93f4-467c-bfc2-671147865189";
    }
  } catch {}
})();
const K = "iZ0y";
const Q = "fKU4";
const Z = "p3BL";
const H = "coG4";
const Y = "zRqI";
const $ = "AyIH";
const X = "AWgR";
const j = "SA4u";
const J = "fZeE";
const ee = "Zl75";
const se = "q06R";
const te = "bkfO";
const re = "KReh";
const ae = "quAz";
const oe = "ba3c";
const ne = "CKxR";
const le = "ov8F";
const ie = "q6LQ";
const ce = "smTk";
const de = "iqmF";
const ue = "MEoS";
const pe = "g9dR";

const s = {
  container: K,
  logo: Q,
  form: Z,
  header: H,
  error: Y,
  title: $,
  subtitle: X,
  inputs: j,
  inputGroup: J,
  label: ee,
  inputWrapper: se,
  input: te,
  inputError: re,
  fieldError: ae,
  eyeButton: oe,
  forgotPassword: ne,
  submitButton: le,
  signupLink: ie,
  row: ce,
  qrCol: de,
  qrLabel: ue,
  qrSlot: pe,
};

const me = z_1(() =>
  ae_1_1(
    () => import("./index-DDN0Rd-e.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5])
  ).then((r) => ({
    default: r.QrLogin,
  }))
);

export const Login = (r) => {
  const [a, h] = d("");
  const [i, C] = d("");
  const [u, A] = d(false);
  const [I, p] = d(false);
  const [b, t] = d(null);
  const [m, f] = d(null);
  const [_, E] = d("credentials");
  const { login, status, reset } = status();
  const L = C();
  const c = status === "loading";

  const v = (o) => {
    o.preventDefault();
    t(null);
    f(null);

    if (!a.trim()) {
      t("Введите email");
      return;
    }

    if (!i.trim()) {
      t("Введите пароль");
      return;
    }
    p(true);
  };

  const k = w_1(
    async (o, D) => {
      p(false);
      try {
        if (
          (await login({ email: a, password: i, ...c(o, D) })) !==
          "authenticated"
        ) {
          E("verify");
        }
      } catch (d) {
        if (x_1(d)) {
          switch (d.code) {
            case ae_1.ACCOUNT_INVALID_CREDENTIALS: {
              t("Неверный email или пароль");
              break;
            }
            case ae_1.ACCOUNT_DEACTIVATED: {
              t("Аккаунт деактивирован");
              break;
            }
            case ae_1.ACCOUNT_TEMPORARILY_LOCKED: {
              t("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case ae_1.CAPTCHA_FAILED: {
              t("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ae_1.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ae_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              f("Почта этого домена не поддерживается");
              break;
            }
            default: {
              t(d.message || "Ошибка входа");
            }
          }
        } else {
          t("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [a, i, login]
  );

  const T = w_1(() => {
    reset();
    E("credentials");
  }, [reset]);

  return u(C_1, {
    children: [
      u("div", {
        className: s.container,
        children: [
          u("div", { className: s.logo, children: u(af, {}) }),
          _ === "credentials"
            ? u("div", {
                className: s.row,
                children: [
                  u("form", {
                    className: s.form,
                    onSubmit: v,
                    children: [
                      u("div", {
                        className: s.header,
                        children: [
                          u("h1", { className: s.title, children: "Вход" }),
                          u("p", {
                            className: s.subtitle,
                            children: "Пожалуйста, введите ваши данные",
                          }),
                        ],
                      }),
                      b && u("div", { className: s.error, children: b }),
                      u("div", {
                        className: s.inputs,
                        children: [
                          u("div", {
                            className: s.inputGroup,
                            children: [
                              u("label", {
                                className: s.label,
                                children: "E-Mail",
                              }),
                              u("input", {
                                type: "email",
                                className: `${s.input} ${
                                  m ? s.inputError : ""
                                }`,
                                value: a,
                                onInput: (o) => {
                                  h(o.target.value);
                                  f(null);
                                },
                                placeholder: "ilya@gmail.com",
                                disabled: c,
                              }),
                              m &&
                                u("span", {
                                  className: s.fieldError,
                                  children: m,
                                }),
                            ],
                          }),
                          u("div", {
                            className: s.inputGroup,
                            children: [
                              u("label", {
                                className: s.label,
                                children: "Пароль",
                              }),
                              u("div", {
                                className: s.inputWrapper,
                                children: [
                                  u("input", {
                                    type: u ? "text" : "password",
                                    className: s.input,
                                    value: i,
                                    onInput: (o) => C(o.target.value),
                                    placeholder: "••••••••••••",
                                    disabled: c,
                                  }),
                                  u("button", {
                                    type: "button",
                                    className: s.eyeButton,
                                    onClick: () => A(!u),
                                    children: u
                                      ? u(I, { size: 20 })
                                      : u(a, { size: 20 }),
                                  }),
                                ],
                              }),
                              u("a", {
                                href: "/forgot-password",
                                className: s.forgotPassword,
                                children: "Забыли пароль?",
                              }),
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
                        children: c ? "Вход..." : "Войти",
                      }),
                      u("p", {
                        className: s.signupLink,
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
                  !L &&
                    u("aside", {
                      className: s.qrCol,
                      children: [
                        u("p", {
                          className: s.qrLabel,
                          children: "или QR-код",
                        }),
                        u("div", {
                          className: s.qrSlot,
                          children: u(k, {
                            fallback: null,
                            children: u(me, {
                              enabled: true,
                              caption: "Отсканируйте код в приложении ИТД",
                            }),
                          }),
                        }),
                      ],
                    }),
                ],
              })
            : u(C_1_1, { email: a, onBack: T }),
        ],
      }),
      u(C_2, {
        isOpen: I,
        onClose: () => p(false),
        onVerify: k,
        action: "login",
      }),
    ],
  });
};

export { Login as Login, Login as default };
