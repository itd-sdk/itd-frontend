import {
  d,
  b,
  y,
  q,
  p,
  u,
  P,
  V as V_1,
  c,
  u as u_1,
} from "./index-DBLtLuBZ.js";
import { I } from "./IconChevronLeft-0Of1x6nI.js";
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
      a._sentryDebugIds[n] = "8404a4e8-53b4-4acd-85bf-803329faafb1";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-8404a4e8-53b4-4acd-85bf-803329faafb1";
    }
  } catch {}
})();
const _ = "WTdu";
const S = "JTFy";
const U = "LUNB";
const F = "hlgJ";
const H = "TtZI";
const A = "jhPE";
const J = "afHT";
const V = "sgRt";
const j = "TPIy";

const s = {
  page: _,
  header: S,
  backButton: U,
  hashtagName: F,
  empty: H,
  emptyText: A,
  error: J,
  errorText: V,
  retryButton: j,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [x, y] = d(true);
  const [p, b] = d(null);
  const [f, k] = d(null);
  const [u, N] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  y(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
    c((v) =>
      v.map((d) =>
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
      if (r) {
        try {
          if (t) {
            N(true);
          } else {
            y(true);
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
          y(false);
          N(false);
        }
      }
    },
    [r]
  );
  y(() => {
    l();
  }, [l]);

  const I = q(() => {
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

  const P = q((t) => {
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
                children: [u(I, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", r] }),
            ],
          }),
          x
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
                    onDelete: P,
                  }),
                hasMore: !!f,
                isLoadingMore: u,
                onLoadMore: I,
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
