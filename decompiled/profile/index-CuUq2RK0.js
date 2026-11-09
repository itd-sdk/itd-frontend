import {
  u,
  f,
  B,
  M,
  D,
  I,
  g,
  i,
  d,
  o as j_1,
  k,
  z,
  S,
  l,
  m,
  n,
  q,
  o,
  t,
  r as r_1,
  s,
  v,
  U,
  p,
  h,
  b,
  q as q_1,
  A,
  x,
  H,
  y,
  d as d_1,
  E,
  F,
  G,
  _,
  T,
  u as u_1,
  J,
  K,
  L,
  V,
  c,
  P,
} from "./index-dnACTU3c.js";

import { I as I_1 } from "./IconCheck-CQsVfIr3.js";
import { d as d_2 } from "./index-DmKJ6eQK.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-IG9jWvj0.js",
      "assets/index-dnACTU3c.js",
      "assets/index-BJv86F6a.css",
      "assets/index-CTpGM1z1.js",
      "assets/index-Dq5aMN85.css",
      "assets/index-DmKJ6eQK.js",
      "assets/index-HFlVu6AJ.css",
      "assets/IconInfo-CX4HcoRT.js",
      "assets/PhoneAccess.module-BmvgF3ui.js",
      "assets/PhoneAccess-hktQQ4g6.css",
      "assets/IconNotificationMention-C7x9C0uS.js",
      "assets/IconChevronRight-BQQAUGem.js",
      "assets/IconChevronLeft-Bhjo82wQ.js",
      "assets/index-OtSlVhlu.css",
      "assets/index-CGa45akZ.js",
      "assets/index-Bd84PZTL.css",
      "assets/index-D8VDcA5_.js",
      "assets/IconCheckCircle-BI2tW35G.js",
      "assets/index-m7VxALd7.css",
      "assets/index-XmQeCW1p.js",
      "assets/index-CkW6vViD.css",
      "assets/index-DMiYD7sT.js",
      "assets/IconCheck-CQsVfIr3.js",
      "assets/index-DXGXFupo.css",
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
    const n = new t.Error().stack;

    if (n) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[n] = "3f5faf97-e8dd-4260-ba0c-39630542362e";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-3f5faf97-e8dd-4260-ba0c-39630542362e";
    }
  } catch {}
})();

const Zt = ({ size = 24 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      u("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      u("path", {
        d: "M5.5 5.5L18.5 18.5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
    ],
  });

const te = () =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "none",
    children: u("path", {
      stroke: "currentColor",
      "stroke-width": "1.333",
      d: "M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333ZM10.666 1.333V4M5.333 1.333V4M2 6.667h12",
    }),
  });

const ee = "iXDW";
const se = "mike";
const ne = "dWkC";
const oe = "yhte";
const ae = "wkYQ";
const re = "U9w6";
const ie = "D7Cv";
const le = "UWbg";
const ce = "Q9W1";
const de = "I9rn";
const ue = "JWwO";
const he = "AIVw";
const fe = "tQl7";
const me = "ogUy";
const we = "Ejwu";
const ge = "PBW8";
const pe = "QI9k";
const Pe = "h4H7";
const be = "OwEw";
const ye = "RX8V";
const ve = "zrvT";
const Ce = "MMYo";
const ke = "YQvJ";
const Ie = "pdx8";
const Ne = "cbGB";
const Le = "Ukb7";
const Me = "rfqa";
const _e = "lhek";
const Be = "iex0";
const Ae = "D6U2";

const r = {
  page: ee,
  tabsWrapper: se,
  belowTabs: ne,
  createPostWrapper: oe,
  writePostButton: ae,
  profileCard: re,
  banner: ie,
  bannerActions: le,
  bannerActionButton: ce,
  deleteBannerButton: de,
  profileContent: ue,
  avatarRow: he,
  avatar: fe,
  actions: me,
  ownActions: we,
  mobileActions: ge,
  infoContainer: pe,
  userInfo: Pe,
  name: be,
  username: ye,
  bio: ve,
  metaItem: Ce,
  followsYou: ke,
  stats: Ie,
  stat: Ne,
  clickable: Le,
  statValue: Me,
  statLabel: _e,
  bannerPlaceholder: Be,
  emptyPosts: Ae,
};

const Se = "Dotm";
const De = "sd7c";
const Ee = "wlDF";
const Fe = "HkRj";
const Te = "vD4b";
const Ue = "t88M";

const et = {
  content: Se,
  title: De,
  description: Ee,
  username: Fe,
  warning: Te,
  actions: Ue,
};

function xe({ username, displayName, avatar, onConfirm, onClose }) {
  const h = () => {
    onConfirm();
    onClose();
  };
  return u(M, {
    onClose: onClose,
    showHeader: false,
    children: u("div", {
      className: et.content,
      children: [
        u(f, { src: avatar, alt: displayName, size: "lg" }),
        u("h2", {
          className: et.title,
          children: "Заблокировать пользователя?",
        }),
        u("p", {
          className: et.description,
          children: [
            "Вы уверены, что хотите заблокировать",
            " ",
            u("strong", { children: displayName }),
            username &&
              u("span", {
                className: et.username,
                children: [" (@", username, ")"],
              }),
            "?",
          ],
        }),
        u("p", {
          className: et.warning,
          children:
            "Заблокированный пользователь не сможет видеть ваш профиль и контент.",
        }),
        u("div", {
          className: et.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: () => onClose(),
              fullWidth: true,
              children: "Отмена",
            }),
            u(B, {
              variant: "danger",
              onClick: () => h(),
              fullWidth: true,
              children: "Заблокировать",
            }),
          ],
        }),
      ],
    }),
  });
}
function Pt(t, n, c, d) {
  const s = Math.abs(t);
  const h = s % 10;
  const p = s % 100;
  return p >= 11 && p <= 19 ? d : h === 1 ? n : h >= 2 && h <= 4 ? c : d;
}
function Re(t) {
  if (!t) {
    return null;
  }
  switch (t.unit) {
    case "just_now": {
      return "только что";
    }
    case "minutes": {
      const n = t.value ?? 1;
      const c = Pt(n, "минуту", "минуты", "минут");
      return `${n} ${c} назад`;
    }
    case "hours": {
      const n = t.value ?? 1;
      const c = Pt(n, "час", "часа", "часов");
      return `${n} ${c} назад`;
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
function bt(t) {
  return t >= 1000000 /* 1e6 */
    ? `${(t / 1000000) /* 1e6 */
        .toFixed(1)}M`
    : t >= 1000 /* 1e3 */
    ? `${(t / 1000) /* 1e3 */
        .toFixed(1)}K`
    : t.toString();
}
function yt({
  followers,
  following,
  isPhone = false,
  onFollowersClick,
  onFollowingClick,
}) {
  return u("div", {
    className: r.stats,
    children: [
      u("div", {
        className: `${r.stat} ${onFollowersClick ? r.clickable : ""}`,
        onClick: onFollowersClick,
        children: [
          u("span", { className: r.statValue, children: bt(followers) }),
          u("span", { className: r.statLabel, children: "подписчиков" }),
        ],
      }),
      isPhone && u("hr", {}),
      u("div", {
        className: `${r.stat} ${onFollowingClick ? r.clickable : ""}`,
        onClick: onFollowingClick,
        children: [
          u("span", { className: r.statValue, children: bt(following) }),
          u("span", { className: r.statLabel, children: "подписок" }),
        ],
      }),
    ],
  });
}
const Ve = z(() =>
  l(
    () => import("./index-IG9jWvj0.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
  ).then((t) => ({
    default: t.SubscriptionModal,
  }))
);
function We({
  isOwnProfile,
  isFollowing,
  isRequested = false,
  isFollowLoading,
  onEditProfile,
  onToggleFollow,
  fullWidth = false,
}) {
  const [B, k] = isFollowLoading(false);
  const F = j_1()?.subscription?.isActive;
  return isOwnProfile
    ? u(S, {
        children: [
          u("div", {
            className: r.ownActions,
            children: [
              u(B, {
                onClick: onEditProfile,
                fullWidth: fullWidth,
                children: "Редактировать",
              }),
              !F &&
                u(B, {
                  variant: "secondary",
                  onClick: () => k(true),
                  fullWidth: fullWidth,
                  children: "ИТД НУКСТА",
                }),
            ],
          }),
          B &&
            u(k, {
              fallback: null,
              children: u(Ve, { isOpen: B, onClose: () => k(false) }),
            }),
        ],
      })
    : u(S, {
        children: u(B, {
          variant: isFollowing || isRequested ? "secondary" : "primary",
          onClick: onToggleFollow,
          disabled: isFollowLoading,
          fullWidth: fullWidth,
          children: isFollowing
            ? u(S, { children: [u(I_1, { size: 18 }), "Вы подписаны"] })
            : isRequested
            ? "Заявка отправлена"
            : u(S, { children: [u(m, { size: 18 }), "Подписаться"] }),
        }),
      });
}
function vt({
  isOwnProfile,
  isVerified = false,
  isBlocked = false,
  onVerificationRequest,
  onBlockUser,
  onReportUser,
  ...p
}) {
  const k = (() => {
    const y = [];

    if (!isOwnProfile && onBlockUser) {
      y.push({
        id: "block",
        label: isBlocked ? "Разблокировать" : "Заблокировать",
        icon: u(Zt, { size: 18 }),
        danger: !isBlocked,
        onClick: onBlockUser,
      });
    }

    if (!isOwnProfile && onReportUser) {
      y.push({
        id: "report",
        label: "Пожаловаться",
        icon: u(i, { size: 18 }),
        danger: true,
        onClick: onReportUser,
      });
    }

    return y;
  })();
  return u("div", {
    className: r.actions,
    children: [
      k.length > 0 &&
        u(D, {
          trigger: u(B, {
            variant: "secondary",
            iconOnly: true,
            children: u(I, { size: 18 }),
          }),
          items: k,
          position: "bottom-right",
        }),
      isOwnProfile &&
        !isVerified &&
        onVerificationRequest &&
        u(B, {
          variant: "secondary",
          iconOnly: true,
          onClick: onVerificationRequest,
          children: u(g, { size: 18 }),
        }),
      u(We, { isOwnProfile: isOwnProfile, isVerified: isVerified, ...p }),
    ],
  });
}

const Oe = z(() =>
  l(() => import("./index-CGa45akZ.js"), __vite__mapDeps([14, 1, 2, 15])).then(
    (t) => ({
      default: t.DrawingCanvas,
    })
  )
);

const $e = z(() =>
  l(
    () => import("./index-D8VDcA5_.js"),
    __vite__mapDeps([16, 1, 2, 17, 18])
  ).then((t) => ({
    default: t.VerificationModal,
  }))
);

const He = z(() =>
  l(
    () => import("./index-XmQeCW1p.js"),
    __vite__mapDeps([19, 1, 2, 17, 20])
  ).then((t) => ({
    default: t.ReportModal,
  }))
);

function ze(t) {
  return new Date(t).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function qe({
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
  const [I, D] = isRequested(false);
  const { openModal, closeModal } = isOwnProfile();

  const T = q(() => {
    D(true);
  }, []);

  const U = q(() => {
    openModal(u($e, { onClose: closeModal }));
  }, [openModal, closeModal]);

  const M = q(() => {
    if (isBlocked) {
      onBlockUser?.();
      return;
    }
    openModal(
      u(xe, {
        username: profile.username || "",
        displayName: profile.displayName,
        avatar: profile.avatar,
        onConfirm: () => onBlockUser?.(),
        onClose: closeModal,
      })
    );
  }, [isBlocked, onBlockUser, openModal, closeModal, profile]);

  const _ = q(() => {
    openModal(
      u(He, { targetType: "user", targetId: profile.id, onClose: closeModal })
    );
  }, [openModal, closeModal, profile.id]);

  const O = q(() => {
    D(false);
  }, []);

  const R = q(() => {
    openModal(
      u(d_2, {
        title: "Удалить баннер?",
        message:
          "Баннер будет удалён из профиля. Это действие нельзя отменить.",
        confirmText: "Удалить",
        danger: true,
        onConfirm: async () => {
          try {
            await o.updateProfile({ bannerId: null });
            onBannerUpdate?.(null);
          } catch (E) {
            console.error("Failed to delete banner:", E);
            profile.error("Не удалось удалить баннер");
            throw E;
          }
        },
        onClose: closeModal,
      })
    );
  }, [openModal, closeModal, onBannerUpdate]);

  const V = q(
    async (E, $) => {
      try {
        if (!$) {
          throw new Error("Banner drawing is missing");
        }
        const A = await r_1.uploadBannerDrawing($);
        await o.updateProfile({ bannerId: A.id });

        onBannerUpdate?.({
          id: A.id,
          type: "image",
          url: A.url,
          width: A.width,
          height: A.height,
        });
      } catch (A) {
        console.error("Failed to upload banner:", A);
        profile.error("Не удалось загрузить баннер");
        throw A;
      }
    },
    [onBannerUpdate]
  );

  return u("div", {
    className: r.profileCard,
    children: [
      u("div", {
        className: r.banner,
        children: [
          profile.banner?.url
            ? u("img", { src: profile.banner.url, alt: "Banner" })
            : u("div", { className: r.bannerPlaceholder }),
          isOwnProfile &&
            u("div", {
              className: r.bannerActions,
              children: [
                u("button", {
                  className: r.bannerActionButton,
                  onClick: T,
                  title: "Нарисовать баннер",
                  children: u(isFollowLoading, { size: 20 }),
                }),
                profile.banner?.url &&
                  u("button", {
                    className: `${r.bannerActionButton} ${r.deleteBannerButton}`,
                    onClick: R,
                    title: "Удалить баннер",
                    children: u(openModal, { size: 20 }),
                  }),
              ],
            }),
        ],
      }),
      I &&
        u(onEditProfile, {
          fallback: null,
          children: u(Oe, { isOpen: I, onClose: O, onSave: V, mode: "banner" }),
        }),
      u("div", {
        className: r.profileContent,
        children: [
          u("div", {
            className: r.avatarRow,
            children: [
              u(f, {
                src: profile.avatar,
                alt: profile.displayName,
                size: "lg",
                online: profile.online,
                className: r.avatar,
              }),
              !isPhone &&
                u(vt, {
                  isOwnProfile: isOwnProfile,
                  isFollowing: isFollowing,
                  isRequested: isRequested,
                  isFollowLoading: isFollowLoading,
                  isVerified: profile.isVerified,
                  isBlocked: isBlocked,
                  onEditProfile: onEditProfile,
                  onToggleFollow: onToggleFollow,
                  onVerificationRequest: U,
                  onBlockUser: M,
                  onReportUser: _,
                }),
            ],
          }),
          u("div", {
            className: r.infoContainer,
            children: [
              u("div", {
                className: r.userInfo,
                children: [
                  u(U, {
                    name: profile.displayName,
                    verified: profile.isVerified,
                    hasNuksta: profile.hasNuksta,
                    pin: profile.pin,
                    size: "lg",
                    className: r.name,
                  }),
                  profile.username &&
                    u("span", {
                      className: r.username,
                      children: ["@", profile.username],
                    }),
                ],
              }),
              isPhone &&
                u(S, {
                  children: [
                    u(yt, {
                      isPhone: true,
                      followers: profile.stats?.followers ?? 0,
                      following: profile.stats?.following ?? 0,
                      onFollowersClick: onFollowersClick,
                      onFollowingClick: onFollowingClick,
                    }),
                    u("div", {
                      className: r.mobileActions,
                      children: u(vt, {
                        isOwnProfile: isOwnProfile,
                        isFollowing: isFollowing,
                        isRequested: isRequested,
                        isFollowLoading: isFollowLoading,
                        isVerified: profile.isVerified,
                        isBlocked: isBlocked,
                        onEditProfile: onEditProfile,
                        onToggleFollow: onToggleFollow,
                        onVerificationRequest: U,
                        onBlockUser: M,
                        onReportUser: _,
                      }),
                    }),
                  ],
                }),
              profile.bio &&
                u("p", { className: r.bio, children: profile.bio }),
              !isPhone &&
                u(yt, {
                  followers: profile.stats?.followers ?? 0,
                  following: profile.stats?.following ?? 0,
                  onFollowersClick: onFollowersClick,
                  onFollowingClick: onFollowingClick,
                }),
              !isOwnProfile &&
                !profile.online &&
                profile.lastSeen &&
                u("span", {
                  className: r.metaItem,
                  children: ["Был(а) в сети: ", Re(profile.lastSeen)],
                }),
              profile.createdAt &&
                u("span", {
                  className: r.metaItem,
                  children: [
                    u(te, {}),
                    " Регистрация: ",
                    ze(profile.createdAt),
                  ],
                }),
              isFollowedBy &&
                !isOwnProfile &&
                u("span", {
                  className: r.followsYou,
                  children: "Подписан на вас",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function je({ profile, isBlocked }) {
  const [c, d] = d("posts");

  const [s] = d(() =>
    profile && !isBlocked
      ? p.getCachedWall(profile.username || profile.id, profile.pinnedPostId)
      : null
  );

  const [h, p] = d(s?.data ?? []);
  const [B, k] = d(false);
  const [y, F] = d(s?.nextCursor ?? null);
  const [i, b] = d([]);
  const [L, I] = d(false);
  const [D, v] = d(null);
  const [P, T] = d(false);
  const [U, M] = d(null);

  const _ = q(async (o, l, a) => {
    k(true);
    try {
      const g = await p.getUserWall(o, {
        cursor: a,
        limit: 20,
        pinnedPostId: l,
      });

      const g_data = g.data;

      p((u) => (a ? [...u, ...g_data] : g_data));

      F(g.nextCursor);
    } catch (g) {
      console.error("Failed to fetch wall posts:", g);
    } finally {
      k(false);
    }
  }, []);

  const O = q(
    async (o, l) => {
      if (!P) {
        I(true);
      }

      M(null);
      try {
        const a = await p.getUserLikedPosts(o, { cursor: l, limit: 20 });
        const a_data = a.data;

        b((m) => (l ? [...m, ...a_data] : a_data));

        v(a.nextCursor);
        T(true);
      } catch (a) {
        console.error("Failed to fetch liked posts:", a);

        if (a && typeof a == "object" && "status" in a && a.status === 403) {
          M("Лайки скрыты настройками приватности");
        }
      } finally {
        I(false);
      }
    },
    [P]
  );

  h(() => {
    if (profile && !isBlocked) {
      _(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile?.id, isBlocked, _]);

  h(() => {
    if (c === "likes" && profile) {
      O(profile.id);
    }
  }, [c, profile?.id, O]);

  const R = b((o) => o.posts);

  const V = b((o) => o.highlightedPostId);

  const E = b((o) => o._lastPostEdit);

  const $ = b((o) => o._lastLikeUpdate);

  const A = b((o) => o._lastRepostUpdate);

  const J = b((o) => o._lastStatsBatch);

  h(() => {
    if (!V || !profile) {
      return;
    }
    const o = R.find((l) => l.id === V);

    if (o && o.wallOwnerId === profile.id && !h.some((l) => l.id === V)) {
      p((l) => [o, ...l]);
    }
  }, [V, R, profile?.id, h]);

  h(() => {
    if (h.length !== 0) {
      p((o) =>
        o.map((l) => {
          const a = R.find((g) => g.id === l.id);
          return a &&
            (a.editedAt !== l.editedAt || a.attachments !== l.attachments)
            ? a
            : l;
        })
      );
    }
  }, [R]);

  h(() => {
    if (E) {
      p((o) =>
        o.map((l) =>
          l.id === E.postId
            ? { ...l, text: E.text, spans: E.spans, editedAt: E.editedAt }
            : l
        )
      );
    }
  }, [E]);

  h(() => {
    if (!$) {
      return;
    }
    const { postId, myReaction, totalDelta } = $;

    const g = (m) =>
      m.id === postId
        ? {
            ...m,
            reactions: {
              ...m.reactions,
              myReaction: myReaction,
              total: Math.max(0, m.reactions.total + totalDelta),
            },
          }
        : m;

    p((m) => m.map(g));

    b((m) => m.map(g));
  }, [$]);

  h(() => {
    if (!A) {
      return;
    }
    const { postId, reposted, countDelta } = A;

    const g = (m) =>
      m.id === postId
        ? {
            ...m,
            reposted: reposted,
            stats: {
              ...m.stats,
              reposts: Math.max(0, m.stats.reposts + countDelta),
            },
          }
        : m;

    p((m) => m.map(g));

    b((m) => m.map(g));
  }, [A]);

  h(() => {
    if (!J || J.length === 0) {
      return;
    }

    const o = new Map(J.map((a) => [a.id, a]));

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

    p((a) => a.map(l));

    b((a) => a.map(l));
  }, [J]);

  const G = q(() => {
    if (profile && !B) {
      if (c === "posts" && y) {
        _(profile.username || profile.id, profile.pinnedPostId, y);
      } else if (c === "likes" && D && !L) {
        O(profile.id, D);
      }
    }
  }, [profile, c, y, D, B, L, _, O]);

  const at = q(
    async (o) => {
      if (!profile) {
        return;
      }
      const l = profile.pinnedPostId === o;
      try {
        if (l) {
          await o.unpinPost(o);
        } else {
          await o.pinPost(o);
        }
      } catch (a) {
        console.error("Failed to pin/unpin post:", a);
        throw a;
      }
    },
    [profile]
  );

  const N = q(async () => {
    if (profile) {
      p.invalidateWallCache(profile.username || profile.id);
      await _(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile, _]);

  const X = q(
    (o) => {
      p((l) => l.filter((a) => a.id !== o));

      b((l) => l.filter((a) => a.id !== o));

      if (profile) {
        p.removePostFromWallCache(profile.username || profile.id, o);
      }
    },
    [profile]
  );

  const Z = q((o) => {
    d(o);
  }, []);

  const rt = q(() => {
    p([]);
    F(null);
    b([]);
    T(false);
    v(null);
    M(null);
    d("posts");
  }, []);

  return {
    posts: c === "posts" ? h : i,
    postsLoading: c === "posts" ? B : L,
    nextCursor: c === "posts" ? y : D,
    activeTab: c,
    likesError: U,
    hasLoadedLikes: P,
    handleLoadMore: G,
    handlePinPost: at,
    refreshPosts: N,
    removePost: X,
    handleTabChange: Z,
    resetPosts: rt,
  };
}
function Ye({ username }) {
  const n = q_1((u) => u.profile);

  const c = n?.id;

  const d = q_1((u) => u.setProfile);

  const [s, h] = d(() => (username ? o.getCachedProfile(username) : null));

  const [p, B] = d(s === null);
  const k = activeTab(s ? username ?? null : null);
  const [y, F] = d(null);
  const [i, b] = d("none");
  const [L, I] = d(false);
  const [D, v] = d(false);
  const [P, T] = d(false);
  const U = !!(n && s && n.id === s.id);
  const M = i === "following";
  const _ = i === "requested";
  const O = s?.interaction?.isFollowedBy ?? false;
  const R = s?.interaction?.isBlockedBy ?? false;

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
  } = je({ profile: s, isBlocked: D });

  h(() => {
    if (!s || U || !n) {
      b("none");
      v(false);
      return;
    }

    if (s.interaction) {
      s.interaction.isFollowing
        ? b("following")
        : s.interaction.hasOutgoingRequest
        ? b("requested")
        : b("none");

      v(s.interaction.isBlocking);
    }
  }, [s?.id, U, n]);
  const K = activeTab(true);

  h(() => {
    K.current = true;

    return () => {
      K.current = false;
    };
  }, []);

  h(() => {
    const u = new AbortController();

    (async () => {
      const z = k.current !== null && k.current === username;
      k.current = null;

      if (!z) {
        h(null);
        B(true);
        b("none");
        v(false);
        resetPosts();
      }

      F(null);
      try {
        const x = username
          ? await o.getProfileByUsername(username)
          : await o.getMyProfile();
        if (!K.current || u.signal.aborted) {
          return;
        }

        if (x) {
          h(x);
        }
      } catch (x) {
        if (!K.current || u.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", x);
        const ut = x(x) ? x.status : 0;
        F(ut === resetPosts.NOT_FOUND ? "notFound" : "server");
      } finally {
        if (K.current && !u.signal.aborted) {
          B(false);
        }
      }
    })();

    return () => {
      u.abort();
    };
  }, [username, c, resetPosts]);

  const tt = q(async () => {
    if (!(!s || L)) {
      I(true);
      try {
        const u = await y.followUser(s.id);
        b(u);

        if (u === "following" && s.stats) {
          const S = s.stats.followers + 1;

          h((z) =>
            z?.stats ? { ...z, stats: { ...z.stats, followers: S } } : z
          );

          if (s.username) {
            o.updateProfileCache(s.username, {
              stats: { ...s.stats, followers: S },
            });
          }
        }
      } catch (u) {
        console.error("Failed to follow:", u);
      } finally {
        I(false);
      }
    }
  }, [s, L]);

  const o = q(async () => {
    if (!(!s || L)) {
      I(true);
      try {
        await y.unfollowUser(s.id);
        b("none");

        if (M && s.stats) {
          const u = s.stats.followers - 1;

          h((S) =>
            S?.stats ? { ...S, stats: { ...S.stats, followers: u } } : S
          );

          if (s.username) {
            o.updateProfileCache(s.username, {
              stats: { ...s.stats, followers: u },
            });
          }
        }
      } catch (u) {
        console.error("Failed to unfollow:", u);
      } finally {
        I(false);
      }
    }
  }, [s, M, L]);

  const l = q(async () => {
    if (M || _) {
      await o();
    } else {
      await tt();
    }
  }, [M, _, tt, o]);

  const a = q(
    async (u) => {
      if (!s) {
        return;
      }
      const z = s.pinnedPostId === u ? null : u;
      const x = { ...s, pinnedPostId: z };
      h(x);

      if (n) {
        d(x);
      }

      try {
        await handlePinPost(u);
      } catch {
        h(s);

        if (n) {
          d(s);
        }
      }
    },
    [s, n, d, handlePinPost]
  );

  const g = q(async () => {
    if (!(!s || P || U)) {
      T(true);
      try {
        if (D) {
          await y.unblockUser(s.id);
          v(false);
          username.success("Пользователь разблокирован");
        } else {
          await y.blockUser(s.id);
          v(true);
          username.success("Пользователь заблокирован");
          M && b("none");
        }

        if (s.username) {
          o.invalidateProfileCache(s.username);
        }
      } catch (u) {
        console.error("Failed to toggle block:", u);
        username.error("Не удалось выполнить действие");
      } finally {
        T(false);
      }
    }
  }, [s, D, P, U, M]);

  const m = q(
    (u) => {
      h((S) => (S ? { ...S, banner: u } : null));

      if (n) {
        d({ ...n, banner: u });
      }
    },
    [n, d]
  );

  return {
    profile: s,
    loading: p,
    error: y,
    posts: posts,
    postsLoading: postsLoading,
    nextCursor: nextCursor,
    isOwnProfile: U,
    isFollowing: M,
    isFollowedBy: O,
    isBlockedBy: R,
    isRequested: _,
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
    updateBanner: m,
    isBlocked: D,
    handleBlockUser: g,
  };
}

const Qe = z(() =>
  l(
    () => import("./index-IG9jWvj0.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
  ).then((t) => ({
    default: t.SettingsModal,
  }))
);

const Ct = z(() =>
  l(
    () => import("./index-DMiYD7sT.js"),
    __vite__mapDeps([21, 1, 2, 22, 16, 17, 18, 23])
  ).then((t) => ({
    default: t.UserListModal,
  }))
);

export const Profile = ({ username }) => {
  const n = d_1();
  const c = handleUnfollow();
  const { openModal, closeModal } = n();

  const h = loading((f) => f.createPost);

  const p = loading((f) => f.profileScrollByUser);

  const B = loading((f) => f.profileMeasuredHeightsByUser);

  const k = loading((f) => f.setProfileMeasuredHeights);

  const y = username ? p[t] ?? 0 : 0;
  const F = handleLoadMore(null);

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
  } = Ye({ username: username });

  const H = username ? `${username}:${activeTab}` : null;
  const K = H ? B[H] : undefined;

  const tt = q(
    (f) => {
      if (H) {
        k(H, f);
      }
    },
    [H, k]
  );

  const o = q(() => {
    if (isFollowing || isRequested) {
      openModal(
        u(F, {
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
    openModal(u(Qe, { onClose: closeModal }));
  };

  const a = q(() => {
    if (profile) {
      openModal(
        u(Ct, { userId: profile.id, type: "followers", title: "Подписчики" })
      );
    }
  }, [profile, openModal]);

  const g = q(() => {
    if (profile) {
      openModal(
        u(Ct, { userId: profile.id, type: "following", title: "Подписки" })
      );
    }
  }, [profile, openModal]);

  const m = async (f, q, ht, Lt) => {
    if (profile) {
      await h({
        wallOwnerId: profile.id,
        text: f,
        spans: q,
        attachments: ht,
        poll: Lt,
      });

      refreshPosts();
    }
  };

  const u = q(() => {
    if (profile) {
      openModal(
        u(refreshPosts, {
          wallOwnerId: profile.id,
          placeholder: `Написать на стене ${profile.displayName}`,
          onPostCreated: refreshPosts,
        })
      );
    }
  }, [profile, openModal, refreshPosts]);

  isRequested(() => {
    if (username && F.current !== username && posts.length !== 0) {
      F.current = username;

      !(y <= 0) &&
        (window.scrollTo(0, y),
        requestAnimationFrame(() => window.scrollTo(0, y)));
    }
  }, [username, posts.length, y]);

  const S = isFollowing(() => {
    if (activeTab !== "posts" || !profile?.pinnedPostId) {
      return posts;
    }
    const f = posts.find((q) => q.id === profile.pinnedPostId);
    return f
      ? [f, ...posts.filter((q) => q.id !== profile.pinnedPostId)]
      : posts;
  }, [posts, profile?.pinnedPostId, activeTab]);

  const z = isFollowing(() => {
    if (!c) {
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
    c,
    isOwnProfile,
    isBlocked,
    isBlockedBy,
    profile?.privacySettings?.whoCanPostOnWall,
    isFollowing,
    isFollowedBy,
  ]);

  const x =
    isOwnProfile ||
    profile?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const ut = isFollowing(() => {
    const f = ["Посты"];

    if (x) {
      f.push("Лайки");
    }

    return f;
  }, [x]);

  const Nt = q(
    (f) => {
      handleTabChange(x ? (f === 0 ? "posts" : "likes") : "posts");
    },
    [handleTabChange, x]
  );

  const wt = handleLoadMore(null);

  isRequested(() => {
    const f = username ?? "";
    const wt_current = wt.current;
    wt.current = { user: f, tab: activeTab };

    if (wt_current && wt_current.user === f && wt_current.tab !== activeTab) {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [activeTab, username]);

  if (loading) {
    return null;
  }

  if (error || !profile) {
    const f = error === "server";
    return u(handlePinPost, {
      kind: f ? "server" : "notFound",
      title: f ? "Сервис недоступен" : "Профиль не найден",
      description: f
        ? "Не удалось получить профиль — сервер не ответил. Попробуйте обновить страницу позже."
        : "Пользователя с таким адресом нет. Возможно, профиль удалён или в ссылке опечатка.",
      action: u(B, {
        onClick: () => u_1("/"),
        children: "Вернуться на главную",
      }),
    });
  }
  return u("div", {
    className: r.page,
    children: [
      u(qe, {
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
      u("div", {
        className: r.tabsWrapper,
        children: u(K, {
          tabs: ut,
          activeIndex: activeTab === "posts" ? 0 : 1,
          onChange: Nt,
        }),
      }),
      u("div", {
        className: r.belowTabs,
        children: [
          z &&
            u(S, {
              children: [
                u("div", {
                  className: r.createPostWrapper,
                  children: [
                    u(f, {
                      src: profile.avatar ?? "",
                      alt: profile.displayName,
                      size: "sm",
                    }),
                    u(error, {
                      onSubmit: m,
                      placeholder: isOwnProfile
                        ? "Что нового?"
                        : `Написать на стене ${profile.displayName}`,
                    }),
                  ],
                }),
                u(B, {
                  variant: "secondary",
                  className: r.writePostButton,
                  onClick: u,
                  children: "Написать на стене",
                }),
              ],
            }),
          isBlocked
            ? u("div", {
                className: r.emptyPosts,
                children: "Вы заблокировали этого пользователя",
              })
            : likesError
            ? u("div", { className: r.emptyPosts, children: likesError })
            : S.length > 0
            ? u(
                handleFollow,
                {
                  posts: S,
                  renderPost: (f, q, ht) =>
                    u(c, {
                      post: f,
                      isOnOwnProfile: isOwnProfile && activeTab === "posts",
                      isPinned:
                        activeTab === "posts" && profile?.pinnedPostId === f.id,
                      isHighlighted: ht,
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
                  initialMeasuredHeights: K,
                  onMeasuredHeightsChange: tt,
                },
                H ?? activeTab
              )
            : postsLoading && S.length === 0
            ? u(isOwnProfile, { count: 4 })
            : u("div", {
                className: r.emptyPosts,
                children: activeTab === "posts" ? "Нет постов" : "Нет лайков",
              }),
        ],
      }),
    ],
  });
};

export { Profile as Profile };
