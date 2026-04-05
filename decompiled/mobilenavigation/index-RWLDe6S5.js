import {
  v,
  ab as J_1,
  h,
  aa,
  ab,
  y,
  J_1 as J_1_1,
  y as y_1,
  A,
  C,
  c,
  h_1 as H_1,
  Q,
  h as h_1,
  ad,
  u,
  y_1 as y_1_1,
  C_1 as ae_1,
  x,
} from "./index-3JkKRUnj.js";

import { I, l } from "./index-CtZaEv3W.js";
import { I as I_1, a } from "./IconPerson-CyyWLm1K.js";
import { I as I_2 } from "./IconSearch-DUvoIXCY.js";
import { C as C_1 } from "./index-CwT4EOQM.js";
const oe = "s6RgBrB6";
const se = "JOIWgkha";
const ie = "_3zENkokD";
const ce = "_6Pioebei";
const le = "Vxc0MjRf";
const de = "iQtUV16G";
const ue = "ZtAKIgsJ";
const fe = "_1tR-HPhB";
const ve = "Yi-2DSIb";
const pe = "pBba2HCe";
const he = "ozGvh6zv";
const me = "_4pOcvhRL";

const r = {
  mobileNavigationWrapper: oe,
  navigation: se,
  indicator: ie,
  indicatorHidden: ce,
  navItem: le,
  label: de,
  active: ue,
  createButton: fe,
  iconWrapper: ve,
  portalImage: pe,
  portalImageActive: he,
  badge: me,
};

export const MobileNavigation = () => {
  const i = v();
  const N = J_1();
  const { initialize: P, disconnectSSE: A } = h();
  const l = aa();

  const S = ab((e) => e.fetchPortal);

  y(() => {
    if (N) {
      P();
    }

    return () => {
      A();
    };
  }, [N, P, A]);

  y(() => {
    S();
  }, [S]);

  const $ = i?.username ? `/@${i.username}` : "/profile";

  const h = J_1_1(
    () => [
      { id: "feed", label: "Лента", icon: I, href: "/" },
      { id: "search", label: "Поиск", icon: I_2, href: "/search" },
      { id: "event", label: "Ивент", icon: null, href: "/event" },
      {
        id: "notifications",
        label: "Уведы",
        icon: I_1,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: a, href: $ },
    ],
    [$]
  );

  const [y, z] = y_1({});
  const [L, w] = y_1(true);
  const u = A([]);
  const f = A(null);
  const [c] = C();
  const { openModal: O } = c();

  const C = H_1((e) => e.fetchFeed);

  const B = H_1((e) => e.isRefreshing);

  const m = Q();

  const E = h_1(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    C(true);
  }, [C]);

  const x = J_1_1(() => {
    const e = c.url || "/";
    return ad.some((n) => e.startsWith(n));
  }, [c.url]);

  const _ = J_1_1(() => {
    const e = c.url || "/";
    return i?.username
      ? e === `/@${i.username}` || e.startsWith(`/@${i.username}/`)
      : false;
  }, [c.url, i?.username]);

  const g = A(null);

  const v = h_1((e, n = false) => {
    if (!n && g.current === e) {
      return;
    }
    g.current = e;
    const a = u.current[e];
    const o = f.current;
    if (a && o) {
      const s = parseFloat(getComputedStyle(o).paddingLeft) || 0;

      z({
        width: a.offsetWidth,
        transform: `translateX(${a.offsetLeft - s}px)`,
      });

      w(true);
    }
  }, []);

  y(() => {
    const e = c.url || "/";

    if (!h.some((a) => a.href === e)) {
      w(false);
    }
  }, [c.url, h]);

  y(() => {
    const e = f.current;
    if (!e) {
      return;
    }
    const n = e.querySelector(`.${r.active}`);
    if (n) {
      const a = u.current.indexOf(n);

      if (a !== -1) {
        g.current = null;
        v(a);
      }
    }
  }, []);

  y(() => {
    const e = f.current;
    if (!e) {
      return;
    }

    const n = () => {
      const o = e.querySelector(`.${r.active}`);
      if (o) {
        const s = u.current.indexOf(o);

        if (s !== -1) {
          v(s, true);
        }
      }
    };

    const a = new ResizeObserver(n);
    a.observe(e);
    window.addEventListener("resize", n);

    return () => {
      a.disconnect();
      window.removeEventListener("resize", n);
    };
  }, [v]);

  const F = () => {
    O(u(C_1, {}));
  };
  return (
    x ||
    u("div", {
      className: r.mobileNavigationWrapper,
      children: [
        u("nav", {
          ref: f,
          className: r.navigation,
          children: [
            u("div", {
              className: `${r.indicator} ${L ? "" : r.indicatorHidden}`,
              style: y,
            }),
            h.map((e, n) => {
              const a = e.icon;
              const o = e.id === "event";
              const s = o && l.active && !!l.url;
              return u(
                l,
                {
                  path: e.href,
                  children: ({ matches: M }) => {
                    const I = M || (e.id === "profile" && _);
                    return u("a", {
                      href: s ? l.url : e.href,
                      target: s ? "_blank" : undefined,
                      rel: s ? "noopener noreferrer" : undefined,
                      ref: (p) => {
                        u.current[n] = p;

                        if (p && I) {
                          v(n);
                        }
                      },
                      className: `${r.navItem} ${I ? r.active : ""}`,
                      onClick: (p) => {
                        if (I && e.id === "feed") {
                          p.preventDefault();
                          E();
                        }
                      },
                      children: [
                        u("span", {
                          className: r.iconWrapper,
                          children: o
                            ? u("img", {
                                src: l.active
                                  ? "/assets/portal/portal-active.gif"
                                  : "/assets/portal/portal-inactive.png",
                                alt: "Ивент",
                                className: `${r.portalImage} ${
                                  l.active ? r.portalImageActive : ""
                                }`,
                              })
                            : u(y_1_1, {
                                children: [
                                  e.id === "feed" && B ? u(ae_1, {}) : u(a, {}),
                                  e.id === "notifications" &&
                                    m > 0 &&
                                    u("span", {
                                      className: r.badge,
                                      children: m > 99 ? "99+" : m,
                                    }),
                                ],
                              }),
                        }),
                        u("span", {
                          className: r.label,
                          children: e.label,
                        }),
                      ],
                    });
                  },
                },
                e.id
              );
            }),
          ],
        }),
        u("button", {
          className: r.createButton,
          onClick: F,
          "aria-label": "Создать пост",
          children: u(x, {}),
        }),
      ],
    })
  );
};

export { MobileNavigation as MobileNavigation };
