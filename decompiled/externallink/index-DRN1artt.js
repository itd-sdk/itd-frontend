import { u, a5, e as e_1 } from "./index-DqQficWb.js";
import { I as I_1 } from "./IconChevronLeft-BgCU8yQL.js";
import { I as I_2 } from "./IconInfo-BvfW0bF0.js";
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
    const i = new t.Error().stack;

    if (i) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[i] = "93c3c9bf-1a21-4e80-940d-7708e8a2ad44";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-93c3c9bf-1a21-4e80-940d-7708e8a2ad44";
    }
  } catch {}
})();

const b = ({ size = 48 }) =>
  u("svg", {
    width: size,
    height: size,
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

const g = "E1E2";
const w = "QFNg";
const N = "dZzp";
const k = "cgbV";
const B = "JkFe";
const v = "B0yE";
const U = "x4ej";
const x = "hE5m";
const L = "S1iG";
const E = "NQPf";
const I = "UyH1";
const S = "L1Ym";
const T = "Pgo5";
const C = "Tixw";
const D = "Fqrp";

const e = {
  page: g,
  backButton: w,
  iconWrapper: N,
  title: k,
  description: B,
  urlSection: v,
  sectionTitle: U,
  urlBox: x,
  domain: L,
  fullUrl: E,
  warningSection: I,
  warningList: S,
  actions: T,
  primaryButton: C,
  secondaryButton: D,
};

export function ExternalLink({ url }) {
  const i = a5(() => {
    try {
      const l = new URLSearchParams(window.location.search).get("url") || url;
      if (!l) {
        return null;
      }
      const m = atob(l);

      const p = Uint8Array.from(m, (f) => f.charCodeAt(0));

      return new TextDecoder().decode(p);
    } catch {
      return null;
    }
  }, [url]);

  const { domain, fullUrl } = a5(() => {
    if (!i) {
      return { domain: null, fullUrl: null };
    }
    try {
      const c = new URL(i);
      return c.protocol !== "http:" && c.protocol !== "https:"
        ? { domain: null, fullUrl: null }
        : { domain: c.hostname, fullUrl: i };
    } catch {
      return { domain: null, fullUrl: null };
    }
  }, [i]);

  const r = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      e_1("/");
    }
  };

  const h = () => {
    if (i) {
      window.location.href = i;
    }
  };

  return !i || !domain
    ? fullUrl("div", {
        className: e.page,
        children: [
          fullUrl("button", {
            className: e.backButton,
            onClick: r,
            children: [
              fullUrl(I_1, { size: 20 }),
              fullUrl("span", { children: "Назад" }),
            ],
          }),
          fullUrl("div", {
            className: e.iconWrapper,
            children: fullUrl(I_2, { size: 48 }),
          }),
          fullUrl("h1", { className: e.title, children: "Неверная ссылка" }),
          fullUrl("p", {
            className: e.description,
            children:
              "Не удалось определить адрес для перехода. Возможно, ссылка была повреждена или устарела.",
          }),
          fullUrl("button", {
            className: e.primaryButton,
            onClick: () => e_1("/"),
            children: "На главную",
          }),
        ],
      })
    : fullUrl("div", {
        className: e.page,
        children: [
          fullUrl("button", {
            className: e.backButton,
            onClick: r,
            children: [
              fullUrl(I_1, { size: 20 }),
              fullUrl("span", { children: "Назад" }),
            ],
          }),
          fullUrl("div", {
            className: e.iconWrapper,
            children: fullUrl(b, { size: 48 }),
          }),
          fullUrl("h1", {
            className: e.title,
            children: "Переход на внешний сайт",
          }),
          fullUrl("p", {
            className: e.description,
            children:
              "Вы покидаете ИТД и переходите на внешний ресурс. Мы не можем гарантировать безопасность и содержимое этого сайта. Убедитесь, что доверяете этому ресурсу.",
          }),
          fullUrl("div", {
            className: e.urlSection,
            children: [
              fullUrl("h2", {
                className: e.sectionTitle,
                children: "Адрес назначения",
              }),
              fullUrl("div", {
                className: e.urlBox,
                children: [
                  fullUrl("span", { className: e.domain, children: domain }),
                  fullUrl("span", { className: e.fullUrl, children: fullUrl }),
                ],
              }),
            ],
          }),
          fullUrl("div", {
            className: e.warningSection,
            children: [
              fullUrl("h2", {
                className: e.sectionTitle,
                children: "Обратите внимание",
              }),
              fullUrl("ul", {
                className: e.warningList,
                children: [
                  fullUrl("li", {
                    children:
                      "ИТД не несёт ответственности за содержимое внешних сайтов",
                  }),
                  fullUrl("li", {
                    children:
                      "Не вводите личные данные на подозрительных ресурсах",
                  }),
                  fullUrl("li", {
                    children: "Проверяйте адрес сайта перед вводом паролей",
                  }),
                ],
              }),
            ],
          }),
          fullUrl("div", {
            className: e.actions,
            children: [
              fullUrl("button", {
                className: e.primaryButton,
                onClick: h,
                children: ["Перейти на ", domain],
              }),
              fullUrl("button", {
                className: e.secondaryButton,
                onClick: r,
                children: "Остаться на ИТД",
              }),
            ],
          }),
        ],
      });
}

export { ExternalLink as ExternalLink, ExternalLink as default };
