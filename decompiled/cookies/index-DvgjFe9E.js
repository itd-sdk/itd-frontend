import { u as u_1, u_1 as u_1_1 } from "./index-DDTOXJaD.js";
import { I } from "./IconChevronLeft-6Kf2Hf_x.js";
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
      c._sentryDebugIds[i] = "f05a9730-8ea6-4ef1-994b-ec2949ab52d8";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-f05a9730-8ea6-4ef1-994b-ec2949ab52d8";
    }
  } catch {}
})();
const n = "H6PQ";
const o = "ZmL2";
const a = "zu8s";
const d = "kcLL";
const r = "J5qx";
const h = "Gv6F";
const f = "eYdz";
const m = "NZ7q";
const u = "gICT";

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
