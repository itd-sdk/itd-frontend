import {
  af,
  ag,
  ah,
  ai,
  e as h_1,
  e,
  aj,
  aj as aj_1,
  ai as ai_1,
  ad,
  ak,
  al,
  ae,
  E,
  ah as ah_1,
} from "./index-B74jCtUp.js";

import { n } from "./api-B7pJeSy-.js";
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
    const r = new n.Error().stack;

    if (r) {
      n._sentryDebugIds = n._sentryDebugIds || {};
      n._sentryDebugIds[r] = "a5bc9b95-d120-4645-a083-a98981d88cdb";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-a5bc9b95-d120-4645-a083-a98981d88cdb";
    }
  } catch {}
})();
const k = "xNRp";
const N = { frame: k };
const f = new RegExp(`^${aj.ALICE_EVENT}/?`);
function R() {
  const n = window.location.pathname.replace(f, "");
  return `${ak}/${n}${window.location.search}`;
}

export function EventFrame(n) {
  const r = af();
  const a = ag();

  const o = ah((l) => l.fetchPortal);

  const s = ai(r);

  h_1(() => {
    o();
  }, [o]);

  h_1(() => {
    if (a && !s) {
      e(aj.EVENT, true);
    }
  }, [a, s]);

  return !a || !s ? null : aj_1(L, {});
}

function L() {
  const n = ai_1(null);
  const r = ai_1(R()).current;
  const a = ai_1(window.location.pathname.replace(f, ""));

  h_1(() => {
    const o = (t) => {
      n.current?.contentWindow?.postMessage(t, window.location.origin);
    };

    const s = async (t) => {
      const e = t ? await al() : ae();
      o({ type: "itd-event:auth", token: e });
    };

    const l = (t, e) => {
      a.current = t;
      const i = `${aj.ALICE_EVENT}${t ? `/${t}` : ""}${e}`;

      if (i !== window.location.pathname + window.location.search) {
        history.replaceState(null, "", i);
      }
    };

    const E = async (t) => {
      if (typeof t.profileId != "string") {
        return;
      }
      const t_profileId = t.profileId;
      if (t.avatar) {
        await E.getState().fetchProfile();
        const i = E.getState().profile;

        if (i?.id === t_profileId) {
          ah_1.getState().replaceAuthorAvatar(t_profileId, i.avatar ?? null);
        }
      }

      if (t.nickname) {
        window.dispatchEvent(new Event("event-nickname-changed"));
      }

      n(t_profileId);
    };

    const p = (t) => {
      if (
        t.origin !== window.location.origin ||
        t.source !== n.current?.contentWindow
      ) {
        return;
      }
      const t_data = t.data;
      switch (t_data?.type) {
        case "itd-event:auth-request": {
          s(t_data.expired === true);
          return;
        }
        case "itd-event:path": {
          l(
            typeof t_data.path == "string" ? t_data.path : "",
            typeof t_data.search == "string" ? t_data.search : ""
          );
          return;
        }
        case "itd-event:navigate": {
          if (typeof t_data.path == "string" && /^\/(?!\/)/.test(t_data.path)) {
            t_data(t_data.path);
          }

          return;
        }
        case "itd-event:profile-changed": {
          E(t_data);
          return;
        }
      }
    };

    const m = ad(() => {
      s(false);
    });

    window.addEventListener("message", p);

    return () => {
      m();
      window.removeEventListener("message", p);
    };
  }, []);

  h_1(() => {
    const o = window.location.pathname.replace(f, "");

    if (o !== a.current) {
      a.current = o;

      n.current?.contentWindow?.postMessage(
        { type: "itd-event:goto", path: o, search: window.location.search },
        window.location.origin
      );
    }
  });

  return aj_1("iframe", {
    ref: n,
    className: N.frame,
    src: r,
    title: "Ивент «Алиса AI»",
    sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
  });
}
export { EventFrame as EventFrame };
