import { f as a_1, T as T_1, f } from "./index-DuQT229k.js";
import { I as I_1 } from "./IconChevronLeft-CbQdWkHt.js";
import { I as I_2 } from "./IconInfo-BIX6X1qJ.js";
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
      t._sentryDebugIds[i] = "ed5a81b8-77bc-447b-9087-d906d615bd46";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-ed5a81b8-77bc-447b-9087-d906d615bd46";
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

const g = "n4PW";
const w = "OWgl";
const N = "gRY1";
const k = "QOK3";
const B = "YSGT";
const v = "slj1";
const x = "ixY9";
const U = "Tj7d";
const I = "LY6P";
const L = "PWAr";
const S = "ISg3";
const T = "ZrQy";
const C = "uBbb";
const W = "eyxO";
const E = "Ogxk";

const e = {
  page: g,
  backButton: w,
  iconWrapper: N,
  title: k,
  description: B,
  urlSection: v,
  sectionTitle: x,
  urlBox: U,
  domain: I,
  fullUrl: L,
  warningSection: S,
  warningList: T,
  actions: C,
  primaryButton: W,
  secondaryButton: E,
};

export function ExternalLink({ url }) {
  const i = T_1(() => {
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
    if (!i) {
      return { domain: null, fullUrl: null };
    }
    try {
      const r = new URL(i);
      return r.protocol !== "http:" && r.protocol !== "https:"
        ? { domain: null, fullUrl: null }
        : { domain: r.hostname, fullUrl: i };
    } catch {
      return { domain: null, fullUrl: null };
    }
  }, [i]);

  const l = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      f("/");
    }
  };

  const h = () => {
    if (i) {
      window.location.href = i;
    }
  };

  return !i || !domain
    ? a_1("div", {
        className: e.page,
        children: [
          a_1("button", {
            className: e.backButton,
            onClick: l,
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
            onClick: l,
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
                onClick: l,
                children: "Остаться на ИТД",
              }),
            ],
          }),
        ],
      });
}

export { ExternalLink as ExternalLink, ExternalLink as default };
