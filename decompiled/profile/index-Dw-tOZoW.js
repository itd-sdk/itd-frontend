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
  k,
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
  c as c_1,
  T,
  J,
  K,
  V,
  a as a_1,
  P,
} from "./index-BCnJB3wz.js";

import { I } from "./IconCheck-BU1vahVZ.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BbFs5PEb.js",
      "assets/index-BCnJB3wz.js",
      "assets/index-CVmeqvSW.css",
      "assets/IconNotificationMention-Bj1axzUH.js",
      "assets/IconInfo-DBMb_x9i.js",
      "assets/index-CE7OEdwr.css",
      "assets/index-BGTT52-5.js",
      "assets/index-DMdBFEHe.css",
      "assets/index-GZMCoX-E.js",
      "assets/IconCheckCircle-CrO7iazj.js",
      "assets/index-CTkajpUz.css",
      "assets/index-CdjLILCq.js",
      "assets/index-B1ytOp-8.css",
      "assets/index-D1rr3TT2.js",
      "assets/IconCheck-BU1vahVZ.js",
      "assets/index-D-E96Pv-.css",
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
    t.SENTRY_RELEASE = { id: "1.1.1" };
    const n = new t.Error().stack;

    if (n) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[n] = "9772d2ef-77f3-4e3b-884c-571c496f0887";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-9772d2ef-77f3-4e3b-884c-571c496f0887";
    }
  } catch {}
})();

const qt = ({ size = 24 }) =>
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

const jt = "wWDN";
const Jt = "xGLb";
const Xt = "fW3e";
const Gt = "Ys9e";
const Qt = "XXVC";
const Kt = "cfVJ";
const Zt = "p6eM";
const te = "CkUM";
const ee = "czqD";
const se = "VYC5";
const ne = "aJ3g";
const oe = "CNOo";
const ae = "F6xu";
const re = "WVkf";
const ie = "WIJn";
const le = "kclI";
const ce = "kSmD";
const de = "XBmq";
const ue = "UwaG";
const he = "AMYM";
const fe = "wLnY";
const me = "Q7dX";
const ge = "II1e";
const we = "Dn0b";
const pe = "yrdr";
const Pe = "zw1A";
const be = "n4Tg";
const ye = "JoMi";
const Ce = "piyA";
const ve = "hB5Z";
const ke = "u9Cy";

const i = {
  page: jt,
  tabsWrapper: Jt,
  tabs: Xt,
  createPostWrapper: Gt,
  writePostButton: Qt,
  profileCard: Kt,
  banner: Zt,
  bannerActions: te,
  bannerActionButton: ee,
  deleteBannerButton: se,
  profileContent: ne,
  avatarRow: oe,
  avatar: ae,
  actions: re,
  ownActions: ie,
  mobileActions: le,
  infoContainer: ce,
  userInfo: de,
  name: ue,
  username: he,
  bio: fe,
  metaItem: me,
  followsYou: ge,
  stats: we,
  stat: pe,
  clickable: Pe,
  statValue: be,
  statLabel: ye,
  error: Ce,
  bannerPlaceholder: ve,
  emptyPosts: ke,
};

const Ne = "FlnN";
const Ie = "zheP";
const Le = "cEhl";
const Me = "TCRu";
const Ae = "QFfw";
const Be = "QRSq";

const st = {
  content: Ne,
  title: Ie,
  description: Le,
  username: Me,
  warning: Ae,
  actions: Be,
};

function _e({ username, displayName, avatar, onConfirm, onClose }) {
  const c = () => {
    onConfirm();
    onClose();
  };
  return a(M, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: st.content,
      children: [
        a(g, { src: avatar, alt: displayName, size: "lg" }),
        a("h2", {
          className: st.title,
          children: "Заблокировать пользователя?",
        }),
        a("p", {
          className: st.description,
          children: [
            "Вы уверены, что хотите заблокировать",
            " ",
            a("strong", { children: displayName }),
            username &&
              a("span", {
                className: st.username,
                children: [" (@", username, ")"],
              }),
            "?",
          ],
        }),
        a("p", {
          className: st.warning,
          children:
            "Заблокированный пользователь не сможет видеть ваш профиль и контент.",
        }),
        a("div", {
          className: st.actions,
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
function ft(t, n, d, u) {
  const s = Math.abs(t);
  const c = s % 10;
  const C = s % 100;
  return C >= 11 && C <= 19 ? u : c === 1 ? n : c >= 2 && c <= 4 ? d : u;
}
function Se(t) {
  if (!t) {
    return null;
  }
  switch (t.unit) {
    case "just_now": {
      return "только что";
    }
    case "minutes": {
      const n = t.value ?? 1;
      const d = ft(n, "минуту", "минуты", "минут");
      return `${n} ${d} назад`;
    }
    case "hours": {
      const n = t.value ?? 1;
      const d = ft(n, "час", "часа", "часов");
      return `${n} ${d} назад`;
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
function mt(t) {
  return t >= 1000000 /* 1e6 */
    ? `${(t / 1000000) /* 1e6 */
        .toFixed(1)}M`
    : t >= 1000 /* 1e3 */
    ? `${(t / 1000) /* 1e3 */
        .toFixed(1)}K`
    : t.toString();
}
function gt({
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
          a("span", { className: i.statValue, children: mt(followers) }),
          a("span", { className: i.statLabel, children: "подписчиков" }),
        ],
      }),
      isPhone && a("hr", {}),
      a("div", {
        className: `${i.stat} ${onFollowingClick ? i.clickable : ""}`,
        onClick: onFollowingClick,
        children: [
          a("span", { className: i.statValue, children: mt(following) }),
          a("span", { className: i.statLabel, children: "подписок" }),
        ],
      }),
    ],
  });
}
const De = z(() =>
  _(
    () => import("./index-BbFs5PEb.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5])
  ).then((t) => ({
    default: t.SubscriptionModal,
  }))
);
function Fe({
  isOwnProfile,
  isFollowing,
  isRequested = false,
  isFollowLoading,
  onEditProfile,
  onToggleFollow,
  fullWidth = false,
}) {
  const [A, v] = isRequested(false);
  const V = k()?.subscription?.isActive;
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
              !V &&
                a(B, {
                  variant: "secondary",
                  onClick: () => v(true),
                  fullWidth: fullWidth,
                  children: "ИТД НУКСТА",
                }),
            ],
          }),
          A &&
            a(l, {
              fallback: null,
              children: a(De, { isOpen: A, onClose: () => v(false) }),
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
            : a(m_1, {
                children: [a(isFollowing, { size: 18 }), "Подписаться"],
              }),
        }),
      });
}
function wt({
  isOwnProfile,
  isVerified = false,
  isBlocked = false,
  onVerificationRequest,
  onBlockUser,
  onReportUser,
  ...C
}) {
  const v = (() => {
    const I = [];

    if (!isOwnProfile && onBlockUser) {
      I.push({
        id: "block",
        label: isBlocked ? "Разблокировать" : "Заблокировать",
        icon: a(qt, { size: 18 }),
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
      a(Fe, { isOwnProfile: isOwnProfile, isVerified: isVerified, ...C }),
    ],
  });
}

const Ee = z(() =>
  _(() => import("./index-BGTT52-5.js"), __vite__mapDeps([6, 1, 2, 7])).then(
    (t) => ({
      default: t.DrawingCanvas,
    })
  )
);

const Ue = z(() =>
  _(
    () => import("./index-GZMCoX-E.js"),
    __vite__mapDeps([8, 1, 2, 9, 10])
  ).then((t) => ({
    default: t.VerificationModal,
  }))
);

const Ve = z(() =>
  _(
    () => import("./index-CdjLILCq.js"),
    __vite__mapDeps([11, 1, 2, 9, 12])
  ).then((t) => ({
    default: t.ReportModal,
  }))
);

function xe(t) {
  return new Date(t).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function Re({
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
  const [_, S] = isFollowing(false);
  const { openModal, closeModal } = o();

  const O = q(() => {
    S(true);
  }, []);

  const p = q(() => {
    openModal(a(Ue, { onClose: closeModal }));
  }, [openModal, closeModal]);

  const y = q(() => {
    if (isBlocked) {
      onBlockUser?.();
      return;
    }
    openModal(
      a(_e, {
        username: profile.username || "",
        displayName: profile.displayName,
        avatar: profile.avatar,
        onConfirm: () => onBlockUser?.(),
        onClose: closeModal,
      })
    );
  }, [isBlocked, onBlockUser, openModal, closeModal, profile]);

  const F = q(() => {
    openModal(
      a(Ve, { targetType: "user", targetId: profile.id, onClose: closeModal })
    );
  }, [openModal, closeModal, profile.id]);

  const $ = q(() => {
    S(false);
  }, []);

  const x = q(async () => {
    try {
      await onBannerUpdate.updateProfile({ bannerId: null });
      onBannerUpdate?.(null);
    } catch (D) {
      console.error("Failed to delete banner:", D);
    }
  }, [onBannerUpdate]);

  const R = q(
    async (D) => {
      try {
        const [E, z] = D.split(",");
        const Q = E.match(/:(.*?);/)?.[1] || "image/png";
        const q = atob(z);
        const Y = new Uint8Array(q.length);
        for (let T = 0; T < q.length; T++) {
          Y[T] = q.charCodeAt(T);
        }
        const j = new Blob([Y], { type: Q });
        const K = new File([j], "banner.png", { type: "image/png" });
        const k = await isFollowLoading.uploadMedia(K);
        await onBannerUpdate.updateProfile({ bannerId: k.id });

        onBannerUpdate?.({
          id: k.id,
          type: "image",
          url: k.url,
          width: k.width,
          height: k.height,
        });
      } catch (E) {
        console.error("Failed to upload banner:", E);
        profile.error("Не удалось загрузить баннер");
        throw E;
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
                  onClick: O,
                  title: "Нарисовать баннер",
                  children: a(onEditProfile, { size: 20 }),
                }),
                profile.banner?.url &&
                  a("button", {
                    className: `${i.bannerActionButton} ${i.deleteBannerButton}`,
                    onClick: x,
                    title: "Удалить баннер",
                    children: a(w, { size: 20 }),
                  }),
              ],
            }),
        ],
      }),
      _ &&
        a(l, {
          fallback: null,
          children: a(Ee, { isOpen: _, onClose: $, onSave: R, mode: "banner" }),
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
                a(wt, {
                  isOwnProfile: isOwnProfile,
                  isFollowing: isFollowing,
                  isRequested: isRequested,
                  isFollowLoading: isFollowLoading,
                  isVerified: profile.isVerified,
                  isBlocked: isBlocked,
                  onEditProfile: onEditProfile,
                  onToggleFollow: onToggleFollow,
                  onVerificationRequest: p,
                  onBlockUser: y,
                  onReportUser: F,
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
                    a(gt, {
                      isPhone: true,
                      followers: profile.stats?.followers ?? 0,
                      following: profile.stats?.following ?? 0,
                      onFollowersClick: onFollowersClick,
                      onFollowingClick: onFollowingClick,
                    }),
                    a("div", {
                      className: i.mobileActions,
                      children: a(wt, {
                        isOwnProfile: isOwnProfile,
                        isFollowing: isFollowing,
                        isRequested: isRequested,
                        isFollowLoading: isFollowLoading,
                        isVerified: profile.isVerified,
                        isBlocked: isBlocked,
                        onEditProfile: onEditProfile,
                        onToggleFollow: onToggleFollow,
                        onVerificationRequest: p,
                        onBlockUser: y,
                        onReportUser: F,
                      }),
                    }),
                  ],
                }),
              profile.bio &&
                a("p", { className: i.bio, children: profile.bio }),
              !isPhone &&
                a(gt, {
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
                  children: ["Был(а) в сети: ", Se(profile.lastSeen)],
                }),
              profile.createdAt &&
                a("span", {
                  className: i.metaItem,
                  children: [
                    a(Yt, {}),
                    " Регистрация: ",
                    xe(profile.createdAt),
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
function Te({ profile, isBlocked }) {
  const [d, u] = d("posts");
  const [s, c] = d([]);
  const [C, A] = d(false);
  const [v, I] = d(null);
  const [V, P] = d([]);
  const [L, r] = d(false);
  const [_, S] = d(null);
  const [b, B] = d(false);
  const [O, p] = d(null);

  const y = q(async (o, l, a) => {
    A(true);
    try {
      const g = await p.getUserWall(o, {
        cursor: a,
        limit: 20,
        pinnedPostId: l,
      });

      const g_data = g.data;

      c((h) => (a ? [...h, ...g_data] : g_data));

      I(g.nextCursor);
    } catch (g) {
      console.error("Failed to fetch wall posts:", g);
    } finally {
      A(false);
    }
  }, []);

  const F = q(
    async (o, l) => {
      if (!b) {
        r(true);
      }

      p(null);
      try {
        const a = await p.getUserLikedPosts(o, { cursor: l, limit: 20 });
        const a_data = a.data;

        P((f) => (l ? [...f, ...a_data] : a_data));

        S(a.nextCursor);
        B(true);
      } catch (a) {
        console.error("Failed to fetch liked posts:", a);

        if (a && typeof a == "object" && "status" in a && a.status === 403) {
          p("Лайки скрыты настройками приватности");
        }
      } finally {
        r(false);
      }
    },
    [b]
  );

  y(() => {
    if (profile && !isBlocked) {
      y(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile?.id, isBlocked, y]);

  y(() => {
    if (d === "likes" && profile) {
      F(profile.id);
    }
  }, [d, profile?.id, F]);

  const $ = c((o) => o.posts);

  const x = c((o) => o.highlightedPostId);

  const R = c((o) => o._lastPostEdit);

  const D = c((o) => o._lastLikeUpdate);

  const E = c((o) => o._lastRepostUpdate);

  const z = c((o) => o._lastStatsBatch);

  y(() => {
    if (!x || !profile) {
      return;
    }
    const o = $.find((l) => l.id === x);

    if (o && o.wallOwnerId === profile.id && !s.some((l) => l.id === x)) {
      c((l) => [o, ...l]);
    }
  }, [x, $, profile?.id, s]);

  y(() => {
    if (s.length !== 0) {
      c((o) =>
        o.map((l) => {
          const a = $.find((g) => g.id === l.id);
          return a &&
            (a.editedAt !== l.editedAt || a.attachments !== l.attachments)
            ? a
            : l;
        })
      );
    }
  }, [$]);

  y(() => {
    if (R) {
      c((o) =>
        o.map((l) =>
          l.id === R.postId
            ? { ...l, text: R.text, spans: R.spans, editedAt: R.editedAt }
            : l
        )
      );
    }
  }, [R]);

  y(() => {
    if (!D) {
      return;
    }
    const { postId, myReaction, totalDelta } = D;

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

    P((f) => f.map(g));
  }, [D]);

  y(() => {
    if (!E) {
      return;
    }
    const { postId, reposted, countDelta } = E;

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

    P((f) => f.map(g));
  }, [E]);

  y(() => {
    if (!z || z.length === 0) {
      return;
    }

    const o = new Map(z.map((a) => [a.id, a]));

    const l = (a) => {
      const g = o.get(a.id);
      return g
        ? {
            ...a,
            reactions: { ...a.reactions, total: g.likesCount },
            stats: {
              ...a.stats,
              views: g.viewsCount,
              comments: g.commentsCount,
              reposts: g.repostsCount,
            },
            dominantEmoji: g.dominantEmoji,
          }
        : a;
    };

    c((a) => a.map(l));

    P((a) => a.map(l));
  }, [z]);

  const Q = q(() => {
    if (profile && !C) {
      if (d === "posts" && v) {
        y(profile.username || profile.id, profile.pinnedPostId, v);
      } else if (d === "likes" && _ && !L) {
        F(profile.id, _);
      }
    }
  }, [profile, d, v, _, C, L, y, F]);

  const q = q(
    async (o) => {
      if (!profile) {
        return;
      }
      const l = profile.pinnedPostId === o;
      try {
        if (l) {
          await r.unpinPost(o);
        } else {
          await r.pinPost(o);
        }
      } catch (a) {
        console.error("Failed to pin/unpin post:", a);
        throw a;
      }
    },
    [profile]
  );

  const Y = q(async () => {
    if (profile) {
      p.invalidateWallCache(profile.username || profile.id);
      await y(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile, y]);

  const j = q(
    (o) => {
      c((l) => l.filter((a) => a.id !== o));

      P((l) => l.filter((a) => a.id !== o));

      if (profile) {
        p.removePostFromWallCache(profile.username || profile.id, o);
      }
    },
    [profile]
  );

  const K = q((o) => {
    u(o);
  }, []);

  const k = q(() => {
    c([]);
    I(null);
    P([]);
    B(false);
    S(null);
    p(null);
    u("posts");
  }, []);

  return {
    posts: d === "posts" ? s : V,
    postsLoading: d === "posts" ? C : L,
    nextCursor: d === "posts" ? v : _,
    activeTab: d,
    likesError: O,
    hasLoadedLikes: b,
    handleLoadMore: Q,
    handlePinPost: q,
    refreshPosts: Y,
    removePost: j,
    handleTabChange: K,
    resetPosts: k,
  };
}
function We({ username }) {
  const n = posts((h) => h.profile);

  const d = n?.id;

  const u = posts((h) => h.setProfile);

  const [s, c] = d(null);
  const [C, A] = d(true);
  const [v, I] = d(null);
  const [V, P] = d("none");
  const [L, r] = d(false);
  const [_, S] = d(false);
  const [b, B] = d(false);
  const O = !!(n && s && n.id === s.id);
  const p = V === "following";
  const y = V === "requested";
  const F = s?.interaction?.isFollowedBy ?? false;
  const $ = s?.interaction?.isBlockedBy ?? false;

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
  } = Te({ profile: s, isBlocked: _ });

  y(() => {
    if (!s || O || !n) {
      P("none");
      S(false);
      return;
    }

    if (s.interaction) {
      s.interaction.isFollowing
        ? P("following")
        : s.interaction.hasOutgoingRequest
        ? P("requested")
        : P("none");

      S(s.interaction.isBlocking);
    }
  }, [s?.id, O, n]);
  const J = A(true);

  y(() => {
    J.current = true;

    return () => {
      J.current = false;
    };
  }, []);

  y(() => {
    const h = new AbortController();

    (async () => {
      c(null);
      A(true);
      I(null);
      P("none");
      S(false);
      resetPosts();
      try {
        const U = username
          ? await r.getProfileByUsername(username)
          : await r.getMyProfile();
        if (!J.current || h.signal.aborted) {
          return;
        }

        if (U) {
          c(U);
        }
      } catch (U) {
        if (!J.current || h.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", U);
        I("Профиль не найден");
      } finally {
        if (J.current && !h.signal.aborted) {
          A(false);
        }
      }
    })();

    return () => {
      h.abort();
    };
  }, [username, d, resetPosts]);

  const tt = handleLoadMore(async () => {
    if (!(!s || L)) {
      r(true);
      try {
        const h = await C.followUser(s.id);
        P(h);

        if (h === "following" && s.stats) {
          const M = s.stats.followers + 1;

          c((U) =>
            U?.stats ? { ...U, stats: { ...U.stats, followers: M } } : U
          );

          if (s.username) {
            r.updateProfileCache(s.username, {
              stats: { ...s.stats, followers: M },
            });
          }
        }
      } catch (h) {
        console.error("Failed to follow:", h);
      } finally {
        r(false);
      }
    }
  }, [s, L]);

  const o = handleLoadMore(async () => {
    if (!(!s || L)) {
      r(true);
      try {
        await C.unfollowUser(s.id);
        P("none");

        if (p && s.stats) {
          const h = s.stats.followers - 1;

          c((M) =>
            M?.stats ? { ...M, stats: { ...M.stats, followers: h } } : M
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
        r(false);
      }
    }
  }, [s, p, L]);

  const l = handleLoadMore(async () => {
    if (p || y) {
      await o();
    } else {
      await tt();
    }
  }, [p, y, tt, o]);

  const a = handleLoadMore(
    async (h) => {
      if (!s) {
        return;
      }
      const U = s.pinnedPostId === h ? null : h;
      const Z = { ...s, pinnedPostId: U };
      c(Z);

      if (n) {
        u(Z);
      }

      try {
        await handlePinPost(h);
      } catch {
        c(s);

        if (n) {
          u(s);
        }
      }
    },
    [s, n, u, handlePinPost]
  );

  const g = handleLoadMore(async () => {
    if (!(!s || b || O)) {
      B(true);
      try {
        if (_) {
          await C.unblockUser(s.id);
          S(false);
          username.success("Пользователь разблокирован");
        } else {
          await C.blockUser(s.id);
          S(true);
          username.success("Пользователь заблокирован");
          p && P("none");
        }

        if (s.username) {
          r.invalidateProfileCache(s.username);
        }
      } catch (h) {
        console.error("Failed to toggle block:", h);
        username.error("Не удалось выполнить действие");
      } finally {
        B(false);
      }
    }
  }, [s, _, b, O, p]);

  const f = handleLoadMore(
    (h) => {
      c((M) => (M ? { ...M, banner: h } : null));

      if (n) {
        u({ ...n, banner: h });
      }
    },
    [n, u]
  );

  return {
    profile: s,
    loading: C,
    error: v,
    posts: posts,
    postsLoading: postsLoading,
    nextCursor: nextCursor,
    isOwnProfile: O,
    isFollowing: p,
    isFollowedBy: F,
    isBlockedBy: $,
    isRequested: y,
    isFollowLoading: L,
    handleToggleFollow: l,
    handleFollow: tt,
    handleUnfollow: o,
    handleLoadMore: handleLoadMore,
    handlePinPost: a,
    refreshPosts: refreshPosts,
    removePost: removePost,
    activeTab: activeTab,
    handleTabChange: handleTabChange,
    likesError: likesError,
    hasLoadedLikes: hasLoadedLikes,
    updateBanner: f,
    isBlocked: _,
    handleBlockUser: g,
  };
}

const Oe = z(() =>
  _(
    () => import("./index-BbFs5PEb.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5])
  ).then((t) => ({
    default: t.SettingsModal,
  }))
);

const pt = z(() =>
  _(
    () => import("./index-D1rr3TT2.js"),
    __vite__mapDeps([13, 1, 2, 14, 8, 9, 10, 15])
  ).then((t) => ({
    default: t.UserListModal,
  }))
);

export const Profile = ({ username }) => {
  const n = handleFollow();
  const d = isFollowedBy();
  const { openModal, closeModal } = o();

  const c = c((w) => w.createPost);

  const C = c((w) => w.profileScrollByUser);

  const A = c((w) => w.profileMeasuredHeightsByUser);

  const v = c((w) => w.setProfileMeasuredHeights);

  const I = username ? C[t] ?? 0 : 0;
  const V = username ? A[t] : undefined;

  const P = handleLoadMore(
    (w) => {
      if (username) {
        v(username, w);
      }
    },
    [username, v]
  );

  const L = A(null);

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
  } = We({ username: username });

  const o = handleLoadMore(() => {
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

  const l = () => {
    openModal(a(Oe, { onClose: closeModal }));
  };

  const a = handleLoadMore(() => {
    if (profile) {
      openModal(
        a(pt, { userId: profile.id, type: "followers", title: "Подписчики" })
      );
    }
  }, [profile, openModal]);

  const g = handleLoadMore(() => {
    if (profile) {
      openModal(
        a(pt, { userId: profile.id, type: "following", title: "Подписки" })
      );
    }
  }, [profile, openModal]);

  const f = async (w, et, ct, kt) => {
    if (profile) {
      await c({
        wallOwnerId: profile.id,
        text: w,
        spans: et,
        attachments: ct,
        poll: kt,
      });

      refreshPosts();
    }
  };

  const h = handleLoadMore(() => {
    if (profile) {
      openModal(
        a(c_1, {
          wallOwnerId: profile.id,
          placeholder: `Написать на стене ${profile.displayName}`,
          onPostCreated: refreshPosts,
        })
      );
    }
  }, [profile, openModal, refreshPosts]);

  isFollowing(() => {
    if (username && L.current !== username && posts.length !== 0) {
      if (I <= 0) {
        L.current = username;
        return;
      }
      L.current = username;

      requestAnimationFrame(() => {
        window.scrollTo(0, I);
      });
    }
  }, [username, posts.length, I]);

  const M = handleTabChange(() => {
    if (activeTab !== "posts" || !profile?.pinnedPostId) {
      return posts;
    }
    const w = posts.find((et) => et.id === profile.pinnedPostId);
    return w
      ? [w, ...posts.filter((et) => et.id !== profile.pinnedPostId)]
      : posts;
  }, [posts, profile?.pinnedPostId, activeTab]);

  const U = handleTabChange(() => {
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

  const Z =
    isOwnProfile ||
    profile?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const Ct = handleTabChange(() => {
    const w = ["Посты"];

    if (Z) {
      w.push("Лайки");
    }

    return w;
  }, [Z]);

  const vt = handleLoadMore(
    (w) => {
      handleTabChange(Z ? (w === 0 ? "posts" : "likes") : "posts");
    },
    [handleTabChange, Z]
  );

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
          a(Re, {
            profile: profile,
            isOwnProfile: isOwnProfile,
            isFollowing: isFollowing,
            isRequested: isRequested,
            isFollowLoading: isFollowLoading,
            isBlocked: isBlocked,
            isFollowedBy: isFollowedBy,
            isPhone: n,
            onEditProfile: l,
            onToggleFollow: o,
            onBlockUser: handleBlockUser,
            onFollowersClick: a,
            onFollowingClick: g,
            onBannerUpdate: updateBanner,
          }),
          a("div", {
            className: i.tabsWrapper,
            children: a(likesError, {
              className: i.tabs,
              tabs: Ct,
              activeIndex: activeTab === "posts" ? 0 : 1,
              onChange: vt,
            }),
          }),
          U &&
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
                    a(removePost, {
                      onSubmit: f,
                      placeholder: isOwnProfile
                        ? "Что нового?"
                        : `Написать на стене ${profile.displayName}`,
                    }),
                  ],
                }),
                a(postsLoading, {
                  variant: "secondary",
                  className: i.writePostButton,
                  onClick: h,
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
            : M.length > 0
            ? a(V, {
                posts: M,
                renderPost: (w, et, ct) =>
                  a(a_1, {
                    post: w,
                    isOnOwnProfile: isOwnProfile && activeTab === "posts",
                    isPinned:
                      activeTab === "posts" && profile?.pinnedPostId === w.id,
                    isHighlighted: ct,
                    source: "profile",
                    sourceContext: profile?.id ?? "",
                    onPin:
                      isOwnProfile && activeTab === "posts"
                        ? handlePinPost
                        : undefined,
                    onDelete: activeTab === "posts" ? removePost : undefined,
                  }),
                hasMore: !!nextCursor,
                isLoadingMore: postsLoading,
                onLoadMore: handleLoadMore,
                initialMeasuredHeights: V,
                onMeasuredHeightsChange: P,
              })
            : postsLoading && M.length === 0
            ? a(P, { count: 4 })
            : a("div", {
                className: i.emptyPosts,
                children: activeTab === "posts" ? "Нет постов" : "Нет лайков",
              }),
        ],
      });
};

export { Profile as Profile };
