import { u, $ } from "./index-AoERIL5v.js";
import { I } from "./IconChevronLeft-esjxi0mx.js";
const l = "OjWx";
const o = "TyEc";
const n = "lMcu";
const a = "aUP4";
const r = "WLvb";
const d = "e8rS";
const h = "ZyEq";
const m = "cpHM";
const p = "V5eT";

const c = {
  legal: l,
  backButton: o,
  title: n,
  updated: a,
  section: r,
  sectionTitle: d,
  text: h,
  list: m,
  contact: p,
};

export function Cookies(N) {
  const s = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };
  return u("div", {
    className: c.legal,
    children: [
      u("button", {
        className: c.backButton,
        onClick: s,
        children: [u(I, { size: 20 }), u("span", { children: "Назад" })],
      }),
      u("h1", { className: c.title, children: "Политика cookies" }),
      u("p", {
        className: c.updated,
        children: "Последнее обновление: 5 февраля 2025",
      }),
      u("section", {
        className: c.section,
        children: [
          u("h2", {
            className: c.sectionTitle,
            children: "Какие cookies мы используем",
          }),
          u("p", {
            className: c.text,
            children:
              "Мы используем только технические cookies, необходимые для работы сайта — чтобы вы оставались авторизованы. Без них вход в аккаунт невозможен.",
          }),
          u("p", {
            className: c.text,
            children: "Мы не используем рекламные или аналитические cookies.",
          }),
        ],
      }),
      u("section", {
        className: c.section,
        children: [
          u("h2", {
            className: c.sectionTitle,
            children: "Как управлять cookies",
          }),
          u("p", {
            className: c.text,
            children:
              "Вы можете удалить или заблокировать cookies в настройках браузера:",
          }),
          u("ul", {
            className: c.list,
            children: [
              u("li", {
                children:
                  "Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie",
              }),
              u("li", {
                children:
                  "Firefox: Настройки → Приватность и Защита → Куки и данные сайтов",
              }),
              u("li", {
                children:
                  "Safari: Настройки → Конфиденциальность → Управление данными веб-сайтов",
              }),
            ],
          }),
          u("p", {
            className: c.text,
            children:
              "Если заблокируете все cookies — не сможете войти в аккаунт. Просто предупреждаем.",
          }),
        ],
      }),
      u("section", {
        className: c.section,
        children: [
          u("h2", { className: c.sectionTitle, children: "Что мы НЕ делаем" }),
          u("ul", {
            className: c.list,
            children: [
              u("li", { children: "Не используем рекламные cookies" }),
              u("li", { children: "Не отслеживаем вас на других сайтах" }),
              u("li", { children: "Не передаём данные cookies третьим лицам" }),
              u("li", { children: "Не используем cookies для профилирования" }),
            ],
          }),
        ],
      }),
      u("section", {
        className: c.section,
        children: [
          u("h2", { className: c.sectionTitle, children: "Вопросы" }),
          u("p", {
            className: c.text,
            children: [
              "Что-то непонятно? Пишите на ",
              u("a", {
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
