import {
  d,
  b,
  h,
  q as q_1,
  p,
  q_1 as q_1_1,
  c,
  V as V_1,
  q_1_1 as q_1_1_1,
  $,
} from "./index-AoERIL5v.js";
import { c as c_1 } from "./IconChevronLeft-esjxi0mx.js";
const F = "ryKf";
const q = "Iqzk";
const D = "ZExG";
const E = "Wl2s";
const H = "vZXx";
const S = "mMzF";
const V = "PJ3P";
const X = "RNXu";
const Z = "yUIv";

const s = {
  page: F,
  header: q,
  backButton: D,
  hashtagName: E,
  empty: H,
  emptyText: S,
  error: V,
  errorText: X,
  retryButton: Z,
};

export const Hashtag = ({ name }) => {
  const [f, i] = d([]);
  const [v, g] = d(true);
  const [y, N] = d(null);
  const [d, P] = d(null);
  const [h, x] = d(false);
  const o = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  h(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
    i((M) =>
      M.map((c) =>
        c.id === postId
          ? {
              ...c,
              reactions: {
                ...c.reactions,
                myReaction: myReaction,
                total: Math.max(0, c.reactions.total + totalDelta),
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
            g(true);
            N(null);
          }

          const a = await name.getPostsByHashtag(o, { limit: 20, cursor: t });

          i(t ? (n) => [...n, ...a.data] : a.data);

          P(a.nextCursor);
        } catch (a) {
          console.error("Failed to fetch hashtag posts:", a);

          if (!t) {
            N("Не удалось загрузить посты");
          }
        } finally {
          g(false);
          x(false);
        }
      }
    },
    [o]
  );
  h(() => {
    r();
  }, [r]);

  const L = q_1(() => {
    if (d && !h) {
      r(d);
    }
  }, [d, h, r]);

  const B = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/search");
    }
  };

  const C = q_1((t) => {
    i((a) => a.filter((n) => n.id !== t));
  }, []);

  return o
    ? q_1_1("div", {
        className: s.page,
        children: [
          q_1_1("div", {
            className: s.header,
            children: [
              q_1_1("button", {
                className: s.backButton,
                onClick: B,
                children: [q_1_1(c_1, { size: 18 }), "Назад"],
              }),
              q_1_1("h1", { className: s.hashtagName, children: ["#", o] }),
            ],
          }),
          v
            ? q_1_1(c, { count: 4 })
            : y
            ? q_1_1("div", {
                className: s.error,
                children: [
                  q_1_1("span", { className: s.errorText, children: y }),
                  q_1_1("button", {
                    className: s.retryButton,
                    onClick: () => r(),
                    children: "Повторить",
                  }),
                ],
              })
            : f.length === 0
            ? q_1_1("div", {
                className: s.empty,
                children: q_1_1("span", {
                  className: s.emptyText,
                  children: "Нет постов с этим хештегом",
                }),
              })
            : q_1_1(V_1, {
                posts: f,
                renderPost: (t) =>
                  q_1_1(q_1_1_1, {
                    post: t,
                    source: "hashtag",
                    sourceContext: o,
                    onDelete: C,
                  }),
                hasMore: !!d,
                isLoadingMore: h,
                onLoadMore: L,
              }),
        ],
      })
    : q_1_1("div", {
        className: s.page,
        children: q_1_1("div", {
          className: s.error,
          children: q_1_1("span", {
            className: s.errorText,
            children: "Хештег не указан",
          }),
        }),
      });
};

export { Hashtag as Hashtag, Hashtag as default };
