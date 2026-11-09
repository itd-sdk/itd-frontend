import { u } from "./index-dnACTU3c.js";
import { P } from "./index-uEKPzfFB.js";
import "./index-CiDq3Nyc.js";
import "./index-CTpGM1z1.js";
import "./PhoneAccess.module-BmvgF3ui.js";
(() => {
  try {
    const e =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "1.1.2" };
    const t = new e.Error().stack;

    if (t) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[t] = "99a5cbe9-fbf6-4bd5-86ce-4f1122c522a7";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-99a5cbe9-fbf6-4bd5-86ce-4f1122c522a7";
    }
  } catch {}
})();
export const Register = (e) => u(P, { intent: "sign-up" });
export { Register as Register, Register as default };
