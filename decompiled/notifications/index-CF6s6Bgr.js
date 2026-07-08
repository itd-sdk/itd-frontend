import {
  a,
  A,
  y,
  g,
  a_1 as U_1,
  B,
  a as a_1,
  B as B_1,
  Y as Y_1,
  g as g_1,
  a0,
  f,
  a1,
  a2,
  d,
  q,
  a3,
  C,
  a4,
} from "./index-BewGW5_v.js";

import { A as A_1 } from "./IconNotificationMention-CROhlU2l.js";
import { A as A_2 } from "./IconCheck-DBT_Qf2j.js";
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
    const a = new e.Error().stack;

    if (a) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[a] = "7cbd9996-7c1f-4af6-9a5d-43ec92ab473d";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-7cbd9996-7c1f-4af6-9a5d-43ec92ab473d";
    }
  } catch {}
})();
const ne = "LEgT";
const oe = "i6FP";
const se = "cQTB";
const le = "akP9";
const ae = "mufL";
const re = "lg6h";
const ie = "Pt6p";
const ce = "HcFe";
const de = "oUw7";
const ue = "VKiX";
const ge = "MVN2";
const fe = "ZU3g";
const me = "ay8C";
const pe = "UtCO";
const we = "LNfi";
const he = "jfky";
const ye = "zLM3";
const be = "h70e";
const Ce = "TJOe";
const Re = "kCdi";
const Ne = "fNaE";
const ke = "ItKg";
const _e = "d0M8";

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
  date: Ce,
  titleRow: Re,
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

const Y = {
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
    icon: a(g_1, { size: 12, filled: true }),
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
    icon: a(g_1, { size: 12, filled: true }),
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
    icon: a(B_1, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const Ae = ({ type }) => {
  const Y_e = Y[e];

  const p =
    Y_e?.badgeColor === "red"
      ? l.red
      : Y_e?.badgeColor === "green"
      ? l.green
      : Y_e?.badgeColor === "purple"
      ? l.purple
      : l.blue;

  return Y_e("div", {
    className: `${l.badge} ${p}`,
    children: Y_e?.icon || Y_e(Y_1, { size: 12 }),
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
  const B = Y[notification.type];
  const s = notification.payload.actors[0];
  const S = notification.payload.count;
  const q = A(null);
  y(() => {
    if (notification.isRead) {
      return;
    }
    const q_current = q.current;
    if (!q_current) {
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
    d.observe(q_current);

    return () => d.disconnect();
  }, [notification.id, notification.isRead, onVisible]);

  const _ = () => {
    onMarkRead(notification.id);
    const { type, entityId, parentEntityId, payload } = notification;
    let x_clickUrl = payload.clickUrl;

    const z = [
      "post_reaction",
      "post_comment",
      "post_repost",
      "post_mention",
      "wall_post",
    ];

    const L = ["comment_reaction", "comment_reply", "comment_mention"];

    if (entityId && s?.username) {
      if (z.includes(type)) {
        if (type === "post_comment" && parentEntityId) {
          x_clickUrl = `/@${s.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          x_clickUrl = `/@${s.username}/post/${entityId}`;
        }
      } else if (L.includes(type)) {
        if (parentEntityId) {
          x_clickUrl = `/@${s.username}/post/${parentEntityId}?comment=${entityId}`;
        } else {
          x_clickUrl = `/@${s.username}/post/${entityId}`;
        }
      }
    }

    if (
      !x_clickUrl &&
      s?.username &&
      ["follow", "follow_request", "follow_accepted"].includes(type)
    ) {
      x_clickUrl = `/@${s.username}`;
    }

    if (x_clickUrl) {
      f(x_clickUrl);
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

  const R = () => {
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
    ref: q,
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
                    children: B?.getAction(S) || "уведомление",
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
          children: [f === "none" && isVisuallyUnread(a_1, { size: 18 }), R()],
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
  const S = A(null);
  const [q, _] = d(new Set());
  const b = A(new Set());
  const C = A(null);
  const f = A(new Set());
  const [R, N] = d(new Map());
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
  const i = q(() => {
    const t = Array.from(b.current);

    if (t.length !== 0) {
      b.current.clear();
      markAsReadSilent(t);
    }
  }, [markAsReadSilent]);

  y(
    () => () => {
      if (C.current) {
        clearTimeout(C.current);
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

      if (r?.id && !R.has(r.id)) {
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
    sentinelRef: S,
    hasMore: !!nextCursor,
    isLoading: status === "loading",
    onLoadMore: fetchNotifications,
  });

  const d = q(
    (t) => {
      if (!f.current.has(t)) {
        f.current.add(t);
        b.current.add(t);
        C.current && clearTimeout(C.current);
        C.current = setTimeout(i, 500);
      }
    },
    [i]
  );

  const y = q(
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

  const x = q(() => {
    _(new Set());
    markAllAsRead();
  }, [markAllAsRead]);

  const m = q(
    async (t) => {
      if (!v.has(t)) {
        A((o) => new Set(o).add(t));
        try {
          const o = R.get(t);
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
    [R, v]
  );

  const z = status === "loading";
  const L = notifications.length === 0 && !z;
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
            notifications(markAllAsRead, {
              variant: "ghost",
              size: "sm",
              onClick: x,
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
                    isVisuallyUnread: q.has(t.id),
                    onMarkRead: y,
                    onVisible: d,
                    followStatus: o ? R.get(o) ?? null : null,
                    onFollowToggle: m,
                    isFollowLoading: o ? v.has(o) : false,
                  },
                  t.id
                );
              }),
              nextCursor &&
                notifications("div", {
                  ref: S,
                  className: l.loadMore,
                  children: z && notifications(a4, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
