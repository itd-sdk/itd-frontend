import {
  a,
  d as d_1,
  A,
  c,
  q,
  a9,
  B,
  aa,
  k,
  p,
  $,
  i,
  a8,
} from "./index-B0np_7Xy.js";

const ae = "A7QUMP5L";
const ne = "pGvEOTxS";
const se = "-nsFX-HU";
const ie = "-vCwS0R-";
const le = "xB1BkbmH";
const d = { stepper: ae, track: ne, progress: se, step: ie, active: le };
function oe({ steps: k, currentStep: l, onStepClick: i, className: c }) {
  const E = ((l - 1) / (k - 1)) * 100;
  return a("div", {
    className: `${d.stepper} ${c || ""}`,
    children: [
      a("div", {
        className: d.track,
        children: a("div", {
          className: d.progress,
          style: { width: `${E}%` },
        }),
      }),
      Array.from({ length: k }, (s, y) => y + 1).map((s) =>
        a(
          "button",
          {
            type: "button",
            className: `${d.step} ${l >= s ? d.active : ""}`,
            onClick: () => i?.(s),
            children: s,
          },
          s
        )
      ),
    ],
  });
}
const ce = "nj86MwK9";
const me = "uCvgEFWz";
const pe = "saAqedCJ";
const ue = "OA7KKel8";
const de = "Fn0kAL0x";
const he = "jUT7s-Cp";
const fe = "_0eUUh7Kp";
const ve = "AS-ICavZ";
const Ne = "T4mWmFxa";
const ge = "inzg3byq";
const be = "zp-ROfQn";
const ke = "BUdDKKI6";
const Ee = "O0iYFET2";
const ye = "SUqfH6Oo";
const Pe = "_0bd-NjD0";
const Se = "_3EeTqA7h";
const $e = "wR6EKCp0";
const Ce = "VnQgrcVm";
const Ae = "mh9nzH3y";
const _e = "W2aJyl5M";
const Ue = "x7yWR5rt";
const je = "_-5ZF1lMm";

const t = {
  page: ce,
  container: me,
  header: pe,
  title: ue,
  subtitle: de,
  stepper: he,
  form: fe,
  error: ve,
  inputGroup: Ne,
  label: ge,
  hint: be,
  input: ke,
  inputError: Ee,
  fieldError: ye,
  avatarSection: Pe,
  avatarPicker: Se,
  avatar: $e,
  avatarEmpty: Ce,
  avatarHint: Ae,
  emojiPickerPortal: _e,
  emojiPickerBackdrop: Ue,
  submitButton: je,
};

export const Onboarding = (k) => {
  const [l, i] = d_1(1);
  const [c, E] = d_1("");
  const [s, y] = d_1("");
  const [m, H] = d_1(null);
  const [j, p] = d_1(null);
  const [P, h] = d_1(null);
  const [f, u] = d_1(null);
  const [B, w] = d_1(false);
  const [x, F] = d_1(false);
  const [L, v] = d_1(false);
  const [N, R] = d_1(null);
  const S = A(null);
  const { createProfile: W } = c();

  const O = (r) =>
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

  const I = async (r) => {
    r.preventDefault();
    p(null);
    h(null);
    u(null);
    const a = c.trim();
    const o = s.trim();
    if (!a) {
      h("Введите имя");
      return;
    }
    if (a.length < 2) {
      h("Имя должно быть не менее 2 символов");
      return;
    }
    const g = O(o);
    if (g) {
      u(g);
      return;
    }
    F(true);
    try {
      if (!(await p.checkUsername(o))) {
        u("Этот username уже занят");
        return;
      }
      i(2);
    } catch (b) {
      console.error("Failed to check username:", b);
      i(2);
    } finally {
      F(false);
    }
  };

  const K = async (r) => {
    r.preventDefault();

    if (!!m) {
      p(null);
      w(true);
      try {
        await W({ displayName: c.trim(), username: s.trim(), avatar: m });
        $("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (i(a)) {
          if (a.code === a8.PROFILE_USERNAME_TAKEN) {
            i(1);
            u("Этот username уже занят");
          } else {
            p(a.message || "Ошибка создания профиля");
          }
        } else {
          p("Произошла ошибка. Попробуйте позже");
        }
      } finally {
        w(false);
      }
    }
  };

  const D = () => {
    i(1);
    p(null);
  };

  const T = (r) => {
    if (r === 1) {
      i(1);
      p(null);
    } else if (r === 2 && l === 1) {
      const a = c.trim();
      const o = s.trim();
      if (
        !a ||
        a.length < 2 ||
        a.length < 2 ||
        O(o) ||
        a.length < 2 ||
        O(o) ||
        f
      ) {
        return;
      }
      i(2);
    }
  };

  const q = q((r) => {
    H(r.emoji);
    v(false);
  }, []);

  const G = q(() => {
    if (!S.current) {
      return;
    }
    const r = S.current.getBoundingClientRect();
    const a = 280;
    const o = 380;
    const g = window.innerWidth - r.right;
    const b = r.left;
    const M = window.innerHeight - r.bottom;
    let $;
    let C;
    let A;
    let _;

    if (M >= o + 8) {
      $ = r.bottom + 8;
      A = "top";
    } else {
      $ = r.top - o - 8;
      A = "bottom";
    }

    if (b > g) {
      C = r.right - a;
      _ = "right";
    } else {
      C = r.left;
      _ = "left";
    }

    R({ top: $, left: C, transformOrigin: `${A} ${_}` });
    v(true);
  }, []);

  return a(k, {
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
            a(oe, {
              steps: 2,
              currentStep: l,
              onStepClick: T,
              className: t.stepper,
            }),
            j && a("div", { className: t.error, children: j }),
            l === 1 &&
              a("form", {
                className: t.form,
                onSubmit: I,
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
                        value: c,
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
                        className: `${t.input} ${f ? t.inputError : ""}`,
                        value: s,
                        onInput: (r) => {
                          y(r.target.value.toLowerCase());
                          u(null);
                        },
                        placeholder: "ivanov1998",
                        maxLength: 50,
                      }),
                      f && a("span", { className: t.fieldError, children: f }),
                    ],
                  }),
                  a(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: x,
                    children: x ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            l === 2 &&
              a("form", {
                className: t.form,
                onSubmit: K,
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
                            ref: S,
                            className: `${t.avatar} ${m ? "" : t.avatarEmpty}`,
                            onClick: G,
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
                    onClick: D,
                    disabled: B,
                    children: "Назад",
                  }),
                  a(B, {
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
      L &&
        N &&
        a9(
          a("div", {
            className: t.emojiPickerPortal,
            style: {
              position: "fixed",
              top: N.top,
              left: N.left,
              zIndex: 1000 /* 1e3 */,
              transformOrigin: N.transformOrigin,
            },
            children: [
              a("div", {
                className: t.emojiPickerBackdrop,
                onClick: () => v(false),
              }),
              a(aa, {
                onEmojiSelect: q,
                onClose: () => v(false),
                excludeCategories: ["Flags"],
              }),
            ],
          }),
          document.body
        ),
    ],
  });
};

export { Onboarding as Onboarding, Onboarding as default };
