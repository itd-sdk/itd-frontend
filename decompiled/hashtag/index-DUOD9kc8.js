import {
  d,
  b,
  d as d_1,
  q as q_1,
  p,
  u,
  V_1 as P_1,
  V as V_1,
  c,
  u as u_1,
} from "./index-DqQficWb.js";
import { p as p_1 } from "./IconChevronLeft-BgCU8yQL.js";
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
      a._sentryDebugIds[n] = "4582deb4-c61a-4c21-a4fc-1302ffae6851";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-4582deb4-c61a-4c21-a4fc-1302ffae6851";
    }
  } catch {}
})();
const _ = "Dxma";
const S = "CegG";
const A = "WMly";
const J = "RcJC";
const U = "mseq";
const q = "DAZg";
const F = "f3JT";
const H = "aBsR";
const V = "NJMx";

const s = {
  page: _,
  header: S,
  backButton: A,
  hashtagName: J,
  empty: U,
  emptyText: q,
  error: F,
  errorText: H,
  retryButton: V,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [k, y] = d(true);
  const [p, N] = d(null);
  const [f, T] = d(null);
  const [u, b] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  d_1(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
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
  }, [m]);
  const l = q_1(
    async (t) => {
      if (r) {
        try {
          if (t) {
            b(true);
          } else {
            y(true);
            N(null);
          }

          const o = await p.getPostsByHashtag(r, { limit: 20, cursor: t });

          c(t ? (i) => [...i, ...o.data] : o.data);

          T(o.nextCursor);
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
    [r]
  );
  d_1(() => {
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
      u_1("/search");
    }
  };

  const C = q_1((t) => {
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
                onClick: w,
                children: [u(p_1, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", r] }),
            ],
          }),
          k
            ? u(P_1, { count: 4 })
            : p
            ? u("div", {
                className: s.error,
                children: [
                  u("span", { className: s.errorText, children: p }),
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
                  u(c, {
                    post: t,
                    source: "hashtag",
                    sourceContext: r,
                    onDelete: C,
                  }),
                hasMore: !!f,
                isLoadingMore: u,
                onLoadMore: v,
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
