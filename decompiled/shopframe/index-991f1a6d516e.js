import {
  A as A_1,
  d as d_1,
  h,
  ai,
  aj,
  u as u_1,
} from "./index-4a2211963806.js";
const x = "EaCI";
const W = "fJYf";
const d = { frame: x, raised: W };
const u = "/public/shop";
function A() {
  const s = window.location.pathname.replace(/^\/shop\/?/, "");
  return s ? `${u}/${s}${window.location.search}` : `${u}/`;
}

export function ShopFrame(s) {
  const n = A_1(null);
  const w = A_1(A()).current;
  const [h, f] = d_1(false);
  const a = A_1(window.location.pathname.replace(/^\/shop\/?/, ""));

  h(() => {
    const o = () => {
      const e = n.current?.contentWindow;

      if (e) {
        e.postMessage(
          { type: "itd-shop:auth", token: aj() },
          window.location.origin
        );
      }
    };

    const i = () => {
      const e = n.current?.contentWindow;
      if (!e) {
        return;
      }
      const t = getComputedStyle(document.documentElement);

      const r = (v) => parseInt(t.getPropertyValue(v), 10) || 0;

      const b =
        window.innerWidth >= 1174
          ? r("--sidebar-gap") + r("--sidebar-width") + 24
          : 0;

      e.postMessage(
        { type: "itd-shop:layout", gutter: b },
        window.location.origin
      );
    };

    const m = (e, t) => {
      a.current = e;
      const r = `/shop${e ? `/${e}` : ""}${t}`;

      if (r !== window.location.pathname + window.location.search) {
        history.replaceState(null, "", r);
      }
    };

    const g = (e) => {
      if (typeof e != "string") {
        return;
      }
      let t;
      try {
        t = new URL(e);
      } catch {
        return;
      }
      if (t.protocol !== "https:") {
        console.warn("Магазин просил уйти по небезопасной ссылке", t.protocol);
        return;
      }
      window.location.href = t.toString();
    };

    const p = (e) => {
      if (
        e.origin !== window.location.origin ||
        e.source !== n.current?.contentWindow
      ) {
        return;
      }
      const e_data = e.data;
      if (e_data?.type === "itd-shop:leave") {
        g(e_data.url);
        return;
      }
      if (e_data?.type === "itd-shop:overlay") {
        f(!!e_data.open);
        return;
      }
      if (e_data?.type === "itd-shop:auth-request") {
        o();
        i();
        return;
      }

      if (e_data?.type === "itd-shop:path") {
        m(
          typeof e_data.path == "string" ? e_data.path : "",
          typeof e_data.search == "string" ? e_data.search : ""
        );
      }
    };

    const y = ai(o);
    window.addEventListener("message", p);
    window.addEventListener("resize", i);

    return () => {
      y();
      window.removeEventListener("message", p);
      window.removeEventListener("resize", i);
    };
  }, []);

  h(() => {
    const o = window.location.pathname.replace(/^\/shop\/?/, "");

    if (o !== a.current) {
      a.current = o;

      n.current?.contentWindow?.postMessage(
        { type: "itd-shop:goto", path: o, search: window.location.search },
        window.location.origin
      );
    }
  });

  return u_1("iframe", {
    ref: n,
    className: `${d.frame} ${h ? d.raised : ""}`,
    src: w,
    title: "Магазин ИТД",
    sandbox:
      "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation",
  });
}

export { ShopFrame as ShopFrame };
