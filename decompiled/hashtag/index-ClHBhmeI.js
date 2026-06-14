import {
  d,
  c,
  y,
  q,
  p,
  a,
  p as p_1,
  V as V_1,
  a as a_1,
  f,
} from "./index-BAlLDjSl.js";
import { I } from "./IconChevronLeft-DL9-Okiv.js";
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
    const n = new a.Error().stack;

    if (n) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[n] = "cbcc04a7-77e8-404a-a073-2fce7ceec773";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-cbcc04a7-77e8-404a-a073-2fce7ceec773";
    }
  } catch {}
})();
const R = "V3Qg";
const F = "dtQI";
const S = "zgFb";
const Q = "trZn";
const U = "C1Y5";
const V = "T7Qy";
const z = "uyt8";
const A = "y1gw";
const H = "d7IF";

const s = {
  page: R,
  header: F,
  backButton: S,
  hashtagName: Q,
  empty: U,
  emptyText: V,
  error: z,
  errorText: A,
  retryButton: H,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [k, y] = d(true);
  const [p, b] = d(null);
  const [u, w] = d(null);
  const [f, N] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const g = c((t) => t._lastLikeUpdate);

  y(() => {
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
  const l = q(
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

          w(o.nextCursor);
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
  y(() => {
    l();
  }, [l]);

  const I = q(() => {
    if (u && !f) {
      l(u);
    }
  }, [u, f, l]);

  const T = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      f("/search");
    }
  };

  const v = q((t) => {
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
                onClick: T,
                children: [name(I, { size: 18 }), "Назад"],
              }),
              name("h1", { className: s.hashtagName, children: ["#", r] }),
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
                    onDelete: v,
                  }),
                hasMore: !!u,
                isLoadingMore: f,
                onLoadMore: I,
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
