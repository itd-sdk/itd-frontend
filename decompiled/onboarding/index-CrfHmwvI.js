import {
  u,
  d,
  A,
  a,
  q,
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
} from "./index-AoERIL5v.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-XBPXODIc.js",
      "assets/index-AoERIL5v.js",
      "assets/index-qR2WxFmM.css",
      "assets/index-Db-sYt7S.css",
    ])
) => i.map((i) => d[i]);
const ie = "fJrO";
const oe = "ZvyL";
const le = "utNk";
const ce = "EAOu";
const me = "ixqb";
const h = { stepper: ie, track: oe, progress: le, step: ce, active: me };
function de({ steps, currentStep, onStepClick, className }) {
  const b = ((currentStep - 1) / (steps - 1)) * 100;
  return steps("div", {
    className: `${h.stepper} ${className || ""}`,
    children: [
      steps("div", {
        className: h.track,
        children: steps("div", {
          className: h.progress,
          style: { width: `${b}%` },
        }),
      }),
      Array.from({ length: steps }, (n, y) => y + 1).map((n) =>
        steps(
          "button",
          {
            type: "button",
            className: `${h.step} ${currentStep >= n ? h.active : ""}`,
            onClick: () => onStepClick?.(n),
            children: n,
          },
          n
        )
      ),
    ],
  });
}
const ue = "FU70";
const pe = "bnGM";
const he = "hgf7";
const fe = "A1OB";
const ve = "jbdP";
const Ne = "OPIn";
const ge = "I4XA";
const ke = "qYPS";
const Ee = "xvRQ";
const be = "PGAG";
const ye = "LlXF";
const Pe = "MxQV";
const Se = "lSkA";
const _e = "kRiO";
const $e = "iuTG";
const Ae = "mU22";
const je = "SI4M";
const Be = "E90o";
const Ce = "s4tb";
const Ue = "Gkm2";
const Oe = "d7Z9";
const Re = "yD8H";

const t = {
  page: ue,
  container: pe,
  header: he,
  title: fe,
  subtitle: ve,
  stepper: Ne,
  form: ge,
  error: ke,
  inputGroup: Ee,
  label: be,
  hint: ye,
  input: Pe,
  inputError: Se,
  fieldError: _e,
  avatarSection: $e,
  avatarPicker: Ae,
  avatar: je,
  avatarEmpty: Be,
  avatarHint: Ce,
  emojiPickerPortal: Ue,
  emojiPickerBackdrop: Oe,
  submitButton: Re,
};

const we = o_1(() =>
  af(() => import("./index-XBPXODIc.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (u) => ({
      default: u.EmojiPicker,
    })
  )
);

export const Onboarding = (u) => {
  const [o, i] = d(1);
  const [c, b] = d("");
  const [n, y] = d("");
  const [m, D] = d(null);
  const [C, d] = d(null);
  const [P, f] = d(null);
  const [v, p] = d(null);
  const [U, O] = d(false);
  const [R, w] = d(false);
  const [F, N] = d(false);
  const [g, z] = d(null);
  const S = A(null);
  const { createProfile } = a();

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

  const M = async (r) => {
    r.preventDefault();
    d(null);
    f(null);
    p(null);
    const a = c.trim();
    const l = n.trim();
    if (!a) {
      f("Введите имя");
      return;
    }
    if (a.length < 2) {
      f("Имя должно быть не менее 2 символов");
      return;
    }
    const k = x(l);
    if (k) {
      p(k);
      return;
    }
    w(true);
    try {
      if (!(await a6.checkUsername(l))) {
        p("Этот username уже занят");
        return;
      }
      i(2);
    } catch (E) {
      console.error("Failed to check username:", E);
      i(2);
    } finally {
      w(false);
    }
  };

  const W = async (r) => {
    r.preventDefault();

    if (!!m) {
      d(null);
      O(true);
      try {
        await createProfile({
          displayName: c.trim(),
          username: n.trim(),
          avatar: m,
        });
        $("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (o(a)) {
          switch (a.code) {
            case r.PROFILE_USERNAME_TAKEN:
            case r.PROFILE_USERNAME_RESERVED: {
              i(1);
              p(ad(a.code, a.message));
              break;
            }
            default: {
              d(ad(a.code, a.message || "Ошибка создания профиля"));
            }
          }
        } else {
          d("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        O(false);
      }
    }
  };

  const q = () => {
    i(1);
    d(null);
  };

  const T = (r) => {
    if (r === 1) {
      i(1);
      d(null);
    } else if (r === 2 && o === 1) {
      const a = c.trim();
      const l = n.trim();
      if (!a || a.length < 2 || x(l) || v) {
        return;
      }
      i(2);
    }
  };

  const V = q((r) => {
    D(r.emoji);
    N(false);
  }, []);

  const X = q(() => {
    if (!S.current) {
      return;
    }
    const r = S.current.getBoundingClientRect();
    const a = 280;
    const l = 380;
    const k = window.innerWidth - r.right;
    const r_left = r.left;
    const Z = window.innerHeight - r.bottom;
    let _;
    let $;
    let A;
    let j;

    if (Z >= l + 8) {
      _ = r.bottom + 8;
      A = "top";
    } else {
      _ = r.top - l - 8;
      A = "bottom";
    }

    if (r_left > k) {
      $ = r.right - a;
      j = "right";
    } else {
      $ = r.left;
      j = "left";
    }

    z({ top: _, left: $, transformOrigin: `${A} ${j}` });
    N(true);
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
            u(de, {
              steps: 2,
              currentStep: o,
              onStepClick: T,
              className: t.stepper,
            }),
            C && u("div", { className: t.error, children: C }),
            o === 1 &&
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
                        value: c,
                        onInput: (r) => {
                          b(r.target.value);
                          f(null);
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
                        className: `${t.input} ${v ? t.inputError : ""}`,
                        value: n,
                        onInput: (r) => {
                          y(r.target.value.toLowerCase());
                          p(null);
                        },
                        placeholder: "ivanov1998",
                        maxLength: 50,
                      }),
                      v && u("span", { className: t.fieldError, children: v }),
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
            o === 2 &&
              u("form", {
                className: t.form,
                onSubmit: W,
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
                            ref: S,
                            className: `${t.avatar} ${m ? "" : t.avatarEmpty}`,
                            onClick: X,
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
                    onClick: q,
                    disabled: U,
                    children: "Назад",
                  }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: U || !m,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      F &&
        g &&
        v(
          u("div", {
            className: t.emojiPickerPortal,
            style: {
              position: "fixed",
              top: g.top,
              left: g.left,
              zIndex: 1000 /* 1e3 */,
              transformOrigin: g.transformOrigin,
            },
            children: [
              u("div", {
                className: t.emojiPickerBackdrop,
                onClick: () => N(false),
              }),
              u(ac, {
                fallback: null,
                children: u(we, {
                  onEmojiSelect: V,
                  onClose: () => N(false),
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
