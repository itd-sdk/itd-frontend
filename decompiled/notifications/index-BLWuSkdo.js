import {
  u,
  f,
  U as U_1,
  y as B_1,
  m,
  Y as Y_1,
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
  Z_1 as Z_1_1,
  C,
  a5,
} from "./index-pEgBAsWz.js";

import { m as m_1 } from "./IconNotificationMention-ChAl94AE.js";
import { m as m_2 } from "./IconCheck-Cr_I7s2Q.js";
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
      e._sentryDebugIds[r] = "3e70859b-958b-4680-b3a5-c44d1f9af6e4";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-3e70859b-958b-4680-b3a5-c44d1f9af6e4";
    }
  } catch {}
})();
const Y = "h3Hm";
const j = "DkJA";
const K = "wyt2";
const Q = "yBg7";
const Z = "yMO7";
const ee = "h8n6";
const te = "gk9G";
const oe = "BRGP";
const ne = "yVyb";
const se = "DL3o";
const le = "E5Vu";
const ae = "Lg1A";
const ie = "XzWR";
const re = "IRLF";
const ce = "aeHO";
const de = "xFmj";
const ue = "vWWe";
const ge = "CQrn";
const fe = "sKqv";
const me = "L0iH";
const pe = "ueXb";
const we = "fbuP";
const ye = "iOuJ";

const i = {
  page: Y,
  pageTitle: j,
  list: K,
  item: Q,
  btn: Z,
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
  loadMore: ye,
};

function he(e) {
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
    icon: u(m_2, { size: 12 }),
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
    icon: u(m_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: u(m_1, { size: 12 }),
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
  const _ = U[notification.type];
  const l = notification.payload.actors[0];
  const k = notification.payload.count;

  const y = () => {
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

  const h =
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

  const v = () =>
    m === "following" || m === "requested" ? "secondary" : "primary";

  const F = (d) => {
    d.stopPropagation();

    if (l?.id && !isFollowLoading) {
      onFollowToggle(l.id);
    }
  };

  const R = (d) => {
    d.stopPropagation();
    d.preventDefault();
    onMarkRead(notification.id);

    if (l?.username) {
      notification(`/@${l.username}`);
    }
  };

  return u("div", {
    className: `${i.item} ${isVisuallyUnread ? i.unread : ""}`,
    onClick: y,
    role: "button",
    tabIndex: 0,
    children: [
      u("div", {
        className: i.content,
        children: [
          u("a", {
            href: l?.username ? `/@${l.username}` : "#",
            className: i.avatarLink,
            onClick: R,
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
                    onClick: R,
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
                    children: _?.getAction(k) || "уведомление",
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
                children: he(notification.createdAt),
              }),
            ],
          }),
        ],
      }),
      h &&
        l?.id &&
        u(B_1, {
          variant: v(),
          size: "md",
          className: i.btn,
          onClick: F,
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

  const _ = a3();
  const l = A_1(null);
  const [k, y] = d(new Set());
  const [h, C] = d(new Map());
  const [m, N] = d(new Set());

  y(() => {
    const n = new Set();
    for (const o of notifications) {
      if (!o.isRead) {
        n.add(o.id);
      }
    }
    y((o) => {
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
        y((o) => {
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

      if (a?.id && !h.has(a.id)) {
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

  const v = Z_1_1((n) => {
    y((o) => {
      const s = new Set(o);
      s.delete(n);
      return s;
    });
  }, []);

  const F = Z_1_1(() => {
    y(new Set());
    markAllAsRead();
  }, [markAllAsRead]);

  const R = Z_1_1(
    async (n) => {
      if (!m.has(n)) {
        N((o) => new Set(o).add(n));
        try {
          const o = h.get(n);
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
              const S = u.get(n);

              if (S) {
                u.set(n, {
                  ...S,
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
    [h, m]
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
          _ > 0 &&
            u(B_1, {
              variant: "ghost",
              size: "sm",
              onClick: F,
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
                    isVisuallyUnread: k.has(n.id),
                    onMarkRead: v,
                    followStatus: o ? h.get(o) ?? null : null,
                    onFollowToggle: R,
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
