import {
  u,
  W_1 as G_1,
  A as H_1,
  N_1 as S_1,
  G_1 as G_1_1,
  J_1 as B_1,
  K_1 as J_1,
  X_1 as K_1,
  B_1_1_1 as L_1,
  N,
  B_1 as B_1_1,
  h as $_1,
  Z_1 as Q_1,
  W as W_1,
  A,
  d,
  h,
  L_1_2 as X_1,
  N as N_1,
  B_1_1 as B_1_1_1,
  Z as Z_1,
} from "./index-BQxlThnW-portal20261026.js";

import { L_1 as L_1_1 } from "./IconNotificationMention-BlVye8V--portal20261026.js";
import { L_1 as L_1_2 } from "./IconCheck-BsNo8q94-portal20261026.js";
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
      t._sentryDebugIds[r] = "49df194a-3fac-4797-9408-00e45a0cca49";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-49df194a-3fac-4797-9408-00e45a0cca49";
    }
  } catch {}
})();
const Z = "pC2Y";
const j = "npoV";
const W = "JtSJ";
const ee = "Pht7";
const te = "BCV0";
const ne = "fNji";
const oe = "xcan";
const se = "If20";
const le = "A5aK";
const ae = "dL9O";
const ie = "XuHc";
const re = "keLt";
const ce = "Hu9y";
const de = "NTuQ";
const ue = "SfQz";
const ge = "pZF3";
const fe = "tGr5";
const me = "V69l";
const pe = "OEkY";
const we = "AsIS";
const ye = "vEaJ";
const he = "rgqt";
const be = "Bz80";
const Ce = "qiVu";
const Ne = "woD8";

const a = {
  page: Z,
  pageTitle: j,
  list: W,
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
  reminderText: ye,
  titleRow: he,
  unread: be,
  empty: Ce,
  loadMore: Ne,
};

function ke(t) {
  if (!t) {
    return "";
  }
  const r = new Date(t);
  return isNaN(r.getTime())
    ? ""
    : r.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}

const E = {
  follow: {
    badgeColor: "blue",
    icon: u(J_1, { size: 12 }),
    getAction: (t) =>
      t > 1
        ? `и ещё ${t - 1} человек подписались на вас`
        : "подписался(-ась) на вас",
  },
  follow_request: {
    badgeColor: "blue",
    icon: u(J_1, { size: 12 }),
    getAction: () => "хочет подписаться на вас",
  },
  follow_accepted: {
    badgeColor: "green",
    icon: u(L_1_2, { size: 12 }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: u(N, { size: 12, filled: true }),
    getAction: (t) =>
      t > 1 ? `и ещё ${t - 1} человек оценили ваш пост` : "оценил(а) ваш пост",
  },
  post_comment: {
    badgeColor: "green",
    icon: u(L_1, { size: 12, filled: true }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: u(B_1_1, { size: 12 }),
    getAction: (t) =>
      t > 1
        ? `и ещё ${t - 1} человек сделали репост`
        : "сделал(а) репост вашего поста",
  },
  comment_reaction: {
    badgeColor: "red",
    icon: u(N, { size: 12, filled: true }),
    getAction: (t) =>
      t > 1
        ? `и ещё ${t - 1} человек оценили ваш комментарий`
        : "оценил(а) ваш комментарий",
  },
  comment_reply: {
    badgeColor: "green",
    icon: u(L_1, { size: 12, filled: true }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: u(L_1_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: u(L_1_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: u(K_1, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const _e = ({ type }) => {
  const E_t = E[t];

  const f =
    E_t?.badgeColor === "red"
      ? a.red
      : E_t?.badgeColor === "green"
      ? a.green
      : E_t?.badgeColor === "purple"
      ? a.purple
      : a.blue;

  return u("div", {
    className: `${a.badge} ${f}`,
    children: E_t?.icon || u(L_1, { size: 12 }),
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
  const k = E[notification.type];
  const l = notification.payload.actors[0];
  const _ = notification.payload.count;
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
      $_1(i_clickUrl);
    }
  };

  const h =
    notification.type === "follow" || notification.type === "follow_request";

  const y = isFollowLoading
    ? "loading"
    : followStatus
    ? followStatus.isFollowing
      ? "following"
      : followStatus.hasOutgoingRequest
      ? "requested"
      : "none"
    : "none";

  const R = () => {
    switch (y) {
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

  const A = () =>
    y === "following" || y === "requested" ? "secondary" : "primary";

  const v = (c) => {
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
      $_1(`/@${l.username}`);
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
            ? u(G_1, {})
            : u("a", {
                href: l?.username ? `/@${l.username}` : "#",
                className: a.avatarLink,
                onClick: C,
                title: "Перейти в профиль",
                children: u(H_1, {
                  src: l?.avatar || "",
                  alt: l?.displayName || "User",
                  size: "md",
                  badge: u(_e, { type: notification.type }),
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
                          children: u(G_1_1, {
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
                          children: k?.getAction(_) || "уведомление",
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
      h &&
        l?.id &&
        u(B_1, {
          variant: A(),
          size: "md",
          className: a.btn,
          onClick: v,
          disabled: isFollowLoading,
          children: [y === "none" && u(J_1, { size: 18 }), R()],
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
  } = Q_1();

  const k = W_1();
  const l = A(null);
  const [_, g] = d(new Set());
  const [w, h] = d(new Map());
  const [N, y] = d(new Set());

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
      const o = Q_1.getState()
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
      h((i) => {
        const s = new Map(i);
        for (const [d, u] of n) {
          s.set(d, u);
        }
        return s;
      });
    }
  }, [notifications]);

  X_1({
    sentinelRef: l,
    hasMore: !!nextCursor,
    isLoading: status === "loading",
    onLoadMore: fetchNotifications,
  });

  const R = N_1((o) => {
    g((n) => {
      const i = new Set(n);
      i.delete(o);
      return i;
    });
  }, []);

  const A = N_1(() => {
    g(new Set());
    markAllAsRead();
  }, [markAllAsRead]);

  const v = N_1(
    async (o) => {
      if (!N.has(o)) {
        y((n) => new Set(n).add(o));
        try {
          const n = w.get(o);
          if (n?.isFollowing || n?.hasOutgoingRequest) {
            await B_1_1_1.unfollowUser(o);

            h((s) => {
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
            const s = await B_1_1_1.followUser(o);
            h((d) => {
              const u = new Map(d);
              const F = u.get(o);

              if (F) {
                u.set(o, {
                  ...F,
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
            h((s) => {
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
          y((n) => {
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
          k > 0 &&
            u(B_1, {
              variant: "ghost",
              size: "sm",
              onClick: A,
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
                    isVisuallyUnread: _.has(o.id),
                    onMarkRead: R,
                    followStatus: n ? w.get(n) ?? null : null,
                    onFollowToggle: v,
                    isFollowLoading: n ? N.has(n) : false,
                  },
                  o.id
                );
              }),
              nextCursor &&
                u("div", {
                  ref: l,
                  className: a.loadMore,
                  children: C && u(Z_1, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
