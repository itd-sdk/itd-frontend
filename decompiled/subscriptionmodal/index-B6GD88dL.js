import {
  ah,
  ai as ai_1,
  a,
  a5,
  a6,
  d,
  B,
  M,
  d_1 as ae_1,
  x,
  ab,
  aj,
  o,
  E,
  ak,
  B as B_1,
  y,
  d as d_1,
  a6 as a6_1,
  al,
  a4,
  m,
  am,
  f,
  $,
  k,
  g,
  an as an_1,
  t as R,
  n as Je,
  ao as Qe,
  I as Ye,
  a1 as en,
  ap as _e,
  C as Me,
  aq as nn,
  v as tn,
  R as Fi,
} from "./index-DuQT229k.js";

import { C as sn } from "./index-BzcY6Gdu.js";
import { I as an } from "./IconInfo-BIX6X1qJ.js";
import { I as ln } from "./IconNotificationMention-2tVYbAN-.js";
import { I as on } from "./IconChevronRight-DoykIv9y.js";
import { I as cn } from "./IconChevronLeft-CbQdWkHt.js";
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
      t._sentryDebugIds[a] = "3de01b39-5de8-4038-9fac-facf0f1f0281";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-3de01b39-5de8-4038-9fac-facf0f1f0281";
    }
  } catch {}
})();

const rn = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const dn = () => {
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

const me = (t) => {
  const a = t === "system" ? rn() : t;
  document.documentElement.setAttribute("data-theme", a);
};

const He = ah()(
  ai_1(
    (t) => ({
      theme: dn(),

      setTheme: (a) => {
        me(a);
        t({ theme: a });
      },

      toggleTheme: () =>
        t((a) => {
          const o = a.theme === "light" ? "dark" : "light";
          me(o);
          return { theme: o };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (t) => {
        if (t?.theme) {
          me(t.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (He.getState().theme === "system") {
        me("system");
      }
    });
}

const hn = ({ size = 18 }) =>
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

const Pe = ({ size = 18 }) =>
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

const un = ({ size = 18 }) =>
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

const mn = ({ size = 18 }) =>
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

const pn = ({ size = 24 }) =>
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

const fn = ({ size = 20 }) =>
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

const Se = ({ size = 24 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      a("rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "2",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      a("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M2 10h20",
      }),
    ],
  });

const gn = ({ size = 18 }) =>
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

const vn = ({ size = 24 }) =>
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

const bn = ({ size = 24 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    children: a("path", {
      fill: "currentColor",
      d: "M16.5 3q5.4.1 5.5 5.4h-4.2c-2 0-3.6 1.6-3.6 3.5s1.6 3.4 3.6 3.4H22v.4q-.1 5.1-5.5 5.3h-9Q2 20.8 2 15.7V8.3Q2.1 3.2 7.5 3zm4.8 6.9q.6 0 .7.7v2.5q0 .7-.7.8h-3.5q-1.6-.1-2-1.6a2 2 0 0 1 .4-1.7 2 2 0 0 1 1.6-.7zm-3 1.1h-.4q-.3 0-.5.3-.2.1-.2.5 0 .6.7.7h.3q.8 0 .8-.7t-.8-.8m-6-4.1H6.8q-.6 0-.7.7t.7.8h5.7q.6-.1.7-.8t-.7-.7",
    }),
  });

const Nn = ({ size = 24 }) =>
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

const wn = ({ size = 24 }) =>
  a("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      a("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M21 12V7H5a2 2 0 0 1 0-4h14v4",
      }),
      a("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M3 5v14a2 2 0 0 0 2 2h16v-5",
      }),
      a("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M18 12a2 2 0 0 0 0 4h4v-4h-4Z",
      }),
    ],
  });

const yn = "aqGX";
const kn = "Motj";
const $e = { toggle: yn, active: kn };
function Q({ checked, onChange, disabled }) {
  const m = (s) => {
    s.stopPropagation();

    if (!disabled) {
      onChange(!checked);
    }
  };
  return onChange("button", {
    type: "button",
    className: `${$e.toggle} ${checked ? $e.active : ""}`,
    onClick: m,
    disabled: disabled,
    role: "switch",
    "aria-checked": checked,
  });
}

const Z = {
  async getStatus() {
    return a5.get(a6.subscription.status);
  },
  async pay() {
    return a5.post(a6.subscription.pay);
  },
  async setAutoRenewal(t) {
    return a5.post(a6.subscription.autoRenewal, { enabled: t });
  },
  async bindCard() {
    return a5.post(a6.subscription.bindCard);
  },
  async getMethods() {
    return (await a5.get(a6.subscription.methods)).data;
  },
  async setDefaultMethod(t) {
    return a5.put(a6.subscription.methodDefault(t));
  },
  async deleteMethod(t) {
    return a5.delete(a6.subscription.methodDelete(t));
  },
};

const Ne = {
  async list() {
    return (await a5.get(a6.sessions.list))?.sessions ?? [];
  },
  async revoke(t, a) {
    await a5.delete(a6.sessions.revoke(t));
    return { loggedOut: a };
  },
  async revokeOthers() {
    return (await a5.delete(a6.sessions.revokeOthers))?.revokedCount ?? 0;
  },
};

const Cn = "hI4c";
const Tn = "FTWx";
const In = "XEvN";
const Mn = "KBWr";
const Pn = "jAhh";
const Sn = "J7I8";
const $n = "Lb5g";
const xn = "COBA";
const Ln = "Y25s";
const En = "NU7Y";

const J = {
  inputWrapper: Cn,
  label: Tn,
  hint: In,
  input: Mn,
  error: Pn,
  small: Sn,
  medium: $n,
  large: xn,
  default: "M53x",
  outline: Ln,
  errorText: En,
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
  ...f
}) {
  const p = (w) => {
    onChange?.(w.currentTarget.value);
  };
  return onChange("div", {
    className: J.inputWrapper,
    children: [
      label &&
        onChange("label", {
          className: J.label,
          children: [
            label,
            hint && onChange("span", { className: J.hint, children: hint }),
          ],
        }),
      onChange("input", {
        className: `${J.input} ${J[d]} ${J[v]} ${error ? J.error : ""} ${
          className || ""
        }`,
        value: value,
        onInput: p,
        ...f,
      }),
      error && onChange("span", { className: J.errorText, children: error }),
    ],
  });
}
const Dn = "U5Iw";
const Bn = "KSf1";
const Rn = "u67u";
const An = "ZHBc";
const Un = "RXUZ";
const On = "Wl1E";
const _n = "UojE";

const H = {
  form: Dn,
  field: Bn,
  label: Rn,
  hint: An,
  fieldError: Un,
  error: On,
  actions: _n,
};

function Hn({ onClose, onBack }) {
  const [o, m] = d("");
  const [s, d] = d("");
  const [v, l] = d("");
  const [f, p] = d(false);
  const [w, y] = d(null);
  const [u, g] = d({});

  const M = async (S) => {
    S.preventDefault();
    y(null);
    g({});

    if (s !== v) {
      g({ confirmPassword: "Пароли не совпадают" });
      return;
    }

    if (s.length < 10) {
      g({ newPassword: "Минимум 10 символов" });
      return;
    }
    if (s.length > 128) {
      g({ newPassword: "Максимум 128 символов" });
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(s)) {
      g({ newPassword: "Только латиница, цифры и знаки пунктуации" });
      return;
    }
    p(true);
    try {
      await ae_1.changePassword({ currentPassword: o, newPassword: s });
      await x.getState().logout();
      onClose();
    } catch (c) {
      if (ab(c)) {
        if (c.code === "CURRENT_PASSWORD_INCORRECT") {
          g({ currentPassword: "Неверный текущий пароль" });
        } else if (c.errors) {
          const T = {};
          for (const [L, i] of Object.entries(c.errors)) {
            T[L] = i[0] || "Ошибка валидации";
          }
          g(T);
        } else {
          y(c.message || "Не удалось сменить пароль");
        }
      } else {
        y("Не удалось сменить пароль");
      }
    } finally {
      p(false);
    }
  };

  const $ = o.length > 0 && s.length >= 10 && v.length > 0;
  return onBack(M, {
    onClose: onBack,
    title: "Смена пароля",
    children: onBack("form", {
      onSubmit: M,
      className: H.form,
      children: [
        onBack("div", {
          className: H.field,
          children: [
            onBack("label", { className: H.label, children: "Текущий пароль" }),
            onBack(ce, {
              type: "password",
              value: o,
              onChange: m,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            u.currentPassword &&
              onBack("span", {
                className: H.fieldError,
                children: u.currentPassword,
              }),
          ],
        }),
        onBack("div", {
          className: H.field,
          children: [
            onBack("label", { className: H.label, children: "Новый пароль" }),
            onBack(ce, {
              type: "password",
              value: s,
              onChange: d,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            onBack("span", {
              className: H.hint,
              children: "Минимум 10 символов, латиница, цифры и пунктуация",
            }),
            u.newPassword &&
              onBack("span", {
                className: H.fieldError,
                children: u.newPassword,
              }),
          ],
        }),
        onBack("div", {
          className: H.field,
          children: [
            onBack("label", {
              className: H.label,
              children: "Подтверждение пароля",
            }),
            onBack(ce, {
              type: "password",
              value: v,
              onChange: l,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            u.confirmPassword &&
              onBack("span", {
                className: H.fieldError,
                children: u.confirmPassword,
              }),
          ],
        }),
        w && onBack("div", { className: H.error, children: w }),
        onBack("div", {
          className: H.actions,
          children: [
            onBack(B, {
              type: "button",
              variant: "secondary",
              onClick: onBack,
              disabled: f,
              children: "Отмена",
            }),
            onBack(B, {
              type: "submit",
              disabled: !$ || f,
              children: f ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
      ],
    }),
  });
}
const Wn = "yGKw";
const Fn = "FSyX";
const Vn = "djbe";
const zn = "Kavk";
const de = { content: Wn, title: Fn, subtitle: Vn, actions: zn };
function Zn({ onClose }) {
  const a = async () => {
    await x.getState().deleteAccount();
    onClose();
  };
  return a(M, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: de.content,
      children: [
        a("h2", { className: de.title, children: "Удалить аккаунт?" }),
        a("p", {
          className: de.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        a("div", {
          className: de.actions,
          children: [
            a(B, {
              variant: "secondary",
              onClick: (o) => {
                o.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            a(B, {
              variant: "danger",
              onClick: (o) => {
                o.stopPropagation();
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
const jn = "bBoW";
const qn = "Zm8z";
const Gn = "Bprn";
const Xn = "nm5U";
const Kn = "gD0l";
const Jn = "YgcH";
const Qn = "o7mJ";
const Yn = "NK35";
const et = "epSP";
const nt = "hVgd";
const tt = "GXRs";
const st = "FXhq";
const it = "FuLt";
const at = "kThV";
const lt = "a37c";
const ot = "rhnf";
const ct = "KXb1";
const rt = "whE6";
const dt = "JRKR";
const ht = "dfao";
const ut = "g4rQ";
const mt = "L8od";
const pt = "QZfG";
const ft = "a20y";
const gt = "HHzF";
const vt = "WOzq";
const bt = "O31h";
const Nt = "GZmE";
const wt = "GNai";
const yt = "k03m";
const kt = "L6Kz";
const Ct = "bOf5";
const Tt = "QFEt";
const It = "DCEj";
const Mt = "iKDE";
const Pt = "Ygb0";
const St = "mhjm";
const $t = "HEJO";
const xt = "Ebqe";
const Lt = "Sgro";
const Et = "Rch7";
const Dt = "Gxrp";
const Bt = "x3SD";
const Rt = "VyuX";
const At = "reVz";
const Ut = "A1Wz";
const Ot = "Mpkd";
const _t = "TXV9";
const Ht = "pDT1";
const Wt = "A1bq";
const Ft = "Tmts";
const Vt = "D2bD";
const zt = "ZT8J";
const Zt = "x6Kg";
const jt = "V8Gk";
const qt = "PtVv";
const Gt = "GcfI";
const Xt = "J12k";
const Kt = "kQ5O";
const Jt = "c8L6";
const Qt = "IxUV";
const Yt = "dtLF";
const es = "NgsU";
const ns = "U8ru";
const ts = "B71x";
const ss = "xfvk";
const is = "blsa";
const as = "LOGz";
const ls = "EXLI";
const os = "mwGP";
const cs = "TuSJ";
const rs = "b2CC";
const ds = "v2yD";
const hs = "MHja";

const n = {
  modalContainer: jn,
  settingsModal: qn,
  sidebar: Gn,
  sidebarTitle: Xn,
  navItem: Kn,
  active: Jn,
  contentWrapper: Qn,
  content: Yn,
  actionBar: et,
  contentTitle: nt,
  subscriptionCancel: tt,
  subscriptionRenew: st,
  paymentMethodsList: it,
  paymentMethodRow: at,
  paymentMethodIcon: lt,
  paymentMethodInfo: ot,
  paymentMethodTitle: ct,
  paymentMethodBadge: rt,
  paymentMethodSubtitle: dt,
  paymentMethodActions: ht,
  paymentMethodAdd: ut,
  paymentMethodsEmpty: mt,
  paymentMethodBtn: pt,
  paymentMethodBtnDanger: ft,
  section: gt,
  sectionTitle: vt,
  settingItem: bt,
  clickable: Nt,
  column: wt,
  settingInfo: yt,
  settingIcon: kt,
  blue: Ct,
  red: Tt,
  purple: It,
  settingText: Mt,
  settingTitle: Pt,
  settingDescription: St,
  settingControl: $t,
  sessionsList: xt,
  sessionItem: Lt,
  sessionIcon: Et,
  sessionInfo: Dt,
  sessionDevice: Bt,
  sessionTime: Rt,
  sessionCurrentBadge: At,
  sessionRemove: Ut,
  avatarDisplay: Ot,
  pinGrid: _t,
  pinItem: Ht,
  pinActive: Wt,
  pinImage: Ft,
  pinName: Vt,
  bioTextarea: zt,
  fieldError: Zt,
  saveError: jt,
  emptyBlocklist: qt,
  blockedUsersList: Gt,
  blockedUserItem: Xt,
  blockedUserInfo: Kt,
  blockedUserName: Jt,
  blockedUserUsername: Qt,
  deleteAccountButton: Yt,
  logoutButton: es,
  mobilePager: ns,
  detailOpen: ts,
  mobileScreen: ss,
  mobileMenuTitle: is,
  mobileMenu: as,
  mobileMenuItem: ls,
  mobileMenuIcon: os,
  mobileMenuChevron: cs,
  mobileHeader: rs,
  mobileBack: ds,
  mobileHeaderTitle: hs,
};

const us = aj(({ onDirtyChange, onSavingChange, onClose }, s) => {
  const d = x((b) => b.profile);

  const v = x((b) => b.logout);

  const { openModal, closeModal } = onSavingChange();
  const p = E();
  const [w] = ak();
  const y = w?.url || window.location.pathname;
  const [u, g] = d(true);
  const [M, $] = d(false);
  const [S, c] = d(false);
  const [T, L] = d({});
  const [i, k] = d(null);
  const [I, _] = d(null);
  const [P, K] = d({ name: "", username: "", bio: "", avatar: "😀" });
  const [C, G] = d([]);
  const [B, ie] = d(null);
  const W = B_1(null);
  const [ge, ve] = d(true);

  y(() => {
    if (d) {
      const b = {
        name: d.displayName,
        username: d.username || "",
        bio: d.bio || "",
        avatar: d.avatar,
      };
      K(b);
      _(b);
      g(false);
      const E = d.pin ?? null;
      ie(E);
      W.current = E;
    }
  }, [d]);

  y(() => {
    d_1
      .getMyPins()
      .then((b) => {
        G(b.pins);

        if (b.activePin && !W.current) {
          const E = b.pins.find((U) => U.slug === b.activePin);

          if (E) {
            ie(E);
            W.current = E;
          }
        }
      })
      .catch(() => G([]))
      .finally(() => ve(false));
  }, []);

  y(() => {
    onDirtyChange(S);
  }, [S]);

  y(() => {
    onSavingChange(M);
  }, [M]);

  const N = a6_1(
    (b, E) => {
      if (!I) {
        return false;
      }

      const U = Object.keys(b).some((ee) => b[ee] !== I[ee]);

      const F = (E?.slug ?? null) !== (W.current?.slug ?? null);
      return U || F;
    },
    [I]
  );

  const x = (b, E) => {
    if (T[b]) {
      L((U) => {
        const F = { ...U };
        delete F[b];
        return F;
      });
    }

    k(null);

    K((U) => {
      const F = { ...U, [b]: E };
      c(N(F, B));
      return F;
    });
  };

  const X = a6_1(
    (b) => {
      const E = B?.slug === b.slug ? null : b;
      ie(E);
      c(N(P, E));
    },
    [B, P, N]
  );

  const be = async () => {
    if (!S || M) {
      return;
    }
    $(true);
    L({});
    k(null);
    const b = I?.username;
    const P_username = P.username;
    try {
      if (I && Object.keys(P).some((le) => P[le] !== I[le])) {
        await d_1.updateProfile({
          displayName: P.name,
          username: P.username || undefined,
          bio: P.bio || null,
        });
      }

      if ((B?.slug ?? null) !== (W.current?.slug ?? null)) {
        if (B) {
          await d_1.setActivePin(B.slug);
        } else {
          await d_1.removeActivePin();
        }
      }

      _({ ...P });
      W.current = B;
      c(false);
      const ee = x.getState().profile;

      if (ee) {
        x.getState().setProfile({
          ...ee,
          displayName: P.name,
          username: P.username,
          bio: P.bio || null,
          pin: B,
        });
      }

      if (
        P_username &&
        P_username !== b &&
        (y === `/@${b}` || y === `/@${d?.id}`)
      ) {
        closeModal(`/@${P_username}`);
      }
    } catch (U) {
      console.error("Failed to save profile:", U);

      if (ab(U)) {
        if (U.errors) {
          const F = {};
          for (const [ee, le] of Object.entries(U.errors)) {
            F[ee] = le[0] || "Ошибка валидации";
          }
          L(F);
        } else {
          k(U.message || "Не удалось сохранить изменения");
        }
      } else {
        k("Не удалось сохранить изменения");
      }
    } finally {
      $(false);
    }
  };

  const re = () => {
    if (I) {
      K({ ...I });
      ie(W.current);
      c(false);
    }
  };

  al(s, () => ({
    save: be,
    discard: re,
  }));

  return u
    ? onDirtyChange(onClose, {
        children: [
          onDirtyChange("h2", {
            className: n.contentTitle,
            children: "Аккаунт",
          }),
          onDirtyChange(a4, {}),
        ],
      })
    : onDirtyChange(onClose, {
        children: [
          onDirtyChange("h2", {
            className: n.contentTitle,
            children: "Аккаунт",
          }),
          onDirtyChange("div", {
            className: n.section,
            children: [
              onDirtyChange("div", {
                className: n.settingItem,
                children: [
                  onDirtyChange("div", {
                    className: n.settingInfo,
                    children: onDirtyChange("div", {
                      className: n.settingText,
                      children: [
                        onDirtyChange("span", {
                          className: n.settingTitle,
                          children: "Эмоджи-клан",
                        }),
                        onDirtyChange("span", {
                          className: n.settingDescription,
                          children: "Выбран при регистрации. Изменить нельзя",
                        }),
                      ],
                    }),
                  }),
                  onDirtyChange("div", {
                    className: n.avatarDisplay,
                    children: P.avatar,
                  }),
                ],
              }),
              onDirtyChange("div", {
                className: n.settingItem,
                children: [
                  onDirtyChange("div", {
                    className: n.settingInfo,
                    children: onDirtyChange("div", {
                      className: n.settingText,
                      children: [
                        onDirtyChange("span", {
                          className: n.settingTitle,
                          children: "Имя",
                        }),
                        onDirtyChange("span", {
                          className: n.settingDescription,
                          children: "Ваше отображаемое имя",
                        }),
                      ],
                    }),
                  }),
                  onDirtyChange("div", {
                    className: n.settingControl,
                    children: [
                      onDirtyChange(ce, {
                        value: P.name,
                        onChange: (b) => x("name", b),
                      }),
                      T.displayName &&
                        onDirtyChange("span", {
                          className: n.fieldError,
                          children: T.displayName,
                        }),
                    ],
                  }),
                ],
              }),
              onDirtyChange("div", {
                className: n.settingItem,
                children: [
                  onDirtyChange("div", {
                    className: n.settingInfo,
                    children: onDirtyChange("div", {
                      className: n.settingText,
                      children: [
                        onDirtyChange("span", {
                          className: n.settingTitle,
                          children: "Username",
                        }),
                        onDirtyChange("span", {
                          className: n.settingDescription,
                          children:
                            "Ваш уникальный идентификатор (только латиница, цифры и _)",
                        }),
                      ],
                    }),
                  }),
                  onDirtyChange("div", {
                    className: n.settingControl,
                    children: [
                      onDirtyChange(ce, {
                        value: P.username,
                        onChange: (b) => x("username", b),
                      }),
                      T.username &&
                        onDirtyChange("span", {
                          className: n.fieldError,
                          children: T.username,
                        }),
                    ],
                  }),
                ],
              }),
              onDirtyChange("div", {
                className: `${n.settingItem} ${n.column}`,
                children: [
                  onDirtyChange("div", {
                    className: n.settingInfo,
                    children: onDirtyChange("div", {
                      className: n.settingText,
                      children: [
                        onDirtyChange("span", {
                          className: n.settingTitle,
                          children: "О себе",
                        }),
                        onDirtyChange("span", {
                          className: n.settingDescription,
                          children: "Расскажите немного о себе",
                        }),
                      ],
                    }),
                  }),
                  onDirtyChange("textarea", {
                    className: n.bioTextarea,
                    value: P.bio,
                    onChange: (b) => x("bio", b.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  T.bio &&
                    onDirtyChange("span", {
                      className: n.fieldError,
                      children: T.bio,
                    }),
                ],
              }),
              !ge &&
                C.length > 0 &&
                onDirtyChange("div", {
                  className: `${n.settingItem} ${n.column}`,
                  children: [
                    onDirtyChange("div", {
                      className: n.settingInfo,
                      children: onDirtyChange("div", {
                        className: n.settingText,
                        children: [
                          onDirtyChange("span", {
                            className: n.settingTitle,
                            children: "Пин",
                          }),
                          onDirtyChange("span", {
                            className: n.settingDescription,
                            children: "Отображается рядом с именем",
                          }),
                        ],
                      }),
                    }),
                    onDirtyChange("div", {
                      className: n.pinGrid,
                      children: C.map((b) =>
                        onDirtyChange(
                          "button",
                          {
                            className: `${n.pinItem} ${
                              B?.slug === b.slug ? n.pinActive : ""
                            }`,
                            onClick: () => X(b),
                            disabled: M,
                            title: b.description || b.name,
                            type: "button",
                            children: [
                              onDirtyChange("img", {
                                src: b.url,
                                alt: b.name,
                                className: n.pinImage,
                              }),
                              onDirtyChange("span", {
                                className: n.pinName,
                                children: b.name,
                              }),
                            ],
                          },
                          b.slug
                        )
                      ),
                    }),
                  ],
                }),
              i &&
                onDirtyChange("div", { className: n.saveError, children: i }),
            ],
          }),
          p &&
            onDirtyChange("div", {
              className: n.section,
              children: onDirtyChange("button", {
                type: "button",
                className: n.logoutButton,
                onClick: () => {
                  v();
                  onClose();
                },
                children: [
                  onDirtyChange(am, { size: 20 }),
                  onDirtyChange("span", { children: "Выйти из аккаунта" }),
                ],
              }),
            }),
          onDirtyChange("div", {
            className: n.section,
            children: onDirtyChange("button", {
              type: "button",
              className: n.deleteAccountButton,
              onClick: () =>
                openModal(onDirtyChange(Zn, { onClose: closeModal })),
              children: "Удалить аккаунт",
            }),
          }),
        ],
      });
});

const ms = "JquS";
const ps = "QgdE";
const fs = "JaYg";
const gs = "miFL";
const he = { content: ms, title: ps, subtitle: fs, actions: gs };

export function CancelSubscriptionModal({ expiresAt, onConfirm, onClose }) {
  const [m, s] = d(false);

  const d = new Date(expiresAt).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const v = async () => {
    if (!m) {
      s(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        s(false);
      }
    }
  };

  return onConfirm(M, {
    onClose: onClose,
    showHeader: false,
    children: onConfirm("div", {
      className: he.content,
      children: [
        onConfirm("h2", {
          className: he.title,
          children: "Отключить автопродление?",
        }),
        onConfirm("p", {
          className: he.subtitle,
          children: [
            "Подписка будет действовать до ",
            d,
            ". После этой даты она просто не продлится автоматически. Вы сможете включить автопродление обратно в любой момент.",
          ],
        }),
        onConfirm("div", {
          className: he.actions,
          children: [
            onConfirm(B, {
              variant: "secondary",
              onClick: (l) => {
                l.stopPropagation();
                onClose();
              },
              children: "Оставить",
            }),
            onConfirm(B, {
              variant: "danger",
              onClick: (l) => {
                l.stopPropagation();
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

const bs = "msFu";
const Ns = "uaXT";
const ws = "Iy5h";
const ys = "n3g7";
const ue = { content: bs, title: Ns, subtitle: ws, actions: ys };
function ye({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [l, f] = onConfirm(false);

  const p = async () => {
    if (!l) {
      f(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        f(false);
      }
    }
  };

  return message(M, {
    onClose: onClose,
    showHeader: false,
    children: message("div", {
      className: ue.content,
      children: [
        message("h2", { className: ue.title, children: title }),
        message("p", { className: ue.subtitle, children: message }),
        message("div", {
          className: ue.actions,
          children: [
            message(B, {
              variant: "secondary",
              onClick: (w) => {
                w.stopPropagation();
                onClose();
              },
              children: cancelText,
            }),
            message(B, {
              variant: danger ? "danger" : "primary",
              onClick: (w) => {
                w.stopPropagation();
                p();
              },
              disabled: l,
              loading: l,
              children: confirmText,
            }),
          ],
        }),
      ],
    }),
  });
}
const ks = "sKQn";
const Cs = "pImw";
const Ts = "cjn8";
const Is = "qyh0";
const Ms = "QTzQ";
const oe = {
  content: ks,
  title: Cs,
  subtitle: Ts,
  disclaimer: Is,
  actions: Ms,
};
function Ps({ onConfirm, onClose }) {
  const [o, m] = d(false);

  const s = async () => {
    if (!o) {
      m(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        m(false);
      }
    }
  };

  return onClose(M, {
    onClose: onClose,
    showHeader: false,
    children: onClose("div", {
      className: oe.content,
      children: [
        onClose("h2", {
          className: oe.title,
          children: "Включить автопродление?",
        }),
        onClose("p", {
          className: oe.subtitle,
          children:
            "Подписка будет автоматически продлеваться каждый месяц. Средства будут списываться с привязанной карты.",
        }),
        onClose("p", {
          className: oe.disclaimer,
          children: [
            "Нажимая «Включить», вы соглашаетесь с",
            " ",
            onClose("a", {
              href: "/subscription-terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями подписки",
            }),
            ",",
            " ",
            onClose("a", {
              href: "/privacy",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "политикой конфиденциальности",
            }),
            " и",
            " ",
            onClose("a", {
              href: "/terms",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "условиями использования",
            }),
            ".",
          ],
        }),
        onClose("div", {
          className: oe.actions,
          children: [
            onClose(B, {
              variant: "secondary",
              onClick: (d) => {
                d.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            onClose(B, {
              variant: "primary",
              onClick: (d) => {
                d.stopPropagation();
                s();
              },
              disabled: o,
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

const $s = 2247;
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
const z = 370 / 1080;
const Ls = 605;
const Es = 40;
const Ds = { s: 14, x: 623 };
const Bs = { s: 15, x: 629 };
function Rs(t, a) {
  const o = (t + a + 200) / z;
  const m = Ie.slice();
  let s = 1785;
  let d = 218;
  let v = true;
  for (let l = 98; l < Ie_length && ((d += 18), (s += d), !(s > o)); l++) {
    const f = v ? Bs : Ds;
    m[l] = [f.s, f.x, s];
    v = !v;
  }
  return m;
}
function As() {
  const t = B_1(null);
  const a = B_1(null);
  const o = B_1({ f: 0, ts: 0, tl: Ie.slice(), xOff: 0, yOff: 0 });

  y(() => {
    const a_current = a.current;
    const t_current = t.current;
    if (!a_current || !t_current) {
      return;
    }
    function d() {
      const { innerHeight, innerWidth } = window;

      const t_current_parentElement = t_current.parentElement;
      let M;
      let $;
      if (t_current_parentElement) {
        const T = t_current_parentElement.getBoundingClientRect();
        M = T.top;
        $ = T.left + (T.width - 370) / 2;
      } else {
        M = (innerHeight - 900) / 2;
        $ = (innerWidth - 370) / 2;
      }
      const S = innerWidth <= 1173;
      o.current.yOff = 357 * z - M + (S ? 60 : 0);
      const c = 260;
      o.current.xOff = Ls * z - $ - c;
      o.current.tl = Rs(innerHeight, o.current.yOff);
    }
    const v = setTimeout(d, 260);
    let l;
    const f = () => {
      clearTimeout(l);
      l = setTimeout(d, 150);
    };
    window.addEventListener("resize", f);
    let p;
    function w(y) {
      const o_current = o.current;
      if (y - o_current.ts >= Es) {
        const g = o_current.tl[o_current.f];
        if (!g) {
          a_current.style.visibility = "hidden";
        } else {
          const [M, $, S] = g;
          const [c, , T, L] = Ss[M];
          const i = (T * z + 0.5) | 0;
          const k = (L * z + 0.5) | 0;
          a_current.style.cssText = `visibility:visible;width:${i}px;height:${k}px;background-image:url(/assets/nuksta/nuksta-chechik-sprite.png);background-repeat:no-repeat;image-rendering:pixelated;will-change:transform;background-position:${-(
            (c * z + 0.5) |
            0
          )}px 0px;background-size:${($s * z + 0.5) | 0}px ${
            (xs * z + 0.5) | 0
          }px;transform:translate(${($ * z - o_current.xOff + 0.5) | 0}px,${
            (S * z - o_current.yOff + 0.5) | 0
          }px)`;
        }
        o_current.f = (o_current.f + 1) % Ie_length;
        o_current.ts = y;
      }
      p = requestAnimationFrame(w);
    }
    p = requestAnimationFrame(w);

    return () => {
      cancelAnimationFrame(p);
      clearTimeout(v);
      clearTimeout(l);
      window.removeEventListener("resize", f);
    };
  }, []);

  return a(m, {
    children: [
      a("div", {
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
        a("div", {
          style: {
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 99999,
            overflow: "hidden",
          },
          children: a("div", {
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
const Us = "hSla";
const Os = "ueZR";
const _s = "vhQS";
const Hs = "DtXk";
const Ws = "yLi1";
const Fs = "UXvq";
const Vs = "C4lV";
const zs = "PnYX";
const Zs = "UNJm";
const js = "NacW";
const qs = "yneY";
const Gs = "S25H";
const Xs = "dcjE";
const Ks = "BW2a";
const Js = "Peg3";
const Qs = "VrVD";
const Ys = "lhAW";
const ei = "OfqU";
const ni = "Ih5N";
const ti = "VWLx";
const si = "EFKd";
const ii = "w2IF";
const ai = "Bucr";
const li = "cYBv";
const oi = "uFQK";
const ci = "f6xL";
const ri = "sunF";
const di = "TIMf";
const hi = "tDC4";
const ui = "TXDJ";

const h = {
  modal: Us,
  sub: Os,
  top: _s,
  bottom: Hs,
  title: Ws,
  section: Fs,
  profileSection: Vs,
  label: zs,
  labelRow: Zs,
  dim: js,
  row: qs,
  icon: Gs,
  iconGradient: Xs,
  name: Ks,
  nameGradient: Js,
  namePinBadge: Qs,
  promoVideo: Ys,
  features: ei,
  featureContent: ni,
  featureTitle: ti,
  gradientText: si,
  soon: ii,
  infoBtn: ai,
  footer: li,
  disclaimer: oi,
  recurringConsent: ci,
  consentLink: ri,
  disclaimerLink: di,
  subscribeBtn: hi,
  activeLabel: ui,
};

function xe({ text }) {
  return a(an_1, {
    text: text,
    multiline: true,
    children: a("span", {
      className: h.infoBtn,
      children: a(an, { size: 14 }),
    }),
  });
}
function mi({ isOpen, onClose }) {
  const o = k();
  const [m, s] = d(false);
  const [d, v] = d(false);
  const [l, f] = d(false);

  y(() => {
    if (isOpen) {
      f(false);

      Z.getStatus()
        .then((u) => v(!!u.recurringEnabled))
        .catch(() => v(false));
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const p = o?.subscription?.isActive ?? false;
  const w = "199";

  const y = async () => {
    if (m) {
      return;
    }
    if (d && !l) {
      R.error("Подтвердите согласие на автосписание");
      return;
    }
    s(true);
    const u = window.open("about:blank", "_blank");
    try {
      const g = await Z.pay();
      if (g.error) {
        u?.close();
        R.error(g.error);
        return;
      }

      if (g.confirmationUrl && u) {
        u.location.href = g.confirmationUrl;
      } else if (g.confirmationUrl) {
        window.location.href = g.confirmationUrl;
      }
    } catch (g) {
      u?.close();

      R.error(
        g instanceof Error && g.message
          ? g.message
          : "Ошибка при создании платежа"
      );
    } finally {
      s(false);
    }
  };

  return $(
    onClose(M, {
      onClose: onClose,
      showHeader: false,
      frameless: true,
      className: h.modal,
      children: [
        onClose(As, {}),
        onClose("div", {
          className: h.sub,
          children: [
            onClose("div", {
              className: h.top,
              children: [
                onClose("div", { className: h.title, children: "ИТД НУКСТА" }),
                onClose("div", {
                  className: `${h.section} ${h.profileSection}`,
                  children: [
                    onClose("div", {
                      className: h.label,
                      children: "Ваш профиль с ИТД НУКСТА",
                    }),
                    onClose("div", {
                      className: h.row,
                      children: [
                        onClose(g, { src: o?.avatar || null, size: "sm" }),
                        onClose("div", {
                          children: [
                            onClose("div", {
                              className: h.name,
                              children: [
                                onClose("span", {
                                  className: h.nameGradient,
                                  children: o?.displayName,
                                }),
                                onClose("img", {
                                  src: "/assets/pins/subscription_nuksta.gif",
                                  alt: "НУКСТА",
                                  width: 24,
                                  height: 24,
                                  className: h.namePinBadge,
                                }),
                              ],
                            }),
                            onClose("div", {
                              className: h.dim,
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
            onClose("video", {
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
              className: h.promoVideo,
            }),
            onClose("div", {
              className: h.bottom,
              children: [
                onClose("div", {
                  className: h.section,
                  children: [
                    onClose("div", {
                      className: h.labelRow,
                      children: [
                        onClose("span", {
                          className: h.label,
                          children: "Прикольные украшалки",
                        }),
                        onClose(xe, {
                          text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                        }),
                      ],
                    }),
                    onClose("div", {
                      className: h.features,
                      children: [
                        onClose("div", {
                          className: h.row,
                          children: [
                            onClose("span", {
                              className: h.icon,
                              children: onClose("div", {
                                className: h.iconGradient,
                              }),
                            }),
                            onClose("div", {
                              children: [
                                onClose("div", {
                                  className: `${h.featureTitle} ${h.gradientText}`,
                                  children: "Уникальный цвет ника",
                                }),
                                onClose("div", {
                                  className: h.dim,
                                  children:
                                    "Клевый цвет ника, который показывает, что вы поддерживаете итд!",
                                }),
                              ],
                            }),
                          ],
                        }),
                        onClose("div", {
                          className: h.row,
                          children: [
                            onClose("span", {
                              className: h.icon,
                              children: onClose("img", {
                                src: "/assets/pins/subscription_nuksta.gif",
                                alt: "Пин",
                                width: 20,
                                height: 20,
                              }),
                            }),
                            onClose("div", {
                              children: [
                                onClose("div", {
                                  className: h.featureTitle,
                                  children: "Пин поддерживателя",
                                }),
                                onClose("div", {
                                  className: h.dim,
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
                onClose("div", {
                  className: h.section,
                  children: [
                    onClose("div", {
                      className: h.labelRow,
                      children: [
                        onClose("span", {
                          className: h.label,
                          children: "Сможете с нами тестить новые штуки",
                        }),
                        onClose(xe, {
                          text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                        }),
                      ],
                    }),
                    onClose("div", {
                      className: h.features,
                      children: [
                        onClose("div", {
                          className: h.row,
                          children: [
                            onClose("span", {
                              className: h.icon,
                              children: onClose(fn, { size: 20 }),
                            }),
                            onClose("div", {
                              className: h.featureContent,
                              children: [
                                onClose("div", {
                                  className: h.featureTitle,
                                  children: "Загрузка видео",
                                }),
                                onClose("div", {
                                  className: h.dim,
                                  children:
                                    "Получите возможность загружать видео одним из первых",
                                }),
                              ],
                            }),
                          ],
                        }),
                        onClose("div", {
                          className: h.row,
                          children: [
                            onClose("span", {
                              className: h.icon,
                              children: onClose(pn, { size: 20 }),
                            }),
                            onClose("div", {
                              className: h.featureContent,
                              children: [
                                onClose("div", {
                                  className: h.featureTitle,
                                  children: [
                                    "Музыка ",
                                    onClose("span", {
                                      className: h.soon,
                                      children: "soon",
                                    }),
                                  ],
                                }),
                                onClose("div", {
                                  className: h.dim,
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
                onClose("div", {
                  className: h.footer,
                  children: [
                    d && !p
                      ? onClose(sn, {
                          checked: l,
                          onChange: f,
                          className: h.recurringConsent,
                          label: onClose(m, {
                            children: [
                              "Я соглашаюсь на автоматическое продление подписки — ",
                              w,
                              " ₽ ежемесячно с сохранённого способа оплаты до отключения в настройках — на ",
                              onClose("a", {
                                href: "/recurring-terms",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: h.consentLink,
                                onClick: (u) => u.stopPropagation(),
                                children: "условиях автоматических списаний",
                              }),
                              ", а также с ",
                              onClose("a", {
                                href: "/privacy",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: h.consentLink,
                                onClick: (u) => u.stopPropagation(),
                                children: "политикой конфиденциальности",
                              }),
                              " и ",
                              onClose("a", {
                                href: "/terms",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: h.consentLink,
                                onClick: (u) => u.stopPropagation(),
                                children: "условиями использования",
                              }),
                              ".",
                            ],
                          }),
                        })
                      : onClose("div", {
                          className: h.disclaimer,
                          children: [
                            "Оплачивая, вы соглашаетесь с ",
                            onClose("a", {
                              href: "/subscription-terms",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: h.disclaimerLink,
                              children: "условиями платного доступа",
                            }),
                            ", ",
                            onClose("a", {
                              href: "/privacy",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: h.disclaimerLink,
                              children: "политикой конфиденциальности",
                            }),
                            " и ",
                            onClose("a", {
                              href: "/terms",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: h.disclaimerLink,
                              children: "условиями использования",
                            }),
                            ".",
                          ],
                        }),
                    p
                      ? onClose("div", {
                          className: h.activeLabel,
                          children: "Подписка активна",
                        })
                      : onClose("button", {
                          type: "button",
                          className: h.subscribeBtn,
                          onClick: y,
                          disabled: m || (d && !l),
                          children: `Оплатить ${w}₽ на месяц`,
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

const pi = {
  yoo_money: "ЮMoney",
  sberbank: "SberPay",
  tinkoff_bank: "T-Pay",
  sbp: "СБП",
  mobile_balance: "Баланс телефона",
  sber_loan: "Кредит от СберБанка",
  sber_bnpl: "Плати частями",
  cash: "Наличные",
};

const fi = {
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

  if (!pi[t.type]) {
    return t.type;
  }
}
function gi(t) {
  return fi[t.type] || "";
}
const Ee = 5;
function vi() {
  const t = x((i) => i.profile);

  const [a, o] = d(false);
  const [m, s] = d(false);
  const [d, v] = d(false);
  const [l, f] = d([]);
  const [p, w] = d(true);
  const [y, u] = d(false);
  const [g, M] = d(null);
  y(() => {
    if (t?.subscription?.isActive) {
      Z.getMethods()
        .then(f)
        .catch(() => f([]))
        .finally(() => w(false));
    }
  }, [t?.subscription?.isActive]);

  const $ = () => {
    Z.getMethods()
      .then(f)
      .catch(() => {});
  };

  const S = async (i) => {
    try {
      await Z.setDefaultMethod(i);

      f((k) =>
        k.map((I) => ({
          ...I,
          isDefault: I.id === i,
        }))
      );
    } catch {
      R.error("Не удалось изменить основной способ оплаты");
    }
  };

  const c = async (i) => {
    try {
      const k = await Z.deleteMethod(i.id);

      f((I) => I.filter((_) => _.id !== i.id));

      if (k.autoRenewalDisabled && t?.subscription) {
        x.getState().setProfile({
          ...t,
          subscription: { ...t.subscription, autoRenewal: false },
        });
      }

      $();
    } catch {
      R.error("Не удалось отвязать карту");
    }
  };

  const T = async () => {
    if (y) {
      return;
    }
    u(true);
    const i = window.open("about:blank", "_blank");
    try {
      const k = await Z.bindCard();
      const k_error = k.error;
      if (k_error || !k.confirmationUrl) {
        i?.close();
        R.error(k_error || "Привязка карт временно недоступна");
        return;
      }

      if (i) {
        i.location.href = k.confirmationUrl;
      } else {
        window.location.href = k.confirmationUrl;
      }
    } catch (k) {
      i?.close();

      R.error(
        k instanceof Error && k.message
          ? k.message
          : "Привязка карт временно недоступна"
      );
    } finally {
      u(false);
    }
  };

  const L = [...l].sort((i, k) =>
    i.isDefault !== k.isDefault
      ? i.isDefault
        ? -1
        : 1
      : (k.createdAt || "").localeCompare(i.createdAt || "")
  );

  return a(m, {
    children: [
      a("h2", { className: n.contentTitle, children: "Оплата" }),
      a("div", {
        className: n.section,
        children: t?.subscription?.isActive
          ? a(m, {
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
                            children: "Подписка ИТД НУКСТА",
                          }),
                          a("span", {
                            className: n.settingDescription,
                            children: t.subscription.expiresAt
                              ? (() => {
                                  const i = new Date(t.subscription.expiresAt);
                                  const k = new Date();

                                  const I = Math.max(
                                    0,
                                    Math.ceil(
                                      (i.getTime() - k.getTime()) /
                                        (1000 /* 1e3 */ * 60 * 60 * 24)
                                    )
                                  );

                                  return `до ${i.toLocaleDateString("ru-RU", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  })} (${I} ${
                                    I === 1 ? "день" : I < 5 ? "дня" : "дней"
                                  })`;
                                })()
                              : "Активна",
                          }),
                        ],
                      }),
                    }),
                    t.subscription.autoRenewal
                      ? a("button", {
                          type: "button",
                          className: n.subscriptionCancel,
                          onClick: () => o(true),
                          children: "Отключить автопродление",
                        })
                      : a("button", {
                          type: "button",
                          className: n.subscriptionRenew,
                          onClick: () => s(true),
                          children: "Включить автопродление",
                        }),
                  ],
                }),
                a("div", {
                  className: `${n.settingItem} ${n.column}`,
                  children: [
                    a("div", {
                      className: n.settingInfo,
                      children: a("div", {
                        className: n.settingText,
                        children: [
                          a("span", {
                            className: n.settingTitle,
                            children: "Способы оплаты",
                          }),
                          a("span", {
                            className: n.settingDescription,
                            children:
                              "Сохранённые способы для автопродления подписки. Отвязать можно в любой момент",
                          }),
                        ],
                      }),
                    }),
                    a("div", {
                      className: n.paymentMethodsList,
                      children: p
                        ? a(a4, {})
                        : a(m, {
                            children: [
                              L.map((i) => {
                                const k = i.type === "bank_card" ? Se : wn;
                                return a(
                                  "div",
                                  {
                                    className: n.paymentMethodRow,
                                    children: [
                                      a("div", {
                                        className: n.paymentMethodIcon,
                                        children: a(k, { size: 18 }),
                                      }),
                                      a("div", {
                                        className: n.paymentMethodInfo,
                                        children: [
                                          a("span", {
                                            className: n.paymentMethodTitle,
                                            children: [
                                              Le(i),
                                              i.isDefault &&
                                                l.length > 1 &&
                                                a("span", {
                                                  className:
                                                    n.paymentMethodBadge,
                                                  children: "основной",
                                                }),
                                            ],
                                          }),
                                          a("span", {
                                            className: n.paymentMethodSubtitle,
                                            children: gi(i),
                                          }),
                                        ],
                                      }),
                                      a("div", {
                                        className: n.paymentMethodActions,
                                        children: [
                                          !i.isDefault &&
                                            a("button", {
                                              type: "button",
                                              className: n.paymentMethodBtn,
                                              onClick: () => S(i.id),
                                              children: "Сделать основным",
                                            }),
                                          a("button", {
                                            type: "button",
                                            className: n.paymentMethodBtnDanger,
                                            onClick: () => M(i),
                                            children: "Отвязать",
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  i.id
                                );
                              }),
                              l.length === 0 &&
                                a("div", {
                                  className: n.paymentMethodsEmpty,
                                  children: [
                                    a(Se, { size: 18 }),
                                    a("span", {
                                      children:
                                        "Нет привязанных методов оплаты",
                                    }),
                                  ],
                                }),
                              l.length < Ee
                                ? a("button", {
                                    type: "button",
                                    className: n.paymentMethodAdd,
                                    onClick: T,
                                    disabled: y,
                                    children: [
                                      a("span", {
                                        className: n.paymentMethodIcon,
                                        children: a(Je, { size: 16 }),
                                      }),
                                      "Добавить способ оплаты",
                                    ],
                                  })
                                : a("div", {
                                    className: n.paymentMethodsEmpty,
                                    children: a("span", {
                                      children: [
                                        "Достигнут лимит способов оплаты (",
                                        Ee,
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
            })
          : a("div", {
              className: n.settingItem,
              children: [
                a("div", {
                  className: n.settingInfo,
                  children: a("div", {
                    className: n.settingText,
                    children: [
                      a("span", {
                        className: n.settingTitle,
                        children: "Подписка ИТД НУКСТА",
                      }),
                      a("span", {
                        className: n.settingDescription,
                        children: "Не оформлена",
                      }),
                    ],
                  }),
                }),
                a("button", {
                  type: "button",
                  className: n.subscriptionRenew,
                  onClick: () => v(true),
                  children: "Оформить",
                }),
              ],
            }),
      }),
      a &&
        t?.subscription?.expiresAt &&
        a(CancelSubscriptionModal, {
          expiresAt: t.subscription.expiresAt,
          onConfirm: async () => {
            const i = await Z.setAutoRenewal(false);
            x.getState().setProfile({
              ...t,
              subscription: { ...t.subscription, autoRenewal: i.autoRenewal },
            });
          },
          onClose: () => o(false),
        }),
      m &&
        a(Ps, {
          onConfirm: async () => {
            const i = await Z.setAutoRenewal(true);
            x.getState().setProfile({
              ...t,
              subscription: {
                ...t.subscription,
                autoRenewal: i.autoRenewal,
                ...(i.expiresAt ? { expiresAt: i.expiresAt } : {}),
              },
            });
          },
          onClose: () => s(false),
        }),
      g &&
        a(ye, {
          title: "Отвязать способ оплаты?",
          message: `${Le(g)} будет отвязан. Это действие нельзя отменить.`,
          confirmText: "Отвязать",
          danger: true,
          onConfirm: () => c(g),
          onClose: () => M(null),
        }),
      a(mi, {
        isOpen: d,
        onClose: () => {
          v(false);

          Z.getMethods()
            .then(f)
            .catch(() => {});
        },
      }),
    ],
  });
}
const bi = "KhhU";
const Ni = "FIMo";
const wi = "qc2w";
const yi = "hPWZ";
const ki = "LF4Y";
const Ci = "Webx";
const Ti = "ApiZ";

const ne = {
  selectWrapper: bi,
  select: Ni,
  open: wi,
  selectedValue: yi,
  dropdown: ki,
  option: Ci,
  selected: Ti,
};

function ke({ value, options, onChange, disabled }) {
  const [s, d] = d(false);
  const v = B_1(null);

  const l = options.find((p) => p.value === value);

  y(() => {
    const p = (w) => {
      if (v.current && !v.current.contains(w.target)) {
        d(false);
      }
    };

    if (s) {
      document.addEventListener("mousedown", p);
    }

    return () => {
      document.removeEventListener("mousedown", p);
    };
  }, [s]);
  const f = (p) => {
    onChange(p);
    d(false);
  };
  return options("div", {
    ref: v,
    className: ne.selectWrapper,
    children: [
      options("button", {
        type: "button",
        className: `${ne.select} ${s ? ne.open : ""}`,
        onClick: (p) => {
          p.stopPropagation();

          if (!disabled) {
            d(!s);
          }
        },
        disabled: disabled,
        children: [
          options("span", { className: ne.selectedValue, children: l?.label }),
          options(gn, { size: 16 }),
        ],
      }),
      s &&
        options("div", {
          className: ne.dropdown,
          children: options.map((p) =>
            options(
              "button",
              {
                type: "button",
                className: `${ne.option} ${
                  p.value === value ? ne.selected : ""
                }`,
                onClick: () => f(p.value),
                children: p.label,
              },
              p.value
            )
          ),
        }),
    ],
  });
}

const De = [
  { value: "everyone", label: "Все" },
  { value: "followers", label: "Подписчики" },
  { value: "mutual", label: "Взаимные подписчики" },
  { value: "nobody", label: "Никто" },
];

const Ii = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

function Mi() {
  const { theme, setTheme } = He();
  return setTheme(m, {
    children: [
      setTheme("h2", { className: n.contentTitle, children: "Оформление" }),
      setTheme("div", {
        className: n.section,
        children: setTheme("div", {
          className: n.settingItem,
          children: [
            setTheme("div", {
              className: n.settingInfo,
              children: setTheme("div", {
                className: n.settingText,
                children: [
                  setTheme("span", {
                    className: n.settingTitle,
                    children: "Тема",
                  }),
                  setTheme("span", {
                    className: n.settingDescription,
                    children: "Выберите цветовую схему приложения",
                  }),
                ],
              }),
            }),
            setTheme(ke, {
              value: theme,
              options: Ii,
              onChange: (o) => setTheme(o),
            }),
          ],
        }),
      }),
    ],
  });
}
function pe(t, a, o, m) {
  const s = t % 10;
  const d = t % 100;
  return d >= 11 && d <= 19 ? m : s === 1 ? a : s >= 2 && s <= 4 ? o : m;
}
function Pi(t) {
  const a = new Date(t).getTime();
  if (Number.isNaN(a)) {
    return "—";
  }
  const o = Math.max(0, Math.floor((Date.now() - a) / 1000 /* 1e3 */));
  if (o < 60) {
    return "только что";
  }
  const m = Math.floor(o / 60);
  if (m < 60) {
    return `${m} ${pe(m, "минуту", "минуты", "минут")} назад`;
  }
  const s = Math.floor(m / 60);
  if (s < 24) {
    return `${s} ${pe(s, "час", "часа", "часов")} назад`;
  }
  const d = Math.floor(s / 24);
  return d < 30
    ? `${d} ${pe(d, "день", "дня", "дней")} назад`
    : new Date(t).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
}
function Be(t) {
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
function Si(t) {
  const a = [t.ipCity, t.ipCountry].filter(Boolean);
  return a.length ? a.join(", ") : "Местоположение неизвестно";
}
function $i({ type }) {
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
function xi({ onChangePassword }) {
  const [a, o] = d([]);
  const [m, s] = d(true);
  const [d, v] = d(null);
  const [l, f] = d(null);
  const [p, w] = d(false);

  const y = a6_1(async () => {
    s(true);
    v(null);
    try {
      o(await Ne.list());
    } catch {
      v("Не удалось загрузить активные сессии");
    } finally {
      s(false);
    }
  }, []);

  y(() => {
    y();
  }, [y]);
  const [u, g] = d(null);

  const M = a6_1(
    async (c) => {
      f(c.id);
      try {
        const { loggedOut } = await Ne.revoke(c.id, c.isCurrent);
        if (loggedOut) {
          await x.getState().logout();
          return;
        }

        o((L) => L.filter((i) => i.id !== c.id));

        R.success("Сессия завершена");
      } catch {
        y();
      } finally {
        f(null);
      }
    },
    [y]
  );

  const $ = a6_1(async () => {
    try {
      const c = await Ne.revokeOthers();
      w(false);

      R.success(
        c > 0 ? `Завершено сессий: ${c}` : "Других активных сессий нет"
      );

      await y();
    } catch {}
  }, [y]);

  const S = a.reduce((c, T) => (T.isCurrent ? c : c + 1), 0);

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
          m
            ? a(a4, {})
            : d
            ? a("div", { className: n.saveError, children: d })
            : a.length === 0
            ? a("div", {
                className: n.emptyBlocklist,
                children: "Активных сессий не найдено",
              })
            : a(m, {
                children: [
                  a("div", {
                    className: n.sessionsList,
                    children: a.map((c) =>
                      a(
                        "div",
                        {
                          className: n.sessionItem,
                          children: [
                            a("div", {
                              className: n.sessionIcon,
                              children: a($i, { type: c.deviceType }),
                            }),
                            a("div", {
                              className: n.sessionInfo,
                              children: [
                                a("div", {
                                  className: n.sessionDevice,
                                  children: Be(c),
                                }),
                                a("div", {
                                  className: n.sessionTime,
                                  children: [Si(c), " · ", Pi(c.lastUsedAt)],
                                }),
                              ],
                            }),
                            c.isCurrent
                              ? a("span", {
                                  className: n.sessionCurrentBadge,
                                  children: "Это устройство",
                                })
                              : a("button", {
                                  type: "button",
                                  className: n.sessionRemove,
                                  title: "Завершить сессию",
                                  "aria-label": "Завершить сессию",
                                  disabled: l === c.id,
                                  onClick: () => g(c),
                                  children:
                                    l === c.id
                                      ? a(Qe, { size: 16 })
                                      : a(Ye, { size: 16 }),
                                }),
                          ],
                        },
                        c.id
                      )
                    ),
                  }),
                  S > 0 &&
                    a("button", {
                      type: "button",
                      className: n.logoutButton,
                      onClick: () => w(true),
                      children: "Завершить все другие сессии",
                    }),
                ],
              }),
        ],
      }),
      u &&
        a(ye, {
          title: "Завершить сессию?",
          message: `Вы действительно хотите завершить сессию «${Be(
            u
          )}»? Устройство будет разлогинено.`,
          confirmText: "Завершить",
          danger: true,
          onConfirm: () => M(u),
          onClose: () => g(null),
        }),
      p &&
        a(ye, {
          title: "Завершить все другие сессии?",
          message: `Вы действительно хотите завершить ${S} ${pe(
            S,
            "другую сессию",
            "другие сессии",
            "других сессий"
          )}? Устройства будут разлогинены.`,
          confirmText: `Завершить все (${S})`,
          danger: true,
          onConfirm: $,
          onClose: () => w(false),
        }),
    ],
  });
}

const Li = aj(({ onDirtyChange, onSavingChange }, m) => {
  const { settings, fetchSettings, updateSettings } = en();

  const [l, f] = fetchSettings({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [p, w] = fetchSettings(null);
  const [y, u] = fetchSettings(false);
  const [g, M] = fetchSettings(false);
  const [$, S] = fetchSettings(false);

  y(() => {
    if (!$ && !settings) {
      fetchSettings();
    }
  }, [$]);

  y(() => {
    if (settings && !$) {
      const i = {
        webEnabled: settings.webEnabled,
        soundEnabled: settings.soundEnabled,
        follows: settings.preferences.follows,
        reactions: settings.preferences.reactions,
        replies: settings.preferences.replies,
        mentions: settings.preferences.mentions,
        wallPosts: settings.preferences.wallPosts,
      };
      f(i);
      w(i);
      u(false);
      S(true);
    }
  }, [settings, $]);

  y(() => {
    onDirtyChange(y);
  }, [y]);

  y(() => {
    onSavingChange(g);
  }, [g]);

  const c = (i, k) => {
    const I = { ...l, [i]: k };
    f(I);

    if (p) {
      const _ = Object.keys(I).some((P) => I[P] !== p[P]);
      u(_);
    }
  };

  const T = async () => {
    if (!(!y || g)) {
      M(true);
      try {
        await updateSettings({
          webEnabled: l.webEnabled,
          soundEnabled: l.soundEnabled,
          preferences: {
            follows: l.follows,
            reactions: l.reactions,
            replies: l.replies,
            mentions: l.mentions,
            wallPosts: l.wallPosts,
          },
        });

        w({ ...l });
        u(false);
        R.success("Настройки уведомлений сохранены");
      } catch (i) {
        console.error("Failed to save notification settings:", i);
        R.error("Не удалось сохранить настройки");
      } finally {
        M(false);
      }
    }
  };

  const L = () => {
    if (p) {
      f({ ...p });
      u(false);
    }
  };

  al(m, () => ({
    save: T,
    discard: L,
  }));

  return onDirtyChange(m, {
    children: [
      onDirtyChange("h2", {
        className: n.contentTitle,
        children: "Уведомления",
      }),
      onDirtyChange("div", {
        className: n.section,
        children: [
          onDirtyChange("div", {
            className: n.sectionTitle,
            children: "Основные",
          }),
          onDirtyChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => c("webEnabled", !l.webEnabled),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onDirtyChange(_e, { size: 20 }),
                  }),
                  onDirtyChange("div", {
                    className: n.settingText,
                    children: [
                      onDirtyChange("span", {
                        className: n.settingTitle,
                        children: "Уведомления",
                      }),
                      onDirtyChange("span", {
                        className: n.settingDescription,
                        children: "Включение или отключение всех уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              onDirtyChange(Q, {
                checked: l.webEnabled,
                onChange: (i) => c("webEnabled", i),
              }),
            ],
          }),
          onDirtyChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => c("soundEnabled", !l.soundEnabled),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onDirtyChange(un, { size: 20 }),
                  }),
                  onDirtyChange("div", {
                    className: n.settingText,
                    children: [
                      onDirtyChange("span", {
                        className: n.settingTitle,
                        children: "Уведомления со звуком",
                      }),
                      onDirtyChange("span", {
                        className: n.settingDescription,
                        children: "Воспроизводить звуки уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              onDirtyChange(Q, {
                checked: l.soundEnabled,
                onChange: (i) => c("soundEnabled", i),
              }),
            ],
          }),
        ],
      }),
      onDirtyChange("div", {
        className: n.section,
        children: [
          onDirtyChange("div", {
            className: n.sectionTitle,
            children: "Пользователи",
          }),
          onDirtyChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => c("follows", !l.follows),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onDirtyChange(mn, { size: 20 }),
                  }),
                  onDirtyChange("div", {
                    className: n.settingText,
                    children: [
                      onDirtyChange("span", {
                        className: n.settingTitle,
                        children: "Подписки",
                      }),
                      onDirtyChange("span", {
                        className: n.settingDescription,
                        children: "Уведомления о подписках и запросах в друзья",
                      }),
                    ],
                  }),
                ],
              }),
              onDirtyChange(Q, {
                checked: l.follows,
                onChange: (i) => c("follows", i),
              }),
            ],
          }),
          onDirtyChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => c("wallPosts", !l.wallPosts),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onDirtyChange(Pe, { size: 20 }),
                  }),
                  onDirtyChange("div", {
                    className: n.settingText,
                    children: [
                      onDirtyChange("span", {
                        className: n.settingTitle,
                        children: "Посты на стене",
                      }),
                      onDirtyChange("span", {
                        className: n.settingDescription,
                        children: "Уведомления о новых постах на вашей стене",
                      }),
                    ],
                  }),
                ],
              }),
              onDirtyChange(Q, {
                checked: l.wallPosts,
                onChange: (i) => c("wallPosts", i),
              }),
            ],
          }),
        ],
      }),
      onDirtyChange("div", {
        className: n.section,
        children: [
          onDirtyChange("div", {
            className: n.sectionTitle,
            children: "Посты",
          }),
          onDirtyChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => c("reactions", !l.reactions),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.red}`,
                    children: onDirtyChange(hn, { size: 20 }),
                  }),
                  onDirtyChange("div", {
                    className: n.settingText,
                    children: [
                      onDirtyChange("span", {
                        className: n.settingTitle,
                        children: "Лайки и реакции",
                      }),
                      onDirtyChange("span", {
                        className: n.settingDescription,
                        children:
                          "Уведомления о реакциях на ваши посты и комментарии",
                      }),
                    ],
                  }),
                ],
              }),
              onDirtyChange(Q, {
                checked: l.reactions,
                onChange: (i) => c("reactions", i),
              }),
            ],
          }),
          onDirtyChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => c("replies", !l.replies),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onDirtyChange(Pe, { size: 20 }),
                  }),
                  onDirtyChange("div", {
                    className: n.settingText,
                    children: [
                      onDirtyChange("span", {
                        className: n.settingTitle,
                        children: "Комментарии и ответы",
                      }),
                      onDirtyChange("span", {
                        className: n.settingDescription,
                        children: "Уведомления о новых комментариях и ответах",
                      }),
                    ],
                  }),
                ],
              }),
              onDirtyChange(Q, {
                checked: l.replies,
                onChange: (i) => c("replies", i),
              }),
            ],
          }),
          onDirtyChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => c("mentions", !l.mentions),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.purple}`,
                    children: onDirtyChange(ln, { size: 20 }),
                  }),
                  onDirtyChange("div", {
                    className: n.settingText,
                    children: [
                      onDirtyChange("span", {
                        className: n.settingTitle,
                        children: "Упоминания",
                      }),
                      onDirtyChange("span", {
                        className: n.settingDescription,
                        children: "Уведомления когда вас упоминают в постах",
                      }),
                    ],
                  }),
                ],
              }),
              onDirtyChange(Q, {
                checked: l.mentions,
                onChange: (i) => c("mentions", i),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const Ei = aj(({ onDirtyChange, onSavingChange }, m) => {
  const [s, d] = d({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [v, l] = d(null);
  const [f, p] = d(false);
  const [w, y] = d(false);
  const [u, g] = d(false);
  const [M, $] = d(false);
  const [S, c] = d([]);
  const [T, L] = d(null);
  const [i, k] = d(true);
  const [I, _] = d(false);
  const [P, K] = d(false);

  y(() => {
    C();

    if (!P) {
      G();
    }
  }, []);

  y(() => {
    onDirtyChange(f);
  }, [f]);

  y(() => {
    onSavingChange(w);
  }, [w]);

  const C = async () => {
    if (!M) {
      g(true);
    }

    try {
      const N = await d_1.getPrivacySettings();

      const x = {
        isPrivate: N.isPrivate ?? false,
        whoCanPostOnWall: N.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: N.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: N.showLastSeen ?? true,
      };

      d(x);
      l(x);
      p(false);
      $(true);
    } catch (N) {
      console.error("Failed to load privacy settings:", N);
    } finally {
      g(false);
    }
  };

  const G = async (N) => {
    if (!I) {
      _(true);
      try {
        const x = await Me.getBlockedUsers({ cursor: N, limit: 20 });

        c(N ? (X) => [...X, ...x.users] : x.users);

        L(x.nextCursor);
        k(x.hasMore);
        K(true);
      } catch (x) {
        console.error("Failed to load blocked users:", x);
      } finally {
        _(false);
      }
    }
  };

  const B = async (N) => {
    try {
      await Me.unblockUser(N);

      c((x) => x.filter((X) => X.id !== N));

      R.success("Пользователь разблокирован");
    } catch (x) {
      console.error("Failed to unblock user:", x);
      R.error("Не удалось разблокировать пользователя");
    }
  };

  const ie = () => {
    if (i && T) {
      G(T);
    }
  };

  const W = (N, x) => {
    const X = { ...s, [N]: x };
    d(X);

    if (v) {
      const be = Object.keys(X).some((re) => X[re] !== v[re]);
      p(be);
    }
  };

  const ge = async () => {
    if (!(!f || w)) {
      y(true);
      try {
        await d_1.updatePrivacySettings({
          whoCanPostOnWall: s.whoCanPostOnWall,
          whoCanSeeMyPostReactions: s.whoCanSeeMyPostReactions,
          showLastSeen: s.showLastSeen,
        });

        l({ ...s });
        p(false);
        R.success("Настройки приватности сохранены");
      } catch (N) {
        console.error("Failed to save privacy settings:", N);
        R.error("Не удалось сохранить настройки");
      } finally {
        y(false);
      }
    }
  };

  const ve = () => {
    if (v) {
      d({ ...v });
      p(false);
    }
  };

  al(m, () => ({
    save: ge,
    discard: ve,
  }));

  return onDirtyChange(m, {
    children: [
      onDirtyChange("h2", {
        className: n.contentTitle,
        children: "Приватность",
      }),
      M &&
        onDirtyChange("div", {
          className: n.section,
          children: [
            onDirtyChange("div", {
              className: n.settingItem,
              children: [
                onDirtyChange("div", {
                  className: n.settingInfo,
                  children: onDirtyChange("div", {
                    className: n.settingText,
                    children: [
                      onDirtyChange("span", {
                        className: n.settingTitle,
                        children: "Стена",
                      }),
                      onDirtyChange("span", {
                        className: n.settingDescription,
                        children: "Кто может писать на вашей стене",
                      }),
                    ],
                  }),
                }),
                onDirtyChange(ke, {
                  value: s.whoCanPostOnWall,
                  options: De,
                  onChange: (N) => W("whoCanPostOnWall", N),
                }),
              ],
            }),
            onDirtyChange("div", {
              className: n.settingItem,
              children: [
                onDirtyChange("div", {
                  className: n.settingInfo,
                  children: onDirtyChange("div", {
                    className: n.settingText,
                    children: [
                      onDirtyChange("span", {
                        className: n.settingTitle,
                        children: "Лайки",
                      }),
                      onDirtyChange("span", {
                        className: n.settingDescription,
                        children: "Кто может видеть ваши лайкнутые посты",
                      }),
                    ],
                  }),
                }),
                onDirtyChange(ke, {
                  value: s.whoCanSeeMyPostReactions,
                  options: De,
                  onChange: (N) => W("whoCanSeeMyPostReactions", N),
                }),
              ],
            }),
            onDirtyChange("div", {
              className: `${n.settingItem} ${n.clickable}`,
              onClick: () => W("showLastSeen", !s.showLastSeen),
              children: [
                onDirtyChange("div", {
                  className: n.settingInfo,
                  children: onDirtyChange("div", {
                    className: n.settingText,
                    children: [
                      onDirtyChange("span", {
                        className: n.settingTitle,
                        children: "Онлайн-статус",
                      }),
                      onDirtyChange("span", {
                        className: n.settingDescription,
                        children: "Показывать время последнего визита",
                      }),
                    ],
                  }),
                }),
                onDirtyChange(Q, {
                  checked: s.showLastSeen,
                  onChange: (N) => W("showLastSeen", N),
                }),
              ],
            }),
          ],
        }),
      onDirtyChange("div", {
        className: n.section,
        children: [
          onDirtyChange("div", {
            className: n.sectionTitle,
            children: "Чёрный список",
          }),
          I && !P
            ? onDirtyChange(a4, {})
            : P
            ? onDirtyChange(m, {
                children:
                  S.length === 0
                    ? onDirtyChange("div", {
                        className: n.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : onDirtyChange("div", {
                        className: n.blockedUsersList,
                        children: [
                          S.map((N) =>
                            onDirtyChange(
                              "div",
                              {
                                className: n.blockedUserItem,
                                children: [
                                  onDirtyChange(g, {
                                    src: N.avatar,
                                    alt: N.displayName,
                                    size: "sm",
                                  }),
                                  onDirtyChange("div", {
                                    className: n.blockedUserInfo,
                                    children: [
                                      onDirtyChange("span", {
                                        className: n.blockedUserName,
                                        children: N.displayName,
                                      }),
                                      N.username &&
                                        onDirtyChange("span", {
                                          className: n.blockedUserUsername,
                                          children: ["@", N.username],
                                        }),
                                    ],
                                  }),
                                  onDirtyChange(B, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => B(N.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              N.id
                            )
                          ),
                          i &&
                            onDirtyChange(B, {
                              variant: "secondary",
                              onClick: ie,
                              disabled: I,
                              loading: I,
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

const we = [
  { id: "account", icon: nn, label: "Аккаунт", color: "#3b82f6" },
  { id: "payment", icon: bn, label: "Оплата", color: "#34c759" },
  { id: "appearance", icon: tn, label: "Оформление", color: "#8b5cf6" },
  { id: "security", icon: Nn, label: "Безопасность", color: "#ef4444" },
  { id: "privacy", icon: vn, label: "Приватность", color: "#f59e0b" },
  { id: "notifications", icon: _e, label: "Уведомления", color: "#ec4899" },
];

function _i({ onClose }) {
  const a = E();
  const [o, m] = d("account");
  const [s, d] = d(false);
  const [v, l] = d(false);
  const [f, p] = d({});
  const [w, y] = d({});
  const u = B_1(null);
  const g = B_1(null);
  const M = B_1(null);
  const $ = Object.values(f).some(Boolean);
  const S = Object.values(w).some(Boolean);

  const c = a6_1(
    (C) => (G) => {
      p((B) => ({
        ...B,
        [C]: G,
      }));
    },
    []
  );

  const T = a6_1(
    (C) => (G) => {
      y((B) => ({
        ...B,
        [C]: G,
      }));
    },
    []
  );

  const L = async () => {
    const C = [];

    if (f.account) {
      C.push(u.current?.save() ?? Promise.resolve());
    }

    if (f.notifications) {
      C.push(g.current?.save() ?? Promise.resolve());
    }

    if (f.privacy) {
      C.push(M.current?.save() ?? Promise.resolve());
    }

    await Promise.all(C);
  };

  const i = (C) => {
    if (C !== o) {
      p({});
      m(C);
    }
  };

  const k = (C) => {
    p({});
    m(C);
    d(true);
  };

  const I = () => {
    p({});
    d(false);
  };

  const _ = () => {
    onClose();
  };

  const P = () => {
    switch (o) {
      case "account": {
        return a(us, {
          ref: u,
          onDirtyChange: c("account"),
          onSavingChange: T("account"),
          onClose: onClose,
        });
      }
      case "payment": {
        return a(vi, {});
      }
      case "appearance": {
        return a(Mi, {});
      }
      case "security": {
        return a(xi, { onChangePassword: () => l(true) });
      }
      case "notifications": {
        return a(Li, {
          ref: g,
          onDirtyChange: c("notifications"),
          onSavingChange: T("notifications"),
        });
      }
      case "privacy": {
        return a(Ei, {
          ref: M,
          onDirtyChange: c("privacy"),
          onSavingChange: T("privacy"),
        });
      }
    }
  };

  if (v) {
    return a(Hn, { onClose: onClose, onBack: () => l(false) });
  }
  const K = $
    ? a("div", {
        className: n.actionBar,
        children: [
          a(B, { variant: "secondary", onClick: _, children: "Отмена" }),
          a(B, {
            variant: "primary",
            onClick: L,
            disabled: S,
            loading: S,
            children: "Сохранить",
          }),
        ],
      })
    : null;
  return a(M, {
    onClose: _,
    frameless: true,
    size: "wide",
    className: n.modalContainer,
    children: a("div", {
      className: n.settingsModal,
      children: a
        ? a("div", {
            className: `${n.mobilePager} ${s ? n.detailOpen : ""}`,
            children: [
              a("div", {
                className: n.mobileScreen,
                children: [
                  a("div", {
                    className: n.mobileMenuTitle,
                    children: "Настройки",
                  }),
                  a("nav", {
                    className: n.mobileMenu,
                    children: we.map((C) =>
                      a(
                        "button",
                        {
                          type: "button",
                          className: n.mobileMenuItem,
                          onClick: () => k(C.id),
                          children: [
                            a("span", {
                              className: n.mobileMenuIcon,
                              style: { background: C.color },
                              children: a(C.icon, { size: 16 }),
                            }),
                            a("span", { children: C.label }),
                            a("span", {
                              className: n.mobileMenuChevron,
                              children: a(on, { size: 18 }),
                            }),
                          ],
                        },
                        C.id
                      )
                    ),
                  }),
                ],
              }),
              a("div", {
                className: n.mobileScreen,
                children: [
                  a("div", {
                    className: n.mobileHeader,
                    children: [
                      a("button", {
                        type: "button",
                        className: n.mobileBack,
                        onClick: I,
                        children: [
                          a(cn, { size: 22 }),
                          a("span", { children: "Настройки" }),
                        ],
                      }),
                      a("span", {
                        className: n.mobileHeaderTitle,
                        children: we.find((C) => C.id === o)?.label,
                      }),
                    ],
                  }),
                  a("div", { className: n.content, children: P() }),
                  K,
                ],
              }),
            ],
          })
        : a(m, {
            children: [
              a("div", {
                className: n.sidebar,
                children: [
                  a("div", {
                    className: n.sidebarTitle,
                    children: "Настройки",
                  }),
                  a("nav", {
                    children: we.map((C) =>
                      a(
                        "button",
                        {
                          type: "button",
                          className: `${n.navItem} ${
                            o === C.id ? n.active : ""
                          }`,
                          onClick: () => i(C.id),
                          children: [
                            a(C.icon, { size: 24 }),
                            a("span", { children: C.label }),
                          ],
                        },
                        C.id
                      )
                    ),
                  }),
                ],
              }),
              a("div", {
                className: n.contentWrapper,
                children: [
                  a("div", { className: n.content, children: P() }),
                  K,
                ],
              }),
            ],
          }),
    }),
  });
}
export {
  CancelSubscriptionModal as CancelSubscriptionModal,
  Hn as ChangePasswordModal,
  Zn as DeleteAccountModal,
  Ps as EnableRenewalModal,
  _i as SettingsModal,
  mi as SubscriptionModal,
  Z as subscriptionApi,
  Fi as useSettingsStore,
};
