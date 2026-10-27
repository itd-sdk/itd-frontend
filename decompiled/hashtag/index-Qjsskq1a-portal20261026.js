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
} from "./index-BQxlThnW-portal20261026.js";
import { I } from "./IconChevronLeft-DWLxrxwS-portal20261026.js";
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
      a._sentryDebugIds[n] = "5077fcba-b638-4fef-808d-1fe076add24d";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-5077fcba-b638-4fef-808d-1fe076add24d";
    }
  } catch {}
})();
const R = "nTTE";
const S = "XiGu";
const V = "uVtV";
const j = "rIjP";
const F = "OjCf";
const U = "fYya";
const q = "xTfs";
const A = "kqjF";
const G = "hvGD";

const s = {
  page: R,
  header: S,
  backButton: V,
  hashtagName: j,
  empty: F,
  emptyText: U,
  error: q,
  errorText: A,
  retryButton: G,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [T, y] = d(true);
  const [p, b] = d(null);
  const [f, k] = d(null);
  const [u, N] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  d_1(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
    c((L) =>
      L.map((i) =>
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
  const d = q_1(
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

          c(t ? (l) => [...l, ...o.data] : o.data);

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
    [r]
  );
  d_1(() => {
    d();
  }, [d]);

  const v = q_1(() => {
    if (f && !u) {
      d(f);
    }
  }, [f, u, d]);

  const w = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/search");
    }
  };

  const I = q_1((t) => {
    c((o) => o.filter((l) => l.id !== t));
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
                children: [u(I, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", r] }),
            ],
          }),
          T
            ? u(c, { count: 4 })
            : p
            ? u("div", {
                className: s.error,
                children: [
                  u("span", { className: s.errorText, children: p }),
                  u("button", {
                    className: s.retryButton,
                    onClick: () => d(),
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
                    onDelete: I,
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
