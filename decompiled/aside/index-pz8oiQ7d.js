import {
  ab,
  ac,
  d,
  c_1 as y_1,
  a9,
  a,
  M,
  C,
  ai as K_1,
  c as c_1,
  ab as ab_1,
  M as M_1,
  a1,
  l,
  af,
  ag,
  ag as ag_1,
  T,
  ai,
  aj,
  ab_1 as ab_1_1,
} from "./index-B0np_7Xy.js";

import { I, l as l_1 } from "./index-B4RuP_wh.js";
import { I as I_1 } from "./IconBrand-_ck_iX4k.js";
import { I as I_2 } from "./IconLogout-D34Yxsdj.js";
import { I as I_3, a as a_1 } from "./IconPerson-nMf-t5_m.js";
import { I as I_4 } from "./IconSearch-DmEa3nwv.js";

const ee = {
  async getChangelog() {
    const a = await ab.get(ac.platform.changelog);
    return a.data ?? a;
  },
};

const ne = "fI4fDVi7";
const ae = "yZbr8ne7";
const te = "GstMeOlK";
const se = "AuAu4fWH";
const oe = "GpuNQx-t";
const ce = "JGhUMn6Z";
const ie = "GNnsM0Nx";
const re = "VPqB7n6W";
const le = "TAGBLFdY";
const de = "hUJldwZ5";
const he = "AnK9iBJg";
const ue = "ssMbXx3H";
const ge = "qlwe9qHu";

const t = {
  aside: ne,
  asideBottom: ae,
  logoutButton: te,
  asideBrand: se,
  asideBrandVersion: oe,
  nav: ce,
  navItem: ie,
  active: re,
  iconWrapper: le,
  portalButton: de,
  portalActive: he,
  portalImage: ue,
  badge: ge,
};

const pe = "F08xfkNd";
const me = "mR5nZMrC";
const fe = "praVEbzI";
const ve = "_2PS-TdzI";
const Ne = "nZKaMPc1";
const Ie = "ZhiSVGeC";
const Ce = "_8hJOPcUE";
const Ae = "TogmW1T7";
const Be = "QycPp2K9";
const Pe = "WuyqjVDp";
const Se = "CGUxhuAA";

const c = {
  changelog: pe,
  entry: me,
  entryHeader: fe,
  version: ve,
  date: Ne,
  changes: Ie,
  change: Ce,
  singleChange: Ae,
  note: Be,
  loading: Pe,
  divider: Se,
};

function be({ isOpen: a, onClose: h }) {
  const [u, i] = d([]);
  const [d, o] = d(true);

  y_1(() => {
    if (!a) {
      return;
    }
    let n = false;

    ee.getChangelog()
      .then((r) => {
        if (!n) {
          i(r);
          o(false);
        }
      })
      .catch(() => {
        if (!n) {
          o(false);
        }
      });

    return () => {
      n = true;
    };
  }, [a]);

  return a
    ? a9(
        a(M, {
          onClose: h,
          title: "Что нового",
          size: "default",
          children: a("div", {
            className: c.changelog,
            children: d
              ? a("div", { className: c.loading, children: "Загрузка..." })
              : u.map((n, r) =>
                  a(
                    "div",
                    {
                      className: c.entry,
                      children: [
                        a("div", {
                          className: c.entryHeader,
                          children: [
                            a("span", {
                              className: c.version,
                              children: ["v", n.version],
                            }),
                            a("span", {
                              className: c.date,
                              children: n.date,
                            }),
                          ],
                        }),
                        n.changes.length === 1 && !n.changes[0].startsWith("•")
                          ? a("p", {
                              className: c.singleChange,
                              children: n.changes[0],
                            })
                          : a("ul", {
                              className: c.changes,
                              children: n.changes.map((g, m) =>
                                a("li", { className: c.change, children: g }, m)
                              ),
                            }),
                        n.note &&
                          a("p", { className: c.note, children: n.note }),
                        r < u.length - 1 && a("div", { className: c.divider }),
                      ],
                    },
                    n.version
                  )
                ),
          }),
        }),
        document.body
      )
    : null;
}

const b = ({
  href: a,
  icon: h,
  children: u,
  badge: i,
  onActiveClick: d,
  isActive: o = false,
}) =>
  a(l_1, {
    path: a,
    children: ({ matches: n }) => {
      const r = n || o;
      return a("a", {
        href: a,
        className: `${t.navItem} ${r ? t.active : ""}`,
        onClick: (g) => {
          if (r && d) {
            g.preventDefault();
            d();
          }
        },
        children: [
          a("span", {
            className: t.iconWrapper,
            children: [
              h,
              i !== undefined &&
                i > 0 &&
                a("span", {
                  className: t.badge,
                  children: i > 99 ? "99+" : i,
                }),
            ],
          }),
          a("span", { children: u }),
        ],
      });
    },
  });

const f = (a) => a(b, { ...a });

export const Aside = () => {
  const [a] = C();

  const h = K_1((s) => s.fetchFeed);

  const u = K_1((s) => s.isRefreshing);

  const i = c_1((s) => s.logout);

  const d = ab_1();
  const o = M_1();
  const n = a1();
  const { initialize: r, disconnectSSE: g } = l();
  const [m, N] = d(false);
  const [w, I] = d(false);
  const l = af();

  const C = ag((s) => s.fetchPortal);

  const M = o?.username ? `/@${o.username}` : "/profile";

  y_1(() => {
    if (d) {
      r();
    }

    return () => {
      g();
    };
  }, [d, r, g]);

  y_1(() => {
    C();
  }, [C]);

  const T = ag_1(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    h(true);
  }, [h]);

  const W = ag_1(() => {
    i();
  }, [i]);

  const $ = T(() => {
    const s = a.url || "/";
    return ai.some((H) => s.startsWith(H));
  }, [a.url]);

  const k = T(() => {
    const s = a.url || "/";
    return o?.username
      ? s === `/@${o.username}` || s.startsWith(`/@${o.username}/`)
      : false;
  }, [a.url, o?.username]);

  return (
    $ ||
    a("aside", {
      className: t.aside,
      children: [
        a("div", {
          className: t.asideTop,
          children: [
            a("div", {
              className: t.asideBrand,
              children: [
                a(I_1, {}),
                a("button", {
                  className: t.asideBrandVersion,
                  onClick: () => N(true),
                  title: "Что нового",
                  children: "v1.1",
                }),
              ],
            }),
            a("nav", {
              className: t.nav,
              children: [
                a(f, {
                  href: "/",
                  icon: u ? a(aj, {}) : a(I, {}),
                  onActiveClick: T,
                  children: "Лента",
                }),
                a(f, {
                  href: "/search",
                  icon: a(I_4, {}),
                  children: "Поиск",
                }),
                a(l_1, {
                  path: "/event",
                  children: ({ matches: s }) =>
                    a("a", {
                      href: l.active && l.url ? l.url : "/event",
                      target: l.active && l.url ? "_blank" : undefined,
                      rel:
                        l.active && l.url ? "noopener noreferrer" : undefined,
                      className: `${t.portalButton} ${
                        l.active ? t.portalActive : ""
                      } ${s ? t.active : ""}`,
                      title: "Ивент",
                      children: [
                        a("img", {
                          src: l.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: t.portalImage,
                        }),
                        a("span", { children: "Ивент" }),
                      ],
                    }),
                }),
                a(f, {
                  href: "/notifications",
                  icon: a(I_3, {}),
                  badge: n,
                  children: "Уведомления",
                }),
                a(b, {
                  href: M,
                  icon: a(a_1, {}),
                  isActive: k,
                  children: "Профиль",
                }),
              ],
            }),
          ],
        }),
        a("div", {
          className: t.asideBottom,
          children: [
            !o?.subscription?.isActive &&
              a("button", {
                className: t.logoutButton,
                onClick: () => I(true),
                children: [
                  a("span", { children: "⭐" }),
                  a("span", { children: "ИТД НУКСТА" }),
                ],
              }),
            a("button", {
              className: t.logoutButton,
              onClick: W,
              children: [
                a(I_2, { size: 20 }),
                a("span", { children: "Выйти" }),
              ],
            }),
          ],
        }),
        a(be, { isOpen: m, onClose: () => N(false) }),
        a(ab_1_1, { isOpen: w, onClose: () => I(false) }),
      ],
    })
  );
};

export { Aside as Aside };
