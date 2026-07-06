import {
  ah,
  ai as ai_1,
  a,
  a5,
  a6,
  d,
  B,
  M,
  r_1 as ae_1,
  x,
  ab,
  aj,
  o,
  E as E_1,
  ak,
  A,
  y,
  r as r_1,
  a5 as a5_1,
  al,
  a4,
  m,
  am,
  f,
  $,
  k,
  g,
  an as an_1,
  t as E,
  n as Ke,
  ao as Je,
  I as en,
  a1 as nn,
  ap as He,
  C as Pe,
  aq as tn,
  v as sn,
  y as qi,
} from "./index-CFv_0Hh6.js";

import { C as an } from "./index-D9cNzDlo.js";
import { I as ln } from "./IconInfo-_boABZd-.js";
import { I as on } from "./IconNotificationMention-BbO7CDVK.js";
import { I as cn } from "./IconChevronRight-DH-EtvDX.js";
import { I as rn } from "./IconChevronLeft-DRcQfgI5.js";
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
    const i = new t.Error().stack;

    if (i) {
      t._sentryDebugIds = t._sentryDebugIds || {};
      t._sentryDebugIds[i] = "491d7f6a-4587-45a9-9b92-92c949a3f85f";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-491d7f6a-4587-45a9-9b92-92c949a3f85f";
    }
  } catch {}
})();

const dn = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const hn = () => {
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
  const i = t === "system" ? dn() : t;
  document.documentElement.setAttribute("data-theme", i);
};

const We = ah()(
  ai_1(
    (t) => ({
      theme: hn(),

      setTheme: (i) => {
        pe(i);
        t({ theme: i });
      },

      toggleTheme: () =>
        t((i) => {
          const l = i.theme === "light" ? "dark" : "light";
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
      if (We.getState().theme === "system") {
        pe("system");
      }
    });
}

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

const Se = ({ size = 18 }) =>
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

const pn = ({ size = 18 }) =>
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

const fn = ({ size = 24 }) =>
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

const gn = ({ size = 20 }) =>
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

const $e = ({ size = 24 }) =>
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

const vn = ({ size = 18 }) =>
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

const bn = ({ size = 24 }) =>
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

const Nn = ({ size = 24 }) =>
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

const wn = ({ size = 24 }) =>
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

const yn = ({ size = 24 }) =>
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

const Cn = "MoG9";
const kn = "ntJp";
const xe = { toggle: Cn, active: kn };
function K({ checked, onChange, disabled }) {
  const m = (s) => {
    s.stopPropagation();

    if (!disabled) {
      onChange(!checked);
    }
  };
  return a("button", {
    type: "button",
    className: `${xe.toggle} ${checked ? xe.active : ""}`,
    onClick: m,
    disabled: disabled,
    role: "switch",
    "aria-checked": checked,
  });
}

const H = {
  async getStatus() {
    return a5.get(a6.subscription.status);
  },
  async pay(t) {
    return a5.post(a6.subscription.pay, t ? { methodId: t } : undefined);
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

const we = {
  async list() {
    return (await a5.get(a6.sessions.list))?.sessions ?? [];
  },
  async revoke(t, i) {
    await a5.delete(a6.sessions.revoke(t));
    return { loggedOut: i };
  },
  async revokeOthers() {
    return (await a5.delete(a6.sessions.revokeOthers))?.revokedCount ?? 0;
  },
};

const Tn = "gSLm";
const Mn = "E6Xl";
const In = "s1uK";
const Pn = "SGyd";
const Sn = "UFP6";
const $n = "GV8I";
const xn = "PRXT";
const Ln = "iQvT";
const En = "CZMX";
const Dn = "PYUp";

const Q = {
  inputWrapper: Tn,
  label: Mn,
  hint: In,
  input: Pn,
  error: Sn,
  small: $n,
  medium: xn,
  large: Ln,
  default: "j5yZ",
  outline: En,
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
  ...f
}) {
  const p = (M) => {
    onChange?.(M.currentTarget.value);
  };
  return className("div", {
    className: Q.inputWrapper,
    children: [
      label &&
        className("label", {
          className: Q.label,
          children: [
            label,
            hint && className("span", { className: Q.hint, children: hint }),
          ],
        }),
      className("input", {
        className: `${Q.input} ${Q[d]} ${Q[g]} ${error ? Q.error : ""} ${
          className || ""
        }`,
        value: value,
        onInput: p,
        ...f,
      }),
      error && className("span", { className: Q.errorText, children: error }),
    ],
  });
}
const Rn = "NnJG";
const An = "OJXr";
const Bn = "gCjH";
const On = "KxMy";
const Un = "FBg0";
const _n = "rPet";
const Hn = "juKf";

const _ = {
  form: Rn,
  field: An,
  label: Bn,
  hint: On,
  fieldError: Un,
  error: _n,
  actions: Hn,
};

function Wn({ onClose, onBack }) {
  const [l, m] = d("");
  const [s, d] = d("");
  const [g, a] = d("");
  const [f, p] = d(false);
  const [M, C] = d(null);
  const [v, k] = d({});

  const $ = async (x) => {
    x.preventDefault();
    C(null);
    k({});

    if (s !== g) {
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
    p(true);
    try {
      await ae_1.changePassword({ currentPassword: l, newPassword: s });
      await x.getState().logout();
      onClose();
    } catch (o) {
      if (ab(o)) {
        if (o.code === "CURRENT_PASSWORD_INCORRECT") {
          k({ currentPassword: "Неверный текущий пароль" });
        } else if (o.errors) {
          const u = {};
          for (const [b, N] of Object.entries(o.errors)) {
            u[b] = N[0] || "Ошибка валидации";
          }
          k(u);
        } else {
          C(o.message || "Не удалось сменить пароль");
        }
      } else {
        C("Не удалось сменить пароль");
      }
    } finally {
      p(false);
    }
  };

  const S = l.length > 0 && s.length >= 10 && g.length > 0;
  return a(M, {
    onClose: onBack,
    title: "Смена пароля",
    children: a("form", {
      onSubmit: $,
      className: _.form,
      children: [
        a("div", {
          className: _.field,
          children: [
            a("label", { className: _.label, children: "Текущий пароль" }),
            a(ce, {
              type: "password",
              value: l,
              onChange: m,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            v.currentPassword &&
              a("span", {
                className: _.fieldError,
                children: v.currentPassword,
              }),
          ],
        }),
        a("div", {
          className: _.field,
          children: [
            a("label", { className: _.label, children: "Новый пароль" }),
            a(ce, {
              type: "password",
              value: s,
              onChange: d,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            a("span", {
              className: _.hint,
              children: "Минимум 10 символов, латиница, цифры и пунктуация",
            }),
            v.newPassword &&
              a("span", { className: _.fieldError, children: v.newPassword }),
          ],
        }),
        a("div", {
          className: _.field,
          children: [
            a("label", {
              className: _.label,
              children: "Подтверждение пароля",
            }),
            a(ce, {
              type: "password",
              value: g,
              onChange: a,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            v.confirmPassword &&
              a("span", {
                className: _.fieldError,
                children: v.confirmPassword,
              }),
          ],
        }),
        M && a("div", { className: _.error, children: M }),
        a("div", {
          className: _.actions,
          children: [
            a(B, {
              type: "button",
              variant: "secondary",
              onClick: onBack,
              disabled: f,
              children: "Отмена",
            }),
            a(B, {
              type: "submit",
              disabled: !S || f,
              children: f ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
      ],
    }),
  });
}
const Fn = "D3vU";
const Zn = "gNWJ";
const zn = "X2q6";
const Vn = "JCGH";
const de = { content: Fn, title: Zn, subtitle: zn, actions: Vn };
function jn({ onClose }) {
  const i = async () => {
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
const qn = "CFRi";
const Yn = "njJm";
const Gn = "mMI2";
const Xn = "hlCU";
const Qn = "ZZXn";
const Kn = "FHUc";
const Jn = "kDyY";
const et = "cWsx";
const nt = "kmz4";
const tt = "ACtU";
const st = "TQD1";
const it = "TLFL";
const at = "a9os";
const lt = "bppb";
const ot = "ompi";
const ct = "iI6n";
const rt = "TNLm";
const dt = "DhMV";
const ht = "OTxr";
const ut = "T6AW";
const mt = "xkgq";
const pt = "gap1";
const ft = "wZFt";
const gt = "dOpm";
const vt = "Iegu";
const bt = "ed2H";
const Nt = "FBfM";
const wt = "iuZP";
const yt = "zTa8";
const Ct = "etsC";
const kt = "e4zc";
const Tt = "EWXW";
const Mt = "Fxq6";
const It = "loAj";
const Pt = "S2Yc";
const St = "FAmI";
const $t = "C1s1";
const xt = "K5sM";
const Lt = "OaS3";
const Et = "H7uK";
const Dt = "Tica";
const Rt = "V5XI";
const At = "mZjq";
const Bt = "ioF8";
const Ot = "z4D7";
const Ut = "PTDS";
const _t = "YGWq";
const Ht = "wAGV";
const Wt = "aKQR";
const Ft = "nI78";
const Zt = "Mj8G";
const zt = "RXAY";
const Vt = "SHoT";
const jt = "DYmP";
const qt = "V2Ly";
const Yt = "IN2d";
const Gt = "LAql";
const Xt = "EvYl";
const Qt = "QPnj";
const Kt = "uXoF";
const Jt = "baE4";
const es = "u7Wn";
const ns = "uY9Q";
const ts = "DZRv";
const ss = "vxZY";
const is = "cckL";
const as = "km8f";
const ls = "wn9Y";
const os = "wmJN";
const cs = "tqAL";
const rs = "W081";
const ds = "Qkkn";
const hs = "it7R";
const us = "iXWY";

const n = {
  modalContainer: qn,
  settingsModal: Yn,
  sidebar: Gn,
  sidebarTitle: Xn,
  navItem: Qn,
  active: Kn,
  contentWrapper: Jn,
  content: et,
  actionBar: nt,
  contentTitle: tt,
  subscriptionCancel: st,
  subscriptionRenew: it,
  paymentMethodsList: at,
  paymentMethodRow: lt,
  paymentMethodIcon: ot,
  paymentMethodInfo: ct,
  paymentMethodTitle: rt,
  paymentMethodBadge: dt,
  paymentMethodSubtitle: ht,
  paymentMethodActions: ut,
  paymentMethodAdd: mt,
  paymentMethodsEmpty: pt,
  paymentMethodBtn: ft,
  paymentMethodBtnDanger: gt,
  section: vt,
  sectionTitle: bt,
  settingItem: Nt,
  clickable: wt,
  column: yt,
  settingInfo: Ct,
  settingIcon: kt,
  blue: Tt,
  red: Mt,
  purple: It,
  settingText: Pt,
  settingTitle: St,
  settingDescription: $t,
  settingControl: xt,
  sessionsList: Lt,
  sessionItem: Et,
  sessionIcon: Dt,
  sessionInfo: Rt,
  sessionDevice: At,
  sessionTime: Bt,
  sessionCurrentBadge: Ot,
  sessionRemove: Ut,
  avatarDisplay: _t,
  pinGrid: Ht,
  pinItem: Wt,
  pinActive: Ft,
  pinImage: Zt,
  pinName: zt,
  bioTextarea: Vt,
  fieldError: jt,
  saveError: qt,
  emptyBlocklist: Yt,
  blockedUsersList: Gt,
  blockedUserItem: Xt,
  blockedUserInfo: Qt,
  blockedUserName: Kt,
  blockedUserUsername: Jt,
  deleteAccountButton: es,
  logoutButton: ns,
  mobilePager: ts,
  detailOpen: ss,
  mobileScreen: is,
  mobileMenuTitle: as,
  mobileMenu: ls,
  mobileMenuItem: os,
  mobileMenuIcon: cs,
  mobileMenuChevron: rs,
  mobileHeader: ds,
  mobileBack: hs,
  mobileHeaderTitle: us,
};

const ms = aj(({ onDirtyChange, onSavingChange, onClose }, s) => {
  const d = x((w) => w.profile);

  const g = x((w) => w.logout);

  const { openModal, closeModal } = o();
  const p = E_1();
  const [M] = ak();
  const C = M?.url || window.location.pathname;
  const [v, k] = d(true);
  const [$, S] = d(false);
  const [x, o] = d(false);
  const [u, b] = d({});
  const [N, A] = d(null);
  const [h, P] = d(null);
  const [y, z] = d({ name: "", username: "", bio: "", avatar: "😀" });
  const [I, G] = d([]);
  const [B, ie] = d(null);
  const F = A(null);
  const [ve, be] = d(true);

  y(() => {
    if (d) {
      const w = {
        name: d.displayName,
        username: d.username || "",
        bio: d.bio || "",
        avatar: d.avatar,
      };
      z(w);
      P(w);
      k(false);
      const D = d.pin ?? null;
      ie(D);
      F.current = D;
    }
  }, [d]);

  y(() => {
    r_1
      .getMyPins()
      .then((w) => {
        G(w.pins);

        if (w.activePin && !F.current) {
          const D = w.pins.find((U) => U.slug === w.activePin);

          if (D) {
            ie(D);
            F.current = D;
          }
        }
      })
      .catch(() => G([]))
      .finally(() => be(false));
  }, []);

  y(() => {
    onDirtyChange(x);
  }, [x]);

  y(() => {
    onSavingChange($);
  }, [$]);

  const T = a5_1(
    (w, D) => {
      if (!h) {
        return false;
      }

      const U = Object.keys(w).some((ee) => w[ee] !== h[ee]);

      const V = (D?.slug ?? null) !== (F.current?.slug ?? null);
      return U || V;
    },
    [h]
  );

  const L = (w, D) => {
    if (u[w]) {
      b((U) => {
        const V = { ...U };
        delete V[w];
        return V;
      });
    }

    A(null);

    z((U) => {
      const V = { ...U, [w]: D };
      o(T(V, B));
      return V;
    });
  };

  const X = a5_1(
    (w) => {
      const D = B?.slug === w.slug ? null : w;
      ie(D);
      o(T(y, D));
    },
    [B, y, T]
  );

  const Ne = async () => {
    if (!x || $) {
      return;
    }
    S(true);
    b({});
    A(null);
    const w = h?.username;
    const y_username = y.username;
    try {
      if (h && Object.keys(y).some((le) => y[le] !== h[le])) {
        await r_1.updateProfile({
          displayName: y.name,
          username: y.username || undefined,
          bio: y.bio || null,
        });
      }

      if ((B?.slug ?? null) !== (F.current?.slug ?? null)) {
        if (B) {
          await r_1.setActivePin(B.slug);
        } else {
          await r_1.removeActivePin();
        }
      }

      P({ ...y });
      F.current = B;
      o(false);
      const ee = x.getState().profile;

      if (ee) {
        x.getState().setProfile({
          ...ee,
          displayName: y.name,
          username: y.username,
          bio: y.bio || null,
          pin: B,
        });
      }

      if (
        y_username &&
        y_username !== w &&
        (C === `/@${w}` || C === `/@${d?.id}`)
      ) {
        closeModal(`/@${y_username}`);
      }
    } catch (U) {
      console.error("Failed to save profile:", U);

      if (ab(U)) {
        if (U.errors) {
          const V = {};
          for (const [ee, le] of Object.entries(U.errors)) {
            V[ee] = le[0] || "Ошибка валидации";
          }
          b(V);
        } else {
          A(U.message || "Не удалось сохранить изменения");
        }
      } else {
        A("Не удалось сохранить изменения");
      }
    } finally {
      S(false);
    }
  };

  const re = () => {
    if (h) {
      z({ ...h });
      ie(F.current);
      o(false);
    }
  };

  al(s, () => ({
    save: Ne,
    discard: re,
  }));

  return v
    ? openModal(onClose, {
        children: [
          openModal("h2", { className: n.contentTitle, children: "Аккаунт" }),
          openModal(a4, {}),
        ],
      })
    : openModal(onClose, {
        children: [
          openModal("h2", { className: n.contentTitle, children: "Аккаунт" }),
          openModal("div", {
            className: n.section,
            children: [
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
                      openModal(ce, {
                        value: y.name,
                        onChange: (w) => L("name", w),
                      }),
                      u.displayName &&
                        openModal("span", {
                          className: n.fieldError,
                          children: u.displayName,
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
                      openModal(ce, {
                        value: y.username,
                        onChange: (w) => L("username", w),
                      }),
                      u.username &&
                        openModal("span", {
                          className: n.fieldError,
                          children: u.username,
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
                    onChange: (w) => L("bio", w.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  u.bio &&
                    openModal("span", {
                      className: n.fieldError,
                      children: u.bio,
                    }),
                ],
              }),
              !ve &&
                I.length > 0 &&
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
                      children: I.map((w) =>
                        openModal(
                          "button",
                          {
                            className: `${n.pinItem} ${
                              B?.slug === w.slug ? n.pinActive : ""
                            }`,
                            onClick: () => X(w),
                            disabled: $,
                            title: w.description || w.name,
                            type: "button",
                            children: [
                              openModal("img", {
                                src: w.url,
                                alt: w.name,
                                className: n.pinImage,
                              }),
                              openModal("span", {
                                className: n.pinName,
                                children: w.name,
                              }),
                            ],
                          },
                          w.slug
                        )
                      ),
                    }),
                  ],
                }),
              N && openModal("div", { className: n.saveError, children: N }),
            ],
          }),
          p &&
            openModal("div", {
              className: n.section,
              children: openModal("button", {
                type: "button",
                className: n.logoutButton,
                onClick: () => {
                  g();
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
              onClick: () => openModal(openModal(jn, { onClose: closeModal })),
              children: "Удалить аккаунт",
            }),
          }),
        ],
      });
});

const ps = "S5e2";
const fs = "M7ty";
const gs = "WbSt";
const vs = "yy3n";
const he = { content: ps, title: fs, subtitle: gs, actions: vs };

export function CancelSubscriptionModal({ expiresAt, onConfirm, onClose }) {
  const [m, s] = d(false);

  const d = new Date(expiresAt).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const g = async () => {
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

  return a(M, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: he.content,
      children: [
        a("h2", { className: he.title, children: "Отключить автопродление?" }),
        a("p", {
          className: he.subtitle,
          children: [
            "Подписка будет действовать до ",
            d,
            ". После этой даты она просто не продлится автоматически. Вы сможете включить автопродление обратно в любой момент.",
          ],
        }),
        a("div", {
          className: he.actions,
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
                g();
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

const Ns = "MThl";
const ws = "cET8";
const ys = "bFtd";
const Cs = "QUON";
const ue = { content: Ns, title: ws, subtitle: ys, actions: Cs };
function Ce({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [a, f] = onConfirm(false);

  const p = async () => {
    if (!a) {
      f(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        f(false);
      }
    }
  };

  return a(M, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: ue.content,
      children: [
        a("h2", { className: ue.title, children: title }),
        a("p", { className: ue.subtitle, children: message }),
        a("div", {
          className: ue.actions,
          children: [
            a(B, {
              variant: "secondary",
              onClick: (M) => {
                M.stopPropagation();
                onClose();
              },
              children: cancelText,
            }),
            a(B, {
              variant: danger ? "danger" : "primary",
              onClick: (M) => {
                M.stopPropagation();
                p();
              },
              disabled: a,
              loading: a,
              children: confirmText,
            }),
          ],
        }),
      ],
    }),
  });
}
const ks = "ZCyL";
const Ts = "Qq3w";
const Ms = "bWGh";
const Is = "B1m4";
const Ps = "DmGL";
const oe = {
  content: ks,
  title: Ts,
  subtitle: Ms,
  disclaimer: Is,
  actions: Ps,
};
function Ss({ onConfirm, onClose }) {
  const [l, m] = d(false);

  const s = async () => {
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

  return a(M, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: oe.content,
      children: [
        a("h2", { className: oe.title, children: "Включить автопродление?" }),
        a("p", {
          className: oe.subtitle,
          children:
            "Подписка будет автоматически продлеваться каждый месяц. Средства будут списываться с привязанной карты.",
        }),
        a("p", {
          className: oe.disclaimer,
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
          className: oe.actions,
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

const $s = [
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

const xs = 2247;
const Ls = 157;

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
const j = 370 / 1080;
const Es = 605;
const Ds = 40;
const Rs = { s: 14, x: 623 };
const As = { s: 15, x: 629 };
function Bs(t, i) {
  const l = (t + i + 200) / j;
  const m = Ie.slice();
  let s = 1785;
  let d = 218;
  let g = true;
  for (let a = 98; a < Ie_length && ((d += 18), (s += d), !(s > l)); a++) {
    const f = g ? As : Rs;
    m[a] = [f.s, f.x, s];
    g = !g;
  }
  return m;
}
function Os() {
  const t = A(null);
  const i = A(null);
  const l = A({ f: 0, ts: 0, tl: Ie.slice(), xOff: 0, yOff: 0 });

  y(() => {
    const i_current = i.current;
    const t_current = t.current;
    if (!i_current || !t_current) {
      return;
    }
    function d() {
      const { innerHeight, innerWidth } = window;

      const t_current_parentElement = t_current.parentElement;
      let $;
      let S;
      if (t_current_parentElement) {
        const u = t_current_parentElement.getBoundingClientRect();
        $ = u.top;
        S = u.left + (u.width - 370) / 2;
      } else {
        $ = (innerHeight - 900) / 2;
        S = (innerWidth - 370) / 2;
      }
      const x = innerWidth <= 1173;
      l.current.yOff = 357 * j - $ + (x ? 60 : 0);
      const o = 260;
      l.current.xOff = Es * j - S - o;
      l.current.tl = Bs(innerHeight, l.current.yOff);
    }
    const g = setTimeout(d, 260);
    let a;
    const f = () => {
      clearTimeout(a);
      a = setTimeout(d, 150);
    };
    window.addEventListener("resize", f);
    let p;
    function M(C) {
      const l_current = l.current;
      if (C - l_current.ts >= Ds) {
        const k = l_current.tl[l_current.f];
        if (!k) {
          i_current.style.visibility = "hidden";
        } else {
          const [$, S, x] = k;
          const [o, , u, b] = $s[$];
          const N = (u * j + 0.5) | 0;
          const A = (b * j + 0.5) | 0;
          i_current.style.cssText = `visibility:visible;width:${N}px;height:${A}px;background-image:url(/assets/nuksta/nuksta-chechik-sprite.png);background-repeat:no-repeat;image-rendering:pixelated;will-change:transform;background-position:${-(
            (o * j + 0.5) |
            0
          )}px 0px;background-size:${(xs * j + 0.5) | 0}px ${
            (Ls * j + 0.5) | 0
          }px;transform:translate(${(S * j - l_current.xOff + 0.5) | 0}px,${
            (x * j - l_current.yOff + 0.5) | 0
          }px)`;
        }
        l_current.f = (l_current.f + 1) % Ie_length;
        l_current.ts = C;
      }
      p = requestAnimationFrame(M);
    }
    p = requestAnimationFrame(M);

    return () => {
      cancelAnimationFrame(p);
      clearTimeout(g);
      clearTimeout(a);
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
const Us = "qgeS";
const _s = "ohfK";
const Hs = "Byiu";
const Ws = "XwY5";
const Fs = "RgDK";
const Zs = "FNPY";
const zs = "vhiD";
const Vs = "QNDF";
const js = "Vzv2";
const qs = "pCvX";
const Ys = "FaJj";
const Gs = "IO4y";
const Xs = "eEtd";
const Qs = "wIOW";
const Ks = "AoMh";
const Js = "edu7";
const ei = "k5IF";
const ni = "TYnt";
const ti = "Z6Kl";
const si = "gZoz";
const ii = "AvR4";
const ai = "miAM";
const li = "eycl";
const oi = "y5sP";
const ci = "thgv";
const ri = "Qn6Q";
const di = "dD0Y";
const hi = "cCl8";
const ui = "PNqz";
const mi = "iTgc";
const pi = "aFXp";
const fi = "YaYo";
const gi = "pHHT";

const r = {
  modal: Us,
  sub: _s,
  top: Hs,
  bottom: Ws,
  title: Fs,
  section: Zs,
  profileSection: zs,
  label: Vs,
  labelRow: js,
  dim: qs,
  row: Ys,
  icon: Gs,
  iconGradient: Xs,
  name: Qs,
  nameGradient: Ks,
  namePinBadge: Js,
  promoVideo: ei,
  features: ni,
  featureContent: ti,
  featureTitle: si,
  gradientText: ii,
  soon: ai,
  infoBtn: li,
  footer: oi,
  disclaimer: ci,
  methodSelectRow: ri,
  methodSelectLabel: di,
  methodSelect: hi,
  recurringConsent: ui,
  consentLink: mi,
  disclaimerLink: pi,
  subscribeBtn: fi,
  activeLabel: gi,
};

function Le({ text }) {
  return a(an_1, {
    text: text,
    multiline: true,
    children: a("span", {
      className: r.infoBtn,
      children: a(ln, { size: 14 }),
    }),
  });
}
const me = "new";
function vi(t) {
  return t.type === "bank_card"
    ? `${t.cardBrand || "Карта"} •••• ${t.cardLast4 || ""}`.trim()
    : t.type;
}
function bi({ isOpen, onClose }) {
  const l = k();
  const [m, s] = d(false);
  const [d, g] = d(false);
  const [a, f] = d(false);
  const [p, M] = d([]);
  const [C, v] = d(me);
  const [k, $] = d(199);

  y(() => {
    if (isOpen) {
      f(false);

      H.getStatus()
        .then((u) => {
          g(!!u.recurringEnabled);

          if (typeof u.price == "number") {
            $(u.price);
          }

          if (u.recurringEnabled) {
            H.getMethods()
              .then((b) => {
                M(b);
                const N = b.find((A) => A.isDefault) || b[0];
                v(N ? N.id : me);
              })
              .catch(() => M([]));
          }
        })
        .catch(() => g(false));
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const S = l?.subscription?.isActive ?? false;
  const x = d && C !== me;

  const o = async () => {
    if (m) {
      return;
    }
    if (d && !a) {
      E.error("Подтвердите согласие на автосписание");
      return;
    }
    s(true);

    if (x) {
      try {
        const b = await H.pay(C);
        if (b.error) {
          E.error(b.error);
          return;
        }
        E.success("Подписка оформлена!");
        await x.getState().fetchProfile();
        onClose();
      } catch (b) {
        E.error(
          b instanceof Error && b.message ? b.message : "Ошибка при оплате"
        );
      } finally {
        s(false);
      }
      return;
    }

    const u = window.open("about:blank", "_blank");
    try {
      const b = await H.pay();
      if (b.error) {
        u?.close();
        E.error(b.error);
        return;
      }

      if (b.confirmationUrl && u) {
        u.location.href = b.confirmationUrl;
      } else if (b.confirmationUrl) {
        window.location.href = b.confirmationUrl;
      }
    } catch (b) {
      u?.close();

      E.error(
        b instanceof Error && b.message
          ? b.message
          : "Ошибка при создании платежа"
      );
    } finally {
      s(false);
    }
  };

  return $(
    a(M, {
      onClose: onClose,
      showHeader: false,
      frameless: true,
      className: r.modal,
      children: [
        a(Os, {}),
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
                        a(g, { src: l?.avatar || null, size: "sm" }),
                        a("div", {
                          children: [
                            a("div", {
                              className: r.name,
                              children: [
                                a("span", {
                                  className: r.nameGradient,
                                  children: l?.displayName,
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
                        a(Le, {
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
                        a(Le, {
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
                              children: a(gn, { size: 20 }),
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
                              children: a(fn, { size: 20 }),
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
                    d &&
                      !S &&
                      a("label", {
                        className: r.methodSelectRow,
                        children: [
                          a("span", {
                            className: r.methodSelectLabel,
                            children: "Способ оплаты",
                          }),
                          a("select", {
                            className: r.methodSelect,
                            value: C,
                            onChange: (u) => v(u.target.value),
                            children: [
                              p.map((u) =>
                                a(
                                  "option",
                                  { value: u.id, children: vi(u) },
                                  u.id
                                )
                              ),
                              a("option", {
                                value: me,
                                children:
                                  p.length > 0
                                    ? "Новая карта"
                                    : "Привязать новую карту",
                              }),
                            ],
                          }),
                        ],
                      }),
                    d && !S
                      ? a(an, {
                          checked: a,
                          onChange: f,
                          className: r.recurringConsent,
                          label: a(m, {
                            children: [
                              "Я соглашаюсь на автоматическое продление подписки — ",
                              k,
                              " ₽ ежемесячно с сохранённого способа оплаты до отключения в настройках — на ",
                              a("a", {
                                href: "/recurring-terms",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: r.consentLink,
                                onClick: (u) => u.stopPropagation(),
                                children: "условиях автоматических списаний",
                              }),
                              ", а также с ",
                              a("a", {
                                href: "/privacy",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: r.consentLink,
                                onClick: (u) => u.stopPropagation(),
                                children: "политикой конфиденциальности",
                              }),
                              " и ",
                              a("a", {
                                href: "/terms",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: r.consentLink,
                                onClick: (u) => u.stopPropagation(),
                                children: "условиями использования",
                              }),
                              ".",
                            ],
                          }),
                        })
                      : a("div", {
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
                    S
                      ? a("div", {
                          className: r.activeLabel,
                          children: "Подписка активна",
                        })
                      : a("button", {
                          type: "button",
                          className: r.subscribeBtn,
                          onClick: o,
                          disabled: m || (d && !a),
                          children: `Оплатить ${k}₽ на месяц`,
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

const Ni = {
  yoo_money: "ЮMoney",
  sberbank: "SberPay",
  tinkoff_bank: "T-Pay",
  sbp: "СБП",
  mobile_balance: "Баланс телефона",
  sber_loan: "Кредит от СберБанка",
  sber_bnpl: "Плати частями",
  cash: "Наличные",
};

const wi = {
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

function Ee(t) {
  if (t.type === "bank_card") {
    return `${t.cardBrand || "Карта"} •••• ${t.cardLast4 || ""}`.trim();
  }

  if (!Ni[t.type]) {
    return t.type;
  }
}
function yi(t) {
  return wi[t.type] || "";
}
const De = 5;
function Ci() {
  const t = x((h) => h.profile);

  const [i, l] = d(false);
  const [m, s] = d(false);
  const [d, g] = d(false);
  const [a, f] = d([]);
  const [p, M] = d(true);
  const [C, v] = d(false);
  const [k, $] = d(null);
  const [S, x] = d(false);

  y(() => {
    H.getStatus()
      .then((h) => x(!!h.recurringEnabled))
      .catch(() => x(false));
  }, []);

  y(() => {
    if (S) {
      H.getMethods()
        .then(f)
        .catch(() => f([]))
        .finally(() => M(false));
    }
  }, [S]);

  const o = () => {
    H.getMethods()
      .then(f)
      .catch(() => {});
  };

  const u = async (h) => {
    try {
      await H.setDefaultMethod(h);

      f((P) =>
        P.map((y) => ({
          ...y,
          isDefault: y.id === h,
        }))
      );
    } catch {
      E.error("Не удалось изменить основной способ оплаты");
    }
  };

  const b = async (h) => {
    try {
      const P = await H.deleteMethod(h.id);

      f((y) => y.filter((z) => z.id !== h.id));

      if (P.autoRenewalDisabled && t?.subscription) {
        x.getState().setProfile({
          ...t,
          subscription: { ...t.subscription, autoRenewal: false },
        });
      }

      o();
    } catch {
      E.error("Не удалось отвязать карту");
    }
  };

  const N = async () => {
    if (C) {
      return;
    }
    v(true);
    const h = window.open("about:blank", "_blank");
    try {
      const P = await H.bindCard();
      const P_error = P.error;
      if (P_error || !P.confirmationUrl) {
        h?.close();
        E.error(P_error || "Привязка карт временно недоступна");
        return;
      }

      if (h) {
        h.location.href = P.confirmationUrl;
      } else {
        window.location.href = P.confirmationUrl;
      }
    } catch (P) {
      h?.close();

      E.error(
        P instanceof Error && P.message
          ? P.message
          : "Привязка карт временно недоступна"
      );
    } finally {
      v(false);
    }
  };

  const A = [...a].sort((h, P) =>
    h.isDefault !== P.isDefault
      ? h.isDefault
        ? -1
        : 1
      : (P.createdAt || "").localeCompare(h.createdAt || "")
  );

  return a(m, {
    children: [
      a("h2", { className: n.contentTitle, children: "Оплата" }),
      a("div", {
        className: n.section,
        children: [
          t?.subscription?.isActive
            ? a("div", {
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
                                const h = new Date(t.subscription.expiresAt);
                                const P = new Date();

                                const y = Math.max(
                                  0,
                                  Math.ceil(
                                    (h.getTime() - P.getTime()) /
                                      (1000 /* 1e3 */ * 60 * 60 * 24)
                                  )
                                );

                                return `до ${h.toLocaleDateString("ru-RU", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })} (${y} ${
                                  y === 1 ? "день" : y < 5 ? "дня" : "дней"
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
                        onClick: () => l(true),
                        children: "Отключить автопродление",
                      })
                    : a("button", {
                        type: "button",
                        className: n.subscriptionRenew,
                        onClick: () => s(true),
                        children: "Включить автопродление",
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
                    onClick: () => g(true),
                    children: "Оформить",
                  }),
                ],
              }),
          S &&
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
                          A.map((h) => {
                            const P = h.type === "bank_card" ? $e : yn;
                            return a(
                              "div",
                              {
                                className: n.paymentMethodRow,
                                children: [
                                  a("div", {
                                    className: n.paymentMethodIcon,
                                    children: a(P, { size: 18 }),
                                  }),
                                  a("div", {
                                    className: n.paymentMethodInfo,
                                    children: [
                                      a("span", {
                                        className: n.paymentMethodTitle,
                                        children: [
                                          Ee(h),
                                          h.isDefault &&
                                            a.length > 1 &&
                                            a("span", {
                                              className: n.paymentMethodBadge,
                                              children: "основной",
                                            }),
                                        ],
                                      }),
                                      a("span", {
                                        className: n.paymentMethodSubtitle,
                                        children: yi(h),
                                      }),
                                    ],
                                  }),
                                  a("div", {
                                    className: n.paymentMethodActions,
                                    children: [
                                      !h.isDefault &&
                                        a("button", {
                                          type: "button",
                                          className: n.paymentMethodBtn,
                                          onClick: () => u(h.id),
                                          children: "Сделать основным",
                                        }),
                                      a("button", {
                                        type: "button",
                                        className: n.paymentMethodBtnDanger,
                                        onClick: () => $(h),
                                        children: "Отвязать",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              h.id
                            );
                          }),
                          a.length === 0 &&
                            a("div", {
                              className: n.paymentMethodsEmpty,
                              children: [
                                a($e, { size: 18 }),
                                a("span", {
                                  children: "Нет привязанных методов оплаты",
                                }),
                              ],
                            }),
                          a.length < De
                            ? a("button", {
                                type: "button",
                                className: n.paymentMethodAdd,
                                onClick: N,
                                disabled: C,
                                children: [
                                  a("span", {
                                    className: n.paymentMethodIcon,
                                    children: a(Ke, { size: 16 }),
                                  }),
                                  "Добавить способ оплаты",
                                ],
                              })
                            : a("div", {
                                className: n.paymentMethodsEmpty,
                                children: a("span", {
                                  children: [
                                    "Достигнут лимит способов оплаты (",
                                    De,
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
      i &&
        t?.subscription?.expiresAt &&
        a(CancelSubscriptionModal, {
          expiresAt: t.subscription.expiresAt,
          onConfirm: async () => {
            const h = await H.setAutoRenewal(false);
            x.getState().setProfile({
              ...t,
              subscription: { ...t.subscription, autoRenewal: h.autoRenewal },
            });
          },
          onClose: () => l(false),
        }),
      m &&
        a(Ss, {
          onConfirm: async () => {
            const h = await H.setAutoRenewal(true);
            x.getState().setProfile({
              ...t,
              subscription: {
                ...t.subscription,
                autoRenewal: h.autoRenewal,
                ...(h.expiresAt ? { expiresAt: h.expiresAt } : {}),
              },
            });
          },
          onClose: () => s(false),
        }),
      k &&
        a(Ce, {
          title: "Отвязать способ оплаты?",
          message: `${Ee(k)} будет отвязан. Это действие нельзя отменить.`,
          confirmText: "Отвязать",
          danger: true,
          onConfirm: () => b(k),
          onClose: () => $(null),
        }),
      a(bi, {
        isOpen: d,
        onClose: () => {
          g(false);

          H.getMethods()
            .then(f)
            .catch(() => {});
        },
      }),
    ],
  });
}
const ki = "ydTS";
const Ti = "qIig";
const Mi = "utV3";
const Ii = "X91B";
const Pi = "sA2p";
const Si = "eb2b";
const $i = "xctK";

const ne = {
  selectWrapper: ki,
  select: Ti,
  open: Mi,
  selectedValue: Ii,
  dropdown: Pi,
  option: Si,
  selected: $i,
};

function ke({ value, options, onChange, disabled }) {
  const [s, d] = d(false);
  const g = A(null);

  const a = options.find((p) => p.value === value);

  y(() => {
    const p = (M) => {
      if (g.current && !g.current.contains(M.target)) {
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
  return a("div", {
    ref: g,
    className: ne.selectWrapper,
    children: [
      a("button", {
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
          a("span", { className: ne.selectedValue, children: a?.label }),
          a(vn, { size: 16 }),
        ],
      }),
      s &&
        a("div", {
          className: ne.dropdown,
          children: options.map((p) =>
            a(
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

const Re = [
  { value: "everyone", label: "Все" },
  { value: "followers", label: "Подписчики" },
  { value: "mutual", label: "Взаимные подписчики" },
  { value: "nobody", label: "Никто" },
];

const xi = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

function Li() {
  const { theme, setTheme } = We();
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
            a(ke, { value: theme, options: xi, onChange: (l) => setTheme(l) }),
          ],
        }),
      }),
    ],
  });
}
function fe(t, i, l, m) {
  const s = t % 10;
  const d = t % 100;
  return d >= 11 && d <= 19 ? m : s === 1 ? i : s >= 2 && s <= 4 ? l : m;
}
function Ei(t) {
  const i = new Date(t).getTime();
  if (Number.isNaN(i)) {
    return "—";
  }
  const l = Math.max(0, Math.floor((Date.now() - i) / 1000 /* 1e3 */));
  if (l < 60) {
    return "только что";
  }
  const m = Math.floor(l / 60);
  if (m < 60) {
    return `${m} ${fe(m, "минуту", "минуты", "минут")} назад`;
  }
  const s = Math.floor(m / 60);
  if (s < 24) {
    return `${s} ${fe(s, "час", "часа", "часов")} назад`;
  }
  const d = Math.floor(s / 24);
  return d < 30
    ? `${d} ${fe(d, "день", "дня", "дней")} назад`
    : new Date(t).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
}
function Ae(t) {
  if (t.clientName === "ITD iOS") {
    return "Приложение ИТД · iOS";
  }
  if (t.clientName === "ITD Android") {
    return "Приложение ИТД · Android";
  }
  const i = t.clientName ?? "Неизвестное устройство";
  return t.osName
    ? `${i} · ${t.osName}${t.osVersion ? ` ${t.osVersion}` : ""}`
    : i;
}
function Di(t) {
  const i = [t.ipCity, t.ipCountry].filter(Boolean);
  return i.length ? i.join(", ") : "Местоположение неизвестно";
}
function Ri({ type }) {
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
function Ai({ onChangePassword }) {
  const [i, l] = d([]);
  const [m, s] = d(true);
  const [d, g] = d(null);
  const [a, f] = d(null);
  const [p, M] = d(false);

  const C = a5_1(async () => {
    s(true);
    g(null);
    try {
      l(await we.list());
    } catch {
      g("Не удалось загрузить активные сессии");
    } finally {
      s(false);
    }
  }, []);

  y(() => {
    C();
  }, [C]);
  const [v, k] = d(null);

  const $ = a5_1(
    async (o) => {
      f(o.id);
      try {
        const { loggedOut } = await we.revoke(o.id, o.isCurrent);
        if (loggedOut) {
          await x.getState().logout();
          return;
        }

        l((b) => b.filter((N) => N.id !== o.id));

        E.success("Сессия завершена");
      } catch {
        C();
      } finally {
        f(null);
      }
    },
    [C]
  );

  const S = a5_1(async () => {
    try {
      const o = await we.revokeOthers();
      M(false);

      E.success(
        o > 0 ? `Завершено сессий: ${o}` : "Других активных сессий нет"
      );

      await C();
    } catch {}
  }, [C]);

  const x = i.reduce((o, u) => (u.isCurrent ? o : o + 1), 0);

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
            : i.length === 0
            ? a("div", {
                className: n.emptyBlocklist,
                children: "Активных сессий не найдено",
              })
            : a(m, {
                children: [
                  a("div", {
                    className: n.sessionsList,
                    children: i.map((o) =>
                      a(
                        "div",
                        {
                          className: n.sessionItem,
                          children: [
                            a("div", {
                              className: n.sessionIcon,
                              children: a(Ri, { type: o.deviceType }),
                            }),
                            a("div", {
                              className: n.sessionInfo,
                              children: [
                                a("div", {
                                  className: n.sessionDevice,
                                  children: Ae(o),
                                }),
                                a("div", {
                                  className: n.sessionTime,
                                  children: [Di(o), " · ", Ei(o.lastUsedAt)],
                                }),
                              ],
                            }),
                            o.isCurrent
                              ? a("span", {
                                  className: n.sessionCurrentBadge,
                                  children: "Это устройство",
                                })
                              : a("button", {
                                  type: "button",
                                  className: n.sessionRemove,
                                  title: "Завершить сессию",
                                  "aria-label": "Завершить сессию",
                                  disabled: a === o.id,
                                  onClick: () => k(o),
                                  children:
                                    a === o.id
                                      ? a(Je, { size: 16 })
                                      : a(en, { size: 16 }),
                                }),
                          ],
                        },
                        o.id
                      )
                    ),
                  }),
                  x > 0 &&
                    a("button", {
                      type: "button",
                      className: n.logoutButton,
                      onClick: () => M(true),
                      children: "Завершить все другие сессии",
                    }),
                ],
              }),
        ],
      }),
      v &&
        a(Ce, {
          title: "Завершить сессию?",
          message: `Вы действительно хотите завершить сессию «${Ae(
            v
          )}»? Устройство будет разлогинено.`,
          confirmText: "Завершить",
          danger: true,
          onConfirm: () => $(v),
          onClose: () => k(null),
        }),
      p &&
        a(Ce, {
          title: "Завершить все другие сессии?",
          message: `Вы действительно хотите завершить ${x} ${fe(
            x,
            "другую сессию",
            "другие сессии",
            "других сессий"
          )}? Устройства будут разлогинены.`,
          confirmText: `Завершить все (${x})`,
          danger: true,
          onConfirm: S,
          onClose: () => M(false),
        }),
    ],
  });
}

const Bi = aj(({ onDirtyChange, onSavingChange }, m) => {
  const { settings, fetchSettings, updateSettings } = nn();

  const [a, f] = fetchSettings({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [p, M] = fetchSettings(null);
  const [C, v] = fetchSettings(false);
  const [k, $] = fetchSettings(false);
  const [S, x] = fetchSettings(false);

  y(() => {
    if (!S && !settings) {
      fetchSettings();
    }
  }, [S]);

  y(() => {
    if (settings && !S) {
      const N = {
        webEnabled: settings.webEnabled,
        soundEnabled: settings.soundEnabled,
        follows: settings.preferences.follows,
        reactions: settings.preferences.reactions,
        replies: settings.preferences.replies,
        mentions: settings.preferences.mentions,
        wallPosts: settings.preferences.wallPosts,
      };
      f(N);
      M(N);
      v(false);
      x(true);
    }
  }, [settings, S]);

  y(() => {
    onDirtyChange(C);
  }, [C]);

  y(() => {
    onSavingChange(k);
  }, [k]);

  const o = (N, A) => {
    const h = { ...a, [N]: A };
    f(h);

    if (p) {
      const P = Object.keys(h).some((y) => h[y] !== p[y]);
      v(P);
    }
  };

  const u = async () => {
    if (!(!C || k)) {
      $(true);
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

        M({ ...a });
        v(false);
        E.success("Настройки уведомлений сохранены");
      } catch (N) {
        console.error("Failed to save notification settings:", N);
        E.error("Не удалось сохранить настройки");
      } finally {
        $(false);
      }
    }
  };

  const b = () => {
    if (p) {
      f({ ...p });
      v(false);
    }
  };

  al(m, () => ({
    save: u,
    discard: b,
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
            onClick: () => o("webEnabled", !a.webEnabled),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: a(He, { size: 20 }),
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
              a(K, {
                checked: a.webEnabled,
                onChange: (N) => o("webEnabled", N),
              }),
            ],
          }),
          a("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("soundEnabled", !a.soundEnabled),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: a(mn, { size: 20 }),
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
              a(K, {
                checked: a.soundEnabled,
                onChange: (N) => o("soundEnabled", N),
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
            onClick: () => o("follows", !a.follows),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: a(pn, { size: 20 }),
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
              a(K, {
                checked: a.follows,
                onChange: (N) => o("follows", N),
              }),
            ],
          }),
          a("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("wallPosts", !a.wallPosts),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: a(Se, { size: 20 }),
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
              a(K, {
                checked: a.wallPosts,
                onChange: (N) => o("wallPosts", N),
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
            onClick: () => o("reactions", !a.reactions),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.red}`,
                    children: a(un, { size: 20 }),
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
              a(K, {
                checked: a.reactions,
                onChange: (N) => o("reactions", N),
              }),
            ],
          }),
          a("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("replies", !a.replies),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: a(Se, { size: 20 }),
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
              a(K, {
                checked: a.replies,
                onChange: (N) => o("replies", N),
              }),
            ],
          }),
          a("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("mentions", !a.mentions),
            children: [
              a("div", {
                className: n.settingInfo,
                children: [
                  a("div", {
                    className: `${n.settingIcon} ${n.purple}`,
                    children: a(on, { size: 20 }),
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
              a(K, {
                checked: a.mentions,
                onChange: (N) => o("mentions", N),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const Oi = aj(({ onDirtyChange, onSavingChange }, m) => {
  const [s, d] = d({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [g, a] = d(null);
  const [f, p] = d(false);
  const [M, C] = d(false);
  const [v, k] = d(false);
  const [$, S] = d(false);
  const [x, o] = d([]);
  const [u, b] = d(null);
  const [N, A] = d(true);
  const [h, P] = d(false);
  const [y, z] = d(false);

  y(() => {
    I();

    if (!y) {
      G();
    }
  }, []);

  y(() => {
    onDirtyChange(f);
  }, [f]);

  y(() => {
    onSavingChange(M);
  }, [M]);

  const I = async () => {
    if (!$) {
      k(true);
    }

    try {
      const T = await r_1.getPrivacySettings();

      const L = {
        isPrivate: T.isPrivate ?? false,
        whoCanPostOnWall: T.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: T.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: T.showLastSeen ?? true,
      };

      d(L);
      a(L);
      p(false);
      S(true);
    } catch (T) {
      console.error("Failed to load privacy settings:", T);
    } finally {
      k(false);
    }
  };

  const G = async (T) => {
    if (!h) {
      P(true);
      try {
        const L = await Pe.getBlockedUsers({ cursor: T, limit: 20 });

        o(T ? (X) => [...X, ...L.users] : L.users);

        b(L.nextCursor);
        A(L.hasMore);
        z(true);
      } catch (L) {
        console.error("Failed to load blocked users:", L);
      } finally {
        P(false);
      }
    }
  };

  const B = async (T) => {
    try {
      await Pe.unblockUser(T);

      o((L) => L.filter((X) => X.id !== T));

      E.success("Пользователь разблокирован");
    } catch (L) {
      console.error("Failed to unblock user:", L);
      E.error("Не удалось разблокировать пользователя");
    }
  };

  const ie = () => {
    if (N && u) {
      G(u);
    }
  };

  const F = (T, L) => {
    const X = { ...s, [T]: L };
    d(X);

    if (g) {
      const Ne = Object.keys(X).some((re) => X[re] !== g[re]);
      p(Ne);
    }
  };

  const ve = async () => {
    if (!(!f || M)) {
      C(true);
      try {
        await r_1.updatePrivacySettings({
          whoCanPostOnWall: s.whoCanPostOnWall,
          whoCanSeeMyPostReactions: s.whoCanSeeMyPostReactions,
          showLastSeen: s.showLastSeen,
        });

        a({ ...s });
        p(false);
        E.success("Настройки приватности сохранены");
      } catch (T) {
        console.error("Failed to save privacy settings:", T);
        E.error("Не удалось сохранить настройки");
      } finally {
        C(false);
      }
    }
  };

  const be = () => {
    if (g) {
      d({ ...g });
      p(false);
    }
  };

  al(m, () => ({
    save: ve,
    discard: be,
  }));

  return a(m, {
    children: [
      a("h2", { className: n.contentTitle, children: "Приватность" }),
      $ &&
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
                a(ke, {
                  value: s.whoCanPostOnWall,
                  options: Re,
                  onChange: (T) => F("whoCanPostOnWall", T),
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
                a(ke, {
                  value: s.whoCanSeeMyPostReactions,
                  options: Re,
                  onChange: (T) => F("whoCanSeeMyPostReactions", T),
                }),
              ],
            }),
            a("div", {
              className: `${n.settingItem} ${n.clickable}`,
              onClick: () => F("showLastSeen", !s.showLastSeen),
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
                a(K, {
                  checked: s.showLastSeen,
                  onChange: (T) => F("showLastSeen", T),
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
          h && !y
            ? a(a4, {})
            : y
            ? a(m, {
                children:
                  x.length === 0
                    ? a("div", {
                        className: n.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : a("div", {
                        className: n.blockedUsersList,
                        children: [
                          x.map((T) =>
                            a(
                              "div",
                              {
                                className: n.blockedUserItem,
                                children: [
                                  a(g, {
                                    src: T.avatar,
                                    alt: T.displayName,
                                    size: "sm",
                                  }),
                                  a("div", {
                                    className: n.blockedUserInfo,
                                    children: [
                                      a("span", {
                                        className: n.blockedUserName,
                                        children: T.displayName,
                                      }),
                                      T.username &&
                                        a("span", {
                                          className: n.blockedUserUsername,
                                          children: ["@", T.username],
                                        }),
                                    ],
                                  }),
                                  a(B, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => B(T.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              T.id
                            )
                          ),
                          N &&
                            a(B, {
                              variant: "secondary",
                              onClick: ie,
                              disabled: h,
                              loading: h,
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
  { id: "account", icon: tn, label: "Аккаунт", color: "#3b82f6" },
  { id: "payment", icon: Nn, label: "Оплата", color: "#34c759" },
  { id: "appearance", icon: sn, label: "Оформление", color: "#8b5cf6" },
  { id: "security", icon: wn, label: "Безопасность", color: "#ef4444" },
  { id: "privacy", icon: bn, label: "Приватность", color: "#f59e0b" },
  { id: "notifications", icon: He, label: "Уведомления", color: "#ec4899" },
];

function zi({ onClose }) {
  const i = E_1();
  const [l, m] = d("account");
  const [s, d] = d(false);
  const [g, a] = d(false);
  const [f, p] = d({});
  const [M, C] = d({});
  const v = A(null);
  const k = A(null);
  const $ = A(null);
  const S = Object.values(f).some(Boolean);
  const x = Object.values(M).some(Boolean);

  const o = a5_1(
    (I) => (G) => {
      p((B) => ({
        ...B,
        [I]: G,
      }));
    },
    []
  );

  const u = a5_1(
    (I) => (G) => {
      C((B) => ({
        ...B,
        [I]: G,
      }));
    },
    []
  );

  const b = async () => {
    const I = [];

    if (f.account) {
      I.push(v.current?.save() ?? Promise.resolve());
    }

    if (f.notifications) {
      I.push(k.current?.save() ?? Promise.resolve());
    }

    if (f.privacy) {
      I.push($.current?.save() ?? Promise.resolve());
    }

    await Promise.all(I);
  };

  const N = (I) => {
    if (I !== l) {
      p({});
      m(I);
    }
  };

  const A = (I) => {
    p({});
    m(I);
    d(true);
  };

  const h = () => {
    p({});
    d(false);
  };

  const P = () => {
    onClose();
  };

  const y = () => {
    switch (l) {
      case "account": {
        return a(ms, {
          ref: v,
          onDirtyChange: o("account"),
          onSavingChange: u("account"),
          onClose: onClose,
        });
      }
      case "payment": {
        return a(Ci, {});
      }
      case "appearance": {
        return a(Li, {});
      }
      case "security": {
        return a(Ai, { onChangePassword: () => a(true) });
      }
      case "notifications": {
        return a(Bi, {
          ref: k,
          onDirtyChange: o("notifications"),
          onSavingChange: u("notifications"),
        });
      }
      case "privacy": {
        return a(Oi, {
          ref: $,
          onDirtyChange: o("privacy"),
          onSavingChange: u("privacy"),
        });
      }
    }
  };

  if (g) {
    return a(Wn, { onClose: onClose, onBack: () => a(false) });
  }
  const z = S
    ? a("div", {
        className: n.actionBar,
        children: [
          a(B, { variant: "secondary", onClick: P, children: "Отмена" }),
          a(B, {
            variant: "primary",
            onClick: b,
            disabled: x,
            loading: x,
            children: "Сохранить",
          }),
        ],
      })
    : null;
  return a(M, {
    onClose: P,
    frameless: true,
    size: "wide",
    className: n.modalContainer,
    children: a("div", {
      className: n.settingsModal,
      children: i
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
                    children: ye.map((I) =>
                      a(
                        "button",
                        {
                          type: "button",
                          className: n.mobileMenuItem,
                          onClick: () => A(I.id),
                          children: [
                            a("span", {
                              className: n.mobileMenuIcon,
                              style: { background: I.color },
                              children: a(I.icon, { size: 16 }),
                            }),
                            a("span", { children: I.label }),
                            a("span", {
                              className: n.mobileMenuChevron,
                              children: a(cn, { size: 18 }),
                            }),
                          ],
                        },
                        I.id
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
                        onClick: h,
                        children: [
                          a(rn, { size: 22 }),
                          a("span", { children: "Настройки" }),
                        ],
                      }),
                      a("span", {
                        className: n.mobileHeaderTitle,
                        children: ye.find((I) => I.id === l)?.label,
                      }),
                    ],
                  }),
                  a("div", { className: n.content, children: y() }),
                  z,
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
                    children: ye.map((I) =>
                      a(
                        "button",
                        {
                          type: "button",
                          className: `${n.navItem} ${
                            l === I.id ? n.active : ""
                          }`,
                          onClick: () => N(I.id),
                          children: [
                            a(I.icon, { size: 24 }),
                            a("span", { children: I.label }),
                          ],
                        },
                        I.id
                      )
                    ),
                  }),
                ],
              }),
              a("div", {
                className: n.contentWrapper,
                children: [
                  a("div", { className: n.content, children: y() }),
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
  Wn as ChangePasswordModal,
  jn as DeleteAccountModal,
  Ss as EnableRenewalModal,
  zi as SettingsModal,
  bi as SubscriptionModal,
  H as subscriptionApi,
  qi as useSettingsStore,
};
