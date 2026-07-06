import { a as a_1, f as f_1 } from "./index-CFv_0Hh6.js";
import { I } from "./IconChevronLeft-DRcQfgI5.js";
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
    const l = new s.Error().stack;

    if (l) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[l] = "33df7877-86bf-46b7-9e32-7d7a5272388c";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-33df7877-86bf-46b7-9e32-7d7a5272388c";
    }
  } catch {}
})();
const a = "TNv8";
const o = "VLsH";
const r = "t0oX";
const d = "MeRd";
const h = "YHex";
const m = "sqZ8";
const u = "dzPs";
const f = "bYIU";
const p = "P0JR";
const N = "N4UV";

const t = {
  legal: a,
  backButton: o,
  title: r,
  updated: d,
  section: h,
  sectionTitle: m,
  subsectionTitle: u,
  text: f,
  list: p,
  contact: N,
};

export function Support(s) {
  const l = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      f_1("/");
    }
  };
  return a_1("div", {
    className: t.legal,
    children: [
      a_1("button", {
        className: t.backButton,
        onClick: l,
        children: [a_1(I, { size: 20 }), a_1("span", { children: "Назад" })],
      }),
      a_1("h1", { className: t.title, children: "Поддержка" }),
      a_1("p", { className: t.updated, children: "Приложение итд" }),
      a_1("section", {
        className: t.section,
        children: [
          a_1("h2", {
            className: t.sectionTitle,
            children: "Связаться с нами",
          }),
          a_1("p", {
            className: t.text,
            children:
              "Если у вас возникли вопросы по работе приложения, аккаунту, контенту или безопасности, свяжитесь с нами любым удобным способом:",
          }),
          a_1("ul", {
            className: t.list,
            children: [
              a_1("li", {
                children: [
                  "E-mail: ",
                  a_1("a", {
                    href: "mailto:support@itd.fun",
                    className: t.contact,
                    children: "support@itd.fun",
                  }),
                ],
              }),
              a_1("li", {
                children: [
                  "Сайт: ",
                  a_1("a", {
                    href: "https://итд.com",
                    className: t.contact,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "итд.com",
                  }),
                ],
              }),
            ],
          }),
          a_1("p", {
            className: t.text,
            children: "Ответы на обращения предоставляются в разумный срок.",
          }),
        ],
      }),
      a_1("section", {
        className: t.section,
        children: [
          a_1("h2", { className: t.sectionTitle, children: "Частые вопросы" }),
          a_1("h3", {
            className: t.subsectionTitle,
            children: "Как восстановить доступ к аккаунту?",
          }),
          a_1("p", {
            className: t.text,
            children:
              "Воспользуйтесь функцией «Забыли пароль?» на экране входа. На вашу электронную почту будет отправлена ссылка для сброса пароля.",
          }),
          a_1("h3", {
            className: t.subsectionTitle,
            children: "Как удалить аккаунт?",
          }),
          a_1("p", {
            className: t.text,
            children:
              "Вы можете удалить аккаунт в настройках профиля. После удаления все ваши данные будут удалены в течение 30 дней.",
          }),
          a_1("h3", {
            className: t.subsectionTitle,
            children: "Как пожаловаться на контент?",
          }),
          a_1("p", {
            className: t.text,
            children:
              "Нажмите на меню поста или комментария и выберите «Пожаловаться». Мы рассмотрим жалобу и примем меры в случае нарушения правил.",
          }),
          a_1("h3", {
            className: t.subsectionTitle,
            children: "Как изменить имя пользователя?",
          }),
          a_1("p", {
            className: t.text,
            children:
              "Перейдите в настройки профиля и измените имя пользователя в соответствующем поле.",
          }),
        ],
      }),
      a_1("section", {
        className: t.section,
        children: [
          a_1("h2", { className: t.sectionTitle, children: "Дополнительно" }),
          a_1("p", {
            className: t.text,
            children:
              "По вопросам конфиденциальности и правил использования ознакомьтесь с соответствующими документами:",
          }),
          a_1("ul", {
            className: t.list,
            children: [
              a_1("li", {
                children: a_1("a", {
                  href: "/privacy",
                  className: t.contact,
                  onClick: (c) => {
                    c.preventDefault();
                    f_1("/privacy");
                  },
                  children: "Политика конфиденциальности",
                }),
              }),
              a_1("li", {
                children: a_1("a", {
                  href: "/terms",
                  className: t.contact,
                  onClick: (c) => {
                    c.preventDefault();
                    f_1("/terms");
                  },
                  children: "Пользовательское соглашение",
                }),
              }),
              a_1("li", {
                children: a_1("a", {
                  href: "/cookies",
                  className: t.contact,
                  onClick: (c) => {
                    c.preventDefault();
                    f_1("/cookies");
                  },
                  children: "Политика использования cookies",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { Support as Support, Support as default };
