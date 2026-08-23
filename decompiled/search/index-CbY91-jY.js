import {
  a6,
  a7,
  a8,
  d,
  A as A_1,
  a6 as a6_1,
  q,
  u,
  a9,
  k,
  f,
  U,
  a5,
} from "./index-pEgBAsWz.js";

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
      t._sentryDebugIds[n] = "f5456613-4fa4-4474-926a-c672f0f81054";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-f5456613-4fa4-4474-926a-c672f0f81054";
    }
  } catch {}
})();
const b = new a8(1, 300 * 1000 /* 1e3 */);
const A = new a8(1, 300 * 1000 /* 1e3 */);
const g = "data";

const v = {
  async getTrendingHashtags(t = 10) {
    const n = b.get(g);
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
    b.set(g, i);
    return i;
  },
  async getPopularAvatars() {
    const t = A.get(g);
    if (t) {
      return t;
    }
    const n = await a6.get(a7.users.topClans);

    const c = (n.clans || n.data || []).map((i) => ({
      ...i,
      count: i.count ?? i.memberCount ?? 0,
    }));

    A.set(g, c);
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

const Y = "Q4mJ";
const z = "Qgwh";
const F = "Ttr2";
const V = "qZPk";
const G = "nVuV";
const J = "hwyV";
const K = "u1Dq";
const X = "h5Ye";
const M = "TqB5";
const O = "R40X";
const Z = "SQhA";
const aa = "jAbn";
const ea = "jLHK";
const sa = "WTt2";
const ta = "qqRj";
const na = "rwPp";
const ca = "kmQh";
const ra = "DNdE";
const ia = "x8Jj";
const la = "aTYY";
const oa = "JGG2";
const ha = "hLAL";
const da = "X0pC";
const ma = "ttI7";
const ga = "GW2s";

const e = {
  page: Y,
  pageTitle: z,
  titleRow: F,
  searchWrapper: V,
  searchIcon: G,
  searchInput: J,
  sections: K,
  section: X,
  sectionHeader: M,
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
  hashtagItem: la,
  hashtagRank: oa,
  hashtagInfo: ha,
  hashtagTag: da,
  hashtagCount: ma,
  empty: ga,
};

const T = (t) =>
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
  const [w, u] = d([]);
  const [C, p] = d([]);
  const [R, E] = d(true);
  const [D, U] = d(true);
  const [k, f] = d(false);
  const N = A_1(null);
  a6_1(() => {
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

  const P = (s) => {
    const h = s.target.value;
    r(h);

    if (N.current) {
      clearTimeout(N.current);
    }

    N.current = window.setTimeout(() => {
      $(h);
    }, 1000 /* 1e3 */);
  };

  const Q = n.trim().length > 0;
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
        children: Q
          ? u(k, {
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
                        : w.length === 0
                        ? u("div", {
                            className: e.empty,
                            children: "Ничего не найдено",
                          })
                        : w.map((s) =>
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
                C.length > 0 &&
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
                        children: C.map((s) =>
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
                                    children: [T(s.count), " постов"],
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
          : u(k, {
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
                                    children: T(s.count),
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
                                        children: [T(s.count), " постов"],
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
