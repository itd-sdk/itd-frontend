import {
  al,
  K,
  ax,
  X,
  a1,
  ak,
  h as h_1,
  R_1 as $_1,
  R as R_1,
  K as K_1,
  ak as ak_1,
  ai,
  bn,
} from "./index-4a2211963806.js";

const h = (e) => e.slice(al.route.length).replace(/^\//, "");
function R(e, n) {
  return e.length > 512 ||
    n.length > 2048 ||
    /[\\#?]/.test(e) ||
    e.includes("..") ||
    e.startsWith("/") ||
    (n && !n.startsWith("?"))
    ? null
    : `${al.route}${e ? `/${e}` : ""}${n}`;
}
const x = (e) => typeof e == "string" && /^\/(?!\/)/.test(e);
let g = 0;
async function H(e) {
  if (typeof e != "string" || K.getState().profile?.id !== e) {
    return;
  }
  const n = ++g;
  for (const a of [0, 750, 2000 /* 2e3 */]) {
    if (a) {
      await new Promise((t) => setTimeout(t, a));
    }

    if (n !== g || K.getState().profile?.id !== e) {
      return;
    }

    try {
      const t = await ax.getMyProfile();
      if (n !== g || K.getState().profile?.id !== e || t.id !== e) {
        return;
      }
      t.halloween = X(t.halloween);
      K.getState().setProfile(t);

      if (t.username) {
        ax.updateProfileCache(t.username, { halloween: t.halloween });
      }

      a1.getState().replaceAuthorHalloween(e, t.halloween);

      window.dispatchEvent(
        new CustomEvent("halloween-profile-refreshed", { detail: e })
      );
    } catch {}
  }
}
function T(e, n, a, t) {
  return e && a?.visible
    ? "active"
    : n && t?.visible
    ? "checking"
    : !e || n
    ? "loading"
    : "closed";
}
const W = "l81n";
const F = "skdO";
const L = "k5Sg";
const M = "ZHBT";
const c = { shell: W, viewport: F, waiting: L, frame: M };

const y = (e) => (typeof e == "string" ? e : "");

export const EventFrame = () => {
  const { loaded, event, lastEvent, error } = ak();
  const r = T(loaded, error, event, lastEvent);
  const o = r === "checking";

  h_1(() => {
    if (r === "closed") {
      $_1(R_1.EVENT, true);
    }
  }, [r]);

  return r === "closed"
    ? null
    : r === "loading"
    ? K_1("div", {
        className: c.shell,
        children: K_1("p", {
          className: c.waiting,
          role: "status",
          children: error
            ? "Не удалось проверить доступ к ивенту. Повторим при восстановлении связи."
            : "Загружаем ивент…",
        }),
      })
    : K_1("div", {
        className: c.shell,
        "aria-busy": o,
        children: [
          K_1("div", {
            className: c.viewport,
            inert: o || undefined,
            children: K_1(O, {}),
          }),
          o &&
            K_1("p", {
              className: c.waiting,
              role: "status",
              children: "Проверяем доступ к ивенту…",
            }),
        ],
      });
};

function O() {
  const e = ak_1(null);

  const n = ak_1(
    `${al.framePath}/${h(window.location.pathname)}${window.location.search}`
  ).current;

  const a = ak_1(h(window.location.pathname));
  const t = ak_1(window.location.search);

  h_1(() => {
    const r = (s) => bn(e.current, s);

    const o = (s, i) => {
      a.current = s;
      t.current = i;
      const f = R(s, i);

      if (f && f !== window.location.pathname + window.location.search) {
        history.replaceState(null, "", f);
      }
    };

    const p = (s) => {
      if (
        s.origin !== window.location.origin ||
        s.source !== e.current?.contentWindow
      ) {
        return;
      }
      const s_data = s.data;
      switch (s_data?.type) {
        case "itd-event:auth-request": {
          r(s_data.expired === true);
          return;
        }
        case "itd-event:path": {
          o(y(s_data.path), y(s_data.search));
          return;
        }
        case "itd-event:navigate": {
          if (x(s_data.path)) {
            $_1(s_data.path);
          }

          return;
        }
        case "itd-event:profile-changed": {
          if (typeof s_data.profileId == "string") {
            H(s_data.profileId);
          }

          return;
        }
        case "itd-event:settings-changed": {
          window.dispatchEvent(new Event("halloween-settings-changed"));
          return;
        }
      }
    };

    const S = ai(() => {
      r(false);
    });

    window.addEventListener("message", p);

    return () => {
      S();
      window.removeEventListener("message", p);
    };
  }, []);

  h_1(() => {
    const r = h(window.location.pathname);
    const o = window.location.search;

    if (r !== a.current || o !== t.current) {
      a.current = r;
      t.current = o;

      e.current?.contentWindow?.postMessage(
        { type: "itd-event:goto", path: r, search: o },
        window.location.origin
      );
    }
  });

  return K_1("iframe", {
    ref: e,
    className: c.frame,
    src: n,
    title: `Ивент «${al.title}»`,
    sandbox:
      "allow-scripts allow-same-origin allow-forms allow-popups allow-downloads",
  });
}
export { EventFrame as EventFrame };
