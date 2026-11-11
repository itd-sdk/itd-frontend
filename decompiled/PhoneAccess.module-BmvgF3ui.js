import { ag, az, aH } from "./index-dnACTU3c.js";
(() => {
  try {
    const e =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "1.1.2" };
    const t = new e.Error().stack;

    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "455045c8-028d-4f98-8543-7f3aadb8564a";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-455045c8-028d-4f98-8543-7f3aadb8564a";
    }
  } catch {}
})();
async function s(e, t, o = false) {
  const n = {
    method: t ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    ...(t ? { body: JSON.stringify(t) } : {}),
    signal: AbortSignal.timeout(20000 /* 2e4 */),
  };

  const a = await (o ? aH : fetch)(`/api/v1/auth${e}`, n);
  const r = await a.json();
  if (!a.ok) {
    const d = Math.max(
      Number(r.error?.retryIn) || 0,
      Number(r.error?.retryAfter) || 0,
      Number(a.headers.get("Retry-After")) || 0
    );
    throw new ag(r.error?.code || "REQUEST_FAILED", d);
  }
  return r;
}

const R = {
  start: async (e, t, o) => {
    const n = await s("/phone/start", { phone: e, captcha: t, legal: o });
    if (typeof n.flowToken != "string" || n.flowToken.length !== 32) {
      throw new Error("Invalid phone flow");
    }
    return { ...az(n), flowToken: n.flowToken };
  },
  verify: (e, t, o) => s("/verify-otp", { phone: e, flowToken: t, otp: o }),
  password: (e, t, o) =>
    s("/phone/password", { phone: e, flowToken: t, password: o }),
  reset: (e, t, o) =>
    s("/phone/reset-password", { phone: e, flowToken: t, newPassword: o }),
  resend: async (e, t) =>
    az(await s("/resend-otp", { phone: e, flowToken: t })),
};

export const a = (e) => {
  const t = e instanceof ag ? e.code : "";
  return (
    {
      INVALID_CREDENTIALS: "Неверный облачный пароль.",
      INVALID_OLD_PASSWORD: "Неверный текущий пароль.",
      INVALID_PASSWORD: "Нужно от 8 до 100 символов, латинская буква и цифра.",
      SAME_PASSWORD: "Новый пароль должен отличаться от текущего.",
      PASSWORD_ALREADY_SET: "У аккаунта уже есть пароль. Его можно сменить.",
      PASSWORD_NOT_SET: "У аккаунта ещё нет пароля. Создайте его.",
      SAME_EMAIL: "Эта почта уже привязана к вашему аккаунту.",
      EMAIL_TAKEN: "Эта почта уже используется другим аккаунтом.",
      INVALID_EMAIL: "Проверьте адрес электронной почты.",
      EMAIL_DOMAIN_NOT_ALLOWED: "Почта этого домена пока не поддерживается.",
      TOO_MANY_ATTEMPTS: "Слишком много попыток. Попробуйте позже.",
      PHONE_VERIFICATION_PENDING:
        "Код уже отправлен на этот номер. Попробуйте позже.",
      PHONE_BUDGET_EXHAUSTED:
        "Отправка кодов временно приостановлена. Попробуйте позже.",
      PHONE_BUDGET_UNAVAILABLE:
        "Отправка кодов временно приостановлена. Попробуйте позже.",
      RETRY_TOO_SOON: "Код уже отправлен. Подождите перед повторным запросом.",
      RESET_VIA_EMAIL: "Восстановите пароль через привязанную почту.",
      EMAIL_SIGNUP_DISABLED:
        "Регистрация по почте больше недоступна. Зарегистрируйтесь по номеру телефона.",
    }[t] || ""
  );
};

const f = "q8sD";
const A = "HJbv";
const l = "y6rQ";
const _ = "BChr";
const I = "Y1rF";
const T = "xEnL";
const p = "ghC1";
const h = "B4x5";
const S = "jAiC";
const y = "mJo1";
const D = "BRRT";
const u = "fECZ";
const w = "q2FV";
const N = "R0kF";
const b = "f58S";
const g = "TCaa";
const L = "HfNv";

const P = {
  card: f,
  brand: A,
  symbol: l,
  description: _,
  form: I,
  number: T,
  field: p,
  error: h,
  link: S,
  back: y,
  terms: D,
  rows: u,
  row: w,
  dialog: N,
  dialogContent: b,
  hint: g,
  captcha: L,
};

export { a as a, R as b, s as p, P as s };
