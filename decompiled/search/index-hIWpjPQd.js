import {
  a4,
  a5,
  a6,
  d,
  A as A_1,
  y,
  a7 as q_1,
  a,
  a7,
  a4 as a4_1,
  g,
  U,
  a3,
} from "./index-7xRaK15k.js";

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
    t.SENTRY_RELEASE = { id: "1.1.1" };
    const i = new t.Error().stack;

    if (i) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[i] = "ed11e99c-3d00-487e-8f29-d9d3ebb1c081";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-ed11e99c-3d00-487e-8f29-d9d3ebb1c081";
    }
  } catch {}
})();
const b = new a6(1, 300 * 1000 /* 1e3 */);
const A = new a6(1, 300 * 1000 /* 1e3 */);
const p = "data";

const v = {
  async getTrendingHashtags(t = 10) {
    const i = b.get(p);
    if (i) {
      return i;
    }
    const r = await a4.get(`${a5.hashtags.trending}?limit=${t}`);
    let n;

    if (r.data?.hashtags) {
      n = r.data.hashtags;
    } else if (Array.isArray(r.hashtags)) {
      n = r.hashtags;
    } else if (Array.isArray(r.data)) {
      n = r.data;
    } else {
      n = [];
    }

    const c = n.map((o) => ({
      ...o,
      count: o.count ?? o.postsCount ?? 0,
    }));
    b.set(p, c);
    return c;
  },
  async getPopularAvatars() {
    const t = A.get(p);
    if (t) {
      return t;
    }
    const i = await a4.get(a5.users.topClans);

    const n = (i.clans || i.data || []).map((c) => ({
      ...c,
      count: c.count ?? c.memberCount ?? 0,
    }));

    A.set(p, n);
    return n;
  },
  async searchUsers(t, i = 20, r) {
    const n = new URLSearchParams({ q: t, limit: String(i) });

    if (r) {
      n.append("cursor", r);
    }

    const c = await a4.get(`${a5.users.search}?${n.toString()}`);
    return { data: c.data?.users || c.users || [], nextCursor: null };
  },
  async globalSearch(t, i = 5, r = 5) {
    const n = new URLSearchParams({
      q: t,
      userLimit: String(i),
      hashtagLimit: String(r),
    });

    const c = await a4.get(`${a5.search.global}?${n.toString()}`);
    const o = c.data ?? c;
    return {
      users: o.users ?? [],
      hashtags: (o.hashtags ?? []).map((g) => ({
        ...g,
        count: g.count ?? g.postsCount ?? 0,
      })),
    };
  },
  async searchHashtags(t, i = 10) {
    const r = new URLSearchParams({ limit: String(i) });

    if (t) {
      r.set("q", t);
    }

    const n = await a4.get(`${a5.hashtags.search}?${r.toString()}`);
    let c;

    if (n.data?.hashtags) {
      c = n.data.hashtags;
    } else if (Array.isArray(n.hashtags)) {
      c = n.hashtags;
    } else if (Array.isArray(n.data)) {
      c = n.data;
    } else {
      c = [];
    }

    return c.map((o) => ({
      ...o,
      count: o.count ?? o.postsCount ?? 0,
    }));
  },
};

const j = "DMj0";
const z = "LOKK";
const F = "nUAk";
const M = "UlhI";
const O = "Zo8x";
const V = "tENY";
const W = "RUCc";
const G = "HpAN";
const J = "ErLK";
const Z = "YSnH";
const X = "VRCJ";
const aa = "Syrp";
const sa = "BnqE";
const ea = "My7B";
const ta = "qEGa";
const na = "H53c";
const ca = "y6LM";
const ra = "SYIO";
const ia = "VnKc";
const oa = "uZuY";
const la = "ann2";
const ha = "gtbt";
const da = "RJQE";
const ga = "KvOq";
const ma = "IxGh";

const s = {
  page: j,
  pageTitle: z,
  titleRow: F,
  searchWrapper: M,
  searchIcon: O,
  searchInput: V,
  sections: W,
  section: G,
  sectionHeader: J,
  sectionTitle: Z,
  usersList: X,
  userItem: aa,
  userInfo: sa,
  userUsername: ea,
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

const S = (t) =>
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
  const [i, r] = d("");
  const [n, c] = d([]);
  const [o, g] = d([]);
  const [C, f] = d([]);
  const [w, N] = d([]);
  const [R, E] = d(true);
  const [U, $] = d(true);
  const [D, y] = d(false);
  const I = A_1(null);
  y(() => {
    (async () => {
      try {
        const [l, h] = await Promise.all([
          v.getPopularAvatars(),
          v.getTrendingHashtags(),
        ]);
        c(l.slice(0, 10));
        g(h.slice(0, 10));
      } catch (l) {
        console.error("Failed to fetch search data:", l);
      } finally {
        E(false);
        $(false);
      }
    })();
  }, []);

  const k = q_1(async (e) => {
    const l = e.trim().replace(/^@/, "").replace(/^#/, "");
    if (!l) {
      f([]);
      N([]);
      y(false);
      return;
    }
    y(true);
    try {
      const h = await v.globalSearch(l, 10, 5);
      f(h.users);
      N(h.hashtags);
    } catch (h) {
      console.error("Failed to search:", h);
      f([]);
      N([]);
    } finally {
      y(false);
    }
  }, []);

  const B = (e) => {
    const h = e.target.value;
    r(h);

    if (I.current) {
      clearTimeout(I.current);
    }

    I.current = window.setTimeout(() => {
      k(h);
    }, 1000 /* 1e3 */);
  };

  const P = i.trim().length > 0;
  return a("div", {
    className: s.page,
    children: [
      a("div", {
        className: s.titleRow,
        children: a("h1", { className: s.pageTitle, children: "Поиск" }),
      }),
      a("div", {
        className: s.searchWrapper,
        children: [
          a("div", { className: s.searchIcon, children: a(a7, { size: 20 }) }),
          a("input", {
            type: "text",
            className: s.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: i,
            onInput: B,
          }),
        ],
      }),
      a("div", {
        className: s.sections,
        children: P
          ? a(a4_1, {
              children: [
                a("section", {
                  className: s.section,
                  children: [
                    a("div", {
                      className: s.sectionHeader,
                      children: a("h2", {
                        className: s.sectionTitle,
                        children: "Люди",
                      }),
                    }),
                    a("div", {
                      className: s.usersList,
                      children: D
                        ? null
                        : C.length === 0
                        ? a("div", {
                            className: s.empty,
                            children: "Ничего не найдено",
                          })
                        : C.map((e) =>
                            a(
                              "a",
                              {
                                href: `/@${e.username ?? e.userId}`,
                                className: s.userItem,
                                children: [
                                  a(g, {
                                    src: e.avatar,
                                    alt: e.displayName,
                                    size: "md",
                                  }),
                                  a("div", {
                                    className: s.userInfo,
                                    children: [
                                      a(U, {
                                        name: e.displayName,
                                        verified: e.isVerified ?? e.verified,
                                        hasNuksta: e.hasNuksta,
                                        pin: e.pin,
                                      }),
                                      e.username &&
                                        a("span", {
                                          className: s.userUsername,
                                          children: ["@", e.username],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              e.userId
                            )
                          ),
                    }),
                  ],
                }),
                w.length > 0 &&
                  a("section", {
                    className: s.section,
                    children: [
                      a("div", {
                        className: s.sectionHeader,
                        children: a("h2", {
                          className: s.sectionTitle,
                          children: "Хештеги",
                        }),
                      }),
                      a("div", {
                        className: s.hashtagsList,
                        children: w.map((e) =>
                          a(
                            "a",
                            {
                              href: `/hashtag/${encodeURIComponent(e.name)}`,
                              className: s.hashtagItem,
                              children: a("div", {
                                className: s.hashtagInfo,
                                children: [
                                  a("span", {
                                    className: s.hashtagTag,
                                    children: ["#", e.name],
                                  }),
                                  a("span", {
                                    className: s.hashtagCount,
                                    children: [S(e.count), " постов"],
                                  }),
                                ],
                              }),
                            },
                            e.name
                          )
                        ),
                      }),
                    ],
                  }),
              ],
            })
          : a(a4_1, {
              children: [
                a("section", {
                  className: s.section,
                  children: [
                    a("div", {
                      className: s.sectionHeader,
                      children: a("h2", {
                        className: s.sectionTitle,
                        children: "Топ кланов",
                      }),
                    }),
                    a("div", {
                      className: s.clansBadges,
                      children: R
                        ? a(a3, { size: "sm" })
                        : n.length === 0
                        ? a("div", {
                            className: s.empty,
                            children: "Нет данных",
                          })
                        : n.map((e) =>
                            a(
                              "div",
                              {
                                className: s.clanBadge,
                                children: [
                                  a("span", {
                                    className: s.clanEmoji,
                                    children: e.avatar,
                                  }),
                                  a("span", {
                                    className: s.clanCount,
                                    children: S(e.count),
                                  }),
                                ],
                              },
                              e.avatar
                            )
                          ),
                    }),
                  ],
                }),
                a("section", {
                  className: s.section,
                  children: [
                    a("div", {
                      className: s.sectionHeader,
                      children: a("h2", {
                        className: s.sectionTitle,
                        children: "Популярные хештеги",
                      }),
                    }),
                    a("div", {
                      className: s.hashtagsList,
                      children: U
                        ? a(a3, { size: "sm" })
                        : o.length === 0
                        ? a("div", {
                            className: s.empty,
                            children: "Нет данных",
                          })
                        : o.map((e, l) =>
                            a(
                              "a",
                              {
                                href: `/hashtag/${encodeURIComponent(e.name)}`,
                                className: s.hashtagItem,
                                children: [
                                  a("span", {
                                    className: s.hashtagRank,
                                    children: l + 1,
                                  }),
                                  a("div", {
                                    className: s.hashtagInfo,
                                    children: [
                                      a("span", {
                                        className: s.hashtagTag,
                                        children: ["#", e.name],
                                      }),
                                      a("span", {
                                        className: s.hashtagCount,
                                        children: [S(e.count), " постов"],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.name
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
