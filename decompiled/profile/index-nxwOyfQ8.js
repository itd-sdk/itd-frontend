import {
  u,
  f,
  B,
  M,
  D,
  I,
  q as g_1,
  i,
  d,
  j,
  d as d_1,
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
  w,
  A,
  x,
  H,
  y,
  C,
  E,
  F,
  G,
  _,
  T,
  u as u_1,
  B as B_1,
  o as o_1,
  L,
  V,
  c,
  P,
} from "./index-gHxZkwFX.js";

import { I as I_1 } from "./IconCheck-CLqQBDg1.js";
import { C as C_1 } from "./index-CnQFC_j1.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BrYkGi2j.js",
      "assets/index-gHxZkwFX.js",
      "assets/index-rMCJzo5v.css",
      "assets/index-CnQFC_j1.js",
      "assets/index-CenYh989.css",
      "assets/IconInfo-CYrt_hzO.js",
      "assets/IconNotificationMention-Bf77hpUd.js",
      "assets/IconChevronRight-s5obFhYp.js",
      "assets/IconChevronLeft-CtO78HWI.js",
      "assets/index-B3I1Y1F0.css",
      "assets/index-DaOztjyD.js",
      "assets/index-CxQs2PpW.css",
      "assets/index-E4Wf05Nl.js",
      "assets/IconCheckCircle-CdAOfIvt.js",
      "assets/index-LZt24HUf.css",
      "assets/index-CTnfdlQ7.js",
      "assets/index-DVsaxOjN.css",
      "assets/index-ihHBbRgT.js",
      "assets/IconCheck-CLqQBDg1.js",
      "assets/index-ByXJW_a-.css",
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
    t.SENTRY_RELEASE = { id: "1.1.4" };
    const n = new t.Error().stack;

    if (n) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[n] = "1225a9f0-3609-4be0-bbc0-7c7c2ea0ccc3";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-1225a9f0-3609-4be0-bbc0-7c7c2ea0ccc3";
    }
  } catch {}
})();

const Jt = ({ size = 24 }) =>
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

const ee = "b1Uu";
const se = "nU6f";
const ne = "GbHo";
const oe = "Adde";
const ae = "kHUn";
const re = "vyZj";
const ie = "MPQU";
const le = "SFgZ";
const ce = "fyWE";
const de = "pwTF";
const ue = "wGuQ";
const he = "irsu";
const fe = "ugft";
const me = "EWDS";
const ge = "aDMP";
const we = "KY8n";
const pe = "vqwF";
const be = "ybg1";
const Pe = "WzhY";
const ye = "IdWB";
const ve = "ZVyv";
const Ce = "dUEf";
const ke = "dbT9";
const Ie = "dnaw";
const Ne = "qSfG";
const Le = "R2bA";
const Me = "Yx0P";
const Ae = "YGgg";
const _e = "XNuf";
const Be = "U5Tu";

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
  bio: ve,
  metaItem: Ce,
  followsYou: ke,
  stats: Ie,
  stat: Ne,
  clickable: Le,
  statValue: Me,
  statLabel: Ae,
  bannerPlaceholder: _e,
  emptyPosts: Be,
};

const Se = "MeGm";
const Fe = "Dv0H";
const Te = "YB27";
const Ue = "sCbx";
const De = "WX9K";
const Ee = "Isxf";

const nt = {
  content: Se,
  title: Fe,
  description: Te,
  username: Ue,
  warning: De,
  actions: Ee,
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
    () => import("./index-BrYkGi2j.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
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
  const [_, I] = isFollowLoading(false);
  const T = j()?.subscription?.isActive;
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
            u(d_1, {
              fallback: null,
              children: u(Ve, { isOpen: _, onClose: () => I(false) }),
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
  const I = (() => {
    const v = [];

    if (!isOwnProfile && onBlockUser) {
      v.push({
        id: "block",
        label: isBlocked ? "Разблокировать" : "Заблокировать",
        icon: u(Jt, { size: 18 }),
        danger: !isBlocked,
        onClick: onBlockUser,
      });
    }

    if (!isOwnProfile && onReportUser) {
      v.push({
        id: "report",
        label: "Пожаловаться",
        icon: u(i, { size: 18 }),
        danger: true,
        onClick: onReportUser,
      });
    }

    return v;
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
      u(We, { isOwnProfile: isOwnProfile, isVerified: isVerified, ...p }),
    ],
  });
}

const Oe = z(() =>
  l(() => import("./index-DaOztjyD.js"), __vite__mapDeps([10, 1, 2, 11])).then(
    (t) => ({
      default: t.DrawingCanvas,
    })
  )
);

const $e = z(() =>
  l(
    () => import("./index-E4Wf05Nl.js"),
    __vite__mapDeps([12, 1, 2, 13, 14])
  ).then((t) => ({
    default: t.VerificationModal,
  }))
);

const He = z(() =>
  l(
    () => import("./index-CTnfdlQ7.js"),
    __vite__mapDeps([15, 1, 2, 13, 16])
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
  const [N, F] = isRequested(false);
  const { openModal, closeModal } = isOwnProfile();

  const U = q(() => {
    F(true);
  }, []);

  const D = q(() => {
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

  const A = q(() => {
    openModal(
      u(He, { targetType: "user", targetId: profile.id, onClose: closeModal })
    );
  }, [openModal, closeModal, profile.id]);

  const H = q(() => {
    F(false);
  }, []);

  const x = q(() => {
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

  const W = q(
    async (B) => {
      try {
        const [R, Q] = B.split(",");
        const z = R.match(/:(.*?);/)?.[1] || "image/png";
        const O = atob(Q);
        const tt = new Uint8Array(O.length);
        for (let q = 0; q < O.length; q++) {
          tt[q] = O.charCodeAt(q);
        }
        const y = new Blob([tt], { type: z });
        const X = new File([y], "banner.png", { type: "image/png" });
        const V = await r_1.uploadMedia(X);
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
                  onClick: U,
                  title: "Нарисовать баннер",
                  children: u(isFollowLoading, { size: 20 }),
                }),
                profile.banner?.url &&
                  u("button", {
                    className: `${r.bannerActionButton} ${r.deleteBannerButton}`,
                    onClick: x,
                    title: "Удалить баннер",
                    children: u(onToggleFollow, { size: 20 }),
                  }),
              ],
            }),
        ],
      }),
      N &&
        u(d_1, {
          fallback: null,
          children: u(Oe, { isOpen: N, onClose: H, onSave: W, mode: "banner" }),
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
                  onVerificationRequest: D,
                  onBlockUser: M,
                  onReportUser: A,
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
                        onVerificationRequest: D,
                        onBlockUser: M,
                        onReportUser: A,
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
function Ye({ profile, isBlocked }) {
  const [c, d] = d("posts");

  const [s] = d(() =>
    profile && !isBlocked
      ? p.getCachedWall(profile.username || profile.id, profile.pinnedPostId)
      : null
  );

  const [h, p] = d(s?.data ?? []);
  const [_, I] = d(false);
  const [v, T] = d(s?.nextCursor ?? null);
  const [i, P] = d([]);
  const [L, N] = d(false);
  const [F, C] = d(null);
  const [b, U] = d(false);
  const [D, M] = d(null);

  const A = q(async (o, l, a) => {
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

  const H = q(
    async (o, l) => {
      if (!b) {
        N(true);
      }

      M(null);
      try {
        const a = await p.getUserLikedPosts(o, { cursor: l, limit: 20 });
        const a_data = a.data;

        P((m) => (l ? [...m, ...a_data] : a_data));

        C(a.nextCursor);
        U(true);
      } catch (a) {
        console.error("Failed to fetch liked posts:", a);

        if (a && typeof a == "object" && "status" in a && a.status === 403) {
          M("Лайки скрыты настройками приватности");
        }
      } finally {
        N(false);
      }
    },
    [b]
  );

  h(() => {
    if (profile && !isBlocked) {
      A(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile?.id, isBlocked, A]);

  h(() => {
    if (c === "likes" && profile) {
      H(profile.id);
    }
  }, [c, profile?.id, H]);

  const x = b((o) => o.posts);

  const W = b((o) => o.highlightedPostId);

  const B = b((o) => o._lastPostEdit);

  const R = b((o) => o._lastLikeUpdate);

  const Q = b((o) => o._lastRepostUpdate);

  const z = b((o) => o._lastStatsBatch);

  h(() => {
    if (!W || !profile) {
      return;
    }
    const o = x.find((l) => l.id === W);

    if (o && o.wallOwnerId === profile.id && !h.some((l) => l.id === W)) {
      p((l) => [o, ...l]);
    }
  }, [W, x, profile?.id, h]);

  h(() => {
    if (h.length !== 0) {
      p((o) =>
        o.map((l) => {
          const a = x.find((w) => w.id === l.id);
          return a &&
            (a.editedAt !== l.editedAt || a.attachments !== l.attachments)
            ? a
            : l;
        })
      );
    }
  }, [x]);

  h(() => {
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

  h(() => {
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

  h(() => {
    if (!Q) {
      return;
    }
    const { postId, reposted, countDelta } = Q;

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
  }, [Q]);

  h(() => {
    if (!z || z.length === 0) {
      return;
    }

    const o = new Map(z.map((a) => [a.id, a]));

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
  }, [z]);

  const O = q(() => {
    if (profile && !_) {
      if (c === "posts" && v) {
        A(profile.username || profile.id, profile.pinnedPostId, v);
      } else if (c === "likes" && F && !L) {
        H(profile.id, F);
      }
    }
  }, [profile, c, v, F, _, L, A, H]);

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
      await A(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile, A]);

  const X = q(
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

  const q = q(() => {
    p([]);
    T(null);
    P([]);
    U(false);
    C(null);
    M(null);
    d("posts");
  }, []);

  return {
    posts: c === "posts" ? h : i,
    postsLoading: c === "posts" ? _ : L,
    nextCursor: c === "posts" ? v : F,
    activeTab: c,
    likesError: D,
    hasLoadedLikes: b,
    handleLoadMore: O,
    handlePinPost: tt,
    refreshPosts: y,
    removePost: X,
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
  const [v, T] = d(null);
  const [i, P] = d("none");
  const [L, N] = d(false);
  const [F, C] = d(false);
  const [b, U] = d(false);
  const D = !!(n && s && n.id === s.id);
  const M = i === "following";
  const A = i === "requested";
  const H = s?.interaction?.isFollowedBy ?? false;
  const x = s?.interaction?.isBlockedBy ?? false;

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

  h(() => {
    if (!s || D || !n) {
      P("none");
      C(false);
      return;
    }

    if (s.interaction) {
      s.interaction.isFollowing
        ? P("following")
        : s.interaction.hasOutgoingRequest
        ? P("requested")
        : P("none");

      C(s.interaction.isBlocking);
    }
  }, [s?.id, D, n]);
  const et = A(true);

  h(() => {
    et.current = true;

    return () => {
      et.current = false;
    };
  }, []);

  h(() => {
    const u = new AbortController();

    (async () => {
      const j = I.current !== null && I.current === username;
      I.current = null;

      if (!j) {
        h(null);
        _(true);
        P("none");
        C(false);
        resetPosts();
      }

      T(null);
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
        T(ut === H.NOT_FOUND ? "notFound" : "server");
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
        const u = await handlePinPost.followUser(s.id);
        P(u);

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
        await handlePinPost.unfollowUser(s.id);
        P("none");

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
        N(false);
      }
    }
  }, [s, M, L]);

  const l = handleTabChange(async () => {
    if (M || A) {
      await o();
    } else {
      await st();
    }
  }, [M, A, st, o]);

  const a = handleTabChange(
    async (u) => {
      if (!s) {
        return;
      }
      const j = s.pinnedPostId === u ? null : u;
      const E = { ...s, pinnedPostId: j };
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

  const w = handleTabChange(async () => {
    if (!(!s || b || D)) {
      U(true);
      try {
        if (F) {
          await handlePinPost.unblockUser(s.id);
          C(false);
          username.success("Пользователь разблокирован");
        } else {
          await handlePinPost.blockUser(s.id);
          C(true);
          username.success("Пользователь заблокирован");
          M && P("none");
        }

        if (s.username) {
          o.invalidateProfileCache(s.username);
        }
      } catch (u) {
        console.error("Failed to toggle block:", u);
        username.error("Не удалось выполнить действие");
      } finally {
        U(false);
      }
    }
  }, [s, F, b, D, M]);

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
    error: v,
    posts: posts,
    postsLoading: postsLoading,
    nextCursor: nextCursor,
    isOwnProfile: D,
    isFollowing: M,
    isFollowedBy: H,
    isBlockedBy: x,
    isRequested: A,
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
    () => import("./index-BrYkGi2j.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  ).then((t) => ({
    default: t.SettingsModal,
  }))
);

const Ct = z(() =>
  l(
    () => import("./index-ihHBbRgT.js"),
    __vite__mapDeps([17, 1, 2, 18, 12, 13, 14, 19])
  ).then((t) => ({
    default: t.UserListModal,
  }))
);

export const Profile = ({ username }) => {
  const n = nextCursor();
  const c = E();
  const { openModal, closeModal } = n();

  const h = isOwnProfile((f) => f.createPost);

  const p = isOwnProfile((f) => f.profileScrollByUser);

  const _ = isOwnProfile((f) => f.profileMeasuredHeightsByUser);

  const I = isOwnProfile((f) => f.setProfileMeasuredHeights);

  const v = username ? p[t] ?? 0 : 0;
  const T = isRequested(null);

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
        u(postsLoading, {
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
        u(Ct, { userId: profile.id, type: "followers", title: "Подписчики" })
      );
    }
  }, [profile, openModal]);

  const w = updateBanner(() => {
    if (profile) {
      openModal(
        u(Ct, { userId: profile.id, type: "following", title: "Подписки" })
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
        u(G, {
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

      !(v <= 0) &&
        (window.scrollTo(0, v),
        requestAnimationFrame(() => window.scrollTo(0, v)));
    }
  }, [username, posts.length, v]);

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

  const E =
    isOwnProfile ||
    profile?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const ut = T(() => {
    const f = ["Посты"];

    if (E) {
      f.push("Лайки");
    }

    return f;
  }, [E]);

  const Nt = updateBanner(
    (f) => {
      handleTabChange(E ? (f === 0 ? "posts" : "likes") : "posts");
    },
    [handleTabChange, E]
  );

  const gt = isRequested(null);

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
    return u(B_1, {
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
        children: u(o_1, {
          tabs: ut,
          activeIndex: activeTab === "posts" ? 0 : 1,
          onChange: Nt,
        }),
      }),
      u("div", {
        className: r.belowTabs,
        children: [
          j &&
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
