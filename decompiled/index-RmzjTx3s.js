import {
  Y as Y_1,
  d,
  q,
  u as e_1,
  K as K_1,
  aB,
  u,
  M,
  B as B_1,
} from "./index-DK2L49XD.js";
import { O as O_1 } from "./index-CyfpzJs8.js";
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
      n._sentryDebugIds[r] = "3a3be57c-0134-420b-8287-942c98ab9654";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-3a3be57c-0134-420b-8287-942c98ab9654";
    }
  } catch {}
})();
const O = "k5a4";
const k = "zCL7";
const C = "rOPK";
const L = "pGw4";
const B = "ixVQ";
const F = "OucD";
const K = "SfMX";
const V = "FevR";
const U = "yMLS";
const X = "rK77";
const G = "e68A";

const a = {
  container: O,
  header: k,
  title: C,
  subtitle: L,
  error: B,
  success: F,
  backButton: K,
  expiredModal: V,
  expiredTitle: U,
  expiredText: X,
  expiredActions: G,
};

function Y({ email, onBack }) {
  const { verifyOtp, resendOtp } = Y_1();
  const [E, t] = resendOtp(null);
  const [I, m] = resendOtp(false);
  const [N, o] = resendOtp(false);
  const [S, u] = resendOtp(false);
  const [y, x] = resendOtp(false);

  const _ = (s) =>
    K_1(s)
      ? s.code === aB.MISSING_FLOW_TOKEN ||
        s.code === aB.UNAUTHORIZED ||
        (s.code === aB.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const M = q(
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
        if (_(i)) {
          u(true);
        } else if (K_1(i)) {
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

  const A = q(async () => {
    t(null);
    o(false);
    try {
      await resendOtp();
      o(true);

      setTimeout(() => o(false), 3000 /* 3e3 */);
    } catch (s) {
      if (K_1(s)) {
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

  const R = q(async () => {
    x(true);
    try {
      await resendOtp();
      u(false);
      o(true);

      setTimeout(() => o(false), 3000 /* 3e3 */);
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
      u(O_1, { onSubmit: M, onResend: A, disabled: I }),
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
export { Y as V };
