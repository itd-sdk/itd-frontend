import { ac, ad, h as h_1, Event as Event_1, S } from "./index-dnACTU3c.js";
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
      r._sentryDebugIds[n] = "a322b191-1fa9-414b-ab1e-fcffb7f0228f";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-a322b191-1fa9-414b-ab1e-fcffb7f0228f";
    }
  } catch {}
})();
const d = "ht9L";
const f = "wUov";
const b = "XHmb";
const h = "c2Xv";
const t = { event: d, icon: f, title: b, description: h };

export const Event = (r) => {
  const n = ac();

  const s = ad((a) => a.fetchPortal);

  h_1(() => {
    s();
  }, [s]);

  if (n.active && n.url) {
    window.open(n.url, "_blank", "noopener,noreferrer");
  }

  return Event_1("div", {
    className: t.event,
    children:
      n.active && n.url
        ? Event_1(S, {
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
        : Event_1(S, {
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
