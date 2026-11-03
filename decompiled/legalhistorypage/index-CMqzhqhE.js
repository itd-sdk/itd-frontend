import {
  d,
  $_1 as A_1,
  h,
  d as d_1,
  S as S_1,
  $ as $_1,
} from "./index-GOT6tyDH.js";
import { I } from "./IconChevronLeft-BFqryDV6.js";
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
      e._sentryDebugIds[t] = "baf5e3bf-85fa-445a-93c7-e827db3d63c0";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-baf5e3bf-85fa-445a-93c7-e827db3d63c0";
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
const f = {
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
const k = "S8mO";
const B = "i1Yf";
const L = "pBJg";
const U = "cXmf";
const P = "RE5v";
const S = "necy";
const _ = "XHhI";
const W = "P68l";
const x = "vdNP";
const H = "BQt8";
const J = "NI9H";
const M = "JRW7";
const Q = "W7X6";
const X = "yU75";
const q = "QQgx";
const z = "TRzq";
const Y = "kkBw";
const Z = "KWnt";

const s = {
  page: k,
  back: B,
  title: L,
  lead: U,
  date: P,
  summary: S,
  notice: _,
  list: W,
  row: x,
  rowMain: H,
  rowTitle: J,
  rowDate: M,
  actions: Q,
  action: X,
  body: q,
  lines: z,
  state: Y,
  retry: Z,
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
function j(e) {
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

    const d = j(l[2]);

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
function K({ block }) {
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
function F({ path }) {
  const [t, r] = d(null);
  const [i, l] = d("");
  const a = A_1(0);

  const d = () => {
    const o = ++a.current;
    l("");

    f.list()
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
  const c = A_1(0);

  const h = () => {
    const p = ++c.current;
    o("");
    i(null);
    a(null);
    const N = version ? f.version(slug, version) : f.current(slug);
    Promise.all([N, f.versions(slug)])
      .then(([w, T]) => {
        if (p === c.current) {
          i(w);
          a(T.find((E) => E.current) ?? null);
        }
      })
      .catch((w) => {
        if (p === c.current) {
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
  const I = !!(r && l && r.version !== l.version);
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
              I &&
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
                children: r.blocks.map((p, N) => d_1(K, { block: p }, N)),
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
  const a = A_1(0);

  const d = () => {
    const c = ++a.current;
    l("");
    r(null);

    f.versions(slug)
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
  F as LegalDocumentsPage,
  ee as LegalHistoryPage,
};
