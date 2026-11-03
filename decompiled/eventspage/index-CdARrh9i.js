import { H_1 as n_1, h, $, H, H as H_1 } from "./index-GOT6tyDH.js";
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
      e._sentryDebugIds[t] = "d9b3b093-2cd7-48e2-9d42-95f02a99fd5a";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-d9b3b093-2cd7-48e2-9d42-95f02a99fd5a";
    }
  } catch {}
})();
const c = "hRBK";
const f = "UfnW";
const b = "E0eN";
const d = { page: c, header: f, status: b };

export function EventsPage({ path }) {
  const { event, loaded, error } = n_1();
  const a = loaded && event?.visible === true;

  h(() => {
    if (a) {
      $(H.route, true);
    }
  }, [a]);

  return a
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
