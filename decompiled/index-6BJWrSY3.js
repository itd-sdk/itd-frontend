import {
  B_1 as w_1,
  d,
  q as q_1,
  u as e_1,
  x,
  ae,
  u,
  M,
  B as B_1,
} from "./index-DBLtLuBZ.js";
import { O as O_1 } from "./index-CqDyc-Mo.js";
(() => {
  try {
    const n =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    n.SENTRY_RELEASE = { id: "1.1.2" };
    const r = new n.Error().stack;

    if (r) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[r] = "b37ddf87-456d-4cfc-ba3c-936d0657e210";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-b37ddf87-456d-4cfc-ba3c-936d0657e210";
    }
  } catch {}
})();
const D = "XoFB";
const O = "MLoN";
const k = "cR0C";
const L = "CGXx";
const B = "giOI";
const F = "dtWf";
const U = "OPcI";
const X = "SuJb";
const V = "Uukq";
const q = "av0f";
const G = "AsvS";

const a = {
  container: D,
  header: O,
  title: k,
  subtitle: L,
  error: B,
  success: F,
  backButton: U,
  expiredModal: X,
  expiredTitle: V,
  expiredText: q,
  expiredActions: G,
};

function J({ email, onBack }) {
  const { verifyOtp, resendOtp } = w_1();
  const [E, t] = d(null);
  const [I, m] = d(false);
  const [N, c] = d(false);
  const [S, u] = d(false);
  const [y, x] = d(false);

  const _ = (s) =>
    x(s)
      ? s.code === ae.MISSING_FLOW_TOKEN ||
        s.code === ae.UNAUTHORIZED ||
        (s.code === ae.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const A = q_1(
    async (s) => {
      t(null);
      m(true);
      try {
        const d = await verifyOtp(s);

        if (d === "authenticated") {
          if (w_1.getState().status === "needs_profile") {
            e_1("/onboarding");
          } else {
            e_1("/");
          }
        } else if (d === "password_reset") {
          e_1("/reset-password");
        }
      } catch (d) {
        if (_(d)) {
          u(true);
        } else if (x(d)) {
          switch (d.code) {
            case ae.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case ae.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              t(d.message || "Ошибка проверки кода");
            }
          }
        } else {
          t("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        m(false);
      }
    },
    [verifyOtp]
  );

  const M = q_1(async () => {
    t(null);
    c(false);
    try {
      await resendOtp();
      c(true);

      setTimeout(() => c(false), 3000 /* 3e3 */);
    } catch (s) {
      if (x(s)) {
        if (s.code === ae.RATE_LIMIT_EXCEEDED) {
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
      u(false);
      c(true);

      setTimeout(() => c(false), 3000 /* 3e3 */);
    } catch (s) {
      u(false);

      if (x(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      x(false);
    }
  }, [resendOtp]);

  const T = q_1(() => {
    u(false);
    onBack?.();
  }, [onBack]);

  return u("div", {
    className: a.container,
    children: [
      u("div", {
        className: a.header,
        children: [
          u("h1", { className: a.title, children: "Подтверждение действия" }),
          u("p", {
            className: a.subtitle,
            children: [
              "Мы отправили шестизначный код на почту ",
              email,
              ", чтобы убедиться, что вы – настоящий её владелец.",
            ],
          }),
        ],
      }),
      E && u("div", { className: a.error, children: E }),
      N &&
        u("div", { className: a.success, children: "Код отправлен повторно" }),
      u(O_1, { onSubmit: A, onResend: M, disabled: I }),
      onBack &&
        u("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      S &&
        u(M, {
          onClose: T,
          showHeader: false,
          children: u("div", {
            className: a.expiredModal,
            children: [
              u("h2", { className: a.expiredTitle, children: "Время истекло" }),
              u("p", {
                className: a.expiredText,
                children:
                  "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?",
              }),
              u("div", {
                className: a.expiredActions,
                children: [
                  u(B_1, {
                    variant: "secondary",
                    onClick: T,
                    disabled: y,
                    children: "Нет, закрыть",
                  }),
                  u(B_1, {
                    onClick: R,
                    disabled: y,
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
export { J as V };
