import {
  au,
  av,
  aw,
  ax,
  e as h_1,
  e,
  ay,
  ay as ay_1,
  aw as aw_1,
  as,
  az,
  aA,
  at,
  Y,
  av as av_1,
  E,
} from "./index-DK2L49XD.js";

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
      n._sentryDebugIds[s] = "479eb8e0-2964-488b-a6e2-7d430fd266e0";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-479eb8e0-2964-488b-a6e2-7d430fd266e0";
    }
  } catch {}
})();
const x = "jxSm";
const L = { frame: x };
const f = new RegExp(`^${ay.ALICE_EVENT}/?`);
function N() {
  const n = window.location.pathname.replace(f, "");
  return `${az}/${n}${window.location.search}`;
}

export function EventFrame(n) {
  const s = au();
  const a = av();

  const i = aw((r) => r.fetchPortal);

  const o = ax(s);

  h_1(() => {
    i();
  }, [i]);

  h_1(() => {
    if (a && !o) {
      e(ay.EVENT, true);
    }
  }, [a, o]);

  return !a || !o ? null : ay_1(R, {});
}

function R() {
  const n = aw_1(null);
  const s = aw_1(N()).current;
  const a = aw_1(window.location.pathname.replace(f, ""));
  const i = aw_1(window.location.search);

  h_1(() => {
    const o = (t) => {
      n.current?.contentWindow?.postMessage(t, window.location.origin);
    };

    const r = async (t) => {
      const e = t ? await aA() : at();
      o({ type: "itd-event:auth", token: e });
    };

    const E = (t, e) => {
      a.current = t;
      i.current = e;
      const c = `${ay.ALICE_EVENT}${t ? `/${t}` : ""}${e}`;

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
        await Y.getState().fetchProfile();
        const c = Y.getState().profile;

        if (c?.id === t_profileId) {
          av_1.getState().replaceAuthorAvatar(t_profileId, c.avatar ?? null);
        }
      }

      if (t.nickname) {
        window.dispatchEvent(new Event("event-nickname-changed"));
      }

      E(t_profileId);
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
          r(t_data.expired === true);
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
            t_data(t_data.path);
          }

          return;
        }
        case "itd-event:profile-changed": {
          m(t_data);
          return;
        }
      }
    };

    const y = as(() => {
      r(false);
    });

    window.addEventListener("message", p);

    return () => {
      y();
      window.removeEventListener("message", p);
    };
  }, []);

  h_1(() => {
    const o = window.location.pathname.replace(f, "");
    const r = window.location.search;

    if (o !== a.current || r !== i.current) {
      a.current = o;
      i.current = r;

      n.current?.contentWindow?.postMessage(
        { type: "itd-event:goto", path: o, search: r },
        window.location.origin
      );
    }
  });

  return ay_1("iframe", {
    ref: n,
    className: L.frame,
    src: s,
    title: "Ивент «Алиса AI»",
    sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
  });
}
export { EventFrame as EventFrame };
