import { ak, h as h_1, $, al, $ as $_1 } from "./index-4cbec7521f6a.js";
const d = "ppMw";
const h = "Bu01";
const p = "XB3M";
const t = { page: d, header: h, status: p };

export function EventsPage({ path }) {
  const { event, loaded, error } = ak();
  const a = loaded && event?.visible === true;

  h_1(() => {
    if (a) {
      $(al.route, true);
    }
  }, [a]);

  return a
    ? null
    : $_1("section", {
        className: t.page,
        "data-route": path,
        "aria-labelledby": "event-heading",
        children: [
          $_1("header", {
            className: t.header,
            children: $_1("h1", { id: "event-heading", children: "Ивент" }),
          }),
          $_1("p", {
            className: t.status,
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
