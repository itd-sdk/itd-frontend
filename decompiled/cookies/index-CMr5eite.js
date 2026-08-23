import { u as u_1, u_1 as u_1_1 } from "./index-pEgBAsWz.js";
import { I } from "./IconChevronLeft-4Cj0xkqD.js";
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
      s._sentryDebugIds[i] = "3d0d7f1c-fed0-49cd-9797-43cd847cbedb";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-3d0d7f1c-fed0-49cd-9797-43cd847cbedb";
    }
  } catch {}
})();
const n = "VF8z";
const o = "ElEy";
const a = "sZGn";
const d = "q0xU";
const r = "ov9o";
const h = "XfeP";
const f = "cFv7";
const m = "XjCs";
const u = "YeX0";

const c = {
  legal: n,
  backButton: o,
  title: a,
  updated: d,
  section: r,
  sectionTitle: h,
  text: f,
  list: m,
  contact: u,
};

export function Cookies(s) {
  const i = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1_1("/");
    }
  };
  return u_1("div", {
    className: c.legal,
    children: [
      u_1("button", {
        className: c.backButton,
        onClick: i,
        children: [u_1(I, { size: 20 }), u_1("span", { children: "Назад" })],
      }),
      u_1("h1", { className: c.title, children: "Политика cookies" }),
      u_1("p", {
        className: c.updated,
        children: "Последнее обновление: 5 февраля 2025",
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", {
            className: c.sectionTitle,
            children: "Какие cookies мы используем",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Мы используем только технические cookies, необходимые для работы сайта — чтобы вы оставались авторизованы. Без них вход в аккаунт невозможен.",
          }),
          u_1("p", {
            className: c.text,
            children: "Мы не используем рекламные или аналитические cookies.",
          }),
        ],
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", {
            className: c.sectionTitle,
            children: "Как управлять cookies",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Вы можете удалить или заблокировать cookies в настройках браузера:",
          }),
          u_1("ul", {
            className: c.list,
            children: [
              u_1("li", {
                children:
                  "Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie",
              }),
              u_1("li", {
                children:
                  "Firefox: Настройки → Приватность и Защита → Куки и данные сайтов",
              }),
              u_1("li", {
                children:
                  "Safari: Настройки → Конфиденциальность → Управление данными веб-сайтов",
              }),
            ],
          }),
          u_1("p", {
            className: c.text,
            children:
              "Если заблокируете все cookies — не сможете войти в аккаунт. Просто предупреждаем.",
          }),
        ],
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", {
            className: c.sectionTitle,
            children: "Что мы НЕ делаем",
          }),
          u_1("ul", {
            className: c.list,
            children: [
              u_1("li", { children: "Не используем рекламные cookies" }),
              u_1("li", { children: "Не отслеживаем вас на других сайтах" }),
              u_1("li", {
                children: "Не передаём данные cookies третьим лицам",
              }),
              u_1("li", {
                children: "Не используем cookies для профилирования",
              }),
            ],
          }),
        ],
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", { className: c.sectionTitle, children: "Вопросы" }),
          u_1("p", {
            className: c.text,
            children: [
              "Что-то непонятно? Пишите на ",
              u_1("a", {
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
