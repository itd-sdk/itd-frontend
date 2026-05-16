import {
  x,
  d,
  q,
  q as q_1,
  aa,
  ab,
  a as a_1,
  M,
  B as B_1,
} from "./index-BCnJB3wz.js";
import { M as M_1 } from "./index-BDEp0-_x.js";
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
    n.SENTRY_RELEASE = { id: "1.1.1" };
    const r = new n.Error().stack;

    if (r) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[r] = "e53e6afb-1b5e-4e2f-8081-59ae8728038f";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-e53e6afb-1b5e-4e2f-8081-59ae8728038f";
    }
  } catch {}
})();
const D = "QU7M";
const v = "FOx8";
const C = "ck7P";
const L = "OWuu";
const F = "FxEW";
const U = "i7gh";
const j = "yRjt";
const B = "tP6Y";
const P = "jjOk";
const V = "gXE2";
const W = "MC5z";

const a = {
  container: D,
  header: v,
  title: C,
  subtitle: L,
  error: F,
  success: U,
  backButton: j,
  expiredModal: B,
  expiredTitle: P,
  expiredText: V,
  expiredActions: W,
};

function Y({ email, onBack }) {
  const { verifyOtp, resendOtp } = x();
  const [E, t] = d(null);
  const [I, m] = d(false);
  const [N, l] = d(false);
  const [_, u] = d(false);
  const [y, x] = d(false);

  const M = (s) =>
    aa(s)
      ? s.code === ab.MISSING_FLOW_TOKEN ||
        s.code === ab.UNAUTHORIZED ||
        (s.code === ab.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const S = q(
    async (s) => {
      t(null);
      m(true);
      try {
        const i = await verifyOtp(s);

        if (i === "authenticated") {
          if (x.getState().status === "needs_profile") {
            q_1("/onboarding");
          } else {
            q_1("/");
          }
        } else if (i === "password_reset") {
          q_1("/reset-password");
        }
      } catch (i) {
        if (M(i)) {
          u(true);
        } else if (aa(i)) {
          switch (i.code) {
            case ab.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case ab.RATE_LIMIT_EXCEEDED: {
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

  const R = q(async () => {
    t(null);
    l(false);
    try {
      await resendOtp();
      l(true);

      setTimeout(() => l(false), 3000 /* 3e3 */);
    } catch (s) {
      if (aa(s)) {
        if (s.code === ab.RATE_LIMIT_EXCEEDED) {
          t("Слишком много запросов. Попробуйте позже");
        } else {
          t(s.message || "Не удалось отправить код");
        }
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    }
  }, [resendOtp]);

  const A = q(async () => {
    x(true);
    try {
      await resendOtp();
      u(false);
      l(true);

      setTimeout(() => l(false), 3000 /* 3e3 */);
    } catch (s) {
      u(false);

      if (aa(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      x(false);
    }
  }, [resendOtp]);

  const g = q(() => {
    u(false);
    onBack?.();
  }, [onBack]);

  return a_1("div", {
    className: a.container,
    children: [
      a_1("div", {
        className: a.header,
        children: [
          a_1("h1", { className: a.title, children: "Подтверждение действия" }),
          a_1("p", {
            className: a.subtitle,
            children: [
              "Мы отправили шестизначный код на почту ",
              email,
              ", чтобы убедиться, что вы – настоящий её владелец.",
            ],
          }),
        ],
      }),
      E && a_1("div", { className: a.error, children: E }),
      N &&
        a_1("div", {
          className: a.success,
          children: "Код отправлен повторно",
        }),
      a_1(M_1, { onSubmit: S, onResend: R, disabled: I }),
      onBack &&
        a_1("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      _ &&
        a_1(M, {
          onClose: g,
          showHeader: false,
          children: a_1("div", {
            className: a.expiredModal,
            children: [
              a_1("h2", {
                className: a.expiredTitle,
                children: "Время истекло",
              }),
              a_1("p", {
                className: a.expiredText,
                children:
                  "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?",
              }),
              a_1("div", {
                className: a.expiredActions,
                children: [
                  a_1(B_1, {
                    variant: "secondary",
                    onClick: g,
                    disabled: y,
                    children: "Нет, закрыть",
                  }),
                  a_1(B_1, {
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
export { Y as V };
