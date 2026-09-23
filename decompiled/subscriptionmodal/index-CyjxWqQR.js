import {
  as as as_1,
  at as at_1,
  u as u_1,
  a9,
  aa as aa_1,
  d,
  B,
  M,
  ao,
  E,
  r,
  am,
  au,
  ap,
  av,
  n as n_1,
  G as G_1,
  aw,
  A as A_1,
  h,
  v,
  q,
  ax,
  a8,
  S,
  ay,
  u_1 as u_1_1,
  $,
  j,
  f,
  a2,
  az,
  t as A,
  m as ln,
  aA as on,
  o as cn,
  a5 as rn,
  aB as qe,
  B as xe,
  aj as dn,
  b as un,
  s as hn,
  aC as mn,
  x as $e,
  Y as ci,
} from "./index-B74jCtUp.js";

import { C as be } from "./index-DAU3jmJU.js";
import { I as pn } from "./IconInfo-DFYa2e8T.js";
import { I as fn } from "./IconNotificationMention-DZxRi2_K.js";
import { a as ie, n as ke } from "./api-B7pJeSy-.js";
import { I as gn } from "./IconChevronRight-CQP7oqfs.js";
import { I as vn } from "./IconChevronLeft-DjelCr6A.js";
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
      t._sentryDebugIds[a] = "812fd5c9-a025-494e-b21c-115d85cbd3d4";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-812fd5c9-a025-494e-b21c-115d85cbd3d4";
    }
  } catch {}
})();

const bn = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const Nn = () => {
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

const ge = (t) => {
  const a = t === "system" ? bn() : t;
  document.documentElement.setAttribute("data-theme", a);
};

const Ge = as_1()(
  at_1(
    (t) => ({
      theme: Nn(),

      setTheme: (a) => {
        ge(a);
        t({ theme: a });
      },

      toggleTheme: () =>
        t((a) => {
          const i = a.theme === "light" ? "dark" : "light";
          ge(i);
          return { theme: i };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (t) => {
        if (t?.theme) {
          ge(t.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (Ge.getState().theme === "system") {
        ge("system");
      }
    });
}

const wn = ({ size = 18 }) =>
  u_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      u_1("path", {
        fill: "currentColor",
        d: "M7.17 14.288c.03.12.064.238.102.354.213.661.543 1.251.926 1.772a3.964 3.964 0 0 1-2.036-1.164.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.16.014.32.025.477.036ZM9.002 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.006.202-.011.384-.01.56-.253.05-.49.126-.706.213a3.832 3.832 0 0 0-.803-.23v.001a5.083 5.083 0 0 0-2.274.149l-.009.003-.01.003c-2.594.808-3.54 3.168-3.364 5.22-1.696-.11-3.138-.427-3.744-1.285-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Z",
      }),
      u_1("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M17.758 11.709a2.743 2.743 0 0 0-1.751-1.575 3.024 3.024 0 0 0-1.38-.095c-.423.069-.806.313-1.128.54-.311-.218-.704-.466-1.129-.535a3.083 3.083 0 0 0-1.378.09c-1.768.55-2.312 2.412-1.818 3.893.77 2.377 4.084 3.888 4.225 3.952a.247.247 0 0 0 .2 0c.139-.063 3.404-1.548 4.22-3.95.261-.783.239-1.607-.061-2.32Z",
        clipRule: "evenodd",
      }),
    ],
  });

const Ee = ({ size = 18 }) =>
  u_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      u_1("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.453.038.891.066 1.317.084.034.63.168 1.26.406 1.864-.021.07-.043.153-.065.243a3.946 3.946 0 0 1-2.19-1.193.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.005.17-.01.327-.01.477a5.988 5.988 0 0 0-4.44 1.75l-.001.002a6.01 6.01 0 0 0-1.734 3.733c-2.108-.05-4.014-.307-4.735-1.328-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm1.963 9.894a3.977 3.977 0 0 0-.004.004l.004-.004Z",
      }),
      u_1("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.83 11.17a4.008 4.008 0 0 0-5.659 0 4.017 4.017 0 0 0-.805 4.506c.077.192.132.337.132.456 0 .141-.06.316-.117.486-.111.327-.238.698.034.969.27.271.642.143.97.031.167-.057.34-.117.48-.117.122 0 .277.062.455.134a4.019 4.019 0 0 0 4.51-.807 4.007 4.007 0 0 0 0-5.659Z",
        clipRule: "evenodd",
      }),
    ],
  });

const yn = ({ size = 18 }) =>
  u_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      u_1("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.479.04.941.069 1.389.087a4.72 4.72 0 0 0 .067 2.063 3.968 3.968 0 0 1-1.988-1.152.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.269 0 4.905 2.546 5.18 4.657-1.042.362-1.842 1.336-1.842 2.559v1.764c-1.79.208-3.352 1.368-4.009 3.012-2.228-.033-4.286-.261-5.042-1.332-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm3.919 10.944a2.894 2.894 0 0 1 .191.007l-.191-.007Z",
      }),
      u_1("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.835 15.172c0-.01.006-.018.006-.028v-4.477a3.56 3.56 0 0 0 1.259.5c.404.077.801-.17.885-.556.083-.387-.18-.764-.586-.842-1.136-.22-1.591-1.27-1.608-1.31a.756.756 0 0 0-.838-.446.725.725 0 0 0-.614.703v4.094a2.99 2.99 0 0 0-1.42-.365c-1.61 0-2.919 1.246-2.919 2.778C10 16.754 11.31 18 12.92 18c1.61 0 2.92-1.245 2.92-2.777 0-.018-.005-.033-.005-.051Z",
        clipRule: "evenodd",
      }),
    ],
  });

const Cn = ({ size = 18 }) =>
  u_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      u_1("path", {
        fill: "currentColor",
        d: "M6.694 14.252C7.151 14.291 7.593 14.318 8.021 14.336 8.121 15.23 8.613 16.004 9.322 16.484 9.215 16.494 9.106 16.5 8.997 16.5H8.995C7.933 16.5 6.927 16.055 6.162 15.25 6.077 15.163 6.023 15.051 6.006 14.931 5.989 14.81 6.011 14.687 6.068 14.58 6.186 14.36 6.439 14.233 6.694 14.252ZM9.001 1.5C12.603 1.5 14.223 4.592 14.223 6.786 14.223 7.063 14.216 7.303 14.208 7.525 14.203 7.697 14.199 7.855 14.198 8.007 14.133 8.003 14.067 8 14 8 12.343 8 11 9.343 11 11 9.517 11 8.287 12.076 8.045 13.489 5.928 13.44 4.012 13.185 3.288 12.16 2.942 11.671 2.908 11.069 3.187 10.373 3.838 8.981 3.822 8.464 3.792 7.525 3.784 7.303 3.777 7.062 3.777 6.786 3.777 4.592 5.398 1.5 9.001 1.5ZM13 11C13 10.448 13.448 10 14 10 14.552 10 15 10.448 15 11V17C15 17.552 14.552 18 14 18 13.448 18 13 17.552 13 17V11Z",
      }),
      u_1("path", {
        fill: "currentColor",
        d: "M11 15C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H11Z",
      }),
    ],
  });

const kn = ({ size = 24 }) =>
  u_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    children: u_1("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M8.078 10.367c0-.01.006-.019.006-.029V5.636a3.46 3.46 0 0 0 1.257.526.749.749 0 1 0 .299-1.469c-1.135-.23-1.589-1.333-1.606-1.375a.75.75 0 0 0-1.45.269v4.3a2.873 2.873 0 0 0-1.418-.384 2.92 2.92 0 0 0-2.916 2.918 2.92 2.92 0 0 0 2.916 2.916 2.92 2.92 0 0 0 2.917-2.916c0-.019-.005-.035-.005-.054ZM21.75 6.503a.749.749 0 0 0-1.067-.68c-2.557 1.189-5.245 1.683-7.982 1.469a.752.752 0 0 0-.568.196.752.752 0 0 0-.24.55v7.697a2.866 2.866 0 0 0-1.402-.377 2.907 2.907 0 0 0-2.903 2.904 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903v-6.925c.183.007.368.023.552.023 2.151 0 4.26-.427 6.303-1.228V14.2a2.87 2.87 0 0 0-1.403-.377 2.906 2.906 0 0 0-2.903 2.903 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903V6.502Z",
      "clip-rule": "evenodd",
    }),
  });

const Tn = ({ size = 20 }) =>
  u_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    children: u_1("path", {
      fill: "currentColor",
      d: "M9.905 2.501c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06H4.113c-2.422 0-4.113-1.67-4.113-4.06V6.56c0-2.391 1.691-4.06 4.113-4.06zm8.053 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675a1.43 1.43 0 0 1-1.412 1.436c-.215 0-.43-.05-.631-.153l-1.481-.748a1.62 1.62 0 0 1-.888-1.457V7.085c0-.621.34-1.18.888-1.456z",
    }),
  });

const Te = ({ size = 24 }) =>
  u_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      u_1("rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "2",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      u_1("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M2 10h20",
      }),
    ],
  });

const In = ({ size = 18 }) =>
  u_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 18 18",
    children: u_1("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 7 4 4 4-4",
    }),
  });

const Mn = ({ size = 24 }) =>
  u_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: u_1("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.723 10.043a.918.918 0 0 0-.658-.261c-1.069 0-1.939.832-1.939 1.853 0 .015 0 .049-.004.06l-.008 1.876c0 .22-.18.392-.41.392a.397.397 0 0 1-.41-.392V5.948c0-.366-.153-.722-.42-.98-.548-.52-1.48-.523-2.045.003-.27.27-.42.618-.42.977v5.034a.401.401 0 0 1-.409.391c-.219 0-.41-.182-.41-.391v-6.61a1.342 1.342 0 0 0-.422-.968 1.408 1.408 0 0 0-.471-.3 1.513 1.513 0 0 0-1.098-.001 1.426 1.426 0 0 0-.783.747c-.072.156-.11.342-.11.522v6.61a.401.401 0 0 1-.41.391c-.219 0-.41-.182-.41-.391V7.126c0-.736-.671-1.382-1.438-1.382C5.677 5.744 5 6.385 5 7.116v7.276c.023 1.768.759 3.426 2.074 4.67A7.162 7.162 0 0 0 12 21a7.16 7.16 0 0 0 4.926-1.937c1.315-1.245 2.052-2.907 2.074-4.684v-3.704c0-.241-.097-.461-.277-.632Z",
      clipRule: "evenodd",
    }),
  });

const Sn = ({ size = 24 }) =>
  u_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    children: u_1("path", {
      fill: "currentColor",
      d: "M16.5 3q5.4.1 5.5 5.4h-4.2c-2 0-3.6 1.6-3.6 3.5s1.6 3.4 3.6 3.4H22v.4q-.1 5.1-5.5 5.3h-9Q2 20.8 2 15.7V8.3Q2.1 3.2 7.5 3zm4.8 6.9q.6 0 .7.7v2.5q0 .7-.7.8h-3.5q-1.6-.1-2-1.6a2 2 0 0 1 .4-1.7 2 2 0 0 1 1.6-.7zm-3 1.1h-.4q-.3 0-.5.3-.2.1-.2.5 0 .6.7.7h.3q.8 0 .8-.7t-.8-.8m-6-4.1H6.8q-.6 0-.7.7t.7.8h5.7q.6-.1.7-.8t-.7-.7",
    }),
  });

const Pn = ({ size = 24 }) =>
  u_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: u_1("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M18.532 5.497C17.905 4.83 12.91 3 12 3c-.91 0-5.906 1.83-6.532 2.498-.497.533-.491.944-.452 3.218.016.923.037 2.18.037 3.919 0 6.07 6.75 8.322 6.818 8.345a.424.424 0 0 0 .258 0c.068-.023 6.818-2.276 6.818-8.345 0-1.735.021-2.99.037-3.912.038-2.28.046-2.691-.453-3.226Z",
      clipRule: "evenodd",
    }),
  });

const Ae = ({ size = 24 }) =>
  u_1("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      u_1("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M21 12V7H5a2 2 0 0 1 0-4h14v4",
      }),
      u_1("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M3 5v14a2 2 0 0 0 2 2h16v-5",
      }),
      u_1("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M18 12a2 2 0 0 0 0 4h4v-4h-4Z",
      }),
    ],
  });

const xn = "vjdE";
const $n = "hlHD";
const Le = { toggle: xn, active: $n };
function Q({ checked, onChange, disabled }) {
  const h = (s) => {
    s.stopPropagation();

    if (!disabled) {
      onChange(!checked);
    }
  };
  return u_1("button", {
    type: "button",
    className: `${Le.toggle} ${checked ? Le.active : ""}`,
    onClick: h,
    disabled: disabled,
    role: "switch",
    "aria-checked": checked,
  });
}

const Z = {
  async getStatus() {
    return a9.get(aa_1.subscription.status);
  },
  async pay(t) {
    return a9.post(aa_1.subscription.pay, t ? { methodId: t } : undefined);
  },
  async setAutoRenewal(t) {
    return a9.post(aa_1.subscription.autoRenewal, { enabled: t });
  },
  async bindCard(t = "bank_card") {
    return a9.post(aa_1.subscription.bindCard, { type: t });
  },
  async getMethods() {
    return (await a9.get(aa_1.subscription.methods)).data;
  },
  async setDefaultMethod(t) {
    return a9.put(aa_1.subscription.methodDefault(t));
  },
  async deleteMethod(t) {
    return a9.delete(aa_1.subscription.methodDelete(t));
  },
};

const Ie = {
  async list() {
    return (await a9.get(aa_1.sessions.list))?.sessions ?? [];
  },
  async revoke(t, a) {
    await a9.delete(aa_1.sessions.revoke(t));
    return { loggedOut: a };
  },
  async revokeOthers() {
    return (await a9.delete(aa_1.sessions.revokeOthers))?.revokedCount ?? 0;
  },
};

const En = "kucm";
const An = "ytMJ";
const Ln = "Io88";
const Rn = "Vbj9";
const Dn = "IgpT";
const Bn = "Eqk0";
const Un = "mACd";
const On = "TcMX";
const Hn = "dMZs";
const _n = "L5ZP";

const K = {
  inputWrapper: En,
  label: An,
  hint: Ln,
  input: Rn,
  error: Dn,
  small: Bn,
  medium: Un,
  large: On,
  default: "hXb7",
  outline: Hn,
  errorText: _n,
};

function de({
  value,
  onChange,
  label,
  hint,
  error,
  size = "medium",
  variant = "default",
  className,
  ...k
}) {
  const g = (I) => {
    onChange?.(I.currentTarget.value);
  };
  return u_1("div", {
    className: K.inputWrapper,
    children: [
      label &&
        u_1("label", {
          className: K.label,
          children: [
            label,
            hint && u_1("span", { className: K.hint, children: hint }),
          ],
        }),
      u_1("input", {
        className: `${K.input} ${K[d]} ${K[m]} ${error ? K.error : ""} ${
          className || ""
        }`,
        value: value,
        onInput: g,
        ...k,
      }),
      error && u_1("span", { className: K.errorText, children: error }),
    ],
  });
}
const zn = "A6Za";
const Wn = "c6iL";
const Vn = "b9f7";
const Zn = "Uf5F";
const Fn = "ZnL1";
const jn = "WZUf";
const qn = "Ne8X";

const V = {
  form: zn,
  field: Wn,
  label: Vn,
  hint: Zn,
  fieldError: Fn,
  error: jn,
  actions: qn,
};

function Gn({ onClose, onBack }) {
  const [i, h] = d("");
  const [s, d] = d("");
  const [m, c] = d("");
  const [k, g] = d(false);
  const [I, w] = d(null);
  const [v, y] = d({});

  const S = async (x) => {
    x.preventDefault();
    w(null);
    y({});

    if (s !== m) {
      y({ confirmPassword: "Пароли не совпадают" });
      return;
    }

    if (s.length < 10) {
      y({ newPassword: "Минимум 10 символов" });
      return;
    }
    if (s.length > 128) {
      y({ newPassword: "Максимум 128 символов" });
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(s)) {
      y({ newPassword: "Только латиница, цифры и знаки пунктуации" });
      return;
    }
    g(true);
    try {
      await ao.changePassword({ currentPassword: i, newPassword: s });
      await E.getState().logout();
      onClose();
    } catch (o) {
      if (r(o)) {
        if (o.code === am.ACCOUNT_CURRENT_PASSWORD_INCORRECT) {
          y({ currentPassword: "Неверный текущий пароль" });
        } else if (o.errors) {
          const f = {};
          for (const [N, b] of Object.entries(o.errors)) {
            f[N] = au(b[0] || "Ошибка валидации");
          }
          y(f);
        } else {
          w(ap(o.code, o.message || "Не удалось сменить пароль"));
        }
      } else {
        w("Не удалось сменить пароль");
      }
    } finally {
      g(false);
    }
  };

  const P = i.length > 0 && s.length >= 10 && m.length > 0;
  return u_1(M, {
    onClose: onBack,
    title: "Смена пароля",
    children: u_1("form", {
      onSubmit: S,
      className: V.form,
      children: [
        u_1("div", {
          className: V.field,
          children: [
            u_1("label", { className: V.label, children: "Текущий пароль" }),
            u_1(de, {
              type: "password",
              value: i,
              onChange: h,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            v.currentPassword &&
              u_1("span", {
                className: V.fieldError,
                children: v.currentPassword,
              }),
          ],
        }),
        u_1("div", {
          className: V.field,
          children: [
            u_1("label", { className: V.label, children: "Новый пароль" }),
            u_1(de, {
              type: "password",
              value: s,
              onChange: d,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            u_1("span", {
              className: V.hint,
              children: "Минимум 10 символов, латиница, цифры и пунктуация",
            }),
            v.newPassword &&
              u_1("span", { className: V.fieldError, children: v.newPassword }),
          ],
        }),
        u_1("div", {
          className: V.field,
          children: [
            u_1("label", {
              className: V.label,
              children: "Подтверждение пароля",
            }),
            u_1(de, {
              type: "password",
              value: m,
              onChange: c,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            v.confirmPassword &&
              u_1("span", {
                className: V.fieldError,
                children: v.confirmPassword,
              }),
          ],
        }),
        I && u_1("div", { className: V.error, children: I }),
        u_1("div", {
          className: V.actions,
          children: [
            u_1(B, {
              type: "button",
              variant: "secondary",
              onClick: onBack,
              disabled: k,
              children: "Отмена",
            }),
            u_1(B, {
              type: "submit",
              disabled: !P || k,
              children: k ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
      ],
    }),
  });
}
const Xn = "IJqv";
const Jn = "oOGd";
const Yn = "p7WN";
const Qn = "kzJg";
const me = { content: Xn, title: Jn, subtitle: Yn, actions: Qn };
function Kn({ onClose }) {
  const a = async () => {
    await E.getState().deleteAccount();
    onClose();
  };
  return u_1(M, {
    onClose: onClose,
    showHeader: false,
    children: u_1("div", {
      className: me.content,
      children: [
        u_1("h2", { className: me.title, children: "Удалить аккаунт?" }),
        u_1("p", {
          className: me.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        u_1("div", {
          className: me.actions,
          children: [
            u_1(B, {
              variant: "secondary",
              onClick: (i) => {
                i.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            u_1(B, {
              variant: "danger",
              onClick: (i) => {
                i.stopPropagation();
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
const et = "h0cl";
const nt = "CZCV";
const tt = "cq8G";
const st = "GRcz";
const at = "wKQA";
const it = "gwgd";
const lt = "okkM";
const ot = "LZ9d";
const ct = "RsWk";
const rt = "V9f0";
const dt = "TMjq";
const ut = "kWoP";
const ht = "bfQz";
const mt = "JdnV";
const pt = "AMER";
const ft = "VVgY";
const gt = "svTn";
const vt = "hZ48";
const bt = "zkt9";
const Nt = "skHa";
const wt = "RvMt";
const yt = "u4QX";
const Ct = "ePG9";
const kt = "IV7x";
const Tt = "eEyr";
const It = "mI78";
const Mt = "vdbx";
const St = "XdeG";
const Pt = "OFXl";
const xt = "i4Sy";
const $t = "pPHf";
const Et = "D9FB";
const At = "JI8W";
const Lt = "TyQ0";
const Rt = "Y0BX";
const Dt = "xQDI";
const Bt = "wKIH";
const Ut = "hmlI";
const Ot = "wMIP";
const Ht = "pgeP";
const _t = "BuZM";
const zt = "XWrT";
const Wt = "XF6O";
const Vt = "I7Ex";
const Zt = "xHNS";
const Ft = "wJF2";
const jt = "Fr7u";
const qt = "xpCz";
const Gt = "dBXY";
const Xt = "F92z";
const Jt = "cSa0";
const Yt = "WUjp";
const Qt = "ezE0";
const Kt = "NIZY";
const es = "PLsb";
const ns = "Dnv6";
const ts = "Mu5Q";
const ss = "S9H0";
const as = "IiwT";
const is = "UJC2";
const ls = "ydUq";
const os = "nH26";
const cs = "MXgV";
const rs = "tFHl";
const ds = "aZON";
const us = "jXN7";
const hs = "CTEM";
const ms = "o5O3";
const ps = "IuAh";
const fs = "J6mp";
const gs = "b0E8";
const vs = "L1iu";
const bs = "eCEy";
const Ns = "VD2e";

const n = {
  modalContainer: et,
  settingsModal: nt,
  sidebar: tt,
  sidebarTitle: st,
  navItem: at,
  active: it,
  contentWrapper: lt,
  content: ot,
  actionBar: ct,
  contentTitle: rt,
  subscriptionCancel: dt,
  subscriptionRenew: ut,
  paymentMethodsList: ht,
  paymentMethodRow: mt,
  paymentMethodIcon: pt,
  paymentMethodInfo: ft,
  paymentMethodTitle: gt,
  paymentMethodBadge: vt,
  paymentMethodSubtitle: bt,
  paymentMethodActions: Nt,
  paymentMethodAdd: wt,
  paymentMethodsEmpty: yt,
  paymentMethodBtn: Ct,
  paymentMethodBtnDanger: kt,
  section: Tt,
  sectionTitle: It,
  settingItem: Mt,
  clickable: St,
  column: Pt,
  settingInfo: xt,
  settingIcon: $t,
  blue: Et,
  red: At,
  purple: Lt,
  settingText: Rt,
  settingTitle: Dt,
  settingDescription: Bt,
  settingControl: Ut,
  sessionsList: Ot,
  sessionItem: Ht,
  sessionIcon: _t,
  sessionInfo: zt,
  sessionDevice: Wt,
  sessionTime: Vt,
  sessionCurrentBadge: Zt,
  sessionRemove: Ft,
  avatarDisplay: jt,
  pinGrid: qt,
  pinItem: Gt,
  pinActive: Xt,
  pinImage: Jt,
  pinName: Yt,
  bioTextarea: Qt,
  fieldError: Kt,
  saveError: es,
  emptyBlocklist: ns,
  blockedUsersList: ts,
  blockedUserItem: ss,
  blockedUserInfo: as,
  blockedUserName: is,
  blockedUserUsername: ls,
  deleteAccountButton: os,
  logoutButton: cs,
  mobilePager: rs,
  detailOpen: ds,
  mobileScreen: us,
  mobileMenuTitle: hs,
  mobileMenu: ms,
  mobileMenuItem: ps,
  mobileMenuIcon: fs,
  mobileMenuChevron: gs,
  mobileHeader: vs,
  mobileBack: bs,
  mobileHeaderTitle: Ns,
};

const ws = av(({ onDirtyChange, onSavingChange, onClose }, s) => {
  const d = E((T) => T.profile);

  const m = E((T) => T.logout);

  const { openModal, closeModal } = n_1();
  const g = G_1();
  const [I] = aw();
  const w = I?.url || window.location.pathname;
  const [v, y] = d(true);
  const [S, P] = d(false);
  const [x, o] = d(false);
  const [f, N] = d({});
  const [b, B] = d(null);
  const [p, L] = d(null);
  const [r, $] = d({ name: "", username: "", bio: "", avatar: "😀" });
  const [E, z] = d([]);
  const [C, q] = d(null);
  const O = A_1(null);
  const [we, ye] = d(true);

  onClose(() => {
    if (d) {
      const T = {
        name: d.displayName,
        username: d.username || "",
        bio: d.bio || "",
        avatar: d.clanAvatar ?? d.avatar,
      };
      $(T);
      L(T);
      y(false);
      const U = d.pin ?? null;
      q(U);
      O.current = U;
    }
  }, [d]);

  onClose(() => {
    v.getMyPins()
      .then((T) => {
        z(T.pins);

        if (T.activePin && !O.current) {
          const U = T.pins.find((H) => H.slug === T.activePin);

          if (U) {
            q(U);
            O.current = U;
          }
        }
      })
      .catch(() => z([]))
      .finally(() => ye(false));
  }, []);

  onClose(() => {
    onDirtyChange(x);
  }, [x]);

  onClose(() => {
    onSavingChange(S);
  }, [S]);

  const M = q(
    (T, U) => {
      if (!p) {
        return false;
      }

      const H = Object.keys(T).some((se) => T[se] !== p[se]);

      const j = (U?.slug ?? null) !== (O.current?.slug ?? null);
      return H || j;
    },
    [p]
  );

  const R = (T, U) => {
    if (f[T]) {
      N((H) => {
        const j = { ...H };
        delete j[T];
        return j;
      });
    }

    B(null);

    $((H) => {
      const j = { ...H, [T]: U };
      o(M(j, C));
      return j;
    });
  };

  const Y = q(
    (T) => {
      const U = C?.slug === T.slug ? null : T;
      q(U);
      o(M(r, U));
    },
    [C, r, M]
  );

  const Ce = async () => {
    if (!x || S) {
      return;
    }
    P(true);
    N({});
    B(null);
    const T = p?.username;
    const r_username = r.username;
    try {
      if (p && Object.keys(r).some((ce) => r[ce] !== p[ce])) {
        await v.updateProfile({
          displayName: r.name,
          username: r.username || undefined,
          bio: r.bio || null,
        });
      }

      if ((C?.slug ?? null) !== (O.current?.slug ?? null)) {
        if (C) {
          await v.setActivePin(C.slug);
        } else {
          await v.removeActivePin();
        }
      }

      L({ ...r });
      O.current = C;
      o(false);
      const se = E.getState().profile;

      if (se) {
        E.getState().setProfile({
          ...se,
          displayName: r.name,
          username: r.username,
          bio: r.bio || null,
          pin: C,
        });
      }

      if (
        r_username &&
        r_username !== T &&
        (w === `/@${T}` || w === `/@${d?.id}`)
      ) {
        u_1_1(`/@${r_username}`);
      }
    } catch (H) {
      console.error("Failed to save profile:", H);

      if (r(H)) {
        if (H.errors) {
          const j = {};
          for (const [se, ce] of Object.entries(H.errors)) {
            j[se] = au(ce[0] || "Ошибка валидации");
          }
          N(j);
        } else {
          B(ap(H.code, H.message || "Не удалось сохранить изменения"));
        }
      } else {
        B("Не удалось сохранить изменения");
      }
    } finally {
      P(false);
    }
  };

  const he = () => {
    if (p) {
      $({ ...p });
      q(O.current);
      o(false);
    }
  };

  ax(s, () => ({
    save: Ce,
    discard: he,
  }));

  return v
    ? u_1(S, {
        children: [
          u_1("h2", { className: n.contentTitle, children: "Аккаунт" }),
          u_1(a8, {}),
        ],
      })
    : u_1(S, {
        children: [
          u_1("h2", { className: n.contentTitle, children: "Аккаунт" }),
          u_1("div", {
            className: n.section,
            children: [
              u_1("div", {
                className: n.settingItem,
                children: [
                  u_1("div", {
                    className: n.settingInfo,
                    children: u_1("div", {
                      className: n.settingText,
                      children: [
                        u_1("span", {
                          className: n.settingTitle,
                          children: "Эмоджи-клан",
                        }),
                        u_1("span", {
                          className: n.settingDescription,
                          children: "Выбран при регистрации. Изменить нельзя",
                        }),
                      ],
                    }),
                  }),
                  u_1("div", {
                    className: n.avatarDisplay,
                    children: r.avatar,
                  }),
                ],
              }),
              u_1("div", {
                className: n.settingItem,
                children: [
                  u_1("div", {
                    className: n.settingInfo,
                    children: u_1("div", {
                      className: n.settingText,
                      children: [
                        u_1("span", {
                          className: n.settingTitle,
                          children: "Имя",
                        }),
                        u_1("span", {
                          className: n.settingDescription,
                          children: "Ваше отображаемое имя",
                        }),
                      ],
                    }),
                  }),
                  u_1("div", {
                    className: n.settingControl,
                    children: [
                      u_1(de, {
                        value: r.name,
                        onChange: (T) => R("name", T),
                      }),
                      f.displayName &&
                        u_1("span", {
                          className: n.fieldError,
                          children: f.displayName,
                        }),
                    ],
                  }),
                ],
              }),
              u_1("div", {
                className: n.settingItem,
                children: [
                  u_1("div", {
                    className: n.settingInfo,
                    children: u_1("div", {
                      className: n.settingText,
                      children: [
                        u_1("span", {
                          className: n.settingTitle,
                          children: "Username",
                        }),
                        u_1("span", {
                          className: n.settingDescription,
                          children:
                            "Ваш уникальный идентификатор (только латиница, цифры и _)",
                        }),
                      ],
                    }),
                  }),
                  u_1("div", {
                    className: n.settingControl,
                    children: [
                      u_1(de, {
                        value: r.username,
                        onChange: (T) => R("username", T),
                      }),
                      f.username &&
                        u_1("span", {
                          className: n.fieldError,
                          children: f.username,
                        }),
                    ],
                  }),
                ],
              }),
              u_1("div", {
                className: `${n.settingItem} ${n.column}`,
                children: [
                  u_1("div", {
                    className: n.settingInfo,
                    children: u_1("div", {
                      className: n.settingText,
                      children: [
                        u_1("span", {
                          className: n.settingTitle,
                          children: "О себе",
                        }),
                        u_1("span", {
                          className: n.settingDescription,
                          children: "Расскажите немного о себе",
                        }),
                      ],
                    }),
                  }),
                  u_1("textarea", {
                    className: n.bioTextarea,
                    value: r.bio,
                    onChange: (T) => R("bio", T.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  f.bio &&
                    u_1("span", { className: n.fieldError, children: f.bio }),
                ],
              }),
              !we &&
                E.length > 0 &&
                u_1("div", {
                  className: `${n.settingItem} ${n.column}`,
                  children: [
                    u_1("div", {
                      className: n.settingInfo,
                      children: u_1("div", {
                        className: n.settingText,
                        children: [
                          u_1("span", {
                            className: n.settingTitle,
                            children: "Пин",
                          }),
                          u_1("span", {
                            className: n.settingDescription,
                            children: "Отображается рядом с именем",
                          }),
                        ],
                      }),
                    }),
                    u_1("div", {
                      className: n.pinGrid,
                      children: E.map((T) =>
                        u_1(
                          "button",
                          {
                            className: `${n.pinItem} ${
                              C?.slug === T.slug ? n.pinActive : ""
                            }`,
                            onClick: () => Y(T),
                            disabled: S,
                            title: T.description || T.name,
                            type: "button",
                            children: [
                              u_1("img", {
                                src: T.url,
                                alt: T.name,
                                className: n.pinImage,
                              }),
                              u_1("span", {
                                className: n.pinName,
                                children: T.name,
                              }),
                            ],
                          },
                          T.slug
                        )
                      ),
                    }),
                  ],
                }),
              b && u_1("div", { className: n.saveError, children: b }),
            ],
          }),
          g &&
            u_1("div", {
              className: n.section,
              children: u_1("button", {
                type: "button",
                className: n.logoutButton,
                onClick: () => {
                  m();
                  onClose();
                },
                children: [
                  u_1(ay, { size: 20 }),
                  u_1("span", { children: "Выйти из аккаунта" }),
                ],
              }),
            }),
          u_1("div", {
            className: n.section,
            children: u_1("button", {
              type: "button",
              className: n.deleteAccountButton,
              onClick: () => openModal(u_1(Kn, { onClose: closeModal })),
              children: "Удалить аккаунт",
            }),
          }),
        ],
      });
});

const ys = "cv53";
const Cs = "YyqZ";
const ks = "PxLU";
const Ts = "T53x";
const pe = { content: ys, title: Cs, subtitle: ks, actions: Ts };

export function CancelSubscriptionModal({ expiresAt, onConfirm, onClose }) {
  const [h, s] = d(false);

  const d = new Date(expiresAt).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const m = async () => {
    if (!h) {
      s(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        s(false);
      }
    }
  };

  return u_1(M, {
    onClose: onClose,
    showHeader: false,
    children: u_1("div", {
      className: pe.content,
      children: [
        u_1("h2", {
          className: pe.title,
          children: "Отключить автопродление?",
        }),
        u_1("p", {
          className: pe.subtitle,
          children: [
            "Подписка будет действовать до ",
            d,
            ". После этой даты она просто не продлится автоматически. Вы сможете включить автопродление обратно в любой момент.",
          ],
        }),
        u_1("div", {
          className: pe.actions,
          children: [
            u_1(B, {
              variant: "secondary",
              onClick: (c) => {
                c.stopPropagation();
                onClose();
              },
              children: "Оставить",
            }),
            u_1(B, {
              variant: "danger",
              onClick: (c) => {
                c.stopPropagation();
                m();
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

const Ms = "HgJ1";
const Ss = "zpEU";
const Ps = "KeYx";
const xs = "aKH7";
const $s = "inUt";
const re = {
  content: Ms,
  title: Ss,
  subtitle: Ps,
  disclaimer: xs,
  actions: $s,
};
function Es({ onConfirm, onClose }) {
  const [i, h] = d(false);

  const s = async () => {
    if (!i) {
      h(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        h(false);
      }
    }
  };

  return u_1(M, {
    onClose: onClose,
    showHeader: false,
    children: u_1("div", {
      className: re.content,
      children: [
        u_1("h2", { className: re.title, children: "Включить автопродление?" }),
        u_1("p", {
          className: re.subtitle,
          children:
            "Подписка будет автоматически продлеваться каждый месяц. Средства будут списываться с привязанной карты.",
        }),
        u_1("p", {
          className: re.disclaimer,
          children: [
            "Нажимая «Включить», вы соглашаетесь с",
            " ",
            u_1("a", {
              href: "/subscription-terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями подписки",
            }),
            ",",
            " ",
            u_1("a", {
              href: "/privacy",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "политикой конфиденциальности",
            }),
            " и",
            " ",
            u_1("a", {
              href: "/terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями использования",
            }),
            ".",
          ],
        }),
        u_1("div", {
          className: re.actions,
          children: [
            u_1(B, {
              variant: "secondary",
              onClick: (d) => {
                d.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            u_1(B, {
              variant: "primary",
              onClick: (d) => {
                d.stopPropagation();
                s();
              },
              disabled: i,
              children: "Включить",
            }),
          ],
        }),
      ],
    }),
  });
}

const As = [
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

const Ls = 2247;
const Rs = 157;

const Pe = [
  null,
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

const Pe_length = Pe.length;
const G = 370 / 1080;
const Ds = 605;
const Bs = 40;
const Us = { s: 14, x: 623 };
const Os = { s: 15, x: 629 };
function Hs(t, a) {
  const i = (t + a + 200) / G;
  const h = Pe.slice();
  let s = 1785;
  let d = 218;
  let m = true;
  for (let c = 98; c < Pe_length && ((d += 18), (s += d), !(s > i)); c++) {
    const k = m ? Os : Us;
    h[c] = [k.s, k.x, s];
    m = !m;
  }
  return h;
}
function _s() {
  const t = A_1(null);
  const a = A_1(null);
  const i = A_1({ f: 0, ts: 0, tl: Pe.slice(), xOff: 0, yOff: 0 });

  h(() => {
    const a_current = a.current;
    const t_current = t.current;
    if (!a_current || !t_current) {
      return;
    }
    function d() {
      const { innerHeight, innerWidth } = window;

      const t_current_parentElement = t_current.parentElement;
      let S;
      let P;
      if (t_current_parentElement) {
        const f = t_current_parentElement.getBoundingClientRect();
        S = f.top;
        P = f.left + (f.width - 370) / 2;
      } else {
        S = (innerHeight - 900) / 2;
        P = (innerWidth - 370) / 2;
      }
      const x = innerWidth <= 1173;
      i.current.yOff = 357 * G - S + (x ? 60 : 0);
      const o = 260;
      i.current.xOff = Ds * G - P - o;
      i.current.tl = Hs(innerHeight, i.current.yOff);
    }
    const m = setTimeout(d, 260);
    let c;
    const k = () => {
      clearTimeout(c);
      c = setTimeout(d, 150);
    };
    window.addEventListener("resize", k);
    let g;
    function I(w) {
      const i_current = i.current;
      if (w - i_current.ts >= Bs) {
        const y = i_current.tl[i_current.f];
        if (!y) {
          a_current.style.visibility = "hidden";
        } else {
          const [S, P, x] = y;
          const [o, , f, N] = As[S];
          const b = (f * G + 0.5) | 0;
          const B = (N * G + 0.5) | 0;
          a_current.style.cssText = `visibility:visible;width:${b}px;height:${B}px;background-image:url(/assets/nuksta/nuksta-chechik-sprite.png);background-repeat:no-repeat;image-rendering:pixelated;will-change:transform;background-position:${-(
            (o * G + 0.5) |
            0
          )}px 0px;background-size:${(Ls * G + 0.5) | 0}px ${
            (Rs * G + 0.5) | 0
          }px;transform:translate(${(P * G - i_current.xOff + 0.5) | 0}px,${
            (x * G - i_current.yOff + 0.5) | 0
          }px)`;
        }
        i_current.f = (i_current.f + 1) % Pe_length;
        i_current.ts = w;
      }
      g = requestAnimationFrame(I);
    }
    g = requestAnimationFrame(I);

    return () => {
      cancelAnimationFrame(g);
      clearTimeout(m);
      clearTimeout(c);
      window.removeEventListener("resize", k);
    };
  }, []);

  return u_1(S, {
    children: [
      u_1("div", {
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
        u_1("div", {
          style: {
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 99999,
            overflow: "hidden",
          },
          children: u_1("div", {
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
const zs = "vGqB";
const Ws = "VPbL";
const Vs = "drba";
const Zs = "ShkP";
const Fs = "wIks";
const js = "FQml";
const qs = "YY27";
const Gs = "U044";
const Xs = "tfb4";
const Js = "VN7X";
const Ys = "c4Vy";
const Qs = "jI17";
const Ks = "w1q0";
const ea = "AUaV";
const na = "f2Zm";
const ta = "j5vD";
const sa = "Rjq4";
const aa = "Jlba";
const ia = "wgU7";
const la = "l1Hn";
const oa = "YRwj";
const ca = "AmnJ";
const ra = "hM2n";
const da = "TAuJ";
const ua = "j8bL";
const ha = "JDhG";
const ma = "r5Ww";
const pa = "JXcd";
const fa = "NvtR";
const ga = "k2vG";
const va = "Y2b6";
const ba = "e1GE";
const Na = "mmE0";
const wa = "Cff4";

const u = {
  modal: zs,
  sub: Ws,
  top: Vs,
  bottom: Zs,
  title: Fs,
  section: js,
  profileSection: qs,
  label: Gs,
  labelRow: Xs,
  dim: Js,
  row: Ys,
  icon: Qs,
  iconGradient: Ks,
  name: ea,
  nameGradient: na,
  namePinBadge: ta,
  promoVideo: sa,
  features: aa,
  featureContent: ia,
  featureTitle: la,
  gradientText: oa,
  soon: ca,
  infoBtn: ra,
  footer: da,
  disclaimer: ua,
  methodSelectRow: ha,
  methodSelectLabel: ma,
  methodSelect: pa,
  chargeInfo: fa,
  consentLink: ga,
  subscribeBtn: va,
  btnLoading: ba,
  btnSpinner: Na,
  activeLabel: wa,
};

function Re({ text }) {
  return u_1(az, {
    text: text,
    multiline: true,
    children: u_1("span", {
      className: u.infoBtn,
      children: u_1(pn, { size: 14 }),
    }),
  });
}
const fe = "new";
function ya(t) {
  return t.type === "bank_card"
    ? `${t.cardBrand || "Карта"} •••• ${t.cardLast4 || ""}`.trim()
    : t.type === "sbp"
    ? "СБП"
    : t.type;
}
function Ca({ isOpen, onClose }) {
  const i = j();
  const [h, s] = d(false);
  const [d, m] = d(false);
  const [c, k] = d([]);
  const [g, I] = d(fe);
  const [w, v] = d(199);

  h(() => {
    if (isOpen) {
      Z.getStatus()
        .then((f) => {
          m(!!f.recurringEnabled);

          if (typeof f.price == "number") {
            v(f.price);
          }

          if (f.recurringEnabled) {
            Z.getMethods()
              .then((N) => {
                k(N);
                const b = N.find((B) => B.isDefault) || N[0];
                I(b ? b.id : fe);
              })
              .catch(() => k([]));
          }
        })
        .catch(() => m(false));
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const y = i?.subscription?.isActive ?? false;
  const S = new Date();
  S.setMonth(S.getMonth() + 1);
  const P = S.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  const x = d && g !== fe;

  const o = async () => {
    if (h) {
      return;
    }
    s(true);

    if (x) {
      try {
        const N = await Z.pay(g);
        if (N.error) {
          A.error(N.error);
          return;
        }
        A.success("Подписка оформлена!");
        onClose();

        E.getState()
          .fetchProfile()
          .catch(() => {});
      } catch (N) {
        A.error(
          N instanceof Error && N.message ? N.message : "Ошибка при оплате"
        );
      } finally {
        s(false);
      }
      return;
    }

    const f = window.open("about:blank", "_blank");
    try {
      const N = await Z.pay();
      if (N.error) {
        f?.close();
        A.error(N.error);
        return;
      }

      if (N.confirmationUrl && f) {
        f.location.href = N.confirmationUrl;
      } else if (N.confirmationUrl) {
        window.location.href = N.confirmationUrl;
      }
    } catch (N) {
      f?.close();

      A.error(
        N instanceof Error && N.message
          ? N.message
          : "Ошибка при создании платежа"
      );
    } finally {
      s(false);
    }
  };

  return $(
    u_1(M, {
      onClose: onClose,
      showHeader: false,
      frameless: true,
      className: u.modal,
      children: [
        u_1(_s, {}),
        u_1("div", {
          className: u.sub,
          children: [
            u_1("div", {
              className: u.top,
              children: [
                u_1("div", { className: u.title, children: "ИТД НУКСТА" }),
                u_1("div", {
                  className: `${u.section} ${u.profileSection}`,
                  children: [
                    u_1("div", {
                      className: u.label,
                      children: "Ваш профиль с ИТД НУКСТА",
                    }),
                    u_1("div", {
                      className: u.row,
                      children: [
                        u_1(f, { src: i?.avatar || null, size: "sm" }),
                        u_1("div", {
                          children: [
                            u_1("div", {
                              className: u.name,
                              children: [
                                u_1("span", {
                                  className: u.nameGradient,
                                  children: i?.displayName,
                                }),
                                u_1("img", {
                                  src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                  alt: "НУКСТА",
                                  width: 24,
                                  height: 24,
                                  className: u.namePinBadge,
                                }),
                              ],
                            }),
                            u_1("div", {
                              className: u.dim,
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
            u_1("video", {
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
              className: u.promoVideo,
            }),
            u_1("div", {
              className: u.bottom,
              children: [
                u_1("div", {
                  className: u.section,
                  children: [
                    u_1("div", {
                      className: u.labelRow,
                      children: [
                        u_1("span", {
                          className: u.label,
                          children: "Прикольные украшалки",
                        }),
                        u_1(Re, {
                          text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                        }),
                      ],
                    }),
                    u_1("div", {
                      className: u.features,
                      children: [
                        u_1("div", {
                          className: u.row,
                          children: [
                            u_1("span", {
                              className: u.icon,
                              children: u_1("div", {
                                className: u.iconGradient,
                              }),
                            }),
                            u_1("div", {
                              children: u_1("div", {
                                className: `${u.featureTitle} ${u.gradientText}`,
                                children: "Уникальный цвет ника",
                              }),
                            }),
                          ],
                        }),
                        u_1("div", {
                          className: u.row,
                          children: [
                            u_1("span", {
                              className: u.icon,
                              children: u_1("img", {
                                src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                alt: "Пин",
                                width: 20,
                                height: 20,
                              }),
                            }),
                            u_1("div", {
                              children: u_1("div", {
                                className: u.featureTitle,
                                children: "Пин поддерживателя",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u_1("div", {
                  className: u.section,
                  children: [
                    u_1("div", {
                      className: u.labelRow,
                      children: [
                        u_1("span", {
                          className: u.label,
                          children: "Сможете с нами тестить новые штуки",
                        }),
                        u_1(Re, {
                          text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                        }),
                      ],
                    }),
                    u_1("div", {
                      className: u.features,
                      children: [
                        u_1("div", {
                          className: u.row,
                          children: [
                            u_1("span", {
                              className: u.icon,
                              children: u_1(Tn, { size: 20 }),
                            }),
                            u_1("div", {
                              className: u.featureContent,
                              children: u_1("div", {
                                className: u.featureTitle,
                                children: "Загрузка видео",
                              }),
                            }),
                          ],
                        }),
                        u_1("div", {
                          className: u.row,
                          children: [
                            u_1("span", {
                              className: u.icon,
                              children: u_1(a2, { size: 20 }),
                            }),
                            u_1("div", {
                              className: u.featureContent,
                              children: u_1("div", {
                                className: u.featureTitle,
                                children: [
                                  "Сообщения ",
                                  u_1("span", {
                                    className: u.soon,
                                    children: "soon",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        u_1("div", {
                          className: u.row,
                          children: [
                            u_1("span", {
                              className: u.icon,
                              children: u_1(kn, { size: 20 }),
                            }),
                            u_1("div", {
                              className: u.featureContent,
                              children: u_1("div", {
                                className: u.featureTitle,
                                children: [
                                  "Музыка ",
                                  u_1("span", {
                                    className: u.soon,
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
                u_1("div", {
                  className: u.footer,
                  children: [
                    !y &&
                      c.length > 0 &&
                      u_1("label", {
                        className: u.methodSelectRow,
                        children: [
                          u_1("span", {
                            className: u.methodSelectLabel,
                            children: "Сохранённый способ оплаты",
                          }),
                          u_1("select", {
                            className: u.methodSelect,
                            value: g,
                            onChange: (f) => I(f.target.value),
                            children: [
                              c.map((f) =>
                                u_1(
                                  "option",
                                  { value: f.id, children: ya(f) },
                                  f.id
                                )
                              ),
                              u_1("option", {
                                value: fe,
                                children: "Новый способ оплаты",
                              }),
                            ],
                          }),
                        ],
                      }),
                    !y &&
                      u_1("div", {
                        className: u.chargeInfo,
                        children: [
                          "Сегодня спишется ",
                          w,
                          " ₽, далее ежемесячно — следующее списание ",
                          P,
                          ".",
                        ],
                      }),
                    y
                      ? u_1("div", {
                          className: u.activeLabel,
                          children: "Подписка активна",
                        })
                      : u_1("button", {
                          type: "button",
                          className: u.subscribeBtn,
                          onClick: o,
                          disabled: h,
                          children: h
                            ? u_1("span", {
                                className: u.btnLoading,
                                children: [
                                  u_1(a8, {
                                    size: "xs",
                                    className: u.btnSpinner,
                                  }),
                                  "Оплачиваем…",
                                ],
                              })
                            : `Оплатить ${w}₽ на месяц`,
                        }),
                    !y &&
                      u_1("div", {
                        className: u.disclaimer,
                        children: [
                          "Нажимая кнопку, вы принимаете ",
                          u_1("a", {
                            href: "/recurring-terms",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: u.consentLink,
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

const ka = {
  yoo_money: "ЮMoney",
  sberbank: "SberPay",
  tinkoff_bank: "T-Pay",
  sbp: "СБП",
  mobile_balance: "Баланс телефона",
  sber_loan: "Кредит от СберБанка",
  sber_bnpl: "Плати частями",
  cash: "Наличные",
};

const Ta = {
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

function De(t) {
  if (t.type === "bank_card") {
    return `${t.cardBrand || "Карта"} •••• ${t.cardLast4 || ""}`.trim();
  }

  if (!ka[t.type]) {
    return t.type;
  }
}
function Ia(t) {
  return Ta[t.type] || "";
}
const Be = 5;
function Ma() {
  const t = E((r) => r.profile);

  const [a, i] = d(false);
  const [h, s] = d(false);
  const [d, m] = d(false);
  const [c, k] = d([]);
  const [g, I] = d(true);
  const [w, v] = d(false);
  const [y, S] = d(false);
  const [P, x] = d(null);
  const [o, f] = d(false);

  h(() => {
    Z.getStatus()
      .then((r) => f(!!r.recurringEnabled))
      .catch(() => f(false));
  }, []);

  h(() => {
    if (o) {
      Z.getMethods()
        .then(k)
        .catch(() => k([]))
        .finally(() => I(false));
    }
  }, [o]);

  const N = () => {
    Z.getMethods()
      .then(k)
      .catch(() => {});
  };

  const b = async (r) => {
    try {
      await Z.setDefaultMethod(r);

      k(($) =>
        $.map((E) => ({
          ...E,
          isDefault: E.id === r,
        }))
      );
    } catch {
      A.error("Не удалось изменить основной способ оплаты");
    }
  };

  const B = async (r) => {
    try {
      const $ = await Z.deleteMethod(r.id);

      k((E) => E.filter((z) => z.id !== r.id));

      if ($.autoRenewalDisabled && t?.subscription) {
        E.getState().setProfile({
          ...t,
          subscription: { ...t.subscription, autoRenewal: false },
        });
      }

      N();
    } catch {
      A.error("Не удалось отвязать карту");
    }
  };

  const p = async (r) => {
    if (w) {
      return;
    }
    v(true);
    S(false);
    const $ = window.open("about:blank", "_blank");
    try {
      const E = await Z.bindCard(r);
      const E_error = E.error;
      if (E_error || !E.confirmationUrl) {
        $?.close();
        A.error(E_error || "Привязка карт временно недоступна");
        return;
      }

      if ($) {
        $.location.href = E.confirmationUrl;
      } else {
        window.location.href = E.confirmationUrl;
      }
    } catch (E) {
      $?.close();

      A.error(
        E instanceof Error && E.message
          ? E.message
          : "Привязка карт временно недоступна"
      );
    } finally {
      v(false);
    }
  };

  const L = [...c].sort((r, $) =>
    r.isDefault !== $.isDefault
      ? r.isDefault
        ? -1
        : 1
      : ($.createdAt || "").localeCompare(r.createdAt || "")
  );

  return u_1(S, {
    children: [
      u_1("h2", { className: n.contentTitle, children: "Оплата" }),
      u_1("div", {
        className: n.section,
        children: [
          t?.subscription?.isActive
            ? u_1("div", {
                className: n.settingItem,
                children: [
                  u_1("div", {
                    className: n.settingInfo,
                    children: u_1("div", {
                      className: n.settingText,
                      children: [
                        u_1("span", {
                          className: n.settingTitle,
                          children: "Подписка ИТД НУКСТА",
                        }),
                        u_1("span", {
                          className: n.settingDescription,
                          children: t.subscription.expiresAt
                            ? (() => {
                                const r = new Date(t.subscription.expiresAt);
                                const $ = new Date();

                                const E = Math.max(
                                  0,
                                  Math.ceil(
                                    (r.getTime() - $.getTime()) /
                                      (1000 /* 1e3 */ * 60 * 60 * 24)
                                  )
                                );

                                return `до ${r.toLocaleDateString("ru-RU", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })} (${E} ${
                                  E === 1 ? "день" : E < 5 ? "дня" : "дней"
                                })`;
                              })()
                            : "Активна",
                        }),
                      ],
                    }),
                  }),
                  t.subscription.autoRenewal
                    ? u_1("button", {
                        type: "button",
                        className: n.subscriptionCancel,
                        onClick: () => i(true),
                        children: "Отключить автопродление",
                      })
                    : u_1("button", {
                        type: "button",
                        className: n.subscriptionRenew,
                        onClick: () => s(true),
                        children: "Включить автопродление",
                      }),
                ],
              })
            : u_1("div", {
                className: n.settingItem,
                children: [
                  u_1("div", {
                    className: n.settingInfo,
                    children: u_1("div", {
                      className: n.settingText,
                      children: [
                        u_1("span", {
                          className: n.settingTitle,
                          children: "Подписка ИТД НУКСТА",
                        }),
                        u_1("span", {
                          className: n.settingDescription,
                          children: "Не оформлена",
                        }),
                      ],
                    }),
                  }),
                  u_1("button", {
                    type: "button",
                    className: n.subscriptionRenew,
                    onClick: () => m(true),
                    children: "Оформить",
                  }),
                ],
              }),
          o &&
            u_1("div", {
              className: `${n.settingItem} ${n.column}`,
              children: [
                u_1("div", {
                  className: n.settingInfo,
                  children: u_1("div", {
                    className: n.settingText,
                    children: [
                      u_1("span", {
                        className: n.settingTitle,
                        children: "Способы оплаты",
                      }),
                      u_1("span", {
                        className: n.settingDescription,
                        children:
                          "Сохранённые способы для автопродления подписки. Отвязать можно в любой момент",
                      }),
                    ],
                  }),
                }),
                u_1("div", {
                  className: n.paymentMethodsList,
                  children: g
                    ? u_1(a8, {})
                    : u_1(S, {
                        children: [
                          L.map((r) => {
                            const $ = r.type === "bank_card" ? Te : Ae;
                            return u_1(
                              "div",
                              {
                                className: n.paymentMethodRow,
                                children: [
                                  u_1("div", {
                                    className: n.paymentMethodIcon,
                                    children: u_1($, { size: 18 }),
                                  }),
                                  u_1("div", {
                                    className: n.paymentMethodInfo,
                                    children: [
                                      u_1("span", {
                                        className: n.paymentMethodTitle,
                                        children: [
                                          De(r),
                                          r.isDefault &&
                                            c.length > 1 &&
                                            u_1("span", {
                                              className: n.paymentMethodBadge,
                                              children: "основной",
                                            }),
                                        ],
                                      }),
                                      u_1("span", {
                                        className: n.paymentMethodSubtitle,
                                        children: Ia(r),
                                      }),
                                    ],
                                  }),
                                  u_1("div", {
                                    className: n.paymentMethodActions,
                                    children: [
                                      !r.isDefault &&
                                        u_1("button", {
                                          type: "button",
                                          className: n.paymentMethodBtn,
                                          onClick: () => b(r.id),
                                          children: "Сделать основным",
                                        }),
                                      u_1("button", {
                                        type: "button",
                                        className: n.paymentMethodBtnDanger,
                                        onClick: () => x(r),
                                        children: "Отвязать",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              r.id
                            );
                          }),
                          c.length === 0 &&
                            u_1("div", {
                              className: n.paymentMethodsEmpty,
                              children: [
                                u_1(Te, { size: 18 }),
                                u_1("span", {
                                  children: "Нет привязанных методов оплаты",
                                }),
                              ],
                            }),
                          c.length < Be
                            ? y
                              ? u_1(S, {
                                  children: [
                                    u_1("button", {
                                      type: "button",
                                      className: n.paymentMethodAdd,
                                      onClick: () => p("bank_card"),
                                      disabled: w,
                                      children: [
                                        u_1("span", {
                                          className: n.paymentMethodIcon,
                                          children: u_1(Te, { size: 16 }),
                                        }),
                                        "Банковская карта",
                                      ],
                                    }),
                                    u_1("button", {
                                      type: "button",
                                      className: n.paymentMethodAdd,
                                      onClick: () => p("sbp"),
                                      disabled: w,
                                      children: [
                                        u_1("span", {
                                          className: n.paymentMethodIcon,
                                          children: u_1(Ae, { size: 16 }),
                                        }),
                                        "СБП",
                                      ],
                                    }),
                                  ],
                                })
                              : u_1("button", {
                                  type: "button",
                                  className: n.paymentMethodAdd,
                                  onClick: () => S(true),
                                  disabled: w,
                                  children: [
                                    u_1("span", {
                                      className: n.paymentMethodIcon,
                                      children: u_1(ln, { size: 16 }),
                                    }),
                                    "Добавить способ оплаты",
                                  ],
                                })
                            : u_1("div", {
                                className: n.paymentMethodsEmpty,
                                children: u_1("span", {
                                  children: [
                                    "Достигнут лимит способов оплаты (",
                                    Be,
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
        u_1(CancelSubscriptionModal, {
          expiresAt: t.subscription.expiresAt,
          onConfirm: async () => {
            const r = await Z.setAutoRenewal(false);
            E.getState().setProfile({
              ...t,
              subscription: { ...t.subscription, autoRenewal: r.autoRenewal },
            });
          },
          onClose: () => i(false),
        }),
      h &&
        u_1(Es, {
          onConfirm: async () => {
            const r = await Z.setAutoRenewal(true);
            E.getState().setProfile({
              ...t,
              subscription: {
                ...t.subscription,
                autoRenewal: r.autoRenewal,
                ...(r.expiresAt ? { expiresAt: r.expiresAt } : {}),
              },
            });
          },
          onClose: () => s(false),
        }),
      P &&
        u_1(be, {
          title: "Отвязать способ оплаты?",
          message: `${De(P)} будет отвязан. Это действие нельзя отменить.`,
          confirmText: "Отвязать",
          danger: true,
          onConfirm: () => B(P),
          onClose: () => x(null),
        }),
      u_1(Ca, {
        isOpen: d,
        onClose: () => {
          m(false);

          Z.getMethods()
            .then(k)
            .catch(() => {});
        },
      }),
    ],
  });
}
const Sa = "yQaW";
const Pa = "Qx1h";
const xa = "Mwdr";
const $a = "rodt";
const Ea = "eg7d";
const Aa = "FY11";
const La = "PHNN";

const ae = {
  selectWrapper: Sa,
  select: Pa,
  open: xa,
  selectedValue: $a,
  dropdown: Ea,
  option: Aa,
  selected: La,
};

function Ne({ value, options, onChange, disabled }) {
  const [s, d] = d(false);
  const m = A_1(null);

  const c = options.find((g) => g.value === value);

  disabled(() => {
    const g = (I) => {
      if (m.current && !m.current.contains(I.target)) {
        d(false);
      }
    };

    if (s) {
      document.addEventListener("mousedown", g);
    }

    return () => {
      document.removeEventListener("mousedown", g);
    };
  }, [s]);
  const k = (g) => {
    onChange(g);
    d(false);
  };
  return u_1("div", {
    ref: m,
    className: ae.selectWrapper,
    children: [
      u_1("button", {
        type: "button",
        className: `${ae.select} ${s ? ae.open : ""}`,
        onClick: (g) => {
          g.stopPropagation();

          if (!disabled) {
            d(!s);
          }
        },
        disabled: disabled,
        children: [
          u_1("span", { className: ae.selectedValue, children: c?.label }),
          u_1(In, { size: 16 }),
        ],
      }),
      s &&
        u_1("div", {
          className: ae.dropdown,
          children: options.map((g) =>
            u_1(
              "button",
              {
                type: "button",
                className: `${ae.option} ${
                  g.value === value ? ae.selected : ""
                }`,
                onClick: () => k(g.value),
                children: g.label,
              },
              g.value
            )
          ),
        }),
    ],
  });
}

const Ue = [
  { value: "everyone", label: "Все" },
  { value: "followers", label: "Подписчики" },
  { value: "mutual", label: "Взаимные подписчики" },
  { value: "nobody", label: "Никто" },
];

const Ra = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

function Da() {
  const { theme, setTheme } = Ge();
  return u_1(S, {
    children: [
      u_1("h2", { className: n.contentTitle, children: "Оформление" }),
      u_1("div", {
        className: n.section,
        children: u_1("div", {
          className: n.settingItem,
          children: [
            u_1("div", {
              className: n.settingInfo,
              children: u_1("div", {
                className: n.settingText,
                children: [
                  u_1("span", { className: n.settingTitle, children: "Тема" }),
                  u_1("span", {
                    className: n.settingDescription,
                    children: "Выберите цветовую схему приложения",
                  }),
                ],
              }),
            }),
            u_1(Ne, {
              value: theme,
              options: Ra,
              onChange: (i) => setTheme(i),
            }),
          ],
        }),
      }),
    ],
  });
}
function ve(t, a, i, h) {
  const s = t % 10;
  const d = t % 100;
  return d >= 11 && d <= 19 ? h : s === 1 ? a : s >= 2 && s <= 4 ? i : h;
}
function Ba(t) {
  const a = new Date(t).getTime();
  if (Number.isNaN(a)) {
    return "—";
  }
  const i = Math.max(0, Math.floor((Date.now() - a) / 1000 /* 1e3 */));
  if (i < 60) {
    return "только что";
  }
  const h = Math.floor(i / 60);
  if (h < 60) {
    return `${h} ${ve(h, "минуту", "минуты", "минут")} назад`;
  }
  const s = Math.floor(h / 60);
  if (s < 24) {
    return `${s} ${ve(s, "час", "часа", "часов")} назад`;
  }
  const d = Math.floor(s / 24);
  return d < 30
    ? `${d} ${ve(d, "день", "дня", "дней")} назад`
    : new Date(t).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
}
function Oe(t) {
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
function Ua(t) {
  const a = [t.ipCity, t.ipCountry].filter(Boolean);
  return a.length ? a.join(", ") : "Местоположение неизвестно";
}
function Oa({ type }) {
  if (type === "mobile") {
    return u_1("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        u_1("rect", { x: "6", y: "2", width: "12", height: "20", rx: "2.5" }),
        u_1("path", { d: "M11 18.5h2" }),
      ],
    });
  }

  if (type === "tablet") {
    return u_1("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        u_1("rect", { x: "4", y: "2.5", width: "16", height: "19", rx: "2.5" }),
        u_1("path", { d: "M11 18h2" }),
      ],
    });
  }

  return u_1("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u_1("rect", { x: "2.5", y: "4", width: "19", height: "13", rx: "2" }),
      u_1("path", { d: "M8.5 21h7M12 17v4" }),
    ],
  });
}
function Ha({ onChangePassword }) {
  const [a, i] = d([]);
  const [h, s] = d(true);
  const [d, m] = d(null);
  const [c, k] = d(null);
  const [g, I] = d(false);

  const w = q(async () => {
    s(true);
    m(null);
    try {
      i(await Ie.list());
    } catch {
      m("Не удалось загрузить активные сессии");
    } finally {
      s(false);
    }
  }, []);

  h(() => {
    w();
  }, [w]);
  const [v, y] = d(null);

  const S = q(
    async (o) => {
      k(o.id);
      try {
        const { loggedOut } = await Ie.revoke(o.id, o.isCurrent);
        if (loggedOut) {
          await E.getState().logout();
          return;
        }

        i((N) => N.filter((b) => b.id !== o.id));

        A.success("Сессия завершена");
      } catch {
        w();
      } finally {
        k(null);
      }
    },
    [w]
  );

  const P = q(async () => {
    try {
      const o = await Ie.revokeOthers();
      I(false);

      A.success(
        o > 0 ? `Завершено сессий: ${o}` : "Других активных сессий нет"
      );

      await w();
    } catch {}
  }, [w]);

  const x = a.reduce((o, f) => (f.isCurrent ? o : o + 1), 0);

  return u_1(S, {
    children: [
      u_1("h2", { className: n.contentTitle, children: "Безопасность" }),
      u_1("div", {
        className: n.section,
        children: u_1("div", {
          className: n.settingItem,
          children: [
            u_1("div", {
              className: n.settingInfo,
              children: u_1("div", {
                className: n.settingText,
                children: [
                  u_1("span", {
                    className: n.settingTitle,
                    children: "Пароль",
                  }),
                  u_1("span", {
                    className: n.settingDescription,
                    children: "Изменить пароль от аккаунта",
                  }),
                ],
              }),
            }),
            u_1(B, {
              size: "sm",
              onClick: onChangePassword,
              children: "Сменить пароль",
            }),
          ],
        }),
      }),
      u_1("div", {
        className: n.section,
        children: [
          u_1("div", {
            className: n.settingText,
            style: { marginBottom: 12 },
            children: [
              u_1("span", {
                className: n.settingTitle,
                children: "Активные сессии",
              }),
              u_1("span", {
                className: n.settingDescription,
                children:
                  "Устройства, на которых сейчас выполнен вход в ваш аккаунт",
              }),
            ],
          }),
          h
            ? u_1(a8, {})
            : d
            ? u_1("div", { className: n.saveError, children: d })
            : a.length === 0
            ? u_1("div", {
                className: n.emptyBlocklist,
                children: "Активных сессий не найдено",
              })
            : u_1(S, {
                children: [
                  u_1("div", {
                    className: n.sessionsList,
                    children: a.map((o) =>
                      u_1(
                        "div",
                        {
                          className: n.sessionItem,
                          children: [
                            u_1("div", {
                              className: n.sessionIcon,
                              children: u_1(Oa, { type: o.deviceType }),
                            }),
                            u_1("div", {
                              className: n.sessionInfo,
                              children: [
                                u_1("div", {
                                  className: n.sessionDevice,
                                  children: Oe(o),
                                }),
                                u_1("div", {
                                  className: n.sessionTime,
                                  children: [Ua(o), " · ", Ba(o.lastUsedAt)],
                                }),
                              ],
                            }),
                            o.isCurrent
                              ? u_1("span", {
                                  className: n.sessionCurrentBadge,
                                  children: "Это устройство",
                                })
                              : u_1("button", {
                                  type: "button",
                                  className: n.sessionRemove,
                                  title: "Завершить сессию",
                                  "aria-label": "Завершить сессию",
                                  disabled: c === o.id,
                                  onClick: () => y(o),
                                  children:
                                    c === o.id
                                      ? u_1(on, { size: 16 })
                                      : u_1(cn, { size: 16 }),
                                }),
                          ],
                        },
                        o.id
                      )
                    ),
                  }),
                  x > 0 &&
                    u_1("button", {
                      type: "button",
                      className: n.logoutButton,
                      onClick: () => I(true),
                      children: "Завершить все другие сессии",
                    }),
                ],
              }),
        ],
      }),
      v &&
        u_1(be, {
          title: "Завершить сессию?",
          message: `Вы действительно хотите завершить сессию «${Oe(
            v
          )}»? Устройство будет разлогинено.`,
          confirmText: "Завершить",
          danger: true,
          onConfirm: () => S(v),
          onClose: () => y(null),
        }),
      g &&
        u_1(be, {
          title: "Завершить все другие сессии?",
          message: `Вы действительно хотите завершить ${x} ${ve(
            x,
            "другую сессию",
            "другие сессии",
            "других сессий"
          )}? Устройства будут разлогинены.`,
          confirmText: `Завершить все (${x})`,
          danger: true,
          onConfirm: P,
          onClose: () => I(false),
        }),
    ],
  });
}

const _a = av(({ onDirtyChange, onSavingChange }, h) => {
  const { settings, fetchSettings, updateSettings } = rn();

  const [c, k] = fetchSettings({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [g, I] = fetchSettings(null);
  const [w, v] = fetchSettings(false);
  const [y, S] = fetchSettings(false);
  const [P, x] = fetchSettings(false);

  h(() => {
    if (!P && !settings) {
      fetchSettings();
    }
  }, [P]);

  h(() => {
    if (settings && !P) {
      const b = {
        webEnabled: settings.webEnabled,
        soundEnabled: settings.soundEnabled,
        follows: settings.preferences.follows,
        reactions: settings.preferences.reactions,
        replies: settings.preferences.replies,
        mentions: settings.preferences.mentions,
        wallPosts: settings.preferences.wallPosts,
      };
      k(b);
      I(b);
      v(false);
      x(true);
    }
  }, [settings, P]);

  h(() => {
    onDirtyChange(w);
  }, [w]);

  h(() => {
    onSavingChange(y);
  }, [y]);

  const o = (b, B) => {
    const p = { ...c, [b]: B };
    k(p);

    if (g) {
      const L = Object.keys(p).some((r) => p[r] !== g[r]);
      v(L);
    }
  };

  const f = async () => {
    if (!(!w || y)) {
      S(true);
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

        I({ ...c });
        v(false);
        A.success("Настройки уведомлений сохранены");
      } catch (b) {
        console.error("Failed to save notification settings:", b);
        A.error("Не удалось сохранить настройки");
      } finally {
        S(false);
      }
    }
  };

  const N = () => {
    if (g) {
      k({ ...g });
      v(false);
    }
  };

  ax(h, () => ({
    save: f,
    discard: N,
  }));

  return u_1(S, {
    children: [
      u_1("h2", { className: n.contentTitle, children: "Уведомления" }),
      u_1("div", {
        className: n.section,
        children: [
          u_1("div", { className: n.sectionTitle, children: "Основные" }),
          u_1("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("webEnabled", !c.webEnabled),
            children: [
              u_1("div", {
                className: n.settingInfo,
                children: [
                  u_1("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: u_1(qe, { size: 20 }),
                  }),
                  u_1("div", {
                    className: n.settingText,
                    children: [
                      u_1("span", {
                        className: n.settingTitle,
                        children: "Уведомления",
                      }),
                      u_1("span", {
                        className: n.settingDescription,
                        children: "Включение или отключение всех уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              u_1(Q, {
                checked: c.webEnabled,
                onChange: (b) => o("webEnabled", b),
              }),
            ],
          }),
          u_1("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("soundEnabled", !c.soundEnabled),
            children: [
              u_1("div", {
                className: n.settingInfo,
                children: [
                  u_1("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: u_1(yn, { size: 20 }),
                  }),
                  u_1("div", {
                    className: n.settingText,
                    children: [
                      u_1("span", {
                        className: n.settingTitle,
                        children: "Уведомления со звуком",
                      }),
                      u_1("span", {
                        className: n.settingDescription,
                        children: "Воспроизводить звуки уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              u_1(Q, {
                checked: c.soundEnabled,
                onChange: (b) => o("soundEnabled", b),
              }),
            ],
          }),
        ],
      }),
      u_1("div", {
        className: n.section,
        children: [
          u_1("div", { className: n.sectionTitle, children: "Пользователи" }),
          u_1("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("follows", !c.follows),
            children: [
              u_1("div", {
                className: n.settingInfo,
                children: [
                  u_1("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: u_1(Cn, { size: 20 }),
                  }),
                  u_1("div", {
                    className: n.settingText,
                    children: [
                      u_1("span", {
                        className: n.settingTitle,
                        children: "Подписки",
                      }),
                      u_1("span", {
                        className: n.settingDescription,
                        children: "Уведомления о подписках и запросах в друзья",
                      }),
                    ],
                  }),
                ],
              }),
              u_1(Q, {
                checked: c.follows,
                onChange: (b) => o("follows", b),
              }),
            ],
          }),
          u_1("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("wallPosts", !c.wallPosts),
            children: [
              u_1("div", {
                className: n.settingInfo,
                children: [
                  u_1("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: u_1(Ee, { size: 20 }),
                  }),
                  u_1("div", {
                    className: n.settingText,
                    children: [
                      u_1("span", {
                        className: n.settingTitle,
                        children: "Посты на стене",
                      }),
                      u_1("span", {
                        className: n.settingDescription,
                        children: "Уведомления о новых постах на вашей стене",
                      }),
                    ],
                  }),
                ],
              }),
              u_1(Q, {
                checked: c.wallPosts,
                onChange: (b) => o("wallPosts", b),
              }),
            ],
          }),
        ],
      }),
      u_1("div", {
        className: n.section,
        children: [
          u_1("div", { className: n.sectionTitle, children: "Посты" }),
          u_1("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("reactions", !c.reactions),
            children: [
              u_1("div", {
                className: n.settingInfo,
                children: [
                  u_1("div", {
                    className: `${n.settingIcon} ${n.red}`,
                    children: u_1(wn, { size: 20 }),
                  }),
                  u_1("div", {
                    className: n.settingText,
                    children: [
                      u_1("span", {
                        className: n.settingTitle,
                        children: "Лайки и реакции",
                      }),
                      u_1("span", {
                        className: n.settingDescription,
                        children:
                          "Уведомления о реакциях на ваши посты и комментарии",
                      }),
                    ],
                  }),
                ],
              }),
              u_1(Q, {
                checked: c.reactions,
                onChange: (b) => o("reactions", b),
              }),
            ],
          }),
          u_1("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("replies", !c.replies),
            children: [
              u_1("div", {
                className: n.settingInfo,
                children: [
                  u_1("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: u_1(Ee, { size: 20 }),
                  }),
                  u_1("div", {
                    className: n.settingText,
                    children: [
                      u_1("span", {
                        className: n.settingTitle,
                        children: "Комментарии и ответы",
                      }),
                      u_1("span", {
                        className: n.settingDescription,
                        children: "Уведомления о новых комментариях и ответах",
                      }),
                    ],
                  }),
                ],
              }),
              u_1(Q, {
                checked: c.replies,
                onChange: (b) => o("replies", b),
              }),
            ],
          }),
          u_1("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("mentions", !c.mentions),
            children: [
              u_1("div", {
                className: n.settingInfo,
                children: [
                  u_1("div", {
                    className: `${n.settingIcon} ${n.purple}`,
                    children: u_1(fn, { size: 20 }),
                  }),
                  u_1("div", {
                    className: n.settingText,
                    children: [
                      u_1("span", {
                        className: n.settingTitle,
                        children: "Упоминания",
                      }),
                      u_1("span", {
                        className: n.settingDescription,
                        children: "Уведомления когда вас упоминают в постах",
                      }),
                    ],
                  }),
                ],
              }),
              u_1(Q, {
                checked: c.mentions,
                onChange: (b) => o("mentions", b),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const za = av(({ onDirtyChange, onSavingChange }, h) => {
  const [s, d] = d({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [m, c] = d(null);
  const [k, g] = d(false);
  const [I, w] = d(false);
  const [v, y] = d(false);
  const [S, P] = d(false);
  const [x, o] = d([]);
  const [f, N] = d(null);
  const [b, B] = d(true);
  const [p, L] = d(false);
  const [r, $] = d(false);

  h(() => {
    E();

    if (!r) {
      z();
    }
  }, []);

  h(() => {
    onDirtyChange(k);
  }, [k]);

  h(() => {
    onSavingChange(I);
  }, [I]);

  const E = async () => {
    if (!S) {
      y(true);
    }

    try {
      const M = await v.getPrivacySettings();

      const R = {
        isPrivate: M.isPrivate ?? false,
        whoCanPostOnWall: M.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: M.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: M.showLastSeen ?? true,
      };

      d(R);
      c(R);
      g(false);
      P(true);
    } catch (M) {
      console.error("Failed to load privacy settings:", M);
    } finally {
      y(false);
    }
  };

  const z = async (M) => {
    if (!p) {
      L(true);
      try {
        const R = await xe.getBlockedUsers({ cursor: M, limit: 20 });

        o(M ? (Y) => [...Y, ...R.users] : R.users);

        N(R.nextCursor);
        B(R.hasMore);
        $(true);
      } catch (R) {
        console.error("Failed to load blocked users:", R);
      } finally {
        L(false);
      }
    }
  };

  const C = async (M) => {
    try {
      await xe.unblockUser(M);

      o((R) => R.filter((Y) => Y.id !== M));

      A.success("Пользователь разблокирован");
    } catch (R) {
      console.error("Failed to unblock user:", R);
      A.error("Не удалось разблокировать пользователя");
    }
  };

  const q = () => {
    if (b && f) {
      z(f);
    }
  };

  const O = (M, R) => {
    const Y = { ...s, [M]: R };
    d(Y);

    if (m) {
      const Ce = Object.keys(Y).some((he) => Y[he] !== m[he]);
      g(Ce);
    }
  };

  const we = async () => {
    if (!(!k || I)) {
      w(true);
      try {
        await v.updatePrivacySettings({
          whoCanPostOnWall: s.whoCanPostOnWall,
          whoCanSeeMyPostReactions: s.whoCanSeeMyPostReactions,
          showLastSeen: s.showLastSeen,
        });

        c({ ...s });
        g(false);
        A.success("Настройки приватности сохранены");
      } catch (M) {
        console.error("Failed to save privacy settings:", M);
        A.error("Не удалось сохранить настройки");
      } finally {
        w(false);
      }
    }
  };

  const ye = () => {
    if (m) {
      d({ ...m });
      g(false);
    }
  };

  ax(h, () => ({
    save: we,
    discard: ye,
  }));

  return u_1(S, {
    children: [
      u_1("h2", { className: n.contentTitle, children: "Приватность" }),
      S &&
        u_1("div", {
          className: n.section,
          children: [
            u_1("div", {
              className: n.settingItem,
              children: [
                u_1("div", {
                  className: n.settingInfo,
                  children: u_1("div", {
                    className: n.settingText,
                    children: [
                      u_1("span", {
                        className: n.settingTitle,
                        children: "Стена",
                      }),
                      u_1("span", {
                        className: n.settingDescription,
                        children: "Кто может писать на вашей стене",
                      }),
                    ],
                  }),
                }),
                u_1(Ne, {
                  value: s.whoCanPostOnWall,
                  options: Ue,
                  onChange: (M) => O("whoCanPostOnWall", M),
                }),
              ],
            }),
            u_1("div", {
              className: n.settingItem,
              children: [
                u_1("div", {
                  className: n.settingInfo,
                  children: u_1("div", {
                    className: n.settingText,
                    children: [
                      u_1("span", {
                        className: n.settingTitle,
                        children: "Лайки",
                      }),
                      u_1("span", {
                        className: n.settingDescription,
                        children: "Кто может видеть ваши лайкнутые посты",
                      }),
                    ],
                  }),
                }),
                u_1(Ne, {
                  value: s.whoCanSeeMyPostReactions,
                  options: Ue,
                  onChange: (M) => O("whoCanSeeMyPostReactions", M),
                }),
              ],
            }),
            u_1("div", {
              className: `${n.settingItem} ${n.clickable}`,
              onClick: () => O("showLastSeen", !s.showLastSeen),
              children: [
                u_1("div", {
                  className: n.settingInfo,
                  children: u_1("div", {
                    className: n.settingText,
                    children: [
                      u_1("span", {
                        className: n.settingTitle,
                        children: "Онлайн-статус",
                      }),
                      u_1("span", {
                        className: n.settingDescription,
                        children: "Показывать время последнего визита",
                      }),
                    ],
                  }),
                }),
                u_1(Q, {
                  checked: s.showLastSeen,
                  onChange: (M) => O("showLastSeen", M),
                }),
              ],
            }),
          ],
        }),
      u_1("div", {
        className: n.section,
        children: [
          u_1("div", {
            className: n.sectionTitle,
            children: "Чёрный список",
          }),
          p && !r
            ? u_1(a8, {})
            : r
            ? u_1(S, {
                children:
                  x.length === 0
                    ? u_1("div", {
                        className: n.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : u_1("div", {
                        className: n.blockedUsersList,
                        children: [
                          x.map((M) =>
                            u_1(
                              "div",
                              {
                                className: n.blockedUserItem,
                                children: [
                                  u_1(f, {
                                    src: M.avatar,
                                    alt: M.displayName,
                                    size: "sm",
                                  }),
                                  u_1("div", {
                                    className: n.blockedUserInfo,
                                    children: [
                                      u_1("span", {
                                        className: n.blockedUserName,
                                        children: M.displayName,
                                      }),
                                      M.username &&
                                        u_1("span", {
                                          className: n.blockedUserUsername,
                                          children: ["@", M.username],
                                        }),
                                    ],
                                  }),
                                  u_1(B, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => C(M.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              M.id
                            )
                          ),
                          b &&
                            u_1(B, {
                              variant: "secondary",
                              onClick: q,
                              disabled: p,
                              loading: p,
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

const Wa = "V0zg";
const Va = "aezN";
const Za = "G8qA";
const Fa = "hvBm";
const ja = "Lc9G";
const qa = "hHMu";
const Ga = "zLif";

const ee = {
  note: Wa,
  nicknameRow: Va,
  error: Za,
  avatarRow: Fa,
  avatarPreview: ja,
  avatarActions: qa,
  danger: Ga,
};

async function Xa(t) {
  const [a, i, h] = await Promise.allSettled(t);

  const s = [a, i, h].filter((d) => d.status === "rejected").length;

  return {
    profile: a.status === "fulfilled" ? a.value : null,
    nicknames: i.status === "fulfilled" ? i.value : null,
    avatar: h.status === "fulfilled" ? h.value : null,
    failed: s,
  };
}
function Ja({ onClose }) {
  const a = j()?.id;
  const [i, h] = d(null);
  const [s, d] = d(null);
  const [m, c] = d(null);
  const [k, g] = d(false);
  const [I, w] = d(true);
  const [v, y] = d(false);
  const [S, P] = d("");

  const x = q(async () => {
    if (a) {
      w(true);
      P("");
      try {
        const p = await Xa([ie.profile(a), ie.nicknames(), ie.profileAvatar()]);
        h(p.profile);
        d(p.nicknames);
        c(p.avatar);

        if (p.failed === 3) {
          P("Не удалось загрузить настройки ивента.");
        } else if (p.failed > 0) {
          P("Часть настроек не загрузилась.");
        }
      } finally {
        w(false);
      }
    }
  }, [a]);

  h(() => {
    x();
  }, [x]);

  const o = async (p) => {
    if (!(!a || !i?.curtains.hasCurtains || v)) {
      y(true);
      try {
        await ie.setCurtains(a, p);

        h((L) => L && { ...L, curtains: { ...L.curtains, closed: p } });

        ke(a);
        A.success(p ? "Шторы задёрнуты" : "Шторы открыты");
      } catch {
        A.error("Не удалось изменить положение штор");
      } finally {
        y(false);
      }
    }
  };

  const f = async (p) => {
    if (!a || !s || v) {
      return;
    }
    const L = p || null;
    if (L !== s.active) {
      y(true);
      try {
        const r = await ie.setActiveNickname(L);

        d(($) => $ && { ...$, active: r.nickname });

        ke(a);
        A.success(r.nickname ? "Кликуха выбрана" : "Кликуха снята");
      } catch {
        A.error("Не удалось сменить кликуху");
      } finally {
        y(false);
      }
    }
  };

  const N = async () => {
    if (!(!m?.active || v)) {
      y(true);
      try {
        await ie.removeProfileAvatar();

        c((p) => p && { ...p, active: null });

        await E.getState().fetchProfile();

        if (a) {
          const p = E.getState().profile;

          if (p?.id === a) {
            un.getState().replaceAuthorAvatar(a, p.avatar ?? null);
          }

          ke(a);
        }

        A.success("Аватарка удалена");
      } catch (p) {
        A.error("Не удалось удалить аватарку");
        throw p;
      } finally {
        y(false);
      }
    }
  };

  const b = i?.curtains;

  const B = [
    { value: "", label: "Без кликухи" },
    ...(s?.owned ?? []).map((p) => ({
      value: p,
      label: p,
    })),
  ];

  return u_1(S, {
    children: [
      u_1("h2", { className: n.contentTitle, children: "Ивент" }),
      I && u_1("p", { className: ee.note, children: "Загрузка настроек…" }),
      S &&
        u_1("div", {
          className: ee.error,
          role: "alert",
          children: [
            u_1("span", { children: S }),
            u_1("button", {
              type: "button",
              onClick: () => {
                x();
              },
              children: "Повторить",
            }),
          ],
        }),
      !I &&
        (i || s || m) &&
        u_1("div", {
          className: n.section,
          children: [
            i &&
              u_1(S, {
                children: [
                  u_1("div", {
                    className: n.settingItem,
                    children: [
                      u_1("div", {
                        className: n.settingInfo,
                        children: u_1("div", {
                          className: n.settingText,
                          children: [
                            u_1("span", {
                              className: n.settingTitle,
                              children: "Задёрнуть шторы",
                            }),
                            u_1("span", {
                              className: n.settingDescription,
                              children: "Гости увидят полотно вместо профиля",
                            }),
                          ],
                        }),
                      }),
                      u_1(Q, {
                        checked: b?.closed ?? false,
                        disabled: !b?.hasCurtains || v,
                        onChange: (p) => {
                          o(p);
                        },
                      }),
                    ],
                  }),
                  !b?.hasCurtains &&
                    u_1("p", {
                      className: ee.note,
                      children:
                        "Шторы можно закрывать, когда друзья соберут 100 мелков.",
                    }),
                ],
              }),
            s &&
              s.owned.length > 0 &&
              u_1("div", {
                className: `${n.settingItem} ${ee.nicknameRow}`,
                children: [
                  u_1("div", {
                    className: n.settingInfo,
                    children: u_1("div", {
                      className: n.settingText,
                      children: [
                        u_1("span", {
                          className: n.settingTitle,
                          children: "Кликуха",
                        }),
                        u_1("span", {
                          className: n.settingDescription,
                          children: "Золотом после имени в профиле",
                        }),
                      ],
                    }),
                  }),
                  u_1(Ne, {
                    value: s.active ?? "",
                    options: B,
                    disabled: v,
                    onChange: (p) => {
                      f(p);
                    },
                  }),
                ],
              }),
            m &&
              (m.active || m.balance > 0) &&
              u_1("div", {
                className: `${n.settingItem} ${ee.avatarRow}`,
                children: [
                  u_1("div", {
                    className: n.settingInfo,
                    children: [
                      m.active &&
                        u_1("img", {
                          className: ee.avatarPreview,
                          src: m.active.url,
                          alt: "Текущая аватарка",
                        }),
                      u_1("div", {
                        className: n.settingText,
                        children: [
                          u_1("span", {
                            className: n.settingTitle,
                            children: "Аватарка",
                          }),
                          u_1("span", {
                            className: n.settingDescription,
                            children: m.active
                              ? "Своя картинка установлена"
                              : `Доступно установок: ${m.balance}`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  u_1("div", {
                    className: ee.avatarActions,
                    children: [
                      m.balance > 0 &&
                        u_1("button", {
                          type: "button",
                          disabled: v,
                          onClick: () => {
                            onClose();
                            u_1_1(`${dn.ALICE_EVENT}/avatar`);
                          },
                          children: m.active ? "Поменять" : "Установить",
                        }),
                      m.active &&
                        u_1("button", {
                          type: "button",
                          className: ee.danger,
                          disabled: v,
                          onClick: () => g(true),
                          children: "Удалить",
                        }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      k &&
        u_1(be, {
          title: "Удалить аватарку?",
          message:
            "В профиле снова появится ваш эмодзи. Потраченное право установки не вернётся.",
          confirmText: "Удалить",
          danger: true,
          onConfirm: N,
          onClose: () => g(false),
        }),
    ],
  });
}
const Ya = [
  { id: "account", icon: mn, label: "Аккаунт", color: "#3b82f6" },
  { id: "payment", icon: Sn, label: "Оплата", color: "#34c759" },
  { id: "appearance", icon: $e, label: "Оформление", color: "#8b5cf6" },
  { id: "security", icon: Pn, label: "Безопасность", color: "#ef4444" },
  { id: "privacy", icon: Mn, label: "Приватность", color: "#f59e0b" },
  { id: "notifications", icon: qe, label: "Уведомления", color: "#ec4899" },
  { id: "event", icon: $e, label: "Ивент", color: "#a855f7" },
];
function ii({ onClose }) {
  const a = hn();

  const i = Ya.filter((C) => C.id !== "event" || a.status === "allowed");

  const h = G_1();
  const [s, d] = d("account");
  h(() => {
    if (a.status !== "allowed" && s === "event") {
      d("account");
    }
  }, [a.status, s]);
  const [m, c] = d(false);
  const [k, g] = d(false);
  const [I, w] = d({});
  const [v, y] = d({});
  const S = A_1(null);
  const P = A_1(null);
  const x = A_1(null);
  const o = Object.values(I).some(Boolean);
  const f = Object.values(v).some(Boolean);

  const N = q(
    (C) => (q) => {
      w((O) => ({
        ...O,
        [C]: q,
      }));
    },
    []
  );

  const b = q(
    (C) => (q) => {
      y((O) => ({
        ...O,
        [C]: q,
      }));
    },
    []
  );

  const B = async () => {
    const C = [];

    if (I.account) {
      C.push(S.current?.save() ?? Promise.resolve());
    }

    if (I.notifications) {
      C.push(P.current?.save() ?? Promise.resolve());
    }

    if (I.privacy) {
      C.push(x.current?.save() ?? Promise.resolve());
    }

    await Promise.all(C);
  };

  const p = (C) => {
    if (C !== s) {
      w({});
      d(C);
    }
  };

  const L = (C) => {
    w({});
    d(C);
    c(true);
  };

  const r = () => {
    w({});
    c(false);
  };

  const $ = () => {
    onClose();
  };

  const E = () => {
    switch (s) {
      case "account": {
        return u_1(ws, {
          ref: S,
          onDirtyChange: N("account"),
          onSavingChange: b("account"),
          onClose: onClose,
        });
      }
      case "payment": {
        return u_1(Ma, {});
      }
      case "appearance": {
        return u_1(Da, {});
      }
      case "security": {
        return u_1(Ha, { onChangePassword: () => g(true) });
      }
      case "notifications": {
        return u_1(_a, {
          ref: P,
          onDirtyChange: N("notifications"),
          onSavingChange: b("notifications"),
        });
      }
      case "privacy": {
        return u_1(za, {
          ref: x,
          onDirtyChange: N("privacy"),
          onSavingChange: b("privacy"),
        });
      }
      case "event": {
        return a.status === "allowed" ? u_1(Ja, { onClose: onClose }) : null;
      }
    }
  };

  if (k) {
    return u_1(Gn, { onClose: onClose, onBack: () => g(false) });
  }
  const z = o
    ? u_1("div", {
        className: n.actionBar,
        children: [
          u_1(B, { variant: "secondary", onClick: $, children: "Отмена" }),
          u_1(B, {
            variant: "primary",
            onClick: B,
            disabled: f,
            loading: f,
            children: "Сохранить",
          }),
        ],
      })
    : null;
  return u_1(M, {
    onClose: $,
    frameless: true,
    size: "wide",
    className: n.modalContainer,
    children: u_1("div", {
      className: n.settingsModal,
      children: h
        ? u_1("div", {
            className: `${n.mobilePager} ${m ? n.detailOpen : ""}`,
            children: [
              u_1("div", {
                className: n.mobileScreen,
                children: [
                  u_1("div", {
                    className: n.mobileMenuTitle,
                    children: "Настройки",
                  }),
                  u_1("nav", {
                    className: n.mobileMenu,
                    children: i.map((C) =>
                      u_1(
                        "button",
                        {
                          type: "button",
                          className: n.mobileMenuItem,
                          onClick: () => L(C.id),
                          children: [
                            u_1("span", {
                              className: n.mobileMenuIcon,
                              style: { background: C.color },
                              children: u_1(C.icon, { size: 16 }),
                            }),
                            u_1("span", { children: C.label }),
                            u_1("span", {
                              className: n.mobileMenuChevron,
                              children: u_1(gn, { size: 18 }),
                            }),
                          ],
                        },
                        C.id
                      )
                    ),
                  }),
                ],
              }),
              u_1("div", {
                className: n.mobileScreen,
                children: [
                  u_1("div", {
                    className: n.mobileHeader,
                    children: [
                      u_1("button", {
                        type: "button",
                        className: n.mobileBack,
                        onClick: r,
                        children: [
                          u_1(vn, { size: 22 }),
                          u_1("span", { children: "Настройки" }),
                        ],
                      }),
                      u_1("span", {
                        className: n.mobileHeaderTitle,
                        children: i.find((C) => C.id === s)?.label,
                      }),
                    ],
                  }),
                  u_1("div", { className: n.content, children: E() }),
                  z,
                ],
              }),
            ],
          })
        : u_1(S, {
            children: [
              u_1("div", {
                className: n.sidebar,
                children: [
                  u_1("div", {
                    className: n.sidebarTitle,
                    children: "Настройки",
                  }),
                  u_1("nav", {
                    children: i.map((C) =>
                      u_1(
                        "button",
                        {
                          type: "button",
                          className: `${n.navItem} ${
                            s === C.id ? n.active : ""
                          }`,
                          onClick: () => p(C.id),
                          children: [
                            u_1(C.icon, { size: 24 }),
                            u_1("span", { children: C.label }),
                          ],
                        },
                        C.id
                      )
                    ),
                  }),
                ],
              }),
              u_1("div", {
                className: n.contentWrapper,
                children: [
                  u_1("div", { className: n.content, children: E() }),
                  z,
                ],
              }),
            ],
          }),
    }),
  });
}
export {
  CancelSubscriptionModal as CancelSubscriptionModal,
  Gn as ChangePasswordModal,
  Kn as DeleteAccountModal,
  Es as EnableRenewalModal,
  ii as SettingsModal,
  Ca as SubscriptionModal,
  Z as subscriptionApi,
  ci as useSettingsStore,
};
