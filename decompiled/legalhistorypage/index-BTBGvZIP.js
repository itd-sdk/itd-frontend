import { d, A, h, d as d_1, S as S_1, $ as $_1 } from "./index-CR_1arh8.js";
import { I } from "./IconChevronLeft-D9MJXHfq.js";
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
      e._sentryDebugIds[t] = "3243ba2c-9824-4b47-9ee8-962f880b5045";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-3243ba2c-9824-4b47-9ee8-962f880b5045";
    }
  } catch {}
})();
async function g(e) {
  const t = await fetch(e, { credentials: "include", cache: "no-store" });
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
  async current(e) {
    return (await g(`/api/legal-documents/social/${encodeURIComponent(e)}`))
      .document;
  },
  async versions(e) {
    return (
      await g(`/api/legal-documents/social/${encodeURIComponent(e)}/versions`)
    ).versions;
  },
  async version(e, t) {
    return (
      await g(
        `/api/legal-documents/social/${encodeURIComponent(
          e
        )}/versions/${encodeURIComponent(t)}`
      )
    ).document;
  },
};
function y(e) {
  const t = new Date(`${e}T00:00:00Z`);
  return Number.isNaN(t.getTime())
    ? e
    : t.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      });
}
const L = "ORfF";
const k = "xcn3";
const U = "XFsn";
const _ = "JlpH";
const x = "weRl";
const P = "Thzs";
const S = "Hj4p";
const B = "AmeL";
const H = "Wxv8";
const M = "fAoi";
const z = "cM1g";
const F = "FRhh";
const W = "zk1E";
const j = "ibvQ";
const J = "aPnA";
const V = "Us1o";
const Z = "ggGV";
const q = "rwfn";

const s = {
  page: L,
  back: k,
  title: U,
  lead: _,
  date: x,
  summary: P,
  notice: S,
  list: B,
  row: H,
  rowMain: M,
  rowTitle: z,
  rowDate: F,
  actions: W,
  action: j,
  body: J,
  lines: V,
  state: Z,
  retry: q,
};

function $({ fallback = "/legal" }) {
  return d_1("button", {
    className: s.back,
    onClick: () =>
      window.history.length > 1 ? window.history.back() : $_1(fallback),
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
function G(e) {
  return !e.includes("\\") && /^(https?:\/\/|mailto:|\/(?!\/))/i.test(e)
    ? e
    : "#";
}
function b(e) {
  const t = [];
  const r = /\[([^\]]+)]\(([^)]+)\)/g;
  let i = 0;
  for (const l of e.matchAll(r)) {
    const a = l.index ?? 0;

    if (a > i) {
      t.push(e.slice(i, a));
    }

    const d = G(l[2]);

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

  if (i < e.length) {
    t.push(e.slice(i));
  }

  return t;
}
function O({ block }) {
  switch (block.type) {
    case "heading":
      return block.level === 3;
    case "list":
      return d_1("ul", {
        children: block.items.map((t, r) => d_1("li", { children: b(t) }, r)),
      });
    case "lines":
      return d_1("div", {
        className: s.lines,
        children: block.items.map((t, r) => d_1("span", { children: b(t) }, r)),
      });
    default:
      return d_1("p", { children: b(block.text) });
  }
}
function Y({ path }) {
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
      d_1($, { fallback: "/" }),
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
                          y(o.documentDate ?? o.effectiveAt),
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
    const w = version ? p.version(slug, version) : p.current(slug);
    Promise.all([w, p.versions(slug)])
      .then(([N, I]) => {
        if (f === c.current) {
          i(N);
          a(I.find((T) => T.current) ?? null);
        }
      })
      .catch((N) => {
        if (f === c.current) {
          o(N.message);
        }
      });
  };

  h(() => {
    h();

    return () => {
      c.current++;
    };
  }, [slug, version]);
  const A = !!(r && l && r.version !== l.version);
  return d_1("main", {
    className: s.page,
    children: [
      d_1($, {}),
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
                  y(r.documentDate ?? r.effectiveAt),
                  " · версия ",
                  r.version,
                ],
              }),
              A &&
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
                  children: ["Опубликовано ", y(r.publishedAt.slice(0, 10))],
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
                children: r.blocks.map((f, w) => d_1(O, { block: f }, w)),
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
      d_1($, { fallback: `/legal/${slug}` }),
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
                        children: y(c.documentDate ?? c.effectiveAt),
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
  Y as LegalDocumentsPage,
  ee as LegalHistoryPage,
};
