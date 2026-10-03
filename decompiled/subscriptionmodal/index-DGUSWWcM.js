import {
  aH,
  aI,
  u as u_1,
  ao,
  ap,
  d,
  h as B_1,
  M,
  aD,
  ao as ao_1,
  K as K_1,
  aB,
  aJ,
  aE,
  aK,
  C,
  a1,
  aL,
  A as A_1,
  h,
  O,
  q as q_1,
  aM,
  aO as an_1,
  S,
  aN,
  u_1 as u_1_1,
  $,
  j,
  f,
  ah,
  aO,
  y as A,
  m as ln,
  aP as on,
  G as cn,
  ak as rn,
  aQ as je,
  a0 as xe,
  r as ie,
  E as ke,
  b as dn,
  N as hn,
  aR as un,
  R as $e,
  ac as li,
} from "./index-CsuAWxkQ.js";

import { C as be } from "./index-Cuda1b-C.js";
import { I as mn } from "./IconInfo-CtOnLyTN.js";
import { I as pn } from "./IconNotificationMention-D0wmNmea.js";
import { I as fn } from "./IconChevronRight-DL3FsTuw.js";
import { I as gn } from "./IconChevronLeft-DtJBpQva.js";
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
      t._sentryDebugIds[a] = "33c8ddb4-b0c7-4d8e-8f8f-bee791f54ac1";
      t._sentryDebugIdIdentifier =
        "sentry-dbid-33c8ddb4-b0c7-4d8e-8f8f-bee791f54ac1";
    }
  } catch {}
})();

const vn = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const bn = () => {
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
  const a = t === "system" ? vn() : t;
  document.documentElement.setAttribute("data-theme", a);
};

const Ze = aH()(
  aI(
    (t) => ({
      theme: bn(),

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
      if (Ze.getState().theme === "system") {
        ge("system");
      }
    });
}

const Nn = ({ size = 18 }) =>
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
        d: "M6.694 14.252C7.151 14.291 7.593 14.318 8.021 14.336 8.121 15.23 8.613 16.004 9.322 16.484 9.215 16.494 9.106 16.5 8.997 16.5H8.995C7.933 16.5 6.927 16.055 6.162 15.25 6.077 15.163 6.023 15.051 6.006 14.931 5.989 14.81 6.011 14.687 6.068 14.58 6.186 14.36 6.439 14.233 6.694 14.252ZM9.001 1.5C12.603 1.5 14.223 4.592 14.223 6.786 14.223 7.063 14.216 7.303 14.208 7.525 14.203 7.697 14.199 7.855 14.198 8.007 14.133 8.003 14.067 8 14 8 12.343 8 11 9.343 11 11 9.517 11 8.287 12.076 8.045 13.489 5.928 13.44 4.012 13.185 3.288 12.16 2.942 11.671 2.908 11.069 3.187 10.373 3.838 8.981 3.822 8.464 3.792 7.525 3.784 7.303 3.777 7.062 3.777 6.786 3.777 4.592 5.398 1.5 9.001 1.5ZM13 11C13 10.448 13.448 10 14 10 14.552 10 15 10.448 15 11V17C15 17.552 14.552 18 14 18 13.448 18 13 17.552 13 17V11Z",
      }),
      u_1("path", {
        fill: "currentColor",
        d: "M11 15C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H11Z",
      }),
    ],
  });

const Cn = ({ size = 24 }) =>
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

const kn = ({ size = 20 }) =>
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

const Ie = ({ size = 24 }) =>
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

const Tn = ({ size = 24 }) =>
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

const Sn = ({ size = 24 }) =>
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

const Re = ({ size = 24 }) =>
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

const Pn = "UJqe";
const xn = "BBRO";
const Ae = { toggle: Pn, active: xn };
function Q({ checked, onChange, disabled }) {
  const h = (s) => {
    s.stopPropagation();

    if (!disabled) {
      onChange(!checked);
    }
  };
  return u_1("button", {
    type: "button",
    className: `${Ae.toggle} ${checked ? Ae.active : ""}`,
    onClick: h,
    disabled: disabled,
    role: "switch",
    "aria-checked": checked,
  });
}

const V = {
  async getStatus() {
    return ao.get(ap.subscription.status);
  },
  async pay(t) {
    return ao.post(ap.subscription.pay, t ? { methodId: t } : undefined);
  },
  async setAutoRenewal(t) {
    return ao.post(ap.subscription.autoRenewal, { enabled: t });
  },
  async bindCard(t = "bank_card") {
    return ao.post(ap.subscription.bindCard, { type: t });
  },
  async getMethods() {
    return (await ao.get(ap.subscription.methods)).data;
  },
  async setDefaultMethod(t) {
    return ao.put(ap.subscription.methodDefault(t));
  },
  async deleteMethod(t) {
    return ao.delete(ap.subscription.methodDelete(t));
  },
};

const Me = {
  async list() {
    return (await ao.get(ap.sessions.list))?.sessions ?? [];
  },
  async revoke(t, a) {
    await ao.delete(ap.sessions.revoke(t));
    return { loggedOut: a };
  },
  async revokeOthers() {
    return (await ao.delete(ap.sessions.revokeOthers))?.revokedCount ?? 0;
  },
};

const $n = "PpPy";
const En = "R284";
const Rn = "Nky7";
const An = "nqYO";
const Ln = "u3hO";
const Bn = "w1xn";
const Dn = "K3UQ";
const On = "PsB6";
const Un = "BAa2";
const Hn = "b80w";

const K = {
  inputWrapper: $n,
  label: En,
  hint: Rn,
  input: An,
  error: Ln,
  small: Bn,
  medium: Dn,
  large: On,
  default: "UfNp",
  outline: Un,
  errorText: Hn,
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
  ...w
}) {
  const p = (M) => {
    onChange?.(M.currentTarget.value);
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
        className: `${K.input} ${K[d]} ${K[C]} ${error ? K.error : ""} ${
          className || ""
        }`,
        value: value,
        onInput: p,
        ...w,
      }),
      error && u_1("span", { className: K.errorText, children: error }),
    ],
  });
}
const Wn = "VDjx";
const _n = "zlGs";
const zn = "vWTS";
const qn = "VxzI";
const Vn = "q1e2";
const Fn = "JfxL";
const jn = "onpN";

const q = {
  form: Wn,
  field: _n,
  label: zn,
  hint: qn,
  fieldError: Vn,
  error: Fn,
  actions: jn,
};

function Zn({ onClose, onBack }) {
  const [i, h] = d("");
  const [s, d] = d("");
  const [C, r] = d("");
  const [w, p] = d(false);
  const [M, f] = d(null);
  const [v, I] = d({});

  const T = async ($) => {
    $.preventDefault();
    f(null);
    I({});

    if (s !== C) {
      I({ confirmPassword: "Пароли не совпадают" });
      return;
    }

    if (s.length < 10) {
      I({ newPassword: "Минимум 10 символов" });
      return;
    }
    if (s.length > 128) {
      I({ newPassword: "Максимум 128 символов" });
      return;
    }
    if (!/^[\x21-\x7E]+$/.test(s)) {
      I({ newPassword: "Только латиница, цифры и знаки пунктуации" });
      return;
    }
    p(true);
    try {
      await aD.changePassword({ currentPassword: i, newPassword: s });
      await ao_1.getState().logout();
      onClose();
    } catch (o) {
      if (K_1(o)) {
        if (o.code === aB.ACCOUNT_CURRENT_PASSWORD_INCORRECT) {
          I({ currentPassword: "Неверный текущий пароль" });
        } else if (o.errors) {
          const m = {};
          for (const [g, N] of Object.entries(o.errors)) {
            m[g] = aJ(N[0] || "Ошибка валидации");
          }
          I(m);
        } else {
          f(aE(o.code, o.message || "Не удалось сменить пароль"));
        }
      } else {
        f("Не удалось сменить пароль");
      }
    } finally {
      p(false);
    }
  };

  const P = i.length > 0 && s.length >= 10 && C.length > 0;
  return u_1(M, {
    onClose: onBack,
    title: "Смена пароля",
    children: u_1("form", {
      onSubmit: T,
      className: q.form,
      children: [
        u_1("div", {
          className: q.field,
          children: [
            u_1("label", { className: q.label, children: "Текущий пароль" }),
            u_1(de, {
              type: "password",
              value: i,
              onChange: h,
              placeholder: "Введите текущий пароль",
              autoComplete: "current-password",
            }),
            v.currentPassword &&
              u_1("span", {
                className: q.fieldError,
                children: v.currentPassword,
              }),
          ],
        }),
        u_1("div", {
          className: q.field,
          children: [
            u_1("label", { className: q.label, children: "Новый пароль" }),
            u_1(de, {
              type: "password",
              value: s,
              onChange: d,
              placeholder: "Введите новый пароль",
              autoComplete: "new-password",
            }),
            u_1("span", {
              className: q.hint,
              children: "Минимум 10 символов, латиница, цифры и пунктуация",
            }),
            v.newPassword &&
              u_1("span", { className: q.fieldError, children: v.newPassword }),
          ],
        }),
        u_1("div", {
          className: q.field,
          children: [
            u_1("label", {
              className: q.label,
              children: "Подтверждение пароля",
            }),
            u_1(de, {
              type: "password",
              value: C,
              onChange: r,
              placeholder: "Повторите новый пароль",
              autoComplete: "new-password",
            }),
            v.confirmPassword &&
              u_1("span", {
                className: q.fieldError,
                children: v.confirmPassword,
              }),
          ],
        }),
        M && u_1("div", { className: q.error, children: M }),
        u_1("div", {
          className: q.actions,
          children: [
            u_1(B_1, {
              type: "button",
              variant: "secondary",
              onClick: onBack,
              disabled: w,
              children: "Отмена",
            }),
            u_1(B_1, {
              type: "submit",
              disabled: !P || w,
              children: w ? "Сохранение..." : "Сменить пароль",
            }),
          ],
        }),
      ],
    }),
  });
}
const Gn = "RTF0";
const Yn = "wVfx";
const Xn = "Lb9U";
const Jn = "AWlJ";
const me = { content: Gn, title: Yn, subtitle: Xn, actions: Jn };
function Qn({ onClose }) {
  const a = async () => {
    await ao_1.getState().deleteAccount();
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
            u_1(B_1, {
              variant: "secondary",
              onClick: (i) => {
                i.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            u_1(B_1, {
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
const Kn = "yd8r";
const et = "ebQa";
const nt = "oDqB";
const tt = "vXjc";
const st = "P4IB";
const at = "Wkhy";
const it = "kqIK";
const lt = "ckko";
const ot = "S6rp";
const ct = "z6S7";
const rt = "f0iW";
const dt = "PBDc";
const ht = "Nhkt";
const ut = "jwqX";
const mt = "dlIh";
const pt = "ameX";
const ft = "qDq5";
const gt = "beSf";
const vt = "N4hU";
const bt = "zeRe";
const Nt = "O6lq";
const wt = "xYpz";
const yt = "g4d6";
const Ct = "Woz3";
const kt = "R3uZ";
const It = "qaWo";
const Mt = "gqst";
const Tt = "cfD9";
const St = "UKu9";
const Pt = "yJIH";
const xt = "CZcK";
const $t = "B7Qs";
const Et = "czwW";
const Rt = "oFvF";
const At = "U18g";
const Lt = "AvRV";
const Bt = "JY0W";
const Dt = "pXze";
const Ot = "CBJ5";
const Ut = "qCxM";
const Ht = "Ktcz";
const Wt = "wMjR";
const _t = "iQdP";
const zt = "spF2";
const qt = "vyAl";
const Vt = "NsvJ";
const Ft = "IZjm";
const jt = "S2wr";
const Zt = "Llit";
const Gt = "AQ3G";
const Yt = "AZ9l";
const Xt = "sYYG";
const Jt = "Ixcx";
const Qt = "YEjJ";
const Kt = "lxIe";
const es = "nrgW";
const ns = "aWfX";
const ts = "g6IM";
const ss = "s4qW";
const as = "nQiR";
const is = "C71Y";
const ls = "L48J";
const os = "mI0s";
const cs = "TbPG";
const rs = "uSxb";
const ds = "HIY6";
const hs = "qlyX";
const us = "zU9f";
const ms = "UX7l";
const ps = "SVmO";
const fs = "hpMO";
const gs = "r0QX";
const vs = "S0gb";
const bs = "bQz3";

const n = {
  modalContainer: Kn,
  settingsModal: et,
  sidebar: nt,
  sidebarTitle: tt,
  navItem: st,
  active: at,
  contentWrapper: it,
  content: lt,
  actionBar: ot,
  contentTitle: ct,
  subscriptionCancel: rt,
  subscriptionRenew: dt,
  paymentMethodsList: ht,
  paymentMethodRow: ut,
  paymentMethodIcon: mt,
  paymentMethodInfo: pt,
  paymentMethodTitle: ft,
  paymentMethodBadge: gt,
  paymentMethodSubtitle: vt,
  paymentMethodActions: bt,
  paymentMethodAdd: Nt,
  paymentMethodsEmpty: wt,
  paymentMethodBtn: yt,
  paymentMethodBtnDanger: Ct,
  section: kt,
  sectionTitle: It,
  settingItem: Mt,
  clickable: Tt,
  column: St,
  settingInfo: Pt,
  settingIcon: xt,
  blue: $t,
  red: Et,
  purple: Rt,
  settingText: At,
  settingTitle: Lt,
  settingDescription: Bt,
  settingControl: Dt,
  sessionsList: Ot,
  sessionItem: Ut,
  sessionIcon: Ht,
  sessionInfo: Wt,
  sessionDevice: _t,
  sessionTime: zt,
  sessionCurrentBadge: qt,
  sessionRemove: Vt,
  avatarDisplay: Ft,
  pinGrid: jt,
  pinItem: Zt,
  pinActive: Gt,
  pinImage: Yt,
  pinName: Xt,
  bioTextarea: Jt,
  fieldError: Qt,
  saveError: Kt,
  emptyBlocklist: es,
  blockedUsersList: ns,
  blockedUserItem: ts,
  blockedUserInfo: ss,
  blockedUserName: as,
  blockedUserUsername: is,
  deleteAccountButton: ls,
  logoutButton: os,
  mobilePager: cs,
  detailOpen: rs,
  mobileScreen: ds,
  mobileMenuTitle: hs,
  mobileMenu: us,
  mobileMenuItem: ms,
  mobileMenuIcon: ps,
  mobileMenuChevron: fs,
  mobileHeader: gs,
  mobileBack: vs,
  mobileHeaderTitle: bs,
};

const Ns = aK(({ onDirtyChange, onSavingChange, onClose }, s) => {
  const d = ao_1((k) => k.profile);

  const C = ao_1((k) => k.logout);

  const { openModal, closeModal } = C();
  const p = a1();
  const [M] = aL();
  const f = M?.url || window.location.pathname;
  const [v, I] = d(true);
  const [T, P] = d(false);
  const [$, o] = d(false);
  const [m, g] = d({});
  const [N, b] = d(null);
  const [x, U] = d(null);
  const [c, R] = d({ name: "", username: "", bio: "", avatar: "😀" });
  const [E, _] = d([]);
  const [y, Z] = d(null);
  const O = A_1(null);
  const [we, ye] = d(true);

  onClose(() => {
    if (d) {
      const k = {
        name: d.displayName,
        username: d.username || "",
        bio: d.bio || "",
        avatar: d.clanAvatar ?? d.avatar,
      };
      R(k);
      U(k);
      I(false);
      const D = d.pin ?? null;
      Z(D);
      O.current = D;
    }
  }, [d]);

  onClose(() => {
    O.getMyPins()
      .then((k) => {
        _(k.pins);

        if (k.activePin && !O.current) {
          const D = k.pins.find((H) => H.slug === k.activePin);

          if (D) {
            Z(D);
            O.current = D;
          }
        }
      })
      .catch(() => _([]))
      .finally(() => ye(false));
  }, []);

  onClose(() => {
    onDirtyChange($);
  }, [$]);

  onClose(() => {
    onSavingChange(T);
  }, [T]);

  const S = q_1(
    (k, D) => {
      if (!x) {
        return false;
      }

      const H = Object.keys(k).some((se) => k[se] !== x[se]);

      const j = (D?.slug ?? null) !== (O.current?.slug ?? null);
      return H || j;
    },
    [x]
  );

  const L = (k, D) => {
    if (m[k]) {
      g((H) => {
        const j = { ...H };
        delete j[k];
        return j;
      });
    }

    b(null);

    R((H) => {
      const j = { ...H, [k]: D };
      o(S(j, y));
      return j;
    });
  };

  const J = q_1(
    (k) => {
      const D = y?.slug === k.slug ? null : k;
      Z(D);
      o(S(c, D));
    },
    [y, c, S]
  );

  const Ce = async () => {
    if (!$ || T) {
      return;
    }
    P(true);
    g({});
    b(null);
    const k = x?.username;
    const c_username = c.username;
    try {
      if (x && Object.keys(c).some((ce) => c[ce] !== x[ce])) {
        await O.updateProfile({
          displayName: c.name,
          username: c.username || undefined,
          bio: c.bio || null,
        });
      }

      if ((y?.slug ?? null) !== (O.current?.slug ?? null)) {
        if (y) {
          await O.setActivePin(y.slug);
        } else {
          await O.removeActivePin();
        }
      }

      U({ ...c });
      O.current = y;
      o(false);
      const se = ao_1.getState().profile;

      if (se) {
        ao_1.getState().setProfile({
          ...se,
          displayName: c.name,
          username: c.username,
          bio: c.bio || null,
          pin: y,
        });
      }

      if (
        c_username &&
        c_username !== k &&
        (f === `/@${k}` || f === `/@${d?.id}`)
      ) {
        u_1_1(`/@${c_username}`);
      }
    } catch (H) {
      console.error("Failed to save profile:", H);

      if (K_1(H)) {
        if (H.errors) {
          const j = {};
          for (const [se, ce] of Object.entries(H.errors)) {
            j[se] = aJ(ce[0] || "Ошибка валидации");
          }
          g(j);
        } else {
          b(aE(H.code, H.message || "Не удалось сохранить изменения"));
        }
      } else {
        b("Не удалось сохранить изменения");
      }
    } finally {
      P(false);
    }
  };

  const ue = () => {
    if (x) {
      R({ ...x });
      Z(O.current);
      o(false);
    }
  };

  aM(s, () => ({
    save: Ce,
    discard: ue,
  }));

  return v
    ? u_1(S, {
        children: [
          u_1("h2", { className: n.contentTitle, children: "Аккаунт" }),
          u_1(an_1, {}),
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
                    children: c.avatar,
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
                        value: c.name,
                        onChange: (k) => L("name", k),
                      }),
                      m.displayName &&
                        u_1("span", {
                          className: n.fieldError,
                          children: m.displayName,
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
                        value: c.username,
                        onChange: (k) => L("username", k),
                      }),
                      m.username &&
                        u_1("span", {
                          className: n.fieldError,
                          children: m.username,
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
                    value: c.bio,
                    onChange: (k) => L("bio", k.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  m.bio &&
                    u_1("span", { className: n.fieldError, children: m.bio }),
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
                      children: E.map((k) =>
                        u_1(
                          "button",
                          {
                            className: `${n.pinItem} ${
                              y?.slug === k.slug ? n.pinActive : ""
                            }`,
                            onClick: () => J(k),
                            disabled: T,
                            title: k.description || k.name,
                            type: "button",
                            children: [
                              u_1("img", {
                                src: k.url,
                                alt: k.name,
                                className: n.pinImage,
                              }),
                              u_1("span", {
                                className: n.pinName,
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
              N && u_1("div", { className: n.saveError, children: N }),
            ],
          }),
          p &&
            u_1("div", {
              className: n.section,
              children: u_1("button", {
                type: "button",
                className: n.logoutButton,
                onClick: () => {
                  C();
                  onClose();
                },
                children: [
                  u_1(aN, { size: 20 }),
                  u_1("span", { children: "Выйти из аккаунта" }),
                ],
              }),
            }),
          u_1("div", {
            className: n.section,
            children: u_1("button", {
              type: "button",
              className: n.deleteAccountButton,
              onClick: () => openModal(u_1(Qn, { onClose: closeModal })),
              children: "Удалить аккаунт",
            }),
          }),
        ],
      });
});

const ws = "B9Ew";
const ys = "EvBP";
const Cs = "tfgG";
const ks = "kMYU";
const pe = { content: ws, title: ys, subtitle: Cs, actions: ks };

export function CancelSubscriptionModal({ expiresAt, onConfirm, onClose }) {
  const [h, s] = d(false);

  const d = new Date(expiresAt).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const C = async () => {
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
            u_1(B_1, {
              variant: "secondary",
              onClick: (r) => {
                r.stopPropagation();
                onClose();
              },
              children: "Оставить",
            }),
            u_1(B_1, {
              variant: "danger",
              onClick: (r) => {
                r.stopPropagation();
                C();
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

const Ms = "mPfH";
const Ts = "Muc1";
const Ss = "aSoi";
const Ps = "YXPp";
const xs = "hhSz";
const re = {
  content: Ms,
  title: Ts,
  subtitle: Ss,
  disclaimer: Ps,
  actions: xs,
};
function $s({ onConfirm, onClose }) {
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
            u_1(B_1, {
              variant: "secondary",
              onClick: (d) => {
                d.stopPropagation();
                onClose();
              },
              children: "Отмена",
            }),
            u_1(B_1, {
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

const Es = [
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

const Rs = 2247;
const As = 157;

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
const Ls = 605;
const Bs = 40;
const Ds = { s: 14, x: 623 };
const Os = { s: 15, x: 629 };
function Us(t, a) {
  const i = (t + a + 200) / G;
  const h = Pe.slice();
  let s = 1785;
  let d = 218;
  let C = true;
  for (let r = 98; r < Pe_length && ((d += 18), (s += d), !(s > i)); r++) {
    const w = C ? Os : Ds;
    h[r] = [w.s, w.x, s];
    C = !C;
  }
  return h;
}
function Hs() {
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
      let T;
      let P;
      if (t_current_parentElement) {
        const m = t_current_parentElement.getBoundingClientRect();
        T = m.top;
        P = m.left + (m.width - 370) / 2;
      } else {
        T = (innerHeight - 900) / 2;
        P = (innerWidth - 370) / 2;
      }
      const $ = innerWidth <= 1173;
      i.current.yOff = 357 * G - T + ($ ? 60 : 0);
      const o = 260;
      i.current.xOff = Ls * G - P - o;
      i.current.tl = Us(innerHeight, i.current.yOff);
    }
    const C = setTimeout(d, 260);
    let r;
    const w = () => {
      clearTimeout(r);
      r = setTimeout(d, 150);
    };
    window.addEventListener("resize", w);
    let p;
    function M(f) {
      const i_current = i.current;
      if (f - i_current.ts >= Bs) {
        const I = i_current.tl[i_current.f];
        if (!I) {
          a_current.style.visibility = "hidden";
        } else {
          const [T, P, $] = I;
          const [o, , m, g] = Es[T];
          const N = (m * G + 0.5) | 0;
          const b = (g * G + 0.5) | 0;
          a_current.style.cssText = `visibility:visible;width:${N}px;height:${b}px;background-image:url(/assets/nuksta/nuksta-chechik-sprite.png);background-repeat:no-repeat;image-rendering:pixelated;will-change:transform;background-position:${-(
            (o * G + 0.5) |
            0
          )}px 0px;background-size:${(Rs * G + 0.5) | 0}px ${
            (As * G + 0.5) | 0
          }px;transform:translate(${(P * G - i_current.xOff + 0.5) | 0}px,${
            ($ * G - i_current.yOff + 0.5) | 0
          }px)`;
        }
        i_current.f = (i_current.f + 1) % Pe_length;
        i_current.ts = f;
      }
      p = requestAnimationFrame(M);
    }
    p = requestAnimationFrame(M);

    return () => {
      cancelAnimationFrame(p);
      clearTimeout(C);
      clearTimeout(r);
      window.removeEventListener("resize", w);
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
const Ws = "YROq";
const _s = "dlta";
const zs = "bhZ1";
const qs = "k8FE";
const Vs = "SFMI";
const Fs = "w8OW";
const js = "SRzh";
const Zs = "OCk3";
const Gs = "MZPo";
const Ys = "xTH6";
const Xs = "QXSS";
const Js = "rrIR";
const Qs = "kgjF";
const Ks = "sfNH";
const ea = "EtMs";
const na = "irpO";
const ta = "ypSW";
const sa = "YFtH";
const aa = "xxC9";
const ia = "TIv0";
const la = "cU3x";
const oa = "eREO";
const ca = "Z7Gs";
const ra = "gHEB";
const da = "MMw7";
const ha = "HUVq";
const ua = "Lljl";
const ma = "GPlh";
const pa = "Xsxo";
const fa = "r7vo";
const ga = "sUw6";
const va = "nIDd";
const ba = "kNee";
const Na = "l1qi";

const u = {
  modal: Ws,
  sub: _s,
  top: zs,
  bottom: qs,
  title: Vs,
  section: Fs,
  profileSection: js,
  label: Zs,
  labelRow: Gs,
  dim: Ys,
  row: Xs,
  icon: Js,
  iconGradient: Qs,
  name: Ks,
  nameGradient: ea,
  namePinBadge: na,
  promoVideo: ta,
  features: sa,
  featureContent: aa,
  featureTitle: ia,
  gradientText: la,
  soon: oa,
  infoBtn: ca,
  footer: ra,
  disclaimer: da,
  methodSelectRow: ha,
  methodSelectLabel: ua,
  methodSelect: ma,
  chargeInfo: pa,
  consentLink: fa,
  subscribeBtn: ga,
  btnLoading: va,
  btnSpinner: ba,
  activeLabel: Na,
};

function Le({ text }) {
  return u_1(aO, {
    text: text,
    multiline: true,
    children: u_1("span", {
      className: u.infoBtn,
      children: u_1(mn, { size: 14 }),
    }),
  });
}
const fe = "new";
function wa(t) {
  return t.type === "bank_card"
    ? `${t.cardBrand || "Карта"} •••• ${t.cardLast4 || ""}`.trim()
    : t.type === "sbp"
    ? "СБП"
    : t.type;
}
function ya({ isOpen, onClose }) {
  const i = j();
  const [h, s] = d(false);
  const [d, C] = d(false);
  const [r, w] = d([]);
  const [p, M] = d(fe);
  const [f, v] = d(199);

  h(() => {
    if (isOpen) {
      V.getStatus()
        .then((m) => {
          C(!!m.recurringEnabled);

          if (typeof m.price == "number") {
            v(m.price);
          }

          if (m.recurringEnabled) {
            V.getMethods()
              .then((g) => {
                w(g);
                const N = g.find((b) => b.isDefault) || g[0];
                M(N ? N.id : fe);
              })
              .catch(() => w([]));
          }
        })
        .catch(() => C(false));
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const I = i?.subscription?.isActive ?? false;
  const T = new Date();
  T.setMonth(T.getMonth() + 1);
  const P = T.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  const $ = d && p !== fe;

  const o = async () => {
    if (h) {
      return;
    }
    s(true);

    if ($) {
      try {
        const g = await V.pay(p);
        if (g.error) {
          A.error(g.error);
          return;
        }
        A.success("Подписка оформлена!");
        onClose();

        ao_1
          .getState()
          .fetchProfile()
          .catch(() => {});
      } catch (g) {
        A.error(
          g instanceof Error && g.message ? g.message : "Ошибка при оплате"
        );
      } finally {
        s(false);
      }
      return;
    }

    const m = window.open("about:blank", "_blank");
    try {
      const g = await V.pay();
      if (g.error) {
        m?.close();
        A.error(g.error);
        return;
      }

      if (g.confirmationUrl && m) {
        m.location.href = g.confirmationUrl;
      } else if (g.confirmationUrl) {
        window.location.href = g.confirmationUrl;
      }
    } catch (g) {
      m?.close();

      A.error(
        g instanceof Error && g.message
          ? g.message
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
        u_1(Hs, {}),
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
                        u_1(Le, {
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
                        u_1(Le, {
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
                              children: u_1(kn, { size: 20 }),
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
                              children: u_1(ah, { size: 20 }),
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
                              children: u_1(Cn, { size: 20 }),
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
                    !I &&
                      r.length > 0 &&
                      u_1("label", {
                        className: u.methodSelectRow,
                        children: [
                          u_1("span", {
                            className: u.methodSelectLabel,
                            children: "Сохранённый способ оплаты",
                          }),
                          u_1("select", {
                            className: u.methodSelect,
                            value: p,
                            onChange: (m) => M(m.target.value),
                            children: [
                              r.map((m) =>
                                u_1(
                                  "option",
                                  { value: m.id, children: wa(m) },
                                  m.id
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
                    !I &&
                      u_1("div", {
                        className: u.chargeInfo,
                        children: [
                          "Сегодня спишется ",
                          f,
                          " ₽, далее ежемесячно — следующее списание ",
                          P,
                          ".",
                        ],
                      }),
                    I
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
                                  u_1(an_1, {
                                    size: "xs",
                                    className: u.btnSpinner,
                                  }),
                                  "Оплачиваем…",
                                ],
                              })
                            : `Оплатить ${f}₽ на месяц`,
                        }),
                    !I &&
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

const Ca = {
  yoo_money: "ЮMoney",
  sberbank: "SberPay",
  tinkoff_bank: "T-Pay",
  sbp: "СБП",
  mobile_balance: "Баланс телефона",
  sber_loan: "Кредит от СберБанка",
  sber_bnpl: "Плати частями",
  cash: "Наличные",
};

const ka = {
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

function Be(t) {
  if (t.type === "bank_card") {
    return `${t.cardBrand || "Карта"} •••• ${t.cardLast4 || ""}`.trim();
  }

  if (!Ca[t.type]) {
    return t.type;
  }
}
function Ia(t) {
  return ka[t.type] || "";
}
const De = 5;
function Ma() {
  const t = ao_1((c) => c.profile);

  const [a, i] = d(false);
  const [h, s] = d(false);
  const [d, C] = d(false);
  const [r, w] = d([]);
  const [p, M] = d(true);
  const [f, v] = d(false);
  const [I, T] = d(false);
  const [P, $] = d(null);
  const [o, m] = d(false);

  h(() => {
    V.getStatus()
      .then((c) => m(!!c.recurringEnabled))
      .catch(() => m(false));
  }, []);

  h(() => {
    if (o) {
      V.getMethods()
        .then(w)
        .catch(() => w([]))
        .finally(() => M(false));
    }
  }, [o]);

  const g = () => {
    V.getMethods()
      .then(w)
      .catch(() => {});
  };

  const N = async (c) => {
    try {
      await V.setDefaultMethod(c);

      w((R) =>
        R.map((E) => ({
          ...E,
          isDefault: E.id === c,
        }))
      );
    } catch {
      A.error("Не удалось изменить основной способ оплаты");
    }
  };

  const b = async (c) => {
    try {
      const R = await V.deleteMethod(c.id);

      w((E) => E.filter((_) => _.id !== c.id));

      if (R.autoRenewalDisabled && t?.subscription) {
        ao_1.getState().setProfile({
          ...t,
          subscription: { ...t.subscription, autoRenewal: false },
        });
      }

      g();
    } catch {
      A.error("Не удалось отвязать карту");
    }
  };

  const x = async (c) => {
    if (f) {
      return;
    }
    v(true);
    T(false);
    const R = window.open("about:blank", "_blank");
    try {
      const E = await V.bindCard(c);
      const E_error = E.error;
      if (E_error || !E.confirmationUrl) {
        R?.close();
        A.error(E_error || "Привязка карт временно недоступна");
        return;
      }

      if (R) {
        R.location.href = E.confirmationUrl;
      } else {
        window.location.href = E.confirmationUrl;
      }
    } catch (E) {
      R?.close();

      A.error(
        E instanceof Error && E.message
          ? E.message
          : "Привязка карт временно недоступна"
      );
    } finally {
      v(false);
    }
  };

  const U = [...r].sort((c, R) =>
    c.isDefault !== R.isDefault
      ? c.isDefault
        ? -1
        : 1
      : (R.createdAt || "").localeCompare(c.createdAt || "")
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
                                const c = new Date(t.subscription.expiresAt);
                                const R = new Date();

                                const E = Math.max(
                                  0,
                                  Math.ceil(
                                    (c.getTime() - R.getTime()) /
                                      (1000 /* 1e3 */ * 60 * 60 * 24)
                                  )
                                );

                                return `до ${c.toLocaleDateString("ru-RU", {
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
                    onClick: () => C(true),
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
                  children: p
                    ? u_1(an_1, {})
                    : u_1(S, {
                        children: [
                          U.map((c) => {
                            const R = c.type === "bank_card" ? Ie : Re;
                            return u_1(
                              "div",
                              {
                                className: n.paymentMethodRow,
                                children: [
                                  u_1("div", {
                                    className: n.paymentMethodIcon,
                                    children: u_1(R, { size: 18 }),
                                  }),
                                  u_1("div", {
                                    className: n.paymentMethodInfo,
                                    children: [
                                      u_1("span", {
                                        className: n.paymentMethodTitle,
                                        children: [
                                          Be(c),
                                          c.isDefault &&
                                            r.length > 1 &&
                                            u_1("span", {
                                              className: n.paymentMethodBadge,
                                              children: "основной",
                                            }),
                                        ],
                                      }),
                                      u_1("span", {
                                        className: n.paymentMethodSubtitle,
                                        children: Ia(c),
                                      }),
                                    ],
                                  }),
                                  u_1("div", {
                                    className: n.paymentMethodActions,
                                    children: [
                                      !c.isDefault &&
                                        u_1("button", {
                                          type: "button",
                                          className: n.paymentMethodBtn,
                                          onClick: () => N(c.id),
                                          children: "Сделать основным",
                                        }),
                                      u_1("button", {
                                        type: "button",
                                        className: n.paymentMethodBtnDanger,
                                        onClick: () => $(c),
                                        children: "Отвязать",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              c.id
                            );
                          }),
                          r.length === 0 &&
                            u_1("div", {
                              className: n.paymentMethodsEmpty,
                              children: [
                                u_1(Ie, { size: 18 }),
                                u_1("span", {
                                  children: "Нет привязанных методов оплаты",
                                }),
                              ],
                            }),
                          r.length < De
                            ? I
                              ? u_1(S, {
                                  children: [
                                    u_1("button", {
                                      type: "button",
                                      className: n.paymentMethodAdd,
                                      onClick: () => x("bank_card"),
                                      disabled: f,
                                      children: [
                                        u_1("span", {
                                          className: n.paymentMethodIcon,
                                          children: u_1(Ie, { size: 16 }),
                                        }),
                                        "Банковская карта",
                                      ],
                                    }),
                                    u_1("button", {
                                      type: "button",
                                      className: n.paymentMethodAdd,
                                      onClick: () => x("sbp"),
                                      disabled: f,
                                      children: [
                                        u_1("span", {
                                          className: n.paymentMethodIcon,
                                          children: u_1(Re, { size: 16 }),
                                        }),
                                        "СБП",
                                      ],
                                    }),
                                  ],
                                })
                              : u_1("button", {
                                  type: "button",
                                  className: n.paymentMethodAdd,
                                  onClick: () => T(true),
                                  disabled: f,
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
      a &&
        t?.subscription?.expiresAt &&
        u_1(CancelSubscriptionModal, {
          expiresAt: t.subscription.expiresAt,
          onConfirm: async () => {
            const c = await V.setAutoRenewal(false);
            ao_1.getState().setProfile({
              ...t,
              subscription: { ...t.subscription, autoRenewal: c.autoRenewal },
            });
          },
          onClose: () => i(false),
        }),
      h &&
        u_1($s, {
          onConfirm: async () => {
            const c = await V.setAutoRenewal(true);
            ao_1.getState().setProfile({
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
      P &&
        u_1(be, {
          title: "Отвязать способ оплаты?",
          message: `${Be(P)} будет отвязан. Это действие нельзя отменить.`,
          confirmText: "Отвязать",
          danger: true,
          onConfirm: () => b(P),
          onClose: () => $(null),
        }),
      u_1(ya, {
        isOpen: d,
        onClose: () => {
          C(false);

          V.getMethods()
            .then(w)
            .catch(() => {});
        },
      }),
    ],
  });
}
const Ta = "J9md";
const Sa = "lxMP";
const Pa = "YBWr";
const xa = "T8WL";
const $a = "afMp";
const Ea = "AVww";
const Ra = "RlNz";

const ae = {
  selectWrapper: Ta,
  select: Sa,
  open: Pa,
  selectedValue: xa,
  dropdown: $a,
  option: Ea,
  selected: Ra,
};

function Ne({ value, options, onChange, disabled }) {
  const [s, d] = d(false);
  const C = A_1(null);

  const r = options.find((p) => p.value === value);

  disabled(() => {
    const p = (M) => {
      if (C.current && !C.current.contains(M.target)) {
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
  const w = (p) => {
    onChange(p);
    d(false);
  };
  return u_1("div", {
    ref: C,
    className: ae.selectWrapper,
    children: [
      u_1("button", {
        type: "button",
        className: `${ae.select} ${s ? ae.open : ""}`,
        onClick: (p) => {
          p.stopPropagation();

          if (!disabled) {
            d(!s);
          }
        },
        disabled: disabled,
        children: [
          u_1("span", { className: ae.selectedValue, children: r?.label }),
          u_1(In, { size: 16 }),
        ],
      }),
      s &&
        u_1("div", {
          className: ae.dropdown,
          children: options.map((p) =>
            u_1(
              "button",
              {
                type: "button",
                className: `${ae.option} ${
                  p.value === value ? ae.selected : ""
                }`,
                onClick: () => w(p.value),
                children: p.label,
              },
              p.value
            )
          ),
        }),
    ],
  });
}

const Oe = [
  { value: "everyone", label: "Все" },
  { value: "followers", label: "Подписчики" },
  { value: "mutual", label: "Взаимные подписчики" },
  { value: "nobody", label: "Никто" },
];

const Aa = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

function La() {
  const { theme, setTheme } = Ze();
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
              options: Aa,
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
function Ue(t) {
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
function Da(t) {
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
function Ua({ onChangePassword }) {
  const [a, i] = d([]);
  const [h, s] = d(true);
  const [d, C] = d(null);
  const [r, w] = d(null);
  const [p, M] = d(false);

  const f = q_1(async () => {
    s(true);
    C(null);
    try {
      i(await Me.list());
    } catch {
      C("Не удалось загрузить активные сессии");
    } finally {
      s(false);
    }
  }, []);

  h(() => {
    f();
  }, [f]);
  const [v, I] = d(null);

  const T = q_1(
    async (o) => {
      w(o.id);
      try {
        const { loggedOut } = await Me.revoke(o.id, o.isCurrent);
        if (loggedOut) {
          await ao_1.getState().logout();
          return;
        }

        i((g) => g.filter((N) => N.id !== o.id));

        A.success("Сессия завершена");
      } catch {
        f();
      } finally {
        w(null);
      }
    },
    [f]
  );

  const P = q_1(async () => {
    try {
      const o = await Me.revokeOthers();
      M(false);

      A.success(
        o > 0 ? `Завершено сессий: ${o}` : "Других активных сессий нет"
      );

      await f();
    } catch {}
  }, [f]);

  const $ = a.reduce((o, m) => (m.isCurrent ? o : o + 1), 0);

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
            u_1(B_1, {
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
            ? u_1(an_1, {})
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
                                  children: Ue(o),
                                }),
                                u_1("div", {
                                  className: n.sessionTime,
                                  children: [Da(o), " · ", Ba(o.lastUsedAt)],
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
                                  disabled: r === o.id,
                                  onClick: () => I(o),
                                  children:
                                    r === o.id
                                      ? u_1(on, { size: 16 })
                                      : u_1(cn, { size: 16 }),
                                }),
                          ],
                        },
                        o.id
                      )
                    ),
                  }),
                  $ > 0 &&
                    u_1("button", {
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
        u_1(be, {
          title: "Завершить сессию?",
          message: `Вы действительно хотите завершить сессию «${Ue(
            v
          )}»? Устройство будет разлогинено.`,
          confirmText: "Завершить",
          danger: true,
          onConfirm: () => T(v),
          onClose: () => I(null),
        }),
      p &&
        u_1(be, {
          title: "Завершить все другие сессии?",
          message: `Вы действительно хотите завершить ${$} ${ve(
            $,
            "другую сессию",
            "другие сессии",
            "других сессий"
          )}? Устройства будут разлогинены.`,
          confirmText: `Завершить все (${$})`,
          danger: true,
          onConfirm: P,
          onClose: () => M(false),
        }),
    ],
  });
}

const Ha = aK(({ onDirtyChange, onSavingChange }, h) => {
  const { settings, fetchSettings, updateSettings } = rn();

  const [r, w] = fetchSettings({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [p, M] = fetchSettings(null);
  const [f, v] = fetchSettings(false);
  const [I, T] = fetchSettings(false);
  const [P, $] = fetchSettings(false);

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
      w(N);
      M(N);
      v(false);
      $(true);
    }
  }, [settings, P]);

  h(() => {
    onDirtyChange(f);
  }, [f]);

  h(() => {
    onSavingChange(I);
  }, [I]);

  const o = (N, b) => {
    const x = { ...r, [N]: b };
    w(x);

    if (p) {
      const U = Object.keys(x).some((c) => x[c] !== p[c]);
      v(U);
    }
  };

  const m = async () => {
    if (!(!f || I)) {
      T(true);
      try {
        await updateSettings({
          webEnabled: r.webEnabled,
          soundEnabled: r.soundEnabled,
          preferences: {
            follows: r.follows,
            reactions: r.reactions,
            replies: r.replies,
            mentions: r.mentions,
            wallPosts: r.wallPosts,
          },
        });

        M({ ...r });
        v(false);
        A.success("Настройки уведомлений сохранены");
      } catch (N) {
        console.error("Failed to save notification settings:", N);
        A.error("Не удалось сохранить настройки");
      } finally {
        T(false);
      }
    }
  };

  const g = () => {
    if (p) {
      w({ ...p });
      v(false);
    }
  };

  aM(h, () => ({
    save: m,
    discard: g,
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
            onClick: () => o("webEnabled", !r.webEnabled),
            children: [
              u_1("div", {
                className: n.settingInfo,
                children: [
                  u_1("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: u_1(je, { size: 20 }),
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
                checked: r.webEnabled,
                onChange: (N) => o("webEnabled", N),
              }),
            ],
          }),
          u_1("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("soundEnabled", !r.soundEnabled),
            children: [
              u_1("div", {
                className: n.settingInfo,
                children: [
                  u_1("div", {
                    className: `${n.settingIcon} ${n.blue}`,
                    children: u_1(wn, { size: 20 }),
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
                checked: r.soundEnabled,
                onChange: (N) => o("soundEnabled", N),
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
            onClick: () => o("follows", !r.follows),
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
                checked: r.follows,
                onChange: (N) => o("follows", N),
              }),
            ],
          }),
          u_1("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("wallPosts", !r.wallPosts),
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
                checked: r.wallPosts,
                onChange: (N) => o("wallPosts", N),
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
            onClick: () => o("reactions", !r.reactions),
            children: [
              u_1("div", {
                className: n.settingInfo,
                children: [
                  u_1("div", {
                    className: `${n.settingIcon} ${n.red}`,
                    children: u_1(Nn, { size: 20 }),
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
                checked: r.reactions,
                onChange: (N) => o("reactions", N),
              }),
            ],
          }),
          u_1("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("replies", !r.replies),
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
                checked: r.replies,
                onChange: (N) => o("replies", N),
              }),
            ],
          }),
          u_1("div", {
            className: `${n.settingItem} ${n.clickable}`,
            onClick: () => o("mentions", !r.mentions),
            children: [
              u_1("div", {
                className: n.settingInfo,
                children: [
                  u_1("div", {
                    className: `${n.settingIcon} ${n.purple}`,
                    children: u_1(pn, { size: 20 }),
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
                checked: r.mentions,
                onChange: (N) => o("mentions", N),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const Wa = aK(({ onDirtyChange, onSavingChange }, h) => {
  const [s, d] = d({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [C, r] = d(null);
  const [w, p] = d(false);
  const [M, f] = d(false);
  const [v, I] = d(false);
  const [T, P] = d(false);
  const [$, o] = d([]);
  const [m, g] = d(null);
  const [N, b] = d(true);
  const [x, U] = d(false);
  const [c, R] = d(false);

  h(() => {
    E();

    if (!c) {
      _();
    }
  }, []);

  h(() => {
    onDirtyChange(w);
  }, [w]);

  h(() => {
    onSavingChange(M);
  }, [M]);

  const E = async () => {
    if (!T) {
      I(true);
    }

    try {
      const S = await O.getPrivacySettings();

      const L = {
        isPrivate: S.isPrivate ?? false,
        whoCanPostOnWall: S.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: S.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: S.showLastSeen ?? true,
      };

      d(L);
      r(L);
      p(false);
      P(true);
    } catch (S) {
      console.error("Failed to load privacy settings:", S);
    } finally {
      I(false);
    }
  };

  const _ = async (S) => {
    if (!x) {
      U(true);
      try {
        const L = await xe.getBlockedUsers({ cursor: S, limit: 20 });

        o(S ? (J) => [...J, ...L.users] : L.users);

        g(L.nextCursor);
        b(L.hasMore);
        R(true);
      } catch (L) {
        console.error("Failed to load blocked users:", L);
      } finally {
        U(false);
      }
    }
  };

  const y = async (S) => {
    try {
      await xe.unblockUser(S);

      o((L) => L.filter((J) => J.id !== S));

      A.success("Пользователь разблокирован");
    } catch (L) {
      console.error("Failed to unblock user:", L);
      A.error("Не удалось разблокировать пользователя");
    }
  };

  const Z = () => {
    if (N && m) {
      _(m);
    }
  };

  const O = (S, L) => {
    const J = { ...s, [S]: L };
    d(J);

    if (C) {
      const Ce = Object.keys(J).some((ue) => J[ue] !== C[ue]);
      p(Ce);
    }
  };

  const we = async () => {
    if (!(!w || M)) {
      f(true);
      try {
        await O.updatePrivacySettings({
          whoCanPostOnWall: s.whoCanPostOnWall,
          whoCanSeeMyPostReactions: s.whoCanSeeMyPostReactions,
          showLastSeen: s.showLastSeen,
        });

        r({ ...s });
        p(false);
        A.success("Настройки приватности сохранены");
      } catch (S) {
        console.error("Failed to save privacy settings:", S);
        A.error("Не удалось сохранить настройки");
      } finally {
        f(false);
      }
    }
  };

  const ye = () => {
    if (C) {
      d({ ...C });
      p(false);
    }
  };

  aM(h, () => ({
    save: we,
    discard: ye,
  }));

  return u_1(S, {
    children: [
      u_1("h2", { className: n.contentTitle, children: "Приватность" }),
      T &&
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
                  options: Oe,
                  onChange: (S) => O("whoCanPostOnWall", S),
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
                  options: Oe,
                  onChange: (S) => O("whoCanSeeMyPostReactions", S),
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
                  onChange: (S) => O("showLastSeen", S),
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
          x && !c
            ? u_1(an_1, {})
            : c
            ? u_1(S, {
                children:
                  $.length === 0
                    ? u_1("div", {
                        className: n.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : u_1("div", {
                        className: n.blockedUsersList,
                        children: [
                          $.map((S) =>
                            u_1(
                              "div",
                              {
                                className: n.blockedUserItem,
                                children: [
                                  u_1(f, {
                                    src: S.avatar,
                                    alt: S.displayName,
                                    size: "sm",
                                  }),
                                  u_1("div", {
                                    className: n.blockedUserInfo,
                                    children: [
                                      u_1("span", {
                                        className: n.blockedUserName,
                                        children: S.displayName,
                                      }),
                                      S.username &&
                                        u_1("span", {
                                          className: n.blockedUserUsername,
                                          children: ["@", S.username],
                                        }),
                                    ],
                                  }),
                                  u_1(B_1, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => y(S.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              S.id
                            )
                          ),
                          N &&
                            u_1(B_1, {
                              variant: "secondary",
                              onClick: Z,
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

const _a = "DgrY";
const za = "h5bS";
const qa = "SaFl";
const Va = "WCSo";
const Fa = "rjcq";
const ja = "ieXc";
const Za = "VGoE";

const ee = {
  note: _a,
  nicknameRow: za,
  error: qa,
  avatarRow: Va,
  avatarPreview: Fa,
  avatarActions: ja,
  danger: Za,
};

async function Ga(t) {
  const [a, i, h] = await Promise.allSettled(t);

  const s = [a, i, h].filter((d) => d.status === "rejected").length;

  return {
    profile: a.status === "fulfilled" ? a.value : null,
    nicknames: i.status === "fulfilled" ? i.value : null,
    avatar: h.status === "fulfilled" ? h.value : null,
    failed: s,
  };
}
function Ya() {
  const t = j()?.id;
  const [a, i] = d(null);
  const [h, s] = d(null);
  const [d, C] = d(null);
  const [r, w] = d(false);
  const [p, M] = d(true);
  const [f, v] = d(false);
  const [I, T] = d("");

  const P = q_1(async () => {
    if (t) {
      M(true);
      T("");
      try {
        const b = await Ga([ie.profile(t), ie.nicknames(), ie.profileAvatar()]);
        i(b.profile);
        s(b.nicknames);
        C(b.avatar);

        if (b.failed === 3) {
          T("Не удалось загрузить настройки ивента.");
        } else if (b.failed > 0) {
          T("Часть настроек не загрузилась.");
        }
      } finally {
        M(false);
      }
    }
  }, [t]);

  h(() => {
    P();
  }, [P]);

  const $ = async (b) => {
    if (!(!t || !a?.curtains.hasCurtains || f)) {
      v(true);
      try {
        await ie.setCurtains(t, b);

        i((x) => x && { ...x, curtains: { ...x.curtains, closed: b } });

        ke(t);
        A.success(b ? "Шторы задёрнуты" : "Шторы открыты");
      } catch {
        A.error("Не удалось изменить положение штор");
      } finally {
        v(false);
      }
    }
  };

  const o = async (b) => {
    if (!t || !h || f) {
      return;
    }
    const x = b || null;
    if (x !== h.active) {
      v(true);
      try {
        const U = await ie.setActiveNickname(x);

        s((c) => c && { ...c, active: U.nickname });

        window.dispatchEvent(
          new CustomEvent("event-nickname-changed", {
            detail: { userId: t, label: U.nickname },
          })
        );

        ke(t);
        A.success(U.nickname ? "Кликуха выбрана" : "Кликуха снята");
      } catch {
        A.error("Не удалось сменить кликуху");
      } finally {
        v(false);
      }
    }
  };

  const m = async () => {
    if (!(!d?.active || f)) {
      v(true);
      try {
        await ie.removeProfileAvatar();

        C((b) => b && { ...b, active: null });

        await ao_1.getState().fetchProfile();

        if (t) {
          const b = ao_1.getState().profile;

          if (b?.id === t) {
            dn.getState().replaceAuthorAvatar(t, b.avatar ?? null);
          }

          ke(t);
        }

        A.success("Аватарка удалена");
      } catch (b) {
        A.error("Не удалось удалить аватарку");
        throw b;
      } finally {
        v(false);
      }
    }
  };

  const g = a?.curtains;

  const N = [
    { value: "", label: "Без кликухи" },
    ...(h?.owned ?? []).map((b) => ({
      value: b,
      label: b.toLocaleLowerCase("ru-RU"),
    })),
  ];

  return u_1(S, {
    children: [
      u_1("h2", { className: n.contentTitle, children: "Ивент" }),
      p && u_1("p", { className: ee.note, children: "Загрузка настроек…" }),
      I &&
        u_1("div", {
          className: ee.error,
          role: "alert",
          children: [
            u_1("span", { children: I }),
            u_1("button", {
              type: "button",
              onClick: () => {
                P();
              },
              children: "Повторить",
            }),
          ],
        }),
      !p &&
        (a || h || d) &&
        u_1("div", {
          className: n.section,
          children: [
            a &&
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
                        checked: g?.closed ?? false,
                        disabled: !g?.hasCurtains || f,
                        onChange: (b) => {
                          $(b);
                        },
                      }),
                    ],
                  }),
                  !g?.hasCurtains &&
                    u_1("p", {
                      className: ee.note,
                      children:
                        "Шторы можно закрывать, когда сбор достигнет 100 мелков.",
                    }),
                ],
              }),
            h &&
              h.owned.length > 0 &&
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
                    value: h.active ?? "",
                    options: N,
                    disabled: f,
                    onChange: (b) => {
                      o(b);
                    },
                  }),
                ],
              }),
            d?.active &&
              u_1("div", {
                className: `${n.settingItem} ${ee.avatarRow}`,
                children: [
                  u_1("div", {
                    className: n.settingInfo,
                    children: [
                      u_1("img", {
                        className: ee.avatarPreview,
                        src: d.active.url,
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
                            children: "Своя картинка установлена",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u_1("div", {
                    className: ee.avatarActions,
                    children: u_1("button", {
                      type: "button",
                      className: ee.danger,
                      disabled: f,
                      onClick: () => w(true),
                      children: "Удалить",
                    }),
                  }),
                ],
              }),
          ],
        }),
      r &&
        u_1(be, {
          title: "Удалить аватарку?",
          message:
            "В профиле снова появится ваш эмодзи. Потраченное право установки не вернётся.",
          confirmText: "Удалить",
          danger: true,
          onConfirm: m,
          onClose: () => w(false),
        }),
    ],
  });
}
const Xa = [
  { id: "account", icon: un, label: "Аккаунт", color: "#3b82f6" },
  { id: "payment", icon: Tn, label: "Оплата", color: "#34c759" },
  { id: "appearance", icon: $e, label: "Оформление", color: "#8b5cf6" },
  { id: "security", icon: Sn, label: "Безопасность", color: "#ef4444" },
  { id: "privacy", icon: Mn, label: "Приватность", color: "#f59e0b" },
  { id: "notifications", icon: je, label: "Уведомления", color: "#ec4899" },
  { id: "event", icon: $e, label: "Ивент", color: "#a855f7" },
];
function si({ onClose }) {
  const a = hn();

  const i = Xa.filter((y) => y.id !== "event" || a.status === "allowed");

  const h = a1();
  const [s, d] = d("account");
  h(() => {
    if (a.status !== "allowed" && s === "event") {
      d("account");
    }
  }, [a.status, s]);
  const [C, r] = d(false);
  const [w, p] = d(false);
  const [M, f] = d({});
  const [v, I] = d({});
  const T = A_1(null);
  const P = A_1(null);
  const $ = A_1(null);
  const o = Object.values(M).some(Boolean);
  const m = Object.values(v).some(Boolean);

  const g = q_1(
    (y) => (Z) => {
      f((O) => ({
        ...O,
        [y]: Z,
      }));
    },
    []
  );

  const N = q_1(
    (y) => (Z) => {
      I((O) => ({
        ...O,
        [y]: Z,
      }));
    },
    []
  );

  const b = async () => {
    const y = [];

    if (M.account) {
      y.push(T.current?.save() ?? Promise.resolve());
    }

    if (M.notifications) {
      y.push(P.current?.save() ?? Promise.resolve());
    }

    if (M.privacy) {
      y.push($.current?.save() ?? Promise.resolve());
    }

    await Promise.all(y);
  };

  const x = (y) => {
    if (y !== s) {
      f({});
      d(y);
    }
  };

  const U = (y) => {
    f({});
    d(y);
    r(true);
  };

  const c = () => {
    f({});
    r(false);
  };

  const R = () => {
    onClose();
  };

  const E = () => {
    switch (s) {
      case "account": {
        return u_1(Ns, {
          ref: T,
          onDirtyChange: g("account"),
          onSavingChange: N("account"),
          onClose: onClose,
        });
      }
      case "payment": {
        return u_1(Ma, {});
      }
      case "appearance": {
        return u_1(La, {});
      }
      case "security": {
        return u_1(Ua, { onChangePassword: () => p(true) });
      }
      case "notifications": {
        return u_1(Ha, {
          ref: P,
          onDirtyChange: g("notifications"),
          onSavingChange: N("notifications"),
        });
      }
      case "privacy": {
        return u_1(Wa, {
          ref: $,
          onDirtyChange: g("privacy"),
          onSavingChange: N("privacy"),
        });
      }
      case "event": {
        return a.status === "allowed" ? u_1(Ya, {}) : null;
      }
    }
  };

  if (w) {
    return u_1(Zn, { onClose: onClose, onBack: () => p(false) });
  }
  const _ = o
    ? u_1("div", {
        className: n.actionBar,
        children: [
          u_1(B_1, { variant: "secondary", onClick: R, children: "Отмена" }),
          u_1(B_1, {
            variant: "primary",
            onClick: b,
            disabled: m,
            loading: m,
            children: "Сохранить",
          }),
        ],
      })
    : null;
  return u_1(M, {
    onClose: R,
    frameless: true,
    size: "wide",
    className: n.modalContainer,
    children: u_1("div", {
      className: n.settingsModal,
      children: h
        ? u_1("div", {
            className: `${n.mobilePager} ${C ? n.detailOpen : ""}`,
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
                    children: i.map((y) =>
                      u_1(
                        "button",
                        {
                          type: "button",
                          className: n.mobileMenuItem,
                          onClick: () => U(y.id),
                          children: [
                            u_1("span", {
                              className: n.mobileMenuIcon,
                              style: { background: y.color },
                              children: u_1(y.icon, { size: 16 }),
                            }),
                            u_1("span", { children: y.label }),
                            u_1("span", {
                              className: n.mobileMenuChevron,
                              children: u_1(fn, { size: 18 }),
                            }),
                          ],
                        },
                        y.id
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
                        onClick: c,
                        children: [
                          u_1(gn, { size: 22 }),
                          u_1("span", { children: "Настройки" }),
                        ],
                      }),
                      u_1("span", {
                        className: n.mobileHeaderTitle,
                        children: i.find((y) => y.id === s)?.label,
                      }),
                    ],
                  }),
                  u_1("div", { className: n.content, children: E() }),
                  _,
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
                    children: i.map((y) =>
                      u_1(
                        "button",
                        {
                          type: "button",
                          className: `${n.navItem} ${
                            s === y.id ? n.active : ""
                          }`,
                          onClick: () => x(y.id),
                          children: [
                            u_1(y.icon, { size: 24 }),
                            u_1("span", { children: y.label }),
                          ],
                        },
                        y.id
                      )
                    ),
                  }),
                ],
              }),
              u_1("div", {
                className: n.contentWrapper,
                children: [
                  u_1("div", { className: n.content, children: E() }),
                  _,
                ],
              }),
            ],
          }),
    }),
  });
}
export {
  CancelSubscriptionModal as CancelSubscriptionModal,
  Zn as ChangePasswordModal,
  Qn as DeleteAccountModal,
  $s as EnableRenewalModal,
  si as SettingsModal,
  ya as SubscriptionModal,
  V as subscriptionApi,
  li as useSettingsStore,
};
