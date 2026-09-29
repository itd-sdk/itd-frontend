import {
  u,
  f,
  ak as X_1,
  m as B_1,
  m,
  af,
  ag,
  ah,
  ai,
  e,
  aj,
  ak,
  d as A_1,
  d,
  h,
  al,
  q,
  a0,
  am,
} from "./index-D4QRo1-7.js";

import { ag as ag_1 } from "./IconNotificationMention-BMEhld0T.js";
import { ag as ag_2 } from "./IconCheck-T7eIRtyi.js";
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
      e._sentryDebugIds[r] = "162e2825-6498-46bf-84b0-128ba264cf84";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-162e2825-6498-46bf-84b0-128ba264cf84";
    }
  } catch {}
})();
const Z = "hZ7o";
const Q = "JND3";
const G = "p0xJ";
const W = "W0cs";
const K = "l1k0";
const ee = "Qxqf";
const te = "lHNY";
const oe = "kc5S";
const ne = "v7vb";
const se = "di8U";
const le = "N3Zn";
const ae = "Xj3Y";
const ie = "z4P2";
const re = "mhHQ";
const ce = "lkJN";
const de = "X3Oy";
const ue = "pVU1";
const ge = "ju1X";
const fe = "g81u";
const me = "DqZR";
const pe = "hyH7";
const we = "DvD7";
const he = "h79o";

const i = {
  page: Z,
  pageTitle: Q,
  list: G,
  item: W,
  btn: K,
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

const O = {
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
    icon: u(ag_2, { size: 12 }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: u(ah, { size: 12, filled: true }),
    getAction: (e) =>
      e > 1 ? `и ещё ${e - 1} человек оценили ваш пост` : "оценил(а) ваш пост",
  },
  post_comment: {
    badgeColor: "green",
    icon: u(ag, { size: 12, filled: true }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: u(ai, { size: 12 }),
    getAction: (e) =>
      e > 1
        ? `и ещё ${e - 1} человек сделали репост`
        : "сделал(а) репост вашего поста",
  },
  comment_reaction: {
    badgeColor: "red",
    icon: u(ah, { size: 12, filled: true }),
    getAction: (e) =>
      e > 1
        ? `и ещё ${e - 1} человек оценили ваш комментарий`
        : "оценил(а) ваш комментарий",
  },
  comment_reply: {
    badgeColor: "green",
    icon: u(ag, { size: 12, filled: true }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: u(ag_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: u(ag_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: u(af, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const be = ({ type }) => {
  const O_e = O[e];

  const g =
    O_e?.badgeColor === "red"
      ? i.red
      : O_e?.badgeColor === "green"
      ? i.green
      : O_e?.badgeColor === "purple"
      ? i.purple
      : i.blue;

  return u("div", {
    className: `${i.badge} ${g}`,
    children: O_e?.icon || u(ag, { size: 12 }),
  });
};

function Ne({
  notification,
  isVisuallyUnread,
  onMarkRead,
  followStatus,
  onFollowToggle,
  isFollowLoading,
}) {
  const _ = O[notification.type];
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

  const C = () => {
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

  const k = (d) => {
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
            onClick: k,
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
                    onClick: k,
                    title: "Перейти в профиль",
                    children: u(X_1, {
                      userId: l?.id,
                      name: l?.displayName || "Пользователь",
                      verified: l?.isVerified ?? l?.verified ?? false,
                      pin: l?.pin,
                      size: "sm",
                      className: i.name,
                    }),
                  }),
                  u("span", {
                    className: i.action,
                    children: _?.getAction(R) || "уведомление",
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
          variant: v(),
          size: "md",
          className: i.btn,
          onClick: F,
          disabled: isFollowLoading,
          children: [m === "none" && u(m, { size: 18 }), C()],
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
  } = aj();

  const _ = ak();
  const l = A_1(null);
  const [R, h] = d(new Set());
  const [y, N] = d(new Map());
  const [m, C] = d(new Set());

  h(() => {
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

  h(() => {
    fetchNotifications(true).then(() => {
      const n = aj
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

  h(() => {
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
      N((s) => {
        const a = new Map(s);
        for (const [c, u] of o) {
          a.set(c, u);
        }
        return a;
      });
    }
  }, [notifications]);

  al({
    sentinelRef: l,
    hasMore: !!nextCursor,
    isLoading: status === "loading",
    onLoadMore: fetchNotifications,
  });

  const v = q((n) => {
    h((o) => {
      const s = new Set(o);
      s.delete(n);
      return s;
    });
  }, []);

  const F = q(() => {
    h(new Set());
    markAllAsRead();
  }, [markAllAsRead]);

  const k = q(
    async (n) => {
      if (!m.has(n)) {
        C((o) => new Set(o).add(n));
        try {
          const o = y.get(n);
          if (o?.isFollowing || o?.hasOutgoingRequest) {
            await a0.unfollowUser(n);

            N((a) => {
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
            const a = await a0.followUser(n);
            N((c) => {
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
            N((a) => {
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
          C((o) => {
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
                  Ne,
                  {
                    notification: n,
                    isVisuallyUnread: R.has(n.id),
                    onMarkRead: v,
                    followStatus: o ? y.get(o) ?? null : null,
                    onFollowToggle: k,
                    isFollowLoading: o ? m.has(o) : false,
                  },
                  n.id
                );
              }),
              nextCursor &&
                u("div", {
                  ref: l,
                  className: i.loadMore,
                  children: d && u(am, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
