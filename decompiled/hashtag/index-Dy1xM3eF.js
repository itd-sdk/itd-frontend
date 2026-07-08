import {
  d,
  c,
  y,
  q as q_1,
  p,
  a,
  p as p_1,
  V as V_1,
  a as a_1,
  f,
} from "./index-BewGW5_v.js";
import { c as c_1 } from "./IconChevronLeft-Cn8Oe6J-.js";
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
    const r = new a.Error().stack;

    if (r) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[r] = "508d21ff-5c95-4d78-83d5-b7958c48fdfe";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-508d21ff-5c95-4d78-83d5-b7958c48fdfe";
    }
  } catch {}
})();
const _ = "nety";
const S = "ugvv";
const A = "mRkB";
const H = "HTbv";
const U = "lOnZ";
const F = "f0pZ";
const V = "KA6l";
const Z = "wv21";
const q = "kb2k";

const s = {
  page: _,
  header: S,
  backButton: A,
  hashtagName: H,
  empty: U,
  emptyText: F,
  error: V,
  errorText: Z,
  retryButton: q,
};

export const Hashtag = ({ name }) => {
  const [r, c] = d([]);
  const [v, y] = d(true);
  const [p, b] = d(null);
  const [f, x] = d(null);
  const [u, N] = d(false);
  const n = name ? decodeURIComponent(name) : "";

  const m = c((t) => t._lastLikeUpdate);

  y(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
    c((B) =>
      B.map((i) =>
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
      if (n) {
        try {
          if (t) {
            N(true);
          } else {
            y(true);
            b(null);
          }

          const o = await p.getPostsByHashtag(n, { limit: 20, cursor: t });

          c(t ? (d) => [...d, ...o.data] : o.data);

          x(o.nextCursor);
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
    [n]
  );
  y(() => {
    l();
  }, [l]);

  const w = q_1(() => {
    if (f && !u) {
      l(f);
    }
  }, [f, u, l]);

  const T = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      f("/search");
    }
  };

  const L = q_1((t) => {
    c((o) => o.filter((d) => d.id !== t));
  }, []);

  return n
    ? name("div", {
        className: s.page,
        children: [
          name("div", {
            className: s.header,
            children: [
              name("button", {
                className: s.backButton,
                onClick: T,
                children: [name(c_1, { size: 18 }), "Назад"],
              }),
              name("h1", { className: s.hashtagName, children: ["#", n] }),
            ],
          }),
          v
            ? name(p_1, { count: 4 })
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
            : r.length === 0
            ? name("div", {
                className: s.empty,
                children: name("span", {
                  className: s.emptyText,
                  children: "Нет постов с этим хештегом",
                }),
              })
            : name(V_1, {
                posts: r,
                renderPost: (t) =>
                  name(a_1, {
                    post: t,
                    source: "hashtag",
                    sourceContext: n,
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
