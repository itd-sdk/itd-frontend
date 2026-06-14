import {
  x,
  ac as d_1,
  q,
  q as q_1,
  ab,
  ac,
  a as a_1,
  M,
  B as B_1,
} from "./index-BAlLDjSl.js";
import { O as O_1 } from "./index-BP5ArN5c.js";
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
      n._sentryDebugIds[r] = "b083a2ae-b25f-4800-a1af-433677de247b";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-b083a2ae-b25f-4800-a1af-433677de247b";
    }
  } catch {}
})();
const L = "U6fW";
const k = "YlUb";
const C = "dN4t";
const O = "e0A9";
const U = "xWQK";
const F = "eLMQ";
const B = "ywZ2";
const Q = "Ihtq";
const V = "rZxe";
const W = "yeeX";
const X = "Fm0L";

const a = {
  container: L,
  header: k,
  title: C,
  subtitle: O,
  error: U,
  success: F,
  backButton: B,
  expiredModal: Q,
  expiredTitle: V,
  expiredText: W,
  expiredActions: X,
};

function K({ email, onBack }) {
  const { verifyOtp, resendOtp } = x();
  const [E, t] = d_1(null);
  const [I, m] = d_1(false);
  const [N, l] = d_1(false);
  const [_, u] = d_1(false);
  const [y, x] = d_1(false);

  const S = (s) =>
    ab(s)
      ? s.code === ac.MISSING_FLOW_TOKEN ||
        s.code === ac.UNAUTHORIZED ||
        (s.code === ac.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const A = q(
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
        if (S(i)) {
          u(true);
        } else if (ab(i)) {
          switch (i.code) {
            case ac.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case ac.RATE_LIMIT_EXCEEDED: {
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

  const M = q(async () => {
    t(null);
    l(false);
    try {
      await resendOtp();
      l(true);

      setTimeout(() => l(false), 3000 /* 3e3 */);
    } catch (s) {
      if (ab(s)) {
        if (s.code === ac.RATE_LIMIT_EXCEEDED) {
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
      l(true);

      setTimeout(() => l(false), 3000 /* 3e3 */);
    } catch (s) {
      u(false);

      if (ab(s)) {
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
      a_1(O_1, { onSubmit: A, onResend: M, disabled: I }),
      onBack &&
        a_1("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      _ &&
        a_1(M, {
          onClose: T,
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
                    onClick: T,
                    disabled: y,
                    children: "Нет, закрыть",
                  }),
                  a_1(B_1, {
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
export { K as V };
