import {
  ar,
  as as as_1,
  u,
  a6,
  a7,
  d,
  B,
  M,
  am,
  w,
  x,
  ae,
  at as at_1,
  ao as ao_1,
  au,
  n,
  C as C_1,
  av,
  A,
  h,
  o,
  q,
  aw,
  a5,
  S as S_1,
  ax,
  u as u_1,
  $,
  j as j_1,
  f,
  S_1 as S_1_1,
  ay,
  t as j,
  m as Yn,
  az as Be,
  aA as Qn,
  aB as Xn,
  ag as Ze,
  ak as Jn,
  aj as yn,
  ah as et,
  ai as nt,
  an as tt,
  aC as st,
  aD as at,
  aE as ot,
  a2 as it,
  aF as Cn,
  y as tn,
  aG as lt,
  s as rt,
  R as di,
} from "./index-dnACTU3c.js";

import { P as Re } from "./index-CTpGM1z1.js";
import { C as Ve } from "./index-DmKJ6eQK.js";
import { I as ct } from "./IconInfo-CX4HcoRT.js";
import { a as dt, s as S } from "./PhoneAccess.module-BmvgF3ui.js";
import { I as ut } from "./IconNotificationMention-C7x9C0uS.js";
import { I as ht } from "./IconChevronRight-BQQAUGem.js";
import { I as mt } from "./IconChevronLeft-Bhjo82wQ.js";
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
    const s = new n.Error().stack;

    if (s) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[s] = "0426e407-cb52-4c13-a3a6-0bd423c2d26e";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-0426e407-cb52-4c13-a3a6-0bd423c2d26e";
    }
  } catch {}
})();

const pt = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const ft = () => {
  if (typeof window !== "undefined") {
    const n = localStorage.getItem("theme-storage");
    if (n) {
      try {
        return JSON.parse(n).state?.theme || "system";
      } catch {
        return "system";
      }
    }
  }
  return "system";
};

const xe = (n) => {
  const s = n === "system" ? pt() : n;
  document.documentElement.setAttribute("data-theme", s);
};

const Tn = ar()(
  as_1(
    (n) => ({
      theme: ft(),

      setTheme: (s) => {
        xe(s);
        n({ theme: s });
      },

      toggleTheme: () =>
        n((s) => {
          const o = s.theme === "light" ? "dark" : "light";
          xe(o);
          return { theme: o };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (n) => {
        if (n?.theme) {
          xe(n.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (Tn.getState().theme === "system") {
        xe("system");
      }
    });
}

const gt = ({ size = 18 }) =>
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

const sn = ({ size = 18 }) =>
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

const vt = ({ size = 18 }) =>
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

const bt = ({ size = 18 }) =>
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

const wt = ({ size = 24 }) =>
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

const Nt = ({ size = 20 }) =>
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

const _e = ({ size = 24 }) =>
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

const yt = ({ size = 18 }) =>
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

const Ct = ({ size = 24 }) =>
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

const Tt = ({ size = 24 }) =>
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

const kt = ({ size = 24 }) =>
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

const an = ({ size = 24 }) =>
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

const It = "T5hv";
const St = "G5WP";
const on = { toggle: It, active: St };
function me({ checked, onChange, disabled }) {
  const i = (a) => {
    a.stopPropagation();

    if (!disabled) {
      onChange(!checked);
    }
  };
  return u("button", {
    type: "button",
    className: `${on.toggle} ${checked ? on.active : ""}`,
    onClick: i,
    disabled: disabled,
    role: "switch",
    "aria-checked": checked,
  });
}

const X = {
  async getStatus() {
    return a6.get(a7.subscription.status);
  },
  async pay(n) {
    return a6.post(a7.subscription.pay, n ? { methodId: n } : undefined);
  },
  async setAutoRenewal(n) {
    return a6.post(a7.subscription.autoRenewal, { enabled: n });
  },
  async bindCard(n = "bank_card") {
    return a6.post(a7.subscription.bindCard, { type: n });
  },
  async getMethods() {
    return (await a6.get(a7.subscription.methods)).data;
  },
  async setDefaultMethod(n) {
    return a6.put(a7.subscription.methodDefault(n));
  },
  async deleteMethod(n) {
    return a6.delete(a7.subscription.methodDelete(n));
  },
};

const Ue = {
  async list() {
    return (await a6.get(a7.sessions.list))?.sessions ?? [];
  },
  async revoke(n, s) {
    await a6.delete(a7.sessions.revoke(n));
    return { loggedOut: s };
  },
  async revokeOthers() {
    return (await a6.delete(a7.sessions.revokeOthers))?.revokedCount ?? 0;
  },
};

const Et = "Rhnt";
const Pt = "avhO";
const Mt = "eJIG";
const $t = "FBCG";
const At = "Fysv";
const Dt = "RZEX";
const xt = "WMQf";
const Lt = "gIC3";
const Rt = "jSdj";
const Ot = "qNq3";

const he = {
  inputWrapper: Et,
  label: Pt,
  hint: Mt,
  input: $t,
  error: At,
  small: Dt,
  medium: xt,
  large: Lt,
  default: "CgUb",
  outline: Rt,
  errorText: Ot,
};

function Ce({
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
  const p = (v) => {
    onChange?.(v.currentTarget.value);
  };
  return variant("div", {
    className: he.inputWrapper,
    children: [
      label &&
        variant("label", {
          className: he.label,
          children: [
            label,
            hint && variant("span", { className: he.hint, children: hint }),
          ],
        }),
      variant("input", {
        className: `${he.input} ${he[r]} ${he[u]} ${error ? he.error : ""} ${
          className || ""
        }`,
        value: value,
        onInput: p,
        ...g,
      }),
      error && variant("span", { className: he.errorText, children: error }),
    ],
  });
}
const Te = "От 8 до 100 символов, хотя бы одна латинская буква и одна цифра.";
function kn(n) {
  return n.length >= 8 && n.length <= 100 && /[A-Za-z]/.test(n) && /\d/.test(n);
}
const Bt = "dNcr";
const _t = "i8Tv";
const Ut = "D1xm";
const Ht = "e1Tz";
const zt = "pedv";
const Vt = "vKVq";
const Wt = "JVlp";

const Q = {
  form: Bt,
  field: _t,
  label: Ut,
  hint: Ht,
  fieldError: zt,
  error: Vt,
  actions: Wt,
};

function jt({ onClose, onBack }) {
  const [o, i] = d("");
  const [a, r] = d("");
  const [u, c] = d("");
  const [g, p] = d(false);
  const [v, T] = d(null);
  const [b, w] = d({});

  const E = async (M) => {
    M.preventDefault();
    T(null);
    w({});

    if (a !== u) {
      w({ confirmPassword: "Пароли не совпадают" });
      return;
    }

    if (!kn(a)) {
      w({ newPassword: Te });
      return;
    }
    if (a === o) {
      w({ newPassword: "Новый пароль должен отличаться от текущего" });
      return;
    }
    p(true);
    try {
      await am.changePassword({ oldPassword: o, newPassword: a });
      await w.getState().logout();
      onClose();
    } catch (d) {
      if (x(d)) {
        if (d.code === ae.ACCOUNT_CURRENT_PASSWORD_INCORRECT) {
          w({ currentPassword: "Неверный текущий пароль" });
        } else if (d.code === "SAME_PASSWORD") {
          w({ newPassword: "Новый пароль должен отличаться от текущего" });
        } else if (d.code === ae.VALIDATION_ERROR && !d.errors) {
          w({ newPassword: Te });
        } else if (d.code === "PASSWORD_NOT_SET") {
          T("У аккаунта ещё нет пароля. Создайте его в разделе «Безопасность»");
        } else if (d.errors) {
          const f = {};
          for (const [y, N] of Object.entries(d.errors)) {
            f[y] = at_1(N[0] || "Ошибка валидации");
          }
          w(f);
        } else {
          T(ao_1(d.code, d.message || "Не удалось сменить пароль"));
        }
      } else {
        T("Не удалось сменить пароль");
      }
    } finally {
      p(false);
    }
  };

  const P = o.length > 0 && a.length > 0 && u.length > 0;
  return u(M, {
    onClose: onBack,
    title: "Смена пароля",
    children: u("form", {
      onSubmit: E,
      className: Q.form,
      children: [
        u("div", {
          className: Q.field,
          children: [
            u("label", { className: Q.label, children: "Текущий пароль" }),
            u(Ce, {
              type: "password",
              value: o,
              onChange: i,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            b.currentPassword &&
              u("span", {
                className: Q.fieldError,
                children: b.currentPassword,
              }),
          ],
        }),
        u("div", {
          className: Q.field,
          children: [
            u("label", { className: Q.label, children: "Новый пароль" }),
            u(Ce, {
              type: "password",
              value: a,
              onChange: r,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            u("span", { className: Q.hint, children: Te }),
            b.newPassword &&
              u("span", { className: Q.fieldError, children: b.newPassword }),
          ],
        }),
        u("div", {
          className: Q.field,
          children: [
            u("label", {
              className: Q.label,
              children: "Подтверждение пароля",
            }),
            u(Ce, {
              type: "password",
              value: u,
              onChange: c,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            b.confirmPassword &&
              u("span", {
                className: Q.fieldError,
                children: b.confirmPassword,
              }),
          ],
        }),
        v && u("div", { className: Q.error, children: v }),
        u("div", {
          className: Q.actions,
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
              disabled: !P || g,
              children: g ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
        u(Re, {}),
      ],
    }),
  });
}
const Ft = "jRds";
const Gt = "dLow";
const Zt = "vOqq";
const qt = "cVIm";
const Me = { content: Ft, title: Gt, subtitle: Zt, actions: qt };
function Kt({ onClose }) {
  const s = async () => {
    await w.getState().deleteAccount();
    onClose();
  };
  return u(M, {
    onClose: onClose,
    showHeader: false,
    children: u("div", {
      className: Me.content,
      children: [
        u("h2", { className: Me.title, children: "Удалить аккаунт?" }),
        u("p", {
          className: Me.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        u("div", {
          className: Me.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: (o) => {
                o.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            u(B, {
              variant: "danger",
              onClick: (o) => {
                o.stopPropagation();
                s();
              },
              children: "Удалить аккаунт",
            }),
          ],
        }),
      ],
    }),
  });
}
const Yt = "Rkd4";
const Qt = "NQbl";
const Xt = "lOlO";
const Jt = "CusC";
const es = "gpsi";
const ns = "Rgfn";
const ts = "JTYY";
const ss = "YtVl";
const as = "hTgH";
const os = "DbLz";
const is = "GxyQ";
const ls = "rEtN";
const rs = "aKIs";
const cs = "aTDs";
const ds = "TLhY";
const us = "aZS9";
const hs = "af2U";
const ms = "okgF";
const ps = "KwiZ";
const fs = "SZgk";
const gs = "TVY4";
const vs = "sgXr";
const bs = "p6dT";
const ws = "PBwa";
const Ns = "VTVL";
const ys = "F3Qm";
const Cs = "xz19";
const Ts = "NgLz";
const ks = "r0PG";
const Is = "RHzj";
const Ss = "Nu1M";
const Es = "MvjS";
const Ps = "SXba";
const Ms = "UKk4";
const $s = "j0Ae";
const As = "sINy";
const Ds = "t8h2";
const xs = "amCX";
const Ls = "Ny33";
const Rs = "Q9Rd";
const Os = "zGTh";
const Bs = "B64h";
const _s = "XSOU";
const Us = "IsuT";
const Hs = "kaEn";
const zs = "NmkX";
const Vs = "Ha8z";
const Ws = "jNk4";
const js = "VcI9";
const Fs = "ZmmG";
const Gs = "wGZh";
const Zs = "xYDT";
const qs = "TZBi";
const Ks = "pbnQ";
const Ys = "rx8h";
const Qs = "yEPR";
const Xs = "zuiY";
const Js = "C4Tx";
const ea = "G4bd";
const na = "KLGa";
const ta = "YrRP";
const sa = "CRl1";
const aa = "TdVN";
const oa = "DcPL";
const ia = "UHAo";
const la = "lBCT";
const ra = "wKWQ";
const ca = "kDtG";
const da = "xVBL";
const ua = "hUgW";
const ha = "rUGw";
const ma = "cyGN";
const pa = "jurm";
const fa = "ne6l";

const t = {
  modalContainer: Yt,
  settingsModal: Qt,
  sidebar: Xt,
  sidebarTitle: Jt,
  navItem: es,
  active: ns,
  contentWrapper: ts,
  content: ss,
  actionBar: as,
  contentTitle: os,
  subscriptionCancel: is,
  subscriptionRenew: ls,
  paymentMethodsList: rs,
  paymentMethodRow: cs,
  paymentMethodIcon: ds,
  paymentMethodInfo: us,
  paymentMethodTitle: hs,
  paymentMethodBadge: ms,
  paymentMethodSubtitle: ps,
  paymentMethodActions: fs,
  paymentMethodAdd: gs,
  paymentMethodsEmpty: vs,
  paymentMethodBtn: bs,
  paymentMethodBtnDanger: ws,
  section: Ns,
  sectionTitle: ys,
  settingItem: Cs,
  clickable: Ts,
  column: ks,
  settingInfo: Is,
  settingIcon: Ss,
  blue: Es,
  red: Ps,
  purple: Ms,
  settingText: $s,
  settingTitle: As,
  settingDescription: Ds,
  settingControl: xs,
  sessionsList: Ls,
  sessionItem: Rs,
  sessionIcon: Os,
  sessionInfo: Bs,
  sessionDevice: _s,
  sessionTime: Us,
  sessionCurrentBadge: Hs,
  sessionRemove: zs,
  avatarDisplay: Vs,
  pinGrid: Ws,
  pinItem: js,
  pinActive: Fs,
  pinImage: Gs,
  pinName: Zs,
  bioTextarea: qs,
  fieldError: Ks,
  saveError: Ys,
  emptyBlocklist: Qs,
  blockedUsersList: Xs,
  blockedUserItem: Js,
  blockedUserInfo: ea,
  blockedUserName: na,
  blockedUserUsername: ta,
  deleteAccountButton: sa,
  logoutButton: aa,
  mobilePager: oa,
  detailOpen: ia,
  mobileScreen: la,
  mobileMenuTitle: ra,
  mobileMenu: ca,
  mobileMenuItem: da,
  mobileMenuIcon: ua,
  mobileMenuChevron: ha,
  mobileHeader: ma,
  mobileBack: pa,
  mobileHeaderTitle: fa,
};

const ga = au(({ onDirtyChange, onSavingChange, onClose }, a) => {
  const r = w((k) => k.profile);

  const u = w((k) => k.logout);

  const { openModal, closeModal } = n();
  const p = C_1();
  const [v] = av();
  const T = v?.url || window.location.pathname;
  const [b, w] = d(true);
  const [E, P] = d(false);
  const [M, d] = d(false);
  const [f, y] = d({});
  const [N, R] = d(null);
  const [x, F] = d(null);
  const [h, A] = d({ name: "", username: "", bio: "", avatar: "😀" });
  const [m, H] = d([]);
  const [_, ae] = d(null);
  const z = A(null);
  const [de, oe] = d(true);

  h(() => {
    if (r) {
      const k = {
        name: r.displayName,
        username: r.username || "",
        bio: r.bio || "",
        avatar: r.avatar,
      };
      A(k);
      F(k);
      w(false);
      const L = r.pin ?? null;
      ae(L);
      z.current = L;
    }
  }, [r]);

  h(() => {
    onSavingChange
      .getMyPins()
      .then((k) => {
        H(k.pins);

        if (k.activePin && !z.current) {
          const L = k.pins.find((V) => V.slug === k.activePin);

          if (L) {
            ae(L);
            z.current = L;
          }
        }
      })
      .catch(() => H([]))
      .finally(() => oe(false));
  }, []);

  h(() => {
    onDirtyChange(M);
  }, [M]);

  h(() => {
    onSavingChange(E);
  }, [E]);

  const $ = q(
    (k, L) => {
      if (!x) {
        return false;
      }

      const V = Object.keys(k).some((q) => k[q] !== x[q]);

      const D = (L?.slug ?? null) !== (z.current?.slug ?? null);
      return V || D;
    },
    [x]
  );

  const B = (k, L) => {
    if (f[k]) {
      y((V) => {
        const D = { ...V };
        delete D[k];
        return D;
      });
    }

    R(null);

    A((V) => {
      const D = { ...V, [k]: L };
      d($(D, _));
      return D;
    });
  };

  const ee = q(
    (k) => {
      const L = _?.slug === k.slug ? null : k;
      ae(L);
      d($(h, L));
    },
    [_, h, $]
  );

  const ge = async () => {
    if (!M || E) {
      return;
    }
    P(true);
    y({});
    R(null);
    const k = x?.username;
    const h_username = h.username;
    try {
      if (x && Object.keys(h).some((Y) => h[Y] !== x[Y])) {
        await onSavingChange.updateProfile({
          displayName: h.name,
          username: h.username || undefined,
          bio: h.bio || null,
        });
      }

      if ((_?.slug ?? null) !== (z.current?.slug ?? null)) {
        if (_) {
          await onSavingChange.setActivePin(_.slug);
        } else {
          await onSavingChange.removeActivePin();
        }
      }

      F({ ...h });
      z.current = _;
      d(false);
      const q = w.getState().profile;

      if (q) {
        w.getState().setProfile({
          ...q,
          displayName: h.name,
          username: h.username,
          bio: h.bio || null,
          pin: _,
        });
      }

      if (
        h_username &&
        h_username !== k &&
        (T === `/@${k}` || T === `/@${r?.id}`)
      ) {
        u_1(`/@${h_username}`);
      }
    } catch (V) {
      console.error("Failed to save profile:", V);

      if (x(V)) {
        if (V.errors) {
          const D = {};
          for (const [q, Y] of Object.entries(V.errors)) {
            D[q] = at_1(Y[0] || "Ошибка валидации");
          }
          y(D);
        } else {
          R(ao_1(V.code, V.message || "Не удалось сохранить изменения"));
        }
      } else {
        R("Не удалось сохранить изменения");
      }
    } finally {
      P(false);
    }
  };

  const ve = () => {
    if (x) {
      A({ ...x });
      ae(z.current);
      d(false);
    }
  };

  aw(a, () => ({
    save: ge,
    discard: ve,
  }));

  return b
    ? u(S_1, {
        children: [
          u("h2", { className: t.contentTitle, children: "Аккаунт" }),
          u(a5, {}),
        ],
      })
    : u(S_1, {
        children: [
          u("h2", { className: t.contentTitle, children: "Аккаунт" }),
          u("div", {
            className: t.section,
            children: [
              u("div", {
                className: t.settingItem,
                children: [
                  u("div", {
                    className: t.settingInfo,
                    children: u("div", {
                      className: t.settingText,
                      children: [
                        u("span", {
                          className: t.settingTitle,
                          children: "Эмоджи-клан",
                        }),
                        u("span", {
                          className: t.settingDescription,
                          children: "Выбран при регистрации. Изменить нельзя",
                        }),
                      ],
                    }),
                  }),
                  u("div", {
                    className: t.avatarDisplay,
                    children: h.avatar,
                  }),
                ],
              }),
              u("div", {
                className: t.settingItem,
                children: [
                  u("div", {
                    className: t.settingInfo,
                    children: u("div", {
                      className: t.settingText,
                      children: [
                        u("span", {
                          className: t.settingTitle,
                          children: "Имя",
                        }),
                        u("span", {
                          className: t.settingDescription,
                          children: "Ваше отображаемое имя",
                        }),
                      ],
                    }),
                  }),
                  u("div", {
                    className: t.settingControl,
                    children: [
                      u(Ce, {
                        value: h.name,
                        onChange: (k) => B("name", k),
                      }),
                      f.displayName &&
                        u("span", {
                          className: t.fieldError,
                          children: f.displayName,
                        }),
                    ],
                  }),
                ],
              }),
              u("div", {
                className: t.settingItem,
                children: [
                  u("div", {
                    className: t.settingInfo,
                    children: u("div", {
                      className: t.settingText,
                      children: [
                        u("span", {
                          className: t.settingTitle,
                          children: "Username",
                        }),
                        u("span", {
                          className: t.settingDescription,
                          children:
                            "Ваш уникальный идентификатор (только латиница, цифры и _)",
                        }),
                      ],
                    }),
                  }),
                  u("div", {
                    className: t.settingControl,
                    children: [
                      u(Ce, {
                        value: h.username,
                        onChange: (k) => B("username", k),
                      }),
                      f.username &&
                        u("span", {
                          className: t.fieldError,
                          children: f.username,
                        }),
                    ],
                  }),
                ],
              }),
              u("div", {
                className: `${t.settingItem} ${t.column}`,
                children: [
                  u("div", {
                    className: t.settingInfo,
                    children: u("div", {
                      className: t.settingText,
                      children: [
                        u("span", {
                          className: t.settingTitle,
                          children: "О себе",
                        }),
                        u("span", {
                          className: t.settingDescription,
                          children: "Расскажите немного о себе",
                        }),
                      ],
                    }),
                  }),
                  u("textarea", {
                    className: t.bioTextarea,
                    value: h.bio,
                    onChange: (k) => B("bio", k.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  f.bio &&
                    u("span", { className: t.fieldError, children: f.bio }),
                ],
              }),
              !de &&
                m.length > 0 &&
                u("div", {
                  className: `${t.settingItem} ${t.column}`,
                  children: [
                    u("div", {
                      className: t.settingInfo,
                      children: u("div", {
                        className: t.settingText,
                        children: [
                          u("span", {
                            className: t.settingTitle,
                            children: "Пин",
                          }),
                          u("span", {
                            className: t.settingDescription,
                            children: "Отображается рядом с именем",
                          }),
                        ],
                      }),
                    }),
                    u("div", {
                      className: t.pinGrid,
                      children: m.map((k) =>
                        u(
                          "button",
                          {
                            className: `${t.pinItem} ${
                              _?.slug === k.slug ? t.pinActive : ""
                            }`,
                            onClick: () => ee(k),
                            disabled: E,
                            title: k.description || k.name,
                            type: "button",
                            children: [
                              u("img", {
                                src: k.url,
                                alt: k.name,
                                className: t.pinImage,
                              }),
                              u("span", {
                                className: t.pinName,
                                children: k.name,
                              }),
                            ],
                          },
                          k.slug
                        )
                      ),
                    }),
                  ],
                }),
              N && u("div", { className: t.saveError, children: N }),
            ],
          }),
          p &&
            u("div", {
              className: t.section,
              children: u("button", {
                type: "button",
                className: t.logoutButton,
                onClick: () => {
                  u();
                  onClose();
                },
                children: [
                  u(ax, { size: 20 }),
                  u("span", { children: "Выйти из аккаунта" }),
                ],
              }),
            }),
          u("div", {
            className: t.section,
            children: u("button", {
              type: "button",
              className: t.deleteAccountButton,
              onClick: () => openModal(u(Kt, { onClose: closeModal })),
              children: "Удалить аккаунт",
            }),
          }),
        ],
      });
});

const va = "veRS";
const ba = "ht3w";
const wa = "tuCk";
const Na = "vwgM";
const $e = { content: va, title: ba, subtitle: wa, actions: Na };

export function CancelSubscriptionModal({ expiresAt, onConfirm, onClose }) {
  const [i, a] = d(false);

  const r = new Date(expiresAt).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const u = async () => {
    if (!i) {
      a(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        a(false);
      }
    }
  };

  return u(M, {
    onClose: onClose,
    showHeader: false,
    children: u("div", {
      className: $e.content,
      children: [
        u("h2", { className: $e.title, children: "Отключить автопродление?" }),
        u("p", {
          className: $e.subtitle,
          children: [
            "Подписка будет действовать до ",
            r,
            ". После этой даты она просто не продлится автоматически. Вы сможете включить автопродление обратно в любой момент.",
          ],
        }),
        u("div", {
          className: $e.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: (c) => {
                c.stopPropagation();
                onClose();
              },
              children: "Оставить",
            }),
            u(B, {
              variant: "danger",
              onClick: (c) => {
                c.stopPropagation();
                u();
              },
              disabled: i,
              children: "Отключить автопродление",
            }),
          ],
        }),
      ],
    }),
  });
}

const Ca = "Vzw2";
const Ta = "jZ7d";
const ka = "TsvV";
const Ia = "ifN7";
const Sa = "lW6S";
const ye = {
  content: Ca,
  title: Ta,
  subtitle: ka,
  disclaimer: Ia,
  actions: Sa,
};
function Ea({ onConfirm, onClose }) {
  const [o, i] = d(false);

  const a = async () => {
    if (!o) {
      i(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        i(false);
      }
    }
  };

  return u(M, {
    onClose: onClose,
    showHeader: false,
    children: u("div", {
      className: ye.content,
      children: [
        u("h2", { className: ye.title, children: "Включить автопродление?" }),
        u("p", {
          className: ye.subtitle,
          children:
            "Подписка будет автоматически продлеваться каждый месяц. Средства будут списываться с привязанной карты.",
        }),
        u("p", {
          className: ye.disclaimer,
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
          className: ye.actions,
          children: [
            u(B, {
              variant: "secondary",
              onClick: (r) => {
                r.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            u(B, {
              variant: "primary",
              onClick: (r) => {
                r.stopPropagation();
                a();
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

const Pa = [
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

const Ma = 2247;
const $a = 157;

const qe = [
  null,
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

const qe_length = qe.length;
const ne = 370 / 1080;
const Aa = 605;
const Da = 40;
const xa = { s: 14, x: 623 };
const La = { s: 15, x: 629 };
function Ra(n, s) {
  const o = (n + s + 200) / ne;
  const i = qe.slice();
  let a = 1785;
  let r = 218;
  let u = true;
  for (let c = 98; c < qe_length && ((r += 18), (a += r), !(a > o)); c++) {
    const g = u ? La : xa;
    i[c] = [g.s, g.x, a];
    u = !u;
  }
  return i;
}
function Oa() {
  const n = A(null);
  const s = A(null);
  const o = A({ f: 0, ts: 0, tl: qe.slice(), xOff: 0, yOff: 0 });

  h(() => {
    const s_current = s.current;
    const n_current = n.current;
    if (!s_current || !n_current) {
      return;
    }
    function r() {
      const { innerHeight, innerWidth } = window;

      const n_current_parentElement = n_current.parentElement;
      let E;
      let P;
      if (n_current_parentElement) {
        const f = n_current_parentElement.getBoundingClientRect();
        E = f.top;
        P = f.left + (f.width - 370) / 2;
      } else {
        E = (innerHeight - 900) / 2;
        P = (innerWidth - 370) / 2;
      }
      const M = innerWidth <= 1173;
      o.current.yOff = 357 * ne - E + (M ? 60 : 0);
      const d = 260;
      o.current.xOff = Aa * ne - P - d;
      o.current.tl = Ra(innerHeight, o.current.yOff);
    }
    const u = setTimeout(r, 260);
    let c;
    const g = () => {
      clearTimeout(c);
      c = setTimeout(r, 150);
    };
    window.addEventListener("resize", g);
    let p;
    function v(T) {
      const o_current = o.current;
      if (T - o_current.ts >= Da) {
        const w = o_current.tl[o_current.f];
        if (!w) {
          s_current.style.visibility = "hidden";
        } else {
          const [E, P, M] = w;
          const [d, , f, y] = Pa[E];
          const N = (f * ne + 0.5) | 0;
          const R = (y * ne + 0.5) | 0;
          s_current.style.cssText = `visibility:visible;width:${N}px;height:${R}px;background-image:url(/assets/nuksta/nuksta-chechik-sprite.png);background-repeat:no-repeat;image-rendering:pixelated;will-change:transform;background-position:${-(
            (d * ne + 0.5) |
            0
          )}px 0px;background-size:${(Ma * ne + 0.5) | 0}px ${
            ($a * ne + 0.5) | 0
          }px;transform:translate(${(P * ne - o_current.xOff + 0.5) | 0}px,${
            (M * ne - o_current.yOff + 0.5) | 0
          }px)`;
        }
        o_current.f = (o_current.f + 1) % qe_length;
        o_current.ts = T;
      }
      p = requestAnimationFrame(v);
    }
    p = requestAnimationFrame(v);

    return () => {
      cancelAnimationFrame(p);
      clearTimeout(u);
      clearTimeout(c);
      window.removeEventListener("resize", g);
    };
  }, []);

  return u(S_1, {
    children: [
      u("div", {
        ref: n,
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
            ref: s,
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
const Ba = "RYx5";
const _a = "HUjf";
const Ua = "nH3q";
const Ha = "xH21";
const za = "SeQk";
const Va = "kDIm";
const Wa = "jPbX";
const ja = "cOiP";
const Fa = "K2tm";
const Ga = "VQl5";
const Za = "ezW0";
const qa = "ovDh";
const Ka = "inHS";
const Ya = "epdl";
const Qa = "hxth";
const Xa = "OO6z";
const Ja = "QQWb";
const eo = "BfKT";
const no = "sGfV";
const to = "iHLF";
const so = "uJHU";
const ao = "BmVo";
const oo = "loK3";
const io = "YhCS";
const lo = "CLwo";
const ro = "nPGI";
const co = "DyEe";
const uo = "kxVi";
const ho = "cXBZ";
const mo = "WxRu";
const po = "Ye8b";
const fo = "Has1";
const go = "yI7w";
const vo = "Od9t";

const C = {
  modal: Ba,
  sub: _a,
  top: Ua,
  bottom: Ha,
  title: za,
  section: Va,
  profileSection: Wa,
  label: ja,
  labelRow: Fa,
  dim: Ga,
  row: Za,
  icon: qa,
  iconGradient: Ka,
  name: Ya,
  nameGradient: Qa,
  namePinBadge: Xa,
  promoVideo: Ja,
  features: eo,
  featureContent: no,
  featureTitle: to,
  gradientText: so,
  soon: ao,
  infoBtn: oo,
  footer: io,
  disclaimer: lo,
  methodSelectRow: ro,
  methodSelectLabel: co,
  methodSelect: uo,
  chargeInfo: ho,
  consentLink: mo,
  subscribeBtn: po,
  btnLoading: fo,
  btnSpinner: go,
  activeLabel: vo,
};

function ln({ text }) {
  return u(ay, {
    text: text,
    multiline: true,
    children: u("span", {
      className: C.infoBtn,
      children: u(ct, { size: 14 }),
    }),
  });
}
const Ae = "new";
function bo(n) {
  return n.type === "bank_card"
    ? `${n.cardBrand || "Карта"} •••• ${n.cardLast4 || ""}`.trim()
    : n.type === "sbp"
    ? "СБП"
    : n.type;
}
function wo({ isOpen, onClose }) {
  const o = j_1();
  const [i, a] = d(false);
  const [r, u] = d(false);
  const [c, g] = d([]);
  const [p, v] = d(Ae);
  const [T, b] = d(199);

  h(() => {
    if (isOpen) {
      X.getStatus()
        .then((f) => {
          u(!!f.recurringEnabled);

          if (typeof f.price == "number") {
            b(f.price);
          }

          if (f.recurringEnabled) {
            X.getMethods()
              .then((y) => {
                g(y);
                const N = y.find((R) => R.isDefault) || y[0];
                v(N ? N.id : Ae);
              })
              .catch(() => g([]));
          }
        })
        .catch(() => u(false));
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const w = o?.subscription?.isActive ?? false;
  const E = new Date();
  E.setMonth(E.getMonth() + 1);
  const P = E.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  const M = r && p !== Ae;

  const d = async () => {
    if (i) {
      return;
    }
    a(true);

    if (M) {
      try {
        const y = await X.pay(p);
        if (y.error) {
          j.error(y.error);
          return;
        }
        j.success("Подписка оформлена!");
        onClose();

        w.getState()
          .fetchProfile()
          .catch(() => {});
      } catch (y) {
        j.error(
          y instanceof Error && y.message ? y.message : "Ошибка при оплате"
        );
      } finally {
        a(false);
      }
      return;
    }

    const f = window.open("about:blank", "_blank");
    try {
      const y = await X.pay();
      if (y.error) {
        f?.close();
        j.error(y.error);
        return;
      }

      if (y.confirmationUrl && f) {
        f.location.href = y.confirmationUrl;
      } else if (y.confirmationUrl) {
        window.location.href = y.confirmationUrl;
      }
    } catch (y) {
      f?.close();

      j.error(
        y instanceof Error && y.message
          ? y.message
          : "Ошибка при создании платежа"
      );
    } finally {
      a(false);
    }
  };

  return $(
    u(M, {
      onClose: onClose,
      showHeader: false,
      frameless: true,
      className: C.modal,
      children: [
        u(Oa, {}),
        u("div", {
          className: C.sub,
          children: [
            u("div", {
              className: C.top,
              children: [
                u("div", { className: C.title, children: "ИТД НУКСТА" }),
                u("div", {
                  className: `${C.section} ${C.profileSection}`,
                  children: [
                    u("div", {
                      className: C.label,
                      children: "Ваш профиль с ИТД НУКСТА",
                    }),
                    u("div", {
                      className: C.row,
                      children: [
                        u(f, { src: o?.avatar || null, size: "sm" }),
                        u("div", {
                          children: [
                            u("div", {
                              className: C.name,
                              children: [
                                u("span", {
                                  className: C.nameGradient,
                                  children: o?.displayName,
                                }),
                                u("img", {
                                  src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                  alt: "НУКСТА",
                                  width: 24,
                                  height: 24,
                                  className: C.namePinBadge,
                                }),
                              ],
                            }),
                            u("div", {
                              className: C.dim,
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
              className: C.promoVideo,
            }),
            u("div", {
              className: C.bottom,
              children: [
                u("div", {
                  className: C.section,
                  children: [
                    u("div", {
                      className: C.labelRow,
                      children: [
                        u("span", {
                          className: C.label,
                          children: "Прикольные украшалки",
                        }),
                        u(ln, {
                          text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                        }),
                      ],
                    }),
                    u("div", {
                      className: C.features,
                      children: [
                        u("div", {
                          className: C.row,
                          children: [
                            u("span", {
                              className: C.icon,
                              children: u("div", { className: C.iconGradient }),
                            }),
                            u("div", {
                              children: u("div", {
                                className: `${C.featureTitle} ${C.gradientText}`,
                                children: "Уникальный цвет ника",
                              }),
                            }),
                          ],
                        }),
                        u("div", {
                          className: C.row,
                          children: [
                            u("span", {
                              className: C.icon,
                              children: u("img", {
                                src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                alt: "Пин",
                                width: 20,
                                height: 20,
                              }),
                            }),
                            u("div", {
                              children: u("div", {
                                className: C.featureTitle,
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
                  className: C.section,
                  children: [
                    u("div", {
                      className: C.labelRow,
                      children: [
                        u("span", {
                          className: C.label,
                          children: "Сможете с нами тестить новые штуки",
                        }),
                        u(ln, {
                          text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                        }),
                      ],
                    }),
                    u("div", {
                      className: C.features,
                      children: [
                        u("div", {
                          className: C.row,
                          children: [
                            u("span", {
                              className: C.icon,
                              children: u(Nt, { size: 20 }),
                            }),
                            u("div", {
                              className: C.featureContent,
                              children: u("div", {
                                className: C.featureTitle,
                                children: "Загрузка видео",
                              }),
                            }),
                          ],
                        }),
                        u("div", {
                          className: C.row,
                          children: [
                            u("span", {
                              className: C.icon,
                              children: u(S_1_1, { size: 20 }),
                            }),
                            u("div", {
                              className: C.featureContent,
                              children: u("div", {
                                className: C.featureTitle,
                                children: [
                                  "Сообщения ",
                                  u("span", {
                                    className: C.soon,
                                    children: "soon",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        u("div", {
                          className: C.row,
                          children: [
                            u("span", {
                              className: C.icon,
                              children: u(wt, { size: 20 }),
                            }),
                            u("div", {
                              className: C.featureContent,
                              children: u("div", {
                                className: C.featureTitle,
                                children: [
                                  "Музыка ",
                                  u("span", {
                                    className: C.soon,
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
                  className: C.footer,
                  children: [
                    !w &&
                      c.length > 0 &&
                      u("label", {
                        className: C.methodSelectRow,
                        children: [
                          u("span", {
                            className: C.methodSelectLabel,
                            children: "Сохранённый способ оплаты",
                          }),
                          u("select", {
                            className: C.methodSelect,
                            value: p,
                            onChange: (f) => v(f.target.value),
                            children: [
                              c.map((f) =>
                                u(
                                  "option",
                                  { value: f.id, children: bo(f) },
                                  f.id
                                )
                              ),
                              u("option", {
                                value: Ae,
                                children: "Новый способ оплаты",
                              }),
                            ],
                          }),
                        ],
                      }),
                    !w &&
                      u("div", {
                        className: C.chargeInfo,
                        children: [
                          "Сегодня спишется ",
                          T,
                          " ₽, далее ежемесячно — следующее списание ",
                          P,
                          ".",
                        ],
                      }),
                    w
                      ? u("div", {
                          className: C.activeLabel,
                          children: "Подписка активна",
                        })
                      : u("button", {
                          type: "button",
                          className: C.subscribeBtn,
                          onClick: d,
                          disabled: i,
                          children: i
                            ? u("span", {
                                className: C.btnLoading,
                                children: [
                                  u(a5, {
                                    size: "xs",
                                    className: C.btnSpinner,
                                  }),
                                  "Оплачиваем…",
                                ],
                              })
                            : `Оплатить ${T}₽ на месяц`,
                        }),
                    !w &&
                      u("div", {
                        className: C.disclaimer,
                        children: [
                          "Нажимая кнопку, вы принимаете ",
                          u("a", {
                            href: "/recurring-terms",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: C.consentLink,
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

const No = {
  yoo_money: "ЮMoney",
  sberbank: "SberPay",
  tinkoff_bank: "T-Pay",
  sbp: "СБП",
  mobile_balance: "Баланс телефона",
  sber_loan: "Кредит от СберБанка",
  sber_bnpl: "Плати частями",
  cash: "Наличные",
};

const yo = {
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

function rn(n) {
  if (n.type === "bank_card") {
    return `${n.cardBrand || "Карта"} •••• ${n.cardLast4 || ""}`.trim();
  }

  if (!No[n.type]) {
    return n.type;
  }
}
function Co(n) {
  return yo[n.type] || "";
}
const cn = 5;
function To() {
  const n = w((h) => h.profile);

  const [s, o] = d(false);
  const [i, a] = d(false);
  const [r, u] = d(false);
  const [c, g] = d([]);
  const [p, v] = d(true);
  const [T, b] = d(false);
  const [w, E] = d(false);
  const [P, M] = d(null);
  const [d, f] = d(false);

  h(() => {
    X.getStatus()
      .then((h) => f(!!h.recurringEnabled))
      .catch(() => f(false));
  }, []);

  h(() => {
    if (d) {
      X.getMethods()
        .then(g)
        .catch(() => g([]))
        .finally(() => v(false));
    }
  }, [d]);

  const y = () => {
    X.getMethods()
      .then(g)
      .catch(() => {});
  };

  const N = async (h) => {
    try {
      await X.setDefaultMethod(h);

      g((A) =>
        A.map((m) => ({
          ...m,
          isDefault: m.id === h,
        }))
      );
    } catch {
      j.error("Не удалось изменить основной способ оплаты");
    }
  };

  const R = async (h) => {
    try {
      const A = await X.deleteMethod(h.id);

      g((m) => m.filter((H) => H.id !== h.id));

      if (A.autoRenewalDisabled && n?.subscription) {
        w.getState().setProfile({
          ...n,
          subscription: { ...n.subscription, autoRenewal: false },
        });
      }

      y();
    } catch {
      j.error("Не удалось отвязать карту");
    }
  };

  const x = async (h) => {
    if (T) {
      return;
    }
    b(true);
    E(false);
    const A = window.open("about:blank", "_blank");
    try {
      const m = await X.bindCard(h);
      const m_error = m.error;
      if (m_error || !m.confirmationUrl) {
        A?.close();
        j.error(m_error || "Привязка карт временно недоступна");
        return;
      }

      if (A) {
        A.location.href = m.confirmationUrl;
      } else {
        window.location.href = m.confirmationUrl;
      }
    } catch (m) {
      A?.close();

      j.error(
        m instanceof Error && m.message
          ? m.message
          : "Привязка карт временно недоступна"
      );
    } finally {
      b(false);
    }
  };

  const F = [...c].sort((h, A) =>
    h.isDefault !== A.isDefault
      ? h.isDefault
        ? -1
        : 1
      : (A.createdAt || "").localeCompare(h.createdAt || "")
  );

  return u(S_1, {
    children: [
      u("h2", { className: t.contentTitle, children: "Оплата" }),
      u("div", {
        className: t.section,
        children: [
          n?.subscription?.isActive
            ? u("div", {
                className: t.settingItem,
                children: [
                  u("div", {
                    className: t.settingInfo,
                    children: u("div", {
                      className: t.settingText,
                      children: [
                        u("span", {
                          className: t.settingTitle,
                          children: "Подписка ИТД НУКСТА",
                        }),
                        u("span", {
                          className: t.settingDescription,
                          children: n.subscription.expiresAt
                            ? (() => {
                                const h = new Date(n.subscription.expiresAt);
                                const A = new Date();

                                const m = Math.max(
                                  0,
                                  Math.ceil(
                                    (h.getTime() - A.getTime()) /
                                      (1000 /* 1e3 */ * 60 * 60 * 24)
                                  )
                                );

                                return `до ${h.toLocaleDateString("ru-RU", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })} (${m} ${
                                  m === 1 ? "день" : m < 5 ? "дня" : "дней"
                                })`;
                              })()
                            : "Активна",
                        }),
                      ],
                    }),
                  }),
                  n.subscription.autoRenewal
                    ? u("button", {
                        type: "button",
                        className: t.subscriptionCancel,
                        onClick: () => o(true),
                        children: "Отключить автопродление",
                      })
                    : u("button", {
                        type: "button",
                        className: t.subscriptionRenew,
                        onClick: () => a(true),
                        children: "Включить автопродление",
                      }),
                ],
              })
            : u("div", {
                className: t.settingItem,
                children: [
                  u("div", {
                    className: t.settingInfo,
                    children: u("div", {
                      className: t.settingText,
                      children: [
                        u("span", {
                          className: t.settingTitle,
                          children: "Подписка ИТД НУКСТА",
                        }),
                        u("span", {
                          className: t.settingDescription,
                          children: "Не оформлена",
                        }),
                      ],
                    }),
                  }),
                  u("button", {
                    type: "button",
                    className: t.subscriptionRenew,
                    onClick: () => u(true),
                    children: "Оформить",
                  }),
                ],
              }),
          d &&
            u("div", {
              className: `${t.settingItem} ${t.column}`,
              children: [
                u("div", {
                  className: t.settingInfo,
                  children: u("div", {
                    className: t.settingText,
                    children: [
                      u("span", {
                        className: t.settingTitle,
                        children: "Способы оплаты",
                      }),
                      u("span", {
                        className: t.settingDescription,
                        children:
                          "Сохранённые способы для автопродления подписки. Отвязать можно в любой момент",
                      }),
                    ],
                  }),
                }),
                u("div", {
                  className: t.paymentMethodsList,
                  children: p
                    ? u(a5, {})
                    : u(S_1, {
                        children: [
                          F.map((h) => {
                            const A = h.type === "bank_card" ? _e : an;
                            return u(
                              "div",
                              {
                                className: t.paymentMethodRow,
                                children: [
                                  u("div", {
                                    className: t.paymentMethodIcon,
                                    children: u(A, { size: 18 }),
                                  }),
                                  u("div", {
                                    className: t.paymentMethodInfo,
                                    children: [
                                      u("span", {
                                        className: t.paymentMethodTitle,
                                        children: [
                                          rn(h),
                                          h.isDefault &&
                                            c.length > 1 &&
                                            u("span", {
                                              className: t.paymentMethodBadge,
                                              children: "основной",
                                            }),
                                        ],
                                      }),
                                      u("span", {
                                        className: t.paymentMethodSubtitle,
                                        children: Co(h),
                                      }),
                                    ],
                                  }),
                                  u("div", {
                                    className: t.paymentMethodActions,
                                    children: [
                                      !h.isDefault &&
                                        u("button", {
                                          type: "button",
                                          className: t.paymentMethodBtn,
                                          onClick: () => N(h.id),
                                          children: "Сделать основным",
                                        }),
                                      u("button", {
                                        type: "button",
                                        className: t.paymentMethodBtnDanger,
                                        onClick: () => M(h),
                                        children: "Отвязать",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              h.id
                            );
                          }),
                          c.length === 0 &&
                            u("div", {
                              className: t.paymentMethodsEmpty,
                              children: [
                                u(_e, { size: 18 }),
                                u("span", {
                                  children: "Нет привязанных методов оплаты",
                                }),
                              ],
                            }),
                          c.length < cn
                            ? w
                              ? u(S_1, {
                                  children: [
                                    u("button", {
                                      type: "button",
                                      className: t.paymentMethodAdd,
                                      onClick: () => x("bank_card"),
                                      disabled: T,
                                      children: [
                                        u("span", {
                                          className: t.paymentMethodIcon,
                                          children: u(_e, { size: 16 }),
                                        }),
                                        "Банковская карта",
                                      ],
                                    }),
                                    u("button", {
                                      type: "button",
                                      className: t.paymentMethodAdd,
                                      onClick: () => x("sbp"),
                                      disabled: T,
                                      children: [
                                        u("span", {
                                          className: t.paymentMethodIcon,
                                          children: u(an, { size: 16 }),
                                        }),
                                        "СБП",
                                      ],
                                    }),
                                  ],
                                })
                              : u("button", {
                                  type: "button",
                                  className: t.paymentMethodAdd,
                                  onClick: () => E(true),
                                  disabled: T,
                                  children: [
                                    u("span", {
                                      className: t.paymentMethodIcon,
                                      children: u(Yn, { size: 16 }),
                                    }),
                                    "Добавить способ оплаты",
                                  ],
                                })
                            : u("div", {
                                className: t.paymentMethodsEmpty,
                                children: u("span", {
                                  children: [
                                    "Достигнут лимит способов оплаты (",
                                    cn,
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
      s &&
        n?.subscription?.expiresAt &&
        u(CancelSubscriptionModal, {
          expiresAt: n.subscription.expiresAt,
          onConfirm: async () => {
            const h = await X.setAutoRenewal(false);
            w.getState().setProfile({
              ...n,
              subscription: { ...n.subscription, autoRenewal: h.autoRenewal },
            });
          },
          onClose: () => o(false),
        }),
      i &&
        u(Ea, {
          onConfirm: async () => {
            const h = await X.setAutoRenewal(true);
            w.getState().setProfile({
              ...n,
              subscription: {
                ...n.subscription,
                autoRenewal: h.autoRenewal,
                ...(h.expiresAt ? { expiresAt: h.expiresAt } : {}),
              },
            });
          },
          onClose: () => a(false),
        }),
      P &&
        u(Ve, {
          title: "Отвязать способ оплаты?",
          message: `${rn(P)} будет отвязан. Это действие нельзя отменить.`,
          confirmText: "Отвязать",
          danger: true,
          onConfirm: () => R(P),
          onClose: () => M(null),
        }),
      u(wo, {
        isOpen: r,
        onClose: () => {
          u(false);

          X.getMethods()
            .then(g)
            .catch(() => {});
        },
      }),
    ],
  });
}
const ko = "hscJ";
const Io = "Nk93";
const So = "KIYu";
const Eo = "udqh";
const Po = "tjSP";
const Mo = "AdpH";
const $o = "pD1A";

const fe = {
  selectWrapper: ko,
  select: Io,
  open: So,
  selectedValue: Eo,
  dropdown: Po,
  option: Mo,
  selected: $o,
};

function We({ value, options, onChange, disabled }) {
  const [a, r] = d(false);
  const u = A(null);

  const c = options.find((p) => p.value === value);

  h(() => {
    const p = (v) => {
      if (u.current && !u.current.contains(v.target)) {
        r(false);
      }
    };

    if (a) {
      document.addEventListener("mousedown", p);
    }

    return () => {
      document.removeEventListener("mousedown", p);
    };
  }, [a]);
  const g = (p) => {
    onChange(p);
    r(false);
  };
  return u("div", {
    ref: u,
    className: fe.selectWrapper,
    children: [
      u("button", {
        type: "button",
        className: `${fe.select} ${a ? fe.open : ""}`,
        onClick: (p) => {
          p.stopPropagation();

          if (!disabled) {
            r(!a);
          }
        },
        disabled: disabled,
        children: [
          u("span", { className: fe.selectedValue, children: c?.label }),
          u(yt, { size: 16 }),
        ],
      }),
      a &&
        u("div", {
          className: fe.dropdown,
          children: options.map((p) =>
            u(
              "button",
              {
                type: "button",
                className: `${fe.option} ${
                  p.value === value ? fe.selected : ""
                }`,
                onClick: () => g(p.value),
                children: p.label,
              },
              p.value
            )
          ),
        }),
    ],
  });
}

const dn = [
  { value: "everyone", label: "Все" },
  { value: "followers", label: "Подписчики" },
  { value: "mutual", label: "Взаимные подписчики" },
  { value: "nobody", label: "Никто" },
];

const Ao = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

function Do() {
  const { theme, setTheme } = Tn();
  return u(S_1, {
    children: [
      u("h2", { className: t.contentTitle, children: "Оформление" }),
      u("div", {
        className: t.section,
        children: u("div", {
          className: t.settingItem,
          children: [
            u("div", {
              className: t.settingInfo,
              children: u("div", {
                className: t.settingText,
                children: [
                  u("span", { className: t.settingTitle, children: "Тема" }),
                  u("span", {
                    className: t.settingDescription,
                    children: "Выберите цветовую схему приложения",
                  }),
                ],
              }),
            }),
            u(We, { value: theme, options: Ao, onChange: (o) => setTheme(o) }),
          ],
        }),
      }),
    ],
  });
}
const xo = "dJNo";
const Lo = "h1XH";
const Ro = "eVDq";
const Oo = "IdQQ";
const Bo = "jmss";
const _o = "v0Cn";

const we = {
  overlay: xo,
  dialog: Lo,
  title: Ro,
  message: Oo,
  actions: Bo,
  column: _o,
};

const Uo = { default: "primary", cancel: "secondary", destructive: "danger" };
function un({ title, message, actions, onDismiss }) {
  const a = actions.some((r) => r.loading);

  h(() => {
    const r = (c) => {
      if (c.key === "Escape") {
        c.stopPropagation();
        onDismiss?.();
      }
    };
    document.addEventListener("keydown", r);
    const u = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", r);
      document.body.style.overflow = u;
    };
  }, []);

  return $(
    u("div", {
      className: we.overlay,
      onClick: (r) => {
        if (r.target === r.currentTarget && !a) {
          onDismiss?.();
        }
      },
      children: u("div", {
        role: "alertdialog",
        "aria-modal": "true",
        className: we.dialog,
        children: [
          u("h2", { className: we.title, children: title }),
          message !== undefined &&
            u("p", { className: we.message, children: message }),
          u("div", {
            className: `${we.actions} ${actions.length > 2 ? we.column : ""}`,
            children: actions.map((r) =>
              u(
                B,
                {
                  variant: Uo[r.role ?? "default"],
                  size: "lg",
                  loading: r.loading,
                  disabled: a && !r.loading,
                  autofocus: r.role === "cancel",
                  onClick: (u) => {
                    u.stopPropagation();
                    r.onClick();
                  },
                  children: r.label,
                },
                r.label
              )
            ),
          }),
        ],
      }),
    }),
    document.body
  );
}
async function K(n, s, o, i = false) {
  const a = await fetch(`/api/v1/auth${s}`, {
    method: n,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      ...Qn(),
    },
    ...(o ? { body: JSON.stringify(o) } : {}),
    signal: AbortSignal.timeout(20000 /* 2e4 */),
  });

  const r = await a.json().catch(() => null);

  if (a.ok) {
    return r;
  }
  const u = r?.error || r;
  if (
    a.status === 401 &&
    !i &&
    (!u?.code || u.code === "UNAUTHORIZED") &&
    (await Xn())
  ) {
    return K(n, s, o, true);
  }
  const c = Math.max(
    Number(u?.retryIn) || 0,
    Number(u?.retryAfter) || 0,
    Number(a.headers.get("Retry-After")) || 0
  );
  throw new Ze(
    u?.code || (a.status === 401 ? "UNAUTHORIZED" : "REQUEST_FAILED"),
    a.status === 429 ? Math.max(c, 30) : c
  );
}
function He(n) {
  if (typeof n.flowToken != "string" || n.flowToken.length !== 32) {
    throw new Error("Invalid verification flow");
  }
  return n.flowToken;
}

const W = {
  methods: () => K("GET", "/methods"),
  setPassword: (n) => K("POST", "/set-password", { password: n }),
  attachEmail: async (n) => He(await K("POST", "/email/attach", { email: n })),
  verifyEmail: (n, s, o) =>
    K("POST", "/verify-otp", { email: n, otp: s, flowToken: o }),
  resendEmail: (n, s) => K("POST", "/resend-otp", { email: n, flowToken: s }),
  changePhone: async (n, s) => {
    const o = await K("POST", "/phone/change", { phone: n, captcha: s });
    return { ...Be(o), flowToken: He(o) };
  },
  resendPhone: async (n, s) =>
    Be(await K("POST", "/resend-otp", { phone: n, flowToken: s })),
  changeEmail: async (n) => He(await K("POST", "/email/change", { email: n })),
  verifyChange: async (n, s, o) => {
    const i = await K("POST", "/verify-otp", { ...n, otp: s, flowToken: o });
    if (
      i.mode !== "change" ||
      typeof i.changeToken != "string" ||
      !Array.isArray(i.proofs)
    ) {
      throw new Error("Unexpected change response");
    }
    return {
      changeToken: i.changeToken,
      proofs: i.proofs,
      waitDays: Number(i.waitDays) || 7,
    };
  },
  requestProof: async (n, s) => {
    const o = await K("POST", "/change/proof", { changeToken: n, method: s });
    return {
      sentTo: o.sentTo,
      delivery: o.delivery ? Be({ delivery: o.delivery, retryIn: 0 }) : null,
    };
  },
  confirm: (n, s) => K("POST", "/change/confirm", { changeToken: n, ...s }),
  wait: (n) => K("POST", "/change/wait", { changeToken: n }),
  pending: async () => (await K("GET", "/change/pending")).requests,
  cancelPending: (n) => K("DELETE", `/change/pending/${encodeURIComponent(n)}`),
};

const Sn = (n) => (n instanceof Ze ? n.code : "");

function ke(n, s, o = false) {
  const i = s === "phone";
  return (
    {
      SAME_PHONE: "Это ваш текущий номер.",
      SAME_EMAIL: "Это ваша текущая почта.",
      EMAIL_TAKEN: "Эта почта уже используется другим аккаунтом.",
      IDENTIFIER_TAKEN: i
        ? "Этот номер уже привязан к другому аккаунту."
        : "Эта почта уже используется другим аккаунтом.",
      CHANGE_PENDING:
        "Смена уже ждёт подтверждения. Отмените её в разделе «Безопасность», чтобы начать новую.",
      CHANGE_COOLDOWN: "Новую смену можно начать через сутки после отмены.",
      METHOD_CHANGED: i
        ? "Номер уже изменился. Откройте настройки заново."
        : "Почта уже изменилась. Откройте настройки заново.",
      INVALID_CHANGE_TOKEN:
        "Время на подтверждение вышло. Начните смену заново.",
      NOT_ATTACHED: i ? "Сначала привяжите номер." : "Сначала привяжите почту.",
      PROOF_NOT_AVAILABLE: "Этот способ сейчас недоступен.",
      NO_PROOF_REQUESTED: "Сначала запросите код.",
      NOT_FOUND: "Заявка уже не действует.",
      SESSION_TOO_NEW:
        "Отменить заявку можно с устройства, на котором вход выполнен раньше, чем её подали.",
      ...(s === "email"
        ? { ALREADY_ATTACHED: "К аккаунту уже привязана почта." }
        : {}),
      ...(s
        ? {
            INVALID_PASSWORD: "Неверный пароль.",
            DELIVERY_FAILED: "Не удалось отправить код. Попробуйте ещё раз.",
          }
        : {}),
      ...(o
        ? {
            OTP_INVALID: "Неверный код. Проверьте письмо и попробуйте ещё раз.",
            DELIVERY_FAILED: "Не удалось отправить письмо. Попробуйте ещё раз.",
          }
        : {}),
    }[Sn(n)] ||
    dt(n) ||
    Jn(n)
  );
}
function En() {
  const [n, s] = d(0);

  const [o, i] = d(() => Date.now());

  h(() => {
    if (n <= Date.now()) {
      return;
    }
    const u = setInterval(() => {
      const c = Date.now();
      i(c);

      if (c >= n) {
        clearInterval(u);
      }
    }, 1000 /* 1e3 */);
    return () => clearInterval(u);
  }, [n]);

  return [
    Math.max(0, Math.ceil((n - o) / 1000 /* 1e3 */)),
    (u) => {
      const c = Date.now();
      i(c);
      s(c + u * 1000 /* 1e3 */);
    },
  ];
}
function Ke(n, s) {
  const [o, i] = d(false);
  const [a, r] = d("");
  const u = A(false);
  return {
    busy: o,
    error: a,
    setError: r,
    run: async (g, p) => {
      if (!u.current) {
        u.current = true;
        i(true);
        r("");
        try {
          await g();
        } catch (v) {
          r(n(v));

          if (v instanceof Ze && v.retryIn) {
            s?.(v.retryIn);
          }

          p?.(v);
        } finally {
          u.current = false;
          i(false);
        }
      }
    },
  };
}

const Pn = (n) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n);

const hn = (n) =>
  n.channel === "sms"
    ? "Отправили SMS"
    : n.channel === "push"
    ? "Отправили уведомление"
    : "Сейчас позвоним";

const mn = (n) =>
  n.channel === "sms"
    ? "Введите код из сообщения."
    : n.channel === "voice_call"
    ? `Возьмите трубку — робот продиктует код из ${n.codeLength} цифр.`
    : n.channel === "push"
    ? "Посмотрите код в уведомлении на устройстве, где вы уже вошли в ИТД."
    : `Отвечать не нужно. Введите последние ${n.codeLength} цифры номера, с которого поступит звонок.`;

function Ho(n) {
  const s = n % 10;
  const o = n % 100;

  const i =
    s === 1 && o !== 11
      ? "день"
      : s >= 2 && s <= 4 && (o < 12 || o > 14)
      ? "дня"
      : "дней";

  return `${n} ${i}`;
}
function Mn(n) {
  const s = new Date(n);
  return Number.isNaN(s.getTime())
    ? n
    : `${s.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
      })} в ${s.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
}
const pn = 60;
function zo({ onClose, onAttached }) {
  const [o, i] = d("email");
  const [a, r] = d("");
  const [u, c] = d("");
  const [g, p] = d([]);
  const [v, T] = En();

  const { busy, error, setError, run } = Ke(
    (N) => ke(N, "email", o === "code"),
    T
  );

  const M = (N) => {
    N.preventDefault();

    if (busy || v) {
      return;
    }

    const R = a.trim().toLowerCase();
    if (!Pn(R)) {
      setError("Проверьте адрес почты.");
      return;
    }
    run(async () => {
      c(await W.attachEmail(R));
      r(R);
      p(Array(6).fill(""));
      T(pn);
      i("code");
    });
  };

  const d = (N) => {
    N.preventDefault();

    if (!(busy || !g.every(Boolean))) {
      run(
        async () => {
          if (!(await W.verifyEmail(a, g.join(""), u)).success) {
            throw new Error("Email was not attached");
          }
          onAttached(a);
        },
        () => p(Array(6).fill(""))
      );
    }
  };

  const f = () => {
    if (!busy && !v) {
      run(async () => {
        await W.resendEmail(a, u);
        p(Array(6).fill(""));
        T(pn);
      });
    }
  };

  const y = () => {
    if (!busy) {
      i("email");
      c("");
      p([]);
      setError("");
      T(0);
    }
  };

  return u(M, {
    title: "Почта",
    onClose: onClose,
    className: S.dialog,
    onBeforeClose: () => !busy,
    children: u("div", {
      className: S.dialogContent,
      children: u("div", {
        className: S.card,
        children: [
          u("h1", {
            children: o === "email" ? "Привязать почту" : "Подтвердите почту",
          }),
          u("p", {
            className: S.description,
            children:
              o === "email"
                ? "Пришлём код подтверждения на эту почту."
                : `Мы отправили код на ${a}.`,
          }),
          o === "email" &&
            u("form", {
              className: S.form,
              onSubmit: M,
              children: [
                u("label", {
                  className: S.field,
                  children: [
                    "Почта",
                    u("input", {
                      type: "text",
                      autoComplete: "username",
                      autoComplete: "email",
                      placeholder: "you@example.com",
                      maxLength: 255,
                      required: true,
                      value: a,
                      onInput: (N) => {
                        r(N.currentTarget.value);
                        setError("");
                      },
                      disabled: busy,
                    }),
                  ],
                }),
                error &&
                  u("p", {
                    className: S.error,
                    role: "alert",
                    children: error,
                  }),
                u(B, {
                  type: "submit",
                  size: "lg",
                  fullWidth: true,
                  loading: busy,
                  disabled: !a || !!v,
                  children: v ? `Подождите ${v} с` : "Отправить код",
                }),
                u(Re, {}),
              ],
            }),
          o === "code" &&
            u("form", {
              className: S.form,
              onSubmit: d,
              children: [
                u(yn, {
                  value: g,
                  length: 6,
                  onChange: (N) => {
                    p(N);
                    setError("");
                  },
                  disabled: busy,
                  status: error ? "error" : "idle",
                }),
                error &&
                  u("p", {
                    className: S.error,
                    role: "alert",
                    children: error,
                  }),
                u(B, {
                  type: "submit",
                  size: "lg",
                  fullWidth: true,
                  loading: busy,
                  disabled: !g.every(Boolean),
                  children: "Подтвердить почту",
                }),
                u("button", {
                  type: "button",
                  className: S.link,
                  disabled: busy || !!v,
                  onClick: f,
                  children: v
                    ? `Отправить код повторно через ${v} с`
                    : "Отправить код повторно",
                }),
                u("button", {
                  type: "button",
                  className: S.back,
                  disabled: busy,
                  onClick: y,
                  children: "Ошиблись в адресе? Изменить",
                }),
              ],
            }),
        ],
      }),
    }),
  });
}
const De = 60;
const Vo = ["INVALID_CHANGE_TOKEN", "METHOD_CHANGED", "IDENTIFIER_TAKEN"];
function Wo(n, s, o) {
  return n === "email_code"
    ? o.email
      ? `Код на почту ${o.email}`
      : "Код на почту"
    : n === "phone_code"
    ? o.phone
      ? `Код на номер ${o.phone}`
      : "Код на номер"
    : s === "phone"
    ? o.phone
      ? `Код на старый номер ${o.phone}`
      : "Код на старый номер"
    : o.email
    ? `Код на старую почту ${o.email}`
    : "Код на старую почту";
}
function jo({ kind, methods, onClose }) {
  const i = kind === "phone";
  const [a, r] = d("value");
  const [u, c] = d("ru");
  const [g, p] = d("");
  const [v, T] = d("");
  const [b, w] = d(null);
  const [E, P] = d(0);
  const [M, d] = d("");
  const [f, y] = d("");
  const [N, R] = d("");
  const [x, F] = d(null);
  const [h, A] = d([]);
  const [m, H] = d(null);
  const [_, ae] = d("");
  const [z, de] = d(null);
  const [oe, $] = d(null);
  const [B, ee] = d(null);
  const [ge, ve] = d(null);
  const [k, L] = En();
  const V = a === "code" ? !i : a === "proofCode" && !oe?.delivery;

  const { busy, error, setError, run } = Ke((I) => ke(I, kind, V), L);

  const $n = error((I) => w(I), []);

  const Ye = error(() => w(null), []);

  const Se = i && !v ? et(u, g) : null;
  const Ee = a === "code" ? x?.codeLength ?? 6 : oe?.delivery?.codeLength ?? 6;
  const Qe = h.length === Ee && h.every(Boolean);
  const Xe = !!m?.proofs.includes("password");

  const Oe = (I, G) => {
    ve({ title: I, lede: G });
    setError("");
    r("result");
  };

  const Pe = (I) => {
    if (Vo.includes(Sn(I))) {
      Oe("Не получилось", ke(I, kind));
    }
  };

  const Je = () =>
    Oe(
      i ? "Номер изменён" : "Почта изменена",
      i ? `Теперь входите по номеру ${f}` : `Теперь входите по почте ${f}`
    );

  const An = (I) => {
    I.preventDefault();

    if (busy || k) {
      return;
    }

    if (i) {
      if (!Se || !b) {
        return;
      }
      const ie = b;
      w(null);

      run(async () => {
        try {
          const ue = await W.changePhone(Se, ie);
          y(Se);
          R(ue.flowToken);
          F(ue);
          A(Array(ue.codeLength).fill(""));
          L(ue.retryIn);
          r("code");
        } finally {
          P((ue) => ue + 1);
        }
      });

      return;
    }
    const G = M.trim().toLowerCase();
    if (!Pn(G)) {
      setError("Проверьте адрес почты.");
      return;
    }
    run(async () => {
      R(await W.changeEmail(G));
      d(G);
      y(G);
      F(null);
      A(Array(6).fill(""));
      L(De);
      r("code");
    });
  };

  const Dn = (I) => {
    I.preventDefault();

    if (!Qe || busy) {
      return;
    }

    const G = h.join("");
    if (a === "code") {
      run(
        async () => {
          const ie = await W.verifyChange(
            i ? { phone: f } : { email: f },
            G,
            N
          );
          H(ie);
          ae("");
          L(0);
          r("proof");
        },
        () => A(Array(Ee).fill(""))
      );
      return;
    }

    if (m) {
      run(
        async () => {
          await W.confirm(m.changeToken, { code: G });
          Je();
        },
        (ie) => {
          A(Array(Ee).fill(""));
          Pe(ie);
        }
      );
    }
  };

  const xn = () => {
    if (!busy && !k) {
      run(
        async () => {
          if (a === "proofCode" && m && B) {
            const I = await W.requestProof(m.changeToken, B);
            $(I);
            A(Array(I.delivery?.codeLength ?? 6).fill(""));
            L(De);
          } else if (i) {
            const I = await W.resendPhone(f, N);
            F(I);
            A(Array(I.codeLength).fill(""));
            L(I.retryIn);
          } else {
            await W.resendEmail(f, N);
            A(Array(6).fill(""));
            L(De);
          }
        },
        a === "proofCode" ? Pe : undefined
      );
    }
  };

  const Ln = (I) => {
    I.preventDefault();

    if (!(!m || !_ || busy)) {
      de("password");

      run(async () => {
        await W.confirm(m.changeToken, { password: _ });
        Je();
      }, Pe).finally(() => de(null));
    }
  };

  const Rn = (I) => {
    if (m && !busy) {
      de(I);

      run(async () => {
        if (I === "wait") {
          const ie = await W.wait(m.changeToken);
          Oe(
            "Заявка принята",
            `${i ? "Номер" : "Почта"} сменится ${Mn(
              ie.appliesAt
            )}. До этого заявку можно отменить в разделе «Безопасность»; на всех ваших устройствах придёт уведомление.`
          );
          return;
        }
        const G = await W.requestProof(m.changeToken, I);
        ee(I);
        $(G);
        A(Array(G.delivery?.codeLength ?? 6).fill(""));
        L(De);
        r("proofCode");
      }, Pe).finally(() => de(null));
    }
  };

  const On = () => {
    if (!busy) {
      setError("");
      L(0);

      a === "proofCode"
        ? r("proof")
        : (r("value"), A([]), w(null), P((I) => I + 1));
    }
  };

  const be = oe?.delivery ?? null;

  const Bn =
    a === "value"
      ? i
        ? "Новый номер"
        : "Новая почта"
      : a === "code"
      ? x
        ? hn(x)
        : "Код из письма"
      : a === "proof"
      ? "Подтвердите смену"
      : a === "proofCode"
      ? be
        ? hn(be)
        : "Код из письма"
      : ge?.title;

  const _n =
    a === "value"
      ? i
        ? "Позвоним на него, чтобы убедиться, что номер ваш."
        : "Пришлём на неё код, чтобы убедиться, что почта ваша."
      : a === "code"
      ? x
        ? mn(x)
        : `Отправили на ${f}.`
      : a === "proof"
      ? Xe
        ? "Введите пароль от аккаунта или выберите другой способ."
        : "Выберите, как подтвердить, что смену запросили вы."
      : a === "proofCode"
      ? be
        ? mn(be)
        : `Отправили на ${oe?.sentTo ?? ""}.`
      : ge?.lede;

  const en =
    (a === "code" && x) || a === "proof"
      ? f
      : a === "proofCode" && be && be.channel !== "push"
      ? oe?.sentTo
      : null;

  const Un = m
    ? [
        ...m.proofs
          .filter((I) => I !== "password")
          .map((I) => [I, Wo(I, kind, methods)]),
        ["wait", `Подождать ${Ho(m.waitDays)}`],
      ]
    : [];

  return u(M, {
    title: i ? "Смена номера" : "Смена почты",
    onClose: onClose,
    className: S.dialog,
    onBeforeClose: () => !busy,
    children: u("div", {
      className: S.dialogContent,
      children: u("div", {
        className: S.card,
        children: [
          u("h1", { children: Bn }),
          en && u("p", { className: S.number, children: en }),
          u("p", { className: S.description, children: _n }),
          a === "value" &&
            u("form", {
              className: S.form,
              onSubmit: An,
              children: [
                i
                  ? u(S_1, {
                      children: [
                        u(nt, {
                          country: u,
                          digits: g,
                          error: v,
                          disabled: busy,
                          onChange: (I, G, ie) => {
                            if (I !== u) {
                              w(null);
                              P((ue) => ue + 1);
                            }

                            c(I);
                            p(G);
                            T(ie);
                            setError("");
                          },
                        }),
                        u("div", {
                          className: S.captcha,
                          children: u(
                            tt,
                            {
                              theme:
                                document.documentElement.getAttribute(
                                  "data-theme"
                                ) === "dark"
                                  ? "dark"
                                  : "light",
                              onVerify: $n,
                              onExpire: Ye,
                              onError: Ye,
                            },
                            E
                          ),
                        }),
                      ],
                    })
                  : u("label", {
                      className: S.field,
                      children: [
                        "Новая почта",
                        u("input", {
                          type: "text",
                          autoComplete: "username",
                          autoComplete: "email",
                          placeholder: "you@example.com",
                          maxLength: 255,
                          required: true,
                          value: M,
                          onInput: (I) => {
                            d(I.currentTarget.value);
                            setError("");
                          },
                          disabled: busy,
                        }),
                      ],
                    }),
                (error || v) &&
                  u("p", {
                    className: S.error,
                    role: "alert",
                    children: error || v,
                  }),
                u(B, {
                  type: "submit",
                  size: "lg",
                  fullWidth: true,
                  loading: busy,
                  disabled: !!k || (i ? !Se || !b : !M),
                  children: k ? `Подождите ${k} с` : "Получить код",
                }),
                u(Re, {}),
              ],
            }),
          (a === "code" || a === "proofCode") &&
            u("form", {
              className: S.form,
              onSubmit: Dn,
              children: [
                u(yn, {
                  value: h,
                  length: Ee,
                  onChange: (I) => {
                    A(I);
                    setError("");
                  },
                  disabled: busy,
                  status: error ? "error" : "idle",
                }),
                error &&
                  u("p", {
                    className: S.error,
                    role: "alert",
                    children: error,
                  }),
                u(B, {
                  type: "submit",
                  size: "lg",
                  fullWidth: true,
                  loading: busy,
                  disabled: !Qe,
                  children: a === "code" ? "Продолжить" : "Подтвердить",
                }),
                u("button", {
                  type: "button",
                  className: S.link,
                  disabled: busy || !!k,
                  onClick: xn,
                  children: k
                    ? `Отправить код повторно через ${k} с`
                    : "Отправить код повторно",
                }),
                u("button", {
                  type: "button",
                  className: S.back,
                  disabled: busy,
                  onClick: On,
                  children:
                    a === "code"
                      ? i
                        ? "Другой номер"
                        : "Другая почта"
                      : "Другой способ",
                }),
              ],
            }),
          a === "proof" &&
            m &&
            u("form", {
              className: S.form,
              onSubmit: Ln,
              children: [
                Xe &&
                  u(S_1, {
                    children: [
                      u("label", {
                        className: S.field,
                        children: [
                          "Пароль",
                          u("input", {
                            type: "password",
                            autoComplete: "current-password",
                            placeholder: "Пароль от аккаунта",
                            maxLength: 100,
                            value: _,
                            onInput: (I) => {
                              ae(I.currentTarget.value);
                              setError("");
                            },
                            disabled: busy,
                          }),
                        ],
                      }),
                      u(B, {
                        type: "submit",
                        size: "lg",
                        fullWidth: true,
                        loading: busy && z === "password",
                        disabled: !_ || (busy && z !== "password"),
                        children: "Подтвердить",
                      }),
                    ],
                  }),
                error &&
                  u("p", {
                    className: S.error,
                    role: "alert",
                    children: error,
                  }),
                Un.map(([I, G]) =>
                  u(
                    B,
                    {
                      type: "button",
                      variant: "secondary",
                      size: "lg",
                      fullWidth: true,
                      loading: busy && z === I,
                      disabled: busy && z !== I,
                      onClick: () => Rn(I),
                      children: G,
                    },
                    I
                  )
                ),
              ],
            }),
          a === "result" &&
            u(B, {
              size: "lg",
              fullWidth: true,
              onClick: onClose,
              children: "Готово",
            }),
        ],
      }),
    }),
  });
}
function Fo({ onClose, onSaved }) {
  const [o, i] = d("");
  const [a, r] = d("");
  const [u, c] = d(false);

  const { busy, error, setError, run } = Ke((w) => ke(w));

  const b = (w) => {
    w.preventDefault();

    if (!busy) {
      if (!kn(o)) {
        setError(Te);
        return;
      }
      if (o !== a) {
        setError("Пароли не совпадают.");
        return;
      }
      run(async () => {
        await W.setPassword(o);
        i("");
        r("");
        c(true);
        onSaved();
      });
    }
  };

  return u(M, {
    title: "Пароль",
    onClose: onClose,
    className: S.dialog,
    onBeforeClose: () => !busy,
    children: u("div", {
      className: S.dialogContent,
      children: u("div", {
        className: S.card,
        children: [
          u("h1", { children: u ? "Пароль создан" : "Создать пароль" }),
          u("p", {
            className: S.description,
            children: u
              ? "Теперь можно входить с паролем по почте и по номеру."
              : "С паролем можно входить по почте и по номеру без кода.",
          }),
          u
            ? u(B, {
                size: "lg",
                fullWidth: true,
                onClick: onClose,
                children: "Готово",
              })
            : u("form", {
                className: S.form,
                onSubmit: b,
                children: [
                  u("label", {
                    className: S.field,
                    children: [
                      "Новый пароль",
                      u("input", {
                        type: "password",
                        autoComplete: "new-password",
                        maxLength: 100,
                        required: true,
                        value: o,
                        onInput: (w) => {
                          i(w.currentTarget.value);
                          setError("");
                        },
                        disabled: busy,
                      }),
                    ],
                  }),
                  u("label", {
                    className: S.field,
                    children: [
                      "Повторите пароль",
                      u("input", {
                        type: "password",
                        autoComplete: "new-password",
                        maxLength: 100,
                        required: true,
                        value: a,
                        onInput: (w) => {
                          r(w.currentTarget.value);
                          setError("");
                        },
                        disabled: busy,
                      }),
                    ],
                  }),
                  u("p", { className: S.terms, children: Te }),
                  error &&
                    u("p", {
                      className: S.error,
                      role: "alert",
                      children: error,
                    }),
                  u(B, {
                    type: "submit",
                    size: "lg",
                    fullWidth: true,
                    loading: busy,
                    disabled: !o || !a,
                    children: "Создать пароль",
                  }),
                  u(Re, {}),
                ],
              }),
        ],
      }),
    }),
  });
}
function Go({ onChangePassword }) {
  const [s, o] = d(null);
  const [i, a] = d([]);
  const [r, u] = d("");
  const [c, g] = d(null);
  const [p, v] = d(null);
  const [T, b] = d(false);
  const [w, E] = d("");

  const P = async () => {
    try {
      const [y, N] = await Promise.all([W.methods(), W.pending()]);
      o(y);
      a(N);
      u("");
    } catch {
      u("Не удалось загрузить способы входа. Попробуйте ещё раз.");
    }
  };

  h(() => {
    P();
  }, []);

  const M = () => {
    g(null);
    P();
  };

  const d = async (y) => {
    b(true);
    try {
      await W.cancelPending(y.id);

      a((N) => N.filter((R) => R.id !== y.id));
    } catch (N) {
      E(ke(N, y.kind));
    } finally {
      b(false);
      v(null);
    }
  };

  const f = s
    ? s.hasPassword
      ? s.email
        ? null
        : "Привяжите почту, чтобы входить по ней и восстанавливать пароль."
      : "Создайте пароль, чтобы входить по почте и по номеру без кода."
    : null;

  return u(S_1, {
    children: [
      u("div", {
        className: S.rows,
        children: [
          r &&
            u("div", {
              className: S.error,
              role: "alert",
              children: [
                r,
                u("button", {
                  className: S.link,
                  onClick: () => {
                    P();
                  },
                  children: "Повторить",
                }),
              ],
            }),
          u("div", {
            className: S.row,
            children: [
              u("div", {
                children: [
                  u("strong", { children: "Телефон" }),
                  u("p", {
                    children: s ? s.phone || "Номер не привязан" : "Загрузка…",
                  }),
                ],
              }),
              u(B, {
                size: "sm",
                disabled: !s,
                onClick: () =>
                  g(s?.phone ? { change: "phone" } : "attachPhone"),
                children: s?.phone ? "Изменить" : "Привязать",
              }),
            ],
          }),
          u("div", {
            className: S.row,
            children: [
              u("div", {
                children: [
                  u("strong", { children: "Почта" }),
                  u("p", {
                    children: s ? s.email || "Почта не привязана" : "Загрузка…",
                  }),
                ],
              }),
              u(B, {
                size: "sm",
                disabled: !s,
                onClick: () =>
                  g(s?.email ? { change: "email" } : "attachEmail"),
                children: s?.email ? "Изменить" : "Привязать",
              }),
            ],
          }),
          u("div", {
            className: S.row,
            children: [
              u("div", {
                children: [
                  u("strong", { children: "Пароль" }),
                  u("p", {
                    children: s
                      ? s.hasPassword
                        ? "Пароль установлен"
                        : "Пароль пока не создан"
                      : "Загрузка…",
                  }),
                ],
              }),
              u(B, {
                size: "sm",
                disabled: !s,
                onClick: () =>
                  s?.hasPassword ? onChangePassword() : g("setPassword"),
                children: s?.hasPassword ? "Сменить" : "Создать",
              }),
            ],
          }),
          f && u("p", { className: S.hint, children: f }),
        ],
      }),
      i.length > 0 &&
        u("div", {
          className: S.rows,
          children: [
            i.map((y) =>
              u(
                "div",
                {
                  className: S.row,
                  children: [
                    u("div", {
                      children: [
                        u("strong", {
                          children:
                            y.kind === "phone" ? "Смена номера" : "Смена почты",
                        }),
                        u("p", { children: ["На ", y.newIdentifier] }),
                        u("p", { children: ["Сработает ", Mn(y.appliesAt)] }),
                      ],
                    }),
                    u(B, {
                      size: "sm",
                      variant: "danger",
                      onClick: () => v(y),
                      children: "Отменить",
                    }),
                  ],
                },
                y.id
              )
            ),
            u("p", {
              className: S.hint,
              children:
                "Смена применится сама в указанный срок. Если её запросили не вы — отмените заявку и смените пароль.",
            }),
          ],
        }),
      c === "attachPhone" && u(st, { onClose: M }),
      c === "attachEmail" && u(zo, { onClose: M, onAttached: M }),
      c === "setPassword" &&
        s &&
        u(Fo, { onClose: M, onSaved: () => o({ ...s, hasPassword: true }) }),
      typeof c == "object" &&
        c &&
        s &&
        u(jo, { kind: c.change, methods: s, onClose: M }),
      p &&
        u(un, {
          title: "Отменить смену?",
          message: `${
            p.kind === "phone"
              ? "Номер останется прежним"
              : "Почта останется прежней"
          }. Новую смену можно будет начать через сутки.`,
          onDismiss: () => {
            if (!T) {
              v(null);
            }
          },
          actions: [
            { label: "Оставить", role: "cancel", onClick: () => v(null) },
            {
              label: "Отменить смену",
              role: "destructive",
              loading: T,
              onClick: () => {
                d(p);
              },
            },
          ],
        }),
      w &&
        u(un, {
          title: "Не удалось отменить",
          message: w,
          onDismiss: () => E(""),
          actions: [{ label: "Понятно", role: "cancel", onClick: () => E("") }],
        }),
    ],
  });
}
function Le(n, s, o, i) {
  const a = n % 10;
  const r = n % 100;
  return r >= 11 && r <= 19 ? i : a === 1 ? s : a >= 2 && a <= 4 ? o : i;
}
function Zo(n) {
  const s = new Date(n).getTime();
  if (Number.isNaN(s)) {
    return "—";
  }
  const o = Math.max(0, Math.floor((Date.now() - s) / 1000 /* 1e3 */));
  if (o < 60) {
    return "только что";
  }
  const i = Math.floor(o / 60);
  if (i < 60) {
    return `${i} ${Le(i, "минуту", "минуты", "минут")} назад`;
  }
  const a = Math.floor(i / 60);
  if (a < 24) {
    return `${a} ${Le(a, "час", "часа", "часов")} назад`;
  }
  const r = Math.floor(a / 24);
  return r < 30
    ? `${r} ${Le(r, "день", "дня", "дней")} назад`
    : new Date(n).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
}
function fn(n) {
  if (n.clientName === "ITD iOS") {
    return "Приложение ИТД · iOS";
  }
  if (n.clientName === "ITD Android") {
    return "Приложение ИТД · Android";
  }
  const s = n.clientName ?? "Неизвестное устройство";
  return n.osName
    ? `${s} · ${n.osName}${n.osVersion ? ` ${n.osVersion}` : ""}`
    : s;
}
function qo(n) {
  const s = [n.ipCity, n.ipCountry].filter(Boolean);
  return s.length ? s.join(", ") : "Местоположение неизвестно";
}
function Ko({ type }) {
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
function Yo({ onChangePassword }) {
  const [s, o] = d([]);
  const [i, a] = d(true);
  const [r, u] = d(null);
  const [c, g] = d(null);
  const [p, v] = d(false);

  const T = q(async () => {
    a(true);
    u(null);
    try {
      o(await Ue.list());
    } catch {
      u("Не удалось загрузить активные сессии");
    } finally {
      a(false);
    }
  }, []);

  h(() => {
    T();
  }, [T]);
  const [b, w] = d(null);

  const E = q(
    async (d) => {
      g(d.id);
      try {
        const { loggedOut } = await Ue.revoke(d.id, d.isCurrent);
        if (loggedOut) {
          await w.getState().logout();
          return;
        }

        o((y) => y.filter((N) => N.id !== d.id));

        j.success("Сессия завершена");
      } catch {
        T();
      } finally {
        g(null);
      }
    },
    [T]
  );

  const P = q(async () => {
    try {
      const d = await Ue.revokeOthers();
      v(false);

      j.success(
        d > 0 ? `Завершено сессий: ${d}` : "Других активных сессий нет"
      );

      await T();
    } catch {}
  }, [T]);

  const M = s.reduce((d, f) => (f.isCurrent ? d : d + 1), 0);

  return u(S_1, {
    children: [
      u("h2", { className: t.contentTitle, children: "Безопасность" }),
      u(Go, { onChangePassword: onChangePassword }),
      u("div", {
        className: t.section,
        children: [
          u("div", {
            className: t.settingText,
            style: { marginBottom: 12 },
            children: [
              u("span", {
                className: t.settingTitle,
                children: "Активные сессии",
              }),
              u("span", {
                className: t.settingDescription,
                children:
                  "Устройства, на которых сейчас выполнен вход в ваш аккаунт",
              }),
            ],
          }),
          i
            ? u(a5, {})
            : r
            ? u("div", { className: t.saveError, children: r })
            : s.length === 0
            ? u("div", {
                className: t.emptyBlocklist,
                children: "Активных сессий не найдено",
              })
            : u(S_1, {
                children: [
                  u("div", {
                    className: t.sessionsList,
                    children: s.map((d) =>
                      u(
                        "div",
                        {
                          className: t.sessionItem,
                          children: [
                            u("div", {
                              className: t.sessionIcon,
                              children: u(Ko, { type: d.deviceType }),
                            }),
                            u("div", {
                              className: t.sessionInfo,
                              children: [
                                u("div", {
                                  className: t.sessionDevice,
                                  children: fn(d),
                                }),
                                u("div", {
                                  className: t.sessionTime,
                                  children: [qo(d), " · ", Zo(d.lastUsedAt)],
                                }),
                              ],
                            }),
                            d.isCurrent
                              ? u("span", {
                                  className: t.sessionCurrentBadge,
                                  children: "Это устройство",
                                })
                              : u("button", {
                                  type: "button",
                                  className: t.sessionRemove,
                                  title: "Завершить сессию",
                                  "aria-label": "Завершить сессию",
                                  disabled: c === d.id,
                                  onClick: () => w(d),
                                  children:
                                    c === d.id
                                      ? u(at, { size: 16 })
                                      : u(ot, { size: 16 }),
                                }),
                          ],
                        },
                        d.id
                      )
                    ),
                  }),
                  M > 0 &&
                    u("button", {
                      type: "button",
                      className: t.logoutButton,
                      onClick: () => v(true),
                      children: "Завершить все другие сессии",
                    }),
                ],
              }),
        ],
      }),
      b &&
        u(Ve, {
          title: "Завершить сессию?",
          message: `Вы действительно хотите завершить сессию «${fn(
            b
          )}»? Устройство будет разлогинено.`,
          confirmText: "Завершить",
          danger: true,
          onConfirm: () => E(b),
          onClose: () => w(null),
        }),
      p &&
        u(Ve, {
          title: "Завершить все другие сессии?",
          message: `Вы действительно хотите завершить ${M} ${Le(
            M,
            "другую сессию",
            "другие сессии",
            "других сессий"
          )}? Устройства будут разлогинены.`,
          confirmText: `Завершить все (${M})`,
          danger: true,
          onConfirm: P,
          onClose: () => v(false),
        }),
    ],
  });
}

const Qo = au(({ onDirtyChange, onSavingChange }, i) => {
  const { settings, fetchSettings, updateSettings } = it();

  const [c, g] = d({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [p, v] = d(null);
  const [T, b] = d(false);
  const [w, E] = d(false);
  const [P, M] = d(false);

  h(() => {
    if (!P && !settings) {
      fetchSettings();
    }
  }, [P]);

  h(() => {
    if (settings && !P) {
      const N = {
        webEnabled: settings.webEnabled,
        soundEnabled: settings.soundEnabled,
        follows: settings.preferences.follows,
        reactions: settings.preferences.reactions,
        replies: settings.preferences.replies,
        mentions: settings.preferences.mentions,
        wallPosts: settings.preferences.wallPosts,
      };
      g(N);
      v(N);
      b(false);
      M(true);
    }
  }, [settings, P]);

  h(() => {
    onDirtyChange(T);
  }, [T]);

  h(() => {
    onSavingChange(w);
  }, [w]);

  const d = (N, R) => {
    const x = { ...c, [N]: R };
    g(x);

    if (p) {
      const F = Object.keys(x).some((h) => x[h] !== p[h]);
      b(F);
    }
  };

  const f = async () => {
    if (!(!T || w)) {
      E(true);
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

        v({ ...c });
        b(false);
        j.success("Настройки уведомлений сохранены");
      } catch (N) {
        console.error("Failed to save notification settings:", N);
        j.error("Не удалось сохранить настройки");
      } finally {
        E(false);
      }
    }
  };

  const y = () => {
    if (p) {
      g({ ...p });
      b(false);
    }
  };

  aw(i, () => ({
    save: f,
    discard: y,
  }));

  return updateSettings(S_1, {
    children: [
      updateSettings("h2", {
        className: t.contentTitle,
        children: "Уведомления",
      }),
      updateSettings("div", {
        className: t.section,
        children: [
          updateSettings("div", {
            className: t.sectionTitle,
            children: "Основные",
          }),
          updateSettings("div", {
            className: `${t.settingItem} ${t.clickable}`,
            onClick: () => d("webEnabled", !c.webEnabled),
            children: [
              updateSettings("div", {
                className: t.settingInfo,
                children: [
                  updateSettings("div", {
                    className: `${t.settingIcon} ${t.blue}`,
                    children: updateSettings(Cn, { size: 20 }),
                  }),
                  updateSettings("div", {
                    className: t.settingText,
                    children: [
                      updateSettings("span", {
                        className: t.settingTitle,
                        children: "Уведомления",
                      }),
                      updateSettings("span", {
                        className: t.settingDescription,
                        children: "Включение или отключение всех уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              updateSettings(me, {
                checked: c.webEnabled,
                onChange: (N) => d("webEnabled", N),
              }),
            ],
          }),
          updateSettings("div", {
            className: `${t.settingItem} ${t.clickable}`,
            onClick: () => d("soundEnabled", !c.soundEnabled),
            children: [
              updateSettings("div", {
                className: t.settingInfo,
                children: [
                  updateSettings("div", {
                    className: `${t.settingIcon} ${t.blue}`,
                    children: updateSettings(vt, { size: 20 }),
                  }),
                  updateSettings("div", {
                    className: t.settingText,
                    children: [
                      updateSettings("span", {
                        className: t.settingTitle,
                        children: "Уведомления со звуком",
                      }),
                      updateSettings("span", {
                        className: t.settingDescription,
                        children: "Воспроизводить звуки уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              updateSettings(me, {
                checked: c.soundEnabled,
                onChange: (N) => d("soundEnabled", N),
              }),
            ],
          }),
        ],
      }),
      updateSettings("div", {
        className: t.section,
        children: [
          updateSettings("div", {
            className: t.sectionTitle,
            children: "Пользователи",
          }),
          updateSettings("div", {
            className: `${t.settingItem} ${t.clickable}`,
            onClick: () => d("follows", !c.follows),
            children: [
              updateSettings("div", {
                className: t.settingInfo,
                children: [
                  updateSettings("div", {
                    className: `${t.settingIcon} ${t.blue}`,
                    children: updateSettings(bt, { size: 20 }),
                  }),
                  updateSettings("div", {
                    className: t.settingText,
                    children: [
                      updateSettings("span", {
                        className: t.settingTitle,
                        children: "Подписки",
                      }),
                      updateSettings("span", {
                        className: t.settingDescription,
                        children: "Уведомления о подписках и запросах в друзья",
                      }),
                    ],
                  }),
                ],
              }),
              updateSettings(me, {
                checked: c.follows,
                onChange: (N) => d("follows", N),
              }),
            ],
          }),
          updateSettings("div", {
            className: `${t.settingItem} ${t.clickable}`,
            onClick: () => d("wallPosts", !c.wallPosts),
            children: [
              updateSettings("div", {
                className: t.settingInfo,
                children: [
                  updateSettings("div", {
                    className: `${t.settingIcon} ${t.blue}`,
                    children: updateSettings(sn, { size: 20 }),
                  }),
                  updateSettings("div", {
                    className: t.settingText,
                    children: [
                      updateSettings("span", {
                        className: t.settingTitle,
                        children: "Посты на стене",
                      }),
                      updateSettings("span", {
                        className: t.settingDescription,
                        children: "Уведомления о новых постах на вашей стене",
                      }),
                    ],
                  }),
                ],
              }),
              updateSettings(me, {
                checked: c.wallPosts,
                onChange: (N) => d("wallPosts", N),
              }),
            ],
          }),
        ],
      }),
      updateSettings("div", {
        className: t.section,
        children: [
          updateSettings("div", {
            className: t.sectionTitle,
            children: "Посты",
          }),
          updateSettings("div", {
            className: `${t.settingItem} ${t.clickable}`,
            onClick: () => d("reactions", !c.reactions),
            children: [
              updateSettings("div", {
                className: t.settingInfo,
                children: [
                  updateSettings("div", {
                    className: `${t.settingIcon} ${t.red}`,
                    children: updateSettings(gt, { size: 20 }),
                  }),
                  updateSettings("div", {
                    className: t.settingText,
                    children: [
                      updateSettings("span", {
                        className: t.settingTitle,
                        children: "Лайки и реакции",
                      }),
                      updateSettings("span", {
                        className: t.settingDescription,
                        children:
                          "Уведомления о реакциях на ваши посты и комментарии",
                      }),
                    ],
                  }),
                ],
              }),
              updateSettings(me, {
                checked: c.reactions,
                onChange: (N) => d("reactions", N),
              }),
            ],
          }),
          updateSettings("div", {
            className: `${t.settingItem} ${t.clickable}`,
            onClick: () => d("replies", !c.replies),
            children: [
              updateSettings("div", {
                className: t.settingInfo,
                children: [
                  updateSettings("div", {
                    className: `${t.settingIcon} ${t.blue}`,
                    children: updateSettings(sn, { size: 20 }),
                  }),
                  updateSettings("div", {
                    className: t.settingText,
                    children: [
                      updateSettings("span", {
                        className: t.settingTitle,
                        children: "Комментарии и ответы",
                      }),
                      updateSettings("span", {
                        className: t.settingDescription,
                        children: "Уведомления о новых комментариях и ответах",
                      }),
                    ],
                  }),
                ],
              }),
              updateSettings(me, {
                checked: c.replies,
                onChange: (N) => d("replies", N),
              }),
            ],
          }),
          updateSettings("div", {
            className: `${t.settingItem} ${t.clickable}`,
            onClick: () => d("mentions", !c.mentions),
            children: [
              updateSettings("div", {
                className: t.settingInfo,
                children: [
                  updateSettings("div", {
                    className: `${t.settingIcon} ${t.purple}`,
                    children: updateSettings(ut, { size: 20 }),
                  }),
                  updateSettings("div", {
                    className: t.settingText,
                    children: [
                      updateSettings("span", {
                        className: t.settingTitle,
                        children: "Упоминания",
                      }),
                      updateSettings("span", {
                        className: t.settingDescription,
                        children: "Уведомления когда вас упоминают в постах",
                      }),
                    ],
                  }),
                ],
              }),
              updateSettings(me, {
                checked: c.mentions,
                onChange: (N) => d("mentions", N),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const Xo = au(({ onDirtyChange, onSavingChange }, i) => {
  const [a, r] = d({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [u, c] = d(null);
  const [g, p] = d(false);
  const [v, T] = d(false);
  const [b, w] = d(false);
  const [E, P] = d(false);
  const [M, d] = d([]);
  const [f, y] = d(null);
  const [N, R] = d(true);
  const [x, F] = d(false);
  const [h, A] = d(false);

  h(() => {
    m();

    if (!h) {
      H();
    }
  }, []);

  h(() => {
    onDirtyChange(g);
  }, [g]);

  h(() => {
    onSavingChange(v);
  }, [v]);

  const m = async () => {
    if (!E) {
      w(true);
    }

    try {
      const $ = await onSavingChange.getPrivacySettings();

      const B = {
        isPrivate: $.isPrivate ?? false,
        whoCanPostOnWall: $.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: $.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: $.showLastSeen ?? true,
      };

      r(B);
      c(B);
      p(false);
      P(true);
    } catch ($) {
      console.error("Failed to load privacy settings:", $);
    } finally {
      w(false);
    }
  };

  const H = async ($) => {
    if (!x) {
      F(true);
      try {
        const B = await tn.getBlockedUsers({ cursor: $, limit: 20 });

        d($ ? (ee) => [...ee, ...B.users] : B.users);

        y(B.nextCursor);
        R(B.hasMore);
        A(true);
      } catch (B) {
        console.error("Failed to load blocked users:", B);
      } finally {
        F(false);
      }
    }
  };

  const _ = async ($) => {
    try {
      await tn.unblockUser($);

      d((B) => B.filter((ee) => ee.id !== $));

      j.success("Пользователь разблокирован");
    } catch (B) {
      console.error("Failed to unblock user:", B);
      j.error("Не удалось разблокировать пользователя");
    }
  };

  const ae = () => {
    if (N && f) {
      H(f);
    }
  };

  const z = ($, B) => {
    const ee = { ...a, [$]: B };
    r(ee);

    if (u) {
      const ge = Object.keys(ee).some((ve) => ee[ve] !== u[ve]);
      p(ge);
    }
  };

  const de = async () => {
    if (!(!g || v)) {
      T(true);
      try {
        await onSavingChange.updatePrivacySettings({
          whoCanPostOnWall: a.whoCanPostOnWall,
          whoCanSeeMyPostReactions: a.whoCanSeeMyPostReactions,
          showLastSeen: a.showLastSeen,
        });

        c({ ...a });
        p(false);
        j.success("Настройки приватности сохранены");
      } catch ($) {
        console.error("Failed to save privacy settings:", $);
        j.error("Не удалось сохранить настройки");
      } finally {
        T(false);
      }
    }
  };

  const oe = () => {
    if (u) {
      r({ ...u });
      p(false);
    }
  };

  aw(i, () => ({
    save: de,
    discard: oe,
  }));

  return u(S_1, {
    children: [
      u("h2", { className: t.contentTitle, children: "Приватность" }),
      E &&
        u("div", {
          className: t.section,
          children: [
            u("div", {
              className: t.settingItem,
              children: [
                u("div", {
                  className: t.settingInfo,
                  children: u("div", {
                    className: t.settingText,
                    children: [
                      u("span", {
                        className: t.settingTitle,
                        children: "Стена",
                      }),
                      u("span", {
                        className: t.settingDescription,
                        children: "Кто может писать на вашей стене",
                      }),
                    ],
                  }),
                }),
                u(We, {
                  value: a.whoCanPostOnWall,
                  options: dn,
                  onChange: ($) => z("whoCanPostOnWall", $),
                }),
              ],
            }),
            u("div", {
              className: t.settingItem,
              children: [
                u("div", {
                  className: t.settingInfo,
                  children: u("div", {
                    className: t.settingText,
                    children: [
                      u("span", {
                        className: t.settingTitle,
                        children: "Лайки",
                      }),
                      u("span", {
                        className: t.settingDescription,
                        children: "Кто может видеть ваши лайкнутые посты",
                      }),
                    ],
                  }),
                }),
                u(We, {
                  value: a.whoCanSeeMyPostReactions,
                  options: dn,
                  onChange: ($) => z("whoCanSeeMyPostReactions", $),
                }),
              ],
            }),
            u("div", {
              className: `${t.settingItem} ${t.clickable}`,
              onClick: () => z("showLastSeen", !a.showLastSeen),
              children: [
                u("div", {
                  className: t.settingInfo,
                  children: u("div", {
                    className: t.settingText,
                    children: [
                      u("span", {
                        className: t.settingTitle,
                        children: "Онлайн-статус",
                      }),
                      u("span", {
                        className: t.settingDescription,
                        children: "Показывать время последнего визита",
                      }),
                    ],
                  }),
                }),
                u(me, {
                  checked: a.showLastSeen,
                  onChange: ($) => z("showLastSeen", $),
                }),
              ],
            }),
          ],
        }),
      u("div", {
        className: t.section,
        children: [
          u("div", {
            className: t.sectionTitle,
            children: "Чёрный список",
          }),
          x && !h
            ? u(a5, {})
            : h
            ? u(S_1, {
                children:
                  M.length === 0
                    ? u("div", {
                        className: t.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : u("div", {
                        className: t.blockedUsersList,
                        children: [
                          M.map(($) =>
                            u(
                              "div",
                              {
                                className: t.blockedUserItem,
                                children: [
                                  u(f, {
                                    src: $.avatar,
                                    alt: $.displayName,
                                    size: "sm",
                                  }),
                                  u("div", {
                                    className: t.blockedUserInfo,
                                    children: [
                                      u("span", {
                                        className: t.blockedUserName,
                                        children: $.displayName,
                                      }),
                                      $.username &&
                                        u("span", {
                                          className: t.blockedUserUsername,
                                          children: ["@", $.username],
                                        }),
                                    ],
                                  }),
                                  u(B, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => _($.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              $.id
                            )
                          ),
                          N &&
                            u(B, {
                              variant: "secondary",
                              onClick: ae,
                              disabled: x,
                              loading: x,
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

const ze = [
  { id: "account", icon: lt, label: "Аккаунт", color: "#3b82f6" },
  { id: "appearance", icon: rt, label: "Оформление", color: "#8b5cf6" },
  { id: "security", icon: kt, label: "Безопасность", color: "#ef4444" },
  { id: "privacy", icon: Ct, label: "Приватность", color: "#f59e0b" },
  { id: "notifications", icon: Cn, label: "Уведомления", color: "#ec4899" },
];

function li({ onClose }) {
  const s = C_1();
  const [o, i] = d("account");
  const [a, r] = d(false);
  const [u, c] = d(false);
  const [g, p] = d({});
  const [v, T] = d({});
  const b = A(null);
  const w = A(null);
  const E = A(null);
  const P = Object.values(g).some(Boolean);
  const M = Object.values(v).some(Boolean);

  const d = q(
    (m) => (H) => {
      p((_) => ({
        ..._,
        [m]: H,
      }));
    },
    []
  );

  const f = q(
    (m) => (H) => {
      T((_) => ({
        ..._,
        [m]: H,
      }));
    },
    []
  );

  const y = async () => {
    const m = [];

    if (g.account) {
      m.push(b.current?.save() ?? Promise.resolve());
    }

    if (g.notifications) {
      m.push(w.current?.save() ?? Promise.resolve());
    }

    if (g.privacy) {
      m.push(E.current?.save() ?? Promise.resolve());
    }

    await Promise.all(m);
  };

  const N = (m) => {
    if (m !== o) {
      p({});
      i(m);
    }
  };

  const R = (m) => {
    p({});
    i(m);
    r(true);
  };

  const x = () => {
    p({});
    r(false);
  };

  const F = () => {
    onClose();
  };

  const h = () => {
    switch (o) {
      case "account": {
        return u(ga, {
          ref: b,
          onDirtyChange: d("account"),
          onSavingChange: f("account"),
          onClose: onClose,
        });
      }
      case "payment": {
        return u(To, {});
      }
      case "appearance": {
        return u(Do, {});
      }
      case "security": {
        return u(Yo, { onChangePassword: () => c(true) });
      }
      case "notifications": {
        return u(Qo, {
          ref: w,
          onDirtyChange: d("notifications"),
          onSavingChange: f("notifications"),
        });
      }
      case "privacy": {
        return u(Xo, {
          ref: E,
          onDirtyChange: d("privacy"),
          onSavingChange: f("privacy"),
        });
      }
    }
  };

  if (u) {
    return u(jt, { onClose: onClose, onBack: () => c(false) });
  }
  const A = P
    ? u("div", {
        className: t.actionBar,
        children: [
          u(B, { variant: "secondary", onClick: F, children: "Отмена" }),
          u(B, {
            variant: "primary",
            onClick: y,
            disabled: M,
            loading: M,
            children: "Сохранить",
          }),
        ],
      })
    : null;
  return u(M, {
    onClose: F,
    frameless: true,
    size: "wide",
    className: t.modalContainer,
    children: u("div", {
      className: t.settingsModal,
      children: s
        ? u("div", {
            className: `${t.mobilePager} ${a ? t.detailOpen : ""}`,
            children: [
              u("div", {
                className: t.mobileScreen,
                children: [
                  u("div", {
                    className: t.mobileMenuTitle,
                    children: "Настройки",
                  }),
                  u("nav", {
                    className: t.mobileMenu,
                    children: ze.map((m) =>
                      u(
                        "button",
                        {
                          type: "button",
                          className: t.mobileMenuItem,
                          onClick: () => R(m.id),
                          children: [
                            u("span", {
                              className: t.mobileMenuIcon,
                              style: { background: m.color },
                              children: u(m.icon, { size: 16 }),
                            }),
                            u("span", { children: m.label }),
                            u("span", {
                              className: t.mobileMenuChevron,
                              children: u(ht, { size: 18 }),
                            }),
                          ],
                        },
                        m.id
                      )
                    ),
                  }),
                ],
              }),
              u("div", {
                className: t.mobileScreen,
                children: [
                  u("div", {
                    className: t.mobileHeader,
                    children: [
                      u("button", {
                        type: "button",
                        className: t.mobileBack,
                        onClick: x,
                        children: [
                          u(mt, { size: 22 }),
                          u("span", { children: "Настройки" }),
                        ],
                      }),
                      u("span", {
                        className: t.mobileHeaderTitle,
                        children: ze.find((m) => m.id === o)?.label,
                      }),
                    ],
                  }),
                  u("div", { className: t.content, children: h() }),
                  A,
                ],
              }),
            ],
          })
        : u(S_1, {
            children: [
              u("div", {
                className: t.sidebar,
                children: [
                  u("div", {
                    className: t.sidebarTitle,
                    children: "Настройки",
                  }),
                  u("nav", {
                    children: ze.map((m) =>
                      u(
                        "button",
                        {
                          type: "button",
                          className: `${t.navItem} ${
                            o === m.id ? t.active : ""
                          }`,
                          onClick: () => N(m.id),
                          children: [
                            u(m.icon, { size: 24 }),
                            u("span", { children: m.label }),
                          ],
                        },
                        m.id
                      )
                    ),
                  }),
                ],
              }),
              u("div", {
                className: t.contentWrapper,
                children: [
                  u("div", { className: t.content, children: h() }),
                  A,
                ],
              }),
            ],
          }),
    }),
  });
}
export {
  CancelSubscriptionModal as CancelSubscriptionModal,
  jt as ChangePasswordModal,
  Kt as DeleteAccountModal,
  Ea as EnableRenewalModal,
  li as SettingsModal,
  wo as SubscriptionModal,
  X as subscriptionApi,
  di as useSettingsStore,
};
