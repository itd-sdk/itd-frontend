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
} from "./index-DuQT229k.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BqRZDh0J.js",
      "assets/index-DuQT229k.js",
      "assets/index-Bl28YDgI.css",
      "assets/index-BN_QHAZ7.css",
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
    a.SENTRY_RELEASE = { id: "1.1.2" };
    const i = new a.Error().stack;

    if (i) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[i] = "8be99eff-fdb9-4819-9dd5-7713d67a0e54";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-8be99eff-fdb9-4819-9dd5-7713d67a0e54";
    }
  } catch {}
})();
const se = "HTwZ";
const ie = "IaS9";
const le = "yusD";
const oe = "jRx9";
const ce = "hcWC";
const f = { stepper: se, track: ie, progress: le, step: oe, active: ce };
function de({ steps, currentStep, onStepClick, className }) {
  const y = ((currentStep - 1) / (steps - 1)) * 100;
  return steps("div", {
    className: `${f.stepper} ${className || ""}`,
    children: [
      steps("div", {
        className: f.track,
        children: steps("div", {
          className: f.progress,
          style: { width: `${y}%` },
        }),
      }),
      Array.from({ length: steps }, (l, E) => E + 1).map((l) =>
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
const me = "oVeX";
const ue = "VRQm";
const pe = "pRO0";
const fe = "TbNb";
const he = "DaWV";
const be = "unvw";
const ve = "kVAP";
const ge = "DQnB";
const Ne = "VuIq";
const ke = "ORct";
const ye = "KvyP";
const Ee = "QQbq";
const Pe = "oQ5L";
const _e = "HilM";
const Se = "PDfq";
const $e = "NU0e";
const we = "Hkuu";
const je = "mq0S";
const Ae = "UbXF";
const Ce = "RfZC";
const Be = "aZYL";
const Ie = "TK2L";

const t = {
  page: me,
  container: ue,
  header: pe,
  title: fe,
  subtitle: he,
  stepper: be,
  form: ve,
  error: ge,
  inputGroup: Ne,
  label: ke,
  hint: ye,
  input: Ee,
  inputError: Pe,
  fieldError: _e,
  avatarSection: Se,
  avatarPicker: $e,
  avatar: we,
  avatarEmpty: je,
  avatarHint: Ae,
  emojiPickerPortal: Ce,
  emojiPickerBackdrop: Be,
  submitButton: Ie,
};

const De = z(() =>
  _(() => import("./index-BqRZDh0J.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (a) => ({
      default: a.EmojiPicker,
    })
  )
);

export const Onboarding = (a) => {
  const [i, o] = d(1);
  const [d, y] = d("");
  const [l, E] = d("");
  const [m, x] = d(null);
  const [C, u] = d(null);
  const [P, h] = d(null);
  const [b, p] = d(null);
  const [B, I] = d(false);
  const [D, R] = d(false);
  const [H, v] = d(false);
  const [g, O] = d(null);
  const _ = A_1(null);
  const { createProfile } = x();

  const L = (r) =>
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
    const n = d.trim();
    const c = l.trim();
    if (!n) {
      h("Введите имя");
      return;
    }
    if (n.length < 2) {
      h("Имя должно быть не менее 2 символов");
      return;
    }
    const N = L(c);
    if (N) {
      p(N);
      return;
    }
    R(true);
    try {
      if (!(await r.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      o(2);
    } catch (k) {
      console.error("Failed to check username:", k);
      o(2);
    } finally {
      R(false);
    }
  };

  const z = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      I(true);
      try {
        await createProfile({
          displayName: d.trim(),
          username: l.trim(),
          avatar: m,
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
        I(false);
      }
    }
  };

  const V = () => {
    o(1);
    u(null);
  };

  const q = (r) => {
    if (r === 1) {
      o(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const n = d.trim();
      const c = l.trim();
      if (!n || n.length < 2 || L(c) || b) {
        return;
      }
      o(2);
    }
  };

  const F = q((r) => {
    x(r.emoji);
    v(false);
  }, []);

  const Q = q(() => {
    if (!_.current) {
      return;
    }
    const r = _.current.getBoundingClientRect();
    const n = 280;
    const c = 380;
    const N = window.innerWidth - r.right;
    const r_left = r.left;
    const G = window.innerHeight - r.bottom;
    let S;
    let $;
    let w;
    let j;

    if (G >= c + 8) {
      S = r.bottom + 8;
      w = "top";
    } else {
      S = r.top - c - 8;
      w = "bottom";
    }

    if (r_left > N) {
      $ = r.right - n;
      j = "right";
    } else {
      $ = r.left;
      j = "left";
    }

    O({ top: S, left: $, transformOrigin: `${w} ${j}` });
    v(true);
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
            a(de, {
              steps: 2,
              currentStep: i,
              onStepClick: q,
              className: t.stepper,
            }),
            C && a("div", { className: t.error, children: C }),
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
                        value: d,
                        onInput: (r) => {
                          y(r.target.value);
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
                        className: `${t.input} ${b ? t.inputError : ""}`,
                        value: l,
                        onInput: (r) => {
                          E(r.target.value.toLowerCase());
                          p(null);
                        },
                        placeholder: "ivanov1998",
                        maxLength: 50,
                      }),
                      b && a("span", { className: t.fieldError, children: b }),
                    ],
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: D,
                    children: D ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            i === 2 &&
              a("form", {
                className: t.form,
                onSubmit: z,
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
                            className: `${t.avatar} ${m ? "" : t.avatarEmpty}`,
                            onClick: Q,
                            children: m || "?",
                          }),
                          a("span", {
                            className: t.avatarHint,
                            children: m
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
                    onClick: V,
                    disabled: B,
                    children: "Назад",
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: B || !m,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      H &&
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
                onClick: () => v(false),
              }),
              a(l, {
                fallback: null,
                children: a(De, {
                  onEmojiSelect: F,
                  onClose: () => v(false),
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
