import {
  ag,
  d,
  b as A_1,
  h,
  ah,
  q,
  u,
  af,
  ai,
  aj,
  A_1 as A_1_1,
  ak,
  w,
  al,
} from "./index-dnACTU3c.js";
import { C } from "./index-CiDq3Nyc.js";
import { P as P_1 } from "./index-CTpGM1z1.js";
import { p, s, s as s_1, b } from "./PhoneAccess.module-BmvgF3ui.js";
(() => {
  try {
    const s =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    s.SENTRY_RELEASE = { id: "1.1.2" };
    const l = new s.Error().stack;

    if (l) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[l] = "3fdc5a31-cea7-4df4-863e-ecaad6f8baf7";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-3fdc5a31-cea7-4df4-863e-ecaad6f8baf7";
    }
  } catch {}
})();
const Ce = 2;
const Ne = "phone_entry";

const Te = {
  LEGAL_CONTEXT_EXPIRED: true,
  LEGAL_DOCUMENTS_UPDATED: true,
  LEGAL_RECEIPT_EXPIRED: true,
  LEGAL_CONTEXT_INVALID: true,
  LEGAL_CONTEXT_USED: true,
};

const G = "Не удалось загрузить документы. Попробуйте ещё раз.";

const K = (s) => s instanceof ag && Object.hasOwn(Te, s.code);

function J(s) {
  return s instanceof ag
    ? K(s)
      ? "Документы обновились. Проверьте их и отправьте номер ещё раз."
      : s.code === "LEGAL_UNAVAILABLE"
      ? G
      : ""
    : "";
}
const Q = (s, l = Date.now()) => l >= s.expiresAt;
function ve(s, l) {
  if (!s || typeof s != "object") {
    return false;
  }
  const e = s;
  const e_bundle = e.bundle;
  return e.protocolVersion !== Ce ||
    typeof e.contextToken != "string" ||
    !e.contextToken ||
    typeof e.expiresAt != "number" ||
    !e_bundle ||
    e_bundle.flow !== l ||
    typeof e_bundle.submitLabel != "string" ||
    !e_bundle.submitLabel ||
    !Array.isArray(e_bundle.text) ||
    !e_bundle.text.length ||
    !Array.isArray(e_bundle.documents)
    ? false
    : e_bundle.text.every(
        (b) =>
          typeof b?.text == "string" &&
          (b.document === undefined ||
            e_bundle.documents.some(
              (w) =>
                w?.slug === b.document &&
                typeof w.url == "string" &&
                w.url.startsWith("/legal/")
            ))
      );
}
async function _e(s = Ne) {
  const l = await p(`/consent?flow=${encodeURIComponent(s)}`);
  if (!ve(l, s) || Q(l)) {
    throw new ag("LEGAL_UNAVAILABLE");
  }
  return l;
}
const Ie = (s) => ({
  protocolVersion: s.protocolVersion,
  contextToken: s.contextToken,
});

export function P(s) {
  const { intent } = s;
  const [e, c] = d("number");
  const [b, w] = d("ru");
  const [j, ee] = d("");
  const [C, te] = d("");
  const [D, d] = d("");
  const [ne, O] = d(false);
  const [u, X] = d(false);
  const P = A_1(false);
  const [y, se] = d("");
  const [N, T] = d("");
  const [f, R] = d(null);
  const [v, E] = d([]);
  const [m, _] = d("");
  const [M, q] = d("");
  const [re, S] = d(0);

  const [oe, ae] = d(() => Date.now());

  h(() => {
    const n = setInterval(() => ae(Date.now()), 1000 /* 1e3 */);
    return () => clearInterval(n);
  }, []);
  const h = Math.max(0, Math.ceil((re - oe) / 1000 /* 1e3 */));
  const g = !C && ah(b, j);
  const [p, W] = d(null);
  const [z, F] = d(false);
  const [ce, ie] = d("Получить код");
  const I = A_1(0);
  const U = A_1(null);

  const k = q(async () => {
    const n = ++I.current;
    try {
      const r = await _e();
      if (n !== I.current) {
        return;
      }
      W(r);
      ie(r.bundle.submitLabel);
    } catch {
      if (n === I.current) {
        F(true);
      }
    }
  }, []);

  const L = q(() => {
    W(null);
    F(false);
    k();
  }, [k]);

  h(() => {
    const n = I;
    k();

    return () => {
      n.current++;
    };
  }, [k]);

  const V = async (n) => {
    if (!P.current) {
      P.current = true;
      X(true);
      d("");
      try {
        await n();
      } catch (r) {
        d(J(r) || s_1(r) || ak(r));

        if (r instanceof ag && r.retryIn) {
          S(Date.now() + r.retryIn * 1000 /* 1e3 */);
        }
      } finally {
        P.current = false;
        X(false);
      }
    }
  };

  const $ = async () => {
    await w.getState().initialize();
    const n = w.getState().status;
    if (n !== "authenticated" && n !== "needs_profile") {
      throw new Error("Session unavailable");
    }

    if (n === "authenticated") {
      await al.syncIfAttached();
    }
  };

  const le = (n) => {
    O(false);
    const U_current = U.current;
    U.current = null;

    if (!!g) {
      if (!U_current) {
        d(G);
        L();
        return;
      }
      V(async () => {
        try {
          const i = await b.start(g, n, Ie(U_current));
          se(g);
          T(i.flowToken);
          R(i);
          E([]);
          c("code");
          S(Date.now() + i.retryIn * 1000 /* 1e3 */);
        } catch (i) {
          if (J(i)) {
            L();
          }

          throw i;
        }
      });
    }
  };

  const ue = (n) => {
    n.preventDefault();

    if (e === "number") {
      if (!g || h || u) {
        return;
      }
      if (!p || Q(p)) {
        L();
        return;
      }
      U.current = p;
      d("");
      O(true);
      return;
    }

    V(async () => {
      if (e === "code") {
        if (!f || v.join("").length !== f.codeLength) {
          return;
        }
        let r;
        try {
          r = await b.verify(y, N, v.join(""));
        } catch (i) {
          if (K(i)) {
            c("number");
            E([]);
            T("");
            R(null);
            L();
          }

          throw i;
        }
        if (r.step === "password" && r.flowToken) {
          T(r.flowToken);
          _("");
          c("password");
        } else if (r.accessToken) {
          await $();
        } else {
          throw new Error("Unexpected login response");
        }
      } else {
        if (
          e === "reset" &&
          (m !== M || !/^(?=.*[A-Za-z])(?=.*\d).{8,100}$/.test(m))
        ) {
          d("Пароли должны совпадать: от 8 символов, латинская буква и цифра.");
          return;
        }

        if (e === "reset") {
          await b.reset(y, N, m);
        } else {
          await b.password(y, N, m);
        }

        await $();
      }
    });
  };

  return u("div", {
    className: s.card,
    children: [
      u("div", { className: s.brand, children: u(af, {}) }),
      u("div", {
        className: s.symbol,
        children: u("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          children: [
            u("rect", { x: "6", y: "2", width: "12", height: "20", rx: "3" }),
            u("path", { d: "M10 5h4m-3 14h2" }),
          ],
        }),
      }),
      u("h1", {
        children:
          e === "number"
            ? intent === "sign-up"
              ? "Регистрация"
              : "Вход по телефону"
            : e === "code"
            ? "Подтвердите номер"
            : e === "reset"
            ? "Новый пароль"
            : "Облачный пароль",
      }),
      u("p", {
        className: s.description,
        children:
          e === "number"
            ? intent === "sign-up"
              ? "Создайте аккаунт по номеру телефона. Номер подтвердим проверочным кодом."
              : "Войдите или создайте аккаунт. Номер подтвердим проверочным кодом."
            : e === "code"
            ? f?.channel === "voice_call"
              ? "Ответьте на звонок: робот продиктует код."
              : f?.channel === "push"
              ? "Код отправлен в приложение ИТД."
              : f?.channel === "sms"
              ? "Введите код из сообщения."
              : "Введите последние цифры номера входящего звонка."
            : e === "password"
            ? "Для этого аккаунта включена дополнительная защита."
            : "Номер подтверждён. Задайте новый пароль для входа.",
      }),
      u("form", {
        className: s.form,
        onSubmit: ue,
        children: [
          e === "number"
            ? u(ai, {
                country: b,
                digits: j,
                disabled: u,
                error: C,
                onChange: (n, r, i) => {
                  w(n);
                  ee(r);
                  te(i);
                  d("");
                },
              })
            : u("span", { className: s.number, children: y }),
          e === "code" &&
            f &&
            u(aj, {
              value: v,
              length: f.codeLength,
              onChange: E,
              disabled: u,
              status: D ? "error" : "idle",
            }),
          (e === "password" || e === "reset") &&
            u("label", {
              className: s.field,
              children: [
                e === "reset" ? "Новый пароль" : "Облачный пароль",
                u("input", {
                  type: "password",
                  autoComplete:
                    e === "reset" ? "new-password" : "current-password",
                  maxLength: 100,
                  value: m,
                  onInput: (n) => _(n.currentTarget.value),
                  disabled: u,
                  required: true,
                }),
              ],
            }),
          e === "reset" &&
            u("label", {
              className: s.field,
              children: [
                "Повторите пароль",
                u("input", {
                  type: "password",
                  autoComplete: "new-password",
                  maxLength: 100,
                  value: M,
                  onInput: (n) => q(n.currentTarget.value),
                  disabled: u,
                  required: true,
                }),
              ],
            }),
          (D || C || (e === "number" && z)) &&
            u("p", {
              className: s.error,
              role: "alert",
              children: D || C || G,
            }),
          e === "number" &&
            z &&
            u("button", {
              className: s.link,
              type: "button",
              onClick: L,
              children: "Загрузить документы ещё раз",
            }),
          u(A_1_1, {
            type: "submit",
            fullWidth: true,
            size: "lg",
            loading: u,
            disabled:
              e === "number"
                ? !g || !!h || !p
                : e === "code"
                ? v.join("").length !== f?.codeLength
                : !m,
            children:
              e === "number"
                ? h
                  ? `Подождите ${h} с`
                  : ce
                : e === "code"
                ? "Продолжить"
                : e === "reset"
                ? "Сохранить и войти"
                : "Войти",
          }),
          e === "code" &&
            u("button", {
              className: s.link,
              type: "button",
              disabled: u || !!h,
              onClick: () => {
                V(async () => {
                  const n = await b.resend(y, N);
                  R(n);
                  E([]);
                  S(Date.now() + n.retryIn * 1000 /* 1e3 */);
                });
              },
              children: h ? `Повторить через ${h} с` : "Отправить код ещё раз",
            }),
          e === "password" &&
            u("button", {
              className: s.link,
              type: "button",
              disabled: u,
              onClick: () => {
                c("reset");
                _("");
                d("");
              },
              children: "Не помню пароль",
            }),
          e === "reset" &&
            u("a", {
              className: s.link,
              href: "/forgot-password",
              children: "Восстановить через почту",
            }),
          e === "number"
            ? s.intent === "sign-up"
              ? u("p", {
                  className: s.terms,
                  children: [
                    "Уже есть аккаунт? ",
                    u("a", { href: "/login", children: "Войти" }),
                  ],
                })
              : u("button", {
                  className: s.back,
                  type: "button",
                  disabled: u,
                  onClick: s.onBack,
                  children: "Вернуться ко входу по почте",
                })
            : u("button", {
                className: s.back,
                type: "button",
                disabled: u,
                onClick: () => {
                  c("number");
                  E([]);
                  _("");
                  q("");
                  T("");
                  d("");
                },
                children: "Другой номер телефона",
              }),
          (e === "password" || e === "reset") && u(P_1, {}),
        ],
      }),
      e === "number" &&
        p &&
        u("p", {
          className: s.terms,
          children: p.bundle.text.map((n, r) => {
            const i =
              n.document &&
              p.bundle.documents.find((de) => de.slug === n.document)?.url;
            return i
              ? u(
                  "a",
                  {
                    href: i,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: n.text,
                  },
                  r
                )
              : n.text;
          }),
        }),
      u(C, { isOpen: ne, onClose: () => O(false), onVerify: le }),
    ],
  });
}

export { P as P };
