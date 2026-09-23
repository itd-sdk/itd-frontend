import {
  E,
  am as d_1,
  q as q_1,
  u as e_1,
  r,
  am,
  u,
  M,
  B as B_1,
} from "./index-B74jCtUp.js";
import { O as O_1 } from "./index-CyFcwqk9.js";
(() => {
  try {
    const a =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    a.SENTRY_RELEASE = { id: "1.1.2" };
    const r = new a.Error().stack;

    if (r) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[r] = "9bdf1860-549d-4483-b225-6c397e54d042";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-9bdf1860-549d-4483-b225-6c397e54d042";
    }
  } catch {}
})();
const D = "XvJg";
const O = "tiqn";
const C = "Uroy";
const L = "kVHc";
const V = "PTII";
const B = "bPVB";
const H = "RqhE";
const U = "HCL3";
const q = "OMIv";
const F = "eLNe";
const P = "kOE7";

const n = {
  container: D,
  header: O,
  title: C,
  subtitle: L,
  error: V,
  success: B,
  backButton: H,
  expiredModal: U,
  expiredTitle: q,
  expiredText: F,
  expiredActions: P,
};

function K({ email, onBack }) {
  const { verifyOtp, resendOtp } = E();
  const [E, t] = d_1(null);
  const [w, m] = d_1(false);
  const [N, o] = d_1(false);
  const [_, u] = d_1(false);
  const [y, T] = d_1(false);

  const S = (s) =>
    onBack(s)
      ? s.code === am.MISSING_FLOW_TOKEN ||
        s.code === am.UNAUTHORIZED ||
        (s.code === am.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const M = q_1(
    async (s) => {
      t(null);
      m(true);
      try {
        const i = await verifyOtp(s);

        if (i === "authenticated") {
          if (E.getState().status === "needs_profile") {
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
        } else if (onBack(i)) {
          switch (i.code) {
            case am.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case am.RATE_LIMIT_EXCEEDED: {
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
      if (onBack(s)) {
        if (s.code === am.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(s.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [resendOtp]);

  const v = q_1(async () => {
    T(true);
    try {
      await resendOtp();
      u(false);
      o(true);

      setTimeout(() => o(false), 3000 /* 3e3 */);
    } catch (s) {
      u(false);

      if (onBack(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      T(false);
    }
  }, [resendOtp]);

  const I = q_1(() => {
    u(false);
    onBack?.();
  }, [onBack]);

  return u("div", {
    className: n.container,
    children: [
      u("div", {
        className: n.header,
        children: [
          u("h1", { className: n.title, children: "Подтверждение действия" }),
          u("p", {
            className: n.subtitle,
            children: [
              "Мы отправили шестизначный код на почту ",
              email,
              ", чтобы убедиться, что вы – настоящий её владелец.",
            ],
          }),
        ],
      }),
      E && u("div", { className: n.error, children: E }),
      N &&
        u("div", { className: n.success, children: "Код отправлен повторно" }),
      u(O_1, { onSubmit: M, onResend: R, disabled: w }),
      onBack &&
        u("button", {
          type: "button",
          className: n.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      _ &&
        u(M, {
          onClose: I,
          showHeader: false,
          children: u("div", {
            className: n.expiredModal,
            children: [
              u("h2", { className: n.expiredTitle, children: "Время истекло" }),
              u("p", {
                className: n.expiredText,
                children:
                  "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?",
              }),
              u("div", {
                className: n.expiredActions,
                children: [
                  u(B_1, {
                    variant: "secondary",
                    onClick: I,
                    disabled: y,
                    children: "Нет, закрыть",
                  }),
                  u(B_1, {
                    onClick: v,
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
export { K as V };
