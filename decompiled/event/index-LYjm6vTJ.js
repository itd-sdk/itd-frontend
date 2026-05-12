import { a6, a7, y, a7 as a7_1, y as y_1 } from "./index-DDCL-vHK.js";
(() => {
  try {
    const r =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    r.SENTRY_RELEASE = { id: "1.1.0" };
    const n = new r.Error().stack;

    if (n) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[n] = "8c43b7df-0756-473e-86d6-e0fcdd0ad478";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-8c43b7df-0756-473e-86d6-e0fcdd0ad478";
    }
  } catch {}
})();
const d = "icfz";
const f = "zWoF";
const p = "TBIP";
const h = "aUJG";
const t = { event: d, icon: f, title: p, description: h };

export const Event = (r) => {
  const n = a6();

  const s = a7((c) => c.fetchPortal);

  y(() => {
    s();
  }, [s]);

  if (n.active && n.url) {
    window.open(n.url, "_blank", "noopener,noreferrer");
  }

  return a7_1("div", {
    className: t.event,
    children:
      n.active && n.url
        ? a7_1(y_1, {
            children: [
              a7_1("span", { className: t.icon, children: "✨" }),
              a7_1("h1", { className: t.title, children: "Ивент активен!" }),
              a7_1("p", {
                className: t.description,
                children: [
                  "Ссылка должна была открыться в новой вкладке.",
                  " ",
                  a7_1("a", {
                    href: n.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Открыть вручную",
                  }),
                ],
              }),
            ],
          })
        : a7_1(y_1, {
            children: [
              a7_1("span", { className: t.icon, children: "✨" }),
              a7_1("h1", {
                className: t.title,
                children: "Нет активного ивента",
              }),
              a7_1("p", {
                className: t.description,
                children:
                  "Сейчас нет активных ивентов. Следите за обновлениями!",
              }),
            ],
          }),
  });
};

export { Event as Event };
