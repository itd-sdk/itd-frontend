import { n, h as h_1, $, H, u as u_1 } from "./index-AoERIL5v.js";
const u = "ZqBO";
const h = "zodB";
const g = "Ke5h";
const a = { page: u, header: h, status: g };

export function EventsPage({ path }) {
  const { event, loaded, error } = path();
  const t = loaded && event?.visible === true;

  h_1(() => {
    if (t) {
      $(H.route, true);
    }
  }, [t]);

  return t
    ? null
    : u_1("section", {
        className: a.page,
        "data-route": path,
        "aria-labelledby": "event-heading",
        children: [
          u_1("header", {
            className: a.header,
            children: u_1("h1", { id: "event-heading", children: "Ивент" }),
          }),
          u_1("p", {
            className: a.status,
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
