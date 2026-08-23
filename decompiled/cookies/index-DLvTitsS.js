import { u as u_1, u_1 as u_1_1 } from "./index-DBLtLuBZ.js";
import { I } from "./IconChevronLeft-0Of1x6nI.js";
(() => {
  try {
    const t =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "1.1.2" };
    const c = new t.Error().stack;

    if (c) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[c] = "16798041-42d2-4552-88b8-3d6f9e848b8e";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-16798041-42d2-4552-88b8-3d6f9e848b8e";
    }
  } catch {}
})();
const l = "Ydj7";
const o = "CjGA";
const a = "nHPs";
const d = "AoTt";
const r = "dO1Z";
const h = "HDF8";
const m = "ssBW";
const u = "LjeC";
const f = "tcwO";

const s = {
  legal: l,
  backButton: o,
  title: a,
  updated: d,
  section: r,
  sectionTitle: h,
  text: m,
  list: u,
  contact: f,
};

export function Cookies(t) {
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
