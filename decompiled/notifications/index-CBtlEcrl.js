import {
  u,
  af,
  f,
  m as S_1,
  X as X_1,
  B,
  m,
  ag,
  ah,
  ai,
  aj,
  u as u_1,
  ak,
  al,
  d as A_1,
  d,
  h,
  am,
  u_1 as u_1_1,
  a0,
  an,
} from "./index-CsuAWxkQ.js";

import { ai as ai_1 } from "./IconNotificationMention-D0wmNmea.js";
import { ai as ai_2 } from "./IconCheck-DZkLicAY.js";
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
    const r = new t.Error().stack;

    if (r) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[r] = "1560c6ac-7483-44d6-8ad1-6fb55a0f4082";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-1560c6ac-7483-44d6-8ad1-6fb55a0f4082";
    }
  } catch {}
})();
const W = "C9MO";
const X = "Zx0T";
const Q = "Dc5i";
const ee = "r2m9";
const te = "YpcK";
const ne = "K60U";
const oe = "jFTO";
const se = "orA0";
const le = "FsxK";
const ae = "WGwB";
const ie = "yGDg";
const re = "eLjP";
const ce = "SFYe";
const de = "BcMD";
const ue = "Cr9I";
const ge = "gPh8";
const fe = "lv54";
const me = "zhpD";
const pe = "hrEO";
const we = "eBRq";
const he = "lunH";
const ye = "BBSo";
const be = "dMPj";
const Ce = "tfNB";
const Ne = "oKZJ";

const a = {
  page: W,
  pageTitle: X,
  list: Q,
  item: ee,
  btn: te,
  content: ne,
  badge: oe,
  red: se,
  green: le,
  blue: ae,
  purple: ie,
  avatarLink: re,
  info: ce,
  header: de,
  actorLink: ue,
  name: ge,
  action: fe,
  text: me,
  date: pe,
  reminderTitle: we,
  reminderText: he,
  titleRow: ye,
  unread: be,
  empty: Ce,
  loadMore: Ne,
};

function _e(t) {
  if (!t) {
    return "";
  }
  const r = new Date(t);
  return isNaN(r.getTime())
    ? ""
    : r.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}

const D = {
  follow: {
    badgeColor: "blue",
    icon: u(m, { size: 12 }),
    getAction: (t) =>
      t > 1
        ? `и ещё ${t - 1} человек подписались на вас`
        : "подписался(-ась) на вас",
  },
  follow_request: {
    badgeColor: "blue",
    icon: u(m, { size: 12 }),
    getAction: () => "хочет подписаться на вас",
  },
  follow_accepted: {
    badgeColor: "green",
    icon: u(ai_2, { size: 12 }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: u(ai, { size: 12, filled: true }),
    getAction: (t) =>
      t > 1 ? `и ещё ${t - 1} человек оценили ваш пост` : "оценил(а) ваш пост",
  },
  post_comment: {
    badgeColor: "green",
    icon: u(ah, { size: 12, filled: true }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: u(aj, { size: 12 }),
    getAction: (t) =>
      t > 1
        ? `и ещё ${t - 1} человек сделали репост`
        : "сделал(а) репост вашего поста",
  },
  comment_reaction: {
    badgeColor: "red",
    icon: u(ai, { size: 12, filled: true }),
    getAction: (t) =>
      t > 1
        ? `и ещё ${t - 1} человек оценили ваш комментарий`
        : "оценил(а) ваш комментарий",
  },
  comment_reply: {
    badgeColor: "green",
    icon: u(ah, { size: 12, filled: true }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: u(ai_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: u(ai_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: u(ag, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const ke = ({ type }) => {
  const D_t = D[t];

  const f =
    D_t?.badgeColor === "red"
      ? a.red
      : D_t?.badgeColor === "green"
      ? a.green
      : D_t?.badgeColor === "purple"
      ? a.purple
      : a.blue;

  return u("div", {
    className: `${a.badge} ${f}`,
    children: D_t?.icon || u(ah, { size: 12 }),
  });
};

function Re({
  notification,
  isVisuallyUnread,
  onMarkRead,
  followStatus,
  onFollowToggle,
  isFollowLoading,
}) {
  const _ = D[notification.type];
  const l = notification.payload.actors[0];
  const k = notification.payload.count;
  const g = notification.type === "alice_task_reminder";

  const w = () => {
    onMarkRead(notification.id);
    const { type, entityId, parentEntityId, payload } = notification;
    let i_clickUrl = payload.clickUrl;

    const d = [
      "post_reaction",
      "post_comment",
      "post_repost",
      "post_mention",
      "wall_post",
    ];

    const u = ["comment_reaction", "comment_reply", "comment_mention"];

    if (entityId && l?.username) {
      if (d.includes(type)) {
        if (type === "post_comment" && parentEntityId) {
          i_clickUrl = `/@${l.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          i_clickUrl = `/@${l.username}/post/${entityId}`;
        }
      } else if (u.includes(type)) {
        if (parentEntityId) {
          i_clickUrl = `/@${l.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          i_clickUrl = `/@${l.username}/post/${entityId}`;
        }
      }
    }

    if (
      !i_clickUrl &&
      l?.username &&
      ["follow", "follow_request", "follow_accepted"].includes(type)
    ) {
      i_clickUrl = `/@${l.username}`;
    }

    if (i_clickUrl) {
      u_1(i_clickUrl);
    }
  };

  const y =
    notification.type === "follow" || notification.type === "follow_request";

  const h = isFollowLoading
    ? "loading"
    : followStatus
    ? followStatus.isFollowing
      ? "following"
      : followStatus.hasOutgoingRequest
      ? "requested"
      : "none"
    : "none";

  const R = () => {
    switch (h) {
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

  const B = () =>
    h === "following" || h === "requested" ? "secondary" : "primary";

  const F = (c) => {
    c.stopPropagation();

    if (l?.id && !isFollowLoading) {
      onFollowToggle(l.id);
    }
  };

  const C = (c) => {
    c.stopPropagation();
    c.preventDefault();
    onMarkRead(notification.id);

    if (l?.username) {
      u_1(`/@${l.username}`);
    }
  };

  return u("div", {
    className: `${a.item} ${isVisuallyUnread ? a.unread : ""}`,
    onClick: w,
    role: "button",
    tabIndex: 0,
    onKeyDown: (c) => {
      if (g && (c.key === "Enter" || c.key === " ")) {
        c.preventDefault();
        w();
      }
    },
    children: [
      u("div", {
        className: a.content,
        children: [
          g
            ? u(af, {})
            : u("a", {
                href: l?.username ? `/@${l.username}` : "#",
                className: a.avatarLink,
                onClick: C,
                title: "Перейти в профиль",
                children: u(onMarkRead, {
                  src: l?.avatar || "",
                  alt: l?.displayName || "User",
                  size: "md",
                  badge: u(ke, { type: notification.type }),
                }),
              }),
          u("div", {
            className: a.info,
            children: [
              u("div", {
                className: a.header,
                children: g
                  ? u("span", {
                      className: a.reminderTitle,
                      children: notification.payload.title,
                    })
                  : u(S_1, {
                      children: [
                        u("a", {
                          href: l?.username ? `/@${l.username}` : "#",
                          className: a.actorLink,
                          onClick: C,
                          title: "Перейти в профиль",
                          children: u(X_1, {
                            userId: l?.id,
                            name: l?.displayName || "Пользователь",
                            verified: l?.isVerified ?? l?.verified ?? false,
                            pin: l?.pin,
                            size: "sm",
                            className: a.name,
                          }),
                        }),
                        u("span", {
                          className: a.action,
                          children: _?.getAction(k) || "уведомление",
                        }),
                      ],
                    }),
              }),
              notification.payload.entityPreview &&
                u("p", {
                  className: `${a.text} ${g ? a.reminderText : ""}`,
                  children: notification.payload.entityPreview,
                }),
              u("span", {
                className: a.date,
                children: _e(notification.createdAt),
              }),
            ],
          }),
        ],
      }),
      y &&
        l?.id &&
        u(B, {
          variant: B(),
          size: "md",
          className: a.btn,
          onClick: F,
          disabled: isFollowLoading,
          children: [h === "none" && u(isFollowLoading, { size: 18 }), R()],
        }),
    ],
  });
}

export const Notifications = (t) => {
  const {
    notifications,
    status,
    nextCursor,
    fetchNotifications,
    markAllAsRead,
  } = ak();

  const _ = al();
  const l = A_1(null);
  const [k, g] = d(new Set());
  const [w, y] = d(new Map());
  const [N, h] = d(new Set());

  h(() => {
    const o = new Set();
    for (const n of notifications) {
      if (!n.isRead) {
        o.add(n.id);
      }
    }
    g((n) => {
      const i = new Set(n);
      for (const s of o) {
        i.add(s);
      }
      return i;
    });
  }, [notifications]);

  h(() => {
    fetchNotifications(true).then(() => {
      const o = ak
        .getState()
        .notifications.filter((n) => !n.isRead)
        .map((n) => n.id);

      if (o.length > 0) {
        g((n) => {
          const i = new Set(n);
          for (const s of o) {
            i.add(s);
          }
          return i;
        });
      }

      markAllAsRead();
    });
  }, [fetchNotifications, markAllAsRead]);

  h(() => {
    const o = ["follow", "follow_request"];
    const n = [];
    for (const i of notifications) {
      if (!o.includes(i.type)) {
        continue;
      }
      const s = i.payload.actors[0];

      if (s?.id && !w.has(s.id)) {
        n.push([
          s.id,
          {
            isFollowing: s.isFollowing ?? false,
            isFollowedBy: s.isFollowedBy ?? true,
            hasOutgoingRequest: false,
            hasIncomingRequest: false,
            isBlocking: false,
            isBlockedBy: false,
          },
        ]);
      }
    }

    if (n.length > 0) {
      y((i) => {
        const s = new Map(i);
        for (const [d, u] of n) {
          s.set(d, u);
        }
        return s;
      });
    }
  }, [notifications]);

  am({
    sentinelRef: l,
    hasMore: !!nextCursor,
    isLoading: status === "loading",
    onLoadMore: fetchNotifications,
  });

  const R = u_1_1((o) => {
    g((n) => {
      const i = new Set(n);
      i.delete(o);
      return i;
    });
  }, []);

  const B = u_1_1(() => {
    g(new Set());
    markAllAsRead();
  }, [markAllAsRead]);

  const F = u_1_1(
    async (o) => {
      if (!N.has(o)) {
        h((n) => new Set(n).add(o));
        try {
          const n = w.get(o);
          if (n?.isFollowing || n?.hasOutgoingRequest) {
            await a0.unfollowUser(o);

            y((s) => {
              const d = new Map(s);
              const u = d.get(o);

              if (u) {
                d.set(o, {
                  ...u,
                  isFollowing: false,
                  hasOutgoingRequest: false,
                });
              }

              return d;
            });
          } else {
            const s = await a0.followUser(o);
            y((d) => {
              const u = new Map(d);
              const v = u.get(o);

              if (v) {
                u.set(o, {
                  ...v,
                  isFollowing: s === "following",
                  hasOutgoingRequest: s === "requested",
                });
              } else {
                u.set(o, {
                  isFollowing: s === "following",
                  isFollowedBy: true,
                  hasOutgoingRequest: s === "requested",
                  hasIncomingRequest: false,
                  isBlocking: false,
                  isBlockedBy: false,
                });
              }

              return u;
            });
          }
        } catch (n) {
          if (
            n?.status === 409 ||
            n?.code === "CONFLICT" ||
            n?.message?.includes("Already following")
          ) {
            y((s) => {
              const d = new Map(s);
              const u = d.get(o);

              d.set(o, {
                ...(u ?? {
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
            console.error("Failed to toggle follow:", n);
          }
        } finally {
          h((n) => {
            const i = new Set(n);
            i.delete(o);
            return i;
          });
        }
      }
    },
    [w, N]
  );

  const C = status === "loading";
  const c = notifications.length === 0 && !C;
  return u("div", {
    className: `${a.page} ym-hide-content`,
    children: [
      u("div", {
        className: a.titleRow,
        children: [
          u("h1", { className: a.pageTitle, children: "Уведомления" }),
          _ > 0 &&
            u(B, {
              variant: "ghost",
              size: "sm",
              onClick: B,
              children: "Прочитать все",
            }),
        ],
      }),
      c
        ? u("div", {
            className: a.empty,
            children: u("p", { children: "Нет уведомлений" }),
          })
        : u("div", {
            className: a.list,
            children: [
              notifications.map((o) => {
                const n = o.payload.actors[0]?.id;
                return u(
                  Re,
                  {
                    notification: o,
                    isVisuallyUnread: k.has(o.id),
                    onMarkRead: R,
                    followStatus: n ? w.get(n) ?? null : null,
                    onFollowToggle: F,
                    isFollowLoading: n ? N.has(n) : false,
                  },
                  o.id
                );
              }),
              nextCursor &&
                u("div", {
                  ref: l,
                  className: a.loadMore,
                  children: C && u(an, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
