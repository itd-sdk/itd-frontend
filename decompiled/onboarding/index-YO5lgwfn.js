import {
  u,
  d,
  B as A_1,
  Y,
  q,
  $,
  B,
  k,
  q as q_1,
  S,
  O,
  u as u_1,
  K,
  aD,
  aA,
  l,
} from "./index-D4QRo1-7.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-C7hWJQQR.js",
      "assets/index-D4QRo1-7.js",
      "assets/index-CRST5OvR.css",
      "assets/index-CWRm2quv.css",
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
      n._sentryDebugIds[i] = "b219185b-cb85-4a8f-8d8f-9e1981dd4583";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-b219185b-cb85-4a8f-8d8f-9e1981dd4583";
    }
  } catch {}
})();
const ie = "ltBS";
const oe = "Vqjc";
const le = "CCf0";
const ce = "ik4w";
const de = "BJAW";
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
const ue = "W2eK";
const pe = "er8B";
const fe = "jWaG";
const he = "Y65M";
const be = "t91G";
const ge = "jzpW";
const ve = "hywz";
const Ee = "EVHD";
const Ne = "P7G0";
const ye = "ofPX";
const ke = "M38q";
const Pe = "a88x";
const _e = "HJMG";
const Se = "e5zY";
const $e = "c5ey";
const je = "GA3v";
const we = "VhpE";
const Ae = "MzQC";
const Be = "pto2";
const Ce = "jRRo";
const Ie = "GdNI";
const Re = "fhND";

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
  avatarPicker: je,
  avatar: we,
  avatarEmpty: Ae,
  avatarHint: Be,
  emojiPickerPortal: Ce,
  emojiPickerBackdrop: Ie,
  submitButton: Re,
};

const De = q_1(() =>
  l(() => import("./index-C7hWJQQR.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (n) => ({
      default: n.EmojiPicker,
    })
  )
);

export const Onboarding = (n) => {
  const [i, l] = d(1);
  const [d, y] = d("");
  const [o, k] = d("");
  const [m, x] = d(null);
  const [B, u] = d(null);
  const [P, h] = d(null);
  const [b, p] = d(null);
  const [C, I] = d(false);
  const [R, D] = d(false);
  const [W, g] = d(false);
  const [v, O] = d(null);
  const _ = A_1(null);
  const { createProfile } = Y();

  const U = (r) =>
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

  const M = async (r) => {
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
    const E = U(c);
    if (E) {
      p(E);
      return;
    }
    D(true);
    try {
      if (!(await O.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      l(2);
    } catch (N) {
      console.error("Failed to check username:", N);
      l(2);
    } finally {
      D(false);
    }
  };

  const F = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      I(true);
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
            case aA.PROFILE_USERNAME_TAKEN:
            case aA.PROFILE_USERNAME_RESERVED: {
              l(1);
              p(aD(a.code, a.message));
              break;
            }
            default: {
              u(aD(a.code, a.message || "Ошибка создания профиля"));
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

  const T = () => {
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
      if (!a || a.length < 2 || U(c) || b) {
        return;
      }
      l(2);
    }
  };

  const Y = q((r) => {
    x(r.emoji);
    g(false);
  }, []);

  const q = q(() => {
    if (!_.current) {
      return;
    }
    const r = _.current.getBoundingClientRect();
    const a = 280;
    const c = 380;
    const E = window.innerWidth - r.right;
    const r_left = r.left;
    const K = window.innerHeight - r.bottom;
    let S;
    let $;
    let j;
    let w;

    if (K >= c + 8) {
      S = r.bottom + 8;
      j = "top";
    } else {
      S = r.top - c - 8;
      j = "bottom";
    }

    if (r_left > E) {
      $ = r.right - a;
      w = "right";
    } else {
      $ = r.left;
      w = "left";
    }

    O({ top: S, left: $, transformOrigin: `${j} ${w}` });
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
            B && u("div", { className: t.error, children: B }),
            i === 1 &&
              u("form", {
                className: t.form,
                onSubmit: M,
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
                onSubmit: F,
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
                    onClick: T,
                    disabled: C,
                    children: "Назад",
                  }),
                  u(B, {
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
      W &&
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
