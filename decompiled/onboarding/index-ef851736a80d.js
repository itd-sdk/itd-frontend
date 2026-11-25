import {
  u,
  d,
  B as A_1,
  K,
  q,
  aB,
  B,
  bd,
  be as be_1,
  S,
  ax,
  an,
  bf,
  ao,
  bg,
} from "./index-4cbec7521f6a.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-f4caffdd84b7.js",
      "assets/index-4cbec7521f6a.js",
      "assets/index-Z1cpWBZa.css",
      "assets/index-BASdsHDQ.css",
    ])
) => i.map((i) => d[i]);
const ne = "j8TZ";
const ie = "k2yP";
const oe = "fWJS";
const le = "fqRN";
const ce = "cWCp";
const h = { stepper: ne, track: ie, progress: oe, step: le, active: ce };
function me({ steps, currentStep, onStepClick, className }) {
  const E = ((currentStep - 1) / (steps - 1)) * 100;
  return steps("div", {
    className: `${h.stepper} ${className || ""}`,
    children: [
      steps("div", {
        className: h.track,
        children: steps("div", {
          className: h.progress,
          style: { width: `${E}%` },
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
const de = "KuF2";
const ue = "UI0A";
const pe = "TOB3";
const he = "vrZm";
const fe = "k9BS";
const ve = "v1Wk";
const ge = "QB4Z";
const Ne = "gO2S";
const be = "rO0S";
const ke = "qWmj";
const Ee = "KcpR";
const ye = "xB7e";
const Pe = "n71b";
const Se = "odJC";
const _e = "LBwy";
const Be = "Zdtq";
const $e = "jAKi";
const je = "ih1p";
const Ae = "cdbo";
const Ce = "lyA2";
const we = "F2YG";
const Re = "Wn7X";

const t = {
  page: de,
  container: ue,
  header: pe,
  title: he,
  subtitle: fe,
  stepper: ve,
  form: ge,
  error: Ne,
  inputGroup: be,
  label: ke,
  hint: Ee,
  input: ye,
  inputError: Pe,
  fieldError: Se,
  avatarSection: _e,
  avatarPicker: Be,
  avatar: $e,
  avatarEmpty: je,
  avatarHint: Ae,
  emojiPickerPortal: Ce,
  emojiPickerBackdrop: we,
  submitButton: Re,
};

const Ue = be_1(() =>
  bg(
    () => import("./index-f4caffdd84b7.js"),
    __vite__mapDeps([0, 1, 2, 3])
  ).then((u) => ({
    default: u.EmojiPicker,
  }))
);

export const Onboarding = (u) => {
  const [o, i] = d(1);
  const [c, E] = d("");
  const [n, y] = d("");
  const [m, F] = d(null);
  const [C, d] = d(null);
  const [P, f] = d(null);
  const [v, p] = d(null);
  const [w, R] = d(false);
  const [U, x] = d(false);
  const [z, g] = d(false);
  const [N, D] = d(null);
  const S = A_1(null);
  const { createProfile } = K();

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

  const H = async (r) => {
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
    const b = L(l);
    if (b) {
      p(b);
      return;
    }
    x(true);
    try {
      if (!(await ax.checkUsername(l))) {
        p("Этот username уже занят");
        return;
      }
      i(2);
    } catch (k) {
      console.error("Failed to check username:", k);
      i(2);
    } finally {
      x(false);
    }
  };

  const K = async (r) => {
    r.preventDefault();

    if (!!m) {
      d(null);
      R(true);
      try {
        await createProfile({
          displayName: c.trim(),
          username: n.trim(),
          avatar: m,
        });
      } catch (a) {
        console.error("Profile creation error:", a);

        if (an(a)) {
          switch (a.code) {
            case ao.PROFILE_USERNAME_TAKEN:
            case ao.PROFILE_USERNAME_RESERVED: {
              i(1);
              p(bf(a.code, a.message));
              break;
            }
            default: {
              d(bf(a.code, a.message || "Ошибка создания профиля"));
            }
          }
        } else {
          d("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        R(false);
      }
    }
  };

  const Z = () => {
    i(1);
    d(null);
  };

  const q = (r) => {
    if (r === 1) {
      i(1);
      d(null);
    } else if (r === 2 && o === 1) {
      const a = c.trim();
      const l = n.trim();
      if (!a || a.length < 2 || L(l) || v) {
        return;
      }
      i(2);
    }
  };

  const T = q((r) => {
    F(r.emoji);
    g(false);
  }, []);

  const M = q(() => {
    if (!S.current) {
      return;
    }
    const r = S.current.getBoundingClientRect();
    const a = 280;
    const l = 380;
    const b = window.innerWidth - r.right;
    const r_left = r.left;
    const J = window.innerHeight - r.bottom;
    let _;
    let B;
    let $;
    let j;

    if (J >= l + 8) {
      _ = r.bottom + 8;
      $ = "top";
    } else {
      _ = r.top - l - 8;
      $ = "bottom";
    }

    if (r_left > b) {
      B = r.right - a;
      j = "right";
    } else {
      B = r.left;
      j = "left";
    }

    D({ top: _, left: B, transformOrigin: `${$} ${j}` });
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
              currentStep: o,
              onStepClick: q,
              className: t.stepper,
            }),
            C && u("div", { className: t.error, children: C }),
            o === 1 &&
              u("form", {
                className: t.form,
                onSubmit: H,
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
                          E(r.target.value);
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
                    disabled: U,
                    children: U ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            o === 2 &&
              u("form", {
                className: t.form,
                onSubmit: K,
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
                            onClick: M,
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
                    onClick: Z,
                    disabled: w,
                    children: "Назад",
                  }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: w || !m,
                    children: "Завершить",
                  }),
                ],
              }),
          ],
        }),
      }),
      z &&
        N &&
        aB(
          u("div", {
            className: t.emojiPickerPortal,
            style: {
              position: "fixed",
              top: N.top,
              left: N.left,
              zIndex: 1000 /* 1e3 */,
              transformOrigin: N.transformOrigin,
            },
            children: [
              u("div", {
                className: t.emojiPickerBackdrop,
                onClick: () => g(false),
              }),
              u(bd, {
                fallback: null,
                children: u(Ue, {
                  onEmojiSelect: T,
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
