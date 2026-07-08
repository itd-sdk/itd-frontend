import { x as x_1, d, a, B as B_1, x_1 as x_1_1 } from "./index-BewGW5_v.js";
import { I as I_1 } from "./IconChevronLeft-Cn8Oe6J-.js";
(() => {
  try {
    const c =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    c.SENTRY_RELEASE = { id: "1.1.2" };
    const t = new c.Error().stack;

    if (t) {
      c._sentryDebugIds = c._sentryDebugIds || {};
      c._sentryDebugIds[t] = "7fb2d6e7-cd74-4a73-a724-5eb3150932a5";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-7fb2d6e7-cd74-4a73-a724-5eb3150932a5";
    }
  } catch {}
})();
const p = "JJzy";
const b = "SDFD";
const g = "c4ib";
const y = "Ibm0";
const k = "RGOi";
const v = "D1OI";
const T = "iLON";
const w = "Rs0i";
const x = "X3N1";
const B = "s5Uk";
const D = "R3c8";
const I = "H9Jv";
const A = "uVB6";
const E = "uz90";

const n = {
  legal: p,
  backButton: b,
  title: g,
  updated: y,
  section: k,
  sectionTitle: v,
  text: T,
  list: w,
  contact: x,
  actions: B,
  confirmBlock: D,
  confirmText: I,
  confirmActions: A,
  error: E,
};

export function DeleteAccount(c) {
  const t = x_1((m) => m.deleteAccount);

  const [i, s] = d("info");
  const [o, a] = d(null);

  const d = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      x_1_1("/");
    }
  };

  const h = async () => {
    s("deleting");
    a(null);
    try {
      await t();
    } catch {
      a("Не удалось удалить аккаунт. Попробуйте позже.");
      s("confirm");
    }
  };

  return a("div", {
    className: n.legal,
    children: [
      a("button", {
        className: n.backButton,
        onClick: d,
        children: [a(I_1, { size: 20 }), a("span", { children: "Назад" })],
      }),
      a("h1", { className: n.title, children: "Удаление аккаунта" }),
      a("p", { className: n.updated, children: "Приложение ИТД" }),
      a("section", {
        className: n.section,
        children: [
          a("h2", {
            className: n.sectionTitle,
            children: "Какие данные будут удалены",
          }),
          a("ul", {
            className: n.list,
            children: [
              a("li", { children: "Профиль (имя, аватар, описание)" }),
              a("li", { children: "Публикации и комментарии" }),
              a("li", { children: "Подписки и подписчики" }),
              a("li", { children: "Уведомления" }),
              a("li", { children: "Загруженные файлы и медиа" }),
            ],
          }),
        ],
      }),
      a("section", {
        className: n.section,
        children: [
          a("h2", {
            className: n.sectionTitle,
            children: "Что может сохраняться",
          }),
          a("p", {
            className: n.text,
            children:
              "Некоторые данные могут быть сохранены в анонимизированном виде в соответствии с требованиями законодательства, безопасности или для предотвращения нарушений.",
          }),
        ],
      }),
      a("section", {
        className: n.section,
        children: [
          a("h2", { className: n.sectionTitle, children: "Восстановление" }),
          a("p", {
            className: n.text,
            children:
              "После удаления у вас будет 30 дней на восстановление аккаунта. Для этого просто войдите в приложение в течение этого периода. По истечении 30 дней аккаунт и данные будут удалены безвозвратно.",
          }),
        ],
      }),
      a("section", {
        className: n.section,
        children: [
          a("h2", { className: n.sectionTitle, children: "Связаться с нами" }),
          a("p", {
            className: n.text,
            children: [
              "Если у вас возникли вопросы, свяжитесь с нами:",
              " ",
              a("a", {
                href: "mailto:support@itd.fun",
                className: n.contact,
                children: "support@itd.fun",
              }),
            ],
          }),
        ],
      }),
      i === "info" &&
        a("div", {
          className: n.actions,
          children: a(B_1, {
            variant: "danger",
            onClick: () => s("confirm"),
            children: "Удалить аккаунт",
          }),
        }),
      i === "confirm" &&
        a("div", {
          className: n.confirmBlock,
          children: [
            a("p", {
              className: n.confirmText,
              children:
                "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
            }),
            o && a("p", { className: n.error, children: o }),
            a("div", {
              className: n.confirmActions,
              children: [
                a(B_1, {
                  variant: "secondary",
                  onClick: () => s("info"),
                  children: "Отмена",
                }),
                a(B_1, {
                  variant: "danger",
                  onClick: h,
                  children: "Удалить аккаунт",
                }),
              ],
            }),
          ],
        }),
      i === "deleting" &&
        a("div", {
          className: n.actions,
          children: a(B_1, {
            variant: "danger",
            disabled: true,
            loading: true,
            children: "Удаление...",
          }),
        }),
    ],
  });
}

export { DeleteAccount as DeleteAccount, DeleteAccount as default };
