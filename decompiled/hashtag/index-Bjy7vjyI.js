import {
  d,
  b,
  d as d_1,
  q as q_1,
  p,
  u,
  c,
  V as V_1,
  u as u_1,
  $,
} from "./index-CR_1arh8.js";
import { I } from "./IconChevronLeft-D9MJXHfq.js";
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
      a._sentryDebugIds[n] = "a4cac8f2-7c7f-4c32-8222-bd47e30242ab";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-a4cac8f2-7c7f-4c32-8222-bd47e30242ab";
    }
  } catch {}
})();
const _ = "cjwf";
const S = "BD2Q";
const U = "cZIb";
const V = "wxcj";
const j = "Bh2x";
const A = "s0Ka";
const F = "cgOp";
const H = "Rp7R";
const q = "ClVL";

const s = {
  page: _,
  header: S,
  backButton: U,
  hashtagName: V,
  empty: j,
  emptyText: A,
  error: F,
  errorText: H,
  retryButton: q,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [w, p] = d(true);
  const [y, b] = d(null);
  const [f, k] = d(null);
  const [u, N] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  d_1(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
    c((I) =>
      I.map((d) =>
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
      if (r) {
        try {
          if (t) {
            N(true);
          } else {
            p(true);
            b(null);
          }

          const o = await p.getPostsByHashtag(r, { limit: 20, cursor: t });

          c(t ? (i) => [...i, ...o.data] : o.data);

          k(o.nextCursor);
        } catch (o) {
          console.error("Failed to fetch hashtag posts:", o);

          if (!t) {
            b("Не удалось загрузить посты");
          }
        } finally {
          p(false);
          N(false);
        }
      }
    },
    [r]
  );
  d_1(() => {
    l();
  }, [l]);

  const L = q_1(() => {
    if (f && !u) {
      l(f);
    }
  }, [f, u, l]);

  const v = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/search");
    }
  };

  const B = q_1((t) => {
    c((o) => o.filter((i) => i.id !== t));
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
                onClick: v,
                children: [u(I, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", r] }),
            ],
          }),
          w
            ? u(c, { count: 4 })
            : y
            ? u("div", {
                className: s.error,
                children: [
                  u("span", { className: s.errorText, children: y }),
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
                  u(u_1, {
                    post: t,
                    source: "hashtag",
                    sourceContext: r,
                    onDelete: B,
                  }),
                hasMore: !!f,
                isLoadingMore: u,
                onLoadMore: L,
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
