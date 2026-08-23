import { u as u_1, u_1 as u_1_1 } from "./index-pEgBAsWz.js";
import { I } from "./IconChevronLeft-4Cj0xkqD.js";
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
    const l = new c.Error().stack;

    if (l) {
      c._sentryDebugIds = c._sentryDebugIds || {};
      c._sentryDebugIds[l] = "486ca6ae-dc24-4ce3-9517-fa6b271b08af";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-486ca6ae-dc24-4ce3-9517-fa6b271b08af";
    }
  } catch {}
})();
const a = "LD0m";
const o = "fwR1";
const r = "DRzn";
const d = "PGT4";
const h = "ovF9";
const m = "fgBw";
const f = "m8cf";
const u = "j0ec";
const p = "T6f9";
const N = "oWbP";

const t = {
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

export function Support(c) {
  const l = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1_1("/");
    }
  };
  return u_1("div", {
    className: t.legal,
    children: [
      u_1("button", {
        className: t.backButton,
        onClick: l,
        children: [u_1(I, { size: 20 }), u_1("span", { children: "Назад" })],
      }),
      u_1("h1", { className: t.title, children: "Поддержка" }),
      u_1("p", { className: t.updated, children: "Приложение итд" }),
      u_1("section", {
        className: t.section,
        children: [
          u_1("h2", {
            className: t.sectionTitle,
            children: "Связаться с нами",
          }),
          u_1("p", {
            className: t.text,
            children:
              "Если у вас возникли вопросы по работе приложения, аккаунту, контенту или безопасности, свяжитесь с нами любым удобным способом:",
          }),
          u_1("ul", {
            className: t.list,
            children: [
              u_1("li", {
                children: [
                  "E-mail: ",
                  u_1("a", {
                    href: "mailto:support@itd.fun",
                    className: t.contact,
                    children: "support@itd.fun",
                  }),
                ],
              }),
              u_1("li", {
                children: [
                  "Сайт: ",
                  u_1("a", {
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
          u_1("p", {
            className: t.text,
            children: "Ответы на обращения предоставляются в разумный срок.",
          }),
        ],
      }),
      u_1("section", {
        className: t.section,
        children: [
          u_1("h2", { className: t.sectionTitle, children: "Частые вопросы" }),
          u_1("h3", {
            className: t.subsectionTitle,
            children: "Как восстановить доступ к аккаунту?",
          }),
          u_1("p", {
            className: t.text,
            children:
              "Воспользуйтесь функцией «Забыли пароль?» на экране входа. На вашу электронную почту будет отправлена ссылка для сброса пароля.",
          }),
          u_1("h3", {
            className: t.subsectionTitle,
            children: "Как удалить аккаунт?",
          }),
          u_1("p", {
            className: t.text,
            children:
              "Вы можете удалить аккаунт в настройках профиля. После удаления все ваши данные будут удалены в течение 30 дней.",
          }),
          u_1("h3", {
            className: t.subsectionTitle,
            children: "Как пожаловаться на контент?",
          }),
          u_1("p", {
            className: t.text,
            children:
              "Нажмите на меню поста или комментария и выберите «Пожаловаться». Мы рассмотрим жалобу и примем меры в случае нарушения правил.",
          }),
          u_1("h3", {
            className: t.subsectionTitle,
            children: "Как изменить имя пользователя?",
          }),
          u_1("p", {
            className: t.text,
            children:
              "Перейдите в настройки профиля и измените имя пользователя в соответствующем поле.",
          }),
        ],
      }),
      u_1("section", {
        className: t.section,
        children: [
          u_1("h2", { className: t.sectionTitle, children: "Дополнительно" }),
          u_1("p", {
            className: t.text,
            children:
              "По вопросам конфиденциальности и правил использования ознакомьтесь с соответствующими документами:",
          }),
          u_1("ul", {
            className: t.list,
            children: [
              u_1("li", {
                children: u_1("a", {
                  href: "/privacy",
                  className: t.contact,
                  onClick: (s) => {
                    s.preventDefault();
                    u_1_1("/privacy");
                  },
                  children: "Политика конфиденциальности",
                }),
              }),
              u_1("li", {
                children: u_1("a", {
                  href: "/terms",
                  className: t.contact,
                  onClick: (s) => {
                    s.preventDefault();
                    u_1_1("/terms");
                  },
                  children: "Пользовательское соглашение",
                }),
              }),
              u_1("li", {
                children: u_1("a", {
                  href: "/cookies",
                  className: t.contact,
                  onClick: (s) => {
                    s.preventDefault();
                    u_1_1("/cookies");
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
