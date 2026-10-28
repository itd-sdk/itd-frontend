import {
  u,
  h as x_1,
  y,
  $ as S_1,
  U as U_1,
  F as B_1,
  x_1_1 as z_1,
  y as y_1,
  x_1 as x_1_1,
  F,
  y_1 as y_1_1,
  $,
  A as J_1,
  B_1_1 as K_1,
  A,
  d,
  h,
  N as L_1,
  z_1 as z_1_1,
  N,
  B_1 as B_1_1,
} from "./index-AoERIL5v.js";

import { J_1 as J_1_1 } from "./IconNotificationMention-CjmcB4kP.js";
import { J_1 as J_1_2 } from "./IconCheck-BTfZJFdT.js";
const Z = "kz0r";
const W = "F0Qm";
const Y = "hT5d";
const ee = "LHS0";
const te = "GcbN";
const ne = "CAyV";
const oe = "ibhn";
const se = "Hl4y";
const le = "q9ID";
const ae = "RLPQ";
const ie = "q9Ne";
const re = "jeI5";
const ce = "pEcl";
const de = "fO3w";
const ue = "mgXp";
const ge = "Lz5w";
const me = "MaaN";
const pe = "fZHn";
const fe = "Lz8O";
const we = "Oi4x";
const he = "Jhj1";
const ye = "VGJS";
const Ce = "QrfP";
const Ne = "kQiD";
const be = "uCgE";

const a = {
  page: Z,
  pageTitle: W,
  list: Y,
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
  action: me,
  text: pe,
  date: fe,
  reminderTitle: we,
  reminderText: he,
  titleRow: ye,
  unread: Ce,
  empty: Ne,
  loadMore: be,
};

function ke(o) {
  if (!o) {
    return "";
  }
  const r = new Date(o);
  return isNaN(r.getTime())
    ? ""
    : r.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}

const U = {
  follow: {
    badgeColor: "blue",
    icon: u(z_1, { size: 12 }),
    getAction: (o) =>
      o > 1
        ? `и ещё ${o - 1} человек подписались на вас`
        : "подписался(-ась) на вас",
  },
  follow_request: {
    badgeColor: "blue",
    icon: u(z_1, { size: 12 }),
    getAction: () => "хочет подписаться на вас",
  },
  follow_accepted: {
    badgeColor: "green",
    icon: u(J_1_2, { size: 12 }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: u(F, { size: 12, filled: true }),
    getAction: (o) =>
      o > 1 ? `и ещё ${o - 1} человек оценили ваш пост` : "оценил(а) ваш пост",
  },
  post_comment: {
    badgeColor: "green",
    icon: u(x_1_1, { size: 12, filled: true }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: u(y_1_1, { size: 12 }),
    getAction: (o) =>
      o > 1
        ? `и ещё ${o - 1} человек сделали репост`
        : "сделал(а) репост вашего поста",
  },
  comment_reaction: {
    badgeColor: "red",
    icon: u(F, { size: 12, filled: true }),
    getAction: (o) =>
      o > 1
        ? `и ещё ${o - 1} человек оценили ваш комментарий`
        : "оценил(а) ваш комментарий",
  },
  comment_reply: {
    badgeColor: "green",
    icon: u(x_1_1, { size: 12, filled: true }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: u(J_1_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: u(J_1_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: u(y_1, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const Re = ({ type }) => {
  const U_o = U[o];

  const p =
    U_o?.badgeColor === "red"
      ? a.red
      : U_o?.badgeColor === "green"
      ? a.green
      : U_o?.badgeColor === "purple"
      ? a.purple
      : a.blue;

  return u("div", {
    className: `${a.badge} ${p}`,
    children: U_o?.icon || u(x_1_1, { size: 12 }),
  });
};

function Fe({
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
      $(i_clickUrl);
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

  const F = () => {
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

  const _ = () =>
    h === "following" || h === "requested" ? "secondary" : "primary";

  const A = (c) => {
    c.stopPropagation();

    if (l?.id && !isFollowLoading) {
      onFollowToggle(l.id);
    }
  };

  const N = (c) => {
    c.stopPropagation();
    c.preventDefault();
    onMarkRead(notification.id);

    if (l?.username) {
      $(`/@${l.username}`);
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
            ? u(x_1, {})
            : u("a", {
                href: l?.username ? `/@${l.username}` : "#",
                className: a.avatarLink,
                onClick: N,
                title: "Перейти в профиль",
                children: u(y, {
                  src: l?.avatar || "",
                  alt: l?.displayName || "User",
                  size: "md",
                  halloween: l?.halloween,
                  badge: u(Re, { type: notification.type }),
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
                          onClick: N,
                          title: "Перейти в профиль",
                          children: u(U_1, {
                            userId: l?.id,
                            halloween: l?.halloween,
                            name: l?.displayName || "Пользователь",
                            verified: l?.isVerified ?? l?.verified ?? false,
                            pin: l?.pin,
                            size: "sm",
                            className: a.name,
                          }),
                        }),
                        u("span", {
                          className: a.action,
                          children: k?.getAction(R) || "уведомление",
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
                children: ke(notification.createdAt),
              }),
            ],
          }),
        ],
      }),
      y &&
        l?.id &&
        u(B_1, {
          variant: _(),
          size: "md",
          className: a.btn,
          onClick: A,
          disabled: isFollowLoading,
          children: [h === "none" && u(z_1, { size: 18 }), F()],
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
  } = J_1();

  const k = K_1();
  const l = A(null);
  const [R, g] = d(new Set());
  const [w, y] = d(new Map());
  const [b, h] = d(new Set());

  h(() => {
    const n = new Set();
    for (const t of notifications) {
      if (!t.isRead) {
        n.add(t.id);
      }
    }
    g((t) => {
      const i = new Set(t);
      for (const s of n) {
        i.add(s);
      }
      return i;
    });
  }, [notifications]);

  h(() => {
    fetchNotifications(true).then(() => {
      const n = J_1.getState()
        .notifications.filter((t) => !t.isRead)
        .map((t) => t.id);

      if (n.length > 0) {
        g((t) => {
          const i = new Set(t);
          for (const s of n) {
            i.add(s);
          }
          return i;
        });
      }

      markAllAsRead();
    });
  }, [fetchNotifications, markAllAsRead]);

  h(() => {
    const n = ["follow", "follow_request"];
    const t = [];
    for (const i of notifications) {
      if (!n.includes(i.type)) {
        continue;
      }
      const s = i.payload.actors[0];

      if (s?.id && !w.has(s.id)) {
        t.push([
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

    if (t.length > 0) {
      y((i) => {
        const s = new Map(i);
        for (const [d, u] of t) {
          s.set(d, u);
        }
        return s;
      });
    }
  }, [notifications]);

  L_1({
    sentinelRef: l,
    hasMore: !!nextCursor,
    isLoading: status === "loading",
    onLoadMore: fetchNotifications,
  });

  const F = z_1_1((n) => {
    g((t) => {
      const i = new Set(t);
      i.delete(n);
      return i;
    });
  }, []);

  const _ = z_1_1(() => {
    g(new Set());
    markAllAsRead();
  }, [markAllAsRead]);

  const A = z_1_1(
    async (n) => {
      if (!b.has(n)) {
        h((t) => new Set(t).add(n));
        try {
          const t = w.get(n);
          if (t?.isFollowing || t?.hasOutgoingRequest) {
            await N.unfollowUser(n);

            y((s) => {
              const d = new Map(s);
              const u = d.get(n);

              if (u) {
                d.set(n, {
                  ...u,
                  isFollowing: false,
                  hasOutgoingRequest: false,
                });
              }

              return d;
            });
          } else {
            const s = await N.followUser(n);
            y((d) => {
              const u = new Map(d);
              const $ = u.get(n);

              if ($) {
                u.set(n, {
                  ...$,
                  isFollowing: s === "following",
                  hasOutgoingRequest: s === "requested",
                });
              } else {
                u.set(n, {
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
        } catch (t) {
          if (
            t?.status === 409 ||
            t?.code === "CONFLICT" ||
            t?.message?.includes("Already following")
          ) {
            y((s) => {
              const d = new Map(s);
              const u = d.get(n);

              d.set(n, {
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
            console.error("Failed to toggle follow:", t);
          }
        } finally {
          h((t) => {
            const i = new Set(t);
            i.delete(n);
            return i;
          });
        }
      }
    },
    [w, b]
  );

  const N = status === "loading";
  const c = notifications.length === 0 && !N;
  return u("div", {
    className: `${a.page} ym-hide-content`,
    children: [
      u("div", {
        className: a.titleRow,
        children: [
          u("h1", { className: a.pageTitle, children: "Уведомления" }),
          k > 0 &&
            u(B_1, {
              variant: "ghost",
              size: "sm",
              onClick: _,
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
              notifications.map((n) => {
                const t = n.payload.actors[0]?.id;
                return u(
                  Fe,
                  {
                    notification: n,
                    isVisuallyUnread: R.has(n.id),
                    onMarkRead: F,
                    followStatus: t ? w.get(t) ?? null : null,
                    onFollowToggle: A,
                    isFollowLoading: t ? b.has(t) : false,
                  },
                  n.id
                );
              }),
              nextCursor &&
                u("div", {
                  ref: l,
                  className: a.loadMore,
                  children: N && u(B_1_1, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
