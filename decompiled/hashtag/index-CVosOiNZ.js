import {
  d,
  b,
  d as d_1,
  Hashtag as Hashtag_1,
  p,
  u,
  P,
  V,
  c,
  u as u_1,
} from "./index-BuVp7kGl.js";
import { P as P_1 } from "./IconChevronLeft-7q6BtY14.js";
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
      a._sentryDebugIds[n] = "b24940b2-3d93-4468-9b34-1b9ec73932ff";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-b24940b2-3d93-4468-9b34-1b9ec73932ff";
    }
  } catch {}
})();
const R = "gjlx";
const S = "XMmx";
const z = "h8pW";
const A = "PCKv";
const U = "AzZZ";
const Z = "bZzc";
const F = "Bk2p";
const H = "svit";
const J = "gJJ8";

const s = {
  page: R,
  header: S,
  backButton: z,
  hashtagName: A,
  empty: U,
  emptyText: Z,
  error: F,
  errorText: H,
  retryButton: J,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [k, p] = d(true);
  const [y, b] = d(null);
  const [f, v] = d(null);
  const [u, N] = d(false);
  const r = name ? decodeURIComponent(name) : "";

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
  const l = Hashtag_1(
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

          v(o.nextCursor);
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

  const w = Hashtag_1(() => {
    if (f && !u) {
      l(f);
    }
  }, [f, u, l]);

  const L = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1("/search");
    }
  };

  const P = Hashtag_1((t) => {
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
                onClick: L,
                children: [u(P_1, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", r] }),
            ],
          }),
          k
            ? u(P, { count: 4 })
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
            : u(V, {
                posts: n,
                renderPost: (t) =>
                  u(c, {
                    post: t,
                    source: "hashtag",
                    sourceContext: r,
                    onDelete: P,
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
