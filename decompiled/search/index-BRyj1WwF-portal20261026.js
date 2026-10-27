import {
  _,
  a0,
  a1,
  d,
  a1 as a1_1,
  h,
  q as q_1,
  u,
  a2,
  Z_1 as S_1,
  H as H_1,
  U,
  Z as Z_1,
} from "./index-BQxlThnW-portal20261026.js";

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
      t._sentryDebugIds[n] = "6a8c21b8-ba83-42e0-abeb-cc96523c198c";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-6a8c21b8-ba83-42e0-abeb-cc96523c198c";
    }
  } catch {}
})();
const H = new a1(1, 300 * 1000 /* 1e3 */);
const L = new a1(1, 300 * 1000 /* 1e3 */);
const g = "data";

const I = {
  async getTrendingHashtags(t = 10) {
    const n = H.get(g);
    if (n) {
      return n;
    }
    const r = await _.get(`${a0.hashtags.trending}?limit=${t}`);
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
    H.set(g, i);
    return i;
  },
  async getPopularAvatars() {
    const t = L.get(g);
    if (t) {
      return t;
    }
    const n = await _.get(a0.users.topClans);

    const c = (n.clans || n.data || []).map((i) => ({
      ...i,
      count: i.count ?? i.memberCount ?? 0,
    }));

    L.set(g, c);
    return c;
  },
  async globalSearch(t, n = 5, r = 5) {
    const c = new URLSearchParams({
      q: t,
      userLimit: String(n),
      hashtagLimit: String(r),
    });

    const i = await _.get(`${a0.search.global}?${c.toString()}`);
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

const Q = "xc8B";
const Y = "cKF0";
const j = "NtWz";
const q = "waRr";
const J = "zW5i";
const O = "svEs";
const V = "cghi";
const G = "BHPt";
const M = "GD5u";
const Z = "wT3k";
const X = "DoF4";
const aa = "DFuE";
const ea = "Ksay";
const sa = "h70y";
const ta = "nq9Y";
const na = "H0Jh";
const ca = "vubF";
const ra = "H5Ea";
const ia = "k1mA";
const la = "STOu";
const oa = "vH4Y";
const ha = "yslP";
const da = "TJaV";
const ma = "wuAR";
const ga = "v6mT";

const e = {
  page: Q,
  pageTitle: Y,
  titleRow: j,
  searchWrapper: q,
  searchIcon: J,
  searchInput: O,
  sections: V,
  section: G,
  sectionHeader: M,
  sectionTitle: Z,
  usersList: X,
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
  const [b, u] = d([]);
  const [w, p] = d([]);
  const [R, E] = d(true);
  const [D, U] = d(true);
  const [_, N] = d(false);
  const f = a1_1(null);
  h(() => {
    (async () => {
      try {
        const [o, h] = await Promise.all([
          I.getPopularAvatars(),
          I.getTrendingHashtags(),
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

  const $ = q_1(async (s) => {
    const o = s.trim().replace(/^@/, "").replace(/^#/, "");
    if (!o) {
      u([]);
      p([]);
      N(false);
      return;
    }
    N(true);
    try {
      const h = await I.globalSearch(o, 10, 5);
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

  const k = (s) => {
    const h = s.target.value;
    r(h);

    if (f.current) {
      clearTimeout(f.current);
    }

    f.current = window.setTimeout(() => {
      $(h);
    }, 1000 /* 1e3 */);
  };

  const B = n.trim().length > 0;
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
          u("div", { className: e.searchIcon, children: u(a2, { size: 20 }) }),
          u("input", {
            type: "text",
            className: e.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: n,
            onInput: k,
          }),
        ],
      }),
      u("div", {
        className: e.sections,
        children: B
          ? u(S_1, {
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
                      children: _
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
                                  u(H_1, {
                                    src: s.avatar,
                                    alt: s.displayName,
                                    size: "md",
                                  }),
                                  u("div", {
                                    className: e.userInfo,
                                    children: [
                                      u(U, {
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
          : u(S_1, {
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
                        ? u(Z_1, { size: "sm" })
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
                        ? u(Z_1, { size: "sm" })
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
