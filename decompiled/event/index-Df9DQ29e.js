import { af, ah, h as h_1, u, S } from "./index-B74jCtUp.js";
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
      r._sentryDebugIds[n] = "a9f5cd02-6ae7-4ee0-a1d9-d1045b23fed3";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-a9f5cd02-6ae7-4ee0-a1d9-d1045b23fed3";
    }
  } catch {}
})();
const d = "CRTz";
const f = "UJWG";
const p = "dbz6";
const h = "ZpuG";
const t = { event: d, icon: f, title: p, description: h };

export const Event = (r) => {
  const n = af();

  const s = ah((a) => a.fetchPortal);

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
