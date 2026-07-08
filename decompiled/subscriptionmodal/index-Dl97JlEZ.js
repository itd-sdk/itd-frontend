import {
  ah,
  ai,
  a,
  a5,
  a6,
  d as d_1,
  B,
  M,
  ae,
  x,
  ab,
  aj,
  o,
  E,
  ak,
  y as A_1,
  y,
  r,
  q as q_1,
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
  ao as en,
  I as nn,
  a1 as tn,
  ap as ze,
  C as Pe,
  aq as sn,
  v as an,
  R as qa,
} from "./index-BewGW5_v.js";

import { I as ln } from "./IconInfo-BF0u3h0A.js";
import { I as on } from "./IconNotificationMention-CROhlU2l.js";
import { I as cn } from "./IconChevronRight-DvXA9WYU.js";
import { I as rn } from "./IconChevronLeft-Cn8Oe6J-.js";
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
      t._sentryDebugIds[a] = "41529dcb-2953-4afa-8254-77b62ac225e9";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-41529dcb-2953-4afa-8254-77b62ac225e9";
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

const fe = (t) => {
  const a = t === "system" ? dn() : t;
  document.documentElement.setAttribute("data-theme", a);
};

const We = ah()(
  ai(
    (t) => ({
      theme: hn(),

      setTheme: (a) => {
        fe(a);
        t({ theme: a });
      },

      toggleTheme: () =>
        t((a) => {
          const i = a.theme === "light" ? "dark" : "light";
          fe(i);
          return { theme: i };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (t) => {
        if (t?.theme) {
          fe(t.theme);
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
        fe("system");
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

const xe = ({ size = 18 }) =>
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

const we = ({ size = 24 }) =>
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
    children: [
      a("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M10.84 10.355a6.684 6.684 0 0 1 7.462-1.374c.158.071.331-.078.268-.24a8.109 8.109 0 0 0-1.825-2.773 8.175 8.175 0 0 0-5.837-2.429A8.175 8.175 0 0 0 5.07 5.968a8.338 8.338 0 0 0-1.66 9.34c.162.394.297.74.297 1.047 0 .326-.135.72-.26 1.094-.23.663-.46 1.354.02 1.844.49.49 1.18.25 1.843.019.374-.135.758-.26 1.075-.26.307 0 .653.135 1.047.289.958.45 2.123.793 3.22.786.176 0 .24-.222.108-.339-2.656-2.359-2.297-7.039.08-9.433Z",
        clipRule: "evenodd",
      }),
      a("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M20.34 17.93c0-.154.064-.324.164-.576a5.052 5.052 0 0 0-1.002-5.662 4.959 4.959 0 0 0-3.537-1.469 4.958 4.958 0 0 0-3.537 1.47 5.034 5.034 0 0 0 0 7.095A5.011 5.011 0 0 0 18.06 19.8c.229-.093.426-.173.586-.173.178.001.397.077.61.15.406.14.866.299 1.196-.033.33-.332.174-.791.036-1.197-.073-.215-.149-.436-.149-.617Z",
        clipRule: "evenodd",
      }),
    ],
  });

const wn = ({ size = 24 }) =>
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

const yn = ({ size = 24 }) =>
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

const $e = ({ size = 24 }) =>
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

const Cn = "Cv1E";
const kn = "DfQ9";
const Le = { toggle: Cn, active: kn };
function X({ checked, onChange, disabled }) {
  const m = (s) => {
    s.stopPropagation();

    if (!disabled) {
      onChange(!checked);
    }
  };
  return onChange("button", {
    type: "button",
    className: `${Le.toggle} ${checked ? Le.active : ""}`,
    onClick: m,
    disabled: disabled,
    role: "switch",
    "aria-checked": checked,
  });
}

const z = {
  async getStatus() {
    return a5.get(a6.subscription.status);
  },
  async pay(t) {
    return a5.post(a6.subscription.pay, t ? { methodId: t } : undefined);
  },
  async setAutoRenewal(t) {
    return a5.post(a6.subscription.autoRenewal, { enabled: t });
  },
  async bindCard(t = "bank_card") {
    return a5.post(a6.subscription.bindCard, { type: t });
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

const ye = {
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

const In = "KWrP";
const Tn = "DGIA";
const Mn = "yHn7";
const Sn = "P8kh";
const Pn = "mosS";
const xn = "Irel";
const $n = "d4az";
const Ln = "z2nI";
const En = "awzv";
const Rn = "H3k2";

const Y = {
  inputWrapper: In,
  label: Tn,
  hint: Mn,
  input: Sn,
  error: Pn,
  small: xn,
  medium: $n,
  large: Ln,
  default: "D43u",
  outline: En,
  errorText: Rn,
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
  const p = (T) => {
    onChange?.(T.currentTarget.value);
  };
  return onChange("div", {
    className: Y.inputWrapper,
    children: [
      label &&
        onChange("label", {
          className: Y.label,
          children: [
            label,
            hint && onChange("span", { className: Y.hint, children: hint }),
          ],
        }),
      onChange("input", {
        className: `${Y.input} ${Y[h]} ${Y[v]} ${error ? Y.error : ""} ${
          className || ""
        }`,
        value: value,
        onInput: p,
        ...g,
      }),
      error && onChange("span", { className: Y.errorText, children: error }),
    ],
  });
}
const An = "CVWm";
const Dn = "gRTI";
const Bn = "pihg";
const Un = "Ueu5";
const On = "rmoq";
const Hn = "yfFj";
const _n = "BcQ5";

const _ = {
  form: An,
  field: Dn,
  label: Bn,
  hint: Un,
  fieldError: On,
  error: Hn,
  actions: _n,
};

function zn({ onClose, onBack }) {
  const [i, m] = d_1("");
  const [s, h] = d_1("");
  const [v, l] = d_1("");
  const [g, p] = d_1(false);
  const [T, C] = d_1(null);
  const [y, k] = d_1({});

  const M = async (P) => {
    P.preventDefault();
    C(null);
    k({});

    if (s !== v) {
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
      await ae.changePassword({ currentPassword: i, newPassword: s });
      await x.getState().logout();
      onClose();
    } catch (o) {
      if (ab(o)) {
        if (o.code === "CURRENT_PASSWORD_INCORRECT") {
          k({ currentPassword: "Неверный текущий пароль" });
        } else if (o.errors) {
          const f = {};
          for (const [b, N] of Object.entries(o.errors)) {
            f[b] = N[0] || "Ошибка валидации";
          }
          k(f);
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

  const S = i.length > 0 && s.length >= 10 && v.length > 0;
  return onBack(M, {
    onClose: onBack,
    title: "Смена пароля",
    children: onBack("form", {
      onSubmit: M,
      className: _.form,
      children: [
        onBack("div", {
          className: _.field,
          children: [
            onBack("label", { className: _.label, children: "Текущий пароль" }),
            onBack(ce, {
              type: "password",
              value: i,
              onChange: m,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            y.currentPassword &&
              onBack("span", {
                className: _.fieldError,
                children: y.currentPassword,
              }),
          ],
        }),
        onBack("div", {
          className: _.field,
          children: [
            onBack("label", { className: _.label, children: "Новый пароль" }),
            onBack(ce, {
              type: "password",
              value: s,
              onChange: h,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            onBack("span", {
              className: _.hint,
              children: "Минимум 10 символов, латиница, цифры и пунктуация",
            }),
            y.newPassword &&
              onBack("span", {
                className: _.fieldError,
                children: y.newPassword,
              }),
          ],
        }),
        onBack("div", {
          className: _.field,
          children: [
            onBack("label", {
              className: _.label,
              children: "Подтверждение пароля",
            }),
            onBack(ce, {
              type: "password",
              value: v,
              onChange: l,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            y.confirmPassword &&
              onBack("span", {
                className: _.fieldError,
                children: y.confirmPassword,
              }),
          ],
        }),
        T && onBack("div", { className: _.error, children: T }),
        onBack("div", {
          className: _.actions,
          children: [
            onBack(B, {
              type: "button",
              variant: "secondary",
              onClick: onBack,
              disabled: g,
              children: "Отмена",
            }),
            onBack(B, {
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
const Wn = "z8eN";
const Vn = "v2Hb";
const Fn = "wPVf";
const Zn = "aLQa";
const he = { content: Wn, title: Vn, subtitle: Fn, actions: Zn };
function jn({ onClose }) {
  const a = async () => {
    await x.getState().deleteAccount();
    onClose();
  };
  return a(M, {
    onClose: onClose,
    showHeader: false,
    children: a("div", {
      className: he.content,
      children: [
        a("h2", { className: he.title, children: "Удалить аккаунт?" }),
        a("p", {
          className: he.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        a("div", {
          className: he.actions,
          children: [
            a(B, {
              variant: "secondary",
              onClick: (i) => {
                i.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            a(B, {
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
const qn = "gZxx";
const Gn = "u9CC";
const Qn = "iR95";
const Kn = "ggKm";
const Yn = "MIv3";
const Xn = "KgVQ";
const Jn = "es6E";
const et = "GTJ1";
const nt = "jw9h";
const tt = "rzVi";
const st = "KhIa";
const at = "ABus";
const it = "TuT8";
const lt = "dLvv";
const ot = "ZGCq";
const ct = "ujfg";
const rt = "SMFN";
const dt = "yCju";
const ht = "PlGk";
const ut = "xQNo";
const mt = "mP0o";
const pt = "ef33";
const ft = "IzCz";
const gt = "U7pB";
const vt = "Ialq";
const bt = "fNxi";
const Nt = "kD89";
const wt = "Nds7";
const yt = "XX6U";
const Ct = "l29U";
const kt = "hUT5";
const It = "M8dU";
const Tt = "SOhz";
const Mt = "qTXC";
const St = "MIo9";
const Pt = "nAUt";
const xt = "GYwZ";
const $t = "atYO";
const Lt = "bXK9";
const Et = "xBOq";
const Rt = "kthj";
const At = "JC5w";
const Dt = "fcor";
const Bt = "nRIo";
const Ut = "Gfzp";
const Ot = "xarf";
const Ht = "qVEf";
const _t = "tijc";
const zt = "lfSK";
const Wt = "pYc1";
const Vt = "zYcQ";
const Ft = "I8oo";
const Zt = "cnA8";
const jt = "k6II";
const qt = "KEg9";
const Gt = "NcuH";
const Qt = "H8tC";
const Kt = "in3K";
const Yt = "z6nv";
const Xt = "bNr5";
const Jt = "wO52";
const es = "vsH0";
const ns = "HtE0";
const ts = "sea7";
const ss = "IiPL";
const as = "bFTQ";
const is = "vgxT";
const ls = "xGaf";
const os = "buU2";
const cs = "KfmF";
const rs = "xQeJ";
const ds = "PYCu";
const hs = "sron";
const us = "Lo8U";

const n = {
  modalContainer: qn,
  settingsModal: Gn,
  sidebar: Qn,
  sidebarTitle: Kn,
  navItem: Yn,
  active: Xn,
  contentWrapper: Jn,
  content: et,
  actionBar: nt,
  contentTitle: tt,
  subscriptionCancel: st,
  subscriptionRenew: at,
  paymentMethodsList: it,
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
  blue: It,
  red: Tt,
  purple: Mt,
  settingText: St,
  settingTitle: Pt,
  settingDescription: xt,
  settingControl: $t,
  sessionsList: Lt,
  sessionItem: Et,
  sessionIcon: Rt,
  sessionInfo: At,
  sessionDevice: Dt,
  sessionTime: Bt,
  sessionCurrentBadge: Ut,
  sessionRemove: Ot,
  avatarDisplay: Ht,
  pinGrid: _t,
  pinItem: zt,
  pinActive: Wt,
  pinImage: Vt,
  pinName: Ft,
  bioTextarea: Zt,
  fieldError: jt,
  saveError: qt,
  emptyBlocklist: Gt,
  blockedUsersList: Qt,
  blockedUserItem: Kt,
  blockedUserInfo: Yt,
  blockedUserName: Xt,
  blockedUserUsername: Jt,
  deleteAccountButton: es,
  logoutButton: ns,
  mobilePager: ts,
  detailOpen: ss,
  mobileScreen: as,
  mobileMenuTitle: is,
  mobileMenu: ls,
  mobileMenuItem: os,
  mobileMenuIcon: cs,
  mobileMenuChevron: rs,
  mobileHeader: ds,
  mobileBack: hs,
  mobileHeaderTitle: us,
};

const ms = aj(({ onDirtyChange, onSavingChange, onClose }, s) => {
  const h = x((w) => w.profile);

  const v = x((w) => w.logout);

  const { openModal, closeModal } = o();
  const p = E();
  const [T] = ak();
  const C = T?.url || window.location.pathname;
  const [y, k] = d_1(true);
  const [M, S] = d_1(false);
  const [P, o] = d_1(false);
  const [f, b] = d_1({});
  const [N, D] = d_1(null);
  const [$, V] = d_1(null);
  const [r, x] = d_1({ name: "", username: "", bio: "", avatar: "😀" });
  const [u, B] = d_1([]);
  const [U, ae] = d_1(null);
  const F = A_1(null);
  const [ve, be] = d_1(true);

  y(() => {
    if (h) {
      const w = {
        name: h.displayName,
        username: h.username || "",
        bio: h.bio || "",
        avatar: h.avatar,
      };
      x(w);
      V(w);
      k(false);
      const E = h.pin ?? null;
      ae(E);
      F.current = E;
    }
  }, [h]);

  y(() => {
    r.getMyPins()
      .then((w) => {
        B(w.pins);

        if (w.activePin && !F.current) {
          const E = w.pins.find((H) => H.slug === w.activePin);

          if (E) {
            ae(E);
            F.current = E;
          }
        }
      })
      .catch(() => B([]))
      .finally(() => be(false));
  }, []);

  y(() => {
    onDirtyChange(P);
  }, [P]);

  y(() => {
    onSavingChange(M);
  }, [M]);

  const I = q_1(
    (w, E) => {
      if (!$) {
        return false;
      }

      const H = Object.keys(w).some((ee) => w[ee] !== $[ee]);

      const j = (E?.slug ?? null) !== (F.current?.slug ?? null);
      return H || j;
    },
    [$]
  );

  const L = (w, E) => {
    if (f[w]) {
      b((H) => {
        const j = { ...H };
        delete j[w];
        return j;
      });
    }

    D(null);

    x((H) => {
      const j = { ...H, [w]: E };
      o(I(j, U));
      return j;
    });
  };

  const K = q_1(
    (w) => {
      const E = U?.slug === w.slug ? null : w;
      ae(E);
      o(I(r, E));
    },
    [U, r, I]
  );

  const Ne = async () => {
    if (!P || M) {
      return;
    }
    S(true);
    b({});
    D(null);
    const w = $?.username;
    const r_username = r.username;
    try {
      if ($ && Object.keys(r).some((le) => r[le] !== $[le])) {
        await r.updateProfile({
          displayName: r.name,
          username: r.username || undefined,
          bio: r.bio || null,
        });
      }

      if ((U?.slug ?? null) !== (F.current?.slug ?? null)) {
        if (U) {
          await r.setActivePin(U.slug);
        } else {
          await r.removeActivePin();
        }
      }

      V({ ...r });
      F.current = U;
      o(false);
      const ee = x.getState().profile;

      if (ee) {
        x.getState().setProfile({
          ...ee,
          displayName: r.name,
          username: r.username,
          bio: r.bio || null,
          pin: U,
        });
      }

      if (
        r_username &&
        r_username !== w &&
        (C === `/@${w}` || C === `/@${h?.id}`)
      ) {
        f(`/@${r_username}`);
      }
    } catch (H) {
      console.error("Failed to save profile:", H);

      if (ab(H)) {
        if (H.errors) {
          const j = {};
          for (const [ee, le] of Object.entries(H.errors)) {
            j[ee] = le[0] || "Ошибка валидации";
          }
          b(j);
        } else {
          D(H.message || "Не удалось сохранить изменения");
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
      ae(F.current);
      o(false);
    }
  };

  al(s, () => ({
    save: Ne,
    discard: de,
  }));

  return y
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
                    children: r.avatar,
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
                        value: r.name,
                        onChange: (w) => L("name", w),
                      }),
                      f.displayName &&
                        onDirtyChange("span", {
                          className: n.fieldError,
                          children: f.displayName,
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
                        value: r.username,
                        onChange: (w) => L("username", w),
                      }),
                      f.username &&
                        onDirtyChange("span", {
                          className: n.fieldError,
                          children: f.username,
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
                    value: r.bio,
                    onChange: (w) => L("bio", w.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  f.bio &&
                    onDirtyChange("span", {
                      className: n.fieldError,
                      children: f.bio,
                    }),
                ],
              }),
              !ve &&
                u.length > 0 &&
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
                      children: u.map((w) =>
                        onDirtyChange(
                          "button",
                          {
                            className: `${n.pinItem} ${
                              U?.slug === w.slug ? n.pinActive : ""
                            }`,
                            onClick: () => K(w),
                            disabled: M,
                            title: w.description || w.name,
                            type: "button",
                            children: [
                              onDirtyChange("img", {
                                src: w.url,
                                alt: w.name,
                                className: n.pinImage,
                              }),
                              onDirtyChange("span", {
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
              N &&
                onDirtyChange("div", { className: n.saveError, children: N }),
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
                openModal(onDirtyChange(jn, { onClose: closeModal })),
              children: "Удалить аккаунт",
            }),
          }),
        ],
      });
});

const ps = "SawJ";
const fs = "TrCL";
const gs = "zAgw";
const vs = "EjA1";
const ue = { content: ps, title: fs, subtitle: gs, actions: vs };

export function CancelSubscriptionModal({ expiresAt, onConfirm, onClose }) {
  const [m, s] = d_1(false);

  const h = new Date(expiresAt).toLocaleDateString("ru-RU", {
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
      className: ue.content,
      children: [
        onConfirm("h2", {
          className: ue.title,
          children: "Отключить автопродление?",
        }),
        onConfirm("p", {
          className: ue.subtitle,
          children: [
            "Подписка будет действовать до ",
            h,
            ". После этой даты она просто не продлится автоматически. Вы сможете включить автопродление обратно в любой момент.",
          ],
        }),
        onConfirm("div", {
          className: ue.actions,
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

const Ns = "eCuu";
const ws = "nPGK";
const ys = "SqZY";
const Cs = "S9Gg";
const me = { content: Ns, title: ws, subtitle: ys, actions: Cs };
function ke({
  title,
  message,
  confirmText = "Подтвердить",
  cancelText = "Отмена",
  danger = false,
  onConfirm,
  onClose,
}) {
  const [l, g] = d_1(false);

  const p = async () => {
    if (!l) {
      g(true);
      try {
        await onConfirm();
        onClose();
      } catch {
        g(false);
      }
    }
  };

  return message(M, {
    onClose: onClose,
    showHeader: false,
    children: message("div", {
      className: me.content,
      children: [
        message("h2", { className: me.title, children: title }),
        message("p", { className: me.subtitle, children: message }),
        message("div", {
          className: me.actions,
          children: [
            message(B, {
              variant: "secondary",
              onClick: (T) => {
                T.stopPropagation();
                onClose();
              },
              children: cancelText,
            }),
            message(B, {
              variant: danger ? "danger" : "primary",
              onClick: (T) => {
                T.stopPropagation();
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
const ks = "kCwa";
const Is = "oaCG";
const Ts = "O3AV";
const Ms = "K1bF";
const Ss = "QIdd";
const oe = {
  content: ks,
  title: Is,
  subtitle: Ts,
  disclaimer: Ms,
  actions: Ss,
};
function Ps({ onConfirm, onClose }) {
  const [i, m] = d_1(false);

  const s = async () => {
    if (!i) {
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
              onClick: (h) => {
                h.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            onClose(B, {
              variant: "primary",
              onClick: (h) => {
                h.stopPropagation();
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

const xs = [
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
const Ls = 157;

const Se = [
  null,
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

const Se_length = Se.length;
const q = 370 / 1080;
const Es = 605;
const Rs = 40;
const As = { s: 14, x: 623 };
const Ds = { s: 15, x: 629 };
function Bs(t, a) {
  const i = (t + a + 200) / q;
  const m = Se.slice();
  let s = 1785;
  let h = 218;
  let v = true;
  for (let l = 98; l < Se_length && ((h += 18), (s += h), !(s > i)); l++) {
    const g = v ? Ds : As;
    m[l] = [g.s, g.x, s];
    v = !v;
  }
  return m;
}
function Us() {
  const t = A_1(null);
  const a = A_1(null);
  const i = A_1({ f: 0, ts: 0, tl: Se.slice(), xOff: 0, yOff: 0 });

  y(() => {
    const a_current = a.current;
    const t_current = t.current;
    if (!a_current || !t_current) {
      return;
    }
    function h() {
      const { innerHeight, innerWidth } = window;

      const t_current_parentElement = t_current.parentElement;
      let M;
      let S;
      if (t_current_parentElement) {
        const f = t_current_parentElement.getBoundingClientRect();
        M = f.top;
        S = f.left + (f.width - 370) / 2;
      } else {
        M = (innerHeight - 900) / 2;
        S = (innerWidth - 370) / 2;
      }
      const P = innerWidth <= 1173;
      i.current.yOff = 357 * q - M + (P ? 60 : 0);
      const o = 260;
      i.current.xOff = Es * q - S - o;
      i.current.tl = Bs(innerHeight, i.current.yOff);
    }
    const v = setTimeout(h, 260);
    let l;
    const g = () => {
      clearTimeout(l);
      l = setTimeout(h, 150);
    };
    window.addEventListener("resize", g);
    let p;
    function T(C) {
      const i_current = i.current;
      if (C - i_current.ts >= Rs) {
        const k = i_current.tl[i_current.f];
        if (!k) {
          a_current.style.visibility = "hidden";
        } else {
          const [M, S, P] = k;
          const [o, , f, b] = xs[M];
          const N = (f * q + 0.5) | 0;
          const D = (b * q + 0.5) | 0;
          a_current.style.cssText = `visibility:visible;width:${N}px;height:${D}px;background-image:url(/assets/nuksta/nuksta-chechik-sprite.png);background-repeat:no-repeat;image-rendering:pixelated;will-change:transform;background-position:${-(
            (o * q + 0.5) |
            0
          )}px 0px;background-size:${($s * q + 0.5) | 0}px ${
            (Ls * q + 0.5) | 0
          }px;transform:translate(${(S * q - i_current.xOff + 0.5) | 0}px,${
            (P * q - i_current.yOff + 0.5) | 0
          }px)`;
        }
        i_current.f = (i_current.f + 1) % Se_length;
        i_current.ts = C;
      }
      p = requestAnimationFrame(T);
    }
    p = requestAnimationFrame(T);

    return () => {
      cancelAnimationFrame(p);
      clearTimeout(v);
      clearTimeout(l);
      window.removeEventListener("resize", g);
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
const Os = "IohQ";
const Hs = "sIXN";
const _s = "AS6i";
const zs = "VCIJ";
const Ws = "tzxk";
const Vs = "RIOv";
const Fs = "ebIU";
const Zs = "O1aU";
const js = "LgEU";
const qs = "MfLu";
const Gs = "JSmH";
const Qs = "KyxH";
const Ks = "RNVS";
const Ys = "qe8D";
const Xs = "BPcV";
const Js = "RlIC";
const ea = "iD4R";
const na = "IPjJ";
const ta = "L9IN";
const sa = "dFF7";
const aa = "yM0o";
const ia = "XfTf";
const la = "AdrC";
const oa = "cMH9";
const ca = "ps82";
const ra = "pOzf";
const da = "gGeC";
const ha = "qT7T";
const ua = "vQFp";
const ma = "fyiI";
const pa = "x54t";
const fa = "vSio";
const ga = "Yas3";
const va = "UAhp";

const d = {
  modal: Os,
  sub: Hs,
  top: _s,
  bottom: zs,
  title: Ws,
  section: Vs,
  profileSection: Fs,
  label: Zs,
  labelRow: js,
  dim: qs,
  row: Gs,
  icon: Qs,
  iconGradient: Ks,
  name: Ys,
  nameGradient: Xs,
  namePinBadge: Js,
  promoVideo: ea,
  features: na,
  featureContent: ta,
  featureTitle: sa,
  gradientText: aa,
  soon: ia,
  infoBtn: la,
  footer: oa,
  disclaimer: ca,
  methodSelectRow: ra,
  methodSelectLabel: da,
  methodSelect: ha,
  chargeInfo: ua,
  consentLink: ma,
  subscribeBtn: pa,
  btnLoading: fa,
  btnSpinner: ga,
  activeLabel: va,
};

function Ee({ text }) {
  return a(an_1, {
    text: text,
    multiline: true,
    children: a("span", {
      className: d.infoBtn,
      children: a(ln, { size: 14 }),
    }),
  });
}
const pe = "new";
function ba(t) {
  return t.type === "bank_card"
    ? `${t.cardBrand || "Карта"} •••• ${t.cardLast4 || ""}`.trim()
    : t.type === "sbp"
    ? "СБП"
    : t.type;
}
function Na({ isOpen, onClose }) {
  const i = k();
  const [m, s] = d_1(false);
  const [h, v] = d_1(false);
  const [l, g] = d_1([]);
  const [p, T] = d_1(pe);
  const [C, y] = d_1(199);

  y(() => {
    if (isOpen) {
      z.getStatus()
        .then((f) => {
          v(!!f.recurringEnabled);

          if (typeof f.price == "number") {
            y(f.price);
          }

          if (f.recurringEnabled) {
            z.getMethods()
              .then((b) => {
                g(b);
                const N = b.find((D) => D.isDefault) || b[0];
                T(N ? N.id : pe);
              })
              .catch(() => g([]));
          }
        })
        .catch(() => v(false));
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const k = i?.subscription?.isActive ?? false;
  const M = new Date();
  M.setMonth(M.getMonth() + 1);
  const S = M.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  const P = h && p !== pe;

  const o = async () => {
    if (m) {
      return;
    }
    s(true);

    if (P) {
      try {
        const b = await z.pay(p);
        if (b.error) {
          R.error(b.error);
          return;
        }
        R.success("Подписка оформлена!");
        onClose();

        x.getState()
          .fetchProfile()
          .catch(() => {});
      } catch (b) {
        R.error(
          b instanceof Error && b.message ? b.message : "Ошибка при оплате"
        );
      } finally {
        s(false);
      }
      return;
    }

    const f = window.open("about:blank", "_blank");
    try {
      const b = await z.pay();
      if (b.error) {
        f?.close();
        R.error(b.error);
        return;
      }

      if (b.confirmationUrl && f) {
        f.location.href = b.confirmationUrl;
      } else if (b.confirmationUrl) {
        window.location.href = b.confirmationUrl;
      }
    } catch (b) {
      f?.close();

      R.error(
        b instanceof Error && b.message
          ? b.message
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
      className: d.modal,
      children: [
        onClose(Us, {}),
        onClose("div", {
          className: d.sub,
          children: [
            onClose("div", {
              className: d.top,
              children: [
                onClose("div", { className: d.title, children: "ИТД НУКСТА" }),
                onClose("div", {
                  className: `${d.section} ${d.profileSection}`,
                  children: [
                    onClose("div", {
                      className: d.label,
                      children: "Ваш профиль с ИТД НУКСТА",
                    }),
                    onClose("div", {
                      className: d.row,
                      children: [
                        onClose(g, { src: i?.avatar || null, size: "sm" }),
                        onClose("div", {
                          children: [
                            onClose("div", {
                              className: d.name,
                              children: [
                                onClose("span", {
                                  className: d.nameGradient,
                                  children: i?.displayName,
                                }),
                                onClose("img", {
                                  src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                  alt: "НУКСТА",
                                  width: 24,
                                  height: 24,
                                  className: d.namePinBadge,
                                }),
                              ],
                            }),
                            onClose("div", {
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
              className: d.promoVideo,
            }),
            onClose("div", {
              className: d.bottom,
              children: [
                onClose("div", {
                  className: d.section,
                  children: [
                    onClose("div", {
                      className: d.labelRow,
                      children: [
                        onClose("span", {
                          className: d.label,
                          children: "Прикольные украшалки",
                        }),
                        onClose(Ee, {
                          text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                        }),
                      ],
                    }),
                    onClose("div", {
                      className: d.features,
                      children: [
                        onClose("div", {
                          className: d.row,
                          children: [
                            onClose("span", {
                              className: d.icon,
                              children: onClose("div", {
                                className: d.iconGradient,
                              }),
                            }),
                            onClose("div", {
                              children: onClose("div", {
                                className: `${d.featureTitle} ${d.gradientText}`,
                                children: "Уникальный цвет ника",
                              }),
                            }),
                          ],
                        }),
                        onClose("div", {
                          className: d.row,
                          children: [
                            onClose("span", {
                              className: d.icon,
                              children: onClose("img", {
                                src: "https://cdn.xn--d1ah4a.com/public/pins/nuksta.gif",
                                alt: "Пин",
                                width: 20,
                                height: 20,
                              }),
                            }),
                            onClose("div", {
                              children: onClose("div", {
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
                onClose("div", {
                  className: d.section,
                  children: [
                    onClose("div", {
                      className: d.labelRow,
                      children: [
                        onClose("span", {
                          className: d.label,
                          children: "Сможете с нами тестить новые штуки",
                        }),
                        onClose(Ee, {
                          text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                        }),
                      ],
                    }),
                    onClose("div", {
                      className: d.features,
                      children: [
                        onClose("div", {
                          className: d.row,
                          children: [
                            onClose("span", {
                              className: d.icon,
                              children: onClose(gn, { size: 20 }),
                            }),
                            onClose("div", {
                              className: d.featureContent,
                              children: onClose("div", {
                                className: d.featureTitle,
                                children: "Загрузка видео",
                              }),
                            }),
                          ],
                        }),
                        onClose("div", {
                          className: d.row,
                          children: [
                            onClose("span", {
                              className: d.icon,
                              children: onClose(Nn, { size: 20 }),
                            }),
                            onClose("div", {
                              className: d.featureContent,
                              children: onClose("div", {
                                className: d.featureTitle,
                                children: [
                                  "Сообщения ",
                                  onClose("span", {
                                    className: d.soon,
                                    children: "soon",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        onClose("div", {
                          className: d.row,
                          children: [
                            onClose("span", {
                              className: d.icon,
                              children: onClose(fn, { size: 20 }),
                            }),
                            onClose("div", {
                              className: d.featureContent,
                              children: onClose("div", {
                                className: d.featureTitle,
                                children: [
                                  "Музыка ",
                                  onClose("span", {
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
                onClose("div", {
                  className: d.footer,
                  children: [
                    !k &&
                      l.length > 0 &&
                      onClose("label", {
                        className: d.methodSelectRow,
                        children: [
                          onClose("span", {
                            className: d.methodSelectLabel,
                            children: "Сохранённый способ оплаты",
                          }),
                          onClose("select", {
                            className: d.methodSelect,
                            value: p,
                            onChange: (f) => T(f.target.value),
                            children: [
                              l.map((f) =>
                                onClose(
                                  "option",
                                  { value: f.id, children: ba(f) },
                                  f.id
                                )
                              ),
                              onClose("option", {
                                value: pe,
                                children: "Новый способ оплаты",
                              }),
                            ],
                          }),
                        ],
                      }),
                    !k &&
                      onClose("div", {
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
                      ? onClose("div", {
                          className: d.activeLabel,
                          children: "Подписка активна",
                        })
                      : onClose("button", {
                          type: "button",
                          className: d.subscribeBtn,
                          onClick: o,
                          disabled: m,
                          children: m
                            ? onClose("span", {
                                className: d.btnLoading,
                                children: [
                                  onClose(a4, {
                                    size: "xs",
                                    className: d.btnSpinner,
                                  }),
                                  "Оплачиваем…",
                                ],
                              })
                            : `Оплатить ${C}₽ на месяц`,
                        }),
                    !k &&
                      onClose("div", {
                        className: d.disclaimer,
                        children: [
                          "Нажимая кнопку, вы принимаете ",
                          onClose("a", {
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

const wa = {
  yoo_money: "ЮMoney",
  sberbank: "SberPay",
  tinkoff_bank: "T-Pay",
  sbp: "СБП",
  mobile_balance: "Баланс телефона",
  sber_loan: "Кредит от СберБанка",
  sber_bnpl: "Плати частями",
  cash: "Наличные",
};

const ya = {
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

function Re(t) {
  if (t.type === "bank_card") {
    return `${t.cardBrand || "Карта"} •••• ${t.cardLast4 || ""}`.trim();
  }

  if (!wa[t.type]) {
    return t.type;
  }
}
function Ca(t) {
  return ya[t.type] || "";
}
const Ae = 5;
function ka() {
  const t = x((r) => r.profile);

  const [a, i] = d_1(false);
  const [m, s] = d_1(false);
  const [h, v] = d_1(false);
  const [l, g] = d_1([]);
  const [p, T] = d_1(true);
  const [C, y] = d_1(false);
  const [k, M] = d_1(false);
  const [S, P] = d_1(null);
  const [o, f] = d_1(false);

  y(() => {
    z.getStatus()
      .then((r) => f(!!r.recurringEnabled))
      .catch(() => f(false));
  }, []);

  y(() => {
    if (o) {
      z.getMethods()
        .then(g)
        .catch(() => g([]))
        .finally(() => T(false));
    }
  }, [o]);

  const b = () => {
    z.getMethods()
      .then(g)
      .catch(() => {});
  };

  const N = async (r) => {
    try {
      await z.setDefaultMethod(r);

      g((x) =>
        x.map((u) => ({
          ...u,
          isDefault: u.id === r,
        }))
      );
    } catch {
      R.error("Не удалось изменить основной способ оплаты");
    }
  };

  const D = async (r) => {
    try {
      const x = await z.deleteMethod(r.id);

      g((u) => u.filter((B) => B.id !== r.id));

      if (x.autoRenewalDisabled && t?.subscription) {
        x.getState().setProfile({
          ...t,
          subscription: { ...t.subscription, autoRenewal: false },
        });
      }

      b();
    } catch {
      R.error("Не удалось отвязать карту");
    }
  };

  const $ = async (r) => {
    if (C) {
      return;
    }
    y(true);
    M(false);
    const x = window.open("about:blank", "_blank");
    try {
      const u = await z.bindCard(r);
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
      y(false);
    }
  };

  const V = [...l].sort((r, x) =>
    r.isDefault !== x.isDefault
      ? r.isDefault
        ? -1
        : 1
      : (x.createdAt || "").localeCompare(r.createdAt || "")
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
                                const r = new Date(t.subscription.expiresAt);
                                const x = new Date();

                                const u = Math.max(
                                  0,
                                  Math.ceil(
                                    (r.getTime() - x.getTime()) /
                                      (1000 /* 1e3 */ * 60 * 60 * 24)
                                  )
                                );

                                return `до ${r.toLocaleDateString("ru-RU", {
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
                    ? a("button", {
                        type: "button",
                        className: n.subscriptionCancel,
                        onClick: () => i(true),
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
                    onClick: () => v(true),
                    children: "Оформить",
                  }),
                ],
              }),
          o &&
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
                          V.map((r) => {
                            const x = r.type === "bank_card" ? we : $e;
                            return a(
                              "div",
                              {
                                className: n.paymentMethodRow,
                                children: [
                                  a("div", {
                                    className: n.paymentMethodIcon,
                                    children: a(x, { size: 18 }),
                                  }),
                                  a("div", {
                                    className: n.paymentMethodInfo,
                                    children: [
                                      a("span", {
                                        className: n.paymentMethodTitle,
                                        children: [
                                          Re(r),
                                          r.isDefault &&
                                            l.length > 1 &&
                                            a("span", {
                                              className: n.paymentMethodBadge,
                                              children: "основной",
                                            }),
                                        ],
                                      }),
                                      a("span", {
                                        className: n.paymentMethodSubtitle,
                                        children: Ca(r),
                                      }),
                                    ],
                                  }),
                                  a("div", {
                                    className: n.paymentMethodActions,
                                    children: [
                                      !r.isDefault &&
                                        a("button", {
                                          type: "button",
                                          className: n.paymentMethodBtn,
                                          onClick: () => N(r.id),
                                          children: "Сделать основным",
                                        }),
                                      a("button", {
                                        type: "button",
                                        className: n.paymentMethodBtnDanger,
                                        onClick: () => P(r),
                                        children: "Отвязать",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              r.id
                            );
                          }),
                          l.length === 0 &&
                            a("div", {
                              className: n.paymentMethodsEmpty,
                              children: [
                                a(we, { size: 18 }),
                                a("span", {
                                  children: "Нет привязанных методов оплаты",
                                }),
                              ],
                            }),
                          l.length < Ae
                            ? k
                              ? a(m, {
                                  children: [
                                    a("button", {
                                      type: "button",
                                      className: n.paymentMethodAdd,
                                      onClick: () => $("bank_card"),
                                      disabled: C,
                                      children: [
                                        a("span", {
                                          className: n.paymentMethodIcon,
                                          children: a(we, { size: 16 }),
                                        }),
                                        "Банковская карта",
                                      ],
                                    }),
                                    a("button", {
                                      type: "button",
                                      className: n.paymentMethodAdd,
                                      onClick: () => $("sbp"),
                                      disabled: C,
                                      children: [
                                        a("span", {
                                          className: n.paymentMethodIcon,
                                          children: a($e, { size: 16 }),
                                        }),
                                        "СБП",
                                      ],
                                    }),
                                  ],
                                })
                              : a("button", {
                                  type: "button",
                                  className: n.paymentMethodAdd,
                                  onClick: () => M(true),
                                  disabled: C,
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
                                    Ae,
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
        a(CancelSubscriptionModal, {
          expiresAt: t.subscription.expiresAt,
          onConfirm: async () => {
            const r = await z.setAutoRenewal(false);
            x.getState().setProfile({
              ...t,
              subscription: { ...t.subscription, autoRenewal: r.autoRenewal },
            });
          },
          onClose: () => i(false),
        }),
      m &&
        a(Ps, {
          onConfirm: async () => {
            const r = await z.setAutoRenewal(true);
            x.getState().setProfile({
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
      S &&
        a(ke, {
          title: "Отвязать способ оплаты?",
          message: `${Re(S)} будет отвязан. Это действие нельзя отменить.`,
          confirmText: "Отвязать",
          danger: true,
          onConfirm: () => D(S),
          onClose: () => P(null),
        }),
      a(Na, {
        isOpen: h,
        onClose: () => {
          v(false);

          z.getMethods()
            .then(g)
            .catch(() => {});
        },
      }),
    ],
  });
}
const Ia = "HL2v";
const Ta = "jLet";
const Ma = "tAyL";
const Sa = "VEWp";
const Pa = "PUld";
const xa = "yZum";
const $a = "UCGc";

const ne = {
  selectWrapper: Ia,
  select: Ta,
  open: Ma,
  selectedValue: Sa,
  dropdown: Pa,
  option: xa,
  selected: $a,
};

function Ie({ value, options, onChange, disabled }) {
  const [s, h] = d_1(false);
  const v = A_1(null);

  const l = options.find((p) => p.value === value);

  y(() => {
    const p = (T) => {
      if (v.current && !v.current.contains(T.target)) {
        h(false);
      }
    };

    if (s) {
      document.addEventListener("mousedown", p);
    }

    return () => {
      document.removeEventListener("mousedown", p);
    };
  }, [s]);
  const g = (p) => {
    onChange(p);
    h(false);
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
            h(!s);
          }
        },
        disabled: disabled,
        children: [
          options("span", { className: ne.selectedValue, children: l?.label }),
          options(vn, { size: 16 }),
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

const De = [
  { value: "everyone", label: "Все" },
  { value: "followers", label: "Подписчики" },
  { value: "mutual", label: "Взаимные подписчики" },
  { value: "nobody", label: "Никто" },
];

const La = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

function Ea() {
  const { theme, setTheme } = We();
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
            setTheme(Ie, {
              value: theme,
              options: La,
              onChange: (i) => setTheme(i),
            }),
          ],
        }),
      }),
    ],
  });
}
function ge(t, a, i, m) {
  const s = t % 10;
  const h = t % 100;
  return h >= 11 && h <= 19 ? m : s === 1 ? a : s >= 2 && s <= 4 ? i : m;
}
function Ra(t) {
  const a = new Date(t).getTime();
  if (Number.isNaN(a)) {
    return "—";
  }
  const i = Math.max(0, Math.floor((Date.now() - a) / 1000 /* 1e3 */));
  if (i < 60) {
    return "только что";
  }
  const m = Math.floor(i / 60);
  if (m < 60) {
    return `${m} ${ge(m, "минуту", "минуты", "минут")} назад`;
  }
  const s = Math.floor(m / 60);
  if (s < 24) {
    return `${s} ${ge(s, "час", "часа", "часов")} назад`;
  }
  const h = Math.floor(s / 24);
  return h < 30
    ? `${h} ${ge(h, "день", "дня", "дней")} назад`
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
function Aa(t) {
  const a = [t.ipCity, t.ipCountry].filter(Boolean);
  return a.length ? a.join(", ") : "Местоположение неизвестно";
}
function Da({ type }) {
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
function Ba({ onChangePassword }) {
  const [a, i] = d_1([]);
  const [m, s] = d_1(true);
  const [h, v] = d_1(null);
  const [l, g] = d_1(null);
  const [p, T] = d_1(false);

  const C = q_1(async () => {
    s(true);
    v(null);
    try {
      i(await ye.list());
    } catch {
      v("Не удалось загрузить активные сессии");
    } finally {
      s(false);
    }
  }, []);

  y(() => {
    C();
  }, [C]);
  const [y, k] = d_1(null);

  const M = q_1(
    async (o) => {
      g(o.id);
      try {
        const { loggedOut } = await ye.revoke(o.id, o.isCurrent);
        if (loggedOut) {
          await x.getState().logout();
          return;
        }

        i((b) => b.filter((N) => N.id !== o.id));

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
      const o = await ye.revokeOthers();
      T(false);

      R.success(
        o > 0 ? `Завершено сессий: ${o}` : "Других активных сессий нет"
      );

      await C();
    } catch {}
  }, [C]);

  const P = a.reduce((o, f) => (f.isCurrent ? o : o + 1), 0);

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
            : h
            ? a("div", { className: n.saveError, children: h })
            : a.length === 0
            ? a("div", {
                className: n.emptyBlocklist,
                children: "Активных сессий не найдено",
              })
            : a(m, {
                children: [
                  a("div", {
                    className: n.sessionsList,
                    children: a.map((o) =>
                      a(
                        "div",
                        {
                          className: n.sessionItem,
                          children: [
                            a("div", {
                              className: n.sessionIcon,
                              children: a(Da, { type: o.deviceType }),
                            }),
                            a("div", {
                              className: n.sessionInfo,
                              children: [
                                a("div", {
                                  className: n.sessionDevice,
                                  children: Be(o),
                                }),
                                a("div", {
                                  className: n.sessionTime,
                                  children: [Aa(o), " · ", Ra(o.lastUsedAt)],
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
                                  disabled: l === o.id,
                                  onClick: () => k(o),
                                  children:
                                    l === o.id
                                      ? a(en, { size: 16 })
                                      : a(nn, { size: 16 }),
                                }),
                          ],
                        },
                        o.id
                      )
                    ),
                  }),
                  P > 0 &&
                    a("button", {
                      type: "button",
                      className: n.logoutButton,
                      onClick: () => T(true),
                      children: "Завершить все другие сессии",
                    }),
                ],
              }),
        ],
      }),
      y &&
        a(ke, {
          title: "Завершить сессию?",
          message: `Вы действительно хотите завершить сессию «${Be(
            y
          )}»? Устройство будет разлогинено.`,
          confirmText: "Завершить",
          danger: true,
          onConfirm: () => M(y),
          onClose: () => k(null),
        }),
      p &&
        a(ke, {
          title: "Завершить все другие сессии?",
          message: `Вы действительно хотите завершить ${P} ${ge(
            P,
            "другую сессию",
            "другие сессии",
            "других сессий"
          )}? Устройства будут разлогинены.`,
          confirmText: `Завершить все (${P})`,
          danger: true,
          onConfirm: S,
          onClose: () => T(false),
        }),
    ],
  });
}

const Ua = aj(({ onDirtyChange, onSavingChange }, m) => {
  const { settings, fetchSettings, updateSettings } = tn();

  const [l, g] = d_1({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [p, T] = d_1(null);
  const [C, y] = d_1(false);
  const [k, M] = d_1(false);
  const [S, P] = d_1(false);

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
      g(N);
      T(N);
      y(false);
      P(true);
    }
  }, [settings, S]);

  y(() => {
    onDirtyChange(C);
  }, [C]);

  y(() => {
    onSavingChange(k);
  }, [k]);

  const o = (N, D) => {
    const $ = { ...l, [N]: D };
    g($);

    if (p) {
      const V = Object.keys($).some((r) => $[r] !== p[r]);
      y(V);
    }
  };

  const f = async () => {
    if (!(!C || k)) {
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

        T({ ...l });
        y(false);
        R.success("Настройки уведомлений сохранены");
      } catch (N) {
        console.error("Failed to save notification settings:", N);
        R.error("Не удалось сохранить настройки");
      } finally {
        M(false);
      }
    }
  };

  const b = () => {
    if (p) {
      g({ ...p });
      y(false);
    }
  };

  al(m, () => ({
    save: f,
    discard: b,
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
            onClick: () => o("webEnabled", !l.webEnabled),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onDirtyChange(ze, { size: 20 }),
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
              onDirtyChange(X, {
                checked: l.webEnabled,
                onChange: (N) => o("webEnabled", N),
              }),
            ],
          }),
          onDirtyChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("soundEnabled", !l.soundEnabled),
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
              onDirtyChange(X, {
                checked: l.soundEnabled,
                onChange: (N) => o("soundEnabled", N),
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
            onClick: () => o("follows", !l.follows),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onDirtyChange(pn, { size: 20 }),
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
              onDirtyChange(X, {
                checked: l.follows,
                onChange: (N) => o("follows", N),
              }),
            ],
          }),
          onDirtyChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("wallPosts", !l.wallPosts),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onDirtyChange(xe, { size: 20 }),
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
              onDirtyChange(X, {
                checked: l.wallPosts,
                onChange: (N) => o("wallPosts", N),
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
            onClick: () => o("reactions", !l.reactions),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.red}`,
                    children: onDirtyChange(un, { size: 20 }),
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
              onDirtyChange(X, {
                checked: l.reactions,
                onChange: (N) => o("reactions", N),
              }),
            ],
          }),
          onDirtyChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("replies", !l.replies),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: onDirtyChange(xe, { size: 20 }),
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
              onDirtyChange(X, {
                checked: l.replies,
                onChange: (N) => o("replies", N),
              }),
            ],
          }),
          onDirtyChange("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("mentions", !l.mentions),
            children: [
              onDirtyChange("div", {
                className: n.settingInfo,
                children: [
                  onDirtyChange("div", {
                    className: `${n.settingIcon} ${n.purple}`,
                    children: onDirtyChange(on, { size: 20 }),
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
              onDirtyChange(X, {
                checked: l.mentions,
                onChange: (N) => o("mentions", N),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const Oa = aj(({ onDirtyChange, onSavingChange }, m) => {
  const [s, h] = d_1({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [v, l] = d_1(null);
  const [g, p] = d_1(false);
  const [T, C] = d_1(false);
  const [y, k] = d_1(false);
  const [M, S] = d_1(false);
  const [P, o] = d_1([]);
  const [f, b] = d_1(null);
  const [N, D] = d_1(true);
  const [$, V] = d_1(false);
  const [r, x] = d_1(false);

  y(() => {
    u();

    if (!r) {
      B();
    }
  }, []);

  y(() => {
    onDirtyChange(g);
  }, [g]);

  y(() => {
    onSavingChange(T);
  }, [T]);

  const u = async () => {
    if (!M) {
      k(true);
    }

    try {
      const I = await r.getPrivacySettings();

      const L = {
        isPrivate: I.isPrivate ?? false,
        whoCanPostOnWall: I.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: I.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: I.showLastSeen ?? true,
      };

      h(L);
      l(L);
      p(false);
      S(true);
    } catch (I) {
      console.error("Failed to load privacy settings:", I);
    } finally {
      k(false);
    }
  };

  const B = async (I) => {
    if (!$) {
      V(true);
      try {
        const L = await Pe.getBlockedUsers({ cursor: I, limit: 20 });

        o(I ? (K) => [...K, ...L.users] : L.users);

        b(L.nextCursor);
        D(L.hasMore);
        x(true);
      } catch (L) {
        console.error("Failed to load blocked users:", L);
      } finally {
        V(false);
      }
    }
  };

  const U = async (I) => {
    try {
      await Pe.unblockUser(I);

      o((L) => L.filter((K) => K.id !== I));

      R.success("Пользователь разблокирован");
    } catch (L) {
      console.error("Failed to unblock user:", L);
      R.error("Не удалось разблокировать пользователя");
    }
  };

  const ae = () => {
    if (N && f) {
      B(f);
    }
  };

  const F = (I, L) => {
    const K = { ...s, [I]: L };
    h(K);

    if (v) {
      const Ne = Object.keys(K).some((de) => K[de] !== v[de]);
      p(Ne);
    }
  };

  const ve = async () => {
    if (!(!g || T)) {
      C(true);
      try {
        await r.updatePrivacySettings({
          whoCanPostOnWall: s.whoCanPostOnWall,
          whoCanSeeMyPostReactions: s.whoCanSeeMyPostReactions,
          showLastSeen: s.showLastSeen,
        });

        l({ ...s });
        p(false);
        R.success("Настройки приватности сохранены");
      } catch (I) {
        console.error("Failed to save privacy settings:", I);
        R.error("Не удалось сохранить настройки");
      } finally {
        C(false);
      }
    }
  };

  const be = () => {
    if (v) {
      h({ ...v });
      p(false);
    }
  };

  al(m, () => ({
    save: ve,
    discard: be,
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
                onDirtyChange(Ie, {
                  value: s.whoCanPostOnWall,
                  options: De,
                  onChange: (I) => F("whoCanPostOnWall", I),
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
                onDirtyChange(Ie, {
                  value: s.whoCanSeeMyPostReactions,
                  options: De,
                  onChange: (I) => F("whoCanSeeMyPostReactions", I),
                }),
              ],
            }),
            onDirtyChange("div", {
              className: `${n.settingItem} ${n.clickable}`,
              onClick: () => F("showLastSeen", !s.showLastSeen),
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
                onDirtyChange(X, {
                  checked: s.showLastSeen,
                  onChange: (I) => F("showLastSeen", I),
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
          $ && !r
            ? onDirtyChange(a4, {})
            : r
            ? onDirtyChange(m, {
                children:
                  P.length === 0
                    ? onDirtyChange("div", {
                        className: n.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : onDirtyChange("div", {
                        className: n.blockedUsersList,
                        children: [
                          P.map((I) =>
                            onDirtyChange(
                              "div",
                              {
                                className: n.blockedUserItem,
                                children: [
                                  onDirtyChange(g, {
                                    src: I.avatar,
                                    alt: I.displayName,
                                    size: "sm",
                                  }),
                                  onDirtyChange("div", {
                                    className: n.blockedUserInfo,
                                    children: [
                                      onDirtyChange("span", {
                                        className: n.blockedUserName,
                                        children: I.displayName,
                                      }),
                                      I.username &&
                                        onDirtyChange("span", {
                                          className: n.blockedUserUsername,
                                          children: ["@", I.username],
                                        }),
                                    ],
                                  }),
                                  onDirtyChange(B, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => U(I.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              I.id
                            )
                          ),
                          N &&
                            onDirtyChange(B, {
                              variant: "secondary",
                              onClick: ae,
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

const Ce = [
  { id: "account", icon: sn, label: "Аккаунт", color: "#3b82f6" },
  { id: "payment", icon: wn, label: "Оплата", color: "#34c759" },
  { id: "appearance", icon: an, label: "Оформление", color: "#8b5cf6" },
  { id: "security", icon: yn, label: "Безопасность", color: "#ef4444" },
  { id: "privacy", icon: bn, label: "Приватность", color: "#f59e0b" },
  { id: "notifications", icon: ze, label: "Уведомления", color: "#ec4899" },
];

function Fa({ onClose }) {
  const a = E();
  const [i, m] = d_1("account");
  const [s, h] = d_1(false);
  const [v, l] = d_1(false);
  const [g, p] = d_1({});
  const [T, C] = d_1({});
  const y = A_1(null);
  const k = A_1(null);
  const M = A_1(null);
  const S = Object.values(g).some(Boolean);
  const P = Object.values(T).some(Boolean);

  const o = q_1(
    (u) => (B) => {
      p((U) => ({
        ...U,
        [u]: B,
      }));
    },
    []
  );

  const f = q_1(
    (u) => (B) => {
      C((U) => ({
        ...U,
        [u]: B,
      }));
    },
    []
  );

  const b = async () => {
    const u = [];

    if (g.account) {
      u.push(y.current?.save() ?? Promise.resolve());
    }

    if (g.notifications) {
      u.push(k.current?.save() ?? Promise.resolve());
    }

    if (g.privacy) {
      u.push(M.current?.save() ?? Promise.resolve());
    }

    await Promise.all(u);
  };

  const N = (u) => {
    if (u !== i) {
      p({});
      m(u);
    }
  };

  const D = (u) => {
    p({});
    m(u);
    h(true);
  };

  const $ = () => {
    p({});
    h(false);
  };

  const V = () => {
    onClose();
  };

  const r = () => {
    switch (i) {
      case "account": {
        return a(ms, {
          ref: y,
          onDirtyChange: o("account"),
          onSavingChange: f("account"),
          onClose: onClose,
        });
      }
      case "payment": {
        return a(ka, {});
      }
      case "appearance": {
        return a(Ea, {});
      }
      case "security": {
        return a(Ba, { onChangePassword: () => l(true) });
      }
      case "notifications": {
        return a(Ua, {
          ref: k,
          onDirtyChange: o("notifications"),
          onSavingChange: f("notifications"),
        });
      }
      case "privacy": {
        return a(Oa, {
          ref: M,
          onDirtyChange: o("privacy"),
          onSavingChange: f("privacy"),
        });
      }
    }
  };

  if (v) {
    return a(zn, { onClose: onClose, onBack: () => l(false) });
  }
  const x = S
    ? a("div", {
        className: n.actionBar,
        children: [
          a(B, { variant: "secondary", onClick: V, children: "Отмена" }),
          a(B, {
            variant: "primary",
            onClick: b,
            disabled: P,
            loading: P,
            children: "Сохранить",
          }),
        ],
      })
    : null;
  return a(M, {
    onClose: V,
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
                    children: Ce.map((u) =>
                      a(
                        "button",
                        {
                          type: "button",
                          className: n.mobileMenuItem,
                          onClick: () => D(u.id),
                          children: [
                            a("span", {
                              className: n.mobileMenuIcon,
                              style: { background: u.color },
                              children: a(u.icon, { size: 16 }),
                            }),
                            a("span", { children: u.label }),
                            a("span", {
                              className: n.mobileMenuChevron,
                              children: a(cn, { size: 18 }),
                            }),
                          ],
                        },
                        u.id
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
                        onClick: $,
                        children: [
                          a(rn, { size: 22 }),
                          a("span", { children: "Настройки" }),
                        ],
                      }),
                      a("span", {
                        className: n.mobileHeaderTitle,
                        children: Ce.find((u) => u.id === i)?.label,
                      }),
                    ],
                  }),
                  a("div", { className: n.content, children: r() }),
                  x,
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
                    children: Ce.map((u) =>
                      a(
                        "button",
                        {
                          type: "button",
                          className: `${n.navItem} ${
                            i === u.id ? n.active : ""
                          }`,
                          onClick: () => N(u.id),
                          children: [
                            a(u.icon, { size: 24 }),
                            a("span", { children: u.label }),
                          ],
                        },
                        u.id
                      )
                    ),
                  }),
                ],
              }),
              a("div", {
                className: n.contentWrapper,
                children: [
                  a("div", { className: n.content, children: r() }),
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
  jn as DeleteAccountModal,
  Ps as EnableRenewalModal,
  Fa as SettingsModal,
  Na as SubscriptionModal,
  z as subscriptionApi,
  qa as useSettingsStore,
};
