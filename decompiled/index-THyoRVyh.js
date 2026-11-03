import { a as a_1, d, q, $, o, r, u, M, B as B_1 } from "./index-GOT6tyDH.js";
import { O as O_1 } from "./index-B6C6UwNl.js";
(() => {
  try {
    const i =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    i.SENTRY_RELEASE = { id: "1.1.2" };
    const d = new i.Error().stack;

    if (d) {
      i._sentryDebugIds = i._sentryDebugIds || {};
      i._sentryDebugIds[d] = "6c1dcd80-d776-4c60-a63b-1a8aab2fca77";
      i._sentryDebugIdIdentifier =
        "sentry-dbid-6c1dcd80-d776-4c60-a63b-1a8aab2fca77";
    }
  } catch {}
})();
const k = "wnLI";
const C = "FGSL";
const O = "k1YS";
const F = "sL3N";
const V = "HZDy";
const B = "Dl29";
const G = "SiMo";
const H = "vd8m";
const U = "csl6";
const Y = "Ait0";
const W = "TVgY";

const a = {
  container: k,
  header: C,
  title: O,
  subtitle: F,
  error: V,
  success: B,
  backButton: G,
  expiredModal: H,
  expiredTitle: U,
  expiredText: Y,
  expiredActions: W,
};

function K({ email, onBack, onLegalError }) {
  const { verifyOtp, resendOtp } = a_1();
  const [E, t] = onBack(null);
  const [N, y] = onBack(false);
  const [S, r] = onBack(false);
  const [_, h] = onBack(false);
  const [T, w] = onBack(false);

  const A = (s) =>
    o(s)
      ? s.code === r.MISSING_FLOW_TOKEN ||
        s.code === r.UNAUTHORIZED ||
        (s.code === r.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const D = q(
    async (s) => {
      t(null);
      y(true);
      try {
        const n = await verifyOtp(s);

        if (n === "authenticated") {
          if (a_1.getState().status === "needs_profile") {
            $("/onboarding");
          } else {
            $("/");
          }
        } else if (n === "password_reset") {
          $("/reset-password");
        }
      } catch (n) {
        if (o(n) && n.code.startsWith("LEGAL_") && onLegalError) {
          onLegalError(n.code);
        } else if (A(n)) {
          h(true);
        } else if (o(n)) {
          switch (n.code) {
            case r.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case r.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              t(n.message || "Ошибка проверки кода");
            }
          }
        } else {
          t("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        y(false);
      }
    },
    [verifyOtp, onLegalError]
  );

  const M = q(async () => {
    t(null);
    r(false);
    try {
      await resendOtp();
      r(true);

      setTimeout(() => r(false), 3000 /* 3e3 */);
    } catch (s) {
      if (o(s)) {
        if (s.code === r.RATE_LIMIT_EXCEEDED) {
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
    w(true);
    try {
      await resendOtp();
      h(false);
      r(true);

      setTimeout(() => r(false), 3000 /* 3e3 */);
    } catch (s) {
      h(false);

      if (o(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      w(false);
    }
  }, [resendOtp]);

  const x = q(() => {
    h(false);
    onBack?.();
  }, [onBack]);

  return onLegalError("div", {
    className: a.container,
    children: [
      onLegalError("div", {
        className: a.header,
        children: [
          onLegalError("h1", {
            className: a.title,
            children: "Подтверждение действия",
          }),
          onLegalError("p", {
            className: a.subtitle,
            children: [
              "Мы отправили шестизначный код на почту ",
              email,
              ", чтобы убедиться, что вы – настоящий её владелец.",
            ],
          }),
        ],
      }),
      E && onLegalError("div", { className: a.error, children: E }),
      S &&
        onLegalError("div", {
          className: a.success,
          children: "Код отправлен повторно",
        }),
      onLegalError(O_1, { onSubmit: D, onResend: M, disabled: N }),
      onBack &&
        onLegalError("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      _ &&
        onLegalError(M, {
          onClose: x,
          showHeader: false,
          children: onLegalError("div", {
            className: a.expiredModal,
            children: [
              onLegalError("h2", {
                className: a.expiredTitle,
                children: "Время истекло",
              }),
              onLegalError("p", {
                className: a.expiredText,
                children:
                  "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?",
              }),
              onLegalError("div", {
                className: a.expiredActions,
                children: [
                  onLegalError(B_1, {
                    variant: "secondary",
                    onClick: x,
                    disabled: T,
                    children: "Нет, закрыть",
                  }),
                  onLegalError(B_1, {
                    onClick: R,
                    disabled: T,
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
