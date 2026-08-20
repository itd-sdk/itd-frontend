import {
  a6,
  a7,
  a8,
  d,
  A as A_1,
  y,
  f as q_1,
  a7 as a7_1,
  a9,
  k,
  f,
  U,
  a5,
} from "./index-DDTOXJaD.js";

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
    const i = new t.Error().stack;

    if (i) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[i] = "388b958c-36aa-4d59-9ce7-d2d10708d4a1";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-388b958c-36aa-4d59-9ce7-d2d10708d4a1";
    }
  } catch {}
})();
const b = new a8(1, 300 * 1000 /* 1e3 */);
const A = new a8(1, 300 * 1000 /* 1e3 */);
const p = "data";

const v = {
  async getTrendingHashtags(t = 10) {
    const i = b.get(p);
    if (i) {
      return i;
    }
    const r = await a6.get(`${a7.hashtags.trending}?limit=${t}`);
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
    const i = await a6.get(a7.users.topClans);

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

    const c = await a6.get(`${a7.users.search}?${n.toString()}`);
    return { data: c.data?.users || c.users || [], nextCursor: null };
  },
  async globalSearch(t, i = 5, r = 5) {
    const n = new URLSearchParams({
      q: t,
      userLimit: String(i),
      hashtagLimit: String(r),
    });

    const c = await a6.get(`${a7.search.global}?${n.toString()}`);
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

    const n = await a6.get(`${a7.hashtags.search}?${r.toString()}`);
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

const Q = "DjY6";
const z = "GcYf";
const M = "PhHc";
const O = "xMpc";
const W = "lZsP";
const Z = "uSbY";
const G = "aQch";
const K = "JfmI";
const J = "MDFO";
const V = "OESn";
const X = "Lccm";
const aa = "UAjM";
const sa = "gLq7";
const ea = "PojH";
const ta = "IGrm";
const na = "nqaL";
const ca = "bIOY";
const ra = "pHly";
const ia = "ke6n";
const oa = "vCZ7";
const la = "DNml";
const ha = "uZAI";
const da = "Clsm";
const ga = "tIfc";
const ma = "ej57";

const s = {
  page: Q,
  pageTitle: z,
  titleRow: M,
  searchWrapper: O,
  searchIcon: W,
  searchInput: Z,
  sections: G,
  section: K,
  sectionHeader: J,
  sectionTitle: V,
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
  const [R, U] = d(true);
  const [$, D] = d(true);
  const [E, y] = d(false);
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
        U(false);
        D(false);
      }
    })();
  }, []);

  const P = q_1(async (e) => {
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

  const k = (e) => {
    const h = e.target.value;
    r(h);

    if (I.current) {
      clearTimeout(I.current);
    }

    I.current = window.setTimeout(() => {
      P(h);
    }, 1000 /* 1e3 */);
  };

  const _ = i.trim().length > 0;
  return a7_1("div", {
    className: s.page,
    children: [
      a7_1("div", {
        className: s.titleRow,
        children: a7_1("h1", { className: s.pageTitle, children: "Поиск" }),
      }),
      a7_1("div", {
        className: s.searchWrapper,
        children: [
          a7_1("div", {
            className: s.searchIcon,
            children: a7_1(a9, { size: 20 }),
          }),
          a7_1("input", {
            type: "text",
            className: s.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: i,
            onInput: k,
          }),
        ],
      }),
      a7_1("div", {
        className: s.sections,
        children: _
          ? a7_1(k, {
              children: [
                a7_1("section", {
                  className: s.section,
                  children: [
                    a7_1("div", {
                      className: s.sectionHeader,
                      children: a7_1("h2", {
                        className: s.sectionTitle,
                        children: "Люди",
                      }),
                    }),
                    a7_1("div", {
                      className: s.usersList,
                      children: E
                        ? null
                        : C.length === 0
                        ? a7_1("div", {
                            className: s.empty,
                            children: "Ничего не найдено",
                          })
                        : C.map((e) =>
                            a7_1(
                              "a",
                              {
                                href: `/@${e.username ?? e.userId}`,
                                className: s.userItem,
                                children: [
                                  a7_1(f, {
                                    src: e.avatar,
                                    alt: e.displayName,
                                    size: "md",
                                  }),
                                  a7_1("div", {
                                    className: s.userInfo,
                                    children: [
                                      a7_1(U, {
                                        name: e.displayName,
                                        verified: e.isVerified ?? e.verified,
                                        hasNuksta: e.hasNuksta,
                                        pin: e.pin,
                                      }),
                                      e.username &&
                                        a7_1("span", {
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
                  a7_1("section", {
                    className: s.section,
                    children: [
                      a7_1("div", {
                        className: s.sectionHeader,
                        children: a7_1("h2", {
                          className: s.sectionTitle,
                          children: "Хештеги",
                        }),
                      }),
                      a7_1("div", {
                        className: s.hashtagsList,
                        children: w.map((e) =>
                          a7_1(
                            "a",
                            {
                              href: `/hashtag/${encodeURIComponent(e.name)}`,
                              className: s.hashtagItem,
                              children: a7_1("div", {
                                className: s.hashtagInfo,
                                children: [
                                  a7_1("span", {
                                    className: s.hashtagTag,
                                    children: ["#", e.name],
                                  }),
                                  a7_1("span", {
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
          : a7_1(k, {
              children: [
                a7_1("section", {
                  className: s.section,
                  children: [
                    a7_1("div", {
                      className: s.sectionHeader,
                      children: a7_1("h2", {
                        className: s.sectionTitle,
                        children: "Топ кланов",
                      }),
                    }),
                    a7_1("div", {
                      className: s.clansBadges,
                      children: R
                        ? a7_1(a5, { size: "sm" })
                        : n.length === 0
                        ? a7_1("div", {
                            className: s.empty,
                            children: "Нет данных",
                          })
                        : n.map((e) =>
                            a7_1(
                              "div",
                              {
                                className: s.clanBadge,
                                children: [
                                  a7_1("span", {
                                    className: s.clanEmoji,
                                    children: e.avatar,
                                  }),
                                  a7_1("span", {
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
                a7_1("section", {
                  className: s.section,
                  children: [
                    a7_1("div", {
                      className: s.sectionHeader,
                      children: a7_1("h2", {
                        className: s.sectionTitle,
                        children: "Популярные хештеги",
                      }),
                    }),
                    a7_1("div", {
                      className: s.hashtagsList,
                      children: $
                        ? a7_1(a5, { size: "sm" })
                        : o.length === 0
                        ? a7_1("div", {
                            className: s.empty,
                            children: "Нет данных",
                          })
                        : o.map((e, l) =>
                            a7_1(
                              "a",
                              {
                                href: `/hashtag/${encodeURIComponent(e.name)}`,
                                className: s.hashtagItem,
                                children: [
                                  a7_1("span", {
                                    className: s.hashtagRank,
                                    children: l + 1,
                                  }),
                                  a7_1("div", {
                                    className: s.hashtagInfo,
                                    children: [
                                      a7_1("span", {
                                        className: s.hashtagTag,
                                        children: ["#", e.name],
                                      }),
                                      a7_1("span", {
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
