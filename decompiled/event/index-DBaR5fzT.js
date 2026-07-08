import { a9, aa, Event as Event_1, m as a_1, m } from "./index-BewGW5_v.js";
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
      r._sentryDebugIds[n] = "e013c535-a416-4cfa-9d48-09db8e261141";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-e013c535-a416-4cfa-9d48-09db8e261141";
    }
  } catch {}
})();
const d = "yzna";
const f = "NpSi";
const p = "QyOP";
const h = "qg68";
const t = { event: d, icon: f, title: p, description: h };

export const Event = (r) => {
  const n = a9();

  const s = aa((i) => i.fetchPortal);

  Event_1(() => {
    s();
  }, [s]);

  if (n.active && n.url) {
    window.open(n.url, "_blank", "noopener,noreferrer");
  }

  return a_1("div", {
    className: t.event,
    children:
      n.active && n.url
        ? a_1(m, {
            children: [
              a_1("span", { className: t.icon, children: "✨" }),
              a_1("h1", { className: t.title, children: "Ивент активен!" }),
              a_1("p", {
                className: t.description,
                children: [
                  "Ссылка должна была открыться в новой вкладке.",
                  " ",
                  a_1("a", {
                    href: n.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Открыть вручную",
                  }),
                ],
              }),
            ],
          })
        : a_1(m, {
            children: [
              a_1("span", { className: t.icon, children: "✨" }),
              a_1("h1", {
                className: t.title,
                children: "Нет активного ивента",
              }),
              a_1("p", {
                className: t.description,
                children:
                  "Сейчас нет активных ивентов. Следите за обновлениями!",
              }),
            ],
          }),
  });
};

export { Event as Event };
