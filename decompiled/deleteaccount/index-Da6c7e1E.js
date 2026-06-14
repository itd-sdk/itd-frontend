import { x as x_1, d, a, B as B_1, x_1 as x_1_1 } from "./index-BAlLDjSl.js";
import { I as I_1 } from "./IconChevronLeft-DL9-Okiv.js";
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
    const t = new n.Error().stack;

    if (t) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[t] = "e8b29140-6898-4322-bdc1-53b0d143aab4";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-e8b29140-6898-4322-bdc1-53b0d143aab4";
    }
  } catch {}
})();
const b = "UPl0";
const p = "yTrU";
const g = "ItsQ";
const y = "rWmc";
const k = "O66y";
const T = "MeOP";
const v = "GUGm";
const w = "KRPP";
const x = "PYh3";
const A = "zZJ0";
const B = "V5Au";
const I = "iJTJ";
const D = "p7SO";
const E = "hGDh";

const c = {
  legal: b,
  backButton: p,
  title: g,
  updated: y,
  section: k,
  sectionTitle: T,
  text: v,
  list: w,
  contact: x,
  actions: A,
  confirmBlock: B,
  confirmText: I,
  confirmActions: D,
  error: E,
};

export function DeleteAccount(n) {
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
    className: c.legal,
    children: [
      a("button", {
        className: c.backButton,
        onClick: d,
        children: [a(I_1, { size: 20 }), a("span", { children: "Назад" })],
      }),
      a("h1", { className: c.title, children: "Удаление аккаунта" }),
      a("p", { className: c.updated, children: "Приложение ИТД" }),
      a("section", {
        className: c.section,
        children: [
          a("h2", {
            className: c.sectionTitle,
            children: "Какие данные будут удалены",
          }),
          a("ul", {
            className: c.list,
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
        className: c.section,
        children: [
          a("h2", {
            className: c.sectionTitle,
            children: "Что может сохраняться",
          }),
          a("p", {
            className: c.text,
            children:
              "Некоторые данные могут быть сохранены в анонимизированном виде в соответствии с требованиями законодательства, безопасности или для предотвращения нарушений.",
          }),
        ],
      }),
      a("section", {
        className: c.section,
        children: [
          a("h2", { className: c.sectionTitle, children: "Восстановление" }),
          a("p", {
            className: c.text,
            children:
              "После удаления у вас будет 30 дней на восстановление аккаунта. Для этого просто войдите в приложение в течение этого периода. По истечении 30 дней аккаунт и данные будут удалены безвозвратно.",
          }),
        ],
      }),
      a("section", {
        className: c.section,
        children: [
          a("h2", { className: c.sectionTitle, children: "Связаться с нами" }),
          a("p", {
            className: c.text,
            children: [
              "Если у вас возникли вопросы, свяжитесь с нами:",
              " ",
              a("a", {
                href: "mailto:nowkie.com@gmail.com",
                className: c.contact,
                children: "nowkie.com@gmail.com",
              }),
            ],
          }),
        ],
      }),
      i === "info" &&
        a("div", {
          className: c.actions,
          children: a(B_1, {
            variant: "danger",
            onClick: () => s("confirm"),
            children: "Удалить аккаунт",
          }),
        }),
      i === "confirm" &&
        a("div", {
          className: c.confirmBlock,
          children: [
            a("p", {
              className: c.confirmText,
              children:
                "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
            }),
            o && a("p", { className: c.error, children: o }),
            a("div", {
              className: c.confirmActions,
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
          className: c.actions,
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
