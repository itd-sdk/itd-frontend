import { af, ag, y, af as af_1, k } from "./index-B0np_7Xy.js";
const i = "_-7Xe-49W";
const d = "_07qFtRu2";
const p = "_6EaeVaVY";
const h = "WfOJ2SDV";
const n = { event: i, icon: d, title: p, description: h };

export const Event = (f) => {
  const r = af();

  const t = ag((s) => s.fetchPortal);

  y(() => {
    t();
  }, [t]);

  if (r.active && r.url) {
    window.open(r.url, "_blank", "noopener,noreferrer");
  }

  return af_1("div", {
    className: n.event,
    children:
      r.active && r.url
        ? af_1(k, {
            children: [
              af_1("span", { className: n.icon, children: "✨" }),
              af_1("h1", { className: n.title, children: "Ивент активен!" }),
              af_1("p", {
                className: n.description,
                children: [
                  "Ссылка должна была открыться в новой вкладке.",
                  " ",
                  af_1("a", {
                    href: r.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Открыть вручную",
                  }),
                ],
              }),
            ],
          })
        : af_1(k, {
            children: [
              af_1("span", { className: n.icon, children: "✨" }),
              af_1("h1", {
                className: n.title,
                children: "Нет активного ивента",
              }),
              af_1("p", {
                className: n.description,
                children:
                  "Сейчас нет активных ивентов. Следите за обновлениями!",
              }),
            ],
          }),
  });
};

export { Event as Event };
