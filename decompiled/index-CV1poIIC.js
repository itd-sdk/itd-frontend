import {
  Y,
  aA as d_1,
  q as q_1,
  u as e_1,
  K as K_1,
  aA,
  u,
  M,
  B as B_1,
} from "./index-D4QRo1-7.js";
import { O as O_1 } from "./index-CfgNx4Vk.js";
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
      n._sentryDebugIds[r] = "5a5b2e6e-b137-40b0-a07d-f22b516df134";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-5a5b2e6e-b137-40b0-a07d-f22b516df134";
    }
  } catch {}
})();
const O = "EwFl";
const k = "Wnte";
const C = "xKHf";
const L = "q2Rx";
const F = "rjH9";
const B = "FXwK";
const H = "GvyP";
const K = "bsug";
const X = "RAOq";
const q = "BePX";
const P = "bibi";

const a = {
  container: O,
  header: k,
  title: C,
  subtitle: L,
  error: F,
  success: B,
  backButton: H,
  expiredModal: K,
  expiredTitle: X,
  expiredText: q,
  expiredActions: P,
};

export function V({ email, onBack }) {
  const { verifyOtp, resendOtp } = Y();
  const [E, t] = d_1(null);
  const [I, m] = d_1(false);
  const [N, l] = d_1(false);
  const [_, u] = d_1(false);
  const [y, x] = d_1(false);

  const A = (s) =>
    K_1(s)
      ? s.code === aA.MISSING_FLOW_TOKEN ||
        s.code === aA.UNAUTHORIZED ||
        (s.code === aA.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const R = q_1(
    async (s) => {
      t(null);
      m(true);
      try {
        const i = await verifyOtp(s);

        if (i === "authenticated") {
          if (Y.getState().status === "needs_profile") {
            e_1("/onboarding");
          } else {
            e_1("/");
          }
        } else if (i === "password_reset") {
          e_1("/reset-password");
        }
      } catch (i) {
        if (A(i)) {
          u(true);
        } else if (K_1(i)) {
          switch (i.code) {
            case aA.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case aA.RATE_LIMIT_EXCEEDED: {
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

  const S = q_1(async () => {
    t(null);
    l(false);
    try {
      await resendOtp();
      l(true);

      setTimeout(() => l(false), 3000 /* 3e3 */);
    } catch (s) {
      if (K_1(s)) {
        if (s.code === aA.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(s.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [resendOtp]);

  const M = q_1(async () => {
    x(true);
    try {
      await resendOtp();
      u(false);
      l(true);

      setTimeout(() => l(false), 3000 /* 3e3 */);
    } catch (s) {
      u(false);

      if (K_1(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      x(false);
    }
  }, [resendOtp]);

  const w = q_1(() => {
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
      u(O_1, { onSubmit: R, onResend: S, disabled: I }),
      onBack &&
        u("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      _ &&
        u(M, {
          onClose: w,
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
                    onClick: w,
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

export { V as V };
