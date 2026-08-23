import {
  u,
  f,
  B_1 as U_1,
  y as B_1,
  m,
  a4 as Y_1,
  Z as Z_1,
  a0,
  a1,
  e,
  a2,
  a3,
  A,
  d,
  y,
  a4,
  Z_1 as Z_1_1,
  C,
  a5,
} from "./index-DBLtLuBZ.js";

import { Z_1_1 as Z_1_1_1 } from "./IconNotificationMention-Bo_H2cao.js";
import { Z_1_1 as Z_1_1_2 } from "./IconCheck-BbHRT87E.js";
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
      e._sentryDebugIds[r] = "acc0829b-fa2e-460e-8ee7-6ec147286a3e";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-acc0829b-fa2e-460e-8ee7-6ec147286a3e";
    }
  } catch {}
})();
const Q = "RiMC";
const X = "d11b";
const j = "qXiq";
const K = "NW3G";
const Z = "IkuG";
const ee = "Dg22";
const te = "nC0k";
const oe = "ABLz";
const ne = "s0R1";
const se = "jmtI";
const ae = "fzOC";
const le = "v0Jv";
const ie = "eGzR";
const re = "dnIU";
const ce = "Nkno";
const de = "HnXU";
const ue = "KvHv";
const ge = "Em8o";
const fe = "GBQY";
const me = "brWx";
const pe = "xJWd";
const we = "bWQP";
const ye = "vG73";

const i = {
  page: Q,
  pageTitle: X,
  list: j,
  item: K,
  btn: Z,
  content: ee,
  badge: te,
  red: oe,
  green: ne,
  blue: se,
  purple: ae,
  avatarLink: le,
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
    icon: u(Z_1_1_2, { size: 12 }),
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
    icon: u(Z_1_1_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: u(Z_1_1_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: u(Y_1, { size: 12 }),
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
    children: O_e?.icon || u(Z_1, { size: 12 }),
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
  const k = O[notification.type];
  const a = notification.payload.actors[0];
  const v = notification.payload.count;

  const y = () => {
    onMarkRead(notification.id);
    const { type, entityId, parentEntityId, payload } = notification;
    let o_clickUrl = payload.clickUrl;

    const l = [
      "post_reaction",
      "post_comment",
      "post_repost",
      "post_mention",
      "wall_post",
    ];

    const c = ["comment_reaction", "comment_reply", "comment_mention"];

    if (entityId && a?.username) {
      if (l.includes(type)) {
        if (type === "post_comment" && parentEntityId) {
          o_clickUrl = `/@${a.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          o_clickUrl = `/@${a.username}/post/${entityId}`;
        }
      } else if (c.includes(type)) {
        if (parentEntityId) {
          o_clickUrl = `/@${a.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          o_clickUrl = `/@${a.username}/post/${entityId}`;
        }
      }
    }

    if (
      !o_clickUrl &&
      a?.username &&
      ["follow", "follow_request", "follow_accepted"].includes(type)
    ) {
      o_clickUrl = `/@${a.username}`;
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

  const _ = () =>
    m === "following" || m === "requested" ? "secondary" : "primary";

  const A = (d) => {
    d.stopPropagation();

    if (a?.id && !isFollowLoading) {
      onFollowToggle(a.id);
    }
  };

  const R = (d) => {
    d.stopPropagation();
    d.preventDefault();
    onMarkRead(notification.id);

    if (a?.username) {
      notification(`/@${a.username}`);
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
            href: a?.username ? `/@${a.username}` : "#",
            className: i.avatarLink,
            onClick: R,
            title: "Перейти в профиль",
            children: u(isFollowLoading, {
              src: a?.avatar || "",
              alt: a?.displayName || "User",
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
                    href: a?.username ? `/@${a.username}` : "#",
                    className: i.actorLink,
                    onClick: R,
                    title: "Перейти в профиль",
                    children: u(U_1, {
                      name: a?.displayName || "Пользователь",
                      verified: a?.isVerified ?? a?.verified ?? false,
                      pin: a?.pin,
                      size: "sm",
                      className: i.name,
                    }),
                  }),
                  u("span", {
                    className: i.action,
                    children: k?.getAction(v) || "уведомление",
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
        a?.id &&
        u(B_1, {
          variant: _(),
          size: "md",
          className: i.btn,
          onClick: A,
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
  const a = A(null);
  const [v, y] = d(new Set());
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
      for (const l of n) {
        s.add(l);
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
          for (const l of n) {
            s.add(l);
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
      const l = s.payload.actors[0];

      if (l?.id && !h.has(l.id)) {
        o.push([
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

    if (o.length > 0) {
      C((s) => {
        const l = new Map(s);
        for (const [c, u] of o) {
          l.set(c, u);
        }
        return l;
      });
    }
  }, [notifications]);

  a4({
    sentinelRef: a,
    hasMore: !!nextCursor,
    isLoading: status === "loading",
    onLoadMore: fetchNotifications,
  });

  const _ = Z_1_1((n) => {
    y((o) => {
      const s = new Set(o);
      s.delete(n);
      return s;
    });
  }, []);

  const A = Z_1_1(() => {
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

            C((l) => {
              const c = new Map(l);
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
            const l = await C.followUser(n);
            C((c) => {
              const u = new Map(c);
              const z = u.get(n);

              if (z) {
                u.set(n, {
                  ...z,
                  isFollowing: l === "following",
                  hasOutgoingRequest: l === "requested",
                });
              } else {
                u.set(n, {
                  isFollowing: l === "following",
                  isFollowedBy: true,
                  hasOutgoingRequest: l === "requested",
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
            C((l) => {
              const c = new Map(l);
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
          k > 0 &&
            u(B_1, {
              variant: "ghost",
              size: "sm",
              onClick: A,
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
                    isVisuallyUnread: v.has(n.id),
                    onMarkRead: _,
                    followStatus: o ? h.get(o) ?? null : null,
                    onFollowToggle: R,
                    isFollowLoading: o ? m.has(o) : false,
                  },
                  n.id
                );
              }),
              nextCursor &&
                u("div", {
                  ref: a,
                  className: i.loadMore,
                  children: d && u(a5, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
