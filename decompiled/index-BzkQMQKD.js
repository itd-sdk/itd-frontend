import {
  w,
  d,
  q as q_1,
  u as e_1,
  x,
  ae,
  u,
  M,
  B as B_1,
} from "./index-gHxZkwFX.js";
import { O } from "./index-DNhfAHWL.js";
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
    n.SENTRY_RELEASE = { id: "1.1.4" };
    const r = new n.Error().stack;

    if (r) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[r] = "2d19c37a-5515-4005-a474-e96c706c143b";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-2d19c37a-5515-4005-a474-e96c706c143b";
    }
  } catch {}
})();
const v = "Mu5H";
const k = "pqJM";
const C = "WhPY";
const L = "VhNR";
const V = "AXaZ";
const F = "nKOD";
const B = "oRaO";
const H = "IOFv";
const U = "ujb2";
const X = "DETt";
const q = "exDV";

const a = {
  container: v,
  header: k,
  title: C,
  subtitle: L,
  error: V,
  success: F,
  backButton: B,
  expiredModal: H,
  expiredTitle: U,
  expiredText: X,
  expiredActions: q,
};

function Y({ email, onBack }) {
  const { verifyOtp, resendOtp } = w();
  const [E, t] = d(null);
  const [I, m] = d(false);
  const [N, o] = d(false);
  const [_, u] = d(false);
  const [y, x] = d(false);

  const D = (s) =>
    x(s)
      ? s.code === ae.MISSING_FLOW_TOKEN ||
        s.code === ae.UNAUTHORIZED ||
        (s.code === ae.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const M = q_1(
    async (s) => {
      t(null);
      m(true);
      try {
        const i = await verifyOtp(s);

        if (i === "authenticated") {
          if (w.getState().status === "needs_profile") {
            e_1("/onboarding");
          } else {
            e_1("/");
          }
        } else if (i === "password_reset") {
          e_1("/reset-password");
        }
      } catch (i) {
        if (D(i)) {
          u(true);
        } else if (x(i)) {
          switch (i.code) {
            case ae.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case ae.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              t(i.message || "Ошибка проверки кода");
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

  const R = q_1(async () => {
    t(null);
    o(false);
    try {
      await resendOtp();
      o(true);

      setTimeout(() => o(false), 3000 /* 3e3 */);
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

  const S = q_1(async () => {
    x(true);
    try {
      await resendOtp();
      u(false);
      o(true);

      setTimeout(() => o(false), 3000 /* 3e3 */);
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
      u(O, { onSubmit: M, onResend: R, disabled: I }),
      onBack &&
        u("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      _ &&
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
                    onClick: S,
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
export { Y as V };
