import {
  a6,
  a7,
  a8,
  d,
  a8 as a8_1,
  a7 as a7_1,
  q as q_1,
  u,
  a9,
  a8_1 as a8_1_1,
  f,
  U,
  a5,
} from "./index-DBLtLuBZ.js";

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
      t._sentryDebugIds[n] = "cd41c776-c348-4621-ab1a-ec0be84b801c";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-cd41c776-c348-4621-ab1a-ec0be84b801c";
    }
  } catch {}
})();
const L = new a8(1, 300 * 1000 /* 1e3 */);
const H = new a8(1, 300 * 1000 /* 1e3 */);
const m = "data";

const v = {
  async getTrendingHashtags(t = 10) {
    const n = L.get(m);
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

    const i = c.map((o) => ({
      ...o,
      count: o.count ?? o.postsCount ?? 0,
    }));
    L.set(m, i);
    return i;
  },
  async getPopularAvatars() {
    const t = H.get(m);
    if (t) {
      return t;
    }
    const n = await a6.get(a7.users.topClans);

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

    const i = await a6.get(`${a7.search.global}?${c.toString()}`);
    const o = i.data ?? i;
    return {
      users: o.users ?? [],
      hashtags: (o.hashtags ?? []).map((g) => ({
        ...g,
        count: g.count ?? g.postsCount ?? 0,
      })),
    };
  },
};

const j = "mDMQ";
const q = "JXUE";
const K = "eoA7";
const W = "aHhC";
const J = "Pi1o";
const M = "s0iX";
const V = "CIne";
const Y = "wd8t";
const G = "Voby";
const O = "HhgB";
const Z = "DXal";
const aa = "lDiE";
const ea = "Ddc0";
const sa = "atJa";
const ta = "p1aN";
const na = "RuvI";
const ca = "o5Ka";
const ra = "TBne";
const ia = "XLLN";
const oa = "qvGF";
const la = "uPSZ";
const ha = "ycdI";
const da = "sQbb";
const ga = "NpIF";
const ma = "B1sr";

const e = {
  page: j,
  pageTitle: q,
  titleRow: K,
  searchWrapper: W,
  searchIcon: J,
  searchInput: M,
  sections: V,
  section: Y,
  sectionHeader: G,
  sectionTitle: O,
  usersList: Z,
  userItem: aa,
  userInfo: ea,
  userUsername: sa,
  clansBadges: ta,
  clanBadge: na,
  clanEmoji: ca,
  clanCount: ra,
  hashtagsList: ia,
  hashtagItem: oa,
  hashtagRank: la,
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
  const [o, g] = d([]);
  const [b, u] = d([]);
  const [w, p] = d([]);
  const [R, D] = d(true);
  const [E, U] = d(true);
  const [B, N] = d(false);
  const f = a8_1(null);
  a7_1(() => {
    (async () => {
      try {
        const [l, h] = await Promise.all([
          v.getPopularAvatars(),
          v.getTrendingHashtags(),
        ]);
        i(l.slice(0, 10));
        g(h.slice(0, 10));
      } catch (l) {
        console.error("Failed to fetch search data:", l);
      } finally {
        D(false);
        U(false);
      }
    })();
  }, []);

  const $ = q_1(async (s) => {
    const l = s.trim().replace(/^@/, "").replace(/^#/, "");
    if (!l) {
      u([]);
      p([]);
      N(false);
      return;
    }
    N(true);
    try {
      const h = await v.globalSearch(l, 10, 5);
      u(h.users);
      p(h.hashtags);
    } catch (h) {
      console.error("Failed to search:", h);
      u([]);
      p([]);
    } finally {
      N(false);
    }
  }, []);

  const P = (s) => {
    const h = s.target.value;
    r(h);

    if (f.current) {
      clearTimeout(f.current);
    }

    f.current = window.setTimeout(() => {
      $(h);
    }, 1000 /* 1e3 */);
  };

  const _ = n.trim().length > 0;
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
            onInput: P,
          }),
        ],
      }),
      u("div", {
        className: e.sections,
        children: _
          ? u(a8_1_1, {
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
                      children: B
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
          : u(a8_1_1, {
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
                      children: R
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
                      children: E
                        ? u(a5, { size: "sm" })
                        : o.length === 0
                        ? u("div", {
                            className: e.empty,
                            children: "Нет данных",
                          })
                        : o.map((s, l) =>
                            u(
                              "a",
                              {
                                href: `/hashtag/${encodeURIComponent(s.name)}`,
                                className: e.hashtagItem,
                                children: [
                                  u("span", {
                                    className: e.hashtagRank,
                                    children: l + 1,
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
