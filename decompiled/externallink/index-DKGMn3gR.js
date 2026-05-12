import { T_1 as a_1, T as T_1, e as e_1 } from "./index-DDCL-vHK.js";
import { I as I_1 } from "./IconChevronLeft-Dk6onnGB.js";
import { I as I_2 } from "./IconInfo-CcKxyY8p.js";
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
    t.SENTRY_RELEASE = { id: "1.1.0" };
    const o = new t.Error().stack;

    if (o) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[o] = "e2f44802-76a3-45a3-b3d1-00a9ba94a3b7";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-e2f44802-76a3-45a3-b3d1-00a9ba94a3b7";
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

const N = "Tl6W";
const w = "gbkb";
const g = "uHKR";
const k = "RbhN";
const B = "scQj";
const v = "JqSj";
const U = "ous2";
const I = "eP0i";
const L = "NFsI";
const S = "VMAB";
const x = "zASF";
const T = "u4Bu";
const C = "kZGv";
const E = "LhOS";
const R = "E5y0";

const e = {
  page: N,
  backButton: w,
  iconWrapper: g,
  title: k,
  description: B,
  urlSection: v,
  sectionTitle: U,
  urlBox: I,
  domain: L,
  fullUrl: S,
  warningSection: x,
  warningList: T,
  actions: C,
  primaryButton: E,
  secondaryButton: R,
};

export function ExternalLink({ url }) {
  const o = T_1(() => {
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
    if (!o) {
      return { domain: null, fullUrl: null };
    }
    try {
      const l = new URL(o);
      return l.protocol !== "http:" && l.protocol !== "https:"
        ? { domain: null, fullUrl: null }
        : { domain: l.hostname, fullUrl: o };
    } catch {
      return { domain: null, fullUrl: null };
    }
  }, [o]);

  const r = () => {
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
            onClick: () => e_1("/"),
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
