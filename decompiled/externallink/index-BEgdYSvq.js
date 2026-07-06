import { f as a_1, T as T_1, f } from "./index-CFv_0Hh6.js";
import { I as I_1 } from "./IconChevronLeft-DRcQfgI5.js";
import { I as I_2 } from "./IconInfo-_boABZd-.js";
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
    const c = new t.Error().stack;

    if (c) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[c] = "e397ff5d-9a4c-4844-9f2b-066bbcdbfc37";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-e397ff5d-9a4c-4844-9f2b-066bbcdbfc37";
    }
  } catch {}
})();

const y = ({ size = 48 }) =>
  a_1("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      a_1("path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      }),
      a_1("polyline", { points: "15 3 21 3 21 9" }),
      a_1("line", { x1: "10", y1: "14", x2: "21", y2: "3" }),
    ],
  });

const w = "kETa";
const N = "tkbS";
const g = "mpKJ";
const k = "TbRL";
const v = "Ubvz";
const B = "fayn";
const U = "d7Aj";
const L = "ysSZ";
const T = "DMTS";
const I = "VR32";
const S = "OuId";
const x = "QnL4";
const C = "CTGR";
const E = "vVY8";
const R = "ymfG";

const e = {
  page: w,
  backButton: N,
  iconWrapper: g,
  title: k,
  description: v,
  urlSection: B,
  sectionTitle: U,
  urlBox: L,
  domain: T,
  fullUrl: I,
  warningSection: S,
  warningList: x,
  actions: C,
  primaryButton: E,
  secondaryButton: R,
};

export function ExternalLink({ url }) {
  const c = T_1(() => {
    try {
      const l = new URLSearchParams(window.location.search).get("url") || url;
      if (!l) {
        return null;
      }
      const f = atob(l);

      const m = Uint8Array.from(f, (p) => p.charCodeAt(0));

      return new TextDecoder().decode(m);
    } catch {
      return null;
    }
  }, [url]);

  const { domain, fullUrl } = T_1(() => {
    if (!c) {
      return { domain: null, fullUrl: null };
    }
    try {
      const i = new URL(c);
      return i.protocol !== "http:" && i.protocol !== "https:"
        ? { domain: null, fullUrl: null }
        : { domain: i.hostname, fullUrl: c };
    } catch {
      return { domain: null, fullUrl: null };
    }
  }, [c]);

  const r = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      f("/");
    }
  };

  const h = () => {
    if (c) {
      window.location.href = c;
    }
  };

  return !c || !domain
    ? a_1("div", {
        className: e.page,
        children: [
          a_1("button", {
            className: e.backButton,
            onClick: r,
            children: [
              a_1(I_1, { size: 20 }),
              a_1("span", { children: "Назад" }),
            ],
          }),
          a_1("div", {
            className: e.iconWrapper,
            children: a_1(I_2, { size: 48 }),
          }),
          a_1("h1", { className: e.title, children: "Неверная ссылка" }),
          a_1("p", {
            className: e.description,
            children:
              "Не удалось определить адрес для перехода. Возможно, ссылка была повреждена или устарела.",
          }),
          a_1("button", {
            className: e.primaryButton,
            onClick: () => f("/"),
            children: "На главную",
          }),
        ],
      })
    : a_1("div", {
        className: e.page,
        children: [
          a_1("button", {
            className: e.backButton,
            onClick: r,
            children: [
              a_1(I_1, { size: 20 }),
              a_1("span", { children: "Назад" }),
            ],
          }),
          a_1("div", {
            className: e.iconWrapper,
            children: a_1(y, { size: 48 }),
          }),
          a_1("h1", {
            className: e.title,
            children: "Переход на внешний сайт",
          }),
          a_1("p", {
            className: e.description,
            children:
              "Вы покидаете ИТД и переходите на внешний ресурс. Мы не можем гарантировать безопасность и содержимое этого сайта. Убедитесь, что доверяете этому ресурсу.",
          }),
          a_1("div", {
            className: e.urlSection,
            children: [
              a_1("h2", {
                className: e.sectionTitle,
                children: "Адрес назначения",
              }),
              a_1("div", {
                className: e.urlBox,
                children: [
                  a_1("span", { className: e.domain, children: domain }),
                  a_1("span", { className: e.fullUrl, children: fullUrl }),
                ],
              }),
            ],
          }),
          a_1("div", {
            className: e.warningSection,
            children: [
              a_1("h2", {
                className: e.sectionTitle,
                children: "Обратите внимание",
              }),
              a_1("ul", {
                className: e.warningList,
                children: [
                  a_1("li", {
                    children:
                      "ИТД не несёт ответственности за содержимое внешних сайтов",
                  }),
                  a_1("li", {
                    children:
                      "Не вводите личные данные на подозрительных ресурсах",
                  }),
                  a_1("li", {
                    children: "Проверяйте адрес сайта перед вводом паролей",
                  }),
                ],
              }),
            ],
          }),
          a_1("div", {
            className: e.actions,
            children: [
              a_1("button", {
                className: e.primaryButton,
                onClick: h,
                children: ["Перейти на ", domain],
              }),
              a_1("button", {
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
