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
  x,
  ao,
  u_1 as u_1_1,
  l,
} from "./index-dnACTU3c.js";

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-JCEeCEco.js",
      "assets/index-dnACTU3c.js",
      "assets/index-BJv86F6a.css",
      "assets/index--R1SxzV7.css",
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
      n._sentryDebugIds[i] = "aa16be54-6b60-4c1a-9079-cf7dc2de5ba3";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-aa16be54-6b60-4c1a-9079-cf7dc2de5ba3";
    }
  } catch {}
})();
const ie = "JKxa";
const oe = "VgOD";
const le = "OvSt";
const ce = "YkPJ";
const de = "dfKe";
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
const ue = "cq4J";
const pe = "uRK3";
const fe = "H24h";
const he = "Uwv3";
const be = "Qb10";
const ge = "aMSX";
const ve = "oHxb";
const Ne = "Bkcc";
const Ee = "Vh7o";
const ke = "f19l";
const ye = "SGWZ";
const Se = "GGXN";
const Pe = "wBFS";
const _e = "Wnda";
const $e = "yR1S";
const we = "kOlH";
const Ae = "SV9L";
const Be = "Fh0O";
const je = "dbz3";
const Ie = "ra8G";
const Re = "AI4Z";
const Ce = "VYqS";

const t = {
  page: ue,
  container: pe,
  header: fe,
  title: he,
  subtitle: be,
  stepper: ge,
  form: ve,
  error: Ne,
  inputGroup: Ee,
  label: ke,
  hint: ye,
  input: Se,
  inputError: Pe,
  fieldError: _e,
  avatarSection: $e,
  avatarPicker: we,
  avatar: Ae,
  avatarEmpty: Be,
  avatarHint: je,
  emojiPickerPortal: Ie,
  emojiPickerBackdrop: Re,
  submitButton: Ce,
};

const Ue = z(() =>
  l(() => import("./index-JCEeCEco.js"), __vite__mapDeps([0, 1, 2, 3])).then(
    (n) => ({
      default: n.EmojiPicker,
    })
  )
);

export const Onboarding = (n) => {
  const [i, l] = d(1);
  const [d, k] = d("");
  const [o, y] = d("");
  const [m, G] = d(null);
  const [j, u] = d(null);
  const [S, h] = d(null);
  const [b, p] = d(null);
  const [I, R] = d(false);
  const [C, U] = d(false);
  const [H, g] = d(false);
  const [v, z] = d(null);
  const P = A(null);
  const { createProfile } = w();

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

  const W = async (r) => {
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
    const N = x(c);
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
      l(2);
    } catch (E) {
      console.error("Failed to check username:", E);
      l(2);
    } finally {
      U(false);
    }
  };

  const V = async (r) => {
    r.preventDefault();

    if (!!m) {
      u(null);
      R(true);
      try {
        await createProfile({
          displayName: d.trim(),
          username: o.trim(),
          avatar: m,
        });
        u_1("/");
      } catch (a) {
        console.error("Profile creation error:", a);

        if (x(a)) {
          switch (a.code) {
            case u_1_1.PROFILE_USERNAME_TAKEN:
            case u_1_1.PROFILE_USERNAME_RESERVED: {
              l(1);
              p(ao(a.code, a.message));
              break;
            }
            default: {
              u(ao(a.code, a.message || "Ошибка создания профиля"));
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

  const T = () => {
    l(1);
    u(null);
  };

  const K = (r) => {
    if (r === 1) {
      l(1);
      u(null);
    } else if (r === 2 && i === 1) {
      const a = d.trim();
      const c = o.trim();
      if (!a || a.length < 2 || x(c) || b) {
        return;
      }
      l(2);
    }
  };

  const M = q((r) => {
    G(r.emoji);
    g(false);
  }, []);

  const Y = q(() => {
    if (!P.current) {
      return;
    }
    const r = P.current.getBoundingClientRect();
    const a = 280;
    const c = 380;
    const N = window.innerWidth - r.right;
    const r_left = r.left;
    const q = window.innerHeight - r.bottom;
    let _;
    let $;
    let w;
    let A;

    if (q >= c + 8) {
      _ = r.bottom + 8;
      w = "top";
    } else {
      _ = r.top - c - 8;
      w = "bottom";
    }

    if (r_left > N) {
      $ = r.right - a;
      A = "right";
    } else {
      $ = r.left;
      A = "left";
    }

    z({ top: _, left: $, transformOrigin: `${w} ${A}` });
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
              onStepClick: K,
              className: t.stepper,
            }),
            j && u("div", { className: t.error, children: j }),
            i === 1 &&
              u("form", {
                className: t.form,
                onSubmit: W,
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
                        className: `${t.input} ${S ? t.inputError : ""}`,
                        value: d,
                        onInput: (r) => {
                          k(r.target.value);
                          h(null);
                        },
                        placeholder: "Иван Иванов",
                        maxLength: 50,
                      }),
                      S && u("span", { className: t.fieldError, children: S }),
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
                    disabled: C,
                    children: C ? "Проверка..." : "Продолжить",
                  }),
                ],
              }),
            i === 2 &&
              u("form", {
                className: t.form,
                onSubmit: V,
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
                    onClick: T,
                    disabled: I,
                    children: "Назад",
                  }),
                  u(B, {
                    type: "submit",
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: t.submitButton,
                    disabled: I || !m,
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
                children: u(Ue, {
                  onEmojiSelect: M,
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
