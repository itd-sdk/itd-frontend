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
  c as z_1,
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
  J,
  K,
  V,
  a as a_1,
  P,
} from "./index-7xRaK15k.js";

import { I } from "./IconCheck-hyD5Wa0Y.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BMcD7ypu.js",
      "assets/index-7xRaK15k.js",
      "assets/index-BIOTytQQ.css",
      "assets/IconNotificationMention-DU-eTgSz.js",
      "assets/IconInfo-Cv_yEUNc.js",
      "assets/index-BdTwKvN2.css",
      "assets/index-DGybxybW.js",
      "assets/index-CQ_RleLA.css",
      "assets/index-BONoXRPG.js",
      "assets/IconCheckCircle-CQ_cymiq.js",
      "assets/index-BKxT76DO.css",
      "assets/index-BKVvj8JQ.js",
      "assets/index-B8WImXsA.css",
      "assets/index-DzK8bJxo.js",
      "assets/IconCheck-hyD5Wa0Y.js",
      "assets/index-CLsvW_1i.css",
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
      t._sentryDebugIds[n] = "a1ecdcd2-75a1-472f-9210-076e970eac08";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-a1ecdcd2-75a1-472f-9210-076e970eac08";
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

const jt = () =>
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

const Yt = "EGHz";
const Kt = "PhvM";
const Gt = "GuIY";
const Qt = "tWRu";
const Zt = "T9q8";
const Jt = "Kgvx";
const Xt = "SHOj";
const te = "L5uG";
const ee = "D44d";
const se = "Nb43";
const ne = "ZsQW";
const oe = "Ab6o";
const ae = "Q6uf";
const re = "uHY0";
const ie = "xtm3";
const le = "LWRt";
const ce = "WI9n";
const de = "CrF0";
const ue = "Vpl6";
const he = "S0qq";
const fe = "w0f2";
const me = "TZ6z";
const ge = "tt4F";
const we = "ovDf";
const pe = "QKqE";
const Pe = "od1F";
const be = "UgEx";
const ye = "qDiQ";
const ve = "kRZ1";
const Ce = "c0li";
const ke = "jOtb";

const i = {
  page: Yt,
  tabsWrapper: Kt,
  tabs: Gt,
  createPostWrapper: Qt,
  writePostButton: Zt,
  profileCard: Jt,
  banner: Xt,
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
  error: ve,
  bannerPlaceholder: Ce,
  emptyPosts: ke,
};

const Ne = "WXwb";
const Ie = "Mxp5";
const Le = "ocUp";
const Me = "d7aL";
const Ae = "uHK6";
const _e = "sheL";

const st = {
  content: Ne,
  title: Ie,
  description: Le,
  username: Me,
  warning: Ae,
  actions: _e,
};

function Be({ username, displayName, avatar, onConfirm, onClose }) {
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
  const v = s % 100;
  return v >= 11 && v <= 19 ? u : c === 1 ? n : c >= 2 && c <= 4 ? d : u;
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
const De = z_1(() =>
  _(
    () => import("./index-BMcD7ypu.js"),
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
  const [A, C] = isRequested(false);
  const U = k()?.subscription?.isActive;
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
              !U &&
                a(B, {
                  variant: "secondary",
                  onClick: () => C(true),
                  fullWidth: fullWidth,
                  children: "ИТД НУКСТА",
                }),
            ],
          }),
          A &&
            a(l, {
              fallback: null,
              children: a(De, { isOpen: A, onClose: () => C(false) }),
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
  ...v
}) {
  const C = (() => {
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
      C.length > 0 &&
        a(D, {
          trigger: a(B, {
            variant: "secondary",
            iconOnly: true,
            children: a(h, { size: 18 }),
          }),
          items: C,
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
      a(Fe, { isOwnProfile: isOwnProfile, isVerified: isVerified, ...v }),
    ],
  });
}

const Ee = z_1(() =>
  _(() => import("./index-DGybxybW.js"), __vite__mapDeps([6, 1, 2, 7])).then(
    (t) => ({
      default: t.DrawingCanvas,
    })
  )
);

const xe = z_1(() =>
  _(
    () => import("./index-BONoXRPG.js"),
    __vite__mapDeps([8, 1, 2, 9, 10])
  ).then((t) => ({
    default: t.VerificationModal,
  }))
);

const Ue = z_1(() =>
  _(
    () => import("./index-BKVvj8JQ.js"),
    __vite__mapDeps([11, 1, 2, 9, 12])
  ).then((t) => ({
    default: t.ReportModal,
  }))
);

function Re(t) {
  return new Date(t).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function Te({
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
  const [B, S] = isFollowing(false);
  const { openModal, closeModal } = o();

  const O = q(() => {
    S(true);
  }, []);

  const p = q(() => {
    openModal(a(xe, { onClose: closeModal }));
  }, [openModal, closeModal]);

  const y = q(() => {
    if (isBlocked) {
      onBlockUser?.();
      return;
    }
    openModal(
      a(Be, {
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
      a(Ue, { targetType: "user", targetId: profile.id, onClose: closeModal })
    );
  }, [openModal, closeModal, profile.id]);

  const $ = q(() => {
    S(false);
  }, []);

  const R = q(async () => {
    try {
      await onBannerUpdate.updateProfile({ bannerId: null });
      onBannerUpdate?.(null);
    } catch (D) {
      console.error("Failed to delete banner:", D);
    }
  }, [onBannerUpdate]);

  const T = q(
    async (D) => {
      try {
        const [E, H] = D.split(",");
        const Z = E.match(/:(.*?);/)?.[1] || "image/png";
        const q = atob(H);
        const j = new Uint8Array(q.length);
        for (let V = 0; V < q.length; V++) {
          j[V] = q.charCodeAt(V);
        }
        const Y = new Blob([j], { type: Z });
        const J = new File([Y], "banner.png", { type: "image/png" });
        const k = await isFollowLoading.uploadMedia(J);
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
                  children: a(isFollowedBy, { size: 20 }),
                }),
                profile.banner?.url &&
                  a("button", {
                    className: `${i.bannerActionButton} ${i.deleteBannerButton}`,
                    onClick: R,
                    title: "Удалить баннер",
                    children: a(w, { size: 20 }),
                  }),
              ],
            }),
        ],
      }),
      B &&
        a(l, {
          fallback: null,
          children: a(Ee, { isOpen: B, onClose: $, onSave: T, mode: "banner" }),
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
                  a(onBlockUser, {
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
                    a(jt, {}),
                    " Регистрация: ",
                    Re(profile.createdAt),
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
function Ve({ profile, isBlocked }) {
  const [d, u] = d("posts");
  const [s, c] = d([]);
  const [v, A] = d(false);
  const [C, I] = d(null);
  const [U, P] = d([]);
  const [L, r] = d(false);
  const [B, S] = d(null);
  const [b, _] = d(false);
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
        _(true);
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

  const R = c((o) => o.highlightedPostId);

  const T = c((o) => o._lastPostEdit);

  const D = c((o) => o._lastLikeUpdate);

  const E = c((o) => o._lastRepostUpdate);

  const H = c((o) => o._lastStatsBatch);

  y(() => {
    if (!R || !profile) {
      return;
    }
    const o = $.find((l) => l.id === R);

    if (o && o.wallOwnerId === profile.id && !s.some((l) => l.id === R)) {
      c((l) => [o, ...l]);
    }
  }, [R, $, profile?.id, s]);

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
    if (T) {
      c((o) =>
        o.map((l) =>
          l.id === T.postId
            ? { ...l, text: T.text, spans: T.spans, editedAt: T.editedAt }
            : l
        )
      );
    }
  }, [T]);

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
    if (!H || H.length === 0) {
      return;
    }

    const o = new Map(H.map((a) => [a.id, a]));

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
  }, [H]);

  const Z = q(() => {
    if (profile && !v) {
      if (d === "posts" && C) {
        y(profile.username || profile.id, profile.pinnedPostId, C);
      } else if (d === "likes" && B && !L) {
        F(profile.id, B);
      }
    }
  }, [profile, d, C, B, v, L, y, F]);

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

  const j = q(async () => {
    if (profile) {
      p.invalidateWallCache(profile.username || profile.id);
      await y(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile, y]);

  const Y = q(
    (o) => {
      c((l) => l.filter((a) => a.id !== o));

      P((l) => l.filter((a) => a.id !== o));

      if (profile) {
        p.removePostFromWallCache(profile.username || profile.id, o);
      }
    },
    [profile]
  );

  const J = q((o) => {
    u(o);
  }, []);

  const k = q(() => {
    c([]);
    I(null);
    P([]);
    _(false);
    S(null);
    p(null);
    u("posts");
  }, []);

  return {
    posts: d === "posts" ? s : U,
    postsLoading: d === "posts" ? v : L,
    nextCursor: d === "posts" ? C : B,
    activeTab: d,
    likesError: O,
    hasLoadedLikes: b,
    handleLoadMore: Z,
    handlePinPost: q,
    refreshPosts: j,
    removePost: Y,
    handleTabChange: J,
    resetPosts: k,
  };
}
function We({ username }) {
  const n = x((h) => h.profile);

  const d = n?.id;

  const u = x((h) => h.setProfile);

  const [s, c] = d(null);
  const [v, A] = d(true);
  const [C, I] = d(null);
  const [U, P] = d("none");
  const [L, r] = d(false);
  const [B, S] = d(false);
  const [b, _] = d(false);
  const O = !!(n && s && n.id === s.id);
  const p = U === "following";
  const y = U === "requested";
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
  } = Ve({ profile: s, isBlocked: B });

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
  const K = A(true);

  y(() => {
    K.current = true;

    return () => {
      K.current = false;
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
        const x = username
          ? await r.getProfileByUsername(username)
          : await r.getMyProfile();
        if (!K.current || h.signal.aborted) {
          return;
        }

        if (x) {
          c(x);
        }
      } catch (x) {
        if (!K.current || h.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", x);
        I("Профиль не найден");
      } finally {
        if (K.current && !h.signal.aborted) {
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

          c((x) =>
            x?.stats ? { ...x, stats: { ...x.stats, followers: M } } : x
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
      const x = s.pinnedPostId === h ? null : h;
      const X = { ...s, pinnedPostId: x };
      c(X);

      if (n) {
        u(X);
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
      _(true);
      try {
        if (B) {
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
        _(false);
      }
    }
  }, [s, B, b, O, p]);

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
    loading: v,
    error: C,
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
    isBlocked: B,
    handleBlockUser: g,
  };
}

const Oe = z_1(() =>
  _(
    () => import("./index-BMcD7ypu.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5])
  ).then((t) => ({
    default: t.SettingsModal,
  }))
);

const pt = z_1(() =>
  _(
    () => import("./index-DzK8bJxo.js"),
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

  const v = c((w) => w.profileScrollByUser);

  const A = c((w) => w.profileMeasuredHeightsByUser);

  const C = c((w) => w.setProfileMeasuredHeights);

  const I = username ? v[t] ?? 0 : 0;
  const U = username ? A[t] : undefined;

  const P = handleLoadMore(
    (w) => {
      if (username) {
        C(username, w);
      }
    },
    [username, C]
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
        a(handleUnfollow, {
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

  const M = isFollowLoading(() => {
    if (activeTab !== "posts" || !profile?.pinnedPostId) {
      return posts;
    }
    const w = posts.find((et) => et.id === profile.pinnedPostId);
    return w
      ? [w, ...posts.filter((et) => et.id !== profile.pinnedPostId)]
      : posts;
  }, [posts, profile?.pinnedPostId, activeTab]);

  const x = isFollowLoading(() => {
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

  const X =
    isOwnProfile ||
    profile?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const vt = isFollowLoading(() => {
    const w = ["Посты"];

    if (X) {
      w.push("Лайки");
    }

    return w;
  }, [X]);

  const Ct = handleLoadMore(
    (w) => {
      handleTabChange(X ? (w === 0 ? "posts" : "likes") : "posts");
    },
    [handleTabChange, X]
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
          a(Te, {
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
            children: a(removePost, {
              className: i.tabs,
              tabs: vt,
              activeIndex: activeTab === "posts" ? 0 : 1,
              onChange: Ct,
            }),
          }),
          x &&
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
                    a(likesError, {
                      onSubmit: f,
                      placeholder: isOwnProfile
                        ? "Что нового?"
                        : `Написать на стене ${profile.displayName}`,
                    }),
                  ],
                }),
                a(loading, {
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
            ? a(handleTabChange, {
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
                initialMeasuredHeights: U,
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
