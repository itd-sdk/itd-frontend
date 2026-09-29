import {
  at,
  au,
  av,
  aw,
  e as h_1,
  e,
  ax,
  ax as ax_1,
  av as av_1,
  ar,
  ay,
  az,
  as,
  Y,
  au as au_1,
  E,
} from "./index-D4QRo1-7.js";

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
      n._sentryDebugIds[s] = "9537c3b4-10a4-4fe9-b6f7-7e92a8260782";
      n._sentryDebugIdIdentifier =
        "sentry-dbid-9537c3b4-10a4-4fe9-b6f7-7e92a8260782";
    }
  } catch {}
})();
const L = "UIG8";
const N = { frame: L };
const d = new RegExp(`^${ax.ALICE_EVENT}/?`);
function R() {
  const n = window.location.pathname.replace(d, "");
  return `${ay}/${n}${window.location.search}`;
}

export function EventFrame(n) {
  const s = at();
  const a = au();

  const i = av((r) => r.fetchPortal);

  const o = aw(s);

  h_1(() => {
    i();
  }, [i]);

  h_1(() => {
    if (a && !o) {
      e(ax.EVENT, true);
    }
  }, [a, o]);

  return !a || !o ? null : ax_1(x, {});
}

function x() {
  const n = av_1(null);
  const s = av_1(R()).current;
  const a = av_1(window.location.pathname.replace(d, ""));
  const i = av_1(window.location.search);

  h_1(() => {
    const o = (t) => {
      n.current?.contentWindow?.postMessage(t, window.location.origin);
    };

    const r = async (t) => {
      const e = t ? await az() : as();
      o({ type: "itd-event:auth", token: e });
    };

    const E = (t, e) => {
      a.current = t;
      i.current = e;
      const c = `${ax.ALICE_EVENT}${t ? `/${t}` : ""}${e}`;

      if (c !== window.location.pathname + window.location.search) {
        history.replaceState(null, "", c);
      }
    };

    const y = async (t) => {
      if (typeof t.profileId != "string") {
        return;
      }
      const t_profileId = t.profileId;
      if (t.avatar) {
        await Y.getState().fetchProfile();
        const c = Y.getState().profile;

        if (c?.id === t_profileId) {
          au_1.getState().replaceAuthorAvatar(t_profileId, c.avatar ?? null);
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
          y(t_data);
          return;
        }
      }
    };

    const m = ar(() => {
      r(false);
    });

    window.addEventListener("message", p);

    return () => {
      m();
      window.removeEventListener("message", p);
    };
  }, []);

  h_1(() => {
    const o = window.location.pathname.replace(d, "");
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

  return ax_1("iframe", {
    ref: n,
    className: N.frame,
    src: s,
    title: "Ивент «Алиса AI»",
    sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
  });
}
export { EventFrame as EventFrame };
