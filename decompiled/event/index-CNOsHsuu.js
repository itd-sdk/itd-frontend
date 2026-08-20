import { ac, ad, y, Event as Event_1, k } from "./index-DDTOXJaD.js";
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
      r._sentryDebugIds[n] = "f75497a5-20b3-432d-80b3-b36061357347";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-f75497a5-20b3-432d-80b3-b36061357347";
    }
  } catch {}
})();
const d = "yS17";
const f = "vpL7";
const p = "ebwF";
const h = "ShsS";
const t = { event: d, icon: f, title: p, description: h };

export const Event = (r) => {
  const n = ac();

  const s = ad((i) => i.fetchPortal);

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
