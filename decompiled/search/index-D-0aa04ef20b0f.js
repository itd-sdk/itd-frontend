import {
  s as d_1,
  A as A_1,
  h,
  q as q_1,
  u,
  ae as ae_1,
  S,
  af,
  ag,
  ah,
} from "./index-4cbec7521f6a.js";
import { s } from "./searchApi-a5d05e5dc3eb.js";
const Q = "KZ8t";
const $ = "Hwe9";
const b = "MTZx";
const A = "IaED";
const M = "rr9W";
const V = "HBPy";
const W = "zCNT";
const j = "mMbE";
const q = "JHlm";
const G = "B96q";
const K = "uum2";
const O = "o9eR";
const Z = "Vke4";
const J = "IOVH";
const _ = "PvdM";
const X = "zRrQ";
const Y = "Re8c";
const ee = "Uofc";
const ae = "PwsF";
const se = "Vm34";
const te = "cdO2";
const ce = "GfuB";
const ne = "GsLH";
const re = "s5n2";
const le = "tHvk";

const a = {
  page: Q,
  pageTitle: $,
  titleRow: b,
  searchWrapper: A,
  searchIcon: M,
  searchInput: V,
  sections: W,
  section: j,
  sectionHeader: q,
  sectionTitle: G,
  usersList: K,
  userItem: O,
  userInfo: Z,
  userUsername: J,
  clansBadges: _,
  clanBadge: X,
  clanEmoji: Y,
  clanCount: ee,
  hashtagsList: ae,
  hashtagItem: se,
  hashtagRank: te,
  hashtagInfo: ce,
  hashtagTag: ne,
  hashtagCount: re,
  empty: le,
};

const m = (r) =>
  r >= 1000000 /* 1e6 */
    ? `${(r / 1000000) /* 1e6 */
        .toFixed(1)
        .replace(/\.0$/, "")}M`
    : r >= 1000 /* 1e3 */
    ? `${(r / 1000) /* 1e3 */
        .toFixed(1)
        .replace(/\.0$/, "")}K`
    : r.toString();

export const Search = (r) => {
  const [g, y] = d_1("");
  const [p, H] = d_1([]);
  const [u, T] = d_1([]);
  const [N, l] = d_1([]);
  const [f, i] = d_1([]);
  const [C, w] = d_1(true);
  const [S, L] = d_1(true);
  const [R, h] = d_1(false);
  const o = A_1(null);
  h(() => {
    (async () => {
      try {
        const [t, c] = await Promise.all([
          s.getPopularAvatars(),
          s.getTrendingHashtags(),
        ]);
        H(t.slice(0, 10));
        T(c.slice(0, 10));
      } catch (t) {
        console.error("Failed to fetch search data:", t);
      } finally {
        w(false);
        L(false);
      }
    })();
  }, []);

  const B = q_1(async (s) => {
    const t = s.trim().replace(/^@/, "").replace(/^#/, "");
    if (!t) {
      l([]);
      i([]);
      h(false);
      return;
    }
    h(true);
    try {
      const c = await s.globalSearch(t, 10, 5);
      l(c.users);
      i(c.hashtags);
    } catch (c) {
      console.error("Failed to search:", c);
      l([]);
      i([]);
    } finally {
      h(false);
    }
  }, []);

  const U = (s) => {
    const c = s.target.value;
    y(c);

    if (o.current) {
      clearTimeout(o.current);
    }

    o.current = window.setTimeout(() => {
      B(c);
    }, 1000 /* 1e3 */);
  };

  const k = g.trim().length > 0;
  return u("div", {
    className: a.page,
    children: [
      u("div", {
        className: a.titleRow,
        children: u("h1", { className: a.pageTitle, children: "Поиск" }),
      }),
      u("div", {
        className: a.searchWrapper,
        children: [
          u("div", {
            className: a.searchIcon,
            children: u(ae_1, { size: 20 }),
          }),
          u("input", {
            type: "text",
            className: a.searchInput,
            placeholder: "Поиск людей и хештегов",
            value: g,
            onInput: U,
          }),
        ],
      }),
      u("div", {
        className: a.sections,
        children: k
          ? u(S, {
              children: [
                u("section", {
                  className: a.section,
                  children: [
                    u("div", {
                      className: a.sectionHeader,
                      children: u("h2", {
                        className: a.sectionTitle,
                        children: "Люди",
                      }),
                    }),
                    u("div", {
                      className: a.usersList,
                      children: R
                        ? null
                        : N.length === 0
                        ? u("div", {
                            className: a.empty,
                            children: "Ничего не найдено",
                          })
                        : N.map((s) =>
                            u(
                              "a",
                              {
                                href: `/@${s.username ?? s.userId}`,
                                className: a.userItem,
                                children: [
                                  u(af, {
                                    src: s.avatar,
                                    alt: s.displayName,
                                    size: "md",
                                    halloween: s.halloween,
                                  }),
                                  u("div", {
                                    className: a.userInfo,
                                    children: [
                                      u(ag, {
                                        userId: s.id,
                                        halloween: s.halloween,
                                        name: s.displayName,
                                        verified: s.isVerified ?? s.verified,
                                        hasNuksta: s.hasNuksta,
                                        pin: s.pin,
                                      }),
                                      s.username &&
                                        u("span", {
                                          className: a.userUsername,
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
                f.length > 0 &&
                  u("section", {
                    className: a.section,
                    children: [
                      u("div", {
                        className: a.sectionHeader,
                        children: u("h2", {
                          className: a.sectionTitle,
                          children: "Хештеги",
                        }),
                      }),
                      u("div", {
                        className: a.hashtagsList,
                        children: f.map((s) =>
                          u(
                            "a",
                            {
                              href: `/hashtag/${encodeURIComponent(s.name)}`,
                              className: a.hashtagItem,
                              children: u("div", {
                                className: a.hashtagInfo,
                                children: [
                                  u("span", {
                                    className: a.hashtagTag,
                                    children: ["#", s.name],
                                  }),
                                  u("span", {
                                    className: a.hashtagCount,
                                    children: [m(s.count), " постов"],
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
                  className: a.section,
                  children: [
                    u("div", {
                      className: a.sectionHeader,
                      children: u("h2", {
                        className: a.sectionTitle,
                        children: "Топ кланов",
                      }),
                    }),
                    u("div", {
                      className: a.clansBadges,
                      children: C
                        ? u(ah, { size: "sm" })
                        : p.length === 0
                        ? u("div", {
                            className: a.empty,
                            children: "Нет данных",
                          })
                        : p.map((s) =>
                            u(
                              "div",
                              {
                                className: a.clanBadge,
                                children: [
                                  u("span", {
                                    className: a.clanEmoji,
                                    children: s.avatar,
                                  }),
                                  u("span", {
                                    className: a.clanCount,
                                    children: m(s.count),
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
                  className: a.section,
                  children: [
                    u("div", {
                      className: a.sectionHeader,
                      children: u("h2", {
                        className: a.sectionTitle,
                        children: "Популярные хештеги",
                      }),
                    }),
                    u("div", {
                      className: a.hashtagsList,
                      children: S
                        ? u(ah, { size: "sm" })
                        : u.length === 0
                        ? u("div", {
                            className: a.empty,
                            children: "Нет данных",
                          })
                        : u.map((s, t) =>
                            u(
                              "a",
                              {
                                href: `/hashtag/${encodeURIComponent(s.name)}`,
                                className: a.hashtagItem,
                                children: [
                                  u("span", {
                                    className: a.hashtagRank,
                                    children: t + 1,
                                  }),
                                  u("div", {
                                    className: a.hashtagInfo,
                                    children: [
                                      u("span", {
                                        className: a.hashtagTag,
                                        children: ["#", s.name],
                                      }),
                                      u("span", {
                                        className: a.hashtagCount,
                                        children: [m(s.count), " постов"],
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
