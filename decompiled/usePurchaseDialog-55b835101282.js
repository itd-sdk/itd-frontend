import {
  u,
  br,
  S,
  ah,
  d,
  A,
  h,
  bs,
  bh,
  bt as me,
  bu as Be,
  bv as Ie,
  bw as qe,
  bx as Me,
  by as xe,
  bz as Ee,
} from "./index-4cbec7521f6a.js";

const Te = "frCA";
const Ue = "EW7z";
const $e = "Txb0";
const _e = "Crwp";
const Le = "g3zU";
const Oe = "aI4d";
const Ke = "u02N";
const De = "gxdw";
const Ve = "fLtI";
const Fe = "ZHHM";
const ze = "pJWi";
const Ge = "HKn8";
const Qe = "DAd6";
const je = "Ezhw";
const He = "yKIs";
const Ye = "g5tX";
const We = "tVeC";
const Xe = "iTjh";
const Je = "sbIn";
const Ze = "NvAe";
const et = "okl4";
const tt = "LQYr";
const nt = "xrgi";
const rt = "za1l";
const at = "XKS4";
const it = "kKvZ";
const st = "m8bD";
const ot = "jiuO";

const ct = {
  modal: Te,
  sub: Ue,
  top: $e,
  bottom: _e,
  title: Le,
  section: Oe,
  profileSection: Ke,
  label: De,
  labelRow: Ve,
  dim: Fe,
  row: ze,
  icon: Ge,
  iconGradient: Qe,
  name: je,
  nameGradient: He,
  namePinBadge: Ye,
  promoImage: We,
  features: Xe,
  featureContent: Je,
  featureTitle: Ze,
  gradientText: et,
  soon: tt,
  infoBtn: nt,
  footer: rt,
  methodSelectRow: at,
  methodSelectLabel: it,
  methodSelect: st,
  subscribeBtn: ot,
};

const lt = "XlU0";
const ut = "MhTR";
const dt = "ib0h";
const mt = "UUeS";
const ft = "CrhA";
const ht = "NiKx";
const gt = "qSAJ";
const wt = "QQng";
const yt = "rCAL";
const bt = "w14r";
const vt = "O2iD";
const pt = "OlXw";
const St = "iynT";
const Rt = "BQgo";
const kt = "JVZH";
const Nt = "wUz6";
const At = "cytC";
const Ct = "QeTv";
const Pt = "F3c8";
const Bt = "ypx2";
const It = "pCdt";

const o = {
  panel: lt,
  stage: ut,
  heading: dt,
  back: mt,
  primary: ft,
  secondary: ht,
  reselect: gt,
  terms: wt,
  term: yt,
  consent: bt,
  selected: vt,
  amount: pt,
  summary: St,
  recipient: Rt,
  notice: kt,
  message: Nt,
  legal: At,
  textButton: Ct,
  loading: Pt,
  expiry: Bt,
  srOnly: It,
};

const H = (e) =>
  `${new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 })
    .format(e / 100)
    .replace(/[\u00a0\u202f]/g, " ")} ₽`;

const ee = (e) => `${e} ${e === 1 ? "месяц" : e === 3 ? "месяца" : "месяцев"}`;

const fe = (e) => Number.isSafeInteger(e) && e > 0;

export function P(e) {
  const { step, kind, quote } = e;
  const c = !!e.onReturnToPending;
  const w =
    e.stageBePaidAvailable === true || (c && e.providerLabel === "bePaid");
  const U = step === "creating" || step === "resolving";
  const g = e.canEditTerms && e.canStartNewAttempt && !U && !c;

  const P =
    quote &&
    e.offers.some(
      (l) =>
        l.months === quote.months &&
        l.initialAmountMinor === quote.initialAmountMinor &&
        l.quoteVersion === quote.quoteVersion
    );

  const R =
    step === "terms" &&
    g &&
    quote &&
    quote.months === e.months &&
    quote.currency === "RUB" &&
    fe(quote.initialAmountMinor) &&
    P;

  const f = kind === "self" && e.canOfferAutoRenewal && !e.agreement.enabled;

  const i =
    step === "routes"
      ? "Способ оплаты"
      : step === "terms" || step === "internationalTerms"
      ? "Срок подписки"
      : null;

  const $ = e.stageBePaidOffers?.find(
    (l) => l.months === e.selectedStageMonths
  );

  const e_usdRate = e.usdRate;

  const k = (l, A) =>
    e.usdRatePending ? "Загружаем цену…" : br(l, e_usdRate, A);

  const r = `${ct.subscribeBtn} ${o.primary}`;

  const v =
    quote && fe(quote.initialAmountMinor)
      ? quote("div", {
          className: o.summary,
          children: [
            kind === "gift" &&
              e.recipientName &&
              quote("div", {
                className: o.recipient,
                children: ["Подарок для ", e.recipientName],
              }),
            quote("div", {
              children: [
                "НУКСТА · ",
                ee(quote.months),
                " · ",
                quote("strong", {
                  children:
                    quote.currency === "BYN"
                      ? k(quote.initialAmountMinor)
                      : H(quote.initialAmountMinor),
                }),
              ],
            }),
          ],
        })
      : null;

  return quote("section", {
    className: o.panel,
    "data-purchase-step": step,
    "aria-busy": U || e.internationalBusy,
    tabIndex: -1,
    ref: (l) => {
      if (!l) {
        return;
      }
      const A = l.dataset.focusedStep;
      l.dataset.focusedStep = step;

      if (!A || A === step || (A === "resolving" && step === "overview")) {
        return;
      }

      const z =
        l.querySelector("[data-purchase-heading]") ??
        l.querySelector("button:not(:disabled)") ??
        l;
      z.focus({ preventScroll: true });

      requestAnimationFrame(() => {
        if (!l.isConnected || l.dataset.focusedStep !== step) {
          return;
        }
        const B = l.closest("[data-purchase-scroll]");

        if (
          B &&
          (step === "routes" ||
            step === "terms" ||
            step === "internationalTerms")
        ) {
          B.scrollTo({
            top: B.scrollHeight,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          });
        } else {
          z.scrollIntoView({ block: "nearest" });
        }
      });
    },
    children: quote(
      "div",
      {
        className: o.stage,
        children: [
          i &&
            quote("h3", {
              className: o.heading,
              tabIndex: -1,
              "data-purchase-heading": true,
              children: i,
            }),
          step === "overview" &&
            quote("button", {
              type: "button",
              className: r,
              disabled: !g,
              onClick: () => {
                if (g) {
                  e.onBegin();
                }
              },
              children: kind === "gift" ? "Подарить" : "Купить",
            }),
          step === "routes" &&
            quote(S, {
              children: [
                quote("button", {
                  type: "button",
                  className: r,
                  disabled: !g || e.internationalBusy,
                  onClick: () => {
                    if (g && !e.internationalBusy) {
                      e.onRubles();
                    }
                  },
                  children: "Оплатить в рублях",
                }),
                w &&
                  quote("button", {
                    type: "button",
                    className: o.secondary,
                    disabled: !w || !g || e.internationalBusy,
                    onClick: () => {
                      if (w && g && !e.internationalBusy) {
                        e.onInternational();
                      }
                    },
                    children: e.internationalBusy
                      ? quote("span", {
                          className: o.loading,
                          children: [
                            quote(ah, { size: "xs" }),
                            " Открываем оплату…",
                          ],
                        })
                      : "Другие способы оплаты",
                  }),
                c &&
                  quote(S, {
                    children: [
                      quote("p", {
                        className: o.notice,
                        children:
                          "Текущий счёт ещё открыт. После его закрытия можно будет выбрать способ оплаты.",
                      }),
                      quote("button", {
                        type: "button",
                        className: o.secondary,
                        onClick: e.onCheckStatus,
                        children: "Проверить статус",
                      }),
                      quote("button", {
                        type: "button",
                        className: o.secondary,
                        onClick: e.onReturnToPending,
                        children: "К текущей оплате",
                      }),
                    ],
                  }),
                e.internationalUnavailable &&
                  quote("div", {
                    className: o.message,
                    role: "alert",
                    children: [
                      e.internationalUnavailable,
                      e.onInternationalPreview &&
                        quote("button", {
                          type: "button",
                          className: o.textButton,
                          onClick: e.onInternationalPreview,
                          children: "Информация об оплате",
                        }),
                    ],
                  }),
              ],
            }),
          step === "internationalTerms" &&
            quote(S, {
              children: [
                e.usdRatePending
                  ? quote("p", {
                      className: o.loading,
                      role: "status",
                      children: [quote(ah, { size: "xs" }), "Загружаем цены…"],
                    })
                  : quote("fieldset", {
                      className: o.terms,
                      disabled: !g || e.internationalBusy,
                      children: [
                        quote("legend", {
                          className: o.srOnly,
                          children: "Выберите срок подписки",
                        }),
                        e.stageBePaidOffers?.map((l) =>
                          quote(
                            "label",
                            {
                              className: `${o.term} ${
                                e.selectedStageMonths === l.months
                                  ? o.selected
                                  : ""
                              }`,
                              children: [
                                quote("input", {
                                  type: "radio",
                                  name: `nuksta-${kind}-bepaid-months`,
                                  checked: e.selectedStageMonths === l.months,
                                  onChange: () =>
                                    e.onStageMonthsChange?.(l.months),
                                }),
                                quote("span", { children: ee(l.months) }),
                                quote("span", {
                                  className: o.amount,
                                  children: k(l.amountMinor, l.usdAmountMinor),
                                }),
                              ],
                            },
                            l.months
                          )
                        ),
                      ],
                    }),
                kind === "self" && e.internationalRenewal && !e.usdRatePending
                  ? quote("label", {
                      className: o.consent,
                      children: [
                        quote("input", {
                          type: "checkbox",
                          checked: e.internationalAuto === true,
                          disabled: !g || e.internationalBusy,
                          onChange: (l) =>
                            e.onInternationalAutoChange?.(
                              l.currentTarget.checked
                            ),
                        }),
                        quote("span", {
                          children: [
                            "Подключить автопродление за ",
                            new Intl.NumberFormat("ru-RU", {
                              minimumFractionDigits: 2,
                            }).format(e.internationalRenewal.amountMinor / 100),
                            " BYN в месяц.",
                            " ",
                            quote("a", {
                              href: "https://xn--d1ah4a.xn--90ais/legal/recurring/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: "Условия автопродления",
                            }),
                          ],
                        }),
                      ],
                    })
                  : quote("p", {
                      className: o.notice,
                      children: "Оплата через bePaid без автопродления.",
                    }),
                e_usdRate &&
                  quote("p", {
                    className: o.notice,
                    children: "Сумма в долларах ориентировочная.",
                  }),
                quote("p", {
                  className: o.legal,
                  children: quote("a", {
                    href: "https://xn--d1ah4a.xn--90ais/legal/offer/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Публичная оферта",
                  }),
                }),
                quote("button", {
                  type: "button",
                  className: r,
                  disabled: !$ || !g || e.internationalBusy || e.usdRatePending,
                  onClick: e.onStagePay,
                  children: e.internationalBusy
                    ? quote("span", {
                        className: o.loading,
                        children: [
                          quote(ah, { size: "xs" }),
                          " Открываем оплату…",
                        ],
                      })
                    : "Перейти к оплате",
                }),
              ],
            }),
          step === "terms" &&
            quote(S, {
              children: [
                quote("fieldset", {
                  className: o.terms,
                  disabled: !g,
                  children: [
                    quote("legend", {
                      className: o.srOnly,
                      children: "Выберите срок подписки",
                    }),
                    e.offers.map((l) =>
                      quote(
                        "label",
                        {
                          className: `${o.term} ${
                            e.months === l.months ? o.selected : ""
                          }`,
                          children: [
                            quote("input", {
                              type: "radio",
                              name: `nuksta-${kind}-months`,
                              value: l.months,
                              checked: e.months === l.months,
                              onChange: () => {
                                if (g) {
                                  e.onMonthsChange(l.months);
                                }
                              },
                            }),
                            quote("span", { children: ee(l.months) }),
                            quote("span", {
                              className: o.amount,
                              children: H(l.initialAmountMinor),
                            }),
                          ],
                        },
                        l.months
                      )
                    ),
                  ],
                }),
                v,
                e.methodSelector,
                kind === "gift"
                  ? quote("p", {
                      className: o.notice,
                      children:
                        "Это разовый подарок. Автопродление не подключается",
                    })
                  : e.agreement.enabled
                  ? quote("p", {
                      className: o.notice,
                      children:
                        e.agreement.summary || "Автопродление подключено",
                    })
                  : f
                  ? quote("label", {
                      className: o.consent,
                      children: [
                        quote("input", {
                          type: "checkbox",
                          checked: e.newAutoConsent,
                          disabled: !g,
                          onChange: (l) => {
                            if (g) {
                              e.onNewAutoConsentChange(l.currentTarget.checked);
                            }
                          },
                        }),
                        quote("span", {
                          children: [
                            e.agreement.requiresNewConsent
                              ? "Подключить"
                              : "Включить",
                            " автопродление. ",
                            quote("a", {
                              href: "/recurring-terms",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: "Условия автопродления",
                            }),
                          ],
                        }),
                      ],
                    })
                  : quote("p", {
                      className: o.notice,
                      children: "Новое автопродление не подключается",
                    }),
                kind === "self" &&
                  f &&
                  e.newAutoConsent &&
                  quote &&
                  quote("p", {
                    className: o.notice,
                    children: [
                      "Далее — ",
                      H(quote.renewalAmountMinor),
                      " каждый месяц после окончания оплаченного срока. Напомним за 3 дня до окончания.",
                    ],
                  }),
                quote("p", {
                  className: o.legal,
                  children: quote("a", {
                    href: "/subscription-terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Условия платного доступа ИТД НУКСТА",
                  }),
                }),
                quote("button", {
                  type: "button",
                  className: r,
                  disabled: !R,
                  onClick: () => {
                    if (R) {
                      e.onPay();
                    }
                  },
                  children: quote
                    ? `${kind === "gift" ? "Подарить за" : "Оплатить"} ${H(
                        quote.initialAmountMinor
                      )}`
                    : "Загружаем условия…",
                }),
              ],
            }),
          step === "resolving" &&
            quote("p", {
              className: o.loading,
              role: "status",
              children: [
                quote(ah, { size: "xs" }),
                "Проверяем предыдущую оплату…",
              ],
            }),
          step === "creating" &&
            quote(S, {
              children: [
                v,
                quote("p", {
                  className: o.loading,
                  role: "status",
                  children: [
                    quote(ah, { size: "xs" }),
                    kind === "gift"
                      ? "Оформляем подарок…"
                      : "Открываем оплату…",
                  ],
                }),
              ],
            }),
          step === "pending" &&
            quote(S, {
              children: [
                v,
                e.providerLabel &&
                  quote("p", {
                    className: o.notice,
                    children: ["Оплата через ", e.providerLabel],
                  }),
                e.pendingSummary &&
                  quote("p", {
                    className: o.notice,
                    children: e.pendingSummary,
                  }),
                quote("p", {
                  className: o.notice,
                  role: "status",
                  children: "Ожидаем подтверждение оплаты",
                }),
                e.canResume === true &&
                  quote("button", {
                    type: "button",
                    className: r,
                    disabled: e.internationalBusy,
                    onClick: e.onResume,
                    children: "Продолжить оплату",
                  }),
                quote("button", {
                  type: "button",
                  className: o.secondary,
                  onClick: e.onCheckStatus,
                  children: "Проверить статус",
                }),
                e.canReselect &&
                  quote("button", {
                    type: "button",
                    className: o.reselect,
                    onClick: e.onReselect,
                    children: "Вернуться к выбору",
                  }),
                e.canSwitchStagePayment &&
                  quote("button", {
                    type: "button",
                    className: o.reselect,
                    onClick: e.onSwitchStagePayment,
                    children: "Сменить способ оплаты",
                  }),
                quote("p", {
                  className: o.notice,
                  children:
                    "Закрытие окна не отменяет платёж. Повторно оплачивать не нужно.",
                }),
              ],
            }),
          step === "reviewRequired" &&
            quote(S, {
              children: [
                v,
                e.canRestartStageBePaid
                  ? quote(S, {
                      children: [
                        quote("p", {
                          className: o.notice,
                          role: "status",
                          children:
                            "Оплата не начиналась. Можно вернуться к выбору.",
                        }),
                        quote("button", {
                          type: "button",
                          className: r,
                          onClick: e.onRestartStageBePaid,
                          children: "Начать заново",
                        }),
                      ],
                    })
                  : quote("p", {
                      className: o.message,
                      role: "alert",
                      children:
                        "Статус оплаты нужно проверить в поддержке. Повторно оплачивать не нужно.",
                    }),
              ],
            }),
          step === "active" &&
            quote("p", {
              className: o.notice,
              role: "status",
              children: [
                "Подписка активна",
                e.actualExpiryLabel &&
                  quote("span", {
                    className: o.expiry,
                    children: ["Действует до ", e.actualExpiryLabel],
                  }),
              ],
            }),
          e.error &&
            quote("div", {
              className: o.message,
              role: "alert",
              children: [
                e.error,
                (step === "resolving" || step === "terms") &&
                  quote("button", {
                    type: "button",
                    className: o.textButton,
                    onClick: e.onRetryRead,
                    children: "Повторить проверку",
                  }),
              ],
            }),
          !c &&
            (step === "routes" ||
              step === "terms" ||
              step === "internationalTerms") &&
            quote("button", {
              type: "button",
              className: o.back,
              disabled: e.internationalBusy || !g,
              onClick: () => {
                if (g && !e.internationalBusy) {
                  e.onBack();
                }
              },
              children: "Назад",
            }),
        ],
      },
      step
    ),
  });
}

const ne = new Map();

const be = (e, a) => `itd:gift-attempt:${e}:${a}`;

function qt(e, a) {
  const m = be(e, a);
  let u = ne.get(m);
  try {
    u = sessionStorage.getItem(m) ?? u;
  } catch {}

  if (!u || !/^[0-9a-f-]{36}$/i.test(u)) {
    u = crypto.randomUUID();
  }

  ne.set(m, u);
  try {
    sessionStorage.setItem(m, u);
  } catch {}
  return u;
}
function Mt(e, a) {
  const m = be(e, a);
  ne.delete(m);
  try {
    sessionStorage.removeItem(m);
  } catch {}
}
const re = new Map();
function xt(e) {
  const a = `itd:self-attempt:${e}`;
  let m = re.get(e);
  try {
    m = sessionStorage.getItem(a) ?? m;
  } catch {}

  if (!m || !/^[0-9a-f-]{36}$/i.test(m)) {
    m = crypto.randomUUID();
  }

  re.set(e, m);
  try {
    sessionStorage.setItem(a, m);
  } catch {}
  return m;
}
function Et(e) {
  re.delete(e);
  try {
    sessionStorage.removeItem(`itd:self-attempt:${e}`);
  } catch {}
}

const te = (e) => {
  const a = Ie();
  return {
    scope: e,
    step: "resolving",
    months: 1,
    auto: false,
    state: null,
    attempt: null,
    error: null,
    internationalBusy: false,
    unavailable: null,
    preview: null,
    usdRate: a,
    usdRatePending: !a,
    stageBePaidAvailable: false,
    stageBePaidOffers: [],
    internationalAuto: false,
    selectedStageMonths: null,
    stageSwitchRequested: false,
  };
};

const Tt = [
  "months",
  "initialAmountMinor",
  "currency",
  "quoteVersion",
  "renewalMonths",
  "renewalAmountMinor",
  "renewalCurrency",
  "autoRenewal",
  "consentVersion",
  "provider",
  "fingerprint",
  "recipientUserId",
];

const he = (e, a) => !!e && !!a && Tt.every((m) => e[m] === a[m]);

const ge = (e) =>
  e
    ? new Intl.DateTimeFormat("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(e))
    : null;

const we =
  "Не удалось проверить оплату. Повторите проверку; повторно платить не нужно.";

const Ut = {
  recipient_not_found: "Получатель не найден",
  recipient_already_subscribed: "У пользователя уже есть подписка",
  cannot_gift_yourself: "Нельзя подарить подписку себе",
  gift_payment_unavailable: "Не удалось создать платёж. Попробуйте позже",
  gift_payment_review_required:
    "Статус предыдущего платежа нужно проверить в поддержке. Повторно оплачивать не нужно",
  gift_recipient_conflict:
    "Этот платёж создан для другого получателя. Откройте окно подарка ещё раз",
  quote_changed:
    "Условия оплаты изменились. Проверьте их перед новой попыткой.",
};

const $t = (e) =>
  e && typeof e == "object" && "code" in e && typeof e.code == "string"
    ? Ut[e.code] ?? null
    : null;

function Kt(e) {
  const a = `${e.open}:${e.eligible}:${e.ownerId}:${e.kind}:${e.recipientId}:${e.scopeKey}`;

  const [m, u] = d(() => te(a));

  const c = m.scope === a ? m : te(a);
  const w = A(e);
  w.current = e;
  const U = A(true);
  const g = A(false);
  const P = A(0);
  const R = A(0);
  const f = A(false);
  const i = A(c);
  i.current = c;
  const $ = A(null);
  const p = A(0);
  const k = A(null);

  const r = (t) => {
    i.current = { ...i.current, ...t };
    u(i.current);
  };

  const v = () => {
    p.current++;

    if ($.current !== null) {
      clearInterval($.current);
    }

    $.current = null;
    k.current?.cleanup();
    k.current = null;
  };

  const l = () => {
    const w_current = w.current;
    const P_current = P.current;
    const d = w_current.captureCurrent();
    return () =>
      U.current &&
      !g.current &&
      w.current.open &&
      w.current.eligible &&
      P.current === P_current &&
      w.current.scopeKey === w_current.scopeKey &&
      w.current.ownerId === w_current.ownerId &&
      w.current.recipientId === w_current.recipientId &&
      w.current.kind === w_current.kind &&
      d();
  };

  const A = () => qe(w.current.kind, w.current.recipientId);

  const z = () => {
    const w_current = w.current;
    if (!w_current.ownerId) {
      throw new Error("Требуется авторизация");
    }
    return w_current.kind === "gift"
      ? qt(w_current.ownerId, w_current.recipientId)
      : xt(w_current.ownerId);
  };

  const B = () => {
    const w_current = w.current;

    if (w_current.ownerId) {
      if (w_current.kind === "gift") {
        Mt(w_current.ownerId, w_current.recipientId);
      } else {
        Et(w_current.ownerId);
      }
    }
  };

  const Y = () => {
    v();
    B();
    g.current = true;
    w.current.onSucceeded();
  };

  const ae = (t) =>
    t?.provider === "bepaid" &&
    typeof window !== "undefined" &&
    bs(window.location.origin);

  const ie = (t) => {
    const { ownerId, kind, recipientId, recipientName, recipientUsername } =
      w.current;
    Ee(
      t,
      ownerId
        ? kind === "self"
          ? { ownerId: ownerId, kind: kind }
          : recipientId && recipientName !== null
          ? {
              ownerId: ownerId,
              kind: kind,
              recipient: {
                id: recipientId,
                name: recipientName,
                username: recipientUsername,
              },
            }
          : null
        : null
    );
  };

  const _ = (t) =>
    !!t && typeof window !== "undefined" && bs(window.location.origin);

  const ve = async () => {
    const t = l();
    B();
    r({ stageSwitchRequested: false });
    await C();

    if (t() && i.current.step === "overview") {
      r({ step: "routes" });
    }
  };

  const E = () => {
    const t = i.current.state;
    return (
      !f.current &&
      !g.current &&
      w.current.open &&
      w.current.eligible &&
      !!t?.canEditTerms &&
      !!t.canStartNewAttempt &&
      ![
        "pending",
        "creating",
        "resolving",
        "reviewRequired",
        "active",
      ].includes(i.current.step)
    );
  };

  const se = (t) => {
    r({ attempt: t, error: null });

    if (t.paid && t.status === "succeeded") {
      Y();
      return;
    }

    if (t.status === "failed" || t.status === "review_required") {
      v();
      r({ step: "reviewRequired" });
      return;
    }
    if (t.status === "canceled") {
      v();

      if (_(t.quote)) {
        ve();
      } else {
        C(true);
      }

      return;
    }
    r({ step: "pending" });
  };

  const j = (t) => {
    v();
    const s = p.current;
    const d = l();
    const y = A();
    const b = Date.now() + 8 * 60000; /* 6e4 */
    const S = z();
    const h = i.current.attempt?.quote ?? i.current.state?.quote;
    const N = h?.provider === "yookassa" && _(h);
    let T = false;
    let O = -Infinity;
    const V = async (K = false) => {
      if (!d() || s !== p.current) {
        return;
      }
      const J = Date.now();
      if (J >= b) {
        if (!N) {
          v();

          r({
            error:
              "Подтверждение задерживается. Проверьте статус позже; повторно платить не нужно.",
          });

          return;
        }
        if (!K && J - O < 30000 /* 3e4 */) {
          return;
        }
      }
      if (!(N && typeof document !== "undefined" && document.hidden) && !T) {
        T = true;
        O = J;
        try {
          const Z =
            y.kind === "gift"
              ? await bh.getGiftCheckout(t, y.recipientUserId)
              : await bh.getCheckoutPayment(t, i.current.state?.agreement);
          if (!d() || s !== p.current) {
            return;
          }
          if (!he(h, Z.quote)) {
            v();

            r({
              step: "reviewRequired",
              error:
                "Условия предыдущей оплаты изменились. Повторно платить не нужно.",
            });

            return;
          }
          se(Z);

          if (!d() || s !== p.current || i.current.step !== "pending") {
            return;
          }

          const q = await bh.getCheckoutState(y, S);
          if (!d() || s !== p.current) {
            return;
          }
          if (q.state === "succeeded") {
            Y();
            return;
          }

          if (
            ["pending", "processing"].includes(q.state) &&
            q.attemptId === t &&
            he(h, q.quote)
          ) {
            r({
              state: q,
              attempt: { ...Z, confirmationUrl: q.confirmationUrl },
              error: null,
            });
          } else if (
            q.state === "canceled" &&
            q.canEditTerms &&
            q.canStartNewAttempt
          ) {
            v();
            B();

            r({
              state: q,
              attempt: null,
              stageSwitchRequested: false,
              step: _(h) ? "routes" : "terms",
            });
          } else {
            v();
            r({ state: q, step: "reviewRequired" });
          }
        } catch {
          if (d() && s === p.current) {
            r({ error: we });
          }
        } finally {
          T = false;
        }
      }
    };
    if (N) {
      const K = () => {
        V(true);
      };
      window.addEventListener?.("focus", K);

      if (typeof document !== "undefined") {
        document.addEventListener("visibilitychange", K);
      }

      k.current = {
        refresh: K,
        cleanup: () => {
          window.removeEventListener?.("focus", K);

          if (typeof document !== "undefined") {
            document.removeEventListener("visibilitychange", K);
          }
        },
      };
    }

    $.current = setInterval(() => {
      V();
    }, 2000 /* 2e3 */);

    V();
  };

  async function C(t = false, s = null, d = false) {
    if (
      !w.current.open ||
      !w.current.eligible ||
      !w.current.ownerId ||
      g.current ||
      f.current
    ) {
      return;
    }
    const y = l();
    const b = ++R.current;
    const S = A();
    r({ step: "resolving", error: null });
    try {
      const h = await bh.getCheckoutState(S, z());
      if (!y() || b !== R.current) {
        return;
      }
      const N = i.current.months;

      const T = h.offers.some((V) => V.months === N)
        ? N
        : h.offers[0]?.months ?? N;

      r({ state: h, months: T, attempt: null, error: s });

      if (h.state === "succeeded") {
        Y();
        return;
      }

      if (h.state === "pending" || h.state === "processing") {
        r({
          step: "pending",
          stageSwitchRequested:
            d &&
            (ae(h.quote) ||
              (typeof window !== "undefined" &&
                window.location.origin === "https://stage.xn--d1ah4a.com")),
        });

        j(h.attemptId);
        return;
      }
      if (
        h.state === "review_required" ||
        !h.canEditTerms ||
        !h.canStartNewAttempt
      ) {
        r({ step: "reviewRequired" });
        return;
      }

      if (t || h.state === "canceled" || h.state === "failed") {
        B();
      }

      const O = d && h.state === "canceled" && _(h.quote);
      r({ step: O ? "routes" : t ? "terms" : "overview" });
    } catch {
      if (y() && b === R.current) {
        r({ step: "resolving", error: we });
      }
    }
  }

  h(() => {
    U.current = true;
    g.current = false;
    P.current++;
    R.current++;
    f.current = false;
    v();
    r(te(a));

    if (e.open && e.eligible && e.ownerId) {
      C(false, null, !e.preferCurrentPayment);
    }

    return () => {
      P.current++;
      R.current++;
      g.current = true;
      v();
    };
  }, [
    e.open,
    e.eligible,
    e.ownerId,
    e.recipientId,
    e.kind,
    e.scopeKey,
    e.preferCurrentPayment,
  ]);

  h(
    () => () => {
      U.current = false;
      g.current = true;
      v();
    },
    []
  );

  h(() => {
    if (
      !e.open ||
      !e.eligible ||
      !e.ownerId ||
      typeof window === "undefined" ||
      !bs(window.location.origin)
    ) {
      return;
    }
    let t = false;
    let s;
    const d = e.captureCurrent();

    const y = async () => {
      try {
        const { offers, usdRate, renewal } = await bh.getStageBePaidOffers(
          e.kind
        );
        if (t || g.current || !d()) {
          return;
        }
        const N = i.current.selectedStageMonths;
        const T = i.current.internationalRenewal;

        const O =
          !!renewal &&
          renewal.amountMinor === T?.amountMinor &&
          renewal.consentVersion === T?.consentVersion;

        r({
          stageBePaidAvailable: offers.length > 0,
          stageBePaidOffers: offers,
          usdRate: usdRate,
          usdRatePending: false,
          internationalRenewal: renewal,
          internationalAuto: O && i.current.internationalAuto,
          selectedStageMonths: offers.some((K) => K.months === N)
            ? N
            : offers[0]?.months ?? null,
        });
        const V = usdRate
          ? Math.max(100, Date.parse(usdRate.validUntil) - Date.now() + 50)
          : me;
        s = setTimeout(() => {
          y();
        }, V);
      } catch {
        if (!t && !g.current && d()) {
          r({ usdRatePending: false });

          s = setTimeout(() => {
            y();
          }, me);
        }
      }
    };

    y();

    return () => {
      t = true;
      clearTimeout(s);
    };
  }, [a]);

  h(() => {
    if (
      !e.open ||
      typeof window === "undefined" ||
      typeof window.addEventListener != "function" ||
      !bs(window.location.origin)
    ) {
      return;
    }
    const t = (s) => {
      if (s.persisted && w.current.open && !g.current) {
        Be();
        P.current++;
        R.current++;
        v();
        f.current = false;
        r({ internationalBusy: false });
        C(false, null, true);
      }
    };
    window.addEventListener("pageshow", t);

    return () => window.removeEventListener("pageshow", t);
  }, [a]);

  const W = () => {
    try {
      const t = window.open("", "_blank");

      if (t) {
        t.opener = null;
      }

      return t;
    } catch {
      return null;
    }
  };

  const X = (t, s = null) => {
    if (s && !s.closed) {
      try {
        s.location.href = t;
        return;
      } catch {
        s.close();
      }
    }
    window.location.href = t;
  };

  const pe = async () => {
    if (!E() || i.current.step !== "terms") {
      return;
    }
    const t = l();
    const s = A();
    const d = i.current.state;
    let y;
    try {
      y = Me(d, s, z(), i.current.months, i.current.auto, w.current.methodId);
    } catch {
      r({ error: "Условия изменились. Повторите проверку оплаты." });
      return;
    }
    f.current = true;
    R.current++;
    v();
    const b = y.methodId ? null : W();
    r({ step: "creating", error: null });
    try {
      const S =
        s.kind === "gift"
          ? await bh.createGiftCheckout(y)
          : await bh.payCheckout(y, d.agreement);
      if (!t()) {
        b?.close();
        return;
      }
      f.current = false;
      se(S);

      if (
        S.paid ||
        ["canceled", "failed", "review_required"].includes(S.status)
      ) {
        b?.close();
      } else {
        S.confirmationUrl ? X(S.confirmationUrl, b) : b?.close();
        j(S.id);
      }
    } catch (S) {
      b?.close();

      if (t()) {
        f.current = false;
        await C(false, $t(S));
      }
    } finally {
      if (t()) {
        f.current = false;
      }
    }
  };

  const Se = async () => {
    const t = i.current.state;
    const s = i.current.attempt?.id ?? t?.attemptId;
    if (
      f.current ||
      i.current.step !== "pending" ||
      !t?.canReleaseAttempt ||
      !s ||
      _(i.current.attempt?.quote ?? t.quote)
    ) {
      return;
    }
    const d = l();
    const y = A();
    f.current = true;
    R.current++;
    v();
    r({ step: "resolving", error: null });
    try {
      const b = await bh.releaseCheckout(y, s);
      if (!d()) {
        return;
      }

      if (b.released) {
        B();
        r({ attempt: null });
      }

      f.current = false;
      await C();
      const S = i.current;

      if (d() && S.step === "overview") {
        r({ step: "routes" });
      }
    } catch {
      if (d()) {
        B();
        f.current = false;
        await C(false, "Не удалось обновить выбор. Проверьте статус оплаты.");
      }
    } finally {
      if (d()) {
        f.current = false;
      }
    }
  };

  const Re = () => {
    if (
      E() &&
      i.current.step === "routes" &&
      i.current.stageBePaidAvailable &&
      typeof window !== "undefined" &&
      bs(window.location.origin)
    ) {
      r({ step: "internationalTerms", unavailable: null, error: null });
    }
  };

  const ke = async () => {
    if (
      !E() ||
      i.current.step !== "internationalTerms" ||
      !i.current.stageBePaidAvailable ||
      i.current.usdRatePending ||
      typeof window === "undefined" ||
      !bs(window.location.origin)
    ) {
      return;
    }
    const t = i.current.stageBePaidOffers.find(
      (h) => h.months === i.current.selectedStageMonths
    );
    if (!t) {
      return;
    }

    const s = i.current.internationalAuto
      ? i.current.internationalRenewal
      : undefined;

    const d = l();
    const y = A();
    let b = false;
    let S = false;
    f.current = true;
    R.current++;
    r({ internationalBusy: true, error: null, unavailable: null });
    try {
      const h = await bh.internationalCheckout(y, crypto.randomUUID());
      if (!d()) {
        return;
      }
      if (h.mode === "informational") {
        r({
          step: "routes",
          stageBePaidAvailable: false,
          unavailable: "Оплата через bePaid сейчас недоступна.",
        });
      } else {
        const N = await fetch(new URL("./pay", h.handoff.url), {
          method: "POST",
          credentials: "same-origin",
          redirect: "error",
          cache: "no-store",
          headers: { Accept: "application/json" },
          signal: AbortSignal.timeout(25000 /* 25e3 */),
          body: new URLSearchParams({
            handoffTicket: h.handoff.fields.handoffTicket,
            months: String(t.months),
            amountMinor: String(t.amountMinor),
            ...(s
              ? {
                  consentVersion: s.consentVersion,
                  renewalAmountMinor: String(s.amountMinor),
                }
              : {}),
            theme: window.matchMedia?.("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
          }),
        });
        if (!d()) {
          return;
        }
        if (!N.ok) {
          throw new Error("Не удалось открыть оплату");
        }
        const T = await N.json();
        if (!d()) {
          return;
        }
        const O = xe(T?.checkoutUrl);
        if (!O) {
          throw new Error("Не удалось открыть оплату");
        }
        ie(O);
        b = true;
        r({ step: "resolving" });
      }
    } catch {
      if (d()) {
        b = true;
        S = true;
        r({ step: "resolving" });
      }
    } finally {
      if (d()) {
        f.current = false;
        r({ internationalBusy: false });

        b &&
          C().then(() => {
            if (S && d() && i.current.step === "overview") {
              r({
                step: "routes",
                unavailable:
                  "Не удалось открыть bePaid. Попробуйте ещё раз или выберите другой способ.",
              });
            }
          });
      }
    }
  };

  const L = c.attempt?.quote ?? c.state?.quote ?? null;

  const oe =
    c.step === "reviewRequired" &&
    c.state?.reasonCode === "stage_bepaid_handoff_unpaid" &&
    !!c.state.attemptId &&
    typeof window !== "undefined" &&
    bs(window.location.origin);

  const Ne = async () => {
    const t = i.current.state;
    if (
      f.current ||
      !oe ||
      t?.reasonCode !== "stage_bepaid_handoff_unpaid" ||
      !t.attemptId
    ) {
      return;
    }
    const s = l();
    const d = A();
    f.current = true;
    R.current++;
    r({ step: "resolving", error: null });
    try {
      const y = await bh.releaseStageBePaidHandoff(d, t.attemptId);
      if (!s()) {
        return;
      }

      if (y) {
        B();
      }

      f.current = false;
      await C();

      if (y && s() && i.current.step === "overview") {
        r({ step: "routes" });
      }
    } catch {
      if (s()) {
        f.current = false;
        await C(false, "Не удалось проверить предыдущую попытку.");
      }
    } finally {
      if (s()) {
        f.current = false;
      }
    }
  };

  const Ae = ["pending", "reviewRequired"].includes(c.step)
    ? L
    : c.state?.offers.find((t) => t.months === c.months) ?? null;

  const I = c.state?.agreement;
  const ce = ge(I?.nextChargeAt);
  const c_usdRate = c.usdRate;

  const ue = (t, s) =>
    s === "BYN"
      ? br(t, c_usdRate)
      : `${new Intl.NumberFormat("ru-RU").format(t / 100)} ₽`;

  const Ce = I?.enabled
    ? `Автопродление подключено: ${ue(
        I.renewalAmountMinor,
        I.renewalCurrency
      )} каждый месяц${
        ce ? `, следующее списание ${ce}` : " после окончания оплаченного срока"
      }. Напомним за 3 дня.`
    : null;

  const de = c.step === "pending" && c.stageSwitchRequested;
  return {
    panel: {
      kind: e.kind,
      step: de ? "routes" : c.step,
      months: c.months,
      newAutoConsent: c.auto,
      canEditTerms: !!c.state?.canEditTerms,
      canStartNewAttempt: !!c.state?.canStartNewAttempt,
      canOfferAutoRenewal: !!I?.canOffer,
      agreement: {
        enabled: !!I?.enabled,
        requiresNewConsent: !!I?.requiresNewConsent,
        summary: Ce,
      },
      offers: c.state?.offers ?? [],
      quote: Ae,
      recipientName: e.recipientName,
      error: c.error,
      internationalBusy: c.internationalBusy,
      internationalUnavailable: c.unavailable,
      stageBePaidAvailable: c.stageBePaidAvailable,
      usdRate: c_usdRate,
      usdRatePending: c.usdRatePending,
      internationalRenewal: c.internationalRenewal,
      internationalAuto: c.internationalAuto,
      onInternationalAutoChange: (t) => {
        if (
          E() &&
          i.current.step === "internationalTerms" &&
          i.current.internationalRenewal
        ) {
          r({ internationalAuto: t });
        }
      },
      stageBePaidOffers: c.stageBePaidOffers,
      selectedStageMonths: c.selectedStageMonths,
      onStageMonthsChange: (t) => {
        if (
          E() &&
          i.current.step === "internationalTerms" &&
          i.current.stageBePaidOffers.some((s) => s.months === t)
        ) {
          r({ selectedStageMonths: t });
        }
      },
      onStagePay: ke,
      canRestartStageBePaid: oe,
      onRestartStageBePaid: Ne,
      canResume: !!(c.attempt?.confirmationUrl ?? c.state?.confirmationUrl),
      actualExpiryLabel: ge(c.state?.actualExpiresAt),
      canReselect:
        c.step === "pending" && c.state?.canReleaseAttempt === true && !_(L),
      onReselect: Se,
      canSwitchStagePayment: c.step === "pending" && _(L),
      onSwitchStagePayment: () => {
        const t = i.current;

        if (
          !f.current &&
          t.step === "pending" &&
          !t.stageSwitchRequested &&
          _(t.attempt?.quote ?? t.state?.quote)
        ) {
          r({ stageSwitchRequested: true, error: null });
          k.current?.refresh();
        }
      },
      onReturnToPending: de
        ? () => r({ stageSwitchRequested: false })
        : undefined,
      providerLabel: L
        ? L.provider === "yookassa"
          ? "ЮKassa"
          : "bePaid"
        : null,
      pendingSummary: L
        ? e.kind === "gift"
          ? "Разовый подарок, без автопродления."
          : `${
              L.autoRenewal
                ? `В этой оплате выбрано автопродление: ${ue(
                    L.renewalAmountMinor,
                    L.renewalCurrency
                  )} каждый месяц.`
                : "В этой оплате автопродление не выбрано."
            }${
              I
                ? ` Сейчас автопродление ${
                    I.enabled ? "включено" : "выключено"
                  }.`
                : ""
            }`
        : null,
      onBegin: () => {
        if (E()) {
          r({ step: "routes" });
        }
      },
      onRubles: () => {
        if (E()) {
          r({ step: "terms", unavailable: null });
        }
      },
      onBack: () => {
        if (E()) {
          r({
            step:
              c.step === "terms" || c.step === "internationalTerms"
                ? "routes"
                : "overview",
            error: null,
          });
        }
      },
      onMonthsChange: (t) => {
        if (
          E() &&
          i.current.step === "terms" &&
          i.current.state?.offers.some((s) => s.months === t)
        ) {
          r({ months: t });
        }
      },
      onNewAutoConsentChange: (t) => {
        if (E() && !I?.enabled && I?.canOffer) {
          r({ auto: t });
        }
      },
      onPay: pe,
      onInternational: Re,
      onResume: async () => {
        const t = i.current;
        const s = t.attempt?.confirmationUrl ?? t.state?.confirmationUrl;
        if (t.step !== "pending" || !s || f.current) {
          return;
        }
        if (!ae(t.attempt?.quote ?? t.state?.quote)) {
          X(s, W());
          return;
        }
        const d = t.attempt?.id ?? t.state?.attemptId;
        if (!d) {
          return;
        }
        const y = l();
        f.current = true;
        r({ internationalBusy: true, error: null });
        try {
          const b = await bh.resumeStageBePaid(d);
          if (!y()) {
            return;
          }

          if (b) {
            ie(b);
          } else {
            j(d);
          }
        } catch {
          if (y()) {
            r({ error: "Не удалось продолжить оплату. Проверьте её статус." });
          }
        } finally {
          if (y()) {
            f.current = false;
            r({ internationalBusy: false });
          }
        }
      },
      onCheckStatus: () => {
        if (f.current) {
          return;
        }
        if (k.current) {
          k.current.refresh();
          return;
        }
        const t = i.current;
        const s = t.attempt?.id ?? t.state?.attemptId;

        if (
          t.step === "pending" &&
          s &&
          _(t.attempt?.quote ?? t.state?.quote)
        ) {
          j(s);
        } else {
          v();
          C();
        }
      },
      onRetryRead: () => {
        C();
      },
      ...(c.preview ? { onInternationalPreview: () => X(c.preview, W()) } : {}),
    },
    dismiss() {
      g.current = true;
      P.current++;
      R.current++;
      v();
      w.current.onClose();
    },
  };
}
function Dt(e, a) {
  const m = A(null);

  h(() => {
    const u = m.current?.parentElement?.parentElement;
    const c = u?.parentElement;
    if (!e || !u || !c) {
      return;
    }
    const w = document.activeElement;
    const U = ["role", "aria-modal", "aria-label", "data-purchase-dialog"];

    const g = U.map((p) => u.getAttribute(p));

    const P = c.getAttribute("data-purchase-overlay");
    u.setAttribute("role", "dialog");
    u.setAttribute("aria-modal", "true");
    u.setAttribute("aria-label", a);
    u.setAttribute("data-purchase-dialog", "");
    c.setAttribute("data-purchase-overlay", "");

    const R = () =>
      Array.from(
        u.querySelectorAll(
          'button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), [tabindex="0"]'
        )
      ).filter((p) => p.getClientRects().length > 0);

    const f = R()[0];
    const i = f?.getAttribute("aria-label");

    if (f?.tagName === "BUTTON" && !f.textContent?.trim() && !i) {
      f.setAttribute("aria-label", "Закрыть");
    }

    const $ = (p) => {
      if (p.key !== "Tab") {
        return;
      }
      const k = R();
      const r = k[0];
      const v = k.at(-1);

      if (r && v) {
        if (
          p.shiftKey &&
          (document.activeElement === r || !u.contains(document.activeElement))
        ) {
          p.preventDefault();
          v.focus();
        } else if (
          !p.shiftKey &&
          (document.activeElement === v || !u.contains(document.activeElement))
        ) {
          p.preventDefault();
          r.focus();
        }
      }
    };
    u.addEventListener("keydown", $);

    if (!u.contains(document.activeElement)) {
      f?.focus({ preventScroll: true });
    }

    return () => {
      u.removeEventListener("keydown", $);

      U.forEach((p, k) =>
        g[k] === null ? u.removeAttribute(p) : u.setAttribute(p, g[k])
      );

      if (P === null) {
        c.removeAttribute("data-purchase-overlay");
      } else {
        c.setAttribute("data-purchase-overlay", P);
      }

      if (f && i === null) {
        f.removeAttribute("aria-label");
      }

      if (w?.isConnected) {
        w.focus({ preventScroll: true });
      }
    };
  }, [e, a]);

  return m;
}
export { P as P, Dt as a, ct as s, Kt as u };
