import {
  d,
  b,
  d as d_1,
  q as q_1,
  p,
  u,
  p as p_1,
  V as V_1,
  c,
  u as u_1,
} from "./index-DK2L49XD.js";
import { I } from "./IconChevronLeft-BrPnNM4b.js";
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
      a._sentryDebugIds[r] = "b1d804c3-b256-46c8-b922-a4fec66e15bd";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-b1d804c3-b256-46c8-b922-a4fec66e15bd";
    }
  } catch {}
})();
const R = "WxSQ";
const S = "GgNA";
const H = "kQ6N";
const U = "f9i6";
const A = "oUnB";
const Q = "VHnQ";
const V = "Eqbi";
const q = "isHL";
const F = "IWtL";

const s = {
  page: R,
  header: S,
  backButton: H,
  hashtagName: U,
  empty: A,
  emptyText: Q,
  error: V,
  errorText: q,
  retryButton: F,
};

export const Hashtag = ({ name }) => {
  const [r, c] = d([]);
  const [k, y] = d(true);
  const [p, b] = d(null);
  const [u, L] = d(null);
  const [f, N] = d(false);
  const n = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  d_1(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
    c((T) =>
      T.map((d) =>
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
  const i = q_1(
    async (t) => {
      if (n) {
        try {
          if (t) {
            N(true);
          } else {
            y(true);
            b(null);
          }

          const o = await p.getPostsByHashtag(n, { limit: 20, cursor: t });

          c(t ? (l) => [...l, ...o.data] : o.data);

          L(o.nextCursor);
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
    [n]
  );
  d_1(() => {
    i();
  }, [i]);

  const v = q_1(() => {
    if (u && !f) {
      i(u);
    }
  }, [u, f, i]);

  const w = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1("/search");
    }
  };

  const I = q_1((t) => {
    c((o) => o.filter((l) => l.id !== t));
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
                onClick: w,
                children: [u(I, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", n] }),
            ],
          }),
          k
            ? u(p_1, { count: 4 })
            : p
            ? u("div", {
                className: s.error,
                children: [
                  u("span", { className: s.errorText, children: p }),
                  u("button", {
                    className: s.retryButton,
                    onClick: () => i(),
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
                    onDelete: I,
                  }),
                hasMore: !!u,
                isLoadingMore: f,
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
