import { A, d, h, ar, as, u as u_1 } from "./index-BuVp7kGl.js";
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
      o._sentryDebugIds[n] = "597bee00-0884-4a04-9abe-0b64c7170bfc";
      o._sentryDebugIdIdentifier =
        "sentry-dbid-597bee00-0884-4a04-9abe-0b64c7170bfc";
    }
  } catch {}
})();
const T = "R8h0";
const _ = "xTHt";
const u = { frame: T, raised: _ };
const w = "/public/shop";
function x() {
  const o = window.location.pathname.replace(/^\/shop\/?/, "");
  return o ? `${w}/${o}${window.location.search}` : `${w}/`;
}

export function ShopFrame(o) {
  const n = A(null);
  const d = A(x()).current;
  const [f, h] = d(false);
  const i = A(window.location.pathname.replace(/^\/shop\/?/, ""));

  h(() => {
    const r = () => {
      const t = n.current?.contentWindow;

      if (t) {
        t.postMessage(
          { type: "itd-shop:auth", token: as() },
          window.location.origin
        );
      }
    };

    const a = () => {
      const t = n.current?.contentWindow;
      if (!t) {
        return;
      }
      const e = getComputedStyle(document.documentElement);

      const s = (v) => parseInt(e.getPropertyValue(v), 10) || 0;

      const m =
        window.innerWidth >= 1174
          ? s("--sidebar-gap") + s("--sidebar-width") + 24
          : 0;

      t.postMessage(
        { type: "itd-shop:layout", gutter: m },
        window.location.origin
      );
    };

    const g = (t, e) => {
      i.current = t;
      const s = `/shop${t ? `/${t}` : ""}${e}`;

      if (s !== window.location.pathname + window.location.search) {
        history.replaceState(null, "", s);
      }
    };

    const y = (t) => {
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
        y(t_data.url);
        return;
      }
      if (t_data?.type === "itd-shop:overlay") {
        h(!!t_data.open);
        return;
      }
      if (t_data?.type === "itd-shop:auth-request") {
        r();
        a();
        return;
      }

      if (t_data?.type === "itd-shop:path") {
        g(
          typeof t_data.path == "string" ? t_data.path : "",
          typeof t_data.search == "string" ? t_data.search : ""
        );
      }
    };

    const b = ar(r);
    window.addEventListener("message", l);
    window.addEventListener("resize", a);

    return () => {
      b();
      window.removeEventListener("message", l);
      window.removeEventListener("resize", a);
    };
  }, []);

  h(() => {
    const r = window.location.pathname.replace(/^\/shop\/?/, "");

    if (r !== i.current) {
      i.current = r;

      n.current?.contentWindow?.postMessage(
        { type: "itd-shop:goto", path: r, search: window.location.search },
        window.location.origin
      );
    }
  });

  return u_1("iframe", {
    ref: n,
    className: `${u.frame} ${f ? u.raised : ""}`,
    src: d,
    title: "Магазин ИТД",
    sandbox:
      "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation",
  });
}

export { ShopFrame as ShopFrame };
