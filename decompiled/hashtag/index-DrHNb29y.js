import {
  d,
  c,
  y,
  q as q_1,
  p,
  a,
  V,
  V as V_1,
  a as a_1,
} from "./index-DDCL-vHK.js";
import { I } from "./IconChevronLeft-Dk6onnGB.js";
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
    a.SENTRY_RELEASE = { id: "1.1.0" };
    const r = new a.Error().stack;

    if (r) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[r] = "c61d2d50-cce8-4001-8690-dbcdbeac72a7";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-c61d2d50-cce8-4001-8690-dbcdbeac72a7";
    }
  } catch {}
})();
const _ = "r9Et";
const R = "o7xZ";
const z = "C71m";
const H = "IwCw";
const S = "zBng";
const U = "mqzk";
const q = "mjl3";
const A = "WJ2l";
const F = "H4NO";

const s = {
  page: _,
  header: R,
  backButton: z,
  hashtagName: H,
  empty: S,
  emptyText: U,
  error: q,
  errorText: A,
  retryButton: F,
};

export const Hashtag = ({ name }) => {
  const [r, n] = d([]);
  const [w, y] = d(true);
  const [p, b] = d(null);
  const [m, k] = d(null);
  const [u, N] = d(false);
  const c = name ? decodeURIComponent(name) : "";

  const f = c((t) => t._lastLikeUpdate);

  y(() => {
    if (!f) {
      return;
    }
    const { postId, myReaction, totalDelta } = f;
    n((B) =>
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
  }, [f]);
  const l = q_1(
    async (t) => {
      if (c) {
        try {
          if (t) {
            N(true);
          } else {
            y(true);
            b(null);
          }

          const o = await p.getPostsByHashtag(c, { limit: 20, cursor: t });

          n(t ? (d) => [...d, ...o.data] : o.data);

          k(o.nextCursor);
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
    [c]
  );
  y(() => {
    l();
  }, [l]);

  const v = q_1(() => {
    if (m && !u) {
      l(m);
    }
  }, [m, u, l]);

  const I = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      a_1("/search");
    }
  };

  const T = q_1((t) => {
    n((o) => o.filter((d) => d.id !== t));
  }, []);

  return c
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
              name("h1", { className: s.hashtagName, children: ["#", c] }),
            ],
          }),
          w
            ? null
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
            : name(V, {
                posts: r,
                renderPost: (t) => name(V_1, { post: t, onDelete: T }),
                hasMore: !!m,
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
