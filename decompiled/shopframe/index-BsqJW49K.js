import { A as A_1, d, y, aa, u as u_1, ab } from "./index-DDTOXJaD.js";
(() => {
  try {
    const o =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    o.SENTRY_RELEASE = { id: "1.1.2" };
    const n = new o.Error().stack;

    if (n) {
      o._sentryDebugIds = o._sentryDebugIds || {};
      o._sentryDebugIds[n] = "d377acf9-3fad-468d-be01-47dff2f75d05";
      o._sentryDebugIdIdentifier =
        "sentry-dbid-d377acf9-3fad-468d-be01-47dff2f75d05";
    }
  } catch {}
})();
const _ = "cAaq";
const A = "BaQX";
const u = { frame: _, raised: A };
const f = "/public/shop";
function I() {
  const o = window.location.pathname.replace(/^\/shop\/?/, "");
  return o ? `${f}/${o}${window.location.search}` : `${f}/`;
}

export function ShopFrame(o) {
  const n = A_1(null);
  const d = A_1(I()).current;
  const [w, h] = d(false);
  const a = A_1(window.location.pathname.replace(/^\/shop\/?/, ""));

  y(() => {
    const r = () => {
      const t = n.current?.contentWindow;

      if (t) {
        t.postMessage(
          { type: "itd-shop:auth", token: ab() },
          window.location.origin
        );
      }
    };

    const i = () => {
      const t = n.current?.contentWindow;
      if (!t) {
        return;
      }
      const e = getComputedStyle(document.documentElement);

      const s = (v) => parseInt(e.getPropertyValue(v), 10) || 0;

      const b =
        window.innerWidth >= 1174
          ? s("--sidebar-gap") + s("--sidebar-width") + 24
          : 0;

      t.postMessage(
        { type: "itd-shop:layout", gutter: b },
        window.location.origin
      );
    };

    const y = (t, e) => {
      a.current = t;
      const s = `/shop${t ? `/${t}` : ""}${e}`;

      if (s !== window.location.pathname + window.location.search) {
        history.replaceState(null, "", s);
      }
    };

    const g = (t) => {
      if (typeof t != "string") {
        return;
      }
      let e;
      try {
        e = new URL(t);
      } catch {
        return;
      }
      if (e.protocol !== "https:") {
        console.warn("Магазин просил уйти по небезопасной ссылке", e.protocol);
        return;
      }
      window.location.href = e.toString();
    };

    const l = (t) => {
      if (
        t.origin !== window.location.origin ||
        t.source !== n.current?.contentWindow
      ) {
        return;
      }
      const t_data = t.data;
      if (t_data?.type === "itd-shop:leave") {
        g(t_data.url);
        return;
      }
      if (t_data?.type === "itd-shop:overlay") {
        h(!!t_data.open);
        return;
      }
      if (t_data?.type === "itd-shop:auth-request") {
        r();
        i();
        return;
      }

      if (t_data?.type === "itd-shop:path") {
        y(
          typeof t_data.path == "string" ? t_data.path : "",
          typeof t_data.search == "string" ? t_data.search : ""
        );
      }
    };

    const m = aa(r);
    window.addEventListener("message", l);
    window.addEventListener("resize", i);

    return () => {
      m();
      window.removeEventListener("message", l);
      window.removeEventListener("resize", i);
    };
  }, []);

  y(() => {
    const r = window.location.pathname.replace(/^\/shop\/?/, "");

    if (r !== a.current) {
      a.current = r;

      n.current?.contentWindow?.postMessage(
        { type: "itd-shop:goto", path: r, search: window.location.search },
        window.location.origin
      );
    }
  });

  return u_1("iframe", {
    ref: n,
    className: `${u.frame} ${w ? u.raised : ""}`,
    src: d,
    title: "Магазин ИТД",
    sandbox:
      "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation",
  });
}

export { ShopFrame as ShopFrame };
