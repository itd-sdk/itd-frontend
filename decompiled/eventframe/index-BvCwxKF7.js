import {
  Z,
  Q,
  a as h_1,
  s as $_1,
  a1 as __1,
  h_1 as h_1_1,
  A,
  s,
  a0,
  l as l_1,
  a,
  b as b_1,
  a1,
} from "./index-AoERIL5v.js";

const l = Z((e) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    try {
      const s = await Q.get("/v1/portal");
      e({ portal: s, loaded: true });
    } catch {
      e({ loaded: true });
    }
  },
}));

const b = () => l((e) => e.portal);

const k = () => l((e) => e.loaded);

const m = "/public/events/aliceai";
function C(e) {
  if (!e.active || !e.url) {
    return false;
  }
  try {
    return new URL(e.url, window.location.origin).pathname.startsWith(`${m}/`);
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

const N = "mK5n";
const R = { frame: N };
const f = new RegExp(`^${__1.ALICE_EVENT}/?`);
function x() {
  const e = window.location.pathname.replace(f, "");
  return `${m}/${e}${window.location.search}`;
}

export function EventFrame(e) {
  const s = b();
  const r = k();

  const i = l((a) => a.fetchPortal);

  const o = C(s);

  h_1(() => {
    i();
  }, [i]);

  h_1(() => {
    if (r && !o) {
      $_1(__1.EVENT, true);
    }
  }, [r, o]);

  return !r || !o ? null : h_1_1(V, {});
}

function V() {
  const e = A(null);
  const s = A(x()).current;
  const r = A(window.location.pathname.replace(f, ""));
  const i = A(window.location.search);

  h_1(() => {
    const o = (n) => {
      e.current?.contentWindow?.postMessage(n, window.location.origin);
    };

    const a = async (n) => {
      const t = n ? await a0() : l_1();
      o({ type: "itd-event:auth", token: t });
    };

    const E = (n, t) => {
      r.current = n;
      i.current = t;
      const c = `${__1.ALICE_EVENT}${n ? `/${n}` : ""}${t}`;

      if (c !== window.location.pathname + window.location.search) {
        history.replaceState(null, "", c);
      }
    };

    const y = async (n) => {
      if (typeof n.profileId != "string") {
        return;
      }
      const n_profileId = n.profileId;
      if (n.avatar) {
        await a.getState().fetchProfile();
        const c = a.getState().profile;

        if (c?.id === n_profileId) {
          b_1.getState().replaceAuthorAvatar(n_profileId, c.avatar ?? null);
        }
      }

      if (n.nickname) {
        window.dispatchEvent(new Event("event-nickname-changed"));
      }

      a1(n_profileId);
    };

    const w = (n) => {
      if (
        n.origin !== window.location.origin ||
        n.source !== e.current?.contentWindow
      ) {
        return;
      }
      const n_data = n.data;
      switch (n_data?.type) {
        case "itd-event:auth-request": {
          a(n_data.expired === true);
          return;
        }
        case "itd-event:path": {
          E(
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
          y(n_data);
          return;
        }
      }
    };

    const A = s(() => {
      a(false);
    });

    window.addEventListener("message", w);

    return () => {
      A();
      window.removeEventListener("message", w);
    };
  }, []);

  h_1(() => {
    const o = window.location.pathname.replace(f, "");
    const a = window.location.search;

    if (o !== r.current || a !== i.current) {
      r.current = o;
      i.current = a;

      e.current?.contentWindow?.postMessage(
        { type: "itd-event:goto", path: o, search: a },
        window.location.origin
      );
    }
  });

  return h_1_1("iframe", {
    ref: e,
    className: R.frame,
    src: s,
    title: "Ивент «Алиса AI»",
    sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
  });
}
export { EventFrame as EventFrame };
