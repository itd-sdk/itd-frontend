import {
  x,
  d,
  q as q_1,
  f,
  aa,
  ab,
  a as a_1,
  M,
  B as B_1,
} from "./index-7xRaK15k.js";
import { O as O_1 } from "./index-i6WLEtuK.js";
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
      n._sentryDebugIds[r] = "713da633-2d32-4e5b-a992-cad3efcf3f7d";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-713da633-2d32-4e5b-a992-cad3efcf3f7d";
    }
  } catch {}
})();
const C = "DlNZ";
const k = "Hr3L";
const L = "GJYJ";
const O = "Ew42";
const j = "njw0";
const F = "m8a2";
const U = "CdFj";
const B = "s0Ul";
const H = "EfN9";
const V = "g8q7";
const q = "jjvS";

const a = {
  container: C,
  header: k,
  title: L,
  subtitle: O,
  error: j,
  success: F,
  backButton: U,
  expiredModal: B,
  expiredTitle: H,
  expiredText: V,
  expiredActions: q,
};

function Y({ email, onBack }) {
  const { verifyOtp, resendOtp } = x();
  const [E, t] = d(null);
  const [N, m] = d(false);
  const [I, l] = d(false);
  const [S, f] = d(false);
  const [y, w] = d(false);

  const _ = (s) =>
    aa(s)
      ? s.code === ab.MISSING_FLOW_TOKEN ||
        s.code === ab.UNAUTHORIZED ||
        (s.code === ab.BAD_REQUEST &&
          s.message?.toLowerCase().includes("flow token"))
      : false;

  const A = q_1(
    async (s) => {
      t(null);
      m(true);
      try {
        const d = await verifyOtp(s);

        if (d === "authenticated") {
          if (x.getState().status === "needs_profile") {
            f("/onboarding");
          } else {
            f("/");
          }
        } else if (d === "password_reset") {
          f("/reset-password");
        }
      } catch (d) {
        if (_(d)) {
          f(true);
        } else if (aa(d)) {
          switch (d.code) {
            case ab.OTP_INVALID: {
              t("Неверный код. Попробуйте снова");
              break;
            }
            case ab.RATE_LIMIT_EXCEEDED: {
              t("Слишком много попыток. Попробуйте позже");
              break;
            }
            default: {
              t(d.message || "Ошибка проверки кода");
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
    l(false);
    try {
      await resendOtp();
      l(true);

      setTimeout(() => l(false), 3000 /* 3e3 */);
    } catch (s) {
      if (aa(s)) {
        if (s.code === ab.RATE_LIMIT_EXCEEDED) {
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
      l(true);

      setTimeout(() => l(false), 3000 /* 3e3 */);
    } catch (s) {
      f(false);

      if (aa(s)) {
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
      I &&
        a_1("div", {
          className: a.success,
          children: "Код отправлен повторно",
        }),
      a_1(O_1, { onSubmit: A, onResend: D, disabled: N }),
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
