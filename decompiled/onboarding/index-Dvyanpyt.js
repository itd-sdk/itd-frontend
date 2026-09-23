import {
  u,
  d,
  A,
  E,
  A as A_1,
  $,
  B,
  k,
  z,
  S,
  v,
  u as u_1,
  r,
  ap,
  am,
  l,
} from "./index-B74jCtUp.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BA2skYPV.js",
      "assets/index-B74jCtUp.js",
      "assets/index-CyAz0m9w.css",
      "assets/index-C_tnlE2B.css",
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
      n._sentryDebugIds[i] = "28f13ad0-2f25-45c5-964b-6d17f34bbca8";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-28f13ad0-2f25-45c5-964b-6d17f34bbca8";
    }
  } catch {}
})();
const ie = "wvFM";
const le = "yahX";
const oe = "Ubjs";
const ce = "J52Q";
const de = "M9fp";
const f = { stepper: ie, track: le, progress: oe, step: ce, active: de };
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
      Array.from({ length: steps }, (l, k) => k + 1).map((l) =>
        u(
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
const ue = "as8r";
const pe = "nx9E";
const fe = "llAS";
const he = "FcSx";
const be = "VCyw";
const ge = "bd4l";
const ve = "Otfc";
const Ee = "HEyD";
const Ne = "yyu5";
const ye = "pZYH";
const ke = "i1PH";
const Pe = "xOIG";
const _e = "bMnk";
const Se = "aUPG";
const $e = "fjpP";
const we = "GniT";
const Ce = "reZC";
const je = "vgH1";
const Ae = "N2ch";
const Ie = "iSgD";
const Be = "iwa3";
const Ue = "MCaC";

const t = {
  page: ue,
  container: pe,
  header: fe,
  title: he,
  subtitle: be,
  stepper: ge,
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
  avatar: Ce,
  avatarEmpty: je,
  avatarHint: Ae,
  emojiPickerPortal: Ie,
  emojiPickerBackdrop: Be,
  submitButton: Ue,
};

const De = z(() =>
  l(() => import("./index-BA2skYPV.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (n) => ({
      default: n.EmojiPicker,
    })
  )
);

export const Onboarding = (n) => {
  const [i, o] = d(1);
  const [d, y] = d("");
  const [l, k] = d("");
  const [m, O] = d(null);
  const [A, u] = d(null);
  const [P, h] = d(null);
  const [b, p] = d(null);
  const [I, B] = d(false);
  const [U, D] = d(false);
  const [F, g] = d(false);
  const [v, G] = d(null);
  const _ = A(null);
  const { createProfile } = E();

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

  const z = async (r) => {
    r.preventDefault();
    u(null);
    h(null);
    p(null);
    const a = d.trim();
    const c = l.trim();
    if (!a) {
      h("Введите имя");
      return;
    }
    if (a.length < 2) {
      h("Имя должно быть не менее 2 символов");
      return;
    }
    const E = R(c);
    if (E) {
      p(E);
      return;
    }
    D(true);
    try {
      if (!(await v.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      o(2);
    } catch (N) {
      console.error("Failed to check username:", N);
      o(2);
    } finally {
      D(false);
    }
  };

  const T = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      B(true);
      try {
        await createProfile({
          displayName: d.trim(),
          username: l.trim(),
          avatar: m,
        });
        u_1("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (r(a)) {
          switch (a.code) {
            case am.PROFILE_USERNAME_TAKEN:
            case am.PROFILE_USERNAME_RESERVED: {
              o(1);
              p(ap(a.code, a.message));
              break;
            }
            default: {
              u(ap(a.code, a.message || "Ошибка создания профиля"));
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

  const W = () => {
    o(1);
    u(null);
  };

  const V = (r) => {
    if (r === 1) {
      o(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = d.trim();
      const c = l.trim();
      if (!a || a.length < 2 || R(c) || b) {
        return;
      }
      o(2);
    }
  };

  const Y = A_1((r) => {
    O(r.emoji);
    g(false);
  }, []);

  const Z = A_1(() => {
    if (!_.current) {
      return;
    }
    const r = _.current.getBoundingClientRect();
    const a = 280;
    const c = 380;
    const E = window.innerWidth - r.right;
    const r_left = r.left;
    const X = window.innerHeight - r.bottom;
    let S;
    let $;
    let w;
    let C;

    if (X >= c + 8) {
      S = r.bottom + 8;
      w = "top";
    } else {
      S = r.top - c - 8;
      w = "bottom";
    }

    if (r_left > E) {
      $ = r.right - a;
      C = "right";
    } else {
      $ = r.left;
      C = "left";
    }

    G({ top: S, left: $, transformOrigin: `${w} ${C}` });
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
              onStepClick: V,
              className: t.stepper,
            }),
            A && u("div", { className: t.error, children: A }),
            i === 1 &&
              u("form", {
                className: t.form,
                onSubmit: z,
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
                        value: l,
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
                    disabled: U,
                    children: U ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            i === 2 &&
              u("form", {
                className: t.form,
                onSubmit: T,
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
                            onClick: Z,
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
                    onClick: W,
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
      F &&
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
                onClick: () => g(false),
              }),
              u(k, {
                fallback: null,
                children: u(De, {
                  onEmojiSelect: Y,
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
