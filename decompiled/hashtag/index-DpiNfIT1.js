import {
  d,
  c,
  q_1 as y_1,
  q as q_1,
  p,
  a,
  p as p_1,
  V as V_1,
  a as a_1,
  f,
} from "./index-7xRaK15k.js";
import { c as c_1 } from "./IconChevronLeft-CN0ttJhV.js";
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
    a.SENTRY_RELEASE = { id: "1.1.1" };
    const r = new a.Error().stack;

    if (r) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[r] = "165f81af-eaa1-4e96-a820-323e724312e5";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-165f81af-eaa1-4e96-a820-323e724312e5";
    }
  } catch {}
})();
const _ = "n6VR";
const S = "Cymo";
const U = "YkK6";
const F = "T9TF";
const V = "ydpW";
const q = "u0MG";
const A = "dfqG";
const G = "JufW";
const H = "nSU9";

const s = {
  page: _,
  header: S,
  backButton: U,
  hashtagName: F,
  empty: V,
  emptyText: q,
  error: A,
  errorText: G,
  retryButton: H,
};

export const Hashtag = ({ name }) => {
  const [r, c] = d([]);
  const [k, g] = d(true);
  const [p, N] = d(null);
  const [f, T] = d(null);
  const [u, b] = d(false);
  const n = name ? decodeURIComponent(name) : "";

  const m = c((t) => t._lastLikeUpdate);

  y_1(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
    c((C) =>
      C.map((d) =>
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
  const l = q_1(
    async (t) => {
      if (n) {
        try {
          if (t) {
            b(true);
          } else {
            g(true);
            N(null);
          }

          const o = await p.getPostsByHashtag(n, { limit: 20, cursor: t });

          c(t ? (i) => [...i, ...o.data] : o.data);

          T(o.nextCursor);
        } catch (o) {
          console.error("Failed to fetch hashtag posts:", o);

          if (!t) {
            N("Не удалось загрузить посты");
          }
        } finally {
          g(false);
          b(false);
        }
      }
    },
    [n]
  );
  y_1(() => {
    l();
  }, [l]);

  const v = q_1(() => {
    if (f && !u) {
      l(f);
    }
  }, [f, u, l]);

  const w = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      f("/search");
    }
  };

  const L = q_1((t) => {
    c((o) => o.filter((i) => i.id !== t));
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
                onClick: w,
                children: [name(c_1, { size: 18 }), "Назад"],
              }),
              name("h1", { className: s.hashtagName, children: ["#", n] }),
            ],
          }),
          k
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
                onLoadMore: v,
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
