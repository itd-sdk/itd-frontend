const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-eVwohftX.js",
      "assets/index-Vt6rge9z.css",
      "assets/index-DyJ0p1L3.js",
      "assets/index-CALmqHQl.js",
      "assets/IconBrand-sX16mLR6.js",
      "assets/IconLogout-CTjbMwD3.js",
      "assets/IconPerson-D-cKVRay.js",
      "assets/IconSearch-LYepZZlI.js",
      "assets/index-BK3tZy1c.css",
      "assets/index-C6bGomjs.js",
      "assets/index-aKWxZjUi.js",
      "assets/index-2JhX-IcI.css",
      "assets/index-Bxf28ACg.css",
      "assets/index-1TtwukMY.js",
      "assets/IconCheck-Bbn3wez7.js",
      "assets/index-C74YckKO.css",
      "assets/index-DquIbFwH.js",
      "assets/index-ysVQEOk1.css",
      "assets/index-DUtHTkGi.js",
      "assets/index-ZVkbsz1m.css",
      "assets/index-DtV7S2Sk.js",
      "assets/index-DIXM3pTD.css",
      "assets/index-D9YlmVIC.js",
      "assets/index-CL_c8f_t.js",
      "assets/index-DK1lyy5c.css",
      "assets/index-DRMyxeWT.js",
      "assets/index-Cmj9rins.css",
      "assets/IconEyeOff-CeZ2uxwV.js",
      "assets/index-2ed4UA7H.css",
      "assets/index-CIjxrE7d.js",
      "assets/index-BkV84Ei0.css",
      "assets/index-DsfFe6bP.js",
      "assets/index-BuSB1rTU.css",
      "assets/index-CCC34WVW.js",
      "assets/index-AyR1xSDo.css",
      "assets/index-BP2V9oaq.js",
      "assets/index-BYDms0MW.css",
      "assets/index-DKvZ6IE0.js",
      "assets/index-DYMxdUD-.css",
      "assets/index-DwiIie5l.js",
      "assets/index-BfSyWtIY.css",
      "assets/index-O8ItmUl2.js",
      "assets/index-Tfl7NUeb.css",
      "assets/index-C1iNmIz-.js",
      "assets/index-DxopF78T.css",
      "assets/index-BIKMZ8GZ.js",
      "assets/index-sgOc3eJB.css",
      "assets/index-D7b93UOr.js",
      "assets/index-CYFMj30R.css",
      "assets/index-C3l5jGoH.js",
      "assets/index-m8m8PtY3.css",
      "assets/index-DVoTZmuc.js",
      "assets/index-DlXH7sLZ.css",
      "assets/index-M4_kOhzv.js",
      "assets/index-DcwPAf74.css",
      "assets/index-DjqRzw9u.js",
      "assets/index-cSZoRzaS.css",
      "assets/index-BHEssFy1.js",
      "assets/index-CndHYrx2.css",
    ])
) => i.map((i) => d[i]);
(() => {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) {
    return;
  }
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) {
    r(s);
  }
  new MutationObserver((s) => {
    for (const i of s) {
      if (i.type === "childList") {
        for (const a of i.addedNodes) {
          if (a.tagName === "LINK" && a.rel === "modulepreload") {
            r(a);
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
  function r(s) {
    if (s.ep) {
      return;
    }
    s.ep = true;
    const i = n(s);
    fetch(s.href, i);
  }
})();
let an;
let ne;
let Hr;
let Lt;
let Do;
let Vr;
let Wr;
let jr;
let wo;
let oo;
let ro;
let zr;
const on = {};
const qr = [];
const ti = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function st(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function yo(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function it(e, t, n) {
  let r;
  let s;
  let i;
  const a = {};
  for (i in t) {
    if (i == "key") {
      r = t[i];
    } else if (i == "ref") {
      s = t[i];
    } else {
      a[i] = t[i];
    }
  }

  if (arguments.length > 2) {
    a.children = arguments.length > 3 ? an.call(arguments, 2) : n;
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (i in e.defaultProps) {
      if (a[i] === undefined) {
        a[i] = e.defaultProps[i];
      }
    }
  }

  return en(e, a, r, s, null);
}
function en(e, t, n, r, s) {
  const i = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: s ?? ++Hr,
    __i: -1,
    __u: 0,
  };

  if (s == null && ne.vnode != null) {
    ne.vnode(i);
  }

  return i;
}
function ni() {
  return { current: null };
}
function Re(e) {
  return e.children;
}

class Je {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  setState(e, t) {
    let n;

    n =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = st({}, this.state));

    if (typeof e == "function") {
      e = e(st({}, n), this.props);
    }

    if (e) {
      st(n, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      so(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      this.__e = true;
      e && this.__h.push(e);
      so(this);
    }
  }
}

function Ft(e, t) {
  if (t == null) {
    return e.__ ? Ft(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? Ft(e) : null;
}
function Yr(e) {
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

    return Yr(e);
  }
}
function so(e) {
  if (
    (!e.__d && (e.__d = true) && Lt.push(e) && !Pn.__r++) ||
    Do != ne.debounceRendering
  ) {
    ((Do = ne.debounceRendering) || Vr)(Pn);
  }
}
function Pn() {
  let e;
  let t;
  let n;
  let r;
  let s;
  let i;
  let a;
  let c = 1;

  while (Lt.length) {
    if (Lt.length > c) {
      Lt.sort(Wr);
    }

    e = Lt.shift();
    c = Lt.length;

    if (e.__d) {
      n = undefined;
      r = undefined;
      s = (r = (t = e).__v).__e;
      i = [];
      a = [];

      t.__P &&
        (((n = st({}, r)).__v = r.__v + 1),
        ne.vnode && ne.vnode(n),
        Co(
          t.__P,
          n,
          r,
          t.__n,
          t.__P.namespaceURI,
          32 & r.__u ? [s] : null,
          i,
          s ?? Ft(r),
          !!(32 & r.__u),
          a
        ),
        (n.__v = r.__v),
        (n.__.__k[n.__i] = n),
        Kr(i, n, a),
        (r.__e = r.__ = null),
        n.__e != s && Yr(n));
    }
  }

  Pn.__r = 0;
}
function Gr(e, t, n, r, s, i, a, c, u, l, h) {
  let d;
  let f;
  let m;
  let w;
  let p;
  let g;
  let v;
  const _ = (r && r.__k) || qr;
  const t_length = t.length;
  u = oi(n, t, _, u, t_length);

  for (d = 0; d < t_length; d++) {
    if ((m = n.__k[d]) != null) {
      f = m.__i == -1 ? on : _[m.__i] || on;
      m.__i = d;
      g = Co(e, m, f, s, i, a, c, u, l, h);
      w = m.__e;

      m.ref &&
        f.ref != m.ref &&
        (f.ref && No(f.ref, null, m), h.push(m.ref, m.__c || w, m));

      p == null && w != null && (p = w);

      (v = !!(4 & m.__u)) || f.__k === m.__k
        ? (u = Xr(m, u, e, v))
        : typeof m.type == "function" && g !== undefined
        ? (u = g)
        : w && (u = w.nextSibling);

      m.__u &= -7;
    }
  }

  n.__e = p;
  return u;
}
function oi(e, t, n, r, s) {
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
        ? (a = e.__k[i] = en(null, a, null, null, null))
        : Array_isArray(a)
        ? (a = e.__k[i] = en(Re, { children: a }, null, null, null))
        : a.constructor === undefined && a.__b > 0
        ? (a = e.__k[i] =
            en(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
        : (e.__k[i] = a);

      u = i + f;
      a.__ = e;
      a.__b = e.__b + 1;
      c = null;
      (l = a.__i = ri(a, n, u, d)) != -1 && (d--, (c = n[l]) && (c.__u |= 2));

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
        c.__e == r && (r = Ft(c));
        Qr(c, c);
      }
    }
  }
  return r;
}
function Xr(e, t, n, r) {
  let s;
  let i;
  if (typeof e.type == "function") {
    s = e.__k;

    for (i = 0; s && i < s.length; i++) {
      if (s[i]) {
        s[i].__ = e;
        t = Xr(s[i], t, n, r);
      }
    }

    return t;
  }

  if (e.__e != t) {
    r &&
      (t && e.type && !t.parentNode && (t = Ft(e)),
      n.insertBefore(e.__e, t || null));

    t = e.__e;
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function et(e, t) {
  t = t || [];

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some((n) => {
        et(n, t);
      });
    } else {
      t.push(e);
    }
  }

  return t;
}
function ri(e, t, n, r) {
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
  if (r > (h ? 1 : 0)) {
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
function Uo(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    e[t] = n == null ? "" : typeof n != "number" || ti.test(t) ? n : `${n}px`;
  }
}
function dn(e, t, n, r, s) {
  let i;
  let a;
  e: if (t == "style") {
    if (typeof n == "string") {
      e.style.cssText = n;
    } else {
      if (typeof r == "string") {
        e.style.cssText = r = "";
      }

      if (r) {
        for (t in r) {
          if (!n || t in n) {
            Uo(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!r || n[t] != r[t]) {
            Uo(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    i = t != (t = t.replace(jr, "$1"));
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
      if (r) {
        n.u = r.u;
      } else {
        n.u = wo;
        e.addEventListener(t, i ? ro : oo, i);
      }
    } else {
      e.removeEventListener(t, i ? ro : oo, i);
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
function Bo(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t.t == null) {
        t.t = wo++;
      } else if (t.t < n.u) {
        return;
      }
      return n(ne.event ? ne.event(t) : t);
    }
  };
}
function Co(e, t, n, r, s, i, a, c, u, l) {
  let h;
  let d;
  let f;
  let m;
  let w;
  let p;
  let g;
  let v;
  let _;
  let E;
  let N;
  let y;
  let S;
  let C;
  let R;
  let k;
  let A;
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
      v = t.props;
      _ = "prototype" in t_type && t_type.prototype.render;
      E = (h = t_type.contextType) && r[h.__c];
      N = h ? (E ? E.props.value : h.__) : r;

      if (n.__c) {
        g = (d = t.__c = n.__c).__ = d.__E;
      } else {
        _
          ? (t.__c = d = new t_type(v, N))
          : ((t.__c = d = new Je(v, N)),
            (d.constructor = t_type),
            (d.render = ii));

        E && E.sub(d);
        d.state || (d.state = {});
        d.__n = r;
        f = d.__d = true;
        d.__h = [];
        d._sb = [];
      }

      if (_ && d.__s == null) {
        d.__s = d.state;
      }

      if (_ && t_type.getDerivedStateFromProps != null) {
        d.__s == d.state && (d.__s = st({}, d.__s));
        st(d.__s, t_type.getDerivedStateFromProps(v, d.__s));
      }

      m = d.props;
      w = d.state;
      d.__v = t;

      if (f) {
        if (
          _ &&
          t_type.getDerivedStateFromProps == null &&
          d.componentWillMount != null
        ) {
          d.componentWillMount();
        }

        if (_ && d.componentDidMount != null) {
          d.__h.push(d.componentDidMount);
        }
      } else {
        if (
          _ &&
          t_type.getDerivedStateFromProps == null &&
          v !== m &&
          d.componentWillReceiveProps != null
        ) {
          d.componentWillReceiveProps(v, N);
        }

        if (
          t.__v == n.__v ||
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(v, d.__s, N) === false)
        ) {
          if (t.__v != n.__v) {
            d.props = v;
            d.state = d.__s;
            d.__d = false;
          }

          t.__e = n.__e;
          t.__k = n.__k;

          t.__k.some((O) => {
            if (O) {
              O.__ = t;
            }
          });

          for (y = 0; y < d._sb.length; y++) {
            d.__h.push(d._sb[y]);
          }

          d._sb = [];

          if (d.__h.length) {
            a.push(d);
          }

          break e;
        }

        if (d.componentWillUpdate != null) {
          d.componentWillUpdate(v, d.__s, N);
        }

        if (_ && d.componentDidUpdate != null) {
          d.__h.push(() => {
            d.componentDidUpdate(m, w, p);
          });
        }
      }

      d.context = N;
      d.props = v;
      d.__P = e;
      d.__e = false;
      S = ne.__r;
      C = 0;

      if (_) {
        d.state = d.__s;
        d.__d = false;

        if (S) {
          S(t);
        }

        h = d.render(d.props, d.state, d.context);

        for (R = 0; R < d._sb.length; R++) {
          d.__h.push(d._sb[R]);
        }

        d._sb = [];
      } else {
        do {
          d.__d = false;

          if (S) {
            S(t);
          }

          h = d.render(d.props, d.state, d.context);
          d.state = d.__s;
        } while (d.__d && ++C < 25);
      }

      d.state = d.__s;

      if (d.getChildContext != null) {
        r = st(st({}, r), d.getChildContext());
      }

      if (_ && !f && d.getSnapshotBeforeUpdate != null) {
        p = d.getSnapshotBeforeUpdate(m, w);
      }

      k = h;

      if (h != null && h.type === Re && h.key == null) {
        k = Zr(h.props.children);
      }

      c = Gr(e, Array_isArray(k) ? k : [k], t, n, r, s, i, a, c, u, l);
      d.base = t.__e;
      t.__u &= -161;

      if (d.__h.length) {
        a.push(d);
      }

      if (g) {
        d.__E = d.__ = null;
      }
    } catch (O) {
      t.__v = null;

      if (u || i != null) {
        if (O.then) {
          for (
            t.__u |= u ? 160 : 128;
            c && c.nodeType == 8 && c.nextSibling;

          ) {
            c = c.nextSibling;
          }
          i[i.indexOf(c)] = null;
          t.__e = c;
        } else {
          for (A = i.length; A--; ) {
            yo(i[A]);
          }
          io(t);
        }
      } else {
        t.__e = n.__e;
        t.__k = n.__k;

        if (!O.then) {
          io(t);
        }
      }

      ne.__e(O, t, n);
    }
  } else {
    if (i == null && t.__v == n.__v) {
      t.__k = n.__k;
      t.__e = n.__e;
    } else {
      c = t.__e = si(n.__e, t, n, r, s, i, a, u, l);
    }
  }

  if ((h = ne.diffed)) {
    h(t);
  }

  return 128 & t.__u || c;
}
function io(e) {
  if (e && e.__c) {
    e.__c.__e = true;
  }

  if (e && e.__k) {
    e.__k.forEach(io);
  }
}
function Kr(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    No(n[r], n[++r], n[++r]);
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
function Zr(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : Array_isArray(e)
    ? e.map(Zr)
    : st({}, e);
}
function si(e, t, n, r, s, i, a, c, u) {
  let l;
  let h;
  let d;
  let f;
  let m;
  let w;
  let p;
  let g = n.props || on;

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
    if (g !== props && (!c || e.data != props)) {
      e.data = props;
    }
  } else {
    i = i && an.call(e.childNodes);

    if (!c && i != null) {
      g = {};

      for (l = 0; l < e.attributes.length; l++) {
        g[(m = e.attributes[l]).name] = m.value;
      }
    }

    for (l in g) {
      m = g[l];

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
          dn(e, l, null, m, s);
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
          w = m;
          break;
        case "checked":
          p = m;
          break;
        default:
          dn(e, l, m, g[l], s);
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

      Gr(
        t.type == "template" ? e.content : e,
        Array_isArray(f) ? f : [f],
        t,
        n,
        r,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
        i,
        a,
        i ? i[0] : n.__k && Ft(n, 0),
        c,
        u
      );

      if (i != null) {
        for (l = i.length; l--; ) {
          yo(i[l]);
        }
      }
    }

    if (!c) {
      l = "value";

      type == "progress" && w == null
        ? e.removeAttribute("value")
        : w != null &&
          (w !== e[l] ||
            (type == "progress" && !w) ||
            (type == "option" && w != g[l])) &&
          dn(e, l, w, g[l], s);

      l = "checked";
      p != null && p != e[l] && dn(e, l, p, g[l], s);
    }
  }
  return e;
}
function No(e, t, n) {
  try {
    if (typeof e == "function") {
      const r = typeof e.__u == "function";

      if (r) {
        e.__u();
      }

      if (!r || t != null) {
        e.__u = e(t);
      }
    } else {
      e.current = t;
    }
  } catch (s) {
    ne.__e(s, n);
  }
}
function Qr(e, t, n) {
  let r;
  let s;

  if (ne.unmount) {
    ne.unmount(e);
  }

  if ((r = e.ref)) {
    if (!r.current || r.current == e.__e) {
      No(r, null, t);
    }
  }

  if ((r = e.__c) != null) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (i) {
        ne.__e(i, t);
      }
    }
    r.base = null;
    r.__P = null;
  }

  if ((r = e.__k)) {
    for (s = 0; s < r.length; s++) {
      if (r[s]) {
        Qr(r[s], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    yo(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function ii(e, t, n) {
  return this.constructor(e, n);
}
function rn(e, t, n) {
  let r;
  let s;
  let i;
  let a;

  if (t == document) {
    t = document.documentElement;
  }

  if (ne.__) {
    ne.__(e, t);
  }

  s = (r = typeof n == "function") ? null : (n && n.__k) || t.__k;
  i = [];
  a = [];

  Co(
    t,
    (e = ((!r && n) || t).__k = it(Re, null, [e])),
    s || on,
    on,
    t.namespaceURI,
    !r && n ? [n] : s ? null : t.firstChild ? an.call(t.childNodes) : null,
    i,
    !r && n ? n : s ? s.__e : t.firstChild,
    r,
    a
  );

  Kr(i, e, a);
}
function Jr(e, t) {
  rn(e, t, Jr);
}
function es(e, t, n) {
  let r;
  let s;
  let i;
  let a;
  const c = st({}, e.props);

  if (e.type && e.type.defaultProps) {
    a = e.type.defaultProps;
  }

  for (i in t) {
    if (i == "key") {
      r = t[i];
    } else if (i == "ref") {
      s = t[i];
    } else {
      c[i] = t[i] === undefined && a != null ? a[i] : t[i];
    }
  }

  if (arguments.length > 2) {
    c.children = arguments.length > 3 ? an.call(arguments, 2) : n;
  }

  return en(e.type, c, r || e.key, s || e.ref, null);
}
function Vt(e) {
  function t(n) {
    if (!this.getChildContext) {
      r = new Set();
      s = {};
      s[t.__c] = this;
      this.getChildContext = () => s;

      this.componentWillUnmount = () => {
        r = null;
      };

      this.shouldComponentUpdate = function (i) {
        if (this.props.value != i.value) {
          r.forEach((a) => {
            a.__e = true;
            so(a);
          });
        }
      };

      this.sub = (i) => {
        r.add(i);
        const i_componentWillUnmount = i.componentWillUnmount;
        i.componentWillUnmount = () => {
          if (r) {
            r.delete(i);
          }

          if (i_componentWillUnmount) {
            i_componentWillUnmount.call(i);
          }
        };
      };
    }

    return n.children;
  }
  t.__c = `__cC${zr++}`;
  t.__ = e;
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, r) => n.children(r)).contextType = t;

  return t;
}
an = qr.slice;

ne = {
  __e(e, t, n, r) {
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
            s.componentDidCatch(e, r || {});
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

Hr = 0;

Je.prototype.render = Re;
Lt = [];

Vr =
  typeof Promise == "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout;

Wr = (e, t) => e.__v.__b - t.__v.__b;

Pn.__r = 0;
jr = /(PointerCapture)$|Capture$/i;
wo = 0;
oo = Bo(false);
ro = Bo(true);
zr = 0;
let ai = 0;
function o(e, t, n, r, s, i) {
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
    __v: --ai,
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
let Hn;
let Fo;
let Ht = 0;
const ts = [];
const Ce = ne;

const { __b, __r, diffed, __c, unmount, __: __1 } = Ce;

function Wt(e, t) {
  if (Ce.__h) {
    Ce.__h(we, e, Ht || t);
  }

  Ht = 0;
  const n = we.__H || (we.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function P(e) {
  Ht = 1;
  return To(rs, e);
}
function To(e, t, n) {
  const r = Wt(Tt++, 2);
  r.t = e;

  if (
    !r.__c &&
    ((r.__ = [
      n ? n(t) : rs(undefined, t),
      (c) => {
        const u = r.__N ? r.__N[0] : r.__[0];
        const l = r.t(u, c);

        if (u !== l) {
          r.__N = [l, r.__[1]];
          r.__c.setState({});
        }
      },
    ]),
    (r.__c = we),
    !we.__f)
  ) {
    const s = function (c, u, l) {
      if (!r.__c.__H) {
        return true;
      }
      const h = r.__c.__H.__.filter((f) => !!f.__c);
      if (h.every((f) => !f.__N)) {
        return (
          !shouldComponentUpdate || shouldComponentUpdate.call(this, c, u, l)
        );
      }
      let d = r.__c.props !== c;

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

  return r.__N || r.__;
}
function V(e, t) {
  const n = Wt(Tt++, 3);

  if (!Ce.__s && Ro(n.__H, t)) {
    n.__ = e;
    n.u = t;
    we.__H.__h.push(n);
  }
}
function ln(e, t) {
  const n = Wt(Tt++, 4);

  if (!Ce.__s && Ro(n.__H, t)) {
    n.__ = e;
    n.u = t;
    we.__h.push(n);
  }
}
function I(e) {
  Ht = 5;

  return Ne(
    () => ({
      current: e,
    }),
    []
  );
}
function Eo(e, t, n) {
  Ht = 6;

  ln(
    () => {
      if (typeof e == "function") {
        const r = e(t());
        return () => {
          e(null);

          if (r && typeof r == "function") {
            r();
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
function Ne(e, t) {
  const n = Wt(Tt++, 7);

  if (Ro(n.__H, t)) {
    n.__ = e();
    n.__H = t;
    n.__h = e;
  }

  return n.__;
}
function b(e, t) {
  Ht = 8;

  return Ne(() => e, t);
}
function Mn(e) {
  const t = we.context[e.__c];
  const n = Wt(Tt++, 9);
  n.c = e;
  return t ? (n.__ == null && ((n.__ = true), t.sub(we)), t.props.value) : e.__;
}
function ns(e, t) {
  if (Ce.useDebugValue) {
    Ce.useDebugValue(t ? t(e) : e);
  }
}
function os() {
  const e = Wt(Tt++, 11);
  if (!e.__) {
    for (var t = we.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function ci() {
  for (let e; (e = ts.shift()); ) {
    if (e.__P && e.__H) {
      try {
        e.__H.__h.forEach(kn);
        e.__H.__h.forEach(ao);
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

  if (__1) {
    __1(e, t);
  }
};

Ce.__r = (e) => {
  if (__r) {
    __r(e);
  }

  Tt = 0;
  const t = (we = e.__c).__H;

  if (t) {
    if (Hn === we) {
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
      t.__h.forEach(kn);
      t.__h.forEach(ao);
      t.__h = [];
      Tt = 0;
    }
  }

  Hn = we;
};

Ce.diffed = (e) => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c && e_c.__H) {
    e_c.__H.__h.length &&
      ((ts.push(e_c) !== 1 && Fo === Ce.requestAnimationFrame) ||
        ((Fo = Ce.requestAnimationFrame) || li)(ci));

    e_c.__H.__.forEach((n) => {
      if (n.u) {
        n.__H = n.u;
      }

      n.u = undefined;
    });
  }

  Hn = null;
  we = null;
};

Ce.__c = (e, t) => {
  t.some((n) => {
    try {
      n.__h.forEach(kn);

      n.__h = n.__h.filter((r) => !r.__ || ao(r));
    } catch (r) {
      t.some((s) => {
        if (s.__h) {
          s.__h = [];
        }
      });

      t = [];
      Ce.__e(r, n.__v);
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
    e_c.__H.__.forEach((r) => {
      try {
        kn(r);
      } catch (s) {
        t = s;
      }
    });

    e_c.__H = undefined;
    t && Ce.__e(t, e_c.__v);
  }
};

const Yo = typeof requestAnimationFrame == "function";
function li(e) {
  let t;

  const n = () => {
    clearTimeout(r);

    if (Yo) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var r = setTimeout(n, 35);

  if (Yo) {
    t = requestAnimationFrame(n);
  }
}
function kn(e) {
  const t = we;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    e.__c = undefined;
    e_c();
  }

  we = t;
}
function ao(e) {
  const t = we;
  e.__c = e.__();
  we = t;
}
function Ro(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    e.length !== t.length ||
    t.some((n, r) => n !== e[r])
  );
}
function rs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ss(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function co(e, t) {
  for (const n in e) {
    if (n !== "__source" && !(n in t)) {
      return true;
    }
  }
  for (const r in t) {
    if (r !== "__source" && e[r] !== t[r]) {
      return true;
    }
  }
  return false;
}
function is(e, t) {
  const n = t();
  const r = P({ t: { __: n, u: t } });
  const s = r[0].t;
  const [, i] = r;

  ln(() => {
    s.__ = n;
    s.u = t;

    if (Vn(s)) {
      i({ t: s });
    }
  }, [e, n, t]);

  V(() => {
    if (Vn(s)) {
      i({ t: s });
    }

    return e(() => {
      if (Vn(s)) {
        i({ t: s });
      }
    });
  }, [e]);

  return n;
}
function Vn(e) {
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
function as(e) {
  e();
}
function cs(e) {
  return e;
}
function ls() {
  return [false, as];
}
const us = ln;

class lo {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  shouldComponentUpdate(e, t) {
    return co(this.props, e) || co(this.state, t);
  }
}

function ds(e, t) {
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

    return co(this.props, s);
  }
  function r(s) {
    this.shouldComponentUpdate = n;
    return it(e, s);
  }
  r.displayName = `Memo(${e.displayName || e.name})`;
  r.prototype.isReactComponent = true;
  r.__f = true;
  r.type = e;
  return r;
}
(lo.prototype = new Je()).isPureReactComponent = true;

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
const ui =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.forward_ref")) ||
  3911;
function hs(e) {
  class t {
    constructor(n) {
      const r = ss({}, n);
      delete r.ref;
      return e(r, n.ref || null);
    }

    static componentWillUnmount() {
      rn(null, t.v);
      t.v = null;
      t.h = null;
    }
  }

  t.$$typeof = ui;
  t.render = e;
  t.prototype.isReactComponent = true;
  t.__f = true;
  t.displayName = `ForwardRef(${e.displayName || e.name})`;
  return t;
}

const Xo = (e, t) => e == null || et(et(e).map(t));

const di = {
  map: Xo,
  forEach: Xo,
  count(e) {
    return e ? et(e).length : 0;
  },
  only(e) {
    const t = et(e);
    if (t.length !== 1) {
      throw "Children.only";
    }
    return t[0];
  },
  toArray: et,
};

ne.__e = (e, t, n, r) => {
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
  __e(e, t, n, r);
};
function fs(e, t, n) {
  if (e) {
    e.__c &&
      e.__c.__H &&
      (e.__c.__H.__.forEach((r) => {
        if (typeof r.__c == "function") {
          r.__c();
        }
      }),
      (e.__c.__H = null));

    (e = ss({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    e.__k = e.__k && e.__k.map((r) => fs(r, t, n));
  }

  return e;
}
function ms(e, t, n) {
  if (e && n) {
    e.__v = null;

    e.__k = e.__k && e.__k.map((r) => ms(r, t, n));

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
        const r = this.__v.__k[0].__c;
        this.__v.__k[0] = fs(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    const s = t.__a && it(Re, null, e.fallback);

    if (s) {
      s.__u &= -33;
    }

    return [it(Re, null, t.__a || e.children), s];
  }
}

function ps(e) {
  const t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function pe(e) {
  let t;
  let n;
  let r;
  let s = null;
  function i(a) {
    if (!t) {
      e().then(
        (c) => {
          if (c) {
            s = c.default || c;
          }

          r = true;
        },
        (c) => {
          n = c;
          r = true;
        }
      );
    }

    if (n) {
      throw n;
    }

    if (!r) {
      throw t;
    }
    return s ? it(s, a) : null;
  }
  i.displayName = "Lazy";
  i.__f = true;
  return i;
}

class Kt {
  constructor() {
    this.i = null;
    this.l = null;
  }

  render(e) {
    this.i = null;
    this.l = new Map();
    const t = et(e.children);

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

(Ot.prototype = new Je()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    r.o = [];
  }

  r.o.push(t_c);
  const s = ps(r.__v);

  const a = () => {
    if (!i) {
      i = true;
      t_c.__R = null;
      s ? s(c) : c();
    }
  };

  t_c.__R = a;
  var c = () => {
    if (!--r.__u) {
      if (r.state.__a) {
        const u = r.state.__a;
        r.__v.__k[0] = ms(u, u.__c.__P, u.__c.__O);
      }
      let l;
      for (r.setState({ __a: (r.__b = null) }); (l = r.o.pop()); ) {
        l.forceUpdate();
      }
    }
  };

  if (!r.__u++ && 32 & t.__u) {
    if (32 & t.__u) {
      r.setState({ __a: (r.__b = r.__v.__k[0]) });
    }
  }

  e.then(a, a);
};

const Zo = (e, t, n) => {
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
function fi(e) {
  this.getChildContext = () => e.context;

  return e.children;
}
function mi(e) {
  const t = this;
  const e_h = e.h;

  if (t.h && t.h !== e_h) {
    t.componentWillUnmount();
  }

  if (!t.v) {
    for (var r = t.__v; r !== null && !r.__m && r.__ !== null; ) {
      r = r.__;
    }
    t.h = e_h;

    t.v = {
      nodeType: 1,
      parentNode: e_h,
      childNodes: [],
      __k: { __m: r.__m },
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

  rn(it(fi, { context: t.context }, e.__v), t.v);
}
function wt(e, t) {
  const n = it(mi, { __v: e, h: t });
  n.containerInfo = t;
  return n;
}

(Kt.prototype = new Je()).__a = function (e) {
  const t = this;
  const n = ps(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return (s) => {
    const i = () => {
      if (t.props.revealOrder) {
        r.push(s);
        Zo(t, e, r);
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

Kt.prototype.componentDidUpdate = Kt.prototype.componentDidMount = function () {
  const e = this;
  this.l.forEach((t, n) => {
    Zo(e, n, t);
  });
};

const gs =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.element")) ||
  60103;

const pi =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const gi = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const vi = /[A-Z0-9]/g;
const _i = typeof document !== "undefined";

const wi = (e) =>
  (typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
  ).test(e);

function vs(e, t, n) {
  if (t.__k == null) {
    t.textContent = "";
  }

  rn(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function yi(e, t, n) {
  Jr(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
Je.prototype.isReactComponent = {};

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach((e) => {
  Object.defineProperty(Je.prototype, e, {
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

function Ci() {}
function Ni() {
  return this.cancelBubble;
}
function Ti() {
  return this.defaultPrevented;
}
ne.event = (e) => {
  if (event) {
    e = event(e);
  }

  e.persist = Ci;
  e.isPropagationStopped = Ni;
  e.isDefaultPrevented = Ti;
  e.nativeEvent = e;
  return e.nativeEvent;
};
let ko;

const Ei = {
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
            (_i && a === "children" && type === "noscript") ||
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
              wi(props.type)
            ) {
              if (u === "onfocus") {
                a = "onfocusin";
              } else if (u === "onblur") {
                a = "onfocusout";
              } else if (gi.test(a)) {
                a = u;
              }
            } else {
              u = a = "oninput";
            }
          } else if (i && pi.test(a)) {
            a = a.replace(vi, "-$&").toLowerCase();
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
        s.value = et(props.children).forEach((l) => {
          l.props.selected = s.value.includes(l.props.value);
        });
      }

      if (type == "select" && s.defaultValue != null) {
        s.value = et(props.children).forEach((l) => {
          l.props.selected = s.multiple
            ? s.defaultValue.includes(l.props.value)
            : s.defaultValue == l.props.value;
        });
      }

      if (props.class && !props.className) {
        s.class = props.class;
        Object.defineProperty(s, "className", Ei);
      } else if (
        (props.className && !props.class) ||
        (props.class && props.className)
      ) {
        s.class = s.className = props.className;
      }

      t.props = s;
    })(e);
  }

  e.$$typeof = gs;

  if (vnode) {
    vnode(e);
  }
};
ne.__r = (e) => {
  if (_r_1) {
    _r_1(e);
  }

  ko = e.__c;
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

  ko = null;
};
const Ri = {
  ReactCurrentDispatcher: {
    current: {
      readContext(e) {
        return ko.__n[e.__c].props.value;
      },
      useCallback: b,
      useContext: Mn,
      useDebugValue: ns,
      useDeferredValue: cs,
      useEffect: V,
      useId: os,
      useImperativeHandle: Eo,
      useInsertionEffect: us,
      useLayoutEffect: ln,
      useMemo: Ne,
      useReducer: To,
      useRef: I,
      useState: P,
      useSyncExternalStore: is,
      useTransition: ls,
    },
  },
};
function ki(e) {
  return it.bind(null, e);
}
function $n(e) {
  return !!e && e.$$typeof === gs;
}
function bi(e) {
  return $n(e) && e.type === Re;
}
function Si(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function Ii(e) {
  return $n(e) ? es(...arguments) : e;
}
function _s(e) {
  return !!e.__k && (rn(null, e), true);
}
function Pi(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const Ai = (e, t) => e(t);

const xi = (e, t) => e(t);

const ws = Re;
const Li = $n;

const Zt = {
  useState: P,
  useId: os,
  useReducer: To,
  useEffect: V,
  useLayoutEffect: ln,
  useInsertionEffect: us,
  useTransition: ls,
  useDeferredValue: cs,
  useSyncExternalStore: is,
  startTransition: as,
  useRef: I,
  useImperativeHandle: Eo,
  useMemo: Ne,
  useCallback: b,
  useContext: Mn,
  useDebugValue: ns,
  version: "18.3.1",
  Children: di,
  render: vs,
  hydrate: yi,
  unmountComponentAtNode: _s,
  createPortal: wt,
  createElement: it,
  createContext: Vt,
  createFactory: ki,
  cloneElement: Ii,
  createRef: ni,
  Fragment: Re,
  isValidElement: $n,
  isElement: Li,
  isFragment: bi,
  isMemo: Si,
  findDOMNode: Pi,
  Component: Je,
  PureComponent: lo,
  memo: ds,
  forwardRef: hs,
  flushSync: xi,
  unstable_batchedUpdates: Ai,
  StrictMode: ws,
  Suspense: Ot,
  SuspenseList: Kt,
  lazy: pe,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ri,
};

function Oi(e) {
  return {
    render(t) {
      vs(t, e);
    },
    unmount() {
      _s(e);
    },
  };
}
const Mi = "modulepreload";

const $i = (e) => `/${e}`;

const nr = {};

const ge = (t, n, r) => {
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
        l = $i(l);

        if (l in nr) {
          return;
        }

        nr[l] = true;
        const h = l.endsWith(".css");
        const d = h ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${d}`)) {
          return;
        }
        const f = document.createElement("link");
        f.rel = h ? "stylesheet" : Mi;

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
          return new Promise((m, w) => {
            f.addEventListener("load", m);

            f.addEventListener("error", () =>
              w(new Error(`Unable to preload CSS for ${l}`))
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

const Di = {};
function hn(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Ui(e, t, n) {
  let r;
  const s = /(?:\?([^#]*))?(#.*)?$/;
  const i = e.match(s);
  const a = {};
  if (i && i[1]) {
    for (let c = i[1].split("&"), u = 0; u < c.length; u++) {
      const l = c[u].split("=");
      a[decodeURIComponent(l[0])] = decodeURIComponent(l.slice(1).join("="));
    }
  }
  e = uo(e.replace(s, ""));
  t = uo(t || "");
  for (let h = Math.max(e.length, t.length), d = 0; d < h; d++) {
    if (t[d] && t[d].charAt(0) === ":") {
      const f = t[d].replace(/(^:|[+*?]+$)/g, "");
      const m = (t[d].match(/[+*?]+$/) || Di)[0] || "";
      const w = ~m.indexOf("+");
      const p = ~m.indexOf("*");
      const g = e[d] || "";
      if (!g && !p && (!m.includes("?") || w)) {
        r = false;
        break;
      }
      a[f] = decodeURIComponent(g);

      if (w || p) {
        a[f] = e.slice(d).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[d] !== e[d]) {
      r = false;
      break;
    }
  }
  return (n.default === true || r !== false) && a;
}
function Bi(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function Fi(e, t) {
  e.index = t;

  e.rank = ((n) => (n.props.default ? 0 : uo(n.props.path).map(Hi).join("")))(
    e
  );

  return e.props;
}
function uo(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function Hi(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const Vi = {};
const Mt = [];
const tn = [];
let He = null;
const bo = { url: So() };
const ys = Vt(bo);
function Wi() {
  const e = Mn(ys);
  if (e === bo) {
    const t = P()[1];
    V(() => {
      tn.push(t);

      return () => tn.splice(tn.indexOf(t), 1);
    }, []);
  }
  return [e, $];
}
function So() {
  let e;
  return `${
    (e =
      He && He.location
        ? He.location
        : He && He.getCurrentLocation
        ? He.getCurrentLocation()
        : typeof location !== "undefined"
        ? location
        : Vi).pathname || ""
  }${e.search || ""}`;
}

export function $(e, t = false) {
  if (typeof e != "string" && e.url) {
    t = e.replace;
    e = e.url;
  }

  if (
    ((n) => {
      for (let r = Mt.length; r--; ) {
        if (Mt[r].canRoute(n)) {
          return true;
        }
      }
      return false;
    })(e)
  ) {
    ((n, r = "push") => {
      if (He && He[r]) {
        He[r](n);
      } else if (typeof history !== "undefined" && history[`${r}State`]) {
        history[`${r}State`](null, null, n);
      }
    })(e, t ? "replace" : "push");
  }

  return Cs(e);
}

function Cs(e) {
  let t = false;
  for (let n = 0; n < Mt.length; n++) {
    if (Mt[n].routeTo(e)) {
      t = true;
    }
  }
  return t;
}
function ji(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return $(t);
    }
  }
}
function zi(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function qi(e) {
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
        if (ji(e_target)) {
          return zi(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function Ns(e) {
  if (e.history) {
    He = e.history;
  }

  this.state = { url: e.url || So() };
}
hn((Ns.prototype = new Je()), {
  shouldComponentUpdate(e) {
    return (
      e.static !== true ||
      e.url !== this.props.url ||
      e.url !== this.props.url ||
      e.onChange !== this.props.onChange
    );
  },
  canRoute(e) {
    const t = et(this.props.children);
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

    if (!or) {
      or = true;

      He ||
        addEventListener("popstate", () => {
          Cs(So());
        });

      addEventListener("click", qi);
    }

    Mt.push(this);

    if (He) {
      this.u = He.listen((t) => {
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

    Mt.splice(Mt.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(Fi).sort(Bi);

    for (const r of e) {
      const s = Ui(t, r.props.path, r.props);
      if (s) {
        return [r, s];
      }
    }
  },
  render(e, t) {
    let n;
    let r;
    const e_onChange = e.onChange;
    const t_url = t.url;
    let a = this.c;
    const c = this.g(et(e.children), t_url);

    if (c) {
      r = es(
        c[0],
        hn(hn({ url: t_url, matches: (n = c[1]) }, n), {
          key: undefined,
          ref: undefined,
        })
      );
    }

    if (t_url !== (a && a.url)) {
      hn(
        bo,
        (a = this.c =
          {
            url: t_url,
            previous: a && a.url,
            current: r,
            path: r ? r.props.path : null,
            matches: n,
          })
      );

      a.router = this;
      a.active = r ? [r] : [];
      for (let u = tn.length; u--; ) {
        tn[u]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return it(ys.Provider, { value: a }, r);
  },
});

const rr = (e) => {
  let t;
  const n = new Set();

  const r = (l, h) => {
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
    setState: r,
    getState: s,
    getInitialState: () => u,
    subscribe: (l) => {
      n.add(l);

      return () => n.delete(l);
    },
  };

  const u = (t = e(r, s, c));
  return c;
};

const Yi = (e) => (e ? rr(e) : rr);

const Gi = (e) => e;

function Xi(e, t = Gi) {
  const n = Zt.useSyncExternalStore(
    e.subscribe,
    Zt.useCallback(() => t(e.getState()), [e, t]),
    Zt.useCallback(() => t(e.getInitialState()), [e, t])
  );
  Zt.useDebugValue(n);
  return n;
}

const sr = (e) => {
  const t = Yi(e);

  const n = (r) => Xi(t, r);

  Object.assign(n, t);
  return n;
};

const ct = (e) => (e ? sr(e) : sr);

function Io(e, t) {
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

const ho = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise
      ? n
      : {
          then(r) {
            return ho(r)(n);
          },
          catch(r) {
            return this;
          },
        };
  } catch (n) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return ho(r)(n);
      },
    };
  }
};

const Po = (e, t) => (n, r, s) => {
  let i = {
    storage: Io(() => localStorage),
    partialize: (p) => p,
    version: 0,
    merge: (p, g) => ({
      ...g,
      ...p,
    }),
    ...t,
  };

  let a = false;
  const c = new Set();
  const u = new Set();
  let i_storage = i.storage;
  if (!i_storage) {
    return e(
      (...p) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        );

        n(...p);
      },
      r,
      s
    );
  }

  const h = () => {
    const p = i.partialize({ ...r() });
    return i_storage.setItem(i.name, { state: p, version: i.version });
  };

  const s_setState = s.setState;
  s.setState = (p, g) => {
    s_setState(p, g);
    return h();
  };
  const f = e(
    (...p) => {
      n(...p);
      return h();
    },
    r,
    s
  );
  s.getInitialState = () => f;
  let m;
  const w = () => {
    let g;
    if (!i_storage) {
      return;
    }
    a = false;

    c.forEach((_) => {
      let E;
      return _((E = r()) != null ? E : f);
    });

    const v =
      (g = i.onRehydrateStorage) == null ||
      g.call(i, (p = r()) != null ? p : f) ||
      g.call(i, (p = r()) != null ? p : f) ||
      undefined;
    return ho(i_storage.getItem.bind(i_storage))(i.name)
      .then((_) => {
        if (_) {
          if (typeof _.version == "number" && _.version !== i.version) {
            if (i.migrate) {
              const E = i.migrate(_.state, _.version);
              return E instanceof Promise
                ? E.then((N) => [true, N])
                : [true, E];
            }
            console.error(
              "State loaded from storage couldn't be migrated since no migrate function was provided"
            );
          } else {
            return [false, _.state];
          }
        }
        return [false, undefined];
      })
      .then((_) => {
        let E;
        const [N, y] = _;
        m = i.merge(y, (E = r()) != null ? E : f);
        n(m, true);

        if (N) {
          return h();
        }
      })
      .then(() => {
        v?.(m, undefined);
        m = r();
        a = true;

        u.forEach((_) => _(m));
      })
      .catch((_) => {
        v?.(undefined, _);
      });
  };

  s.persist = {
    setOptions: (p) => {
      i = { ...i, ...p };

      if (p.storage) {
        i_storage = p.storage;
      }
    },
    clearStorage: () => {
      i_storage?.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => w(),
    hasHydrated: () => a,
    onHydrate: (p) => {
      c.add(p);

      return () => {
        c.delete(p);
      };
    },
    onFinishHydration: (p) => {
      u.add(p);

      return () => {
        u.delete(p);
      };
    },
  };

  if (!i.skipHydration) {
    w();
  }

  return m || f;
};

const Zi = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const Qi = () => {
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

const bn = (e) => {
  const t = e === "system" ? Zi() : e;
  document.documentElement.setAttribute("data-theme", t);
};

const Ji = ct()(
  Po(
    (e) => ({
      theme: Qi(),

      setTheme: (t) => {
        bn(t);
        e({ theme: t });
      },

      toggleTheme: () =>
        e((t) => {
          const n = t.theme === "light" ? "dark" : "light";
          bn(n);
          return { theme: n };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (e) => {
        if (e?.theme) {
          bn(e.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (Ji.getState().theme === "system") {
        bn("system");
      }
    });
}

const Ts = ct((e) => ({
  isOpen: false,
  images: [],
  initialIndex: 0,
  open: (t, n = 0) => e({ isOpen: true, images: t, initialIndex: n }),
  close: () => e({ isOpen: false, images: [], initialIndex: 0 }),
}));

const Ue = {
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

function Se(e) {
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
function ea(e) {
  return "accessToken" in e;
}
function ta(e) {
  return "accessToken" in e;
}
const na = 4000; /* 4e3 */

const Bt = ct((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const s = n.duration ?? na;

    e((i) => ({
      toasts: [...i.toasts, { ...n, id: r, duration: s }],
    }));

    if (s > 0) {
      setTimeout(() => {
        t().removeToast(r);
      }, s);
    }

    return r;
  },

  removeToast: (n) => {
    e((r) => ({
      toasts: r.toasts.filter((s) => s.id !== n),
    }));
  },

  clearAll: () => {
    e({ toasts: [] });
  },
}));

const Qe = {
  success: (e, t) =>
    Bt.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) =>
    Bt.getState().addToast({ type: "error", message: e, duration: t }),
  warning: (e, t) =>
    Bt.getState().addToast({ type: "warning", message: e, duration: t }),
  info: (e, t) =>
    Bt.getState().addToast({ type: "info", message: e, duration: t }),
};

function oa() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    t = crypto.randomUUID();
    localStorage.setItem(e, t);
  }

  return t;
}
const ir = oa();
class Es {
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
    if (t.status !== Ue.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        Qe.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      Qe.error(t.message || "Произошла ошибка");
    }
  }
  buildUrl(t) {
    const n = this.baseURL.replace(/\/$/, "");
    const r = t.startsWith("/") ? t : `/${t}`;
    return `${n}${r}`;
  }
  buildHeaders(t) {
    const n = new Headers({ ...this.defaultHeaders, ...t });

    if (this.accessToken) {
      n.set("Authorization", `Bearer ${this.accessToken}`);
    }

    n.set("X-Device-Id", ir);
    return n;
  }
  async handleResponse(t) {
    if (t.status === Ue.NO_CONTENT) {
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
      const r = n;
      const r_error = r.error;
      const i = r_error && typeof r_error == "object" ? r_error : r;
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
      case Ue.BAD_REQUEST: {
        return he.BAD_REQUEST;
      }
      case Ue.UNAUTHORIZED: {
        return he.UNAUTHORIZED;
      }
      case Ue.FORBIDDEN: {
        return he.ACCESS_DENIED;
      }
      case Ue.NOT_FOUND: {
        return he.ENTITY_NOT_FOUND;
      }
      case Ue.CONFLICT: {
        return he.ENTITY_ALREADY_EXISTS;
      }
      case Ue.UNPROCESSABLE_ENTITY: {
        return he.VALIDATION_ERROR;
      }
      case Ue.TOO_MANY_REQUESTS: {
        return he.RATE_LIMIT_EXCEEDED;
      }
      default: {
        return he.UNKNOWN_ERROR;
      }
    }
  }
  createApiError(t, n, r, s) {
    const i = new Error(n);
    i.status = t;
    i.code = r;
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
  async executeRequest(t, n, r, s, i = false) {
    const a = this.buildUrl(n);
    const c = this.buildHeaders(s?.headers);
    const u = new AbortController();
    const l = s?.timeout ?? this.defaultTimeout;

    const h = setTimeout(() => u.abort(), l);

    try {
      const d = await fetch(a, {
        method: t,
        headers: c,
        body: r ? JSON.stringify(r) : undefined,
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
      if (d.status === Ue.UNAUTHORIZED && !i && !f && this.accessToken) {
        const m = await this.refreshAccessToken();
        if (m) {
          this.setAccessToken(m);
          return this.executeRequest(t, n, r, s, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Ue.UNAUTHORIZED,
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
  async post(t, n, r) {
    return this.executeRequest("POST", t, n, r);
  }
  async put(t, n, r) {
    return this.executeRequest("PUT", t, n, r);
  }
  async patch(t, n, r) {
    return this.executeRequest("PATCH", t, n, r);
  }
  async delete(t, n) {
    return this.executeRequest("DELETE", t, undefined, n);
  }
  async head(t, n) {
    const r = this.buildUrl(t);
    const s = this.buildHeaders(n?.headers);
    const i = new AbortController();
    const a = n?.timeout ?? this.defaultTimeout;

    const c = setTimeout(() => i.abort(), a);

    try {
      const u = await fetch(r, {
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
  async uploadFormData(t, n, r, s = false) {
    const i = this.buildUrl(t);
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": ir };

    if (this.accessToken) {
      a.Authorization = `Bearer ${this.accessToken}`;
    }

    const c = new AbortController();
    const u = r?.timeout ?? this.defaultTimeout;

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

      if (h.status === Ue.UNAUTHORIZED && !s && this.accessToken) {
        const d = await this.refreshAccessToken();
        if (d) {
          this.setAccessToken(d);
          return this.uploadFormData(t, n, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Ue.UNAUTHORIZED,
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
const F = new Es({ baseURL: "/api", timeout: 30000 /* 3e4 */ });
const Ie = new Es({ baseURL: "/api/v1/auth", timeout: 30000 /* 3e4 */ });

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

const ft = {
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

class Ao {
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
      const r = this.cache.keys().next().value;

      if (r) {
        this.cache.delete(r);
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
    const r = this.getAge(t);
    return r !== undefined && r < n;
  }
  get size() {
    return this.cache.size;
  }
  cleanup() {
    const t = Date.now();
    for (const [n, r] of this.cache.entries()) {
      if (t - r.timestamp > this.ttl) {
        this.cache.delete(n);
      }
    }
  }
}
function ar(e) {
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
const It = new Ao(100, 300 * 1000 /* 1e3 */);
const ra = 60 * 1000; /* 1e3 */
setInterval(() => It.cleanup(), 120 * 1000 /* 1e3 */);
const fn = {
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
    return ar(e);
  },
  async updateProfile(e) {
    return await F.put(H.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = It.get(t);

    if (n && It.isFresh(t, ra)) {
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
    const r = ar(n);
    It.set(t, r);
    return r;
  },
  invalidateProfileCache(e) {
    It.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const r = It.get(n);

    if (r) {
      It.set(n, { ...r, ...t });
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
function zt(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const mt = new Ao(50, 300 * 1000 /* 1e3 */);
const sa = 60 * 1000; /* 1e3 */
setInterval(() => mt.cleanup(), 120 * 1000 /* 1e3 */);
function ia(e) {
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
function Pt(e) {
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
  const r = e.stats?.reactions ?? e.likesCount ?? 0;
  const s = e.stats?.views ?? e.viewsCount ?? 0;
  const i = e.stats?.comments ?? e.commentsCount ?? 0;
  const a = e.stats?.reposts ?? e.repostsCount ?? 0;
  const c = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const u = e.text ?? e.content ?? "";
  return {
    id: e.id,
    author: ia(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: u,
    spans: e.spans ?? [],
    attachments: n,
    reactions: { total: r, myReaction: c },
    stats: { views: s, comments: i, reposts: a },
    originalPost: e.originalPost ? Pt(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const Me = {
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

    const r = n.toString();
    const s = `${H.posts.list}${r ? `?${r}` : ""}`;
    const i = await F.get(s);
    return { data: i.data.posts.map(Pt), nextCursor: zt(i.data) };
  },
  async getPost(e) {
    const t = await F.get(H.posts.single(e));
    return Pt(t.data);
  },
  async getUserWall(e, t = {}) {
    if (!t.cursor) {
      const n = e;
      const r = mt.get(n);
      const s = r && r.pinnedPostId === (t.pinnedPostId ?? null);

      if (r && s && mt.isFresh(n, sa)) {
        this._fetchAndCacheWall(e, t, n).catch(() => {});
        return { data: r.posts, nextCursor: r.nextCursor };
      }

      if (r && s) {
        this._fetchAndCacheWall(e, t, n).catch(() => {});
        return { data: r.posts, nextCursor: r.nextCursor };
      }

      return this._fetchAndCacheWall(e, t, n);
    }
    return this._fetchWall(e, t);
  },
  async _fetchAndCacheWall(e, t, n) {
    const r = await this._fetchWall(e, t);

    mt.set(n, {
      posts: r.data,
      nextCursor: r.nextCursor,
      pinnedPostId: t.pinnedPostId ?? null,
    });

    return r;
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

    const r = n.toString();
    const s = `${H.posts.byUser(e)}${r ? `?${r}` : ""}`;
    const i = await F.get(s);
    return { data: i.data.posts.map(Pt), nextCursor: zt(i.data) };
  },
  invalidateWallCache(e) {
    mt.delete(e);
  },
  updatePostInWallCache(e, t, n) {
    const r = mt.get(e);
    if (r) {
      const s = r.posts.map((i) => (i.id === t ? { ...i, ...n } : i));
      mt.set(e, { ...r, posts: s });
    }
  },
  removePostFromWallCache(e, t) {
    const n = mt.get(e);
    if (n) {
      const r = n.posts.filter((s) => s.id !== t);
      mt.set(e, { ...n, posts: r });
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

    const r = n.toString();
    const s = `${H.posts.byUser(e)}${r ? `?${r}` : ""}`;
    const i = await F.get(s);
    return { data: i.data.posts.map(Pt), nextCursor: zt(i.data) };
  },
  async getUserLikedPosts(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const r = n.toString();
    const s = `${H.posts.likedByUser(e)}${r ? `?${r}` : ""}`;
    const i = await F.get(s);
    return { data: i.data.posts.map(Pt), nextCursor: zt(i.data) };
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

    const r = n.toString();
    const s = `${H.hashtags.posts(e)}${r ? `?${r}` : ""}`;
    const i = await F.get(s);
    return { data: i.data.posts.map(Pt), nextCursor: zt(i.data) };
  },
};

const aa = { new: "newest", old: "oldest", popular: "popular" };
function ca(e) {
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
function fo(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const s = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: ca(e.author),
    parentId: e.parentId,
    rootId: e.rootId ?? null,
    text: s,
    spans: e.spans ?? [],
    attachments: e.attachments ?? [],
    reactions: { total: t, myReaction: r },
    stats: { replies: n },
    replyTo: e.replyTo ?? null,
    previewReplies:
      e.previewReplies ?? e.replies
        ? (e.previewReplies ?? e.replies).map(fo)
        : undefined,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const ot = {
  async getComments(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.sort) {
      n.set("sort", aa[t.sort]);
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const r = n.toString();
    const s = `${H.posts.comments(e)}${r ? `?${r}` : ""}`;
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
    return { data: a.map(fo), nextCursor: c };
  },
  async getReplies(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const r = n.toString();
    const s = `${H.comments.replies(e)}${r ? `?${r}` : ""}`;
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
    return { data: a.map(fo), nextCursor: c };
  },
  async createComment(e, t, n, r, s) {
    return await F.post(H.posts.comments(e), {
      content: t,
      attachmentIds: s?.map((i) => i.mediaId),
    });
  },
  async createReply(e, t, n, r, s) {
    return await F.post(H.comments.replies(e), {
      content: t,
      replyToUserId: r,
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

const la = {
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

function Rs(e) {
  const t = la[e.type] ?? "follow";
  const n = e.entityId ?? e.targetId ?? null;
  const r = e.isRead ?? e.read ?? false;
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
    isRead: r,
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

const Et = {
  async getNotifications(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

    if (r > 0) {
      t.set("offset", r.toString());
    }

    const s = t.toString();
    const i = `${H.notifications.list}${s ? `?${s}` : ""}`;
    const a = await F.get(i);
    const c = a.notifications ?? a.data ?? [];
    const l = a.hasMore ?? false ? String(r + c.length) : null;
    return { notifications: c.map(Rs), nextCursor: l };
  },
  async getUnreadCount() {
    return (await F.get(H.notifications.count)).count;
  },
  async markAsRead(e) {
    if (e.length === 1) {
      const r = await F.post(H.notifications.markRead(e[0]));
      return { markedCount: r.markedCount ?? r.marked ?? 1 };
    }
    const t = 20;
    let n = 0;
    for (let r = 0; r < e.length; r += t) {
      const s = e.slice(r, r + t);
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

const ua = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const da = ["video/mp4", "video/webm", "video/quicktime"];
const mo = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const ha = ".mp4,.webm,.mov";

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
    return ua.includes(e.type);
  },
  isValidVideoType(e) {
    return da.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

function cr(e) {
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
const pt = ct((e) => ({
  statuses: {},

  setStatuses: (t) =>
    e((n) => ({
      statuses: { ...n.statuses, ...t },
    })),

  setStatus: (t, n) =>
    e((r) => ({
      statuses: { ...r.statuses, [t]: n },
    })),

  clear: () => e({ statuses: {} }),
}));
let po = new Set();
function fa() {
  if (!Wn) {
    setTimeout(async () => {
      Wn = null;
      const e = Array.from(po);
      po.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const r = await go.batchFollowStatus(n);
            pt.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50);
  }
}
function ma(e) {
  const t = Te((i) => i.profile?.id);

  const n = pt((i) => i.statuses);

  const r = I("");

  V(() => {
    if (!t) {
      return;
    }

    const i = e.filter((c) => c !== t && n[c] === undefined);

    const a = i.sort().join(",");
    if (!(a === r.current || a === "")) {
      r.current = a;
      for (const c of i) {
        po.add(c);
      }
      fa();
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
const At = new Ao(500, 120 * 1000 /* 1e3 */);
setInterval(() => At.cleanup(), 60 * 1000 /* 1e3 */);

const go = {
  async followUser(e) {
    const t = await F.post(H.users.follow(e), {});
    At.delete(e);
    pt.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await F.delete(H.users.follow(e));
    At.delete(e);
    pt.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const s = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", s.toString());
    const i = n.toString();
    const a = `${H.users.followers(e)}${i ? `?${i}` : ""}`;
    const c = await F.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.followers ?? [];
    const d = u.pagination?.hasMore ?? false ? String(s + 1) : null;
    return { data: l.map(cr), nextCursor: d };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const s = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", s.toString());
    const i = n.toString();
    const a = `${H.users.following(e)}${i ? `?${i}` : ""}`;
    const c = await F.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.following ?? [];
    const d = u.pagination?.hasMore ?? false ? String(s + 1) : null;
    return { data: l.map(cr), nextCursor: d };
  },
  async blockUser(e) {
    await F.post(H.users.block(e), {});
    At.delete(e);
  },
  async unblockUser(e) {
    await F.delete(H.users.block(e));
    At.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", r.toString());
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
    const d = h ? String(r + 1) : null;
    return { users: l, nextCursor: d, hasMore: h };
  },
  async batchFollowStatus(e) {
    if (e.length === 0) {
      return {};
    }

    return (await F.post(H.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    At.delete(e);
  },
  clearSocialCache() {
    At.clear();
  },
};

const mn = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};

const pa = {
  async createReport(e) {
    const t = await F.post(H.reports.create, e);
    return t?.data ?? t;
  },
};

const ga = {
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

const pn = {
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

const Te = ct()(
  Po(
    (e, t) => {
      F.setRefreshTokenCallback(async () => {
        try {
          const r = await ft.refreshSession();
          F.setAccessToken(r.accessToken);
          Ie.setAccessToken(r.accessToken);
          return r.accessToken;
        } catch (r) {
          return Se(r) && r.status >= 500
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
        ...pn,
        register: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await ft.register(r);

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: s.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const i = Se(s) ? s.message : "Registration failed";
            const a = Se(s) ? s.code : null;
            e({ status: "unauthenticated", error: i, errorCode: a });
            throw s;
          }
        },
        login: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await ft.login(r);
            if (ta(s)) {
              F.setAccessToken(s.accessToken);
              Ie.setAccessToken(s.accessToken);
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                    status: "authenticated",
                    pendingEmail: null,
                    email: r.email,
                  });
                }
              } catch (a) {
                if (
                  Se(a) &&
                  (a.code === he.ENTITY_NOT_FOUND || a.status === 404)
                ) {
                  e({
                    status: "needs_profile",
                    pendingEmail: null,
                    email: r.email,
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
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: i.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const i = Se(s) ? s.message : "Login failed";
            const a = Se(s) ? s.code : null;
            e({ status: "unauthenticated", error: i, errorCode: a });
            throw s;
          }
        },
        verifyOtp: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail, pendingPassword, flowToken } = t();
          try {
            const c = await ft.verifyOtp({
              email: pendingEmail || "",
              password: pendingPassword || "",
              otp: r,
              flowToken: flowToken || "",
            });
            e({ pendingPassword: null });

            if (ea(c)) {
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
                  Se(l) &&
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
            const u = Se(c) ? c.message : "Verification failed";
            const l = Se(c) ? c.code : null;
            e({ status: "needs_verification", error: u, errorCode: l });
            throw c;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail, flowToken } = t();
          try {
            await ft.resendOtp({
              email: pendingEmail || "",
              flowToken: flowToken || "",
            });
          } catch (i) {
            const a = Se(i) ? i.message : "Failed to resend code";
            const c = Se(i) ? i.code : null;
            e({ error: a, errorCode: c });
            throw i;
          }
        },
        createProfile: async (r) => {
          e({ error: null, errorCode: null });
          try {
            await fn.createProfile(r);
            await t().fetchProfile();
            e({ status: "authenticated" });
          } catch (s) {
            const i = Se(s) ? s.message : "Failed to create profile";
            const a = Se(s) ? s.code : null;
            e({ error: i, errorCode: a });
            throw s;
          }
        },
        logout: async () => {
          try {
            await ft.logout();
          } catch {
          } finally {
            F.setAccessToken(null);
            Ie.setAccessToken(null);
            e({ ...pn, status: "unauthenticated" });
          }
        },
        logoutAll: async () => {
          try {
            await ft.logoutAll();
          } catch {
          } finally {
            F.setAccessToken(null);
            Ie.setAccessToken(null);
            e({ ...pn, status: "unauthenticated" });
          }
        },
        refreshSession: async () => {
          try {
            const r = await ft.refreshSession();
            F.setAccessToken(r.accessToken);
            Ie.setAccessToken(r.accessToken);
            return r.accessToken;
          } catch (r) {
            return Se(r) && r.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const r = await fn.getMyProfile();
          if (r.isDeleted) {
            e({
              status: "account_deleted",
              profile: null,
              canRestore: r.canRestore ?? false,
              restoreDeadline: r.restoreDeadline ?? null,
            });
            return;
          }
          e({ profile: r });
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
                Se(i) &&
                (i.code === he.ENTITY_NOT_FOUND || i.status === 404)
              ) {
                e({ status: "needs_profile" });
              } else {
                throw i;
              }
            }
          } catch (s) {
            if (Se(s) && s.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await fn.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await fn.restoreAccount();
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
          e({ ...pn, status: "unauthenticated" });
        },
        setProfile: (r) => {
          e({ profile: r });
        },
      };
    },
    {
      name: "auth-storage",
      storage: Io(() => sessionStorage),
      partialize: (e) => ({
        profile: e.profile,
        email: e.email,
      }),
    }
  )
);

const va = () => Te((e) => e.status);

const ks = () => Te((e) => e.profile);

const B_ = () => Te((e) => e.status === "authenticated");

const Sn = ct()(
  Po(
    (e) => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      },
    }),
    { name: "settings", storage: Io(() => localStorage) }
  )
);

const We = new Map();
const _a = 60 * 1000; /* 1e3 */
const wa = 300 * 1000; /* 1e3 */
const lr = 20;
const ur = 500;
function ya() {
  const e = Date.now();
  for (const [t, n] of We.entries()) {
    if (e - n.timestamp > wa) {
      We.delete(t);
    }
  }
  if (We.size > lr) {
    const t = Array.from(We.entries()).sort(
      (r, s) => r[1].timestamp - s[1].timestamp
    );
    t.slice(0, t.length - lr).forEach(([r]) => We.delete(r));
  }
}

const ue = ct((e, t) => ({
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
        const a = await Me.getFeed(activeFeed, { limit: 20 });
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
        const a = await Me.getFeed(activeFeed, {
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

  createPost: async (n, r, s = [], i = [], a) => {
    const c = Te.getState().profile;
    if (!c) {
      throw new Error("Not authenticated");
    }
    try {
      const u = i.map(({ mediaId: f }) => f);

      const { id: id_1 } = await Me.createPost({
        wallOwnerId: n !== c.id ? n : undefined,
        text: r,
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
        text: r,
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

      Me.invalidateWallCache(n);
      try {
        const f = await Me.getPost(id_1);
        e((m) => ({
          posts: m.posts.map((w) => (w.id === id_1 ? f : w)),
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
    const r = t().posts.find((s) => s.id === n);
    if (r) {
      e({ currentPost: r, currentPostLoading: false, currentPostError: false });
      return;
    }
    if (t().currentPost?.id !== n) {
      e({
        currentPostLoading: true,
        currentPost: null,
        currentPostError: false,
      });
      try {
        const s = await Me.getPost(n);
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
    ya();
    const s = Sn.getState().commentsSort;
    const i = n;
    const a = We.get(i);
    const c = Date.now();
    if (a && a.sort === s) {
      if (c - a.timestamp < _a) {
        e({
          comments: a.comments,
          commentsNextCursor: a.nextCursor,
          commentsHasMore: a.hasMore,
          commentsLoading: false,
        });

        ot.getComments(n, { limit: 100, sort: s })
          .then((l) => {
            const l_data = l.data;

            We.set(i, {
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
      const u = await ot.getComments(n, { limit: 100, sort: s });
      const u_data = u.data;

      We.set(i, {
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
    const a = Sn.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await ot.getComments(n, {
        limit: 100,
        sort: a,
        cursor: commentsNextCursor ?? undefined,
      });
      e((u) => {
        const l = [...u.comments, ...c.data];
        return {
          comments: l.length > ur ? l.slice(-ur) : l,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.nextCursor !== null,
          commentsLoadingMore: false,
        };
      });
    } catch {
      e({ commentsLoadingMore: false });
    }
  },

  toggleCommentReaction: async (n, r) => {
    const { comments } = t();

    let i = comments.findIndex((g) => g.id === n);

    let a = false;
    let c = -1;
    let u = -1;
    if (i === -1) {
      for (let g = 0; g < comments.length; g++) {
        const _ = (comments[g].previewReplies ?? []).findIndex(
          (E) => E.id === n
        );
        if (_ !== -1) {
          a = true;
          c = g;
          u = _;
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
    const f = h === r;
    const m = f ? Math.max(0, d - 1) : h === null ? d + 1 : d;
    const w = f || r;
    const p = [...comments];
    if (a) {
      const g = [...(p[c].previewReplies ?? [])];
      g[u] = { ...g[u], reactions: { total: m, myReaction: w } };
      p[c] = { ...p[c], previewReplies: g };
    } else {
      p[i] = { ...p[i], reactions: { total: m, myReaction: w } };
    }
    e({ comments: p });
    try {
      if (f) {
        await ot.unlikeComment(n);
      } else {
        await ot.likeComment(n);
      }
    } catch (g) {
      console.error("Failed to toggle comment reaction:", g);
      const v = [...t().comments];
      if (a) {
        const _ = v.findIndex((E) => E.previewReplies?.some((N) => N.id === n));
        if (_ !== -1) {
          const E = v[_].previewReplies.findIndex((N) => N.id === n);
          if (E !== -1) {
            const N = [...v[_].previewReplies];
            N[E] = { ...N[E], reactions: { total: d, myReaction: h } };
            v[_] = { ...v[_], previewReplies: N };
          }
        }
      } else {
        const _ = v.findIndex((E) => E.id === n);

        if (_ !== -1) {
          v[_] = { ...v[_], reactions: { total: d, myReaction: h } };
        }
      }
      e({ comments: v });
    }
  },

  addComment: async (n, r, s = [], i, a, c, u) => {
    try {
      const l = i
        ? await ot.createReply(i, r, s, c, a)
        : await ot.createComment(n, r, s, undefined, a);

      const h = Te.getState().profile;
      if (h) {
        const w = (l.attachments || [])
          .filter((g) => typeof g == "object" && g !== null)
          .map((g) =>
            g.type === "media" && g.media
              ? {
                  id: g.media.id,
                  type: g.media.type,
                  url: g.media.url,
                  duration: g.media.duration,
                }
              : { id: g.id, type: g.type, url: g.url, duration: g.duration }
          );

        const p = {
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
          text: l.text ?? l.content ?? r,
          spans: l.spans,
          attachments: w,
          replyTo: l.replyTo ?? u ?? null,
          reactions: { total: 0, myReaction: null },
          stats: { replies: 0 },
          createdAt: new Date().toISOString(),
          editedAt: null,
        };

        e(
          i
            ? (g) => ({
                comments: g.comments.map((v) =>
                  v.id === i
                    ? {
                        ...v,
                        previewReplies: [...(v.previewReplies || []), p],
                        stats: { ...v.stats, replies: v.stats.replies + 1 },
                      }
                    : v
                ),

                highlightedCommentId: l.id,
              })
            : (g) => ({
                comments: [p, ...g.comments],
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

      const f = Sn.getState().commentsSort;
      const m = We.get(n);

      if (m) {
        We.set(n, { ...m, comments: t().comments, timestamp: Date.now() });
      } else {
        We.set(n, {
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
        const i = await ot.getReplies(n, { limit: 100 });
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

  editComment: async (n, r, s) => {
    const { comments } = t();

    const a = (u) =>
      u.map((l) =>
        l.id === n
          ? {
              ...l,
              text: r,
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
                      text: r,
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
      await ot.editComment(n, r, s);
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
      await ot.deleteComment(n);
    } catch (u) {
      console.error("Failed to delete comment:", u);
      e({ comments: c });
      throw u;
    }
  },

  editPost: async (n, r, s) => {
    await Me.editPost(n, { text: r, spans: s });
    const { posts, currentPost } = t();
    const c = new Date().toISOString();

    const u = posts.find((l) => l.id === n);

    e({
      posts: posts.map((l) =>
        l.id === n ? { ...l, text: r, spans: s ?? l.spans, editedAt: c } : l
      ),
      currentPost:
        currentPost?.id === n
          ? {
              ...currentPost,
              text: r,
              spans: s ?? currentPost.spans,
              editedAt: c,
            }
          : currentPost,
      _lastPostEdit: { postId: n, text: r, spans: s ?? [], editedAt: c },
    });

    if (u?.wallOwnerId) {
      Me.updatePostInWallCache(u.wallOwnerId, n, {
        text: r,
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
      await Me.deletePost(n);
    } catch (c) {
      console.error("Failed to delete post:", c);

      if (a) {
        e({ posts: i });
      }

      throw c;
    }
  },

  updatePostReaction: (n, r, s) => {
    e((i) => {
      const a = i.posts.map((u) =>
        u.id === n
          ? {
              ...u,
              reactions: {
                ...u.reactions,
                myReaction: r,
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
                myReaction: r,
                total: Math.max(0, i.currentPost.reactions.total + s),
              },
            }
          : i.currentPost;

      return {
        posts: a,
        currentPost: c,
        _lastReactionUpdate: { postId: n, myReaction: r, totalDelta: s },
      };
    });
  },

  updatePollVote: (n, r, s) => {
    const i = (a) => {
      const c = a.attachments.findIndex((m) => m.type === "poll");
      if (c === -1) {
        return a;
      }
      const u = a.attachments[c];

      const l = u.options.map((m) =>
        m.id === r
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
        myVote: r,
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

  updatePollData: (n, r) => {
    const s = (i) => {
      const a = i.attachments.findIndex((l) => l.type === "poll");
      if (a === -1) {
        return i;
      }

      const c = {
        ...i.attachments[a],
        options: (r.options ?? []).map((l) => ({
          id: l.id,
          text: l.text,
          votes: l.votesCount ?? l.voteCount ?? 0,
        })),
        totalVotes: r.totalVotes ?? 0,
        myVote: r.votedOptionIds?.length > 0 ? r.votedOptionIds[0] : null,
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
    We.clear();

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

const dr = {
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

let ut = null;
let qt = null;
let Rt = 0;
let kt = null;
const hr = [
  1000 /* 1e3 */, 2000 /* 2e3 */, 4000 /* 4e3 */, 8000 /* 8e3 */,
  16000 /* 16e3 */, 30000 /* 3e4 */,
];
const Ca = 0.3;
const Na = 15;
function fr(e) {
  const t = hr[Math.min(e, hr.length - 1)];
  const n = t * Ca * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
function Ta(e) {
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
  return Rs(t);
}

const xo = ct()((e, t) => ({
  ...dr,

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
        const c = await Et.getNotifications({ cursor: a, limit: 20 });
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
      const n = await Et.getUnreadCount();
      e({ unreadCount: n });
    } catch {}
  },

  markAsRead: async (n) => {
    if (n.length === 0) {
      return;
    }
    const r = t();

    const s = n.filter((i) => {
      const a = r.notifications.find((c) => c.id === i);
      return a && !a.isRead;
    });

    e((i) => ({
      notifications: i.notifications.map((a) =>
        n.includes(a.id) ? { ...a, isRead: true } : a
      ),

      unreadCount: Math.max(0, i.unreadCount - s.length),
    }));
    try {
      await Et.markAsRead(n);
    } catch {}
  },

  markAsReadSilent: async (n) => {
    if (n.length !== 0) {
      e((r) => ({
        unreadCount: Math.max(0, r.unreadCount - n.length),
      }));
      try {
        await Et.markAsRead(n);
      } catch {}
    }
  },

  markAllAsRead: async () => {
    e((n) => ({
      notifications: n.notifications.map((r) => ({
        ...r,
        isRead: true,
      })),

      unreadCount: 0,
    }));
    try {
      await Et.markAllAsRead();
    } catch {}
  },

  connectSSE: () => {
    if (ut) {
      return;
    }
    const n = F.getAccessToken();
    if (!n) {
      e({ sseStatus: "error", error: "Not authenticated" });
      return;
    }
    e({ sseStatus: "connecting" });
    const r = "/api/notifications/stream";
    ut = new AbortController();

    (async () => {
      try {
        const i = await fetch(r, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            Authorization: `Bearer ${n}`,
            "Cache-Control": "no-cache",
          },
          signal: ut?.signal,
        });
        if (!i.ok) {
          if (i.status === 401) {
            try {
              const l = await ft.refreshSession();
              F.setAccessToken(l.accessToken);
              Ie.setAccessToken(l.accessToken);
              ut = null;
              const h = fr(Rt);
              Rt++;

              qt = setTimeout(() => {
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
        Rt = 0;
        e({ sseStatus: "connected", error: null });

        if (kt) {
          kt.cancel().catch(() => {});
          kt = null;
        }

        const a = i.body.getReader();
        kt = a;
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
          for (const w of d) {
            if (w.startsWith("event: ")) {
              f = w.slice(7);
            } else if (w.startsWith("data: ")) {
              m = w.slice(6);
            } else if (w === "" && m) {
              try {
                const p = JSON.parse(m);
                const g = f || p.type;
                if (g !== "connected") {
                  if (g === "notification") {
                    const v = p.payload ?? p;
                    const _ = Ta(v);
                    const E = _.payload.actors[0];

                    const N = {
                      id: _.id,
                      type: _.type,
                      actorName: E?.displayName || "Пользователь",
                      actorUsername: E?.username || "",
                      actorAvatar: E?.avatar || "",
                      count: _.payload.count,
                      message: Ra(
                        _.type,
                        E?.displayName || "Пользователь",
                        _.payload.count
                      ),
                      clickUrl: _.payload.clickUrl,
                      entityId: _.entityId,
                      parentEntityId: _.parentEntityId,
                    };

                    e((y) => ({
                      notifications: [_, ...y.notifications],
                      unreadCount: p.unreadCount ?? y.unreadCount,
                      lastSseToast: N,
                    }));

                    if (p.sound) {
                      ka();
                    }
                  } else {
                    if (g === "unread_count") {
                      e({ unreadCount: p.payload?.count ?? 0 });
                    }
                  }
                }
              } catch (p) {
                console.error("SSE message parse error:", p, m);
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

        if (Rt >= Na) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          ut = null;
          return;
        }

        const a = fr(Rt);
        Rt++;

        qt = setTimeout(() => {
          ut = null;
          t().connectSSE();
        }, a);
      }
    })();
  },

  disconnectSSE: () => {
    if (qt) {
      clearTimeout(qt);
      qt = null;
    }

    if (kt) {
      kt.cancel().catch(() => {});
      kt = null;
    }

    if (ut) {
      ut.abort();
      ut = null;
    }

    Rt = 0;
    e({ sseStatus: "disconnected" });
  },

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const n = await Et.getSettings();
      e({ settings: n, settingsLoading: false });
    } catch {
      e({ settingsLoading: false });
    }
  },

  updateSettings: async (n) => {
    const { settings: r } = t();
    if (r) {
      const s = {
        webEnabled: n.webEnabled ?? r.webEnabled,
        soundEnabled: n.soundEnabled ?? r.soundEnabled,
        preferences: { ...r.preferences, ...n.preferences },
      };
      e({ settings: s });
    }
    try {
      await Et.updateSettings(n);
    } catch {
      e({ settings: r });
    }
  },

  reset: () => {
    t().disconnectSSE();
    e(dr);
  },
}));

const Ea = {
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

function Ra(e, t, n) {
  const Ea_e = Ea[e];
  return Ea_e ? Ea_e(t, n) : "Новое уведомление";
}
function ka() {
  try {
    const e = new Audio("/assets/notification.ogg");
    e.volume = 0.5;
    e.play().catch(() => {});
  } catch {}
}

const F_ = () => xo((e) => e.unreadCount);

const ba = () => xo((e) => e.lastSseToast);

const Sa = ct((e, t) => ({
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

const H_ = () => Sa((e) => e.portal);

const sn = new Set();
let nn = null;
const Ia = 30000; /* 3e4 */
function Pa() {
  if (nn === null) {
    nn = window.setInterval(() => {
      sn.forEach((e) => e());
    }, Ia);
  }
}
function Aa() {
  if (nn !== null) {
    clearInterval(nn);
    nn = null;
  }
}
function xa(e) {
  sn.add(e);

  if (sn.size === 1) {
    Pa();
  }
}
function La(e) {
  sn.delete(e);

  if (sn.size === 0) {
    Aa();
  }
}
function jn(e) {
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
function bs(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const r = n ? t : 0;

  const [s, i] = P(() => (n ? jn(new Date(r)) : ""));

  V(() => {
    if (!n) {
      i("");
      return;
    }
    const a = new Date(r);
    i(jn(a));
    const c = () => {
      i(jn(a));
    };
    xa(c);

    return () => La(c);
  }, [r, n]);

  return s;
}
const mr = 1174;
function at() {
  const [e, t] = P(() =>
    typeof window === "undefined" ? false : window.innerWidth < mr
  );

  V(() => {
    const n = window.matchMedia(`(max-width: ${mr - 1}px)`);

    const r = (s) => {
      t(s.matches);
    };

    t(n.matches);
    n.addEventListener("change", r);

    return () => {
      n.removeEventListener("change", r);
    };
  }, []);

  return e;
}
const Oa = Vt({ isHidden: false });

const Ma = () => {
  const [e, t] = P(false);
  const n = I(0);

  V(() => {
    const r = () => {
      const window_scrollY = window.scrollY;
      const i = window_scrollY - n.current;

      if (i > 10 && window_scrollY > 50) {
        t(true);
      } else if (i < -10) {
        t(false);
      }

      n.current = window_scrollY;
    };
    window.addEventListener("scroll", r, { passive: true });

    return () => window.removeEventListener("scroll", r);
  }, []);

  return e;
};

function $a() {
  const [e, t] = P(false);
  const [n, r] = P(false);
  const [s, i] = P(0);
  const [a, c] = P(false);
  const [u, l] = P(0);
  const [h, d] = P(0);
  const [f, m] = P([]);
  const [w, p] = P(0);
  const g = I(0);
  const v = I(null);
  const _ = I(null);
  const E = I(null);
  const N = I(null);
  const y = I([]);
  const S = I(null);
  const C = I(null);
  const R = I(null);
  const k = I(null);
  const A = I(null);
  const T = I(null);
  const O = I([]);
  const x = I(false);
  const z = I(0);
  const ee = I([]);
  const q = I(0);

  V(() => {
    x.current = e;
  }, [e]);

  V(
    () => () => {
      if (S.current) {
        clearInterval(S.current);
      }

      if (C.current) {
        cancelAnimationFrame(C.current);
      }

      if (T.current) {
        clearInterval(T.current);
      }

      if (N.current) {
        N.current.getTracks().forEach((D) => D.stop());
      }

      if (v.current) {
        v.current.ondataavailable = null;
        v.current.onstop = null;
      }

      if (_.current && _.current.state !== "closed") {
        _.current.close();
      }

      if (R.current) {
        R.current.pause();
        R.current.onloadedmetadata = null;
        R.current.ontimeupdate = null;
        R.current.onended = null;
        R.current = null;
      }

      if (k.current) {
        URL.revokeObjectURL(k.current);
      }
    },
    []
  );

  const ae = b(() => {
    if (!E.current) {
      return;
    }
    const E_current = E.current;
    const E_current_frequencyBinCount = E_current.frequencyBinCount;
    const j = new Uint8Array(E_current_frequencyBinCount);
    E_current.getByteFrequencyData(j);
    let X = 0;
    for (let re = 0; re < E_current_frequencyBinCount; re++) {
      X += j[re];
    }
    const oe = X / E_current_frequencyBinCount / 255;
    const ie = Math.min(1, oe * 3);
    const fe = Math.max(0.1, ie);
    if (x.current) {
      const Ye = performance.now() - z.current;
      const Ee = Math.floor(Ye / 80);
      ee.current.push(fe);

      if (Ee > q.current) {
        const ee_current = ee.current;

        const ve =
          ee_current.length > 0
            ? ee_current.reduce((J, M) => J + M, 0) / ee_current.length
            : 0.05;

        O.current.push(ve);
        g.current += 4;

        m((J) => [...J, ve]);

        p(g.current);
        ee.current = [];
        q.current = Ee;
      }

      C.current = requestAnimationFrame(ae);
    }
  }, []);

  const ce = b(() => {
    const O_current = O.current;
    return O_current.length > 0 ? [...O_current] : [];
  }, []);

  const K = b(async () => {
    try {
      if (k.current) {
        URL.revokeObjectURL(k.current);
        k.current = null;
      }

      A.current = null;

      if (R.current) {
        R.current.pause();
        R.current = null;
      }

      const D = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      N.current = D;
      const Y = new AudioContext();
      _.current = Y;
      const j = Y.createAnalyser();
      j.fftSize = 256;
      j.smoothingTimeConstant = 0.3;
      E.current = j;
      Y.createMediaStreamSource(D).connect(j);
      const oe = new MediaRecorder(D, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      v.current = oe;
      y.current = [];
      O.current = [];
      z.current = performance.now();
      ee.current = [];
      q.current = 0;

      oe.ondataavailable = (fe) => {
        if (fe.data.size > 0) {
          y.current.push(fe.data);
        }
      };

      oe.start(100);
      t(true);
      r(false);
      i(0);
      l(0);
      d(0);
      c(false);
      g.current = 0;
      m([]);
      p(0);
      x.current = true;
      const ie = Date.now();

      S.current = window.setInterval(() => {
        const fe = Math.floor((Date.now() - ie) / 1000 /* 1e3 */);
        i(fe);
      }, 100);

      C.current = requestAnimationFrame(ae);
    } catch (D) {
      console.error("Error accessing microphone:", D);
    }
  }, [ae]);

  const te = b(
    () =>
      new Promise((D) => {
        x.current = false;
        t(false);

        if (v.current && v.current.state !== "inactive") {
          v.current.onstop = () => {
            if (y.current.length > 0) {
              const j = v.current?.mimeType || "audio/webm";
              const X = new Blob(y.current, { type: j });
              const oe = URL.createObjectURL(X);
              k.current = oe;
              A.current = X;
              const ie = new Audio(oe);
              R.current = ie;

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

                if (T.current) {
                  clearInterval(T.current);
                  T.current = null;
                }
              };

              r(true);
              D(X);
            } else {
              D(null);
            }
          };

          v.current.stop();
        } else {
          D(null);
        }

        if (N.current) {
          N.current.getTracks().forEach((j) => j.stop());
          N.current = null;
        }

        if (S.current) {
          clearInterval(S.current);
          S.current = null;
        }

        if (C.current) {
          cancelAnimationFrame(C.current);
          C.current = null;
        }

        if (_.current && _.current.state !== "closed") {
          _.current.close();
          _.current = null;
        }

        const Y = ce();
        g.current = 0;
        m(Y);
        p(0);
        l(0);
      }),
    [ce]
  );

  const U = b(() => {
    x.current = false;

    if (v.current) {
      v.current.ondataavailable = null;
      v.current.onstop = null;
      v.current.state !== "inactive" && v.current.stop();
      v.current = null;
    }

    if (N.current) {
      N.current.getTracks().forEach((D) => D.stop());
      N.current = null;
    }

    if (S.current) {
      clearInterval(S.current);
      S.current = null;
    }

    if (C.current) {
      cancelAnimationFrame(C.current);
      C.current = null;
    }

    if (T.current) {
      clearInterval(T.current);
      T.current = null;
    }

    if (_.current && _.current.state !== "closed") {
      _.current.close();
      _.current = null;
    }

    if (R.current) {
      R.current.pause();
      R.current = null;
    }

    if (k.current) {
      URL.revokeObjectURL(k.current);
      k.current = null;
    }

    A.current = null;
    t(false);
    r(false);
    i(0);
    c(false);
    l(0);
    d(0);
    g.current = 0;
    m([]);
    p(0);
    O.current = [];
    y.current = [];
  }, []);

  const W = b(() => {
    if (T.current) {
      clearInterval(T.current);
    }

    T.current = window.setInterval(() => {
      const R_current = R.current;
      if (
        !R_current ||
        R_current.paused ||
        R_current.paused ||
        R_current.ended
      ) {
        if (T.current) {
          clearInterval(T.current);
          T.current = null;
        }

        return;
      }

      if (R_current.duration > 0) {
        l(R_current.currentTime / R_current.duration);
      }
    }, 100);
  }, []);

  const Z = b(() => {
    if (!R.current || !k.current) {
      return;
    }

    if (T.current) {
      clearInterval(T.current);
      T.current = null;
    }

    const R_current = R.current;

    if (R_current.ended || R_current.currentTime >= R_current.duration) {
      R_current.currentTime = 0;
      l(0);
    }

    c(true);

    R_current.play()
      .then(() => {
        W();
      })
      .catch((Y) => {
        console.error("Error playing audio:", Y);
        c(false);
      });
  }, [W]);

  const $ = b(() => {
    if (T.current) {
      clearInterval(T.current);
      T.current = null;
    }

    if (R.current) {
      R.current.pause();

      R.current.duration > 0 && l(R.current.currentTime / R.current.duration);
    }

    c(false);
  }, []);

  const L = b(
    (D) => {
      if (!R.current || !n) {
        return;
      }
      const R_current = R.current;
      const j = Math.max(0, Math.min(1, D));
      R_current.currentTime = j * R_current.duration;
      l(j);

      if (R_current.paused) {
        T.current && (clearInterval(T.current), (T.current = null));

        R_current.play()
          .then(() => {
            c(true);
            W();
          })
          .catch((X) => {
            console.error("Error playing audio:", X);
          });
      }
    },
    [n, W]
  );

  const B = b(() => A.current, []);

  return {
    isRecording: e,
    hasRecording: n,
    recordingTime: s,
    audioLevels: f,
    slideOffset: w,
    isPlaying: a,
    playbackProgress: u,
    duration: h,
    audioElementRef: R,
    startRecording: K,
    stopRecording: te,
    cancelRecording: U,
    playAudio: Z,
    pauseAudio: $,
    seekTo: L,
    getAudioBlob: B,
  };
}
const Da = 0.5;
const Ua = 500;
const pr = 1000; /* 1e3 */
class Ba {
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
          const r = this.elementToPostId.get(n.target);
          if (r) {
            if (n.isIntersecting) {
              if (!this.pendingTimers.has(r) && !this.viewedPosts.has(r)) {
                const s = window.setTimeout(() => {
                  this.pendingTimers.delete(r);

                  if (!this.viewedPosts.has(r)) {
                    this.sendView(r);
                  }
                }, Ua);
                this.pendingTimers.set(r, s);
              }
            } else {
              const s = this.pendingTimers.get(r);

              if (s !== undefined) {
                clearTimeout(s);
                this.pendingTimers.delete(r);
              }
            }
          }
        }
      },
      { threshold: Da }
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
      const r = this.pendingTimers.get(n);

      if (r !== undefined) {
        clearTimeout(r);
        this.pendingTimers.delete(n);
      }
    }
    this.observer.unobserve(t);
  }
  sendView(t) {
    if (!this.viewedPosts.has(t)) {
      this.viewedPosts.size >= pr &&
        Array.from(this.viewedPosts)
          .slice(0, pr / 2)
          .forEach((r) => this.viewedPosts.delete(r));

      this.viewedPosts.add(t);

      Me.trackView(t).catch(() => {
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
const zn = new Ba();
function Fa(e, t) {
  V(() => {
    const t_current = t.current;
    if (!(!t_current || zn.isViewed(e))) {
      zn.observe(e, t_current);

      return () => {
        zn.unobserve(t_current);
      };
    }
  }, [e, t]);
}
function Dn(e = "", t = []) {
  const [n, r] = P(e);
  const [s, i] = P(t);
  const a = I(null);

  const c = b((h, d) => {
    r(h);
    i(d);
  }, []);

  const u = b((h) => {
    a.current?.insertText(h);
  }, []);

  const l = b(() => {
    r("");
    i([]);
  }, []);

  return {
    text: n,
    spans: s,
    editorRef: a,
    handleChange: c,
    insertText: u,
    reset: l,
    setText: r,
    setSpans: i,
  };
}

const Ha = ({ size: e = 18 }) =>
  o("svg", {
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
      o("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
      o("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
    ],
  });

const Va = ({ size: e = 18 }) =>
  o("svg", {
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
      o("polyline", { points: "16 18 22 12 16 6" }),
      o("polyline", { points: "8 6 2 12 8 18" }),
    ],
  });

const Wa = ({ size: e = 18 }) =>
  o("svg", {
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
      o("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
      o("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
      o("line", { x1: "15", y1: "4", x2: "9", y2: "20" }),
    ],
  });

const Ss = ({ size: e = 18 }) =>
  o("svg", {
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
      o("path", {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      }),
      o("path", {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      }),
    ],
  });

const ja = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: o("path", {
      d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
    }),
  });

const za = ({ size: e = 18 }) =>
  o("svg", {
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
      o("path", {
        d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94",
      }),
      o("path", {
        d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19",
      }),
      o("line", { x1: "1", y1: "1", x2: "23", y2: "23" }),
      o("path", { d: "M14.12 14.12a3 3 0 1 1-4.24-4.24" }),
    ],
  });

const qa = ({ size: e = 18 }) =>
  o("svg", {
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
      o("path", { d: "M16 4H9a3 3 0 0 0-3 3c0 1.66 1.34 3 3 3h6" }),
      o("path", { d: "M8 20h7a3 3 0 0 0 3-3c0-1.66-1.34-3-3-3H4" }),
      o("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
    ],
  });

const Ya = ({ size: e = 18 }) =>
  o("svg", {
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
      o("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
      o("line", { x1: "4", y1: "21", x2: "20", y2: "21" }),
    ],
  });

const Ga = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: o("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [
        o("path", {
          d: "M9 2c-.53 0-1.04.219-1.414.608C7.21 2.998 7 3.526 7 4.077v4.846c0 .55.21 1.08.586 1.469.375.39.884.608 1.414.608.53 0 1.04-.219 1.414-.608.375-.39.586-.918.586-1.469V4.077c0-.55-.21-1.08-.586-1.469A1.963 1.963 0 0 0 9 2Z",
        }),
        o("path", {
          d: "M14 8v1.333c0 1.238-.527 2.425-1.464 3.3C11.598 13.508 10.326 14 9 14s-2.598-.492-3.536-1.367C4.527 11.758 4 10.571 4 9.333V8M9 14v2",
        }),
      ],
    }),
  });

const Xa = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    children: o("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M8.078 10.367c0-.01.006-.019.006-.029V5.636a3.46 3.46 0 0 0 1.257.526.749.749 0 1 0 .299-1.469c-1.135-.23-1.589-1.333-1.606-1.375a.75.75 0 0 0-1.45.269v4.3a2.873 2.873 0 0 0-1.418-.384 2.92 2.92 0 0 0-2.916 2.918 2.92 2.92 0 0 0 2.916 2.916 2.92 2.92 0 0 0 2.917-2.916c0-.019-.005-.035-.005-.054ZM21.75 6.503a.749.749 0 0 0-1.067-.68c-2.557 1.189-5.245 1.683-7.982 1.469a.752.752 0 0 0-.568.196.752.752 0 0 0-.24.55v7.697a2.866 2.866 0 0 0-1.402-.377 2.907 2.907 0 0 0-2.903 2.904 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903v-6.925c.183.007.368.023.552.023 2.151 0 4.26-.427 6.303-1.228V14.2a2.87 2.87 0 0 0-1.403-.377 2.906 2.906 0 0 0-2.903 2.903 2.906 2.906 0 0 0 2.903 2.903 2.906 2.906 0 0 0 2.903-2.903V6.502Z",
      "clip-rule": "evenodd",
    }),
  });

const Is = ({ size: e = 16 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: [
      o("rect", {
        width: "4",
        height: "10",
        x: "3",
        y: "3",
        fill: "currentColor",
        rx: "1.5",
      }),
      o("rect", {
        width: "4",
        height: "10",
        x: "9",
        y: "3",
        fill: "currentColor",
        rx: "1.5",
      }),
    ],
  });

const Ps = ({ size: e = 16 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: o("path", {
      fill: "currentColor",
      d: "M13 6.268c1.333.77 1.333 2.694 0 3.464l-6 3.464c-1.333.77-3-.192-3-1.732V4.536c0-1.54 1.667-2.502 3-1.732l6 3.464Z",
    }),
  });

const Ka = ({ size: e = 24 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: o("path", { d: "M8 5v14l11-7z" }),
  });

const Za = ({ size: e = 16 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: o("rect", {
      width: "10",
      height: "10",
      x: "3",
      y: "3",
      fill: "currentColor",
      rx: "3",
    }),
  });

const Qa = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    children: o("path", {
      fill: "currentColor",
      d: "M9.905 2.501c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.39-1.69 4.06-4.113 4.06H4.113c-2.422 0-4.113-1.67-4.113-4.06V6.56c0-2.391 1.691-4.06 4.113-4.06zm8.053 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675a1.43 1.43 0 0 1-1.412 1.436c-.215 0-.43-.05-.631-.153l-1.481-.748a1.62 1.62 0 0 1-.888-1.457V7.085c0-.621.34-1.18.888-1.456z",
    }),
  });

const Ja = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      o("path", {
        fill: "#fff",
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      }),
      o("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M16 9a5 5 0 0 1 0 6",
      }),
    ],
  });

const ec = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      o("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M16 9a5 5 0 0 1 .95 2.293M19.364 5.636a9 9 0 0 1 1.889 9.96M2 2l20 20",
      }),
      o("path", {
        fill: "#fff",
        d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",
      }),
      o("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11M9.828 4.172A.686.686 0 0 1 11 4.657v.686",
      }),
    ],
  });

const tc = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      o("path", {
        fill: "#fff",
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M11 4.702a.706.706 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      }),
      o("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M16 9a5 5 0 0 1 0 6M19.364 18.364a9 9 0 0 0 0-12.728",
      }),
    ],
  });

const As = ({ size: e = 24 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      o("path", {
        d: "M5 12L12 5L19 12",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      o("path", {
        d: "M12 19V5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const xs = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    children: o("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.833",
      d: "m17.867 9.208-7.659 7.659a5.003 5.003 0 1 1-7.075-7.075l7.659-7.659a3.335 3.335 0 1 1 4.716 4.717l-7.666 7.658a1.667 1.667 0 1 1-2.359-2.358l7.075-7.067",
    }),
  });

const nc = ({ size: e = 8 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 8 8",
    children: [
      o("g", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        clipPath: "url(#af)",
        children: o("path", { d: "M1 4h6M4 1v6" }),
      }),
      o("defs", {
        children: o("clipPath", {
          id: "af",
          children: o("path", { fill: "#fff", d: "M0 0h8v8H0z" }),
        }),
      }),
    ],
  });

const oc = ({ size: e = 8 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 8 8",
    children: o("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M1 4h6",
    }),
  });

const rc = ({ size: e = 48 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      o("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
      o("polyline", { points: "22 4 12 14.01 9 11.01" }),
    ],
  });

const sc = ({ size: e = 24 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: o("path", {
      d: "M15 18L9 12L15 6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });

const ic = ({ size: e = 24 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: o("path", {
      d: "M9 18L15 12L9 6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });

const nt = ({ size: e = 24 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      o("path", {
        d: "M18 6L6 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      o("path", {
        d: "M6 6L18 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const Lo = ({ filled: e = false, size: t = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 20 20",
    children: o("path", {
      stroke: "currentColor",
      strokeWidth: 2,
      d: "M14.953 5.046c-2.73-2.728-7.173-2.728-9.903 0-2.07 2.07-2.634 5.247-1.41 7.888.136.336.232.59.232.798 0 .247-.105.553-.205.849-.195.573-.416 1.222.058 1.696.475.475 1.125.251 1.697.055.294-.1.598-.205.84-.205.215 0 .486.109.798.235a7.034 7.034 0 0 0 7.893-1.412c2.73-2.73 2.73-7.172 0-9.904Z",
      clipRule: "evenodd",
      fill: e ? "currentColor" : "none",
    }),
  });

const Ls = ({ size: e = 18 }) =>
  o("svg", {
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
      o("path", {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      }),
      o("path", {
        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
      }),
    ],
  });

const ac = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      o("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      o("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M15 9l-6 6m0-6l6 6",
      }),
    ],
  });

const Os = ({ size: e = 18 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: o("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.0463 8.361L19.6973 3.35C19.8203 3.118 19.8133 2.839 19.6773 2.613C19.5413 2.387 19.2973 2.25 19.0343 2.25H4.96533C4.55133 2.25 4.21533 2.586 4.21533 3V21C4.21533 21.414 4.55133 21.75 4.96533 21.75C5.37933 21.75 5.71533 21.414 5.71533 21V14.544L19.0443 14.365C19.3073 14.361 19.5483 14.221 19.6813 13.995C19.8143 13.768 19.8183 13.489 19.6943 13.258L17.0463 8.361Z",
      fill: "currentColor",
    }),
  });

const Ms = ({ size: e = 24 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      o("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2",
      }),
      o("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
      o("polyline", { points: "21 15 16 10 5 21" }),
    ],
  });

const $s = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      o("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      o("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M12 16v-4m0-4h.01",
      }),
    ],
  });

const Un = ({ filled: e = false, size: t = 20, className: n }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    viewBox: "0 0 20 20",
    fill: "none",
    className: n,
    children: o("path", {
      fill: e ? "currentColor" : "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.667",
      d: "M10 4.583C8.75 2.917 6.25 2.5 4.583 3.75 2.917 5 2.083 7.5 3.333 10S10 16.667 10 16.667 15.417 12.5 16.667 10s0-5-1.667-6.25-4.167-.833-5 .833Z",
    }),
  });

const Ds = ({ size: e = 24 }) =>
  o("svg", {
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
    children: o("path", { d: "M19 12a7 7 0 1 1-4.83-6.66" }),
  });

const cc = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    children: [
      o("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M10.84 10.355a6.684 6.684 0 0 1 7.462-1.374c.158.071.331-.078.268-.24a8.109 8.109 0 0 0-1.825-2.773 8.175 8.175 0 0 0-5.837-2.429A8.175 8.175 0 0 0 5.07 5.968a8.338 8.338 0 0 0-1.66 9.34c.162.394.297.74.297 1.047 0 .326-.135.72-.26 1.094-.23.663-.46 1.354.02 1.844.49.49 1.18.25 1.843.019.374-.135.758-.26 1.075-.26.307 0 .653.135 1.047.289.958.45 2.123.793 3.22.786.176 0 .24-.222.108-.339-2.656-2.359-2.297-7.039.08-9.433Z",
        clipRule: "evenodd",
      }),
      o("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M20.34 17.93c0-.154.064-.324.164-.576a5.052 5.052 0 0 0-1.002-5.662 4.959 4.959 0 0 0-3.537-1.469 4.958 4.958 0 0 0-3.537 1.47 5.034 5.034 0 0 0 0 7.095A5.011 5.011 0 0 0 18.06 19.8c.229-.093.426-.173.586-.173.178.001.397.077.61.15.406.14.866.299 1.196-.033.33-.332.174-.791.036-1.197-.073-.215-.149-.436-.149-.617Z",
        clipRule: "evenodd",
      }),
    ],
  });

const Us = ({ size: e = 18 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: o("path", {
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14.25 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    }),
  });

const lc = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    children: o("path", {
      fill: "currentColor",
      d: "M10.004 1C14.92 1 18.976 4.61 19 8.955c0 2.747-2.255 5-5.002 5h-1.797a1.477 1.477 0 0 0-1.502 1.501c0 .426.134.753.395 1.013.231.26.393.618.393 1.011 0 .848-.65 1.52-1.483 1.52C5.052 19 1 14.95 1 10s4.052-9 9.004-9ZM5.25 9a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm9-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-7-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4-1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
    }),
  });

const gr = ({ size: e = 18 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: o("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.0397 9.25349L14.7397 3.95349C13.9837 3.19649 12.6657 3.19649 11.9097 3.95349L11.3187 4.54549C10.7487 5.11449 10.5767 5.96749 10.8957 6.75249C11.0497 7.12649 10.9647 7.55249 10.6797 7.83949L9.34373 9.17449C9.22773 9.28849 9.08673 9.37449 8.93473 9.42249L5.77073 10.4125C5.46773 10.5085 5.18573 10.6795 4.95673 10.9065C4.57773 11.2855 4.36973 11.7875 4.36973 12.3225C4.36973 12.8575 4.57873 13.3585 4.95673 13.7355L7.07573 15.8545L3.59573 19.3345C3.30273 19.6275 3.30273 20.1025 3.59573 20.3955C3.74173 20.5415 3.93373 20.6145 4.12573 20.6145C4.31773 20.6145 4.50973 20.5415 4.65573 20.3955L8.13573 16.9145L10.2577 19.0365C10.6467 19.4255 11.1587 19.6195 11.6707 19.6195C12.1837 19.6195 12.6957 19.4245 13.0867 19.0355C13.3147 18.8055 13.4847 18.5235 13.5797 18.2205L14.5687 15.0605C14.6187 14.9045 14.7037 14.7635 14.8167 14.6505L16.1537 13.3125C16.4387 13.0265 16.8627 12.9415 17.2737 13.1085C18.0197 13.4155 18.8747 13.2465 19.4477 12.6745L20.0397 12.0815C20.8187 11.3015 20.8187 10.0325 20.0397 9.25349Z",
      fill: "currentColor",
    }),
  });

const Bs = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: o("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M5 12h14M12 5v14",
    }),
  });

const uc = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: o("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 20V10M12 20V4M6 20v-6",
    }),
  });

const An = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      o("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m2 9 3-3 3 3",
      }),
      o("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M13 18H7a2 2 0 0 1-2-2V6M22 15l-3 3-3-3",
      }),
      o("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M11 6h6a2 2 0 0 1 2 2v10",
      }),
    ],
  });

const dc = ({ size: e = 20, color: t = "currentColor" }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      o("path", {
        d: "M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      o("path", {
        d: "M7.6 11.908c.585.76 1.445 1.234 2.4 1.234.956 0 1.816-.474 2.4-1.234M7.308 7.504v-.043m-.038-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374ZM12.692 7.504v-.043m-.005-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374Z",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const hc = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      o("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      o("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M8 12l3 3 5-6",
      }),
    ],
  });

const fc = ({ size: e = 48 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      o("circle", {
        cx: "24",
        cy: "24",
        r: "24",
        fill: "#2AABEE",
        fillOpacity: "0.12",
      }),
      o("svg", {
        x: "8",
        y: "8",
        width: "32",
        height: "32",
        viewBox: "0 0 1000 1000",
        children: o("path", {
          d: "M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z",
          fill: "#2AABEE",
        }),
      }),
    ],
  });

const Fs = ({ size: e = 18 }) =>
  o("svg", {
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
      o("polyline", { points: "3 6 5 6 21 6" }),
      o("path", {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
      }),
      o("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
      o("line", { x1: "14", y1: "11", x2: "14", y2: "17" }),
    ],
  });

const mc = ({ size: e = 16 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: [
      o("path", {
        fill: "#0080FF",
        d: "M6.724.821a1.63 1.63 0 0 1 2.858.051l.556 1.042a1.634 1.634 0 0 0 1.672.856l1.155-.166c1.263-.181 2.238 1.108 1.742 2.303L14.253 6a1.69 1.69 0 0 0 .385 1.863l.847.815c.927.891.544 2.47-.685 2.821l-1.122.32a1.663 1.663 0 0 0-1.192 1.468l-.098 1.181c-.108 1.294-1.56 1.974-2.596 1.216l-.946-.693a1.62 1.62 0 0 0-1.872-.033l-.969.658c-1.06.721-2.49-.01-2.552-1.306l-.058-1.184a1.666 1.666 0 0 0-1.141-1.51l-1.11-.36C-.073 10.864-.402 9.272.556 8.413l.874-.783a1.69 1.69 0 0 0 .448-1.849l-.416-1.108c-.454-1.212.565-2.466 1.821-2.24l1.148.207a1.632 1.632 0 0 0 1.7-.796L6.724.82Z",
      }),
      o("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.333",
        d: "M10.667 6.667 7.11 10.222 5.334 8.444",
      }),
    ],
  });

const Hs = ({ size: e = 20 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    children: [
      o("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M2 10s2.91-6 8-6 8 6 8 6-2.91 6-8 6-8-6-8-6Z",
      }),
      o("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      }),
    ],
  });

const pc = ({ size: e = 24 }) =>
  o("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: o("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z",
    }),
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

const vr = [
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

const gc = [
  _e.LOGIN,
  _e.REGISTER,
  _e.FORGOT_PASSWORD,
  _e.RESET_PASSWORD,
  _e.VERIFY_EMAIL,
  _e.ONBOARDING,
];

const vc = "QYP36fUx";
const _c = "_7afjMMjS";
const wc = "crRhcI7j";
const yc = "mPvkVXNc";
const Cc = "R6rPmVO3";
const Nc = "_4M-jb-Yf";
const Tc = "BzRajAFf";
const Ec = "xWaW7ynd";
const Rc = "mC4WabM6";
const kc = "CdIxpdOF";
const bc = "o8sqdA1y";
const Sc = "G7wJQLhH";
const Ic = "Idqhap9T";
const Pc = "bcyDy-AX";

const Oe = {
  overlay: vc,
  modalWrapper: _c,
  wide: wc,
  modal: yc,
  frameless: Cc,
  header: Nc,
  title: Tc,
  closeButton: Ec,
  externalCloseButton: Rc,
  mobileOverlay: kc,
  closing: bc,
  bottomSheet: Sc,
  dragHandle: Ic,
  dragIndicator: Pc,
};

const Ac = Vt(null);
const xc = 100;
const Lc = 0.5;
function vt({
  children: e,
  onClose: t,
  title: n,
  showHeader: r = true,
  showCloseButton: s = true,
  frameless: i = false,
  className: a,
  contentClassName: c,
  size: u = "default",
  onBeforeClose: l,
}) {
  at();
  const h = I(null);
  const d = I(null);
  const f = I(null);
  const m = at();
  const w = I(0);
  const p = I(false);
  const [g, v] = P(false);
  const _ = I(0);
  const E = I(0);
  const N = I(0);
  V(() => {
    const K = (U) => {
      if (U.key === "Escape") {
        if (l && !l()) {
          return;
        }
        t();
      }
    };

    const te = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", K);

    return () => {
      document.removeEventListener("keydown", K);
      document.documentElement.style.overflow = te;
    };
  }, [t]);

  const y = (K) => {
    f.current = K.target;
  };

  const S = (K) => {
    if (f.current === h.current && K.target === h.current) {
      if (m) {
        C();
      } else {
        if (l && !l()) {
          return;
        }
        t();
      }
    }
    f.current = null;
  };

  const C = b(() => {
    if (l && !l()) {
      T(0, "transform 0.2s ease-out");
      O(0);
      w.current = 0;
      return;
    }
    v(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, l]);

  const R = I(false);
  const k = I(false);

  const A = (K) => {
    let te = K;

    while (te && te !== d.current) {
      const W = window.getComputedStyle(te).overflowY;
      if (
        (W === "auto" || W === "scroll") &&
        te.scrollHeight > te.clientHeight
      ) {
        return te;
      }
      te = te.parentElement;
    }

    return null;
  };

  const T = (K, te) => {
    if (d.current) {
      d.current.style.transform = K > 0 ? `translateY(${K}px)` : "";
      d.current.style.transition = te || "";
    }
  };

  const O = (K) => {
    if (h.current && K > 0) {
      h.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
        0,
        0.4 - K / 500
      )})`;
    } else if (h.current) {
      h.current.style.backgroundColor = "";
    }
  };

  const x = (K) => {
    if (!m) {
      return;
    }
    _.current = K.touches[0].clientY;
    E.current = Date.now();
    N.current = K.touches[0].clientY;
    const K_target = K.target;
    if (K_target.closest(`.${Oe.dragHandle}`)) {
      R.current = true;
      k.current = true;
      p.current = true;

      if (d.current) {
        d.current.style.transition = "none";
      }

      return;
    }
    R.current = false;

    if (
      K_target.closest(
        'button, a, input, textarea, select, video, [role="button"]'
      )
    ) {
      k.current = false;
      return;
    }

    if (K_target.tagName === "CANVAS" || K_target.closest("canvas")) {
      k.current = false;
      return;
    }
    const $ = A(K_target);
    k.current = !$ || $.scrollTop === 0;
  };

  const z = (K) => {
    if (!m) {
      return;
    }
    const te = K.touches[0].clientY;
    const U = te - _.current;
    N.current = te;

    if (R.current) {
      if (U > 0) {
        w.current = U;
        T(U);
        O(U);
        K.preventDefault();
      }

      return;
    }

    if (k.current) {
      if (p.current && w.current > 0) {
        if (U > 0) {
          w.current = U;
          T(U);
          O(U);
          K.preventDefault();
        } else {
          w.current = 0;
          p.current = false;
          T(0);
          O(0);
        }

        return;
      }

      if (U > 0) {
        p.current ||
          ((p.current = true),
          d.current && (d.current.style.transition = "none"));
        w.current = U;
        T(U);
        O(U);
        K.preventDefault();
      }
    }
  };

  const ee = () => {
    if (!m) {
      return;
    }
    const K = N.current - _.current;
    const te = Date.now() - E.current;
    const U = K / te;

    if (p.current && (K > xc || U > Lc)) {
      C();
    } else if (w.current > 0) {
      T(0, "transform 0.2s ease-out");
      O(0);
      w.current = 0;
    }

    p.current = false;
    R.current = false;
    k.current = false;
  };

  const ae = (() => {
    if (m && g) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const ce = { onClose: t, isMobile: m, isClosing: g, handleClose: C };
  return o(Ac.Provider, {
    value: ce,
    children: o("div", {
      ref: h,
      className: `${Oe.overlay} ${m ? Oe.mobileOverlay : ""} ${
        g ? Oe.closing : ""
      }`,
      onMouseDown: y,
      onMouseUp: S,
      children: o("div", {
        ref: d,
        className: `${Oe.modalWrapper} ${u === "wide" ? Oe.wide : ""} ${
          m ? Oe.bottomSheet : ""
        }`,
        style: ae,
        onTouchStart: x,
        onTouchMove: z,
        onTouchEnd: ee,
        children: [
          i &&
            !m &&
            o("button", {
              type: "button",
              className: Oe.externalCloseButton,
              onClick: (K) => {
                K.stopPropagation();
                t();
              },
              children: o(nt, { size: 24 }),
            }),
          m &&
            o("div", {
              className: Oe.dragHandle,
              children: o("div", { className: Oe.dragIndicator }),
            }),
          o("div", {
            className: `${Oe.modal} ${i ? Oe.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !i &&
                r &&
                !m &&
                o("div", {
                  className: Oe.header,
                  children: [
                    o("span", { className: Oe.title, children: n }),
                    s &&
                      o("button", {
                        type: "button",
                        className: Oe.closeButton,
                        onClick: (K) => {
                          K.stopPropagation();
                          t();
                        },
                        children: o(nt, { size: 16 }),
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
const Oc = "GKtAeZvh";
const Mc = "_4kYPGG9W";
const $c = "pl3SNO9Y";
const Dc = "-OjVJvXv";
const Uc = "mKywUPJV";
const Bc = "ORxo1gch";
const Fc = "_-0ox-2T5";
const Hc = "ufqwLNRT";
const Vc = "Kb0ZHEmq";
const Wc = "L6foA0ob";
const jc = "p8fXVDg6";
const zc = "iiFzRcQy";

const yt = {
  avatar: Oc,
  xs: Mc,
  emoji: $c,
  onlineDot: Dc,
  sm: Uc,
  md: Bc,
  lg: Fc,
  xl: Hc,
  badge: Vc,
  followBadge: Wc,
  notFollowing: jc,
  following: zc,
};

function qc(e) {
  return (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith("https://") ||
    e.startsWith("/")
  );
}
function qe({
  src: e,
  alt: t,
  size: n = "md",
  badge: r,
  online: s,
  followBadge: i,
  onFollowBadgeClick: a,
  className: c,
}) {
  const u = e ? qc(e) : false;
  return o("div", {
    className: `${yt.avatar} ${yt[n]} ${c || ""}`,
    children: [
      u && e
        ? o("img", { src: e, alt: t || "" })
        : o("span", { className: yt.emoji, children: e || "👤" }),
      r && o("div", { className: yt.badge, children: r }),
      i !== undefined
        ? o("button", {
            type: "button",
            className: `${yt.followBadge} ${
              i ? yt.following : yt.notFollowing
            }`,
            onClick: (l) => {
              l.preventDefault();
              l.stopPropagation();
              a?.(l);
            },
            children: i ? o(oc, { size: 8 }) : o(nc, { size: 8 }),
          })
        : s && o("span", { className: yt.onlineDot }),
    ],
  });
}
const Yc = "LGbsLd3i";
const Gc = "Qtvr3ePW";
const Xc = "I1XzQEdO";
const qn = { hint: Yc, multiline: Gc, arrow: Xc };
function xn({ text: e, children: t, className: n, multiline: r }) {
  const s = I(null);
  const [i, a] = P(null);

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

  return o("span", {
    ref: s,
    className: n,
    onMouseEnter: c,
    onMouseLeave: u,
    onClick: l,
    children: [
      t,
      i &&
        wt(
          o("div", {
            className: `${qn.hint} ${r ? qn.multiline : ""}`,
            style: { left: `${i.x}px`, top: `${i.y}px` },
            children: [e, o("span", { className: qn.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const Kc = "uX6mG52K";
const Zc = "u5FjrrfL";
const Qc = "Z9f7Q3jS";
const Jc = "L-43NjOb";
const el = "E60wxVvR";
const tl = "_0dqhEKnD";
const nl = "c-uIo5yi";
const ol = "cB-8IXk5";
const rl = "aUamxQ7e";
const sl = "ObQk27rJ";
const il = "ovunVXLq";
const al = "ohs8Npaw";
const cl = "_0K-Z1eD9";
const ll = "JMg1QWQj";
const ul = "_9DD7EG-T";
const dl = "R0v2YBUB";
const hl = "kM0p8-Sv";
const fl = "GWzRyPXS";
const ml = "PURIUyt6";
const pl = "oTS4L6S0";
const gl = "hgcZGLcX";
const vl = "FCPywiPM";
const _l = "ynvn-v5t";
const wl = "rost2Xx2";
const yl = "mAyptXfj";
const Cl = "IJ-MKy8P";
const Nl = "av5HkGSu";
const Tl = "-TUw-Z3K";
const El = "eLLh95k2";
const Rl = "wc3kGqhz";

const G = {
  modal: Kc,
  sub: Zc,
  title: Qc,
  section: Jc,
  profileSection: el,
  label: tl,
  labelRow: nl,
  dim: ol,
  row: rl,
  icon: sl,
  iconGradient: il,
  name: al,
  nameGradient: cl,
  namePinBadge: ll,
  plans: ul,
  planOption: dl,
  selected: hl,
  radio: fl,
  radioDot: ml,
  features: pl,
  featureContent: gl,
  featureTitle: vl,
  gradientText: _l,
  soon: wl,
  infoBtn: yl,
  footer: Cl,
  disclaimer: Nl,
  disclaimerLink: Tl,
  subscribeBtn: El,
  activeLabel: Rl,
};

function _r({ text: e }) {
  return o(xn, {
    text: e,
    multiline: true,
    children: o("span", {
      className: G.infoBtn,
      children: o($s, { size: 14 }),
    }),
  });
}
function kl({ isOpen: e, onClose: t }) {
  const n = ks();
  const [r, s] = P(false);
  if (!e) {
    return null;
  }
  const i = n?.subscription?.isActive ?? false;
  const a = "199";

  const c = async () => {
    if (r) {
      return;
    }
    s(true);
    const u = window.open("about:blank", "_blank");
    try {
      const l = await ga.pay();
      if (l.error) {
        u?.close();
        Qe.error(l.error);
        return;
      }

      if (l.confirmationUrl && u) {
        u.location.href = l.confirmationUrl;
      } else if (l.confirmationUrl) {
        window.location.href = l.confirmationUrl;
      }
    } catch (l) {
      u?.close();
      Qe.error(l?.message || "Ошибка при создании платежа");
    } finally {
      s(false);
    }
  };

  return wt(
    o(vt, {
      onClose: t,
      showHeader: false,
      frameless: true,
      className: G.modal,
      children: o("div", {
        className: G.sub,
        children: [
          o("div", { className: G.title, children: "ИТД НУКСТА" }),
          o("div", {
            className: `${G.section} ${G.profileSection}`,
            children: [
              o("div", {
                className: G.label,
                children: "Ваш профиль с ИТД НУКСТА",
              }),
              o("div", {
                className: G.row,
                children: [
                  o(qe, { src: n?.avatar || null, size: "sm" }),
                  o("div", {
                    children: [
                      o("div", {
                        className: G.name,
                        children: [
                          o("span", {
                            className: G.nameGradient,
                            children: n?.displayName,
                          }),
                          o("img", {
                            src: "/assets/pins/subscription_nuksta.gif",
                            alt: "НУКСТА",
                            width: 24,
                            height: 24,
                            className: G.namePinBadge,
                          }),
                        ],
                      }),
                      o("div", { className: G.dim, children: "только что" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          o("div", {
            className: G.plans,
            children: o("button", {
              type: "button",
              className: `${G.planOption} ${G.selected}`,
              children: [
                o("div", {
                  className: G.row,
                  children: [
                    o("div", {
                      className: G.radio,
                      children: o("div", { className: G.radioDot }),
                    }),
                    o("span", { children: "1 месяц" }),
                  ],
                }),
                o("span", { className: G.dim, children: "199 ₽" }),
              ],
            }),
          }),
          o("div", {
            className: G.section,
            children: [
              o("div", {
                className: G.labelRow,
                children: [
                  o("span", {
                    className: G.label,
                    children: "Прикольные украшалки",
                  }),
                  o(_r, {
                    text: "итд — полностью независимый проект, который мы делаем сами, без инвесторов и крупных компаний. подписка НУКСТА — это способ поддержать нас, если вам хочется. это совсем не обязательно, мы рады каждому и так! ❤️",
                  }),
                ],
              }),
              o("div", {
                className: G.features,
                children: [
                  o("div", {
                    className: G.row,
                    children: [
                      o("span", {
                        className: G.icon,
                        children: o("div", { className: G.iconGradient }),
                      }),
                      o("div", {
                        children: [
                          o("div", {
                            className: `${G.featureTitle} ${G.gradientText}`,
                            children: "Уникальный цвет ника",
                          }),
                          o("div", {
                            className: G.dim,
                            children:
                              "Клевый цвет ника, который показывает, что вы поддерживаете итд!",
                          }),
                        ],
                      }),
                    ],
                  }),
                  o("div", {
                    className: G.row,
                    children: [
                      o("span", {
                        className: G.icon,
                        children: o("img", {
                          src: "/assets/pins/subscription_nuksta.gif",
                          alt: "Пин",
                          width: 20,
                          height: 20,
                        }),
                      }),
                      o("div", {
                        children: [
                          o("div", {
                            className: G.featureTitle,
                            children: "Пин поддерживателя",
                          }),
                          o("div", {
                            className: G.dim,
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
          o("div", {
            className: G.section,
            children: [
              o("div", {
                className: G.labelRow,
                children: [
                  o("span", {
                    className: G.label,
                    children: "Сможете с нами тестить новые штуки",
                  }),
                  o(_r, {
                    text: "мы постоянно добавляем в итд новые штуки и обычно тестим их внутри команды перед релизом. с подпиской НУКСТА вы сможете попробовать их первыми вместе с нами! а когда всё протестим — фишки станут доступны всем пользователям итд",
                  }),
                ],
              }),
              o("div", {
                className: G.features,
                children: [
                  o("div", {
                    className: G.row,
                    children: [
                      o("span", {
                        className: G.icon,
                        children: o(Qa, { size: 20 }),
                      }),
                      o("div", {
                        className: G.featureContent,
                        children: [
                          o("div", {
                            className: G.featureTitle,
                            children: "Загрузка видео",
                          }),
                          o("div", {
                            className: G.dim,
                            children:
                              "Получите возможность загружать видео одним из первых",
                          }),
                        ],
                      }),
                    ],
                  }),
                  o("div", {
                    className: G.row,
                    children: [
                      o("span", {
                        className: G.icon,
                        children: o(cc, { size: 20 }),
                      }),
                      o("div", {
                        className: G.featureContent,
                        children: [
                          o("div", {
                            className: G.featureTitle,
                            children: [
                              "Сообщения ",
                              o("span", {
                                className: G.soon,
                                children: "soon",
                              }),
                            ],
                          }),
                          o("div", {
                            className: G.dim,
                            children:
                              "Получите доступ к месенджеру одним из первых",
                          }),
                        ],
                      }),
                    ],
                  }),
                  o("div", {
                    className: G.row,
                    children: [
                      o("span", {
                        className: G.icon,
                        children: o(Xa, { size: 20 }),
                      }),
                      o("div", {
                        className: G.featureContent,
                        children: [
                          o("div", {
                            className: G.featureTitle,
                            children: [
                              "Музыка ",
                              o("span", {
                                className: G.soon,
                                children: "soon",
                              }),
                            ],
                          }),
                          o("div", {
                            className: G.dim,
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
          o("div", {
            className: G.footer,
            children: [
              o("div", {
                className: G.disclaimer,
                children: [
                  "Оплачивая, вы соглашаетесь с ",
                  o("a", {
                    href: "/subscription-terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: G.disclaimerLink,
                    children: "условиями платного доступа",
                  }),
                  ", ",
                  o("a", {
                    href: "/privacy",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: G.disclaimerLink,
                    children: "политикой конфиденциальности",
                  }),
                  " и ",
                  o("a", {
                    href: "/terms",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: G.disclaimerLink,
                    children: "условиями использования",
                  }),
                  ".",
                ],
              }),
              i
                ? o("div", {
                    className: G.activeLabel,
                    children: "Подписка активна",
                  })
                : o("button", {
                    type: "button",
                    className: G.subscribeBtn,
                    onClick: c,
                    disabled: r,
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
const bl = "z8EyAYBL";
const Sl = "Y3JzbYs0";
const Il = "XG8iIx1m";
const Pl = "lqZNoMkv";
const Yt = {
  sidebar: bl,
  sidebarContent: Sl,
  sidebarBottom: Il,
  legalLinks: Pl,
};

const Al = () => {
  const [e] = Wi();
  return (
    Ne(() => {
      const n = e.url || "/";
      return gc.some((r) => n.startsWith(r));
    }, [e.url]) ||
    o("aside", {
      className: Yt.sidebar,
      children: [
        o("div", { className: Yt.sidebarContent }),
        o("div", {
          className: Yt.sidebarBottom,
          children: [
            o("ul", {
              className: Yt.legalLinks,
              children: [
                o("li", {
                  children: o("a", {
                    href: "https://статус.итд.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Статус серверов",
                  }),
                }),
                o("li", {
                  children: o("a", {
                    href: "/terms",
                    children: "Условия использования",
                  }),
                }),
                o("li", {
                  children: o("a", {
                    href: "/privacy",
                    children: "Конфиденциальность",
                  }),
                }),
                o("li", {
                  children: o("a", {
                    href: "/cookies",
                    children: "Политика Cookies",
                  }),
                }),
              ],
            }),
            o("span", {
              className: Yt.copyright,
              children: "© 2026 ООО «ИТД»",
            }),
          ],
        }),
      ],
    })
  );
};

const Vs = Vt(null);
let xl = 0;
function Ll({ children: e }) {
  const [t, n] = P([]);

  const r = b((a) => {
    const c = `modal-${++xl}`;

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

  return o(Vs.Provider, {
    value: { openModal: r, closeModal: s, closeAllModals: i },
    children: [
      e,
      t.length > 0 &&
        wt(
          o(Re, {
            children: t.map(({ id: a, component: c }) =>
              o("div", { children: c }, a)
            ),
          }),
          document.body
        ),
    ],
  });
}
function Bn() {
  const e = Mn(Vs);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const Ol = "eVYjVkOA";
const Ml = "VH5uACo-";
const $l = "bTnQQZzL";
const Dl = "J-wdczzJ";
const Ul = "-aJk1548";
const Bl = "GJ-316Mz";
const wr = { spinner: Ol, spin: Ml, xs: $l, sm: Dl, md: Ul, lg: Bl };
function _t({ size: e = "md", className: t }) {
  const n = [wr.spinner, wr[e], t].filter(Boolean).join(" ");
  return o("div", { className: n, children: o(Ds, {}) });
}
const Fl = "WsNIl9yN";
const Hl = "s-rIVNft";
const Vl = "QJCDyxuF";
const Wl = "idj8YT1-";
const jl = "PYBTadOt";
const zl = "_0RWSXOse";
const ql = "X3An-GSw";
const Yl = "BCtviEiQ";
const Gl = "kZamU7XS";
const Xl = "FVEEba1t";
const Kl = "_2NIyBgLE";
const Zl = "IRuH4aXh";

const $t = {
  button: Fl,
  primary: Hl,
  secondary: Vl,
  ghost: Wl,
  accent: jl,
  danger: zl,
  sm: ql,
  md: Yl,
  lg: Gl,
  fullWidth: Xl,
  iconOnly: Kl,
  loading: Zl,
};

function $e({
  children: e,
  variant: t = "primary",
  size: n = "md",
  fullWidth: r = false,
  iconOnly: s = false,
  loading: i = false,
  className: a,
  type: c = "button",
  disabled: u,
  ...l
}) {
  const h = [
    $t.button,
    $t[t],
    $t[n],
    r && $t.fullWidth,
    s && $t.iconOnly,
    i && $t.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return o("button", {
    type: c,
    className: h,
    disabled: u || i,
    ...l,
    children: i ? o(_t, { size: "sm" }) : e,
  });
}
const Ql = "THCvAwre";
const Jl = "sRlzWhtw";
const eu = "pitt3a-W";
const tu = "tBAzXrnN";
const nu = "ZpD0zMWZ";
const ou = "_4WT1OTu3";
const ru = "MILRHLTo";
const su = "nCy8Y3ZB";
const iu = "Ib0lgBwH";
const au = "V-L-u7tm";
const cu = "JALjGN2Z";

const ze = {
  picker: Ql,
  searchFloating: Jl,
  searchInput: eu,
  skinTonePopup: tu,
  skinVariantButton: nu,
  skinVariantImage: ou,
  content: ru,
  categoryTitle: su,
  emojiGrid: iu,
  emojiButton: au,
  noResults: cu,
};

const lu = [
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

const uu = ["", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"];
const Ws = "emoji-picker-recent";
const In = 32;

const du = (e) => {
  try {
    return String.fromCodePoint(...e.split("-").map((t) => parseInt(t, 16)));
  } catch {
    return "";
  }
};

const Oo = (e) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${e.toLowerCase()}.png`;

const yr = () => {
  try {
    const e = localStorage.getItem(Ws);
    return e ? JSON.parse(e) : [];
  } catch {
    return [];
  }
};

const hu = (e) => {
  try {
    localStorage.setItem(Ws, JSON.stringify(e.slice(0, In)));
  } catch {}
};

const fu = (e) => {
  const t = [];
  const n = {};
  for (const [r, s] of Object.entries(e)) {
    n[r] = s.map((i) => {
      const a = Array.isArray(i.s) ? i.s : [i.s];

      const c = {
        unified: i.u,
        short_name: a[0],
        short_names: a,
        category: r,
        skin_variations: i.v,
      };

      t.push(c);
      return c;
    });
  }
  return { all: t, byCategory: n };
};

let gn = null;

const mu = () => {
  const [e, t] = P(gn);
  const [n, r] = P(!gn);

  V(() => {
    if (gn) {
      return;
    }
    (async () => {
      try {
        const i = await ge(() => import("./emoji-data-DrtcpqC0.js"), []);

        const a = fu(i.default);
        gn = a;
        t(a);
      } catch (i) {
        console.error("Failed to load emoji data:", i);
      } finally {
        r(false);
      }
    })();
  }, []);

  return Ne(
    () => ({
      all: e?.all ?? [],
      byCategory: e?.byCategory ?? {},
      isLoading: n,
    }),
    [e, n]
  );
};

const pu = (e) => {
  const [t, n] = P([]);
  const r = I([]);
  V(() => {
    n(yr());
  }, []);

  const s = Ne(
    () =>
      t
        .slice(0, In)
        .map((c) => e.find((u) => u.unified === c))
        .filter((c) => c !== undefined),
    [t, e]
  );

  const i = b((c) => {
    if (!r.current.includes(c)) {
      r.current.push(c);
    }
  }, []);

  const a = b(() => {
    if (r.current.length === 0) {
      return;
    }
    const c = yr();
    const l = [...r.current];
    for (const h of c) {
      if (!l.includes(h)) {
        l.push(h);
      }
    }
    hu(l.slice(0, In));
    n(l.slice(0, In));
    r.current = [];
  }, []);

  return { recentEmojis: s, addRecentEmoji: i, flushRecentEmojis: a };
};

const gu = ({ emoji: e, onClick: t }) =>
  o("button", {
    className: ze.emojiButton,
    onClick: t,
    children: o("img", {
      src: Oo(e.unified),
      alt: e.short_name,
      loading: "lazy",
    }),
  });

const js = (e) => {
  const t = [e.unified];
  if (e.skin_variations) {
    for (const n of uu.slice(1)) {
      const r = e.skin_variations[n];

      if (r) {
        t.push(r);
      }
    }
  }
  return t;
};

const vu = ({ popup: e, onSelect: t, onClose: n }) => {
  const r = I(null);
  const s = js(e.emoji);

  V(() => {
    const i = (a) => {
      if (r.current && !r.current.contains(a.target)) {
        n();
      }
    };
    document.addEventListener("mousedown", i);

    return () => document.removeEventListener("mousedown", i);
  }, [n]);

  return o("div", {
    ref: r,
    className: ze.skinTonePopup,
    style: { left: e.x, top: e.y },
    children: s.map((i) =>
      o(
        "button",
        {
          className: ze.skinVariantButton,
          onClick: () => t(i, e.emoji.short_name),
          children: o("img", {
            src: Oo(i),
            alt: "",
            className: ze.skinVariantImage,
          }),
        },
        i
      )
    ),
  });
};

const zs = ({ emojis: e, onEmojiClick: t }) =>
  o("div", {
    className: ze.emojiGrid,
    children: e.map((n) =>
      o(gu, { emoji: n, onClick: (r) => t(n, r) }, n.unified)
    ),
  });

const _u = ({ name: e, emojis: t, onEmojiClick: n, sectionRef: r }) =>
  o("div", {
    ref: r,
    className: ze.categorySection,
    children: [
      o("div", { className: ze.categoryTitle, children: e }),
      o(zs, { emojis: t, onEmojiClick: n }),
    ],
  });

const wu = ({ value: e, onChange: t, placeholder: n = "Search emojis..." }) =>
  o("div", {
    className: ze.searchFloating,
    children: o("input", {
      type: "text",
      className: ze.searchInput,
      placeholder: n,
      value: e,
      onInput: (r) => t(r.target.value),
    }),
  });

const yu = ({
  onEmojiSelect: e,
  onClose: t,
  width: n = 280,
  height: r = 380,
  excludeCategories: s = [],
}) => {
  const [i, a] = P("apple");
  const [c, u] = P("");
  const [l, h] = P(null);
  const d = I(null);
  const f = I(null);
  const m = I({});
  const { all: w, byCategory: p, isLoading: g } = mu();
  const { recentEmojis: v, addRecentEmoji: _, flushRecentEmojis: E } = pu(w);
  V(
    () => () => {
      E();
      t?.();
    },
    [E, t]
  );

  const N = Ne(() => {
    if (!c.trim()) {
      return null;
    }
    const k = c.toLowerCase();
    return w
      .filter(
        (A) =>
          !s.includes(A.category) &&
          A.short_names.some((T) => T.toLowerCase().includes(k))
      )
      .slice(0, 100);
  }, [c, w, s]);

  const y = Ne(() => {
    if (i === "apple") {
      const k = [];

      if (v.length > 0) {
        k.push({ id: "recent", name: "Recent", emojis: v });
      }

      for (const A of lu) {
        if (s.includes(A)) {
          continue;
        }
        const T = p[A] || [];

        if (T.length !== 0) {
          k.push({ id: A, name: A.split(" & ")[0], emojis: T });
        }
      }
      return k;
    }
    return [];
  }, [i, v, p, s]);

  const S = b((k, A) => {
    if (js(k).length > 1) {
      const A_currentTarget = A.currentTarget;
      const x = f.current?.getBoundingClientRect();
      const z = A_currentTarget.getBoundingClientRect();
      if (x) {
        const ee = z.left - x.left + z.width / 2;
        const q = z.top - x.top - 60;
        h({ emoji: k, x: ee, y: q });
      }
      return;
    }
    C(k.unified, k.short_name);
  }, []);

  const C = b(
    (k, A) => {
      _(k);
      h(null);
      e({ unified: k, emoji: du(k), name: A, imageUrl: Oo(k) });
    },
    [e, _]
  );

  const R = () =>
    g
      ? o(_t, {})
      : c && N
      ? N.length === 0
        ? o("div", { className: ze.noResults, children: "No emojis found" })
        : o(zs, { emojis: N, onEmojiClick: S })
      : o(Re, {
          children: y.map((k) =>
            o(
              _u,
              {
                name: k.name,
                emojis: k.emojis,
                onEmojiClick: S,
                sectionRef: (A) => {
                  m.current[k.id] = A;
                },
              },
              k.id
            )
          ),
        });

  return o("div", {
    className: ze.picker,
    style: { width: n, height: r },
    ref: f,
    children: [
      l && o(vu, { popup: l, onSelect: C, onClose: () => h(null) }),
      o("div", { className: ze.content, ref: d, children: R() }),
      o(wu, { value: c, onChange: u }),
    ],
  });
};

const Cu = "-cIO9SLG";
const Nu = "JNwvD1Vo";
const Tu = "IHofJbwy";
const Yn = { wrapper: Cu, popup: Nu, closing: Tu };
const Cr = 280;
const Nr = 380;
const Gn = 8;
const Eu = 100;
const Tr = 150;
const Ru = 150;
function Mo({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [r, s] = P(false);
  const [i, a] = P(false);
  const [c, u] = P(null);
  const l = I(null);
  const h = I(null);
  const d = I(null);
  const f = I(null);
  const m = I(null);
  const w = I(null);

  const p = b(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }
    const R = l_current.getBoundingClientRect();

    const { innerHeight, innerWidth } = window;

    const T = innerHeight - R.bottom;
    const O = innerWidth - R.left;
    const R_right = R.right;
    const z = T >= Nr + Gn ? "bottom" : "top";
    const ee = O >= Cr || O > R_right ? "left" : "right";
    let q;
    let ae;

    if (z === "top") {
      q = R.top - Nr - Gn;
    } else {
      q = R.bottom + Gn;
    }

    if (ee === "left") {
      ae = R.left;
    } else {
      ae = R.right - Cr;
    }

    u({
      top: q,
      left: ae,
      transformOrigin: `${z === "top" ? "bottom" : "top"} ${
        ee === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const g = b(() => {
    if (!r && !i) {
      if (!i) {
        p();
        s(true);
      }
    }
  }, [r, i, p]);

  const v = b(() => {
    if (r && !i) {
      if (!i) {
        a(true);

        w.current = window.setTimeout(() => {
          s(false);
          a(false);
        }, Ru);
      }
    }
  }, [r, i]);

  const _ = () => {
    if (m.current) {
      clearTimeout(m.current);
      m.current = null;
    }

    if (w.current) {
      clearTimeout(w.current);
      w.current = null;
    }

    if (i) {
      a(false);
    }

    if (!r) {
      f.current = window.setTimeout(() => {
        g();
      }, Eu);
    }
  };

  const E = () => {
    if (f.current) {
      clearTimeout(f.current);
      f.current = null;
    }

    m.current = window.setTimeout(() => {
      v();
    }, Tr);
  };

  V(
    () => () => {
      if (f.current) {
        clearTimeout(f.current);
      }

      if (m.current) {
        clearTimeout(m.current);
      }

      if (w.current) {
        clearTimeout(w.current);
      }
    },
    []
  );

  const N = () => {
    if (m.current) {
      clearTimeout(m.current);
      m.current = null;
    }

    if (w.current) {
      clearTimeout(w.current);
      w.current = null;
    }

    if (i) {
      a(false);
    }
  };

  const y = () => {
    m.current = window.setTimeout(() => {
      v();
    }, Tr);
  };

  const S = (C) => {
    C.preventDefault();
  };

  return o("div", {
    ref: h,
    className: Yn.wrapper,
    onMouseEnter: _,
    onMouseLeave: E,
    onMouseDown: S,
    children: [
      o("button", {
        ref: l,
        className: t,
        title: "Добавить эмоджи",
        children: o(dc, { size: n }),
      }),
      r &&
        c &&
        wt(
          o("div", {
            ref: d,
            className: `${Yn.popup} ${i ? Yn.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: N,
            onMouseLeave: y,
            onMouseDown: S,
            children: o(yu, { onEmojiSelect: e }),
          }),
          document.body
        ),
    ],
  });
}
const ku = "_2sS6K7hx";
const bu = "WGDOlmRO";
const Su = "hvpitmZY";
const Iu = "BStIlELw";
const Pu = "aY94etMT";
const Au = "rPynk8pw";
const xu = "BOAqDnoc";
const Lu = "haxq9tnV";
const Ou = "_913-arE-";
const Mu = "_76HhedQ0";
const $u = "_7PQB1LTO";
const Du = "UnOw5SXP";
const Uu = "s594n2Yt";
const Bu = "nOfp-no-";
const Fu = "PRj4ZKu-";
const Hu = "_0a-n56Kv";

const xe = {
  editor: ku,
  empty: bu,
  bold: Su,
  italic: Iu,
  underline: Pu,
  strike: Au,
  spoiler: xu,
  monospace: Lu,
  quote: Ou,
  link: Mu,
  menu: $u,
  buttons: Du,
  button: Uu,
  linkForm: Bu,
  linkInput: Fu,
  linkSubmit: Hu,
};

const Vu = [
  { type: "bold", icon: Ha, title: "Жирный" },
  { type: "italic", icon: Wa, title: "Курсив" },
  { type: "underline", icon: Ya, title: "Подчёркнутый" },
  { type: "strike", icon: qa, title: "Зачёркнутый" },
  { type: "spoiler", icon: za, title: "Спойлер" },
  { type: "monospace", icon: Va, title: "Моноширинный" },
  { type: "quote", icon: ja, title: "Цитата" },
  { type: "link", icon: Ss, title: "Ссылка" },
];

const Ln = {
  bold: xe.bold,
  italic: xe.italic,
  underline: xe.underline,
  strike: xe.strike,
  spoiler: xe.spoiler,
  monospace: xe.monospace,
  quote: xe.quote,
  link: xe.link,
};

const Fn = hs(
  (
    {
      value: t,
      spans: n,
      onChange: r,
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
    const w = I(null);
    const [p, g] = P(false);
    const [v, _] = P({ x: 0, y: 0 });
    const [E, N] = P(false);
    const [y, S] = P("");
    const C = I(null);
    const R = I(null);
    const k = I(null);
    const A = I(false);
    const T = I(false);
    const O = I(t);
    const x = I(n);
    const z = I(r);

    V(() => {
      O.current = t;
      x.current = n;
      z.current = r;
    }, [t, n, r]);

    Eo(
      m,
      () => ({
        insertText: (L) => {
          const w_current = w.current;
          if (!w_current) {
            return;
          }
          w_current.focus();
          const D = window.getSelection();
          if (!D) {
            return;
          }
          let Y = 0;
          if (D.rangeCount > 0) {
            const re = D.getRangeAt(0);
            Y = zu(w_current, re.startContainer, re.startOffset);
          }
          const O_current = O.current;
          const x_current = x.current;
          const oe = O_current.slice(0, Y) + L + O_current.slice(Y);

          const ie = x_current.map((re) =>
            re.offset >= Y
              ? { ...re, offset: re.offset + L.length }
              : re.offset + re.length > Y
              ? { ...re, length: re.length + L.length }
              : re
          );

          T.current = true;
          O.current = oe;
          x.current = ie;
          const fe = document.createTextNode(L);
          if (D.rangeCount > 0) {
            const re = D.getRangeAt(0);
            re.deleteContents();
            re.insertNode(fe);
            re.setStartAfter(fe);
            re.setEndAfter(fe);
            D.removeAllRanges();
            D.addRange(re);
          }
          z.current(oe, ie);
        },

        focus: () => {
          w.current?.focus();
        },
      }),
      []
    );

    const ee = b(() => {
      if (!t) {
        return "";
      }
      if (n.length === 0) {
        return Xn(t);
      }

      const L = [...n].sort((X, oe) => X.offset - oe.offset);

      const B = [];
      for (const X of L) {
        B.push({ pos: X.offset, type: "start", span: X });
        B.push({ pos: X.offset + X.length, type: "end", span: X });
      }
      B.sort((X, oe) =>
        X.pos !== oe.pos
          ? X.pos - oe.pos
          : X.type !== oe.type
          ? X.type === "end"
            ? -1
            : 1
          : 0
      );
      let D = "";
      let Y = 0;
      const j = [];
      for (const X of B) {
        if (X.pos > Y) {
          const oe = t.substring(Y, X.pos);
          D += Er(Xn(oe), j);
          Y = X.pos;
        }
        if (X.type === "start") {
          j.push(X.span);
        } else {
          const oe = j.indexOf(X.span);

          if (oe !== -1) {
            j.splice(oe, 1);
          }
        }
      }
      if (Y < t.length) {
        const X = t.substring(Y);
        D += Er(Xn(X), j);
      }
      return D || "<br>";
    }, [t, n]);

    V(() => {
      if (T.current) {
        T.current = false;
        return;
      }
      const w_current = w.current;
      if (!w_current || (document.activeElement === w_current && t !== "")) {
        return;
      }
      const B = ee();

      if (w_current.innerHTML !== B) {
        w_current.innerHTML = B;
      }
    }, [ee, t]);

    V(() => {
      if (a && w.current) {
        const w_current = w.current;
        w_current.focus();

        if (w_current.childNodes.length > 0) {
          const B = window.getSelection();
          if (B) {
            const D = document.createRange();
            D.selectNodeContents(w_current);
            D.collapse(false);
            B.removeAllRanges();
            B.addRange(D);
          }
        }
      }
    }, [a]);

    V(() => {
      if (E && R.current) {
        R.current.focus();
      }
    }, [E]);

    const q = b(
      (L) => {
        if (A.current) {
          return;
        }
        const w_current = w.current;
        if (!w_current) {
          return;
        }
        if (L?.data === " ") {
          const j = window.getSelection();
          if (j && j.rangeCount > 0) {
            const oe = j.getRangeAt(0).startContainer;
            let ie = null;
            let fe = oe;

            while (fe && fe !== w_current) {
              if (fe.nodeType === Node.ELEMENT_NODE) {
                const re = fe;
                if (re.tagName === "SPAN" && re.className) {
                  ie = re;
                  break;
                }
              }
              fe = fe.parentNode;
            }

            if (ie) {
              const re = ie.textContent || "";
              if (re.endsWith(" ")) {
                ie.textContent = re.slice(0, -1);
                const Ye = document.createTextNode(" ");
                ie.parentNode?.insertBefore(Ye, ie.nextSibling);
                const Ge = document.createRange();
                Ge.setStartAfter(Ye);
                Ge.setEndAfter(Ye);
                j.removeAllRanges();
                j.addRange(Ge);
              }
            }
          }
        }
        const D = w_current.innerText.replace(/\n$/, "");
        if (D.length > i) {
          const j = D.substring(0, i);
          T.current = true;
          r(j, qu(n, j));
          return;
        }
        const Y = Yu(w_current);
        T.current = true;
        r(D, Y);
      },
      [i, r, n]
    );

    const ae = b(
      (L) => {
        if (d) {
          return;
        }
        const B = window.getSelection();
        if (!B || B.isCollapsed) {
          return;
        }
        L.preventDefault();
        k.current = B.getRangeAt(0).cloneRange();

        const D = Math.max(
          10,
          Math.min(L.clientX - 150, window.innerWidth - 310)
        );

        const Y = Math.max(10, L.clientY - 50);
        _({ x: D, y: Y });
        g(true);
      },
      [d]
    );

    const ce = b(
      (L) => {
        L.preventDefault();

        if (f && L.clipboardData?.files?.length) {
          const X = Array.from(L.clipboardData.files).filter((oe) =>
            oe.type.startsWith("image/")
          );
          if (X.length > 0) {
            f(X);
            return;
          }
        }

        const B = L.clipboardData?.getData("text/plain") || "";
        if (!B) {
          return;
        }
        const D = window.getSelection();
        if (!D || !D.rangeCount) {
          return;
        }
        const Y = D.getRangeAt(0);
        Y.deleteContents();
        const j = document.createTextNode(B);
        Y.insertNode(j);
        Y.setStartAfter(j);
        Y.setEndAfter(j);
        D.removeAllRanges();
        D.addRange(Y);
        q();
      },
      [q, f]
    );

    const K = b(() => {
      const w_current = w.current;
      if (w_current && !O.current) {
        const B = window.getSelection();
        if (B) {
          const D = document.createRange();
          D.setStart(w_current, 0);
          D.collapse(true);
          B.removeAllRanges();
          B.addRange(D);
        }
      }
    }, []);

    const te = b(
      (L) => {
        if (L.key === "Enter" && !L.shiftKey && h) {
          L.preventDefault();
          h();
          return;
        }
        if (!d && (L.ctrlKey || L.metaKey)) {
          let B = null;
          switch (L.key.toLowerCase()) {
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
            L.preventDefault();
            U(B);
          }
        }
      },
      [h, d]
    );

    const U = b(
      (L, B) => {
        const w_current = w.current;
        if (!w_current) {
          return;
        }
        const Y = window.getSelection();
        if (
          !Y ||
          (k.current && (Y.removeAllRanges(), Y.addRange(k.current)),
          Y.isCollapsed)
        ) {
          return;
        }
        const j = Y.getRangeAt(0);
        const X = document.createElement("span");
        X.className = Ln[L];

        if (L === "link" && B) {
          X.dataset.url = B;
        }

        const oe = Gu(j.commonAncestorContainer, Ln[L]);
        if (oe) {
          Xu(oe);
        } else {
          try {
            j.surroundContents(X);
          } catch {
            const ie = j.extractContents();
            X.appendChild(ie);
            j.insertNode(X);
          }
        }
        q();
        g(false);
        N(false);
        S("");
        k.current = null;
        w_current.focus();
      },
      [q]
    );

    const W = b(
      (L) => {
        if (L === "link") {
          N(true);
        } else {
          U(L);
        }
      },
      [U]
    );

    const Z = b(
      (L) => {
        L.preventDefault();

        if (y.trim()) {
          U("link", y.trim());
        }
      },
      [U, y]
    );

    V(() => {
      if (!p) {
        return;
      }

      const L = (D) => {
        if (C.current && !C.current.contains(D.target)) {
          g(false);
          N(false);
          S("");
          k.current = null;
        }
      };

      const B = () => {
        g(false);
        N(false);
        S("");
        k.current = null;
      };

      document.addEventListener("mousedown", L);
      window.addEventListener("scroll", B, true);

      return () => {
        document.removeEventListener("mousedown", L);
        window.removeEventListener("scroll", B, true);
      };
    }, [p]);
    const $ = !t;
    return o(Re, {
      children: [
        o("div", {
          ref: w,
          className: `${xe.editor} ${c} ${$ ? xe.empty : ""}`,
          contentEditable: true,
          "data-placeholder": s,
          onInput: (L) => q(L),
          onFocus: K,
          onPaste: ce,
          onContextMenu: ae,
          onKeyDown: te,
          onCompositionStart: () => {
            A.current = true;
          },
          onCompositionEnd: () => {
            A.current = false;
            q();
          },
          style: { minHeight: u, maxHeight: l },
        }),
        p &&
          wt(
            o("div", {
              ref: C,
              className: xe.menu,
              style: { left: v.x, top: v.y },
              children: E
                ? o("form", {
                    className: xe.linkForm,
                    onSubmit: Z,
                    children: [
                      o("input", {
                        ref: R,
                        type: "url",
                        className: xe.linkInput,
                        placeholder: "https://...",
                        value: y,
                        onInput: (L) => S(L.target.value),
                      }),
                      o("button", {
                        type: "submit",
                        className: xe.linkSubmit,
                        disabled: !y.trim(),
                        children: "OK",
                      }),
                    ],
                  })
                : o("div", {
                    className: xe.buttons,
                    children: Vu.map(({ type: L, icon: B, title: D }) =>
                      o(
                        "button",
                        {
                          type: "button",
                          className: xe.button,
                          onClick: () => W(L),
                          title: D,
                          children: o(B, { size: 16 }),
                        },
                        L
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
function Wu(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function ju(e) {
  return e !== "mention" && e !== "hashtag";
}
function Er(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const r of t) {
    if (!ju(r.type)) {
      continue;
    }
    const s = Ln[r.type];
    const i = r.type === "link" ? ` data-url="${Wu(r.url)}"` : "";
    n = `<span class="${s}"${i}>${n}</span>`;
  }
  return n;
}
function zu(e, t, n) {
  let r = 0;
  const s = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let i = s.nextNode();

  while (i) {
    if (i === t) {
      return r + n;
    }
    r += i.textContent?.length || 0;
    i = s.nextNode();
  }

  return r;
}
function qu(e, t) {
  return e
    .map((n) => {
      const r = n.offset + n.length;
      return n.offset >= t.length
        ? null
        : r > t.length
        ? { ...n, length: t.length - n.offset }
        : n;
    })
    .filter((n) => n !== null);
}
function Yu(e) {
  const t = [];

  const n = (r, s) => {
    if (r.nodeType === Node.TEXT_NODE) {
      return s + (r.textContent?.length || 0);
    }
    if (r.nodeType === Node.ELEMENT_NODE) {
      const i = r;
      if (i.tagName === "BR") {
        return s + 1;
      }
      let a = null;
      for (const [l, h] of Object.entries(Ln)) {
        if (i.classList.contains(h)) {
          a = l;
          break;
        }
      }
      const c = s;
      let u = s;
      for (const l of Array.from(r.childNodes)) {
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
function Gu(e, t) {
  let n = e;

  while (n && n.nodeType !== Node.DOCUMENT_NODE) {
    if (n.nodeType === Node.ELEMENT_NODE) {
      const r = n;
      if (r.classList.contains(t)) {
        return r;
      }
    }
    n = n.parentNode;
  }

  return null;
}
function Xu(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}
const Ku = "u13FLJio";
const Zu = "bToZwjfv";
const Qu = "eB--cks6";
const Ju = "_9ohK9-tN";
const ed = "j2Wceqpa";
const td = "SKnXo-cA";
const nd = "_8wZrlhZa";
const od = "ywO8uWzl";
const rd = "q4IPCH5G";
const sd = "iqaeIAPL";
const id = "YGC2tIXC";
const ad = "Hvh4qKiC";
const cd = "-bZAaxpL";
const ld = "mY50rIUo";
const ud = "SVQ04Pz4";
const dd = "-aTjRl6d";
const hd = "vskBTYBr";
const fd = "_0haeBjBl";
const md = "m4JSOoi7";
const pd = "xuKvww1d";
const gd = "GMSlkrum";
const vd = "T1UhUe7-";
const _d = "KPX--Htj";
const wd = "UDcyRX73";
const yd = "G9MjuFO7";
const Cd = "yAXdi86A";
const Nd = "_5EoTr5dx";
const Td = "_2aj24MP-";
const Ed = "_5JkW0FiQ";
const Rd = "X4D-Hg95";
const kd = "WafaU2-d";
const bd = "eb-u7Ezx";
const Sd = "u52eDQyv";
const Id = "V-0z6M2W";
const Pd = "_7-fvD6Zx";

const se = {
  form: Ku,
  dragActive: Zu,
  whatsNew: Qu,
  editor: Ju,
  dragOverlay: ed,
  attachments: td,
  attachmentPreview: nd,
  uploading: od,
  uploadError: rd,
  videoPreviewWrapper: sd,
  videoPlayIcon: id,
  uploadOverlay: ad,
  spinner: cd,
  errorOverlay: ld,
  errorText: ud,
  removeAttachment: dd,
  actions: hd,
  mediaButtons: fd,
  mediaButton: md,
  submitGroup: pd,
  charCount: gd,
  error: vd,
  pollContainer: _d,
  pollHeader: wd,
  pollTitle: yd,
  pollClose: Cd,
  pollQuestion: Nd,
  pollOptions: Td,
  pollOptionRow: Ed,
  pollOption: Rd,
  removeOption: kd,
  addOption: bd,
  pollFooter: Sd,
  pollToggle: Id,
  active: Pd,
};

function Rr({ src: e, type: t }) {
  return t === "video"
    ? o("div", {
        className: se.videoPreviewWrapper,
        children: [
          o("video", { src: e, preload: "metadata" }),
          o("div", {
            className: se.videoPlayIcon,
            children: o(Ka, { size: 24 }),
          }),
        ],
      })
    : o("img", { src: e, alt: "" });
}
function qs({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? o("div", {
        className: se.attachments,
        children: [
          e.map((s) =>
            o(
              "div",
              {
                className: se.attachmentPreview,
                children: [
                  o(Rr, { src: s.previewUrl, type: s.type }),
                  o("button", {
                    className: se.removeAttachment,
                    onClick: () => n(s.id),
                    children: o(nt, {}),
                  }),
                ],
              },
              s.id
            )
          ),
          t.map((s) =>
            o(
              "div",
              {
                className: `${se.attachmentPreview} ${
                  s.error ? se.uploadError : se.uploading
                }`,
                children: [
                  o(Rr, { src: s.previewUrl, type: s.type }),
                  !s.error &&
                    o("div", {
                      className: se.uploadOverlay,
                      children: o("div", { className: se.spinner }),
                    }),
                  s.error &&
                    o("div", {
                      className: se.errorOverlay,
                      children: o("span", {
                        className: se.errorText,
                        children: s.error,
                      }),
                    }),
                  o("button", {
                    className: se.removeAttachment,
                    onClick: () => n(s.id),
                    children: o(nt, {}),
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
const gt = {
  MAX_CHARS: 1000 /* 1e3 */,
  MIN_POLL_OPTIONS: 2,
  MAX_POLL_OPTIONS: 10,
  MAX_POLL_QUESTION_LENGTH: 200,
  MAX_POLL_OPTION_LENGTH: 100,
  MAX_TEXTAREA_HEIGHT: 400,
};
function Ad({
  poll: e,
  onQuestionChange: t,
  onOptionChange: n,
  onAddOption: r,
  onRemoveOption: s,
  onMultipleChoiceToggle: i,
  onClose: a,
}) {
  return o("div", {
    className: se.pollContainer,
    children: [
      o("div", {
        className: se.pollHeader,
        children: [
          o("span", { className: se.pollTitle, children: "Опрос" }),
          o("button", {
            className: se.pollClose,
            onClick: a,
            children: o(nt, {}),
          }),
        ],
      }),
      o("input", {
        type: "text",
        className: se.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: (c) => t(c.target.value),
      }),
      o("div", {
        className: se.pollOptions,
        children: e.options.map((c, u) =>
          o(
            "div",
            {
              className: se.pollOptionRow,
              children: [
                o("input", {
                  type: "text",
                  className: se.pollOption,
                  placeholder: `Вариант ${u + 1}`,
                  value: c.text,
                  maxLength: 50,
                  onInput: (l) => n(c.id, l.target.value),
                }),
                e.options.length > gt.MIN_POLL_OPTIONS &&
                  o("button", {
                    className: se.removeOption,
                    onClick: () => s(c.id),
                    children: o(nt, {}),
                  }),
              ],
            },
            c.id
          )
        ),
      }),
      e.options.length < gt.MAX_POLL_OPTIONS &&
        o("button", {
          className: se.addOption,
          onClick: r,
          children: [o(Bs, {}), o("span", { children: "Добавить вариант" })],
        }),
      o("div", {
        className: se.pollFooter,
        children: o("label", {
          className: se.pollToggle,
          children: [
            o("input", {
              type: "checkbox",
              checked: e.multipleChoice,
              onChange: i,
            }),
            o("span", { children: "Несколько вариантов ответа" }),
          ],
        }),
      }),
    ],
  });
}
const Kn = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};
function xd() {
  const [e, t] = P(false);
  const [n, r] = P(Kn);

  const s = b((w) => {
    if (w.length <= gt.MAX_POLL_QUESTION_LENGTH) {
      r((p) => ({
        ...p,
        question: w,
      }));
    }
  }, []);

  const i = b((w, p) => {
    if (p.length <= gt.MAX_POLL_OPTION_LENGTH) {
      r((g) => ({
        ...g,
        options: g.options.map((v) => (v.id === w ? { ...v, text: p } : v)),
      }));
    }
  }, []);

  const a = b(() => {
    if (n.options.length < gt.MAX_POLL_OPTIONS) {
      r((w) => ({
        ...w,
        options: [...w.options, { id: Date.now().toString(), text: "" }],
      }));
    }
  }, [n.options.length]);

  const c = b(
    (w) => {
      if (n.options.length > gt.MIN_POLL_OPTIONS) {
        r((p) => ({
          ...p,
          options: p.options.filter((g) => g.id !== w),
        }));
      }
    },
    [n.options.length]
  );

  const u = b(() => {
    r((w) => ({
      ...w,
      multipleChoice: !w.multipleChoice,
    }));
  }, []);

  const l = b(() => {
    t(false);
    r(Kn);
  }, []);

  const h = b(() => {
    t((w) => !w);
  }, []);

  const d = b(() => {
    if (!e) {
      return true;
    }
    const w = n.question.trim().length > 0;

    const p = n.options.filter((g) => g.text.trim().length > 0);

    return w && p.length >= gt.MIN_POLL_OPTIONS;
  }, [e, n]);

  const f = b(() => {
    if (!(!e || !d())) {
      return {
        question: n.question.trim(),
        options: n.options
          .filter((w) => w.text.trim().length > 0)
          .map((w) => ({
            text: w.text.trim(),
          })),
        multipleChoice: n.multipleChoice,
      };
    }
  }, [e, d, n]);

  const m = b(() => {
    t(false);
    r(Kn);
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
const Ld = {
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
function Od(e, t = "Произошла ошибка") {
  return e ? Ld[e] ?? t : t;
}
function Ys(e = 10, t = false) {
  const [n, r] = P([]);
  const [s, i] = P([]);
  const a = I(null);
  const c = I(n);
  const u = I(s);
  c.current = n;
  u.current = s;

  V(
    () => () => {
      c.current.forEach((E) => URL.revokeObjectURL(E.previewUrl));

      u.current.forEach((E) => URL.revokeObjectURL(E.previewUrl));
    },
    []
  );

  const l = s.length > 0;

  const h =
    n.some((E) => E.type === "video") || s.some((E) => E.type === "video");

  const d =
    n.some((E) => E.type === "image") || s.some((E) => E.type === "image");

  const f = b(() => {
    a.current?.click();
  }, []);

  const m = b(
    async (E) => {
      const N = Dt.isValidVideoType(E);
      const y = Dt.isValidImageType(E);
      if (N && !t) {
        Qe.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!y && !N) {
        Qe.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const u_current = u.current;

      const R =
        c_current.some((x) => x.type === "video") ||
        u_current.some((x) => x.type === "video");

      const k =
        c_current.some((x) => x.type === "image") ||
        u_current.some((x) => x.type === "image");

      if (N && k) {
        Qe.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (y && R) {
        Qe.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (N && R) {
        Qe.error("Можно загрузить только 1 видео");
        return;
      }
      const A = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const T = URL.createObjectURL(E);
      const O = N ? "video" : "image";
      i((x) => [...x, { id: A, file: E, previewUrl: T, progress: 0, type: O }]);
      try {
        const x = await Dt.uploadMedia(E);

        i((z) => z.filter((ee) => ee.id !== A));

        r((z) => [
          ...z,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: x.id,
            url: x.url,
            previewUrl: T,
            type: O,
          },
        ]);
      } catch (x) {
        let z = "Ошибка загрузки";

        if (Se(x)) {
          z = Od(x.code, x.message);
        } else if (x instanceof Error) {
          z = x.message;
        }

        Qe.error(z);

        i((ee) => ee.filter((q) => q.id !== A));

        URL.revokeObjectURL(T);
      }
    },
    [t]
  );

  const w = b(
    (E) => {
      const E_target = E.target;
      const E_target_files = E_target.files;
      if (!E_target_files || E_target_files.length === 0) {
        return;
      }
      const S = n.length + s.length;
      const C = e - S;
      if (C <= 0) {
        return;
      }
      Array.from(E_target_files).slice(0, C).forEach(m);
      E_target.value = "";
    },
    [n.length, s.length, e, m]
  );

  const p = b((E) => {
    r((N) => {
      const y = N.find((S) => S.id === E);

      if (y) {
        URL.revokeObjectURL(y.previewUrl);
      }

      return N.filter((S) => S.id !== E);
    });

    i((N) => {
      const y = N.find((S) => S.id === E);

      if (y) {
        URL.revokeObjectURL(y.previewUrl);
      }

      return N.filter((S) => S.id !== E);
    });
  }, []);

  const g = b(
    (E) => {
      const N = E.filter((C) =>
        t ? Dt.isValidMediaType(C) : Dt.isValidImageType(C)
      );
      if (N.length === 0) {
        return;
      }
      const y = c.current.length + u.current.length;
      const S = e - y;

      if (S > 0) {
        N.slice(0, S).forEach(m);
      }
    },
    [e, m, t]
  );

  const v = b(
    async (E) => {
      const [N, y] = E.split(",");
      const S = N.match(/:(.*?);/)?.[1] || "image/png";
      const C = atob(y);
      const R = new Uint8Array(C.length);
      for (let T = 0; T < C.length; T++) {
        R[T] = C.charCodeAt(T);
      }
      const k = new Blob([R], { type: S });
      const A = new File([k], `drawing-${Date.now()}.png`, {
        type: "image/png",
      });
      m(A);
    },
    [m]
  );

  const _ = b(() => {
    n.forEach((E) => URL.revokeObjectURL(E.previewUrl));

    s.forEach((E) => URL.revokeObjectURL(E.previewUrl));

    r([]);
    i([]);
  }, [n, s]);

  return {
    images: n,
    uploadingImages: s,
    isUploading: l,
    hasVideo: h,
    hasImages: d,
    openFilePicker: f,
    removeImage: p,
    addImage: v,
    uploadFiles: g,
    clearAll: _,
    fileInputRef: a,
    handleFileChange: w,
  };
}
const Md = pe(() =>
  ge(() => import("./index-eVwohftX.js"), __vite__mapDeps([0, 1])).then(
    (e) => ({
      default: e.DrawingCanvas,
    })
  )
);
function $d({
  onSubmit: e,
  autoFocus: t = false,
  placeholder: n = "Что нового?",
}) {
  const {
    text: r,
    spans: s,
    editorRef: i,
    handleChange: a,
    insertText: c,
    reset: u,
  } = Dn();

  const [l, h] = P(false);
  const [d, f] = P(false);
  const [m, w] = P(false);
  const p = I(0);
  const g = at();
  const _ = ks()?.subscription?.isActive ?? false;

  const {
    images: E,
    uploadingImages: N,
    isUploading: y,
    hasVideo: S,
    openFilePicker: C,
    removeImage: R,
    addImage: k,
    uploadFiles: A,
    clearAll: T,
    fileInputRef: O,
    handleFileChange: x,
  } = Ys(10, _);

  const {
    isPollOpen: z,
    poll: ee,
    togglePoll: q,
    handlePollQuestionChange: ae,
    handlePollOptionChange: ce,
    handleAddPollOption: K,
    handleRemovePollOption: te,
    handleMultipleChoiceToggle: U,
    handleClosePoll: W,
    isPollValid: Z,
    getPollData: $,
    resetPoll: L,
  } = xd();

  const B = gt.MAX_CHARS - r.length;
  const D = B < 0;
  const Y = z && Z();
  const j = E.length > 0 || N.length > 0;
  const X = r.trim().length > 0 || Y || Y || j;
  const oe = _ ? `${mo},${ha}` : mo;

  const ie = b(async () => {
    if (!(!X || D || D || y || D || y || d)) {
      f(true);
      try {
        const ve = E.map((J) => ({
          mediaId: J.mediaId,
          url: J.url,
        }));
        await e?.(r, s, ve, $());
        u();
        T();
        L();
      } catch {
      } finally {
        f(false);
      }
    }
  }, [X, D, y, d, r, s, E, $, e, u, T, L]);

  const fe = b(
    (ve) => {
      k(ve);
    },
    [k]
  );

  const re = b(
    (ve) => {
      c(ve.emoji);
    },
    [c]
  );

  const Ye = b((ve) => {
    ve.preventDefault();
    ve.stopPropagation();
    p.current++;

    if (ve.dataTransfer?.types.includes("Files")) {
      w(true);
    }
  }, []);

  const Ge = b((ve) => {
    ve.preventDefault();
    ve.stopPropagation();
  }, []);

  const Ee = b((ve) => {
    ve.preventDefault();
    ve.stopPropagation();
    p.current--;

    if (p.current === 0) {
      w(false);
    }
  }, []);

  const lt = b(
    (ve) => {
      ve.preventDefault();
      ve.stopPropagation();
      p.current = 0;
      w(false);
      const J = ve.dataTransfer?.files;

      if (J && J.length > 0) {
        A(Array.from(J));
      }
    },
    [A]
  );

  return o("div", {
    className: `${se.form} ${m ? se.dragActive : ""}`,
    onDragEnter: Ye,
    onDragOver: Ge,
    onDragLeave: Ee,
    onDrop: lt,
    children: [
      m &&
        o("div", {
          className: se.dragOverlay,
          children: [
            o(Ms, { size: 32 }),
            o("span", {
              children: _ ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      o("div", {
        className: se.whatsNew,
        children: o(Fn, {
          ref: i,
          value: r,
          spans: s,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: se.editor,
          minHeight: 40,
          maxHeight: gt.MAX_TEXTAREA_HEIGHT,
          onImagePaste: A,
        }),
      }),
      o(qs, { images: E, uploadingImages: N, onRemove: R }),
      o("input", {
        ref: O,
        type: "file",
        accept: oe,
        multiple: !S,
        onChange: x,
        style: { display: "none" },
      }),
      z &&
        o(Ad, {
          poll: ee,
          onQuestionChange: ae,
          onOptionChange: ce,
          onAddOption: K,
          onRemoveOption: te,
          onMultipleChoiceToggle: U,
          onClose: W,
        }),
      o("div", {
        className: se.actions,
        children: [
          o("div", {
            className: se.mediaButtons,
            children: [
              o("button", {
                className: se.mediaButton,
                onClick: C,
                title: _ ? "Добавить медиа" : "Добавить изображение",
                children: o(xs, {}),
              }),
              !g &&
                o(Mo, { onEmojiSelect: re, buttonClassName: se.mediaButton }),
              o("button", {
                className: se.mediaButton,
                onClick: () => h(true),
                title: "Нарисовать",
                disabled: S,
                children: o(lc, {}),
              }),
              o("button", {
                className: `${se.mediaButton} ${z ? se.active : ""}`,
                onClick: q,
                title: "Добавить опрос",
                children: o(uc, {}),
              }),
            ],
          }),
          o("div", {
            className: se.submitGroup,
            children: [
              D &&
                o("span", {
                  className: `${se.charCount} ${se.error}`,
                  children: B,
                }),
              o($e, {
                size: "lg",
                disabled: !X || D || D || y || D || y || d,
                loading: d,
                onClick: ie,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      l &&
        o(Ot, {
          fallback: null,
          children: o(Md, {
            isOpen: l,
            onClose: () => h(false),
            onSave: fe,
            mode: "post",
          }),
        }),
    ],
  });
}
const Dd = "K6nCQ-U-";
const Ud = "_4z8V9ZZv";
const Bd = "_7KXbkQt7";
const Fd = "uYOP8khl";
const Hd = "_6y-KsBSs";
const Vd = "_0V6OU0Ym";
const Wd = "nkzq9EYy";
const jd = "sPqWHy7d";
const zd = "_9y9syYYY";
const qd = "nDwuZLyW";
const Yd = "L5ifDyu9";
const Gd = "YTa76qGd";
const Xd = "pgh3zI5U";
const Kd = "MLUpLifx";

const ke = {
  modalReport: Dd,
  content: Ud,
  successIcon: Bd,
  title: Fd,
  subtitle: Hd,
  options: Vd,
  chip: Wd,
  radio: jd,
  chipActive: zd,
  radioDot: qd,
  detailsSection: Yd,
  textarea: Gd,
  error: Xd,
  actions: Kd,
};

const Zd = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const Qd = [
  { id: "spam", label: "Спам или нежелательный контент" },
  { id: "violence", label: "Насилие или опасные действия" },
  { id: "hate", label: "Ненависть или травля" },
  { id: "adult", label: "Контент для взрослых (18+)" },
  { id: "misinfo", label: "Дезинформация или обман" },
  { id: "other", label: "Другое" },
];

function Gs({ targetType: e, targetId: t, onClose: n, onSubmit: r }) {
  const [s, i] = P(null);
  const [a, c] = P("");
  const [u, l] = P(false);
  const [h, d] = P(null);
  const [f, m] = P(false);

  const w = async () => {
    if (s) {
      l(true);
      d(null);
      try {
        if (r) {
          await r(s, a);
        } else {
          await pa.createReport({
            targetType: e,
            targetId: t,
            reason: Zd[s],
            description: a || undefined,
          });
        }

        m(true);
      } catch (p) {
        console.error("Failed to submit report:", p);

        if (Se(p)) {
          switch (p.code) {
            case mn.CANNOT_REPORT_OWN_CONTENT: {
              d("Вы не можете пожаловаться на свой контент");
              break;
            }
            case mn.ALREADY_REPORTED: {
              d("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case mn.TARGET_NOT_FOUND: {
              d("Контент не найден");
              break;
            }
            case mn.DESCRIPTION_TOO_LONG: {
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
    ? o(vt, {
        onClose: n,
        showHeader: false,
        frameless: false,
        className: ke.modalReport,
        children: o("div", {
          className: ke.content,
          children: [
            o("div", {
              className: ke.successIcon,
              children: o(rc, { size: 48 }),
            }),
            o("h2", { className: ke.title, children: "Спасибо за жалобу!" }),
            o("p", {
              className: ke.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            o("div", {
              className: ke.actions,
              children: o($e, {
                variant: "primary",
                onClick: (p) => {
                  p.stopPropagation();
                  n();
                },
                children: "Понятно",
              }),
            }),
          ],
        }),
      })
    : o(vt, {
        onClose: n,
        showHeader: false,
        frameless: false,
        className: ke.modalReport,
        children: o("div", {
          className: ke.content,
          children: [
            o("h2", { className: ke.title, children: "Пожаловаться" }),
            o("p", {
              className: ke.subtitle,
              children: "Выберите причину жалобы",
            }),
            o("div", {
              className: ke.options,
              children: Qd.map((p) =>
                o(
                  "button",
                  {
                    type: "button",
                    className: `${ke.chip} ${s === p.id ? ke.chipActive : ""}`,
                    onClick: () => i(p.id),
                    children: [
                      o("span", {
                        className: ke.radio,
                        children:
                          s === p.id && o("span", { className: ke.radioDot }),
                      }),
                      p.label,
                    ],
                  },
                  p.id
                )
              ),
            }),
            o("div", {
              className: ke.detailsSection,
              children: o("textarea", {
                className: ke.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: a,
                onInput: (p) => c(p.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            h && o("div", { className: ke.error, children: h }),
            o("div", {
              className: ke.actions,
              children: [
                o($e, {
                  variant: "secondary",
                  onClick: (p) => {
                    p.stopPropagation();
                    n();
                  },
                  disabled: u,
                  children: "Отмена",
                }),
                o($e, {
                  variant: "primary",
                  onClick: (p) => {
                    p.stopPropagation();
                    w();
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
const Jd = "j8vGlZKp";
const eh = "y5-96lzw";
const th = "lE9vN8i6";
const nh = "RrXA28Pz";
const oh = "zrN-dIVb";
const rh = "KSS5ucx7";
const sh = "p-q2S5vA";
const ih = "-JVja8g3";
const ah = "HotXXjTO";
const ch = "uHbOpnIJ";
const lh = "q4tIq6LX";
const uh = "jG-llYOx";
const dh = "-nxjJLcz";
const hh = "FFjif68M";
const fh = "jTVS0CtG";

const De = {
  userName: Jd,
  pinBadge: eh,
  text: th,
  nukstaGlow: nh,
  xs: oh,
  sm: rh,
  md: sh,
  lg: ih,
  pinWrapper: ah,
  pinClickable: ch,
  pinTooltip: lh,
  pinTooltipFadeIn: uh,
  pinTooltipRow: dh,
  pinTooltipLabel: hh,
  pinTooltipArrow: fh,
};

const mh = { xs: 12, sm: 14, md: 16, lg: 22 };
const ph = "subscription_nuksta";
function un({
  name: e,
  verified: t,
  hasNuksta: n,
  pin: r,
  size: s = "md",
  className: i,
}) {
  const mh_s = mh[s];
  const c = I(null);
  const [u, l] = P(null);
  const [h, d] = P(false);
  const f = r?.slug === ph;

  const m = b(() => {
    if (!c.current) {
      return;
    }
    const p = c.current.getBoundingClientRect();
    l({ x: p.left + p.width / 2, y: p.top });
  }, []);

  const w = b(() => {
    l(null);
  }, []);

  return o("span", {
    className: `${De.userName} ${De[s]} ${i || ""}`,
    children: [
      n
        ? o("span", {
            className: De.nukstaGlow,
            children: o("span", { className: De.text, children: e }),
          })
        : o("span", { className: De.text, children: e }),
      t && o(mc, {}),
      r &&
        o("span", {
          ref: c,
          className: `${De.pinWrapper} ${f ? De.pinClickable : ""}`,
          onMouseEnter: m,
          onMouseLeave: w,
          onClick: f
            ? (p) => {
                p.stopPropagation();
                p.preventDefault();
                d(true);
              }
            : undefined,
          children: [
            o("img", {
              src: r.url,
              alt: r.name,
              className: De.pinBadge,
              width: mh_s,
              height: mh_s,
            }),
            u &&
              wt(
                o("div", {
                  className: De.pinTooltip,
                  style: { left: `${u.x}px`, top: `${u.y}px` },
                  children: [
                    o("span", {
                      className: De.pinTooltipRow,
                      children: [
                        o("span", {
                          className: De.pinTooltipLabel,
                          children: "Пин:",
                        }),
                        " ",
                        r.name,
                      ],
                    }),
                    r.description &&
                      o("span", {
                        className: De.pinTooltipRow,
                        children: [
                          o("span", {
                            className: De.pinTooltipLabel,
                            children: "Ивент:",
                          }),
                          " ",
                          r.description,
                        ],
                      }),
                    o("span", { className: De.pinTooltipArrow }),
                  ],
                }),
                document.body
              ),
          ],
        }),
      h && o(kl, { isOpen: true, onClose: () => d(false) }),
    ],
  });
}
const gh = "GOavgVFK";
const vh = "WsAFjFg1";
const _h = "luyzBE-G";
const wh = "LGkNQoga";
const yh = "HiaF08Tp";
const Ch = "fjKZASHi";
const Nh = "YH0jgs8I";
const Th = "iw-oVKLc";
const Eh = "-L1Z1WbU";

const dt = {
  repostModal: gh,
  content: vh,
  title: _h,
  inputSection: wh,
  textarea: yh,
  originalPost: Ch,
  postHeader: Nh,
  postText: Th,
  actions: Eh,
};

function Rh({ post: e, onClose: t, onSuccess: n }) {
  const [r, s] = P("");
  const [i, a] = P(false);

  const c = Te((l) => l.profile);

  const u = async () => {
    a(true);
    try {
      await Me.createRepost(e.id, r.trim() || undefined);
      n?.();
      t();
    } catch (l) {
      console.error("Failed to create repost:", l);
    } finally {
      a(false);
    }
  };

  return o(vt, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: dt.repostModal,
    children: o("div", {
      className: dt.content,
      children: [
        o("h2", { className: dt.title, children: "Репост" }),
        o("div", {
          className: dt.inputSection,
          children: [
            c && o(qe, { src: c.avatar, alt: c.displayName, size: "sm" }),
            o("textarea", {
              className: dt.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: r,
              onInput: (l) => s(l.target.value),
              rows: 3,
            }),
          ],
        }),
        o("div", {
          className: dt.originalPost,
          children: [
            o("div", {
              className: dt.postHeader,
              children: [
                o(qe, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                o(un, {
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  hasNuksta: e.author.hasNuksta,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            o("p", { className: dt.postText, children: e.text }),
          ],
        }),
        o("div", {
          className: dt.actions,
          children: [
            o($e, {
              variant: "secondary",
              onClick: (l) => {
                l.stopPropagation();
                t();
              },
              disabled: i,
              children: "Отмена",
            }),
            o($e, {
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
const kh = "YUXc-thD";
const bh = "AHlpmYy2";
const Sh = "_8tUE-BuY";
const Ih = "RIne2Axl";
const Ph = "qfOKVlyM";
const Ah = "XA7edfAc";
const xh = "_97G7MW7p";
const Lh = "li-GTJHA";
const Oh = "x0peq7nh";
const Mh = "_6pRzoTi7";

const rt = {
  editPostModal: kh,
  form: bh,
  whatsNew: Sh,
  editor: Ih,
  actions: Ph,
  mediaButtons: Ah,
  mediaButton: xh,
  submitGroup: Lh,
  charCount: Oh,
  error: Mh,
};

const kr = 5000; /* 5e3 */
function $h({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = Bn();

  const s = ue((y) => y.editPost);

  const i = Te((y) => y.profile);

  const a = at();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = Dn(t, n);

  const [f, m] = P(false);
  const w = kr - c.length;
  const p = w < 0;
  const g = c !== t;
  const v = JSON.stringify(u) !== JSON.stringify(n);
  const _ = g || v;

  const E = b(
    (y) => {
      d(y.emoji);
    },
    [d]
  );

  const N = b(async () => {
    if (!(!c.trim() || p || p || !_ || p || !_ || f)) {
      m(true);
      try {
        await s(e, c, u);
        r();
      } catch (y) {
        console.error("Failed to update post:", y);
      } finally {
        m(false);
      }
    }
  }, [c, u, p, _, f, s, e, r]);

  return o(vt, {
    frameless: true,
    onClose: r,
    className: rt.editPostModal,
    children: o("div", {
      className: rt.form,
      children: [
        o("div", {
          className: rt.whatsNew,
          children: [
            o(qe, { src: i?.avatar ?? "", size: "md" }),
            o(Fn, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Что нового?",
              maxLength: kr,
              autoFocus: true,
              className: rt.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        o("div", {
          className: rt.actions,
          children: [
            o("div", {
              className: rt.mediaButtons,
              children:
                !a &&
                o(Mo, { onEmojiSelect: E, buttonClassName: rt.mediaButton }),
            }),
            o("div", {
              className: rt.submitGroup,
              children: [
                p &&
                  o("span", {
                    className: `${rt.charCount} ${rt.error}`,
                    children: w,
                  }),
                o($e, {
                  size: "lg",
                  disabled: !c.trim() || p || p || !_,
                  loading: f,
                  onClick: N,
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

const br = (e) => Symbol.iterator in e;

const Sr = (e) => "entries" in e;

const Ir = (e, t) => {
  const n = e instanceof Map ? e : new Map(e.entries());
  const r = t instanceof Map ? t : new Map(t.entries());
  if (n.size !== r.size) {
    return false;
  }
  for (const [s, i] of n) {
    if (!r.has(s) || !Object.is(i, r.get(s))) {
      return false;
    }
  }
  return true;
};

const Dh = (e, t) => {
  const n = e[Symbol.iterator]();
  const r = t[Symbol.iterator]();
  let s = n.next();
  let i = r.next();

  while (!s.done && !i.done) {
    if (!Object.is(s.value, i.value)) {
      return false;
    }
    s = n.next();
    i = r.next();
  }

  return !!s.done && !!i.done;
};

function Uh(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : br(e) && br(t)
    ? Sr(e) && Sr(t)
      ? Ir(e, t)
      : Dh(e, t)
    : Ir(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function Pr(e) {
  const t = Zt.useRef(undefined);
  return (n) => {
    const r = e(n);
    return Uh(t.current, r) ? t.current : (t.current = r);
  };
}
const Bh = "qW4HNPBu";
const Fh = "tx-JBNZ6";
const Hh = "_033iEEAi";
const Vh = "DNnNfgbz";
const vn = { commentsModal: Bh, header: Fh, title: Hh, content: Vh };
function Wh({ postId: e, onClose: t }) {
  const n = I(null);

  const {
    comments: r,
    commentsLoading: s,
    commentsLoadingMore: i,
    commentsHasMore: a,
    clearComments: c,
    fetchComments: u,
    loadMoreComments: l,
    toggleCommentReaction: h,
    addComment: d,
  } = ue(
    Pr((N) => ({
      comments: N.comments,
      commentsLoading: N.commentsLoading,
      commentsLoadingMore: N.commentsLoadingMore,
      commentsHasMore: N.commentsHasMore,
      clearComments: N.clearComments,
      fetchComments: N.fetchComments,
      loadMoreComments: N.loadMoreComments,
      toggleCommentReaction: N.toggleCommentReaction,
      addComment: N.addComment,
    }))
  );

  const { commentsSort: f, setCommentsSort: m } = Sn(
    Pr((N) => ({
      commentsSort: N.commentsSort,
      setCommentsSort: N.setCommentsSort,
    }))
  );

  if (n.current !== e) {
    n.current = e;
    c();
  }

  V(() => {
    u(e);
  }, [e, u]);

  const w = b(
    (N) => {
      m(N);
      u(e);
    },
    [m, u, e]
  );

  const p = b(() => {
    if (a && !i) {
      l(e);
    }
  }, [a, i, l, e]);

  const g = b(
    (N, y) => {
      h(N, y ?? "love");
    },
    [h]
  );

  const v = b(
    (N, y) => {
      h(N, y);
    },
    [h]
  );

  const _ = b(
    async (N, y, S, C, R, k) => {
      await d(e, N, y, S, k, C, R);
    },
    [d, e]
  );

  const E = b(
    async (N) => {
      const y = `voice_${Date.now()}.webm`;
      const S = new File([N], y, { type: N.type || "audio/webm" });
      const C = await Dt.uploadMedia(S);
      await d(e, "", [], undefined, [{ mediaId: C.id }]);
    },
    [d, e]
  );

  return o(vt, {
    frameless: true,
    onClose: t,
    className: vn.commentsModal,
    children: [
      o("div", {
        className: vn.header,
        children: o("span", { className: vn.title, children: "Комментарии" }),
      }),
      o("div", {
        className: vn.content,
        "data-comments-modal": true,
        children: o(vg, {
          comments: r,
          isLoading: s,
          isLoadingMore: i,
          hasMore: a,
          sort: f,
          onSortChange: w,
          onLikeComment: g,
          onReactionComment: v,
          onAddComment: _,
          onVoiceSend: E,
          onLoadMore: p,
        }),
      }),
    ],
  });
}
const jh = "QoEaDkke";
const zh = "clHkuJ7t";
const qh = "qilC-Ury";
const Yh = "_2pYlGMvj";
const _n = { content: jh, title: zh, subtitle: qh, actions: Yh };
function Gh({ displayName: e, onConfirm: t, onClose: n }) {
  return o(vt, {
    onClose: n,
    showHeader: false,
    children: o("div", {
      className: _n.content,
      children: [
        o("h2", { className: _n.title, children: "Отписаться?" }),
        o("p", {
          className: _n.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            o("strong", { children: e }),
            "?",
          ],
        }),
        o("div", {
          className: _n.actions,
          children: [
            o($e, {
              variant: "secondary",
              onClick: (r) => {
                r.stopPropagation();
                n();
              },
              children: "Отмена",
            }),
            o($e, {
              variant: "danger",
              onClick: (r) => {
                r.stopPropagation();
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
const Xh = "JtDslUlB";
const Kh = "ccJtOIg3";
const Zh = "jttdPuoT";
const Qh = "Ik3feOcb";
const Jh = "OWIVanqr";
const ef = "ApLgDejC";
const tf = "wzYde9CM";
const nf = "jjAXXJME";

const Ct = {
  underline: Xh,
  monospace: Kh,
  quote: Zh,
  spoiler: Qh,
  revealed: Jh,
  link: ef,
  mention: tf,
  hashtag: nf,
};

function of(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function rf(e) {
  if (!of(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const r = String.fromCharCode(...n);
  const s = btoa(r);
  return `/external?url=${encodeURIComponent(s)}`;
}
function Xs({ text: e, spans: t = [], className: n = "" }) {
  const [r, s] = P(new Set());

  const i = Ne(() => {
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
        const w = new Set();
        let p;
        let g;
        let v;

        d.forEach((_) => {
          w.add(_.type);

          if (_.type === "link" && _.url) {
            p = _.url;
          }

          if (_.type === "mention" && (_.username || _.id)) {
            g = _.username || _.id;
          }

          if (_.type === "hashtag" && _.tag) {
            v = _.tag;
          }
        });

        l.push({ text: m, styles: w, url: p, mentionId: g, hashtag: v });
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
      u_text = o("strong", { children: u_text });
    }

    if (u.styles.has("italic")) {
      u_text = o("em", { children: u_text });
    }

    if (u.styles.has("underline")) {
      u_text = o("span", { className: Ct.underline, children: u_text });
    }

    if (u.styles.has("strike")) {
      u_text = o("s", { children: u_text });
    }

    if (u.styles.has("monospace")) {
      u_text = o("code", { className: Ct.monospace, children: u_text });
    }

    if (u.styles.has("quote")) {
      u_text = o("span", { className: Ct.quote, children: u_text });
    }

    if (u.styles.has("spoiler")) {
      const d = r.has(l);
      u_text = o("span", {
        className: `${Ct.spoiler} ${d ? Ct.revealed : ""}`,
        onClick: (f) => a(f, l),
        children: u_text,
      });
    }

    if (u.styles.has("link") && u.url) {
      const d = rf(u.url);
      u_text = o("a", {
        href: d,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Ct.link,
        onClick: (f) => f.stopPropagation(),
        children: u_text,
      });
    }
    if (u.styles.has("mention") && u.mentionId) {
      const d = `/@${u.mentionId}`;
      u_text = o("a", {
        href: d,
        className: Ct.mention,
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
      u_text = o("a", {
        href: d,
        className: Ct.hashtag,
        onClick: (f) => {
          f.preventDefault();
          f.stopPropagation();
          $(d);
        },
        children: u_text,
      });
    }
    return o("span", { children: u_text }, l);
  };

  return o("span", { className: n, children: i.map((u, l) => c(u, l)) });
}
const sf = "t6dMOE-t";
const af = "dN7ncPvV";
const cf = "goihPOfy";
const lf = "_3cD3eUbW";
const uf = "SWw4qjFC";
const df = "J5ZRq4aT";
const hf = "zH6fnEQR";
const ff = "OzZxDBjs";
const mf = "r-v5forc";
const pf = "Azp1k6ER";
const gf = "_8AA-g-Mn";
const vf = "aaxVMk0e";
const _f = "QUwLZbFH";
const wf = "Fub6vefq";
const yf = "Uvg1jJsO";
const Cf = "_9HuwvxSy";
const Nf = "_0-reqUdU";
const Tf = "yjejWG8w";
const Ef = "rW9UH9FX";
const Rf = "AP0ro9mL";
const kf = "lc7iFAaZ";
const bf = "D7O8ZJMb";
const Sf = "-OyFh6KG";
const If = "FVUgQZaF";

const le = {
  poll: sf,
  disabled: af,
  header: cf,
  title: lf,
  meta: uf,
  voteCount: df,
  options: hf,
  option: ff,
  votingOption: mf,
  preselected: pf,
  optionContent: gf,
  voted: vf,
  optionProgressWrapper: _f,
  optionProgress: wf,
  optionContentInverted: yf,
  optionText: Cf,
  optionPercent: Nf,
  optionProgressSimple: Tf,
  checkmark: Ef,
  checkbox: Rf,
  checkboxChecked: kf,
  submitBtn: bf,
  footer: Sf,
  revoteBtn: If,
};

function Pf({
  title: e,
  options: t,
  totalVotes: n,
  voted: r = false,
  selectedOptionId: s = null,
  selectedOptionIds: i = [],
  multipleChoice: a = false,
  onVote: c,
  onVoteMultiple: u,
  className: l,
  disabled: h = false,
}) {
  const [d, f] = P(r);

  const [m, w] = P(() =>
    i.length > 0 ? new Set(i) : s ? new Set([s]) : new Set()
  );

  const [p, g] = P(n);
  const [v, _] = P(t);
  const [E, N] = P(r);
  const [y, S] = P(false);
  const [C, R] = P(new Map());
  const k = I(new Map());

  const A = t.map((U) => `${U.id}:${U.votes}`).join(",");

  V(() => {
    _(t);
    g(n);
    f(r);

    if (i.length > 0) {
      w(new Set(i));
    } else {
      w(s ? new Set([s]) : new Set());
    }

    if (r && !y) {
      N(true);
    }
  }, [A, n, r, s, i.join(",")]);

  V(() => {
    if (r && k.current.size > 0) {
      const U = new Map();

      k.current.forEach((W, Z) => {
        U.set(Z, W.offsetWidth);
      });

      R(U);
    }
  }, [r]);

  const T = d && !y;

  const O = b(
    (U) => {
      if (h || T) {
        return;
      }
      if (a) {
        w(($) => {
          const L = new Set($);

          if (L.has(U)) {
            L.delete(U);
          } else {
            L.add(U);
          }

          return L;
        });
        return;
      }
      const W = m.size > 0 ? Array.from(m)[0] : null;

      _(($) =>
        $.map((L) =>
          L.id === U
            ? { ...L, votes: L.votes + 1 }
            : L.id === W
            ? { ...L, votes: Math.max(0, L.votes - 1) }
            : L
        )
      );

      if (!d) {
        g(($) => $ + 1);
      }

      w(new Set([U]));
      f(true);
      S(false);
      const Z = c?.(U);

      if (Z && typeof Z.then == "function") {
        Z.then(($) => {
          if ($) {
            z($);
          }
        });
      }

      ee();
    },
    [h, T, a, m, d, c]
  );

  const x = b(() => {
    if (m.size === 0) {
      return;
    }
    const U = Array.from(m);

    _((Z) =>
      Z.map(($) => (U.includes($.id) ? { ...$, votes: $.votes + 1 } : $))
    );

    if (!d) {
      g((Z) => Z + 1);
    }

    f(true);
    S(false);
    const W = u?.(U);

    if (W && typeof W.then == "function") {
      W.then((Z) => {
        if (Z) {
          z(Z);
        }
      });
    }

    ee();
  }, [m, d, u]);

  const z = (U) => {
    const W = (U.options ?? []).map((Z) => ({
      id: Z.id,
      text: Z.text,
      votes: Z.votesCount ?? Z.voteCount ?? Z.votes ?? 0,
    }));
    _(W);
    g(U.totalVotes ?? 0);

    if (U.votedOptionIds && U.votedOptionIds.length > 0) {
      w(new Set(U.votedOptionIds));
    }
  };

  const ee = () => {
    requestAnimationFrame(() => {
      const U = new Map();

      k.current.forEach((W, Z) => {
        U.set(Z, W.offsetWidth);
      });

      R(U);

      requestAnimationFrame(() => {
        N(true);
      });
    });
  };

  const q = () => {
    S(true);
    N(false);
  };

  const ae = () => {
    S(false);
    N(true);
  };

  const ce = (U) => (p === 0 ? 0 : Math.round((U / p) * 100));

  const K = (U) =>
    U === 1 ? "1 голос" : U >= 2 && U <= 4 ? `${U} голоса` : `${U} голосов`;

  const te = (U) => {
    U.stopPropagation();
  };

  return o("div", {
    className: `${le.poll} ${h ? le.disabled : ""} ${l || ""}`,
    onClick: te,
    children: [
      o("div", {
        className: le.header,
        children: [
          o("span", { className: le.title, children: e }),
          d &&
            o("div", {
              className: le.meta,
              children: o("span", { className: le.voteCount, children: K(p) }),
            }),
        ],
      }),
      o("div", {
        className: le.options,
        children: v.map((U) => {
          const W = ce(U.votes);
          const Z = m.has(U.id);
          const $ = E ? `${W}%` : "0%";
          const L =
            C.get(U.id) ||
            k.current.get(U.id)?.offsetWidth ||
            k.current.get(U.id)?.offsetWidth ||
            0;
          return T
            ? o(
                "div",
                {
                  ref: (B) => {
                    if (B) {
                      k.current.set(U.id, B);
                    }
                  },
                  className: `${le.option} ${le.voted} ${Z ? le.selected : ""}`,
                  children: [
                    o("div", {
                      className: le.optionContent,
                      children: [
                        o("span", {
                          className: le.optionText,
                          children: [
                            Z &&
                              o("span", {
                                className: le.checkmark,
                                children: "✓ ",
                              }),
                            U.text,
                          ],
                        }),
                        o("span", {
                          className: le.optionPercent,
                          children: [W, "%"],
                        }),
                      ],
                    }),
                    Z &&
                      o("div", {
                        className: le.optionProgressWrapper,
                        style: { width: $ },
                        children: [
                          o("div", { className: le.optionProgress }),
                          o("div", {
                            className: le.optionContentInverted,
                            style: { width: `${L}px` },
                            children: [
                              o("span", {
                                className: le.optionText,
                                children: [
                                  o("span", {
                                    className: le.checkmark,
                                    children: "✓ ",
                                  }),
                                  U.text,
                                ],
                              }),
                              o("span", {
                                className: le.optionPercent,
                                children: [W, "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    !Z &&
                      o("div", {
                        className: le.optionProgressSimple,
                        style: { width: $ },
                      }),
                  ],
                },
                U.id
              )
            : o(
                "div",
                {
                  ref: (B) => {
                    if (B) {
                      k.current.set(U.id, B);
                    }
                  },
                  className: `${le.option} ${le.votingOption} ${
                    Z ? le.preselected : ""
                  }`,
                  onClick: () => O(U.id),
                  children: o("div", {
                    className: le.optionContent,
                    children: [
                      a &&
                        o("span", {
                          className: `${le.checkbox} ${
                            Z ? le.checkboxChecked : ""
                          }`,
                          children: Z && "✓",
                        }),
                      o("span", { className: le.optionText, children: U.text }),
                    ],
                  }),
                },
                U.id
              );
        }),
      }),
      a &&
        !d &&
        m.size > 0 &&
        !y &&
        o("button", {
          className: le.submitBtn,
          onClick: x,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        o("div", {
          className: le.footer,
          children: y
            ? o(Re, {
                children: [
                  a &&
                    m.size > 0 &&
                    o("button", {
                      className: le.submitBtn,
                      onClick: x,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  o("button", {
                    className: le.revoteBtn,
                    onClick: ae,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : o("button", {
                className: le.revoteBtn,
                onClick: q,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}
const Af = "zRX0j4Tr";
const xf = "_3HYi31vZ";
const Lf = "sgbXxBQt";
const Of = "GyS5v2h6";
const Mf = "HxhHv5PS";
const $f = "HhzGlfqd";
const Df = "bQ6-MeS1";
const Uf = "QCLZpkig";
const Bf = "WIOo5dNL";

const ht = {
  dropdownWrapper: Af,
  trigger: xf,
  menu: Lf,
  hidden: Of,
  menuItem: Mf,
  danger: $f,
  itemIcon: Df,
  itemLabel: Uf,
  divider: Bf,
};

function Ks({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: r = [],
  className: s,
}) {
  const [i, a] = P(false);
  const [c, u] = P(false);
  const [l, h] = P({ top: 0, left: 0 });
  const d = I(null);
  const f = I(null);

  const m = b(() => {
    if (!d.current) {
      return;
    }
    const v = d.current.getBoundingClientRect();
    const _ = f.current?.offsetHeight || 150;
    const E = f.current?.offsetWidth || 160;
    let N = 0;
    let y = 0;

    if (n.startsWith("bottom")) {
      N = v.bottom + 4;
    } else {
      N = v.top - _ - 4;
    }

    if (n.endsWith("right")) {
      y = v.right - E;
    } else {
      y = v.left;
    }

    const { innerWidth, innerHeight } = window;

    if (y + E > innerWidth) {
      y = innerWidth - E - 8;
    }

    if (y < 8) {
      y = 8;
    }

    if (N + _ > innerHeight) {
      N = v.top - _ - 4;
    }

    if (N < 8) {
      N = v.bottom + 4;
    }

    h({ top: N, left: y });
    u(true);
  }, [n]);

  const w = b((v) => {
    const v_target = v.target;

    if (
      d.current &&
      !d.current.contains(v_target) &&
      f.current &&
      !f.current.contains(v_target)
    ) {
      a(false);
      u(false);
    }
  }, []);

  V(() => {
    if (i) {
      m();
      document.addEventListener("mousedown", w);
      window.addEventListener("scroll", m, true);
      window.addEventListener("resize", m);

      return () => {
        document.removeEventListener("mousedown", w);
        window.removeEventListener("scroll", m, true);
        window.removeEventListener("resize", m);
      };
    }
  }, [i, w, m]);

  const p = (v) => {
    v.stopPropagation();

    if (i) {
      a(false);
      u(false);
    } else {
      a(true);
    }
  };

  const g = (v, _) => {
    v.stopPropagation();
    _.onClick();
    a(false);
    u(false);
  };

  return o("div", {
    className: `${ht.dropdownWrapper} ${s || ""}`,
    children: [
      o("div", { ref: d, className: ht.trigger, onClick: p, children: e }),
      i &&
        wt(
          o("div", {
            ref: f,
            className: `${ht.menu} ${c ? "" : ht.hidden}`,
            style: { top: l.top, left: l.left },
            children: t.map((v, _) =>
              o(
                "div",
                {
                  children: [
                    o("button", {
                      type: "button",
                      className: `${ht.menuItem} ${v.danger ? ht.danger : ""}`,
                      onClick: (E) => g(E, v),
                      children: [
                        v.icon &&
                          o("span", {
                            className: ht.itemIcon,
                            children: v.icon,
                          }),
                        o("span", {
                          className: ht.itemLabel,
                          children: v.label,
                        }),
                      ],
                    }),
                    r.includes(v.id) &&
                      _ < t.length - 1 &&
                      o("div", { className: ht.divider }),
                  ],
                },
                v.id
              )
            ),
          }),
          document.body
        ),
    ],
  });
}
const Ff = "oAyquNjM";
const Hf = "cGo-pqMK";
const Vf = "abh-IRfe";
const Wf = "_3UMrcwJw";
const jf = "MtmuinE5";
const zf = "OHOBvjSN";
const qf = "vPid2PoY";
const Yf = "ShSUtrj1";

const Nt = {
  header: Ff,
  headerMain: Hf,
  moreDropdown: Vf,
  pinnedBadge: Wf,
  authorInfo: jf,
  authorLink: zf,
  time: qf,
  edited: Yf,
};

function Gf({
  author: e,
  createdAt: t,
  editedAt: n,
  postId: r,
  showAvatar: s = true,
  isOnOwnProfile: i = false,
  isPinned: a = false,
  onReport: c,
  onEdit: u,
  onDelete: l,
  onPin: h,
  onCopyLink: d,
}) {
  const f = bs(t);

  const m = Te((_) => _.profile?.id);

  const w = e.id === m;
  const p = 2880 * 60 * 1000; /* 1e3 */
  const g = w && Date.now() - new Date(t).getTime() < p;

  const v = Ne(() => {
    const _ = [];

    _.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: o(Ss, { size: 16 }),
      onClick: () => d?.(r),
    });

    if (g) {
      _.push({
        id: "edit",
        label: "Редактировать",
        icon: o(Ls, { size: 16 }),
        onClick: () => u?.(r),
      });
    }

    if (i) {
      _.push({
        id: "pin",
        label: a ? "Открепить" : "Закрепить",
        icon: o(gr, { size: 16 }),
        onClick: () => h?.(r),
      });
    }

    if (w || i) {
      _.push({
        id: "delete",
        label: "Удалить",
        icon: o(Fs, { size: 16 }),
        danger: true,
        onClick: () => l?.(r),
      });
    }

    if (!w) {
      _.push({
        id: "report",
        label: "Пожаловаться",
        icon: o(Os, { size: 16 }),
        danger: true,
        onClick: () => c?.(r),
      });
    }

    return _;
  }, [w, g, i, a, r, u, l, h, c, d]);

  return o("header", {
    className: Nt.header,
    children: [
      a &&
        o("div", {
          className: Nt.pinnedBadge,
          children: [
            o(gr, { size: 14 }),
            o("span", { children: "Закреплённый пост" }),
          ],
        }),
      o("div", {
        className: Nt.headerMain,
        children: [
          s &&
            o("a", {
              href: `/@${e.username}`,
              children: o(qe, {
                src: e.avatar,
                alt: e.displayName,
                size: "sm",
                online: e.online,
              }),
            }),
          o("div", {
            className: Nt.authorInfo,
            children: [
              o("a", {
                href: `/@${e.username}`,
                className: Nt.authorLink,
                children: o(un, {
                  name: e.displayName,
                  verified: e.isVerified,
                  hasNuksta: e.hasNuksta,
                  pin: e.pin,
                  size: "sm",
                }),
              }),
              o("time", {
                dateTime: t,
                className: Nt.time,
                children: [
                  f,
                  n &&
                    o(xn, {
                      text: new Date(n).toLocaleString("ru-RU"),
                      children: o("span", {
                        className: Nt.edited,
                        children: " (ред.)",
                      }),
                    }),
                ],
              }),
            ],
          }),
          o(Ks, {
            trigger: o(Us, { size: 18 }),
            items: v,
            position: "bottom-right",
            className: Nt.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
function Zs(e, t, n) {
  const { isVisible: r, isRevealing: s, onRevealComplete: i } = n;
  const a = I([]);
  const c = I(null);
  const u = I(null);
  const l = I({ width: 0, height: 0 });
  const h = I(1);

  const d = b((p, g) => {
    const v = Math.random() * 80 + 60;
    return {
      x: Math.random() * p,
      y: Math.random() * g,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * v,
      maxLife: v,
    };
  }, []);

  const f = b(
    (p, g) => {
      const v = Math.floor((p * g) / 600);
      const _ = [];
      for (let E = 0; E < v; E++) {
        _.push(d(p, g));
      }
      a.current = _;
    },
    [d]
  );

  const m = b(() => {
    const e_current = e.current;
    const t_current = t.current;
    if (!e_current || !t_current) {
      return;
    }
    const v = t_current.getBoundingClientRect();
    if (v.width === 0 || v.height === 0) {
      return;
    }
    const _ = window.devicePixelRatio || 1;
    if (l.current.width !== v.width || l.current.height !== v.height) {
      l.current = { width: v.width, height: v.height };
      e_current.width = v.width * _;
      e_current.height = v.height * _;
      e_current.style.width = `${v.width}px`;
      e_current.style.height = `${v.height}px`;
      const E = e_current.getContext("2d");

      if (E) {
        E.setTransform(_, 0, 0, _, 0, 0);
        u.current = E;
      }

      f(v.width, v.height);
    }
  }, [e, t, f]);

  const w = b(() => {
    h.current = 1;
  }, []);

  V(() => {
    if (!r) {
      if (c.current) {
        cancelAnimationFrame(c.current);
        c.current = null;
      }

      return;
    }
    m();
    const p = () => {
      const u_current = u.current;
      const { width: v, height: _ } = l.current;
      if (!u_current || v === 0 || v === 0 || _ === 0) {
        c.current = requestAnimationFrame(p);
        return;
      }
      if (s && ((h.current -= 0.05), h.current <= 0)) {
        i();
        return;
      }
      u_current.clearRect(0, 0, v, _);

      a.current.forEach((E, N) => {
        E.x += E.speedX;
        E.y += E.speedY;
        E.life--;

        if (E.x < 0) {
          E.x = v;
        }

        if (E.x > v) {
          E.x = 0;
        }

        if (E.y < 0) {
          E.y = _;
        }

        if (E.y > _) {
          E.y = 0;
        }

        if (E.life <= 0) {
          a.current[N] = d(v, _);
          return;
        }

        const y = E.life / E.maxLife;
        const S = y < 0.3 ? y / 0.3 : 1;
        const C = E.opacity * S * h.current;
        u_current.beginPath();
        u_current.arc(E.x, E.y, E.size, 0, Math.PI * 2);
        u_current.fillStyle = `rgba(255, 255, 255, ${C})`;
        u_current.fill();
      });

      c.current = requestAnimationFrame(p);
    };
    c.current = requestAnimationFrame(p);
    window.addEventListener("resize", m);

    return () => {
      if (c.current) {
        cancelAnimationFrame(c.current);
      }

      window.removeEventListener("resize", m);
    };
  }, [r, s, d, m, i]);

  return { resetOpacity: w };
}
const Xf = "_2Gc4qhOv";
const Kf = "UY9OONTU";
const Zf = "_0IkXVI0s";
const Qf = "-LecVcA9";
const Jf = "I1O3wwfn";
const Gt = { container: Xf, hidden: Kf, image: Zf, revealing: Qf, canvas: Jf };
const Ar = 5;
function xr({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: r,
  height: s,
  className: i = "",
  onClick: a,
}) {
  const [c, u] = P(!n);
  const [l, h] = P(false);
  const [d, f] = P(false);
  const m = I(null);
  const w = I(null);
  const p = I(null);
  const g = I(false);

  const { resetOpacity: v } = Zs(m, w, {
    isVisible: d && !c && n,
    isRevealing: l,
    onRevealComplete: () => u(true),
  });

  V(() => {
    const w_current = w.current;
    if (!w_current) {
      return;
    }
    const R = new IntersectionObserver(
      (k) => {
        k.forEach((A) => {
          f(A.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    R.observe(w_current);

    return () => {
      R.disconnect();
    };
  }, []);

  const _ = (C) => {
    p.current = { x: C.clientX, y: C.clientY };
    g.current = false;
  };

  const E = (C) => {
    if (!p.current) {
      return;
    }
    const R = Math.abs(C.clientX - p.current.x);
    const k = Math.abs(C.clientY - p.current.y);

    if (R > Ar || k > Ar) {
      g.current = true;
    }
  };

  const N = (C) => {
    if (g.current) {
      g.current = false;
      C.stopPropagation();
      return;
    }

    if (!c && !l && n) {
      C.stopPropagation();
      h(true);
      v();
    } else if (a) {
      a(C);
    }
  };

  const y = !c && n;
  const S = r && s ? { aspectRatio: `${r} / ${s}` } : undefined;
  return n
    ? o("div", {
        ref: w,
        className: `${Gt.container} ${i} ${y ? Gt.hidden : ""} ${
          l ? Gt.revealing : ""
        }`,
        style: S,
        onPointerDown: _,
        onPointerMove: E,
        onClick: N,
        children: [
          o("img", {
            src: e,
            alt: t,
            className: Gt.image,
            loading: "lazy",
            width: r,
            height: s,
            draggable: false,
          }),
          y && o("canvas", { ref: m, className: Gt.canvas }),
        ],
      })
    : o("img", {
        src: e,
        alt: t,
        className: i,
        loading: "lazy",
        draggable: false,
        onClick: a,
      });
}
const em = "_-20RcNww";
const tm = "JrRDjoks";
const nm = "Poxo3Euu";
const om = "-ccRSjly";
const wn = { wrapper: em, track: tm, fill: nm, thumb: om };
function rm({ value: e, onChange: t, onDragStart: n, onDragEnd: r }) {
  const s = I(null);

  const i = b(
    (m) => {
      const s_current = s.current;
      if (!s_current) {
        return;
      }
      const p = s_current.getBoundingClientRect();
      const g = 1 - (m - p.top) / p.height;
      t(Math.max(0, Math.min(1, g)));
    },
    [t]
  );

  const a = b(
    (m) => {
      m.stopPropagation();
      m.preventDefault();
      n?.();
      i(m.clientY);

      const w = (g) => i(g.clientY);

      const p = () => {
        r?.();
        document.removeEventListener("mousemove", w);
        document.removeEventListener("mouseup", p);
      };

      document.addEventListener("mousemove", w);
      document.addEventListener("mouseup", p);
    },
    [i, n, r]
  );

  const c = 7;
  const u = 80;
  const l = c;
  const h = u - c;
  const d = l + e * (h - l);
  const f = `${d}px`;
  return o("div", {
    className: wn.wrapper,
    onMouseDown: a,
    onClick: (m) => {
      m.stopPropagation();
      m.preventDefault();
    },
    children: o("div", {
      ref: s,
      className: wn.track,
      children: [
        o("div", { className: wn.fill, style: { height: f } }),
        o("div", { className: wn.thumb, style: { bottom: `${d}px` } }),
      ],
    }),
  });
}
const sm = "_7OM9isQp";
const im = "tOcLl5Fe";
const am = "K6pRPvna";
const cm = "W7spdM5t";
const lm = "_-2wZA6Y1";
const um = "eelWZWVN";
const dm = "cyewazLJ";
const hm = "XkulrB3e";
const fm = "fwQuDvLh";
const mm = "CjPRdJ6u";
const pm = "DeiHcSM2";

const Ke = {
  container: sm,
  hidden: im,
  video: am,
  revealing: cm,
  canvas: lm,
  duration: um,
  volumeControl: dm,
  active: hm,
  volumeSlider: fm,
  muteButton: mm,
  muteButtonMobile: pm,
};

const Lr = parseFloat(localStorage.getItem("video-volume") ?? "1");
let Ut = true;
let vo = isNaN(Lr) ? 1 : Lr;
const _o = new Set();
function Zn(e) {
  Ut = e;
  localStorage.setItem("video-muted", String(e));

  _o.forEach((t) => t(e));
}
function gm(e) {
  vo = e;
  localStorage.setItem("video-volume", String(e));
}
function vm(e) {
  const t = Math.floor(e / 60);
  const n = e % 60;
  return `${t}:${n.toString().padStart(2, "0")}`;
}
function Or({ muted: e, volume: t }) {
  if (e || t === 0) {
    return o(ec, {});
  }

  if (t < 0.7) {
    return o(Ja, {});
  }

  return o(tc, {});
}
function Mr({
  src: e,
  spoiler: t = false,
  width: n,
  height: r,
  duration: s,
  className: i = "",
}) {
  const a = I(null);
  const c = I(null);
  const u = I(null);
  const [l, h] = P(!t);
  const [d, f] = P(false);
  const [m, w] = P(false);
  const [p, g] = P(Ut);
  const [v, _] = P(vo);
  const [E, N] = P(false);
  const y = at();

  const { resetOpacity: S } = Zs(u, c, {
    isVisible: m && !l && t,
    isRevealing: d,
    onRevealComplete: () => h(true),
  });

  V(() => {
    const O = (x) => {
      g(x);

      if (a.current) {
        a.current.muted = x;
      }
    };
    _o.add(O);

    return () => {
      _o.delete(O);
    };
  }, []);

  V(() => {
    const c_current = c.current;
    if (!c_current) {
      return;
    }
    const x = new IntersectionObserver(
      (z) => {
        z.forEach((ee) => {
          w(ee.isIntersecting);
          const a_current = a.current;

          if (a_current) {
            if (ee.isIntersecting) {
              a_current.currentTime = 0;
              a_current.muted = Ut;
              a_current.volume = vo;
              a_current.play().catch(() => {});
            } else {
              a_current.pause();
              a_current.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    x.observe(c_current);

    return () => x.disconnect();
  }, [l]);

  const C = (O) => {
    O.stopPropagation();

    if (E) {
      return;
    }

    if (!l && !d && t) {
      f(true);
      S();
      return;
    }
    const a_current = a.current;

    if (a_current) {
      if (a_current.paused) {
        a_current.play().catch(() => {});
      } else {
        a_current.pause();
      }
    }
  };

  const R = b((O) => {
    O.stopPropagation();
    O.preventDefault();
    Zn(!Ut);
  }, []);

  const k = b((O) => {
    _(O);
    gm(O);

    if (a.current) {
      a.current.volume = O;
    }

    if (O > 0 && Ut) {
      Zn(false);
    } else if (O === 0 && !Ut) {
      Zn(true);
    }
  }, []);

  const A = !l && t;
  const T = n && r ? { aspectRatio: `${n} / ${r}` } : undefined;
  return o("div", {
    ref: c,
    className: `${Ke.container} ${i} ${A ? Ke.hidden : ""} ${
      d ? Ke.revealing : ""
    }`,
    style: T,
    onClick: C,
    children: [
      o("video", {
        ref: a,
        src: e,
        preload: "metadata",
        playsInline: true,
        muted: p,
        loop: true,
        className: Ke.video,
        width: n,
        height: r,
      }),
      (l || !t) &&
        (y
          ? o("button", {
              className: Ke.muteButtonMobile,
              onClick: R,
              type: "button",
              "aria-label": p ? "Unmute" : "Mute",
              children: o(Or, { muted: p, volume: v }),
            })
          : o("div", {
              className: `${Ke.volumeControl} ${E ? Ke.active : ""}`,
              children: [
                o("div", {
                  className: Ke.volumeSlider,
                  children: o(rm, {
                    value: p ? 0 : v,
                    onChange: k,
                    onDragStart: () => N(true),
                    onDragEnd: () => N(false),
                  }),
                }),
                o("button", {
                  className: Ke.muteButton,
                  onClick: R,
                  type: "button",
                  "aria-label": p ? "Unmute" : "Mute",
                  children: o(Or, { muted: p, volume: v }),
                }),
              ],
            })),
      s != null && A && o("div", { className: Ke.duration, children: vm(s) }),
      A && o("canvas", { ref: u, className: Ke.canvas }),
    ],
  });
}
const _m = "l4cwyAPN";
const wm = "qlCZ-7Jf";
const ym = "_5zkvFIKy";
const Cm = "_0vEjHxry";
const Nm = "y-RpGOEz";
const Tm = "_4vGEh5tJ";
const Em = "awFKBPHw";

const Pe = {
  mediaWrapper: _m,
  isFeed: wm,
  single: ym,
  image: Cm,
  singleVideo: Nm,
  media: Tm,
  dragging: Em,
};

const Rm = 5;
const km = 0.95;
const Qn = 0.5;
function $o({ media: e, isFeed: t = false }) {
  const n = e?.filter((C) => C.type === "image") ?? [];

  const r = e?.filter((C) => C.type === "video") ?? [];

  const s = I(null);

  const i = Ts((C) => C.open);

  const a = I(false);
  const c = I(0);
  const u = I(0);
  const l = I(false);
  const h = I(0);
  const d = I(0);
  const f = I(0);
  const m = I(null);

  const w = () => {
    if (m.current) {
      cancelAnimationFrame(m.current);
      m.current = null;
    }
  };

  const p = () => {
    const s_current = s.current;
    if (s_current) {
      f.current *= km;

      if (Math.abs(f.current) < Qn) {
        w();
        return;
      }

      s_current.scrollLeft += f.current;
      m.current = requestAnimationFrame(p);
    }
  };

  const g = (C) => {
    const s_current = s.current;

    if (s_current && n.length + r.length > 1) {
      if (n.length + r.length > 1) {
        w();
        a.current = true;
        s_current.classList.add(Pe.dragging);
        c.current = C.clientX;
        h.current = C.clientX;
        d.current = Date.now();
        u.current = s_current.scrollLeft;
        l.current = false;
        f.current = 0;
        C.preventDefault();
      }
    }
  };

  const v = (C) => {
    if (!a.current) {
      return;
    }
    const s_current = s.current;
    if (!s_current) {
      return;
    }
    const k = Date.now();
    const A = C.clientX - c.current;
    const T = C.clientX - h.current;
    const O = k - d.current;

    if (Math.abs(A) > Rm) {
      l.current = true;
    }

    if (O > 0) {
      f.current = (-T / O) * 16;
    }

    h.current = C.clientX;
    d.current = k;
    s_current.scrollLeft = u.current - A;
  };

  const _ = () => {
    if (a.current && Math.abs(f.current) > Qn) {
      p();
    }

    a.current = false;
    s.current?.classList.remove(Pe.dragging);
  };

  const E = () => {
    if (a.current) {
      Math.abs(f.current) > Qn && p();
      a.current = false;
      s.current?.classList.remove(Pe.dragging);
    }
  };

  V(
    () => () => {
      w();
      s.current?.classList.remove(Pe.dragging);
    },
    []
  );

  const N = (C, R) => {
    if (l.current) {
      l.current = false;
      R.stopPropagation();
      return;
    }
    i(
      n.map((k) => ({
        id: k.id,
        url: k.url,
        width: k.width || 800,
        height: k.height || 600,
      })),
      C
    );
  };

  const y = (C) => {
    C.stopPropagation();
    l.current = false;
  };

  if (n.length === 0 && r.length === 0) {
    return null;
  }
  const S = n.length + r.length;
  if (S === 1) {
    if (n.length === 1) {
      const [C] = n;
      return o("div", {
        className: `${Pe.mediaWrapper} ${t ? Pe.isFeed : ""}`,
        "data-count": 1,
        children: o("div", {
          className: Pe.single,
          onClick: (R) => {
            R.stopPropagation();
            N(0, R);
          },
          children: o(
            xr,
            {
              src: C.url,
              spoiler: C.spoiler,
              width: C.width,
              height: C.height,
              className: Pe.image,
              onClick: (R) => N(0, R),
            },
            C.id
          ),
        }),
      });
    }
    if (r.length === 1) {
      const [C] = r;
      return o("div", {
        className: `${Pe.mediaWrapper} ${t ? Pe.isFeed : ""}`,
        "data-count": 1,
        onClick: (R) => R.stopPropagation(),
        children: o("div", {
          className: Pe.singleVideo,
          children: o(
            Mr,
            {
              src: C.url,
              spoiler: C.spoiler,
              width: C.width,
              height: C.height,
              duration: C.duration,
            },
            C.id
          ),
        }),
      });
    }
  }
  return o("div", {
    className: `${Pe.mediaWrapper} ${t ? Pe.isFeed : ""}`,
    "data-count": S,
    children: o("div", {
      ref: s,
      className: `${Pe.media} ${t ? Pe.isFeed : ""}`,
      "data-count": S,
      onClick: y,
      onMouseDown: g,
      onMouseMove: v,
      onMouseUp: _,
      onMouseLeave: E,
      children: [
        r.map((C) =>
          o(
            Mr,
            {
              src: C.url,
              spoiler: C.spoiler,
              width: C.width,
              height: C.height,
              duration: C.duration,
              className: Pe.image,
            },
            C.id
          )
        ),
        n.map((C, R) =>
          o(
            xr,
            {
              src: C.url,
              spoiler: C.spoiler,
              width: C.width,
              height: C.height,
              className: Pe.image,
              onClick: (k) => N(R, k),
            },
            C.id
          )
        ),
      ],
    }),
  });
}
const bm = "Pc3ZwYUA";
const Sm = "uXiMWdXs";
const Im = "_92KcEhCb";
const Pm = "A5HN458Y";
const Am = "kVjrCCJb";
const xm = "WIU3w8vr";
const Lm = "sxXVgu6K";

const bt = {
  counter: bm,
  digit: Sm,
  prev: Im,
  current: Pm,
  animating: Am,
  up: xm,
  down: Lm,
};

function Om(e) {
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
function Qt({ value: e }) {
  const t = Om(e);
  const n = I(e);
  const r = I(t.length);
  const s = I(Date.now());

  const [i, a] = P(() =>
    t.split("").map((d, f) => ({
      char: d,
      prevChar: d,
      isAnimating: false,
      key: f,
    }))
  );

  const [c, u] = P(null);

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

    const w = i.map((N) => N.char);

    const p = Math.max(m.length, w.length);
    const g = w.join("").padStart(p, " ").split("");

    const _ = m
      .join("")
      .padStart(p, " ")
      .split("")
      .map((N, y) => {
        const S = g[y] || " ";
        const C = i[y - (p - i.length)];
        return N !== S
          ? (r.current++,
            { char: N, prevChar: S, isAnimating: true, key: r.current })
          : { char: N, prevChar: N, isAnimating: false, key: C?.key ?? y };
      })
      .filter((N) => N.char !== " " || N.isAnimating);

    a(_);
    const E = setTimeout(() => {
      a((N) =>
        N.map((y) => ({
          ...y,
          isAnimating: false,
        }))
      );

      u(null);
    }, 300);
    return () => clearTimeout(E);
  }, [e]);

  if (!i.some((d) => d.isAnimating)) {
    return o("span", { children: t });
  }

  const h = c === "up" ? bt.up : c === "down" ? bt.down : "";
  return o("span", {
    className: bt.counter,
    children: i.map((d) =>
      d.isAnimating
        ? o(
            "span",
            {
              className: `${bt.digit} ${bt.animating} ${h}`,
              children: [
                o("span", { className: bt.prev, children: d.prevChar }),
                o("span", { className: bt.current, children: d.char }),
              ],
            },
            d.key
          )
        : o("span", { children: d.char }, d.key)
    ),
  });
}
const Mm = "QnwlJ0JI";
const $m = "_4ZjoCms2";
const Dm = "aMkvCscU";
const Um = "lgOmJE17";
const Bm = "luVObdSy";
const Fm = "Rezs30lQ";
const Hm = "_8wD0dR85";
const Vm = "ndR5d-hp";
const Wm = "z-xpwcRG";
const jm = "DecvAv-7";
const zm = "VRuv-fcD";
const qm = "lo4NvVKr";
const Ym = "eJzh56H-";
const Gm = "giKCW-y7";

const Ae = {
  actions: Mm,
  actionsLeft: $m,
  action: Dm,
  views: Um,
  liked: Bm,
  reposted: Fm,
  disabled: Hm,
  noAnimation: Vm,
  reactionWrapper: Wm,
  actionsRight: jm,
  captured: zm,
  capturedEmoji: qm,
  capturedText: Ym,
  capturedMobile: Gm,
};

function Xm({
  liked: e,
  reposted: t,
  likesCount: n,
  repostsCount: r,
  commentsCount: s,
  viewsCount: i,
  dominantEmoji: a,
  onLike: c,
  onRepost: u,
  onComment: l,
  disableRepost: h = false,
}) {
  const d = I(false);
  return o("footer", {
    className: Ae.actions,
    children: [
      o("div", {
        className: Ae.actionsLeft,
        children: [
          o("div", {
            className: Ae.reactionWrapper,
            onClick: (f) => f.stopPropagation(),
            children: o("button", {
              className: `${Ae.action} ${e ? Ae.liked : ""} ${
                !d.current && e ? Ae.noAnimation : ""
              }`,
              onClick: (f) => {
                f.stopPropagation();
                d.current = true;
                c();
              },
              "aria-label": "Нравится",
              children: [
                o(Un, { filled: e }, e ? "liked" : "not-liked"),
                o(Qt, { value: n }),
              ],
            }),
          }),
          o("button", {
            className: Ae.action,
            onClick: (f) => {
              f.stopPropagation();
              l();
            },
            "aria-label": "Комментировать",
            children: [o(Lo, {}), o(Qt, { value: s })],
          }),
          o("button", {
            className: `${Ae.action} ${t ? Ae.reposted : ""} ${
              h ? Ae.disabled : ""
            }`,
            onClick: (f) => {
              f.stopPropagation();

              if (!h) {
                u();
              }
            },
            disabled: h,
            "aria-label": "Репост",
            children: [o(An, {}), o(Qt, { value: r })],
          }),
        ],
      }),
      o("div", {
        className: Ae.actionsRight,
        children: [
          a &&
            o(Re, {
              children: [
                o(xn, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Ae.captured,
                  children: [
                    o("span", { className: Ae.capturedEmoji, children: a }),
                    o("span", {
                      className: Ae.capturedText,
                      children: "Пост захвачен",
                    }),
                  ],
                }),
                o(xn, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Ae.capturedMobile,
                  children: o("span", { children: a }),
                }),
              ],
            }),
          o("span", {
            className: Ae.views,
            children: [o(Hs, {}), o(Qt, { value: i })],
          }),
        ],
      }),
    ],
  });
}
const Km = "FdYjPIR3";
const Zm = "MRPN0AlG";
const Qm = "gVTZJXUf";
const Jm = "PpDQ-7eT";
const ep = "f-Ewjbkv";
const tp = "qYj6ku6f";
const np = "YmQiahvA";
const op = "_4sEs40kd";
const rp = "QflhaLOr";
const sp = "_8yAtdePh";
const ip = "Q0BBb0GB";
const ap = "LVT25SUb";
const cp = "_2QopExez";
const lp = "GWyTusR8";
const up = "uA48J3e0";
const dp = "L9fW2zD6";

const be = {
  post: Km,
  postInner: Zm,
  isFeed: Qm,
  postContent: Jm,
  postBody: ep,
  textWrapper: tp,
  text: np,
  collapsed: op,
  expandButton: rp,
  originalPost: sp,
  originalPostHeader: ip,
  originalPostTime: ap,
  originalPostText: cp,
  originalPostMedia: lp,
  originalPostStats: up,
  originalPostStat: dp,
};

function yn(e) {
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
function hp(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function fp({ attachments: e }) {
  const t = Ne(() => On(e), [e]);
  return (
    t.length === 0 ||
    o("div", {
      className: be.originalPostMedia,
      children: o($o, { media: t }),
    })
  );
}
function mp({ originalPost: e }) {
  const t = hp(e.createdAt);

  const n = b(
    (r) => {
      r.stopPropagation();
      const s = e.author.username ?? e.author.id;
      $(`/@${s}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id]
  );

  return o("div", {
    className: be.originalPost,
    onClick: n,
    children: [
      o("div", {
        className: be.originalPostHeader,
        children: [
          o(An, { size: 14 }),
          o(qe, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          o(un, {
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          o("span", { className: be.originalPostTime, children: t }),
        ],
      }),
      e.text && o("div", { className: be.originalPostText, children: e.text }),
      e.attachments &&
        e.attachments.length > 0 &&
        o(fp, { attachments: e.attachments }),
      o("div", {
        className: be.originalPostStats,
        children: [
          o("span", {
            className: be.originalPostStat,
            children: [o(Un, { size: 16 }), yn(e.reactions?.total ?? 0)],
          }),
          o("span", {
            className: be.originalPostStat,
            children: [o(Lo, { size: 16 }), yn(e.stats?.comments ?? 0)],
          }),
          o("span", {
            className: be.originalPostStat,
            children: [o(An, { size: 16 }), yn(e.stats?.reposts ?? 0)],
          }),
          o("span", {
            className: be.originalPostStat,
            children: [o(Hs, { size: 16 }), yn(e.stats?.views ?? 0)],
          }),
        ],
      }),
    ],
  });
}
const pp = "cZnuRugG";
const gp = "gXPlO0SF";
const vp = "yfGqJGgk";
const _p = "a3a8DYnF";
const wp = "Zm7GdliE";
const yp = "x-TM77c0";
const Cp = "vqhGsmVx";
const Np = "wXZfEkKN";
const Tp = "C4SARhpg";
const Ep = "epV7SM-L";
const Rp = "Bkxq4G-V";
const kp = "M1orzhg7";
const bp = "VQtopWsI";
const Sp = "vI-SLgZ3";
const Ip = "hWCpL6Hf";
const Pp = "WAYqGGYB";
const Ap = "OWLYzJZs";
const xp = "P15SrtYp";
const Lp = "y-9i4poD";
const Op = "qTvjpE7N";
const Mp = "rKM-vAOv";

const ye = {
  commentInput: pp,
  replyMode: gp,
  inputRow: vp,
  attachmentStrip: _p,
  circleButton: wp,
  micButton: yp,
  sendButton: Cp,
  submitting: Np,
  textareaContainer: Tp,
  expanded: Ep,
  voiceMode: Rp,
  inputWrapper: kp,
  commentCharCount: bp,
  error: Sp,
  input: Ip,
  replyHeader: Pp,
  replyText: Ap,
  replyName: xp,
  replyClose: Lp,
  dragActive: Op,
  dragOverlay: Mp,
};

const $p = "_2mmgs8Ne";
const Dp = "WFxp3J8v";
const Up = "abwLbpfW";
const Jn = { textInput: $p, entering: Dp, sendButton: Up };
const Bp = 1000; /* 1e3 */
function Fp({
  text: e,
  spans: t,
  onChange: n,
  placeholder: r,
  onSubmit: s,
  isEntering: i,
  autoFocus: a,
  isSubmitting: c,
  sendDisabled: u,
  onImagePaste: l,
}) {
  const h = Bp - e.length;
  const d = h < 0;
  const f = [Jn.textInput, i ? Jn.entering : ""].filter(Boolean).join(" ");
  return o("div", {
    className: f,
    children: [
      o("div", {
        className: ye.inputWrapper,
        children: [
          o(Fn, {
            value: e,
            spans: t,
            onChange: n,
            placeholder: r,
            autoFocus: a,
            className: ye.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: d || s,
            disableFormatting: true,
            onImagePaste: l,
          }),
          d &&
            o("span", {
              className: `${ye.commentCharCount} ${ye.error}`,
              children: h,
            }),
        ],
      }),
      o("button", {
        className: `${ye.circleButton} ${ye.sendButton} ${Jn.sendButton} ${
          c ? ye.submitting : ""
        }`,
        onClick: s,
        disabled: c || u || u || d,
        children: c ? o(_t, { size: "xs" }) : o(As, { size: 20 }),
      }),
    ],
  });
}
const Jt = 2;
const Hp = 2;
const Cn = Jt + Hp;
const St = 24;
const Vp = 80;
const $r = "rgba(142, 142, 147, 0.6)";
const Wp = "#FFFFFF";
function jp({
  levels: e,
  slideOffset: t,
  audioRef: n,
  isRecording: r,
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
  const w = I(0);
  const p = I(null);
  const g = I(null);
  const v = I(0);
  const [_, E] = P(0);
  const N = Math.max(1, Math.floor(_ / Cn));

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
    const O = new ResizeObserver((z) => {
      for (const ee of z) {
        const q = ee.contentRect.width;

        if (q > 0) {
          E(q);
        }
      }
    });
    O.observe(l_current);
    const x = l_current.getBoundingClientRect();

    if (x.width > 0) {
      E(x.width);
    }

    return () => {
      O.disconnect();
    };
  }, []);

  V(() => {
    const u_current = u.current;
    if (!u_current || _ === 0) {
      return;
    }
    const O = window.devicePixelRatio || 1;
    u_current.width = _ * O;
    u_current.height = St * O;
    u_current.style.width = `${_}px`;
    u_current.style.height = `${St}px`;
  }, [_]);

  const y = b(
    (T) => {
      const u_current = u.current;
      if (!u_current || _ === 0) {
        return;
      }
      const x = u_current.getContext("2d");
      if (!x) {
        return;
      }
      const z = window.devicePixelRatio || 1;
      x.clearRect(0, 0, u_current.width, u_current.height);
      x.save();
      x.scale(z, z);
      const ee = St / 2;
      const q = St - 4;
      for (let ae = 0; ae < N; ae++) {
        let ce;
        if (e.length === 0) {
          ce = 0.05;
        } else if (e.length === 1) {
          ce = e[0];
        } else {
          const $ = (ae / (N - 1)) * (e.length - 1);
          const L = Math.floor($);
          const B = Math.min(L + 1, e.length - 1);
          const D = $ - L;
          ce = e[L] * (1 - D) + e[B] * D;
        }
        const K = Math.max(4, ce * q);
        const te = ae * Cn;
        const U = ee - K / 2;
        const W = ae < T;
        x.fillStyle = W ? Wp : $r;
        const Z = Jt / 2;
        x.beginPath();
        x.roundRect(te, U, Jt, K, Z);
        x.fill();
      }
      x.restore();
    },
    [e, _, N]
  );

  const S = b(
    (T) => {
      const u_current = u.current;
      if (!u_current || _ === 0) {
        return;
      }
      const x = u_current.getContext("2d");
      if (!x) {
        return;
      }
      const z = window.devicePixelRatio || 1;
      const m_current = m.current;

      const { current } = f;

      if (current !== m_current) {
        const U = T - w.current;
        const W = (Cn / Vp) * U;

        if (current < m_current) {
          f.current = Math.min(m_current, current + W);
        } else {
          f.current = m_current;
        }
      }
      w.current = T;
      x.clearRect(0, 0, u_current.width, u_current.height);
      x.save();
      x.scale(z, z);
      x.translate(-current, 0);
      const ce = St / 2;
      const K = St - 4;
      const te = N + e.length;
      for (let U = 0; U < te; U++) {
        const W = U - N;
        const Z = W >= 0 && W < e.length ? e[W] : 0.05;
        const $ = Math.max(4, Z * K);
        const L = U * Cn;
        const B = ce - $ / 2;
        x.fillStyle = $r;
        const D = Jt / 2;
        x.beginPath();
        x.roundRect(L, B, Jt, $, D);
        x.fill();
      }
      x.restore();

      if (f.current !== m.current || r) {
        p.current = requestAnimationFrame(S);
      }
    },
    [e, _, N, r]
  );

  V(() => {
    if (r) {
      w.current = performance.now();
      p.current = requestAnimationFrame(S);
    } else if (p.current) {
      cancelAnimationFrame(p.current);
      p.current = null;
    }

    return () => {
      if (p.current) {
        cancelAnimationFrame(p.current);
        p.current = null;
      }
    };
  }, [r, S]);

  V(() => {
    if (!i || r) {
      if (g.current) {
        cancelAnimationFrame(g.current);
        g.current = null;
      }

      return;
    }
    const T = () => {
      const n_current = n.current;
      if (
        !n_current ||
        n_current.paused ||
        n_current.paused ||
        n_current.ended
      ) {
        g.current = null;
        return;
      }
      const x = n_current.currentTime / n_current.duration;
      const z = Math.ceil(x * N);

      if (z !== v.current) {
        v.current = z;
        y(z);
      }

      g.current = requestAnimationFrame(T);
    };
    g.current = requestAnimationFrame(T);

    return () => {
      if (g.current) {
        cancelAnimationFrame(g.current);
        g.current = null;
      }
    };
  }, [i, r, n, N, y]);

  V(() => {
    if (!r && !i && s) {
      const n_current = n.current;
      if (n_current && n_current.duration > 0 && n_current.currentTime > 0) {
        const O = n_current.currentTime / n_current.duration;
        const x = Math.ceil(O * N);
        v.current = x;
        y(x);
      } else {
        v.current = 0;
        y(0);
      }
    }
  }, [r, i, s, y, n, N]);

  V(() => {
    if (!r && s && !i) {
      y(v.current);
    }
  }, [e, N, r, s, i, y]);

  const C = b((T) => {
    const l_current = l.current;
    if (!l_current) {
      return 0;
    }
    const x = l_current.getBoundingClientRect();
    const z = "touches" in T ? T.touches[0].clientX : T.clientX;
    return Math.max(0, Math.min(1, (z - x.left) / x.width));
  }, []);

  const R = b(
    (T) => {
      if (!(!s || r)) {
        T.preventDefault();

        if (!i) {
          c();
          return;
        }

        h.current = true;
        d.current = C(T);
      }
    },
    [s, r, i, C, c]
  );

  const k = b(
    (T) => {
      if (h.current) {
        d.current = C(T);
      }
    },
    [C]
  );

  const A = b(() => {
    if (h.current) {
      a(d.current);
      h.current = false;
    }
  }, [a]);

  V(() => {
    const T = (x) => k(x);

    const O = () => A();

    window.addEventListener("mousemove", T);
    window.addEventListener("mouseup", O);
    window.addEventListener("touchmove", T);
    window.addEventListener("touchend", O);

    return () => {
      window.removeEventListener("mousemove", T);
      window.removeEventListener("mouseup", O);
      window.removeEventListener("touchmove", T);
      window.removeEventListener("touchend", O);
    };
  }, [k, A]);

  return o("div", {
    ref: l,
    style: {
      width: "100%",
      height: `${St}px`,
      overflow: "hidden",
      cursor: s && !r ? "pointer" : "default",
    },
    onMouseDown: R,
    onTouchStart: R,
    children: o("canvas", { ref: u }),
  });
}
const zp = "-Ho1i5aD";
const qp = "tC8l4Awz";
const Yp = "qgaHaLq2";
const Gp = "ABusj9On";
const Xp = "QN61mWs7";
const Kp = "sb0Zcaza";
const Zp = "zYZ8RG9n";
const Qp = "kV8tSOUW";
const Jp = "MazmNAnz";
const e0 = "IygqjuIv";
const t0 = "Danfku1z";

const Be = {
  voiceInput: zp,
  circleButton: qp,
  playButton: Yp,
  hasRecording: Gp,
  stopButton: Xp,
  recording: Kp,
  sendButton: Zp,
  audioVisualizer: Qp,
  waveformContainer: Jp,
  recordingTime: e0,
  exiting: t0,
};

function n0({ onCancel: e, onSend: t, isExiting: n, onExitComplete: r }) {
  const [s, i] = P(false);

  const {
    isRecording: a,
    hasRecording: c,
    recordingTime: u,
    audioLevels: l,
    slideOffset: h,
    isPlaying: d,
    playbackProgress: f,
    duration: m,
    audioElementRef: w,
    startRecording: p,
    stopRecording: g,
    cancelRecording: v,
    playAudio: _,
    pauseAudio: E,
    seekTo: N,
    getAudioBlob: y,
  } = $a();

  V(() => {
    p();
  }, []);

  V(() => {
    if (n && r) {
      const x = setTimeout(r, 300);
      return () => clearTimeout(x);
    }
  }, [n, r]);

  const S = (x) => {
    if (!isFinite(x) || isNaN(x)) {
      return "00:00";
    }
    const z = Math.floor(x / 60);
    const ee = Math.floor(x % 60);
    return `${z.toString().padStart(2, "0")}:${ee.toString().padStart(2, "0")}`;
  };

  const C = () => {
    if (c) {
      if (d) {
        E();
      } else {
        _();
      }
    }
  };

  const R = () => {
    if (a) {
      g();
    }
  };

  const k = b(
    (x) => {
      N(x);
    },
    [N]
  );

  const A = b(async () => {
    if (!(s || !t)) {
      i(true);
      try {
        let x = null;

        if (a) {
          x = await g();
        } else {
          x = y();
        }

        if (!x) {
          return;
        }

        await t(x);
        v();
        e();
      } catch (x) {
        console.error("Failed to send voice message:", x);
      } finally {
        i(false);
      }
    }
  }, [s, a, g, y, t, v, e]);

  const T = S(a ? u : d ? f * m : m);

  const O = [
    Be.voiceInput,
    a ? Be.recording : "",
    c ? Be.hasRecording : "",
    n ? Be.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return o("div", {
    className: O,
    children: [
      o("button", {
        className: `${Be.circleButton} ${Be.playButton}`,
        onClick: C,
        children: d ? o(Is, { size: 20 }) : o(Ps, { size: 20 }),
      }),
      o("div", {
        className: Be.audioVisualizer,
        children: [
          o("div", {
            className: Be.waveformContainer,
            children: o(jp, {
              levels: l,
              slideOffset: h,
              audioRef: w,
              isRecording: a,
              hasRecording: c,
              isPlaying: d,
              onSeek: k,
              onPlay: _,
            }),
          }),
          o("span", { className: Be.recordingTime, children: T }),
        ],
      }),
      o("button", {
        className: `${Be.circleButton} ${Be.stopButton}`,
        onClick: R,
        children: o(Za, { size: 20 }),
      }),
      o("button", {
        className: `${Be.circleButton} ${Be.sendButton}`,
        onClick: A,
        disabled: s || (a && u < 1),
        children: s ? o(_t, { size: "xs" }) : o(As, { size: 20 }),
      }),
    ],
  });
}
function Qs({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: r,
  onCancelReply: s,
  autoFocus: i,
}) {
  const { text: a, spans: c, handleChange: u, reset: l } = Dn();
  const [h, d] = P("text");
  const [f, m] = P(false);
  const [w, p] = P(false);
  const [g, v] = P(false);
  const [_, E] = P(false);
  const N = I(false);
  const y = I(null);
  const S = I(0);

  const {
    images: C,
    uploadingImages: R,
    isUploading: k,
    openFilePicker: A,
    removeImage: T,
    uploadFiles: O,
    clearAll: x,
    fileInputRef: z,
    handleFileChange: ee,
  } = Ys(4);

  V(
    () => () => {
      if (y.current) {
        clearTimeout(y.current);
      }
    },
    []
  );
  const q = C.length > 0 || R.length > 0;
  const ae = a.length > 0 || g || g || q;
  const ce = h === "voice";
  const K = 1000; /* 1e3 */

  const te = async () => {
    const j = a.trim().length > 0;
    const X = C.length > 0;
    if ((!j && !X) || g || k || a.length > K) {
      return;
    }
    const oe = a.trim();
    const ie = [...c];

    const fe = C.map((re) => ({
      mediaId: re.mediaId,
    }));

    v(true);
    try {
      await e(oe, ie, fe.length > 0 ? fe : undefined);
      l();
      x();
    } catch (re) {
      console.error("Failed to submit comment:", re);
    } finally {
      v(false);
    }
  };

  const U = () => {
    N.current = true;
    d("voice");
    p(false);
  };

  const W = () => {
    m(true);
  };

  const Z = () => {
    m(false);
    d("text");
    p(true);

    if (y.current) {
      clearTimeout(y.current);
    }

    y.current = window.setTimeout(() => {
      y.current = null;
      p(false);
    }, 300);
  };

  const $ = b((j) => {
    j.preventDefault();
    j.stopPropagation();
    S.current++;

    if (j.dataTransfer?.types.includes("Files")) {
      E(true);
    }
  }, []);

  const L = b((j) => {
    j.preventDefault();
    j.stopPropagation();
  }, []);

  const B = b((j) => {
    j.preventDefault();
    j.stopPropagation();
    S.current--;

    if (S.current === 0) {
      E(false);
    }
  }, []);

  const D = b(
    (j) => {
      j.preventDefault();
      j.stopPropagation();
      S.current = 0;
      E(false);
      const X = j.dataTransfer?.files;

      if (X && X.length > 0) {
        O(Array.from(X));
      }
    },
    [O]
  );

  const Y = [
    ye.commentInput,
    ae ? ye.expanded : "",
    ce ? ye.voiceMode : "",
    r ? ye.replyMode : "",
    _ ? ye.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return o("div", {
    className: Y,
    onDragEnter: $,
    onDragOver: L,
    onDragLeave: B,
    onDrop: D,
    children: [
      _ &&
        o("div", {
          className: ye.dragOverlay,
          children: [
            o(Ms, { size: 24 }),
            o("span", { children: "Перетащите изображение" }),
          ],
        }),
      r &&
        o("div", {
          className: ye.replyHeader,
          children: [
            o("span", {
              className: ye.replyText,
              children: [
                "Ответ для ",
                o("span", { className: ye.replyName, children: r.authorName }),
              ],
            }),
            o("button", {
              className: ye.replyClose,
              onClick: s,
              children: o(nt, { size: 16 }),
            }),
          ],
        }),
      !ce &&
        !f &&
        q &&
        o("div", {
          className: ye.attachmentStrip,
          children: o(qs, { images: C, uploadingImages: R, onRemove: T }),
        }),
      o("div", {
        className: ye.inputRow,
        children: [
          o("button", {
            className: ye.circleButton,
            onClick: ce ? W : A,
            children: ce ? o(nt, { size: 20 }) : o(xs, { size: 20 }),
          }),
          o("div", {
            className: ye.textareaContainer,
            children:
              ce || f
                ? o(n0, {
                    onCancel: W,
                    onSend: t,
                    isExiting: f,
                    onExitComplete: Z,
                  })
                : o(Fp, {
                    text: a,
                    spans: c,
                    onChange: u,
                    placeholder: n,
                    onSubmit: te,
                    isEntering: w,
                    autoFocus: i,
                    isSubmitting: g,
                    sendDisabled: k,
                    onImagePaste: O,
                  }),
          }),
          !ce &&
            !f &&
            o("button", {
              className: `${ye.circleButton} ${ye.micButton}`,
              onClick: U,
              children: o(Ga, { size: 20 }),
            }),
        ],
      }),
      o("input", {
        ref: z,
        type: "file",
        accept: mo,
        multiple: true,
        onChange: ee,
        style: { display: "none" },
      }),
    ],
  });
}

const eo = ct((e) => ({
  activeAudioId: null,
  setActiveAudio: (t) => e({ activeAudioId: t }),
}));

const o0 = "_4REluXTH";
const r0 = "csThJX40";
const s0 = "_7tEz9WJs";
const i0 = "yICArXOf";
const a0 = "-QGEO-Ir";
const c0 = "F2vpEy3t";
const l0 = "thwOd-Oi";
const u0 = "cU3NuD-h";
const d0 = "koGcQrYR";
const h0 = "Ka6vy6TO";

const Ze = {
  voiceMessage: o0,
  playButton: r0,
  content: s0,
  waveform: i0,
  dragging: a0,
  bar: c0,
  played: l0,
  info: u0,
  time: d0,
  duration: h0,
};

const f0 = 45;
function m0(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r;
    t = t & t;
  }
  return Math.abs(t);
}
function p0(e) {
  const t = [];
  let n = m0(e);
  for (let r = 0; r < f0; r++) {
    n = (n * 9301 + 49297) % 233280;
    const s = 0.2 + (n / 233280) * 0.8;
    t.push(s);
  }
  return t;
}
function Dr(e) {
  if (!isFinite(e) || isNaN(e)) {
    return "0:00";
  }
  const t = Math.floor(e / 60);
  const n = Math.floor(e % 60);
  return `${t}:${n.toString().padStart(2, "0")}`;
}
function g0({ src: e, duration: t = 0 }) {
  const n = Ne(() => e, [e]);

  const r = Ne(() => p0(e), [e]);

  const s = eo((R) => R.activeAudioId);

  const i = eo((R) => R.setActiveAudio);

  const [a, c] = P(true);
  const [u, l] = P(0);
  const [h, d] = P(t);
  const [f, m] = P(false);
  const w = I(null);
  const p = I(null);
  const g = I(null);
  const v = s === n;

  V(() => {
    if (s !== n && w.current && !w.current.paused) {
      w.current.pause();
      g.current && (cancelAnimationFrame(g.current), (g.current = null));
    }
  }, [s, n]);

  V(() => {
    const R = new Audio(e);
    w.current = R;

    const k = () => {
      d(R.duration || t);
      c(false);
    };

    const A = () => {
      l(0);

      if (g.current) {
        cancelAnimationFrame(g.current);
        g.current = null;
      }

      i(null);
    };

    const T = () => {
      c(false);
    };

    R.addEventListener("loadedmetadata", k);
    R.addEventListener("ended", A);
    R.addEventListener("error", T);

    return () => {
      R.removeEventListener("loadedmetadata", k);
      R.removeEventListener("ended", A);
      R.removeEventListener("error", T);
      R.pause();
      w.current = null;

      if (g.current) {
        cancelAnimationFrame(g.current);
      }

      if (eo.getState().activeAudioId === n) {
        i(null);
      }
    };
  }, [e, t, n, i]);

  const _ = b(() => {
    if (w.current) {
      l(w.current.currentTime);
      g.current = requestAnimationFrame(_);
    }
  }, []);

  const E = b(() => {
    const w_current = w.current;

    if (w_current && !a) {
      if (v) {
        w_current.pause();
        g.current && (cancelAnimationFrame(g.current), (g.current = null));
        i(null);
      } else {
        i(n);
        w_current.play();
        _();
      }
    }
  }, [v, a, n, i, _]);

  const N = b(
    (R) => {
      if (!p.current || !h) {
        return 0;
      }
      const k = p.current.getBoundingClientRect();
      const R_clientX = R.clientX;
      return Math.max(0, Math.min(R_clientX - k.left, k.width)) / k.width;
    },
    [h]
  );

  const y = b(
    (R) => {
      const w_current = w.current;
      if (!w_current || !h || !h || f) {
        return;
      }
      const A = N(R);
      w_current.currentTime = A * h;
      l(w_current.currentTime);
    },
    [h, f, N]
  );

  const S = b(
    (R) => {
      const w_current = w.current;
      if (!w_current || !h) {
        return;
      }
      m(true);
      const A = N(R);
      w_current.currentTime = A * h;
      l(w_current.currentTime);
    },
    [h, N]
  );

  V(() => {
    if (!f) {
      return;
    }

    const R = (A) => {
      const w_current = w.current;
      if (!w_current || !h) {
        return;
      }
      const O = N(A);
      w_current.currentTime = O * h;
      l(w_current.currentTime);
    };

    const k = () => {
      m(false);
    };

    document.addEventListener("mousemove", R);
    document.addEventListener("mouseup", k);

    return () => {
      document.removeEventListener("mousemove", R);
      document.removeEventListener("mouseup", k);
    };
  }, [f, h, N]);
  const C = h > 0 ? u / h : 0;
  return o("div", {
    className: `${Ze.voiceMessage} ${v ? Ze.playing : ""}`,
    children: [
      o("button", {
        className: Ze.playButton,
        onClick: E,
        disabled: a,
        children: a
          ? o(Ds, { size: 18 })
          : v
          ? o(Is, { size: 18 })
          : o(Ps, { size: 18 }),
      }),
      o("div", {
        className: Ze.content,
        children: [
          o("div", {
            ref: p,
            className: `${Ze.waveform} ${f ? Ze.dragging : ""}`,
            onClick: y,
            onMouseDown: S,
            children: r.map((R, k) => {
              const T = (k + 0.5) / r.length <= C;
              return o(
                "div",
                {
                  className: `${Ze.bar} ${T ? Ze.played : ""}`,
                  style: { height: `${Math.max(4, R * 24)}px` },
                },
                k
              );
            }),
          }),
          o("div", {
            className: Ze.info,
            children: [
              o("span", {
                className: Ze.time,
                children: Dr(v || u > 0 ? u : h),
              }),
              (v || u > 0) &&
                o("span", { className: Ze.duration, children: ["/ ", Dr(h)] }),
            ],
          }),
        ],
      }),
    ],
  });
}
const v0 = "EMoEIZFv";
const _0 = "TCFYTRkG";
const w0 = "-Jv0cl93";
const y0 = "_8ZH4gvtt";
const C0 = "VgMMM-FP";
const N0 = "MHUIw-Bn";
const T0 = "ugI7Vwfw";
const E0 = "eYiDjO7I";
const R0 = "efgl9R1v";
const k0 = "N5ciicq2";
const b0 = "Y3Xvuphx";
const S0 = "P1lAENLs";
const I0 = "EafRTyEa";
const P0 = "YgCVK2-C";
const A0 = "E34stxAv";
const x0 = "_5xeGurR-";
const L0 = "_8CHHNoFp";
const O0 = "qBk55euG";
const M0 = "NTrrYRK4";
const $0 = "Oy71u1HK";
const D0 = "Az3ELd41";
const U0 = "g9UiDqsQ";
const B0 = "-tabj2ls";
const F0 = "LiWVk6u3";

const de = {
  commentWrapper: v0,
  threadItem: _0,
  avatarWrapper: w0,
  threadLine: y0,
  commentBody: C0,
  showMoreBtn: N0,
  avatarPlaceholder: T0,
  comment: E0,
  small: R0,
  commentTime: k0,
  commentText: b0,
  commentActions: S0,
  commentContent: I0,
  avatarLink: P0,
  authorLink: A0,
  commentHeader: x0,
  moreButton: L0,
  commentHeaderLeft: O0,
  replyMention: M0,
  commentMedia: $0,
  reactionWrapper: D0,
  commentAction: U0,
  liked: B0,
  replyButton: F0,
};

function H0({
  author: e,
  commentId: t,
  text: n,
  spans: r = [],
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
  replyTo: w,
  hideAvatar: p = false,
  isWallOwner: g = false,
}) {
  n.slice(0, 20);
  const v = bs(i);

  const _ = Te((R) => R.profile?.id);

  const E = e.id === _;
  const N = E || g;
  const y = u === "xs";

  const S = Ne(() => {
    const R = [];

    if (E && f) {
      R.push({
        id: "edit",
        label: "Редактировать",
        icon: o(Ls, { size: 16 }),
        onClick: () => f(t),
      });
    }

    if (N && m) {
      R.push({
        id: "delete",
        label: "Удалить",
        icon: o(Fs, { size: 16 }),
        danger: true,
        onClick: () => m(t),
      });
    }

    if (!E) {
      R.push({
        id: "report",
        label: "Пожаловаться",
        icon: o(Os, { size: 16 }),
        danger: true,
        onClick: () => d(t),
      });
    }

    return R;
  }, [E, N, t, f, m, d]);

  const C = `/@${e.username ?? e.id}`;
  return o("div", {
    className: `${de.comment} ${y ? de.small : ""}`,
    children: [
      !p &&
        o("a", {
          href: C,
          className: de.avatarLink,
          children: o(qe, { src: e.avatar, alt: e.displayName, size: u }),
        }),
      o("div", {
        className: de.commentContent,
        children: [
          o("div", {
            className: de.commentHeader,
            children: [
              o("div", {
                className: de.commentHeaderLeft,
                children: [
                  o("a", {
                    href: C,
                    className: de.authorLink,
                    children: o(un, {
                      name: e.displayName,
                      verified: e.isVerified,
                      hasNuksta: e.hasNuksta,
                      pin: e.pin,
                      size: u,
                    }),
                  }),
                  o("span", { className: de.commentTime, children: v }),
                ],
              }),
              o(Ks, {
                trigger: o(Us, { size: y ? 14 : 16 }),
                items: S,
                position: "bottom-right",
                className: de.moreButton,
              }),
            ],
          }),
          (w || n) &&
            o("div", {
              className: de.commentText,
              children: [
                w &&
                  o(Re, {
                    children: [
                      o("a", {
                        href: `/@${w.username}`,
                        className: de.replyMention,
                        children: ["@", w.displayName],
                      }),
                      ", ",
                    ],
                  }),
                n && o(Xs, { text: n, spans: r }),
              ],
            }),
          On(s).length > 0 &&
            o("div", {
              className: de.commentMedia,
              children: o($o, { media: On(s) }),
            }),
          s
            .filter((R) => R.type === "audio")
            .map((R) => o(g0, { src: R.url, duration: R.duration }, R.id)),
          o("div", {
            className: de.commentActions,
            children: [
              o("button", {
                className: de.replyButton,
                onClick: h,
                children: "Ответить",
              }),
              o("div", {
                className: de.reactionWrapper,
                children: o("button", {
                  className: `${de.commentAction} ${c ? de.liked : ""}`,
                  onClick: () => l(),
                  children: [
                    o(Un, { size: 14, filled: c }),
                    o(Qt, { value: a }),
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
function Js({
  comment: e,
  onLike: t,
  onReaction: n,
  onLikeReply: r,
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
  isLoadingReplies: w = false,
  flashingCommentId: p,
  isWallOwner: g = false,
}) {
  e.id;
  const v = i?.commentId === e.id;

  const _ = {
    id: e.author.id,
    username: e.author.username,
    avatar: e.author.avatar ?? "",
    displayName: e.author.displayName,
    isVerified: e.author.isVerified,
    pin: e.author.pin,
  };

  const E = e.previewReplies ?? [];
  const N = p === e.id;
  const [y] = P({});
  const [S] = P({});
  const C = b(async () => {}, [e.id]);
  const R = b(async (T) => {}, []);
  const k = e.stats.replies > E.length;

  const A = [
    { type: "parent", data: e, author: _ },
    ...E.map((T) => ({
      type: "reply",
      data: T,

      author: {
        id: T.author.id,
        username: T.author.username,
        avatar: T.author.avatar ?? "",
        displayName: T.author.displayName,
        isVerified: T.author.isVerified,
        pin: T.author.pin,
      },
    })),
  ];

  return o("div", {
    className: `${de.commentWrapper} ${N ? "flash-highlight" : ""}`,
    "data-comment-id": e.id,
    children: [
      A.map((T, O) => {
        const z = !(O === A.length - 1 && !v && !k);
        const ee = p === T.data.id;
        return o(
          "div",
          {
            "data-comment-id": T.data.id,
            className: `${de.threadItem} ${ee ? "flash-highlight" : ""}`,
            children: [
              o("div", {
                className: de.avatarWrapper,
                children: [
                  o("a", {
                    href: `/@${T.author.username ?? T.author.id}`,
                    className: de.avatarLink,
                    children: o(qe, {
                      src: T.author.avatar,
                      alt: T.author.displayName,
                      size: "sm",
                    }),
                  }),
                  z && o("div", { className: de.threadLine }),
                ],
              }),
              o("div", {
                className: de.commentBody,
                children: o(H0, {
                  author: T.author,
                  commentId: T.data.id,
                  text: T.data.text,
                  spans: T.data.spans ?? [],
                  attachments: T.data.attachments ?? [],
                  replyTo: T.data.replyTo,
                  createdAt: T.data.createdAt,
                  reactionsCount: T.data.reactions.total,
                  isReacted: T.data.reactions.myReaction !== null,
                  selectedReaction: T.data.reactions.myReaction,
                  reactionCounts: T.type === "parent" ? y : S[T.data.id] ?? {},
                  size: "sm",
                  onLike: T.type === "parent" ? t : () => r(T.data.id),
                  onReaction:
                    T.type === "parent"
                      ? n
                        ? (q) => n(e.id, q)
                        : undefined
                      : s
                      ? (q) => s(T.data.id, q)
                      : undefined,
                  onReply: () =>
                    T.type === "parent"
                      ? a(
                          e.id,
                          e.author.username ?? e.author.id,
                          e.author.displayName,
                          e.author.id
                        )
                      : a(
                          e.id,
                          T.data.author.username ?? T.data.author.id,
                          T.data.author.displayName,
                          T.data.author.id,
                          T.data.id
                        ),
                  onReport: d,
                  onEdit: f,
                  onDelete: m,
                  onHoverReaction: T.type === "parent" ? C : () => R(T.data.id),
                  hideAvatar: true,
                  isWallOwner: g,
                }),
              }),
            ],
          },
          T.data.id
        );
      }),
      v &&
        o("div", {
          className: de.threadItem,
          children: [
            o("div", {
              className: de.avatarWrapper,
              children: [
                o("div", { className: de.avatarPlaceholder }),
                k && o("div", { className: de.threadLine }),
              ],
            }),
            o("div", {
              className: de.commentBody,
              children: o(Qs, {
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
      k &&
        !w &&
        o("button", {
          className: de.showMoreBtn,
          onClick: () => h(e.id),
          children: ["Показать ещё ", e.stats.replies - E.length, " ответов"],
        }),
    ],
  });
}
function V0({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: r = (s) => s,
}) {
  const s = I(null);
  const [i, a] = P(0);
  const [c, u] = P(0);
  const l = I(new Map());
  const h = I(new Map());
  const d = I(0);

  if (d.current !== e) {
    d.current = e;
    h.current.clear();
  }

  const f = b(
    (y) => {
      const S = r(y);
      return l.current.get(S) ?? t;
    },
    [r, t]
  );

  const m = b(
    (y) => {
      if (y === 0) {
        return 0;
      }
      const S = h.current.get(y);
      if (S !== undefined) {
        return S;
      }
      let C = 0;
      let R = 0;
      for (let k = y - 1; k >= 0; k--) {
        const A = h.current.get(k);
        if (A !== undefined) {
          C = k;
          R = A;
          break;
        }
      }
      for (let k = C; k < y; k++) {
        R += f(k);
      }
      h.current.set(y, R);
      return R;
    },
    [f]
  );

  const w = Ne(() => (e === 0 ? 0 : m(e - 1) + f(e - 1)), [e, m, f]);

  const { startIndex: p, endIndex: g } = Ne(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let y = 0;
    let S = e - 1;

    while (y < S) {
      const A = Math.floor((y + S) / 2);
      const T = m(A);
      const O = f(A);

      if (T + O < i) {
        y = A + 1;
      } else {
        S = A;
      }
    }

    const C = Math.max(0, y - n);
    let R = y;
    let k = m(y) - i;

    while (R < e && k < c + t * n) {
      k += f(R);
      R++;
    }

    R = Math.min(e - 1, R + n);
    return { startIndex: C, endIndex: R };
  }, [e, i, c, m, f, n, t]);

  const v = Ne(() => {
    if (e === 0) {
      return [];
    }
    const y = [];
    for (let S = p; S <= g; S++) {
      y.push({ index: S, key: r(S), start: m(S), size: f(S) });
    }
    return y;
  }, [p, g, r, m, f, e]);

  const _ = b(
    (y, S) => {
      if (!y) {
        return;
      }
      const C = r(S);
      const R = y.getBoundingClientRect().height;
      if (R <= 0) {
        return;
      }
      const k = l.current.get(C);

      if (k === undefined || Math.abs(k - R) > 2) {
        l.current.set(C, R);
        h.current.clear();
      }
    },
    [r]
  );

  const E = b(() => {
    if (s.current) {
      a(s.current.scrollTop);
    }
  }, []);

  const N = b(
    (y) => {
      if (s.current) {
        s.current.removeEventListener("scroll", E);
      }

      s.current = y;

      if (y) {
        u(y.clientHeight);
        a(y.scrollTop);
        y.addEventListener("scroll", E, { passive: true });
      }
    },
    [E]
  );

  V(() => {
    if (!s.current) {
      return;
    }
    const y = new ResizeObserver((S) => {
      for (const C of S) {
        u(C.contentRect.height);
      }
    });
    y.observe(s.current);

    return () => y.disconnect();
  }, []);

  V(
    () => () => {
      if (s.current) {
        s.current.removeEventListener("scroll", E);
      }
    },
    [E]
  );

  return { containerRef: N, virtualItems: v, totalSize: w, measureElement: _ };
}
const W0 = "OSYFbJTc";
const j0 = "BZs335wO";
const z0 = "uHfvgHkC";
const q0 = "_0mjuADLO";
const Y0 = "-irX9LBI";
const G0 = "PkENmhoL";
const X0 = "Ipy3h0nq";
const K0 = "_7EbOLXPm";
const Z0 = "qUnBivge";
const Q0 = "XcWtT84I";
const J0 = "I-b0vKPW";
const eg = "quGM4O7I";
const tg = "EO684LVX";

const Fe = {
  comments: W0,
  sortWrapper: j0,
  sortSelect: z0,
  commentsList: q0,
  commentItem: Y0,
  empty: G0,
  loading: X0,
  loadMoreSentinel: K0,
  virtualContainer: Z0,
  virtualContent: Q0,
  virtualItem: J0,
  loadMoreSpinner: eg,
  inputWrapper: tg,
};

const ng = 120;
function og({
  comments: e,
  hasMore: t,
  isLoadingMore: n,
  onLoadMore: r,
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
  onSubmitReply: w,
  onVoiceSend: p,
  onLoadReplies: g,
  onReport: v,
  onEdit: _,
  onDelete: E,
}) {
  const N = I(false);

  const {
    containerRef: y,
    virtualItems: S,
    totalSize: C,
    measureElement: R,
  } = V0({
    itemCount: e.length,
    estimatedItemHeight: ng,
    overscan: 3,
    getItemKey: (A) => e[A]?.id ?? A,
  });

  V(() => {
    if (!t || n || n || S.length === 0) {
      N.current = false;
      return;
    }
    const A = S[S.length - 1]?.index ?? 0;
    const T = e.length - 5;

    if (A >= T && !N.current) {
      N.current = true;
      r();
    }
  }, [S, e.length, t, n, r]);

  V(() => {
    if (!n) {
      N.current = false;
    }
  }, [n]);

  const k = b(
    (A, T) => {
      R(A, T);
    },
    [R]
  );
  return o("div", {
    ref: y,
    className: Fe.virtualContainer,
    "data-comments-scroll": true,
    children: [
      o("div", {
        className: Fe.virtualContent,
        style: { height: `${C}px` },
        children: S.map((A) => {
          const T = e[A.index];
          return T
            ? o(
                "div",
                {
                  ref: (O) => k(O, A.index),
                  className: Fe.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${A.start}px)`,
                  },
                  children: o(Js, {
                    comment: T,
                    onLike: () => u(T.id, T.reactions.myReaction),
                    onReaction: l,
                    onLikeReply: h,
                    onReactionReply: d,
                    replyingTo: s?.commentId === T.id ? s : null,
                    onStartReply: f,
                    onCancelReply: m,
                    onSubmitReply: w,
                    onVoiceSend: p,
                    onLoadReplies: g,
                    onReport: v,
                    onEdit: _,
                    onDelete: E,
                    isLoadingReplies: a === T.id,
                    flashingCommentId: i,
                    isWallOwner: c,
                  }),
                },
                A.key
              )
            : null;
        }),
      }),
      n &&
        o("div", {
          className: Fe.loadMoreSpinner,
          children: o(_t, { size: "sm" }),
        }),
    ],
  });
}
const rg = "DolcZKu1";
const sg = "_1lo2seB9";
const ig = "X0vaA15E";
const ag = "JmzJKMT2";
const cg = "p8fSWBtD";
const lg = "TvBLZ6Xz";
const ug = "ML3QZih-";
const dg = "F8sHrsZA";
const hg = "DicPhJTL";
const fg = "L6r5VJk9";
const mg = "lHdqCdp-";
const pg = "rfKDp2t8";

const Ve = {
  editCommentModal: rg,
  form: sg,
  header: ig,
  title: ag,
  content: cg,
  editor: lg,
  actions: ug,
  mediaButtons: dg,
  mediaButton: hg,
  submitGroup: fg,
  charCount: mg,
  error: pg,
};

const Ur = 2000; /* 2e3 */
function gg({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = Bn();

  const s = ue((y) => y.editComment);

  const i = Te((y) => y.profile);

  const a = at();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = Dn(t, n);

  const [f, m] = P(false);
  const w = Ur - c.length;
  const p = w < 0;
  const g = c !== t;
  const v = JSON.stringify(u) !== JSON.stringify(n);
  const _ = g || v;

  const E = b(
    (y) => {
      d(y.emoji);
    },
    [d]
  );

  const N = b(async () => {
    if (!(!c.trim() || p || p || !_ || p || !_ || f)) {
      m(true);
      try {
        await s(e, c, u);
        r();
      } catch (y) {
        console.error("Failed to update comment:", y);
      } finally {
        m(false);
      }
    }
  }, [c, u, p, _, f, s, e, r]);

  return o(vt, {
    frameless: true,
    onClose: r,
    className: Ve.editCommentModal,
    children: o("div", {
      className: Ve.form,
      children: [
        o("div", {
          className: Ve.header,
          children: o("span", {
            className: Ve.title,
            children: "Редактирование комментария",
          }),
        }),
        o("div", {
          className: Ve.content,
          children: [
            o(qe, { src: i?.avatar ?? "", size: "sm" }),
            o(Fn, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Комментарий...",
              maxLength: Ur,
              autoFocus: true,
              className: Ve.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        o("div", {
          className: Ve.actions,
          children: [
            o("div", {
              className: Ve.mediaButtons,
              children:
                !a &&
                o(Mo, { onEmojiSelect: E, buttonClassName: Ve.mediaButton }),
            }),
            o("div", {
              className: Ve.submitGroup,
              children: [
                p &&
                  o("span", {
                    className: `${Ve.charCount} ${Ve.error}`,
                    children: w,
                  }),
                o($e, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => r(),
                  children: "Отмена",
                }),
                o($e, {
                  size: "md",
                  disabled: !c.trim() || p || p || !_ || p || !_ || f,
                  onClick: N,
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
function vg({
  comments: e,
  isLoading: t,
  isLoadingMore: n,
  hasMore: r,
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
  const p = at() && f === "modal";
  const [g, v] = P(null);
  const [_, E] = P(null);
  const [N, y] = P(null);
  const [S, C] = P(null);
  const R = I(null);
  const { openModal: k } = Bn();

  const A = ue(($) => $.highlightedCommentId);

  const T = ue(($) => $.clearHighlightedComment);

  const O = ue(($) => $.loadReplies);

  const x = ue(($) => $.deleteComment);

  const z = ue(($) => $.toggleCommentReaction);

  V(() => {
    if (!r || n) {
      return;
    }

    const $ = new IntersectionObserver(
      (B) => {
        if (B[0].isIntersecting) {
          h();
        }
      },
      { rootMargin: "200px" }
    );

    const R_current = R.current;

    if (R_current) {
      $.observe(R_current);
    }

    return () => {
      if (R_current) {
        $.unobserve(R_current);
      }
    };
  }, [r, n, h]);

  V(() => {
    if (!A) {
      return;
    }
    const $ =
      document.querySelector("[data-comments-scroll]") ||
      document.querySelector("[data-comments-modal]");
    if ($) {
      $.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const B = document.querySelector("[data-comments-section]");

      if (B) {
        B.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    const L = window.setTimeout(() => {
      E(A);
      T();
      const B = window.setTimeout(() => {
        E(null);
      }, 600);
      return () => clearTimeout(B);
    }, 300);
    return () => clearTimeout(L);
  }, [A, T]);

  const ee = async ($, L, B) => {
    if (g) {
      await u(
        $,
        L,
        g.commentId,
        g.userId,
        { id: g.userId, username: g.username, displayName: g.displayName },
        B
      );

      v(null);
    }
  };

  const q = ($, L, B, D, Y) => {
    v({ commentId: $, username: L, displayName: B, userId: D, replyId: Y });
  };

  const ae = () => {
    v(null);
  };

  const ce = b(
    ($) => {
      for (const L of e) {
        const B = L.previewReplies?.find((D) => D.id === $);
        if (B) {
          z($, (B.reactions.myReaction === "love", "love"));
          return;
        }
      }
    },
    [e, z]
  );

  const K = b(
    ($, L) => {
      z($, L);
    },
    [z]
  );

  const te = b(
    async ($) => {
      y($);
      try {
        await O($);
      } finally {
        y(null);
      }
    },
    [O]
  );

  const U = b(($) => {
    C($);
  }, []);

  const W = b(
    ($) => {
      let L = "";
      let B = [];
      for (const D of e) {
        if (D.id === $) {
          L = D.text;
          B = D.spans ?? [];
          break;
        }
        const Y = D.previewReplies?.find((j) => j.id === $);
        if (Y) {
          L = Y.text;
          B = Y.spans ?? [];
          break;
        }
      }
      k(o(gg, { commentId: $, initialText: L, initialSpans: B }));
    },
    [e, k]
  );

  const Z = b(
    ($) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        x($);
      }
    },
    [x]
  );

  return o("div", {
    className: Fe.comments,
    children: [
      o("div", {
        className: Fe.sortWrapper,
        children: o("select", {
          value: s,
          onChange: ($) => i($.target.value),
          className: Fe.sortSelect,
          children: [
            o("option", { value: "new", children: "Новые" }),
            o("option", { value: "old", children: "Старые" }),
            o("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? o("div", { className: Fe.loading, children: o(_t, {}) })
        : e.length === 0
        ? o("div", { className: Fe.empty, children: "Нет комментариев" })
        : p
        ? o(og, {
            comments: e,
            hasMore: r,
            isLoadingMore: n,
            onLoadMore: h,
            replyingTo: g,
            flashingCommentId: _,
            loadingRepliesId: N,
            isWallOwner: d,
            onLikeComment: a,
            onReactionComment: c,
            onLikeReply: ce,
            onReactionReply: K,
            onStartReply: q,
            onCancelReply: ae,
            onSubmitReply: ee,
            onVoiceSend: l,
            onLoadReplies: te,
            onReport: U,
            onEdit: W,
            onDelete: Z,
          })
        : o("div", {
            className: Fe.commentsList,
            children: [
              e.map(($) =>
                o(
                  "div",
                  {
                    className: Fe.commentItem,
                    children: o(Js, {
                      comment: $,
                      onLike: () => a($.id, $.reactions.myReaction),
                      onReaction: c,
                      onLikeReply: ce,
                      onReactionReply: K,
                      replyingTo: g?.commentId === $.id ? g : null,
                      onStartReply: q,
                      onCancelReply: ae,
                      onSubmitReply: ee,
                      onVoiceSend: l,
                      onLoadReplies: te,
                      onReport: U,
                      onEdit: W,
                      onDelete: Z,
                      isLoadingReplies: N === $.id,
                      flashingCommentId: _,
                      isWallOwner: d,
                    }),
                  },
                  $.id
                )
              ),
              r &&
                o("div", {
                  ref: R,
                  className: Fe.loadMoreSentinel,
                  children: n && o(_t, { size: "sm" }),
                }),
            ],
          }),
      !m &&
        o("div", {
          className: Fe.inputWrapper,
          children: o(Qs, {
            onSubmit: ($, L, B) => u($, L, undefined, undefined, undefined, B),
            onVoiceSend: l,
          }),
        }),
      S &&
        o(Gs, { targetType: "comment", targetId: S, onClose: () => C(null) }),
    ],
  });
}
function _g(e) {
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
function On(e) {
  return e
    .filter(
      (t) =>
        t.type === "image" ||
        t.type === "video" ||
        (t.type === "media" && "media" in t)
    )
    .map((t) => (t.type === "media" && "media" in t ? t.media : t));
}
function wg(e) {
  return e.find((t) => t.type === "poll");
}
const yg = 300;
const Cg = 500;

const Ng = ds(
  ({
    post: t,
    variant: n = "feed",
    className: r,
    isOnOwnProfile: s = false,
    isPinned: i = false,
    isHighlighted: a = false,
    onEdit: c,
    onPin: u,
    onDelete: l,
  }) => {
    const h = n === "feed";
    const d = at();
    const { openModal: f, closeModal: m } = Bn();

    const w = ue((M) => M.deletePost);

    const p = ue((M) => M.updatePostReaction);

    const g = ue((M) => M.updatePollVote);

    const v = ue((M) => M.updatePollData);

    const _ = ue((M) => M.setCurrentPost);

    const E = ue((M) => M.posts.find((Q) => Q.id === t.id));

    const N = Te((M) => M.profile);

    const y = pt((M) =>
      h && N?.id !== t.author.id ? M.statuses[t.author.id] : undefined
    );

    const S = b(async () => {
      const M = t.author.id;
      pt.getState().setStatus(M, true);
      try {
        await go.followUser(M);
      } catch {
        pt.getState().setStatus(M, false);
      }
    }, [t.author.id]);

    const C = b(async () => {
      const M = t.author.id;
      pt.getState().setStatus(M, false);
      try {
        await go.unfollowUser(M);
      } catch {
        pt.getState().setStatus(M, true);
      }
    }, [t.author.id]);

    const R = b(() => {
      if (y !== undefined) {
        if (y) {
          f(
            o(Gh, {
              displayName: t.author.displayName,
              onConfirm: C,
              onClose: m,
            })
          );
        } else {
          S();
        }
      }
    }, [y, t.author.displayName, S, C, f, m]);

    const k = I(null);
    const A = I(null);
    const T = I(null);
    const [O, x] = P(yg);
    const [z, ee] = P(0);
    const q = z > O;
    V(
      () => () => {
        if (T.current) {
          cancelAnimationFrame(T.current);
          T.current = null;
        }
      },
      []
    );

    const ae = b(
      (M) => {
        if (M && h) {
          T.current && cancelAnimationFrame(T.current);

          T.current = requestAnimationFrame(() => {
            T.current = null;
            ee(M.scrollHeight);
          });
        }

        if (A) {
          A.current = M;
        }
      },
      [h]
    );

    const ce = b((M) => {
      M.stopPropagation();

      x((Q) => Q + Cg);
    }, []);

    Fa(t.id, k);
    const K = N?.id === t.author.id;
    const te = t.reactions.myReaction !== null;
    const U = t.reactions.total;

    const W = b(async () => {
      const M = t.reactions.myReaction !== null;
      const Q = M ? -1 : 1;
      p(t.id, M || "love", Q);
      try {
        if (M) {
          await Me.unlikePost(t.id);
        } else {
          await Me.likePost(t.id);
        }
      } catch (me) {
        p(t.id, M ? "love" : null, -Q);
        console.error("Failed to toggle like:", me);
      }
    }, [t.id, t.reactions.myReaction, p]);

    const Z = I(null);
    const $ = I(0);

    const L = b((M) => {
      Z.current = M.target;
    }, []);

    const B = b(() => {
      if (!te) {
        W();
      }
    }, [te, W]);

    const D = b(() => {
      _(E ?? t);
      const Q = t.author.username ?? t.author.id;
      $(`/@${Q}/post/${t.id}`);
    }, [t, E, _]);

    const Y = b(
      (M) => {
        const M_target = M.target;
        if (
          M_target.closest("button") ||
          M_target.closest("a") ||
          M_target.closest("a") ||
          M_target.closest("video") ||
          M_target.closest("a") ||
          M_target.closest("video") ||
          M_target.closest("img")
        ) {
          return;
        }
        if (d) {
          const Xe = Date.now();
          if (Xe - $.current < 300) {
            $.current = 0;
            B();
            return;
          }
          $.current = Xe;
          return;
        }
        if (Z.current !== M_target) {
          Z.current = null;
          return;
        }
        Z.current = null;
        const me = window.getSelection();

        if (!me || me.toString().length <= 0) {
          D();
        }
      },
      [d, B, D]
    );

    const j = b(
      (M) => {
        const Q = t.author.username ?? t.author.id;
        const me = `${window.location.origin}/@${Q}/post/${M}`;
        navigator.clipboard.writeText(me);
        Qe.success("Ссылка скопирована");
      },
      [t.author.username, t.author.id]
    );

    const X = b(
      (M) => {
        f(o(Gs, { targetType: "post", targetId: M, onClose: m }));
      },
      [f, m]
    );

    const oe = b(
      (M) => {
        f(
          o($h, {
            postId: t.id,
            initialText: t.text ?? "",
            initialSpans: t.spans ?? [],
          })
        );
      },
      [f, t.id, t.text, t.spans]
    );

    const ie = b(
      async (M) => {
        if (confirm("Вы уверены, что хотите удалить этот пост?")) {
          try {
            await w(M);
            l?.(M);
          } catch (Q) {
            console.error("Failed to delete post:", Q);
          }
        }
      },
      [w, l]
    );

    const fe = b(() => {
      if (d) {
        f(o(Wh, { postId: t.id, onClose: m }));
      } else {
        const M = t.author.username ?? t.author.id;
        $(`/@${M}/post/${t.id}`);
      }
    }, [t.author.username, t.author.id, t.id, d, f, m]);

    const re = b(() => {
      if (!K) {
        f(o(Rh, { post: t, onClose: m }));
      }
    }, [f, m, t, K]);

    const Ye = Ne(() => _g(t.author), [t.author]);

    const Ge = Ne(() => On(t.attachments), [t.attachments]);

    const Ee = Ne(() => wg(t.attachments), [t.attachments]);

    const lt = b(
      async (M) => {
        const Q = Ee?.myVote ?? null;
        g(t.id, M, Q);
        try {
          const me = await Me.votePoll(t.id, [M]);
          if (me) {
            v(t.id, me);
            return me;
          }
        } catch (me) {
          console.error("[Poll] Failed to vote:", me);

          if (Q) {
            g(t.id, Q, M);
          }
        }
        return null;
      },
      [t.id, Ee?.myVote, g, v]
    );

    const ve = b(
      async (M) => {
        try {
          const Q = await Me.votePoll(t.id, M);
          if (Q) {
            v(t.id, Q);
            return Q;
          }
        } catch (Q) {
          console.error("[Poll] Failed to vote multiple:", Q);
        }
        return null;
      },
      [t.id, v]
    );

    const J = o("div", {
      className: `${be.postInner} ${h ? be.isFeed : ""} ${r || ""}`,
      children: [
        h &&
          o("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            children: o(qe, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: y,
              onFollowBadgeClick: R,
            }),
          }),
        o("div", {
          className: be.postContent,
          children: [
            o(Gf, {
              author: Ye,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !h,
              isOnOwnProfile: s,
              isPinned: i,
              onReport: X,
              onEdit: c ?? oe,
              onDelete: ie,
              onPin: u,
              onCopyLink: j,
            }),
            o("div", {
              className: be.postBody,
              children: [
                t.text &&
                  o("div", {
                    className: be.textWrapper,
                    children: [
                      o("div", {
                        ref: ae,
                        className: `${be.text} ${q ? be.collapsed : ""}`,
                        style: h && q ? { maxHeight: `${O}px` } : undefined,
                        children: o(Xs, {
                          text: t.text,
                          spans: t.spans ?? [],
                        }),
                      }),
                      h &&
                        q &&
                        o("button", {
                          type: "button",
                          className: be.expandButton,
                          onClick: ce,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                Ge.length > 0 && o($o, { media: Ge, isFeed: h }),
                Ee &&
                  o(Pf, {
                    title: Ee.question,
                    options: Ee.options.map((M) => ({
                      id: M.id,
                      text: M.text,
                      votes: M.votes ?? 0,
                    })),
                    totalVotes: Ee.totalVotes ?? 0,
                    voted:
                      (Ee.myVotes ?? []).length > 0 ||
                      (Ee.myVote !== undefined && Ee.myVote !== null),
                    selectedOptionId: Ee.myVote,
                    selectedOptionIds: Ee.myVotes ?? [],
                    multipleChoice: Ee.multipleChoice ?? false,
                    onVote: lt,
                    onVoteMultiple: ve,
                    disabled: Ee.id.startsWith("temp-"),
                  }),
                t.originalPost && o(mp, { originalPost: t.originalPost }),
                o(Xm, {
                  liked: te,
                  reposted: false,
                  likesCount: U,
                  repostsCount: t.stats.reposts,
                  commentsCount: t.stats.comments,
                  viewsCount: t.stats.views,
                  dominantEmoji: t.dominantEmoji,
                  onLike: W,
                  onRepost: re,
                  onComment: fe,
                  disableRepost: K,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return h
      ? o("article", {
          ref: k,
          className: `${be.post} ${a ? "flash-highlight" : ""}`,
          onMouseDown: L,
          onClick: Y,
          children: J,
        })
      : o("div", { ref: k, children: J });
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

const Tg = "g6-1VZON";
const Eg = "lynW5Wa4";
const Rg = "T0fnHo-a";
const kg = "rjatUzSP";
const bg = "QJXel6jH";
const Sg = "M0L3TUQK";
const Ig = "uaNtVNYe";
const Pg = "h2cCDI2R";
const Ag = "I-2aZIQb";
const xg = "OiCpxOxo";
const Lg = "_68znS2mA";

const je = {
  container: Tg,
  clearAllButton: Eg,
  toastList: Rg,
  toast: kg,
  toastLeft: bg,
  toastData: Sg,
  title: Ig,
  message: Pg,
  dragging: Ag,
  closeButton: xg,
  belowTabs: Lg,
};

const Og = "InmPF5d0";
const Mg = "-yE9w2BE";
const $g = "-gCyC6KA";
const Dg = "YQDdKE40";
const Nn = { badge: Og, red: Mg, green: $g, blue: Dg };
function Ug({ type: e }) {
  const t =
    e === "like"
      ? Nn.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? Nn.green
      : Nn.blue;
  return o("div", {
    className: `${Nn.badge} ${t}`,
    children: [
      e === "follow" && o(Bs, { size: 12 }),
      ["wall_post", "reply"].includes(e) && o(Lo, { size: 12, filled: true }),
      e === "like" && o(Un, { size: 12, filled: true }),
      e === "repost" && o(An, { size: 12 }),
    ],
  });
}
const Bg = Vt(null);
function Fg({ children: e }) {
  const [t, n] = P([]);

  const r = b((c) => {
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

  const a = ba();

  V(() => {
    if (a) {
      const c = Wg(a.type);

      r({
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

      xo.setState({ lastSseToast: null });
    }
  }, [a, r]);

  return o(Bg.Provider, {
    value: { toasts: t, addToast: r, removeToast: s, clearAll: i },
    children: [e, o(Hg, { toasts: t, onRemove: s, onClearAll: i })],
  });
}
function Hg({ toasts: e, onRemove: t, onClearAll: n }) {
  const [r, s] = P(false);

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

  return o("div", {
    className: `${je.container} ${i ? je.belowTabs : ""}`,
    children: [
      o("div", {
        className: `${je.toastList} ${r ? je.clearing : ""}`,
        children: a.map((u, l) =>
          o(
            zg,
            {
              toast: u,
              onRemove: t,
              clearingDelay: r ? l * 50 : 0,
              isClearing: r,
            },
            u.id
          )
        ),
      }),
      e.length > 1 &&
        o($e, {
          className: je.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const Vg = 80;
function Wg(e) {
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
function jg(e) {
  const {
    apiType: t,
    entityId: n,
    parentEntityId: r,
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
      return r ? `/@${s}/post/${r}?comment=${n}` : `/@${s}/post/${n}`;
    }
  }
  return t && ["follow", "follow_request", "follow_accepted"].includes(t) && s
    ? `/@${s}`
    : i || "/notifications";
}
function zg({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: r = false,
}) {
  const s = I(null);
  const [i, a] = P(0);
  const [c, u] = P(false);
  const [l, h] = P(false);
  const d = I(0);
  const f = I(false);

  const m = (y) => {
    d.current = y.clientX;
    f.current = false;
    u(true);
  };

  const w = b(
    (y) => {
      if (!c) {
        return;
      }
      const S = y.clientX - d.current;

      if (Math.abs(S) > 5) {
        f.current = true;
      }

      a(S);
    },
    [c]
  );

  const p = b(() => {
    if (c) {
      u(false);

      if (Math.abs(i) > Vg) {
        h(true);
        a(i > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!f.current) {
          const y = jg(e);

          if (y) {
            $(y);
            t(e.id);
          }
        }
      }
    }
  }, [c, i, t, e]);

  V(() => {
    if (c) {
      document.addEventListener("mousemove", w);
      document.addEventListener("mouseup", p);

      return () => {
        document.removeEventListener("mousemove", w);
        document.removeEventListener("mouseup", p);
      };
    }
  }, [c, w, p]);

  const g = (y) => {
    d.current = y.touches[0].clientX;
    u(true);
  };

  const v = (y) => {
    if (!c) {
      return;
    }
    const S = y.touches[0].clientX - d.current;
    a(S);
  };

  const _ = () => {
    p();
  };

  const E = l || r ? 0 : Math.max(0, 1 - Math.abs(i) / 200);
  const N = r ? 400 : i;
  return o("div", {
    ref: s,
    className: `${je.toast} ${c ? je.dragging : ""}`,
    style: {
      transform: `translateX(${N}px)`,
      opacity: E,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: m,
    onTouchStart: g,
    onTouchMove: v,
    onTouchEnd: _,
    children: [
      o("div", {
        className: je.toastLeft,
        children: [
          o(qe, {
            src: e.actorAvatar || "",
            badge: o(Ug, { type: e.notificationType }),
          }),
          o("div", {
            className: je.toastData,
            children: [
              e.actorName &&
                o("div", {
                  className: je.title,
                  children: o(un, { name: e.actorName }),
                }),
              o("p", { className: je.message, children: e.message }),
            ],
          }),
        ],
      }),
      o("button", {
        className: je.closeButton,
        onClick: (y) => {
          y.stopPropagation();
          t(e.id);
        },
        onMouseDown: (y) => y.stopPropagation(),
        onTouchStart: (y) => y.stopPropagation(),
        children: o(nt, { size: 16 }),
      }),
    ],
  });
}
const qg = "Ud6qvRRd";
const Yg = "kzTK4YgB";
const Gg = "a7Cxtsok";
const Xg = "D1RDF-pF";
const Kg = "wPhOb3DB";
const Zg = "rrrryD13";
const Qg = "pO3FId5P";
const Jg = "Y-gzFyZu";
const ev = "Bnd7yPWS";
const tv = "vVObi6FX";
const nv = "erZ4kzKX";
const ov = "nyzroaD5";

const xt = {
  container: qg,
  toast: Yg,
  slideUp: Gg,
  leaving: Xg,
  fadeOut: Kg,
  info: Zg,
  icon: Qg,
  message: Jg,
  closeButton: ev,
  success: tv,
  warning: nv,
  error: ov,
};

const rv = { success: hc, error: ac, warning: pc, info: $s };
function sv({ id: e, type: t, message: n, onRemove: r }) {
  const [s, i] = P(false);
  const rv_t = rv[t];

  const c = b(() => {
    i(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return o("div", {
    className: `${xt.toast} ${xt[t]} ${s ? xt.leaving : ""}`,
    children: [
      o("span", { className: xt.icon, children: o(rv_t, { size: 20 }) }),
      o("span", { className: xt.message, children: n }),
      o("button", {
        className: xt.closeButton,
        onClick: c,
        children: o(nt, { size: 14 }),
      }),
    ],
  });
}
function iv() {
  const e = Bt((n) => n.toasts);

  const t = Bt((n) => n.removeToast);

  return (
    e.length === 0 ||
    o("div", {
      className: xt.container,
      children: e.map((n) =>
        o(sv, { id: n.id, type: n.type, message: n.message, onRemove: t }, n.id)
      ),
    })
  );
}
const av = "bDtnMOtP";
const cv = "NCty1Mw6";
const lv = "DPhGAlZS";
const uv = "Ea-iW9dx";
const Tn = { tabs: av, indicator: cv, button: lv, active: uv };
function dv({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: r,
  className: s = "",
}) {
  const [i, a] = P(t);
  const c = n !== undefined ? n : i;
  const [u, l] = P({});
  const h = I([]);
  const d = I(null);

  const f = b(() => {
    const g = h.current[c];
    if (g) {
      const g_parentElement = g.parentElement;
      const _ = g_parentElement
        ? parseFloat(getComputedStyle(g_parentElement).paddingLeft)
        : 0;
      l({
        width: g.offsetWidth,
        transform: `translateX(${g.offsetLeft - _}px)`,
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
    const v = new ResizeObserver(() => {
      f();
    });
    v.observe(d_current);

    return () => {
      v.disconnect();
    };
  }, [f]);

  const m = (g) => {
    if (n === undefined) {
      a(g);
    }

    r?.(g, e[g]);
  };

  const w = (g) => (typeof g == "string" ? g : g.label);

  const p = (g, v) => (typeof g == "string" ? `${v}` : g.id);

  return o("div", {
    ref: d,
    className: `${Tn.tabs} ${s}`,
    children: [
      o("div", { className: Tn.indicator, style: u }),
      e.map((g, v) =>
        o(
          "button",
          {
            ref: (_) => {
              h.current[v] = _;
            },
            onClick: () => m(v),
            className: `${Tn.button} ${c === v ? Tn.active : ""}`,
            children: w(g),
          },
          p(g, v)
        )
      ),
    ],
  });
}
function hv(e) {
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

  const [n, r] = P(t);

  V(() => {
    const s = () => r(t());
    window.addEventListener("resize", s);

    return () => window.removeEventListener("resize", s);
  }, [t]);

  return n;
}
function fv() {
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
function mv({ onClose: e, onPrev: t, onNext: n }) {
  V(() => {
    const r = (s) => {
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
    window.addEventListener("keydown", r, true);

    return () => window.removeEventListener("keydown", r, true);
  }, [e, t, n]);
}
function pv({ initialIndex: e, total: t }) {
  const [n, r] = P(e);
  const [s, i] = P(false);
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
            r(d);

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
    setCurrentIndex: r,
    isAnimating: s,
    setIsAnimating: i,
    cancelAnimation: c,
    goToIndex: u,
    goToPrev: l,
    goToNext: h,
  };
}
const to = 150;
const gv = 0.3;
function Br(e, t) {
  const n = e.clientX - t.clientX;
  const r = e.clientY - t.clientY;
  return Math.sqrt(n * n + r * r);
}
function vv({
  currentIndex: e,
  imagesCount: t,
  imageSizes: n,
  isMobile: r,
  isAnimating: s,
  setIsAnimating: i,
  cancelAnimation: a,
  onIndexChange: c,
  onClose: u,
}) {
  const [l, h] = P(0);
  const [d, f] = P(0);
  const [m, w] = P(false);
  const [p, g] = P(1);
  const [v, _] = P(null);
  const [E, N] = P(1);
  const [y, S] = P(0);
  const [C, R] = P(0);
  const [k, A] = P(false);
  const T = I(1);
  const O = I({ x: 0, y: 0 });
  const x = I(false);
  const z = I(false);
  const ee = I(0);
  const q = I(0);
  const ae = I(0);
  const ce = I(1);
  const K = I({ x: 0, y: 0 });
  const te = I({ x: 0, y: 0 });
  const U = I({ x: 0, y: 0 });
  const W = I(null);
  const Z = I(false);
  const $ = I(null);
  const L = I(null);
  const B = I(false);

  const D = b((J) => {
    T.current = J;
    N(J);
  }, []);

  const Y = b((J, M) => {
    O.current = { x: J, y: M };
    S(J);
    R(M);
  }, []);

  const j = b(() => {
    A(true);
    D(1);
    Y(0, 0);

    setTimeout(() => A(false), 300);
  }, [D, Y]);

  V(() => {
    T.current = 1;
    O.current = { x: 0, y: 0 };
    N(1);
    S(0);
    R(0);
    A(false);
  }, [e]);

  V(
    () => () => {
      if ($.current) {
        clearTimeout($.current);
        $.current = null;
      }
    },
    []
  );

  const X = b(
    (J) => {
      let M = J;

      if ((e === 0 && M > 0) || (e === t - 1 && M < 0)) {
        M *= gv;
      }

      return M;
    },
    [e, t]
  );

  const oe = b(
    () =>
      Math.abs(d) > to
        ? (u(r), true)
        : (i(true),
          f(0),
          g(1),
          ($.current = window.setTimeout(() => {
            $.current = null;
            i(false);
          }, 300)),
          false),
    [d, r, u, i]
  );

  const ie = b(
    (J) => {
      if (!r && t > 1) {
        if (t > 1) {
          a();
          $.current && (clearTimeout($.current), ($.current = null));
          L.current !== null && (c(L.current), (L.current = null));
          i(false);
          _(null);
          h(0);
          w(true);
          Z.current = false;
          U.current = { x: J.clientX, y: J.clientY };
          W.current = null;
          J.preventDefault();
        }
      }
    },
    [r, t, a, c, i]
  );

  const fe = b(
    (J) => {
      if (!m || r) {
        return;
      }
      const M = J.clientX - U.current.x;
      const Q = J.clientY - U.current.y;

      if (!W.current && (Math.abs(M) > 10 || Math.abs(Q) > 10)) {
        W.current = Math.abs(M) > Math.abs(Q) ? "x" : "y";
        Z.current = true;
      }

      if (W.current === "x") {
        h(X(M));
      } else if (W.current === "y") {
        f(Q);
        const me = Math.min(Math.abs(Q) / to, 1);
        g(1 - me * 0.5);
      }
    },
    [m, r, X]
  );

  const re = b(() => {
    if (!(!m || r)) {
      w(false);

      if (W.current === "x") {
        const M = L.current ?? e;
        let Q = M;

        if (l < -80 && M < t - 1) {
          Q = M + 1;
        } else if (l > 80 && M > 0) {
          Q = M - 1;
        }

        if (Q !== M) {
          const me = n[Q]?.width || 0;
          const Xe = n[M]?.width || 0;
          const jt = Q > M ? -Xe : me;
          i(true);
          _(Q);
          h(jt);
          L.current = Q;

          $.current = window.setTimeout(() => {
            $.current = null;
            i(false);
            _(null);
            h(0);
            L.current = null;
            c(Q);
          }, 500);
        } else {
          i(true);
          h(0);

          $.current = window.setTimeout(() => {
            $.current = null;
            i(false);
          }, 300);
        }
      } else {
        if (W.current === "y") {
          oe();
        }
      }

      W.current = null;
    }
  }, [m, r, e, l, t, n, oe, c, i]);

  const Ye = b(
    (J) => {
      if (!r) {
        return;
      }
      q.current = Math.max(q.current, J.touches.length);

      if (J.touches.length === 2) {
        x.current = true;
        z.current = true;
        ae.current = Br(J.touches[0], J.touches[1]);
        ce.current = T.current;
        w(false);
        W.current = null;
        h(0);
        f(0);
        g(1);
        A(false);
        return;
      }

      if (T.current > 1) {
        q.current = 1;
        K.current = { x: J.touches[0].clientX, y: J.touches[0].clientY };
        te.current = { ...O.current };
        w(true);
        Z.current = false;
        W.current = null;
        A(false);
        const J_target_1 = J.target;
        B.current =
          J_target_1.tagName === "IMG" &&
          J_target_1.hasAttribute("data-viewer-image");
        return;
      }
      q.current = 1;
      z.current = false;
      a();

      if ($.current) {
        clearTimeout($.current);
        $.current = null;
      }

      i(false);
      h(0);
      const J_target = J.target;
      B.current =
        J_target.tagName === "IMG" &&
        J_target.hasAttribute("data-viewer-image");
      U.current = { x: J.touches[0].clientX, y: J.touches[0].clientY };
      W.current = null;
      w(true);
    },
    [r, a, i]
  );

  const Ge = b(
    (J) => {
      if (!r) {
        return;
      }
      q.current = Math.max(q.current, J.touches.length);

      if (x.current && J.touches.length >= 2) {
        const me = Br(J.touches[0], J.touches[1]);
        const Xe = ce.current * (me / ae.current);
        D(Math.min(Math.max(Xe, 0.5), 5));
        return;
      }

      if (T.current > 1 && m && !x.current) {
        const me = J.touches[0].clientX - K.current.x;
        const Xe = J.touches[0].clientY - K.current.y;

        if (Math.abs(me) > 5 || Math.abs(Xe) > 5) {
          Z.current = true;
        }

        Y(te.current.x + me, te.current.y + Xe);
        return;
      }
      if (!m) {
        return;
      }
      const M = J.touches[0].clientX - U.current.x;
      const Q = J.touches[0].clientY - U.current.y;

      if (!W.current && (Math.abs(M) > 10 || Math.abs(Q) > 10)) {
        W.current = Math.abs(M) > Math.abs(Q) ? "x" : "y";
      }

      if (W.current === "x") {
        h(X(M));
      } else if (W.current === "y") {
        f(Q);
        const me = Math.min(Math.abs(Q) / to, 1);
        g(Math.round((1 - me * 0.7) * 100) / 100);
      }
    },
    [r, m, D, Y, X]
  );

  const Ee = b(() => {
    if (r) {
      if (x.current) {
        x.current = false;
        ee.current = Date.now();

        if (T.current < 1.1) {
          j();
        }

        return;
      }
      if (T.current > 1) {
        w(false);
        return;
      }
      if (q.current > 1 || z.current) {
        w(false);
        f(0);
        g(1);
        W.current = null;
        return;
      }
      if (Date.now() - ee.current < 300) {
        w(false);
        f(0);
        g(1);
        W.current = null;
        return;
      }
      if (m) {
        w(false);

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
          let M = e;

          if (l < -50 && e < t - 1) {
            M = e + 1;
          } else if (l > 50 && e > 0) {
            M = e - 1;
          }

          i(true);
          h(0);

          if (M !== e) {
            c(M);
          }

          $.current = window.setTimeout(() => {
            $.current = null;
            i(false);
          }, 500);
        } else {
          if (W.current === "y") {
            oe();
          }
        }
        W.current = null;
      }
    }
  }, [r, m, e, l, d, t, oe, c, u, i, j]);

  const lt = b(() => {
    const J = L.current ?? e;
    const M = n[J] || { width: 600, height: 400 };
    if (s && v !== null) {
      const Q = n[v] || M;
      return { width: Q.width, height: Q.height };
    }
    if (m && W.current === "x" && l !== 0) {
      const Q = l < 0 ? Math.min(J + 1, t - 1) : Math.max(J - 1, 0);
      if (Q === J) {
        return M;
      }
      const me = n[Q] || M;
      const Xe = M.width / 2 + me.width / 2;
      const jt = Math.min(Math.abs(l) / Xe, 1);
      return {
        width: M.width + (me.width - M.width) * jt,
        height: M.height + (me.height - M.height) * jt,
      };
    }
    return M;
  }, [n, e, s, v, m, l, t]);

  const ve = b(() => {
    i(true);
    f(window.innerHeight);
    g(0);
  }, [i]);

  return {
    offsetX: l,
    offsetY: d,
    isDragging: m,
    opacity: p,
    wasDragging: Z,
    displaySize: lt(),
    animateClose: ve,
    zoom: { scale: E, panX: y, panY: C, isAnimating: k },
    desktopHandlers: {
      onMouseDown: ie,
      onMouseMove: fe,
      onMouseUp: re,
      onMouseLeave: re,
    },
    mobileHandlers: { onTouchStart: Ye, onTouchMove: Ge, onTouchEnd: Ee },
  };
}
const _v = "CNP0fBGd";
const wv = "FxpoCP7s";
const yv = "qO26zEBn";
const Cv = "-iyRv-th";
const Nv = "liHkL9mP";
const Tv = "U70eja-G";
const Ev = "q1lrkTZi";
const Rv = "oxBkKER-";
const kv = "d4VkyUQq";
const bv = "UK-OMndz";
const Sv = "_2CH2oEyg";
const Iv = "gGVStb2K";
const Pv = "_7Ac4a5ul";
const Av = "ZyoB5yJC";
const xv = "DWdVTu-N";

const Le = {
  viewer: _v,
  closeButton: wv,
  counter: yv,
  windowContainer: Cv,
  track: Nv,
  slide: Tv,
  mobileContainer: Ev,
  mobileTrack: Rv,
  mobileSlide: kv,
  navArea: bv,
  navLeft: Sv,
  navRight: Iv,
  dots: Pv,
  dot: Av,
  active: xv,
};

function Lv({ onClick: e }) {
  return o("button", {
    className: Le.closeButton,
    onClick: e,
    children: o(nt, { size: 24 }),
  });
}
function Ov({ current: e, total: t }) {
  return (
    t <= 1 || o("div", { className: Le.counter, children: [e + 1, " / ", t] })
  );
}
function Mv({ currentIndex: e, total: t, onPrev: n, onNext: r }) {
  return (
    t <= 1 ||
    o(Re, {
      children: [
        o("button", {
          className: `${Le.navArea} ${Le.navLeft}`,
          onClick: n,
          disabled: e === 0,
          children: o(sc, { size: 24 }),
        }),
        o("button", {
          className: `${Le.navArea} ${Le.navRight}`,
          onClick: r,
          disabled: e === t - 1,
          children: o(ic, { size: 24 }),
        }),
      ],
    })
  );
}
function $v({ total: e, currentIndex: t, onDotClick: n }) {
  return (
    e <= 1 ||
    o("div", {
      className: Le.dots,
      children: Array.from({ length: e }, (r, s) =>
        o(
          "button",
          {
            className: `${Le.dot} ${s === t ? Le.active : ""}`,
            onClick: () => n(s),
          },
          s
        )
      ),
    })
  );
}
function Dv({
  images: e,
  imageSizes: t,
  currentIndex: n,
  offsetX: r,
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

  return o("div", {
    className: Le.windowContainer,
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
    children: o("div", {
      ref: l,
      className: Le.track,
      style: {
        transform: `translateX(${-h() + r}px)`,
        transition: i
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: e.map((d, f) =>
        o(
          "div",
          {
            className: Le.slide,
            onClick: u,
            children: o("img", {
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
function Uv({
  images: e,
  currentIndex: t,
  offsetX: n,
  offsetY: r,
  isAnimating: s,
  isClosing: i,
  handlers: a,
  onImageClick: c,
  zoom: u,
}) {
  return o("div", {
    className: Le.mobileContainer,
    style: {
      transform: `translateY(${r}px)`,
      transition: s
        ? `transform ${i ? "0.15s" : "0.3s"} cubic-bezier(0.32, 0.72, 0, 1)`
        : "none",
    },
    onTouchStart: a.onTouchStart,
    onTouchMove: a.onTouchMove,
    onTouchEnd: a.onTouchEnd,
    children: o("div", {
      className: Le.mobileTrack,
      style: {
        transform: `translateX(calc(-${t * 100}% + ${n}px))`,
        transition: s
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: e.map((l, h) =>
        o(
          "div",
          {
            className: Le.mobileSlide,
            onClick: c,
            children: o("img", {
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
function Bv({ images: e, initialIndex: t, onClose: n }) {
  const r = I(null);
  const s = at();
  const i = hv(e);
  const a = pv({ initialIndex: t, total: e.length });
  fv();

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

  const u = vv({
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

  mv({ onClose: c, onPrev: a.goToPrev, onNext: a.goToNext });

  const l = b(
    (d) => {
      if (u.wasDragging.current) {
        u.wasDragging.current = false;
        return;
      }

      if (d.target === r.current) {
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

  return wt(
    o("div", {
      ref: r,
      className: Le.viewer,
      style: {
        "--opacity": u.opacity,
        transition: a.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: l,
      children: [
        !s && o(Lv, { onClick: c }),
        o(Ov, { current: a.currentIndex, total: e.length }),
        !s &&
          o(Dv, {
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
          o(Uv, {
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
          o(Mv, {
            currentIndex: a.currentIndex,
            total: e.length,
            onPrev: a.goToPrev,
            onNext: a.goToNext,
          }),
        o($v, {
          total: e.length,
          currentIndex: a.currentIndex,
          onDotClick: a.goToIndex,
        }),
      ],
    }),
    document.body
  );
}
function Fv() {
  const { isOpen: e, images: t, initialIndex: n, close: r } = Ts();
  return e ? o(Bv, { images: t, initialIndex: n, onClose: r }) : null;
}
function Hv({ children: e, currentPath: t }) {
  const n = va();

  const r = Te((i) => i.initialize);

  V(() => {
    if (n === "idle") {
      r();
    }
  }, [n, r]);

  V(() => {
    if (n === "loading" || n === "idle") {
      return;
    }
    const i = vr.some((a) => t.startsWith(a));

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

  const s = vr.some((i) => t.startsWith(i));
  return n === "idle" || (n === "loading" && !s)
    ? null
    : n === "service_error"
    ? o(Vv, {})
    : n === "account_deleted"
    ? o(Wv, {})
    : o(Re, { children: e });
}
function Vv() {
  const e = Te((s) => s.initialize);

  const [t, n] = P(false);
  return o("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: o("div", {
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
        o("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Сервис недоступен",
        }),
        o("p", {
          style: {
            fontSize: "15px",
            color: "var(--text-secondary)",
            margin: 0,
            lineHeight: 1.5,
          },
          children:
            "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
        }),
        o("div", {
          style: { marginTop: "8px" },
          children: o($e, {
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
function Wv() {
  const e = Te((u) => u.canRestore);

  const t = Te((u) => u.restoreDeadline);

  const n = Te((u) => u.restoreAccount);

  const r = Te((u) => u.logout);

  const [s, i] = P(false);

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

  return o("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: o("div", {
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
        o("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Аккаунт удалён",
        }),
        s
          ? o("p", {
              style: {
                fontSize: "15px",
                color: "var(--text-secondary)",
                margin: 0,
              },
              children: "Восстановление аккаунта...",
            })
          : e
          ? o(Re, {
              children: [
                o("p", {
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
                o("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "8px",
                    width: "100%",
                  },
                  children: [
                    o($e, { onClick: c, children: "Восстановить аккаунт" }),
                    o("button", {
                      type: "button",
                      onClick: () => r(),
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
          : o(Re, {
              children: [
                o("p", {
                  style: {
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    margin: 0,
                  },
                  children: "Срок восстановления аккаунта истёк.",
                }),
                o("div", {
                  style: { marginTop: "8px" },
                  children: o($e, { onClick: () => r(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
function jv({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  gap: r = 0,
  getItemKey: s = (a) => a,
  initialMeasuredHeights: i,
}) {
  const [, a] = P(0);
  const c = I(typeof window !== "undefined" ? window.scrollY : 0);
  const u = I(i ?? new Map());
  const l = I(null);
  const h = I(null);
  const d = I(new Map());

  const f = (E) => u.current.get(E) ?? t;

  const m = (E) => {
    let N = 0;
    for (let y = 0; y < E; y++) {
      N += f(y) + r;
    }
    return N;
  };

  const w = () => {
    if (e === 0) {
      return 0;
    }
    let E = 0;
    for (let N = 0; N < e; N++) {
      E += f(N);
    }
    E += Math.max(0, e - 1) * r;
    return E;
  };

  const p = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const c_current = c.current;
    const window_innerHeight = window.innerHeight;
    let y = 0;
    let S = 0;
    for (let k = 0; k < e; k++) {
      const A = f(k) + r;
      if (S + A > c_current) {
        y = k;
        break;
      }
      S += A;
    }
    let C = y;
    let R = 0;
    for (
      let k = y;
      k < e && ((R += f(k) + r), (C = k), !(R >= window_innerHeight));
      k++
    ) {}
    return { start: Math.max(0, y - n), end: Math.min(e - 1, C + n) };
  };

  const g = () => {
    if (e === 0) {
      return [];
    }
    const { start: E, end: N } = p();
    const y = [];
    for (let S = E; S <= N; S++) {
      y.push({ index: S, key: s(S), start: m(S) });
    }
    return y;
  };

  if (!h.current) {
    h.current = new ResizeObserver((E) => {
      let N = false;
      for (const y of E) {
        const y_target = y.target;
        const C = d.current.get(y_target);
        if (C === undefined) {
          continue;
        }
        const R = y.contentRect.height;

        if (R > 0 && u.current.get(C) !== R) {
          u.current.set(C, R);
          N = true;
        }
      }

      if (N) {
        a((y) => y + 1);
      }
    });
  }

  const v = b((E, N) => {
    if (!E) {
      return;
    }
    d.current.set(E, N);
    h.current?.observe(E);
    const y = E.getBoundingClientRect().height;

    if (y > 0 && u.current.get(N) !== y) {
      u.current.set(N, y);
      a((S) => S + 1);
    }
  }, []);
  V(() => {
    const E = () => {
      if (!l.current) {
        l.current = requestAnimationFrame(() => {
          l.current = null;
          c.current = window.scrollY;

          a((N) => N + 1);
        });
      }
    };
    window.addEventListener("scroll", E, { passive: true });
    c.current = window.scrollY;

    a((N) => N + 1);

    return () => {
      window.removeEventListener("scroll", E);

      if (l.current) {
        cancelAnimationFrame(l.current);
      }

      h.current?.disconnect();
      d.current.clear();
    };
  }, []);
  const _ = b(() => new Map(u.current), []);
  return {
    virtualItems: g(),
    totalSize: w(),
    measureElement: v,
    getMeasuredHeights: _,
  };
}
const zv = "IWKvHh6o";
const qv = "B0hQs8NU";
const Yv = "q8F-aimP";
const Gv = "qkSaz-qE";

const En = {
  virtualFeed: zv,
  virtualContent: qv,
  virtualItem: Yv,
  loadingMore: Gv,
};

function Xv({
  posts: e,
  renderPost: t,
  isLoadingMore: n = false,
  hasMore: r = false,
  onLoadMore: s,
  estimatedPostHeight: i = 300,
  overscan: a = 5,
  gap: c = 10,
  initialMeasuredHeights: u,
  onMeasuredHeightsChange: l,
}) {
  const h = I(null);
  const d = I(false);
  const [f, m] = P(null);
  const [w, p] = P(window.innerWidth < 1174);

  const g = ue((k) => k.highlightedPostId);

  const v = ue((k) => k.clearHighlightedPost);

  V(() => {
    const k = () => p(window.innerWidth < 1174);
    window.addEventListener("resize", k);

    return () => window.removeEventListener("resize", k);
  }, []);
  const _ = w ? 0 : c;

  const E = b(
    (k) => {
      const e_k = e[k];
      if (!e_k) {
        return k;
      }
      const T = e_k.attachments?.[0]?.id ?? "";
      return `${e_k.id}-${T}`;
    },
    [e]
  );

  const {
    virtualItems: N,
    totalSize: y,
    measureElement: S,
    getMeasuredHeights: C,
  } = jv({
    itemCount: e.length,
    estimatedItemHeight: i,
    overscan: a,
    gap: _,
    getItemKey: E,
    initialMeasuredHeights: u,
  });

  V(
    () => () => {
      if (l) {
        l(C());
      }
    },
    [l, C]
  );

  V(() => {
    if (!g) {
      return;
    }
    h.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const k = setTimeout(() => {
      m(g);
      v();

      setTimeout(() => m(null), 600);
    }, 300);
    return () => clearTimeout(k);
  }, [g, v]);

  const R = b(() => {
    if (!s || !r || !r || n) {
      return;
    }
    const k =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (k < 500 && !d.current) {
      d.current = true;
      s();
    }

    if (k > 600) {
      d.current = false;
    }
  }, [s, r, n]);

  V(() => {
    if (!n) {
      d.current = false;
    }
  }, [n]);

  V(() => {
    window.addEventListener("scroll", R, { passive: true });

    return () => window.removeEventListener("scroll", R);
  }, [R]);

  return o("div", {
    ref: h,
    className: En.virtualFeed,
    children: [
      o("div", {
        className: En.virtualContent,
        style: { height: `${y}px` },
        children: N.map((k) => {
          const A = e[k.index];
          return A
            ? o(
                "div",
                {
                  ref: (T) => S(T, k.index),
                  className: En.virtualItem,
                  style: { transform: `translateY(${k.start}px)` },
                  children: t(A, k.index, A.id === f),
                },
                k.key
              )
            : null;
        }),
      }),
      n &&
        o("div", {
          className: En.loadingMore,
          children: o(_t, { size: "sm" }),
        }),
    ],
  });
}
const Kv = "qX9ObwT9";
const Zv = "QAdxKv6R";
const Qv = "nTcZk3Cv";
const Jv = "_5UYumbfd";
const Rn = { content: Kv, icon: Zv, text: Qv, button: Jv };
const Fr = "phone-verification-required";
function e_() {
  const [e, t] = P(false);

  const n = Te((s) => s.profile?.id ?? "");

  V(() => {
    const s = () => t(true);
    window.addEventListener(Fr, s);

    return () => window.removeEventListener(Fr, s);
  }, []);

  if (!e) {
    return null;
  }

  const r = `https://t.me/itd_verification_bot?start=${n}`;
  return o(vt, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: o("div", {
      className: Rn.content,
      children: [
        o("div", { className: Rn.icon, children: o(fc, { size: 48 }) }),
        o("p", {
          className: Rn.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        o("a", {
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          className: Rn.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
const t_ = "NoLqdGhZ";
const n_ = "ZJgdLwPI";
const o_ = "r9t-7AuI";
const no = { layout: t_, wrapper: n_, content: o_ };

const r_ = pe(() =>
  ge(
    () => import("./index-DyJ0p1L3.js"),
    __vite__mapDeps([2, 3, 4, 5, 6, 7, 8])
  ).then((e) => ({
    default: e.Aside,
  }))
);

const s_ = pe(() =>
  ge(
    () => import("./index-C6bGomjs.js"),
    __vite__mapDeps([9, 3, 6, 7, 10, 11, 12])
  ).then((e) => ({
    default: e.MobileNavigation,
  }))
);

const i_ = ["/login", "/register", "/forgot-password", "/verify-email"];

const a_ = [
  "/terms",
  "/privacy",
  "/cookies",
  "/external",
  "/careers",
  "/support",
  "/delete-account",
  "/child-safety",
];

const c_ = ({ children: e }) => {
  const t = at();
  const n = Ma();
  const [r, s] = P(window.location.pathname);
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
  const i = i_.includes(r);
  const a = a_.includes(r);
  return i
    ? o(Re, { children: e })
    : o(Oa.Provider, {
        value: { isHidden: n },
        children: o("div", {
          className: no.layout,
          children: o("div", {
            className: no.wrapper,
            children: [
              !a &&
                o(Ot, {
                  fallback: null,
                  children: t ? o(s_, {}) : o(r_, {}),
                }),
              !a && !t && o(Al, {}),
              o("div", { className: no.content, children: e }),
            ],
          }),
        }),
      });
};

const l_ = "bpf4GYjz";
const u_ = "crrL7XgI";
const d_ = "yhENW-7a";
const h_ = "_928LvLhD";
const f_ = "_6eF0w9KX";

const Xt = {
  page: l_,
  createPostWrapper: u_,
  tabsWrapper: d_,
  error: h_,
  empty: f_,
};

const m_ = (e) => {
  const t = ue((C) => C.posts);

  const n = ue((C) => C.activeFeed);

  const r = ue((C) => C.isLoading);

  const s = ue((C) => C.isLoadingMore);

  const i = ue((C) => C.hasMore);

  const a = ue((C) => C.error);

  const c = ue((C) => C.feedScrollPosition);

  const u = ue((C) => C.feedMeasuredHeights);

  const l = ue((C) => C.setActiveFeed);

  const h = ue((C) => C.fetchFeed);

  const d = ue((C) => C.loadMoreFeed);

  const f = ue((C) => C.createPost);

  const m = ue((C) => C.setFeedScrollPosition);

  const w = ue((C) => C.setFeedMeasuredHeights);

  const p = Te((C) => C.profile);

  const g = Te((C) => C.status);

  const v = I(false);

  const _ = Ne(() => t.map((C) => C.author.id), [t]);

  ma(_);

  V(() => {
    if (g === "authenticated" && t.length === 0 && !r) {
      h();
    }
  }, [n, g]);

  V(() => {
    if (t.length > 0 && c > 0 && !v.current) {
      v.current = true;

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

  const E = (C) => {
    const k = ["global", "clan", "following"][C] ?? "global";

    if (k !== n) {
      l(k);
    }
  };

  const N = async (C, R, k, A) => {
    if (p) {
      await f(p.id, C, R, k, A);
    }
  };

  const y = b(() => {
    if (i && !s) {
      d();
    }
  }, [i, s, d]);

  const S = b((C, R, k) => o(Ng, { post: C, isHighlighted: k }, C.id), []);

  return o("div", {
    className: Xt.page,
    children: [
      o("div", {
        className: Xt.tabsWrapper,
        children: o(dv, {
          tabs: ["Для вас", "Лента кланов", "Подписки"],
          activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
          onChange: E,
        }),
      }),
      o("div", {
        className: Xt.createPostWrapper,
        children: [
          p && o(qe, { src: p.avatar ?? "", alt: p.displayName, size: "sm" }),
          o($d, { onSubmit: N }),
        ],
      }),
      a
        ? o("div", {
            className: Xt.error,
            children: [
              o("p", { children: a }),
              o("button", { onClick: () => h(), children: "Повторить" }),
            ],
          })
        : r && t.length === 0
        ? o(_t, {})
        : t.length === 0
        ? o("div", { className: Xt.empty, children: "Нет постов" })
        : t.length > 0
        ? o(Xv, {
            posts: t,
            renderPost: S,
            isLoadingMore: s,
            hasMore: i,
            onLoadMore: y,
            estimatedPostHeight: 250,
            overscan: 3,
            initialMeasuredHeights: u,
            onMeasuredHeightsChange: w,
          })
        : null,
    ],
  });
};

const p_ = pe(() =>
  ge(
    () => import("./index-1TtwukMY.js"),
    __vite__mapDeps([13, 10, 11, 14, 6, 5, 15])
  ).then((e) => ({
    default: e.Profile,
  }))
);

const g_ = pe(() =>
  ge(() => import("./index-DquIbFwH.js"), __vite__mapDeps([16, 14, 17])).then(
    (e) => ({
      default: e.Notifications,
    })
  )
);

const v_ = pe(() =>
  ge(() => import("./index-DUtHTkGi.js"), __vite__mapDeps([18, 19])).then(
    (e) => ({
      default: e.About,
    })
  )
);

const ei = pe(() =>
  ge(() => import("./index-wE_Z0ADu.js"), []).then((e) => ({
    default: e.NotFound,
  }))
);

const __ = pe(() =>
  ge(() => import("./index-DtV7S2Sk.js"), __vite__mapDeps([20, 21])).then(
    (e) => ({
      default: e.PostPage,
    })
  )
);

const w_ = pe(() =>
  ge(
    () => import("./index-D9YlmVIC.js"),
    __vite__mapDeps([22, 23, 24, 25, 26, 4, 27, 28])
  ).then((e) => ({
    default: e.Login,
  }))
);

const y_ = pe(() =>
  ge(
    () => import("./index-CIjxrE7d.js"),
    __vite__mapDeps([29, 23, 24, 25, 26, 4, 27, 30])
  ).then((e) => ({
    default: e.Register,
  }))
);

const C_ = pe(() =>
  ge(
    () => import("./index-DsfFe6bP.js"),
    __vite__mapDeps([31, 23, 24, 4, 27, 32])
  ).then((e) => ({
    default: e.ForgotPassword,
  }))
);

const N_ = pe(() =>
  ge(
    () => import("./index-CCC34WVW.js"),
    __vite__mapDeps([33, 4, 27, 34])
  ).then((e) => ({
    default: e.ResetPassword,
  }))
);

const T_ = pe(() =>
  ge(() => import("./index-DMyoDINw.js"), []).then((e) => ({
    default: e.VerifyEmail,
  }))
);

const E_ = pe(() =>
  ge(() => import("./index-BP2V9oaq.js"), __vite__mapDeps([35, 36])).then(
    (e) => ({
      default: e.Terms,
    })
  )
);

const R_ = pe(() =>
  ge(() => import("./index-DKvZ6IE0.js"), __vite__mapDeps([37, 38])).then(
    (e) => ({
      default: e.Privacy,
    })
  )
);

const k_ = pe(() =>
  ge(() => import("./index-DwiIie5l.js"), __vite__mapDeps([39, 40])).then(
    (e) => ({
      default: e.Cookies,
    })
  )
);

const b_ = pe(() =>
  ge(() => import("./index-O8ItmUl2.js"), __vite__mapDeps([41, 42])).then(
    (e) => ({
      default: e.Onboarding,
    })
  )
);

const S_ = pe(() =>
  ge(() => import("./index-C1iNmIz-.js"), __vite__mapDeps([43, 7, 44])).then(
    (e) => ({
      default: e.Search,
    })
  )
);

const I_ = pe(() =>
  ge(() => import("./index-BIKMZ8GZ.js"), __vite__mapDeps([45, 46])).then(
    (e) => ({
      default: e.Hashtag,
    })
  )
);

const P_ = pe(() =>
  ge(() => import("./index-D7b93UOr.js"), __vite__mapDeps([47, 48])).then(
    (e) => ({
      default: e.ExternalLink,
    })
  )
);

const A_ = pe(() =>
  ge(() => import("./index-C3l5jGoH.js"), __vite__mapDeps([49, 50])).then(
    (e) => ({
      default: e.Support,
    })
  )
);

const x_ = pe(() =>
  ge(() => import("./index-DVoTZmuc.js"), __vite__mapDeps([51, 52])).then(
    (e) => ({
      default: e.DeleteAccount,
    })
  )
);

const L_ = pe(() =>
  ge(() => import("./index-M4_kOhzv.js"), __vite__mapDeps([53, 54])).then(
    (e) => ({
      default: e.ChildSafety,
    })
  )
);

const O_ = pe(() =>
  ge(() => import("./index-DjqRzw9u.js"), __vite__mapDeps([55, 56])).then(
    (e) => ({
      default: e.Event,
    })
  )
);

const M_ = pe(() =>
  ge(() => import("./index-8OsAPULX.js"), []).then((e) => ({
    default: e.Verification,
  }))
);

const $_ = pe(() =>
  ge(() => import("./index-BHEssFy1.js"), __vite__mapDeps([57, 58])).then(
    (e) => ({
      default: e.SubscriptionTerms,
    })
  )
);

const D_ = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return o(ei, {});
  }
  const t = e.slice(1);
  return o(p_, { username: t });
};

function U_() {
  const [e, t] = P(window.location.pathname);
  return o(Fg, {
    children: o(Ll, {
      children: o(Hv, {
        currentPath: e,
        children: [
          o(Fv, {}),
          o(iv, {}),
          o(e_, {}),
          o(c_, {
            children: o(Ot, {
              fallback: null,
              children: o(Ns, {
                onChange: (r) => {
                  const s = e;
                  t(r.url);

                  if (r.url !== "/" && r.url !== s) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  o(m_, { path: "/" }),
                  o(g_, { path: "/notifications" }),
                  o(v_, { path: "/about" }),
                  o(w_, { path: "/login" }),
                  o(y_, { path: "/register" }),
                  o(C_, { path: "/forgot-password" }),
                  o(N_, { path: "/reset-password" }),
                  o(T_, { path: "/verify-email" }),
                  o(E_, { path: "/terms" }),
                  o(R_, { path: "/privacy" }),
                  o(k_, { path: "/cookies" }),
                  o(b_, { path: "/onboarding" }),
                  o(S_, { path: "/search" }),
                  o(I_, { path: "/hashtag/:name" }),
                  o(P_, { path: "/external" }),
                  o(A_, { path: "/support" }),
                  o(x_, { path: "/delete-account" }),
                  o(L_, { path: "/child-safety" }),
                  o(O_, { path: "/event" }),
                  o(M_, { path: "/verification" }),
                  o($_, { path: "/subscription-terms" }),
                  o(__, { path: "/:username/post/:postId" }),
                  o(D_, { path: "/:slug" }),
                  o(ei, { default: true }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
Oi(document.getElementById("root")).render(o(ws, { children: o(U_, {}) }));
export {
  $ as $,
  I as A,
  $e as B,
  Wi as C,
  hs as D,
  Fs as E,
  Eo as F,
  pe as G,
  Me as H,
  nt as I,
  ue as J,
  B_ as K,
  Gh as L,
  vt as M,
  dv as N,
  $d as O,
  Ot as P,
  Ng as Q,
  Gs as R,
  _t as S,
  Ne as T,
  un as U,
  Xv as V,
  F_ as W,
  Ls as X,
  Lo as Y,
  Un as Z,
  ge as __1,
  ft as a,
  An as a0,
  Pr as a1,
  Sn as a2,
  sc as a3,
  vg as a4,
  Qs as a5,
  he as a6,
  wt as a7,
  yu as a8,
  F as a9,
  H as aa,
  Ao as ab,
  $s as ac,
  H_ as ad,
  Sa as ae,
  Fr as af,
  gc as ag,
  Ds as ah,
  Ui as ai,
  Te as b,
  Bn as c,
  P as d,
  qe as e,
  rc as f,
  at as g,
  Ji as h,
  Se as i,
  xo as j,
  Re as k,
  lc as l,
  Dt as m,
  Ks as n,
  Us as o,
  fn as p,
  b as q,
  mc as r,
  go as s,
  Qe as t,
  o as u,
  Os as v,
  ks as w,
  kl as x,
  V as y,
  Bs as z,
};
