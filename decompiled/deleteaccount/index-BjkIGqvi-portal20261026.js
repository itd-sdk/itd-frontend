import {
  a,
  d,
  $ as u_1,
  B as B_1,
  $,
} from "./index-BQxlThnW-portal20261026.js";
import { I as I_1 } from "./IconChevronLeft-DWLxrxwS-portal20261026.js";
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
    const t = new n.Error().stack;

    if (t) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[t] = "6dbccd80-c75c-4075-9660-b07b50bbf889";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-6dbccd80-c75c-4075-9660-b07b50bbf889";
    }
  } catch {}
})();
const b = "tkCn";
const p = "smx3";
const g = "Xy4m";
const y = "L2V0";
const k = "ANPz";
const v = "P3qJ";
const T = "GgNf";
const w = "ahoz";
const x = "PBzh";
const B = "Oe5U";
const A = "r0Mi";
const I = "l5gt";
const C = "QyHa";
const D = "LmYn";

const c = {
  legal: b,
  backButton: p,
  title: g,
  updated: y,
  section: k,
  sectionTitle: v,
  text: T,
  list: w,
  contact: x,
  actions: B,
  confirmBlock: A,
  confirmText: I,
  confirmActions: C,
  error: D,
};

export function DeleteAccount(n) {
  const t = a((m) => m.deleteAccount);

  const [i, s] = d("info");
  const [o, a] = d(null);

  const d = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
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

  return u_1("div", {
    className: c.legal,
    children: [
      u_1("button", {
        className: c.backButton,
        onClick: d,
        children: [u_1(I_1, { size: 20 }), u_1("span", { children: "Назад" })],
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
            onClick: () => s("confirm"),
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
            o && u_1("p", { className: c.error, children: o }),
            u_1("div", {
              className: c.confirmActions,
              children: [
                u_1(B_1, {
                  variant: "secondary",
                  onClick: () => s("info"),
                  children: "Отмена",
                }),
                u_1(B_1, {
                  variant: "danger",
                  onClick: h,
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
