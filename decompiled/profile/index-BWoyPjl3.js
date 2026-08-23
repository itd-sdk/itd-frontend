import {
  u,
  f,
  B,
  M,
  D,
  I,
  q as g_1,
  h,
  d,
  i,
  j,
  z,
  d as d_1,
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
  y,
  b,
  w,
  A,
  x,
  H,
  C,
  E,
  F,
  G,
  J,
  _,
  T,
  u as u_1,
  K,
  L,
  N,
  V,
  c,
  P,
} from "./index-DBLtLuBZ.js";

import { I as I_1 } from "./IconCheck-BbHRT87E.js";
import { C as C_1 } from "./index-CppkZ61e.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-CqrZpRBv.js",
      "assets/index-DBLtLuBZ.js",
      "assets/index-DsCOPsfG.css",
      "assets/index-CppkZ61e.js",
      "assets/index-CB955rxp.css",
      "assets/IconInfo-q2DBkXjI.js",
      "assets/IconNotificationMention-Bo_H2cao.js",
      "assets/IconChevronRight-2inYIJem.js",
      "assets/IconChevronLeft-0Of1x6nI.js",
      "assets/index-GxbNl1ce.css",
      "assets/index-Cz8tVW-B.js",
      "assets/index-CJfnwj5O.css",
      "assets/index-BXeZiSul.js",
      "assets/IconCheckCircle-Czu5wphO.js",
      "assets/index-xAi3KIE5.css",
      "assets/index-BsS5hTRx.js",
      "assets/index-CmZO13pH.css",
      "assets/index-Bw3fiING.js",
      "assets/IconCheck-BbHRT87E.js",
      "assets/index-CuqyGtwx.css",
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
      t._sentryDebugIds[n] = "98b30dd7-0530-46f6-93b8-e5ca22137408";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-98b30dd7-0530-46f6-93b8-e5ca22137408";
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

const ee = "D1iy";
const se = "bvQx";
const ne = "gsI5";
const oe = "UrtO";
const ae = "zih9";
const re = "HLBz";
const ie = "U25e";
const le = "GNZg";
const ce = "fdpj";
const de = "dgBs";
const ue = "fOBF";
const he = "hbfy";
const fe = "SK9x";
const me = "NQ92";
const ge = "I3Fp";
const we = "z3D8";
const pe = "ob76";
const be = "vcKL";
const Pe = "i6wb";
const ye = "QJ0Q";
const Ce = "i1N4";
const ve = "xsRH";
const ke = "dVhC";
const Ne = "bkt8";
const Ie = "zeAy";
const Le = "TKIl";
const Ae = "n2D0";
const Me = "wA0J";
const Be = "Ji7D";
const _e = "rBRF";

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
  ownActions: ge,
  mobileActions: we,
  infoContainer: pe,
  userInfo: be,
  name: Pe,
  username: ye,
  bio: Ce,
  metaItem: ve,
  followsYou: ke,
  stats: Ne,
  stat: Ie,
  clickable: Le,
  statValue: Ae,
  statLabel: Me,
  bannerPlaceholder: Be,
  emptyPosts: _e,
};

const Se = "Xh8X";
const Fe = "jo0b";
const De = "Dn0X";
const Te = "m1xA";
const xe = "iuB2";
const Ee = "iOKj";

const nt = {
  content: Se,
  title: Fe,
  description: De,
  username: Te,
  warning: xe,
  actions: Ee,
};

function Ue({ username, displayName, avatar, onConfirm, onClose }) {
  const h = () => {
    onConfirm();
    onClose();
  };
  return u(M, {
    onClose: onClose,
    showHeader: false,
    children: u("div", {
      className: nt.content,
      children: [
        u(f, { src: avatar, alt: displayName, size: "lg" }),
        u("h2", {
          className: nt.title,
          children: "Заблокировать пользователя?",
        }),
        u("p", {
          className: nt.description,
          children: [
            "Вы уверены, что хотите заблокировать",
            " ",
            u("strong", { children: displayName }),
            username &&
              u("span", {
                className: nt.username,
                children: [" (@", username, ")"],
              }),
            "?",
          ],
        }),
        u("p", {
          className: nt.warning,
          children:
            "Заблокированный пользователь не сможет видеть ваш профиль и контент.",
        }),
        u("div", {
          className: nt.actions,
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
function bt(t, n, c, d) {
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
      const c = bt(n, "минуту", "минуты", "минут");
      return `${n} ${c} назад`;
    }
    case "hours": {
      const n = t.value ?? 1;
      const c = bt(n, "час", "часа", "часов");
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
function Pt(t) {
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
          u("span", { className: r.statValue, children: Pt(followers) }),
          u("span", { className: r.statLabel, children: "подписчиков" }),
        ],
      }),
      isPhone && u("hr", {}),
      u("div", {
        className: `${r.stat} ${onFollowingClick ? r.clickable : ""}`,
        onClick: onFollowingClick,
        children: [
          u("span", { className: r.statValue, children: Pt(following) }),
          u("span", { className: r.statLabel, children: "подписок" }),
        ],
      }),
    ],
  });
}
const Ve = z(() =>
  l(
    () => import("./index-CqrZpRBv.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  ).then((t) => ({
    default: t.SubscriptionModal,
  }))
);
function Oe({
  isOwnProfile,
  isFollowing,
  isRequested = false,
  isFollowLoading,
  onEditProfile,
  onToggleFollow,
  fullWidth = false,
}) {
  const [B, N] = isFollowLoading(false);
  const D = i()?.subscription?.isActive;
  return isOwnProfile
    ? u(d_1, {
        children: [
          u("div", {
            className: r.ownActions,
            children: [
              u(B, {
                onClick: onEditProfile,
                fullWidth: fullWidth,
                children: "Редактировать",
              }),
              !D &&
                u(B, {
                  variant: "secondary",
                  onClick: () => N(true),
                  fullWidth: fullWidth,
                  children: "ИТД НУКСТА",
                }),
            ],
          }),
          B &&
            u(j, {
              fallback: null,
              children: u(Ve, { isOpen: B, onClose: () => N(false) }),
            }),
        ],
      })
    : u(d_1, {
        children: u(B, {
          variant: isFollowing || isRequested ? "secondary" : "primary",
          onClick: onToggleFollow,
          disabled: isFollowLoading,
          fullWidth: fullWidth,
          children: isFollowing
            ? u(d_1, { children: [u(I_1, { size: 18 }), "Вы подписаны"] })
            : isRequested
            ? "Заявка отправлена"
            : u(d_1, { children: [u(m, { size: 18 }), "Подписаться"] }),
        }),
      });
}
function Ct({
  isOwnProfile,
  isVerified = false,
  isBlocked = false,
  onVerificationRequest,
  onBlockUser,
  onReportUser,
  ...p
}) {
  const N = (() => {
    const C = [];

    if (!isOwnProfile && onBlockUser) {
      C.push({
        id: "block",
        label: isBlocked ? "Разблокировать" : "Заблокировать",
        icon: u(Zt, { size: 18 }),
        danger: !isBlocked,
        onClick: onBlockUser,
      });
    }

    if (!isOwnProfile && onReportUser) {
      C.push({
        id: "report",
        label: "Пожаловаться",
        icon: u(onReportUser, { size: 18 }),
        danger: true,
        onClick: onReportUser,
      });
    }

    return C;
  })();
  return u("div", {
    className: r.actions,
    children: [
      N.length > 0 &&
        u(D, {
          trigger: u(B, {
            variant: "secondary",
            iconOnly: true,
            children: u(I, { size: 18 }),
          }),
          items: N,
          position: "bottom-right",
        }),
      isOwnProfile &&
        !isVerified &&
        onVerificationRequest &&
        u(B, {
          variant: "secondary",
          iconOnly: true,
          onClick: onVerificationRequest,
          children: u(g_1, { size: 18 }),
        }),
      u(Oe, { isOwnProfile: isOwnProfile, isVerified: isVerified, ...p }),
    ],
  });
}

const $e = z(() =>
  l(() => import("./index-Cz8tVW-B.js"), __vite__mapDeps([10, 1, 2, 11])).then(
    (t) => ({
      default: t.DrawingCanvas,
    })
  )
);

const We = z(() =>
  l(
    () => import("./index-BXeZiSul.js"),
    __vite__mapDeps([12, 1, 2, 13, 14])
  ).then((t) => ({
    default: t.VerificationModal,
  }))
);

const ze = z(() =>
  l(
    () => import("./index-BsS5hTRx.js"),
    __vite__mapDeps([15, 1, 2, 13, 16])
  ).then((t) => ({
    default: t.ReportModal,
  }))
);

function He(t) {
  return new Date(t).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function je({
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
  const [I, F] = isRequested(false);
  const { openModal, closeModal } = isOwnProfile();

  const T = q(() => {
    F(true);
  }, []);

  const x = q(() => {
    openModal(u(We, { onClose: closeModal }));
  }, [openModal, closeModal]);

  const A = q(() => {
    if (isBlocked) {
      onBlockUser?.();
      return;
    }
    openModal(
      u(Ue, {
        username: profile.username || "",
        displayName: profile.displayName,
        avatar: profile.avatar,
        onConfirm: () => onBlockUser?.(),
        onClose: closeModal,
      })
    );
  }, [isBlocked, onBlockUser, openModal, closeModal, profile]);

  const M = q(() => {
    openModal(
      u(ze, { targetType: "user", targetId: profile.id, onClose: closeModal })
    );
  }, [openModal, closeModal, profile.id]);

  const z = q(() => {
    F(false);
  }, []);

  const U = q(() => {
    openModal(
      u(C_1, {
        title: "Удалить баннер?",
        message:
          "Баннер будет удалён из профиля. Это действие нельзя отменить.",
        confirmText: "Удалить",
        danger: true,
        onConfirm: async () => {
          try {
            await o.updateProfile({ bannerId: null });
            onBannerUpdate?.(null);
          } catch (_) {
            console.error("Failed to delete banner:", _);
            profile.error("Не удалось удалить баннер");
            throw _;
          }
        },
        onClose: closeModal,
      })
    );
  }, [openModal, closeModal, onBannerUpdate]);

  const O = q(
    async (_) => {
      try {
        const [R, X] = _.split(",");
        const H = R.match(/:(.*?);/)?.[1] || "image/png";
        const $ = atob(X);
        const tt = new Uint8Array($.length);
        for (let j = 0; j < $.length; j++) {
          tt[j] = $.charCodeAt(j);
        }
        const y = new Blob([tt], { type: H });
        const G = new File([y], "banner.png", { type: "image/png" });
        const V = await r_1.uploadMedia(G);
        await o.updateProfile({ bannerId: V.id });

        onBannerUpdate?.({
          id: V.id,
          type: "image",
          url: V.url,
          width: V.width,
          height: V.height,
        });
      } catch (R) {
        console.error("Failed to upload banner:", R);
        profile.error("Не удалось загрузить баннер");
        throw R;
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
                    onClick: U,
                    title: "Удалить баннер",
                    children: u(openModal, { size: 20 }),
                  }),
              ],
            }),
        ],
      }),
      I &&
        u(j, {
          fallback: null,
          children: u($e, { isOpen: I, onClose: z, onSave: O, mode: "banner" }),
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
                u(Ct, {
                  isOwnProfile: isOwnProfile,
                  isFollowing: isFollowing,
                  isRequested: isRequested,
                  isFollowLoading: isFollowLoading,
                  isVerified: profile.isVerified,
                  isBlocked: isBlocked,
                  onEditProfile: onEditProfile,
                  onToggleFollow: onToggleFollow,
                  onVerificationRequest: x,
                  onBlockUser: A,
                  onReportUser: M,
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
                u(d_1, {
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
                      children: u(Ct, {
                        isOwnProfile: isOwnProfile,
                        isFollowing: isFollowing,
                        isRequested: isRequested,
                        isFollowLoading: isFollowLoading,
                        isVerified: profile.isVerified,
                        isBlocked: isBlocked,
                        onEditProfile: onEditProfile,
                        onToggleFollow: onToggleFollow,
                        onVerificationRequest: x,
                        onBlockUser: A,
                        onReportUser: M,
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
                    He(profile.createdAt),
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
function qe({ profile, isBlocked }) {
  const [c, d] = d("posts");

  const [s] = d(() =>
    profile && !isBlocked
      ? p.getCachedWall(profile.username || profile.id, profile.pinnedPostId)
      : null
  );

  const [h, p] = d(s?.data ?? []);
  const [B, N] = d(false);
  const [C, D] = d(s?.nextCursor ?? null);
  const [i, P] = d([]);
  const [L, I] = d(false);
  const [F, v] = d(null);
  const [b, T] = d(false);
  const [x, A] = d(null);

  const M = q(async (o, l, a) => {
    N(true);
    try {
      const w = await p.getUserWall(o, {
        cursor: a,
        limit: 20,
        pinnedPostId: l,
      });

      const w_data = w.data;

      p((u) => (a ? [...u, ...w_data] : w_data));

      D(w.nextCursor);
    } catch (w) {
      console.error("Failed to fetch wall posts:", w);
    } finally {
      N(false);
    }
  }, []);

  const z = q(
    async (o, l) => {
      if (!b) {
        I(true);
      }

      A(null);
      try {
        const a = await p.getUserLikedPosts(o, { cursor: l, limit: 20 });
        const a_data = a.data;

        P((m) => (l ? [...m, ...a_data] : a_data));

        v(a.nextCursor);
        T(true);
      } catch (a) {
        console.error("Failed to fetch liked posts:", a);

        if (a && typeof a == "object" && "status" in a && a.status === 403) {
          A("Лайки скрыты настройками приватности");
        }
      } finally {
        I(false);
      }
    },
    [b]
  );

  y(() => {
    if (profile && !isBlocked) {
      M(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile?.id, isBlocked, M]);

  y(() => {
    if (c === "likes" && profile) {
      z(profile.id);
    }
  }, [c, profile?.id, z]);

  const U = b((o) => o.posts);

  const O = b((o) => o.highlightedPostId);

  const _ = b((o) => o._lastPostEdit);

  const R = b((o) => o._lastLikeUpdate);

  const X = b((o) => o._lastRepostUpdate);

  const H = b((o) => o._lastStatsBatch);

  y(() => {
    if (!O || !profile) {
      return;
    }
    const o = U.find((l) => l.id === O);

    if (o && o.wallOwnerId === profile.id && !h.some((l) => l.id === O)) {
      p((l) => [o, ...l]);
    }
  }, [O, U, profile?.id, h]);

  y(() => {
    if (h.length !== 0) {
      p((o) =>
        o.map((l) => {
          const a = U.find((w) => w.id === l.id);
          return a &&
            (a.editedAt !== l.editedAt || a.attachments !== l.attachments)
            ? a
            : l;
        })
      );
    }
  }, [U]);

  y(() => {
    if (_) {
      p((o) =>
        o.map((l) =>
          l.id === _.postId
            ? { ...l, text: _.text, spans: _.spans, editedAt: _.editedAt }
            : l
        )
      );
    }
  }, [_]);

  y(() => {
    if (!R) {
      return;
    }
    const { postId, myReaction, totalDelta } = R;

    const w = (m) =>
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

    p((m) => m.map(w));

    P((m) => m.map(w));
  }, [R]);

  y(() => {
    if (!X) {
      return;
    }
    const { postId, reposted, countDelta } = X;

    const w = (m) =>
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

    p((m) => m.map(w));

    P((m) => m.map(w));
  }, [X]);

  y(() => {
    if (!H || H.length === 0) {
      return;
    }

    const o = new Map(H.map((a) => [a.id, a]));

    const l = (a) => {
      const w = o.get(a.id);
      return w
        ? {
            ...a,
            reactions: { ...a.reactions, total: w.likesCount },
            stats: {
              ...a.stats,
              views: w.viewsCount,
              comments: w.commentsCount,
              reposts: w.repostsCount,
            },
            dominantEmoji: w.dominantEmoji,
          }
        : a;
    };

    p((a) => a.map(l));

    P((a) => a.map(l));
  }, [H]);

  const $ = q(() => {
    if (profile && !B) {
      if (c === "posts" && C) {
        M(profile.username || profile.id, profile.pinnedPostId, C);
      } else if (c === "likes" && F && !L) {
        z(profile.id, F);
      }
    }
  }, [profile, c, C, F, B, L, M, z]);

  const tt = q(
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

  const y = q(async () => {
    if (profile) {
      p.invalidateWallCache(profile.username || profile.id);
      await M(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile, M]);

  const G = q(
    (o) => {
      p((l) => l.filter((a) => a.id !== o));

      P((l) => l.filter((a) => a.id !== o));

      if (profile) {
        p.removePostFromWallCache(profile.username || profile.id, o);
      }
    },
    [profile]
  );

  const V = q((o) => {
    d(o);
  }, []);

  const j = q(() => {
    p([]);
    D(null);
    P([]);
    T(false);
    v(null);
    A(null);
    d("posts");
  }, []);

  return {
    posts: c === "posts" ? h : i,
    postsLoading: c === "posts" ? B : L,
    nextCursor: c === "posts" ? C : F,
    activeTab: c,
    likesError: x,
    hasLoadedLikes: b,
    handleLoadMore: $,
    handlePinPost: tt,
    refreshPosts: y,
    removePost: G,
    handleTabChange: V,
    resetPosts: j,
  };
}
function Ke({ username }) {
  const n = w((u) => u.profile);

  const c = n?.id;

  const d = w((u) => u.setProfile);

  const [s, h] = d(() => (username ? o.getCachedProfile(username) : null));

  const [p, B] = d(s === null);
  const N = A(s ? username ?? null : null);
  const [C, D] = d(null);
  const [i, P] = d("none");
  const [L, I] = d(false);
  const [F, v] = d(false);
  const [b, T] = d(false);
  const x = !!(n && s && n.id === s.id);
  const A = i === "following";
  const M = i === "requested";
  const z = s?.interaction?.isFollowedBy ?? false;
  const U = s?.interaction?.isBlockedBy ?? false;

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
  } = qe({ profile: s, isBlocked: F });

  handlePinPost(() => {
    if (!s || x || !n) {
      P("none");
      v(false);
      return;
    }

    if (s.interaction) {
      s.interaction.isFollowing
        ? P("following")
        : s.interaction.hasOutgoingRequest
        ? P("requested")
        : P("none");

      v(s.interaction.isBlocking);
    }
  }, [s?.id, x, n]);
  const et = A(true);

  handlePinPost(() => {
    et.current = true;

    return () => {
      et.current = false;
    };
  }, []);

  handlePinPost(() => {
    const u = new AbortController();

    (async () => {
      const K = N.current !== null && N.current === username;
      N.current = null;

      if (!K) {
        h(null);
        B(true);
        P("none");
        v(false);
        resetPosts();
      }

      D(null);
      try {
        const E = username
          ? await o.getProfileByUsername(username)
          : await o.getMyProfile();
        if (!et.current || u.signal.aborted) {
          return;
        }

        if (E) {
          h(E);
        }
      } catch (E) {
        if (!et.current || u.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", E);
        const ut = x(E) ? E.status : 0;
        D(ut === likesError.NOT_FOUND ? "notFound" : "server");
      } finally {
        if (et.current && !u.signal.aborted) {
          B(false);
        }
      }
    })();

    return () => {
      u.abort();
    };
  }, [username, c, resetPosts]);

  const st = resetPosts(async () => {
    if (!(!s || L)) {
      I(true);
      try {
        const u = await C.followUser(s.id);
        P(u);

        if (u === "following" && s.stats) {
          const S = s.stats.followers + 1;

          h((K) =>
            K?.stats ? { ...K, stats: { ...K.stats, followers: S } } : K
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

  const o = resetPosts(async () => {
    if (!(!s || L)) {
      I(true);
      try {
        await C.unfollowUser(s.id);
        P("none");

        if (A && s.stats) {
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
  }, [s, A, L]);

  const l = resetPosts(async () => {
    if (A || M) {
      await o();
    } else {
      await st();
    }
  }, [A, M, st, o]);

  const a = resetPosts(
    async (u) => {
      if (!s) {
        return;
      }
      const K = s.pinnedPostId === u ? null : u;
      const E = { ...s, pinnedPostId: K };
      h(E);

      if (n) {
        d(E);
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

  const w = resetPosts(async () => {
    if (!(!s || b || x)) {
      T(true);
      try {
        if (F) {
          await C.unblockUser(s.id);
          v(false);
          username.success("Пользователь разблокирован");
        } else {
          await C.blockUser(s.id);
          v(true);
          username.success("Пользователь заблокирован");
          A && P("none");
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
  }, [s, F, b, x, A]);

  const m = resetPosts(
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
    error: C,
    posts: posts,
    postsLoading: postsLoading,
    nextCursor: nextCursor,
    isOwnProfile: x,
    isFollowing: A,
    isFollowedBy: z,
    isBlockedBy: U,
    isRequested: M,
    isFollowLoading: L,
    handleToggleFollow: l,
    handleFollow: st,
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
    isBlocked: F,
    handleBlockUser: w,
  };
}

const Je = z(() =>
  l(
    () => import("./index-CqrZpRBv.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  ).then((t) => ({
    default: t.SettingsModal,
  }))
);

const vt = z(() =>
  l(
    () => import("./index-Bw3fiING.js"),
    __vite__mapDeps([17, 1, 2, 18, 12, 13, 14, 19])
  ).then((t) => ({
    default: t.UserListModal,
  }))
);

export const Profile = ({ username }) => {
  const n = E();
  const c = postsLoading();
  const { openModal, closeModal } = n();

  const h = isOwnProfile((f) => f.createPost);

  const p = isOwnProfile((f) => f.profileScrollByUser);

  const B = isOwnProfile((f) => f.profileMeasuredHeightsByUser);

  const N = isOwnProfile((f) => f.setProfileMeasuredHeights);

  const C = username ? p[t] ?? 0 : 0;
  const D = isBlockedBy(null);

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
  } = Ke({ username: username });

  const q = username ? `${username}:${activeTab}` : null;
  const et = q ? B[q] : undefined;

  const st = q(
    (f) => {
      if (q) {
        N(q, f);
      }
    },
    [q, N]
  );

  const o = q(() => {
    if (isFollowing || isRequested) {
      openModal(
        u(handleTabChange, {
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
    openModal(u(Je, { onClose: closeModal }));
  };

  const a = q(() => {
    if (profile) {
      openModal(
        u(vt, { userId: profile.id, type: "followers", title: "Подписчики" })
      );
    }
  }, [profile, openModal]);

  const w = q(() => {
    if (profile) {
      openModal(
        u(vt, { userId: profile.id, type: "following", title: "Подписки" })
      );
    }
  }, [profile, openModal]);

  const m = async (f, J, ht, Lt) => {
    if (profile) {
      await h({
        wallOwnerId: profile.id,
        text: f,
        spans: J,
        attachments: ht,
        poll: Lt,
      });

      refreshPosts();
    }
  };

  const u = q(() => {
    if (profile) {
      openModal(
        u(J, {
          wallOwnerId: profile.id,
          placeholder: `Написать на стене ${profile.displayName}`,
          onPostCreated: refreshPosts,
        })
      );
    }
  }, [profile, openModal, refreshPosts]);

  handleUnfollow(() => {
    if (username && D.current !== username && posts.length !== 0) {
      D.current = username;

      !(C <= 0) &&
        (window.scrollTo(0, C),
        requestAnimationFrame(() => window.scrollTo(0, C)));
    }
  }, [username, posts.length, C]);

  const S = isFollowing(() => {
    if (activeTab !== "posts" || !profile?.pinnedPostId) {
      return posts;
    }
    const f = posts.find((J) => J.id === profile.pinnedPostId);
    return f
      ? [f, ...posts.filter((J) => J.id !== profile.pinnedPostId)]
      : posts;
  }, [posts, profile?.pinnedPostId, activeTab]);

  const K = isFollowing(() => {
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

  const E =
    isOwnProfile ||
    profile?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const ut = isFollowing(() => {
    const f = ["Посты"];

    if (E) {
      f.push("Лайки");
    }

    return f;
  }, [E]);

  const It = q(
    (f) => {
      handleTabChange(E ? (f === 0 ? "posts" : "likes") : "posts");
    },
    [handleTabChange, E]
  );

  const gt = isBlockedBy(null);

  handleUnfollow(() => {
    const f = username ?? "";
    const gt_current = gt.current;
    gt.current = { user: f, tab: activeTab };

    if (gt_current && gt_current.user === f && gt_current.tab !== activeTab) {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [activeTab, username]);

  if (loading) {
    return null;
  }

  if (error || !profile) {
    const f = error === "server";
    return u(K, {
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
      u(je, {
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
        onFollowingClick: w,
        onBannerUpdate: updateBanner,
      }),
      u("div", {
        className: r.tabsWrapper,
        children: u(error, {
          tabs: ut,
          activeIndex: activeTab === "posts" ? 0 : 1,
          onChange: It,
        }),
      }),
      u("div", {
        className: r.belowTabs,
        children: [
          K &&
            u(d_1, {
              children: [
                u("div", {
                  className: r.createPostWrapper,
                  children: [
                    u(f, {
                      src: profile.avatar ?? "",
                      alt: profile.displayName,
                      size: "sm",
                    }),
                    u(N, {
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
                likesError,
                {
                  posts: S,
                  renderPost: (f, J, ht) =>
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
                  initialMeasuredHeights: et,
                  onMeasuredHeightsChange: st,
                },
                q ?? activeTab
              )
            : postsLoading && S.length === 0
            ? u(loading, { count: 4 })
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
