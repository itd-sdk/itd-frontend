import {
  u,
  ax as A_1,
  d,
  q,
  b0,
  h,
  a$,
  ar,
  aD,
  B,
  bA,
  av,
  $ as $_1,
  ax,
  aF as G,
  bB as oe,
  K as J,
  as as ae,
  aM as ie,
  ah as W,
  af as _,
  ag as D,
  b8 as K,
  aq as P,
  ab as re,
  bF as UnfollowConfirmModal,
  bC as mn,
  bD as pn,
  bE as hn,
} from "./index-4cbec7521f6a.js";

import { I as le } from "./IconCheck-18104bfe423e.js";
import { I as ce } from "./IconCheckCircle-d3d53d83fefe.js";

const de = ({ size = 48 }) =>
  u("svg", {
    width: size,
    height: size,
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
  });

const ue = ({ size = 48 }) =>
  u("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("circle", { cx: "12", cy: "12", r: "10" }),
      u("polyline", { points: "12 6 12 12 16 14" }),
    ],
  });

function me(t, r) {
  const v = A_1(null);
  const u = `${t || "me"}-${r}`;
  const [k, d] = d([]);
  const [I, S] = d(true);
  const [M, y] = d(false);
  const [w, b] = d(null);
  const [p, h] = d(new Map());
  const [g, m] = d(new Set());
  const x = A_1(null);

  if (v.current !== u) {
    v.current = u;
    d([]);
    S(true);
    b(null);
    h(new Map());
    m(new Set());
  }

  const F = q(
    async (c) => {
      const N = !c;

      if (N) {
        S(true);
      } else {
        y(true);
      }

      try {
        let o;
        switch (r) {
          case "followers": {
            if (!t) {
              throw new Error("userId required for followers");
            }
            o = await b0.getFollowers(t, { limit: 20, cursor: c });
            break;
          }
          case "following": {
            if (!t) {
              throw new Error("userId required for following");
            }
            o = await b0.getFollowing(t, { limit: 20, cursor: c });
            break;
          }
          case "pending-incoming":
          case "pending-outgoing": {
            o = { data: [], nextCursor: null };
            break;
          }
        }
        const C = (n) => {
          const l = new Map();
          for (const a of n) {
            if (a.interaction.isFollowing) {
              l.set(a.userId, "following");
            } else if (a.interaction.hasOutgoingRequest) {
              l.set(a.userId, "requested");
            } else {
              l.set(a.userId, null);
            }
          }
          return l;
        };

        if (N) {
          d(o.data);
          h(C(o.data));
        } else {
          d((n) => {
            const l = new Set(n.map((a) => a.userId));
            return [...n, ...o.data.filter((a) => !l.has(a.userId))];
          });

          h((n) => {
            const l = new Map(n);
            for (const a of o.data) {
              if (!l.has(a.userId)) {
                if (a.interaction.isFollowing) {
                  l.set(a.userId, "following");
                } else if (a.interaction.hasOutgoingRequest) {
                  l.set(a.userId, "requested");
                } else {
                  l.set(a.userId, null);
                }
              }
            }
            return l;
          });
        }

        b(o.nextCursor);
      } catch (o) {
        console.error("Failed to fetch users:", o);
      } finally {
        S(false);
        y(false);
      }
    },
    [t, r]
  );
  h(() => {
    F();
  }, [F]);
  const q = q(() => {
    if (w) {
      F(w);
    }
  }, [w, F]);
  a$({ sentinelRef: x, hasMore: !!w, isLoading: M, onLoadMore: q });
  const B = q(
    async (c, N) => {
      N.stopPropagation();

      if (!g.has(c)) {
        m((o) => new Set(o).add(c));
        try {
          const o = p.get(c);
          if (o === "following" || o === "requested") {
            await b0.unfollowUser(c);

            h((C) => {
              const n = new Map(C);
              n.set(c, null);
              return n;
            });
          } else {
            const C = await b0.followUser(c);
            h((n) => {
              const l = new Map(n);
              l.set(c, C);
              return l;
            });
          }
        } catch (o) {
          console.error("Failed to toggle follow:", o);
        } finally {
          m((o) => {
            const C = new Set(o);
            C.delete(c);
            return C;
          });
        }
      }
    },
    [p, g]
  );
  return {
    users: k,
    isLoading: I,
    isLoadingMore: M,
    nextCursor: w,
    loadMoreRef: x,
    userFollowStatus: p,
    loadingFollowIds: g,
    handleToggleFollow: B,
  };
}
function pe({ userId, name, onOpen }) {
  const u = ar()?.id;
  const [k, d] = d(false);
  const I = A_1(true);

  h(
    () => () => {
      I.current = false;
    },
    []
  );

  if (!u || u === userId) {
    return null;
  }

  const S = async () => {
    if (k) {
      return;
    }
    d(true);
    const M = ae();
    const location_pathname = location.pathname;

    const w = () =>
      I.current &&
      av(M) &&
      J.getState().profile?.id === u &&
      location.pathname === location_pathname;

    try {
      const bA_getState = bA.getState;
      let p = bA_getState().chats.find(
        (g) => g.chat_type === 0 && g.other_user_id === userId
      );
      if (!p) {
        const g = await bA_getState().loadChats();
        if (!w()) {
          return;
        }

        p = bA_getState().chats.find(
          (m) => m.chat_type === 0 && m.other_user_id === userId
        );

        if (!p && !g) {
          throw Error("Incomplete chat list");
        }
      }
      if (p) {
        onOpen();
        $_1(`/chats/${p.chat_id}`);
        return;
      }
      const h = await ax.getProfileByUsername(userId, {
        force: true,
        silent: true,
      });
      if (!w()) {
        return;
      }
      if (h.isDeleted) {
        G.error("Этот аккаунт удалён");
        return;
      }

      bA_getState().startDraft({
        id: userId,
        name: h.displayName || name,
        username: h.username || userId,
        ...oe(h.avatar),
        verified: h.isVerified || h.verified,
      });

      onOpen();
      $_1(`/chats/new/${userId}`);
    } catch {
      if (w()) {
        G.error("Не удалось открыть переписку. Попробуйте снова");
      }
    } finally {
      if (w()) {
        d(false);
      }
    }
  };
  return u(B, {
    size: "sm",
    variant: "secondary",
    iconOnly: true,
    "aria-label": `Написать ${name}`,
    title: "Написать сообщение",
    disabled: k,
    onClick: (M) => {
      M.stopPropagation();
      S();
    },
    children: u(aD, { size: 18 }),
  });
}
const he = "b1qV";
const fe = "ysn1";
const we = "krUB";
const ge = "axU2";
const ve = "oahW";
const Ne = "kbcy";
const ye = "GFTr";
const be = "ZmHr";
const ke = "u7CT";
const Ie = "TzH0";
const Se = "FgSh";
const Me = "fiSe";
const Ce = "qpZu";
const Fe = "DpBF";
const Le = "MyGX";

const s = {
  userListModal: he,
  content: fe,
  userList: we,
  userItem: ge,
  clickable: ve,
  userInfo: Ne,
  displayName: ye,
  username: be,
  followButton: ke,
  actionButtons: Ie,
  acceptButton: Se,
  rejectButton: Me,
  actionStatus: Ce,
  empty: Fe,
  loadMoreSentinel: Le,
};

function rn({ userId, type, title }) {
  const { closeModal } = ie();

  const k = J((n) => n.profile?.id);

  const {
    users,
    isLoading,
    isLoadingMore,
    nextCursor,
    loadMoreRef,
    userFollowStatus,
    loadingFollowIds,
    handleToggleFollow,
  } = me(userId, type);

  const [h, g] = users(new Map());
  const [m, x] = users(new Set());
  const F = type === "pending-incoming";
  const q = type === "pending-outgoing";

  const B = q(
    (n) => {
      if (n) {
        closeModal();
        $_1(`/@${n}`);
      }
    },
    [closeModal]
  );

  const c = q(
    async (n, l) => {
      l.stopPropagation();

      if (!m.has(n)) {
        console.warn("acceptFollowRequest not implemented in old backend");
      }
    },
    [m]
  );

  const N = q(
    async (n, l) => {
      l.stopPropagation();

      if (!m.has(n)) {
        console.warn("removeFollower not implemented in old backend");
      }
    },
    [m]
  );

  const o = q(
    async (n, l) => {
      l.stopPropagation();

      if (!m.has(n)) {
        x((a) => new Set(a).add(n));
        try {
          await b0.unfollowUser(n);

          g((a) => {
            const L = new Map(a);
            L.set(n, "rejected");
            return L;
          });
        } catch (a) {
          console.error("Failed to cancel follow request:", a);
        } finally {
          x((a) => {
            const L = new Set(a);
            L.delete(n);
            return L;
          });
        }
      }
    },
    [m]
  );

  const C = () => {
    switch (type) {
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

  return closeModal(P, {
    onClose: closeModal,
    title: title,
    className: s.userListModal,
    children: closeModal("div", {
      className: s.content,
      children: isLoading
        ? closeModal(W, {})
        : users.length === 0
        ? closeModal("div", { className: s.empty, children: C() })
        : closeModal("div", {
            className: s.userList,
            children: [
              users.map((n) => {
                const l = userFollowStatus.get(n.userId);
                const a = l === "following";
                const L = l === "requested";
                const X = loadingFollowIds.has(n.userId);
                const Z = n.userId === k;
                const E = h.get(n.userId);
                const O = m.has(n.userId);

                const Y = () =>
                  a ? "Отписаться" : L ? "Отменить" : "Подписаться";

                if (F) {
                  return closeModal(
                    "div",
                    {
                      className: `${s.userItem} ${
                        n.username ? s.clickable : ""
                      }`,
                      onClick: () => B(n.username),
                      children: [
                        closeModal(_, {
                          src: n.avatar,
                          size: "md",
                          halloween: n.halloween,
                        }),
                        closeModal("div", {
                          className: s.userInfo,
                          children: [
                            closeModal(D, {
                              userId: n.userId,
                              halloween: n.halloween,
                              name: n.displayName,
                              verified: n.isVerified,
                              pin: n.pin,
                              size: "md",
                              className: s.displayName,
                            }),
                            n.username &&
                              closeModal("span", {
                                className: s.username,
                                children: ["@", n.username],
                              }),
                          ],
                        }),
                        E === "accepted"
                          ? closeModal("span", {
                              className: s.actionStatus,
                              children: "Принято",
                            })
                          : E === "rejected"
                          ? closeModal("span", {
                              className: s.actionStatus,
                              children: "Отклонено",
                            })
                          : closeModal("div", {
                              className: s.actionButtons,
                              children: [
                                closeModal(B, {
                                  size: "sm",
                                  variant: "primary",
                                  disabled: O,
                                  onClick: (R) => c(n.userId, R),
                                  className: s.acceptButton,
                                  children: closeModal(le, { size: 16 }),
                                }),
                                closeModal(B, {
                                  size: "sm",
                                  variant: "secondary",
                                  disabled: O,
                                  onClick: (R) => N(n.userId, R),
                                  className: s.rejectButton,
                                  children: closeModal(K, { size: 16 }),
                                }),
                              ],
                            }),
                      ],
                    },
                    n.userId
                  );
                }

                if (q) {
                  return closeModal(
                    "div",
                    {
                      className: `${s.userItem} ${
                        n.username ? s.clickable : ""
                      }`,
                      onClick: () => B(n.username),
                      children: [
                        closeModal(_, {
                          src: n.avatar,
                          size: "md",
                          halloween: n.halloween,
                        }),
                        closeModal("div", {
                          className: s.userInfo,
                          children: [
                            closeModal(D, {
                              userId: n.userId,
                              halloween: n.halloween,
                              name: n.displayName,
                              verified: n.isVerified,
                              pin: n.pin,
                              size: "md",
                              className: s.displayName,
                            }),
                            n.username &&
                              closeModal("span", {
                                className: s.username,
                                children: ["@", n.username],
                              }),
                          ],
                        }),
                        E === "rejected"
                          ? closeModal("span", {
                              className: s.actionStatus,
                              children: "Отменено",
                            })
                          : closeModal(B, {
                              size: "sm",
                              variant: "secondary",
                              disabled: O,
                              onClick: (R) => o(n.userId, R),
                              className: s.followButton,
                              children: "Отменить",
                            }),
                      ],
                    },
                    n.userId
                  );
                }

                return closeModal(
                  "div",
                  {
                    className: `${s.userItem} ${n.username ? s.clickable : ""}`,
                    onClick: () => B(n.username),
                    children: [
                      closeModal(_, {
                        src: n.avatar,
                        size: "md",
                        halloween: n.halloween,
                      }),
                      closeModal("div", {
                        className: s.userInfo,
                        children: [
                          closeModal(D, {
                            userId: n.userId,
                            halloween: n.halloween,
                            name: n.displayName,
                            verified: n.isVerified,
                            pin: n.pin,
                            size: "md",
                            className: s.displayName,
                          }),
                          n.username &&
                            closeModal("span", {
                              className: s.username,
                              children: ["@", n.username],
                            }),
                        ],
                      }),
                      !Z &&
                        closeModal(pe, {
                          userId: n.userId,
                          name: n.displayName,
                          onOpen: () => closeModal(),
                        }),
                      !Z &&
                        closeModal(B, {
                          size: "sm",
                          variant: a || L ? "secondary" : "primary",
                          disabled: X,
                          onClick: (R) => handleToggleFollow(n.userId, R),
                          className: s.followButton,
                          children: Y(),
                        }),
                    ],
                  },
                  n.userId
                );
              }),
              nextCursor &&
                closeModal("div", {
                  ref: loadMoreRef,
                  className: s.loadMoreSentinel,
                  children: isLoadingMore && closeModal(W, { size: "sm" }),
                }),
            ],
          }),
    }),
  });
}
const ze = "EsWK";
const xe = "ryLK";
const Be = "I6Jy";
const Re = "ZJNN";
const je = "gi9h";
const $ = { checkbox: ze, disabled: xe, input: Be, checkmark: Re, label: je };
function qe({ checked, onChange, label, disabled = false, className = "" }) {
  const d = (I) => {
    onChange(I.target.checked);
  };
  return disabled("label", {
    className: `${$.checkbox} ${disabled ? $.disabled : ""} ${className}`,
    children: [
      disabled("input", {
        type: "checkbox",
        checked: checked,
        onChange: d,
        disabled: disabled,
        className: $.input,
      }),
      disabled("span", { className: $.checkmark }),
      label && disabled("span", { className: $.label, children: label }),
    ],
  });
}
const $e = "Zdww";
const Ue = "NDTF";
const Ae = "eLV9";
const Pe = "h3dE";
const Ve = "bJfd";
const Te = "bUpe";
const Ee = "CZSo";
const Oe = "zk9w";
const _e = "GCOZ";
const De = "p4Xa";
const He = "UJCF";
const We = "b82P";
const Ze = "NSnP";
const Ge = "N0Sc";
const Je = "WiGn";
const Ke = "edLg";
const Xe = "fV6W";
const Ye = "FjCN";
const Qe = "fH2S";
const en = "jY01";

const i = {
  modal: $e,
  content: Ue,
  statusIcon: Ae,
  title: Pe,
  description: Ve,
  rejectionNotice: Te,
  rejectionTitle: Ee,
  rejectionReason: Oe,
  fileInput: _e,
  dropzone: De,
  dropzoneIcon: He,
  dropzoneText: We,
  dropzoneHint: Ze,
  preview: Ge,
  video: Je,
  removeButton: Ke,
  error: Xe,
  progressBar: Ye,
  progressFill: Qe,
  actions: en,
};

const nn = 50 * 1024 * 1024;
const tn = ["video/mp4", "video/webm", "video/quicktime"];
function ln({ onClose }) {
  const [r, v] = d("loading");
  const [u, k] = d(null);
  const [d, I] = d(null);
  const [S, M] = d(false);
  const [y, w] = d(false);
  const [b, p] = d(null);
  const [h, g] = d(0);
  const m = A_1(null);

  h(() => {
    (async () => {
      try {
        const N = await ax.getVerificationStatus();
        v(N);
      } catch (N) {
        console.error("Failed to load verification status:", N);
        v(null);
      }
    })();
  }, []);

  h(
    () => () => {
      if (d) {
        URL.revokeObjectURL(d);
      }
    },
    [d]
  );

  const x = (c) => {
    const o = c.target.files?.[0];
    if (o) {
      p(null);

      if (!tn.includes(o.type)) {
        p("Поддерживаются только форматы MP4, WebM и MOV");
        return;
      }

      if (o.size > nn) {
        p("Размер видео не должен превышать 50 МБ");
        return;
      }

      if (d) {
        URL.revokeObjectURL(d);
      }

      k(o);
      I(URL.createObjectURL(o));
    }
  };

  const F = () => {
    m.current?.click();
  };

  const q = () => {
    if (d) {
      URL.revokeObjectURL(d);
    }

    k(null);
    I(null);

    if (m.current) {
      m.current.value = "";
    }
  };

  const B = async () => {
    if (!(!u || !S)) {
      w(true);
      p(null);
      g(0);
      try {
        g(30);
        const c = await re.uploadMedia(u);
        g(70);
        await ax.submitVerificationRequest(c.url);
        g(100);
        const N = await ax.getVerificationStatus();
        v(N);
      } catch (c) {
        console.error("Failed to submit verification request:", c);
        p("Не удалось отправить заявку. Попробуйте позже.");
      } finally {
        w(false);
      }
    }
  };

  if (r === "loading") {
    return u(P, {
      onClose: onClose,
      showHeader: false,
      className: i.modal,
      children: u("div", { className: i.content, children: u(W, {}) }),
    });
  }

  if (
    r &&
    typeof r == "object" &&
    (r.status === "pending" || r.status === "approved")
  ) {
    return u(P, {
      onClose: onClose,
      showHeader: false,
      className: i.modal,
      children: u("div", {
        className: i.content,
        children: [
          u("div", {
            className: i.statusIcon,
            children:
              r.status === "approved"
                ? u(ce, { size: 48 })
                : u(ue, { size: 48 }),
          }),
          u("h2", {
            className: i.title,
            children:
              r.status === "approved"
                ? "Вы верифицированы!"
                : "Заявка на рассмотрении",
          }),
          u("p", {
            className: i.description,
            children:
              r.status === "approved"
                ? "Поздравляем! Ваш аккаунт верифицирован."
                : "Ваша заявка на верификацию находится на рассмотрении. Мы уведомим вас о результате.",
          }),
          u("div", {
            className: i.actions,
            children: u(B, {
              variant: "primary",
              onClick: () => onClose(),
              children: "Понятно",
            }),
          }),
        ],
      }),
    });
  }

  return u(P, {
    onClose: onClose,
    showHeader: false,
    className: i.modal,
    children: u("div", {
      className: i.content,
      children: [
        u("h2", { className: i.title, children: "Верификация" }),
        u("p", {
          className: i.description,
          children:
            "Запишите видео, в котором объясните, почему вам нужна галочка и без неё никак.",
        }),
        r?.status === "rejected" &&
          u("div", {
            className: i.rejectionNotice,
            children: [
              u("span", {
                className: i.rejectionTitle,
                children: "Предыдущая заявка отклонена",
              }),
              r.reason &&
                u("span", {
                  className: i.rejectionReason,
                  children: r.reason,
                }),
            ],
          }),
        u("input", {
          ref: m,
          type: "file",
          accept: "video/mp4,video/webm,video/quicktime,.mp4,.webm,.mov",
          onChange: x,
          className: i.fileInput,
        }),
        u
          ? u("div", {
              className: i.preview,
              children: [
                u("video", { src: d, controls: true, className: i.video }),
                u("button", {
                  className: i.removeButton,
                  onClick: q,
                  type: "button",
                  children: u(K, { size: 20 }),
                }),
              ],
            })
          : u("div", {
              className: i.dropzone,
              onClick: F,
              children: [
                u("div", {
                  className: i.dropzoneIcon,
                  children: u(de, { size: 48 }),
                }),
                u("span", {
                  className: i.dropzoneText,
                  children: "Нажмите, чтобы выбрать видео",
                }),
                u("span", {
                  className: i.dropzoneHint,
                  children: "MP4, WebM или MOV, до 50 МБ",
                }),
              ],
            }),
        b && u("div", { className: i.error, children: b }),
        y &&
          u("div", {
            className: i.progressBar,
            children: u("div", {
              className: i.progressFill,
              style: { width: `${h}%` },
            }),
          }),
        u(qe, {
          checked: S,
          onChange: M,
          disabled: y,
          label:
            "Я соглашаюсь с тем, что моё видео может быть использовано в контенте Nowkie",
        }),
        u("div", {
          className: i.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: () => onClose(),
              disabled: y,
              children: "Отмена",
            }),
            u(B, {
              variant: "primary",
              onClick: B,
              disabled: !u || !S || y,
              children: y ? "Отправка..." : "Отправить заявку",
            }),
          ],
        }),
      ],
    }),
  });
}
export {
  UnfollowConfirmModal as UnfollowConfirmModal,
  rn as UserListModal,
  ln as VerificationModal,
  ax as profileApi,
  b0 as socialApi,
  mn as useFollowStatus,
  pn as useFollowStatusStore,
  hn as useFollowUser,
  me as useUserList,
};
