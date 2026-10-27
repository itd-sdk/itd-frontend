import {
  u,
  d,
  B as A_1,
  a,
  a as a_1,
  E,
  B,
  $ as ae_1,
  af,
  S,
  a7,
  $,
  y,
  ag,
  a_1 as a_1_1,
  ah,
} from "./index-BQxlThnW-portal20261026.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-D5aBdzKn-portal20261026.js",
      "assets/index-BQxlThnW-portal20261026.js",
      "assets/index-Eslh3jTa.css",
      "assets/index-CCnXlMPs.css",
    ])
) => i.map((i) => d[i]);
(() => {
  try {
    const n =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    n.SENTRY_RELEASE = { id: "1.1.2" };
    const i = new n.Error().stack;

    if (i) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[i] = "3963af0b-e04f-44a6-807e-97bb0da6e046";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-3963af0b-e04f-44a6-807e-97bb0da6e046";
    }
  } catch {}
})();
const ie = "dbZ8";
const oe = "ylt6";
const le = "ydJ2";
const ce = "DP0y";
const de = "MHfB";
const f = { stepper: ie, track: oe, progress: le, step: ce, active: de };
function me({ steps, currentStep, onStepClick, className }) {
  const y = ((currentStep - 1) / (steps - 1)) * 100;
  return u("div", {
    className: `${f.stepper} ${className || ""}`,
    children: [
      u("div", {
        className: f.track,
        children: u("div", {
          className: f.progress,
          style: { width: `${y}%` },
        }),
      }),
      Array.from({ length: steps }, (o, k) => k + 1).map((o) =>
        u(
          "button",
          {
            type: "button",
            className: `${f.step} ${currentStep >= o ? f.active : ""}`,
            onClick: () => onStepClick?.(o),
            children: o,
          },
          o
        )
      ),
    ],
  });
}
const ue = "OBEM";
const pe = "QW6f";
const fe = "Gk8j";
const he = "znVC";
const be = "hrGO";
const ge = "oqeW";
const ve = "hI2o";
const Ne = "sDOi";
const Ee = "mp9l";
const ye = "KQuN";
const ke = "pPQF";
const Pe = "Yi5G";
const _e = "HNA2";
const Se = "DD1p";
const $e = "JXRS";
const je = "zlnC";
const we = "pd6I";
const Ae = "ppru";
const Ie = "J7zj";
const Be = "MYH8";
const Ce = "IUZe";
const De = "N6av";

const t = {
  page: ue,
  container: pe,
  header: fe,
  title: he,
  subtitle: be,
  stepper: ge,
  form: ve,
  error: Ne,
  inputGroup: Ee,
  label: ye,
  hint: ke,
  input: Pe,
  inputError: _e,
  fieldError: Se,
  avatarSection: $e,
  avatarPicker: je,
  avatar: we,
  avatarEmpty: Ae,
  avatarHint: Ie,
  emojiPickerPortal: Be,
  emojiPickerBackdrop: Ce,
  submitButton: De,
};

const Re = af(() =>
  ah(
    () => import("./index-D5aBdzKn-portal20261026.js"),
    __vite__mapDeps([0, 1, 2, 3])
  ).then((n) => ({
    default: n.EmojiPicker,
  }))
);

export const Onboarding = (n) => {
  const [i, l] = d(1);
  const [d, y] = d("");
  const [o, k] = d("");
  const [m, x] = d(null);
  const [I, u] = d(null);
  const [P, h] = d(null);
  const [b, p] = d(null);
  const [B, C] = d(false);
  const [D, R] = d(false);
  const [H, g] = d(false);
  const [v, G] = d(null);
  const _ = A_1(null);
  const { createProfile } = a();

  const U = (r) =>
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

  const F = async (r) => {
    r.preventDefault();
    u(null);
    h(null);
    p(null);
    const a = d.trim();
    const c = o.trim();
    if (!a) {
      h("Введите имя");
      return;
    }
    if (a.length < 2) {
      h("Имя должно быть не менее 2 символов");
      return;
    }
    const N = U(c);
    if (N) {
      p(N);
      return;
    }
    R(true);
    try {
      if (!(await a7.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      l(2);
    } catch (E) {
      console.error("Failed to check username:", E);
      l(2);
    } finally {
      R(false);
    }
  };

  const M = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      C(true);
      try {
        await createProfile({
          displayName: d.trim(),
          username: o.trim(),
          avatar: m,
        });
        $("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (y(a)) {
          switch (a.code) {
            case a_1_1.PROFILE_USERNAME_TAKEN:
            case a_1_1.PROFILE_USERNAME_RESERVED: {
              l(1);
              p(ag(a.code, a.message));
              break;
            }
            default: {
              u(ag(a.code, a.message || "Ошибка создания профиля"));
            }
          }
        } else {
          u("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        C(false);
      }
    }
  };

  const T = () => {
    l(1);
    u(null);
  };

  const Y = (r) => {
    if (r === 1) {
      l(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = d.trim();
      const c = o.trim();
      if (!a || a.length < 2 || U(c) || b) {
        return;
      }
      l(2);
    }
  };

  const J = a_1((r) => {
    x(r.emoji);
    g(false);
  }, []);

  const Q = a_1(() => {
    if (!_.current) {
      return;
    }
    const r = _.current.getBoundingClientRect();
    const a = 280;
    const c = 380;
    const N = window.innerWidth - r.right;
    const r_left = r.left;
    const V = window.innerHeight - r.bottom;
    let S;
    let $;
    let j;
    let w;

    if (V >= c + 8) {
      S = r.bottom + 8;
      j = "top";
    } else {
      S = r.top - c - 8;
      j = "bottom";
    }

    if (r_left > N) {
      $ = r.right - a;
      w = "right";
    } else {
      $ = r.left;
      w = "left";
    }

    G({ top: S, left: $, transformOrigin: `${j} ${w}` });
    g(true);
  }, []);

  return u(S, {
    children: [
      u("div", {
        className: t.page,
        children: u("div", {
          className: t.container,
          children: [
            u("div", {
              className: t.header,
              children: [
                u("h1", {
                  className: t.title,
                  children: "Настройка профиля",
                }),
                u("p", {
                  className: t.subtitle,
                  children: "Пожалуйста, укажите данные профиля",
                }),
              ],
            }),
            u(me, {
              steps: 2,
              currentStep: i,
              onStepClick: Y,
              className: t.stepper,
            }),
            I && u("div", { className: t.error, children: I }),
            i === 1 &&
              u("form", {
                className: t.form,
                onSubmit: F,
                children: [
                  u("div", {
                    className: t.inputGroup,
                    children: [
                      u("label", { className: t.label, children: "Имя" }),
                      u("p", {
                        className: t.hint,
                        children: "Как тебя будут видеть другие пользователи",
                      }),
                      u("input", {
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
                      P && u("span", { className: t.fieldError, children: P }),
                    ],
                  }),
                  u("div", {
                    className: t.inputGroup,
                    children: [
                      u("label", {
                        className: t.label,
                        children: "Username",
                      }),
                      u("p", {
                        className: t.hint,
                        children:
                          'Уникальный никнейм для твоего профиля (латиница, цифры, и "_")',
                      }),
                      u("input", {
                        type: "text",
                        className: `${t.input} ${b ? t.inputError : ""}`,
                        value: o,
                        onInput: (r) => {
                          k(r.target.value.toLowerCase());
                          p(null);
                        },
                        placeholder: "ivanov1998",
                        maxLength: 50,
                      }),
                      b && u("span", { className: t.fieldError, children: b }),
                    ],
                  }),
                  u(B, {
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
              u("form", {
                className: t.form,
                onSubmit: M,
                children: [
                  u("div", {
                    className: t.avatarSection,
                    children: [
                      u("label", {
                        className: t.label,
                        children: "Эмоджи-клан",
                      }),
                      u("p", {
                        className: t.hint,
                        children:
                          "Поменять его позже - нельзя. Выбрав эмоджи, ты вступаешь в клан с теми же, у кого такой же!",
                      }),
                      u("div", {
                        className: t.avatarPicker,
                        children: [
                          u("div", {
                            ref: _,
                            className: `${t.avatar} ${m ? "" : t.avatarEmpty}`,
                            onClick: Q,
                            children: m || "?",
                          }),
                          u("span", {
                            className: t.avatarHint,
                            children: m
                              ? "Нажми чтобы изменить"
                              : "Нажми чтобы выбрать",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u(B, {
                    type: "button",
                    variant: "secondary",
                    size: "lg",
                    fullWidth: true,
                    onClick: T,
                    disabled: B,
                    children: "Назад",
                  }),
                  u(B, {
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
        v &&
        E(
          u("div", {
            className: t.emojiPickerPortal,
            style: {
              position: "fixed",
              top: v.top,
              left: v.left,
              zIndex: 1000 /* 1e3 */,
              transformOrigin: v.transformOrigin,
            },
            children: [
              u("div", {
                className: t.emojiPickerBackdrop,
                onClick: () => g(false),
              }),
              u(ae_1, {
                fallback: null,
                children: u(Re, {
                  onEmojiSelect: J,
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
