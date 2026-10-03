import {
  Y as Y_1,
  d,
  q,
  u as e_1,
  K,
  aB,
  u,
  M,
  B as B_1,
} from "./index-CsuAWxkQ.js";
import { O } from "./index-DT1tSoMS.js";
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
      n._sentryDebugIds[r] = "9ecc75ad-d0a2-4e9b-a60c-0314d35cf6ca";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-9ecc75ad-d0a2-4e9b-a60c-0314d35cf6ca";
    }
  } catch {}
})();
const k = "lepY";
const v = "OzZY";
const C = "drdG";
const L = "OHMr";
const Z = "yq2o";
const B = "ZAal";
const F = "ERat";
const U = "iRxU";
const Y = "ZkN2";
const H = "Dh4t";
const V = "hZtF";

const a = {
  container: k,
  header: v,
  title: C,
  subtitle: L,
  error: Z,
  success: B,
  backButton: F,
  expiredModal: U,
  expiredTitle: Y,
  expiredText: H,
  expiredActions: V,
};

function X({ email, onBack }) {
  const { verifyOtp, resendOtp } = Y_1();
  const [E, t] = d(null);
  const [I, m] = d(false);
  const [N, c] = d(false);
  const [_, u] = d(false);
  const [y, x] = d(false);

  const R = (s) =>
    K(s)
      ? s.code === aB.MISSING_FLOW_TOKEN ||
        s.code === aB.UNAUTHORIZED ||
        (s.code === aB.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const S = q(
    async (s) => {
      t(null);
      m(true);
      try {
        const d = await verifyOtp(s);

        if (d === "authenticated") {
          if (Y_1.getState().status === "needs_profile") {
            e_1("/onboarding");
          } else {
            e_1("/");
          }
        } else if (d === "password_reset") {
          e_1("/reset-password");
        }
      } catch (d) {
        if (R(d)) {
          u(true);
        } else if (K(d)) {
          switch (d.code) {
            case aB.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case aB.RATE_LIMIT_EXCEEDED: {
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

  const A = q(async () => {
    t(null);
    c(false);
    try {
      await resendOtp();
      c(true);

      setTimeout(() => c(false), 3000 /* 3e3 */);
    } catch (s) {
      if (K(s)) {
        if (s.code === aB.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(s.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [resendOtp]);

  const M = q(async () => {
    x(true);
    try {
      await resendOtp();
      u(false);
      c(true);

      setTimeout(() => c(false), 3000 /* 3e3 */);
    } catch (s) {
      u(false);

      if (K(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      x(false);
    }
  }, [resendOtp]);

  const T = q(() => {
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
      u(O, { onSubmit: S, onResend: A, disabled: I }),
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
                    onClick: M,
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
export { X as V };
