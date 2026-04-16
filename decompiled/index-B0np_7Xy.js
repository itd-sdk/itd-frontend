const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-pz8oiQ7d.js",
      "assets/index-B4RuP_wh.js",
      "assets/IconBrand-_ck_iX4k.js",
      "assets/IconLogout-D34Yxsdj.js",
      "assets/IconPerson-nMf-t5_m.js",
      "assets/IconSearch-DmEa3nwv.js",
      "assets/index-CJYNM-sN.css",
      "assets/index-BM8iO1l6.js",
      "assets/index-DQOcM_ic.js",
      "assets/index-qvMlUIY0.css",
      "assets/index-Bxf28ACg.css",
      "assets/index-Bc_AiJGP.js",
      "assets/IconCheck-CnMsoHfq.js",
      "assets/index-DwpO2NTg.css",
      "assets/index-CcNv37oZ.js",
      "assets/index-ysVQEOk1.css",
      "assets/index-DKjpp1_f.js",
      "assets/index-DIXM3pTD.css",
      "assets/index-C3U1SnoF.js",
      "assets/index-DhZR2sBI.js",
      "assets/index-DK1lyy5c.css",
      "assets/index-DJbn-CQN.js",
      "assets/index-Cmj9rins.css",
      "assets/IconEyeOff-Bueeui0k.js",
      "assets/index-2ed4UA7H.css",
      "assets/index-BfWq9Ywd.js",
      "assets/index-BkV84Ei0.css",
      "assets/index-xTPIdMnL.js",
      "assets/index-BuSB1rTU.css",
      "assets/index-hltsc4x1.js",
      "assets/index-AyR1xSDo.css",
      "assets/index-Dj0LLtmi.js",
      "assets/index-BYDms0MW.css",
      "assets/index-BuHqu7gU.js",
      "assets/index-DYMxdUD-.css",
      "assets/index-BtBxGP5F.js",
      "assets/index-BfSyWtIY.css",
      "assets/index-No2Z3lAb.js",
      "assets/index-Tfl7NUeb.css",
      "assets/index-BLX0B4s_.js",
      "assets/index-DxopF78T.css",
      "assets/index-D2FtJbVY.js",
      "assets/index-sgOc3eJB.css",
      "assets/index-BO9r1GH_.js",
      "assets/index-CYFMj30R.css",
      "assets/index-CwjYDTJW.js",
      "assets/index-m8m8PtY3.css",
      "assets/index-DvhIGpPm.js",
      "assets/index-DlXH7sLZ.css",
      "assets/index-gV_KRAwC.js",
      "assets/index-DcwPAf74.css",
      "assets/index-DHU-hRHK.js",
      "assets/index-cSZoRzaS.css",
      "assets/index-C9XKmywQ.js",
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
let dn;
let ne;
let rs;
let $t;
let Ko;
let ss;
let is;
let as;
let Ao;
let go;
let vo;
let cs;
const cn = {};
const ls = [];
const _i = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function at(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Lo(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function ct(e, t, n) {
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
    a.children = arguments.length > 3 ? dn.call(arguments, 2) : n;
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (i in e.defaultProps) {
      if (a[i] === undefined) {
        a[i] = e.defaultProps[i];
      }
    }
  }

  return rn(e, a, r, s, null);
}
function rn(e, t, n, r, s) {
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
    __v: s ?? ++rs,
    __i: -1,
    __u: 0,
  };

  if (s == null && ne.vnode != null) {
    ne.vnode(i);
  }

  return i;
}
function wi() {
  return { current: null };
}
function Ee(e) {
  return e.children;
}

class Qe {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  setState(e, t) {
    let n;

    n =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = at({}, this.state));

    if (typeof e == "function") {
      e = e(at({}, n), this.props);
    }

    if (e) {
      at(n, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      _o(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      this.__e = true;
      e && this.__h.push(e);
      _o(this);
    }
  }
}

function zt(e, t) {
  if (t == null) {
    return e.__ ? zt(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? zt(e) : null;
}
function us(e) {
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

    return us(e);
  }
}
function _o(e) {
  if (
    (!e.__d && (e.__d = true) && $t.push(e) && !Un.__r++) ||
    Ko != ne.debounceRendering
  ) {
    ((Ko = ne.debounceRendering) || ss)(Un);
  }
}
function Un() {
  let e;
  let t;
  let n;
  let r;
  let s;
  let i;
  let a;
  let c = 1;

  while ($t.length) {
    if ($t.length > c) {
      $t.sort(is);
    }

    e = $t.shift();
    c = $t.length;

    if (e.__d) {
      n = undefined;
      r = undefined;
      s = (r = (t = e).__v).__e;
      i = [];
      a = [];

      t.__P &&
        (((n = at({}, r)).__v = r.__v + 1),
        ne.vnode && ne.vnode(n),
        Oo(
          t.__P,
          n,
          r,
          t.__n,
          t.__P.namespaceURI,
          32 & r.__u ? [s] : null,
          i,
          s ?? zt(r),
          !!(32 & r.__u),
          a
        ),
        (n.__v = r.__v),
        (n.__.__k[n.__i] = n),
        fs(i, n, a),
        (r.__e = r.__ = null),
        n.__e != s && us(n));
    }
  }

  Un.__r = 0;
}
function ds(e, t, n, r, s, i, a, c, u, l, h) {
  let d;
  let f;
  let m;
  let y;
  let p;
  let v;
  let _;
  const g = (r && r.__k) || ls;
  const t_length = t.length;
  u = yi(n, t, g, u, t_length);

  for (d = 0; d < t_length; d++) {
    if ((m = n.__k[d]) != null) {
      f = m.__i == -1 ? cn : g[m.__i] || cn;
      m.__i = d;
      v = Oo(e, m, f, s, i, a, c, u, l, h);
      y = m.__e;

      m.ref &&
        f.ref != m.ref &&
        (f.ref && Mo(f.ref, null, m), h.push(m.ref, m.__c || y, m));

      p == null && y != null && (p = y);

      (_ = !!(4 & m.__u)) || f.__k === m.__k
        ? (u = hs(m, u, e, _))
        : typeof m.type == "function" && v !== undefined
        ? (u = v)
        : y && (u = y.nextSibling);

      m.__u &= -7;
    }
  }

  n.__e = p;
  return u;
}
function yi(e, t, n, r, s) {
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
        ? (a = e.__k[i] = rn(null, a, null, null, null))
        : Array_isArray(a)
        ? (a = e.__k[i] = rn(Ee, { children: a }, null, null, null))
        : a.constructor === undefined && a.__b > 0
        ? (a = e.__k[i] =
            rn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
        : (e.__k[i] = a);

      u = i + f;
      a.__ = e;
      a.__b = e.__b + 1;
      c = null;
      (l = a.__i = Ci(a, n, u, d)) != -1 && (d--, (c = n[l]) && (c.__u |= 2));

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
        c.__e == r && (r = zt(c));
        ps(c, c);
      }
    }
  }
  return r;
}
function hs(e, t, n, r) {
  let s;
  let i;
  if (typeof e.type == "function") {
    s = e.__k;

    for (i = 0; s && i < s.length; i++) {
      if (s[i]) {
        s[i].__ = e;
        t = hs(s[i], t, n, r);
      }
    }

    return t;
  }

  if (e.__e != t) {
    r &&
      (t && e.type && !t.parentNode && (t = zt(e)),
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
function Ci(e, t, n, r) {
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
function Jo(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    e[t] = n == null ? "" : typeof n != "number" || _i.test(t) ? n : `${n}px`;
  }
}
function vn(e, t, n, r, s) {
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
            Jo(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!r || n[t] != r[t]) {
            Jo(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    i = t != (t = t.replace(as, "$1"));
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
        n.u = Ao;
        e.addEventListener(t, i ? vo : go, i);
      }
    } else {
      e.removeEventListener(t, i ? vo : go, i);
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
function Qo(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t.t == null) {
        t.t = Ao++;
      } else if (t.t < n.u) {
        return;
      }
      return n(ne.event ? ne.event(t) : t);
    }
  };
}
function Oo(e, t, n, r, s, i, a, c, u, l) {
  let h;
  let d;
  let f;
  let m;
  let y;
  let p;
  let v;
  let _;
  let g;
  let w;
  let E;
  let C;
  let b;
  let N;
  let k;
  let T;
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
      _ = t.props;
      g = "prototype" in t_type && t_type.prototype.render;
      w = (h = t_type.contextType) && r[h.__c];
      E = h ? (w ? w.props.value : h.__) : r;

      if (n.__c) {
        v = (d = t.__c = n.__c).__ = d.__E;
      } else {
        g
          ? (t.__c = d = new t_type(_, E))
          : ((t.__c = d = new Qe(_, E)),
            (d.constructor = t_type),
            (d.render = Ni));

        w && w.sub(d);
        d.state || (d.state = {});
        d.__n = r;
        f = d.__d = true;
        d.__h = [];
        d._sb = [];
      }

      if (g && d.__s == null) {
        d.__s = d.state;
      }

      if (g && t_type.getDerivedStateFromProps != null) {
        d.__s == d.state && (d.__s = at({}, d.__s));
        at(d.__s, t_type.getDerivedStateFromProps(_, d.__s));
      }

      m = d.props;
      y = d.state;
      d.__v = t;

      if (f) {
        if (
          g &&
          t_type.getDerivedStateFromProps == null &&
          d.componentWillMount != null
        ) {
          d.componentWillMount();
        }

        if (g && d.componentDidMount != null) {
          d.__h.push(d.componentDidMount);
        }
      } else {
        if (
          g &&
          t_type.getDerivedStateFromProps == null &&
          _ !== m &&
          d.componentWillReceiveProps != null
        ) {
          d.componentWillReceiveProps(_, E);
        }

        if (
          t.__v == n.__v ||
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(_, d.__s, E) === false)
        ) {
          if (t.__v != n.__v) {
            d.props = _;
            d.state = d.__s;
            d.__d = false;
          }

          t.__e = n.__e;
          t.__k = n.__k;

          t.__k.some((D) => {
            if (D) {
              D.__ = t;
            }
          });

          for (C = 0; C < d._sb.length; C++) {
            d.__h.push(d._sb[C]);
          }

          d._sb = [];

          if (d.__h.length) {
            a.push(d);
          }

          break e;
        }

        if (d.componentWillUpdate != null) {
          d.componentWillUpdate(_, d.__s, E);
        }

        if (g && d.componentDidUpdate != null) {
          d.__h.push(() => {
            d.componentDidUpdate(m, y, p);
          });
        }
      }

      d.context = E;
      d.props = _;
      d.__P = e;
      d.__e = false;
      b = ne.__r;
      N = 0;

      if (g) {
        d.state = d.__s;
        d.__d = false;

        if (b) {
          b(t);
        }

        h = d.render(d.props, d.state, d.context);

        for (k = 0; k < d._sb.length; k++) {
          d.__h.push(d._sb[k]);
        }

        d._sb = [];
      } else {
        do {
          d.__d = false;

          if (b) {
            b(t);
          }

          h = d.render(d.props, d.state, d.context);
          d.state = d.__s;
        } while (d.__d && ++N < 25);
      }

      d.state = d.__s;

      if (d.getChildContext != null) {
        r = at(at({}, r), d.getChildContext());
      }

      if (g && !f && d.getSnapshotBeforeUpdate != null) {
        p = d.getSnapshotBeforeUpdate(m, y);
      }

      T = h;

      if (h != null && h.type === Ee && h.key == null) {
        T = ms(h.props.children);
      }

      c = ds(e, Array_isArray(T) ? T : [T], t, n, r, s, i, a, c, u, l);
      d.base = t.__e;
      t.__u &= -161;

      if (d.__h.length) {
        a.push(d);
      }

      if (v) {
        d.__E = d.__ = null;
      }
    } catch (D) {
      t.__v = null;

      if (u || i != null) {
        if (D.then) {
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
            Lo(i[A]);
          }
          wo(t);
        }
      } else {
        t.__e = n.__e;
        t.__k = n.__k;

        if (!D.then) {
          wo(t);
        }
      }

      ne.__e(D, t, n);
    }
  } else {
    if (i == null && t.__v == n.__v) {
      t.__k = n.__k;
      t.__e = n.__e;
    } else {
      c = t.__e = Ti(n.__e, t, n, r, s, i, a, u, l);
    }
  }

  if ((h = ne.diffed)) {
    h(t);
  }

  return 128 & t.__u || c;
}
function wo(e) {
  if (e && e.__c) {
    e.__c.__e = true;
  }

  if (e && e.__k) {
    e.__k.forEach(wo);
  }
}
function fs(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    Mo(n[r], n[++r], n[++r]);
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
function ms(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : Array_isArray(e)
    ? e.map(ms)
    : at({}, e);
}
function Ti(e, t, n, r, s, i, a, c, u) {
  let l;
  let h;
  let d;
  let f;
  let m;
  let y;
  let p;
  let v = n.props || cn;

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
    if (v !== props && (!c || e.data != props)) {
      e.data = props;
    }
  } else {
    i = i && dn.call(e.childNodes);

    if (!c && i != null) {
      v = {};

      for (l = 0; l < e.attributes.length; l++) {
        v[(m = e.attributes[l]).name] = m.value;
      }
    }

    for (l in v) {
      m = v[l];

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
          vn(e, l, null, m, s);
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
          p = m;
          break;
        default:
          vn(e, l, m, v[l], s);
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

      ds(
        t.type == "template" ? e.content : e,
        Array_isArray(f) ? f : [f],
        t,
        n,
        r,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
        i,
        a,
        i ? i[0] : n.__k && zt(n, 0),
        c,
        u
      );

      if (i != null) {
        for (l = i.length; l--; ) {
          Lo(i[l]);
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
            (type == "option" && y != v[l])) &&
          vn(e, l, y, v[l], s);

      l = "checked";
      p != null && p != e[l] && vn(e, l, p, v[l], s);
    }
  }
  return e;
}
function Mo(e, t, n) {
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
function ps(e, t, n) {
  let r;
  let s;

  if (ne.unmount) {
    ne.unmount(e);
  }

  if ((r = e.ref)) {
    if (!r.current || r.current == e.__e) {
      Mo(r, null, t);
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
        ps(r[s], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    Lo(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function Ni(e, t, n) {
  return this.constructor(e, n);
}
function ln(e, t, n) {
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

  Oo(
    t,
    (e = ((!r && n) || t).__k = ct(Ee, null, [e])),
    s || cn,
    cn,
    t.namespaceURI,
    !r && n ? [n] : s ? null : t.firstChild ? dn.call(t.childNodes) : null,
    i,
    !r && n ? n : s ? s.__e : t.firstChild,
    r,
    a
  );

  fs(i, e, a);
}
function gs(e, t) {
  ln(e, t, gs);
}
function vs(e, t, n) {
  let r;
  let s;
  let i;
  let a;
  const c = at({}, e.props);

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
    c.children = arguments.length > 3 ? dn.call(arguments, 2) : n;
  }

  return rn(e.type, c, r || e.key, s || e.ref, null);
}
function Gt(e) {
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
            _o(a);
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
  t.__c = `__cC${cs++}`;
  t.__ = e;
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, r) => n.children(r)).contextType = t;

  return t;
}
dn = ls.slice;

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

rs = 0;

Qe.prototype.render = Ee;
$t = [];

ss =
  typeof Promise == "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout;

is = (e, t) => e.__v.__b - t.__v.__b;

Un.__r = 0;
as = /(PointerCapture)$|Capture$/i;
Ao = 0;
go = Qo(false);
vo = Qo(true);
cs = 0;
let ki = 0;
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
    __v: --ki,
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
let bt;
let we;
let Zn;
let er;
let qt = 0;
const _s = [];
const Te = ne;

const { __b, __r, diffed, __c, unmount, __: __1 } = Te;

function Xt(e, t) {
  if (Te.__h) {
    Te.__h(we, e, qt || t);
  }

  qt = 0;
  const n = we.__H || (we.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function x(e) {
  qt = 1;
  return $o(Cs, e);
}
function $o(e, t, n) {
  const r = Xt(bt++, 2);
  r.t = e;

  if (
    !r.__c &&
    ((r.__ = [
      n ? n(t) : Cs(undefined, t),
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
function U(e, t) {
  const n = Xt(bt++, 3);

  if (!Te.__s && Bo(n.__H, t)) {
    n.__ = e;
    n.u = t;
    we.__H.__h.push(n);
  }
}
function fn(e, t) {
  const n = Xt(bt++, 4);

  if (!Te.__s && Bo(n.__H, t)) {
    n.__ = e;
    n.u = t;
    we.__h.push(n);
  }
}
function R(e) {
  qt = 5;

  return Ne(
    () => ({
      current: e,
    }),
    []
  );
}
function Do(e, t, n) {
  qt = 6;

  fn(
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
  const n = Xt(bt++, 7);

  if (Bo(n.__H, t)) {
    n.__ = e();
    n.__H = t;
    n.__h = e;
  }

  return n.__;
}
function S(e, t) {
  qt = 8;

  return Ne(() => e, t);
}
function jn(e) {
  const t = we.context[e.__c];
  const n = Xt(bt++, 9);
  n.c = e;
  return t ? (n.__ == null && ((n.__ = true), t.sub(we)), t.props.value) : e.__;
}
function ws(e, t) {
  if (Te.useDebugValue) {
    Te.useDebugValue(t ? t(e) : e);
  }
}
function ys() {
  const e = Xt(bt++, 11);
  if (!e.__) {
    for (var t = we.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function Ei() {
  for (let e; (e = _s.shift()); ) {
    if (e.__P && e.__H) {
      try {
        e.__H.__h.forEach(Ln);
        e.__H.__h.forEach(yo);
        e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [];
        Te.__e(t, e.__v);
      }
    }
  }
}

Te.__b = (e) => {
  we = null;

  if (__b) {
    __b(e);
  }
};

Te.__ = (e, t) => {
  if (e && t.__k && t.__k.__m) {
    e.__m = t.__k.__m;
  }

  if (__1) {
    __1(e, t);
  }
};

Te.__r = (e) => {
  if (__r) {
    __r(e);
  }

  bt = 0;
  const t = (we = e.__c).__H;

  if (t) {
    if (Zn === we) {
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
      t.__h.forEach(Ln);
      t.__h.forEach(yo);
      t.__h = [];
      bt = 0;
    }
  }

  Zn = we;
};

Te.diffed = (e) => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c && e_c.__H) {
    e_c.__H.__h.length &&
      ((_s.push(e_c) !== 1 && er === Te.requestAnimationFrame) ||
        ((er = Te.requestAnimationFrame) || bi)(Ei));

    e_c.__H.__.forEach((n) => {
      if (n.u) {
        n.__H = n.u;
      }

      n.u = undefined;
    });
  }

  Zn = null;
  we = null;
};

Te.__c = (e, t) => {
  t.some((n) => {
    try {
      n.__h.forEach(Ln);

      n.__h = n.__h.filter((r) => !r.__ || yo(r));
    } catch (r) {
      t.some((s) => {
        if (s.__h) {
          s.__h = [];
        }
      });

      t = [];
      Te.__e(r, n.__v);
    }
  });

  if (__c) {
    __c(e, t);
  }
};

Te.unmount = (e) => {
  if (unmount) {
    unmount(e);
  }

  let t;
  const e_c = e.__c;

  if (e_c && e_c.__H) {
    e_c.__H.__.forEach((r) => {
      try {
        Ln(r);
      } catch (s) {
        t = s;
      }
    });

    e_c.__H = undefined;
    t && Te.__e(t, e_c.__v);
  }
};

const ar = typeof requestAnimationFrame == "function";
function bi(e) {
  let t;

  const n = () => {
    clearTimeout(r);

    if (ar) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var r = setTimeout(n, 35);

  if (ar) {
    t = requestAnimationFrame(n);
  }
}
function Ln(e) {
  const t = we;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    e.__c = undefined;
    e_c();
  }

  we = t;
}
function yo(e) {
  const t = we;
  e.__c = e.__();
  we = t;
}
function Bo(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    e.length !== t.length ||
    t.some((n, r) => n !== e[r])
  );
}
function Cs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ts(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Co(e, t) {
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
function Ns(e, t) {
  const n = t();
  const r = x({ t: { __: n, u: t } });
  const s = r[0].t;
  const [, i] = r;

  fn(() => {
    s.__ = n;
    s.u = t;

    if (Kn(s)) {
      i({ t: s });
    }
  }, [e, n, t]);

  U(() => {
    if (Kn(s)) {
      i({ t: s });
    }

    return e(() => {
      if (Kn(s)) {
        i({ t: s });
      }
    });
  }, [e]);

  return n;
}
function Kn(e) {
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
function ks(e) {
  e();
}
function Es(e) {
  return e;
}
function bs() {
  return [false, ks];
}
const Ss = fn;

class To {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  shouldComponentUpdate(e, t) {
    return Co(this.props, e) || Co(this.state, t);
  }
}

function mn(e, t) {
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

    return Co(this.props, s);
  }
  function r(s) {
    this.shouldComponentUpdate = n;
    return ct(e, s);
  }
  r.displayName = `Memo(${e.displayName || e.name})`;
  r.prototype.isReactComponent = true;
  r.__f = true;
  r.type = e;
  return r;
}
(To.prototype = new Qe()).isPureReactComponent = true;

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
const Si =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.forward_ref")) ||
  3911;
function Rs(e) {
  class t {
    constructor(n) {
      const r = Ts({}, n);
      delete r.ref;
      return e(r, n.ref || null);
    }

    static componentWillUnmount() {
      ln(null, t.v);
      t.v = null;
      t.h = null;
    }
  }

  t.$$typeof = Si;
  t.render = e;
  t.prototype.isReactComponent = true;
  t.__f = true;
  t.displayName = `ForwardRef(${e.displayName || e.name})`;
  return t;
}

const lr = (e, t) => e == null || et(et(e).map(t));

const Ri = {
  map: lr,
  forEach: lr,
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
function Is(e, t, n) {
  if (e) {
    e.__c &&
      e.__c.__H &&
      (e.__c.__H.__.forEach((r) => {
        if (typeof r.__c == "function") {
          r.__c();
        }
      }),
      (e.__c.__H = null));

    (e = Ts({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    e.__k = e.__k && e.__k.map((r) => Is(r, t, n));
  }

  return e;
}
function Ps(e, t, n) {
  if (e && n) {
    e.__v = null;

    e.__k = e.__k && e.__k.map((r) => Ps(r, t, n));

    e.__c &&
      e.__c.__P === t &&
      (e.__e && n.appendChild(e.__e), (e.__c.__e = true), (e.__c.__P = n));
  }

  return e;
}

class Bt {
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
        this.__v.__k[0] = Is(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    const s = t.__a && ct(Ee, null, e.fallback);

    if (s) {
      s.__u &= -33;
    }

    return [ct(Ee, null, t.__a || e.children), s];
  }
}

function xs(e) {
  const t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function ve(e) {
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
    return s ? ct(s, a) : null;
  }
  i.displayName = "Lazy";
  i.__f = true;
  return i;
}

class en {
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

(Bt.prototype = new Qe()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    r.o = [];
  }

  r.o.push(t_c);
  const s = xs(r.__v);

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
        r.__v.__k[0] = Ps(u, u.__c.__P, u.__c.__O);
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

const dr = (e, t, n) => {
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
function Pi(e) {
  this.getChildContext = () => e.context;

  return e.children;
}
function xi(e) {
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

  ln(ct(Pi, { context: t.context }, e.__v), t.v);
}
function lt(e, t) {
  const n = ct(xi, { __v: e, h: t });
  n.containerInfo = t;
  return n;
}

(en.prototype = new Qe()).__a = function (e) {
  const t = this;
  const n = xs(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return (s) => {
    const i = () => {
      if (t.props.revealOrder) {
        r.push(s);
        dr(t, e, r);
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

en.prototype.componentDidUpdate = en.prototype.componentDidMount = function () {
  const e = this;
  this.l.forEach((t, n) => {
    dr(e, n, t);
  });
};

const As =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.element")) ||
  60103;

const Ai =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const Li = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const Oi = /[A-Z0-9]/g;
const Mi = typeof document !== "undefined";

const $i = (e) =>
  (typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
  ).test(e);

function Ls(e, t, n) {
  if (t.__k == null) {
    t.textContent = "";
  }

  ln(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function Di(e, t, n) {
  gs(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
Qe.prototype.isReactComponent = {};

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach((e) => {
  Object.defineProperty(Qe.prototype, e, {
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

function Bi() {}
function Ui() {
  return this.cancelBubble;
}
function Fi() {
  return this.defaultPrevented;
}
ne.event = (e) => {
  if (event) {
    e = event(e);
  }

  e.persist = Bi;
  e.isPropagationStopped = Ui;
  e.isDefaultPrevented = Fi;
  e.nativeEvent = e;
  return e.nativeEvent;
};
let Uo;

const Hi = {
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
            (Mi && a === "children" && type === "noscript") ||
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
              $i(props.type)
            ) {
              if (u === "onfocus") {
                a = "onfocusin";
              } else if (u === "onblur") {
                a = "onfocusout";
              } else if (Li.test(a)) {
                a = u;
              }
            } else {
              u = a = "oninput";
            }
          } else if (i && Ai.test(a)) {
            a = a.replace(Oi, "-$&").toLowerCase();
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
        Object.defineProperty(s, "className", Hi);
      } else if (
        (props.className && !props.class) ||
        (props.class && props.className)
      ) {
        s.class = s.className = props.className;
      }

      t.props = s;
    })(e);
  }

  e.$$typeof = As;

  if (vnode) {
    vnode(e);
  }
};
ne.__r = (e) => {
  if (_r_1) {
    _r_1(e);
  }

  Uo = e.__c;
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

  Uo = null;
};
const Vi = {
  ReactCurrentDispatcher: {
    current: {
      readContext(e) {
        return Uo.__n[e.__c].props.value;
      },
      useCallback: S,
      useContext: jn,
      useDebugValue: ws,
      useDeferredValue: Es,
      useEffect: U,
      useId: ys,
      useImperativeHandle: Do,
      useInsertionEffect: Ss,
      useLayoutEffect: fn,
      useMemo: Ne,
      useReducer: $o,
      useRef: R,
      useState: x,
      useSyncExternalStore: Ns,
      useTransition: bs,
    },
  },
};
function Wi(e) {
  return ct.bind(null, e);
}
function zn(e) {
  return !!e && e.$$typeof === As;
}
function ji(e) {
  return zn(e) && e.type === Ee;
}
function zi(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function qi(e) {
  return zn(e) ? vs(...arguments) : e;
}
function Os(e) {
  return !!e.__k && (ln(null, e), true);
}
function Gi(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const Xi = (e, t) => e(t);

const Yi = (e, t) => e(t);

const Ms = Ee;
const Zi = zn;

const tn = {
  useState: x,
  useId: ys,
  useReducer: $o,
  useEffect: U,
  useLayoutEffect: fn,
  useInsertionEffect: Ss,
  useTransition: bs,
  useDeferredValue: Es,
  useSyncExternalStore: Ns,
  startTransition: ks,
  useRef: R,
  useImperativeHandle: Do,
  useMemo: Ne,
  useCallback: S,
  useContext: jn,
  useDebugValue: ws,
  version: "18.3.1",
  Children: Ri,
  render: Ls,
  hydrate: Di,
  unmountComponentAtNode: Os,
  createPortal: lt,
  createElement: ct,
  createContext: Gt,
  createFactory: Wi,
  cloneElement: qi,
  createRef: wi,
  Fragment: Ee,
  isValidElement: zn,
  isElement: Zi,
  isFragment: ji,
  isMemo: zi,
  findDOMNode: Gi,
  Component: Qe,
  PureComponent: To,
  memo: mn,
  forwardRef: Rs,
  flushSync: Yi,
  unstable_batchedUpdates: Xi,
  StrictMode: Ms,
  Suspense: Bt,
  SuspenseList: en,
  lazy: ve,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Vi,
};

function Ki(e) {
  return {
    render(t) {
      Ls(t, e);
    },
    unmount() {
      Os(e);
    },
  };
}
const Ji = "modulepreload";

const Qi = (e) => `/${e}`;

const gr = {};

const de = (t, n, r) => {
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
        l = Qi(l);

        if (l in gr) {
          return;
        }

        gr[l] = true;
        const h = l.endsWith(".css");
        const d = h ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${d}`)) {
          return;
        }
        const f = document.createElement("link");
        f.rel = h ? "stylesheet" : Ji;

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

const ea = {};
function _n(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function ta(e, t, n) {
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
  e = No(e.replace(s, ""));
  t = No(t || "");
  for (let h = Math.max(e.length, t.length), d = 0; d < h; d++) {
    if (t[d] && t[d].charAt(0) === ":") {
      const f = t[d].replace(/(^:|[+*?]+$)/g, "");
      const m = (t[d].match(/[+*?]+$/) || ea)[0] || "";
      const y = ~m.indexOf("+");
      const p = ~m.indexOf("*");
      const v = e[d] || "";
      if (!v && !p && (!m.includes("?") || y)) {
        r = false;
        break;
      }
      a[f] = decodeURIComponent(v);

      if (y || p) {
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
function na(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function oa(e, t) {
  e.index = t;

  e.rank = ((n) => (n.props.default ? 0 : No(n.props.path).map(ra).join("")))(
    e
  );

  return e.props;
}
function No(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function ra(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const sa = {};
const Ut = [];
const sn = [];
let We = null;
const Fo = { url: Ho() };
const $s = Gt(Fo);
function ia() {
  const e = jn($s);
  if (e === Fo) {
    const t = x()[1];
    U(() => {
      sn.push(t);

      return () => sn.splice(sn.indexOf(t), 1);
    }, []);
  }
  return [e, $];
}
function Ho() {
  let e;
  return `${
    (e =
      We && We.location
        ? We.location
        : We && We.getCurrentLocation
        ? We.getCurrentLocation()
        : typeof location !== "undefined"
        ? location
        : sa).pathname || ""
  }${e.search || ""}`;
}

export function $(e, t = false) {
  if (typeof e != "string" && e.url) {
    t = e.replace;
    e = e.url;
  }

  if (
    ((n) => {
      for (let r = Ut.length; r--; ) {
        if (Ut[r].canRoute(n)) {
          return true;
        }
      }
      return false;
    })(e)
  ) {
    ((n, r = "push") => {
      if (We && We[r]) {
        We[r](n);
      } else if (typeof history !== "undefined" && history[`${r}State`]) {
        history[`${r}State`](null, null, n);
      }
    })(e, t ? "replace" : "push");
  }

  return Ds(e);
}

function Ds(e) {
  let t = false;
  for (let n = 0; n < Ut.length; n++) {
    if (Ut[n].routeTo(e)) {
      t = true;
    }
  }
  return t;
}
function aa(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return $(t);
    }
  }
}
function ca(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function la(e) {
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
        if (aa(e_target)) {
          return ca(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function Bs(e) {
  if (e.history) {
    We = e.history;
  }

  this.state = { url: e.url || Ho() };
}
_n((Bs.prototype = new Qe()), {
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

    if (!vr) {
      vr = true;

      We ||
        addEventListener("popstate", () => {
          Ds(Ho());
        });

      addEventListener("click", la);
    }

    Ut.push(this);

    if (We) {
      this.u = We.listen((t) => {
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

    Ut.splice(Ut.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(oa).sort(na);

    for (const r of e) {
      const s = ta(t, r.props.path, r.props);
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
      r = vs(
        c[0],
        _n(_n({ url: t_url, matches: (n = c[1]) }, n), {
          key: undefined,
          ref: undefined,
        })
      );
    }

    if (t_url !== (a && a.url)) {
      _n(
        Fo,
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
      for (let u = sn.length; u--; ) {
        sn[u]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return ct($s.Provider, { value: a }, r);
  },
});

const _r = (e) => {
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

const ua = (e) => (e ? _r(e) : _r);

const da = (e) => e;

function ha(e, t = da) {
  const n = tn.useSyncExternalStore(
    e.subscribe,
    tn.useCallback(() => t(e.getState()), [e, t]),
    tn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  tn.useDebugValue(n);
  return n;
}

const wr = (e) => {
  const t = ua(e);

  const n = (r) => ha(t, r);

  Object.assign(n, t);
  return n;
};

const ot = (e) => (e ? wr(e) : wr);

function Vo(e, t) {
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

const ko = (e) => (t) => {
  try {
    const n = e(t);
    return n instanceof Promise
      ? n
      : {
          then(r) {
            return ko(r)(n);
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
        return ko(r)(n);
      },
    };
  }
};

const Wo = (e, t) => (n, r, s) => {
  let i = {
    storage: Vo(() => localStorage),
    partialize: (p) => p,
    version: 0,
    merge: (p, v) => ({
      ...v,
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
  s.setState = (p, v) => {
    s_setState(p, v);
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
  const y = () => {
    let v;
    if (!i_storage) {
      return;
    }
    a = false;

    c.forEach((g) => {
      let w;
      return g((w = r()) != null ? w : f);
    });

    const _ =
      (v = i.onRehydrateStorage) == null ||
      v.call(i, (p = r()) != null ? p : f) ||
      v.call(i, (p = r()) != null ? p : f) ||
      undefined;
    return ko(i_storage.getItem.bind(i_storage))(i.name)
      .then((g) => {
        if (g) {
          if (typeof g.version == "number" && g.version !== i.version) {
            if (i.migrate) {
              const w = i.migrate(g.state, g.version);
              return w instanceof Promise
                ? w.then((E) => [true, E])
                : [true, w];
            }
            console.error(
              "State loaded from storage couldn't be migrated since no migrate function was provided"
            );
          } else {
            return [false, g.state];
          }
        }
        return [false, undefined];
      })
      .then((g) => {
        let w;
        const [E, C] = g;
        m = i.merge(C, (w = r()) != null ? w : f);
        n(m, true);

        if (E) {
          return h();
        }
      })
      .then(() => {
        _?.(m, undefined);
        m = r();
        a = true;

        u.forEach((g) => g(m));
      })
      .catch((g) => {
        _?.(undefined, g);
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
    rehydrate: () => y(),
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
    y();
  }

  return m || f;
};

const ma = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const pa = () => {
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

const On = (e) => {
  const t = e === "system" ? ma() : e;
  document.documentElement.setAttribute("data-theme", t);
};

const ga = ot()(
  Wo(
    (e) => ({
      theme: pa(),

      setTheme: (t) => {
        On(t);
        e({ theme: t });
      },

      toggleTheme: () =>
        e((t) => {
          const n = t.theme === "light" ? "dark" : "light";
          On(n);
          return { theme: n };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (e) => {
        if (e?.theme) {
          On(e.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (ga.getState().theme === "system") {
        On("system");
      }
    });
}

const Us = ot((e) => ({
  isOpen: false,
  images: [],
  initialIndex: 0,
  open: (t, n = 0) => e({ isOpen: true, images: t, initialIndex: n }),
  close: () => e({ isOpen: false, images: [], initialIndex: 0 }),
}));

const Fe = {
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

function Ie(e) {
  return (
    e instanceof Error && "status" in e && "code" in e && e.name === "ApiError"
  );
}
const fe = {
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
function va(e) {
  return "accessToken" in e;
}
function _a(e) {
  return "accessToken" in e;
}
const wa = 4000; /* 4e3 */

const Wt = ot((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const s = n.duration ?? wa;

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

const Je = {
  success: (e, t) =>
    Wt.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) =>
    Wt.getState().addToast({ type: "error", message: e, duration: t }),
  warning: (e, t) =>
    Wt.getState().addToast({ type: "warning", message: e, duration: t }),
  info: (e, t) =>
    Wt.getState().addToast({ type: "info", message: e, duration: t }),
};

function ya() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    t = crypto.randomUUID();
    localStorage.setItem(e, t);
  }

  return t;
}
const yr = ya();
class Fs {
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
    if (t.status !== Fe.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        Je.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      Je.error(t.message || "Произошла ошибка");
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

    n.set("X-Device-Id", yr);
    return n;
  }
  async handleResponse(t) {
    if (t.status === Fe.NO_CONTENT) {
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
      case Fe.BAD_REQUEST: {
        return fe.BAD_REQUEST;
      }
      case Fe.UNAUTHORIZED: {
        return fe.UNAUTHORIZED;
      }
      case Fe.FORBIDDEN: {
        return fe.ACCESS_DENIED;
      }
      case Fe.NOT_FOUND: {
        return fe.ENTITY_NOT_FOUND;
      }
      case Fe.CONFLICT: {
        return fe.ENTITY_ALREADY_EXISTS;
      }
      case Fe.UNPROCESSABLE_ENTITY: {
        return fe.VALIDATION_ERROR;
      }
      case Fe.TOO_MANY_REQUESTS: {
        return fe.RATE_LIMIT_EXCEEDED;
      }
      default: {
        return fe.UNKNOWN_ERROR;
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
      if (d.status === Fe.UNAUTHORIZED && !i && !f && this.accessToken) {
        const m = await this.refreshAccessToken();
        if (m) {
          this.setAccessToken(m);
          return this.executeRequest(t, n, r, s, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Fe.UNAUTHORIZED,
          "Session expired",
          fe.UNAUTHORIZED
        );
      }
      return await this.handleResponse(d);
    } catch (d) {
      clearTimeout(h);

      if (d instanceof Error) {
        if (d.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", fe.TIMEOUT);

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
          fe.NETWORK_ERROR
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
        ? this.createApiError(0, "Request timeout", fe.TIMEOUT)
        : this.createApiError(0, "Network error", fe.NETWORK_ERROR);
    }
  }
  async uploadFormData(t, n, r, s = false) {
    const i = this.buildUrl(t);
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": yr };

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

      if (h.status === Fe.UNAUTHORIZED && !s && this.accessToken) {
        const d = await this.refreshAccessToken();
        if (d) {
          this.setAccessToken(d);
          return this.uploadFormData(t, n, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Fe.UNAUTHORIZED,
          "Session expired",
          fe.UNAUTHORIZED
        );
      }

      return await this.handleResponse(h);
    } catch (h) {
      clearTimeout(l);

      if (h instanceof Error) {
        if (h.name === "AbortError") {
          const f = this.createApiError(0, "Request timeout", fe.TIMEOUT);

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
          fe.NETWORK_ERROR
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
const B = new Fs({ baseURL: "/api", timeout: 30000 /* 3e4 */ });
const Pe = new Fs({ baseURL: "/api/v1/auth", timeout: 30000 /* 3e4 */ });

const F = {
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

const pt = {
  async register(e) {
    return await Pe.post(F.auth.signUp, e);
  },
  async login(e) {
    return await Pe.post(F.auth.signIn, e);
  },
  async verifyOtp(e) {
    return await Pe.post(F.auth.verifyOtp, e);
  },
  async resendOtp(e) {
    await Pe.post(F.auth.resendOtp, e);
  },
  async refreshSession() {
    return await Pe.post(F.auth.refresh);
  },
  async logout() {
    await Pe.post(F.auth.logout);
  },
  async logoutAll() {
    await Pe.post(`${F.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await Pe.post(F.auth.forgotPassword, e);
  },
  async resetPassword(e) {
    await Pe.post(F.auth.resetPassword, e);
  },
  async changePassword(e) {
    await Pe.post(F.auth.changePassword, e);
  },
};

class jo {
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
function Cr(e) {
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
const At = new jo(100, 300 * 1000 /* 1e3 */);
const Ca = 60 * 1000; /* 1e3 */
setInterval(() => At.cleanup(), 120 * 1000 /* 1e3 */);
const wn = {
  async checkUsername(e) {
    return (
      await B.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await B.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await B.get(F.users.me);
    return Cr(e);
  },
  async updateProfile(e) {
    return await B.put(F.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = At.get(t);

    if (n && At.isFresh(t, Ca)) {
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
    const n = await B.get(F.users.profile(e));
    const r = Cr(n);
    At.set(t, r);
    return r;
  },
  invalidateProfileCache(e) {
    At.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const r = At.get(n);

    if (r) {
      At.set(n, { ...r, ...t });
    }
  },
  async followUser(e) {
    await B.post(F.users.follow(e), {});
  },
  async unfollowUser(e) {
    await B.delete(F.users.follow(e));
  },
  async pinPost(e) {
    await B.post(F.posts.pin(e));
  },
  async unpinPost(e) {
    await B.delete(F.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await B.get(F.users.privacy);
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

    await B.put(F.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await B.get(F.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await B.post(F.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await B.get(F.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await B.put(F.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await B.delete(F.users.setPin);
  },
  async deleteAccount() {
    await B.delete(F.users.deleteAccount);
  },
  async restoreAccount() {
    await B.post(F.users.restoreAccount);
  },
};
function Yt(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const gt = new jo(50, 300 * 1000 /* 1e3 */);
const Ta = 60 * 1000; /* 1e3 */
setInterval(() => gt.cleanup(), 120 * 1000 /* 1e3 */);
function Na(e) {
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
function Lt(e) {
  const n = (e.attachments ?? []).map((l) => {
    if (l.type === "poll") {
      const h = l;

      const d = h.options.map((f) => ({
        id: f.id,
        text: f.text,
        votes: f.votesCount ?? f.voteCount ?? f.votes ?? 0,
      }));

      return {
        ...l,
        options: d,
        totalVotes: h.totalVotes ?? 0,
        multipleChoice: h.multipleChoice ?? false,
        myVotes: h.votedOptionIds?.length
          ? h.votedOptionIds
          : e.viewerStatus?.pollVote
          ? [e.viewerStatus.pollVote]
          : [],
        myVote: h.votedOptionIds?.[0] ?? e.viewerStatus?.pollVote ?? null,
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
    author: Na(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: u,
    spans: e.spans ?? [],
    attachments: n,
    reactions: { total: r, myReaction: c },
    stats: { views: s, comments: i, reposts: a },
    originalPost: e.originalPost ? Lt(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const $e = {
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
    const s = `${F.posts.list}${r ? `?${r}` : ""}`;
    const i = await B.get(s);
    return { data: i.data.posts.map(Lt), nextCursor: Yt(i.data) };
  },
  async getPost(e) {
    const t = await B.get(F.posts.single(e));
    return Lt(t.data);
  },
  async getUserWall(e, t = {}) {
    if (!t.cursor) {
      const n = e;
      const r = gt.get(n);
      const s = r && r.pinnedPostId === (t.pinnedPostId ?? null);

      if (r && s && gt.isFresh(n, Ta)) {
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

    gt.set(n, {
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
    const s = `${F.posts.byUser(e)}${r ? `?${r}` : ""}`;
    const i = await B.get(s);
    return { data: i.data.posts.map(Lt), nextCursor: Yt(i.data) };
  },
  invalidateWallCache(e) {
    gt.delete(e);
  },
  updatePostInWallCache(e, t, n) {
    const r = gt.get(e);
    if (r) {
      const s = r.posts.map((i) => (i.id === t ? { ...i, ...n } : i));
      gt.set(e, { ...r, posts: s });
    }
  },
  removePostFromWallCache(e, t) {
    const n = gt.get(e);
    if (n) {
      const r = n.posts.filter((s) => s.id !== t);
      gt.set(e, { ...n, posts: r });
    }
  },
  async likePost(e) {
    await B.post(F.posts.like(e));
  },
  async unlikePost(e) {
    await B.delete(F.posts.like(e));
  },
  async createPost(e) {
    return await B.post(F.posts.create, {
      content: e.text,
      spans: e.spans,
      wallRecipientId: e.wallOwnerId,
      attachmentIds: e.attachmentIds,
      poll: e.poll,
    });
  },
  async createRepost(e, t) {
    return await B.post(F.posts.repost(e), { content: t });
  },
  async editPost(e, t) {
    const n = t.content ?? t.text;
    await B.put(F.posts.update(e), { content: n, spans: t.spans });
  },
  async deletePost(e) {
    await B.delete(F.posts.delete(e));
  },
  async restorePost(e) {
    await B.post(F.posts.restore(e));
  },
  async trackView(e) {
    B.post(F.posts.view(e)).catch(() => {});
  },
  async trackViewsBatch(e) {
    if (e.length !== 0) {
      for (const t of e) {
        B.post(F.posts.view(t)).catch(() => {});
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
    const s = `${F.posts.byUser(e)}${r ? `?${r}` : ""}`;
    const i = await B.get(s);
    return { data: i.data.posts.map(Lt), nextCursor: Yt(i.data) };
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
    const s = `${F.posts.likedByUser(e)}${r ? `?${r}` : ""}`;
    const i = await B.get(s);
    return { data: i.data.posts.map(Lt), nextCursor: Yt(i.data) };
  },
  async pinPost(e) {
    await B.post(F.posts.pin(e));
  },
  async unpinPost(e) {
    await B.delete(F.posts.pin(e));
  },
  async votePoll(e, t) {
    const n = await B.post(F.posts.pollVote(e), { optionIds: t });
    return n.data ?? n;
  },
  async unrepost(e) {
    await B.delete(F.posts.repost(e));
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
    const s = `${F.hashtags.posts(e)}${r ? `?${r}` : ""}`;
    const i = await B.get(s);
    return { data: i.data.posts.map(Lt), nextCursor: Yt(i.data) };
  },
};

const ka = { new: "newest", old: "oldest", popular: "popular" };
function Ea(e) {
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
function Eo(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const s = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: Ea(e.author),
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
        ? (e.previewReplies ?? e.replies).map(Eo)
        : undefined,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const rt = {
  async getComments(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.sort) {
      n.set("sort", ka[t.sort]);
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const r = n.toString();
    const s = `${F.posts.comments(e)}${r ? `?${r}` : ""}`;
    const i = await B.get(s);
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
    return { data: a.map(Eo), nextCursor: c };
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
    const s = `${F.comments.replies(e)}${r ? `?${r}` : ""}`;
    const i = await B.get(s);
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
    return { data: a.map(Eo), nextCursor: c };
  },
  async createComment(e, t, n, r, s) {
    return await B.post(F.posts.comments(e), {
      content: t,
      attachmentIds: s?.map((i) => i.mediaId),
    });
  },
  async createReply(e, t, n, r, s) {
    return await B.post(F.comments.replies(e), {
      content: t,
      replyToUserId: r,
      attachmentIds: s?.map((i) => i.mediaId),
    });
  },
  async editComment(e, t, n) {
    await B.patch(F.comments.edit(e), { content: t });
  },
  async deleteComment(e) {
    await B.delete(F.comments.delete(e));
  },
  async likeComment(e) {
    await B.post(F.comments.like(e));
  },
  async unlikeComment(e) {
    await B.delete(F.comments.like(e));
  },
};

const ba = {
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

function Hs(e) {
  const t = ba[e.type] ?? "follow";
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

const St = {
  async getNotifications(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

    if (r > 0) {
      t.set("offset", r.toString());
    }

    const s = t.toString();
    const i = `${F.notifications.list}${s ? `?${s}` : ""}`;
    const a = await B.get(i);
    const c = a.notifications ?? a.data ?? [];
    const l = a.hasMore ?? false ? String(r + c.length) : null;
    return { notifications: c.map(Hs), nextCursor: l };
  },
  async getUnreadCount() {
    return (await B.get(F.notifications.count)).count;
  },
  async markAsRead(e) {
    if (e.length === 1) {
      const r = await B.post(F.notifications.markRead(e[0]));
      return { markedCount: r.markedCount ?? r.marked ?? 1 };
    }
    const t = 20;
    let n = 0;
    for (let r = 0; r < e.length; r += t) {
      const s = e.slice(r, r + t);
      const i = await B.post(F.notifications.markReadBatch, { ids: s });
      n += i.markedCount ?? i.marked ?? s.length;
    }
    return { markedCount: n };
  },
  async markAllAsRead() {
    const e = await B.post(F.notifications.markAllRead);
    return { markedCount: e.markedCount ?? e.marked ?? 0 };
  },
  async getSettings() {
    const e = await B.get(F.notifications.settings);
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

    await B.put(F.notifications.settings, t);
  },
};

const Sa = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const Ra = ["video/mp4", "video/webm", "video/quicktime"];
const bo = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const Ia = ".mp4,.webm,.mov";

const Ht = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await B.uploadFormData(F.files.upload, t, {
      timeout: 300 * 1000 /* 1e3 */,
    });
  },
  async deleteFile(e) {
    await B.delete(F.files.delete(e));
  },
  isValidImageType(e) {
    return Sa.includes(e.type);
  },
  isValidVideoType(e) {
    return Ra.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

function Tr(e) {
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
const vt = ot((e) => ({
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
let So = new Set();
function Pa() {
  if (!Jn) {
    setTimeout(async () => {
      Jn = null;
      const e = Array.from(So);
      So.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const r = await Ro.batchFollowStatus(n);
            vt.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50);
  }
}
function xa(e) {
  const t = ke((i) => i.profile?.id);

  const n = vt((i) => i.statuses);

  const r = R("");

  U(() => {
    if (!t) {
      return;
    }

    const i = e.filter((c) => c !== t && n[c] === undefined);

    const a = i.sort().join(",");
    if (!(a === r.current || a === "")) {
      r.current = a;
      for (const c of i) {
        So.add(c);
      }
      Pa();
    }
  }, [e, t]);

  return {
    getStatus: S(
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
const Ot = new jo(500, 120 * 1000 /* 1e3 */);
setInterval(() => Ot.cleanup(), 60 * 1000 /* 1e3 */);

const Ro = {
  async followUser(e) {
    const t = await B.post(F.users.follow(e), {});
    Ot.delete(e);
    vt.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await B.delete(F.users.follow(e));
    Ot.delete(e);
    vt.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const s = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", s.toString());
    const i = n.toString();
    const a = `${F.users.followers(e)}${i ? `?${i}` : ""}`;
    const c = await B.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.followers ?? [];
    const d = u.pagination?.hasMore ?? false ? String(s + 1) : null;
    return { data: l.map(Tr), nextCursor: d };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const s = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", s.toString());
    const i = n.toString();
    const a = `${F.users.following(e)}${i ? `?${i}` : ""}`;
    const c = await B.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.following ?? [];
    const d = u.pagination?.hasMore ?? false ? String(s + 1) : null;
    return { data: l.map(Tr), nextCursor: d };
  },
  async blockUser(e) {
    await B.post(F.users.block(e), {});
    Ot.delete(e);
  },
  async unblockUser(e) {
    await B.delete(F.users.block(e));
    Ot.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", r.toString());
    const s = t.toString();
    const i = `${F.users.blocked}${s ? `?${s}` : ""}`;
    const a = await B.get(i);
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

    return (await B.post(F.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    Ot.delete(e);
  },
  clearSocialCache() {
    Ot.clear();
  },
};

const yn = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};

const Aa = {
  async createReport(e) {
    const t = await B.post(F.reports.create, e);
    return t?.data ?? t;
  },
};

const La = {
  async getStatus() {
    return B.get(F.subscription.status);
  },
  async pay() {
    return B.post(F.subscription.pay);
  },
  async setAutoRenewal(e) {
    return B.post(F.subscription.autoRenewal, { enabled: e });
  },
  async bindCard() {
    return B.post(F.subscription.bindCard);
  },
  async getMethods() {
    return (await B.get(F.subscription.methods)).data;
  },
  async setDefaultMethod(e) {
    return B.put(F.subscription.methodDefault(e));
  },
  async deleteMethod(e) {
    return B.delete(F.subscription.methodDelete(e));
  },
};

const Cn = {
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

const ke = ot()(
  Wo(
    (e, t) => {
      B.setRefreshTokenCallback(async () => {
        try {
          const r = await pt.refreshSession();
          B.setAccessToken(r.accessToken);
          Pe.setAccessToken(r.accessToken);
          return r.accessToken;
        } catch (r) {
          return Ie(r) && r.status >= 500
            ? (e({ status: "service_error" }), null)
            : (t().reset(), null);
        }
      });

      B.setOnUnauthorizedCallback(() => {
        if (t().status !== "service_error") {
          t().reset();
        }
      });

      return {
        ...Cn,
        register: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await pt.register(r);

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: s.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const i = Ie(s) ? s.message : "Registration failed";
            const a = Ie(s) ? s.code : null;
            e({ status: "unauthenticated", error: i, errorCode: a });
            throw s;
          }
        },
        login: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await pt.login(r);
            if (_a(s)) {
              B.setAccessToken(s.accessToken);
              Pe.setAccessToken(s.accessToken);
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
                  Ie(a) &&
                  (a.code === fe.ENTITY_NOT_FOUND || a.status === 404)
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
            const i = Ie(s) ? s.message : "Login failed";
            const a = Ie(s) ? s.code : null;
            e({ status: "unauthenticated", error: i, errorCode: a });
            throw s;
          }
        },
        verifyOtp: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail, pendingPassword, flowToken } = t();
          try {
            const c = await pt.verifyOtp({
              email: pendingEmail || "",
              password: pendingPassword || "",
              otp: r,
              flowToken: flowToken || "",
            });
            e({ pendingPassword: null });

            if (va(c)) {
              B.setAccessToken(c.accessToken);
              Pe.setAccessToken(c.accessToken);
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
                  Ie(l) &&
                  (l.code === fe.ENTITY_NOT_FOUND || l.status === 404)
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
            const u = Ie(c) ? c.message : "Verification failed";
            const l = Ie(c) ? c.code : null;
            e({ status: "needs_verification", error: u, errorCode: l });
            throw c;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail, flowToken } = t();
          try {
            await pt.resendOtp({
              email: pendingEmail || "",
              flowToken: flowToken || "",
            });
          } catch (i) {
            const a = Ie(i) ? i.message : "Failed to resend code";
            const c = Ie(i) ? i.code : null;
            e({ error: a, errorCode: c });
            throw i;
          }
        },
        createProfile: async (r) => {
          e({ error: null, errorCode: null });
          try {
            await wn.createProfile(r);
            await t().fetchProfile();
            e({ status: "authenticated" });
          } catch (s) {
            const i = Ie(s) ? s.message : "Failed to create profile";
            const a = Ie(s) ? s.code : null;
            e({ error: i, errorCode: a });
            throw s;
          }
        },
        logout: async () => {
          try {
            await pt.logout();
          } catch {
          } finally {
            B.setAccessToken(null);
            Pe.setAccessToken(null);
            e({ ...Cn, status: "unauthenticated" });
          }
        },
        logoutAll: async () => {
          try {
            await pt.logoutAll();
          } catch {
          } finally {
            B.setAccessToken(null);
            Pe.setAccessToken(null);
            e({ ...Cn, status: "unauthenticated" });
          }
        },
        refreshSession: async () => {
          try {
            const r = await pt.refreshSession();
            B.setAccessToken(r.accessToken);
            Pe.setAccessToken(r.accessToken);
            return r.accessToken;
          } catch (r) {
            return Ie(r) && r.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const r = await wn.getMyProfile();
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
                Ie(i) &&
                (i.code === fe.ENTITY_NOT_FOUND || i.status === 404)
              ) {
                e({ status: "needs_profile" });
              } else {
                throw i;
              }
            }
          } catch (s) {
            if (Ie(s) && s.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await wn.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await wn.restoreAccount();
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
          B.setAccessToken(null);
          Pe.setAccessToken(null);
          e({ ...Cn, status: "unauthenticated" });
        },
        setProfile: (r) => {
          e({ profile: r });
        },
      };
    },
    {
      name: "auth-storage",
      storage: Vo(() => sessionStorage),
      partialize: (e) => ({
        profile: e.profile,
        email: e.email,
      }),
    }
  )
);

const Oa = () => ke((e) => e.status);

const Vs = () => ke((e) => e.profile);

const X_ = () => ke((e) => e.status === "authenticated");

const ye = ot((e, t) => ({
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
  _lastPostEdit: null,
  _lastLikeUpdate: null,
  currentPost: null,
  currentPostLoading: false,
  currentPostError: false,

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
        const a = await $e.getFeed(activeFeed, { limit: 20 });
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
        const a = await $e.getFeed(activeFeed, {
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

  createPost: async ({
    wallOwnerId: n,
    text: r,
    spans: s = [],
    attachments: i = [],
    poll: a,
  }) => {
    const c = ke.getState().profile;
    if (!c) {
      throw new Error("Not authenticated");
    }
    try {
      const u = i.map(({ mediaId: f }) => f);

      const { id: id_1 } = await $e.createPost({
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

      $e.invalidateWallCache(n);
      try {
        const f = await $e.getPost(id_1);
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
        const s = await $e.getPost(n);
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

  editPost: async (n, r, s) => {
    await $e.editPost(n, { text: r, spans: s });
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
      $e.updatePostInWallCache(u.wallOwnerId, n, {
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
      await $e.deletePost(n);
    } catch (c) {
      console.error("Failed to delete post:", c);

      if (a) {
        e({ posts: i });
      }

      throw c;
    }
  },

  updatePostLike: (n, r, s) => {
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
        _lastLikeUpdate: { postId: n, myReaction: r, totalDelta: s },
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
        myVote:
          (r.votedOptionIds?.length ?? 0) > 0 ? r.votedOptionIds[0] : null,
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

    de(async () => {
      const { useCommentsStore } = await Promise.resolve().then(() => Ba);
      return { useCommentsStore: useCommentsStore };
    }, undefined).then(({ useCommentsStore: n }) => {
      n.getState().reset();
    });

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
      _lastPostEdit: null,
      _lastLikeUpdate: null,
      currentPost: null,
      currentPostLoading: false,
      currentPostError: false,
    });
  },
}));

const Qn = Object.freeze(
  Object.defineProperty(
    { __proto__: null, usePostsStore: ye },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Mn = ot()(
  Wo(
    (e) => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      },
    }),
    { name: "settings", storage: Vo(() => localStorage) }
  )
);

const qe = new Map();
const Ma = 60 * 1000; /* 1e3 */
const $a = 300 * 1000; /* 1e3 */
const Nr = 20;
const kr = 500;
function Da() {
  const e = Date.now();
  for (const [t, n] of qe.entries()) {
    if (e - n.timestamp > $a) {
      qe.delete(t);
    }
  }
  if (qe.size > Nr) {
    const t = Array.from(qe.entries()).sort(
      (r, s) => r[1].timestamp - s[1].timestamp
    );
    t.slice(0, t.length - Nr).forEach(([r]) => qe.delete(r));
  }
}

const Et = ot((e, t) => ({
  comments: [],
  commentsLoading: false,
  commentsLoadingMore: false,
  commentsHasMore: true,
  commentsNextCursor: null,
  highlightedCommentId: null,

  clearComments: () => {
    e({
      comments: [],
      commentsLoading: true,
      commentsHasMore: true,
      commentsNextCursor: null,
    });
  },

  fetchComments: async (n) => {
    const { usePostsStore } = await de(async () => {
      const { usePostsStore: usePostsStore_1 } = await Promise.resolve().then(
        () => Qn
      );
      return { usePostsStore: usePostsStore_1 };
    }, undefined);

    const s = usePostsStore.getState().currentPost;
    if (s && s.id === n && s.stats.comments === 0) {
      e({
        comments: [],
        commentsLoading: false,
        commentsHasMore: false,
        commentsNextCursor: null,
      });
      return;
    }
    Da();
    const i = Mn.getState().commentsSort;
    const a = n;
    const c = qe.get(a);
    const u = Date.now();
    if (c && c.sort === i) {
      if (u - c.timestamp < Ma) {
        e({
          comments: c.comments,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.hasMore,
          commentsLoading: false,
        });

        rt.getComments(n, { limit: 100, sort: i })
          .then((h) => {
            const h_data = h.data;

            qe.set(a, {
              comments: h_data,
              hasMore: h.nextCursor !== null,
              nextCursor: h.nextCursor,
              timestamp: Date.now(),
              sort: i,
            });

            e((f) =>
              f.comments.length > 0 && f.comments[0]?.postId === n
                ? {
                    comments: h_data,
                    commentsNextCursor: h.nextCursor,
                    commentsHasMore: h.nextCursor !== null,
                  }
                : f
            );
          })
          .catch(() => {});

        return;
      } else {
        e({
          comments: c.comments,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.hasMore,
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
      const l = await rt.getComments(n, { limit: 100, sort: i });
      const l_data = l.data;

      qe.set(a, {
        comments: l_data,
        hasMore: l.nextCursor !== null,
        nextCursor: l.nextCursor,
        timestamp: Date.now(),
        sort: i,
      });

      e({
        comments: l_data,
        commentsNextCursor: l.nextCursor,
        commentsHasMore: l.nextCursor !== null,
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
    const a = Mn.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await rt.getComments(n, {
        limit: 100,
        sort: a,
        cursor: commentsNextCursor ?? undefined,
      });
      e((u) => {
        const l = [...u.comments, ...c.data];
        return {
          comments: l.length > kr ? l.slice(-kr) : l,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.nextCursor !== null,
          commentsLoadingMore: false,
        };
      });
    } catch {
      e({ commentsLoadingMore: false });
    }
  },

  toggleCommentLike: async (n) => {
    const { comments } = t();

    let s = comments.findIndex((p) => p.id === n);

    let i = false;
    let a = -1;
    let c = -1;
    if (s === -1) {
      for (let p = 0; p < comments.length; p++) {
        const _ = (comments[p].previewReplies ?? []).findIndex(
          (g) => g.id === n
        );
        if (_ !== -1) {
          i = true;
          a = p;
          c = _;
          break;
        }
      }
    }
    if (s === -1 && !i) {
      return;
    }
    const u = i ? comments[a].previewReplies[c] : comments[s];
    const l = u.reactions.myReaction;
    const h = u.reactions.total;
    const d = l !== null;
    const f = d ? Math.max(0, h - 1) : h + 1;
    const m = d || "love";
    const y = [...comments];
    if (i) {
      const p = [...(y[a].previewReplies ?? [])];
      p[c] = { ...p[c], reactions: { total: f, myReaction: m } };
      y[a] = { ...y[a], previewReplies: p };
    } else {
      y[s] = { ...y[s], reactions: { total: f, myReaction: m } };
    }
    e({ comments: y });
    try {
      if (d) {
        await rt.unlikeComment(n);
      } else {
        await rt.likeComment(n);
      }
    } catch (p) {
      console.error("Failed to toggle comment like:", p);
      const v = [...t().comments];
      if (i) {
        const _ = v.findIndex((g) => g.previewReplies?.some((w) => w.id === n));
        if (_ !== -1) {
          const g = v[_].previewReplies.findIndex((w) => w.id === n);
          if (g !== -1) {
            const w = [...v[_].previewReplies];
            w[g] = { ...w[g], reactions: { total: h, myReaction: l } };
            v[_] = { ...v[_], previewReplies: w };
          }
        }
      } else {
        const _ = v.findIndex((g) => g.id === n);

        if (_ !== -1) {
          v[_] = { ...v[_], reactions: { total: h, myReaction: l } };
        }
      }
      e({ comments: v });
    }
  },

  addComment: async (
    n,
    {
      text: r,
      spans: s = [],
      parentId: i,
      attachments: a,
      replyToUserId: c,
      replyToInfo: u,
    }
  ) => {
    try {
      const l = i
        ? await rt.createReply(i, r, s, c, a)
        : await rt.createComment(n, r, s, undefined, a);

      const h = ke.getState().profile;
      if (h) {
        const p = (l.attachments || [])
          .filter((_) => typeof _ == "object" && _ !== null)
          .map((_) =>
            _.type === "media" && _.media
              ? {
                  id: _.media.id,
                  type: _.media.type,
                  url: _.media.url,
                  duration: _.media.duration,
                }
              : { id: _.id, type: _.type, url: _.url, duration: _.duration }
          );

        const v = {
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
          attachments: p,
          replyTo: l.replyTo ?? u ?? null,
          reactions: { total: 0, myReaction: null },
          stats: { replies: 0 },
          createdAt: new Date().toISOString(),
          editedAt: null,
        };

        e(
          i
            ? (_) => ({
                comments: _.comments.map((g) =>
                  g.id === i
                    ? {
                        ...g,
                        previewReplies: [...(g.previewReplies || []), v],
                        stats: { ...g.stats, replies: g.stats.replies + 1 },
                      }
                    : g
                ),

                highlightedCommentId: l.id,
              })
            : (_) => ({
                comments: [v, ..._.comments],
                highlightedCommentId: l.id,
              })
        );
      }

      const { usePostsStore } = await de(async () => {
        const { usePostsStore: usePostsStore_1 } = await Promise.resolve().then(
          () => Qn
        );
        return { usePostsStore: usePostsStore_1 };
      }, undefined);

      const f = usePostsStore.getState();

      if (f.currentPost && f.currentPost.id === n) {
        usePostsStore.setState({
          currentPost: {
            ...f.currentPost,
            stats: {
              ...f.currentPost.stats,
              comments: f.currentPost.stats.comments + 1,
            },
          },
        });
      }

      const m = Mn.getState().commentsSort;
      const y = qe.get(n);

      if (y) {
        qe.set(n, { ...y, comments: t().comments, timestamp: Date.now() });
      } else {
        qe.set(n, {
          comments: t().comments,
          hasMore: t().commentsHasMore,
          nextCursor: t().commentsNextCursor,
          timestamp: Date.now(),
          sort: m,
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
        const i = await rt.getReplies(n, { limit: 100 });
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
      await rt.editComment(n, r, s);
    } catch (u) {
      console.error("Failed to edit comment:", u);
      e({ comments: c });
      throw u;
    }
  },

  deleteComment: async (n) => {
    const { comments } = t();

    const s = comments.some((l) => l.id === n);

    const i = comments.find((l) => l.previewReplies?.some((h) => h.id === n));

    const a = comments;

    if (s) {
      e({ comments: comments.filter((l) => l.id !== n) });
    } else if (i) {
      e({
        comments: comments.map((l) =>
          l.id === i.id
            ? {
                ...l,
                previewReplies: l.previewReplies?.filter((h) => h.id !== n),
                stats: { ...l.stats, replies: l.stats.replies - 1 },
              }
            : l
        ),
      });
    }

    const { usePostsStore } = await de(async () => {
      const { usePostsStore: usePostsStore_1 } = await Promise.resolve().then(
        () => Qn
      );
      return { usePostsStore: usePostsStore_1 };
    }, undefined);

    const u = usePostsStore.getState().currentPost;

    if (u) {
      usePostsStore.setState({
        currentPost: {
          ...u,
          stats: { ...u.stats, comments: Math.max(0, u.stats.comments - 1) },
        },
      });
    }

    try {
      await rt.deleteComment(n);
    } catch (l) {
      console.error("Failed to delete comment:", l);
      e({ comments: a });
      throw l;
    }
  },

  clearHighlightedComment: () => {
    e({ highlightedCommentId: null });
  },

  setHighlightedCommentId: (n) => {
    e({ highlightedCommentId: n });
  },

  reset: () => {
    qe.clear();

    e({
      comments: [],
      commentsLoading: false,
      commentsLoadingMore: false,
      commentsHasMore: true,
      commentsNextCursor: null,
      highlightedCommentId: null,
    });
  },
}));

const Ba = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useCommentsStore: Et },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Er = [
  1000 /* 1e3 */, 2000 /* 2e3 */, 4000 /* 4e3 */, 8000 /* 8e3 */,
  16000 /* 16e3 */, 30000 /* 3e4 */,
];
const Ua = 0.3;
const Fa = 15;
function br(e) {
  const t = Er[Math.min(e, Er.length - 1)];
  const n = t * Ua * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
let ht = null;
let Zt = null;
let Rt = 0;
let It = null;
function Ha(e) {
  const { url, getToken, onRefreshToken, onMessage, onStatusChange: i } = e;
  function a() {
    if (ht) {
      return;
    }
    const u = getToken();
    if (!u) {
      i("error");
      return;
    }
    i("connecting");
    ht = new AbortController();

    (async () => {
      try {
        const h = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            Authorization: `Bearer ${u}`,
            "Cache-Control": "no-cache",
          },
          signal: ht?.signal,
        });
        if (!h.ok) {
          if (h.status === 401) {
            try {
              await onRefreshToken();
              ht = null;
              const y = br(Rt);
              Rt++;
              Zt = setTimeout(a, y);
              return;
            } catch {
              i("error");
              return;
            }
          }
          throw new Error(`SSE connection failed: ${h.status}`);
        }
        if (!h.body) {
          throw new Error("SSE response has no body");
        }
        Rt = 0;
        i("connected");

        if (It) {
          It.cancel().catch(() => {});
          It = null;
        }

        const d = h.body.getReader();
        It = d;
        const f = new TextDecoder();
        let m = "";

        while (true) {
          const { done: y, value: p } = await d.read();
          if (y) {
            break;
          }
          m += f.decode(p, { stream: true });
          const v = m.split(`
`);
          m = v.pop() || "";
          let _ = "";
          let g = "";
          for (const w of v) {
            if (w.startsWith("event: ")) {
              _ = w.slice(7);
            } else if (w.startsWith("data: ")) {
              g = w.slice(6);
            } else if (w === "" && g) {
              try {
                const E = JSON.parse(g);
                const C = _ || E.type;
                onMessage(C, E);
              } catch (E) {
                console.error("SSE message parse error:", E, g);
              }
              _ = "";
              g = "";
            }
          }
        }
      } catch (h) {
        if (h.name === "AbortError") {
          return;
        }
        i("error");

        if (Rt >= Fa) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          ht = null;
          return;
        }

        const d = br(Rt);
        Rt++;

        Zt = setTimeout(() => {
          ht = null;
          a();
        }, d);
      }
    })();
  }
  function c() {
    if (Zt) {
      clearTimeout(Zt);
      Zt = null;
    }

    if (It) {
      It.cancel().catch(() => {});
      It = null;
    }

    if (ht) {
      ht.abort();
      ht = null;
    }

    Rt = 0;
    i("disconnected");
  }
  return { connect: a, disconnect: c };
}
const Sr = {
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
function Va(e) {
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
  return Hs(t);
}

const Tn = Ha({
  url: "/api/notifications/stream",
  getToken: () => B.getAccessToken(),
  onRefreshToken: async () => {
    const e = await pt.refreshSession();
    B.setAccessToken(e.accessToken);
    Pe.setAccessToken(e.accessToken);
    return e.accessToken;
  },
  onMessage: (e, t) => {
    if (e === "notification") {
      const n = t.payload ?? t;
      const r = Va(n);
      const s = r.payload.actors[0];

      const i = {
        id: r.id,
        type: r.type,
        actorName: s?.displayName || "Пользователь",
        actorUsername: s?.username || "",
        actorAvatar: s?.avatar || "",
        count: r.payload.count,
        message: ja(r.type, s?.displayName || "Пользователь", r.payload.count),
        clickUrl: r.payload.clickUrl,
        entityId: r.entityId,
        parentEntityId: r.parentEntityId,
      };

      jt.setState((a) => ({
        notifications: [r, ...a.notifications],
        unreadCount: t.unreadCount ?? a.unreadCount,
        lastSseToast: i,
      }));

      if (t.sound) {
        za();
      }
    } else {
      if (e === "unread_count") {
        jt.setState({ unreadCount: t.payload?.count ?? 0 });
      }
    }
  },
  onStatusChange: (e) => {
    jt.setState({
      sseStatus: e,
      error: e === "error" ? "SSE connection error" : null,
    });
  },
});

const jt = ot()((e, t) => ({
  ...Sr,

  initialize: () => {
    if (!t().isInitialized) {
      e({ isInitialized: true });
      Tn.connect();
      t().fetchUnreadCount();
    }
  },

  fetchNotifications: async (n = false) => {
    const { status: r, nextCursor: s, notifications: i } = t();
    if (r !== "loading" && !(!n && s === null && i.length > 0)) {
      e({ status: "loading", error: null });
      try {
        const a = n || (s ?? undefined);
        const c = await St.getNotifications({ cursor: a, limit: 20 });
        e({
          notifications: n ? c.notifications : [...i, ...c.notifications],
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
      const n = await St.getUnreadCount();
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
      await St.markAsRead(n);
    } catch {}
  },

  markAsReadSilent: async (n) => {
    if (n.length !== 0) {
      e((r) => ({
        unreadCount: Math.max(0, r.unreadCount - n.length),
      }));
      try {
        await St.markAsRead(n);
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
      await St.markAllAsRead();
    } catch {}
  },

  connectSSE: () => Tn.connect(),
  disconnectSSE: () => Tn.disconnect(),

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const n = await St.getSettings();
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
      await St.updateSettings(n);
    } catch {
      e({ settings: r });
    }
  },

  reset: () => {
    Tn.disconnect();
    e(Sr);
  },
}));

const Wa = {
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

function ja(e, t, n) {
  const Wa_e = Wa[e];
  return Wa_e ? Wa_e(t, n) : "Новое уведомление";
}
function za() {
  try {
    const e = new Audio("/assets/notification.ogg");
    e.volume = 0.5;
    e.play().catch(() => {});
  } catch {}
}

const Y_ = () => jt((e) => e.unreadCount);

const qa = () => jt((e) => e.lastSseToast);

const Ga = ot((e, t) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    if (!t().loaded) {
      try {
        const n = await B.get("/v1/portal");
        e({ portal: n, loaded: true });
      } catch {
        e({ loaded: true });
      }
    }
  },
}));

const Z_ = () => Ga((e) => e.portal);

const un = new Set();
let an = null;
const Xa = 30000; /* 3e4 */
function Ya() {
  if (an === null) {
    an = window.setInterval(() => {
      un.forEach((e) => e());
    }, Xa);
  }
}
function Za() {
  if (an !== null) {
    clearInterval(an);
    an = null;
  }
}
function Ka(e) {
  un.add(e);

  if (un.size === 1) {
    Ya();
  }
}
function Ja(e) {
  un.delete(e);

  if (un.size === 0) {
    Za();
  }
}
function eo(e) {
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
function Ws(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const r = n ? t : 0;

  const [s, i] = x(() => (n ? eo(new Date(r)) : ""));

  U(() => {
    if (!n) {
      i("");
      return;
    }
    const a = new Date(r);
    i(eo(a));
    const c = () => {
      i(eo(a));
    };
    Ka(c);

    return () => Ja(c);
  }, [r, n]);

  return s;
}
const Rr = 1174;
function ut() {
  const [e, t] = x(() =>
    typeof window === "undefined" ? false : window.innerWidth < Rr
  );

  U(() => {
    const n = window.matchMedia(`(max-width: ${Rr - 1}px)`);

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
const Qa = Gt({ isHidden: false });

const ec = () => {
  const [e, t] = x(false);
  const n = R(0);

  U(() => {
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

function tc() {
  const [e, t] = x(false);
  const [n, r] = x(false);
  const [s, i] = x(0);
  const [a, c] = x(false);
  const [u, l] = x(0);
  const [h, d] = x(0);
  const [f, m] = x([]);
  const [y, p] = x(0);
  const v = R(0);
  const _ = R(null);
  const g = R(null);
  const w = R(null);
  const E = R(null);
  const C = R([]);
  const b = R(null);
  const N = R(null);
  const k = R(null);
  const T = R(null);
  const A = R(null);
  const I = R(null);
  const D = R([]);
  const P = R(false);
  const W = R(0);
  const J = R([]);
  const X = R(0);

  U(() => {
    P.current = e;
  }, [e]);

  U(
    () => () => {
      if (b.current) {
        clearInterval(b.current);
      }

      if (N.current) {
        cancelAnimationFrame(N.current);
      }

      if (I.current) {
        clearInterval(I.current);
      }

      if (E.current) {
        E.current.getTracks().forEach(($) => $.stop());
      }

      if (_.current) {
        _.current.ondataavailable = null;
        _.current.onstop = null;
      }

      if (g.current && g.current.state !== "closed") {
        g.current.close();
      }

      if (k.current) {
        k.current.pause();
        k.current.onloadedmetadata = null;
        k.current.ontimeupdate = null;
        k.current.onended = null;
        k.current = null;
      }

      if (T.current) {
        URL.revokeObjectURL(T.current);
      }
    },
    []
  );

  const te = S(() => {
    if (!w.current) {
      return;
    }
    const w_current = w.current;
    const w_current_frequencyBinCount = w_current.frequencyBinCount;
    const j = new Uint8Array(w_current_frequencyBinCount);
    w_current.getByteFrequencyData(j);
    let q = 0;
    for (let re = 0; re < w_current_frequencyBinCount; re++) {
      q += j[re];
    }
    const oe = q / w_current_frequencyBinCount / 255;
    const ie = Math.min(1, oe * 3);
    const pe = Math.max(0.1, ie);
    if (P.current) {
      const je = performance.now() - W.current;
      const dt = Math.floor(je / 80);
      J.current.push(pe);

      if (dt > X.current) {
        const J_current = J.current;

        const ae =
          J_current.length > 0
            ? J_current.reduce((K, ee) => K + ee, 0) / J_current.length
            : 0.05;

        D.current.push(ae);
        v.current += 4;

        m((K) => [...K, ae]);

        p(v.current);
        J.current = [];
        X.current = dt;
      }

      N.current = requestAnimationFrame(te);
    }
  }, []);

  const ce = S(() => {
    const D_current = D.current;
    return D_current.length > 0 ? [...D_current] : [];
  }, []);

  const Y = S(async () => {
    try {
      if (T.current) {
        URL.revokeObjectURL(T.current);
        T.current = null;
      }

      A.current = null;

      if (k.current) {
        k.current.pause();
        k.current = null;
      }

      const $ = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      E.current = $;
      const Z = new AudioContext();
      g.current = Z;
      const j = Z.createAnalyser();
      j.fftSize = 256;
      j.smoothingTimeConstant = 0.3;
      w.current = j;
      Z.createMediaStreamSource($).connect(j);
      const oe = new MediaRecorder($, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      _.current = oe;
      C.current = [];
      D.current = [];
      W.current = performance.now();
      J.current = [];
      X.current = 0;

      oe.ondataavailable = (pe) => {
        if (pe.data.size > 0) {
          C.current.push(pe.data);
        }
      };

      oe.start(100);
      t(true);
      r(false);
      i(0);
      l(0);
      d(0);
      c(false);
      v.current = 0;
      m([]);
      p(0);
      P.current = true;
      const ie = Date.now();

      b.current = window.setInterval(() => {
        const pe = Math.floor((Date.now() - ie) / 1000 /* 1e3 */);
        i(pe);
      }, 100);

      N.current = requestAnimationFrame(te);
    } catch ($) {
      console.error("Error accessing microphone:", $);
    }
  }, [te]);

  const Q = S(
    () =>
      new Promise(($) => {
        P.current = false;
        t(false);

        if (_.current && _.current.state !== "inactive") {
          _.current.onstop = () => {
            if (C.current.length > 0) {
              const j = _.current?.mimeType || "audio/webm";
              const q = new Blob(C.current, { type: j });
              const oe = URL.createObjectURL(q);
              T.current = oe;
              A.current = q;
              const ie = new Audio(oe);
              k.current = ie;

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

                if (I.current) {
                  clearInterval(I.current);
                  I.current = null;
                }
              };

              r(true);
              $(q);
            } else {
              $(null);
            }
          };

          _.current.stop();
        } else {
          $(null);
        }

        if (E.current) {
          E.current.getTracks().forEach((j) => j.stop());
          E.current = null;
        }

        if (b.current) {
          clearInterval(b.current);
          b.current = null;
        }

        if (N.current) {
          cancelAnimationFrame(N.current);
          N.current = null;
        }

        if (g.current && g.current.state !== "closed") {
          g.current.close();
          g.current = null;
        }

        const Z = ce();
        v.current = 0;
        m(Z);
        p(0);
        l(0);
      }),
    [ce]
  );

  const O = S(() => {
    P.current = false;

    if (_.current) {
      _.current.ondataavailable = null;
      _.current.onstop = null;
      _.current.state !== "inactive" && _.current.stop();
      _.current = null;
    }

    if (E.current) {
      E.current.getTracks().forEach(($) => $.stop());
      E.current = null;
    }

    if (b.current) {
      clearInterval(b.current);
      b.current = null;
    }

    if (N.current) {
      cancelAnimationFrame(N.current);
      N.current = null;
    }

    if (I.current) {
      clearInterval(I.current);
      I.current = null;
    }

    if (g.current && g.current.state !== "closed") {
      g.current.close();
      g.current = null;
    }

    if (k.current) {
      k.current.pause();
      k.current = null;
    }

    if (T.current) {
      URL.revokeObjectURL(T.current);
      T.current = null;
    }

    A.current = null;
    t(false);
    r(false);
    i(0);
    c(false);
    l(0);
    d(0);
    v.current = 0;
    m([]);
    p(0);
    D.current = [];
    C.current = [];
  }, []);

  const L = S(() => {
    if (I.current) {
      clearInterval(I.current);
    }

    I.current = window.setInterval(() => {
      const k_current = k.current;
      if (
        !k_current ||
        k_current.paused ||
        k_current.paused ||
        k_current.ended
      ) {
        if (I.current) {
          clearInterval(I.current);
          I.current = null;
        }

        return;
      }

      if (k_current.duration > 0) {
        l(k_current.currentTime / k_current.duration);
      }
    }, 100);
  }, []);

  const z = S(() => {
    if (!k.current || !T.current) {
      return;
    }

    if (I.current) {
      clearInterval(I.current);
      I.current = null;
    }

    const k_current = k.current;

    if (k_current.ended || k_current.currentTime >= k_current.duration) {
      k_current.currentTime = 0;
      l(0);
    }

    c(true);

    k_current
      .play()
      .then(() => {
        L();
      })
      .catch((Z) => {
        console.error("Error playing audio:", Z);
        c(false);
      });
  }, [L]);

  const V = S(() => {
    if (I.current) {
      clearInterval(I.current);
      I.current = null;
    }

    if (k.current) {
      k.current.pause();

      k.current.duration > 0 && l(k.current.currentTime / k.current.duration);
    }

    c(false);
  }, []);

  const M = S(
    ($) => {
      if (!k.current || !n) {
        return;
      }
      const k_current = k.current;
      const j = Math.max(0, Math.min(1, $));
      k_current.currentTime = j * k_current.duration;
      l(j);

      if (k_current.paused) {
        I.current && (clearInterval(I.current), (I.current = null));

        k_current
          .play()
          .then(() => {
            c(true);
            L();
          })
          .catch((q) => {
            console.error("Error playing audio:", q);
          });
      }
    },
    [n, L]
  );

  const H = S(() => A.current, []);

  return {
    isRecording: e,
    hasRecording: n,
    recordingTime: s,
    audioLevels: f,
    slideOffset: y,
    isPlaying: a,
    playbackProgress: u,
    duration: h,
    audioElementRef: k,
    startRecording: Y,
    stopRecording: Q,
    cancelRecording: O,
    playAudio: z,
    pauseAudio: V,
    seekTo: M,
    getAudioBlob: H,
  };
}
const nc = 0.5;
const oc = 500;
const Ir = 1000; /* 1e3 */
class rc {
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
                }, oc);
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
      { threshold: nc }
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
      this.viewedPosts.size >= Ir &&
        Array.from(this.viewedPosts)
          .slice(0, Ir / 2)
          .forEach((r) => this.viewedPosts.delete(r));

      this.viewedPosts.add(t);

      $e.trackView(t).catch(() => {
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
const to = new rc();
function sc(e, t) {
  U(() => {
    const t_current = t.current;
    if (!(!t_current || to.isViewed(e))) {
      to.observe(e, t_current);

      return () => {
        to.unobserve(t_current);
      };
    }
  }, [e, t]);
}
function qn(e = "", t = []) {
  const [n, r] = x(e);
  const [s, i] = x(t);
  const a = R(null);

  const c = S((h, d) => {
    r(h);
    i(d);
  }, []);

  const u = S((h) => {
    a.current?.insertText(h);
  }, []);

  const l = S(() => {
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
function ic(e) {
  const t = vt((s) => s.statuses[e]);

  const n = S(async () => {
    vt.getState().setStatus(e, true);
    try {
      await Ro.followUser(e);
    } catch {
      vt.getState().setStatus(e, false);
    }
  }, [e]);

  const r = S(async () => {
    vt.getState().setStatus(e, false);
    try {
      await Ro.unfollowUser(e);
    } catch {
      vt.getState().setStatus(e, true);
    }
  }, [e]);

  return { isFollowing: t, follow: n, unfollow: r };
}
function ac({
  sentinelRef: e,
  hasMore: t,
  isLoading: n,
  onLoadMore: r,
  rootMargin: s = "100px",
}) {
  U(() => {
    if (!t || n) {
      return;
    }
    const e_current = e.current;
    if (!e_current) {
      return;
    }
    const a = new IntersectionObserver(
      (c) => {
        if (c[0].isIntersecting) {
          r();
        }
      },
      { rootMargin: s }
    );
    a.observe(e_current);

    return () => a.disconnect();
  }, [t, n, r, s, e]);
}

const cc = ({ size: e = 20 }) =>
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
      o("path", {
        d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",
      }),
      o("path", {
        d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      }),
    ],
  });

const lc = ({ size: e = 20 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: o("circle", { cx: "12", cy: "12", r: "10" }),
  });

const uc = ({ size: e = 20 }) =>
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
      o("path", {
        d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      }),
      o("path", { d: "M22 21H7" }),
      o("path", { d: "m5 11 9 9" }),
    ],
  });

const dc = ({ size: e = 20 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: o("line", { x1: "5", y1: "19", x2: "19", y2: "5" }),
  });

const hc = ({ size: e = 20 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: o("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
    }),
  });

const fc = ({ size: e = 20 }) =>
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
      o("path", { d: "M21 7v6h-6" }),
      o("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }),
    ],
  });

const mc = ({ size: e = 20 }) =>
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
      o("path", { d: "M3 7v6h6" }),
      o("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }),
    ],
  });

const pc = ({ size: e = 20 }) =>
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
      o("circle", { cx: "11", cy: "11", r: "8" }),
      o("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      o("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      o("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

const gc = ({ size: e = 20 }) =>
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
      o("circle", { cx: "11", cy: "11", r: "8" }),
      o("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      o("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

const vc = ({ size: e = 18 }) =>
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

const _c = ({ size: e = 18 }) =>
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

const wc = ({ size: e = 18 }) =>
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

const js = ({ size: e = 18 }) =>
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

const yc = ({ size: e = 18 }) =>
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

const Cc = ({ size: e = 18 }) =>
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

const Tc = ({ size: e = 18 }) =>
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

const Nc = ({ size: e = 18 }) =>
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

const kc = ({ size: e = 18 }) =>
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

const Ec = ({ size: e = 24 }) =>
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

const zs = ({ size: e = 16 }) =>
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

const qs = ({ size: e = 16 }) =>
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

const bc = ({ size: e = 24 }) =>
  o("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: o("path", { d: "M8 5v14l11-7z" }),
  });

const Sc = ({ size: e = 16 }) =>
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

const Rc = ({ size: e = 20 }) =>
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

const Ic = ({ size: e = 20 }) =>
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

const Pc = ({ size: e = 20 }) =>
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

const xc = ({ size: e = 20 }) =>
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

const Gs = ({ size: e = 24 }) =>
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

const Xs = ({ size: e = 20 }) =>
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

const Ac = ({ size: e = 8 }) =>
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

const Lc = ({ size: e = 8 }) =>
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

const Oc = ({ size: e = 48 }) =>
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

const Mc = ({ size: e = 24 }) =>
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

const $c = ({ size: e = 24 }) =>
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

const zo = ({ filled: e = false, size: t = 20 }) =>
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

const Ys = ({ size: e = 18 }) =>
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

const Dc = ({ size: e = 24 }) =>
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

const Zs = ({ size: e = 18 }) =>
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

const Ks = ({ size: e = 24 }) =>
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

const Js = ({ size: e = 24 }) =>
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

const Gn = ({ filled: e = false, size: t = 20, className: n }) =>
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

const Qs = ({ size: e = 24 }) =>
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

const Bc = ({ size: e = 24 }) =>
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

const ei = ({ size: e = 18 }) =>
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

const Uc = ({ size: e = 20 }) =>
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

const Pr = ({ size: e = 18 }) =>
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

const ti = ({ size: e = 24 }) =>
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

const Fc = ({ size: e = 20 }) =>
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

const Fn = ({ size: e = 20 }) =>
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

const Hc = ({ size: e = 20, color: t = "currentColor" }) =>
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

const Vc = ({ size: e = 24 }) =>
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

const Wc = ({ size: e = 48 }) =>
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

const qo = ({ size: e = 18 }) =>
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

const jc = ({ size: e = 16 }) =>
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

const ni = ({ size: e = 20 }) =>
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

const zc = ({ size: e = 24 }) =>
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

const xr = [
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

const qc = [
  _e.LOGIN,
  _e.REGISTER,
  _e.FORGOT_PASSWORD,
  _e.RESET_PASSWORD,
  _e.VERIFY_EMAIL,
  _e.ONBOARDING,
];

const Gc = "QYP36fUx";
const Xc = "_7afjMMjS";
const Yc = "crRhcI7j";
const Zc = "mPvkVXNc";
const Kc = "R6rPmVO3";
const Jc = "_4M-jb-Yf";
const Qc = "BzRajAFf";
const el = "xWaW7ynd";
const tl = "mC4WabM6";
const nl = "CdIxpdOF";
const ol = "o8sqdA1y";
const rl = "G7wJQLhH";
const sl = "Idqhap9T";
const il = "bcyDy-AX";

const Me = {
  overlay: Gc,
  modalWrapper: Xc,
  wide: Yc,
  modal: Zc,
  frameless: Kc,
  header: Jc,
  title: Qc,
  closeButton: el,
  externalCloseButton: tl,
  mobileOverlay: nl,
  closing: ol,
  bottomSheet: rl,
  dragHandle: sl,
  dragIndicator: il,
};

const al = Gt(null);
const cl = 100;
const ll = 0.5;
function wt({
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
  const h = R(null);
  const d = R(null);
  const f = R(null);
  const m = ut();
  const y = R(0);
  const p = R(false);
  const [v, _] = x(false);
  const g = R(0);
  const w = R(0);
  const E = R(0);
  U(() => {
    const Y = (O) => {
      if (O.key === "Escape") {
        if (l && !l()) {
          return;
        }
        t();
      }
    };

    const Q = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", Y);

    return () => {
      document.removeEventListener("keydown", Y);
      document.documentElement.style.overflow = Q;
    };
  }, [t]);

  const C = (Y) => {
    f.current = Y.target;
  };

  const b = (Y) => {
    if (f.current === h.current && Y.target === h.current) {
      if (m) {
        N();
      } else {
        if (l && !l()) {
          return;
        }
        t();
      }
    }
    f.current = null;
  };

  const N = S(() => {
    if (l && !l()) {
      I(0, "transform 0.2s ease-out");
      D(0);
      y.current = 0;
      return;
    }
    _(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, l]);

  const k = R(false);
  const T = R(false);

  const A = (Y) => {
    let Q = Y;

    while (Q && Q !== d.current) {
      const L = window.getComputedStyle(Q).overflowY;
      if ((L === "auto" || L === "scroll") && Q.scrollHeight > Q.clientHeight) {
        return Q;
      }
      Q = Q.parentElement;
    }

    return null;
  };

  const I = (Y, Q) => {
    if (d.current) {
      d.current.style.transform = Y > 0 ? `translateY(${Y}px)` : "";
      d.current.style.transition = Q || "";
    }
  };

  const D = (Y) => {
    if (h.current && Y > 0) {
      h.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
        0,
        0.4 - Y / 500
      )})`;
    } else if (h.current) {
      h.current.style.backgroundColor = "";
    }
  };

  const P = (Y) => {
    if (!m) {
      return;
    }
    g.current = Y.touches[0].clientY;
    w.current = Date.now();
    E.current = Y.touches[0].clientY;
    const Y_target = Y.target;
    if (Y_target.closest(`.${Me.dragHandle}`)) {
      k.current = true;
      T.current = true;
      p.current = true;

      if (d.current) {
        d.current.style.transition = "none";
      }

      return;
    }
    k.current = false;

    if (
      Y_target.closest(
        'button, a, input, textarea, select, video, [role="button"]'
      )
    ) {
      T.current = false;
      return;
    }

    if (Y_target.tagName === "CANVAS" || Y_target.closest("canvas")) {
      T.current = false;
      return;
    }
    const V = A(Y_target);
    T.current = !V || V.scrollTop === 0;
  };

  const W = (Y) => {
    if (!m) {
      return;
    }
    const Q = Y.touches[0].clientY;
    const O = Q - g.current;
    E.current = Q;

    if (k.current) {
      if (O > 0) {
        y.current = O;
        I(O);
        D(O);
        Y.preventDefault();
      }

      return;
    }

    if (T.current) {
      if (p.current && y.current > 0) {
        if (O > 0) {
          y.current = O;
          I(O);
          D(O);
          Y.preventDefault();
        } else {
          y.current = 0;
          p.current = false;
          I(0);
          D(0);
        }

        return;
      }

      if (O > 0) {
        p.current ||
          ((p.current = true),
          d.current && (d.current.style.transition = "none"));
        y.current = O;
        I(O);
        D(O);
        Y.preventDefault();
      }
    }
  };

  const J = () => {
    if (!m) {
      return;
    }
    const Y = E.current - g.current;
    const Q = Date.now() - w.current;
    const O = Y / Q;

    if (p.current && (Y > cl || O > ll)) {
      N();
    } else if (y.current > 0) {
      I(0, "transform 0.2s ease-out");
      D(0);
      y.current = 0;
    }

    p.current = false;
    k.current = false;
    T.current = false;
  };

  const te = (() => {
    if (m && v) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const ce = { onClose: t, isMobile: m, isClosing: v, handleClose: N };
  return o(al.Provider, {
    value: ce,
    children: o("div", {
      ref: h,
      className: `${Me.overlay} ${m ? Me.mobileOverlay : ""} ${
        v ? Me.closing : ""
      }`,
      onMouseDown: C,
      onMouseUp: b,
      children: o("div", {
        ref: d,
        className: `${Me.modalWrapper} ${u === "wide" ? Me.wide : ""} ${
          m ? Me.bottomSheet : ""
        }`,
        style: te,
        onTouchStart: P,
        onTouchMove: W,
        onTouchEnd: J,
        children: [
          i &&
            !m &&
            o("button", {
              type: "button",
              className: Me.externalCloseButton,
              onClick: (Y) => {
                Y.stopPropagation();
                t();
              },
              children: o(nt, { size: 24 }),
            }),
          m &&
            o("div", {
              className: Me.dragHandle,
              children: o("div", { className: Me.dragIndicator }),
            }),
          o("div", {
            className: `${Me.modal} ${i ? Me.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !i &&
                r &&
                !m &&
                o("div", {
                  className: Me.header,
                  children: [
                    o("span", { className: Me.title, children: n }),
                    s &&
                      o("button", {
                        type: "button",
                        className: Me.closeButton,
                        onClick: (Y) => {
                          Y.stopPropagation();
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
const ul = "GKtAeZvh";
const dl = "_4kYPGG9W";
const hl = "pl3SNO9Y";
const fl = "-OjVJvXv";
const ml = "mKywUPJV";
const pl = "ORxo1gch";
const gl = "_-0ox-2T5";
const vl = "ufqwLNRT";
const _l = "Kb0ZHEmq";
const wl = "L6foA0ob";
const yl = "p8fXVDg6";
const Cl = "iiFzRcQy";

const Tt = {
  avatar: ul,
  xs: dl,
  emoji: hl,
  onlineDot: fl,
  sm: ml,
  md: pl,
  lg: gl,
  xl: vl,
  badge: _l,
  followBadge: wl,
  notFollowing: yl,
  following: Cl,
};

function Tl(e) {
  return (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith("https://") ||
    e.startsWith("/")
  );
}
function Ye({
  src: e,
  alt: t,
  size: n = "md",
  badge: r,
  online: s,
  followBadge: i,
  onFollowBadgeClick: a,
  className: c,
}) {
  const u = e ? Tl(e) : false;
  return o("div", {
    className: `${Tt.avatar} ${Tt[n]} ${c || ""}`,
    children: [
      u && e
        ? o("img", { src: e, alt: t || "" })
        : o("span", { className: Tt.emoji, children: e || "👤" }),
      r && o("div", { className: Tt.badge, children: r }),
      i !== undefined
        ? o("button", {
            type: "button",
            className: `${Tt.followBadge} ${
              i ? Tt.following : Tt.notFollowing
            }`,
            onClick: (l) => {
              l.preventDefault();
              l.stopPropagation();
              a?.(l);
            },
            children: i ? o(Lc, { size: 8 }) : o(Ac, { size: 8 }),
          })
        : s && o("span", { className: Tt.onlineDot }),
    ],
  });
}
const Nl = "LGbsLd3i";
const kl = "Qtvr3ePW";
const El = "I1XzQEdO";
const no = { hint: Nl, multiline: kl, arrow: El };
function Hn({ text: e, children: t, className: n, multiline: r }) {
  const s = R(null);
  const [i, a] = x(null);

  const c = S(() => {
    if (!s.current) {
      return;
    }
    const h = s.current.getBoundingClientRect();
    a({ x: h.left + h.width / 2, y: h.top });
  }, []);

  const u = S(() => {
    a(null);
  }, []);

  const l = S(
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

  U(() => {
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
        lt(
          o("div", {
            className: `${no.hint} ${r ? no.multiline : ""}`,
            style: { left: `${i.x}px`, top: `${i.y}px` },
            children: [e, o("span", { className: no.arrow })],
          }),
          document.body
        ),
    ],
  });
}

const bl = [
  [0, 0, 96, 28],
  [96, 0, 107, 52],
  [203, 0, 107, 107],
  [310, 0, 109, 105],
  [419, 0, 170, 114],
  [589, 0, 168, 102],
  [757, 0, 177, 93],
  [934, 0, 165, 105],
  [1099, 0, 170, 111],
  [1269, 0, 176, 123],
  [1445, 0, 141, 148],
  [1586, 0, 115, 157],
  [1701, 0, 144, 112],
  [1845, 0, 135, 114],
  [1980, 0, 136, 129],
  [2116, 0, 131, 114],
];

const Sl = 2247;
const Rl = 157;

const Go = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  [0, 673, 329],
  [1, 666, 304],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 306],
  [1, 666, 303],
  [2, 648, 252],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 651, 253],
  [2, 649, 253],
  [3, 636, 259],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 639, 258],
  [3, 637, 255],
  [3, 635, 259],
  [4, 627, 287],
  [5, 615, 316],
  [6, 612, 320],
  [6, 612, 320],
  [7, 615, 320],
  [7, 615, 320],
  [6, 612, 320],
  [6, 612, 320],
  [7, 615, 322],
  [7, 615, 327],
  [8, 617, 330],
  [9, 605, 334],
  [10, 628, 357],
  [11, 632, 393],
  [12, 617, 530],
  [13, 626, 575],
  [14, 623, 638],
  [15, 628, 717],
  [14, 623, 811],
  [15, 629, 922],
  [14, 623, 1052],
  [15, 629, 1202],
  [14, 623, 1373],
  [15, 629, 1567],
  [14, 624, 1785],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

const Go_length = Go.length;
const it = 370 / 1080;
const Il = 605;
const Pl = 40;
const xl = { s: 14, x: 623 };
const Al = { s: 15, x: 629 };
function Ll(e, t) {
  const n = (e + t + 200) / it;
  const r = Go.slice();
  let s = 1785;
  let i = 218;
  let a = true;
  for (let c = 98; c < Go_length && ((i += 18), (s += i), !(s > n)); c++) {
    const u = a ? Al : xl;
    r[c] = [u.s, u.x, s];
    a = !a;
  }
  return r;
}
function Ol() {
  const e = R(null);
  const t = R(null);
  const n = R({ f: 0, ts: 0, tl: Go.slice(), xOff: 0, yOff: 0 });

  U(() => {
    const t_current = t.current;
    const e_current = e.current;
    if (!t_current || !e_current) {
      return;
    }
    function i() {
      const { innerHeight, innerWidth } = window;

      const e_current_parentElement = e_current.parentElement;
      let y;
      let p;
      if (e_current_parentElement) {
        const g = e_current_parentElement.getBoundingClientRect();
        y = g.top;
        p = g.left + (g.width - 370) / 2;
      } else {
        y = (innerHeight - 900) / 2;
        p = (innerWidth - 370) / 2;
      }
      const v = innerWidth <= 1173;
      n.current.yOff = 357 * it - y + (v ? 60 : 0);
      const _ = 260;
      n.current.xOff = Il * it - p - _;
      n.current.tl = Ll(innerHeight, n.current.yOff);
    }
    const a = setTimeout(i, 260);
    let c;
    const u = () => {
      clearTimeout(c);
      c = setTimeout(i, 150);
    };
    window.addEventListener("resize", u);
    let l;
    function h(d) {
      const n_current = n.current;
      if (d - n_current.ts >= Pl) {
        const m = n_current.tl[n_current.f];
        if (!m) {
          t_current.style.visibility = "hidden";
        } else {
          const [y, p, v] = m;
          const [_, , g, w] = bl[y];
          const E = (g * it + 0.5) | 0;
          const C = (w * it + 0.5) | 0;
          t_current.style.cssText = `visibility:visible;width:${E}px;height:${C}px;background-image:url(/assets/nuksta/nuksta-chechik-sprite.png);background-repeat:no-repeat;image-rendering:pixelated;will-change:transform;background-position:${-(
            (_ * it + 0.5) |
            0
          )}px 0px;background-size:${(Sl * it + 0.5) | 0}px ${
            (Rl * it + 0.5) | 0
          }px;transform:translate(${(p * it - n_current.xOff + 0.5) | 0}px,${
            (v * it - n_current.yOff + 0.5) | 0
          }px)`;
        }
        n_current.f = (n_current.f + 1) % Go_length;
        n_current.ts = d;
      }
      l = requestAnimationFrame(h);
    }
    l = requestAnimationFrame(h);

    return () => {
      cancelAnimationFrame(l);
      clearTimeout(a);
      clearTimeout(c);
      window.removeEventListener("resize", u);
    };
  }, []);

  return o(Ee, {
    children: [
      o("div", {
        ref: e,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          pointerEvents: "none",
        },
      }),
      lt(
        o("div", {
          style: {
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 99999,
            overflow: "hidden",
          },
          children: o("div", {
            ref: t,
            style: {
              position: "absolute",
              backgroundImage: "url(/assets/nuksta/nuksta-chechik-sprite.png)",
              backgroundRepeat: "no-repeat",
              imageRendering: "pixelated",
              willChange: "transform",
            },
          }),
        }),
        document.body
      ),
    ],
  });
}
const Ml = "wM7ylR1U";
const $l = "IN5RQwV5";
const Dl = "RBvxto5g";
const Bl = "Pyy021cw";
const Ul = "QEdVFv1B";
const Fl = "OJnssa3e";
const Hl = "QAfJqC2r";
const Vl = "gDiWBZ1L";
const Wl = "la-7fquh";
const jl = "_50tyw0Sj";
const zl = "r4kTHO1L";
const ql = "_2NotYmaM";
const Gl = "_7ZrZFLTC";
const Xl = "tCp-vzAs";
const Yl = "z1IliE8P";
const Zl = "wpcd2dtq";
const Kl = "jA-BCVm2";
const Jl = "SCFLWTpz";
const Ql = "w6ZwQ8g1";
const eu = "BHkMDYsy";
const tu = "sJeSarME";
const nu = "-tbeKIZ7";
const ou = "soj1av1b";
const ru = "bH727zz6";
const su = "_00AtOBoL";
const iu = "GHcJlGiE";
const au = "rNc04v7E";
const cu = "F8NKSXXc";

const G = {
  modal: Ml,
  sub: $l,
  top: Dl,
  bottom: Bl,
  title: Ul,
  section: Fl,
  profileSection: Hl,
  label: Vl,
  labelRow: Wl,
  dim: jl,
  row: zl,
  icon: ql,
  iconGradient: Gl,
  name: Xl,
  nameGradient: Yl,
  namePinBadge: Zl,
  promoVideo: Kl,
  features: Jl,
  featureContent: Ql,
  featureTitle: eu,
  gradientText: tu,
  soon: nu,
  infoBtn: ou,
  footer: ru,
  disclaimer: su,
  disclaimerLink: iu,
  subscribeBtn: au,
  activeLabel: cu,
};

function Ar({ text: e }) {
  return o(Hn, {
    text: e,
    multiline: true,
    children: o("span", {
      className: G.infoBtn,
      children: o(Js, { size: 14 }),
    }),
  });
}
function lu({ isOpen: e, onClose: t }) {
  const n = Vs();
  const [r, s] = x(false);
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
      const l = await La.pay();
      if (l.error) {
        u?.close();
        Je.error(l.error);
        return;
      }

      if (l.confirmationUrl && u) {
        u.location.href = l.confirmationUrl;
      } else if (l.confirmationUrl) {
        window.location.href = l.confirmationUrl;
      }
    } catch (l) {
      u?.close();
      Je.error(l?.message || "Ошибка при создании платежа");
    } finally {
      s(false);
    }
  };

  return lt(
    o(wt, {
      onClose: t,
      showHeader: false,
      frameless: true,
      className: G.modal,
      children: [
        o(Ol, {}),
        o("div", {
          className: G.sub,
          children: [
            o("div", {
              className: G.top,
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
                        o(Ye, { src: n?.avatar || null, size: "sm" }),
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
                            o("div", {
                              className: G.dim,
                              children: "только что",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o("video", {
              src: `/assets/nuksta/nuksta-${
                document.documentElement.getAttribute("data-theme") === "light"
                  ? "light"
                  : "dark"
              }.mp4`,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              width: 370,
              height: 268,
              className: G.promoVideo,
            }),
            o("div", {
              className: G.bottom,
              children: [
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
                        o(Ar, {
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
                        o(Ar, {
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
                              children: o(Rc, { size: 20 }),
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
                              children: o(Bc, { size: 20 }),
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
                              children: o(Ec, { size: 20 }),
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
                          children: `Оплатить ${a}₽ на месяц`,
                        }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    document.body
  );
}
const uu = "z8EyAYBL";
const du = "Y3JzbYs0";
const hu = "XG8iIx1m";
const fu = "lqZNoMkv";
const Kt = {
  sidebar: uu,
  sidebarContent: du,
  sidebarBottom: hu,
  legalLinks: fu,
};

const mu = () => {
  const [e] = ia();
  return (
    Ne(() => {
      const n = e.url || "/";
      return qc.some((r) => n.startsWith(r));
    }, [e.url]) ||
    o("aside", {
      className: Kt.sidebar,
      children: [
        o("div", { className: Kt.sidebarContent }),
        o("div", {
          className: Kt.sidebarBottom,
          children: [
            o("ul", {
              className: Kt.legalLinks,
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
              className: Kt.copyright,
              children: "© 2026 ООО «ИТД»",
            }),
          ],
        }),
      ],
    })
  );
};

const ri = Gt(null);
let pu = 0;
function gu({ children: e }) {
  const [t, n] = x([]);

  const r = S((a) => {
    const c = `modal-${++pu}`;

    n((u) => [...u, { id: c, component: a }]);

    return c;
  }, []);

  const s = S((a) => {
    n((c) => (a ? c.filter((u) => u.id !== a) : c.slice(0, -1)));
  }, []);

  const i = S(() => {
    n([]);
  }, []);

  U(() => {
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

  return o(ri.Provider, {
    value: { openModal: r, closeModal: s, closeAllModals: i },
    children: [
      e,
      t.length > 0 &&
        lt(
          o(Ee, {
            children: t.map(({ id: a, component: c }) =>
              o("div", { children: c }, a)
            ),
          }),
          document.body
        ),
    ],
  });
}
function Xn() {
  const e = jn(ri);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const vu = "eVYjVkOA";
const _u = "VH5uACo-";
const wu = "bTnQQZzL";
const yu = "J-wdczzJ";
const Cu = "-aJk1548";
const Tu = "GJ-316Mz";
const Lr = { spinner: vu, spin: _u, xs: wu, sm: yu, md: Cu, lg: Tu };
function yt({ size: e = "md", className: t }) {
  const n = [Lr.spinner, Lr[e], t].filter(Boolean).join(" ");
  return o("div", { className: n, children: o(Qs, {}) });
}
const Nu = "WsNIl9yN";
const ku = "s-rIVNft";
const Eu = "QJCDyxuF";
const bu = "idj8YT1-";
const Su = "PYBTadOt";
const Ru = "_0RWSXOse";
const Iu = "X3An-GSw";
const Pu = "BCtviEiQ";
const xu = "kZamU7XS";
const Au = "FVEEba1t";
const Lu = "_2NIyBgLE";
const Ou = "IRuH4aXh";

const Ft = {
  button: Nu,
  primary: ku,
  secondary: Eu,
  ghost: bu,
  accent: Su,
  danger: Ru,
  sm: Iu,
  md: Pu,
  lg: xu,
  fullWidth: Au,
  iconOnly: Lu,
  loading: Ou,
};

function De({
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
    Ft.button,
    Ft[t],
    Ft[n],
    r && Ft.fullWidth,
    s && Ft.iconOnly,
    i && Ft.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return o("button", {
    type: c,
    className: h,
    disabled: u || i,
    ...l,
    children: i ? o(yt, { size: "sm" }) : e,
  });
}
const Mu = "THCvAwre";
const $u = "sRlzWhtw";
const Du = "pitt3a-W";
const Bu = "tBAzXrnN";
const Uu = "ZpD0zMWZ";
const Fu = "_4WT1OTu3";
const Hu = "MILRHLTo";
const Vu = "nCy8Y3ZB";
const Wu = "Ib0lgBwH";
const ju = "V-L-u7tm";
const zu = "JALjGN2Z";

const Xe = {
  picker: Mu,
  searchFloating: $u,
  searchInput: Du,
  skinTonePopup: Bu,
  skinVariantButton: Uu,
  skinVariantImage: Fu,
  content: Hu,
  categoryTitle: Vu,
  emojiGrid: Wu,
  emojiButton: ju,
  noResults: zu,
};

const qu = [
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

const Gu = ["", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"];
const si = "emoji-picker-recent";
const $n = 32;

const Xu = (e) => {
  try {
    return String.fromCodePoint(...e.split("-").map((t) => parseInt(t, 16)));
  } catch {
    return "";
  }
};

const Xo = (e) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${e.toLowerCase()}.png`;

const Or = () => {
  try {
    const e = localStorage.getItem(si);
    return e ? JSON.parse(e) : [];
  } catch {
    return [];
  }
};

const Yu = (e) => {
  try {
    localStorage.setItem(si, JSON.stringify(e.slice(0, $n)));
  } catch {}
};

const Zu = (e) => {
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

let Nn = null;

const Ku = () => {
  const [e, t] = x(Nn);
  const [n, r] = x(!Nn);

  U(() => {
    if (Nn) {
      return;
    }
    (async () => {
      try {
        const i = await de(() => import("./emoji-data-DrtcpqC0.js"), []);

        const a = Zu(i.default);
        Nn = a;
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

const Ju = (e) => {
  const [t, n] = x([]);
  const r = R([]);
  U(() => {
    n(Or());
  }, []);

  const s = Ne(
    () =>
      t
        .slice(0, $n)
        .map((c) => e.find((u) => u.unified === c))
        .filter((c) => c !== undefined),
    [t, e]
  );

  const i = S((c) => {
    if (!r.current.includes(c)) {
      r.current.push(c);
    }
  }, []);

  const a = S(() => {
    if (r.current.length === 0) {
      return;
    }
    const c = Or();
    const l = [...r.current];
    for (const h of c) {
      if (!l.includes(h)) {
        l.push(h);
      }
    }
    Yu(l.slice(0, $n));
    n(l.slice(0, $n));
    r.current = [];
  }, []);

  return { recentEmojis: s, addRecentEmoji: i, flushRecentEmojis: a };
};

const Qu = ({ emoji: e, onClick: t }) =>
  o("button", {
    className: Xe.emojiButton,
    onClick: t,
    children: o("img", {
      src: Xo(e.unified),
      alt: e.short_name,
      loading: "lazy",
    }),
  });

const ii = (e) => {
  const t = [e.unified];
  if (e.skin_variations) {
    for (const n of Gu.slice(1)) {
      const r = e.skin_variations[n];

      if (r) {
        t.push(r);
      }
    }
  }
  return t;
};

const ed = ({ popup: e, onSelect: t, onClose: n }) => {
  const r = R(null);
  const s = ii(e.emoji);

  U(() => {
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
    className: Xe.skinTonePopup,
    style: { left: e.x, top: e.y },
    children: s.map((i) =>
      o(
        "button",
        {
          className: Xe.skinVariantButton,
          onClick: () => t(i, e.emoji.short_name),
          children: o("img", {
            src: Xo(i),
            alt: "",
            className: Xe.skinVariantImage,
          }),
        },
        i
      )
    ),
  });
};

const ai = ({ emojis: e, onEmojiClick: t }) =>
  o("div", {
    className: Xe.emojiGrid,
    children: e.map((n) =>
      o(Qu, { emoji: n, onClick: (r) => t(n, r) }, n.unified)
    ),
  });

const td = ({ name: e, emojis: t, onEmojiClick: n, sectionRef: r }) =>
  o("div", {
    ref: r,
    className: Xe.categorySection,
    children: [
      o("div", { className: Xe.categoryTitle, children: e }),
      o(ai, { emojis: t, onEmojiClick: n }),
    ],
  });

const nd = ({ value: e, onChange: t, placeholder: n = "Search emojis..." }) =>
  o("div", {
    className: Xe.searchFloating,
    children: o("input", {
      type: "text",
      className: Xe.searchInput,
      placeholder: n,
      value: e,
      onInput: (r) => t(r.target.value),
    }),
  });

const od = ({
  onEmojiSelect: e,
  onClose: t,
  width: n = 280,
  height: r = 380,
  excludeCategories: s = [],
}) => {
  const [i, a] = x("apple");
  const [c, u] = x("");
  const [l, h] = x(null);
  const d = R(null);
  const f = R(null);
  const m = R({});
  const { all: y, byCategory: p, isLoading: v } = Ku();
  const { recentEmojis: _, addRecentEmoji: g, flushRecentEmojis: w } = Ju(y);
  U(
    () => () => {
      w();
      t?.();
    },
    [w, t]
  );

  const E = Ne(() => {
    if (!c.trim()) {
      return null;
    }
    const T = c.toLowerCase();
    return y
      .filter(
        (A) =>
          !s.includes(A.category) &&
          A.short_names.some((I) => I.toLowerCase().includes(T))
      )
      .slice(0, 100);
  }, [c, y, s]);

  const C = Ne(() => {
    if (i === "apple") {
      const T = [];

      if (_.length > 0) {
        T.push({ id: "recent", name: "Recent", emojis: _ });
      }

      for (const A of qu) {
        if (s.includes(A)) {
          continue;
        }
        const I = p[A] || [];

        if (I.length !== 0) {
          T.push({ id: A, name: A.split(" & ")[0], emojis: I });
        }
      }
      return T;
    }
    return [];
  }, [i, _, p, s]);

  const b = S((T, A) => {
    if (ii(T).length > 1) {
      const A_currentTarget = A.currentTarget;
      const P = f.current?.getBoundingClientRect();
      const W = A_currentTarget.getBoundingClientRect();
      if (P) {
        const J = W.left - P.left + W.width / 2;
        const X = W.top - P.top - 60;
        h({ emoji: T, x: J, y: X });
      }
      return;
    }
    N(T.unified, T.short_name);
  }, []);

  const N = S(
    (T, A) => {
      g(T);
      h(null);
      e({ unified: T, emoji: Xu(T), name: A, imageUrl: Xo(T) });
    },
    [e, g]
  );

  const k = () =>
    v
      ? o(yt, {})
      : c && E
      ? E.length === 0
        ? o("div", { className: Xe.noResults, children: "No emojis found" })
        : o(ai, { emojis: E, onEmojiClick: b })
      : o(Ee, {
          children: C.map((T) =>
            o(
              td,
              {
                name: T.name,
                emojis: T.emojis,
                onEmojiClick: b,
                sectionRef: (A) => {
                  m.current[T.id] = A;
                },
              },
              T.id
            )
          ),
        });

  return o("div", {
    className: Xe.picker,
    style: { width: n, height: r },
    ref: f,
    children: [
      l && o(ed, { popup: l, onSelect: N, onClose: () => h(null) }),
      o("div", { className: Xe.content, ref: d, children: k() }),
      o(nd, { value: c, onChange: u }),
    ],
  });
};

const rd = "-cIO9SLG";
const sd = "JNwvD1Vo";
const id = "IHofJbwy";
const oo = { wrapper: rd, popup: sd, closing: id };
const Mr = 280;
const $r = 380;
const ro = 8;
const ad = 100;
const Dr = 150;
const cd = 150;
function Yo({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [r, s] = x(false);
  const [i, a] = x(false);
  const [c, u] = x(null);
  const l = R(null);
  const h = R(null);
  const d = R(null);
  const f = R(null);
  const m = R(null);
  const y = R(null);

  const p = S(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }
    const k = l_current.getBoundingClientRect();

    const { innerHeight, innerWidth } = window;

    const I = innerHeight - k.bottom;
    const D = innerWidth - k.left;
    const k_right = k.right;
    const W = I >= $r + ro ? "bottom" : "top";
    const J = D >= Mr || D > k_right ? "left" : "right";
    let X;
    let te;

    if (W === "top") {
      X = k.top - $r - ro;
    } else {
      X = k.bottom + ro;
    }

    if (J === "left") {
      te = k.left;
    } else {
      te = k.right - Mr;
    }

    u({
      top: X,
      left: te,
      transformOrigin: `${W === "top" ? "bottom" : "top"} ${
        J === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const v = S(() => {
    if (!r && !i) {
      if (!i) {
        p();
        s(true);
      }
    }
  }, [r, i, p]);

  const _ = S(() => {
    if (r && !i) {
      if (!i) {
        a(true);

        y.current = window.setTimeout(() => {
          s(false);
          a(false);
        }, cd);
      }
    }
  }, [r, i]);

  const g = () => {
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

    if (!r) {
      f.current = window.setTimeout(() => {
        v();
      }, ad);
    }
  };

  const w = () => {
    if (f.current) {
      clearTimeout(f.current);
      f.current = null;
    }

    m.current = window.setTimeout(() => {
      _();
    }, Dr);
  };

  U(
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

  const E = () => {
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

  const C = () => {
    m.current = window.setTimeout(() => {
      _();
    }, Dr);
  };

  const b = (N) => {
    N.preventDefault();
  };

  return o("div", {
    ref: h,
    className: oo.wrapper,
    onMouseEnter: g,
    onMouseLeave: w,
    onMouseDown: b,
    children: [
      o("button", {
        ref: l,
        className: t,
        title: "Добавить эмоджи",
        children: o(Hc, { size: n }),
      }),
      r &&
        c &&
        lt(
          o("div", {
            ref: d,
            className: `${oo.popup} ${i ? oo.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: E,
            onMouseLeave: C,
            onMouseDown: b,
            children: o(od, { onEmojiSelect: e }),
          }),
          document.body
        ),
    ],
  });
}
const ld = "_2sS6K7hx";
const ud = "WGDOlmRO";
const dd = "hvpitmZY";
const hd = "BStIlELw";
const fd = "aY94etMT";
const md = "rPynk8pw";
const pd = "BOAqDnoc";
const gd = "haxq9tnV";
const vd = "_913-arE-";
const _d = "_76HhedQ0";
const wd = "_7PQB1LTO";
const yd = "UnOw5SXP";
const Cd = "s594n2Yt";
const Td = "nOfp-no-";
const Nd = "PRj4ZKu-";
const kd = "_0a-n56Kv";

const Le = {
  editor: ld,
  empty: ud,
  bold: dd,
  italic: hd,
  underline: fd,
  strike: md,
  spoiler: pd,
  monospace: gd,
  quote: vd,
  link: _d,
  menu: wd,
  buttons: yd,
  button: Cd,
  linkForm: Td,
  linkInput: Nd,
  linkSubmit: kd,
};

const Vn = {
  bold: Le.bold,
  italic: Le.italic,
  underline: Le.underline,
  strike: Le.strike,
  spoiler: Le.spoiler,
  monospace: Le.monospace,
  quote: Le.quote,
  link: Le.link,
};

function so(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function Ed(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function bd(e) {
  return e !== "mention" && e !== "hashtag";
}
function Br(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const r of t) {
    if (!bd(r.type)) {
      continue;
    }
    const s = Vn[r.type];
    const i = r.type === "link" ? ` data-url="${Ed(r.url)}"` : "";
    n = `<span class="${s}"${i}>${n}</span>`;
  }
  return n;
}
function Sd(e, t, n) {
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
function Rd(e, t) {
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
function Id(e) {
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
      for (const [l, h] of Object.entries(Vn)) {
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
function Pd(e, t) {
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
function xd(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}

const Ad = [
  { type: "bold", icon: vc, title: "Жирный" },
  { type: "italic", icon: wc, title: "Курсив" },
  { type: "underline", icon: Nc, title: "Подчёркнутый" },
  { type: "strike", icon: Tc, title: "Зачёркнутый" },
  { type: "spoiler", icon: Cc, title: "Спойлер" },
  { type: "monospace", icon: _c, title: "Моноширинный" },
  { type: "quote", icon: yc, title: "Цитата" },
  { type: "link", icon: js, title: "Ссылка" },
];

const Yn = Rs(
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
    const y = R(null);
    const [p, v] = x(false);
    const [_, g] = x({ x: 0, y: 0 });
    const [w, E] = x(false);
    const [C, b] = x("");
    const N = R(null);
    const k = R(null);
    const T = R(null);
    const A = R(false);
    const I = R(false);
    const D = R(t);
    const P = R(n);
    const W = R(r);

    U(() => {
      D.current = t;
      P.current = n;
      W.current = r;
    }, [t, n, r]);

    Do(
      m,
      () => ({
        insertText: (M) => {
          const y_current = y.current;
          if (!y_current) {
            return;
          }
          y_current.focus();
          const $ = window.getSelection();
          if (!$) {
            return;
          }
          let Z = 0;
          if ($.rangeCount > 0) {
            const re = $.getRangeAt(0);
            Z = Sd(y_current, re.startContainer, re.startOffset);
          }
          const D_current = D.current;
          const P_current = P.current;
          const oe = D_current.slice(0, Z) + M + D_current.slice(Z);

          const ie = P_current.map((re) =>
            re.offset >= Z
              ? { ...re, offset: re.offset + M.length }
              : re.offset + re.length > Z
              ? { ...re, length: re.length + M.length }
              : re
          );

          I.current = true;
          D.current = oe;
          P.current = ie;
          const pe = document.createTextNode(M);
          if ($.rangeCount > 0) {
            const re = $.getRangeAt(0);
            re.deleteContents();
            re.insertNode(pe);
            re.setStartAfter(pe);
            re.setEndAfter(pe);
            $.removeAllRanges();
            $.addRange(re);
          }
          W.current(oe, ie);
        },

        focus: () => {
          y.current?.focus();
        },
      }),
      []
    );

    const J = S(() => {
      if (!t) {
        return "";
      }
      if (n.length === 0) {
        return so(t);
      }

      const M = [...n].sort((q, oe) => q.offset - oe.offset);

      const H = [];
      for (const q of M) {
        H.push({ pos: q.offset, type: "start", span: q });
        H.push({ pos: q.offset + q.length, type: "end", span: q });
      }
      H.sort((q, oe) =>
        q.pos !== oe.pos
          ? q.pos - oe.pos
          : q.type !== oe.type
          ? q.type === "end"
            ? -1
            : 1
          : 0
      );
      let $ = "";
      let Z = 0;
      const j = [];
      for (const q of H) {
        if (q.pos > Z) {
          const oe = t.substring(Z, q.pos);
          $ += Br(so(oe), j);
          Z = q.pos;
        }
        if (q.type === "start") {
          j.push(q.span);
        } else {
          const oe = j.indexOf(q.span);

          if (oe !== -1) {
            j.splice(oe, 1);
          }
        }
      }
      if (Z < t.length) {
        const q = t.substring(Z);
        $ += Br(so(q), j);
      }
      return $ || "<br>";
    }, [t, n]);

    U(() => {
      if (I.current) {
        I.current = false;
        return;
      }
      const y_current = y.current;
      if (!y_current || (document.activeElement === y_current && t !== "")) {
        return;
      }
      const H = J();

      if (y_current.innerHTML !== H) {
        y_current.innerHTML = H;
      }
    }, [J, t]);

    U(() => {
      if (a && y.current) {
        const y_current = y.current;
        y_current.focus();

        if (y_current.childNodes.length > 0) {
          const H = window.getSelection();
          if (H) {
            const $ = document.createRange();
            $.selectNodeContents(y_current);
            $.collapse(false);
            H.removeAllRanges();
            H.addRange($);
          }
        }
      }
    }, [a]);

    U(() => {
      if (w && k.current) {
        k.current.focus();
      }
    }, [w]);

    const X = S(
      (M) => {
        if (A.current) {
          return;
        }
        const y_current = y.current;
        if (!y_current) {
          return;
        }
        if (M?.data === " ") {
          const j = window.getSelection();
          if (j && j.rangeCount > 0) {
            const oe = j.getRangeAt(0).startContainer;
            let ie = null;
            let pe = oe;

            while (pe && pe !== y_current) {
              if (pe.nodeType === Node.ELEMENT_NODE) {
                const re = pe;
                if (re.tagName === "SPAN" && re.className) {
                  ie = re;
                  break;
                }
              }
              pe = pe.parentNode;
            }

            if (ie) {
              const re = ie.textContent || "";
              if (re.endsWith(" ")) {
                ie.textContent = re.slice(0, -1);
                const je = document.createTextNode(" ");
                ie.parentNode?.insertBefore(je, ie.nextSibling);
                const be = document.createRange();
                be.setStartAfter(je);
                be.setEndAfter(je);
                j.removeAllRanges();
                j.addRange(be);
              }
            }
          }
        }
        const $ = y_current.innerText.replace(/\n$/, "");
        if ($.length > i) {
          const j = $.substring(0, i);
          I.current = true;
          r(j, Rd(n, j));
          return;
        }
        const Z = Id(y_current);
        I.current = true;
        r($, Z);
      },
      [i, r, n]
    );

    const te = S(
      (M) => {
        if (d) {
          return;
        }
        const H = window.getSelection();
        if (!H || H.isCollapsed) {
          return;
        }
        M.preventDefault();
        T.current = H.getRangeAt(0).cloneRange();

        const $ = Math.max(
          10,
          Math.min(M.clientX - 150, window.innerWidth - 310)
        );

        const Z = Math.max(10, M.clientY - 50);
        g({ x: $, y: Z });
        v(true);
      },
      [d]
    );

    const ce = S(
      (M) => {
        M.preventDefault();

        if (f && M.clipboardData?.files?.length) {
          const q = Array.from(M.clipboardData.files).filter((oe) =>
            oe.type.startsWith("image/")
          );
          if (q.length > 0) {
            f(q);
            return;
          }
        }

        const H = M.clipboardData?.getData("text/plain") || "";
        if (!H) {
          return;
        }
        const $ = window.getSelection();
        if (!$ || !$.rangeCount) {
          return;
        }
        const Z = $.getRangeAt(0);
        Z.deleteContents();
        const j = document.createTextNode(H);
        Z.insertNode(j);
        Z.setStartAfter(j);
        Z.setEndAfter(j);
        $.removeAllRanges();
        $.addRange(Z);
        X();
      },
      [X, f]
    );

    const Y = S(() => {
      const y_current = y.current;
      if (y_current && !D.current) {
        const H = window.getSelection();
        if (H) {
          const $ = document.createRange();
          $.setStart(y_current, 0);
          $.collapse(true);
          H.removeAllRanges();
          H.addRange($);
        }
      }
    }, []);

    const Q = S(
      (M) => {
        if (M.key === "Enter" && !M.shiftKey && h) {
          M.preventDefault();
          h();
          return;
        }
        if (!d && (M.ctrlKey || M.metaKey)) {
          let H = null;
          switch (M.key.toLowerCase()) {
            case "b": {
              H = "bold";
              break;
            }
            case "i": {
              H = "italic";
              break;
            }
            case "u": {
              H = "underline";
              break;
            }
          }

          if (H) {
            M.preventDefault();
            O(H);
          }
        }
      },
      [h, d]
    );

    const O = S(
      (M, H) => {
        const y_current = y.current;
        if (!y_current) {
          return;
        }
        const Z = window.getSelection();
        if (
          !Z ||
          (T.current && (Z.removeAllRanges(), Z.addRange(T.current)),
          Z.isCollapsed)
        ) {
          return;
        }
        const j = Z.getRangeAt(0);
        const q = document.createElement("span");
        q.className = Vn[M];

        if (M === "link" && H) {
          q.dataset.url = H;
        }

        const oe = Pd(j.commonAncestorContainer, Vn[M]);
        if (oe) {
          xd(oe);
        } else {
          try {
            j.surroundContents(q);
          } catch {
            const ie = j.extractContents();
            q.appendChild(ie);
            j.insertNode(q);
          }
        }
        X();
        v(false);
        E(false);
        b("");
        T.current = null;
        y_current.focus();
      },
      [X]
    );

    const L = S(
      (M) => {
        if (M === "link") {
          E(true);
        } else {
          O(M);
        }
      },
      [O]
    );

    const z = S(
      (M) => {
        M.preventDefault();

        if (C.trim()) {
          O("link", C.trim());
        }
      },
      [O, C]
    );

    U(() => {
      if (!p) {
        return;
      }

      const M = ($) => {
        if (N.current && !N.current.contains($.target)) {
          v(false);
          E(false);
          b("");
          T.current = null;
        }
      };

      const H = () => {
        v(false);
        E(false);
        b("");
        T.current = null;
      };

      document.addEventListener("mousedown", M);
      window.addEventListener("scroll", H, true);

      return () => {
        document.removeEventListener("mousedown", M);
        window.removeEventListener("scroll", H, true);
      };
    }, [p]);
    const V = !t;
    return o(Ee, {
      children: [
        o("div", {
          ref: y,
          className: `${Le.editor} ${c} ${V ? Le.empty : ""}`,
          contentEditable: true,
          "data-placeholder": s,
          onInput: (M) => X(M),
          onFocus: Y,
          onPaste: ce,
          onContextMenu: te,
          onKeyDown: Q,
          onCompositionStart: () => {
            A.current = true;
          },
          onCompositionEnd: () => {
            A.current = false;
            X();
          },
          style: { minHeight: u, maxHeight: l },
        }),
        p &&
          lt(
            o("div", {
              ref: N,
              className: Le.menu,
              style: { left: _.x, top: _.y },
              children: w
                ? o("form", {
                    className: Le.linkForm,
                    onSubmit: z,
                    children: [
                      o("input", {
                        ref: k,
                        type: "url",
                        className: Le.linkInput,
                        placeholder: "https://...",
                        value: C,
                        onInput: (M) => b(M.target.value),
                      }),
                      o("button", {
                        type: "submit",
                        className: Le.linkSubmit,
                        disabled: !C.trim(),
                        children: "OK",
                      }),
                    ],
                  })
                : o("div", {
                    className: Le.buttons,
                    children: Ad.map(({ type: M, icon: H, title: $ }) =>
                      o(
                        "button",
                        {
                          type: "button",
                          className: Le.button,
                          onClick: () => L(M),
                          title: $,
                          children: o(H, { size: 16 }),
                        },
                        M
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

const Ld = "u13FLJio";
const Od = "bToZwjfv";
const Md = "eB--cks6";
const $d = "_9ohK9-tN";
const Dd = "j2Wceqpa";
const Bd = "SKnXo-cA";
const Ud = "_8wZrlhZa";
const Fd = "ywO8uWzl";
const Hd = "q4IPCH5G";
const Vd = "iqaeIAPL";
const Wd = "YGC2tIXC";
const jd = "Hvh4qKiC";
const zd = "-bZAaxpL";
const qd = "mY50rIUo";
const Gd = "SVQ04Pz4";
const Xd = "-aTjRl6d";
const Yd = "vskBTYBr";
const Zd = "_0haeBjBl";
const Kd = "m4JSOoi7";
const Jd = "xuKvww1d";
const Qd = "GMSlkrum";
const eh = "T1UhUe7-";
const th = "KPX--Htj";
const nh = "UDcyRX73";
const oh = "G9MjuFO7";
const rh = "yAXdi86A";
const sh = "_5EoTr5dx";
const ih = "_2aj24MP-";
const ah = "_5JkW0FiQ";
const ch = "X4D-Hg95";
const lh = "WafaU2-d";
const uh = "eb-u7Ezx";
const dh = "u52eDQyv";
const hh = "V-0z6M2W";
const fh = "_7-fvD6Zx";

const se = {
  form: Ld,
  dragActive: Od,
  whatsNew: Md,
  editor: $d,
  dragOverlay: Dd,
  attachments: Bd,
  attachmentPreview: Ud,
  uploading: Fd,
  uploadError: Hd,
  videoPreviewWrapper: Vd,
  videoPlayIcon: Wd,
  uploadOverlay: jd,
  spinner: zd,
  errorOverlay: qd,
  errorText: Gd,
  removeAttachment: Xd,
  actions: Yd,
  mediaButtons: Zd,
  mediaButton: Kd,
  submitGroup: Jd,
  charCount: Qd,
  error: eh,
  pollContainer: th,
  pollHeader: nh,
  pollTitle: oh,
  pollClose: rh,
  pollQuestion: sh,
  pollOptions: ih,
  pollOptionRow: ah,
  pollOption: ch,
  removeOption: lh,
  addOption: uh,
  pollFooter: dh,
  pollToggle: hh,
  active: fh,
};

function Ur({ src: e, type: t }) {
  return t === "video"
    ? o("div", {
        className: se.videoPreviewWrapper,
        children: [
          o("video", { src: e, preload: "metadata" }),
          o("div", {
            className: se.videoPlayIcon,
            children: o(bc, { size: 24 }),
          }),
        ],
      })
    : o("img", { src: e, alt: "" });
}
function ci({ images: e, uploadingImages: t, onRemove: n }) {
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
                  o(Ur, { src: s.previewUrl, type: s.type }),
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
                  o(Ur, { src: s.previewUrl, type: s.type }),
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
const _t = {
  MAX_CHARS: 1000 /* 1e3 */,
  MIN_POLL_OPTIONS: 2,
  MAX_POLL_OPTIONS: 10,
  MAX_POLL_QUESTION_LENGTH: 200,
  MAX_POLL_OPTION_LENGTH: 100,
  MAX_TEXTAREA_HEIGHT: 400,
};
function mh({
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
                e.options.length > _t.MIN_POLL_OPTIONS &&
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
      e.options.length < _t.MAX_POLL_OPTIONS &&
        o("button", {
          className: se.addOption,
          onClick: r,
          children: [o(ti, {}), o("span", { children: "Добавить вариант" })],
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
const io = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};
function ph() {
  const [e, t] = x(false);
  const [n, r] = x(io);

  const s = S((y) => {
    if (y.length <= _t.MAX_POLL_QUESTION_LENGTH) {
      r((p) => ({
        ...p,
        question: y,
      }));
    }
  }, []);

  const i = S((y, p) => {
    if (p.length <= _t.MAX_POLL_OPTION_LENGTH) {
      r((v) => ({
        ...v,
        options: v.options.map((_) => (_.id === y ? { ..._, text: p } : _)),
      }));
    }
  }, []);

  const a = S(() => {
    if (n.options.length < _t.MAX_POLL_OPTIONS) {
      r((y) => ({
        ...y,
        options: [...y.options, { id: Date.now().toString(), text: "" }],
      }));
    }
  }, [n.options.length]);

  const c = S(
    (y) => {
      if (n.options.length > _t.MIN_POLL_OPTIONS) {
        r((p) => ({
          ...p,
          options: p.options.filter((v) => v.id !== y),
        }));
      }
    },
    [n.options.length]
  );

  const u = S(() => {
    r((y) => ({
      ...y,
      multipleChoice: !y.multipleChoice,
    }));
  }, []);

  const l = S(() => {
    t(false);
    r(io);
  }, []);

  const h = S(() => {
    t((y) => !y);
  }, []);

  const d = S(() => {
    if (!e) {
      return true;
    }
    const y = n.question.trim().length > 0;

    const p = n.options.filter((v) => v.text.trim().length > 0);

    return y && p.length >= _t.MIN_POLL_OPTIONS;
  }, [e, n]);

  const f = S(() => {
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

  const m = S(() => {
    t(false);
    r(io);
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
const gh = {
  [fe.CONTENT_MODERATION_FAILED]: "Изображение содержит запрещённый контент",
  [fe.FILE_TOO_LARGE]: "Файл слишком большой",
  [fe.UNSUPPORTED_FILE_TYPE]: "Неподдерживаемый формат файла",
  [fe.UPLOAD_FAILED]: "Не удалось загрузить файл",
  [fe.VIDEO_REQUIRES_VERIFICATION]:
    "Загрузка видео доступна только верифицированным пользователям",
  [fe.RATE_LIMIT_EXCEEDED]: "Слишком много запросов. Попробуйте позже",
  [fe.UNAUTHORIZED]: "Требуется авторизация",
  [fe.ACCESS_DENIED]: "Доступ запрещён",
  [fe.NETWORK_ERROR]: "Ошибка сети. Проверьте подключение",
  [fe.TIMEOUT]: "Превышено время ожидания",
};
function vh(e, t = "Произошла ошибка") {
  return e ? gh[e] ?? t : t;
}
function li(e = 10, t = false) {
  const [n, r] = x([]);
  const [s, i] = x([]);
  const a = R(null);
  const c = R(n);
  const u = R(s);
  c.current = n;
  u.current = s;

  U(
    () => () => {
      c.current.forEach((w) => URL.revokeObjectURL(w.previewUrl));

      u.current.forEach((w) => URL.revokeObjectURL(w.previewUrl));
    },
    []
  );

  const l = s.length > 0;

  const h =
    n.some((w) => w.type === "video") || s.some((w) => w.type === "video");

  const d =
    n.some((w) => w.type === "image") || s.some((w) => w.type === "image");

  const f = S(() => {
    a.current?.click();
  }, []);

  const m = S(
    async (w) => {
      const E = Ht.isValidVideoType(w);
      const C = Ht.isValidImageType(w);
      if (E && !t) {
        Je.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!C && !E) {
        Je.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const u_current = u.current;

      const k =
        c_current.some((P) => P.type === "video") ||
        u_current.some((P) => P.type === "video");

      const T =
        c_current.some((P) => P.type === "image") ||
        u_current.some((P) => P.type === "image");

      if (E && T) {
        Je.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (C && k) {
        Je.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (E && k) {
        Je.error("Можно загрузить только 1 видео");
        return;
      }
      const A = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const I = URL.createObjectURL(w);
      const D = E ? "video" : "image";
      i((P) => [...P, { id: A, file: w, previewUrl: I, progress: 0, type: D }]);
      try {
        const P = await Ht.uploadMedia(w);

        i((W) => W.filter((J) => J.id !== A));

        r((W) => [
          ...W,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: P.id,
            url: P.url,
            previewUrl: I,
            type: D,
          },
        ]);
      } catch (P) {
        let W = "Ошибка загрузки";

        if (Ie(P)) {
          W = vh(P.code, P.message);
        } else if (P instanceof Error) {
          W = P.message;
        }

        Je.error(W);

        i((J) => J.filter((X) => X.id !== A));

        URL.revokeObjectURL(I);
      }
    },
    [t]
  );

  const y = S(
    (w) => {
      const w_target = w.target;
      const w_target_files = w_target.files;
      if (!w_target_files || w_target_files.length === 0) {
        return;
      }
      const b = n.length + s.length;
      const N = e - b;
      if (N <= 0) {
        return;
      }
      Array.from(w_target_files).slice(0, N).forEach(m);
      w_target.value = "";
    },
    [n.length, s.length, e, m]
  );

  const p = S((w) => {
    r((E) => {
      const C = E.find((b) => b.id === w);

      if (C) {
        URL.revokeObjectURL(C.previewUrl);
      }

      return E.filter((b) => b.id !== w);
    });

    i((E) => {
      const C = E.find((b) => b.id === w);

      if (C) {
        URL.revokeObjectURL(C.previewUrl);
      }

      return E.filter((b) => b.id !== w);
    });
  }, []);

  const v = S(
    (w) => {
      const E = w.filter((N) =>
        t ? Ht.isValidMediaType(N) : Ht.isValidImageType(N)
      );
      if (E.length === 0) {
        return;
      }
      const C = c.current.length + u.current.length;
      const b = e - C;

      if (b > 0) {
        E.slice(0, b).forEach(m);
      }
    },
    [e, m, t]
  );

  const _ = S(
    async (w) => {
      const [E, C] = w.split(",");
      const b = E.match(/:(.*?);/)?.[1] || "image/png";
      const N = atob(C);
      const k = new Uint8Array(N.length);
      for (let I = 0; I < N.length; I++) {
        k[I] = N.charCodeAt(I);
      }
      const T = new Blob([k], { type: b });
      const A = new File([T], `drawing-${Date.now()}.png`, {
        type: "image/png",
      });
      m(A);
    },
    [m]
  );

  const g = S(() => {
    n.forEach((w) => URL.revokeObjectURL(w.previewUrl));

    s.forEach((w) => URL.revokeObjectURL(w.previewUrl));

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
    addImage: _,
    uploadFiles: v,
    clearAll: g,
    fileInputRef: a,
    handleFileChange: y,
  };
}
const _h = ve(() =>
  de(() => import("./index-D_oXFXhL.js"), []).then((e) => ({
    default: e.DrawingCanvas,
  }))
);
function wh({
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
  } = qn();

  const [l, h] = x(false);
  const [d, f] = x(false);
  const [m, y] = x(false);
  const p = R(0);
  const v = ut();
  const g = Vs()?.subscription?.isActive ?? false;

  const {
    images: w,
    uploadingImages: E,
    isUploading: C,
    hasVideo: b,
    openFilePicker: N,
    removeImage: k,
    addImage: T,
    uploadFiles: A,
    clearAll: I,
    fileInputRef: D,
    handleFileChange: P,
  } = li(10, g);

  const {
    isPollOpen: W,
    poll: J,
    togglePoll: X,
    handlePollQuestionChange: te,
    handlePollOptionChange: ce,
    handleAddPollOption: Y,
    handleRemovePollOption: Q,
    handleMultipleChoiceToggle: O,
    handleClosePoll: L,
    isPollValid: z,
    getPollData: V,
    resetPoll: M,
  } = ph();

  const H = _t.MAX_CHARS - r.length;
  const $ = H < 0;
  const Z = W && z();
  const j = w.length > 0 || E.length > 0;
  const q = r.trim().length > 0 || Z || Z || j;
  const oe = g ? `${bo},${Ia}` : bo;

  const ie = S(async () => {
    if (!(!q || $ || $ || C || $ || C || d)) {
      f(true);
      try {
        const ae = w.map((K) => ({
          mediaId: K.mediaId,
          url: K.url,
        }));
        await e?.(r, s, ae, V());
        u();
        I();
        M();
      } catch {
      } finally {
        f(false);
      }
    }
  }, [q, $, C, d, r, s, w, V, e, u, I, M]);

  const pe = S(
    (ae) => {
      T(ae);
    },
    [T]
  );

  const re = S(
    (ae) => {
      c(ae.emoji);
    },
    [c]
  );

  const je = S((ae) => {
    ae.preventDefault();
    ae.stopPropagation();
    p.current++;

    if (ae.dataTransfer?.types.includes("Files")) {
      y(true);
    }
  }, []);

  const be = S((ae) => {
    ae.preventDefault();
    ae.stopPropagation();
  }, []);

  const dt = S((ae) => {
    ae.preventDefault();
    ae.stopPropagation();
    p.current--;

    if (p.current === 0) {
      y(false);
    }
  }, []);

  const me = S(
    (ae) => {
      ae.preventDefault();
      ae.stopPropagation();
      p.current = 0;
      y(false);
      const K = ae.dataTransfer?.files;

      if (K && K.length > 0) {
        A(Array.from(K));
      }
    },
    [A]
  );

  return o("div", {
    className: `${se.form} ${m ? se.dragActive : ""}`,
    onDragEnter: je,
    onDragOver: be,
    onDragLeave: dt,
    onDrop: me,
    children: [
      m &&
        o("div", {
          className: se.dragOverlay,
          children: [
            o(Ks, { size: 32 }),
            o("span", {
              children: g ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      o("div", {
        className: se.whatsNew,
        children: o(Yn, {
          ref: i,
          value: r,
          spans: s,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: se.editor,
          minHeight: 40,
          maxHeight: _t.MAX_TEXTAREA_HEIGHT,
          onImagePaste: A,
        }),
      }),
      o(ci, { images: w, uploadingImages: E, onRemove: k }),
      o("input", {
        ref: D,
        type: "file",
        accept: oe,
        multiple: !b,
        onChange: P,
        style: { display: "none" },
      }),
      W &&
        o(mh, {
          poll: J,
          onQuestionChange: te,
          onOptionChange: ce,
          onAddOption: Y,
          onRemoveOption: Q,
          onMultipleChoiceToggle: O,
          onClose: L,
        }),
      o("div", {
        className: se.actions,
        children: [
          o("div", {
            className: se.mediaButtons,
            children: [
              o("button", {
                className: se.mediaButton,
                onClick: N,
                title: g ? "Добавить медиа" : "Добавить изображение",
                children: o(Xs, {}),
              }),
              !v &&
                o(Yo, { onEmojiSelect: re, buttonClassName: se.mediaButton }),
              o("button", {
                className: se.mediaButton,
                onClick: () => h(true),
                title: "Нарисовать",
                disabled: b,
                children: o(Uc, {}),
              }),
              o("button", {
                className: `${se.mediaButton} ${W ? se.active : ""}`,
                onClick: X,
                title: "Добавить опрос",
                children: o(Fc, {}),
              }),
            ],
          }),
          o("div", {
            className: se.submitGroup,
            children: [
              $ &&
                o("span", {
                  className: `${se.charCount} ${se.error}`,
                  children: H,
                }),
              o(De, {
                size: "lg",
                disabled: !q || $ || $ || C || $ || C || d,
                loading: d,
                onClick: ie,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      l &&
        o(Bt, {
          fallback: null,
          children: o(_h, {
            isOpen: l,
            onClose: () => h(false),
            onSave: pe,
            mode: "post",
          }),
        }),
    ],
  });
}
const yh = "lwYWxeEc";
const Ch = "Zld3xHDo";
const Th = "sMhdfH61";
const Nh = "_7pSn2GWe";
const kn = { content: yh, title: Ch, subtitle: Th, actions: Nh };
function kh({ displayName: e, onConfirm: t, onClose: n }) {
  return o(wt, {
    onClose: n,
    showHeader: false,
    children: o("div", {
      className: kn.content,
      children: [
        o("h2", { className: kn.title, children: "Отписаться?" }),
        o("p", {
          className: kn.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            o("strong", { children: e }),
            "?",
          ],
        }),
        o("div", {
          className: kn.actions,
          children: [
            o(De, {
              variant: "secondary",
              onClick: (r) => {
                r.stopPropagation();
                n();
              },
              children: "Отмена",
            }),
            o(De, {
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
const Eh = "JtDslUlB";
const bh = "ccJtOIg3";
const Sh = "jttdPuoT";
const Rh = "Ik3feOcb";
const Ih = "OWIVanqr";
const Ph = "ApLgDejC";
const xh = "wzYde9CM";
const Ah = "jjAXXJME";

const Nt = {
  underline: Eh,
  monospace: bh,
  quote: Sh,
  spoiler: Rh,
  revealed: Ih,
  link: Ph,
  mention: xh,
  hashtag: Ah,
};

function Lh(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function Oh(e) {
  if (!Lh(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const r = String.fromCharCode(...n);
  const s = btoa(r);
  return `/external?url=${encodeURIComponent(s)}`;
}
function ui({ text: e, spans: t = [], className: n = "" }) {
  const [r, s] = x(new Set());

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
        const y = new Set();
        let p;
        let v;
        let _;

        d.forEach((g) => {
          y.add(g.type);

          if (g.type === "link" && g.url) {
            p = g.url;
          }

          if (g.type === "mention" && (g.username || g.id)) {
            v = g.username || g.id;
          }

          if (g.type === "hashtag" && g.tag) {
            _ = g.tag;
          }
        });

        l.push({ text: m, styles: y, url: p, mentionId: v, hashtag: _ });
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
      u_text = o("span", { className: Nt.underline, children: u_text });
    }

    if (u.styles.has("strike")) {
      u_text = o("s", { children: u_text });
    }

    if (u.styles.has("monospace")) {
      u_text = o("code", { className: Nt.monospace, children: u_text });
    }

    if (u.styles.has("quote")) {
      u_text = o("span", { className: Nt.quote, children: u_text });
    }

    if (u.styles.has("spoiler")) {
      const d = r.has(l);
      u_text = o("span", {
        className: `${Nt.spoiler} ${d ? Nt.revealed : ""}`,
        onClick: (f) => a(f, l),
        children: u_text,
      });
    }

    if (u.styles.has("link") && u.url) {
      const d = Oh(u.url);
      u_text = o("a", {
        href: d,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Nt.link,
        onClick: (f) => f.stopPropagation(),
        children: u_text,
      });
    }
    if (u.styles.has("mention") && u.mentionId) {
      const d = `/@${u.mentionId}`;
      u_text = o("a", {
        href: d,
        className: Nt.mention,
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
        className: Nt.hashtag,
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
const Mh = "t6dMOE-t";
const $h = "dN7ncPvV";
const Dh = "goihPOfy";
const Bh = "_3cD3eUbW";
const Uh = "SWw4qjFC";
const Fh = "J5ZRq4aT";
const Hh = "zH6fnEQR";
const Vh = "OzZxDBjs";
const Wh = "r-v5forc";
const jh = "Azp1k6ER";
const zh = "_8AA-g-Mn";
const qh = "aaxVMk0e";
const Gh = "QUwLZbFH";
const Xh = "Fub6vefq";
const Yh = "Uvg1jJsO";
const Zh = "_9HuwvxSy";
const Kh = "_0-reqUdU";
const Jh = "yjejWG8w";
const Qh = "rW9UH9FX";
const ef = "AP0ro9mL";
const tf = "lc7iFAaZ";
const nf = "D7O8ZJMb";
const of = "-OyFh6KG";
const rf = "FVUgQZaF";

const le = {
  poll: Mh,
  disabled: $h,
  header: Dh,
  title: Bh,
  meta: Uh,
  voteCount: Fh,
  options: Hh,
  option: Vh,
  votingOption: Wh,
  preselected: jh,
  optionContent: zh,
  voted: qh,
  optionProgressWrapper: Gh,
  optionProgress: Xh,
  optionContentInverted: Yh,
  optionText: Zh,
  optionPercent: Kh,
  optionProgressSimple: Jh,
  checkmark: Qh,
  checkbox: ef,
  checkboxChecked: tf,
  submitBtn: nf,
  footer: of,
  revoteBtn: rf,
};

function sf({
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
  const [d, f] = x(r);

  const [m, y] = x(() =>
    i.length > 0 ? new Set(i) : s ? new Set([s]) : new Set()
  );

  const [p, v] = x(n);
  const [_, g] = x(t);
  const [w, E] = x(r);
  const [C, b] = x(false);
  const [N, k] = x(new Map());
  const T = R(new Map());

  const A = t.map((O) => `${O.id}:${O.votes}`).join(",");

  U(() => {
    g(t);
    v(n);
    f(r);

    if (i.length > 0) {
      y(new Set(i));
    } else {
      y(s ? new Set([s]) : new Set());
    }

    if (r && !C) {
      E(true);
    }
  }, [A, n, r, s, i.join(",")]);

  U(() => {
    if (r && T.current.size > 0) {
      const O = new Map();

      T.current.forEach((L, z) => {
        O.set(z, L.offsetWidth);
      });

      k(O);
    }
  }, [r]);

  const I = d && !C;

  const D = S(
    (O) => {
      if (h || I) {
        return;
      }
      if (a) {
        y((V) => {
          const M = new Set(V);

          if (M.has(O)) {
            M.delete(O);
          } else {
            M.add(O);
          }

          return M;
        });
        return;
      }
      const L = m.size > 0 ? Array.from(m)[0] : null;

      g((V) =>
        V.map((M) =>
          M.id === O
            ? { ...M, votes: M.votes + 1 }
            : M.id === L
            ? { ...M, votes: Math.max(0, M.votes - 1) }
            : M
        )
      );

      if (!d) {
        v((V) => V + 1);
      }

      y(new Set([O]));
      f(true);
      b(false);
      const z = c?.(O);

      if (z && typeof z.then == "function") {
        z.then((V) => {
          if (V) {
            W(V);
          }
        });
      }

      J();
    },
    [h, I, a, m, d, c]
  );

  const P = S(() => {
    if (m.size === 0) {
      return;
    }
    const O = Array.from(m);

    g((z) =>
      z.map((V) => (O.includes(V.id) ? { ...V, votes: V.votes + 1 } : V))
    );

    if (!d) {
      v((z) => z + 1);
    }

    f(true);
    b(false);
    const L = u?.(O);

    if (L && typeof L.then == "function") {
      L.then((z) => {
        if (z) {
          W(z);
        }
      });
    }

    J();
  }, [m, d, u]);

  const W = (O) => {
    const L = (O.options ?? []).map((z) => ({
      id: z.id,
      text: z.text,
      votes: z.votesCount ?? z.voteCount ?? z.votes ?? 0,
    }));
    g(L);
    v(O.totalVotes ?? 0);

    if (O.votedOptionIds && O.votedOptionIds.length > 0) {
      y(new Set(O.votedOptionIds));
    }
  };

  const J = () => {
    requestAnimationFrame(() => {
      const O = new Map();

      T.current.forEach((L, z) => {
        O.set(z, L.offsetWidth);
      });

      k(O);

      requestAnimationFrame(() => {
        E(true);
      });
    });
  };

  const X = () => {
    b(true);
    E(false);
  };

  const te = () => {
    b(false);
    E(true);
  };

  const ce = (O) => (p === 0 ? 0 : Math.round((O / p) * 100));

  const Y = (O) =>
    O === 1 ? "1 голос" : O >= 2 && O <= 4 ? `${O} голоса` : `${O} голосов`;

  const Q = (O) => {
    O.stopPropagation();
  };

  return o("div", {
    className: `${le.poll} ${h ? le.disabled : ""} ${l || ""}`,
    onClick: Q,
    children: [
      o("div", {
        className: le.header,
        children: [
          o("span", { className: le.title, children: e }),
          d &&
            o("div", {
              className: le.meta,
              children: o("span", { className: le.voteCount, children: Y(p) }),
            }),
        ],
      }),
      o("div", {
        className: le.options,
        children: _.map((O) => {
          const L = ce(O.votes);
          const z = m.has(O.id);
          const V = w ? `${L}%` : "0%";
          const M =
            N.get(O.id) ||
            T.current.get(O.id)?.offsetWidth ||
            T.current.get(O.id)?.offsetWidth ||
            0;
          return I
            ? o(
                "div",
                {
                  ref: (H) => {
                    if (H) {
                      T.current.set(O.id, H);
                    }
                  },
                  className: `${le.option} ${le.voted} ${z ? le.selected : ""}`,
                  children: [
                    o("div", {
                      className: le.optionContent,
                      children: [
                        o("span", {
                          className: le.optionText,
                          children: [
                            z &&
                              o("span", {
                                className: le.checkmark,
                                children: "✓ ",
                              }),
                            O.text,
                          ],
                        }),
                        o("span", {
                          className: le.optionPercent,
                          children: [L, "%"],
                        }),
                      ],
                    }),
                    z &&
                      o("div", {
                        className: le.optionProgressWrapper,
                        style: { width: V },
                        children: [
                          o("div", { className: le.optionProgress }),
                          o("div", {
                            className: le.optionContentInverted,
                            style: { width: `${M}px` },
                            children: [
                              o("span", {
                                className: le.optionText,
                                children: [
                                  o("span", {
                                    className: le.checkmark,
                                    children: "✓ ",
                                  }),
                                  O.text,
                                ],
                              }),
                              o("span", {
                                className: le.optionPercent,
                                children: [L, "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    !z &&
                      o("div", {
                        className: le.optionProgressSimple,
                        style: { width: V },
                      }),
                  ],
                },
                O.id
              )
            : o(
                "div",
                {
                  ref: (H) => {
                    if (H) {
                      T.current.set(O.id, H);
                    }
                  },
                  className: `${le.option} ${le.votingOption} ${
                    z ? le.preselected : ""
                  }`,
                  onClick: () => D(O.id),
                  children: o("div", {
                    className: le.optionContent,
                    children: [
                      a &&
                        o("span", {
                          className: `${le.checkbox} ${
                            z ? le.checkboxChecked : ""
                          }`,
                          children: z && "✓",
                        }),
                      o("span", { className: le.optionText, children: O.text }),
                    ],
                  }),
                },
                O.id
              );
        }),
      }),
      a &&
        !d &&
        m.size > 0 &&
        !C &&
        o("button", {
          className: le.submitBtn,
          onClick: P,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        o("div", {
          className: le.footer,
          children: C
            ? o(Ee, {
                children: [
                  a &&
                    m.size > 0 &&
                    o("button", {
                      className: le.submitBtn,
                      onClick: P,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  o("button", {
                    className: le.revoteBtn,
                    onClick: te,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : o("button", {
                className: le.revoteBtn,
                onClick: X,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}
const af = "j8vGlZKp";
const cf = "y5-96lzw";
const lf = "lE9vN8i6";
const uf = "RrXA28Pz";
const df = "zrN-dIVb";
const hf = "KSS5ucx7";
const ff = "p-q2S5vA";
const mf = "-JVja8g3";
const pf = "HotXXjTO";
const gf = "uHbOpnIJ";
const vf = "q4tIq6LX";
const _f = "jG-llYOx";
const wf = "-nxjJLcz";
const yf = "FFjif68M";
const Cf = "jTVS0CtG";

const Ue = {
  userName: af,
  pinBadge: cf,
  text: lf,
  nukstaGlow: uf,
  xs: df,
  sm: hf,
  md: ff,
  lg: mf,
  pinWrapper: pf,
  pinClickable: gf,
  pinTooltip: vf,
  pinTooltipFadeIn: _f,
  pinTooltipRow: wf,
  pinTooltipLabel: yf,
  pinTooltipArrow: Cf,
};

const Tf = { xs: 12, sm: 14, md: 16, lg: 22 };
const Nf = "subscription_nuksta";
function pn({
  name: e,
  verified: t,
  hasNuksta: n,
  pin: r,
  size: s = "md",
  className: i,
}) {
  const Tf_s = Tf[s];
  const c = R(null);
  const [u, l] = x(null);
  const [h, d] = x(false);
  const f = r?.slug === Nf;

  const m = S(() => {
    if (!c.current) {
      return;
    }
    const p = c.current.getBoundingClientRect();
    l({ x: p.left + p.width / 2, y: p.top });
  }, []);

  const y = S(() => {
    l(null);
  }, []);

  return o("span", {
    className: `${Ue.userName} ${Ue[s]} ${i || ""}`,
    children: [
      n
        ? o("span", {
            className: Ue.nukstaGlow,
            children: o("span", { className: Ue.text, children: e }),
          })
        : o("span", { className: Ue.text, children: e }),
      t && o(jc, {}),
      r &&
        o("span", {
          ref: c,
          className: `${Ue.pinWrapper} ${f ? Ue.pinClickable : ""}`,
          onMouseEnter: m,
          onMouseLeave: y,
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
              className: Ue.pinBadge,
              width: Tf_s,
              height: Tf_s,
            }),
            u &&
              lt(
                o("div", {
                  className: Ue.pinTooltip,
                  style: { left: `${u.x}px`, top: `${u.y}px` },
                  children: [
                    o("span", {
                      className: Ue.pinTooltipRow,
                      children: [
                        o("span", {
                          className: Ue.pinTooltipLabel,
                          children: "Пин:",
                        }),
                        " ",
                        r.name,
                      ],
                    }),
                    r.description &&
                      o("span", {
                        className: Ue.pinTooltipRow,
                        children: [
                          o("span", {
                            className: Ue.pinTooltipLabel,
                            children: "Ивент:",
                          }),
                          " ",
                          r.description,
                        ],
                      }),
                    o("span", { className: Ue.pinTooltipArrow }),
                  ],
                }),
                document.body
              ),
          ],
        }),
      h && o(lu, { isOpen: true, onClose: () => d(false) }),
    ],
  });
}
const kf = "zRX0j4Tr";
const Ef = "_3HYi31vZ";
const bf = "sgbXxBQt";
const Sf = "GyS5v2h6";
const Rf = "HxhHv5PS";
const If = "HhzGlfqd";
const Pf = "bQ6-MeS1";
const xf = "QCLZpkig";
const Af = "WIOo5dNL";

const ft = {
  dropdownWrapper: kf,
  trigger: Ef,
  menu: bf,
  hidden: Sf,
  menuItem: Rf,
  danger: If,
  itemIcon: Pf,
  itemLabel: xf,
  divider: Af,
};

function di({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: r = [],
  className: s,
}) {
  const [i, a] = x(false);
  const [c, u] = x(false);
  const [l, h] = x({ top: 0, left: 0 });
  const d = R(null);
  const f = R(null);

  const m = S(() => {
    if (!d.current) {
      return;
    }
    const _ = d.current.getBoundingClientRect();
    const g = f.current?.offsetHeight || 150;
    const w = f.current?.offsetWidth || 160;
    let E = 0;
    let C = 0;

    if (n.startsWith("bottom")) {
      E = _.bottom + 4;
    } else {
      E = _.top - g - 4;
    }

    if (n.endsWith("right")) {
      C = _.right - w;
    } else {
      C = _.left;
    }

    const { innerWidth, innerHeight } = window;

    if (C + w > innerWidth) {
      C = innerWidth - w - 8;
    }

    if (C < 8) {
      C = 8;
    }

    if (E + g > innerHeight) {
      E = _.top - g - 4;
    }

    if (E < 8) {
      E = _.bottom + 4;
    }

    h({ top: E, left: C });
    u(true);
  }, [n]);

  const y = S((_) => {
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

  U(() => {
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

  const p = (_) => {
    _.stopPropagation();

    if (i) {
      a(false);
      u(false);
    } else {
      a(true);
    }
  };

  const v = (_, g) => {
    _.stopPropagation();
    g.onClick();
    a(false);
    u(false);
  };

  return o("div", {
    className: `${ft.dropdownWrapper} ${s || ""}`,
    children: [
      o("div", { ref: d, className: ft.trigger, onClick: p, children: e }),
      i &&
        lt(
          o("div", {
            ref: f,
            className: `${ft.menu} ${c ? "" : ft.hidden}`,
            style: { top: l.top, left: l.left },
            children: t.map((_, g) =>
              o(
                "div",
                {
                  children: [
                    o("button", {
                      type: "button",
                      className: `${ft.menuItem} ${_.danger ? ft.danger : ""}`,
                      onClick: (w) => v(w, _),
                      children: [
                        _.icon &&
                          o("span", {
                            className: ft.itemIcon,
                            children: _.icon,
                          }),
                        o("span", {
                          className: ft.itemLabel,
                          children: _.label,
                        }),
                      ],
                    }),
                    r.includes(_.id) &&
                      g < t.length - 1 &&
                      o("div", { className: ft.divider }),
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
const Lf = "oAyquNjM";
const Of = "cGo-pqMK";
const Mf = "abh-IRfe";
const $f = "_3UMrcwJw";
const Df = "MtmuinE5";
const Bf = "OHOBvjSN";
const Uf = "vPid2PoY";
const Ff = "ShSUtrj1";

const kt = {
  header: Lf,
  headerMain: Of,
  moreDropdown: Mf,
  pinnedBadge: $f,
  authorInfo: Df,
  authorLink: Bf,
  time: Uf,
  edited: Ff,
};

function Hf({
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
  const f = Ws(t);

  const m = ke((g) => g.profile?.id);

  const y = e.id === m;
  const p = 2880 * 60 * 1000; /* 1e3 */
  const v = y && Date.now() - new Date(t).getTime() < p;

  const _ = Ne(() => {
    const g = [];

    g.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: o(js, { size: 16 }),
      onClick: () => d?.(r),
    });

    if (v) {
      g.push({
        id: "edit",
        label: "Редактировать",
        icon: o(Ys, { size: 16 }),
        onClick: () => u?.(r),
      });
    }

    if (i) {
      g.push({
        id: "pin",
        label: a ? "Открепить" : "Закрепить",
        icon: o(Pr, { size: 16 }),
        onClick: () => h?.(r),
      });
    }

    if (y || i) {
      g.push({
        id: "delete",
        label: "Удалить",
        icon: o(qo, { size: 16 }),
        danger: true,
        onClick: () => l?.(r),
      });
    }

    if (!y) {
      g.push({
        id: "report",
        label: "Пожаловаться",
        icon: o(Zs, { size: 16 }),
        danger: true,
        onClick: () => c?.(r),
      });
    }

    return g;
  }, [y, v, i, a, r, u, l, h, c, d]);

  return o("header", {
    className: kt.header,
    children: [
      a &&
        o("div", {
          className: kt.pinnedBadge,
          children: [
            o(Pr, { size: 14 }),
            o("span", { children: "Закреплённый пост" }),
          ],
        }),
      o("div", {
        className: kt.headerMain,
        children: [
          s &&
            o("a", {
              href: `/@${e.username}`,
              children: o(Ye, {
                src: e.avatar,
                alt: e.displayName,
                size: "sm",
                online: e.online,
              }),
            }),
          o("div", {
            className: kt.authorInfo,
            children: [
              o("a", {
                href: `/@${e.username}`,
                className: kt.authorLink,
                children: o(pn, {
                  name: e.displayName,
                  verified: e.isVerified,
                  hasNuksta: e.hasNuksta,
                  pin: e.pin,
                  size: "sm",
                }),
              }),
              o("time", {
                dateTime: t,
                className: kt.time,
                children: [
                  f,
                  n &&
                    o(Hn, {
                      text: new Date(n).toLocaleString("ru-RU"),
                      children: o("span", {
                        className: kt.edited,
                        children: " (ред.)",
                      }),
                    }),
                ],
              }),
            ],
          }),
          o(di, {
            trigger: o(ei, { size: 18 }),
            items: _,
            position: "bottom-right",
            className: kt.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
function hi(e, t, n) {
  const { isVisible: r, isRevealing: s, onRevealComplete: i } = n;
  const a = R([]);
  const c = R(null);
  const u = R(null);
  const l = R({ width: 0, height: 0 });
  const h = R(1);

  const d = S((p, v) => {
    const _ = Math.random() * 80 + 60;
    return {
      x: Math.random() * p,
      y: Math.random() * v,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * _,
      maxLife: _,
    };
  }, []);

  const f = S(
    (p, v) => {
      const _ = Math.floor((p * v) / 600);
      const g = [];
      for (let w = 0; w < _; w++) {
        g.push(d(p, v));
      }
      a.current = g;
    },
    [d]
  );

  const m = S(() => {
    const e_current = e.current;
    const t_current = t.current;
    if (!e_current || !t_current) {
      return;
    }
    const _ = t_current.getBoundingClientRect();
    if (_.width === 0 || _.height === 0) {
      return;
    }
    const g = window.devicePixelRatio || 1;
    if (l.current.width !== _.width || l.current.height !== _.height) {
      l.current = { width: _.width, height: _.height };
      e_current.width = _.width * g;
      e_current.height = _.height * g;
      e_current.style.width = `${_.width}px`;
      e_current.style.height = `${_.height}px`;
      const w = e_current.getContext("2d");

      if (w) {
        w.setTransform(g, 0, 0, g, 0, 0);
        u.current = w;
      }

      f(_.width, _.height);
    }
  }, [e, t, f]);

  const y = S(() => {
    h.current = 1;
  }, []);

  U(() => {
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
      const { width: _, height: g } = l.current;
      if (!u_current || _ === 0 || _ === 0 || g === 0) {
        c.current = requestAnimationFrame(p);
        return;
      }
      if (s && ((h.current -= 0.05), h.current <= 0)) {
        i();
        return;
      }
      u_current.clearRect(0, 0, _, g);

      a.current.forEach((w, E) => {
        w.x += w.speedX;
        w.y += w.speedY;
        w.life--;

        if (w.x < 0) {
          w.x = _;
        }

        if (w.x > _) {
          w.x = 0;
        }

        if (w.y < 0) {
          w.y = g;
        }

        if (w.y > g) {
          w.y = 0;
        }

        if (w.life <= 0) {
          a.current[E] = d(_, g);
          return;
        }

        const C = w.life / w.maxLife;
        const b = C < 0.3 ? C / 0.3 : 1;
        const N = w.opacity * b * h.current;
        u_current.beginPath();
        u_current.arc(w.x, w.y, w.size, 0, Math.PI * 2);
        u_current.fillStyle = `rgba(255, 255, 255, ${N})`;
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

  return { resetOpacity: y };
}
const Vf = "_2Gc4qhOv";
const Wf = "UY9OONTU";
const jf = "_0IkXVI0s";
const zf = "-LecVcA9";
const qf = "I1O3wwfn";
const Jt = { container: Vf, hidden: Wf, image: jf, revealing: zf, canvas: qf };
const Fr = 5;
function Hr({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: r,
  height: s,
  className: i = "",
  onClick: a,
}) {
  const [c, u] = x(!n);
  const [l, h] = x(false);
  const [d, f] = x(false);
  const m = R(null);
  const y = R(null);
  const p = R(null);
  const v = R(false);

  const { resetOpacity: _ } = hi(m, y, {
    isVisible: d && !c && n,
    isRevealing: l,
    onRevealComplete: () => u(true),
  });

  U(() => {
    const y_current = y.current;
    if (!y_current) {
      return;
    }
    const k = new IntersectionObserver(
      (T) => {
        T.forEach((A) => {
          f(A.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    k.observe(y_current);

    return () => {
      k.disconnect();
    };
  }, []);

  const g = (N) => {
    p.current = { x: N.clientX, y: N.clientY };
    v.current = false;
  };

  const w = (N) => {
    if (!p.current) {
      return;
    }
    const k = Math.abs(N.clientX - p.current.x);
    const T = Math.abs(N.clientY - p.current.y);

    if (k > Fr || T > Fr) {
      v.current = true;
    }
  };

  const E = (N) => {
    if (v.current) {
      v.current = false;
      N.stopPropagation();
      return;
    }

    if (!c && !l && n) {
      N.stopPropagation();
      h(true);
      _();
    } else if (a) {
      a(N);
    }
  };

  const C = !c && n;
  const b = r && s ? { aspectRatio: `${r} / ${s}` } : undefined;
  return n
    ? o("div", {
        ref: y,
        className: `${Jt.container} ${i} ${C ? Jt.hidden : ""} ${
          l ? Jt.revealing : ""
        }`,
        style: b,
        onPointerDown: g,
        onPointerMove: w,
        onClick: E,
        children: [
          o("img", {
            src: e,
            alt: t,
            className: Jt.image,
            loading: "lazy",
            width: r,
            height: s,
            draggable: false,
          }),
          C && o("canvas", { ref: m, className: Jt.canvas }),
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
const Gf = "_-20RcNww";
const Xf = "JrRDjoks";
const Yf = "Poxo3Euu";
const Zf = "-ccRSjly";
const En = { wrapper: Gf, track: Xf, fill: Yf, thumb: Zf };
function Kf({ value: e, onChange: t, onDragStart: n, onDragEnd: r }) {
  const s = R(null);

  const i = S(
    (m) => {
      const s_current = s.current;
      if (!s_current) {
        return;
      }
      const p = s_current.getBoundingClientRect();
      const v = 1 - (m - p.top) / p.height;
      t(Math.max(0, Math.min(1, v)));
    },
    [t]
  );

  const a = S(
    (m) => {
      m.stopPropagation();
      m.preventDefault();
      n?.();
      i(m.clientY);

      const y = (v) => i(v.clientY);

      const p = () => {
        r?.();
        document.removeEventListener("mousemove", y);
        document.removeEventListener("mouseup", p);
      };

      document.addEventListener("mousemove", y);
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
    className: En.wrapper,
    onMouseDown: a,
    onClick: (m) => {
      m.stopPropagation();
      m.preventDefault();
    },
    children: o("div", {
      ref: s,
      className: En.track,
      children: [
        o("div", { className: En.fill, style: { height: f } }),
        o("div", { className: En.thumb, style: { bottom: `${d}px` } }),
      ],
    }),
  });
}
const Jf = "_7OM9isQp";
const Qf = "tOcLl5Fe";
const em = "K6pRPvna";
const tm = "W7spdM5t";
const nm = "_-2wZA6Y1";
const om = "eelWZWVN";
const rm = "cyewazLJ";
const sm = "XkulrB3e";
const im = "fwQuDvLh";
const am = "CjPRdJ6u";
const cm = "DeiHcSM2";

const Ze = {
  container: Jf,
  hidden: Qf,
  video: em,
  revealing: tm,
  canvas: nm,
  duration: om,
  volumeControl: rm,
  active: sm,
  volumeSlider: im,
  muteButton: am,
  muteButtonMobile: cm,
};

const Vr = parseFloat(localStorage.getItem("video-volume") ?? "1");
let Vt = true;
let Io = isNaN(Vr) ? 1 : Vr;
const Po = new Set();
const Dt = new Map();
let Wr = false;
let ao = null;
function Dn() {
  const e = window.innerHeight / 2;
  let t = null;
  let n = Infinity;
  for (const [r] of Dt) {
    const s = r.getBoundingClientRect();

    if (Math.abs(s.top + s.height / 2 - e) < n) {
      n = Math.abs(s.top + s.height / 2 - e);
      t = r;
    }
  }
  for (const [r, s] of Dt) {
    if (r === t && !s.userPaused) {
      if (s.video.paused) {
        s.video.play().catch(() => {});
      }
    } else if (!s.video.paused) {
      s.video.pause();
    }
  }
}
function jr() {
  if (ao == null) {
    ao = requestAnimationFrame(() => {
      ao = null;
      Dn();
    });
  }
}
function co() {
  const e = Dt.size > 1;

  if (e !== Wr) {
    e
      ? window.addEventListener("scroll", jr, { passive: true })
      : window.removeEventListener("scroll", jr);

    Wr = e;
  }
}
function lo(e) {
  Vt = e;
  localStorage.setItem("video-muted", String(e));

  Po.forEach((t) => t(e));
}
function lm(e) {
  Io = e;
  localStorage.setItem("video-volume", String(e));
}
function um(e) {
  const t = Math.floor(e / 60);
  const n = e % 60;
  return `${t}:${n.toString().padStart(2, "0")}`;
}
function zr({ muted: e, volume: t }) {
  if (e || t === 0) {
    return o(Pc, {});
  }

  if (t < 0.7) {
    return o(Ic, {});
  }

  return o(xc, {});
}
function qr({
  src: e,
  spoiler: t = false,
  width: n,
  height: r,
  duration: s,
  className: i = "",
}) {
  const a = R(null);
  const c = R(null);
  const u = R(null);
  const [l, h] = x(!t);
  const [d, f] = x(false);
  const [m, y] = x(false);
  const [p, v] = x(Vt);
  const [_, g] = x(Io);
  const [w, E] = x(false);
  const C = R(false);
  const b = ut();

  const { resetOpacity: N } = hi(u, c, {
    isVisible: m && !l && t,
    isRevealing: d,
    onRevealComplete: () => h(true),
  });

  U(() => {
    const P = (W) => {
      v(W);

      if (a.current) {
        a.current.muted = W;
      }
    };
    Po.add(P);

    return () => {
      Po.delete(P);
    };
  }, []);

  U(() => {
    const c_current = c.current;
    if (!c_current) {
      return;
    }
    const W = new IntersectionObserver(
      (J) => {
        J.forEach((X) => {
          y(X.isIntersecting);
          const a_current = a.current;

          if (a_current) {
            if (X.isIntersecting) {
              a_current.currentTime = 0;
              a_current.muted = Vt;
              a_current.volume = Io;
              Dt.set(c_current, { video: a_current, userPaused: false });
              co();
              Dn();
            } else {
              Dt.delete(c_current);
              co();
              Dn();
              a_current.pause();
              a_current.currentTime = 0;
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    W.observe(c_current);

    return () => {
      W.disconnect();
      Dt.delete(c_current);
      co();
      Dn();
    };
  }, [l]);

  const k = (P) => {
    P.stopPropagation();

    if (C.current) {
      return;
    }

    if (!l && !d && t) {
      f(true);
      N();
      return;
    }
    const a_current = a.current;
    const c_current = c.current;
    if (!a_current || !c_current) {
      return;
    }
    const X = Dt.get(c_current);

    if (a_current.paused) {
      X && (X.userPaused = false);
      a_current.play().catch(() => {});
    } else {
      X && (X.userPaused = true);
      a_current.pause();
    }
  };

  const T = S((P) => {
    P.stopPropagation();
    P.preventDefault();
    lo(!Vt);
  }, []);

  const A = S((P) => {
    g(P);
    lm(P);

    if (a.current) {
      a.current.volume = P;
    }

    if (P > 0 && Vt) {
      lo(false);
    } else if (P === 0 && !Vt) {
      lo(true);
    }
  }, []);

  const I = !l && t;
  const D = n && r ? { aspectRatio: `${n} / ${r}` } : undefined;
  return o("div", {
    ref: c,
    className: `${Ze.container} ${i} ${I ? Ze.hidden : ""} ${
      d ? Ze.revealing : ""
    }`,
    style: D,
    onClick: k,
    children: [
      o("video", {
        ref: a,
        src: e,
        preload: "metadata",
        playsInline: true,
        muted: p,
        loop: true,
        className: Ze.video,
        width: n,
        height: r,
      }),
      (l || !t) &&
        (b
          ? o("button", {
              className: Ze.muteButtonMobile,
              onClick: T,
              type: "button",
              "aria-label": p ? "Unmute" : "Mute",
              children: o(zr, { muted: p, volume: _ }),
            })
          : o("div", {
              className: `${Ze.volumeControl} ${w ? Ze.active : ""}`,
              children: [
                o("div", {
                  className: Ze.volumeSlider,
                  children: o(Kf, {
                    value: p ? 0 : _,
                    onChange: A,
                    onDragStart: () => {
                      C.current = true;
                      E(true);
                    },
                    onDragEnd: () => {
                      E(false);

                      setTimeout(() => {
                        C.current = false;
                      }, 0);
                    },
                  }),
                }),
                o("button", {
                  className: Ze.muteButton,
                  onClick: T,
                  type: "button",
                  "aria-label": p ? "Unmute" : "Mute",
                  children: o(zr, { muted: p, volume: _ }),
                }),
              ],
            })),
      s != null && I && o("div", { className: Ze.duration, children: um(s) }),
      I && o("canvas", { ref: u, className: Ze.canvas }),
    ],
  });
}
const dm = "l4cwyAPN";
const hm = "qlCZ-7Jf";
const fm = "_5zkvFIKy";
const mm = "_0vEjHxry";
const pm = "y-RpGOEz";
const gm = "_4vGEh5tJ";
const vm = "awFKBPHw";

const xe = {
  mediaWrapper: dm,
  isFeed: hm,
  single: fm,
  image: mm,
  singleVideo: pm,
  media: gm,
  dragging: vm,
};

const _m = 5;
const wm = 0.95;
const uo = 0.5;
function Zo({ media: e, isFeed: t = false }) {
  const n = e?.filter((N) => N.type === "image") ?? [];

  const r = e?.filter((N) => N.type === "video") ?? [];

  const s = R(null);

  const i = Us((N) => N.open);

  const a = R(false);
  const c = R(0);
  const u = R(0);
  const l = R(false);
  const h = R(0);
  const d = R(0);
  const f = R(0);
  const m = R(null);

  const y = () => {
    if (m.current) {
      cancelAnimationFrame(m.current);
      m.current = null;
    }
  };

  const p = () => {
    const s_current = s.current;
    if (s_current) {
      f.current *= wm;

      if (Math.abs(f.current) < uo) {
        y();
        return;
      }

      s_current.scrollLeft += f.current;
      m.current = requestAnimationFrame(p);
    }
  };

  const v = (N) => {
    const s_current = s.current;

    if (s_current && n.length + r.length > 1) {
      if (n.length + r.length > 1) {
        y();
        a.current = true;
        s_current.classList.add(xe.dragging);
        c.current = N.clientX;
        h.current = N.clientX;
        d.current = Date.now();
        u.current = s_current.scrollLeft;
        l.current = false;
        f.current = 0;
        N.preventDefault();
      }
    }
  };

  const _ = (N) => {
    if (!a.current) {
      return;
    }
    const s_current = s.current;
    if (!s_current) {
      return;
    }
    const T = Date.now();
    const A = N.clientX - c.current;
    const I = N.clientX - h.current;
    const D = T - d.current;

    if (Math.abs(A) > _m) {
      l.current = true;
    }

    if (D > 0) {
      f.current = (-I / D) * 16;
    }

    h.current = N.clientX;
    d.current = T;
    s_current.scrollLeft = u.current - A;
  };

  const g = () => {
    if (a.current && Math.abs(f.current) > uo) {
      p();
    }

    a.current = false;
    s.current?.classList.remove(xe.dragging);
  };

  const w = () => {
    if (a.current) {
      Math.abs(f.current) > uo && p();
      a.current = false;
      s.current?.classList.remove(xe.dragging);
    }
  };

  U(
    () => () => {
      y();
      s.current?.classList.remove(xe.dragging);
    },
    []
  );

  const E = (N, k) => {
    if (l.current) {
      l.current = false;
      k.stopPropagation();
      return;
    }
    i(
      n.map((T) => ({
        id: T.id,
        url: T.url,
        width: T.width || 800,
        height: T.height || 600,
      })),
      N
    );
  };

  const C = (N) => {
    N.stopPropagation();
    l.current = false;
  };

  if (n.length === 0 && r.length === 0) {
    return null;
  }
  const b = n.length + r.length;
  if (b === 1) {
    if (n.length === 1) {
      const [N] = n;
      return o("div", {
        className: `${xe.mediaWrapper} ${t ? xe.isFeed : ""}`,
        "data-count": 1,
        children: o("div", {
          className: xe.single,
          onClick: (k) => {
            k.stopPropagation();
            E(0, k);
          },
          children: o(
            Hr,
            {
              src: N.url,
              spoiler: N.spoiler,
              width: N.width,
              height: N.height,
              className: xe.image,
              onClick: (k) => E(0, k),
            },
            N.id
          ),
        }),
      });
    }
    if (r.length === 1) {
      const [N] = r;
      return o("div", {
        className: `${xe.mediaWrapper} ${t ? xe.isFeed : ""}`,
        "data-count": 1,
        onClick: (k) => k.stopPropagation(),
        children: o("div", {
          className: xe.singleVideo,
          children: o(
            qr,
            {
              src: N.url,
              spoiler: N.spoiler,
              width: N.width,
              height: N.height,
              duration: N.duration,
            },
            N.id
          ),
        }),
      });
    }
  }
  return o("div", {
    className: `${xe.mediaWrapper} ${t ? xe.isFeed : ""}`,
    "data-count": b,
    children: o("div", {
      ref: s,
      className: `${xe.media} ${t ? xe.isFeed : ""}`,
      "data-count": b,
      onClick: C,
      onMouseDown: v,
      onMouseMove: _,
      onMouseUp: g,
      onMouseLeave: w,
      children: [
        r.map((N) =>
          o(
            qr,
            {
              src: N.url,
              spoiler: N.spoiler,
              width: N.width,
              height: N.height,
              duration: N.duration,
              className: xe.image,
            },
            N.id
          )
        ),
        n.map((N, k) =>
          o(
            Hr,
            {
              src: N.url,
              spoiler: N.spoiler,
              width: N.width,
              height: N.height,
              className: xe.image,
              onClick: (T) => E(k, T),
            },
            N.id
          )
        ),
      ],
    }),
  });
}
const ym = "Pc3ZwYUA";
const Cm = "uXiMWdXs";
const Tm = "_92KcEhCb";
const Nm = "A5HN458Y";
const km = "kVjrCCJb";
const Em = "WIU3w8vr";
const bm = "sxXVgu6K";

const Pt = {
  counter: ym,
  digit: Cm,
  prev: Tm,
  current: Nm,
  animating: km,
  up: Em,
  down: bm,
};

function Sm(e) {
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
function nn({ value: e }) {
  const t = Sm(e);
  const n = R(e);
  const r = R(t.length);
  const s = R(Date.now());

  const [i, a] = x(() =>
    t.split("").map((d, f) => ({
      char: d,
      prevChar: d,
      isAnimating: false,
      key: f,
    }))
  );

  const [c, u] = x(null);

  U(() => {
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

    const y = i.map((E) => E.char);

    const p = Math.max(m.length, y.length);
    const v = y.join("").padStart(p, " ").split("");

    const g = m
      .join("")
      .padStart(p, " ")
      .split("")
      .map((E, C) => {
        const b = v[C] || " ";
        const N = i[C - (p - i.length)];
        return E !== b
          ? (r.current++,
            { char: E, prevChar: b, isAnimating: true, key: r.current })
          : { char: E, prevChar: E, isAnimating: false, key: N?.key ?? C };
      })
      .filter((E) => E.char !== " " || E.isAnimating);

    a(g);
    const w = setTimeout(() => {
      a((E) =>
        E.map((C) => ({
          ...C,
          isAnimating: false,
        }))
      );

      u(null);
    }, 300);
    return () => clearTimeout(w);
  }, [e]);

  if (!i.some((d) => d.isAnimating)) {
    return o("span", { children: t });
  }

  const h = c === "up" ? Pt.up : c === "down" ? Pt.down : "";
  return o("span", {
    className: Pt.counter,
    children: i.map((d) =>
      d.isAnimating
        ? o(
            "span",
            {
              className: `${Pt.digit} ${Pt.animating} ${h}`,
              children: [
                o("span", { className: Pt.prev, children: d.prevChar }),
                o("span", { className: Pt.current, children: d.char }),
              ],
            },
            d.key
          )
        : o("span", { children: d.char }, d.key)
    ),
  });
}
const Rm = "QnwlJ0JI";
const Im = "_4ZjoCms2";
const Pm = "aMkvCscU";
const xm = "lgOmJE17";
const Am = "luVObdSy";
const Lm = "Rezs30lQ";
const Om = "_8wD0dR85";
const Mm = "ndR5d-hp";
const $m = "z-xpwcRG";
const Dm = "DecvAv-7";
const Bm = "VRuv-fcD";
const Um = "lo4NvVKr";
const Fm = "eJzh56H-";
const Hm = "giKCW-y7";

const Ae = {
  actions: Rm,
  actionsLeft: Im,
  action: Pm,
  views: xm,
  liked: Am,
  reposted: Lm,
  disabled: Om,
  noAnimation: Mm,
  reactionWrapper: $m,
  actionsRight: Dm,
  captured: Bm,
  capturedEmoji: Um,
  capturedText: Fm,
  capturedMobile: Hm,
};

function Vm({
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
  const d = R(false);
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
                o(Gn, { filled: e }, e ? "liked" : "not-liked"),
                o(nn, { value: n }),
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
            children: [o(zo, {}), o(nn, { value: s })],
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
            children: [o(Fn, {}), o(nn, { value: r })],
          }),
        ],
      }),
      o("div", {
        className: Ae.actionsRight,
        children: [
          a &&
            o(Ee, {
              children: [
                o(Hn, {
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
                o(Hn, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Ae.capturedMobile,
                  children: o("span", { children: a }),
                }),
              ],
            }),
          o("span", {
            className: Ae.views,
            children: [o(ni, {}), o(nn, { value: i })],
          }),
        ],
      }),
    ],
  });
}
const Wm = "FdYjPIR3";
const jm = "MRPN0AlG";
const zm = "gVTZJXUf";
const qm = "PpDQ-7eT";
const Gm = "f-Ewjbkv";
const Xm = "qYj6ku6f";
const Ym = "YmQiahvA";
const Zm = "_4sEs40kd";
const Km = "QflhaLOr";
const Jm = "_8yAtdePh";
const Qm = "Q0BBb0GB";
const ep = "LVT25SUb";
const tp = "_2QopExez";
const np = "GWyTusR8";
const op = "uA48J3e0";
const rp = "L9fW2zD6";

const Re = {
  post: Wm,
  postInner: jm,
  isFeed: zm,
  postContent: qm,
  postBody: Gm,
  textWrapper: Xm,
  text: Ym,
  collapsed: Zm,
  expandButton: Km,
  originalPost: Jm,
  originalPostHeader: Qm,
  originalPostTime: ep,
  originalPostText: tp,
  originalPostMedia: np,
  originalPostStats: op,
  originalPostStat: rp,
};

function bn(e) {
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
function sp(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function ip({ attachments: e }) {
  const t = Ne(() => Wn(e), [e]);
  return (
    t.length === 0 ||
    o("div", {
      className: Re.originalPostMedia,
      children: o(Zo, { media: t }),
    })
  );
}
function ap({ originalPost: e }) {
  const t = sp(e.createdAt);

  const n = S(
    (r) => {
      r.stopPropagation();
      const s = e.author.username ?? e.author.id;
      $(`/@${s}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id]
  );

  return o("div", {
    className: Re.originalPost,
    onClick: n,
    children: [
      o("div", {
        className: Re.originalPostHeader,
        children: [
          o(Fn, { size: 14 }),
          o(Ye, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          o(pn, {
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          o("span", { className: Re.originalPostTime, children: t }),
        ],
      }),
      e.text && o("div", { className: Re.originalPostText, children: e.text }),
      e.attachments &&
        e.attachments.length > 0 &&
        o(ip, { attachments: e.attachments }),
      o("div", {
        className: Re.originalPostStats,
        children: [
          o("span", {
            className: Re.originalPostStat,
            children: [o(Gn, { size: 16 }), bn(e.reactions?.total ?? 0)],
          }),
          o("span", {
            className: Re.originalPostStat,
            children: [o(zo, { size: 16 }), bn(e.stats?.comments ?? 0)],
          }),
          o("span", {
            className: Re.originalPostStat,
            children: [o(Fn, { size: 16 }), bn(e.stats?.reposts ?? 0)],
          }),
          o("span", {
            className: Re.originalPostStat,
            children: [o(ni, { size: 16 }), bn(e.stats?.views ?? 0)],
          }),
        ],
      }),
    ],
  });
}

const Gr = (e) => Symbol.iterator in e;

const Xr = (e) => "entries" in e;

const Yr = (e, t) => {
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

const cp = (e, t) => {
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

function lp(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : Gr(e) && Gr(t)
    ? Xr(e) && Xr(t)
      ? Yr(e, t)
      : cp(e, t)
    : Yr(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function Zr(e) {
  const t = tn.useRef(undefined);
  return (n) => {
    const r = e(n);
    return lp(t.current, r) ? t.current : (t.current = r);
  };
}
const up = "K2t-Yijf";
const dp = "R4EoThzg";
const hp = "_07fRsOVQ";
const fp = "_91qOVV19";
const Sn = { commentsModal: up, header: dp, title: hp, content: fp };
function mp({ postId: e, onClose: t }) {
  const n = R(null);

  const {
    comments: r,
    commentsLoading: s,
    commentsLoadingMore: i,
    commentsHasMore: a,
    clearComments: c,
    fetchComments: u,
    loadMoreComments: l,
    toggleCommentLike: h,
    addComment: d,
  } = Et(
    Zr((w) => ({
      comments: w.comments,
      commentsLoading: w.commentsLoading,
      commentsLoadingMore: w.commentsLoadingMore,
      commentsHasMore: w.commentsHasMore,
      clearComments: w.clearComments,
      fetchComments: w.fetchComments,
      loadMoreComments: w.loadMoreComments,
      toggleCommentLike: w.toggleCommentLike,
      addComment: w.addComment,
    }))
  );

  const { commentsSort: f, setCommentsSort: m } = Mn(
    Zr((w) => ({
      commentsSort: w.commentsSort,
      setCommentsSort: w.setCommentsSort,
    }))
  );

  if (n.current !== e) {
    n.current = e;
    c();
  }

  U(() => {
    u(e);
  }, [e, u]);

  const y = S(
    (w) => {
      m(w);
      u(e);
    },
    [m, u, e]
  );

  const p = S(() => {
    if (a && !i) {
      l(e);
    }
  }, [a, i, l, e]);

  const v = S(
    (w) => {
      h(w);
    },
    [h]
  );

  const _ = S(
    async (w) => {
      await d(e, w);
    },
    [d, e]
  );

  const g = S(
    async (w) => {
      const E = `voice_${Date.now()}.webm`;
      const C = new File([w], E, { type: w.type || "audio/webm" });
      const b = await Ht.uploadMedia(C);
      await d(e, { text: "", attachments: [{ mediaId: b.id }] });
    },
    [d, e]
  );

  return o(wt, {
    frameless: true,
    onClose: t,
    className: Sn.commentsModal,
    children: [
      o("div", {
        className: Sn.header,
        children: o("span", { className: Sn.title, children: "Комментарии" }),
      }),
      o("div", {
        className: Sn.content,
        "data-comments-modal": true,
        children: o(tv, {
          comments: r,
          isLoading: s,
          isLoadingMore: i,
          hasMore: a,
          sort: f,
          onSortChange: y,
          onLikeComment: v,
          onAddComment: _,
          onVoiceSend: g,
          onLoadMore: p,
        }),
      }),
    ],
  });
}
const pp = "_4s42VgXb";
const gp = "JqY6Ejqn";
const vp = "_-5ypH-9R";
const _p = "QD4fy2xC";
const wp = "_4kV5nqGx";
const yp = "jEd21ivq";
const Cp = "MK5XU7vC";
const Tp = "LLc09oUN";
const Np = "tQJs0jqi";
const kp = "_9Vsoq9Zj";
const Ep = "-CHU-IFg";
const bp = "ENePMKz8";
const Sp = "KraP0o6o";
const Rp = "mZBB8sUY";

const Se = {
  modalReport: pp,
  content: gp,
  successIcon: vp,
  title: _p,
  subtitle: wp,
  options: yp,
  chip: Cp,
  radio: Tp,
  chipActive: Np,
  radioDot: kp,
  detailsSection: Ep,
  textarea: bp,
  error: Sp,
  actions: Rp,
};

const Ip = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const Pp = [
  { id: "spam", label: "Спам или нежелательный контент" },
  { id: "violence", label: "Насилие или опасные действия" },
  { id: "hate", label: "Ненависть или травля" },
  { id: "adult", label: "Контент для взрослых (18+)" },
  { id: "misinfo", label: "Дезинформация или обман" },
  { id: "other", label: "Другое" },
];

function fi({ targetType: e, targetId: t, onClose: n, onSubmit: r }) {
  const [s, i] = x(null);
  const [a, c] = x("");
  const [u, l] = x(false);
  const [h, d] = x(null);
  const [f, m] = x(false);

  const y = async () => {
    if (s) {
      l(true);
      d(null);
      try {
        if (r) {
          await r(s, a);
        } else {
          await Aa.createReport({
            targetType: e,
            targetId: t,
            reason: Ip[s],
            description: a || undefined,
          });
        }

        m(true);
      } catch (p) {
        console.error("Failed to submit report:", p);

        if (Ie(p)) {
          switch (p.code) {
            case yn.CANNOT_REPORT_OWN_CONTENT: {
              d("Вы не можете пожаловаться на свой контент");
              break;
            }
            case yn.ALREADY_REPORTED: {
              d("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case yn.TARGET_NOT_FOUND: {
              d("Контент не найден");
              break;
            }
            case yn.DESCRIPTION_TOO_LONG: {
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
    ? o(wt, {
        onClose: n,
        showHeader: false,
        frameless: false,
        className: Se.modalReport,
        children: o("div", {
          className: Se.content,
          children: [
            o("div", {
              className: Se.successIcon,
              children: o(Oc, { size: 48 }),
            }),
            o("h2", { className: Se.title, children: "Спасибо за жалобу!" }),
            o("p", {
              className: Se.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            o("div", {
              className: Se.actions,
              children: o(De, {
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
    : o(wt, {
        onClose: n,
        showHeader: false,
        frameless: false,
        className: Se.modalReport,
        children: o("div", {
          className: Se.content,
          children: [
            o("h2", { className: Se.title, children: "Пожаловаться" }),
            o("p", {
              className: Se.subtitle,
              children: "Выберите причину жалобы",
            }),
            o("div", {
              className: Se.options,
              children: Pp.map((p) =>
                o(
                  "button",
                  {
                    type: "button",
                    className: `${Se.chip} ${s === p.id ? Se.chipActive : ""}`,
                    onClick: () => i(p.id),
                    children: [
                      o("span", {
                        className: Se.radio,
                        children:
                          s === p.id && o("span", { className: Se.radioDot }),
                      }),
                      p.label,
                    ],
                  },
                  p.id
                )
              ),
            }),
            o("div", {
              className: Se.detailsSection,
              children: o("textarea", {
                className: Se.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: a,
                onInput: (p) => c(p.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            h && o("div", { className: Se.error, children: h }),
            o("div", {
              className: Se.actions,
              children: [
                o(De, {
                  variant: "secondary",
                  onClick: (p) => {
                    p.stopPropagation();
                    n();
                  },
                  disabled: u,
                  children: "Отмена",
                }),
                o(De, {
                  variant: "primary",
                  onClick: (p) => {
                    p.stopPropagation();
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
const xp = "-VioXVDl";
const Ap = "NWNXLNpW";
const Lp = "CXfPPqvv";
const Op = "NPwgPQ76";
const Mp = "oYISYylA";
const $p = "xFI7XWUN";
const Dp = "kpECmjOX";
const Bp = "GyEJ4FhR";
const Up = "c09LwDtj";

const mt = {
  repostModal: xp,
  content: Ap,
  title: Lp,
  inputSection: Op,
  textarea: Mp,
  originalPost: $p,
  postHeader: Dp,
  postText: Bp,
  actions: Up,
};

function Fp({ post: e, onClose: t, onSuccess: n }) {
  const [r, s] = x("");
  const [i, a] = x(false);

  const c = ke((l) => l.profile);

  const u = async () => {
    a(true);
    try {
      await $e.createRepost(e.id, r.trim() || undefined);
      n?.();
      t();
    } catch (l) {
      console.error("Failed to create repost:", l);
    } finally {
      a(false);
    }
  };

  return o(wt, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: mt.repostModal,
    children: o("div", {
      className: mt.content,
      children: [
        o("h2", { className: mt.title, children: "Репост" }),
        o("div", {
          className: mt.inputSection,
          children: [
            c && o(Ye, { src: c.avatar, alt: c.displayName, size: "sm" }),
            o("textarea", {
              className: mt.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: r,
              onInput: (l) => s(l.target.value),
              rows: 3,
            }),
          ],
        }),
        o("div", {
          className: mt.originalPost,
          children: [
            o("div", {
              className: mt.postHeader,
              children: [
                o(Ye, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                o(pn, {
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  hasNuksta: e.author.hasNuksta,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            o("p", { className: mt.postText, children: e.text }),
          ],
        }),
        o("div", {
          className: mt.actions,
          children: [
            o(De, {
              variant: "secondary",
              onClick: (l) => {
                l.stopPropagation();
                t();
              },
              disabled: i,
              children: "Отмена",
            }),
            o(De, {
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
const Hp = "_4YEvcP5u";
const Vp = "fj7Ja6Qf";
const Wp = "phVHpKxz";
const jp = "_4Mo-J2C8";
const zp = "-jRWJZJ6";
const qp = "Tp7Qc2jL";
const Gp = "oOEGmZAG";
const Xp = "cbKeOors";
const Yp = "tWEeVBBC";
const Zp = "aIgoXsCn";

const st = {
  editPostModal: Hp,
  form: Vp,
  whatsNew: Wp,
  editor: jp,
  actions: zp,
  mediaButtons: qp,
  mediaButton: Gp,
  submitGroup: Xp,
  charCount: Yp,
  error: Zp,
};

const Kr = 5000; /* 5e3 */
function Kp({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = Xn();

  const s = ye((C) => C.editPost);

  const i = ke((C) => C.profile);

  const a = ut();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = qn(t, n);

  const [f, m] = x(false);
  const y = Kr - c.length;
  const p = y < 0;
  const v = c !== t;
  const _ = JSON.stringify(u) !== JSON.stringify(n);
  const g = v || _;

  const w = S(
    (C) => {
      d(C.emoji);
    },
    [d]
  );

  const E = S(async () => {
    if (!(!c.trim() || p || p || !g || p || !g || f)) {
      m(true);
      try {
        await s(e, c, u);
        r();
      } catch (C) {
        console.error("Failed to update post:", C);
      } finally {
        m(false);
      }
    }
  }, [c, u, p, g, f, s, e, r]);

  return o(wt, {
    frameless: true,
    onClose: r,
    className: st.editPostModal,
    children: o("div", {
      className: st.form,
      children: [
        o("div", {
          className: st.whatsNew,
          children: [
            o(Ye, { src: i?.avatar ?? "", size: "md" }),
            o(Yn, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Что нового?",
              maxLength: Kr,
              autoFocus: true,
              className: st.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        o("div", {
          className: st.actions,
          children: [
            o("div", {
              className: st.mediaButtons,
              children:
                !a &&
                o(Yo, { onEmojiSelect: w, buttonClassName: st.mediaButton }),
            }),
            o("div", {
              className: st.submitGroup,
              children: [
                p &&
                  o("span", {
                    className: `${st.charCount} ${st.error}`,
                    children: y,
                  }),
                o(De, {
                  size: "lg",
                  disabled: !c.trim() || p || p || !g,
                  loading: f,
                  onClick: E,
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
function Jp(e, t) {
  const { isOwnPost: n, openModal: r, closeModal: s, onDelete: i } = t;
  const a = ut();

  const c = ye((k) => k.deletePost);

  const u = ye((k) => k.updatePostLike);

  const l = ye((k) => k.updatePollVote);

  const h = ye((k) => k.updatePollData);

  const d = e.reactions.myReaction !== null;
  const f = e.reactions.total;

  const m = Ne(() => gi(e.attachments), [e.attachments]);

  const y = S(async () => {
    const k = e.reactions.myReaction !== null;
    const T = k ? -1 : 1;
    u(e.id, k || "love", T);
    try {
      if (k) {
        await $e.unlikePost(e.id);
      } else {
        await $e.likePost(e.id);
      }
    } catch (A) {
      u(e.id, k ? "love" : null, -T);
      console.error("Failed to toggle like:", A);
    }
  }, [e.id, e.reactions.myReaction, u]);

  const p = S(() => {
    if (!d) {
      y();
    }
  }, [d, y]);

  const v = S(
    (k) => {
      const T = e.author.username ?? e.author.id;
      const A = `${window.location.origin}/@${T}/post/${k}`;
      navigator.clipboard.writeText(A);
      Je.success("Ссылка скопирована");
    },
    [e.author.username, e.author.id]
  );

  const _ = S(
    (k) => {
      r(o(fi, { targetType: "post", targetId: k, onClose: s }));
    },
    [r, s]
  );

  const g = S(
    (k) => {
      r(
        o(Kp, {
          postId: e.id,
          initialText: e.text ?? "",
          initialSpans: e.spans ?? [],
        })
      );
    },
    [r, e.id, e.text, e.spans]
  );

  const w = S(
    async (k) => {
      if (confirm("Вы уверены, что хотите удалить этот пост?")) {
        try {
          await c(k);
          i?.(k);
        } catch (T) {
          console.error("Failed to delete post:", T);
        }
      }
    },
    [c, i]
  );

  const E = S(() => {
    if (a) {
      r(o(mp, { postId: e.id, onClose: s }));
    } else {
      const k = e.author.username ?? e.author.id;
      $(`/@${k}/post/${e.id}`);
    }
  }, [e.author.username, e.author.id, e.id, a, r, s]);

  const C = S(() => {
    if (!n) {
      r(o(Fp, { post: e, onClose: s }));
    }
  }, [r, s, e, n]);

  const b = S(
    async (k) => {
      const T = m?.myVote ?? null;
      l(e.id, k, T);
      try {
        const A = await $e.votePoll(e.id, [k]);
        if (A) {
          h(e.id, A);
          return A;
        }
      } catch (A) {
        console.error("[Poll] Failed to vote:", A);

        if (T) {
          l(e.id, T, k);
        }
      }
      return null;
    },
    [e.id, m?.myVote, l, h]
  );

  const N = S(
    async (k) => {
      try {
        const T = await $e.votePoll(e.id, k);
        if (T) {
          h(e.id, T);
          return T;
        }
      } catch (T) {
        console.error("[Poll] Failed to vote multiple:", T);
      }
      return null;
    },
    [e.id, h]
  );

  return {
    liked: d,
    totalLikes: f,
    handleLike: y,
    handleDoubleTap: p,
    handleComment: E,
    handleRepost: C,
    handleReport: _,
    handleEdit: g,
    handleDelete: w,
    handleCopyLink: v,
    handlePollVote: b,
    handlePollVoteMultiple: N,
  };
}
const Qp = "cZnuRugG";
const e0 = "gXPlO0SF";
const t0 = "yfGqJGgk";
const n0 = "a3a8DYnF";
const o0 = "Zm7GdliE";
const r0 = "x-TM77c0";
const s0 = "vqhGsmVx";
const i0 = "wXZfEkKN";
const a0 = "C4SARhpg";
const c0 = "epV7SM-L";
const l0 = "Bkxq4G-V";
const u0 = "M1orzhg7";
const d0 = "VQtopWsI";
const h0 = "vI-SLgZ3";
const f0 = "hWCpL6Hf";
const m0 = "WAYqGGYB";
const p0 = "OWLYzJZs";
const g0 = "P15SrtYp";
const v0 = "y-9i4poD";
const _0 = "qTvjpE7N";
const w0 = "rKM-vAOv";

const Ce = {
  commentInput: Qp,
  replyMode: e0,
  inputRow: t0,
  attachmentStrip: n0,
  circleButton: o0,
  micButton: r0,
  sendButton: s0,
  submitting: i0,
  textareaContainer: a0,
  expanded: c0,
  voiceMode: l0,
  inputWrapper: u0,
  commentCharCount: d0,
  error: h0,
  input: f0,
  replyHeader: m0,
  replyText: p0,
  replyName: g0,
  replyClose: v0,
  dragActive: _0,
  dragOverlay: w0,
};

const y0 = "_2mmgs8Ne";
const C0 = "WFxp3J8v";
const T0 = "abwLbpfW";
const ho = { textInput: y0, entering: C0, sendButton: T0 };
const N0 = 1000; /* 1e3 */
function k0({
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
  const h = N0 - e.length;
  const d = h < 0;
  const f = [ho.textInput, i ? ho.entering : ""].filter(Boolean).join(" ");
  return o("div", {
    className: f,
    children: [
      o("div", {
        className: Ce.inputWrapper,
        children: [
          o(Yn, {
            value: e,
            spans: t,
            onChange: n,
            placeholder: r,
            autoFocus: a,
            className: Ce.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: d || s,
            disableFormatting: true,
            onImagePaste: l,
          }),
          d &&
            o("span", {
              className: `${Ce.commentCharCount} ${Ce.error}`,
              children: h,
            }),
        ],
      }),
      o("button", {
        className: `${Ce.circleButton} ${Ce.sendButton} ${ho.sendButton} ${
          c ? Ce.submitting : ""
        }`,
        onClick: s,
        disabled: c || u || u || d,
        children: c ? o(yt, { size: "xs" }) : o(Gs, { size: 20 }),
      }),
    ],
  });
}
const on = 2;
const E0 = 2;
const Rn = on + E0;
const xt = 24;
const b0 = 80;
const Jr = "rgba(142, 142, 147, 0.6)";
const S0 = "#FFFFFF";
function R0({
  levels: e,
  slideOffset: t,
  audioRef: n,
  isRecording: r,
  hasRecording: s,
  isPlaying: i,
  onSeek: a,
  onPlay: c,
}) {
  const u = R(null);
  const l = R(null);
  const h = R(false);
  const d = R(0);
  const f = R(0);
  const m = R(0);
  const y = R(0);
  const p = R(null);
  const v = R(null);
  const _ = R(0);
  const [g, w] = x(0);
  const E = Math.max(1, Math.floor(g / Rn));

  U(() => {
    m.current = t;

    if (t === 0) {
      f.current = 0;
    }
  }, [t]);

  U(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }
    const D = new ResizeObserver((W) => {
      for (const J of W) {
        const X = J.contentRect.width;

        if (X > 0) {
          w(X);
        }
      }
    });
    D.observe(l_current);
    const P = l_current.getBoundingClientRect();

    if (P.width > 0) {
      w(P.width);
    }

    return () => {
      D.disconnect();
    };
  }, []);

  U(() => {
    const u_current = u.current;
    if (!u_current || g === 0) {
      return;
    }
    const D = window.devicePixelRatio || 1;
    u_current.width = g * D;
    u_current.height = xt * D;
    u_current.style.width = `${g}px`;
    u_current.style.height = `${xt}px`;
  }, [g]);

  const C = S(
    (I) => {
      const u_current = u.current;
      if (!u_current || g === 0) {
        return;
      }
      const P = u_current.getContext("2d");
      if (!P) {
        return;
      }
      const W = window.devicePixelRatio || 1;
      P.clearRect(0, 0, u_current.width, u_current.height);
      P.save();
      P.scale(W, W);
      const J = xt / 2;
      const X = xt - 4;
      for (let te = 0; te < E; te++) {
        let ce;
        if (e.length === 0) {
          ce = 0.05;
        } else if (e.length === 1) {
          ce = e[0];
        } else {
          const V = (te / (E - 1)) * (e.length - 1);
          const M = Math.floor(V);
          const H = Math.min(M + 1, e.length - 1);
          const $ = V - M;
          ce = e[M] * (1 - $) + e[H] * $;
        }
        const Y = Math.max(4, ce * X);
        const Q = te * Rn;
        const O = J - Y / 2;
        const L = te < I;
        P.fillStyle = L ? S0 : Jr;
        const z = on / 2;
        P.beginPath();
        P.roundRect(Q, O, on, Y, z);
        P.fill();
      }
      P.restore();
    },
    [e, g, E]
  );

  const b = S(
    (I) => {
      const u_current = u.current;
      if (!u_current || g === 0) {
        return;
      }
      const P = u_current.getContext("2d");
      if (!P) {
        return;
      }
      const W = window.devicePixelRatio || 1;
      const m_current = m.current;

      const { current } = f;

      if (current !== m_current) {
        const O = I - y.current;
        const L = (Rn / b0) * O;

        if (current < m_current) {
          f.current = Math.min(m_current, current + L);
        } else {
          f.current = m_current;
        }
      }
      y.current = I;
      P.clearRect(0, 0, u_current.width, u_current.height);
      P.save();
      P.scale(W, W);
      P.translate(-current, 0);
      const ce = xt / 2;
      const Y = xt - 4;
      const Q = E + e.length;
      for (let O = 0; O < Q; O++) {
        const L = O - E;
        const z = L >= 0 && L < e.length ? e[L] : 0.05;
        const V = Math.max(4, z * Y);
        const M = O * Rn;
        const H = ce - V / 2;
        P.fillStyle = Jr;
        const $ = on / 2;
        P.beginPath();
        P.roundRect(M, H, on, V, $);
        P.fill();
      }
      P.restore();

      if (f.current !== m.current || r) {
        p.current = requestAnimationFrame(b);
      }
    },
    [e, g, E, r]
  );

  U(() => {
    if (r) {
      y.current = performance.now();
      p.current = requestAnimationFrame(b);
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
  }, [r, b]);

  U(() => {
    if (!i || r) {
      if (v.current) {
        cancelAnimationFrame(v.current);
        v.current = null;
      }

      return;
    }
    const I = () => {
      const n_current = n.current;
      if (
        !n_current ||
        n_current.paused ||
        n_current.paused ||
        n_current.ended
      ) {
        v.current = null;
        return;
      }
      const P = n_current.currentTime / n_current.duration;
      const W = Math.ceil(P * E);

      if (W !== _.current) {
        _.current = W;
        C(W);
      }

      v.current = requestAnimationFrame(I);
    };
    v.current = requestAnimationFrame(I);

    return () => {
      if (v.current) {
        cancelAnimationFrame(v.current);
        v.current = null;
      }
    };
  }, [i, r, n, E, C]);

  U(() => {
    if (!r && !i && s) {
      const n_current = n.current;
      if (n_current && n_current.duration > 0 && n_current.currentTime > 0) {
        const D = n_current.currentTime / n_current.duration;
        const P = Math.ceil(D * E);
        _.current = P;
        C(P);
      } else {
        _.current = 0;
        C(0);
      }
    }
  }, [r, i, s, C, n, E]);

  U(() => {
    if (!r && s && !i) {
      C(_.current);
    }
  }, [e, E, r, s, i, C]);

  const N = S((I) => {
    const l_current = l.current;
    if (!l_current) {
      return 0;
    }
    const P = l_current.getBoundingClientRect();
    const W = "touches" in I ? I.touches[0].clientX : I.clientX;
    return Math.max(0, Math.min(1, (W - P.left) / P.width));
  }, []);

  const k = S(
    (I) => {
      if (!(!s || r)) {
        I.preventDefault();

        if (!i) {
          c();
          return;
        }

        h.current = true;
        d.current = N(I);
      }
    },
    [s, r, i, N, c]
  );

  const T = S(
    (I) => {
      if (h.current) {
        d.current = N(I);
      }
    },
    [N]
  );

  const A = S(() => {
    if (h.current) {
      a(d.current);
      h.current = false;
    }
  }, [a]);

  U(() => {
    const I = (P) => T(P);

    const D = () => A();

    window.addEventListener("mousemove", I);
    window.addEventListener("mouseup", D);
    window.addEventListener("touchmove", I);
    window.addEventListener("touchend", D);

    return () => {
      window.removeEventListener("mousemove", I);
      window.removeEventListener("mouseup", D);
      window.removeEventListener("touchmove", I);
      window.removeEventListener("touchend", D);
    };
  }, [T, A]);

  return o("div", {
    ref: l,
    style: {
      width: "100%",
      height: `${xt}px`,
      overflow: "hidden",
      cursor: s && !r ? "pointer" : "default",
    },
    onMouseDown: k,
    onTouchStart: k,
    children: o("canvas", { ref: u }),
  });
}
const I0 = "-Ho1i5aD";
const P0 = "tC8l4Awz";
const x0 = "qgaHaLq2";
const A0 = "ABusj9On";
const L0 = "QN61mWs7";
const O0 = "sb0Zcaza";
const M0 = "zYZ8RG9n";
const $0 = "kV8tSOUW";
const D0 = "MazmNAnz";
const B0 = "IygqjuIv";
const U0 = "Danfku1z";

const He = {
  voiceInput: I0,
  circleButton: P0,
  playButton: x0,
  hasRecording: A0,
  stopButton: L0,
  recording: O0,
  sendButton: M0,
  audioVisualizer: $0,
  waveformContainer: D0,
  recordingTime: B0,
  exiting: U0,
};

function F0({ onCancel: e, onSend: t, isExiting: n, onExitComplete: r }) {
  const [s, i] = x(false);

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
    startRecording: p,
    stopRecording: v,
    cancelRecording: _,
    playAudio: g,
    pauseAudio: w,
    seekTo: E,
    getAudioBlob: C,
  } = tc();

  U(() => {
    p();
  }, []);

  U(() => {
    if (n && r) {
      const P = setTimeout(r, 300);
      return () => clearTimeout(P);
    }
  }, [n, r]);

  const b = (P) => {
    if (!isFinite(P) || isNaN(P)) {
      return "00:00";
    }
    const W = Math.floor(P / 60);
    const J = Math.floor(P % 60);
    return `${W.toString().padStart(2, "0")}:${J.toString().padStart(2, "0")}`;
  };

  const N = () => {
    if (c) {
      if (d) {
        w();
      } else {
        g();
      }
    }
  };

  const k = () => {
    if (a) {
      v();
    }
  };

  const T = S(
    (P) => {
      E(P);
    },
    [E]
  );

  const A = S(async () => {
    if (!(s || !t)) {
      i(true);
      try {
        let P = null;

        if (a) {
          P = await v();
        } else {
          P = C();
        }

        if (!P) {
          return;
        }

        await t(P);
        _();
        e();
      } catch (P) {
        console.error("Failed to send voice message:", P);
      } finally {
        i(false);
      }
    }
  }, [s, a, v, C, t, _, e]);

  const I = b(a ? u : d ? f * m : m);

  const D = [
    He.voiceInput,
    a ? He.recording : "",
    c ? He.hasRecording : "",
    n ? He.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return o("div", {
    className: D,
    children: [
      o("button", {
        className: `${He.circleButton} ${He.playButton}`,
        onClick: N,
        children: d ? o(zs, { size: 20 }) : o(qs, { size: 20 }),
      }),
      o("div", {
        className: He.audioVisualizer,
        children: [
          o("div", {
            className: He.waveformContainer,
            children: o(R0, {
              levels: l,
              slideOffset: h,
              audioRef: y,
              isRecording: a,
              hasRecording: c,
              isPlaying: d,
              onSeek: T,
              onPlay: g,
            }),
          }),
          o("span", { className: He.recordingTime, children: I }),
        ],
      }),
      o("button", {
        className: `${He.circleButton} ${He.stopButton}`,
        onClick: k,
        children: o(Sc, { size: 20 }),
      }),
      o("button", {
        className: `${He.circleButton} ${He.sendButton}`,
        onClick: A,
        disabled: s || (a && u < 1),
        children: s ? o(yt, { size: "xs" }) : o(Gs, { size: 20 }),
      }),
    ],
  });
}
function mi({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: r,
  onCancelReply: s,
  autoFocus: i,
}) {
  const { text: a, spans: c, handleChange: u, reset: l } = qn();
  const [h, d] = x("text");
  const [f, m] = x(false);
  const [y, p] = x(false);
  const [v, _] = x(false);
  const [g, w] = x(false);
  const E = R(false);
  const C = R(null);
  const b = R(0);

  const {
    images: N,
    uploadingImages: k,
    isUploading: T,
    openFilePicker: A,
    removeImage: I,
    uploadFiles: D,
    clearAll: P,
    fileInputRef: W,
    handleFileChange: J,
  } = li(4);

  U(
    () => () => {
      if (C.current) {
        clearTimeout(C.current);
      }
    },
    []
  );
  const X = N.length > 0 || k.length > 0;
  const te = a.length > 0 || v || v || X;
  const ce = h === "voice";
  const Y = 1000; /* 1e3 */

  const Q = async () => {
    const j = a.trim().length > 0;
    const q = N.length > 0;
    if ((!j && !q) || v || T || a.length > Y) {
      return;
    }
    const oe = a.trim();
    const ie = [...c];

    const pe = N.map((re) => ({
      mediaId: re.mediaId,
    }));

    _(true);
    try {
      await e(oe, ie, pe.length > 0 ? pe : undefined);
      l();
      P();
    } catch (re) {
      console.error("Failed to submit comment:", re);
    } finally {
      _(false);
    }
  };

  const O = () => {
    E.current = true;
    d("voice");
    p(false);
  };

  const L = () => {
    m(true);
  };

  const z = () => {
    m(false);
    d("text");
    p(true);

    if (C.current) {
      clearTimeout(C.current);
    }

    C.current = window.setTimeout(() => {
      C.current = null;
      p(false);
    }, 300);
  };

  const V = S((j) => {
    j.preventDefault();
    j.stopPropagation();
    b.current++;

    if (j.dataTransfer?.types.includes("Files")) {
      w(true);
    }
  }, []);

  const M = S((j) => {
    j.preventDefault();
    j.stopPropagation();
  }, []);

  const H = S((j) => {
    j.preventDefault();
    j.stopPropagation();
    b.current--;

    if (b.current === 0) {
      w(false);
    }
  }, []);

  const $ = S(
    (j) => {
      j.preventDefault();
      j.stopPropagation();
      b.current = 0;
      w(false);
      const q = j.dataTransfer?.files;

      if (q && q.length > 0) {
        D(Array.from(q));
      }
    },
    [D]
  );

  const Z = [
    Ce.commentInput,
    te ? Ce.expanded : "",
    ce ? Ce.voiceMode : "",
    r ? Ce.replyMode : "",
    g ? Ce.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return o("div", {
    className: Z,
    onDragEnter: V,
    onDragOver: M,
    onDragLeave: H,
    onDrop: $,
    children: [
      g &&
        o("div", {
          className: Ce.dragOverlay,
          children: [
            o(Ks, { size: 24 }),
            o("span", { children: "Перетащите изображение" }),
          ],
        }),
      r &&
        o("div", {
          className: Ce.replyHeader,
          children: [
            o("span", {
              className: Ce.replyText,
              children: [
                "Ответ для ",
                o("span", { className: Ce.replyName, children: r.authorName }),
              ],
            }),
            o("button", {
              className: Ce.replyClose,
              onClick: s,
              children: o(nt, { size: 16 }),
            }),
          ],
        }),
      !ce &&
        !f &&
        X &&
        o("div", {
          className: Ce.attachmentStrip,
          children: o(ci, { images: N, uploadingImages: k, onRemove: I }),
        }),
      o("div", {
        className: Ce.inputRow,
        children: [
          o("button", {
            className: Ce.circleButton,
            onClick: ce ? L : A,
            children: ce ? o(nt, { size: 20 }) : o(Xs, { size: 20 }),
          }),
          o("div", {
            className: Ce.textareaContainer,
            children:
              ce || f
                ? o(F0, {
                    onCancel: L,
                    onSend: t,
                    isExiting: f,
                    onExitComplete: z,
                  })
                : o(k0, {
                    text: a,
                    spans: c,
                    onChange: u,
                    placeholder: n,
                    onSubmit: Q,
                    isEntering: y,
                    autoFocus: i,
                    isSubmitting: v,
                    sendDisabled: T,
                    onImagePaste: D,
                  }),
          }),
          !ce &&
            !f &&
            o("button", {
              className: `${Ce.circleButton} ${Ce.micButton}`,
              onClick: O,
              children: o(kc, { size: 20 }),
            }),
        ],
      }),
      o("input", {
        ref: W,
        type: "file",
        accept: bo,
        multiple: true,
        onChange: J,
        style: { display: "none" },
      }),
    ],
  });
}

const fo = ot((e) => ({
  activeAudioId: null,
  setActiveAudio: (t) => e({ activeAudioId: t }),
}));

const H0 = "_4REluXTH";
const V0 = "csThJX40";
const W0 = "_7tEz9WJs";
const j0 = "yICArXOf";
const z0 = "-QGEO-Ir";
const q0 = "F2vpEy3t";
const G0 = "thwOd-Oi";
const X0 = "cU3NuD-h";
const Y0 = "koGcQrYR";
const Z0 = "Ka6vy6TO";

const Ke = {
  voiceMessage: H0,
  playButton: V0,
  content: W0,
  waveform: j0,
  dragging: z0,
  bar: q0,
  played: G0,
  info: X0,
  time: Y0,
  duration: Z0,
};

const K0 = 45;
function J0(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r;
    t = t & t;
  }
  return Math.abs(t);
}
function Q0(e) {
  const t = [];
  let n = J0(e);
  for (let r = 0; r < K0; r++) {
    n = (n * 9301 + 49297) % 233280;
    const s = 0.2 + (n / 233280) * 0.8;
    t.push(s);
  }
  return t;
}
function Qr(e) {
  if (!isFinite(e) || isNaN(e)) {
    return "0:00";
  }
  const t = Math.floor(e / 60);
  const n = Math.floor(e % 60);
  return `${t}:${n.toString().padStart(2, "0")}`;
}
function eg({ src: e, duration: t = 0 }) {
  const n = Ne(() => e, [e]);

  const r = Ne(() => Q0(e), [e]);

  const s = fo((k) => k.activeAudioId);

  const i = fo((k) => k.setActiveAudio);

  const [a, c] = x(true);
  const [u, l] = x(0);
  const [h, d] = x(t);
  const [f, m] = x(false);
  const y = R(null);
  const p = R(null);
  const v = R(null);
  const _ = s === n;

  U(() => {
    if (s !== n && y.current && !y.current.paused) {
      y.current.pause();
      v.current && (cancelAnimationFrame(v.current), (v.current = null));
    }
  }, [s, n]);

  U(() => {
    const k = new Audio(e);
    y.current = k;

    const T = () => {
      d(k.duration || t);
      c(false);
    };

    const A = () => {
      l(0);

      if (v.current) {
        cancelAnimationFrame(v.current);
        v.current = null;
      }

      i(null);
    };

    const I = () => {
      c(false);
    };

    k.addEventListener("loadedmetadata", T);
    k.addEventListener("ended", A);
    k.addEventListener("error", I);

    return () => {
      k.removeEventListener("loadedmetadata", T);
      k.removeEventListener("ended", A);
      k.removeEventListener("error", I);
      k.pause();
      y.current = null;

      if (v.current) {
        cancelAnimationFrame(v.current);
      }

      if (fo.getState().activeAudioId === n) {
        i(null);
      }
    };
  }, [e, t, n, i]);

  const g = S(() => {
    if (y.current) {
      l(y.current.currentTime);
      v.current = requestAnimationFrame(g);
    }
  }, []);

  const w = S(() => {
    const y_current = y.current;

    if (y_current && !a) {
      if (_) {
        y_current.pause();
        v.current && (cancelAnimationFrame(v.current), (v.current = null));
        i(null);
      } else {
        i(n);
        y_current.play();
        g();
      }
    }
  }, [_, a, n, i, g]);

  const E = S(
    (k) => {
      if (!p.current || !h) {
        return 0;
      }
      const T = p.current.getBoundingClientRect();
      const k_clientX = k.clientX;
      return Math.max(0, Math.min(k_clientX - T.left, T.width)) / T.width;
    },
    [h]
  );

  const C = S(
    (k) => {
      const y_current = y.current;
      if (!y_current || !h || !h || f) {
        return;
      }
      const A = E(k);
      y_current.currentTime = A * h;
      l(y_current.currentTime);
    },
    [h, f, E]
  );

  const b = S(
    (k) => {
      const y_current = y.current;
      if (!y_current || !h) {
        return;
      }
      m(true);
      const A = E(k);
      y_current.currentTime = A * h;
      l(y_current.currentTime);
    },
    [h, E]
  );

  U(() => {
    if (!f) {
      return;
    }

    const k = (A) => {
      const y_current = y.current;
      if (!y_current || !h) {
        return;
      }
      const D = E(A);
      y_current.currentTime = D * h;
      l(y_current.currentTime);
    };

    const T = () => {
      m(false);
    };

    document.addEventListener("mousemove", k);
    document.addEventListener("mouseup", T);

    return () => {
      document.removeEventListener("mousemove", k);
      document.removeEventListener("mouseup", T);
    };
  }, [f, h, E]);
  const N = h > 0 ? u / h : 0;
  return o("div", {
    className: `${Ke.voiceMessage} ${_ ? Ke.playing : ""}`,
    children: [
      o("button", {
        className: Ke.playButton,
        onClick: w,
        disabled: a,
        children: a
          ? o(Qs, { size: 18 })
          : _
          ? o(zs, { size: 18 })
          : o(qs, { size: 18 }),
      }),
      o("div", {
        className: Ke.content,
        children: [
          o("div", {
            ref: p,
            className: `${Ke.waveform} ${f ? Ke.dragging : ""}`,
            onClick: C,
            onMouseDown: b,
            children: r.map((k, T) => {
              const I = (T + 0.5) / r.length <= N;
              return o(
                "div",
                {
                  className: `${Ke.bar} ${I ? Ke.played : ""}`,
                  style: { height: `${Math.max(4, k * 24)}px` },
                },
                T
              );
            }),
          }),
          o("div", {
            className: Ke.info,
            children: [
              o("span", {
                className: Ke.time,
                children: Qr(_ || u > 0 ? u : h),
              }),
              (_ || u > 0) &&
                o("span", { className: Ke.duration, children: ["/ ", Qr(h)] }),
            ],
          }),
        ],
      }),
    ],
  });
}
const tg = "EMoEIZFv";
const ng = "TCFYTRkG";
const og = "-Jv0cl93";
const rg = "_8ZH4gvtt";
const sg = "VgMMM-FP";
const ig = "MHUIw-Bn";
const ag = "ugI7Vwfw";
const cg = "eYiDjO7I";
const lg = "efgl9R1v";
const ug = "N5ciicq2";
const dg = "Y3Xvuphx";
const hg = "P1lAENLs";
const fg = "EafRTyEa";
const mg = "YgCVK2-C";
const pg = "E34stxAv";
const gg = "_5xeGurR-";
const vg = "_8CHHNoFp";
const _g = "qBk55euG";
const wg = "NTrrYRK4";
const yg = "Oy71u1HK";
const Cg = "Az3ELd41";
const Tg = "g9UiDqsQ";
const Ng = "-tabj2ls";
const kg = "LiWVk6u3";

const he = {
  commentWrapper: tg,
  threadItem: ng,
  avatarWrapper: og,
  threadLine: rg,
  commentBody: sg,
  showMoreBtn: ig,
  avatarPlaceholder: ag,
  comment: cg,
  small: lg,
  commentTime: ug,
  commentText: dg,
  commentActions: hg,
  commentContent: fg,
  avatarLink: mg,
  authorLink: pg,
  commentHeader: gg,
  moreButton: vg,
  commentHeaderLeft: _g,
  replyMention: wg,
  commentMedia: yg,
  reactionWrapper: Cg,
  commentAction: Tg,
  liked: Ng,
  replyButton: kg,
};

const Eg = mn(
  ({
    author: t,
    commentId: n,
    text: r,
    spans: s = [],
    attachments: i = [],
    createdAt: a,
    reactionsCount: c,
    isReacted: u,
    size: l = "sm",
    onLike: h,
    onReply: d,
    onReport: f,
    onEdit: m,
    onDelete: y,
    replyTo: p,
    hideAvatar: v = false,
    isWallOwner: _ = false,
  }) => {
    const g = Ws(a);

    const w = ke((T) => T.profile?.id);

    const E = t.id === w;
    const C = E || _;
    const b = l === "xs";

    const N = Ne(() => {
      const T = [];

      if (E && m) {
        T.push({
          id: "edit",
          label: "Редактировать",
          icon: o(Ys, { size: 16 }),
          onClick: () => m(n),
        });
      }

      if (C && y) {
        T.push({
          id: "delete",
          label: "Удалить",
          icon: o(qo, { size: 16 }),
          danger: true,
          onClick: () => y(n),
        });
      }

      if (!E) {
        T.push({
          id: "report",
          label: "Пожаловаться",
          icon: o(Zs, { size: 16 }),
          danger: true,
          onClick: () => f(n),
        });
      }

      return T;
    }, [E, C, n, m, y, f]);

    const k = `/@${t.username ?? t.id}`;
    return o("div", {
      className: `${he.comment} ${b ? he.small : ""}`,
      children: [
        !v &&
          o("a", {
            href: k,
            className: he.avatarLink,
            children: o(Ye, { src: t.avatar, alt: t.displayName, size: l }),
          }),
        o("div", {
          className: he.commentContent,
          children: [
            o("div", {
              className: he.commentHeader,
              children: [
                o("div", {
                  className: he.commentHeaderLeft,
                  children: [
                    o("a", {
                      href: k,
                      className: he.authorLink,
                      children: o(pn, {
                        name: t.displayName,
                        verified: t.isVerified,
                        hasNuksta: t.hasNuksta,
                        pin: t.pin,
                        size: l,
                      }),
                    }),
                    o("span", { className: he.commentTime, children: g }),
                  ],
                }),
                o(di, {
                  trigger: o(ei, { size: b ? 14 : 16 }),
                  items: N,
                  position: "bottom-right",
                  className: he.moreButton,
                }),
              ],
            }),
            (p || r) &&
              o("div", {
                className: he.commentText,
                children: [
                  p &&
                    o(Ee, {
                      children: [
                        o("a", {
                          href: `/@${p.username}`,
                          className: he.replyMention,
                          children: ["@", p.displayName],
                        }),
                        ", ",
                      ],
                    }),
                  r && o(ui, { text: r, spans: s }),
                ],
              }),
            Wn(i).length > 0 &&
              o("div", {
                className: he.commentMedia,
                children: o(Zo, { media: Wn(i) }),
              }),
            i
              .filter((T) => T.type === "audio")
              .map((T) => o(eg, { src: T.url, duration: T.duration }, T.id)),
            o("div", {
              className: he.commentActions,
              children: [
                o("button", {
                  className: he.replyButton,
                  onClick: d,
                  children: "Ответить",
                }),
                o("div", {
                  className: he.reactionWrapper,
                  children: o("button", {
                    className: `${he.commentAction} ${u ? he.liked : ""}`,
                    onClick: () => h(),
                    children: [
                      o(Gn, { size: 14, filled: u }),
                      o(nn, { value: c }),
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
);

const pi = mn(
  ({
    comment: t,
    onLike: n,
    onLikeReply: r,
    replyingTo: s,
    onStartReply: i,
    onCancelReply: a,
    onSubmitReply: c,
    onVoiceSend: u,
    onLoadReplies: l,
    onReport: h,
    onEdit: d,
    onDelete: f,
    isLoadingReplies: m = false,
    flashingCommentId: y,
    isWallOwner: p = false,
  }) => {
    const v = s?.commentId === t.id;

    const _ = {
      id: t.author.id,
      username: t.author.username,
      avatar: t.author.avatar ?? "",
      displayName: t.author.displayName,
      isVerified: t.author.isVerified,
      pin: t.author.pin,
    };

    const g = t.previewReplies ?? [];
    const w = y === t.id;
    const E = t.stats.replies > g.length;

    const C = [
      { type: "parent", data: t, author: _ },
      ...g.map((b) => ({
        type: "reply",
        data: b,

        author: {
          id: b.author.id,
          username: b.author.username,
          avatar: b.author.avatar ?? "",
          displayName: b.author.displayName,
          isVerified: b.author.isVerified,
          pin: b.author.pin,
        },
      })),
    ];

    return o("div", {
      className: `${he.commentWrapper} ${w ? "flash-highlight" : ""}`,
      "data-comment-id": t.id,
      children: [
        C.map((b, N) => {
          const T = !(N === C.length - 1 && !v && !E);
          const A = y === b.data.id;
          return o(
            "div",
            {
              "data-comment-id": b.data.id,
              className: `${he.threadItem} ${A ? "flash-highlight" : ""}`,
              children: [
                o("div", {
                  className: he.avatarWrapper,
                  children: [
                    o("a", {
                      href: `/@${b.author.username ?? b.author.id}`,
                      className: he.avatarLink,
                      children: o(Ye, {
                        src: b.author.avatar,
                        alt: b.author.displayName,
                        size: "sm",
                      }),
                    }),
                    T && o("div", { className: he.threadLine }),
                  ],
                }),
                o("div", {
                  className: he.commentBody,
                  children: o(Eg, {
                    author: b.author,
                    commentId: b.data.id,
                    text: b.data.text,
                    spans: b.data.spans ?? [],
                    attachments: b.data.attachments ?? [],
                    replyTo: b.data.replyTo,
                    createdAt: b.data.createdAt,
                    reactionsCount: b.data.reactions.total,
                    isReacted: b.data.reactions.myReaction !== null,
                    size: "sm",
                    onLike: b.type === "parent" ? n : () => r(b.data.id),
                    onReply: () =>
                      b.type === "parent"
                        ? i(
                            t.id,
                            t.author.username ?? t.author.id,
                            t.author.displayName,
                            t.author.id
                          )
                        : i(
                            t.id,
                            b.data.author.username ?? b.data.author.id,
                            b.data.author.displayName,
                            b.data.author.id,
                            b.data.id
                          ),
                    onReport: h,
                    onEdit: d,
                    onDelete: f,
                    hideAvatar: true,
                    isWallOwner: p,
                  }),
                }),
              ],
            },
            b.data.id
          );
        }),
        v &&
          o("div", {
            className: he.threadItem,
            children: [
              o("div", {
                className: he.avatarWrapper,
                children: [
                  o("div", { className: he.avatarPlaceholder }),
                  E && o("div", { className: he.threadLine }),
                ],
              }),
              o("div", {
                className: he.commentBody,
                children: o(mi, {
                  placeholder: "Написать ответ...",
                  replyTo: { id: s.commentId, authorName: s.displayName },
                  onCancelReply: a,
                  onSubmit: c,
                  onVoiceSend: u,
                  autoFocus: true,
                }),
              }),
            ],
          }),
        E &&
          !m &&
          o("button", {
            className: he.showMoreBtn,
            onClick: () => l(t.id),
            children: ["Показать ещё ", t.stats.replies - g.length, " ответов"],
          }),
      ],
    });
  }
);

function bg({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: r = (s) => s,
}) {
  const s = R(null);
  const [i, a] = x(0);
  const [c, u] = x(0);
  const l = R(new Map());
  const h = R(new Map());
  const d = R(0);

  if (d.current !== e) {
    d.current = e;
    h.current.clear();
  }

  const f = S(
    (C) => {
      const b = r(C);
      return l.current.get(b) ?? t;
    },
    [r, t]
  );

  const m = S(
    (C) => {
      if (C === 0) {
        return 0;
      }
      const b = h.current.get(C);
      if (b !== undefined) {
        return b;
      }
      let N = 0;
      let k = 0;
      for (let T = C - 1; T >= 0; T--) {
        const A = h.current.get(T);
        if (A !== undefined) {
          N = T;
          k = A;
          break;
        }
      }
      for (let T = N; T < C; T++) {
        k += f(T);
      }
      h.current.set(C, k);
      return k;
    },
    [f]
  );

  const y = Ne(() => (e === 0 ? 0 : m(e - 1) + f(e - 1)), [e, m, f]);

  const { startIndex: p, endIndex: v } = Ne(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let C = 0;
    let b = e - 1;

    while (C < b) {
      const A = Math.floor((C + b) / 2);
      const I = m(A);
      const D = f(A);

      if (I + D < i) {
        C = A + 1;
      } else {
        b = A;
      }
    }

    const N = Math.max(0, C - n);
    let k = C;
    let T = m(C) - i;

    while (k < e && T < c + t * n) {
      T += f(k);
      k++;
    }

    k = Math.min(e - 1, k + n);
    return { startIndex: N, endIndex: k };
  }, [e, i, c, m, f, n, t]);

  const _ = Ne(() => {
    if (e === 0) {
      return [];
    }
    const C = [];
    for (let b = p; b <= v; b++) {
      C.push({ index: b, key: r(b), start: m(b), size: f(b) });
    }
    return C;
  }, [p, v, r, m, f, e]);

  const g = S(
    (C, b) => {
      if (!C) {
        return;
      }
      const N = r(b);
      const k = C.getBoundingClientRect().height;
      if (k <= 0) {
        return;
      }
      const T = l.current.get(N);

      if (T === undefined || Math.abs(T - k) > 2) {
        l.current.set(N, k);
        h.current.clear();
      }
    },
    [r]
  );

  const w = S(() => {
    if (s.current) {
      a(s.current.scrollTop);
    }
  }, []);

  const E = S(
    (C) => {
      if (s.current) {
        s.current.removeEventListener("scroll", w);
      }

      s.current = C;

      if (C) {
        u(C.clientHeight);
        a(C.scrollTop);
        C.addEventListener("scroll", w, { passive: true });
      }
    },
    [w]
  );

  U(() => {
    if (!s.current) {
      return;
    }
    const C = new ResizeObserver((b) => {
      for (const N of b) {
        u(N.contentRect.height);
      }
    });
    C.observe(s.current);

    return () => C.disconnect();
  }, []);

  U(
    () => () => {
      if (s.current) {
        s.current.removeEventListener("scroll", w);
      }
    },
    [w]
  );

  return { containerRef: E, virtualItems: _, totalSize: y, measureElement: g };
}
const Sg = "OSYFbJTc";
const Rg = "BZs335wO";
const Ig = "uHfvgHkC";
const Pg = "_0mjuADLO";
const xg = "-irX9LBI";
const Ag = "PkENmhoL";
const Lg = "Ipy3h0nq";
const Og = "_7EbOLXPm";
const Mg = "qUnBivge";
const $g = "XcWtT84I";
const Dg = "I-b0vKPW";
const Bg = "quGM4O7I";
const Ug = "EO684LVX";

const Ve = {
  comments: Sg,
  sortWrapper: Rg,
  sortSelect: Ig,
  commentsList: Pg,
  commentItem: xg,
  empty: Ag,
  loading: Lg,
  loadMoreSentinel: Og,
  virtualContainer: Mg,
  virtualContent: $g,
  virtualItem: Dg,
  loadMoreSpinner: Bg,
  inputWrapper: Ug,
};

const Fg = 120;
function Hg({
  comments: e,
  hasMore: t,
  isLoadingMore: n,
  onLoadMore: r,
  replyingTo: s,
  flashingCommentId: i,
  loadingRepliesId: a,
  isWallOwner: c,
  onLikeComment: u,
  onLikeReply: l,
  onStartReply: h,
  onCancelReply: d,
  onSubmitReply: f,
  onVoiceSend: m,
  onLoadReplies: y,
  onReport: p,
  onEdit: v,
  onDelete: _,
}) {
  const g = R(false);

  const {
    containerRef: w,
    virtualItems: E,
    totalSize: C,
    measureElement: b,
  } = bg({
    itemCount: e.length,
    estimatedItemHeight: Fg,
    overscan: 3,
    getItemKey: (k) => e[k]?.id ?? k,
  });

  U(() => {
    if (!t || n || n || E.length === 0) {
      g.current = false;
      return;
    }
    const k = E[E.length - 1]?.index ?? 0;
    const T = e.length - 5;

    if (k >= T && !g.current) {
      g.current = true;
      r();
    }
  }, [E, e.length, t, n, r]);

  U(() => {
    if (!n) {
      g.current = false;
    }
  }, [n]);

  const N = S(
    (k, T) => {
      b(k, T);
    },
    [b]
  );
  return o("div", {
    ref: w,
    className: Ve.virtualContainer,
    "data-comments-scroll": true,
    children: [
      o("div", {
        className: Ve.virtualContent,
        style: { height: `${C}px` },
        children: E.map((k) => {
          const T = e[k.index];
          return T
            ? o(
                "div",
                {
                  ref: (A) => N(A, k.index),
                  className: Ve.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${k.start}px)`,
                  },
                  children: o(pi, {
                    comment: T,
                    onLike: () => u(T.id),
                    onLikeReply: l,
                    replyingTo: s?.commentId === T.id ? s : null,
                    onStartReply: h,
                    onCancelReply: d,
                    onSubmitReply: f,
                    onVoiceSend: m,
                    onLoadReplies: y,
                    onReport: p,
                    onEdit: v,
                    onDelete: _,
                    isLoadingReplies: a === T.id,
                    flashingCommentId: i,
                    isWallOwner: c,
                  }),
                },
                k.key
              )
            : null;
        }),
      }),
      n &&
        o("div", {
          className: Ve.loadMoreSpinner,
          children: o(yt, { size: "sm" }),
        }),
    ],
  });
}
const Vg = "RdRqHiCV";
const Wg = "FYROmdqz";
const jg = "bsav7ThX";
const zg = "z1AuyfuE";
const qg = "K0xFyAWE";
const Gg = "mWNEI-I9";
const Xg = "_4upLrxLs";
const Yg = "cwEAgABO";
const Zg = "GVeyV9qJ";
const Kg = "nJt3vM9N";
const Jg = "_9JqPd9QQ";
const Qg = "JrId0rC7";

const ze = {
  editCommentModal: Vg,
  form: Wg,
  header: jg,
  title: zg,
  content: qg,
  editor: Gg,
  actions: Xg,
  mediaButtons: Yg,
  mediaButton: Zg,
  submitGroup: Kg,
  charCount: Jg,
  error: Qg,
};

const es = 2000; /* 2e3 */
function ev({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = Xn();

  const s = Et((C) => C.editComment);

  const i = ke((C) => C.profile);

  const a = ut();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = qn(t, n);

  const [f, m] = x(false);
  const y = es - c.length;
  const p = y < 0;
  const v = c !== t;
  const _ = JSON.stringify(u) !== JSON.stringify(n);
  const g = v || _;

  const w = S(
    (C) => {
      d(C.emoji);
    },
    [d]
  );

  const E = S(async () => {
    if (!(!c.trim() || p || p || !g || p || !g || f)) {
      m(true);
      try {
        await s(e, c, u);
        r();
      } catch (C) {
        console.error("Failed to update comment:", C);
      } finally {
        m(false);
      }
    }
  }, [c, u, p, g, f, s, e, r]);

  return o(wt, {
    frameless: true,
    onClose: r,
    className: ze.editCommentModal,
    children: o("div", {
      className: ze.form,
      children: [
        o("div", {
          className: ze.header,
          children: o("span", {
            className: ze.title,
            children: "Редактирование комментария",
          }),
        }),
        o("div", {
          className: ze.content,
          children: [
            o(Ye, { src: i?.avatar ?? "", size: "sm" }),
            o(Yn, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Комментарий...",
              maxLength: es,
              autoFocus: true,
              className: ze.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        o("div", {
          className: ze.actions,
          children: [
            o("div", {
              className: ze.mediaButtons,
              children:
                !a &&
                o(Yo, { onEmojiSelect: w, buttonClassName: ze.mediaButton }),
            }),
            o("div", {
              className: ze.submitGroup,
              children: [
                p &&
                  o("span", {
                    className: `${ze.charCount} ${ze.error}`,
                    children: y,
                  }),
                o(De, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => r(),
                  children: "Отмена",
                }),
                o(De, {
                  size: "md",
                  disabled: !c.trim() || p || p || !g || p || !g || f,
                  onClick: E,
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
function tv({
  comments: e,
  isLoading: t,
  isLoadingMore: n,
  hasMore: r,
  sort: s,
  onSortChange: i,
  onLikeComment: a,
  onAddComment: c,
  onVoiceSend: u,
  onLoadMore: l,
  isWallOwner: h = false,
  variant: d = "modal",
  hideInput: f = false,
}) {
  const y = ut() && d === "modal";
  const [p, v] = x(null);
  const [_, g] = x(null);
  const [w, E] = x(null);
  const [C, b] = x(null);
  const N = R(null);
  const { openModal: k } = Xn();

  const T = Et((L) => L.highlightedCommentId);

  const A = Et((L) => L.clearHighlightedComment);

  const I = Et((L) => L.loadReplies);

  const D = Et((L) => L.deleteComment);

  const P = Et((L) => L.toggleCommentLike);

  ac({
    sentinelRef: N,
    hasMore: r,
    isLoading: n,
    onLoadMore: l,
    rootMargin: "200px",
  });

  U(() => {
    if (!T) {
      return;
    }
    const L =
      document.querySelector("[data-comments-scroll]") ||
      document.querySelector("[data-comments-modal]");
    if (L) {
      L.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const V = document.querySelector("[data-comments-section]");

      if (V) {
        V.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    const z = window.setTimeout(() => {
      g(T);
      A();
      const V = window.setTimeout(() => {
        g(null);
      }, 600);
      return () => clearTimeout(V);
    }, 300);
    return () => clearTimeout(z);
  }, [T, A]);

  const W = async (L, z, V) => {
    if (p) {
      await c({
        text: L,
        spans: z,
        parentId: p.commentId,
        replyToUserId: p.userId,
        replyToInfo: {
          id: p.userId,
          username: p.username,
          displayName: p.displayName,
        },
        attachments: V,
      });

      v(null);
    }
  };

  const J = (L, z, V, M, H) => {
    v({ commentId: L, username: z, displayName: V, userId: M, replyId: H });
  };

  const X = () => {
    v(null);
  };

  const te = S(
    (L) => {
      P(L);
    },
    [P]
  );

  const ce = S(
    async (L) => {
      E(L);
      try {
        await I(L);
      } finally {
        E(null);
      }
    },
    [I]
  );

  const Y = S((L) => {
    b(L);
  }, []);

  const Q = S(
    (L) => {
      let z = "";
      let V = [];
      for (const M of e) {
        if (M.id === L) {
          z = M.text;
          V = M.spans ?? [];
          break;
        }
        const H = M.previewReplies?.find(($) => $.id === L);
        if (H) {
          z = H.text;
          V = H.spans ?? [];
          break;
        }
      }
      k(o(ev, { commentId: L, initialText: z, initialSpans: V }));
    },
    [e, k]
  );

  const O = S(
    (L) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        D(L);
      }
    },
    [D]
  );

  return o("div", {
    className: Ve.comments,
    children: [
      o("div", {
        className: Ve.sortWrapper,
        children: o("select", {
          value: s,
          onChange: (L) => i(L.target.value),
          className: Ve.sortSelect,
          children: [
            o("option", { value: "new", children: "Новые" }),
            o("option", { value: "old", children: "Старые" }),
            o("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? o("div", { className: Ve.loading, children: o(yt, {}) })
        : e.length === 0
        ? o("div", { className: Ve.empty, children: "Нет комментариев" })
        : y
        ? o(Hg, {
            comments: e,
            hasMore: r,
            isLoadingMore: n,
            onLoadMore: l,
            replyingTo: p,
            flashingCommentId: _,
            loadingRepliesId: w,
            isWallOwner: h,
            onLikeComment: a,
            onLikeReply: te,
            onStartReply: J,
            onCancelReply: X,
            onSubmitReply: W,
            onVoiceSend: u,
            onLoadReplies: ce,
            onReport: Y,
            onEdit: Q,
            onDelete: O,
          })
        : o("div", {
            className: Ve.commentsList,
            children: [
              e.map((L) =>
                o(
                  "div",
                  {
                    className: Ve.commentItem,
                    children: o(pi, {
                      comment: L,
                      onLike: () => a(L.id),
                      onLikeReply: te,
                      replyingTo: p?.commentId === L.id ? p : null,
                      onStartReply: J,
                      onCancelReply: X,
                      onSubmitReply: W,
                      onVoiceSend: u,
                      onLoadReplies: ce,
                      onReport: Y,
                      onEdit: Q,
                      onDelete: O,
                      isLoadingReplies: w === L.id,
                      flashingCommentId: _,
                      isWallOwner: h,
                    }),
                  },
                  L.id
                )
              ),
              r &&
                o("div", {
                  ref: N,
                  className: Ve.loadMoreSentinel,
                  children: n && o(yt, { size: "sm" }),
                }),
            ],
          }),
      !f &&
        o("div", {
          className: Ve.inputWrapper,
          children: o(mi, {
            onSubmit: (L, z, V) => c({ text: L, spans: z, attachments: V }),
            onVoiceSend: u,
          }),
        }),
      C &&
        o(fi, { targetType: "comment", targetId: C, onClose: () => b(null) }),
    ],
  });
}
function nv(e) {
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
function Wn(e) {
  return e
    .filter(
      (t) =>
        t.type === "image" ||
        t.type === "video" ||
        (t.type === "media" && "media" in t)
    )
    .map((t) => (t.type === "media" && "media" in t ? t.media : t));
}
function gi(e) {
  return e.find((t) => t.type === "poll");
}
const ov = 300;
const rv = 500;

const sv = mn(
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
    const d = ut();
    const { openModal: f, closeModal: m } = Xn();

    const y = ye((me) => me.setCurrentPost);

    const p = ye((me) => me.posts.find((ae) => ae.id === t.id));

    const v = ke((me) => me.profile);

    const { isFollowing: _, follow: g, unfollow: w } = ic(t.author.id);
    const E = h && v?.id !== t.author.id ? _ : undefined;
    const C = v?.id === t.author.id;

    const {
      liked: b,
      totalLikes: N,
      handleLike: k,
      handleDoubleTap: T,
      handleComment: A,
      handleRepost: I,
      handleReport: D,
      handleEdit: P,
      handleDelete: W,
      handleCopyLink: J,
      handlePollVote: X,
      handlePollVoteMultiple: te,
    } = Jp(t, { isOwnPost: C, openModal: f, closeModal: m, onDelete: l });

    const ce = S(() => {
      if (E !== undefined) {
        if (E) {
          f(
            o(kh, {
              displayName: t.author.displayName,
              onConfirm: w,
              onClose: m,
            })
          );
        } else {
          g();
        }
      }
    }, [E, t.author.displayName, g, w, f, m]);

    const Y = R(null);
    const Q = R(null);
    const O = R(null);
    const [L, z] = x(ov);
    const [V, M] = x(0);
    const H = V > L;
    U(
      () => () => {
        if (O.current) {
          cancelAnimationFrame(O.current);
          O.current = null;
        }
      },
      []
    );

    const $ = S(
      (me) => {
        if (me && h) {
          O.current && cancelAnimationFrame(O.current);

          O.current = requestAnimationFrame(() => {
            O.current = null;
            M(me.scrollHeight);
          });
        }

        if (Q) {
          Q.current = me;
        }
      },
      [h]
    );

    const Z = S((me) => {
      me.stopPropagation();

      z((ae) => ae + rv);
    }, []);

    sc(t.id, Y);
    const j = R(null);
    const q = R(0);

    const oe = S((me) => {
      j.current = me.target;
    }, []);

    const ie = S(() => {
      y(p ?? t);
      const ae = t.author.username ?? t.author.id;
      $(`/@${ae}/post/${t.id}`);
    }, [t, p, y]);

    const pe = S(
      (me) => {
        const me_target = me.target;
        if (
          me_target.closest("button") ||
          me_target.closest("a") ||
          me_target.closest("a") ||
          me_target.closest("video") ||
          me_target.closest("a") ||
          me_target.closest("video") ||
          me_target.closest("img")
        ) {
          return;
        }
        if (d) {
          const ee = Date.now();
          if (ee - q.current < 300) {
            q.current = 0;
            T();
            return;
          }
          q.current = ee;
          return;
        }
        if (j.current !== me_target) {
          j.current = null;
          return;
        }
        j.current = null;
        const K = window.getSelection();

        if (!K || K.toString().length <= 0) {
          ie();
        }
      },
      [d, T, ie]
    );

    const re = Ne(() => nv(t.author), [t.author]);

    const je = Ne(() => Wn(t.attachments), [t.attachments]);

    const be = Ne(() => gi(t.attachments), [t.attachments]);

    const dt = o("div", {
      className: `${Re.postInner} ${h ? Re.isFeed : ""} ${r || ""}`,
      children: [
        h &&
          o("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            children: o(Ye, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: E,
              onFollowBadgeClick: ce,
            }),
          }),
        o("div", {
          className: Re.postContent,
          children: [
            o(Hf, {
              author: re,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !h,
              isOnOwnProfile: s,
              isPinned: i,
              onReport: D,
              onEdit: c ?? P,
              onDelete: W,
              onPin: u,
              onCopyLink: J,
            }),
            o("div", {
              className: Re.postBody,
              children: [
                t.text &&
                  o("div", {
                    className: Re.textWrapper,
                    children: [
                      o("div", {
                        ref: $,
                        className: `${Re.text} ${H ? Re.collapsed : ""}`,
                        style: h && H ? { maxHeight: `${L}px` } : undefined,
                        children: o(ui, {
                          text: t.text,
                          spans: t.spans ?? [],
                        }),
                      }),
                      h &&
                        H &&
                        o("button", {
                          type: "button",
                          className: Re.expandButton,
                          onClick: Z,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                je.length > 0 && o(Zo, { media: je, isFeed: h }),
                be &&
                  o(sf, {
                    title: be.question,
                    options: be.options.map((me) => ({
                      id: me.id,
                      text: me.text,
                      votes: me.votes ?? 0,
                    })),
                    totalVotes: be.totalVotes ?? 0,
                    voted:
                      (be.myVotes ?? []).length > 0 ||
                      (be.myVote !== undefined && be.myVote !== null),
                    selectedOptionId: be.myVote,
                    selectedOptionIds: be.myVotes ?? [],
                    multipleChoice: be.multipleChoice ?? false,
                    onVote: X,
                    onVoteMultiple: te,
                    disabled: be.id.startsWith("temp-"),
                  }),
                t.originalPost && o(ap, { originalPost: t.originalPost }),
                o(Vm, {
                  liked: b,
                  reposted: false,
                  likesCount: N,
                  repostsCount: t.stats.reposts,
                  commentsCount: t.stats.comments,
                  viewsCount: t.stats.views,
                  dominantEmoji: t.dominantEmoji,
                  onLike: k,
                  onRepost: I,
                  onComment: A,
                  disableRepost: C,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return h
      ? o("article", {
          ref: Y,
          className: `${Re.post} ${a ? "flash-highlight" : ""}`,
          onMouseDown: oe,
          onClick: pe,
          children: dt,
        })
      : o("div", { ref: Y, children: dt });
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

const iv = "InmPF5d0";
const av = "-yE9w2BE";
const cv = "-gCyC6KA";
const lv = "YQDdKE40";
const In = { badge: iv, red: av, green: cv, blue: lv };
function uv({ type: e }) {
  const t =
    e === "like"
      ? In.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? In.green
      : In.blue;
  return o("div", {
    className: `${In.badge} ${t}`,
    children: [
      e === "follow" && o(ti, { size: 12 }),
      ["wall_post", "reply"].includes(e) && o(zo, { size: 12, filled: true }),
      e === "like" && o(Gn, { size: 12, filled: true }),
      e === "repost" && o(Fn, { size: 12 }),
    ],
  });
}
const dv = "g6-1VZON";
const hv = "lynW5Wa4";
const fv = "T0fnHo-a";
const mv = "rjatUzSP";
const pv = "QJXel6jH";
const gv = "M0L3TUQK";
const vv = "uaNtVNYe";
const _v = "h2cCDI2R";
const wv = "I-2aZIQb";
const yv = "OiCpxOxo";
const Cv = "_68znS2mA";

const Ge = {
  container: dv,
  clearAllButton: hv,
  toastList: fv,
  toast: mv,
  toastLeft: pv,
  toastData: gv,
  title: vv,
  message: _v,
  dragging: wv,
  closeButton: yv,
  belowTabs: Cv,
};

const Tv = Gt(null);
function Nv({ children: e }) {
  const [t, n] = x([]);

  const r = S((c) => {
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

  const s = S((c) => {
    n((u) => u.filter((l) => l.id !== c));
  }, []);

  const i = S(() => {
    n([]);
  }, []);

  const a = qa();

  U(() => {
    if (a) {
      const c = bv(a.type);

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

      jt.setState({ lastSseToast: null });
    }
  }, [a, r]);

  return o(Tv.Provider, {
    value: { toasts: t, addToast: r, removeToast: s, clearAll: i },
    children: [e, o(kv, { toasts: t, onRemove: s, onClearAll: i })],
  });
}
function kv({ toasts: e, onRemove: t, onClearAll: n }) {
  const [r, s] = x(false);

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
    className: `${Ge.container} ${i ? Ge.belowTabs : ""}`,
    children: [
      o("div", {
        className: `${Ge.toastList} ${r ? Ge.clearing : ""}`,
        children: a.map((u, l) =>
          o(
            Rv,
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
        o(De, {
          className: Ge.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const Ev = 80;
function bv(e) {
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
function Sv(e) {
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
function Rv({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: r = false,
}) {
  const s = R(null);
  const [i, a] = x(0);
  const [c, u] = x(false);
  const [l, h] = x(false);
  const d = R(0);
  const f = R(false);

  const m = (C) => {
    d.current = C.clientX;
    f.current = false;
    u(true);
  };

  const y = S(
    (C) => {
      if (!c) {
        return;
      }
      const b = C.clientX - d.current;

      if (Math.abs(b) > 5) {
        f.current = true;
      }

      a(b);
    },
    [c]
  );

  const p = S(() => {
    if (c) {
      u(false);

      if (Math.abs(i) > Ev) {
        h(true);
        a(i > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!f.current) {
          const C = Sv(e);

          if (C) {
            $(C);
            t(e.id);
          }
        }
      }
    }
  }, [c, i, t, e]);

  U(() => {
    if (c) {
      document.addEventListener("mousemove", y);
      document.addEventListener("mouseup", p);

      return () => {
        document.removeEventListener("mousemove", y);
        document.removeEventListener("mouseup", p);
      };
    }
  }, [c, y, p]);

  const v = (C) => {
    d.current = C.touches[0].clientX;
    u(true);
  };

  const _ = (C) => {
    if (!c) {
      return;
    }
    const b = C.touches[0].clientX - d.current;
    a(b);
  };

  const g = () => {
    p();
  };

  const w = l || r ? 0 : Math.max(0, 1 - Math.abs(i) / 200);
  const E = r ? 400 : i;
  return o("div", {
    ref: s,
    className: `${Ge.toast} ${c ? Ge.dragging : ""}`,
    style: {
      transform: `translateX(${E}px)`,
      opacity: w,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: m,
    onTouchStart: v,
    onTouchMove: _,
    onTouchEnd: g,
    children: [
      o("div", {
        className: Ge.toastLeft,
        children: [
          o(Ye, {
            src: e.actorAvatar || "",
            badge: o(uv, { type: e.notificationType }),
          }),
          o("div", {
            className: Ge.toastData,
            children: [
              e.actorName &&
                o("div", {
                  className: Ge.title,
                  children: o(pn, { name: e.actorName }),
                }),
              o("p", { className: Ge.message, children: e.message }),
            ],
          }),
        ],
      }),
      o("button", {
        className: Ge.closeButton,
        onClick: (C) => {
          C.stopPropagation();
          t(e.id);
        },
        onMouseDown: (C) => C.stopPropagation(),
        onTouchStart: (C) => C.stopPropagation(),
        children: o(nt, { size: 16 }),
      }),
    ],
  });
}
const Iv = "Ud6qvRRd";
const Pv = "kzTK4YgB";
const xv = "a7Cxtsok";
const Av = "D1RDF-pF";
const Lv = "wPhOb3DB";
const Ov = "rrrryD13";
const Mv = "pO3FId5P";
const $v = "Y-gzFyZu";
const Dv = "Bnd7yPWS";
const Bv = "vVObi6FX";
const Uv = "erZ4kzKX";
const Fv = "nyzroaD5";

const Mt = {
  container: Iv,
  toast: Pv,
  slideUp: xv,
  leaving: Av,
  fadeOut: Lv,
  info: Ov,
  icon: Mv,
  message: $v,
  closeButton: Dv,
  success: Bv,
  warning: Uv,
  error: Fv,
};

const Hv = { success: Vc, error: Dc, warning: zc, info: Js };
function Vv({ id: e, type: t, message: n, onRemove: r }) {
  const [s, i] = x(false);
  const Hv_t = Hv[t];

  const c = S(() => {
    i(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return o("div", {
    className: `${Mt.toast} ${Mt[t]} ${s ? Mt.leaving : ""}`,
    children: [
      o("span", { className: Mt.icon, children: o(Hv_t, { size: 20 }) }),
      o("span", { className: Mt.message, children: n }),
      o("button", {
        className: Mt.closeButton,
        onClick: c,
        children: o(nt, { size: 14 }),
      }),
    ],
  });
}
function Wv() {
  const e = Wt((n) => n.toasts);

  const t = Wt((n) => n.removeToast);

  return (
    e.length === 0 ||
    o("div", {
      className: Mt.container,
      children: e.map((n) =>
        o(Vv, { id: n.id, type: n.type, message: n.message, onRemove: t }, n.id)
      ),
    })
  );
}
const jv = "fJ5Pi5qC";
const zv = "_5tn92ejU";
const qv = "_0gSftf9q";
const Gv = "MPKjHh5V";
const Pn = { content: jv, icon: zv, text: qv, button: Gv };
const ts = "phone-verification-required";
function Xv() {
  const [e, t] = x(false);

  const n = ke((s) => s.profile?.id ?? "");

  U(() => {
    const s = () => t(true);
    window.addEventListener(ts, s);

    return () => window.removeEventListener(ts, s);
  }, []);

  if (!e) {
    return null;
  }

  const r = `https://t.me/itd_verification_bot?start=${n}`;
  return o(wt, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: o("div", {
      className: Pn.content,
      children: [
        o("div", { className: Pn.icon, children: o(Wc, { size: 48 }) }),
        o("p", {
          className: Pn.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        o("a", {
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          className: Pn.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
const Yv = "bDtnMOtP";
const Zv = "NCty1Mw6";
const Kv = "DPhGAlZS";
const Jv = "Ea-iW9dx";
const xn = { tabs: Yv, indicator: Zv, button: Kv, active: Jv };
function Qv({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: r,
  className: s = "",
}) {
  const [i, a] = x(t);
  const c = n !== undefined ? n : i;
  const [u, l] = x({});
  const h = R([]);
  const d = R(null);

  const f = S(() => {
    const v = h.current[c];
    if (v) {
      const v_parentElement = v.parentElement;
      const g = v_parentElement
        ? parseFloat(getComputedStyle(v_parentElement).paddingLeft)
        : 0;
      l({
        width: v.offsetWidth,
        transform: `translateX(${v.offsetLeft - g}px)`,
      });
    }
  }, [c]);

  U(() => {
    f();
  }, [f]);

  U(() => {
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

  const m = (v) => {
    if (n === undefined) {
      a(v);
    }

    r?.(v, e[v]);
  };

  const y = (v) => (typeof v == "string" ? v : v.label);

  const p = (v, _) => (typeof v == "string" ? `${_}` : v.id);

  return o("div", {
    ref: d,
    className: `${xn.tabs} ${s}`,
    children: [
      o("div", { className: xn.indicator, style: u }),
      e.map((v, _) =>
        o(
          "button",
          {
            ref: (g) => {
              h.current[_] = g;
            },
            onClick: () => m(_),
            className: `${xn.button} ${c === _ ? xn.active : ""}`,
            children: y(v),
          },
          p(v, _)
        )
      ),
    ],
  });
}
function e1(e) {
  const t = S(() => {
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

  const [n, r] = x(t);

  U(() => {
    const s = () => r(t());
    window.addEventListener("resize", s);

    return () => window.removeEventListener("resize", s);
  }, [t]);

  return n;
}
function t1() {
  U(() => {
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
function n1({ onClose: e, onPrev: t, onNext: n }) {
  U(() => {
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
function o1({ initialIndex: e, total: t }) {
  const [n, r] = x(e);
  const [s, i] = x(false);
  const a = R(null);

  const c = S(() => {
    if (a.current) {
      clearTimeout(a.current);
      a.current = null;
      i(false);
    }
  }, []);

  const u = S(
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

  const l = S(() => {
    if (n > 0) {
      u(n - 1);
    }
  }, [n, u]);

  const h = S(() => {
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
const mo = 150;
const r1 = 0.3;
function ns(e, t) {
  const n = e.clientX - t.clientX;
  const r = e.clientY - t.clientY;
  return Math.sqrt(n * n + r * r);
}
function s1({
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
  const [l, h] = x(0);
  const [d, f] = x(0);
  const [m, y] = x(false);
  const [p, v] = x(1);
  const [_, g] = x(null);
  const [w, E] = x(1);
  const [C, b] = x(0);
  const [N, k] = x(0);
  const [T, A] = x(false);
  const I = R(1);
  const D = R({ x: 0, y: 0 });
  const P = R(false);
  const W = R(false);
  const J = R(0);
  const X = R(0);
  const te = R(0);
  const ce = R(1);
  const Y = R({ x: 0, y: 0 });
  const Q = R({ x: 0, y: 0 });
  const O = R({ x: 0, y: 0 });
  const L = R(null);
  const z = R(false);
  const V = R(null);
  const M = R(null);
  const H = R(false);

  const $ = S((K) => {
    I.current = K;
    E(K);
  }, []);

  const Z = S((K, ee) => {
    D.current = { x: K, y: ee };
    b(K);
    k(ee);
  }, []);

  const j = S(() => {
    A(true);
    $(1);
    Z(0, 0);

    setTimeout(() => A(false), 300);
  }, [$, Z]);

  U(() => {
    I.current = 1;
    D.current = { x: 0, y: 0 };
    E(1);
    b(0);
    k(0);
    A(false);
  }, [e]);

  U(
    () => () => {
      if (V.current) {
        clearTimeout(V.current);
        V.current = null;
      }
    },
    []
  );

  const q = S(
    (K) => {
      let ee = K;

      if ((e === 0 && ee > 0) || (e === t - 1 && ee < 0)) {
        ee *= r1;
      }

      return ee;
    },
    [e, t]
  );

  const oe = S(
    () =>
      Math.abs(d) > mo
        ? (u(r), true)
        : (i(true),
          f(0),
          v(1),
          (V.current = window.setTimeout(() => {
            V.current = null;
            i(false);
          }, 300)),
          false),
    [d, r, u, i]
  );

  const ie = S(
    (K) => {
      if (!r && t > 1) {
        if (t > 1) {
          a();
          V.current && (clearTimeout(V.current), (V.current = null));
          M.current !== null && (c(M.current), (M.current = null));
          i(false);
          g(null);
          h(0);
          y(true);
          z.current = false;
          O.current = { x: K.clientX, y: K.clientY };
          L.current = null;
          K.preventDefault();
        }
      }
    },
    [r, t, a, c, i]
  );

  const pe = S(
    (K) => {
      if (!m || r) {
        return;
      }
      const ee = K.clientX - O.current.x;
      const ge = K.clientY - O.current.y;

      if (!L.current && (Math.abs(ee) > 10 || Math.abs(ge) > 10)) {
        L.current = Math.abs(ee) > Math.abs(ge) ? "x" : "y";
        z.current = true;
      }

      if (L.current === "x") {
        h(q(ee));
      } else if (L.current === "y") {
        f(ge);
        const Be = Math.min(Math.abs(ge) / mo, 1);
        v(1 - Be * 0.5);
      }
    },
    [m, r, q]
  );

  const re = S(() => {
    if (!(!m || r)) {
      y(false);

      if (L.current === "x") {
        const ee = M.current ?? e;
        let ge = ee;

        if (l < -80 && ee < t - 1) {
          ge = ee + 1;
        } else if (l > 80 && ee > 0) {
          ge = ee - 1;
        }

        if (ge !== ee) {
          const Be = n[ge]?.width || 0;
          const Ct = n[ee]?.width || 0;
          const gn = ge > ee ? -Ct : Be;
          i(true);
          g(ge);
          h(gn);
          M.current = ge;

          V.current = window.setTimeout(() => {
            V.current = null;
            i(false);
            g(null);
            h(0);
            M.current = null;
            c(ge);
          }, 500);
        } else {
          i(true);
          h(0);

          V.current = window.setTimeout(() => {
            V.current = null;
            i(false);
          }, 300);
        }
      } else {
        if (L.current === "y") {
          oe();
        }
      }

      L.current = null;
    }
  }, [m, r, e, l, t, n, oe, c, i]);

  const je = S(
    (K) => {
      if (!r) {
        return;
      }
      X.current = Math.max(X.current, K.touches.length);

      if (K.touches.length === 2) {
        P.current = true;
        W.current = true;
        te.current = ns(K.touches[0], K.touches[1]);
        ce.current = I.current;
        y(false);
        L.current = null;
        h(0);
        f(0);
        v(1);
        A(false);
        return;
      }

      if (I.current > 1) {
        X.current = 1;
        Y.current = { x: K.touches[0].clientX, y: K.touches[0].clientY };
        Q.current = { ...D.current };
        y(true);
        z.current = false;
        L.current = null;
        A(false);
        const K_target_1 = K.target;
        H.current =
          K_target_1.tagName === "IMG" &&
          K_target_1.hasAttribute("data-viewer-image");
        return;
      }
      X.current = 1;
      W.current = false;
      a();

      if (V.current) {
        clearTimeout(V.current);
        V.current = null;
      }

      i(false);
      h(0);
      const K_target = K.target;
      H.current =
        K_target.tagName === "IMG" &&
        K_target.hasAttribute("data-viewer-image");
      O.current = { x: K.touches[0].clientX, y: K.touches[0].clientY };
      L.current = null;
      y(true);
    },
    [r, a, i]
  );

  const be = S(
    (K) => {
      if (!r) {
        return;
      }
      X.current = Math.max(X.current, K.touches.length);

      if (P.current && K.touches.length >= 2) {
        const Be = ns(K.touches[0], K.touches[1]);
        const Ct = ce.current * (Be / te.current);
        $(Math.min(Math.max(Ct, 0.5), 5));
        return;
      }

      if (I.current > 1 && m && !P.current) {
        const Be = K.touches[0].clientX - Y.current.x;
        const Ct = K.touches[0].clientY - Y.current.y;

        if (Math.abs(Be) > 5 || Math.abs(Ct) > 5) {
          z.current = true;
        }

        Z(Q.current.x + Be, Q.current.y + Ct);
        return;
      }
      if (!m) {
        return;
      }
      const ee = K.touches[0].clientX - O.current.x;
      const ge = K.touches[0].clientY - O.current.y;

      if (!L.current && (Math.abs(ee) > 10 || Math.abs(ge) > 10)) {
        L.current = Math.abs(ee) > Math.abs(ge) ? "x" : "y";
      }

      if (L.current === "x") {
        h(q(ee));
      } else if (L.current === "y") {
        f(ge);
        const Be = Math.min(Math.abs(ge) / mo, 1);
        v(Math.round((1 - Be * 0.7) * 100) / 100);
      }
    },
    [r, m, $, Z, q]
  );

  const dt = S(() => {
    if (r) {
      if (P.current) {
        P.current = false;
        J.current = Date.now();

        if (I.current < 1.1) {
          j();
        }

        return;
      }
      if (I.current > 1) {
        y(false);
        return;
      }
      if (X.current > 1 || W.current) {
        y(false);
        f(0);
        v(1);
        L.current = null;
        return;
      }
      if (Date.now() - J.current < 300) {
        y(false);
        f(0);
        v(1);
        L.current = null;
        return;
      }
      if (m) {
        y(false);

        if (!H.current) {
          if (!L.current) {
            u(true);
            return;
          }
          if (L.current === "y" && d > 30) {
            u(true);
            return;
          }
        }

        if (L.current === "x") {
          let ee = e;

          if (l < -50 && e < t - 1) {
            ee = e + 1;
          } else if (l > 50 && e > 0) {
            ee = e - 1;
          }

          i(true);
          h(0);

          if (ee !== e) {
            c(ee);
          }

          V.current = window.setTimeout(() => {
            V.current = null;
            i(false);
          }, 500);
        } else {
          if (L.current === "y") {
            oe();
          }
        }
        L.current = null;
      }
    }
  }, [r, m, e, l, d, t, oe, c, u, i, j]);

  const me = S(() => {
    const K = M.current ?? e;
    const ee = n[K] || { width: 600, height: 400 };
    if (s && _ !== null) {
      const ge = n[_] || ee;
      return { width: ge.width, height: ge.height };
    }
    if (m && L.current === "x" && l !== 0) {
      const ge = l < 0 ? Math.min(K + 1, t - 1) : Math.max(K - 1, 0);
      if (ge === K) {
        return ee;
      }
      const Be = n[ge] || ee;
      const Ct = ee.width / 2 + Be.width / 2;
      const gn = Math.min(Math.abs(l) / Ct, 1);
      return {
        width: ee.width + (Be.width - ee.width) * gn,
        height: ee.height + (Be.height - ee.height) * gn,
      };
    }
    return ee;
  }, [n, e, s, _, m, l, t]);

  const ae = S(() => {
    i(true);
    f(window.innerHeight);
    v(0);
  }, [i]);

  return {
    offsetX: l,
    offsetY: d,
    isDragging: m,
    opacity: p,
    wasDragging: z,
    displaySize: me(),
    animateClose: ae,
    zoom: { scale: w, panX: C, panY: N, isAnimating: T },
    desktopHandlers: {
      onMouseDown: ie,
      onMouseMove: pe,
      onMouseUp: re,
      onMouseLeave: re,
    },
    mobileHandlers: { onTouchStart: je, onTouchMove: be, onTouchEnd: dt },
  };
}
const i1 = "CNP0fBGd";
const a1 = "FxpoCP7s";
const c1 = "qO26zEBn";
const l1 = "-iyRv-th";
const u1 = "liHkL9mP";
const d1 = "U70eja-G";
const h1 = "q1lrkTZi";
const f1 = "oxBkKER-";
const m1 = "d4VkyUQq";
const p1 = "UK-OMndz";
const g1 = "_2CH2oEyg";
const v1 = "gGVStb2K";
const _1 = "_7Ac4a5ul";
const w1 = "ZyoB5yJC";
const y1 = "DWdVTu-N";

const Oe = {
  viewer: i1,
  closeButton: a1,
  counter: c1,
  windowContainer: l1,
  track: u1,
  slide: d1,
  mobileContainer: h1,
  mobileTrack: f1,
  mobileSlide: m1,
  navArea: p1,
  navLeft: g1,
  navRight: v1,
  dots: _1,
  dot: w1,
  active: y1,
};

function C1({ onClick: e }) {
  return o("button", {
    className: Oe.closeButton,
    onClick: e,
    children: o(nt, { size: 24 }),
  });
}
function T1({ current: e, total: t }) {
  return (
    t <= 1 || o("div", { className: Oe.counter, children: [e + 1, " / ", t] })
  );
}
function N1({ currentIndex: e, total: t, onPrev: n, onNext: r }) {
  return (
    t <= 1 ||
    o(Ee, {
      children: [
        o("button", {
          className: `${Oe.navArea} ${Oe.navLeft}`,
          onClick: n,
          disabled: e === 0,
          children: o(Mc, { size: 24 }),
        }),
        o("button", {
          className: `${Oe.navArea} ${Oe.navRight}`,
          onClick: r,
          disabled: e === t - 1,
          children: o($c, { size: 24 }),
        }),
      ],
    })
  );
}
function k1({ total: e, currentIndex: t, onDotClick: n }) {
  return (
    e <= 1 ||
    o("div", {
      className: Oe.dots,
      children: Array.from({ length: e }, (r, s) =>
        o(
          "button",
          {
            className: `${Oe.dot} ${s === t ? Oe.active : ""}`,
            onClick: () => n(s),
          },
          s
        )
      ),
    })
  );
}
function E1({
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
  const l = R(null);

  const h = () => {
    let d = 0;
    for (let f = 0; f < n; f++) {
      d += t[f]?.width || 0;
    }
    return d;
  };

  return o("div", {
    className: Oe.windowContainer,
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
      className: Oe.track,
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
            className: Oe.slide,
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
function b1({
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
    className: Oe.mobileContainer,
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
      className: Oe.mobileTrack,
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
            className: Oe.mobileSlide,
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
function S1({ images: e, initialIndex: t, onClose: n }) {
  const r = R(null);
  const s = ut();
  const i = e1(e);
  const a = o1({ initialIndex: t, total: e.length });
  t1();

  const c = S(
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

  const u = s1({
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

  n1({ onClose: c, onPrev: a.goToPrev, onNext: a.goToNext });

  const l = S(
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

  const h = S(() => {
    if (u.wasDragging.current) {
      u.wasDragging.current = false;
      return;
    }
    c(s);
  }, [c, s]);

  return lt(
    o("div", {
      ref: r,
      className: Oe.viewer,
      style: {
        "--opacity": u.opacity,
        transition: a.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: l,
      children: [
        !s && o(C1, { onClick: c }),
        o(T1, { current: a.currentIndex, total: e.length }),
        !s &&
          o(E1, {
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
          o(b1, {
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
          o(N1, {
            currentIndex: a.currentIndex,
            total: e.length,
            onPrev: a.goToPrev,
            onNext: a.goToNext,
          }),
        o(k1, {
          total: e.length,
          currentIndex: a.currentIndex,
          onDotClick: a.goToIndex,
        }),
      ],
    }),
    document.body
  );
}
function R1() {
  const { isOpen: e, images: t, initialIndex: n, close: r } = Us();
  return e ? o(S1, { images: t, initialIndex: n, onClose: r }) : null;
}
function I1({ children: e, currentPath: t }) {
  const n = Oa();

  const r = ke((i) => i.initialize);

  U(() => {
    if (n === "idle") {
      r();
    }
  }, [n, r]);

  U(() => {
    if (n === "loading" || n === "idle") {
      return;
    }
    const i = xr.some((a) => t.startsWith(a));

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

  const s = xr.some((i) => t.startsWith(i));
  return n === "idle" || (n === "loading" && !s)
    ? null
    : n === "service_error"
    ? o(P1, {})
    : n === "account_deleted"
    ? o(x1, {})
    : o(Ee, { children: e });
}
function P1() {
  const e = ke((s) => s.initialize);

  const [t, n] = x(false);
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
          children: o(De, {
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
function x1() {
  const e = ke((u) => u.canRestore);

  const t = ke((u) => u.restoreDeadline);

  const n = ke((u) => u.restoreAccount);

  const r = ke((u) => u.logout);

  const [s, i] = x(false);

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
          ? o(Ee, {
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
                    o(De, { onClick: c, children: "Восстановить аккаунт" }),
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
          : o(Ee, {
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
                  children: o(De, { onClick: () => r(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
function A1({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  gap: r = 0,
  getItemKey: s = (a) => a,
  initialMeasuredHeights: i,
}) {
  const [, a] = x(0);
  const c = R(typeof window !== "undefined" ? window.scrollY : 0);
  const u = R(i ?? new Map());
  const l = R(null);
  const h = R(null);
  const d = R(new Map());

  const f = (w) => u.current.get(w) ?? t;

  const m = (w) => {
    let E = 0;
    for (let C = 0; C < w; C++) {
      E += f(C) + r;
    }
    return E;
  };

  const y = () => {
    if (e === 0) {
      return 0;
    }
    let w = 0;
    for (let E = 0; E < e; E++) {
      w += f(E);
    }
    w += Math.max(0, e - 1) * r;
    return w;
  };

  const p = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const c_current = c.current;
    const window_innerHeight = window.innerHeight;
    let C = 0;
    let b = 0;
    for (let T = 0; T < e; T++) {
      const A = f(T) + r;
      if (b + A > c_current) {
        C = T;
        break;
      }
      b += A;
    }
    let N = C;
    let k = 0;
    for (
      let T = C;
      T < e && ((k += f(T) + r), (N = T), !(k >= window_innerHeight));
      T++
    ) {}
    return { start: Math.max(0, C - n), end: Math.min(e - 1, N + n) };
  };

  const v = () => {
    if (e === 0) {
      return [];
    }
    const { start: w, end: E } = p();
    const C = [];
    for (let b = w; b <= E; b++) {
      C.push({ index: b, key: s(b), start: m(b) });
    }
    return C;
  };

  if (!h.current) {
    h.current = new ResizeObserver((w) => {
      let E = false;
      for (const C of w) {
        const C_target = C.target;
        const N = d.current.get(C_target);
        if (N === undefined) {
          continue;
        }
        const k = C.contentRect.height;

        if (k > 0 && u.current.get(N) !== k) {
          u.current.set(N, k);
          E = true;
        }
      }

      if (E) {
        a((C) => C + 1);
      }
    });
  }

  const _ = S((w, E) => {
    if (!w) {
      return;
    }
    d.current.set(w, E);
    h.current?.observe(w);
    const C = w.getBoundingClientRect().height;

    if (C > 0 && u.current.get(E) !== C) {
      u.current.set(E, C);
      a((b) => b + 1);
    }
  }, []);
  U(() => {
    const w = () => {
      if (!l.current) {
        l.current = requestAnimationFrame(() => {
          l.current = null;
          c.current = window.scrollY;

          a((E) => E + 1);
        });
      }
    };
    window.addEventListener("scroll", w, { passive: true });
    c.current = window.scrollY;

    a((E) => E + 1);

    return () => {
      window.removeEventListener("scroll", w);

      if (l.current) {
        cancelAnimationFrame(l.current);
      }

      h.current?.disconnect();
      d.current.clear();
    };
  }, []);
  const g = S(() => new Map(u.current), []);
  return {
    virtualItems: v(),
    totalSize: y(),
    measureElement: _,
    getMeasuredHeights: g,
  };
}
const L1 = "IWKvHh6o";
const O1 = "B0hQs8NU";
const M1 = "q8F-aimP";
const $1 = "qkSaz-qE";

const An = {
  virtualFeed: L1,
  virtualContent: O1,
  virtualItem: M1,
  loadingMore: $1,
};

function D1({
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
  const h = R(null);
  const d = R(false);
  const [f, m] = x(null);
  const [y, p] = x(window.innerWidth < 1174);

  const v = ye((T) => T.highlightedPostId);

  const _ = ye((T) => T.clearHighlightedPost);

  U(() => {
    const T = () => p(window.innerWidth < 1174);
    window.addEventListener("resize", T);

    return () => window.removeEventListener("resize", T);
  }, []);
  const g = y ? 0 : c;

  const w = S(
    (T) => {
      const e_T = e[T];
      if (!e_T) {
        return T;
      }
      const I = e_T.attachments?.[0]?.id ?? "";
      return `${e_T.id}-${I}`;
    },
    [e]
  );

  const {
    virtualItems: E,
    totalSize: C,
    measureElement: b,
    getMeasuredHeights: N,
  } = A1({
    itemCount: e.length,
    estimatedItemHeight: i,
    overscan: a,
    gap: g,
    getItemKey: w,
    initialMeasuredHeights: u,
  });

  U(
    () => () => {
      if (l) {
        l(N());
      }
    },
    [l, N]
  );

  U(() => {
    if (!v) {
      return;
    }
    h.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const T = setTimeout(() => {
      m(v);
      _();

      setTimeout(() => m(null), 600);
    }, 300);
    return () => clearTimeout(T);
  }, [v, _]);

  const k = S(() => {
    if (!s || !r || !r || n) {
      return;
    }
    const T =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (T < 500 && !d.current) {
      d.current = true;
      s();
    }

    if (T > 600) {
      d.current = false;
    }
  }, [s, r, n]);

  U(() => {
    if (!n) {
      d.current = false;
    }
  }, [n]);

  U(() => {
    window.addEventListener("scroll", k, { passive: true });

    return () => window.removeEventListener("scroll", k);
  }, [k]);

  return o("div", {
    ref: h,
    className: An.virtualFeed,
    children: [
      o("div", {
        className: An.virtualContent,
        style: { height: `${C}px` },
        children: E.map((T) => {
          const A = e[T.index];
          return A
            ? o(
                "div",
                {
                  ref: (I) => b(I, T.index),
                  className: An.virtualItem,
                  style: { transform: `translateY(${T.start}px)` },
                  children: t(A, T.index, A.id === f),
                },
                T.key
              )
            : null;
        }),
      }),
      n &&
        o("div", {
          className: An.loadingMore,
          children: o(yt, { size: "sm" }),
        }),
    ],
  });
}
const Bn = 0.25;
const xo = 4;
const os = 0.15;
function K_(e, t, n) {
  const [r, s] = x(1);
  const [i, a] = x({ x: 0, y: 0 });
  const c = R(1);
  const u = R({ x: 0, y: 0 });
  const l = R(false);
  const h = R({ x: 0, y: 0 });
  const d = R(null);

  const f = S((g, w) => {
    c.current = g;
    u.current = w;
    s(g);
    a(w);
  }, []);

  const m = S((g, w, E, C, b) => {
    const N = (C - E.x) / g;
    const k = (b - E.y) / g;
    return { x: C - N * w, y: b - k * w };
  }, []);

  const y = S(
    (g = Infinity) => {
      const e_current = e.current;
      if (!e_current) {
        return;
      }
      const E = e_current.getBoundingClientRect();
      const C = 32;
      const b = (E.width - C * 2) / t;
      const N = (E.height - C * 2) / n;
      const k = Math.max(Bn, Math.min(b, N, g));
      f(k, { x: (E.width - t * k) / 2, y: (E.height - n * k) / 2 });
    },
    [t, n, f, e]
  );

  const p = S(() => {
    const e_current = e.current;
    if (!e_current) {
      return;
    }
    const w = e_current.getBoundingClientRect();
    const E = w.width / 2;
    const C = w.height / 2;
    const c_current = c.current;
    const N = Math.min(xo, c_current + os);
    f(N, m(c_current, N, u.current, E, C));
  }, [e, f, m]);

  const v = S(() => {
    const e_current = e.current;
    if (!e_current) {
      return;
    }
    const w = e_current.getBoundingClientRect();
    const E = w.width / 2;
    const C = w.height / 2;
    const c_current = c.current;
    const N = Math.max(Bn, c_current - os);
    f(N, m(c_current, N, u.current, E, C));
  }, [e, f, m]);

  const _ = S(() => y(), [y]);

  return {
    zoom: r,
    panOffset: i,
    zoomRef: c,
    panOffsetRef: u,
    isPanningRef: l,
    panStartRef: h,
    pinchRef: d,
    updateTransform: f,
    zoomToPoint: m,
    fitAndCenter: y,
    zoomIn: p,
    zoomOut: v,
    zoomReset: _,
    MIN_ZOOM: Bn,
    MAX_ZOOM: xo,
  };
}
const B1 = "ea0BOksL";
const U1 = "_3x0lVqeJ";
const F1 = "k1PR-0WB";
const H1 = "wRV5rijq";
const V1 = "GlXz5E-N";
const W1 = "IHhDMDG-";
const j1 = "elFWsy5U";
const z1 = "eapcoUbX";
const q1 = "_6XVFDO74";
const G1 = "_8u1ESpvI";
const X1 = "fP-JtUai";
const Y1 = "G1-kgIh2";
const Z1 = "BbahIL--";
const K1 = "pxz5YAHz";
const J1 = "GdwJM8jd";
const Q1 = "Iy4DuTTO";
const e_ = "cVrkG6OP";
const t_ = "K2WqA9qX";
const n_ = "F9c4GceQ";
const o_ = "g9QMGpAA";
const r_ = "mJqJVajZ";
const s_ = "_12S7evy3";
const i_ = "lX21h9TT";
const a_ = "nbY8-Al7";
const c_ = "I0ApjuFw";

const ue = {
  modalContent: B1,
  container: U1,
  toolbar: F1,
  toolGroup: H1,
  separator: V1,
  spacer: W1,
  toolButton: j1,
  active: z1,
  sizeButton: q1,
  sizePreview: G1,
  colorPalette: X1,
  colorButton: Y1,
  colorPicker: Z1,
  zoomLabel: K1,
  canvasContainer: J1,
  viewport: Q1,
  actions: e_,
  cancelButton: t_,
  saveButton: n_,
  confirmOverlay: o_,
  confirmDialog: r_,
  confirmText: s_,
  confirmActions: i_,
  confirmCancel: a_,
  confirmClose: c_,
};

const l_ = [
  "#000000",
  "#FFFFFF",
  "#FF3B30",
  "#FF9500",
  "#FFCC00",
  "#34C759",
  "#007AFF",
  "#5856D6",
  "#AF52DE",
  "#FF2D55",
  "#8E8E93",
  "#00C7BE",
];

const u_ = [2, 4, 8, 12, 20, 32];

const J_ = mn(
  ({
    tool: t,
    color: n,
    brushSize: r,
    zoom: s,
    canUndo: i,
    canRedo: a,
    onToolChange: c,
    onColorChange: u,
    onBrushSizeChange: l,
    onZoomIn: h,
    onZoomOut: d,
    onZoomReset: f,
    onUndo: m,
    onRedo: y,
    onClear: p,
  }) =>
    o("div", {
      className: ue.toolbar,
      children: [
        o("div", {
          className: ue.toolGroup,
          children: [
            o("button", {
              className: `${ue.toolButton} ${t === "brush" ? ue.active : ""}`,
              onClick: () => c("brush"),
              title: "Кисть",
              children: o(cc, {}),
            }),
            o("button", {
              className: `${ue.toolButton} ${t === "eraser" ? ue.active : ""}`,
              onClick: () => c("eraser"),
              title: "Ластик",
              children: o(uc, {}),
            }),
            o("button", {
              className: `${ue.toolButton} ${t === "line" ? ue.active : ""}`,
              onClick: () => c("line"),
              title: "Линия",
              children: o(dc, {}),
            }),
            o("button", {
              className: `${ue.toolButton} ${
                t === "rectangle" ? ue.active : ""
              }`,
              onClick: () => c("rectangle"),
              title: "Прямоугольник",
              children: o(hc, {}),
            }),
            o("button", {
              className: `${ue.toolButton} ${t === "circle" ? ue.active : ""}`,
              onClick: () => c("circle"),
              title: "Круг",
              children: o(lc, {}),
            }),
          ],
        }),
        o("div", { className: ue.separator }),
        o("div", {
          className: ue.toolGroup,
          children: u_.map((v) =>
            o(
              "button",
              {
                className: `${ue.sizeButton} ${r === v ? ue.active : ""}`,
                onClick: () => l(v),
                title: `${v}px`,
                children: o("span", {
                  className: ue.sizePreview,
                  style: { width: Math.min(v, 20), height: Math.min(v, 20) },
                }),
              },
              v
            )
          ),
        }),
        o("div", { className: ue.separator }),
        o("div", {
          className: ue.colorPalette,
          children: [
            l_.map((v) =>
              o(
                "button",
                {
                  className: `${ue.colorButton} ${n === v ? ue.active : ""}`,
                  style: { backgroundColor: v },
                  onClick: () => u(v),
                  title: v,
                },
                v
              )
            ),
            o("input", {
              type: "color",
              value: n,
              onChange: (v) => u(v.currentTarget.value),
              className: ue.colorPicker,
              title: "Свой цвет",
            }),
          ],
        }),
        o("div", { className: ue.spacer }),
        o("div", {
          className: ue.toolGroup,
          children: [
            o("button", {
              className: ue.toolButton,
              onClick: d,
              disabled: s <= Bn,
              title: "Уменьшить",
              children: o(gc, {}),
            }),
            o("button", {
              className: ue.zoomLabel,
              onClick: f,
              title: "Сбросить зум",
              children: [Math.round(s * 100), "%"],
            }),
            o("button", {
              className: ue.toolButton,
              onClick: h,
              disabled: s >= xo,
              title: "Увеличить",
              children: o(pc, {}),
            }),
          ],
        }),
        o("div", { className: ue.separator }),
        o("div", {
          className: ue.toolGroup,
          children: [
            o("button", {
              className: ue.toolButton,
              onClick: m,
              disabled: !i,
              title: "Отменить (Ctrl+Z)",
              children: o(mc, {}),
            }),
            o("button", {
              className: ue.toolButton,
              onClick: y,
              disabled: !a,
              title: "Повторить (Ctrl+Y)",
              children: o(fc, {}),
            }),
            o("button", {
              className: ue.toolButton,
              onClick: p,
              title: "Очистить",
              children: o(qo, { size: 20 }),
            }),
          ],
        }),
      ],
    })
);

const d_ = "NoLqdGhZ";
const h_ = "ZJgdLwPI";
const f_ = "r9t-7AuI";
const po = { layout: d_, wrapper: h_, content: f_ };

const m_ = ve(() =>
  de(
    () => import("./index-pz8oiQ7d.js"),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])
  ).then((e) => ({
    default: e.Aside,
  }))
);

const p_ = ve(() =>
  de(
    () => import("./index-BM8iO1l6.js"),
    __vite__mapDeps([7, 1, 4, 5, 8, 9, 10])
  ).then((e) => ({
    default: e.MobileNavigation,
  }))
);

const g_ = ["/login", "/register", "/forgot-password", "/verify-email"];

const v_ = [
  "/terms",
  "/privacy",
  "/cookies",
  "/external",
  "/support",
  "/delete-account",
  "/child-safety",
];

const __ = ({ children: e }) => {
  const t = ut();
  const n = ec();
  const [r, s] = x(window.location.pathname);
  U(() => {
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
  const i = g_.includes(r);
  const a = v_.includes(r);
  return i
    ? o(Ee, { children: e })
    : o(Qa.Provider, {
        value: { isHidden: n },
        children: o("div", {
          className: po.layout,
          children: o("div", {
            className: po.wrapper,
            children: [
              !a &&
                o(Bt, {
                  fallback: null,
                  children: t ? o(p_, {}) : o(m_, {}),
                }),
              !a && !t && o(mu, {}),
              o("div", { className: po.content, children: e }),
            ],
          }),
        }),
      });
};

const w_ = "bpf4GYjz";
const y_ = "crrL7XgI";
const C_ = "yhENW-7a";
const T_ = "_928LvLhD";
const N_ = "_6eF0w9KX";

const Qt = {
  page: w_,
  createPostWrapper: y_,
  tabsWrapper: C_,
  error: T_,
  empty: N_,
};

const k_ = (e) => {
  const t = ye((N) => N.posts);

  const n = ye((N) => N.activeFeed);

  const r = ye((N) => N.isLoading);

  const s = ye((N) => N.isLoadingMore);

  const i = ye((N) => N.hasMore);

  const a = ye((N) => N.error);

  const c = ye((N) => N.feedScrollPosition);

  const u = ye((N) => N.feedMeasuredHeights);

  const l = ye((N) => N.setActiveFeed);

  const h = ye((N) => N.fetchFeed);

  const d = ye((N) => N.loadMoreFeed);

  const f = ye((N) => N.createPost);

  const m = ye((N) => N.setFeedScrollPosition);

  const y = ye((N) => N.setFeedMeasuredHeights);

  const p = ke((N) => N.profile);

  const v = ke((N) => N.status);

  const _ = R(false);

  const g = Ne(() => t.map((N) => N.author.id), [t]);

  xa(g);

  U(() => {
    if (v === "authenticated" && t.length === 0 && !r) {
      h();
    }
  }, [n, v]);

  U(() => {
    if (t.length > 0 && c > 0 && !_.current) {
      _.current = true;

      requestAnimationFrame(() => {
        window.scrollTo(0, c);
      });
    }
  }, [t.length, c]);

  U(
    () => () => {
      m(window.scrollY);
    },
    [m]
  );

  const w = (N) => {
    const T = ["global", "clan", "following"][N] ?? "global";

    if (T !== n) {
      l(T);
    }
  };

  const E = async (N, k, T, A) => {
    if (p) {
      await f({
        wallOwnerId: p.id,
        text: N,
        spans: k,
        attachments: T,
        poll: A,
      });
    }
  };

  const C = S(() => {
    if (i && !s) {
      d();
    }
  }, [i, s, d]);

  const b = S((N, k, T) => o(sv, { post: N, isHighlighted: T }, N.id), []);

  return o("div", {
    className: Qt.page,
    children: [
      o("div", {
        className: Qt.tabsWrapper,
        children: o(Qv, {
          tabs: ["Для вас", "Лента кланов", "Подписки"],
          activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
          onChange: w,
        }),
      }),
      o("div", {
        className: Qt.createPostWrapper,
        children: [
          p && o(Ye, { src: p.avatar ?? "", alt: p.displayName, size: "sm" }),
          o(wh, { onSubmit: E }),
        ],
      }),
      a
        ? o("div", {
            className: Qt.error,
            children: [
              o("p", { children: a }),
              o("button", { onClick: () => h(), children: "Повторить" }),
            ],
          })
        : r && t.length === 0
        ? o(yt, {})
        : t.length === 0
        ? o("div", { className: Qt.empty, children: "Нет постов" })
        : t.length > 0
        ? o(D1, {
            posts: t,
            renderPost: b,
            isLoadingMore: s,
            hasMore: i,
            onLoadMore: C,
            estimatedPostHeight: 250,
            overscan: 3,
            initialMeasuredHeights: u,
            onMeasuredHeightsChange: y,
          })
        : null,
    ],
  });
};

const E_ = ve(() =>
  de(
    () => import("./index-Bc_AiJGP.js"),
    __vite__mapDeps([11, 8, 9, 12, 4, 3, 13])
  ).then((e) => ({
    default: e.Profile,
  }))
);

const b_ = ve(() =>
  de(() => import("./index-CcNv37oZ.js"), __vite__mapDeps([14, 12, 15])).then(
    (e) => ({
      default: e.Notifications,
    })
  )
);

const vi = ve(() =>
  de(() => import("./index-BAx5btBw.js"), []).then((e) => ({
    default: e.NotFound,
  }))
);

const S_ = ve(() =>
  de(() => import("./index-DKjpp1_f.js"), __vite__mapDeps([16, 17])).then(
    (e) => ({
      default: e.PostPage,
    })
  )
);

const R_ = ve(() =>
  de(
    () => import("./index-C3U1SnoF.js"),
    __vite__mapDeps([18, 19, 20, 21, 22, 2, 23, 24])
  ).then((e) => ({
    default: e.Login,
  }))
);

const I_ = ve(() =>
  de(
    () => import("./index-BfWq9Ywd.js"),
    __vite__mapDeps([25, 19, 20, 21, 22, 2, 23, 26])
  ).then((e) => ({
    default: e.Register,
  }))
);

const P_ = ve(() =>
  de(
    () => import("./index-xTPIdMnL.js"),
    __vite__mapDeps([27, 19, 20, 2, 23, 28])
  ).then((e) => ({
    default: e.ForgotPassword,
  }))
);

const x_ = ve(() =>
  de(
    () => import("./index-hltsc4x1.js"),
    __vite__mapDeps([29, 2, 23, 30])
  ).then((e) => ({
    default: e.ResetPassword,
  }))
);

const A_ = ve(() =>
  de(() => import("./index-Ds5s671A.js"), []).then((e) => ({
    default: e.VerifyEmail,
  }))
);

const L_ = ve(() =>
  de(() => import("./index-Dj0LLtmi.js"), __vite__mapDeps([31, 32])).then(
    (e) => ({
      default: e.Terms,
    })
  )
);

const O_ = ve(() =>
  de(() => import("./index-BuHqu7gU.js"), __vite__mapDeps([33, 34])).then(
    (e) => ({
      default: e.Privacy,
    })
  )
);

const M_ = ve(() =>
  de(() => import("./index-BtBxGP5F.js"), __vite__mapDeps([35, 36])).then(
    (e) => ({
      default: e.Cookies,
    })
  )
);

const $_ = ve(() =>
  de(() => import("./index-No2Z3lAb.js"), __vite__mapDeps([37, 38])).then(
    (e) => ({
      default: e.Onboarding,
    })
  )
);

const D_ = ve(() =>
  de(() => import("./index-BLX0B4s_.js"), __vite__mapDeps([39, 5, 40])).then(
    (e) => ({
      default: e.Search,
    })
  )
);

const B_ = ve(() =>
  de(() => import("./index-D2FtJbVY.js"), __vite__mapDeps([41, 42])).then(
    (e) => ({
      default: e.Hashtag,
    })
  )
);

const U_ = ve(() =>
  de(() => import("./index-BO9r1GH_.js"), __vite__mapDeps([43, 44])).then(
    (e) => ({
      default: e.ExternalLink,
    })
  )
);

const F_ = ve(() =>
  de(() => import("./index-CwjYDTJW.js"), __vite__mapDeps([45, 46])).then(
    (e) => ({
      default: e.Support,
    })
  )
);

const H_ = ve(() =>
  de(() => import("./index-DvhIGpPm.js"), __vite__mapDeps([47, 48])).then(
    (e) => ({
      default: e.DeleteAccount,
    })
  )
);

const V_ = ve(() =>
  de(() => import("./index-gV_KRAwC.js"), __vite__mapDeps([49, 50])).then(
    (e) => ({
      default: e.ChildSafety,
    })
  )
);

const W_ = ve(() =>
  de(() => import("./index-DHU-hRHK.js"), __vite__mapDeps([51, 52])).then(
    (e) => ({
      default: e.Event,
    })
  )
);

const j_ = ve(() =>
  de(() => import("./index-DUcNvV8b.js"), []).then((e) => ({
    default: e.Verification,
  }))
);

const z_ = ve(() =>
  de(() => import("./index-C9XKmywQ.js"), __vite__mapDeps([53, 54])).then(
    (e) => ({
      default: e.SubscriptionTerms,
    })
  )
);

const q_ = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return o(vi, {});
  }
  const t = e.slice(1);
  return o(E_, { username: t });
};

function G_() {
  const [e, t] = x(window.location.pathname);
  return o(Nv, {
    children: o(gu, {
      children: o(I1, {
        currentPath: e,
        children: [
          o(R1, {}),
          o(Wv, {}),
          o(Xv, {}),
          o(__, {
            children: o(Bt, {
              fallback: null,
              children: o(Bs, {
                onChange: (r) => {
                  const s = e;
                  t(r.url);

                  if (r.url !== "/" && r.url !== s) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  o(k_, { path: "/" }),
                  o(b_, { path: "/notifications" }),
                  o(R_, { path: "/login" }),
                  o(I_, { path: "/register" }),
                  o(P_, { path: "/forgot-password" }),
                  o(x_, { path: "/reset-password" }),
                  o(A_, { path: "/verify-email" }),
                  o(L_, { path: "/terms" }),
                  o(O_, { path: "/privacy" }),
                  o(M_, { path: "/cookies" }),
                  o($_, { path: "/onboarding" }),
                  o(D_, { path: "/search" }),
                  o(B_, { path: "/hashtag/:name" }),
                  o(U_, { path: "/external" }),
                  o(F_, { path: "/support" }),
                  o(H_, { path: "/delete-account" }),
                  o(V_, { path: "/child-safety" }),
                  o(W_, { path: "/event" }),
                  o(j_, { path: "/verification" }),
                  o(z_, { path: "/subscription-terms" }),
                  o(S_, { path: "/:username/post/:postId" }),
                  o(q_, { path: "/:slug" }),
                  o(vi, { default: true }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
Ki(document.getElementById("root")).render(o(Ms, { children: o(G_, {}) }));
export {
  $ as $,
  R as A,
  De as B,
  ia as C,
  Rs as D,
  ti as E,
  Do as F,
  qo as G,
  ve as H,
  nt as I,
  $e as J,
  ye as K,
  X_ as L,
  wt as M,
  kh as N,
  Qv as O,
  Bt as P,
  wh as Q,
  fi as R,
  yt as S,
  Ne as T,
  pn as U,
  D1 as V,
  sv as W,
  Ys as X,
  zo as Y,
  Gn as Z,
  de as __1,
  o as a,
  Fn as a0,
  Y_ as a1,
  Zr as a2,
  Et as a3,
  Mn as a4,
  Mc as a5,
  tv as a6,
  mi as a7,
  fe as a8,
  lt as a9,
  od as aa,
  B as ab,
  F as ac,
  jo as ad,
  Js as ae,
  Z_ as af,
  Ga as ag,
  ts as ah,
  qc as ai,
  Qs as aj,
  ta as ak,
  K_ as al,
  Bn as am,
  os as an,
  ue as ao,
  J_ as ap,
  xo as aq,
  pt as b,
  ke as c,
  x as d,
  Xn as e,
  Ye as f,
  Oc as g,
  ut as h,
  Ie as i,
  ga as j,
  Ee as k,
  jt as l,
  Ht as m,
  Uc as n,
  di as o,
  wn as p,
  S as q,
  ei as r,
  Ro as s,
  Je as t,
  ac as u,
  jc as v,
  Zs as w,
  Vs as x,
  U as y,
  lu as z,
};
