import {
  x,
  d,
  q as q_1,
  f,
  ab,
  ac,
  a as a_1,
  M,
  B as B_1,
} from "./index-DuQT229k.js";
import { M as M_1 } from "./index-C8OsYe6v.js";
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
      n._sentryDebugIds[r] = "a78c2b46-f07b-4f9c-8137-beffa8c40203";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-a78c2b46-f07b-4f9c-8137-beffa8c40203";
    }
  } catch {}
})();
const C = "LaiW";
const v = "jVBd";
const k = "DZ2s";
const L = "Cglf";
const B = "hp1I";
const P = "mwOu";
const V = "O3yd";
const F = "APpQ";
const U = "qwf2";
const q = "PPYC";
const H = "Ow4t";

const a = {
  container: C,
  header: v,
  title: k,
  subtitle: L,
  error: B,
  success: P,
  backButton: V,
  expiredModal: F,
  expiredTitle: U,
  expiredText: q,
  expiredActions: H,
};

function Y({ email, onBack }) {
  const { verifyOtp, resendOtp } = x();
  const [E, t] = d(null);
  const [I, m] = d(false);
  const [N, d] = d(false);
  const [_, f] = d(false);
  const [y, w] = d(false);

  const S = (s) =>
    ab(s)
      ? s.code === ac.MISSING_FLOW_TOKEN ||
        s.code === ac.UNAUTHORIZED ||
        (s.code === ac.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const A = q_1(
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
        if (S(i)) {
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

  const D = q_1(async () => {
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

  const M = q_1(async () => {
    w(true);
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
      w(false);
    }
  }, [resendOtp]);

  const x = q_1(() => {
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
      N &&
        a_1("div", {
          className: a.success,
          children: "Код отправлен повторно",
        }),
      a_1(M_1, { onSubmit: A, onResend: D, disabled: I }),
      onBack &&
        a_1("button", {
          type: "button",
          className: a.backButton,
          onClick: onBack,
          children: "Назад",
        }),
      _ &&
        a_1(M, {
          onClose: x,
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
                    onClick: x,
                    disabled: y,
                    children: "Нет, закрыть",
                  }),
                  a_1(B_1, {
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
