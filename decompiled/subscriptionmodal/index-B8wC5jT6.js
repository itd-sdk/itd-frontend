import {
  ah,
  ai,
  a,
  a5,
  a6,
  d,
  B as B_1,
  M,
  ae,
  x,
  ab,
  aj,
  o,
  E,
  ak,
  A,
  y,
  r as r_1,
  q as q_1,
  al,
  a4,
  m,
  am,
  f,
  t,
  an as an_1,
  I,
  a1,
  ao,
  C,
  g,
  ap,
  v,
  $,
  k,
  aq,
  R,
} from "./index-BAlLDjSl.js";

import { I as I_1 } from "./IconNotificationMention-CtJoPImP.js";
import { I as I_2 } from "./IconInfo-DiOnAeQR.js";
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
    const i = new s.Error().stack;

    if (i) {
      s._sentryDebugIds = s._sentryDebugIds || {};
      s._sentryDebugIds[i] = "9e12d09f-a3ef-4de9-aa43-1925fbd57380";
      s._sentryDebugIdIdentifier =
        "sentry-dbid-9e12d09f-a3ef-4de9-aa43-1925fbd57380";
    }
  } catch {}
})();

const Je = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const Xe = () => {
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

const ue = (s) => {
  const i = s === "system" ? Je() : s;
  document.documentElement.setAttribute("data-theme", i);
};

const Me = ah()(
  ai(
    (s) => ({
      theme: Xe(),

      setTheme: (i) => {
        ue(i);
        s({ theme: i });
      },

      toggleTheme: () =>
        s((i) => {
          const a = i.theme === "light" ? "dark" : "light";
          ue(a);
          return { theme: a };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (s) => {
        if (s?.theme) {
          ue(s.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (Me.getState().theme === "system") {
        ue("system");
      }
    });
}

const Ye = ({ size = 18 }) =>
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

const Ce = ({ size = 18 }) =>
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

const Qe = ({ size = 18 }) =>
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

const en = ({ size = 18 }) =>
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

const nn = ({ size = 24 }) =>
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

const sn = ({ size = 20 }) =>
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

const tn = ({ size = 18 }) =>
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

const an = ({ size = 24 }) =>
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

const ln = ({ size = 24 }) =>
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

const cn = "Fq9F";
const on = "Eeou";
const ke = { toggle: cn, active: on };
function J({ checked, onChange, disabled }) {
  const h = (t) => {
    t.stopPropagation();

    if (!disabled) {
      onChange(!checked);
    }
  };
  return disabled("button", {
    type: "button",
    className: `${ke.toggle} ${checked ? ke.active : ""}`,
    onClick: h,
    disabled: disabled,
    role: "switch",
    "aria-checked": checked,
  });
}

const rn = {
  async getStatus() {
    return a5.get(a6.subscription.status);
  },
  async pay() {
    return a5.post(a6.subscription.pay);
  },
  async setAutoRenewal(s) {
    return a5.post(a6.subscription.autoRenewal, { enabled: s });
  },
  async bindCard() {
    return a5.post(a6.subscription.bindCard);
  },
  async getMethods() {
    return (await a5.get(a6.subscription.methods)).data;
  },
  async setDefaultMethod(s) {
    return a5.put(a6.subscription.methodDefault(s));
  },
  async deleteMethod(s) {
    return a5.delete(a6.subscription.methodDelete(s));
  },
};

const ge = {
  async list() {
    return (await a5.get(a6.sessions.list))?.sessions ?? [];
  },
  async revoke(s, i) {
    await a5.delete(a6.sessions.revoke(s));
    return { loggedOut: i };
  },
  async revokeOthers() {
    return (await a5.delete(a6.sessions.revokeOthers))?.revokedCount ?? 0;
  },
};

const dn = "kiwi";
const un = "mT8W";
const hn = "dKuf";
const mn = "mdi6";
const fn = "POZ3";
const gn = "CZgb";
const pn = "Grie";
const vn = "T9Zg";
const Nn = "hDTc";
const bn = "Rjo1";

const q = {
  inputWrapper: dn,
  label: un,
  hint: hn,
  input: mn,
  error: fn,
  small: gn,
  medium: pn,
  large: vn,
  default: "Y3vv",
  outline: Nn,
  errorText: bn,
};

function ce({
  value,
  onChange,
  label,
  hint,
  error,
  size = "medium",
  variant = "default",
  className,
  ...v
}) {
  const d = (T) => {
    onChange?.(T.currentTarget.value);
  };
  return label("div", {
    className: q.inputWrapper,
    children: [
      label &&
        label("label", {
          className: q.label,
          children: [
            label,
            hint && label("span", { className: q.hint, children: hint }),
          ],
        }),
      label("input", {
        className: `${q.input} ${q[o]} ${q[f]} ${error ? q.error : ""} ${
          className || ""
        }`,
        value: value,
        onInput: d,
        ...v,
      }),
      error && label("span", { className: q.errorText, children: error }),
    ],
  });
}
const wn = "yR9I";
const yn = "JJ1I";
const Cn = "SSss";
const kn = "z3dz";
const Tn = "Mz7h";
const In = "KvpC";
const Pn = "pK5n";

const B = {
  form: wn,
  field: yn,
  label: Cn,
  hint: kn,
  fieldError: Tn,
  error: In,
  actions: Pn,
};

function $n({ onClose, onBack }) {
  const [a, h] = d("");
  const [t, o] = d("");
  const [f, c] = d("");
  const [v, d] = d(false);
  const [T, C] = d(null);
  const [N, b] = d({});

  const I = async ($) => {
    $.preventDefault();
    C(null);
    b({});

    if (t !== f) {
      b({ confirmPassword: "Пароли не совпадают" });
      return;
    }

    if (t.length < 10) {
      b({ newPassword: "Минимум 10 символов" });
      return;
    }
    if (t.length > 128) {
      b({ newPassword: "Максимум 128 символов" });
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(t)) {
      b({ newPassword: "Только латиница, цифры и знаки пунктуации" });
      return;
    }
    d(true);
    try {
      await ae.changePassword({ currentPassword: a, newPassword: t });
      await x.getState().logout();
      onClose();
    } catch (l) {
      if (ab(l)) {
        if (l.code === "CURRENT_PASSWORD_INCORRECT") {
          b({ currentPassword: "Неверный текущий пароль" });
        } else if (l.errors) {
          const y = {};
          for (const [A, g] of Object.entries(l.errors)) {
            y[A] = g[0] || "Ошибка валидации";
          }
          b(y);
        } else {
          C(l.message || "Не удалось сменить пароль");
        }
      } else {
        C("Не удалось сменить пароль");
      }
    } finally {
      d(false);
    }
  };

  const P = a.length > 0 && t.length >= 10 && f.length > 0;
  return a(M, {
    onClose: onBack,
    title: "Смена пароля",
    children: a("form", {
      onSubmit: I,
      className: B.form,
      children: [
        a("div", {
          className: B.field,
          children: [
            a("label", { className: B.label, children: "Текущий пароль" }),
            a(ce, {
              type: "password",
              value: a,
              onChange: h,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            N.currentPassword &&
              a("span", {
                className: B.fieldError,
                children: N.currentPassword,
              }),
          ],
        }),
        a("div", {
          className: B.field,
          children: [
            a("label", { className: B.label, children: "Новый пароль" }),
            a(ce, {
              type: "password",
              value: t,
              onChange: o,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            a("span", {
              className: B.hint,
              children: "Минимум 10 символов, латиница, цифры и пунктуация",
            }),
            N.newPassword &&
              a("span", { className: B.fieldError, children: N.newPassword }),
          ],
        }),
        a("div", {
          className: B.field,
          children: [
            a("label", {
              className: B.label,
              children: "Подтверждение пароля",
            }),
            a(ce, {
              type: "password",
              value: f,
              onChange: c,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            N.confirmPassword &&
              a("span", {
                className: B.fieldError,
                children: N.confirmPassword,
              }),
          ],
        }),
        T && a("div", { className: B.error, children: T }),
        a("div", {
          className: B.actions,
          children: [
            a(B_1, {
              type: "button",
              variant: "secondary",
              onClick: onBack,
              disabled: v,
              children: "Отмена",
            }),
            a(B_1, {
              type: "submit",
              disabled: !P || v,
              children: v ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
      ],
    }),
  });
}
const xn = "qao7";
const Sn = "osK2";
const En = "ctq2";
const Mn = "DnlT";
const re = { content: xn, title: Sn, subtitle: En, actions: Mn };
function Ln({ onClose }) {
  const i = async () => {
    await x.getState().deleteAccount();
    onClose();
  };
  return a(M, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: re.content,
      children: [
        a("h2", { className: re.title, children: "Удалить аккаунт?" }),
        a("p", {
          className: re.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        a("div", {
          className: re.actions,
          children: [
            a(B_1, {
              variant: "secondary",
              onClick: (a) => {
                a.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            a(B_1, {
              variant: "danger",
              onClick: (a) => {
                a.stopPropagation();
                i();
              },
              children: "Удалить аккаунт",
            }),
          ],
        }),
      ],
    }),
  });
}
const An = "CCLL";
const Dn = "y7VR";
const Rn = "R9Kc";
const Bn = "gYge";
const On = "kFOb";
const Un = "ig1a";
const Wn = "Miff";
const Zn = "v8z0";
const zn = "v8dJ";
const Hn = "jy0P";
const _n = "pt9M";
const Fn = "nZsj";
const Vn = "S3Aj";
const jn = "vAwQ";
const Gn = "dQRI";
const Kn = "bVfI";
const qn = "pPbh";
const Jn = "rzon";
const Xn = "bpt0";
const Yn = "JazX";
const Qn = "iXrf";
const es = "nDsb";
const ns = "kelK";
const ss = "cqEx";
const ts = "y9MO";
const is = "AScl";
const as = "tTEQ";
const ls = "RHKX";
const cs = "RKNR";
const os = "sQoA";
const rs = "Zbl4";
const ds = "d5nc";
const us = "QJN6";
const hs = "ai0X";
const ms = "ZyNa";
const fs = "GAwu";
const gs = "VrrL";
const ps = "ArYf";
const vs = "s3gW";
const Ns = "P5Tf";
const bs = "lmU2";
const ws = "fcp3";
const ys = "ccLy";
const Cs = "cXul";
const ks = "EoPF";
const Ts = "OZzK";
const Is = "GS1I";
const Ps = "m0qy";
const $s = "KWYI";
const xs = "q7oW";
const Ss = "JuNB";
const Es = "pshz";
const Ms = "akl6";
const Ls = "vEEM";

const n = {
  modalContainer: An,
  settingsModal: Dn,
  sidebar: Rn,
  sidebarTitle: Bn,
  navItem: On,
  active: Un,
  contentWrapper: Wn,
  content: Zn,
  actionBar: zn,
  confirmOverlay: Hn,
  confirmDialog: _n,
  confirmText: Fn,
  confirmActions: Vn,
  contentTitle: jn,
  section: Gn,
  sectionTitle: Kn,
  settingItem: qn,
  clickable: Jn,
  column: Xn,
  settingInfo: Yn,
  settingIcon: Qn,
  blue: es,
  red: ns,
  purple: ss,
  settingText: ts,
  settingTitle: is,
  settingDescription: as,
  settingControl: ls,
  sessionsList: cs,
  sessionItem: os,
  sessionIcon: rs,
  sessionInfo: ds,
  sessionDevice: us,
  sessionTime: hs,
  sessionCurrentBadge: ms,
  sessionRemove: fs,
  avatarDisplay: gs,
  pinGrid: ps,
  pinItem: vs,
  pinActive: Ns,
  pinImage: bs,
  pinName: ws,
  bioTextarea: ys,
  loading: Cs,
  fieldError: ks,
  saveError: Ts,
  emptyBlocklist: Is,
  blockedUsersList: Ps,
  blockedUserItem: $s,
  blockedUserInfo: xs,
  blockedUserName: Ss,
  blockedUserUsername: Es,
  deleteAccountButton: Ms,
  logoutButton: Ls,
};

const As = aj(({ onDirtyChange, onSavingChange, onClose }, t) => {
  const o = x((m) => m.profile);

  const f = x((m) => m.logout);

  const { openModal, closeModal } = o();
  const d = E();
  const [T] = ak();
  const C = T?.url || window.location.pathname;
  const [N, b] = d(true);
  const [I, P] = d(false);
  const [$, l] = d(false);
  const [y, A] = d({});
  const [g, R] = d(null);
  const [x, F] = d(null);
  const [k, w] = d({ name: "", username: "", bio: "", avatar: "😀" });
  const [K, V] = d([]);
  const [W, se] = d(null);
  const O = A(null);
  const [he, me] = d(true);

  y(() => {
    if (o) {
      const m = {
        name: o.displayName,
        username: o.username || "",
        bio: o.bio || "",
        avatar: o.avatar,
      };
      w(m);
      F(m);
      b(false);
      const E = o.pin ?? null;
      se(E);
      O.current = E;
    }
  }, [o]);

  y(() => {
    r_1
      .getMyPins()
      .then((m) => {
        V(m.pins);

        if (m.activePin && !O.current) {
          const E = m.pins.find((M) => M.slug === m.activePin);

          if (E) {
            se(E);
            O.current = E;
          }
        }
      })
      .catch(() => V([]))
      .finally(() => me(false));
  }, []);

  y(() => {
    onDirtyChange($);
  }, [$]);

  y(() => {
    onSavingChange(I);
  }, [I]);

  const p = q_1(
    (m, E) => {
      if (!x) {
        return false;
      }

      const M = Object.keys(m).some((Y) => m[Y] !== x[Y]);

      const U = (E?.slug ?? null) !== (O.current?.slug ?? null);
      return M || U;
    },
    [x]
  );

  const S = (m, E) => {
    if (y[m]) {
      A((M) => {
        const U = { ...M };
        delete U[m];
        return U;
      });
    }

    R(null);

    w((M) => {
      const U = { ...M, [m]: E };
      l(p(U, W));
      return U;
    });
  };

  const j = q_1(
    (m) => {
      const E = W?.slug === m.slug ? null : m;
      se(E);
      l(p(k, E));
    },
    [W, k, p]
  );

  const fe = async () => {
    if (!$ || I) {
      return;
    }
    P(true);
    A({});
    R(null);
    const m = x?.username;
    const k_username = k.username;
    try {
      if (x && Object.keys(k).some((ae) => k[ae] !== x[ae])) {
        await r_1.updateProfile({
          displayName: k.name,
          username: k.username || undefined,
          bio: k.bio || null,
        });
      }

      if ((W?.slug ?? null) !== (O.current?.slug ?? null)) {
        if (W) {
          await r_1.setActivePin(W.slug);
        } else {
          await r_1.removeActivePin();
        }
      }

      F({ ...k });
      O.current = W;
      l(false);
      const Y = x.getState().profile;

      if (Y) {
        x.getState().setProfile({
          ...Y,
          displayName: k.name,
          username: k.username,
          bio: k.bio || null,
          pin: W,
        });
      }

      if (
        k_username &&
        k_username !== m &&
        (C === `/@${m}` || C === `/@${o?.id}`)
      ) {
        f(`/@${k_username}`);
      }
    } catch (M) {
      console.error("Failed to save profile:", M);

      if (ab(M)) {
        if (M.errors) {
          const U = {};
          for (const [Y, ae] of Object.entries(M.errors)) {
            U[Y] = ae[0] || "Ошибка валидации";
          }
          A(U);
        } else {
          R(M.message || "Не удалось сохранить изменения");
        }
      } else {
        R("Не удалось сохранить изменения");
      }
    } finally {
      P(false);
    }
  };

  const oe = () => {
    if (x) {
      w({ ...x });
      se(O.current);
      l(false);
    }
  };

  al(t, () => ({
    save: fe,
    discard: oe,
  }));

  return N
    ? onSavingChange(m, {
        children: [
          onSavingChange("h2", {
            className: n.contentTitle,
            children: "Аккаунт",
          }),
          onSavingChange(a4, {}),
        ],
      })
    : onSavingChange(m, {
        children: [
          onSavingChange("h2", {
            className: n.contentTitle,
            children: "Аккаунт",
          }),
          onSavingChange("div", {
            className: n.section,
            children: [
              o?.subscription?.isActive
                ? onSavingChange("div", {
                    className: n.settingItem,
                    children: onSavingChange("div", {
                      className: n.settingInfo,
                      children: onSavingChange("div", {
                        className: n.settingText,
                        children: [
                          onSavingChange("span", {
                            className: n.settingTitle,
                            children: "Подписка ИТД НУКСТА",
                          }),
                          onSavingChange("span", {
                            className: n.settingDescription,
                            children: o.subscription.expiresAt
                              ? (() => {
                                  const m = new Date(o.subscription.expiresAt);

                                  const E = new Date();

                                  const M = Math.max(
                                    0,
                                    Math.ceil(
                                      (m.getTime() - E.getTime()) /
                                        (1000 /* 1e3 */ * 60 * 60 * 24)
                                    )
                                  );

                                  return `до ${m.toLocaleDateString("ru-RU", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  })} (${M} ${
                                    M === 1 ? "день" : M < 5 ? "дня" : "дней"
                                  })`;
                                })()
                              : "Активна",
                          }),
                        ],
                      }),
                    }),
                  })
                : null,
              onSavingChange("div", {
                className: n.settingItem,
                children: [
                  onSavingChange("div", {
                    className: n.settingInfo,
                    children: onSavingChange("div", {
                      className: n.settingText,
                      children: [
                        onSavingChange("span", {
                          className: n.settingTitle,
                          children: "Эмоджи-клан",
                        }),
                        onSavingChange("span", {
                          className: n.settingDescription,
                          children: "Выбран при регистрации. Изменить нельзя",
                        }),
                      ],
                    }),
                  }),
                  onSavingChange("div", {
                    className: n.avatarDisplay,
                    children: k.avatar,
                  }),
                ],
              }),
              onSavingChange("div", {
                className: n.settingItem,
                children: [
                  onSavingChange("div", {
                    className: n.settingInfo,
                    children: onSavingChange("div", {
                      className: n.settingText,
                      children: [
                        onSavingChange("span", {
                          className: n.settingTitle,
                          children: "Имя",
                        }),
                        onSavingChange("span", {
                          className: n.settingDescription,
                          children: "Ваше отображаемое имя",
                        }),
                      ],
                    }),
                  }),
                  onSavingChange("div", {
                    className: n.settingControl,
                    children: [
                      onSavingChange(ce, {
                        value: k.name,
                        onChange: (m) => S("name", m),
                      }),
                      y.displayName &&
                        onSavingChange("span", {
                          className: n.fieldError,
                          children: y.displayName,
                        }),
                    ],
                  }),
                ],
              }),
              onSavingChange("div", {
                className: n.settingItem,
                children: [
                  onSavingChange("div", {
                    className: n.settingInfo,
                    children: onSavingChange("div", {
                      className: n.settingText,
                      children: [
                        onSavingChange("span", {
                          className: n.settingTitle,
                          children: "Username",
                        }),
                        onSavingChange("span", {
                          className: n.settingDescription,
                          children:
                            "Ваш уникальный идентификатор (только латиница, цифры и _)",
                        }),
                      ],
                    }),
                  }),
                  onSavingChange("div", {
                    className: n.settingControl,
                    children: [
                      onSavingChange(ce, {
                        value: k.username,
                        onChange: (m) => S("username", m),
                      }),
                      y.username &&
                        onSavingChange("span", {
                          className: n.fieldError,
                          children: y.username,
                        }),
                    ],
                  }),
                ],
              }),
              onSavingChange("div", {
                className: `${n.settingItem} ${n.column}`,
                children: [
                  onSavingChange("div", {
                    className: n.settingInfo,
                    children: onSavingChange("div", {
                      className: n.settingText,
                      children: [
                        onSavingChange("span", {
                          className: n.settingTitle,
                          children: "О себе",
                        }),
                        onSavingChange("span", {
                          className: n.settingDescription,
                          children: "Расскажите немного о себе",
                        }),
                      ],
                    }),
                  }),
                  onSavingChange("textarea", {
                    className: n.bioTextarea,
                    value: k.bio,
                    onChange: (m) => S("bio", m.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  y.bio &&
                    onSavingChange("span", {
                      className: n.fieldError,
                      children: y.bio,
                    }),
                ],
              }),
              !he &&
                K.length > 0 &&
                onSavingChange("div", {
                  className: `${n.settingItem} ${n.column}`,
                  children: [
                    onSavingChange("div", {
                      className: n.settingInfo,
                      children: onSavingChange("div", {
                        className: n.settingText,
                        children: [
                          onSavingChange("span", {
                            className: n.settingTitle,
                            children: "Пин",
                          }),
                          onSavingChange("span", {
                            className: n.settingDescription,
                            children: "Отображается рядом с именем",
                          }),
                        ],
                      }),
                    }),
                    onSavingChange("div", {
                      className: n.pinGrid,
                      children: K.map((m) =>
                        onSavingChange(
                          "button",
                          {
                            className: `${n.pinItem} ${
                              W?.slug === m.slug ? n.pinActive : ""
                            }`,
                            onClick: () => j(m),
                            disabled: I,
                            title: m.description || m.name,
                            type: "button",
                            children: [
                              onSavingChange("img", {
                                src: m.url,
                                alt: m.name,
                                className: n.pinImage,
                              }),
                              onSavingChange("span", {
                                className: n.pinName,
                                children: m.name,
                              }),
                            ],
                          },
                          m.slug
                        )
                      ),
                    }),
                  ],
                }),
              g &&
                onSavingChange("div", { className: n.saveError, children: g }),
            ],
          }),
          d &&
            onSavingChange("div", {
              className: n.section,
              children: onSavingChange("button", {
                type: "button",
                className: n.logoutButton,
                onClick: () => {
                  f();
                  onClose();
                },
                children: [
                  onSavingChange(am, { size: 20 }),
                  onSavingChange("span", { children: "Выйти из аккаунта" }),
                ],
              }),
            }),
          onSavingChange("div", {
            className: n.section,
            children: onSavingChange("button", {
              type: "button",
              className: n.deleteAccountButton,
              onClick: () =>
                openModal(onSavingChange(Ln, { onClose: closeModal })),
              children: "Удалить аккаунт",
            }),
          }),
        ],
      });
});

const Ds = "LhAe";
const Rs = "QPp9";
const Bs = "dwrD";
const Os = "yoWH";
const Us = "osd5";
const Ws = "cOwg";
const Zs = "ZBcO";

const Q = {
  selectWrapper: Ds,
  select: Rs,
  open: Bs,
  selectedValue: Os,
  dropdown: Us,
  option: Ws,
  selected: Zs,
};

function ve({ value, options, onChange, disabled }) {
  const [t, o] = d(false);
  const f = A(null);

  const c = options.find((d) => d.value === value);

  y(() => {
    const d = (T) => {
      if (f.current && !f.current.contains(T.target)) {
        o(false);
      }
    };

    if (t) {
      document.addEventListener("mousedown", d);
    }

    return () => {
      document.removeEventListener("mousedown", d);
    };
  }, [t]);
  const v = (d) => {
    onChange(d);
    o(false);
  };
  return onChange("div", {
    ref: f,
    className: Q.selectWrapper,
    children: [
      onChange("button", {
        type: "button",
        className: `${Q.select} ${t ? Q.open : ""}`,
        onClick: (d) => {
          d.stopPropagation();

          if (!disabled) {
            o(!t);
          }
        },
        disabled: disabled,
        children: [
          onChange("span", { className: Q.selectedValue, children: c?.label }),
          onChange(tn, { size: 16 }),
        ],
      }),
      t &&
        onChange("div", {
          className: Q.dropdown,
          children: options.map((d) =>
            onChange(
              "button",
              {
                type: "button",
                className: `${Q.option} ${d.value === value ? Q.selected : ""}`,
                onClick: () => v(d.value),
                children: d.label,
              },
              d.value
            )
          ),
        }),
    ],
  });
}

const Te = [
  { value: "everyone", label: "Все" },
  { value: "followers", label: "Подписчики" },
  { value: "mutual", label: "Взаимные подписчики" },
  { value: "nobody", label: "Никто" },
];

const zs = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

function Hs() {
  const { theme, setTheme } = Me();
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
            a(ve, { value: theme, options: zs, onChange: (a) => setTheme(a) }),
          ],
        }),
      }),
    ],
  });
}
function pe(s, i, a, h) {
  const t = s % 10;
  const o = s % 100;
  return o >= 11 && o <= 19 ? h : t === 1 ? i : t >= 2 && t <= 4 ? a : h;
}
function _s(s) {
  const i = new Date(s).getTime();
  if (Number.isNaN(i)) {
    return "—";
  }
  const a = Math.max(0, Math.floor((Date.now() - i) / 1000 /* 1e3 */));
  if (a < 60) {
    return "только что";
  }
  const h = Math.floor(a / 60);
  if (h < 60) {
    return `${h} ${pe(h, "минуту", "минуты", "минут")} назад`;
  }
  const t = Math.floor(h / 60);
  if (t < 24) {
    return `${t} ${pe(t, "час", "часа", "часов")} назад`;
  }
  const o = Math.floor(t / 24);
  return o < 30
    ? `${o} ${pe(o, "день", "дня", "дней")} назад`
    : new Date(s).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
}
function Fs(s) {
  if (s.clientName === "ITD iOS") {
    return "Приложение ИТД · iOS";
  }
  if (s.clientName === "ITD Android") {
    return "Приложение ИТД · Android";
  }
  const i = s.clientName ?? "Неизвестное устройство";
  return s.osName
    ? `${i} · ${s.osName}${s.osVersion ? ` ${s.osVersion}` : ""}`
    : i;
}
function Vs(s) {
  const i = [s.ipCity, s.ipCountry].filter(Boolean);
  return i.length ? i.join(", ") : "Местоположение неизвестно";
}
function js({ type }) {
  if (type === "mobile") {
    return a("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a("rect", { x: "6", y: "2", width: "12", height: "20", rx: "2.5" }),
        a("path", { d: "M11 18.5h2" }),
      ],
    });
  }

  if (type === "tablet") {
    return a("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a("rect", { x: "4", y: "2.5", width: "16", height: "19", rx: "2.5" }),
        a("path", { d: "M11 18h2" }),
      ],
    });
  }

  return a("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      a("rect", { x: "2.5", y: "4", width: "19", height: "13", rx: "2" }),
      a("path", { d: "M8.5 21h7M12 17v4" }),
    ],
  });
}
function Gs({ onChangePassword }) {
  const [i, a] = d([]);
  const [h, t] = d(true);
  const [o, f] = d(null);
  const [c, v] = d(null);
  const [d, T] = d(false);
  const [C, N] = d(false);

  const b = q_1(async () => {
    t(true);
    f(null);
    try {
      a(await ge.list());
    } catch {
      f("Не удалось загрузить активные сессии");
    } finally {
      t(false);
    }
  }, []);

  y(() => {
    b();
  }, [b]);

  const I = q_1(
    async (l) => {
      v(l.id);
      try {
        const { loggedOut } = await ge.revoke(l.id, l.isCurrent);
        if (loggedOut) {
          await x.getState().logout();
          return;
        }

        a((A) => A.filter((g) => g.id !== l.id));

        t.success("Сессия завершена");
      } catch {
        b();
      } finally {
        v(null);
      }
    },
    [b]
  );

  const P = q_1(async () => {
    N(true);
    try {
      const l = await ge.revokeOthers();
      T(false);

      t.success(
        l > 0 ? `Завершено сессий: ${l}` : "Других активных сессий нет"
      );

      await b();
    } catch {
    } finally {
      N(false);
    }
  }, [b]);

  const $ = i.reduce((l, y) => (y.isCurrent ? l : l + 1), 0);

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
            a(B_1, {
              size: "sm",
              onClick: onChangePassword,
              children: "Сменить пароль",
            }),
          ],
        }),
      }),
      a("div", {
        className: n.section,
        children: [
          a("div", {
            className: n.settingText,
            style: { marginBottom: 12 },
            children: [
              a("span", {
                className: n.settingTitle,
                children: "Активные сессии",
              }),
              a("span", {
                className: n.settingDescription,
                children:
                  "Устройства, на которых сейчас выполнен вход в ваш аккаунт",
              }),
            ],
          }),
          h
            ? a("div", { className: n.loading, children: "Загрузка…" })
            : o
            ? a("div", { className: n.saveError, children: o })
            : i.length === 0
            ? a("div", {
                className: n.emptyBlocklist,
                children: "Активных сессий не найдено",
              })
            : a(m, {
                children: [
                  a("div", {
                    className: n.sessionsList,
                    children: i.map((l) =>
                      a(
                        "div",
                        {
                          className: n.sessionItem,
                          children: [
                            a("div", {
                              className: n.sessionIcon,
                              children: a(js, { type: l.deviceType }),
                            }),
                            a("div", {
                              className: n.sessionInfo,
                              children: [
                                a("div", {
                                  className: n.sessionDevice,
                                  children: Fs(l),
                                }),
                                a("div", {
                                  className: n.sessionTime,
                                  children: [Vs(l), " · ", _s(l.lastUsedAt)],
                                }),
                              ],
                            }),
                            l.isCurrent
                              ? a("span", {
                                  className: n.sessionCurrentBadge,
                                  children: "Это устройство",
                                })
                              : a("button", {
                                  type: "button",
                                  className: n.sessionRemove,
                                  title: "Завершить сессию",
                                  "aria-label": "Завершить сессию",
                                  disabled: c === l.id,
                                  onClick: () => I(l),
                                  children:
                                    c === l.id
                                      ? a(an_1, { size: 16 })
                                      : a(I, { size: 16 }),
                                }),
                          ],
                        },
                        l.id
                      )
                    ),
                  }),
                  $ > 0 &&
                    (d
                      ? a("div", {
                          style: { display: "flex", gap: 8 },
                          children: [
                            a(B_1, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: true,
                              onClick: () => T(false),
                              disabled: C,
                              children: "Отмена",
                            }),
                            a(B_1, {
                              variant: "danger",
                              size: "sm",
                              fullWidth: true,
                              onClick: P,
                              loading: C,
                              disabled: C,
                              children: ["Завершить все (", $, ")"],
                            }),
                          ],
                        })
                      : a("button", {
                          type: "button",
                          className: n.logoutButton,
                          onClick: () => T(true),
                          children: "Завершить все другие сессии",
                        })),
                ],
              }),
        ],
      }),
    ],
  });
}

const Ks = aj(({ onDirtyChange, onSavingChange }, h) => {
  const { settings, fetchSettings, updateSettings } = a1();

  const [c, v] = d({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [d, T] = d(null);
  const [C, N] = d(false);
  const [b, I] = d(false);
  const [P, $] = d(false);

  y(() => {
    if (!P && !settings) {
      fetchSettings();
    }
  }, [P]);

  y(() => {
    if (settings && !P) {
      const g = {
        webEnabled: settings.webEnabled,
        soundEnabled: settings.soundEnabled,
        follows: settings.preferences.follows,
        reactions: settings.preferences.reactions,
        replies: settings.preferences.replies,
        mentions: settings.preferences.mentions,
        wallPosts: settings.preferences.wallPosts,
      };
      v(g);
      T(g);
      N(false);
      $(true);
    }
  }, [settings, P]);

  y(() => {
    onDirtyChange(C);
  }, [C]);

  y(() => {
    onSavingChange(b);
  }, [b]);

  const l = (g, R) => {
    const x = { ...c, [g]: R };
    v(x);

    if (d) {
      const F = Object.keys(x).some((k) => x[k] !== d[k]);
      N(F);
    }
  };

  const y = async () => {
    if (!(!C || b)) {
      I(true);
      try {
        await updateSettings({
          webEnabled: c.webEnabled,
          soundEnabled: c.soundEnabled,
          preferences: {
            follows: c.follows,
            reactions: c.reactions,
            replies: c.replies,
            mentions: c.mentions,
            wallPosts: c.wallPosts,
          },
        });

        T({ ...c });
        N(false);
        settings.success("Настройки уведомлений сохранены");
      } catch (g) {
        console.error("Failed to save notification settings:", g);
        settings.error("Не удалось сохранить настройки");
      } finally {
        I(false);
      }
    }
  };

  const A = () => {
    if (d) {
      v({ ...d });
      N(false);
    }
  };

  al(h, () => ({
    save: y,
    discard: A,
  }));

  return onSavingChange(m, {
    children: [
      onSavingChange("h2", {
        className: n.contentTitle,
        children: "Уведомления",
      }),
      onSavingChange("div", {
        className: n.section,
        children: [
          onSavingChange("div", {
            className: n.sectionTitle,
            children: "Основные",
          }),
          onSavingChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => l("webEnabled", !c.webEnabled),
            children: [
              onSavingChange("div", {
                className: n.settingInfo,
                children: [
                  onSavingChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onSavingChange(ao, { size: 20 }),
                  }),
                  onSavingChange("div", {
                    className: n.settingText,
                    children: [
                      onSavingChange("span", {
                        className: n.settingTitle,
                        children: "Уведомления",
                      }),
                      onSavingChange("span", {
                        className: n.settingDescription,
                        children: "Включение или отключение всех уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              onSavingChange(J, {
                checked: c.webEnabled,
                onChange: (g) => l("webEnabled", g),
              }),
            ],
          }),
          onSavingChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => l("soundEnabled", !c.soundEnabled),
            children: [
              onSavingChange("div", {
                className: n.settingInfo,
                children: [
                  onSavingChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onSavingChange(Qe, { size: 20 }),
                  }),
                  onSavingChange("div", {
                    className: n.settingText,
                    children: [
                      onSavingChange("span", {
                        className: n.settingTitle,
                        children: "Уведомления со звуком",
                      }),
                      onSavingChange("span", {
                        className: n.settingDescription,
                        children: "Воспроизводить звуки уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              onSavingChange(J, {
                checked: c.soundEnabled,
                onChange: (g) => l("soundEnabled", g),
              }),
            ],
          }),
        ],
      }),
      onSavingChange("div", {
        className: n.section,
        children: [
          onSavingChange("div", {
            className: n.sectionTitle,
            children: "Пользователи",
          }),
          onSavingChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => l("follows", !c.follows),
            children: [
              onSavingChange("div", {
                className: n.settingInfo,
                children: [
                  onSavingChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onSavingChange(en, { size: 20 }),
                  }),
                  onSavingChange("div", {
                    className: n.settingText,
                    children: [
                      onSavingChange("span", {
                        className: n.settingTitle,
                        children: "Подписки",
                      }),
                      onSavingChange("span", {
                        className: n.settingDescription,
                        children: "Уведомления о подписках и запросах в друзья",
                      }),
                    ],
                  }),
                ],
              }),
              onSavingChange(J, {
                checked: c.follows,
                onChange: (g) => l("follows", g),
              }),
            ],
          }),
          onSavingChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => l("wallPosts", !c.wallPosts),
            children: [
              onSavingChange("div", {
                className: n.settingInfo,
                children: [
                  onSavingChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onSavingChange(Ce, { size: 20 }),
                  }),
                  onSavingChange("div", {
                    className: n.settingText,
                    children: [
                      onSavingChange("span", {
                        className: n.settingTitle,
                        children: "Посты на стене",
                      }),
                      onSavingChange("span", {
                        className: n.settingDescription,
                        children: "Уведомления о новых постах на вашей стене",
                      }),
                    ],
                  }),
                ],
              }),
              onSavingChange(J, {
                checked: c.wallPosts,
                onChange: (g) => l("wallPosts", g),
              }),
            ],
          }),
        ],
      }),
      onSavingChange("div", {
        className: n.section,
        children: [
          onSavingChange("div", {
            className: n.sectionTitle,
            children: "Посты",
          }),
          onSavingChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => l("reactions", !c.reactions),
            children: [
              onSavingChange("div", {
                className: n.settingInfo,
                children: [
                  onSavingChange("div", {
                    className: `${n.settingIcon} ${n.red}`,
                    children: onSavingChange(Ye, { size: 20 }),
                  }),
                  onSavingChange("div", {
                    className: n.settingText,
                    children: [
                      onSavingChange("span", {
                        className: n.settingTitle,
                        children: "Лайки и реакции",
                      }),
                      onSavingChange("span", {
                        className: n.settingDescription,
                        children:
                          "Уведомления о реакциях на ваши посты и комментарии",
                      }),
                    ],
                  }),
                ],
              }),
              onSavingChange(J, {
                checked: c.reactions,
                onChange: (g) => l("reactions", g),
              }),
            ],
          }),
          onSavingChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => l("replies", !c.replies),
            children: [
              onSavingChange("div", {
                className: n.settingInfo,
                children: [
                  onSavingChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onSavingChange(Ce, { size: 20 }),
                  }),
                  onSavingChange("div", {
                    className: n.settingText,
                    children: [
                      onSavingChange("span", {
                        className: n.settingTitle,
                        children: "Комментарии и ответы",
                      }),
                      onSavingChange("span", {
                        className: n.settingDescription,
                        children: "Уведомления о новых комментариях и ответах",
                      }),
                    ],
                  }),
                ],
              }),
              onSavingChange(J, {
                checked: c.replies,
                onChange: (g) => l("replies", g),
              }),
            ],
          }),
          onSavingChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => l("mentions", !c.mentions),
            children: [
              onSavingChange("div", {
                className: n.settingInfo,
                children: [
                  onSavingChange("div", {
                    className: `${n.settingIcon} ${n.purple}`,
                    children: onSavingChange(I_1, { size: 20 }),
                  }),
                  onSavingChange("div", {
                    className: n.settingText,
                    children: [
                      onSavingChange("span", {
                        className: n.settingTitle,
                        children: "Упоминания",
                      }),
                      onSavingChange("span", {
                        className: n.settingDescription,
                        children: "Уведомления когда вас упоминают в постах",
                      }),
                    ],
                  }),
                ],
              }),
              onSavingChange(J, {
                checked: c.mentions,
                onChange: (g) => l("mentions", g),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const qs = aj(({ onDirtyChange, onSavingChange }, h) => {
  const [t, o] = d({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [f, c] = d(null);
  const [v, d] = d(false);
  const [T, C] = d(false);
  const [N, b] = d(false);
  const [I, P] = d(false);
  const [$, l] = d([]);
  const [y, A] = d(null);
  const [g, R] = d(true);
  const [x, F] = d(false);
  const [k, w] = d(false);

  y(() => {
    K();

    if (!k) {
      V();
    }
  }, []);

  y(() => {
    onDirtyChange(v);
  }, [v]);

  y(() => {
    onSavingChange(T);
  }, [T]);

  const K = async () => {
    if (!I) {
      b(true);
    }

    try {
      const p = await r_1.getPrivacySettings();

      const S = {
        isPrivate: p.isPrivate ?? false,
        whoCanPostOnWall: p.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: p.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: p.showLastSeen ?? true,
      };

      o(S);
      c(S);
      d(false);
      P(true);
    } catch (p) {
      console.error("Failed to load privacy settings:", p);
    } finally {
      b(false);
    }
  };

  const V = async (p) => {
    if (!x) {
      F(true);
      try {
        const S = await C.getBlockedUsers({ cursor: p, limit: 20 });

        l(p ? (j) => [...j, ...S.users] : S.users);

        A(S.nextCursor);
        R(S.hasMore);
        w(true);
      } catch (S) {
        console.error("Failed to load blocked users:", S);
      } finally {
        F(false);
      }
    }
  };

  const W = async (p) => {
    try {
      await C.unblockUser(p);

      l((S) => S.filter((j) => j.id !== p));

      t.success("Пользователь разблокирован");
    } catch (S) {
      console.error("Failed to unblock user:", S);
      t.error("Не удалось разблокировать пользователя");
    }
  };

  const se = () => {
    if (g && y) {
      V(y);
    }
  };

  const O = (p, S) => {
    const j = { ...t, [p]: S };
    o(j);

    if (f) {
      const fe = Object.keys(j).some((oe) => j[oe] !== f[oe]);
      d(fe);
    }
  };

  const he = async () => {
    if (!(!v || T)) {
      C(true);
      try {
        await r_1.updatePrivacySettings({
          whoCanPostOnWall: t.whoCanPostOnWall,
          whoCanSeeMyPostReactions: t.whoCanSeeMyPostReactions,
          showLastSeen: t.showLastSeen,
        });

        c({ ...t });
        d(false);
        t.success("Настройки приватности сохранены");
      } catch (p) {
        console.error("Failed to save privacy settings:", p);
        t.error("Не удалось сохранить настройки");
      } finally {
        C(false);
      }
    }
  };

  const me = () => {
    if (f) {
      o({ ...f });
      d(false);
    }
  };

  al(h, () => ({
    save: he,
    discard: me,
  }));

  return onSavingChange(m, {
    children: [
      onSavingChange("h2", {
        className: n.contentTitle,
        children: "Приватность",
      }),
      I &&
        onSavingChange("div", {
          className: n.section,
          children: [
            onSavingChange("div", {
              className: n.settingItem,
              children: [
                onSavingChange("div", {
                  className: n.settingInfo,
                  children: onSavingChange("div", {
                    className: n.settingText,
                    children: [
                      onSavingChange("span", {
                        className: n.settingTitle,
                        children: "Стена",
                      }),
                      onSavingChange("span", {
                        className: n.settingDescription,
                        children: "Кто может писать на вашей стене",
                      }),
                    ],
                  }),
                }),
                onSavingChange(ve, {
                  value: t.whoCanPostOnWall,
                  options: Te,
                  onChange: (p) => O("whoCanPostOnWall", p),
                }),
              ],
            }),
            onSavingChange("div", {
              className: n.settingItem,
              children: [
                onSavingChange("div", {
                  className: n.settingInfo,
                  children: onSavingChange("div", {
                    className: n.settingText,
                    children: [
                      onSavingChange("span", {
                        className: n.settingTitle,
                        children: "Лайки",
                      }),
                      onSavingChange("span", {
                        className: n.settingDescription,
                        children: "Кто может видеть ваши лайкнутые посты",
                      }),
                    ],
                  }),
                }),
                onSavingChange(ve, {
                  value: t.whoCanSeeMyPostReactions,
                  options: Te,
                  onChange: (p) => O("whoCanSeeMyPostReactions", p),
                }),
              ],
            }),
            onSavingChange("div", {
              className: `${n.settingItem} ${n.clickable}`,
              onClick: () => O("showLastSeen", !t.showLastSeen),
              children: [
                onSavingChange("div", {
                  className: n.settingInfo,
                  children: onSavingChange("div", {
                    className: n.settingText,
                    children: [
                      onSavingChange("span", {
                        className: n.settingTitle,
                        children: "Онлайн-статус",
                      }),
                      onSavingChange("span", {
                        className: n.settingDescription,
                        children: "Показывать время последнего визита",
                      }),
                    ],
                  }),
                }),
                onSavingChange(J, {
                  checked: t.showLastSeen,
                  onChange: (p) => O("showLastSeen", p),
                }),
              ],
            }),
          ],
        }),
      onSavingChange("div", {
        className: n.section,
        children: [
          onSavingChange("div", {
            className: n.sectionTitle,
            children: "Чёрный список",
          }),
          x && !k
            ? onSavingChange(a4, {})
            : k
            ? onSavingChange(m, {
                children:
                  $.length === 0
                    ? onSavingChange("div", {
                        className: n.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : onSavingChange("div", {
                        className: n.blockedUsersList,
                        children: [
                          $.map((p) =>
                            onSavingChange(
                              "div",
                              {
                                className: n.blockedUserItem,
                                children: [
                                  onSavingChange(g, {
                                    src: p.avatar,
                                    alt: p.displayName,
                                    size: "sm",
                                  }),
                                  onSavingChange("div", {
                                    className: n.blockedUserInfo,
                                    children: [
                                      onSavingChange("span", {
                                        className: n.blockedUserName,
                                        children: p.displayName,
                                      }),
                                      p.username &&
                                        onSavingChange("span", {
                                          className: n.blockedUserUsername,
                                          children: ["@", p.username],
                                        }),
                                    ],
                                  }),
                                  onSavingChange(B_1, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => W(p.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              p.id
                            )
                          ),
                          g &&
                            onSavingChange(B_1, {
                              variant: "secondary",
                              onClick: se,
                              disabled: x,
                              children: x ? "Загрузка..." : "Загрузить ещё",
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

const Js = [
  { id: "account", icon: ap, label: "Аккаунт" },
  { id: "appearance", icon: v, label: "Оформление" },
  { id: "security", icon: ln, label: "Безопасность" },
  { id: "privacy", icon: an, label: "Приватность" },
  { id: "notifications", icon: ao, label: "Уведомления" },
];

function jt({ onClose }) {
  const [i, a] = d("account");
  const [h, t] = d(null);
  const [o, f] = d(false);
  const [c, v] = d({});
  const [d, T] = d({});
  const C = A(null);
  const N = A(null);
  const b = A(null);
  const I = Object.values(c).some(Boolean);
  const P = Object.values(d).some(Boolean);

  const $ = q_1(
    (w) => (K) => {
      v((V) => ({
        ...V,
        [w]: K,
      }));
    },
    []
  );

  const l = q_1(
    (w) => (K) => {
      T((V) => ({
        ...V,
        [w]: K,
      }));
    },
    []
  );

  const y = async () => {
    const w = [];

    if (c.account) {
      w.push(C.current?.save() ?? Promise.resolve());
    }

    if (c.notifications) {
      w.push(N.current?.save() ?? Promise.resolve());
    }

    if (c.privacy) {
      w.push(b.current?.save() ?? Promise.resolve());
    }

    await Promise.all(w);
  };

  const A = () => {
    C.current?.discard();
    N.current?.discard();
    b.current?.discard();
  };

  const g = (w) => {
    if (w !== i) {
      if (I) {
        t({ type: "tab", tab: w });
      } else {
        a(w);
      }
    }
  };

  const R = () => {
    if (I) {
      t({ type: "close" });
    } else {
      onClose();
    }
  };

  const x = () => {
    A();
    const w = h;
    t(null);

    if (w?.type === "tab") {
      a(w.tab);
    } else if (w?.type === "close") {
      onClose();
    }
  };

  const F = async () => {
    await y();
    const w = h;
    t(null);

    if (w?.type === "tab") {
      a(w.tab);
    } else if (w?.type === "close") {
      onClose();
    }
  };

  const k = () => {
    switch (i) {
      case "account": {
        return a(As, {
          ref: C,
          onDirtyChange: $("account"),
          onSavingChange: l("account"),
          onClose: onClose,
        });
      }
      case "appearance": {
        return a(Hs, {});
      }
      case "security": {
        return a(Gs, { onChangePassword: () => f(true) });
      }
      case "notifications": {
        return a(Ks, {
          ref: N,
          onDirtyChange: $("notifications"),
          onSavingChange: l("notifications"),
        });
      }
      case "privacy": {
        return a(qs, {
          ref: b,
          onDirtyChange: $("privacy"),
          onSavingChange: l("privacy"),
        });
      }
    }
  };

  return o
    ? a($n, { onClose: onClose, onBack: () => f(false) })
    : a(M, {
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
                  children: Js.map((w) =>
                    a(
                      "button",
                      {
                        type: "button",
                        className: `${n.navItem} ${i === w.id ? n.active : ""}`,
                        onClick: () => g(w.id),
                        children: [
                          a(w.icon, {}),
                          a("span", { children: w.label }),
                        ],
                      },
                      w.id
                    )
                  ),
                }),
              ],
            }),
            a("div", {
              className: n.contentWrapper,
              children: [
                a("div", { className: n.content, children: k() }),
                I &&
                  a("div", {
                    className: n.actionBar,
                    children: [
                      a(B_1, {
                        variant: "secondary",
                        onClick: R,
                        children: "Отмена",
                      }),
                      a(B_1, {
                        variant: "primary",
                        onClick: y,
                        disabled: P,
                        loading: P,
                        children: "Сохранить",
                      }),
                    ],
                  }),
              ],
            }),
            h &&
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
                        a(B_1, {
                          variant: "secondary",
                          onClick: x,
                          children: "Не сохранять",
                        }),
                        a(B_1, {
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

const Xs = [
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

const Ys = 2247;
const Qs = 157;

const we = [
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

const we_length = we.length;
const Z = 370 / 1080;
const et = 605;
const nt = 40;
const st = { s: 14, x: 623 };
const tt = { s: 15, x: 629 };
function it(s, i) {
  const a = (s + i + 200) / Z;
  const h = we.slice();
  let t = 1785;
  let o = 218;
  let f = true;
  for (let c = 98; c < we_length && ((o += 18), (t += o), !(t > a)); c++) {
    const v = f ? tt : st;
    h[c] = [v.s, v.x, t];
    f = !f;
  }
  return h;
}
function at() {
  const s = A(null);
  const i = A(null);
  const a = A({ f: 0, ts: 0, tl: we.slice(), xOff: 0, yOff: 0 });

  y(() => {
    const i_current = i.current;
    const s_current = s.current;
    if (!i_current || !s_current) {
      return;
    }
    function o() {
      const { innerHeight, innerWidth } = window;

      const s_current_parentElement = s_current.parentElement;
      let I;
      let P;
      if (s_current_parentElement) {
        const y = s_current_parentElement.getBoundingClientRect();
        I = y.top;
        P = y.left + (y.width - 370) / 2;
      } else {
        I = (innerHeight - 900) / 2;
        P = (innerWidth - 370) / 2;
      }
      const $ = innerWidth <= 1173;
      a.current.yOff = 357 * Z - I + ($ ? 60 : 0);
      const l = 260;
      a.current.xOff = et * Z - P - l;
      a.current.tl = it(innerHeight, a.current.yOff);
    }
    const f = setTimeout(o, 260);
    let c;
    const v = () => {
      clearTimeout(c);
      c = setTimeout(o, 150);
    };
    window.addEventListener("resize", v);
    let d;
    function T(C) {
      const a_current = a.current;
      if (C - a_current.ts >= nt) {
        const b = a_current.tl[a_current.f];
        if (!b) {
          i_current.style.visibility = "hidden";
        } else {
          const [I, P, $] = b;
          const [l, , y, A] = Xs[I];
          const g = (y * Z + 0.5) | 0;
          const R = (A * Z + 0.5) | 0;
          i_current.style.cssText = `visibility:visible;width:${g}px;height:${R}px;background-image:url(/assets/nuksta/nuksta-chechik-sprite.png);background-repeat:no-repeat;image-rendering:pixelated;will-change:transform;background-position:${-(
            (l * Z + 0.5) |
            0
          )}px 0px;background-size:${(Ys * Z + 0.5) | 0}px ${
            (Qs * Z + 0.5) | 0
          }px;transform:translate(${(P * Z - a_current.xOff + 0.5) | 0}px,${
            ($ * Z - a_current.yOff + 0.5) | 0
          }px)`;
        }
        a_current.f = (a_current.f + 1) % we_length;
        a_current.ts = C;
      }
      d = requestAnimationFrame(T);
    }
    d = requestAnimationFrame(T);

    return () => {
      cancelAnimationFrame(d);
      clearTimeout(f);
      clearTimeout(c);
      window.removeEventListener("resize", v);
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
            ref: i,
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
const lt = "PnZE";
const ct = "xdhS";
const ot = "auTP";
const rt = "jR3r";
const dt = "IxDD";
const ut = "gSoc";
const ht = "uGdn";
const mt = "mcsY";
const ft = "w8b2";
const gt = "iLfM";
const pt = "wbLJ";
const vt = "p1hb";
const Nt = "ghwR";
const bt = "jAo8";
const wt = "RMAx";
const yt = "xYv0";
const Ct = "WaKk";
const kt = "vsvB";
const Tt = "uTk3";
const It = "U3bM";
const Pt = "yZTU";
const $t = "qntB";
const xt = "X3nE";
const St = "DnLg";
const Et = "sFKo";
const Mt = "BNU6";
const Lt = "MMf3";
const At = "iOn5";

const r = {
  modal: lt,
  sub: ct,
  top: ot,
  bottom: rt,
  title: dt,
  section: ut,
  profileSection: ht,
  label: mt,
  labelRow: ft,
  dim: gt,
  row: pt,
  icon: vt,
  iconGradient: Nt,
  name: bt,
  nameGradient: wt,
  namePinBadge: yt,
  promoVideo: Ct,
  features: kt,
  featureContent: Tt,
  featureTitle: It,
  gradientText: Pt,
  soon: $t,
  infoBtn: xt,
  footer: St,
  disclaimer: Et,
  disclaimerLink: Mt,
  subscribeBtn: Lt,
  activeLabel: At,
};

function Ie({ text }) {
  return a(aq, {
    text: text,
    multiline: true,
    children: a("span", {
      className: r.infoBtn,
      children: a(I_2, { size: 14 }),
    }),
  });
}
function Gt({ isOpen, onClose }) {
  const a = k();
  const [h, t] = d(false);
  if (!isOpen) {
    return null;
  }
  const o = a?.subscription?.isActive ?? false;
  const f = "199";

  const c = async () => {
    if (h) {
      return;
    }
    t(true);
    const v = window.open("about:blank", "_blank");
    try {
      const d = await rn.pay();
      if (d.error) {
        v?.close();
        t.error(d.error);
        return;
      }

      if (d.confirmationUrl && v) {
        v.location.href = d.confirmationUrl;
      } else if (d.confirmationUrl) {
        window.location.href = d.confirmationUrl;
      }
    } catch (d) {
      v?.close();
      t.error(d?.message || "Ошибка при создании платежа");
    } finally {
      t(false);
    }
  };

  return $(
    a(M, {
      onClose: onClose,
      showHeader: false,
      frameless: true,
      className: r.modal,
      children: [
        a(at, {}),
        a("div", {
          className: r.sub,
          children: [
            a("div", {
              className: r.top,
              children: [
                a("div", { className: r.title, children: "ИТД НУКСТА" }),
                a("div", {
                  className: `${r.section} ${r.profileSection}`,
                  children: [
                    a("div", {
                      className: r.label,
                      children: "Ваш профиль с ИТД НУКСТА",
                    }),
                    a("div", {
                      className: r.row,
                      children: [
                        a(g, { src: a?.avatar || null, size: "sm" }),
                        a("div", {
                          children: [
                            a("div", {
                              className: r.name,
                              children: [
                                a("span", {
                                  className: r.nameGradient,
                                  children: a?.displayName,
                                }),
                                a("img", {
                                  src: "/assets/pins/subscription_nuksta.gif",
                                  alt: "НУКСТА",
                                  width: 24,
                                  height: 24,
                                  className: r.namePinBadge,
                                }),
                              ],
                            }),
                            a("div", {
                              className: r.dim,
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
              className: r.promoVideo,
            }),
            a("div", {
              className: r.bottom,
              children: [
                a("div", {
                  className: r.section,
                  children: [
                    a("div", {
                      className: r.labelRow,
                      children: [
                        a("span", {
                          className: r.label,
                          children: "Прикольные украшалки",
                        }),
                        a(Ie, {
                          text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                        }),
                      ],
                    }),
                    a("div", {
                      className: r.features,
                      children: [
                        a("div", {
                          className: r.row,
                          children: [
                            a("span", {
                              className: r.icon,
                              children: a("div", { className: r.iconGradient }),
                            }),
                            a("div", {
                              children: [
                                a("div", {
                                  className: `${r.featureTitle} ${r.gradientText}`,
                                  children: "Уникальный цвет ника",
                                }),
                                a("div", {
                                  className: r.dim,
                                  children:
                                    "Клевый цвет ника, который показывает, что вы поддерживаете итд!",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a("div", {
                          className: r.row,
                          children: [
                            a("span", {
                              className: r.icon,
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
                                  className: r.featureTitle,
                                  children: "Пин поддерживателя",
                                }),
                                a("div", {
                                  className: r.dim,
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
                  className: r.section,
                  children: [
                    a("div", {
                      className: r.labelRow,
                      children: [
                        a("span", {
                          className: r.label,
                          children: "Сможете с нами тестить новые штуки",
                        }),
                        a(Ie, {
                          text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                        }),
                      ],
                    }),
                    a("div", {
                      className: r.features,
                      children: [
                        a("div", {
                          className: r.row,
                          children: [
                            a("span", {
                              className: r.icon,
                              children: a(sn, { size: 20 }),
                            }),
                            a("div", {
                              className: r.featureContent,
                              children: [
                                a("div", {
                                  className: r.featureTitle,
                                  children: "Загрузка видео",
                                }),
                                a("div", {
                                  className: r.dim,
                                  children:
                                    "Получите возможность загружать видео одним из первых",
                                }),
                              ],
                            }),
                          ],
                        }),
                        a("div", {
                          className: r.row,
                          children: [
                            a("span", {
                              className: r.icon,
                              children: a(nn, { size: 20 }),
                            }),
                            a("div", {
                              className: r.featureContent,
                              children: [
                                a("div", {
                                  className: r.featureTitle,
                                  children: [
                                    "Музыка ",
                                    a("span", {
                                      className: r.soon,
                                      children: "soon",
                                    }),
                                  ],
                                }),
                                a("div", {
                                  className: r.dim,
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
                  className: r.footer,
                  children: [
                    a("div", {
                      className: r.disclaimer,
                      children: [
                        "Оплачивая, вы соглашаетесь с ",
                        a("a", {
                          href: "/subscription-terms",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: r.disclaimerLink,
                          children: "условиями платного доступа",
                        }),
                        ", ",
                        a("a", {
                          href: "/privacy",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: r.disclaimerLink,
                          children: "политикой конфиденциальности",
                        }),
                        " и ",
                        a("a", {
                          href: "/terms",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: r.disclaimerLink,
                          children: "условиями использования",
                        }),
                        ".",
                      ],
                    }),
                    o
                      ? a("div", {
                          className: r.activeLabel,
                          children: "Подписка активна",
                        })
                      : a("button", {
                          type: "button",
                          className: r.subscribeBtn,
                          onClick: c,
                          disabled: h,
                          children: `Оплатить ${f}₽ на месяц`,
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
const Dt = "BPln";
const Rt = "wdRU";
const Bt = "G5dE";
const Ot = "DlVU";
const de = { content: Dt, title: Rt, subtitle: Bt, actions: Ot };

export function CancelSubscriptionModal({ expiresAt, onConfirm, onClose }) {
  const [h, t] = d(false);

  const o = new Date(expiresAt).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const f = async () => {
    if (!h) {
      t(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        t(false);
      }
    }
  };

  return onClose(M, {
    onClose: onClose,
    showHeader: false,
    children: onClose("div", {
      className: de.content,
      children: [
        onClose("h2", {
          className: de.title,
          children: "Отключить автопродление?",
        }),
        onClose("p", {
          className: de.subtitle,
          children: [
            "Подписка будет действовать до ",
            o,
            ". После этой даты она просто не продлится автоматически. Вы сможете включить автопродление обратно в любой момент.",
          ],
        }),
        onClose("div", {
          className: de.actions,
          children: [
            onClose(B_1, {
              variant: "secondary",
              onClick: (c) => {
                c.stopPropagation();
                onClose();
              },
              children: "Оставить",
            }),
            onClose(B_1, {
              variant: "danger",
              onClick: (c) => {
                c.stopPropagation();
                f();
              },
              disabled: h,
              children: "Отключить автопродление",
            }),
          ],
        }),
      ],
    }),
  });
}

const Ut = "FgNr";
const Wt = "iHxj";
const Zt = "i6Ca";
const zt = "Z7Ul";
const Ht = "vmpE";
const le = {
  content: Ut,
  title: Wt,
  subtitle: Zt,
  disclaimer: zt,
  actions: Ht,
};
function qt({ onConfirm, onClose }) {
  const [a, h] = d(false);

  const t = async () => {
    if (!a) {
      h(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        h(false);
      }
    }
  };

  return a(M, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: le.content,
      children: [
        a("h2", { className: le.title, children: "Включить автопродление?" }),
        a("p", {
          className: le.subtitle,
          children:
            "Подписка будет автоматически продлеваться каждый месяц. Средства будут списываться с привязанной карты.",
        }),
        a("p", {
          className: le.disclaimer,
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
          className: le.actions,
          children: [
            a(B_1, {
              variant: "secondary",
              onClick: (o) => {
                o.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            a(B_1, {
              variant: "primary",
              onClick: (o) => {
                o.stopPropagation();
                t();
              },
              disabled: a,
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
  $n as ChangePasswordModal,
  Ln as DeleteAccountModal,
  qt as EnableRenewalModal,
  jt as SettingsModal,
  Gt as SubscriptionModal,
  rn as subscriptionApi,
  R as useSettingsStore,
};
