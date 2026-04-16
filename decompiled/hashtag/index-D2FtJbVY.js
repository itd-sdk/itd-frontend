import {
  d,
  K as K_1,
  y,
  q as q_1,
  $ as J_1,
  a,
  a5,
  V as V_1,
  W,
  $,
} from "./index-B0np_7Xy.js";

const K = "Ga794i-w";
const U = "u4c1nCmS";
const q = "iXnARpJB";
const A = "w7fKo2N4";
const D = "v83B8fyc";
const F = "_2Kaw4uM3";
const H = "u5iqJjma";
const S = "NyWI14sR";
const V = "Jlu-sI5I";

const s = {
  page: K,
  header: U,
  backButton: q,
  hashtagName: A,
  empty: D,
  emptyText: F,
  error: H,
  errorText: S,
  retryButton: V,
};

export const Hashtag = ({ name: p }) => {
  const [f, i] = d([]);
  const [k, y] = d(true);
  const [g, N] = d(null);
  const [d, v] = d(null);
  const [h, x] = d(false);
  const o = p ? decodeURIComponent(p) : "";

  const m = K_1((t) => t._lastLikeUpdate);

  y(() => {
    if (!m) {
      return;
    }
    const { postId: t, myReaction: a, totalDelta: n } = m;
    i((M) =>
      M.map((c) =>
        c.id === t
          ? {
              ...c,
              reactions: {
                ...c.reactions,
                myReaction: a,
                total: Math.max(0, c.reactions.total + n),
              },
            }
          : c
      )
    );
  }, [m]);
  const r = q_1(
    async (t) => {
      if (o) {
        try {
          if (t) {
            x(true);
          } else {
            y(true);
            N(null);
          }

          const a = await J_1.getPostsByHashtag(o, { limit: 20, cursor: t });

          i(t ? (n) => [...n, ...a.data] : a.data);

          v(a.nextCursor);
        } catch (a) {
          console.error("Failed to fetch hashtag posts:", a);

          if (!t) {
            N("Не удалось загрузить посты");
          }
        } finally {
          y(false);
          x(false);
        }
      }
    },
    [o]
  );
  y(() => {
    r();
  }, [r]);

  const w = q_1(() => {
    if (d && !h) {
      r(d);
    }
  }, [d, h, r]);

  const C = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/search");
    }
  };

  const L = q_1((t) => {
    i((a) => a.filter((n) => n.id !== t));
  }, []);

  return o
    ? a("div", {
        className: s.page,
        children: [
          a("div", {
            className: s.header,
            children: [
              a("button", {
                className: s.backButton,
                onClick: C,
                children: [a(a5, { size: 18 }), "Назад"],
              }),
              a("h1", { className: s.hashtagName, children: ["#", o] }),
            ],
          }),
          k
            ? null
            : g
            ? a("div", {
                className: s.error,
                children: [
                  a("span", { className: s.errorText, children: g }),
                  a("button", {
                    className: s.retryButton,
                    onClick: () => r(),
                    children: "Повторить",
                  }),
                ],
              })
            : f.length === 0
            ? a("div", {
                className: s.empty,
                children: a("span", {
                  className: s.emptyText,
                  children: "Нет постов с этим хештегом",
                }),
              })
            : a(V_1, {
                posts: f,
                renderPost: (t) => a(W, { post: t, onDelete: L }),
                hasMore: !!d,
                isLoadingMore: h,
                onLoadMore: w,
              }),
        ],
      })
    : a("div", {
        className: s.page,
        children: a("div", {
          className: s.error,
          children: a("span", {
            className: s.errorText,
            children: "Хештег не указан",
          }),
        }),
      });
};

export { Hashtag as Hashtag, Hashtag as default };
