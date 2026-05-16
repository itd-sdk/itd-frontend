import { a8, a9, y, a, m } from "./index-BCnJB3wz.js";
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
      r._sentryDebugIds[n] = "b9048cb5-6bd4-49e3-a8d1-8a7e66fd522c";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-b9048cb5-6bd4-49e3-a8d1-8a7e66fd522c";
    }
  } catch {}
})();
const d = "WAow";
const f = "I4e1";
const p = "l3rc";
const h = "tMiR";
const t = { event: d, icon: f, title: p, description: h };

export const Event = (r) => {
  const n = a8();

  const s = a9((a) => a.fetchPortal);

  y(() => {
    s();
  }, [s]);

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
