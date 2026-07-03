import { a as a_1, f as f_1 } from "./index-DuQT229k.js";
import { I } from "./IconChevronLeft-CbQdWkHt.js";
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
      c._sentryDebugIds[s] = "a8f287e7-2a26-4602-bec5-204dd239db56";
      c._sentryDebugIdIdentifier =
        "sentry-dbid-a8f287e7-2a26-4602-bec5-204dd239db56";
    }
  } catch {}
})();
const a = "QzoG";
const r = "hq8v";
const d = "OE6p";
const o = "qalK";
const h = "cOhl";
const m = "vq3H";
const u = "VkR5";
const N = "bkLx";
const f = "wGRm";
const p = "PlQR";

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
      f_1("/");
    }
  };
  return a_1("div", {
    className: l.legal,
    children: [
      a_1("button", {
        className: l.backButton,
        onClick: s,
        children: [a_1(I, { size: 20 }), a_1("span", { children: "Назад" })],
      }),
      a_1("h1", {
        className: l.title,
        children: "Стандарты безопасности детей",
      }),
      a_1("p", {
        className: l.updated,
        children: "Последнее обновление: 8 марта 2026",
      }),
      a_1("section", {
        className: l.section,
        children: [
          a_1("h2", { className: l.sectionTitle, children: "Наша позиция" }),
          a_1("p", {
            className: l.text,
            children:
              "ИТД придерживается политики абсолютной нетерпимости к сексуальному насилию над детьми и их эксплуатации (CSAE). Мы запрещаем любой контент, который изображает, поощряет или способствует сексуальной эксплуатации или насилию в отношении несовершеннолетних, включая, но не ограничиваясь:",
          }),
          a_1("ul", {
            className: l.list,
            children: [
              a_1("li", {
                children:
                  "Материалы сексуального насилия над детьми (CSAM) в любой форме",
              }),
              a_1("li", { children: "Сексуализацию несовершеннолетних" }),
              a_1("li", {
                children:
                  "Груминг — установление доверительного контакта с несовершеннолетними в целях эксплуатации",
              }),
              a_1("li", {
                children:
                  "Секс-торговлю и торговлю людьми с участием несовершеннолетних",
              }),
              a_1("li", {
                children:
                  "Любые призывы, инструкции или рекомендации, связанные с эксплуатацией детей",
              }),
            ],
          }),
        ],
      }),
      a_1("section", {
        className: l.section,
        children: [
          a_1("h2", {
            className: l.sectionTitle,
            children: "Меры по обеспечению безопасности",
          }),
          a_1("p", {
            className: l.text,
            children:
              "Мы применяем следующие меры для защиты несовершеннолетних на платформе:",
          }),
          a_1("ul", {
            className: l.list,
            children: [
              a_1("li", {
                children:
                  "Модерация контента — публикации и комментарии проверяются на наличие запрещённого контента",
              }),
              a_1("li", {
                children:
                  "Система жалоб — любой пользователь может пожаловаться на контент или аккаунт, нарушающий правила безопасности детей",
              }),
              a_1("li", {
                children:
                  "Блокировка аккаунтов — аккаунты, нарушающие данные стандарты, немедленно блокируются без возможности восстановления",
              }),
              a_1("li", {
                children:
                  "Сотрудничество с правоохранительными органами — мы передаём информацию о выявленных нарушениях в соответствующие органы в соответствии с действующим законодательством",
              }),
            ],
          }),
        ],
      }),
      a_1("section", {
        className: l.section,
        children: [
          a_1("h2", {
            className: l.sectionTitle,
            children: "Как сообщить о нарушении",
          }),
          a_1("p", {
            className: l.text,
            children:
              "Если вы обнаружили контент, связанный с сексуальной эксплуатацией или насилием над детьми, немедленно сообщите об этом:",
          }),
          a_1("h3", { className: l.subsectionTitle, children: "В приложении" }),
          a_1("p", {
            className: l.text,
            children:
              "Нажмите на меню публикации или профиля и выберите «Пожаловаться». Выберите категорию, связанную с безопасностью детей. Жалобы данной категории рассматриваются в приоритетном порядке.",
          }),
          a_1("h3", {
            className: l.subsectionTitle,
            children: "По электронной почте",
          }),
          a_1("p", {
            className: l.text,
            children: [
              "Отправьте сообщение на адрес ",
              a_1("a", {
                href: "mailto:abuse@itd.fun",
                className: l.contact,
                children: "abuse@itd.fun",
              }),
              " с темой «Безопасность детей». Укажите ссылку на контент или имя пользователя, а также описание нарушения.",
            ],
          }),
        ],
      }),
      a_1("section", {
        className: l.section,
        children: [
          a_1("h2", {
            className: l.sectionTitle,
            children: "Обязательства перед законодательством",
          }),
          a_1("p", {
            className: l.text,
            children:
              "Приложение ИТД соответствует действующему законодательству Российской Федерации и международным стандартам в отношении безопасности детей. Мы обязуемся:",
          }),
          a_1("ul", {
            className: l.list,
            children: [
              a_1("li", {
                children:
                  "Удалять любой незаконный контент, связанный с эксплуатацией несовершеннолетних, незамедлительно после обнаружения",
              }),
              a_1("li", {
                children:
                  "Сообщать о выявленных нарушениях в региональные и национальные правоохранительные органы",
              }),
              a_1("li", {
                children:
                  "Сохранять необходимые данные для содействия расследованиям в соответствии с требованиями закона",
              }),
              a_1("li", {
                children:
                  "Регулярно пересматривать и обновлять наши стандарты безопасности",
              }),
            ],
          }),
        ],
      }),
      a_1("section", {
        className: l.section,
        children: [
          a_1("h2", {
            className: l.sectionTitle,
            children: "Контактная информация",
          }),
          a_1("p", {
            className: l.text,
            children:
              "По вопросам, связанным с безопасностью детей на платформе ИТД:",
          }),
          a_1("ul", {
            className: l.list,
            children: [
              a_1("li", {
                children: [
                  "E-mail: ",
                  a_1("a", {
                    href: "mailto:abuse@itd.fun",
                    className: l.contact,
                    children: "abuse@itd.fun",
                  }),
                ],
              }),
              a_1("li", {
                children: [
                  "Сайт: ",
                  a_1("a", {
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
      a_1("section", {
        className: l.section,
        children: [
          a_1("h2", { className: l.sectionTitle, children: "Дополнительно" }),
          a_1("ul", {
            className: l.list,
            children: [
              a_1("li", {
                children: a_1("a", {
                  href: "/terms",
                  className: l.contact,
                  onClick: (i) => {
                    i.preventDefault();
                    f_1("/terms");
                  },
                  children: "Пользовательское соглашение",
                }),
              }),
              a_1("li", {
                children: a_1("a", {
                  href: "/privacy",
                  className: l.contact,
                  onClick: (i) => {
                    i.preventDefault();
                    f_1("/privacy");
                  },
                  children: "Политика конфиденциальности",
                }),
              }),
              a_1("li", {
                children: a_1("a", {
                  href: "/support",
                  className: l.contact,
                  onClick: (i) => {
                    i.preventDefault();
                    f_1("/support");
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
