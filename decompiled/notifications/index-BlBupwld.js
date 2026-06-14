import {
  a,
  A,
  y,
  g,
  Y_1 as U_1,
  B,
  a as a_1,
  a0 as X_1,
  A_1 as Y_1,
  a1 as Z_1,
  a0,
  f,
  a1,
  a2,
  d,
  q,
  a3,
  C,
  a4,
} from "./index-BAlLDjSl.js";

import { A as A_1 } from "./IconNotificationMention-CtJoPImP.js";
import { A as A_2 } from "./IconCheck-B8U4vchm.js";
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
    e.SENTRY_RELEASE = { id: "1.1.1" };
    const a = new e.Error().stack;

    if (a) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[a] = "6823ffc4-1323-43c6-b6ec-5c667078c5d3";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-6823ffc4-1323-43c6-b6ec-5c667078c5d3";
    }
  } catch {}
})();
const ne = "aLWf";
const oe = "XelY";
const se = "aFqf";
const le = "bs4a";
const ae = "qu9R";
const re = "uUD4";
const ie = "xrPM";
const ce = "Ef3Y";
const de = "JIKQ";
const ue = "mTxR";
const ge = "ha1i";
const fe = "hp1k";
const me = "bRat";
const pe = "Qg8s";
const we = "rRCD";
const he = "dtjy";
const ye = "Lpj3";
const be = "WIJy";
const Re = "yrww";
const Ce = "GSis";
const Ne = "jOZF";
const ke = "wiBz";
const _e = "qCY9";

const l = {
  page: ne,
  pageTitle: oe,
  list: se,
  item: le,
  btn: ae,
  content: re,
  badge: ie,
  red: ce,
  green: de,
  blue: ue,
  purple: ge,
  avatarLink: fe,
  info: me,
  header: pe,
  actorLink: we,
  name: he,
  action: ye,
  text: be,
  date: Re,
  titleRow: Ce,
  unread: Ne,
  empty: ke,
  loadMore: _e,
};

function ve(e) {
  if (!e) {
    return "";
  }
  const a = new Date(e);
  return isNaN(a.getTime())
    ? ""
    : a.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}

const G = {
  follow: {
    badgeColor: "blue",
    icon: a(a_1, { size: 12 }),
    getAction: (e) =>
      e > 1
        ? `и ещё ${e - 1} человек подписались на вас`
        : "подписался(-ась) на вас",
  },
  follow_request: {
    badgeColor: "blue",
    icon: a(a_1, { size: 12 }),
    getAction: () => "хочет подписаться на вас",
  },
  follow_accepted: {
    badgeColor: "green",
    icon: a(A_2, { size: 12 }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: a(Z_1, { size: 12, filled: true }),
    getAction: (e) =>
      e > 1 ? `и ещё ${e - 1} человек оценили ваш пост` : "оценил(а) ваш пост",
  },
  post_comment: {
    badgeColor: "green",
    icon: a(Y_1, { size: 12, filled: true }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: a(a0, { size: 12 }),
    getAction: (e) =>
      e > 1
        ? `и ещё ${e - 1} человек сделали репост`
        : "сделал(а) репост вашего поста",
  },
  comment_reaction: {
    badgeColor: "red",
    icon: a(Z_1, { size: 12, filled: true }),
    getAction: (e) =>
      e > 1
        ? `и ещё ${e - 1} человек оценили ваш комментарий`
        : "оценил(а) ваш комментарий",
  },
  comment_reply: {
    badgeColor: "green",
    icon: a(Y_1, { size: 12, filled: true }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: a(A_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: a(A_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: a(X_1, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const Ae = ({ type }) => {
  const G_e = G[e];

  const p =
    G_e?.badgeColor === "red"
      ? l.red
      : G_e?.badgeColor === "green"
      ? l.green
      : G_e?.badgeColor === "purple"
      ? l.purple
      : l.blue;

  return G_e("div", {
    className: `${l.badge} ${p}`,
    children: G_e?.icon || G_e(Y_1, { size: 12 }),
  });
};

function Fe({
  notification,
  isVisuallyUnread,
  onMarkRead,
  onVisible,
  followStatus,
  onFollowToggle,
  isFollowLoading,
}) {
  const q = G[notification.type];
  const s = notification.payload.actors[0];
  const B = notification.payload.count;
  const S = A(null);
  y(() => {
    if (notification.isRead) {
      return;
    }
    const S_current = S.current;
    if (!S_current) {
      return;
    }
    const d = new IntersectionObserver(
      (y) => {
        if (y[0].isIntersecting) {
          onVisible(notification.id);
          d.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    d.observe(S_current);

    return () => d.disconnect();
  }, [notification.id, notification.isRead, onVisible]);

  const _ = () => {
    onMarkRead(notification.id);
    const { type, entityId, parentEntityId, payload } = notification;
    let z_clickUrl = payload.clickUrl;

    const x = [
      "post_reaction",
      "post_comment",
      "post_repost",
      "post_mention",
      "wall_post",
    ];

    const L = ["comment_reaction", "comment_reply", "comment_mention"];

    if (entityId && s?.username) {
      if (x.includes(type)) {
        if (type === "post_comment" && parentEntityId) {
          z_clickUrl = `/@${s.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          z_clickUrl = `/@${s.username}/post/${entityId}`;
        }
      } else if (L.includes(type)) {
        if (parentEntityId) {
          z_clickUrl = `/@${s.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          z_clickUrl = `/@${s.username}/post/${entityId}`;
        }
      }
    }

    if (
      !z_clickUrl &&
      s?.username &&
      ["follow", "follow_request", "follow_accepted"].includes(type)
    ) {
      z_clickUrl = `/@${s.username}`;
    }

    if (z_clickUrl) {
      f(z_clickUrl);
    }
  };

  const b =
    notification.type === "follow" || notification.type === "follow_request";

  const f = isFollowLoading
    ? "loading"
    : followStatus
    ? followStatus.isFollowing
      ? "following"
      : followStatus.hasOutgoingRequest
      ? "requested"
      : "none"
    : "none";

  const C = () => {
    switch (f) {
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
    f === "following" || f === "requested" ? "secondary" : "primary";

  const v = (i) => {
    i.stopPropagation();

    if (s?.id && !isFollowLoading) {
      onFollowToggle(s.id);
    }
  };

  const A = (i) => {
    i.stopPropagation();
    i.preventDefault();
    onMarkRead(notification.id);

    if (s?.username) {
      f(`/@${s.username}`);
    }
  };

  return isVisuallyUnread("div", {
    ref: S,
    className: `${l.item} ${isVisuallyUnread ? l.unread : ""}`,
    onClick: _,
    role: "button",
    tabIndex: 0,
    children: [
      isVisuallyUnread("div", {
        className: l.content,
        children: [
          isVisuallyUnread("a", {
            href: s?.username ? `/@${s.username}` : "#",
            className: l.avatarLink,
            onClick: A,
            title: "Перейти в профиль",
            children: isVisuallyUnread(g, {
              src: s?.avatar || "",
              alt: s?.displayName || "User",
              size: "md",
              badge: isVisuallyUnread(Ae, { type: notification.type }),
            }),
          }),
          isVisuallyUnread("div", {
            className: l.info,
            children: [
              isVisuallyUnread("div", {
                className: l.header,
                children: [
                  isVisuallyUnread("a", {
                    href: s?.username ? `/@${s.username}` : "#",
                    className: l.actorLink,
                    onClick: A,
                    title: "Перейти в профиль",
                    children: isVisuallyUnread(U_1, {
                      name: s?.displayName || "Пользователь",
                      verified: s?.isVerified ?? s?.verified ?? false,
                      pin: s?.pin,
                      size: "sm",
                      className: l.name,
                    }),
                  }),
                  isVisuallyUnread("span", {
                    className: l.action,
                    children: q?.getAction(B) || "уведомление",
                  }),
                ],
              }),
              notification.payload.entityPreview &&
                isVisuallyUnread("p", {
                  className: l.text,
                  children: notification.payload.entityPreview,
                }),
              isVisuallyUnread("span", {
                className: l.date,
                children: ve(notification.createdAt),
              }),
            ],
          }),
        ],
      }),
      b &&
        s?.id &&
        isVisuallyUnread(B, {
          variant: N(),
          size: "md",
          className: l.btn,
          onClick: v,
          disabled: isFollowLoading,
          children: [f === "none" && isVisuallyUnread(a_1, { size: 18 }), C()],
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
    markAsRead,
    markAsReadSilent,
    markAllAsRead,
  } = a1();

  const s = a2();
  const B = A(null);
  const [S, _] = d(new Set());
  const b = A(new Set());
  const R = A(null);
  const f = A(new Set());
  const [C, N] = d(new Map());
  const [v, A] = d(new Set());
  y(() => {
    const t = new Set();
    for (const o of notifications) {
      if (!o.isRead) {
        t.add(o.id);
      }
    }
    _((o) => {
      const c = new Set(o);
      for (const r of t) {
        c.add(r);
      }
      return c;
    });
  }, [notifications]);
  const i = markAllAsRead(() => {
    const t = Array.from(b.current);

    if (t.length !== 0) {
      b.current.clear();
      markAsReadSilent(t);
    }
  }, [markAsReadSilent]);

  y(
    () => () => {
      if (R.current) {
        clearTimeout(R.current);
      }

      const t = Array.from(b.current);

      if (t.length > 0) {
        b.current.clear();
        markAsReadSilent(t);
      }
    },
    [markAsReadSilent]
  );

  y(() => {
    fetchNotifications(true);
    f.current.clear();
  }, [fetchNotifications]);

  y(() => {
    const t = ["follow", "follow_request"];
    const o = [];
    for (const c of notifications) {
      if (!t.includes(c.type)) {
        continue;
      }
      const r = c.payload.actors[0];

      if (r?.id && !C.has(r.id)) {
        o.push([
          r.id,
          {
            isFollowing: r.isFollowing ?? false,
            isFollowedBy: r.isFollowedBy ?? true,
            hasOutgoingRequest: false,
            hasIncomingRequest: false,
            isBlocking: false,
            isBlockedBy: false,
          },
        ]);
      }
    }

    if (o.length > 0) {
      N((c) => {
        const r = new Map(c);
        for (const [u, g] of o) {
          r.set(u, g);
        }
        return r;
      });
    }
  }, [notifications]);

  a3({
    sentinelRef: B,
    hasMore: !!nextCursor,
    isLoading: status === "loading",
    onLoadMore: fetchNotifications,
  });

  const d = markAllAsRead(
    (t) => {
      if (!f.current.has(t)) {
        f.current.add(t);
        b.current.add(t);
        R.current && clearTimeout(R.current);
        R.current = setTimeout(i, 500);
      }
    },
    [i]
  );

  const y = markAllAsRead(
    (t) => {
      _((o) => {
        const c = new Set(o);
        c.delete(t);
        return c;
      });

      if (!f.current.has(t)) {
        f.current.add(t);
        markAsRead([t]);
      }
    },
    [markAsRead]
  );

  const z = markAllAsRead(() => {
    _(new Set());
    markAllAsRead();
  }, [markAllAsRead]);

  const m = markAllAsRead(
    async (t) => {
      if (!v.has(t)) {
        A((o) => new Set(o).add(t));
        try {
          const o = C.get(t);
          if (o?.isFollowing || o?.hasOutgoingRequest) {
            await C.unfollowUser(t);

            N((r) => {
              const u = new Map(r);
              const g = u.get(t);

              if (g) {
                u.set(t, {
                  ...g,
                  isFollowing: false,
                  hasOutgoingRequest: false,
                });
              }

              return u;
            });
          } else {
            const r = await C.followUser(t);
            N((u) => {
              const g = new Map(u);
              const E = g.get(t);

              if (E) {
                g.set(t, {
                  ...E,
                  isFollowing: r === "following",
                  hasOutgoingRequest: r === "requested",
                });
              } else {
                g.set(t, {
                  isFollowing: r === "following",
                  isFollowedBy: true,
                  hasOutgoingRequest: r === "requested",
                  hasIncomingRequest: false,
                  isBlocking: false,
                  isBlockedBy: false,
                });
              }

              return g;
            });
          }
        } catch (o) {
          if (
            o?.status === 409 ||
            o?.code === "CONFLICT" ||
            o?.message?.includes("Already following")
          ) {
            N((r) => {
              const u = new Map(r);
              const g = u.get(t);

              u.set(t, {
                ...(g ?? {
                  isFollowedBy: true,
                  hasIncomingRequest: false,
                  isBlocking: false,
                  isBlockedBy: false,
                }),
                isFollowing: true,
                hasOutgoingRequest: false,
              });

              return u;
            });
          } else {
            console.error("Failed to toggle follow:", o);
          }
        } finally {
          A((o) => {
            const c = new Set(o);
            c.delete(t);
            return c;
          });
        }
      }
    },
    [C, v]
  );

  const x = status === "loading";
  const L = notifications.length === 0 && !x;
  return notifications("div", {
    className: `${l.page} ym-hide-content`,
    children: [
      notifications("div", {
        className: l.titleRow,
        children: [
          notifications("h1", {
            className: l.pageTitle,
            children: "Уведомления",
          }),
          s > 0 &&
            notifications(B, {
              variant: "ghost",
              size: "sm",
              onClick: z,
              children: "Прочитать все",
            }),
        ],
      }),
      L
        ? notifications("div", {
            className: l.empty,
            children: notifications("p", { children: "Нет уведомлений" }),
          })
        : notifications("div", {
            className: l.list,
            children: [
              notifications.map((t) => {
                const o = t.payload.actors[0]?.id;
                return notifications(
                  Fe,
                  {
                    notification: t,
                    isVisuallyUnread: S.has(t.id),
                    onMarkRead: y,
                    onVisible: d,
                    followStatus: o ? C.get(o) ?? null : null,
                    onFollowToggle: m,
                    isFollowLoading: o ? v.has(o) : false,
                  },
                  t.id
                );
              }),
              nextCursor &&
                notifications("div", {
                  ref: B,
                  className: l.loadMore,
                  children: x && notifications(a4, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
