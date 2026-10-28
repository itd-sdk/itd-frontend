import { a, d, $ as u_1, B as B_1, $ } from "./index-AoERIL5v.js";
import { DeleteAccount as DeleteAccount_1 } from "./IconChevronLeft-esjxi0mx.js";
const N = "ASuR";
const p = "jxeu";
const k = "ifxH";
const v = "S3Qi";
const x = "W5S1";
const g = "EWot";
const T = "dZXu";
const B = "UD12";
const A = "LuzT";
const b = "NGwk";
const w = "ZUzC";
const y = "ndDv";
const C = "Javq";
const S = "RYkp";

const c = {
  legal: N,
  backButton: p,
  title: k,
  updated: v,
  section: x,
  sectionTitle: g,
  text: T,
  list: B,
  contact: A,
  actions: b,
  confirmBlock: w,
  confirmText: y,
  confirmActions: C,
  error: S,
};

export function DeleteAccount(D) {
  const a = a((h) => h.deleteAccount);

  const [i, n] = d("info");
  const [s, l] = d(null);

  const r = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };

  const d = async () => {
    n("deleting");
    l(null);
    try {
      await a();
    } catch {
      l("Не удалось удалить аккаунт. Попробуйте позже.");
      n("confirm");
    }
  };

  return u_1("div", {
    className: c.legal,
    children: [
      u_1("button", {
        className: c.backButton,
        onClick: r,
        children: [
          u_1(DeleteAccount_1, { size: 20 }),
          u_1("span", { children: "Назад" }),
        ],
      }),
      u_1("h1", { className: c.title, children: "Удаление аккаунта" }),
      u_1("p", { className: c.updated, children: "Приложение ИТД" }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", {
            className: c.sectionTitle,
            children: "Какие данные будут удалены",
          }),
          u_1("ul", {
            className: c.list,
            children: [
              u_1("li", { children: "Профиль (имя, аватар, описание)" }),
              u_1("li", { children: "Публикации и комментарии" }),
              u_1("li", { children: "Подписки и подписчики" }),
              u_1("li", { children: "Уведомления" }),
              u_1("li", { children: "Загруженные файлы и медиа" }),
            ],
          }),
        ],
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", {
            className: c.sectionTitle,
            children: "Что может сохраняться",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Некоторые данные могут быть сохранены в анонимизированном виде в соответствии с требованиями законодательства, безопасности или для предотвращения нарушений.",
          }),
        ],
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", { className: c.sectionTitle, children: "Восстановление" }),
          u_1("p", {
            className: c.text,
            children:
              "После удаления у вас будет 30 дней на восстановление аккаунта. Для этого просто войдите в приложение в течение этого периода. По истечении 30 дней аккаунт и данные будут удалены безвозвратно.",
          }),
        ],
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", {
            className: c.sectionTitle,
            children: "Связаться с нами",
          }),
          u_1("p", {
            className: c.text,
            children: [
              "Если у вас возникли вопросы, свяжитесь с нами:",
              " ",
              u_1("a", {
                href: "mailto:support@itd.fun",
                className: c.contact,
                children: "support@itd.fun",
              }),
            ],
          }),
        ],
      }),
      i === "info" &&
        u_1("div", {
          className: c.actions,
          children: u_1(B_1, {
            variant: "danger",
            onClick: () => n("confirm"),
            children: "Удалить аккаунт",
          }),
        }),
      i === "confirm" &&
        u_1("div", {
          className: c.confirmBlock,
          children: [
            u_1("p", {
              className: c.confirmText,
              children:
                "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
            }),
            s && u_1("p", { className: c.error, children: s }),
            u_1("div", {
              className: c.confirmActions,
              children: [
                u_1(B_1, {
                  variant: "secondary",
                  onClick: () => n("info"),
                  children: "Отмена",
                }),
                u_1(B_1, {
                  variant: "danger",
                  onClick: d,
                  children: "Удалить аккаунт",
                }),
              ],
            }),
          ],
        }),
      i === "deleting" &&
        u_1("div", {
          className: c.actions,
          children: u_1(B_1, {
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
