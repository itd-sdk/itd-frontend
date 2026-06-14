import { a9, aa, y, y as y_1, m } from "./index-BAlLDjSl.js";
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
    r.SENTRY_RELEASE = { id: "1.1.1" };
    const n = new r.Error().stack;

    if (n) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[n] = "e6488ebc-d6f6-4f34-9517-5b08eec72bfe";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-e6488ebc-d6f6-4f34-9517-5b08eec72bfe";
    }
  } catch {}
})();
const d = "Qk9M";
const f = "ietW";
const p = "Gx2m";
const h = "UgVE";
const t = { event: d, icon: f, title: p, description: h };

export const Event = (r) => {
  const n = a9();

  const s = aa((o) => o.fetchPortal);

  y(() => {
    s();
  }, [s]);

  if (n.active && n.url) {
    window.open(n.url, "_blank", "noopener,noreferrer");
  }

  return y_1("div", {
    className: t.event,
    children:
      n.active && n.url
        ? y_1(m, {
            children: [
              y_1("span", { className: t.icon, children: "✨" }),
              y_1("h1", { className: t.title, children: "Ивент активен!" }),
              y_1("p", {
                className: t.description,
                children: [
                  "Ссылка должна была открыться в новой вкладке.",
                  " ",
                  y_1("a", {
                    href: n.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Открыть вручную",
                  }),
                ],
              }),
            ],
          })
        : y_1(m, {
            children: [
              y_1("span", { className: t.icon, children: "✨" }),
              y_1("h1", {
                className: t.title,
                children: "Нет активного ивента",
              }),
              y_1("p", {
                className: t.description,
                children:
                  "Сейчас нет активных ивентов. Следите за обновлениями!",
              }),
            ],
          }),
  });
};

export { Event as Event };
