import {
  a,
  A,
  y,
  f,
  E_1 as U_1,
  B,
  $ as E_1,
  a0 as X_1,
  a_1 as Y_1,
  f as f_1,
  a0,
  $,
  l as l_1,
  a1,
  d,
  q,
  u,
  s,
  y as y_1,
} from "./index-B0np_7Xy.js";

import { a as a_1, I } from "./IconCheck-CnMsoHfq.js";
const ne = "P3Nv664-";
const oe = "TjFPtUjO";
const se = "FVzwkwHP";
const le = "PUa4FZiJ";
const ae = "iVYbwWPU";
const re = "-CGZDum0";
const ie = "nkg1aG1Y";
const ce = "_1s5kl7dI";
const de = "J18V9XAT";
const ue = "v5iKoEiS";
const ge = "_53tkhErT";
const me = "S-80SJVH";
const fe = "gLpongRO";
const pe = "OCBRPy-H";
const we = "AADxYCa-";
const he = "NZMVIrbP";
const ye = "MTN9pCcR";
const Ce = "VXdy3b5K";
const be = "qs9xk1h-";
const Re = "pjFerM1n";
const Ne = "EPxHezfh";
const ke = "gLJwthYt";
const Ae = "_-4T-IMkn";

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
  avatarLink: me,
  info: fe,
  header: pe,
  actorLink: we,
  name: he,
  action: ye,
  text: Ce,
  date: be,
  titleRow: Re,
  unread: Ne,
  empty: ke,
  loadMore: Ae,
};

function Fe(n) {
  if (!n) {
    return "";
  }
  const r = new Date(n);
  return isNaN(r.getTime())
    ? ""
    : r.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}

const J = {
  follow: {
    badgeColor: "blue",
    icon: a(E_1, { size: 12 }),
    getAction: (n) =>
      n > 1
        ? `и ещё ${n - 1} человек подписались на вас`
        : "подписался(-ась) на вас",
  },
  follow_request: {
    badgeColor: "blue",
    icon: a(E_1, { size: 12 }),
    getAction: () => "хочет подписаться на вас",
  },
  follow_accepted: {
    badgeColor: "green",
    icon: a(I, { size: 12 }),
    getAction: () => "принял(а) вашу заявку на подписку",
  },
  post_reaction: {
    badgeColor: "red",
    icon: a(f_1, { size: 12, filled: true }),
    getAction: (n) =>
      n > 1 ? `и ещё ${n - 1} человек оценили ваш пост` : "оценил(а) ваш пост",
  },
  post_comment: {
    badgeColor: "green",
    icon: a(Y_1, { size: 12, filled: true }),
    getAction: () => "прокомментировал(а) ваш пост",
  },
  post_repost: {
    badgeColor: "blue",
    icon: a(a0, { size: 12 }),
    getAction: (n) =>
      n > 1
        ? `и ещё ${n - 1} человек сделали репост`
        : "сделал(а) репост вашего поста",
  },
  comment_reaction: {
    badgeColor: "red",
    icon: a(f_1, { size: 12, filled: true }),
    getAction: (n) =>
      n > 1
        ? `и ещё ${n - 1} человек оценили ваш комментарий`
        : "оценил(а) ваш комментарий",
  },
  comment_reply: {
    badgeColor: "green",
    icon: a(Y_1, { size: 12, filled: true }),
    getAction: () => "ответил(а) на ваш комментарий",
  },
  post_mention: {
    badgeColor: "purple",
    icon: a(a_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в посте",
  },
  comment_mention: {
    badgeColor: "purple",
    icon: a(a_1, { size: 12 }),
    getAction: () => "упомянул(а) вас в комментарии",
  },
  wall_post: {
    badgeColor: "blue",
    icon: a(X_1, { size: 12 }),
    getAction: () => "написал(а) на вашей стене",
  },
};

const ve = ({ type: n }) => {
  const r = J[n];

  const y =
    r?.badgeColor === "red"
      ? l.red
      : r?.badgeColor === "green"
      ? l.green
      : r?.badgeColor === "purple"
      ? l.purple
      : l.blue;

  return a("div", {
    className: `${l.badge} ${y}`,
    children: r?.icon || a(Y_1, { size: 12 }),
  });
};

function _e({
  notification: n,
  isVisuallyUnread: r,
  onMarkRead: y,
  onVisible: k,
  followStatus: p,
  onFollowToggle: B,
  isFollowLoading: w,
}) {
  const $ = J[n.type];
  const s = n.payload.actors[0];
  const I = n.payload.count;
  const q = A(null);
  y(() => {
    if (n.isRead) {
      return;
    }
    const i = q.current;
    if (!i) {
      return;
    }
    const d = new IntersectionObserver(
      (h) => {
        if (h[0].isIntersecting) {
          k(n.id);
          d.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    d.observe(i);

    return () => d.disconnect();
  }, [n.id, n.isRead, k]);

  const A = () => {
    y(n.id);
    const { type: i, entityId: d, parentEntityId: h, payload: z } = n;
    let f = z.clickUrl;

    const x = [
      "post_reaction",
      "post_comment",
      "post_repost",
      "post_mention",
      "wall_post",
    ];

    const M = ["comment_reaction", "comment_reply", "comment_mention"];

    if (d && s?.username) {
      if (x.includes(i)) {
        if (i === "post_comment" && h) {
          f = `/@${s.username}/post/${h}?comment=${d}`;
        } else {
          f = `/@${s.username}/post/${d}`;
        }
      } else if (M.includes(i)) {
        if (h) {
          f = `/@${s.username}/post/${h}?comment=${d}`;
        } else {
          f = `/@${s.username}/post/${d}`;
        }
      }
    }

    if (
      !f &&
      s?.username &&
      ["follow", "follow_request", "follow_accepted"].includes(i)
    ) {
      f = `/@${s.username}`;
    }

    if (f) {
      $(f);
    }
  };

  const C = n.type === "follow" || n.type === "follow_request";

  const m = w
    ? "loading"
    : p
    ? p.isFollowing
      ? "following"
      : p.hasOutgoingRequest
      ? "requested"
      : "none"
    : "none";

  const R = () => {
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
        return p?.isFollowedBy ? "Подписаться в ответ" : "Подписаться";
      }
    }
  };

  const N = () =>
    m === "following" || m === "requested" ? "secondary" : "primary";

  const F = (i) => {
    i.stopPropagation();

    if (s?.id && !w) {
      B(s.id);
    }
  };

  const v = (i) => {
    i.stopPropagation();
    i.preventDefault();
    y(n.id);

    if (s?.username) {
      $(`/@${s.username}`);
    }
  };

  return a("div", {
    ref: q,
    className: `${l.item} ${r ? l.unread : ""}`,
    onClick: A,
    role: "button",
    tabIndex: 0,
    children: [
      a("div", {
        className: l.content,
        children: [
          a("a", {
            href: s?.username ? `/@${s.username}` : "#",
            className: l.avatarLink,
            onClick: v,
            title: "Перейти в профиль",
            children: a(f, {
              src: s?.avatar || "",
              alt: s?.displayName || "User",
              size: "md",
              badge: a(ve, { type: n.type }),
            }),
          }),
          a("div", {
            className: l.info,
            children: [
              a("div", {
                className: l.header,
                children: [
                  a("a", {
                    href: s?.username ? `/@${s.username}` : "#",
                    className: l.actorLink,
                    onClick: v,
                    title: "Перейти в профиль",
                    children: a(U_1, {
                      name: s?.displayName || "Пользователь",
                      verified: s?.isVerified ?? s?.verified ?? false,
                      pin: s?.pin,
                      size: "sm",
                      className: l.name,
                    }),
                  }),
                  a("span", {
                    className: l.action,
                    children: $?.getAction(I) || "уведомление",
                  }),
                ],
              }),
              n.payload.entityPreview &&
                a("p", {
                  className: l.text,
                  children: n.payload.entityPreview,
                }),
              a("span", { className: l.date, children: Fe(n.createdAt) }),
            ],
          }),
        ],
      }),
      C &&
        s?.id &&
        a(B, {
          variant: N(),
          size: "md",
          className: l.btn,
          onClick: F,
          disabled: w,
          children: [m === "none" && a(E_1, { size: 18 }), R()],
        }),
    ],
  });
}

export const Notifications = (n) => {
  const {
    notifications: r,
    status: y,
    nextCursor: k,
    fetchNotifications: p,
    markAsRead: B,
    markAsReadSilent: w,
    markAllAsRead: $,
  } = l_1();

  const s = a1();
  const I = A(null);
  const [q, A] = d(new Set());
  const C = A(new Set());
  const b = A(null);
  const m = A(new Set());
  const [R, N] = d(new Map());
  const [F, v] = d(new Set());
  y(() => {
    const e = new Set();
    for (const o of r) {
      if (!o.isRead) {
        e.add(o.id);
      }
    }
    A((o) => {
      const c = new Set(o);
      for (const a of e) {
        c.add(a);
      }
      return c;
    });
  }, [r]);
  const i = q(() => {
    const e = Array.from(C.current);

    if (e.length !== 0) {
      C.current.clear();
      w(e);
    }
  }, [w]);

  y(
    () => () => {
      if (b.current) {
        clearTimeout(b.current);
      }

      const e = Array.from(C.current);

      if (e.length > 0) {
        C.current.clear();
        w(e);
      }
    },
    [w]
  );

  y(() => {
    p(true);
    m.current.clear();
  }, [p]);

  y(() => {
    const e = ["follow", "follow_request"];
    const o = [];
    for (const c of r) {
      if (!e.includes(c.type)) {
        continue;
      }
      const a = c.payload.actors[0];

      if (a?.id && !R.has(a.id)) {
        if (!R.has(a.id)) {
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
    }

    if (o.length > 0) {
      N((c) => {
        const a = new Map(c);
        for (const [u, g] of o) {
          a.set(u, g);
        }
        return a;
      });
    }
  }, [r]);

  u({
    sentinelRef: I,
    hasMore: !!k,
    isLoading: y === "loading",
    onLoadMore: p,
  });

  const d = q(
    (e) => {
      if (!m.current.has(e)) {
        m.current.add(e);
        C.current.add(e);
        b.current && clearTimeout(b.current);
        b.current = setTimeout(i, 500);
      }
    },
    [i]
  );

  const h = q(
    (e) => {
      A((o) => {
        const c = new Set(o);
        c.delete(e);
        return c;
      });

      if (!m.current.has(e)) {
        m.current.add(e);
        B([e]);
      }
    },
    [B]
  );

  const z = q(() => {
    A(new Set());
    $();
  }, [$]);

  const f = q(
    async (e) => {
      if (!F.has(e)) {
        v((o) => new Set(o).add(e));
        try {
          const o = R.get(e);
          if (o?.isFollowing || o?.hasOutgoingRequest) {
            await s.unfollowUser(e);

            N((a) => {
              const u = new Map(a);
              const g = u.get(e);

              if (g) {
                u.set(e, {
                  ...g,
                  isFollowing: false,
                  hasOutgoingRequest: false,
                });
              }

              return u;
            });
          } else {
            const a = await s.followUser(e);
            N((u) => {
              const g = new Map(u);
              const P = g.get(e);

              if (P) {
                g.set(e, {
                  ...P,
                  isFollowing: a === "following",
                  hasOutgoingRequest: a === "requested",
                });
              } else {
                g.set(e, {
                  isFollowing: a === "following",
                  isFollowedBy: true,
                  hasOutgoingRequest: a === "requested",
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
            o?.code === "CONFLICT" ||
            o?.message?.includes("Already following")
          ) {
            N((a) => {
              const u = new Map(a);
              const g = u.get(e);

              u.set(e, {
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
          v((o) => {
            const c = new Set(o);
            c.delete(e);
            return c;
          });
        }
      }
    },
    [R, F]
  );

  const x = y === "loading";
  const M = r.length === 0 && !x;
  return a("div", {
    className: l.page,
    children: [
      a("div", {
        className: l.titleRow,
        children: [
          a("h1", { className: l.pageTitle, children: "Уведомления" }),
          s > 0 &&
            a(B, {
              variant: "ghost",
              size: "sm",
              onClick: z,
              children: "Прочитать все",
            }),
        ],
      }),
      M
        ? a("div", {
            className: l.empty,
            children: a("p", { children: "Нет уведомлений" }),
          })
        : a("div", {
            className: l.list,
            children: [
              r.map((e) => {
                const o = e.payload.actors[0]?.id;
                return a(
                  _e,
                  {
                    notification: e,
                    isVisuallyUnread: q.has(e.id),
                    onMarkRead: h,
                    onVisible: d,
                    followStatus: o ? R.get(o) ?? null : null,
                    onFollowToggle: f,
                    isFollowLoading: o ? F.has(o) : false,
                  },
                  e.id
                );
              }),
              k &&
                a("div", {
                  ref: I,
                  className: l.loadMore,
                  children: x && a(y_1, { size: "sm" }),
                }),
            ],
          }),
    ],
  });
};

export { Notifications as Notifications };
