import {
  a6,
  a7,
  a8,
  d,
  A,
  h,
  q,
  u,
  a9,
  S,
  f,
  U,
  a5,
} from "./index-ORJLmKGS.js";

(() => {
  try {
    const t =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "1.1.3" };
    const n = new t.Error().stack;

    if (n) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[n] = "2fb41e59-9206-4857-b379-71d9138e366d";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-2fb41e59-9206-4857-b379-71d9138e366d";
    }
  } catch {}
})();
const H = new a8(1, 300 * 1000 /* 1e3 */);
const L = new a8(1, 300 * 1000 /* 1e3 */);
const g = "data";

const v = {
  async getTrendingHashtags(t = 10) {
    const n = H.get(g);
    if (n) {
      return n;
    }
    const r = await a6.get(`${a7.hashtags.trending}?limit=${t}`);
    let c;

    if (r.data?.hashtags) {
      c = r.data.hashtags;
    } else if (Array.isArray(r.hashtags)) {
      c = r.hashtags;
    } else if (Array.isArray(r.data)) {
      c = r.data;
    } else {
      c = [];
    }

    const i = c.map((l) => ({
      ...l,
      count: l.count ?? l.postsCount ?? 0,
    }));
    H.set(g, i);
    return i;
  },
  async getPopularAvatars() {
    const t = L.get(g);
    if (t) {
      return t;
    }
    const n = await a6.get(a7.users.topClans);

    const c = (n.clans || n.data || []).map((i) => ({
      ...i,
      count: i.count ?? i.memberCount ?? 0,
    }));

    L.set(g, c);
    return c;
  },
  async globalSearch(t, n = 5, r = 5) {
    const c = new URLSearchParams({
      q: t,
      userLimit: String(n),
      hashtagLimit: String(r),
    });

    const i = await a6.get(`${a7.search.global}?${c.toString()}`);
    const l = i.data ?? i;
    return {
      users: l.users ?? [],
      hashtags: (l.hashtags ?? []).map((m) => ({
        ...m,
        count: m.count ?? m.postsCount ?? 0,
      })),
    };
  },
};

const W = "eJRc";
const F = "OCd0";
const K = "A98E";
const X = "Wdsr";
const M = "qthf";
const O = "Sq8b";
const Y = "jRkP";
const J = "BRmI";
const V = "IrXe";
const Z = "qDxf";
const G = "rWDq";
const aa = "ojLt";
const ea = "rXpz";
const sa = "Nkah";
const ta = "ElS9";
const na = "ha7z";
const ca = "cZT2";
const ra = "SzUo";
const ia = "Q33w";
const la = "g0lm";
const oa = "M8uH";
const ha = "wQl2";
const da = "my8X";
const ma = "su1a";
const ga = "khHK";

const e = {
  page: W,
  pageTitle: F,
  titleRow: K,
  searchWrapper: X,
  searchIcon: M,
  searchInput: O,
  sections: Y,
  section: J,
  sectionHeader: V,
  sectionTitle: Z,
  usersList: G,
  userItem: aa,
  userInfo: ea,
  userUsername: sa,
  clansBadges: ta,
  clanBadge: na,
  clanEmoji: ca,
  clanCount: ra,
  hashtagsList: ia,
  hashtagItem: la,
  hashtagRank: oa,
  hashtagInfo: ha,
  hashtagTag: da,
  hashtagCount: ma,
  empty: ga,
};

const C = (t) =>
  t >= 1000000 /* 1e6 */
    ? `${(t / 1000000) /* 1e6 */
        .toFixed(1)
        .replace(/\.0$/, "")}M`
    : t >= 1000 /* 1e3 */
    ? `${(t / 1000) /* 1e3 */
        .toFixed(1)
        .replace(/\.0$/, "")}K`
    : t.toString();

export const Search = (t) => {
  const [n, r] = d("");
  const [c, i] = d([]);
  const [l, m] = d([]);
  const [S, u] = d([]);
  const [w, p] = d([]);
  const [A, E] = d(true);
  const [D, U] = d(true);
  const [k, f] = d(false);
  const N = A(null);
  h(() => {
    (async () => {
      try {
        const [o, h] = await Promise.all([
          v.getPopularAvatars(),
          v.getTrendingHashtags(),
        ]);
        i(o.slice(0, 10));
        m(h.slice(0, 10));
      } catch (o) {
        console.error("Failed to fetch search data:", o);
      } finally {
        E(false);
        U(false);
      }
    })();
  }, []);

  const $ = q(async (s) => {
    const o = s.trim().replace(/^@/, "").replace(/^#/, "");
    if (!o) {
      u([]);
      p([]);
      f(false);
      return;
    }
    f(true);
    try {
      const h = await v.globalSearch(o, 10, 5);
      u(h.users);
      p(h.hashtags);
    } catch (h) {
      console.error("Failed to search:", h);
      u([]);
      p([]);
    } finally {
      f(false);
    }
  }, []);

  const _ = (s) => {
    const h = s.target.value;
    r(h);

    if (N.current) {
      clearTimeout(N.current);
    }

    N.current = window.setTimeout(() => {
      $(h);
    }, 1000 /* 1e3 */);
  };

  const z = n.trim().length > 0;
  return u("div", {
    className: e.page,
    children: [
      u("div", {
        className: e.titleRow,
        children: u("h1", { className: e.pageTitle, children: "Поиск" }),
      }),
      u("div", {
        className: e.searchWrapper,
        children: [
          u("div", { className: e.searchIcon, children: u(a9, { size: 20 }) }),
          u("input", {
            type: "text",
            className: e.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: n,
            onInput: _,
          }),
        ],
      }),
      u("div", {
        className: e.sections,
        children: z
          ? u(S, {
              children: [
                u("section", {
                  className: e.section,
                  children: [
                    u("div", {
                      className: e.sectionHeader,
                      children: u("h2", {
                        className: e.sectionTitle,
                        children: "Люди",
                      }),
                    }),
                    u("div", {
                      className: e.usersList,
                      children: k
                        ? null
                        : S.length === 0
                        ? u("div", {
                            className: e.empty,
                            children: "Ничего не найдено",
                          })
                        : S.map((s) =>
                            u(
                              "a",
                              {
                                href: `/@${s.username ?? s.userId}`,
                                className: e.userItem,
                                children: [
                                  u(f, {
                                    src: s.avatar,
                                    alt: s.displayName,
                                    size: "md",
                                  }),
                                  u("div", {
                                    className: e.userInfo,
                                    children: [
                                      u(U, {
                                        name: s.displayName,
                                        verified: s.isVerified ?? s.verified,
                                        hasNuksta: s.hasNuksta,
                                        pin: s.pin,
                                      }),
                                      s.username &&
                                        u("span", {
                                          className: e.userUsername,
                                          children: ["@", s.username],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              s.userId
                            )
                          ),
                    }),
                  ],
                }),
                w.length > 0 &&
                  u("section", {
                    className: e.section,
                    children: [
                      u("div", {
                        className: e.sectionHeader,
                        children: u("h2", {
                          className: e.sectionTitle,
                          children: "Хештеги",
                        }),
                      }),
                      u("div", {
                        className: e.hashtagsList,
                        children: w.map((s) =>
                          u(
                            "a",
                            {
                              href: `/hashtag/${encodeURIComponent(s.name)}`,
                              className: e.hashtagItem,
                              children: u("div", {
                                className: e.hashtagInfo,
                                children: [
                                  u("span", {
                                    className: e.hashtagTag,
                                    children: ["#", s.name],
                                  }),
                                  u("span", {
                                    className: e.hashtagCount,
                                    children: [C(s.count), " постов"],
                                  }),
                                ],
                              }),
                            },
                            s.name
                          )
                        ),
                      }),
                    ],
                  }),
              ],
            })
          : u(S, {
              children: [
                u("section", {
                  className: e.section,
                  children: [
                    u("div", {
                      className: e.sectionHeader,
                      children: u("h2", {
                        className: e.sectionTitle,
                        children: "Топ кланов",
                      }),
                    }),
                    u("div", {
                      className: e.clansBadges,
                      children: A
                        ? u(a5, { size: "sm" })
                        : c.length === 0
                        ? u("div", {
                            className: e.empty,
                            children: "Нет данных",
                          })
                        : c.map((s) =>
                            u(
                              "div",
                              {
                                className: e.clanBadge,
                                children: [
                                  u("span", {
                                    className: e.clanEmoji,
                                    children: s.avatar,
                                  }),
                                  u("span", {
                                    className: e.clanCount,
                                    children: C(s.count),
                                  }),
                                ],
                              },
                              s.avatar
                            )
                          ),
                    }),
                  ],
                }),
                u("section", {
                  className: e.section,
                  children: [
                    u("div", {
                      className: e.sectionHeader,
                      children: u("h2", {
                        className: e.sectionTitle,
                        children: "Популярные хештеги",
                      }),
                    }),
                    u("div", {
                      className: e.hashtagsList,
                      children: D
                        ? u(a5, { size: "sm" })
                        : l.length === 0
                        ? u("div", {
                            className: e.empty,
                            children: "Нет данных",
                          })
                        : l.map((s, o) =>
                            u(
                              "a",
                              {
                                href: `/hashtag/${encodeURIComponent(s.name)}`,
                                className: e.hashtagItem,
                                children: [
                                  u("span", {
                                    className: e.hashtagRank,
                                    children: o + 1,
                                  }),
                                  u("div", {
                                    className: e.hashtagInfo,
                                    children: [
                                      u("span", {
                                        className: e.hashtagTag,
                                        children: ["#", s.name],
                                      }),
                                      u("span", {
                                        className: e.hashtagCount,
                                        children: [C(s.count), " постов"],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              s.name
                            )
                          ),
                    }),
                  ],
                }),
              ],
            }),
      }),
    ],
  });
};

export { Search as Search, Search as default };
