import {
  Y as Y_1,
  aB as d_1,
  q,
  u as e_1,
  K,
  aB,
  u,
  M,
  B as B_1,
} from "./index-DqQficWb.js";
import { O as O_1 } from "./index-BWIgmRuR.js";
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
      n._sentryDebugIds[r] = "f66bd527-7674-4bca-806f-02363f7d8cb3";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-f66bd527-7674-4bca-806f-02363f7d8cb3";
    }
  } catch {}
})();
const D = "SC7O";
const O = "ECMl";
const k = "xMRp";
const L = "ZMuH";
const B = "R5vh";
const V = "u0wT";
const F = "M98c";
const H = "oIVM";
const U = "jZC5";
const X = "wOtA";
const Z = "IXGQ";

const a = {
  container: D,
  header: O,
  title: k,
  subtitle: L,
  error: B,
  success: V,
  backButton: F,
  expiredModal: H,
  expiredTitle: U,
  expiredText: X,
  expiredActions: Z,
};

function Y({ email, onBack }) {
  const { verifyOtp, resendOtp } = Y_1();
  const [E, t] = d_1(null);
  const [g, m] = d_1(false);
  const [M, o] = d_1(false);
  const [N, u] = d_1(false);
  const [y, T] = d_1(false);

  const S = (s) =>
    K(s)
      ? s.code === aB.MISSING_FLOW_TOKEN ||
        s.code === aB.UNAUTHORIZED ||
        (s.code === aB.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const _ = q(
    async (s) => {
      t(null);
      m(true);
      try {
        const i = await verifyOtp(s);

        if (i === "authenticated") {
          if (Y_1.getState().status === "needs_profile") {
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
        } else if (K(i)) {
          switch (i.code) {
            case aB.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case aB.RATE_LIMIT_EXCEEDED: {
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
    o(false);
    try {
      await resendOtp();
      o(true);

      setTimeout(() => o(false), 3000 /* 3e3 */);
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

  const A = q(async () => {
    T(true);
    try {
      await resendOtp();
      u(false);
      o(true);

      setTimeout(() => o(false), 3000 /* 3e3 */);
    } catch (s) {
      u(false);

      if (K(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      T(false);
    }
  }, [resendOtp]);

  const w = q(() => {
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
      M &&
        u("div", { className: a.success, children: "Код отправлен повторно" }),
      u(O_1, { onSubmit: _, onResend: R, disabled: g }),
      onBack &&
        u("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      N &&
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
