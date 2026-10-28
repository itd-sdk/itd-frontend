import {
  X_1_1 as Q_1,
  R as R_1,
  h as W_1,
  X as X_1,
  d,
  X_1 as X_1_1,
  h,
  Y_1 as q_1,
  u,
  Y as Y_1,
  S,
  y as y_1,
  U,
  U as U_1,
} from "./index-AoERIL5v.js";

const L = new X_1(1, 300 * 1000 /* 1e3 */);
const R = new X_1(1, 300 * 1000 /* 1e3 */);
const g = "data";

const y = {
  async getTrendingHashtags(t = 10) {
    const l = L.get(g);
    if (l) {
      return l;
    }
    const c = await Q_1.get(`${R_1.hashtags.trending}?limit=${t}`);
    let n;

    if (c.data?.hashtags) {
      n = c.data.hashtags;
    } else if (Array.isArray(c.hashtags)) {
      n = c.hashtags;
    } else if (Array.isArray(c.data)) {
      n = c.data;
    } else {
      n = [];
    }

    const r = n.map((i) => ({
      ...i,
      count: i.count ?? i.postsCount ?? 0,
    }));
    L.set(g, r);
    return r;
  },
  async getPopularAvatars() {
    const t = R.get(g);
    if (t) {
      return t;
    }
    const l = await Q_1.get(R_1.users.topClans);

    const n = (l.clans || l.data || []).map((r) => ({
      ...r,
      count: r.count ?? r.memberCount ?? 0,
    }));

    R.set(g, n);
    return n;
  },
  async globalSearch(t, l = 5, c = 5) {
    const n = new URLSearchParams({
      q: t,
      userLimit: String(l),
      hashtagLimit: String(c),
    });

    const r = await Q_1.get(`${R_1.search.global}?${n.toString()}`);
    const i = r.data ?? r;
    return {
      users: (i.users ?? []).map((d) => ({
        ...d,
        halloween: W_1(d.halloween),
      })),
      hashtags: (i.hashtags ?? []).map((d) => ({
        ...d,
        count: d.count ?? d.postsCount ?? 0,
      })),
    };
  },
};

const j = "Se6v";
const K = "HOY4";
const Y = "mNne";
const X = "L2Ui";
const _ = "sxDR";
const M = "gK0B";
const V = "i3Nz";
const G = "dQ5u";
const J = "hue9";
const Z = "qOub";
const aa = "YNs1";
const ea = "mjWs";
const sa = "P4zH";
const ta = "uIPM";
const na = "flKq";
const ca = "POox";
const ra = "Hfm5";
const la = "UsWg";
const ia = "evFX";
const oa = "iSil";
const ha = "txNm";
const da = "RxsX";
const ma = "Iliy";
const ga = "pzR1";
const ua = "ltqT";

const e = {
  page: j,
  pageTitle: K,
  titleRow: Y,
  searchWrapper: X,
  searchIcon: _,
  searchInput: M,
  sections: V,
  section: G,
  sectionHeader: J,
  sectionTitle: Z,
  usersList: aa,
  userItem: ea,
  userInfo: sa,
  userUsername: ta,
  clansBadges: na,
  clanBadge: ca,
  clanEmoji: ra,
  clanCount: la,
  hashtagsList: ia,
  hashtagItem: oa,
  hashtagRank: ha,
  hashtagInfo: da,
  hashtagTag: ma,
  hashtagCount: ga,
  empty: ua,
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
  const [l, c] = d("");
  const [n, r] = d([]);
  const [i, d] = d([]);
  const [C, u] = d([]);
  const [S, p] = d([]);
  const [U, P] = d(true);
  const [$, x] = d(true);
  const [b, N] = d(false);
  const f = X_1_1(null);
  h(() => {
    (async () => {
      try {
        const [o, h] = await Promise.all([
          y.getPopularAvatars(),
          y.getTrendingHashtags(),
        ]);
        r(o.slice(0, 10));
        d(h.slice(0, 10));
      } catch (o) {
        console.error("Failed to fetch search data:", o);
      } finally {
        P(false);
        x(false);
      }
    })();
  }, []);

  const z = q_1(async (s) => {
    const o = s.trim().replace(/^@/, "").replace(/^#/, "");
    if (!o) {
      u([]);
      p([]);
      N(false);
      return;
    }
    N(true);
    try {
      const h = await y.globalSearch(o, 10, 5);
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

  const B = (s) => {
    const h = s.target.value;
    c(h);

    if (f.current) {
      clearTimeout(f.current);
    }

    f.current = window.setTimeout(() => {
      z(h);
    }, 1000 /* 1e3 */);
  };

  const D = l.trim().length > 0;
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
          u("div", { className: e.searchIcon, children: u(Y_1, { size: 20 }) }),
          u("input", {
            type: "text",
            className: e.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: l,
            onInput: B,
          }),
        ],
      }),
      u("div", {
        className: e.sections,
        children: D
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
                      children: b
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
                                  u(y_1, {
                                    src: s.avatar,
                                    alt: s.displayName,
                                    size: "md",
                                    halloween: s.halloween,
                                  }),
                                  u("div", {
                                    className: e.userInfo,
                                    children: [
                                      u(U, {
                                        userId: s.id,
                                        halloween: s.halloween,
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
                S.length > 0 &&
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
                        children: S.map((s) =>
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
                                    children: [w(s.count), " постов"],
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
                      children: U
                        ? u(U_1, { size: "sm" })
                        : n.length === 0
                        ? u("div", {
                            className: e.empty,
                            children: "Нет данных",
                          })
                        : n.map((s) =>
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
                                    children: w(s.count),
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
                      children: $
                        ? u(U_1, { size: "sm" })
                        : i.length === 0
                        ? u("div", {
                            className: e.empty,
                            children: "Нет данных",
                          })
                        : i.map((s, o) =>
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
                                        children: [w(s.count), " постов"],
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
