import { u, T as T_1, e as e_1 } from "./index-DBLtLuBZ.js";
import { I as I_1 } from "./IconChevronLeft-0Of1x6nI.js";
import { I as I_2 } from "./IconInfo-q2DBkXjI.js";
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
    const o = new t.Error().stack;

    if (o) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[o] = "725ec698-0776-43e4-bde5-59329766ff3c";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-725ec698-0776-43e4-bde5-59329766ff3c";
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

const g = "CXUW";
const w = "CBvF";
const N = "IvGj";
const k = "lgZF";
const v = "EnJd";
const B = "WeTv";
const U = "vD6S";
const x = "Hcgk";
const I = "oZEJ";
const L = "RifW";
const C = "YxY8";
const S = "b7q2";
const T = "xevk";
const E = "AOAO";
const W = "aDBZ";

const e = {
  page: g,
  backButton: w,
  iconWrapper: N,
  title: k,
  description: v,
  urlSection: B,
  sectionTitle: U,
  urlBox: x,
  domain: I,
  fullUrl: L,
  warningSection: C,
  warningList: S,
  actions: T,
  primaryButton: E,
  secondaryButton: W,
};

export function ExternalLink({ url }) {
  const o = T_1(() => {
    try {
      const r = new URLSearchParams(window.location.search).get("url") || url;
      if (!r) {
        return null;
      }
      const m = atob(r);

      const p = Uint8Array.from(m, (f) => f.charCodeAt(0));

      return new TextDecoder().decode(p);
    } catch {
      return null;
    }
  }, [url]);

  const { domain, fullUrl } = T_1(() => {
    if (!o) {
      return { domain: null, fullUrl: null };
    }
    try {
      const c = new URL(o);
      return c.protocol !== "http:" && c.protocol !== "https:"
        ? { domain: null, fullUrl: null }
        : { domain: c.hostname, fullUrl: o };
    } catch {
      return { domain: null, fullUrl: null };
    }
  }, [o]);

  const l = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      e_1("/");
    }
  };

  const h = () => {
    if (o) {
      window.location.href = o;
    }
  };

  return !o || !domain
    ? fullUrl("div", {
        className: e.page,
        children: [
          fullUrl("button", {
            className: e.backButton,
            onClick: l,
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
            onClick: l,
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
                onClick: l,
                children: "Остаться на ИТД",
              }),
            ],
          }),
        ],
      });
}

export { ExternalLink as ExternalLink, ExternalLink as default };
