import {
  K,
  aE_1 as A_1,
  h,
  aB,
  u,
  aC,
  af,
  aD,
  aq,
  aE,
  aF,
  aG,
} from "./index-4a2211963806.js";

import {
  u as u_1,
  s as a_1,
  s,
  aE as aE_1,
} from "./usePurchaseDialog-ab7fa67f9129.js";
const M = "WfaN";
const q = { cancelBtn: M };
function F({ isOpen, onClose, recipient, onSucceeded, preferCurrentPayment }) {
  const o = K((t) => t.status);

  const n = K((t) => t.profile?.id);

  const u = A_1(false);
  const m = A_1(true);
  const r = A_1(0);
  const l = `${isOpen}:${o}:${n}:${recipient.id}`;
  const f = A_1(l);
  f.current = l;

  const w = () => {
    const t = aG.captureRequest();
    const r_current = r.current;
    return () =>
      m.current &&
      !u.current &&
      f.current === l &&
      r.current === r_current &&
      t() &&
      K.getState().status === "authenticated" &&
      K.getState().profile?.id === n;
  };

  const N = () => {
    r.current++;
    u.current = true;
    onClose();
  };

  h(() => {
    r.current++;
    u.current = !isOpen;
  }, [isOpen, n, recipient.id, o]);

  h(() => {
    m.current = true;

    return () => {
      m.current = false;
    };
  }, []);

  const h = u_1({
    preferCurrentPayment: preferCurrentPayment,
    open: isOpen,
    eligible: o === "authenticated",
    ownerId: n ?? null,
    kind: "gift",
    recipientId: recipient.id,
    recipientName: recipient.name,
    recipientUsername: recipient.username,
    scopeKey: l,
    captureCurrent: w,
    onClose: N,
    onSucceeded: () => {
      aE();
      aF.success("Подписка для пользователя оформлена");
      onSucceeded?.();
      N();
    },
  });

  const $ = a_1(isOpen, `Подарить ИТД НУКСТА — ${recipient.name}`);
  return isOpen
    ? aB(
        u(aq, {
          onClose: h.dismiss,
          showHeader: false,
          frameless: true,
          className: recipient.modal,
          children: [
            u(aC, {}),
            u("div", {
              className: recipient.sub,
              ref: $,
              "data-purchase-scroll": true,
              children: [
                u("div", {
                  className: recipient.top,
                  children: [
                    u("div", {
                      className: recipient.title,
                      children: "Подарить ИТД НУКСТА",
                    }),
                    u("div", {
                      className: `${recipient.section} ${recipient.profileSection}`,
                      children: [
                        u("div", {
                          className: recipient.label,
                          children: "Подписка в подарок",
                        }),
                        u("div", {
                          className: recipient.row,
                          children: [
                            u(af, {
                              src: recipient.avatar || null,
                              size: "sm",
                            }),
                            u("div", {
                              children: [
                                u("div", {
                                  className: recipient.name,
                                  children: [
                                    u("span", {
                                      className: recipient.nameGradient,
                                      children: recipient.name,
                                    }),
                                    u("img", {
                                      src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                      alt: "НУКСТА",
                                      width: 24,
                                      height: 24,
                                      className: recipient.namePinBadge,
                                    }),
                                  ],
                                }),
                                recipient.username
                                  ? u("div", {
                                      className: recipient.dim,
                                      children: ["@", recipient.username],
                                    })
                                  : u("div", {
                                      className: recipient.dim,
                                      children: "получатель подарка",
                                    }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u("img", {
                  src: "/assets/nuksta/purchase-20261118.webp",
                  alt: "",
                  width: 960,
                  height: 683,
                  decoding: "async",
                  className: recipient.promoImage,
                }),
                u("div", {
                  className: recipient.bottom,
                  children: [
                    u("div", {
                      className: recipient.section,
                      children: [
                        u("div", {
                          className: recipient.labelRow,
                          children: u("span", {
                            className: recipient.label,
                            children: "Что получит пользователь",
                          }),
                        }),
                        u("div", {
                          className: recipient.features,
                          children: [
                            u("div", {
                              className: recipient.row,
                              children: [
                                u("span", {
                                  className: recipient.icon,
                                  children: u(aD, { size: 20 }),
                                }),
                                u("div", {
                                  className: recipient.featureTitle,
                                  children:
                                    "Доступ к отправке личных сообщений",
                                }),
                              ],
                            }),
                            u("div", {
                              className: recipient.row,
                              children: [
                                u("span", {
                                  className: recipient.icon,
                                  children: u("div", {
                                    className: recipient.iconGradient,
                                  }),
                                }),
                                u("div", {
                                  className: `${recipient.featureTitle} ${recipient.gradientText}`,
                                  children: "Уникальный цвет ника",
                                }),
                              ],
                            }),
                            u("div", {
                              className: recipient.row,
                              children: [
                                u("span", {
                                  className: recipient.icon,
                                  children: u("img", {
                                    src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                    alt: "Пин поддерживателя",
                                    width: 20,
                                    height: 20,
                                  }),
                                }),
                                u("div", {
                                  className: recipient.featureTitle,
                                  children: "Пин поддерживателя",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    u("div", {
                      className: recipient.footer,
                      children: [
                        u(aE_1, { ...h.panel }),
                        u("button", {
                          type: "button",
                          className: q.cancelBtn,
                          onClick: h.dismiss,
                          children: "Закрыть",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        document.body
      )
    : null;
}
export { F as af };
