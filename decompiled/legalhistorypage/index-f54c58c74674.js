import { d, A, h, d as d_1, S as S_1, h as h_1 } from "./index-4cbec7521f6a.js";
import { I } from "./IconChevronLeft-e0277eea8342.js";
async function g(n) {
  const t = await fetch(n, { credentials: "include", cache: "no-store" });
  if (!t.ok) {
    throw new Error(
      t.status === 404 ? "Документ не найден" : "Не удалось загрузить документ"
    );
  }
  return t.json();
}
const p = {
  async list() {
    return (await g("/api/legal-documents?scope=social")).documents;
  },
  async current(n) {
    return (await g(`/api/legal-documents/social/${encodeURIComponent(n)}`))
      .document;
  },
  async versions(n) {
    return (
      await g(`/api/legal-documents/social/${encodeURIComponent(n)}/versions`)
    ).versions;
  },
  async version(n, t) {
    return (
      await g(
        `/api/legal-documents/social/${encodeURIComponent(
          n
        )}/versions/${encodeURIComponent(t)}`
      )
    ).document;
  },
};
function N(n) {
  const t = new Date(`${n}T00:00:00Z`);
  return Number.isNaN(t.getTime())
    ? n
    : t.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      });
}
const R = "RdKT";
const P = "CR33";
const U = "St2S";
const E = "x5ly";
const H = "QziZ";
const S = "OvhA";
const x = "gtXE";
const B = "cXdn";
const W = "H3lc";
const J = "HH9I";
const M = "jIgk";
const Z = "bsg1";
const j = "ntFD";
const z = "wKLQ";
const K = "PlGL";
const O = "O3Wl";
const Q = "kiWJ";
const X = "PyfJ";

const s = {
  page: R,
  back: P,
  title: U,
  lead: E,
  date: H,
  summary: S,
  notice: x,
  list: B,
  row: W,
  rowMain: J,
  rowTitle: M,
  rowDate: Z,
  actions: j,
  action: z,
  body: K,
  lines: O,
  state: Q,
  retry: X,
};

function C({ fallback = "/legal" }) {
  return d_1("button", {
    className: s.back,
    onClick: () =>
      window.history.length > 1 ? window.history.back() : h_1(fallback),
    children: [d_1(I, { size: 20 }), "Назад"],
  });
}
function m({ error, retry }) {
  return d_1("div", {
    className: s.state,
    children: [
      error ?? "Загрузка...",
      retry &&
        d_1("div", {
          children: d_1("button", {
            className: s.retry,
            onClick: retry,
            children: "Попробовать снова",
          }),
        }),
    ],
  });
}
function q(n) {
  return !n.includes("\\") && /^(https?:\/\/|mailto:|\/(?!\/))/i.test(n)
    ? n
    : "#";
}
function v(n) {
  const t = [];
  const r = /\[([^\]]+)]\(([^)]+)\)/g;
  let i = 0;
  for (const l of n.matchAll(r)) {
    const a = l.index ?? 0;

    if (a > i) {
      t.push(n.slice(i, a));
    }

    const d = q(l[2]);

    t.push(
      d_1("a", {
        href: d,
        target: d.startsWith("http") ? "_blank" : undefined,
        rel: d.startsWith("http") ? "noopener noreferrer" : undefined,
        children: l[1],
      })
    );

    i = a + l[0].length;
  }

  if (i < n.length) {
    t.push(n.slice(i));
  }

  return t;
}
function F({ block }) {
  switch (block.type) {
    case "heading":
      return block.level === 3;
    case "list":
      return d_1("ul", {
        children: block.items.map((t, r) => d_1("li", { children: v(t) }, r)),
      });
    case "lines":
      return d_1("div", {
        className: s.lines,
        children: block.items.map((t, r) => d_1("span", { children: v(t) }, r)),
      });
    default:
      return d_1("p", { children: v(block.text) });
  }
}
function _({ path }) {
  const [t, r] = d(null);
  const [i, l] = d("");
  const a = A(0);

  const d = () => {
    const o = ++a.current;
    l("");

    p.list()
      .then((c) => {
        if (o === a.current) {
          r(c);
        }
      })
      .catch((c) => {
        if (o === a.current) {
          l(c.message);
        }
      });
  };

  h(() => {
    d();

    return () => {
      a.current++;
    };
  }, []);

  return d_1("main", {
    className: s.page,
    "data-route": path,
    children: [
      d_1(C, { fallback: "/" }),
      d_1("h1", { className: s.title, children: "Правовые документы" }),
      d_1("p", {
        className: s.lead,
        children:
          "Здесь собраны действующие документы сервиса и предыдущие редакции.",
      }),
      i
        ? d_1(m, { error: i, retry: d })
        : t
        ? d_1("ul", {
            className: s.list,
            children: t.map((o) =>
              d_1(
                "li",
                {
                  children: d_1("a", {
                    className: s.row,
                    href: `/legal/${o.slug}`,
                    children: [
                      d_1("span", {
                        className: s.rowMain,
                        children: [
                          d_1("span", {
                            className: s.rowTitle,
                            children: o.title,
                          }),
                          d_1("span", {
                            className: s.summary,
                            children: o.summary,
                          }),
                        ],
                      }),
                      d_1("span", {
                        className: s.rowDate,
                        children: [
                          "Редакция от ",
                          N(o.documentDate ?? o.effectiveAt),
                        ],
                      }),
                    ],
                  }),
                },
                o.slug
              )
            ),
          })
        : d_1(m, {}),
    ],
  });
}

export function LegalDocumentPage({ slug = "", version }) {
  const [r, i] = d(null);
  const [l, a] = d(null);
  const [d, o] = d("");
  const c = A(0);

  const h = () => {
    const f = ++c.current;
    o("");
    i(null);
    a(null);
    const y = version ? p.version(slug, version) : p.current(slug);
    Promise.all([y, p.versions(slug)])
      .then(([w, A]) => {
        if (f === c.current) {
          i(w);
          a(A.find((I) => I.current) ?? null);
        }
      })
      .catch((w) => {
        if (f === c.current) {
          o(w.message);
        }
      });
  };

  h(() => {
    h();

    return () => {
      c.current++;
    };
  }, [slug, version]);
  const b = !!(r && l && r.version !== l.version);
  return d_1("main", {
    className: s.page,
    children: [
      d_1(C, {}),
      d
        ? d_1(m, { error: d, retry: h })
        : r
        ? d_1(S_1, {
            children: [
              d_1("h1", { className: s.title, children: r.title }),
              d_1("p", {
                className: s.date,
                children: [
                  "Редакция от ",
                  N(r.documentDate ?? r.effectiveAt),
                  " · версия ",
                  r.version,
                ],
              }),
              b &&
                d_1("div", {
                  className: s.notice,
                  children: [
                    "Вы открыли предыдущую редакцию документа. ",
                    d_1("a", {
                      href: `/legal/${slug}`,
                      children: "Перейти к действующей редакции",
                    }),
                    ".",
                  ],
                }),
              r.publishedAt &&
                d_1("p", {
                  className: s.date,
                  children: ["Опубликовано ", N(r.publishedAt.slice(0, 10))],
                }),
              d_1("div", {
                className: s.actions,
                children: d_1("a", {
                  className: s.action,
                  href: `/legal/${slug}/history`,
                  children: "История документа",
                }),
              }),
              d_1("article", {
                className: s.body,
                children: r.blocks.map((f, y) => d_1(F, { block: f }, y)),
              }),
            ],
          })
        : d_1(m, {}),
    ],
  });
}

function ee({ slug = "" }) {
  const [t, r] = d(null);
  const [i, l] = d("");
  const a = A(0);

  const d = () => {
    const c = ++a.current;
    l("");
    r(null);

    p.versions(slug)
      .then((h) => {
        if (c === a.current) {
          r(h);
        }
      })
      .catch((h) => {
        if (c === a.current) {
          l(h.message);
        }
      });
  };

  h(() => {
    d();

    return () => {
      a.current++;
    };
  }, [slug]);
  const o = t?.[0]?.title ?? "История документа";
  return d_1("main", {
    className: s.page,
    children: [
      d_1(C, { fallback: `/legal/${slug}` }),
      d_1("h1", { className: s.title, children: o }),
      d_1("p", { className: s.lead, children: "История редакций документа" }),
      i
        ? d_1(m, { error: i, retry: d })
        : t
        ? d_1("ul", {
            className: s.list,
            children: t.map((c) =>
              d_1(
                "li",
                {
                  children: d_1("a", {
                    className: s.row,
                    href: c.current
                      ? `/legal/${slug}`
                      : `/legal/${slug}/versions/${c.version}`,
                    children: [
                      d_1("span", {
                        className: s.rowTitle,
                        children: c.current
                          ? "Действующая редакция"
                          : `Редакция ${c.version}`,
                      }),
                      d_1("span", {
                        className: s.rowDate,
                        children: N(c.documentDate ?? c.effectiveAt),
                      }),
                    ],
                  }),
                },
                c.version
              )
            ),
          })
        : d_1(m, {}),
    ],
  });
}
export {
  LegalDocumentPage as LegalDocumentPage,
  _ as LegalDocumentsPage,
  ee as LegalHistoryPage,
};
