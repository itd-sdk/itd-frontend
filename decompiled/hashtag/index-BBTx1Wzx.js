import {
  d,
  b,
  d as d_1,
  q,
  p,
  u,
  p as p_1,
  V as V_1,
  c,
  u as u_1,
} from "./index-CsuAWxkQ.js";
import { b as b_1 } from "./IconChevronLeft-DtJBpQva.js";
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
      a._sentryDebugIds[r] = "0685c9a2-56f5-410f-b76f-1bca1607e385";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-0685c9a2-56f5-410f-b76f-1bca1607e385";
    }
  } catch {}
})();
const R = "VeyV";
const S = "aOwK";
const V = "WMmp";
const H = "lnle";
const K = "dCTh";
const U = "LKEn";
const A = "KHOc";
const F = "sopl";
const O = "lCLE";

const s = {
  page: R,
  header: S,
  backButton: V,
  hashtagName: H,
  empty: K,
  emptyText: U,
  error: A,
  errorText: F,
  retryButton: O,
};

export const Hashtag = ({ name }) => {
  const [r, c] = d([]);
  const [L, p] = d(true);
  const [y, b] = d(null);
  const [f, k] = d(null);
  const [u, N] = d(false);
  const n = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  d_1(() => {
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
  const l = q(
    async (t) => {
      if (n) {
        try {
          if (t) {
            N(true);
          } else {
            p(true);
            b(null);
          }

          const o = await p.getPostsByHashtag(n, { limit: 20, cursor: t });

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
    [n]
  );
  d_1(() => {
    l();
  }, [l]);

  const w = q(() => {
    if (f && !u) {
      l(f);
    }
  }, [f, u, l]);

  const T = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1("/search");
    }
  };

  const v = q((t) => {
    c((o) => o.filter((i) => i.id !== t));
  }, []);

  return n
    ? u("div", {
        className: s.page,
        children: [
          u("div", {
            className: s.header,
            children: [
              u("button", {
                className: s.backButton,
                onClick: T,
                children: [u(b_1, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", n] }),
            ],
          }),
          L
            ? u(p_1, { count: 4 })
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
            : r.length === 0
            ? u("div", {
                className: s.empty,
                children: u("span", {
                  className: s.emptyText,
                  children: "Нет постов с этим хештегом",
                }),
              })
            : u(V_1, {
                posts: r,
                renderPost: (t) =>
                  u(c, {
                    post: t,
                    source: "hashtag",
                    sourceContext: n,
                    onDelete: v,
                  }),
                hasMore: !!f,
                isLoadingMore: u,
                onLoadMore: w,
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
