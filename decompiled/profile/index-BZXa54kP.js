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
  o as o_1,
  L,
  N,
  V,
  c,
  P,
} from "./index-B9FitUXy.js";

import { I as I_1 } from "./IconCheck-DJ0tSd1B.js";
import { C as C_1 } from "./index-DO8sDby2.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BKHOFK-U.js",
      "assets/index-B9FitUXy.js",
      "assets/index-BQOLb5iE.css",
      "assets/index-DO8sDby2.js",
      "assets/index-BJ988M_V.css",
      "assets/IconInfo-C8NLXfbe.js",
      "assets/IconNotificationMention-C1DaoUQe.js",
      "assets/IconChevronRight-C6tvOD4p.js",
      "assets/IconChevronLeft-DoFeid_h.js",
      "assets/index-DDRp8Qcc.css",
      "assets/index-BuRXce-4.js",
      "assets/index-D0FoDbTf.css",
      "assets/index-CsxA5ihx.js",
      "assets/IconCheckCircle-DTjbRj58.js",
      "assets/index-DiPW6ds7.css",
      "assets/index-DKRt0yGY.js",
      "assets/index-CcINdfyw.css",
      "assets/index-Bon4s61p.js",
      "assets/IconCheck-DJ0tSd1B.js",
      "assets/index-B1UA4SI8.css",
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
      t._sentryDebugIds[n] = "e2254db8-536f-4f2b-8da4-f79ca75dd83c";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-e2254db8-536f-4f2b-8da4-f79ca75dd83c";
    }
  } catch {}
})();

const Xt = ({ size = 24 }) =>
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

const ee = "rSaW";
const se = "iCo9";
const ne = "ptSA";
const oe = "XiZV";
const ae = "UZsT";
const re = "gQCm";
const ie = "i5Qi";
const le = "FA3g";
const ce = "xZeL";
const de = "E2iz";
const ue = "uPI8";
const he = "Yx7l";
const fe = "G5PK";
const me = "A29w";
const ge = "nqsc";
const we = "tD0v";
const pe = "TzbG";
const Pe = "HeIq";
const be = "IgzD";
const ye = "hqVk";
const Ce = "GkYG";
const ve = "eDuh";
const ke = "mOSx";
const Ie = "dLsV";
const Ne = "wpTe";
const Le = "ke93";
const Ae = "WgiW";
const Me = "tH3J";
const _e = "LVFv";
const Be = "fzma";

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
  userInfo: Pe,
  name: be,
  username: ye,
  bio: Ce,
  metaItem: ve,
  followsYou: ke,
  stats: Ie,
  stat: Ne,
  clickable: Le,
  statValue: Ae,
  statLabel: Me,
  bannerPlaceholder: _e,
  emptyPosts: Be,
};

const Se = "AIJm";
const Fe = "BF71";
const Te = "e9pz";
const De = "BtCD";
const Ee = "kR27";
const xe = "QYS4";

const nt = {
  content: Se,
  title: Fe,
  description: Te,
  username: De,
  warning: Ee,
  actions: xe,
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
    () => import("./index-BKHOFK-U.js"),
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
  const [_, I] = isFollowLoading(false);
  const T = i()?.subscription?.isActive;
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
              !T &&
                u(B, {
                  variant: "secondary",
                  onClick: () => I(true),
                  fullWidth: fullWidth,
                  children: "ИТД НУКСТА",
                }),
            ],
          }),
          _ &&
            u(j, {
              fallback: null,
              children: u(Ve, { isOpen: _, onClose: () => I(false) }),
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
  const I = (() => {
    const C = [];

    if (!isOwnProfile && onBlockUser) {
      C.push({
        id: "block",
        label: isBlocked ? "Разблокировать" : "Заблокировать",
        icon: u(Xt, { size: 18 }),
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
      I.length > 0 &&
        u(D, {
          trigger: u(B, {
            variant: "secondary",
            iconOnly: true,
            children: u(I, { size: 18 }),
          }),
          items: I,
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

const We = z(() =>
  l(() => import("./index-BuRXce-4.js"), __vite__mapDeps([10, 1, 2, 11])).then(
    (t) => ({
      default: t.DrawingCanvas,
    })
  )
);

const $e = z(() =>
  l(
    () => import("./index-CsxA5ihx.js"),
    __vite__mapDeps([12, 1, 2, 13, 14])
  ).then((t) => ({
    default: t.VerificationModal,
  }))
);

const ze = z(() =>
  l(
    () => import("./index-DKRt0yGY.js"),
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
  const [N, F] = isRequested(false);
  const { openModal, closeModal } = isOwnProfile();

  const D = q(() => {
    F(true);
  }, []);

  const E = q(() => {
    openModal(u($e, { onClose: closeModal }));
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
          } catch (B) {
            console.error("Failed to delete banner:", B);
            profile.error("Не удалось удалить баннер");
            throw B;
          }
        },
        onClose: closeModal,
      })
    );
  }, [openModal, closeModal, onBannerUpdate]);

  const O = q(
    async (B) => {
      try {
        const [R, J] = B.split(",");
        const H = R.match(/:(.*?);/)?.[1] || "image/png";
        const W = atob(J);
        const tt = new Uint8Array(W.length);
        for (let q = 0; q < W.length; q++) {
          tt[q] = W.charCodeAt(q);
        }
        const y = new Blob([tt], { type: H });
        const Q = new File([y], "banner.png", { type: "image/png" });
        const V = await r_1.uploadMedia(Q);
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
                  onClick: D,
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
      N &&
        u(j, {
          fallback: null,
          children: u(We, { isOpen: N, onClose: z, onSave: O, mode: "banner" }),
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
                  onVerificationRequest: E,
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
                        onVerificationRequest: E,
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
function Ye({ profile, isBlocked }) {
  const [c, d] = d("posts");

  const [s] = d(() =>
    profile && !isBlocked
      ? p.getCachedWall(profile.username || profile.id, profile.pinnedPostId)
      : null
  );

  const [h, p] = d(s?.data ?? []);
  const [_, I] = d(false);
  const [C, T] = d(s?.nextCursor ?? null);
  const [i, b] = d([]);
  const [L, N] = d(false);
  const [F, v] = d(null);
  const [P, D] = d(false);
  const [E, A] = d(null);

  const M = q(async (o, l, a) => {
    I(true);
    try {
      const w = await p.getUserWall(o, {
        cursor: a,
        limit: 20,
        pinnedPostId: l,
      });

      const w_data = w.data;

      p((u) => (a ? [...u, ...w_data] : w_data));

      T(w.nextCursor);
    } catch (w) {
      console.error("Failed to fetch wall posts:", w);
    } finally {
      I(false);
    }
  }, []);

  const z = q(
    async (o, l) => {
      if (!P) {
        N(true);
      }

      A(null);
      try {
        const a = await p.getUserLikedPosts(o, { cursor: l, limit: 20 });
        const a_data = a.data;

        b((m) => (l ? [...m, ...a_data] : a_data));

        v(a.nextCursor);
        D(true);
      } catch (a) {
        console.error("Failed to fetch liked posts:", a);

        if (a && typeof a == "object" && "status" in a && a.status === 403) {
          A("Лайки скрыты настройками приватности");
        }
      } finally {
        N(false);
      }
    },
    [P]
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

  const B = b((o) => o._lastPostEdit);

  const R = b((o) => o._lastLikeUpdate);

  const J = b((o) => o._lastRepostUpdate);

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
    if (B) {
      p((o) =>
        o.map((l) =>
          l.id === B.postId
            ? { ...l, text: B.text, spans: B.spans, editedAt: B.editedAt }
            : l
        )
      );
    }
  }, [B]);

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

    b((m) => m.map(w));
  }, [R]);

  y(() => {
    if (!J) {
      return;
    }
    const { postId, reposted, countDelta } = J;

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

    b((m) => m.map(w));
  }, [J]);

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

    b((a) => a.map(l));
  }, [H]);

  const W = q(() => {
    if (profile && !_) {
      if (c === "posts" && C) {
        M(profile.username || profile.id, profile.pinnedPostId, C);
      } else if (c === "likes" && F && !L) {
        z(profile.id, F);
      }
    }
  }, [profile, c, C, F, _, L, M, z]);

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

  const Q = q(
    (o) => {
      p((l) => l.filter((a) => a.id !== o));

      b((l) => l.filter((a) => a.id !== o));

      if (profile) {
        p.removePostFromWallCache(profile.username || profile.id, o);
      }
    },
    [profile]
  );

  const V = q((o) => {
    d(o);
  }, []);

  const q = q(() => {
    p([]);
    T(null);
    b([]);
    D(false);
    v(null);
    A(null);
    d("posts");
  }, []);

  return {
    posts: c === "posts" ? h : i,
    postsLoading: c === "posts" ? _ : L,
    nextCursor: c === "posts" ? C : F,
    activeTab: c,
    likesError: E,
    hasLoadedLikes: P,
    handleLoadMore: W,
    handlePinPost: tt,
    refreshPosts: y,
    removePost: Q,
    handleTabChange: V,
    resetPosts: q,
  };
}
function je({ username }) {
  const n = w((u) => u.profile);

  const c = n?.id;

  const d = w((u) => u.setProfile);

  const [s, h] = d(() => (username ? o.getCachedProfile(username) : null));

  const [p, _] = d(s === null);
  const I = A(s ? username ?? null : null);
  const [C, T] = d(null);
  const [i, b] = d("none");
  const [L, N] = d(false);
  const [F, v] = d(false);
  const [P, D] = d(false);
  const E = !!(n && s && n.id === s.id);
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
  } = Ye({ profile: s, isBlocked: F });

  handlePinPost(() => {
    if (!s || E || !n) {
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
  }, [s?.id, E, n]);
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
      const j = I.current !== null && I.current === username;
      I.current = null;

      if (!j) {
        h(null);
        _(true);
        b("none");
        v(false);
        resetPosts();
      }

      T(null);
      try {
        const x = username
          ? await o.getProfileByUsername(username)
          : await o.getMyProfile();
        if (!et.current || u.signal.aborted) {
          return;
        }

        if (x) {
          h(x);
        }
      } catch (x) {
        if (!et.current || u.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", x);
        const ut = x(x) ? x.status : 0;
        T(ut === likesError.NOT_FOUND ? "notFound" : "server");
      } finally {
        if (et.current && !u.signal.aborted) {
          _(false);
        }
      }
    })();

    return () => {
      u.abort();
    };
  }, [username, c, resetPosts]);

  const st = handleTabChange(async () => {
    if (!(!s || L)) {
      N(true);
      try {
        const u = await C.followUser(s.id);
        b(u);

        if (u === "following" && s.stats) {
          const S = s.stats.followers + 1;

          h((j) =>
            j?.stats ? { ...j, stats: { ...j.stats, followers: S } } : j
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
        N(false);
      }
    }
  }, [s, L]);

  const o = handleTabChange(async () => {
    if (!(!s || L)) {
      N(true);
      try {
        await C.unfollowUser(s.id);
        b("none");

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
        N(false);
      }
    }
  }, [s, A, L]);

  const l = handleTabChange(async () => {
    if (A || M) {
      await o();
    } else {
      await st();
    }
  }, [A, M, st, o]);

  const a = handleTabChange(
    async (u) => {
      if (!s) {
        return;
      }
      const j = s.pinnedPostId === u ? null : u;
      const x = { ...s, pinnedPostId: j };
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

  const w = handleTabChange(async () => {
    if (!(!s || P || E)) {
      D(true);
      try {
        if (F) {
          await C.unblockUser(s.id);
          v(false);
          username.success("Пользователь разблокирован");
        } else {
          await C.blockUser(s.id);
          v(true);
          username.success("Пользователь заблокирован");
          A && b("none");
        }

        if (s.username) {
          o.invalidateProfileCache(s.username);
        }
      } catch (u) {
        console.error("Failed to toggle block:", u);
        username.error("Не удалось выполнить действие");
      } finally {
        D(false);
      }
    }
  }, [s, F, P, E, A]);

  const m = handleTabChange(
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
    isOwnProfile: E,
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

const Ge = z(() =>
  l(
    () => import("./index-BKHOFK-U.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  ).then((t) => ({
    default: t.SettingsModal,
  }))
);

const vt = z(() =>
  l(
    () => import("./index-Bon4s61p.js"),
    __vite__mapDeps([17, 1, 2, 18, 12, 13, 14, 19])
  ).then((t) => ({
    default: t.UserListModal,
  }))
);

export const Profile = ({ username }) => {
  const n = isFollowedBy();
  const c = postsLoading();
  const { openModal, closeModal } = n();

  const h = loading((f) => f.createPost);

  const p = loading((f) => f.profileScrollByUser);

  const _ = loading((f) => f.profileMeasuredHeightsByUser);

  const I = loading((f) => f.setProfileMeasuredHeights);

  const C = username ? p[t] ?? 0 : 0;
  const T = isBlockedBy(null);

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
  } = je({ username: username });

  const Y = username ? `${username}:${activeTab}` : null;
  const et = Y ? _[Y] : undefined;

  const st = updateBanner(
    (f) => {
      if (Y) {
        I(Y, f);
      }
    },
    [Y, I]
  );

  const o = updateBanner(() => {
    if (isFollowing || isRequested) {
      openModal(
        u(G, {
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
    openModal(u(Ge, { onClose: closeModal }));
  };

  const a = updateBanner(() => {
    if (profile) {
      openModal(
        u(vt, { userId: profile.id, type: "followers", title: "Подписчики" })
      );
    }
  }, [profile, openModal]);

  const w = updateBanner(() => {
    if (profile) {
      openModal(
        u(vt, { userId: profile.id, type: "following", title: "Подписки" })
      );
    }
  }, [profile, openModal]);

  const m = async (f, G, ht, Lt) => {
    if (profile) {
      await h({
        wallOwnerId: profile.id,
        text: f,
        spans: G,
        attachments: ht,
        poll: Lt,
      });

      refreshPosts();
    }
  };

  const u = updateBanner(() => {
    if (profile) {
      openModal(
        u(handleLoadMore, {
          wallOwnerId: profile.id,
          placeholder: `Написать на стене ${profile.displayName}`,
          onPostCreated: refreshPosts,
        })
      );
    }
  }, [profile, openModal, refreshPosts]);

  _(() => {
    if (username && T.current !== username && posts.length !== 0) {
      T.current = username;

      !(C <= 0) &&
        (window.scrollTo(0, C),
        requestAnimationFrame(() => window.scrollTo(0, C)));
    }
  }, [username, posts.length, C]);

  const S = T(() => {
    if (activeTab !== "posts" || !profile?.pinnedPostId) {
      return posts;
    }
    const f = posts.find((G) => G.id === profile.pinnedPostId);
    return f
      ? [f, ...posts.filter((G) => G.id !== profile.pinnedPostId)]
      : posts;
  }, [posts, profile?.pinnedPostId, activeTab]);

  const j = T(() => {
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

  const ut = T(() => {
    const f = ["Посты"];

    if (x) {
      f.push("Лайки");
    }

    return f;
  }, [x]);

  const Nt = updateBanner(
    (f) => {
      handleTabChange(x ? (f === 0 ? "posts" : "likes") : "posts");
    },
    [handleTabChange, x]
  );

  const gt = isBlockedBy(null);

  _(() => {
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
    return u(o_1, {
      kind: f ? "server" : "notFound",
      title: f ? "Сервис недоступен" : "Профиль не найден",
      description: f
        ? "Не удалось получить профиль — сервер не ответил. Попробуйте обновить страницу позже."
        : "Пользователя с таким адресом нет. Возможно, профиль удалён или в ссылке опечатка.",
      action: u(handleUnfollow, {
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
        onFollowingClick: w,
        onBannerUpdate: updateBanner,
      }),
      u("div", {
        className: r.tabsWrapper,
        children: u(error, {
          tabs: ut,
          activeIndex: activeTab === "posts" ? 0 : 1,
          onChange: Nt,
        }),
      }),
      u("div", {
        className: r.belowTabs,
        children: [
          j &&
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
                    u(posts, {
                      onSubmit: m,
                      placeholder: isOwnProfile
                        ? "Что нового?"
                        : `Написать на стене ${profile.displayName}`,
                    }),
                  ],
                }),
                u(handleUnfollow, {
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
                  renderPost: (f, G, ht) =>
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
                Y ?? activeTab
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
