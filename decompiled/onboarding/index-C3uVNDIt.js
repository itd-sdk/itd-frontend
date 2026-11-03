import {
  u,
  d,
  A,
  a,
  A as A_1,
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
} from "./index-GOT6tyDH.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DnF4A_Vm.js",
      "assets/index-GOT6tyDH.js",
      "assets/index-C4PAbhB_.css",
      "assets/index-DsSa94iy.css",
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
      n._sentryDebugIds[i] = "394a799a-43fb-4e38-8939-d138d8096d3f";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-394a799a-43fb-4e38-8939-d138d8096d3f";
    }
  } catch {}
})();
const ie = "h3KX";
const oe = "EkGj";
const le = "rplG";
const ce = "TFDr";
const de = "xM4g";
const f = { stepper: ie, track: oe, progress: le, step: ce, active: de };
function me({ steps, currentStep, onStepClick, className }) {
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
const ue = "HPrA";
const pe = "n1OB";
const fe = "AMqh";
const he = "ZRzb";
const ge = "L99m";
const be = "fGw2";
const ve = "G8dM";
const Ee = "oon4";
const Ne = "ealp";
const ke = "M0oB";
const ye = "eRlC";
const Pe = "xyZ2";
const _e = "gxQz";
const Se = "tKsb";
const $e = "Jv3X";
const we = "M3sk";
const Ae = "Qath";
const Re = "EOZy";
const je = "H5OM";
const Be = "z8kR";
const Ce = "Su5J";
const Ie = "Q3ER";

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
  label: ke,
  hint: ye,
  input: Pe,
  inputError: _e,
  fieldError: Se,
  avatarSection: $e,
  avatarPicker: we,
  avatar: Ae,
  avatarEmpty: Re,
  avatarHint: je,
  emojiPickerPortal: Be,
  emojiPickerBackdrop: Ce,
  submitButton: Ie,
};

const xe = o_1(() =>
  af(() => import("./index-DnF4A_Vm.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (n) => ({
      default: n.EmojiPicker,
    })
  )
);

export const Onboarding = (n) => {
  const [i, l] = d(1);
  const [d, k] = d("");
  const [o, y] = d("");
  const [m, z] = d(null);
  const [j, u] = d(null);
  const [P, h] = d(null);
  const [g, p] = d(null);
  const [B, C] = d(false);
  const [I, x] = d(false);
  const [M, b] = d(false);
  const [v, G] = d(null);
  const _ = A(null);
  const { createProfile } = a();

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

  const T = async (r) => {
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
        C(false);
      }
    }
  };

  const W = () => {
    l(1);
    u(null);
  };

  const Z = (r) => {
    if (r === 1) {
      l(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = d.trim();
      const c = o.trim();
      if (!a || a.length < 2 || D(c) || g) {
        return;
      }
      l(2);
    }
  };

  const K = A_1((r) => {
    z(r.emoji);
    b(false);
  }, []);

  const Q = A_1(() => {
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
    let A;

    if (X >= c + 8) {
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
    b(true);
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
              onStepClick: Z,
              className: t.stepper,
            }),
            j && u("div", { className: t.error, children: j }),
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
                    disabled: I,
                    children: I ? "Проверка..." : "Продолжить",
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
                    onClick: W,
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
      M &&
        v &&
        v(
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
              u(ac, {
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
