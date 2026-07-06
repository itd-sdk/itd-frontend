import { x, d, q, f, ab, ac, a as a_1, M, B as B_1 } from "./index-CFv_0Hh6.js";
import { O as O_1 } from "./index-DL9gK-0-.js";
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
      n._sentryDebugIds[r] = "f3dc1551-702e-4525-a739-e06c807ff42a";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-f3dc1551-702e-4525-a739-e06c807ff42a";
    }
  } catch {}
})();
const k = "xLdU";
const C = "cHM4";
const L = "QcNS";
const O = "H4NQ";
const H = "w36D";
const U = "KdUN";
const V = "c49F";
const F = "Vx8A";
const B = "Hf04";
const K = "IYnK";
const Q = "V3yN";

const a = {
  container: k,
  header: C,
  title: L,
  subtitle: O,
  error: H,
  success: U,
  backButton: V,
  expiredModal: F,
  expiredTitle: B,
  expiredText: K,
  expiredActions: Q,
};

function G({ email, onBack }) {
  const { verifyOtp, resendOtp } = x();
  const [E, t] = d(null);
  const [g, m] = d(false);
  const [I, d] = d(false);
  const [S, f] = d(false);
  const [y, x] = d(false);

  const _ = (s) =>
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
            f("/onboarding");
          } else {
            f("/");
          }
        } else if (i === "password_reset") {
          f("/reset-password");
        }
      } catch (i) {
        if (_(i)) {
          f(true);
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
    d(false);
    try {
      await resendOtp();
      d(true);

      setTimeout(() => d(false), 3000 /* 3e3 */);
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

  const D = q(async () => {
    x(true);
    try {
      await resendOtp();
      f(false);
      d(true);

      setTimeout(() => d(false), 3000 /* 3e3 */);
    } catch (s) {
      f(false);

      if (ab(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      x(false);
    }
  }, [resendOtp]);

  const N = q(() => {
    f(false);
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
      I &&
        a_1("div", {
          className: a.success,
          children: "Код отправлен повторно",
        }),
      a_1(O_1, { onSubmit: A, onResend: M, disabled: g }),
      onBack &&
        a_1("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      S &&
        a_1(M, {
          onClose: N,
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
                    onClick: N,
                    disabled: y,
                    children: "Нет, закрыть",
                  }),
                  a_1(B_1, {
                    onClick: D,
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
export { G as V };
