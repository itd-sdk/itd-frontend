import {
  a,
  d,
  A,
  x,
  x as x_1,
  $,
  B,
  l,
  z,
  m,
  r,
  f as f_1,
  aa,
  ab,
  _,
} from "./index-BCnJB3wz.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BQd7bGEm.js",
      "assets/index-BCnJB3wz.js",
      "assets/index-CVmeqvSW.css",
      "assets/index-Be2g9EP0.css",
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
    a.SENTRY_RELEASE = { id: "1.1.1" };
    const i = new a.Error().stack;

    if (i) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[i] = "519f1e37-c950-4ecc-9fd0-ef88b82c5f44";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-519f1e37-c950-4ecc-9fd0-ef88b82c5f44";
    }
  } catch {}
})();
const se = "LFmp";
const ie = "ceTJ";
const le = "XxIr";
const oe = "UPfI";
const ce = "PSJx";
const f = { stepper: se, track: ie, progress: le, step: oe, active: ce };
function me({ steps, currentStep, onStepClick, className }) {
  const k = ((currentStep - 1) / (steps - 1)) * 100;
  return steps("div", {
    className: `${f.stepper} ${className || ""}`,
    children: [
      steps("div", {
        className: f.track,
        children: steps("div", {
          className: f.progress,
          style: { width: `${k}%` },
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
const de = "cYZ2";
const ue = "i05K";
const pe = "UPNq";
const fe = "xiic";
const he = "FxGF";
const ve = "vxZZ";
const be = "c66z";
const ge = "ZyBP";
const Ne = "nMJG";
const ye = "xLpi";
const ke = "rIsS";
const Ee = "t6AE";
const Pe = "y1Zk";
const _e = "fSfG";
const Se = "ejuM";
const $e = "c81w";
const we = "rfSJ";
const Be = "NdaB";
const je = "tQyj";
const xe = "JEy5";
const Ae = "B0ay";
const Ie = "Bmvi";

const t = {
  page: de,
  container: ue,
  header: pe,
  title: fe,
  subtitle: he,
  stepper: ve,
  form: be,
  error: ge,
  inputGroup: Ne,
  label: ye,
  hint: ke,
  input: Ee,
  inputError: Pe,
  fieldError: _e,
  avatarSection: Se,
  avatarPicker: $e,
  avatar: we,
  avatarEmpty: Be,
  avatarHint: je,
  emojiPickerPortal: xe,
  emojiPickerBackdrop: Ae,
  submitButton: Ie,
};

const Ce = z(() =>
  _(() => import("./index-BQd7bGEm.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (a) => ({
      default: a.EmojiPicker,
    })
  )
);

export const Onboarding = (a) => {
  const [i, o] = d(1);
  const [m, k] = d("");
  const [l, E] = d("");
  const [d, R] = d(null);
  const [x, u] = d(null);
  const [P, h] = d(null);
  const [v, p] = d(null);
  const [A, I] = d(false);
  const [C, U] = d(false);
  const [z, b] = d(false);
  const [g, F] = d(null);
  const _ = A(null);
  const { createProfile } = x();

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

  const O = async (r) => {
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
    const N = L(c);
    if (N) {
      p(N);
      return;
    }
    U(true);
    try {
      if (!(await r.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      o(2);
    } catch (y) {
      console.error("Failed to check username:", y);
      o(2);
    } finally {
      U(false);
    }
  };

  const T = async (r) => {
    r.preventDefault();

    if (!!d) {
      u(null);
      I(true);
      try {
        await createProfile({
          displayName: m.trim(),
          username: l.trim(),
          avatar: d,
        });
        f_1("/");
      } catch (n) {
        console.error("Profile creation error:", n);

        if (aa(n)) {
          if (n.code === ab.PROFILE_USERNAME_TAKEN) {
            o(1);
            p("Этот username уже занят");
          } else {
            u(n.message || "Ошибка создания профиля");
          }
        } else {
          u("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        I(false);
      }
    }
  };

  const Z = () => {
    o(1);
    u(null);
  };

  const H = (r) => {
    if (r === 1) {
      o(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const n = m.trim();
      const c = l.trim();
      if (!n || n.length < 2 || L(c) || v) {
        return;
      }
      o(2);
    }
  };

  const J = x_1((r) => {
    R(r.emoji);
    b(false);
  }, []);

  const W = x_1(() => {
    if (!_.current) {
      return;
    }
    const r = _.current.getBoundingClientRect();
    const n = 280;
    const c = 380;
    const N = window.innerWidth - r.right;
    const r_left = r.left;
    const M = window.innerHeight - r.bottom;
    let S;
    let $;
    let w;
    let B;

    if (M >= c + 8) {
      S = r.bottom + 8;
      w = "top";
    } else {
      S = r.top - c - 8;
      w = "bottom";
    }

    if (r_left > N) {
      $ = r.right - n;
      B = "right";
    } else {
      $ = r.left;
      B = "left";
    }

    F({ top: S, left: $, transformOrigin: `${w} ${B}` });
    b(true);
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
              onStepClick: H,
              className: t.stepper,
            }),
            x && a("div", { className: t.error, children: x }),
            i === 1 &&
              a("form", {
                className: t.form,
                onSubmit: O,
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
                          k(r.target.value);
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
                        className: `${t.input} ${v ? t.inputError : ""}`,
                        value: l,
                        onInput: (r) => {
                          E(r.target.value.toLowerCase());
                          p(null);
                        },
                        placeholder: "ivanov1998",
                        maxLength: 50,
                      }),
                      v && a("span", { className: t.fieldError, children: v }),
                    ],
                  }),
                  a(B, {
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
              a("form", {
                className: t.form,
                onSubmit: T,
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
                            onClick: W,
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
                    onClick: Z,
                    disabled: A,
                    children: "Назад",
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: A || !d,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      z &&
        g &&
        $(
          a("div", {
            className: t.emojiPickerPortal,
            style: {
              position: "fixed",
              top: g.top,
              left: g.left,
              zIndex: 1000 /* 1e3 */,
              transformOrigin: g.transformOrigin,
            },
            children: [
              a("div", {
                className: t.emojiPickerBackdrop,
                onClick: () => b(false),
              }),
              a(l, {
                fallback: null,
                children: a(Ce, {
                  onEmojiSelect: J,
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
