import { d, h as h_1, d as d_1, S as S_1, e } from "./index-dnACTU3c.js";
import { I } from "./IconChevronLeft-Bhjo82wQ.js";
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
    const n = new e.Error().stack;

    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "edd9c751-1aab-486f-a1b5-44d3848e095f";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-edd9c751-1aab-486f-a1b5-44d3848e095f";
    }
  } catch {}
})();
async function g(e) {
  const n = await fetch(e, { credentials: "include", cache: "no-store" });
  if (!n.ok) {
    throw new Error(
      n.status === 404 ? "Документ не найден" : "Не удалось загрузить документ"
    );
  }
  return n.json();
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
  async version(e, n) {
    return (
      await g(
        `/api/legal-documents/social/${encodeURIComponent(
          e
        )}/versions/${encodeURIComponent(n)}`
      )
    ).document;
  },
};
function y(e) {
  const n = new Date(`${e}T00:00:00Z`);
  return Number.isNaN(n.getTime())
    ? e
    : n.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      });
}
const E = "flSu";
const k = "HeR8";
const R = "yWbr";
const U = "MWSi";
const S = "Zo50";
const M = "xLel";
const _ = "l7Mb";
const H = "oLiz";
const P = "fP1U";
const j = "mkdH";
const x = "oQNk";
const B = "jsL1";
const W = "nau7";
const z = "UtYQ";
const Z = "MHrz";
const q = "FgIq";
const Q = "mj5w";
const Y = "jA2e";

const s = {
  page: E,
  back: k,
  title: R,
  lead: U,
  date: S,
  summary: M,
  notice: _,
  list: H,
  row: P,
  rowMain: j,
  rowTitle: x,
  rowDate: B,
  actions: W,
  action: z,
  body: Z,
  lines: q,
  state: Q,
  retry: Y,
};

function D({ fallback = "/legal" }) {
  return d_1("button", {
    className: s.back,
    onClick: () =>
      window.history.length > 1 ? window.history.back() : fallback(fallback),
    children: [d_1(I, { size: 20 }), "Назад"],
  });
}
function h({ error, retry }) {
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
function F(e) {
  return !e.includes("\\") && /^(https?:\/\/|mailto:|\/(?!\/))/i.test(e)
    ? e
    : "#";
}
function v(e) {
  const n = [];
  const a = /\[([^\]]+)]\(([^)]+)\)/g;
  let l = 0;
  for (const i of e.matchAll(a)) {
    const o = i.index ?? 0;

    if (o > l) {
      n.push(e.slice(l, o));
    }

    const d = F(i[2]);

    n.push(
      d_1("a", {
        href: d,
        target: d.startsWith("http") ? "_blank" : undefined,
        rel: d.startsWith("http") ? "noopener noreferrer" : undefined,
        children: i[1],
      })
    );

    l = o + i[0].length;
  }

  if (l < e.length) {
    n.push(e.slice(l));
  }

  return n;
}
function J({ block }) {
  switch (block.type) {
    case "heading":
      return block.level === 3;
    case "list":
      return d_1("ul", {
        children: block.items.map((n, a) => d_1("li", { children: v(n) }, a)),
      });
    case "lines":
      return d_1("div", {
        className: s.lines,
        children: block.items.map((n, a) => d_1("span", { children: v(n) }, a)),
      });
    default:
      return d_1("p", { children: v(block.text) });
  }
}
function K({ path }) {
  const [n, a] = d(null);
  const [l, i] = d("");
  const [o, d] = d(0);

  h_1(() => {
    let c = true;

    f.list()
      .then((r) => {
        if (c) {
          i("");
          a(r);
        }
      })
      .catch((r) => {
        if (c) {
          i(r.message);
        }
      });

    return () => {
      c = false;
      i("");
      a(null);
    };
  }, [o]);

  return d_1("main", {
    className: s.page,
    "data-route": path,
    children: [
      d_1(D, { fallback: "/" }),
      d_1("h1", { className: s.title, children: "Правовые документы" }),
      d_1("p", {
        className: s.lead,
        children:
          "Здесь собраны действующие документы сервиса и предыдущие редакции.",
      }),
      l
        ? d_1(h, { error: l, retry: () => d((c) => c + 1) })
        : n
        ? d_1("ul", {
            className: s.list,
            children: n.map((c) =>
              d_1(
                "li",
                {
                  children: d_1("a", {
                    className: s.row,
                    href: `/legal/${c.slug}`,
                    children: [
                      d_1("span", {
                        className: s.rowMain,
                        children: [
                          d_1("span", {
                            className: s.rowTitle,
                            children: c.title,
                          }),
                          d_1("span", {
                            className: s.summary,
                            children: c.summary,
                          }),
                        ],
                      }),
                      d_1("span", {
                        className: s.rowDate,
                        children: [
                          "Редакция от ",
                          y(c.documentDate ?? c.effectiveAt),
                        ],
                      }),
                    ],
                  }),
                },
                c.slug
              )
            ),
          })
        : d_1(h, {}),
    ],
  });
}

export function LegalDocumentPage({ slug = "", version }) {
  const [a, l] = d(null);
  const [i, o] = d(null);
  const [d, c] = d("");
  const [r, p] = d(0);
  h_1(() => {
    let m = true;
    const w = version ? f.version(slug, version) : f.current(slug);

    Promise.all([w, f.versions(slug)])
      .then(([N, A]) => {
        if (m) {
          c("");
          l(N);
          o(A.find((I) => I.current) ?? null);
        }
      })
      .catch((N) => {
        if (m) {
          c(N.message);
        }
      });

    return () => {
      m = false;
      c("");
      l(null);
      o(null);
    };
  }, [slug, version, r]);
  const $ = !!(a && i && a.version !== i.version);
  return d_1("main", {
    className: s.page,
    children: [
      d_1(D, {}),
      d
        ? d_1(h, { error: d, retry: () => p((m) => m + 1) })
        : a
        ? d_1(S_1, {
            children: [
              d_1("h1", { className: s.title, children: a.title }),
              d_1("p", {
                className: s.date,
                children: [
                  "Редакция от ",
                  y(a.documentDate ?? a.effectiveAt),
                  " · версия ",
                  a.version,
                ],
              }),
              $ &&
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
              a.publishedAt &&
                d_1("p", {
                  className: s.date,
                  children: ["Опубликовано ", y(a.publishedAt.slice(0, 10))],
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
                children: a.blocks.map((m, w) => d_1(J, { block: m }, w)),
              }),
            ],
          })
        : d_1(h, {}),
    ],
  });
}

function X({ slug = "" }) {
  const [n, a] = d(null);
  const [l, i] = d("");
  const [o, d] = d(0);
  h_1(() => {
    let r = true;

    f.versions(slug)
      .then((p) => {
        if (r) {
          i("");
          a(p);
        }
      })
      .catch((p) => {
        if (r) {
          i(p.message);
        }
      });

    return () => {
      r = false;
      i("");
      a(null);
    };
  }, [slug, o]);
  const c = n?.[0]?.title ?? "История документа";
  return d_1("main", {
    className: s.page,
    children: [
      d_1(D, { fallback: `/legal/${slug}` }),
      d_1("h1", { className: s.title, children: c }),
      d_1("p", { className: s.lead, children: "История редакций документа" }),
      l
        ? d_1(h, { error: l, retry: () => d((r) => r + 1) })
        : n
        ? d_1("ul", {
            className: s.list,
            children: n.map((r) =>
              d_1(
                "li",
                {
                  children: d_1("a", {
                    className: s.row,
                    href: r.current
                      ? `/legal/${slug}`
                      : `/legal/${slug}/versions/${r.version}`,
                    children: [
                      d_1("span", {
                        className: s.rowTitle,
                        children: r.current
                          ? "Действующая редакция"
                          : `Редакция ${r.version}`,
                      }),
                      d_1("span", {
                        className: s.rowDate,
                        children: y(r.documentDate ?? r.effectiveAt),
                      }),
                    ],
                  }),
                },
                r.version
              )
            ),
          })
        : d_1(h, {}),
    ],
  });
}
export {
  LegalDocumentPage as LegalDocumentPage,
  K as LegalDocumentsPage,
  X as LegalHistoryPage,
};
