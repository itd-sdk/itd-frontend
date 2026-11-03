import {
  d,
  b,
  d as d_1,
  $ as q_1,
  p,
  u,
  c,
  V as V_1,
  u as u_1,
  $,
} from "./index-GOT6tyDH.js";
import { b as b_1 } from "./IconChevronLeft-BFqryDV6.js";
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
      a._sentryDebugIds[r] = "8378a4c0-0025-4745-9c09-a895972ef726";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-8378a4c0-0025-4745-9c09-a895972ef726";
    }
  } catch {}
})();
const R = "qnmU";
const _ = "E2nR";
const H = "nCq2";
const S = "P0Ga";
const U = "HqaJ";
const F = "qxrp";
const A = "LHqc";
const V = "go5t";
const z = "FQ3i";

const s = {
  page: R,
  header: _,
  backButton: H,
  hashtagName: S,
  empty: U,
  emptyText: F,
  error: A,
  errorText: V,
  retryButton: z,
};

export const Hashtag = ({ name }) => {
  const [r, c] = d([]);
  const [k, p] = d(true);
  const [y, N] = d(null);
  const [u, L] = d(null);
  const [f, b] = d(false);
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
  const l = q_1(
    async (t) => {
      if (n) {
        try {
          if (t) {
            b(true);
          } else {
            p(true);
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
          p(false);
          b(false);
        }
      }
    },
    [n]
  );
  d_1(() => {
    l();
  }, [l]);

  const v = q_1(() => {
    if (u && !f) {
      l(u);
    }
  }, [u, f, l]);

  const w = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/search");
    }
  };

  const T = q_1((t) => {
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
                onClick: w,
                children: [u(b_1, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", n] }),
            ],
          }),
          k
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
                  u(u_1, {
                    post: t,
                    source: "hashtag",
                    sourceContext: n,
                    onDelete: T,
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
