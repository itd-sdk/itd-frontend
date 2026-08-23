import {
  u,
  d,
  A,
  w,
  q,
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
} from "./index-DBLtLuBZ.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-CJd8L0wa.js",
      "assets/index-DBLtLuBZ.js",
      "assets/index-DsCOPsfG.css",
      "assets/index-CumppKKR.css",
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
      n._sentryDebugIds[i] = "e3dacb06-085d-4ab2-a407-6717a4161053";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-e3dacb06-085d-4ab2-a407-6717a4161053";
    }
  } catch {}
})();
const ie = "UIe3";
const oe = "ZxXX";
const le = "Cadm";
const ce = "XHct";
const de = "SSIC";
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
const ue = "EYaw";
const pe = "UP2s";
const fe = "W8Pm";
const he = "wNH6";
const be = "XlRb";
const ge = "wYUA";
const Ee = "o2hj";
const ve = "baTL";
const Ne = "enq3";
const ye = "iERO";
const ke = "DVXf";
const Pe = "TDHW";
const _e = "lyNA";
const Se = "Ylrh";
const we = "n2wM";
const Ae = "ZqaE";
const $e = "NEiA";
const je = "GAXG";
const Ce = "frxj";
const Ie = "exGA";
const Ue = "MoQL";
const Re = "EUiO";

const t = {
  page: ue,
  container: pe,
  header: fe,
  title: he,
  subtitle: be,
  stepper: ge,
  form: Ee,
  error: ve,
  inputGroup: Ne,
  label: ye,
  hint: ke,
  input: Pe,
  inputError: _e,
  fieldError: Se,
  avatarSection: we,
  avatarPicker: Ae,
  avatar: $e,
  avatarEmpty: je,
  avatarHint: Ce,
  emojiPickerPortal: Ie,
  emojiPickerBackdrop: Ue,
  submitButton: Re,
};

const Be = z(() =>
  l(() => import("./index-CJd8L0wa.js"), __vite__mapDeps([0, 1, 2, 3])).then(
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
  const [b, p] = d(null);
  const [I, U] = d(false);
  const [R, B] = d(false);
  const [G, g] = d(false);
  const [E, T] = d(null);
  const _ = A(null);
  const { createProfile } = w();

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

  const X = async (r) => {
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
    const v = x(c);
    if (v) {
      p(v);
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

  const z = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      U(true);
      try {
        await createProfile({
          displayName: d.trim(),
          username: o.trim(),
          avatar: m,
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
        U(false);
      }
    }
  };

  const F = () => {
    l(1);
    u(null);
  };

  const M = (r) => {
    if (r === 1) {
      l(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = d.trim();
      const c = o.trim();
      if (!a || a.length < 2 || x(c) || b) {
        return;
      }
      l(2);
    }
  };

  const Y = q((r) => {
    H(r.emoji);
    g(false);
  }, []);

  const q = q(() => {
    if (!_.current) {
      return;
    }
    const r = _.current.getBoundingClientRect();
    const a = 280;
    const c = 380;
    const v = window.innerWidth - r.right;
    const r_left = r.left;
    const V = window.innerHeight - r.bottom;
    let S;
    let w;
    let A;
    let $;

    if (V >= c + 8) {
      S = r.bottom + 8;
      A = "top";
    } else {
      S = r.top - c - 8;
      A = "bottom";
    }

    if (r_left > v) {
      w = r.right - a;
      $ = "right";
    } else {
      w = r.left;
      $ = "left";
    }

    T({ top: S, left: w, transformOrigin: `${A} ${$}` });
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
              onStepClick: M,
              className: t.stepper,
            }),
            C && u("div", { className: t.error, children: C }),
            i === 1 &&
              u("form", {
                className: t.form,
                onSubmit: X,
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
                    disabled: R,
                    children: R ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            i === 2 &&
              u("form", {
                className: t.form,
                onSubmit: z,
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
                            onClick: q,
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
                    onClick: F,
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
      G &&
        E &&
        $(
          u("div", {
            className: t.emojiPickerPortal,
            style: {
              position: "fixed",
              top: E.top,
              left: E.left,
              zIndex: 1000 /* 1e3 */,
              transformOrigin: E.transformOrigin,
            },
            children: [
              u("div", {
                className: t.emojiPickerBackdrop,
                onClick: () => g(false),
              }),
              u(B_1, {
                fallback: null,
                children: u(Be, {
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
