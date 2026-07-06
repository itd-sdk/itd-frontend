import {
  a,
  g,
  B,
  M,
  D,
  h,
  i as i_1,
  j,
  d,
  d as d_1,
  l,
  z,
  q as m_1,
  _,
  n,
  o,
  q,
  r,
  s,
  t,
  v,
  w,
  U,
  p,
  y,
  c,
  x,
  A,
  C,
  E,
  F,
  r as r_1,
  H,
  T,
  B as B_1,
  K,
  L,
  V,
  a as a_1,
  P,
} from "./index-CFv_0Hh6.js";

import { I } from "./IconCheck-BbDhNxWH.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DXx_nwTn.js",
      "assets/index-CFv_0Hh6.js",
      "assets/index-D8JMceH9.css",
      "assets/index-D9cNzDlo.js",
      "assets/index-tRFVbUdK.css",
      "assets/IconInfo-_boABZd-.js",
      "assets/IconNotificationMention-BbO7CDVK.js",
      "assets/IconChevronRight-DH-EtvDX.js",
      "assets/IconChevronLeft-DRcQfgI5.js",
      "assets/index-CA0pzfdy.css",
      "assets/index-CGawjVOk.js",
      "assets/index-CHDka_ff.css",
      "assets/index-BjsTyRm-.js",
      "assets/IconCheckCircle-BeRqMAqi.js",
      "assets/index-DgXZ0KVN.css",
      "assets/index-xYJ4tMmW.js",
      "assets/index-StvHTWwP.css",
      "assets/index-Dsb1ydaS.js",
      "assets/IconCheck-BbDhNxWH.js",
      "assets/index-D-EQgnEB.css",
    ])
) => i.map((i) => d[i]);
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
    const o = new t.Error().stack;

    if (o) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[o] = "40b903be-737e-41c6-8d30-61b423c82086";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-40b903be-737e-41c6-8d30-61b423c82086";
    }
  } catch {}
})();

const Zt = ({ size = 24 }) =>
  a("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      a("path", {
        d: "M5.5 5.5L18.5 18.5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
    ],
  });

const Yt = () =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "none",
    children: a("path", {
      stroke: "currentColor",
      "stroke-width": "1.333",
      d: "M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333ZM10.666 1.333V4M5.333 1.333V4M2 6.667h12",
    }),
  });

const Xt = "pdE4";
const Gt = "ItFV";
const Jt = "fmEp";
const Qt = "y7cN";
const te = "ZWRZ";
const ee = "L1eX";
const se = "HGXh";
const ne = "NaKl";
const oe = "kkRE";
const ae = "ELYs";
const re = "Kxvm";
const ie = "KHei";
const le = "M52A";
const ce = "xyDB";
const de = "BBLN";
const ue = "Ej1M";
const he = "dd8a";
const fe = "jN62";
const me = "Idiv";
const ge = "yZBw";
const we = "Q7yh";
const pe = "Ppzy";
const be = "pIfK";
const Pe = "tsvS";
const ye = "vjsX";
const ve = "sE23";
const Ce = "Xkc7";
const ke = "gUfI";
const Ne = "mKTb";
const Ie = "q3En";
const Le = "Fvk7";

const i = {
  page: Xt,
  tabsWrapper: Gt,
  belowTabs: Jt,
  createPostWrapper: Qt,
  writePostButton: te,
  profileCard: ee,
  banner: se,
  bannerActions: ne,
  bannerActionButton: oe,
  deleteBannerButton: ae,
  profileContent: re,
  avatarRow: ie,
  avatar: le,
  actions: ce,
  ownActions: de,
  mobileActions: ue,
  infoContainer: he,
  userInfo: fe,
  name: me,
  username: ge,
  bio: we,
  metaItem: pe,
  followsYou: be,
  stats: Pe,
  stat: ye,
  clickable: ve,
  statValue: Ce,
  statLabel: ke,
  error: Ne,
  bannerPlaceholder: Ie,
  emptyPosts: Le,
};

const Me = "eZSV";
const Be = "upKj";
const Ae = "ZOqZ";
const _e = "L5gD";
const Se = "tfis";
const Ee = "yl88";

const et = {
  content: Me,
  title: Be,
  description: Ae,
  username: _e,
  warning: Se,
  actions: Ee,
};

function Fe({ username, displayName, avatar, onConfirm, onClose }) {
  const c = () => {
    onConfirm();
    onClose();
  };
  return a(M, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: et.content,
      children: [
        a(g, { src: avatar, alt: displayName, size: "lg" }),
        a("h2", {
          className: et.title,
          children: "Заблокировать пользователя?",
        }),
        a("p", {
          className: et.description,
          children: [
            "Вы уверены, что хотите заблокировать",
            " ",
            a("strong", { children: displayName }),
            username &&
              a("span", {
                className: et.username,
                children: [" (@", username, ")"],
              }),
            "?",
          ],
        }),
        a("p", {
          className: et.warning,
          children:
            "Заблокированный пользователь не сможет видеть ваш профиль и контент.",
        }),
        a("div", {
          className: et.actions,
          children: [
            a(B, {
              variant: "secondary",
              onClick: () => onClose(),
              fullWidth: true,
              children: "Отмена",
            }),
            a(B, {
              variant: "danger",
              onClick: () => c(),
              fullWidth: true,
              children: "Заблокировать",
            }),
          ],
        }),
      ],
    }),
  });
}
function wt(t, o, d, u) {
  const s = Math.abs(t);
  const c = s % 10;
  const y = s % 100;
  return y >= 11 && y <= 19 ? u : c === 1 ? o : c >= 2 && c <= 4 ? d : u;
}
function De(t) {
  if (!t) {
    return null;
  }
  switch (t.unit) {
    case "just_now": {
      return "только что";
    }
    case "minutes": {
      const o = t.value ?? 1;
      const d = wt(o, "минуту", "минуты", "минут");
      return `${o} ${d} назад`;
    }
    case "hours": {
      const o = t.value ?? 1;
      const d = wt(o, "час", "часа", "часов");
      return `${o} ${d} назад`;
    }
    case "recently": {
      return "недавно";
    }
    case "this_week": {
      return "на этой неделе";
    }
    case "this_month": {
      return "в этом месяце";
    }
    case "long_ago": {
      return "давно";
    }
    default: {
      return null;
    }
  }
}
function pt(t) {
  return t >= 1000000 /* 1e6 */
    ? `${(t / 1000000) /* 1e6 */
        .toFixed(1)}M`
    : t >= 1000 /* 1e3 */
    ? `${(t / 1000) /* 1e3 */
        .toFixed(1)}K`
    : t.toString();
}
function bt({
  followers,
  following,
  isPhone = false,
  onFollowersClick,
  onFollowingClick,
}) {
  return a("div", {
    className: i.stats,
    children: [
      a("div", {
        className: `${i.stat} ${onFollowersClick ? i.clickable : ""}`,
        onClick: onFollowersClick,
        children: [
          a("span", { className: i.statValue, children: pt(followers) }),
          a("span", { className: i.statLabel, children: "подписчиков" }),
        ],
      }),
      isPhone && a("hr", {}),
      a("div", {
        className: `${i.stat} ${onFollowingClick ? i.clickable : ""}`,
        onClick: onFollowingClick,
        children: [
          a("span", { className: i.statValue, children: pt(following) }),
          a("span", { className: i.statLabel, children: "подписок" }),
        ],
      }),
    ],
  });
}
const Te = z(() =>
  _(
    () => import("./index-DXx_nwTn.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  ).then((t) => ({
    default: t.SubscriptionModal,
  }))
);
function Ue({
  isOwnProfile,
  isFollowing,
  isRequested = false,
  isFollowLoading,
  onEditProfile,
  onToggleFollow,
  fullWidth = false,
}) {
  const [M, v] = isRequested(false);
  const S = d_1()?.subscription?.isActive;
  return isOwnProfile
    ? a(m_1, {
        children: [
          a("div", {
            className: i.ownActions,
            children: [
              a(B, {
                onClick: onEditProfile,
                fullWidth: fullWidth,
                children: "Редактировать",
              }),
              !S &&
                a(B, {
                  variant: "secondary",
                  onClick: () => v(true),
                  fullWidth: fullWidth,
                  children: "ИТД НУКСТА",
                }),
            ],
          }),
          M &&
            a(l, {
              fallback: null,
              children: a(Te, { isOpen: M, onClose: () => v(false) }),
            }),
        ],
      })
    : a(m_1, {
        children: a(B, {
          variant: isFollowing || isRequested ? "secondary" : "primary",
          onClick: onToggleFollow,
          disabled: isFollowLoading,
          fullWidth: fullWidth,
          children: isFollowing
            ? a(m_1, { children: [a(I, { size: 18 }), "Вы подписаны"] })
            : isRequested
            ? "Заявка отправлена"
            : a(m_1, { children: [a(n, { size: 18 }), "Подписаться"] }),
        }),
      });
}
function Pt({
  isOwnProfile,
  isVerified = false,
  isBlocked = false,
  onVerificationRequest,
  onBlockUser,
  onReportUser,
  ...y
}) {
  const v = (() => {
    const N = [];

    if (!isOwnProfile && onBlockUser) {
      N.push({
        id: "block",
        label: isBlocked ? "Разблокировать" : "Заблокировать",
        icon: a(Zt, { size: 18 }),
        danger: !isBlocked,
        onClick: onBlockUser,
      });
    }

    if (!isOwnProfile && onReportUser) {
      N.push({
        id: "report",
        label: "Пожаловаться",
        icon: a(j, { size: 18 }),
        danger: true,
        onClick: onReportUser,
      });
    }

    return N;
  })();
  return a("div", {
    className: i.actions,
    children: [
      v.length > 0 &&
        a(D, {
          trigger: a(B, {
            variant: "secondary",
            iconOnly: true,
            children: a(h, { size: 18 }),
          }),
          items: v,
          position: "bottom-right",
        }),
      isOwnProfile &&
        !isVerified &&
        onVerificationRequest &&
        a(B, {
          variant: "secondary",
          iconOnly: true,
          onClick: onVerificationRequest,
          children: a(i_1, { size: 18 }),
        }),
      a(Ue, { isOwnProfile: isOwnProfile, isVerified: isVerified, ...y }),
    ],
  });
}

const xe = z(() =>
  _(() => import("./index-CGawjVOk.js"), __vite__mapDeps([10, 1, 2, 11])).then(
    (t) => ({
      default: t.DrawingCanvas,
    })
  )
);

const Re = z(() =>
  _(
    () => import("./index-BjsTyRm-.js"),
    __vite__mapDeps([12, 1, 2, 3, 4, 13, 14])
  ).then((t) => ({
    default: t.VerificationModal,
  }))
);

const Ve = z(() =>
  _(
    () => import("./index-xYJ4tMmW.js"),
    __vite__mapDeps([15, 1, 2, 13, 16])
  ).then((t) => ({
    default: t.ReportModal,
  }))
);

function Oe(t) {
  return new Date(t).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function $e({
  profile,
  isOwnProfile,
  isFollowing,
  isRequested = false,
  isFollowLoading,
  isBlocked = false,
  isFollowedBy = false,
  isPhone,
  onEditProfile,
  onToggleFollow,
  onBlockUser,
  onFollowersClick,
  onFollowingClick,
  onBannerUpdate,
}) {
  const [p, F] = isFollowing(false);
  const { openModal, closeModal } = isOwnProfile();

  const I = q(() => {
    F(true);
  }, []);

  const C = q(() => {
    openModal(a(Re, { onClose: closeModal }));
  }, [openModal, closeModal]);

  const L = q(() => {
    if (isBlocked) {
      onBlockUser?.();
      return;
    }
    openModal(
      a(Fe, {
        username: profile.username || "",
        displayName: profile.displayName,
        avatar: profile.avatar,
        onConfirm: () => onBlockUser?.(),
        onClose: closeModal,
      })
    );
  }, [isBlocked, onBlockUser, openModal, closeModal, profile]);

  const T = q(() => {
    openModal(
      a(Ve, { targetType: "user", targetId: profile.id, onClose: closeModal })
    );
  }, [openModal, closeModal, profile.id]);

  const H = q(() => {
    F(false);
  }, []);

  const U = q(async () => {
    try {
      await r.updateProfile({ bannerId: null });
      onBannerUpdate?.(null);
    } catch (V) {
      console.error("Failed to delete banner:", V);
    }
  }, [onBannerUpdate]);

  const x = q(
    async (V) => {
      try {
        const [O, j] = V.split(",");
        const Q = O.match(/:(.*?);/)?.[1] || "image/png";
        const z = atob(j);
        const Y = new Uint8Array(z.length);
        for (let q = 0; q < z.length; q++) {
          Y[q] = z.charCodeAt(q);
        }
        const P = new Blob([Y], { type: Q });
        const X = new File([P], "banner.png", { type: "image/png" });
        const $ = await isFollowLoading.uploadMedia(X);
        await r.updateProfile({ bannerId: $.id });

        onBannerUpdate?.({
          id: $.id,
          type: "image",
          url: $.url,
          width: $.width,
          height: $.height,
        });
      } catch (O) {
        console.error("Failed to upload banner:", O);
        profile.error("Не удалось загрузить баннер");
        throw O;
      }
    },
    [onBannerUpdate]
  );

  return a("div", {
    className: i.profileCard,
    children: [
      a("div", {
        className: i.banner,
        children: [
          profile.banner?.url
            ? a("img", { src: profile.banner.url, alt: "Banner" })
            : a("div", { className: i.bannerPlaceholder }),
          isOwnProfile &&
            a("div", {
              className: i.bannerActions,
              children: [
                a("button", {
                  className: i.bannerActionButton,
                  onClick: I,
                  title: "Нарисовать баннер",
                  children: a(onEditProfile, { size: 20 }),
                }),
                profile.banner?.url &&
                  a("button", {
                    className: `${i.bannerActionButton} ${i.deleteBannerButton}`,
                    onClick: U,
                    title: "Удалить баннер",
                    children: a(w, { size: 20 }),
                  }),
              ],
            }),
        ],
      }),
      p &&
        a(l, {
          fallback: null,
          children: a(xe, { isOpen: p, onClose: H, onSave: x, mode: "banner" }),
        }),
      a("div", {
        className: i.profileContent,
        children: [
          a("div", {
            className: i.avatarRow,
            children: [
              a(g, {
                src: profile.avatar,
                alt: profile.displayName,
                size: "lg",
                online: profile.online,
                className: i.avatar,
              }),
              !isPhone &&
                a(Pt, {
                  isOwnProfile: isOwnProfile,
                  isFollowing: isFollowing,
                  isRequested: isRequested,
                  isFollowLoading: isFollowLoading,
                  isVerified: profile.isVerified,
                  isBlocked: isBlocked,
                  targetUserId: profile.id,
                  onEditProfile: onEditProfile,
                  onToggleFollow: onToggleFollow,
                  onVerificationRequest: C,
                  onBlockUser: L,
                  onReportUser: T,
                }),
            ],
          }),
          a("div", {
            className: i.infoContainer,
            children: [
              a("div", {
                className: i.userInfo,
                children: [
                  a(U, {
                    name: profile.displayName,
                    verified: profile.isVerified,
                    hasNuksta: profile.hasNuksta,
                    pin: profile.pin,
                    size: "lg",
                    className: i.name,
                  }),
                  profile.username &&
                    a("span", {
                      className: i.username,
                      children: ["@", profile.username],
                    }),
                ],
              }),
              isPhone &&
                a(m_1, {
                  children: [
                    a(bt, {
                      isPhone: true,
                      followers: profile.stats?.followers ?? 0,
                      following: profile.stats?.following ?? 0,
                      onFollowersClick: onFollowersClick,
                      onFollowingClick: onFollowingClick,
                    }),
                    a("div", {
                      className: i.mobileActions,
                      children: a(Pt, {
                        isOwnProfile: isOwnProfile,
                        isFollowing: isFollowing,
                        isRequested: isRequested,
                        isFollowLoading: isFollowLoading,
                        isVerified: profile.isVerified,
                        isBlocked: isBlocked,
                        targetUserId: profile.id,
                        onEditProfile: onEditProfile,
                        onToggleFollow: onToggleFollow,
                        onVerificationRequest: C,
                        onBlockUser: L,
                        onReportUser: T,
                      }),
                    }),
                  ],
                }),
              profile.bio &&
                a("p", { className: i.bio, children: profile.bio }),
              !isPhone &&
                a(bt, {
                  followers: profile.stats?.followers ?? 0,
                  following: profile.stats?.following ?? 0,
                  onFollowersClick: onFollowersClick,
                  onFollowingClick: onFollowingClick,
                }),
              !isOwnProfile &&
                !profile.online &&
                profile.lastSeen &&
                a("span", {
                  className: i.metaItem,
                  children: ["Был(а) в сети: ", De(profile.lastSeen)],
                }),
              profile.createdAt &&
                a("span", {
                  className: i.metaItem,
                  children: [
                    a(Yt, {}),
                    " Регистрация: ",
                    Oe(profile.createdAt),
                  ],
                }),
              isFollowedBy &&
                !isOwnProfile &&
                a("span", {
                  className: i.followsYou,
                  children: "Подписан на вас",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function We({ profile, isBlocked }) {
  const [d, u] = d("posts");
  const [s, c] = d([]);
  const [y, M] = d(false);
  const [v, N] = d(null);
  const [S, n] = d([]);
  const [E, B] = d(false);
  const [p, F] = d(null);
  const [A, b] = d(false);
  const [I, C] = d(null);

  const L = q(async (a, l, r) => {
    M(true);
    try {
      const g = await p.getUserWall(a, {
        cursor: r,
        limit: 20,
        pinnedPostId: l,
      });

      const g_data = g.data;

      c((h) => (r ? [...h, ...g_data] : g_data));

      N(g.nextCursor);
    } catch (g) {
      console.error("Failed to fetch wall posts:", g);
    } finally {
      M(false);
    }
  }, []);

  const T = q(
    async (a, l) => {
      if (!A) {
        B(true);
      }

      C(null);
      try {
        const r = await p.getUserLikedPosts(a, { cursor: l, limit: 20 });
        const r_data = r.data;

        n((f) => (l ? [...f, ...r_data] : r_data));

        F(r.nextCursor);
        b(true);
      } catch (r) {
        console.error("Failed to fetch liked posts:", r);

        if (r && typeof r == "object" && "status" in r && r.status === 403) {
          C("Лайки скрыты настройками приватности");
        }
      } finally {
        B(false);
      }
    },
    [A]
  );

  y(() => {
    if (profile && !isBlocked) {
      L(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile?.id, isBlocked, L]);

  y(() => {
    if (d === "likes" && profile) {
      T(profile.id);
    }
  }, [d, profile?.id, T]);

  const H = c((a) => a.posts);

  const U = c((a) => a.highlightedPostId);

  const x = c((a) => a._lastPostEdit);

  const V = c((a) => a._lastLikeUpdate);

  const O = c((a) => a._lastRepostUpdate);

  const j = c((a) => a._lastStatsBatch);

  y(() => {
    if (!U || !profile) {
      return;
    }
    const a = H.find((l) => l.id === U);

    if (a && a.wallOwnerId === profile.id && !s.some((l) => l.id === U)) {
      c((l) => [a, ...l]);
    }
  }, [U, H, profile?.id, s]);

  y(() => {
    if (s.length !== 0) {
      c((a) =>
        a.map((l) => {
          const r = H.find((g) => g.id === l.id);
          return r &&
            (r.editedAt !== l.editedAt || r.attachments !== l.attachments)
            ? r
            : l;
        })
      );
    }
  }, [H]);

  y(() => {
    if (x) {
      c((a) =>
        a.map((l) =>
          l.id === x.postId
            ? { ...l, text: x.text, spans: x.spans, editedAt: x.editedAt }
            : l
        )
      );
    }
  }, [x]);

  y(() => {
    if (!V) {
      return;
    }
    const { postId, myReaction, totalDelta } = V;

    const g = (f) =>
      f.id === postId
        ? {
            ...f,
            reactions: {
              ...f.reactions,
              myReaction: myReaction,
              total: Math.max(0, f.reactions.total + totalDelta),
            },
          }
        : f;

    c((f) => f.map(g));

    n((f) => f.map(g));
  }, [V]);

  y(() => {
    if (!O) {
      return;
    }
    const { postId, reposted, countDelta } = O;

    const g = (f) =>
      f.id === postId
        ? {
            ...f,
            reposted: reposted,
            stats: {
              ...f.stats,
              reposts: Math.max(0, f.stats.reposts + countDelta),
            },
          }
        : f;

    c((f) => f.map(g));

    n((f) => f.map(g));
  }, [O]);

  y(() => {
    if (!j || j.length === 0) {
      return;
    }

    const a = new Map(j.map((r) => [r.id, r]));

    const l = (r) => {
      const g = a.get(r.id);
      return g
        ? {
            ...r,
            reactions: { ...r.reactions, total: g.likesCount },
            stats: {
              ...r.stats,
              views: g.viewsCount,
              comments: g.commentsCount,
              reposts: g.repostsCount,
            },
            dominantEmoji: g.dominantEmoji,
          }
        : r;
    };

    c((r) => r.map(l));

    n((r) => r.map(l));
  }, [j]);

  const Q = q(() => {
    if (profile && !y) {
      if (d === "posts" && v) {
        L(profile.username || profile.id, profile.pinnedPostId, v);
      } else if (d === "likes" && p && !E) {
        T(profile.id, p);
      }
    }
  }, [profile, d, v, p, y, E, L, T]);

  const z = q(
    async (a) => {
      if (!profile) {
        return;
      }
      const l = profile.pinnedPostId === a;
      try {
        if (l) {
          await r.unpinPost(a);
        } else {
          await r.pinPost(a);
        }
      } catch (r) {
        console.error("Failed to pin/unpin post:", r);
        throw r;
      }
    },
    [profile]
  );

  const Y = q(async () => {
    if (profile) {
      p.invalidateWallCache(profile.username || profile.id);
      await L(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile, L]);

  const P = q(
    (a) => {
      c((l) => l.filter((r) => r.id !== a));

      n((l) => l.filter((r) => r.id !== a));

      if (profile) {
        p.removePostFromWallCache(profile.username || profile.id, a);
      }
    },
    [profile]
  );

  const X = q((a) => {
    u(a);
  }, []);

  const $ = q(() => {
    c([]);
    N(null);
    n([]);
    b(false);
    F(null);
    C(null);
    u("posts");
  }, []);

  return {
    posts: d === "posts" ? s : S,
    postsLoading: d === "posts" ? y : E,
    nextCursor: d === "posts" ? v : p,
    activeTab: d,
    likesError: I,
    hasLoadedLikes: A,
    handleLoadMore: Q,
    handlePinPost: z,
    refreshPosts: Y,
    removePost: P,
    handleTabChange: X,
    resetPosts: $,
  };
}
function ze({ username }) {
  const o = postsLoading((h) => h.profile);

  const d = o?.id;

  const u = postsLoading((h) => h.setProfile);

  const [s, c] = d(null);
  const [y, M] = d(true);
  const [v, N] = d(null);
  const [S, n] = d("none");
  const [E, B] = d(false);
  const [p, F] = d(false);
  const [A, b] = d(false);
  const I = !!(o && s && o.id === s.id);
  const C = S === "following";
  const L = S === "requested";
  const T = s?.interaction?.isFollowedBy ?? false;
  const H = s?.interaction?.isBlockedBy ?? false;

  const {
    posts,
    postsLoading,
    nextCursor,
    activeTab,
    likesError,
    hasLoadedLikes,
    handleLoadMore,
    handlePinPost,
    refreshPosts,
    removePost,
    handleTabChange,
    resetPosts,
  } = We({ profile: s, isBlocked: p });

  y(() => {
    if (!s || I || !o) {
      n("none");
      F(false);
      return;
    }

    if (s.interaction) {
      s.interaction.isFollowing
        ? n("following")
        : s.interaction.hasOutgoingRequest
        ? n("requested")
        : n("none");

      F(s.interaction.isBlocking);
    }
  }, [s?.id, I, o]);
  const R = A(true);

  y(() => {
    R.current = true;

    return () => {
      R.current = false;
    };
  }, []);

  y(() => {
    const h = new AbortController();

    (async () => {
      c(null);
      M(true);
      N(null);
      n("none");
      F(false);
      resetPosts();
      try {
        const _ = username
          ? await r.getProfileByUsername(username)
          : await r.getMyProfile();
        if (!R.current || h.signal.aborted) {
          return;
        }

        if (_) {
          c(_);
        }
      } catch (_) {
        if (!R.current || h.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", _);
        N("Профиль не найден");
      } finally {
        if (R.current && !h.signal.aborted) {
          M(false);
        }
      }
    })();

    return () => {
      h.abort();
    };
  }, [username, d, resetPosts]);

  const tt = resetPosts(async () => {
    if (!(!s || E)) {
      B(true);
      try {
        const h = await C.followUser(s.id);
        n(h);

        if (h === "following" && s.stats) {
          const D = s.stats.followers + 1;

          c((_) =>
            _?.stats ? { ..._, stats: { ..._.stats, followers: D } } : _
          );

          if (s.username) {
            r.updateProfileCache(s.username, {
              stats: { ...s.stats, followers: D },
            });
          }
        }
      } catch (h) {
        console.error("Failed to follow:", h);
      } finally {
        B(false);
      }
    }
  }, [s, E]);

  const a = resetPosts(async () => {
    if (!(!s || E)) {
      B(true);
      try {
        await C.unfollowUser(s.id);
        n("none");

        if (C && s.stats) {
          const h = s.stats.followers - 1;

          c((D) =>
            D?.stats ? { ...D, stats: { ...D.stats, followers: h } } : D
          );

          if (s.username) {
            r.updateProfileCache(s.username, {
              stats: { ...s.stats, followers: h },
            });
          }
        }
      } catch (h) {
        console.error("Failed to unfollow:", h);
      } finally {
        B(false);
      }
    }
  }, [s, C, E]);

  const l = resetPosts(async () => {
    if (C || L) {
      await a();
    } else {
      await tt();
    }
  }, [C, L, tt, a]);

  const r = resetPosts(
    async (h) => {
      if (!s) {
        return;
      }
      const _ = s.pinnedPostId === h ? null : h;
      const at = { ...s, pinnedPostId: _ };
      c(at);

      if (o) {
        u(at);
      }

      try {
        await handlePinPost(h);
      } catch {
        c(s);

        if (o) {
          u(s);
        }
      }
    },
    [s, o, u, handlePinPost]
  );

  const g = resetPosts(async () => {
    if (!(!s || A || I)) {
      b(true);
      try {
        if (p) {
          await C.unblockUser(s.id);
          F(false);
          username.success("Пользователь разблокирован");
        } else {
          await C.blockUser(s.id);
          F(true);
          username.success("Пользователь заблокирован");
          C && n("none");
        }

        if (s.username) {
          r.invalidateProfileCache(s.username);
        }
      } catch (h) {
        console.error("Failed to toggle block:", h);
        username.error("Не удалось выполнить действие");
      } finally {
        b(false);
      }
    }
  }, [s, p, A, I, C]);

  const f = resetPosts(
    (h) => {
      c((D) => (D ? { ...D, banner: h } : null));

      if (o) {
        u({ ...o, banner: h });
      }
    },
    [o, u]
  );

  return {
    profile: s,
    loading: y,
    error: v,
    posts: posts,
    postsLoading: postsLoading,
    nextCursor: nextCursor,
    isOwnProfile: I,
    isFollowing: C,
    isFollowedBy: T,
    isBlockedBy: H,
    isRequested: L,
    isFollowLoading: E,
    handleToggleFollow: l,
    handleFollow: tt,
    handleUnfollow: a,
    handleLoadMore: handleLoadMore,
    handlePinPost: r,
    refreshPosts: refreshPosts,
    removePost: removePost,
    activeTab: activeTab,
    handleTabChange: handleTabChange,
    likesError: likesError,
    hasLoadedLikes: hasLoadedLikes,
    updateBanner: f,
    isBlocked: p,
    handleBlockUser: g,
  };
}

const He = z(() =>
  _(
    () => import("./index-DXx_nwTn.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  ).then((t) => ({
    default: t.SettingsModal,
  }))
);

const yt = z(() =>
  _(
    () => import("./index-Dsb1ydaS.js"),
    __vite__mapDeps([17, 1, 2, 18, 12, 3, 4, 13, 14, 19])
  ).then((t) => ({
    default: t.UserListModal,
  }))
);

export const Profile = ({ username }) => {
  const o = loading();
  const d = postsLoading();
  const { openModal, closeModal } = o();

  const c = c((w) => w.createPost);

  const y = c((w) => w.profileScrollByUser);

  const M = c((w) => w.profileMeasuredHeightsByUser);

  const v = c((w) => w.setProfileMeasuredHeights);

  const N = username ? y[t] ?? 0 : 0;
  const S = nextCursor(null);

  const {
    profile,
    loading,
    error,
    posts,
    postsLoading,
    nextCursor,
    isOwnProfile,
    isFollowing,
    isFollowedBy,
    isBlockedBy,
    isRequested,
    isFollowLoading,
    isBlocked,
    handleFollow,
    handleUnfollow,
    handleBlockUser,
    handleLoadMore,
    handlePinPost,
    refreshPosts,
    removePost,
    activeTab,
    handleTabChange,
    likesError,
    updateBanner,
  } = ze({ username: username });

  const R = username ? `${username}:${activeTab}` : null;
  const tt = R ? M[R] : undefined;

  const a = updateBanner(
    (w) => {
      if (R) {
        v(R, w);
      }
    },
    [R, v]
  );

  const l = updateBanner(() => {
    if (isFollowing || isRequested) {
      openModal(
        a(r_1, {
          displayName: profile?.displayName ?? "",
          onConfirm: handleUnfollow,
          onClose: closeModal,
        })
      );
    } else {
      handleFollow();
    }
  }, [
    isFollowing,
    isRequested,
    profile?.displayName,
    handleFollow,
    handleUnfollow,
    openModal,
    closeModal,
  ]);

  const r = () => {
    openModal(a(He, { onClose: closeModal }));
  };

  const g = updateBanner(() => {
    if (profile) {
      openModal(
        a(yt, { userId: profile.id, type: "followers", title: "Подписчики" })
      );
    }
  }, [profile, openModal]);

  const f = updateBanner(() => {
    if (profile) {
      openModal(
        a(yt, { userId: profile.id, type: "following", title: "Подписки" })
      );
    }
  }, [profile, openModal]);

  const h = async (w, K, dt, It) => {
    if (profile) {
      await c({
        wallOwnerId: profile.id,
        text: w,
        spans: K,
        attachments: dt,
        poll: It,
      });

      refreshPosts();
    }
  };

  const D = updateBanner(() => {
    if (profile) {
      openModal(
        a(isFollowLoading, {
          wallOwnerId: profile.id,
          placeholder: `Написать на стене ${profile.displayName}`,
          onPostCreated: refreshPosts,
        })
      );
    }
  }, [profile, openModal, refreshPosts]);

  y(() => {
    if (username && S.current !== username && posts.length !== 0) {
      if (N <= 0) {
        S.current = username;
        return;
      }
      S.current = username;

      requestAnimationFrame(() => {
        window.scrollTo(0, N);
      });
    }
  }, [username, posts.length, N]);

  const _ = isRequested(() => {
    if (activeTab !== "posts" || !profile?.pinnedPostId) {
      return posts;
    }
    const w = posts.find((K) => K.id === profile.pinnedPostId);
    return w
      ? [w, ...posts.filter((K) => K.id !== profile.pinnedPostId)]
      : posts;
  }, [posts, profile?.pinnedPostId, activeTab]);

  const at = isRequested(() => {
    if (!d) {
      return false;
    }
    if (isOwnProfile) {
      return true;
    }
    if (isBlocked || isBlockedBy) {
      return false;
    }
    switch (profile?.privacySettings?.whoCanPostOnWall) {
      case "everyone": {
        return true;
      }
      case "followers": {
        return isFollowing;
      }
      case "mutual": {
        return isFollowing && isFollowedBy;
      }
      default: {
        return false;
      }
    }
  }, [
    d,
    isOwnProfile,
    isBlocked,
    isBlockedBy,
    profile?.privacySettings?.whoCanPostOnWall,
    isFollowing,
    isFollowedBy,
  ]);

  const rt =
    isOwnProfile ||
    profile?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const kt = isRequested(() => {
    const w = ["Посты"];

    if (rt) {
      w.push("Лайки");
    }

    return w;
  }, [rt]);

  const Nt = updateBanner(
    (w) => {
      handleTabChange(rt ? (w === 0 ? "posts" : "likes") : "posts");
    },
    [handleTabChange, rt]
  );

  const mt = nextCursor(null);

  B_1(() => {
    const w = username ?? "";
    const mt_current = mt.current;
    mt.current = { user: w, tab: activeTab };

    if (mt_current && mt_current.user === w && mt_current.tab !== activeTab) {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [activeTab, username]);

  return loading
    ? null
    : error || !profile
    ? a("div", {
        className: i.page,
        children: a("div", {
          className: i.error,
          children: error || "Профиль не найден",
        }),
      })
    : a("div", {
        className: i.page,
        children: [
          a($e, {
            profile: profile,
            isOwnProfile: isOwnProfile,
            isFollowing: isFollowing,
            isRequested: isRequested,
            isFollowLoading: isFollowLoading,
            isBlocked: isBlocked,
            isFollowedBy: isFollowedBy,
            isPhone: o,
            onEditProfile: r,
            onToggleFollow: l,
            onBlockUser: handleBlockUser,
            onFollowersClick: g,
            onFollowingClick: f,
            onBannerUpdate: updateBanner,
          }),
          a("div", {
            className: i.tabsWrapper,
            children: a(K, {
              tabs: kt,
              activeIndex: activeTab === "posts" ? 0 : 1,
              onChange: Nt,
            }),
          }),
          a("div", {
            className: i.belowTabs,
            children: [
              at &&
                a(m_1, {
                  children: [
                    a("div", {
                      className: i.createPostWrapper,
                      children: [
                        a(g, {
                          src: profile.avatar ?? "",
                          alt: profile.displayName,
                          size: "sm",
                        }),
                        a(isBlockedBy, {
                          onSubmit: h,
                          placeholder: isOwnProfile
                            ? "Что нового?"
                            : `Написать на стене ${profile.displayName}`,
                        }),
                      ],
                    }),
                    a(error, {
                      variant: "secondary",
                      className: i.writePostButton,
                      onClick: D,
                      children: "Написать на стене",
                    }),
                  ],
                }),
              isBlocked
                ? a("div", {
                    className: i.emptyPosts,
                    children: "Вы заблокировали этого пользователя",
                  })
                : likesError
                ? a("div", { className: i.emptyPosts, children: likesError })
                : _.length > 0
                ? a(
                    handleUnfollow,
                    {
                      posts: _,
                      renderPost: (w, K, dt) =>
                        a(a_1, {
                          post: w,
                          isOnOwnProfile: isOwnProfile && activeTab === "posts",
                          isPinned:
                            activeTab === "posts" &&
                            profile?.pinnedPostId === w.id,
                          isHighlighted: dt,
                          source: "profile",
                          sourceContext: profile?.id ?? "",
                          onPin:
                            isOwnProfile && activeTab === "posts"
                              ? handlePinPost
                              : undefined,
                          onDelete:
                            activeTab === "posts" ? removePost : undefined,
                        }),
                      hasMore: !!nextCursor,
                      isLoadingMore: postsLoading,
                      onLoadMore: handleLoadMore,
                      initialMeasuredHeights: tt,
                      onMeasuredHeightsChange: a,
                    },
                    R ?? activeTab
                  )
                : postsLoading && _.length === 0
                ? a(activeTab, { count: 4 })
                : a("div", {
                    className: i.emptyPosts,
                    children:
                      activeTab === "posts" ? "Нет постов" : "Нет лайков",
                  }),
            ],
          }),
        ],
      });
};

export { Profile as Profile };
