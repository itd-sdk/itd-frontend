import { a9, aa, Event as Event_1, a, m } from "./index-DuQT229k.js";
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
      r._sentryDebugIds[n] = "d78081a7-f241-48f7-a328-82eaf30a5d92";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-d78081a7-f241-48f7-a328-82eaf30a5d92";
    }
  } catch {}
})();
const d = "DVUZ";
const f = "ws2U";
const p = "qhZY";
const h = "fIxZ";
const t = { event: d, icon: f, title: p, description: h };

export const Event = (r) => {
  const n = a9();

  const a = aa((o) => o.fetchPortal);

  Event_1(() => {
    a();
  }, [a]);

  if (n.active && n.url) {
    window.open(n.url, "_blank", "noopener,noreferrer");
  }

  return a("div", {
    className: t.event,
    children:
      n.active && n.url
        ? a(m, {
            children: [
              a("span", { className: t.icon, children: "✨" }),
              a("h1", { className: t.title, children: "Ивент активен!" }),
              a("p", {
                className: t.description,
                children: [
                  "Ссылка должна была открыться в новой вкладке.",
                  " ",
                  a("a", {
                    href: n.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Открыть вручную",
                  }),
                ],
              }),
            ],
          })
        : a(m, {
            children: [
              a("span", { className: t.icon, children: "✨" }),
              a("h1", {
                className: t.title,
                children: "Нет активного ивента",
              }),
              a("p", {
                className: t.description,
                children:
                  "Сейчас нет активных ивентов. Следите за обновлениями!",
              }),
            ],
          }),
  });
};

export { Event as Event };
