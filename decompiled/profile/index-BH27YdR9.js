import {
  a,
  q as f_1,
  B,
  M,
  D,
  g,
  h,
  i,
  d,
  c as j_1,
  k,
  z,
  l,
  _,
  m,
  n,
  q,
  o,
  r as r_1,
  a as a_1,
  s,
  v,
  U,
  p,
  y,
  c,
  w,
  A,
  x,
  d as d_1,
  E,
  F,
  o as o_1,
  T,
  H,
  J,
  V,
  P,
  S,
} from "./index-DDCL-vHK.js";

import { I } from "./IconCheck-aKs2NOQh.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-Cs8C4zj9.js",
      "assets/index-DDCL-vHK.js",
      "assets/index-Dw2m7COV.css",
      "assets/IconNotificationMention-e79ywpKW.js",
      "assets/IconInfo-CcKxyY8p.js",
      "assets/index-PK1FQ786.css",
      "assets/index-CtxhrCFP.js",
      "assets/index-OH_PF-Xj.css",
      "assets/index-CKEZhVnc.js",
      "assets/IconCheckCircle-DsXIWG-y.js",
      "assets/index-D9L97WUE.css",
      "assets/index-CpKibEpf.js",
      "assets/index-DUNfAr-5.css",
      "assets/index-QiVGrj3x.js",
      "assets/IconCheck-aKs2NOQh.js",
      "assets/index-CZsk7fWV.css",
    ])
) => i.map((i) => d[i]);
(() => {
  try {
    const e =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "1.1.0" };
    const n = new e.Error().stack;

    if (n) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[n] = "db5d905c-2bd5-4bd4-8593-d2b298ff04dd";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-db5d905c-2bd5-4bd4-8593-d2b298ff04dd";
    }
  } catch {}
})();

const qe = ({ size = 24 }) =>
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

const Ge = () =>
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

const Je = "QmGK";
const je = "qs8S";
const Ke = "hAq2";
const Ye = "iqDQ";
const Qe = "unsN";
const Ze = "yK7w";
const Xe = "HJpv";
const et = "cuyJ";
const tt = "kqp2";
const st = "EyGM";
const nt = "xS7Z";
const ot = "sJ36";
const at = "BKRb";
const rt = "oiwx";
const it = "Hk2U";
const lt = "XSP8";
const ct = "EyVS";
const dt = "mWAj";
const ut = "vcgi";
const ht = "ppFR";
const ft = "utok";
const mt = "l2t8";
const gt = "V4pn";
const wt = "Cr5y";
const pt = "OP25";
const Pt = "yP6N";
const bt = "G8lz";
const yt = "CG26";
const vt = "mWCO";
const Ct = "KxYy";
const kt = "sGhi";

const r = {
  page: Je,
  tabsWrapper: je,
  tabs: Ke,
  createPostWrapper: Ye,
  writePostButton: Qe,
  profileCard: Ze,
  banner: Xe,
  bannerActions: et,
  bannerActionButton: tt,
  deleteBannerButton: st,
  profileContent: nt,
  avatarRow: ot,
  avatar: at,
  actions: rt,
  ownActions: it,
  mobileActions: lt,
  infoContainer: ct,
  userInfo: dt,
  name: ut,
  username: ht,
  bio: ft,
  metaItem: mt,
  followsYou: gt,
  stats: wt,
  stat: pt,
  clickable: Pt,
  statValue: bt,
  statLabel: yt,
  error: vt,
  bannerPlaceholder: Ct,
  emptyPosts: kt,
};

const Nt = "Jc89";
const It = "kjSR";
const Lt = "UeFb";
const At = "zckO";
const Mt = "SGAg";
const Bt = "BDJt";

const ee = {
  content: Nt,
  title: It,
  description: Lt,
  username: At,
  warning: Mt,
  actions: Bt,
};

function _t({ username, displayName, avatar, onConfirm, onClose }) {
  const d = () => {
    onConfirm();
    onClose();
  };
  return a(M, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: ee.content,
      children: [
        a(f_1, { src: avatar, alt: displayName, size: "lg" }),
        a("h2", {
          className: ee.title,
          children: "Заблокировать пользователя?",
        }),
        a("p", {
          className: ee.description,
          children: [
            "Вы уверены, что хотите заблокировать",
            " ",
            a("strong", { children: displayName }),
            username &&
              a("span", {
                className: ee.username,
                children: [" (@", username, ")"],
              }),
            "?",
          ],
        }),
        a("p", {
          className: ee.warning,
          children:
            "Заблокированный пользователь не сможет видеть ваш профиль и контент.",
        }),
        a("div", {
          className: ee.actions,
          children: [
            a(B, {
              variant: "secondary",
              onClick: () => onClose(),
              fullWidth: true,
              children: "Отмена",
            }),
            a(B, {
              variant: "danger",
              onClick: () => d(),
              fullWidth: true,
              children: "Заблокировать",
            }),
          ],
        }),
      ],
    }),
  });
}
function fe(e, n, i, l) {
  const s = Math.abs(e);
  const d = s % 10;
  const b = s % 100;
  return b >= 11 && b <= 19 ? l : d === 1 ? n : d >= 2 && d <= 4 ? i : l;
}
function St(e) {
  if (!e) {
    return null;
  }
  switch (e.unit) {
    case "just_now": {
      return "только что";
    }
    case "minutes": {
      const n = e.value ?? 1;
      const i = fe(n, "минуту", "минуты", "минут");
      return `${n} ${i} назад`;
    }
    case "hours": {
      const n = e.value ?? 1;
      const i = fe(n, "час", "часа", "часов");
      return `${n} ${i} назад`;
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
function me(e) {
  return e >= 1000000 /* 1e6 */
    ? `${(e / 1000000) /* 1e6 */
        .toFixed(1)}M`
    : e >= 1000 /* 1e3 */
    ? `${(e / 1000) /* 1e3 */
        .toFixed(1)}K`
    : e.toString();
}
function ge({
  followers,
  following,
  isPhone = false,
  onFollowersClick,
  onFollowingClick,
}) {
  return a("div", {
    className: r.stats,
    children: [
      a("div", {
        className: `${r.stat} ${onFollowersClick ? r.clickable : ""}`,
        onClick: onFollowersClick,
        children: [
          a("span", { className: r.statValue, children: me(followers) }),
          a("span", { className: r.statLabel, children: "подписчиков" }),
        ],
      }),
      isPhone && a("hr", {}),
      a("div", {
        className: `${r.stat} ${onFollowingClick ? r.clickable : ""}`,
        onClick: onFollowingClick,
        children: [
          a("span", { className: r.statValue, children: me(following) }),
          a("span", { className: r.statLabel, children: "подписок" }),
        ],
      }),
    ],
  });
}
const Ft = z(() =>
  _(
    () => import("./index-Cs8C4zj9.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5])
  ).then((e) => ({
    default: e.SubscriptionModal,
  }))
);
function Dt({
  isOwnProfile,
  isFollowing,
  isRequested = false,
  isFollowLoading,
  onEditProfile,
  onToggleFollow,
  fullWidth = false,
}) {
  const [M, y] = onToggleFollow(false);
  const x = j_1()?.subscription?.isActive;
  return isOwnProfile
    ? a(isFollowLoading, {
        children: [
          a("div", {
            className: r.ownActions,
            children: [
              a(B, {
                onClick: onEditProfile,
                fullWidth: fullWidth,
                children: "Редактировать",
              }),
              !x &&
                a(B, {
                  variant: "secondary",
                  onClick: () => y(true),
                  fullWidth: fullWidth,
                  children: "ИТД НУКСТА",
                }),
            ],
          }),
          M &&
            a(k, {
              fallback: null,
              children: a(Ft, { isOpen: M, onClose: () => y(false) }),
            }),
        ],
      })
    : a(isFollowLoading, {
        children: a(B, {
          variant: isFollowing || isRequested ? "secondary" : "primary",
          onClick: onToggleFollow,
          disabled: isFollowLoading,
          fullWidth: fullWidth,
          children: isFollowing
            ? a(isFollowLoading, {
                children: [a(I, { size: 18 }), "Вы подписаны"],
              })
            : isRequested
            ? "Заявка отправлена"
            : a(isFollowLoading, {
                children: [a(m, { size: 18 }), "Подписаться"],
              }),
        }),
      });
}
function we({
  isOwnProfile,
  isVerified = false,
  isBlocked = false,
  onVerificationRequest,
  onBlockUser,
  onReportUser,
  ...b
}) {
  const y = (() => {
    const k = [];

    if (!isOwnProfile && onBlockUser) {
      k.push({
        id: "block",
        label: isBlocked ? "Разблокировать" : "Заблокировать",
        icon: a(qe, { size: 18 }),
        danger: !isBlocked,
        onClick: onBlockUser,
      });
    }

    if (!isOwnProfile && onReportUser) {
      k.push({
        id: "report",
        label: "Пожаловаться",
        icon: a(isBlocked, { size: 18 }),
        danger: true,
        onClick: onReportUser,
      });
    }

    return k;
  })();
  return a("div", {
    className: r.actions,
    children: [
      y.length > 0 &&
        a(D, {
          trigger: a(B, {
            variant: "secondary",
            iconOnly: true,
            children: a(g, { size: 18 }),
          }),
          items: y,
          position: "bottom-right",
        }),
      isOwnProfile &&
        !isVerified &&
        onVerificationRequest &&
        a(B, {
          variant: "secondary",
          iconOnly: true,
          onClick: onVerificationRequest,
          children: a(h, { size: 18 }),
        }),
      a(Dt, { isOwnProfile: isOwnProfile, isVerified: isVerified, ...b }),
    ],
  });
}

const Et = z(() =>
  _(() => import("./index-CtxhrCFP.js"), __vite__mapDeps([6, 1, 2, 7])).then(
    (e) => ({
      default: e.DrawingCanvas,
    })
  )
);

const xt = z(() =>
  _(
    () => import("./index-CKEZhVnc.js"),
    __vite__mapDeps([8, 1, 2, 9, 10])
  ).then((e) => ({
    default: e.VerificationModal,
  }))
);

const Ut = z(() =>
  _(
    () => import("./index-CpKibEpf.js"),
    __vite__mapDeps([11, 1, 2, 9, 12])
  ).then((e) => ({
    default: e.ReportModal,
  }))
);

function Vt(e) {
  return new Date(e).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function Rt({
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
  const [_, S] = isBlocked(false);
  const { openModal, closeModal } = isOwnProfile();

  const T = q(() => {
    S(true);
  }, []);

  const g = q(() => {
    openModal(a(xt, { onClose: closeModal }));
  }, [openModal, closeModal]);

  const p = q(() => {
    if (isBlocked) {
      onBlockUser?.();
      return;
    }
    openModal(
      a(_t, {
        username: profile.username || "",
        displayName: profile.displayName,
        avatar: profile.avatar,
        onConfirm: () => onBlockUser?.(),
        onClose: closeModal,
      })
    );
  }, [isBlocked, onBlockUser, openModal, closeModal, profile]);

  const D = q(() => {
    openModal(
      a(Ut, { targetType: "user", targetId: profile.id, onClose: closeModal })
    );
  }, [openModal, closeModal, profile.id]);

  const O = q(() => {
    S(false);
  }, []);

  const U = q(async () => {
    try {
      await onBannerUpdate.updateProfile({ bannerId: null });
      onBannerUpdate?.(null);
    } catch (F) {
      console.error("Failed to delete banner:", F);
    }
  }, [onBannerUpdate]);

  const V = q(
    async (F) => {
      try {
        const [W, J] = F.split(",");
        const Y = W.match(/:(.*?);/)?.[1] || "image/png";
        const z = atob(J);
        const H = new Uint8Array(z.length);
        for (let R = 0; R < z.length; R++) {
          H[R] = z.charCodeAt(R);
        }
        const q = new Blob([H], { type: Y });
        const Z = new File([q], "banner.png", { type: "image/png" });
        const N = await r_1.uploadMedia(Z);
        await onBannerUpdate.updateProfile({ bannerId: N.id });

        onBannerUpdate?.({
          id: N.id,
          type: "image",
          url: N.url,
          width: N.width,
          height: N.height,
        });
      } catch (W) {
        console.error("Failed to upload banner:", W);
        a_1.error("Не удалось загрузить баннер");
        throw W;
      }
    },
    [onBannerUpdate]
  );

  return a("div", {
    className: r.profileCard,
    children: [
      a("div", {
        className: r.banner,
        children: [
          profile.banner?.url
            ? a("img", { src: profile.banner.url, alt: "Banner" })
            : a("div", { className: r.bannerPlaceholder }),
          isOwnProfile &&
            a("div", {
              className: r.bannerActions,
              children: [
                a("button", {
                  className: r.bannerActionButton,
                  onClick: T,
                  title: "Нарисовать баннер",
                  children: a(isFollowLoading, { size: 20 }),
                }),
                profile.banner?.url &&
                  a("button", {
                    className: `${r.bannerActionButton} ${r.deleteBannerButton}`,
                    onClick: U,
                    title: "Удалить баннер",
                    children: a(v, { size: 20 }),
                  }),
              ],
            }),
        ],
      }),
      _ &&
        a(onToggleFollow, {
          fallback: null,
          children: a(Et, { isOpen: _, onClose: O, onSave: V, mode: "banner" }),
        }),
      a("div", {
        className: r.profileContent,
        children: [
          a("div", {
            className: r.avatarRow,
            children: [
              a(f_1, {
                src: profile.avatar,
                alt: profile.displayName,
                size: "lg",
                online: profile.online,
                className: r.avatar,
              }),
              !isPhone &&
                a(we, {
                  isOwnProfile: isOwnProfile,
                  isFollowing: isFollowing,
                  isRequested: isRequested,
                  isFollowLoading: isFollowLoading,
                  isVerified: profile.isVerified,
                  isBlocked: isBlocked,
                  onEditProfile: onEditProfile,
                  onToggleFollow: onToggleFollow,
                  onVerificationRequest: g,
                  onBlockUser: p,
                  onReportUser: D,
                }),
            ],
          }),
          a("div", {
            className: r.infoContainer,
            children: [
              a("div", {
                className: r.userInfo,
                children: [
                  a(U, {
                    name: profile.displayName,
                    verified: profile.isVerified,
                    hasNuksta: profile.hasNuksta,
                    pin: profile.pin,
                    size: "lg",
                    className: r.name,
                  }),
                  profile.username &&
                    a("span", {
                      className: r.username,
                      children: ["@", profile.username],
                    }),
                ],
              }),
              isPhone &&
                a(isRequested, {
                  children: [
                    a(ge, {
                      isPhone: true,
                      followers: profile.stats?.followers ?? 0,
                      following: profile.stats?.following ?? 0,
                      onFollowersClick: onFollowersClick,
                      onFollowingClick: onFollowingClick,
                    }),
                    a("div", {
                      className: r.mobileActions,
                      children: a(we, {
                        isOwnProfile: isOwnProfile,
                        isFollowing: isFollowing,
                        isRequested: isRequested,
                        isFollowLoading: isFollowLoading,
                        isVerified: profile.isVerified,
                        isBlocked: isBlocked,
                        onEditProfile: onEditProfile,
                        onToggleFollow: onToggleFollow,
                        onVerificationRequest: g,
                        onBlockUser: p,
                        onReportUser: D,
                      }),
                    }),
                  ],
                }),
              profile.bio &&
                a("p", { className: r.bio, children: profile.bio }),
              !isPhone &&
                a(ge, {
                  followers: profile.stats?.followers ?? 0,
                  following: profile.stats?.following ?? 0,
                  onFollowersClick: onFollowersClick,
                  onFollowingClick: onFollowingClick,
                }),
              !isOwnProfile &&
                !profile.online &&
                profile.lastSeen &&
                a("span", {
                  className: r.metaItem,
                  children: ["Был(а) в сети: ", St(profile.lastSeen)],
                }),
              profile.createdAt &&
                a("span", {
                  className: r.metaItem,
                  children: [
                    a(Ge, {}),
                    " Регистрация: ",
                    Vt(profile.createdAt),
                  ],
                }),
              isFollowedBy &&
                !isOwnProfile &&
                a("span", {
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
function Tt({ profile, isBlocked }) {
  const [i, l] = d("posts");
  const [s, d] = d([]);
  const [b, M] = d(false);
  const [y, k] = d(null);
  const [x, P] = d([]);
  const [I, o] = d(false);
  const [_, S] = d(null);
  const [w, B] = d(false);
  const [T, g] = d(null);

  const p = q(async (a, c, u) => {
    M(true);
    try {
      const L = await p.getUserWall(a, {
        cursor: u,
        limit: 20,
        pinnedPostId: c,
      });

      const L_data = L.data;

      d((oe) => (u ? [...oe, ...L_data] : L_data));

      k(L.nextCursor);
    } catch (L) {
      console.error("Failed to fetch wall posts:", L);
    } finally {
      M(false);
    }
  }, []);

  const D = q(
    async (a, c) => {
      if (!w) {
        o(true);
      }

      g(null);
      try {
        const u = await p.getUserLikedPosts(a, { cursor: c, limit: 20 });
        const u_data = u.data;

        P((v) => (c ? [...v, ...u_data] : u_data));

        S(u.nextCursor);
        B(true);
      } catch (u) {
        console.error("Failed to fetch liked posts:", u);

        if (u && typeof u == "object" && "status" in u && u.status === 403) {
          g("Лайки скрыты настройками приватности");
        }
      } finally {
        o(false);
      }
    },
    [w]
  );

  y(() => {
    if (profile && !isBlocked) {
      p(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile?.id, isBlocked, p]);

  y(() => {
    if (i === "likes" && profile) {
      D(profile.id);
    }
  }, [i, profile?.id, D]);

  const O = c((a) => a.posts);

  const U = c((a) => a.highlightedPostId);

  const V = c((a) => a._lastPostEdit);

  const F = c((a) => a._lastLikeUpdate);

  y(() => {
    if (!U || !profile) {
      return;
    }
    const a = O.find((c) => c.id === U);

    if (a && a.wallOwnerId === profile.id && !s.some((c) => c.id === U)) {
      d((c) => [a, ...c]);
    }
  }, [U, O, profile?.id, s]);

  y(() => {
    if (s.length !== 0) {
      d((a) =>
        a.map((c) => {
          const u = O.find((L) => L.id === c.id);
          return u &&
            (u.editedAt !== c.editedAt || u.attachments !== c.attachments)
            ? u
            : c;
        })
      );
    }
  }, [O]);

  y(() => {
    if (V) {
      d((a) =>
        a.map((c) =>
          c.id === V.postId
            ? { ...c, text: V.text, spans: V.spans, editedAt: V.editedAt }
            : c
        )
      );
    }
  }, [V]);

  y(() => {
    if (!F) {
      return;
    }
    const { postId, myReaction, totalDelta } = F;

    const L = (v) =>
      v.id === postId
        ? {
            ...v,
            reactions: {
              ...v.reactions,
              myReaction: myReaction,
              total: Math.max(0, v.reactions.total + totalDelta),
            },
          }
        : v;

    d((v) => v.map(L));

    P((v) => v.map(L));
  }, [F]);

  const W = q(() => {
    if (profile && !b) {
      if (i === "posts" && y) {
        p(profile.username || profile.id, profile.pinnedPostId, y);
      } else if (i === "likes" && _ && !I) {
        D(profile.id, _);
      }
    }
  }, [profile, i, y, _, b, I, p, D]);

  const J = q(
    async (a) => {
      if (!profile) {
        return;
      }
      const c = profile.pinnedPostId === a;
      try {
        if (c) {
          await o.unpinPost(a);
        } else {
          await o.pinPost(a);
        }
      } catch (u) {
        console.error("Failed to pin/unpin post:", u);
        throw u;
      }
    },
    [profile]
  );

  const Y = q(async () => {
    if (profile) {
      p.invalidateWallCache(profile.username || profile.id);
      await p(profile.username || profile.id, profile.pinnedPostId);
    }
  }, [profile, p]);

  const z = q(
    (a) => {
      d((c) => c.filter((u) => u.id !== a));

      P((c) => c.filter((u) => u.id !== a));

      if (profile) {
        p.removePostFromWallCache(profile.username || profile.id, a);
      }
    },
    [profile]
  );

  const H = q((a) => {
    l(a);
  }, []);

  const q = q(() => {
    d([]);
    k(null);
    P([]);
    B(false);
    S(null);
    g(null);
    l("posts");
  }, []);

  return {
    posts: i === "posts" ? s : x,
    postsLoading: i === "posts" ? b : I,
    nextCursor: i === "posts" ? y : _,
    activeTab: i,
    likesError: T,
    hasLoadedLikes: w,
    handleLoadMore: W,
    handlePinPost: J,
    refreshPosts: Y,
    removePost: z,
    handleTabChange: H,
    resetPosts: q,
  };
}
function Ot({ username }) {
  const n = w((h) => h.profile);

  const i = n?.id;

  const l = w((h) => h.setProfile);

  const [s, d] = d(null);
  const [b, M] = d(true);
  const [y, k] = d(null);
  const [x, P] = d("none");
  const [I, o] = d(false);
  const [_, S] = d(false);
  const [w, B] = d(false);
  const T = !!(n && s && n.id === s.id);
  const g = x === "following";
  const p = x === "requested";
  const D = s?.interaction?.isFollowedBy ?? false;
  const O = s?.interaction?.isBlockedBy ?? false;

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
  } = Tt({ profile: s, isBlocked: _ });

  y(() => {
    if (!s || T || !n) {
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
  }, [s?.id, T, n]);
  const a = A(true);

  y(() => {
    a.current = true;

    return () => {
      a.current = false;
    };
  }, []);

  y(() => {
    const h = new AbortController();

    (async () => {
      d(null);
      M(true);
      k(null);
      P("none");
      S(false);
      resetPosts();
      try {
        const E = username
          ? await o.getProfileByUsername(username)
          : await o.getMyProfile();
        if (!a.current || h.signal.aborted) {
          return;
        }

        if (E) {
          d(E);
        }
      } catch (E) {
        if (!a.current || h.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", E);
        k("Профиль не найден");
      } finally {
        if (a.current && !h.signal.aborted) {
          M(false);
        }
      }
    })();

    return () => {
      h.abort();
    };
  }, [username, i, resetPosts]);

  const c = refreshPosts(async () => {
    if (!(!s || I)) {
      o(true);
      try {
        const h = await x.followUser(s.id);
        P(h);

        if (h === "following" && s.stats) {
          const A = s.stats.followers + 1;

          d((E) =>
            E?.stats ? { ...E, stats: { ...E.stats, followers: A } } : E
          );

          if (s.username) {
            o.updateProfileCache(s.username, {
              stats: { ...s.stats, followers: A },
            });
          }
        }
      } catch (h) {
        console.error("Failed to follow:", h);
      } finally {
        o(false);
      }
    }
  }, [s, I]);

  const u = refreshPosts(async () => {
    if (!(!s || I)) {
      o(true);
      try {
        await x.unfollowUser(s.id);
        P("none");

        if (g && s.stats) {
          const h = s.stats.followers - 1;

          d((A) =>
            A?.stats ? { ...A, stats: { ...A.stats, followers: h } } : A
          );

          if (s.username) {
            o.updateProfileCache(s.username, {
              stats: { ...s.stats, followers: h },
            });
          }
        }
      } catch (h) {
        console.error("Failed to unfollow:", h);
      } finally {
        o(false);
      }
    }
  }, [s, g, I]);

  const L = refreshPosts(async () => {
    if (g || p) {
      await u();
    } else {
      await c();
    }
  }, [g, p, c, u]);

  const v = refreshPosts(
    async (h) => {
      if (!s) {
        return;
      }
      const E = s.pinnedPostId === h ? null : h;
      const Q = { ...s, pinnedPostId: E };
      d(Q);

      if (n) {
        l(Q);
      }

      try {
        await handlePinPost(h);
      } catch {
        d(s);

        if (n) {
          l(s);
        }
      }
    },
    [s, n, l, handlePinPost]
  );

  const oe = refreshPosts(async () => {
    if (!(!s || w || T)) {
      B(true);
      try {
        if (_) {
          await x.unblockUser(s.id);
          S(false);
          a_1.success("Пользователь разблокирован");
        } else {
          await x.blockUser(s.id);
          S(true);
          a_1.success("Пользователь заблокирован");
          g && P("none");
        }

        if (s.username) {
          o.invalidateProfileCache(s.username);
        }
      } catch (h) {
        console.error("Failed to toggle block:", h);
        a_1.error("Не удалось выполнить действие");
      } finally {
        B(false);
      }
    }
  }, [s, _, w, T, g]);

  const le = refreshPosts(
    (h) => {
      d((A) => (A ? { ...A, banner: h } : null));

      if (n) {
        l({ ...n, banner: h });
      }
    },
    [n, l]
  );

  return {
    profile: s,
    loading: b,
    error: y,
    posts: posts,
    postsLoading: postsLoading,
    nextCursor: nextCursor,
    isOwnProfile: T,
    isFollowing: g,
    isFollowedBy: D,
    isBlockedBy: O,
    isRequested: p,
    isFollowLoading: I,
    handleToggleFollow: L,
    handleFollow: c,
    handleUnfollow: u,
    handleLoadMore: handleLoadMore,
    handlePinPost: v,
    refreshPosts: refreshPosts,
    removePost: removePost,
    activeTab: activeTab,
    handleTabChange: handleTabChange,
    likesError: likesError,
    hasLoadedLikes: hasLoadedLikes,
    updateBanner: le,
    isBlocked: _,
    handleBlockUser: oe,
  };
}

const Wt = z(() =>
  _(
    () => import("./index-Cs8C4zj9.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5])
  ).then((e) => ({
    default: e.SettingsModal,
  }))
);

const pe = z(() =>
  _(
    () => import("./index-QiVGrj3x.js"),
    __vite__mapDeps([13, 1, 2, 14, 8, 9, 10, 15])
  ).then((e) => ({
    default: e.UserListModal,
  }))
);

export const Profile = ({ username }) => {
  const n = d_1();
  const i = E();
  const { openModal, closeModal } = n();

  const d = updateBanner((m) => m.createPost);

  const b = updateBanner((m) => m.profileScrollByUser);

  const M = updateBanner((m) => m.profileMeasuredHeightsByUser);

  const y = updateBanner((m) => m.setProfileMeasuredHeights);

  const k = username ? b[e] ?? 0 : 0;
  const x = username ? M[e] : undefined;

  const P = refreshPosts(
    (m) => {
      if (username) {
        y(username, m);
      }
    },
    [username, y]
  );

  const I = A(null);

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
  } = Ot({ username: username });

  const u = refreshPosts(() => {
    if (isFollowing || isRequested) {
      openModal(
        likesError(isBlocked, {
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

  const L = () => {
    openModal(likesError(Wt, { onClose: closeModal }));
  };

  const v = refreshPosts(() => {
    if (profile) {
      openModal(
        likesError(pe, {
          userId: profile.id,
          type: "followers",
          title: "Подписчики",
        })
      );
    }
  }, [profile, openModal]);

  const oe = refreshPosts(() => {
    if (profile) {
      openModal(
        likesError(pe, {
          userId: profile.id,
          type: "following",
          title: "Подписки",
        })
      );
    }
  }, [profile, openModal]);

  const le = async (m, X, ce, ke) => {
    if (profile) {
      await d({
        wallOwnerId: profile.id,
        text: m,
        spans: X,
        attachments: ce,
        poll: ke,
      });

      refreshPosts();
    }
  };

  const h = refreshPosts(() => {
    if (profile) {
      openModal(
        likesError(o_1, {
          wallOwnerId: profile.id,
          placeholder: `Написать на стене ${profile.displayName}`,
          onPostCreated: refreshPosts,
        })
      );
    }
  }, [profile, openModal, refreshPosts]);

  y(() => {
    if (username && I.current !== username && posts.length !== 0) {
      if (k <= 0) {
        I.current = username;
        return;
      }
      I.current = username;

      requestAnimationFrame(() => {
        window.scrollTo(0, k);
      });
    }
  }, [username, posts.length, k]);

  const A = nextCursor(() => {
    if (activeTab !== "posts" || !profile?.pinnedPostId) {
      return posts;
    }
    const m = posts.find((X) => X.id === profile.pinnedPostId);
    return m
      ? [m, ...posts.filter((X) => X.id !== profile.pinnedPostId)]
      : posts;
  }, [posts, profile?.pinnedPostId, activeTab]);

  const E = nextCursor(() => {
    if (!i) {
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
    i,
    isOwnProfile,
    isBlocked,
    isBlockedBy,
    profile?.privacySettings?.whoCanPostOnWall,
    isFollowing,
    isFollowedBy,
  ]);

  const Q =
    isOwnProfile ||
    profile?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const ve = nextCursor(() => {
    const m = ["Посты"];

    if (Q) {
      m.push("Лайки");
    }

    return m;
  }, [Q]);

  const Ce = refreshPosts(
    (m) => {
      handleTabChange(Q ? (m === 0 ? "posts" : "likes") : "posts");
    },
    [handleTabChange, Q]
  );

  return loading
    ? null
    : error || !profile
    ? likesError("div", {
        className: r.page,
        children: likesError("div", {
          className: r.error,
          children: error || "Профиль не найден",
        }),
      })
    : likesError("div", {
        className: r.page,
        children: [
          likesError(Rt, {
            profile: profile,
            isOwnProfile: isOwnProfile,
            isFollowing: isFollowing,
            isRequested: isRequested,
            isFollowLoading: isFollowLoading,
            isBlocked: isBlocked,
            isFollowedBy: isFollowedBy,
            isPhone: n,
            onEditProfile: L,
            onToggleFollow: u,
            onBlockUser: handleBlockUser,
            onFollowersClick: v,
            onFollowingClick: oe,
            onBannerUpdate: updateBanner,
          }),
          likesError("div", {
            className: r.tabsWrapper,
            children: likesError(handlePinPost, {
              className: r.tabs,
              tabs: ve,
              activeIndex: activeTab === "posts" ? 0 : 1,
              onChange: Ce,
            }),
          }),
          E &&
            likesError(openModal, {
              children: [
                likesError("div", {
                  className: r.createPostWrapper,
                  children: [
                    likesError(f_1, {
                      src: profile.avatar ?? "",
                      alt: profile.displayName,
                      size: "sm",
                    }),
                    likesError(handleUnfollow, {
                      onSubmit: le,
                      placeholder: isOwnProfile
                        ? "Что нового?"
                        : `Написать на стене ${profile.displayName}`,
                    }),
                  ],
                }),
                likesError(postsLoading, {
                  variant: "secondary",
                  className: r.writePostButton,
                  onClick: h,
                  children: "Написать на стене",
                }),
              ],
            }),
          isBlocked
            ? likesError("div", {
                className: r.emptyPosts,
                children: "Вы заблокировали этого пользователя",
              })
            : likesError
            ? likesError("div", {
                className: r.emptyPosts,
                children: likesError,
              })
            : A.length > 0
            ? likesError(isFollowLoading, {
                posts: A,
                renderPost: (m, X, ce) =>
                  likesError(P, {
                    post: m,
                    isOnOwnProfile: isOwnProfile && activeTab === "posts",
                    isPinned:
                      activeTab === "posts" && profile?.pinnedPostId === m.id,
                    isHighlighted: ce,
                    onPin:
                      isOwnProfile && activeTab === "posts"
                        ? handlePinPost
                        : undefined,
                    onDelete: activeTab === "posts" ? removePost : undefined,
                  }),
                hasMore: !!nextCursor,
                isLoadingMore: postsLoading,
                onLoadMore: handleLoadMore,
                initialMeasuredHeights: x,
                onMeasuredHeightsChange: P,
              })
            : postsLoading && A.length === 0
            ? likesError(error, {})
            : likesError("div", {
                className: r.emptyPosts,
                children: activeTab === "posts" ? "Нет постов" : "Нет лайков",
              }),
        ],
      });
};

export { Profile as Profile };
