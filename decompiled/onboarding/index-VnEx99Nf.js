import {
  u,
  d,
  B as A_1,
  w,
  A_1 as A_1_1,
  $,
  B,
  j,
  u_1_1 as z_1,
  k,
  o,
  u as u_1,
  A_1_1 as A_1_1_1,
  ah,
  u_1 as u_1_1,
  l,
} from "./index-pEgBAsWz.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-D2VmzBNL.js",
      "assets/index-pEgBAsWz.js",
      "assets/index-D1GFeBFD.css",
      "assets/index-BzUT4zfL.css",
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
      n._sentryDebugIds[i] = "89e52086-12db-4c02-a6e7-f96a2bfc6040";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-89e52086-12db-4c02-a6e7-f96a2bfc6040";
    }
  } catch {}
})();
const ie = "n02P";
const oe = "lz70";
const le = "XtSV";
const ce = "Zcwc";
const de = "z5Cr";
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
const ue = "VTZF";
const pe = "TyPa";
const fe = "HhhY";
const he = "wvHM";
const ge = "VZEL";
const be = "jOKl";
const ve = "euYq";
const Ee = "Cx85";
const Ne = "izsl";
const ye = "RWys";
const ke = "b8Nj";
const Pe = "ef9y";
const _e = "QZr1";
const Se = "VtHc";
const $e = "ThUm";
const we = "mOP8";
const je = "G3gZ";
const Ae = "nuIf";
const Ce = "P9TP";
const Ie = "F9HX";
const Be = "ioIX";
const Re = "nAS8";

const t = {
  page: ue,
  container: pe,
  header: fe,
  title: he,
  subtitle: ge,
  stepper: be,
  form: ve,
  error: Ee,
  inputGroup: Ne,
  label: ye,
  hint: ke,
  input: Pe,
  inputError: _e,
  fieldError: Se,
  avatarSection: $e,
  avatarPicker: we,
  avatar: je,
  avatarEmpty: Ae,
  avatarHint: Ce,
  emojiPickerPortal: Ie,
  emojiPickerBackdrop: Be,
  submitButton: Re,
};

const Ue = z_1(() =>
  l(() => import("./index-D2VmzBNL.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (n) => ({
      default: n.EmojiPicker,
    })
  )
);

export const Onboarding = (n) => {
  const [i, l] = d(1);
  const [d, y] = d("");
  const [o, k] = d("");
  const [m, H] = d(null);
  const [C, u] = d(null);
  const [P, h] = d(null);
  const [g, p] = d(null);
  const [I, B] = d(false);
  const [R, U] = d(false);
  const [O, b] = d(false);
  const [v, T] = d(null);
  const _ = A_1(null);
  const { createProfile } = w();

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

  const V = async (r) => {
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
    const E = L(c);
    if (E) {
      p(E);
      return;
    }
    U(true);
    try {
      if (!(await o.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      l(2);
    } catch (N) {
      console.error("Failed to check username:", N);
      l(2);
    } finally {
      U(false);
    }
  };

  const W = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      B(true);
      try {
        await createProfile({
          displayName: d.trim(),
          username: o.trim(),
          avatar: m,
        });
        u_1("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (A_1_1_1(a)) {
          switch (a.code) {
            case u_1_1.PROFILE_USERNAME_TAKEN:
            case u_1_1.PROFILE_USERNAME_RESERVED: {
              l(1);
              p(ah(a.code, a.message));
              break;
            }
            default: {
              u(ah(a.code, a.message || "Ошибка создания профиля"));
            }
          }
        } else {
          u("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        B(false);
      }
    }
  };

  const Z = () => {
    l(1);
    u(null);
  };

  const G = (r) => {
    if (r === 1) {
      l(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = d.trim();
      const c = o.trim();
      if (!a || a.length < 2 || L(c) || g) {
        return;
      }
      l(2);
    }
  };

  const M = A_1_1((r) => {
    H(r.emoji);
    b(false);
  }, []);

  const X = A_1_1(() => {
    if (!_.current) {
      return;
    }
    const r = _.current.getBoundingClientRect();
    const a = 280;
    const c = 380;
    const E = window.innerWidth - r.right;
    const r_left = r.left;
    const Y = window.innerHeight - r.bottom;
    let S;
    let $;
    let w;
    let j;

    if (Y >= c + 8) {
      S = r.bottom + 8;
      w = "top";
    } else {
      S = r.top - c - 8;
      w = "bottom";
    }

    if (r_left > E) {
      $ = r.right - a;
      j = "right";
    } else {
      $ = r.left;
      j = "left";
    }

    T({ top: S, left: $, transformOrigin: `${w} ${j}` });
    b(true);
  }, []);

  return u(k, {
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
              onStepClick: G,
              className: t.stepper,
            }),
            C && u("div", { className: t.error, children: C }),
            i === 1 &&
              u("form", {
                className: t.form,
                onSubmit: V,
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
                            onClick: X,
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
                    onClick: Z,
                    disabled: I,
                    children: "Назад",
                  }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: I || !m,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      O &&
        v &&
        $(
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
                onClick: () => b(false),
              }),
              u(j, {
                fallback: null,
                children: u(Ue, {
                  onEmojiSelect: M,
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
