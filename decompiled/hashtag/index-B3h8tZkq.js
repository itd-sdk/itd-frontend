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
} from "./index-DDTOXJaD.js";
import { I } from "./IconChevronLeft-6Kf2Hf_x.js";
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
      a._sentryDebugIds[n] = "8383067d-6a90-46b6-af3d-2599aa252608";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-8383067d-6a90-46b6-af3d-2599aa252608";
    }
  } catch {}
})();
const _ = "vNIh";
const S = "vhKK";
const U = "OUgc";
const z = "RBoH";
const H = "lzvz";
const A = "dheu";
const F = "wTyM";
const K = "kNIt";
const V = "MpeT";

const s = {
  page: _,
  header: S,
  backButton: U,
  hashtagName: z,
  empty: H,
  emptyText: A,
  error: F,
  errorText: K,
  retryButton: V,
};

export const Hashtag = ({ name }) => {
  const [n, c] = d([]);
  const [x, y] = d(true);
  const [p, N] = d(null);
  const [u, k] = d(null);
  const [f, b] = d(false);
  const r = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  y(() => {
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
  const l = q(
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

          k(o.nextCursor);
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

  const T = q(() => {
    if (u && !f) {
      l(u);
    }
  }, [u, f, l]);

  const w = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      u_1("/search");
    }
  };

  const I = q((t) => {
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
                    onDelete: I,
                  }),
                hasMore: !!u,
                isLoadingMore: f,
                onLoadMore: T,
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
