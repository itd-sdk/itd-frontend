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
  G,
  H,
  T,
  J,
  c as c_1,
  L,
  V,
  a as a_1,
  P,
} from "./index-BewGW5_v.js";

import { I } from "./IconCheck-DBT_Qf2j.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-Dl97JlEZ.js",
      "assets/index-BewGW5_v.js",
      "assets/index-DqUAqB6M.css",
      "assets/IconInfo-BF0u3h0A.js",
      "assets/IconNotificationMention-CROhlU2l.js",
      "assets/IconChevronRight-DvXA9WYU.js",
      "assets/IconChevronLeft-Cn8Oe6J-.js",
      "assets/index-Ciwux2Cq.css",
      "assets/index-DblXCrCX.js",
      "assets/index-CuNYDd7R.css",
      "assets/index-CxLlStIf.js",
      "assets/IconCheckCircle-CkswSG88.js",
      "assets/index-xhYl7sPH.css",
      "assets/index-kZ_Y304F.js",
      "assets/index-DuOB1e42.css",
      "assets/index-t9VMuw6I.js",
      "assets/IconCheck-DBT_Qf2j.js",
      "assets/index-BV2uW6Cu.css",
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
      t._sentryDebugIds[o] = "977f1346-6440-4914-9c79-d824fdb51f20";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-977f1346-6440-4914-9c79-d824fdb51f20";
    }
  } catch {}
})();

const Kt = ({ size = 24 }) =>
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

const Jt = "y8iA";
const Xt = "d3WR";
const Zt = "wpv7";
const Qt = "H1mo";
const te = "UfFU";
const ee = "lDVM";
const se = "HSCi";
const ne = "O4A4";
const oe = "APod";
const ae = "wUeR";
const re = "aVzT";
const ie = "UWge";
const le = "HquE";
const ce = "sMw7";
const de = "DydG";
const ue = "IrPA";
const he = "KDyw";
const fe = "Ru5n";
const me = "NpWZ";
const we = "BXuP";
const ge = "L0w2";
const pe = "M59i";
const Pe = "tyj7";
const be = "s7Dy";
const ye = "V85j";
const ve = "pCj9";
const Ce = "scXa";
const ke = "zf0W";
const Ie = "sucM";
const Ne = "G4zJ";
const Le = "vyFb";

const i = {
  page: Jt,
  tabsWrapper: Xt,
  belowTabs: Zt,
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

const Me = "fxLC";
const Ae = "tIGu";
const Be = "RUhD";
const _e = "trSS";
const Se = "zFeu";
const De = "BEao";

const et = {
  content: Me,
  title: Ae,
  description: Be,
  username: _e,
  warning: Se,
  actions: De,
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
function Ue(t) {
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
const Te = z(() =>
  _(
    () => import("./index-Dl97JlEZ.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
  ).then((t) => ({
    default: t.SubscriptionModal,
  }))
);
function Ee({
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
        icon: a(Kt, { size: 18 }),
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
      a(Ee, { isOwnProfile: isOwnProfile, isVerified: isVerified, ...y }),
    ],
  });
}

const Re = z(() =>
  _(() => import("./index-DblXCrCX.js"), __vite__mapDeps([8, 1, 2, 9])).then(
    (t) => ({
      default: t.DrawingCanvas,
    })
  )
);

const Ve = z(() =>
  _(
    () => import("./index-CxLlStIf.js"),
    __vite__mapDeps([10, 1, 2, 11, 12])
  ).then((t) => ({
    default: t.VerificationModal,
  }))
);

const xe = z(() =>
  _(
    () => import("./index-kZ_Y304F.js"),
    __vite__mapDeps([13, 1, 2, 11, 14])
  ).then((t) => ({
    default: t.ReportModal,
  }))
);

function We(t) {
  return new Date(t).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function Oe({
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
    openModal(a(Ve, { onClose: closeModal }));
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
      a(xe, { targetType: "user", targetId: profile.id, onClose: closeModal })
    );
  }, [openModal, closeModal, profile.id]);

  const H = q(() => {
    F(false);
  }, []);

  const E = q(async () => {
    try {
      await r.updateProfile({ bannerId: null });
      onBannerUpdate?.(null);
    } catch (x) {
      console.error("Failed to delete banner:", x);
    }
  }, [onBannerUpdate]);

  const R = q(
    async (x) => {
      try {
        const [W, j] = x.split(",");
        const Q = W.match(/:(.*?);/)?.[1] || "image/png";
        const z = atob(j);
        const Y = new Uint8Array(z.length);
        for (let q = 0; q < z.length; q++) {
          Y[q] = z.charCodeAt(q);
        }
        const b = new Blob([Y], { type: Q });
        const J = new File([b], "banner.png", { type: "image/png" });
        const O = await isFollowLoading.uploadMedia(J);
        await r.updateProfile({ bannerId: O.id });

        onBannerUpdate?.({
          id: O.id,
          type: "image",
          url: O.url,
          width: O.width,
          height: O.height,
        });
      } catch (W) {
        console.error("Failed to upload banner:", W);
        profile.error("Не удалось загрузить баннер");
        throw W;
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
                    onClick: E,
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
                        onReportUser: T,
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
                  children: ["Был(а) в сети: ", Ue(profile.lastSeen)],
                }),
              profile.createdAt &&
                a("span", {
                  className: i.metaItem,
                  children: [
                    a(Yt, {}),
                    " Регистрация: ",
                    We(profile.createdAt),
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
function $e({ profile, isBlocked }) {
  const [d, u] = d("posts");
  const [s, c] = d([]);
  const [y, M] = d(false);
  const [v, I] = d(null);
  const [S, n] = d([]);
  const [D, A] = d(false);
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

  const T = q(
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
      T(profile.id);
    }
  }, [d, profile?.id, T]);

  const H = c((a) => a.posts);

  const E = c((a) => a.highlightedPostId);

  const R = c((a) => a._lastPostEdit);

  const x = c((a) => a._lastLikeUpdate);

  const W = c((a) => a._lastRepostUpdate);

  const j = c((a) => a._lastStatsBatch);

  y(() => {
    if (!E || !profile) {
      return;
    }
    const a = H.find((l) => l.id === E);

    if (a && a.wallOwnerId === profile.id && !s.some((l) => l.id === E)) {
      c((l) => [a, ...l]);
    }
  }, [E, H, profile?.id, s]);

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
    if (!x) {
      return;
    }
    const { postId, myReaction, totalDelta } = x;

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
  }, [x]);

  y(() => {
    if (!W) {
      return;
    }
    const { postId, reposted, countDelta } = W;

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
  }, [W]);

  y(() => {
    if (!j || j.length === 0) {
      return;
    }

    const a = new Map(j.map((r) => [r.id, r]));

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
  }, [j]);

  const Q = q(() => {
    if (profile && !y) {
      if (d === "posts" && v) {
        L(profile.username || profile.id, profile.pinnedPostId, v);
      } else if (d === "likes" && p && !D) {
        T(profile.id, p);
      }
    }
  }, [profile, d, v, p, y, D, L, T]);

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

  const J = q((a) => {
    u(a);
  }, []);

  const O = q(() => {
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
    postsLoading: d === "posts" ? y : D,
    nextCursor: d === "posts" ? v : p,
    activeTab: d,
    likesError: N,
    hasLoadedLikes: B,
    handleLoadMore: Q,
    handlePinPost: z,
    refreshPosts: Y,
    removePost: b,
    handleTabChange: J,
    resetPosts: O,
  };
}
function ze({ username }) {
  const o = nextCursor((h) => h.profile);

  const d = o?.id;

  const u = nextCursor((h) => h.setProfile);

  const [s, c] = d(null);
  const [y, M] = d(true);
  const [v, I] = d(null);
  const [S, n] = d("none");
  const [D, A] = d(false);
  const [p, F] = d(false);
  const [B, P] = d(false);
  const N = !!(o && s && o.id === s.id);
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
  } = $e({ profile: s, isBlocked: p });

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
  const V = A(true);

  y(() => {
    V.current = true;

    return () => {
      V.current = false;
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
        if (!V.current || h.signal.aborted) {
          return;
        }

        if (_) {
          c(_);
        }
      } catch (_) {
        if (!V.current || h.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", _);
        I("Профиль не найден");
      } finally {
        if (V.current && !h.signal.aborted) {
          M(false);
        }
      }
    })();

    return () => {
      h.abort();
    };
  }, [username, d, resetPosts]);

  const tt = resetPosts(async () => {
    if (!(!s || D)) {
      A(true);
      try {
        const h = await C.followUser(s.id);
        n(h);

        if (h === "following" && s.stats) {
          const U = s.stats.followers + 1;

          c((_) =>
            _?.stats ? { ..._, stats: { ..._.stats, followers: U } } : _
          );

          if (s.username) {
            r.updateProfileCache(s.username, {
              stats: { ...s.stats, followers: U },
            });
          }
        }
      } catch (h) {
        console.error("Failed to follow:", h);
      } finally {
        A(false);
      }
    }
  }, [s, D]);

  const a = resetPosts(async () => {
    if (!(!s || D)) {
      A(true);
      try {
        await C.unfollowUser(s.id);
        n("none");

        if (C && s.stats) {
          const h = s.stats.followers - 1;

          c((U) =>
            U?.stats ? { ...U, stats: { ...U.stats, followers: h } } : U
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
  }, [s, C, D]);

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

  const w = resetPosts(async () => {
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

  const f = resetPosts(
    (h) => {
      c((U) => (U ? { ...U, banner: h } : null));

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
    isFollowedBy: T,
    isBlockedBy: H,
    isRequested: L,
    isFollowLoading: D,
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
    () => import("./index-Dl97JlEZ.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
  ).then((t) => ({
    default: t.SettingsModal,
  }))
);

const yt = z(() =>
  _(
    () => import("./index-t9VMuw6I.js"),
    __vite__mapDeps([15, 1, 2, 16, 10, 11, 12, 17])
  ).then((t) => ({
    default: t.UserListModal,
  }))
);

export const Profile = ({ username }) => {
  const o = isBlocked();
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

  const V = username ? `${username}:${activeTab}` : null;
  const tt = V ? M[V] : undefined;

  const a = updateBanner(
    (g) => {
      if (V) {
        v(V, g);
      }
    },
    [V, v]
  );

  const l = updateBanner(() => {
    if (isFollowing || isRequested) {
      openModal(
        a(G, {
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

  const w = updateBanner(() => {
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

  const h = async (g, G, dt, Nt) => {
    if (profile) {
      await c({
        wallOwnerId: profile.id,
        text: g,
        spans: G,
        attachments: dt,
        poll: Nt,
      });

      refreshPosts();
    }
  };

  const U = updateBanner(() => {
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

  const _ = isRequested(() => {
    if (activeTab !== "posts" || !profile?.pinnedPostId) {
      return posts;
    }
    const g = posts.find((G) => G.id === profile.pinnedPostId);
    return g
      ? [g, ...posts.filter((G) => G.id !== profile.pinnedPostId)]
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
    const g = ["Посты"];

    if (rt) {
      g.push("Лайки");
    }

    return g;
  }, [rt]);

  const It = updateBanner(
    (g) => {
      handleTabChange(rt ? (g === 0 ? "posts" : "likes") : "posts");
    },
    [handleTabChange, rt]
  );

  const mt = error(null);

  handleTabChange(() => {
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
          a(Oe, {
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
            children: a(c_1, {
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
                      onClick: U,
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
                    V,
                    {
                      posts: _,
                      renderPost: (g, G, dt) =>
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
                    V ?? activeTab
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
