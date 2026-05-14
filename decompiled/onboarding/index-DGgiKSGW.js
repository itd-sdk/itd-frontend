import {
  a,
  d,
  A,
  A_1 as x_1,
  A as A_1,
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
} from "./index-7xRaK15k.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DUXUMKAC.js",
      "assets/index-7xRaK15k.js",
      "assets/index-BIOTytQQ.css",
      "assets/index-Bb9L8bnv.css",
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
      a._sentryDebugIds[i] = "22b543cc-93ca-470b-a4ef-3ca73da4d6a0";
      a._sentryDebugIdIdentifier =
        "sentry-dbid-22b543cc-93ca-470b-a4ef-3ca73da4d6a0";
    }
  } catch {}
})();
const se = "Lgc2";
const ie = "VMmL";
const le = "YNKs";
const oe = "Qva0";
const ce = "iFTi";
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
const de = "SjOc";
const ue = "Vmi3";
const pe = "QzmJ";
const fe = "SynH";
const he = "dWhv";
const be = "K8IS";
const ve = "JjNH";
const ge = "Ln4G";
const Ne = "dO8i";
const ye = "gywW";
const ke = "h5rX";
const Ee = "yNGQ";
const _e = "ut8Y";
const Pe = "WKa4";
const Se = "cBcm";
const $e = "mSoW";
const we = "eklc";
const je = "EqXv";
const Le = "LqLn";
const Ae = "LYtZ";
const Be = "limr";
const Ie = "zXDI";

const t = {
  page: de,
  container: ue,
  header: pe,
  title: fe,
  subtitle: he,
  stepper: be,
  form: ve,
  error: ge,
  inputGroup: Ne,
  label: ye,
  hint: ke,
  input: Ee,
  inputError: _e,
  fieldError: Pe,
  avatarSection: Se,
  avatarPicker: $e,
  avatar: we,
  avatarEmpty: je,
  avatarHint: Le,
  emojiPickerPortal: Ae,
  emojiPickerBackdrop: Be,
  submitButton: Ie,
};

const Ce = z(() =>
  _(() => import("./index-DUXUMKAC.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (a) => ({
      default: a.EmojiPicker,
    })
  )
);

export const Onboarding = (a) => {
  const [i, o] = d(1);
  const [m, k] = d("");
  const [l, E] = d("");
  const [d, W] = d(null);
  const [A, u] = d(null);
  const [_, h] = d(null);
  const [b, p] = d(null);
  const [B, I] = d(false);
  const [C, D] = d(false);
  const [z, v] = d(false);
  const [g, O] = d(null);
  const P = A(null);
  const { createProfile } = x_1();

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

  const H = async (r) => {
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
    const N = U(c);
    if (N) {
      p(N);
      return;
    }
    D(true);
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
      D(false);
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

  const T = () => {
    o(1);
    u(null);
  };

  const F = (r) => {
    if (r === 1) {
      o(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const n = m.trim();
      const c = l.trim();
      if (!n || n.length < 2 || U(c) || b) {
        return;
      }
      o(2);
    }
  };

  const Y = A_1((r) => {
    W(r.emoji);
    v(false);
  }, []);

  const K = A_1(() => {
    if (!P.current) {
      return;
    }
    const r = P.current.getBoundingClientRect();
    const n = 280;
    const c = 380;
    const N = window.innerWidth - r.right;
    const r_left = r.left;
    const X = window.innerHeight - r.bottom;
    let S;
    let $;
    let w;
    let j;

    if (X >= c + 8) {
      S = r.bottom + 8;
      w = "top";
    } else {
      S = r.top - c - 8;
      w = "bottom";
    }

    if (r_left > N) {
      $ = r.right - n;
      j = "right";
    } else {
      $ = r.left;
      j = "left";
    }

    O({ top: S, left: $, transformOrigin: `${w} ${j}` });
    v(true);
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
              onStepClick: F,
              className: t.stepper,
            }),
            A && a("div", { className: t.error, children: A }),
            i === 1 &&
              a("form", {
                className: t.form,
                onSubmit: H,
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
                        className: `${t.input} ${_ ? t.inputError : ""}`,
                        value: m,
                        onInput: (r) => {
                          k(r.target.value);
                          h(null);
                        },
                        placeholder: "Иван Иванов",
                        maxLength: 50,
                      }),
                      _ && a("span", { className: t.fieldError, children: _ }),
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
                    disabled: C,
                    children: C ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            i === 2 &&
              a("form", {
                className: t.form,
                onSubmit: G,
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
                            ref: P,
                            className: `${t.avatar} ${d ? "" : t.avatarEmpty}`,
                            onClick: K,
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
                    onClick: T,
                    disabled: B,
                    children: "Назад",
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: B || !d,
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
                onClick: () => v(false),
              }),
              a(l, {
                fallback: null,
                children: a(Ce, {
                  onEmojiSelect: Y,
                  onClose: () => v(false),
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
