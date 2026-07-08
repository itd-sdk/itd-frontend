import {
  a,
  d,
  A,
  x,
  $ as q_1,
  $,
  B,
  l,
  z,
  m,
  r,
  f as f_1,
  ab,
  ac,
  _,
} from "./index-BewGW5_v.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-FM-xIMhw.js",
      "assets/index-BewGW5_v.js",
      "assets/index-DqUAqB6M.css",
      "assets/index-DYca-d9e.css",
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
    a.SENTRY_RELEASE = { id: "1.1.2" };
    const i = new a.Error().stack;

    if (i) {
      a._sentryDebugIds = a._sentryDebugIds || {};
      a._sentryDebugIds[i] = "1d77aeac-982f-49eb-82ad-fa4b9f79e266";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-1d77aeac-982f-49eb-82ad-fa4b9f79e266";
    }
  } catch {}
})();
const se = "b5kL";
const ie = "D1zY";
const oe = "PvrN";
const le = "K6v9";
const ce = "unZH";
const f = { stepper: se, track: ie, progress: oe, step: le, active: ce };
function de({ steps, currentStep, onStepClick, className }) {
  const E = ((currentStep - 1) / (steps - 1)) * 100;
  return steps("div", {
    className: `${f.stepper} ${className || ""}`,
    children: [
      steps("div", {
        className: f.track,
        children: steps("div", {
          className: f.progress,
          style: { width: `${E}%` },
        }),
      }),
      Array.from({ length: steps }, (o, y) => y + 1).map((o) =>
        steps(
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
const me = "OTxB";
const ue = "c4Bu";
const pe = "v4b8";
const fe = "krwj";
const he = "QrL3";
const be = "RdjP";
const ge = "oEqb";
const ve = "jmpE";
const Ne = "Z0MP";
const ke = "cZm3";
const Ee = "c63j";
const ye = "oSJC";
const Pe = "XPfM";
const _e = "Vg50";
const Se = "HJGb";
const $e = "DGa2";
const je = "EVHj";
const we = "JdJb";
const Be = "ugFb";
const Ae = "dDwc";
const Ce = "xiJr";
const De = "kNhg";

const t = {
  page: me,
  container: ue,
  header: pe,
  title: fe,
  subtitle: he,
  stepper: be,
  form: ge,
  error: ve,
  inputGroup: Ne,
  label: ke,
  hint: Ee,
  input: ye,
  inputError: Pe,
  fieldError: _e,
  avatarSection: Se,
  avatarPicker: $e,
  avatar: je,
  avatarEmpty: we,
  avatarHint: Be,
  emojiPickerPortal: Ae,
  emojiPickerBackdrop: Ce,
  submitButton: De,
};

const Ie = z(() =>
  _(() => import("./index-FM-xIMhw.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (a) => ({
      default: a.EmojiPicker,
    })
  )
);

export const Onboarding = (a) => {
  const [i, l] = d(1);
  const [d, E] = d("");
  const [o, y] = d("");
  const [m, R] = d(null);
  const [A, u] = d(null);
  const [P, h] = d(null);
  const [b, p] = d(null);
  const [C, D] = d(false);
  const [I, x] = d(false);
  const [H, g] = d(false);
  const [v, z] = d(null);
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

  const G = async (r) => {
    r.preventDefault();
    u(null);
    h(null);
    p(null);
    const n = d.trim();
    const c = o.trim();
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
    x(true);
    try {
      if (!(await r.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      l(2);
    } catch (k) {
      console.error("Failed to check username:", k);
      l(2);
    } finally {
      x(false);
    }
  };

  const T = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      D(true);
      try {
        await createProfile({
          displayName: d.trim(),
          username: o.trim(),
          avatar: m,
        });
        f_1("/");
      } catch (n) {
        console.error("Profile creation error:", n);

        if (ab(n)) {
          if (n.code === ac.PROFILE_USERNAME_TAKEN) {
            l(1);
            p("Этот username уже занят");
          } else {
            u(n.message || "Ошибка создания профиля");
          }
        } else {
          u("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        D(false);
      }
    }
  };

  const F = () => {
    l(1);
    u(null);
  };

  const J = (r) => {
    if (r === 1) {
      l(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const n = d.trim();
      const c = o.trim();
      if (!n || n.length < 2 || L(c) || b) {
        return;
      }
      l(2);
    }
  };

  const W = q_1((r) => {
    R(r.emoji);
    g(false);
  }, []);

  const Z = q_1(() => {
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
    let j;
    let w;

    if (M >= c + 8) {
      S = r.bottom + 8;
      j = "top";
    } else {
      S = r.top - c - 8;
      j = "bottom";
    }

    if (r_left > N) {
      $ = r.right - n;
      w = "right";
    } else {
      $ = r.left;
      w = "left";
    }

    z({ top: S, left: $, transformOrigin: `${j} ${w}` });
    g(true);
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
            a(de, {
              steps: 2,
              currentStep: i,
              onStepClick: J,
              className: t.stepper,
            }),
            A && a("div", { className: t.error, children: A }),
            i === 1 &&
              a("form", {
                className: t.form,
                onSubmit: G,
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
                        value: d,
                        onInput: (r) => {
                          E(r.target.value);
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
                        className: `${t.input} ${b ? t.inputError : ""}`,
                        value: o,
                        onInput: (r) => {
                          y(r.target.value.toLowerCase());
                          p(null);
                        },
                        placeholder: "ivanov1998",
                        maxLength: 50,
                      }),
                      b && a("span", { className: t.fieldError, children: b }),
                    ],
                  }),
                  a(B, {
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
                            className: `${t.avatar} ${m ? "" : t.avatarEmpty}`,
                            onClick: Z,
                            children: m || "?",
                          }),
                          a("span", {
                            className: t.avatarHint,
                            children: m
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
                    onClick: F,
                    disabled: C,
                    children: "Назад",
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: C || !m,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      H &&
        v &&
        $(
          a("div", {
            className: t.emojiPickerPortal,
            style: {
              position: "fixed",
              top: v.top,
              left: v.left,
              zIndex: 1000 /* 1e3 */,
              transformOrigin: v.transformOrigin,
            },
            children: [
              a("div", {
                className: t.emojiPickerBackdrop,
                onClick: () => g(false),
              }),
              a(l, {
                fallback: null,
                children: a(Ie, {
                  onEmojiSelect: W,
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
