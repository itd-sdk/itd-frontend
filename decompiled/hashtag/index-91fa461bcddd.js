import {
  d,
  a1,
  h,
  q as q_1,
  a2,
  q_1 as q_1_1,
  a3,
  a4,
  a5,
  $,
} from "./index-4cbec7521f6a.js";
import { a4 as a4_1 } from "./IconChevronLeft-e0277eea8342.js";
const F = "s64C";
const H = "eKbF";
const R = "kz6C";
const z = "HI18";
const E = "SnrE";
const q = "uiDC";
const A = "ONhJ";
const J = "wU2S";
const K = "UdMb";

const s = {
  page: F,
  header: H,
  backButton: R,
  hashtagName: z,
  empty: E,
  emptyText: q,
  error: A,
  errorText: J,
  retryButton: K,
};

export const Hashtag = ({ name }) => {
  const [g, i] = d([]);
  const [C, f] = d(true);
  const [N, y] = d(null);
  const [d, L] = d(null);
  const [h, x] = d(false);
  const o = name ? decodeURIComponent(name) : "";

  const m = a1((t) => t._lastLikeUpdate);

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
            f(true);
            y(null);
          }

          const a = await a2.getPostsByHashtag(o, { limit: 20, cursor: t });

          i(t ? (n) => [...n, ...a.data] : a.data);

          L(a.nextCursor);
        } catch (a) {
          console.error("Failed to fetch hashtag posts:", a);

          if (!t) {
            y("Не удалось загрузить посты");
          }
        } finally {
          f(false);
          x(false);
        }
      }
    },
    [o]
  );
  h(() => {
    r();
  }, [r]);

  const b = q_1(() => {
    if (d && !h) {
      r(d);
    }
  }, [d, h, r]);

  const v = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/search");
    }
  };

  const B = q_1((t) => {
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
                onClick: v,
                children: [q_1_1(a4_1, { size: 18 }), "Назад"],
              }),
              q_1_1("h1", { className: s.hashtagName, children: ["#", o] }),
            ],
          }),
          C
            ? q_1_1(a3, { count: 4 })
            : N
            ? q_1_1("div", {
                className: s.error,
                children: [
                  q_1_1("span", { className: s.errorText, children: N }),
                  q_1_1("button", {
                    className: s.retryButton,
                    onClick: () => r(),
                    children: "Повторить",
                  }),
                ],
              })
            : g.length === 0
            ? q_1_1("div", {
                className: s.empty,
                children: q_1_1("span", {
                  className: s.emptyText,
                  children: "Нет постов с этим хештегом",
                }),
              })
            : q_1_1(a4, {
                posts: g,
                renderPost: (t) =>
                  q_1_1(a5, {
                    post: t,
                    source: "hashtag",
                    sourceContext: o,
                    onDelete: B,
                  }),
                hasMore: !!d,
                isLoadingMore: h,
                onLoadMore: b,
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
