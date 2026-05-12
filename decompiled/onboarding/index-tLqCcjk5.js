import {
  a,
  d,
  B as A_1,
  w,
  q,
  $,
  B,
  k,
  z,
  l,
  o,
  a as a_1,
  a8,
  a9,
  _,
} from "./index-DDCL-vHK.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BL62Y3xN.js",
      "assets/index-DDCL-vHK.js",
      "assets/index-Dw2m7COV.css",
      "assets/index-cCML6m2F.css",
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
    n.SENTRY_RELEASE = { id: "1.1.0" };
    const i = new n.Error().stack;

    if (i) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[i] = "bea99958-a0e4-4b54-95b4-12f25905e0f2";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-bea99958-a0e4-4b54-95b4-12f25905e0f2";
    }
  } catch {}
})();
const se = "FnVs";
const ie = "MqYy";
const le = "etpH";
const oe = "Ejno";
const ce = "JF4d";
const f = { stepper: se, track: ie, progress: le, step: oe, active: ce };
function me({ steps, currentStep, onStepClick, className }) {
  const y = ((currentStep - 1) / (steps - 1)) * 100;
  return a("div", {
    className: `${f.stepper} ${className || ""}`,
    children: [
      a("div", {
        className: f.track,
        children: a("div", {
          className: f.progress,
          style: { width: `${y}%` },
        }),
      }),
      Array.from({ length: steps }, (l, E) => E + 1).map((l) =>
        a(
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
const de = "gOcW";
const ue = "ePHm";
const pe = "kWJ4";
const fe = "FEzq";
const he = "hTjQ";
const be = "TlLA";
const ge = "PHKl";
const ve = "lKAV";
const Ne = "nVVX";
const ke = "LII4";
const ye = "cylO";
const Ee = "Rqzy";
const Pe = "LEki";
const _e = "Th8T";
const $e = "kpiL";
const Se = "ivIV";
const we = "LeqR";
const je = "UIQW";
const Ae = "VHbC";
const Ie = "Zful";
const Ce = "uNQ7";
const Le = "fPxn";

const t = {
  page: de,
  container: ue,
  header: pe,
  title: fe,
  subtitle: he,
  stepper: be,
  form: ge,
  error: ve,
  inputGroup: Ne,
  label: ke,
  hint: ye,
  input: Ee,
  inputError: Pe,
  fieldError: _e,
  avatarSection: $e,
  avatarPicker: Se,
  avatar: we,
  avatarEmpty: je,
  avatarHint: Ae,
  emojiPickerPortal: Ie,
  emojiPickerBackdrop: Ce,
  submitButton: Le,
};

const Be = z(() =>
  _(() => import("./index-BL62Y3xN.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (n) => ({
      default: n.EmojiPicker,
    })
  )
);

export const Onboarding = (n) => {
  const [i, o] = d(1);
  const [m, y] = d("");
  const [l, E] = d("");
  const [d, D] = d(null);
  const [I, u] = d(null);
  const [P, h] = d(null);
  const [b, p] = d(null);
  const [C, L] = d(false);
  const [B, U] = d(false);
  const [H, g] = d(false);
  const [v, T] = d(null);
  const _ = A_1(null);
  const { createProfile } = w();

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

  const O = async (r) => {
    r.preventDefault();
    u(null);
    h(null);
    p(null);
    const a = m.trim();
    const c = l.trim();
    if (!a) {
      h("Введите имя");
      return;
    }
    if (a.length < 2) {
      h("Имя должно быть не менее 2 символов");
      return;
    }
    const N = R(c);
    if (N) {
      p(N);
      return;
    }
    U(true);
    try {
      if (!(await o.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      o(2);
    } catch (k) {
      console.error("Failed to check username:", k);
      o(2);
    } finally {
      U(false);
    }
  };

  const W = async (r) => {
    r.preventDefault();

    if (!!d) {
      u(null);
      L(true);
      try {
        await createProfile({
          displayName: m.trim(),
          username: l.trim(),
          avatar: d,
        });
        a_1("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (a8(a)) {
          if (a.code === a9.PROFILE_USERNAME_TAKEN) {
            o(1);
            p("Этот username уже занят");
          } else {
            u(a.message || "Ошибка создания профиля");
          }
        } else {
          u("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        L(false);
      }
    }
  };

  const F = () => {
    o(1);
    u(null);
  };

  const V = (r) => {
    if (r === 1) {
      o(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = m.trim();
      const c = l.trim();
      if (!a || a.length < 2 || R(c) || b) {
        return;
      }
      o(2);
    }
  };

  const q = q((r) => {
    D(r.emoji);
    g(false);
  }, []);

  const G = q(() => {
    if (!_.current) {
      return;
    }
    const r = _.current.getBoundingClientRect();
    const a = 280;
    const c = 380;
    const N = window.innerWidth - r.right;
    const r_left = r.left;
    const K = window.innerHeight - r.bottom;
    let $;
    let S;
    let w;
    let j;

    if (K >= c + 8) {
      $ = r.bottom + 8;
      w = "top";
    } else {
      $ = r.top - c - 8;
      w = "bottom";
    }

    if (r_left > N) {
      S = r.right - a;
      j = "right";
    } else {
      S = r.left;
      j = "left";
    }

    T({ top: $, left: S, transformOrigin: `${w} ${j}` });
    g(true);
  }, []);

  return a(l, {
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
              onStepClick: V,
              className: t.stepper,
            }),
            I && a("div", { className: t.error, children: I }),
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
                          y(r.target.value);
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
                        value: l,
                        onInput: (r) => {
                          E(r.target.value.toLowerCase());
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
                    disabled: B,
                    children: B ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            i === 2 &&
              a("form", {
                className: t.form,
                onSubmit: W,
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
                            onClick: G,
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
                    disabled: C || !d,
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
              a(k, {
                fallback: null,
                children: a(Be, {
                  onEmojiSelect: q,
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
