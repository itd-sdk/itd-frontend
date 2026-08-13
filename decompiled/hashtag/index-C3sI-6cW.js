import {
  d,
  b,
  y,
  q as q_1,
  p,
  u,
  P,
  u_1 as V_1,
  c,
  u as u_1,
} from "./index-B9FitUXy.js";
import { I } from "./IconChevronLeft-DoFeid_h.js";
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
      a._sentryDebugIds[n] = "9d412153-48ca-4d80-a8c2-cf1ede4153af";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-9d412153-48ca-4d80-a8c2-cf1ede4153af";
    }
  } catch {}
})();
const _ = "P51A";
const H = "wuIH";
const R = "eVdE";
const A = "oHua";
const S = "VVV6";
const U = "JHUV";
const z = "pZsu";
const F = "ezr2";
const q = "gA6x";

const s = {
  page: _,
  header: H,
  backButton: R,
  hashtagName: A,
  empty: S,
  emptyText: U,
  error: z,
  errorText: F,
  retryButton: q,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [k, y] = d(true);
  const [p, N] = d(null);
  const [u, w] = d(null);
  const [f, b] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  y(() => {
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
  y(() => {
    l();
  }, [l]);

  const v = q_1(() => {
    if (u && !f) {
      l(u);
    }
  }, [u, f, l]);

  const I = () => {
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
                onClick: I,
                children: [u(I, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", r] }),
            ],
          }),
          k
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
