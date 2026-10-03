import { u as u_1, u_1 as u_1_1 } from "./index-DK2L49XD.js";
import { I } from "./IconChevronLeft-BrPnNM4b.js";
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
      c._sentryDebugIds[i] = "d63eed4b-1882-4040-bd34-92eb131822f5";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-d63eed4b-1882-4040-bd34-92eb131822f5";
    }
  } catch {}
})();
const n = "caXa";
const o = "O2XJ";
const a = "BFSN";
const d = "DugT";
const r = "moGX";
const h = "Wck3";
const m = "M7DH";
const u = "OpQy";
const f = "hmWg";

const s = {
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

export function Cookies(c) {
  const i = () => {
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
        onClick: i,
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
