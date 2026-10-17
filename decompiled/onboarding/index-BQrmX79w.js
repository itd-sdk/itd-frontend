import {
  u,
  d,
  A,
  Y,
  q,
  $,
  B,
  k,
  z,
  S,
  aB as O_1,
  u as u_1,
  K,
  aE,
  aB,
  l,
} from "./index-DqQficWb.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DPxzkGGo.js",
      "assets/index-DqQficWb.js",
      "assets/index-DzmIAxIK.css",
      "assets/index-nGa9mHZM.css",
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
      n._sentryDebugIds[i] = "9951cc45-f173-42c7-a916-f999e82ede07";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-9951cc45-f173-42c7-a916-f999e82ede07";
    }
  } catch {}
})();
const ie = "cDbw";
const oe = "EabV";
const le = "VvxL";
const ce = "t7pV";
const de = "zP4X";
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
const ue = "uAVf";
const pe = "ww9h";
const fe = "xjpe";
const he = "kUTp";
const ge = "soL1";
const ve = "F102";
const be = "rUpS";
const Ee = "anlV";
const Ne = "mUqN";
const ye = "fJcd";
const ke = "SKU1";
const Pe = "vOwf";
const _e = "mSLr";
const Se = "Ce9a";
const we = "qLNy";
const $e = "OuAW";
const Ae = "fD6Z";
const je = "dIPV";
const Ie = "Wwa0";
const Ue = "yPa4";
const Be = "iixI";
const Ce = "rvRH";

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
  avatarSection: we,
  avatarPicker: $e,
  avatar: Ae,
  avatarEmpty: je,
  avatarHint: Ie,
  emojiPickerPortal: Ue,
  emojiPickerBackdrop: Be,
  submitButton: Ce,
};

const Le = z(() =>
  l(() => import("./index-DPxzkGGo.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (n) => ({
      default: n.EmojiPicker,
    })
  )
);

export const Onboarding = (n) => {
  const [i, l] = d(1);
  const [d, y] = d("");
  const [o, k] = d("");
  const [m, V] = d(null);
  const [I, u] = d(null);
  const [P, h] = d(null);
  const [g, p] = d(null);
  const [U, B] = d(false);
  const [C, L] = d(false);
  const [z, v] = d(false);
  const [b, W] = d(null);
  const _ = A(null);
  const { createProfile } = Y();

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

  const H = async (r) => {
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
    const E = R(c);
    if (E) {
      p(E);
      return;
    }
    L(true);
    try {
      if (!(await O_1.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      l(2);
    } catch (N) {
      console.error("Failed to check username:", N);
      l(2);
    } finally {
      L(false);
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
          username: o.trim(),
          avatar: m,
        });
        u_1("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (K(a)) {
          switch (a.code) {
            case aB.PROFILE_USERNAME_TAKEN:
            case aB.PROFILE_USERNAME_RESERVED: {
              l(1);
              p(aE(a.code, a.message));
              break;
            }
            default: {
              u(aE(a.code, a.message || "Ошибка создания профиля"));
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

  const G = () => {
    l(1);
    u(null);
  };

  const q = (r) => {
    if (r === 1) {
      l(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = d.trim();
      const c = o.trim();
      if (!a || a.length < 2 || R(c) || g) {
        return;
      }
      l(2);
    }
  };

  const K = q((r) => {
    V(r.emoji);
    v(false);
  }, []);

  const M = q(() => {
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
    let w;
    let $;
    let A;

    if (Y >= c + 8) {
      S = r.bottom + 8;
      $ = "top";
    } else {
      S = r.top - c - 8;
      $ = "bottom";
    }

    if (r_left > E) {
      w = r.right - a;
      A = "right";
    } else {
      w = r.left;
      A = "left";
    }

    W({ top: S, left: w, transformOrigin: `${$} ${A}` });
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
              onStepClick: q,
              className: t.stepper,
            }),
            I && u("div", { className: t.error, children: I }),
            i === 1 &&
              u("form", {
                className: t.form,
                onSubmit: H,
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
                    disabled: C,
                    children: C ? "Проверка..." : "Продолжить",
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
                            onClick: M,
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
                    onClick: G,
                    disabled: U,
                    children: "Назад",
                  }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: U || !m,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      z &&
        b &&
        $(
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
              u(k, {
                fallback: null,
                children: u(Le, {
                  onEmojiSelect: K,
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
