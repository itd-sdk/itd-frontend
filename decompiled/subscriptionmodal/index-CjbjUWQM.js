import {
  ak,
  al,
  u,
  a6,
  a7,
  d as d_1,
  B,
  M,
  ag,
  w,
  x,
  o as ae_1,
  am,
  ah,
  an as an_1,
  n as n_1,
  E,
  ao,
  y as A_1,
  y,
  o,
  q as q_1,
  ap,
  a5,
  k,
  aq,
  u as u_1,
  $,
  i,
  f,
  Z,
  ar,
  t as R,
  m as tn,
  as as sn,
  at as an,
  a2 as ln,
  au as Ve,
  C as Se,
  av as on,
  s as cn,
  S as ja,
} from "./index-DDTOXJaD.js";

import { C as Ce } from "./index-c_XPJ6EZ.js";
import { I as rn } from "./IconInfo-C6zaR4cF.js";
import { I as dn } from "./IconNotificationMention-DnVi52VK.js";
import { I as hn } from "./IconChevronRight--Up5c7Ds.js";
import { I as un } from "./IconChevronLeft-6Kf2Hf_x.js";
(() => {
  try {
    const t =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    t.SENTRY_RELEASE = { id: "1.1.2" };
    const a = new t.Error().stack;

    if (a) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[a] = "01d61863-02e7-4851-86aa-8727aee07d86";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-01d61863-02e7-4851-86aa-8727aee07d86";
    }
  } catch {}
})();

const mn = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const pn = () => {
  if (typeof window !== "undefined") {
    const t = localStorage.getItem("theme-storage");
    if (t) {
      try {
        return JSON.parse(t).state?.theme || "system";
      } catch {
        return "system";
      }
    }
  }
  return "system";
};

const pe = (t) => {
  const a = t === "system" ? mn() : t;
  document.documentElement.setAttribute("data-theme", a);
};

const ze = ak()(
  al(
    (t) => ({
      theme: pn(),

      setTheme: (a) => {
        pe(a);
        t({ theme: a });
      },

      toggleTheme: () =>
        t((a) => {
          const l = a.theme === "light" ? "dark" : "light";
          pe(l);
          return { theme: l };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (t) => {
        if (t?.theme) {
          pe(t.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (ze.getState().theme === "system") {
        pe("system");
      }
    });
}

const fn = ({ size = 18 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      u("path", {
        fill: "currentColor",
        d: "M7.17 14.288c.03.12.064.238.102.354.213.661.543 1.251.926 1.772a3.964 3.964 0 0 1-2.036-1.164.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.16.014.32.025.477.036ZM9.002 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.006.202-.011.384-.01.56-.253.05-.49.126-.706.213a3.832 3.832 0 0 0-.803-.23v.001a5.083 5.083 0 0 0-2.274.149l-.009.003-.01.003c-2.594.808-3.54 3.168-3.364 5.22-1.696-.11-3.138-.427-3.744-1.285-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Z",
      }),
      u("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M17.758 11.709a2.743 2.743 0 0 0-1.751-1.575 3.024 3.024 0 0 0-1.38-.095c-.423.069-.806.313-1.128.54-.311-.218-.704-.466-1.129-.535a3.083 3.083 0 0 0-1.378.09c-1.768.55-2.312 2.412-1.818 3.893.77 2.377 4.084 3.888 4.225 3.952a.247.247 0 0 0 .2 0c.139-.063 3.404-1.548 4.22-3.95.261-.783.239-1.607-.061-2.32Z",
        clipRule: "evenodd",
      }),
    ],
  });

const Pe = ({ size = 18 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      u("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.453.038.891.066 1.317.084.034.63.168 1.26.406 1.864-.021.07-.043.153-.065.243a3.946 3.946 0 0 1-2.19-1.193.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.005.17-.01.327-.01.477a5.988 5.988 0 0 0-4.44 1.75l-.001.002a6.01 6.01 0 0 0-1.734 3.733c-2.108-.05-4.014-.307-4.735-1.328-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm1.963 9.894a3.977 3.977 0 0 0-.004.004l.004-.004Z",
      }),
      u("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.83 11.17a4.008 4.008 0 0 0-5.659 0 4.017 4.017 0 0 0-.805 4.506c.077.192.132.337.132.456 0 .141-.06.316-.117.486-.111.327-.238.698.034.969.27.271.642.143.97.031.167-.057.34-.117.48-.117.122 0 .277.062.455.134a4.019 4.019 0 0 0 4.51-.807 4.007 4.007 0 0 0 0-5.659Z",
        clipRule: "evenodd",
      }),
    ],
  });

const gn = ({ size = 18 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      u("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.479.04.941.069 1.389.087a4.72 4.72 0 0 0 .067 2.063 3.968 3.968 0 0 1-1.988-1.152.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.269 0 4.905 2.546 5.18 4.657-1.042.362-1.842 1.336-1.842 2.559v1.764c-1.79.208-3.352 1.368-4.009 3.012-2.228-.033-4.286-.261-5.042-1.332-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm3.919 10.944a2.894 2.894 0 0 1 .191.007l-.191-.007Z",
      }),
      u("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.835 15.172c0-.01.006-.018.006-.028v-4.477a3.56 3.56 0 0 0 1.259.5c.404.077.801-.17.885-.556.083-.387-.18-.764-.586-.842-1.136-.22-1.591-1.27-1.608-1.31a.756.756 0 0 0-.838-.446.725.725 0 0 0-.614.703v4.094a2.99 2.99 0 0 0-1.42-.365c-1.61 0-2.919 1.246-2.919 2.778C10 16.754 11.31 18 12.92 18c1.61 0 2.92-1.245 2.92-2.777 0-.018-.005-.033-.005-.051Z",
        clipRule: "evenodd",
      }),
    ],
  });

const vn = ({ size = 18 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      u("path", {
        fill: "currentColor",
        d: "M6.694 14.252C7.151 14.291 7.593 14.318 8.021 14.336 8.121 15.23 8.613 16.004 9.322 16.484 9.215 16.494 9.106 16.5 8.997 16.5H8.995C7.933 16.5 6.927 16.055 6.162 15.25 6.077 15.163 6.023 15.051 6.006 14.931 5.989 14.81 6.011 14.687 6.068 14.58 6.186 14.36 6.439 14.233 6.694 14.252ZM9.001 1.5C12.603 1.5 14.223 4.592 14.223 6.786 14.223 7.063 14.216 7.303 14.208 7.525 14.203 7.697 14.199 7.855 14.198 8.007 14.133 8.003 14.067 8 14 8 12.343 8 11 9.343 11 11 9.517 11 8.287 12.076 8.045 13.489 5.928 13.44 4.012 13.185 3.288 12.16 2.942 11.671 2.908 11.069 3.187 10.373 3.838 8.981 3.822 8.464 3.792 7.525 3.784 7.303 3.777 7.062 3.777 6.786 3.777 4.592 5.398 1.5 9.001 1.5ZM13 11C13 10.448 13.448 10 14 10 14.552 10 15 10.448 15 11V17C15 17.552 14.552 18 14 18 13.448 18 13 17.552 13 17V11Z",
      }),
      u("path", {
        fill: "currentColor",
        d: "M11 15C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H11Z",
      }),
    ],
  });

const bn = ({ size = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    children: u("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M8.078 10.367c0-.01.006-.019.006-.029V5.636a3.46 3.46 0 0 0 1.257.526.749.749 0 1 0 .299-1.469c-1.135-.23-1.589-1.333-1.606-1.375a.75.75 0 0 0-1.45.269v4.3a2.873 2.873 0 0 0-1.418-.384 2.92 2.92 0 0 0-2.916 2.918 2.92 2.92 0 0 0 2.916 2.916 2.92 2.92 0 0 0 2.917-2.916c0-.019-.005-.035-.005-.054ZM21.75 6.503a.749.749 0 0 0-1.067-.68c-2.557 1.189-5.245 1.683-7.982 1.469a.752.752 0 0 0-.568.196.752.752 0 0 0-.24.55v7.697a2.866 2.866 0 0 0-1.402-.377 2.907 2.907 0 0 0-2.903 2.904 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903v-6.925c.183.007.368.023.552.023 2.151 0 4.26-.427 6.303-1.228V14.2a2.87 2.87 0 0 0-1.403-.377 2.906 2.906 0 0 0-2.903 2.903 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903V6.502Z",
      "clip-rule": "evenodd",
    }),
  });

const Nn = ({ size = 20 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    children: u("path", {
      fill: "currentColor",
      d: "M9.905 2.501c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06H4.113c-2.422 0-4.113-1.67-4.113-4.06V6.56c0-2.391 1.691-4.06 4.113-4.06zm8.053 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675a1.43 1.43 0 0 1-1.412 1.436c-.215 0-.43-.05-.631-.153l-1.481-.748a1.62 1.62 0 0 1-.888-1.457V7.085c0-.621.34-1.18.888-1.456z",
    }),
  });

const Ne = ({ size = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      u("rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "2",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      u("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M2 10h20",
      }),
    ],
  });

const wn = ({ size = 18 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: u("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 7 4 4 4-4",
    }),
  });

const yn = ({ size = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: u("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.723 10.043a.918.918 0 0 0-.658-.261c-1.069 0-1.939.832-1.939 1.853 0 .015 0 .049-.004.06l-.008 1.876c0 .22-.18.392-.41.392a.397.397 0 0 1-.41-.392V5.948c0-.366-.153-.722-.42-.98-.548-.52-1.48-.523-2.045.003-.27.27-.42.618-.42.977v5.034a.401.401 0 0 1-.409.391c-.219 0-.41-.182-.41-.391v-6.61a1.342 1.342 0 0 0-.422-.968 1.408 1.408 0 0 0-.471-.3 1.513 1.513 0 0 0-1.098-.001 1.426 1.426 0 0 0-.783.747c-.072.156-.11.342-.11.522v6.61a.401.401 0 0 1-.41.391c-.219 0-.41-.182-.41-.391V7.126c0-.736-.671-1.382-1.438-1.382C5.677 5.744 5 6.385 5 7.116v7.276c.023 1.768.759 3.426 2.074 4.67A7.162 7.162 0 0 0 12 21a7.16 7.16 0 0 0 4.926-1.937c1.315-1.245 2.052-2.907 2.074-4.684v-3.704c0-.241-.097-.461-.277-.632Z",
      clipRule: "evenodd",
    }),
  });

const Cn = ({ size = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    children: u("path", {
      fill: "currentColor",
      d: "M16.5 3q5.4.1 5.5 5.4h-4.2c-2 0-3.6 1.6-3.6 3.5s1.6 3.4 3.6 3.4H22v.4q-.1 5.1-5.5 5.3h-9Q2 20.8 2 15.7V8.3Q2.1 3.2 7.5 3zm4.8 6.9q.6 0 .7.7v2.5q0 .7-.7.8h-3.5q-1.6-.1-2-1.6a2 2 0 0 1 .4-1.7 2 2 0 0 1 1.6-.7zm-3 1.1h-.4q-.3 0-.5.3-.2.1-.2.5 0 .6.7.7h.3q.8 0 .8-.7t-.8-.8m-6-4.1H6.8q-.6 0-.7.7t.7.8h5.7q.6-.1.7-.8t-.7-.7",
    }),
  });

const kn = ({ size = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: u("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.532 5.497C17.905 4.83 12.91 3 12 3c-.91 0-5.906 1.83-6.532 2.498-.497.533-.491.944-.452 3.218.016.923.037 2.18.037 3.919 0 6.07 6.75 8.322 6.818 8.345a.424.424 0 0 0 .258 0c.068-.023 6.818-2.276 6.818-8.345 0-1.735.021-2.99.037-3.912.038-2.28.046-2.691-.453-3.226Z",
      clipRule: "evenodd",
    }),
  });

const xe = ({ size = 24 }) =>
  u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      u("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M21 12V7H5a2 2 0 0 1 0-4h14v4",
      }),
      u("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M3 5v14a2 2 0 0 0 2 2h16v-5",
      }),
      u("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M18 12a2 2 0 0 0 0 4h4v-4h-4Z",
      }),
    ],
  });

const Mn = "Hmfa";
const Tn = "qN3E";
const $e = { toggle: Mn, active: Tn };
function K({ checked, onChange, disabled }) {
  const p = (s) => {
    s.stopPropagation();

    if (!disabled) {
      onChange(!checked);
    }
  };
  return u("button", {
    type: "button",
    className: `${$e.toggle} ${checked ? $e.active : ""}`,
    onClick: p,
    disabled: disabled,
    role: "switch",
    "aria-checked": checked,
  });
}

const _ = {
  async getStatus() {
    return a6.get(a7.subscription.status);
  },
  async pay(t) {
    return a6.post(a7.subscription.pay, t ? { methodId: t } : undefined);
  },
  async setAutoRenewal(t) {
    return a6.post(a7.subscription.autoRenewal, { enabled: t });
  },
  async bindCard(t = "bank_card") {
    return a6.post(a7.subscription.bindCard, { type: t });
  },
  async getMethods() {
    return (await a6.get(a7.subscription.methods)).data;
  },
  async setDefaultMethod(t) {
    return a6.put(a7.subscription.methodDefault(t));
  },
  async deleteMethod(t) {
    return a6.delete(a7.subscription.methodDelete(t));
  },
};

const we = {
  async list() {
    return (await a6.get(a7.sessions.list))?.sessions ?? [];
  },
  async revoke(t, a) {
    await a6.delete(a7.sessions.revoke(t));
    return { loggedOut: a };
  },
  async revokeOthers() {
    return (await a6.delete(a7.sessions.revokeOthers))?.revokedCount ?? 0;
  },
};

const In = "y80l";
const Sn = "aEjQ";
const Pn = "AqiL";
const xn = "eIJP";
const $n = "CKDk";
const En = "NB3u";
const Ln = "Rdv3";
const Rn = "fS2U";
const An = "HtP2";
const Dn = "SCPQ";

const X = {
  inputWrapper: In,
  label: Sn,
  hint: Pn,
  input: xn,
  error: $n,
  small: En,
  medium: Ln,
  large: Rn,
  default: "nMwf",
  outline: An,
  errorText: Dn,
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
  ...g
}) {
  const f = (I) => {
    onChange?.(I.currentTarget.value);
  };
  return u("div", {
    className: X.inputWrapper,
    children: [
      label &&
        u("label", {
          className: X.label,
          children: [
            label,
            hint && u("span", { className: X.hint, children: hint }),
          ],
        }),
      u("input", {
        className: `${X.input} ${X[h]} ${X[y]} ${error ? X.error : ""} ${
          className || ""
        }`,
        value: value,
        onInput: f,
        ...g,
      }),
      error && u("span", { className: X.errorText, children: error }),
    ],
  });
}
const Bn = "mP6l";
const On = "aEpY";
const Un = "kRLj";
const Hn = "ZBXt";
const _n = "HSTh";
const Wn = "Qr6A";
const Vn = "UJ7A";

const H = {
  form: Bn,
  field: On,
  label: Un,
  hint: Hn,
  fieldError: _n,
  error: Wn,
  actions: Vn,
};

function zn({ onClose, onBack }) {
  const [l, p] = d_1("");
  const [s, h] = d_1("");
  const [y, o] = d_1("");
  const [g, f] = d_1(false);
  const [I, C] = d_1(null);
  const [w, k] = d_1({});

  const T = async (P) => {
    P.preventDefault();
    C(null);
    k({});

    if (s !== y) {
      k({ confirmPassword: "Пароли не совпадают" });
      return;
    }

    if (s.length < 10) {
      k({ newPassword: "Минимум 10 символов" });
      return;
    }
    if (s.length > 128) {
      k({ newPassword: "Максимум 128 символов" });
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(s)) {
      k({ newPassword: "Только латиница, цифры и знаки пунктуации" });
      return;
    }
    f(true);
    try {
      await ag.changePassword({ currentPassword: l, newPassword: s });
      await w.getState().logout();
      onClose();
    } catch (i) {
      if (x(i)) {
        if (i.code === ae_1.ACCOUNT_CURRENT_PASSWORD_INCORRECT) {
          k({ currentPassword: "Неверный текущий пароль" });
        } else if (i.errors) {
          const m = {};
          for (const [v, b] of Object.entries(i.errors)) {
            m[v] = am(b[0] || "Ошибка валидации");
          }
          k(m);
        } else {
          C(ah(i.code, i.message || "Не удалось сменить пароль"));
        }
      } else {
        C("Не удалось сменить пароль");
      }
    } finally {
      f(false);
    }
  };

  const S = l.length > 0 && s.length >= 10 && y.length > 0;
  return u(M, {
    onClose: onBack,
    title: "Смена пароля",
    children: u("form", {
      onSubmit: T,
      className: H.form,
      children: [
        u("div", {
          className: H.field,
          children: [
            u("label", { className: H.label, children: "Текущий пароль" }),
            u(ce, {
              type: "password",
              value: l,
              onChange: p,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            w.currentPassword &&
              u("span", {
                className: H.fieldError,
                children: w.currentPassword,
              }),
          ],
        }),
        u("div", {
          className: H.field,
          children: [
            u("label", { className: H.label, children: "Новый пароль" }),
            u(ce, {
              type: "password",
              value: s,
              onChange: h,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            u("span", {
              className: H.hint,
              children: "Минимум 10 символов, латиница, цифры и пунктуация",
            }),
            w.newPassword &&
              u("span", { className: H.fieldError, children: w.newPassword }),
          ],
        }),
        u("div", {
          className: H.field,
          children: [
            u("label", {
              className: H.label,
              children: "Подтверждение пароля",
            }),
            u(ce, {
              type: "password",
              value: y,
              onChange: o,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            w.confirmPassword &&
              u("span", {
                className: H.fieldError,
                children: w.confirmPassword,
              }),
          ],
        }),
        I && u("div", { className: H.error, children: I }),
        u("div", {
          className: H.actions,
          children: [
            u(B, {
              type: "button",
              variant: "secondary",
              onClick: onBack,
              disabled: g,
              children: "Отмена",
            }),
            u(B, {
              type: "submit",
              disabled: !S || g,
              children: g ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
      ],
    }),
  });
}
const Zn = "u8o8";
const Fn = "G02W";
const jn = "dwn5";
const qn = "BYAI";
const he = { content: Zn, title: Fn, subtitle: jn, actions: qn };
function Qn({ onClose }) {
  const a = async () => {
    await w.getState().deleteAccount();
    onClose();
  };
  return u(M, {
    onClose: onClose,
    showHeader: false,
    children: u("div", {
      className: he.content,
      children: [
        u("h2", { className: he.title, children: "Удалить аккаунт?" }),
        u("p", {
          className: he.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        u("div", {
          className: he.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: (l) => {
                l.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            u(B, {
              variant: "danger",
              onClick: (l) => {
                l.stopPropagation();
                a();
              },
              children: "Удалить аккаунт",
            }),
          ],
        }),
      ],
    }),
  });
}
const Gn = "CEbw";
const Yn = "WMEI";
const Xn = "ms7M";
const Kn = "CpOG";
const Jn = "sx6N";
const et = "HqeN";
const nt = "BpCI";
const tt = "hMFU";
const st = "MZcv";
const at = "DZtj";
const it = "iKWh";
const lt = "wSNL";
const ot = "Qvj6";
const ct = "g7Ip";
const rt = "nYK1";
const dt = "TCod";
const ht = "RNRT";
const ut = "pHvm";
const mt = "YDuS";
const pt = "L2P1";
const ft = "HKvF";
const gt = "s5dq";
const vt = "EcqT";
const bt = "axNK";
const Nt = "DSyI";
const wt = "RlNV";
const yt = "QntE";
const Ct = "c7dR";
const kt = "ty21";
const Mt = "jROR";
const Tt = "Aa27";
const It = "O3h6";
const St = "X5lR";
const Pt = "wvwo";
const xt = "StkG";
const $t = "waL8";
const Et = "kXVU";
const Lt = "RdDd";
const Rt = "x3hY";
const At = "ggws";
const Dt = "iTWQ";
const Bt = "Ays4";
const Ot = "fQcW";
const Ut = "K2Xz";
const Ht = "tk0c";
const _t = "yHCI";
const Wt = "VEYE";
const Vt = "rrZ5";
const zt = "nUS4";
const Zt = "qRmQ";
const Ft = "ioIx";
const jt = "X2V7";
const qt = "XAkp";
const Qt = "aF9e";
const Gt = "dDxp";
const Yt = "tytW";
const Xt = "kGpw";
const Kt = "pwZF";
const Jt = "Uoiq";
const es = "T1dS";
const ns = "surl";
const ts = "d31h";
const ss = "HhX4";
const as = "RwAQ";
const is = "eIbi";
const ls = "CWnA";
const os = "xFNQ";
const cs = "p2Y3";
const rs = "xAcn";
const ds = "N0mx";
const hs = "mv9j";
const us = "cqUZ";
const ms = "l0Mr";
const ps = "wVHI";

const n = {
  modalContainer: Gn,
  settingsModal: Yn,
  sidebar: Xn,
  sidebarTitle: Kn,
  navItem: Jn,
  active: et,
  contentWrapper: nt,
  content: tt,
  actionBar: st,
  contentTitle: at,
  subscriptionCancel: it,
  subscriptionRenew: lt,
  paymentMethodsList: ot,
  paymentMethodRow: ct,
  paymentMethodIcon: rt,
  paymentMethodInfo: dt,
  paymentMethodTitle: ht,
  paymentMethodBadge: ut,
  paymentMethodSubtitle: mt,
  paymentMethodActions: pt,
  paymentMethodAdd: ft,
  paymentMethodsEmpty: gt,
  paymentMethodBtn: vt,
  paymentMethodBtnDanger: bt,
  section: Nt,
  sectionTitle: wt,
  settingItem: yt,
  clickable: Ct,
  column: kt,
  settingInfo: Mt,
  settingIcon: Tt,
  blue: It,
  red: St,
  purple: Pt,
  settingText: xt,
  settingTitle: $t,
  settingDescription: Et,
  settingControl: Lt,
  sessionsList: Rt,
  sessionItem: At,
  sessionIcon: Dt,
  sessionInfo: Bt,
  sessionDevice: Ot,
  sessionTime: Ut,
  sessionCurrentBadge: Ht,
  sessionRemove: _t,
  avatarDisplay: Wt,
  pinGrid: Vt,
  pinItem: zt,
  pinActive: Zt,
  pinImage: Ft,
  pinName: jt,
  bioTextarea: qt,
  fieldError: Qt,
  saveError: Gt,
  emptyBlocklist: Yt,
  blockedUsersList: Xt,
  blockedUserItem: Kt,
  blockedUserInfo: Jt,
  blockedUserName: es,
  blockedUserUsername: ns,
  deleteAccountButton: ts,
  logoutButton: ss,
  mobilePager: as,
  detailOpen: is,
  mobileScreen: ls,
  mobileMenuTitle: os,
  mobileMenu: cs,
  mobileMenuItem: rs,
  mobileMenuIcon: ds,
  mobileMenuChevron: hs,
  mobileHeader: us,
  mobileBack: ms,
  mobileHeaderTitle: ps,
};

const fs = an_1(({ onDirtyChange, onSavingChange, onClose }, s) => {
  const h = w((N) => N.profile);

  const y = w((N) => N.logout);

  const { openModal, closeModal } = n_1();
  const f = E();
  const [I] = ao();
  const C = I?.url || window.location.pathname;
  const [w, k] = d_1(true);
  const [T, S] = d_1(false);
  const [P, i] = d_1(false);
  const [m, v] = d_1({});
  const [b, D] = d_1(null);
  const [$, z] = d_1(null);
  const [c, x] = d_1({ name: "", username: "", bio: "", avatar: "😀" });
  const [u, B] = d_1([]);
  const [O, se] = d_1(null);
  const Z = A_1(null);
  const [ge, ve] = d_1(true);

  y(() => {
    if (h) {
      const N = {
        name: h.displayName,
        username: h.username || "",
        bio: h.bio || "",
        avatar: h.avatar,
      };
      x(N);
      z(N);
      k(false);
      const L = h.pin ?? null;
      se(L);
      Z.current = L;
    }
  }, [h]);

  y(() => {
    openModal
      .getMyPins()
      .then((N) => {
        B(N.pins);

        if (N.activePin && !Z.current) {
          const L = N.pins.find((U) => U.slug === N.activePin);

          if (L) {
            se(L);
            Z.current = L;
          }
        }
      })
      .catch(() => B([]))
      .finally(() => ve(false));
  }, []);

  y(() => {
    onDirtyChange(P);
  }, [P]);

  y(() => {
    onSavingChange(T);
  }, [T]);

  const M = q_1(
    (N, L) => {
      if (!$) {
        return false;
      }

      const U = Object.keys(N).some((ee) => N[ee] !== $[ee]);

      const j = (L?.slug ?? null) !== (Z.current?.slug ?? null);
      return U || j;
    },
    [$]
  );

  const E = (N, L) => {
    if (m[N]) {
      v((U) => {
        const j = { ...U };
        delete j[N];
        return j;
      });
    }

    D(null);

    x((U) => {
      const j = { ...U, [N]: L };
      i(M(j, O));
      return j;
    });
  };

  const Y = q_1(
    (N) => {
      const L = O?.slug === N.slug ? null : N;
      se(L);
      i(M(c, L));
    },
    [O, c, M]
  );

  const be = async () => {
    if (!P || T) {
      return;
    }
    S(true);
    v({});
    D(null);
    const N = $?.username;
    const c_username = c.username;
    try {
      if ($ && Object.keys(c).some((le) => c[le] !== $[le])) {
        await openModal.updateProfile({
          displayName: c.name,
          username: c.username || undefined,
          bio: c.bio || null,
        });
      }

      if ((O?.slug ?? null) !== (Z.current?.slug ?? null)) {
        if (O) {
          await openModal.setActivePin(O.slug);
        } else {
          await openModal.removeActivePin();
        }
      }

      z({ ...c });
      Z.current = O;
      i(false);
      const ee = w.getState().profile;

      if (ee) {
        w.getState().setProfile({
          ...ee,
          displayName: c.name,
          username: c.username,
          bio: c.bio || null,
          pin: O,
        });
      }

      if (
        c_username &&
        c_username !== N &&
        (C === `/@${N}` || C === `/@${h?.id}`)
      ) {
        u_1(`/@${c_username}`);
      }
    } catch (U) {
      console.error("Failed to save profile:", U);

      if (x(U)) {
        if (U.errors) {
          const j = {};
          for (const [ee, le] of Object.entries(U.errors)) {
            j[ee] = am(le[0] || "Ошибка валидации");
          }
          v(j);
        } else {
          D(ah(U.code, U.message || "Не удалось сохранить изменения"));
        }
      } else {
        D("Не удалось сохранить изменения");
      }
    } finally {
      S(false);
    }
  };

  const de = () => {
    if ($) {
      x({ ...$ });
      se(Z.current);
      i(false);
    }
  };

  ap(s, () => ({
    save: be,
    discard: de,
  }));

  return w
    ? u(k, {
        children: [
          u("h2", { className: n.contentTitle, children: "Аккаунт" }),
          u(a5, {}),
        ],
      })
    : u(k, {
        children: [
          u("h2", { className: n.contentTitle, children: "Аккаунт" }),
          u("div", {
            className: n.section,
            children: [
              u("div", {
                className: n.settingItem,
                children: [
                  u("div", {
                    className: n.settingInfo,
                    children: u("div", {
                      className: n.settingText,
                      children: [
                        u("span", {
                          className: n.settingTitle,
                          children: "Эмоджи-клан",
                        }),
                        u("span", {
                          className: n.settingDescription,
                          children: "Выбран при регистрации. Изменить нельзя",
                        }),
                      ],
                    }),
                  }),
                  u("div", {
                    className: n.avatarDisplay,
                    children: c.avatar,
                  }),
                ],
              }),
              u("div", {
                className: n.settingItem,
                children: [
                  u("div", {
                    className: n.settingInfo,
                    children: u("div", {
                      className: n.settingText,
                      children: [
                        u("span", {
                          className: n.settingTitle,
                          children: "Имя",
                        }),
                        u("span", {
                          className: n.settingDescription,
                          children: "Ваше отображаемое имя",
                        }),
                      ],
                    }),
                  }),
                  u("div", {
                    className: n.settingControl,
                    children: [
                      u(ce, {
                        value: c.name,
                        onChange: (N) => E("name", N),
                      }),
                      m.displayName &&
                        u("span", {
                          className: n.fieldError,
                          children: m.displayName,
                        }),
                    ],
                  }),
                ],
              }),
              u("div", {
                className: n.settingItem,
                children: [
                  u("div", {
                    className: n.settingInfo,
                    children: u("div", {
                      className: n.settingText,
                      children: [
                        u("span", {
                          className: n.settingTitle,
                          children: "Username",
                        }),
                        u("span", {
                          className: n.settingDescription,
                          children:
                            "Ваш уникальный идентификатор (только латиница, цифры и _)",
                        }),
                      ],
                    }),
                  }),
                  u("div", {
                    className: n.settingControl,
                    children: [
                      u(ce, {
                        value: c.username,
                        onChange: (N) => E("username", N),
                      }),
                      m.username &&
                        u("span", {
                          className: n.fieldError,
                          children: m.username,
                        }),
                    ],
                  }),
                ],
              }),
              u("div", {
                className: `${n.settingItem} ${n.column}`,
                children: [
                  u("div", {
                    className: n.settingInfo,
                    children: u("div", {
                      className: n.settingText,
                      children: [
                        u("span", {
                          className: n.settingTitle,
                          children: "О себе",
                        }),
                        u("span", {
                          className: n.settingDescription,
                          children: "Расскажите немного о себе",
                        }),
                      ],
                    }),
                  }),
                  u("textarea", {
                    className: n.bioTextarea,
                    value: c.bio,
                    onChange: (N) => E("bio", N.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  m.bio &&
                    u("span", { className: n.fieldError, children: m.bio }),
                ],
              }),
              !ge &&
                u.length > 0 &&
                u("div", {
                  className: `${n.settingItem} ${n.column}`,
                  children: [
                    u("div", {
                      className: n.settingInfo,
                      children: u("div", {
                        className: n.settingText,
                        children: [
                          u("span", {
                            className: n.settingTitle,
                            children: "Пин",
                          }),
                          u("span", {
                            className: n.settingDescription,
                            children: "Отображается рядом с именем",
                          }),
                        ],
                      }),
                    }),
                    u("div", {
                      className: n.pinGrid,
                      children: u.map((N) =>
                        u(
                          "button",
                          {
                            className: `${n.pinItem} ${
                              O?.slug === N.slug ? n.pinActive : ""
                            }`,
                            onClick: () => Y(N),
                            disabled: T,
                            title: N.description || N.name,
                            type: "button",
                            children: [
                              u("img", {
                                src: N.url,
                                alt: N.name,
                                className: n.pinImage,
                              }),
                              u("span", {
                                className: n.pinName,
                                children: N.name,
                              }),
                            ],
                          },
                          N.slug
                        )
                      ),
                    }),
                  ],
                }),
              b && u("div", { className: n.saveError, children: b }),
            ],
          }),
          f &&
            u("div", {
              className: n.section,
              children: u("button", {
                type: "button",
                className: n.logoutButton,
                onClick: () => {
                  y();
                  onClose();
                },
                children: [
                  u(aq, { size: 20 }),
                  u("span", { children: "Выйти из аккаунта" }),
                ],
              }),
            }),
          u("div", {
            className: n.section,
            children: u("button", {
              type: "button",
              className: n.deleteAccountButton,
              onClick: () => openModal(u(Qn, { onClose: closeModal })),
              children: "Удалить аккаунт",
            }),
          }),
        ],
      });
});

const gs = "KfXp";
const vs = "lJ3e";
const bs = "AjyT";
const Ns = "WJXY";
const ue = { content: gs, title: vs, subtitle: bs, actions: Ns };

export function CancelSubscriptionModal({ expiresAt, onConfirm, onClose }) {
  const [p, s] = d_1(false);

  const h = new Date(expiresAt).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const y = async () => {
    if (!p) {
      s(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        s(false);
      }
    }
  };

  return u(M, {
    onClose: onClose,
    showHeader: false,
    children: u("div", {
      className: ue.content,
      children: [
        u("h2", { className: ue.title, children: "Отключить автопродление?" }),
        u("p", {
          className: ue.subtitle,
          children: [
            "Подписка будет действовать до ",
            h,
            ". После этой даты она просто не продлится автоматически. Вы сможете включить автопродление обратно в любой момент.",
          ],
        }),
        u("div", {
          className: ue.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: (o) => {
                o.stopPropagation();
                onClose();
              },
              children: "Оставить",
            }),
            u(B, {
              variant: "danger",
              onClick: (o) => {
                o.stopPropagation();
                y();
              },
              disabled: p,
              children: "Отключить автопродление",
            }),
          ],
        }),
      ],
    }),
  });
}

const ys = "u4wF";
const Cs = "TAc4";
const ks = "lz3P";
const Ms = "zkTM";
const Ts = "sCJN";
const oe = {
  content: ys,
  title: Cs,
  subtitle: ks,
  disclaimer: Ms,
  actions: Ts,
};
function Is({ onConfirm, onClose }) {
  const [l, p] = d_1(false);

  const s = async () => {
    if (!l) {
      p(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        p(false);
      }
    }
  };

  return u(M, {
    onClose: onClose,
    showHeader: false,
    children: u("div", {
      className: oe.content,
      children: [
        u("h2", { className: oe.title, children: "Включить автопродление?" }),
        u("p", {
          className: oe.subtitle,
          children:
            "Подписка будет автоматически продлеваться каждый месяц. Средства будут списываться с привязанной карты.",
        }),
        u("p", {
          className: oe.disclaimer,
          children: [
            "Нажимая «Включить», вы соглашаетесь с",
            " ",
            u("a", {
              href: "/subscription-terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями подписки",
            }),
            ",",
            " ",
            u("a", {
              href: "/privacy",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "политикой конфиденциальности",
            }),
            " и",
            " ",
            u("a", {
              href: "/terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями использования",
            }),
            ".",
          ],
        }),
        u("div", {
          className: oe.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: (h) => {
                h.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            u(B, {
              variant: "primary",
              onClick: (h) => {
                h.stopPropagation();
                s();
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

const Ss = [
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

const Ps = 2247;
const xs = 157;

const Ie = [
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

const Ie_length = Ie.length;
const q = 370 / 1080;
const $s = 605;
const Es = 40;
const Ls = { s: 14, x: 623 };
const Rs = { s: 15, x: 629 };
function As(t, a) {
  const l = (t + a + 200) / q;
  const p = Ie.slice();
  let s = 1785;
  let h = 218;
  let y = true;
  for (let o = 98; o < Ie_length && ((h += 18), (s += h), !(s > l)); o++) {
    const g = y ? Rs : Ls;
    p[o] = [g.s, g.x, s];
    y = !y;
  }
  return p;
}
function Ds() {
  const t = A_1(null);
  const a = A_1(null);
  const l = A_1({ f: 0, ts: 0, tl: Ie.slice(), xOff: 0, yOff: 0 });

  y(() => {
    const a_current = a.current;
    const t_current = t.current;
    if (!a_current || !t_current) {
      return;
    }
    function h() {
      const { innerHeight, innerWidth } = window;

      const t_current_parentElement = t_current.parentElement;
      let T;
      let S;
      if (t_current_parentElement) {
        const m = t_current_parentElement.getBoundingClientRect();
        T = m.top;
        S = m.left + (m.width - 370) / 2;
      } else {
        T = (innerHeight - 900) / 2;
        S = (innerWidth - 370) / 2;
      }
      const P = innerWidth <= 1173;
      l.current.yOff = 357 * q - T + (P ? 60 : 0);
      const i = 260;
      l.current.xOff = $s * q - S - i;
      l.current.tl = As(innerHeight, l.current.yOff);
    }
    const y = setTimeout(h, 260);
    let o;
    const g = () => {
      clearTimeout(o);
      o = setTimeout(h, 150);
    };
    window.addEventListener("resize", g);
    let f;
    function I(C) {
      const l_current = l.current;
      if (C - l_current.ts >= Es) {
        const k = l_current.tl[l_current.f];
        if (!k) {
          a_current.style.visibility = "hidden";
        } else {
          const [T, S, P] = k;
          const [i, , m, v] = Ss[T];
          const b = (m * q + 0.5) | 0;
          const D = (v * q + 0.5) | 0;
          a_current.style.cssText = `visibility:visible;width:${b}px;height:${D}px;background-image:url(/assets/nuksta/nuksta-chechik-sprite.png);background-repeat:no-repeat;image-rendering:pixelated;will-change:transform;background-position:${-(
            (i * q + 0.5) |
            0
          )}px 0px;background-size:${(Ps * q + 0.5) | 0}px ${
            (xs * q + 0.5) | 0
          }px;transform:translate(${(S * q - l_current.xOff + 0.5) | 0}px,${
            (P * q - l_current.yOff + 0.5) | 0
          }px)`;
        }
        l_current.f = (l_current.f + 1) % Ie_length;
        l_current.ts = C;
      }
      f = requestAnimationFrame(I);
    }
    f = requestAnimationFrame(I);

    return () => {
      cancelAnimationFrame(f);
      clearTimeout(y);
      clearTimeout(o);
      window.removeEventListener("resize", g);
    };
  }, []);

  return u(k, {
    children: [
      u("div", {
        ref: t,
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
        u("div", {
          style: {
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 99999,
            overflow: "hidden",
          },
          children: u("div", {
            ref: a,
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
const Bs = "JQ0h";
const Os = "VE4A";
const Us = "sQvJ";
const Hs = "fH3A";
const _s = "kjCu";
const Ws = "Aau0";
const Vs = "cVyY";
const zs = "oZ77";
const Zs = "AtPs";
const Fs = "qBft";
const js = "FVDm";
const qs = "PERg";
const Qs = "acY0";
const Gs = "m3da";
const Ys = "ljoy";
const Xs = "sGHQ";
const Ks = "bhub";
const Js = "gu93";
const ea = "kX71";
const na = "ihyc";
const ta = "B0qC";
const sa = "VYkV";
const aa = "BawQ";
const ia = "Lliv";
const la = "uUem";
const oa = "nxdt";
const ca = "NOQq";
const ra = "Vtkf";
const da = "vWW7";
const ha = "VW1K";
const ua = "OC8j";
const ma = "x62K";
const pa = "VhcL";
const fa = "WFLP";

const d = {
  modal: Bs,
  sub: Os,
  top: Us,
  bottom: Hs,
  title: _s,
  section: Ws,
  profileSection: Vs,
  label: zs,
  labelRow: Zs,
  dim: Fs,
  row: js,
  icon: qs,
  iconGradient: Qs,
  name: Gs,
  nameGradient: Ys,
  namePinBadge: Xs,
  promoVideo: Ks,
  features: Js,
  featureContent: ea,
  featureTitle: na,
  gradientText: ta,
  soon: sa,
  infoBtn: aa,
  footer: ia,
  disclaimer: la,
  methodSelectRow: oa,
  methodSelectLabel: ca,
  methodSelect: ra,
  chargeInfo: da,
  consentLink: ha,
  subscribeBtn: ua,
  btnLoading: ma,
  btnSpinner: pa,
  activeLabel: fa,
};

function Ee({ text }) {
  return u(ar, {
    text: text,
    multiline: true,
    children: u("span", {
      className: d.infoBtn,
      children: u(rn, { size: 14 }),
    }),
  });
}
const me = "new";
function ga(t) {
  return t.type === "bank_card"
    ? `${t.cardBrand || "Карта"} •••• ${t.cardLast4 || ""}`.trim()
    : t.type === "sbp"
    ? "СБП"
    : t.type;
}
function va({ isOpen, onClose }) {
  const l = i();
  const [p, s] = d_1(false);
  const [h, y] = d_1(false);
  const [o, g] = d_1([]);
  const [f, I] = d_1(me);
  const [C, w] = d_1(199);

  y(() => {
    if (isOpen) {
      _.getStatus()
        .then((m) => {
          y(!!m.recurringEnabled);

          if (typeof m.price == "number") {
            w(m.price);
          }

          if (m.recurringEnabled) {
            _.getMethods()
              .then((v) => {
                g(v);
                const b = v.find((D) => D.isDefault) || v[0];
                I(b ? b.id : me);
              })
              .catch(() => g([]));
          }
        })
        .catch(() => y(false));
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const k = l?.subscription?.isActive ?? false;
  const T = new Date();
  T.setMonth(T.getMonth() + 1);
  const S = T.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  const P = h && f !== me;

  const i = async () => {
    if (p) {
      return;
    }
    s(true);

    if (P) {
      try {
        const v = await _.pay(f);
        if (v.error) {
          R.error(v.error);
          return;
        }
        R.success("Подписка оформлена!");
        onClose();

        w.getState()
          .fetchProfile()
          .catch(() => {});
      } catch (v) {
        R.error(
          v instanceof Error && v.message ? v.message : "Ошибка при оплате"
        );
      } finally {
        s(false);
      }
      return;
    }

    const m = window.open("about:blank", "_blank");
    try {
      const v = await _.pay();
      if (v.error) {
        m?.close();
        R.error(v.error);
        return;
      }

      if (v.confirmationUrl && m) {
        m.location.href = v.confirmationUrl;
      } else if (v.confirmationUrl) {
        window.location.href = v.confirmationUrl;
      }
    } catch (v) {
      m?.close();

      R.error(
        v instanceof Error && v.message
          ? v.message
          : "Ошибка при создании платежа"
      );
    } finally {
      s(false);
    }
  };

  return $(
    u(M, {
      onClose: onClose,
      showHeader: false,
      frameless: true,
      className: d.modal,
      children: [
        u(Ds, {}),
        u("div", {
          className: d.sub,
          children: [
            u("div", {
              className: d.top,
              children: [
                u("div", { className: d.title, children: "ИТД НУКСТА" }),
                u("div", {
                  className: `${d.section} ${d.profileSection}`,
                  children: [
                    u("div", {
                      className: d.label,
                      children: "Ваш профиль с ИТД НУКСТА",
                    }),
                    u("div", {
                      className: d.row,
                      children: [
                        u(f, { src: l?.avatar || null, size: "sm" }),
                        u("div", {
                          children: [
                            u("div", {
                              className: d.name,
                              children: [
                                u("span", {
                                  className: d.nameGradient,
                                  children: l?.displayName,
                                }),
                                u("img", {
                                  src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                  alt: "НУКСТА",
                                  width: 24,
                                  height: 24,
                                  className: d.namePinBadge,
                                }),
                              ],
                            }),
                            u("div", {
                              className: d.dim,
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
            u("video", {
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
              className: d.promoVideo,
            }),
            u("div", {
              className: d.bottom,
              children: [
                u("div", {
                  className: d.section,
                  children: [
                    u("div", {
                      className: d.labelRow,
                      children: [
                        u("span", {
                          className: d.label,
                          children: "Прикольные украшалки",
                        }),
                        u(Ee, {
                          text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                        }),
                      ],
                    }),
                    u("div", {
                      className: d.features,
                      children: [
                        u("div", {
                          className: d.row,
                          children: [
                            u("span", {
                              className: d.icon,
                              children: u("div", { className: d.iconGradient }),
                            }),
                            u("div", {
                              children: u("div", {
                                className: `${d.featureTitle} ${d.gradientText}`,
                                children: "Уникальный цвет ника",
                              }),
                            }),
                          ],
                        }),
                        u("div", {
                          className: d.row,
                          children: [
                            u("span", {
                              className: d.icon,
                              children: u("img", {
                                src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                alt: "Пин",
                                width: 20,
                                height: 20,
                              }),
                            }),
                            u("div", {
                              children: u("div", {
                                className: d.featureTitle,
                                children: "Пин поддерживателя",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u("div", {
                  className: d.section,
                  children: [
                    u("div", {
                      className: d.labelRow,
                      children: [
                        u("span", {
                          className: d.label,
                          children: "Сможете с нами тестить новые штуки",
                        }),
                        u(Ee, {
                          text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                        }),
                      ],
                    }),
                    u("div", {
                      className: d.features,
                      children: [
                        u("div", {
                          className: d.row,
                          children: [
                            u("span", {
                              className: d.icon,
                              children: u(Nn, { size: 20 }),
                            }),
                            u("div", {
                              className: d.featureContent,
                              children: u("div", {
                                className: d.featureTitle,
                                children: "Загрузка видео",
                              }),
                            }),
                          ],
                        }),
                        u("div", {
                          className: d.row,
                          children: [
                            u("span", {
                              className: d.icon,
                              children: u(Z, { size: 20 }),
                            }),
                            u("div", {
                              className: d.featureContent,
                              children: u("div", {
                                className: d.featureTitle,
                                children: [
                                  "Сообщения ",
                                  u("span", {
                                    className: d.soon,
                                    children: "soon",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        u("div", {
                          className: d.row,
                          children: [
                            u("span", {
                              className: d.icon,
                              children: u(bn, { size: 20 }),
                            }),
                            u("div", {
                              className: d.featureContent,
                              children: u("div", {
                                className: d.featureTitle,
                                children: [
                                  "Музыка ",
                                  u("span", {
                                    className: d.soon,
                                    children: "soon",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u("div", {
                  className: d.footer,
                  children: [
                    !k &&
                      o.length > 0 &&
                      u("label", {
                        className: d.methodSelectRow,
                        children: [
                          u("span", {
                            className: d.methodSelectLabel,
                            children: "Сохранённый способ оплаты",
                          }),
                          u("select", {
                            className: d.methodSelect,
                            value: f,
                            onChange: (m) => I(m.target.value),
                            children: [
                              o.map((m) =>
                                u(
                                  "option",
                                  { value: m.id, children: ga(m) },
                                  m.id
                                )
                              ),
                              u("option", {
                                value: me,
                                children: "Новый способ оплаты",
                              }),
                            ],
                          }),
                        ],
                      }),
                    !k &&
                      u("div", {
                        className: d.chargeInfo,
                        children: [
                          "Сегодня спишется ",
                          C,
                          " ₽, далее ежемесячно — следующее списание ",
                          S,
                          ".",
                        ],
                      }),
                    k
                      ? u("div", {
                          className: d.activeLabel,
                          children: "Подписка активна",
                        })
                      : u("button", {
                          type: "button",
                          className: d.subscribeBtn,
                          onClick: i,
                          disabled: p,
                          children: p
                            ? u("span", {
                                className: d.btnLoading,
                                children: [
                                  u(a5, {
                                    size: "xs",
                                    className: d.btnSpinner,
                                  }),
                                  "Оплачиваем…",
                                ],
                              })
                            : `Оплатить ${C}₽ на месяц`,
                        }),
                    !k &&
                      u("div", {
                        className: d.disclaimer,
                        children: [
                          "Нажимая кнопку, вы принимаете ",
                          u("a", {
                            href: "/recurring-terms",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: d.consentLink,
                            children: "условия автопродления",
                          }),
                          ". Отключить его можно в настройках.",
                        ],
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

const ba = {
  yoo_money: "ЮMoney",
  sberbank: "SberPay",
  tinkoff_bank: "T-Pay",
  sbp: "СБП",
  mobile_balance: "Баланс телефона",
  sber_loan: "Кредит от СберБанка",
  sber_bnpl: "Плати частями",
  cash: "Наличные",
};

const Na = {
  bank_card: "Банковская карта",
  yoo_money: "Электронный кошелёк",
  sberbank: "SberPay",
  tinkoff_bank: "T-Pay",
  sbp: "Система быстрых платежей",
  mobile_balance: "Оплата с телефона",
  sber_loan: "Покупки в кредит",
  sber_bnpl: "Рассрочка",
  cash: "Наличные",
};

function Le(t) {
  if (t.type === "bank_card") {
    return `${t.cardBrand || "Карта"} •••• ${t.cardLast4 || ""}`.trim();
  }

  if (!ba[t.type]) {
    return t.type;
  }
}
function wa(t) {
  return Na[t.type] || "";
}
const Re = 5;
function ya() {
  const t = w((c) => c.profile);

  const [a, l] = d_1(false);
  const [p, s] = d_1(false);
  const [h, y] = d_1(false);
  const [o, g] = d_1([]);
  const [f, I] = d_1(true);
  const [C, w] = d_1(false);
  const [k, T] = d_1(false);
  const [S, P] = d_1(null);
  const [i, m] = d_1(false);

  y(() => {
    _.getStatus()
      .then((c) => m(!!c.recurringEnabled))
      .catch(() => m(false));
  }, []);

  y(() => {
    if (i) {
      _.getMethods()
        .then(g)
        .catch(() => g([]))
        .finally(() => I(false));
    }
  }, [i]);

  const v = () => {
    _.getMethods()
      .then(g)
      .catch(() => {});
  };

  const b = async (c) => {
    try {
      await _.setDefaultMethod(c);

      g((x) =>
        x.map((u) => ({
          ...u,
          isDefault: u.id === c,
        }))
      );
    } catch {
      R.error("Не удалось изменить основной способ оплаты");
    }
  };

  const D = async (c) => {
    try {
      const x = await _.deleteMethod(c.id);

      g((u) => u.filter((B) => B.id !== c.id));

      if (x.autoRenewalDisabled && t?.subscription) {
        w.getState().setProfile({
          ...t,
          subscription: { ...t.subscription, autoRenewal: false },
        });
      }

      v();
    } catch {
      R.error("Не удалось отвязать карту");
    }
  };

  const $ = async (c) => {
    if (C) {
      return;
    }
    w(true);
    T(false);
    const x = window.open("about:blank", "_blank");
    try {
      const u = await _.bindCard(c);
      const u_error = u.error;
      if (u_error || !u.confirmationUrl) {
        x?.close();
        R.error(u_error || "Привязка карт временно недоступна");
        return;
      }

      if (x) {
        x.location.href = u.confirmationUrl;
      } else {
        window.location.href = u.confirmationUrl;
      }
    } catch (u) {
      x?.close();

      R.error(
        u instanceof Error && u.message
          ? u.message
          : "Привязка карт временно недоступна"
      );
    } finally {
      w(false);
    }
  };

  const z = [...o].sort((c, x) =>
    c.isDefault !== x.isDefault
      ? c.isDefault
        ? -1
        : 1
      : (x.createdAt || "").localeCompare(c.createdAt || "")
  );

  return u(k, {
    children: [
      u("h2", { className: n.contentTitle, children: "Оплата" }),
      u("div", {
        className: n.section,
        children: [
          t?.subscription?.isActive
            ? u("div", {
                className: n.settingItem,
                children: [
                  u("div", {
                    className: n.settingInfo,
                    children: u("div", {
                      className: n.settingText,
                      children: [
                        u("span", {
                          className: n.settingTitle,
                          children: "Подписка ИТД НУКСТА",
                        }),
                        u("span", {
                          className: n.settingDescription,
                          children: t.subscription.expiresAt
                            ? (() => {
                                const c = new Date(t.subscription.expiresAt);
                                const x = new Date();

                                const u = Math.max(
                                  0,
                                  Math.ceil(
                                    (c.getTime() - x.getTime()) /
                                      (1000 /* 1e3 */ * 60 * 60 * 24)
                                  )
                                );

                                return `до ${c.toLocaleDateString("ru-RU", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })} (${u} ${
                                  u === 1 ? "день" : u < 5 ? "дня" : "дней"
                                })`;
                              })()
                            : "Активна",
                        }),
                      ],
                    }),
                  }),
                  t.subscription.autoRenewal
                    ? u("button", {
                        type: "button",
                        className: n.subscriptionCancel,
                        onClick: () => l(true),
                        children: "Отключить автопродление",
                      })
                    : u("button", {
                        type: "button",
                        className: n.subscriptionRenew,
                        onClick: () => s(true),
                        children: "Включить автопродление",
                      }),
                ],
              })
            : u("div", {
                className: n.settingItem,
                children: [
                  u("div", {
                    className: n.settingInfo,
                    children: u("div", {
                      className: n.settingText,
                      children: [
                        u("span", {
                          className: n.settingTitle,
                          children: "Подписка ИТД НУКСТА",
                        }),
                        u("span", {
                          className: n.settingDescription,
                          children: "Не оформлена",
                        }),
                      ],
                    }),
                  }),
                  u("button", {
                    type: "button",
                    className: n.subscriptionRenew,
                    onClick: () => y(true),
                    children: "Оформить",
                  }),
                ],
              }),
          i &&
            u("div", {
              className: `${n.settingItem} ${n.column}`,
              children: [
                u("div", {
                  className: n.settingInfo,
                  children: u("div", {
                    className: n.settingText,
                    children: [
                      u("span", {
                        className: n.settingTitle,
                        children: "Способы оплаты",
                      }),
                      u("span", {
                        className: n.settingDescription,
                        children:
                          "Сохранённые способы для автопродления подписки. Отвязать можно в любой момент",
                      }),
                    ],
                  }),
                }),
                u("div", {
                  className: n.paymentMethodsList,
                  children: f
                    ? u(a5, {})
                    : u(k, {
                        children: [
                          z.map((c) => {
                            const x = c.type === "bank_card" ? Ne : xe;
                            return u(
                              "div",
                              {
                                className: n.paymentMethodRow,
                                children: [
                                  u("div", {
                                    className: n.paymentMethodIcon,
                                    children: u(x, { size: 18 }),
                                  }),
                                  u("div", {
                                    className: n.paymentMethodInfo,
                                    children: [
                                      u("span", {
                                        className: n.paymentMethodTitle,
                                        children: [
                                          Le(c),
                                          c.isDefault &&
                                            o.length > 1 &&
                                            u("span", {
                                              className: n.paymentMethodBadge,
                                              children: "основной",
                                            }),
                                        ],
                                      }),
                                      u("span", {
                                        className: n.paymentMethodSubtitle,
                                        children: wa(c),
                                      }),
                                    ],
                                  }),
                                  u("div", {
                                    className: n.paymentMethodActions,
                                    children: [
                                      !c.isDefault &&
                                        u("button", {
                                          type: "button",
                                          className: n.paymentMethodBtn,
                                          onClick: () => b(c.id),
                                          children: "Сделать основным",
                                        }),
                                      u("button", {
                                        type: "button",
                                        className: n.paymentMethodBtnDanger,
                                        onClick: () => P(c),
                                        children: "Отвязать",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              c.id
                            );
                          }),
                          o.length === 0 &&
                            u("div", {
                              className: n.paymentMethodsEmpty,
                              children: [
                                u(Ne, { size: 18 }),
                                u("span", {
                                  children: "Нет привязанных методов оплаты",
                                }),
                              ],
                            }),
                          o.length < Re
                            ? k
                              ? u(k, {
                                  children: [
                                    u("button", {
                                      type: "button",
                                      className: n.paymentMethodAdd,
                                      onClick: () => $("bank_card"),
                                      disabled: C,
                                      children: [
                                        u("span", {
                                          className: n.paymentMethodIcon,
                                          children: u(Ne, { size: 16 }),
                                        }),
                                        "Банковская карта",
                                      ],
                                    }),
                                    u("button", {
                                      type: "button",
                                      className: n.paymentMethodAdd,
                                      onClick: () => $("sbp"),
                                      disabled: C,
                                      children: [
                                        u("span", {
                                          className: n.paymentMethodIcon,
                                          children: u(xe, { size: 16 }),
                                        }),
                                        "СБП",
                                      ],
                                    }),
                                  ],
                                })
                              : u("button", {
                                  type: "button",
                                  className: n.paymentMethodAdd,
                                  onClick: () => T(true),
                                  disabled: C,
                                  children: [
                                    u("span", {
                                      className: n.paymentMethodIcon,
                                      children: u(tn, { size: 16 }),
                                    }),
                                    "Добавить способ оплаты",
                                  ],
                                })
                            : u("div", {
                                className: n.paymentMethodsEmpty,
                                children: u("span", {
                                  children: [
                                    "Достигнут лимит способов оплаты (",
                                    Re,
                                    ")",
                                  ],
                                }),
                              }),
                        ],
                      }),
                }),
              ],
            }),
        ],
      }),
      a &&
        t?.subscription?.expiresAt &&
        u(CancelSubscriptionModal, {
          expiresAt: t.subscription.expiresAt,
          onConfirm: async () => {
            const c = await _.setAutoRenewal(false);
            w.getState().setProfile({
              ...t,
              subscription: { ...t.subscription, autoRenewal: c.autoRenewal },
            });
          },
          onClose: () => l(false),
        }),
      p &&
        u(Is, {
          onConfirm: async () => {
            const c = await _.setAutoRenewal(true);
            w.getState().setProfile({
              ...t,
              subscription: {
                ...t.subscription,
                autoRenewal: c.autoRenewal,
                ...(c.expiresAt ? { expiresAt: c.expiresAt } : {}),
              },
            });
          },
          onClose: () => s(false),
        }),
      S &&
        u(Ce, {
          title: "Отвязать способ оплаты?",
          message: `${Le(S)} будет отвязан. Это действие нельзя отменить.`,
          confirmText: "Отвязать",
          danger: true,
          onConfirm: () => D(S),
          onClose: () => P(null),
        }),
      u(va, {
        isOpen: h,
        onClose: () => {
          y(false);

          _.getMethods()
            .then(g)
            .catch(() => {});
        },
      }),
    ],
  });
}
const Ca = "lnRN";
const ka = "an7h";
const Ma = "uecM";
const Ta = "apCu";
const Ia = "uM5Y";
const Sa = "GHM3";
const Pa = "sEQD";

const ne = {
  selectWrapper: Ca,
  select: ka,
  open: Ma,
  selectedValue: Ta,
  dropdown: Ia,
  option: Sa,
  selected: Pa,
};

function ke({ value, options, onChange, disabled }) {
  const [s, h] = d_1(false);
  const y = A_1(null);

  const o = options.find((f) => f.value === value);

  y(() => {
    const f = (I) => {
      if (y.current && !y.current.contains(I.target)) {
        h(false);
      }
    };

    if (s) {
      document.addEventListener("mousedown", f);
    }

    return () => {
      document.removeEventListener("mousedown", f);
    };
  }, [s]);
  const g = (f) => {
    onChange(f);
    h(false);
  };
  return u("div", {
    ref: y,
    className: ne.selectWrapper,
    children: [
      u("button", {
        type: "button",
        className: `${ne.select} ${s ? ne.open : ""}`,
        onClick: (f) => {
          f.stopPropagation();

          if (!disabled) {
            h(!s);
          }
        },
        disabled: disabled,
        children: [
          u("span", { className: ne.selectedValue, children: o?.label }),
          u(wn, { size: 16 }),
        ],
      }),
      s &&
        u("div", {
          className: ne.dropdown,
          children: options.map((f) =>
            u(
              "button",
              {
                type: "button",
                className: `${ne.option} ${
                  f.value === value ? ne.selected : ""
                }`,
                onClick: () => g(f.value),
                children: f.label,
              },
              f.value
            )
          ),
        }),
    ],
  });
}

const Ae = [
  { value: "everyone", label: "Все" },
  { value: "followers", label: "Подписчики" },
  { value: "mutual", label: "Взаимные подписчики" },
  { value: "nobody", label: "Никто" },
];

const xa = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

function $a() {
  const { theme, setTheme } = ze();
  return u(k, {
    children: [
      u("h2", { className: n.contentTitle, children: "Оформление" }),
      u("div", {
        className: n.section,
        children: u("div", {
          className: n.settingItem,
          children: [
            u("div", {
              className: n.settingInfo,
              children: u("div", {
                className: n.settingText,
                children: [
                  u("span", { className: n.settingTitle, children: "Тема" }),
                  u("span", {
                    className: n.settingDescription,
                    children: "Выберите цветовую схему приложения",
                  }),
                ],
              }),
            }),
            u(ke, { value: theme, options: xa, onChange: (l) => setTheme(l) }),
          ],
        }),
      }),
    ],
  });
}
function fe(t, a, l, p) {
  const s = t % 10;
  const h = t % 100;
  return h >= 11 && h <= 19 ? p : s === 1 ? a : s >= 2 && s <= 4 ? l : p;
}
function Ea(t) {
  const a = new Date(t).getTime();
  if (Number.isNaN(a)) {
    return "—";
  }
  const l = Math.max(0, Math.floor((Date.now() - a) / 1000 /* 1e3 */));
  if (l < 60) {
    return "только что";
  }
  const p = Math.floor(l / 60);
  if (p < 60) {
    return `${p} ${fe(p, "минуту", "минуты", "минут")} назад`;
  }
  const s = Math.floor(p / 60);
  if (s < 24) {
    return `${s} ${fe(s, "час", "часа", "часов")} назад`;
  }
  const h = Math.floor(s / 24);
  return h < 30
    ? `${h} ${fe(h, "день", "дня", "дней")} назад`
    : new Date(t).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
}
function De(t) {
  if (t.clientName === "ITD iOS") {
    return "Приложение ИТД · iOS";
  }
  if (t.clientName === "ITD Android") {
    return "Приложение ИТД · Android";
  }
  const a = t.clientName ?? "Неизвестное устройство";
  return t.osName
    ? `${a} · ${t.osName}${t.osVersion ? ` ${t.osVersion}` : ""}`
    : a;
}
function La(t) {
  const a = [t.ipCity, t.ipCountry].filter(Boolean);
  return a.length ? a.join(", ") : "Местоположение неизвестно";
}
function Ra({ type }) {
  if (type === "mobile") {
    return u("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        u("rect", { x: "6", y: "2", width: "12", height: "20", rx: "2.5" }),
        u("path", { d: "M11 18.5h2" }),
      ],
    });
  }

  if (type === "tablet") {
    return u("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        u("rect", { x: "4", y: "2.5", width: "16", height: "19", rx: "2.5" }),
        u("path", { d: "M11 18h2" }),
      ],
    });
  }

  return u("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u("rect", { x: "2.5", y: "4", width: "19", height: "13", rx: "2" }),
      u("path", { d: "M8.5 21h7M12 17v4" }),
    ],
  });
}
function Aa({ onChangePassword }) {
  const [a, l] = d_1([]);
  const [p, s] = d_1(true);
  const [h, y] = d_1(null);
  const [o, g] = d_1(null);
  const [f, I] = d_1(false);

  const C = q_1(async () => {
    s(true);
    y(null);
    try {
      l(await we.list());
    } catch {
      y("Не удалось загрузить активные сессии");
    } finally {
      s(false);
    }
  }, []);

  y(() => {
    C();
  }, [C]);
  const [w, k] = d_1(null);

  const T = q_1(
    async (i) => {
      g(i.id);
      try {
        const { loggedOut } = await we.revoke(i.id, i.isCurrent);
        if (loggedOut) {
          await w.getState().logout();
          return;
        }

        l((v) => v.filter((b) => b.id !== i.id));

        R.success("Сессия завершена");
      } catch {
        C();
      } finally {
        g(null);
      }
    },
    [C]
  );

  const S = q_1(async () => {
    try {
      const i = await we.revokeOthers();
      I(false);

      R.success(
        i > 0 ? `Завершено сессий: ${i}` : "Других активных сессий нет"
      );

      await C();
    } catch {}
  }, [C]);

  const P = a.reduce((i, m) => (m.isCurrent ? i : i + 1), 0);

  return u(k, {
    children: [
      u("h2", { className: n.contentTitle, children: "Безопасность" }),
      u("div", {
        className: n.section,
        children: u("div", {
          className: n.settingItem,
          children: [
            u("div", {
              className: n.settingInfo,
              children: u("div", {
                className: n.settingText,
                children: [
                  u("span", { className: n.settingTitle, children: "Пароль" }),
                  u("span", {
                    className: n.settingDescription,
                    children: "Изменить пароль от аккаунта",
                  }),
                ],
              }),
            }),
            u(B, {
              size: "sm",
              onClick: onChangePassword,
              children: "Сменить пароль",
            }),
          ],
        }),
      }),
      u("div", {
        className: n.section,
        children: [
          u("div", {
            className: n.settingText,
            style: { marginBottom: 12 },
            children: [
              u("span", {
                className: n.settingTitle,
                children: "Активные сессии",
              }),
              u("span", {
                className: n.settingDescription,
                children:
                  "Устройства, на которых сейчас выполнен вход в ваш аккаунт",
              }),
            ],
          }),
          p
            ? u(a5, {})
            : h
            ? u("div", { className: n.saveError, children: h })
            : a.length === 0
            ? u("div", {
                className: n.emptyBlocklist,
                children: "Активных сессий не найдено",
              })
            : u(k, {
                children: [
                  u("div", {
                    className: n.sessionsList,
                    children: a.map((i) =>
                      u(
                        "div",
                        {
                          className: n.sessionItem,
                          children: [
                            u("div", {
                              className: n.sessionIcon,
                              children: u(Ra, { type: i.deviceType }),
                            }),
                            u("div", {
                              className: n.sessionInfo,
                              children: [
                                u("div", {
                                  className: n.sessionDevice,
                                  children: De(i),
                                }),
                                u("div", {
                                  className: n.sessionTime,
                                  children: [La(i), " · ", Ea(i.lastUsedAt)],
                                }),
                              ],
                            }),
                            i.isCurrent
                              ? u("span", {
                                  className: n.sessionCurrentBadge,
                                  children: "Это устройство",
                                })
                              : u("button", {
                                  type: "button",
                                  className: n.sessionRemove,
                                  title: "Завершить сессию",
                                  "aria-label": "Завершить сессию",
                                  disabled: o === i.id,
                                  onClick: () => k(i),
                                  children:
                                    o === i.id
                                      ? u(sn, { size: 16 })
                                      : u(an, { size: 16 }),
                                }),
                          ],
                        },
                        i.id
                      )
                    ),
                  }),
                  P > 0 &&
                    u("button", {
                      type: "button",
                      className: n.logoutButton,
                      onClick: () => I(true),
                      children: "Завершить все другие сессии",
                    }),
                ],
              }),
        ],
      }),
      w &&
        u(Ce, {
          title: "Завершить сессию?",
          message: `Вы действительно хотите завершить сессию «${De(
            w
          )}»? Устройство будет разлогинено.`,
          confirmText: "Завершить",
          danger: true,
          onConfirm: () => T(w),
          onClose: () => k(null),
        }),
      f &&
        u(Ce, {
          title: "Завершить все другие сессии?",
          message: `Вы действительно хотите завершить ${P} ${fe(
            P,
            "другую сессию",
            "другие сессии",
            "других сессий"
          )}? Устройства будут разлогинены.`,
          confirmText: `Завершить все (${P})`,
          danger: true,
          onConfirm: S,
          onClose: () => I(false),
        }),
    ],
  });
}

const Da = an_1(({ onDirtyChange, onSavingChange }, p) => {
  const { settings, fetchSettings, updateSettings } = ln();

  const [o, g] = d_1({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [f, I] = d_1(null);
  const [C, w] = d_1(false);
  const [k, T] = d_1(false);
  const [S, P] = d_1(false);

  updateSettings(() => {
    if (!S && !settings) {
      fetchSettings();
    }
  }, [S]);

  updateSettings(() => {
    if (settings && !S) {
      const b = {
        webEnabled: settings.webEnabled,
        soundEnabled: settings.soundEnabled,
        follows: settings.preferences.follows,
        reactions: settings.preferences.reactions,
        replies: settings.preferences.replies,
        mentions: settings.preferences.mentions,
        wallPosts: settings.preferences.wallPosts,
      };
      g(b);
      I(b);
      w(false);
      P(true);
    }
  }, [settings, S]);

  updateSettings(() => {
    onDirtyChange(C);
  }, [C]);

  updateSettings(() => {
    onSavingChange(k);
  }, [k]);

  const i = (b, D) => {
    const $ = { ...o, [b]: D };
    g($);

    if (f) {
      const z = Object.keys($).some((c) => $[c] !== f[c]);
      w(z);
    }
  };

  const m = async () => {
    if (!(!C || k)) {
      T(true);
      try {
        await updateSettings({
          webEnabled: o.webEnabled,
          soundEnabled: o.soundEnabled,
          preferences: {
            follows: o.follows,
            reactions: o.reactions,
            replies: o.replies,
            mentions: o.mentions,
            wallPosts: o.wallPosts,
          },
        });

        I({ ...o });
        w(false);
        R.success("Настройки уведомлений сохранены");
      } catch (b) {
        console.error("Failed to save notification settings:", b);
        R.error("Не удалось сохранить настройки");
      } finally {
        T(false);
      }
    }
  };

  const v = () => {
    if (f) {
      g({ ...f });
      w(false);
    }
  };

  ap(p, () => ({
    save: m,
    discard: v,
  }));

  return u(k, {
    children: [
      u("h2", { className: n.contentTitle, children: "Уведомления" }),
      u("div", {
        className: n.section,
        children: [
          u("div", { className: n.sectionTitle, children: "Основные" }),
          u("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => i("webEnabled", !o.webEnabled),
            children: [
              u("div", {
                className: n.settingInfo,
                children: [
                  u("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: u(Ve, { size: 20 }),
                  }),
                  u("div", {
                    className: n.settingText,
                    children: [
                      u("span", {
                        className: n.settingTitle,
                        children: "Уведомления",
                      }),
                      u("span", {
                        className: n.settingDescription,
                        children: "Включение или отключение всех уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              u(K, {
                checked: o.webEnabled,
                onChange: (b) => i("webEnabled", b),
              }),
            ],
          }),
          u("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => i("soundEnabled", !o.soundEnabled),
            children: [
              u("div", {
                className: n.settingInfo,
                children: [
                  u("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: u(gn, { size: 20 }),
                  }),
                  u("div", {
                    className: n.settingText,
                    children: [
                      u("span", {
                        className: n.settingTitle,
                        children: "Уведомления со звуком",
                      }),
                      u("span", {
                        className: n.settingDescription,
                        children: "Воспроизводить звуки уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              u(K, {
                checked: o.soundEnabled,
                onChange: (b) => i("soundEnabled", b),
              }),
            ],
          }),
        ],
      }),
      u("div", {
        className: n.section,
        children: [
          u("div", { className: n.sectionTitle, children: "Пользователи" }),
          u("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => i("follows", !o.follows),
            children: [
              u("div", {
                className: n.settingInfo,
                children: [
                  u("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: u(vn, { size: 20 }),
                  }),
                  u("div", {
                    className: n.settingText,
                    children: [
                      u("span", {
                        className: n.settingTitle,
                        children: "Подписки",
                      }),
                      u("span", {
                        className: n.settingDescription,
                        children: "Уведомления о подписках и запросах в друзья",
                      }),
                    ],
                  }),
                ],
              }),
              u(K, {
                checked: o.follows,
                onChange: (b) => i("follows", b),
              }),
            ],
          }),
          u("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => i("wallPosts", !o.wallPosts),
            children: [
              u("div", {
                className: n.settingInfo,
                children: [
                  u("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: u(Pe, { size: 20 }),
                  }),
                  u("div", {
                    className: n.settingText,
                    children: [
                      u("span", {
                        className: n.settingTitle,
                        children: "Посты на стене",
                      }),
                      u("span", {
                        className: n.settingDescription,
                        children: "Уведомления о новых постах на вашей стене",
                      }),
                    ],
                  }),
                ],
              }),
              u(K, {
                checked: o.wallPosts,
                onChange: (b) => i("wallPosts", b),
              }),
            ],
          }),
        ],
      }),
      u("div", {
        className: n.section,
        children: [
          u("div", { className: n.sectionTitle, children: "Посты" }),
          u("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => i("reactions", !o.reactions),
            children: [
              u("div", {
                className: n.settingInfo,
                children: [
                  u("div", {
                    className: `${n.settingIcon} ${n.red}`,
                    children: u(fn, { size: 20 }),
                  }),
                  u("div", {
                    className: n.settingText,
                    children: [
                      u("span", {
                        className: n.settingTitle,
                        children: "Лайки и реакции",
                      }),
                      u("span", {
                        className: n.settingDescription,
                        children:
                          "Уведомления о реакциях на ваши посты и комментарии",
                      }),
                    ],
                  }),
                ],
              }),
              u(K, {
                checked: o.reactions,
                onChange: (b) => i("reactions", b),
              }),
            ],
          }),
          u("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => i("replies", !o.replies),
            children: [
              u("div", {
                className: n.settingInfo,
                children: [
                  u("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: u(Pe, { size: 20 }),
                  }),
                  u("div", {
                    className: n.settingText,
                    children: [
                      u("span", {
                        className: n.settingTitle,
                        children: "Комментарии и ответы",
                      }),
                      u("span", {
                        className: n.settingDescription,
                        children: "Уведомления о новых комментариях и ответах",
                      }),
                    ],
                  }),
                ],
              }),
              u(K, {
                checked: o.replies,
                onChange: (b) => i("replies", b),
              }),
            ],
          }),
          u("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => i("mentions", !o.mentions),
            children: [
              u("div", {
                className: n.settingInfo,
                children: [
                  u("div", {
                    className: `${n.settingIcon} ${n.purple}`,
                    children: u(dn, { size: 20 }),
                  }),
                  u("div", {
                    className: n.settingText,
                    children: [
                      u("span", {
                        className: n.settingTitle,
                        children: "Упоминания",
                      }),
                      u("span", {
                        className: n.settingDescription,
                        children: "Уведомления когда вас упоминают в постах",
                      }),
                    ],
                  }),
                ],
              }),
              u(K, {
                checked: o.mentions,
                onChange: (b) => i("mentions", b),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const Ba = an_1(({ onDirtyChange, onSavingChange }, p) => {
  const [s, h] = d_1({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [y, o] = d_1(null);
  const [g, f] = d_1(false);
  const [I, C] = d_1(false);
  const [w, k] = d_1(false);
  const [T, S] = d_1(false);
  const [P, i] = d_1([]);
  const [m, v] = d_1(null);
  const [b, D] = d_1(true);
  const [$, z] = d_1(false);
  const [c, x] = d_1(false);

  y(() => {
    u();

    if (!c) {
      B();
    }
  }, []);

  y(() => {
    onDirtyChange(g);
  }, [g]);

  y(() => {
    onSavingChange(I);
  }, [I]);

  const u = async () => {
    if (!T) {
      k(true);
    }

    try {
      const M = await o.getPrivacySettings();

      const E = {
        isPrivate: M.isPrivate ?? false,
        whoCanPostOnWall: M.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: M.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: M.showLastSeen ?? true,
      };

      h(E);
      o(E);
      f(false);
      S(true);
    } catch (M) {
      console.error("Failed to load privacy settings:", M);
    } finally {
      k(false);
    }
  };

  const B = async (M) => {
    if (!$) {
      z(true);
      try {
        const E = await Se.getBlockedUsers({ cursor: M, limit: 20 });

        i(M ? (Y) => [...Y, ...E.users] : E.users);

        v(E.nextCursor);
        D(E.hasMore);
        x(true);
      } catch (E) {
        console.error("Failed to load blocked users:", E);
      } finally {
        z(false);
      }
    }
  };

  const O = async (M) => {
    try {
      await Se.unblockUser(M);

      i((E) => E.filter((Y) => Y.id !== M));

      R.success("Пользователь разблокирован");
    } catch (E) {
      console.error("Failed to unblock user:", E);
      R.error("Не удалось разблокировать пользователя");
    }
  };

  const se = () => {
    if (b && m) {
      B(m);
    }
  };

  const Z = (M, E) => {
    const Y = { ...s, [M]: E };
    h(Y);

    if (y) {
      const be = Object.keys(Y).some((de) => Y[de] !== y[de]);
      f(be);
    }
  };

  const ge = async () => {
    if (!(!g || I)) {
      C(true);
      try {
        await o.updatePrivacySettings({
          whoCanPostOnWall: s.whoCanPostOnWall,
          whoCanSeeMyPostReactions: s.whoCanSeeMyPostReactions,
          showLastSeen: s.showLastSeen,
        });

        o({ ...s });
        f(false);
        R.success("Настройки приватности сохранены");
      } catch (M) {
        console.error("Failed to save privacy settings:", M);
        R.error("Не удалось сохранить настройки");
      } finally {
        C(false);
      }
    }
  };

  const ve = () => {
    if (y) {
      h({ ...y });
      f(false);
    }
  };

  ap(p, () => ({
    save: ge,
    discard: ve,
  }));

  return u(k, {
    children: [
      u("h2", { className: n.contentTitle, children: "Приватность" }),
      T &&
        u("div", {
          className: n.section,
          children: [
            u("div", {
              className: n.settingItem,
              children: [
                u("div", {
                  className: n.settingInfo,
                  children: u("div", {
                    className: n.settingText,
                    children: [
                      u("span", {
                        className: n.settingTitle,
                        children: "Стена",
                      }),
                      u("span", {
                        className: n.settingDescription,
                        children: "Кто может писать на вашей стене",
                      }),
                    ],
                  }),
                }),
                u(ke, {
                  value: s.whoCanPostOnWall,
                  options: Ae,
                  onChange: (M) => Z("whoCanPostOnWall", M),
                }),
              ],
            }),
            u("div", {
              className: n.settingItem,
              children: [
                u("div", {
                  className: n.settingInfo,
                  children: u("div", {
                    className: n.settingText,
                    children: [
                      u("span", {
                        className: n.settingTitle,
                        children: "Лайки",
                      }),
                      u("span", {
                        className: n.settingDescription,
                        children: "Кто может видеть ваши лайкнутые посты",
                      }),
                    ],
                  }),
                }),
                u(ke, {
                  value: s.whoCanSeeMyPostReactions,
                  options: Ae,
                  onChange: (M) => Z("whoCanSeeMyPostReactions", M),
                }),
              ],
            }),
            u("div", {
              className: `${n.settingItem} ${n.clickable}`,
              onClick: () => Z("showLastSeen", !s.showLastSeen),
              children: [
                u("div", {
                  className: n.settingInfo,
                  children: u("div", {
                    className: n.settingText,
                    children: [
                      u("span", {
                        className: n.settingTitle,
                        children: "Онлайн-статус",
                      }),
                      u("span", {
                        className: n.settingDescription,
                        children: "Показывать время последнего визита",
                      }),
                    ],
                  }),
                }),
                u(K, {
                  checked: s.showLastSeen,
                  onChange: (M) => Z("showLastSeen", M),
                }),
              ],
            }),
          ],
        }),
      u("div", {
        className: n.section,
        children: [
          u("div", {
            className: n.sectionTitle,
            children: "Чёрный список",
          }),
          $ && !c
            ? u(a5, {})
            : c
            ? u(k, {
                children:
                  P.length === 0
                    ? u("div", {
                        className: n.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : u("div", {
                        className: n.blockedUsersList,
                        children: [
                          P.map((M) =>
                            u(
                              "div",
                              {
                                className: n.blockedUserItem,
                                children: [
                                  u(f, {
                                    src: M.avatar,
                                    alt: M.displayName,
                                    size: "sm",
                                  }),
                                  u("div", {
                                    className: n.blockedUserInfo,
                                    children: [
                                      u("span", {
                                        className: n.blockedUserName,
                                        children: M.displayName,
                                      }),
                                      M.username &&
                                        u("span", {
                                          className: n.blockedUserUsername,
                                          children: ["@", M.username],
                                        }),
                                    ],
                                  }),
                                  u(B, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => O(M.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              M.id
                            )
                          ),
                          b &&
                            u(B, {
                              variant: "secondary",
                              onClick: se,
                              disabled: $,
                              loading: $,
                              children: "Загрузить ещё",
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

const ye = [
  { id: "account", icon: on, label: "Аккаунт", color: "#3b82f6" },
  { id: "payment", icon: Cn, label: "Оплата", color: "#34c759" },
  { id: "appearance", icon: cn, label: "Оформление", color: "#8b5cf6" },
  { id: "security", icon: kn, label: "Безопасность", color: "#ef4444" },
  { id: "privacy", icon: yn, label: "Приватность", color: "#f59e0b" },
  { id: "notifications", icon: Ve, label: "Уведомления", color: "#ec4899" },
];

function za({ onClose }) {
  const a = E();
  const [l, p] = d_1("account");
  const [s, h] = d_1(false);
  const [y, o] = d_1(false);
  const [g, f] = d_1({});
  const [I, C] = d_1({});
  const w = A_1(null);
  const k = A_1(null);
  const T = A_1(null);
  const S = Object.values(g).some(Boolean);
  const P = Object.values(I).some(Boolean);

  const i = q_1(
    (u) => (B) => {
      f((O) => ({
        ...O,
        [u]: B,
      }));
    },
    []
  );

  const m = q_1(
    (u) => (B) => {
      C((O) => ({
        ...O,
        [u]: B,
      }));
    },
    []
  );

  const v = async () => {
    const u = [];

    if (g.account) {
      u.push(w.current?.save() ?? Promise.resolve());
    }

    if (g.notifications) {
      u.push(k.current?.save() ?? Promise.resolve());
    }

    if (g.privacy) {
      u.push(T.current?.save() ?? Promise.resolve());
    }

    await Promise.all(u);
  };

  const b = (u) => {
    if (u !== l) {
      f({});
      p(u);
    }
  };

  const D = (u) => {
    f({});
    p(u);
    h(true);
  };

  const $ = () => {
    f({});
    h(false);
  };

  const z = () => {
    onClose();
  };

  const c = () => {
    switch (l) {
      case "account": {
        return u(fs, {
          ref: w,
          onDirtyChange: i("account"),
          onSavingChange: m("account"),
          onClose: onClose,
        });
      }
      case "payment": {
        return u(ya, {});
      }
      case "appearance": {
        return u($a, {});
      }
      case "security": {
        return u(Aa, { onChangePassword: () => o(true) });
      }
      case "notifications": {
        return u(Da, {
          ref: k,
          onDirtyChange: i("notifications"),
          onSavingChange: m("notifications"),
        });
      }
      case "privacy": {
        return u(Ba, {
          ref: T,
          onDirtyChange: i("privacy"),
          onSavingChange: m("privacy"),
        });
      }
    }
  };

  if (y) {
    return u(zn, { onClose: onClose, onBack: () => o(false) });
  }
  const x = S
    ? u("div", {
        className: n.actionBar,
        children: [
          u(B, { variant: "secondary", onClick: z, children: "Отмена" }),
          u(B, {
            variant: "primary",
            onClick: v,
            disabled: P,
            loading: P,
            children: "Сохранить",
          }),
        ],
      })
    : null;
  return u(M, {
    onClose: z,
    frameless: true,
    size: "wide",
    className: n.modalContainer,
    children: u("div", {
      className: n.settingsModal,
      children: a
        ? u("div", {
            className: `${n.mobilePager} ${s ? n.detailOpen : ""}`,
            children: [
              u("div", {
                className: n.mobileScreen,
                children: [
                  u("div", {
                    className: n.mobileMenuTitle,
                    children: "Настройки",
                  }),
                  u("nav", {
                    className: n.mobileMenu,
                    children: ye.map((u) =>
                      u(
                        "button",
                        {
                          type: "button",
                          className: n.mobileMenuItem,
                          onClick: () => D(u.id),
                          children: [
                            u("span", {
                              className: n.mobileMenuIcon,
                              style: { background: u.color },
                              children: u(u.icon, { size: 16 }),
                            }),
                            u("span", { children: u.label }),
                            u("span", {
                              className: n.mobileMenuChevron,
                              children: u(hn, { size: 18 }),
                            }),
                          ],
                        },
                        u.id
                      )
                    ),
                  }),
                ],
              }),
              u("div", {
                className: n.mobileScreen,
                children: [
                  u("div", {
                    className: n.mobileHeader,
                    children: [
                      u("button", {
                        type: "button",
                        className: n.mobileBack,
                        onClick: $,
                        children: [
                          u(un, { size: 22 }),
                          u("span", { children: "Настройки" }),
                        ],
                      }),
                      u("span", {
                        className: n.mobileHeaderTitle,
                        children: ye.find((u) => u.id === l)?.label,
                      }),
                    ],
                  }),
                  u("div", { className: n.content, children: c() }),
                  x,
                ],
              }),
            ],
          })
        : u(k, {
            children: [
              u("div", {
                className: n.sidebar,
                children: [
                  u("div", {
                    className: n.sidebarTitle,
                    children: "Настройки",
                  }),
                  u("nav", {
                    children: ye.map((u) =>
                      u(
                        "button",
                        {
                          type: "button",
                          className: `${n.navItem} ${
                            l === u.id ? n.active : ""
                          }`,
                          onClick: () => b(u.id),
                          children: [
                            u(u.icon, { size: 24 }),
                            u("span", { children: u.label }),
                          ],
                        },
                        u.id
                      )
                    ),
                  }),
                ],
              }),
              u("div", {
                className: n.contentWrapper,
                children: [
                  u("div", { className: n.content, children: c() }),
                  x,
                ],
              }),
            ],
          }),
    }),
  });
}
export {
  CancelSubscriptionModal as CancelSubscriptionModal,
  zn as ChangePasswordModal,
  Qn as DeleteAccountModal,
  Is as EnableRenewalModal,
  za as SettingsModal,
  va as SubscriptionModal,
  _ as subscriptionApi,
  ja as useSettingsStore,
};
