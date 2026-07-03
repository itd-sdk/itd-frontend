import {
  a5,
  a6,
  a7,
  d,
  a4 as A_1,
  y,
  a8 as q_1,
  a,
  a8,
  a5 as a5_1,
  g,
  U as U_1,
  a4,
} from "./index-DuQT229k.js";

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
      t._sentryDebugIds[i] = "0937e314-d928-4740-9721-f7c86f9a24ed";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-0937e314-d928-4740-9721-f7c86f9a24ed";
    }
  } catch {}
})();
const L = new a7(1, 300 * 1000 /* 1e3 */);
const U = new a7(1, 300 * 1000 /* 1e3 */);
const p = "data";

const v = {
  async getTrendingHashtags(t = 10) {
    const i = L.get(p);
    if (i) {
      return i;
    }
    const r = await a5.get(`${a6.hashtags.trending}?limit=${t}`);
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
    const t = U.get(p);
    if (t) {
      return t;
    }
    const i = await a5.get(a6.users.topClans);

    const n = (i.clans || i.data || []).map((c) => ({
      ...c,
      count: c.count ?? c.memberCount ?? 0,
    }));

    U.set(p, n);
    return n;
  },
  async searchUsers(t, i = 20, r) {
    const n = new URLSearchParams({ q: t, limit: String(i) });

    if (r) {
      n.append("cursor", r);
    }

    const c = await a5.get(`${a6.users.search}?${n.toString()}`);
    return { data: c.data?.users || c.users || [], nextCursor: null };
  },
  async globalSearch(t, i = 5, r = 5) {
    const n = new URLSearchParams({
      q: t,
      userLimit: String(i),
      hashtagLimit: String(r),
    });

    const c = await a5.get(`${a6.search.global}?${n.toString()}`);
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

    const n = await a5.get(`${a6.hashtags.search}?${r.toString()}`);
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

const j = "odpz";
const F = "AjNG";
const J = "pVSU";
const O = "U2Ix";
const W = "ocpm";
const Y = "MgOJ";
const Z = "dtNU";
const G = "qIPZ";
const M = "TKv7";
const V = "dikn";
const X = "gUJy";
const aa = "Owuc";
const sa = "J79q";
const ea = "PoZg";
const ta = "XiDi";
const na = "PfD6";
const ca = "hgQa";
const ra = "rDK2";
const ia = "rZYG";
const oa = "imtd";
const la = "Befz";
const ha = "i6cz";
const da = "IAx1";
const ga = "KCBN";
const ma = "muhC";

const s = {
  page: j,
  pageTitle: F,
  titleRow: J,
  searchWrapper: O,
  searchIcon: W,
  searchInput: Y,
  sections: Z,
  section: G,
  sectionHeader: M,
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

const w = (t) =>
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
  const [S, N] = d([]);
  const [b, R] = d(true);
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
        R(false);
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

  const B = i.trim().length > 0;
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
          a("div", { className: s.searchIcon, children: a(a8, { size: 20 }) }),
          a("input", {
            type: "text",
            className: s.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: i,
            onInput: k,
          }),
        ],
      }),
      a("div", {
        className: s.sections,
        children: B
          ? a(a5_1, {
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
                      children: E
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
                                      a(U_1, {
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
                S.length > 0 &&
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
                        children: S.map((e) =>
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
                                    children: [w(e.count), " постов"],
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
          : a(a5_1, {
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
                      children: b
                        ? a(a4, { size: "sm" })
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
                                    children: w(e.count),
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
                      children: $
                        ? a(a4, { size: "sm" })
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
                                        children: [w(e.count), " постов"],
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
