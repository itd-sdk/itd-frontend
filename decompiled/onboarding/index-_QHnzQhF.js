import {
  u,
  d,
  A,
  a,
  q,
  B,
  v,
  ac,
  S,
  a6,
  $,
  o,
  ad,
  r,
  o as o_1,
  af,
} from "./index-CR_1arh8.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DDt4idVS.js",
      "assets/index-CR_1arh8.js",
      "assets/index-Dsyw_Rzw.css",
      "assets/index-DaE5n0lI.css",
    ])
) => i.map((i) => d[i]);
(() => {
  try {
    const s =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    s.SENTRY_RELEASE = { id: "1.1.2" };
    const i = new s.Error().stack;

    if (i) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[i] = "7b135254-4c6d-4c7a-8e01-8c5613d3d464";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-7b135254-4c6d-4c7a-8e01-8c5613d3d464";
    }
  } catch {}
})();
const ie = "OCNO";
const oe = "K9P3";
const le = "FUrV";
const ce = "PrAi";
const de = "JwiW";
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
const ue = "BTua";
const pe = "EV05";
const fe = "x8bA";
const he = "MymO";
const ge = "qScO";
const ve = "BsE8";
const be = "rGt0";
const Ee = "k32K";
const Ne = "wx6G";
const ye = "xn2E";
const ke = "y8zD";
const Pe = "dv39";
const _e = "dx01";
const Se = "gQ4l";
const $e = "sK6V";
const we = "zFCz";
const Ae = "X2YV";
const Be = "VNLR";
const Ce = "iFEF";
const je = "Gpc5";
const Ie = "e8JI";
const Re = "imYy";

const t = {
  page: ue,
  container: pe,
  header: fe,
  title: he,
  subtitle: ge,
  stepper: ve,
  form: be,
  error: Ee,
  inputGroup: Ne,
  label: ye,
  hint: ke,
  input: Pe,
  inputError: _e,
  fieldError: Se,
  avatarSection: $e,
  avatarPicker: we,
  avatar: Ae,
  avatarEmpty: Be,
  avatarHint: Ce,
  emojiPickerPortal: je,
  emojiPickerBackdrop: Ie,
  submitButton: Re,
};

const xe = o_1(() =>
  af(() => import("./index-DDt4idVS.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (s) => ({
      default: s.EmojiPicker,
    })
  )
);

export const Onboarding = (s) => {
  const [i, l] = d(1);
  const [d, y] = d("");
  const [o, k] = d("");
  const [m, z] = d(null);
  const [C, u] = d(null);
  const [P, h] = d(null);
  const [g, p] = d(null);
  const [j, I] = d(false);
  const [R, x] = d(false);
  const [F, v] = d(false);
  const [b, G] = d(null);
  const _ = A(null);
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

  const T = async (r) => {
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
    const E = U(c);
    if (E) {
      p(E);
      return;
    }
    x(true);
    try {
      if (!(await a6.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      l(2);
    } catch (N) {
      console.error("Failed to check username:", N);
      l(2);
    } finally {
      x(false);
    }
  };

  const W = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      I(true);
      try {
        await createProfile({
          displayName: d.trim(),
          username: o.trim(),
          avatar: m,
        });
        $("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (o(a)) {
          switch (a.code) {
            case r.PROFILE_USERNAME_TAKEN:
            case r.PROFILE_USERNAME_RESERVED: {
              l(1);
              p(ad(a.code, a.message));
              break;
            }
            default: {
              u(ad(a.code, a.message || "Ошибка создания профиля"));
            }
          }
        } else {
          u("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        I(false);
      }
    }
  };

  const H = () => {
    l(1);
    u(null);
  };

  const K = (r) => {
    if (r === 1) {
      l(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = d.trim();
      const c = o.trim();
      if (!a || a.length < 2 || U(c) || g) {
        return;
      }
      l(2);
    }
  };

  const M = q((r) => {
    z(r.emoji);
    v(false);
  }, []);

  const Y = q(() => {
    if (!_.current) {
      return;
    }
    const r = _.current.getBoundingClientRect();
    const a = 280;
    const c = 380;
    const E = window.innerWidth - r.right;
    const r_left = r.left;
    const q = window.innerHeight - r.bottom;
    let S;
    let $;
    let w;
    let A;

    if (q >= c + 8) {
      S = r.bottom + 8;
      w = "top";
    } else {
      S = r.top - c - 8;
      w = "bottom";
    }

    if (r_left > E) {
      $ = r.right - a;
      A = "right";
    } else {
      $ = r.left;
      A = "left";
    }

    G({ top: S, left: $, transformOrigin: `${w} ${A}` });
    v(true);
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
              onStepClick: K,
              className: t.stepper,
            }),
            C && u("div", { className: t.error, children: C }),
            i === 1 &&
              u("form", {
                className: t.form,
                onSubmit: T,
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
                        className: `${t.input} ${g ? t.inputError : ""}`,
                        value: o,
                        onInput: (r) => {
                          k(r.target.value.toLowerCase());
                          p(null);
                        },
                        placeholder: "ivanov1998",
                        maxLength: 50,
                      }),
                      g && u("span", { className: t.fieldError, children: g }),
                    ],
                  }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: R,
                    children: R ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            i === 2 &&
              u("form", {
                className: t.form,
                onSubmit: W,
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
                            onClick: Y,
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
                    onClick: H,
                    disabled: j,
                    children: "Назад",
                  }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: j || !m,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      F &&
        b &&
        v(
          u("div", {
            className: t.emojiPickerPortal,
            style: {
              position: "fixed",
              top: b.top,
              left: b.left,
              zIndex: 1000 /* 1e3 */,
              transformOrigin: b.transformOrigin,
            },
            children: [
              u("div", {
                className: t.emojiPickerBackdrop,
                onClick: () => v(false),
              }),
              u(ac, {
                fallback: null,
                children: u(xe, {
                  onEmojiSelect: M,
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
