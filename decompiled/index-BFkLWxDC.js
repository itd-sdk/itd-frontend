import {
  Y as Y_1,
  aA as d_1,
  q,
  u as e_1,
  K as K_1,
  aA,
  u,
  M,
  B as B_1,
} from "./index-BuVp7kGl.js";
import { O as O_1 } from "./index-9BixCiVZ.js";
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
      n._sentryDebugIds[r] = "ea0debe8-2764-4415-9bb9-5091b31d461b";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-ea0debe8-2764-4415-9bb9-5091b31d461b";
    }
  } catch {}
})();
const O = "oG5o";
const k = "cSHE";
const C = "xbeV";
const L = "A3tz";
const F = "eI8s";
const U = "FUwD";
const V = "vNIx";
const B = "zc0T";
const G = "AO9E";
const H = "GSXx";
const K = "IZqK";

const a = {
  container: O,
  header: k,
  title: C,
  subtitle: L,
  error: F,
  success: U,
  backButton: V,
  expiredModal: B,
  expiredTitle: G,
  expiredText: H,
  expiredActions: K,
};

function Y({ email, onBack }) {
  const { verifyOtp, resendOtp } = Y_1();
  const [E, t] = d_1(null);
  const [g, m] = d_1(false);
  const [N, o] = d_1(false);
  const [S, u] = d_1(false);
  const [y, x] = d_1(false);

  const A = (s) =>
    K_1(s)
      ? s.code === aA.MISSING_FLOW_TOKEN ||
        s.code === aA.UNAUTHORIZED ||
        (s.code === aA.BAD_REQUEST &&
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

  const D = q(async () => {
    t(null);
    o(false);
    try {
      await resendOtp();
      o(true);

      setTimeout(() => o(false), 3000 /* 3e3 */);
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

  const M = q(async () => {
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
      u(O_1, { onSubmit: _, onResend: D, disabled: g }),
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
export { Y as V };
