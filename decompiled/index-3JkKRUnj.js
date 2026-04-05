const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BEeYRwfD.js",
      "assets/index-Vt6rge9z.css",
      "assets/index-DhA3Qpju.js",
      "assets/index-CtZaEv3W.js",
      "assets/IconBrand-9cbVOmzo.js",
      "assets/IconLogout-BlTH3BRF.js",
      "assets/IconPerson-CyyWLm1K.js",
      "assets/IconSearch-DUvoIXCY.js",
      "assets/index-BK3tZy1c.css",
      "assets/index-RWLDe6S5.js",
      "assets/index-CwT4EOQM.js",
      "assets/index-2JhX-IcI.css",
      "assets/index-Bxf28ACg.css",
      "assets/index-Bp5YvSlA.js",
      "assets/IconNotificationMention-DwO-jf5X.js",
      "assets/index-C74YckKO.css",
      "assets/index-B0TopsW_.js",
      "assets/index-ysVQEOk1.css",
      "assets/index-TKeTK4oM.js",
      "assets/index-ZVkbsz1m.css",
      "assets/index-C-Rm8vZQ.js",
      "assets/IconChevronLeft-CCrTlQyY.js",
      "assets/index-DIXM3pTD.css",
      "assets/index-DpRAnJP-.js",
      "assets/index-AYDzWHMv.js",
      "assets/index-DK1lyy5c.css",
      "assets/index-CrT7rloM.js",
      "assets/index-Cmj9rins.css",
      "assets/IconEyeOff-B8ROWGNO.js",
      "assets/index-2ed4UA7H.css",
      "assets/index-BjtYR4mU.js",
      "assets/index-BkV84Ei0.css",
      "assets/index-Bk3XoqhG.js",
      "assets/index-BuSB1rTU.css",
      "assets/index-uqKOWr5a.js",
      "assets/index-AyR1xSDo.css",
      "assets/index-QoJW8Ixy.js",
      "assets/index-BYDms0MW.css",
      "assets/index-DafpkPwK.js",
      "assets/index-DYMxdUD-.css",
      "assets/index-BQ9vNL_e.js",
      "assets/index-BfSyWtIY.css",
      "assets/index-nuIdaB6B.js",
      "assets/index-Tfl7NUeb.css",
      "assets/index-B9_uYOhE.js",
      "assets/index-DxopF78T.css",
      "assets/index-CZsFHpc8.js",
      "assets/index-sgOc3eJB.css",
      "assets/index-C98lTN8f.js",
      "assets/index-CYFMj30R.css",
      "assets/index-DQMqfHSX.js",
      "assets/index-m8m8PtY3.css",
      "assets/index-ByEqAr9-.js",
      "assets/index-DlXH7sLZ.css",
      "assets/index-DpksjKpD.js",
      "assets/index-DcwPAf74.css",
      "assets/index-BBGl1AA3.js",
      "assets/index-cSZoRzaS.css",
      "assets/index-C0Or9gof.js",
      "assets/index-CndHYrx2.css",
    ])
) => i.map((i) => d[i]);
(() => {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) {
    return;
  }
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) {
    o(s);
  }
  new MutationObserver((s) => {
    for (const i of s) {
      if (i.type === "childList") {
        for (const a of i.addedNodes) {
          if (a.tagName === "LINK" && a.rel === "modulepreload") {
            o(a);
          }
        }
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function n(s) {
    const i = {};

    if (s.integrity) {
      i.integrity = s.integrity;
    }

    if (s.referrerPolicy) {
      i.referrerPolicy = s.referrerPolicy;
    }

    if (s.crossOrigin === "use-credentials") {
      i.credentials = "include";
    } else if (s.crossOrigin === "anonymous") {
      i.credentials = "omit";
    } else {
      i.credentials = "same-origin";
    }

    return i;
  }
  function o(s) {
    if (s.ep) {
      return;
    }
    s.ep = true;
    const i = n(s);
    fetch(s.href, i);
  }
})();
let sn;
let ne;
let xo;
let xt;
let Ar;
let Oo;
let Lo;
let Mo;
let fr;
let er;
let tr;
let $o;
const nn = {};
const Do = [];
const zs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function rt(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function mr(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function ot(e, t, n) {
  let o;
  let s;
  let i;
  const a = {};
  for (i in t) {
    if (i == "key") {
      o = t[i];
    } else if (i == "ref") {
      s = t[i];
    } else {
      a[i] = t[i];
    }
  }

  if (arguments.length > 2) {
    a.children = arguments.length > 3 ? sn.call(arguments, 2) : n;
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (i in e.defaultProps) {
      if (a[i] === undefined) {
        a[i] = e.defaultProps[i];
      }
    }
  }

  return Jt(e, a, o, s, null);
}
function Jt(e, t, n, o, s) {
  const i = {
    type: e,
    props: t,
    key: n,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: s ?? ++xo,
    __i: -1,
    __u: 0,
  };

  if (s == null && ne.vnode != null) {
    ne.vnode(i);
  }

  return i;
}
function qs() {
  return { current: null };
}
function Re(e) {
  return e.children;
}

class Ke {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  setState(e, t) {
    let n;

    n =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = rt({}, this.state));

    if (typeof e == "function") {
      e = e(rt({}, n), this.props);
    }

    if (e) {
      rt(n, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      nr(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      this.__e = true;
      e && this.__h.push(e);
      nr(this);
    }
  }
}

function Bt(e, t) {
  if (t == null) {
    return e.__ ? Bt(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? Bt(e) : null;
}
function Uo(e) {
  let t;
  let n;
  if ((e = e.__) != null && e.__c != null) {
    e.__e = null;
    e.__c.base = null;

    for (t = 0; t < e.__k.length; t++) {
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    }

    return Uo(e);
  }
}
function nr(e) {
  if (
    (!e.__d && (e.__d = true) && xt.push(e) && !kn.__r++) ||
    Ar != ne.debounceRendering
  ) {
    ((Ar = ne.debounceRendering) || Oo)(kn);
  }
}
function kn() {
  let e;
  let t;
  let n;
  let o;
  let s;
  let i;
  let a;
  let c = 1;

  while (xt.length) {
    if (xt.length > c) {
      xt.sort(Lo);
    }

    e = xt.shift();
    c = xt.length;

    if (e.__d) {
      n = undefined;
      o = undefined;
      s = (o = (t = e).__v).__e;
      i = [];
      a = [];

      t.__P &&
        (((n = rt({}, o)).__v = o.__v + 1),
        ne.vnode && ne.vnode(n),
        pr(
          t.__P,
          n,
          o,
          t.__n,
          t.__P.namespaceURI,
          32 & o.__u ? [s] : null,
          i,
          s ?? Bt(o),
          !!(32 & o.__u),
          a
        ),
        (n.__v = o.__v),
        (n.__.__k[n.__i] = n),
        Ho(i, n, a),
        (o.__e = o.__ = null),
        n.__e != s && Uo(n));
    }
  }

  kn.__r = 0;
}
function Bo(e, t, n, o, s, i, a, c, u, l, h) {
  let d;
  let f;
  let m;
  let y;
  let g;
  let p;
  let _;
  const v = (o && o.__k) || Do;
  const t_length = t.length;
  u = Xs(n, t, v, u, t_length);

  for (d = 0; d < t_length; d++) {
    if ((m = n.__k[d]) != null) {
      f = m.__i == -1 ? nn : v[m.__i] || nn;
      m.__i = d;
      p = pr(e, m, f, s, i, a, c, u, l, h);
      y = m.__e;

      m.ref &&
        f.ref != m.ref &&
        (f.ref && gr(f.ref, null, m), h.push(m.ref, m.__c || y, m));

      g == null && y != null && (g = y);

      (_ = !!(4 & m.__u)) || f.__k === m.__k
        ? (u = Fo(m, u, e, _))
        : typeof m.type == "function" && p !== undefined
        ? (u = p)
        : y && (u = y.nextSibling);

      m.__u &= -7;
    }
  }

  n.__e = g;
  return u;
}
function Xs(e, t, n, o, s) {
  let i;
  let a;
  let c;
  let u;
  let l;
  const n_length = n.length;
  let d = n_length;
  let f = 0;
  e.__k = new Array(s);

  for (i = 0; i < s; i++) {
    if ((a = t[i]) != null && typeof a != "boolean" && typeof a != "function") {
      typeof a == "string" ||
      typeof a == "number" ||
      typeof a == "number" ||
      typeof a == "bigint" ||
      typeof a == "number" ||
      typeof a == "bigint" ||
      a.constructor == String
        ? (a = e.__k[i] = Jt(null, a, null, null, null))
        : Array_isArray(a)
        ? (a = e.__k[i] = Jt(Re, { children: a }, null, null, null))
        : a.constructor === undefined && a.__b > 0
        ? (a = e.__k[i] =
            Jt(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
        : (e.__k[i] = a);

      u = i + f;
      a.__ = e;
      a.__b = e.__b + 1;
      c = null;
      (l = a.__i = Ys(a, n, u, d)) != -1 && (d--, (c = n[l]) && (c.__u |= 2));

      c == null || c.__v == null
        ? (l == -1 && (s > n_length ? f-- : s < n_length && f++),
          typeof a.type != "function" && (a.__u |= 4))
        : l != u &&
          (l == u - 1
            ? f--
            : l == u + 1
            ? f++
            : (l > u ? f-- : f++, (a.__u |= 4)));
    } else {
      e.__k[i] = null;
    }
  }

  if (d) {
    for (i = 0; i < n_length; i++) {
      if ((c = n[i]) != null && (2 & c.__u) == 0) {
        c.__e == o && (o = Bt(c));
        Wo(c, c);
      }
    }
  }
  return o;
}
function Fo(e, t, n, o) {
  let s;
  let i;
  if (typeof e.type == "function") {
    s = e.__k;

    for (i = 0; s && i < s.length; i++) {
      if (s[i]) {
        s[i].__ = e;
        t = Fo(s[i], t, n, o);
      }
    }

    return t;
  }

  if (e.__e != t) {
    o &&
      (t && e.type && !t.parentNode && (t = Bt(e)),
      n.insertBefore(e.__e, t || null));

    t = e.__e;
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function Qe(e, t) {
  t = t || [];

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some((n) => {
        Qe(n, t);
      });
    } else {
      t.push(e);
    }
  }

  return t;
}
function Ys(e, t, n, o) {
  let s;
  let i;
  let a;

  const { key, type } = e;

  let t_n = t[n];
  const h = t_n != null && (2 & t_n.__u) == 0;
  if (
    (t_n === null && key == null) ||
    (h && key == t_n.key && type == t_n.type)
  ) {
    return n;
  }
  if (o > (h ? 1 : 0)) {
    s = n - 1;

    for (i = n + 1; s >= 0 || i < t.length; ) {
      if (
        (t_n = t[(a = s >= 0 ? s-- : i++)]) != null &&
        (2 & t_n.__u) == 0 &&
        key == t_n.key &&
        type == t_n.type
      ) {
        return a;
      }
    }
  }
  return -1;
}
function xr(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    e[t] = n == null ? "" : typeof n != "number" || zs.test(t) ? n : `${n}px`;
  }
}
function un(e, t, n, o, s) {
  let i;
  let a;
  e: if (t == "style") {
    if (typeof n == "string") {
      e.style.cssText = n;
    } else {
      if (typeof o == "string") {
        e.style.cssText = o = "";
      }

      if (o) {
        for (t in o) {
          if (!n || t in n) {
            xr(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!o || n[t] != o[t]) {
            xr(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    i = t != (t = t.replace(Mo, "$1"));
    a = t.toLowerCase();

    t =
      a in e || t == "onFocusOut" || t == "onFocusOut" || t == "onFocusIn"
        ? a.slice(2)
        : t.slice(2);

    if (!e.l) {
      e.l = {};
    }

    e.l[t + i] = n;

    if (n) {
      if (o) {
        n.u = o.u;
      } else {
        n.u = fr;
        e.addEventListener(t, i ? tr : er, i);
      }
    } else {
      e.removeEventListener(t, i ? tr : er, i);
    }
  } else {
    if (s == "http://www.w3.org/2000/svg") {
      t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    } else if (
      t != "width" &&
      t != "height" &&
      t != "href" &&
      t != "list" &&
      t != "form" &&
      t != "tabIndex" &&
      t != "download" &&
      t != "rowSpan" &&
      t != "colSpan" &&
      t != "role" &&
      t != "popover" &&
      t in e
    ) {
      try {
        e[t] = n ?? "";
        break e;
      } catch {}
    }

    if (typeof n != "function") {
      if (n == null || (n === false && t[4] != "-")) {
        e.removeAttribute(t);
      } else {
        e.setAttribute(t, t == "popover" && n == 1 ? "" : n);
      }
    }
  }
}
function Or(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t.t == null) {
        t.t = fr++;
      } else if (t.t < n.u) {
        return;
      }
      return n(ne.event ? ne.event(t) : t);
    }
  };
}
function pr(e, t, n, o, s, i, a, c, u, l) {
  let h;
  let d;
  let f;
  let m;
  let y;
  let g;
  let p;
  let _;
  let v;
  let C;
  let T;
  let w;
  let k;
  let S;
  let E;
  let R;
  let P;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & n.__u) {
    u = !!(32 & n.__u);
    i = [(c = t.__e = n.__e)];
  }

  if ((h = ne.__b)) {
    h(t);
  }

  e: if (typeof t_type == "function") {
    try {
      _ = t.props;
      v = "prototype" in t_type && t_type.prototype.render;
      C = (h = t_type.contextType) && o[h.__c];
      T = h ? (C ? C.props.value : h.__) : o;

      if (n.__c) {
        p = (d = t.__c = n.__c).__ = d.__E;
      } else {
        v
          ? (t.__c = d = new t_type(_, T))
          : ((t.__c = d = new Ke(_, T)),
            (d.constructor = t_type),
            (d.render = Zs));

        C && C.sub(d);
        d.state || (d.state = {});
        d.__n = o;
        f = d.__d = true;
        d.__h = [];
        d._sb = [];
      }

      if (v && d.__s == null) {
        d.__s = d.state;
      }

      if (v && t_type.getDerivedStateFromProps != null) {
        d.__s == d.state && (d.__s = rt({}, d.__s));
        rt(d.__s, t_type.getDerivedStateFromProps(_, d.__s));
      }

      m = d.props;
      y = d.state;
      d.__v = t;

      if (f) {
        if (
          v &&
          t_type.getDerivedStateFromProps == null &&
          d.componentWillMount != null
        ) {
          d.componentWillMount();
        }

        if (v && d.componentDidMount != null) {
          d.__h.push(d.componentDidMount);
        }
      } else {
        if (
          v &&
          t_type.getDerivedStateFromProps == null &&
          _ !== m &&
          d.componentWillReceiveProps != null
        ) {
          d.componentWillReceiveProps(_, T);
        }

        if (
          t.__v == n.__v ||
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(_, d.__s, T) === false)
        ) {
          if (t.__v != n.__v) {
            d.props = _;
            d.state = d.__s;
            d.__d = false;
          }

          t.__e = n.__e;
          t.__k = n.__k;

          t.__k.some((U) => {
            if (U) {
              U.__ = t;
            }
          });

          for (w = 0; w < d._sb.length; w++) {
            d.__h.push(d._sb[w]);
          }

          d._sb = [];

          if (d.__h.length) {
            a.push(d);
          }

          break e;
        }

        if (d.componentWillUpdate != null) {
          d.componentWillUpdate(_, d.__s, T);
        }

        if (v && d.componentDidUpdate != null) {
          d.__h.push(() => {
            d.componentDidUpdate(m, y, g);
          });
        }
      }

      d.context = T;
      d.props = _;
      d.__P = e;
      d.__e = false;
      k = ne.__r;
      S = 0;

      if (v) {
        d.state = d.__s;
        d.__d = false;

        if (k) {
          k(t);
        }

        h = d.render(d.props, d.state, d.context);

        for (E = 0; E < d._sb.length; E++) {
          d.__h.push(d._sb[E]);
        }

        d._sb = [];
      } else {
        do {
          d.__d = false;

          if (k) {
            k(t);
          }

          h = d.render(d.props, d.state, d.context);
          d.state = d.__s;
        } while (d.__d && ++S < 25);
      }

      d.state = d.__s;

      if (d.getChildContext != null) {
        o = rt(rt({}, o), d.getChildContext());
      }

      if (v && !f && d.getSnapshotBeforeUpdate != null) {
        g = d.getSnapshotBeforeUpdate(m, y);
      }

      R = h;

      if (h != null && h.type === Re && h.key == null) {
        R = Vo(h.props.children);
      }

      c = Bo(e, Array_isArray(R) ? R : [R], t, n, o, s, i, a, c, u, l);
      d.base = t.__e;
      t.__u &= -161;

      if (d.__h.length) {
        a.push(d);
      }

      if (p) {
        d.__E = d.__ = null;
      }
    } catch (U) {
      t.__v = null;

      if (u || i != null) {
        if (U.then) {
          for (
            t.__u |= u ? 160 : 128;
            c && c.nodeType == 8 && c.nextSibling;

          ) {
            c = c.nextSibling;
          }
          i[i.indexOf(c)] = null;
          t.__e = c;
        } else {
          for (P = i.length; P--; ) {
            mr(i[P]);
          }
          rr(t);
        }
      } else {
        t.__e = n.__e;
        t.__k = n.__k;

        if (!U.then) {
          rr(t);
        }
      }

      ne.__e(U, t, n);
    }
  } else {
    if (i == null && t.__v == n.__v) {
      t.__k = n.__k;
      t.__e = n.__e;
    } else {
      c = t.__e = Gs(n.__e, t, n, o, s, i, a, u, l);
    }
  }

  if ((h = ne.diffed)) {
    h(t);
  }

  return 128 & t.__u || c;
}
function rr(e) {
  if (e && e.__c) {
    e.__c.__e = true;
  }

  if (e && e.__k) {
    e.__k.forEach(rr);
  }
}
function Ho(e, t, n) {
  for (let o = 0; o < n.length; o++) {
    gr(n[o], n[++o], n[++o]);
  }

  if (ne.__c) {
    ne.__c(t, e);
  }

  e.some((s) => {
    try {
      e = s.__h;
      s.__h = [];

      e.some((i) => {
        i.call(s);
      });
    } catch (i) {
      ne.__e(i, s.__v);
    }
  });
}
function Vo(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : Array_isArray(e)
    ? e.map(Vo)
    : rt({}, e);
}
function Gs(e, t, n, o, s, i, a, c, u) {
  let l;
  let h;
  let d;
  let f;
  let m;
  let y;
  let g;
  let p = n.props || nn;

  const { props, type } = t;

  type == "svg"
    ? (s = "http://www.w3.org/2000/svg")
    : type == "math"
    ? (s = "http://www.w3.org/1998/Math/MathML")
    : s || "http://www.w3.org/1999/xhtml";

  if (i != null) {
    for (l = 0; l < i.length; l++) {
      if (
        (m = i[l]) &&
        "setAttribute" in m == !!type &&
        (type ? m.localName == type : m.nodeType == 3)
      ) {
        e = m;
        i[l] = null;
        break;
      }
    }
  }

  if (e == null) {
    if (type == null) {
      return document.createTextNode(props);
    }
    e = document.createElementNS(s, type, props.is && props);

    if (c) {
      ne.__m && ne.__m(t, i);
      c = false;
    }

    i = null;
  }
  if (type == null) {
    if (p !== props && (!c || e.data != props)) {
      e.data = props;
    }
  } else {
    i = i && sn.call(e.childNodes);

    if (!c && i != null) {
      p = {};

      for (l = 0; l < e.attributes.length; l++) {
        p[(m = e.attributes[l]).name] = m.value;
      }
    }

    for (l in p) {
      m = p[l];

      if (l != "children") {
        if (l == "dangerouslySetInnerHTML") {
          d = m;
        } else if (!(l in props)) {
          if (
            (l == "value" && "defaultValue" in props) ||
            (l == "checked" && "defaultChecked" in props)
          ) {
            continue;
          }
          un(e, l, null, m, s);
        }
      }
    }
    for (l in props) {
      m = props[l];

      switch (l) {
        case "children":
          f = m;
          break;
        case "dangerouslySetInnerHTML":
          h = m;
          break;
        case "value":
          y = m;
          break;
        case "checked":
          g = m;
          break;
        default:
          un(e, l, m, p[l], s);
          break;
      }
    }
    if (h) {
      if (!c && (!d || (h.__html != d.__html && h.__html != e.innerHTML))) {
        e.innerHTML = h.__html;
      }

      t.__k = [];
    } else {
      if (d) {
        e.innerHTML = "";
      }

      Bo(
        t.type == "template" ? e.content : e,
        Array_isArray(f) ? f : [f],
        t,
        n,
        o,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
        i,
        a,
        i ? i[0] : n.__k && Bt(n, 0),
        c,
        u
      );

      if (i != null) {
        for (l = i.length; l--; ) {
          mr(i[l]);
        }
      }
    }

    if (!c) {
      l = "value";

      type == "progress" && y == null
        ? e.removeAttribute("value")
        : y != null &&
          (y !== e[l] ||
            (type == "progress" && !y) ||
            (type == "option" && y != p[l])) &&
          un(e, l, y, p[l], s);

      l = "checked";
      g != null && g != e[l] && un(e, l, g, p[l], s);
    }
  }
  return e;
}
function gr(e, t, n) {
  try {
    if (typeof e == "function") {
      const o = typeof e.__u == "function";

      if (o) {
        e.__u();
      }

      if (!o || t != null) {
        e.__u = e(t);
      }
    } else {
      e.current = t;
    }
  } catch (s) {
    ne.__e(s, n);
  }
}
function Wo(e, t, n) {
  let o;
  let s;

  if (ne.unmount) {
    ne.unmount(e);
  }

  if ((o = e.ref)) {
    if (!o.current || o.current == e.__e) {
      gr(o, null, t);
    }
  }

  if ((o = e.__c) != null) {
    if (o.componentWillUnmount) {
      try {
        o.componentWillUnmount();
      } catch (i) {
        ne.__e(i, t);
      }
    }
    o.base = null;
    o.__P = null;
  }

  if ((o = e.__k)) {
    for (s = 0; s < o.length; s++) {
      if (o[s]) {
        Wo(o[s], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    mr(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function Zs(e, t, n) {
  return this.constructor(e, n);
}
function rn(e, t, n) {
  let o;
  let s;
  let i;
  let a;

  if (t == document) {
    t = document.documentElement;
  }

  if (ne.__) {
    ne.__(e, t);
  }

  s = (o = typeof n == "function") ? null : (n && n.__k) || t.__k;
  i = [];
  a = [];

  pr(
    t,
    (e = ((!o && n) || t).__k = ot(Re, null, [e])),
    s || nn,
    nn,
    t.namespaceURI,
    !o && n ? [n] : s ? null : t.firstChild ? sn.call(t.childNodes) : null,
    i,
    !o && n ? n : s ? s.__e : t.firstChild,
    o,
    a
  );

  Ho(i, e, a);
}
function jo(e, t) {
  rn(e, t, jo);
}
function zo(e, t, n) {
  let o;
  let s;
  let i;
  let a;
  const c = rt({}, e.props);

  if (e.type && e.type.defaultProps) {
    a = e.type.defaultProps;
  }

  for (i in t) {
    if (i == "key") {
      o = t[i];
    } else if (i == "ref") {
      s = t[i];
    } else {
      c[i] = t[i] === undefined && a != null ? a[i] : t[i];
    }
  }

  if (arguments.length > 2) {
    c.children = arguments.length > 3 ? sn.call(arguments, 2) : n;
  }

  return Jt(e.type, c, o || e.key, s || e.ref, null);
}
function Ht(e) {
  function t(n) {
    if (!this.getChildContext) {
      o = new Set();
      s = {};
      s[t.__c] = this;
      this.getChildContext = () => s;

      this.componentWillUnmount = () => {
        o = null;
      };

      this.shouldComponentUpdate = function (i) {
        if (this.props.value != i.value) {
          o.forEach((a) => {
            a.__e = true;
            nr(a);
          });
        }
      };

      this.sub = (i) => {
        o.add(i);
        const i_componentWillUnmount = i.componentWillUnmount;
        i.componentWillUnmount = () => {
          if (o) {
            o.delete(i);
          }

          if (i_componentWillUnmount) {
            i_componentWillUnmount.call(i);
          }
        };
      };
    }

    return n.children;
  }
  t.__c = `__cC${$o++}`;
  t.__ = e;
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, o) => n.children(o)).contextType = t;

  return t;
}
sn = Do.slice;

ne = {
  __e(e, t, n, o) {
    let s;
    let i;
    let a;

    while ((t = t.__)) {
      if ((s = t.__c) && !s.__) {
        try {
          if ((i = s.constructor) && i.getDerivedStateFromError != null) {
            s.setState(i.getDerivedStateFromError(e));
            a = s.__d;
          }

          if (s.componentDidCatch != null) {
            s.componentDidCatch(e, o || {});
            a = s.__d;
          }

          if (a) {
            return (s.__E = s);
          }
        } catch (c) {
          e = c;
        }
      }
    }

    throw e;
  },
};

xo = 0;

Ke.prototype.render = Re;
xt = [];

Oo =
  typeof Promise == "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout;

Lo = (e, t) => e.__v.__b - t.__v.__b;

kn.__r = 0;
Mo = /(PointerCapture)$|Capture$/i;
fr = 0;
er = Or(false);
tr = Or(true);
$o = 0;
let Ks = 0;
function r(e, t, n, o, s, i) {
  if (!t) {
    ({});
  }

  let a;
  let c;
  let u = t;
  if ("ref" in u) {
    u = {};

    for (c in t) {
      if (c == "ref") {
        a = t[c];
      } else {
        u[c] = t[c];
      }
    }
  }
  const l = {
    type: e,
    props: u,
    key: n,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: --Ks,
    __i: -1,
    __u: 0,
    __source: s,
    __self: i,
  };
  if (typeof e == "function" && (a = e.defaultProps)) {
    for (c in a) {
      if (u[c] === undefined) {
        u[c] = a[c];
      }
    }
  }

  if (ne.vnode) {
    ne.vnode(l);
  }

  return l;
}
let Tt;
let we;
let Bn;
let Lr;
let Ft = 0;
const qo = [];
const Ce = ne;

const { __b, __r, diffed, __c, unmount, __ } = Ce;

function Vt(e, t) {
  if (Ce.__h) {
    Ce.__h(we, e, Ft || t);
  }

  Ft = 0;
  const n = we.__H || (we.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function A(e) {
  Ft = 1;
  return vr(Go, e);
}
function vr(e, t, n) {
  const o = Vt(Tt++, 2);
  o.t = e;

  if (
    !o.__c &&
    ((o.__ = [
      n ? n(t) : Go(undefined, t),
      (c) => {
        const u = o.__N ? o.__N[0] : o.__[0];
        const l = o.t(u, c);

        if (u !== l) {
          o.__N = [l, o.__[1]];
          o.__c.setState({});
        }
      },
    ]),
    (o.__c = we),
    !we.__f)
  ) {
    const s = function (c, u, l) {
      if (!o.__c.__H) {
        return true;
      }
      const h = o.__c.__H.__.filter((f) => !!f.__c);
      if (h.every((f) => !f.__N)) {
        return (
          !shouldComponentUpdate || shouldComponentUpdate.call(this, c, u, l)
        );
      }
      let d = o.__c.props !== c;

      h.forEach((f) => {
        if (f.__N) {
          const m = f.__[0];
          f.__ = f.__N;
          f.__N = undefined;

          if (m !== f.__[0]) {
            d = true;
          }
        }
      });

      return (
        (shouldComponentUpdate && shouldComponentUpdate.call(this, c, u, l)) ||
        d
      );
    };
    we.__f = true;

    var { shouldComponentUpdate, componentWillUpdate } = we;

    we.componentWillUpdate = function (c, u, l) {
      if (this.__e) {
        const h = shouldComponentUpdate;
        shouldComponentUpdate = undefined;
        s(c, u, l);
        shouldComponentUpdate = h;
      }

      if (componentWillUpdate) {
        componentWillUpdate.call(this, c, u, l);
      }
    };

    we.shouldComponentUpdate = s;
  }

  return o.__N || o.__;
}
function V(e, t) {
  const n = Vt(Tt++, 3);

  if (!Ce.__s && wr(n.__H, t)) {
    n.__ = e;
    n.u = t;
    we.__H.__h.push(n);
  }
}
function cn(e, t) {
  const n = Vt(Tt++, 4);

  if (!Ce.__s && wr(n.__H, t)) {
    n.__ = e;
    n.u = t;
    we.__h.push(n);
  }
}
function I(e) {
  Ft = 5;

  return Te(
    () => ({
      current: e,
    }),
    []
  );
}
function _r(e, t, n) {
  Ft = 6;

  cn(
    () => {
      if (typeof e == "function") {
        const o = e(t());
        return () => {
          e(null);

          if (o && typeof o == "function") {
            o();
          }
        };
      }
      if (e) {
        e.current = t();

        return () => (e.current = null);
      }
    },
    n == null ? n : n.concat(e)
  );
}
function Te(e, t) {
  const n = Vt(Tt++, 7);

  if (wr(n.__H, t)) {
    n.__ = e();
    n.__H = t;
    n.__h = e;
  }

  return n.__;
}
function b(e, t) {
  Ft = 8;

  return Te(() => e, t);
}
function On(e) {
  const t = we.context[e.__c];
  const n = Vt(Tt++, 9);
  n.c = e;
  return t ? (n.__ == null && ((n.__ = true), t.sub(we)), t.props.value) : e.__;
}
function Xo(e, t) {
  if (Ce.useDebugValue) {
    Ce.useDebugValue(t ? t(e) : e);
  }
}
function Yo() {
  const e = Vt(Tt++, 11);
  if (!e.__) {
    for (var t = we.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function Qs() {
  for (let e; (e = qo.shift()); ) {
    if (e.__P && e.__H) {
      try {
        e.__H.__h.forEach(En);
        e.__H.__h.forEach(or);
        e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [];
        Ce.__e(t, e.__v);
      }
    }
  }
}

Ce.__b = (e) => {
  we = null;

  if (__b) {
    __b(e);
  }
};

Ce.__ = (e, t) => {
  if (e && t.__k && t.__k.__m) {
    e.__m = t.__k.__m;
  }

  if (__) {
    __(e, t);
  }
};

Ce.__r = (e) => {
  if (__r) {
    __r(e);
  }

  Tt = 0;
  const t = (we = e.__c).__H;

  if (t) {
    if (Bn === we) {
      t.__h = [];
      we.__h = [];

      t.__.forEach((n) => {
        if (n.__N) {
          n.__ = n.__N;
        }

        n.u = undefined;
        n.__N = undefined;
      });
    } else {
      t.__h.forEach(En);
      t.__h.forEach(or);
      t.__h = [];
      Tt = 0;
    }
  }

  Bn = we;
};

Ce.diffed = (e) => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c && e_c.__H) {
    e_c.__H.__h.length &&
      ((qo.push(e_c) !== 1 && Lr === Ce.requestAnimationFrame) ||
        ((Lr = Ce.requestAnimationFrame) || Js)(Qs));

    e_c.__H.__.forEach((n) => {
      if (n.u) {
        n.__H = n.u;
      }

      n.u = undefined;
    });
  }

  Bn = null;
  we = null;
};

Ce.__c = (e, t) => {
  t.some((n) => {
    try {
      n.__h.forEach(En);

      n.__h = n.__h.filter((o) => !o.__ || or(o));
    } catch (o) {
      t.some((s) => {
        if (s.__h) {
          s.__h = [];
        }
      });

      t = [];
      Ce.__e(o, n.__v);
    }
  });

  if (__c) {
    __c(e, t);
  }
};

Ce.unmount = (e) => {
  if (unmount) {
    unmount(e);
  }

  let t;
  const e_c = e.__c;

  if (e_c && e_c.__H) {
    e_c.__H.__.forEach((o) => {
      try {
        En(o);
      } catch (s) {
        t = s;
      }
    });

    e_c.__H = undefined;
    t && Ce.__e(t, e_c.__v);
  }
};

const Hr = typeof requestAnimationFrame == "function";
function Js(e) {
  let t;

  const n = () => {
    clearTimeout(o);

    if (Hr) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var o = setTimeout(n, 35);

  if (Hr) {
    t = requestAnimationFrame(n);
  }
}
function En(e) {
  const t = we;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    e.__c = undefined;
    e_c();
  }

  we = t;
}
function or(e) {
  const t = we;
  e.__c = e.__();
  we = t;
}
function wr(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    e.length !== t.length ||
    t.some((n, o) => n !== e[o])
  );
}
function Go(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zo(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function sr(e, t) {
  for (const n in e) {
    if (n !== "__source" && !(n in t)) {
      return true;
    }
  }
  for (const o in t) {
    if (o !== "__source" && e[o] !== t[o]) {
      return true;
    }
  }
  return false;
}
function Ko(e, t) {
  const n = t();
  const o = A({ t: { __: n, u: t } });
  const s = o[0].t;
  const [, i] = o;

  cn(() => {
    s.__ = n;
    s.u = t;

    if (Fn(s)) {
      i({ t: s });
    }
  }, [e, n, t]);

  V(() => {
    if (Fn(s)) {
      i({ t: s });
    }

    return e(() => {
      if (Fn(s)) {
        i({ t: s });
      }
    });
  }, [e]);

  return n;
}
function Fn(e) {
  let t;
  let n;

  const { u, __: _ } = e;

  try {
    const i = u();
    return !(
      ((t = _) === (n = i) && (t !== 0 || 1 / t == 1 / n)) ||
      (t != t && n != n)
    );
  } catch {
    return true;
  }
}
function Qo(e) {
  e();
}
function Jo(e) {
  return e;
}
function es() {
  return [false, Qo];
}
const ts = cn;

class ir {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  shouldComponentUpdate(e, t) {
    return sr(this.props, e) || sr(this.state, t);
  }
}

function ns(e, t) {
  function n(s) {
    const i = this.props.ref;
    const a = i == s.ref;

    if (!a && i) {
      if (i.call) {
        i(null);
      } else {
        i.current = null;
      }
    }

    if (t) {
      if (!!t(this.props, s)) {
        return !a;
      }
    }

    return sr(this.props, s);
  }
  function o(s) {
    this.shouldComponentUpdate = n;
    return ot(e, s);
  }
  o.displayName = `Memo(${e.displayName || e.name})`;
  o.prototype.isReactComponent = true;
  o.__f = true;
  o.type = e;
  return o;
}
(ir.prototype = new Ke()).isPureReactComponent = true;

const {
  __b: _b,
  __e,
  unmount: unmount_2,
  event,
  vnode,
  __r: _r_1,
  diffed: diffed_2,
} = ne;

ne.__b = (e) => {
  if (e.type && e.type.__f && e.ref) {
    e.props.ref = e.ref;
    e.ref = null;
  }

  if (_b) {
    _b(e);
  }
};
const ei =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.forward_ref")) ||
  3911;
function rs(e) {
  class t {
    constructor(n) {
      const o = Zo({}, n);
      delete o.ref;
      return e(o, n.ref || null);
    }

    static componentWillUnmount() {
      rn(null, t.v);
      t.v = null;
      t.h = null;
    }
  }

  t.$$typeof = ei;
  t.render = e;
  t.prototype.isReactComponent = true;
  t.__f = true;
  t.displayName = `ForwardRef(${e.displayName || e.name})`;
  return t;
}

const Wr = (e, t) => e == null || Qe(Qe(e).map(t));

const ti = {
  map: Wr,
  forEach: Wr,
  count(e) {
    return e ? Qe(e).length : 0;
  },
  only(e) {
    const t = Qe(e);
    if (t.length !== 1) {
      throw "Children.only";
    }
    return t[0];
  },
  toArray: Qe,
};

ne.__e = (e, t, n, o) => {
  if (e.then) {
    let s;
    for (let i = t; (i = i.__); ) {
      if ((s = i.__c) && s.__c) {
        if (t.__e == null) {
          t.__e = n.__e;
          t.__k = n.__k;
        }

        return s.__c(e, t);
      }
    }
  }
  __e(e, t, n, o);
};
function os(e, t, n) {
  if (e) {
    e.__c &&
      e.__c.__H &&
      (e.__c.__H.__.forEach((o) => {
        if (typeof o.__c == "function") {
          o.__c();
        }
      }),
      (e.__c.__H = null));

    (e = Zo({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    e.__k = e.__k && e.__k.map((o) => os(o, t, n));
  }

  return e;
}
function ss(e, t, n) {
  if (e && n) {
    e.__v = null;

    e.__k = e.__k && e.__k.map((o) => ss(o, t, n));

    e.__c &&
      e.__c.__P === t &&
      (e.__e && n.appendChild(e.__e), (e.__c.__e = true), (e.__c.__P = n));
  }

  return e;
}

class Ot {
  constructor() {
    this.__u = 0;
    this.o = null;
    this.__b = null;
  }

  componentWillUnmount() {
    this.o = [];
  }

  render(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        const n = document.createElement("div");
        const o = this.__v.__k[0].__c;
        this.__v.__k[0] = os(this.__b, n, (o.__O = o.__P));
      }
      this.__b = null;
    }
    const s = t.__a && ot(Re, null, e.fallback);

    if (s) {
      s.__u &= -33;
    }

    return [ot(Re, null, t.__a || e.children), s];
  }
}

function is(e) {
  const t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function pe(e) {
  let t;
  let n;
  let o;
  let s = null;
  function i(a) {
    if (!t) {
      e().then(
        (c) => {
          if (c) {
            s = c.default || c;
          }

          o = true;
        },
        (c) => {
          n = c;
          o = true;
        }
      );
    }

    if (n) {
      throw n;
    }

    if (!o) {
      throw t;
    }
    return s ? ot(s, a) : null;
  }
  i.displayName = "Lazy";
  i.__f = true;
  return i;
}

class Gt {
  constructor() {
    this.i = null;
    this.l = null;
  }

  render(e) {
    this.i = null;
    this.l = new Map();
    const t = Qe(e.children);

    if (e.revealOrder && e.revealOrder[0] === "b") {
      t.reverse();
    }

    for (let n = t.length; n--; ) {
      this.l.set(t[n], (this.i = [1, 0, this.i]));
    }
    return e.children;
  }
}

ne.unmount = (e) => {
  const e_c = e.__c;

  if (e_c && e_c.__R) {
    e_c.__R();
  }

  if (e_c && 32 & e.__u) {
    e.type = null;
  }

  if (unmount_2) {
    unmount_2(e);
  }
};

(Ot.prototype = new Ke()).__c = function (e, t) {
  const t_c = t.__c;
  const o = this;

  if (o.o == null) {
    o.o = [];
  }

  o.o.push(t_c);
  const s = is(o.__v);

  const a = () => {
    if (!i) {
      i = true;
      t_c.__R = null;
      s ? s(c) : c();
    }
  };

  t_c.__R = a;
  var c = () => {
    if (!--o.__u) {
      if (o.state.__a) {
        const u = o.state.__a;
        o.__v.__k[0] = ss(u, u.__c.__P, u.__c.__O);
      }
      let l;
      for (o.setState({ __a: (o.__b = null) }); (l = o.o.pop()); ) {
        l.forceUpdate();
      }
    }
  };

  if (!o.__u++ && 32 & t.__u) {
    if (32 & t.__u) {
      o.setState({ __a: (o.__b = o.__v.__k[0]) });
    }
  }

  e.then(a, a);
};

const zr = (e, t, n) => {
  if (++n[1] === n[0]) {
    e.l.delete(t);
  }

  if (e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) {
    for (n = e.i; n; ) {
      while (n.length > 3) {
        n.pop()();
      }

      if (n[1] < n[0]) {
        break;
      }
      e.i = n = n[2];
    }
  }
};
function ri(e) {
  this.getChildContext = () => e.context;

  return e.children;
}
function oi(e) {
  const t = this;
  const e_h = e.h;

  if (t.h && t.h !== e_h) {
    t.componentWillUnmount();
  }

  if (!t.v) {
    for (var o = t.__v; o !== null && !o.__m && o.__ !== null; ) {
      o = o.__;
    }
    t.h = e_h;

    t.v = {
      nodeType: 1,
      parentNode: e_h,
      childNodes: [],
      __k: { __m: o.__m },
      contains() {
        return true;
      },
      insertBefore(s, i) {
        this.childNodes.push(s);
        t.h.insertBefore(s, i);
      },
      removeChild(s) {
        this.childNodes.splice(this.childNodes.indexOf(s) >>> 1, 1);
        t.h.removeChild(s);
      },
    };
  }

  rn(ot(ri, { context: t.context }, e.__v), t.v);
}
function _t(e, t) {
  const n = ot(oi, { __v: e, h: t });
  n.containerInfo = t;
  return n;
}

(Gt.prototype = new Ke()).__a = function (e) {
  const t = this;
  const n = is(t.__v);
  const o = t.l.get(e);
  o[0]++;

  return (s) => {
    const i = () => {
      if (t.props.revealOrder) {
        o.push(s);
        zr(t, e, o);
      } else {
        s();
      }
    };

    if (n) {
      n(i);
    } else {
      i();
    }
  };
};

Gt.prototype.componentDidUpdate = Gt.prototype.componentDidMount = function () {
  const e = this;
  this.l.forEach((t, n) => {
    zr(e, n, t);
  });
};

const as =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.element")) ||
  60103;

const si =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const ii = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const ai = /[A-Z0-9]/g;
const ci = typeof document !== "undefined";

const li = (e) =>
  (typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
  ).test(e);

function cs(e, t, n) {
  if (t.__k == null) {
    t.textContent = "";
  }

  rn(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function ui(e, t, n) {
  jo(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
Ke.prototype.isReactComponent = {};

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach((e) => {
  Object.defineProperty(Ke.prototype, e, {
    configurable: true,
    get() {
      return this[`UNSAFE_${e}`];
    },
    set(t) {
      Object.defineProperty(this, e, {
        configurable: true,
        writable: true,
        value: t,
      });
    },
  });
});

function di() {}
function hi() {
  return this.cancelBubble;
}
function fi() {
  return this.defaultPrevented;
}
ne.event = (e) => {
  if (event) {
    e = event(e);
  }

  e.persist = di;
  e.isPropagationStopped = hi;
  e.isDefaultPrevented = fi;
  e.nativeEvent = e;
  return e.nativeEvent;
};
let yr;

const mi = {
  enumerable: false,
  configurable: true,
  get() {
    return this.class;
  },
};

ne.vnode = (e) => {
  if (typeof e.type == "string") {
    ((t) => {
      const { props, type } = t;

      const s = {};
      const i = !type.includes("-");
      for (let a in props) {
        let props_a = props[a];
        if (
          !(
            (a === "value" && "defaultValue" in props && props_a == null) ||
            (ci && a === "children" && type === "noscript") ||
            a === "class" ||
            a === "className"
          )
        ) {
          let u = a.toLowerCase();

          if (a === "defaultValue" && "value" in props && props.value == null) {
            a = "value";
          } else if (a === "download" && props_a === true) {
            props_a = "";
          } else if (u === "translate" && props_a === "no") {
            props_a = false;
          } else if (u[0] === "o" && u[1] === "n") {
            if (u === "ondoubleclick") {
              a = "ondblclick";
            } else if (
              u !== "onchange" ||
              (type !== "input" && type !== "textarea") ||
              li(props.type)
            ) {
              if (u === "onfocus") {
                a = "onfocusin";
              } else if (u === "onblur") {
                a = "onfocusout";
              } else if (ii.test(a)) {
                a = u;
              }
            } else {
              u = a = "oninput";
            }
          } else if (i && si.test(a)) {
            a = a.replace(ai, "-$&").toLowerCase();
          } else if (props_a === null) {
            props_a = undefined;
          }

          if (u === "oninput" && s[(a = u)]) {
            a = "oninputCapture";
          }

          s[a] = props_a;
        }
      }

      if (type == "select" && s.multiple && Array.isArray(s.value)) {
        s.value = Qe(props.children).forEach((l) => {
          l.props.selected = s.value.includes(l.props.value);
        });
      }

      if (type == "select" && s.defaultValue != null) {
        s.value = Qe(props.children).forEach((l) => {
          l.props.selected = s.multiple
            ? s.defaultValue.includes(l.props.value)
            : s.defaultValue == l.props.value;
        });
      }

      if (props.class && !props.className) {
        s.class = props.class;
        Object.defineProperty(s, "className", mi);
      } else if (
        (props.className && !props.class) ||
        (props.class && props.className)
      ) {
        s.class = s.className = props.className;
      }

      t.props = s;
    })(e);
  }

  e.$$typeof = as;

  if (vnode) {
    vnode(e);
  }
};
ne.__r = (e) => {
  if (_r_1) {
    _r_1(e);
  }

  yr = e.__c;
};
ne.diffed = (e) => {
  if (diffed_2) {
    diffed_2(e);
  }

  const { props, __e: _e_1 } = e;

  if (
    _e_1 != null &&
    e.type === "textarea" &&
    "value" in props &&
    props.value !== _e_1.value
  ) {
    _e_1.value = props.value == null ? "" : props.value;
  }

  yr = null;
};
const pi = {
  ReactCurrentDispatcher: {
    current: {
      readContext(e) {
        return yr.__n[e.__c].props.value;
      },
      useCallback: b,
      useContext: On,
      useDebugValue: Xo,
      useDeferredValue: Jo,
      useEffect: V,
      useId: Yo,
      useImperativeHandle: _r,
      useInsertionEffect: ts,
      useLayoutEffect: cn,
      useMemo: Te,
      useReducer: vr,
      useRef: I,
      useState: A,
      useSyncExternalStore: Ko,
      useTransition: es,
    },
  },
};
function gi(e) {
  return ot.bind(null, e);
}
function Ln(e) {
  return !!e && e.$$typeof === as;
}
function vi(e) {
  return Ln(e) && e.type === Re;
}
function _i(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function wi(e) {
  return Ln(e) ? zo(...arguments) : e;
}
function ls(e) {
  return !!e.__k && (rn(null, e), true);
}
function yi(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const Ci = (e, t) => e(t);

const Ti = (e, t) => e(t);

const us = Re;
const Ni = Ln;

const Zt = {
  useState: A,
  useId: Yo,
  useReducer: vr,
  useEffect: V,
  useLayoutEffect: cn,
  useInsertionEffect: ts,
  useTransition: es,
  useDeferredValue: Jo,
  useSyncExternalStore: Ko,
  startTransition: Qo,
  useRef: I,
  useImperativeHandle: _r,
  useMemo: Te,
  useCallback: b,
  useContext: On,
  useDebugValue: Xo,
  version: "18.3.1",
  Children: ti,
  render: cs,
  hydrate: ui,
  unmountComponentAtNode: ls,
  createPortal: _t,
  createElement: ot,
  createContext: Ht,
  createFactory: gi,
  cloneElement: wi,
  createRef: qs,
  Fragment: Re,
  isValidElement: Ln,
  isElement: Ni,
  isFragment: vi,
  isMemo: _i,
  findDOMNode: yi,
  Component: Ke,
  PureComponent: ir,
  memo: ns,
  forwardRef: rs,
  flushSync: Ti,
  unstable_batchedUpdates: Ci,
  StrictMode: us,
  Suspense: Ot,
  SuspenseList: Gt,
  lazy: pe,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: pi,
};

function Ei(e) {
  return {
    render(t) {
      cs(t, e);
    },
    unmount() {
      ls(e);
    },
  };
}
const Ri = "modulepreload";

const bi = (e) => `/${e}`;

const Zr = {};

const ge = (t, n, o) => {
  let s = Promise.resolve();
  if (n && n.length > 0) {
    let u = (l) =>
      Promise.all(
        l.map((h) =>
          Promise.resolve(h).then(
            (d) => ({
              status: "fulfilled",
              value: d,
            }),
            (d) => ({
              status: "rejected",
              reason: d,
            })
          )
        )
      );
    document.getElementsByTagName("link");
    const a = document.querySelector("meta[property=csp-nonce]");
    const c = a?.nonce || a?.getAttribute("nonce");
    s = u(
      n.map((l) => {
        l = bi(l);

        if (l in Zr) {
          return;
        }

        Zr[l] = true;
        const h = l.endsWith(".css");
        const d = h ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${d}`)) {
          return;
        }
        const f = document.createElement("link");
        f.rel = h ? "stylesheet" : Ri;

        if (!h) {
          f.as = "script";
        }

        f.crossOrigin = "";
        f.href = l;

        if (c) {
          f.setAttribute("nonce", c);
        }

        document.head.appendChild(f);

        if (h) {
          return new Promise((m, y) => {
            f.addEventListener("load", m);

            f.addEventListener("error", () =>
              y(new Error(`Unable to preload CSS for ${l}`))
            );
          });
        }
      })
    );
  }
  function i(a) {
    const c = new Event("vite:preloadError", { cancelable: true });
    c.payload = a;
    window.dispatchEvent(c);

    if (!c.defaultPrevented) {
      throw a;
    }
  }
  return s.then((a) => {
    for (const c of a || []) {
      if (c.status === "rejected") {
        i(c.reason);
      }
    }
    return t().catch(i);
  });
};

const Si = {};
function dn(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function ki(e, t, n) {
  let o;
  const s = /(?:\?([^#]*))?(#.*)?$/;
  const i = e.match(s);
  const a = {};
  if (i && i[1]) {
    for (let c = i[1].split("&"), u = 0; u < c.length; u++) {
      const l = c[u].split("=");
      a[decodeURIComponent(l[0])] = decodeURIComponent(l.slice(1).join("="));
    }
  }
  e = ar(e.replace(s, ""));
  t = ar(t || "");
  for (let h = Math.max(e.length, t.length), d = 0; d < h; d++) {
    if (t[d] && t[d].charAt(0) === ":") {
      const f = t[d].replace(/(^:|[+*?]+$)/g, "");
      const m = (t[d].match(/[+*?]+$/) || Si)[0] || "";
      const y = ~m.indexOf("+");
      const g = ~m.indexOf("*");
      const p = e[d] || "";
      if (!p && !g && (!m.includes("?") || y)) {
        o = false;
        break;
      }
      a[f] = decodeURIComponent(p);

      if (y || g) {
        a[f] = e.slice(d).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[d] !== e[d]) {
      o = false;
      break;
    }
  }
  return (n.default === true || o !== false) && a;
}
function Ii(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function Pi(e, t) {
  e.index = t;

  e.rank = ((n) => (n.props.default ? 0 : ar(n.props.path).map(Ai).join("")))(
    e
  );

  return e.props;
}
function ar(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function Ai(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const xi = {};
const Lt = [];
const en = [];
let Fe = null;
const Cr = { url: Tr() };
const ds = Ht(Cr);
function Oi() {
  const e = On(ds);
  if (e === Cr) {
    const t = A()[1];
    V(() => {
      en.push(t);

      return () => en.splice(en.indexOf(t), 1);
    }, []);
  }
  return [e, $];
}
function Tr() {
  let e;
  return `${
    (e =
      Fe && Fe.location
        ? Fe.location
        : Fe && Fe.getCurrentLocation
        ? Fe.getCurrentLocation()
        : typeof location !== "undefined"
        ? location
        : xi).pathname || ""
  }${e.search || ""}`;
}

export function $(e, t = false) {
  if (typeof e != "string" && e.url) {
    t = e.replace;
    e = e.url;
  }

  if (
    ((n) => {
      for (let o = Lt.length; o--; ) {
        if (Lt[o].canRoute(n)) {
          return true;
        }
      }
      return false;
    })(e)
  ) {
    ((n, o = "push") => {
      if (Fe && Fe[o]) {
        Fe[o](n);
      } else if (typeof history !== "undefined" && history[`${o}State`]) {
        history[`${o}State`](null, null, n);
      }
    })(e, t ? "replace" : "push");
  }

  return hs(e);
}

function hs(e) {
  let t = false;
  for (let n = 0; n < Lt.length; n++) {
    if (Lt[n].routeTo(e)) {
      t = true;
    }
  }
  return t;
}
function Li(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return $(t);
    }
  }
}
function Mi(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function $i(e) {
  if (
    !(
      e.ctrlKey ||
      e.metaKey ||
      e.metaKey ||
      e.altKey ||
      e.metaKey ||
      e.altKey ||
      e.shiftKey ||
      e.metaKey ||
      e.altKey ||
      e.shiftKey ||
      e.button
    )
  ) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (
          e_target.hasAttribute("data-native") ||
          e_target.hasAttribute("native")
        ) {
          return;
        }
        if (Li(e_target)) {
          return Mi(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function fs(e) {
  if (e.history) {
    Fe = e.history;
  }

  this.state = { url: e.url || Tr() };
}
dn((fs.prototype = new Ke()), {
  shouldComponentUpdate(e) {
    return (
      e.static !== true ||
      e.url !== this.props.url ||
      e.url !== this.props.url ||
      e.onChange !== this.props.onChange
    );
  },
  canRoute(e) {
    const t = Qe(this.props.children);
    return this.g(t, e) !== undefined;
  },
  routeTo(e) {
    this.setState({ url: e });
    const t = this.canRoute(e);

    if (!this.p) {
      this.forceUpdate();
    }

    return t;
  },
  componentWillMount() {
    this.p = true;
  },
  componentDidMount() {
    const e = this;

    if (!Kr) {
      Kr = true;

      Fe ||
        addEventListener("popstate", () => {
          hs(Tr());
        });

      addEventListener("click", $i);
    }

    Lt.push(this);

    if (Fe) {
      this.u = Fe.listen((t) => {
        const n = t.location || t;
        e.routeTo(`${n.pathname || ""}${n.search || ""}`);
      });
    }

    this.p = false;
  },
  componentWillUnmount() {
    if (typeof this.u == "function") {
      this.u();
    }

    Lt.splice(Lt.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(Pi).sort(Ii);

    for (const o of e) {
      const s = ki(t, o.props.path, o.props);
      if (s) {
        return [o, s];
      }
    }
  },
  render(e, t) {
    let n;
    let o;
    const e_onChange = e.onChange;
    const t_url = t.url;
    let a = this.c;
    const c = this.g(Qe(e.children), t_url);

    if (c) {
      o = zo(
        c[0],
        dn(dn({ url: t_url, matches: (n = c[1]) }, n), {
          key: undefined,
          ref: undefined,
        })
      );
    }

    if (t_url !== (a && a.url)) {
      dn(
        Cr,
        (a = this.c =
          {
            url: t_url,
            previous: a && a.url,
            current: o,
            path: o ? o.props.path : null,
            matches: n,
          })
      );

      a.router = this;
      a.active = o ? [o] : [];
      for (let u = en.length; u--; ) {
        en[u]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return ot(ds.Provider, { value: a }, o);
  },
});

const Qr = (e) => {
  let t;
  const n = new Set();

  const o = (l, h) => {
    const d = typeof l == "function" ? l(t) : l;
    if (!Object.is(d, t)) {
      const f = t;

      t =
        h ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d);

      n.forEach((m) => m(t, f));
    }
  };

  const s = () => t;

  const c = {
    setState: o,
    getState: s,
    getInitialState: () => u,
    subscribe: (l) => {
      n.add(l);

      return () => n.delete(l);
    },
  };

  const u = (t = e(o, s, c));
  return c;
};

const Di = (e) => (e ? Qr(e) : Qr);

const Ui = (e) => e;

function Bi(e, t = Ui) {
  const n = Zt.useSyncExternalStore(
    e.subscribe,
    Zt.useCallback(() => t(e.getState()), [e, t]),
    Zt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  Zt.useDebugValue(n);
  return n;
}

const Jr = (e) => {
  const t = Di(e);

  const n = (o) => Bi(t, o);

  Object.assign(n, t);
  return n;
};

const it = (e) => (e ? Jr(e) : Jr);

function Nr(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      let i;

      const a = (u) => (u === null ? null : JSON.parse(u, undefined));

      const c = (i = n.getItem(s)) != null ? i : null;
      return c instanceof Promise ? c.then(a) : a(c);
    },
    setItem: (s, i) => n.setItem(s, JSON.stringify(i, undefined)),
    removeItem: (s) => n.removeItem(s),
  };
}

const cr = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise
      ? n
      : {
          then(o) {
            return cr(o)(n);
          },
          catch(o) {
            return this;
          },
        };
  } catch (n) {
    return {
      then(o) {
        return this;
      },
      catch(o) {
        return cr(o)(n);
      },
    };
  }
};

const Er = (e, t) => (n, o, s) => {
  let i = {
    storage: Nr(() => localStorage),
    partialize: (g) => g,
    version: 0,
    merge: (g, p) => ({
      ...p,
      ...g,
    }),
    ...t,
  };

  let a = false;
  const c = new Set();
  const u = new Set();
  let i_storage = i.storage;
  if (!i_storage) {
    return e(
      (...g) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        );

        n(...g);
      },
      o,
      s
    );
  }

  const h = () => {
    const g = i.partialize({ ...o() });
    return i_storage.setItem(i.name, { state: g, version: i.version });
  };

  const s_setState = s.setState;
  s.setState = (g, p) => {
    s_setState(g, p);
    return h();
  };
  const f = e(
    (...g) => {
      n(...g);
      return h();
    },
    o,
    s
  );
  s.getInitialState = () => f;
  let m;
  const y = () => {
    let p;
    if (!i_storage) {
      return;
    }
    a = false;

    c.forEach((v) => {
      let C;
      return v((C = o()) != null ? C : f);
    });

    const _ =
      (p = i.onRehydrateStorage) == null ||
      p.call(i, (g = o()) != null ? g : f) ||
      p.call(i, (g = o()) != null ? g : f) ||
      undefined;
    return cr(i_storage.getItem.bind(i_storage))(i.name)
      .then((v) => {
        if (v) {
          if (typeof v.version == "number" && v.version !== i.version) {
            if (i.migrate) {
              const C = i.migrate(v.state, v.version);
              return C instanceof Promise
                ? C.then((T) => [true, T])
                : [true, C];
            }
            console.error(
              "State loaded from storage couldn't be migrated since no migrate function was provided"
            );
          } else {
            return [false, v.state];
          }
        }
        return [false, undefined];
      })
      .then((v) => {
        let C;
        const [T, w] = v;
        m = i.merge(w, (C = o()) != null ? C : f);
        n(m, true);

        if (T) {
          return h();
        }
      })
      .then(() => {
        _?.(m, undefined);
        m = o();
        a = true;

        u.forEach((v) => v(m));
      })
      .catch((v) => {
        _?.(undefined, v);
      });
  };

  s.persist = {
    setOptions: (g) => {
      i = { ...i, ...g };

      if (g.storage) {
        i_storage = g.storage;
      }
    },
    clearStorage: () => {
      i_storage?.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => y(),
    hasHydrated: () => a,
    onHydrate: (g) => {
      c.add(g);

      return () => {
        c.delete(g);
      };
    },
    onFinishHydration: (g) => {
      u.add(g);

      return () => {
        u.delete(g);
      };
    },
  };

  if (!i.skipHydration) {
    y();
  }

  return m || f;
};

const Hi = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const Vi = () => {
  if (typeof window !== "undefined") {
    const e = localStorage.getItem("theme-storage");
    if (e) {
      try {
        return JSON.parse(e).state?.theme || "system";
      } catch {
        return "system";
      }
    }
  }
  return "system";
};

const Rn = (e) => {
  const t = e === "system" ? Hi() : e;
  document.documentElement.setAttribute("data-theme", t);
};

const Wi = it()(
  Er(
    (e) => ({
      theme: Vi(),

      setTheme: (t) => {
        Rn(t);
        e({ theme: t });
      },

      toggleTheme: () =>
        e((t) => {
          const n = t.theme === "light" ? "dark" : "light";
          Rn(n);
          return { theme: n };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (e) => {
        if (e?.theme) {
          Rn(e.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (Wi.getState().theme === "system") {
        Rn("system");
      }
    });
}

const ms = it((e) => ({
  isOpen: false,
  images: [],
  initialIndex: 0,
  open: (t, n = 0) => e({ isOpen: true, images: t, initialIndex: n }),
  close: () => e({ isOpen: false, images: [], initialIndex: 0 }),
}));

const De = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
};

function ke(e) {
  return (
    e instanceof Error && "status" in e && "code" in e && e.name === "ApiError"
  );
}
const he = {
  BAD_REQUEST: "BAD_REQUEST",
  UNAUTHORIZED: "UNAUTHORIZED",
  ACCESS_DENIED: "ACCESS_DENIED",
  ENTITY_NOT_FOUND: "ENTITY_NOT_FOUND",
  ENTITY_ALREADY_EXISTS: "ENTITY_ALREADY_EXISTS",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  BUSINESS_RULE_VIOLATION: "BUSINESS_RULE_VIOLATION",
  RATE_LIMIT_EXCEEDED: "RATE_LIMIT_EXCEEDED",
  UNKNOWN_ERROR: "UNKNOWN_ERROR",
  NETWORK_ERROR: "NETWORK_ERROR",
  TIMEOUT: "TIMEOUT",
  CAPTCHA_FAILED: "CAPTCHA_FAILED",
  OTP_INVALID: "OTP_INVALID",
  ACCOUNT_DEACTIVATED: "ACCOUNT_DEACTIVATED",
  ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED: "ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED",
  ACCOUNT_INVALID_CREDENTIALS: "ACCOUNT_INVALID_CREDENTIALS",
  ACCOUNT_TEMPORARILY_LOCKED: "ACCOUNT_TEMPORARILY_LOCKED",
  ACCOUNT_CURRENT_PASSWORD_INCORRECT: "ACCOUNT_CURRENT_PASSWORD_INCORRECT",
  SESSION_EXPIRED: "SESSION_EXPIRED",
  SESSION_REVOKED: "SESSION_REVOKED",
  SESSION_INVALID_REFRESH_TOKEN: "SESSION_INVALID_REFRESH_TOKEN",
  MISSING_FLOW_TOKEN: "MISSING_FLOW_TOKEN",
  PROFILE_USERNAME_TAKEN: "PROFILE_USERNAME_TAKEN",
  PROFILE_RESTRICTION_ACTIVE: "PROFILE_RESTRICTION_ACTIVE",
  PROFILE_MODIFICATION_RESTRICTED: "PROFILE_MODIFICATION_RESTRICTED",
  CONTENT_MODERATION_FAILED: "CONTENT_MODERATION_FAILED",
  FILE_TOO_LARGE: "FILE_TOO_LARGE",
  UNSUPPORTED_FILE_TYPE: "UNSUPPORTED_FILE_TYPE",
  UPLOAD_FAILED: "UPLOAD_FAILED",
  VIDEO_REQUIRES_VERIFICATION: "VIDEO_REQUIRES_VERIFICATION",
};
function ji(e) {
  return "accessToken" in e;
}
function zi(e) {
  return "accessToken" in e;
}
const qi = 4000; /* 4e3 */

const Ut = it((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const o = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const s = n.duration ?? qi;

    e((i) => ({
      toasts: [...i.toasts, { ...n, id: o, duration: s }],
    }));

    if (s > 0) {
      setTimeout(() => {
        t().removeToast(o);
      }, s);
    }

    return o;
  },

  removeToast: (n) => {
    e((o) => ({
      toasts: o.toasts.filter((s) => s.id !== n),
    }));
  },

  clearAll: () => {
    e({ toasts: [] });
  },
}));

const Ze = {
  success: (e, t) =>
    Ut.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) =>
    Ut.getState().addToast({ type: "error", message: e, duration: t }),
  warning: (e, t) =>
    Ut.getState().addToast({ type: "warning", message: e, duration: t }),
  info: (e, t) =>
    Ut.getState().addToast({ type: "info", message: e, duration: t }),
};

function Xi() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    t = crypto.randomUUID();
    localStorage.setItem(e, t);
  }

  return t;
}
const eo = Xi();
class ps {
  baseURL;
  defaultTimeout;
  defaultHeaders;
  accessToken = null;
  refreshTokenCallback = null;
  onUnauthorizedCallback = null;
  isRefreshing = false;
  refreshPromise = null;
  constructor(t) {
    this.baseURL = t.baseURL;
    this.defaultTimeout = t.timeout ?? 30000 /* 3e4 */;

    this.defaultHeaders = {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      ...t.headers,
    };
  }
  setAccessToken(t) {
    this.accessToken = t;
  }
  getAccessToken() {
    return this.accessToken;
  }
  setRefreshTokenCallback(t) {
    this.refreshTokenCallback = t;
  }
  setOnUnauthorizedCallback(t) {
    this.onUnauthorizedCallback = t;
  }
  notifyError(t) {
    if (t.status !== De.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        Ze.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      Ze.error(t.message || "Произошла ошибка");
    }
  }
  buildUrl(t) {
    const n = this.baseURL.replace(/\/$/, "");
    const o = t.startsWith("/") ? t : `/${t}`;
    return `${n}${o}`;
  }
  buildHeaders(t) {
    const n = new Headers({ ...this.defaultHeaders, ...t });

    if (this.accessToken) {
      n.set("Authorization", `Bearer ${this.accessToken}`);
    }

    n.set("X-Device-Id", eo);
    return n;
  }
  async handleResponse(t) {
    if (t.status === De.NO_CONTENT) {
      return null;
    }
    let n;
    try {
      n = await t.json();
    } catch {
      if (!t.ok) {
        throw this.createApiError(
          t.status,
          "Invalid response format",
          "INVALID_RESPONSE"
        );
      }
      return null;
    }
    if (!t.ok) {
      const o = n;
      const o_error = o.error;
      const i = o_error && typeof o_error == "object" ? o_error : o;
      let i_errors = i.errors;
      if (i.violations && Array.isArray(i.violations)) {
        i_errors = {};
        for (const c of i.violations) {
          if (!i_errors[c.field]) {
            i_errors[c.field] = [];
          }

          i_errors[c.field].push(c.message);
        }
      }
      throw this.createApiError(
        t.status,
        i.detail ||
          i.message ||
          i.message ||
          i.title ||
          i.message ||
          i.title ||
          "Request failed",
        i.code || this.mapStatusToErrorCode(t.status),
        i_errors
      );
    }
    return n;
  }
  mapStatusToErrorCode(t) {
    switch (t) {
      case De.BAD_REQUEST: {
        return he.BAD_REQUEST;
      }
      case De.UNAUTHORIZED: {
        return he.UNAUTHORIZED;
      }
      case De.FORBIDDEN: {
        return he.ACCESS_DENIED;
      }
      case De.NOT_FOUND: {
        return he.ENTITY_NOT_FOUND;
      }
      case De.CONFLICT: {
        return he.ENTITY_ALREADY_EXISTS;
      }
      case De.UNPROCESSABLE_ENTITY: {
        return he.VALIDATION_ERROR;
      }
      case De.TOO_MANY_REQUESTS: {
        return he.RATE_LIMIT_EXCEEDED;
      }
      default: {
        return he.UNKNOWN_ERROR;
      }
    }
  }
  createApiError(t, n, o, s) {
    const i = new Error(n);
    i.status = t;
    i.code = o;
    i.errors = s;
    i.name = "ApiError";
    return i;
  }
  async refreshAccessToken() {
    return this.refreshTokenCallback
      ? this.isRefreshing && this.refreshPromise
        ? this.refreshPromise
        : ((this.isRefreshing = true),
          (this.refreshPromise = this.refreshTokenCallback().finally(() => {
            this.isRefreshing = false;
            this.refreshPromise = null;
          })),
          this.refreshPromise)
      : null;
  }
  async executeRequest(t, n, o, s, i = false) {
    const a = this.buildUrl(n);
    const c = this.buildHeaders(s?.headers);
    const u = new AbortController();
    const l = s?.timeout ?? this.defaultTimeout;

    const h = setTimeout(() => u.abort(), l);

    try {
      const d = await fetch(a, {
        method: t,
        headers: c,
        body: o ? JSON.stringify(o) : undefined,
        signal: u.signal,
        credentials: "include",
        ...s,
      });
      clearTimeout(h);
      const f =
        n.startsWith("/auth/") ||
        n.startsWith("/sign-") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/reset-") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/reset-") ||
        n.startsWith("/login/");
      if (d.status === De.UNAUTHORIZED && !i && !f && this.accessToken) {
        const m = await this.refreshAccessToken();
        if (m) {
          this.setAccessToken(m);
          return this.executeRequest(t, n, o, s, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          De.UNAUTHORIZED,
          "Session expired",
          he.UNAUTHORIZED
        );
      }
      return await this.handleResponse(d);
    } catch (d) {
      clearTimeout(h);

      if (d instanceof Error) {
        if (d.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", he.TIMEOUT);

          if (!i) {
            this.notifyError(m);
          }

          throw m;
        }
        if (d.name === "ApiError") {
          if (!i) {
            this.notifyError(d);
          }

          throw d;
        }
        const f = this.createApiError(
          0,
          d.message || "Network error",
          he.NETWORK_ERROR
        );

        if (!i) {
          this.notifyError(f);
        }

        throw f;
      }

      throw d;
    }
  }
  async get(t, n) {
    return this.executeRequest("GET", t, undefined, n);
  }
  async post(t, n, o) {
    return this.executeRequest("POST", t, n, o);
  }
  async put(t, n, o) {
    return this.executeRequest("PUT", t, n, o);
  }
  async patch(t, n, o) {
    return this.executeRequest("PATCH", t, n, o);
  }
  async delete(t, n) {
    return this.executeRequest("DELETE", t, undefined, n);
  }
  async head(t, n) {
    const o = this.buildUrl(t);
    const s = this.buildHeaders(n?.headers);
    const i = new AbortController();
    const a = n?.timeout ?? this.defaultTimeout;

    const c = setTimeout(() => i.abort(), a);

    try {
      const u = await fetch(o, {
        method: "HEAD",
        headers: s,
        signal: i.signal,
        credentials: "include",
      });
      clearTimeout(c);
      return u.status;
    } catch (u) {
      clearTimeout(c);

      throw u instanceof Error && u.name === "AbortError"
        ? this.createApiError(0, "Request timeout", he.TIMEOUT)
        : this.createApiError(0, "Network error", he.NETWORK_ERROR);
    }
  }
  async uploadFormData(t, n, o, s = false) {
    const i = this.buildUrl(t);
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": eo };

    if (this.accessToken) {
      a.Authorization = `Bearer ${this.accessToken}`;
    }

    const c = new AbortController();
    const u = o?.timeout ?? this.defaultTimeout;

    const l = setTimeout(() => c.abort(), u);

    try {
      const h = await fetch(i, {
        method: "POST",
        headers: a,
        body: n,
        signal: c.signal,
        credentials: "include",
      });
      clearTimeout(l);

      if (h.status === De.UNAUTHORIZED && !s && this.accessToken) {
        const d = await this.refreshAccessToken();
        if (d) {
          this.setAccessToken(d);
          return this.uploadFormData(t, n, o, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          De.UNAUTHORIZED,
          "Session expired",
          he.UNAUTHORIZED
        );
      }

      return await this.handleResponse(h);
    } catch (h) {
      clearTimeout(l);

      if (h instanceof Error) {
        if (h.name === "AbortError") {
          const f = this.createApiError(0, "Request timeout", he.TIMEOUT);

          if (!s) {
            this.notifyError(f);
          }

          throw f;
        }
        if (h.name === "ApiError") {
          if (!s) {
            this.notifyError(h);
          }

          throw h;
        }
        const d = this.createApiError(
          0,
          h.message || "Network error",
          he.NETWORK_ERROR
        );

        if (!s) {
          this.notifyError(d);
        }

        throw d;
      }

      throw h;
    }
  }
}
const F = new ps({ baseURL: "/api", timeout: 30000 /* 3e4 */ });
const Ie = new ps({ baseURL: "/api/v1/auth", timeout: 30000 /* 3e4 */ });

const H = {
  auth: {
    signUp: "/sign-up",
    signIn: "/sign-in",
    verifyOtp: "/verify-otp",
    resendOtp: "/resend-otp",
    refresh: "/refresh",
    logout: "/logout",
    changePassword: "/change-password",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    loginYandex: "/login/yandex",
    loginGoogle: "/login/google",
  },
  users: {
    me: "/users/me",
    profile: (e) => `/users/${e}`,
    updateProfile: "/users/me",
    privacy: "/users/me/privacy",
    follow: (e) => `/users/${e}/follow`,
    followers: (e) => `/users/${e}/followers`,
    following: (e) => `/users/${e}/following`,
    whoToFollow: "/users/suggestions/who-to-follow",
    topClans: "/users/stats/top-clans",
    search: "/users/search",
    pins: "/users/me/pins",
    setPin: "/users/me/pin",
    followStatus: "/users/follow-status",
    block: (e) => `/users/${e}/block`,
    blocked: "/users/me/blocked",
    checkUsername: "/users/check-username",
    deleteAccount: "/users/me",
    restoreAccount: "/users/me/restore",
  },
  posts: {
    list: "/posts",
    single: (e) => `/posts/${e}`,
    create: "/posts",
    update: (e) => `/posts/${e}`,
    delete: (e) => `/posts/${e}`,
    restore: (e) => `/posts/${e}/restore`,
    like: (e) => `/posts/${e}/like`,
    repost: (e) => `/posts/${e}/repost`,
    view: (e) => `/posts/${e}/view`,
    pin: (e) => `/posts/${e}/pin`,
    pollVote: (e) => `/posts/${e}/poll/vote`,
    byUser: (e) => `/posts/user/${e}`,
    likedByUser: (e) => `/posts/user/${e}/liked`,
    wallByUser: (e) => `/posts/user/${e}/wall`,
    comments: (e) => `/posts/${e}/comments`,
  },
  comments: {
    edit: (e) => `/comments/${e}`,
    delete: (e) => `/comments/${e}`,
    restore: (e) => `/comments/${e}/restore`,
    like: (e) => `/comments/${e}/like`,
    replies: (e) => `/comments/${e}/replies`,
  },
  notifications: {
    list: "/notifications/",
    count: "/notifications/count",
    markRead: (e) => `/notifications/${e}/read`,
    markReadBatch: "/notifications/read-batch",
    markAllRead: "/notifications/read-all",
    stream: "/notifications/stream",
    settings: "/notifications/settings",
  },
  files: {
    upload: "/files/upload",
    get: (e) => `/files/${e}`,
    delete: (e) => `/files/${e}`,
  },
  reports: { create: "/reports" },
  hashtags: {
    search: "/hashtags",
    trending: "/hashtags/trending",
    posts: (e) => `/hashtags/${encodeURIComponent(e)}/posts`,
  },
  search: { global: "/search" },
  subscription: {
    status: "/v1/subscription/",
    pay: "/v1/subscription/pay",
    autoRenewal: "/v1/subscription/auto-renewal",
    bindCard: "/v1/subscription/bind-card",
    methods: "/v1/subscription/methods",
    methodDefault: (e) => `/v1/subscription/methods/${e}/default`,
    methodDelete: (e) => `/v1/subscription/methods/${e}`,
  },
  verification: {
    status: "/verification/status",
    submit: "/verification/submit",
  },
  platform: { changelog: "/platform/changelog" },
};

const dt = {
  async register(e) {
    return await Ie.post(H.auth.signUp, e);
  },
  async login(e) {
    return await Ie.post(H.auth.signIn, e);
  },
  async verifyOtp(e) {
    return await Ie.post(H.auth.verifyOtp, e);
  },
  async resendOtp(e) {
    await Ie.post(H.auth.resendOtp, e);
  },
  async refreshSession() {
    return await Ie.post(H.auth.refresh);
  },
  async logout() {
    await Ie.post(H.auth.logout);
  },
  async logoutAll() {
    await Ie.post(`${H.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await Ie.post(H.auth.forgotPassword, e);
  },
  async resetPassword(e) {
    await Ie.post(H.auth.resetPassword, e);
  },
  async changePassword(e) {
    await Ie.post(H.auth.changePassword, e);
  },
};

class Rr {
  cache = new Map();
  maxSize;
  ttl;
  constructor(t = 100, n = 300 * 1000 /* 1e3 */) {
    this.maxSize = t;
    this.ttl = n;
  }
  get(t) {
    const n = this.cache.get(t);
    if (n) {
      if (Date.now() - n.timestamp > this.ttl) {
        this.cache.delete(t);
        return;
      }
      this.cache.delete(t);
      this.cache.set(t, n);
      return n.value;
    }
  }
  set(t, n) {
    if (this.cache.has(t)) {
      this.cache.delete(t);
    }

    if (this.cache.size >= this.maxSize) {
      const o = this.cache.keys().next().value;

      if (o) {
        this.cache.delete(o);
      }
    }

    this.cache.set(t, { value: n, timestamp: Date.now() });
  }
  has(t) {
    const n = this.cache.get(t);
    return n
      ? Date.now() - n.timestamp > this.ttl
        ? (this.cache.delete(t), false)
        : true
      : false;
  }
  delete(t) {
    return this.cache.delete(t);
  }
  clear() {
    this.cache.clear();
  }
  getAge(t) {
    const n = this.cache.get(t);
    if (n) {
      return Date.now() - n.timestamp;
    }
  }
  isFresh(t, n = this.ttl) {
    const o = this.getAge(t);
    return o !== undefined && o < n;
  }
  get size() {
    return this.cache.size;
  }
  cleanup() {
    const t = Date.now();
    for (const [n, o] of this.cache.entries()) {
      if (t - o.timestamp > this.ttl) {
        this.cache.delete(n);
      }
    }
  }
}
function to(e) {
  const t = { ...e };

  if ("verified" in t && !("isVerified" in t)) {
    t.isVerified = t.verified;
  }

  if ("isVerified" in t) {
    t.isVerified = false;
  }

  if (!("isPrivate" in t) || t.isPrivate === undefined) {
    t.isPrivate = false;
  }

  if (typeof t.banner == "string") {
    t.banner = { url: t.banner };
  }

  if (!t.stats && ("followersCount" in t || "followingCount" in t)) {
    t.stats = {
      followers: t.followersCount ?? 0,
      following: t.followingCount ?? 0,
    };
  }

  if (
    !t.interaction &&
    ("isFollowing" in t ||
      "isFollowedBy" in t ||
      "isFollowedBy" in t ||
      "isBlockedByMe" in t ||
      "isFollowedBy" in t ||
      "isBlockedByMe" in t ||
      "isBlocking" in t)
  ) {
    t.interaction = {
      isFollowing: t.isFollowing ?? false,
      isFollowedBy: t.isFollowedBy ?? false,
      hasOutgoingRequest: t.hasOutgoingRequest ?? false,
      hasIncomingRequest: t.hasIncomingRequest ?? false,
      isBlocking: t.isBlocking ?? t.isBlockedByMe ?? false,
      isBlockedBy: t.isBlockedBy ?? false,
    };
  }

  if (!t.privacySettings && ("wallAccess" in t || "likesVisibility" in t)) {
    t.privacySettings = {
      whoCanPostOnWall: t.wallAccess ?? "everyone",
      whoCanSeeMyPostReactions: t.likesVisibility ?? "everyone",
    };
  }

  return t;
}
const kt = new Rr(100, 300 * 1000 /* 1e3 */);
const Yi = 60 * 1000; /* 1e3 */
setInterval(() => kt.cleanup(), 120 * 1000 /* 1e3 */);
const hn = {
  async checkUsername(e) {
    return (
      await F.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await F.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await F.get(H.users.me);
    return to(e);
  },
  async updateProfile(e) {
    return await F.put(H.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = kt.get(t);

    if (n && kt.isFresh(t, Yi)) {
      this._fetchAndCacheProfile(e, t).catch(() => {});
      return n;
    }

    if (n) {
      this._fetchAndCacheProfile(e, t).catch(() => {});
      return n;
    }

    return this._fetchAndCacheProfile(e, t);
  },
  async _fetchAndCacheProfile(e, t) {
    const n = await F.get(H.users.profile(e));
    const o = to(n);
    kt.set(t, o);
    return o;
  },
  invalidateProfileCache(e) {
    kt.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const o = kt.get(n);

    if (o) {
      kt.set(n, { ...o, ...t });
    }
  },
  async followUser(e) {
    await F.post(H.users.follow(e), {});
  },
  async unfollowUser(e) {
    await F.delete(H.users.follow(e));
  },
  async pinPost(e) {
    await F.post(H.posts.pin(e));
  },
  async unpinPost(e) {
    await F.delete(H.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await F.get(H.users.privacy);
    return {
      isPrivate: e.isPrivate ?? false,
      showLastSeen: e.showLastSeen ?? true,
      whoCanPostOnWall: e.whoCanPostOnWall ?? e.wallAccess ?? "everyone",
      whoCanSeeMyPostReactions:
        e.whoCanSeeMyPostReactions ?? e.likesVisibility ?? "everyone",
    };
  },
  async updatePrivacySettings(e) {
    const t = {};

    if (e.whoCanPostOnWall) {
      t.wallAccess = e.whoCanPostOnWall;
    }

    if (e.whoCanSeeMyPostReactions) {
      t.likesVisibility = e.whoCanSeeMyPostReactions;
    }

    if (e.showLastSeen !== undefined) {
      t.showLastSeen = e.showLastSeen;
    }

    await F.put(H.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await F.get(H.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await F.post(H.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await F.get(H.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await F.put(H.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await F.delete(H.users.setPin);
  },
  async deleteAccount() {
    await F.delete(H.users.deleteAccount);
  },
  async restoreAccount() {
    await F.post(H.users.restoreAccount);
  },
};
function jt(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const ht = new Rr(50, 300 * 1000 /* 1e3 */);
const Gi = 60 * 1000; /* 1e3 */
setInterval(() => ht.cleanup(), 120 * 1000 /* 1e3 */);
function Zi(e) {
  return {
    id: e.id,
    username: e.username,
    displayName: e.displayName,
    avatar: e.avatar,
    isVerified: e.isVerified ?? e.verified ?? false,
    hasNuksta: e.hasNuksta ?? false,
    pin: e.pin ?? null,
  };
}
function It(e) {
  const n = (e.attachments ?? []).map((l) => {
    if (l.type === "poll") {
      const h = l.options.map((d) => ({
        id: d.id,
        text: d.text,
        votes: d.votesCount ?? d.voteCount ?? d.votes ?? 0,
      }));
      return {
        ...l,
        options: h,
        totalVotes: l.totalVotes ?? 0,
        multipleChoice: l.multipleChoice ?? false,
        myVotes:
          l.votedOptionIds?.length > 0
            ? l.votedOptionIds
            : e.viewerStatus?.pollVote
            ? [e.viewerStatus.pollVote]
            : [],
        myVote: l.votedOptionIds?.[0] ?? e.viewerStatus?.pollVote ?? null,
      };
    }
    return l;
  });
  if (e.poll && !n.some((l) => l.type === "poll")) {
    const e_poll = e.poll;

    const h = {
      id: e_poll.id,
      type: "poll",
      question: e_poll.question,
      multipleChoice: e_poll.multipleChoice ?? false,
      options: (e_poll.options ?? []).map((d) => ({
        id: d.id,
        text: d.text,
        votes: d.votesCount ?? d.voteCount ?? 0,
      })),
      totalVotes: e_poll.totalVotes ?? 0,
      myVotes: e_poll.votedOptionIds ?? [],
      myVote:
        e_poll.votedOptionIds?.length > 0 ? e_poll.votedOptionIds[0] : null,
    };

    n.push(h);
  }
  const o = e.stats?.reactions ?? e.likesCount ?? 0;
  const s = e.stats?.views ?? e.viewsCount ?? 0;
  const i = e.stats?.comments ?? e.commentsCount ?? 0;
  const a = e.stats?.reposts ?? e.repostsCount ?? 0;
  const c = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const u = e.text ?? e.content ?? "";
  return {
    id: e.id,
    author: Zi(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: u,
    spans: e.spans ?? [],
    attachments: n,
    reactions: { total: o, myReaction: c },
    stats: { views: s, comments: i, reposts: a },
    originalPost: e.originalPost ? It(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const Le = {
  async getFeed(e, t = {}) {
    const n = new URLSearchParams();
    n.set("limit", String(t.limit || 20));

    n.set(
      "tab",
      e === "global" ? "popular" : e === "clan" ? "clan" : "following"
    );

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const o = n.toString();
    const s = `${H.posts.list}${o ? `?${o}` : ""}`;
    const i = await F.get(s);
    return { data: i.data.posts.map(It), nextCursor: jt(i.data) };
  },
  async getPost(e) {
    const t = await F.get(H.posts.single(e));
    return It(t.data);
  },
  async getUserWall(e, t = {}) {
    if (!t.cursor) {
      const n = e;
      const o = ht.get(n);
      const s = o && o.pinnedPostId === (t.pinnedPostId ?? null);

      if (o && s && ht.isFresh(n, Gi)) {
        this._fetchAndCacheWall(e, t, n).catch(() => {});
        return { data: o.posts, nextCursor: o.nextCursor };
      }

      if (o && s) {
        this._fetchAndCacheWall(e, t, n).catch(() => {});
        return { data: o.posts, nextCursor: o.nextCursor };
      }

      return this._fetchAndCacheWall(e, t, n);
    }
    return this._fetchWall(e, t);
  },
  async _fetchAndCacheWall(e, t, n) {
    const o = await this._fetchWall(e, t);

    ht.set(n, {
      posts: o.data,
      nextCursor: o.nextCursor,
      pinnedPostId: t.pinnedPostId ?? null,
    });

    return o;
  },
  async _fetchWall(e, t) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    n.set("sort", "new");

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    if (t.pinnedPostId) {
      n.set("pinnedPostId", t.pinnedPostId);
    }

    const o = n.toString();
    const s = `${H.posts.byUser(e)}${o ? `?${o}` : ""}`;
    const i = await F.get(s);
    return { data: i.data.posts.map(It), nextCursor: jt(i.data) };
  },
  invalidateWallCache(e) {
    ht.delete(e);
  },
  updatePostInWallCache(e, t, n) {
    const o = ht.get(e);
    if (o) {
      const s = o.posts.map((i) => (i.id === t ? { ...i, ...n } : i));
      ht.set(e, { ...o, posts: s });
    }
  },
  removePostFromWallCache(e, t) {
    const n = ht.get(e);
    if (n) {
      const o = n.posts.filter((s) => s.id !== t);
      ht.set(e, { ...n, posts: o });
    }
  },
  async likePost(e) {
    await F.post(H.posts.like(e));
  },
  async unlikePost(e) {
    await F.delete(H.posts.like(e));
  },
  async createPost(e) {
    return await F.post(H.posts.create, {
      content: e.text,
      spans: e.spans,
      wallRecipientId: e.wallOwnerId,
      attachmentIds: e.attachmentIds,
      poll: e.poll,
    });
  },
  async createRepost(e, t) {
    return await F.post(H.posts.repost(e), { content: t });
  },
  async editPost(e, t) {
    const n = t.content ?? t.text;
    await F.put(H.posts.update(e), { content: n, spans: t.spans });
  },
  async deletePost(e) {
    await F.delete(H.posts.delete(e));
  },
  async restorePost(e) {
    await F.post(H.posts.restore(e));
  },
  async trackView(e) {
    F.post(H.posts.view(e)).catch(() => {});
  },
  async trackViewsBatch(e) {
    if (e.length !== 0) {
      for (const t of e) {
        F.post(H.posts.view(t)).catch(() => {});
      }
    }
  },
  async getUserPosts(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    if (t.sort) {
      n.set("sort", t.sort);
    }

    if (t.pinnedPostId) {
      n.set("pinnedPostId", t.pinnedPostId);
    }

    const o = n.toString();
    const s = `${H.posts.byUser(e)}${o ? `?${o}` : ""}`;
    const i = await F.get(s);
    return { data: i.data.posts.map(It), nextCursor: jt(i.data) };
  },
  async getUserLikedPosts(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const o = n.toString();
    const s = `${H.posts.likedByUser(e)}${o ? `?${o}` : ""}`;
    const i = await F.get(s);
    return { data: i.data.posts.map(It), nextCursor: jt(i.data) };
  },
  async pinPost(e) {
    await F.post(H.posts.pin(e));
  },
  async unpinPost(e) {
    await F.delete(H.posts.pin(e));
  },
  async votePoll(e, t) {
    const n = await F.post(H.posts.pollVote(e), { optionIds: t });
    return n.data ?? n;
  },
  async unrepost(e) {
    await F.delete(H.posts.repost(e));
  },
  async getPostsByHashtag(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const o = n.toString();
    const s = `${H.hashtags.posts(e)}${o ? `?${o}` : ""}`;
    const i = await F.get(s);
    return { data: i.data.posts.map(It), nextCursor: jt(i.data) };
  },
};

const Ki = { new: "newest", old: "oldest", popular: "popular" };
function Qi(e) {
  return {
    id: e.id,
    username: e.username,
    displayName: e.displayName,
    avatar: e.avatar,
    isVerified: e.isVerified ?? e.verified ?? false,
    hasNuksta: e.hasNuksta ?? false,
    pin: e.pin ?? null,
  };
}
function lr(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const o = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const s = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: Qi(e.author),
    parentId: e.parentId,
    rootId: e.rootId ?? null,
    text: s,
    spans: e.spans ?? [],
    attachments: e.attachments ?? [],
    reactions: { total: t, myReaction: o },
    stats: { replies: n },
    replyTo: e.replyTo ?? null,
    previewReplies:
      e.previewReplies ?? e.replies
        ? (e.previewReplies ?? e.replies).map(lr)
        : undefined,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const et = {
  async getComments(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.sort) {
      n.set("sort", Ki[t.sort]);
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const o = n.toString();
    const s = `${H.posts.comments(e)}${o ? `?${o}` : ""}`;
    const i = await F.get(s);
    let a = [];
    let c = null;

    if (Array.isArray(i.data)) {
      a = i.data;
    } else if (i.data && "comments" in i.data) {
      a = i.data.comments;
      c = i.data.nextCursor ?? null;
    } else if (i.comments) {
      a = i.comments;
    }

    c = c ?? i.cursor ?? i.meta?.cursor?.next ?? null;
    return { data: a.map(lr), nextCursor: c };
  },
  async getReplies(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const o = n.toString();
    const s = `${H.comments.replies(e)}${o ? `?${o}` : ""}`;
    const i = await F.get(s);
    let a = [];
    let c = null;

    if (Array.isArray(i.data)) {
      a = i.data;
    } else if (i.data && "replies" in i.data) {
      a = i.data.replies;
      c = i.data.nextCursor ?? null;
    } else if (i.replies) {
      a = i.replies;
    }

    c = c ?? i.cursor ?? i.meta?.cursor?.next ?? null;
    return { data: a.map(lr), nextCursor: c };
  },
  async createComment(e, t, n, o, s) {
    return await F.post(H.posts.comments(e), {
      content: t,
      attachmentIds: s?.map((i) => i.mediaId),
    });
  },
  async createReply(e, t, n, o, s) {
    return await F.post(H.comments.replies(e), {
      content: t,
      replyToUserId: o,
      attachmentIds: s?.map((i) => i.mediaId),
    });
  },
  async editComment(e, t, n) {
    await F.patch(H.comments.edit(e), { content: t });
  },
  async deleteComment(e) {
    await F.delete(H.comments.delete(e));
  },
  async likeComment(e) {
    await F.post(H.comments.like(e));
  },
  async unlikeComment(e) {
    await F.delete(H.comments.like(e));
  },
};

const Ji = {
  like: "post_reaction",
  comment: "post_comment",
  reply: "comment_reply",
  repost: "post_repost",
  mention: "post_mention",
  follow: "follow",
  follow_request: "follow_request",
  follow_accepted: "follow_accepted",
  post_reaction: "post_reaction",
  post_comment: "post_comment",
  post_repost: "post_repost",
  comment_reaction: "comment_reaction",
  comment_reply: "comment_reply",
  post_mention: "post_mention",
  comment_mention: "comment_mention",
  wall_post: "wall_post",
};

function gs(e) {
  const t = Ji[e.type] ?? "follow";
  const n = e.entityId ?? e.targetId ?? null;
  const o = e.isRead ?? e.read ?? false;
  let s = [];

  if (e.payload?.actors) {
    s = e.payload.actors;
  } else if (e.actor) {
    s = [
      {
        id: e.actor.id,
        username: e.actor.username,
        displayName: e.actor.displayName,
        avatar: e.actor.avatar,
        isFollowing: e.actor.isFollowing,
        isFollowedBy: e.actor.isFollowedBy,
      },
    ];
  }

  const i = e.payload?.entityPreview ?? e.preview ?? null;
  return {
    id: e.id,
    type: t,
    entityId: n,
    parentEntityId: e.parentEntityId ?? null,
    isRead: o,
    payload: {
      actors: s,
      count: e.payload?.count ?? 1,
      clickUrl: e.payload?.clickUrl,
      entityPreview: i,
    },
    createdAt: e.createdAt,
    updatedAt: e.updatedAt ?? e.readAt ?? e.createdAt,
  };
}

const Nt = {
  async getNotifications(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const o = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

    if (o > 0) {
      t.set("offset", o.toString());
    }

    const s = t.toString();
    const i = `${H.notifications.list}${s ? `?${s}` : ""}`;
    const a = await F.get(i);
    const c = a.notifications ?? a.data ?? [];
    const l = a.hasMore ?? false ? String(o + c.length) : null;
    return { notifications: c.map(gs), nextCursor: l };
  },
  async getUnreadCount() {
    return (await F.get(H.notifications.count)).count;
  },
  async markAsRead(e) {
    if (e.length === 1) {
      const o = await F.post(H.notifications.markRead(e[0]));
      return { markedCount: o.markedCount ?? o.marked ?? 1 };
    }
    const t = 20;
    let n = 0;
    for (let o = 0; o < e.length; o += t) {
      const s = e.slice(o, o + t);
      const i = await F.post(H.notifications.markReadBatch, { ids: s });
      n += i.markedCount ?? i.marked ?? s.length;
    }
    return { markedCount: n };
  },
  async markAllAsRead() {
    const e = await F.post(H.notifications.markAllRead);
    return { markedCount: e.markedCount ?? e.marked ?? 0 };
  },
  async getSettings() {
    const e = await F.get(H.notifications.settings);
    return {
      webEnabled: e.webEnabled ?? e.enabled ?? true,
      soundEnabled: e.soundEnabled ?? e.sound ?? true,
      preferences: e.preferences ?? {
        follows: e.follows ?? true,
        reactions: e.reactions ?? e.likes ?? true,
        replies: e.replies ?? e.comments ?? true,
        mentions: e.mentions ?? true,
        wallPosts: e.wallPosts ?? true,
      },
    };
  },
  async updateSettings(e) {
    const t = { ...e };

    if (e.webEnabled !== undefined) {
      t.enabled = e.webEnabled;
    }

    if (e.soundEnabled !== undefined) {
      t.sound = e.soundEnabled;
    }

    if (e.preferences) {
      e.preferences.follows !== undefined &&
        (t.follows = e.preferences.follows);

      e.preferences.reactions !== undefined &&
        ((t.reactions = e.preferences.reactions),
        (t.likes = e.preferences.reactions));

      e.preferences.replies !== undefined &&
        ((t.replies = e.preferences.replies),
        (t.comments = e.preferences.replies));

      e.preferences.mentions !== undefined &&
        (t.mentions = e.preferences.mentions);

      e.preferences.wallPosts !== undefined &&
        (t.wallPosts = e.preferences.wallPosts);
    }

    await F.put(H.notifications.settings, t);
  },
};

const ea = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const ta = ["video/mp4", "video/webm", "video/quicktime"];
const ur = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const na = ".mp4,.webm,.mov";

const Dt = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await F.uploadFormData(H.files.upload, t, {
      timeout: 300 * 1000 /* 1e3 */,
    });
  },
  async deleteFile(e) {
    await F.delete(H.files.delete(e));
  },
  isValidImageType(e) {
    return ea.includes(e.type);
  },
  isValidVideoType(e) {
    return ta.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

function no(e) {
  const t = e.user ?? e;
  const n = t.id ?? e.id;
  return {
    id: e.id,
    userId: n,
    displayName: t.displayName ?? "",
    username: t.username ?? null,
    avatar: t.avatar ?? "",
    isVerified: t.isVerified ?? t.verified ?? false,
    isPrivate: t.isPrivate ?? false,
    interaction: e.interaction ?? {
      isFollowing: e.isFollowing ?? false,
      isFollowedBy: e.isFollowedBy ?? false,
      hasOutgoingRequest: e.hasOutgoingRequest ?? false,
      hasIncomingRequest: e.hasIncomingRequest ?? false,
      isBlocking: e.isBlocking ?? false,
      isBlockedBy: e.isBlockedBy ?? false,
    },
  };
}
const ft = it((e) => ({
  statuses: {},

  setStatuses: (t) =>
    e((n) => ({
      statuses: { ...n.statuses, ...t },
    })),

  setStatus: (t, n) =>
    e((o) => ({
      statuses: { ...o.statuses, [t]: n },
    })),

  clear: () => e({ statuses: {} }),
}));
let dr = new Set();
function ra() {
  if (!Hn) {
    setTimeout(async () => {
      Hn = null;
      const e = Array.from(dr);
      dr.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const o = await hr.batchFollowStatus(n);
            ft.getState().setStatuses(o);
          } catch {}
        }
      }
    }, 50);
  }
}
function oa(e) {
  const t = Ne((i) => i.profile?.id);

  const n = ft((i) => i.statuses);

  const o = I("");

  V(() => {
    if (!t) {
      return;
    }

    const i = e.filter((c) => c !== t && n[c] === undefined);

    const a = i.sort().join(",");
    if (!(a === o.current || a === "")) {
      o.current = a;
      for (const c of i) {
        dr.add(c);
      }
      ra();
    }
  }, [e, t]);

  return {
    getStatus: b(
      (i) => {
        if (i !== t) {
          return n[i];
        }
      },
      [n, t]
    ),
    statuses: n,
  };
}
const Pt = new Rr(500, 120 * 1000 /* 1e3 */);
setInterval(() => Pt.cleanup(), 60 * 1000 /* 1e3 */);

const hr = {
  async followUser(e) {
    const t = await F.post(H.users.follow(e), {});
    Pt.delete(e);
    ft.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await F.delete(H.users.follow(e));
    Pt.delete(e);
    ft.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const n = new URLSearchParams();
    const o = t.limit ?? 20;
    n.set("limit", o.toString());
    const s = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", s.toString());
    const i = n.toString();
    const a = `${H.users.followers(e)}${i ? `?${i}` : ""}`;
    const c = await F.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.followers ?? [];
    const d = u.pagination?.hasMore ?? false ? String(s + 1) : null;
    return { data: l.map(no), nextCursor: d };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const o = t.limit ?? 20;
    n.set("limit", o.toString());
    const s = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", s.toString());
    const i = n.toString();
    const a = `${H.users.following(e)}${i ? `?${i}` : ""}`;
    const c = await F.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.following ?? [];
    const d = u.pagination?.hasMore ?? false ? String(s + 1) : null;
    return { data: l.map(no), nextCursor: d };
  },
  async blockUser(e) {
    await F.post(H.users.block(e), {});
    Pt.delete(e);
  },
  async unblockUser(e) {
    await F.delete(H.users.block(e));
    Pt.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const o = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", o.toString());
    const s = t.toString();
    const i = `${H.users.blocked}${s ? `?${s}` : ""}`;
    const a = await F.get(i);
    const c = a.data ?? a;
    let u = [];

    if (Array.isArray(c.users)) {
      u = c.users;
    } else if (Array.isArray(c)) {
      u = c;
    }

    const l = u.map((f) => {
      const m = f.user ?? f;
      return {
        id: m.id,
        username: m.username ?? null,
        displayName: m.displayName ?? "",
        avatar: m.avatar ?? null,
        isVerified: m.isVerified ?? m.verified ?? false,
        isPrivate: m.isPrivate ?? false,
        isBlocked: true,
      };
    });

    const h = c.pagination?.hasMore ?? false;
    const d = h ? String(o + 1) : null;
    return { users: l, nextCursor: d, hasMore: h };
  },
  async batchFollowStatus(e) {
    if (e.length === 0) {
      return {};
    }

    return (await F.post(H.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    Pt.delete(e);
  },
  clearSocialCache() {
    Pt.clear();
  },
};

const fn = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};

const sa = {
  async createReport(e) {
    const t = await F.post(H.reports.create, e);
    return t?.data ?? t;
  },
};

const ia = {
  async getStatus() {
    return F.get(H.subscription.status);
  },
  async pay() {
    return F.post(H.subscription.pay);
  },
  async setAutoRenewal(e) {
    return F.post(H.subscription.autoRenewal, { enabled: e });
  },
  async bindCard() {
    return F.post(H.subscription.bindCard);
  },
  async getMethods() {
    return (await F.get(H.subscription.methods)).data;
  },
  async setDefaultMethod(e) {
    return F.put(H.subscription.methodDefault(e));
  },
  async deleteMethod(e) {
    return F.delete(H.subscription.methodDelete(e));
  },
};

const mn = {
  status: "idle",
  profile: null,
  email: null,
  pendingEmail: null,
  pendingPassword: null,
  flowToken: null,
  error: null,
  errorCode: null,
  canRestore: null,
  restoreDeadline: null,
};

const Ne = it()(
  Er(
    (e, t) => {
      F.setRefreshTokenCallback(async () => {
        try {
          const o = await dt.refreshSession();
          F.setAccessToken(o.accessToken);
          Ie.setAccessToken(o.accessToken);
          return o.accessToken;
        } catch (o) {
          return ke(o) && o.status >= 500
            ? (e({ status: "service_error" }), null)
            : (t().reset(), null);
        }
      });

      F.setOnUnauthorizedCallback(() => {
        if (t().status !== "service_error") {
          t().reset();
        }
      });

      return {
        ...mn,
        register: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await dt.register(o);

            e({
              status: "needs_verification",
              pendingEmail: o.email,
              pendingPassword: o.password,
              flowToken: s.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const i = ke(s) ? s.message : "Registration failed";
            const a = ke(s) ? s.code : null;
            e({ status: "unauthenticated", error: i, errorCode: a });
            throw s;
          }
        },
        login: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await dt.login(o);
            if (zi(s)) {
              F.setAccessToken(s.accessToken);
              Ie.setAccessToken(s.accessToken);
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                    status: "authenticated",
                    pendingEmail: null,
                    email: o.email,
                  });
                }
              } catch (a) {
                if (
                  ke(a) &&
                  (a.code === he.ENTITY_NOT_FOUND || a.status === 404)
                ) {
                  e({
                    status: "needs_profile",
                    pendingEmail: null,
                    email: o.email,
                  });
                } else {
                  throw a;
                }
              }
              return "authenticated";
            }
            const i = s;

            e({
              status: "needs_verification",
              pendingEmail: o.email,
              pendingPassword: o.password,
              flowToken: i.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const i = ke(s) ? s.message : "Login failed";
            const a = ke(s) ? s.code : null;
            e({ status: "unauthenticated", error: i, errorCode: a });
            throw s;
          }
        },
        verifyOtp: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail, pendingPassword, flowToken } = t();
          try {
            const c = await dt.verifyOtp({
              email: pendingEmail || "",
              password: pendingPassword || "",
              otp: o,
              flowToken: flowToken || "",
            });
            e({ pendingPassword: null });

            if (ji(c)) {
              F.setAccessToken(c.accessToken);
              Ie.setAccessToken(c.accessToken);
              const u = pendingEmail;
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                    status: "authenticated",
                    pendingEmail: null,
                    pendingPassword: null,
                    flowToken: null,
                    email: u,
                  });
                }
              } catch (l) {
                if (
                  ke(l) &&
                  (l.code === he.ENTITY_NOT_FOUND || l.status === 404)
                ) {
                  e({
                    status: "needs_profile",
                    pendingEmail: null,
                    pendingPassword: null,
                    flowToken: null,
                    email: u,
                  });
                } else {
                  throw l;
                }
              }
              return "authenticated";
            }

            e({ status: "needs_verification" });
            return "password_reset";
          } catch (c) {
            const u = ke(c) ? c.message : "Verification failed";
            const l = ke(c) ? c.code : null;
            e({ status: "needs_verification", error: u, errorCode: l });
            throw c;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail, flowToken } = t();
          try {
            await dt.resendOtp({
              email: pendingEmail || "",
              flowToken: flowToken || "",
            });
          } catch (i) {
            const a = ke(i) ? i.message : "Failed to resend code";
            const c = ke(i) ? i.code : null;
            e({ error: a, errorCode: c });
            throw i;
          }
        },
        createProfile: async (o) => {
          e({ error: null, errorCode: null });
          try {
            await hn.createProfile(o);
            await t().fetchProfile();
            e({ status: "authenticated" });
          } catch (s) {
            const i = ke(s) ? s.message : "Failed to create profile";
            const a = ke(s) ? s.code : null;
            e({ error: i, errorCode: a });
            throw s;
          }
        },
        logout: async () => {
          try {
            await dt.logout();
          } catch {
          } finally {
            F.setAccessToken(null);
            Ie.setAccessToken(null);
            e({ ...mn, status: "unauthenticated" });
          }
        },
        logoutAll: async () => {
          try {
            await dt.logoutAll();
          } catch {
          } finally {
            F.setAccessToken(null);
            Ie.setAccessToken(null);
            e({ ...mn, status: "unauthenticated" });
          }
        },
        refreshSession: async () => {
          try {
            const o = await dt.refreshSession();
            F.setAccessToken(o.accessToken);
            Ie.setAccessToken(o.accessToken);
            return o.accessToken;
          } catch (o) {
            return ke(o) && o.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const o = await hn.getMyProfile();
          if (o.isDeleted) {
            e({
              status: "account_deleted",
              profile: null,
              canRestore: o.canRestore ?? false,
              restoreDeadline: o.restoreDeadline ?? null,
            });
            return;
          }
          e({ profile: o });
        },
        initialize: async () => {
          if (
            !document.cookie
              .split(";")
              .some((s) => s.trim().startsWith("is_auth="))
          ) {
            e({ status: "unauthenticated" });
            return;
          }
          e({ status: "loading" });
          try {
            if (!(await t().refreshSession())) {
              if (t().status === "service_error") {
                return;
              }
              e({ status: "unauthenticated" });
              return;
            }
            try {
              await t().fetchProfile();

              if (t().status !== "account_deleted") {
                e({ status: "authenticated" });
              }
            } catch (i) {
              if (
                ke(i) &&
                (i.code === he.ENTITY_NOT_FOUND || i.status === 404)
              ) {
                e({ status: "needs_profile" });
              } else {
                throw i;
              }
            }
          } catch (s) {
            if (ke(s) && s.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await hn.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await hn.restoreAccount();
          await t().fetchProfile();
          const { status } = t();

          if (status === "account_deleted") {
            e({
              status: "authenticated",
              canRestore: null,
              restoreDeadline: null,
            });
          }
        },
        clearError: () => {
          e({ error: null, errorCode: null });
        },
        reset: () => {
          F.setAccessToken(null);
          Ie.setAccessToken(null);
          e({ ...mn, status: "unauthenticated" });
        },
        setProfile: (o) => {
          e({ profile: o });
        },
      };
    },
    {
      name: "auth-storage",
      storage: Nr(() => sessionStorage),
      partialize: (e) => ({
        profile: e.profile,
        email: e.email,
      }),
    }
  )
);

const aa = () => Ne((e) => e.status);

const vs = () => Ne((e) => e.profile);

const u_ = () => Ne((e) => e.status === "authenticated");

const bn = it()(
  Er(
    (e) => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      },
    }),
    { name: "settings", storage: Nr(() => localStorage) }
  )
);

const Ve = new Map();
const ca = 60 * 1000; /* 1e3 */
const la = 300 * 1000; /* 1e3 */
const ro = 20;
const oo = 500;
function ua() {
  const e = Date.now();
  for (const [t, n] of Ve.entries()) {
    if (e - n.timestamp > la) {
      Ve.delete(t);
    }
  }
  if (Ve.size > ro) {
    const t = Array.from(Ve.entries()).sort(
      (o, s) => o[1].timestamp - s[1].timestamp
    );
    t.slice(0, t.length - ro).forEach(([o]) => Ve.delete(o));
  }
}

const ue = it((e, t) => ({
  posts: [],
  activeFeed: "global",
  isLoading: false,
  isLoadingMore: false,
  isRefreshing: false,
  hasMore: true,
  nextCursor: null,
  error: null,
  feedScrollPosition: 0,
  feedMeasuredHeights: new Map(),
  highlightedPostId: null,
  highlightedCommentId: null,
  _lastPostEdit: null,
  _lastReactionUpdate: null,
  currentPost: null,
  currentPostLoading: false,
  currentPostError: false,
  comments: [],
  commentsLoading: false,
  commentsLoadingMore: false,
  commentsHasMore: true,
  commentsNextCursor: null,

  setActiveFeed: (n) => {
    if (t().activeFeed !== n) {
      t().feedMeasuredHeights.clear();

      e({
        activeFeed: n,
        posts: [],
        hasMore: true,
        nextCursor: null,
        isLoading: false,
        error: null,
        feedScrollPosition: 0,
      });
    }
  },

  fetchFeed: async (n = false) => {
    const { activeFeed, isLoading, isRefreshing } = t();
    if (!(isLoading || isRefreshing)) {
      e({ isLoading: !n, isRefreshing: n, error: null });
      try {
        const a = await Le.getFeed(activeFeed, { limit: 20 });
        e({
          posts: a.data,
          nextCursor: a.nextCursor,
          hasMore: a.nextCursor !== null,
          isLoading: false,
          isRefreshing: false,
        });
      } catch (a) {
        e({
          isLoading: false,
          isRefreshing: false,
          error: a instanceof Error ? a.message : "Ошибка загрузки",
        });
      }
    }
  },

  loadMoreFeed: async () => {
    const { activeFeed, isLoadingMore, hasMore, nextCursor } = t();
    if (!(isLoadingMore || !hasMore)) {
      e({ isLoadingMore: true });
      try {
        const a = await Le.getFeed(activeFeed, {
          limit: 20,
          cursor: nextCursor ?? undefined,
        });
        e((c) => ({
          posts: [...c.posts, ...a.data],
          nextCursor: a.nextCursor,
          hasMore: a.nextCursor !== null,
          isLoadingMore: false,
        }));
      } catch {
        e({ isLoadingMore: false });
      }
    }
  },

  createPost: async (n, o, s = [], i = [], a) => {
    const c = Ne.getState().profile;
    if (!c) {
      throw new Error("Not authenticated");
    }
    try {
      const u = i.map(({ mediaId: f }) => f);

      const { id: id_1 } = await Le.createPost({
        wallOwnerId: n !== c.id ? n : undefined,
        text: o,
        spans: s.length > 0 ? s : undefined,
        attachmentIds: u.length > 0 ? u : undefined,
        poll: a
          ? {
              question: a.question,
              options: a.options,
              multipleChoice: a.multipleChoice ?? false,
            }
          : undefined,
      });

      const h = i.map(({ url: f }, m) => ({
        id: `temp-${m}`,
        url: f,
        type: "image",
      }));

      if (a) {
        h.push({
          id: `temp-poll-${Date.now()}`,
          type: "poll",
          question: a.question,
          options: a.options.map((f, m) => ({
            id: `temp-opt-${m}`,
            text: f.text,
            votes: 0,
          })),
          totalVotes: 0,
          myVote: null,
        });
      }

      const d = {
        id: id_1,
        author: {
          id: c.id,
          username: c.username,
          displayName: c.displayName,
          avatar: c.avatar,
          isVerified: c.isVerified,
        },
        wallOwnerId: n,
        text: o,
        spans: s,
        attachments: h,
        reactions: { total: 0, myReaction: null },
        stats: { views: 0, comments: 0, reposts: 0 },
        originalPost: null,
        dominantEmoji: null,
        createdAt: new Date().toISOString(),
        editedAt: null,
      };

      e((f) => ({
        posts: [d, ...f.posts],
        highlightedPostId: id_1,
      }));

      Le.invalidateWallCache(n);
      try {
        const f = await Le.getPost(id_1);
        e((m) => ({
          posts: m.posts.map((y) => (y.id === id_1 ? f : y)),
        }));
      } catch {}
    } catch (u) {
      console.error("Failed to create post:", u);
      throw u;
    }
  },

  clearHighlightedPost: () => {
    e({ highlightedPostId: null });
  },

  clearHighlightedComment: () => {
    e({ highlightedCommentId: null });
  },

  setHighlightedCommentId: (n) => {
    e({ highlightedCommentId: n });
  },

  fetchPost: async (n) => {
    const o = t().posts.find((s) => s.id === n);
    if (o) {
      e({ currentPost: o, currentPostLoading: false, currentPostError: false });
      return;
    }
    if (t().currentPost?.id !== n) {
      e({
        currentPostLoading: true,
        currentPost: null,
        currentPostError: false,
      });
      try {
        const s = await Le.getPost(n);
        e({
          currentPost: s,
          currentPostLoading: false,
          currentPostError: false,
        });
      } catch {
        e({
          currentPost: null,
          currentPostLoading: false,
          currentPostError: true,
        });
      }
    }
  },

  setCurrentPost: (n) => {
    e({ currentPost: n, currentPostLoading: false, currentPostError: false });
  },

  clearComments: () => {
    e({
      comments: [],
      commentsLoading: true,
      commentsHasMore: true,
      commentsNextCursor: null,
    });
  },

  fetchComments: async (n) => {
    const { currentPost } = t();
    if (
      currentPost &&
      currentPost.id === n &&
      currentPost.stats.comments === 0
    ) {
      e({
        comments: [],
        commentsLoading: false,
        commentsHasMore: false,
        commentsNextCursor: null,
      });
      return;
    }
    ua();
    const s = bn.getState().commentsSort;
    const i = n;
    const a = Ve.get(i);
    const c = Date.now();
    if (a && a.sort === s) {
      if (c - a.timestamp < ca) {
        e({
          comments: a.comments,
          commentsNextCursor: a.nextCursor,
          commentsHasMore: a.hasMore,
          commentsLoading: false,
        });

        et.getComments(n, { limit: 100, sort: s })
          .then((l) => {
            const l_data = l.data;

            Ve.set(i, {
              comments: l_data,
              hasMore: l.nextCursor !== null,
              nextCursor: l.nextCursor,
              timestamp: Date.now(),
              sort: s,
            });

            e((d) =>
              d.comments.length > 0 && d.comments[0]?.postId === n
                ? {
                    comments: l_data,
                    commentsNextCursor: l.nextCursor,
                    commentsHasMore: l.nextCursor !== null,
                  }
                : d
            );
          })
          .catch(() => {});

        return;
      } else {
        e({
          comments: a.comments,
          commentsNextCursor: a.nextCursor,
          commentsHasMore: a.hasMore,
          commentsLoading: true,
        });
      }
    } else {
      e({
        commentsLoading: true,
        comments: [],
        commentsHasMore: true,
        commentsNextCursor: null,
      });
    }
    try {
      const u = await et.getComments(n, { limit: 100, sort: s });
      const u_data = u.data;

      Ve.set(i, {
        comments: u_data,
        hasMore: u.nextCursor !== null,
        nextCursor: u.nextCursor,
        timestamp: Date.now(),
        sort: s,
      });

      e({
        comments: u_data,
        commentsNextCursor: u.nextCursor,
        commentsHasMore: u.nextCursor !== null,
        commentsLoading: false,
      });
    } catch {
      e({ commentsLoading: false });
    }
  },

  loadMoreComments: async (n) => {
    const { commentsLoadingMore, commentsHasMore, commentsNextCursor } = t();
    if (commentsLoadingMore || !commentsHasMore) {
      return;
    }
    const a = bn.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await et.getComments(n, {
        limit: 100,
        sort: a,
        cursor: commentsNextCursor ?? undefined,
      });
      e((u) => {
        const l = [...u.comments, ...c.data];
        return {
          comments: l.length > oo ? l.slice(-oo) : l,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.nextCursor !== null,
          commentsLoadingMore: false,
        };
      });
    } catch {
      e({ commentsLoadingMore: false });
    }
  },

  toggleCommentReaction: async (n, o) => {
    const { comments } = t();

    let i = comments.findIndex((p) => p.id === n);

    let a = false;
    let c = -1;
    let u = -1;
    if (i === -1) {
      for (let p = 0; p < comments.length; p++) {
        const v = (comments[p].previewReplies ?? []).findIndex(
          (C) => C.id === n
        );
        if (v !== -1) {
          a = true;
          c = p;
          u = v;
          break;
        }
      }
    }
    if (i === -1 && !a) {
      return;
    }
    const l = a ? comments[c].previewReplies[u] : comments[i];
    const h = l.reactions.myReaction;
    const d = l.reactions.total;
    const f = h === o;
    const m = f ? Math.max(0, d - 1) : h === null ? d + 1 : d;
    const y = f || o;
    const g = [...comments];
    if (a) {
      const p = [...(g[c].previewReplies ?? [])];
      p[u] = { ...p[u], reactions: { total: m, myReaction: y } };
      g[c] = { ...g[c], previewReplies: p };
    } else {
      g[i] = { ...g[i], reactions: { total: m, myReaction: y } };
    }
    e({ comments: g });
    try {
      if (f) {
        await et.unlikeComment(n);
      } else {
        await et.likeComment(n);
      }
    } catch (p) {
      console.error("Failed to toggle comment reaction:", p);
      const _ = [...t().comments];
      if (a) {
        const v = _.findIndex((C) => C.previewReplies?.some((T) => T.id === n));
        if (v !== -1) {
          const C = _[v].previewReplies.findIndex((T) => T.id === n);
          if (C !== -1) {
            const T = [..._[v].previewReplies];
            T[C] = { ...T[C], reactions: { total: d, myReaction: h } };
            _[v] = { ..._[v], previewReplies: T };
          }
        }
      } else {
        const v = _.findIndex((C) => C.id === n);

        if (v !== -1) {
          _[v] = { ..._[v], reactions: { total: d, myReaction: h } };
        }
      }
      e({ comments: _ });
    }
  },

  addComment: async (n, o, s = [], i, a, c, u) => {
    try {
      const l = i
        ? await et.createReply(i, o, s, c, a)
        : await et.createComment(n, o, s, undefined, a);

      const h = Ne.getState().profile;
      if (h) {
        const y = (l.attachments || [])
          .filter((p) => typeof p == "object" && p !== null)
          .map((p) =>
            p.type === "media" && p.media
              ? {
                  id: p.media.id,
                  type: p.media.type,
                  url: p.media.url,
                  duration: p.media.duration,
                }
              : { id: p.id, type: p.type, url: p.url, duration: p.duration }
          );

        const g = {
          id: l.id,
          postId: n,
          author: {
            id: h.id,
            username: h.username,
            displayName: h.displayName,
            avatar: h.avatar,
            isVerified: h.isVerified,
          },
          parentId: i ?? null,
          rootId: i ?? null,
          text: l.text ?? l.content ?? o,
          spans: l.spans,
          attachments: y,
          replyTo: l.replyTo ?? u ?? null,
          reactions: { total: 0, myReaction: null },
          stats: { replies: 0 },
          createdAt: new Date().toISOString(),
          editedAt: null,
        };

        e(
          i
            ? (p) => ({
                comments: p.comments.map((_) =>
                  _.id === i
                    ? {
                        ..._,
                        previewReplies: [...(_.previewReplies || []), g],
                        stats: { ..._.stats, replies: _.stats.replies + 1 },
                      }
                    : _
                ),

                highlightedCommentId: l.id,
              })
            : (p) => ({
                comments: [g, ...p.comments],
                highlightedCommentId: l.id,
              })
        );
      }
      const { currentPost } = t();

      if (currentPost && currentPost.id === n) {
        e({
          currentPost: {
            ...currentPost,
            stats: {
              ...currentPost.stats,
              comments: currentPost.stats.comments + 1,
            },
          },
        });
      }

      const f = bn.getState().commentsSort;
      const m = Ve.get(n);

      if (m) {
        Ve.set(n, { ...m, comments: t().comments, timestamp: Date.now() });
      } else {
        Ve.set(n, {
          comments: t().comments,
          hasMore: t().commentsHasMore,
          nextCursor: t().commentsNextCursor,
          timestamp: Date.now(),
          sort: f,
        });
      }
    } catch (l) {
      console.error("Failed to add comment:", l);
      throw l;
    }
  },

  loadReplies: async (n) => {
    const { comments } = t();
    if (comments.findIndex((i) => i.id === n) !== -1) {
      try {
        const i = await et.getReplies(n, { limit: 100 });
        e((a) => ({
          comments: a.comments.map((c) =>
            c.id === n ? { ...c, previewReplies: i.data } : c
          ),
        }));
      } catch (i) {
        console.error("Failed to load replies:", i);
      }
    }
  },

  editComment: async (n, o, s) => {
    const { comments } = t();

    const a = (u) =>
      u.map((l) =>
        l.id === n
          ? {
              ...l,
              text: o,
              spans: s ?? l.spans,
              editedAt: new Date().toISOString(),
            }
          : l.previewReplies
          ? {
              ...l,
              previewReplies: l.previewReplies.map((h) =>
                h.id === n
                  ? {
                      ...h,
                      text: o,
                      spans: s ?? h.spans,
                      editedAt: new Date().toISOString(),
                    }
                  : h
              ),
            }
          : l
      );

    const c = comments;
    e({ comments: a(comments) });
    try {
      await et.editComment(n, o, s);
    } catch (u) {
      console.error("Failed to edit comment:", u);
      e({ comments: c });
      throw u;
    }
  },

  deleteComment: async (n) => {
    const { comments, currentPost } = t();

    const i = comments.some((u) => u.id === n);

    const a = comments.find((u) => u.previewReplies?.some((l) => l.id === n));

    const c = comments;

    if (i) {
      e({ comments: comments.filter((u) => u.id !== n) });
    } else if (a) {
      e({
        comments: comments.map((u) =>
          u.id === a.id
            ? {
                ...u,
                previewReplies: u.previewReplies?.filter((l) => l.id !== n),
                stats: { ...u.stats, replies: u.stats.replies - 1 },
              }
            : u
        ),
      });
    }

    if (currentPost) {
      e({
        currentPost: {
          ...currentPost,
          stats: {
            ...currentPost.stats,
            comments: Math.max(0, currentPost.stats.comments - 1),
          },
        },
      });
    }

    try {
      await et.deleteComment(n);
    } catch (u) {
      console.error("Failed to delete comment:", u);
      e({ comments: c });
      throw u;
    }
  },

  editPost: async (n, o, s) => {
    await Le.editPost(n, { text: o, spans: s });
    const { posts, currentPost } = t();
    const c = new Date().toISOString();

    const u = posts.find((l) => l.id === n);

    e({
      posts: posts.map((l) =>
        l.id === n ? { ...l, text: o, spans: s ?? l.spans, editedAt: c } : l
      ),
      currentPost:
        currentPost?.id === n
          ? {
              ...currentPost,
              text: o,
              spans: s ?? currentPost.spans,
              editedAt: c,
            }
          : currentPost,
      _lastPostEdit: { postId: n, text: o, spans: s ?? [], editedAt: c },
    });

    if (u?.wallOwnerId) {
      Le.updatePostInWallCache(u.wallOwnerId, n, {
        text: o,
        spans: s ?? u.spans,
        editedAt: c,
      });
    }
  },

  deletePost: async (n) => {
    const { posts, currentPost } = t();
    const i = posts;

    const a = posts.find((c) => c.id === n);

    e({
      posts: posts.filter((c) => c.id !== n),
      currentPost: currentPost?.id === n || currentPost,
    });
    try {
      await Le.deletePost(n);
    } catch (c) {
      console.error("Failed to delete post:", c);

      if (a) {
        e({ posts: i });
      }

      throw c;
    }
  },

  updatePostReaction: (n, o, s) => {
    e((i) => {
      const a = i.posts.map((u) =>
        u.id === n
          ? {
              ...u,
              reactions: {
                ...u.reactions,
                myReaction: o,
                total: Math.max(0, u.reactions.total + s),
              },
            }
          : u
      );

      const c =
        i.currentPost?.id === n
          ? {
              ...i.currentPost,
              reactions: {
                ...i.currentPost.reactions,
                myReaction: o,
                total: Math.max(0, i.currentPost.reactions.total + s),
              },
            }
          : i.currentPost;

      return {
        posts: a,
        currentPost: c,
        _lastReactionUpdate: { postId: n, myReaction: o, totalDelta: s },
      };
    });
  },

  updatePollVote: (n, o, s) => {
    const i = (a) => {
      const c = a.attachments.findIndex((m) => m.type === "poll");
      if (c === -1) {
        return a;
      }
      const u = a.attachments[c];

      const l = u.options.map((m) =>
        m.id === o
          ? { ...m, votes: (m.votes ?? 0) + 1 }
          : m.id === s
          ? { ...m, votes: Math.max(0, (m.votes ?? 0) - 1) }
          : m
      );

      const h = s ? 0 : 1;

      const d = {
        ...u,
        options: l,
        totalVotes: (u.totalVotes ?? 0) + h,
        myVote: o,
      };

      const f = [...a.attachments];
      f[c] = d;
      return { ...a, attachments: f };
    };
    e((a) => {
      const c = a.posts.map((l) => (l.id === n ? i(l) : l));

      const u = a.currentPost?.id === n ? i(a.currentPost) : a.currentPost;
      return { posts: c, currentPost: u };
    });
  },

  updatePollData: (n, o) => {
    const s = (i) => {
      const a = i.attachments.findIndex((l) => l.type === "poll");
      if (a === -1) {
        return i;
      }

      const c = {
        ...i.attachments[a],
        options: (o.options ?? []).map((l) => ({
          id: l.id,
          text: l.text,
          votes: l.votesCount ?? l.voteCount ?? 0,
        })),
        totalVotes: o.totalVotes ?? 0,
        myVote: o.votedOptionIds?.length > 0 ? o.votedOptionIds[0] : null,
      };

      const u = [...i.attachments];
      u[a] = c;
      return { ...i, attachments: u };
    };
    e((i) => {
      const a = i.posts.map((u) => (u.id === n ? s(u) : u));

      const c = i.currentPost?.id === n ? s(i.currentPost) : i.currentPost;
      return { posts: a, currentPost: c };
    });
  },

  setFeedScrollPosition: (n) => {
    e({ feedScrollPosition: n });
  },

  setFeedMeasuredHeights: (n) => {
    e({ feedMeasuredHeights: n });
  },

  reset: () => {
    t().feedMeasuredHeights.clear();
    Ve.clear();

    e({
      posts: [],
      isLoading: false,
      isLoadingMore: false,
      isRefreshing: false,
      hasMore: true,
      nextCursor: null,
      error: null,
      feedScrollPosition: 0,
      highlightedPostId: null,
      highlightedCommentId: null,
      _lastPostEdit: null,
      _lastReactionUpdate: null,
      currentPost: null,
      currentPostLoading: false,
      currentPostError: false,
      comments: [],
      commentsLoading: false,
      commentsLoadingMore: false,
      commentsHasMore: true,
      commentsNextCursor: null,
    });
  },
}));

const so = {
  notifications: [],
  unreadCount: 0,
  nextCursor: null,
  status: "idle",
  sseStatus: "disconnected",
  error: null,
  settings: null,
  settingsLoading: false,
  isInitialized: false,
  lastSseToast: null,
};

let ct = null;
let zt = null;
let Et = 0;
let Rt = null;
const io = [
  1000 /* 1e3 */, 2000 /* 2e3 */, 4000 /* 4e3 */, 8000 /* 8e3 */,
  16000 /* 16e3 */, 30000 /* 3e4 */,
];
const da = 0.3;
const ha = 15;
function ao(e) {
  const t = io[Math.min(e, io.length - 1)];
  const n = t * da * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
function fa(e) {
  const t = {
    id: e.id,
    type: e.type,
    targetId: e.targetId ?? e.entityId ?? null,
    entityId: e.entityId ?? e.targetId ?? null,
    parentEntityId: e.parentEntityId ?? null,
    actor: e.actor ?? e.actors?.[0] ?? null,
    actors: e.actors,
    preview: e.preview ?? e.entityPreview ?? null,
    read: e.read ?? false,
    createdAt: e.createdAt ?? new Date().toISOString(),
    readAt: e.readAt ?? null,
    payload: e.actors
      ? {
          actors: e.actors,
          count: e.count ?? 1,
          clickUrl: e.clickUrl,
          entityPreview: e.entityPreview ?? e.preview ?? null,
        }
      : undefined,
  };
  return gs(t);
}

const br = it()((e, t) => ({
  ...so,

  initialize: () => {
    if (!t().isInitialized) {
      e({ isInitialized: true });
      t().connectSSE();
      t().fetchUnreadCount();
    }
  },

  fetchNotifications: async (n = false) => {
    const { status, nextCursor, notifications } = t();
    if (
      status !== "loading" &&
      !(!n && nextCursor === null && notifications.length > 0)
    ) {
      e({ status: "loading", error: null });
      try {
        const a = n || (nextCursor ?? undefined);
        const c = await Nt.getNotifications({ cursor: a, limit: 20 });
        e({
          notifications: n
            ? c.notifications
            : [...notifications, ...c.notifications],
          nextCursor: c.nextCursor,
          status: "success",
        });
      } catch (a) {
        const c =
          a instanceof Error ? a.message : "Failed to fetch notifications";
        e({ status: "error", error: c });
      }
    }
  },

  fetchUnreadCount: async () => {
    try {
      const n = await Nt.getUnreadCount();
      e({ unreadCount: n });
    } catch {}
  },

  markAsRead: async (n) => {
    if (n.length === 0) {
      return;
    }
    const o = t();

    const s = n.filter((i) => {
      const a = o.notifications.find((c) => c.id === i);
      return a && !a.isRead;
    });

    e((i) => ({
      notifications: i.notifications.map((a) =>
        n.includes(a.id) ? { ...a, isRead: true } : a
      ),

      unreadCount: Math.max(0, i.unreadCount - s.length),
    }));
    try {
      await Nt.markAsRead(n);
    } catch {}
  },

  markAsReadSilent: async (n) => {
    if (n.length !== 0) {
      e((o) => ({
        unreadCount: Math.max(0, o.unreadCount - n.length),
      }));
      try {
        await Nt.markAsRead(n);
      } catch {}
    }
  },

  markAllAsRead: async () => {
    e((n) => ({
      notifications: n.notifications.map((o) => ({
        ...o,
        isRead: true,
      })),

      unreadCount: 0,
    }));
    try {
      await Nt.markAllAsRead();
    } catch {}
  },

  connectSSE: () => {
    if (ct) {
      return;
    }
    const n = F.getAccessToken();
    if (!n) {
      e({ sseStatus: "error", error: "Not authenticated" });
      return;
    }
    e({ sseStatus: "connecting" });
    const o = "/api/notifications/stream";
    ct = new AbortController();

    (async () => {
      try {
        const i = await fetch(o, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            Authorization: `Bearer ${n}`,
            "Cache-Control": "no-cache",
          },
          signal: ct?.signal,
        });
        if (!i.ok) {
          if (i.status === 401) {
            try {
              const l = await dt.refreshSession();
              F.setAccessToken(l.accessToken);
              Ie.setAccessToken(l.accessToken);
              ct = null;
              const h = ao(Et);
              Et++;

              zt = setTimeout(() => {
                t().connectSSE();
              }, h);

              return;
            } catch {
              e({ sseStatus: "error", error: "Session expired" });
              return;
            }
          }
          throw new Error(`SSE connection failed: ${i.status}`);
        }
        if (!i.body) {
          throw new Error("SSE response has no body");
        }
        Et = 0;
        e({ sseStatus: "connected", error: null });

        if (Rt) {
          Rt.cancel().catch(() => {});
          Rt = null;
        }

        const a = i.body.getReader();
        Rt = a;
        const c = new TextDecoder();
        let u = "";

        while (true) {
          const { done, value } = await a.read();
          if (done) {
            break;
          }
          u += c.decode(value, { stream: true });
          const d = u.split(`
`);
          u = d.pop() || "";
          let f = "";
          let m = "";
          for (const y of d) {
            if (y.startsWith("event: ")) {
              f = y.slice(7);
            } else if (y.startsWith("data: ")) {
              m = y.slice(6);
            } else if (y === "" && m) {
              try {
                const g = JSON.parse(m);
                const p = f || g.type;
                if (p !== "connected") {
                  if (p === "notification") {
                    const _ = g.payload ?? g;
                    const v = fa(_);
                    const C = v.payload.actors[0];

                    const T = {
                      id: v.id,
                      type: v.type,
                      actorName: C?.displayName || "Пользователь",
                      actorUsername: C?.username || "",
                      actorAvatar: C?.avatar || "",
                      count: v.payload.count,
                      message: pa(
                        v.type,
                        C?.displayName || "Пользователь",
                        v.payload.count
                      ),
                      clickUrl: v.payload.clickUrl,
                      entityId: v.entityId,
                      parentEntityId: v.parentEntityId,
                    };

                    e((w) => ({
                      notifications: [v, ...w.notifications],
                      unreadCount: g.unreadCount ?? w.unreadCount,
                      lastSseToast: T,
                    }));

                    if (g.sound) {
                      ga();
                    }
                  } else {
                    if (p === "unread_count") {
                      e({ unreadCount: g.payload?.count ?? 0 });
                    }
                  }
                }
              } catch (g) {
                console.error("SSE message parse error:", g, m);
              }
              f = "";
              m = "";
            }
          }
        }
      } catch (i) {
        if (i.name === "AbortError") {
          return;
        }
        e({ sseStatus: "error", error: "SSE connection error" });

        if (Et >= ha) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          ct = null;
          return;
        }

        const a = ao(Et);
        Et++;

        zt = setTimeout(() => {
          ct = null;
          t().connectSSE();
        }, a);
      }
    })();
  },

  disconnectSSE: () => {
    if (zt) {
      clearTimeout(zt);
      zt = null;
    }

    if (Rt) {
      Rt.cancel().catch(() => {});
      Rt = null;
    }

    if (ct) {
      ct.abort();
      ct = null;
    }

    Et = 0;
    e({ sseStatus: "disconnected" });
  },

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const n = await Nt.getSettings();
      e({ settings: n, settingsLoading: false });
    } catch {
      e({ settingsLoading: false });
    }
  },

  updateSettings: async (n) => {
    const { settings: o } = t();
    if (o) {
      const s = {
        webEnabled: n.webEnabled ?? o.webEnabled,
        soundEnabled: n.soundEnabled ?? o.soundEnabled,
        preferences: { ...o.preferences, ...n.preferences },
      };
      e({ settings: s });
    }
    try {
      await Nt.updateSettings(n);
    } catch {
      e({ settings: o });
    }
  },

  reset: () => {
    t().disconnectSSE();
    e(so);
  },
}));

const ma = {
  follow: (e, t) =>
    t > 1
      ? `${e} и ещё ${t - 1} подписались на вас`
      : `${e} подписался(-ась) на вас`,
  follow_request: (e) => `${e} хочет подписаться на вас`,
  follow_accepted: (e) => `${e} принял(а) вашу заявку`,
  post_reaction: (e, t) =>
    t > 1 ? `${e} и ещё ${t - 1} оценили ваш пост` : `${e} оценил(а) ваш пост`,
  post_comment: (e) => `${e} прокомментировал(а) ваш пост`,
  post_repost: (e, t) =>
    t > 1 ? `${e} и ещё ${t - 1} сделали репост` : `${e} сделал(а) репост`,
  comment_reaction: (e, t) =>
    t > 1
      ? `${e} и ещё ${t - 1} оценили ваш комментарий`
      : `${e} оценил(а) ваш комментарий`,
  comment_reply: (e) => `${e} ответил(а) на ваш комментарий`,
  post_mention: (e) => `${e} упомянул(а) вас в посте`,
  comment_mention: (e) => `${e} упомянул(а) вас в комментарии`,
  wall_post: (e) => `${e} написал(а) на вашей стене`,
  like: (e, t) =>
    t > 1 ? `${e} и ещё ${t - 1} оценили ваш пост` : `${e} оценил(а) ваш пост`,
  comment: (e) => `${e} прокомментировал(а) ваш пост`,
  reply: (e) => `${e} ответил(а) на ваш комментарий`,
  repost: (e, t) =>
    t > 1 ? `${e} и ещё ${t - 1} сделали репост` : `${e} сделал(а) репост`,
  mention: (e) => `${e} упомянул(а) вас в посте`,
};

function pa(e, t, n) {
  const ma_e = ma[e];
  return ma_e ? ma_e(t, n) : "Новое уведомление";
}
function ga() {
  try {
    const e = new Audio("/assets/notification.ogg");
    e.volume = 0.5;
    e.play().catch(() => {});
  } catch {}
}

const d_ = () => br((e) => e.unreadCount);

const va = () => br((e) => e.lastSseToast);

const _a = it((e, t) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    if (!t().loaded) {
      try {
        const n = await F.get("/v1/portal");
        e({ portal: n, loaded: true });
      } catch {
        e({ loaded: true });
      }
    }
  },
}));

const h_ = () => _a((e) => e.portal);

const on = new Set();
let tn = null;
const wa = 30000; /* 3e4 */
function ya() {
  if (tn === null) {
    tn = window.setInterval(() => {
      on.forEach((e) => e());
    }, wa);
  }
}
function Ca() {
  if (tn !== null) {
    clearInterval(tn);
    tn = null;
  }
}
function Ta(e) {
  on.add(e);

  if (on.size === 1) {
    ya();
  }
}
function Na(e) {
  on.delete(e);

  if (on.size === 0) {
    Ca();
  }
}
function Vn(e) {
  const t = Date.now();
  const n = Math.floor((t - e.getTime()) / 1000 /* 1e3 */);
  return n < 60
    ? "сейчас"
    : n < 3600
    ? `${Math.floor(n / 60)} мин.`
    : n < 86400
    ? `${Math.floor(n / 3600)} ч.`
    : n < 604800
    ? `${Math.floor(n / 86400)} дн.`
    : n < 2419200
    ? `${Math.floor(n / 604800)} нед.`
    : e.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function _s(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const o = n ? t : 0;

  const [s, i] = A(() => (n ? Vn(new Date(o)) : ""));

  V(() => {
    if (!n) {
      i("");
      return;
    }
    const a = new Date(o);
    i(Vn(a));
    const c = () => {
      i(Vn(a));
    };
    Ta(c);

    return () => Na(c);
  }, [o, n]);

  return s;
}
const co = 1174;
function pt() {
  const [e, t] = A(() =>
    typeof window === "undefined" ? false : window.innerWidth < co
  );

  V(() => {
    const n = window.matchMedia(`(max-width: ${co - 1}px)`);

    const o = (s) => {
      t(s.matches);
    };

    t(n.matches);
    n.addEventListener("change", o);

    return () => {
      n.removeEventListener("change", o);
    };
  }, []);

  return e;
}
const Ea = Ht({ isHidden: false });

const Ra = () => {
  const [e, t] = A(false);
  const n = I(0);

  V(() => {
    const o = () => {
      const window_scrollY = window.scrollY;
      const i = window_scrollY - n.current;

      if (i > 10 && window_scrollY > 50) {
        t(true);
      } else if (i < -10) {
        t(false);
      }

      n.current = window_scrollY;
    };
    window.addEventListener("scroll", o, { passive: true });

    return () => window.removeEventListener("scroll", o);
  }, []);

  return e;
};

function ba() {
  const [e, t] = A(false);
  const [n, o] = A(false);
  const [s, i] = A(0);
  const [a, c] = A(false);
  const [u, l] = A(0);
  const [h, d] = A(0);
  const [f, m] = A([]);
  const [y, g] = A(0);
  const p = I(0);
  const _ = I(null);
  const v = I(null);
  const C = I(null);
  const T = I(null);
  const w = I([]);
  const k = I(null);
  const S = I(null);
  const E = I(null);
  const R = I(null);
  const P = I(null);
  const N = I(null);
  const U = I([]);
  const O = I(false);
  const X = I(0);
  const te = I([]);
  const J = I(0);

  V(() => {
    O.current = e;
  }, [e]);

  V(
    () => () => {
      if (k.current) {
        clearInterval(k.current);
      }

      if (S.current) {
        cancelAnimationFrame(S.current);
      }

      if (N.current) {
        clearInterval(N.current);
      }

      if (T.current) {
        T.current.getTracks().forEach(($) => $.stop());
      }

      if (_.current) {
        _.current.ondataavailable = null;
        _.current.onstop = null;
      }

      if (v.current && v.current.state !== "closed") {
        v.current.close();
      }

      if (E.current) {
        E.current.pause();
        E.current.onloadedmetadata = null;
        E.current.ontimeupdate = null;
        E.current.onended = null;
        E.current = null;
      }

      if (R.current) {
        URL.revokeObjectURL(R.current);
      }
    },
    []
  );

  const ae = b(() => {
    if (!C.current) {
      return;
    }
    const C_current = C.current;
    const C_current_frequencyBinCount = C_current.frequencyBinCount;
    const j = new Uint8Array(C_current_frequencyBinCount);
    C_current.getByteFrequencyData(j);
    let Y = 0;
    for (let oe = 0; oe < C_current_frequencyBinCount; oe++) {
      Y += j[oe];
    }
    const re = Y / C_current_frequencyBinCount / 255;
    const ie = Math.min(1, re * 3);
    const fe = Math.max(0.1, ie);
    if (O.current) {
      const qe = performance.now() - X.current;
      const Ee = Math.floor(qe / 80);
      te.current.push(fe);

      if (Ee > J.current) {
        const te_current = te.current;

        const ve =
          te_current.length > 0
            ? te_current.reduce((Q, L) => Q + L, 0) / te_current.length
            : 0.05;

        U.current.push(ve);
        p.current += 4;

        m((Q) => [...Q, ve]);

        g(p.current);
        te.current = [];
        J.current = Ee;
      }

      S.current = requestAnimationFrame(ae);
    }
  }, []);

  const ce = b(() => {
    const U_current = U.current;
    return U_current.length > 0 ? [...U_current] : [];
  }, []);

  const G = b(async () => {
    try {
      if (R.current) {
        URL.revokeObjectURL(R.current);
        R.current = null;
      }

      P.current = null;

      if (E.current) {
        E.current.pause();
        E.current = null;
      }

      const $ = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      T.current = $;
      const z = new AudioContext();
      v.current = z;
      const j = z.createAnalyser();
      j.fftSize = 256;
      j.smoothingTimeConstant = 0.3;
      C.current = j;
      z.createMediaStreamSource($).connect(j);
      const re = new MediaRecorder($, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      _.current = re;
      w.current = [];
      U.current = [];
      X.current = performance.now();
      te.current = [];
      J.current = 0;

      re.ondataavailable = (fe) => {
        if (fe.data.size > 0) {
          w.current.push(fe.data);
        }
      };

      re.start(100);
      t(true);
      o(false);
      i(0);
      l(0);
      d(0);
      c(false);
      p.current = 0;
      m([]);
      g(0);
      O.current = true;
      const ie = Date.now();

      k.current = window.setInterval(() => {
        const fe = Math.floor((Date.now() - ie) / 1000 /* 1e3 */);
        i(fe);
      }, 100);

      S.current = requestAnimationFrame(ae);
    } catch ($) {
      console.error("Error accessing microphone:", $);
    }
  }, [ae]);

  const ee = b(
    () =>
      new Promise(($) => {
        O.current = false;
        t(false);

        if (_.current && _.current.state !== "inactive") {
          _.current.onstop = () => {
            if (w.current.length > 0) {
              const j = _.current?.mimeType || "audio/webm";
              const Y = new Blob(w.current, { type: j });
              const re = URL.createObjectURL(Y);
              R.current = re;
              P.current = Y;
              const ie = new Audio(re);
              E.current = ie;

              ie.onloadedmetadata = () => {
                if (isFinite(ie.duration)) {
                  d(ie.duration);
                } else {
                  ie.currentTime = 1e101 /* 1e101 */;

                  ie.ontimeupdate = () => {
                    ie.ontimeupdate = null;
                    ie.currentTime = 0;
                    d(ie.duration);
                  };
                }
              };

              ie.onended = () => {
                c(false);
                l(0);
                ie.currentTime = 0;

                if (N.current) {
                  clearInterval(N.current);
                  N.current = null;
                }
              };

              o(true);
              $(Y);
            } else {
              $(null);
            }
          };

          _.current.stop();
        } else {
          $(null);
        }

        if (T.current) {
          T.current.getTracks().forEach((j) => j.stop());
          T.current = null;
        }

        if (k.current) {
          clearInterval(k.current);
          k.current = null;
        }

        if (S.current) {
          cancelAnimationFrame(S.current);
          S.current = null;
        }

        if (v.current && v.current.state !== "closed") {
          v.current.close();
          v.current = null;
        }

        const z = ce();
        p.current = 0;
        m(z);
        g(0);
        l(0);
      }),
    [ce]
  );

  const D = b(() => {
    O.current = false;

    if (_.current) {
      _.current.ondataavailable = null;
      _.current.onstop = null;
      _.current.state !== "inactive" && _.current.stop();
      _.current = null;
    }

    if (T.current) {
      T.current.getTracks().forEach(($) => $.stop());
      T.current = null;
    }

    if (k.current) {
      clearInterval(k.current);
      k.current = null;
    }

    if (S.current) {
      cancelAnimationFrame(S.current);
      S.current = null;
    }

    if (N.current) {
      clearInterval(N.current);
      N.current = null;
    }

    if (v.current && v.current.state !== "closed") {
      v.current.close();
      v.current = null;
    }

    if (E.current) {
      E.current.pause();
      E.current = null;
    }

    if (R.current) {
      URL.revokeObjectURL(R.current);
      R.current = null;
    }

    P.current = null;
    t(false);
    o(false);
    i(0);
    c(false);
    l(0);
    d(0);
    p.current = 0;
    m([]);
    g(0);
    U.current = [];
    w.current = [];
  }, []);

  const W = b(() => {
    if (N.current) {
      clearInterval(N.current);
    }

    N.current = window.setInterval(() => {
      const E_current = E.current;
      if (
        !E_current ||
        E_current.paused ||
        E_current.paused ||
        E_current.ended
      ) {
        if (N.current) {
          clearInterval(N.current);
          N.current = null;
        }

        return;
      }

      if (E_current.duration > 0) {
        l(E_current.currentTime / E_current.duration);
      }
    }, 100);
  }, []);

  const Z = b(() => {
    if (!E.current || !R.current) {
      return;
    }

    if (N.current) {
      clearInterval(N.current);
      N.current = null;
    }

    const E_current = E.current;

    if (E_current.ended || E_current.currentTime >= E_current.duration) {
      E_current.currentTime = 0;
      l(0);
    }

    c(true);

    E_current.play()
      .then(() => {
        W();
      })
      .catch((z) => {
        console.error("Error playing audio:", z);
        c(false);
      });
  }, [W]);

  const M = b(() => {
    if (N.current) {
      clearInterval(N.current);
      N.current = null;
    }

    if (E.current) {
      E.current.pause();

      E.current.duration > 0 && l(E.current.currentTime / E.current.duration);
    }

    c(false);
  }, []);

  const x = b(
    ($) => {
      if (!E.current || !n) {
        return;
      }
      const E_current = E.current;
      const j = Math.max(0, Math.min(1, $));
      E_current.currentTime = j * E_current.duration;
      l(j);

      if (E_current.paused) {
        N.current && (clearInterval(N.current), (N.current = null));

        E_current.play()
          .then(() => {
            c(true);
            W();
          })
          .catch((Y) => {
            console.error("Error playing audio:", Y);
          });
      }
    },
    [n, W]
  );

  const B = b(() => P.current, []);

  return {
    isRecording: e,
    hasRecording: n,
    recordingTime: s,
    audioLevels: f,
    slideOffset: y,
    isPlaying: a,
    playbackProgress: u,
    duration: h,
    audioElementRef: E,
    startRecording: G,
    stopRecording: ee,
    cancelRecording: D,
    playAudio: Z,
    pauseAudio: M,
    seekTo: x,
    getAudioBlob: B,
  };
}
const Sa = 0.5;
const ka = 500;
const lo = 1000; /* 1e3 */
class Ia {
  viewedPosts = new Set();
  observer = null;
  pendingTimers = new Map();
  elementToPostId = new WeakMap();
  constructor() {
    if (typeof window !== "undefined") {
      this.initObserver();
    }
  }
  initObserver() {
    this.observer = new IntersectionObserver(
      (t) => {
        for (const n of t) {
          const o = this.elementToPostId.get(n.target);
          if (o) {
            if (n.isIntersecting) {
              if (!this.pendingTimers.has(o) && !this.viewedPosts.has(o)) {
                const s = window.setTimeout(() => {
                  this.pendingTimers.delete(o);

                  if (!this.viewedPosts.has(o)) {
                    this.sendView(o);
                  }
                }, ka);
                this.pendingTimers.set(o, s);
              }
            } else {
              const s = this.pendingTimers.get(o);

              if (s !== undefined) {
                clearTimeout(s);
                this.pendingTimers.delete(o);
              }
            }
          }
        }
      },
      { threshold: Sa }
    );
  }
  observe(t, n) {
    if (this.observer && !this.viewedPosts.has(t)) {
      if (!this.viewedPosts.has(t)) {
        this.elementToPostId.set(n, t);
        this.observer.observe(n);
      }
    }
  }
  unobserve(t) {
    if (!this.observer) {
      return;
    }
    const n = this.elementToPostId.get(t);
    if (n) {
      const o = this.pendingTimers.get(n);

      if (o !== undefined) {
        clearTimeout(o);
        this.pendingTimers.delete(n);
      }
    }
    this.observer.unobserve(t);
  }
  sendView(t) {
    if (!this.viewedPosts.has(t)) {
      this.viewedPosts.size >= lo &&
        Array.from(this.viewedPosts)
          .slice(0, lo / 2)
          .forEach((o) => this.viewedPosts.delete(o));

      this.viewedPosts.add(t);

      Le.trackView(t).catch(() => {
        this.viewedPosts.delete(t);
      });
    }
  }
  isViewed(t) {
    return this.viewedPosts.has(t);
  }
  clearViewedCache() {
    this.viewedPosts.clear();
  }
  destroy() {
    for (const t of this.pendingTimers.values()) {
      clearTimeout(t);
    }
    this.pendingTimers.clear();

    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
const Wn = new Ia();
function Pa(e, t) {
  V(() => {
    const t_current = t.current;
    if (!(!t_current || Wn.isViewed(e))) {
      Wn.observe(e, t_current);

      return () => {
        Wn.unobserve(t_current);
      };
    }
  }, [e, t]);
}
function Mn(e = "", t = []) {
  const [n, o] = A(e);
  const [s, i] = A(t);
  const a = I(null);

  const c = b((h, d) => {
    o(h);
    i(d);
  }, []);

  const u = b((h) => {
    a.current?.insertText(h);
  }, []);

  const l = b(() => {
    o("");
    i([]);
  }, []);

  return {
    text: n,
    spans: s,
    editorRef: a,
    handleChange: c,
    insertText: u,
    reset: l,
    setText: o,
    setSpans: i,
  };
}

const ws = ({ size: e = 24 }) =>
  r("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      r("path", {
        d: "M5 12L12 5L19 12",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      r("path", {
        d: "M12 19V5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const ys = ({ size: e = 20 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    children: r("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.833",
      d: "m17.867 9.208-7.659 7.659a5.003 5.003 0 1 1-7.075-7.075l7.659-7.659a3.335 3.335 0 1 1 4.716 4.717l-7.666 7.658a1.667 1.667 0 1 1-2.359-2.358l7.075-7.067",
    }),
  });

const Aa = ({ size: e = 18 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      r("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
      r("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
    ],
  });

const xa = ({ size: e = 18 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      r("polyline", { points: "16 18 22 12 16 6" }),
      r("polyline", { points: "8 6 2 12 8 18" }),
    ],
  });

const Oa = ({ size: e = 24 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      r("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      r("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M15 9l-6 6m0-6l6 6",
      }),
    ],
  });

const Cs = ({ size: e = 24 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      r("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      r("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M12 16v-4m0-4h.01",
      }),
    ],
  });

const La = ({ size: e = 18 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      r("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
      r("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
      r("line", { x1: "15", y1: "4", x2: "9", y2: "20" }),
    ],
  });

const Ts = ({ size: e = 18 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      r("path", {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      }),
      r("path", {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      }),
    ],
  });

const Ma = ({ size: e = 18 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: r("path", {
      d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
    }),
  });

const $a = ({ size: e = 18 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      r("path", {
        d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94",
      }),
      r("path", {
        d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19",
      }),
      r("line", { x1: "1", y1: "1", x2: "23", y2: "23" }),
      r("path", { d: "M14.12 14.12a3 3 0 1 1-4.24-4.24" }),
    ],
  });

const Da = ({ size: e = 18 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      r("path", { d: "M16 4H9a3 3 0 0 0-3 3c0 1.66 1.34 3 3 3h6" }),
      r("path", { d: "M8 20h7a3 3 0 0 0 3-3c0-1.66-1.34-3-3-3H4" }),
      r("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
    ],
  });

const Ua = ({ size: e = 24 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      r("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      r("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M8 12l3 3 5-6",
      }),
    ],
  });

const Ba = ({ size: e = 18 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      r("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
      r("line", { x1: "4", y1: "21", x2: "20", y2: "21" }),
    ],
  });

const Fa = ({ size: e = 24 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: r("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z",
    }),
  });

const st = ({ size: e = 24 }) =>
  r("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      r("path", {
        d: "M18 6L6 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      r("path", {
        d: "M6 6L18 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const Sr = ({ filled: e = false, size: t = 20 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 20 20",
    children: r("path", {
      stroke: "currentColor",
      strokeWidth: 2,
      d: "M14.953 5.046c-2.73-2.728-7.173-2.728-9.903 0-2.07 2.07-2.634 5.247-1.41 7.888.136.336.232.59.232.798 0 .247-.105.553-.205.849-.195.573-.416 1.222.058 1.696.475.475 1.125.251 1.697.055.294-.1.598-.205.84-.205.215 0 .486.109.798.235a7.034 7.034 0 0 0 7.893-1.412c2.73-2.73 2.73-7.172 0-9.904Z",
      clipRule: "evenodd",
      fill: e ? "currentColor" : "none",
    }),
  });

const Ns = ({ size: e = 18 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      r("path", {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      }),
      r("path", {
        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
      }),
    ],
  });

const Ha = ({ size: e = 8 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 8 8",
    children: [
      r("g", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        clipPath: "url(#af)",
        children: r("path", { d: "M1 4h6M4 1v6" }),
      }),
      r("defs", {
        children: r("clipPath", {
          id: "af",
          children: r("path", { fill: "#fff", d: "M0 0h8v8H0z" }),
        }),
      }),
    ],
  });

const Va = ({ size: e = 8 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 8 8",
    children: r("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M1 4h6",
    }),
  });

const Es = ({ size: e = 18 }) =>
  r("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: r("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.0463 8.361L19.6973 3.35C19.8203 3.118 19.8133 2.839 19.6773 2.613C19.5413 2.387 19.2973 2.25 19.0343 2.25H4.96533C4.55133 2.25 4.21533 2.586 4.21533 3V21C4.21533 21.414 4.55133 21.75 4.96533 21.75C5.37933 21.75 5.71533 21.414 5.71533 21V14.544L19.0443 14.365C19.3073 14.361 19.5483 14.221 19.6813 13.995C19.8143 13.768 19.8183 13.489 19.6943 13.258L17.0463 8.361Z",
      fill: "currentColor",
    }),
  });

const $n = ({ filled: e = false, size: t = 20, className: n }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    viewBox: "0 0 20 20",
    fill: "none",
    className: n,
    children: r("path", {
      fill: e ? "currentColor" : "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.667",
      d: "M10 4.583C8.75 2.917 6.25 2.5 4.583 3.75 2.917 5 2.083 7.5 3.333 10S10 16.667 10 16.667 15.417 12.5 16.667 10s0-5-1.667-6.25-4.167-.833-5 .833Z",
    }),
  });

const Rs = ({ size: e = 24 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: { animation: "spin 1s linear infinite" },
    children: r("path", { d: "M19 12a7 7 0 1 1-4.83-6.66" }),
  });

const Wa = ({ size: e = 24 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    children: [
      r("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M10.84 10.355a6.684 6.684 0 0 1 7.462-1.374c.158.071.331-.078.268-.24a8.109 8.109 0 0 0-1.825-2.773 8.175 8.175 0 0 0-5.837-2.429A8.175 8.175 0 0 0 5.07 5.968a8.338 8.338 0 0 0-1.66 9.34c.162.394.297.74.297 1.047 0 .326-.135.72-.26 1.094-.23.663-.46 1.354.02 1.844.49.49 1.18.25 1.843.019.374-.135.758-.26 1.075-.26.307 0 .653.135 1.047.289.958.45 2.123.793 3.22.786.176 0 .24-.222.108-.339-2.656-2.359-2.297-7.039.08-9.433Z",
        clipRule: "evenodd",
      }),
      r("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M20.34 17.93c0-.154.064-.324.164-.576a5.052 5.052 0 0 0-1.002-5.662 4.959 4.959 0 0 0-3.537-1.469 4.958 4.958 0 0 0-3.537 1.47 5.034 5.034 0 0 0 0 7.095A5.011 5.011 0 0 0 18.06 19.8c.229-.093.426-.173.586-.173.178.001.397.077.61.15.406.14.866.299 1.196-.033.33-.332.174-.791.036-1.197-.073-.215-.149-.436-.149-.617Z",
        clipRule: "evenodd",
      }),
    ],
  });

const ja = ({ size: e = 18 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: r("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [
        r("path", {
          d: "M9 2c-.53 0-1.04.219-1.414.608C7.21 2.998 7 3.526 7 4.077v4.846c0 .55.21 1.08.586 1.469.375.39.884.608 1.414.608.53 0 1.04-.219 1.414-.608.375-.39.586-.918.586-1.469V4.077c0-.55-.21-1.08-.586-1.469A1.963 1.963 0 0 0 9 2Z",
        }),
        r("path", {
          d: "M14 8v1.333c0 1.238-.527 2.425-1.464 3.3C11.598 13.508 10.326 14 9 14s-2.598-.492-3.536-1.367C4.527 11.758 4 10.571 4 9.333V8M9 14v2",
        }),
      ],
    }),
  });

const bs = ({ size: e = 18 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: r("path", {
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14.25 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    }),
  });

const za = ({ size: e = 24 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    children: r("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M8.078 10.367c0-.01.006-.019.006-.029V5.636a3.46 3.46 0 0 0 1.257.526.749.749 0 1 0 .299-1.469c-1.135-.23-1.589-1.333-1.606-1.375a.75.75 0 0 0-1.45.269v4.3a2.873 2.873 0 0 0-1.418-.384 2.92 2.92 0 0 0-2.916 2.918 2.92 2.92 0 0 0 2.916 2.916 2.92 2.92 0 0 0 2.917-2.916c0-.019-.005-.035-.005-.054ZM21.75 6.503a.749.749 0 0 0-1.067-.68c-2.557 1.189-5.245 1.683-7.982 1.469a.752.752 0 0 0-.568.196.752.752 0 0 0-.24.55v7.697a2.866 2.866 0 0 0-1.402-.377 2.907 2.907 0 0 0-2.903 2.904 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903v-6.925c.183.007.368.023.552.023 2.151 0 4.26-.427 6.303-1.228V14.2a2.87 2.87 0 0 0-1.403-.377 2.906 2.906 0 0 0-2.903 2.903 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903V6.502Z",
      "clip-rule": "evenodd",
    }),
  });

const qa = ({ size: e = 20 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    children: r("path", {
      fill: "currentColor",
      d: "M10.004 1C14.92 1 18.976 4.61 19 8.955c0 2.747-2.255 5-5.002 5h-1.797a1.477 1.477 0 0 0-1.502 1.501c0 .426.134.753.395 1.013.231.26.393.618.393 1.011 0 .848-.65 1.52-1.483 1.52C5.052 19 1 14.95 1 10s4.052-9 9.004-9ZM5.25 9a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm9-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-7-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4-1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
    }),
  });

const Ss = ({ size: e = 16 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: [
      r("rect", {
        width: "4",
        height: "10",
        x: "3",
        y: "3",
        fill: "currentColor",
        rx: "1.5",
      }),
      r("rect", {
        width: "4",
        height: "10",
        x: "9",
        y: "3",
        fill: "currentColor",
        rx: "1.5",
      }),
    ],
  });

const uo = ({ size: e = 18 }) =>
  r("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: r("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.0397 9.25349L14.7397 3.95349C13.9837 3.19649 12.6657 3.19649 11.9097 3.95349L11.3187 4.54549C10.7487 5.11449 10.5767 5.96749 10.8957 6.75249C11.0497 7.12649 10.9647 7.55249 10.6797 7.83949L9.34373 9.17449C9.22773 9.28849 9.08673 9.37449 8.93473 9.42249L5.77073 10.4125C5.46773 10.5085 5.18573 10.6795 4.95673 10.9065C4.57773 11.2855 4.36973 11.7875 4.36973 12.3225C4.36973 12.8575 4.57873 13.3585 4.95673 13.7355L7.07573 15.8545L3.59573 19.3345C3.30273 19.6275 3.30273 20.1025 3.59573 20.3955C3.74173 20.5415 3.93373 20.6145 4.12573 20.6145C4.31773 20.6145 4.50973 20.5415 4.65573 20.3955L8.13573 16.9145L10.2577 19.0365C10.6467 19.4255 11.1587 19.6195 11.6707 19.6195C12.1837 19.6195 12.6957 19.4245 13.0867 19.0355C13.3147 18.8055 13.4847 18.5235 13.5797 18.2205L14.5687 15.0605C14.6187 14.9045 14.7037 14.7635 14.8167 14.6505L16.1537 13.3125C16.4387 13.0265 16.8627 12.9415 17.2737 13.1085C18.0197 13.4155 18.8747 13.2465 19.4477 12.6745L20.0397 12.0815C20.8187 11.3015 20.8187 10.0325 20.0397 9.25349Z",
      fill: "currentColor",
    }),
  });

const Xa = ({ size: e = 20 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: r("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 20V10M12 20V4M6 20v-6",
    }),
  });

const ks = ({ size: e = 16 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: r("path", {
      fill: "currentColor",
      d: "M13 6.268c1.333.77 1.333 2.694 0 3.464l-6 3.464c-1.333.77-3-.192-3-1.732V4.536c0-1.54 1.667-2.502 3-1.732l6 3.464Z",
    }),
  });

const Is = ({ size: e = 24 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: r("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M5 12h14M12 5v14",
    }),
  });

const In = ({ size: e = 20 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      r("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m2 9 3-3 3 3",
      }),
      r("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M13 18H7a2 2 0 0 1-2-2V6M22 15l-3 3-3-3",
      }),
      r("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M11 6h6a2 2 0 0 1 2 2v10",
      }),
    ],
  });

const Ya = ({ size: e = 20, color: t = "currentColor" }) =>
  r("svg", {
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      r("path", {
        d: "M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      r("path", {
        d: "M7.6 11.908c.585.76 1.445 1.234 2.4 1.234.956 0 1.816-.474 2.4-1.234M7.308 7.504v-.043m-.038-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374ZM12.692 7.504v-.043m-.005-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374Z",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const Ga = ({ size: e = 16 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: r("rect", {
      width: "10",
      height: "10",
      x: "3",
      y: "3",
      fill: "currentColor",
      rx: "3",
    }),
  });

const Ps = ({ size: e = 18 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      r("polyline", { points: "3 6 5 6 21 6" }),
      r("path", {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
      }),
      r("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
      r("line", { x1: "14", y1: "11", x2: "14", y2: "17" }),
    ],
  });

const Za = ({ size: e = 16 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: [
      r("path", {
        fill: "#0080FF",
        d: "M6.724.821a1.63 1.63 0 0 1 2.858.051l.556 1.042a1.634 1.634 0 0 0 1.672.856l1.155-.166c1.263-.181 2.238 1.108 1.742 2.303L14.253 6a1.69 1.69 0 0 0 .385 1.863l.847.815c.927.891.544 2.47-.685 2.821l-1.122.32a1.663 1.663 0 0 0-1.192 1.468l-.098 1.181c-.108 1.294-1.56 1.974-2.596 1.216l-.946-.693a1.62 1.62 0 0 0-1.872-.033l-.969.658c-1.06.721-2.49-.01-2.552-1.306l-.058-1.184a1.666 1.666 0 0 0-1.141-1.51l-1.11-.36C-.073 10.864-.402 9.272.556 8.413l.874-.783a1.69 1.69 0 0 0 .448-1.849l-.416-1.108c-.454-1.212.565-2.466 1.821-2.24l1.148.207a1.632 1.632 0 0 0 1.7-.796L6.724.82Z",
      }),
      r("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.333",
        d: "M10.667 6.667 7.11 10.222 5.334 8.444",
      }),
    ],
  });

const Ka = ({ size: e = 20 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    children: r("path", {
      fill: "currentColor",
      d: "M9.905 2.501c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06H4.113c-2.422 0-4.113-1.67-4.113-4.06V6.56c0-2.391 1.691-4.06 4.113-4.06zm8.053 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675a1.43 1.43 0 0 1-1.412 1.436c-.215 0-.43-.05-.631-.153l-1.481-.748a1.62 1.62 0 0 1-.888-1.457V7.085c0-.621.34-1.18.888-1.456z",
    }),
  });

const As = ({ size: e = 20 }) =>
  r("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    children: [
      r("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M2 10s2.91-6 8-6 8 6 8 6-2.91 6-8 6-8-6-8-6Z",
      }),
      r("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      }),
    ],
  });

const _e = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  VERIFY_EMAIL: "/verify-email",
  RESET_PASSWORD: "/reset-password",
  ONBOARDING: "/onboarding",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  COOKIES: "/cookies",
  EXTERNAL: "/external",
  SUPPORT: "/support",
  CHILD_SAFETY: "/child-safety",
  SUBSCRIPTION_TERMS: "/subscription-terms",
};

const ho = [
  _e.LOGIN,
  _e.REGISTER,
  _e.FORGOT_PASSWORD,
  _e.RESET_PASSWORD,
  _e.VERIFY_EMAIL,
  _e.TERMS,
  _e.PRIVACY,
  _e.COOKIES,
  _e.EXTERNAL,
  _e.SUPPORT,
  _e.CHILD_SAFETY,
  _e.SUBSCRIPTION_TERMS,
];

const Qa = [
  _e.LOGIN,
  _e.REGISTER,
  _e.FORGOT_PASSWORD,
  _e.RESET_PASSWORD,
  _e.VERIFY_EMAIL,
  _e.ONBOARDING,
];

const Ja = "QYP36fUx";
const ec = "_7afjMMjS";
const tc = "crRhcI7j";
const nc = "mPvkVXNc";
const rc = "R6rPmVO3";
const oc = "_4M-jb-Yf";
const sc = "BzRajAFf";
const ic = "xWaW7ynd";
const ac = "mC4WabM6";
const cc = "CdIxpdOF";
const lc = "o8sqdA1y";
const uc = "G7wJQLhH";
const dc = "Idqhap9T";
const hc = "bcyDy-AX";

const Oe = {
  overlay: Ja,
  modalWrapper: ec,
  wide: tc,
  modal: nc,
  frameless: rc,
  header: oc,
  title: sc,
  closeButton: ic,
  externalCloseButton: ac,
  mobileOverlay: cc,
  closing: lc,
  bottomSheet: uc,
  dragHandle: dc,
  dragIndicator: hc,
};

const fc = Ht(null);
const mc = 100;
const pc = 0.5;
function gt({
  children: e,
  onClose: t,
  title: n,
  showHeader: o = true,
  showCloseButton: s = true,
  frameless: i = false,
  className: a,
  contentClassName: c,
  size: u = "default",
  onBeforeClose: l,
}) {
  pt();
  const h = I(null);
  const d = I(null);
  const f = I(null);
  const m = pt();
  const y = I(0);
  const g = I(false);
  const [p, _] = A(false);
  const v = I(0);
  const C = I(0);
  const T = I(0);
  V(() => {
    const G = (D) => {
      if (D.key === "Escape") {
        if (l && !l()) {
          return;
        }
        t();
      }
    };

    const ee = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", G);

    return () => {
      document.removeEventListener("keydown", G);
      document.documentElement.style.overflow = ee;
    };
  }, [t]);

  const w = (G) => {
    f.current = G.target;
  };

  const k = (G) => {
    if (f.current === h.current && G.target === h.current) {
      if (m) {
        S();
      } else {
        if (l && !l()) {
          return;
        }
        t();
      }
    }
    f.current = null;
  };

  const S = b(() => {
    if (l && !l()) {
      N(0, "transform 0.2s ease-out");
      U(0);
      y.current = 0;
      return;
    }
    _(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, l]);

  const E = I(false);
  const R = I(false);

  const P = (G) => {
    let ee = G;

    while (ee && ee !== d.current) {
      const W = window.getComputedStyle(ee).overflowY;
      if (
        (W === "auto" || W === "scroll") &&
        ee.scrollHeight > ee.clientHeight
      ) {
        return ee;
      }
      ee = ee.parentElement;
    }

    return null;
  };

  const N = (G, ee) => {
    if (d.current) {
      d.current.style.transform = G > 0 ? `translateY(${G}px)` : "";
      d.current.style.transition = ee || "";
    }
  };

  const U = (G) => {
    if (h.current && G > 0) {
      h.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
        0,
        0.4 - G / 500
      )})`;
    } else if (h.current) {
      h.current.style.backgroundColor = "";
    }
  };

  const O = (G) => {
    if (!m) {
      return;
    }
    v.current = G.touches[0].clientY;
    C.current = Date.now();
    T.current = G.touches[0].clientY;
    const G_target = G.target;
    if (G_target.closest(`.${Oe.dragHandle}`)) {
      E.current = true;
      R.current = true;
      g.current = true;

      if (d.current) {
        d.current.style.transition = "none";
      }

      return;
    }
    E.current = false;

    if (
      G_target.closest(
        'button, a, input, textarea, select, video, [role="button"]'
      )
    ) {
      R.current = false;
      return;
    }

    if (G_target.tagName === "CANVAS" || G_target.closest("canvas")) {
      R.current = false;
      return;
    }
    const M = P(G_target);
    R.current = !M || M.scrollTop === 0;
  };

  const X = (G) => {
    if (!m) {
      return;
    }
    const ee = G.touches[0].clientY;
    const D = ee - v.current;
    T.current = ee;

    if (E.current) {
      if (D > 0) {
        y.current = D;
        N(D);
        U(D);
        G.preventDefault();
      }

      return;
    }

    if (R.current) {
      if (g.current && y.current > 0) {
        if (D > 0) {
          y.current = D;
          N(D);
          U(D);
          G.preventDefault();
        } else {
          y.current = 0;
          g.current = false;
          N(0);
          U(0);
        }

        return;
      }

      if (D > 0) {
        g.current ||
          ((g.current = true),
          d.current && (d.current.style.transition = "none"));
        y.current = D;
        N(D);
        U(D);
        G.preventDefault();
      }
    }
  };

  const te = () => {
    if (!m) {
      return;
    }
    const G = T.current - v.current;
    const ee = Date.now() - C.current;
    const D = G / ee;

    if (g.current && (G > mc || D > pc)) {
      S();
    } else if (y.current > 0) {
      N(0, "transform 0.2s ease-out");
      U(0);
      y.current = 0;
    }

    g.current = false;
    E.current = false;
    R.current = false;
  };

  const ae = (() => {
    if (m && p) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const ce = { onClose: t, isMobile: m, isClosing: p, handleClose: S };
  return r(fc.Provider, {
    value: ce,
    children: r("div", {
      ref: h,
      className: `${Oe.overlay} ${m ? Oe.mobileOverlay : ""} ${
        p ? Oe.closing : ""
      }`,
      onMouseDown: w,
      onMouseUp: k,
      children: r("div", {
        ref: d,
        className: `${Oe.modalWrapper} ${u === "wide" ? Oe.wide : ""} ${
          m ? Oe.bottomSheet : ""
        }`,
        style: ae,
        onTouchStart: O,
        onTouchMove: X,
        onTouchEnd: te,
        children: [
          i &&
            !m &&
            r("button", {
              type: "button",
              className: Oe.externalCloseButton,
              onClick: (G) => {
                G.stopPropagation();
                t();
              },
              children: r(st, { size: 24 }),
            }),
          m &&
            r("div", {
              className: Oe.dragHandle,
              children: r("div", { className: Oe.dragIndicator }),
            }),
          r("div", {
            className: `${Oe.modal} ${i ? Oe.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !i &&
                o &&
                !m &&
                r("div", {
                  className: Oe.header,
                  children: [
                    r("span", { className: Oe.title, children: n }),
                    s &&
                      r("button", {
                        type: "button",
                        className: Oe.closeButton,
                        onClick: (G) => {
                          G.stopPropagation();
                          t();
                        },
                        children: r(st, { size: 16 }),
                      }),
                  ],
                }),
              e,
            ],
          }),
        ],
      }),
    }),
  });
}
const gc = "GKtAeZvh";
const vc = "_4kYPGG9W";
const _c = "pl3SNO9Y";
const wc = "-OjVJvXv";
const yc = "mKywUPJV";
const Cc = "ORxo1gch";
const Tc = "_-0ox-2T5";
const Nc = "ufqwLNRT";
const Ec = "Kb0ZHEmq";
const Rc = "L6foA0ob";
const bc = "p8fXVDg6";
const Sc = "iiFzRcQy";

const wt = {
  avatar: gc,
  xs: vc,
  emoji: _c,
  onlineDot: wc,
  sm: yc,
  md: Cc,
  lg: Tc,
  xl: Nc,
  badge: Ec,
  followBadge: Rc,
  notFollowing: bc,
  following: Sc,
};

function kc(e) {
  return (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith("https://") ||
    e.startsWith("/")
  );
}
function ze({
  src: e,
  alt: t,
  size: n = "md",
  badge: o,
  online: s,
  followBadge: i,
  onFollowBadgeClick: a,
  className: c,
}) {
  const u = e ? kc(e) : false;
  return r("div", {
    className: `${wt.avatar} ${wt[n]} ${c || ""}`,
    children: [
      u && e
        ? r("img", { src: e, alt: t || "" })
        : r("span", { className: wt.emoji, children: e || "👤" }),
      o && r("div", { className: wt.badge, children: o }),
      i !== undefined
        ? r("button", {
            type: "button",
            className: `${wt.followBadge} ${
              i ? wt.following : wt.notFollowing
            }`,
            onClick: (l) => {
              l.preventDefault();
              l.stopPropagation();
              a?.(l);
            },
            children: i ? r(Va, { size: 8 }) : r(Ha, { size: 8 }),
          })
        : s && r("span", { className: wt.onlineDot }),
    ],
  });
}
const Ic = "LGbsLd3i";
const Pc = "Qtvr3ePW";
const Ac = "I1XzQEdO";
const jn = { hint: Ic, multiline: Pc, arrow: Ac };
function Pn({ text: e, children: t, className: n, multiline: o }) {
  const s = I(null);
  const [i, a] = A(null);

  const c = b(() => {
    if (!s.current) {
      return;
    }
    const h = s.current.getBoundingClientRect();
    a({ x: h.left + h.width / 2, y: h.top });
  }, []);

  const u = b(() => {
    a(null);
  }, []);

  const l = b(
    (h) => {
      h.stopPropagation();

      if (i) {
        u();
      } else {
        c();
      }
    },
    [i, c, u]
  );

  V(() => {
    if (!i) {
      return;
    }
    const h = (d) => {
      if (s.current && !s.current.contains(d.target)) {
        u();
      }
    };
    document.addEventListener("touchstart", h);
    document.addEventListener("mousedown", h);
    window.addEventListener("scroll", u, true);

    return () => {
      document.removeEventListener("touchstart", h);
      document.removeEventListener("mousedown", h);
      window.removeEventListener("scroll", u, true);
    };
  }, [i, u]);

  return r("span", {
    ref: s,
    className: n,
    onMouseEnter: c,
    onMouseLeave: u,
    onClick: l,
    children: [
      t,
      i &&
        _t(
          r("div", {
            className: `${jn.hint} ${o ? jn.multiline : ""}`,
            style: { left: `${i.x}px`, top: `${i.y}px` },
            children: [e, r("span", { className: jn.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const xc = "uX6mG52K";
const Oc = "u5FjrrfL";
const Lc = "Z9f7Q3jS";
const Mc = "L-43NjOb";
const $c = "E60wxVvR";
const Dc = "_0dqhEKnD";
const Uc = "c-uIo5yi";
const Bc = "cB-8IXk5";
const Fc = "aUamxQ7e";
const Hc = "ObQk27rJ";
const Vc = "ovunVXLq";
const Wc = "ohs8Npaw";
const jc = "_0K-Z1eD9";
const zc = "JMg1QWQj";
const qc = "_9DD7EG-T";
const Xc = "R0v2YBUB";
const Yc = "kM0p8-Sv";
const Gc = "GWzRyPXS";
const Zc = "PURIUyt6";
const Kc = "oTS4L6S0";
const Qc = "hgcZGLcX";
const Jc = "FCPywiPM";
const el = "ynvn-v5t";
const tl = "rost2Xx2";
const nl = "mAyptXfj";
const rl = "IJ-MKy8P";
const ol = "av5HkGSu";
const sl = "-TUw-Z3K";
const il = "eLLh95k2";
const al = "wc3kGqhz";

const q = {
  modal: xc,
  sub: Oc,
  title: Lc,
  section: Mc,
  profileSection: $c,
  label: Dc,
  labelRow: Uc,
  dim: Bc,
  row: Fc,
  icon: Hc,
  iconGradient: Vc,
  name: Wc,
  nameGradient: jc,
  namePinBadge: zc,
  plans: qc,
  planOption: Xc,
  selected: Yc,
  radio: Gc,
  radioDot: Zc,
  features: Kc,
  featureContent: Qc,
  featureTitle: Jc,
  gradientText: el,
  soon: tl,
  infoBtn: nl,
  footer: rl,
  disclaimer: ol,
  disclaimerLink: sl,
  subscribeBtn: il,
  activeLabel: al,
};

function fo({ text: e }) {
  return r(Pn, {
    text: e,
    multiline: true,
    children: r("span", {
      className: q.infoBtn,
      children: r(Cs, { size: 14 }),
    }),
  });
}
function cl({ isOpen: e, onClose: t }) {
  const n = vs();
  const [o, s] = A(false);
  if (!e) {
    return null;
  }
  const i = n?.subscription?.isActive ?? false;
  const a = "199";

  const c = async () => {
    if (o) {
      return;
    }
    s(true);
    const u = window.open("about:blank", "_blank");
    try {
      const l = await ia.pay();
      if (l.error) {
        u?.close();
        Ze.error(l.error);
        return;
      }

      if (l.confirmationUrl && u) {
        u.location.href = l.confirmationUrl;
      } else if (l.confirmationUrl) {
        window.location.href = l.confirmationUrl;
      }
    } catch (l) {
      u?.close();
      Ze.error(l?.message || "Ошибка при создании платежа");
    } finally {
      s(false);
    }
  };

  return _t(
    r(gt, {
      onClose: t,
      showHeader: false,
      frameless: true,
      className: q.modal,
      children: r("div", {
        className: q.sub,
        children: [
          r("div", { className: q.title, children: "ИТД НУКСТА" }),
          r("div", {
            className: `${q.section} ${q.profileSection}`,
            children: [
              r("div", {
                className: q.label,
                children: "Ваш профиль с ИТД НУКСТА",
              }),
              r("div", {
                className: q.row,
                children: [
                  r(ze, { src: n?.avatar || null, size: "sm" }),
                  r("div", {
                    children: [
                      r("div", {
                        className: q.name,
                        children: [
                          r("span", {
                            className: q.nameGradient,
                            children: n?.displayName,
                          }),
                          r("img", {
                            src: "/assets/pins/subscription_nuksta.gif",
                            alt: "НУКСТА",
                            width: 24,
                            height: 24,
                            className: q.namePinBadge,
                          }),
                        ],
                      }),
                      r("div", { className: q.dim, children: "только что" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          r("div", {
            className: q.plans,
            children: r("button", {
              type: "button",
              className: `${q.planOption} ${q.selected}`,
              children: [
                r("div", {
                  className: q.row,
                  children: [
                    r("div", {
                      className: q.radio,
                      children: r("div", { className: q.radioDot }),
                    }),
                    r("span", { children: "1 месяц" }),
                  ],
                }),
                r("span", { className: q.dim, children: "199 ₽" }),
              ],
            }),
          }),
          r("div", {
            className: q.section,
            children: [
              r("div", {
                className: q.labelRow,
                children: [
                  r("span", {
                    className: q.label,
                    children: "Прикольные украшалки",
                  }),
                  r(fo, {
                    text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                  }),
                ],
              }),
              r("div", {
                className: q.features,
                children: [
                  r("div", {
                    className: q.row,
                    children: [
                      r("span", {
                        className: q.icon,
                        children: r("div", { className: q.iconGradient }),
                      }),
                      r("div", {
                        children: [
                          r("div", {
                            className: `${q.featureTitle} ${q.gradientText}`,
                            children: "Уникальный цвет ника",
                          }),
                          r("div", {
                            className: q.dim,
                            children:
                              "Клевый цвет ника, который показывает, что вы поддерживаете итд!",
                          }),
                        ],
                      }),
                    ],
                  }),
                  r("div", {
                    className: q.row,
                    children: [
                      r("span", {
                        className: q.icon,
                        children: r("img", {
                          src: "/assets/pins/subscription_nuksta.gif",
                          alt: "Пин",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      r("div", {
                        children: [
                          r("div", {
                            className: q.featureTitle,
                            children: "Пин поддерживателя",
                          }),
                          r("div", {
                            className: q.dim,
                            children:
                              "Получите уникальный пин за поддержку итд",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          r("div", {
            className: q.section,
            children: [
              r("div", {
                className: q.labelRow,
                children: [
                  r("span", {
                    className: q.label,
                    children: "Сможете с нами тестить новые штуки",
                  }),
                  r(fo, {
                    text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                  }),
                ],
              }),
              r("div", {
                className: q.features,
                children: [
                  r("div", {
                    className: q.row,
                    children: [
                      r("span", {
                        className: q.icon,
                        children: r(Ka, { size: 20 }),
                      }),
                      r("div", {
                        className: q.featureContent,
                        children: [
                          r("div", {
                            className: q.featureTitle,
                            children: "Загрузка видео",
                          }),
                          r("div", {
                            className: q.dim,
                            children:
                              "Получите возможность загружать видео одним из первых",
                          }),
                        ],
                      }),
                    ],
                  }),
                  r("div", {
                    className: q.row,
                    children: [
                      r("span", {
                        className: q.icon,
                        children: r(Wa, { size: 20 }),
                      }),
                      r("div", {
                        className: q.featureContent,
                        children: [
                          r("div", {
                            className: q.featureTitle,
                            children: [
                              "Сообщения ",
                              r("span", {
                                className: q.soon,
                                children: "soon",
                              }),
                            ],
                          }),
                          r("div", {
                            className: q.dim,
                            children:
                              "Получите доступ к месенджеру одним из первых",
                          }),
                        ],
                      }),
                    ],
                  }),
                  r("div", {
                    className: q.row,
                    children: [
                      r("span", {
                        className: q.icon,
                        children: r(za, { size: 20 }),
                      }),
                      r("div", {
                        className: q.featureContent,
                        children: [
                          r("div", {
                            className: q.featureTitle,
                            children: [
                              "Музыка ",
                              r("span", {
                                className: q.soon,
                                children: "soon",
                              }),
                            ],
                          }),
                          r("div", {
                            className: q.dim,
                            children:
                              "Получите доступ к музыке без рекламы в итд раньше всех",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          r("div", {
            className: q.footer,
            children: [
              r("div", {
                className: q.disclaimer,
                children: [
                  "Оплачивая, вы соглашаетесь с ",
                  r("a", {
                    href: "/subscription-terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: q.disclaimerLink,
                    children: "условиями платного доступа",
                  }),
                  ", ",
                  r("a", {
                    href: "/privacy",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: q.disclaimerLink,
                    children: "политикой конфиденциальности",
                  }),
                  " и ",
                  r("a", {
                    href: "/terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: q.disclaimerLink,
                    children: "условиями использования",
                  }),
                  ".",
                ],
              }),
              i
                ? r("div", {
                    className: q.activeLabel,
                    children: "Подписка активна",
                  })
                : r("button", {
                    type: "button",
                    className: q.subscribeBtn,
                    onClick: c,
                    disabled: o,
                    children: `Оплатить ${a}₽`,
                  }),
            ],
          }),
        ],
      }),
    }),
    document.body
  );
}
const ll = "z8EyAYBL";
const ul = "Y3JzbYs0";
const dl = "XG8iIx1m";
const hl = "lqZNoMkv";
const qt = {
  sidebar: ll,
  sidebarContent: ul,
  sidebarBottom: dl,
  legalLinks: hl,
};

const fl = () => {
  const [e] = Oi();
  return (
    Te(() => {
      const n = e.url || "/";
      return Qa.some((o) => n.startsWith(o));
    }, [e.url]) ||
    r("aside", {
      className: qt.sidebar,
      children: [
        r("div", { className: qt.sidebarContent }),
        r("div", {
          className: qt.sidebarBottom,
          children: [
            r("ul", {
              className: qt.legalLinks,
              children: [
                r("li", {
                  children: r("a", {
                    href: "https://статус.итд.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Статус серверов",
                  }),
                }),
                r("li", {
                  children: r("a", {
                    href: "/terms",
                    children: "Условия использования",
                  }),
                }),
                r("li", {
                  children: r("a", {
                    href: "/privacy",
                    children: "Конфиденциальность",
                  }),
                }),
                r("li", {
                  children: r("a", {
                    href: "/cookies",
                    children: "Политика Cookies",
                  }),
                }),
              ],
            }),
            r("span", {
              className: qt.copyright,
              children: "© 2026 ООО «ИТД»",
            }),
          ],
        }),
      ],
    })
  );
};

const xs = Ht(null);
let ml = 0;
function pl({ children: e }) {
  const [t, n] = A([]);

  const o = b((a) => {
    const c = `modal-${++ml}`;

    n((u) => [...u, { id: c, component: a }]);

    return c;
  }, []);

  const s = b((a) => {
    n((c) => (a ? c.filter((u) => u.id !== a) : c.slice(0, -1)));
  }, []);

  const i = b(() => {
    n([]);
  }, []);

  V(() => {
    let a = window.location.pathname + window.location.search;
    const c = () => {
      const h = window.location.pathname + window.location.search;

      if (h !== a) {
        a = h;
        n([]);
      }
    };
    window.addEventListener("popstate", c);

    const { pushState, replaceState } = history;

    history.pushState = function (...h) {
      pushState.apply(this, h);
      c();
    };

    history.replaceState = function (...h) {
      replaceState.apply(this, h);
      c();
    };

    return () => {
      window.removeEventListener("popstate", c);
      history.pushState = pushState;
      history.replaceState = replaceState;
    };
  }, []);

  return r(xs.Provider, {
    value: { openModal: o, closeModal: s, closeAllModals: i },
    children: [
      e,
      t.length > 0 &&
        _t(
          r(Re, {
            children: t.map(({ id: a, component: c }) =>
              r("div", { children: c }, a)
            ),
          }),
          document.body
        ),
    ],
  });
}
function Dn() {
  const e = On(xs);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const gl = "eVYjVkOA";
const vl = "VH5uACo-";
const _l = "bTnQQZzL";
const wl = "J-wdczzJ";
const yl = "-aJk1548";
const Cl = "GJ-316Mz";
const mo = { spinner: gl, spin: vl, xs: _l, sm: wl, md: yl, lg: Cl };
function vt({ size: e = "md", className: t }) {
  const n = [mo.spinner, mo[e], t].filter(Boolean).join(" ");
  return r("div", { className: n, children: r(Rs, {}) });
}
const Tl = "WsNIl9yN";
const Nl = "s-rIVNft";
const El = "QJCDyxuF";
const Rl = "idj8YT1-";
const bl = "PYBTadOt";
const Sl = "_0RWSXOse";
const kl = "X3An-GSw";
const Il = "BCtviEiQ";
const Pl = "kZamU7XS";
const Al = "FVEEba1t";
const xl = "_2NIyBgLE";
const Ol = "IRuH4aXh";

const Mt = {
  button: Tl,
  primary: Nl,
  secondary: El,
  ghost: Rl,
  accent: bl,
  danger: Sl,
  sm: kl,
  md: Il,
  lg: Pl,
  fullWidth: Al,
  iconOnly: xl,
  loading: Ol,
};

function Me({
  children: e,
  variant: t = "primary",
  size: n = "md",
  fullWidth: o = false,
  iconOnly: s = false,
  loading: i = false,
  className: a,
  type: c = "button",
  disabled: u,
  ...l
}) {
  const h = [
    Mt.button,
    Mt[t],
    Mt[n],
    o && Mt.fullWidth,
    s && Mt.iconOnly,
    i && Mt.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return r("button", {
    type: c,
    className: h,
    disabled: u || i,
    ...l,
    children: i ? r(vt, { size: "sm" }) : e,
  });
}
const Ll = "THCvAwre";
const Ml = "sRlzWhtw";
const $l = "pitt3a-W";
const Dl = "tBAzXrnN";
const Ul = "ZpD0zMWZ";
const Bl = "_4WT1OTu3";
const Fl = "MILRHLTo";
const Hl = "nCy8Y3ZB";
const Vl = "Ib0lgBwH";
const Wl = "V-L-u7tm";
const jl = "JALjGN2Z";

const je = {
  picker: Ll,
  searchFloating: Ml,
  searchInput: $l,
  skinTonePopup: Dl,
  skinVariantButton: Ul,
  skinVariantImage: Bl,
  content: Fl,
  categoryTitle: Hl,
  emojiGrid: Vl,
  emojiButton: Wl,
  noResults: jl,
};

const zl = [
  "Smileys & Emotion",
  "People & Body",
  "Animals & Nature",
  "Food & Drink",
  "Travel & Places",
  "Activities",
  "Objects",
  "Symbols",
  "Flags",
];

const ql = ["", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"];
const Os = "emoji-picker-recent";
const Sn = 32;

const Xl = (e) => {
  try {
    return String.fromCodePoint(...e.split("-").map((t) => parseInt(t, 16)));
  } catch {
    return "";
  }
};

const kr = (e) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${e.toLowerCase()}.png`;

const po = () => {
  try {
    const e = localStorage.getItem(Os);
    return e ? JSON.parse(e) : [];
  } catch {
    return [];
  }
};

const Yl = (e) => {
  try {
    localStorage.setItem(Os, JSON.stringify(e.slice(0, Sn)));
  } catch {}
};

const Gl = (e) => {
  const t = [];
  const n = {};
  for (const [o, s] of Object.entries(e)) {
    n[o] = s.map((i) => {
      const a = Array.isArray(i.s) ? i.s : [i.s];

      const c = {
        unified: i.u,
        short_name: a[0],
        short_names: a,
        category: o,
        skin_variations: i.v,
      };

      t.push(c);
      return c;
    });
  }
  return { all: t, byCategory: n };
};

let pn = null;

const Zl = () => {
  const [e, t] = A(pn);
  const [n, o] = A(!pn);

  V(() => {
    if (pn) {
      return;
    }
    (async () => {
      try {
        const i = await ge(() => import("./emoji-data-DrtcpqC0.js"), []);

        const a = Gl(i.default);
        pn = a;
        t(a);
      } catch (i) {
        console.error("Failed to load emoji data:", i);
      } finally {
        o(false);
      }
    })();
  }, []);

  return Te(
    () => ({
      all: e?.all ?? [],
      byCategory: e?.byCategory ?? {},
      isLoading: n,
    }),
    [e, n]
  );
};

const Kl = (e) => {
  const [t, n] = A([]);
  const o = I([]);
  V(() => {
    n(po());
  }, []);

  const s = Te(
    () =>
      t
        .slice(0, Sn)
        .map((c) => e.find((u) => u.unified === c))
        .filter((c) => c !== undefined),
    [t, e]
  );

  const i = b((c) => {
    if (!o.current.includes(c)) {
      o.current.push(c);
    }
  }, []);

  const a = b(() => {
    if (o.current.length === 0) {
      return;
    }
    const c = po();
    const l = [...o.current];
    for (const h of c) {
      if (!l.includes(h)) {
        l.push(h);
      }
    }
    Yl(l.slice(0, Sn));
    n(l.slice(0, Sn));
    o.current = [];
  }, []);

  return { recentEmojis: s, addRecentEmoji: i, flushRecentEmojis: a };
};

const Ql = ({ emoji: e, onClick: t }) =>
  r("button", {
    className: je.emojiButton,
    onClick: t,
    children: r("img", {
      src: kr(e.unified),
      alt: e.short_name,
      loading: "lazy",
    }),
  });

const Ls = (e) => {
  const t = [e.unified];
  if (e.skin_variations) {
    for (const n of ql.slice(1)) {
      const o = e.skin_variations[n];

      if (o) {
        t.push(o);
      }
    }
  }
  return t;
};

const Jl = ({ popup: e, onSelect: t, onClose: n }) => {
  const o = I(null);
  const s = Ls(e.emoji);

  V(() => {
    const i = (a) => {
      if (o.current && !o.current.contains(a.target)) {
        n();
      }
    };
    document.addEventListener("mousedown", i);

    return () => document.removeEventListener("mousedown", i);
  }, [n]);

  return r("div", {
    ref: o,
    className: je.skinTonePopup,
    style: { left: e.x, top: e.y },
    children: s.map((i) =>
      r(
        "button",
        {
          className: je.skinVariantButton,
          onClick: () => t(i, e.emoji.short_name),
          children: r("img", {
            src: kr(i),
            alt: "",
            className: je.skinVariantImage,
          }),
        },
        i
      )
    ),
  });
};

const Ms = ({ emojis: e, onEmojiClick: t }) =>
  r("div", {
    className: je.emojiGrid,
    children: e.map((n) =>
      r(Ql, { emoji: n, onClick: (o) => t(n, o) }, n.unified)
    ),
  });

const eu = ({ name: e, emojis: t, onEmojiClick: n, sectionRef: o }) =>
  r("div", {
    ref: o,
    className: je.categorySection,
    children: [
      r("div", { className: je.categoryTitle, children: e }),
      r(Ms, { emojis: t, onEmojiClick: n }),
    ],
  });

const tu = ({ value: e, onChange: t, placeholder: n = "Search emojis..." }) =>
  r("div", {
    className: je.searchFloating,
    children: r("input", {
      type: "text",
      className: je.searchInput,
      placeholder: n,
      value: e,
      onInput: (o) => t(o.target.value),
    }),
  });

const nu = ({
  onEmojiSelect: e,
  onClose: t,
  width: n = 280,
  height: o = 380,
  excludeCategories: s = [],
}) => {
  const [i, a] = A("apple");
  const [c, u] = A("");
  const [l, h] = A(null);
  const d = I(null);
  const f = I(null);
  const m = I({});
  const { all: y, byCategory: g, isLoading: p } = Zl();
  const { recentEmojis: _, addRecentEmoji: v, flushRecentEmojis: C } = Kl(y);
  V(
    () => () => {
      C();
      t?.();
    },
    [C, t]
  );

  const T = Te(() => {
    if (!c.trim()) {
      return null;
    }
    const R = c.toLowerCase();
    return y
      .filter(
        (P) =>
          !s.includes(P.category) &&
          P.short_names.some((N) => N.toLowerCase().includes(R))
      )
      .slice(0, 100);
  }, [c, y, s]);

  const w = Te(() => {
    if (i === "apple") {
      const R = [];

      if (_.length > 0) {
        R.push({ id: "recent", name: "Recent", emojis: _ });
      }

      for (const P of zl) {
        if (s.includes(P)) {
          continue;
        }
        const N = g[P] || [];

        if (N.length !== 0) {
          R.push({ id: P, name: P.split(" & ")[0], emojis: N });
        }
      }
      return R;
    }
    return [];
  }, [i, _, g, s]);

  const k = b((R, P) => {
    if (Ls(R).length > 1) {
      const P_currentTarget = P.currentTarget;
      const O = f.current?.getBoundingClientRect();
      const X = P_currentTarget.getBoundingClientRect();
      if (O) {
        const te = X.left - O.left + X.width / 2;
        const J = X.top - O.top - 60;
        h({ emoji: R, x: te, y: J });
      }
      return;
    }
    S(R.unified, R.short_name);
  }, []);

  const S = b(
    (R, P) => {
      v(R);
      h(null);
      e({ unified: R, emoji: Xl(R), name: P, imageUrl: kr(R) });
    },
    [e, v]
  );

  const E = () =>
    p
      ? r(vt, {})
      : c && T
      ? T.length === 0
        ? r("div", { className: je.noResults, children: "No emojis found" })
        : r(Ms, { emojis: T, onEmojiClick: k })
      : r(Re, {
          children: w.map((R) =>
            r(
              eu,
              {
                name: R.name,
                emojis: R.emojis,
                onEmojiClick: k,
                sectionRef: (P) => {
                  m.current[R.id] = P;
                },
              },
              R.id
            )
          ),
        });

  return r("div", {
    className: je.picker,
    style: { width: n, height: o },
    ref: f,
    children: [
      l && r(Jl, { popup: l, onSelect: S, onClose: () => h(null) }),
      r("div", { className: je.content, ref: d, children: E() }),
      r(tu, { value: c, onChange: u }),
    ],
  });
};

const ru = "-cIO9SLG";
const ou = "JNwvD1Vo";
const su = "IHofJbwy";
const zn = { wrapper: ru, popup: ou, closing: su };
const go = 280;
const vo = 380;
const qn = 8;
const iu = 100;
const _o = 150;
const au = 150;
function Ir({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [o, s] = A(false);
  const [i, a] = A(false);
  const [c, u] = A(null);
  const l = I(null);
  const h = I(null);
  const d = I(null);
  const f = I(null);
  const m = I(null);
  const y = I(null);

  const g = b(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }
    const E = l_current.getBoundingClientRect();

    const { innerHeight, innerWidth } = window;

    const N = innerHeight - E.bottom;
    const U = innerWidth - E.left;
    const E_right = E.right;
    const X = N >= vo + qn ? "bottom" : "top";
    const te = U >= go || U > E_right ? "left" : "right";
    let J;
    let ae;

    if (X === "top") {
      J = E.top - vo - qn;
    } else {
      J = E.bottom + qn;
    }

    if (te === "left") {
      ae = E.left;
    } else {
      ae = E.right - go;
    }

    u({
      top: J,
      left: ae,
      transformOrigin: `${X === "top" ? "bottom" : "top"} ${
        te === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const p = b(() => {
    if (!o && !i) {
      if (!i) {
        g();
        s(true);
      }
    }
  }, [o, i, g]);

  const _ = b(() => {
    if (o && !i) {
      if (!i) {
        a(true);

        y.current = window.setTimeout(() => {
          s(false);
          a(false);
        }, au);
      }
    }
  }, [o, i]);

  const v = () => {
    if (m.current) {
      clearTimeout(m.current);
      m.current = null;
    }

    if (y.current) {
      clearTimeout(y.current);
      y.current = null;
    }

    if (i) {
      a(false);
    }

    if (!o) {
      f.current = window.setTimeout(() => {
        p();
      }, iu);
    }
  };

  const C = () => {
    if (f.current) {
      clearTimeout(f.current);
      f.current = null;
    }

    m.current = window.setTimeout(() => {
      _();
    }, _o);
  };

  V(
    () => () => {
      if (f.current) {
        clearTimeout(f.current);
      }

      if (m.current) {
        clearTimeout(m.current);
      }

      if (y.current) {
        clearTimeout(y.current);
      }
    },
    []
  );

  const T = () => {
    if (m.current) {
      clearTimeout(m.current);
      m.current = null;
    }

    if (y.current) {
      clearTimeout(y.current);
      y.current = null;
    }

    if (i) {
      a(false);
    }
  };

  const w = () => {
    m.current = window.setTimeout(() => {
      _();
    }, _o);
  };

  const k = (S) => {
    S.preventDefault();
  };

  return r("div", {
    ref: h,
    className: zn.wrapper,
    onMouseEnter: v,
    onMouseLeave: C,
    onMouseDown: k,
    children: [
      r("button", {
        ref: l,
        className: t,
        title: "Добавить эмоджи",
        children: r(Ya, { size: n }),
      }),
      o &&
        c &&
        _t(
          r("div", {
            ref: d,
            className: `${zn.popup} ${i ? zn.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: T,
            onMouseLeave: w,
            onMouseDown: k,
            children: r(nu, { onEmojiSelect: e }),
          }),
          document.body
        ),
    ],
  });
}
const cu = "_2sS6K7hx";
const lu = "WGDOlmRO";
const uu = "hvpitmZY";
const du = "BStIlELw";
const hu = "aY94etMT";
const fu = "rPynk8pw";
const mu = "BOAqDnoc";
const pu = "haxq9tnV";
const gu = "_913-arE-";
const vu = "_76HhedQ0";
const _u = "_7PQB1LTO";
const wu = "UnOw5SXP";
const yu = "s594n2Yt";
const Cu = "nOfp-no-";
const Tu = "PRj4ZKu-";
const Nu = "_0a-n56Kv";

const Ae = {
  editor: cu,
  empty: lu,
  bold: uu,
  italic: du,
  underline: hu,
  strike: fu,
  spoiler: mu,
  monospace: pu,
  quote: gu,
  link: vu,
  menu: _u,
  buttons: wu,
  button: yu,
  linkForm: Cu,
  linkInput: Tu,
  linkSubmit: Nu,
};

const Eu = [
  { type: "bold", icon: Aa, title: "Жирный" },
  { type: "italic", icon: La, title: "Курсив" },
  { type: "underline", icon: Ba, title: "Подчёркнутый" },
  { type: "strike", icon: Da, title: "Зачёркнутый" },
  { type: "spoiler", icon: $a, title: "Спойлер" },
  { type: "monospace", icon: xa, title: "Моноширинный" },
  { type: "quote", icon: Ma, title: "Цитата" },
  { type: "link", icon: Ts, title: "Ссылка" },
];

const An = {
  bold: Ae.bold,
  italic: Ae.italic,
  underline: Ae.underline,
  strike: Ae.strike,
  spoiler: Ae.spoiler,
  monospace: Ae.monospace,
  quote: Ae.quote,
  link: Ae.link,
};

const Un = rs(
  (
    {
      value: t,
      spans: n,
      onChange: o,
      placeholder: s = "Написать...",
      maxLength: i = 5000 /* 5e3 */,
      autoFocus: a = false,
      className: c = "",
      minHeight: u = 40,
      maxHeight: l = 400,
      onSubmit: h,
      disableFormatting: d = false,
      onImagePaste: f,
    },
    m
  ) => {
    const y = I(null);
    const [g, p] = A(false);
    const [_, v] = A({ x: 0, y: 0 });
    const [C, T] = A(false);
    const [w, k] = A("");
    const S = I(null);
    const E = I(null);
    const R = I(null);
    const P = I(false);
    const N = I(false);
    const U = I(t);
    const O = I(n);
    const X = I(o);

    V(() => {
      U.current = t;
      O.current = n;
      X.current = o;
    }, [t, n, o]);

    _r(
      m,
      () => ({
        insertText: (x) => {
          const y_current = y.current;
          if (!y_current) {
            return;
          }
          y_current.focus();
          const $ = window.getSelection();
          if (!$) {
            return;
          }
          let z = 0;
          if ($.rangeCount > 0) {
            const oe = $.getRangeAt(0);
            z = Su(y_current, oe.startContainer, oe.startOffset);
          }
          const U_current = U.current;
          const O_current = O.current;
          const re = U_current.slice(0, z) + x + U_current.slice(z);

          const ie = O_current.map((oe) =>
            oe.offset >= z
              ? { ...oe, offset: oe.offset + x.length }
              : oe.offset + oe.length > z
              ? { ...oe, length: oe.length + x.length }
              : oe
          );

          N.current = true;
          U.current = re;
          O.current = ie;
          const fe = document.createTextNode(x);
          if ($.rangeCount > 0) {
            const oe = $.getRangeAt(0);
            oe.deleteContents();
            oe.insertNode(fe);
            oe.setStartAfter(fe);
            oe.setEndAfter(fe);
            $.removeAllRanges();
            $.addRange(oe);
          }
          X.current(re, ie);
        },

        focus: () => {
          y.current?.focus();
        },
      }),
      []
    );

    const te = b(() => {
      if (!t) {
        return "";
      }
      if (n.length === 0) {
        return Xn(t);
      }

      const x = [...n].sort((Y, re) => Y.offset - re.offset);

      const B = [];
      for (const Y of x) {
        B.push({ pos: Y.offset, type: "start", span: Y });
        B.push({ pos: Y.offset + Y.length, type: "end", span: Y });
      }
      B.sort((Y, re) =>
        Y.pos !== re.pos
          ? Y.pos - re.pos
          : Y.type !== re.type
          ? Y.type === "end"
            ? -1
            : 1
          : 0
      );
      let $ = "";
      let z = 0;
      const j = [];
      for (const Y of B) {
        if (Y.pos > z) {
          const re = t.substring(z, Y.pos);
          $ += wo(Xn(re), j);
          z = Y.pos;
        }
        if (Y.type === "start") {
          j.push(Y.span);
        } else {
          const re = j.indexOf(Y.span);

          if (re !== -1) {
            j.splice(re, 1);
          }
        }
      }
      if (z < t.length) {
        const Y = t.substring(z);
        $ += wo(Xn(Y), j);
      }
      return $ || "<br>";
    }, [t, n]);

    V(() => {
      if (N.current) {
        N.current = false;
        return;
      }
      const y_current = y.current;
      if (!y_current || (document.activeElement === y_current && t !== "")) {
        return;
      }
      const B = te();

      if (y_current.innerHTML !== B) {
        y_current.innerHTML = B;
      }
    }, [te, t]);

    V(() => {
      if (a && y.current) {
        const y_current = y.current;
        y_current.focus();

        if (y_current.childNodes.length > 0) {
          const B = window.getSelection();
          if (B) {
            const $ = document.createRange();
            $.selectNodeContents(y_current);
            $.collapse(false);
            B.removeAllRanges();
            B.addRange($);
          }
        }
      }
    }, [a]);

    V(() => {
      if (C && E.current) {
        E.current.focus();
      }
    }, [C]);

    const J = b(
      (x) => {
        if (P.current) {
          return;
        }
        const y_current = y.current;
        if (!y_current) {
          return;
        }
        if (x?.data === " ") {
          const j = window.getSelection();
          if (j && j.rangeCount > 0) {
            const re = j.getRangeAt(0).startContainer;
            let ie = null;
            let fe = re;

            while (fe && fe !== y_current) {
              if (fe.nodeType === Node.ELEMENT_NODE) {
                const oe = fe;
                if (oe.tagName === "SPAN" && oe.className) {
                  ie = oe;
                  break;
                }
              }
              fe = fe.parentNode;
            }

            if (ie) {
              const oe = ie.textContent || "";
              if (oe.endsWith(" ")) {
                ie.textContent = oe.slice(0, -1);
                const qe = document.createTextNode(" ");
                ie.parentNode?.insertBefore(qe, ie.nextSibling);
                const Xe = document.createRange();
                Xe.setStartAfter(qe);
                Xe.setEndAfter(qe);
                j.removeAllRanges();
                j.addRange(Xe);
              }
            }
          }
        }
        const $ = y_current.innerText.replace(/\n$/, "");
        if ($.length > i) {
          const j = $.substring(0, i);
          N.current = true;
          o(j, ku(n, j));
          return;
        }
        const z = Iu(y_current);
        N.current = true;
        o($, z);
      },
      [i, o, n]
    );

    const ae = b(
      (x) => {
        if (d) {
          return;
        }
        const B = window.getSelection();
        if (!B || B.isCollapsed) {
          return;
        }
        x.preventDefault();
        R.current = B.getRangeAt(0).cloneRange();

        const $ = Math.max(
          10,
          Math.min(x.clientX - 150, window.innerWidth - 310)
        );

        const z = Math.max(10, x.clientY - 50);
        v({ x: $, y: z });
        p(true);
      },
      [d]
    );

    const ce = b(
      (x) => {
        x.preventDefault();

        if (f && x.clipboardData?.files?.length) {
          const Y = Array.from(x.clipboardData.files).filter((re) =>
            re.type.startsWith("image/")
          );
          if (Y.length > 0) {
            f(Y);
            return;
          }
        }

        const B = x.clipboardData?.getData("text/plain") || "";
        if (!B) {
          return;
        }
        const $ = window.getSelection();
        if (!$ || !$.rangeCount) {
          return;
        }
        const z = $.getRangeAt(0);
        z.deleteContents();
        const j = document.createTextNode(B);
        z.insertNode(j);
        z.setStartAfter(j);
        z.setEndAfter(j);
        $.removeAllRanges();
        $.addRange(z);
        J();
      },
      [J, f]
    );

    const G = b(() => {
      const y_current = y.current;
      if (y_current && !U.current) {
        const B = window.getSelection();
        if (B) {
          const $ = document.createRange();
          $.setStart(y_current, 0);
          $.collapse(true);
          B.removeAllRanges();
          B.addRange($);
        }
      }
    }, []);

    const ee = b(
      (x) => {
        if (x.key === "Enter" && !x.shiftKey && h) {
          x.preventDefault();
          h();
          return;
        }
        if (!d && (x.ctrlKey || x.metaKey)) {
          let B = null;
          switch (x.key.toLowerCase()) {
            case "b": {
              B = "bold";
              break;
            }
            case "i": {
              B = "italic";
              break;
            }
            case "u": {
              B = "underline";
              break;
            }
          }

          if (B) {
            x.preventDefault();
            D(B);
          }
        }
      },
      [h, d]
    );

    const D = b(
      (x, B) => {
        const y_current = y.current;
        if (!y_current) {
          return;
        }
        const z = window.getSelection();
        if (
          !z ||
          (R.current && (z.removeAllRanges(), z.addRange(R.current)),
          z.isCollapsed)
        ) {
          return;
        }
        const j = z.getRangeAt(0);
        const Y = document.createElement("span");
        Y.className = An[x];

        if (x === "link" && B) {
          Y.dataset.url = B;
        }

        const re = Pu(j.commonAncestorContainer, An[x]);
        if (re) {
          Au(re);
        } else {
          try {
            j.surroundContents(Y);
          } catch {
            const ie = j.extractContents();
            Y.appendChild(ie);
            j.insertNode(Y);
          }
        }
        J();
        p(false);
        T(false);
        k("");
        R.current = null;
        y_current.focus();
      },
      [J]
    );

    const W = b(
      (x) => {
        if (x === "link") {
          T(true);
        } else {
          D(x);
        }
      },
      [D]
    );

    const Z = b(
      (x) => {
        x.preventDefault();

        if (w.trim()) {
          D("link", w.trim());
        }
      },
      [D, w]
    );

    V(() => {
      if (!g) {
        return;
      }

      const x = ($) => {
        if (S.current && !S.current.contains($.target)) {
          p(false);
          T(false);
          k("");
          R.current = null;
        }
      };

      const B = () => {
        p(false);
        T(false);
        k("");
        R.current = null;
      };

      document.addEventListener("mousedown", x);
      window.addEventListener("scroll", B, true);

      return () => {
        document.removeEventListener("mousedown", x);
        window.removeEventListener("scroll", B, true);
      };
    }, [g]);
    const M = !t;
    return r(Re, {
      children: [
        r("div", {
          ref: y,
          className: `${Ae.editor} ${c} ${M ? Ae.empty : ""}`,
          contentEditable: true,
          "data-placeholder": s,
          onInput: (x) => J(x),
          onFocus: G,
          onPaste: ce,
          onContextMenu: ae,
          onKeyDown: ee,
          onCompositionStart: () => {
            P.current = true;
          },
          onCompositionEnd: () => {
            P.current = false;
            J();
          },
          style: { minHeight: u, maxHeight: l },
        }),
        g &&
          _t(
            r("div", {
              ref: S,
              className: Ae.menu,
              style: { left: _.x, top: _.y },
              children: C
                ? r("form", {
                    className: Ae.linkForm,
                    onSubmit: Z,
                    children: [
                      r("input", {
                        ref: E,
                        type: "url",
                        className: Ae.linkInput,
                        placeholder: "https://...",
                        value: w,
                        onInput: (x) => k(x.target.value),
                      }),
                      r("button", {
                        type: "submit",
                        className: Ae.linkSubmit,
                        disabled: !w.trim(),
                        children: "OK",
                      }),
                    ],
                  })
                : r("div", {
                    className: Ae.buttons,
                    children: Eu.map(({ type: x, icon: B, title: $ }) =>
                      r(
                        "button",
                        {
                          type: "button",
                          className: Ae.button,
                          onClick: () => W(x),
                          title: $,
                          children: r(B, { size: 16 }),
                        },
                        x
                      )
                    ),
                  }),
            }),
            document.body
          ),
      ],
    });
  }
);

function Xn(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function Ru(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function bu(e) {
  return e !== "mention" && e !== "hashtag";
}
function wo(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const o of t) {
    if (!bu(o.type)) {
      continue;
    }
    const s = An[o.type];
    const i = o.type === "link" ? ` data-url="${Ru(o.url)}"` : "";
    n = `<span class="${s}"${i}>${n}</span>`;
  }
  return n;
}
function Su(e, t, n) {
  let o = 0;
  const s = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let i = s.nextNode();

  while (i) {
    if (i === t) {
      return o + n;
    }
    o += i.textContent?.length || 0;
    i = s.nextNode();
  }

  return o;
}
function ku(e, t) {
  return e
    .map((n) => {
      const o = n.offset + n.length;
      return n.offset >= t.length
        ? null
        : o > t.length
        ? { ...n, length: t.length - n.offset }
        : n;
    })
    .filter((n) => n !== null);
}
function Iu(e) {
  const t = [];

  const n = (o, s) => {
    if (o.nodeType === Node.TEXT_NODE) {
      return s + (o.textContent?.length || 0);
    }
    if (o.nodeType === Node.ELEMENT_NODE) {
      const i = o;
      if (i.tagName === "BR") {
        return s + 1;
      }
      let a = null;
      for (const [l, h] of Object.entries(An)) {
        if (i.classList.contains(h)) {
          a = l;
          break;
        }
      }
      const c = s;
      let u = s;
      for (const l of Array.from(o.childNodes)) {
        u = n(l, u);
      }
      if (a && u > c) {
        const l =
          a === "link"
            ? {
                type: "link",
                url: i.dataset.url || "",
                offset: c,
                length: u - c,
              }
            : { type: a, offset: c, length: u - c };
        t.push(l);
      }
      return u;
    }
    return s;
  };

  n(e, 0);
  return t;
}
function Pu(e, t) {
  let n = e;

  while (n && n.nodeType !== Node.DOCUMENT_NODE) {
    if (n.nodeType === Node.ELEMENT_NODE) {
      const o = n;
      if (o.classList.contains(t)) {
        return o;
      }
    }
    n = n.parentNode;
  }

  return null;
}
function Au(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}
const xu = "u13FLJio";
const Ou = "bToZwjfv";
const Lu = "eB--cks6";
const Mu = "_9ohK9-tN";
const $u = "j2Wceqpa";
const Du = "SKnXo-cA";
const Uu = "_8wZrlhZa";
const Bu = "ywO8uWzl";
const Fu = "q4IPCH5G";
const Hu = "iqaeIAPL";
const Vu = "YGC2tIXC";
const Wu = "Hvh4qKiC";
const ju = "-bZAaxpL";
const zu = "mY50rIUo";
const qu = "SVQ04Pz4";
const Xu = "-aTjRl6d";
const Yu = "vskBTYBr";
const Gu = "_0haeBjBl";
const Zu = "m4JSOoi7";
const Ku = "xuKvww1d";
const Qu = "GMSlkrum";
const Ju = "T1UhUe7-";
const ed = "KPX--Htj";
const td = "UDcyRX73";
const nd = "G9MjuFO7";
const rd = "yAXdi86A";
const od = "_5EoTr5dx";
const sd = "_2aj24MP-";
const id = "_5JkW0FiQ";
const ad = "X4D-Hg95";
const cd = "WafaU2-d";
const ld = "eb-u7Ezx";
const ud = "u52eDQyv";
const dd = "V-0z6M2W";
const hd = "_7-fvD6Zx";

const se = {
  form: xu,
  dragActive: Ou,
  whatsNew: Lu,
  editor: Mu,
  dragOverlay: $u,
  attachments: Du,
  attachmentPreview: Uu,
  uploading: Bu,
  uploadError: Fu,
  videoPreviewWrapper: Hu,
  videoPlayIcon: Vu,
  uploadOverlay: Wu,
  spinner: ju,
  errorOverlay: zu,
  errorText: qu,
  removeAttachment: Xu,
  actions: Yu,
  mediaButtons: Gu,
  mediaButton: Zu,
  submitGroup: Ku,
  charCount: Qu,
  error: Ju,
  pollContainer: ed,
  pollHeader: td,
  pollTitle: nd,
  pollClose: rd,
  pollQuestion: od,
  pollOptions: sd,
  pollOptionRow: id,
  pollOption: ad,
  removeOption: cd,
  addOption: ld,
  pollFooter: ud,
  pollToggle: dd,
  active: hd,
};

function yo({ src: e, type: t }) {
  return t === "video"
    ? r("div", {
        className: se.videoPreviewWrapper,
        children: [
          r("video", { src: e, preload: "metadata" }),
          r("div", {
            className: se.videoPlayIcon,
            children: r("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "white",
              children: r("path", { d: "M8 5v14l11-7z" }),
            }),
          }),
        ],
      })
    : r("img", { src: e, alt: "" });
}
function $s({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? r("div", {
        className: se.attachments,
        children: [
          e.map((s) =>
            r(
              "div",
              {
                className: se.attachmentPreview,
                children: [
                  r(yo, { src: s.previewUrl, type: s.type }),
                  r("button", {
                    className: se.removeAttachment,
                    onClick: () => n(s.id),
                    children: r(st, {}),
                  }),
                ],
              },
              s.id
            )
          ),
          t.map((s) =>
            r(
              "div",
              {
                className: `${se.attachmentPreview} ${
                  s.error ? se.uploadError : se.uploading
                }`,
                children: [
                  r(yo, { src: s.previewUrl, type: s.type }),
                  !s.error &&
                    r("div", {
                      className: se.uploadOverlay,
                      children: r("div", { className: se.spinner }),
                    }),
                  s.error &&
                    r("div", {
                      className: se.errorOverlay,
                      children: r("span", {
                        className: se.errorText,
                        children: s.error,
                      }),
                    }),
                  r("button", {
                    className: se.removeAttachment,
                    onClick: () => n(s.id),
                    children: r(st, {}),
                  }),
                ],
              },
              s.id
            )
          ),
        ],
      })
    : null;
}
const mt = {
  MAX_CHARS: 1000 /* 1e3 */,
  MIN_POLL_OPTIONS: 2,
  MAX_POLL_OPTIONS: 10,
  MAX_POLL_QUESTION_LENGTH: 200,
  MAX_POLL_OPTION_LENGTH: 100,
  MAX_TEXTAREA_HEIGHT: 400,
};
function fd({
  poll: e,
  onQuestionChange: t,
  onOptionChange: n,
  onAddOption: o,
  onRemoveOption: s,
  onMultipleChoiceToggle: i,
  onClose: a,
}) {
  return r("div", {
    className: se.pollContainer,
    children: [
      r("div", {
        className: se.pollHeader,
        children: [
          r("span", { className: se.pollTitle, children: "Опрос" }),
          r("button", {
            className: se.pollClose,
            onClick: a,
            children: r(st, {}),
          }),
        ],
      }),
      r("input", {
        type: "text",
        className: se.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: (c) => t(c.target.value),
      }),
      r("div", {
        className: se.pollOptions,
        children: e.options.map((c, u) =>
          r(
            "div",
            {
              className: se.pollOptionRow,
              children: [
                r("input", {
                  type: "text",
                  className: se.pollOption,
                  placeholder: `Вариант ${u + 1}`,
                  value: c.text,
                  maxLength: 50,
                  onInput: (l) => n(c.id, l.target.value),
                }),
                e.options.length > mt.MIN_POLL_OPTIONS &&
                  r("button", {
                    className: se.removeOption,
                    onClick: () => s(c.id),
                    children: r(st, {}),
                  }),
              ],
            },
            c.id
          )
        ),
      }),
      e.options.length < mt.MAX_POLL_OPTIONS &&
        r("button", {
          className: se.addOption,
          onClick: o,
          children: [r(Is, {}), r("span", { children: "Добавить вариант" })],
        }),
      r("div", {
        className: se.pollFooter,
        children: r("label", {
          className: se.pollToggle,
          children: [
            r("input", {
              type: "checkbox",
              checked: e.multipleChoice,
              onChange: i,
            }),
            r("span", { children: "Несколько вариантов ответа" }),
          ],
        }),
      }),
    ],
  });
}
const Yn = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};
function md() {
  const [e, t] = A(false);
  const [n, o] = A(Yn);

  const s = b((y) => {
    if (y.length <= mt.MAX_POLL_QUESTION_LENGTH) {
      o((g) => ({
        ...g,
        question: y,
      }));
    }
  }, []);

  const i = b((y, g) => {
    if (g.length <= mt.MAX_POLL_OPTION_LENGTH) {
      o((p) => ({
        ...p,
        options: p.options.map((_) => (_.id === y ? { ..._, text: g } : _)),
      }));
    }
  }, []);

  const a = b(() => {
    if (n.options.length < mt.MAX_POLL_OPTIONS) {
      o((y) => ({
        ...y,
        options: [...y.options, { id: Date.now().toString(), text: "" }],
      }));
    }
  }, [n.options.length]);

  const c = b(
    (y) => {
      if (n.options.length > mt.MIN_POLL_OPTIONS) {
        o((g) => ({
          ...g,
          options: g.options.filter((p) => p.id !== y),
        }));
      }
    },
    [n.options.length]
  );

  const u = b(() => {
    o((y) => ({
      ...y,
      multipleChoice: !y.multipleChoice,
    }));
  }, []);

  const l = b(() => {
    t(false);
    o(Yn);
  }, []);

  const h = b(() => {
    t((y) => !y);
  }, []);

  const d = b(() => {
    if (!e) {
      return true;
    }
    const y = n.question.trim().length > 0;

    const g = n.options.filter((p) => p.text.trim().length > 0);

    return y && g.length >= mt.MIN_POLL_OPTIONS;
  }, [e, n]);

  const f = b(() => {
    if (!(!e || !d())) {
      return {
        question: n.question.trim(),
        options: n.options
          .filter((y) => y.text.trim().length > 0)
          .map((y) => ({
            text: y.text.trim(),
          })),
        multipleChoice: n.multipleChoice,
      };
    }
  }, [e, d, n]);

  const m = b(() => {
    t(false);
    o(Yn);
  }, []);

  return {
    isPollOpen: e,
    poll: n,
    togglePoll: h,
    handlePollQuestionChange: s,
    handlePollOptionChange: i,
    handleAddPollOption: a,
    handleRemovePollOption: c,
    handleMultipleChoiceToggle: u,
    handleClosePoll: l,
    isPollValid: d,
    getPollData: f,
    resetPoll: m,
  };
}
const pd = {
  [he.CONTENT_MODERATION_FAILED]: "Изображение содержит запрещённый контент",
  [he.FILE_TOO_LARGE]: "Файл слишком большой",
  [he.UNSUPPORTED_FILE_TYPE]: "Неподдерживаемый формат файла",
  [he.UPLOAD_FAILED]: "Не удалось загрузить файл",
  [he.VIDEO_REQUIRES_VERIFICATION]:
    "Загрузка видео доступна только верифицированным пользователям",
  [he.RATE_LIMIT_EXCEEDED]: "Слишком много запросов. Попробуйте позже",
  [he.UNAUTHORIZED]: "Требуется авторизация",
  [he.ACCESS_DENIED]: "Доступ запрещён",
  [he.NETWORK_ERROR]: "Ошибка сети. Проверьте подключение",
  [he.TIMEOUT]: "Превышено время ожидания",
};
function gd(e, t = "Произошла ошибка") {
  return e ? pd[e] ?? t : t;
}
function Ds(e = 10, t = false) {
  const [n, o] = A([]);
  const [s, i] = A([]);
  const a = I(null);
  const c = I(n);
  const u = I(s);
  c.current = n;
  u.current = s;

  V(
    () => () => {
      c.current.forEach((C) => URL.revokeObjectURL(C.previewUrl));

      u.current.forEach((C) => URL.revokeObjectURL(C.previewUrl));
    },
    []
  );

  const l = s.length > 0;

  const h =
    n.some((C) => C.type === "video") || s.some((C) => C.type === "video");

  const d =
    n.some((C) => C.type === "image") || s.some((C) => C.type === "image");

  const f = b(() => {
    a.current?.click();
  }, []);

  const m = b(
    async (C) => {
      const T = Dt.isValidVideoType(C);
      const w = Dt.isValidImageType(C);
      if (T && !t) {
        Ze.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!w && !T) {
        Ze.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const u_current = u.current;

      const E =
        c_current.some((O) => O.type === "video") ||
        u_current.some((O) => O.type === "video");

      const R =
        c_current.some((O) => O.type === "image") ||
        u_current.some((O) => O.type === "image");

      if (T && R) {
        Ze.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (w && E) {
        Ze.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (T && E) {
        Ze.error("Можно загрузить только 1 видео");
        return;
      }
      const P = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const N = URL.createObjectURL(C);
      const U = T ? "video" : "image";
      i((O) => [...O, { id: P, file: C, previewUrl: N, progress: 0, type: U }]);
      try {
        const O = await Dt.uploadMedia(C);

        i((X) => X.filter((te) => te.id !== P));

        o((X) => [
          ...X,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: O.id,
            url: O.url,
            previewUrl: N,
            type: U,
          },
        ]);
      } catch (O) {
        let X = "Ошибка загрузки";

        if (ke(O)) {
          X = gd(O.code, O.message);
        } else if (O instanceof Error) {
          X = O.message;
        }

        Ze.error(X);

        i((te) => te.filter((J) => J.id !== P));

        URL.revokeObjectURL(N);
      }
    },
    [t]
  );

  const y = b(
    (C) => {
      const C_target = C.target;
      const C_target_files = C_target.files;
      if (!C_target_files || C_target_files.length === 0) {
        return;
      }
      const k = n.length + s.length;
      const S = e - k;
      if (S <= 0) {
        return;
      }
      Array.from(C_target_files).slice(0, S).forEach(m);
      C_target.value = "";
    },
    [n.length, s.length, e, m]
  );

  const g = b((C) => {
    o((T) => {
      const w = T.find((k) => k.id === C);

      if (w) {
        URL.revokeObjectURL(w.previewUrl);
      }

      return T.filter((k) => k.id !== C);
    });

    i((T) => {
      const w = T.find((k) => k.id === C);

      if (w) {
        URL.revokeObjectURL(w.previewUrl);
      }

      return T.filter((k) => k.id !== C);
    });
  }, []);

  const p = b(
    (C) => {
      const T = C.filter((S) =>
        t ? Dt.isValidMediaType(S) : Dt.isValidImageType(S)
      );
      if (T.length === 0) {
        return;
      }
      const w = c.current.length + u.current.length;
      const k = e - w;

      if (k > 0) {
        T.slice(0, k).forEach(m);
      }
    },
    [e, m, t]
  );

  const _ = b(
    async (C) => {
      const [T, w] = C.split(",");
      const k = T.match(/:(.*?);/)?.[1] || "image/png";
      const S = atob(w);
      const E = new Uint8Array(S.length);
      for (let N = 0; N < S.length; N++) {
        E[N] = S.charCodeAt(N);
      }
      const R = new Blob([E], { type: k });
      const P = new File([R], `drawing-${Date.now()}.png`, {
        type: "image/png",
      });
      m(P);
    },
    [m]
  );

  const v = b(() => {
    n.forEach((C) => URL.revokeObjectURL(C.previewUrl));

    s.forEach((C) => URL.revokeObjectURL(C.previewUrl));

    o([]);
    i([]);
  }, [n, s]);

  return {
    images: n,
    uploadingImages: s,
    isUploading: l,
    hasVideo: h,
    hasImages: d,
    openFilePicker: f,
    removeImage: g,
    addImage: _,
    uploadFiles: p,
    clearAll: v,
    fileInputRef: a,
    handleFileChange: y,
  };
}
const vd = pe(() =>
  ge(() => import("./index-BEeYRwfD.js"), __vite__mapDeps([0, 1])).then(
    (e) => ({
      default: e.DrawingCanvas,
    })
  )
);
function _d({
  onSubmit: e,
  autoFocus: t = false,
  placeholder: n = "Что нового?",
}) {
  const {
    text: o,
    spans: s,
    editorRef: i,
    handleChange: a,
    insertText: c,
    reset: u,
  } = Mn();

  const [l, h] = A(false);
  const [d, f] = A(false);
  const [m, y] = A(false);
  const g = I(0);
  const p = pt();
  const v = vs()?.subscription?.isActive ?? false;

  const {
    images: C,
    uploadingImages: T,
    isUploading: w,
    hasVideo: k,
    openFilePicker: S,
    removeImage: E,
    addImage: R,
    uploadFiles: P,
    clearAll: N,
    fileInputRef: U,
    handleFileChange: O,
  } = Ds(10, v);

  const {
    isPollOpen: X,
    poll: te,
    togglePoll: J,
    handlePollQuestionChange: ae,
    handlePollOptionChange: ce,
    handleAddPollOption: G,
    handleRemovePollOption: ee,
    handleMultipleChoiceToggle: D,
    handleClosePoll: W,
    isPollValid: Z,
    getPollData: M,
    resetPoll: x,
  } = md();

  const B = mt.MAX_CHARS - o.length;
  const $ = B < 0;
  const z = X && Z();
  const j = C.length > 0 || T.length > 0;
  const Y = o.trim().length > 0 || z || z || j;
  const re = v ? `${ur},${na}` : ur;

  const ie = b(async () => {
    if (!(!Y || $ || $ || w || $ || w || d)) {
      f(true);
      try {
        const ve = C.map((Q) => ({
          mediaId: Q.mediaId,
          url: Q.url,
        }));
        await e?.(o, s, ve, M());
        u();
        N();
        x();
      } catch {
      } finally {
        f(false);
      }
    }
  }, [Y, $, w, d, o, s, C, M, e, u, N, x]);

  const fe = b(
    (ve) => {
      R(ve);
    },
    [R]
  );

  const oe = b(
    (ve) => {
      c(ve.emoji);
    },
    [c]
  );

  const qe = b((ve) => {
    ve.preventDefault();
    ve.stopPropagation();
    g.current++;

    if (ve.dataTransfer?.types.includes("Files")) {
      y(true);
    }
  }, []);

  const Xe = b((ve) => {
    ve.preventDefault();
    ve.stopPropagation();
  }, []);

  const Ee = b((ve) => {
    ve.preventDefault();
    ve.stopPropagation();
    g.current--;

    if (g.current === 0) {
      y(false);
    }
  }, []);

  const at = b(
    (ve) => {
      ve.preventDefault();
      ve.stopPropagation();
      g.current = 0;
      y(false);
      const Q = ve.dataTransfer?.files;

      if (Q && Q.length > 0) {
        P(Array.from(Q));
      }
    },
    [P]
  );

  return r("div", {
    className: `${se.form} ${m ? se.dragActive : ""}`,
    onDragEnter: qe,
    onDragOver: Xe,
    onDragLeave: Ee,
    onDrop: at,
    children: [
      m &&
        r("div", {
          className: se.dragOverlay,
          children: [
            r("svg", {
              width: "32",
              height: "32",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                r("rect", {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2",
                  ry: "2",
                }),
                r("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                r("polyline", { points: "21 15 16 10 5 21" }),
              ],
            }),
            r("span", {
              children: v ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      r("div", {
        className: se.whatsNew,
        children: r(Un, {
          ref: i,
          value: o,
          spans: s,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: se.editor,
          minHeight: 40,
          maxHeight: mt.MAX_TEXTAREA_HEIGHT,
          onImagePaste: P,
        }),
      }),
      r($s, { images: C, uploadingImages: T, onRemove: E }),
      r("input", {
        ref: U,
        type: "file",
        accept: re,
        multiple: !k,
        onChange: O,
        style: { display: "none" },
      }),
      X &&
        r(fd, {
          poll: te,
          onQuestionChange: ae,
          onOptionChange: ce,
          onAddOption: G,
          onRemoveOption: ee,
          onMultipleChoiceToggle: D,
          onClose: W,
        }),
      r("div", {
        className: se.actions,
        children: [
          r("div", {
            className: se.mediaButtons,
            children: [
              r("button", {
                className: se.mediaButton,
                onClick: S,
                title: v ? "Добавить медиа" : "Добавить изображение",
                children: r(ys, {}),
              }),
              !p &&
                r(Ir, { onEmojiSelect: oe, buttonClassName: se.mediaButton }),
              r("button", {
                className: se.mediaButton,
                onClick: () => h(true),
                title: "Нарисовать",
                disabled: k,
                children: r(qa, {}),
              }),
              r("button", {
                className: `${se.mediaButton} ${X ? se.active : ""}`,
                onClick: J,
                title: "Добавить опрос",
                children: r(Xa, {}),
              }),
            ],
          }),
          r("div", {
            className: se.submitGroup,
            children: [
              $ &&
                r("span", {
                  className: `${se.charCount} ${se.error}`,
                  children: B,
                }),
              r(Me, {
                size: "lg",
                disabled: !Y || $ || $ || w || $ || w || d,
                loading: d,
                onClick: ie,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      l &&
        r(Ot, {
          fallback: null,
          children: r(vd, {
            isOpen: l,
            onClose: () => h(false),
            onSave: fe,
            mode: "post",
          }),
        }),
    ],
  });
}
const wd = "K6nCQ-U-";
const yd = "_4z8V9ZZv";
const Cd = "_7KXbkQt7";
const Td = "uYOP8khl";
const Nd = "_6y-KsBSs";
const Ed = "_0V6OU0Ym";
const Rd = "nkzq9EYy";
const bd = "sPqWHy7d";
const Sd = "_9y9syYYY";
const kd = "nDwuZLyW";
const Id = "L5ifDyu9";
const Pd = "YTa76qGd";
const Ad = "pgh3zI5U";
const xd = "MLUpLifx";

const be = {
  modalReport: wd,
  content: yd,
  successIcon: Cd,
  title: Td,
  subtitle: Nd,
  options: Ed,
  chip: Rd,
  radio: bd,
  chipActive: Sd,
  radioDot: kd,
  detailsSection: Id,
  textarea: Pd,
  error: Ad,
  actions: xd,
};

const Od = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const Ld = [
  { id: "spam", label: "Спам или нежелательный контент" },
  { id: "violence", label: "Насилие или опасные действия" },
  { id: "hate", label: "Ненависть или травля" },
  { id: "adult", label: "Контент для взрослых (18+)" },
  { id: "misinfo", label: "Дезинформация или обман" },
  { id: "other", label: "Другое" },
];

function Us({ targetType: e, targetId: t, onClose: n, onSubmit: o }) {
  const [s, i] = A(null);
  const [a, c] = A("");
  const [u, l] = A(false);
  const [h, d] = A(null);
  const [f, m] = A(false);

  const y = async () => {
    if (s) {
      l(true);
      d(null);
      try {
        if (o) {
          await o(s, a);
        } else {
          await sa.createReport({
            targetType: e,
            targetId: t,
            reason: Od[s],
            description: a || undefined,
          });
        }

        m(true);
      } catch (g) {
        console.error("Failed to submit report:", g);

        if (ke(g)) {
          switch (g.code) {
            case fn.CANNOT_REPORT_OWN_CONTENT: {
              d("Вы не можете пожаловаться на свой контент");
              break;
            }
            case fn.ALREADY_REPORTED: {
              d("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case fn.TARGET_NOT_FOUND: {
              d("Контент не найден");
              break;
            }
            case fn.DESCRIPTION_TOO_LONG: {
              d("Описание слишком длинное (макс. 1000 символов)");
              break;
            }
            default: {
              d("Произошла ошибка при отправке жалобы");
            }
          }
        } else {
          d("Произошла ошибка при отправке жалобы");
        }
      } finally {
        l(false);
      }
    }
  };

  return f
    ? r(gt, {
        onClose: n,
        showHeader: false,
        frameless: false,
        className: be.modalReport,
        children: r("div", {
          className: be.content,
          children: [
            r("div", {
              className: be.successIcon,
              children: r("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "var(--accent-primary)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  r("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                  r("polyline", { points: "22 4 12 14.01 9 11.01" }),
                ],
              }),
            }),
            r("h2", { className: be.title, children: "Спасибо за жалобу!" }),
            r("p", {
              className: be.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            r("div", {
              className: be.actions,
              children: r(Me, {
                variant: "primary",
                onClick: (g) => {
                  g.stopPropagation();
                  n();
                },
                children: "Понятно",
              }),
            }),
          ],
        }),
      })
    : r(gt, {
        onClose: n,
        showHeader: false,
        frameless: false,
        className: be.modalReport,
        children: r("div", {
          className: be.content,
          children: [
            r("h2", { className: be.title, children: "Пожаловаться" }),
            r("p", {
              className: be.subtitle,
              children: "Выберите причину жалобы",
            }),
            r("div", {
              className: be.options,
              children: Ld.map((g) =>
                r(
                  "button",
                  {
                    type: "button",
                    className: `${be.chip} ${s === g.id ? be.chipActive : ""}`,
                    onClick: () => i(g.id),
                    children: [
                      r("span", {
                        className: be.radio,
                        children:
                          s === g.id && r("span", { className: be.radioDot }),
                      }),
                      g.label,
                    ],
                  },
                  g.id
                )
              ),
            }),
            r("div", {
              className: be.detailsSection,
              children: r("textarea", {
                className: be.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: a,
                onInput: (g) => c(g.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            h && r("div", { className: be.error, children: h }),
            r("div", {
              className: be.actions,
              children: [
                r(Me, {
                  variant: "secondary",
                  onClick: (g) => {
                    g.stopPropagation();
                    n();
                  },
                  disabled: u,
                  children: "Отмена",
                }),
                r(Me, {
                  variant: "primary",
                  onClick: (g) => {
                    g.stopPropagation();
                    y();
                  },
                  disabled: !s || u,
                  children: u ? "Отправка..." : "Отправить",
                }),
              ],
            }),
          ],
        }),
      });
}
const Md = "j8vGlZKp";
const $d = "y5-96lzw";
const Dd = "lE9vN8i6";
const Ud = "RrXA28Pz";
const Bd = "zrN-dIVb";
const Fd = "KSS5ucx7";
const Hd = "p-q2S5vA";
const Vd = "-JVja8g3";
const Wd = "HotXXjTO";
const jd = "uHbOpnIJ";
const zd = "q4tIq6LX";
const qd = "jG-llYOx";
const Xd = "-nxjJLcz";
const Yd = "FFjif68M";
const Gd = "jTVS0CtG";

const $e = {
  userName: Md,
  pinBadge: $d,
  text: Dd,
  nukstaGlow: Ud,
  xs: Bd,
  sm: Fd,
  md: Hd,
  lg: Vd,
  pinWrapper: Wd,
  pinClickable: jd,
  pinTooltip: zd,
  pinTooltipFadeIn: qd,
  pinTooltipRow: Xd,
  pinTooltipLabel: Yd,
  pinTooltipArrow: Gd,
};

const Zd = { xs: 12, sm: 14, md: 16, lg: 22 };
const Kd = "subscription_nuksta";
function ln({
  name: e,
  verified: t,
  hasNuksta: n,
  pin: o,
  size: s = "md",
  className: i,
}) {
  const Zd_s = Zd[s];
  const c = I(null);
  const [u, l] = A(null);
  const [h, d] = A(false);
  const f = o?.slug === Kd;

  const m = b(() => {
    if (!c.current) {
      return;
    }
    const g = c.current.getBoundingClientRect();
    l({ x: g.left + g.width / 2, y: g.top });
  }, []);

  const y = b(() => {
    l(null);
  }, []);

  return r("span", {
    className: `${$e.userName} ${$e[s]} ${i || ""}`,
    children: [
      n
        ? r("span", {
            className: $e.nukstaGlow,
            children: r("span", { className: $e.text, children: e }),
          })
        : r("span", { className: $e.text, children: e }),
      t && r(Za, {}),
      o &&
        r("span", {
          ref: c,
          className: `${$e.pinWrapper} ${f ? $e.pinClickable : ""}`,
          onMouseEnter: m,
          onMouseLeave: y,
          onClick: f
            ? (g) => {
                g.stopPropagation();
                g.preventDefault();
                d(true);
              }
            : undefined,
          children: [
            r("img", {
              src: o.url,
              alt: o.name,
              className: $e.pinBadge,
              width: Zd_s,
              height: Zd_s,
            }),
            u &&
              _t(
                r("div", {
                  className: $e.pinTooltip,
                  style: { left: `${u.x}px`, top: `${u.y}px` },
                  children: [
                    r("span", {
                      className: $e.pinTooltipRow,
                      children: [
                        r("span", {
                          className: $e.pinTooltipLabel,
                          children: "Пин:",
                        }),
                        " ",
                        o.name,
                      ],
                    }),
                    o.description &&
                      r("span", {
                        className: $e.pinTooltipRow,
                        children: [
                          r("span", {
                            className: $e.pinTooltipLabel,
                            children: "Ивент:",
                          }),
                          " ",
                          o.description,
                        ],
                      }),
                    r("span", { className: $e.pinTooltipArrow }),
                  ],
                }),
                document.body
              ),
          ],
        }),
      h && r(cl, { isOpen: true, onClose: () => d(false) }),
    ],
  });
}
const Qd = "GOavgVFK";
const Jd = "WsAFjFg1";
const eh = "luyzBE-G";
const th = "LGkNQoga";
const nh = "HiaF08Tp";
const rh = "fjKZASHi";
const oh = "YH0jgs8I";
const sh = "iw-oVKLc";
const ih = "-L1Z1WbU";

const lt = {
  repostModal: Qd,
  content: Jd,
  title: eh,
  inputSection: th,
  textarea: nh,
  originalPost: rh,
  postHeader: oh,
  postText: sh,
  actions: ih,
};

function ah({ post: e, onClose: t, onSuccess: n }) {
  const [o, s] = A("");
  const [i, a] = A(false);

  const c = Ne((l) => l.profile);

  const u = async () => {
    a(true);
    try {
      await Le.createRepost(e.id, o.trim() || undefined);
      n?.();
      t();
    } catch (l) {
      console.error("Failed to create repost:", l);
    } finally {
      a(false);
    }
  };

  return r(gt, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: lt.repostModal,
    children: r("div", {
      className: lt.content,
      children: [
        r("h2", { className: lt.title, children: "Репост" }),
        r("div", {
          className: lt.inputSection,
          children: [
            c && r(ze, { src: c.avatar, alt: c.displayName, size: "sm" }),
            r("textarea", {
              className: lt.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: o,
              onInput: (l) => s(l.target.value),
              rows: 3,
            }),
          ],
        }),
        r("div", {
          className: lt.originalPost,
          children: [
            r("div", {
              className: lt.postHeader,
              children: [
                r(ze, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                r(ln, {
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  hasNuksta: e.author.hasNuksta,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            r("p", { className: lt.postText, children: e.text }),
          ],
        }),
        r("div", {
          className: lt.actions,
          children: [
            r(Me, {
              variant: "secondary",
              onClick: (l) => {
                l.stopPropagation();
                t();
              },
              disabled: i,
              children: "Отмена",
            }),
            r(Me, {
              variant: "primary",
              onClick: (l) => {
                l.stopPropagation();
                u();
              },
              disabled: i,
              children: i ? "Репост..." : "Репостнуть",
            }),
          ],
        }),
      ],
    }),
  });
}
const ch = "YUXc-thD";
const lh = "AHlpmYy2";
const uh = "_8tUE-BuY";
const dh = "RIne2Axl";
const hh = "qfOKVlyM";
const fh = "XA7edfAc";
const mh = "_97G7MW7p";
const ph = "li-GTJHA";
const gh = "x0peq7nh";
const vh = "_6pRzoTi7";

const tt = {
  editPostModal: ch,
  form: lh,
  whatsNew: uh,
  editor: dh,
  actions: hh,
  mediaButtons: fh,
  mediaButton: mh,
  submitGroup: ph,
  charCount: gh,
  error: vh,
};

const Co = 5000; /* 5e3 */
function _h({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: o } = Dn();

  const s = ue((w) => w.editPost);

  const i = Ne((w) => w.profile);

  const a = pt();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = Mn(t, n);

  const [f, m] = A(false);
  const y = Co - c.length;
  const g = y < 0;
  const p = c !== t;
  const _ = JSON.stringify(u) !== JSON.stringify(n);
  const v = p || _;

  const C = b(
    (w) => {
      d(w.emoji);
    },
    [d]
  );

  const T = b(async () => {
    if (!(!c.trim() || g || g || !v || g || !v || f)) {
      m(true);
      try {
        await s(e, c, u);
        o();
      } catch (w) {
        console.error("Failed to update post:", w);
      } finally {
        m(false);
      }
    }
  }, [c, u, g, v, f, s, e, o]);

  return r(gt, {
    frameless: true,
    onClose: o,
    className: tt.editPostModal,
    children: r("div", {
      className: tt.form,
      children: [
        r("div", {
          className: tt.whatsNew,
          children: [
            r(ze, { src: i?.avatar ?? "", size: "md" }),
            r(Un, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Что нового?",
              maxLength: Co,
              autoFocus: true,
              className: tt.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        r("div", {
          className: tt.actions,
          children: [
            r("div", {
              className: tt.mediaButtons,
              children:
                !a &&
                r(Ir, { onEmojiSelect: C, buttonClassName: tt.mediaButton }),
            }),
            r("div", {
              className: tt.submitGroup,
              children: [
                g &&
                  r("span", {
                    className: `${tt.charCount} ${tt.error}`,
                    children: y,
                  }),
                r(Me, {
                  size: "lg",
                  disabled: !c.trim() || g || g || !v,
                  loading: f,
                  onClick: T,
                  children: "Сохранить",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}

const To = (e) => Symbol.iterator in e;

const No = (e) => "entries" in e;

const Eo = (e, t) => {
  const n = e instanceof Map ? e : new Map(e.entries());
  const o = t instanceof Map ? t : new Map(t.entries());
  if (n.size !== o.size) {
    return false;
  }
  for (const [s, i] of n) {
    if (!o.has(s) || !Object.is(i, o.get(s))) {
      return false;
    }
  }
  return true;
};

const wh = (e, t) => {
  const n = e[Symbol.iterator]();
  const o = t[Symbol.iterator]();
  let s = n.next();
  let i = o.next();

  while (!s.done && !i.done) {
    if (!Object.is(s.value, i.value)) {
      return false;
    }
    s = n.next();
    i = o.next();
  }

  return !!s.done && !!i.done;
};

function yh(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : To(e) && To(t)
    ? No(e) && No(t)
      ? Eo(e, t)
      : wh(e, t)
    : Eo(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function Ro(e) {
  const t = Zt.useRef(undefined);
  return (n) => {
    const o = e(n);
    return yh(t.current, o) ? t.current : (t.current = o);
  };
}
const Ch = "qW4HNPBu";
const Th = "tx-JBNZ6";
const Nh = "_033iEEAi";
const Eh = "DNnNfgbz";
const gn = { commentsModal: Ch, header: Th, title: Nh, content: Eh };
function Rh({ postId: e, onClose: t }) {
  const n = I(null);

  const {
    comments: o,
    commentsLoading: s,
    commentsLoadingMore: i,
    commentsHasMore: a,
    clearComments: c,
    fetchComments: u,
    loadMoreComments: l,
    toggleCommentReaction: h,
    addComment: d,
  } = ue(
    Ro((T) => ({
      comments: T.comments,
      commentsLoading: T.commentsLoading,
      commentsLoadingMore: T.commentsLoadingMore,
      commentsHasMore: T.commentsHasMore,
      clearComments: T.clearComments,
      fetchComments: T.fetchComments,
      loadMoreComments: T.loadMoreComments,
      toggleCommentReaction: T.toggleCommentReaction,
      addComment: T.addComment,
    }))
  );

  const { commentsSort: f, setCommentsSort: m } = bn(
    Ro((T) => ({
      commentsSort: T.commentsSort,
      setCommentsSort: T.setCommentsSort,
    }))
  );

  if (n.current !== e) {
    n.current = e;
    c();
  }

  V(() => {
    u(e);
  }, [e, u]);

  const y = b(
    (T) => {
      m(T);
      u(e);
    },
    [m, u, e]
  );

  const g = b(() => {
    if (a && !i) {
      l(e);
    }
  }, [a, i, l, e]);

  const p = b(
    (T, w) => {
      h(T, w ?? "love");
    },
    [h]
  );

  const _ = b(
    (T, w) => {
      h(T, w);
    },
    [h]
  );

  const v = b(
    async (T, w, k, S, E, R) => {
      await d(e, T, w, k, R, S, E);
    },
    [d, e]
  );

  const C = b(
    async (T) => {
      const w = `voice_${Date.now()}.webm`;
      const k = new File([T], w, { type: T.type || "audio/webm" });
      const S = await Dt.uploadMedia(k);
      await d(e, "", [], undefined, [{ mediaId: S.id }]);
    },
    [d, e]
  );

  return r(gt, {
    frameless: true,
    onClose: t,
    className: gn.commentsModal,
    children: [
      r("div", {
        className: gn.header,
        children: r("span", { className: gn.title, children: "Комментарии" }),
      }),
      r("div", {
        className: gn.content,
        "data-comments-modal": true,
        children: r(Vg, {
          comments: o,
          isLoading: s,
          isLoadingMore: i,
          hasMore: a,
          sort: f,
          onSortChange: y,
          onLikeComment: p,
          onReactionComment: _,
          onAddComment: v,
          onVoiceSend: C,
          onLoadMore: g,
        }),
      }),
    ],
  });
}
const bh = "QoEaDkke";
const Sh = "clHkuJ7t";
const kh = "qilC-Ury";
const Ih = "_2pYlGMvj";
const vn = { content: bh, title: Sh, subtitle: kh, actions: Ih };
function Ph({ displayName: e, onConfirm: t, onClose: n }) {
  return r(gt, {
    onClose: n,
    showHeader: false,
    children: r("div", {
      className: vn.content,
      children: [
        r("h2", { className: vn.title, children: "Отписаться?" }),
        r("p", {
          className: vn.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            r("strong", { children: e }),
            "?",
          ],
        }),
        r("div", {
          className: vn.actions,
          children: [
            r(Me, {
              variant: "secondary",
              onClick: (o) => {
                o.stopPropagation();
                n();
              },
              children: "Отмена",
            }),
            r(Me, {
              variant: "danger",
              onClick: (o) => {
                o.stopPropagation();
                t();
                n();
              },
              children: "Отписаться",
            }),
          ],
        }),
      ],
    }),
  });
}
const Ah = "JtDslUlB";
const xh = "ccJtOIg3";
const Oh = "jttdPuoT";
const Lh = "Ik3feOcb";
const Mh = "OWIVanqr";
const $h = "ApLgDejC";
const Dh = "wzYde9CM";
const Uh = "jjAXXJME";

const yt = {
  underline: Ah,
  monospace: xh,
  quote: Oh,
  spoiler: Lh,
  revealed: Mh,
  link: $h,
  mention: Dh,
  hashtag: Uh,
};

function Bh(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function Fh(e) {
  if (!Bh(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const o = String.fromCharCode(...n);
  const s = btoa(o);
  return `/external?url=${encodeURIComponent(s)}`;
}
function Bs({ text: e, spans: t = [], className: n = "" }) {
  const [o, s] = A(new Set());

  const i = Te(() => {
    if (t.length === 0) {
      return [{ text: e, styles: new Set() }];
    }
    const u = [];

    t.forEach((f, m) => {
      u.push({ pos: f.offset, type: "start", span: f, index: m });
      u.push({ pos: f.offset + f.length, type: "end", span: f, index: m });
    });

    u.sort((f, m) =>
      f.pos !== m.pos
        ? f.pos - m.pos
        : f.type !== m.type
        ? f.type === "end"
          ? -1
          : 1
        : 0
    );

    const l = [];
    let h = 0;
    const d = new Map();
    for (const f of u) {
      if (f.pos > h) {
        const m = e.substring(h, f.pos);
        const y = new Set();
        let g;
        let p;
        let _;

        d.forEach((v) => {
          y.add(v.type);

          if (v.type === "link" && v.url) {
            g = v.url;
          }

          if (v.type === "mention" && (v.username || v.id)) {
            p = v.username || v.id;
          }

          if (v.type === "hashtag" && v.tag) {
            _ = v.tag;
          }
        });

        l.push({ text: m, styles: y, url: g, mentionId: p, hashtag: _ });
      }

      if (f.type === "start") {
        d.set(f.index, f.span);
      } else {
        d.delete(f.index);
      }

      h = f.pos;
    }

    if (h < e.length) {
      l.push({ text: e.substring(h), styles: new Set() });
    }

    return l;
  }, [e, t]);

  const a = (u, l) => {
    u.stopPropagation();

    s((h) => {
      const d = new Set(h);

      if (d.has(l)) {
        d.delete(l);
      } else {
        d.add(l);
      }

      return d;
    });
  };

  const c = (u, l) => {
    let u_text = u.text;

    if (u.styles.has("bold")) {
      u_text = r("strong", { children: u_text });
    }

    if (u.styles.has("italic")) {
      u_text = r("em", { children: u_text });
    }

    if (u.styles.has("underline")) {
      u_text = r("span", { className: yt.underline, children: u_text });
    }

    if (u.styles.has("strike")) {
      u_text = r("s", { children: u_text });
    }

    if (u.styles.has("monospace")) {
      u_text = r("code", { className: yt.monospace, children: u_text });
    }

    if (u.styles.has("quote")) {
      u_text = r("span", { className: yt.quote, children: u_text });
    }

    if (u.styles.has("spoiler")) {
      const d = o.has(l);
      u_text = r("span", {
        className: `${yt.spoiler} ${d ? yt.revealed : ""}`,
        onClick: (f) => a(f, l),
        children: u_text,
      });
    }

    if (u.styles.has("link") && u.url) {
      const d = Fh(u.url);
      u_text = r("a", {
        href: d,
        target: "_blank",
        rel: "noopener noreferrer",
        className: yt.link,
        onClick: (f) => f.stopPropagation(),
        children: u_text,
      });
    }
    if (u.styles.has("mention") && u.mentionId) {
      const d = `/@${u.mentionId}`;
      u_text = r("a", {
        href: d,
        className: yt.mention,
        onClick: (f) => {
          f.preventDefault();
          f.stopPropagation();
          $(d);
        },
        children: u_text,
      });
    }
    if (u.styles.has("hashtag") && u.hashtag) {
      const d = `/hashtag/${encodeURIComponent(u.hashtag)}`;
      u_text = r("a", {
        href: d,
        className: yt.hashtag,
        onClick: (f) => {
          f.preventDefault();
          f.stopPropagation();
          $(d);
        },
        children: u_text,
      });
    }
    return r("span", { children: u_text }, l);
  };

  return r("span", { className: n, children: i.map((u, l) => c(u, l)) });
}
const Hh = "t6dMOE-t";
const Vh = "dN7ncPvV";
const Wh = "goihPOfy";
const jh = "_3cD3eUbW";
const zh = "SWw4qjFC";
const qh = "J5ZRq4aT";
const Xh = "zH6fnEQR";
const Yh = "OzZxDBjs";
const Gh = "r-v5forc";
const Zh = "Azp1k6ER";
const Kh = "_8AA-g-Mn";
const Qh = "aaxVMk0e";
const Jh = "QUwLZbFH";
const ef = "Fub6vefq";
const tf = "Uvg1jJsO";
const nf = "_9HuwvxSy";
const rf = "_0-reqUdU";
const of = "yjejWG8w";
const sf = "rW9UH9FX";
const af = "AP0ro9mL";
const cf = "lc7iFAaZ";
const lf = "D7O8ZJMb";
const uf = "-OyFh6KG";
const df = "FVUgQZaF";

const le = {
  poll: Hh,
  disabled: Vh,
  header: Wh,
  title: jh,
  meta: zh,
  voteCount: qh,
  options: Xh,
  option: Yh,
  votingOption: Gh,
  preselected: Zh,
  optionContent: Kh,
  voted: Qh,
  optionProgressWrapper: Jh,
  optionProgress: ef,
  optionContentInverted: tf,
  optionText: nf,
  optionPercent: rf,
  optionProgressSimple: of,
  checkmark: sf,
  checkbox: af,
  checkboxChecked: cf,
  submitBtn: lf,
  footer: uf,
  revoteBtn: df,
};

function hf({
  title: e,
  options: t,
  totalVotes: n,
  voted: o = false,
  selectedOptionId: s = null,
  selectedOptionIds: i = [],
  multipleChoice: a = false,
  onVote: c,
  onVoteMultiple: u,
  className: l,
  disabled: h = false,
}) {
  const [d, f] = A(o);

  const [m, y] = A(() =>
    i.length > 0 ? new Set(i) : s ? new Set([s]) : new Set()
  );

  const [g, p] = A(n);
  const [_, v] = A(t);
  const [C, T] = A(o);
  const [w, k] = A(false);
  const [S, E] = A(new Map());
  const R = I(new Map());

  const P = t.map((D) => `${D.id}:${D.votes}`).join(",");

  V(() => {
    v(t);
    p(n);
    f(o);

    if (i.length > 0) {
      y(new Set(i));
    } else {
      y(s ? new Set([s]) : new Set());
    }

    if (o && !w) {
      T(true);
    }
  }, [P, n, o, s, i.join(",")]);

  V(() => {
    if (o && R.current.size > 0) {
      const D = new Map();

      R.current.forEach((W, Z) => {
        D.set(Z, W.offsetWidth);
      });

      E(D);
    }
  }, [o]);

  const N = d && !w;

  const U = b(
    (D) => {
      if (h || N) {
        return;
      }
      if (a) {
        y((M) => {
          const x = new Set(M);

          if (x.has(D)) {
            x.delete(D);
          } else {
            x.add(D);
          }

          return x;
        });
        return;
      }
      const W = m.size > 0 ? Array.from(m)[0] : null;

      v((M) =>
        M.map((x) =>
          x.id === D
            ? { ...x, votes: x.votes + 1 }
            : x.id === W
            ? { ...x, votes: Math.max(0, x.votes - 1) }
            : x
        )
      );

      if (!d) {
        p((M) => M + 1);
      }

      y(new Set([D]));
      f(true);
      k(false);
      const Z = c?.(D);

      if (Z && typeof Z.then == "function") {
        Z.then((M) => {
          if (M) {
            X(M);
          }
        });
      }

      te();
    },
    [h, N, a, m, d, c]
  );

  const O = b(() => {
    if (m.size === 0) {
      return;
    }
    const D = Array.from(m);

    v((Z) =>
      Z.map((M) => (D.includes(M.id) ? { ...M, votes: M.votes + 1 } : M))
    );

    if (!d) {
      p((Z) => Z + 1);
    }

    f(true);
    k(false);
    const W = u?.(D);

    if (W && typeof W.then == "function") {
      W.then((Z) => {
        if (Z) {
          X(Z);
        }
      });
    }

    te();
  }, [m, d, u]);

  const X = (D) => {
    const W = (D.options ?? []).map((Z) => ({
      id: Z.id,
      text: Z.text,
      votes: Z.votesCount ?? Z.voteCount ?? Z.votes ?? 0,
    }));
    v(W);
    p(D.totalVotes ?? 0);

    if (D.votedOptionIds && D.votedOptionIds.length > 0) {
      y(new Set(D.votedOptionIds));
    }
  };

  const te = () => {
    requestAnimationFrame(() => {
      const D = new Map();

      R.current.forEach((W, Z) => {
        D.set(Z, W.offsetWidth);
      });

      E(D);

      requestAnimationFrame(() => {
        T(true);
      });
    });
  };

  const J = () => {
    k(true);
    T(false);
  };

  const ae = () => {
    k(false);
    T(true);
  };

  const ce = (D) => (g === 0 ? 0 : Math.round((D / g) * 100));

  const G = (D) =>
    D === 1 ? "1 голос" : D >= 2 && D <= 4 ? `${D} голоса` : `${D} голосов`;

  const ee = (D) => {
    D.stopPropagation();
  };

  return r("div", {
    className: `${le.poll} ${h ? le.disabled : ""} ${l || ""}`,
    onClick: ee,
    children: [
      r("div", {
        className: le.header,
        children: [
          r("span", { className: le.title, children: e }),
          d &&
            r("div", {
              className: le.meta,
              children: r("span", { className: le.voteCount, children: G(g) }),
            }),
        ],
      }),
      r("div", {
        className: le.options,
        children: _.map((D) => {
          const W = ce(D.votes);
          const Z = m.has(D.id);
          const M = C ? `${W}%` : "0%";
          const x =
            S.get(D.id) ||
            R.current.get(D.id)?.offsetWidth ||
            R.current.get(D.id)?.offsetWidth ||
            0;
          return N
            ? r(
                "div",
                {
                  ref: (B) => {
                    if (B) {
                      R.current.set(D.id, B);
                    }
                  },
                  className: `${le.option} ${le.voted} ${Z ? le.selected : ""}`,
                  children: [
                    r("div", {
                      className: le.optionContent,
                      children: [
                        r("span", {
                          className: le.optionText,
                          children: [
                            Z &&
                              r("span", {
                                className: le.checkmark,
                                children: "✓ ",
                              }),
                            D.text,
                          ],
                        }),
                        r("span", {
                          className: le.optionPercent,
                          children: [W, "%"],
                        }),
                      ],
                    }),
                    Z &&
                      r("div", {
                        className: le.optionProgressWrapper,
                        style: { width: M },
                        children: [
                          r("div", { className: le.optionProgress }),
                          r("div", {
                            className: le.optionContentInverted,
                            style: { width: `${x}px` },
                            children: [
                              r("span", {
                                className: le.optionText,
                                children: [
                                  r("span", {
                                    className: le.checkmark,
                                    children: "✓ ",
                                  }),
                                  D.text,
                                ],
                              }),
                              r("span", {
                                className: le.optionPercent,
                                children: [W, "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    !Z &&
                      r("div", {
                        className: le.optionProgressSimple,
                        style: { width: M },
                      }),
                  ],
                },
                D.id
              )
            : r(
                "div",
                {
                  ref: (B) => {
                    if (B) {
                      R.current.set(D.id, B);
                    }
                  },
                  className: `${le.option} ${le.votingOption} ${
                    Z ? le.preselected : ""
                  }`,
                  onClick: () => U(D.id),
                  children: r("div", {
                    className: le.optionContent,
                    children: [
                      a &&
                        r("span", {
                          className: `${le.checkbox} ${
                            Z ? le.checkboxChecked : ""
                          }`,
                          children: Z && "✓",
                        }),
                      r("span", { className: le.optionText, children: D.text }),
                    ],
                  }),
                },
                D.id
              );
        }),
      }),
      a &&
        !d &&
        m.size > 0 &&
        !w &&
        r("button", {
          className: le.submitBtn,
          onClick: O,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        r("div", {
          className: le.footer,
          children: w
            ? r(Re, {
                children: [
                  a &&
                    m.size > 0 &&
                    r("button", {
                      className: le.submitBtn,
                      onClick: O,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  r("button", {
                    className: le.revoteBtn,
                    onClick: ae,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : r("button", {
                className: le.revoteBtn,
                onClick: J,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}
const ff = "zRX0j4Tr";
const mf = "_3HYi31vZ";
const pf = "sgbXxBQt";
const gf = "GyS5v2h6";
const vf = "HxhHv5PS";
const _f = "HhzGlfqd";
const wf = "bQ6-MeS1";
const yf = "QCLZpkig";
const Cf = "WIOo5dNL";

const ut = {
  dropdownWrapper: ff,
  trigger: mf,
  menu: pf,
  hidden: gf,
  menuItem: vf,
  danger: _f,
  itemIcon: wf,
  itemLabel: yf,
  divider: Cf,
};

function Fs({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: o = [],
  className: s,
}) {
  const [i, a] = A(false);
  const [c, u] = A(false);
  const [l, h] = A({ top: 0, left: 0 });
  const d = I(null);
  const f = I(null);

  const m = b(() => {
    if (!d.current) {
      return;
    }
    const _ = d.current.getBoundingClientRect();
    const v = f.current?.offsetHeight || 150;
    const C = f.current?.offsetWidth || 160;
    let T = 0;
    let w = 0;

    if (n.startsWith("bottom")) {
      T = _.bottom + 4;
    } else {
      T = _.top - v - 4;
    }

    if (n.endsWith("right")) {
      w = _.right - C;
    } else {
      w = _.left;
    }

    const { innerWidth, innerHeight } = window;

    if (w + C > innerWidth) {
      w = innerWidth - C - 8;
    }

    if (w < 8) {
      w = 8;
    }

    if (T + v > innerHeight) {
      T = _.top - v - 4;
    }

    if (T < 8) {
      T = _.bottom + 4;
    }

    h({ top: T, left: w });
    u(true);
  }, [n]);

  const y = b((_) => {
    const _target = _.target;

    if (
      d.current &&
      !d.current.contains(_target) &&
      f.current &&
      !f.current.contains(_target)
    ) {
      a(false);
      u(false);
    }
  }, []);

  V(() => {
    if (i) {
      m();
      document.addEventListener("mousedown", y);
      window.addEventListener("scroll", m, true);
      window.addEventListener("resize", m);

      return () => {
        document.removeEventListener("mousedown", y);
        window.removeEventListener("scroll", m, true);
        window.removeEventListener("resize", m);
      };
    }
  }, [i, y, m]);

  const g = (_) => {
    _.stopPropagation();

    if (i) {
      a(false);
      u(false);
    } else {
      a(true);
    }
  };

  const p = (_, v) => {
    _.stopPropagation();
    v.onClick();
    a(false);
    u(false);
  };

  return r("div", {
    className: `${ut.dropdownWrapper} ${s || ""}`,
    children: [
      r("div", { ref: d, className: ut.trigger, onClick: g, children: e }),
      i &&
        _t(
          r("div", {
            ref: f,
            className: `${ut.menu} ${c ? "" : ut.hidden}`,
            style: { top: l.top, left: l.left },
            children: t.map((_, v) =>
              r(
                "div",
                {
                  children: [
                    r("button", {
                      type: "button",
                      className: `${ut.menuItem} ${_.danger ? ut.danger : ""}`,
                      onClick: (C) => p(C, _),
                      children: [
                        _.icon &&
                          r("span", {
                            className: ut.itemIcon,
                            children: _.icon,
                          }),
                        r("span", {
                          className: ut.itemLabel,
                          children: _.label,
                        }),
                      ],
                    }),
                    o.includes(_.id) &&
                      v < t.length - 1 &&
                      r("div", { className: ut.divider }),
                  ],
                },
                _.id
              )
            ),
          }),
          document.body
        ),
    ],
  });
}
const Tf = "oAyquNjM";
const Nf = "cGo-pqMK";
const Ef = "abh-IRfe";
const Rf = "_3UMrcwJw";
const bf = "MtmuinE5";
const Sf = "OHOBvjSN";
const kf = "vPid2PoY";
const If = "ShSUtrj1";

const Ct = {
  header: Tf,
  headerMain: Nf,
  moreDropdown: Ef,
  pinnedBadge: Rf,
  authorInfo: bf,
  authorLink: Sf,
  time: kf,
  edited: If,
};

function Pf({
  author: e,
  createdAt: t,
  editedAt: n,
  postId: o,
  showAvatar: s = true,
  isOnOwnProfile: i = false,
  isPinned: a = false,
  onReport: c,
  onEdit: u,
  onDelete: l,
  onPin: h,
  onCopyLink: d,
}) {
  const f = _s(t);

  const m = Ne((v) => v.profile?.id);

  const y = e.id === m;
  const g = 2880 * 60 * 1000; /* 1e3 */
  const p = y && Date.now() - new Date(t).getTime() < g;

  const _ = Te(() => {
    const v = [];

    v.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: r(Ts, { size: 16 }),
      onClick: () => d?.(o),
    });

    if (p) {
      v.push({
        id: "edit",
        label: "Редактировать",
        icon: r(Ns, { size: 16 }),
        onClick: () => u?.(o),
      });
    }

    if (i) {
      v.push({
        id: "pin",
        label: a ? "Открепить" : "Закрепить",
        icon: r(uo, { size: 16 }),
        onClick: () => h?.(o),
      });
    }

    if (y || i) {
      v.push({
        id: "delete",
        label: "Удалить",
        icon: r(Ps, { size: 16 }),
        danger: true,
        onClick: () => l?.(o),
      });
    }

    if (!y) {
      v.push({
        id: "report",
        label: "Пожаловаться",
        icon: r(Es, { size: 16 }),
        danger: true,
        onClick: () => c?.(o),
      });
    }

    return v;
  }, [y, p, i, a, o, u, l, h, c, d]);

  return r("header", {
    className: Ct.header,
    children: [
      a &&
        r("div", {
          className: Ct.pinnedBadge,
          children: [
            r(uo, { size: 14 }),
            r("span", { children: "Закреплённый пост" }),
          ],
        }),
      r("div", {
        className: Ct.headerMain,
        children: [
          s &&
            r("a", {
              href: `/@${e.username}`,
              children: r(ze, {
                src: e.avatar,
                alt: e.displayName,
                size: "sm",
                online: e.online,
              }),
            }),
          r("div", {
            className: Ct.authorInfo,
            children: [
              r("a", {
                href: `/@${e.username}`,
                className: Ct.authorLink,
                children: r(ln, {
                  name: e.displayName,
                  verified: e.isVerified,
                  hasNuksta: e.hasNuksta,
                  pin: e.pin,
                  size: "sm",
                }),
              }),
              r("time", {
                dateTime: t,
                className: Ct.time,
                children: [
                  f,
                  n &&
                    r(Pn, {
                      text: new Date(n).toLocaleString("ru-RU"),
                      children: r("span", {
                        className: Ct.edited,
                        children: " (ред.)",
                      }),
                    }),
                ],
              }),
            ],
          }),
          r(Fs, {
            trigger: r(bs, { size: 18 }),
            items: _,
            position: "bottom-right",
            className: Ct.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
function Hs(e, t, n) {
  const { isVisible: o, isRevealing: s, onRevealComplete: i } = n;
  const a = I([]);
  const c = I(null);
  const u = I(null);
  const l = I({ width: 0, height: 0 });
  const h = I(1);

  const d = b((g, p) => {
    const _ = Math.random() * 80 + 60;
    return {
      x: Math.random() * g,
      y: Math.random() * p,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * _,
      maxLife: _,
    };
  }, []);

  const f = b(
    (g, p) => {
      const _ = Math.floor((g * p) / 600);
      const v = [];
      for (let C = 0; C < _; C++) {
        v.push(d(g, p));
      }
      a.current = v;
    },
    [d]
  );

  const m = b(() => {
    const e_current = e.current;
    const t_current = t.current;
    if (!e_current || !t_current) {
      return;
    }
    const _ = t_current.getBoundingClientRect();
    if (_.width === 0 || _.height === 0) {
      return;
    }
    const v = window.devicePixelRatio || 1;
    if (l.current.width !== _.width || l.current.height !== _.height) {
      l.current = { width: _.width, height: _.height };
      e_current.width = _.width * v;
      e_current.height = _.height * v;
      e_current.style.width = `${_.width}px`;
      e_current.style.height = `${_.height}px`;
      const C = e_current.getContext("2d");

      if (C) {
        C.setTransform(v, 0, 0, v, 0, 0);
        u.current = C;
      }

      f(_.width, _.height);
    }
  }, [e, t, f]);

  const y = b(() => {
    h.current = 1;
  }, []);

  V(() => {
    if (!o) {
      if (c.current) {
        cancelAnimationFrame(c.current);
        c.current = null;
      }

      return;
    }
    m();
    const g = () => {
      const u_current = u.current;
      const { width: _, height: v } = l.current;
      if (!u_current || _ === 0 || _ === 0 || v === 0) {
        c.current = requestAnimationFrame(g);
        return;
      }
      if (s && ((h.current -= 0.05), h.current <= 0)) {
        i();
        return;
      }
      u_current.clearRect(0, 0, _, v);

      a.current.forEach((C, T) => {
        C.x += C.speedX;
        C.y += C.speedY;
        C.life--;

        if (C.x < 0) {
          C.x = _;
        }

        if (C.x > _) {
          C.x = 0;
        }

        if (C.y < 0) {
          C.y = v;
        }

        if (C.y > v) {
          C.y = 0;
        }

        if (C.life <= 0) {
          a.current[T] = d(_, v);
          return;
        }

        const w = C.life / C.maxLife;
        const k = w < 0.3 ? w / 0.3 : 1;
        const S = C.opacity * k * h.current;
        u_current.beginPath();
        u_current.arc(C.x, C.y, C.size, 0, Math.PI * 2);
        u_current.fillStyle = `rgba(255, 255, 255, ${S})`;
        u_current.fill();
      });

      c.current = requestAnimationFrame(g);
    };
    c.current = requestAnimationFrame(g);
    window.addEventListener("resize", m);

    return () => {
      if (c.current) {
        cancelAnimationFrame(c.current);
      }

      window.removeEventListener("resize", m);
    };
  }, [o, s, d, m, i]);

  return { resetOpacity: y };
}
const Af = "_2Gc4qhOv";
const xf = "UY9OONTU";
const Of = "_0IkXVI0s";
const Lf = "-LecVcA9";
const Mf = "I1O3wwfn";
const Xt = { container: Af, hidden: xf, image: Of, revealing: Lf, canvas: Mf };
const bo = 5;
function $f({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: o,
  height: s,
  className: i = "",
  onClick: a,
}) {
  const [c, u] = A(!n);
  const [l, h] = A(false);
  const [d, f] = A(false);
  const m = I(null);
  const y = I(null);
  const g = I(null);
  const p = I(false);

  const { resetOpacity: _ } = Hs(m, y, {
    isVisible: d && !c && n,
    isRevealing: l,
    onRevealComplete: () => u(true),
  });

  V(() => {
    const y_current = y.current;
    if (!y_current) {
      return;
    }
    const E = new IntersectionObserver(
      (R) => {
        R.forEach((P) => {
          f(P.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    E.observe(y_current);

    return () => {
      E.disconnect();
    };
  }, []);

  const v = (S) => {
    g.current = { x: S.clientX, y: S.clientY };
    p.current = false;
  };

  const C = (S) => {
    if (!g.current) {
      return;
    }
    const E = Math.abs(S.clientX - g.current.x);
    const R = Math.abs(S.clientY - g.current.y);

    if (E > bo || R > bo) {
      p.current = true;
    }
  };

  const T = (S) => {
    if (p.current) {
      p.current = false;
      S.stopPropagation();
      return;
    }

    if (!c && !l && n) {
      S.stopPropagation();
      h(true);
      _();
    } else if (a) {
      a(S);
    }
  };

  const w = !c && n;
  const k = o && s ? { aspectRatio: `${o} / ${s}` } : undefined;
  return n
    ? r("div", {
        ref: y,
        className: `${Xt.container} ${i} ${w ? Xt.hidden : ""} ${
          l ? Xt.revealing : ""
        }`,
        style: k,
        onPointerDown: v,
        onPointerMove: C,
        onClick: T,
        children: [
          r("img", {
            src: e,
            alt: t,
            className: Xt.image,
            loading: "lazy",
            width: o,
            height: s,
            draggable: false,
          }),
          w && r("canvas", { ref: m, className: Xt.canvas }),
        ],
      })
    : r("img", {
        src: e,
        alt: t,
        className: i,
        loading: "lazy",
        draggable: false,
        onClick: a,
      });
}
const Df = "_7OM9isQp";
const Uf = "tOcLl5Fe";
const Bf = "K6pRPvna";
const Ff = "W7spdM5t";
const Hf = "_-2wZA6Y1";
const Vf = "eelWZWVN";

const $t = {
  container: Df,
  hidden: Uf,
  video: Bf,
  revealing: Ff,
  canvas: Hf,
  duration: Vf,
};

function Wf(e) {
  const t = Math.floor(e / 60);
  const n = e % 60;
  return `${t}:${n.toString().padStart(2, "0")}`;
}
function jf({
  src: e,
  spoiler: t = false,
  width: n,
  height: o,
  duration: s,
  className: i = "",
}) {
  const a = I(null);
  const c = I(null);
  const u = I(null);
  const [l, h] = A(!t);
  const [d, f] = A(false);
  const [m, y] = A(false);

  const { resetOpacity: g } = Hs(u, c, {
    isVisible: m && !l && t,
    isRevealing: d,
    onRevealComplete: () => h(true),
  });

  V(() => {
    const c_current = c.current;
    if (!c_current) {
      return;
    }
    const T = new IntersectionObserver(
      (w) => {
        w.forEach((k) => {
          y(k.isIntersecting);

          if (!k.isIntersecting && a.current) {
            a.current.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    T.observe(c_current);

    return () => T.disconnect();
  }, []);

  const p = (C) => {
    C.stopPropagation();

    if (!l && !d && t) {
      f(true);
      g();
      return;
    }
  };

  const _ = !l && t;
  const v = n && o ? { aspectRatio: `${n} / ${o}` } : undefined;
  return r("div", {
    ref: c,
    className: `${$t.container} ${i} ${_ ? $t.hidden : ""} ${
      d ? $t.revealing : ""
    }`,
    style: v,
    onClick: p,
    children: [
      r("video", {
        ref: a,
        src: e,
        controls: l || !t,
        preload: "metadata",
        playsInline: true,
        className: $t.video,
        width: n,
        height: o,
      }),
      s != null && r("div", { className: $t.duration, children: Wf(s) }),
      _ && r("canvas", { ref: u, className: $t.canvas }),
    ],
  });
}
const zf = "l4cwyAPN";
const qf = "qlCZ-7Jf";
const Xf = "_4vGEh5tJ";
const Yf = "awFKBPHw";
const Gf = "_0vEjHxry";
const nt = { mediaWrapper: zf, isFeed: qf, media: Xf, dragging: Yf, image: Gf };
const Zf = 5;
const Kf = 0.95;
const Gn = 0.5;
function Pr({ media: e, isFeed: t = false }) {
  const n = e?.filter((E) => E.type === "image") ?? [];

  const o = e?.filter((E) => E.type === "video") ?? [];

  const s = I(null);

  const i = ms((E) => E.open);

  const a = I(false);
  const c = I(0);
  const u = I(0);
  const l = I(false);
  const h = I(0);
  const d = I(0);
  const f = I(0);
  const m = I(null);

  const y = () => {
    if (m.current) {
      cancelAnimationFrame(m.current);
      m.current = null;
    }
  };

  const g = () => {
    const s_current = s.current;
    if (s_current) {
      f.current *= Kf;

      if (Math.abs(f.current) < Gn) {
        y();
        return;
      }

      s_current.scrollLeft += f.current;
      m.current = requestAnimationFrame(g);
    }
  };

  const p = (E) => {
    const s_current = s.current;

    if (s_current && n.length + o.length > 1) {
      if (n.length + o.length > 1) {
        y();
        a.current = true;
        s_current.classList.add(nt.dragging);
        c.current = E.clientX;
        h.current = E.clientX;
        d.current = Date.now();
        u.current = s_current.scrollLeft;
        l.current = false;
        f.current = 0;
        E.preventDefault();
      }
    }
  };

  const _ = (E) => {
    if (!a.current) {
      return;
    }
    const s_current = s.current;
    if (!s_current) {
      return;
    }
    const P = Date.now();
    const N = E.clientX - c.current;
    const U = E.clientX - h.current;
    const O = P - d.current;

    if (Math.abs(N) > Zf) {
      l.current = true;
    }

    if (O > 0) {
      f.current = (-U / O) * 16;
    }

    h.current = E.clientX;
    d.current = P;
    s_current.scrollLeft = u.current - N;
  };

  const v = () => {
    if (a.current && Math.abs(f.current) > Gn) {
      g();
    }

    a.current = false;
    s.current?.classList.remove(nt.dragging);
  };

  const C = () => {
    if (a.current) {
      Math.abs(f.current) > Gn && g();
      a.current = false;
      s.current?.classList.remove(nt.dragging);
    }
  };

  V(
    () => () => {
      y();
      s.current?.classList.remove(nt.dragging);
    },
    []
  );

  const T = (E, R) => {
    if (l.current) {
      l.current = false;
      R.stopPropagation();
      return;
    }
    i(
      n.map((P) => ({
        id: P.id,
        url: P.url,
        width: P.width || 800,
        height: P.height || 600,
      })),
      E
    );
  };

  const w = (E) => {
    E.stopPropagation();
    l.current = false;
  };

  const k = Te(() => {
    const E = [...n, ...o];
    if (E.length === 0) {
      return;
    }
    const R = Math.max(...E.map((P) => P.height || 0));
    return R > 0 ? Math.min(R, 300) : undefined;
  }, [n, o]);

  if (n.length === 0 && o.length === 0) {
    return null;
  }
  const S = n.length + o.length;
  return r("div", {
    className: `${nt.mediaWrapper} ${t ? nt.isFeed : ""}`,
    "data-count": S,
    style: k ? { height: `${k}px` } : undefined,
    children: r("div", {
      ref: s,
      className: `${nt.media} ${t ? nt.isFeed : ""}`,
      "data-count": S,
      onClick: w,
      onMouseDown: p,
      onMouseMove: _,
      onMouseUp: v,
      onMouseLeave: C,
      children: [
        o.map((E) =>
          r(
            jf,
            {
              src: E.url,
              spoiler: E.spoiler,
              width: E.width,
              height: E.height,
              duration: E.duration,
              className: nt.image,
            },
            E.id
          )
        ),
        n.map((E, R) =>
          r(
            $f,
            {
              src: E.url,
              spoiler: E.spoiler,
              width: E.width,
              height: E.height,
              className: nt.image,
              onClick: (P) => T(R, P),
            },
            E.id
          )
        ),
      ],
    }),
  });
}
const Qf = "Pc3ZwYUA";
const Jf = "uXiMWdXs";
const em = "_92KcEhCb";
const tm = "A5HN458Y";
const nm = "kVjrCCJb";
const rm = "WIU3w8vr";
const om = "sxXVgu6K";

const bt = {
  counter: Qf,
  digit: Jf,
  prev: em,
  current: tm,
  animating: nm,
  up: rm,
  down: om,
};

function sm(e) {
  if (e >= 1000000 /* 1e6 */) {
    const t = e / 1000000; /* 1e6 */
    return t % 1 === 0 ? `${t}M` : `${t.toFixed(1)}M`;
  }
  if (e >= 1000 /* 1e3 */) {
    const t = e / 1000; /* 1e3 */
    return t % 1 === 0 ? `${t}K` : `${t.toFixed(1)}K`;
  }
  return e.toString();
}
function Kt({ value: e }) {
  const t = sm(e);
  const n = I(e);
  const o = I(t.length);
  const s = I(Date.now());

  const [i, a] = A(() =>
    t.split("").map((d, f) => ({
      char: d,
      prevChar: d,
      isAnimating: false,
      key: f,
    }))
  );

  const [c, u] = A(null);

  V(() => {
    if (Date.now() - s.current < 100) {
      n.current = e;
      return;
    }
    if (e === n.current) {
      return;
    }
    const f = e > n.current ? "up" : "down";
    u(f);
    n.current = e;
    const m = t.split("");

    const y = i.map((T) => T.char);

    const g = Math.max(m.length, y.length);
    const p = y.join("").padStart(g, " ").split("");

    const v = m
      .join("")
      .padStart(g, " ")
      .split("")
      .map((T, w) => {
        const k = p[w] || " ";
        const S = i[w - (g - i.length)];
        return T !== k
          ? (o.current++,
            { char: T, prevChar: k, isAnimating: true, key: o.current })
          : { char: T, prevChar: T, isAnimating: false, key: S?.key ?? w };
      })
      .filter((T) => T.char !== " " || T.isAnimating);

    a(v);
    const C = setTimeout(() => {
      a((T) =>
        T.map((w) => ({
          ...w,
          isAnimating: false,
        }))
      );

      u(null);
    }, 300);
    return () => clearTimeout(C);
  }, [e]);

  if (!i.some((d) => d.isAnimating)) {
    return r("span", { children: t });
  }

  const h = c === "up" ? bt.up : c === "down" ? bt.down : "";
  return r("span", {
    className: bt.counter,
    children: i.map((d) =>
      d.isAnimating
        ? r(
            "span",
            {
              className: `${bt.digit} ${bt.animating} ${h}`,
              children: [
                r("span", { className: bt.prev, children: d.prevChar }),
                r("span", { className: bt.current, children: d.char }),
              ],
            },
            d.key
          )
        : r("span", { children: d.char }, d.key)
    ),
  });
}
const im = "QnwlJ0JI";
const am = "_4ZjoCms2";
const cm = "aMkvCscU";
const lm = "lgOmJE17";
const um = "luVObdSy";
const dm = "Rezs30lQ";
const hm = "_8wD0dR85";
const fm = "ndR5d-hp";
const mm = "z-xpwcRG";
const pm = "DecvAv-7";
const gm = "VRuv-fcD";
const vm = "lo4NvVKr";
const _m = "eJzh56H-";
const wm = "giKCW-y7";

const Pe = {
  actions: im,
  actionsLeft: am,
  action: cm,
  views: lm,
  liked: um,
  reposted: dm,
  disabled: hm,
  noAnimation: fm,
  reactionWrapper: mm,
  actionsRight: pm,
  captured: gm,
  capturedEmoji: vm,
  capturedText: _m,
  capturedMobile: wm,
};

function ym({
  liked: e,
  reposted: t,
  likesCount: n,
  repostsCount: o,
  commentsCount: s,
  viewsCount: i,
  dominantEmoji: a,
  onLike: c,
  onRepost: u,
  onComment: l,
  disableRepost: h = false,
}) {
  const d = I(false);
  return r("footer", {
    className: Pe.actions,
    children: [
      r("div", {
        className: Pe.actionsLeft,
        children: [
          r("div", {
            className: Pe.reactionWrapper,
            onClick: (f) => f.stopPropagation(),
            children: r("button", {
              className: `${Pe.action} ${e ? Pe.liked : ""} ${
                !d.current && e ? Pe.noAnimation : ""
              }`,
              onClick: (f) => {
                f.stopPropagation();
                d.current = true;
                c();
              },
              "aria-label": "Нравится",
              children: [
                r($n, { filled: e }, e ? "liked" : "not-liked"),
                r(Kt, { value: n }),
              ],
            }),
          }),
          r("button", {
            className: Pe.action,
            onClick: (f) => {
              f.stopPropagation();
              l();
            },
            "aria-label": "Комментировать",
            children: [r(Sr, {}), r(Kt, { value: s })],
          }),
          r("button", {
            className: `${Pe.action} ${t ? Pe.reposted : ""} ${
              h ? Pe.disabled : ""
            }`,
            onClick: (f) => {
              f.stopPropagation();

              if (!h) {
                u();
              }
            },
            disabled: h,
            "aria-label": "Репост",
            children: [r(In, {}), r(Kt, { value: o })],
          }),
        ],
      }),
      r("div", {
        className: Pe.actionsRight,
        children: [
          a &&
            r(Re, {
              children: [
                r(Pn, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Pe.captured,
                  children: [
                    r("span", { className: Pe.capturedEmoji, children: a }),
                    r("span", {
                      className: Pe.capturedText,
                      children: "Пост захвачен",
                    }),
                  ],
                }),
                r(Pn, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Pe.capturedMobile,
                  children: r("span", { children: a }),
                }),
              ],
            }),
          r("span", {
            className: Pe.views,
            children: [r(As, {}), r(Kt, { value: i })],
          }),
        ],
      }),
    ],
  });
}
const Cm = "FdYjPIR3";
const Tm = "MRPN0AlG";
const Nm = "gVTZJXUf";
const Em = "PpDQ-7eT";
const Rm = "f-Ewjbkv";
const bm = "qYj6ku6f";
const Sm = "YmQiahvA";
const km = "_4sEs40kd";
const Im = "QflhaLOr";
const Pm = "_8yAtdePh";
const Am = "Q0BBb0GB";
const xm = "LVT25SUb";
const Om = "_2QopExez";
const Lm = "GWyTusR8";
const Mm = "uA48J3e0";
const $m = "L9fW2zD6";

const Se = {
  post: Cm,
  postInner: Tm,
  isFeed: Nm,
  postContent: Em,
  postBody: Rm,
  textWrapper: bm,
  text: Sm,
  collapsed: km,
  expandButton: Im,
  originalPost: Pm,
  originalPostHeader: Am,
  originalPostTime: xm,
  originalPostText: Om,
  originalPostMedia: Lm,
  originalPostStats: Mm,
  originalPostStat: $m,
};

function _n(e) {
  if (e >= 1000000 /* 1e6 */) {
    const t = e / 1000000; /* 1e6 */
    return t % 1 === 0 ? `${t}M` : `${t.toFixed(1)}M`;
  }
  if (e >= 1000 /* 1e3 */) {
    const t = e / 1000; /* 1e3 */
    return t % 1 === 0 ? `${t}K` : `${t.toFixed(1)}K`;
  }
  return e.toString();
}
function Dm(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function Um({ attachments: e }) {
  const t = Te(() => xn(e), [e]);
  return (
    t.length === 0 ||
    r("div", {
      className: Se.originalPostMedia,
      children: r(Pr, { media: t }),
    })
  );
}
function Bm({ originalPost: e }) {
  const t = Dm(e.createdAt);

  const n = b(
    (o) => {
      o.stopPropagation();
      const s = e.author.username ?? e.author.id;
      $(`/@${s}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id]
  );

  return r("div", {
    className: Se.originalPost,
    onClick: n,
    children: [
      r("div", {
        className: Se.originalPostHeader,
        children: [
          r(In, { size: 14 }),
          r(ze, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          r(ln, {
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          r("span", { className: Se.originalPostTime, children: t }),
        ],
      }),
      e.text && r("div", { className: Se.originalPostText, children: e.text }),
      e.attachments &&
        e.attachments.length > 0 &&
        r(Um, { attachments: e.attachments }),
      r("div", {
        className: Se.originalPostStats,
        children: [
          r("span", {
            className: Se.originalPostStat,
            children: [r($n, { size: 16 }), _n(e.reactions?.total ?? 0)],
          }),
          r("span", {
            className: Se.originalPostStat,
            children: [r(Sr, { size: 16 }), _n(e.stats?.comments ?? 0)],
          }),
          r("span", {
            className: Se.originalPostStat,
            children: [r(In, { size: 16 }), _n(e.stats?.reposts ?? 0)],
          }),
          r("span", {
            className: Se.originalPostStat,
            children: [r(As, { size: 16 }), _n(e.stats?.views ?? 0)],
          }),
        ],
      }),
    ],
  });
}
const Fm = "cZnuRugG";
const Hm = "gXPlO0SF";
const Vm = "yfGqJGgk";
const Wm = "a3a8DYnF";
const jm = "Zm7GdliE";
const zm = "x-TM77c0";
const qm = "vqhGsmVx";
const Xm = "wXZfEkKN";
const Ym = "C4SARhpg";
const Gm = "epV7SM-L";
const Zm = "Bkxq4G-V";
const Km = "M1orzhg7";
const Qm = "VQtopWsI";
const Jm = "vI-SLgZ3";
const ep = "hWCpL6Hf";
const tp = "WAYqGGYB";
const np = "OWLYzJZs";
const rp = "P15SrtYp";
const op = "y-9i4poD";
const sp = "qTvjpE7N";
const ip = "rKM-vAOv";

const ye = {
  commentInput: Fm,
  replyMode: Hm,
  inputRow: Vm,
  attachmentStrip: Wm,
  circleButton: jm,
  micButton: zm,
  sendButton: qm,
  submitting: Xm,
  textareaContainer: Ym,
  expanded: Gm,
  voiceMode: Zm,
  inputWrapper: Km,
  commentCharCount: Qm,
  error: Jm,
  input: ep,
  replyHeader: tp,
  replyText: np,
  replyName: rp,
  replyClose: op,
  dragActive: sp,
  dragOverlay: ip,
};

const ap = "_2mmgs8Ne";
const cp = "WFxp3J8v";
const lp = "abwLbpfW";
const Zn = { textInput: ap, entering: cp, sendButton: lp };
const up = 1000; /* 1e3 */
function dp({
  text: e,
  spans: t,
  onChange: n,
  placeholder: o,
  onSubmit: s,
  isEntering: i,
  autoFocus: a,
  isSubmitting: c,
  sendDisabled: u,
  onImagePaste: l,
}) {
  const h = up - e.length;
  const d = h < 0;
  const f = [Zn.textInput, i ? Zn.entering : ""].filter(Boolean).join(" ");
  return r("div", {
    className: f,
    children: [
      r("div", {
        className: ye.inputWrapper,
        children: [
          r(Un, {
            value: e,
            spans: t,
            onChange: n,
            placeholder: o,
            autoFocus: a,
            className: ye.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: d || s,
            disableFormatting: true,
            onImagePaste: l,
          }),
          d &&
            r("span", {
              className: `${ye.commentCharCount} ${ye.error}`,
              children: h,
            }),
        ],
      }),
      r("button", {
        className: `${ye.circleButton} ${ye.sendButton} ${Zn.sendButton} ${
          c ? ye.submitting : ""
        }`,
        onClick: s,
        disabled: c || u || u || d,
        children: c ? r(vt, { size: "xs" }) : r(ws, { size: 20 }),
      }),
    ],
  });
}
const Qt = 2;
const hp = 2;
const wn = Qt + hp;
const St = 24;
const fp = 80;
const So = "rgba(142, 142, 147, 0.6)";
const mp = "#FFFFFF";
function pp({
  levels: e,
  slideOffset: t,
  audioRef: n,
  isRecording: o,
  hasRecording: s,
  isPlaying: i,
  onSeek: a,
  onPlay: c,
}) {
  const u = I(null);
  const l = I(null);
  const h = I(false);
  const d = I(0);
  const f = I(0);
  const m = I(0);
  const y = I(0);
  const g = I(null);
  const p = I(null);
  const _ = I(0);
  const [v, C] = A(0);
  const T = Math.max(1, Math.floor(v / wn));

  V(() => {
    m.current = t;

    if (t === 0) {
      f.current = 0;
    }
  }, [t]);

  V(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }
    const U = new ResizeObserver((X) => {
      for (const te of X) {
        const J = te.contentRect.width;

        if (J > 0) {
          C(J);
        }
      }
    });
    U.observe(l_current);
    const O = l_current.getBoundingClientRect();

    if (O.width > 0) {
      C(O.width);
    }

    return () => {
      U.disconnect();
    };
  }, []);

  V(() => {
    const u_current = u.current;
    if (!u_current || v === 0) {
      return;
    }
    const U = window.devicePixelRatio || 1;
    u_current.width = v * U;
    u_current.height = St * U;
    u_current.style.width = `${v}px`;
    u_current.style.height = `${St}px`;
  }, [v]);

  const w = b(
    (N) => {
      const u_current = u.current;
      if (!u_current || v === 0) {
        return;
      }
      const O = u_current.getContext("2d");
      if (!O) {
        return;
      }
      const X = window.devicePixelRatio || 1;
      O.clearRect(0, 0, u_current.width, u_current.height);
      O.save();
      O.scale(X, X);
      const te = St / 2;
      const J = St - 4;
      for (let ae = 0; ae < T; ae++) {
        let ce;
        if (e.length === 0) {
          ce = 0.05;
        } else if (e.length === 1) {
          ce = e[0];
        } else {
          const M = (ae / (T - 1)) * (e.length - 1);
          const x = Math.floor(M);
          const B = Math.min(x + 1, e.length - 1);
          const $ = M - x;
          ce = e[x] * (1 - $) + e[B] * $;
        }
        const G = Math.max(4, ce * J);
        const ee = ae * wn;
        const D = te - G / 2;
        const W = ae < N;
        O.fillStyle = W ? mp : So;
        const Z = Qt / 2;
        O.beginPath();
        O.roundRect(ee, D, Qt, G, Z);
        O.fill();
      }
      O.restore();
    },
    [e, v, T]
  );

  const k = b(
    (N) => {
      const u_current = u.current;
      if (!u_current || v === 0) {
        return;
      }
      const O = u_current.getContext("2d");
      if (!O) {
        return;
      }
      const X = window.devicePixelRatio || 1;
      const m_current = m.current;

      const { current } = f;

      if (current !== m_current) {
        const D = N - y.current;
        const W = (wn / fp) * D;

        if (current < m_current) {
          f.current = Math.min(m_current, current + W);
        } else {
          f.current = m_current;
        }
      }
      y.current = N;
      O.clearRect(0, 0, u_current.width, u_current.height);
      O.save();
      O.scale(X, X);
      O.translate(-current, 0);
      const ce = St / 2;
      const G = St - 4;
      const ee = T + e.length;
      for (let D = 0; D < ee; D++) {
        const W = D - T;
        const Z = W >= 0 && W < e.length ? e[W] : 0.05;
        const M = Math.max(4, Z * G);
        const x = D * wn;
        const B = ce - M / 2;
        O.fillStyle = So;
        const $ = Qt / 2;
        O.beginPath();
        O.roundRect(x, B, Qt, M, $);
        O.fill();
      }
      O.restore();

      if (f.current !== m.current || o) {
        g.current = requestAnimationFrame(k);
      }
    },
    [e, v, T, o]
  );

  V(() => {
    if (o) {
      y.current = performance.now();
      g.current = requestAnimationFrame(k);
    } else if (g.current) {
      cancelAnimationFrame(g.current);
      g.current = null;
    }

    return () => {
      if (g.current) {
        cancelAnimationFrame(g.current);
        g.current = null;
      }
    };
  }, [o, k]);

  V(() => {
    if (!i || o) {
      if (p.current) {
        cancelAnimationFrame(p.current);
        p.current = null;
      }

      return;
    }
    const N = () => {
      const n_current = n.current;
      if (
        !n_current ||
        n_current.paused ||
        n_current.paused ||
        n_current.ended
      ) {
        p.current = null;
        return;
      }
      const O = n_current.currentTime / n_current.duration;
      const X = Math.ceil(O * T);

      if (X !== _.current) {
        _.current = X;
        w(X);
      }

      p.current = requestAnimationFrame(N);
    };
    p.current = requestAnimationFrame(N);

    return () => {
      if (p.current) {
        cancelAnimationFrame(p.current);
        p.current = null;
      }
    };
  }, [i, o, n, T, w]);

  V(() => {
    if (!o && !i && s) {
      const n_current = n.current;
      if (n_current && n_current.duration > 0 && n_current.currentTime > 0) {
        const U = n_current.currentTime / n_current.duration;
        const O = Math.ceil(U * T);
        _.current = O;
        w(O);
      } else {
        _.current = 0;
        w(0);
      }
    }
  }, [o, i, s, w, n, T]);

  V(() => {
    if (!o && s && !i) {
      w(_.current);
    }
  }, [e, T, o, s, i, w]);

  const S = b((N) => {
    const l_current = l.current;
    if (!l_current) {
      return 0;
    }
    const O = l_current.getBoundingClientRect();
    const X = "touches" in N ? N.touches[0].clientX : N.clientX;
    return Math.max(0, Math.min(1, (X - O.left) / O.width));
  }, []);

  const E = b(
    (N) => {
      if (!(!s || o)) {
        N.preventDefault();

        if (!i) {
          c();
          return;
        }

        h.current = true;
        d.current = S(N);
      }
    },
    [s, o, i, S, c]
  );

  const R = b(
    (N) => {
      if (h.current) {
        d.current = S(N);
      }
    },
    [S]
  );

  const P = b(() => {
    if (h.current) {
      a(d.current);
      h.current = false;
    }
  }, [a]);

  V(() => {
    const N = (O) => R(O);

    const U = () => P();

    window.addEventListener("mousemove", N);
    window.addEventListener("mouseup", U);
    window.addEventListener("touchmove", N);
    window.addEventListener("touchend", U);

    return () => {
      window.removeEventListener("mousemove", N);
      window.removeEventListener("mouseup", U);
      window.removeEventListener("touchmove", N);
      window.removeEventListener("touchend", U);
    };
  }, [R, P]);

  return r("div", {
    ref: l,
    style: {
      width: "100%",
      height: `${St}px`,
      overflow: "hidden",
      cursor: s && !o ? "pointer" : "default",
    },
    onMouseDown: E,
    onTouchStart: E,
    children: r("canvas", { ref: u }),
  });
}
const gp = "-Ho1i5aD";
const vp = "tC8l4Awz";
const _p = "qgaHaLq2";
const wp = "ABusj9On";
const yp = "QN61mWs7";
const Cp = "sb0Zcaza";
const Tp = "zYZ8RG9n";
const Np = "kV8tSOUW";
const Ep = "MazmNAnz";
const Rp = "IygqjuIv";
const bp = "Danfku1z";

const Ue = {
  voiceInput: gp,
  circleButton: vp,
  playButton: _p,
  hasRecording: wp,
  stopButton: yp,
  recording: Cp,
  sendButton: Tp,
  audioVisualizer: Np,
  waveformContainer: Ep,
  recordingTime: Rp,
  exiting: bp,
};

function Sp({ onCancel: e, onSend: t, isExiting: n, onExitComplete: o }) {
  const [s, i] = A(false);

  const {
    isRecording: a,
    hasRecording: c,
    recordingTime: u,
    audioLevels: l,
    slideOffset: h,
    isPlaying: d,
    playbackProgress: f,
    duration: m,
    audioElementRef: y,
    startRecording: g,
    stopRecording: p,
    cancelRecording: _,
    playAudio: v,
    pauseAudio: C,
    seekTo: T,
    getAudioBlob: w,
  } = ba();

  V(() => {
    g();
  }, []);

  V(() => {
    if (n && o) {
      const O = setTimeout(o, 300);
      return () => clearTimeout(O);
    }
  }, [n, o]);

  const k = (O) => {
    if (!isFinite(O) || isNaN(O)) {
      return "00:00";
    }
    const X = Math.floor(O / 60);
    const te = Math.floor(O % 60);
    return `${X.toString().padStart(2, "0")}:${te.toString().padStart(2, "0")}`;
  };

  const S = () => {
    if (c) {
      if (d) {
        C();
      } else {
        v();
      }
    }
  };

  const E = () => {
    if (a) {
      p();
    }
  };

  const R = b(
    (O) => {
      T(O);
    },
    [T]
  );

  const P = b(async () => {
    if (!(s || !t)) {
      i(true);
      try {
        let O = null;

        if (a) {
          O = await p();
        } else {
          O = w();
        }

        if (!O) {
          return;
        }

        await t(O);
        _();
        e();
      } catch (O) {
        console.error("Failed to send voice message:", O);
      } finally {
        i(false);
      }
    }
  }, [s, a, p, w, t, _, e]);

  const N = k(a ? u : d ? f * m : m);

  const U = [
    Ue.voiceInput,
    a ? Ue.recording : "",
    c ? Ue.hasRecording : "",
    n ? Ue.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return r("div", {
    className: U,
    children: [
      r("button", {
        className: `${Ue.circleButton} ${Ue.playButton}`,
        onClick: S,
        children: d ? r(Ss, { size: 20 }) : r(ks, { size: 20 }),
      }),
      r("div", {
        className: Ue.audioVisualizer,
        children: [
          r("div", {
            className: Ue.waveformContainer,
            children: r(pp, {
              levels: l,
              slideOffset: h,
              audioRef: y,
              isRecording: a,
              hasRecording: c,
              isPlaying: d,
              onSeek: R,
              onPlay: v,
            }),
          }),
          r("span", { className: Ue.recordingTime, children: N }),
        ],
      }),
      r("button", {
        className: `${Ue.circleButton} ${Ue.stopButton}`,
        onClick: E,
        children: r(Ga, { size: 20 }),
      }),
      r("button", {
        className: `${Ue.circleButton} ${Ue.sendButton}`,
        onClick: P,
        disabled: s || (a && u < 1),
        children: s ? r(vt, { size: "xs" }) : r(ws, { size: 20 }),
      }),
    ],
  });
}
function Vs({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: o,
  onCancelReply: s,
  autoFocus: i,
}) {
  const { text: a, spans: c, handleChange: u, reset: l } = Mn();
  const [h, d] = A("text");
  const [f, m] = A(false);
  const [y, g] = A(false);
  const [p, _] = A(false);
  const [v, C] = A(false);
  const T = I(false);
  const w = I(null);
  const k = I(0);

  const {
    images: S,
    uploadingImages: E,
    isUploading: R,
    openFilePicker: P,
    removeImage: N,
    uploadFiles: U,
    clearAll: O,
    fileInputRef: X,
    handleFileChange: te,
  } = Ds(4);

  V(
    () => () => {
      if (w.current) {
        clearTimeout(w.current);
      }
    },
    []
  );
  const J = S.length > 0 || E.length > 0;
  const ae = a.length > 0 || p || p || J;
  const ce = h === "voice";
  const G = 1000; /* 1e3 */

  const ee = async () => {
    const j = a.trim().length > 0;
    const Y = S.length > 0;
    if ((!j && !Y) || p || R || a.length > G) {
      return;
    }
    const re = a.trim();
    const ie = [...c];

    const fe = S.map((oe) => ({
      mediaId: oe.mediaId,
    }));

    _(true);
    try {
      await e(re, ie, fe.length > 0 ? fe : undefined);
      l();
      O();
    } catch (oe) {
      console.error("Failed to submit comment:", oe);
    } finally {
      _(false);
    }
  };

  const D = () => {
    T.current = true;
    d("voice");
    g(false);
  };

  const W = () => {
    m(true);
  };

  const Z = () => {
    m(false);
    d("text");
    g(true);

    if (w.current) {
      clearTimeout(w.current);
    }

    w.current = window.setTimeout(() => {
      w.current = null;
      g(false);
    }, 300);
  };

  const M = b((j) => {
    j.preventDefault();
    j.stopPropagation();
    k.current++;

    if (j.dataTransfer?.types.includes("Files")) {
      C(true);
    }
  }, []);

  const x = b((j) => {
    j.preventDefault();
    j.stopPropagation();
  }, []);

  const B = b((j) => {
    j.preventDefault();
    j.stopPropagation();
    k.current--;

    if (k.current === 0) {
      C(false);
    }
  }, []);

  const $ = b(
    (j) => {
      j.preventDefault();
      j.stopPropagation();
      k.current = 0;
      C(false);
      const Y = j.dataTransfer?.files;

      if (Y && Y.length > 0) {
        U(Array.from(Y));
      }
    },
    [U]
  );

  const z = [
    ye.commentInput,
    ae ? ye.expanded : "",
    ce ? ye.voiceMode : "",
    o ? ye.replyMode : "",
    v ? ye.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return r("div", {
    className: z,
    onDragEnter: M,
    onDragOver: x,
    onDragLeave: B,
    onDrop: $,
    children: [
      v &&
        r("div", {
          className: ye.dragOverlay,
          children: [
            r("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                r("rect", {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2",
                  ry: "2",
                }),
                r("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                r("polyline", { points: "21 15 16 10 5 21" }),
              ],
            }),
            r("span", { children: "Перетащите изображение" }),
          ],
        }),
      o &&
        r("div", {
          className: ye.replyHeader,
          children: [
            r("span", {
              className: ye.replyText,
              children: [
                "Ответ для ",
                r("span", { className: ye.replyName, children: o.authorName }),
              ],
            }),
            r("button", {
              className: ye.replyClose,
              onClick: s,
              children: r(st, { size: 16 }),
            }),
          ],
        }),
      !ce &&
        !f &&
        J &&
        r("div", {
          className: ye.attachmentStrip,
          children: r($s, { images: S, uploadingImages: E, onRemove: N }),
        }),
      r("div", {
        className: ye.inputRow,
        children: [
          r("button", {
            className: ye.circleButton,
            onClick: ce ? W : P,
            children: ce ? r(st, { size: 20 }) : r(ys, { size: 20 }),
          }),
          r("div", {
            className: ye.textareaContainer,
            children:
              ce || f
                ? r(Sp, {
                    onCancel: W,
                    onSend: t,
                    isExiting: f,
                    onExitComplete: Z,
                  })
                : r(dp, {
                    text: a,
                    spans: c,
                    onChange: u,
                    placeholder: n,
                    onSubmit: ee,
                    isEntering: y,
                    autoFocus: i,
                    isSubmitting: p,
                    sendDisabled: R,
                    onImagePaste: U,
                  }),
          }),
          !ce &&
            !f &&
            r("button", {
              className: `${ye.circleButton} ${ye.micButton}`,
              onClick: D,
              children: r(ja, { size: 20 }),
            }),
        ],
      }),
      r("input", {
        ref: X,
        type: "file",
        accept: ur,
        multiple: true,
        onChange: te,
        style: { display: "none" },
      }),
    ],
  });
}

const Kn = it((e) => ({
  activeAudioId: null,
  setActiveAudio: (t) => e({ activeAudioId: t }),
}));

const kp = "_4REluXTH";
const Ip = "csThJX40";
const Pp = "_7tEz9WJs";
const Ap = "yICArXOf";
const xp = "-QGEO-Ir";
const Op = "F2vpEy3t";
const Lp = "thwOd-Oi";
const Mp = "cU3NuD-h";
const $p = "koGcQrYR";
const Dp = "Ka6vy6TO";

const Ge = {
  voiceMessage: kp,
  playButton: Ip,
  content: Pp,
  waveform: Ap,
  dragging: xp,
  bar: Op,
  played: Lp,
  info: Mp,
  time: $p,
  duration: Dp,
};

const Up = 45;
function Bp(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const o = e.charCodeAt(n);
    t = (t << 5) - t + o;
    t = t & t;
  }
  return Math.abs(t);
}
function Fp(e) {
  const t = [];
  let n = Bp(e);
  for (let o = 0; o < Up; o++) {
    n = (n * 9301 + 49297) % 233280;
    const s = 0.2 + (n / 233280) * 0.8;
    t.push(s);
  }
  return t;
}
function ko(e) {
  if (!isFinite(e) || isNaN(e)) {
    return "0:00";
  }
  const t = Math.floor(e / 60);
  const n = Math.floor(e % 60);
  return `${t}:${n.toString().padStart(2, "0")}`;
}
function Hp({ src: e, duration: t = 0 }) {
  const n = Te(() => e, [e]);

  const o = Te(() => Fp(e), [e]);

  const s = Kn((E) => E.activeAudioId);

  const i = Kn((E) => E.setActiveAudio);

  const [a, c] = A(true);
  const [u, l] = A(0);
  const [h, d] = A(t);
  const [f, m] = A(false);
  const y = I(null);
  const g = I(null);
  const p = I(null);
  const _ = s === n;

  V(() => {
    if (s !== n && y.current && !y.current.paused) {
      y.current.pause();
      p.current && (cancelAnimationFrame(p.current), (p.current = null));
    }
  }, [s, n]);

  V(() => {
    const E = new Audio(e);
    y.current = E;

    const R = () => {
      d(E.duration || t);
      c(false);
    };

    const P = () => {
      l(0);

      if (p.current) {
        cancelAnimationFrame(p.current);
        p.current = null;
      }

      i(null);
    };

    const N = () => {
      c(false);
    };

    E.addEventListener("loadedmetadata", R);
    E.addEventListener("ended", P);
    E.addEventListener("error", N);

    return () => {
      E.removeEventListener("loadedmetadata", R);
      E.removeEventListener("ended", P);
      E.removeEventListener("error", N);
      E.pause();
      y.current = null;

      if (p.current) {
        cancelAnimationFrame(p.current);
      }

      if (Kn.getState().activeAudioId === n) {
        i(null);
      }
    };
  }, [e, t, n, i]);

  const v = b(() => {
    if (y.current) {
      l(y.current.currentTime);
      p.current = requestAnimationFrame(v);
    }
  }, []);

  const C = b(() => {
    const y_current = y.current;

    if (y_current && !a) {
      if (_) {
        y_current.pause();
        p.current && (cancelAnimationFrame(p.current), (p.current = null));
        i(null);
      } else {
        i(n);
        y_current.play();
        v();
      }
    }
  }, [_, a, n, i, v]);

  const T = b(
    (E) => {
      if (!g.current || !h) {
        return 0;
      }
      const R = g.current.getBoundingClientRect();
      const E_clientX = E.clientX;
      return Math.max(0, Math.min(E_clientX - R.left, R.width)) / R.width;
    },
    [h]
  );

  const w = b(
    (E) => {
      const y_current = y.current;
      if (!y_current || !h || !h || f) {
        return;
      }
      const P = T(E);
      y_current.currentTime = P * h;
      l(y_current.currentTime);
    },
    [h, f, T]
  );

  const k = b(
    (E) => {
      const y_current = y.current;
      if (!y_current || !h) {
        return;
      }
      m(true);
      const P = T(E);
      y_current.currentTime = P * h;
      l(y_current.currentTime);
    },
    [h, T]
  );

  V(() => {
    if (!f) {
      return;
    }

    const E = (P) => {
      const y_current = y.current;
      if (!y_current || !h) {
        return;
      }
      const U = T(P);
      y_current.currentTime = U * h;
      l(y_current.currentTime);
    };

    const R = () => {
      m(false);
    };

    document.addEventListener("mousemove", E);
    document.addEventListener("mouseup", R);

    return () => {
      document.removeEventListener("mousemove", E);
      document.removeEventListener("mouseup", R);
    };
  }, [f, h, T]);
  const S = h > 0 ? u / h : 0;
  return r("div", {
    className: `${Ge.voiceMessage} ${_ ? Ge.playing : ""}`,
    children: [
      r("button", {
        className: Ge.playButton,
        onClick: C,
        disabled: a,
        children: a
          ? r(Rs, { size: 18 })
          : _
          ? r(Ss, { size: 18 })
          : r(ks, { size: 18 }),
      }),
      r("div", {
        className: Ge.content,
        children: [
          r("div", {
            ref: g,
            className: `${Ge.waveform} ${f ? Ge.dragging : ""}`,
            onClick: w,
            onMouseDown: k,
            children: o.map((E, R) => {
              const N = (R + 0.5) / o.length <= S;
              return r(
                "div",
                {
                  className: `${Ge.bar} ${N ? Ge.played : ""}`,
                  style: { height: `${Math.max(4, E * 24)}px` },
                },
                R
              );
            }),
          }),
          r("div", {
            className: Ge.info,
            children: [
              r("span", {
                className: Ge.time,
                children: ko(_ || u > 0 ? u : h),
              }),
              (_ || u > 0) &&
                r("span", { className: Ge.duration, children: ["/ ", ko(h)] }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Vp = "EMoEIZFv";
const Wp = "TCFYTRkG";
const jp = "-Jv0cl93";
const zp = "_8ZH4gvtt";
const qp = "VgMMM-FP";
const Xp = "MHUIw-Bn";
const Yp = "ugI7Vwfw";
const Gp = "eYiDjO7I";
const Zp = "efgl9R1v";
const Kp = "N5ciicq2";
const Qp = "Y3Xvuphx";
const Jp = "P1lAENLs";
const eg = "EafRTyEa";
const tg = "YgCVK2-C";
const ng = "E34stxAv";
const rg = "_5xeGurR-";
const og = "_8CHHNoFp";
const sg = "qBk55euG";
const ig = "NTrrYRK4";
const ag = "Oy71u1HK";
const cg = "Az3ELd41";
const lg = "g9UiDqsQ";
const ug = "-tabj2ls";
const dg = "LiWVk6u3";

const de = {
  commentWrapper: Vp,
  threadItem: Wp,
  avatarWrapper: jp,
  threadLine: zp,
  commentBody: qp,
  showMoreBtn: Xp,
  avatarPlaceholder: Yp,
  comment: Gp,
  small: Zp,
  commentTime: Kp,
  commentText: Qp,
  commentActions: Jp,
  commentContent: eg,
  avatarLink: tg,
  authorLink: ng,
  commentHeader: rg,
  moreButton: og,
  commentHeaderLeft: sg,
  replyMention: ig,
  commentMedia: ag,
  reactionWrapper: cg,
  commentAction: lg,
  liked: ug,
  replyButton: dg,
};

function hg({
  author: e,
  commentId: t,
  text: n,
  spans: o = [],
  attachments: s = [],
  createdAt: i,
  reactionsCount: a,
  isReacted: c,
  size: u = "sm",
  onLike: l,
  onReply: h,
  onReport: d,
  onEdit: f,
  onDelete: m,
  replyTo: y,
  hideAvatar: g = false,
  isWallOwner: p = false,
}) {
  n.slice(0, 20);
  const _ = _s(i);

  const v = Ne((E) => E.profile?.id);

  const C = e.id === v;
  const T = C || p;
  const w = u === "xs";

  const k = Te(() => {
    const E = [];

    if (C && f) {
      E.push({
        id: "edit",
        label: "Редактировать",
        icon: r(Ns, { size: 16 }),
        onClick: () => f(t),
      });
    }

    if (T && m) {
      E.push({
        id: "delete",
        label: "Удалить",
        icon: r(Ps, { size: 16 }),
        danger: true,
        onClick: () => m(t),
      });
    }

    if (!C) {
      E.push({
        id: "report",
        label: "Пожаловаться",
        icon: r(Es, { size: 16 }),
        danger: true,
        onClick: () => d(t),
      });
    }

    return E;
  }, [C, T, t, f, m, d]);

  const S = `/@${e.username ?? e.id}`;
  return r("div", {
    className: `${de.comment} ${w ? de.small : ""}`,
    children: [
      !g &&
        r("a", {
          href: S,
          className: de.avatarLink,
          children: r(ze, { src: e.avatar, alt: e.displayName, size: u }),
        }),
      r("div", {
        className: de.commentContent,
        children: [
          r("div", {
            className: de.commentHeader,
            children: [
              r("div", {
                className: de.commentHeaderLeft,
                children: [
                  r("a", {
                    href: S,
                    className: de.authorLink,
                    children: r(ln, {
                      name: e.displayName,
                      verified: e.isVerified,
                      hasNuksta: e.hasNuksta,
                      pin: e.pin,
                      size: u,
                    }),
                  }),
                  r("span", { className: de.commentTime, children: _ }),
                ],
              }),
              r(Fs, {
                trigger: r(bs, { size: w ? 14 : 16 }),
                items: k,
                position: "bottom-right",
                className: de.moreButton,
              }),
            ],
          }),
          (y || n) &&
            r("div", {
              className: de.commentText,
              children: [
                y &&
                  r(Re, {
                    children: [
                      r("a", {
                        href: `/@${y.username}`,
                        className: de.replyMention,
                        children: ["@", y.displayName],
                      }),
                      ", ",
                    ],
                  }),
                n && r(Bs, { text: n, spans: o }),
              ],
            }),
          xn(s).length > 0 &&
            r("div", {
              className: de.commentMedia,
              children: r(Pr, { media: xn(s) }),
            }),
          s
            .filter((E) => E.type === "audio")
            .map((E) => r(Hp, { src: E.url, duration: E.duration }, E.id)),
          r("div", {
            className: de.commentActions,
            children: [
              r("button", {
                className: de.replyButton,
                onClick: h,
                children: "Ответить",
              }),
              r("div", {
                className: de.reactionWrapper,
                children: r("button", {
                  className: `${de.commentAction} ${c ? de.liked : ""}`,
                  onClick: () => l(),
                  children: [
                    r($n, { size: 14, filled: c }),
                    r(Kt, { value: a }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ws({
  comment: e,
  onLike: t,
  onReaction: n,
  onLikeReply: o,
  onReactionReply: s,
  replyingTo: i,
  onStartReply: a,
  onCancelReply: c,
  onSubmitReply: u,
  onVoiceSend: l,
  onLoadReplies: h,
  onReport: d,
  onEdit: f,
  onDelete: m,
  isLoadingReplies: y = false,
  flashingCommentId: g,
  isWallOwner: p = false,
}) {
  e.id;
  const _ = i?.commentId === e.id;

  const v = {
    id: e.author.id,
    username: e.author.username,
    avatar: e.author.avatar ?? "",
    displayName: e.author.displayName,
    isVerified: e.author.isVerified,
    pin: e.author.pin,
  };

  const C = e.previewReplies ?? [];
  const T = g === e.id;
  const [w] = A({});
  const [k] = A({});
  const S = b(async () => {}, [e.id]);
  const E = b(async (N) => {}, []);
  const R = e.stats.replies > C.length;

  const P = [
    { type: "parent", data: e, author: v },
    ...C.map((N) => ({
      type: "reply",
      data: N,

      author: {
        id: N.author.id,
        username: N.author.username,
        avatar: N.author.avatar ?? "",
        displayName: N.author.displayName,
        isVerified: N.author.isVerified,
        pin: N.author.pin,
      },
    })),
  ];

  return r("div", {
    className: `${de.commentWrapper} ${T ? "flash-highlight" : ""}`,
    "data-comment-id": e.id,
    children: [
      P.map((N, U) => {
        const X = !(U === P.length - 1 && !_ && !R);
        const te = g === N.data.id;
        return r(
          "div",
          {
            "data-comment-id": N.data.id,
            className: `${de.threadItem} ${te ? "flash-highlight" : ""}`,
            children: [
              r("div", {
                className: de.avatarWrapper,
                children: [
                  r("a", {
                    href: `/@${N.author.username ?? N.author.id}`,
                    className: de.avatarLink,
                    children: r(ze, {
                      src: N.author.avatar,
                      alt: N.author.displayName,
                      size: "sm",
                    }),
                  }),
                  X && r("div", { className: de.threadLine }),
                ],
              }),
              r("div", {
                className: de.commentBody,
                children: r(hg, {
                  author: N.author,
                  commentId: N.data.id,
                  text: N.data.text,
                  spans: N.data.spans ?? [],
                  attachments: N.data.attachments ?? [],
                  replyTo: N.data.replyTo,
                  createdAt: N.data.createdAt,
                  reactionsCount: N.data.reactions.total,
                  isReacted: N.data.reactions.myReaction !== null,
                  selectedReaction: N.data.reactions.myReaction,
                  reactionCounts: N.type === "parent" ? w : k[N.data.id] ?? {},
                  size: "sm",
                  onLike: N.type === "parent" ? t : () => o(N.data.id),
                  onReaction:
                    N.type === "parent"
                      ? n
                        ? (J) => n(e.id, J)
                        : undefined
                      : s
                      ? (J) => s(N.data.id, J)
                      : undefined,
                  onReply: () =>
                    N.type === "parent"
                      ? a(
                          e.id,
                          e.author.username ?? e.author.id,
                          e.author.displayName,
                          e.author.id
                        )
                      : a(
                          e.id,
                          N.data.author.username ?? N.data.author.id,
                          N.data.author.displayName,
                          N.data.author.id,
                          N.data.id
                        ),
                  onReport: d,
                  onEdit: f,
                  onDelete: m,
                  onHoverReaction: N.type === "parent" ? S : () => E(N.data.id),
                  hideAvatar: true,
                  isWallOwner: p,
                }),
              }),
            ],
          },
          N.data.id
        );
      }),
      _ &&
        r("div", {
          className: de.threadItem,
          children: [
            r("div", {
              className: de.avatarWrapper,
              children: [
                r("div", { className: de.avatarPlaceholder }),
                R && r("div", { className: de.threadLine }),
              ],
            }),
            r("div", {
              className: de.commentBody,
              children: r(Vs, {
                placeholder: "Написать ответ...",
                replyTo: { id: i.commentId, authorName: i.displayName },
                onCancelReply: c,
                onSubmit: u,
                onVoiceSend: l,
                autoFocus: true,
              }),
            }),
          ],
        }),
      R &&
        !y &&
        r("button", {
          className: de.showMoreBtn,
          onClick: () => h(e.id),
          children: ["Показать ещё ", e.stats.replies - C.length, " ответов"],
        }),
    ],
  });
}
function fg({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: o = (s) => s,
}) {
  const s = I(null);
  const [i, a] = A(0);
  const [c, u] = A(0);
  const l = I(new Map());
  const h = I(new Map());
  const d = I(0);

  if (d.current !== e) {
    d.current = e;
    h.current.clear();
  }

  const f = b(
    (w) => {
      const k = o(w);
      return l.current.get(k) ?? t;
    },
    [o, t]
  );

  const m = b(
    (w) => {
      if (w === 0) {
        return 0;
      }
      const k = h.current.get(w);
      if (k !== undefined) {
        return k;
      }
      let S = 0;
      let E = 0;
      for (let R = w - 1; R >= 0; R--) {
        const P = h.current.get(R);
        if (P !== undefined) {
          S = R;
          E = P;
          break;
        }
      }
      for (let R = S; R < w; R++) {
        E += f(R);
      }
      h.current.set(w, E);
      return E;
    },
    [f]
  );

  const y = Te(() => (e === 0 ? 0 : m(e - 1) + f(e - 1)), [e, m, f]);

  const { startIndex: g, endIndex: p } = Te(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let w = 0;
    let k = e - 1;

    while (w < k) {
      const P = Math.floor((w + k) / 2);
      const N = m(P);
      const U = f(P);

      if (N + U < i) {
        w = P + 1;
      } else {
        k = P;
      }
    }

    const S = Math.max(0, w - n);
    let E = w;
    let R = m(w) - i;

    while (E < e && R < c + t * n) {
      R += f(E);
      E++;
    }

    E = Math.min(e - 1, E + n);
    return { startIndex: S, endIndex: E };
  }, [e, i, c, m, f, n, t]);

  const _ = Te(() => {
    if (e === 0) {
      return [];
    }
    const w = [];
    for (let k = g; k <= p; k++) {
      w.push({ index: k, key: o(k), start: m(k), size: f(k) });
    }
    return w;
  }, [g, p, o, m, f, e]);

  const v = b(
    (w, k) => {
      if (!w) {
        return;
      }
      const S = o(k);
      const E = w.getBoundingClientRect().height;
      if (E <= 0) {
        return;
      }
      const R = l.current.get(S);

      if (R === undefined || Math.abs(R - E) > 2) {
        l.current.set(S, E);
        h.current.clear();
      }
    },
    [o]
  );

  const C = b(() => {
    if (s.current) {
      a(s.current.scrollTop);
    }
  }, []);

  const T = b(
    (w) => {
      if (s.current) {
        s.current.removeEventListener("scroll", C);
      }

      s.current = w;

      if (w) {
        u(w.clientHeight);
        a(w.scrollTop);
        w.addEventListener("scroll", C, { passive: true });
      }
    },
    [C]
  );

  V(() => {
    if (!s.current) {
      return;
    }
    const w = new ResizeObserver((k) => {
      for (const S of k) {
        u(S.contentRect.height);
      }
    });
    w.observe(s.current);

    return () => w.disconnect();
  }, []);

  V(
    () => () => {
      if (s.current) {
        s.current.removeEventListener("scroll", C);
      }
    },
    [C]
  );

  return { containerRef: T, virtualItems: _, totalSize: y, measureElement: v };
}
const mg = "OSYFbJTc";
const pg = "BZs335wO";
const gg = "uHfvgHkC";
const vg = "_0mjuADLO";
const _g = "-irX9LBI";
const wg = "PkENmhoL";
const yg = "Ipy3h0nq";
const Cg = "_7EbOLXPm";
const Tg = "qUnBivge";
const Ng = "XcWtT84I";
const Eg = "I-b0vKPW";
const Rg = "quGM4O7I";
const bg = "EO684LVX";

const Be = {
  comments: mg,
  sortWrapper: pg,
  sortSelect: gg,
  commentsList: vg,
  commentItem: _g,
  empty: wg,
  loading: yg,
  loadMoreSentinel: Cg,
  virtualContainer: Tg,
  virtualContent: Ng,
  virtualItem: Eg,
  loadMoreSpinner: Rg,
  inputWrapper: bg,
};

const Sg = 120;
function kg({
  comments: e,
  hasMore: t,
  isLoadingMore: n,
  onLoadMore: o,
  replyingTo: s,
  flashingCommentId: i,
  loadingRepliesId: a,
  isWallOwner: c,
  onLikeComment: u,
  onReactionComment: l,
  onLikeReply: h,
  onReactionReply: d,
  onStartReply: f,
  onCancelReply: m,
  onSubmitReply: y,
  onVoiceSend: g,
  onLoadReplies: p,
  onReport: _,
  onEdit: v,
  onDelete: C,
}) {
  const T = I(false);

  const {
    containerRef: w,
    virtualItems: k,
    totalSize: S,
    measureElement: E,
  } = fg({
    itemCount: e.length,
    estimatedItemHeight: Sg,
    overscan: 3,
    getItemKey: (P) => e[P]?.id ?? P,
  });

  V(() => {
    if (!t || n || n || k.length === 0) {
      T.current = false;
      return;
    }
    const P = k[k.length - 1]?.index ?? 0;
    const N = e.length - 5;

    if (P >= N && !T.current) {
      T.current = true;
      o();
    }
  }, [k, e.length, t, n, o]);

  V(() => {
    if (!n) {
      T.current = false;
    }
  }, [n]);

  const R = b(
    (P, N) => {
      E(P, N);
    },
    [E]
  );
  return r("div", {
    ref: w,
    className: Be.virtualContainer,
    "data-comments-scroll": true,
    children: [
      r("div", {
        className: Be.virtualContent,
        style: { height: `${S}px` },
        children: k.map((P) => {
          const N = e[P.index];
          return N
            ? r(
                "div",
                {
                  ref: (U) => R(U, P.index),
                  className: Be.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${P.start}px)`,
                  },
                  children: r(Ws, {
                    comment: N,
                    onLike: () => u(N.id, N.reactions.myReaction),
                    onReaction: l,
                    onLikeReply: h,
                    onReactionReply: d,
                    replyingTo: s?.commentId === N.id ? s : null,
                    onStartReply: f,
                    onCancelReply: m,
                    onSubmitReply: y,
                    onVoiceSend: g,
                    onLoadReplies: p,
                    onReport: _,
                    onEdit: v,
                    onDelete: C,
                    isLoadingReplies: a === N.id,
                    flashingCommentId: i,
                    isWallOwner: c,
                  }),
                },
                P.key
              )
            : null;
        }),
      }),
      n &&
        r("div", {
          className: Be.loadMoreSpinner,
          children: r(vt, { size: "sm" }),
        }),
    ],
  });
}
const Ig = "DolcZKu1";
const Pg = "_1lo2seB9";
const Ag = "X0vaA15E";
const xg = "JmzJKMT2";
const Og = "p8fSWBtD";
const Lg = "TvBLZ6Xz";
const Mg = "ML3QZih-";
const $g = "F8sHrsZA";
const Dg = "DicPhJTL";
const Ug = "L6r5VJk9";
const Bg = "lHdqCdp-";
const Fg = "rfKDp2t8";

const He = {
  editCommentModal: Ig,
  form: Pg,
  header: Ag,
  title: xg,
  content: Og,
  editor: Lg,
  actions: Mg,
  mediaButtons: $g,
  mediaButton: Dg,
  submitGroup: Ug,
  charCount: Bg,
  error: Fg,
};

const Io = 2000; /* 2e3 */
function Hg({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: o } = Dn();

  const s = ue((w) => w.editComment);

  const i = Ne((w) => w.profile);

  const a = pt();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = Mn(t, n);

  const [f, m] = A(false);
  const y = Io - c.length;
  const g = y < 0;
  const p = c !== t;
  const _ = JSON.stringify(u) !== JSON.stringify(n);
  const v = p || _;

  const C = b(
    (w) => {
      d(w.emoji);
    },
    [d]
  );

  const T = b(async () => {
    if (!(!c.trim() || g || g || !v || g || !v || f)) {
      m(true);
      try {
        await s(e, c, u);
        o();
      } catch (w) {
        console.error("Failed to update comment:", w);
      } finally {
        m(false);
      }
    }
  }, [c, u, g, v, f, s, e, o]);

  return r(gt, {
    frameless: true,
    onClose: o,
    className: He.editCommentModal,
    children: r("div", {
      className: He.form,
      children: [
        r("div", {
          className: He.header,
          children: r("span", {
            className: He.title,
            children: "Редактирование комментария",
          }),
        }),
        r("div", {
          className: He.content,
          children: [
            r(ze, { src: i?.avatar ?? "", size: "sm" }),
            r(Un, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Комментарий...",
              maxLength: Io,
              autoFocus: true,
              className: He.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        r("div", {
          className: He.actions,
          children: [
            r("div", {
              className: He.mediaButtons,
              children:
                !a &&
                r(Ir, { onEmojiSelect: C, buttonClassName: He.mediaButton }),
            }),
            r("div", {
              className: He.submitGroup,
              children: [
                g &&
                  r("span", {
                    className: `${He.charCount} ${He.error}`,
                    children: y,
                  }),
                r(Me, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => o(),
                  children: "Отмена",
                }),
                r(Me, {
                  size: "md",
                  disabled: !c.trim() || g || g || !v || g || !v || f,
                  onClick: T,
                  children: f ? "Сохранение..." : "Сохранить",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Vg({
  comments: e,
  isLoading: t,
  isLoadingMore: n,
  hasMore: o,
  sort: s,
  onSortChange: i,
  onLikeComment: a,
  onReactionComment: c,
  onAddComment: u,
  onVoiceSend: l,
  onLoadMore: h,
  isWallOwner: d = false,
  variant: f = "modal",
  hideInput: m = false,
}) {
  e.length;
  const g = pt() && f === "modal";
  const [p, _] = A(null);
  const [v, C] = A(null);
  const [T, w] = A(null);
  const [k, S] = A(null);
  const E = I(null);
  const { openModal: R } = Dn();

  const P = ue((M) => M.highlightedCommentId);

  const N = ue((M) => M.clearHighlightedComment);

  const U = ue((M) => M.loadReplies);

  const O = ue((M) => M.deleteComment);

  const X = ue((M) => M.toggleCommentReaction);

  V(() => {
    if (!o || n) {
      return;
    }

    const M = new IntersectionObserver(
      (B) => {
        if (B[0].isIntersecting) {
          h();
        }
      },
      { rootMargin: "200px" }
    );

    const E_current = E.current;

    if (E_current) {
      M.observe(E_current);
    }

    return () => {
      if (E_current) {
        M.unobserve(E_current);
      }
    };
  }, [o, n, h]);

  V(() => {
    if (!P) {
      return;
    }
    const M =
      document.querySelector("[data-comments-scroll]") ||
      document.querySelector("[data-comments-modal]");
    if (M) {
      M.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const B = document.querySelector("[data-comments-section]");

      if (B) {
        B.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    const x = window.setTimeout(() => {
      C(P);
      N();
      const B = window.setTimeout(() => {
        C(null);
      }, 600);
      return () => clearTimeout(B);
    }, 300);
    return () => clearTimeout(x);
  }, [P, N]);

  const te = async (M, x, B) => {
    if (p) {
      await u(
        M,
        x,
        p.commentId,
        p.userId,
        { id: p.userId, username: p.username, displayName: p.displayName },
        B
      );

      _(null);
    }
  };

  const J = (M, x, B, $, z) => {
    _({ commentId: M, username: x, displayName: B, userId: $, replyId: z });
  };

  const ae = () => {
    _(null);
  };

  const ce = b(
    (M) => {
      for (const x of e) {
        const B = x.previewReplies?.find(($) => $.id === M);
        if (B) {
          X(M, (B.reactions.myReaction === "love", "love"));
          return;
        }
      }
    },
    [e, X]
  );

  const G = b(
    (M, x) => {
      X(M, x);
    },
    [X]
  );

  const ee = b(
    async (M) => {
      w(M);
      try {
        await U(M);
      } finally {
        w(null);
      }
    },
    [U]
  );

  const D = b((M) => {
    S(M);
  }, []);

  const W = b(
    (M) => {
      let x = "";
      let B = [];
      for (const $ of e) {
        if ($.id === M) {
          x = $.text;
          B = $.spans ?? [];
          break;
        }
        const z = $.previewReplies?.find((j) => j.id === M);
        if (z) {
          x = z.text;
          B = z.spans ?? [];
          break;
        }
      }
      R(r(Hg, { commentId: M, initialText: x, initialSpans: B }));
    },
    [e, R]
  );

  const Z = b(
    (M) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        O(M);
      }
    },
    [O]
  );

  return r("div", {
    className: Be.comments,
    children: [
      r("div", {
        className: Be.sortWrapper,
        children: r("select", {
          value: s,
          onChange: (M) => i(M.target.value),
          className: Be.sortSelect,
          children: [
            r("option", { value: "new", children: "Новые" }),
            r("option", { value: "old", children: "Старые" }),
            r("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? r("div", { className: Be.loading, children: r(vt, {}) })
        : e.length === 0
        ? r("div", { className: Be.empty, children: "Нет комментариев" })
        : g
        ? r(kg, {
            comments: e,
            hasMore: o,
            isLoadingMore: n,
            onLoadMore: h,
            replyingTo: p,
            flashingCommentId: v,
            loadingRepliesId: T,
            isWallOwner: d,
            onLikeComment: a,
            onReactionComment: c,
            onLikeReply: ce,
            onReactionReply: G,
            onStartReply: J,
            onCancelReply: ae,
            onSubmitReply: te,
            onVoiceSend: l,
            onLoadReplies: ee,
            onReport: D,
            onEdit: W,
            onDelete: Z,
          })
        : r("div", {
            className: Be.commentsList,
            children: [
              e.map((M) =>
                r(
                  "div",
                  {
                    className: Be.commentItem,
                    children: r(Ws, {
                      comment: M,
                      onLike: () => a(M.id, M.reactions.myReaction),
                      onReaction: c,
                      onLikeReply: ce,
                      onReactionReply: G,
                      replyingTo: p?.commentId === M.id ? p : null,
                      onStartReply: J,
                      onCancelReply: ae,
                      onSubmitReply: te,
                      onVoiceSend: l,
                      onLoadReplies: ee,
                      onReport: D,
                      onEdit: W,
                      onDelete: Z,
                      isLoadingReplies: T === M.id,
                      flashingCommentId: v,
                      isWallOwner: d,
                    }),
                  },
                  M.id
                )
              ),
              o &&
                r("div", {
                  ref: E,
                  className: Be.loadMoreSentinel,
                  children: n && r(vt, { size: "sm" }),
                }),
            ],
          }),
      !m &&
        r("div", {
          className: Be.inputWrapper,
          children: r(Vs, {
            onSubmit: (M, x, B) => u(M, x, undefined, undefined, undefined, B),
            onVoiceSend: l,
          }),
        }),
      k &&
        r(Us, { targetType: "comment", targetId: k, onClose: () => S(null) }),
    ],
  });
}
function Wg(e) {
  return {
    id: e.id,
    username: e.username ?? "",
    displayName: e.displayName,
    avatar: e.avatar ?? "",
    isVerified: e.isVerified,
    hasNuksta: e.hasNuksta ?? false,
    pin: e.pin ?? null,
  };
}
function xn(e) {
  return e
    .filter(
      (t) =>
        t.type === "image" ||
        t.type === "video" ||
        (t.type === "media" && "media" in t)
    )
    .map((t) => (t.type === "media" && "media" in t ? t.media : t));
}
function jg(e) {
  return e.find((t) => t.type === "poll");
}
const zg = 300;
const qg = 500;

const Xg = ns(
  ({
    post: t,
    variant: n = "feed",
    className: o,
    isOnOwnProfile: s = false,
    isPinned: i = false,
    isHighlighted: a = false,
    onEdit: c,
    onPin: u,
    onDelete: l,
  }) => {
    const h = n === "feed";
    const d = pt();
    const { openModal: f, closeModal: m } = Dn();

    const y = ue((L) => L.deletePost);

    const g = ue((L) => L.updatePostReaction);

    const p = ue((L) => L.updatePollVote);

    const _ = ue((L) => L.updatePollData);

    const v = ue((L) => L.setCurrentPost);

    const C = ue((L) => L.posts.find((K) => K.id === t.id));

    const T = Ne((L) => L.profile);

    const w = ft((L) =>
      h && T?.id !== t.author.id ? L.statuses[t.author.id] : undefined
    );

    const k = b(async () => {
      const L = t.author.id;
      ft.getState().setStatus(L, true);
      try {
        await hr.followUser(L);
      } catch {
        ft.getState().setStatus(L, false);
      }
    }, [t.author.id]);

    const S = b(async () => {
      const L = t.author.id;
      ft.getState().setStatus(L, false);
      try {
        await hr.unfollowUser(L);
      } catch {
        ft.getState().setStatus(L, true);
      }
    }, [t.author.id]);

    const E = b(() => {
      if (w !== undefined) {
        if (w) {
          f(
            r(Ph, {
              displayName: t.author.displayName,
              onConfirm: S,
              onClose: m,
            })
          );
        } else {
          k();
        }
      }
    }, [w, t.author.displayName, k, S, f, m]);

    const R = I(null);
    const P = I(null);
    const N = I(null);
    const [U, O] = A(zg);
    const [X, te] = A(0);
    const J = X > U;
    V(
      () => () => {
        if (N.current) {
          cancelAnimationFrame(N.current);
          N.current = null;
        }
      },
      []
    );

    const ae = b(
      (L) => {
        if (L && h) {
          N.current && cancelAnimationFrame(N.current);

          N.current = requestAnimationFrame(() => {
            N.current = null;
            te(L.scrollHeight);
          });
        }

        if (P) {
          P.current = L;
        }
      },
      [h]
    );

    const ce = b((L) => {
      L.stopPropagation();

      O((K) => K + qg);
    }, []);

    Pa(t.id, R);
    const G = T?.id === t.author.id;
    const ee = t.reactions.myReaction !== null;
    const D = t.reactions.total;

    const W = b(async () => {
      const L = t.reactions.myReaction !== null;
      const K = L ? -1 : 1;
      g(t.id, L || "love", K);
      try {
        if (L) {
          await Le.unlikePost(t.id);
        } else {
          await Le.likePost(t.id);
        }
      } catch (me) {
        g(t.id, L ? "love" : null, -K);
        console.error("Failed to toggle like:", me);
      }
    }, [t.id, t.reactions.myReaction, g]);

    const Z = I(null);
    const M = I(0);

    const x = b((L) => {
      Z.current = L.target;
    }, []);

    const B = b(() => {
      if (!ee) {
        W();
      }
    }, [ee, W]);

    const $ = b(() => {
      v(C ?? t);
      const K = t.author.username ?? t.author.id;
      $(`/@${K}/post/${t.id}`);
    }, [t, C, v]);

    const z = b(
      (L) => {
        const L_target = L.target;
        if (
          L_target.closest("button") ||
          L_target.closest("a") ||
          L_target.closest("a") ||
          L_target.closest("video") ||
          L_target.closest("a") ||
          L_target.closest("video") ||
          L_target.closest("img")
        ) {
          return;
        }
        if (d) {
          const Ye = Date.now();
          if (Ye - M.current < 300) {
            M.current = 0;
            B();
            return;
          }
          M.current = Ye;
          return;
        }
        if (Z.current !== L_target) {
          Z.current = null;
          return;
        }
        Z.current = null;
        const me = window.getSelection();

        if (!me || me.toString().length <= 0) {
          $();
        }
      },
      [d, B, $]
    );

    const j = b(
      (L) => {
        const K = t.author.username ?? t.author.id;
        const me = `${window.location.origin}/@${K}/post/${L}`;
        navigator.clipboard.writeText(me);
        Ze.success("Ссылка скопирована");
      },
      [t.author.username, t.author.id]
    );

    const Y = b(
      (L) => {
        f(r(Us, { targetType: "post", targetId: L, onClose: m }));
      },
      [f, m]
    );

    const re = b(
      (L) => {
        f(
          r(_h, {
            postId: t.id,
            initialText: t.text ?? "",
            initialSpans: t.spans ?? [],
          })
        );
      },
      [f, t.id, t.text, t.spans]
    );

    const ie = b(
      async (L) => {
        if (confirm("Вы уверены, что хотите удалить этот пост?")) {
          try {
            await y(L);
            l?.(L);
          } catch (K) {
            console.error("Failed to delete post:", K);
          }
        }
      },
      [y, l]
    );

    const fe = b(() => {
      if (d) {
        f(r(Rh, { postId: t.id, onClose: m }));
      } else {
        const L = t.author.username ?? t.author.id;
        $(`/@${L}/post/${t.id}`);
      }
    }, [t.author.username, t.author.id, t.id, d, f, m]);

    const oe = b(() => {
      if (!G) {
        f(r(ah, { post: t, onClose: m }));
      }
    }, [f, m, t, G]);

    const qe = Te(() => Wg(t.author), [t.author]);

    const Xe = Te(() => xn(t.attachments), [t.attachments]);

    const Ee = Te(() => jg(t.attachments), [t.attachments]);

    const at = b(
      async (L) => {
        const K = Ee?.myVote ?? null;
        p(t.id, L, K);
        try {
          const me = await Le.votePoll(t.id, [L]);
          if (me) {
            _(t.id, me);
            return me;
          }
        } catch (me) {
          console.error("[Poll] Failed to vote:", me);

          if (K) {
            p(t.id, K, L);
          }
        }
        return null;
      },
      [t.id, Ee?.myVote, p, _]
    );

    const ve = b(
      async (L) => {
        try {
          const K = await Le.votePoll(t.id, L);
          if (K) {
            _(t.id, K);
            return K;
          }
        } catch (K) {
          console.error("[Poll] Failed to vote multiple:", K);
        }
        return null;
      },
      [t.id, _]
    );

    const Q = r("div", {
      className: `${Se.postInner} ${h ? Se.isFeed : ""} ${o || ""}`,
      children: [
        h &&
          r("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            children: r(ze, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: w,
              onFollowBadgeClick: E,
            }),
          }),
        r("div", {
          className: Se.postContent,
          children: [
            r(Pf, {
              author: qe,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !h,
              isOnOwnProfile: s,
              isPinned: i,
              onReport: Y,
              onEdit: c ?? re,
              onDelete: ie,
              onPin: u,
              onCopyLink: j,
            }),
            r("div", {
              className: Se.postBody,
              children: [
                t.text &&
                  r("div", {
                    className: Se.textWrapper,
                    children: [
                      r("div", {
                        ref: ae,
                        className: `${Se.text} ${J ? Se.collapsed : ""}`,
                        style: h && J ? { maxHeight: `${U}px` } : undefined,
                        children: r(Bs, {
                          text: t.text,
                          spans: t.spans ?? [],
                        }),
                      }),
                      h &&
                        J &&
                        r("button", {
                          type: "button",
                          className: Se.expandButton,
                          onClick: ce,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                Xe.length > 0 && r(Pr, { media: Xe, isFeed: h }),
                Ee &&
                  r(hf, {
                    title: Ee.question,
                    options: Ee.options.map((L) => ({
                      id: L.id,
                      text: L.text,
                      votes: L.votes ?? 0,
                    })),
                    totalVotes: Ee.totalVotes ?? 0,
                    voted:
                      (Ee.myVotes ?? []).length > 0 ||
                      (Ee.myVote !== undefined && Ee.myVote !== null),
                    selectedOptionId: Ee.myVote,
                    selectedOptionIds: Ee.myVotes ?? [],
                    multipleChoice: Ee.multipleChoice ?? false,
                    onVote: at,
                    onVoteMultiple: ve,
                    disabled: Ee.id.startsWith("temp-"),
                  }),
                t.originalPost && r(Bm, { originalPost: t.originalPost }),
                r(ym, {
                  liked: ee,
                  reposted: false,
                  likesCount: D,
                  repostsCount: t.stats.reposts,
                  commentsCount: t.stats.comments,
                  viewsCount: t.stats.views,
                  dominantEmoji: t.dominantEmoji,
                  onLike: W,
                  onRepost: oe,
                  onComment: fe,
                  disableRepost: G,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return h
      ? r("article", {
          ref: R,
          className: `${Se.post} ${a ? "flash-highlight" : ""}`,
          onMouseDown: x,
          onClick: z,
          children: Q,
        })
      : r("div", { ref: R, children: Q });
  },
  (e, t) =>
    e.post.id === t.post.id &&
    e.post.text === t.post.text &&
    e.post.reactions.total === t.post.reactions.total &&
    e.post.reactions.myReaction === t.post.reactions.myReaction &&
    e.post.stats.comments === t.post.stats.comments &&
    e.post.stats.reposts === t.post.stats.reposts &&
    e.post.attachments === t.post.attachments &&
    e.variant === t.variant &&
    e.isOnOwnProfile === t.isOnOwnProfile &&
    e.isPinned === t.isPinned &&
    e.isHighlighted === t.isHighlighted
);

const Yg = "g6-1VZON";
const Gg = "lynW5Wa4";
const Zg = "T0fnHo-a";
const Kg = "rjatUzSP";
const Qg = "QJXel6jH";
const Jg = "M0L3TUQK";
const e0 = "uaNtVNYe";
const t0 = "h2cCDI2R";
const n0 = "I-2aZIQb";
const r0 = "OiCpxOxo";
const o0 = "_68znS2mA";

const We = {
  container: Yg,
  clearAllButton: Gg,
  toastList: Zg,
  toast: Kg,
  toastLeft: Qg,
  toastData: Jg,
  title: e0,
  message: t0,
  dragging: n0,
  closeButton: r0,
  belowTabs: o0,
};

const s0 = "InmPF5d0";
const i0 = "-yE9w2BE";
const a0 = "-gCyC6KA";
const c0 = "YQDdKE40";
const yn = { badge: s0, red: i0, green: a0, blue: c0 };
function l0({ type: e }) {
  const t =
    e === "like"
      ? yn.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? yn.green
      : yn.blue;
  return r("div", {
    className: `${yn.badge} ${t}`,
    children: [
      e === "follow" && r(Is, { size: 12 }),
      ["wall_post", "reply"].includes(e) && r(Sr, { size: 12, filled: true }),
      e === "like" && r($n, { size: 12, filled: true }),
      e === "repost" && r(In, { size: 12 }),
    ],
  });
}
const u0 = Ht(null);
function d0({ children: e }) {
  const [t, n] = A([]);

  const o = b((c) => {
    const u = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    n((l) => [
      ...l,
      {
        id: u,
        message: c.message,
        notificationType: c.notificationType || "follow",
        actorName: c.actorName,
        actorUsername: c.actorUsername,
        actorAvatar: c.actorAvatar,
        clickUrl: c.clickUrl,
        apiType: c.apiType,
        entityId: c.entityId,
        parentEntityId: c.parentEntityId,
      },
    ]);
  }, []);

  const s = b((c) => {
    n((u) => u.filter((l) => l.id !== c));
  }, []);

  const i = b(() => {
    n([]);
  }, []);

  const a = va();

  V(() => {
    if (a) {
      const c = m0(a.type);

      o({
        message: a.message,
        notificationType: c,
        actorName: a.actorName,
        actorUsername: a.actorUsername,
        actorAvatar: a.actorAvatar,
        clickUrl: a.clickUrl,
        apiType: a.type,
        entityId: a.entityId,
        parentEntityId: a.parentEntityId,
      });

      br.setState({ lastSseToast: null });
    }
  }, [a, o]);

  return r(u0.Provider, {
    value: { toasts: t, addToast: o, removeToast: s, clearAll: i },
    children: [e, r(h0, { toasts: t, onRemove: s, onClearAll: i })],
  });
}
function h0({ toasts: e, onRemove: t, onClearAll: n }) {
  const [o, s] = A(false);

  const i =
    typeof window !== "undefined" &&
    (window.location.pathname === "/" || window.location.pathname === "");

  if (e.length === 0) {
    return null;
  }
  const a = e.slice(-4);

  const c = () => {
    s(true);

    setTimeout(() => {
      n();
      s(false);
    }, 300);
  };

  return r("div", {
    className: `${We.container} ${i ? We.belowTabs : ""}`,
    children: [
      r("div", {
        className: `${We.toastList} ${o ? We.clearing : ""}`,
        children: a.map((u, l) =>
          r(
            g0,
            {
              toast: u,
              onRemove: t,
              clearingDelay: o ? l * 50 : 0,
              isClearing: o,
            },
            u.id
          )
        ),
      }),
      e.length > 1 &&
        r(Me, {
          className: We.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const f0 = 80;
function m0(e) {
  return (
    {
      follow: "follow",
      follow_request: "follow",
      follow_accepted: "follow",
      post_reaction: "like",
      post_comment: "reply",
      post_repost: "repost",
      comment_reaction: "like",
      comment_reply: "reply",
      post_mention: "reply",
      comment_mention: "reply",
      wall_post: "reply",
    }[e] || "follow"
  );
}
function p0(e) {
  const {
    apiType: t,
    entityId: n,
    parentEntityId: o,
    actorUsername: s,
    clickUrl: i,
  } = e;

  const a = ["post_reaction", "post_repost", "post_mention", "wall_post"];

  const c = [
    "post_comment",
    "comment_reaction",
    "comment_reply",
    "comment_mention",
  ];

  if (t && n && s) {
    if (a.includes(t)) {
      return `/@${s}/post/${n}`;
    }
    if (c.includes(t)) {
      return o ? `/@${s}/post/${o}?comment=${n}` : `/@${s}/post/${n}`;
    }
  }
  return t && ["follow", "follow_request", "follow_accepted"].includes(t) && s
    ? `/@${s}`
    : i || "/notifications";
}
function g0({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: o = false,
}) {
  const s = I(null);
  const [i, a] = A(0);
  const [c, u] = A(false);
  const [l, h] = A(false);
  const d = I(0);
  const f = I(false);

  const m = (w) => {
    d.current = w.clientX;
    f.current = false;
    u(true);
  };

  const y = b(
    (w) => {
      if (!c) {
        return;
      }
      const k = w.clientX - d.current;

      if (Math.abs(k) > 5) {
        f.current = true;
      }

      a(k);
    },
    [c]
  );

  const g = b(() => {
    if (c) {
      u(false);

      if (Math.abs(i) > f0) {
        h(true);
        a(i > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!f.current) {
          const w = p0(e);

          if (w) {
            $(w);
            t(e.id);
          }
        }
      }
    }
  }, [c, i, t, e]);

  V(() => {
    if (c) {
      document.addEventListener("mousemove", y);
      document.addEventListener("mouseup", g);

      return () => {
        document.removeEventListener("mousemove", y);
        document.removeEventListener("mouseup", g);
      };
    }
  }, [c, y, g]);

  const p = (w) => {
    d.current = w.touches[0].clientX;
    u(true);
  };

  const _ = (w) => {
    if (!c) {
      return;
    }
    const k = w.touches[0].clientX - d.current;
    a(k);
  };

  const v = () => {
    g();
  };

  const C = l || o ? 0 : Math.max(0, 1 - Math.abs(i) / 200);
  const T = o ? 400 : i;
  return r("div", {
    ref: s,
    className: `${We.toast} ${c ? We.dragging : ""}`,
    style: {
      transform: `translateX(${T}px)`,
      opacity: C,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: m,
    onTouchStart: p,
    onTouchMove: _,
    onTouchEnd: v,
    children: [
      r("div", {
        className: We.toastLeft,
        children: [
          r(ze, {
            src: e.actorAvatar || "",
            badge: r(l0, { type: e.notificationType }),
          }),
          r("div", {
            className: We.toastData,
            children: [
              e.actorName &&
                r("div", {
                  className: We.title,
                  children: r(ln, { name: e.actorName }),
                }),
              r("p", { className: We.message, children: e.message }),
            ],
          }),
        ],
      }),
      r("button", {
        className: We.closeButton,
        onClick: (w) => {
          w.stopPropagation();
          t(e.id);
        },
        onMouseDown: (w) => w.stopPropagation(),
        onTouchStart: (w) => w.stopPropagation(),
        children: r(st, { size: 16 }),
      }),
    ],
  });
}
const v0 = "Ud6qvRRd";
const _0 = "kzTK4YgB";
const w0 = "a7Cxtsok";
const y0 = "D1RDF-pF";
const C0 = "wPhOb3DB";
const T0 = "rrrryD13";
const N0 = "pO3FId5P";
const E0 = "Y-gzFyZu";
const R0 = "Bnd7yPWS";
const b0 = "vVObi6FX";
const S0 = "erZ4kzKX";
const k0 = "nyzroaD5";

const At = {
  container: v0,
  toast: _0,
  slideUp: w0,
  leaving: y0,
  fadeOut: C0,
  info: T0,
  icon: N0,
  message: E0,
  closeButton: R0,
  success: b0,
  warning: S0,
  error: k0,
};

const I0 = { success: Ua, error: Oa, warning: Fa, info: Cs };
function P0({ id: e, type: t, message: n, onRemove: o }) {
  const [s, i] = A(false);
  const I0_t = I0[t];

  const c = b(() => {
    i(true);

    setTimeout(() => {
      o(e);
    }, 300);
  }, [e, o]);

  return r("div", {
    className: `${At.toast} ${At[t]} ${s ? At.leaving : ""}`,
    children: [
      r("span", { className: At.icon, children: r(I0_t, { size: 20 }) }),
      r("span", { className: At.message, children: n }),
      r("button", {
        className: At.closeButton,
        onClick: c,
        children: r(st, { size: 14 }),
      }),
    ],
  });
}
function A0() {
  const e = Ut((n) => n.toasts);

  const t = Ut((n) => n.removeToast);

  return (
    e.length === 0 ||
    r("div", {
      className: At.container,
      children: e.map((n) =>
        r(P0, { id: n.id, type: n.type, message: n.message, onRemove: t }, n.id)
      ),
    })
  );
}
const x0 = "bDtnMOtP";
const O0 = "NCty1Mw6";
const L0 = "DPhGAlZS";
const M0 = "Ea-iW9dx";
const Cn = { tabs: x0, indicator: O0, button: L0, active: M0 };
function $0({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: o,
  className: s = "",
}) {
  const [i, a] = A(t);
  const c = n !== undefined ? n : i;
  const [u, l] = A({});
  const h = I([]);
  const d = I(null);

  const f = b(() => {
    const p = h.current[c];
    if (p) {
      const p_parentElement = p.parentElement;
      const v = p_parentElement
        ? parseFloat(getComputedStyle(p_parentElement).paddingLeft)
        : 0;
      l({
        width: p.offsetWidth,
        transform: `translateX(${p.offsetLeft - v}px)`,
      });
    }
  }, [c]);

  V(() => {
    f();
  }, [f]);

  V(() => {
    const d_current = d.current;
    if (!d_current) {
      return;
    }
    const _ = new ResizeObserver(() => {
      f();
    });
    _.observe(d_current);

    return () => {
      _.disconnect();
    };
  }, [f]);

  const m = (p) => {
    if (n === undefined) {
      a(p);
    }

    o?.(p, e[p]);
  };

  const y = (p) => (typeof p == "string" ? p : p.label);

  const g = (p, _) => (typeof p == "string" ? `${_}` : p.id);

  return r("div", {
    ref: d,
    className: `${Cn.tabs} ${s}`,
    children: [
      r("div", { className: Cn.indicator, style: u }),
      e.map((p, _) =>
        r(
          "button",
          {
            ref: (v) => {
              h.current[_] = v;
            },
            onClick: () => m(_),
            className: `${Cn.button} ${c === _ ? Cn.active : ""}`,
            children: y(p),
          },
          g(p, _)
        )
      ),
    ],
  });
}
function D0(e) {
  const t = b(() => {
    const s = window.innerWidth * 0.9;
    const i = window.innerHeight * 0.9;
    return e.map((a) => {
      const c = a.width / a.height;
      const u = Math.min(s, a.width);
      const l = Math.min(i, a.height);

      let { width, height } = a;

      if (width > u) {
        width = u;
        height = width / c;
      }

      if (height > l) {
        height = l;
        width = height * c;
      }

      return { width: width, height: height };
    });
  }, [e]);

  const [n, o] = A(t);

  V(() => {
    const s = () => o(t());
    window.addEventListener("resize", s);

    return () => window.removeEventListener("resize", s);
  }, [t]);

  return n;
}
function U0() {
  V(() => {
    const e = window.innerWidth - document.documentElement.clientWidth;
    const document_documentElement = document.documentElement;
    const n = document_documentElement.style.overflow;
    document_documentElement.style.overflow = "hidden";

    if (e > 0) {
      document_documentElement.style.setProperty(
        "--scrollbar-compensation",
        `${e}px`
      );
    }

    return () => {
      document_documentElement.style.overflow = n;
      document_documentElement.style.setProperty(
        "--scrollbar-compensation",
        "0px"
      );
    };
  }, []);
}
function B0({ onClose: e, onPrev: t, onNext: n }) {
  V(() => {
    const o = (s) => {
      switch (s.key) {
        case "Escape": {
          s.preventDefault();
          s.stopPropagation();
          e();
          break;
        }
        case "ArrowLeft": {
          s.preventDefault();
          s.stopPropagation();
          t();
          break;
        }
        case "ArrowRight": {
          s.preventDefault();
          s.stopPropagation();
          n();
          break;
        }
      }
    };
    window.addEventListener("keydown", o, true);

    return () => window.removeEventListener("keydown", o, true);
  }, [e, t, n]);
}
function F0({ initialIndex: e, total: t }) {
  const [n, o] = A(e);
  const [s, i] = A(false);
  const a = I(null);

  const c = b(() => {
    if (a.current) {
      clearTimeout(a.current);
      a.current = null;
      i(false);
    }
  }, []);

  const u = b(
    (d) => {
      if (d !== n && d >= 0 && d >= 0 && d < t) {
        if (d >= 0) {
          if (d < t) {
            c();
            i(true);
            o(d);

            a.current = window.setTimeout(() => {
              a.current = null;
              i(false);
            }, 500);
          }
        }
      }
    },
    [n, t, c]
  );

  const l = b(() => {
    if (n > 0) {
      u(n - 1);
    }
  }, [n, u]);

  const h = b(() => {
    if (n < t - 1) {
      u(n + 1);
    }
  }, [n, t, u]);

  return {
    currentIndex: n,
    setCurrentIndex: o,
    isAnimating: s,
    setIsAnimating: i,
    cancelAnimation: c,
    goToIndex: u,
    goToPrev: l,
    goToNext: h,
  };
}
const Qn = 150;
const H0 = 0.3;
function Po(e, t) {
  const n = e.clientX - t.clientX;
  const o = e.clientY - t.clientY;
  return Math.sqrt(n * n + o * o);
}
function V0({
  currentIndex: e,
  imagesCount: t,
  imageSizes: n,
  isMobile: o,
  isAnimating: s,
  setIsAnimating: i,
  cancelAnimation: a,
  onIndexChange: c,
  onClose: u,
}) {
  const [l, h] = A(0);
  const [d, f] = A(0);
  const [m, y] = A(false);
  const [g, p] = A(1);
  const [_, v] = A(null);
  const [C, T] = A(1);
  const [w, k] = A(0);
  const [S, E] = A(0);
  const [R, P] = A(false);
  const N = I(1);
  const U = I({ x: 0, y: 0 });
  const O = I(false);
  const X = I(false);
  const te = I(0);
  const J = I(0);
  const ae = I(0);
  const ce = I(1);
  const G = I({ x: 0, y: 0 });
  const ee = I({ x: 0, y: 0 });
  const D = I({ x: 0, y: 0 });
  const W = I(null);
  const Z = I(false);
  const M = I(null);
  const x = I(null);
  const B = I(false);

  const $ = b((Q) => {
    N.current = Q;
    T(Q);
  }, []);

  const z = b((Q, L) => {
    U.current = { x: Q, y: L };
    k(Q);
    E(L);
  }, []);

  const j = b(() => {
    P(true);
    $(1);
    z(0, 0);

    setTimeout(() => P(false), 300);
  }, [$, z]);

  V(() => {
    N.current = 1;
    U.current = { x: 0, y: 0 };
    T(1);
    k(0);
    E(0);
    P(false);
  }, [e]);

  V(
    () => () => {
      if (M.current) {
        clearTimeout(M.current);
        M.current = null;
      }
    },
    []
  );

  const Y = b(
    (Q) => {
      let L = Q;

      if ((e === 0 && L > 0) || (e === t - 1 && L < 0)) {
        L *= H0;
      }

      return L;
    },
    [e, t]
  );

  const re = b(
    () =>
      Math.abs(d) > Qn
        ? (u(o), true)
        : (i(true),
          f(0),
          p(1),
          (M.current = window.setTimeout(() => {
            M.current = null;
            i(false);
          }, 300)),
          false),
    [d, o, u, i]
  );

  const ie = b(
    (Q) => {
      if (!o && t > 1) {
        if (t > 1) {
          a();
          M.current && (clearTimeout(M.current), (M.current = null));
          x.current !== null && (c(x.current), (x.current = null));
          i(false);
          v(null);
          h(0);
          y(true);
          Z.current = false;
          D.current = { x: Q.clientX, y: Q.clientY };
          W.current = null;
          Q.preventDefault();
        }
      }
    },
    [o, t, a, c, i]
  );

  const fe = b(
    (Q) => {
      if (!m || o) {
        return;
      }
      const L = Q.clientX - D.current.x;
      const K = Q.clientY - D.current.y;

      if (!W.current && (Math.abs(L) > 10 || Math.abs(K) > 10)) {
        W.current = Math.abs(L) > Math.abs(K) ? "x" : "y";
        Z.current = true;
      }

      if (W.current === "x") {
        h(Y(L));
      } else if (W.current === "y") {
        f(K);
        const me = Math.min(Math.abs(K) / Qn, 1);
        p(1 - me * 0.5);
      }
    },
    [m, o, Y]
  );

  const oe = b(() => {
    if (!(!m || o)) {
      y(false);

      if (W.current === "x") {
        const L = x.current ?? e;
        let K = L;

        if (l < -80 && L < t - 1) {
          K = L + 1;
        } else if (l > 80 && L > 0) {
          K = L - 1;
        }

        if (K !== L) {
          const me = n[K]?.width || 0;
          const Ye = n[L]?.width || 0;
          const Wt = K > L ? -Ye : me;
          i(true);
          v(K);
          h(Wt);
          x.current = K;

          M.current = window.setTimeout(() => {
            M.current = null;
            i(false);
            v(null);
            h(0);
            x.current = null;
            c(K);
          }, 500);
        } else {
          i(true);
          h(0);

          M.current = window.setTimeout(() => {
            M.current = null;
            i(false);
          }, 300);
        }
      } else {
        if (W.current === "y") {
          re();
        }
      }

      W.current = null;
    }
  }, [m, o, e, l, t, n, re, c, i]);

  const qe = b(
    (Q) => {
      if (!o) {
        return;
      }
      J.current = Math.max(J.current, Q.touches.length);

      if (Q.touches.length === 2) {
        O.current = true;
        X.current = true;
        ae.current = Po(Q.touches[0], Q.touches[1]);
        ce.current = N.current;
        y(false);
        W.current = null;
        h(0);
        f(0);
        p(1);
        P(false);
        return;
      }

      if (N.current > 1) {
        J.current = 1;
        G.current = { x: Q.touches[0].clientX, y: Q.touches[0].clientY };
        ee.current = { ...U.current };
        y(true);
        Z.current = false;
        W.current = null;
        P(false);
        const Q_target_1 = Q.target;
        B.current =
          Q_target_1.tagName === "IMG" &&
          Q_target_1.hasAttribute("data-viewer-image");
        return;
      }
      J.current = 1;
      X.current = false;
      a();

      if (M.current) {
        clearTimeout(M.current);
        M.current = null;
      }

      i(false);
      h(0);
      const Q_target = Q.target;
      B.current =
        Q_target.tagName === "IMG" &&
        Q_target.hasAttribute("data-viewer-image");
      D.current = { x: Q.touches[0].clientX, y: Q.touches[0].clientY };
      W.current = null;
      y(true);
    },
    [o, a, i]
  );

  const Xe = b(
    (Q) => {
      if (!o) {
        return;
      }
      J.current = Math.max(J.current, Q.touches.length);

      if (O.current && Q.touches.length >= 2) {
        const me = Po(Q.touches[0], Q.touches[1]);
        const Ye = ce.current * (me / ae.current);
        $(Math.min(Math.max(Ye, 0.5), 5));
        return;
      }

      if (N.current > 1 && m && !O.current) {
        const me = Q.touches[0].clientX - G.current.x;
        const Ye = Q.touches[0].clientY - G.current.y;

        if (Math.abs(me) > 5 || Math.abs(Ye) > 5) {
          Z.current = true;
        }

        z(ee.current.x + me, ee.current.y + Ye);
        return;
      }
      if (!m) {
        return;
      }
      const L = Q.touches[0].clientX - D.current.x;
      const K = Q.touches[0].clientY - D.current.y;

      if (!W.current && (Math.abs(L) > 10 || Math.abs(K) > 10)) {
        W.current = Math.abs(L) > Math.abs(K) ? "x" : "y";
      }

      if (W.current === "x") {
        h(Y(L));
      } else if (W.current === "y") {
        f(K);
        const me = Math.min(Math.abs(K) / Qn, 1);
        p(Math.round((1 - me * 0.7) * 100) / 100);
      }
    },
    [o, m, $, z, Y]
  );

  const Ee = b(() => {
    if (o) {
      if (O.current) {
        O.current = false;
        te.current = Date.now();

        if (N.current < 1.1) {
          j();
        }

        return;
      }
      if (N.current > 1) {
        y(false);
        return;
      }
      if (J.current > 1 || X.current) {
        y(false);
        f(0);
        p(1);
        W.current = null;
        return;
      }
      if (Date.now() - te.current < 300) {
        y(false);
        f(0);
        p(1);
        W.current = null;
        return;
      }
      if (m) {
        y(false);

        if (!B.current) {
          if (!W.current) {
            u(true);
            return;
          }
          if (W.current === "y" && d > 30) {
            u(true);
            return;
          }
        }

        if (W.current === "x") {
          let L = e;

          if (l < -50 && e < t - 1) {
            L = e + 1;
          } else if (l > 50 && e > 0) {
            L = e - 1;
          }

          i(true);
          h(0);

          if (L !== e) {
            c(L);
          }

          M.current = window.setTimeout(() => {
            M.current = null;
            i(false);
          }, 500);
        } else {
          if (W.current === "y") {
            re();
          }
        }
        W.current = null;
      }
    }
  }, [o, m, e, l, d, t, re, c, u, i, j]);

  const at = b(() => {
    const Q = x.current ?? e;
    const L = n[Q] || { width: 600, height: 400 };
    if (s && _ !== null) {
      const K = n[_] || L;
      return { width: K.width, height: K.height };
    }
    if (m && W.current === "x" && l !== 0) {
      const K = l < 0 ? Math.min(Q + 1, t - 1) : Math.max(Q - 1, 0);
      if (K === Q) {
        return L;
      }
      const me = n[K] || L;
      const Ye = L.width / 2 + me.width / 2;
      const Wt = Math.min(Math.abs(l) / Ye, 1);
      return {
        width: L.width + (me.width - L.width) * Wt,
        height: L.height + (me.height - L.height) * Wt,
      };
    }
    return L;
  }, [n, e, s, _, m, l, t]);

  const ve = b(() => {
    i(true);
    f(window.innerHeight);
    p(0);
  }, [i]);

  return {
    offsetX: l,
    offsetY: d,
    isDragging: m,
    opacity: g,
    wasDragging: Z,
    displaySize: at(),
    animateClose: ve,
    zoom: { scale: C, panX: w, panY: S, isAnimating: R },
    desktopHandlers: {
      onMouseDown: ie,
      onMouseMove: fe,
      onMouseUp: oe,
      onMouseLeave: oe,
    },
    mobileHandlers: { onTouchStart: qe, onTouchMove: Xe, onTouchEnd: Ee },
  };
}
const W0 = "CNP0fBGd";
const j0 = "FxpoCP7s";
const z0 = "qO26zEBn";
const q0 = "-iyRv-th";
const X0 = "liHkL9mP";
const Y0 = "U70eja-G";
const G0 = "q1lrkTZi";
const Z0 = "oxBkKER-";
const K0 = "d4VkyUQq";
const Q0 = "UK-OMndz";
const J0 = "_2CH2oEyg";
const ev = "gGVStb2K";
const tv = "_7Ac4a5ul";
const nv = "ZyoB5yJC";
const rv = "DWdVTu-N";

const xe = {
  viewer: W0,
  closeButton: j0,
  counter: z0,
  windowContainer: q0,
  track: X0,
  slide: Y0,
  mobileContainer: G0,
  mobileTrack: Z0,
  mobileSlide: K0,
  navArea: Q0,
  navLeft: J0,
  navRight: ev,
  dots: tv,
  dot: nv,
  active: rv,
};

function ov({ onClick: e }) {
  return r("button", {
    className: xe.closeButton,
    onClick: e,
    children: r("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: r("path", { d: "M18 6L6 18M6 6l12 12" }),
    }),
  });
}
function sv({ current: e, total: t }) {
  return (
    t <= 1 || r("div", { className: xe.counter, children: [e + 1, " / ", t] })
  );
}
function iv({ currentIndex: e, total: t, onPrev: n, onNext: o }) {
  return (
    t <= 1 ||
    r(Re, {
      children: [
        r("button", {
          className: `${xe.navArea} ${xe.navLeft}`,
          onClick: n,
          disabled: e === 0,
          children: r("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: r("path", { d: "M15 18l-6-6 6-6" }),
          }),
        }),
        r("button", {
          className: `${xe.navArea} ${xe.navRight}`,
          onClick: o,
          disabled: e === t - 1,
          children: r("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: r("path", { d: "M9 18l6-6-6-6" }),
          }),
        }),
      ],
    })
  );
}
function av({ total: e, currentIndex: t, onDotClick: n }) {
  return (
    e <= 1 ||
    r("div", {
      className: xe.dots,
      children: Array.from({ length: e }, (o, s) =>
        r(
          "button",
          {
            className: `${xe.dot} ${s === t ? xe.active : ""}`,
            onClick: () => n(s),
          },
          s
        )
      ),
    })
  );
}
function cv({
  images: e,
  imageSizes: t,
  currentIndex: n,
  offsetX: o,
  offsetY: s,
  isAnimating: i,
  displaySize: a,
  handlers: c,
  onImageClick: u,
}) {
  const l = I(null);

  const h = () => {
    let d = 0;
    for (let f = 0; f < n; f++) {
      d += t[f]?.width || 0;
    }
    return d;
  };

  return r("div", {
    className: xe.windowContainer,
    style: {
      width: `${a.width}px`,
      height: `${a.height}px`,
      transform: `translateY(${s}px)`,
      transition: i
        ? "width 0.5s cubic-bezier(0.32, 0.72, 0, 1), height 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
        : "none",
    },
    onMouseDown: c.onMouseDown,
    onMouseMove: c.onMouseMove,
    onMouseUp: c.onMouseUp,
    onMouseLeave: c.onMouseLeave,
    children: r("div", {
      ref: l,
      className: xe.track,
      style: {
        transform: `translateX(${-h() + o}px)`,
        transition: i
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: e.map((d, f) =>
        r(
          "div",
          {
            className: xe.slide,
            onClick: u,
            children: r("img", {
              src: d.url,
              alt: "",
              draggable: false,
              style: {
                width: t[f]?.width || "auto",
                height: t[f]?.height || "auto",
              },
            }),
          },
          d.id
        )
      ),
    }),
  });
}
function lv({
  images: e,
  currentIndex: t,
  offsetX: n,
  offsetY: o,
  isAnimating: s,
  isClosing: i,
  handlers: a,
  onImageClick: c,
  zoom: u,
}) {
  return r("div", {
    className: xe.mobileContainer,
    style: {
      transform: `translateY(${o}px)`,
      transition: s
        ? `transform ${i ? "0.15s" : "0.3s"} cubic-bezier(0.32, 0.72, 0, 1)`
        : "none",
    },
    onTouchStart: a.onTouchStart,
    onTouchMove: a.onTouchMove,
    onTouchEnd: a.onTouchEnd,
    children: r("div", {
      className: xe.mobileTrack,
      style: {
        transform: `translateX(calc(-${t * 100}% + ${n}px))`,
        transition: s
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: e.map((l, h) =>
        r(
          "div",
          {
            className: xe.mobileSlide,
            onClick: c,
            children: r("img", {
              src: l.url,
              alt: "",
              draggable: false,
              "data-viewer-image": true,
              style:
                h === t && u.scale !== 1
                  ? {
                      transform: `translate(${u.panX}px, ${u.panY}px) scale(${u.scale})`,
                      transition: u.isAnimating
                        ? "transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
                        : "none",
                    }
                  : undefined,
            }),
          },
          l.id
        )
      ),
    }),
  });
}
function uv({ images: e, initialIndex: t, onClose: n }) {
  const o = I(null);
  const s = pt();
  const i = D0(e);
  const a = F0({ initialIndex: t, total: e.length });
  U0();

  const c = b(
    (d = false) => {
      if (d && s) {
        u.animateClose();
        setTimeout(n, 150);
      } else {
        n();
      }
    },
    [s, n]
  );

  const u = V0({
    currentIndex: a.currentIndex,
    imagesCount: e.length,
    imageSizes: i,
    isMobile: s,
    isAnimating: a.isAnimating,
    setIsAnimating: a.setIsAnimating,
    cancelAnimation: a.cancelAnimation,
    onIndexChange: a.goToIndex,
    onClose: c,
  });

  B0({ onClose: c, onPrev: a.goToPrev, onNext: a.goToNext });

  const l = b(
    (d) => {
      if (u.wasDragging.current) {
        u.wasDragging.current = false;
        return;
      }

      if (d.target === o.current) {
        c();
      }
    },
    [c]
  );

  const h = b(() => {
    if (u.wasDragging.current) {
      u.wasDragging.current = false;
      return;
    }
    c(s);
  }, [c, s]);

  return _t(
    r("div", {
      ref: o,
      className: xe.viewer,
      style: {
        "--opacity": u.opacity,
        transition: a.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: l,
      children: [
        !s && r(ov, { onClick: c }),
        r(sv, { current: a.currentIndex, total: e.length }),
        !s &&
          r(cv, {
            images: e,
            imageSizes: i,
            currentIndex: a.currentIndex,
            offsetX: u.offsetX,
            offsetY: u.offsetY,
            isAnimating: a.isAnimating,
            displaySize: u.displaySize,
            handlers: u.desktopHandlers,
            onImageClick: h,
          }),
        s &&
          r(lv, {
            images: e,
            currentIndex: a.currentIndex,
            offsetX: u.offsetX,
            offsetY: u.offsetY,
            isAnimating: a.isAnimating,
            isClosing: false,
            handlers: u.mobileHandlers,
            onImageClick: h,
            zoom: u.zoom,
          }),
        !s &&
          r(iv, {
            currentIndex: a.currentIndex,
            total: e.length,
            onPrev: a.goToPrev,
            onNext: a.goToNext,
          }),
        r(av, {
          total: e.length,
          currentIndex: a.currentIndex,
          onDotClick: a.goToIndex,
        }),
      ],
    }),
    document.body
  );
}
function dv() {
  const { isOpen: e, images: t, initialIndex: n, close: o } = ms();
  return e ? r(uv, { images: t, initialIndex: n, onClose: o }) : null;
}
function hv({ children: e, currentPath: t }) {
  const n = aa();

  const o = Ne((i) => i.initialize);

  V(() => {
    if (n === "idle") {
      o();
    }
  }, [n, o]);

  V(() => {
    if (n === "loading" || n === "idle") {
      return;
    }
    const i = ho.some((a) => t.startsWith(a));

    if (n === "unauthenticated" && !i) {
      $(_e.LOGIN);
    } else if (n === "needs_profile" && t !== _e.ONBOARDING) {
      $(_e.ONBOARDING);
    } else if (
      n === "authenticated" &&
      (t === _e.LOGIN ||
        t === _e.REGISTER ||
        t === _e.REGISTER ||
        t === _e.ONBOARDING)
    ) {
      $(_e.HOME);
    }
  }, [n, t]);

  const s = ho.some((i) => t.startsWith(i));
  return n === "idle" || (n === "loading" && !s)
    ? null
    : n === "service_error"
    ? r(fv, {})
    : n === "account_deleted"
    ? r(mv, {})
    : r(Re, { children: e });
}
function fv() {
  const e = Ne((s) => s.initialize);

  const [t, n] = A(false);
  return r("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: r("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        maxWidth: "400px",
        width: "100%",
        textAlign: "center",
      },
      children: [
        r("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Сервис недоступен",
        }),
        r("p", {
          style: {
            fontSize: "15px",
            color: "var(--text-secondary)",
            margin: 0,
            lineHeight: 1.5,
          },
          children:
            "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
        }),
        r("div", {
          style: { marginTop: "8px" },
          children: r(Me, {
            onClick: async () => {
              n(true);
              try {
                await e();
              } finally {
                n(false);
              }
            },
            disabled: t,
            children: t ? "Подключение..." : "Попробовать снова",
          }),
        }),
      ],
    }),
  });
}
function mv() {
  const e = Ne((u) => u.canRestore);

  const t = Ne((u) => u.restoreDeadline);

  const n = Ne((u) => u.restoreAccount);

  const o = Ne((u) => u.logout);

  const [s, i] = A(false);

  const a = t
    ? new Date(t).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const c = async () => {
    i(true);
    try {
      await n();
    } catch {
      i(false);
    }
  };

  return r("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: r("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        maxWidth: "400px",
        width: "100%",
        textAlign: "center",
      },
      children: [
        r("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Аккаунт удалён",
        }),
        s
          ? r("p", {
              style: {
                fontSize: "15px",
                color: "var(--text-secondary)",
                margin: 0,
              },
              children: "Восстановление аккаунта...",
            })
          : e
          ? r(Re, {
              children: [
                r("p", {
                  style: {
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    margin: 0,
                    lineHeight: 1.5,
                  },
                  children: [
                    "Ваш аккаунт был удалён. Вы можете восстановить его",
                    a ? ` до ${a}` : "",
                    ".",
                  ],
                }),
                r("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "8px",
                    width: "100%",
                  },
                  children: [
                    r(Me, { onClick: c, children: "Восстановить аккаунт" }),
                    r("button", {
                      type: "button",
                      onClick: () => o(),
                      style: {
                        background: "none",
                        border: "none",
                        color: "var(--text-secondary)",
                        fontSize: "14px",
                        cursor: "pointer",
                        padding: "8px",
                      },
                      children: "Выйти",
                    }),
                  ],
                }),
              ],
            })
          : r(Re, {
              children: [
                r("p", {
                  style: {
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    margin: 0,
                  },
                  children: "Срок восстановления аккаунта истёк.",
                }),
                r("div", {
                  style: { marginTop: "8px" },
                  children: r(Me, { onClick: () => o(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
function pv({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  gap: o = 0,
  getItemKey: s = (a) => a,
  initialMeasuredHeights: i,
}) {
  const [, a] = A(0);
  const c = I(typeof window !== "undefined" ? window.scrollY : 0);
  const u = I(i ?? new Map());
  const l = I(null);
  const h = I(null);
  const d = I(new Map());

  const f = (C) => u.current.get(C) ?? t;

  const m = (C) => {
    let T = 0;
    for (let w = 0; w < C; w++) {
      T += f(w) + o;
    }
    return T;
  };

  const y = () => {
    if (e === 0) {
      return 0;
    }
    let C = 0;
    for (let T = 0; T < e; T++) {
      C += f(T);
    }
    C += Math.max(0, e - 1) * o;
    return C;
  };

  const g = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const c_current = c.current;
    const window_innerHeight = window.innerHeight;
    let w = 0;
    let k = 0;
    for (let R = 0; R < e; R++) {
      const P = f(R) + o;
      if (k + P > c_current) {
        w = R;
        break;
      }
      k += P;
    }
    let S = w;
    let E = 0;
    for (
      let R = w;
      R < e && ((E += f(R) + o), (S = R), !(E >= window_innerHeight));
      R++
    ) {}
    return { start: Math.max(0, w - n), end: Math.min(e - 1, S + n) };
  };

  const p = () => {
    if (e === 0) {
      return [];
    }
    const { start: C, end: T } = g();
    const w = [];
    for (let k = C; k <= T; k++) {
      w.push({ index: k, key: s(k), start: m(k) });
    }
    return w;
  };

  if (!h.current) {
    h.current = new ResizeObserver((C) => {
      let T = false;
      for (const w of C) {
        const w_target = w.target;
        const S = d.current.get(w_target);
        if (S === undefined) {
          continue;
        }
        const E = w.contentRect.height;

        if (E > 0 && u.current.get(S) !== E) {
          u.current.set(S, E);
          T = true;
        }
      }

      if (T) {
        a((w) => w + 1);
      }
    });
  }

  const _ = b((C, T) => {
    if (!C) {
      return;
    }
    d.current.set(C, T);
    h.current?.observe(C);
    const w = C.getBoundingClientRect().height;

    if (w > 0 && u.current.get(T) !== w) {
      u.current.set(T, w);
      a((k) => k + 1);
    }
  }, []);
  V(() => {
    const C = () => {
      if (!l.current) {
        l.current = requestAnimationFrame(() => {
          l.current = null;
          c.current = window.scrollY;

          a((T) => T + 1);
        });
      }
    };
    window.addEventListener("scroll", C, { passive: true });
    c.current = window.scrollY;

    a((T) => T + 1);

    return () => {
      window.removeEventListener("scroll", C);

      if (l.current) {
        cancelAnimationFrame(l.current);
      }

      h.current?.disconnect();
      d.current.clear();
    };
  }, []);
  const v = b(() => new Map(u.current), []);
  return {
    virtualItems: p(),
    totalSize: y(),
    measureElement: _,
    getMeasuredHeights: v,
  };
}
const gv = "IWKvHh6o";
const vv = "B0hQs8NU";
const _v = "q8F-aimP";
const wv = "qkSaz-qE";

const Tn = {
  virtualFeed: gv,
  virtualContent: vv,
  virtualItem: _v,
  loadingMore: wv,
};

function yv({
  posts: e,
  renderPost: t,
  isLoadingMore: n = false,
  hasMore: o = false,
  onLoadMore: s,
  estimatedPostHeight: i = 300,
  overscan: a = 5,
  gap: c = 10,
  initialMeasuredHeights: u,
  onMeasuredHeightsChange: l,
}) {
  const h = I(null);
  const d = I(false);
  const [f, m] = A(null);
  const [y, g] = A(window.innerWidth < 1174);

  const p = ue((R) => R.highlightedPostId);

  const _ = ue((R) => R.clearHighlightedPost);

  V(() => {
    const R = () => g(window.innerWidth < 1174);
    window.addEventListener("resize", R);

    return () => window.removeEventListener("resize", R);
  }, []);
  const v = y ? 0 : c;

  const C = b(
    (R) => {
      const e_R = e[R];
      if (!e_R) {
        return R;
      }
      const N = e_R.attachments?.[0]?.id ?? "";
      return `${e_R.id}-${N}`;
    },
    [e]
  );

  const {
    virtualItems: T,
    totalSize: w,
    measureElement: k,
    getMeasuredHeights: S,
  } = pv({
    itemCount: e.length,
    estimatedItemHeight: i,
    overscan: a,
    gap: v,
    getItemKey: C,
    initialMeasuredHeights: u,
  });

  V(
    () => () => {
      if (l) {
        l(S());
      }
    },
    [l, S]
  );

  V(() => {
    if (!p) {
      return;
    }
    h.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const R = setTimeout(() => {
      m(p);
      _();

      setTimeout(() => m(null), 600);
    }, 300);
    return () => clearTimeout(R);
  }, [p, _]);

  const E = b(() => {
    if (!s || !o || !o || n) {
      return;
    }
    const R =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (R < 500 && !d.current) {
      d.current = true;
      s();
    }

    if (R > 600) {
      d.current = false;
    }
  }, [s, o, n]);

  V(() => {
    if (!n) {
      d.current = false;
    }
  }, [n]);

  V(() => {
    window.addEventListener("scroll", E, { passive: true });

    return () => window.removeEventListener("scroll", E);
  }, [E]);

  return r("div", {
    ref: h,
    className: Tn.virtualFeed,
    children: [
      r("div", {
        className: Tn.virtualContent,
        style: { height: `${w}px` },
        children: T.map((R) => {
          const P = e[R.index];
          return P
            ? r(
                "div",
                {
                  ref: (N) => k(N, R.index),
                  className: Tn.virtualItem,
                  style: { transform: `translateY(${R.start}px)` },
                  children: t(P, R.index, P.id === f),
                },
                R.key
              )
            : null;
        }),
      }),
      n &&
        r("div", {
          className: Tn.loadingMore,
          children: r(vt, { size: "sm" }),
        }),
    ],
  });
}
const Cv = "qX9ObwT9";
const Tv = "QAdxKv6R";
const Nv = "nTcZk3Cv";
const Ev = "_5UYumbfd";
const Nn = { content: Cv, icon: Tv, text: Nv, button: Ev };
const Ao = "phone-verification-required";
function Rv() {
  const [e, t] = A(false);

  const n = Ne((s) => s.profile?.id ?? "");

  V(() => {
    const s = () => t(true);
    window.addEventListener(Ao, s);

    return () => window.removeEventListener(Ao, s);
  }, []);

  if (!e) {
    return null;
  }

  const o = `https://t.me/itd_verification_bot?start=${n}`;
  return r(gt, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: r("div", {
      className: Nn.content,
      children: [
        r("div", {
          className: Nn.icon,
          children: r("svg", {
            width: "48",
            height: "48",
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              r("circle", {
                cx: "24",
                cy: "24",
                r: "24",
                fill: "#2AABEE",
                "fill-opacity": "0.12",
              }),
              r("svg", {
                x: "8",
                y: "8",
                width: "32",
                height: "32",
                viewBox: "0 0 1000 1000",
                children: r("path", {
                  d: "M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z",
                  fill: "#2AABEE",
                }),
              }),
            ],
          }),
        }),
        r("p", {
          className: Nn.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        r("a", {
          href: o,
          target: "_blank",
          rel: "noopener noreferrer",
          className: Nn.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
const bv = "NoLqdGhZ";
const Sv = "ZJgdLwPI";
const kv = "r9t-7AuI";
const Jn = { layout: bv, wrapper: Sv, content: kv };

const Iv = pe(() =>
  ge(
    () => import("./index-DhA3Qpju.js"),
    __vite__mapDeps([2, 3, 4, 5, 6, 7, 8])
  ).then((e) => ({
    default: e.Aside,
  }))
);

const Pv = pe(() =>
  ge(
    () => import("./index-RWLDe6S5.js"),
    __vite__mapDeps([9, 3, 6, 7, 10, 11, 12])
  ).then((e) => ({
    default: e.MobileNavigation,
  }))
);

const Av = ["/login", "/register", "/forgot-password", "/verify-email"];

const xv = [
  "/terms",
  "/privacy",
  "/cookies",
  "/external",
  "/careers",
  "/support",
  "/delete-account",
  "/child-safety",
];

const Ov = ({ children: e }) => {
  const t = pt();
  const n = Ra();
  const [o, s] = A(window.location.pathname);
  V(() => {
    const c = () => {
      s(window.location.pathname);
    };
    window.addEventListener("popstate", c);
    const u = history.pushState.bind(history);
    const l = history.replaceState.bind(history);

    history.pushState = (...h) => {
      u(...h);
      c();
    };

    history.replaceState = (...h) => {
      l(...h);
      c();
    };

    return () => {
      window.removeEventListener("popstate", c);
      history.pushState = u;
      history.replaceState = l;
    };
  }, []);
  const i = Av.includes(o);
  const a = xv.includes(o);
  return i
    ? r(Re, { children: e })
    : r(Ea.Provider, {
        value: { isHidden: n },
        children: r("div", {
          className: Jn.layout,
          children: r("div", {
            className: Jn.wrapper,
            children: [
              !a &&
                r(Ot, {
                  fallback: null,
                  children: t ? r(Pv, {}) : r(Iv, {}),
                }),
              !a && !t && r(fl, {}),
              r("div", { className: Jn.content, children: e }),
            ],
          }),
        }),
      });
};

const Lv = "bpf4GYjz";
const Mv = "crrL7XgI";
const $v = "yhENW-7a";
const Dv = "_928LvLhD";
const Uv = "_6eF0w9KX";

const Yt = {
  page: Lv,
  createPostWrapper: Mv,
  tabsWrapper: $v,
  error: Dv,
  empty: Uv,
};

const Bv = (e) => {
  const t = ue((S) => S.posts);

  const n = ue((S) => S.activeFeed);

  const o = ue((S) => S.isLoading);

  const s = ue((S) => S.isLoadingMore);

  const i = ue((S) => S.hasMore);

  const a = ue((S) => S.error);

  const c = ue((S) => S.feedScrollPosition);

  const u = ue((S) => S.feedMeasuredHeights);

  const l = ue((S) => S.setActiveFeed);

  const h = ue((S) => S.fetchFeed);

  const d = ue((S) => S.loadMoreFeed);

  const f = ue((S) => S.createPost);

  const m = ue((S) => S.setFeedScrollPosition);

  const y = ue((S) => S.setFeedMeasuredHeights);

  const g = Ne((S) => S.profile);

  const p = Ne((S) => S.status);

  const _ = I(false);

  const v = Te(() => t.map((S) => S.author.id), [t]);

  oa(v);

  V(() => {
    if (p === "authenticated" && t.length === 0 && !o) {
      h();
    }
  }, [n, p]);

  V(() => {
    if (t.length > 0 && c > 0 && !_.current) {
      _.current = true;

      requestAnimationFrame(() => {
        window.scrollTo(0, c);
      });
    }
  }, [t.length, c]);

  V(
    () => () => {
      m(window.scrollY);
    },
    [m]
  );

  const C = (S) => {
    const R = ["global", "clan", "following"][S] ?? "global";

    if (R !== n) {
      l(R);
    }
  };

  const T = async (S, E, R, P) => {
    if (g) {
      await f(g.id, S, E, R, P);
    }
  };

  const w = b(() => {
    if (i && !s) {
      d();
    }
  }, [i, s, d]);

  const k = b((S, E, R) => r(Xg, { post: S, isHighlighted: R }, S.id), []);

  return r("div", {
    className: Yt.page,
    children: [
      r("div", {
        className: Yt.tabsWrapper,
        children: r($0, {
          tabs: ["Для вас", "Лента кланов", "Подписки"],
          activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
          onChange: C,
        }),
      }),
      r("div", {
        className: Yt.createPostWrapper,
        children: [
          g && r(ze, { src: g.avatar ?? "", alt: g.displayName, size: "sm" }),
          r(_d, { onSubmit: T }),
        ],
      }),
      a
        ? r("div", {
            className: Yt.error,
            children: [
              r("p", { children: a }),
              r("button", { onClick: () => h(), children: "Повторить" }),
            ],
          })
        : o && t.length === 0
        ? r(vt, {})
        : t.length === 0
        ? r("div", { className: Yt.empty, children: "Нет постов" })
        : t.length > 0
        ? r(yv, {
            posts: t,
            renderPost: k,
            isLoadingMore: s,
            hasMore: i,
            onLoadMore: w,
            estimatedPostHeight: 250,
            overscan: 3,
            initialMeasuredHeights: u,
            onMeasuredHeightsChange: y,
          })
        : null,
    ],
  });
};

const Fv = pe(() =>
  ge(
    () => import("./index-Bp5YvSlA.js"),
    __vite__mapDeps([13, 10, 11, 14, 6, 5, 15])
  ).then((e) => ({
    default: e.Profile,
  }))
);

const Hv = pe(() =>
  ge(() => import("./index-B0TopsW_.js"), __vite__mapDeps([16, 14, 17])).then(
    (e) => ({
      default: e.Notifications,
    })
  )
);

const Vv = pe(() =>
  ge(() => import("./index-TKeTK4oM.js"), __vite__mapDeps([18, 19])).then(
    (e) => ({
      default: e.About,
    })
  )
);

const js = pe(() =>
  ge(() => import("./index-C8MujMHx.js"), []).then((e) => ({
    default: e.NotFound,
  }))
);

const Wv = pe(() =>
  ge(() => import("./index-C-Rm8vZQ.js"), __vite__mapDeps([20, 21, 22])).then(
    (e) => ({
      default: e.PostPage,
    })
  )
);

const jv = pe(() =>
  ge(
    () => import("./index-DpRAnJP-.js"),
    __vite__mapDeps([23, 24, 25, 26, 27, 4, 28, 29])
  ).then((e) => ({
    default: e.Login,
  }))
);

const zv = pe(() =>
  ge(
    () => import("./index-BjtYR4mU.js"),
    __vite__mapDeps([30, 24, 25, 26, 27, 4, 28, 31])
  ).then((e) => ({
    default: e.Register,
  }))
);

const qv = pe(() =>
  ge(
    () => import("./index-Bk3XoqhG.js"),
    __vite__mapDeps([32, 24, 25, 4, 28, 33])
  ).then((e) => ({
    default: e.ForgotPassword,
  }))
);

const Xv = pe(() =>
  ge(
    () => import("./index-uqKOWr5a.js"),
    __vite__mapDeps([34, 4, 28, 35])
  ).then((e) => ({
    default: e.ResetPassword,
  }))
);

const Yv = pe(() =>
  ge(() => import("./index-xCb1oR7B.js"), []).then((e) => ({
    default: e.VerifyEmail,
  }))
);

const Gv = pe(() =>
  ge(() => import("./index-QoJW8Ixy.js"), __vite__mapDeps([36, 21, 37])).then(
    (e) => ({
      default: e.Terms,
    })
  )
);

const Zv = pe(() =>
  ge(() => import("./index-DafpkPwK.js"), __vite__mapDeps([38, 21, 39])).then(
    (e) => ({
      default: e.Privacy,
    })
  )
);

const Kv = pe(() =>
  ge(() => import("./index-BQ9vNL_e.js"), __vite__mapDeps([40, 21, 41])).then(
    (e) => ({
      default: e.Cookies,
    })
  )
);

const Qv = pe(() =>
  ge(() => import("./index-nuIdaB6B.js"), __vite__mapDeps([42, 43])).then(
    (e) => ({
      default: e.Onboarding,
    })
  )
);

const Jv = pe(() =>
  ge(() => import("./index-B9_uYOhE.js"), __vite__mapDeps([44, 7, 45])).then(
    (e) => ({
      default: e.Search,
    })
  )
);

const e_ = pe(() =>
  ge(() => import("./index-CZsFHpc8.js"), __vite__mapDeps([46, 21, 47])).then(
    (e) => ({
      default: e.Hashtag,
    })
  )
);

const t_ = pe(() =>
  ge(() => import("./index-C98lTN8f.js"), __vite__mapDeps([48, 21, 49])).then(
    (e) => ({
      default: e.ExternalLink,
    })
  )
);

const n_ = pe(() =>
  ge(() => import("./index-DQMqfHSX.js"), __vite__mapDeps([50, 21, 51])).then(
    (e) => ({
      default: e.Support,
    })
  )
);

const r_ = pe(() =>
  ge(() => import("./index-ByEqAr9-.js"), __vite__mapDeps([52, 21, 53])).then(
    (e) => ({
      default: e.DeleteAccount,
    })
  )
);

const o_ = pe(() =>
  ge(() => import("./index-DpksjKpD.js"), __vite__mapDeps([54, 21, 55])).then(
    (e) => ({
      default: e.ChildSafety,
    })
  )
);

const s_ = pe(() =>
  ge(() => import("./index-BBGl1AA3.js"), __vite__mapDeps([56, 57])).then(
    (e) => ({
      default: e.Event,
    })
  )
);

const i_ = pe(() =>
  ge(() => import("./index-Bll1q34L.js"), []).then((e) => ({
    default: e.Verification,
  }))
);

const a_ = pe(() =>
  ge(() => import("./index-C0Or9gof.js"), __vite__mapDeps([58, 21, 59])).then(
    (e) => ({
      default: e.SubscriptionTerms,
    })
  )
);

const c_ = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return r(js, {});
  }
  const t = e.slice(1);
  return r(Fv, { username: t });
};

function l_() {
  const [e, t] = A(window.location.pathname);
  return r(d0, {
    children: r(pl, {
      children: r(hv, {
        currentPath: e,
        children: [
          r(dv, {}),
          r(A0, {}),
          r(Rv, {}),
          r(Ov, {
            children: r(Ot, {
              fallback: null,
              children: r(fs, {
                onChange: (o) => {
                  const s = e;
                  t(o.url);

                  if (o.url !== "/" && o.url !== s) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  r(Bv, { path: "/" }),
                  r(Hv, { path: "/notifications" }),
                  r(Vv, { path: "/about" }),
                  r(jv, { path: "/login" }),
                  r(zv, { path: "/register" }),
                  r(qv, { path: "/forgot-password" }),
                  r(Xv, { path: "/reset-password" }),
                  r(Yv, { path: "/verify-email" }),
                  r(Gv, { path: "/terms" }),
                  r(Zv, { path: "/privacy" }),
                  r(Kv, { path: "/cookies" }),
                  r(Qv, { path: "/onboarding" }),
                  r(Jv, { path: "/search" }),
                  r(e_, { path: "/hashtag/:name" }),
                  r(t_, { path: "/external" }),
                  r(n_, { path: "/support" }),
                  r(r_, { path: "/delete-account" }),
                  r(o_, { path: "/child-safety" }),
                  r(s_, { path: "/event" }),
                  r(i_, { path: "/verification" }),
                  r(a_, { path: "/subscription-terms" }),
                  r(Wv, { path: "/:username/post/:postId" }),
                  r(c_, { path: "/:slug" }),
                  r(js, { default: true }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
Ei(document.getElementById("root")).render(r(us, { children: r(l_, {}) }));
export {
  $ as $,
  I as A,
  Me as B,
  Oi as C,
  rs as D,
  pe as E,
  _r as F,
  Le as G,
  ue as H,
  st as I,
  u_ as J,
  Ph as K,
  $0 as L,
  gt as M,
  _d as N,
  Xg as O,
  Ot as P,
  d_ as Q,
  Us as R,
  vt as S,
  Te as T,
  ln as U,
  yv as V,
  Ns as W,
  Sr as X,
  $n as Y,
  In as Z,
  ge as __,
  dt as a,
  Ro as a0,
  bn as a1,
  Vg as a2,
  Vs as a3,
  he as a4,
  _t as a5,
  nu as a6,
  F as a7,
  H as a8,
  Rr as a9,
  h_ as aa,
  _a as ab,
  Ao as ac,
  Qa as ad,
  Rs as ae,
  ki as af,
  Ne as b,
  Dn as c,
  A as d,
  ze as e,
  pt as f,
  Wi as g,
  br as h,
  ke as i,
  qa as j,
  Re as k,
  Fs as l,
  Dt as m,
  bs as n,
  Za as o,
  hn as p,
  b as q,
  Es as r,
  hr as s,
  Ze as t,
  r as u,
  vs as v,
  cl as w,
  Is as x,
  V as y,
  Ps as z,
};
