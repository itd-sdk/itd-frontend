import { u as u_1, u_1 as u_1_1 } from "./index-B9FitUXy.js";
import { I } from "./IconChevronLeft-DoFeid_h.js";
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
    const s = new c.Error().stack;

    if (s) {
      c._sentryDebugIds = c._sentryDebugIds || {};
      c._sentryDebugIds[s] = "ea75ad2b-dada-49d0-aa08-ef3755727d05";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-ea75ad2b-dada-49d0-aa08-ef3755727d05";
    }
  } catch {}
})();
const a = "R3gY";
const r = "TZAC";
const d = "lzis";
const o = "SXFw";
const h = "mKJb";
const m = "HOXX";
const u = "R2eX";
const N = "NqQq";
const f = "EDnM";
const p = "prXp";

const l = {
  legal: a,
  backButton: r,
  title: d,
  updated: o,
  section: h,
  sectionTitle: m,
  subsectionTitle: u,
  text: N,
  list: f,
  contact: p,
};

export function ChildSafety(c) {
  const s = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1_1("/");
    }
  };
  return u_1("div", {
    className: l.legal,
    children: [
      u_1("button", {
        className: l.backButton,
        onClick: s,
        children: [u_1(I, { size: 20 }), u_1("span", { children: "Назад" })],
      }),
      u_1("h1", {
        className: l.title,
        children: "Стандарты безопасности детей",
      }),
      u_1("p", {
        className: l.updated,
        children: "Последнее обновление: 8 марта 2026",
      }),
      u_1("section", {
        className: l.section,
        children: [
          u_1("h2", { className: l.sectionTitle, children: "Наша позиция" }),
          u_1("p", {
            className: l.text,
            children:
              "ИТД придерживается политики абсолютной нетерпимости к сексуальному насилию над детьми и их эксплуатации (CSAE). Мы запрещаем любой контент, который изображает, поощряет или способствует сексуальной эксплуатации или насилию в отношении несовершеннолетних, включая, но не ограничиваясь:",
          }),
          u_1("ul", {
            className: l.list,
            children: [
              u_1("li", {
                children:
                  "Материалы сексуального насилия над детьми (CSAM) в любой форме",
              }),
              u_1("li", { children: "Сексуализацию несовершеннолетних" }),
              u_1("li", {
                children:
                  "Груминг — установление доверительного контакта с несовершеннолетними в целях эксплуатации",
              }),
              u_1("li", {
                children:
                  "Секс-торговлю и торговлю людьми с участием несовершеннолетних",
              }),
              u_1("li", {
                children:
                  "Любые призывы, инструкции или рекомендации, связанные с эксплуатацией детей",
              }),
            ],
          }),
        ],
      }),
      u_1("section", {
        className: l.section,
        children: [
          u_1("h2", {
            className: l.sectionTitle,
            children: "Меры по обеспечению безопасности",
          }),
          u_1("p", {
            className: l.text,
            children:
              "Мы применяем следующие меры для защиты несовершеннолетних на платформе:",
          }),
          u_1("ul", {
            className: l.list,
            children: [
              u_1("li", {
                children:
                  "Модерация контента — публикации и комментарии проверяются на наличие запрещённого контента",
              }),
              u_1("li", {
                children:
                  "Система жалоб — любой пользователь может пожаловаться на контент или аккаунт, нарушающий правила безопасности детей",
              }),
              u_1("li", {
                children:
                  "Блокировка аккаунтов — аккаунты, нарушающие данные стандарты, немедленно блокируются без возможности восстановления",
              }),
              u_1("li", {
                children:
                  "Сотрудничество с правоохранительными органами — мы передаём информацию о выявленных нарушениях в соответствующие органы в соответствии с действующим законодательством",
              }),
            ],
          }),
        ],
      }),
      u_1("section", {
        className: l.section,
        children: [
          u_1("h2", {
            className: l.sectionTitle,
            children: "Как сообщить о нарушении",
          }),
          u_1("p", {
            className: l.text,
            children:
              "Если вы обнаружили контент, связанный с сексуальной эксплуатацией или насилием над детьми, немедленно сообщите об этом:",
          }),
          u_1("h3", { className: l.subsectionTitle, children: "В приложении" }),
          u_1("p", {
            className: l.text,
            children:
              "Нажмите на меню публикации или профиля и выберите «Пожаловаться». Выберите категорию, связанную с безопасностью детей. Жалобы данной категории рассматриваются в приоритетном порядке.",
          }),
          u_1("h3", {
            className: l.subsectionTitle,
            children: "По электронной почте",
          }),
          u_1("p", {
            className: l.text,
            children: [
              "Отправьте сообщение на адрес ",
              u_1("a", {
                href: "mailto:abuse@itd.fun",
                className: l.contact,
                children: "abuse@itd.fun",
              }),
              " с темой «Безопасность детей». Укажите ссылку на контент или имя пользователя, а также описание нарушения.",
            ],
          }),
        ],
      }),
      u_1("section", {
        className: l.section,
        children: [
          u_1("h2", {
            className: l.sectionTitle,
            children: "Обязательства перед законодательством",
          }),
          u_1("p", {
            className: l.text,
            children:
              "Приложение ИТД соответствует действующему законодательству Российской Федерации и международным стандартам в отношении безопасности детей. Мы обязуемся:",
          }),
          u_1("ul", {
            className: l.list,
            children: [
              u_1("li", {
                children:
                  "Удалять любой незаконный контент, связанный с эксплуатацией несовершеннолетних, незамедлительно после обнаружения",
              }),
              u_1("li", {
                children:
                  "Сообщать о выявленных нарушениях в региональные и национальные правоохранительные органы",
              }),
              u_1("li", {
                children:
                  "Сохранять необходимые данные для содействия расследованиям в соответствии с требованиями закона",
              }),
              u_1("li", {
                children:
                  "Регулярно пересматривать и обновлять наши стандарты безопасности",
              }),
            ],
          }),
        ],
      }),
      u_1("section", {
        className: l.section,
        children: [
          u_1("h2", {
            className: l.sectionTitle,
            children: "Контактная информация",
          }),
          u_1("p", {
            className: l.text,
            children:
              "По вопросам, связанным с безопасностью детей на платформе ИТД:",
          }),
          u_1("ul", {
            className: l.list,
            children: [
              u_1("li", {
                children: [
                  "E-mail: ",
                  u_1("a", {
                    href: "mailto:abuse@itd.fun",
                    className: l.contact,
                    children: "abuse@itd.fun",
                  }),
                ],
              }),
              u_1("li", {
                children: [
                  "Сайт: ",
                  u_1("a", {
                    href: "https://итд.com",
                    className: l.contact,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "итд.com",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u_1("section", {
        className: l.section,
        children: [
          u_1("h2", { className: l.sectionTitle, children: "Дополнительно" }),
          u_1("ul", {
            className: l.list,
            children: [
              u_1("li", {
                children: u_1("a", {
                  href: "/terms",
                  className: l.contact,
                  onClick: (i) => {
                    i.preventDefault();
                    u_1_1("/terms");
                  },
                  children: "Пользовательское соглашение",
                }),
              }),
              u_1("li", {
                children: u_1("a", {
                  href: "/privacy",
                  className: l.contact,
                  onClick: (i) => {
                    i.preventDefault();
                    u_1_1("/privacy");
                  },
                  children: "Политика конфиденциальности",
                }),
              }),
              u_1("li", {
                children: u_1("a", {
                  href: "/support",
                  className: l.contact,
                  onClick: (i) => {
                    i.preventDefault();
                    u_1_1("/support");
                  },
                  children: "Поддержка",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { ChildSafety as ChildSafety, ChildSafety as default };
