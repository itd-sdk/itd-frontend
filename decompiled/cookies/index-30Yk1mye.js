import { a as a_1, f as f_1 } from "./index-DuQT229k.js";
import { I } from "./IconChevronLeft-CbQdWkHt.js";
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
    const i = new s.Error().stack;

    if (i) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[i] = "a5cba65f-dc04-4931-ad9a-19ff471b3025";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-a5cba65f-dc04-4931-ad9a-19ff471b3025";
    }
  } catch {}
})();
const l = "uGFB";
const o = "XHby";
const a = "jVnK";
const d = "wRGr";
const r = "nUxp";
const h = "pkbZ";
const f = "fDc5";
const u = "NdmM";
const m = "HDru";

const c = {
  legal: l,
  backButton: o,
  title: a,
  updated: d,
  section: r,
  sectionTitle: h,
  text: f,
  list: u,
  contact: m,
};

export function Cookies(s) {
  const i = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      f_1("/");
    }
  };
  return a_1("div", {
    className: c.legal,
    children: [
      a_1("button", {
        className: c.backButton,
        onClick: i,
        children: [a_1(I, { size: 20 }), a_1("span", { children: "Назад" })],
      }),
      a_1("h1", { className: c.title, children: "Политика cookies" }),
      a_1("p", {
        className: c.updated,
        children: "Последнее обновление: 5 февраля 2025",
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", {
            className: c.sectionTitle,
            children: "Какие cookies мы используем",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Мы используем только технические cookies, необходимые для работы сайта — чтобы вы оставались авторизованы. Без них вход в аккаунт невозможен.",
          }),
          a_1("p", {
            className: c.text,
            children: "Мы не используем рекламные или аналитические cookies.",
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", {
            className: c.sectionTitle,
            children: "Как управлять cookies",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Вы можете удалить или заблокировать cookies в настройках браузера:",
          }),
          a_1("ul", {
            className: c.list,
            children: [
              a_1("li", {
                children:
                  "Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie",
              }),
              a_1("li", {
                children:
                  "Firefox: Настройки → Приватность и Защита → Куки и данные сайтов",
              }),
              a_1("li", {
                children:
                  "Safari: Настройки → Конфиденциальность → Управление данными веб-сайтов",
              }),
            ],
          }),
          a_1("p", {
            className: c.text,
            children:
              "Если заблокируете все cookies — не сможете войти в аккаунт. Просто предупреждаем.",
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", {
            className: c.sectionTitle,
            children: "Что мы НЕ делаем",
          }),
          a_1("ul", {
            className: c.list,
            children: [
              a_1("li", { children: "Не используем рекламные cookies" }),
              a_1("li", { children: "Не отслеживаем вас на других сайтах" }),
              a_1("li", {
                children: "Не передаём данные cookies третьим лицам",
              }),
              a_1("li", {
                children: "Не используем cookies для профилирования",
              }),
            ],
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", { className: c.sectionTitle, children: "Вопросы" }),
          a_1("p", {
            className: c.text,
            children: [
              "Что-то непонятно? Пишите на ",
              a_1("a", {
                href: "mailto:support@itd.fun",
                className: c.contact,
                children: "support@itd.fun",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { Cookies as Cookies, Cookies as default };
