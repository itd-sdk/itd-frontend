import {
  ah,
  ai,
  a,
  a4,
  a5,
  d,
  B,
  B as B_1,
  ad,
  x,
  aa,
  aj,
  o,
  E,
  ak,
  A,
  y,
  r,
  m as q_1,
  al,
  a3,
  m,
  am,
  f,
  a0,
  an as an_1,
  t,
  C,
  g,
  ao,
  v,
  $,
  k,
  ap,
  Q as Q_1,
} from "./index-BCnJB3wz.js";

import { I } from "./IconNotificationMention-Bj1axzUH.js";
import { I as I_1 } from "./IconInfo-DBMb_x9i.js";
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
    s.SENTRY_RELEASE = { id: "1.1.1" };
    const c = new s.Error().stack;

    if (c) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[c] = "2afe7978-e380-4fdf-803c-84348258af50";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-2afe7978-e380-4fdf-803c-84348258af50";
    }
  } catch {}
})();

const je = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const Ge = () => {
  if (typeof window !== "undefined") {
    const s = localStorage.getItem("theme-storage");
    if (s) {
      try {
        return JSON.parse(s).state?.theme || "system";
      } catch {
        return "system";
      }
    }
  }
  return "system";
};

const de = (s) => {
  const c = s === "system" ? je() : s;
  document.documentElement.setAttribute("data-theme", c);
};

const Se = ah()(
  ai(
    (s) => ({
      theme: Ge(),

      setTheme: (c) => {
        de(c);
        s({ theme: c });
      },

      toggleTheme: () =>
        s((c) => {
          const l = c.theme === "light" ? "dark" : "light";
          de(l);
          return { theme: l };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (s) => {
        if (s?.theme) {
          de(s.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (Se.getState().theme === "system") {
        de("system");
      }
    });
}

const Xe = ({ size = 18 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      a("path", {
        fill: "currentColor",
        d: "M7.17 14.288c.03.12.064.238.102.354.213.661.543 1.251.926 1.772a3.964 3.964 0 0 1-2.036-1.164.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.16.014.32.025.477.036ZM9.002 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.006.202-.011.384-.01.56-.253.05-.49.126-.706.213a3.832 3.832 0 0 0-.803-.23v.001a5.083 5.083 0 0 0-2.274.149l-.009.003-.01.003c-2.594.808-3.54 3.168-3.364 5.22-1.696-.11-3.138-.427-3.744-1.285-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Z",
      }),
      a("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M17.758 11.709a2.743 2.743 0 0 0-1.751-1.575 3.024 3.024 0 0 0-1.38-.095c-.423.069-.806.313-1.128.54-.311-.218-.704-.466-1.129-.535a3.083 3.083 0 0 0-1.378.09c-1.768.55-2.312 2.412-1.818 3.893.77 2.377 4.084 3.888 4.225 3.952a.247.247 0 0 0 .2 0c.139-.063 3.404-1.548 4.22-3.95.261-.783.239-1.607-.061-2.32Z",
        clipRule: "evenodd",
      }),
    ],
  });

const we = ({ size = 18 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      a("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.453.038.891.066 1.317.084.034.63.168 1.26.406 1.864-.021.07-.043.153-.065.243a3.946 3.946 0 0 1-2.19-1.193.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.005.17-.01.327-.01.477a5.988 5.988 0 0 0-4.44 1.75l-.001.002a6.01 6.01 0 0 0-1.734 3.733c-2.108-.05-4.014-.307-4.735-1.328-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm1.963 9.894a3.977 3.977 0 0 0-.004.004l.004-.004Z",
      }),
      a("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.83 11.17a4.008 4.008 0 0 0-5.659 0 4.017 4.017 0 0 0-.805 4.506c.077.192.132.337.132.456 0 .141-.06.316-.117.486-.111.327-.238.698.034.969.27.271.642.143.97.031.167-.057.34-.117.48-.117.122 0 .277.062.455.134a4.019 4.019 0 0 0 4.51-.807 4.007 4.007 0 0 0 0-5.659Z",
        clipRule: "evenodd",
      }),
    ],
  });

const qe = ({ size = 18 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      a("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.479.04.941.069 1.389.087a4.72 4.72 0 0 0 .067 2.063 3.968 3.968 0 0 1-1.988-1.152.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.269 0 4.905 2.546 5.18 4.657-1.042.362-1.842 1.336-1.842 2.559v1.764c-1.79.208-3.352 1.368-4.009 3.012-2.228-.033-4.286-.261-5.042-1.332-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm3.919 10.944a2.894 2.894 0 0 1 .191.007l-.191-.007Z",
      }),
      a("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.835 15.172c0-.01.006-.018.006-.028v-4.477a3.56 3.56 0 0 0 1.259.5c.404.077.801-.17.885-.556.083-.387-.18-.764-.586-.842-1.136-.22-1.591-1.27-1.608-1.31a.756.756 0 0 0-.838-.446.725.725 0 0 0-.614.703v4.094a2.99 2.99 0 0 0-1.42-.365c-1.61 0-2.919 1.246-2.919 2.778C10 16.754 11.31 18 12.92 18c1.61 0 2.92-1.245 2.92-2.777 0-.018-.005-.033-.005-.051Z",
        clipRule: "evenodd",
      }),
    ],
  });

const Je = ({ size = 18 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      a("path", {
        fill: "currentColor",
        d: "M6.694 14.252C7.151 14.291 7.593 14.318 8.021 14.336 8.121 15.23 8.613 16.004 9.322 16.484 9.215 16.494 9.106 16.5 8.997 16.5H8.995C7.933 16.5 6.927 16.055 6.162 15.25 6.077 15.163 6.023 15.051 6.006 14.931 5.989 14.81 6.011 14.687 6.068 14.58 6.186 14.36 6.439 14.233 6.694 14.252ZM9.001 1.5C12.603 1.5 14.223 4.592 14.223 6.786 14.223 7.063 14.216 7.303 14.208 7.525 14.203 7.697 14.199 7.855 14.198 8.007 14.133 8.003 14.067 8 14 8 12.343 8 11 9.343 11 11 9.517 11 8.287 12.076 8.045 13.489 5.928 13.44 4.012 13.185 3.288 12.16 2.942 11.671 2.908 11.069 3.187 10.373 3.838 8.981 3.822 8.464 3.792 7.525 3.784 7.303 3.777 7.062 3.777 6.786 3.777 4.592 5.398 1.5 9.001 1.5ZM13 11C13 10.448 13.448 10 14 10 14.552 10 15 10.448 15 11V17C15 17.552 14.552 18 14 18 13.448 18 13 17.552 13 17V11Z",
      }),
      a("path", {
        fill: "currentColor",
        d: "M11 15C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H11Z",
      }),
    ],
  });

const Ke = ({ size = 24 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    children: a("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M8.078 10.367c0-.01.006-.019.006-.029V5.636a3.46 3.46 0 0 0 1.257.526.749.749 0 1 0 .299-1.469c-1.135-.23-1.589-1.333-1.606-1.375a.75.75 0 0 0-1.45.269v4.3a2.873 2.873 0 0 0-1.418-.384 2.92 2.92 0 0 0-2.916 2.918 2.92 2.92 0 0 0 2.916 2.916 2.92 2.92 0 0 0 2.917-2.916c0-.019-.005-.035-.005-.054ZM21.75 6.503a.749.749 0 0 0-1.067-.68c-2.557 1.189-5.245 1.683-7.982 1.469a.752.752 0 0 0-.568.196.752.752 0 0 0-.24.55v7.697a2.866 2.866 0 0 0-1.402-.377 2.907 2.907 0 0 0-2.903 2.904 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903v-6.925c.183.007.368.023.552.023 2.151 0 4.26-.427 6.303-1.228V14.2a2.87 2.87 0 0 0-1.403-.377 2.906 2.906 0 0 0-2.903 2.903 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903V6.502Z",
      "clip-rule": "evenodd",
    }),
  });

const Ye = ({ size = 20 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    children: a("path", {
      fill: "currentColor",
      d: "M9.905 2.501c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06H4.113c-2.422 0-4.113-1.67-4.113-4.06V6.56c0-2.391 1.691-4.06 4.113-4.06zm8.053 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675a1.43 1.43 0 0 1-1.412 1.436c-.215 0-.43-.05-.631-.153l-1.481-.748a1.62 1.62 0 0 1-.888-1.457V7.085c0-.621.34-1.18.888-1.456z",
    }),
  });

const Qe = ({ size = 18 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: a("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 7 4 4 4-4",
    }),
  });

const en = ({ size = 24 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: a("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.723 10.043a.918.918 0 0 0-.658-.261c-1.069 0-1.939.832-1.939 1.853 0 .015 0 .049-.004.06l-.008 1.876c0 .22-.18.392-.41.392a.397.397 0 0 1-.41-.392V5.948c0-.366-.153-.722-.42-.98-.548-.52-1.48-.523-2.045.003-.27.27-.42.618-.42.977v5.034a.401.401 0 0 1-.409.391c-.219 0-.41-.182-.41-.391v-6.61a1.342 1.342 0 0 0-.422-.968 1.408 1.408 0 0 0-.471-.3 1.513 1.513 0 0 0-1.098-.001 1.426 1.426 0 0 0-.783.747c-.072.156-.11.342-.11.522v6.61a.401.401 0 0 1-.41.391c-.219 0-.41-.182-.41-.391V7.126c0-.736-.671-1.382-1.438-1.382C5.677 5.744 5 6.385 5 7.116v7.276c.023 1.768.759 3.426 2.074 4.67A7.162 7.162 0 0 0 12 21a7.16 7.16 0 0 0 4.926-1.937c1.315-1.245 2.052-2.907 2.074-4.684v-3.704c0-.241-.097-.461-.277-.632Z",
      clipRule: "evenodd",
    }),
  });

const nn = ({ size = 24 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: a("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.532 5.497C17.905 4.83 12.91 3 12 3c-.91 0-5.906 1.83-6.532 2.498-.497.533-.491.944-.452 3.218.016.923.037 2.18.037 3.919 0 6.07 6.75 8.322 6.818 8.345a.424.424 0 0 0 .258 0c.068-.023 6.818-2.276 6.818-8.345 0-1.735.021-2.99.037-3.912.038-2.28.046-2.691-.453-3.226Z",
      clipRule: "evenodd",
    }),
  });

const sn = "bTGU";
const tn = "xkd0";
const ye = { toggle: sn, active: tn };
function j({ checked, onChange, disabled }) {
  const m = (t) => {
    t.stopPropagation();

    if (!disabled) {
      onChange(!checked);
    }
  };
  return a("button", {
    type: "button",
    className: `${ye.toggle} ${checked ? ye.active : ""}`,
    onClick: m,
    disabled: disabled,
    role: "switch",
    "aria-checked": checked,
  });
}

const an = {
  async getStatus() {
    return a4.get(a5.subscription.status);
  },
  async pay() {
    return a4.post(a5.subscription.pay);
  },
  async setAutoRenewal(s) {
    return a4.post(a5.subscription.autoRenewal, { enabled: s });
  },
  async bindCard() {
    return a4.post(a5.subscription.bindCard);
  },
  async getMethods() {
    return (await a4.get(a5.subscription.methods)).data;
  },
  async setDefaultMethod(s) {
    return a4.put(a5.subscription.methodDefault(s));
  },
  async deleteMethod(s) {
    return a4.delete(a5.subscription.methodDelete(s));
  },
};

const ln = "M9AA";
const cn = "Hfoh";
const on = "kkX1";
const rn = "OEcR";
const dn = "In9l";
const un = "CMct";
const hn = "HRTt";
const mn = "U3oC";
const fn = "X7jN";
const pn = "XO8Y";

const z = {
  inputWrapper: ln,
  label: cn,
  hint: on,
  input: rn,
  error: dn,
  small: un,
  medium: hn,
  large: mn,
  default: "DUVt",
  outline: fn,
  errorText: pn,
};

function le({
  value,
  onChange,
  label,
  hint,
  error,
  size = "medium",
  variant = "default",
  className,
  ...N
}) {
  const o = (I) => {
    onChange?.(I.currentTarget.value);
  };
  return className("div", {
    className: z.inputWrapper,
    children: [
      label &&
        className("label", {
          className: z.label,
          children: [
            label,
            hint && className("span", { className: z.hint, children: hint }),
          ],
        }),
      className("input", {
        className: `${z.input} ${z[d]} ${z[v]} ${error ? z.error : ""} ${
          className || ""
        }`,
        value: value,
        onInput: o,
        ...N,
      }),
      error && className("span", { className: z.errorText, children: error }),
    ],
  });
}
const gn = "FNVI";
const vn = "th16";
const Nn = "R0w9";
const bn = "hEjj";
const wn = "mCW3";
const yn = "SkFk";
const Cn = "eEoN";

const D = {
  form: gn,
  field: vn,
  label: Nn,
  hint: bn,
  fieldError: wn,
  error: yn,
  actions: Cn,
};

function kn({ onClose, onBack }) {
  const [l, m] = d("");
  const [t, d] = d("");
  const [v, a] = d("");
  const [N, o] = d(false);
  const [I, k] = d(null);
  const [b, w] = d({});

  const T = async (E) => {
    E.preventDefault();
    k(null);
    w({});

    if (t !== v) {
      w({ confirmPassword: "Пароли не совпадают" });
      return;
    }

    if (t.length < 10) {
      w({ newPassword: "Минимум 10 символов" });
      return;
    }
    if (t.length > 128) {
      w({ newPassword: "Максимум 128 символов" });
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(t)) {
      w({ newPassword: "Только латиница, цифры и знаки пунктуации" });
      return;
    }
    o(true);
    try {
      await ad.changePassword({ currentPassword: l, newPassword: t });
      await x.getState().logout();
      onClose();
    } catch (h) {
      if (aa(h)) {
        if (h.code === "CURRENT_PASSWORD_INCORRECT") {
          w({ currentPassword: "Неверный текущий пароль" });
        } else if (h.errors) {
          const C = {};
          for (const [L, p] of Object.entries(h.errors)) {
            C[L] = p[0] || "Ошибка валидации";
          }
          w(C);
        } else {
          k(h.message || "Не удалось сменить пароль");
        }
      } else {
        k("Не удалось сменить пароль");
      }
    } finally {
      o(false);
    }
  };

  const P = l.length > 0 && t.length >= 10 && v.length > 0;
  return a(B_1, {
    onClose: onBack,
    title: "Смена пароля",
    children: a("form", {
      onSubmit: T,
      className: D.form,
      children: [
        a("div", {
          className: D.field,
          children: [
            a("label", { className: D.label, children: "Текущий пароль" }),
            a(le, {
              type: "password",
              value: l,
              onChange: m,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            b.currentPassword &&
              a("span", {
                className: D.fieldError,
                children: b.currentPassword,
              }),
          ],
        }),
        a("div", {
          className: D.field,
          children: [
            a("label", { className: D.label, children: "Новый пароль" }),
            a(le, {
              type: "password",
              value: t,
              onChange: d,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            a("span", {
              className: D.hint,
              children: "Минимум 10 символов, латиница, цифры и пунктуация",
            }),
            b.newPassword &&
              a("span", { className: D.fieldError, children: b.newPassword }),
          ],
        }),
        a("div", {
          className: D.field,
          children: [
            a("label", {
              className: D.label,
              children: "Подтверждение пароля",
            }),
            a(le, {
              type: "password",
              value: v,
              onChange: a,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            b.confirmPassword &&
              a("span", {
                className: D.fieldError,
                children: b.confirmPassword,
              }),
          ],
        }),
        I && a("div", { className: D.error, children: I }),
        a("div", {
          className: D.actions,
          children: [
            a(B, {
              type: "button",
              variant: "secondary",
              onClick: onBack,
              disabled: N,
              children: "Отмена",
            }),
            a(B, {
              type: "submit",
              disabled: !P || N,
              children: N ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
      ],
    }),
  });
}
const Tn = "A3Nm";
const In = "I966";
const Pn = "udc1";
const $n = "Gf6A";
const oe = { content: Tn, title: In, subtitle: Pn, actions: $n };
function xn({ onClose }) {
  const c = async () => {
    await x.getState().deleteAccount();
    onClose();
  };
  return a(B_1, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: oe.content,
      children: [
        a("h2", { className: oe.title, children: "Удалить аккаунт?" }),
        a("p", {
          className: oe.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        a("div", {
          className: oe.actions,
          children: [
            a(B, {
              variant: "secondary",
              onClick: (l) => {
                l.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            a(B, {
              variant: "danger",
              onClick: (l) => {
                l.stopPropagation();
                c();
              },
              children: "Удалить аккаунт",
            }),
          ],
        }),
      ],
    }),
  });
}
const Sn = "ztcS";
const En = "KnRq";
const An = "XffN";
const Mn = "Q8fe";
const Ln = "u8wP";
const Rn = "yp4T";
const Dn = "A3sH";
const Un = "o5NT";
const On = "GGGc";
const Bn = "NUHB";
const Hn = "n6n1";
const _n = "YHO9";
const Fn = "K3yH";
const Zn = "xrgj";
const Vn = "V0Sb";
const Wn = "oIzL";
const zn = "E45o";
const jn = "sA4n";
const Gn = "kaqh";
const Xn = "PZIA";
const qn = "Vhwj";
const Jn = "N2uX";
const Kn = "paUm";
const Yn = "v9FY";
const Qn = "HnA2";
const es = "gW60";
const ns = "H8mb";
const ss = "EkjO";
const ts = "Txwy";
const as = "Rbpl";
const is = "ZXk8";
const ls = "CVP9";
const cs = "E95h";
const os = "pMAy";
const rs = "Hf2l";
const ds = "Wa2R";
const us = "TmRP";
const hs = "wpIg";
const ms = "bAZE";
const fs = "LHxo";
const ps = "c5Zd";
const gs = "EkI6";
const vs = "eNXl";
const Ns = "kRFp";
const bs = "M3T3";

const n = {
  modalContainer: Sn,
  settingsModal: En,
  sidebar: An,
  sidebarTitle: Mn,
  navItem: Ln,
  active: Rn,
  contentWrapper: Dn,
  content: Un,
  actionBar: On,
  confirmOverlay: Bn,
  confirmDialog: Hn,
  confirmText: _n,
  confirmActions: Fn,
  contentTitle: Zn,
  section: Vn,
  sectionTitle: Wn,
  settingItem: zn,
  clickable: jn,
  column: Gn,
  settingInfo: Xn,
  settingIcon: qn,
  blue: Jn,
  red: Kn,
  purple: Yn,
  settingText: Qn,
  settingTitle: es,
  settingDescription: ns,
  settingControl: ss,
  avatarDisplay: ts,
  pinGrid: as,
  pinItem: is,
  pinActive: ls,
  pinImage: cs,
  pinName: os,
  bioTextarea: rs,
  fieldError: ds,
  saveError: us,
  emptyBlocklist: hs,
  blockedUsersList: ms,
  blockedUserItem: fs,
  blockedUserInfo: ps,
  blockedUserName: gs,
  blockedUserUsername: vs,
  deleteAccountButton: Ns,
  logoutButton: bs,
};

const ws = aj(({ onDirtyChange, onSavingChange, onClose }, t) => {
  const d = x((r) => r.profile);

  const v = x((r) => r.logout);

  const { openModal, closeModal } = o();
  const o = E();
  const [I] = ak();
  const k = I?.url || window.location.pathname;
  const [b, w] = d(true);
  const [T, P] = d(false);
  const [E, h] = d(false);
  const [C, L] = d({});
  const [p, R] = d(null);
  const [$, F] = d(null);
  const [y, g] = d({ name: "", username: "", bio: "", avatar: "😀" });
  const [W, Z] = d([]);
  const [H, ee] = d(null);
  const O = A(null);
  const [he, me] = d(true);

  y(() => {
    if (d) {
      const r = {
        name: d.displayName,
        username: d.username || "",
        bio: d.bio || "",
        avatar: d.avatar,
      };
      g(r);
      F(r);
      w(false);
      const S = d.pin ?? null;
      ee(S);
      O.current = S;
    }
  }, [d]);

  y(() => {
    r.getMyPins()
      .then((r) => {
        Z(r.pins);

        if (r.activePin && !O.current) {
          const S = r.pins.find((A) => A.slug === r.activePin);

          if (S) {
            ee(S);
            O.current = S;
          }
        }
      })
      .catch(() => Z([]))
      .finally(() => me(false));
  }, []);

  y(() => {
    onDirtyChange(E);
  }, [E]);

  y(() => {
    onSavingChange(T);
  }, [T]);

  const f = q_1(
    (r, S) => {
      if (!$) {
        return false;
      }

      const A = Object.keys(r).some((J) => r[J] !== $[J]);

      const B = (S?.slug ?? null) !== (O.current?.slug ?? null);
      return A || B;
    },
    [$]
  );

  const x = (r, S) => {
    if (C[r]) {
      L((A) => {
        const B = { ...A };
        delete B[r];
        return B;
      });
    }

    R(null);

    g((A) => {
      const B = { ...A, [r]: S };
      h(f(B, H));
      return B;
    });
  };

  const V = q_1(
    (r) => {
      const S = H?.slug === r.slug ? null : r;
      ee(S);
      h(f(y, S));
    },
    [H, y, f]
  );

  const fe = async () => {
    if (!E || T) {
      return;
    }
    P(true);
    L({});
    R(null);
    const r = $?.username;
    const y_username = y.username;
    try {
      if ($ && Object.keys(y).some((ae) => y[ae] !== $[ae])) {
        await r.updateProfile({
          displayName: y.name,
          username: y.username || undefined,
          bio: y.bio || null,
        });
      }

      if ((H?.slug ?? null) !== (O.current?.slug ?? null)) {
        if (H) {
          await r.setActivePin(H.slug);
        } else {
          await r.removeActivePin();
        }
      }

      F({ ...y });
      O.current = H;
      h(false);
      const J = x.getState().profile;

      if (J) {
        x.getState().setProfile({
          ...J,
          displayName: y.name,
          username: y.username,
          bio: y.bio || null,
          pin: H,
        });
      }

      if (
        y_username &&
        y_username !== r &&
        (k === `/@${r}` || k === `/@${d?.id}`)
      ) {
        f(`/@${y_username}`);
      }
    } catch (A) {
      console.error("Failed to save profile:", A);

      if (aa(A)) {
        if (A.errors) {
          const B = {};
          for (const [J, ae] of Object.entries(A.errors)) {
            B[J] = ae[0] || "Ошибка валидации";
          }
          L(B);
        } else {
          R(A.message || "Не удалось сохранить изменения");
        }
      } else {
        R("Не удалось сохранить изменения");
      }
    } finally {
      P(false);
    }
  };

  const ce = () => {
    if ($) {
      g({ ...$ });
      ee(O.current);
      h(false);
    }
  };

  al(t, () => ({
    save: fe,
    discard: ce,
  }));

  return b
    ? openModal(onClose, {
        children: [
          openModal("h2", { className: n.contentTitle, children: "Аккаунт" }),
          openModal(a3, {}),
        ],
      })
    : openModal(onClose, {
        children: [
          openModal("h2", { className: n.contentTitle, children: "Аккаунт" }),
          openModal("div", {
            className: n.section,
            children: [
              d?.subscription?.isActive
                ? openModal("div", {
                    className: n.settingItem,
                    children: openModal("div", {
                      className: n.settingInfo,
                      children: openModal("div", {
                        className: n.settingText,
                        children: [
                          openModal("span", {
                            className: n.settingTitle,
                            children: "Подписка ИТД НУКСТА",
                          }),
                          openModal("span", {
                            className: n.settingDescription,
                            children: d.subscription.expiresAt
                              ? (() => {
                                  const r = new Date(d.subscription.expiresAt);

                                  const S = new Date();

                                  const A = Math.max(
                                    0,
                                    Math.ceil(
                                      (r.getTime() - S.getTime()) /
                                        (1000 /* 1e3 */ * 60 * 60 * 24)
                                    )
                                  );

                                  return `до ${r.toLocaleDateString("ru-RU", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  })} (${A} ${
                                    A === 1 ? "день" : A < 5 ? "дня" : "дней"
                                  })`;
                                })()
                              : "Активна",
                          }),
                        ],
                      }),
                    }),
                  })
                : null,
              openModal("div", {
                className: n.settingItem,
                children: [
                  openModal("div", {
                    className: n.settingInfo,
                    children: openModal("div", {
                      className: n.settingText,
                      children: [
                        openModal("span", {
                          className: n.settingTitle,
                          children: "Эмоджи-клан",
                        }),
                        openModal("span", {
                          className: n.settingDescription,
                          children: "Выбран при регистрации. Изменить нельзя",
                        }),
                      ],
                    }),
                  }),
                  openModal("div", {
                    className: n.avatarDisplay,
                    children: y.avatar,
                  }),
                ],
              }),
              openModal("div", {
                className: n.settingItem,
                children: [
                  openModal("div", {
                    className: n.settingInfo,
                    children: openModal("div", {
                      className: n.settingText,
                      children: [
                        openModal("span", {
                          className: n.settingTitle,
                          children: "Имя",
                        }),
                        openModal("span", {
                          className: n.settingDescription,
                          children: "Ваше отображаемое имя",
                        }),
                      ],
                    }),
                  }),
                  openModal("div", {
                    className: n.settingControl,
                    children: [
                      openModal(le, {
                        value: y.name,
                        onChange: (r) => x("name", r),
                      }),
                      C.displayName &&
                        openModal("span", {
                          className: n.fieldError,
                          children: C.displayName,
                        }),
                    ],
                  }),
                ],
              }),
              openModal("div", {
                className: n.settingItem,
                children: [
                  openModal("div", {
                    className: n.settingInfo,
                    children: openModal("div", {
                      className: n.settingText,
                      children: [
                        openModal("span", {
                          className: n.settingTitle,
                          children: "Username",
                        }),
                        openModal("span", {
                          className: n.settingDescription,
                          children:
                            "Ваш уникальный идентификатор (только латиница, цифры и _)",
                        }),
                      ],
                    }),
                  }),
                  openModal("div", {
                    className: n.settingControl,
                    children: [
                      openModal(le, {
                        value: y.username,
                        onChange: (r) => x("username", r),
                      }),
                      C.username &&
                        openModal("span", {
                          className: n.fieldError,
                          children: C.username,
                        }),
                    ],
                  }),
                ],
              }),
              openModal("div", {
                className: `${n.settingItem} ${n.column}`,
                children: [
                  openModal("div", {
                    className: n.settingInfo,
                    children: openModal("div", {
                      className: n.settingText,
                      children: [
                        openModal("span", {
                          className: n.settingTitle,
                          children: "О себе",
                        }),
                        openModal("span", {
                          className: n.settingDescription,
                          children: "Расскажите немного о себе",
                        }),
                      ],
                    }),
                  }),
                  openModal("textarea", {
                    className: n.bioTextarea,
                    value: y.bio,
                    onChange: (r) => x("bio", r.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  C.bio &&
                    openModal("span", {
                      className: n.fieldError,
                      children: C.bio,
                    }),
                ],
              }),
              !he &&
                W.length > 0 &&
                openModal("div", {
                  className: `${n.settingItem} ${n.column}`,
                  children: [
                    openModal("div", {
                      className: n.settingInfo,
                      children: openModal("div", {
                        className: n.settingText,
                        children: [
                          openModal("span", {
                            className: n.settingTitle,
                            children: "Пин",
                          }),
                          openModal("span", {
                            className: n.settingDescription,
                            children: "Отображается рядом с именем",
                          }),
                        ],
                      }),
                    }),
                    openModal("div", {
                      className: n.pinGrid,
                      children: W.map((r) =>
                        openModal(
                          "button",
                          {
                            className: `${n.pinItem} ${
                              H?.slug === r.slug ? n.pinActive : ""
                            }`,
                            onClick: () => V(r),
                            disabled: T,
                            title: r.description || r.name,
                            type: "button",
                            children: [
                              openModal("img", {
                                src: r.url,
                                alt: r.name,
                                className: n.pinImage,
                              }),
                              openModal("span", {
                                className: n.pinName,
                                children: r.name,
                              }),
                            ],
                          },
                          r.slug
                        )
                      ),
                    }),
                  ],
                }),
              p && openModal("div", { className: n.saveError, children: p }),
            ],
          }),
          o &&
            openModal("div", {
              className: n.section,
              children: openModal("button", {
                type: "button",
                className: n.logoutButton,
                onClick: () => {
                  v();
                  onClose();
                },
                children: [
                  openModal(am, { size: 20 }),
                  openModal("span", { children: "Выйти из аккаунта" }),
                ],
              }),
            }),
          openModal("div", {
            className: n.section,
            children: openModal("button", {
              type: "button",
              className: n.deleteAccountButton,
              onClick: () => openModal(openModal(xn, { onClose: closeModal })),
              children: "Удалить аккаунт",
            }),
          }),
        ],
      });
});

const ys = "t7dF";
const Cs = "X2df";
const ks = "sdIM";
const Ts = "JSvg";
const Is = "Szsz";
const Ps = "Qgpa";
const $s = "J8U6";

const Q = {
  selectWrapper: ys,
  select: Cs,
  open: ks,
  selectedValue: Ts,
  dropdown: Is,
  option: Ps,
  selected: $s,
};

function pe({ value, options, onChange, disabled }) {
  const [t, d] = d(false);
  const v = A(null);

  const a = options.find((o) => o.value === value);

  y(() => {
    const o = (I) => {
      if (v.current && !v.current.contains(I.target)) {
        d(false);
      }
    };

    if (t) {
      document.addEventListener("mousedown", o);
    }

    return () => {
      document.removeEventListener("mousedown", o);
    };
  }, [t]);
  const N = (o) => {
    onChange(o);
    d(false);
  };
  return a("div", {
    ref: v,
    className: Q.selectWrapper,
    children: [
      a("button", {
        type: "button",
        className: `${Q.select} ${t ? Q.open : ""}`,
        onClick: (o) => {
          o.stopPropagation();

          if (!disabled) {
            d(!t);
          }
        },
        disabled: disabled,
        children: [
          a("span", { className: Q.selectedValue, children: a?.label }),
          a(Qe, { size: 16 }),
        ],
      }),
      t &&
        a("div", {
          className: Q.dropdown,
          children: options.map((o) =>
            a(
              "button",
              {
                type: "button",
                className: `${Q.option} ${o.value === value ? Q.selected : ""}`,
                onClick: () => N(o.value),
                children: o.label,
              },
              o.value
            )
          ),
        }),
    ],
  });
}

const Ce = [
  { value: "everyone", label: "Все" },
  { value: "followers", label: "Подписчики" },
  { value: "mutual", label: "Взаимные подписчики" },
  { value: "nobody", label: "Никто" },
];

const xs = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

function Ss() {
  const { theme, setTheme } = Se();
  return a(m, {
    children: [
      a("h2", { className: n.contentTitle, children: "Оформление" }),
      a("div", {
        className: n.section,
        children: a("div", {
          className: n.settingItem,
          children: [
            a("div", {
              className: n.settingInfo,
              children: a("div", {
                className: n.settingText,
                children: [
                  a("span", { className: n.settingTitle, children: "Тема" }),
                  a("span", {
                    className: n.settingDescription,
                    children: "Выберите цветовую схему приложения",
                  }),
                ],
              }),
            }),
            a(pe, { value: theme, options: xs, onChange: (l) => setTheme(l) }),
          ],
        }),
      }),
    ],
  });
}
function Es({ onChangePassword }) {
  return a(m, {
    children: [
      a("h2", { className: n.contentTitle, children: "Безопасность" }),
      a("div", {
        className: n.section,
        children: a("div", {
          className: n.settingItem,
          children: [
            a("div", {
              className: n.settingInfo,
              children: a("div", {
                className: n.settingText,
                children: [
                  a("span", { className: n.settingTitle, children: "Пароль" }),
                  a("span", {
                    className: n.settingDescription,
                    children: "Изменить пароль от аккаунта",
                  }),
                ],
              }),
            }),
            a(B, {
              size: "sm",
              onClick: onChangePassword,
              children: "Сменить пароль",
            }),
          ],
        }),
      }),
    ],
  });
}

const As = aj(({ onDirtyChange, onSavingChange }, m) => {
  const { settings, fetchSettings, updateSettings } = a0();

  const [a, N] = fetchSettings({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [o, I] = fetchSettings(null);
  const [k, b] = fetchSettings(false);
  const [w, T] = fetchSettings(false);
  const [P, E] = fetchSettings(false);

  y(() => {
    if (!P && !settings) {
      fetchSettings();
    }
  }, [P]);

  y(() => {
    if (settings && !P) {
      const p = {
        webEnabled: settings.webEnabled,
        soundEnabled: settings.soundEnabled,
        follows: settings.preferences.follows,
        reactions: settings.preferences.reactions,
        replies: settings.preferences.replies,
        mentions: settings.preferences.mentions,
        wallPosts: settings.preferences.wallPosts,
      };
      N(p);
      I(p);
      b(false);
      E(true);
    }
  }, [settings, P]);

  y(() => {
    onDirtyChange(k);
  }, [k]);

  y(() => {
    onSavingChange(w);
  }, [w]);

  const h = (p, R) => {
    const $ = { ...a, [p]: R };
    N($);

    if (o) {
      const F = Object.keys($).some((y) => $[y] !== o[y]);
      b(F);
    }
  };

  const C = async () => {
    if (!(!k || w)) {
      T(true);
      try {
        await updateSettings({
          webEnabled: a.webEnabled,
          soundEnabled: a.soundEnabled,
          preferences: {
            follows: a.follows,
            reactions: a.reactions,
            replies: a.replies,
            mentions: a.mentions,
            wallPosts: a.wallPosts,
          },
        });

        I({ ...a });
        b(false);
        settings.success("Настройки уведомлений сохранены");
      } catch (p) {
        console.error("Failed to save notification settings:", p);
        settings.error("Не удалось сохранить настройки");
      } finally {
        T(false);
      }
    }
  };

  const L = () => {
    if (o) {
      N({ ...o });
      b(false);
    }
  };

  al(m, () => ({
    save: C,
    discard: L,
  }));

  return a(m, {
    children: [
      a("h2", { className: n.contentTitle, children: "Уведомления" }),
      a("div", {
        className: n.section,
        children: [
          a("div", { className: n.sectionTitle, children: "Основные" }),
          a("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => h("webEnabled", !a.webEnabled),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: a(an_1, { size: 20 }),
                  }),
                  a("div", {
                    className: n.settingText,
                    children: [
                      a("span", {
                        className: n.settingTitle,
                        children: "Уведомления",
                      }),
                      a("span", {
                        className: n.settingDescription,
                        children: "Включение или отключение всех уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              a(j, {
                checked: a.webEnabled,
                onChange: (p) => h("webEnabled", p),
              }),
            ],
          }),
          a("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => h("soundEnabled", !a.soundEnabled),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: a(qe, { size: 20 }),
                  }),
                  a("div", {
                    className: n.settingText,
                    children: [
                      a("span", {
                        className: n.settingTitle,
                        children: "Уведомления со звуком",
                      }),
                      a("span", {
                        className: n.settingDescription,
                        children: "Воспроизводить звуки уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              a(j, {
                checked: a.soundEnabled,
                onChange: (p) => h("soundEnabled", p),
              }),
            ],
          }),
        ],
      }),
      a("div", {
        className: n.section,
        children: [
          a("div", { className: n.sectionTitle, children: "Пользователи" }),
          a("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => h("follows", !a.follows),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: a(Je, { size: 20 }),
                  }),
                  a("div", {
                    className: n.settingText,
                    children: [
                      a("span", {
                        className: n.settingTitle,
                        children: "Подписки",
                      }),
                      a("span", {
                        className: n.settingDescription,
                        children: "Уведомления о подписках и запросах в друзья",
                      }),
                    ],
                  }),
                ],
              }),
              a(j, {
                checked: a.follows,
                onChange: (p) => h("follows", p),
              }),
            ],
          }),
          a("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => h("wallPosts", !a.wallPosts),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: a(we, { size: 20 }),
                  }),
                  a("div", {
                    className: n.settingText,
                    children: [
                      a("span", {
                        className: n.settingTitle,
                        children: "Посты на стене",
                      }),
                      a("span", {
                        className: n.settingDescription,
                        children: "Уведомления о новых постах на вашей стене",
                      }),
                    ],
                  }),
                ],
              }),
              a(j, {
                checked: a.wallPosts,
                onChange: (p) => h("wallPosts", p),
              }),
            ],
          }),
        ],
      }),
      a("div", {
        className: n.section,
        children: [
          a("div", { className: n.sectionTitle, children: "Посты" }),
          a("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => h("reactions", !a.reactions),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.red}`,
                    children: a(Xe, { size: 20 }),
                  }),
                  a("div", {
                    className: n.settingText,
                    children: [
                      a("span", {
                        className: n.settingTitle,
                        children: "Лайки и реакции",
                      }),
                      a("span", {
                        className: n.settingDescription,
                        children:
                          "Уведомления о реакциях на ваши посты и комментарии",
                      }),
                    ],
                  }),
                ],
              }),
              a(j, {
                checked: a.reactions,
                onChange: (p) => h("reactions", p),
              }),
            ],
          }),
          a("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => h("replies", !a.replies),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: a(we, { size: 20 }),
                  }),
                  a("div", {
                    className: n.settingText,
                    children: [
                      a("span", {
                        className: n.settingTitle,
                        children: "Комментарии и ответы",
                      }),
                      a("span", {
                        className: n.settingDescription,
                        children: "Уведомления о новых комментариях и ответах",
                      }),
                    ],
                  }),
                ],
              }),
              a(j, {
                checked: a.replies,
                onChange: (p) => h("replies", p),
              }),
            ],
          }),
          a("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => h("mentions", !a.mentions),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.purple}`,
                    children: a(I, { size: 20 }),
                  }),
                  a("div", {
                    className: n.settingText,
                    children: [
                      a("span", {
                        className: n.settingTitle,
                        children: "Упоминания",
                      }),
                      a("span", {
                        className: n.settingDescription,
                        children: "Уведомления когда вас упоминают в постах",
                      }),
                    ],
                  }),
                ],
              }),
              a(j, {
                checked: a.mentions,
                onChange: (p) => h("mentions", p),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const Ms = aj(({ onDirtyChange, onSavingChange }, m) => {
  const [t, d] = d({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [v, a] = d(null);
  const [N, o] = d(false);
  const [I, k] = d(false);
  const [b, w] = d(false);
  const [T, P] = d(false);
  const [E, h] = d([]);
  const [C, L] = d(null);
  const [p, R] = d(true);
  const [$, F] = d(false);
  const [y, g] = d(false);

  y(() => {
    W();

    if (!y) {
      Z();
    }
  }, []);

  y(() => {
    onDirtyChange(N);
  }, [N]);

  y(() => {
    onSavingChange(I);
  }, [I]);

  const W = async () => {
    if (!T) {
      w(true);
    }

    try {
      const f = await r.getPrivacySettings();

      const x = {
        isPrivate: f.isPrivate ?? false,
        whoCanPostOnWall: f.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: f.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: f.showLastSeen ?? true,
      };

      d(x);
      a(x);
      o(false);
      P(true);
    } catch (f) {
      console.error("Failed to load privacy settings:", f);
    } finally {
      w(false);
    }
  };

  const Z = async (f) => {
    if (!$) {
      F(true);
      try {
        const x = await C.getBlockedUsers({ cursor: f, limit: 20 });

        h(f ? (V) => [...V, ...x.users] : x.users);

        L(x.nextCursor);
        R(x.hasMore);
        g(true);
      } catch (x) {
        console.error("Failed to load blocked users:", x);
      } finally {
        F(false);
      }
    }
  };

  const H = async (f) => {
    try {
      await C.unblockUser(f);

      h((x) => x.filter((V) => V.id !== f));

      t.success("Пользователь разблокирован");
    } catch (x) {
      console.error("Failed to unblock user:", x);
      t.error("Не удалось разблокировать пользователя");
    }
  };

  const ee = () => {
    if (p && C) {
      Z(C);
    }
  };

  const O = (f, x) => {
    const V = { ...t, [f]: x };
    d(V);

    if (v) {
      const fe = Object.keys(V).some((ce) => V[ce] !== v[ce]);
      o(fe);
    }
  };

  const he = async () => {
    if (!(!N || I)) {
      k(true);
      try {
        await r.updatePrivacySettings({
          whoCanPostOnWall: t.whoCanPostOnWall,
          whoCanSeeMyPostReactions: t.whoCanSeeMyPostReactions,
          showLastSeen: t.showLastSeen,
        });

        a({ ...t });
        o(false);
        t.success("Настройки приватности сохранены");
      } catch (f) {
        console.error("Failed to save privacy settings:", f);
        t.error("Не удалось сохранить настройки");
      } finally {
        k(false);
      }
    }
  };

  const me = () => {
    if (v) {
      d({ ...v });
      o(false);
    }
  };

  al(m, () => ({
    save: he,
    discard: me,
  }));

  return a(m, {
    children: [
      a("h2", { className: n.contentTitle, children: "Приватность" }),
      T &&
        a("div", {
          className: n.section,
          children: [
            a("div", {
              className: n.settingItem,
              children: [
                a("div", {
                  className: n.settingInfo,
                  children: a("div", {
                    className: n.settingText,
                    children: [
                      a("span", {
                        className: n.settingTitle,
                        children: "Стена",
                      }),
                      a("span", {
                        className: n.settingDescription,
                        children: "Кто может писать на вашей стене",
                      }),
                    ],
                  }),
                }),
                a(pe, {
                  value: t.whoCanPostOnWall,
                  options: Ce,
                  onChange: (f) => O("whoCanPostOnWall", f),
                }),
              ],
            }),
            a("div", {
              className: n.settingItem,
              children: [
                a("div", {
                  className: n.settingInfo,
                  children: a("div", {
                    className: n.settingText,
                    children: [
                      a("span", {
                        className: n.settingTitle,
                        children: "Лайки",
                      }),
                      a("span", {
                        className: n.settingDescription,
                        children: "Кто может видеть ваши лайкнутые посты",
                      }),
                    ],
                  }),
                }),
                a(pe, {
                  value: t.whoCanSeeMyPostReactions,
                  options: Ce,
                  onChange: (f) => O("whoCanSeeMyPostReactions", f),
                }),
              ],
            }),
            a("div", {
              className: `${n.settingItem} ${n.clickable}`,
              onClick: () => O("showLastSeen", !t.showLastSeen),
              children: [
                a("div", {
                  className: n.settingInfo,
                  children: a("div", {
                    className: n.settingText,
                    children: [
                      a("span", {
                        className: n.settingTitle,
                        children: "Онлайн-статус",
                      }),
                      a("span", {
                        className: n.settingDescription,
                        children: "Показывать время последнего визита",
                      }),
                    ],
                  }),
                }),
                a(j, {
                  checked: t.showLastSeen,
                  onChange: (f) => O("showLastSeen", f),
                }),
              ],
            }),
          ],
        }),
      a("div", {
        className: n.section,
        children: [
          a("div", {
            className: n.sectionTitle,
            children: "Чёрный список",
          }),
          $ && !y
            ? a(a3, {})
            : y
            ? a(m, {
                children:
                  E.length === 0
                    ? a("div", {
                        className: n.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : a("div", {
                        className: n.blockedUsersList,
                        children: [
                          E.map((f) =>
                            a(
                              "div",
                              {
                                className: n.blockedUserItem,
                                children: [
                                  a(g, {
                                    src: f.avatar,
                                    alt: f.displayName,
                                    size: "sm",
                                  }),
                                  a("div", {
                                    className: n.blockedUserInfo,
                                    children: [
                                      a("span", {
                                        className: n.blockedUserName,
                                        children: f.displayName,
                                      }),
                                      f.username &&
                                        a("span", {
                                          className: n.blockedUserUsername,
                                          children: ["@", f.username],
                                        }),
                                    ],
                                  }),
                                  a(B, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => H(f.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              f.id
                            )
                          ),
                          p &&
                            a(B, {
                              variant: "secondary",
                              onClick: ee,
                              disabled: $,
                              children: $ ? "Загрузка..." : "Загрузить ещё",
                            }),
                        ],
                      }),
              })
            : null,
        ],
      }),
    ],
  });
});

const Ls = [
  { id: "account", icon: ao, label: "Аккаунт" },
  { id: "appearance", icon: v, label: "Оформление" },
  { id: "security", icon: nn, label: "Безопасность" },
  { id: "privacy", icon: en, label: "Приватность" },
  { id: "notifications", icon: an_1, label: "Уведомления" },
];

function St({ onClose }) {
  const [c, l] = d("account");
  const [m, t] = d(null);
  const [d, v] = d(false);
  const [a, N] = d({});
  const [o, I] = d({});
  const k = A(null);
  const b = A(null);
  const w = A(null);
  const T = Object.values(a).some(Boolean);
  const P = Object.values(o).some(Boolean);

  const E = q_1(
    (g) => (W) => {
      N((Z) => ({
        ...Z,
        [g]: W,
      }));
    },
    []
  );

  const h = q_1(
    (g) => (W) => {
      I((Z) => ({
        ...Z,
        [g]: W,
      }));
    },
    []
  );

  const C = async () => {
    const g = [];

    if (a.account) {
      g.push(k.current?.save() ?? Promise.resolve());
    }

    if (a.notifications) {
      g.push(b.current?.save() ?? Promise.resolve());
    }

    if (a.privacy) {
      g.push(w.current?.save() ?? Promise.resolve());
    }

    await Promise.all(g);
  };

  const L = () => {
    k.current?.discard();
    b.current?.discard();
    w.current?.discard();
  };

  const p = (g) => {
    if (g !== c) {
      if (T) {
        t({ type: "tab", tab: g });
      } else {
        l(g);
      }
    }
  };

  const R = () => {
    if (T) {
      t({ type: "close" });
    } else {
      onClose();
    }
  };

  const $ = () => {
    L();
    const g = m;
    t(null);

    if (g?.type === "tab") {
      l(g.tab);
    } else if (g?.type === "close") {
      onClose();
    }
  };

  const F = async () => {
    await C();
    const g = m;
    t(null);

    if (g?.type === "tab") {
      l(g.tab);
    } else if (g?.type === "close") {
      onClose();
    }
  };

  const y = () => {
    switch (c) {
      case "account": {
        return a(ws, {
          ref: k,
          onDirtyChange: E("account"),
          onSavingChange: h("account"),
          onClose: onClose,
        });
      }
      case "appearance": {
        return a(Ss, {});
      }
      case "security": {
        return a(Es, { onChangePassword: () => v(true) });
      }
      case "notifications": {
        return a(As, {
          ref: b,
          onDirtyChange: E("notifications"),
          onSavingChange: h("notifications"),
        });
      }
      case "privacy": {
        return a(Ms, {
          ref: w,
          onDirtyChange: E("privacy"),
          onSavingChange: h("privacy"),
        });
      }
    }
  };

  return d
    ? a(kn, { onClose: onClose, onBack: () => v(false) })
    : a(B_1, {
        onClose: R,
        frameless: true,
        size: "wide",
        className: n.modalContainer,
        children: a("div", {
          className: n.settingsModal,
          children: [
            a("div", {
              className: n.sidebar,
              children: [
                a("div", { className: n.sidebarTitle, children: "Настройки" }),
                a("nav", {
                  children: Ls.map((g) =>
                    a(
                      "button",
                      {
                        type: "button",
                        className: `${n.navItem} ${c === g.id ? n.active : ""}`,
                        onClick: () => p(g.id),
                        children: [
                          a(g.icon, {}),
                          a("span", { children: g.label }),
                        ],
                      },
                      g.id
                    )
                  ),
                }),
              ],
            }),
            a("div", {
              className: n.contentWrapper,
              children: [
                a("div", { className: n.content, children: y() }),
                T &&
                  a("div", {
                    className: n.actionBar,
                    children: [
                      a(B, {
                        variant: "secondary",
                        onClick: R,
                        children: "Отмена",
                      }),
                      a(B, {
                        variant: "primary",
                        onClick: C,
                        disabled: P,
                        loading: P,
                        children: "Сохранить",
                      }),
                    ],
                  }),
              ],
            }),
            m &&
              a("div", {
                className: n.confirmOverlay,
                children: a("div", {
                  className: n.confirmDialog,
                  children: [
                    a("div", {
                      className: n.confirmText,
                      children: [
                        "У вас есть несохранённые изменения.",
                        `
`,
                        "Сохранить?",
                      ],
                    }),
                    a("div", {
                      className: n.confirmActions,
                      children: [
                        a(B, {
                          variant: "secondary",
                          onClick: $,
                          children: "Не сохранять",
                        }),
                        a(B, {
                          variant: "accent",
                          onClick: F,
                          children: "Сохранить",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        }),
      });
}

const Rs = [
  [0, 0, 96, 28],
  [96, 0, 107, 52],
  [203, 0, 107, 107],
  [310, 0, 109, 105],
  [419, 0, 170, 114],
  [589, 0, 168, 102],
  [757, 0, 177, 93],
  [934, 0, 165, 105],
  [1099, 0, 170, 111],
  [1269, 0, 176, 123],
  [1445, 0, 141, 148],
  [1586, 0, 115, 157],
  [1701, 0, 144, 112],
  [1845, 0, 135, 114],
  [1980, 0, 136, 129],
  [2116, 0, 131, 114],
];

const Ds = 2247;
const Us = 157;

const Ne = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  [0, 673, 329],
  [1, 666, 304],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 303],
  [2, 648, 252],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 649, 253],
  [3, 636, 259],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 637, 255],
  [3, 635, 259],
  [4, 627, 287],
  [5, 615, 316],
  [6, 612, 320],
  [6, 612, 320],
  [7, 615, 320],
  [7, 615, 320],
  [6, 612, 320],
  [6, 612, 320],
  [7, 615, 322],
  [7, 615, 327],
  [8, 617, 330],
  [9, 605, 334],
  [10, 628, 357],
  [11, 632, 393],
  [12, 617, 530],
  [13, 626, 575],
  [14, 623, 638],
  [15, 628, 717],
  [14, 623, 811],
  [15, 629, 922],
  [14, 623, 1052],
  [15, 629, 1202],
  [14, 623, 1373],
  [15, 629, 1567],
  [14, 624, 1785],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

const Ne_length = Ne.length;
const _ = 370 / 1080;
const Os = 605;
const Bs = 40;
const Hs = { s: 14, x: 623 };
const _s = { s: 15, x: 629 };
function Fs(s, c) {
  const l = (s + c + 200) / _;
  const m = Ne.slice();
  let t = 1785;
  let d = 218;
  let v = true;
  for (let a = 98; a < Ne_length && ((d += 18), (t += d), !(t > l)); a++) {
    const N = v ? _s : Hs;
    m[a] = [N.s, N.x, t];
    v = !v;
  }
  return m;
}
function Zs() {
  const s = A(null);
  const c = A(null);
  const l = A({ f: 0, ts: 0, tl: Ne.slice(), xOff: 0, yOff: 0 });

  y(() => {
    const c_current = c.current;
    const s_current = s.current;
    if (!c_current || !s_current) {
      return;
    }
    function d() {
      const { innerHeight, innerWidth } = window;

      const s_current_parentElement = s_current.parentElement;
      let T;
      let P;
      if (s_current_parentElement) {
        const C = s_current_parentElement.getBoundingClientRect();
        T = C.top;
        P = C.left + (C.width - 370) / 2;
      } else {
        T = (innerHeight - 900) / 2;
        P = (innerWidth - 370) / 2;
      }
      const E = innerWidth <= 1173;
      l.current.yOff = 357 * _ - T + (E ? 60 : 0);
      const h = 260;
      l.current.xOff = Os * _ - P - h;
      l.current.tl = Fs(innerHeight, l.current.yOff);
    }
    const v = setTimeout(d, 260);
    let a;
    const N = () => {
      clearTimeout(a);
      a = setTimeout(d, 150);
    };
    window.addEventListener("resize", N);
    let o;
    function I(k) {
      const l_current = l.current;
      if (k - l_current.ts >= Bs) {
        const w = l_current.tl[l_current.f];
        if (!w) {
          c_current.style.visibility = "hidden";
        } else {
          const [T, P, E] = w;
          const [h, , C, L] = Rs[T];
          const p = (C * _ + 0.5) | 0;
          const R = (L * _ + 0.5) | 0;
          c_current.style.cssText = `visibility:visible;width:${p}px;height:${R}px;background-image:url(/assets/nuksta/nuksta-chechik-sprite.png);background-repeat:no-repeat;image-rendering:pixelated;will-change:transform;background-position:${-(
            (h * _ + 0.5) |
            0
          )}px 0px;background-size:${(Ds * _ + 0.5) | 0}px ${
            (Us * _ + 0.5) | 0
          }px;transform:translate(${(P * _ - l_current.xOff + 0.5) | 0}px,${
            (E * _ - l_current.yOff + 0.5) | 0
          }px)`;
        }
        l_current.f = (l_current.f + 1) % Ne_length;
        l_current.ts = k;
      }
      o = requestAnimationFrame(I);
    }
    o = requestAnimationFrame(I);

    return () => {
      cancelAnimationFrame(o);
      clearTimeout(v);
      clearTimeout(a);
      window.removeEventListener("resize", N);
    };
  }, []);

  return a(m, {
    children: [
      a("div", {
        ref: s,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          pointerEvents: "none",
        },
      }),
      $(
        a("div", {
          style: {
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 99999,
            overflow: "hidden",
          },
          children: a("div", {
            ref: c,
            style: {
              position: "absolute",
              backgroundImage: "url(/assets/nuksta/nuksta-chechik-sprite.png)",
              backgroundRepeat: "no-repeat",
              imageRendering: "pixelated",
              willChange: "transform",
            },
          }),
        }),
        document.body
      ),
    ],
  });
}
const Vs = "zoXg";
const Ws = "qon6";
const zs = "sr8a";
const js = "JIy4";
const Gs = "NLQK";
const Xs = "OpJW";
const qs = "fh7N";
const Js = "hww2";
const Ks = "fGVi";
const Ys = "y69E";
const Qs = "JGAg";
const et = "MakZ";
const nt = "tUrF";
const st = "LRrz";
const tt = "kEyn";
const at = "i6yx";
const it = "m0p2";
const lt = "rFIR";
const ct = "JKA0";
const ot = "kjDp";
const rt = "eIpL";
const dt = "c9PK";
const ut = "EGb3";
const ht = "OklH";
const mt = "ZU8A";
const ft = "v6NO";
const pt = "Hf3c";
const gt = "iei5";

const i = {
  modal: Vs,
  sub: Ws,
  top: zs,
  bottom: js,
  title: Gs,
  section: Xs,
  profileSection: qs,
  label: Js,
  labelRow: Ks,
  dim: Ys,
  row: Qs,
  icon: et,
  iconGradient: nt,
  name: st,
  nameGradient: tt,
  namePinBadge: at,
  promoVideo: it,
  features: lt,
  featureContent: ct,
  featureTitle: ot,
  gradientText: rt,
  soon: dt,
  infoBtn: ut,
  footer: ht,
  disclaimer: mt,
  disclaimerLink: ft,
  subscribeBtn: pt,
  activeLabel: gt,
};

function ke({ text }) {
  return a(ap, {
    text: text,
    multiline: true,
    children: a("span", {
      className: i.infoBtn,
      children: a(I_1, { size: 14 }),
    }),
  });
}
function Et({ isOpen, onClose }) {
  const l = k();
  const [m, t] = d(false);
  if (!isOpen) {
    return null;
  }
  const d = l?.subscription?.isActive ?? false;
  const v = "199";

  const a = async () => {
    if (m) {
      return;
    }
    t(true);
    const N = window.open("about:blank", "_blank");
    try {
      const o = await an.pay();
      if (o.error) {
        N?.close();
        t.error(o.error);
        return;
      }

      if (o.confirmationUrl && N) {
        N.location.href = o.confirmationUrl;
      } else if (o.confirmationUrl) {
        window.location.href = o.confirmationUrl;
      }
    } catch (o) {
      N?.close();
      t.error(o?.message || "Ошибка при создании платежа");
    } finally {
      t(false);
    }
  };

  return $(
    a(B_1, {
      onClose: onClose,
      showHeader: false,
      frameless: true,
      className: i.modal,
      children: [
        a(Zs, {}),
        a("div", {
          className: i.sub,
          children: [
            a("div", {
              className: i.top,
              children: [
                a("div", { className: i.title, children: "ИТД НУКСТА" }),
                a("div", {
                  className: `${i.section} ${i.profileSection}`,
                  children: [
                    a("div", {
                      className: i.label,
                      children: "Ваш профиль с ИТД НУКСТА",
                    }),
                    a("div", {
                      className: i.row,
                      children: [
                        a(g, { src: l?.avatar || null, size: "sm" }),
                        a("div", {
                          children: [
                            a("div", {
                              className: i.name,
                              children: [
                                a("span", {
                                  className: i.nameGradient,
                                  children: l?.displayName,
                                }),
                                a("img", {
                                  src: "/assets/pins/subscription_nuksta.gif",
                                  alt: "НУКСТА",
                                  width: 24,
                                  height: 24,
                                  className: i.namePinBadge,
                                }),
                              ],
                            }),
                            a("div", {
                              className: i.dim,
                              children: "только что",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            a("video", {
              src: `/assets/nuksta/nuksta-${
                document.documentElement.getAttribute("data-theme") === "light"
                  ? "light"
                  : "dark"
              }.mp4`,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              width: 370,
              height: 268,
              className: i.promoVideo,
            }),
            a("div", {
              className: i.bottom,
              children: [
                a("div", {
                  className: i.section,
                  children: [
                    a("div", {
                      className: i.labelRow,
                      children: [
                        a("span", {
                          className: i.label,
                          children: "Прикольные украшалки",
                        }),
                        a(ke, {
                          text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                        }),
                      ],
                    }),
                    a("div", {
                      className: i.features,
                      children: [
                        a("div", {
                          className: i.row,
                          children: [
                            a("span", {
                              className: i.icon,
                              children: a("div", { className: i.iconGradient }),
                            }),
                            a("div", {
                              children: [
                                a("div", {
                                  className: `${i.featureTitle} ${i.gradientText}`,
                                  children: "Уникальный цвет ника",
                                }),
                                a("div", {
                                  className: i.dim,
                                  children:
                                    "Клевый цвет ника, который показывает, что вы поддерживаете итд!",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a("div", {
                          className: i.row,
                          children: [
                            a("span", {
                              className: i.icon,
                              children: a("img", {
                                src: "/assets/pins/subscription_nuksta.gif",
                                alt: "Пин",
                                width: 20,
                                height: 20,
                              }),
                            }),
                            a("div", {
                              children: [
                                a("div", {
                                  className: i.featureTitle,
                                  children: "Пин поддерживателя",
                                }),
                                a("div", {
                                  className: i.dim,
                                  children:
                                    "Получите уникальный пин за поддержку итд",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                a("div", {
                  className: i.section,
                  children: [
                    a("div", {
                      className: i.labelRow,
                      children: [
                        a("span", {
                          className: i.label,
                          children: "Сможете с нами тестить новые штуки",
                        }),
                        a(ke, {
                          text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                        }),
                      ],
                    }),
                    a("div", {
                      className: i.features,
                      children: [
                        a("div", {
                          className: i.row,
                          children: [
                            a("span", {
                              className: i.icon,
                              children: a(Ye, { size: 20 }),
                            }),
                            a("div", {
                              className: i.featureContent,
                              children: [
                                a("div", {
                                  className: i.featureTitle,
                                  children: "Загрузка видео",
                                }),
                                a("div", {
                                  className: i.dim,
                                  children:
                                    "Получите возможность загружать видео одним из первых",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a("div", {
                          className: i.row,
                          children: [
                            a("span", {
                              className: i.icon,
                              children: a(Ke, { size: 20 }),
                            }),
                            a("div", {
                              className: i.featureContent,
                              children: [
                                a("div", {
                                  className: i.featureTitle,
                                  children: [
                                    "Музыка ",
                                    a("span", {
                                      className: i.soon,
                                      children: "soon",
                                    }),
                                  ],
                                }),
                                a("div", {
                                  className: i.dim,
                                  children:
                                    "Получите доступ к музыке без рекламы в итд раньше всех",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                a("div", {
                  className: i.footer,
                  children: [
                    a("div", {
                      className: i.disclaimer,
                      children: [
                        "Оплачивая, вы соглашаетесь с ",
                        a("a", {
                          href: "/subscription-terms",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: i.disclaimerLink,
                          children: "условиями платного доступа",
                        }),
                        ", ",
                        a("a", {
                          href: "/privacy",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: i.disclaimerLink,
                          children: "политикой конфиденциальности",
                        }),
                        " и ",
                        a("a", {
                          href: "/terms",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: i.disclaimerLink,
                          children: "условиями использования",
                        }),
                        ".",
                      ],
                    }),
                    d
                      ? a("div", {
                          className: i.activeLabel,
                          children: "Подписка активна",
                        })
                      : a("button", {
                          type: "button",
                          className: i.subscribeBtn,
                          onClick: a,
                          disabled: m,
                          children: `Оплатить ${v}₽ на месяц`,
                        }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    document.body
  );
}
const vt = "oqVn";
const Nt = "wVd5";
const bt = "h29m";
const wt = "AxKu";
const re = { content: vt, title: Nt, subtitle: bt, actions: wt };

export function CancelSubscriptionModal({ expiresAt, onConfirm, onClose }) {
  const [m, t] = d(false);

  const d = new Date(expiresAt).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const v = async () => {
    if (!m) {
      t(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        t(false);
      }
    }
  };

  return a(B_1, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: re.content,
      children: [
        a("h2", { className: re.title, children: "Отключить автопродление?" }),
        a("p", {
          className: re.subtitle,
          children: [
            "Подписка будет действовать до ",
            d,
            ". После этой даты она просто не продлится автоматически. Вы сможете включить автопродление обратно в любой момент.",
          ],
        }),
        a("div", {
          className: re.actions,
          children: [
            a(B, {
              variant: "secondary",
              onClick: (a) => {
                a.stopPropagation();
                onClose();
              },
              children: "Оставить",
            }),
            a(B, {
              variant: "danger",
              onClick: (a) => {
                a.stopPropagation();
                v();
              },
              disabled: m,
              children: "Отключить автопродление",
            }),
          ],
        }),
      ],
    }),
  });
}

const yt = "EiDZ";
const Ct = "eenP";
const kt = "l3lS";
const Tt = "NdxW";
const It = "l5IR";
const ie = {
  content: yt,
  title: Ct,
  subtitle: kt,
  disclaimer: Tt,
  actions: It,
};
function Mt({ onConfirm, onClose }) {
  const [l, m] = d(false);

  const t = async () => {
    if (!l) {
      m(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        m(false);
      }
    }
  };

  return a(B_1, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: ie.content,
      children: [
        a("h2", { className: ie.title, children: "Включить автопродление?" }),
        a("p", {
          className: ie.subtitle,
          children:
            "Подписка будет автоматически продлеваться каждый месяц. Средства будут списываться с привязанной карты.",
        }),
        a("p", {
          className: ie.disclaimer,
          children: [
            "Нажимая «Включить», вы соглашаетесь с",
            " ",
            a("a", {
              href: "/subscription-terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями подписки",
            }),
            ",",
            " ",
            a("a", {
              href: "/privacy",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "политикой конфиденциальности",
            }),
            " и",
            " ",
            a("a", {
              href: "/terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями использования",
            }),
            ".",
          ],
        }),
        a("div", {
          className: ie.actions,
          children: [
            a(B, {
              variant: "secondary",
              onClick: (d) => {
                d.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            a(B, {
              variant: "primary",
              onClick: (d) => {
                d.stopPropagation();
                t();
              },
              disabled: l,
              children: "Включить",
            }),
          ],
        }),
      ],
    }),
  });
}
export {
  CancelSubscriptionModal as CancelSubscriptionModal,
  kn as ChangePasswordModal,
  xn as DeleteAccountModal,
  Mt as EnableRenewalModal,
  St as SettingsModal,
  Et as SubscriptionModal,
  an as subscriptionApi,
  Q_1 as useSettingsStore,
};
