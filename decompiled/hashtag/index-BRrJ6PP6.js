import {
  d,
  c,
  y,
  q as q_1,
  p,
  a,
  P,
  V,
  a as a_1,
  f,
} from "./index-BCnJB3wz.js";
import { c as c_1 } from "./IconChevronLeft-WQg0EXIc.js";
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
      a._sentryDebugIds[r] = "c3780eaf-6334-49f5-9a21-003dd85e8443";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-c3780eaf-6334-49f5-9a21-003dd85e8443";
    }
  } catch {}
})();
const _ = "M9Le";
const S = "WKJ0";
const A = "noqS";
const U = "cG6q";
const q = "UTga";
const H = "GlRl";
const F = "uEAM";
const G = "CXAO";
const O = "HcOn";

const s = {
  page: _,
  header: S,
  backButton: A,
  hashtagName: U,
  empty: q,
  emptyText: H,
  error: F,
  errorText: G,
  retryButton: O,
};

export const Hashtag = ({ name }) => {
  const [r, c] = d([]);
  const [k, y] = d(true);
  const [p, N] = d(null);
  const [f, L] = d(null);
  const [u, b] = d(false);
  const n = name ? decodeURIComponent(name) : "";

  const m = c((t) => t._lastLikeUpdate);

  y(() => {
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
            y(true);
            N(null);
          }

          const o = await p.getPostsByHashtag(n, { limit: 20, cursor: t });

          c(t ? (i) => [...i, ...o.data] : o.data);

          L(o.nextCursor);
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
    [n]
  );
  y(() => {
    l();
  }, [l]);

  const T = q_1(() => {
    if (f && !u) {
      l(f);
    }
  }, [f, u, l]);

  const v = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      f("/search");
    }
  };

  const w = q_1((t) => {
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
                onClick: v,
                children: [name(c_1, { size: 18 }), "Назад"],
              }),
              name("h1", { className: s.hashtagName, children: ["#", n] }),
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
                renderPost: (t) =>
                  name(a_1, {
                    post: t,
                    source: "hashtag",
                    sourceContext: n,
                    onDelete: w,
                  }),
                hasMore: !!f,
                isLoadingMore: u,
                onLoadMore: T,
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
