import { a as a_1, a_1 as a_1_1 } from "./index-DDCL-vHK.js";
import { I } from "./IconChevronLeft-Dk6onnGB.js";
(() => {
  try {
    const i =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    i.SENTRY_RELEASE = { id: "1.1.0" };
    const s = new i.Error().stack;

    if (s) {
      i._sentryDebugIds = i._sentryDebugIds || {};
      i._sentryDebugIds[s] = "1066e2e9-b21b-45ed-935a-8557b9d4dc39";
      i._sentryDebugIdIdentifier =
        "sentry-dbid-1066e2e9-b21b-45ed-935a-8557b9d4dc39";
    }
  } catch {}
})();
const l = "Kw80";
const n = "o5MP";
const a = "AKbT";
const d = "o5oC";
const r = "iUwG";
const h = "OKUI";
const m = "UpzJ";
const u = "H0LF";
const b = "IWZr";

const c = {
  legal: l,
  backButton: n,
  title: a,
  updated: d,
  section: r,
  sectionTitle: h,
  text: m,
  list: u,
  contact: b,
};

export function Cookies(i) {
  const s = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      a_1_1("/");
    }
  };
  return a_1("div", {
    className: c.legal,
    children: [
      a_1("button", {
        className: c.backButton,
        onClick: s,
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
                href: "mailto:nowkie.com@gmail.com",
                className: c.contact,
                children: "nowkie.com@gmail.com",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { Cookies as Cookies, Cookies as default };
