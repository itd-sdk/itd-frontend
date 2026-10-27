import {
  a as a_1,
  d,
  q as q_1,
  $,
  y,
  z,
  u,
  M,
  B as B_1,
} from "./index-BQxlThnW-portal20261026.js";
import { O as O_1 } from "./index-GGTxnMRT-portal20261026.js";
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
      n._sentryDebugIds[r] = "19c8adf8-9eb8-491a-85d8-7d75dec4c36f";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-19c8adf8-9eb8-491a-85d8-7d75dec4c36f";
    }
  } catch {}
})();
const O = "VoAk";
const k = "EbtK";
const C = "Pp6a";
const L = "CUJI";
const B = "NOtX";
const U = "LI10";
const V = "mM9x";
const X = "cjh7";
const F = "p5NX";
const H = "ZOB5";
const K = "l4vb";

const a = {
  container: O,
  header: k,
  title: C,
  subtitle: L,
  error: B,
  success: U,
  backButton: V,
  expiredModal: X,
  expiredTitle: F,
  expiredText: H,
  expiredActions: K,
};

function q({ email, onBack }) {
  const { verifyOtp, resendOtp } = a_1();
  const [E, t] = d(null);
  const [w, m] = d(false);
  const [N, c] = d(false);
  const [_, u] = d(false);
  const [y, x] = d(false);

  const S = (s) =>
    y(s)
      ? s.code === z.MISSING_FLOW_TOKEN ||
        s.code === z.UNAUTHORIZED ||
        (s.code === z.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const A = q_1(
    async (s) => {
      t(null);
      m(true);
      try {
        const d = await verifyOtp(s);

        if (d === "authenticated") {
          if (a_1.getState().status === "needs_profile") {
            $("/onboarding");
          } else {
            $("/");
          }
        } else if (d === "password_reset") {
          $("/reset-password");
        }
      } catch (d) {
        if (S(d)) {
          u(true);
        } else if (y(d)) {
          switch (d.code) {
            case z.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case z.RATE_LIMIT_EXCEEDED: {
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
      if (y(s)) {
        if (s.code === z.RATE_LIMIT_EXCEEDED) {
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

      if (y(s)) {
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
      u(O_1, { onSubmit: A, onResend: M, disabled: w }),
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
export { q as V };
