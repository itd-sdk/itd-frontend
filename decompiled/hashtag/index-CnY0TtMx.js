import {
  d,
  c,
  y,
  q,
  p,
  a,
  P,
  V as V_1,
  a as a_1,
  f,
} from "./index-DuQT229k.js";
import { p as p_1 } from "./IconChevronLeft-CbQdWkHt.js";
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
      a._sentryDebugIds[n] = "a072e296-4054-4a26-b726-5574761d9296";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-a072e296-4054-4a26-b726-5574761d9296";
    }
  } catch {}
})();
const R = "cKoQ";
const S = "BWPk";
const K = "VvGx";
const U = "vv1m";
const V = "iiPw";
const A = "P9KK";
const F = "eJXD";
const H = "TaQl";
const Q = "E6kD";

const s = {
  page: R,
  header: S,
  backButton: K,
  hashtagName: U,
  empty: V,
  emptyText: A,
  error: F,
  errorText: H,
  retryButton: Q,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [k, y] = d(true);
  const [p, N] = d(null);
  const [u, v] = d(null);
  const [f, b] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const m = c((t) => t._lastLikeUpdate);

  y(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
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
  }, [m]);
  const l = q(
    async (t) => {
      if (r) {
        try {
          if (t) {
            b(true);
          } else {
            y(true);
            N(null);
          }

          const o = await p.getPostsByHashtag(r, { limit: 20, cursor: t });

          c(t ? (i) => [...i, ...o.data] : o.data);

          v(o.nextCursor);
        } catch (o) {
          console.error("Failed to fetch hashtag posts:", o);

          if (!t) {
            N("Не удалось загрузить посты");
          }
        } finally {
          y(false);
          b(false);
        }
      }
    },
    [r]
  );
  y(() => {
    l();
  }, [l]);

  const P = q(() => {
    if (u && !f) {
      l(u);
    }
  }, [u, f, l]);

  const w = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      f("/search");
    }
  };

  const T = q((t) => {
    c((o) => o.filter((i) => i.id !== t));
  }, []);

  return r
    ? name("div", {
        className: s.page,
        children: [
          name("div", {
            className: s.header,
            children: [
              name("button", {
                className: s.backButton,
                onClick: w,
                children: [name(p_1, { size: 18 }), "Назад"],
              }),
              name("h1", { className: s.hashtagName, children: ["#", r] }),
            ],
          }),
          k
            ? name(P, { count: 4 })
            : p
            ? name("div", {
                className: s.error,
                children: [
                  name("span", { className: s.errorText, children: p }),
                  name("button", {
                    className: s.retryButton,
                    onClick: () => l(),
                    children: "Повторить",
                  }),
                ],
              })
            : n.length === 0
            ? name("div", {
                className: s.empty,
                children: name("span", {
                  className: s.emptyText,
                  children: "Нет постов с этим хештегом",
                }),
              })
            : name(V_1, {
                posts: n,
                renderPost: (t) =>
                  name(a_1, {
                    post: t,
                    source: "hashtag",
                    sourceContext: r,
                    onDelete: T,
                  }),
                hasMore: !!u,
                isLoadingMore: f,
                onLoadMore: P,
              }),
        ],
      })
    : name("div", {
        className: s.page,
        children: name("div", {
          className: s.error,
          children: name("span", {
            className: s.errorText,
            children: "Хештег не указан",
          }),
        }),
      });
};

export { Hashtag as Hashtag, Hashtag as default };
