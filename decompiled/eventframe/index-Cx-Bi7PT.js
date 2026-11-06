import {
  l_1 as __1,
  Q,
  a as h_1,
  a1 as $_1,
  R as R_1,
  u as u_1,
  __1 as _1,
  s,
  a0,
  l as l_1,
  a,
  b,
  a1,
} from "./index-CR_1arh8.js";

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
    const a = new e.Error().stack;

    if (a) {
      e._sentryDebugIds = e._sentryDebugIds || {};
      e._sentryDebugIds[a] = "25b63f3e-40b4-4072-ae12-89eaeee4603b";
      e._sentryDebugIdIdentifier =
        "sentry-dbid-25b63f3e-40b4-4072-ae12-89eaeee4603b";
    }
  } catch {}
})();

const l = __1((e) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    try {
      const a = await Q.get("/v1/portal");
      e({ portal: a, loaded: true });
    } catch {
      e({ loaded: true });
    }
  },
}));

const L = () => l((e) => e.portal);

const R = () => l((e) => e.loaded);

const E = "/public/events/aliceai";
function k(e) {
  if (!e.active || !e.url) {
    return false;
  }
  try {
    return new URL(e.url, window.location.origin).pathname.startsWith(`${E}/`);
  } catch {
    return false;
  }
}

if (typeof window !== "undefined") {
  setInterval(() => {
    if (!document.hidden) {
      l.getState().fetchPortal();
    }
  }, 15000 /* 15e3 */);

  window.addEventListener("focus", () => {
    l.getState().fetchPortal();
  });
}

const N = "d7Gm";
const C = { frame: N };
const u = new RegExp(`^${R_1.ALICE_EVENT}/?`);
function x() {
  const e = window.location.pathname.replace(u, "");
  return `${E}/${e}${window.location.search}`;
}

export function EventFrame(e) {
  const a = L();
  const r = R();

  const s = l((i) => i.fetchPortal);

  const o = k(a);

  h_1(() => {
    s();
  }, [s]);

  h_1(() => {
    if (r && !o) {
      $_1(R_1.EVENT, true);
    }
  }, [r, o]);

  return !r || !o ? null : u_1(V, {});
}

function V() {
  const e = _1(null);
  const a = _1(x()).current;
  const r = _1(window.location.pathname.replace(u, ""));
  const s = _1(window.location.search);

  h_1(() => {
    const o = (n) => {
      e.current?.contentWindow?.postMessage(n, window.location.origin);
    };

    const i = async (n) => {
      const t = n ? await a0() : l_1();
      o({ type: "itd-event:auth", token: t });
    };

    const y = (n, t) => {
      r.current = n;
      s.current = t;
      const c = `${R_1.ALICE_EVENT}${n ? `/${n}` : ""}${t}`;

      if (c !== window.location.pathname + window.location.search) {
        history.replaceState(null, "", c);
      }
    };

    const m = async (n) => {
      if (typeof n.profileId != "string") {
        return;
      }
      const n_profileId = n.profileId;
      if (n.avatar) {
        await a.getState().fetchProfile();
        const c = a.getState().profile;

        if (c?.id === n_profileId) {
          b.getState().replaceAuthorAvatar(n_profileId, c.avatar ?? null);
        }
      }

      if (n.nickname) {
        window.dispatchEvent(new Event("event-nickname-changed"));
      }

      a1(n_profileId);
    };

    const p = (n) => {
      if (
        n.origin !== window.location.origin ||
        n.source !== e.current?.contentWindow
      ) {
        return;
      }
      const n_data = n.data;
      switch (n_data?.type) {
        case "itd-event:auth-request": {
          i(n_data.expired === true);
          return;
        }
        case "itd-event:path": {
          y(
            typeof n_data.path == "string" ? n_data.path : "",
            typeof n_data.search == "string" ? n_data.search : ""
          );
          return;
        }
        case "itd-event:navigate": {
          if (typeof n_data.path == "string" && /^\/(?!\/)/.test(n_data.path)) {
            $_1(n_data.path);
          }

          return;
        }
        case "itd-event:profile-changed": {
          m(n_data);
          return;
        }
      }
    };

    const b = s(() => {
      i(false);
    });

    window.addEventListener("message", p);

    return () => {
      b();
      window.removeEventListener("message", p);
    };
  }, []);

  h_1(() => {
    const o = window.location.pathname.replace(u, "");
    const i = window.location.search;

    if (o !== r.current || i !== s.current) {
      r.current = o;
      s.current = i;

      e.current?.contentWindow?.postMessage(
        { type: "itd-event:goto", path: o, search: i },
        window.location.origin
      );
    }
  });

  return u_1("iframe", {
    ref: e,
    className: C.frame,
    src: a,
    title: "Ивент «Алиса AI»",
    sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
  });
}
export { EventFrame as EventFrame };
