import {
  ao,
  ap,
  aq,
  d,
  A,
  h,
  q as q_1,
  u,
  ar,
  an as S_1,
  f,
  X as X_1,
  an,
} from "./index-DqQficWb.js";

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
    t.SENTRY_RELEASE = { id: "1.1.2" };
    const n = new t.Error().stack;

    if (n) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[n] = "1cf02592-e765-4ba7-be70-3ae1b7b77056";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-1cf02592-e765-4ba7-be70-3ae1b7b77056";
    }
  } catch {}
})();
const L = new aq(1, 300 * 1000 /* 1e3 */);
const H = new aq(1, 300 * 1000 /* 1e3 */);
const m = "data";

const v = {
  async getTrendingHashtags(t = 10) {
    const n = L.get(m);
    if (n) {
      return n;
    }
    const r = await ao.get(`${ap.hashtags.trending}?limit=${t}`);
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
    L.set(m, i);
    return i;
  },
  async getPopularAvatars() {
    const t = H.get(m);
    if (t) {
      return t;
    }
    const n = await ao.get(ap.users.topClans);

    const c = (n.clans || n.data || []).map((i) => ({
      ...i,
      count: i.count ?? i.memberCount ?? 0,
    }));

    H.set(m, c);
    return c;
  },
  async globalSearch(t, n = 5, r = 5) {
    const c = new URLSearchParams({
      q: t,
      userLimit: String(n),
      hashtagLimit: String(r),
    });

    const i = await ao.get(`${ap.search.global}?${c.toString()}`);
    const l = i.data ?? i;
    return {
      users: l.users ?? [],
      hashtags: (l.hashtags ?? []).map((g) => ({
        ...g,
        count: g.count ?? g.postsCount ?? 0,
      })),
    };
  },
};

const q = "irPB";
const F = "TcNE";
const M = "JHjn";
const G = "L4lQ";
const K = "bKbi";
const Y = "BljC";
const J = "RCQh";
const O = "LwPl";
const V = "NGxM";
const X = "wjva";
const Z = "yJ9d";
const aa = "Dz7s";
const ea = "WLWU";
const sa = "OgoQ";
const ta = "Q0UN";
const na = "q6G6";
const ca = "PzIz";
const ra = "fuiT";
const ia = "ZM06";
const la = "MuCN";
const oa = "SQxd";
const ha = "yf7v";
const da = "GjSW";
const ga = "jg73";
const ma = "cYT7";

const e = {
  page: q,
  pageTitle: F,
  titleRow: M,
  searchWrapper: G,
  searchIcon: K,
  searchInput: Y,
  sections: J,
  section: O,
  sectionHeader: V,
  sectionTitle: X,
  usersList: Z,
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
  hashtagCount: ga,
  empty: ma,
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
  const [l, g] = d([]);
  const [b, u] = d([]);
  const [T, p] = d([]);
  const [A, E] = d(true);
  const [U, D] = d(true);
  const [P, f] = d(false);
  const N = A(null);
  h(() => {
    (async () => {
      try {
        const [o, h] = await Promise.all([
          v.getPopularAvatars(),
          v.getTrendingHashtags(),
        ]);
        i(o.slice(0, 10));
        g(h.slice(0, 10));
      } catch (o) {
        console.error("Failed to fetch search data:", o);
      } finally {
        E(false);
        D(false);
      }
    })();
  }, []);

  const Q = q_1(async (s) => {
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

  const $ = (s) => {
    const h = s.target.value;
    r(h);

    if (N.current) {
      clearTimeout(N.current);
    }

    N.current = window.setTimeout(() => {
      Q(h);
    }, 1000 /* 1e3 */);
  };

  const j = n.trim().length > 0;
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
          u("div", { className: e.searchIcon, children: u(ar, { size: 20 }) }),
          u("input", {
            type: "text",
            className: e.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: n,
            onInput: $,
          }),
        ],
      }),
      u("div", {
        className: e.sections,
        children: j
          ? u(S_1, {
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
                      children: P
                        ? null
                        : b.length === 0
                        ? u("div", {
                            className: e.empty,
                            children: "Ничего не найдено",
                          })
                        : b.map((s) =>
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
                                      u(X_1, {
                                        userId: s.id,
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
                T.length > 0 &&
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
                        children: T.map((s) =>
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
          : u(S_1, {
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
                        ? u(an, { size: "sm" })
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
                      children: U
                        ? u(an, { size: "sm" })
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
