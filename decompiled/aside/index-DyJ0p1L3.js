import {
  a9,
  aa,
  d,
  M as y_1,
  a7,
  u,
  M,
  W_1 as C_1,
  b_1 as J_1,
  l as b_1,
  I_3 as K_1,
  w,
  W,
  I as j_1,
  ad,
  ae as ae_1,
  W as W_1,
  T,
  ag,
  ah,
  j_1 as j_1_1,
} from "./index-BzlbFDoq.js";

import { I, l } from "./index-CALmqHQl.js";
import { I as I_1 } from "./IconBrand-sX16mLR6.js";
import { I as I_2 } from "./IconLogout-CTjbMwD3.js";
import { I as I_3, a } from "./IconPerson-D-cKVRay.js";
import { I as I_4 } from "./IconSearch-LYepZZlI.js";

const ee = {
  async getChangelog() {
    const t = await a9.get(aa.platform.changelog);
    return t.data ?? t;
  },
};

const ne = "fI4fDVi7";
const te = "yZbr8ne7";
const se = "GstMeOlK";
const ae = "AuAu4fWH";
const oe = "GpuNQx-t";
const ie = "JGhUMn6Z";
const ce = "GNnsM0Nx";
const re = "VPqB7n6W";
const le = "TAGBLFdY";
const de = "hUJldwZ5";
const he = "AnK9iBJg";
const ue = "ssMbXx3H";
const ge = "qlwe9qHu";

const s = {
  aside: ne,
  asideBottom: te,
  logoutButton: se,
  asideBrand: ae,
  asideBrandVersion: oe,
  nav: ie,
  navItem: ce,
  active: re,
  iconWrapper: le,
  portalButton: de,
  portalActive: he,
  portalImage: ue,
  badge: ge,
};

const pe = "V50n6WS3";
const me = "op1vWsdX";
const ve = "_6WE1-ZQb";
const fe = "wQFhiSkQ";
const Ne = "Lsbi80je";
const Ie = "bMJRT07h";
const Be = "d6UOyTyY";
const Ae = "eSQfgRTM";
const Ce = "q1AtksiZ";
const Se = "jHe-Wv1B";
const be = "vQ8h8naJ";

const i = {
  changelog: pe,
  entry: me,
  entryHeader: ve,
  version: fe,
  date: Ne,
  changes: Ie,
  change: Be,
  singleChange: Ae,
  note: Ce,
  loading: Se,
  divider: be,
};

function Pe({ isOpen: t, onClose: h }) {
  const [u, c] = d([]);
  const [d, o] = d(true);

  y_1(() => {
    if (!t) {
      return;
    }
    let n = false;

    ee.getChangelog()
      .then((r) => {
        if (!n) {
          c(r);
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
  }, [t]);

  return t
    ? a7(
        u(M, {
          onClose: h,
          title: "Что нового",
          size: "default",
          children: u("div", {
            className: i.changelog,
            children: d
              ? u("div", { className: i.loading, children: "Загрузка..." })
              : u.map((n, r) =>
                  u(
                    "div",
                    {
                      className: i.entry,
                      children: [
                        u("div", {
                          className: i.entryHeader,
                          children: [
                            u("span", {
                              className: i.version,
                              children: ["v", n.version],
                            }),
                            u("span", {
                              className: i.date,
                              children: n.date,
                            }),
                          ],
                        }),
                        n.changes.length === 1 && !n.changes[0].startsWith("•")
                          ? u("p", {
                              className: i.singleChange,
                              children: n.changes[0],
                            })
                          : u("ul", {
                              className: i.changes,
                              children: n.changes.map((g, m) =>
                                u("li", { className: i.change, children: g }, m)
                              ),
                            }),
                        n.note &&
                          u("p", { className: i.note, children: n.note }),
                        r < u.length - 1 && u("div", { className: i.divider }),
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

const P = ({
  href: t,
  icon: h,
  children: u,
  badge: c,
  onActiveClick: d,
  isActive: o = false,
}) =>
  u(l, {
    path: t,
    children: ({ matches: n }) => {
      const r = n || o;
      return u("a", {
        href: t,
        className: `${s.navItem} ${r ? s.active : ""}`,
        onClick: (g) => {
          if (r && d) {
            g.preventDefault();
            d();
          }
        },
        children: [
          u("span", {
            className: s.iconWrapper,
            children: [
              h,
              c !== undefined &&
                c > 0 &&
                u("span", {
                  className: s.badge,
                  children: c > 99 ? "99+" : c,
                }),
            ],
          }),
          u("span", { children: u }),
        ],
      });
    },
  });

const v = (t) => u(P, { ...t });

export const Aside = () => {
  const [t] = C_1();

  const h = J_1((a) => a.fetchFeed);

  const u = J_1((a) => a.isRefreshing);

  const c = b_1((a) => a.logout);

  const d = K_1();
  const o = w();
  const n = W();
  const { initialize: r, disconnectSSE: g } = j_1();
  const [m, N] = d(false);
  const [W, I] = d(false);
  const l = ad();

  const B = ae_1((a) => a.fetchPortal);

  const w = o?.username ? `/@${o.username}` : "/profile";

  y_1(() => {
    if (d) {
      r();
    }

    return () => {
      g();
    };
  }, [d, r, g]);

  y_1(() => {
    B();
  }, [B]);

  const M = W_1(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    h(true);
  }, [h]);

  const T = W_1(() => {
    c();
  }, [c]);

  const $ = T(() => {
    const a = t.url || "/";
    return ag.some((H) => a.startsWith(H));
  }, [t.url]);

  const k = T(() => {
    const a = t.url || "/";
    return o?.username
      ? a === `/@${o.username}` || a.startsWith(`/@${o.username}/`)
      : false;
  }, [t.url, o?.username]);

  return (
    $ ||
    u("aside", {
      className: s.aside,
      children: [
        u("div", {
          className: s.asideTop,
          children: [
            u("div", {
              className: s.asideBrand,
              children: [
                u(I_1, {}),
                u("button", {
                  className: s.asideBrandVersion,
                  onClick: () => N(true),
                  title: "Что нового",
                  children: "v1.1",
                }),
              ],
            }),
            u("nav", {
              className: s.nav,
              children: [
                u(v, {
                  href: "/",
                  icon: u ? u(ah, {}) : u(I, {}),
                  onActiveClick: M,
                  children: "Лента",
                }),
                u(v, {
                  href: "/search",
                  icon: u(I_4, {}),
                  children: "Поиск",
                }),
                u(l, {
                  path: "/event",
                  children: ({ matches: a }) =>
                    u("a", {
                      href: l.active && l.url ? l.url : "/event",
                      target: l.active && l.url ? "_blank" : undefined,
                      rel:
                        l.active && l.url ? "noopener noreferrer" : undefined,
                      className: `${s.portalButton} ${
                        l.active ? s.portalActive : ""
                      } ${a ? s.active : ""}`,
                      title: "Ивент",
                      children: [
                        u("img", {
                          src: l.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: s.portalImage,
                        }),
                        u("span", { children: "Ивент" }),
                      ],
                    }),
                }),
                u(v, {
                  href: "/notifications",
                  icon: u(I_3, {}),
                  badge: n,
                  children: "Уведомления",
                }),
                u(P, {
                  href: w,
                  icon: u(a, {}),
                  isActive: k,
                  children: "Профиль",
                }),
              ],
            }),
          ],
        }),
        u("div", {
          className: s.asideBottom,
          children: [
            !o?.subscription?.isActive &&
              u("button", {
                className: s.logoutButton,
                onClick: () => I(true),
                children: [
                  u("span", { children: "⭐" }),
                  u("span", { children: "ИТД НУКСТА" }),
                ],
              }),
            u("button", {
              className: s.logoutButton,
              onClick: T,
              children: [
                u(I_2, { size: 20 }),
                u("span", { children: "Выйти" }),
              ],
            }),
          ],
        }),
        u(Pe, { isOpen: m, onClose: () => N(false) }),
        u(j_1_1, { isOpen: W, onClose: () => I(false) }),
      ],
    })
  );
};

export { Aside as Aside };
