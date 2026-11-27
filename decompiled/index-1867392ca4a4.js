import {
  A,
  r,
  d,
  h,
  s as o_1,
  v,
  d as d_1,
  b,
  c,
  q,
  f,
  W,
  u,
  s,
  p as I_1,
  P as P_1,
  C,
  S,
  e,
  B,
  T,
  e as e_1,
  i,
  n as j_1,
  R as k_1,
  l,
  m,
  p,
  n,
  u as u_1,
  w,
  x,
  y,
  B as B_1,
  D,
  A as A_1,
  F,
  G,
  H,
  J,
  K,
  R,
  $,
  L,
  M,
  N,
  O,
} from "./index-4a2211963806.js";

import { C as C_1 } from "./index-ade4da9b27ee.js";

export function P(ue) {
  const { intent } = ue;
  const q = A(r());
  const B = A(n());
  const O = A(false);
  const A = A(0);
  const [P, K] = d(!!q.current);
  const [_, $] = d(false);
  const [Xe, D] = d(false);

  const Y = (e, n, s) => {
    if (O.current) {
      x({ phone: e, flowToken: n, mode: s, expiresAt: A.current }, B.current);
    }
  };

  const [T, R] = d(false);
  const N = A("direct");
  const [qe, J] = d(false);
  const L = A(0);
  const [, x] = d("");
  const [Ke, S] = d("");
  const [r, f] = d("number");
  const [U, Ye] = d(null);
  const [de, Oe] = d(false);
  const [Q, Te] = d("ru");
  const [Re, Ce] = d("");
  const [Z, Ie] = d("");
  const [fe, i] = d("");
  const [Je, M] = d(false);
  const [c, Pe] = d(false);
  const ee = A(false);
  const [l, ne] = d("");
  const [h, m] = d("");
  const [u, p] = d(null);
  const [W, v] = d([]);
  const [V, F] = d("");
  const [ke, he] = d("");
  const [Qe, G] = d(0);
  const [Ze, te] = d(0);
  const [me, pe] = d(false);

  const [Ae, en] = d(() => Date.now());

  const _e = async () => {
    const e = r();
    if (!e) {
      K(false);
      $(false);
      return;
    }
    K(true);
    $(false);
    try {
      const n = await p.resume(e.phone, e.flowToken);
      if (!O.current || B.current !== n()) {
        return;
      }
      const s = u_1(e.phone, "ru");
      if (v(s.country, s.digits) !== e.phone) {
        e();
        return;
      }
      A.current = Math.min(
        e.expiresAt,
        Date.now() + n.expiresIn * 1000 /* 1e3 */
      );
      Te(s.country);
      Ce(s.digits);
      Ie("");
      ne(e.phone);
      m(e.flowToken);
      p(n);
      v([]);
      G(Date.now() + n.retryIn * 1000 /* 1e3 */);
      L.current = A.current;
      const Ve = e.mode === "reverse";
      J(false);
      D(Ve);
      R(Ve);
      f(e.mode === "choice" ? "number" : "code");
      i(e.mode === "choice" ? m : "");
      Y(e.phone, e.flowToken, e.mode);
    } catch (n) {
      if (!O.current || B.current !== n()) {
        return;
      }

      if (
        n instanceof w &&
        ["INVALID_FLOW_TOKEN", "OTP_EXPIRED", "RESUME_UNSUPPORTED"].includes(
          n.code
        )
      ) {
        e();
      } else {
        $(true);
      }
    } finally {
      if (O.current) {
        K(false);
      }
    }
  };

  h(() => {
    O.current = true;
    const e = o_1(() => {
      m("");
      p(null);
      D(false);
      R(false);
      f("number");
      v([]);
      F("");
      he("");
      K(false);
      $(false);
    });

    if (q.current) {
      _e();
    }

    return () => {
      O.current = false;
      e();
    };
  }, []);

  h(() => {
    const e = setInterval(() => en(Date.now()), 1000 /* 1e3 */);
    return () => clearInterval(e);
  }, []);

  const b = Math.max(0, Math.ceil((Qe - Ae) / 1000 /* 1e3 */));
  const w = Math.max(0, Math.ceil((Ze - Ae) / 1000 /* 1e3 */));
  const d = !Z && v(Q, Re);
  const De = d_1();
  const re = b(De, Q) || De?.message?.[Q] === true;
  const be = !!d && c(De, Q) && Ke !== d;
  const [y, Le] = d(null);
  const [xe, Se] = d(false);
  const [nn, tn] = d("Получить код");
  const se = A(0);
  const ae = A(null);
  const oe = A(null);

  const ie = q(async () => {
    const e = ++se.current;
    try {
      const n = await f(W);
      if (e !== se.current) {
        return;
      }
      Le(n);
      tn(n.bundle.submitLabel);
    } catch {
      if (e === se.current) {
        Se(true);
      }
    }
  }, []);

  const C = q(() => {
    Le(null);
    Se(false);
    ie();
  }, [ie]);

  h(() => {
    const e = se;
    ie();

    return () => {
      e.current++;
    };
  }, [ie]);

  const ce = (e = 0) => {
    e();
    q.current = null;
    A.current = 0;
    L.current = 0;
    m("");
    p(null);
    v([]);
    D(false);
    J(false);
    R(false);
    f("number");
    M(false);
    pe(false);
    te(Date.now() + e * 1000 /* 1e3 */);
    i(G);
    C();
  };

  const le = async (e) => {
    if (!ee.current) {
      ee.current = true;
      Pe(true);
      i("");
      try {
        await e();
      } catch (n) {
        if (r === "terms" && y(n)) {
          ce();
        } else if (r === "code" && y(n) && n.flowExpiresIn > 0) {
          pe(true);
          te(Date.now() + n.flowExpiresIn * 1000 /* 1e3 */);
          i(B_1);
        } else if (r === "code" && y(n)) {
          ce();
        } else {
          i(D(n) || A_1(n) || F(n));
        }

        if (
          r === "number" &&
          n instanceof w &&
          n.code === "PHONE_VERIFICATION_PENDING"
        ) {
          te(Date.now() + n.retryIn * 1000 /* 1e3 */);
        }

        if (
          n instanceof w &&
          n.retryIn &&
          !(r === "number" && N.current === "reverse")
        ) {
          G(Date.now() + n.retryIn * 1000 /* 1e3 */);
        }
      } finally {
        ee.current = false;
        Pe(false);
      }
    }
  };

  const Ue = async () => {
    await K.getState().initialize();
    const e = K.getState().status;
    if (e !== "authenticated" && e !== "needs_profile") {
      throw new Error("Session unavailable");
    }
    if (e === "needs_profile") {
      if (window.location.pathname !== R.ONBOARDING && !$(R.ONBOARDING, true)) {
        window.location.assign(R.ONBOARDING);
      }

      return;
    }
    L.syncIfAttached().catch(() => {});

    if (
      [R.LOGIN, R.REGISTER, R.ONBOARDING].some(
        (n) => n === window.location.pathname
      )
    ) {
      const R_HOME = R.HOME;

      if (!$(R_HOME, true)) {
        window.location.assign(R_HOME);
      }
    }
  };

  const H = async (e) => {
    if (!(!O.current || B.current !== n())) {
      if (e.step === "terms") {
        if (!H(e.consent, M)) {
          throw new w("LEGAL_UNAVAILABLE");
        }
        Ye(e.consent);
        Oe(false);
        f("terms");
        return;
      }
      e();

      if (e.step === "password" && e.flowToken) {
        m(e.flowToken);
        F("");
        f("password");
      } else if (e.accessToken) {
        await Ue();
      } else {
        throw new Error("Unexpected login response");
      }
    }
  };

  const rn = (e) => {
    M(false);
    const ae_current = ae.current;
    ae.current = null;

    if (!!d) {
      if (!ae_current) {
        i(C);
        C();
        return;
      }
      le(async () => {
        try {
          oe.current = d;
          const s = await p.start(d, e, J(ae_current), N.current);
          if (!O.current || B.current !== ae_current()) {
            return;
          }
          A.current = Date.now() + 300000 /* 3e5 */;
          L.current = A.current;
          pe(false);
          te(0);
          D(false);

          Y(
            d,
            s.flowToken,
            s.reverseOnly && N.current !== "reverse"
              ? "choice"
              : N.current === "reverse"
              ? "reverse"
              : "code"
          );

          if (s.reverseOnly && N.current !== "reverse") {
            S("");
            x("");
            ne(d);
            m(s.flowToken);
            p(s);
            v([]);
            L.current = Date.now() + 240000 /* 24e4 */;
            i(m);
            return;
          }

          S("");
          x("");
          J(N.current === "reverse");
          R(s.reverseOnly === true);
          ne(d);
          m(s.flowToken);
          p(s);
          v([]);
          f("code");

          if (N.current !== "reverse") {
            G(Date.now() + s.retryIn * 1000 /* 1e3 */);
          }
        } catch (s) {
          if (D(s)) {
            C();
          }

          if (s instanceof w) {
            if (s.code === "PHONE_NUMBER_LIMIT_REVERSE_AVAILABLE") {
              x(d);
              S("");
              ne(d);
              m("");
              p(null);
            } else if (
              [
                "TOO_MANY_REQUESTS",
                "REVERSE_BUDGET_EXHAUSTED",
                "REVERSE_UNAVAILABLE",
              ].includes(s.code)
            ) {
              x("");
              S(d);
              p(null);
              m("");
            }
          }

          throw s;
        }
      });
    }
  };

  const sn = (e) => {
    e.preventDefault();

    if (r === "number") {
      if (!re || !d || b || w || c || P || _) {
        return;
      }
      if (!y || i(y)) {
        C();
        return;
      }
      N.current = "direct";
      ae.current = y;
      i("");
      M(true);
      return;
    }

    le(async () => {
      if (r === "terms") {
        if (!de || !U) {
          return;
        }
        const n = (s) =>
          T ? N.complete(l, h, false, s) : p.verify(l, h, W.join(""), s);
        try {
          if (i(U)) {
            await H(await n());
          } else {
            await H(await n({ accepted: true, contextToken: U.contextToken }));
          }
        } catch (s) {
          if (!O(s)) {
            throw s;
          }
          await H(await n());
        }
      } else if (r === "code") {
        if (!u || u.reverseOnly || W.join("").length !== u.codeLength) {
          return;
        }
        let n;
        try {
          n = await p.verify(l, h, W.join(""));
        } catch (s) {
          if (O(s)) {
            e();
            f("number");
            v([]);
            m("");
            p(null);
            C();
          }

          throw s;
        }
        await H(n);
      } else {
        if (
          r === "reset" &&
          (V !== ke || !/^(?=.*[A-Za-z])(?=.*\d).{8,100}$/.test(V))
        ) {
          i("Пароли должны совпадать: от 8 символов, латинская буква и цифра.");
          return;
        }

        if (r === "reset") {
          await p.reset(l, h, V);
        } else {
          await p.password(l, h, V);
        }

        await Ue();
      }
    });
  };

  return u("div", {
    className: s.card,
    "data-reverse-open": T,
    children: [
      u("div", { className: s.brand, children: u(I_1, {}) }),
      u("div", {
        className: s.symbol,
        children: u("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          children: [
            u("rect", { x: "6", y: "2", width: "12", height: "20", rx: "3" }),
            u("path", { d: "M10 5h4m-3 14h2" }),
          ],
        }),
      }),
      u(
        "h1",
        {
          className: s.phase,
          children:
            r === "terms"
              ? "Создание аккаунта"
              : r === "number"
              ? intent === "sign-up"
                ? "Регистрация"
                : "Вход по телефону"
              : r === "code"
              ? T
                ? "Позвоните сами"
                : u?.reverseOnly
                ? "Не удалось позвонить"
                : "Подтвердите номер"
              : r === "reset"
              ? "Новый пароль"
              : "Облачный пароль",
        },
        r + String(T)
      ),
      u(
        "p",
        {
          className: `${s.description} ${s.phase}`,
          children:
            r === "terms"
              ? "Номер подтверждён. Примите условия, чтобы создать аккаунт."
              : r === "number"
              ? intent === "sign-up"
                ? re
                  ? "Создайте аккаунт по номеру телефона. Номер подтвердим проверочным кодом."
                  : "Создайте аккаунт по номеру телефона. Подтвердите номер звонком."
                : re
                ? "Войдите или создайте аккаунт. Номер подтвердим проверочным кодом."
                : "Войдите или создайте аккаунт. Подтвердите номер звонком."
              : r === "code"
              ? T
                ? "Позвоните на выданный номер с этого телефона. Код вводить не нужно."
                : u?.reverseOnly
                ? "Вы можете позвонить сами или повторить запрос позже."
                : u?.channel === "push"
                ? "Код отправлен в приложение ИТД."
                : u?.channel === "message"
                ? "Введите код из мессенджера"
                : u?.channel === "sms"
                ? "Введите код из сообщения."
                : `Введите последние ${
                    u?.codeLength ?? 4
                  } цифры номера входящего звонка.`
              : r === "password"
              ? "Для этого аккаунта включена дополнительная защита."
              : "Номер подтверждён. Задайте новый пароль для входа.",
        },
        r + String(T)
      ),
      u(
        "form",
        {
          className: `${s.form} ${s.phase}`,
          onSubmit: sn,
          children: [
            r === "number"
              ? u(P_1, {
                  country: Q,
                  digits: Re,
                  disabled: c || P || _,
                  error: Z,
                  onChange: (e, n, s) => {
                    Te(e);
                    Ce(n);
                    Ie(s);
                    i("");

                    if (oe.current && v(e, n) !== oe.current) {
                      oe.current = null;
                      C();
                    }
                  },
                })
              : u("span", {
                  className: s.number,
                  children: l.replace(
                    /^\+7(\d{3})(\d{3})(\d{2})(\d{2})$/,
                    "+7 ($1) $2-$3-$4"
                  ),
                }),
            (r === "password" || r === "reset") &&
              u("label", {
                className: s.field,
                children: [
                  r === "reset" ? "Новый пароль" : "Облачный пароль",
                  u("input", {
                    type: "password",
                    autoComplete:
                      r === "reset" ? "new-password" : "current-password",
                    maxLength: 100,
                    value: V,
                    onInput: (e) => F(e.currentTarget.value),
                    disabled: c,
                    required: true,
                  }),
                ],
              }),
            r === "reset" &&
              u("label", {
                className: s.field,
                children: [
                  "Повторите пароль",
                  u("input", {
                    type: "password",
                    autoComplete: "new-password",
                    maxLength: 100,
                    value: ke,
                    onInput: (e) => he(e.currentTarget.value),
                    disabled: c,
                    required: true,
                  }),
                ],
              }),
            (fe || Z || (r === "number" && xe)) &&
              u("p", {
                className: s.error,
                role: "alert",
                children: fe || Z || C,
              }),
            r === "number" &&
              xe &&
              u("button", {
                className: s.link,
                type: "button",
                onClick: C,
                children: "Загрузить документы ещё раз",
              }),
            r === "number" &&
              _ &&
              u(S, {
                children: [
                  u("p", {
                    className: s.error,
                    role: "alert",
                    children: "Не удалось восстановить начатую проверку.",
                  }),
                  u("button", {
                    className: s.link,
                    type: "button",
                    disabled: P,
                    onClick: () => {
                      _e();
                    },
                    children: "Продолжить проверку",
                  }),
                  u("button", {
                    className: s.link,
                    type: "button",
                    onClick: () => {
                      e();
                      $(false);
                      q.current = null;
                    },
                    children: "Начать заново",
                  }),
                ],
              }),
            r !== "code" &&
              r !== "terms" &&
              (r !== "number" || re) &&
              u(B, {
                type: "submit",
                fullWidth: true,
                size: "lg",
                loading: c || P,
                disabled:
                  P || _ || (r === "number" ? !d || !!b || !!w || !y : !V),
                children:
                  r === "number"
                    ? b
                      ? `Подождите ${b} с`
                      : w
                      ? `Новая проверка через ${w} с`
                      : nn
                    : r === "reset"
                    ? "Сохранить и войти"
                    : "Войти",
              }),
            r === "terms" &&
              U &&
              u(S, {
                children: [
                  u(T, {
                    checked: de,
                    disabled: c,
                    onChange: Oe,
                    href:
                      U.bundle.documents.find((e) => e.slug === "terms")?.url ??
                      "/terms",
                  }),
                  u(e_1, {}),
                  u(B, {
                    type: "submit",
                    fullWidth: true,
                    size: "lg",
                    disabled: !de,
                    loading: c,
                    children: U.bundle.submitLabel,
                  }),
                ],
              }),
            r === "number" &&
              u("div", {
                className: s.reverseEntry,
                "data-ready": be,
                "aria-hidden": !be,
                inert: !be,
                children: u("div", {
                  children: u(B, {
                    type: "button",
                    fullWidth: true,
                    size: "lg",
                    disabled: c || P || _ || !!w || !y,
                    onClick: () => {
                      if (!(!d || ee.current || P || _ || w)) {
                        if (
                          l === d &&
                          u?.reverseOnly &&
                          h &&
                          Date.now() < L.current
                        ) {
                          Y(l, h, "reverse");
                          J(true);
                          D(false);
                          R(true);
                          f("code");
                          i("");
                          return;
                        }
                        if (!y || i(y)) {
                          C();
                          return;
                        }
                        N.current = "reverse";
                        ae.current = y;
                        i("");
                        M(true);
                      }
                    },
                    children: w
                      ? `Позвонить самому через ${w} с`
                      : "Позвонить самому",
                  }),
                }),
              }),
            r === "code" &&
              u("div", {
                className: s.verification,
                children: [
                  u &&
                    u(j_1, {
                      visible: !T && !u.reverseOnly,
                      children: [
                        u(k_1, {
                          value: W,
                          length: u.codeLength,
                          onChange: v,
                          disabled: c,
                          status: fe ? "error" : "idle",
                        }),
                        u(B, {
                          type: "submit",
                          fullWidth: true,
                          size: "lg",
                          loading: c,
                          disabled: W.join("").length !== u.codeLength,
                          children: "Продолжить",
                        }),
                        u("button", {
                          className: s.link,
                          type: "button",
                          disabled: c || !!b || me,
                          onClick: () => {
                            le(async () => {
                              const e = await p.resend(l, h);
                              p(e);
                              v([]);
                              G(Date.now() + e.retryIn * 1000 /* 1e3 */);
                            });
                          },
                          children: b
                            ? `Повторить через ${b} с`
                            : u?.channel === "message"
                            ? "Запросить звонок"
                            : "Позвонить ещё раз",
                        }),
                        me &&
                          u(B, {
                            type: "button",
                            fullWidth: true,
                            size: "lg",
                            disabled: c || !!w,
                            onClick: () => ce(),
                            children: w
                              ? `Новая проверка через ${w} с`
                              : "Начать новую проверку",
                          }),
                      ],
                    }),
                  u(
                    l,
                    {
                      embedded: true,
                      resumeOpen: Xe,
                      directEntry: qe,
                      fromMessenger: u?.channel === "message",
                      onRestart: () => ce(),
                      onUnavailable: () => {
                        e();
                        f("number");
                        R(false);
                        x("");
                        S(l);
                        p(null);
                        m("");

                        i(
                          "Слишком много попыток. Подождите перед повторным запросом."
                        );
                      },
                      onExit: (e, n) => {
                        if (e || n === 0) {
                          e();
                          m("");
                          p(null);
                          x(n === 0 ? "" : l);
                          L.current = 0;
                        }

                        if (n === 0) {
                          S(l);
                        }

                        f("number");
                        R(false);

                        i(
                          n === 0
                            ? "Слишком много попыток. Подождите перед повторным запросом."
                            : b
                            ? "Подождите перед повторным запросом, либо воспользуйтесь альтернативным методом."
                            : m
                        );
                      },
                      initialFailure: u?.reverseOnly,
                      phone: l,
                      flowToken: h,
                      disabled: c,
                      onModeChange: (e) => {
                        Y(
                          l,
                          h,
                          e ? "reverse" : u?.reverseOnly ? "choice" : "code"
                        );

                        R(e);
                        i("");
                      },
                      onComplete: H,
                    },
                    l + h
                  ),
                  u?.reverseOnly &&
                    !T &&
                    u("button", {
                      className: s.link,
                      type: "button",
                      disabled: c || !!b || me,
                      onClick: () => {
                        le(async () => {
                          const e = await p.resend(l, h);
                          p(e);
                          v([]);
                          G(Date.now() + e.retryIn * 1000 /* 1e3 */);
                        });
                      },
                      children: b
                        ? `Повторить через ${b} с`
                        : "Позвонить ещё раз",
                    }),
                ],
              }),
            r === "password" &&
              u("button", {
                className: s.link,
                type: "button",
                disabled: c,
                onClick: () => {
                  f("reset");
                  F("");
                  i("");
                },
                children: "Не помню пароль",
              }),
            r === "reset" &&
              u("a", {
                className: s.link,
                href: "/forgot-password",
                children: "Восстановить через почту",
              }),
            r === "number"
              ? ue.intent === "sign-up"
                ? u("p", {
                    className: s.terms,
                    children: [
                      "Уже есть аккаунт? ",
                      u("a", { href: "/login", children: "Войти" }),
                    ],
                  })
                : u("button", {
                    className: s.back,
                    type: "button",
                    disabled: c,
                    onClick: ue.onBack,
                    children: "Вернуться ко входу по почте",
                  })
              : u("button", {
                  className: s.back,
                  type: "button",
                  disabled: c,
                  onClick: () => {
                    e();
                    D(false);
                    f("number");
                    v([]);
                    F("");
                    he("");
                    m("");
                    i("");
                  },
                  children: "Другой номер телефона",
                }),
            (r === "code" || r === "password" || r === "reset") && u(e_1, {}),
          ],
        },
        r
      ),
      r === "number" &&
        y &&
        u("p", {
          className: s.terms,
          children: re
            ? y.bundle.text.map((e, n) => {
                const s =
                  e.document === "terms"
                    ? "/terms"
                    : e.document === "privacy"
                    ? "/privacy"
                    : null;
                return s
                  ? u(
                      "a",
                      {
                        href: s,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: e.text,
                      },
                      n
                    )
                  : e.text;
              })
            : u(S, {
                children: [
                  "Нажимая кнопку вы соглашаетесь с ",
                  u("a", {
                    href: "/terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Пользовательским соглашением",
                  }),
                  " и ознакомлены с ",
                  u("a", {
                    href: "/privacy",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Политикой конфиденциальности",
                  }),
                ],
              }),
        }),
      u(C_1, { isOpen: Je, onClose: () => M(false), onVerify: rn }),
    ],
  });
}

export { P as P };
