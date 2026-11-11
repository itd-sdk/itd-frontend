import {
  d,
  b,
  d as d_1,
  q,
  p,
  u,
  p as p_1,
  V as V_1,
  c,
  u as u_1,
} from "./index-dnACTU3c.js";
import { b as b_1 } from "./IconChevronLeft-Bhjo82wQ.js";
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
      a._sentryDebugIds[n] = "9b6b0d84-5b6a-40f8-b15b-12d8c71a8d1f";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-9b6b0d84-5b6a-40f8-b15b-12d8c71a8d1f";
    }
  } catch {}
})();
const S = "WUnC";
const _ = "JNRS";
const U = "Ce4O";
const O = "zO2r";
const z = "hR6o";
const A = "f54o";
const F = "weN3";
const H = "K9WS";
const V = "yOdc";

const s = {
  page: S,
  header: _,
  backButton: U,
  hashtagName: O,
  empty: z,
  emptyText: A,
  error: F,
  errorText: H,
  retryButton: V,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [k, y] = d(true);
  const [b, p] = d(null);
  const [f, w] = d(null);
  const [u, N] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  d_1(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
    c((T) =>
      T.map((i) =>
        i.id === postId
          ? {
              ...i,
              reactions: {
                ...i.reactions,
                myReaction: myReaction,
                total: Math.max(0, i.reactions.total + totalDelta),
              },
            }
          : i
      )
    );
  }, [m]);
  const l = q(
    async (t) => {
      if (r) {
        try {
          if (t) {
            N(true);
          } else {
            y(true);
            p(null);
          }

          const o = await p.getPostsByHashtag(r, { limit: 20, cursor: t });

          c(t ? (d) => [...d, ...o.data] : o.data);

          w(o.nextCursor);
        } catch (o) {
          console.error("Failed to fetch hashtag posts:", o);

          if (!t) {
            p("Не удалось загрузить посты");
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

  const v = q(() => {
    if (f && !u) {
      l(f);
    }
  }, [f, u, l]);

  const C = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1("/search");
    }
  };

  const L = q((t) => {
    c((o) => o.filter((d) => d.id !== t));
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
                onClick: C,
                children: [u(b_1, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", r] }),
            ],
          }),
          k
            ? u(p_1, { count: 4 })
            : b
            ? u("div", {
                className: s.error,
                children: [
                  u("span", { className: s.errorText, children: b }),
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
                    onDelete: L,
                  }),
                hasMore: !!f,
                isLoadingMore: u,
                onLoadMore: v,
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
