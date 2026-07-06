import {
  a,
  d,
  A,
  x,
  q,
  $,
  B,
  l,
  q as q_1,
  m,
  r,
  f as f_1,
  ab,
  ac,
  _,
} from "./index-CFv_0Hh6.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BbgcGRkQ.js",
      "assets/index-CFv_0Hh6.js",
      "assets/index-D8JMceH9.css",
      "assets/index-DvVlrLyS.css",
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
      a._sentryDebugIds[i] = "06f61b8b-df2e-42b1-8e92-6e86439068ba";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-06f61b8b-df2e-42b1-8e92-6e86439068ba";
    }
  } catch {}
})();
const se = "EanT";
const ie = "LH79";
const le = "CmXL";
const oe = "CLQd";
const ce = "tZbt";
const f = { stepper: se, track: ie, progress: le, step: oe, active: ce };
function me({ steps, currentStep, onStepClick, className }) {
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
const de = "yUK6";
const ue = "ehol";
const pe = "U4E8";
const fe = "JWlU";
const he = "s9Pq";
const be = "aI7f";
const ge = "m83n";
const ve = "oz5O";
const Ne = "J7ce";
const ke = "UkSO";
const ye = "SufD";
const Ee = "z9Qx";
const Pe = "RHOR";
const _e = "rAGK";
const Se = "K948";
const $e = "zPi0";
const we = "iy5b";
const Ae = "fbBS";
const Be = "ccxd";
const Ce = "atpB";
const je = "u0if";
const Ue = "k3iz";

const t = {
  page: de,
  container: ue,
  header: pe,
  title: fe,
  subtitle: he,
  stepper: be,
  form: ge,
  error: ve,
  inputGroup: Ne,
  label: ke,
  hint: ye,
  input: Ee,
  inputError: Pe,
  fieldError: _e,
  avatarSection: Se,
  avatarPicker: $e,
  avatar: we,
  avatarEmpty: Ae,
  avatarHint: Be,
  emojiPickerPortal: Ce,
  emojiPickerBackdrop: je,
  submitButton: Ue,
};

const Ie = q_1(() =>
  _(() => import("./index-BbgcGRkQ.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (a) => ({
      default: a.EmojiPicker,
    })
  )
);

export const Onboarding = (a) => {
  const [i, o] = d(1);
  const [m, y] = d("");
  const [l, E] = d("");
  const [d, D] = d(null);
  const [C, u] = d(null);
  const [P, h] = d(null);
  const [b, p] = d(null);
  const [j, U] = d(false);
  const [I, L] = d(false);
  const [R, g] = d(false);
  const [v, O] = d(null);
  const _ = A(null);
  const { createProfile } = x();

  const x = (r) =>
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

  const T = async (r) => {
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
    const N = x(c);
    if (N) {
      p(N);
      return;
    }
    L(true);
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
      L(false);
    }
  };

  const W = async (r) => {
    r.preventDefault();

    if (!!d) {
      u(null);
      U(true);
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
        U(false);
      }
    }
  };

  const G = () => {
    o(1);
    u(null);
  };

  const F = (r) => {
    if (r === 1) {
      o(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const n = m.trim();
      const c = l.trim();
      if (!n || n.length < 2 || x(c) || b) {
        return;
      }
      o(2);
    }
  };

  const K = q((r) => {
    D(r.emoji);
    g(false);
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
    const J = window.innerHeight - r.bottom;
    let S;
    let $;
    let w;
    let A;

    if (J >= c + 8) {
      S = r.bottom + 8;
      w = "top";
    } else {
      S = r.top - c - 8;
      w = "bottom";
    }

    if (r_left > N) {
      $ = r.right - n;
      A = "right";
    } else {
      $ = r.left;
      A = "left";
    }

    O({ top: S, left: $, transformOrigin: `${w} ${A}` });
    g(true);
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
              onStepClick: F,
              className: t.stepper,
            }),
            C && a("div", { className: t.error, children: C }),
            i === 1 &&
              a("form", {
                className: t.form,
                onSubmit: T,
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
                    disabled: I,
                    children: I ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            i === 2 &&
              a("form", {
                className: t.form,
                onSubmit: W,
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
                    onClick: G,
                    disabled: j,
                    children: "Назад",
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: j || !d,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      R &&
        v &&
        $(
          a("div", {
            className: t.emojiPickerPortal,
            style: {
              position: "fixed",
              top: v.top,
              left: v.left,
              zIndex: 1000 /* 1e3 */,
              transformOrigin: v.transformOrigin,
            },
            children: [
              a("div", {
                className: t.emojiPickerBackdrop,
                onClick: () => g(false),
              }),
              a(l, {
                fallback: null,
                children: a(Ie, {
                  onEmojiSelect: K,
                  onClose: () => g(false),
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
