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
} from "./index-pEgBAsWz.js";
import { O as O_1 } from "./index-BjZiGhmq.js";
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
      n._sentryDebugIds[r] = "23124833-e92c-45fb-85b3-5e4273aac164";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-23124833-e92c-45fb-85b3-5e4273aac164";
    }
  } catch {}
})();
const v = "uzQV";
const C = "bGzq";
const L = "VPRE";
const O = "J0pU";
const V = "zcWX";
const U = "YtAD";
const q = "qnP0";
const z = "ki2l";
const B = "uMV3";
const F = "KLy8";
const P = "Jfsy";

const a = {
  container: v,
  header: C,
  title: L,
  subtitle: O,
  error: V,
  success: U,
  backButton: q,
  expiredModal: z,
  expiredTitle: B,
  expiredText: F,
  expiredActions: P,
};

function J({ email, onBack }) {
  const { verifyOtp, resendOtp } = w();
  const [E, t] = resendOtp(null);
  const [I, y] = resendOtp(false);
  const [N, l] = resendOtp(false);
  const [_, u] = resendOtp(false);
  const [m, x] = resendOtp(false);

  const S = (s) =>
    x(s)
      ? s.code === ae.MISSING_FLOW_TOKEN ||
        s.code === ae.UNAUTHORIZED ||
        (s.code === ae.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const A = q_1(
    async (s) => {
      t(null);
      y(true);
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
        if (S(i)) {
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
        y(false);
      }
    },
    [verifyOtp]
  );

  const M = q_1(async () => {
    t(null);
    l(false);
    try {
      await resendOtp();
      l(true);

      setTimeout(() => l(false), 3000 /* 3e3 */);
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
      l(true);

      setTimeout(() => l(false), 3000 /* 3e3 */);
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
                    disabled: m,
                    children: "Нет, закрыть",
                  }),
                  u(B_1, {
                    onClick: R,
                    disabled: m,
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
