import { u as u_1, u_1 as u_1_1 } from "./index-DDTOXJaD.js";
import { I } from "./IconChevronLeft-6Kf2Hf_x.js";
(() => {
  try {
    const l =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    l.SENTRY_RELEASE = { id: "1.1.2" };
    const s = new l.Error().stack;

    if (s) {
      l._sentryDebugIds = l._sentryDebugIds || {};
      l._sentryDebugIds[s] = "8f7ca494-16f1-486e-acd7-13659c60c0b0";
      l._sentryDebugIdIdentifier =
        "sentry-dbid-8f7ca494-16f1-486e-acd7-13659c60c0b0";
    }
  } catch {}
})();
const a = "rTls";
const r = "oiJB";
const d = "j3GI";
const o = "uVAE";
const h = "Rkmr";
const m = "CyBR";
const u = "IqR7";
const f = "uYy9";
const N = "B6VP";
const p = "qLJP";

const c = {
  legal: a,
  backButton: r,
  title: d,
  updated: o,
  section: h,
  sectionTitle: m,
  subsectionTitle: u,
  text: f,
  list: N,
  contact: p,
};

export function ChildSafety(l) {
  const s = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1_1("/");
    }
  };
  return u_1("div", {
    className: c.legal,
    children: [
      u_1("button", {
        className: c.backButton,
        onClick: s,
        children: [u_1(I, { size: 20 }), u_1("span", { children: "Назад" })],
      }),
      u_1("h1", {
        className: c.title,
        children: "Стандарты безопасности детей",
      }),
      u_1("p", {
        className: c.updated,
        children: "Последнее обновление: 8 марта 2026",
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", { className: c.sectionTitle, children: "Наша позиция" }),
          u_1("p", {
            className: c.text,
            children:
              "ИТД придерживается политики абсолютной нетерпимости к сексуальному насилию над детьми и их эксплуатации (CSAE). Мы запрещаем любой контент, который изображает, поощряет или способствует сексуальной эксплуатации или насилию в отношении несовершеннолетних, включая, но не ограничиваясь:",
          }),
          u_1("ul", {
            className: c.list,
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
        className: c.section,
        children: [
          u_1("h2", {
            className: c.sectionTitle,
            children: "Меры по обеспечению безопасности",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Мы применяем следующие меры для защиты несовершеннолетних на платформе:",
          }),
          u_1("ul", {
            className: c.list,
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
        className: c.section,
        children: [
          u_1("h2", {
            className: c.sectionTitle,
            children: "Как сообщить о нарушении",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Если вы обнаружили контент, связанный с сексуальной эксплуатацией или насилием над детьми, немедленно сообщите об этом:",
          }),
          u_1("h3", { className: c.subsectionTitle, children: "В приложении" }),
          u_1("p", {
            className: c.text,
            children:
              "Нажмите на меню публикации или профиля и выберите «Пожаловаться». Выберите категорию, связанную с безопасностью детей. Жалобы данной категории рассматриваются в приоритетном порядке.",
          }),
          u_1("h3", {
            className: c.subsectionTitle,
            children: "По электронной почте",
          }),
          u_1("p", {
            className: c.text,
            children: [
              "Отправьте сообщение на адрес ",
              u_1("a", {
                href: "mailto:abuse@itd.fun",
                className: c.contact,
                children: "abuse@itd.fun",
              }),
              " с темой «Безопасность детей». Укажите ссылку на контент или имя пользователя, а также описание нарушения.",
            ],
          }),
        ],
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", {
            className: c.sectionTitle,
            children: "Обязательства перед законодательством",
          }),
          u_1("p", {
            className: c.text,
            children:
              "Приложение ИТД соответствует действующему законодательству Российской Федерации и международным стандартам в отношении безопасности детей. Мы обязуемся:",
          }),
          u_1("ul", {
            className: c.list,
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
        className: c.section,
        children: [
          u_1("h2", {
            className: c.sectionTitle,
            children: "Контактная информация",
          }),
          u_1("p", {
            className: c.text,
            children:
              "По вопросам, связанным с безопасностью детей на платформе ИТД:",
          }),
          u_1("ul", {
            className: c.list,
            children: [
              u_1("li", {
                children: [
                  "E-mail: ",
                  u_1("a", {
                    href: "mailto:abuse@itd.fun",
                    className: c.contact,
                    children: "abuse@itd.fun",
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
        ],
      }),
      u_1("section", {
        className: c.section,
        children: [
          u_1("h2", { className: c.sectionTitle, children: "Дополнительно" }),
          u_1("ul", {
            className: c.list,
            children: [
              u_1("li", {
                children: u_1("a", {
                  href: "/terms",
                  className: c.contact,
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
                  className: c.contact,
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
                  className: c.contact,
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
