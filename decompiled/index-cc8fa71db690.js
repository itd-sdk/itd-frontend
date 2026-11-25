import { K, d, A, h, aK, aL, u, aB, af, aq, aG, ax } from "./index-4cbec7521f6a.js";
import { s as s_1 } from "./searchApi-a5d05e5dc3eb.js";
import { G } from "./index-19ab57e644d2.js";
import "./usePurchaseDialog-55b835101282.js";
const ee = "jIt5";
const te = "cIvz";
const se = "jH2y";
const re = "slsy";
const ae = "ZNNt";
const ie = "WD2q";
const ne = "ZoYG";
const le = "XHC2";
const ce = "R6Wy";
const oe = "xqZ6";
const ue = "HP0v";
const de = "eTac";
const he = "JQJI";
const pe = "KWRf";
const fe = "NSSq";
const me = "F06P";

const s = {
  modal: ee,
  info: te,
  picker: se,
  stage: re,
  glow: ae,
  pin: ie,
  sparkles: ne,
  capsule: le,
  skeleton: ce,
  features: oe,
  primary: ue,
  secondary: de,
  retry: he,
  person: pe,
  results: fe,
  subscriptionStatus: me,
};

const ye = c => c % 10 >= 2 && c % 10 <= 4 && (c % 100 < 12 || c % 100 > 14)
  ? "раза"
  : "раз";

const ve = "У пользователя уже есть подписка. Подарить ещё одну нельзя.";

export function default({ userId, name, image, onClose }) {
  const n = K(t => t.profile?.id);

  const [l, T] = d(null);
  const [U, w] = d(0);
  const [$, A] = d(false);
  const [x, L] = d(0);
  const [p, q] = d("info");
  const [f, B] = d("");
  const [C, m] = d([]);
  const [F, N] = d(false);
  const [D, G] = d(false);
  const [E, H] = d(null);
  const [I, k] = d(false);
  const [K, g] = d(false);
  const o = A(null);

  h(() => {
    let t = true;
    A(false);

    aK(userId)
      .then((r) => {
      if (t) {
        T(r);
      }
    })
      .catch(() => {
      if (t) {
        A(true);
      }
    });

    return () => {
      t = false;
    };
  }, [userId, x]);

  h(() => {
    if (l === null) {
      return;
    }
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      w(l);
      return;
    }
    let t = 0;
    const r = performance.now();

    const u = (h) => {
      const d = Math.min(1, (h - r) / 650);
      w(Math.round(l * (1 - (1 - d) ** 3)));

      if (d < 1) {
        (t = requestAnimationFrame(u));
      }
    };

    (t = requestAnimationFrame(u));

    return () => cancelAnimationFrame(t);
  }, [l]);

  h(() => {
    m([]);
    G(false);
    k(false);
    g(false);
    const t = f.trim();
    if (p !== "pick" || !n || t.length < 2) {
      N(false);
      return;
    }
    let r = true;
    N(true);
    const u = setTimeout(() => {
      s_1.globalSearch(t.slice(0, 100), 20, 1)
        .then((h) => {
        if (r) {
          m(
            h.users.filter((d) => {
              const i = d.userId ?? d.id;
              return (i &&
              i !== n &&
              i !== aL && i !== "00000000-0000-0000-0000-000000000000");
            })
          );
        }
      })
        .catch(() => {
        if (r) {
          G(true);
        }
      })
        .finally(() => {
        if (r) {
          N(false);
        }
      });
    }, 300);
    return () => {
      (r = false);
      (o.current = null);
      clearTimeout(u);
    };
  }, [f, p, n]);

  const P = async (t) => {
    const r = t.userId ?? t.id;
    if (!r ||
    !n ||
    r === n ||
    K.getState().profile?.id !== n ||
    t.hasNuksta ||
    o.current) {
      return;
    }
    const u = Symbol();
    const h = aG.captureRequest();

    const d = () => o.current === u && h() && K.getState().profile?.id === n;

    (o.current = u);
    k(true);
    g(false);
    try {
      const i = await ax.getProfileByUsername(r, { force: true, silent: true });
      if (!d()) {
        return;
      }
      if (i.id !== r || i.isDeleted) {
        throw new Error("Recipient unavailable");
      }
      if (i.hasNuksta === true || i.subscription?.isActive === true) {
        m(W => W.map(y => (y.userId ?? y.id) === r ? { ...y, hasNuksta: true } : y)
        );
        return;
      }
      if (i.hasNuksta !== false && i.subscription?.isActive !== false) {
        throw new Error("Unknown subscription status");
      }
      H({
        id: r,
        name: t.displayName,
        username: t.username ?? undefined,
        avatar: t.avatar,
      });
    } catch {
      if (d()) {
        g(true);
      }
    } finally {
      if (o.current === u) {
        (o.current = null);
        k(false);
      }
    }
  };
  return E
    ? u(G, { isOpen: true, recipient: E, onClose: onClose })
    : aB(
        u(aq, {
          title: p === "info" ? "Даритель НУКСТА" : "Кому подарить НУКСТА",
          onClose: onClose,
          className: s.modal,
          children:
            p === "info"
              ? u("div", {
                  className: s.info,
                  children: [
                    u("div", {
                      className: s.stage,
                      children: [
                        u("span", { className: s.glow }),
                        u("span", {
                          className: s.sparkles,
                          "aria-hidden": "true",
                          children: "✦",
                        }),
                        u("img", {
                          className: s.pin,
                          src: image,
                          alt: "Пин дарителя НУКСТА",
                          width: 150,
                          height: 150,
                        }),
                        u("div", {
                          className: s.capsule,
                          "aria-label":
                            l === null
                              ? "Загружаем число подарков"
                              : `${l} подарков НУКСТЫ`,
                          children:
                            l === null
                              ? u("span", { className: s.skeleton })
                              : U.toLocaleString("ru-RU"),
                        }),
                      ],
                    }),
                    u("h2", {
                      children:
                        l === null
                          ? `${n === userId ? "Ты" : name} — даритель НУКСТА`
                          : `${
                              n === userId ? "Ты" : name
                            } подарил НУКСТА ${l.toLocaleString("ru-RU")} ${ye(
                              l
                            )}`,
                    }),
                    $ &&
                      u("button", {
                        className: s.retry,
                        onClick: () => L(t => t + 1),
                        children: "Обновить число подарков",
                      }),
                    u("div", {
                      className: s.features,
                      children: [
                        u("h3", { children: "Что даёт НУКСТА" }),
                        u("div", {
                          children: [
                            u("span", { "aria-hidden": "true", children: "↗" }),
                            u("p", {
                              children: [
                                u("strong", { children: "Пишите кому угодно" }),
                                "С НУКСТА можно писать в личку любому, кто открыт для сообщений.",
                              ],
                            }),
                          ],
                        }),
                        u("div", {
                          children: [
                            u("span", { "aria-hidden": "true", children: "✦" }),
                            u("p", {
                              children: [
                                u("strong", { children: "Видно издалека" }),
                                "Ник с градиентом и пин рядом с именем.",
                              ],
                            }),
                          ],
                        }),
                        u("div", {
                          children: [
                            u("span", { "aria-hidden": "true", children: "♡" }),
                            u("p", {
                              children: [
                                u("strong", { children: "Подарок виден всем" }),
                                "Каждый подарок прибавляется к счётчику на пине дарителя.",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    u("button", {
                      className: s.primary,
                      disabled: !n,
                      onClick: () => q("pick"),
                      children: "Подарить НУКСТА",
                    }),
                    u("button", {
                      className: s.secondary,
                      onClick: onClose,
                      children: "Не сейчас",
                    }),
                  ],
                })
              : u("div", {
                  className: s.picker,
                  children: [
                    u("input", {
                      autoFocus: true,
                      value: f,
                      maxLength: 100,
                      placeholder: "Имя или @никнейм",
                      "aria-label": "Найти получателя подарка",
                      onInput: (t) => {
                        (o.current = null);
                        m([]);
                        B(t.currentTarget.value);
                      },
                    }),
                    u("div", {
                      className: s.results,
                      "aria-busy": F,
                      children: [
                        C.map(t => u(
                          "button",
                          {
                            type: "button",
                            className: s.person,
                            "aria-disabled": t.hasNuksta === true || I,
                            title: t.hasNuksta ? ve : undefined,
                            onClick: () => {
                              P(t);
                            },
                            children: [
                              u(af, { src: t.avatar, size: "sm" }),
                              u("span", {
                                children: [
                                  u("strong", { children: t.displayName }),
                                  u("small", { children: ["@", t.username] }),
                                  t.hasNuksta &&
                                    u("small", {
                                      className: s.subscriptionStatus,
                                      children: "Уже есть подписка",
                                    }),
                                ],
                              }),
                            ],
                          },
                          t.userId ?? t.id
                        )
                        ),
                        F
                          ? u("p", { children: "Ищем…" })
                          : D
                          ? u("p", {
                              role: "alert",
                              children:
                                "Не удалось загрузить пользователей. Попробуйте ещё раз.",
                            })
                          : f.trim().length >= 2 && !C.length
                          ? u("p", { children: "Никого не нашли" })
                          : null,
                        I &&
                          u("p", {
                            role: "status",
                            children: "Проверяем подписку…",
                          }),
                        K &&
                          u("p", {
                            role: "alert",
                            children:
                              "Не удалось проверить подписку. Попробуйте ещё раз.",
                          }),
                      ],
                    }),
                    u("button", {
                      className: s.secondary,
                      onClick: () => {
                        (o.current = null);
                        q("info");
                      },
                      children: "Назад",
                    }),
                  ],
                }),
        }),
        document.body
      );
}

export { default as default };
