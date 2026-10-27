import {
  n,
  o,
  r,
  t,
  $_1 as h_1,
  o_1 as $_1,
  x_1 as R_1,
  R_1 as R_1_1,
  r as r_1,
  s,
  n as n_1,
  a as w_1,
  r_1 as r_1_1,
  a,
  o as o_1,
  x as x_1,
} from "./index-BQxlThnW-portal20261026.js";

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
      n._sentryDebugIds[s] = "7c5b8920-06b3-40ff-9512-eac298fe0267";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-7c5b8920-06b3-40ff-9512-eac298fe0267";
    }
  } catch {}
})();
const k = "IEXh";
const L = { frame: k };
const d = new RegExp(`^${R_1.ALICE_EVENT}/?`);
function N() {
  const n = window.location.pathname.replace(d, "");
  return `${n_1}/${n}${window.location.search}`;
}

export function EventFrame(n) {
  const s = n();
  const r = o();

  const i = r((a) => a.fetchPortal);

  const o = t(s);

  h_1(() => {
    i();
  }, [i]);

  h_1(() => {
    if (r && !o) {
      $_1(R_1.EVENT, true);
    }
  }, [r, o]);

  return !r || !o ? null : R_1_1(x, {});
}

function x() {
  const n = r_1(null);
  const s = r_1(N()).current;
  const r = r_1(window.location.pathname.replace(d, ""));
  const i = r_1(window.location.search);

  h_1(() => {
    const o = (t) => {
      n.current?.contentWindow?.postMessage(t, window.location.origin);
    };

    const a = async (t) => {
      const e = t ? await w_1() : r_1_1();
      o({ type: "itd-event:auth", token: e });
    };

    const E = (t, e) => {
      r.current = t;
      i.current = e;
      const c = `${R_1.ALICE_EVENT}${t ? `/${t}` : ""}${e}`;

      if (c !== window.location.pathname + window.location.search) {
        history.replaceState(null, "", c);
      }
    };

    const m = async (t) => {
      if (typeof t.profileId != "string") {
        return;
      }
      const t_profileId = t.profileId;
      if (t.avatar) {
        await a.getState().fetchProfile();
        const c = a.getState().profile;

        if (c?.id === t_profileId) {
          o_1.getState().replaceAuthorAvatar(t_profileId, c.avatar ?? null);
        }
      }

      if (t.nickname) {
        window.dispatchEvent(new Event("event-nickname-changed"));
      }

      x_1(t_profileId);
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
          a(t_data.expired === true);
          return;
        }
        case "itd-event:path": {
          E(
            typeof t_data.path == "string" ? t_data.path : "",
            typeof t_data.search == "string" ? t_data.search : ""
          );
          return;
        }
        case "itd-event:navigate": {
          if (typeof t_data.path == "string" && /^\/(?!\/)/.test(t_data.path)) {
            $_1(t_data.path);
          }

          return;
        }
        case "itd-event:profile-changed": {
          m(t_data);
          return;
        }
      }
    };

    const y = s(() => {
      a(false);
    });

    window.addEventListener("message", p);

    return () => {
      y();
      window.removeEventListener("message", p);
    };
  }, []);

  h_1(() => {
    const o = window.location.pathname.replace(d, "");
    const a = window.location.search;

    if (o !== r.current || a !== i.current) {
      r.current = o;
      i.current = a;

      n.current?.contentWindow?.postMessage(
        { type: "itd-event:goto", path: o, search: a },
        window.location.origin
      );
    }
  });

  return R_1_1("iframe", {
    ref: n,
    className: L.frame,
    src: s,
    title: "Ивент «Алиса AI»",
    sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
  });
}
export { EventFrame as EventFrame };
