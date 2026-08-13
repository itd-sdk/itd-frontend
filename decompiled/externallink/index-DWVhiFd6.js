import { u, T as T_1, e as e_1 } from "./index-B9FitUXy.js";
import { I as I_1 } from "./IconChevronLeft-DoFeid_h.js";
import { I as I_2 } from "./IconInfo-C8NLXfbe.js";
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
    const r = new t.Error().stack;

    if (r) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[r] = "b5afb1df-3848-4889-a1b7-88065f67a0d9";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-b5afb1df-3848-4889-a1b7-88065f67a0d9";
    }
  } catch {}
})();

const y = ({ size = 48 }) =>
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

const w = "rkEE";
const g = "aH8h";
const N = "ZnKN";
const k = "jWTb";
const B = "rWLt";
const v = "xcGr";
const U = "Su3B";
const L = "JBRq";
const x = "g9Mp";
const I = "jw5A";
const T = "VnUM";
const E = "BTrM";
const S = "wkKY";
const C = "igWu";
const W = "BA4E";

const e = {
  page: w,
  backButton: g,
  iconWrapper: N,
  title: k,
  description: B,
  urlSection: v,
  sectionTitle: U,
  urlBox: L,
  domain: x,
  fullUrl: I,
  warningSection: T,
  warningList: E,
  actions: S,
  primaryButton: C,
  secondaryButton: W,
};

export function ExternalLink({ url }) {
  const r = T_1(() => {
    try {
      const c = new URLSearchParams(window.location.search).get("url") || url;
      if (!c) {
        return null;
      }
      const m = atob(c);

      const p = Uint8Array.from(m, (f) => f.charCodeAt(0));

      return new TextDecoder().decode(p);
    } catch {
      return null;
    }
  }, [url]);

  const { domain, fullUrl } = T_1(() => {
    if (!r) {
      return { domain: null, fullUrl: null };
    }
    try {
      const o = new URL(r);
      return o.protocol !== "http:" && o.protocol !== "https:"
        ? { domain: null, fullUrl: null }
        : { domain: o.hostname, fullUrl: r };
    } catch {
      return { domain: null, fullUrl: null };
    }
  }, [r]);

  const l = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      e_1("/");
    }
  };

  const h = () => {
    if (r) {
      window.location.href = r;
    }
  };

  return !r || !domain
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
            children: fullUrl(y, { size: 48 }),
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
