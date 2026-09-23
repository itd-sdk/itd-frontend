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
} from "./index-B74jCtUp.js";
import { b as b_1 } from "./IconChevronLeft-DjelCr6A.js";
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
      a._sentryDebugIds[r] = "af230885-91ec-4b23-9a4f-eaff5f51d90a";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-af230885-91ec-4b23-9a4f-eaff5f51d90a";
    }
  } catch {}
})();
const A = "Aofm";
const R = "ktvb";
const S = "onpg";
const U = "npES";
const q = "U6Zq";
const z = "Ns4e";
const F = "DAm5";
const H = "vAzG";
const V = "oBuM";

const s = {
  page: A,
  header: R,
  backButton: S,
  hashtagName: U,
  empty: q,
  emptyText: z,
  error: F,
  errorText: H,
  retryButton: V,
};

export const Hashtag = ({ name }) => {
  const [r, c] = d([]);
  const [k, p] = d(true);
  const [y, b] = d(null);
  const [f, v] = d(null);
  const [u, N] = d(false);
  const n = name ? decodeURIComponent(name) : "";

  const m = b((t) => t._lastLikeUpdate);

  d_1(() => {
    if (!m) {
      return;
    }
    const { postId, myReaction, totalDelta } = m;
    c((B) =>
      B.map((d) =>
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
            N(true);
          } else {
            p(true);
            b(null);
          }

          const o = await p.getPostsByHashtag(n, { limit: 20, cursor: t });

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
    [n]
  );
  d_1(() => {
    l();
  }, [l]);

  const w = q_1(() => {
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
                onClick: L,
                children: [u(b_1, { size: 18 }), "Назад"],
              }),
              u("h1", { className: s.hashtagName, children: ["#", n] }),
            ],
          }),
          k
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
                    onDelete: T,
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
