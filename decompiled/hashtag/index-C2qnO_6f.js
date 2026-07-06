import {
  d,
  c,
  y,
  q as q_1,
  p,
  a,
  P,
  V as V_1,
  a as a_1,
  f,
} from "./index-CFv_0Hh6.js";
import { I } from "./IconChevronLeft-DRcQfgI5.js";
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
      a._sentryDebugIds[n] = "0921ef7d-4393-40a0-9d13-5b2882f5ca35";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-0921ef7d-4393-40a0-9d13-5b2882f5ca35";
    }
  } catch {}
})();
const _ = "WIvV";
const R = "nZvg";
const A = "KACA";
const U = "SWSG";
const V = "uJB9";
const q = "fd5w";
const F = "IGrh";
const G = "tMet";
const H = "ffqd";

const s = {
  page: _,
  header: R,
  backButton: A,
  hashtagName: U,
  empty: V,
  emptyText: q,
  error: F,
  errorText: G,
  retryButton: H,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [v, y] = d(true);
  const [p, N] = d(null);
  const [f, k] = d(null);
  const [u, b] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const m = c((t) => t._lastLikeUpdate);

  y(() => {
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
  const l = q_1(
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

          c(t ? (d) => [...d, ...o.data] : o.data);

          k(o.nextCursor);
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

  const w = q_1(() => {
    if (f && !u) {
      l(f);
    }
  }, [f, u, l]);

  const I = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      f("/search");
    }
  };

  const L = q_1((t) => {
    c((o) => o.filter((d) => d.id !== t));
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
                onClick: I,
                children: [name(I, { size: 18 }), "Назад"],
              }),
              name("h1", { className: s.hashtagName, children: ["#", r] }),
            ],
          }),
          v
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
                    onDelete: L,
                  }),
                hasMore: !!f,
                isLoadingMore: u,
                onLoadMore: w,
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
