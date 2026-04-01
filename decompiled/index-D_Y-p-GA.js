import {
  u,
  a,
  b,
  c,
  C,
  M as M_1,
  d,
  I as I_1,
  B,
  u as u_1,
  i,
  f as f_1,
  s,
  S,
  t,
  k,
  A,
  q,
  g,
  d as d_1,
  P,
  N,
  B as B_1,
  l,
  q as q_1,
  $,
  m,
  n,
  U,
  o,
  p,
  r,
  D,
  v,
  w,
  x,
  z,
  R,
  E,
  F,
  G,
  H,
  J,
  K,
  T,
  s as s_1,
  O,
  V,
  Q as Q_1,
} from "./index-CJNMmwsR.js";

import { I as I_2 } from "./IconCheck-C1c0pK08.js";

const Cn = ({ size: t = 24 }) =>
  u("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      u("circle", {
        cx: "12",
        cy: "12",
        r: "9",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      u("path", {
        d: "M5.5 5.5L18.5 18.5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
      }),
    ],
  });

const kn = () =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "none",
    children: u("path", {
      stroke: "currentColor",
      "stroke-width": "1.333",
      d: "M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v9.333c0 .737.597 1.334 1.333 1.334h9.334c.736 0 1.333-.597 1.333-1.334V4c0-.736-.597-1.333-1.333-1.333ZM10.666 1.333V4M5.333 1.333V4M2 6.667h12",
    }),
  });

const Pn = ({ size: t = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: u("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.723 10.043a.918.918 0 0 0-.658-.261c-1.069 0-1.939.832-1.939 1.853 0 .015 0 .049-.004.06l-.008 1.876c0 .22-.18.392-.41.392a.397.397 0 0 1-.41-.392V5.948c0-.366-.153-.722-.42-.98-.548-.52-1.48-.523-2.045.003-.27.27-.42.618-.42.977v5.034a.401.401 0 0 1-.409.391c-.219 0-.41-.182-.41-.391v-6.61a1.342 1.342 0 0 0-.422-.968 1.408 1.408 0 0 0-.471-.3 1.513 1.513 0 0 0-1.098-.001 1.426 1.426 0 0 0-.783.747c-.072.156-.11.342-.11.522v6.61a.401.401 0 0 1-.41.391c-.219 0-.41-.182-.41-.391V7.126c0-.736-.671-1.382-1.438-1.382C5.677 5.744 5 6.385 5 7.116v7.276c.023 1.768.759 3.426 2.074 4.67A7.162 7.162 0 0 0 12 21a7.16 7.16 0 0 0 4.926-1.937c1.315-1.245 2.052-2.907 2.074-4.684v-3.704c0-.241-.097-.461-.277-.632Z",
      clipRule: "evenodd",
    }),
  });

const In = ({ size: t = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      u("circle", {
        cx: "12",
        cy: "8",
        r: "4",
        stroke: "currentColor",
        strokeWidth: "1.5",
      }),
      u("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinejoin: "round",
        d: "M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6",
      }),
    ],
  });

const Sn = ({ size: t = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: u("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.532 5.497C17.905 4.83 12.91 3 12 3c-.91 0-5.906 1.83-6.532 2.498-.497.533-.491.944-.452 3.218.016.923.037 2.18.037 3.919 0 6.07 6.75 8.322 6.818 8.345a.424.424 0 0 0 .258 0c.068-.023 6.818-2.276 6.818-8.345 0-1.735.021-2.99.037-3.912.038-2.28.046-2.691-.453-3.226Z",
      clipRule: "evenodd",
    }),
  });

const Mn = "GcSCKwwz";
const Ln = "zBZFa-2a";
const Se = { createPostModal: Mn, title: Ln };
function xn({ wallOwnerId: t, placeholder: o, onPostCreated: c }) {
  const { closeModal: r } = a();

  const n = b((N) => N.profile);

  const d = c((N) => N.createPost);

  const a = async (N, R, b, P) => {
    if (!n) {
      return;
    }
    const B = t ?? n.id;
    await d(B, N, R, b, P);
    await c?.();
    r();
  };

  return u(M_1, {
    frameless: true,
    onClose: r,
    className: Se.createPostModal,
    children: [
      u("h2", { className: Se.title, children: "Создать пост" }),
      u(C, { onSubmit: a, autoFocus: true, placeholder: o }),
    ],
  });
}
const Bn = "L-PzWuiQ";
const Fn = "oXH-hyO9";
const An = "nQLamJ2B";
const Rn = "gTC1YNf4";
const Tn = "_-4yHS7h8";
const $n = "_2Ks-COe5";
const En = "DQuZdM2t";

const Q = {
  form: Bn,
  field: Fn,
  label: An,
  hint: Rn,
  fieldError: Tn,
  error: $n,
  actions: En,
};

function Dn({ onClose: t, onBack: o }) {
  const [c, r] = d("");
  const [n, d] = d("");
  const [a, N] = d("");
  const [R, b] = d(false);
  const [P, B] = d(null);
  const [g, m] = d({});

  const x = async (S) => {
    S.preventDefault();
    B(null);
    m({});

    if (n !== a) {
      m({ confirmPassword: "Пароли не совпадают" });
      return;
    }

    if (n.length < 10) {
      m({ newPassword: "Минимум 10 символов" });
      return;
    }
    if (n.length > 128) {
      m({ newPassword: "Максимум 128 символов" });
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(n)) {
      m({ newPassword: "Только латиница, цифры и знаки пунктуации" });
      return;
    }
    b(true);
    try {
      await u_1.changePassword({ currentPassword: c, newPassword: n });
      await b.getState().logout();
      t();
    } catch (C) {
      if (i(C)) {
        if (C.code === "CURRENT_PASSWORD_INCORRECT") {
          m({ currentPassword: "Неверный текущий пароль" });
        } else if (C.errors) {
          const W = {};
          for (const [z, $] of Object.entries(C.errors)) {
            W[z] = $[0] || "Ошибка валидации";
          }
          m(W);
        } else {
          B(C.message || "Не удалось сменить пароль");
        }
      } else {
        B("Не удалось сменить пароль");
      }
    } finally {
      b(false);
    }
  };

  const D = c.length > 0 && n.length >= 10 && a.length > 0;
  return u(M_1, {
    onClose: o,
    title: "Смена пароля",
    children: u("form", {
      onSubmit: x,
      className: Q.form,
      children: [
        u("div", {
          className: Q.field,
          children: [
            u("label", { className: Q.label, children: "Текущий пароль" }),
            u(I_1, {
              type: "password",
              value: c,
              onChange: r,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            g.currentPassword &&
              u("span", {
                className: Q.fieldError,
                children: g.currentPassword,
              }),
          ],
        }),
        u("div", {
          className: Q.field,
          children: [
            u("label", { className: Q.label, children: "Новый пароль" }),
            u(I_1, {
              type: "password",
              value: n,
              onChange: d,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            u("span", {
              className: Q.hint,
              children: "Минимум 10 символов, латиница, цифры и пунктуация",
            }),
            g.newPassword &&
              u("span", { className: Q.fieldError, children: g.newPassword }),
          ],
        }),
        u("div", {
          className: Q.field,
          children: [
            u("label", {
              className: Q.label,
              children: "Подтверждение пароля",
            }),
            u(I_1, {
              type: "password",
              value: a,
              onChange: N,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            g.confirmPassword &&
              u("span", {
                className: Q.fieldError,
                children: g.confirmPassword,
              }),
          ],
        }),
        P && u("div", { className: Q.error, children: P }),
        u("div", {
          className: Q.actions,
          children: [
            u(B, {
              type: "button",
              variant: "secondary",
              onClick: o,
              disabled: R,
              children: "Отмена",
            }),
            u(B, {
              type: "submit",
              disabled: !D || R,
              children: R ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
      ],
    }),
  });
}
function zn() {
  const { theme: t, setTheme: o } = f_1();
  return u(k, {
    children: [
      u("h2", { className: s.contentTitle, children: "Оформление" }),
      u("div", {
        className: s.section,
        children: u("div", {
          className: s.settingItem,
          children: [
            u("div", {
              className: s.settingInfo,
              children: u("div", {
                className: s.settingText,
                children: [
                  u("span", { className: s.settingTitle, children: "Тема" }),
                  u("span", {
                    className: s.settingDescription,
                    children: "Выберите цветовую схему приложения",
                  }),
                ],
              }),
            }),
            u(S, { value: t, options: t, onChange: (c) => o(c) }),
          ],
        }),
      }),
    ],
  });
}
function Un({ onChangePassword: t }) {
  return u(k, {
    children: [
      u("h2", { className: s.contentTitle, children: "Безопасность" }),
      u("div", {
        className: s.section,
        children: u("div", {
          className: s.settingItem,
          children: [
            u("div", {
              className: s.settingInfo,
              children: u("div", {
                className: s.settingText,
                children: [
                  u("span", { className: s.settingTitle, children: "Пароль" }),
                  u("span", {
                    className: s.settingDescription,
                    children: "Изменить пароль от аккаунта",
                  }),
                ],
              }),
            }),
            u(B, { size: "sm", onClick: t, children: "Сменить пароль" }),
          ],
        }),
      }),
    ],
  });
}
const jn = [
  { id: "account", icon: In, label: "Аккаунт" },
  { id: "appearance", icon: g, label: "Оформление" },
  { id: "security", icon: Sn, label: "Безопасность" },
  { id: "privacy", icon: Pn, label: "Приватность" },
  { id: "notifications", icon: d_1, label: "Уведомления" },
];
function Wn({ onClose: t }) {
  const [o, c] = d("account");
  const [r, n] = d(null);
  const [d, a] = d(false);
  const [N, R] = d({});
  const [b, P] = d({});
  const B = A(null);
  const g = A(null);
  const m = A(null);
  const x = Object.values(N).some(Boolean);
  const D = Object.values(b).some(Boolean);

  const S = q(
    (p) => (U) => {
      R((O) => ({
        ...O,
        [p]: U,
      }));
    },
    []
  );

  const C = q(
    (p) => (U) => {
      P((O) => ({
        ...O,
        [p]: U,
      }));
    },
    []
  );

  const W = async () => {
    const p = [];

    if (N.account) {
      p.push(B.current?.save() ?? Promise.resolve());
    }

    if (N.notifications) {
      p.push(g.current?.save() ?? Promise.resolve());
    }

    if (N.privacy) {
      p.push(m.current?.save() ?? Promise.resolve());
    }

    await Promise.all(p);
  };

  const z = () => {
    B.current?.discard();
    g.current?.discard();
    m.current?.discard();
  };

  const $ = (p) => {
    if (p !== o) {
      if (x) {
        n({ type: "tab", tab: p });
      } else {
        c(p);
      }
    }
  };

  const V = () => {
    if (x) {
      n({ type: "close" });
    } else {
      t();
    }
  };

  const F = () => {
    z();
    const p = r;
    n(null);

    if (p?.type === "tab") {
      c(p.tab);
    } else if (p?.type === "close") {
      t();
    }
  };

  const J = async () => {
    await W();
    const p = r;
    n(null);

    if (p?.type === "tab") {
      c(p.tab);
    } else if (p?.type === "close") {
      t();
    }
  };

  const X = () => {
    switch (o) {
      case "account": {
        return u(B_1, {
          ref: B,
          onDirtyChange: S("account"),
          onSavingChange: C("account"),
          onClose: t,
        });
      }
      case "appearance": {
        return u(zn, {});
      }
      case "security": {
        return u(Un, { onChangePassword: () => a(true) });
      }
      case "notifications": {
        return u(N, {
          ref: g,
          onDirtyChange: S("notifications"),
          onSavingChange: C("notifications"),
        });
      }
      case "privacy": {
        return u(P, {
          ref: m,
          onDirtyChange: S("privacy"),
          onSavingChange: C("privacy"),
        });
      }
    }
  };

  return d
    ? u(Dn, { onClose: t, onBack: () => a(false) })
    : u(M_1, {
        onClose: V,
        frameless: true,
        size: "wide",
        className: s.modalContainer,
        children: u("div", {
          className: s.settingsModal,
          children: [
            u("div", {
              className: s.sidebar,
              children: [
                u("div", { className: s.sidebarTitle, children: "Настройки" }),
                u("nav", {
                  children: jn.map((p) =>
                    u(
                      "button",
                      {
                        type: "button",
                        className: `${s.navItem} ${o === p.id ? s.active : ""}`,
                        onClick: () => $(p.id),
                        children: [
                          u(p.icon, {}),
                          u("span", { children: p.label }),
                        ],
                      },
                      p.id
                    )
                  ),
                }),
              ],
            }),
            u("div", {
              className: s.contentWrapper,
              children: [
                u("div", { className: s.content, children: X() }),
                x &&
                  u("div", {
                    className: s.actionBar,
                    children: [
                      u(B, {
                        variant: "secondary",
                        onClick: V,
                        children: "Отмена",
                      }),
                      u(B, {
                        variant: "primary",
                        onClick: W,
                        disabled: D,
                        loading: D,
                        children: "Сохранить",
                      }),
                    ],
                  }),
              ],
            }),
            r &&
              u("div", {
                className: s.confirmOverlay,
                children: u("div", {
                  className: s.confirmDialog,
                  children: [
                    u("div", {
                      className: s.confirmText,
                      children: [
                        "У вас есть несохранённые изменения.",
                        `
`,
                        "Сохранить?",
                      ],
                    }),
                    u("div", {
                      className: s.confirmActions,
                      children: [
                        u(B, {
                          variant: "secondary",
                          onClick: F,
                          children: "Не сохранять",
                        }),
                        u(B, {
                          variant: "accent",
                          onClick: J,
                          children: "Сохранить",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        }),
      });
}
const Vn = "-sE1X4FD";
const On = "xpvwp-rl";
const qn = "_9n4VLpjh";
const _n = "ZsCn2sgV";
const Hn = "_248T2ZtV";
const pe = { checkbox: Vn, disabled: On, input: qn, checkmark: _n, label: Hn };
function Zn({
  checked: t,
  onChange: o,
  label: c,
  disabled: r = false,
  className: n = "",
}) {
  const d = (a) => {
    o(a.target.checked);
  };
  return u("label", {
    className: `${pe.checkbox} ${r ? pe.disabled : ""} ${n}`,
    children: [
      u("input", {
        type: "checkbox",
        checked: t,
        onChange: d,
        disabled: r,
        className: pe.input,
      }),
      u("span", { className: pe.checkmark }),
      c && u("span", { className: pe.label, children: c }),
    ],
  });
}
const Kn = "clHUi236";
const Xn = "yiO0wbWK";
const Gn = "sMnMo9RR";
const Yn = "csorFBDI";
const Qn = "xUb4GhPl";
const Jn = "Tfk454-S";
const et = "IEwsd6vv";
const nt = "NKbAkExq";
const tt = "A6o1aA7A";
const st = "ZpUj8PQa";
const ot = "rRMuZ0yV";
const at = "CHE2D-gj";
const it = "u9XlaVeB";
const rt = "trJ3W3kj";
const lt = "dKyMWEKh";

const I = {
  userListModal: Kn,
  content: Xn,
  userList: Gn,
  userItem: Yn,
  clickable: Qn,
  userInfo: Jn,
  displayName: et,
  username: nt,
  followButton: tt,
  actionButtons: st,
  acceptButton: ot,
  rejectButton: at,
  actionStatus: it,
  empty: rt,
  loadMoreSentinel: lt,
};

function Me({ userId: t, type: o, title: c, onCountChange: r }) {
  const { closeModal: n } = a();

  const d = b((s) => s.profile?.id);

  const a = A(null);
  const N = `${t || "me"}-${o}`;
  const [R, b] = d([]);
  const [P, B] = d(true);
  const [g, m] = d(false);
  const [x, D] = d(null);
  const [S, C] = d(new Map());
  const [W, z] = d(new Set());
  const [$, V] = d(new Map());
  const [F, J] = d(new Set());
  const X = A(null);
  const p = o === "pending-incoming";
  const U = o === "pending-outgoing";

  if (a.current !== N) {
    a.current = N;
    b([]);
    B(true);
    D(null);
    C(new Map());
    z(new Set());
    V(new Map());
    J(new Set());
  }

  const O = q(
    async (s) => {
      const T = !s;

      if (T) {
        B(true);
      } else {
        m(true);
      }

      try {
        let u;
        switch (o) {
          case "followers": {
            if (!t) {
              throw new Error("userId required for followers");
            }
            u = await l.getFollowers(t, { limit: 20, cursor: s });
            break;
          }
          case "following": {
            if (!t) {
              throw new Error("userId required for following");
            }
            u = await l.getFollowing(t, { limit: 20, cursor: s });
            break;
          }
          case "pending-incoming": {
            u = { data: [], nextCursor: null };
            break;
          }
          case "pending-outgoing": {
            u = { data: [], nextCursor: null };
            break;
          }
        }
        if (T) {
          b(u.data);
          const v = new Map();

          u.data.forEach((k) => {
            if (k.interaction.isFollowing) {
              v.set(k.userId, "following");
            } else if (k.interaction.hasOutgoingRequest) {
              v.set(k.userId, "requested");
            } else {
              v.set(k.userId, null);
            }
          });

          C(v);
        } else {
          b((v) => {
            const k = new Set(v.map((G) => G.userId));

            const E = u.data.filter((G) => !k.has(G.userId));

            return [...v, ...E];
          });

          C((v) => {
            const k = new Map(v);

            u.data.forEach((E) => {
              if (!k.has(E.userId)) {
                if (E.interaction.isFollowing) {
                  k.set(E.userId, "following");
                } else if (E.interaction.hasOutgoingRequest) {
                  k.set(E.userId, "requested");
                } else {
                  k.set(E.userId, null);
                }
              }
            });

            return k;
          });
        }
        D(u.nextCursor);
      } catch (u) {
        console.error("Failed to fetch users:", u);
      } finally {
        B(false);
        m(false);
      }
    },
    [t, o]
  );

  q_1(() => {
    O();
  }, [O]);

  q_1(() => {
    if (!x || g) {
      return;
    }

    const s = new IntersectionObserver(
      (u) => {
        if (u[0].isIntersecting) {
          O(x);
        }
      },
      { rootMargin: "100px" }
    );

    const T = X.current;

    if (T) {
      s.observe(T);
    }

    return () => {
      if (T) {
        s.unobserve(T);
      }
    };
  }, [x, g, O]);

  const ae = q(
    async (s, T) => {
      T.stopPropagation();

      if (!W.has(s)) {
        z((u) => new Set(u).add(s));
        try {
          const u = S.get(s);
          if (u === "following" || u === "requested") {
            await l.unfollowUser(s);

            C((v) => {
              const k = new Map(v);
              k.set(s, null);
              return k;
            });
          } else {
            const v = await l.followUser(s);
            C((k) => {
              const E = new Map(k);
              E.set(s, v);
              return E;
            });
          }
        } catch (u) {
          console.error("Failed to toggle follow:", u);
        } finally {
          z((u) => {
            const v = new Set(u);
            v.delete(s);
            return v;
          });
        }
      }
    },
    [S, W]
  );

  const _ = q(
    async (s, T) => {
      T.stopPropagation();

      if (!F.has(s)) {
        console.warn("acceptFollowRequest not implemented in old backend");
      }
    },
    [F]
  );

  const ee = q(
    async (s, T) => {
      T.stopPropagation();

      if (!F.has(s)) {
        console.warn("removeFollower not implemented in old backend");
      }
    },
    [F]
  );

  const oe = q(
    async (s, T) => {
      T.stopPropagation();

      if (!F.has(s)) {
        J((u) => new Set(u).add(s));
        try {
          await l.unfollowUser(s);

          V((u) => {
            const v = new Map(u);
            v.set(s, "rejected");
            return v;
          });
        } catch (u) {
          console.error("Failed to cancel follow request:", u);
        } finally {
          J((u) => {
            const v = new Set(u);
            v.delete(s);
            return v;
          });
        }
      }
    },
    [F]
  );

  const se = q(
    (s) => {
      if (s) {
        n();
        $(`/@${s}`);
      }
    },
    [n]
  );

  const K = () => {
    switch (o) {
      case "followers": {
        return "Нет подписчиков";
      }
      case "following": {
        return "Нет подписок";
      }
      case "pending-incoming": {
        return "Нет заявок";
      }
      case "pending-outgoing": {
        return "Нет исходящих заявок";
      }
    }
  };

  return u(M_1, {
    onClose: n,
    title: c,
    className: I.userListModal,
    children: u("div", {
      className: I.content,
      children: P
        ? u(m, {})
        : R.length === 0
        ? u("div", { className: I.empty, children: K() })
        : u("div", {
            className: I.userList,
            children: [
              R.map((s) => {
                const T = S.get(s.userId);
                const u = T === "following";
                const v = T === "requested";
                const k = W.has(s.userId);
                const E = s.userId === d;
                const G = $.get(s.userId);
                const A = F.has(s.userId);

                const Y = () =>
                  u ? "Отписаться" : v ? "Отменить" : "Подписаться";

                if (p) {
                  return u(
                    "div",
                    {
                      className: `${I.userItem} ${
                        s.username ? I.clickable : ""
                      }`,
                      onClick: () => se(s.username),
                      children: [
                        u(n, { src: s.avatar, size: "md" }),
                        u("div", {
                          className: I.userInfo,
                          children: [
                            u(U, {
                              name: s.displayName,
                              verified: s.isVerified,
                              pin: s.pin,
                              size: "md",
                              className: I.displayName,
                            }),
                            s.username &&
                              u("span", {
                                className: I.username,
                                children: ["@", s.username],
                              }),
                          ],
                        }),
                        G === "accepted"
                          ? u("span", {
                              className: I.actionStatus,
                              children: "Принято",
                            })
                          : G === "rejected"
                          ? u("span", {
                              className: I.actionStatus,
                              children: "Отклонено",
                            })
                          : u("div", {
                              className: I.actionButtons,
                              children: [
                                u(B, {
                                  size: "sm",
                                  variant: "primary",
                                  disabled: A,
                                  onClick: (q) => _(s.userId, q),
                                  className: I.acceptButton,
                                  children: u(I_2, { size: 16 }),
                                }),
                                u(B, {
                                  size: "sm",
                                  variant: "secondary",
                                  disabled: A,
                                  onClick: (q) => ee(s.userId, q),
                                  className: I.rejectButton,
                                  children: u(o, { size: 16 }),
                                }),
                              ],
                            }),
                      ],
                    },
                    s.userId
                  );
                }

                if (U) {
                  return u(
                    "div",
                    {
                      className: `${I.userItem} ${
                        s.username ? I.clickable : ""
                      }`,
                      onClick: () => se(s.username),
                      children: [
                        u(n, { src: s.avatar, size: "md" }),
                        u("div", {
                          className: I.userInfo,
                          children: [
                            u(U, {
                              name: s.displayName,
                              verified: s.isVerified,
                              pin: s.pin,
                              size: "md",
                              className: I.displayName,
                            }),
                            s.username &&
                              u("span", {
                                className: I.username,
                                children: ["@", s.username],
                              }),
                          ],
                        }),
                        G === "rejected"
                          ? u("span", {
                              className: I.actionStatus,
                              children: "Отменено",
                            })
                          : u(B, {
                              size: "sm",
                              variant: "secondary",
                              disabled: A,
                              onClick: (q) => oe(s.userId, q),
                              className: I.followButton,
                              children: "Отменить",
                            }),
                      ],
                    },
                    s.userId
                  );
                }

                return u(
                  "div",
                  {
                    className: `${I.userItem} ${s.username ? I.clickable : ""}`,
                    onClick: () => se(s.username),
                    children: [
                      u(n, { src: s.avatar, size: "md" }),
                      u("div", {
                        className: I.userInfo,
                        children: [
                          u(U, {
                            name: s.displayName,
                            verified: s.isVerified,
                            size: "md",
                            className: I.displayName,
                          }),
                          s.username &&
                            u("span", {
                              className: I.username,
                              children: ["@", s.username],
                            }),
                        ],
                      }),
                      !E &&
                        u(B, {
                          size: "sm",
                          variant: u || v ? "secondary" : "primary",
                          disabled: k,
                          onClick: (q) => ae(s.userId, q),
                          className: I.followButton,
                          children: Y(),
                        }),
                    ],
                  },
                  s.userId
                );
              }),
              x &&
                u("div", {
                  ref: X,
                  className: I.loadMoreSentinel,
                  children: g && u(m, { size: "sm" }),
                }),
            ],
          }),
    }),
  });
}
const ct = "_2uZqwv31";
const dt = "n1bAn5KB";
const ut = "_5CkFRdhv";
const ht = "_0PddXEMG";
const ft = "KS4RxOQ2";
const mt = "x0i4BYqy";
const pt = "GH3ZRjz3";
const wt = "Mic5Lsx0";
const gt = "d5PWRv19";
const vt = "_8A6hckjC";
const bt = "_6K5CbR-T";
const yt = "UPtTJ7RZ";
const Nt = "G1zp6CtS";
const Ct = "gfCy5iZ-";
const kt = "aoFNSXhn";
const Pt = "_6G2DsFIq";
const It = "_7IsCrdcT";
const St = "Q6BWkOKZ";
const Mt = "pJ6wP8rM";
const Lt = "UsWKjPqW";

const M = {
  modal: ct,
  content: dt,
  statusIcon: ut,
  title: ht,
  description: ft,
  rejectionNotice: mt,
  rejectionTitle: pt,
  rejectionReason: wt,
  fileInput: gt,
  dropzone: vt,
  dropzoneIcon: bt,
  dropzoneText: yt,
  dropzoneHint: Nt,
  preview: Ct,
  video: kt,
  removeButton: Pt,
  error: It,
  progressBar: St,
  progressFill: Mt,
  actions: Lt,
};

const xt = 50 * 1024 * 1024;
const Bt = ["video/mp4", "video/webm", "video/quicktime"];
function Ft({ onClose: t }) {
  const [o, c] = d("loading");
  const [r, n] = d(null);
  const [d, a] = d(null);
  const [N, R] = d(false);
  const [b, P] = d(false);
  const [B, g] = d(null);
  const [m, x] = d(0);
  const D = A(null);

  q_1(() => {
    (async () => {
      try {
        const V = await p.getVerificationStatus();
        c(V);
      } catch (V) {
        console.error("Failed to load verification status:", V);
        c(null);
      }
    })();
  }, []);

  q_1(
    () => () => {
      if (d) {
        URL.revokeObjectURL(d);
      }
    },
    [d]
  );

  const S = ($) => {
    const F = $.target.files?.[0];
    if (F) {
      g(null);

      if (!Bt.includes(F.type)) {
        g("Поддерживаются только форматы MP4, WebM и MOV");
        return;
      }

      if (F.size > xt) {
        g("Размер видео не должен превышать 50 МБ");
        return;
      }

      if (d) {
        URL.revokeObjectURL(d);
      }

      n(F);
      a(URL.createObjectURL(F));
    }
  };

  const C = () => {
    D.current?.click();
  };

  const W = () => {
    if (d) {
      URL.revokeObjectURL(d);
    }

    n(null);
    a(null);

    if (D.current) {
      D.current.value = "";
    }
  };

  const z = async () => {
    if (!(!r || !N)) {
      P(true);
      g(null);
      x(0);
      try {
        x(30);
        const $ = await r.uploadMedia(r);
        x(70);
        await p.submitVerificationRequest($.url);
        x(100);
        const V = await p.getVerificationStatus();
        c(V);
      } catch ($) {
        console.error("Failed to submit verification request:", $);
        g("Не удалось отправить заявку. Попробуйте позже.");
      } finally {
        P(false);
      }
    }
  };

  if (o === "loading") {
    return u(M_1, {
      onClose: t,
      showHeader: false,
      className: M.modal,
      children: u("div", { className: M.content, children: u(m, {}) }),
    });
  }

  if (
    o &&
    typeof o == "object" &&
    (o.status === "pending" || o.status === "approved")
  ) {
    return u(M_1, {
      onClose: t,
      showHeader: false,
      className: M.modal,
      children: u("div", {
        className: M.content,
        children: [
          u("div", {
            className: M.statusIcon,
            children:
              o.status === "approved"
                ? u("svg", {
                    width: "48",
                    height: "48",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "var(--accent-primary)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      u("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                      u("polyline", { points: "22 4 12 14.01 9 11.01" }),
                    ],
                  })
                : u("svg", {
                    width: "48",
                    height: "48",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "var(--text-secondary)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      u("circle", { cx: "12", cy: "12", r: "10" }),
                      u("polyline", { points: "12 6 12 12 16 14" }),
                    ],
                  }),
          }),
          u("h2", {
            className: M.title,
            children:
              o.status === "approved"
                ? "Вы верифицированы!"
                : "Заявка на рассмотрении",
          }),
          u("p", {
            className: M.description,
            children:
              o.status === "approved"
                ? "Поздравляем! Ваш аккаунт верифицирован."
                : "Ваша заявка на верификацию находится на рассмотрении. Мы уведомим вас о результате.",
          }),
          u("div", {
            className: M.actions,
            children: u(B, {
              variant: "primary",
              onClick: () => t(),
              children: "Понятно",
            }),
          }),
        ],
      }),
    });
  }

  return u(M_1, {
    onClose: t,
    showHeader: false,
    className: M.modal,
    children: u("div", {
      className: M.content,
      children: [
        u("h2", { className: M.title, children: "Верификация" }),
        u("p", {
          className: M.description,
          children:
            "Запишите видео, в котором объясните, почему вам нужна галочка и без неё никак.",
        }),
        o?.status === "rejected" &&
          u("div", {
            className: M.rejectionNotice,
            children: [
              u("span", {
                className: M.rejectionTitle,
                children: "Предыдущая заявка отклонена",
              }),
              o.reason &&
                u("span", {
                  className: M.rejectionReason,
                  children: o.reason,
                }),
            ],
          }),
        u("input", {
          ref: D,
          type: "file",
          accept: "video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov",
          onChange: S,
          className: M.fileInput,
        }),
        r
          ? u("div", {
              className: M.preview,
              children: [
                u("video", { src: d, controls: true, className: M.video }),
                u("button", {
                  className: M.removeButton,
                  onClick: W,
                  type: "button",
                  children: u("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      u("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      u("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
                    ],
                  }),
                }),
              ],
            })
          : u("div", {
              className: M.dropzone,
              onClick: C,
              children: [
                u("div", {
                  className: M.dropzoneIcon,
                  children: u("svg", {
                    width: "48",
                    height: "48",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      u("polygon", { points: "23 7 16 12 23 17 23 7" }),
                      u("rect", {
                        x: "1",
                        y: "5",
                        width: "15",
                        height: "14",
                        rx: "2",
                        ry: "2",
                      }),
                    ],
                  }),
                }),
                u("span", {
                  className: M.dropzoneText,
                  children: "Нажмите, чтобы выбрать видео",
                }),
                u("span", {
                  className: M.dropzoneHint,
                  children: "MP4, WebM или MOV, до 50 МБ",
                }),
              ],
            }),
        B && u("div", { className: M.error, children: B }),
        b &&
          u("div", {
            className: M.progressBar,
            children: u("div", {
              className: M.progressFill,
              style: { width: `${m}%` },
            }),
          }),
        u(Zn, {
          checked: N,
          onChange: R,
          disabled: b,
          label:
            "Я соглашаюсь с тем, что моё видео может быть использовано в контенте Nowkie",
        }),
        u("div", {
          className: M.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: () => t(),
              disabled: b,
              children: "Отмена",
            }),
            u(B, {
              variant: "primary",
              onClick: z,
              disabled: !r || !N || !N || b,
              children: b ? "Отправка..." : "Отправить заявку",
            }),
          ],
        }),
      ],
    }),
  });
}
const At = "cIObOWX1";
const Rt = "CsIbGceP";
const Tt = "_4DLI4vxA";
const $t = "-Or9HeQV";
const Et = "r2TckDeC";
const Dt = "BLErSWUX";
const zt = "-KzyufFU";
const Ut = "ZDyP3TiR";
const jt = "z4EUhqrg";
const Wt = "-D3fn7RS";
const Vt = "h-5Dd8A9";
const Ot = "iLZE-6Ka";
const qt = "NkXf1I05";
const _t = "lMt54pXx";
const Ht = "Evwe2Uf-";
const Zt = "XHxlUBEZ";
const Kt = "NxlmS7bS";
const Xt = "Xnp1EFrD";
const Gt = "HkPDFh5Y";
const Yt = "at4eWYfl";
const Qt = "GVHheubk";
const Jt = "-rjihNlb";
const es = "hSN99swS";
const ns = "wD-vYWrg";
const ts = "LIXEFTYA";
const ss = "XHEEbVAb";
const os = "udD7eGIN";
const as = "XJHSs8qR";
const is = "E0F6ysgZ";

const f = {
  page: At,
  tabsWrapper: Rt,
  createPostWrapper: Tt,
  writePostButton: $t,
  profileCard: Et,
  banner: Dt,
  bannerActions: zt,
  bannerActionButton: Ut,
  deleteBannerButton: jt,
  profileContent: Wt,
  avatarRow: Vt,
  avatar: Ot,
  actions: qt,
  mobileActions: _t,
  infoContainer: Ht,
  userInfo: Zt,
  name: Kt,
  username: Xt,
  bio: Gt,
  metaItem: Yt,
  followsYou: Qt,
  stats: Jt,
  stat: es,
  clickable: ns,
  statValue: ts,
  statLabel: ss,
  error: os,
  bannerPlaceholder: as,
  emptyPosts: is,
};

const rs = "EEr4AufL";
const ls = "oMgX9Ykl";
const cs = "vffvZARh";
const ds = "GoKIwSa0";
const us = "ovvEebnP";
const hs = "Pl-AQ1t9";

const ce = {
  content: rs,
  title: ls,
  description: cs,
  username: ds,
  warning: us,
  actions: hs,
};

function fs({
  username: t,
  displayName: o,
  avatar: c,
  onConfirm: r,
  onClose: n,
}) {
  const d = () => {
    r();
    n();
  };
  return u(M_1, {
    onClose: n,
    showHeader: false,
    children: u("div", {
      className: ce.content,
      children: [
        u(n, { src: c, alt: o, size: "lg" }),
        u("h2", {
          className: ce.title,
          children: "Заблокировать пользователя?",
        }),
        u("p", {
          className: ce.description,
          children: [
            "Вы уверены, что хотите заблокировать",
            " ",
            u("strong", { children: o }),
            t &&
              u("span", { className: ce.username, children: [" (@", t, ")"] }),
            "?",
          ],
        }),
        u("p", {
          className: ce.warning,
          children:
            "Заблокированный пользователь не сможет видеть ваш профиль и контент.",
        }),
        u("div", {
          className: ce.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: () => n(),
              fullWidth: true,
              children: "Отмена",
            }),
            u(B, {
              variant: "danger",
              onClick: () => d(),
              fullWidth: true,
              children: "Заблокировать",
            }),
          ],
        }),
      ],
    }),
  });
}
function Le(t, o, c, r) {
  const n = Math.abs(t);
  const d = n % 10;
  const a = n % 100;
  return a >= 11 && a <= 19 ? r : d === 1 ? o : d >= 2 && d <= 4 ? c : r;
}
function ms(t) {
  if (!t) {
    return null;
  }
  switch (t.unit) {
    case "just_now": {
      return "только что";
    }
    case "minutes": {
      const o = t.value ?? 1;
      const c = Le(o, "минуту", "минуты", "минут");
      return `${o} ${c} назад`;
    }
    case "hours": {
      const o = t.value ?? 1;
      const c = Le(o, "час", "часа", "часов");
      return `${o} ${c} назад`;
    }
    case "recently": {
      return "недавно";
    }
    case "this_week": {
      return "на этой неделе";
    }
    case "this_month": {
      return "в этом месяце";
    }
    case "long_ago": {
      return "давно";
    }
    default: {
      return null;
    }
  }
}
function xe(t) {
  return t >= 1000000 /* 1e6 */
    ? `${(t / 1000000) /* 1e6 */
        .toFixed(1)}M`
    : t >= 1000 /* 1e3 */
    ? `${(t / 1000) /* 1e3 */
        .toFixed(1)}K`
    : t.toString();
}
function Be({
  followers: t,
  following: o,
  isPhone: c = false,
  onFollowersClick: r,
  onFollowingClick: n,
}) {
  return u("div", {
    className: f.stats,
    children: [
      u("div", {
        className: `${f.stat} ${r ? f.clickable : ""}`,
        onClick: r,
        children: [
          u("span", { className: f.statValue, children: xe(t) }),
          u("span", { className: f.statLabel, children: "подписчиков" }),
        ],
      }),
      c && u("hr", {}),
      u("div", {
        className: `${f.stat} ${n ? f.clickable : ""}`,
        onClick: n,
        children: [
          u("span", { className: f.statValue, children: xe(o) }),
          u("span", { className: f.statLabel, children: "подписок" }),
        ],
      }),
    ],
  });
}
function ps({
  isOwnProfile: t,
  isFollowing: o,
  isRequested: c = false,
  isFollowLoading: r,
  onEditProfile: n,
  onToggleFollow: d,
  fullWidth: a = false,
}) {
  return t
    ? u(B, { onClick: n, fullWidth: a, children: "Редактировать" })
    : u(B, {
        variant: o || c ? "secondary" : "primary",
        onClick: d,
        disabled: r,
        fullWidth: a,
        children: o
          ? u(k, { children: [u(I_2, { size: 18 }), "Вы подписаны"] })
          : c
          ? "Заявка отправлена"
          : u(k, { children: [u(z, { size: 18 }), "Подписаться"] }),
      });
}
function Fe({
  isOwnProfile: t,
  isVerified: o = false,
  isBlocked: c = false,
  onVerificationRequest: r,
  onBlockUser: n,
  onReportUser: d,
  ...a
}) {
  const R = (() => {
    const b = [];

    if (!t && n) {
      b.push({
        id: "block",
        label: c ? "Разблокировать" : "Заблокировать",
        icon: u(Cn, { size: 18 }),
        danger: !c,
        onClick: n,
      });
    }

    if (!t && d) {
      b.push({
        id: "report",
        label: "Пожаловаться",
        icon: u(x, { size: 18 }),
        danger: true,
        onClick: d,
      });
    }

    return b;
  })();
  return u("div", {
    className: f.actions,
    children: [
      R.length > 0 &&
        u(D, {
          trigger: u(B, {
            variant: "secondary",
            iconOnly: true,
            children: u(v, { size: 18 }),
          }),
          items: R,
          position: "bottom-right",
        }),
      t &&
        !o &&
        r &&
        u(B, {
          variant: "secondary",
          iconOnly: true,
          onClick: r,
          children: u(w, { size: 18 }),
        }),
      u(ps, { isOwnProfile: t, isVerified: o, ...a }),
    ],
  });
}
function ws(t) {
  return new Date(t).toLocaleDateString("ru-RU", {
    month: "long",
    year: "numeric",
  });
}
function gs({
  profile: t,
  isOwnProfile: o,
  isFollowing: c,
  isRequested: r = false,
  isFollowLoading: n,
  isBlocked: d = false,
  isFollowedBy: a = false,
  isPhone: N,
  onEditProfile: R,
  onToggleFollow: b,
  onBlockUser: P,
  onFollowersClick: B,
  onFollowingClick: g,
  onBannerUpdate: m,
}) {
  const [x, D] = d(false);
  const { openModal: S, closeModal: C } = a();

  const W = q(() => {
    D(true);
  }, []);

  const z = q(() => {
    S(u(Ft, { onClose: C }));
  }, [S, C]);

  const $ = q(() => {
    if (d) {
      P?.();
      return;
    }
    S(
      u(fs, {
        username: t.username || "",
        displayName: t.displayName,
        avatar: t.avatar,
        onConfirm: () => P?.(),
        onClose: C,
      })
    );
  }, [d, P, S, C, t]);

  const V = q(() => {
    S(u(R, { targetType: "user", targetId: t.id, onClose: C }));
  }, [S, C, t.id]);

  const F = q(() => {
    D(false);
  }, []);

  const J = q(async () => {
    try {
      await p.updateProfile({ bannerId: null });
      m?.(null);
    } catch (p) {
      console.error("Failed to delete banner:", p);
    }
  }, [m]);

  const X = q(
    async (p) => {
      try {
        const [U, O] = p.split(",");
        const ae = U.match(/:(.*?);/)?.[1] || "image/png";
        const _ = atob(O);
        const ee = new Uint8Array(_.length);
        for (let s = 0; s < _.length; s++) {
          ee[s] = _.charCodeAt(s);
        }
        const oe = new Blob([ee], { type: ae });
        const se = new File([oe], "banner.png", { type: "image/png" });
        const K = await r.uploadMedia(se);
        await p.updateProfile({ bannerId: K.id });

        m?.({
          id: K.id,
          type: "image",
          url: K.url,
          width: K.width,
          height: K.height,
        });
      } catch (U) {
        console.error("Failed to upload banner:", U);
        E.error("Не удалось загрузить баннер");
        throw U;
      }
    },
    [m]
  );

  return u("div", {
    className: f.profileCard,
    children: [
      u("div", {
        className: f.banner,
        children: [
          t.banner?.url
            ? u("img", { src: t.banner.url, alt: "Banner" })
            : u("div", { className: f.bannerPlaceholder }),
          o &&
            u("div", {
              className: f.bannerActions,
              children: [
                u("button", {
                  className: f.bannerActionButton,
                  onClick: W,
                  title: "Нарисовать баннер",
                  children: u(g, { size: 20 }),
                }),
                t.banner?.url &&
                  u("button", {
                    className: `${f.bannerActionButton} ${f.deleteBannerButton}`,
                    onClick: J,
                    title: "Удалить баннер",
                    children: u(F, { size: 20 }),
                  }),
              ],
            }),
        ],
      }),
      u(G, { isOpen: x, onClose: F, onSave: X, mode: "banner" }),
      u("div", {
        className: f.profileContent,
        children: [
          u("div", {
            className: f.avatarRow,
            children: [
              u(n, {
                src: t.avatar,
                alt: t.displayName,
                size: "lg",
                online: t.online,
                className: f.avatar,
              }),
              !N &&
                u(Fe, {
                  isOwnProfile: o,
                  isFollowing: c,
                  isRequested: r,
                  isFollowLoading: n,
                  isVerified: t.isVerified,
                  isBlocked: d,
                  onEditProfile: R,
                  onToggleFollow: b,
                  onVerificationRequest: z,
                  onBlockUser: $,
                  onReportUser: V,
                }),
            ],
          }),
          u("div", {
            className: f.infoContainer,
            children: [
              u("div", {
                className: f.userInfo,
                children: [
                  u(U, {
                    name: t.displayName,
                    verified: t.isVerified,
                    pin: t.pin,
                    size: "lg",
                    className: f.name,
                  }),
                  t.username &&
                    u("span", {
                      className: f.username,
                      children: ["@", t.username],
                    }),
                ],
              }),
              N &&
                u(k, {
                  children: [
                    u(Be, {
                      isPhone: true,
                      followers: t.stats?.followers ?? 0,
                      following: t.stats?.following ?? 0,
                      onFollowersClick: B,
                      onFollowingClick: g,
                    }),
                    u("div", {
                      className: f.mobileActions,
                      children: u(Fe, {
                        isOwnProfile: o,
                        isFollowing: c,
                        isRequested: r,
                        isFollowLoading: n,
                        isVerified: t.isVerified,
                        isBlocked: d,
                        onEditProfile: R,
                        onToggleFollow: b,
                        onVerificationRequest: z,
                        onBlockUser: $,
                        onReportUser: V,
                      }),
                    }),
                  ],
                }),
              t.bio && u("p", { className: f.bio, children: t.bio }),
              !N &&
                u(Be, {
                  followers: t.stats?.followers ?? 0,
                  following: t.stats?.following ?? 0,
                  onFollowersClick: B,
                  onFollowingClick: g,
                }),
              !o &&
                !t.online &&
                t.lastSeen &&
                u("span", {
                  className: f.metaItem,
                  children: ["Был(а) в сети: ", ms(t.lastSeen)],
                }),
              t.createdAt &&
                u("span", {
                  className: f.metaItem,
                  children: [u(kn, {}), " Регистрация: ", ws(t.createdAt)],
                }),
              a &&
                !o &&
                u("span", {
                  className: f.followsYou,
                  children: "Подписан на вас",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function vs({ username: t }) {
  const o = b((i) => i.profile);

  const c = o?.id;

  const r = b((i) => i.setProfile);

  const [n, d] = d(null);
  const [a, N] = d(true);
  const [R, b] = d(null);
  const [P, B] = d("posts");
  const [g, m] = d([]);
  const [x, D] = d(false);
  const [S, C] = d(null);
  const [W, z] = d([]);
  const [$, V] = d(false);
  const [F, J] = d(null);
  const [X, p] = d(false);
  const [U, O] = d(null);
  const [ae, _] = d("none");
  const [ee, oe] = d(false);
  const [se, K] = d(false);
  const [s, T] = d(false);
  const u = !!(o && n && o.id === n.id);
  const v = ae === "following";
  const k = ae === "requested";
  q_1(() => {
    if (!n || u || u || !o) {
      _("none");
      K(false);
      return;
    }

    if (n.interaction) {
      n.interaction.isFollowing
        ? _("following")
        : n.interaction.hasOutgoingRequest
        ? _("requested")
        : _("none");

      K(n.interaction.isBlocking);
    }
  }, [n?.id, u, o]);

  const E = q(async (i, w, l) => {
    D(true);
    try {
      const H = await H.getUserWall(i, {
        cursor: l,
        limit: 20,
        pinnedPostId: w,
      });

      const Z = H.data;

      m(l ? (Xe) => [...Xe, ...Z] : Z);

      C(H.nextCursor);
    } catch (H) {
      console.error("Failed to fetch wall posts:", H);
    } finally {
      D(false);
    }
  }, []);

  const G = q(
    async (i, w) => {
      if (!X) {
        V(true);
      }

      O(null);
      try {
        const l = await H.getUserLikedPosts(i, { cursor: w, limit: 20 });
        const H = l.data;

        z(w ? (Z) => [...Z, ...H] : H);

        J(l.nextCursor);
        p(true);
      } catch (l) {
        console.error("Failed to fetch liked posts:", l);

        if (l && typeof l == "object" && "status" in l && l.status === 403) {
          O("Лайки скрыты настройками приватности");
        }
      } finally {
        V(false);
      }
    },
    [X]
  );

  q_1(() => {
    if (P === "likes" && n) {
      G(n.id);
    }
  }, [P, n?.id, G]);

  const A = c((i) => i.posts);

  const Y = c((i) => i.highlightedPostId);

  q_1(() => {
    if (!Y || !n) {
      return;
    }
    const i = A.find((l) => l.id === Y);

    if (
      i &&
      i.wallOwnerId === n.id &&
      i.wallOwnerId === n.id &&
      !g.some((l) => l.id === Y)
    ) {
      if (i.wallOwnerId === n.id) {
        if (!g.some((l) => l.id === Y)) {
          m((l) => [i, ...l]);
        }
      }
    }
  }, [Y, A, n?.id, g]);

  q_1(() => {
    if (g.length !== 0) {
      m((i) =>
        i.map((w) => {
          const l = A.find((H) => H.id === w.id);
          return l &&
            (l.editedAt !== w.editedAt || l.attachments !== w.attachments)
            ? l
            : w;
        })
      );
    }
  }, [A]);

  const q = c((i) => i._lastPostEdit);
  q_1(() => {
    if (q) {
      m((i) =>
        i.map((w) =>
          w.id === q.postId
            ? { ...w, text: q.text, spans: q.spans, editedAt: q.editedAt }
            : w
        )
      );
    }
  }, [q]);
  const fe = c((i) => i._lastReactionUpdate);
  q_1(() => {
    if (!fe) {
      return;
    }
    const { postId: i, myReaction: w, totalDelta: l } = fe;

    const H = (Z) =>
      Z.id === i
        ? {
            ...Z,
            reactions: {
              ...Z.reactions,
              myReaction: w,
              total: Math.max(0, Z.reactions.total + l),
            },
          }
        : Z;

    m((Z) => Z.map(H));

    z((Z) => Z.map(H));
  }, [fe]);
  const me = A(true);

  q_1(() => {
    me.current = true;

    return () => {
      me.current = false;
    };
  }, []);

  q_1(() => {
    const i = new AbortController();

    (async () => {
      d(null);
      m([]);
      C(null);
      N(true);
      b(null);
      z([]);
      p(false);
      J(null);
      O(null);
      B("posts");
      _("none");
      K(false);
      try {
        let l = null;

        if (t) {
          l = await p.getProfileByUsername(t);
        } else {
          l = await p.getMyProfile();
        }

        if (!me.current || i.signal.aborted) {
          return;
        }

        if (l) {
          d(l);
          (l.interaction?.isBlocking ?? false) ||
            E(l.username || l.id, l.pinnedPostId);
        }
      } catch (l) {
        if (!me.current || i.signal.aborted) {
          return;
        }
        console.error("Failed to fetch profile:", l);
        b("Профиль не найден");
      } finally {
        if (me.current && !i.signal.aborted) {
          N(false);
        }
      }
    })();

    return () => {
      i.abort();
    };
  }, [t, c, E]);

  const Ce = q(async () => {
    if (!(!n || ee)) {
      oe(true);
      try {
        const i = await l.followUser(n.id);
        _(i);

        if (i === "following" && n.stats) {
          const w = n.stats.followers + 1;

          d((l) =>
            l && l.stats ? { ...l, stats: { ...l.stats, followers: w } } : l
          );

          if (n.username) {
            p.updateProfileCache(n.username, {
              stats: { ...n.stats, followers: w },
            });
          }
        }
      } catch (i) {
        console.error("Failed to follow:", i);
      } finally {
        oe(false);
      }
    }
  }, [n, ee]);

  const ke = q(async () => {
    if (!(!n || ee)) {
      oe(true);
      try {
        await l.unfollowUser(n.id);
        _("none");

        if (v && n.stats) {
          const i = n.stats.followers - 1;

          d((w) =>
            w && w.stats ? { ...w, stats: { ...w.stats, followers: i } } : w
          );

          if (n.username) {
            p.updateProfileCache(n.username, {
              stats: { ...n.stats, followers: i },
            });
          }
        }
      } catch (i) {
        console.error("Failed to unfollow:", i);
      } finally {
        oe(false);
      }
    }
  }, [n, v, ee]);

  const Ee = q(async () => {
    if (v || k) {
      await ke();
    } else {
      await Ce();
    }
  }, [v, k, Ce, ke]);

  const De = q(() => {
    if (n && !x) {
      if (P === "posts" && S) {
        E(n.username || n.id, n.pinnedPostId, S);
      } else if (P === "likes" && F && !$) {
        G(n.id, F);
      }
    }
  }, [n, P, S, F, x, $, E, G]);

  const ze = q(
    async (i) => {
      if (!n) {
        return;
      }
      const w = n.pinnedPostId === i;
      const H = { ...n, pinnedPostId: w || i };
      d(H);

      if (o) {
        r(H);
      }

      try {
        if (w) {
          await p.unpinPost(i);
        } else {
          await p.pinPost(i);
        }
      } catch (Z) {
        d(n);

        if (o) {
          r(n);
        }

        console.error("Failed to pin/unpin post:", Z);
      }
    },
    [n, o, r]
  );

  const Ue = q(async () => {
    if (n) {
      H.invalidateWallCache(n.username || n.id);
      await E(n.username || n.id, n.pinnedPostId);
    }
  }, [n, E]);

  const je = q(
    (i) => {
      m((w) => w.filter((l) => l.id !== i));

      z((w) => w.filter((l) => l.id !== i));

      if (n) {
        H.removePostFromWallCache(n.username || n.id, i);
      }
    },
    [n]
  );

  const We = q((i) => {
    B(i);
  }, []);

  const Ve = q(async () => {
    if (!(!n || s || s || u)) {
      T(true);
      try {
        if (se) {
          await l.unblockUser(n.id);
          K(false);
          E.success("Пользователь разблокирован");
        } else {
          await l.blockUser(n.id);
          K(true);
          E.success("Пользователь заблокирован");
          v && _("none");
        }

        if (n.username) {
          p.invalidateProfileCache(n.username);
        }
      } catch (i) {
        console.error("Failed to toggle block:", i);
        E.error("Не удалось выполнить действие");
      } finally {
        T(false);
      }
    }
  }, [n, se, s, u, v]);

  const Oe = q(
    (i) => {
      d((w) => (w ? { ...w, banner: i } : null));

      if (o) {
        r({ ...o, banner: i });
      }
    },
    [o, r]
  );

  const qe = P === "posts" ? g : W;
  const _e = P === "posts" ? x : $;
  const He = P === "posts" ? S : F;
  const Ze = n?.interaction?.isFollowedBy ?? false;
  const Ke = n?.interaction?.isBlockedBy ?? false;
  return {
    profile: n,
    loading: a,
    error: R,
    posts: qe,
    postsLoading: _e,
    nextCursor: He,
    isOwnProfile: u,
    isFollowing: v,
    isFollowedBy: Ze,
    isBlockedBy: Ke,
    isRequested: k,
    isFollowLoading: ee,
    handleToggleFollow: Ee,
    handleFollow: Ce,
    handleUnfollow: ke,
    handleLoadMore: De,
    handlePinPost: ze,
    refreshPosts: Ue,
    removePost: je,
    activeTab: P,
    handleTabChange: We,
    likesError: U,
    hasLoadedLikes: X,
    updateBanner: Oe,
    isBlocked: se,
    handleBlockUser: Ve,
  };
}

export const Profile = ({ username: t }) => {
  const o = s_1();
  const c = J();
  const { openModal: r, closeModal: n } = a();

  const d = c((A) => A.createPost);

  const {
    profile: a,
    loading: N,
    error: R,
    posts: b,
    postsLoading: P,
    nextCursor: B,
    isOwnProfile: g,
    isFollowing: m,
    isFollowedBy: x,
    isBlockedBy: D,
    isRequested: S,
    isFollowLoading: C,
    isBlocked: W,
    handleFollow: z,
    handleUnfollow: $,
    handleBlockUser: V,
    handleLoadMore: F,
    handlePinPost: J,
    refreshPosts: X,
    removePost: p,
    activeTab: U,
    handleTabChange: O,
    likesError: ae,
    updateBanner: _,
  } = vs({ username: t });

  const ee = q(() => {
    if (m || S) {
      r(
        u(K, {
          displayName: a?.displayName ?? "",
          onConfirm: $,
          onClose: n,
        })
      );
    } else {
      z();
    }
  }, [m, S, a?.displayName, z, $, r, n]);

  const oe = () => {
    r(u(Wn, { onClose: n }));
  };

  const se = q(() => {
    if (a) {
      r(u(Me, { userId: a.id, type: "followers", title: "Подписчики" }));
    }
  }, [a, r]);

  const K = q(() => {
    if (a) {
      r(u(Me, { userId: a.id, type: "following", title: "Подписки" }));
    }
  }, [a, r]);

  const s = async (A, Y, q, fe) => {
    if (a) {
      await d(a.id, A, Y, q, fe);
      X();
    }
  };

  const T = q(() => {
    if (a) {
      r(
        u(xn, {
          wallOwnerId: a.id,
          placeholder: `Написать на стене ${a.displayName}`,
          onPostCreated: X,
        })
      );
    }
  }, [a, r, X]);

  const u = T(() => {
    if (U !== "posts" || !a?.pinnedPostId) {
      return b;
    }
    const A = b.find((Y) => Y.id === a.pinnedPostId);
    return A ? [A, ...b.filter((Y) => Y.id !== a.pinnedPostId)] : b;
  }, [b, a?.pinnedPostId, U]);

  const v = T(() => {
    if (!c) {
      return false;
    }
    if (g) {
      return true;
    }
    if (W || D) {
      return false;
    }
    switch (a?.privacySettings?.whoCanPostOnWall) {
      case "everyone": {
        return true;
      }
      case "followers": {
        return m;
      }
      case "mutual": {
        return m && x;
      }
      default: {
        return false;
      }
    }
  }, [c, g, W, D, a?.privacySettings?.whoCanPostOnWall, m, x]);

  const k = g || a?.privacySettings?.whoCanSeeMyPostReactions === "everyone";

  const E = T(() => {
    const A = ["Стена"];

    if (k) {
      A.push("Лайки");
    }

    return A;
  }, [k]);

  const G = q(
    (A) => {
      O(k ? (A === 0 ? "posts" : "likes") : "posts");
    },
    [O, k]
  );

  return N
    ? null
    : R || !a
    ? u("div", {
        className: f.page,
        children: u("div", {
          className: f.error,
          children: R || "Профиль не найден",
        }),
      })
    : u("div", {
        className: f.page,
        children: [
          u(gs, {
            profile: a,
            isOwnProfile: g,
            isFollowing: m,
            isRequested: S,
            isFollowLoading: C,
            isBlocked: W,
            isFollowedBy: x,
            isPhone: o,
            onEditProfile: oe,
            onToggleFollow: ee,
            onBlockUser: V,
            onFollowersClick: se,
            onFollowingClick: K,
            onBannerUpdate: _,
          }),
          u("div", {
            className: f.tabsWrapper,
            children: u(O, {
              className: f.tabs,
              tabs: E,
              activeIndex: U === "posts" ? 0 : 1,
              onChange: G,
            }),
          }),
          v &&
            u(k, {
              children: [
                u("div", {
                  className: f.createPostWrapper,
                  children: [
                    u(n, {
                      src: a.avatar ?? "",
                      alt: a.displayName,
                      size: "sm",
                    }),
                    u(C, {
                      onSubmit: s,
                      placeholder: g
                        ? "Что нового?"
                        : `Написать на стене ${a.displayName}`,
                    }),
                  ],
                }),
                u(B, {
                  variant: "secondary",
                  className: f.writePostButton,
                  onClick: T,
                  children: "Написать на стене",
                }),
              ],
            }),
          W
            ? u("div", {
                className: f.emptyPosts,
                children: "Вы заблокировали этого пользователя",
              })
            : ae
            ? u("div", { className: f.emptyPosts, children: ae })
            : u.length > 0
            ? u(V, {
                posts: u,
                renderPost: (A, Y, q) =>
                  u(Q_1, {
                    post: A,
                    isOnOwnProfile: g && U === "posts",
                    isPinned: U === "posts" && a?.pinnedPostId === A.id,
                    isHighlighted: q,
                    onPin: g && U === "posts" ? J : undefined,
                    onDelete: U === "posts" ? p : undefined,
                  }),
                hasMore: !!B,
                isLoadingMore: P,
                onLoadMore: F,
              })
            : P && u.length === 0
            ? u(m, {})
            : u("div", {
                className: f.emptyPosts,
                children: U === "posts" ? "Нет постов" : "Нет лайков",
              }),
        ],
      });
};

export { Profile as Profile };
