import {
  a,
  d,
  B as A_1,
  x,
  q,
  $,
  B,
  l,
  z,
  m,
  r,
  f as f_1,
  ab,
  ac,
  _,
} from "./index-BAlLDjSl.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DeevoXuW.js",
      "assets/index-BAlLDjSl.js",
      "assets/index-B8Xpx8pu.css",
      "assets/index-DemnVSuW.css",
    ])
) => i.map((i) => d[i]);
(() => {
  try {
    const a =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    a.SENTRY_RELEASE = { id: "1.1.1" };
    const i = new a.Error().stack;

    if (i) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[i] = "974500a4-3f06-40fc-89a5-5d03b875c2a0";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-974500a4-3f06-40fc-89a5-5d03b875c2a0";
    }
  } catch {}
})();
const se = "LBKj";
const ie = "mGq5";
const le = "bgvZ";
const oe = "hGKK";
const ce = "tNqD";
const f = { stepper: se, track: ie, progress: le, step: oe, active: ce };
function me({ steps, currentStep, onStepClick, className }) {
  const E = ((currentStep - 1) / (steps - 1)) * 100;
  return steps("div", {
    className: `${f.stepper} ${className || ""}`,
    children: [
      steps("div", {
        className: f.track,
        children: steps("div", {
          className: f.progress,
          style: { width: `${E}%` },
        }),
      }),
      Array.from({ length: steps }, (l, k) => k + 1).map((l) =>
        steps(
          "button",
          {
            type: "button",
            className: `${f.step} ${currentStep >= l ? f.active : ""}`,
            onClick: () => onStepClick?.(l),
            children: l,
          },
          l
        )
      ),
    ],
  });
}
const de = "O15h";
const ue = "opUv";
const pe = "hfEP";
const fe = "LLGa";
const he = "K5i5";
const ve = "NVtH";
const be = "c8PY";
const ge = "RxaE";
const Ne = "foIv";
const ye = "sz3M";
const Ee = "xX0L";
const ke = "RcEl";
const Pe = "DJxV";
const _e = "oajh";
const $e = "WdWK";
const Se = "a8iR";
const we = "lOGi";
const je = "hwJL";
const Ae = "yPag";
const Be = "MR4T";
const Le = "O4Fa";
const Ce = "nfs6";

const t = {
  page: de,
  container: ue,
  header: pe,
  title: fe,
  subtitle: he,
  stepper: ve,
  form: be,
  error: ge,
  inputGroup: Ne,
  label: ye,
  hint: Ee,
  input: ke,
  inputError: Pe,
  fieldError: _e,
  avatarSection: $e,
  avatarPicker: Se,
  avatar: we,
  avatarEmpty: je,
  avatarHint: Ae,
  emojiPickerPortal: Be,
  emojiPickerBackdrop: Le,
  submitButton: Ce,
};

const Ie = z(() =>
  _(() => import("./index-DeevoXuW.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (a) => ({
      default: a.EmojiPicker,
    })
  )
);

export const Onboarding = (a) => {
  const [i, o] = d(1);
  const [m, E] = d("");
  const [l, k] = d("");
  const [d, U] = d(null);
  const [B, u] = d(null);
  const [P, h] = d(null);
  const [v, p] = d(null);
  const [L, C] = d(false);
  const [I, x] = d(false);
  const [O, b] = d(false);
  const [g, G] = d(null);
  const _ = A_1(null);
  const { createProfile } = x();

  const R = (r) =>
    r
      ? r.length < 3
        ? "Минимум 3 символа"
        : r.length > 50
        ? "Максимум 50 символов"
        : /^[a-zA-Z0-9_]+$/.test(r)
        ? /^[0-9_]/.test(r)
          ? "Не может начинаться с цифры или _"
          : /_$/.test(r)
          ? "Не может заканчиваться на _"
          : /__/.test(r)
          ? "Не может содержать два _ подряд"
          : null
        : "Только латиница, цифры и _"
      : "Введите username";

  const W = async (r) => {
    r.preventDefault();
    u(null);
    h(null);
    p(null);
    const n = m.trim();
    const c = l.trim();
    if (!n) {
      h("Введите имя");
      return;
    }
    if (n.length < 2) {
      h("Имя должно быть не менее 2 символов");
      return;
    }
    const N = R(c);
    if (N) {
      p(N);
      return;
    }
    x(true);
    try {
      if (!(await r.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      o(2);
    } catch (y) {
      console.error("Failed to check username:", y);
      o(2);
    } finally {
      x(false);
    }
  };

  const H = async (r) => {
    r.preventDefault();

    if (!!d) {
      u(null);
      C(true);
      try {
        await createProfile({
          displayName: m.trim(),
          username: l.trim(),
          avatar: d,
        });
        f_1("/");
      } catch (n) {
        console.error("Profile creation error:", n);

        if (ab(n)) {
          if (n.code === ac.PROFILE_USERNAME_TAKEN) {
            o(1);
            p("Этот username уже занят");
          } else {
            u(n.message || "Ошибка создания профиля");
          }
        } else {
          u("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        C(false);
      }
    }
  };

  const K = () => {
    o(1);
    u(null);
  };

  const T = (r) => {
    if (r === 1) {
      o(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const n = m.trim();
      const c = l.trim();
      if (!n || n.length < 2 || R(c) || v) {
        return;
      }
      o(2);
    }
  };

  const F = q((r) => {
    U(r.emoji);
    b(false);
  }, []);

  const q = q(() => {
    if (!_.current) {
      return;
    }
    const r = _.current.getBoundingClientRect();
    const n = 280;
    const c = 380;
    const N = window.innerWidth - r.right;
    const r_left = r.left;
    const M = window.innerHeight - r.bottom;
    let $;
    let S;
    let w;
    let j;

    if (M >= c + 8) {
      $ = r.bottom + 8;
      w = "top";
    } else {
      $ = r.top - c - 8;
      w = "bottom";
    }

    if (r_left > N) {
      S = r.right - n;
      j = "right";
    } else {
      S = r.left;
      j = "left";
    }

    G({ top: $, left: S, transformOrigin: `${w} ${j}` });
    b(true);
  }, []);

  return a(m, {
    children: [
      a("div", {
        className: t.page,
        children: a("div", {
          className: t.container,
          children: [
            a("div", {
              className: t.header,
              children: [
                a("h1", {
                  className: t.title,
                  children: "Настройка профиля",
                }),
                a("p", {
                  className: t.subtitle,
                  children: "Пожалуйста, укажите данные профиля",
                }),
              ],
            }),
            a(me, {
              steps: 2,
              currentStep: i,
              onStepClick: T,
              className: t.stepper,
            }),
            B && a("div", { className: t.error, children: B }),
            i === 1 &&
              a("form", {
                className: t.form,
                onSubmit: W,
                children: [
                  a("div", {
                    className: t.inputGroup,
                    children: [
                      a("label", { className: t.label, children: "Имя" }),
                      a("p", {
                        className: t.hint,
                        children: "Как тебя будут видеть другие пользователи",
                      }),
                      a("input", {
                        type: "text",
                        className: `${t.input} ${P ? t.inputError : ""}`,
                        value: m,
                        onInput: (r) => {
                          E(r.target.value);
                          h(null);
                        },
                        placeholder: "Иван Иванов",
                        maxLength: 50,
                      }),
                      P && a("span", { className: t.fieldError, children: P }),
                    ],
                  }),
                  a("div", {
                    className: t.inputGroup,
                    children: [
                      a("label", {
                        className: t.label,
                        children: "Username",
                      }),
                      a("p", {
                        className: t.hint,
                        children:
                          'Уникальный никнейм для твоего профиля (латиница, цифры, и "_")',
                      }),
                      a("input", {
                        type: "text",
                        className: `${t.input} ${v ? t.inputError : ""}`,
                        value: l,
                        onInput: (r) => {
                          k(r.target.value.toLowerCase());
                          p(null);
                        },
                        placeholder: "ivanov1998",
                        maxLength: 50,
                      }),
                      v && a("span", { className: t.fieldError, children: v }),
                    ],
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: I,
                    children: I ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            i === 2 &&
              a("form", {
                className: t.form,
                onSubmit: H,
                children: [
                  a("div", {
                    className: t.avatarSection,
                    children: [
                      a("label", {
                        className: t.label,
                        children: "Эмоджи-клан",
                      }),
                      a("p", {
                        className: t.hint,
                        children:
                          "Поменять его позже - нельзя. Выбрав эмоджи, ты вступаешь в клан с теми же, у кого такой же!",
                      }),
                      a("div", {
                        className: t.avatarPicker,
                        children: [
                          a("div", {
                            ref: _,
                            className: `${t.avatar} ${d ? "" : t.avatarEmpty}`,
                            onClick: q,
                            children: d || "?",
                          }),
                          a("span", {
                            className: t.avatarHint,
                            children: d
                              ? "Нажми чтобы изменить"
                              : "Нажми чтобы выбрать",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a(B, {
                    type: "button",
                    variant: "secondary",
                    size: "lg",
                    fullWidth: true,
                    onClick: K,
                    disabled: L,
                    children: "Назад",
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: L || !d,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      O &&
        g &&
        $(
          a("div", {
            className: t.emojiPickerPortal,
            style: {
              position: "fixed",
              top: g.top,
              left: g.left,
              zIndex: 1000 /* 1e3 */,
              transformOrigin: g.transformOrigin,
            },
            children: [
              a("div", {
                className: t.emojiPickerBackdrop,
                onClick: () => b(false),
              }),
              a(l, {
                fallback: null,
                children: a(Ie, {
                  onEmojiSelect: F,
                  onClose: () => b(false),
                  excludeCategories: ["Flags"],
                }),
              }),
            ],
          }),
          document.body
        ),
    ],
  });
};

export { Onboarding as Onboarding, Onboarding as default };
