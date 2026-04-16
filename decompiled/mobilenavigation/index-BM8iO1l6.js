import {
  x,
  af_1 as L_1,
  l,
  af,
  ag,
  y,
  l as l_1,
  y as y_1,
  A,
  C,
  e,
  L_1 as L_1_1,
  a1,
  af as af_1,
  ai,
  a as a_1,
  y_1 as y_1_1,
  aj,
  E,
} from "./index-B0np_7Xy.js";

import { I, l as l_2 } from "./index-B4RuP_wh.js";
import { I as I_1, a as a_2 } from "./IconPerson-nMf-t5_m.js";
import { I as I_2 } from "./IconSearch-DmEa3nwv.js";
import { C as C_1 } from "./index-DQOcM_ic.js";
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

const a = {
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
  const i = x();
  const N = L_1();
  const { initialize: P, disconnectSSE: A } = l();
  const l = af();

  const S = ag((e) => e.fetchPortal);

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

  const h = l_1(
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
      { id: "profile", label: "Профиль", icon: a_2, href: $ },
    ],
    [$]
  );

  const [y, z] = y_1({});
  const [E, w] = y_1(true);
  const u = A([]);
  const f = A(null);
  const [c] = C();
  const { openModal: H } = e();

  const C = L_1_1((e) => e.fetchFeed);

  const O = L_1_1((e) => e.isRefreshing);

  const m = a1();

  const B = af_1(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    C(true);
  }, [C]);

  const x = l_1(() => {
    const e = c.url || "/";
    return ai.some((n) => e.startsWith(n));
  }, [c.url]);

  const _ = l_1(() => {
    const e = c.url || "/";
    return i?.username
      ? e === `/@${i.username}` || e.startsWith(`/@${i.username}/`)
      : false;
  }, [c.url, i?.username]);

  const g = A(null);

  const v = af_1((e, n = false) => {
    if (!n && g.current === e) {
      return;
    }
    g.current = e;
    const r = u.current[e];
    const o = f.current;
    if (r && o) {
      const s = parseFloat(getComputedStyle(o).paddingLeft) || 0;

      z({
        width: r.offsetWidth,
        transform: `translateX(${r.offsetLeft - s}px)`,
      });

      w(true);
    }
  }, []);

  y(() => {
    const e = c.url || "/";

    if (!h.some((r) => r.href === e)) {
      w(false);
    }
  }, [c.url, h]);

  y(() => {
    const e = f.current;
    if (!e) {
      return;
    }
    const n = e.querySelector(`.${a.active}`);
    if (n) {
      const r = u.current.indexOf(n);

      if (r !== -1) {
        g.current = null;
        v(r);
      }
    }
  }, []);

  y(() => {
    const e = f.current;
    if (!e) {
      return;
    }

    const n = () => {
      const o = e.querySelector(`.${a.active}`);
      if (o) {
        const s = u.current.indexOf(o);

        if (s !== -1) {
          v(s, true);
        }
      }
    };

    const r = new ResizeObserver(n);
    r.observe(e);
    window.addEventListener("resize", n);

    return () => {
      r.disconnect();
      window.removeEventListener("resize", n);
    };
  }, [v]);

  const F = () => {
    H(a_1(C_1, {}));
  };
  return (
    x ||
    a_1("div", {
      className: a.mobileNavigationWrapper,
      children: [
        a_1("nav", {
          ref: f,
          className: a.navigation,
          children: [
            a_1("div", {
              className: `${a.indicator} ${E ? "" : a.indicatorHidden}`,
              style: y,
            }),
            h.map((e, n) => {
              const r = e.icon;
              const o = e.id === "event";
              const s = o && l.active && !!l.url;
              return a_1(
                l_2,
                {
                  path: e.href,
                  children: ({ matches: M }) => {
                    const I = M || (e.id === "profile" && _);
                    return a_1("a", {
                      href: s ? l.url : e.href,
                      target: s ? "_blank" : undefined,
                      rel: s ? "noopener noreferrer" : undefined,
                      ref: (p) => {
                        u.current[n] = p;

                        if (p && I) {
                          v(n);
                        }
                      },
                      className: `${a.navItem} ${I ? a.active : ""}`,
                      onClick: (p) => {
                        if (I && e.id === "feed") {
                          p.preventDefault();
                          B();
                        }
                      },
                      children: [
                        a_1("span", {
                          className: a.iconWrapper,
                          children: o
                            ? a_1("img", {
                                src: l.active
                                  ? "/assets/portal/portal-active.gif"
                                  : "/assets/portal/portal-inactive.png",
                                alt: "Ивент",
                                className: `${a.portalImage} ${
                                  l.active ? a.portalImageActive : ""
                                }`,
                              })
                            : a_1(y_1_1, {
                                children: [
                                  e.id === "feed" && O
                                    ? a_1(aj, {})
                                    : a_1(r, {}),
                                  e.id === "notifications" &&
                                    m > 0 &&
                                    a_1("span", {
                                      className: a.badge,
                                      children: m > 99 ? "99+" : m,
                                    }),
                                ],
                              }),
                        }),
                        a_1("span", {
                          className: a.label,
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
        a_1("button", {
          className: a.createButton,
          onClick: F,
          "aria-label": "Создать пост",
          children: a_1(E, {}),
        }),
      ],
    })
  );
};

export { MobileNavigation as MobileNavigation };
