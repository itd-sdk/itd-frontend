import {
  w as w_1,
  d,
  u_1_1 as u_1,
  B as B_1,
  u_1 as u_1_1,
} from "./index-DBLtLuBZ.js";
import { I as I_1 } from "./IconChevronLeft-0Of1x6nI.js";
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
      c._sentryDebugIds[t] = "eefd4d7c-0160-4e45-9f5d-02045fc62e6b";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-eefd4d7c-0160-4e45-9f5d-02045fc62e6b";
    }
  } catch {}
})();
const N = "MUYJ";
const b = "bAEI";
const g = "lhDV";
const y = "MvK4";
const k = "d4Jf";
const v = "E15x";
const T = "Uh1P";
const w = "IX35";
const x = "EZaV";
const A = "lZor";
const B = "z1hp";
const E = "jlfp";
const I = "qMVK";
const D = "sUeh";

const n = {
  legal: N,
  backButton: b,
  title: g,
  updated: y,
  section: k,
  sectionTitle: v,
  text: T,
  list: w,
  contact: x,
  actions: A,
  confirmBlock: B,
  confirmText: E,
  confirmActions: I,
  error: D,
};

export function DeleteAccount(c) {
  const t = w_1((f) => f.deleteAccount);

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
    className: n.legal,
    children: [
      u_1("button", {
        className: n.backButton,
        onClick: d,
        children: [u_1(I_1, { size: 20 }), u_1("span", { children: "Назад" })],
      }),
      u_1("h1", { className: n.title, children: "Удаление аккаунта" }),
      u_1("p", { className: n.updated, children: "Приложение ИТД" }),
      u_1("section", {
        className: n.section,
        children: [
          u_1("h2", {
            className: n.sectionTitle,
            children: "Какие данные будут удалены",
          }),
          u_1("ul", {
            className: n.list,
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
        className: n.section,
        children: [
          u_1("h2", {
            className: n.sectionTitle,
            children: "Что может сохраняться",
          }),
          u_1("p", {
            className: n.text,
            children:
              "Некоторые данные могут быть сохранены в анонимизированном виде в соответствии с требованиями законодательства, безопасности или для предотвращения нарушений.",
          }),
        ],
      }),
      u_1("section", {
        className: n.section,
        children: [
          u_1("h2", { className: n.sectionTitle, children: "Восстановление" }),
          u_1("p", {
            className: n.text,
            children:
              "После удаления у вас будет 30 дней на восстановление аккаунта. Для этого просто войдите в приложение в течение этого периода. По истечении 30 дней аккаунт и данные будут удалены безвозвратно.",
          }),
        ],
      }),
      u_1("section", {
        className: n.section,
        children: [
          u_1("h2", {
            className: n.sectionTitle,
            children: "Связаться с нами",
          }),
          u_1("p", {
            className: n.text,
            children: [
              "Если у вас возникли вопросы, свяжитесь с нами:",
              " ",
              u_1("a", {
                href: "mailto:support@itd.fun",
                className: n.contact,
                children: "support@itd.fun",
              }),
            ],
          }),
        ],
      }),
      i === "info" &&
        u_1("div", {
          className: n.actions,
          children: u_1(B_1, {
            variant: "danger",
            onClick: () => s("confirm"),
            children: "Удалить аккаунт",
          }),
        }),
      i === "confirm" &&
        u_1("div", {
          className: n.confirmBlock,
          children: [
            u_1("p", {
              className: n.confirmText,
              children:
                "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
            }),
            o && u_1("p", { className: n.error, children: o }),
            u_1("div", {
              className: n.confirmActions,
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
          className: n.actions,
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
