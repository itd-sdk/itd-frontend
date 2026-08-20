import {
  u,
  d,
  A,
  w,
  $ as q_1,
  $,
  B,
  B as B_1,
  z,
  k,
  o,
  u as u_1,
  x,
  ah,
  u_1 as u_1_1,
  l,
} from "./index-DDTOXJaD.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-B9WYBH4_.js",
      "assets/index-DDTOXJaD.js",
      "assets/index-4bilolKF.css",
      "assets/index-B-qto_1p.css",
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
      n._sentryDebugIds[i] = "ae807034-1616-4cf8-9321-55e67ff45dbf";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-ae807034-1616-4cf8-9321-55e67ff45dbf";
    }
  } catch {}
})();
const ie = "aj61";
const oe = "maNG";
const le = "f5us";
const ce = "haxk";
const me = "hpFF";
const f = { stepper: ie, track: oe, progress: le, step: ce, active: me };
function de({ steps, currentStep, onStepClick, className }) {
  const k = ((currentStep - 1) / (steps - 1)) * 100;
  return u("div", {
    className: `${f.stepper} ${className || ""}`,
    children: [
      u("div", {
        className: f.track,
        children: u("div", {
          className: f.progress,
          style: { width: `${k}%` },
        }),
      }),
      Array.from({ length: steps }, (o, y) => y + 1).map((o) =>
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
const ue = "Cu38";
const pe = "p6Wm";
const fe = "l4Kp";
const he = "DYee";
const ge = "Bch0";
const be = "hwPu";
const ve = "SPJL";
const Ne = "BUJe";
const Ee = "KhWb";
const ke = "mH2x";
const ye = "MTNW";
const Pe = "FgwW";
const _e = "UDOi";
const Se = "UVax";
const we = "Q7nP";
const $e = "XmA0";
const Ae = "sAuX";
const je = "KtxI";
const Be = "MJXB";
const Ce = "oXDf";
const Ie = "SthF";
const Ue = "Z3wt";

const t = {
  page: ue,
  container: pe,
  header: fe,
  title: he,
  subtitle: ge,
  stepper: be,
  form: ve,
  error: Ne,
  inputGroup: Ee,
  label: ke,
  hint: ye,
  input: Pe,
  inputError: _e,
  fieldError: Se,
  avatarSection: we,
  avatarPicker: $e,
  avatar: Ae,
  avatarEmpty: je,
  avatarHint: Be,
  emojiPickerPortal: Ce,
  emojiPickerBackdrop: Ie,
  submitButton: Ue,
};

const xe = z(() =>
  l(() => import("./index-B9WYBH4_.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (n) => ({
      default: n.EmojiPicker,
    })
  )
);

export const Onboarding = (n) => {
  const [i, l] = d(1);
  const [m, k] = d("");
  const [o, y] = d("");
  const [d, W] = d(null);
  const [B, u] = d(null);
  const [P, h] = d(null);
  const [g, p] = d(null);
  const [C, I] = d(false);
  const [U, x] = d(false);
  const [O, b] = d(false);
  const [v, z] = d(null);
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

  const T = async (r) => {
    r.preventDefault();
    u(null);
    h(null);
    p(null);
    const a = m.trim();
    const c = o.trim();
    if (!a) {
      h("Введите имя");
      return;
    }
    if (a.length < 2) {
      h("Имя должно быть не менее 2 символов");
      return;
    }
    const N = D(c);
    if (N) {
      p(N);
      return;
    }
    x(true);
    try {
      if (!(await o.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      l(2);
    } catch (E) {
      console.error("Failed to check username:", E);
      l(2);
    } finally {
      x(false);
    }
  };

  const G = async (r) => {
    r.preventDefault();

    if (!!d) {
      u(null);
      I(true);
      try {
        await createProfile({
          displayName: m.trim(),
          username: o.trim(),
          avatar: d,
        });
        u_1("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (x(a)) {
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
        I(false);
      }
    }
  };

  const M = () => {
    l(1);
    u(null);
  };

  const X = (r) => {
    if (r === 1) {
      l(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = m.trim();
      const c = o.trim();
      if (!a || a.length < 2 || D(c) || g) {
        return;
      }
      l(2);
    }
  };

  const K = q_1((r) => {
    W(r.emoji);
    b(false);
  }, []);

  const J = q_1(() => {
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
    let w;
    let $;
    let A;

    if (V >= c + 8) {
      S = r.bottom + 8;
      $ = "top";
    } else {
      S = r.top - c - 8;
      $ = "bottom";
    }

    if (r_left > N) {
      w = r.right - a;
      A = "right";
    } else {
      w = r.left;
      A = "left";
    }

    z({ top: S, left: w, transformOrigin: `${$} ${A}` });
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
            u(de, {
              steps: 2,
              currentStep: i,
              onStepClick: X,
              className: t.stepper,
            }),
            B && u("div", { className: t.error, children: B }),
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
                        value: m,
                        onInput: (r) => {
                          k(r.target.value);
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
                          y(r.target.value.toLowerCase());
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
                    disabled: U,
                    children: U ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            i === 2 &&
              u("form", {
                className: t.form,
                onSubmit: G,
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
                            className: `${t.avatar} ${d ? "" : t.avatarEmpty}`,
                            onClick: J,
                            children: d || "?",
                          }),
                          u("span", {
                            className: t.avatarHint,
                            children: d
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
                    onClick: M,
                    disabled: C,
                    children: "Назад",
                  }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: C || !d,
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
              u(B_1, {
                fallback: null,
                children: u(xe, {
                  onEmojiSelect: K,
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
