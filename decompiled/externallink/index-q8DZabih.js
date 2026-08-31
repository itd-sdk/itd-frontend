import { u, T as T_1, e as e_1 } from "./index-ORJLmKGS.js";
import { I as I_1 } from "./IconChevronLeft-DN-Go-1D.js";
import { I as I_2 } from "./IconInfo-Bhfbazay.js";
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
    t.SENTRY_RELEASE = { id: "1.1.3" };
    const c = new t.Error().stack;

    if (c) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[c] = "c827a801-b092-4e44-8d11-1fceea432cdc";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-c827a801-b092-4e44-8d11-1fceea432cdc";
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

const w = "JmMI";
const N = "JS8G";
const g = "NY6E";
const B = "BWHH";
const k = "L32a";
const v = "wHce";
const U = "wbqn";
const I = "GU3y";
const L = "Z4AP";
const x = "JGTy";
const S = "SBV7";
const T = "Er97";
const E = "TO2L";
const C = "GxKJ";
const W = "BfrI";

const e = {
  page: w,
  backButton: N,
  iconWrapper: g,
  title: B,
  description: k,
  urlSection: v,
  sectionTitle: U,
  urlBox: I,
  domain: L,
  fullUrl: x,
  warningSection: S,
  warningList: T,
  actions: E,
  primaryButton: C,
  secondaryButton: W,
};

export function ExternalLink({ url }) {
  const c = T_1(() => {
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

  const { domain, fullUrl } = T_1(() => {
    if (!c) {
      return { domain: null, fullUrl: null };
    }
    try {
      const r = new URL(c);
      return r.protocol !== "http:" && r.protocol !== "https:"
        ? { domain: null, fullUrl: null }
        : { domain: r.hostname, fullUrl: c };
    } catch {
      return { domain: null, fullUrl: null };
    }
  }, [c]);

  const i = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      e_1("/");
    }
  };

  const h = () => {
    if (c) {
      window.location.href = c;
    }
  };

  return !c || !domain
    ? fullUrl("div", {
        className: e.page,
        children: [
          fullUrl("button", {
            className: e.backButton,
            onClick: i,
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
            onClick: i,
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
                onClick: i,
                children: "Остаться на ИТД",
              }),
            ],
          }),
        ],
      });
}

export { ExternalLink as ExternalLink, ExternalLink as default };
