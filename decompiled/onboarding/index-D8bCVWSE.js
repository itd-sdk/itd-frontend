import {
  u,
  d,
  A,
  w,
  A as A_1,
  $,
  B,
  B as B_1,
  u_1_1 as z_1,
  k,
  o,
  u as u_1,
  ah as x_1,
  ah,
  u_1 as u_1_1,
  l,
} from "./index-B9FitUXy.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-1bYLec0_.js",
      "assets/index-B9FitUXy.js",
      "assets/index-BQOLb5iE.css",
      "assets/index-DF_WYBIA.css",
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
      n._sentryDebugIds[i] = "3f277dca-69b1-48d8-bcf4-d54f2743e24f";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-3f277dca-69b1-48d8-bcf4-d54f2743e24f";
    }
  } catch {}
})();
const ie = "Wram";
const oe = "PZvV";
const le = "dgEC";
const ce = "v2n4";
const de = "Grg4";
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
const ue = "UIRS";
const pe = "bJGF";
const fe = "Dcd8";
const he = "AL56";
const be = "rjCS";
const ge = "R3VT";
const ve = "n3L0";
const Ee = "VIca";
const Ne = "Zbpo";
const ye = "rTmu";
const ke = "vG2s";
const Pe = "voGa";
const _e = "oMYb";
const Se = "ZcxA";
const $e = "thnq";
const we = "Mpwz";
const Ae = "NNzS";
const je = "ETeM";
const Ce = "yUMi";
const Ie = "Iycm";
const Re = "PCJm";
const Ue = "JUDn";

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
  avatar: Ae,
  avatarEmpty: je,
  avatarHint: Ce,
  emojiPickerPortal: Ie,
  emojiPickerBackdrop: Re,
  submitButton: Ue,
};

const Be = z_1(() =>
  l(() => import("./index-1bYLec0_.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (n) => ({
      default: n.EmojiPicker,
    })
  )
);

export const Onboarding = (n) => {
  const [i, l] = d(1);
  const [d, y] = d("");
  const [o, k] = d("");
  const [m, G] = d(null);
  const [C, u] = d(null);
  const [P, h] = d(null);
  const [b, p] = d(null);
  const [I, R] = d(false);
  const [U, B] = d(false);
  const [T, g] = d(false);
  const [v, M] = d(null);
  const _ = A(null);
  const { createProfile } = w();

  const D = (r) =>
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
    const E = D(c);
    if (E) {
      p(E);
      return;
    }
    B(true);
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
      B(false);
    }
  };

  const W = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      R(true);
      try {
        await createProfile({
          displayName: d.trim(),
          username: o.trim(),
          avatar: m,
        });
        u_1("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (x_1(a)) {
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
        R(false);
      }
    }
  };

  const H = () => {
    l(1);
    u(null);
  };

  const V = (r) => {
    if (r === 1) {
      l(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = d.trim();
      const c = o.trim();
      if (!a || a.length < 2 || D(c) || b) {
        return;
      }
      l(2);
    }
  };

  const Z = A_1((r) => {
    G(r.emoji);
    g(false);
  }, []);

  const J = A_1(() => {
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
    let A;

    if (Y >= c + 8) {
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

    M({ top: S, left: $, transformOrigin: `${w} ${A}` });
    g(true);
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
              onStepClick: V,
              className: t.stepper,
            }),
            C && u("div", { className: t.error, children: C }),
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
                    disabled: U,
                    children: U ? "Проверка..." : "Продолжить",
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
                            onClick: J,
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
      T &&
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
              u(B_1, {
                fallback: null,
                children: u(Be, {
                  onEmojiSelect: Z,
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
