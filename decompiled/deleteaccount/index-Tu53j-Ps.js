import { x as x_1, d, a, B as B_1, x_1 as x_1_1 } from "./index-BCnJB3wz.js";
import { I as I_1 } from "./IconChevronLeft-WQg0EXIc.js";
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
      n._sentryDebugIds[t] = "80b03d42-a91f-4910-9817-1b0d41050633";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-80b03d42-a91f-4910-9817-1b0d41050633";
    }
  } catch {}
})();
const p = "Ol3H";
const b = "C0XX";
const g = "pcOF";
const k = "cGGm";
const y = "v7YR";
const v = "Ni18";
const w = "CGXs";
const T = "vAoC";
const B = "jnFF";
const x = "OGBj";
const A = "b7Dj";
const C = "W3Sr";
const D = "bjYc";
const I = "NDkB";

const c = {
  legal: p,
  backButton: b,
  title: g,
  updated: k,
  section: y,
  sectionTitle: v,
  text: w,
  list: T,
  contact: B,
  actions: x,
  confirmBlock: A,
  confirmText: C,
  confirmActions: D,
  error: I,
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
