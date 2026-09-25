import {
  ShopFrame as ShopFrame_1,
  d,
  h,
  aa,
  u as u_1,
  ab,
} from "./index-gHxZkwFX.js";
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
    o.SENTRY_RELEASE = { id: "1.1.4" };
    const n = new o.Error().stack;

    if (n) {
      o._sentryDebugIds = o._sentryDebugIds || {};
      o._sentryDebugIds[n] = "59df557a-b71b-442c-bca5-26c5b0ffde6d";
      o._sentryDebugIdIdentifier =
        "sentry-dbid-59df557a-b71b-442c-bca5-26c5b0ffde6d";
    }
  } catch {}
})();
const _ = "Sd1D";
const I = "pdE4";
const u = { frame: _, raised: I };
const w = "/public/shop";
function T() {
  const o = window.location.pathname.replace(/^\/shop\/?/, "");
  return o ? `${w}/${o}${window.location.search}` : `${w}/`;
}

export function ShopFrame(o) {
  const n = ShopFrame_1(null);
  const d = ShopFrame_1(T()).current;
  const [f, h] = d(false);
  const a = ShopFrame_1(window.location.pathname.replace(/^\/shop\/?/, ""));

  h(() => {
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

      const s = (E) => parseInt(e.getPropertyValue(E), 10) || 0;

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
      a.current = t;
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
        i();
        return;
      }

      if (t_data?.type === "itd-shop:path") {
        g(
          typeof t_data.path == "string" ? t_data.path : "",
          typeof t_data.search == "string" ? t_data.search : ""
        );
      }
    };

    const b = aa(r);
    window.addEventListener("message", l);
    window.addEventListener("resize", i);

    return () => {
      b();
      window.removeEventListener("message", l);
      window.removeEventListener("resize", i);
    };
  }, []);

  h(() => {
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
    className: `${u.frame} ${f ? u.raised : ""}`,
    src: d,
    title: "Магазин ИТД",
    sandbox:
      "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation",
  });
}

export { ShopFrame as ShopFrame };
