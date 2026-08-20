import {
  w,
  d,
  q,
  q_1 as e_1,
  x,
  ae,
  q as q_1,
  M,
  B as B_1,
} from "./index-DDTOXJaD.js";
import { O as O_1 } from "./index-CtrmDHPu.js";
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
      n._sentryDebugIds[r] = "3fea5782-749f-41a7-9bc8-b4f3b7f9148e";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-3fea5782-749f-41a7-9bc8-b4f3b7f9148e";
    }
  } catch {}
})();
const v = "o6yQ";
const C = "KArM";
const O = "edwS";
const L = "lKRP";
const F = "RP3a";
const B = "Ye4I";
const H = "HWmF";
const K = "C2qi";
const P = "wDks";
const Q = "nOgQ";
const U = "mpxr";

const a = {
  container: v,
  header: C,
  title: O,
  subtitle: L,
  error: F,
  success: B,
  backButton: H,
  expiredModal: K,
  expiredTitle: P,
  expiredText: Q,
  expiredActions: U,
};

export function V({ email, onBack }) {
  const { verifyOtp, resendOtp } = w();
  const [m, t] = d(null);
  const [I, E] = d(false);
  const [N, l] = d(false);
  const [S, f] = d(false);
  const [y, w] = d(false);

  const _ = (s) =>
    x(s)
      ? s.code === ae.MISSING_FLOW_TOKEN ||
        s.code === ae.UNAUTHORIZED ||
        (s.code === ae.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const R = q(
    async (s) => {
      t(null);
      E(true);
      try {
        const i = await verifyOtp(s);

        if (i === "authenticated") {
          if (w.getState().status === "needs_profile") {
            e_1("/onboarding");
          } else {
            e_1("/");
          }
        } else if (i === "password_reset") {
          e_1("/reset-password");
        }
      } catch (i) {
        if (_(i)) {
          f(true);
        } else if (x(i)) {
          switch (i.code) {
            case ae.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case ae.RATE_LIMIT_EXCEEDED: {
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
        E(false);
      }
    },
    [verifyOtp]
  );

  const A = q(async () => {
    t(null);
    l(false);
    try {
      await resendOtp();
      l(true);

      setTimeout(() => l(false), 3000 /* 3e3 */);
    } catch (s) {
      if (x(s)) {
        if (s.code === ae.RATE_LIMIT_EXCEEDED) {
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
    w(true);
    try {
      await resendOtp();
      f(false);
      l(true);

      setTimeout(() => l(false), 3000 /* 3e3 */);
    } catch (s) {
      f(false);

      if (x(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      w(false);
    }
  }, [resendOtp]);

  const x = q(() => {
    f(false);
    onBack?.();
  }, [onBack]);

  return q_1("div", {
    className: a.container,
    children: [
      q_1("div", {
        className: a.header,
        children: [
          q_1("h1", { className: a.title, children: "Подтверждение действия" }),
          q_1("p", {
            className: a.subtitle,
            children: [
              "Мы отправили шестизначный код на почту ",
              email,
              ", чтобы убедиться, что вы – настоящий её владелец.",
            ],
          }),
        ],
      }),
      m && q_1("div", { className: a.error, children: m }),
      N &&
        q_1("div", {
          className: a.success,
          children: "Код отправлен повторно",
        }),
      q_1(O_1, { onSubmit: R, onResend: A, disabled: I }),
      onBack &&
        q_1("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      S &&
        q_1(M, {
          onClose: x,
          showHeader: false,
          children: q_1("div", {
            className: a.expiredModal,
            children: [
              q_1("h2", {
                className: a.expiredTitle,
                children: "Время истекло",
              }),
              q_1("p", {
                className: a.expiredText,
                children:
                  "Прошло слишком много времени, и прошлый код больше не действителен. Отправить новый код?",
              }),
              q_1("div", {
                className: a.expiredActions,
                children: [
                  q_1(B_1, {
                    variant: "secondary",
                    onClick: x,
                    disabled: y,
                    children: "Нет, закрыть",
                  }),
                  q_1(B_1, {
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
