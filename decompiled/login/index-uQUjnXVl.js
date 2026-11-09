import {
  w,
  d,
  q as q_1,
  u as e_1,
  w as w_1,
  ae as ae_1,
  u,
  M,
  af as B_1,
  af,
  e_1 as e_1_1,
} from "./index-dnACTU3c.js";

import { M as M_1 } from "./index-uEKPzfFB.js";
import { M as M_2 } from "./index-CTpGM1z1.js";
import { w_1 as w_1_1 } from "./index-CiDq3Nyc.js";
import { O } from "./index-DlH86GaB.js";
import { I, a } from "./IconEyeOff-B7iRtqfA.js";
import "./PhoneAccess.module-BmvgF3ui.js";
(() => {
  try {
    const d =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    d.SENTRY_RELEASE = { id: "1.1.2" };
    const u = new d.Error().stack;

    if (u) {
      d._sentryDebugIds = d._sentryDebugIds || {};
      d._sentryDebugIds[u] = "a39ee521-2ff8-49b8-afba-648288363e68";
      d._sentryDebugIdIdentifier =
        "sentry-dbid-a39ee521-2ff8-49b8-afba-648288363e68";
    }
  } catch {}
})();
const F = "Gqfe";
const H = "QGCv";
const X = "nuvx";
const Z = "Ctgi";
const K = "kwj0";
const Y = "WjVH";
const q = "zl1l";
const Q = "AGNc";
const J = "o1ZT";
const ee = "RCfo";
const se = "Zhpd";

const l = {
  container: F,
  header: H,
  title: X,
  subtitle: Z,
  error: K,
  success: Y,
  backButton: q,
  expiredModal: Q,
  expiredTitle: J,
  expiredText: ee,
  expiredActions: se,
};

function te({ email, onBack }) {
  const { verifyOtp, resendOtp } = w();
  const [w, a] = email(null);
  const [k, b] = email(false);
  const [D, p] = email(false);
  const [y, f] = email(false);
  const [r, E] = email(false);

  const g = (t) =>
    w_1(t)
      ? t.code === ae_1.MISSING_FLOW_TOKEN ||
        t.code === ae_1.UNAUTHORIZED ||
        (t.code === ae_1.BAD_REQUEST &&
          t.message?.toLowerCase().includes("flow token"))
      : false;

  const L = q_1(
    async (t) => {
      a(null);
      b(true);
      try {
        const n = await verifyOtp(t);

        if (n === "authenticated") {
          if (w.getState().status === "needs_profile") {
            e_1("/onboarding");
          } else {
            e_1("/");
          }
        } else if (n === "password_reset") {
          e_1("/reset-password");
        }
      } catch (n) {
        if (g(n)) {
          f(true);
        } else if (w_1(n)) {
          switch (n.code) {
            case ae_1.OTP_INVALID: {
              a("Неверный код. Попробуйте снова");
              break;
            }
            case ae_1.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              a(n.message || "Ошибка проверки кода");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        b(false);
      }
    },
    [verifyOtp]
  );

  const T = q_1(async () => {
    a(null);
    p(false);
    try {
      await resendOtp();
      p(true);

      setTimeout(() => p(false), 3000 /* 3e3 */);
    } catch (t) {
      if (w_1(t)) {
        if (t.code === ae_1.RATE_LIMIT_EXCEEDED) {
          a("Слишком много запросов. Попробуйте позже");
        } else {
          a(t.message || "Не удалось отправить код");
        }
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [resendOtp]);

  const I = q_1(async () => {
    E(true);
    try {
      await resendOtp();
      f(false);
      p(true);

      setTimeout(() => p(false), 3000 /* 3e3 */);
    } catch (t) {
      f(false);

      if (w_1(t)) {
        a(t.message || "Не удалось отправить код");
      } else {
        a("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      E(false);
    }
  }, [resendOtp]);

  const A = q_1(() => {
    f(false);
    onBack?.();
  }, [onBack]);

  return onBack("div", {
    className: l.container,
    children: [
      onBack("div", {
        className: l.header,
        children: [
          onBack("h1", {
            className: l.title,
            children: "Подтверждение действия",
          }),
          onBack("p", {
            className: l.subtitle,
            children: [
              "Мы отправили шестизначный код на почту ",
              email,
              ", чтобы убедиться, что вы – настоящий её владелец.",
            ],
          }),
        ],
      }),
      w && onBack("div", { className: l.error, children: w }),
      D &&
        onBack("div", {
          className: l.success,
          children: "Код отправлен повторно",
        }),
      onBack(O, { onSubmit: L, onResend: T, disabled: k }),
      onBack &&
        onBack("button", {
          type: "button",
          className: l.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      y &&
        onBack(M, {
          onClose: A,
          showHeader: false,
          children: onBack("div", {
            className: l.expiredModal,
            children: [
              onBack("h2", {
                className: l.expiredTitle,
                children: "Время истекло",
              }),
              onBack("p", {
                className: l.expiredText,
                children:
                  "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?",
              }),
              onBack("div", {
                className: l.expiredActions,
                children: [
                  onBack(B_1, {
                    variant: "secondary",
                    onClick: A,
                    disabled: r,
                    children: "Нет, закрыть",
                  }),
                  onBack(B_1, {
                    onClick: I,
                    disabled: r,
                    children: "Да, отправить",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const ae = "DSDG";
const re = "u19a";
const ne = "JTeX";
const ie = "WAia";
const oe = "NK8L";
const le = "O9CN";
const ce = "rL5l";
const de = "yCju";
const ue = "ADdb";
const pe = "wSUs";
const fe = "HCt5";
const he = "m2sj";
const me = "whjG";
const be = "NRgt";
const Ee = "oT3b";
const Ne = "mXfz";
const ye = "YyZc";
const ge = "oy8G";

const s = {
  container: ae,
  logo: re,
  form: ne,
  header: ie,
  error: oe,
  title: le,
  subtitle: ce,
  inputs: de,
  inputGroup: ue,
  label: pe,
  inputWrapper: fe,
  input: he,
  inputError: me,
  fieldError: be,
  eyeButton: Ee,
  forgotPassword: Ne,
  submitButton: ye,
  signupLink: ge,
};

export const Login = (d) => {
  const [u, m] = d(false);
  const [c, w] = d("");
  const [a, k] = d("");
  const [b, D] = d(false);
  const [p, y] = d(false);
  const [f, r] = d(null);
  const [E, g] = d(null);
  const [L, T] = d("credentials");
  const { login, status, reset } = w();
  const n = status === "loading";

  const O = (h) => {
    h.preventDefault();
    r(null);
    g(null);

    if (!c.trim()) {
      r("Введите email");
      return;
    }

    if (!a.trim()) {
      r("Введите пароль");
      return;
    }
    y(true);
  };

  const M = q_1(
    async (h) => {
      y(false);
      try {
        if (
          (await login({ email: c, password: a, captcha: h })) !==
          "authenticated"
        ) {
          T("verify");
        }
      } catch (v) {
        if (w_1(v)) {
          switch (v.code) {
            case ae_1.ACCOUNT_INVALID_CREDENTIALS: {
              r("Неверный email или пароль");
              break;
            }
            case ae_1.ACCOUNT_DEACTIVATED: {
              r("Аккаунт деактивирован");
              break;
            }
            case ae_1.ACCOUNT_TEMPORARILY_LOCKED: {
              r("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case ae_1.CAPTCHA_FAILED: {
              r("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ae_1.RATE_LIMIT_EXCEEDED: {
              r("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ae_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              g("Почта этого домена не поддерживается");
              break;
            }
            default: {
              r(v.message || "Ошибка входа");
            }
          }
        } else {
          r("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [c, a, login]
  );

  const R = q_1(() => {
    reset();
    T("credentials");
  }, [reset]);

  return u
    ? u(M_1, { intent: "sign-in", onBack: () => m(false) })
    : u(e_1_1, {
        children: [
          u("div", {
            className: s.container,
            children: [
              u("div", { className: s.logo, children: u(af, {}) }),
              L === "credentials"
                ? u("form", {
                    className: s.form,
                    onSubmit: O,
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
                      f && u("div", { className: s.error, children: f }),
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
                                  E ? s.inputError : ""
                                }`,
                                value: c,
                                onInput: (h) => {
                                  w(h.target.value);
                                  g(null);
                                },
                                placeholder: "ilya@gmail.com",
                                disabled: n,
                              }),
                              E &&
                                u("span", {
                                  className: s.fieldError,
                                  children: E,
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
                                    type: b ? "text" : "password",
                                    className: s.input,
                                    value: a,
                                    onInput: (h) => k(h.target.value),
                                    placeholder: "••••••••••••",
                                    disabled: n,
                                  }),
                                  u("button", {
                                    type: "button",
                                    className: s.eyeButton,
                                    onClick: () => D(!b),
                                    children: b
                                      ? u(login, { size: 20 })
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
                      u(B_1, {
                        type: "submit",
                        variant: "primary",
                        size: "lg",
                        fullWidth: true,
                        className: s.submitButton,
                        disabled: n,
                        children: n ? "Вход..." : "Войти",
                      }),
                      u(B_1, {
                        variant: "secondary",
                        fullWidth: true,
                        size: "lg",
                        style: { marginTop: 12 },
                        onClick: () => m(true),
                        disabled: n,
                        children: "Войти по номеру телефона",
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
                      u(M_2, {}),
                    ],
                  })
                : u(te, { email: c, onBack: R }),
            ],
          }),
          u(w_1_1, { isOpen: p, onClose: () => y(false), onVerify: M }),
        ],
      });
};

export { Login as Login, Login as default };
