import {
  Y_1 as Q_1,
  R,
  X_1_1 as W_1,
  X as X_1,
  d,
  X_1 as X_1_1,
  h,
  q as q_1,
  u,
  Y as Y_1,
  S,
  R as R_1,
  U,
  O as O_1,
} from "./index-GOT6tyDH.js";

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
      t._sentryDebugIds[n] = "3e3c766b-caf0-40b7-a937-4c6777f17655";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-3e3c766b-caf0-40b7-a937-4c6777f17655";
    }
  } catch {}
})();
const L = new X_1(1, 300 * 1000 /* 1e3 */);
const H = new X_1(1, 300 * 1000 /* 1e3 */);
const g = "data";

const I = {
  async getTrendingHashtags(t = 10) {
    const n = L.get(g);
    if (n) {
      return n;
    }
    const r = await Q_1.get(`${R.hashtags.trending}?limit=${t}`);
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

    const l = c.map((i) => ({
      ...i,
      count: i.count ?? i.postsCount ?? 0,
    }));
    L.set(g, l);
    return l;
  },
  async getPopularAvatars() {
    const t = H.get(g);
    if (t) {
      return t;
    }
    const n = await Q_1.get(R.users.topClans);

    const c = (n.clans || n.data || []).map((l) => ({
      ...l,
      count: l.count ?? l.memberCount ?? 0,
    }));

    H.set(g, c);
    return c;
  },
  async globalSearch(t, n = 5, r = 5) {
    const c = new URLSearchParams({
      q: t,
      userLimit: String(n),
      hashtagLimit: String(r),
    });

    const l = await Q_1.get(`${R.search.global}?${c.toString()}`);
    const i = l.data ?? l;
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

const z = "dPap";
const q = "RVaR";
const K = "XUCu";
const O = "sjFh";
const Y = "WAT1";
const M = "EfjH";
const X = "Umbv";
const Z = "texT";
const G = "aBQ8";
const J = "lrLx";
const aa = "D67Z";
const ea = "UAAj";
const sa = "JCTE";
const ta = "o5PW";
const na = "vVxK";
const ca = "NlxB";
const ra = "DVLT";
const la = "w07s";
const ia = "oVZV";
const oa = "xrPh";
const ha = "Gpg2";
const da = "O2WS";
const ma = "NDtM";
const ga = "Sld6";
const ua = "qtbo";

const e = {
  page: z,
  pageTitle: q,
  titleRow: K,
  searchWrapper: O,
  searchIcon: Y,
  searchInput: M,
  sections: X,
  section: Z,
  sectionHeader: G,
  sectionTitle: J,
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
  const [n, r] = d("");
  const [c, l] = d([]);
  const [i, d] = d([]);
  const [C, u] = d([]);
  const [T, p] = d([]);
  const [R, E] = d(true);
  const [U, D] = d(true);
  const [P, f] = d(false);
  const N = X_1_1(null);
  h(() => {
    (async () => {
      try {
        const [o, h] = await Promise.all([
          I.getPopularAvatars(),
          I.getTrendingHashtags(),
        ]);
        l(o.slice(0, 10));
        d(h.slice(0, 10));
      } catch (o) {
        console.error("Failed to fetch search data:", o);
      } finally {
        E(false);
        D(false);
      }
    })();
  }, []);

  const x = q_1(async (s) => {
    const o = s.trim().replace(/^@/, "").replace(/^#/, "");
    if (!o) {
      u([]);
      p([]);
      f(false);
      return;
    }
    f(true);
    try {
      const h = await I.globalSearch(o, 10, 5);
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

  const $ = (s) => {
    const h = s.target.value;
    r(h);

    if (N.current) {
      clearTimeout(N.current);
    }

    N.current = window.setTimeout(() => {
      x(h);
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
          u("div", { className: e.searchIcon, children: u(Y_1, { size: 20 }) }),
          u("input", {
            type: "text",
            className: e.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: n,
            onInput: $,
          }),
        ],
      }),
      u("div", {
        className: e.sections,
        children: B
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
                      children: P
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
                                  u(R_1, {
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
                T.length > 0 &&
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
                        children: T.map((s) =>
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
                      children: R
                        ? u(O_1, { size: "sm" })
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
                      children: U
                        ? u(O_1, { size: "sm" })
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
