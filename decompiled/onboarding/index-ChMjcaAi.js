import {
  u,
  d,
  A,
  A as A_1,
  q,
  $,
  B,
  k,
  z,
  S,
  aA as O_1,
  u as u_1,
  K,
  aD,
  aA,
  l,
} from "./index-BuVp7kGl.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-CSAhhQIK.js",
      "assets/index-BuVp7kGl.js",
      "assets/index-3zrkiSGm.css",
      "assets/index-BTDutcIM.css",
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
      n._sentryDebugIds[i] = "0a2c4d74-e497-4a28-8dcb-56572012078a";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-0a2c4d74-e497-4a28-8dcb-56572012078a";
    }
  } catch {}
})();
const ie = "dVH5";
const oe = "cYKe";
const le = "DuyE";
const ce = "pX98";
const de = "Or1Q";
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
const ue = "kDTq";
const pe = "kz0J";
const fe = "Ldb9";
const he = "wIJO";
const be = "zB75";
const ge = "CTVq";
const ve = "FZlx";
const Ee = "dS5x";
const Ne = "qvfM";
const ke = "LIyC";
const ye = "VpN9";
const _e = "Cmdr";
const Pe = "GpJS";
const Se = "vM9j";
const $e = "NABi";
const we = "VL5C";
const Ae = "cDbb";
const Ce = "HwjF";
const je = "Kev5";
const Be = "wqo7";
const Ie = "RlBr";
const De = "JiEe";

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
  label: ke,
  hint: ye,
  input: _e,
  inputError: Pe,
  fieldError: Se,
  avatarSection: $e,
  avatarPicker: we,
  avatar: Ae,
  avatarEmpty: Ce,
  avatarHint: je,
  emojiPickerPortal: Be,
  emojiPickerBackdrop: Ie,
  submitButton: De,
};

const Le = z(() =>
  l(() => import("./index-CSAhhQIK.js"), __vite__mapDeps([0, 1, 2, 3])).then(
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
  const [_, h] = d(null);
  const [b, p] = d(null);
  const [B, I] = d(false);
  const [D, L] = d(false);
  const [F, g] = d(false);
  const [v, H] = d(null);
  const P = A(null);
  const { createProfile } = A_1();

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

  const V = async (r) => {
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

  const q = async (r) => {
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

  const G = () => {
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
      if (!a || a.length < 2 || R(c) || b) {
        return;
      }
      l(2);
    }
  };

  const W = q((r) => {
    z(r.emoji);
    g(false);
  }, []);

  const J = q(() => {
    if (!P.current) {
      return;
    }
    const r = P.current.getBoundingClientRect();
    const a = 280;
    const c = 380;
    const E = window.innerWidth - r.right;
    const r_left = r.left;
    const K = window.innerHeight - r.bottom;
    let S;
    let $;
    let w;
    let A;

    if (K >= c + 8) {
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

    H({ top: S, left: $, transformOrigin: `${w} ${A}` });
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
              onStepClick: M,
              className: t.stepper,
            }),
            j && u("div", { className: t.error, children: j }),
            i === 1 &&
              u("form", {
                className: t.form,
                onSubmit: V,
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
                        className: `${t.input} ${_ ? t.inputError : ""}`,
                        value: d,
                        onInput: (r) => {
                          k(r.target.value);
                          h(null);
                        },
                        placeholder: "Иван Иванов",
                        maxLength: 50,
                      }),
                      _ && u("span", { className: t.fieldError, children: _ }),
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
                          y(r.target.value.toLowerCase());
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
                    disabled: D,
                    children: D ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            i === 2 &&
              u("form", {
                className: t.form,
                onSubmit: q,
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
                            ref: P,
                            className: `${t.avatar} ${m ? "" : t.avatarEmpty}`,
                            onClick: J,
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
      F &&
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
                children: u(Le, {
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
