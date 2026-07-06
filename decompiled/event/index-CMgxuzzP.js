import { a9, aa, y, a9 as a9_1, m } from "./index-CFv_0Hh6.js";
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
      r._sentryDebugIds[n] = "631b4641-f790-45a0-8573-919e47617c35";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-631b4641-f790-45a0-8573-919e47617c35";
    }
  } catch {}
})();
const d = "bSsx";
const f = "qvwE";
const p = "xjfM";
const h = "BFi9";
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

  return a9_1("div", {
    className: t.event,
    children:
      n.active && n.url
        ? a9_1(m, {
            children: [
              a9_1("span", { className: t.icon, children: "✨" }),
              a9_1("h1", { className: t.title, children: "Ивент активен!" }),
              a9_1("p", {
                className: t.description,
                children: [
                  "Ссылка должна была открыться в новой вкладке.",
                  " ",
                  a9_1("a", {
                    href: n.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Открыть вручную",
                  }),
                ],
              }),
            ],
          })
        : a9_1(m, {
            children: [
              a9_1("span", { className: t.icon, children: "✨" }),
              a9_1("h1", {
                className: t.title,
                children: "Нет активного ивента",
              }),
              a9_1("p", {
                className: t.description,
                children:
                  "Сейчас нет активных ивентов. Следите за обновлениями!",
              }),
            ],
          }),
  });
};

export { Event as Event };
