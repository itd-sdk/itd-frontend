import {
  al,
  am,
  an,
  am as am_1,
  d,
  A,
  y,
  q as q_1,
  n,
  U,
  k,
  al as al_1,
} from "./index-CJNMmwsR.js";

const S = new an(1, 300 * 1000 /* 1e3 */);
const C = new an(1, 300 * 1000 /* 1e3 */);
const p = "data";

const v = {
  async getTrendingHashtags(n = 10) {
    const i = S.get(p);
    if (i) {
      return i;
    }
    const c = await al.get(`${am.hashtags.trending}?limit=${n}`);
    let t;

    if (c.data?.hashtags) {
      t = c.data.hashtags;
    } else if (Array.isArray(c.hashtags)) {
      t = c.hashtags;
    } else if (Array.isArray(c.data)) {
      t = c.data;
    } else {
      t = [];
    }

    const r = t.map((o) => ({
      ...o,
      count: o.count ?? o.postsCount ?? 0,
    }));
    S.set(p, r);
    return r;
  },
  async getPopularAvatars() {
    const n = C.get(p);
    if (n) {
      return n;
    }
    const i = await al.get(am.users.topClans);

    const t = (i.clans || i.data || i.data || []).map((r) => ({
      ...r,
      count: r.count ?? r.memberCount ?? 0,
    }));

    C.set(p, t);
    return t;
  },
  async searchUsers(n, i = 20, c) {
    const t = new URLSearchParams({ q: n, limit: String(i) });

    if (c) {
      t.append("cursor", c);
    }

    const r = await al.get(`${am.users.search}?${t.toString()}`);
    return {
      data: r.data?.users || r.users || r.users || [],
      nextCursor: null,
    };
  },
  async globalSearch(n, i = 5, c = 5) {
    const t = new URLSearchParams({
      q: n,
      userLimit: String(i),
      hashtagLimit: String(c),
    });

    const r = await al.get(`${am.search.global}?${t.toString()}`);
    const o = r.data ?? r;
    return {
      users: o.users ?? [],
      hashtags: (o.hashtags ?? []).map((g) => ({
        ...g,
        count: g.count ?? g.postsCount ?? 0,
      })),
    };
  },
  async searchHashtags(n, i = 10) {
    const c = new URLSearchParams({ limit: String(i) });

    if (n) {
      c.set("q", n);
    }

    const t = await al.get(`${am.hashtags.search}?${c.toString()}`);
    let r;

    if (t.data?.hashtags) {
      r = t.data.hashtags;
    } else if (Array.isArray(t.hashtags)) {
      r = t.hashtags;
    } else if (Array.isArray(t.data)) {
      r = t.data;
    } else {
      r = [];
    }

    return r.map((o) => ({
      ...o,
      count: o.count ?? o.postsCount ?? 0,
    }));
  },
};

const D = ({ size: n = 24 }) =>
  am_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    viewBox: "0 0 24 24",
    fill: "none",
    children: [
      am_1("circle", {
        cx: "10.5",
        cy: "10.5",
        r: "6",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      am_1("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "m15 15 5 5",
      }),
    ],
  });

const E = "V8n0-A6j";
const F = "lLeSRXJI";
const W = "PhJGbQsP";
const j = "QMiCPNNZ";
const q = "YftXFSHB";
const M = "VUVtn1zM";
const O = "hBNiYwQ9";
const X = "l8pT2ZJ9";
const Y = "docWdaJH";
const _ = "vISuOJy2";
const G = "FzJvK--w";
const K = "Xe2SUuJb";
const Z = "kjmHROlS";
const ss = "_0GZt--4J";
const as = "Shwdcf1Q";
const es = "VLVaXrye";
const ts = "JQYm8lDu";
const ns = "qkqd1sP3";
const rs = "tTzhpSOu";
const cs = "QT6-NgzT";
const is = "biGy82Rx";
const os = "s79N-yu3";
const ls = "d4whLTgb";
const hs = "lgrMViUt";
const ds = "Nh8PLa47";

const a = {
  page: E,
  pageTitle: F,
  titleRow: W,
  searchWrapper: j,
  searchIcon: q,
  searchInput: M,
  sections: O,
  section: X,
  sectionHeader: Y,
  sectionTitle: _,
  usersList: G,
  userItem: K,
  userInfo: Z,
  userUsername: ss,
  clansBadges: as,
  clanBadge: es,
  clanEmoji: ts,
  clanCount: ns,
  hashtagsList: rs,
  hashtagItem: cs,
  hashtagRank: is,
  hashtagInfo: os,
  hashtagTag: ls,
  hashtagCount: hs,
  empty: ds,
};

const L = (n) =>
  n >= 1000000 /* 1e6 */
    ? `${(n / 1000000) /* 1e6 */
        .toFixed(1)
        .replace(/\.0$/, "")}M`
    : n >= 1000 /* 1e3 */
    ? `${(n / 1000) /* 1e3 */
        .toFixed(1)
        .replace(/\.0$/, "")}K`
    : n.toString();

export const Search = (n) => {
  const [i, c] = d("");
  const [t, r] = d([]);
  const [o, g] = d([]);
  const [w, N] = d([]);
  const [A, U] = d(true);
  const [H, R] = d(true);
  const [P, f] = d(false);
  const y = A(null);
  y(() => {
    (async () => {
      try {
        const [l, h] = await Promise.all([
          v.getPopularAvatars(),
          v.getTrendingHashtags(),
        ]);
        r(l.slice(0, 10));
        g(h.slice(0, 10));
      } catch (l) {
        console.error("Failed to fetch search data:", l);
      } finally {
        U(false);
        R(false);
      }
    })();
  }, []);

  const $ = q_1(async (e) => {
    const l = e.trim().replace(/^@/, "");
    if (!l) {
      N([]);
      f(false);
      return;
    }
    f(true);
    try {
      const h = await v.searchUsers(l, 20);
      N(h.data);
    } catch (h) {
      console.error("Failed to search users:", h);
      N([]);
    } finally {
      f(false);
    }
  }, []);

  const k = (e) => {
    const h = e.target.value;
    c(h);

    if (y.current) {
      clearTimeout(y.current);
    }

    y.current = window.setTimeout(() => {
      $(h);
    }, 1000 /* 1e3 */);
  };

  const Q = i.trim().length > 0;
  return am_1("div", {
    className: a.page,
    children: [
      am_1("div", {
        className: a.titleRow,
        children: am_1("h1", { className: a.pageTitle, children: "Поиск" }),
      }),
      am_1("div", {
        className: a.searchWrapper,
        children: [
          am_1("div", {
            className: a.searchIcon,
            children: am_1(D, { size: 20 }),
          }),
          am_1("input", {
            type: "text",
            className: a.searchInput,
            placeholder: "Поиск людей",
            value: i,
            onInput: k,
          }),
        ],
      }),
      am_1("div", {
        className: a.sections,
        children: Q
          ? am_1("section", {
              className: a.section,
              children: [
                am_1("div", {
                  className: a.sectionHeader,
                  children: am_1("h2", {
                    className: a.sectionTitle,
                    children: "Результаты поиска",
                  }),
                }),
                am_1("div", {
                  className: a.usersList,
                  children: P
                    ? null
                    : w.length === 0
                    ? am_1("div", {
                        className: a.empty,
                        children: "Ничего не найдено",
                      })
                    : w.map((e) =>
                        am_1(
                          "a",
                          {
                            href: `/@${e.username ?? e.userId}`,
                            className: a.userItem,
                            children: [
                              am_1(n, {
                                src: e.avatar,
                                alt: e.displayName,
                                size: "md",
                              }),
                              am_1("div", {
                                className: a.userInfo,
                                children: [
                                  am_1(U, {
                                    name: e.displayName,
                                    verified: e.isVerified ?? e.verified,
                                    pin: e.pin,
                                  }),
                                  e.username &&
                                    am_1("span", {
                                      className: a.userUsername,
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
            })
          : am_1(k, {
              children: [
                am_1("section", {
                  className: a.section,
                  children: [
                    am_1("div", {
                      className: a.sectionHeader,
                      children: am_1("h2", {
                        className: a.sectionTitle,
                        children: "Топ кланов",
                      }),
                    }),
                    am_1("div", {
                      className: a.clansBadges,
                      children: A
                        ? am_1(al_1, { size: "sm" })
                        : t.length === 0
                        ? am_1("div", {
                            className: a.empty,
                            children: "Нет данных",
                          })
                        : t.map((e) =>
                            am_1(
                              "div",
                              {
                                className: a.clanBadge,
                                children: [
                                  am_1("span", {
                                    className: a.clanEmoji,
                                    children: e.avatar,
                                  }),
                                  am_1("span", {
                                    className: a.clanCount,
                                    children: L(e.count),
                                  }),
                                ],
                              },
                              e.avatar
                            )
                          ),
                    }),
                  ],
                }),
                am_1("section", {
                  className: a.section,
                  children: [
                    am_1("div", {
                      className: a.sectionHeader,
                      children: am_1("h2", {
                        className: a.sectionTitle,
                        children: "Популярные хештеги",
                      }),
                    }),
                    am_1("div", {
                      className: a.hashtagsList,
                      children: H
                        ? am_1(al_1, { size: "sm" })
                        : o.length === 0
                        ? am_1("div", {
                            className: a.empty,
                            children: "Нет данных",
                          })
                        : o.map((e, l) =>
                            am_1(
                              "a",
                              {
                                href: `/hashtag/${encodeURIComponent(e.name)}`,
                                className: a.hashtagItem,
                                children: [
                                  am_1("span", {
                                    className: a.hashtagRank,
                                    children: l + 1,
                                  }),
                                  am_1("div", {
                                    className: a.hashtagInfo,
                                    children: [
                                      am_1("span", {
                                        className: a.hashtagTag,
                                        children: ["#", e.name],
                                      }),
                                      am_1("span", {
                                        className: a.hashtagCount,
                                        children: [L(e.count), " постов"],
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
