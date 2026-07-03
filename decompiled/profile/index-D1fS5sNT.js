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
  B as B_1,
  H,
  T,
  c as c_1,
  K,
  L,
  V,
  a as a_1,
  P,
} from "./index-DuQT229k.js";

import { I } from "./IconCheck-DQxhhu1S.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-B6GD88dL.js",
      "assets/index-DuQT229k.js",
      "assets/index-Bl28YDgI.css",
      "assets/index-BzcY6Gdu.js",
      "assets/index-Dv2LmX43.css",
      "assets/IconInfo-BIX6X1qJ.js",
      "assets/IconNotificationMention-2tVYbAN-.js",
      "assets/IconChevronRight-DoykIv9y.js",
      "assets/IconChevronLeft-CbQdWkHt.js",
      "assets/index-nf8UPCmP.css",
      "assets/index-D8SKbHp9.js",
      "assets/index-2tfOjoSk.css",
      "assets/index-DyTJ8PBh.js",
      "assets/IconCheckCircle-z77mfT7n.js",
      "assets/index-y6Wbr7tb.css",
      "assets/index-DGLPQmb0.js",
      "assets/index-BAjUALFX.css",
      "assets/index-BrpswImJ.js",
      "assets/IconCheck-DQxhhu1S.js",
      "assets/index-N4J8X8Gb.css",
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
      t._sentryDebugIds[o] = "a5e0e80a-e73a-479f-85f3-1553c5698656";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-a5e0e80a-e73a-479f-85f3-1553c5698656";
    }
  } catch {}
})();

const Jt = ({ size = 24 }) =>
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

const Xt = () =>
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

const Kt = "yfbo";
const Zt = "ZoyS";
const Gt = "SIIj";
const Qt = "a2Yn";
const te = "nZus";
const ee = "lC2O";
const se = "wee3";
const ne = "aBwY";
const oe = "J28r";
const ae = "Rk97";
const re = "SEOl";
const ie = "Yjak";
const le = "U5SR";
const ce = "LwTv";
const de = "OCt8";
const ue = "UJTu";
const he = "Ae4c";
const fe = "g5yR";
const me = "FY4t";
const we = "vH35";
const ge = "sbbN";
const pe = "ndaw";
const Pe = "Sfn8";
const be = "hSXb";
const ye = "WYLI";
const ve = "ucUX";
const Ce = "tetq";
const ke = "iBPv";
const Ie = "uj2P";
const Ne = "zXSn";
const Le = "uvfY";

const i = {
  page: Kt,
  tabsWrapper: Zt,
  belowTabs: Gt,
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
  username: we,
  bio: ge,
  metaItem: pe,
  followsYou: Pe,
  stats: be,
  stat: ye,
  clickable: ve,
  statValue: Ce,
  statLabel: ke,
  error: Ie,
  bannerPlaceholder: Ne,
  emptyPosts: Le,
};

const Me = "YJXn";
const Ae = "EGt2";
const Be = "ystu";
const _e = "ciOF";
const Se = "UyjP";
const Ue = "eEaU";

const et = {
  content: Me,
  title: Ae,
  description: Be,
  username: _e,
  warning: Se,
  actions: Ue,
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
function gt(t, o, d, u) {
  const s = Math.abs(t);
  const c = s % 10;
  const y = s % 100;
  return y >= 11 && y <= 19 ? u : c === 1 ? o : c >= 2 && c <= 4 ? d : u;
}
function Te(t) {
  if (!t) {
    return null;
  }
  switch (t.unit) {
    case "just_now": {
      return "только что";
    }
    case "minutes": {
      const o = t.value ?? 1;
      const d = gt(o, "минуту", "минуты", "минут");
      return `${o} ${d} назад`;
    }
    case "hours": {
      const o = t.value ?? 1;
      const d = gt(o, "час", "часа", "часов");
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
function Pt({
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
const Ee = z(() =>
  _(
    () => import("./index-B6GD88dL.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  ).then((t) => ({
    default: t.SubscriptionModal,
  }))
);
function De({
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
              children: a(Ee, { isOpen: M, onClose: () => v(false) }),
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
function bt({
  isOwnProfile,
  isVerified = false,
  isBlocked = false,
  onVerificationRequest,
  onBlockUser,
  onReportUser,
  ...y
}) {
  const v = (() => {
    const I = [];

    if (!isOwnProfile && onBlockUser) {
      I.push({
        id: "block",
        label: isBlocked ? "Разблокировать" : "Заблокировать",
        icon: a(Jt, { size: 18 }),
        danger: !isBlocked,
        onClick: onBlockUser,
      });
    }

    if (!isOwnProfile && onReportUser) {
      I.push({
        id: "report",
        label: "Пожаловаться",
        icon: a(j, { size: 18 }),
        danger: true,
        onClick: onReportUser,
      });
    }

    return I;
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
      a(De, { isOwnProfile: isOwnProfile, isVerified: isVerified, ...y }),
    ],
  });
}

const Re = z(() =>
  _(() => import("./index-D8SKbHp9.js"), __vite__mapDeps([10, 1, 2, 11])).then(
    (t) => ({
      default: t.DrawingCanvas,
    })
  )
);

const xe = z(() =>
  _(
    () => import("./index-DyTJ8PBh.js"),
    __vite__mapDeps([12, 1, 2, 3, 4, 13, 14])
  ).then((t) => ({
    default: t.VerificationModal,
  }))
);

const Ve = z(() =>
  _(
    () => import("./index-DGLPQmb0.js"),
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

  const N = q(() => {
    F(true);
  }, []);

  const C = q(() => {
    openModal(a(xe, { onClose: closeModal }));
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

  const E = q(() => {
    openModal(
      a(Ve, { targetType: "user", targetId: profile.id, onClose: closeModal })
    );
  }, [openModal, closeModal, profile.id]);

  const H = q(() => {
    F(false);
  }, []);

  const D = q(async () => {
    try {
      await r.updateProfile({ bannerId: null });
      onBannerUpdate?.(null);
    } catch (V) {
      console.error("Failed to delete banner:", V);
    }
  }, [onBannerUpdate]);

  const R = q(
    async (V) => {
      try {
        const [O, Y] = V.split(",");
        const Q = O.match(/:(.*?);/)?.[1] || "image/png";
        const z = atob(Y);
        const X = new Uint8Array(z.length);
        for (let j = 0; j < z.length; j++) {
          X[j] = z.charCodeAt(j);
        }
        const b = new Blob([X], { type: Q });
        const K = new File([b], "banner.png", { type: "image/png" });
        const $ = await isFollowLoading.uploadMedia(K);
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
                  onClick: N,
                  title: "Нарисовать баннер",
                  children: a(onEditProfile, { size: 20 }),
                }),
                profile.banner?.url &&
                  a("button", {
                    className: `${i.bannerActionButton} ${i.deleteBannerButton}`,
                    onClick: D,
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
          children: a(Re, { isOpen: p, onClose: H, onSave: R, mode: "banner" }),
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
                a(bt, {
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
                  onReportUser: E,
                }),
            ],
          }),
          a("div", {
            className: i.infoContainer,
            children: [
              a("div", {
                className: i.userInfo,
                children: [
                  a(onFollowingClick, {
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
                    a(Pt, {
                      isPhone: true,
                      followers: profile.stats?.followers ?? 0,
                      following: profile.stats?.following ?? 0,
                      onFollowersClick: onFollowersClick,
                      onFollowingClick: onFollowingClick,
                    }),
                    a("div", {
                      className: i.mobileActions,
                      children: a(bt, {
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
                        onReportUser: E,
                      }),
                    }),
                  ],
                }),
              profile.bio &&
                a("p", { className: i.bio, children: profile.bio }),
              !isPhone &&
                a(Pt, {
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
                  children: ["Был(а) в сети: ", Te(profile.lastSeen)],
                }),
              profile.createdAt &&
                a("span", {
                  className: i.metaItem,
                  children: [
                    a(Xt, {}),
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
  const [v, I] = d(null);
  const [S, n] = d([]);
  const [U, A] = d(false);
  const [p, F] = d(null);
  const [B, P] = d(false);
  const [N, C] = d(null);

  const L = q(async (a, l, r) => {
    M(true);
    try {
      const w = await p.getUserWall(a, {
        cursor: r,
        limit: 20,
        pinnedPostId: l,
      });

      const w_data = w.data;

      c((h) => (r ? [...h, ...w_data] : w_data));

      I(w.nextCursor);
    } catch (w) {
      console.error("Failed to fetch wall posts:", w);
    } finally {
      M(false);
    }
  }, []);

  const E = q(
    async (a, l) => {
      if (!B) {
        A(true);
      }

      C(null);
      try {
        const r = await p.getUserLikedPosts(a, { cursor: l, limit: 20 });
        const r_data = r.data;

        n((f) => (l ? [...f, ...r_data] : r_data));

        F(r.nextCursor);
        P(true);
      } catch (r) {
        console.error("Failed to fetch liked posts:", r);

        if (r && typeof r == "object" && "status" in r && r.status === 403) {
          C("Лайки скрыты настройками приватности");
        }
      } finally {
        A(false);
      }
    },
    [B]
  );

  y(() => {
    if (profile && !isBlocked) {
      L(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile?.id, isBlocked, L]);

  y(() => {
    if (d === "likes" && profile) {
      E(profile.id);
    }
  }, [d, profile?.id, E]);

  const H = c((a) => a.posts);

  const D = c((a) => a.highlightedPostId);

  const R = c((a) => a._lastPostEdit);

  const V = c((a) => a._lastLikeUpdate);

  const O = c((a) => a._lastRepostUpdate);

  const Y = c((a) => a._lastStatsBatch);

  y(() => {
    if (!D || !profile) {
      return;
    }
    const a = H.find((l) => l.id === D);

    if (a && a.wallOwnerId === profile.id && !s.some((l) => l.id === D)) {
      c((l) => [a, ...l]);
    }
  }, [D, H, profile?.id, s]);

  y(() => {
    if (s.length !== 0) {
      c((a) =>
        a.map((l) => {
          const r = H.find((w) => w.id === l.id);
          return r &&
            (r.editedAt !== l.editedAt || r.attachments !== l.attachments)
            ? r
            : l;
        })
      );
    }
  }, [H]);

  y(() => {
    if (R) {
      c((a) =>
        a.map((l) =>
          l.id === R.postId
            ? { ...l, text: R.text, spans: R.spans, editedAt: R.editedAt }
            : l
        )
      );
    }
  }, [R]);

  y(() => {
    if (!V) {
      return;
    }
    const { postId, myReaction, totalDelta } = V;

    const w = (f) =>
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

    c((f) => f.map(w));

    n((f) => f.map(w));
  }, [V]);

  y(() => {
    if (!O) {
      return;
    }
    const { postId, reposted, countDelta } = O;

    const w = (f) =>
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

    c((f) => f.map(w));

    n((f) => f.map(w));
  }, [O]);

  y(() => {
    if (!Y || Y.length === 0) {
      return;
    }

    const a = new Map(Y.map((r) => [r.id, r]));

    const l = (r) => {
      const w = a.get(r.id);
      return w
        ? {
            ...r,
            reactions: { ...r.reactions, total: w.likesCount },
            stats: {
              ...r.stats,
              views: w.viewsCount,
              comments: w.commentsCount,
              reposts: w.repostsCount,
            },
            dominantEmoji: w.dominantEmoji,
          }
        : r;
    };

    c((r) => r.map(l));

    n((r) => r.map(l));
  }, [Y]);

  const Q = q(() => {
    if (profile && !y) {
      if (d === "posts" && v) {
        L(profile.username || profile.id, profile.pinnedPostId, v);
      } else if (d === "likes" && p && !U) {
        E(profile.id, p);
      }
    }
  }, [profile, d, v, p, y, U, L, E]);

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

  const X = q(async () => {
    if (profile) {
      p.invalidateWallCache(profile.username || profile.id);
      await L(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile, L]);

  const b = q(
    (a) => {
      c((l) => l.filter((r) => r.id !== a));

      n((l) => l.filter((r) => r.id !== a));

      if (profile) {
        p.removePostFromWallCache(profile.username || profile.id, a);
      }
    },
    [profile]
  );

  const K = q((a) => {
    u(a);
  }, []);

  const $ = q(() => {
    c([]);
    I(null);
    n([]);
    P(false);
    F(null);
    C(null);
    u("posts");
  }, []);

  return {
    posts: d === "posts" ? s : S,
    postsLoading: d === "posts" ? y : U,
    nextCursor: d === "posts" ? v : p,
    activeTab: d,
    likesError: N,
    hasLoadedLikes: B,
    handleLoadMore: Q,
    handlePinPost: z,
    refreshPosts: X,
    removePost: b,
    handleTabChange: K,
    resetPosts: $,
  };
}
function ze({ username }) {
  const o = x((h) => h.profile);

  const d = o?.id;

  const u = x((h) => h.setProfile);

  const [s, c] = d(null);
  const [y, M] = d(true);
  const [v, I] = d(null);
  const [S, n] = d("none");
  const [U, A] = d(false);
  const [p, F] = d(false);
  const [B, P] = d(false);
  const N = !!(o && s && o.id === s.id);
  const C = S === "following";
  const L = S === "requested";
  const E = s?.interaction?.isFollowedBy ?? false;
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
    if (!s || N || !o) {
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
  }, [s?.id, N, o]);
  const x = A(true);

  y(() => {
    x.current = true;

    return () => {
      x.current = false;
    };
  }, []);

  y(() => {
    const h = new AbortController();

    (async () => {
      c(null);
      M(true);
      I(null);
      n("none");
      F(false);
      resetPosts();
      try {
        const _ = username
          ? await r.getProfileByUsername(username)
          : await r.getMyProfile();
        if (!x.current || h.signal.aborted) {
          return;
        }

        if (_) {
          c(_);
        }
      } catch (_) {
        if (!x.current || h.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", _);
        I("Профиль не найден");
      } finally {
        if (x.current && !h.signal.aborted) {
          M(false);
        }
      }
    })();

    return () => {
      h.abort();
    };
  }, [username, d, resetPosts]);

  const tt = q(async () => {
    if (!(!s || U)) {
      A(true);
      try {
        const h = await C.followUser(s.id);
        n(h);

        if (h === "following" && s.stats) {
          const T = s.stats.followers + 1;

          c((_) =>
            _?.stats ? { ..._, stats: { ..._.stats, followers: T } } : _
          );

          if (s.username) {
            r.updateProfileCache(s.username, {
              stats: { ...s.stats, followers: T },
            });
          }
        }
      } catch (h) {
        console.error("Failed to follow:", h);
      } finally {
        A(false);
      }
    }
  }, [s, U]);

  const a = q(async () => {
    if (!(!s || U)) {
      A(true);
      try {
        await C.unfollowUser(s.id);
        n("none");

        if (C && s.stats) {
          const h = s.stats.followers - 1;

          c((T) =>
            T?.stats ? { ...T, stats: { ...T.stats, followers: h } } : T
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
        A(false);
      }
    }
  }, [s, C, U]);

  const l = q(async () => {
    if (C || L) {
      await a();
    } else {
      await tt();
    }
  }, [C, L, tt, a]);

  const r = q(
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

  const w = q(async () => {
    if (!(!s || B || N)) {
      P(true);
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
        P(false);
      }
    }
  }, [s, p, B, N, C]);

  const f = q(
    (h) => {
      c((T) => (T ? { ...T, banner: h } : null));

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
    isOwnProfile: N,
    isFollowing: C,
    isFollowedBy: E,
    isBlockedBy: H,
    isRequested: L,
    isFollowLoading: U,
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
    handleBlockUser: w,
  };
}

const He = z(() =>
  _(
    () => import("./index-B6GD88dL.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  ).then((t) => ({
    default: t.SettingsModal,
  }))
);

const yt = z(() =>
  _(
    () => import("./index-BrpswImJ.js"),
    __vite__mapDeps([17, 1, 2, 18, 12, 3, 4, 13, 14, 19])
  ).then((t) => ({
    default: t.UserListModal,
  }))
);

export const Profile = ({ username }) => {
  const o = isRequested();
  const d = postsLoading();
  const { openModal, closeModal } = o();

  const c = c((g) => g.createPost);

  const y = c((g) => g.profileScrollByUser);

  const M = c((g) => g.profileMeasuredHeightsByUser);

  const v = c((g) => g.setProfileMeasuredHeights);

  const I = username ? y[t] ?? 0 : 0;
  const S = error(null);

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

  const x = username ? `${username}:${activeTab}` : null;
  const tt = x ? M[x] : undefined;

  const a = q(
    (g) => {
      if (x) {
        v(x, g);
      }
    },
    [x, v]
  );

  const l = q(() => {
    if (isFollowing || isRequested) {
      openModal(
        a(B_1, {
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

  const w = q(() => {
    if (profile) {
      openModal(
        a(yt, { userId: profile.id, type: "followers", title: "Подписчики" })
      );
    }
  }, [profile, openModal]);

  const f = q(() => {
    if (profile) {
      openModal(
        a(yt, { userId: profile.id, type: "following", title: "Подписки" })
      );
    }
  }, [profile, openModal]);

  const h = async (g, q, dt, Nt) => {
    if (profile) {
      await c({
        wallOwnerId: profile.id,
        text: g,
        spans: q,
        attachments: dt,
        poll: Nt,
      });

      refreshPosts();
    }
  };

  const T = q(() => {
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
      if (I <= 0) {
        S.current = username;
        return;
      }
      S.current = username;

      requestAnimationFrame(() => {
        window.scrollTo(0, I);
      });
    }
  }, [username, posts.length, I]);

  const _ = T(() => {
    if (activeTab !== "posts" || !profile?.pinnedPostId) {
      return posts;
    }
    const g = posts.find((q) => q.id === profile.pinnedPostId);
    return g
      ? [g, ...posts.filter((q) => q.id !== profile.pinnedPostId)]
      : posts;
  }, [posts, profile?.pinnedPostId, activeTab]);

  const at = T(() => {
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

  const kt = T(() => {
    const g = ["Посты"];

    if (rt) {
      g.push("Лайки");
    }

    return g;
  }, [rt]);

  const It = q(
    (g) => {
      handleTabChange(rt ? (g === 0 ? "posts" : "likes") : "posts");
    },
    [handleTabChange, rt]
  );

  const mt = error(null);

  c_1(() => {
    const g = username ?? "";
    const mt_current = mt.current;
    mt.current = { user: g, tab: activeTab };

    if (mt_current && mt_current.user === g && mt_current.tab !== activeTab) {
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
            onFollowersClick: w,
            onFollowingClick: f,
            onBannerUpdate: updateBanner,
          }),
          a("div", {
            className: i.tabsWrapper,
            children: a(handleTabChange, {
              tabs: kt,
              activeIndex: activeTab === "posts" ? 0 : 1,
              onChange: It,
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
                    a(nextCursor, {
                      variant: "secondary",
                      className: i.writePostButton,
                      onClick: T,
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
                      renderPost: (g, q, dt) =>
                        a(a_1, {
                          post: g,
                          isOnOwnProfile: isOwnProfile && activeTab === "posts",
                          isPinned:
                            activeTab === "posts" &&
                            profile?.pinnedPostId === g.id,
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
                    x ?? activeTab
                  )
                : postsLoading && _.length === 0
                ? a(isOwnProfile, { count: 4 })
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
