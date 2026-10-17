import { au, aw, h as h_1, u, S } from "./index-DqQficWb.js";
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
      r._sentryDebugIds[n] = "8e0252ce-4a06-4050-977e-c9aa6f1a8e8a";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-8e0252ce-4a06-4050-977e-c9aa6f1a8e8a";
    }
  } catch {}
})();
const d = "jyq6";
const f = "wkfG";
const p = "WCBR";
const h = "wVEa";
const t = { event: d, icon: f, title: p, description: h };

export const Event = (r) => {
  const n = au();

  const a = aw((o) => o.fetchPortal);

  h_1(() => {
    a();
  }, [a]);

  if (n.active && n.url) {
    window.open(n.url, "_blank", "noopener,noreferrer");
  }

  return u("div", {
    className: t.event,
    children:
      n.active && n.url
        ? u(S, {
            children: [
              u("span", { className: t.icon, children: "✨" }),
              u("h1", { className: t.title, children: "Ивент активен!" }),
              u("p", {
                className: t.description,
                children: [
                  "Ссылка должна была открыться в новой вкладке.",
                  " ",
                  u("a", {
                    href: n.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Открыть вручную",
                  }),
                ],
              }),
            ],
          })
        : u(S, {
            children: [
              u("span", { className: t.icon, children: "✨" }),
              u("h1", {
                className: t.title,
                children: "Нет активного ивента",
              }),
              u("p", {
                className: t.description,
                children:
                  "Сейчас нет активных ивентов. Следите за обновлениями!",
              }),
            ],
          }),
  });
};

export { Event as Event };
