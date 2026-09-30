import { u as u_1, u_1 as u_1_1 } from "./index-BuVp7kGl.js";
import { I } from "./IconChevronLeft-7q6BtY14.js";
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
      s._sentryDebugIds[i] = "b947c18b-8433-4fa5-8883-3c5504028986";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-b947c18b-8433-4fa5-8883-3c5504028986";
    }
  } catch {}
})();
const n = "wyMg";
const o = "UwcZ";
const a = "H0Te";
const d = "zUB1";
const r = "P0p9";
const h = "vB2J";
const m = "VNQ9";
const u = "eoSx";
const f = "PiX0";

const c = {
  legal: n,
  backButton: o,
  title: a,
  updated: d,
  section: r,
  sectionTitle: h,
  text: m,
  list: u,
  contact: f,
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
