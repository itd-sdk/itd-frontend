import {
  d,
  A,
  A_1 as q_1,
  h as h_1,
  a,
  o,
  r as r_1,
  u,
  I,
  B,
  A as A_1,
} from "./index-CR_1arh8.js";
import { C } from "./index-AB-xYmxI.js";
import { V } from "./index-BHjRP1BG.js";
import { I as I_1, a as a_1 } from "./IconEyeOff-BlNwsMMr.js";
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
    t.SENTRY_RELEASE = { id: "1.1.2" };
    const n = new t.Error().stack;

    if (n) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[n] = "79f50d69-550b-4413-9ded-f8c41eefcd88";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-79f50d69-550b-4413-9ded-f8c41eefcd88";
    }
  } catch {}
})();
async function Q() {
  const t = await fetch("/api/v1/auth/registration-context", {
    cache: "no-store",
    credentials: "include",
  });
  if (!t.ok) {
    throw Error("LEGAL_UNAVAILABLE");
  }
  const n = await t.json();
  if (
    n.protocolVersion !== 1 ||
    typeof n.contextToken != "string" ||
    n.expiresAt <= Date.now() ||
    !Array.isArray(n.bundle?.documents)
  ) {
    throw Error("LEGAL_UNAVAILABLE");
  }
  if (
    n.bundle.actionVersion !== "registration-v1" ||
    n.bundle.actionText !==
      "Нажимая «Зарегистрироваться», вы принимаете Пользовательское соглашение и подтверждаете, что ознакомились с Политикой конфиденциальности."
  ) {
    throw Error("LEGAL_ACTION_UNSUPPORTED");
  }
  for (const u of ["terms", "privacy"]) {
    const a = n.bundle.documents.find((w) => w.slug === u);
    if (
      !a ||
      !/^[\d.-]+$/.test(a.version) ||
      !/^[a-f0-9]{64}$/.test(a.contentSha256) ||
      a.url !== `/legal/${u}/versions/${a.version}`
    ) {
      throw Error("LEGAL_UNAVAILABLE");
    }
  }
  return n;
}
const h = "От 8 до 100 символов, хотя бы одна латинская буква и одна цифра.";
function K(t) {
  return t.length >= 8 && t.length <= 100 && /[A-Za-z]/.test(t) && /\d/.test(t);
}
function Z(t) {
  return t.code === "INVALID_PASSWORD"
    ? true
    : t.code === "VALIDATION_ERROR" &&
        [
          "Password must be 8-100 chars with at least 1 letter and 1 number",
          "Password requirement not met",
          "Password is required",
        ].includes(t.message);
}
const ee = "aBGB";
const re = "a9Tf";
const te = "JW61";
const ne = "bLAs";
const se = "Jxcx";
const oe = "xGF8";
const ae = "DXuM";
const ie = "allF";
const le = "sod8";
const ce = "lhVP";
const de = "srMR";
const ue = "FpoB";
const pe = "ieia";
const fe = "taKm";
const me = "ATRo";
const he = "zINo";
const Ee = "fX22";
const ge = "ROtq";
const be = "xMCO";

const r = {
  container: ee,
  logo: re,
  form: te,
  header: ne,
  error: se,
  title: oe,
  subtitle: ae,
  inputs: ie,
  inputGroup: le,
  inputWrapper: ce,
  input: de,
  label: ue,
  inputError: pe,
  fieldError: fe,
  passwordHint: me,
  eyeButton: he,
  terms: Ee,
  submitButton: ge,
  loginLink: be,
};

export const Register = (t) => {
  const [n, u] = d("");
  const [a, w] = d("");
  const [E, O] = d(false);
  const [B, N] = d(false);
  const [T, o] = d(null);
  const [I, p] = d(null);
  const [v, g] = d(null);
  const [P, _] = d("credentials");
  const [d, C] = d(null);
  const [R, D] = d("");
  const f = reset(null);
  const b = reset(0);

  const c = q_1(async () => {
    const s = ++b.current;
    C(null);
    D("");
    try {
      const i = await Q();

      if (s === b.current) {
        C(i);
      }
    } catch {
      if (s === b.current) {
        D("Не удалось загрузить документы. Попробуйте ещё раз");
      }
    }
  }, []);

  h_1(() => {
    c();

    return () => {
      b.current++;
    };
  }, [c]);
  const { register, status, reset } = a();
  const y = status === "loading";

  const V = (s) => {
    s.preventDefault();
    o(null);
    p(null);
    g(null);

    if (!n.trim()) {
      p("Введите email");
      return;
    }

    if (!K(a)) {
      g(h);
      o(h);
      return;
    }
    if (!d || d.expiresAt <= Date.now()) {
      o(
        "Документы обновлены. Проверьте ссылки и нажмите «Зарегистрироваться» ещё раз"
      );

      c();
      return;
    }
    f.current = d;
    N(true);
  };

  const G = q_1(
    async (s) => {
      N(false);
      try {
        if (!f.current) {
          throw Error("LEGAL_CONTEXT_REQUIRED");
        }

        await register({
          email: n,
          password: a,
          turnstileToken: s,
          legal: {
            protocolVersion: 1,
            contextToken: f.current.contextToken,
          },
        });

        _("verify");
      } catch (i) {
        if (
          i &&
          typeof i == "object" &&
          "code" in i &&
          String(i.code).startsWith("LEGAL_")
        ) {
          o(
            "Не удалось подтвердить документы. Проверьте их и повторите регистрацию"
          );

          f.current = null;
          c();
          return;
        }
        if (o(i)) {
          if (Z(i)) {
            g(h);
            o(h);
            return;
          }
          switch (i.code) {
            case r_1.ENTITY_ALREADY_EXISTS: {
              p("Этот email уже зарегистрирован");
              break;
            }
            case r_1.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: {
              p("Почта этого домена не поддерживается");
              break;
            }
            case r_1.CAPTCHA_FAILED: {
              o("Проверка captcha не пройдена. Попробуйте снова");
              break;
            }
            case r_1.RATE_LIMIT_EXCEEDED: {
              o("Слишком много попыток. Попробуйте позже");
              break;
            }
            case r_1.VALIDATION_ERROR: {
              o("Проверьте введённые данные");
              break;
            }
            default: {
              o(i.message || "Ошибка регистрации");
            }
          }
        } else {
          o("Произошла ошибка. Попробуйте позже");
        }
      }
    },
    [n, a, register, c]
  );

  const M = q_1(() => {
    reset();
    _("credentials");
  }, [reset]);

  const W = q_1(
    (s) => {
      reset();
      f.current = null;
      _("credentials");

      o(
        s === "LEGAL_RECEIPT_EXPIRED"
          ? "Время подтверждения документов истекло. Проверьте ссылки и нажмите «Зарегистрироваться» ещё раз"
          : "Не удалось подтвердить документы. Проверьте ссылки и повторите регистрацию"
      );

      c();
    },
    [reset, c]
  );

  return u(A_1, {
    children: [
      u("div", {
        className: r.container,
        children: [
          u("div", { className: r.logo, children: u(I, {}) }),
          P === "credentials"
            ? u("form", {
                className: r.form,
                onSubmit: V,
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
                  T &&
                    u("div", {
                      className: r.error,
                      role: "alert",
                      children: T,
                    }),
                  u("div", {
                    className: r.inputs,
                    children: [
                      u("div", {
                        className: r.inputGroup,
                        children: [
                          u("label", {
                            className: r.label,
                            htmlFor: "register-email",
                            children: "E-Mail",
                          }),
                          u("input", {
                            id: "register-email",
                            type: "email",
                            autoComplete: "email",
                            className: `${r.input} ${I ? r.inputError : ""}`,
                            value: n,
                            onInput: (s) => {
                              u(s.target.value);
                              p(null);
                            },
                            placeholder: "ilya@gmail.com",
                            disabled: y,
                          }),
                          I &&
                            u("span", {
                              className: r.fieldError,
                              children: I,
                            }),
                        ],
                      }),
                      u("div", {
                        className: r.inputGroup,
                        children: [
                          u("label", {
                            className: r.label,
                            htmlFor: "register-password",
                            children: "Пароль",
                          }),
                          u("div", {
                            className: r.inputWrapper,
                            children: [
                              u("input", {
                                id: "register-password",
                                type: E ? "text" : "password",
                                autoComplete: "new-password",
                                "aria-describedby": "register-password-hint",
                                "aria-invalid": !!v,
                                className: `${r.input} ${
                                  v ? r.inputError : ""
                                }`,
                                value: a,
                                onInput: (s) => {
                                  w(s.target.value);

                                  if (v) {
                                    o(null);
                                  }

                                  g(null);
                                },
                                placeholder: "Введите пароль",
                                disabled: y,
                              }),
                              u("button", {
                                type: "button",
                                "aria-label": E
                                  ? "Скрыть пароль"
                                  : "Показать пароль",
                                className: r.eyeButton,
                                onClick: () => O(!E),
                                children: E
                                  ? u(I_1, { size: 20 })
                                  : u(a_1, { size: 20 }),
                              }),
                            ],
                          }),
                          u("p", {
                            id: "register-password-hint",
                            className: r.passwordHint,
                            children: h,
                          }),
                        ],
                      }),
                    ],
                  }),
                  u("p", {
                    className: r.terms,
                    children: [
                      "Нажимая «Зарегистрироваться», вы принимаете",
                      " ",
                      u("a", {
                        href:
                          d?.bundle.documents.find((s) => s.slug === "terms")
                            ?.url ?? "/terms",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Пользовательское соглашение",
                      }),
                      " ",
                      "и подтверждаете, что ознакомились с",
                      " ",
                      u("a", {
                        href:
                          d?.bundle.documents.find((s) => s.slug === "privacy")
                            ?.url ?? "/privacy",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Политикой конфиденциальности",
                      }),
                      ".",
                    ],
                  }),
                  R &&
                    u("p", {
                      role: "alert",
                      className: r.fieldError,
                      children: [
                        R,
                        " ",
                        u("button", {
                          type: "button",
                          onClick: () => {
                            c();
                          },
                          children: "Повторить",
                        }),
                      ],
                    }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: r.submitButton,
                    disabled: y || !d,
                    children: y
                      ? "Регистрация..."
                      : !d && !R
                      ? "Загрузка документов..."
                      : "Зарегистрироваться",
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
            : u(V, { email: n, onBack: M, onLegalError: W }),
        ],
      }),
      u(C, { isOpen: B, onClose: () => N(false), onVerify: G }),
    ],
  });
};

export { Register as Register, Register as default };
