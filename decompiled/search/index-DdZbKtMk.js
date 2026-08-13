import {
  a6,
  a7,
  a8,
  d,
  a5 as A_1,
  y,
  q as q_1,
  a7 as a7_1,
  a9,
  k,
  f,
  U,
  a5,
} from "./index-B9FitUXy.js";

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
      t._sentryDebugIds[i] = "f96789ac-b84f-4c29-a9f9-8455902234a5";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-f96789ac-b84f-4c29-a9f9-8455902234a5";
    }
  } catch {}
})();
const L = new a8(1, 300 * 1000 /* 1e3 */);
const b = new a8(1, 300 * 1000 /* 1e3 */);
const p = "data";

const I = {
  async getTrendingHashtags(t = 10) {
    const i = L.get(p);
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
    L.set(p, c);
    return c;
  },
  async getPopularAvatars() {
    const t = b.get(p);
    if (t) {
      return t;
    }
    const i = await a6.get(a7.users.topClans);

    const n = (i.clans || i.data || []).map((c) => ({
      ...c,
      count: c.count ?? c.memberCount ?? 0,
    }));

    b.set(p, n);
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

const W = "axNP";
const q = "j3W9";
const G = "iv19";
const K = "tQsx";
const M = "pLXN";
const X = "QS8r";
const Y = "MIZv";
const V = "KfsE";
const J = "A0oH";
const O = "IRin";
const Z = "Jqd0";
const aa = "Fr0E";
const sa = "Gizu";
const ea = "j0RT";
const ta = "k1mY";
const na = "QIvE";
const ca = "szcX";
const ra = "MoQV";
const ia = "aAGs";
const oa = "Grnc";
const la = "of7b";
const ha = "l3Ft";
const da = "ARW6";
const ga = "FXnU";
const ma = "vE5j";

const s = {
  page: W,
  pageTitle: q,
  titleRow: G,
  searchWrapper: K,
  searchIcon: M,
  searchInput: X,
  sections: Y,
  section: V,
  sectionHeader: J,
  sectionTitle: O,
  usersList: Z,
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
  const [w, f] = d([]);
  const [C, N] = d([]);
  const [H, E] = d(true);
  const [U, $] = d(true);
  const [D, y] = d(false);
  const v = A_1(null);
  y(() => {
    (async () => {
      try {
        const [l, h] = await Promise.all([
          I.getPopularAvatars(),
          I.getTrendingHashtags(),
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
      const h = await I.globalSearch(l, 10, 5);
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

    if (v.current) {
      clearTimeout(v.current);
    }

    v.current = window.setTimeout(() => {
      P(h);
    }, 1000 /* 1e3 */);
  };

  const Q = i.trim().length > 0;
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
        children: Q
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
                      children: D
                        ? null
                        : w.length === 0
                        ? a7_1("div", {
                            className: s.empty,
                            children: "Ничего не найдено",
                          })
                        : w.map((e) =>
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
                C.length > 0 &&
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
                        children: C.map((e) =>
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
                      children: H
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
                      children: U
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
