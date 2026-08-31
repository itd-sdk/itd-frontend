import { ac, ad, h as h_1, u, S } from "./index-ORJLmKGS.js";
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
    r.SENTRY_RELEASE = { id: "1.1.3" };
    const n = new r.Error().stack;

    if (n) {
      r._sentryDebugIds = r._sentryDebugIds || {};
      r._sentryDebugIds[n] = "c8272092-5ee6-4bfd-a763-dbdc9a70d965";
      r._sentryDebugIdIdentifier =
        "sentry-dbid-c8272092-5ee6-4bfd-a763-dbdc9a70d965";
    }
  } catch {}
})();
const a = "GeOG";
const f = "kzcM";
const p = "JxAd";
const h = "w51H";
const t = { event: a, icon: f, title: p, description: h };

export const Event = (r) => {
  const n = ac();

  const s = ad((o) => o.fetchPortal);

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
