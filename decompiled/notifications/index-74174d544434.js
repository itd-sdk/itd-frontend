import {
  aM,
  u,
  aS,
  af,
  d as S_1,
  ag,
  aT,
  B,
  aU,
  aV,
  aW,
  aX,
  aY,
  h as $_1,
  aZ,
  a_ as a_1,
  A,
  d,
  h,
  a$,
  $_1 as $_1_1,
  b0,
  ah,
} from "./index-4cbec7521f6a.js";

import { aX as aX_1, d as d_1 } from "./index-ea37f59fd288.js";
import { aX as aX_2 } from "./IconCheck-18104bfe423e.js";
import "./usePurchaseDialog-55b835101282.js";
import "./IconInfo-89cb4307da38.js";
const te = "dphD";
const oe = "fL5r";
const ne = "vXNm";
const se = "ROdt";
const le = "SIy2";
const ae = "JXWr";
const ie = "SfaS";
const re = "tmCf";
const ce = "mulG";
const de = "hEJT";
const ue = "mAhr";
const ge = "IF7P";
const me = "emlI";
const pe = "EYzU";
const fe = "eyo1";
const he = "xOjJ";
const we = "daFr";
const ye = "kK4J";
const be = "w6gb";
const Ce = "NgsN";
const Ne = "guVb";
const _e = "oXtN";
const ke = "CI5S";
const Re = "gtt9";
const Ae = "VUcD";

const a = {
  page: te,
  pageTitle: oe,
  list: ne,
  item: se,
  btn: le,
  content: ae,
  badge: ie,
  red: re,
  green: ce,
  blue: de,
  purple: ue,
  avatarLink: ge,
  info: me,
  header: pe,
  actorLink: fe,
  name: he,
  action: we,
  text: ye,
  date: be,
  reminderTitle: Ce,
  reminderText: Ne,
  titleRow: _e,
  unread: ke,
  empty: Re,
  loadMore: Ae,
};

function Fe(o) {
  if (!o) {
    return "";
  }
  const c = new Date(o);
  return isNaN(c.getTime())
    ? ""
    : c.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}

const L = {
  subscription_gift: {
    badgeColor: "purple",
    icon: u("img", {
      src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
      alt: "",
      width: 18,
      height: 18,
      style: { objectFit: "contain" },
    }),
    getAction: () => "подарил вам подписку",
  },
  follow: {
    badgeColor: "blue",
    icon: u(aU, { size: 12 }),
    getAction: (o) =>
      o > 1
        ? `и ещё ${o - 1} человек подписались на вас`
        : "подписался(-ась) на вас",
  },
  follow_request: {
    badgeColor: "blue",
    icon: u(aU, { size: 12 }),
    getAction: () => "хочет подписаться на вас",
  },
  follow_accepted: {
    badgeColor: "green",
    icon: u(aX_2, { size: 12 }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: u(aX, { size: 12, filled: true }),
    getAction: (o) =>
      o > 1 ? `и ещё ${o - 1} человек оценили ваш пост` : "оценил(а) ваш пост",
  },
  post_comment: {
    badgeColor: "green",
    icon: u(aW, { size: 12, filled: true }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: u(aY, { size: 12 }),
    getAction: (o) =>
      o > 1
        ? `и ещё ${o - 1} человек сделали репост`
        : "сделал(а) репост вашего поста",
  },
  comment_reaction: {
    badgeColor: "red",
    icon: u(aX, { size: 12, filled: true }),
    getAction: (o) =>
      o > 1
        ? `и ещё ${o - 1} человек оценили ваш комментарий`
        : "оценил(а) ваш комментарий",
  },
  comment_reply: {
    badgeColor: "green",
    icon: u(aW, { size: 12, filled: true }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: u(aX_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: u(aX_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: u(aV, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const Se = ({ type }) => {
  const L_o = L[o];

  const m =
    L_o?.badgeColor === "red"
      ? a.red
      : L_o?.badgeColor === "green"
      ? a.green
      : L_o?.badgeColor === "purple"
      ? a.purple
      : a.blue;

  return u("div", {
    className: `${a.badge} ${m}`,
    children: L_o?.icon || u(aW, { size: 12 }),
  });
};

function $e({
  notification,
  isVisuallyUnread,
  onMarkRead,
  followStatus,
  onFollowToggle,
  isFollowLoading,
}) {
  const { openModal, closeModal } = aM();
  const R = L[notification.type];
  const n = notification.payload.actors[0];
  const f = notification.payload.count;
  const u = notification.type === "alice_task_reminder";

  const h = () => {
    onMarkRead(notification.id);
    const { type, entityId, parentEntityId, payload } = notification;
    if (type === "subscription_gift") {
      openModal(u(d_1, { isOpen: true, onClose: () => closeModal() }));
      return;
    }
    let d_clickUrl = payload.clickUrl;

    const _ = [
      "post_reaction",
      "post_comment",
      "post_repost",
      "post_mention",
      "wall_post",
    ];

    const E = ["comment_reaction", "comment_reply", "comment_mention"];

    if (entityId && n?.username) {
      if (_.includes(type)) {
        if (type === "post_comment" && parentEntityId) {
          d_clickUrl = `/@${n.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          d_clickUrl = `/@${n.username}/post/${entityId}`;
        }
      } else if (E.includes(type)) {
        if (parentEntityId) {
          d_clickUrl = `/@${n.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          d_clickUrl = `/@${n.username}/post/${entityId}`;
        }
      }
    }

    if (
      !d_clickUrl &&
      n?.username &&
      ["follow", "follow_request", "follow_accepted"].includes(type)
    ) {
      d_clickUrl = `/@${n.username}`;
    }

    if (d_clickUrl) {
      $_1(d_clickUrl);
    }
  };

  const C =
    notification.type === "follow" || notification.type === "follow_request";

  const w = isFollowLoading
    ? "loading"
    : followStatus
    ? followStatus.isFollowing
      ? "following"
      : followStatus.hasOutgoingRequest
      ? "requested"
      : "none"
    : "none";

  const A = () => {
    switch (w) {
      case "loading": {
        return "Загрузка...";
      }
      case "following": {
        return "Отписаться";
      }
      case "requested": {
        return "Отменить";
      }
      default: {
        return followStatus?.isFollowedBy
          ? "Подписаться в ответ"
          : "Подписаться";
      }
    }
  };

  const N = () =>
    w === "following" || w === "requested" ? "secondary" : "primary";

  const F = (e) => {
    e.stopPropagation();

    if (n?.id && !isFollowLoading) {
      onFollowToggle(n.id);
    }
  };

  const s = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onMarkRead(notification.id);

    if (n?.username) {
      $_1(`/@${n.username}`);
    }
  };

  return u("div", {
    className: `${a.item} ${isVisuallyUnread ? a.unread : ""}`,
    onClick: h,
    role: "button",
    tabIndex: 0,
    onKeyDown: (e) => {
      if (
        (u || notification.type === "subscription_gift") &&
        (e.key === "Enter" || e.key === " ")
      ) {
        e.preventDefault();
        h();
      }
    },
    children: [
      u("div", {
        className: a.content,
        children: [
          u
            ? u(aS, {})
            : u("a", {
                href: n?.username ? `/@${n.username}` : "#",
                className: a.avatarLink,
                onClick: s,
                title: "Перейти в профиль",
                children: u(af, {
                  src: n?.avatar || "",
                  alt: n?.displayName || "User",
                  size: "md",
                  halloween: n?.halloween,
                  badge: u(Se, { type: notification.type }),
                }),
              }),
          u("div", {
            className: a.info,
            children: [
              u("div", {
                className: a.header,
                children: u
                  ? u("span", {
                      className: a.reminderTitle,
                      children: notification.payload.title,
                    })
                  : u(S_1, {
                      children: [
                        u("a", {
                          href: n?.username ? `/@${n.username}` : "#",
                          className: a.actorLink,
                          onClick: s,
                          title: "Перейти в профиль",
                          children: u(ag, {
                            userId: n?.id,
                            halloween: n?.halloween,
                            name:
                              notification.type === "subscription_gift"
                                ? aT(n)
                                : n?.displayName || "Пользователь",
                            verified: n?.isVerified ?? n?.verified ?? false,
                            pin: n?.pin,
                            size: "sm",
                            className: a.name,
                          }),
                        }),
                        u("span", {
                          className: a.action,
                          children: R?.getAction(f) || "уведомление",
                        }),
                      ],
                    }),
              }),
              notification.payload.entityPreview &&
                u("p", {
                  className: `${a.text} ${u ? a.reminderText : ""}`,
                  children: notification.payload.entityPreview,
                }),
              u("span", {
                className: a.date,
                children: Fe(notification.createdAt),
              }),
            ],
          }),
        ],
      }),
      C &&
        n?.id &&
        u(B, {
          variant: N(),
          size: "md",
          className: a.btn,
          onClick: F,
          disabled: isFollowLoading,
          children: [w === "none" && u(aU, { size: 18 }), A()],
        }),
    ],
  });
}

export const Notifications = (o) => {
  const {
    notifications,
    status,
    nextCursor,
    fetchNotifications,
    markAllAsRead,
  } = aZ();

  const k = a_1();
  const b = A(null);
  const [R, n] = d(new Set());
  const [f, u] = d(new Map());
  const [h, C] = d(new Set());

  h(() => {
    const s = new Set();
    for (const e of notifications) {
      if (!e.isRead) {
        s.add(e.id);
      }
    }
    n((e) => {
      const i = new Set(e);
      for (const l of s) {
        i.add(l);
      }
      return i;
    });
  }, [notifications]);

  h(() => {
    fetchNotifications(true).then(() => {
      const s = aZ
        .getState()
        .notifications.filter((e) => !e.isRead)
        .map((e) => e.id);

      if (s.length > 0) {
        n((e) => {
          const i = new Set(e);
          for (const l of s) {
            i.add(l);
          }
          return i;
        });
      }

      markAllAsRead();
    });
  }, [fetchNotifications, markAllAsRead]);

  h(() => {
    const s = ["follow", "follow_request"];
    const e = [];
    for (const i of notifications) {
      if (!s.includes(i.type)) {
        continue;
      }
      const l = i.payload.actors[0];

      if (l?.id && !f.has(l.id)) {
        e.push([
          l.id,
          {
            isFollowing: l.isFollowing ?? false,
            isFollowedBy: l.isFollowedBy ?? true,
            hasOutgoingRequest: false,
            hasIncomingRequest: false,
            isBlocking: false,
            isBlockedBy: false,
          },
        ]);
      }
    }

    if (e.length > 0) {
      u((i) => {
        const l = new Map(i);
        for (const [d, r] of e) {
          l.set(d, r);
        }
        return l;
      });
    }
  }, [notifications]);

  a$({
    sentinelRef: b,
    hasMore: !!nextCursor,
    isLoading: status === "loading",
    onLoadMore: fetchNotifications,
  });

  const B = $_1_1((s) => {
    n((e) => {
      const i = new Set(e);
      i.delete(s);
      return i;
    });
  }, []);

  const w = $_1_1(() => {
    n(new Set());
    markAllAsRead();
  }, [markAllAsRead]);

  const A = $_1_1(
    async (s) => {
      if (!h.has(s)) {
        C((e) => new Set(e).add(s));
        try {
          const e = f.get(s);
          if (e?.isFollowing || e?.hasOutgoingRequest) {
            await b0.unfollowUser(s);

            u((l) => {
              const d = new Map(l);
              const r = d.get(s);

              if (r) {
                d.set(s, {
                  ...r,
                  isFollowing: false,
                  hasOutgoingRequest: false,
                });
              }

              return d;
            });
          } else {
            const l = await b0.followUser(s);
            u((d) => {
              const r = new Map(d);
              const _ = r.get(s);

              if (_) {
                r.set(s, {
                  ..._,
                  isFollowing: l === "following",
                  hasOutgoingRequest: l === "requested",
                });
              } else {
                r.set(s, {
                  isFollowing: l === "following",
                  isFollowedBy: true,
                  hasOutgoingRequest: l === "requested",
                  hasIncomingRequest: false,
                  isBlocking: false,
                  isBlockedBy: false,
                });
              }

              return r;
            });
          }
        } catch (e) {
          if (
            e?.status === 409 ||
            e?.code === "CONFLICT" ||
            e?.message?.includes("Already following")
          ) {
            u((l) => {
              const d = new Map(l);
              const r = d.get(s);

              d.set(s, {
                ...(r ?? {
                  isFollowedBy: true,
                  hasIncomingRequest: false,
                  isBlocking: false,
                  isBlockedBy: false,
                }),
                isFollowing: true,
                hasOutgoingRequest: false,
              });

              return d;
            });
          } else {
            console.error("Failed to toggle follow:", e);
          }
        } finally {
          C((e) => {
            const i = new Set(e);
            i.delete(s);
            return i;
          });
        }
      }
    },
    [f, h]
  );

  const N = status === "loading";
  const F = notifications.length === 0 && !N;
  return u("div", {
    className: `${a.page} ym-hide-content`,
    children: [
      u("div", {
        className: a.titleRow,
        children: [
          u("h1", { className: a.pageTitle, children: "Уведомления" }),
          k > 0 &&
            u(B, {
              variant: "ghost",
              size: "sm",
              onClick: w,
              children: "Прочитать все",
            }),
        ],
      }),
      F
        ? u("div", {
            className: a.empty,
            children: u("p", { children: "Нет уведомлений" }),
          })
        : u("div", {
            className: a.list,
            children: [
              notifications.map((s) => {
                const e = s.payload.actors[0]?.id;
                return u(
                  $e,
                  {
                    notification: s,
                    isVisuallyUnread: R.has(s.id),
                    onMarkRead: B,
                    followStatus: e ? f.get(e) ?? null : null,
                    onFollowToggle: A,
                    isFollowLoading: e ? h.has(e) : false,
                  },
                  s.id
                );
              }),
              nextCursor &&
                u("div", {
                  ref: b,
                  className: a.loadMore,
                  children: N && u(ah, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
