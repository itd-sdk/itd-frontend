import { u as u_1, u_1 as u_1_1 } from "./index-ORJLmKGS.js";
import { I } from "./IconChevronLeft-DN-Go-1D.js";
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
    i.SENTRY_RELEASE = { id: "1.1.3" };
    const c = new i.Error().stack;

    if (c) {
      i._sentryDebugIds = i._sentryDebugIds || {};
      i._sentryDebugIds[c] = "bd12dae9-6eec-4f42-8052-f9be0a08b2ae";
      i._sentryDebugIdIdentifier =
        "sentry-dbid-bd12dae9-6eec-4f42-8052-f9be0a08b2ae";
    }
  } catch {}
})();
const n = "XvRS";
const o = "eo8w";
const a = "yhMi";
const d = "Uoz2";
const r = "S16O";
const h = "HRYx";
const f = "t8Rx";
const m = "wORa";
const u = "M5iY";

const s = {
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

export function Cookies(i) {
  const c = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1_1("/");
    }
  };
  return u_1("div", {
    className: s.legal,
    children: [
      u_1("button", {
        className: s.backButton,
        onClick: c,
        children: [u_1(I, { size: 20 }), u_1("span", { children: "Назад" })],
      }),
      u_1("h1", { className: s.title, children: "Политика cookies" }),
      u_1("p", {
        className: s.updated,
        children: "Последнее обновление: 5 февраля 2025",
      }),
      u_1("section", {
        className: s.section,
        children: [
          u_1("h2", {
            className: s.sectionTitle,
            children: "Какие cookies мы используем",
          }),
          u_1("p", {
            className: s.text,
            children:
              "Мы используем только технические cookies, необходимые для работы сайта — чтобы вы оставались авторизованы. Без них вход в аккаунт невозможен.",
          }),
          u_1("p", {
            className: s.text,
            children: "Мы не используем рекламные или аналитические cookies.",
          }),
        ],
      }),
      u_1("section", {
        className: s.section,
        children: [
          u_1("h2", {
            className: s.sectionTitle,
            children: "Как управлять cookies",
          }),
          u_1("p", {
            className: s.text,
            children:
              "Вы можете удалить или заблокировать cookies в настройках браузера:",
          }),
          u_1("ul", {
            className: s.list,
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
            className: s.text,
            children:
              "Если заблокируете все cookies — не сможете войти в аккаунт. Просто предупреждаем.",
          }),
        ],
      }),
      u_1("section", {
        className: s.section,
        children: [
          u_1("h2", {
            className: s.sectionTitle,
            children: "Что мы НЕ делаем",
          }),
          u_1("ul", {
            className: s.list,
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
        className: s.section,
        children: [
          u_1("h2", { className: s.sectionTitle, children: "Вопросы" }),
          u_1("p", {
            className: s.text,
            children: [
              "Что-то непонятно? Пишите на ",
              u_1("a", {
                href: "mailto:support@itd.fun",
                className: s.contact,
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
