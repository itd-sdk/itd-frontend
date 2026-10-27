import { u as u_1, $ } from "./index-BQxlThnW-portal20261026.js";
import { I } from "./IconChevronLeft-DWLxrxwS-portal20261026.js";
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
    const l = new t.Error().stack;

    if (l) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[l] = "c1ed9c55-2c6a-4027-9bc8-a5618b59fb5d";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-c1ed9c55-2c6a-4027-9bc8-a5618b59fb5d";
    }
  } catch {}
})();
const a = "NOra";
const o = "VVW0";
const r = "Tvfw";
const d = "YcBA";
const h = "gp98";
const m = "Si7m";
const u = "u0N8";
const p = "bUqu";
const f = "NSWS";
const N = "p6nG";

const c = {
  legal: a,
  backButton: o,
  title: r,
  updated: d,
  section: h,
  sectionTitle: m,
  subsectionTitle: u,
  text: p,
  list: f,
  contact: N,
};

export function Support(t) {
  const l = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };
  return u_1("div", {
    className: c.legal,
    children: [
      u_1("button", {
        className: c.backButton,
        onClick: l,
        children: [u_1(I, { size: 20 }), u_1("span", { children: "Назад" })],
      }),
      u_1("h1", { className: c.title, children: "Поддержка" }),
      u_1("p", { className: c.updated, children: "Приложение итд" }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", {
            className: c.sectionTitle,
            children: "Связаться с нами",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Если у вас возникли вопросы по работе приложения, аккаунту, контенту или безопасности, свяжитесь с нами любым удобным способом:",
          }),
          u_1("ul", {
            className: c.list,
            children: [
              u_1("li", {
                children: [
                  "E-mail: ",
                  u_1("a", {
                    href: "mailto:support@itd.fun",
                    className: c.contact,
                    children: "support@itd.fun",
                  }),
                ],
              }),
              u_1("li", {
                children: [
                  "Сайт: ",
                  u_1("a", {
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
          u_1("p", {
            className: c.text,
            children: "Ответы на обращения предоставляются в разумный срок.",
          }),
        ],
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", { className: c.sectionTitle, children: "Частые вопросы" }),
          u_1("h3", {
            className: c.subsectionTitle,
            children: "Как восстановить доступ к аккаунту?",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Воспользуйтесь функцией «Забыли пароль?» на экране входа. На вашу электронную почту будет отправлена ссылка для сброса пароля.",
          }),
          u_1("h3", {
            className: c.subsectionTitle,
            children: "Как удалить аккаунт?",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Вы можете удалить аккаунт в настройках профиля. После удаления все ваши данные будут удалены в течение 30 дней.",
          }),
          u_1("h3", {
            className: c.subsectionTitle,
            children: "Как пожаловаться на контент?",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Нажмите на меню поста или комментария и выберите «Пожаловаться». Мы рассмотрим жалобу и примем меры в случае нарушения правил.",
          }),
          u_1("h3", {
            className: c.subsectionTitle,
            children: "Как изменить имя пользователя?",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Перейдите в настройки профиля и измените имя пользователя в соответствующем поле.",
          }),
        ],
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", { className: c.sectionTitle, children: "Дополнительно" }),
          u_1("p", {
            className: c.text,
            children:
              "По вопросам конфиденциальности и правил использования ознакомьтесь с соответствующими документами:",
          }),
          u_1("ul", {
            className: c.list,
            children: [
              u_1("li", {
                children: u_1("a", {
                  href: "/privacy",
                  className: c.contact,
                  onClick: (s) => {
                    s.preventDefault();
                    $("/privacy");
                  },
                  children: "Политика конфиденциальности",
                }),
              }),
              u_1("li", {
                children: u_1("a", {
                  href: "/terms",
                  className: c.contact,
                  onClick: (s) => {
                    s.preventDefault();
                    $("/terms");
                  },
                  children: "Пользовательское соглашение",
                }),
              }),
              u_1("li", {
                children: u_1("a", {
                  href: "/cookies",
                  className: c.contact,
                  onClick: (s) => {
                    s.preventDefault();
                    $("/cookies");
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
