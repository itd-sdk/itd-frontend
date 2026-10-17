import {
  u,
  af,
  f,
  m as S_1,
  X as X_1,
  u_1_1 as B_1,
  m,
  ag,
  ah,
  ai,
  aj,
  u as u_1,
  ak,
  al,
  A,
  d,
  h,
  am,
  u_1 as u_1_1,
  a0,
  an,
} from "./index-DqQficWb.js";

import { ah as ah_1 } from "./IconNotificationMention-Bq8eBbdh.js";
import { ah as ah_2 } from "./IconCheck-DQAKc0NL.js";
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
      t._sentryDebugIds[r] = "cf943a45-bbe0-48ba-96d5-a523c75297d5";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-cf943a45-bbe0-48ba-96d5-a523c75297d5";
    }
  } catch {}
})();
const X = "jpRV";
const Z = "ijac";
const H = "dse1";
const ee = "E1Ob";
const te = "zmyQ";
const ne = "RBUW";
const oe = "ASNp";
const se = "NoR6";
const ae = "FZon";
const le = "afb3";
const ie = "esic";
const re = "rVMb";
const ce = "YGFy";
const de = "VcRs";
const ue = "L9R6";
const ge = "LpEQ";
const me = "E3Ja";
const fe = "bNap";
const pe = "kBt8";
const we = "QUSW";
const ye = "URgA";
const he = "GNTe";
const be = "vAiv";
const Ne = "jMDM";
const Re = "vR93";

const l = {
  page: X,
  pageTitle: Z,
  list: H,
  item: ee,
  btn: te,
  content: ne,
  badge: oe,
  red: se,
  green: ae,
  blue: le,
  purple: ie,
  avatarLink: re,
  info: ce,
  header: de,
  actorLink: ue,
  name: ge,
  action: me,
  text: fe,
  date: pe,
  reminderTitle: we,
  reminderText: ye,
  titleRow: he,
  unread: be,
  empty: Ne,
  loadMore: Re,
};

function Ce(t) {
  if (!t) {
    return "";
  }
  const r = new Date(t);
  return isNaN(r.getTime())
    ? ""
    : r.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}

const U = {
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
    icon: u(ah_2, { size: 12 }),
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
    icon: u(ah_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: u(ah_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: u(ag, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const ke = ({ type }) => {
  const U_t = U[t];

  const m =
    U_t?.badgeColor === "red"
      ? l.red
      : U_t?.badgeColor === "green"
      ? l.green
      : U_t?.badgeColor === "purple"
      ? l.purple
      : l.blue;

  return u("div", {
    className: `${l.badge} ${m}`,
    children: U_t?.icon || u(ah, { size: 12 }),
  });
};

function _e({
  notification,
  isVisuallyUnread,
  onMarkRead,
  followStatus,
  onFollowToggle,
  isFollowLoading,
}) {
  const C = U[notification.type];
  const a = notification.payload.actors[0];
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

    if (entityId && a?.username) {
      if (d.includes(type)) {
        if (type === "post_comment" && parentEntityId) {
          i_clickUrl = `/@${a.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          i_clickUrl = `/@${a.username}/post/${entityId}`;
        }
      } else if (u.includes(type)) {
        if (parentEntityId) {
          i_clickUrl = `/@${a.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          i_clickUrl = `/@${a.username}/post/${entityId}`;
        }
      }
    }

    if (
      !i_clickUrl &&
      a?.username &&
      ["follow", "follow_request", "follow_accepted"].includes(type)
    ) {
      i_clickUrl = `/@${a.username}`;
    }

    if (i_clickUrl) {
      u_1(i_clickUrl);
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

  const _ = () => {
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

  const v = () =>
    y === "following" || y === "requested" ? "secondary" : "primary";

  const A = (c) => {
    c.stopPropagation();

    if (a?.id && !isFollowLoading) {
      onFollowToggle(a.id);
    }
  };

  const N = (c) => {
    c.stopPropagation();
    c.preventDefault();
    onMarkRead(notification.id);

    if (a?.username) {
      u_1(`/@${a.username}`);
    }
  };

  return u("div", {
    className: `${l.item} ${isVisuallyUnread ? l.unread : ""}`,
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
        className: l.content,
        children: [
          g
            ? u(af, {})
            : u("a", {
                href: a?.username ? `/@${a.username}` : "#",
                className: l.avatarLink,
                onClick: N,
                title: "Перейти в профиль",
                children: u(isFollowLoading, {
                  src: a?.avatar || "",
                  alt: a?.displayName || "User",
                  size: "md",
                  badge: u(ke, { type: notification.type }),
                }),
              }),
          u("div", {
            className: l.info,
            children: [
              u("div", {
                className: l.header,
                children: g
                  ? u("span", {
                      className: l.reminderTitle,
                      children: notification.payload.title,
                    })
                  : u(S_1, {
                      children: [
                        u("a", {
                          href: a?.username ? `/@${a.username}` : "#",
                          className: l.actorLink,
                          onClick: N,
                          title: "Перейти в профиль",
                          children: u(X_1, {
                            userId: a?.id,
                            name: a?.displayName || "Пользователь",
                            verified: a?.isVerified ?? a?.verified ?? false,
                            pin: a?.pin,
                            size: "sm",
                            className: l.name,
                          }),
                        }),
                        u("span", {
                          className: l.action,
                          children: C?.getAction(k) || "уведомление",
                        }),
                      ],
                    }),
              }),
              notification.payload.entityPreview &&
                u("p", {
                  className: `${l.text} ${g ? l.reminderText : ""}`,
                  children: notification.payload.entityPreview,
                }),
              u("span", {
                className: l.date,
                children: Ce(notification.createdAt),
              }),
            ],
          }),
        ],
      }),
      h &&
        a?.id &&
        u(B_1, {
          variant: v(),
          size: "md",
          className: l.btn,
          onClick: A,
          disabled: isFollowLoading,
          children: [y === "none" && u(onMarkRead, { size: 18 }), _()],
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

  const C = al();
  const a = A(null);
  const [k, g] = d(new Set());
  const [w, h] = d(new Map());
  const [R, y] = d(new Set());

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
      h((i) => {
        const s = new Map(i);
        for (const [d, u] of n) {
          s.set(d, u);
        }
        return s;
      });
    }
  }, [notifications]);

  am({
    sentinelRef: a,
    hasMore: !!nextCursor,
    isLoading: status === "loading",
    onLoadMore: fetchNotifications,
  });

  const _ = u_1_1((o) => {
    g((n) => {
      const i = new Set(n);
      i.delete(o);
      return i;
    });
  }, []);

  const v = u_1_1(() => {
    g(new Set());
    markAllAsRead();
  }, [markAllAsRead]);

  const A = u_1_1(
    async (o) => {
      if (!R.has(o)) {
        y((n) => new Set(n).add(o));
        try {
          const n = w.get(o);
          if (n?.isFollowing || n?.hasOutgoingRequest) {
            await a0.unfollowUser(o);

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
            const s = await a0.followUser(o);
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
    [w, R]
  );

  const N = status === "loading";
  const c = notifications.length === 0 && !N;
  return u("div", {
    className: `${l.page} ym-hide-content`,
    children: [
      u("div", {
        className: l.titleRow,
        children: [
          u("h1", { className: l.pageTitle, children: "Уведомления" }),
          C > 0 &&
            u(B_1, {
              variant: "ghost",
              size: "sm",
              onClick: v,
              children: "Прочитать все",
            }),
        ],
      }),
      c
        ? u("div", {
            className: l.empty,
            children: u("p", { children: "Нет уведомлений" }),
          })
        : u("div", {
            className: l.list,
            children: [
              notifications.map((o) => {
                const n = o.payload.actors[0]?.id;
                return u(
                  _e,
                  {
                    notification: o,
                    isVisuallyUnread: k.has(o.id),
                    onMarkRead: _,
                    followStatus: n ? w.get(n) ?? null : null,
                    onFollowToggle: A,
                    isFollowLoading: n ? R.has(n) : false,
                  },
                  o.id
                );
              }),
              nextCursor &&
                u("div", {
                  ref: a,
                  className: l.loadMore,
                  children: N && u(an, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
