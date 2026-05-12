import {
  w,
  d,
  q as q_1,
  a_1 as e_1,
  a8,
  a9,
  a as a_1,
  M,
  B as B_1,
} from "./index-DDCL-vHK.js";
import { O as O_1 } from "./index-Bt-cCGG-.js";
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
    n.SENTRY_RELEASE = { id: "1.1.0" };
    const r = new n.Error().stack;

    if (r) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[r] = "3ca849dd-6e2c-4dac-a9cb-44022a614c3e";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-3ca849dd-6e2c-4dac-a9cb-44022a614c3e";
    }
  } catch {}
})();
const v = "quZn";
const C = "oU2z";
const L = "yx3m";
const O = "LBBy";
const X = "Ay0l";
const B = "rkwX";
const F = "zXWF";
const U = "ucsa";
const V = "SiXG";
const q = "eaAj";
const z = "IlsX";

const a = {
  container: v,
  header: C,
  title: L,
  subtitle: O,
  error: X,
  success: B,
  backButton: F,
  expiredModal: U,
  expiredTitle: V,
  expiredText: q,
  expiredActions: z,
};

function Z({ email, onBack }) {
  const { verifyOtp, resendOtp } = w();
  const [y, t] = d(null);
  const [I, E] = d(false);
  const [N, d] = d(false);
  const [S, u] = d(false);
  const [m, w] = d(false);

  const _ = (s) =>
    a8(s)
      ? s.code === a9.MISSING_FLOW_TOKEN ||
        s.code === a9.UNAUTHORIZED ||
        (s.code === a9.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const A = q_1(
    async (s) => {
      t(null);
      E(true);
      try {
        const c = await verifyOtp(s);

        if (c === "authenticated") {
          if (w.getState().status === "needs_profile") {
            e_1("/onboarding");
          } else {
            e_1("/");
          }
        } else if (c === "password_reset") {
          e_1("/reset-password");
        }
      } catch (c) {
        if (_(c)) {
          u(true);
        } else if (a8(c)) {
          switch (c.code) {
            case a9.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case a9.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              t(c.message || "Ошибка проверки кода");
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

  const M = q_1(async () => {
    t(null);
    d(false);
    try {
      await resendOtp();
      d(true);

      setTimeout(() => d(false), 3000 /* 3e3 */);
    } catch (s) {
      if (a8(s)) {
        if (s.code === a9.RATE_LIMIT_EXCEEDED) {
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
    w(true);
    try {
      await resendOtp();
      u(false);
      d(true);

      setTimeout(() => d(false), 3000 /* 3e3 */);
    } catch (s) {
      u(false);

      if (a8(s)) {
        t(s.message || "Не удалось отправить код");
      } else {
        t("Произошла ошибка. Попробуйте позже");
      }
    } finally {
      w(false);
    }
  }, [resendOtp]);

  const x = q_1(() => {
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
      y && a_1("div", { className: a.error, children: y }),
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
      S &&
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
                    disabled: m,
                    children: "Нет, закрыть",
                  }),
                  a_1(B_1, {
                    onClick: R,
                    disabled: m,
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
export { Z as V };
