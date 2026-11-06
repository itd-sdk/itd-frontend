import {
  u,
  $_1 as x_1,
  y,
  h as S_1,
  x_1 as x_1_1,
  E_1 as B_1,
  J_1 as z_1,
  y as y_1,
  F_1 as E_1,
  F,
  A as G_1,
  z_1_1 as $_1,
  B_1_1 as J_1,
  G_1 as G_1_1,
  A,
  d,
  h,
  B_1 as B_1_1,
  z_1 as z_1_1,
  N,
  O as O_1,
} from "./index-CR_1arh8.js";

import { F as F_1 } from "./IconNotificationMention-C_66b3Yk.js";
import { F as F_2 } from "./IconCheck-Bf33PQen.js";
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
      t._sentryDebugIds[r] = "fcee59fc-9b94-438f-ad02-8e7fcccbe6e1";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-fcee59fc-9b94-438f-ad02-8e7fcccbe6e1";
    }
  } catch {}
})();
const W = "ji2w";
const X = "M9tD";
const Z = "aK7A";
const ee = "frV3";
const te = "qqBF";
const ne = "Xgnj";
const oe = "SstI";
const se = "UC1l";
const le = "sSwh";
const ae = "qHKG";
const ie = "kVW3";
const re = "dpAe";
const ce = "VjDd";
const de = "dJfy";
const ue = "Eifd";
const ge = "sJMC";
const fe = "ZdTh";
const me = "r60Q";
const pe = "eH1M";
const we = "i10c";
const he = "YEY6";
const ye = "TEpF";
const be = "A4wP";
const Ce = "Ol9S";
const Ne = "jlSY";

const a = {
  page: W,
  pageTitle: X,
  list: Z,
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

const O = {
  follow: {
    badgeColor: "blue",
    icon: u(z_1, { size: 12 }),
    getAction: (t) =>
      t > 1
        ? `и ещё ${t - 1} человек подписались на вас`
        : "подписался(-ась) на вас",
  },
  follow_request: {
    badgeColor: "blue",
    icon: u(z_1, { size: 12 }),
    getAction: () => "хочет подписаться на вас",
  },
  follow_accepted: {
    badgeColor: "green",
    icon: u(F_2, { size: 12 }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: u(F, { size: 12, filled: true }),
    getAction: (t) =>
      t > 1 ? `и ещё ${t - 1} человек оценили ваш пост` : "оценил(а) ваш пост",
  },
  post_comment: {
    badgeColor: "green",
    icon: u(E_1, { size: 12, filled: true }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: u(G_1, { size: 12 }),
    getAction: (t) =>
      t > 1
        ? `и ещё ${t - 1} человек сделали репост`
        : "сделал(а) репост вашего поста",
  },
  comment_reaction: {
    badgeColor: "red",
    icon: u(F, { size: 12, filled: true }),
    getAction: (t) =>
      t > 1
        ? `и ещё ${t - 1} человек оценили ваш комментарий`
        : "оценил(а) ваш комментарий",
  },
  comment_reply: {
    badgeColor: "green",
    icon: u(E_1, { size: 12, filled: true }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: u(F_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: u(F_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: u(y_1, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const ke = ({ type }) => {
  const O_t = O[t];

  const f =
    O_t?.badgeColor === "red"
      ? a.red
      : O_t?.badgeColor === "green"
      ? a.green
      : O_t?.badgeColor === "purple"
      ? a.purple
      : a.blue;

  return u("div", {
    className: `${a.badge} ${f}`,
    children: O_t?.icon || u(E_1, { size: 12 }),
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
  const _ = O[notification.type];
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
      $_1(i_clickUrl);
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

  const A = () =>
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
            ? u(x_1, {})
            : u("a", {
                href: l?.username ? `/@${l.username}` : "#",
                className: a.avatarLink,
                onClick: C,
                title: "Перейти в профиль",
                children: u(y, {
                  src: l?.avatar || "",
                  alt: l?.displayName || "User",
                  size: "md",
                  halloween: l?.halloween,
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
                          children: u(x_1_1, {
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
        u(B_1, {
          variant: A(),
          size: "md",
          className: a.btn,
          onClick: F,
          disabled: isFollowLoading,
          children: [h === "none" && u(z_1, { size: 18 }), R()],
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
  } = J_1();

  const _ = G_1_1();
  const l = A(null);
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
      const o = J_1.getState()
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

  B_1_1({
    sentinelRef: l,
    hasMore: !!nextCursor,
    isLoading: status === "loading",
    onLoadMore: fetchNotifications,
  });

  const R = z_1_1((o) => {
    g((n) => {
      const i = new Set(n);
      i.delete(o);
      return i;
    });
  }, []);

  const A = z_1_1(() => {
    g(new Set());
    markAllAsRead();
  }, [markAllAsRead]);

  const F = z_1_1(
    async (o) => {
      if (!N.has(o)) {
        h((n) => new Set(n).add(o));
        try {
          const n = w.get(o);
          if (n?.isFollowing || n?.hasOutgoingRequest) {
            await N.unfollowUser(o);

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
            const s = await N.followUser(o);
            y((d) => {
              const u = new Map(d);
              const T = u.get(o);

              if (T) {
                u.set(o, {
                  ...T,
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
                  children: C && u(O_1, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
