import {
  a as a_1,
  d,
  q,
  $,
  o,
  r,
  q as q_1,
  M,
  B as B_1,
} from "./index-AoERIL5v.js";
import { M as M_1 } from "./index-CkoXlyAD.js";
const k = "ez7H";
const v = "lQx7";
const L = "aMQM";
const D = "hAZL";
const H = "RC7H";
const U = "wmvL";
const B = "OXTR";
const F = "YzUH";
const Q = "huZn";
const V = "Nj7U";
const X = "AyYk";

const a = {
  container: k,
  header: v,
  title: L,
  subtitle: D,
  error: H,
  success: U,
  backButton: B,
  expiredModal: F,
  expiredTitle: Q,
  expiredText: V,
  expiredActions: X,
};

function j({ email, onBack }) {
  const { verifyOtp, resendOtp } = a_1();
  const [m, t] = d(null);
  const [M, E] = d(false);
  const [A, i] = d(false);
  const [I, d] = d(false);
  const [x, T] = d(false);

  const R = (s) =>
    resendOtp(s)
      ? s.code === r.MISSING_FLOW_TOKEN ||
        s.code === r.UNAUTHORIZED ||
        (s.code === r.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const S = q(
    async (s) => {
      t(null);
      E(true);
      try {
        const r = await verifyOtp(s);

        if (r === "authenticated") {
          if (a_1.getState().status === "needs_profile") {
            $("/onboarding");
          } else {
            $("/");
          }
        } else if (r === "password_reset") {
          $("/reset-password");
        }
      } catch (r) {
        if (R(r)) {
          d(true);
        } else if (resendOtp(r)) {
          switch (r.code) {
            case r.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case r.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              t(r.message || "Ошибка проверки кода");
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

  const g = q(async () => {
    t(null);
    i(false);
    try {
      await resendOtp();
      i(true);

      setTimeout(() => i(false), 3000 /* 3e3 */);
    } catch (s) {
      if (resendOtp(s)) {
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

  const C = q(async () => {
    T(true);
    try {
      await resendOtp();
      d(false);
      i(true);

      setTimeout(() => i(false), 3000 /* 3e3 */);
    } catch (s) {
      d(false);

      if (resendOtp(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      T(false);
    }
  }, [resendOtp]);

  const b = q(() => {
    d(false);
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
      A &&
        q_1("div", {
          className: a.success,
          children: "Код отправлен повторно",
        }),
      q_1(M_1, { onSubmit: S, onResend: g, disabled: M }),
      onBack &&
        q_1("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      I &&
        q_1(M, {
          onClose: b,
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
                    onClick: b,
                    disabled: x,
                    children: "Нет, закрыть",
                  }),
                  q_1(B_1, {
                    onClick: C,
                    disabled: x,
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
export { j as V };
