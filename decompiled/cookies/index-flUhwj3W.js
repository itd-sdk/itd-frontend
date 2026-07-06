import { a as a_1, f as f_1 } from "./index-CFv_0Hh6.js";
import { I } from "./IconChevronLeft-DRcQfgI5.js";
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
    const i = new c.Error().stack;

    if (i) {
      c._sentryDebugIds = c._sentryDebugIds || {};
      c._sentryDebugIds[i] = "0e370c51-6120-4d36-bfd7-1d27118139a2";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-0e370c51-6120-4d36-bfd7-1d27118139a2";
    }
  } catch {}
})();
const n = "eM2q";
const o = "PU4s";
const a = "u8hl";
const d = "xVm4";
const r = "TjkH";
const h = "L9Vf";
const f = "ovpV";
const m = "cl25";
const u = "v0p8";

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

export function Cookies(c) {
  const i = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      f_1("/");
    }
  };
  return a_1("div", {
    className: s.legal,
    children: [
      a_1("button", {
        className: s.backButton,
        onClick: i,
        children: [a_1(I, { size: 20 }), a_1("span", { children: "Назад" })],
      }),
      a_1("h1", { className: s.title, children: "Политика cookies" }),
      a_1("p", {
        className: s.updated,
        children: "Последнее обновление: 5 февраля 2025",
      }),
      a_1("section", {
        className: s.section,
        children: [
          a_1("h2", {
            className: s.sectionTitle,
            children: "Какие cookies мы используем",
          }),
          a_1("p", {
            className: s.text,
            children:
              "Мы используем только технические cookies, необходимые для работы сайта — чтобы вы оставались авторизованы. Без них вход в аккаунт невозможен.",
          }),
          a_1("p", {
            className: s.text,
            children: "Мы не используем рекламные или аналитические cookies.",
          }),
        ],
      }),
      a_1("section", {
        className: s.section,
        children: [
          a_1("h2", {
            className: s.sectionTitle,
            children: "Как управлять cookies",
          }),
          a_1("p", {
            className: s.text,
            children:
              "Вы можете удалить или заблокировать cookies в настройках браузера:",
          }),
          a_1("ul", {
            className: s.list,
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
            className: s.text,
            children:
              "Если заблокируете все cookies — не сможете войти в аккаунт. Просто предупреждаем.",
          }),
        ],
      }),
      a_1("section", {
        className: s.section,
        children: [
          a_1("h2", {
            className: s.sectionTitle,
            children: "Что мы НЕ делаем",
          }),
          a_1("ul", {
            className: s.list,
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
        className: s.section,
        children: [
          a_1("h2", { className: s.sectionTitle, children: "Вопросы" }),
          a_1("p", {
            className: s.text,
            children: [
              "Что-то непонятно? Пишите на ",
              a_1("a", {
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
