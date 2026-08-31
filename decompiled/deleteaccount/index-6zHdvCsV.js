import {
  w as w_1,
  d,
  u_1_1 as u_1,
  B as B_1,
  u_1 as u_1_1,
} from "./index-ORJLmKGS.js";
import { I as I_1 } from "./IconChevronLeft-DN-Go-1D.js";
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
    c.SENTRY_RELEASE = { id: "1.1.3" };
    const t = new c.Error().stack;

    if (t) {
      c._sentryDebugIds = c._sentryDebugIds || {};
      c._sentryDebugIds[t] = "0a569dff-4b82-4e4c-a72c-1fd1f00066df";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-0a569dff-4b82-4e4c-a72c-1fd1f00066df";
    }
  } catch {}
})();
const N = "ygRu";
const g = "ndV2";
const b = "IzFx";
const y = "U0GB";
const k = "JOSc";
const v = "zaGe";
const w = "y2ga";
const T = "Ltg2";
const x = "hWzh";
const A = "AwXG";
const B = "AkDD";
const D = "QMHj";
const I = "tebU";
const E = "tSUb";

const n = {
  legal: N,
  backButton: g,
  title: b,
  updated: y,
  section: k,
  sectionTitle: v,
  text: w,
  list: T,
  contact: x,
  actions: A,
  confirmBlock: B,
  confirmText: D,
  confirmActions: I,
  error: E,
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
