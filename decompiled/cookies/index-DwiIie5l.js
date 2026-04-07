import { Cookies as Cookies_1, a3, $ } from "./index-BzlbFDoq.js";
const t = "QWIbnX00";
const o = "_6SuIJlBk";
const n = "RmmBDdJi";
const a = "Vsw0yLAw";
const r = "IQ-KXCU-";
const h = "i8hF8rs5";
const d = "qcj6WjRb";
const m = "rv7jpclC";
const k = "ws0CaSF2";

const c = {
  legal: t,
  backButton: o,
  title: n,
  updated: a,
  section: r,
  sectionTitle: h,
  text: d,
  list: m,
  contact: k,
};

export function Cookies(N) {
  const i = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };
  return Cookies_1("div", {
    className: c.legal,
    children: [
      Cookies_1("button", {
        className: c.backButton,
        onClick: i,
        children: [
          Cookies_1(a3, { size: 20 }),
          Cookies_1("span", { children: "Назад" }),
        ],
      }),
      Cookies_1("h1", { className: c.title, children: "Политика cookies" }),
      Cookies_1("p", {
        className: c.updated,
        children: "Последнее обновление: 5 февраля 2025",
      }),
      Cookies_1("section", {
        className: c.section,
        children: [
          Cookies_1("h2", {
            className: c.sectionTitle,
            children: "Какие cookies мы используем",
          }),
          Cookies_1("p", {
            className: c.text,
            children:
              "Мы используем только технические cookies, необходимые для работы сайта — чтобы вы оставались авторизованы. Без них вход в аккаунт невозможен.",
          }),
          Cookies_1("p", {
            className: c.text,
            children: "Мы не используем рекламные или аналитические cookies.",
          }),
        ],
      }),
      Cookies_1("section", {
        className: c.section,
        children: [
          Cookies_1("h2", {
            className: c.sectionTitle,
            children: "Как управлять cookies",
          }),
          Cookies_1("p", {
            className: c.text,
            children:
              "Вы можете удалить или заблокировать cookies в настройках браузера:",
          }),
          Cookies_1("ul", {
            className: c.list,
            children: [
              Cookies_1("li", {
                children:
                  "Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie",
              }),
              Cookies_1("li", {
                children:
                  "Firefox: Настройки → Приватность и Защита → Куки и данные сайтов",
              }),
              Cookies_1("li", {
                children:
                  "Safari: Настройки → Конфиденциальность → Управление данными веб-сайтов",
              }),
            ],
          }),
          Cookies_1("p", {
            className: c.text,
            children:
              "Если заблокируете все cookies — не сможете войти в аккаунт. Просто предупреждаем.",
          }),
        ],
      }),
      Cookies_1("section", {
        className: c.section,
        children: [
          Cookies_1("h2", {
            className: c.sectionTitle,
            children: "Что мы НЕ делаем",
          }),
          Cookies_1("ul", {
            className: c.list,
            children: [
              Cookies_1("li", { children: "Не используем рекламные cookies" }),
              Cookies_1("li", {
                children: "Не отслеживаем вас на других сайтах",
              }),
              Cookies_1("li", {
                children: "Не передаём данные cookies третьим лицам",
              }),
              Cookies_1("li", {
                children: "Не используем cookies для профилирования",
              }),
            ],
          }),
        ],
      }),
      Cookies_1("section", {
        className: c.section,
        children: [
          Cookies_1("h2", { className: c.sectionTitle, children: "Вопросы" }),
          Cookies_1("p", {
            className: c.text,
            children: [
              "Что-то непонятно? Пишите на ",
              Cookies_1("a", {
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
