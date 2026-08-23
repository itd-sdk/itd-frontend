import { ac, ad, y, Event as Event_1, k } from "./index-pEgBAsWz.js";
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
    r.SENTRY_RELEASE = { id: "1.1.2" };
    const n = new r.Error().stack;

    if (n) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[n] = "e3838282-7fb6-48ff-844d-83cbab00a9bd";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-e3838282-7fb6-48ff-844d-83cbab00a9bd";
    }
  } catch {}
})();
const d = "w3oy";
const f = "Mr9G";
const p = "cpEU";
const b = "q2f2";
const t = { event: d, icon: f, title: p, description: b };

export const Event = (r) => {
  const n = ac();

  const s = ad((c) => c.fetchPortal);

  y(() => {
    s();
  }, [s]);

  if (n.active && n.url) {
    window.open(n.url, "_blank", "noopener,noreferrer");
  }

  return Event_1("div", {
    className: t.event,
    children:
      n.active && n.url
        ? Event_1(k, {
            children: [
              Event_1("span", { className: t.icon, children: "✨" }),
              Event_1("h1", { className: t.title, children: "Ивент активен!" }),
              Event_1("p", {
                className: t.description,
                children: [
                  "Ссылка должна была открыться в новой вкладке.",
                  " ",
                  Event_1("a", {
                    href: n.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Открыть вручную",
                  }),
                ],
              }),
            ],
          })
        : Event_1(k, {
            children: [
              Event_1("span", { className: t.icon, children: "✨" }),
              Event_1("h1", {
                className: t.title,
                children: "Нет активного ивента",
              }),
              Event_1("p", {
                className: t.description,
                children:
                  "Сейчас нет активных ивентов. Следите за обновлениями!",
              }),
            ],
          }),
  });
};

export { Event as Event };
