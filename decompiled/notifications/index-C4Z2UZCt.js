import {
  u,
  f,
  U as U_1,
  a0_1 as B_1,
  m,
  I_1 as Y_1,
  Z as Z_1,
  a0,
  a1,
  e,
  a2,
  a3,
  d as A_1,
  d,
  y,
  a4,
  a0 as a0_1,
  C,
  a5,
} from "./index-DDTOXJaD.js";

import { I } from "./IconNotificationMention-DnVi52VK.js";
import { I as I_1 } from "./IconCheck-CBJ3CY_b.js";
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
    e.SENTRY_RELEASE = { id: "1.1.2" };
    const r = new e.Error().stack;

    if (r) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[r] = "2f5a391c-6631-443b-8da7-4b227039ec48";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-2f5a391c-6631-443b-8da7-4b227039ec48";
    }
  } catch {}
})();
const Z = "HxAd";
const j = "wjlD";
const G = "UD4K";
const X = "k6vM";
const Q = "JV59";
const ee = "WBGs";
const te = "DoNT";
const oe = "wYhF";
const ne = "KjgN";
const se = "SxJ0";
const le = "ErHk";
const ae = "ZgOP";
const ie = "xxwo";
const re = "EWpZ";
const ce = "KJe0";
const de = "Ke8u";
const ue = "lERN";
const ge = "WHKd";
const fe = "KJbF";
const me = "fnmX";
const pe = "dSuO";
const we = "g603";
const he = "oPzz";

const i = {
  page: Z,
  pageTitle: j,
  list: G,
  item: X,
  btn: Q,
  content: ee,
  badge: te,
  red: oe,
  green: ne,
  blue: se,
  purple: le,
  avatarLink: ae,
  info: ie,
  header: re,
  actorLink: ce,
  name: de,
  action: ue,
  text: ge,
  date: fe,
  titleRow: me,
  unread: pe,
  empty: we,
  loadMore: he,
};

function ye(e) {
  if (!e) {
    return "";
  }
  const r = new Date(e);
  return isNaN(r.getTime())
    ? ""
    : r.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}

const U = {
  follow: {
    badgeColor: "blue",
    icon: u(m, { size: 12 }),
    getAction: (e) =>
      e > 1
        ? `и ещё ${e - 1} человек подписались на вас`
        : "подписался(-ась) на вас",
  },
  follow_request: {
    badgeColor: "blue",
    icon: u(m, { size: 12 }),
    getAction: () => "хочет подписаться на вас",
  },
  follow_accepted: {
    badgeColor: "green",
    icon: u(I_1, { size: 12 }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: u(a0, { size: 12, filled: true }),
    getAction: (e) =>
      e > 1 ? `и ещё ${e - 1} человек оценили ваш пост` : "оценил(а) ваш пост",
  },
  post_comment: {
    badgeColor: "green",
    icon: u(Z_1, { size: 12, filled: true }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: u(a1, { size: 12 }),
    getAction: (e) =>
      e > 1
        ? `и ещё ${e - 1} человек сделали репост`
        : "сделал(а) репост вашего поста",
  },
  comment_reaction: {
    badgeColor: "red",
    icon: u(a0, { size: 12, filled: true }),
    getAction: (e) =>
      e > 1
        ? `и ещё ${e - 1} человек оценили ваш комментарий`
        : "оценил(а) ваш комментарий",
  },
  comment_reply: {
    badgeColor: "green",
    icon: u(Z_1, { size: 12, filled: true }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: u(I, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: u(I, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: u(Y_1, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const be = ({ type }) => {
  const U_e = U[e];

  const g =
    U_e?.badgeColor === "red"
      ? i.red
      : U_e?.badgeColor === "green"
      ? i.green
      : U_e?.badgeColor === "purple"
      ? i.purple
      : i.blue;

  return u("div", {
    className: `${i.badge} ${g}`,
    children: U_e?.icon || u(Z_1, { size: 12 }),
  });
};

function Ce({
  notification,
  isVisuallyUnread,
  onMarkRead,
  followStatus,
  onFollowToggle,
  isFollowLoading,
}) {
  const k = U[notification.type];
  const l = notification.payload.actors[0];
  const R = notification.payload.count;

  const h = () => {
    onMarkRead(notification.id);
    const { type, entityId, parentEntityId, payload } = notification;
    let o_clickUrl = payload.clickUrl;

    const a = [
      "post_reaction",
      "post_comment",
      "post_repost",
      "post_mention",
      "wall_post",
    ];

    const c = ["comment_reaction", "comment_reply", "comment_mention"];

    if (entityId && l?.username) {
      if (a.includes(type)) {
        if (type === "post_comment" && parentEntityId) {
          o_clickUrl = `/@${l.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          o_clickUrl = `/@${l.username}/post/${entityId}`;
        }
      } else if (c.includes(type)) {
        if (parentEntityId) {
          o_clickUrl = `/@${l.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          o_clickUrl = `/@${l.username}/post/${entityId}`;
        }
      }
    }

    if (
      !o_clickUrl &&
      l?.username &&
      ["follow", "follow_request", "follow_accepted"].includes(type)
    ) {
      o_clickUrl = `/@${l.username}`;
    }

    if (o_clickUrl) {
      notification(o_clickUrl);
    }
  };

  const y =
    notification.type === "follow" || notification.type === "follow_request";

  const m = isFollowLoading
    ? "loading"
    : followStatus
    ? followStatus.isFollowing
      ? "following"
      : followStatus.hasOutgoingRequest
      ? "requested"
      : "none"
    : "none";

  const N = () => {
    switch (m) {
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

  const F = () =>
    m === "following" || m === "requested" ? "secondary" : "primary";

  const v = (d) => {
    d.stopPropagation();

    if (l?.id && !isFollowLoading) {
      onFollowToggle(l.id);
    }
  };

  const _ = (d) => {
    d.stopPropagation();
    d.preventDefault();
    onMarkRead(notification.id);

    if (l?.username) {
      notification(`/@${l.username}`);
    }
  };

  return u("div", {
    className: `${i.item} ${isVisuallyUnread ? i.unread : ""}`,
    onClick: h,
    role: "button",
    tabIndex: 0,
    children: [
      u("div", {
        className: i.content,
        children: [
          u("a", {
            href: l?.username ? `/@${l.username}` : "#",
            className: i.avatarLink,
            onClick: _,
            title: "Перейти в профиль",
            children: u(isFollowLoading, {
              src: l?.avatar || "",
              alt: l?.displayName || "User",
              size: "md",
              badge: u(be, { type: notification.type }),
            }),
          }),
          u("div", {
            className: i.info,
            children: [
              u("div", {
                className: i.header,
                children: [
                  u("a", {
                    href: l?.username ? `/@${l.username}` : "#",
                    className: i.actorLink,
                    onClick: _,
                    title: "Перейти в профиль",
                    children: u(U_1, {
                      name: l?.displayName || "Пользователь",
                      verified: l?.isVerified ?? l?.verified ?? false,
                      pin: l?.pin,
                      size: "sm",
                      className: i.name,
                    }),
                  }),
                  u("span", {
                    className: i.action,
                    children: k?.getAction(R) || "уведомление",
                  }),
                ],
              }),
              notification.payload.entityPreview &&
                u("p", {
                  className: i.text,
                  children: notification.payload.entityPreview,
                }),
              u("span", {
                className: i.date,
                children: ye(notification.createdAt),
              }),
            ],
          }),
        ],
      }),
      y &&
        l?.id &&
        u(B_1, {
          variant: F(),
          size: "md",
          className: i.btn,
          onClick: v,
          disabled: isFollowLoading,
          children: [m === "none" && u(m, { size: 18 }), N()],
        }),
    ],
  });
}

export const Notifications = (e) => {
  const {
    notifications,
    status,
    nextCursor,
    fetchNotifications,
    markAllAsRead,
  } = a2();

  const k = a3();
  const l = A_1(null);
  const [R, h] = d(new Set());
  const [y, C] = d(new Map());
  const [m, N] = d(new Set());

  y(() => {
    const n = new Set();
    for (const o of notifications) {
      if (!o.isRead) {
        n.add(o.id);
      }
    }
    h((o) => {
      const s = new Set(o);
      for (const a of n) {
        s.add(a);
      }
      return s;
    });
  }, [notifications]);

  y(() => {
    fetchNotifications(true).then(() => {
      const n = a2
        .getState()
        .notifications.filter((o) => !o.isRead)
        .map((o) => o.id);

      if (n.length > 0) {
        h((o) => {
          const s = new Set(o);
          for (const a of n) {
            s.add(a);
          }
          return s;
        });
      }

      markAllAsRead();
    });
  }, [fetchNotifications, markAllAsRead]);

  y(() => {
    const n = ["follow", "follow_request"];
    const o = [];
    for (const s of notifications) {
      if (!n.includes(s.type)) {
        continue;
      }
      const a = s.payload.actors[0];

      if (a?.id && !y.has(a.id)) {
        o.push([
          a.id,
          {
            isFollowing: a.isFollowing ?? false,
            isFollowedBy: a.isFollowedBy ?? true,
            hasOutgoingRequest: false,
            hasIncomingRequest: false,
            isBlocking: false,
            isBlockedBy: false,
          },
        ]);
      }
    }

    if (o.length > 0) {
      C((s) => {
        const a = new Map(s);
        for (const [c, u] of o) {
          a.set(c, u);
        }
        return a;
      });
    }
  }, [notifications]);

  a4({
    sentinelRef: l,
    hasMore: !!nextCursor,
    isLoading: status === "loading",
    onLoadMore: fetchNotifications,
  });

  const F = a0_1((n) => {
    h((o) => {
      const s = new Set(o);
      s.delete(n);
      return s;
    });
  }, []);

  const v = a0_1(() => {
    h(new Set());
    markAllAsRead();
  }, [markAllAsRead]);

  const _ = a0_1(
    async (n) => {
      if (!m.has(n)) {
        N((o) => new Set(o).add(n));
        try {
          const o = y.get(n);
          if (o?.isFollowing || o?.hasOutgoingRequest) {
            await C.unfollowUser(n);

            C((a) => {
              const c = new Map(a);
              const u = c.get(n);

              if (u) {
                c.set(n, {
                  ...u,
                  isFollowing: false,
                  hasOutgoingRequest: false,
                });
              }

              return c;
            });
          } else {
            const a = await C.followUser(n);
            C((c) => {
              const u = new Map(c);
              const I = u.get(n);

              if (I) {
                u.set(n, {
                  ...I,
                  isFollowing: a === "following",
                  hasOutgoingRequest: a === "requested",
                });
              } else {
                u.set(n, {
                  isFollowing: a === "following",
                  isFollowedBy: true,
                  hasOutgoingRequest: a === "requested",
                  hasIncomingRequest: false,
                  isBlocking: false,
                  isBlockedBy: false,
                });
              }

              return u;
            });
          }
        } catch (o) {
          if (
            o?.status === 409 ||
            o?.code === "CONFLICT" ||
            o?.message?.includes("Already following")
          ) {
            C((a) => {
              const c = new Map(a);
              const u = c.get(n);

              c.set(n, {
                ...(u ?? {
                  isFollowedBy: true,
                  hasIncomingRequest: false,
                  isBlocking: false,
                  isBlockedBy: false,
                }),
                isFollowing: true,
                hasOutgoingRequest: false,
              });

              return c;
            });
          } else {
            console.error("Failed to toggle follow:", o);
          }
        } finally {
          N((o) => {
            const s = new Set(o);
            s.delete(n);
            return s;
          });
        }
      }
    },
    [y, m]
  );

  const d = status === "loading";
  const w = notifications.length === 0 && !d;
  return u("div", {
    className: `${i.page} ym-hide-content`,
    children: [
      u("div", {
        className: i.titleRow,
        children: [
          u("h1", { className: i.pageTitle, children: "Уведомления" }),
          k > 0 &&
            u(B_1, {
              variant: "ghost",
              size: "sm",
              onClick: v,
              children: "Прочитать все",
            }),
        ],
      }),
      w
        ? u("div", {
            className: i.empty,
            children: u("p", { children: "Нет уведомлений" }),
          })
        : u("div", {
            className: i.list,
            children: [
              notifications.map((n) => {
                const o = n.payload.actors[0]?.id;
                return u(
                  Ce,
                  {
                    notification: n,
                    isVisuallyUnread: R.has(n.id),
                    onMarkRead: F,
                    followStatus: o ? y.get(o) ?? null : null,
                    onFollowToggle: _,
                    isFollowLoading: o ? m.has(o) : false,
                  },
                  n.id
                );
              }),
              nextCursor &&
                u("div", {
                  ref: l,
                  className: i.loadMore,
                  children: d && u(a5, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
