import {
  u,
  f,
  B,
  M,
  D,
  I,
  g,
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
  q as q_1,
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
  b as b_1,
  L,
  N,
  V,
  c,
  P,
} from "./index-DDTOXJaD.js";

import { I as I_1 } from "./IconCheck-CBJ3CY_b.js";
import { C as C_1 } from "./index-c_XPJ6EZ.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-CjbjUWQM.js",
      "assets/index-DDTOXJaD.js",
      "assets/index-4bilolKF.css",
      "assets/index-c_XPJ6EZ.js",
      "assets/index-BVYTUL_A.css",
      "assets/IconInfo-C6zaR4cF.js",
      "assets/IconNotificationMention-DnVi52VK.js",
      "assets/IconChevronRight--Up5c7Ds.js",
      "assets/IconChevronLeft-6Kf2Hf_x.js",
      "assets/index-CJWNj_8Z.css",
      "assets/index-CbJVrfan.js",
      "assets/index-D2iLNOxO.css",
      "assets/index-Db4dAqaV.js",
      "assets/IconCheckCircle-D2LuwgVw.js",
      "assets/index-DW6FWfCj.css",
      "assets/index-CIy8EPEK.js",
      "assets/index-CqJXIM9s.css",
      "assets/index-DQRgfqiH.js",
      "assets/IconCheck-CBJ3CY_b.js",
      "assets/index-BY_4Q17L.css",
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
      t._sentryDebugIds[n] = "ca319c56-ea23-4370-996b-12de0c62ff1a";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-ca319c56-ea23-4370-996b-12de0c62ff1a";
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

const ee = "j3Sf";
const se = "GZxk";
const ne = "aluj";
const oe = "cMWl";
const ae = "Gwlz";
const re = "haP2";
const ie = "FvaG";
const le = "WnVc";
const ce = "z4mD";
const de = "qOwT";
const ue = "bzNJ";
const he = "DqdV";
const fe = "jv2i";
const me = "qQcW";
const we = "JrzM";
const ge = "fZLi";
const pe = "WaNO";
const Pe = "TK5A";
const be = "HrqU";
const ye = "tlBl";
const Ce = "Llfu";
const ve = "m9Cn";
const ke = "HgST";
const Ne = "sgfz";
const Ie = "ZrGY";
const Le = "RcqG";
const Me = "XGiL";
const Ae = "FpPW";
const _e = "ReO9";
const Be = "BgiA";

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
  bio: Ce,
  metaItem: ve,
  followsYou: ke,
  stats: Ne,
  stat: Ie,
  clickable: Le,
  statValue: Me,
  statLabel: Ae,
  bannerPlaceholder: _e,
  emptyPosts: Be,
};

const Se = "WZbf";
const Te = "k8OU";
const Fe = "YdwT";
const De = "nHaV";
const Ee = "IcPD";
const Ue = "fS6L";

const nt = {
  content: Se,
  title: Te,
  description: Fe,
  username: De,
  warning: Ee,
  actions: Ue,
};

function Re({ username, displayName, avatar, onConfirm, onClose }) {
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
function xe(t) {
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
    () => import("./index-CjbjUWQM.js"),
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
  const [_, N] = isFollowLoading(false);
  const F = i()?.subscription?.isActive;
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
              !F &&
                u(B, {
                  variant: "secondary",
                  onClick: () => N(true),
                  fullWidth: fullWidth,
                  children: "ИТД НУКСТА",
                }),
            ],
          }),
          _ &&
            u(j, {
              fallback: null,
              children: u(Ve, { isOpen: _, onClose: () => N(false) }),
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
          children: u(g, { size: 18 }),
        }),
      u(Oe, { isOwnProfile: isOwnProfile, isVerified: isVerified, ...p }),
    ],
  });
}

const We = z(() =>
  l(() => import("./index-CbJVrfan.js"), __vite__mapDeps([10, 1, 2, 11])).then(
    (t) => ({
      default: t.DrawingCanvas,
    })
  )
);

const $e = z(() =>
  l(
    () => import("./index-Db4dAqaV.js"),
    __vite__mapDeps([12, 1, 2, 13, 14])
  ).then((t) => ({
    default: t.VerificationModal,
  }))
);

const ze = z(() =>
  l(
    () => import("./index-CIy8EPEK.js"),
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
  const [I, T] = isRequested(false);
  const { openModal, closeModal } = isOwnProfile();

  const D = q(() => {
    T(true);
  }, []);

  const E = q(() => {
    openModal(u($e, { onClose: closeModal }));
  }, [openModal, closeModal]);

  const M = q(() => {
    if (isBlocked) {
      onBlockUser?.();
      return;
    }
    openModal(
      u(Re, {
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
      u(ze, { targetType: "user", targetId: profile.id, onClose: closeModal })
    );
  }, [openModal, closeModal, profile.id]);

  const z = q(() => {
    T(false);
  }, []);

  const R = q(() => {
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
        const [x, J] = B.split(",");
        const H = x.match(/:(.*?);/)?.[1] || "image/png";
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
      } catch (x) {
        console.error("Failed to upload banner:", x);
        profile.error("Не удалось загрузить баннер");
        throw x;
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
                    onClick: R,
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
          children: u(We, { isOpen: I, onClose: z, onSave: O, mode: "banner" }),
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
                  children: ["Был(а) в сети: ", xe(profile.lastSeen)],
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
function je({ profile, isBlocked }) {
  const [c, d] = d("posts");

  const [s] = d(() =>
    profile && !isBlocked
      ? p.getCachedWall(profile.username || profile.id, profile.pinnedPostId)
      : null
  );

  const [h, p] = d(s?.data ?? []);
  const [_, N] = d(false);
  const [C, F] = d(s?.nextCursor ?? null);
  const [i, b] = d([]);
  const [L, I] = d(false);
  const [T, v] = d(null);
  const [P, D] = d(false);
  const [E, M] = d(null);

  const A = q(async (o, l, a) => {
    N(true);
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
      N(false);
    }
  }, []);

  const z = q(
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
        D(true);
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

  y(() => {
    if (profile && !isBlocked) {
      A(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile?.id, isBlocked, A]);

  y(() => {
    if (c === "likes" && profile) {
      z(profile.id);
    }
  }, [c, profile?.id, z]);

  const R = b((o) => o.posts);

  const O = b((o) => o.highlightedPostId);

  const B = b((o) => o._lastPostEdit);

  const x = b((o) => o._lastLikeUpdate);

  const J = b((o) => o._lastRepostUpdate);

  const H = b((o) => o._lastStatsBatch);

  y(() => {
    if (!O || !profile) {
      return;
    }
    const o = R.find((l) => l.id === O);

    if (o && o.wallOwnerId === profile.id && !h.some((l) => l.id === O)) {
      p((l) => [o, ...l]);
    }
  }, [O, R, profile?.id, h]);

  y(() => {
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
    if (!x) {
      return;
    }
    const { postId, myReaction, totalDelta } = x;

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
  }, [x]);

  y(() => {
    if (!J) {
      return;
    }
    const { postId, reposted, countDelta } = J;

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
  }, [J]);

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

    p((a) => a.map(l));

    b((a) => a.map(l));
  }, [H]);

  const W = q(() => {
    if (profile && !_) {
      if (c === "posts" && C) {
        A(profile.username || profile.id, profile.pinnedPostId, C);
      } else if (c === "likes" && T && !L) {
        z(profile.id, T);
      }
    }
  }, [profile, c, C, T, _, L, A, z]);

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
    F(null);
    b([]);
    D(false);
    v(null);
    M(null);
    d("posts");
  }, []);

  return {
    posts: c === "posts" ? h : i,
    postsLoading: c === "posts" ? _ : L,
    nextCursor: c === "posts" ? C : T,
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
function Ge({ username }) {
  const n = q_1((u) => u.profile);

  const c = n?.id;

  const d = q_1((u) => u.setProfile);

  const [s, h] = d(() => (username ? o.getCachedProfile(username) : null));

  const [p, _] = d(s === null);
  const N = A(s ? username ?? null : null);
  const [C, F] = d(null);
  const [i, b] = d("none");
  const [L, I] = d(false);
  const [T, v] = d(false);
  const [P, D] = d(false);
  const E = !!(n && s && n.id === s.id);
  const M = i === "following";
  const A = i === "requested";
  const z = s?.interaction?.isFollowedBy ?? false;
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
  } = je({ profile: s, isBlocked: T });

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
      const G = N.current !== null && N.current === username;
      N.current = null;

      if (!G) {
        h(null);
        _(true);
        b("none");
        v(false);
        resetPosts();
      }

      F(null);
      try {
        const U = username
          ? await o.getProfileByUsername(username)
          : await o.getMyProfile();
        if (!et.current || u.signal.aborted) {
          return;
        }

        if (U) {
          h(U);
        }
      } catch (U) {
        if (!et.current || u.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", U);
        const ut = nextCursor(U) ? U.status : 0;
        F(ut === likesError.NOT_FOUND ? "notFound" : "server");
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
      I(true);
      try {
        const u = await C.followUser(s.id);
        b(u);

        if (u === "following" && s.stats) {
          const S = s.stats.followers + 1;

          h((G) =>
            G?.stats ? { ...G, stats: { ...G.stats, followers: S } } : G
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

  const o = handleTabChange(async () => {
    if (!(!s || L)) {
      I(true);
      try {
        await C.unfollowUser(s.id);
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
      const G = s.pinnedPostId === u ? null : u;
      const U = { ...s, pinnedPostId: G };
      h(U);

      if (n) {
        d(U);
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

  const g = handleTabChange(async () => {
    if (!(!s || P || E)) {
      D(true);
      try {
        if (T) {
          await C.unblockUser(s.id);
          v(false);
          username.success("Пользователь разблокирован");
        } else {
          await C.blockUser(s.id);
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
        D(false);
      }
    }
  }, [s, T, P, E, M]);

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
    isFollowing: M,
    isFollowedBy: z,
    isBlockedBy: R,
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
    isBlocked: T,
    handleBlockUser: g,
  };
}

const Ye = z(() =>
  l(
    () => import("./index-CjbjUWQM.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  ).then((t) => ({
    default: t.SettingsModal,
  }))
);

const vt = z(() =>
  l(
    () => import("./index-DQRgfqiH.js"),
    __vite__mapDeps([17, 1, 2, 18, 12, 13, 14, 19])
  ).then((t) => ({
    default: t.UserListModal,
  }))
);

export const Profile = ({ username }) => {
  const n = isFollowedBy();
  const c = F();
  const { openModal, closeModal } = n();

  const h = loading((f) => f.createPost);

  const p = loading((f) => f.profileScrollByUser);

  const _ = loading((f) => f.profileMeasuredHeightsByUser);

  const N = loading((f) => f.setProfileMeasuredHeights);

  const C = username ? p[t] ?? 0 : 0;
  const F = isRequested(null);

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
  } = Ge({ username: username });

  const j = username ? `${username}:${activeTab}` : null;
  const et = j ? _[j] : undefined;

  const st = updateBanner(
    (f) => {
      if (j) {
        N(j, f);
      }
    },
    [j, N]
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
    openModal(u(Ye, { onClose: closeModal }));
  };

  const a = updateBanner(() => {
    if (profile) {
      openModal(
        u(vt, { userId: profile.id, type: "followers", title: "Подписчики" })
      );
    }
  }, [profile, openModal]);

  const g = updateBanner(() => {
    if (profile) {
      openModal(
        u(vt, { userId: profile.id, type: "following", title: "Подписки" })
      );
    }
  }, [profile, openModal]);

  const m = async (f, Y, ht, Lt) => {
    if (profile) {
      await h({
        wallOwnerId: profile.id,
        text: f,
        spans: Y,
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
    if (username && F.current !== username && posts.length !== 0) {
      F.current = username;

      !(C <= 0) &&
        (window.scrollTo(0, C),
        requestAnimationFrame(() => window.scrollTo(0, C)));
    }
  }, [username, posts.length, C]);

  const S = postsLoading(() => {
    if (activeTab !== "posts" || !profile?.pinnedPostId) {
      return posts;
    }
    const f = posts.find((Y) => Y.id === profile.pinnedPostId);
    return f
      ? [f, ...posts.filter((Y) => Y.id !== profile.pinnedPostId)]
      : posts;
  }, [posts, profile?.pinnedPostId, activeTab]);

  const G = postsLoading(() => {
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

  const U =
    isOwnProfile ||
    profile?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const ut = postsLoading(() => {
    const f = ["Посты"];

    if (U) {
      f.push("Лайки");
    }

    return f;
  }, [U]);

  const It = updateBanner(
    (f) => {
      handleTabChange(U ? (f === 0 ? "posts" : "likes") : "posts");
    },
    [handleTabChange, U]
  );

  const wt = isRequested(null);

  _(() => {
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
    return u(b_1, {
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
        onFollowingClick: g,
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
          G &&
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
                  renderPost: (f, Y, ht) =>
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
                j ?? activeTab
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
