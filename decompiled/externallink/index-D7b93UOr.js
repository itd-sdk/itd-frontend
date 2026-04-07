import { u, T as T_1, a3, ac, $ } from "./index-BzlbFDoq.js";

const y = ({ size: c = 48 }) =>
  u("svg", {
    width: c,
    height: c,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      }),
      u("polyline", { points: "15 3 21 3 21 9" }),
      u("line", { x1: "10", y1: "14", x2: "21", y2: "3" }),
    ],
  });

const w = "jRhSP5DY";
const B = "OhXMnVM0";
const k = "_12aBmgiN";
const g = "im68BWEY";
const b = "Kh7HZS-J";
const v = "_1dz9EYNw";
const L = "BmYWWTNc";
const U = "_13eNnYjo";
const S = "WvQXPD7m";
const x = "_08oLyt-m";
const C = "XyhsyoP8";
const W = "hzyTLVvC";
const T = "RD-FupFo";
const z = "SosS6GJL";
const P = "Mm5NzsGg";

const e = {
  page: w,
  backButton: B,
  iconWrapper: k,
  title: g,
  description: b,
  urlSection: v,
  sectionTitle: L,
  urlBox: U,
  domain: S,
  fullUrl: x,
  warningSection: C,
  warningList: W,
  actions: T,
  primaryButton: z,
  secondaryButton: P,
};

export function ExternalLink({ url: c }) {
  const t = T_1(() => {
    try {
      const r = new URLSearchParams(window.location.search).get("url") || c;
      if (!r) {
        return null;
      }
      const m = atob(r);

      const p = Uint8Array.from(m, (N) => N.charCodeAt(0));

      return new TextDecoder().decode(p);
    } catch {
      return null;
    }
  }, [c]);

  const { domain: l, fullUrl: h } = T_1(() => {
    if (!t) {
      return { domain: null, fullUrl: null };
    }
    try {
      const o = new URL(t);
      return o.protocol !== "http:" && o.protocol !== "https:"
        ? { domain: null, fullUrl: null }
        : { domain: o.hostname, fullUrl: t };
    } catch {
      return { domain: null, fullUrl: null };
    }
  }, [t]);

  const i = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };

  const u = () => {
    if (t) {
      window.location.href = t;
    }
  };

  return !t || !l
    ? u("div", {
        className: e.page,
        children: [
          u("button", {
            className: e.backButton,
            onClick: i,
            children: [u(a3, { size: 20 }), u("span", { children: "Назад" })],
          }),
          u("div", { className: e.iconWrapper, children: u(ac, { size: 48 }) }),
          u("h1", { className: e.title, children: "Неверная ссылка" }),
          u("p", {
            className: e.description,
            children:
              "Не удалось определить адрес для перехода. Возможно, ссылка была повреждена или устарела.",
          }),
          u("button", {
            className: e.primaryButton,
            onClick: () => $("/"),
            children: "На главную",
          }),
        ],
      })
    : u("div", {
        className: e.page,
        children: [
          u("button", {
            className: e.backButton,
            onClick: i,
            children: [u(a3, { size: 20 }), u("span", { children: "Назад" })],
          }),
          u("div", { className: e.iconWrapper, children: u(y, { size: 48 }) }),
          u("h1", { className: e.title, children: "Переход на внешний сайт" }),
          u("p", {
            className: e.description,
            children:
              "Вы покидаете ИТД и переходите на внешний ресурс. Мы не можем гарантировать безопасность и содержимое этого сайта. Убедитесь, что доверяете этому ресурсу.",
          }),
          u("div", {
            className: e.urlSection,
            children: [
              u("h2", {
                className: e.sectionTitle,
                children: "Адрес назначения",
              }),
              u("div", {
                className: e.urlBox,
                children: [
                  u("span", { className: e.domain, children: l }),
                  u("span", { className: e.fullUrl, children: h }),
                ],
              }),
            ],
          }),
          u("div", {
            className: e.warningSection,
            children: [
              u("h2", {
                className: e.sectionTitle,
                children: "Обратите внимание",
              }),
              u("ul", {
                className: e.warningList,
                children: [
                  u("li", {
                    children:
                      "ИТД не несёт ответственности за содержимое внешних сайтов",
                  }),
                  u("li", {
                    children:
                      "Не вводите личные данные на подозрительных ресурсах",
                  }),
                  u("li", {
                    children: "Проверяйте адрес сайта перед вводом паролей",
                  }),
                ],
              }),
            ],
          }),
          u("div", {
            className: e.actions,
            children: [
              u("button", {
                className: e.primaryButton,
                onClick: u,
                children: ["Перейти на ", l],
              }),
              u("button", {
                className: e.secondaryButton,
                onClick: i,
                children: "Остаться на ИТД",
              }),
            ],
          }),
        ],
      });
}

export { ExternalLink as ExternalLink, ExternalLink as default };
