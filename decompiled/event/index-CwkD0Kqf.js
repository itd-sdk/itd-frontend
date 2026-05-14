import { a8, a9, y, a, m } from "./index-7xRaK15k.js";
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
      r._sentryDebugIds[n] = "5aa22930-ca50-4012-92c6-345a6c5b1cf5";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-5aa22930-ca50-4012-92c6-345a6c5b1cf5";
    }
  } catch {}
})();
const d = "x5TI";
const f = "MLfp";
const p = "FzHn";
const h = "WM1V";
const t = { event: d, icon: f, title: p, description: h };

export const Event = (r) => {
  const n = a8();

  const a = a9((c) => c.fetchPortal);

  y(() => {
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
