import {
  a as a_1,
  d,
  q as q_1,
  $,
  d as d_1,
  r,
  u,
  M,
  B as B_1,
} from "./index-CR_1arh8.js";
import { O as O_1 } from "./index-AB-xYmxI.js";
(() => {
  try {
    const i =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    i.SENTRY_RELEASE = { id: "1.1.2" };
    const r = new i.Error().stack;

    if (r) {
      i._sentryDebugIds = i._sentryDebugIds || {};
      i._sentryDebugIds[r] = "7e0c6ca1-2c07-45fd-ba80-a8baf7ae28d3";
      i._sentryDebugIdIdentifier =
        "sentry-dbid-7e0c6ca1-2c07-45fd-ba80-a8baf7ae28d3";
    }
  } catch {}
})();
const O = "G7y0";
const C = "DzHT";
const L = "DSTs";
const H = "oNXP";
const U = "Nu7c";
const F = "TsHV";
const G = "zu2i";
const V = "YuFb";
const X = "HvHb";
const B = "UUG4";
const z = "kXoO";

const a = {
  container: O,
  header: C,
  title: L,
  subtitle: H,
  error: U,
  success: F,
  backButton: G,
  expiredModal: V,
  expiredTitle: X,
  expiredText: B,
  expiredActions: z,
};

function q({ email, onBack, onLegalError }) {
  const { verifyOtp, resendOtp } = a_1();
  const [m, t] = d(null);
  const [g, y] = d(false);
  const [_, d] = d(false);
  const [S, h] = d(false);
  const [T, x] = d(false);

  const A = (s) =>
    d_1(s)
      ? s.code === onBack.MISSING_FLOW_TOKEN ||
        s.code === onBack.UNAUTHORIZED ||
        (s.code === onBack.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const D = q_1(
    async (s) => {
      t(null);
      y(true);
      try {
        const n = await verifyOtp(s);

        if (n === "authenticated") {
          if (a_1.getState().status === "needs_profile") {
            $("/onboarding");
          } else {
            $("/");
          }
        } else if (n === "password_reset") {
          $("/reset-password");
        }
      } catch (n) {
        if (d_1(n) && n.code.startsWith("LEGAL_") && onLegalError) {
          onLegalError(n.code);
        } else if (A(n)) {
          h(true);
        } else if (d_1(n)) {
          switch (n.code) {
            case onBack.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case onBack.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              t(n.message || "Ошибка проверки кода");
            }
          }
        } else {
          t("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        y(false);
      }
    },
    [verifyOtp, onLegalError]
  );

  const M = q_1(async () => {
    t(null);
    d(false);
    try {
      await resendOtp();
      d(true);

      setTimeout(() => d(false), 3000 /* 3e3 */);
    } catch (s) {
      if (d_1(s)) {
        if (s.code === onBack.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(s.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [resendOtp]);

  const R = q_1(async () => {
    x(true);
    try {
      await resendOtp();
      h(false);
      d(true);

      setTimeout(() => d(false), 3000 /* 3e3 */);
    } catch (s) {
      h(false);

      if (d_1(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      x(false);
    }
  }, [resendOtp]);

  const w = q_1(() => {
    h(false);
    onBack?.();
  }, [onBack]);

  return onLegalError("div", {
    className: a.container,
    children: [
      onLegalError("div", {
        className: a.header,
        children: [
          onLegalError("h1", {
            className: a.title,
            children: "Подтверждение действия",
          }),
          onLegalError("p", {
            className: a.subtitle,
            children: [
              "Мы отправили шестизначный код на почту ",
              email,
              ", чтобы убедиться, что вы – настоящий её владелец.",
            ],
          }),
        ],
      }),
      m && onLegalError("div", { className: a.error, children: m }),
      _ &&
        onLegalError("div", {
          className: a.success,
          children: "Код отправлен повторно",
        }),
      onLegalError(O_1, { onSubmit: D, onResend: M, disabled: g }),
      onBack &&
        onLegalError("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      S &&
        onLegalError(M, {
          onClose: w,
          showHeader: false,
          children: onLegalError("div", {
            className: a.expiredModal,
            children: [
              onLegalError("h2", {
                className: a.expiredTitle,
                children: "Время истекло",
              }),
              onLegalError("p", {
                className: a.expiredText,
                children:
                  "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?",
              }),
              onLegalError("div", {
                className: a.expiredActions,
                children: [
                  onLegalError(B_1, {
                    variant: "secondary",
                    onClick: w,
                    disabled: T,
                    children: "Нет, закрыть",
                  }),
                  onLegalError(B_1, {
                    onClick: R,
                    disabled: T,
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
export { q as V };
