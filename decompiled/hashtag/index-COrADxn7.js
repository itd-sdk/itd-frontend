import {
  d,
  b,
  d as d_1,
  q as q_1,
  p,
  u,
  P,
  V as V_1,
  c,
  u as u_1,
} from "./index-D4QRo1-7.js";
import { p as p_1 } from "./IconChevronLeft-BOttgjF1.js";
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
      a._sentryDebugIds[n] = "758f6a6c-b7de-4d6f-9c20-eed3dc2614a9";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-758f6a6c-b7de-4d6f-9c20-eed3dc2614a9";
    }
  } catch {}
})();
const R = "vgvX";
const U = "U2Us";
const V = "B78W";
const S = "Vwg2";
const A = "z2JB";
const q = "YqPA";
const z = "NlgV";
const F = "mwaf";
const H = "xNVc";

const s = {
  page: R,
  header: U,
  backButton: V,
  hashtagName: S,
  empty: A,
  emptyText: q,
  error: z,
  errorText: F,
  retryButton: H,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [v, y] = d(true);
  const [p, N] = d(null);
  const [f, w] = d(null);
  const [u, b] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  d_1(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
    c((P) =>
      P.map((i) =>
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

          c(t ? (d) => [...d, ...o.data] : o.data);

          w(o.nextCursor);
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

  const k = q_1(() => {
    if (f && !u) {
      l(f);
    }
  }, [f, u, l]);

  const B = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1("/search");
    }
  };

  const L = q_1((t) => {
    c((o) => o.filter((d) => d.id !== t));
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
                onClick: B,
                children: [u(p_1, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", r] }),
            ],
          }),
          v
            ? u(P, { count: 4 })
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
                    onDelete: L,
                  }),
                hasMore: !!f,
                isLoadingMore: u,
                onLoadMore: k,
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
