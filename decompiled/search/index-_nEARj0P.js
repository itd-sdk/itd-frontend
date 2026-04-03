import {
  ae,
  af,
  ag,
  d,
  A as A_1,
  y,
  q as q_1,
  af as af_1,
  ah,
  k,
  n,
  U,
  m,
} from "./index-BNK3-E0q.js";

const H = new ag(1, 300 * 1000 /* 1e3 */);
const A = new ag(1, 300 * 1000 /* 1e3 */);
const p = "data";

const I = {
  async getTrendingHashtags(c = 10) {
    const i = H.get(p);
    if (i) {
      return i;
    }
    const r = await ae.get(`${af.hashtags.trending}?limit=${c}`);
    let t;

    if (r.data?.hashtags) {
      t = r.data.hashtags;
    } else if (Array.isArray(r.hashtags)) {
      t = r.hashtags;
    } else if (Array.isArray(r.data)) {
      t = r.data;
    } else {
      t = [];
    }

    const n = t.map((l) => ({
      ...l,
      count: l.count ?? l.postsCount ?? 0,
    }));
    H.set(p, n);
    return n;
  },
  async getPopularAvatars() {
    const c = A.get(p);
    if (c) {
      return c;
    }
    const i = await ae.get(af.users.topClans);

    const t = (i.clans || i.data || i.data || []).map((n) => ({
      ...n,
      count: n.count ?? n.memberCount ?? 0,
    }));

    A.set(p, t);
    return t;
  },
  async searchUsers(c, i = 20, r) {
    const t = new URLSearchParams({ q: c, limit: String(i) });

    if (r) {
      t.append("cursor", r);
    }

    const n = await ae.get(`${af.users.search}?${t.toString()}`);
    return {
      data: n.data?.users || n.users || n.users || [],
      nextCursor: null,
    };
  },
  async globalSearch(c, i = 5, r = 5) {
    const t = new URLSearchParams({
      q: c,
      userLimit: String(i),
      hashtagLimit: String(r),
    });

    const n = await ae.get(`${af.search.global}?${t.toString()}`);
    const l = n.data ?? n;
    return {
      users: l.users ?? [],
      hashtags: (l.hashtags ?? []).map((m) => ({
        ...m,
        count: m.count ?? m.postsCount ?? 0,
      })),
    };
  },
  async searchHashtags(c, i = 10) {
    const r = new URLSearchParams({ limit: String(i) });

    if (c) {
      r.set("q", c);
    }

    const t = await ae.get(`${af.hashtags.search}?${r.toString()}`);
    let n;

    if (t.data?.hashtags) {
      n = t.data.hashtags;
    } else if (Array.isArray(t.hashtags)) {
      n = t.hashtags;
    } else if (Array.isArray(t.data)) {
      n = t.data;
    } else {
      n = [];
    }

    return n.map((l) => ({
      ...l,
      count: l.count ?? l.postsCount ?? 0,
    }));
  },
};

const j = "V8n0-A6j";
const q = "lLeSRXJI";
const M = "PhJGbQsP";
const O = "QMiCPNNZ";
const W = "YftXFSHB";
const X = "VUVtn1zM";
const Y = "hBNiYwQ9";
const _ = "l8pT2ZJ9";
const G = "docWdaJH";
const K = "vISuOJy2";
const Z = "FzJvK--w";
const aa = "Xe2SUuJb";
const sa = "kjmHROlS";
const ea = "_0GZt--4J";
const ta = "Shwdcf1Q";
const na = "VLVaXrye";
const ca = "JQYm8lDu";
const ra = "qkqd1sP3";
const ia = "tTzhpSOu";
const la = "QT6-NgzT";
const ha = "biGy82Rx";
const oa = "s79N-yu3";
const da = "d4whLTgb";
const ma = "lgrMViUt";
const ga = "Nh8PLa47";

const s = {
  page: j,
  pageTitle: q,
  titleRow: M,
  searchWrapper: O,
  searchIcon: W,
  searchInput: X,
  sections: Y,
  section: _,
  sectionHeader: G,
  sectionTitle: K,
  usersList: Z,
  userItem: aa,
  userInfo: sa,
  userUsername: ea,
  clansBadges: ta,
  clanBadge: na,
  clanEmoji: ca,
  clanCount: ra,
  hashtagsList: ia,
  hashtagItem: la,
  hashtagRank: ha,
  hashtagInfo: oa,
  hashtagTag: da,
  hashtagCount: ma,
  empty: ga,
};

const S = (c) =>
  c >= 1000000 /* 1e6 */
    ? `${(c / 1000000) /* 1e6 */
        .toFixed(1)
        .replace(/\.0$/, "")}M`
    : c >= 1000 /* 1e3 */
    ? `${(c / 1000) /* 1e3 */
        .toFixed(1)
        .replace(/\.0$/, "")}K`
    : c.toString();

export const Search = (c) => {
  const [i, r] = d("");
  const [t, n] = d([]);
  const [l, m] = d([]);
  const [C, N] = d([]);
  const [w, f] = d([]);
  const [U, P] = d(true);
  const [$, b] = d(true);
  const [Q, y] = d(false);
  const v = A_1(null);
  y(() => {
    (async () => {
      try {
        const [h, o] = await Promise.all([
          I.getPopularAvatars(),
          I.getTrendingHashtags(),
        ]);
        n(h.slice(0, 10));
        m(o.slice(0, 10));
      } catch (h) {
        console.error("Failed to fetch search data:", h);
      } finally {
        P(false);
        b(false);
      }
    })();
  }, []);

  const J = q_1(async (e) => {
    const h = e.trim().replace(/^@/, "").replace(/^#/, "");
    if (!h) {
      N([]);
      f([]);
      y(false);
      return;
    }
    y(true);
    try {
      const o = await I.globalSearch(h, 10, 5);
      N(o.users);
      f(o.hashtags);
    } catch (o) {
      console.error("Failed to search:", o);
      N([]);
      f([]);
    } finally {
      y(false);
    }
  }, []);

  const k = (e) => {
    const o = e.target.value;
    r(o);

    if (v.current) {
      clearTimeout(v.current);
    }

    v.current = window.setTimeout(() => {
      J(o);
    }, 1000 /* 1e3 */);
  };

  const z = i.trim().length > 0;
  return af_1("div", {
    className: s.page,
    children: [
      af_1("div", {
        className: s.titleRow,
        children: af_1("h1", { className: s.pageTitle, children: "Поиск" }),
      }),
      af_1("div", {
        className: s.searchWrapper,
        children: [
          af_1("div", {
            className: s.searchIcon,
            children: af_1(ah, { size: 20 }),
          }),
          af_1("input", {
            type: "text",
            className: s.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: i,
            onInput: k,
          }),
        ],
      }),
      af_1("div", {
        className: s.sections,
        children: z
          ? af_1(k, {
              children: [
                af_1("section", {
                  className: s.section,
                  children: [
                    af_1("div", {
                      className: s.sectionHeader,
                      children: af_1("h2", {
                        className: s.sectionTitle,
                        children: "Люди",
                      }),
                    }),
                    af_1("div", {
                      className: s.usersList,
                      children: Q
                        ? null
                        : C.length === 0
                        ? af_1("div", {
                            className: s.empty,
                            children: "Ничего не найдено",
                          })
                        : C.map((e) =>
                            af_1(
                              "a",
                              {
                                href: `/@${e.username ?? e.userId}`,
                                className: s.userItem,
                                children: [
                                  af_1(n, {
                                    src: e.avatar,
                                    alt: e.displayName,
                                    size: "md",
                                  }),
                                  af_1("div", {
                                    className: s.userInfo,
                                    children: [
                                      af_1(U, {
                                        name: e.displayName,
                                        verified: e.isVerified ?? e.verified,
                                        hasNuksta: e.hasNuksta,
                                        pin: e.pin,
                                      }),
                                      e.username &&
                                        af_1("span", {
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
                  af_1("section", {
                    className: s.section,
                    children: [
                      af_1("div", {
                        className: s.sectionHeader,
                        children: af_1("h2", {
                          className: s.sectionTitle,
                          children: "Хештеги",
                        }),
                      }),
                      af_1("div", {
                        className: s.hashtagsList,
                        children: w.map((e) =>
                          af_1(
                            "a",
                            {
                              href: `/hashtag/${encodeURIComponent(e.name)}`,
                              className: s.hashtagItem,
                              children: af_1("div", {
                                className: s.hashtagInfo,
                                children: [
                                  af_1("span", {
                                    className: s.hashtagTag,
                                    children: ["#", e.name],
                                  }),
                                  af_1("span", {
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
          : af_1(k, {
              children: [
                af_1("section", {
                  className: s.section,
                  children: [
                    af_1("div", {
                      className: s.sectionHeader,
                      children: af_1("h2", {
                        className: s.sectionTitle,
                        children: "Топ кланов",
                      }),
                    }),
                    af_1("div", {
                      className: s.clansBadges,
                      children: U
                        ? af_1(m, { size: "sm" })
                        : t.length === 0
                        ? af_1("div", {
                            className: s.empty,
                            children: "Нет данных",
                          })
                        : t.map((e) =>
                            af_1(
                              "div",
                              {
                                className: s.clanBadge,
                                children: [
                                  af_1("span", {
                                    className: s.clanEmoji,
                                    children: e.avatar,
                                  }),
                                  af_1("span", {
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
                af_1("section", {
                  className: s.section,
                  children: [
                    af_1("div", {
                      className: s.sectionHeader,
                      children: af_1("h2", {
                        className: s.sectionTitle,
                        children: "Популярные хештеги",
                      }),
                    }),
                    af_1("div", {
                      className: s.hashtagsList,
                      children: $
                        ? af_1(m, { size: "sm" })
                        : l.length === 0
                        ? af_1("div", {
                            className: s.empty,
                            children: "Нет данных",
                          })
                        : l.map((e, h) =>
                            af_1(
                              "a",
                              {
                                href: `/hashtag/${encodeURIComponent(e.name)}`,
                                className: s.hashtagItem,
                                children: [
                                  af_1("span", {
                                    className: s.hashtagRank,
                                    children: h + 1,
                                  }),
                                  af_1("div", {
                                    className: s.hashtagInfo,
                                    children: [
                                      af_1("span", {
                                        className: s.hashtagTag,
                                        children: ["#", e.name],
                                      }),
                                      af_1("span", {
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
