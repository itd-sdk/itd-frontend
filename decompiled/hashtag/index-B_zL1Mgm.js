import {
  d,
  b,
  d as d_1,
  Hashtag as Hashtag_1,
  p,
  u,
  p as p_1,
  V as V_1,
  c,
  u as u_1,
} from "./index-ORJLmKGS.js";

import { I } from "./IconChevronLeft-DN-Go-1D.js";
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
    a.SENTRY_RELEASE = { id: "1.1.3" };
    const n = new a.Error().stack;

    if (n) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[n] = "37c37a90-2870-4ad0-a513-b5af5cbb121b";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-37c37a90-2870-4ad0-a513-b5af5cbb121b";
    }
  } catch {}
})();
const R = "g7OG";
const S = "KTNr";
const U = "vGnr";
const A = "gueU";
const F = "yHKg";
const H = "AXye";
const V = "Yn2I";
const G = "eOCF";
const K = "fDMV";

const s = {
  page: R,
  header: S,
  backButton: U,
  hashtagName: A,
  empty: F,
  emptyText: H,
  error: V,
  errorText: G,
  retryButton: K,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [k, y] = d(true);
  const [p, b] = d(null);
  const [u, v] = d(null);
  const [f, N] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const g = b((t) => t._lastLikeUpdate);

  d_1(() => {
    if (!g) {
      return;
    }
    const { postId, myReaction, totalDelta } = g;
    c((L) =>
      L.map((d) =>
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
  }, [g]);
  const l = Hashtag_1(
    async (t) => {
      if (r) {
        try {
          if (t) {
            N(true);
          } else {
            y(true);
            b(null);
          }

          const o = await p.getPostsByHashtag(r, { limit: 20, cursor: t });

          c(t ? (i) => [...i, ...o.data] : o.data);

          v(o.nextCursor);
        } catch (o) {
          console.error("Failed to fetch hashtag posts:", o);

          if (!t) {
            b("Не удалось загрузить посты");
          }
        } finally {
          y(false);
          N(false);
        }
      }
    },
    [r]
  );
  d_1(() => {
    l();
  }, [l]);

  const T = Hashtag_1(() => {
    if (u && !f) {
      l(u);
    }
  }, [u, f, l]);

  const w = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1("/search");
    }
  };

  const I = Hashtag_1((t) => {
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
                onClick: w,
                children: [u(I, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", r] }),
            ],
          }),
          k
            ? u(p_1, { count: 4 })
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
                    onDelete: I,
                  }),
                hasMore: !!u,
                isLoadingMore: f,
                onLoadMore: T,
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
