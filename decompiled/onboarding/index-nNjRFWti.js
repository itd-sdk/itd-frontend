import {
  u,
  d,
  A,
  Y,
  k as q_1,
  $,
  B,
  k,
  aB as z_1,
  S,
  O,
  u as u_1,
  K,
  aE,
  aB,
  l,
} from "./index-CsuAWxkQ.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-B9kq-1w4.js",
      "assets/index-CsuAWxkQ.js",
      "assets/index-grrRjDQH.css",
      "assets/index-VRv5FP58.css",
    ])
) => i.map((i) => d[i]);
(() => {
  try {
    const s =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    s.SENTRY_RELEASE = { id: "1.1.2" };
    const i = new s.Error().stack;

    if (i) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[i] = "1613eccf-00e5-4e47-baac-ba537eb05989";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-1613eccf-00e5-4e47-baac-ba537eb05989";
    }
  } catch {}
})();
const ie = "izFq";
const le = "h5hR";
const oe = "sHZU";
const ce = "Bzyw";
const de = "m0Gz";
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
const ue = "mT9K";
const pe = "zLgj";
const fe = "WJKs";
const he = "IWJI";
const ge = "lFUB";
const be = "IgAE";
const ve = "rpu5";
const Ee = "SicJ";
const Ne = "QWKd";
const ye = "Df1H";
const ke = "iHxw";
const Pe = "Fhtn";
const _e = "suwS";
const Se = "dAxh";
const $e = "cQV1";
const we = "lSss";
const Ae = "sDPt";
const Be = "MQXZ";
const Ie = "uGrY";
const je = "gXiD";
const Re = "pRHU";
const Ue = "XOXL";

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
  label: ye,
  hint: ke,
  input: Pe,
  inputError: _e,
  fieldError: Se,
  avatarSection: $e,
  avatarPicker: we,
  avatar: Ae,
  avatarEmpty: Be,
  avatarHint: Ie,
  emojiPickerPortal: je,
  emojiPickerBackdrop: Re,
  submitButton: Ue,
};

const Ce = z_1(() =>
  l(() => import("./index-B9kq-1w4.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (s) => ({
      default: s.EmojiPicker,
    })
  )
);

export const Onboarding = (s) => {
  const [i, o] = d(1);
  const [d, y] = d("");
  const [l, k] = d("");
  const [m, H] = d(null);
  const [I, u] = d(null);
  const [P, h] = d(null);
  const [g, p] = d(null);
  const [j, R] = d(false);
  const [U, C] = d(false);
  const [O, b] = d(false);
  const [v, F] = d(null);
  const _ = A(null);
  const { createProfile } = Y();

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

  const G = async (r) => {
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
    const E = D(c);
    if (E) {
      p(E);
      return;
    }
    C(true);
    try {
      if (!(await O.checkUsername(c))) {
        p("Этот username уже занят");
        return;
      }
      o(2);
    } catch (N) {
      console.error("Failed to check username:", N);
      o(2);
    } finally {
      C(false);
    }
  };

  const T = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      R(true);
      try {
        await createProfile({
          displayName: d.trim(),
          username: l.trim(),
          avatar: m,
        });
        u_1("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (K(a)) {
          switch (a.code) {
            case aB.PROFILE_USERNAME_TAKEN:
            case aB.PROFILE_USERNAME_RESERVED: {
              o(1);
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
        R(false);
      }
    }
  };

  const K = () => {
    o(1);
    u(null);
  };

  const X = (r) => {
    if (r === 1) {
      o(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = d.trim();
      const c = l.trim();
      if (!a || a.length < 2 || D(c) || g) {
        return;
      }
      o(2);
    }
  };

  const M = q_1((r) => {
    H(r.emoji);
    b(false);
  }, []);

  const Y = q_1(() => {
    if (!_.current) {
      return;
    }
    const r = _.current.getBoundingClientRect();
    const a = 280;
    const c = 380;
    const E = window.innerWidth - r.right;
    const r_left = r.left;
    const J = window.innerHeight - r.bottom;
    let S;
    let $;
    let w;
    let A;

    if (J >= c + 8) {
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

    F({ top: S, left: $, transformOrigin: `${w} ${A}` });
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
              onStepClick: X,
              className: t.stepper,
            }),
            I && u("div", { className: t.error, children: I }),
            i === 1 &&
              u("form", {
                className: t.form,
                onSubmit: G,
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
                        value: l,
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
                            onClick: Y,
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
                    onClick: K,
                    disabled: j,
                    children: "Назад",
                  }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: j || !m,
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
              u(k, {
                fallback: null,
                children: u(Ce, {
                  onEmojiSelect: M,
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
