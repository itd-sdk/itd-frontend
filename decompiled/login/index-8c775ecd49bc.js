import {
  K as K_1,
  d,
  q as q_1,
  I_1 as $_1,
  an,
  ao,
  u,
  aq,
  aq as aq_1,
  I,
  q_1 as q_1_1,
  K_1 as K_1_1,
} from "./index-4a2211963806.js";

import { I as I_1 } from "./index-1867392ca4a4.js";
import { C } from "./index-ade4da9b27ee.js";
import { O } from "./index-79fd91455527.js";
import { I as I_2, a } from "./IconEyeOff-0f95a2f72b3a.js";
const X = "IeWA";
const q = "C1fr";
const H = "cXvs";
const K = "Zttw";
const Z = "sW4g";
const j = "Pnjz";
const Y = "gHad";
const J = "FXR6";
const Q = "EqqY";
const ee = "TjZF";
const se = "rkKf";

const o = {
  container: X,
  header: q,
  title: H,
  subtitle: K,
  error: Z,
  success: j,
  backButton: Y,
  expiredModal: J,
  expiredTitle: Q,
  expiredText: ee,
  expiredActions: se,
};

function te({ email, onBack, onLegalError }) {
  const { verifyOtp, resendOtp } = K_1();
  const [u, r] = verifyOtp(null);
  const [y, C] = verifyOtp(false);
  const [L, c] = verifyOtp(false);
  const [T, a] = verifyOtp(false);
  const [E, b] = verifyOtp(false);

  const _ = (t) =>
    an(t)
      ? t.code === ao.MISSING_FLOW_TOKEN ||
        t.code === ao.UNAUTHORIZED ||
        (t.code === ao.BAD_REQUEST &&
          t.message?.toLowerCase().includes("flow token"))
      : false;

  const A = q_1(
    async (t) => {
      r(null);
      C(true);
      try {
        const i = await verifyOtp(t);

        if (i === "authenticated") {
          if (K_1.getState().status === "needs_profile") {
            $_1("/onboarding");
          } else {
            $_1("/");
          }
        } else if (i === "password_reset") {
          $_1("/reset-password");
        }
      } catch (i) {
        if (an(i) && i.code.startsWith("LEGAL_") && onLegalError) {
          onLegalError(i.code);
        } else if (_(i)) {
          a(true);
        } else if (an(i)) {
          switch (i.code) {
            case ao.OTP_INVALID: {
              r("Неверный код. Попробуйте снова");
              break;
            }
            case ao.RATE_LIMIT_EXCEEDED: {
              r("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              r(i.message || "Ошибка проверки кода");
            }
          }
        } else {
          r("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        C(false);
      }
    },
    [verifyOtp, onLegalError]
  );

  const I = q_1(async () => {
    r(null);
    c(false);
    try {
      await resendOtp();
      c(true);

      setTimeout(() => c(false), 3000 /* 3e3 */);
    } catch (t) {
      if (an(t)) {
        if (t.code === ao.RATE_LIMIT_EXCEEDED) {
          r("Слишком много запросов. Попробуйте позже");
        } else {
          r(t.message || "Не удалось отправить код");
        }
      } else {
        r("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [resendOtp]);

  const O = q_1(async () => {
    b(true);
    try {
      await resendOtp();
      a(false);
      c(true);

      setTimeout(() => c(false), 3000 /* 3e3 */);
    } catch (t) {
      a(false);

      if (an(t)) {
        r(t.message || "Не удалось отправить код");
      } else {
        r("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      b(false);
    }
  }, [resendOtp]);

  const w = q_1(() => {
    a(false);
    onBack?.();
  }, [onBack]);

  return u("div", {
    className: o.container,
    children: [
      u("div", {
        className: o.header,
        children: [
          u("h1", { className: o.title, children: "Подтверждение действия" }),
          u("p", {
            className: o.subtitle,
            children: [
              "Мы отправили шестизначный код на почту ",
              email,
              ", чтобы убедиться, что вы – настоящий её владелец.",
            ],
          }),
        ],
      }),
      u && u("div", { className: o.error, children: u }),
      L &&
        u("div", { className: o.success, children: "Код отправлен повторно" }),
      u(O, { onSubmit: A, onResend: I, disabled: y }),
      onBack &&
        u("button", {
          type: "button",
          className: o.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      T &&
        u(aq, {
          onClose: w,
          showHeader: false,
          children: u("div", {
            className: o.expiredModal,
            children: [
              u("h2", { className: o.expiredTitle, children: "Время истекло" }),
              u("p", {
                className: o.expiredText,
                children:
                  "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?",
              }),
              u("div", {
                className: o.expiredActions,
                children: [
                  u(aq_1, {
                    variant: "secondary",
                    onClick: w,
                    disabled: E,
                    children: "Нет, закрыть",
                  }),
                  u(aq_1, {
                    onClick: O,
                    disabled: E,
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
const ae = "RXrJ";
const re = "u3Jv";
const ne = "W8xO";
const ie = "YuQv";
const le = "Wwew";
const oe = "O33F";
const ce = "MTvW";
const de = "FyTA";
const ue = "wNzG";
const pe = "dobL";
const he = "D0gV";
const me = "djeB";
const fe = "kicS";
const Ee = "l4lL";
const be = "Ggcz";
const Ne = "S2Bu";
const ge = "q3Rg";
const ye = "DwZt";

const s = {
  container: ae,
  logo: re,
  form: ne,
  header: ie,
  error: le,
  title: oe,
  subtitle: ce,
  inputs: de,
  inputGroup: ue,
  label: pe,
  inputWrapper: he,
  input: me,
  inputError: fe,
  fieldError: Ee,
  eyeButton: be,
  forgotPassword: Ne,
  submitButton: ge,
  signupLink: ye,
};

export const Login = (D) => {
  const [h, m] = d(false);
  const [d, f] = d("");
  const [u, r] = d("");
  const [y, C] = d(false);
  const [L, c] = d(false);
  const [T, a] = d(null);
  const [E, b] = d(null);
  const [_, A] = d("credentials");
  const { login, status, reset } = K_1();
  const t = status === "loading";

  const i = (p) => {
    p.preventDefault();
    a(null);
    b(null);

    if (!d.trim()) {
      a("Введите email");
      return;
    }

    if (!u.trim()) {
      a("Введите пароль");
      return;
    }
    c(true);
  };

  const M = q_1(
    async (p) => {
      c(false);
      try {
        if (
          (await login({ email: d, password: u, captcha: p })) !==
          "authenticated"
        ) {
          A("verify");
        }
      } catch (v) {
        if (an(v)) {
          switch (v.code) {
            case ao.ACCOUNT_INVALID_CREDENTIALS: {
              a("Неверный email или пароль");
              break;
            }
            case ao.ACCOUNT_DEACTIVATED: {
              a("Аккаунт деактивирован");
              break;
            }
            case ao.ACCOUNT_TEMPORARILY_LOCKED: {
              a("Аккаунт временно заблокирован. Попробуйте позже");
              break;
            }
            case ao.CAPTCHA_FAILED: {
              a("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case ao.RATE_LIMIT_EXCEEDED: {
              a("Слишком много попыток. Попробуйте позже");
              break;
            }
            case ao.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              b("Почта этого домена не поддерживается");
              break;
            }
            default: {
              a(v.message || "Ошибка входа");
            }
          }
        } else {
          a("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [d, u, login]
  );

  const R = q_1(() => {
    reset();
    A("credentials");
  }, [reset]);

  return h
    ? u(I_1, { intent: "sign-in", onBack: () => m(false) })
    : u(K_1_1, {
        children: [
          u("div", {
            className: s.container,
            children: [
              u("div", { className: s.logo, children: u(login, {}) }),
              _ === "credentials"
                ? u("form", {
                    className: s.form,
                    onSubmit: i,
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
                      T && u("div", { className: s.error, children: T }),
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
                                value: d,
                                onInput: (p) => {
                                  f(p.target.value);
                                  b(null);
                                },
                                placeholder: "ilya@gmail.com",
                                disabled: t,
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
                                    type: y ? "text" : "password",
                                    className: s.input,
                                    value: u,
                                    onInput: (p) => r(p.target.value),
                                    placeholder: "••••••••••••",
                                    disabled: t,
                                  }),
                                  u("button", {
                                    type: "button",
                                    className: s.eyeButton,
                                    onClick: () => C(!y),
                                    children: y
                                      ? u(I_2, { size: 20 })
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
                      u(aq_1, {
                        type: "submit",
                        variant: "primary",
                        size: "lg",
                        fullWidth: true,
                        className: s.submitButton,
                        disabled: t,
                        children: t ? "Вход..." : "Войти",
                      }),
                      u(aq_1, {
                        variant: "secondary",
                        fullWidth: true,
                        size: "lg",
                        style: { marginTop: 12 },
                        onClick: () => m(true),
                        disabled: t,
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
                      u(q_1_1, {}),
                    ],
                  })
                : u(te, { email: d, onBack: R }),
            ],
          }),
          u(C, { isOpen: L, onClose: () => c(false), onVerify: M }),
        ],
      });
};

export { Login as Login, Login as default };
