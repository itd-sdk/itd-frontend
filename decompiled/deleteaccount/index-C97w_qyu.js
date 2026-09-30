import {
  Y,
  d,
  u_1_1 as u_1,
  B as B_1,
  u_1 as u_1_1,
} from "./index-BuVp7kGl.js";
import { I as I_1 } from "./IconChevronLeft-7q6BtY14.js";
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
      n._sentryDebugIds[t] = "b592a64c-b943-4e15-9002-c0067b9ec0e9";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-b592a64c-b943-4e15-9002-c0067b9ec0e9";
    }
  } catch {}
})();
const N = "O6ap";
const b = "QeKZ";
const g = "lkuI";
const y = "BTK5";
const T = "PWbM";
const k = "UsNv";
const v = "cXcT";
const B = "RfBU";
const w = "EFBJ";
const x = "AVTw";
const A = "YvIn";
const I = "xBNc";
const E = "lqFF";
const D = "w6lh";

const c = {
  legal: N,
  backButton: b,
  title: g,
  updated: y,
  section: T,
  sectionTitle: k,
  text: v,
  list: B,
  contact: w,
  actions: x,
  confirmBlock: A,
  confirmText: I,
  confirmActions: E,
  error: D,
};

export function DeleteAccount(n) {
  const t = Y((m) => m.deleteAccount);

  const [i, s] = d("info");
  const [o, a] = d(null);

  const d = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1_1("/");
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
