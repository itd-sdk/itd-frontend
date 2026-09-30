import { at, av, h as h_1, Event as Event_1, S } from "./index-BuVp7kGl.js";
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
      r._sentryDebugIds[n] = "24f15270-7a6b-46b1-ba4d-7c7532f7482b";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-24f15270-7a6b-46b1-ba4d-7c7532f7482b";
    }
  } catch {}
})();
const d = "ohU9";
const f = "U8IN";
const h = "U36R";
const p = "rNC6";
const t = { event: d, icon: f, title: h, description: p };

export const Event = (r) => {
  const n = at();

  const s = av((i) => i.fetchPortal);

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
