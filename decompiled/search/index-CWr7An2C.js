import {
  ao,
  ap,
  aq,
  d,
  A,
  h,
  h as h_1,
  u,
  ar,
  S,
  f,
  X as X_1,
  an,
} from "./index-CsuAWxkQ.js";

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
      t._sentryDebugIds[n] = "2d2e5f06-f7bb-4cc2-af2a-e65675b8e6fa";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-2d2e5f06-f7bb-4cc2-af2a-e65675b8e6fa";
    }
  } catch {}
})();
const H = new aq(1, 300 * 1000 /* 1e3 */);
const L = new aq(1, 300 * 1000 /* 1e3 */);
const m = "data";

const v = {
  async getTrendingHashtags(t = 10) {
    const n = H.get(m);
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

    const i = c.map((o) => ({
      ...o,
      count: o.count ?? o.postsCount ?? 0,
    }));
    H.set(m, i);
    return i;
  },
  async getPopularAvatars() {
    const t = L.get(m);
    if (t) {
      return t;
    }
    const n = await ao.get(ap.users.topClans);

    const c = (n.clans || n.data || []).map((i) => ({
      ...i,
      count: i.count ?? i.memberCount ?? 0,
    }));

    L.set(m, c);
    return c;
  },
  async globalSearch(t, n = 5, r = 5) {
    const c = new URLSearchParams({
      q: t,
      userLimit: String(n),
      hashtagLimit: String(r),
    });

    const i = await ao.get(`${ap.search.global}?${c.toString()}`);
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

const K = "zxmd";
const Q = "glq1";
const Y = "el2p";
const X = "tpyz";
const W = "okKV";
const J = "yrg5";
const M = "fEi2";
const O = "rXKk";
const V = "IEdj";
const G = "q8X4";
const Z = "QO3T";
const aa = "b4JB";
const ea = "jojx";
const sa = "jqx2";
const ta = "ruqK";
const na = "Q1bC";
const ca = "MbHN";
const ra = "ujYI";
const ia = "tokb";
const oa = "xX6J";
const la = "gy6t";
const ha = "pPSw";
const da = "FKwY";
const ga = "UYm1";
const ma = "RFDI";

const e = {
  page: K,
  pageTitle: Q,
  titleRow: Y,
  searchWrapper: X,
  searchIcon: W,
  searchInput: J,
  sections: M,
  section: O,
  sectionHeader: V,
  sectionTitle: G,
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

const b = (t) =>
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
  const [C, u] = d([]);
  const [w, p] = d([]);
  const [A, E] = d(true);
  const [D, U] = d(true);
  const [k, f] = d(false);
  const N = A(null);
  h(() => {
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
        E(false);
        U(false);
      }
    })();
  }, []);

  const $ = h_1(async (s) => {
    const l = s.trim().replace(/^@/, "").replace(/^#/, "");
    if (!l) {
      u([]);
      p([]);
      f(false);
      return;
    }
    f(true);
    try {
      const h = await v.globalSearch(l, 10, 5);
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

  const j = (s) => {
    const h = s.target.value;
    r(h);

    if (N.current) {
      clearTimeout(N.current);
    }

    N.current = window.setTimeout(() => {
      $(h);
    }, 1000 /* 1e3 */);
  };

  const x = n.trim().length > 0;
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
            onInput: j,
          }),
        ],
      }),
      u("div", {
        className: e.sections,
        children: x
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
                        : C.length === 0
                        ? u("div", {
                            className: e.empty,
                            children: "Ничего не найдено",
                          })
                        : C.map((s) =>
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
                                    children: [b(s.count), " постов"],
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
                                    children: b(s.count),
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
                        ? u(an, { size: "sm" })
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
                                        children: [b(s.count), " постов"],
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
