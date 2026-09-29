import { at, av, h as h_1, u, S } from "./index-D4QRo1-7.js";
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
      r._sentryDebugIds[n] = "ed428f5b-c57b-4d82-9452-a48ff0fedde3";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-ed428f5b-c57b-4d82-9452-a48ff0fedde3";
    }
  } catch {}
})();
const a = "vNyH";
const f = "RPg7";
const h = "YION";
const p = "YhZM";
const t = { event: a, icon: f, title: h, description: p };

export const Event = (r) => {
  const n = at();

  const s = av((i) => i.fetchPortal);

  h_1(() => {
    s();
  }, [s]);

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
