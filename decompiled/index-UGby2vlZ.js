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
} from "./index-ORJLmKGS.js";
import { O as O_1 } from "./index-DqoxCUqS.js";
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
    n.SENTRY_RELEASE = { id: "1.1.3" };
    const i = new n.Error().stack;

    if (i) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[i] = "6f5ea031-bc77-452b-afb5-4a7d1ba34e72";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-6f5ea031-bc77-452b-afb5-4a7d1ba34e72";
    }
  } catch {}
})();
const O = "pniz";
const k = "g4eq";
const C = "hTTZ";
const L = "VKPT";
const V = "IEIe";
const q = "YqiI";
const B = "sioe";
const F = "NSiY";
const H = "Hmpx";
const P = "McRJ";
const U = "yOPs";

const a = {
  container: O,
  header: k,
  title: C,
  subtitle: L,
  error: V,
  success: q,
  backButton: B,
  expiredModal: F,
  expiredTitle: H,
  expiredText: P,
  expiredActions: U,
};

function Z({ email, onBack }) {
  const { verifyOtp, resendOtp } = w();
  const [E, t] = d(null);
  const [w, m] = d(false);
  const [N, d] = d(false);
  const [S, u] = d(false);
  const [y, T] = d(false);

  const _ = (s) =>
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
        const r = await verifyOtp(s);

        if (r === "authenticated") {
          if (w.getState().status === "needs_profile") {
            e_1("/onboarding");
          } else {
            e_1("/");
          }
        } else if (r === "password_reset") {
          e_1("/reset-password");
        }
      } catch (r) {
        if (_(r)) {
          u(true);
        } else if (x(r)) {
          switch (r.code) {
            case ae.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case ae.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              t(r.message || "Ошибка проверки кода");
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
    d(false);
    try {
      await resendOtp();
      d(true);

      setTimeout(() => d(false), 3000 /* 3e3 */);
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

  const A = q_1(async () => {
    T(true);
    try {
      await resendOtp();
      u(false);
      d(true);

      setTimeout(() => d(false), 3000 /* 3e3 */);
    } catch (s) {
      u(false);

      if (x(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      T(false);
    }
  }, [resendOtp]);

  const x = q_1(() => {
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
      u(O_1, { onSubmit: M, onResend: R, disabled: w }),
      onBack &&
        u("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      S &&
        u(M, {
          onClose: x,
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
                    onClick: x,
                    disabled: y,
                    children: "Нет, закрыть",
                  }),
                  u(B_1, {
                    onClick: A,
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
export { Z as V };
