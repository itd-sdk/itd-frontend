import {
  d,
  b,
  Hashtag_1 as y_1,
  Hashtag as Hashtag_1,
  p,
  u,
  P,
  V as V_1,
  c,
  u as u_1,
} from "./index-pEgBAsWz.js";

import { p as p_1 } from "./IconChevronLeft-4Cj0xkqD.js";
(() => {
  try {
    const a =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    a.SENTRY_RELEASE = { id: "1.1.2" };
    const n = new a.Error().stack;

    if (n) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[n] = "83915e1f-c395-4185-8eb1-8b1ed9183e1f";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-83915e1f-c395-4185-8eb1-8b1ed9183e1f";
    }
  } catch {}
})();
const R = "fUWW";
const S = "CCjb";
const U = "oP03";
const A = "xKMc";
const z = "Ahcc";
const F = "yppL";
const H = "QNSJ";
const Q = "zy1c";
const V = "wb4Q";

const s = {
  page: R,
  header: S,
  backButton: U,
  hashtagName: A,
  empty: z,
  emptyText: F,
  error: H,
  errorText: Q,
  retryButton: V,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [k, g] = d(true);
  const [p, b] = d(null);
  const [f, w] = d(null);
  const [u, N] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  y_1(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
    c((P) =>
      P.map((d) =>
        d.id === postId
          ? {
              ...d,
              reactions: {
                ...d.reactions,
                myReaction: myReaction,
                total: Math.max(0, d.reactions.total + totalDelta),
              },
            }
          : d
      )
    );
  }, [m]);
  const l = Hashtag_1(
    async (t) => {
      if (r) {
        try {
          if (t) {
            N(true);
          } else {
            g(true);
            b(null);
          }

          const o = await p.getPostsByHashtag(r, { limit: 20, cursor: t });

          c(t ? (i) => [...i, ...o.data] : o.data);

          w(o.nextCursor);
        } catch (o) {
          console.error("Failed to fetch hashtag posts:", o);

          if (!t) {
            b("Не удалось загрузить посты");
          }
        } finally {
          g(false);
          N(false);
        }
      }
    },
    [r]
  );
  y_1(() => {
    l();
  }, [l]);

  const L = Hashtag_1(() => {
    if (f && !u) {
      l(f);
    }
  }, [f, u, l]);

  const v = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1("/search");
    }
  };

  const C = Hashtag_1((t) => {
    c((o) => o.filter((i) => i.id !== t));
  }, []);

  return r
    ? u("div", {
        className: s.page,
        children: [
          u("div", {
            className: s.header,
            children: [
              u("button", {
                className: s.backButton,
                onClick: v,
                children: [u(p_1, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", r] }),
            ],
          }),
          k
            ? u(P, { count: 4 })
            : p
            ? u("div", {
                className: s.error,
                children: [
                  u("span", { className: s.errorText, children: p }),
                  u("button", {
                    className: s.retryButton,
                    onClick: () => l(),
                    children: "Повторить",
                  }),
                ],
              })
            : n.length === 0
            ? u("div", {
                className: s.empty,
                children: u("span", {
                  className: s.emptyText,
                  children: "Нет постов с этим хештегом",
                }),
              })
            : u(V_1, {
                posts: n,
                renderPost: (t) =>
                  u(c, {
                    post: t,
                    source: "hashtag",
                    sourceContext: r,
                    onDelete: C,
                  }),
                hasMore: !!f,
                isLoadingMore: u,
                onLoadMore: L,
              }),
        ],
      })
    : u("div", {
        className: s.page,
        children: u("div", {
          className: s.error,
          children: u("span", {
            className: s.errorText,
            children: "Хештег не указан",
          }),
        }),
      });
};

export { Hashtag as Hashtag, Hashtag as default };
