import {
  u,
  d,
  A,
  w,
  q,
  $,
  B,
  k,
  z,
  S,
  o,
  u as u_1,
  ai as x_1,
  ai,
  u_1 as u_1_1,
  l,
} from "./index-ORJLmKGS.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-C-OxYsLf.js",
      "assets/index-ORJLmKGS.js",
      "assets/index-BDqmq5tE.css",
      "assets/index-ayk3XpHd.css",
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
    n.SENTRY_RELEASE = { id: "1.1.3" };
    const i = new n.Error().stack;

    if (i) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[i] = "aefcf108-9071-4a43-a721-abf99e4ff5d5";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-aefcf108-9071-4a43-a721-abf99e4ff5d5";
    }
  } catch {}
})();
const ie = "o7xi";
const oe = "mOBn";
const le = "RT7d";
const ce = "SfW7";
const de = "LqAL";
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
const ue = "Qili";
const pe = "xoHt";
const fe = "Yr1a";
const he = "lSjU";
const ge = "Fsvu";
const be = "oK6i";
const ve = "LLsj";
const Ne = "hMhP";
const Ee = "M1ZF";
const ke = "DOCd";
const ye = "AVYU";
const Pe = "nDV1";
const _e = "ocp1";
const Se = "BXkP";
const $e = "MGoJ";
const we = "PbYT";
const Ae = "J2Na";
const je = "vpub";
const Be = "gTCw";
const Ce = "Wg1G";
const Le = "RuKF";
const Re = "lNA3";

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
  avatarSection: $e,
  avatarPicker: we,
  avatar: Ae,
  avatarEmpty: je,
  avatarHint: Be,
  emojiPickerPortal: Ce,
  emojiPickerBackdrop: Le,
  submitButton: Re,
};

const Ie = z(() =>
  l(() => import("./index-C-OxYsLf.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (n) => ({
      default: n.EmojiPicker,
    })
  )
);

export const Onboarding = (n) => {
  const [i, l] = d(1);
  const [d, k] = d("");
  const [o, y] = d("");
  const [m, F] = d(null);
  const [B, u] = d(null);
  const [P, h] = d(null);
  const [g, p] = d(null);
  const [C, L] = d(false);
  const [R, I] = d(false);
  const [T, b] = d(false);
  const [v, W] = d(null);
  const _ = A(null);
  const { createProfile } = w();

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

  const G = async (r) => {
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
    const N = U(c);
    if (N) {
      p(N);
      return;
    }
    I(true);
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
      I(false);
    }
  };

  const H = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      L(true);
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
              p(ai(a.code, a.message));
              break;
            }
            default: {
              u(ai(a.code, a.message || "Ошибка создания профиля"));
            }
          }
        } else {
          u("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        L(false);
      }
    }
  };

  const M = () => {
    l(1);
    u(null);
  };

  const Y = (r) => {
    if (r === 1) {
      l(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = d.trim();
      const c = o.trim();
      if (!a || a.length < 2 || U(c) || g) {
        return;
      }
      l(2);
    }
  };

  const V = q((r) => {
    F(r.emoji);
    b(false);
  }, []);

  const K = q(() => {
    if (!_.current) {
      return;
    }
    const r = _.current.getBoundingClientRect();
    const a = 280;
    const c = 380;
    const N = window.innerWidth - r.right;
    const r_left = r.left;
    const q = window.innerHeight - r.bottom;
    let S;
    let $;
    let w;
    let A;

    if (q >= c + 8) {
      S = r.bottom + 8;
      w = "top";
    } else {
      S = r.top - c - 8;
      w = "bottom";
    }

    if (r_left > N) {
      $ = r.right - a;
      A = "right";
    } else {
      $ = r.left;
      A = "left";
    }

    W({ top: S, left: $, transformOrigin: `${w} ${A}` });
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
              onStepClick: Y,
              className: t.stepper,
            }),
            B && u("div", { className: t.error, children: B }),
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
                    disabled: R,
                    children: R ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            i === 2 &&
              u("form", {
                className: t.form,
                onSubmit: H,
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
                            onClick: K,
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
                    disabled: C || !m,
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
                onClick: () => b(false),
              }),
              u(k, {
                fallback: null,
                children: u(Ie, {
                  onEmojiSelect: V,
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
