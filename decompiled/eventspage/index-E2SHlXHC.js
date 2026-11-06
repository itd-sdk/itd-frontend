import { n, h as h_1, $, H, H as H_1 } from "./index-CR_1arh8.js";
(() => {
  try {
    const e =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "1.1.2" };
    const t = new e.Error().stack;

    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "92da44d9-9586-4340-97f6-60f613a0fbd1";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-92da44d9-9586-4340-97f6-60f613a0fbd1";
    }
  } catch {}
})();
const f = "XlWF";
const c = "Gu9h";
const h = "tgHr";
const d = { page: f, header: c, status: h };

export function EventsPage({ path }) {
  const { event, loaded, error } = n();
  const n = loaded && event?.visible === true;

  h_1(() => {
    if (n) {
      $(H.route, true);
    }
  }, [n]);

  return n
    ? null
    : H_1("section", {
        className: d.page,
        "data-route": path,
        "aria-labelledby": "event-heading",
        children: [
          H_1("header", {
            className: d.header,
            children: H_1("h1", { id: "event-heading", children: "Ивент" }),
          }),
          H_1("p", {
            className: d.status,
            role: "status",
            children: error
              ? "Не удалось загрузить ивент. Повторим при восстановлении связи."
              : loaded
              ? "Сейчас нет активного ивента."
              : "Загружаем ивент…",
          }),
        ],
      });
}

export { EventsPage as EventsPage };
