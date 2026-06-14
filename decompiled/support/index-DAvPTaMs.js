import { a as a_1, f as f_1 } from "./index-BAlLDjSl.js";
import { I } from "./IconChevronLeft-DL9-Okiv.js";
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
    t.SENTRY_RELEASE = { id: "1.1.1" };
    const l = new t.Error().stack;

    if (l) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[l] = "9aff41b4-7206-40fc-94a5-8dea0d560084";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-9aff41b4-7206-40fc-94a5-8dea0d560084";
    }
  } catch {}
})();
const a = "ydrQ";
const o = "azQ3";
const r = "nvmO";
const d = "vpTL";
const h = "ZKTk";
const m = "UTJs";
const f = "KBAs";
const u = "BX0J";
const p = "irUz";
const N = "cjfG";

const c = {
  legal: a,
  backButton: o,
  title: r,
  updated: d,
  section: h,
  sectionTitle: m,
  subsectionTitle: f,
  text: u,
  list: p,
  contact: N,
};

export function Support(t) {
  const l = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      f_1("/");
    }
  };
  return a_1("div", {
    className: c.legal,
    children: [
      a_1("button", {
        className: c.backButton,
        onClick: l,
        children: [a_1(I, { size: 20 }), a_1("span", { children: "Назад" })],
      }),
      a_1("h1", { className: c.title, children: "Поддержка" }),
      a_1("p", { className: c.updated, children: "Приложение итд" }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", {
            className: c.sectionTitle,
            children: "Связаться с нами",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Если у вас возникли вопросы по работе приложения, аккаунту, контенту или безопасности, свяжитесь с нами любым удобным способом:",
          }),
          a_1("ul", {
            className: c.list,
            children: [
              a_1("li", {
                children: [
                  "E-mail: ",
                  a_1("a", {
                    href: "mailto:nowkie.com@gmail.com",
                    className: c.contact,
                    children: "nowkie.com@gmail.com",
                  }),
                ],
              }),
              a_1("li", {
                children: [
                  "Сайт: ",
                  a_1("a", {
                    href: "https://итд.com",
                    className: c.contact,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "итд.com",
                  }),
                ],
              }),
            ],
          }),
          a_1("p", {
            className: c.text,
            children: "Ответы на обращения предоставляются в разумный срок.",
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", { className: c.sectionTitle, children: "Частые вопросы" }),
          a_1("h3", {
            className: c.subsectionTitle,
            children: "Как восстановить доступ к аккаунту?",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Воспользуйтесь функцией «Забыли пароль?» на экране входа. На вашу электронную почту будет отправлена ссылка для сброса пароля.",
          }),
          a_1("h3", {
            className: c.subsectionTitle,
            children: "Как удалить аккаунт?",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Вы можете удалить аккаунт в настройках профиля. После удаления все ваши данные будут удалены в течение 30 дней.",
          }),
          a_1("h3", {
            className: c.subsectionTitle,
            children: "Как пожаловаться на контент?",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Нажмите на меню поста или комментария и выберите «Пожаловаться». Мы рассмотрим жалобу и примем меры в случае нарушения правил.",
          }),
          a_1("h3", {
            className: c.subsectionTitle,
            children: "Как изменить имя пользователя?",
          }),
          a_1("p", {
            className: c.text,
            children:
              "Перейдите в настройки профиля и измените имя пользователя в соответствующем поле.",
          }),
        ],
      }),
      a_1("section", {
        className: c.section,
        children: [
          a_1("h2", { className: c.sectionTitle, children: "Дополнительно" }),
          a_1("p", {
            className: c.text,
            children:
              "По вопросам конфиденциальности и правил использования ознакомьтесь с соответствующими документами:",
          }),
          a_1("ul", {
            className: c.list,
            children: [
              a_1("li", {
                children: a_1("a", {
                  href: "/privacy",
                  className: c.contact,
                  onClick: (s) => {
                    s.preventDefault();
                    f_1("/privacy");
                  },
                  children: "Политика конфиденциальности",
                }),
              }),
              a_1("li", {
                children: a_1("a", {
                  href: "/terms",
                  className: c.contact,
                  onClick: (s) => {
                    s.preventDefault();
                    f_1("/terms");
                  },
                  children: "Пользовательское соглашение",
                }),
              }),
              a_1("li", {
                children: a_1("a", {
                  href: "/cookies",
                  className: c.contact,
                  onClick: (s) => {
                    s.preventDefault();
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
