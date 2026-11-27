import {
  b1,
  U,
  K as h_1,
  ai as $_1,
  R as R_1,
  u as u_1,
  A,
  ai,
  b2,
  aj,
  K,
  a1,
  b3,
} from "./index-4a2211963806.js";

const l = b1((t) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    try {
      const i = await U.get("/v1/portal");
      t({ portal: i, loaded: true });
    } catch {
      t({ loaded: true });
    }
  },
}));

const R = () => l((t) => t.portal);

const _ = () => l((t) => t.loaded);

const v = "/public/events/aliceai";
function k(t) {
  if (!t.active || !t.url) {
    return false;
  }
  try {
    return new URL(t.url, window.location.origin).pathname.startsWith(`${v}/`);
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

const C = "pzRy";
const N = { frame: C };
const u = new RegExp(`^${R_1.ALICE_EVENT}/?`);
function x() {
  const t = window.location.pathname.replace(u, "");
  return `${v}/${t}${window.location.search}`;
}

export function EventFrame(t) {
  const i = R();
  const r = _();

  const c = l((o) => o.fetchPortal);

  const a = k(i);

  h_1(() => {
    c();
  }, [c]);

  h_1(() => {
    if (r && !a) {
      $_1(R_1.EVENT, true);
    }
  }, [r, a]);

  return !r || !a ? null : u_1(V, {});
}

function V() {
  const t = A(null);
  const i = A(x()).current;
  const r = A(window.location.pathname.replace(u, ""));
  const c = A(window.location.search);

  h_1(() => {
    const a = (n) => {
      t.current?.contentWindow?.postMessage(n, window.location.origin);
    };

    const o = async (n) => {
      const e = n ? await b2() : aj();
      a({ type: "itd-event:auth", token: e });
    };

    const E = (n, e) => {
      r.current = n;
      c.current = e;
      const s = `${R_1.ALICE_EVENT}${n ? `/${n}` : ""}${e}`;

      if (s !== window.location.pathname + window.location.search) {
        history.replaceState(null, "", s);
      }
    };

    const y = async (n) => {
      if (typeof n.profileId != "string") {
        return;
      }
      const n_profileId = n.profileId;
      if (n.avatar) {
        await K.getState().fetchProfile();
        const s = K.getState().profile;

        if (s?.id === n_profileId) {
          a1.getState().replaceAuthorAvatar(n_profileId, s.avatar ?? null);
        }
      }

      if (n.nickname) {
        window.dispatchEvent(new Event("event-nickname-changed"));
      }

      b3(n_profileId);
    };

    const p = (n) => {
      if (
        n.origin !== window.location.origin ||
        n.source !== t.current?.contentWindow
      ) {
        return;
      }
      const n_data = n.data;
      switch (n_data?.type) {
        case "itd-event:auth-request": {
          o(n_data.expired === true).catch(() =>
            console.warn("[alice-frame] Не удалось обновить вход в ивент")
          );
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
          y(n_data).catch(() =>
            console.warn(
              "[alice-frame] Не удалось обновить профиль после изменения в ивенте"
            )
          );
          return;
        }
      }
    };

    const A = ai(() => {
      o(false).catch(() =>
        console.warn("[alice-frame] Не удалось передать обновлённый вход")
      );
    });

    window.addEventListener("message", p);

    return () => {
      A();
      window.removeEventListener("message", p);
    };
  }, []);

  h_1(() => {
    const a = window.location.pathname.replace(u, "");
    const o = window.location.search;

    if (a !== r.current || o !== c.current) {
      r.current = a;
      c.current = o;

      t.current?.contentWindow?.postMessage(
        { type: "itd-event:goto", path: a, search: o },
        window.location.origin
      );
    }
  });

  return u_1("iframe", {
    ref: t,
    className: N.frame,
    src: i,
    title: "Ивент «Алиса AI»",
    sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
  });
}
export { EventFrame as EventFrame };
