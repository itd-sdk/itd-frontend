const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DLiNWf-h.js",
      "assets/IconCheck-BI1LTQ_u.js",
      "assets/index-_oHXRFdv.css",
      "assets/index-BSx7i-hq.js",
      "assets/index-CSqGMxER.css",
      "assets/index-Bs0qi3Bs.js",
      "assets/index-ZVkbsz1m.css",
      "assets/index-DWMc0Uo9.js",
      "assets/index-ByN268aT.css",
      "assets/index-B2qhGbm8.js",
      "assets/IconChevronLeft-CGSManWK.js",
      "assets/index-DIXM3pTD.css",
      "assets/index-Kq8A-oTg.js",
      "assets/index-veNIPQgo.js",
      "assets/index-DK1lyy5c.css",
      "assets/index-CicuUVZy.js",
      "assets/index-Cmj9rins.css",
      "assets/IconEyeOff-DE5biNZb.js",
      "assets/index-C0p9oPLt.css",
      "assets/index-Ddho1Rxc.js",
      "assets/index-kbdVOSN5.css",
      "assets/index-CSW7FjxK.js",
      "assets/index-BzNWLvhn.css",
      "assets/index-mOqAoLuH.js",
      "assets/index-CZTSlJKO.css",
      "assets/index-C1sG57He.js",
      "assets/index-DTw0ermm.css",
      "assets/index-Dk_Pervk.js",
      "assets/index-BQvz7MW9.css",
      "assets/index-Fc4r9Do7.js",
      "assets/index-CxAGwyjC.css",
      "assets/index-CnvYv39W.js",
      "assets/index-CeZESMNV.css",
      "assets/index-CpebGf30.js",
      "assets/index-C0UiEUIL.css",
      "assets/index-CQpI-RV2.js",
      "assets/index-VYXL9Ht5.css",
      "assets/index-4dBPO8k6.js",
      "assets/index-D1yRK3LS.css",
      "assets/index-BLCUR-xB.js",
      "assets/index-Cl4QiAT3.css",
      "assets/index-CYB8cC8i.js",
      "assets/index-WmDeSqKN.css",
      "assets/index-CrIasEWe.js",
      "assets/index-B52QOVEQ.css",
      "assets/index-1W-Z__Gn.js",
      "assets/index-ATZ6ztiJ.css",
      "assets/index-D__vzu0g.js",
      "assets/index-cSZoRzaS.css",
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
  function o(s) {
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
    const i = o(s);
    fetch(s.href, i);
  }
})();
let Sn;
let le;
let gs;
let Yt;
let ur;
let vs;
let ws;
let _s;
let Wo;
let Io;
let Po;
let ys;
const bn = {};
const Cs = [];
const Mi = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function mt(e, t) {
  for (const o in t) {
    e[o] = t[o];
  }
  return e;
}
function Vo(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function gt(e, t, o) {
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
    a.children = arguments.length > 3 ? Sn.call(arguments, 2) : o;
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (i in e.defaultProps) {
      if (a[i] === undefined) {
        a[i] = e.defaultProps[i];
      }
    }
  }

  return yn(e, a, r, s, null);
}
function yn(e, t, o, r, s) {
  const i = {
    type: e,
    props: t,
    key: o,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: s ?? ++gs,
    __i: -1,
    __u: 0,
  };

  if (s == null && le.vnode != null) {
    le.vnode(i);
  }

  return i;
}
function Oi() {
  return { current: null };
}
function Te(e) {
  return e.children;
}

class ct {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  setState(e, t) {
    let o;

    o =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = mt({}, this.state));

    if (typeof e == "function") {
      e = e(mt({}, o), this.props);
    }

    if (e) {
      mt(o, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      xo(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      this.__e = true;
      e && this.__h.push(e);
      xo(this);
    }
  }
}

function on(e, t) {
  if (t == null) {
    return e.__ ? on(e.__, e.__i + 1) : null;
  }
  let o;
  for (; t < e.__k.length; t++) {
    if ((o = e.__k[t]) != null && o.__e != null) {
      return o.__e;
    }
  }
  return typeof e.type == "function" ? on(e) : null;
}
function Ns(e) {
  let t;
  let o;
  if ((e = e.__) != null && e.__c != null) {
    e.__e = null;
    e.__c.base = null;

    for (t = 0; t < e.__k.length; t++) {
      if ((o = e.__k[t]) != null && o.__e != null) {
        e.__e = e.__c.base = o.__e;
        break;
      }
    }

    return Ns(e);
  }
}
function xo(e) {
  if (
    (!e.__d && (e.__d = true) && Yt.push(e) && !to.__r++) ||
    ur != le.debounceRendering
  ) {
    ((ur = le.debounceRendering) || vs)(to);
  }
}
function to() {
  let e;
  let t;
  let o;
  let r;
  let s;
  let i;
  let a;
  let c = 1;

  while (Yt.length) {
    if (Yt.length > c) {
      Yt.sort(ws);
    }

    e = Yt.shift();
    c = Yt.length;

    if (e.__d) {
      o = undefined;
      r = undefined;
      s = (r = (t = e).__v).__e;
      i = [];
      a = [];

      t.__P &&
        (((o = mt({}, r)).__v = r.__v + 1),
        le.vnode && le.vnode(o),
        jo(
          t.__P,
          o,
          r,
          t.__n,
          t.__P.namespaceURI,
          32 & r.__u ? [s] : null,
          i,
          s ?? on(r),
          !!(32 & r.__u),
          a
        ),
        (o.__v = r.__v),
        (o.__.__k[o.__i] = o),
        ks(i, o, a),
        (r.__e = r.__ = null),
        o.__e != s && Ns(o));
    }
  }

  to.__r = 0;
}
function Ts(e, t, o, r, s, i, a, c, u, l, h) {
  let d;
  let f;
  let m;
  let N;
  let w;
  let g;
  let v;
  const p = (r && r.__k) || Cs;
  const t_length = t.length;
  u = $i(o, t, p, u, t_length);

  for (d = 0; d < t_length; d++) {
    if ((m = o.__k[d]) != null) {
      f = m.__i == -1 ? bn : p[m.__i] || bn;
      m.__i = d;
      g = jo(e, m, f, s, i, a, c, u, l, h);
      N = m.__e;

      m.ref &&
        f.ref != m.ref &&
        (f.ref && zo(f.ref, null, m), h.push(m.ref, m.__c || N, m));

      w == null && N != null && (w = N);

      (v = !!(4 & m.__u)) || f.__k === m.__k
        ? (u = bs(m, u, e, v))
        : typeof m.type == "function" && g !== undefined
        ? (u = g)
        : N && (u = N.nextSibling);

      m.__u &= -7;
    }
  }

  o.__e = w;
  return u;
}
function $i(e, t, o, r, s) {
  let i;
  let a;
  let c;
  let u;
  let l;
  const o_length = o.length;
  let d = o_length;
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
        ? (a = e.__k[i] = yn(null, a, null, null, null))
        : Array_isArray(a)
        ? (a = e.__k[i] = yn(Te, { children: a }, null, null, null))
        : a.constructor === undefined && a.__b > 0
        ? (a = e.__k[i] =
            yn(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
        : (e.__k[i] = a);

      u = i + f;
      a.__ = e;
      a.__b = e.__b + 1;
      c = null;
      (l = a.__i = Di(a, o, u, d)) != -1 && (d--, (c = o[l]) && (c.__u |= 2));

      c == null || c.__v == null
        ? (l == -1 && (s > o_length ? f-- : s < o_length && f++),
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
    for (i = 0; i < o_length; i++) {
      if ((c = o[i]) != null && (2 & c.__u) == 0) {
        c.__e == r && (r = on(c));
        Rs(c, c);
      }
    }
  }
  return r;
}
function bs(e, t, o, r) {
  let s;
  let i;
  if (typeof e.type == "function") {
    s = e.__k;

    for (i = 0; s && i < s.length; i++) {
      if (s[i]) {
        s[i].__ = e;
        t = bs(s[i], t, o, r);
      }
    }

    return t;
  }

  if (e.__e != t) {
    r &&
      (t && e.type && !t.parentNode && (t = on(e)),
      o.insertBefore(e.__e, t || null));

    t = e.__e;
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function lt(e, t) {
  t = t || [];

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some((o) => {
        lt(o, t);
      });
    } else {
      t.push(e);
    }
  }

  return t;
}
function Di(e, t, o, r) {
  let s;
  let i;
  let a;

  const { key, type } = e;

  let t_o = t[o];
  const h = t_o != null && (2 & t_o.__u) == 0;
  if (
    (t_o === null && key == null) ||
    (h && key == t_o.key && type == t_o.type)
  ) {
    return o;
  }
  if (r > (h ? 1 : 0)) {
    s = o - 1;

    for (i = o + 1; s >= 0 || i < t.length; ) {
      if (
        (t_o = t[(a = s >= 0 ? s-- : i++)]) != null &&
        (2 & t_o.__u) == 0 &&
        key == t_o.key &&
        type == t_o.type
      ) {
        return a;
      }
    }
  }
  return -1;
}
function dr(e, t, o) {
  if (t[0] == "-") {
    e.setProperty(t, o ?? "");
  } else {
    e[t] = o == null ? "" : typeof o != "number" || Mi.test(t) ? o : `${o}px`;
  }
}
function Dn(e, t, o, r, s) {
  let i;
  let a;
  e: if (t == "style") {
    if (typeof o == "string") {
      e.style.cssText = o;
    } else {
      if (typeof r == "string") {
        e.style.cssText = r = "";
      }

      if (r) {
        for (t in r) {
          if (!o || t in o) {
            dr(e.style, t, "");
          }
        }
      }

      if (o) {
        for (t in o) {
          if (!r || o[t] != r[t]) {
            dr(e.style, t, o[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    i = t != (t = t.replace(_s, "$1"));
    a = t.toLowerCase();

    t =
      a in e || t == "onFocusOut" || t == "onFocusOut" || t == "onFocusIn"
        ? a.slice(2)
        : t.slice(2);

    if (!e.l) {
      e.l = {};
    }

    e.l[t + i] = o;

    if (o) {
      if (r) {
        o.u = r.u;
      } else {
        o.u = Wo;
        e.addEventListener(t, i ? Po : Io, i);
      }
    } else {
      e.removeEventListener(t, i ? Po : Io, i);
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
        e[t] = o ?? "";
        break e;
      } catch {}
    }

    if (typeof o != "function") {
      if (o == null || (o === false && t[4] != "-")) {
        e.removeAttribute(t);
      } else {
        e.setAttribute(t, t == "popover" && o == 1 ? "" : o);
      }
    }
  }
}
function hr(e) {
  return function (t) {
    if (this.l) {
      const o = this.l[t.type + e];
      if (t.t == null) {
        t.t = Wo++;
      } else if (t.t < o.u) {
        return;
      }
      return o(le.event ? le.event(t) : t);
    }
  };
}
function jo(e, t, o, r, s, i, a, c, u, l) {
  let h;
  let d;
  let f;
  let m;
  let N;
  let w;
  let g;
  let v;
  let p;
  let T;
  let _;
  let C;
  let P;
  let k;
  let E;
  let b;
  let M;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & o.__u) {
    u = !!(32 & o.__u);
    i = [(c = t.__e = o.__e)];
  }

  if ((h = le.__b)) {
    h(t);
  }

  e: if (typeof t_type == "function") {
    try {
      v = t.props;
      p = "prototype" in t_type && t_type.prototype.render;
      T = (h = t_type.contextType) && r[h.__c];
      _ = h ? (T ? T.props.value : h.__) : r;

      if (o.__c) {
        g = (d = t.__c = o.__c).__ = d.__E;
      } else {
        p
          ? (t.__c = d = new t_type(v, _))
          : ((t.__c = d = new ct(v, _)),
            (d.constructor = t_type),
            (d.render = Ui));

        T && T.sub(d);
        d.state || (d.state = {});
        d.__n = r;
        f = d.__d = true;
        d.__h = [];
        d._sb = [];
      }

      if (p && d.__s == null) {
        d.__s = d.state;
      }

      if (p && t_type.getDerivedStateFromProps != null) {
        d.__s == d.state && (d.__s = mt({}, d.__s));
        mt(d.__s, t_type.getDerivedStateFromProps(v, d.__s));
      }

      m = d.props;
      N = d.state;
      d.__v = t;

      if (f) {
        if (
          p &&
          t_type.getDerivedStateFromProps == null &&
          d.componentWillMount != null
        ) {
          d.componentWillMount();
        }

        if (p && d.componentDidMount != null) {
          d.__h.push(d.componentDidMount);
        }
      } else {
        if (
          p &&
          t_type.getDerivedStateFromProps == null &&
          v !== m &&
          d.componentWillReceiveProps != null
        ) {
          d.componentWillReceiveProps(v, _);
        }

        if (
          t.__v == o.__v ||
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(v, d.__s, _) === false)
        ) {
          if (t.__v != o.__v) {
            d.props = v;
            d.state = d.__s;
            d.__d = false;
          }

          t.__e = o.__e;
          t.__k = o.__k;

          t.__k.some((B) => {
            if (B) {
              B.__ = t;
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
          d.componentWillUpdate(v, d.__s, _);
        }

        if (p && d.componentDidUpdate != null) {
          d.__h.push(() => {
            d.componentDidUpdate(m, N, w);
          });
        }
      }

      d.context = _;
      d.props = v;
      d.__P = e;
      d.__e = false;
      P = le.__r;
      k = 0;

      if (p) {
        d.state = d.__s;
        d.__d = false;

        if (P) {
          P(t);
        }

        h = d.render(d.props, d.state, d.context);

        for (E = 0; E < d._sb.length; E++) {
          d.__h.push(d._sb[E]);
        }

        d._sb = [];
      } else {
        do {
          d.__d = false;

          if (P) {
            P(t);
          }

          h = d.render(d.props, d.state, d.context);
          d.state = d.__s;
        } while (d.__d && ++k < 25);
      }

      d.state = d.__s;

      if (d.getChildContext != null) {
        r = mt(mt({}, r), d.getChildContext());
      }

      if (p && !f && d.getSnapshotBeforeUpdate != null) {
        w = d.getSnapshotBeforeUpdate(m, N);
      }

      b = h;

      if (h != null && h.type === Te && h.key == null) {
        b = Es(h.props.children);
      }

      c = Ts(e, Array_isArray(b) ? b : [b], t, o, r, s, i, a, c, u, l);
      d.base = t.__e;
      t.__u &= -161;

      if (d.__h.length) {
        a.push(d);
      }

      if (g) {
        d.__E = d.__ = null;
      }
    } catch (B) {
      t.__v = null;

      if (u || i != null) {
        if (B.then) {
          for (
            t.__u |= u ? 160 : 128;
            c && c.nodeType == 8 && c.nextSibling;

          ) {
            c = c.nextSibling;
          }
          i[i.indexOf(c)] = null;
          t.__e = c;
        } else {
          for (M = i.length; M--; ) {
            Vo(i[M]);
          }
          Ao(t);
        }
      } else {
        t.__e = o.__e;
        t.__k = o.__k;

        if (!B.then) {
          Ao(t);
        }
      }

      le.__e(B, t, o);
    }
  } else {
    if (i == null && t.__v == o.__v) {
      t.__k = o.__k;
      t.__e = o.__e;
    } else {
      c = t.__e = Bi(o.__e, t, o, r, s, i, a, u, l);
    }
  }

  if ((h = le.diffed)) {
    h(t);
  }

  return 128 & t.__u || c;
}
function Ao(e) {
  if (e && e.__c) {
    e.__c.__e = true;
  }

  if (e && e.__k) {
    e.__k.forEach(Ao);
  }
}
function ks(e, t, o) {
  for (let r = 0; r < o.length; r++) {
    zo(o[r], o[++r], o[++r]);
  }

  if (le.__c) {
    le.__c(t, e);
  }

  e.some((s) => {
    try {
      e = s.__h;
      s.__h = [];

      e.some((i) => {
        i.call(s);
      });
    } catch (i) {
      le.__e(i, s.__v);
    }
  });
}
function Es(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : Array_isArray(e)
    ? e.map(Es)
    : mt({}, e);
}
function Bi(e, t, o, r, s, i, a, c, u) {
  let l;
  let h;
  let d;
  let f;
  let m;
  let N;
  let w;
  let g = o.props || bn;

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
      le.__m && le.__m(t, i);
      c = false;
    }

    i = null;
  }
  if (type == null) {
    if (g !== props && (!c || e.data != props)) {
      e.data = props;
    }
  } else {
    i = i && Sn.call(e.childNodes);

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
          Dn(e, l, null, m, s);
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
          N = m;
          break;
        case "checked":
          w = m;
          break;
        default:
          Dn(e, l, m, g[l], s);
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

      Ts(
        t.type == "template" ? e.content : e,
        Array_isArray(f) ? f : [f],
        t,
        o,
        r,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
        i,
        a,
        i ? i[0] : o.__k && on(o, 0),
        c,
        u
      );

      if (i != null) {
        for (l = i.length; l--; ) {
          Vo(i[l]);
        }
      }
    }

    if (!c) {
      l = "value";

      type == "progress" && N == null
        ? e.removeAttribute("value")
        : N != null &&
          (N !== e[l] ||
            (type == "progress" && !N) ||
            (type == "option" && N != g[l])) &&
          Dn(e, l, N, g[l], s);

      l = "checked";
      w != null && w != e[l] && Dn(e, l, w, g[l], s);
    }
  }
  return e;
}
function zo(e, t, o) {
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
    le.__e(s, o);
  }
}
function Rs(e, t, o) {
  let r;
  let s;

  if (le.unmount) {
    le.unmount(e);
  }

  if ((r = e.ref)) {
    if (!r.current || r.current == e.__e) {
      zo(r, null, t);
    }
  }

  if ((r = e.__c) != null) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (i) {
        le.__e(i, t);
      }
    }
    r.base = null;
    r.__P = null;
  }

  if ((r = e.__k)) {
    for (s = 0; s < r.length; s++) {
      if (r[s]) {
        Rs(r[s], t, o || typeof e.type != "function");
      }
    }
  }

  if (!o) {
    Vo(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function Ui(e, t, o) {
  return this.constructor(e, o);
}
function kn(e, t, o) {
  let r;
  let s;
  let i;
  let a;

  if (t == document) {
    t = document.documentElement;
  }

  if (le.__) {
    le.__(e, t);
  }

  s = (r = typeof o == "function") ? null : (o && o.__k) || t.__k;
  i = [];
  a = [];

  jo(
    t,
    (e = ((!r && o) || t).__k = gt(Te, null, [e])),
    s || bn,
    bn,
    t.namespaceURI,
    !r && o ? [o] : s ? null : t.firstChild ? Sn.call(t.childNodes) : null,
    i,
    !r && o ? o : s ? s.__e : t.firstChild,
    r,
    a
  );

  ks(i, e, a);
}
function Ss(e, t) {
  kn(e, t, Ss);
}
function Is(e, t, o) {
  let r;
  let s;
  let i;
  let a;
  const c = mt({}, e.props);

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
    c.children = arguments.length > 3 ? Sn.call(arguments, 2) : o;
  }

  return yn(e.type, c, r || e.key, s || e.ref, null);
}
function sn(e) {
  function t(o) {
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
            xo(a);
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

    return o.children;
  }
  t.__c = `__cC${ys++}`;
  t.__ = e;
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (o, r) => o.children(r)).contextType = t;

  return t;
}
Sn = Cs.slice;

le = {
  __e(e, t, o, r) {
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

gs = 0;

ct.prototype.render = Te;
Yt = [];

vs =
  typeof Promise == "function"
    ? Promise.prototype.then.bind(Promise.resolve())
    : setTimeout;

ws = (e, t) => e.__v.__b - t.__v.__b;

to.__r = 0;
_s = /(PointerCapture)$|Capture$/i;
Wo = 0;
Io = hr(false);
Po = hr(true);
ys = 0;
let Fi = 0;
function n(e, t, o, r, s, i) {
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
    key: o,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: --Fi,
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

  if (le.vnode) {
    le.vnode(l);
  }

  return l;
}
let Lt;
let be;
let mo;
let fr;
let rn = 0;
const Ps = [];
const Ie = le;

const { __b, __r, diffed, __c, unmount, __: __1 } = Ie;

function an(e, t) {
  if (Ie.__h) {
    Ie.__h(be, e, rn || t);
  }

  rn = 0;
  const o = be.__H || (be.__H = { __: [], __h: [] });

  if (e >= o.__.length) {
    o.__.push({});
  }

  return o.__[e];
}
function A(e) {
  rn = 1;
  return Yo(Ls, e);
}
function Yo(e, t, o) {
  const r = an(Lt++, 2);
  r.t = e;

  if (
    !r.__c &&
    ((r.__ = [
      o ? o(t) : Ls(undefined, t),
      (c) => {
        const u = r.__N ? r.__N[0] : r.__[0];
        const l = r.t(u, c);

        if (u !== l) {
          r.__N = [l, r.__[1]];
          r.__c.setState({});
        }
      },
    ]),
    (r.__c = be),
    !be.__f)
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
    be.__f = true;

    var { shouldComponentUpdate, componentWillUpdate } = be;

    be.componentWillUpdate = function (c, u, l) {
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

    be.shouldComponentUpdate = s;
  }

  return r.__N || r.__;
}
function W(e, t) {
  const o = an(Lt++, 3);

  if (!Ie.__s && Xo(o.__H, t)) {
    o.__ = e;
    o.u = t;
    be.__H.__h.push(o);
  }
}
function Pn(e, t) {
  const o = an(Lt++, 4);

  if (!Ie.__s && Xo(o.__H, t)) {
    o.__ = e;
    o.u = t;
    be.__h.push(o);
  }
}
function x(e) {
  rn = 5;

  return Ne(
    () => ({
      current: e,
    }),
    []
  );
}
function cn(e, t, o) {
  rn = 6;

  Pn(
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
    o == null ? o : o.concat(e)
  );
}
function Ne(e, t) {
  const o = an(Lt++, 7);

  if (Xo(o.__H, t)) {
    o.__ = e();
    o.__H = t;
    o.__h = e;
  }

  return o.__;
}
function S(e, t) {
  rn = 8;

  return Ne(() => e, t);
}
function so(e) {
  const t = be.context[e.__c];
  const o = an(Lt++, 9);
  o.c = e;
  return t ? (o.__ == null && ((o.__ = true), t.sub(be)), t.props.value) : e.__;
}
function xs(e, t) {
  if (Ie.useDebugValue) {
    Ie.useDebugValue(t ? t(e) : e);
  }
}
function As() {
  const e = an(Lt++, 11);
  if (!e.__) {
    for (var t = be.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const o = t.__m || (t.__m = [0, 0]);
    e.__ = `P${o[0]}-${o[1]++}`;
  }
  return e.__;
}
function Hi() {
  for (let e; (e = Ps.shift()); ) {
    if (e.__P && e.__H) {
      try {
        e.__H.__h.forEach(Kn);
        e.__H.__h.forEach(Lo);
        e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [];
        Ie.__e(t, e.__v);
      }
    }
  }
}

Ie.__b = (e) => {
  be = null;

  if (__b) {
    __b(e);
  }
};

Ie.__ = (e, t) => {
  if (e && t.__k && t.__k.__m) {
    e.__m = t.__k.__m;
  }

  if (__1) {
    __1(e, t);
  }
};

Ie.__r = (e) => {
  if (__r) {
    __r(e);
  }

  Lt = 0;
  const t = (be = e.__c).__H;

  if (t) {
    if (mo === be) {
      t.__h = [];
      be.__h = [];

      t.__.forEach((o) => {
        if (o.__N) {
          o.__ = o.__N;
        }

        o.u = undefined;
        o.__N = undefined;
      });
    } else {
      t.__h.forEach(Kn);
      t.__h.forEach(Lo);
      t.__h = [];
      Lt = 0;
    }
  }

  mo = be;
};

Ie.diffed = (e) => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c && e_c.__H) {
    e_c.__H.__h.length &&
      ((Ps.push(e_c) !== 1 && fr === Ie.requestAnimationFrame) ||
        ((fr = Ie.requestAnimationFrame) || Wi)(Hi));

    e_c.__H.__.forEach((o) => {
      if (o.u) {
        o.__H = o.u;
      }

      o.u = undefined;
    });
  }

  mo = null;
  be = null;
};

Ie.__c = (e, t) => {
  t.some((o) => {
    try {
      o.__h.forEach(Kn);

      o.__h = o.__h.filter((r) => !r.__ || Lo(r));
    } catch (r) {
      t.some((s) => {
        if (s.__h) {
          s.__h = [];
        }
      });

      t = [];
      Ie.__e(r, o.__v);
    }
  });

  if (__c) {
    __c(e, t);
  }
};

Ie.unmount = (e) => {
  if (unmount) {
    unmount(e);
  }

  let t;
  const e_c = e.__c;

  if (e_c && e_c.__H) {
    e_c.__H.__.forEach((r) => {
      try {
        Kn(r);
      } catch (s) {
        t = s;
      }
    });

    e_c.__H = undefined;
    t && Ie.__e(t, e_c.__v);
  }
};

const yr = typeof requestAnimationFrame == "function";
function Wi(e) {
  let t;

  const o = () => {
    clearTimeout(r);

    if (yr) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var r = setTimeout(o, 35);

  if (yr) {
    t = requestAnimationFrame(o);
  }
}
function Kn(e) {
  const t = be;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    e.__c = undefined;
    e_c();
  }

  be = t;
}
function Lo(e) {
  const t = be;
  e.__c = e.__();
  be = t;
}
function Xo(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    e.length !== t.length ||
    t.some((o, r) => o !== e[r])
  );
}
function Ls(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ms(e, t) {
  for (const o in t) {
    e[o] = t[o];
  }
  return e;
}
function Mo(e, t) {
  for (const o in e) {
    if (o !== "__source" && !(o in t)) {
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
function Os(e, t) {
  const o = t();
  const r = A({ t: { __: o, u: t } });
  const s = r[0].t;
  const [, i] = r;

  Pn(() => {
    s.__ = o;
    s.u = t;

    if (po(s)) {
      i({ t: s });
    }
  }, [e, o, t]);

  W(() => {
    if (po(s)) {
      i({ t: s });
    }

    return e(() => {
      if (po(s)) {
        i({ t: s });
      }
    });
  }, [e]);

  return o;
}
function po(e) {
  let t;
  let o;

  const { u, __: _ } = e;

  try {
    const i = u();
    return !(
      ((t = _) === (o = i) && (t !== 0 || 1 / t == 1 / o)) ||
      (t != t && o != o)
    );
  } catch {
    return true;
  }
}
function $s(e) {
  e();
}
function Ds(e) {
  return e;
}
function Bs() {
  return [false, $s];
}
const Us = Pn;

class Oo {
  constructor(e, t) {
    this.props = e;
    this.context = t;
  }

  shouldComponentUpdate(e, t) {
    return Mo(this.props, e) || Mo(this.state, t);
  }
}

function Fs(e, t) {
  function o(s) {
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

    return Mo(this.props, s);
  }
  function r(s) {
    this.shouldComponentUpdate = o;
    return gt(e, s);
  }
  r.displayName = `Memo(${e.displayName || e.name})`;
  r.prototype.isReactComponent = true;
  r.__f = true;
  r.type = e;
  return r;
}
(Oo.prototype = new ct()).isPureReactComponent = true;

const {
  __b: _b,
  __e,
  unmount: unmount_2,
  event,
  vnode,
  __r: _r_1,
  diffed: diffed_2,
} = le;

le.__b = (e) => {
  if (e.type && e.type.__f && e.ref) {
    e.props.ref = e.ref;
    e.ref = null;
  }

  if (_b) {
    _b(e);
  }
};
const Vi =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.forward_ref")) ||
  3911;
function xn(e) {
  class t {
    constructor(o) {
      const r = Ms({}, o);
      delete r.ref;
      return e(r, o.ref || null);
    }

    static componentWillUnmount() {
      kn(null, t.v);
      t.v = null;
      t.h = null;
    }
  }

  t.$$typeof = Vi;
  t.render = e;
  t.prototype.isReactComponent = true;
  t.__f = true;
  t.displayName = `ForwardRef(${e.displayName || e.name})`;
  return t;
}

const Nr = (e, t) => e == null || lt(lt(e).map(t));

const ji = {
  map: Nr,
  forEach: Nr,
  count(e) {
    return e ? lt(e).length : 0;
  },
  only(e) {
    const t = lt(e);
    if (t.length !== 1) {
      throw "Children.only";
    }
    return t[0];
  },
  toArray: lt,
};

le.__e = (e, t, o, r) => {
  if (e.then) {
    let s;
    for (let i = t; (i = i.__); ) {
      if ((s = i.__c) && s.__c) {
        if (t.__e == null) {
          t.__e = o.__e;
          t.__k = o.__k;
        }

        return s.__c(e, t);
      }
    }
  }
  __e(e, t, o, r);
};
function Hs(e, t, o) {
  if (e) {
    e.__c &&
      e.__c.__H &&
      (e.__c.__H.__.forEach((r) => {
        if (typeof r.__c == "function") {
          r.__c();
        }
      }),
      (e.__c.__H = null));

    (e = Ms({}, e)).__c != null &&
      (e.__c.__P === o && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    e.__k = e.__k && e.__k.map((r) => Hs(r, t, o));
  }

  return e;
}
function Ws(e, t, o) {
  if (e && o) {
    e.__v = null;

    e.__k = e.__k && e.__k.map((r) => Ws(r, t, o));

    e.__c &&
      e.__c.__P === t &&
      (e.__e && o.appendChild(e.__e), (e.__c.__e = true), (e.__c.__P = o));
  }

  return e;
}

class Cn {
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
        const o = document.createElement("div");
        const r = this.__v.__k[0].__c;
        this.__v.__k[0] = Hs(this.__b, o, (r.__O = r.__P));
      }
      this.__b = null;
    }
    const s = t.__a && gt(Te, null, e.fallback);

    if (s) {
      s.__u &= -33;
    }

    return [gt(Te, null, t.__a || e.children), s];
  }
}

function Vs(e) {
  const t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function Ee(e) {
  let t;
  let o;
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
          o = c;
          r = true;
        }
      );
    }

    if (o) {
      throw o;
    }

    if (!r) {
      throw t;
    }
    return s ? gt(s, a) : null;
  }
  i.displayName = "Lazy";
  i.__f = true;
  return i;
}

class gn {
  constructor() {
    this.i = null;
    this.l = null;
  }

  render(e) {
    this.i = null;
    this.l = new Map();
    const t = lt(e.children);

    if (e.revealOrder && e.revealOrder[0] === "b") {
      t.reverse();
    }

    for (let o = t.length; o--; ) {
      this.l.set(t[o], (this.i = [1, 0, this.i]));
    }
    return e.children;
  }
}

le.unmount = (e) => {
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

(Cn.prototype = new ct()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    r.o = [];
  }

  r.o.push(t_c);
  const s = Vs(r.__v);

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
        r.__v.__k[0] = Ws(u, u.__c.__P, u.__c.__O);
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

const br = (e, t, o) => {
  if (++o[1] === o[0]) {
    e.l.delete(t);
  }

  if (e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)) {
    for (o = e.i; o; ) {
      while (o.length > 3) {
        o.pop()();
      }

      if (o[1] < o[0]) {
        break;
      }
      e.i = o = o[2];
    }
  }
};
function Yi(e) {
  this.getChildContext = () => e.context;

  return e.children;
}
function Xi(e) {
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

  kn(gt(Yi, { context: t.context }, e.__v), t.v);
}
function Rt(e, t) {
  const o = gt(Xi, { __v: e, h: t });
  o.containerInfo = t;
  return o;
}

(gn.prototype = new ct()).__a = function (e) {
  const t = this;
  const o = Vs(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return (s) => {
    const i = () => {
      if (t.props.revealOrder) {
        r.push(s);
        br(t, e, r);
      } else {
        s();
      }
    };

    if (o) {
      o(i);
    } else {
      i();
    }
  };
};

gn.prototype.componentDidUpdate = gn.prototype.componentDidMount = function () {
  const e = this;
  this.l.forEach((t, o) => {
    br(e, o, t);
  });
};

const js =
  (typeof Symbol !== "undefined" &&
    Symbol.for &&
    Symbol.for("react.element")) ||
  60103;

const qi =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const Zi = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const Gi = /[A-Z0-9]/g;
const Ki = typeof document !== "undefined";

const Ji = (e) =>
  (typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
  ).test(e);

function zs(e, t, o) {
  if (t.__k == null) {
    t.textContent = "";
  }

  kn(e, t);

  if (typeof o == "function") {
    o();
  }

  return e ? e.__c : null;
}
function Qi(e, t, o) {
  Ss(e, t);

  if (typeof o == "function") {
    o();
  }

  return e ? e.__c : null;
}
ct.prototype.isReactComponent = {};

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach((e) => {
  Object.defineProperty(ct.prototype, e, {
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

function ea() {}
function ta() {
  return this.cancelBubble;
}
function na() {
  return this.defaultPrevented;
}
le.event = (e) => {
  if (event) {
    e = event(e);
  }

  e.persist = ea;
  e.isPropagationStopped = ta;
  e.isDefaultPrevented = na;
  e.nativeEvent = e;
  return e.nativeEvent;
};
let qo;

const oa = {
  enumerable: false,
  configurable: true,
  get() {
    return this.class;
  },
};

le.vnode = (e) => {
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
            (Ki && a === "children" && type === "noscript") ||
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
              Ji(props.type)
            ) {
              if (u === "onfocus") {
                a = "onfocusin";
              } else if (u === "onblur") {
                a = "onfocusout";
              } else if (Zi.test(a)) {
                a = u;
              }
            } else {
              u = a = "oninput";
            }
          } else if (i && qi.test(a)) {
            a = a.replace(Gi, "-$&").toLowerCase();
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
        s.value = lt(props.children).forEach((l) => {
          l.props.selected = s.value.includes(l.props.value);
        });
      }

      if (type == "select" && s.defaultValue != null) {
        s.value = lt(props.children).forEach((l) => {
          l.props.selected = s.multiple
            ? s.defaultValue.includes(l.props.value)
            : s.defaultValue == l.props.value;
        });
      }

      if (props.class && !props.className) {
        s.class = props.class;
        Object.defineProperty(s, "className", oa);
      } else if (
        (props.className && !props.class) ||
        (props.class && props.className)
      ) {
        s.class = s.className = props.className;
      }

      t.props = s;
    })(e);
  }

  e.$$typeof = js;

  if (vnode) {
    vnode(e);
  }
};
le.__r = (e) => {
  if (_r_1) {
    _r_1(e);
  }

  qo = e.__c;
};
le.diffed = (e) => {
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

  qo = null;
};
const ra = {
  ReactCurrentDispatcher: {
    current: {
      readContext(e) {
        return qo.__n[e.__c].props.value;
      },
      useCallback: S,
      useContext: so,
      useDebugValue: xs,
      useDeferredValue: Ds,
      useEffect: W,
      useId: As,
      useImperativeHandle: cn,
      useInsertionEffect: Us,
      useLayoutEffect: Pn,
      useMemo: Ne,
      useReducer: Yo,
      useRef: x,
      useState: A,
      useSyncExternalStore: Os,
      useTransition: Bs,
    },
  },
};
function sa(e) {
  return gt.bind(null, e);
}
function io(e) {
  return !!e && e.$$typeof === js;
}
function ia(e) {
  return io(e) && e.type === Te;
}
function aa(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function ca(e) {
  return io(e) ? Is(...arguments) : e;
}
function Ys(e) {
  return !!e.__k && (kn(null, e), true);
}
function la(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const ua = (e, t) => e(t);

const da = (e, t) => e(t);

const Xs = Te;
const ha = io;

const vn = {
  useState: A,
  useId: As,
  useReducer: Yo,
  useEffect: W,
  useLayoutEffect: Pn,
  useInsertionEffect: Us,
  useTransition: Bs,
  useDeferredValue: Ds,
  useSyncExternalStore: Os,
  startTransition: $s,
  useRef: x,
  useImperativeHandle: cn,
  useMemo: Ne,
  useCallback: S,
  useContext: so,
  useDebugValue: xs,
  version: "18.3.1",
  Children: ji,
  render: zs,
  hydrate: Qi,
  unmountComponentAtNode: Ys,
  createPortal: Rt,
  createElement: gt,
  createContext: sn,
  createFactory: sa,
  cloneElement: ca,
  createRef: Oi,
  Fragment: Te,
  isValidElement: io,
  isElement: ha,
  isFragment: ia,
  isMemo: aa,
  findDOMNode: la,
  Component: ct,
  PureComponent: Oo,
  memo: Fs,
  forwardRef: xn,
  flushSync: da,
  unstable_batchedUpdates: ua,
  StrictMode: Xs,
  Suspense: Cn,
  SuspenseList: gn,
  lazy: Ee,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ra,
};

function fa(e) {
  return {
    render(t) {
      zs(t, e);
    },
    unmount() {
      Ys(e);
    },
  };
}
const ma = "modulepreload";

const pa = (e) => `/${e}`;

const Ir = {};

const Re = (t, o, r) => {
  let s = Promise.resolve();
  if (o && o.length > 0) {
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
      o.map((l) => {
        l = pa(l);

        if (l in Ir) {
          return;
        }

        Ir[l] = true;
        const h = l.endsWith(".css");
        const d = h ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${l}"]${d}`)) {
          return;
        }
        const f = document.createElement("link");
        f.rel = h ? "stylesheet" : ma;

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
          return new Promise((m, N) => {
            f.addEventListener("load", m);

            f.addEventListener("error", () =>
              N(new Error(`Unable to preload CSS for ${l}`))
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

const ga = {};
function Bn(e, t) {
  for (const o in t) {
    e[o] = t[o];
  }
  return e;
}
function qs(e, t, o) {
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
  e = $o(e.replace(s, ""));
  t = $o(t || "");
  for (let h = Math.max(e.length, t.length), d = 0; d < h; d++) {
    if (t[d] && t[d].charAt(0) === ":") {
      const f = t[d].replace(/(^:|[+*?]+$)/g, "");
      const m = (t[d].match(/[+*?]+$/) || ga)[0] || "";
      const N = ~m.indexOf("+");
      const w = ~m.indexOf("*");
      const g = e[d] || "";
      if (!g && !w && (!m.includes("?") || N)) {
        r = false;
        break;
      }
      a[f] = decodeURIComponent(g);

      if (N || w) {
        a[f] = e.slice(d).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[d] !== e[d]) {
      r = false;
      break;
    }
  }
  return (o.default === true || r !== false) && a;
}
function va(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function wa(e, t) {
  e.index = t;

  e.rank = ((o) => (o.props.default ? 0 : $o(o.props.path).map(_a).join("")))(
    e
  );

  return e.props;
}
function $o(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function _a(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const ya = {};
const Xt = [];
const Nn = [];
let Ge = null;
const Zo = { url: Go() };
const Zs = sn(Zo);
function An() {
  const e = so(Zs);
  if (e === Zo) {
    const t = A()[1];
    W(() => {
      Nn.push(t);

      return () => Nn.splice(Nn.indexOf(t), 1);
    }, []);
  }
  return [e, $];
}
function Go() {
  let e;
  return `${
    (e =
      Ge && Ge.location
        ? Ge.location
        : Ge && Ge.getCurrentLocation
        ? Ge.getCurrentLocation()
        : typeof location !== "undefined"
        ? location
        : ya).pathname || ""
  }${e.search || ""}`;
}

export function $(e, t = false) {
  if (typeof e != "string" && e.url) {
    t = e.replace;
    e = e.url;
  }

  if (
    ((o) => {
      for (let r = Xt.length; r--; ) {
        if (Xt[r].canRoute(o)) {
          return true;
        }
      }
      return false;
    })(e)
  ) {
    ((o, r = "push") => {
      if (Ge && Ge[r]) {
        Ge[r](o);
      } else if (typeof history !== "undefined" && history[`${r}State`]) {
        history[`${r}State`](null, null, o);
      }
    })(e, t ? "replace" : "push");
  }

  return Gs(e);
}

function Gs(e) {
  let t = false;
  for (let o = 0; o < Xt.length; o++) {
    if (Xt[o].routeTo(e)) {
      t = true;
    }
  }
  return t;
}
function Ca(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const o = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!o || o.match(/^_?self$/i))) {
      return $(t);
    }
  }
}
function Na(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function Ta(e) {
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
        if (Ca(e_target)) {
          return Na(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function Ks(e) {
  if (e.history) {
    Ge = e.history;
  }

  this.state = { url: e.url || Go() };
}
Bn((Ks.prototype = new ct()), {
  shouldComponentUpdate(e) {
    return (
      e.static !== true ||
      e.url !== this.props.url ||
      e.url !== this.props.url ||
      e.onChange !== this.props.onChange
    );
  },
  canRoute(e) {
    const t = lt(this.props.children);
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

    if (!Pr) {
      Pr = true;

      Ge ||
        addEventListener("popstate", () => {
          Gs(Go());
        });

      addEventListener("click", Ta);
    }

    Xt.push(this);

    if (Ge) {
      this.u = Ge.listen((t) => {
        const o = t.location || t;
        e.routeTo(`${o.pathname || ""}${o.search || ""}`);
      });
    }

    this.p = false;
  },
  componentWillUnmount() {
    if (typeof this.u == "function") {
      this.u();
    }

    Xt.splice(Xt.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(wa).sort(va);

    for (const r of e) {
      const s = qs(t, r.props.path, r.props);
      if (s) {
        return [r, s];
      }
    }
  },
  render(e, t) {
    let o;
    let r;
    const e_onChange = e.onChange;
    const t_url = t.url;
    let a = this.c;
    const c = this.g(lt(e.children), t_url);

    if (c) {
      r = Is(
        c[0],
        Bn(Bn({ url: t_url, matches: (o = c[1]) }, o), {
          key: undefined,
          ref: undefined,
        })
      );
    }

    if (t_url !== (a && a.url)) {
      Bn(
        Zo,
        (a = this.c =
          {
            url: t_url,
            previous: a && a.url,
            current: r,
            path: r ? r.props.path : null,
            matches: o,
          })
      );

      a.router = this;
      a.active = r ? [r] : [];
      for (let u = Nn.length; u--; ) {
        Nn[u]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return gt(Zs.Provider, { value: a }, r);
  },
});

const xr = (e) => {
  let t;
  const o = new Set();

  const r = (l, h) => {
    const d = typeof l == "function" ? l(t) : l;
    if (!Object.is(d, t)) {
      const f = t;

      t =
        h ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d);

      o.forEach((m) => m(t, f));
    }
  };

  const s = () => t;

  const c = {
    setState: r,
    getState: s,
    getInitialState: () => u,
    subscribe: (l) => {
      o.add(l);

      return () => o.delete(l);
    },
  };

  const u = (t = e(r, s, c));
  return c;
};

const ba = (e) => (e ? xr(e) : xr);

const ka = (e) => e;

function Ea(e, t = ka) {
  const o = vn.useSyncExternalStore(
    e.subscribe,
    vn.useCallback(() => t(e.getState()), [e, t]),
    vn.useCallback(() => t(e.getInitialState()), [e, t])
  );
  vn.useDebugValue(o);
  return o;
}

const Ar = (e) => {
  const t = ba(e);

  const o = (r) => Ea(t, r);

  Object.assign(o, t);
  return o;
};

const _t = (e) => (e ? Ar(e) : Ar);

function Ko(e, t) {
  let o;
  try {
    o = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      let i;

      const a = (u) => (u === null ? null : JSON.parse(u, undefined));

      const c = (i = o.getItem(s)) != null ? i : null;
      return c instanceof Promise ? c.then(a) : a(c);
    },
    setItem: (s, i) => o.setItem(s, JSON.stringify(i, undefined)),
    removeItem: (s) => o.removeItem(s),
  };
}

const Do = (e) => (t) => {
  try {
    const o = e(t);
    return o instanceof Promise
      ? o
      : {
          then(r) {
            return Do(r)(o);
          },
          catch(r) {
            return this;
          },
        };
  } catch (o) {
    return {
      then(r) {
        return this;
      },
      catch(r) {
        return Do(r)(o);
      },
    };
  }
};

const Jo = (e, t) => (o, r, s) => {
  let i = {
    storage: Ko(() => localStorage),
    partialize: (w) => w,
    version: 0,
    merge: (w, g) => ({
      ...g,
      ...w,
    }),
    ...t,
  };

  let a = false;
  const c = new Set();
  const u = new Set();
  let i_storage = i.storage;
  if (!i_storage) {
    return e(
      (...w) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
        );

        o(...w);
      },
      r,
      s
    );
  }

  const h = () => {
    const w = i.partialize({ ...r() });
    return i_storage.setItem(i.name, { state: w, version: i.version });
  };

  const s_setState = s.setState;
  s.setState = (w, g) => {
    s_setState(w, g);
    return h();
  };
  const f = e(
    (...w) => {
      o(...w);
      return h();
    },
    r,
    s
  );
  s.getInitialState = () => f;
  let m;
  const N = () => {
    let g;
    if (!i_storage) {
      return;
    }
    a = false;

    c.forEach((p) => {
      let T;
      return p((T = r()) != null ? T : f);
    });

    const v =
      (g = i.onRehydrateStorage) == null ||
      g.call(i, (w = r()) != null ? w : f) ||
      g.call(i, (w = r()) != null ? w : f) ||
      undefined;
    return Do(i_storage.getItem.bind(i_storage))(i.name)
      .then((p) => {
        if (p) {
          if (typeof p.version == "number" && p.version !== i.version) {
            if (i.migrate) {
              const T = i.migrate(p.state, p.version);
              return T instanceof Promise
                ? T.then((_) => [true, _])
                : [true, T];
            }
            console.error(
              "State loaded from storage couldn't be migrated since no migrate function was provided"
            );
          } else {
            return [false, p.state];
          }
        }
        return [false, undefined];
      })
      .then((p) => {
        let T;
        const [_, C] = p;
        m = i.merge(C, (T = r()) != null ? T : f);
        o(m, true);

        if (_) {
          return h();
        }
      })
      .then(() => {
        v?.(m, undefined);
        m = r();
        a = true;

        u.forEach((p) => p(m));
      })
      .catch((p) => {
        v?.(undefined, p);
      });
  };

  s.persist = {
    setOptions: (w) => {
      i = { ...i, ...w };

      if (w.storage) {
        i_storage = w.storage;
      }
    },
    clearStorage: () => {
      i_storage?.removeItem(i.name);
    },
    getOptions: () => i,
    rehydrate: () => N(),
    hasHydrated: () => a,
    onHydrate: (w) => {
      c.add(w);

      return () => {
        c.delete(w);
      };
    },
    onFinishHydration: (w) => {
      u.add(w);

      return () => {
        u.delete(w);
      };
    },
  };

  if (!i.skipHydration) {
    N();
  }

  return m || f;
};

const Sa = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const Ia = () => {
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

const Jn = (e) => {
  const t = e === "system" ? Sa() : e;
  document.documentElement.setAttribute("data-theme", t);
};

const Pa = _t()(
  Jo(
    (e) => ({
      theme: Ia(),

      setTheme: (t) => {
        Jn(t);
        e({ theme: t });
      },

      toggleTheme: () =>
        e((t) => {
          const o = t.theme === "light" ? "dark" : "light";
          Jn(o);
          return { theme: o };
        }),
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (e) => {
        if (e?.theme) {
          Jn(e.theme);
        }
      },
    }
  )
);

if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (Pa.getState().theme === "system") {
        Jn("system");
      }
    });
}

const Js = _t((e) => ({
  isOpen: false,
  images: [],
  initialIndex: 0,
  open: (t, o = 0) => e({ isOpen: true, images: t, initialIndex: o }),
  close: () => e({ isOpen: false, images: [], initialIndex: 0 }),
}));

const Xe = {
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

function Le(e) {
  return (
    e instanceof Error && "status" in e && "code" in e && e.name === "ApiError"
  );
}
const _e = {
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
function xa(e) {
  return "accessToken" in e;
}
function Aa(e) {
  return "accessToken" in e;
}
const La = 4000; /* 4e3 */

const nn = _t((e, t) => ({
  toasts: [],

  addToast: (o) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const s = o.duration ?? La;

    e((i) => ({
      toasts: [...i.toasts, { ...o, id: r, duration: s }],
    }));

    if (s > 0) {
      setTimeout(() => {
        t().removeToast(r);
      }, s);
    }

    return r;
  },

  removeToast: (o) => {
    e((r) => ({
      toasts: r.toasts.filter((s) => s.id !== o),
    }));
  },

  clearAll: () => {
    e({ toasts: [] });
  },
}));

const Ve = {
  success: (e, t) =>
    nn.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) =>
    nn.getState().addToast({ type: "error", message: e, duration: t }),
  warning: (e, t) =>
    nn.getState().addToast({ type: "warning", message: e, duration: t }),
  info: (e, t) =>
    nn.getState().addToast({ type: "info", message: e, duration: t }),
};

function Ma() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    t = crypto.randomUUID();
    localStorage.setItem(e, t);
  }

  return t;
}
const Lr = Ma();
class Qs {
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
    if (t.status !== Xe.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        Ve.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      Ve.error(t.message || "Произошла ошибка");
    }
  }
  buildUrl(t) {
    const o = this.baseURL.replace(/\/$/, "");
    const r = t.startsWith("/") ? t : `/${t}`;
    return `${o}${r}`;
  }
  buildHeaders(t) {
    const o = new Headers({ ...this.defaultHeaders, ...t });

    if (this.accessToken) {
      o.set("Authorization", `Bearer ${this.accessToken}`);
    }

    o.set("X-Device-Id", Lr);
    return o;
  }
  async handleResponse(t) {
    if (t.status === Xe.NO_CONTENT) {
      return null;
    }
    let o;
    try {
      o = await t.json();
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
      const r = o;
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
    return o;
  }
  mapStatusToErrorCode(t) {
    switch (t) {
      case Xe.BAD_REQUEST: {
        return _e.BAD_REQUEST;
      }
      case Xe.UNAUTHORIZED: {
        return _e.UNAUTHORIZED;
      }
      case Xe.FORBIDDEN: {
        return _e.ACCESS_DENIED;
      }
      case Xe.NOT_FOUND: {
        return _e.ENTITY_NOT_FOUND;
      }
      case Xe.CONFLICT: {
        return _e.ENTITY_ALREADY_EXISTS;
      }
      case Xe.UNPROCESSABLE_ENTITY: {
        return _e.VALIDATION_ERROR;
      }
      case Xe.TOO_MANY_REQUESTS: {
        return _e.RATE_LIMIT_EXCEEDED;
      }
      default: {
        return _e.UNKNOWN_ERROR;
      }
    }
  }
  createApiError(t, o, r, s) {
    const i = new Error(o);
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
  async executeRequest(t, o, r, s, i = false) {
    const a = this.buildUrl(o);
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
        o.startsWith("/auth/") ||
        o.startsWith("/sign-") ||
        o.startsWith("/sign-") ||
        o.startsWith("/verify-") ||
        o.startsWith("/sign-") ||
        o.startsWith("/verify-") ||
        o.startsWith("/resend-") ||
        o.startsWith("/sign-") ||
        o.startsWith("/verify-") ||
        o.startsWith("/resend-") ||
        o.startsWith("/refresh") ||
        o.startsWith("/sign-") ||
        o.startsWith("/verify-") ||
        o.startsWith("/resend-") ||
        o.startsWith("/refresh") ||
        o.startsWith("/forgot-") ||
        o.startsWith("/sign-") ||
        o.startsWith("/verify-") ||
        o.startsWith("/resend-") ||
        o.startsWith("/refresh") ||
        o.startsWith("/forgot-") ||
        o.startsWith("/reset-") ||
        o.startsWith("/sign-") ||
        o.startsWith("/verify-") ||
        o.startsWith("/resend-") ||
        o.startsWith("/refresh") ||
        o.startsWith("/forgot-") ||
        o.startsWith("/reset-") ||
        o.startsWith("/login/");
      if (d.status === Xe.UNAUTHORIZED && !i && !f && this.accessToken) {
        const m = await this.refreshAccessToken();
        if (m) {
          this.setAccessToken(m);
          return this.executeRequest(t, o, r, s, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Xe.UNAUTHORIZED,
          "Session expired",
          _e.UNAUTHORIZED
        );
      }
      return await this.handleResponse(d);
    } catch (d) {
      clearTimeout(h);

      if (d instanceof Error) {
        if (d.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", _e.TIMEOUT);

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
          _e.NETWORK_ERROR
        );

        if (!i) {
          this.notifyError(f);
        }

        throw f;
      }

      throw d;
    }
  }
  async get(t, o) {
    return this.executeRequest("GET", t, undefined, o);
  }
  async post(t, o, r) {
    return this.executeRequest("POST", t, o, r);
  }
  async put(t, o, r) {
    return this.executeRequest("PUT", t, o, r);
  }
  async patch(t, o, r) {
    return this.executeRequest("PATCH", t, o, r);
  }
  async delete(t, o) {
    return this.executeRequest("DELETE", t, undefined, o);
  }
  async head(t, o) {
    const r = this.buildUrl(t);
    const s = this.buildHeaders(o?.headers);
    const i = new AbortController();
    const a = o?.timeout ?? this.defaultTimeout;

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
        ? this.createApiError(0, "Request timeout", _e.TIMEOUT)
        : this.createApiError(0, "Network error", _e.NETWORK_ERROR);
    }
  }
  async uploadFormData(t, o, r, s = false) {
    const i = this.buildUrl(t);
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": Lr };

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
        body: o,
        signal: c.signal,
        credentials: "include",
      });
      clearTimeout(l);

      if (h.status === Xe.UNAUTHORIZED && !s && this.accessToken) {
        const d = await this.refreshAccessToken();
        if (d) {
          this.setAccessToken(d);
          return this.uploadFormData(t, o, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Xe.UNAUTHORIZED,
          "Session expired",
          _e.UNAUTHORIZED
        );
      }

      return await this.handleResponse(h);
    } catch (h) {
      clearTimeout(l);

      if (h instanceof Error) {
        if (h.name === "AbortError") {
          const f = this.createApiError(0, "Request timeout", _e.TIMEOUT);

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
          _e.NETWORK_ERROR
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
const Z = new Qs({ baseURL: "/api", timeout: 30000 /* 3e4 */ });
const $e = new Qs({ baseURL: "/api/v1/auth", timeout: 30000 /* 3e4 */ });

const J = {
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
  verification: {
    status: "/verification/status",
    submit: "/verification/submit",
  },
  platform: { changelog: "/platform/changelog" },
};

const Tt = {
  async register(e) {
    return await $e.post(J.auth.signUp, e);
  },
  async login(e) {
    return await $e.post(J.auth.signIn, e);
  },
  async verifyOtp(e) {
    return await $e.post(J.auth.verifyOtp, e);
  },
  async resendOtp(e) {
    await $e.post(J.auth.resendOtp, e);
  },
  async refreshSession() {
    return await $e.post(J.auth.refresh);
  },
  async logout() {
    await $e.post(J.auth.logout);
  },
  async logoutAll() {
    await $e.post(`${J.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await $e.post(J.auth.forgotPassword, e);
  },
  async resetPassword(e) {
    await $e.post(J.auth.resetPassword, e);
  },
  async changePassword(e) {
    await $e.post(J.auth.changePassword, e);
  },
};

class Qo {
  cache = new Map();
  maxSize;
  ttl;
  constructor(t = 100, o = 300 * 1000 /* 1e3 */) {
    this.maxSize = t;
    this.ttl = o;
  }
  get(t) {
    const o = this.cache.get(t);
    if (o) {
      if (Date.now() - o.timestamp > this.ttl) {
        this.cache.delete(t);
        return;
      }
      this.cache.delete(t);
      this.cache.set(t, o);
      return o.value;
    }
  }
  set(t, o) {
    if (this.cache.has(t)) {
      this.cache.delete(t);
    }

    if (this.cache.size >= this.maxSize) {
      const r = this.cache.keys().next().value;

      if (r) {
        this.cache.delete(r);
      }
    }

    this.cache.set(t, { value: o, timestamp: Date.now() });
  }
  has(t) {
    const o = this.cache.get(t);
    return o
      ? Date.now() - o.timestamp > this.ttl
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
    const o = this.cache.get(t);
    if (o) {
      return Date.now() - o.timestamp;
    }
  }
  isFresh(t, o = this.ttl) {
    const r = this.getAge(t);
    return r !== undefined && r < o;
  }
  get size() {
    return this.cache.size;
  }
  cleanup() {
    const t = Date.now();
    for (const [o, r] of this.cache.entries()) {
      if (t - r.timestamp > this.ttl) {
        this.cache.delete(o);
      }
    }
  }
}
function Mr(e) {
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
const Wt = new Qo(100, 300 * 1000 /* 1e3 */);
const Oa = 60 * 1000; /* 1e3 */
setInterval(() => Wt.cleanup(), 120 * 1000 /* 1e3 */);
const pt = {
  async checkUsername(e) {
    return (
      await Z.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await Z.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await Z.get(J.users.me);
    return Mr(e);
  },
  async updateProfile(e) {
    return await Z.put(J.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const o = Wt.get(t);

    if (o && Wt.isFresh(t, Oa)) {
      this._fetchAndCacheProfile(e, t).catch(() => {});
      return o;
    }

    if (o) {
      this._fetchAndCacheProfile(e, t).catch(() => {});
      return o;
    }

    return this._fetchAndCacheProfile(e, t);
  },
  async _fetchAndCacheProfile(e, t) {
    const o = await Z.get(J.users.profile(e));
    const r = Mr(o);
    Wt.set(t, r);
    return r;
  },
  invalidateProfileCache(e) {
    Wt.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const o = e.toLowerCase();
    const r = Wt.get(o);

    if (r) {
      Wt.set(o, { ...r, ...t });
    }
  },
  async followUser(e) {
    await Z.post(J.users.follow(e), {});
  },
  async unfollowUser(e) {
    await Z.delete(J.users.follow(e));
  },
  async pinPost(e) {
    await Z.post(J.posts.pin(e));
  },
  async unpinPost(e) {
    await Z.delete(J.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await Z.get(J.users.privacy);
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

    await Z.put(J.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await Z.get(J.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await Z.post(J.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await Z.get(J.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await Z.put(J.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await Z.delete(J.users.setPin);
  },
  async deleteAccount() {
    await Z.delete(J.users.deleteAccount);
  },
  async restoreAccount() {
    await Z.post(J.users.restoreAccount);
  },
};
function un(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const bt = new Qo(50, 300 * 1000 /* 1e3 */);
const $a = 60 * 1000; /* 1e3 */
setInterval(() => bt.cleanup(), 120 * 1000 /* 1e3 */);
function Da(e) {
  return {
    id: e.id,
    username: e.username,
    displayName: e.displayName,
    avatar: e.avatar,
    isVerified: e.isVerified ?? e.verified ?? false,
    pin: e.pin ?? null,
  };
}
function Vt(e) {
  const o = (e.attachments ?? []).map((l) => {
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
  if (e.poll && !o.some((l) => l.type === "poll")) {
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

    o.push(h);
  }
  const r = e.stats?.reactions ?? e.likesCount ?? 0;
  const s = e.stats?.views ?? e.viewsCount ?? 0;
  const i = e.stats?.comments ?? e.commentsCount ?? 0;
  const a = e.stats?.reposts ?? e.repostsCount ?? 0;
  const c = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const u = e.text ?? e.content ?? "";
  return {
    id: e.id,
    author: Da(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: u,
    spans: e.spans ?? [],
    attachments: o,
    reactions: { total: r, myReaction: c },
    stats: { views: s, comments: i, reposts: a },
    originalPost: e.originalPost ? Vt(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const We = {
  async getFeed(e, t = {}) {
    const o = new URLSearchParams();
    o.set("limit", String(t.limit || 20));

    o.set(
      "tab",
      e === "global" ? "popular" : e === "clan" ? "clan" : "following"
    );

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    const r = o.toString();
    const s = `${J.posts.list}${r ? `?${r}` : ""}`;
    const i = await Z.get(s);
    return { data: i.data.posts.map(Vt), nextCursor: un(i.data) };
  },
  async getPost(e) {
    const t = await Z.get(J.posts.single(e));
    return Vt(t.data);
  },
  async getUserWall(e, t = {}) {
    if (!t.cursor) {
      const o = e;
      const r = bt.get(o);
      const s = r && r.pinnedPostId === (t.pinnedPostId ?? null);

      if (r && s && bt.isFresh(o, $a)) {
        this._fetchAndCacheWall(e, t, o).catch(() => {});
        return { data: r.posts, nextCursor: r.nextCursor };
      }

      if (r && s) {
        this._fetchAndCacheWall(e, t, o).catch(() => {});
        return { data: r.posts, nextCursor: r.nextCursor };
      }

      return this._fetchAndCacheWall(e, t, o);
    }
    return this._fetchWall(e, t);
  },
  async _fetchAndCacheWall(e, t, o) {
    const r = await this._fetchWall(e, t);

    bt.set(o, {
      posts: r.data,
      nextCursor: r.nextCursor,
      pinnedPostId: t.pinnedPostId ?? null,
    });

    return r;
  },
  async _fetchWall(e, t) {
    const o = new URLSearchParams();

    if (t.limit) {
      o.set("limit", t.limit.toString());
    }

    o.set("sort", "new");

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    if (t.pinnedPostId) {
      o.set("pinnedPostId", t.pinnedPostId);
    }

    const r = o.toString();
    const s = `${J.posts.byUser(e)}${r ? `?${r}` : ""}`;
    const i = await Z.get(s);
    return { data: i.data.posts.map(Vt), nextCursor: un(i.data) };
  },
  invalidateWallCache(e) {
    bt.delete(e);
  },
  updatePostInWallCache(e, t, o) {
    const r = bt.get(e);
    if (r) {
      const s = r.posts.map((i) => (i.id === t ? { ...i, ...o } : i));
      bt.set(e, { ...r, posts: s });
    }
  },
  removePostFromWallCache(e, t) {
    const o = bt.get(e);
    if (o) {
      const r = o.posts.filter((s) => s.id !== t);
      bt.set(e, { ...o, posts: r });
    }
  },
  async likePost(e) {
    await Z.post(J.posts.like(e));
  },
  async unlikePost(e) {
    await Z.delete(J.posts.like(e));
  },
  async createPost(e) {
    return await Z.post(J.posts.create, {
      content: e.text,
      spans: e.spans,
      wallRecipientId: e.wallOwnerId,
      attachmentIds: e.attachmentIds,
      poll: e.poll,
    });
  },
  async createRepost(e, t) {
    return await Z.post(J.posts.repost(e), { content: t });
  },
  async editPost(e, t) {
    const o = t.content ?? t.text;
    await Z.put(J.posts.update(e), { content: o, spans: t.spans });
  },
  async deletePost(e) {
    await Z.delete(J.posts.delete(e));
  },
  async restorePost(e) {
    await Z.post(J.posts.restore(e));
  },
  async trackView(e) {
    Z.post(J.posts.view(e)).catch(() => {});
  },
  async trackViewsBatch(e) {
    if (e.length !== 0) {
      for (const t of e) {
        Z.post(J.posts.view(t)).catch(() => {});
      }
    }
  },
  async getUserPosts(e, t = {}) {
    const o = new URLSearchParams();

    if (t.limit) {
      o.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    if (t.sort) {
      o.set("sort", t.sort);
    }

    if (t.pinnedPostId) {
      o.set("pinnedPostId", t.pinnedPostId);
    }

    const r = o.toString();
    const s = `${J.posts.byUser(e)}${r ? `?${r}` : ""}`;
    const i = await Z.get(s);
    return { data: i.data.posts.map(Vt), nextCursor: un(i.data) };
  },
  async getUserLikedPosts(e, t = {}) {
    const o = new URLSearchParams();

    if (t.limit) {
      o.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    const r = o.toString();
    const s = `${J.posts.likedByUser(e)}${r ? `?${r}` : ""}`;
    const i = await Z.get(s);
    return { data: i.data.posts.map(Vt), nextCursor: un(i.data) };
  },
  async pinPost(e) {
    await Z.post(J.posts.pin(e));
  },
  async unpinPost(e) {
    await Z.delete(J.posts.pin(e));
  },
  async votePoll(e, t) {
    const o = await Z.post(J.posts.pollVote(e), { optionIds: t });
    return o.data ?? o;
  },
  async unrepost(e) {
    await Z.delete(J.posts.repost(e));
  },
  async getPostsByHashtag(e, t = {}) {
    const o = new URLSearchParams();

    if (t.limit) {
      o.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    const r = o.toString();
    const s = `${J.hashtags.posts(e)}${r ? `?${r}` : ""}`;
    const i = await Z.get(s);
    return { data: i.data.posts.map(Vt), nextCursor: un(i.data) };
  },
};

const Ba = { new: "newest", old: "oldest", popular: "popular" };
function Ua(e) {
  return {
    id: e.id,
    username: e.username,
    displayName: e.displayName,
    avatar: e.avatar,
    isVerified: e.isVerified ?? e.verified ?? false,
    pin: e.pin ?? null,
  };
}
function Bo(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const o = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const s = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: Ua(e.author),
    parentId: e.parentId,
    rootId: e.rootId ?? null,
    text: s,
    spans: e.spans ?? [],
    attachments: e.attachments ?? [],
    reactions: { total: t, myReaction: r },
    stats: { replies: o },
    replyTo: e.replyTo ?? null,
    previewReplies:
      e.previewReplies ?? e.replies
        ? (e.previewReplies ?? e.replies).map(Bo)
        : undefined,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}

const dt = {
  async getComments(e, t = {}) {
    const o = new URLSearchParams();

    if (t.limit) {
      o.set("limit", t.limit.toString());
    }

    if (t.sort) {
      o.set("sort", Ba[t.sort]);
    }

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    const r = o.toString();
    const s = `${J.posts.comments(e)}${r ? `?${r}` : ""}`;
    const i = await Z.get(s);
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
    return { data: a.map(Bo), nextCursor: c };
  },
  async getReplies(e, t = {}) {
    const o = new URLSearchParams();

    if (t.limit) {
      o.set("limit", t.limit.toString());
    }

    if (t.cursor) {
      o.set("cursor", t.cursor);
    }

    const r = o.toString();
    const s = `${J.comments.replies(e)}${r ? `?${r}` : ""}`;
    const i = await Z.get(s);
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
    return { data: a.map(Bo), nextCursor: c };
  },
  async createComment(e, t, o, r, s) {
    return await Z.post(J.posts.comments(e), {
      content: t,
      attachmentIds: s?.map((i) => i.mediaId),
    });
  },
  async createReply(e, t, o, r, s) {
    return await Z.post(J.comments.replies(e), {
      content: t,
      replyToUserId: r,
      attachmentIds: s?.map((i) => i.mediaId),
    });
  },
  async editComment(e, t, o) {
    await Z.patch(J.comments.edit(e), { content: t });
  },
  async deleteComment(e) {
    await Z.delete(J.comments.delete(e));
  },
  async likeComment(e) {
    await Z.post(J.comments.like(e));
  },
  async unlikeComment(e) {
    await Z.delete(J.comments.like(e));
  },
};

const Fa = {
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

function ei(e) {
  const t = Fa[e.type] ?? "follow";
  const o = e.entityId ?? e.targetId ?? null;
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
    entityId: o,
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

const Ot = {
  async getNotifications(e = {}) {
    const t = new URLSearchParams();
    const o = e.limit ?? 20;
    t.set("limit", o.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

    if (r > 0) {
      t.set("offset", r.toString());
    }

    const s = t.toString();
    const i = `${J.notifications.list}${s ? `?${s}` : ""}`;
    const a = await Z.get(i);
    const c = a.notifications ?? a.data ?? [];
    const l = a.hasMore ?? false ? String(r + c.length) : null;
    return { notifications: c.map(ei), nextCursor: l };
  },
  async getUnreadCount() {
    return (await Z.get(J.notifications.count)).count;
  },
  async markAsRead(e) {
    if (e.length === 1) {
      const r = await Z.post(J.notifications.markRead(e[0]));
      return { markedCount: r.markedCount ?? r.marked ?? 1 };
    }
    const t = 20;
    let o = 0;
    for (let r = 0; r < e.length; r += t) {
      const s = e.slice(r, r + t);
      const i = await Z.post(J.notifications.markReadBatch, { ids: s });
      o += i.markedCount ?? i.marked ?? s.length;
    }
    return { markedCount: o };
  },
  async markAllAsRead() {
    const e = await Z.post(J.notifications.markAllRead);
    return { markedCount: e.markedCount ?? e.marked ?? 0 };
  },
  async getSettings() {
    const e = await Z.get(J.notifications.settings);
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

    await Z.put(J.notifications.settings, t);
  },
};

const Ha = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const Wa = ["video/mp4", "video/webm", "video/quicktime"];
const Uo = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const Va = ".mp4,.webm,.mov";

const tn = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await Z.uploadFormData(J.files.upload, t, {
      timeout: 300 * 1000 /* 1e3 */,
    });
  },
  async deleteFile(e) {
    await Z.delete(J.files.delete(e));
  },
  isValidImageType(e) {
    return Ha.includes(e.type);
  },
  isValidVideoType(e) {
    return Wa.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

function Or(e) {
  const t = e.user ?? e;
  const o = t.id ?? e.id;
  return {
    id: e.id,
    userId: o,
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
const kt = _t((e) => ({
  statuses: {},

  setStatuses: (t) =>
    e((o) => ({
      statuses: { ...o.statuses, ...t },
    })),

  setStatus: (t, o) =>
    e((r) => ({
      statuses: { ...r.statuses, [t]: o },
    })),

  clear: () => e({ statuses: {} }),
}));
let Fo = new Set();
function ja() {
  if (!go) {
    setTimeout(async () => {
      go = null;
      const e = Array.from(Fo);
      Fo.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const o = e.slice(t, t + 20);
          try {
            const r = await En.batchFollowStatus(o);
            kt.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50);
  }
}
function za(e) {
  const t = Ce((i) => i.profile?.id);

  const o = kt((i) => i.statuses);

  const r = x("");

  W(() => {
    if (!t) {
      return;
    }

    const i = e.filter((c) => c !== t && o[c] === undefined);

    const a = i.sort().join(",");
    if (!(a === r.current || a === "")) {
      r.current = a;
      for (const c of i) {
        Fo.add(c);
      }
      ja();
    }
  }, [e, t]);

  return {
    getStatus: S(
      (i) => {
        if (i !== t) {
          return o[i];
        }
      },
      [o, t]
    ),
    statuses: o,
  };
}
const jt = new Qo(500, 120 * 1000 /* 1e3 */);
setInterval(() => jt.cleanup(), 60 * 1000 /* 1e3 */);

const En = {
  async followUser(e) {
    const t = await Z.post(J.users.follow(e), {});
    jt.delete(e);
    kt.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await Z.delete(J.users.follow(e));
    jt.delete(e);
    kt.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const o = new URLSearchParams();
    const r = t.limit ?? 20;
    o.set("limit", r.toString());
    const s = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    o.set("page", s.toString());
    const i = o.toString();
    const a = `${J.users.followers(e)}${i ? `?${i}` : ""}`;
    const c = await Z.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.followers ?? [];
    const d = u.pagination?.hasMore ?? false ? String(s + 1) : null;
    return { data: l.map(Or), nextCursor: d };
  },
  async getFollowing(e, t = {}) {
    const o = new URLSearchParams();
    const r = t.limit ?? 20;
    o.set("limit", r.toString());
    const s = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    o.set("page", s.toString());
    const i = o.toString();
    const a = `${J.users.following(e)}${i ? `?${i}` : ""}`;
    const c = await Z.get(a);
    const u = c.data ?? c;
    const l = u.users ?? u.following ?? [];
    const d = u.pagination?.hasMore ?? false ? String(s + 1) : null;
    return { data: l.map(Or), nextCursor: d };
  },
  async blockUser(e) {
    await Z.post(J.users.block(e), {});
    jt.delete(e);
  },
  async unblockUser(e) {
    await Z.delete(J.users.block(e));
    jt.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const o = e.limit ?? 20;
    t.set("limit", o.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", r.toString());
    const s = t.toString();
    const i = `${J.users.blocked}${s ? `?${s}` : ""}`;
    const a = await Z.get(i);
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

    return (await Z.post(J.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    jt.delete(e);
  },
  clearSocialCache() {
    jt.clear();
  },
};

const Un = {
  TARGET_NOT_FOUND: "REPORT_TARGET_NOT_FOUND",
  CANNOT_REPORT_OWN_CONTENT: "REPORT_CANNOT_REPORT_OWN_CONTENT",
  ALREADY_REPORTED: "REPORT_ALREADY_REPORTED",
  DESCRIPTION_TOO_LONG: "REPORT_DESCRIPTION_TOO_LONG",
};

const Ya = {
  async createReport(e) {
    const t = await Z.post(J.reports.create, e);
    return t?.data ?? t;
  },
};

const Xa = {
  async getChangelog() {
    const e = await Z.get(J.platform.changelog);
    return e.data ?? e;
  },
};

const Fn = {
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

const Ce = _t()(
  Jo(
    (e, t) => {
      Z.setRefreshTokenCallback(async () => {
        try {
          const r = await Tt.refreshSession();
          Z.setAccessToken(r.accessToken);
          $e.setAccessToken(r.accessToken);
          return r.accessToken;
        } catch (r) {
          return Le(r) && r.status >= 500
            ? (e({ status: "service_error" }), null)
            : (t().reset(), null);
        }
      });

      Z.setOnUnauthorizedCallback(() => {
        if (t().status !== "service_error") {
          t().reset();
        }
      });

      return {
        ...Fn,
        register: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await Tt.register(r);

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: s.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const i = Le(s) ? s.message : "Registration failed";
            const a = Le(s) ? s.code : null;
            e({ status: "unauthenticated", error: i, errorCode: a });
            throw s;
          }
        },
        login: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await Tt.login(r);
            if (Aa(s)) {
              Z.setAccessToken(s.accessToken);
              $e.setAccessToken(s.accessToken);
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
                  Le(a) &&
                  (a.code === _e.ENTITY_NOT_FOUND || a.status === 404)
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
            const i = Le(s) ? s.message : "Login failed";
            const a = Le(s) ? s.code : null;
            e({ status: "unauthenticated", error: i, errorCode: a });
            throw s;
          }
        },
        verifyOtp: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail, pendingPassword, flowToken } = t();
          try {
            const c = await Tt.verifyOtp({
              email: pendingEmail || "",
              password: pendingPassword || "",
              otp: r,
              flowToken: flowToken || "",
            });
            e({ pendingPassword: null });

            if (xa(c)) {
              Z.setAccessToken(c.accessToken);
              $e.setAccessToken(c.accessToken);
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
                  Le(l) &&
                  (l.code === _e.ENTITY_NOT_FOUND || l.status === 404)
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
            const u = Le(c) ? c.message : "Verification failed";
            const l = Le(c) ? c.code : null;
            e({ status: "needs_verification", error: u, errorCode: l });
            throw c;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail, flowToken } = t();
          try {
            await Tt.resendOtp({
              email: pendingEmail || "",
              flowToken: flowToken || "",
            });
          } catch (i) {
            const a = Le(i) ? i.message : "Failed to resend code";
            const c = Le(i) ? i.code : null;
            e({ error: a, errorCode: c });
            throw i;
          }
        },
        createProfile: async (r) => {
          e({ error: null, errorCode: null });
          try {
            await pt.createProfile(r);
            await t().fetchProfile();
            e({ status: "authenticated" });
          } catch (s) {
            const i = Le(s) ? s.message : "Failed to create profile";
            const a = Le(s) ? s.code : null;
            e({ error: i, errorCode: a });
            throw s;
          }
        },
        logout: async () => {
          try {
            await Tt.logout();
          } catch {
          } finally {
            Z.setAccessToken(null);
            $e.setAccessToken(null);
            e({ ...Fn, status: "unauthenticated" });
          }
        },
        logoutAll: async () => {
          try {
            await Tt.logoutAll();
          } catch {
          } finally {
            Z.setAccessToken(null);
            $e.setAccessToken(null);
            e({ ...Fn, status: "unauthenticated" });
          }
        },
        refreshSession: async () => {
          try {
            const r = await Tt.refreshSession();
            Z.setAccessToken(r.accessToken);
            $e.setAccessToken(r.accessToken);
            return r.accessToken;
          } catch (r) {
            return Le(r) && r.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const r = await pt.getMyProfile();
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
                Le(i) &&
                (i.code === _e.ENTITY_NOT_FOUND || i.status === 404)
              ) {
                e({ status: "needs_profile" });
              } else {
                throw i;
              }
            }
          } catch (s) {
            if (Le(s) && s.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await pt.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await pt.restoreAccount();
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
          Z.setAccessToken(null);
          $e.setAccessToken(null);
          e({ ...Fn, status: "unauthenticated" });
        },
        setProfile: (r) => {
          e({ profile: r });
        },
      };
    },
    {
      name: "auth-storage",
      storage: Ko(() => sessionStorage),
      partialize: (e) => ({
        profile: e.profile,
        email: e.email,
      }),
    }
  )
);

const qa = () => Ce((e) => e.status);

const er = () => Ce((e) => e.profile);

const ti = () => Ce((e) => e.status === "authenticated");

const Qn = _t()(
  Jo(
    (e) => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      },
    }),
    { name: "settings", storage: Ko(() => localStorage) }
  )
);

const Je = new Map();
const Za = 60 * 1000; /* 1e3 */
const Ga = 300 * 1000; /* 1e3 */
const $r = 20;
const Dr = 500;
function Ka() {
  const e = Date.now();
  for (const [t, o] of Je.entries()) {
    if (e - o.timestamp > Ga) {
      Je.delete(t);
    }
  }
  if (Je.size > $r) {
    const t = Array.from(Je.entries()).sort(
      (r, s) => r[1].timestamp - s[1].timestamp
    );
    t.slice(0, t.length - $r).forEach(([r]) => Je.delete(r));
  }
}

const me = _t((e, t) => ({
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

  setActiveFeed: (o) => {
    if (t().activeFeed !== o) {
      t().feedMeasuredHeights.clear();

      e({
        activeFeed: o,
        posts: [],
        hasMore: true,
        nextCursor: null,
        isLoading: false,
        error: null,
        feedScrollPosition: 0,
      });
    }
  },

  fetchFeed: async (o = false) => {
    const { activeFeed, isLoading, isRefreshing } = t();
    if (!(isLoading || isRefreshing)) {
      e({ isLoading: !o, isRefreshing: o, error: null });
      try {
        const a = await We.getFeed(activeFeed, { limit: 20 });
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
        const a = await We.getFeed(activeFeed, {
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

  createPost: async (o, r, s = [], i = [], a) => {
    const c = Ce.getState().profile;
    if (!c) {
      throw new Error("Not authenticated");
    }
    try {
      const u = i.map(({ mediaId: f }) => f);

      const { id: id_1 } = await We.createPost({
        wallOwnerId: o !== c.id ? o : undefined,
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
        wallOwnerId: o,
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

      We.invalidateWallCache(o);
      try {
        const f = await We.getPost(id_1);
        e((m) => ({
          posts: m.posts.map((N) => (N.id === id_1 ? f : N)),
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

  setHighlightedCommentId: (o) => {
    e({ highlightedCommentId: o });
  },

  fetchPost: async (o) => {
    const r = t().posts.find((s) => s.id === o);
    if (r) {
      e({ currentPost: r, currentPostLoading: false, currentPostError: false });
      return;
    }
    if (t().currentPost?.id !== o) {
      e({
        currentPostLoading: true,
        currentPost: null,
        currentPostError: false,
      });
      try {
        const s = await We.getPost(o);
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

  setCurrentPost: (o) => {
    e({ currentPost: o, currentPostLoading: false, currentPostError: false });
  },

  clearComments: () => {
    e({
      comments: [],
      commentsLoading: true,
      commentsHasMore: true,
      commentsNextCursor: null,
    });
  },

  fetchComments: async (o) => {
    const { currentPost } = t();
    if (
      currentPost &&
      currentPost.id === o &&
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
    Ka();
    const s = Qn.getState().commentsSort;
    const i = o;
    const a = Je.get(i);
    const c = Date.now();
    if (a && a.sort === s) {
      if (c - a.timestamp < Za) {
        e({
          comments: a.comments,
          commentsNextCursor: a.nextCursor,
          commentsHasMore: a.hasMore,
          commentsLoading: false,
        });

        dt.getComments(o, { limit: 100, sort: s })
          .then((l) => {
            const l_data = l.data;

            Je.set(i, {
              comments: l_data,
              hasMore: l.nextCursor !== null,
              nextCursor: l.nextCursor,
              timestamp: Date.now(),
              sort: s,
            });

            e((d) =>
              d.comments.length > 0 && d.comments[0]?.postId === o
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
      const u = await dt.getComments(o, { limit: 100, sort: s });
      const u_data = u.data;

      Je.set(i, {
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

  loadMoreComments: async (o) => {
    const { commentsLoadingMore, commentsHasMore, commentsNextCursor } = t();
    if (commentsLoadingMore || !commentsHasMore) {
      return;
    }
    const a = Qn.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await dt.getComments(o, {
        limit: 100,
        sort: a,
        cursor: commentsNextCursor ?? undefined,
      });
      e((u) => {
        const l = [...u.comments, ...c.data];
        return {
          comments: l.length > Dr ? l.slice(-Dr) : l,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.nextCursor !== null,
          commentsLoadingMore: false,
        };
      });
    } catch {
      e({ commentsLoadingMore: false });
    }
  },

  toggleCommentReaction: async (o, r) => {
    const { comments } = t();

    let i = comments.findIndex((g) => g.id === o);

    let a = false;
    let c = -1;
    let u = -1;
    if (i === -1) {
      for (let g = 0; g < comments.length; g++) {
        const p = (comments[g].previewReplies ?? []).findIndex(
          (T) => T.id === o
        );
        if (p !== -1) {
          a = true;
          c = g;
          u = p;
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
    const N = f || r;
    const w = [...comments];
    if (a) {
      const g = [...(w[c].previewReplies ?? [])];
      g[u] = { ...g[u], reactions: { total: m, myReaction: N } };
      w[c] = { ...w[c], previewReplies: g };
    } else {
      w[i] = { ...w[i], reactions: { total: m, myReaction: N } };
    }
    e({ comments: w });
    try {
      if (f) {
        await dt.unlikeComment(o);
      } else {
        await dt.likeComment(o);
      }
    } catch (g) {
      console.error("Failed to toggle comment reaction:", g);
      const v = [...t().comments];
      if (a) {
        const p = v.findIndex((T) => T.previewReplies?.some((_) => _.id === o));
        if (p !== -1) {
          const T = v[p].previewReplies.findIndex((_) => _.id === o);
          if (T !== -1) {
            const _ = [...v[p].previewReplies];
            _[T] = { ..._[T], reactions: { total: d, myReaction: h } };
            v[p] = { ...v[p], previewReplies: _ };
          }
        }
      } else {
        const p = v.findIndex((T) => T.id === o);

        if (p !== -1) {
          v[p] = { ...v[p], reactions: { total: d, myReaction: h } };
        }
      }
      e({ comments: v });
    }
  },

  addComment: async (o, r, s = [], i, a, c, u) => {
    try {
      const l = i
        ? await dt.createReply(i, r, s, c, a)
        : await dt.createComment(o, r, s, undefined, a);

      const h = Ce.getState().profile;
      if (h) {
        const N = (l.attachments || [])
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

        const w = {
          id: l.id,
          postId: o,
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
          attachments: N,
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
                        previewReplies: [...(v.previewReplies || []), w],
                        stats: { ...v.stats, replies: v.stats.replies + 1 },
                      }
                    : v
                ),

                highlightedCommentId: l.id,
              })
            : (g) => ({
                comments: [w, ...g.comments],
                highlightedCommentId: l.id,
              })
        );
      }
      const { currentPost } = t();

      if (currentPost && currentPost.id === o) {
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

      const f = Qn.getState().commentsSort;
      const m = Je.get(o);

      if (m) {
        Je.set(o, { ...m, comments: t().comments, timestamp: Date.now() });
      } else {
        Je.set(o, {
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

  loadReplies: async (o) => {
    const { comments } = t();
    if (comments.findIndex((i) => i.id === o) !== -1) {
      try {
        const i = await dt.getReplies(o, { limit: 100 });
        e((a) => ({
          comments: a.comments.map((c) =>
            c.id === o ? { ...c, previewReplies: i.data } : c
          ),
        }));
      } catch (i) {
        console.error("Failed to load replies:", i);
      }
    }
  },

  editComment: async (o, r, s) => {
    const { comments } = t();

    const a = (u) =>
      u.map((l) =>
        l.id === o
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
                h.id === o
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
      await dt.editComment(o, r, s);
    } catch (u) {
      console.error("Failed to edit comment:", u);
      e({ comments: c });
      throw u;
    }
  },

  deleteComment: async (o) => {
    const { comments, currentPost } = t();

    const i = comments.some((u) => u.id === o);

    const a = comments.find((u) => u.previewReplies?.some((l) => l.id === o));

    const c = comments;

    if (i) {
      e({ comments: comments.filter((u) => u.id !== o) });
    } else if (a) {
      e({
        comments: comments.map((u) =>
          u.id === a.id
            ? {
                ...u,
                previewReplies: u.previewReplies?.filter((l) => l.id !== o),
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
      await dt.deleteComment(o);
    } catch (u) {
      console.error("Failed to delete comment:", u);
      e({ comments: c });
      throw u;
    }
  },

  editPost: async (o, r, s) => {
    await We.editPost(o, { text: r, spans: s });
    const { posts, currentPost } = t();
    const c = new Date().toISOString();

    const u = posts.find((l) => l.id === o);

    e({
      posts: posts.map((l) =>
        l.id === o ? { ...l, text: r, spans: s ?? l.spans, editedAt: c } : l
      ),
      currentPost:
        currentPost?.id === o
          ? {
              ...currentPost,
              text: r,
              spans: s ?? currentPost.spans,
              editedAt: c,
            }
          : currentPost,
      _lastPostEdit: { postId: o, text: r, spans: s ?? [], editedAt: c },
    });

    if (u?.wallOwnerId) {
      We.updatePostInWallCache(u.wallOwnerId, o, {
        text: r,
        spans: s ?? u.spans,
        editedAt: c,
      });
    }
  },

  deletePost: async (o) => {
    const { posts, currentPost } = t();
    const i = posts;

    const a = posts.find((c) => c.id === o);

    e({
      posts: posts.filter((c) => c.id !== o),
      currentPost: currentPost?.id === o || currentPost,
    });
    try {
      await We.deletePost(o);
    } catch (c) {
      console.error("Failed to delete post:", c);

      if (a) {
        e({ posts: i });
      }

      throw c;
    }
  },

  updatePostReaction: (o, r, s) => {
    e((i) => {
      const a = i.posts.map((u) =>
        u.id === o
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
        i.currentPost?.id === o
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
        _lastReactionUpdate: { postId: o, myReaction: r, totalDelta: s },
      };
    });
  },

  updatePollVote: (o, r, s) => {
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
      const c = a.posts.map((l) => (l.id === o ? i(l) : l));

      const u = a.currentPost?.id === o ? i(a.currentPost) : a.currentPost;
      return { posts: c, currentPost: u };
    });
  },

  updatePollData: (o, r) => {
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
      const a = i.posts.map((u) => (u.id === o ? s(u) : u));

      const c = i.currentPost?.id === o ? s(i.currentPost) : i.currentPost;
      return { posts: a, currentPost: c };
    });
  },

  setFeedScrollPosition: (o) => {
    e({ feedScrollPosition: o });
  },

  setFeedMeasuredHeights: (o) => {
    e({ feedMeasuredHeights: o });
  },

  reset: () => {
    t().feedMeasuredHeights.clear();
    Je.clear();

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

const Br = {
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

let yt = null;
let dn = null;
let $t = 0;
let Dt = null;
const Ur = [
  1000 /* 1e3 */, 2000 /* 2e3 */, 4000 /* 4e3 */, 8000 /* 8e3 */,
  16000 /* 16e3 */, 30000 /* 3e4 */,
];
const Ja = 0.3;
const Qa = 15;
function Fr(e) {
  const t = Ur[Math.min(e, Ur.length - 1)];
  const o = t * Ja * (Math.random() * 2 - 1);
  return Math.round(t + o);
}
function ec(e) {
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
  return ei(t);
}

const ln = _t()((e, t) => ({
  ...Br,

  initialize: () => {
    if (!t().isInitialized) {
      e({ isInitialized: true });
      t().connectSSE();
      t().fetchUnreadCount();
    }
  },

  fetchNotifications: async (o = false) => {
    const { status, nextCursor, notifications } = t();
    if (
      status !== "loading" &&
      !(!o && nextCursor === null && notifications.length > 0)
    ) {
      e({ status: "loading", error: null });
      try {
        const a = o || (nextCursor ?? undefined);
        const c = await Ot.getNotifications({ cursor: a, limit: 20 });
        e({
          notifications: o
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
      const o = await Ot.getUnreadCount();
      e({ unreadCount: o });
    } catch {}
  },

  markAsRead: async (o) => {
    if (o.length === 0) {
      return;
    }
    const r = t();

    const s = o.filter((i) => {
      const a = r.notifications.find((c) => c.id === i);
      return a && !a.isRead;
    });

    e((i) => ({
      notifications: i.notifications.map((a) =>
        o.includes(a.id) ? { ...a, isRead: true } : a
      ),

      unreadCount: Math.max(0, i.unreadCount - s.length),
    }));
    try {
      await Ot.markAsRead(o);
    } catch {}
  },

  markAsReadSilent: async (o) => {
    if (o.length !== 0) {
      e((r) => ({
        unreadCount: Math.max(0, r.unreadCount - o.length),
      }));
      try {
        await Ot.markAsRead(o);
      } catch {}
    }
  },

  markAllAsRead: async () => {
    e((o) => ({
      notifications: o.notifications.map((r) => ({
        ...r,
        isRead: true,
      })),

      unreadCount: 0,
    }));
    try {
      await Ot.markAllAsRead();
    } catch {}
  },

  connectSSE: () => {
    if (yt) {
      return;
    }
    const o = Z.getAccessToken();
    if (!o) {
      e({ sseStatus: "error", error: "Not authenticated" });
      return;
    }
    e({ sseStatus: "connecting" });
    const r = "/api/notifications/stream";
    yt = new AbortController();

    (async () => {
      try {
        const i = await fetch(r, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            Authorization: `Bearer ${o}`,
            "Cache-Control": "no-cache",
          },
          signal: yt?.signal,
        });
        if (!i.ok) {
          if (i.status === 401) {
            try {
              const l = await Tt.refreshSession();
              Z.setAccessToken(l.accessToken);
              $e.setAccessToken(l.accessToken);
              yt = null;
              const h = Fr($t);
              $t++;

              dn = setTimeout(() => {
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
        $t = 0;
        e({ sseStatus: "connected", error: null });

        if (Dt) {
          Dt.cancel().catch(() => {});
          Dt = null;
        }

        const a = i.body.getReader();
        Dt = a;
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
          for (const N of d) {
            if (N.startsWith("event: ")) {
              f = N.slice(7);
            } else if (N.startsWith("data: ")) {
              m = N.slice(6);
            } else if (N === "" && m) {
              try {
                const w = JSON.parse(m);
                const g = f || w.type;
                if (g !== "connected") {
                  if (g === "notification") {
                    const v = w.payload ?? w;
                    const p = ec(v);
                    const T = p.payload.actors[0];

                    const _ = {
                      id: p.id,
                      type: p.type,
                      actorName: T?.displayName || "Пользователь",
                      actorUsername: T?.username || "",
                      actorAvatar: T?.avatar || "",
                      count: p.payload.count,
                      message: nc(
                        p.type,
                        T?.displayName || "Пользователь",
                        p.payload.count
                      ),
                      clickUrl: p.payload.clickUrl,
                      entityId: p.entityId,
                      parentEntityId: p.parentEntityId,
                    };

                    e((C) => ({
                      notifications: [p, ...C.notifications],
                      unreadCount: w.unreadCount ?? C.unreadCount,
                      lastSseToast: _,
                    }));

                    if (w.sound) {
                      oc();
                    }
                  } else {
                    if (g === "unread_count") {
                      e({ unreadCount: w.payload?.count ?? 0 });
                    }
                  }
                }
              } catch (w) {
                console.error("SSE message parse error:", w, m);
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

        if ($t >= Qa) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          yt = null;
          return;
        }

        const a = Fr($t);
        $t++;

        dn = setTimeout(() => {
          yt = null;
          t().connectSSE();
        }, a);
      }
    })();
  },

  disconnectSSE: () => {
    if (dn) {
      clearTimeout(dn);
      dn = null;
    }

    if (Dt) {
      Dt.cancel().catch(() => {});
      Dt = null;
    }

    if (yt) {
      yt.abort();
      yt = null;
    }

    $t = 0;
    e({ sseStatus: "disconnected" });
  },

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const o = await Ot.getSettings();
      e({ settings: o, settingsLoading: false });
    } catch {
      e({ settingsLoading: false });
    }
  },

  updateSettings: async (o) => {
    const { settings: r } = t();
    if (r) {
      const s = {
        webEnabled: o.webEnabled ?? r.webEnabled,
        soundEnabled: o.soundEnabled ?? r.soundEnabled,
        preferences: { ...r.preferences, ...o.preferences },
      };
      e({ settings: s });
    }
    try {
      await Ot.updateSettings(o);
    } catch {
      e({ settings: r });
    }
  },

  reset: () => {
    t().disconnectSSE();
    e(Br);
  },
}));

const tc = {
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

function nc(e, t, o) {
  const tc_e = tc[e];
  return tc_e ? tc_e(t, o) : "Новое уведомление";
}
function oc() {
  try {
    const e = new Audio("/assets/notification.ogg");
    e.volume = 0.5;
    e.play().catch(() => {});
  } catch {}
}

const ni = () => ln((e) => e.unreadCount);

const rc = () => ln((e) => e.lastSseToast);

const tr = _t((e, t) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    if (!t().loaded) {
      try {
        const o = await Z.get("/v1/portal");
        e({ portal: o, loaded: true });
      } catch {
        e({ loaded: true });
      }
    }
  },
}));

const oi = () => tr((e) => e.portal);

const Rn = new Set();
let Tn = null;
const sc = 30000; /* 3e4 */
function ic() {
  if (Tn === null) {
    Tn = window.setInterval(() => {
      Rn.forEach((e) => e());
    }, sc);
  }
}
function ac() {
  if (Tn !== null) {
    clearInterval(Tn);
    Tn = null;
  }
}
function cc(e) {
  Rn.add(e);

  if (Rn.size === 1) {
    ic();
  }
}
function lc(e) {
  Rn.delete(e);

  if (Rn.size === 0) {
    ac();
  }
}
function vo(e) {
  const t = Date.now();
  const o = Math.floor((t - e.getTime()) / 1000 /* 1e3 */);
  return o < 60
    ? "сейчас"
    : o < 3600
    ? `${Math.floor(o / 60)} мин.`
    : o < 86400
    ? `${Math.floor(o / 3600)} ч.`
    : o < 604800
    ? `${Math.floor(o / 86400)} дн.`
    : o < 2419200
    ? `${Math.floor(o / 604800)} нед.`
    : e.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function ri(e) {
  const t = new Date(e).getTime();
  const o = !isNaN(t);
  const r = o ? t : 0;

  const [s, i] = A(() => (o ? vo(new Date(r)) : ""));

  W(() => {
    if (!o) {
      i("");
      return;
    }
    const a = new Date(r);
    i(vo(a));
    const c = () => {
      i(vo(a));
    };
    cc(c);

    return () => lc(c);
  }, [r, o]);

  return s;
}
const Hr = 1174;
function vt() {
  const [e, t] = A(() =>
    typeof window === "undefined" ? false : window.innerWidth < Hr
  );

  W(() => {
    const o = window.matchMedia(`(max-width: ${Hr - 1}px)`);

    const r = (s) => {
      t(s.matches);
    };

    t(o.matches);
    o.addEventListener("change", r);

    return () => {
      o.removeEventListener("change", r);
    };
  }, []);

  return e;
}
const uc = sn({ isHidden: false });

const dc = () => {
  const [e, t] = A(false);
  const o = x(0);

  W(() => {
    const r = () => {
      const window_scrollY = window.scrollY;
      const i = window_scrollY - o.current;

      if (i > 10 && window_scrollY > 50) {
        t(true);
      } else if (i < -10) {
        t(false);
      }

      o.current = window_scrollY;
    };
    window.addEventListener("scroll", r, { passive: true });

    return () => window.removeEventListener("scroll", r);
  }, []);

  return e;
};

function hc() {
  const [e, t] = A(false);
  const [o, r] = A(false);
  const [s, i] = A(0);
  const [a, c] = A(false);
  const [u, l] = A(0);
  const [h, d] = A(0);
  const [f, m] = A([]);
  const [N, w] = A(0);
  const g = x(0);
  const v = x(null);
  const p = x(null);
  const T = x(null);
  const _ = x(null);
  const C = x([]);
  const P = x(null);
  const k = x(null);
  const E = x(null);
  const b = x(null);
  const M = x(null);
  const y = x(null);
  const B = x([]);
  const D = x(false);
  const X = x(0);
  const oe = x([]);
  const K = x(0);

  W(() => {
    D.current = e;
  }, [e]);

  W(
    () => () => {
      if (P.current) {
        clearInterval(P.current);
      }

      if (k.current) {
        cancelAnimationFrame(k.current);
      }

      if (y.current) {
        clearInterval(y.current);
      }

      if (_.current) {
        _.current.getTracks().forEach((H) => H.stop());
      }

      if (v.current) {
        v.current.ondataavailable = null;
        v.current.onstop = null;
      }

      if (p.current && p.current.state !== "closed") {
        p.current.close();
      }

      if (E.current) {
        E.current.pause();
        E.current.onloadedmetadata = null;
        E.current.ontimeupdate = null;
        E.current.onended = null;
        E.current = null;
      }

      if (b.current) {
        URL.revokeObjectURL(b.current);
      }
    },
    []
  );

  const Y = S(() => {
    if (!T.current) {
      return;
    }
    const T_current = T.current;
    const T_current_frequencyBinCount = T_current.frequencyBinCount;
    const Q = new Uint8Array(T_current_frequencyBinCount);
    T_current.getByteFrequencyData(Q);
    let ne = 0;
    for (let ce = 0; ce < T_current_frequencyBinCount; ce++) {
      ne += Q[ce];
    }
    const ae = ne / T_current_frequencyBinCount / 255;
    const he = Math.min(1, ae * 3);
    const ve = Math.max(0.1, he);
    if (D.current) {
      const ze = performance.now() - X.current;
      const Pe = Math.floor(ze / 80);
      oe.current.push(ve);

      if (Pe > K.current) {
        const oe_current = oe.current;

        const ye =
          oe_current.length > 0
            ? oe_current.reduce((I, R) => I + R, 0) / oe_current.length
            : 0.05;

        B.current.push(ye);
        g.current += 4;

        m((I) => [...I, ye]);

        w(g.current);
        oe.current = [];
        K.current = Pe;
      }

      k.current = requestAnimationFrame(Y);
    }
  }, []);

  const j = S(() => {
    const B_current = B.current;
    return B_current.length > 0 ? [...B_current] : [];
  }, []);

  const G = S(async () => {
    try {
      if (b.current) {
        URL.revokeObjectURL(b.current);
        b.current = null;
      }

      M.current = null;

      if (E.current) {
        E.current.pause();
        E.current = null;
      }

      const H = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });
      _.current = H;
      const te = new AudioContext();
      p.current = te;
      const Q = te.createAnalyser();
      Q.fftSize = 256;
      Q.smoothingTimeConstant = 0.3;
      T.current = Q;
      te.createMediaStreamSource(H).connect(Q);
      const ae = new MediaRecorder(H, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm")
          ? "audio/webm"
          : "audio/mp4",
      });
      v.current = ae;
      C.current = [];
      B.current = [];
      X.current = performance.now();
      oe.current = [];
      K.current = 0;

      ae.ondataavailable = (ve) => {
        if (ve.data.size > 0) {
          C.current.push(ve.data);
        }
      };

      ae.start(100);
      t(true);
      r(false);
      i(0);
      l(0);
      d(0);
      c(false);
      g.current = 0;
      m([]);
      w(0);
      D.current = true;
      const he = Date.now();

      P.current = window.setInterval(() => {
        const ve = Math.floor((Date.now() - he) / 1000 /* 1e3 */);
        i(ve);
      }, 100);

      k.current = requestAnimationFrame(Y);
    } catch (H) {
      console.error("Error accessing microphone:", H);
    }
  }, [Y]);

  const re = S(
    () =>
      new Promise((H) => {
        D.current = false;
        t(false);

        if (v.current && v.current.state !== "inactive") {
          v.current.onstop = () => {
            if (C.current.length > 0) {
              const Q = v.current?.mimeType || "audio/webm";
              const ne = new Blob(C.current, { type: Q });
              const ae = URL.createObjectURL(ne);
              b.current = ae;
              M.current = ne;
              const he = new Audio(ae);
              E.current = he;

              he.onloadedmetadata = () => {
                if (isFinite(he.duration)) {
                  d(he.duration);
                } else {
                  he.currentTime = 1e101 /* 1e101 */;

                  he.ontimeupdate = () => {
                    he.ontimeupdate = null;
                    he.currentTime = 0;
                    d(he.duration);
                  };
                }
              };

              he.onended = () => {
                c(false);
                l(0);
                he.currentTime = 0;

                if (y.current) {
                  clearInterval(y.current);
                  y.current = null;
                }
              };

              r(true);
              H(ne);
            } else {
              H(null);
            }
          };

          v.current.stop();
        } else {
          H(null);
        }

        if (_.current) {
          _.current.getTracks().forEach((Q) => Q.stop());
          _.current = null;
        }

        if (P.current) {
          clearInterval(P.current);
          P.current = null;
        }

        if (k.current) {
          cancelAnimationFrame(k.current);
          k.current = null;
        }

        if (p.current && p.current.state !== "closed") {
          p.current.close();
          p.current = null;
        }

        const te = j();
        g.current = 0;
        m(te);
        w(0);
        l(0);
      }),
    [j]
  );

  const z = S(() => {
    D.current = false;

    if (v.current) {
      v.current.ondataavailable = null;
      v.current.onstop = null;
      v.current.state !== "inactive" && v.current.stop();
      v.current = null;
    }

    if (_.current) {
      _.current.getTracks().forEach((H) => H.stop());
      _.current = null;
    }

    if (P.current) {
      clearInterval(P.current);
      P.current = null;
    }

    if (k.current) {
      cancelAnimationFrame(k.current);
      k.current = null;
    }

    if (y.current) {
      clearInterval(y.current);
      y.current = null;
    }

    if (p.current && p.current.state !== "closed") {
      p.current.close();
      p.current = null;
    }

    if (E.current) {
      E.current.pause();
      E.current = null;
    }

    if (b.current) {
      URL.revokeObjectURL(b.current);
      b.current = null;
    }

    M.current = null;
    t(false);
    r(false);
    i(0);
    c(false);
    l(0);
    d(0);
    g.current = 0;
    m([]);
    w(0);
    B.current = [];
    C.current = [];
  }, []);

  const F = S(() => {
    if (y.current) {
      clearInterval(y.current);
    }

    y.current = window.setInterval(() => {
      const E_current = E.current;
      if (
        !E_current ||
        E_current.paused ||
        E_current.paused ||
        E_current.ended
      ) {
        if (y.current) {
          clearInterval(y.current);
          y.current = null;
        }

        return;
      }

      if (E_current.duration > 0) {
        l(E_current.currentTime / E_current.duration);
      }
    }, 100);
  }, []);

  const q = S(() => {
    if (!E.current || !b.current) {
      return;
    }

    if (y.current) {
      clearInterval(y.current);
      y.current = null;
    }

    const E_current = E.current;

    if (E_current.ended || E_current.currentTime >= E_current.duration) {
      E_current.currentTime = 0;
      l(0);
    }

    c(true);

    E_current.play()
      .then(() => {
        F();
      })
      .catch((te) => {
        console.error("Error playing audio:", te);
        c(false);
      });
  }, [F]);

  const U = S(() => {
    if (y.current) {
      clearInterval(y.current);
      y.current = null;
    }

    if (E.current) {
      E.current.pause();

      E.current.duration > 0 && l(E.current.currentTime / E.current.duration);
    }

    c(false);
  }, []);

  const $ = S(
    (H) => {
      if (!E.current || !o) {
        return;
      }
      const E_current = E.current;
      const Q = Math.max(0, Math.min(1, H));
      E_current.currentTime = Q * E_current.duration;
      l(Q);

      if (E_current.paused) {
        y.current && (clearInterval(y.current), (y.current = null));

        E_current.play()
          .then(() => {
            c(true);
            F();
          })
          .catch((ne) => {
            console.error("Error playing audio:", ne);
          });
      }
    },
    [o, F]
  );

  const V = S(() => M.current, []);

  return {
    isRecording: e,
    hasRecording: o,
    recordingTime: s,
    audioLevels: f,
    slideOffset: N,
    isPlaying: a,
    playbackProgress: u,
    duration: h,
    audioElementRef: E,
    startRecording: G,
    stopRecording: re,
    cancelRecording: z,
    playAudio: q,
    pauseAudio: U,
    seekTo: $,
    getAudioBlob: V,
  };
}
const fc = 0.5;
const mc = 500;
const Wr = 1000; /* 1e3 */
class pc {
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
        for (const o of t) {
          const r = this.elementToPostId.get(o.target);
          if (r) {
            if (o.isIntersecting) {
              if (!this.pendingTimers.has(r) && !this.viewedPosts.has(r)) {
                const s = window.setTimeout(() => {
                  this.pendingTimers.delete(r);

                  if (!this.viewedPosts.has(r)) {
                    this.sendView(r);
                  }
                }, mc);
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
      { threshold: fc }
    );
  }
  observe(t, o) {
    if (this.observer && !this.viewedPosts.has(t)) {
      if (!this.viewedPosts.has(t)) {
        this.elementToPostId.set(o, t);
        this.observer.observe(o);
      }
    }
  }
  unobserve(t) {
    if (!this.observer) {
      return;
    }
    const o = this.elementToPostId.get(t);
    if (o) {
      const r = this.pendingTimers.get(o);

      if (r !== undefined) {
        clearTimeout(r);
        this.pendingTimers.delete(o);
      }
    }
    this.observer.unobserve(t);
  }
  sendView(t) {
    if (!this.viewedPosts.has(t)) {
      this.viewedPosts.size >= Wr &&
        Array.from(this.viewedPosts)
          .slice(0, Wr / 2)
          .forEach((r) => this.viewedPosts.delete(r));

      this.viewedPosts.add(t);

      We.trackView(t).catch(() => {
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
const wo = new pc();
function gc(e, t) {
  W(() => {
    const t_current = t.current;
    if (!(!t_current || wo.isViewed(e))) {
      wo.observe(e, t_current);

      return () => {
        wo.unobserve(t_current);
      };
    }
  }, [e, t]);
}
function ao(e = "", t = []) {
  const [o, r] = A(e);
  const [s, i] = A(t);
  const a = x(null);

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
    text: o,
    spans: s,
    editorRef: a,
    handleChange: c,
    insertText: u,
    reset: l,
    setText: r,
    setSpans: i,
  };
}

const si = ({ size: e = 24 }) =>
  n("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      n("path", {
        d: "M5 12L12 5L19 12",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      n("path", {
        d: "M12 19V5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const ii = ({ size: e = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    children: n("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.833",
      d: "m17.867 9.208-7.659 7.659a5.003 5.003 0 1 1-7.075-7.075l7.659-7.659a3.335 3.335 0 1 1 4.716 4.717l-7.666 7.658a1.667 1.667 0 1 1-2.359-2.358l7.075-7.067",
    }),
  });

const vc = ({ size: e = 18 }) =>
  n("svg", {
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
      n("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
      n("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
    ],
  });

const wc = () =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "36",
    height: "18",
    fill: "none",
    children: [
      n("path", { fill: "currentColor", d: "M12 3V0h12v3h-4v11h-4V3h-4Z" }),
      n("path", {
        fill: "currentColor",
        d: "M12 3V0h12v3h-4v11h-4V3h-4ZM9 0 3 9V0H0v14h3l6-9v9h3V0H9Z",
      }),
      n("path", {
        fill: "currentColor",
        "fill-rule": "evenodd",
        d: "M34 11h2v7h-3v-4h-9v4h-3v-7c3 0 3-4 3-11h10v11Zm-7-8v8h4V3h-4Z",
        "clip-rule": "evenodd",
      }),
    ],
  });

const _c = ({ size: e = 18 }) =>
  n("svg", {
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
      n("polyline", { points: "16 18 22 12 16 6" }),
      n("polyline", { points: "8 6 2 12 8 18" }),
    ],
  });

const yc = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      n("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      n("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M15 9l-6 6m0-6l6 6",
      }),
    ],
  });

const Cc = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      n("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      n("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        d: "M12 16v-4m0-4h.01",
      }),
    ],
  });

const Nc = ({ size: e = 18 }) =>
  n("svg", {
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
      n("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
      n("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
      n("line", { x1: "15", y1: "4", x2: "9", y2: "20" }),
    ],
  });

const ai = ({ size: e = 18 }) =>
  n("svg", {
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
      n("path", {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
      }),
      n("path", {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
      }),
    ],
  });

const Tc = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: n("path", {
      d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
    }),
  });

const bc = ({ size: e = 18 }) =>
  n("svg", {
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
      n("path", {
        d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94",
      }),
      n("path", {
        d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19",
      }),
      n("line", { x1: "1", y1: "1", x2: "23", y2: "23" }),
      n("path", { d: "M14.12 14.12a3 3 0 1 1-4.24-4.24" }),
    ],
  });

const kc = ({ size: e = 18 }) =>
  n("svg", {
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
      n("path", { d: "M16 4H9a3 3 0 0 0-3 3c0 1.66 1.34 3 3 3h6" }),
      n("path", { d: "M8 20h7a3 3 0 0 0 3-3c0-1.66-1.34-3-3-3H4" }),
      n("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
    ],
  });

const Ec = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      n("circle", {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
      }),
      n("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M8 12l3 3 5-6",
      }),
    ],
  });

const Rc = ({ size: e = 18 }) =>
  n("svg", {
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
      n("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
      n("line", { x1: "4", y1: "21", x2: "20", y2: "21" }),
    ],
  });

const Sc = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: n("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z",
    }),
  });

const Ic = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: n("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 7 4 4 4-4",
    }),
  });

const wt = ({ size: e = 24 }) =>
  n("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      n("path", {
        d: "M18 6L6 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      n("path", {
        d: "M6 6L18 18",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const nr = ({ filled: e = false, size: t = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    fill: "none",
    viewBox: "0 0 20 20",
    children: n("path", {
      stroke: "currentColor",
      strokeWidth: 2,
      d: "M14.953 5.046c-2.73-2.728-7.173-2.728-9.903 0-2.07 2.07-2.634 5.247-1.41 7.888.136.336.232.59.232.798 0 .247-.105.553-.205.849-.195.573-.416 1.222.058 1.696.475.475 1.125.251 1.697.055.294-.1.598-.205.84-.205.215 0 .486.109.798.235a7.034 7.034 0 0 0 7.893-1.412c2.73-2.73 2.73-7.172 0-9.904Z",
      clipRule: "evenodd",
      fill: e ? "currentColor" : "none",
    }),
  });

const ci = ({ size: e = 18 }) =>
  n("svg", {
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
      n("path", {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      }),
      n("path", {
        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
      }),
    ],
  });

const li = () =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    fill: "none",
    children: n("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M20.689 10.968a2.806 2.806 0 0 0-2.244-1.108H5.555c-.887 0-1.705.404-2.244 1.107a2.808 2.808 0 0 0-.485 2.455l1.65 6.112a2.83 2.83 0 0 0 2.729 2.09h9.589a2.832 2.832 0 0 0 2.729-2.09l1.65-6.111a2.804 2.804 0 0 0-.484-2.455ZM8.436 3.875h7.125a.75.75 0 0 0 0-1.5H8.436a.75.75 0 0 0 0 1.5ZM5.682 7.253h12.634a.75.75 0 0 0 0-1.5H5.682a.75.75 0 0 0 0 1.5Z",
      "clip-rule": "evenodd",
    }),
  });

const Pc = ({ size: e = 8 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 8 8",
    children: [
      n("g", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        clipPath: "url(#af)",
        children: n("path", { d: "M1 4h6M4 1v6" }),
      }),
      n("defs", {
        children: n("clipPath", {
          id: "af",
          children: n("path", { fill: "#fff", d: "M0 0h8v8H0z" }),
        }),
      }),
    ],
  });

const xc = ({ size: e = 8 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 8 8",
    children: n("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M1 4h6",
    }),
  });

const ui = ({ size: e = 18 }) =>
  n("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: n("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.0463 8.361L19.6973 3.35C19.8203 3.118 19.8133 2.839 19.6773 2.613C19.5413 2.387 19.2973 2.25 19.0343 2.25H4.96533C4.55133 2.25 4.21533 2.586 4.21533 3V21C4.21533 21.414 4.55133 21.75 4.96533 21.75C5.37933 21.75 5.71533 21.414 5.71533 21V14.544L19.0443 14.365C19.3073 14.361 19.5483 14.221 19.6813 13.995C19.8143 13.768 19.8183 13.489 19.6943 13.258L17.0463 8.361Z",
      fill: "currentColor",
    }),
  });

const co = ({ filled: e = false, size: t = 20, className: o }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: t,
    viewBox: "0 0 20 20",
    fill: "none",
    className: o,
    children: n("path", {
      fill: e ? "currentColor" : "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.667",
      d: "M10 4.583C8.75 2.917 6.25 2.5 4.583 3.75 2.917 5 2.083 7.5 3.333 10S10 16.667 10 16.667 15.417 12.5 16.667 10s0-5-1.667-6.25-4.167-.833-5 .833Z",
    }),
  });

const Ln = ({ size: e = 24 }) =>
  n("svg", {
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
    children: n("path", { d: "M19 12a7 7 0 1 1-4.83-6.66" }),
  });

const di = ({ size: e = 24 }) =>
  n("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      n("path", {
        d: "M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      n("path", {
        d: "M16 17L21 12L16 7",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      n("path", {
        d: "M21 12H9",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const Ac = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: n("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [
        n("path", {
          d: "M9 2c-.53 0-1.04.219-1.414.608C7.21 2.998 7 3.526 7 4.077v4.846c0 .55.21 1.08.586 1.469.375.39.884.608 1.414.608.53 0 1.04-.219 1.414-.608.375-.39.586-.918.586-1.469V4.077c0-.55-.21-1.08-.586-1.469A1.963 1.963 0 0 0 9 2Z",
        }),
        n("path", {
          d: "M14 8v1.333c0 1.238-.527 2.425-1.464 3.3C11.598 13.508 10.326 14 9 14s-2.598-.492-3.536-1.367C4.527 11.758 4 10.571 4 9.333V8M9 14v2",
        }),
      ],
    }),
  });

const hi = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: n("path", {
      fill: "currentColor",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M9 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14.25 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    }),
  });

const Lc = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      n("path", {
        fill: "currentColor",
        d: "M7.17 14.288c.03.12.064.238.102.354.213.661.543 1.251.926 1.772a3.964 3.964 0 0 1-2.036-1.164.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.16.014.32.025.477.036ZM9.002 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.006.202-.011.384-.01.56-.253.05-.49.126-.706.213a3.832 3.832 0 0 0-.803-.23v.001a5.083 5.083 0 0 0-2.274.149l-.009.003-.01.003c-2.594.808-3.54 3.168-3.364 5.22-1.696-.11-3.138-.427-3.744-1.285-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Z",
      }),
      n("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M17.758 11.709a2.743 2.743 0 0 0-1.751-1.575 3.024 3.024 0 0 0-1.38-.095c-.423.069-.806.313-1.128.54-.311-.218-.704-.466-1.129-.535a3.083 3.083 0 0 0-1.378.09c-1.768.55-2.312 2.412-1.818 3.893.77 2.377 4.084 3.888 4.225 3.952a.247.247 0 0 0 .2 0c.139-.063 3.404-1.548 4.22-3.95.261-.783.239-1.607-.061-2.32Z",
        clipRule: "evenodd",
      }),
    ],
  });

const Mc = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      n("path", {
        fill: "currentColor",
        d: "M7.048 14.278c.022.184.052.368.09.55v.001a6.5 6.5 0 0 0 .466 1.403 4.044 4.044 0 0 1-1.442-.982.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328c.12.01.237.018.354.026Zm3.925 1.383c.052.062.108.12.166.179h-.001a3.253 3.253 0 0 1-.166-.179ZM9 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .088-.005.173-.006.254A6.5 6.5 0 0 0 7 13.443c-1.682-.111-3.11-.43-3.712-1.283-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm.32 10.333-.067.177c.02-.06.042-.119.065-.177l.075-.174a4.47 4.47 0 0 0-.074.174Zm4.998-2.759v.002c-.017-.003-.034-.008-.051-.01l.051.008Zm-.344-.05Z",
      }),
      n("path", {
        fill: "currentColor",
        d: "M15.065 11.348c.324 0 .587.263.587.587v1.956a.587.587 0 0 0 1.174 0V13.5a3.327 3.327 0 1 0-1.33 2.66.587.587 0 0 1 .704.94 4.5 4.5 0 1 1 1.8-3.6v.391a1.76 1.76 0 0 1-3.05 1.2 2.152 2.152 0 1 1-.386-3.46.586.586 0 0 1 .501-.283ZM12.522 13.5a.978.978 0 1 0 1.956 0 .978.978 0 0 0-1.956 0Z",
      }),
    ],
  });

const Vr = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      n("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.453.038.891.066 1.317.084.034.63.168 1.26.406 1.864-.021.07-.043.153-.065.243a3.946 3.946 0 0 1-2.19-1.193.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.602 0 5.222 3.092 5.222 5.286 0 .277-.008.517-.015.74-.005.17-.01.327-.01.477a5.988 5.988 0 0 0-4.44 1.75l-.001.002a6.01 6.01 0 0 0-1.734 3.733c-2.108-.05-4.014-.307-4.735-1.328-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm1.963 9.894a3.977 3.977 0 0 0-.004.004l.004-.004Z",
      }),
      n("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.83 11.17a4.008 4.008 0 0 0-5.659 0 4.017 4.017 0 0 0-.805 4.506c.077.192.132.337.132.456 0 .141-.06.316-.117.486-.111.327-.238.698.034.969.27.271.642.143.97.031.167-.057.34-.117.48-.117.122 0 .277.062.455.134a4.019 4.019 0 0 0 4.51-.807 4.007 4.007 0 0 0 0-5.659Z",
        clipRule: "evenodd",
      }),
    ],
  });

const Oc = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      n("path", {
        fill: "currentColor",
        d: "M6.694 14.252c.479.04.941.069 1.389.087a4.72 4.72 0 0 0 .067 2.063 3.968 3.968 0 0 1-1.988-1.152.573.573 0 0 1-.094-.67.654.654 0 0 1 .626-.328ZM9.001 1.5c3.269 0 4.905 2.546 5.18 4.657-1.042.362-1.842 1.336-1.842 2.559v1.764c-1.79.208-3.352 1.368-4.009 3.012-2.228-.033-4.286-.261-5.042-1.332-.346-.489-.38-1.091-.101-1.787.651-1.392.635-1.909.605-2.848a21.233 21.233 0 0 1-.015-.739c0-2.194 1.621-5.286 5.224-5.286Zm3.919 10.944a2.894 2.894 0 0 1 .191.007l-.191-.007Z",
      }),
      n("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M15.835 15.172c0-.01.006-.018.006-.028v-4.477a3.56 3.56 0 0 0 1.259.5c.404.077.801-.17.885-.556.083-.387-.18-.764-.586-.842-1.136-.22-1.591-1.27-1.608-1.31a.756.756 0 0 0-.838-.446.725.725 0 0 0-.614.703v4.094a2.99 2.99 0 0 0-1.42-.365c-1.61 0-2.919 1.246-2.919 2.778C10 16.754 11.31 18 12.92 18c1.61 0 2.92-1.245 2.92-2.777 0-.018-.005-.033-.005-.051Z",
        clipRule: "evenodd",
      }),
    ],
  });

const $c = ({ size: e = 18 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 18 18",
    children: [
      n("path", {
        fill: "currentColor",
        d: "M6.694 14.252C7.151 14.291 7.593 14.318 8.021 14.336 8.121 15.23 8.613 16.004 9.322 16.484 9.215 16.494 9.106 16.5 8.997 16.5H8.995C7.933 16.5 6.927 16.055 6.162 15.25 6.077 15.163 6.023 15.051 6.006 14.931 5.989 14.81 6.011 14.687 6.068 14.58 6.186 14.36 6.439 14.233 6.694 14.252ZM9.001 1.5C12.603 1.5 14.223 4.592 14.223 6.786 14.223 7.063 14.216 7.303 14.208 7.525 14.203 7.697 14.199 7.855 14.198 8.007 14.133 8.003 14.067 8 14 8 12.343 8 11 9.343 11 11 9.517 11 8.287 12.076 8.045 13.489 5.928 13.44 4.012 13.185 3.288 12.16 2.942 11.671 2.908 11.069 3.187 10.373 3.838 8.981 3.822 8.464 3.792 7.525 3.784 7.303 3.777 7.062 3.777 6.786 3.777 4.592 5.398 1.5 9.001 1.5ZM13 11C13 10.448 13.448 10 14 10 14.552 10 15 10.448 15 11V17C15 17.552 14.552 18 14 18 13.448 18 13 17.552 13 17V11Z",
      }),
      n("path", {
        fill: "currentColor",
        d: "M11 15C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H17C17.5523 13 18 13.4477 18 14C18 14.5523 17.5523 15 17 15H11Z",
      }),
    ],
  });

const or = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: n("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M19.742 13.807c-.86-1.832-.837-2.52-.798-3.773.01-.296.02-.617.02-.986C18.964 6.122 16.804 2 12 2 7.197 2 5.036 6.122 5.036 9.048c0 .368.01.69.02.986.04 1.252.062 1.941-.807 3.797-.372.928-.327 1.73.135 2.382C5.492 17.783 8.7 18 12 18s6.508-.216 7.616-1.787c.463-.653.508-1.454.125-2.406Zm-4.686 5.198c-1.848.193-3.852.192-6.13-.002a.873.873 0 0 0-.835.437.763.763 0 0 0 .125.893C9.236 21.407 10.578 22 11.994 22h.002c1.42 0 2.765-.592 3.788-1.667a.765.765 0 0 0 .122-.9c-.162-.294-.495-.458-.85-.428Z",
      clipRule: "evenodd",
    }),
  });

const Dc = ({ size: e = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    children: n("path", {
      fill: "currentColor",
      d: "M10.004 1C14.92 1 18.976 4.61 19 8.955c0 2.747-2.255 5-5.002 5h-1.797a1.477 1.477 0 0 0-1.502 1.501c0 .426.134.753.395 1.013.231.26.393.618.393 1.011 0 .848-.65 1.52-1.483 1.52C5.052 19 1 14.95 1 10s4.052-9 9.004-9ZM5.25 9a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm9-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-7-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4-1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
    }),
  });

const fi = ({ size: e = 16 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: [
      n("rect", {
        width: "4",
        height: "10",
        x: "3",
        y: "3",
        fill: "currentColor",
        rx: "1.5",
      }),
      n("rect", {
        width: "4",
        height: "10",
        x: "9",
        y: "3",
        fill: "currentColor",
        rx: "1.5",
      }),
    ],
  });

const mi = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: n("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M11.998 11a3.996 3.996 0 0 0 4-4c.084-2.213-1.702-4-4-4A3.995 3.995 0 0 0 8 7c0 2.213 1.787 4 3.998 4Zm6.94 6.878c-.3-1.04-.9-1.986-2.097-2.743C15.843 14.473 14.246 14 12.05 14c-4.292 0-6.39 1.892-6.987 3.878-.2.568.1 1.136.598 1.42C7.458 20.431 9.654 21 12.05 21c2.296 0 4.492-.662 6.288-1.703.5-.284.8-.851.6-1.419Z",
      clipRule: "evenodd",
    }),
  });

const jr = ({ size: e = 18 }) =>
  n("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: n("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.0397 9.25349L14.7397 3.95349C13.9837 3.19649 12.6657 3.19649 11.9097 3.95349L11.3187 4.54549C10.7487 5.11449 10.5767 5.96749 10.8957 6.75249C11.0497 7.12649 10.9647 7.55249 10.6797 7.83949L9.34373 9.17449C9.22773 9.28849 9.08673 9.37449 8.93473 9.42249L5.77073 10.4125C5.46773 10.5085 5.18573 10.6795 4.95673 10.9065C4.57773 11.2855 4.36973 11.7875 4.36973 12.3225C4.36973 12.8575 4.57873 13.3585 4.95673 13.7355L7.07573 15.8545L3.59573 19.3345C3.30273 19.6275 3.30273 20.1025 3.59573 20.3955C3.74173 20.5415 3.93373 20.6145 4.12573 20.6145C4.31773 20.6145 4.50973 20.5415 4.65573 20.3955L8.13573 16.9145L10.2577 19.0365C10.6467 19.4255 11.1587 19.6195 11.6707 19.6195C12.1837 19.6195 12.6957 19.4245 13.0867 19.0355C13.3147 18.8055 13.4847 18.5235 13.5797 18.2205L14.5687 15.0605C14.6187 14.9045 14.7037 14.7635 14.8167 14.6505L16.1537 13.3125C16.4387 13.0265 16.8627 12.9415 17.2737 13.1085C18.0197 13.4155 18.8747 13.2465 19.4477 12.6745L20.0397 12.0815C20.8187 11.3015 20.8187 10.0325 20.0397 9.25349Z",
      fill: "currentColor",
    }),
  });

const Bc = ({ size: e = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: n("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 20V10M12 20V4M6 20v-6",
    }),
  });

const pi = ({ size: e = 16 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: n("path", {
      fill: "currentColor",
      d: "M13 6.268c1.333.77 1.333 2.694 0 3.464l-6 3.464c-1.333.77-3-.192-3-1.732V4.536c0-1.54 1.667-2.502 3-1.732l6 3.464Z",
    }),
  });

const rr = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: n("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M5 12h14M12 5v14",
    }),
  });

const no = ({ size: e = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [
      n("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m2 9 3-3 3 3",
      }),
      n("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M13 18H7a2 2 0 0 1-2-2V6M22 15l-3 3-3-3",
      }),
      n("path", {
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M11 6h6a2 2 0 0 1 2 2v10",
      }),
    ],
  });

const gi = ({ size: e = 24 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    children: n("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "m19.5 19.5-3-3M11 4.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Z",
    }),
  });

const Uc = ({ size: e = 20, color: t = "currentColor" }) =>
  n("svg", {
    width: e,
    height: e,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      n("path", {
        d: "M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      n("path", {
        d: "M7.6 11.908c.585.76 1.445 1.234 2.4 1.234.956 0 1.816-.474 2.4-1.234M7.308 7.504v-.043m-.038-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374ZM12.692 7.504v-.043m-.005-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374Z",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });

const Fc = ({ size: e = 16 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: n("rect", {
      width: "10",
      height: "10",
      x: "3",
      y: "3",
      fill: "currentColor",
      rx: "3",
    }),
  });

const vi = ({ size: e = 18 }) =>
  n("svg", {
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
      n("polyline", { points: "3 6 5 6 21 6" }),
      n("path", {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
      }),
      n("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
      n("line", { x1: "14", y1: "11", x2: "14", y2: "17" }),
    ],
  });

const Hc = ({ size: e = 16 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 16 16",
    children: [
      n("path", {
        fill: "#0080FF",
        d: "M6.724.821a1.63 1.63 0 0 1 2.858.051l.556 1.042a1.634 1.634 0 0 0 1.672.856l1.155-.166c1.263-.181 2.238 1.108 1.742 2.303L14.253 6a1.69 1.69 0 0 0 .385 1.863l.847.815c.927.891.544 2.47-.685 2.821l-1.122.32a1.663 1.663 0 0 0-1.192 1.468l-.098 1.181c-.108 1.294-1.56 1.974-2.596 1.216l-.946-.693a1.62 1.62 0 0 0-1.872-.033l-.969.658c-1.06.721-2.49-.01-2.552-1.306l-.058-1.184a1.666 1.666 0 0 0-1.141-1.51l-1.11-.36C-.073 10.864-.402 9.272.556 8.413l.874-.783a1.69 1.69 0 0 0 .448-1.849l-.416-1.108c-.454-1.212.565-2.466 1.821-2.24l1.148.207a1.632 1.632 0 0 0 1.7-.796L6.724.82Z",
      }),
      n("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.333",
        d: "M10.667 6.667 7.11 10.222 5.334 8.444",
      }),
    ],
  });

const wi = ({ size: e = 20 }) =>
  n("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    fill: "none",
    viewBox: "0 0 20 20",
    children: [
      n("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M2 10s2.91-6 8-6 8 6 8 6-2.91 6-8 6-8-6-8-6Z",
      }),
      n("path", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      }),
    ],
  });

function sr(e) {
  const t = An()[0];
  return e.children({
    url: t.url,
    path: t.path,
    matches: qs(t.path || t.url, e.path, {}) !== false,
  });
}
const Wc = "fI4fDVi7";
const Vc = "yZbr8ne7";
const jc = "GstMeOlK";
const zc = "AuAu4fWH";
const Yc = "GpuNQx-t";
const Xc = "JGhUMn6Z";
const qc = "GNnsM0Nx";
const Zc = "VPqB7n6W";
const Gc = "TAGBLFdY";
const Kc = "hUJldwZ5";
const Jc = "AnK9iBJg";
const Qc = "ssMbXx3H";
const el = "qlwe9qHu";

const He = {
  aside: Wc,
  asideBottom: Vc,
  logoutButton: jc,
  asideBrand: zc,
  asideBrandVersion: Yc,
  nav: Xc,
  navItem: qc,
  active: Zc,
  iconWrapper: Gc,
  portalButton: Kc,
  portalActive: Jc,
  portalImage: Qc,
  badge: el,
};

const ke = {
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
};

const zr = [
  ke.LOGIN,
  ke.REGISTER,
  ke.FORGOT_PASSWORD,
  ke.RESET_PASSWORD,
  ke.VERIFY_EMAIL,
  ke.TERMS,
  ke.PRIVACY,
  ke.COOKIES,
  ke.EXTERNAL,
  ke.SUPPORT,
  ke.CHILD_SAFETY,
];

const ir = [
  ke.LOGIN,
  ke.REGISTER,
  ke.FORGOT_PASSWORD,
  ke.RESET_PASSWORD,
  ke.VERIFY_EMAIL,
  ke.ONBOARDING,
];

const tl = "QYP36fUx";
const nl = "_7afjMMjS";
const ol = "crRhcI7j";
const rl = "mPvkVXNc";
const sl = "R6rPmVO3";
const il = "_4M-jb-Yf";
const al = "BzRajAFf";
const cl = "xWaW7ynd";
const ll = "mC4WabM6";
const ul = "CdIxpdOF";
const dl = "o8sqdA1y";
const hl = "G7wJQLhH";
const fl = "Idqhap9T";
const ml = "bcyDy-AX";

const Ue = {
  overlay: tl,
  modalWrapper: nl,
  wide: ol,
  modal: rl,
  frameless: sl,
  header: il,
  title: al,
  closeButton: cl,
  externalCloseButton: ll,
  mobileOverlay: ul,
  closing: dl,
  bottomSheet: hl,
  dragHandle: fl,
  dragIndicator: ml,
};

const pl = sn(null);
const gl = 100;
const vl = 0.5;
function nt({
  children: e,
  onClose: t,
  title: o,
  showHeader: r = true,
  showCloseButton: s = true,
  frameless: i = false,
  className: a,
  contentClassName: c,
  size: u = "default",
}) {
  console.log("[Modal] RENDER", { title: o, frameless: i, isMobile: vt() });
  const l = x(null);
  const h = x(null);
  const d = x(null);
  const f = vt();
  const m = x(0);
  const N = x(false);
  const [w, g] = A(false);
  const v = x(0);
  const p = x(0);
  const T = x(0);
  W(() => {
    const j = (re) => {
      if (re.key === "Escape") {
        t();
      }
    };

    const G = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", j);

    return () => {
      document.removeEventListener("keydown", j);
      document.documentElement.style.overflow = G;
    };
  }, [t]);

  const _ = (j) => {
    d.current = j.target;
  };

  const C = (j) => {
    if (d.current === l.current && j.target === l.current) {
      if (f) {
        P();
      } else {
        t();
      }
    }

    d.current = null;
  };

  const P = S(() => {
    g(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t]);

  const k = x(false);
  const E = x(false);

  const b = (j) => {
    let G = j;

    while (G && G !== h.current) {
      const z = window.getComputedStyle(G).overflowY;
      if ((z === "auto" || z === "scroll") && G.scrollHeight > G.clientHeight) {
        return G;
      }
      G = G.parentElement;
    }

    return null;
  };

  const M = (j, G) => {
    if (h.current) {
      h.current.style.transform = j > 0 ? `translateY(${j}px)` : "";
      h.current.style.transition = G || "";
    }
  };

  const y = (j) => {
    if (l.current && j > 0) {
      l.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
        0,
        0.4 - j / 500
      )})`;
    } else if (l.current) {
      l.current.style.backgroundColor = "";
    }
  };

  const B = (j) => {
    if (!f) {
      return;
    }
    v.current = j.touches[0].clientY;
    p.current = Date.now();
    T.current = j.touches[0].clientY;
    const j_target = j.target;
    if (j_target.closest(`.${Ue.dragHandle}`)) {
      k.current = true;
      E.current = true;
      N.current = true;

      if (h.current) {
        h.current.style.transition = "none";
      }

      return;
    }
    k.current = false;

    if (
      j_target.closest(
        'button, a, input, textarea, select, video, [role="button"]'
      )
    ) {
      E.current = false;
      return;
    }

    if (j_target.tagName === "CANVAS" || j_target.closest("canvas")) {
      E.current = false;
      return;
    }
    const q = b(j_target);
    E.current = !q || q.scrollTop === 0;
  };

  const D = (j) => {
    if (!f) {
      return;
    }
    const G = j.touches[0].clientY;
    const re = G - v.current;
    T.current = G;

    if (k.current) {
      if (re > 0) {
        m.current = re;
        M(re);
        y(re);
        j.preventDefault();
      }

      return;
    }

    if (E.current) {
      if (N.current && m.current > 0) {
        if (re > 0) {
          m.current = re;
          M(re);
          y(re);
          j.preventDefault();
        } else {
          m.current = 0;
          N.current = false;
          M(0);
          y(0);
        }

        return;
      }

      if (re > 0) {
        N.current ||
          ((N.current = true),
          h.current && (h.current.style.transition = "none"));
        m.current = re;
        M(re);
        y(re);
        j.preventDefault();
      }
    }
  };

  const X = () => {
    if (!f) {
      return;
    }
    const j = T.current - v.current;
    const G = Date.now() - p.current;
    const re = j / G;

    if (N.current && (j > gl || re > vl)) {
      P();
    } else if (m.current > 0) {
      M(0, "transform 0.2s ease-out");
      y(0);
      m.current = 0;
    }

    N.current = false;
    k.current = false;
    E.current = false;
  };

  const K = (() => {
    if (f && w) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const Y = { onClose: t, isMobile: f, isClosing: w, handleClose: P };
  return n(pl.Provider, {
    value: Y,
    children: n("div", {
      ref: l,
      className: `${Ue.overlay} ${f ? Ue.mobileOverlay : ""} ${
        w ? Ue.closing : ""
      }`,
      onMouseDown: _,
      onMouseUp: C,
      children: n("div", {
        ref: h,
        className: `${Ue.modalWrapper} ${u === "wide" ? Ue.wide : ""} ${
          f ? Ue.bottomSheet : ""
        }`,
        style: K,
        onTouchStart: B,
        onTouchMove: D,
        onTouchEnd: X,
        children: [
          i &&
            !f &&
            n("button", {
              type: "button",
              className: Ue.externalCloseButton,
              onClick: (j) => {
                j.stopPropagation();
                t();
              },
              children: n(wt, { size: 24 }),
            }),
          f &&
            n("div", {
              className: Ue.dragHandle,
              children: n("div", { className: Ue.dragIndicator }),
            }),
          n("div", {
            className: `${Ue.modal} ${i ? Ue.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !i &&
                r &&
                !f &&
                n("div", {
                  className: Ue.header,
                  children: [
                    n("span", { className: Ue.title, children: o }),
                    s &&
                      n("button", {
                        type: "button",
                        className: Ue.closeButton,
                        onClick: (j) => {
                          j.stopPropagation();
                          t();
                        },
                        children: n(wt, { size: 16 }),
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
const wl = "V50n6WS3";
const _l = "op1vWsdX";
const yl = "_6WE1-ZQb";
const Cl = "wQFhiSkQ";
const Nl = "Lsbi80je";
const Tl = "bMJRT07h";
const bl = "d6UOyTyY";
const kl = "eSQfgRTM";
const El = "q1AtksiZ";
const Rl = "jHe-Wv1B";
const Sl = "vQ8h8naJ";

const st = {
  changelog: wl,
  entry: _l,
  entryHeader: yl,
  version: Cl,
  date: Nl,
  changes: Tl,
  change: bl,
  singleChange: kl,
  note: El,
  loading: Rl,
  divider: Sl,
};

function Il({ isOpen: e, onClose: t }) {
  const [o, r] = A([]);
  const [s, i] = A(true);

  W(() => {
    if (!e) {
      return;
    }
    let a = false;

    Xa.getChangelog()
      .then((c) => {
        if (!a) {
          r(c);
          i(false);
        }
      })
      .catch(() => {
        if (!a) {
          i(false);
        }
      });

    return () => {
      a = true;
    };
  }, [e]);

  return e
    ? Rt(
        n(nt, {
          onClose: t,
          title: "Что нового",
          size: "default",
          children: n("div", {
            className: st.changelog,
            children: s
              ? n("div", { className: st.loading, children: "Загрузка..." })
              : o.map((a, c) =>
                  n(
                    "div",
                    {
                      className: st.entry,
                      children: [
                        n("div", {
                          className: st.entryHeader,
                          children: [
                            n("span", {
                              className: st.version,
                              children: ["v", a.version],
                            }),
                            n("span", {
                              className: st.date,
                              children: a.date,
                            }),
                          ],
                        }),
                        a.changes.length === 1 && !a.changes[0].startsWith("•")
                          ? n("p", {
                              className: st.singleChange,
                              children: a.changes[0],
                            })
                          : n("ul", {
                              className: st.changes,
                              children: a.changes.map((u, l) =>
                                n(
                                  "li",
                                  { className: st.change, children: u },
                                  l
                                )
                              ),
                            }),
                        a.note &&
                          n("p", { className: st.note, children: a.note }),
                        c < o.length - 1 && n("div", { className: st.divider }),
                      ],
                    },
                    a.version
                  )
                ),
          }),
        }),
        document.body
      )
    : null;
}

const _i = ({
  href: e,
  icon: t,
  children: o,
  badge: r,
  onActiveClick: s,
  isActive: i = false,
}) =>
  n(sr, {
    path: e,
    children: ({ matches: a }) => {
      const c = a || i;
      return n("a", {
        href: e,
        className: `${He.navItem} ${c ? He.active : ""}`,
        onClick: (u) => {
          if (c && s) {
            u.preventDefault();
            s();
          }
        },
        children: [
          n("span", {
            className: He.iconWrapper,
            children: [
              t,
              r !== undefined &&
                r > 0 &&
                n("span", {
                  className: He.badge,
                  children: r > 99 ? "99+" : r,
                }),
            ],
          }),
          n("span", { children: o }),
        ],
      });
    },
  });

const _o = (e) => n(_i, { ...e });

const Pl = () => {
  const [e] = An();

  const t = me((p) => p.fetchFeed);

  const o = me((p) => p.isRefreshing);

  const r = Ce((p) => p.logout);

  const s = ti();
  const i = er();
  const a = ni();
  const { initialize: c, disconnectSSE: u } = ln();
  const [l, h] = A(false);
  const d = oi();

  const f = tr((p) => p.fetchPortal);

  const m = i?.username ? `/@${i.username}` : "/profile";

  W(() => {
    if (s) {
      c();
    }

    return () => {
      u();
    };
  }, [s, c, u]);

  W(() => {
    f();
  }, [f]);

  const N = S(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    t(true);
  }, [t]);

  const w = S(() => {
    r();
  }, [r]);

  const g = Ne(() => {
    const p = e.url || "/";
    return ir.some((T) => p.startsWith(T));
  }, [e.url]);

  const v = Ne(() => {
    const p = e.url || "/";
    return i?.username
      ? p === `/@${i.username}` || p.startsWith(`/@${i.username}/`)
      : false;
  }, [e.url, i?.username]);

  return (
    g ||
    n("aside", {
      className: He.aside,
      children: [
        n("div", {
          className: He.asideTop,
          children: [
            n("div", {
              className: He.asideBrand,
              children: [
                n(wc, {}),
                n("button", {
                  className: He.asideBrandVersion,
                  onClick: () => h(true),
                  title: "Что нового",
                  children: "v1.1 beta",
                }),
              ],
            }),
            n("nav", {
              className: He.nav,
              children: [
                n(_o, {
                  href: "/",
                  icon: o ? n(Ln, {}) : n(li, {}),
                  onActiveClick: N,
                  children: "Лента",
                }),
                n(_o, {
                  href: "/search",
                  icon: n(gi, {}),
                  children: "Поиск",
                }),
                n(sr, {
                  path: "/event",
                  children: ({ matches: p }) =>
                    n("a", {
                      href: d.active && d.url ? d.url : "/event",
                      target: d.active && d.url ? "_blank" : undefined,
                      rel:
                        d.active && d.url ? "noopener noreferrer" : undefined,
                      className: `${He.portalButton} ${
                        d.active ? He.portalActive : ""
                      } ${p ? He.active : ""}`,
                      title: "Ивент",
                      children: [
                        n("img", {
                          src: d.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: He.portalImage,
                        }),
                        n("span", { children: "Ивент" }),
                      ],
                    }),
                }),
                n(_o, {
                  href: "/notifications",
                  icon: n(or, {}),
                  badge: a,
                  children: "Уведомления",
                }),
                n(_i, {
                  href: m,
                  icon: n(mi, {}),
                  isActive: v,
                  children: "Профиль",
                }),
              ],
            }),
          ],
        }),
        n("div", {
          className: He.asideBottom,
          children: n("button", {
            className: He.logoutButton,
            onClick: w,
            children: [n(di, { size: 20 }), n("span", { children: "Выйти" })],
          }),
        }),
        n(Il, { isOpen: l, onClose: () => h(false) }),
      ],
    })
  );
};

const xl = "z8EyAYBL";
const Al = "Y3JzbYs0";
const Ll = "XG8iIx1m";
const Ml = "lqZNoMkv";
const Ol = "RmseIK13";

const hn = {
  sidebar: xl,
  sidebarContent: Al,
  sidebarBottom: Ll,
  legalLinks: Ml,
  copyright: Ol,
};

const $l = () => {
  const [e] = An();
  return (
    Ne(() => {
      const o = e.url || "/";
      return ir.some((r) => o.startsWith(r));
    }, [e.url]) ||
    n("aside", {
      className: hn.sidebar,
      children: [
        n("div", { className: hn.sidebarContent }),
        n("div", {
          className: hn.sidebarBottom,
          children: [
            n("ul", {
              className: hn.legalLinks,
              children: [
                n("li", {
                  children: n("a", {
                    href: "/careers",
                    children: "Вакансии",
                  }),
                }),
                n("li", {
                  children: n("a", {
                    href: "https://статус.итд.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Статус серверов",
                  }),
                }),
                n("li", {
                  children: n("a", {
                    href: "/terms",
                    children: "Условия использования",
                  }),
                }),
                n("li", {
                  children: n("a", {
                    href: "/privacy",
                    children: "Конфиденциальность",
                  }),
                }),
                n("li", {
                  children: n("a", {
                    href: "/cookies",
                    children: "Политика Cookies",
                  }),
                }),
              ],
            }),
            n("span", {
              className: hn.copyright,
              children: "© 2026 ООО «ИТД»",
            }),
          ],
        }),
      ],
    })
  );
};

const Dl = "s6RgBrB6";
const Bl = "JOIWgkha";
const Ul = "_3zENkokD";
const Fl = "_6Pioebei";
const Hl = "Vxc0MjRf";
const Wl = "iQtUV16G";
const Vl = "ZtAKIgsJ";
const jl = "_1tR-HPhB";
const zl = "Yi-2DSIb";
const Yl = "pBba2HCe";
const Xl = "ozGvh6zv";
const ql = "_4pOcvhRL";

const je = {
  mobileNavigationWrapper: Dl,
  navigation: Bl,
  indicator: Ul,
  indicatorHidden: Fl,
  navItem: Hl,
  label: Wl,
  active: Vl,
  createButton: jl,
  iconWrapper: zl,
  portalImage: Yl,
  portalImageActive: Xl,
  badge: ql,
};

const yi = sn(null);
let Zl = 0;
function Gl({ children: e }) {
  const [t, o] = A([]);

  const r = S((a) => {
    const c = `modal-${++Zl}`;

    o((u) => [...u, { id: c, component: a }]);

    return c;
  }, []);

  const s = S((a) => {
    o((c) => (a ? c.filter((u) => u.id !== a) : c.slice(0, -1)));
  }, []);

  const i = S(() => {
    o([]);
  }, []);

  W(() => {
    let a = window.location.pathname + window.location.search;
    const c = () => {
      const h = window.location.pathname + window.location.search;

      if (h !== a) {
        a = h;
        o([]);
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

  return n(yi.Provider, {
    value: { openModal: r, closeModal: s, closeAllModals: i },
    children: [
      e,
      t.length > 0 &&
        Rt(
          n(Te, {
            children: t.map(({ id: a, component: c }) =>
              n("div", { children: c }, a)
            ),
          }),
          document.body
        ),
    ],
  });
}
function qt() {
  const e = so(yi);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const Kl = "eVYjVkOA";
const Jl = "VH5uACo-";
const Ql = "bTnQQZzL";
const eu = "J-wdczzJ";
const tu = "-aJk1548";
const nu = "GJ-316Mz";
const Yr = { spinner: Kl, spin: Jl, xs: Ql, sm: eu, md: tu, lg: nu };
function ut({ size: e = "md", className: t }) {
  const o = [Yr.spinner, Yr[e], t].filter(Boolean).join(" ");
  return n("div", { className: o, children: n(Ln, {}) });
}
const ou = "WsNIl9yN";
const ru = "s-rIVNft";
const su = "QJCDyxuF";
const iu = "idj8YT1-";
const au = "PYBTadOt";
const cu = "_0RWSXOse";
const lu = "X3An-GSw";
const uu = "BCtviEiQ";
const du = "kZamU7XS";
const hu = "FVEEba1t";
const fu = "_2NIyBgLE";
const mu = "IRuH4aXh";

const Jt = {
  button: ou,
  primary: ru,
  secondary: su,
  ghost: iu,
  accent: au,
  danger: cu,
  sm: lu,
  md: uu,
  lg: du,
  fullWidth: hu,
  iconOnly: fu,
  loading: mu,
};

function Oe({
  children: e,
  variant: t = "primary",
  size: o = "md",
  fullWidth: r = false,
  iconOnly: s = false,
  loading: i = false,
  className: a,
  type: c = "button",
  disabled: u,
  ...l
}) {
  const h = [
    Jt.button,
    Jt[t],
    Jt[o],
    r && Jt.fullWidth,
    s && Jt.iconOnly,
    i && Jt.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return n("button", {
    type: c,
    className: h,
    disabled: u || i,
    ...l,
    children: i ? n(ut, { size: "sm" }) : e,
  });
}
const pu = "THCvAwre";
const gu = "sRlzWhtw";
const vu = "pitt3a-W";
const wu = "tBAzXrnN";
const _u = "ZpD0zMWZ";
const yu = "_4WT1OTu3";
const Cu = "MILRHLTo";
const Nu = "nCy8Y3ZB";
const Tu = "Ib0lgBwH";
const bu = "V-L-u7tm";
const ku = "JALjGN2Z";

const tt = {
  picker: pu,
  searchFloating: gu,
  searchInput: vu,
  skinTonePopup: wu,
  skinVariantButton: _u,
  skinVariantImage: yu,
  content: Cu,
  categoryTitle: Nu,
  emojiGrid: Tu,
  emojiButton: bu,
  noResults: ku,
};

const Eu = [
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

const Ru = ["", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"];
const Ci = "emoji-picker-recent";
const eo = 32;

const Su = (e) => {
  try {
    return String.fromCodePoint(...e.split("-").map((t) => parseInt(t, 16)));
  } catch {
    return "";
  }
};

const ar = (e) =>
  `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/${e.toLowerCase()}.png`;

const Xr = () => {
  try {
    const e = localStorage.getItem(Ci);
    return e ? JSON.parse(e) : [];
  } catch {
    return [];
  }
};

const Iu = (e) => {
  try {
    localStorage.setItem(Ci, JSON.stringify(e.slice(0, eo)));
  } catch {}
};

const Pu = (e) => {
  const t = [];
  const o = {};
  for (const [r, s] of Object.entries(e)) {
    o[r] = s.map((i) => {
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
  return { all: t, byCategory: o };
};

let Hn = null;

const xu = () => {
  const [e, t] = A(Hn);
  const [o, r] = A(!Hn);

  W(() => {
    if (Hn) {
      return;
    }
    (async () => {
      try {
        const i = await Re(() => import("./emoji-data-DrtcpqC0.js"), []);

        const a = Pu(i.default);
        Hn = a;
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
      isLoading: o,
    }),
    [e, o]
  );
};

const Au = (e) => {
  const [t, o] = A([]);
  const r = x([]);
  W(() => {
    o(Xr());
  }, []);

  const s = Ne(
    () =>
      t
        .slice(0, eo)
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
    const c = Xr();
    const l = [...r.current];
    for (const h of c) {
      if (!l.includes(h)) {
        l.push(h);
      }
    }
    Iu(l.slice(0, eo));
    o(l.slice(0, eo));
    r.current = [];
  }, []);

  return { recentEmojis: s, addRecentEmoji: i, flushRecentEmojis: a };
};

const Lu = ({ emoji: e, onClick: t }) =>
  n("button", {
    className: tt.emojiButton,
    onClick: t,
    children: n("img", {
      src: ar(e.unified),
      alt: e.short_name,
      loading: "lazy",
    }),
  });

const Ni = (e) => {
  const t = [e.unified];
  if (e.skin_variations) {
    for (const o of Ru.slice(1)) {
      const r = e.skin_variations[o];

      if (r) {
        t.push(r);
      }
    }
  }
  return t;
};

const Mu = ({ popup: e, onSelect: t, onClose: o }) => {
  const r = x(null);
  const s = Ni(e.emoji);

  W(() => {
    const i = (a) => {
      if (r.current && !r.current.contains(a.target)) {
        o();
      }
    };
    document.addEventListener("mousedown", i);

    return () => document.removeEventListener("mousedown", i);
  }, [o]);

  return n("div", {
    ref: r,
    className: tt.skinTonePopup,
    style: { left: e.x, top: e.y },
    children: s.map((i) =>
      n(
        "button",
        {
          className: tt.skinVariantButton,
          onClick: () => t(i, e.emoji.short_name),
          children: n("img", {
            src: ar(i),
            alt: "",
            className: tt.skinVariantImage,
          }),
        },
        i
      )
    ),
  });
};

const Ti = ({ emojis: e, onEmojiClick: t }) =>
  n("div", {
    className: tt.emojiGrid,
    children: e.map((o) =>
      n(Lu, { emoji: o, onClick: (r) => t(o, r) }, o.unified)
    ),
  });

const Ou = ({ name: e, emojis: t, onEmojiClick: o, sectionRef: r }) =>
  n("div", {
    ref: r,
    className: tt.categorySection,
    children: [
      n("div", { className: tt.categoryTitle, children: e }),
      n(Ti, { emojis: t, onEmojiClick: o }),
    ],
  });

const $u = ({ value: e, onChange: t, placeholder: o = "Search emojis..." }) =>
  n("div", {
    className: tt.searchFloating,
    children: n("input", {
      type: "text",
      className: tt.searchInput,
      placeholder: o,
      value: e,
      onInput: (r) => t(r.target.value),
    }),
  });

const Du = ({
  onEmojiSelect: e,
  onClose: t,
  width: o = 280,
  height: r = 380,
  excludeCategories: s = [],
}) => {
  const [i, a] = A("apple");
  const [c, u] = A("");
  const [l, h] = A(null);
  const d = x(null);
  const f = x(null);
  const m = x({});
  const { all: N, byCategory: w, isLoading: g } = xu();
  const { recentEmojis: v, addRecentEmoji: p, flushRecentEmojis: T } = Au(N);
  W(
    () => () => {
      T();
      t?.();
    },
    [T, t]
  );

  const _ = Ne(() => {
    if (!c.trim()) {
      return null;
    }
    const b = c.toLowerCase();
    return N.filter(
      (M) =>
        !s.includes(M.category) &&
        M.short_names.some((y) => y.toLowerCase().includes(b))
    ).slice(0, 100);
  }, [c, N, s]);

  const C = Ne(() => {
    if (i === "apple") {
      const b = [];

      if (v.length > 0) {
        b.push({ id: "recent", name: "Recent", emojis: v });
      }

      for (const M of Eu) {
        if (s.includes(M)) {
          continue;
        }
        const y = w[M] || [];

        if (y.length !== 0) {
          b.push({ id: M, name: M.split(" & ")[0], emojis: y });
        }
      }
      return b;
    }
    return [];
  }, [i, v, w, s]);

  const P = S((b, M) => {
    if (Ni(b).length > 1) {
      const M_currentTarget = M.currentTarget;
      const D = f.current?.getBoundingClientRect();
      const X = M_currentTarget.getBoundingClientRect();
      if (D) {
        const oe = X.left - D.left + X.width / 2;
        const K = X.top - D.top - 60;
        h({ emoji: b, x: oe, y: K });
      }
      return;
    }
    k(b.unified, b.short_name);
  }, []);

  const k = S(
    (b, M) => {
      p(b);
      h(null);
      e({ unified: b, emoji: Su(b), name: M, imageUrl: ar(b) });
    },
    [e, p]
  );

  const E = () =>
    g
      ? n(ut, {})
      : c && _
      ? _.length === 0
        ? n("div", { className: tt.noResults, children: "No emojis found" })
        : n(Ti, { emojis: _, onEmojiClick: P })
      : n(Te, {
          children: C.map((b) =>
            n(
              Ou,
              {
                name: b.name,
                emojis: b.emojis,
                onEmojiClick: P,
                sectionRef: (M) => {
                  m.current[b.id] = M;
                },
              },
              b.id
            )
          ),
        });

  return n("div", {
    className: tt.picker,
    style: { width: o, height: r },
    ref: f,
    children: [
      l && n(Mu, { popup: l, onSelect: k, onClose: () => h(null) }),
      n("div", { className: tt.content, ref: d, children: E() }),
      n($u, { value: c, onChange: u }),
    ],
  });
};

const Bu = "-cIO9SLG";
const Uu = "JNwvD1Vo";
const Fu = "IHofJbwy";
const yo = { wrapper: Bu, popup: Uu, closing: Fu };
const qr = 280;
const Zr = 380;
const Co = 8;
const Hu = 100;
const Gr = 150;
const Wu = 150;
function cr({ onEmojiSelect: e, buttonClassName: t, size: o = 20 }) {
  const [r, s] = A(false);
  const [i, a] = A(false);
  const [c, u] = A(null);
  const l = x(null);
  const h = x(null);
  const d = x(null);
  const f = x(null);
  const m = x(null);
  const N = x(null);

  const w = S(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }
    const E = l_current.getBoundingClientRect();

    const { innerHeight, innerWidth } = window;

    const y = innerHeight - E.bottom;
    const B = innerWidth - E.left;
    const E_right = E.right;
    const X = y >= Zr + Co ? "bottom" : "top";
    const oe = B >= qr || B > E_right ? "left" : "right";
    let K;
    let Y;

    if (X === "top") {
      K = E.top - Zr - Co;
    } else {
      K = E.bottom + Co;
    }

    if (oe === "left") {
      Y = E.left;
    } else {
      Y = E.right - qr;
    }

    u({
      top: K,
      left: Y,
      transformOrigin: `${X === "top" ? "bottom" : "top"} ${
        oe === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const g = S(() => {
    if (!r && !i) {
      if (!i) {
        w();
        s(true);
      }
    }
  }, [r, i, w]);

  const v = S(() => {
    if (r && !i) {
      if (!i) {
        a(true);

        N.current = window.setTimeout(() => {
          s(false);
          a(false);
        }, Wu);
      }
    }
  }, [r, i]);

  const p = () => {
    if (m.current) {
      clearTimeout(m.current);
      m.current = null;
    }

    if (N.current) {
      clearTimeout(N.current);
      N.current = null;
    }

    if (i) {
      a(false);
    }

    if (!r) {
      f.current = window.setTimeout(() => {
        g();
      }, Hu);
    }
  };

  const T = () => {
    if (f.current) {
      clearTimeout(f.current);
      f.current = null;
    }

    m.current = window.setTimeout(() => {
      v();
    }, Gr);
  };

  W(
    () => () => {
      if (f.current) {
        clearTimeout(f.current);
      }

      if (m.current) {
        clearTimeout(m.current);
      }

      if (N.current) {
        clearTimeout(N.current);
      }
    },
    []
  );

  const _ = () => {
    if (m.current) {
      clearTimeout(m.current);
      m.current = null;
    }

    if (N.current) {
      clearTimeout(N.current);
      N.current = null;
    }

    if (i) {
      a(false);
    }
  };

  const C = () => {
    m.current = window.setTimeout(() => {
      v();
    }, Gr);
  };

  const P = (k) => {
    k.preventDefault();
  };

  return n("div", {
    ref: h,
    className: yo.wrapper,
    onMouseEnter: p,
    onMouseLeave: T,
    onMouseDown: P,
    children: [
      n("button", {
        ref: l,
        className: t,
        title: "Добавить эмоджи",
        children: n(Uc, { size: o }),
      }),
      r &&
        c &&
        Rt(
          n("div", {
            ref: d,
            className: `${yo.popup} ${i ? yo.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: _,
            onMouseLeave: C,
            onMouseDown: P,
            children: n(Du, { onEmojiSelect: e }),
          }),
          document.body
        ),
    ],
  });
}
const Vu = "ea0BOksL";
const ju = "_3x0lVqeJ";
const zu = "k1PR-0WB";
const Yu = "wRV5rijq";
const Xu = "GlXz5E-N";
const qu = "IHhDMDG-";
const Zu = "elFWsy5U";
const Gu = "eapcoUbX";
const Ku = "_6XVFDO74";
const Ju = "_8u1ESpvI";
const Qu = "fP-JtUai";
const ed = "G1-kgIh2";
const td = "BbahIL--";
const nd = "pxz5YAHz";
const od = "GdwJM8jd";
const rd = "Iy4DuTTO";
const sd = "cVrkG6OP";
const id = "K2WqA9qX";
const ad = "F9c4GceQ";

const de = {
  modalContent: Vu,
  container: ju,
  toolbar: zu,
  toolGroup: Yu,
  separator: Xu,
  spacer: qu,
  toolButton: Zu,
  active: Gu,
  sizeButton: Ku,
  sizePreview: Ju,
  colorPalette: Qu,
  colorButton: ed,
  colorPicker: td,
  zoomLabel: nd,
  canvasContainer: od,
  viewport: rd,
  actions: sd,
  cancelButton: id,
  saveButton: ad,
};

const cd = {
  post: { width: 800, height: 500 },
  banner: { width: 1100, height: 380 },
};

const ld = [
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

const ud = [2, 4, 8, 12, 20, 32];
const Bt = 0.25;
const fn = 4;
const Qt = 0.15;
function dd({
  isOpen: e,
  onClose: t,
  onSave: o,
  mode: r = "post",
  saveButtonText: s,
}) {
  const [i, a] = A(false);
  const c = x(null);
  const u = x(null);
  const l = x(null);
  const h = x(null);
  const d = x(1);
  const [f, m] = A("brush");
  const [N, w] = A("#000000");
  const [g, v] = A(4);
  const p = x(false);
  const [T, _] = A([]);
  const [C, P] = A(-1);
  const [k, E] = A(1);
  const [b, M] = A({ x: 0, y: 0 });
  const y = x(1);
  const B = x({ x: 0, y: 0 });
  const D = x(false);
  const X = x({ x: 0, y: 0 });
  const oe = x(null);
  const K = x(null);
  const { width: Y, height: j } = cd[r];

  const G = S((I, R) => {
    y.current = I;
    B.current = R;
    E(I);
    M(R);
  }, []);

  const re = S((I, R, L, ee, se) => {
    const ie = (ee - L.x) / I;
    const ge = (se - L.y) / I;
    return { x: ee - ie * R, y: se - ge * R };
  }, []);

  const z = S(() => {
    const c_current = c.current;
    const l_current = l.current;
    if (!c_current || !l_current) {
      return;
    }
    const L = c_current.getContext("2d");
    if (!L) {
      return;
    }
    const d_current = d.current;
    const se = c_current.width / d_current;
    const ie = c_current.height / d_current;
    const y_current = y.current;
    const B_current = B.current;
    L.save();
    L.setTransform(d_current, 0, 0, d_current, 0, 0);
    L.clearRect(0, 0, se, ie);
    L.translate(B_current.x, B_current.y);
    L.scale(y_current, y_current);
    L.shadowColor = "rgba(0, 0, 0, 0.15)";
    L.shadowBlur = 20 / y_current;
    L.shadowOffsetX = 0;
    L.shadowOffsetY = 4 / y_current;
    L.fillStyle = "#FFFFFF";
    L.fillRect(0, 0, Y, j);
    L.shadowColor = "transparent";
    L.shadowBlur = 0;
    L.shadowOffsetY = 0;
    L.imageSmoothingEnabled = y_current < 2;
    L.drawImage(l_current, 0, 0, Y, j);
    L.imageSmoothingEnabled = true;
    const K_current = K.current;
    if (K_current) {
      L.strokeStyle = K_current.color;
      L.lineWidth = K_current.lineWidth;
      L.lineCap = "round";
      L.lineJoin = "round";
      L.beginPath();

      if (K_current.tool === "line") {
        L.moveTo(K_current.start.x, K_current.start.y);
        L.lineTo(K_current.current.x, K_current.current.y);
      } else if (K_current.tool === "rectangle") {
        L.rect(
          K_current.start.x,
          K_current.start.y,
          K_current.current.x - K_current.start.x,
          K_current.current.y - K_current.start.y
        );
      } else if (K_current.tool === "circle") {
        const Zt = Math.hypot(
          K_current.current.x - K_current.start.x,
          K_current.current.y - K_current.start.y
        );
        L.arc(K_current.start.x, K_current.start.y, Zt, 0, Math.PI * 2);
      }

      L.stroke();
    }
    L.restore();
  }, [Y, j]);

  const F = x(z);
  F.current = z;
  const U = S(
    (I = Infinity) => {
      const u_current = u.current;
      if (!u_current) {
        return;
      }
      const L = u_current.getBoundingClientRect();
      const ee = 32;
      const se = (L.width - ee * 2) / Y;
      const ie = (L.height - ee * 2) / j;
      const ge = Math.max(Bt, Math.min(se, ie, I));
      G(ge, { x: (L.width - Y * ge) / 2, y: (L.height - j * ge) / 2 });
    },
    [Y, j, G]
  );

  W(() => {
    if (!e || !c.current || !c.current || !u.current) {
      return;
    }
    const c_current = c.current;
    const u_current = u.current;
    const L = window.devicePixelRatio || 1;
    d.current = L;
    const ee = u_current.getBoundingClientRect();
    c_current.width = ee.width * L;
    c_current.height = ee.height * L;
    const se = document.createElement("canvas");
    se.width = Y * L;
    se.height = j * L;
    const ie = se.getContext("2d", { willReadFrequently: true });
    if (!ie) {
      return;
    }
    ie.scale(L, L);
    ie.fillStyle = "#FFFFFF";
    ie.fillRect(0, 0, Y, j);
    l.current = se;
    h.current = ie;
    const ge = ie.getImageData(0, 0, se.width, se.height);
    _([ge]);
    P(0);
    let xe = true;
    const fe = new ResizeObserver((On) => {
      for (const $n of On) {
        const { width: Gt, height: Mt } = $n.contentRect;
        if (!(Gt === 0 || Mt === 0)) {
          c_current.width = Gt * d.current;
          c_current.height = Mt * d.current;

          if (xe) {
            const ho = (Gt - 64) / Y;
            const fo = (Mt - 64) / j;
            const Kt = Math.max(Bt, Math.min(ho, fo));
            G(Kt, { x: (Gt - Y * Kt) / 2, y: (Mt - j * Kt) / 2 });
          }

          F.current();
        }
      }
    });
    fe.observe(u_current);
    const Zt = setTimeout(() => {
      xe = false;
    }, 500);
    return () => {
      clearTimeout(Zt);
      fe.disconnect();
      l.current = null;
      h.current = null;
    };
  }, [e, Y, j]);

  W(() => {
    z();
  }, [k, b, z]);

  const $ = S(() => {
    const h_current = h.current;
    const l_current = l.current;
    if (!h_current || !l_current) {
      return;
    }
    const L = h_current.getImageData(0, 0, l_current.width, l_current.height);

    _((ee) => {
      const se = ee.slice(0, C + 1);
      se.push(L);

      if (se.length > 50) {
        se.shift();
      }

      return se;
    });

    P((ee) => Math.min(ee + 1, 49));
  }, [C]);

  const V = S(() => {
    if (C <= 0) {
      return;
    }
    const h_current = h.current;
    if (!h_current) {
      return;
    }
    const R = C - 1;
    const T_R = T[R];

    if (T_R) {
      h_current.putImageData(T_R, 0, 0);
      P(R);
      F.current();
    }
  }, [C, T]);

  const H = S(() => {
    if (C >= T.length - 1) {
      return;
    }
    const h_current = h.current;
    if (!h_current) {
      return;
    }
    const R = C + 1;
    const T_R = T[R];

    if (T_R) {
      h_current.putImageData(T_R, 0, 0);
      P(R);
      F.current();
    }
  }, [C, T]);

  const te = S((I) => {
    const c_current = c.current;
    if (!c_current) {
      return { x: 0, y: 0 };
    }
    const L = c_current.getBoundingClientRect();
    let ee;
    let se;

    if ("touches" in I) {
      ee = I.touches[0].clientX;
      se = I.touches[0].clientY;
    } else {
      ee = I.clientX;
      se = I.clientY;
    }

    return {
      x: (ee - L.left - B.current.x) / y.current,
      y: (se - L.top - B.current.y) / y.current,
    };
  }, []);

  const Q = S(
    (I) => {
      if (
        ("button" in I && I.button !== 0) ||
        ("touches" in I && I.touches.length > 1)
      ) {
        return;
      }
      I.preventDefault();
      const h_current = h.current;
      if (!h_current) {
        return;
      }
      const L = te(I);
      p.current = true;

      if (f === "brush" || f === "eraser") {
        h_current.beginPath();
        h_current.moveTo(L.x, L.y);
        h_current.lineCap = "round";
        h_current.lineJoin = "round";
        h_current.lineWidth = g;
        h_current.strokeStyle = f === "eraser" ? "#FFFFFF" : N;
      } else {
        K.current = {
          start: L,
          current: L,
          tool: f,
          color: N,
          lineWidth: g,
        };
      }
    },
    [f, N, g, te]
  );

  const ne = S(
    (I) => {
      if (!p.current || ("touches" in I && I.touches.length > 1)) {
        return;
      }
      I.preventDefault();
      const R = te(I);
      if (f === "brush" || f === "eraser") {
        const h_current = h.current;
        if (!h_current) {
          return;
        }
        h_current.lineTo(R.x, R.y);
        h_current.stroke();
        F.current();
      } else {
        if (K.current) {
          K.current = { ...K.current, current: R };
          F.current();
        }
      }
    },
    [f, te]
  );

  const ae = S(() => {
    if (!p.current) {
      return;
    }
    p.current = false;
    const K_current = K.current;
    if (K_current) {
      const h_current = h.current;
      if (h_current) {
        h_current.strokeStyle = K_current.color;
        h_current.lineWidth = K_current.lineWidth;
        h_current.lineCap = "round";
        h_current.lineJoin = "round";
        h_current.beginPath();

        if (K_current.tool === "line") {
          h_current.moveTo(K_current.start.x, K_current.start.y);
          h_current.lineTo(K_current.current.x, K_current.current.y);
        } else if (K_current.tool === "rectangle") {
          h_current.rect(
            K_current.start.x,
            K_current.start.y,
            K_current.current.x - K_current.start.x,
            K_current.current.y - K_current.start.y
          );
        } else if (K_current.tool === "circle") {
          const L = Math.hypot(
            K_current.current.x - K_current.start.x,
            K_current.current.y - K_current.start.y
          );
          h_current.arc(
            K_current.start.x,
            K_current.start.y,
            L,
            0,
            Math.PI * 2
          );
        }

        h_current.stroke();
      }
      K.current = null;
    }
    $();
    F.current();
  }, [$]);

  const he = x(ne);
  const ve = x(ae);
  he.current = ne;
  ve.current = ae;
  const ce = S((I) => {
    if (I.button === 1) {
      I.preventDefault();
      D.current = true;
      X.current = { x: I.clientX, y: I.clientY };
    }
  }, []);

  W(() => {
    if (!e) {
      return;
    }

    const I = (L) => {
      if (D.current) {
        const ee = L.clientX - X.current.x;
        const se = L.clientY - X.current.y;
        X.current = { x: L.clientX, y: L.clientY };
        const B_current = B.current;
        G(y.current, { x: B_current.x + ee, y: B_current.y + se });
        return;
      }
      he.current(L);
    };

    const R = () => {
      if (D.current) {
        D.current = false;
        return;
      }
      ve.current();
    };

    window.addEventListener("mousemove", I);
    window.addEventListener("mouseup", R);

    return () => {
      window.removeEventListener("mousemove", I);
      window.removeEventListener("mouseup", R);
    };
  }, [e, G]);

  W(() => {
    if (!e) {
      return;
    }
    const I = (R) => {
      if ((R.ctrlKey || R.metaKey) && R.key === "z") {
        R.preventDefault();
        R.shiftKey ? H() : V();
      }

      if ((R.ctrlKey || R.metaKey) && R.key === "y") {
        R.preventDefault();
        H();
      }

      if ((R.ctrlKey || R.metaKey) && (R.key === "=" || R.key === "+")) {
        R.preventDefault();
        const u_current = u.current;
        if (!u_current) {
          return;
        }
        const ee = u_current.getBoundingClientRect();
        const se = ee.width / 2;
        const ie = ee.height / 2;
        const y_current = y.current;
        const xe = Math.min(fn, y_current + Qt);
        G(xe, re(y_current, xe, B.current, se, ie));
      }

      if ((R.ctrlKey || R.metaKey) && R.key === "-") {
        R.preventDefault();
        const u_current = u.current;
        if (!u_current) {
          return;
        }
        const ee = u_current.getBoundingClientRect();
        const se = ee.width / 2;
        const ie = ee.height / 2;
        const y_current = y.current;
        const xe = Math.max(Bt, y_current - Qt);
        G(xe, re(y_current, xe, B.current, se, ie));
      }

      if ((R.ctrlKey || R.metaKey) && R.key === "0") {
        R.preventDefault();
        U();
      }
    };
    window.addEventListener("keydown", I);

    return () => window.removeEventListener("keydown", I);
  }, [e, V, H, G, re, U]);

  W(() => {
    if (!e) {
      return;
    }
    const u_current = u.current;
    if (!u_current) {
      return;
    }
    const R = (L) => {
      L.preventDefault();
      const ee = u_current.getBoundingClientRect();
      const se = L.clientX - ee.left;
      const ie = L.clientY - ee.top;
      if (L.ctrlKey || L.metaKey) {
        const y_current = y.current;
        const xe = L.deltaY > 0 ? -Qt : Qt;
        const fe = Math.min(fn, Math.max(Bt, y_current + xe));
        if (fe === y_current) {
          return;
        }
        G(fe, re(y_current, fe, B.current, se, ie));
      } else {
        G(y.current, {
          x: B.current.x - L.deltaX,
          y: B.current.y - L.deltaY,
        });
      }
    };
    u_current.addEventListener("wheel", R, { passive: false });

    return () => u_current.removeEventListener("wheel", R);
  }, [e, G, re]);

  W(() => {
    if (!e) {
      return;
    }
    const u_current = u.current;
    if (!u_current) {
      return;
    }

    const R = (ie, ge) =>
      Math.hypot(ge.clientX - ie.clientX, ge.clientY - ie.clientY);

    const L = (ie) => {
      if (ie.touches.length === 2) {
        ie.preventDefault();

        if (p.current) {
          p.current = false;
          K.current = null;
        }

        const ge = u_current.getBoundingClientRect();
        const xe = ie.touches[0];
        const fe = ie.touches[1];
        oe.current = {
          dist: R(xe, fe),
          midX: (xe.clientX + fe.clientX) / 2 - ge.left,
          midY: (xe.clientY + fe.clientY) / 2 - ge.top,
        };
      }
    };

    const ee = (ie) => {
      if (ie.touches.length === 2 && oe.current) {
        ie.preventDefault();
        const ge = u_current.getBoundingClientRect();
        const xe = ie.touches[0];
        const fe = ie.touches[1];
        const Zt = R(xe, fe);
        const On = (xe.clientX + fe.clientX) / 2 - ge.left;
        const $n = (xe.clientY + fe.clientY) / 2 - ge.top;
        const Gt = Zt / oe.current.dist;
        const y_current = y.current;
        const uo = Math.min(fn, Math.max(Bt, y_current * Gt));
        const ho = On - oe.current.midX;
        const fo = $n - oe.current.midY;
        const Kt = re(
          y_current,
          uo,
          B.current,
          oe.current.midX,
          oe.current.midY
        );
        G(uo, { x: Kt.x + ho, y: Kt.y + fo });
        oe.current = { dist: Zt, midX: On, midY: $n };
      }
    };

    const se = (ie) => {
      if (ie.touches.length < 2) {
        oe.current = null;
      }
    };

    u_current.addEventListener("touchstart", L, { passive: false });
    u_current.addEventListener("touchmove", ee, { passive: false });
    u_current.addEventListener("touchend", se);
    u_current.addEventListener("touchcancel", se);

    return () => {
      u_current.removeEventListener("touchstart", L);
      u_current.removeEventListener("touchmove", ee);
      u_current.removeEventListener("touchend", se);
      u_current.removeEventListener("touchcancel", se);
    };
  }, [e, G, re]);

  const ze = S(() => {
    const h_current = h.current;

    if (h_current) {
      h_current.fillStyle = "#FFFFFF";
      h_current.fillRect(0, 0, Y, j);
      $();
      F.current();
    }
  }, [Y, j, $]);

  const Ye = async () => {
    const l_current = l.current;
    if (!l_current || i) {
      return;
    }
    const R = l_current.toDataURL("image/png");
    a(true);
    try {
      await o(R);
      t();
    } catch (L) {
      console.error("Failed to save drawing:", L);
    } finally {
      a(false);
    }
  };

  const Pe = () => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }
    const R = u_current.getBoundingClientRect();
    const L = R.width / 2;
    const ee = R.height / 2;
    const y_current = y.current;
    const ie = Math.min(fn, y_current + Qt);
    G(ie, re(y_current, ie, B.current, L, ee));
  };

  const rt = () => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }
    const R = u_current.getBoundingClientRect();
    const L = R.width / 2;
    const ee = R.height / 2;
    const y_current = y.current;
    const ie = Math.max(Bt, y_current - Qt);
    G(ie, re(y_current, ie, B.current, L, ee));
  };

  const ye = () => U();

  return e
    ? n(nt, {
        onClose: t,
        showHeader: false,
        contentClassName: de.modalContent,
        size: "wide",
        children: n("div", {
          className: de.container,
          children: [
            n("div", {
              className: de.toolbar,
              children: [
                n("div", {
                  className: de.toolGroup,
                  children: [
                    n("button", {
                      className: `${de.toolButton} ${
                        f === "brush" ? de.active : ""
                      }`,
                      onClick: () => m("brush"),
                      title: "Кисть",
                      children: n(hd, {}),
                    }),
                    n("button", {
                      className: `${de.toolButton} ${
                        f === "eraser" ? de.active : ""
                      }`,
                      onClick: () => m("eraser"),
                      title: "Ластик",
                      children: n(fd, {}),
                    }),
                    n("button", {
                      className: `${de.toolButton} ${
                        f === "line" ? de.active : ""
                      }`,
                      onClick: () => m("line"),
                      title: "Линия",
                      children: n(md, {}),
                    }),
                    n("button", {
                      className: `${de.toolButton} ${
                        f === "rectangle" ? de.active : ""
                      }`,
                      onClick: () => m("rectangle"),
                      title: "Прямоугольник",
                      children: n(pd, {}),
                    }),
                    n("button", {
                      className: `${de.toolButton} ${
                        f === "circle" ? de.active : ""
                      }`,
                      onClick: () => m("circle"),
                      title: "Круг",
                      children: n(gd, {}),
                    }),
                  ],
                }),
                n("div", { className: de.separator }),
                n("div", {
                  className: de.toolGroup,
                  children: ud.map((I) =>
                    n(
                      "button",
                      {
                        className: `${de.sizeButton} ${
                          g === I ? de.active : ""
                        }`,
                        onClick: () => v(I),
                        title: `${I}px`,
                        children: n("span", {
                          className: de.sizePreview,
                          style: {
                            width: Math.min(I, 20),
                            height: Math.min(I, 20),
                          },
                        }),
                      },
                      I
                    )
                  ),
                }),
                n("div", { className: de.separator }),
                n("div", {
                  className: de.colorPalette,
                  children: [
                    ld.map((I) =>
                      n(
                        "button",
                        {
                          className: `${de.colorButton} ${
                            N === I ? de.active : ""
                          }`,
                          style: { backgroundColor: I },
                          onClick: () => w(I),
                          title: I,
                        },
                        I
                      )
                    ),
                    n("input", {
                      type: "color",
                      value: N,
                      onChange: (I) => w(I.currentTarget.value),
                      className: de.colorPicker,
                      title: "Свой цвет",
                    }),
                  ],
                }),
                n("div", { className: de.spacer }),
                n("div", {
                  className: de.toolGroup,
                  children: [
                    n("button", {
                      className: de.toolButton,
                      onClick: rt,
                      disabled: k <= Bt,
                      title: "Уменьшить",
                      children: n(Cd, {}),
                    }),
                    n("button", {
                      className: de.zoomLabel,
                      onClick: ye,
                      title: "Сбросить зум",
                      children: [Math.round(k * 100), "%"],
                    }),
                    n("button", {
                      className: de.toolButton,
                      onClick: Pe,
                      disabled: k >= fn,
                      title: "Увеличить",
                      children: n(yd, {}),
                    }),
                  ],
                }),
                n("div", { className: de.separator }),
                n("div", {
                  className: de.toolGroup,
                  children: [
                    n("button", {
                      className: de.toolButton,
                      onClick: V,
                      disabled: C <= 0,
                      title: "Отменить (Ctrl+Z)",
                      children: n(vd, {}),
                    }),
                    n("button", {
                      className: de.toolButton,
                      onClick: H,
                      disabled: C >= T.length - 1,
                      title: "Повторить (Ctrl+Y)",
                      children: n(wd, {}),
                    }),
                    n("button", {
                      className: de.toolButton,
                      onClick: ze,
                      title: "Очистить",
                      children: n(_d, {}),
                    }),
                  ],
                }),
              ],
            }),
            n("div", {
              ref: u,
              className: de.canvasContainer,
              onMouseDown: ce,
              children: n("canvas", {
                ref: c,
                className: de.viewport,
                onMouseDown: Q,
                onTouchStart: Q,
                onTouchMove: ne,
                onTouchEnd: ae,
                onTouchCancel: ae,
              }),
            }),
            n("div", {
              className: de.actions,
              children: [
                n("button", {
                  className: de.cancelButton,
                  onClick: t,
                  disabled: i,
                  children: "Отмена",
                }),
                n("button", {
                  className: de.saveButton,
                  onClick: Ye,
                  disabled: i,
                  children: i
                    ? n(Te, { children: [n(Ln, {}), "Загрузка..."] })
                    : s ||
                      (r === "banner"
                        ? "Загрузить баннер"
                        : "Добавить рисунок"),
                }),
              ],
            }),
          ],
        }),
      })
    : null;
}

const hd = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("path", {
        d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",
      }),
      n("path", {
        d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      }),
    ],
  });

const fd = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("path", {
        d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      }),
      n("path", { d: "M22 21H7" }),
      n("path", { d: "m5 11 9 9" }),
    ],
  });

const md = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: n("line", { x1: "5", y1: "19", x2: "19", y2: "5" }),
  });

const pd = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: n("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
    }),
  });

const gd = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: n("circle", { cx: "12", cy: "12", r: "10" }),
  });

const vd = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("path", { d: "M3 7v6h6" }),
      n("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }),
    ],
  });

const wd = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("path", { d: "M21 7v6h-6" }),
      n("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }),
    ],
  });

const _d = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("path", { d: "M3 6h18" }),
      n("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
      n("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }),
    ],
  });

const yd = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("circle", { cx: "11", cy: "11", r: "8" }),
      n("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      n("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
      n("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

const Cd = () =>
  n("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      n("circle", { cx: "11", cy: "11", r: "8" }),
      n("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      n("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
    ],
  });

const Nd = "_2sS6K7hx";
const Td = "WGDOlmRO";
const bd = "hvpitmZY";
const kd = "BStIlELw";
const Ed = "aY94etMT";
const Rd = "rPynk8pw";
const Sd = "BOAqDnoc";
const Id = "haxq9tnV";
const Pd = "_913-arE-";
const xd = "_76HhedQ0";
const Ad = "_7PQB1LTO";
const Ld = "UnOw5SXP";
const Md = "s594n2Yt";
const Od = "nOfp-no-";
const $d = "PRj4ZKu-";
const Dd = "_0a-n56Kv";

const De = {
  editor: Nd,
  empty: Td,
  bold: bd,
  italic: kd,
  underline: Ed,
  strike: Rd,
  spoiler: Sd,
  monospace: Id,
  quote: Pd,
  link: xd,
  menu: Ad,
  buttons: Ld,
  button: Md,
  linkForm: Od,
  linkInput: $d,
  linkSubmit: Dd,
};

const Bd = [
  { type: "bold", icon: vc, title: "Жирный" },
  { type: "italic", icon: Nc, title: "Курсив" },
  { type: "underline", icon: Rc, title: "Подчёркнутый" },
  { type: "strike", icon: kc, title: "Зачёркнутый" },
  { type: "spoiler", icon: bc, title: "Спойлер" },
  { type: "monospace", icon: _c, title: "Моноширинный" },
  { type: "quote", icon: Tc, title: "Цитата" },
  { type: "link", icon: ai, title: "Ссылка" },
];

const oo = {
  bold: De.bold,
  italic: De.italic,
  underline: De.underline,
  strike: De.strike,
  spoiler: De.spoiler,
  monospace: De.monospace,
  quote: De.quote,
  link: De.link,
};

const lo = xn(
  (
    {
      value: t,
      spans: o,
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
    const N = x(null);
    const [w, g] = A(false);
    const [v, p] = A({ x: 0, y: 0 });
    const [T, _] = A(false);
    const [C, P] = A("");
    const k = x(null);
    const E = x(null);
    const b = x(null);
    const M = x(false);
    const y = x(false);
    const B = x(t);
    const D = x(o);
    const X = x(r);

    W(() => {
      B.current = t;
      D.current = o;
      X.current = r;
    }, [t, o, r]);

    cn(
      m,
      () => ({
        insertText: ($) => {
          const N_current = N.current;
          if (!N_current) {
            return;
          }
          N_current.focus();
          const H = window.getSelection();
          if (!H) {
            return;
          }
          let te = 0;
          if (H.rangeCount > 0) {
            const ce = H.getRangeAt(0);
            te = Hd(N_current, ce.startContainer, ce.startOffset);
          }
          const B_current = B.current;
          const D_current = D.current;
          const ae = B_current.slice(0, te) + $ + B_current.slice(te);

          const he = D_current.map((ce) =>
            ce.offset >= te
              ? { ...ce, offset: ce.offset + $.length }
              : ce.offset + ce.length > te
              ? { ...ce, length: ce.length + $.length }
              : ce
          );

          y.current = true;
          B.current = ae;
          D.current = he;
          const ve = document.createTextNode($);
          if (H.rangeCount > 0) {
            const ce = H.getRangeAt(0);
            ce.deleteContents();
            ce.insertNode(ve);
            ce.setStartAfter(ve);
            ce.setEndAfter(ve);
            H.removeAllRanges();
            H.addRange(ce);
          }
          X.current(ae, he);
        },

        focus: () => {
          N.current?.focus();
        },
      }),
      []
    );

    const oe = S(() => {
      if (!t) {
        return "";
      }
      if (o.length === 0) {
        return No(t);
      }

      const $ = [...o].sort((ne, ae) => ne.offset - ae.offset);

      const V = [];
      for (const ne of $) {
        V.push({ pos: ne.offset, type: "start", span: ne });
        V.push({ pos: ne.offset + ne.length, type: "end", span: ne });
      }
      V.sort((ne, ae) =>
        ne.pos !== ae.pos
          ? ne.pos - ae.pos
          : ne.type !== ae.type
          ? ne.type === "end"
            ? -1
            : 1
          : 0
      );
      let H = "";
      let te = 0;
      const Q = [];
      for (const ne of V) {
        if (ne.pos > te) {
          const ae = t.substring(te, ne.pos);
          H += Kr(No(ae), Q);
          te = ne.pos;
        }
        if (ne.type === "start") {
          Q.push(ne.span);
        } else {
          const ae = Q.indexOf(ne.span);

          if (ae !== -1) {
            Q.splice(ae, 1);
          }
        }
      }
      if (te < t.length) {
        const ne = t.substring(te);
        H += Kr(No(ne), Q);
      }
      return H || "<br>";
    }, [t, o]);

    W(() => {
      if (y.current) {
        y.current = false;
        return;
      }
      const N_current = N.current;
      if (!N_current || (document.activeElement === N_current && t !== "")) {
        return;
      }
      const V = oe();

      if (N_current.innerHTML !== V) {
        N_current.innerHTML = V;
      }
    }, [oe, t]);

    W(() => {
      if (a && N.current) {
        const N_current = N.current;
        N_current.focus();

        if (N_current.childNodes.length > 0) {
          const V = window.getSelection();
          if (V) {
            const H = document.createRange();
            H.selectNodeContents(N_current);
            H.collapse(false);
            V.removeAllRanges();
            V.addRange(H);
          }
        }
      }
    }, [a]);

    W(() => {
      if (T && E.current) {
        E.current.focus();
      }
    }, [T]);

    const K = S(
      ($) => {
        if (M.current) {
          return;
        }
        const N_current = N.current;
        if (!N_current) {
          return;
        }
        if ($?.data === " ") {
          const Q = window.getSelection();
          if (Q && Q.rangeCount > 0) {
            const ae = Q.getRangeAt(0).startContainer;
            let he = null;
            let ve = ae;

            while (ve && ve !== N_current) {
              if (ve.nodeType === Node.ELEMENT_NODE) {
                const ce = ve;
                if (ce.tagName === "SPAN" && ce.className) {
                  he = ce;
                  break;
                }
              }
              ve = ve.parentNode;
            }

            if (he) {
              const ce = he.textContent || "";
              if (ce.endsWith(" ")) {
                he.textContent = ce.slice(0, -1);
                const ze = document.createTextNode(" ");
                he.parentNode?.insertBefore(ze, he.nextSibling);
                const Ye = document.createRange();
                Ye.setStartAfter(ze);
                Ye.setEndAfter(ze);
                Q.removeAllRanges();
                Q.addRange(Ye);
              }
            }
          }
        }
        const H = N_current.innerText.replace(/\n$/, "");
        if (H.length > i) {
          const Q = H.substring(0, i);
          y.current = true;
          r(Q, Wd(o, Q));
          return;
        }
        const te = Vd(N_current);
        y.current = true;
        r(H, te);
      },
      [i, r, o]
    );

    const Y = S(
      ($) => {
        if (d) {
          return;
        }
        const V = window.getSelection();
        if (!V || V.isCollapsed) {
          return;
        }
        $.preventDefault();
        b.current = V.getRangeAt(0).cloneRange();

        const H = Math.max(
          10,
          Math.min($.clientX - 150, window.innerWidth - 310)
        );

        const te = Math.max(10, $.clientY - 50);
        p({ x: H, y: te });
        g(true);
      },
      [d]
    );

    const j = S(
      ($) => {
        $.preventDefault();

        if (f && $.clipboardData?.files?.length) {
          const ne = Array.from($.clipboardData.files).filter((ae) =>
            ae.type.startsWith("image/")
          );
          if (ne.length > 0) {
            f(ne);
            return;
          }
        }

        const V = $.clipboardData?.getData("text/plain") || "";
        if (!V) {
          return;
        }
        const H = window.getSelection();
        if (!H || !H.rangeCount) {
          return;
        }
        const te = H.getRangeAt(0);
        te.deleteContents();
        const Q = document.createTextNode(V);
        te.insertNode(Q);
        te.setStartAfter(Q);
        te.setEndAfter(Q);
        H.removeAllRanges();
        H.addRange(te);
        K();
      },
      [K, f]
    );

    const G = S(() => {
      const N_current = N.current;
      if (N_current && !B.current) {
        const V = window.getSelection();
        if (V) {
          const H = document.createRange();
          H.setStart(N_current, 0);
          H.collapse(true);
          V.removeAllRanges();
          V.addRange(H);
        }
      }
    }, []);

    const re = S(
      ($) => {
        if ($.key === "Enter" && !$.shiftKey && h) {
          $.preventDefault();
          h();
          return;
        }
        if (!d && ($.ctrlKey || $.metaKey)) {
          let V = null;
          switch ($.key.toLowerCase()) {
            case "b": {
              V = "bold";
              break;
            }
            case "i": {
              V = "italic";
              break;
            }
            case "u": {
              V = "underline";
              break;
            }
          }

          if (V) {
            $.preventDefault();
            z(V);
          }
        }
      },
      [h, d]
    );

    const z = S(
      ($, V) => {
        const N_current = N.current;
        if (!N_current) {
          return;
        }
        const te = window.getSelection();
        if (
          !te ||
          (b.current && (te.removeAllRanges(), te.addRange(b.current)),
          te.isCollapsed)
        ) {
          return;
        }
        const Q = te.getRangeAt(0);
        const ne = document.createElement("span");
        ne.className = oo[$];

        if ($ === "link" && V) {
          ne.dataset.url = V;
        }

        const ae = jd(Q.commonAncestorContainer, oo[$]);
        if (ae) {
          zd(ae);
        } else {
          try {
            Q.surroundContents(ne);
          } catch {
            const he = Q.extractContents();
            ne.appendChild(he);
            Q.insertNode(ne);
          }
        }
        K();
        g(false);
        _(false);
        P("");
        b.current = null;
        N_current.focus();
      },
      [K]
    );

    const F = S(
      ($) => {
        if ($ === "link") {
          _(true);
        } else {
          z($);
        }
      },
      [z]
    );

    const q = S(
      ($) => {
        $.preventDefault();

        if (C.trim()) {
          z("link", C.trim());
        }
      },
      [z, C]
    );

    W(() => {
      if (!w) {
        return;
      }

      const $ = (H) => {
        if (k.current && !k.current.contains(H.target)) {
          g(false);
          _(false);
          P("");
          b.current = null;
        }
      };

      const V = () => {
        g(false);
        _(false);
        P("");
        b.current = null;
      };

      document.addEventListener("mousedown", $);
      window.addEventListener("scroll", V, true);

      return () => {
        document.removeEventListener("mousedown", $);
        window.removeEventListener("scroll", V, true);
      };
    }, [w]);
    const U = !t;
    return n(Te, {
      children: [
        n("div", {
          ref: N,
          className: `${De.editor} ${c} ${U ? De.empty : ""}`,
          contentEditable: true,
          "data-placeholder": s,
          onInput: ($) => K($),
          onFocus: G,
          onPaste: j,
          onContextMenu: Y,
          onKeyDown: re,
          onCompositionStart: () => {
            M.current = true;
          },
          onCompositionEnd: () => {
            M.current = false;
            K();
          },
          style: { minHeight: u, maxHeight: l },
        }),
        w &&
          Rt(
            n("div", {
              ref: k,
              className: De.menu,
              style: { left: v.x, top: v.y },
              children: T
                ? n("form", {
                    className: De.linkForm,
                    onSubmit: q,
                    children: [
                      n("input", {
                        ref: E,
                        type: "url",
                        className: De.linkInput,
                        placeholder: "https://...",
                        value: C,
                        onInput: ($) => P($.target.value),
                      }),
                      n("button", {
                        type: "submit",
                        className: De.linkSubmit,
                        disabled: !C.trim(),
                        children: "OK",
                      }),
                    ],
                  })
                : n("div", {
                    className: De.buttons,
                    children: Bd.map(({ type: $, icon: V, title: H }) =>
                      n(
                        "button",
                        {
                          type: "button",
                          className: De.button,
                          onClick: () => F($),
                          title: H,
                          children: n(V, { size: 16 }),
                        },
                        $
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

function No(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function Ud(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function Fd(e) {
  return e !== "mention" && e !== "hashtag";
}
function Kr(e, t) {
  if (t.length === 0) {
    return e;
  }
  let o = e;
  for (const r of t) {
    if (!Fd(r.type)) {
      continue;
    }
    const s = oo[r.type];
    const i = r.type === "link" ? ` data-url="${Ud(r.url)}"` : "";
    o = `<span class="${s}"${i}>${o}</span>`;
  }
  return o;
}
function Hd(e, t, o) {
  let r = 0;
  const s = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let i = s.nextNode();

  while (i) {
    if (i === t) {
      return r + o;
    }
    r += i.textContent?.length || 0;
    i = s.nextNode();
  }

  return r;
}
function Wd(e, t) {
  return e
    .map((o) => {
      const r = o.offset + o.length;
      return o.offset >= t.length
        ? null
        : r > t.length
        ? { ...o, length: t.length - o.offset }
        : o;
    })
    .filter((o) => o !== null);
}
function Vd(e) {
  const t = [];

  const o = (r, s) => {
    if (r.nodeType === Node.TEXT_NODE) {
      return s + (r.textContent?.length || 0);
    }
    if (r.nodeType === Node.ELEMENT_NODE) {
      const i = r;
      if (i.tagName === "BR") {
        return s + 1;
      }
      let a = null;
      for (const [l, h] of Object.entries(oo)) {
        if (i.classList.contains(h)) {
          a = l;
          break;
        }
      }
      const c = s;
      let u = s;
      for (const l of Array.from(r.childNodes)) {
        u = o(l, u);
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

  o(e, 0);
  return t;
}
function jd(e, t) {
  let o = e;

  while (o && o.nodeType !== Node.DOCUMENT_NODE) {
    if (o.nodeType === Node.ELEMENT_NODE) {
      const r = o;
      if (r.classList.contains(t)) {
        return r;
      }
    }
    o = o.parentNode;
  }

  return null;
}
function zd(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}
const Yd = "u13FLJio";
const Xd = "bToZwjfv";
const qd = "eB--cks6";
const Zd = "_9ohK9-tN";
const Gd = "j2Wceqpa";
const Kd = "SKnXo-cA";
const Jd = "_8wZrlhZa";
const Qd = "ywO8uWzl";
const eh = "q4IPCH5G";
const th = "iqaeIAPL";
const nh = "YGC2tIXC";
const oh = "Hvh4qKiC";
const rh = "-bZAaxpL";
const sh = "mY50rIUo";
const ih = "SVQ04Pz4";
const ah = "-aTjRl6d";
const ch = "vskBTYBr";
const lh = "_0haeBjBl";
const uh = "m4JSOoi7";
const dh = "xuKvww1d";
const hh = "GMSlkrum";
const fh = "T1UhUe7-";
const mh = "KPX--Htj";
const ph = "UDcyRX73";
const gh = "G9MjuFO7";
const vh = "yAXdi86A";
const wh = "_5EoTr5dx";
const _h = "_2aj24MP-";
const yh = "_5JkW0FiQ";
const Ch = "X4D-Hg95";
const Nh = "WafaU2-d";
const Th = "eb-u7Ezx";
const bh = "u52eDQyv";
const kh = "V-0z6M2W";
const Eh = "_7-fvD6Zx";

const ue = {
  form: Yd,
  dragActive: Xd,
  whatsNew: qd,
  editor: Zd,
  dragOverlay: Gd,
  attachments: Kd,
  attachmentPreview: Jd,
  uploading: Qd,
  uploadError: eh,
  videoPreviewWrapper: th,
  videoPlayIcon: nh,
  uploadOverlay: oh,
  spinner: rh,
  errorOverlay: sh,
  errorText: ih,
  removeAttachment: ah,
  actions: ch,
  mediaButtons: lh,
  mediaButton: uh,
  submitGroup: dh,
  charCount: hh,
  error: fh,
  pollContainer: mh,
  pollHeader: ph,
  pollTitle: gh,
  pollClose: vh,
  pollQuestion: wh,
  pollOptions: _h,
  pollOptionRow: yh,
  pollOption: Ch,
  removeOption: Nh,
  addOption: Th,
  pollFooter: bh,
  pollToggle: kh,
  active: Eh,
};

function Jr({ src: e, type: t }) {
  return t === "video"
    ? n("div", {
        className: ue.videoPreviewWrapper,
        children: [
          n("video", { src: e, preload: "metadata" }),
          n("div", {
            className: ue.videoPlayIcon,
            children: n("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "white",
              children: n("path", { d: "M8 5v14l11-7z" }),
            }),
          }),
        ],
      })
    : n("img", { src: e, alt: "" });
}
function bi({ images: e, uploadingImages: t, onRemove: o }) {
  return e.length > 0 || t.length > 0
    ? n("div", {
        className: ue.attachments,
        children: [
          e.map((s) =>
            n(
              "div",
              {
                className: ue.attachmentPreview,
                children: [
                  n(Jr, { src: s.previewUrl, type: s.type }),
                  n("button", {
                    className: ue.removeAttachment,
                    onClick: () => o(s.id),
                    children: n(wt, {}),
                  }),
                ],
              },
              s.id
            )
          ),
          t.map((s) =>
            n(
              "div",
              {
                className: `${ue.attachmentPreview} ${
                  s.error ? ue.uploadError : ue.uploading
                }`,
                children: [
                  n(Jr, { src: s.previewUrl, type: s.type }),
                  !s.error &&
                    n("div", {
                      className: ue.uploadOverlay,
                      children: n("div", { className: ue.spinner }),
                    }),
                  s.error &&
                    n("div", {
                      className: ue.errorOverlay,
                      children: n("span", {
                        className: ue.errorText,
                        children: s.error,
                      }),
                    }),
                  n("button", {
                    className: ue.removeAttachment,
                    onClick: () => o(s.id),
                    children: n(wt, {}),
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
const Et = {
  MAX_CHARS: 1000 /* 1e3 */,
  MIN_POLL_OPTIONS: 2,
  MAX_POLL_OPTIONS: 10,
  MAX_POLL_QUESTION_LENGTH: 200,
  MAX_POLL_OPTION_LENGTH: 100,
  MAX_TEXTAREA_HEIGHT: 400,
};
function Rh({
  poll: e,
  onQuestionChange: t,
  onOptionChange: o,
  onAddOption: r,
  onRemoveOption: s,
  onMultipleChoiceToggle: i,
  onClose: a,
}) {
  return n("div", {
    className: ue.pollContainer,
    children: [
      n("div", {
        className: ue.pollHeader,
        children: [
          n("span", { className: ue.pollTitle, children: "Опрос" }),
          n("button", {
            className: ue.pollClose,
            onClick: a,
            children: n(wt, {}),
          }),
        ],
      }),
      n("input", {
        type: "text",
        className: ue.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: (c) => t(c.target.value),
      }),
      n("div", {
        className: ue.pollOptions,
        children: e.options.map((c, u) =>
          n(
            "div",
            {
              className: ue.pollOptionRow,
              children: [
                n("input", {
                  type: "text",
                  className: ue.pollOption,
                  placeholder: `Вариант ${u + 1}`,
                  value: c.text,
                  maxLength: 50,
                  onInput: (l) => o(c.id, l.target.value),
                }),
                e.options.length > Et.MIN_POLL_OPTIONS &&
                  n("button", {
                    className: ue.removeOption,
                    onClick: () => s(c.id),
                    children: n(wt, {}),
                  }),
              ],
            },
            c.id
          )
        ),
      }),
      e.options.length < Et.MAX_POLL_OPTIONS &&
        n("button", {
          className: ue.addOption,
          onClick: r,
          children: [n(rr, {}), n("span", { children: "Добавить вариант" })],
        }),
      n("div", {
        className: ue.pollFooter,
        children: n("label", {
          className: ue.pollToggle,
          children: [
            n("input", {
              type: "checkbox",
              checked: e.multipleChoice,
              onChange: i,
            }),
            n("span", { children: "Несколько вариантов ответа" }),
          ],
        }),
      }),
    ],
  });
}
const To = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};
function Sh() {
  const [e, t] = A(false);
  const [o, r] = A(To);

  const s = S((N) => {
    if (N.length <= Et.MAX_POLL_QUESTION_LENGTH) {
      r((w) => ({
        ...w,
        question: N,
      }));
    }
  }, []);

  const i = S((N, w) => {
    if (w.length <= Et.MAX_POLL_OPTION_LENGTH) {
      r((g) => ({
        ...g,
        options: g.options.map((v) => (v.id === N ? { ...v, text: w } : v)),
      }));
    }
  }, []);

  const a = S(() => {
    if (o.options.length < Et.MAX_POLL_OPTIONS) {
      r((N) => ({
        ...N,
        options: [...N.options, { id: Date.now().toString(), text: "" }],
      }));
    }
  }, [o.options.length]);

  const c = S(
    (N) => {
      if (o.options.length > Et.MIN_POLL_OPTIONS) {
        r((w) => ({
          ...w,
          options: w.options.filter((g) => g.id !== N),
        }));
      }
    },
    [o.options.length]
  );

  const u = S(() => {
    r((N) => ({
      ...N,
      multipleChoice: !N.multipleChoice,
    }));
  }, []);

  const l = S(() => {
    t(false);
    r(To);
  }, []);

  const h = S(() => {
    t((N) => !N);
  }, []);

  const d = S(() => {
    if (!e) {
      return true;
    }
    const N = o.question.trim().length > 0;

    const w = o.options.filter((g) => g.text.trim().length > 0);

    return N && w.length >= Et.MIN_POLL_OPTIONS;
  }, [e, o]);

  const f = S(() => {
    if (!(!e || !d())) {
      return {
        question: o.question.trim(),
        options: o.options
          .filter((N) => N.text.trim().length > 0)
          .map((N) => ({
            text: N.text.trim(),
          })),
        multipleChoice: o.multipleChoice,
      };
    }
  }, [e, d, o]);

  const m = S(() => {
    t(false);
    r(To);
  }, []);

  return {
    isPollOpen: e,
    poll: o,
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
const Ih = {
  [_e.CONTENT_MODERATION_FAILED]: "Изображение содержит запрещённый контент",
  [_e.FILE_TOO_LARGE]: "Файл слишком большой",
  [_e.UNSUPPORTED_FILE_TYPE]: "Неподдерживаемый формат файла",
  [_e.UPLOAD_FAILED]: "Не удалось загрузить файл",
  [_e.VIDEO_REQUIRES_VERIFICATION]:
    "Загрузка видео доступна только верифицированным пользователям",
  [_e.RATE_LIMIT_EXCEEDED]: "Слишком много запросов. Попробуйте позже",
  [_e.UNAUTHORIZED]: "Требуется авторизация",
  [_e.ACCESS_DENIED]: "Доступ запрещён",
  [_e.NETWORK_ERROR]: "Ошибка сети. Проверьте подключение",
  [_e.TIMEOUT]: "Превышено время ожидания",
};
function Ph(e, t = "Произошла ошибка") {
  return e ? Ih[e] ?? t : t;
}
function ki(e = 10, t = false) {
  const [o, r] = A([]);
  const [s, i] = A([]);
  const a = x(null);
  const c = x(o);
  const u = x(s);
  c.current = o;
  u.current = s;

  W(
    () => () => {
      c.current.forEach((T) => URL.revokeObjectURL(T.previewUrl));

      u.current.forEach((T) => URL.revokeObjectURL(T.previewUrl));
    },
    []
  );

  const l = s.length > 0;

  const h =
    o.some((T) => T.type === "video") || s.some((T) => T.type === "video");

  const d =
    o.some((T) => T.type === "image") || s.some((T) => T.type === "image");

  const f = S(() => {
    a.current?.click();
  }, []);

  const m = S(
    async (T) => {
      const _ = tn.isValidVideoType(T);
      const C = tn.isValidImageType(T);
      if (_ && !t) {
        Ve.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!C && !_) {
        Ve.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const u_current = u.current;

      const E =
        c_current.some((D) => D.type === "video") ||
        u_current.some((D) => D.type === "video");

      const b =
        c_current.some((D) => D.type === "image") ||
        u_current.some((D) => D.type === "image");

      if (_ && b) {
        Ve.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (C && E) {
        Ve.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (_ && E) {
        Ve.error("Можно загрузить только 1 видео");
        return;
      }
      const M = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const y = URL.createObjectURL(T);
      const B = _ ? "video" : "image";
      i((D) => [...D, { id: M, file: T, previewUrl: y, progress: 0, type: B }]);
      try {
        const D = await tn.uploadMedia(T);

        i((X) => X.filter((oe) => oe.id !== M));

        r((X) => [
          ...X,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: D.id,
            url: D.url,
            previewUrl: y,
            type: B,
          },
        ]);
      } catch (D) {
        let X = "Ошибка загрузки";

        if (Le(D)) {
          X = Ph(D.code, D.message);
        } else if (D instanceof Error) {
          X = D.message;
        }

        Ve.error(X);

        i((oe) => oe.filter((K) => K.id !== M));

        URL.revokeObjectURL(y);
      }
    },
    [t]
  );

  const N = S(
    (T) => {
      const T_target = T.target;
      const T_target_files = T_target.files;
      if (!T_target_files || T_target_files.length === 0) {
        return;
      }
      const P = o.length + s.length;
      const k = e - P;
      if (k <= 0) {
        return;
      }
      Array.from(T_target_files).slice(0, k).forEach(m);
      T_target.value = "";
    },
    [o.length, s.length, e, m]
  );

  const w = S((T) => {
    r((_) => {
      const C = _.find((P) => P.id === T);

      if (C) {
        URL.revokeObjectURL(C.previewUrl);
      }

      return _.filter((P) => P.id !== T);
    });

    i((_) => {
      const C = _.find((P) => P.id === T);

      if (C) {
        URL.revokeObjectURL(C.previewUrl);
      }

      return _.filter((P) => P.id !== T);
    });
  }, []);

  const g = S(
    (T) => {
      const _ = T.filter((k) =>
        t ? tn.isValidMediaType(k) : tn.isValidImageType(k)
      );
      if (_.length === 0) {
        return;
      }
      const C = c.current.length + u.current.length;
      const P = e - C;

      if (P > 0) {
        _.slice(0, P).forEach(m);
      }
    },
    [e, m, t]
  );

  const v = S(
    async (T) => {
      const [_, C] = T.split(",");
      const P = _.match(/:(.*?);/)?.[1] || "image/png";
      const k = atob(C);
      const E = new Uint8Array(k.length);
      for (let y = 0; y < k.length; y++) {
        E[y] = k.charCodeAt(y);
      }
      const b = new Blob([E], { type: P });
      const M = new File([b], `drawing-${Date.now()}.png`, {
        type: "image/png",
      });
      m(M);
    },
    [m]
  );

  const p = S(() => {
    o.forEach((T) => URL.revokeObjectURL(T.previewUrl));

    s.forEach((T) => URL.revokeObjectURL(T.previewUrl));

    r([]);
    i([]);
  }, [o, s]);

  return {
    images: o,
    uploadingImages: s,
    isUploading: l,
    hasVideo: h,
    hasImages: d,
    openFilePicker: f,
    removeImage: w,
    addImage: v,
    uploadFiles: g,
    clearAll: p,
    fileInputRef: a,
    handleFileChange: N,
  };
}
function Ei({
  onSubmit: e,
  autoFocus: t = false,
  placeholder: o = "Что нового?",
}) {
  const {
    text: r,
    spans: s,
    editorRef: i,
    handleChange: a,
    insertText: c,
    reset: u,
  } = ao();

  const [l, h] = A(false);
  const [d, f] = A(false);
  const [m, N] = A(false);
  const w = x(0);
  const g = vt();
  const p = er()?.isVerified ?? false;

  const {
    images: T,
    uploadingImages: _,
    isUploading: C,
    hasVideo: P,
    openFilePicker: k,
    removeImage: E,
    addImage: b,
    uploadFiles: M,
    clearAll: y,
    fileInputRef: B,
    handleFileChange: D,
  } = ki(10, p);

  const {
    isPollOpen: X,
    poll: oe,
    togglePoll: K,
    handlePollQuestionChange: Y,
    handlePollOptionChange: j,
    handleAddPollOption: G,
    handleRemovePollOption: re,
    handleMultipleChoiceToggle: z,
    handleClosePoll: F,
    isPollValid: q,
    getPollData: U,
    resetPoll: $,
  } = Sh();

  const V = Et.MAX_CHARS - r.length;
  const H = V < 0;
  const te = X && q();
  const Q = T.length > 0 || _.length > 0;
  const ne = r.trim().length > 0 || te || te || Q;
  const ae = p ? `${Uo},${Va}` : Uo;

  const he = S(async () => {
    if (!(!ne || H || H || C || H || C || d)) {
      f(true);
      try {
        const ye = T.map((I) => ({
          mediaId: I.mediaId,
          url: I.url,
        }));
        await e?.(r, s, ye, U());
        u();
        y();
        $();
      } catch {
      } finally {
        f(false);
      }
    }
  }, [ne, H, C, d, r, s, T, U, e, u, y, $]);

  const ve = S(
    (ye) => {
      b(ye);
    },
    [b]
  );

  const ce = S(
    (ye) => {
      c(ye.emoji);
    },
    [c]
  );

  const ze = S((ye) => {
    ye.preventDefault();
    ye.stopPropagation();
    w.current++;

    if (ye.dataTransfer?.types.includes("Files")) {
      N(true);
    }
  }, []);

  const Ye = S((ye) => {
    ye.preventDefault();
    ye.stopPropagation();
  }, []);

  const Pe = S((ye) => {
    ye.preventDefault();
    ye.stopPropagation();
    w.current--;

    if (w.current === 0) {
      N(false);
    }
  }, []);

  const rt = S(
    (ye) => {
      ye.preventDefault();
      ye.stopPropagation();
      w.current = 0;
      N(false);
      const I = ye.dataTransfer?.files;

      if (I && I.length > 0) {
        M(Array.from(I));
      }
    },
    [M]
  );

  return n("div", {
    className: `${ue.form} ${m ? ue.dragActive : ""}`,
    onDragEnter: ze,
    onDragOver: Ye,
    onDragLeave: Pe,
    onDrop: rt,
    children: [
      m &&
        n("div", {
          className: ue.dragOverlay,
          children: [
            n("svg", {
              width: "32",
              height: "32",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                n("rect", {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2",
                  ry: "2",
                }),
                n("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                n("polyline", { points: "21 15 16 10 5 21" }),
              ],
            }),
            n("span", {
              children: p ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      n("div", {
        className: ue.whatsNew,
        children: n(lo, {
          ref: i,
          value: r,
          spans: s,
          onChange: a,
          placeholder: o,
          autoFocus: t,
          className: ue.editor,
          minHeight: 40,
          maxHeight: Et.MAX_TEXTAREA_HEIGHT,
          onImagePaste: M,
        }),
      }),
      n(bi, { images: T, uploadingImages: _, onRemove: E }),
      n("input", {
        ref: B,
        type: "file",
        accept: ae,
        multiple: !P,
        onChange: D,
        style: { display: "none" },
      }),
      X &&
        n(Rh, {
          poll: oe,
          onQuestionChange: Y,
          onOptionChange: j,
          onAddOption: G,
          onRemoveOption: re,
          onMultipleChoiceToggle: z,
          onClose: F,
        }),
      n("div", {
        className: ue.actions,
        children: [
          n("div", {
            className: ue.mediaButtons,
            children: [
              n("button", {
                className: ue.mediaButton,
                onClick: k,
                title: p ? "Добавить медиа" : "Добавить изображение",
                children: n(ii, {}),
              }),
              !g &&
                n(cr, { onEmojiSelect: ce, buttonClassName: ue.mediaButton }),
              n("button", {
                className: ue.mediaButton,
                onClick: () => h(true),
                title: "Нарисовать",
                disabled: P,
                children: n(Dc, {}),
              }),
              n("button", {
                className: `${ue.mediaButton} ${X ? ue.active : ""}`,
                onClick: K,
                title: "Добавить опрос",
                children: n(Bc, {}),
              }),
            ],
          }),
          n("div", {
            className: ue.submitGroup,
            children: [
              H &&
                n("span", {
                  className: `${ue.charCount} ${ue.error}`,
                  children: V,
                }),
              n(Oe, {
                size: "lg",
                disabled: !ne || H || H || C || H || C || d,
                loading: d,
                onClick: he,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      n(dd, { isOpen: l, onClose: () => h(false), onSave: ve, mode: "post" }),
    ],
  });
}
const xh = "GcSCKwwz";
const Ah = "zBZFa-2a";
const Qr = { createPostModal: xh, title: Ah };
function Lh({ wallOwnerId: e, placeholder: t, onPostCreated: o }) {
  const { closeModal: r } = qt();

  const s = Ce((c) => c.profile);

  const i = me((c) => c.createPost);

  const a = async (c, u, l, h) => {
    if (!s) {
      return;
    }
    const d = e ?? s.id;
    await i(d, c, u, l, h);
    await o?.();
    r();
  };

  return n(nt, {
    frameless: true,
    onClose: r,
    className: Qr.createPostModal,
    children: [
      n("h2", { className: Qr.title, children: "Создать пост" }),
      n(Ei, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}

const Mh = () => {
  const e = er();
  const t = ti();
  const { initialize: o, disconnectSSE: r } = ln();
  const s = oi();

  const i = tr((b) => b.fetchPortal);

  W(() => {
    if (t) {
      o();
    }

    return () => {
      r();
    };
  }, [t, o, r]);

  W(() => {
    i();
  }, [i]);

  const a = e?.username ? `/@${e.username}` : "/profile";

  const c = Ne(
    () => [
      { id: "feed", label: "Лента", icon: li, href: "/" },
      { id: "search", label: "Поиск", icon: gi, href: "/search" },
      { id: "event", label: "Ивент", icon: null, href: "/event" },
      {
        id: "notifications",
        label: "Уведы",
        icon: or,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: mi, href: a },
    ],
    [a]
  );

  const [u, l] = A({});
  const [h, d] = A(true);
  const f = x([]);
  const m = x(null);
  const [N] = An();
  const { openModal: w } = qt();

  const g = me((b) => b.fetchFeed);

  const v = me((b) => b.isRefreshing);

  const p = ni();

  const T = S(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    g(true);
  }, [g]);

  const _ = Ne(() => {
    const b = N.url || "/";
    return ir.some((M) => b.startsWith(M));
  }, [N.url]);

  const C = Ne(() => {
    const b = N.url || "/";
    return e?.username
      ? b === `/@${e.username}` || b.startsWith(`/@${e.username}/`)
      : false;
  }, [N.url, e?.username]);

  const P = x(null);

  const k = S((b, M = false) => {
    if (!M && P.current === b) {
      return;
    }
    P.current = b;
    const y = f.current[b];
    const m_current = m.current;
    if (y && m_current) {
      const D = parseFloat(getComputedStyle(m_current).paddingLeft) || 0;

      l({
        width: y.offsetWidth,
        transform: `translateX(${y.offsetLeft - D}px)`,
      });

      d(true);
    }
  }, []);

  W(() => {
    const b = N.url || "/";

    if (!c.some((y) => y.href === b)) {
      d(false);
    }
  }, [N.url, c]);

  W(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const M = m_current.querySelector(`.${je.active}`);
    if (M) {
      const y = f.current.indexOf(M);

      if (y !== -1) {
        P.current = null;
        k(y);
      }
    }
  }, []);

  W(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }

    const M = () => {
      const B = m_current.querySelector(`.${je.active}`);
      if (B) {
        const D = f.current.indexOf(B);

        if (D !== -1) {
          k(D, true);
        }
      }
    };

    const y = new ResizeObserver(M);
    y.observe(m_current);
    window.addEventListener("resize", M);

    return () => {
      y.disconnect();
      window.removeEventListener("resize", M);
    };
  }, [k]);

  const E = () => {
    w(n(Lh, {}));
  };
  return (
    _ ||
    n("div", {
      className: je.mobileNavigationWrapper,
      children: [
        n("nav", {
          ref: m,
          className: je.navigation,
          children: [
            n("div", {
              className: `${je.indicator} ${h ? "" : je.indicatorHidden}`,
              style: u,
            }),
            c.map((b, M) => {
              const b_icon = b.icon;
              const B = b.id === "event";
              const D = B && s.active && !!s.url;
              return n(
                sr,
                {
                  path: b.href,
                  children: ({ matches: X }) => {
                    const oe = X || (b.id === "profile" && C);
                    return n("a", {
                      href: D ? s.url : b.href,
                      target: D ? "_blank" : undefined,
                      rel: D ? "noopener noreferrer" : undefined,
                      ref: (K) => {
                        f.current[M] = K;

                        if (K && oe) {
                          k(M);
                        }
                      },
                      className: `${je.navItem} ${oe ? je.active : ""}`,
                      onClick: (K) => {
                        if (oe && b.id === "feed") {
                          K.preventDefault();
                          T();
                        }
                      },
                      children: [
                        n("span", {
                          className: je.iconWrapper,
                          children: B
                            ? n("img", {
                                src: s.active
                                  ? "/assets/portal/portal-active.gif"
                                  : "/assets/portal/portal-inactive.png",
                                alt: "Ивент",
                                className: `${je.portalImage} ${
                                  s.active ? je.portalImageActive : ""
                                }`,
                              })
                            : n(Te, {
                                children: [
                                  b.id === "feed" && v
                                    ? n(Ln, {})
                                    : n(b_icon, {}),
                                  b.id === "notifications" &&
                                    p > 0 &&
                                    n("span", {
                                      className: je.badge,
                                      children: p > 99 ? "99+" : p,
                                    }),
                                ],
                              }),
                        }),
                        n("span", {
                          className: je.label,
                          children: b.label,
                        }),
                      ],
                    });
                  },
                },
                b.id
              );
            }),
          ],
        }),
        n("button", {
          className: je.createButton,
          onClick: E,
          "aria-label": "Создать пост",
          children: n(rr, {}),
        }),
      ],
    })
  );
};

const Oh = "GKtAeZvh";
const $h = "_4kYPGG9W";
const Dh = "pl3SNO9Y";
const Bh = "-OjVJvXv";
const Uh = "mKywUPJV";
const Fh = "ORxo1gch";
const Hh = "_-0ox-2T5";
const Wh = "ufqwLNRT";
const Vh = "Kb0ZHEmq";
const jh = "L6foA0ob";
const zh = "p8fXVDg6";
const Yh = "iiFzRcQy";

const St = {
  avatar: Oh,
  xs: $h,
  emoji: Dh,
  onlineDot: Bh,
  sm: Uh,
  md: Fh,
  lg: Hh,
  xl: Wh,
  badge: Vh,
  followBadge: jh,
  notFollowing: zh,
  following: Yh,
};

function Xh(e) {
  return (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith("https://") ||
    e.startsWith("/")
  );
}
function ot({
  src: e,
  alt: t,
  size: o = "md",
  badge: r,
  online: s,
  followBadge: i,
  onFollowBadgeClick: a,
  className: c,
}) {
  const u = e ? Xh(e) : false;
  return n("div", {
    className: `${St.avatar} ${St[o]} ${c || ""}`,
    children: [
      u && e
        ? n("img", { src: e, alt: t || "" })
        : n("span", { className: St.emoji, children: e || "👤" }),
      r && n("div", { className: St.badge, children: r }),
      i !== undefined
        ? n("button", {
            type: "button",
            className: `${St.followBadge} ${
              i ? St.following : St.notFollowing
            }`,
            onClick: (l) => {
              l.preventDefault();
              l.stopPropagation();
              a?.(l);
            },
            children: i ? n(xc, { size: 8 }) : n(Pc, { size: 8 }),
          })
        : s && n("span", { className: St.onlineDot }),
    ],
  });
}
const qh = "K6nCQ-U-";
const Zh = "_4z8V9ZZv";
const Gh = "_7KXbkQt7";
const Kh = "uYOP8khl";
const Jh = "_6y-KsBSs";
const Qh = "_0V6OU0Ym";
const ef = "nkzq9EYy";
const tf = "sPqWHy7d";
const nf = "_9y9syYYY";
const of = "nDwuZLyW";
const rf = "L5ifDyu9";
const sf = "YTa76qGd";
const af = "pgh3zI5U";
const cf = "MLUpLifx";

const Ae = {
  modalReport: qh,
  content: Zh,
  successIcon: Gh,
  title: Kh,
  subtitle: Jh,
  options: Qh,
  chip: ef,
  radio: tf,
  chipActive: nf,
  radioDot: of,
  detailsSection: rf,
  textarea: sf,
  error: af,
  actions: cf,
};

const lf = {
  spam: "spam",
  violence: "violence",
  hate: "harassment",
  adult: "nudity",
  misinfo: "misinformation",
  other: "other",
};

const uf = [
  { id: "spam", label: "Спам или нежелательный контент" },
  { id: "violence", label: "Насилие или опасные действия" },
  { id: "hate", label: "Ненависть или травля" },
  { id: "adult", label: "Контент для взрослых (18+)" },
  { id: "misinfo", label: "Дезинформация или обман" },
  { id: "other", label: "Другое" },
];

function Ri({ targetType: e, targetId: t, onClose: o, onSubmit: r }) {
  const [s, i] = A(null);
  const [a, c] = A("");
  const [u, l] = A(false);
  const [h, d] = A(null);
  const [f, m] = A(false);

  const N = async () => {
    if (s) {
      l(true);
      d(null);
      try {
        if (r) {
          await r(s, a);
        } else {
          await Ya.createReport({
            targetType: e,
            targetId: t,
            reason: lf[s],
            description: a || undefined,
          });
        }

        m(true);
      } catch (w) {
        console.error("Failed to submit report:", w);

        if (Le(w)) {
          switch (w.code) {
            case Un.CANNOT_REPORT_OWN_CONTENT: {
              d("Вы не можете пожаловаться на свой контент");
              break;
            }
            case Un.ALREADY_REPORTED: {
              d("Вы уже отправляли жалобу на этот контент");
              break;
            }
            case Un.TARGET_NOT_FOUND: {
              d("Контент не найден");
              break;
            }
            case Un.DESCRIPTION_TOO_LONG: {
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
    ? n(nt, {
        onClose: o,
        showHeader: false,
        frameless: false,
        className: Ae.modalReport,
        children: n("div", {
          className: Ae.content,
          children: [
            n("div", {
              className: Ae.successIcon,
              children: n("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "var(--accent-primary)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  n("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                  n("polyline", { points: "22 4 12 14.01 9 11.01" }),
                ],
              }),
            }),
            n("h2", { className: Ae.title, children: "Спасибо за жалобу!" }),
            n("p", {
              className: Ae.subtitle,
              children:
                "Мы рассмотрим вашу жалобу и примем необходимые меры. Вы помогаете сделать сообщество лучше.",
            }),
            n("div", {
              className: Ae.actions,
              children: n(Oe, {
                variant: "primary",
                onClick: (w) => {
                  w.stopPropagation();
                  o();
                },
                children: "Понятно",
              }),
            }),
          ],
        }),
      })
    : n(nt, {
        onClose: o,
        showHeader: false,
        frameless: false,
        className: Ae.modalReport,
        children: n("div", {
          className: Ae.content,
          children: [
            n("h2", { className: Ae.title, children: "Пожаловаться" }),
            n("p", {
              className: Ae.subtitle,
              children: "Выберите причину жалобы",
            }),
            n("div", {
              className: Ae.options,
              children: uf.map((w) =>
                n(
                  "button",
                  {
                    type: "button",
                    className: `${Ae.chip} ${s === w.id ? Ae.chipActive : ""}`,
                    onClick: () => i(w.id),
                    children: [
                      n("span", {
                        className: Ae.radio,
                        children:
                          s === w.id && n("span", { className: Ae.radioDot }),
                      }),
                      w.label,
                    ],
                  },
                  w.id
                )
              ),
            }),
            n("div", {
              className: Ae.detailsSection,
              children: n("textarea", {
                className: Ae.textarea,
                placeholder: "Опишите подробнее (необязательно)...",
                value: a,
                onInput: (w) => c(w.target.value),
                rows: 3,
                maxLength: 1000 /* 1e3 */,
              }),
            }),
            h && n("div", { className: Ae.error, children: h }),
            n("div", {
              className: Ae.actions,
              children: [
                n(Oe, {
                  variant: "secondary",
                  onClick: (w) => {
                    w.stopPropagation();
                    o();
                  },
                  disabled: u,
                  children: "Отмена",
                }),
                n(Oe, {
                  variant: "primary",
                  onClick: (w) => {
                    w.stopPropagation();
                    N();
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
const df = "j8vGlZKp";
const hf = "y5-96lzw";
const ff = "lE9vN8i6";
const mf = "zrN-dIVb";
const pf = "KSS5ucx7";
const gf = "p-q2S5vA";
const vf = "-JVja8g3";
const wf = "HotXXjTO";
const _f = "q4tIq6LX";
const yf = "jG-llYOx";
const Cf = "-nxjJLcz";
const Nf = "FFjif68M";
const Tf = "jTVS0CtG";

const it = {
  userName: df,
  pinBadge: hf,
  text: ff,
  xs: mf,
  sm: pf,
  md: gf,
  lg: vf,
  pinWrapper: wf,
  pinTooltip: _f,
  pinTooltipFadeIn: yf,
  pinTooltipRow: Cf,
  pinTooltipLabel: Nf,
  pinTooltipArrow: Tf,
};

const bf = { xs: 12, sm: 14, md: 16, lg: 22 };
function Mn({ name: e, verified: t, pin: o, size: r = "md", className: s }) {
  const bf_r = bf[r];
  const a = x(null);
  const [c, u] = A(null);

  const l = S(() => {
    if (!a.current) {
      return;
    }
    const d = a.current.getBoundingClientRect();
    u({ x: d.left + d.width / 2, y: d.top });
  }, []);

  const h = S(() => {
    u(null);
  }, []);

  return n("span", {
    className: `${it.userName} ${it[r]} ${s || ""}`,
    children: [
      n("span", { className: it.text, children: e }),
      t && n(Hc, {}),
      o &&
        n("span", {
          ref: a,
          className: it.pinWrapper,
          onMouseEnter: l,
          onMouseLeave: h,
          children: [
            n("img", {
              src: `/assets/pins/${o.slug}.png`,
              alt: o.name,
              className: it.pinBadge,
              width: bf_r,
              height: bf_r,
            }),
            c &&
              Rt(
                n("div", {
                  className: it.pinTooltip,
                  style: { left: `${c.x}px`, top: `${c.y}px` },
                  children: [
                    n("span", {
                      className: it.pinTooltipRow,
                      children: [
                        n("span", {
                          className: it.pinTooltipLabel,
                          children: "Пин:",
                        }),
                        " ",
                        o.name,
                      ],
                    }),
                    o.description &&
                      n("span", {
                        className: it.pinTooltipRow,
                        children: [
                          n("span", {
                            className: it.pinTooltipLabel,
                            children: "Ивент:",
                          }),
                          " ",
                          o.description,
                        ],
                      }),
                    n("span", { className: it.pinTooltipArrow }),
                  ],
                }),
                document.body
              ),
          ],
        }),
    ],
  });
}
const kf = "GOavgVFK";
const Ef = "WsAFjFg1";
const Rf = "luyzBE-G";
const Sf = "LGkNQoga";
const If = "HiaF08Tp";
const Pf = "fjKZASHi";
const xf = "YH0jgs8I";
const Af = "iw-oVKLc";
const Lf = "-L1Z1WbU";

const Ct = {
  repostModal: kf,
  content: Ef,
  title: Rf,
  inputSection: Sf,
  textarea: If,
  originalPost: Pf,
  postHeader: xf,
  postText: Af,
  actions: Lf,
};

function Mf({ post: e, onClose: t, onSuccess: o }) {
  const [r, s] = A("");
  const [i, a] = A(false);

  const c = Ce((l) => l.profile);

  const u = async () => {
    a(true);
    try {
      await We.createRepost(e.id, r.trim() || undefined);
      o?.();
      t();
    } catch (l) {
      console.error("Failed to create repost:", l);
    } finally {
      a(false);
    }
  };

  return n(nt, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: Ct.repostModal,
    children: n("div", {
      className: Ct.content,
      children: [
        n("h2", { className: Ct.title, children: "Репост" }),
        n("div", {
          className: Ct.inputSection,
          children: [
            c && n(ot, { src: c.avatar, alt: c.displayName, size: "sm" }),
            n("textarea", {
              className: Ct.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: r,
              onInput: (l) => s(l.target.value),
              rows: 3,
            }),
          ],
        }),
        n("div", {
          className: Ct.originalPost,
          children: [
            n("div", {
              className: Ct.postHeader,
              children: [
                n(ot, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                n(Mn, {
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            n("p", { className: Ct.postText, children: e.text }),
          ],
        }),
        n("div", {
          className: Ct.actions,
          children: [
            n(Oe, {
              variant: "secondary",
              onClick: (l) => {
                l.stopPropagation();
                t();
              },
              disabled: i,
              children: "Отмена",
            }),
            n(Oe, {
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
const Of = "YUXc-thD";
const $f = "AHlpmYy2";
const Df = "_8tUE-BuY";
const Bf = "RIne2Axl";
const Uf = "qfOKVlyM";
const Ff = "XA7edfAc";
const Hf = "_97G7MW7p";
const Wf = "li-GTJHA";
const Vf = "x0peq7nh";
const jf = "_6pRzoTi7";

const ht = {
  editPostModal: Of,
  form: $f,
  whatsNew: Df,
  editor: Bf,
  actions: Uf,
  mediaButtons: Ff,
  mediaButton: Hf,
  submitGroup: Wf,
  charCount: Vf,
  error: jf,
};

const es = 5000; /* 5e3 */
function zf({ postId: e, initialText: t, initialSpans: o = [] }) {
  const { closeModal: r } = qt();

  const s = me((C) => C.editPost);

  const i = Ce((C) => C.profile);

  const a = vt();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = ao(t, o);

  const [f, m] = A(false);
  const N = es - c.length;
  const w = N < 0;
  const g = c !== t;
  const v = JSON.stringify(u) !== JSON.stringify(o);
  const p = g || v;

  const T = S(
    (C) => {
      d(C.emoji);
    },
    [d]
  );

  const _ = S(async () => {
    if (!(!c.trim() || w || w || !p || w || !p || f)) {
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
  }, [c, u, w, p, f, s, e, r]);

  return n(nt, {
    frameless: true,
    onClose: r,
    className: ht.editPostModal,
    children: n("div", {
      className: ht.form,
      children: [
        n("div", {
          className: ht.whatsNew,
          children: [
            n(ot, { src: i?.avatar ?? "", size: "md" }),
            n(lo, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Что нового?",
              maxLength: es,
              autoFocus: true,
              className: ht.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        n("div", {
          className: ht.actions,
          children: [
            n("div", {
              className: ht.mediaButtons,
              children:
                !a &&
                n(cr, { onEmojiSelect: T, buttonClassName: ht.mediaButton }),
            }),
            n("div", {
              className: ht.submitGroup,
              children: [
                w &&
                  n("span", {
                    className: `${ht.charCount} ${ht.error}`,
                    children: N,
                  }),
                n(Oe, {
                  size: "lg",
                  disabled: !c.trim() || w || w || !p,
                  loading: f,
                  onClick: _,
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

const ts = (e) => Symbol.iterator in e;

const ns = (e) => "entries" in e;

const os = (e, t) => {
  const o = e instanceof Map ? e : new Map(e.entries());
  const r = t instanceof Map ? t : new Map(t.entries());
  if (o.size !== r.size) {
    return false;
  }
  for (const [s, i] of o) {
    if (!r.has(s) || !Object.is(i, r.get(s))) {
      return false;
    }
  }
  return true;
};

const Yf = (e, t) => {
  const o = e[Symbol.iterator]();
  const r = t[Symbol.iterator]();
  let s = o.next();
  let i = r.next();

  while (!s.done && !i.done) {
    if (!Object.is(s.value, i.value)) {
      return false;
    }
    s = o.next();
    i = r.next();
  }

  return !!s.done && !!i.done;
};

function Xf(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : ts(e) && ts(t)
    ? ns(e) && ns(t)
      ? os(e, t)
      : Yf(e, t)
    : os(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function rs(e) {
  const t = vn.useRef(undefined);
  return (o) => {
    const r = e(o);
    return Xf(t.current, r) ? t.current : (t.current = r);
  };
}
const qf = "qW4HNPBu";
const Zf = "tx-JBNZ6";
const Gf = "_033iEEAi";
const Kf = "DNnNfgbz";
const Wn = { commentsModal: qf, header: Zf, title: Gf, content: Kf };
function Jf({ postId: e, onClose: t }) {
  console.log("[CommentsModal] RENDER", { postId: e });
  const o = x(null);

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
  } = me(
    rs((_) => ({
      comments: _.comments,
      commentsLoading: _.commentsLoading,
      commentsLoadingMore: _.commentsLoadingMore,
      commentsHasMore: _.commentsHasMore,
      clearComments: _.clearComments,
      fetchComments: _.fetchComments,
      loadMoreComments: _.loadMoreComments,
      toggleCommentReaction: _.toggleCommentReaction,
      addComment: _.addComment,
    }))
  );

  const { commentsSort: f, setCommentsSort: m } = Qn(
    rs((_) => ({
      commentsSort: _.commentsSort,
      setCommentsSort: _.setCommentsSort,
    }))
  );

  if (o.current !== e) {
    o.current = e;
    c();
  }

  W(() => {
    u(e);
  }, [e, u]);

  const N = S(
    (_) => {
      m(_);
      u(e);
    },
    [m, u, e]
  );

  const w = S(() => {
    if (a && !i) {
      l(e);
    }
  }, [a, i, l, e]);

  const g = S(
    (_, C) => {
      h(_, C ?? "love");
    },
    [h]
  );

  const v = S(
    (_, C) => {
      h(_, C);
    },
    [h]
  );

  const p = S(
    async (_, C, P, k, E, b) => {
      await d(e, _, C, P, b, k, E);
    },
    [d, e]
  );

  const T = S(
    async (_) => {
      const C = `voice_${Date.now()}.webm`;
      const P = new File([_], C, { type: _.type || "audio/webm" });
      const k = await tn.uploadMedia(P);
      await d(e, "", [], undefined, [{ mediaId: k.id }]);
    },
    [d, e]
  );

  return n(nt, {
    frameless: true,
    onClose: t,
    className: Wn.commentsModal,
    children: [
      n("div", {
        className: Wn.header,
        children: n("span", { className: Wn.title, children: "Комментарии" }),
      }),
      n("div", {
        className: Wn.content,
        "data-comments-modal": true,
        children: n(pv, {
          comments: r,
          isLoading: s,
          isLoadingMore: i,
          hasMore: a,
          sort: f,
          onSortChange: N,
          onLikeComment: g,
          onReactionComment: v,
          onAddComment: p,
          onVoiceSend: T,
          onLoadMore: w,
        }),
      }),
    ],
  });
}
const Qf = "QoEaDkke";
const em = "clHkuJ7t";
const tm = "qilC-Ury";
const nm = "_2pYlGMvj";
const Vn = { content: Qf, title: em, subtitle: tm, actions: nm };
function om({ displayName: e, onConfirm: t, onClose: o }) {
  return n(nt, {
    onClose: o,
    showHeader: false,
    children: n("div", {
      className: Vn.content,
      children: [
        n("h2", { className: Vn.title, children: "Отписаться?" }),
        n("p", {
          className: Vn.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            n("strong", { children: e }),
            "?",
          ],
        }),
        n("div", {
          className: Vn.actions,
          children: [
            n(Oe, {
              variant: "secondary",
              onClick: (r) => {
                r.stopPropagation();
                o();
              },
              children: "Отмена",
            }),
            n(Oe, {
              variant: "danger",
              onClick: (r) => {
                r.stopPropagation();
                t();
                o();
              },
              children: "Отписаться",
            }),
          ],
        }),
      ],
    }),
  });
}
const rm = "JtDslUlB";
const sm = "ccJtOIg3";
const im = "jttdPuoT";
const am = "Ik3feOcb";
const cm = "OWIVanqr";
const lm = "ApLgDejC";
const um = "wzYde9CM";
const dm = "jjAXXJME";

const It = {
  underline: rm,
  monospace: sm,
  quote: im,
  spoiler: am,
  revealed: cm,
  link: lm,
  mention: um,
  hashtag: dm,
};

function hm(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function fm(e) {
  if (!hm(e)) {
    return "#";
  }
  const o = new TextEncoder().encode(e);
  const r = String.fromCharCode(...o);
  const s = btoa(r);
  return `/external?url=${encodeURIComponent(s)}`;
}
function Si({ text: e, spans: t = [], className: o = "" }) {
  const [r, s] = A(new Set());

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
        const N = new Set();
        let w;
        let g;
        let v;

        d.forEach((p) => {
          N.add(p.type);

          if (p.type === "link" && p.url) {
            w = p.url;
          }

          if (p.type === "mention" && (p.username || p.id)) {
            g = p.username || p.id;
          }

          if (p.type === "hashtag" && p.tag) {
            v = p.tag;
          }
        });

        l.push({ text: m, styles: N, url: w, mentionId: g, hashtag: v });
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
      u_text = n("strong", { children: u_text });
    }

    if (u.styles.has("italic")) {
      u_text = n("em", { children: u_text });
    }

    if (u.styles.has("underline")) {
      u_text = n("span", { className: It.underline, children: u_text });
    }

    if (u.styles.has("strike")) {
      u_text = n("s", { children: u_text });
    }

    if (u.styles.has("monospace")) {
      u_text = n("code", { className: It.monospace, children: u_text });
    }

    if (u.styles.has("quote")) {
      u_text = n("span", { className: It.quote, children: u_text });
    }

    if (u.styles.has("spoiler")) {
      const d = r.has(l);
      u_text = n("span", {
        className: `${It.spoiler} ${d ? It.revealed : ""}`,
        onClick: (f) => a(f, l),
        children: u_text,
      });
    }

    if (u.styles.has("link") && u.url) {
      const d = fm(u.url);
      u_text = n("a", {
        href: d,
        target: "_blank",
        rel: "noopener noreferrer",
        className: It.link,
        onClick: (f) => f.stopPropagation(),
        children: u_text,
      });
    }
    if (u.styles.has("mention") && u.mentionId) {
      const d = `/@${u.mentionId}`;
      u_text = n("a", {
        href: d,
        className: It.mention,
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
      u_text = n("a", {
        href: d,
        className: It.hashtag,
        onClick: (f) => {
          f.preventDefault();
          f.stopPropagation();
          $(d);
        },
        children: u_text,
      });
    }
    return n("span", { children: u_text }, l);
  };

  return n("span", { className: o, children: i.map((u, l) => c(u, l)) });
}
const mm = "t6dMOE-t";
const pm = "dN7ncPvV";
const gm = "goihPOfy";
const vm = "_3cD3eUbW";
const wm = "SWw4qjFC";
const _m = "J5ZRq4aT";
const ym = "zH6fnEQR";
const Cm = "OzZxDBjs";
const Nm = "r-v5forc";
const Tm = "Azp1k6ER";
const bm = "_8AA-g-Mn";
const km = "aaxVMk0e";
const Em = "QUwLZbFH";
const Rm = "Fub6vefq";
const Sm = "Uvg1jJsO";
const Im = "_9HuwvxSy";
const Pm = "_0-reqUdU";
const xm = "yjejWG8w";
const Am = "rW9UH9FX";
const Lm = "AP0ro9mL";
const Mm = "lc7iFAaZ";
const Om = "D7O8ZJMb";
const $m = "-OyFh6KG";
const Dm = "FVUgQZaF";

const pe = {
  poll: mm,
  disabled: pm,
  header: gm,
  title: vm,
  meta: wm,
  voteCount: _m,
  options: ym,
  option: Cm,
  votingOption: Nm,
  preselected: Tm,
  optionContent: bm,
  voted: km,
  optionProgressWrapper: Em,
  optionProgress: Rm,
  optionContentInverted: Sm,
  optionText: Im,
  optionPercent: Pm,
  optionProgressSimple: xm,
  checkmark: Am,
  checkbox: Lm,
  checkboxChecked: Mm,
  submitBtn: Om,
  footer: $m,
  revoteBtn: Dm,
};

function Bm({
  title: e,
  options: t,
  totalVotes: o,
  voted: r = false,
  selectedOptionId: s = null,
  selectedOptionIds: i = [],
  multipleChoice: a = false,
  onVote: c,
  onVoteMultiple: u,
  className: l,
  disabled: h = false,
}) {
  const [d, f] = A(r);

  const [m, N] = A(() =>
    i.length > 0 ? new Set(i) : s ? new Set([s]) : new Set()
  );

  const [w, g] = A(o);
  const [v, p] = A(t);
  const [T, _] = A(r);
  const [C, P] = A(false);
  const [k, E] = A(new Map());
  const b = x(new Map());

  const M = t.map((z) => `${z.id}:${z.votes}`).join(",");

  W(() => {
    p(t);
    g(o);
    f(r);

    if (i.length > 0) {
      N(new Set(i));
    } else {
      N(s ? new Set([s]) : new Set());
    }

    if (r && !C) {
      _(true);
    }
  }, [M, o, r, s, i.join(",")]);

  W(() => {
    if (r && b.current.size > 0) {
      const z = new Map();

      b.current.forEach((F, q) => {
        z.set(q, F.offsetWidth);
      });

      E(z);
    }
  }, [r]);

  const y = d && !C;

  const B = S(
    (z) => {
      if (h || y) {
        return;
      }
      if (a) {
        N((U) => {
          const $ = new Set(U);

          if ($.has(z)) {
            $.delete(z);
          } else {
            $.add(z);
          }

          return $;
        });
        return;
      }
      const F = m.size > 0 ? Array.from(m)[0] : null;

      p((U) =>
        U.map(($) =>
          $.id === z
            ? { ...$, votes: $.votes + 1 }
            : $.id === F
            ? { ...$, votes: Math.max(0, $.votes - 1) }
            : $
        )
      );

      if (!d) {
        g((U) => U + 1);
      }

      N(new Set([z]));
      f(true);
      P(false);
      const q = c?.(z);

      if (q && typeof q.then == "function") {
        q.then((U) => {
          if (U) {
            X(U);
          }
        });
      }

      oe();
    },
    [h, y, a, m, d, c]
  );

  const D = S(() => {
    if (m.size === 0) {
      return;
    }
    const z = Array.from(m);

    p((q) =>
      q.map((U) => (z.includes(U.id) ? { ...U, votes: U.votes + 1 } : U))
    );

    if (!d) {
      g((q) => q + 1);
    }

    f(true);
    P(false);
    const F = u?.(z);

    if (F && typeof F.then == "function") {
      F.then((q) => {
        if (q) {
          X(q);
        }
      });
    }

    oe();
  }, [m, d, u]);

  const X = (z) => {
    const F = (z.options ?? []).map((q) => ({
      id: q.id,
      text: q.text,
      votes: q.votesCount ?? q.voteCount ?? q.votes ?? 0,
    }));
    p(F);
    g(z.totalVotes ?? 0);

    if (z.votedOptionIds && z.votedOptionIds.length > 0) {
      N(new Set(z.votedOptionIds));
    }
  };

  const oe = () => {
    requestAnimationFrame(() => {
      const z = new Map();

      b.current.forEach((F, q) => {
        z.set(q, F.offsetWidth);
      });

      E(z);

      requestAnimationFrame(() => {
        _(true);
      });
    });
  };

  const K = () => {
    P(true);
    _(false);
  };

  const Y = () => {
    P(false);
    _(true);
  };

  const j = (z) => (w === 0 ? 0 : Math.round((z / w) * 100));

  const G = (z) =>
    z === 1 ? "1 голос" : z >= 2 && z <= 4 ? `${z} голоса` : `${z} голосов`;

  const re = (z) => {
    z.stopPropagation();
  };

  return n("div", {
    className: `${pe.poll} ${h ? pe.disabled : ""} ${l || ""}`,
    onClick: re,
    children: [
      n("div", {
        className: pe.header,
        children: [
          n("span", { className: pe.title, children: e }),
          d &&
            n("div", {
              className: pe.meta,
              children: n("span", { className: pe.voteCount, children: G(w) }),
            }),
        ],
      }),
      n("div", {
        className: pe.options,
        children: v.map((z) => {
          const F = j(z.votes);
          const q = m.has(z.id);
          const U = T ? `${F}%` : "0%";
          const $ =
            k.get(z.id) ||
            b.current.get(z.id)?.offsetWidth ||
            b.current.get(z.id)?.offsetWidth ||
            0;
          return y
            ? n(
                "div",
                {
                  ref: (V) => {
                    if (V) {
                      b.current.set(z.id, V);
                    }
                  },
                  className: `${pe.option} ${pe.voted} ${q ? pe.selected : ""}`,
                  children: [
                    n("div", {
                      className: pe.optionContent,
                      children: [
                        n("span", {
                          className: pe.optionText,
                          children: [
                            q &&
                              n("span", {
                                className: pe.checkmark,
                                children: "✓ ",
                              }),
                            z.text,
                          ],
                        }),
                        n("span", {
                          className: pe.optionPercent,
                          children: [F, "%"],
                        }),
                      ],
                    }),
                    q &&
                      n("div", {
                        className: pe.optionProgressWrapper,
                        style: { width: U },
                        children: [
                          n("div", { className: pe.optionProgress }),
                          n("div", {
                            className: pe.optionContentInverted,
                            style: { width: `${$}px` },
                            children: [
                              n("span", {
                                className: pe.optionText,
                                children: [
                                  n("span", {
                                    className: pe.checkmark,
                                    children: "✓ ",
                                  }),
                                  z.text,
                                ],
                              }),
                              n("span", {
                                className: pe.optionPercent,
                                children: [F, "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    !q &&
                      n("div", {
                        className: pe.optionProgressSimple,
                        style: { width: U },
                      }),
                  ],
                },
                z.id
              )
            : n(
                "div",
                {
                  ref: (V) => {
                    if (V) {
                      b.current.set(z.id, V);
                    }
                  },
                  className: `${pe.option} ${pe.votingOption} ${
                    q ? pe.preselected : ""
                  }`,
                  onClick: () => B(z.id),
                  children: n("div", {
                    className: pe.optionContent,
                    children: [
                      a &&
                        n("span", {
                          className: `${pe.checkbox} ${
                            q ? pe.checkboxChecked : ""
                          }`,
                          children: q && "✓",
                        }),
                      n("span", { className: pe.optionText, children: z.text }),
                    ],
                  }),
                },
                z.id
              );
        }),
      }),
      a &&
        !d &&
        m.size > 0 &&
        !C &&
        n("button", {
          className: pe.submitBtn,
          onClick: D,
          type: "button",
          children: "Проголосовать",
        }),
      d &&
        n("div", {
          className: pe.footer,
          children: C
            ? n(Te, {
                children: [
                  a &&
                    m.size > 0 &&
                    n("button", {
                      className: pe.submitBtn,
                      onClick: D,
                      type: "button",
                      children: "Проголосовать",
                    }),
                  n("button", {
                    className: pe.revoteBtn,
                    onClick: Y,
                    type: "button",
                    children: "Отмена",
                  }),
                ],
              })
            : n("button", {
                className: pe.revoteBtn,
                onClick: K,
                type: "button",
                children: "Изменить голос",
              }),
        }),
    ],
  });
}
const Um = "zRX0j4Tr";
const Fm = "_3HYi31vZ";
const Hm = "sgbXxBQt";
const Wm = "GyS5v2h6";
const Vm = "HxhHv5PS";
const jm = "HhzGlfqd";
const zm = "bQ6-MeS1";
const Ym = "QCLZpkig";
const Xm = "WIOo5dNL";

const Nt = {
  dropdownWrapper: Um,
  trigger: Fm,
  menu: Hm,
  hidden: Wm,
  menuItem: Vm,
  danger: jm,
  itemIcon: zm,
  itemLabel: Ym,
  divider: Xm,
};

function Ii({
  trigger: e,
  items: t,
  position: o = "bottom-right",
  dividerAfter: r = [],
  className: s,
}) {
  const [i, a] = A(false);
  const [c, u] = A(false);
  const [l, h] = A({ top: 0, left: 0 });
  const d = x(null);
  const f = x(null);

  const m = S(() => {
    if (!d.current) {
      return;
    }
    const v = d.current.getBoundingClientRect();
    const p = f.current?.offsetHeight || 150;
    const T = f.current?.offsetWidth || 160;
    let _ = 0;
    let C = 0;

    if (o.startsWith("bottom")) {
      _ = v.bottom + 4;
    } else {
      _ = v.top - p - 4;
    }

    if (o.endsWith("right")) {
      C = v.right - T;
    } else {
      C = v.left;
    }

    const { innerWidth, innerHeight } = window;

    if (C + T > innerWidth) {
      C = innerWidth - T - 8;
    }

    if (C < 8) {
      C = 8;
    }

    if (_ + p > innerHeight) {
      _ = v.top - p - 4;
    }

    if (_ < 8) {
      _ = v.bottom + 4;
    }

    h({ top: _, left: C });
    u(true);
  }, [o]);

  const N = S((v) => {
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

  W(() => {
    if (i) {
      m();
      document.addEventListener("mousedown", N);
      window.addEventListener("scroll", m, true);
      window.addEventListener("resize", m);

      return () => {
        document.removeEventListener("mousedown", N);
        window.removeEventListener("scroll", m, true);
        window.removeEventListener("resize", m);
      };
    }
  }, [i, N, m]);

  const w = (v) => {
    v.stopPropagation();

    if (i) {
      a(false);
      u(false);
    } else {
      a(true);
    }
  };

  const g = (v, p) => {
    v.stopPropagation();
    p.onClick();
    a(false);
    u(false);
  };

  return n("div", {
    className: `${Nt.dropdownWrapper} ${s || ""}`,
    children: [
      n("div", { ref: d, className: Nt.trigger, onClick: w, children: e }),
      i &&
        Rt(
          n("div", {
            ref: f,
            className: `${Nt.menu} ${c ? "" : Nt.hidden}`,
            style: { top: l.top, left: l.left },
            children: t.map((v, p) =>
              n(
                "div",
                {
                  children: [
                    n("button", {
                      type: "button",
                      className: `${Nt.menuItem} ${v.danger ? Nt.danger : ""}`,
                      onClick: (T) => g(T, v),
                      children: [
                        v.icon &&
                          n("span", {
                            className: Nt.itemIcon,
                            children: v.icon,
                          }),
                        n("span", {
                          className: Nt.itemLabel,
                          children: v.label,
                        }),
                      ],
                    }),
                    r.includes(v.id) &&
                      p < t.length - 1 &&
                      n("div", { className: Nt.divider }),
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
const qm = "LGbsLd3i";
const Zm = "I1XzQEdO";
const ss = { hint: qm, arrow: Zm };
function Ho({ text: e, children: t, className: o }) {
  const r = x(null);
  const [s, i] = A(null);

  const a = S(() => {
    if (!r.current) {
      return;
    }
    const l = r.current.getBoundingClientRect();
    i({ x: l.left + l.width / 2, y: l.top });
  }, []);

  const c = S(() => {
    i(null);
  }, []);

  const u = S(
    (l) => {
      l.stopPropagation();

      if (s) {
        c();
      } else {
        a();
      }
    },
    [s, a, c]
  );

  W(() => {
    if (!s) {
      return;
    }
    const l = (h) => {
      if (r.current && !r.current.contains(h.target)) {
        c();
      }
    };
    document.addEventListener("touchstart", l);
    document.addEventListener("mousedown", l);
    window.addEventListener("scroll", c, true);

    return () => {
      document.removeEventListener("touchstart", l);
      document.removeEventListener("mousedown", l);
      window.removeEventListener("scroll", c, true);
    };
  }, [s, c]);

  return n("span", {
    ref: r,
    className: o,
    onMouseEnter: a,
    onMouseLeave: c,
    onClick: u,
    children: [
      t,
      s &&
        Rt(
          n("div", {
            className: ss.hint,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, n("span", { className: ss.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const Gm = "oAyquNjM";
const Km = "cGo-pqMK";
const Jm = "abh-IRfe";
const Qm = "_3UMrcwJw";
const ep = "MtmuinE5";
const tp = "OHOBvjSN";
const np = "vPid2PoY";
const op = "ShSUtrj1";

const Pt = {
  header: Gm,
  headerMain: Km,
  moreDropdown: Jm,
  pinnedBadge: Qm,
  authorInfo: ep,
  authorLink: tp,
  time: np,
  edited: op,
};

function rp({
  author: e,
  createdAt: t,
  editedAt: o,
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
  const f = ri(t);

  const m = Ce((p) => p.profile?.id);

  const N = e.id === m;
  const w = 2880 * 60 * 1000; /* 1e3 */
  const g = N && Date.now() - new Date(t).getTime() < w;

  const v = Ne(() => {
    const p = [];

    p.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: n(ai, { size: 16 }),
      onClick: () => d?.(r),
    });

    if (g) {
      p.push({
        id: "edit",
        label: "Редактировать",
        icon: n(ci, { size: 16 }),
        onClick: () => u?.(r),
      });
    }

    if (i) {
      p.push({
        id: "pin",
        label: a ? "Открепить" : "Закрепить",
        icon: n(jr, { size: 16 }),
        onClick: () => h?.(r),
      });
    }

    if (N || i) {
      p.push({
        id: "delete",
        label: "Удалить",
        icon: n(vi, { size: 16 }),
        danger: true,
        onClick: () => l?.(r),
      });
    }

    if (!N) {
      p.push({
        id: "report",
        label: "Пожаловаться",
        icon: n(ui, { size: 16 }),
        danger: true,
        onClick: () => c?.(r),
      });
    }

    return p;
  }, [N, g, i, a, r, u, l, h, c, d]);

  return n("header", {
    className: Pt.header,
    children: [
      a &&
        n("div", {
          className: Pt.pinnedBadge,
          children: [
            n(jr, { size: 14 }),
            n("span", { children: "Закреплённый пост" }),
          ],
        }),
      n("div", {
        className: Pt.headerMain,
        children: [
          s &&
            n("a", {
              href: `/@${e.username}`,
              children: n(ot, {
                src: e.avatar,
                alt: e.displayName,
                size: "sm",
                online: e.online,
              }),
            }),
          n("div", {
            className: Pt.authorInfo,
            children: [
              n("a", {
                href: `/@${e.username}`,
                className: Pt.authorLink,
                children: n(Mn, {
                  name: e.displayName,
                  verified: e.isVerified,
                  pin: e.pin,
                  size: "sm",
                }),
              }),
              n("time", {
                dateTime: t,
                className: Pt.time,
                children: [
                  f,
                  o &&
                    n(Ho, {
                      text: new Date(o).toLocaleString("ru-RU"),
                      children: n("span", {
                        className: Pt.edited,
                        children: " (ред.)",
                      }),
                    }),
                ],
              }),
            ],
          }),
          n(Ii, {
            trigger: n(hi, { size: 18 }),
            items: v,
            position: "bottom-right",
            className: Pt.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
function Pi(e, t, o) {
  const { isVisible: r, isRevealing: s, onRevealComplete: i } = o;
  const a = x([]);
  const c = x(null);
  const u = x(null);
  const l = x({ width: 0, height: 0 });
  const h = x(1);

  const d = S((w, g) => {
    const v = Math.random() * 80 + 60;
    return {
      x: Math.random() * w,
      y: Math.random() * g,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * v,
      maxLife: v,
    };
  }, []);

  const f = S(
    (w, g) => {
      const v = Math.floor((w * g) / 600);
      const p = [];
      for (let T = 0; T < v; T++) {
        p.push(d(w, g));
      }
      a.current = p;
    },
    [d]
  );

  const m = S(() => {
    const e_current = e.current;
    const t_current = t.current;
    if (!e_current || !t_current) {
      return;
    }
    const v = t_current.getBoundingClientRect();
    if (v.width === 0 || v.height === 0) {
      return;
    }
    const p = window.devicePixelRatio || 1;
    if (l.current.width !== v.width || l.current.height !== v.height) {
      l.current = { width: v.width, height: v.height };
      e_current.width = v.width * p;
      e_current.height = v.height * p;
      e_current.style.width = `${v.width}px`;
      e_current.style.height = `${v.height}px`;
      const T = e_current.getContext("2d");

      if (T) {
        T.setTransform(p, 0, 0, p, 0, 0);
        u.current = T;
      }

      f(v.width, v.height);
    }
  }, [e, t, f]);

  const N = S(() => {
    h.current = 1;
  }, []);

  W(() => {
    if (!r) {
      if (c.current) {
        cancelAnimationFrame(c.current);
        c.current = null;
      }

      return;
    }
    m();
    const w = () => {
      const u_current = u.current;
      const { width: v, height: p } = l.current;
      if (!u_current || v === 0 || v === 0 || p === 0) {
        c.current = requestAnimationFrame(w);
        return;
      }
      if (s && ((h.current -= 0.05), h.current <= 0)) {
        i();
        return;
      }
      u_current.clearRect(0, 0, v, p);

      a.current.forEach((T, _) => {
        T.x += T.speedX;
        T.y += T.speedY;
        T.life--;

        if (T.x < 0) {
          T.x = v;
        }

        if (T.x > v) {
          T.x = 0;
        }

        if (T.y < 0) {
          T.y = p;
        }

        if (T.y > p) {
          T.y = 0;
        }

        if (T.life <= 0) {
          a.current[_] = d(v, p);
          return;
        }

        const C = T.life / T.maxLife;
        const P = C < 0.3 ? C / 0.3 : 1;
        const k = T.opacity * P * h.current;
        u_current.beginPath();
        u_current.arc(T.x, T.y, T.size, 0, Math.PI * 2);
        u_current.fillStyle = `rgba(255, 255, 255, ${k})`;
        u_current.fill();
      });

      c.current = requestAnimationFrame(w);
    };
    c.current = requestAnimationFrame(w);
    window.addEventListener("resize", m);

    return () => {
      if (c.current) {
        cancelAnimationFrame(c.current);
      }

      window.removeEventListener("resize", m);
    };
  }, [r, s, d, m, i]);

  return { resetOpacity: N };
}
const sp = "_2Gc4qhOv";
const ip = "UY9OONTU";
const ap = "_0IkXVI0s";
const cp = "-LecVcA9";
const lp = "I1O3wwfn";
const mn = { container: sp, hidden: ip, image: ap, revealing: cp, canvas: lp };
const is = 5;
function up({
  src: e,
  alt: t = "",
  spoiler: o = false,
  width: r,
  height: s,
  className: i = "",
  onClick: a,
}) {
  const [c, u] = A(!o);
  const [l, h] = A(false);
  const [d, f] = A(false);
  const m = x(null);
  const N = x(null);
  const w = x(null);
  const g = x(false);

  const { resetOpacity: v } = Pi(m, N, {
    isVisible: d && !c && o,
    isRevealing: l,
    onRevealComplete: () => u(true),
  });

  W(() => {
    const N_current = N.current;
    if (!N_current) {
      return;
    }
    const E = new IntersectionObserver(
      (b) => {
        b.forEach((M) => {
          f(M.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    E.observe(N_current);

    return () => {
      E.disconnect();
    };
  }, []);

  const p = (k) => {
    w.current = { x: k.clientX, y: k.clientY };
    g.current = false;
  };

  const T = (k) => {
    if (!w.current) {
      return;
    }
    const E = Math.abs(k.clientX - w.current.x);
    const b = Math.abs(k.clientY - w.current.y);

    if (E > is || b > is) {
      g.current = true;
    }
  };

  const _ = (k) => {
    if (g.current) {
      g.current = false;
      k.stopPropagation();
      return;
    }

    if (!c && !l && o) {
      k.stopPropagation();
      h(true);
      v();
    } else if (a) {
      a(k);
    }
  };

  const C = !c && o;
  const P = r && s ? { aspectRatio: `${r} / ${s}` } : undefined;
  return o
    ? n("div", {
        ref: N,
        className: `${mn.container} ${i} ${C ? mn.hidden : ""} ${
          l ? mn.revealing : ""
        }`,
        style: P,
        onPointerDown: p,
        onPointerMove: T,
        onClick: _,
        children: [
          n("img", {
            src: e,
            alt: t,
            className: mn.image,
            loading: "lazy",
            width: r,
            height: s,
            draggable: false,
          }),
          C && n("canvas", { ref: m, className: mn.canvas }),
        ],
      })
    : n("img", {
        src: e,
        alt: t,
        className: i,
        loading: "lazy",
        draggable: false,
        onClick: a,
      });
}
const dp = "_7OM9isQp";
const hp = "tOcLl5Fe";
const fp = "K6pRPvna";
const mp = "W7spdM5t";
const pp = "_-2wZA6Y1";
const gp = "eelWZWVN";

const en = {
  container: dp,
  hidden: hp,
  video: fp,
  revealing: mp,
  canvas: pp,
  duration: gp,
};

function vp(e) {
  const t = Math.floor(e / 60);
  const o = e % 60;
  return `${t}:${o.toString().padStart(2, "0")}`;
}
function wp({
  src: e,
  spoiler: t = false,
  width: o,
  height: r,
  duration: s,
  className: i = "",
}) {
  const a = x(null);
  const c = x(null);
  const u = x(null);
  const [l, h] = A(!t);
  const [d, f] = A(false);
  const [m, N] = A(false);

  const { resetOpacity: w } = Pi(u, c, {
    isVisible: m && !l && t,
    isRevealing: d,
    onRevealComplete: () => h(true),
  });

  W(() => {
    const c_current = c.current;
    if (!c_current) {
      return;
    }
    const _ = new IntersectionObserver(
      (C) => {
        C.forEach((P) => {
          N(P.isIntersecting);

          if (!P.isIntersecting && a.current) {
            a.current.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    _.observe(c_current);

    return () => _.disconnect();
  }, []);

  const g = (T) => {
    T.stopPropagation();

    if (!l && !d && t) {
      f(true);
      w();
      return;
    }
  };

  const v = !l && t;
  const p = o && r ? { aspectRatio: `${o} / ${r}` } : undefined;
  return n("div", {
    ref: c,
    className: `${en.container} ${i} ${v ? en.hidden : ""} ${
      d ? en.revealing : ""
    }`,
    style: p,
    onClick: g,
    children: [
      n("video", {
        ref: a,
        src: e,
        controls: l || !t,
        preload: "metadata",
        playsInline: true,
        className: en.video,
        width: o,
        height: r,
      }),
      s != null && n("div", { className: en.duration, children: vp(s) }),
      v && n("canvas", { ref: u, className: en.canvas }),
    ],
  });
}
const _p = "l4cwyAPN";
const yp = "qlCZ-7Jf";
const Cp = "_4vGEh5tJ";
const Np = "awFKBPHw";
const Tp = "_0vEjHxry";
const ft = { mediaWrapper: _p, isFeed: yp, media: Cp, dragging: Np, image: Tp };
const bp = 5;
const kp = 0.95;
const bo = 0.5;
function lr({ media: e, isFeed: t = false }) {
  const o = e?.filter((k) => k.type === "image") ?? [];

  const r = e?.filter((k) => k.type === "video") ?? [];

  const s = x(null);

  const i = Js((k) => k.open);

  const a = x(false);
  const c = x(0);
  const u = x(0);
  const l = x(false);
  const h = x(0);
  const d = x(0);
  const f = x(0);
  const m = x(null);

  const N = () => {
    if (m.current) {
      cancelAnimationFrame(m.current);
      m.current = null;
    }
  };

  const w = () => {
    const s_current = s.current;
    if (s_current) {
      f.current *= kp;

      if (Math.abs(f.current) < bo) {
        N();
        return;
      }

      s_current.scrollLeft += f.current;
      m.current = requestAnimationFrame(w);
    }
  };

  const g = (k) => {
    const s_current = s.current;

    if (s_current && o.length + r.length > 1) {
      if (o.length + r.length > 1) {
        N();
        a.current = true;
        s_current.classList.add(ft.dragging);
        c.current = k.clientX;
        h.current = k.clientX;
        d.current = Date.now();
        u.current = s_current.scrollLeft;
        l.current = false;
        f.current = 0;
        k.preventDefault();
      }
    }
  };

  const v = (k) => {
    if (!a.current) {
      return;
    }
    const s_current = s.current;
    if (!s_current) {
      return;
    }
    const b = Date.now();
    const M = k.clientX - c.current;
    const y = k.clientX - h.current;
    const B = b - d.current;

    if (Math.abs(M) > bp) {
      l.current = true;
    }

    if (B > 0) {
      f.current = (-y / B) * 16;
    }

    h.current = k.clientX;
    d.current = b;
    s_current.scrollLeft = u.current - M;
  };

  const p = () => {
    if (a.current && Math.abs(f.current) > bo) {
      w();
    }

    a.current = false;
    s.current?.classList.remove(ft.dragging);
  };

  const T = () => {
    if (a.current) {
      Math.abs(f.current) > bo && w();
      a.current = false;
      s.current?.classList.remove(ft.dragging);
    }
  };

  W(
    () => () => {
      N();
      s.current?.classList.remove(ft.dragging);
    },
    []
  );

  const _ = (k, E) => {
    if (l.current) {
      l.current = false;
      E.stopPropagation();
      return;
    }
    i(
      o.map((b) => ({
        id: b.id,
        url: b.url,
        width: b.width || 800,
        height: b.height || 600,
      })),
      k
    );
  };

  const C = (k) => {
    k.stopPropagation();
    l.current = false;
  };

  if (o.length === 0 && r.length === 0) {
    return null;
  }
  const P = o.length + r.length;
  return n("div", {
    className: `${ft.mediaWrapper} ${t ? ft.isFeed : ""}`,
    "data-count": P,
    children: n("div", {
      ref: s,
      className: `${ft.media} ${t ? ft.isFeed : ""}`,
      "data-count": P,
      onClick: C,
      onMouseDown: g,
      onMouseMove: v,
      onMouseUp: p,
      onMouseLeave: T,
      children: [
        r.map((k) =>
          n(
            wp,
            {
              src: k.url,
              spoiler: k.spoiler,
              width: k.width,
              height: k.height,
              duration: k.duration,
              className: ft.image,
            },
            k.id
          )
        ),
        o.map((k, E) =>
          n(
            up,
            {
              src: k.url,
              spoiler: k.spoiler,
              width: k.width,
              height: k.height,
              className: ft.image,
              onClick: (b) => _(E, b),
            },
            k.id
          )
        ),
      ],
    }),
  });
}
const Ep = "Pc3ZwYUA";
const Rp = "uXiMWdXs";
const Sp = "_92KcEhCb";
const Ip = "A5HN458Y";
const Pp = "kVjrCCJb";
const xp = "WIU3w8vr";
const Ap = "sxXVgu6K";

const Ut = {
  counter: Ep,
  digit: Rp,
  prev: Sp,
  current: Ip,
  animating: Pp,
  up: xp,
  down: Ap,
};

function Lp(e) {
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
function wn({ value: e }) {
  const t = Lp(e);
  const o = x(e);
  const r = x(t.length);
  const s = x(Date.now());

  const [i, a] = A(() =>
    t.split("").map((d, f) => ({
      char: d,
      prevChar: d,
      isAnimating: false,
      key: f,
    }))
  );

  const [c, u] = A(null);

  W(() => {
    if (Date.now() - s.current < 100) {
      o.current = e;
      return;
    }
    if (e === o.current) {
      return;
    }
    const f = e > o.current ? "up" : "down";
    u(f);
    o.current = e;
    const m = t.split("");

    const N = i.map((_) => _.char);

    const w = Math.max(m.length, N.length);
    const g = N.join("").padStart(w, " ").split("");

    const p = m
      .join("")
      .padStart(w, " ")
      .split("")
      .map((_, C) => {
        const P = g[C] || " ";
        const k = i[C - (w - i.length)];
        return _ !== P
          ? (r.current++,
            { char: _, prevChar: P, isAnimating: true, key: r.current })
          : { char: _, prevChar: _, isAnimating: false, key: k?.key ?? C };
      })
      .filter((_) => _.char !== " " || _.isAnimating);

    a(p);
    const T = setTimeout(() => {
      a((_) =>
        _.map((C) => ({
          ...C,
          isAnimating: false,
        }))
      );

      u(null);
    }, 300);
    return () => clearTimeout(T);
  }, [e]);

  if (!i.some((d) => d.isAnimating)) {
    return n("span", { children: t });
  }

  const h = c === "up" ? Ut.up : c === "down" ? Ut.down : "";
  return n("span", {
    className: Ut.counter,
    children: i.map((d) =>
      d.isAnimating
        ? n(
            "span",
            {
              className: `${Ut.digit} ${Ut.animating} ${h}`,
              children: [
                n("span", { className: Ut.prev, children: d.prevChar }),
                n("span", { className: Ut.current, children: d.char }),
              ],
            },
            d.key
          )
        : n("span", { children: d.char }, d.key)
    ),
  });
}
const Mp = "QnwlJ0JI";
const Op = "_4ZjoCms2";
const $p = "aMkvCscU";
const Dp = "lgOmJE17";
const Bp = "luVObdSy";
const Up = "Rezs30lQ";
const Fp = "_8wD0dR85";
const Hp = "z-xpwcRG";
const Wp = "DecvAv-7";
const Vp = "VRuv-fcD";
const jp = "lo4NvVKr";
const zp = "eJzh56H-";
const Yp = "giKCW-y7";

const Fe = {
  actions: Mp,
  actionsLeft: Op,
  action: $p,
  views: Dp,
  liked: Bp,
  reposted: Up,
  disabled: Fp,
  reactionWrapper: Hp,
  actionsRight: Wp,
  captured: Vp,
  capturedEmoji: jp,
  capturedText: zp,
  capturedMobile: Yp,
};

function Xp({
  liked: e,
  reposted: t,
  likesCount: o,
  repostsCount: r,
  commentsCount: s,
  viewsCount: i,
  dominantEmoji: a,
  onLike: c,
  onRepost: u,
  onComment: l,
  disableRepost: h = false,
}) {
  return n("footer", {
    className: Fe.actions,
    children: [
      n("div", {
        className: Fe.actionsLeft,
        children: [
          n("div", {
            className: Fe.reactionWrapper,
            onClick: (d) => d.stopPropagation(),
            children: n("button", {
              className: `${Fe.action} ${e ? Fe.liked : ""}`,
              onClick: (d) => {
                d.stopPropagation();
                c();
              },
              "aria-label": "Нравится",
              children: [
                n(co, { filled: e }, e ? "liked" : "not-liked"),
                n(wn, { value: o }),
              ],
            }),
          }),
          n("button", {
            className: Fe.action,
            onClick: (d) => {
              d.stopPropagation();
              l();
            },
            "aria-label": "Комментировать",
            children: [n(nr, {}), n(wn, { value: s })],
          }),
          n("button", {
            className: `${Fe.action} ${t ? Fe.reposted : ""} ${
              h ? Fe.disabled : ""
            }`,
            onClick: (d) => {
              d.stopPropagation();

              if (!h) {
                u();
              }
            },
            disabled: h,
            "aria-label": "Репост",
            children: [n(no, {}), n(wn, { value: r })],
          }),
        ],
      }),
      n("div", {
        className: Fe.actionsRight,
        children: [
          a &&
            n(Te, {
              children: [
                n(Ho, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Fe.captured,
                  children: [
                    n("span", { className: Fe.capturedEmoji, children: a }),
                    n("span", {
                      className: Fe.capturedText,
                      children: "Пост захвачен",
                    }),
                  ],
                }),
                n(Ho, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Fe.capturedMobile,
                  children: n("span", { children: a }),
                }),
              ],
            }),
          n("span", {
            className: Fe.views,
            children: [n(wi, {}), n(wn, { value: i })],
          }),
        ],
      }),
    ],
  });
}
const qp = "FdYjPIR3";
const Zp = "MRPN0AlG";
const Gp = "gVTZJXUf";
const Kp = "PpDQ-7eT";
const Jp = "f-Ewjbkv";
const Qp = "qYj6ku6f";
const e0 = "YmQiahvA";
const t0 = "_4sEs40kd";
const n0 = "QflhaLOr";
const o0 = "_8yAtdePh";
const r0 = "Q0BBb0GB";
const s0 = "LVT25SUb";
const i0 = "_2QopExez";
const a0 = "GWyTusR8";
const c0 = "uA48J3e0";
const l0 = "L9fW2zD6";

const Me = {
  post: qp,
  postInner: Zp,
  isFeed: Gp,
  postContent: Kp,
  postBody: Jp,
  textWrapper: Qp,
  text: e0,
  collapsed: t0,
  expandButton: n0,
  originalPost: o0,
  originalPostHeader: r0,
  originalPostTime: s0,
  originalPostText: i0,
  originalPostMedia: a0,
  originalPostStats: c0,
  originalPostStat: l0,
};

function jn(e) {
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
function u0(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function d0({ attachments: e }) {
  const t = Ne(() => ro(e), [e]);
  return (
    t.length === 0 ||
    n("div", {
      className: Me.originalPostMedia,
      children: n(lr, { media: t }),
    })
  );
}
function h0({ originalPost: e }) {
  const t = u0(e.createdAt);

  const o = S(
    (r) => {
      r.stopPropagation();
      const s = e.author.username ?? e.author.id;
      $(`/@${s}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id]
  );

  return n("div", {
    className: Me.originalPost,
    onClick: o,
    children: [
      n("div", {
        className: Me.originalPostHeader,
        children: [
          n(no, { size: 14 }),
          n(ot, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          n(Mn, {
            name: e.author.displayName,
            verified: e.author.isVerified,
            pin: e.author.pin,
            size: "xs",
          }),
          n("span", { className: Me.originalPostTime, children: t }),
        ],
      }),
      e.text && n("div", { className: Me.originalPostText, children: e.text }),
      e.attachments &&
        e.attachments.length > 0 &&
        n(d0, { attachments: e.attachments }),
      n("div", {
        className: Me.originalPostStats,
        children: [
          n("span", {
            className: Me.originalPostStat,
            children: [n(co, { size: 16 }), jn(e.reactions?.total ?? 0)],
          }),
          n("span", {
            className: Me.originalPostStat,
            children: [n(nr, { size: 16 }), jn(e.stats?.comments ?? 0)],
          }),
          n("span", {
            className: Me.originalPostStat,
            children: [n(no, { size: 16 }), jn(e.stats?.reposts ?? 0)],
          }),
          n("span", {
            className: Me.originalPostStat,
            children: [n(wi, { size: 16 }), jn(e.stats?.views ?? 0)],
          }),
        ],
      }),
    ],
  });
}
const f0 = "cZnuRugG";
const m0 = "gXPlO0SF";
const p0 = "yfGqJGgk";
const g0 = "a3a8DYnF";
const v0 = "Zm7GdliE";
const w0 = "x-TM77c0";
const _0 = "vqhGsmVx";
const y0 = "wXZfEkKN";
const C0 = "C4SARhpg";
const N0 = "epV7SM-L";
const T0 = "Bkxq4G-V";
const b0 = "M1orzhg7";
const k0 = "VQtopWsI";
const E0 = "vI-SLgZ3";
const R0 = "hWCpL6Hf";
const S0 = "WAYqGGYB";
const I0 = "OWLYzJZs";
const P0 = "P15SrtYp";
const x0 = "y-9i4poD";
const A0 = "qTvjpE7N";
const L0 = "rKM-vAOv";

const Se = {
  commentInput: f0,
  replyMode: m0,
  inputRow: p0,
  attachmentStrip: g0,
  circleButton: v0,
  micButton: w0,
  sendButton: _0,
  submitting: y0,
  textareaContainer: C0,
  expanded: N0,
  voiceMode: T0,
  inputWrapper: b0,
  commentCharCount: k0,
  error: E0,
  input: R0,
  replyHeader: S0,
  replyText: I0,
  replyName: P0,
  replyClose: x0,
  dragActive: A0,
  dragOverlay: L0,
};

const M0 = "_2mmgs8Ne";
const O0 = "WFxp3J8v";
const $0 = "abwLbpfW";
const ko = { textInput: M0, entering: O0, sendButton: $0 };
const D0 = 1000; /* 1e3 */
function B0({
  text: e,
  spans: t,
  onChange: o,
  placeholder: r,
  onSubmit: s,
  isEntering: i,
  autoFocus: a,
  isSubmitting: c,
  sendDisabled: u,
  onImagePaste: l,
}) {
  const h = D0 - e.length;
  const d = h < 0;
  const f = [ko.textInput, i ? ko.entering : ""].filter(Boolean).join(" ");
  return n("div", {
    className: f,
    children: [
      n("div", {
        className: Se.inputWrapper,
        children: [
          n(lo, {
            value: e,
            spans: t,
            onChange: o,
            placeholder: r,
            autoFocus: a,
            className: Se.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: d || s,
            disableFormatting: true,
            onImagePaste: l,
          }),
          d &&
            n("span", {
              className: `${Se.commentCharCount} ${Se.error}`,
              children: h,
            }),
        ],
      }),
      n("button", {
        className: `${Se.circleButton} ${Se.sendButton} ${ko.sendButton} ${
          c ? Se.submitting : ""
        }`,
        onClick: s,
        disabled: c || u || u || d,
        children: c ? n(ut, { size: "xs" }) : n(si, { size: 20 }),
      }),
    ],
  });
}
const _n = 2;
const U0 = 2;
const zn = _n + U0;
const Ft = 24;
const F0 = 80;
const as = "rgba(142, 142, 147, 0.6)";
const H0 = "#FFFFFF";
function W0({
  levels: e,
  slideOffset: t,
  audioRef: o,
  isRecording: r,
  hasRecording: s,
  isPlaying: i,
  onSeek: a,
  onPlay: c,
}) {
  const u = x(null);
  const l = x(null);
  const h = x(false);
  const d = x(0);
  const f = x(0);
  const m = x(0);
  const N = x(0);
  const w = x(null);
  const g = x(null);
  const v = x(0);
  const [p, T] = A(0);
  const _ = Math.max(1, Math.floor(p / zn));

  W(() => {
    m.current = t;

    if (t === 0) {
      f.current = 0;
    }
  }, [t]);

  W(() => {
    const l_current = l.current;
    if (!l_current) {
      return;
    }
    const B = new ResizeObserver((X) => {
      for (const oe of X) {
        const K = oe.contentRect.width;

        if (K > 0) {
          T(K);
        }
      }
    });
    B.observe(l_current);
    const D = l_current.getBoundingClientRect();

    if (D.width > 0) {
      T(D.width);
    }

    return () => {
      B.disconnect();
    };
  }, []);

  W(() => {
    const u_current = u.current;
    if (!u_current || p === 0) {
      return;
    }
    const B = window.devicePixelRatio || 1;
    u_current.width = p * B;
    u_current.height = Ft * B;
    u_current.style.width = `${p}px`;
    u_current.style.height = `${Ft}px`;
  }, [p]);

  const C = S(
    (y) => {
      const u_current = u.current;
      if (!u_current || p === 0) {
        return;
      }
      const D = u_current.getContext("2d");
      if (!D) {
        return;
      }
      const X = window.devicePixelRatio || 1;
      D.clearRect(0, 0, u_current.width, u_current.height);
      D.save();
      D.scale(X, X);
      const oe = Ft / 2;
      const K = Ft - 4;
      for (let Y = 0; Y < _; Y++) {
        let j;
        if (e.length === 0) {
          j = 0.05;
        } else if (e.length === 1) {
          j = e[0];
        } else {
          const U = (Y / (_ - 1)) * (e.length - 1);
          const $ = Math.floor(U);
          const V = Math.min($ + 1, e.length - 1);
          const H = U - $;
          j = e[$] * (1 - H) + e[V] * H;
        }
        const G = Math.max(4, j * K);
        const re = Y * zn;
        const z = oe - G / 2;
        const F = Y < y;
        D.fillStyle = F ? H0 : as;
        const q = _n / 2;
        D.beginPath();
        D.roundRect(re, z, _n, G, q);
        D.fill();
      }
      D.restore();
    },
    [e, p, _]
  );

  const P = S(
    (y) => {
      const u_current = u.current;
      if (!u_current || p === 0) {
        return;
      }
      const D = u_current.getContext("2d");
      if (!D) {
        return;
      }
      const X = window.devicePixelRatio || 1;
      const m_current = m.current;

      const { current } = f;

      if (current !== m_current) {
        const z = y - N.current;
        const F = (zn / F0) * z;

        if (current < m_current) {
          f.current = Math.min(m_current, current + F);
        } else {
          f.current = m_current;
        }
      }
      N.current = y;
      D.clearRect(0, 0, u_current.width, u_current.height);
      D.save();
      D.scale(X, X);
      D.translate(-current, 0);
      const j = Ft / 2;
      const G = Ft - 4;
      const re = _ + e.length;
      for (let z = 0; z < re; z++) {
        const F = z - _;
        const q = F >= 0 && F < e.length ? e[F] : 0.05;
        const U = Math.max(4, q * G);
        const $ = z * zn;
        const V = j - U / 2;
        D.fillStyle = as;
        const H = _n / 2;
        D.beginPath();
        D.roundRect($, V, _n, U, H);
        D.fill();
      }
      D.restore();

      if (f.current !== m.current || r) {
        w.current = requestAnimationFrame(P);
      }
    },
    [e, p, _, r]
  );

  W(() => {
    if (r) {
      N.current = performance.now();
      w.current = requestAnimationFrame(P);
    } else if (w.current) {
      cancelAnimationFrame(w.current);
      w.current = null;
    }

    return () => {
      if (w.current) {
        cancelAnimationFrame(w.current);
        w.current = null;
      }
    };
  }, [r, P]);

  W(() => {
    if (!i || r) {
      if (g.current) {
        cancelAnimationFrame(g.current);
        g.current = null;
      }

      return;
    }
    const y = () => {
      const o_current = o.current;
      if (
        !o_current ||
        o_current.paused ||
        o_current.paused ||
        o_current.ended
      ) {
        g.current = null;
        return;
      }
      const D = o_current.currentTime / o_current.duration;
      const X = Math.ceil(D * _);

      if (X !== v.current) {
        v.current = X;
        C(X);
      }

      g.current = requestAnimationFrame(y);
    };
    g.current = requestAnimationFrame(y);

    return () => {
      if (g.current) {
        cancelAnimationFrame(g.current);
        g.current = null;
      }
    };
  }, [i, r, o, _, C]);

  W(() => {
    if (!r && !i && s) {
      const o_current = o.current;
      if (o_current && o_current.duration > 0 && o_current.currentTime > 0) {
        const B = o_current.currentTime / o_current.duration;
        const D = Math.ceil(B * _);
        v.current = D;
        C(D);
      } else {
        v.current = 0;
        C(0);
      }
    }
  }, [r, i, s, C, o, _]);

  W(() => {
    if (!r && s && !i) {
      C(v.current);
    }
  }, [e, _, r, s, i, C]);

  const k = S((y) => {
    const l_current = l.current;
    if (!l_current) {
      return 0;
    }
    const D = l_current.getBoundingClientRect();
    const X = "touches" in y ? y.touches[0].clientX : y.clientX;
    return Math.max(0, Math.min(1, (X - D.left) / D.width));
  }, []);

  const E = S(
    (y) => {
      if (!(!s || r)) {
        y.preventDefault();

        if (!i) {
          c();
          return;
        }

        h.current = true;
        d.current = k(y);
      }
    },
    [s, r, i, k, c]
  );

  const b = S(
    (y) => {
      if (h.current) {
        d.current = k(y);
      }
    },
    [k]
  );

  const M = S(() => {
    if (h.current) {
      a(d.current);
      h.current = false;
    }
  }, [a]);

  W(() => {
    const y = (D) => b(D);

    const B = () => M();

    window.addEventListener("mousemove", y);
    window.addEventListener("mouseup", B);
    window.addEventListener("touchmove", y);
    window.addEventListener("touchend", B);

    return () => {
      window.removeEventListener("mousemove", y);
      window.removeEventListener("mouseup", B);
      window.removeEventListener("touchmove", y);
      window.removeEventListener("touchend", B);
    };
  }, [b, M]);

  return n("div", {
    ref: l,
    style: {
      width: "100%",
      height: `${Ft}px`,
      overflow: "hidden",
      cursor: s && !r ? "pointer" : "default",
    },
    onMouseDown: E,
    onTouchStart: E,
    children: n("canvas", { ref: u }),
  });
}
const V0 = "-Ho1i5aD";
const j0 = "tC8l4Awz";
const z0 = "qgaHaLq2";
const Y0 = "ABusj9On";
const X0 = "QN61mWs7";
const q0 = "sb0Zcaza";
const Z0 = "zYZ8RG9n";
const G0 = "kV8tSOUW";
const K0 = "MazmNAnz";
const J0 = "IygqjuIv";
const Q0 = "Danfku1z";

const qe = {
  voiceInput: V0,
  circleButton: j0,
  playButton: z0,
  hasRecording: Y0,
  stopButton: X0,
  recording: q0,
  sendButton: Z0,
  audioVisualizer: G0,
  waveformContainer: K0,
  recordingTime: J0,
  exiting: Q0,
};

function eg({ onCancel: e, onSend: t, isExiting: o, onExitComplete: r }) {
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
    audioElementRef: N,
    startRecording: w,
    stopRecording: g,
    cancelRecording: v,
    playAudio: p,
    pauseAudio: T,
    seekTo: _,
    getAudioBlob: C,
  } = hc();

  W(() => {
    w();
  }, []);

  W(() => {
    if (o && r) {
      const D = setTimeout(r, 300);
      return () => clearTimeout(D);
    }
  }, [o, r]);

  const P = (D) => {
    if (!isFinite(D) || isNaN(D)) {
      return "00:00";
    }
    const X = Math.floor(D / 60);
    const oe = Math.floor(D % 60);
    return `${X.toString().padStart(2, "0")}:${oe.toString().padStart(2, "0")}`;
  };

  const k = () => {
    if (c) {
      if (d) {
        T();
      } else {
        p();
      }
    }
  };

  const E = () => {
    if (a) {
      g();
    }
  };

  const b = S(
    (D) => {
      _(D);
    },
    [_]
  );

  const M = S(async () => {
    if (!(s || !t)) {
      i(true);
      try {
        let D = null;

        if (a) {
          D = await g();
        } else {
          D = C();
        }

        if (!D) {
          return;
        }

        await t(D);
        v();
        e();
      } catch (D) {
        console.error("Failed to send voice message:", D);
      } finally {
        i(false);
      }
    }
  }, [s, a, g, C, t, v, e]);

  const y = P(a ? u : d ? f * m : m);

  const B = [
    qe.voiceInput,
    a ? qe.recording : "",
    c ? qe.hasRecording : "",
    o ? qe.exiting : "",
  ]
    .filter(Boolean)
    .join(" ");

  return n("div", {
    className: B,
    children: [
      n("button", {
        className: `${qe.circleButton} ${qe.playButton}`,
        onClick: k,
        children: d ? n(fi, { size: 20 }) : n(pi, { size: 20 }),
      }),
      n("div", {
        className: qe.audioVisualizer,
        children: [
          n("div", {
            className: qe.waveformContainer,
            children: n(W0, {
              levels: l,
              slideOffset: h,
              audioRef: N,
              isRecording: a,
              hasRecording: c,
              isPlaying: d,
              onSeek: b,
              onPlay: p,
            }),
          }),
          n("span", { className: qe.recordingTime, children: y }),
        ],
      }),
      n("button", {
        className: `${qe.circleButton} ${qe.stopButton}`,
        onClick: E,
        children: n(Fc, { size: 20 }),
      }),
      n("button", {
        className: `${qe.circleButton} ${qe.sendButton}`,
        onClick: M,
        disabled: s || (a && u < 1),
        children: s ? n(ut, { size: "xs" }) : n(si, { size: 20 }),
      }),
    ],
  });
}
function xi({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: o = "Написать комментарий...",
  replyTo: r,
  onCancelReply: s,
  autoFocus: i,
}) {
  const { text: a, spans: c, handleChange: u, reset: l } = ao();
  const [h, d] = A("text");
  const [f, m] = A(false);
  const [N, w] = A(false);
  const [g, v] = A(false);
  const [p, T] = A(false);
  const _ = x(false);
  const C = x(null);
  const P = x(0);

  const {
    images: k,
    uploadingImages: E,
    isUploading: b,
    openFilePicker: M,
    removeImage: y,
    uploadFiles: B,
    clearAll: D,
    fileInputRef: X,
    handleFileChange: oe,
  } = ki(4);

  W(
    () => () => {
      if (C.current) {
        clearTimeout(C.current);
      }
    },
    []
  );
  const K = k.length > 0 || E.length > 0;
  const Y = a.length > 0 || g || g || K;
  const j = h === "voice";
  const G = 1000; /* 1e3 */

  const re = async () => {
    const Q = a.trim().length > 0;
    const ne = k.length > 0;
    if ((!Q && !ne) || g || b || a.length > G) {
      return;
    }
    const ae = a.trim();
    const he = [...c];

    const ve = k.map((ce) => ({
      mediaId: ce.mediaId,
    }));

    v(true);
    try {
      await e(ae, he, ve.length > 0 ? ve : undefined);
      l();
      D();
    } catch (ce) {
      console.error("Failed to submit comment:", ce);
    } finally {
      v(false);
    }
  };

  const z = () => {
    _.current = true;
    d("voice");
    w(false);
  };

  const F = () => {
    m(true);
  };

  const q = () => {
    m(false);
    d("text");
    w(true);

    if (C.current) {
      clearTimeout(C.current);
    }

    C.current = window.setTimeout(() => {
      C.current = null;
      w(false);
    }, 300);
  };

  const U = S((Q) => {
    Q.preventDefault();
    Q.stopPropagation();
    P.current++;

    if (Q.dataTransfer?.types.includes("Files")) {
      T(true);
    }
  }, []);

  const $ = S((Q) => {
    Q.preventDefault();
    Q.stopPropagation();
  }, []);

  const V = S((Q) => {
    Q.preventDefault();
    Q.stopPropagation();
    P.current--;

    if (P.current === 0) {
      T(false);
    }
  }, []);

  const H = S(
    (Q) => {
      Q.preventDefault();
      Q.stopPropagation();
      P.current = 0;
      T(false);
      const ne = Q.dataTransfer?.files;

      if (ne && ne.length > 0) {
        B(Array.from(ne));
      }
    },
    [B]
  );

  const te = [
    Se.commentInput,
    Y ? Se.expanded : "",
    j ? Se.voiceMode : "",
    r ? Se.replyMode : "",
    p ? Se.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return n("div", {
    className: te,
    onDragEnter: U,
    onDragOver: $,
    onDragLeave: V,
    onDrop: H,
    children: [
      p &&
        n("div", {
          className: Se.dragOverlay,
          children: [
            n("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                n("rect", {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2",
                  ry: "2",
                }),
                n("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
                n("polyline", { points: "21 15 16 10 5 21" }),
              ],
            }),
            n("span", { children: "Перетащите изображение" }),
          ],
        }),
      r &&
        n("div", {
          className: Se.replyHeader,
          children: [
            n("span", {
              className: Se.replyText,
              children: [
                "Ответ для ",
                n("span", { className: Se.replyName, children: r.authorName }),
              ],
            }),
            n("button", {
              className: Se.replyClose,
              onClick: s,
              children: n(wt, { size: 16 }),
            }),
          ],
        }),
      !j &&
        !f &&
        K &&
        n("div", {
          className: Se.attachmentStrip,
          children: n(bi, { images: k, uploadingImages: E, onRemove: y }),
        }),
      n("div", {
        className: Se.inputRow,
        children: [
          n("button", {
            className: Se.circleButton,
            onClick: j ? F : M,
            children: j ? n(wt, { size: 20 }) : n(ii, { size: 20 }),
          }),
          n("div", {
            className: Se.textareaContainer,
            children:
              j || f
                ? n(eg, {
                    onCancel: F,
                    onSend: t,
                    isExiting: f,
                    onExitComplete: q,
                  })
                : n(B0, {
                    text: a,
                    spans: c,
                    onChange: u,
                    placeholder: o,
                    onSubmit: re,
                    isEntering: N,
                    autoFocus: i,
                    isSubmitting: g,
                    sendDisabled: b,
                    onImagePaste: B,
                  }),
          }),
          !j &&
            !f &&
            n("button", {
              className: `${Se.circleButton} ${Se.micButton}`,
              onClick: z,
              children: n(Ac, { size: 20 }),
            }),
        ],
      }),
      n("input", {
        ref: X,
        type: "file",
        accept: Uo,
        multiple: true,
        onChange: oe,
        style: { display: "none" },
      }),
    ],
  });
}

const Eo = _t((e) => ({
  activeAudioId: null,
  setActiveAudio: (t) => e({ activeAudioId: t }),
}));

const tg = "_4REluXTH";
const ng = "csThJX40";
const og = "_7tEz9WJs";
const rg = "yICArXOf";
const sg = "-QGEO-Ir";
const ig = "F2vpEy3t";
const ag = "thwOd-Oi";
const cg = "cU3NuD-h";
const lg = "koGcQrYR";
const ug = "Ka6vy6TO";

const at = {
  voiceMessage: tg,
  playButton: ng,
  content: og,
  waveform: rg,
  dragging: sg,
  bar: ig,
  played: ag,
  info: cg,
  time: lg,
  duration: ug,
};

const dg = 45;
function hg(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++) {
    const r = e.charCodeAt(o);
    t = (t << 5) - t + r;
    t = t & t;
  }
  return Math.abs(t);
}
function fg(e) {
  const t = [];
  let o = hg(e);
  for (let r = 0; r < dg; r++) {
    o = (o * 9301 + 49297) % 233280;
    const s = 0.2 + (o / 233280) * 0.8;
    t.push(s);
  }
  return t;
}
function cs(e) {
  if (!isFinite(e) || isNaN(e)) {
    return "0:00";
  }
  const t = Math.floor(e / 60);
  const o = Math.floor(e % 60);
  return `${t}:${o.toString().padStart(2, "0")}`;
}
function mg({ src: e, duration: t = 0 }) {
  const o = Ne(() => e, [e]);

  const r = Ne(() => fg(e), [e]);

  const s = Eo((E) => E.activeAudioId);

  const i = Eo((E) => E.setActiveAudio);

  const [a, c] = A(true);
  const [u, l] = A(0);
  const [h, d] = A(t);
  const [f, m] = A(false);
  const N = x(null);
  const w = x(null);
  const g = x(null);
  const v = s === o;

  W(() => {
    if (s !== o && N.current && !N.current.paused) {
      N.current.pause();
      g.current && (cancelAnimationFrame(g.current), (g.current = null));
    }
  }, [s, o]);

  W(() => {
    const E = new Audio(e);
    N.current = E;

    const b = () => {
      d(E.duration || t);
      c(false);
    };

    const M = () => {
      l(0);

      if (g.current) {
        cancelAnimationFrame(g.current);
        g.current = null;
      }

      i(null);
    };

    const y = () => {
      c(false);
    };

    E.addEventListener("loadedmetadata", b);
    E.addEventListener("ended", M);
    E.addEventListener("error", y);

    return () => {
      E.removeEventListener("loadedmetadata", b);
      E.removeEventListener("ended", M);
      E.removeEventListener("error", y);
      E.pause();
      N.current = null;

      if (g.current) {
        cancelAnimationFrame(g.current);
      }

      if (Eo.getState().activeAudioId === o) {
        i(null);
      }
    };
  }, [e, t, o, i]);

  const p = S(() => {
    if (N.current) {
      l(N.current.currentTime);
      g.current = requestAnimationFrame(p);
    }
  }, []);

  const T = S(() => {
    const N_current = N.current;

    if (N_current && !a) {
      if (v) {
        N_current.pause();
        g.current && (cancelAnimationFrame(g.current), (g.current = null));
        i(null);
      } else {
        i(o);
        N_current.play();
        p();
      }
    }
  }, [v, a, o, i, p]);

  const _ = S(
    (E) => {
      if (!w.current || !h) {
        return 0;
      }
      const b = w.current.getBoundingClientRect();
      const E_clientX = E.clientX;
      return Math.max(0, Math.min(E_clientX - b.left, b.width)) / b.width;
    },
    [h]
  );

  const C = S(
    (E) => {
      const N_current = N.current;
      if (!N_current || !h || !h || f) {
        return;
      }
      const M = _(E);
      N_current.currentTime = M * h;
      l(N_current.currentTime);
    },
    [h, f, _]
  );

  const P = S(
    (E) => {
      const N_current = N.current;
      if (!N_current || !h) {
        return;
      }
      m(true);
      const M = _(E);
      N_current.currentTime = M * h;
      l(N_current.currentTime);
    },
    [h, _]
  );

  W(() => {
    if (!f) {
      return;
    }

    const E = (M) => {
      const N_current = N.current;
      if (!N_current || !h) {
        return;
      }
      const B = _(M);
      N_current.currentTime = B * h;
      l(N_current.currentTime);
    };

    const b = () => {
      m(false);
    };

    document.addEventListener("mousemove", E);
    document.addEventListener("mouseup", b);

    return () => {
      document.removeEventListener("mousemove", E);
      document.removeEventListener("mouseup", b);
    };
  }, [f, h, _]);
  const k = h > 0 ? u / h : 0;
  return n("div", {
    className: `${at.voiceMessage} ${v ? at.playing : ""}`,
    children: [
      n("button", {
        className: at.playButton,
        onClick: T,
        disabled: a,
        children: a
          ? n(Ln, { size: 18 })
          : v
          ? n(fi, { size: 18 })
          : n(pi, { size: 18 }),
      }),
      n("div", {
        className: at.content,
        children: [
          n("div", {
            ref: w,
            className: `${at.waveform} ${f ? at.dragging : ""}`,
            onClick: C,
            onMouseDown: P,
            children: r.map((E, b) => {
              const y = (b + 0.5) / r.length <= k;
              return n(
                "div",
                {
                  className: `${at.bar} ${y ? at.played : ""}`,
                  style: { height: `${Math.max(4, E * 24)}px` },
                },
                b
              );
            }),
          }),
          n("div", {
            className: at.info,
            children: [
              n("span", {
                className: at.time,
                children: cs(v || u > 0 ? u : h),
              }),
              (v || u > 0) &&
                n("span", { className: at.duration, children: ["/ ", cs(h)] }),
            ],
          }),
        ],
      }),
    ],
  });
}
const pg = "EMoEIZFv";
const gg = "TCFYTRkG";
const vg = "-Jv0cl93";
const wg = "_8ZH4gvtt";
const _g = "VgMMM-FP";
const yg = "MHUIw-Bn";
const Cg = "ugI7Vwfw";
const Ng = "eYiDjO7I";
const Tg = "efgl9R1v";
const bg = "N5ciicq2";
const kg = "Y3Xvuphx";
const Eg = "P1lAENLs";
const Rg = "EafRTyEa";
const Sg = "YgCVK2-C";
const Ig = "E34stxAv";
const Pg = "_5xeGurR-";
const xg = "_8CHHNoFp";
const Ag = "qBk55euG";
const Lg = "NTrrYRK4";
const Mg = "Oy71u1HK";
const Og = "Az3ELd41";
const $g = "g9UiDqsQ";
const Dg = "-tabj2ls";
const Bg = "LiWVk6u3";

const we = {
  commentWrapper: pg,
  threadItem: gg,
  avatarWrapper: vg,
  threadLine: wg,
  commentBody: _g,
  showMoreBtn: yg,
  avatarPlaceholder: Cg,
  comment: Ng,
  small: Tg,
  commentTime: bg,
  commentText: kg,
  commentActions: Eg,
  commentContent: Rg,
  avatarLink: Sg,
  authorLink: Ig,
  commentHeader: Pg,
  moreButton: xg,
  commentHeaderLeft: Ag,
  replyMention: Lg,
  commentMedia: Mg,
  reactionWrapper: Og,
  commentAction: $g,
  liked: Dg,
  replyButton: Bg,
};

function Ug({
  author: e,
  commentId: t,
  text: o,
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
  replyTo: N,
  hideAvatar: w = false,
  isWallOwner: g = false,
}) {
  console.log("[CommentBase] RENDER", { commentId: t, text: o.slice(0, 20) });
  const v = ri(i);

  const p = Ce((E) => E.profile?.id);

  const T = e.id === p;
  const _ = T || g;
  const C = u === "xs";

  const P = Ne(() => {
    const E = [];

    if (T && f) {
      E.push({
        id: "edit",
        label: "Редактировать",
        icon: n(ci, { size: 16 }),
        onClick: () => f(t),
      });
    }

    if (_ && m) {
      E.push({
        id: "delete",
        label: "Удалить",
        icon: n(vi, { size: 16 }),
        danger: true,
        onClick: () => m(t),
      });
    }

    if (!T) {
      E.push({
        id: "report",
        label: "Пожаловаться",
        icon: n(ui, { size: 16 }),
        danger: true,
        onClick: () => d(t),
      });
    }

    return E;
  }, [T, _, t, f, m, d]);

  const k = `/@${e.username ?? e.id}`;
  return n("div", {
    className: `${we.comment} ${C ? we.small : ""}`,
    children: [
      !w &&
        n("a", {
          href: k,
          className: we.avatarLink,
          children: n(ot, { src: e.avatar, alt: e.displayName, size: u }),
        }),
      n("div", {
        className: we.commentContent,
        children: [
          n("div", {
            className: we.commentHeader,
            children: [
              n("div", {
                className: we.commentHeaderLeft,
                children: [
                  n("a", {
                    href: k,
                    className: we.authorLink,
                    children: n(Mn, {
                      name: e.displayName,
                      verified: e.isVerified,
                      pin: e.pin,
                      size: u,
                    }),
                  }),
                  n("span", { className: we.commentTime, children: v }),
                ],
              }),
              n(Ii, {
                trigger: n(hi, { size: C ? 14 : 16 }),
                items: P,
                position: "bottom-right",
                className: we.moreButton,
              }),
            ],
          }),
          (N || o) &&
            n("div", {
              className: we.commentText,
              children: [
                N &&
                  n(Te, {
                    children: [
                      n("a", {
                        href: `/@${N.username}`,
                        className: we.replyMention,
                        children: ["@", N.displayName],
                      }),
                      ", ",
                    ],
                  }),
                o && n(Si, { text: o, spans: r }),
              ],
            }),
          ro(s).length > 0 &&
            n("div", {
              className: we.commentMedia,
              children: n(lr, { media: ro(s) }),
            }),
          s
            .filter((E) => E.type === "audio")
            .map((E) => n(mg, { src: E.url, duration: E.duration }, E.id)),
          n("div", {
            className: we.commentActions,
            children: [
              n("button", {
                className: we.replyButton,
                onClick: h,
                children: "Ответить",
              }),
              n("div", {
                className: we.reactionWrapper,
                children: n("button", {
                  className: `${we.commentAction} ${c ? we.liked : ""}`,
                  onClick: () => l(),
                  children: [
                    n(co, { size: 14, filled: c }),
                    n(wn, { value: a }),
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
function Ai({
  comment: e,
  onLike: t,
  onReaction: o,
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
  isLoadingReplies: N = false,
  flashingCommentId: w,
  isWallOwner: g = false,
}) {
  console.log("[CommentItem] RENDER", { commentId: e.id });
  const v = i?.commentId === e.id;

  const p = {
    id: e.author.id,
    username: e.author.username,
    avatar: e.author.avatar ?? "",
    displayName: e.author.displayName,
    isVerified: e.author.isVerified,
    pin: e.author.pin,
  };

  const T = e.previewReplies ?? [];
  const _ = w === e.id;
  const [C] = A({});
  const [P] = A({});
  const k = S(async () => {}, [e.id]);
  const E = S(async (y) => {}, []);
  const b = e.stats.replies > T.length;

  const M = [
    { type: "parent", data: e, author: p },
    ...T.map((y) => ({
      type: "reply",
      data: y,

      author: {
        id: y.author.id,
        username: y.author.username,
        avatar: y.author.avatar ?? "",
        displayName: y.author.displayName,
        isVerified: y.author.isVerified,
        pin: y.author.pin,
      },
    })),
  ];

  return n("div", {
    className: `${we.commentWrapper} ${_ ? "flash-highlight" : ""}`,
    "data-comment-id": e.id,
    children: [
      M.map((y, B) => {
        const X = !(B === M.length - 1 && !v && !b);
        const oe = w === y.data.id;
        return n(
          "div",
          {
            "data-comment-id": y.data.id,
            className: `${we.threadItem} ${oe ? "flash-highlight" : ""}`,
            children: [
              n("div", {
                className: we.avatarWrapper,
                children: [
                  n("a", {
                    href: `/@${y.author.username ?? y.author.id}`,
                    className: we.avatarLink,
                    children: n(ot, {
                      src: y.author.avatar,
                      alt: y.author.displayName,
                      size: "sm",
                    }),
                  }),
                  X && n("div", { className: we.threadLine }),
                ],
              }),
              n("div", {
                className: we.commentBody,
                children: n(Ug, {
                  author: y.author,
                  commentId: y.data.id,
                  text: y.data.text,
                  spans: y.data.spans ?? [],
                  attachments: y.data.attachments ?? [],
                  replyTo: y.data.replyTo,
                  createdAt: y.data.createdAt,
                  reactionsCount: y.data.reactions.total,
                  isReacted: y.data.reactions.myReaction !== null,
                  selectedReaction: y.data.reactions.myReaction,
                  reactionCounts: y.type === "parent" ? C : P[y.data.id] ?? {},
                  size: "sm",
                  onLike: y.type === "parent" ? t : () => r(y.data.id),
                  onReaction:
                    y.type === "parent"
                      ? o
                        ? (K) => o(e.id, K)
                        : undefined
                      : s
                      ? (K) => s(y.data.id, K)
                      : undefined,
                  onReply: () =>
                    y.type === "parent"
                      ? a(
                          e.id,
                          e.author.username ?? e.author.id,
                          e.author.displayName,
                          e.author.id
                        )
                      : a(
                          e.id,
                          y.data.author.username ?? y.data.author.id,
                          y.data.author.displayName,
                          y.data.author.id,
                          y.data.id
                        ),
                  onReport: d,
                  onEdit: f,
                  onDelete: m,
                  onHoverReaction: y.type === "parent" ? k : () => E(y.data.id),
                  hideAvatar: true,
                  isWallOwner: g,
                }),
              }),
            ],
          },
          y.data.id
        );
      }),
      v &&
        n("div", {
          className: we.threadItem,
          children: [
            n("div", {
              className: we.avatarWrapper,
              children: [
                n("div", { className: we.avatarPlaceholder }),
                b && n("div", { className: we.threadLine }),
              ],
            }),
            n("div", {
              className: we.commentBody,
              children: n(xi, {
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
      b &&
        !N &&
        n("button", {
          className: we.showMoreBtn,
          onClick: () => h(e.id),
          children: ["Показать ещё ", e.stats.replies - T.length, " ответов"],
        }),
    ],
  });
}
function Fg({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: o = 5,
  getItemKey: r = (s) => s,
}) {
  const s = x(null);
  const [i, a] = A(0);
  const [c, u] = A(0);
  const l = x(new Map());
  const h = x(new Map());
  const d = x(0);

  if (d.current !== e) {
    d.current = e;
    h.current.clear();
  }

  const f = S(
    (C) => {
      const P = r(C);
      return l.current.get(P) ?? t;
    },
    [r, t]
  );

  const m = S(
    (C) => {
      if (C === 0) {
        return 0;
      }
      const P = h.current.get(C);
      if (P !== undefined) {
        return P;
      }
      let k = 0;
      let E = 0;
      for (let b = C - 1; b >= 0; b--) {
        const M = h.current.get(b);
        if (M !== undefined) {
          k = b;
          E = M;
          break;
        }
      }
      for (let b = k; b < C; b++) {
        E += f(b);
      }
      h.current.set(C, E);
      return E;
    },
    [f]
  );

  const N = Ne(() => (e === 0 ? 0 : m(e - 1) + f(e - 1)), [e, m, f]);

  const { startIndex: w, endIndex: g } = Ne(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let C = 0;
    let P = e - 1;

    while (C < P) {
      const M = Math.floor((C + P) / 2);
      const y = m(M);
      const B = f(M);

      if (y + B < i) {
        C = M + 1;
      } else {
        P = M;
      }
    }

    const k = Math.max(0, C - o);
    let E = C;
    let b = m(C) - i;

    while (E < e && b < c + t * o) {
      b += f(E);
      E++;
    }

    E = Math.min(e - 1, E + o);
    return { startIndex: k, endIndex: E };
  }, [e, i, c, m, f, o, t]);

  const v = Ne(() => {
    if (e === 0) {
      return [];
    }
    const C = [];
    for (let P = w; P <= g; P++) {
      C.push({ index: P, key: r(P), start: m(P), size: f(P) });
    }
    return C;
  }, [w, g, r, m, f, e]);

  const p = S(
    (C, P) => {
      if (!C) {
        return;
      }
      const k = r(P);
      const E = C.getBoundingClientRect().height;
      if (E <= 0) {
        return;
      }
      const b = l.current.get(k);

      if (b === undefined || Math.abs(b - E) > 2) {
        l.current.set(k, E);
        h.current.clear();
      }
    },
    [r]
  );

  const T = S(() => {
    if (s.current) {
      a(s.current.scrollTop);
    }
  }, []);

  const _ = S(
    (C) => {
      if (s.current) {
        s.current.removeEventListener("scroll", T);
      }

      s.current = C;

      if (C) {
        u(C.clientHeight);
        a(C.scrollTop);
        C.addEventListener("scroll", T, { passive: true });
      }
    },
    [T]
  );

  W(() => {
    if (!s.current) {
      return;
    }
    const C = new ResizeObserver((P) => {
      for (const k of P) {
        u(k.contentRect.height);
      }
    });
    C.observe(s.current);

    return () => C.disconnect();
  }, []);

  W(
    () => () => {
      if (s.current) {
        s.current.removeEventListener("scroll", T);
      }
    },
    [T]
  );

  return { containerRef: _, virtualItems: v, totalSize: N, measureElement: p };
}
const Hg = "OSYFbJTc";
const Wg = "BZs335wO";
const Vg = "uHfvgHkC";
const jg = "_0mjuADLO";
const zg = "-irX9LBI";
const Yg = "PkENmhoL";
const Xg = "Ipy3h0nq";
const qg = "_7EbOLXPm";
const Zg = "qUnBivge";
const Gg = "XcWtT84I";
const Kg = "I-b0vKPW";
const Jg = "quGM4O7I";
const Qg = "EO684LVX";

const Ze = {
  comments: Hg,
  sortWrapper: Wg,
  sortSelect: Vg,
  commentsList: jg,
  commentItem: zg,
  empty: Yg,
  loading: Xg,
  loadMoreSentinel: qg,
  virtualContainer: Zg,
  virtualContent: Gg,
  virtualItem: Kg,
  loadMoreSpinner: Jg,
  inputWrapper: Qg,
};

const ev = 120;
function tv({
  comments: e,
  hasMore: t,
  isLoadingMore: o,
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
  onSubmitReply: N,
  onVoiceSend: w,
  onLoadReplies: g,
  onReport: v,
  onEdit: p,
  onDelete: T,
}) {
  const _ = x(false);

  const {
    containerRef: C,
    virtualItems: P,
    totalSize: k,
    measureElement: E,
  } = Fg({
    itemCount: e.length,
    estimatedItemHeight: ev,
    overscan: 3,
    getItemKey: (M) => e[M]?.id ?? M,
  });

  W(() => {
    if (!t || o || o || P.length === 0) {
      _.current = false;
      return;
    }
    const M = P[P.length - 1]?.index ?? 0;
    const y = e.length - 5;

    if (M >= y && !_.current) {
      _.current = true;
      r();
    }
  }, [P, e.length, t, o, r]);

  W(() => {
    if (!o) {
      _.current = false;
    }
  }, [o]);

  const b = S(
    (M, y) => {
      E(M, y);
    },
    [E]
  );
  return n("div", {
    ref: C,
    className: Ze.virtualContainer,
    "data-comments-scroll": true,
    children: [
      n("div", {
        className: Ze.virtualContent,
        style: { height: `${k}px` },
        children: P.map((M) => {
          const y = e[M.index];
          return y
            ? n(
                "div",
                {
                  ref: (B) => b(B, M.index),
                  className: Ze.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${M.start}px)`,
                  },
                  children: n(Ai, {
                    comment: y,
                    onLike: () => u(y.id, y.reactions.myReaction),
                    onReaction: l,
                    onLikeReply: h,
                    onReactionReply: d,
                    replyingTo: s?.commentId === y.id ? s : null,
                    onStartReply: f,
                    onCancelReply: m,
                    onSubmitReply: N,
                    onVoiceSend: w,
                    onLoadReplies: g,
                    onReport: v,
                    onEdit: p,
                    onDelete: T,
                    isLoadingReplies: a === y.id,
                    flashingCommentId: i,
                    isWallOwner: c,
                  }),
                },
                M.key
              )
            : null;
        }),
      }),
      o &&
        n("div", {
          className: Ze.loadMoreSpinner,
          children: n(ut, { size: "sm" }),
        }),
    ],
  });
}
const nv = "DolcZKu1";
const ov = "_1lo2seB9";
const rv = "X0vaA15E";
const sv = "JmzJKMT2";
const iv = "p8fSWBtD";
const av = "TvBLZ6Xz";
const cv = "ML3QZih-";
const lv = "F8sHrsZA";
const uv = "DicPhJTL";
const dv = "L6r5VJk9";
const hv = "lHdqCdp-";
const fv = "rfKDp2t8";

const Ke = {
  editCommentModal: nv,
  form: ov,
  header: rv,
  title: sv,
  content: iv,
  editor: av,
  actions: cv,
  mediaButtons: lv,
  mediaButton: uv,
  submitGroup: dv,
  charCount: hv,
  error: fv,
};

const ls = 2000; /* 2e3 */
function mv({ commentId: e, initialText: t, initialSpans: o = [] }) {
  const { closeModal: r } = qt();

  const s = me((C) => C.editComment);

  const i = Ce((C) => C.profile);

  const a = vt();

  const {
    text: c,
    spans: u,
    editorRef: l,
    handleChange: h,
    insertText: d,
  } = ao(t, o);

  const [f, m] = A(false);
  const N = ls - c.length;
  const w = N < 0;
  const g = c !== t;
  const v = JSON.stringify(u) !== JSON.stringify(o);
  const p = g || v;

  const T = S(
    (C) => {
      d(C.emoji);
    },
    [d]
  );

  const _ = S(async () => {
    if (!(!c.trim() || w || w || !p || w || !p || f)) {
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
  }, [c, u, w, p, f, s, e, r]);

  return n(nt, {
    frameless: true,
    onClose: r,
    className: Ke.editCommentModal,
    children: n("div", {
      className: Ke.form,
      children: [
        n("div", {
          className: Ke.header,
          children: n("span", {
            className: Ke.title,
            children: "Редактирование комментария",
          }),
        }),
        n("div", {
          className: Ke.content,
          children: [
            n(ot, { src: i?.avatar ?? "", size: "sm" }),
            n(lo, {
              ref: l,
              value: c,
              spans: u,
              onChange: h,
              placeholder: "Комментарий...",
              maxLength: ls,
              autoFocus: true,
              className: Ke.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        n("div", {
          className: Ke.actions,
          children: [
            n("div", {
              className: Ke.mediaButtons,
              children:
                !a &&
                n(cr, { onEmojiSelect: T, buttonClassName: Ke.mediaButton }),
            }),
            n("div", {
              className: Ke.submitGroup,
              children: [
                w &&
                  n("span", {
                    className: `${Ke.charCount} ${Ke.error}`,
                    children: N,
                  }),
                n(Oe, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => r(),
                  children: "Отмена",
                }),
                n(Oe, {
                  size: "md",
                  disabled: !c.trim() || w || w || !p || w || !p || f,
                  onClick: _,
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
function pv({
  comments: e,
  isLoading: t,
  isLoadingMore: o,
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
  console.log("[Comments] RENDER", {
    commentsCount: e.length,
    isLoading: t,
    isLoadingMore: o,
    hasMore: r,
    sort: s,
  });
  const w = vt() && f === "modal";
  const [g, v] = A(null);
  const [p, T] = A(null);
  const [_, C] = A(null);
  const [P, k] = A(null);
  const E = x(null);
  const { openModal: b } = qt();

  const M = me((U) => U.highlightedCommentId);

  const y = me((U) => U.clearHighlightedComment);

  const B = me((U) => U.loadReplies);

  const D = me((U) => U.deleteComment);

  const X = me((U) => U.toggleCommentReaction);

  W(() => {
    if (!r || o) {
      return;
    }

    const U = new IntersectionObserver(
      (V) => {
        if (V[0].isIntersecting) {
          h();
        }
      },
      { rootMargin: "200px" }
    );

    const E_current = E.current;

    if (E_current) {
      U.observe(E_current);
    }

    return () => {
      if (E_current) {
        U.unobserve(E_current);
      }
    };
  }, [r, o, h]);

  W(() => {
    if (!M) {
      return;
    }
    const U =
      document.querySelector("[data-comments-scroll]") ||
      document.querySelector("[data-comments-modal]");
    if (U) {
      U.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const V = document.querySelector("[data-comments-section]");

      if (V) {
        V.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    const $ = window.setTimeout(() => {
      T(M);
      y();
      const V = window.setTimeout(() => {
        T(null);
      }, 600);
      return () => clearTimeout(V);
    }, 300);
    return () => clearTimeout($);
  }, [M, y]);

  const oe = async (U, $, V) => {
    if (g) {
      await u(
        U,
        $,
        g.commentId,
        g.userId,
        { id: g.userId, username: g.username, displayName: g.displayName },
        V
      );

      v(null);
    }
  };

  const K = (U, $, V, H, te) => {
    v({ commentId: U, username: $, displayName: V, userId: H, replyId: te });
  };

  const Y = () => {
    v(null);
  };

  const j = S(
    (U) => {
      for (const $ of e) {
        const V = $.previewReplies?.find((H) => H.id === U);
        if (V) {
          X(U, (V.reactions.myReaction === "love", "love"));
          return;
        }
      }
    },
    [e, X]
  );

  const G = S(
    (U, $) => {
      X(U, $);
    },
    [X]
  );

  const re = S(
    async (U) => {
      C(U);
      try {
        await B(U);
      } finally {
        C(null);
      }
    },
    [B]
  );

  const z = S((U) => {
    k(U);
  }, []);

  const F = S(
    (U) => {
      let $ = "";
      let V = [];
      for (const H of e) {
        if (H.id === U) {
          $ = H.text;
          V = H.spans ?? [];
          break;
        }
        const te = H.previewReplies?.find((Q) => Q.id === U);
        if (te) {
          $ = te.text;
          V = te.spans ?? [];
          break;
        }
      }
      b(n(mv, { commentId: U, initialText: $, initialSpans: V }));
    },
    [e, b]
  );

  const q = S(
    (U) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        D(U);
      }
    },
    [D]
  );

  return n("div", {
    className: Ze.comments,
    children: [
      n("div", {
        className: Ze.sortWrapper,
        children: n("select", {
          value: s,
          onChange: (U) => i(U.target.value),
          className: Ze.sortSelect,
          children: [
            n("option", { value: "new", children: "Новые" }),
            n("option", { value: "old", children: "Старые" }),
            n("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? n("div", { className: Ze.loading, children: n(ut, {}) })
        : e.length === 0
        ? n("div", { className: Ze.empty, children: "Нет комментариев" })
        : w
        ? n(tv, {
            comments: e,
            hasMore: r,
            isLoadingMore: o,
            onLoadMore: h,
            replyingTo: g,
            flashingCommentId: p,
            loadingRepliesId: _,
            isWallOwner: d,
            onLikeComment: a,
            onReactionComment: c,
            onLikeReply: j,
            onReactionReply: G,
            onStartReply: K,
            onCancelReply: Y,
            onSubmitReply: oe,
            onVoiceSend: l,
            onLoadReplies: re,
            onReport: z,
            onEdit: F,
            onDelete: q,
          })
        : n("div", {
            className: Ze.commentsList,
            children: [
              e.map((U) =>
                n(
                  "div",
                  {
                    className: Ze.commentItem,
                    children: n(Ai, {
                      comment: U,
                      onLike: () => a(U.id, U.reactions.myReaction),
                      onReaction: c,
                      onLikeReply: j,
                      onReactionReply: G,
                      replyingTo: g?.commentId === U.id ? g : null,
                      onStartReply: K,
                      onCancelReply: Y,
                      onSubmitReply: oe,
                      onVoiceSend: l,
                      onLoadReplies: re,
                      onReport: z,
                      onEdit: F,
                      onDelete: q,
                      isLoadingReplies: _ === U.id,
                      flashingCommentId: p,
                      isWallOwner: d,
                    }),
                  },
                  U.id
                )
              ),
              r &&
                n("div", {
                  ref: E,
                  className: Ze.loadMoreSentinel,
                  children: o && n(ut, { size: "sm" }),
                }),
            ],
          }),
      !m &&
        n("div", {
          className: Ze.inputWrapper,
          children: n(xi, {
            onSubmit: (U, $, V) => u(U, $, undefined, undefined, undefined, V),
            onVoiceSend: l,
          }),
        }),
      P &&
        n(Ri, { targetType: "comment", targetId: P, onClose: () => k(null) }),
    ],
  });
}
function gv(e) {
  return {
    id: e.id,
    username: e.username ?? "",
    displayName: e.displayName,
    avatar: e.avatar ?? "",
    isVerified: e.isVerified,
    pin: e.pin ?? null,
  };
}
function ro(e) {
  return e
    .filter(
      (t) =>
        t.type === "image" ||
        t.type === "video" ||
        (t.type === "media" && "media" in t)
    )
    .map((t) => (t.type === "media" && "media" in t ? t.media : t));
}
function vv(e) {
  return e.find((t) => t.type === "poll");
}
const wv = 300;
const _v = 500;

const yv = Fs(
  ({
    post: t,
    variant: o = "feed",
    className: r,
    isOnOwnProfile: s = false,
    isPinned: i = false,
    isHighlighted: a = false,
    onEdit: c,
    onPin: u,
    onDelete: l,
  }) => {
    const h = o === "feed";
    const d = vt();
    const { openModal: f, closeModal: m } = qt();

    const N = me((R) => R.deletePost);

    const w = me((R) => R.updatePostReaction);

    const g = me((R) => R.updatePollVote);

    const v = me((R) => R.updatePollData);

    const p = me((R) => R.setCurrentPost);

    const T = me((R) => R.posts.find((L) => L.id === t.id));

    const _ = Ce((R) => R.profile);

    const C = kt((R) =>
      h && _?.id !== t.author.id ? R.statuses[t.author.id] : undefined
    );

    const P = S(async () => {
      const R = t.author.id;
      kt.getState().setStatus(R, true);
      try {
        await En.followUser(R);
      } catch {
        kt.getState().setStatus(R, false);
      }
    }, [t.author.id]);

    const k = S(async () => {
      const R = t.author.id;
      kt.getState().setStatus(R, false);
      try {
        await En.unfollowUser(R);
      } catch {
        kt.getState().setStatus(R, true);
      }
    }, [t.author.id]);

    const E = S(() => {
      if (C !== undefined) {
        if (C) {
          f(
            n(om, {
              displayName: t.author.displayName,
              onConfirm: k,
              onClose: m,
            })
          );
        } else {
          P();
        }
      }
    }, [C, t.author.displayName, P, k, f, m]);

    const b = x(null);
    const M = x(null);
    const y = x(null);
    const [B, D] = A(wv);
    const [X, oe] = A(0);
    const K = X > B;
    W(
      () => () => {
        if (y.current) {
          cancelAnimationFrame(y.current);
          y.current = null;
        }
      },
      []
    );

    const Y = S(
      (R) => {
        if (R && h) {
          y.current && cancelAnimationFrame(y.current);

          y.current = requestAnimationFrame(() => {
            y.current = null;
            oe(R.scrollHeight);
          });
        }

        if (M) {
          M.current = R;
        }
      },
      [h]
    );

    const j = S((R) => {
      R.stopPropagation();

      D((L) => L + _v);
    }, []);

    gc(t.id, b);
    const G = _?.id === t.author.id;
    const re = t.reactions.myReaction !== null;
    const z = t.reactions.total;

    const F = S(async () => {
      const R = t.reactions.myReaction !== null;
      const L = R ? -1 : 1;
      w(t.id, R || "love", L);
      try {
        if (R) {
          await We.unlikePost(t.id);
        } else {
          await We.likePost(t.id);
        }
      } catch (ee) {
        w(t.id, R ? "love" : null, -L);
        console.error("Failed to toggle like:", ee);
      }
    }, [t.id, t.reactions.myReaction, w]);

    const q = x(null);
    const U = x(0);

    const $ = S((R) => {
      q.current = R.target;
    }, []);

    const V = S(() => {
      if (!re) {
        F();
      }
    }, [re, F]);

    const H = S(() => {
      p(T ?? t);
      const L = t.author.username ?? t.author.id;
      $(`/@${L}/post/${t.id}`);
    }, [t, T, p]);

    const te = S(
      (R) => {
        const R_target = R.target;
        if (
          R_target.closest("button") ||
          R_target.closest("a") ||
          R_target.closest("a") ||
          R_target.closest("video") ||
          R_target.closest("a") ||
          R_target.closest("video") ||
          R_target.closest("img")
        ) {
          return;
        }
        if (d) {
          const se = Date.now();
          if (se - U.current < 300) {
            U.current = 0;
            V();
            return;
          }
          U.current = se;
          return;
        }
        if (q.current !== R_target) {
          q.current = null;
          return;
        }
        q.current = null;
        const ee = window.getSelection();

        if (!ee || ee.toString().length <= 0) {
          H();
        }
      },
      [d, V, H]
    );

    const Q = S(
      (R) => {
        const L = t.author.username ?? t.author.id;
        const ee = `${window.location.origin}/@${L}/post/${R}`;
        navigator.clipboard.writeText(ee);
        Ve.success("Ссылка скопирована");
      },
      [t.author.username, t.author.id]
    );

    const ne = S(
      (R) => {
        f(n(Ri, { targetType: "post", targetId: R, onClose: m }));
      },
      [f, m]
    );

    const ae = S(
      (R) => {
        f(
          n(zf, {
            postId: t.id,
            initialText: t.text ?? "",
            initialSpans: t.spans ?? [],
          })
        );
      },
      [f, t.id, t.text, t.spans]
    );

    const he = S(
      async (R) => {
        if (confirm("Вы уверены, что хотите удалить этот пост?")) {
          try {
            await N(R);
            l?.(R);
          } catch (L) {
            console.error("Failed to delete post:", L);
          }
        }
      },
      [N, l]
    );

    const ve = S(() => {
      if (d) {
        f(n(Jf, { postId: t.id, onClose: m }));
      } else {
        const R = t.author.username ?? t.author.id;
        $(`/@${R}/post/${t.id}`);
      }
    }, [t.author.username, t.author.id, t.id, d, f, m]);

    const ce = S(() => {
      if (!G) {
        f(n(Mf, { post: t, onClose: m }));
      }
    }, [f, m, t, G]);

    const ze = Ne(() => gv(t.author), [t.author]);

    const Ye = Ne(() => ro(t.attachments), [t.attachments]);

    const Pe = Ne(() => vv(t.attachments), [t.attachments]);

    const rt = S(
      async (R) => {
        const L = Pe?.myVote ?? null;
        g(t.id, R, L);
        try {
          const ee = await We.votePoll(t.id, [R]);
          if (ee) {
            v(t.id, ee);
            return ee;
          }
        } catch (ee) {
          console.error("[Poll] Failed to vote:", ee);

          if (L) {
            g(t.id, L, R);
          }
        }
        return null;
      },
      [t.id, Pe?.myVote, g, v]
    );

    const ye = S(
      async (R) => {
        try {
          const L = await We.votePoll(t.id, R);
          if (L) {
            v(t.id, L);
            return L;
          }
        } catch (L) {
          console.error("[Poll] Failed to vote multiple:", L);
        }
        return null;
      },
      [t.id, v]
    );

    const I = n("div", {
      className: `${Me.postInner} ${h ? Me.isFeed : ""} ${r || ""}`,
      children: [
        h &&
          n("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            children: n(ot, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: C,
              onFollowBadgeClick: E,
            }),
          }),
        n("div", {
          className: Me.postContent,
          children: [
            n(rp, {
              author: ze,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !h,
              isOnOwnProfile: s,
              isPinned: i,
              onReport: ne,
              onEdit: c ?? ae,
              onDelete: he,
              onPin: u,
              onCopyLink: Q,
            }),
            n("div", {
              className: Me.postBody,
              children: [
                t.text &&
                  n("div", {
                    className: Me.textWrapper,
                    children: [
                      n("div", {
                        ref: Y,
                        className: `${Me.text} ${K ? Me.collapsed : ""}`,
                        style: h && K ? { maxHeight: `${B}px` } : undefined,
                        children: n(Si, {
                          text: t.text,
                          spans: t.spans ?? [],
                        }),
                      }),
                      h &&
                        K &&
                        n("button", {
                          type: "button",
                          className: Me.expandButton,
                          onClick: j,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                Ye.length > 0 && n(lr, { media: Ye, isFeed: h }),
                Pe &&
                  n(Bm, {
                    title: Pe.question,
                    options: Pe.options.map((R) => ({
                      id: R.id,
                      text: R.text,
                      votes: R.votes ?? 0,
                    })),
                    totalVotes: Pe.totalVotes ?? 0,
                    voted:
                      (Pe.myVotes ?? []).length > 0 ||
                      (Pe.myVote !== undefined && Pe.myVote !== null),
                    selectedOptionId: Pe.myVote,
                    selectedOptionIds: Pe.myVotes ?? [],
                    multipleChoice: Pe.multipleChoice ?? false,
                    onVote: rt,
                    onVoteMultiple: ye,
                    disabled: Pe.id.startsWith("temp-"),
                  }),
                t.originalPost && n(h0, { originalPost: t.originalPost }),
                n(Xp, {
                  liked: re,
                  reposted: false,
                  likesCount: z,
                  repostsCount: t.stats.reposts,
                  commentsCount: t.stats.comments,
                  viewsCount: t.stats.views,
                  dominantEmoji: t.dominantEmoji,
                  onLike: F,
                  onRepost: ce,
                  onComment: ve,
                  disableRepost: G,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return h
      ? n("article", {
          ref: b,
          className: `${Me.post} ${a ? "flash-highlight" : ""}`,
          onMouseDown: $,
          onClick: te,
          children: I,
        })
      : n("div", { ref: b, children: I });
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

const Cv = "g6-1VZON";
const Nv = "lynW5Wa4";
const Tv = "T0fnHo-a";
const bv = "rjatUzSP";
const kv = "QJXel6jH";
const Ev = "M0L3TUQK";
const Rv = "uaNtVNYe";
const Sv = "h2cCDI2R";
const Iv = "I-2aZIQb";
const Pv = "OiCpxOxo";
const xv = "_68znS2mA";

const Qe = {
  container: Cv,
  clearAllButton: Nv,
  toastList: Tv,
  toast: bv,
  toastLeft: kv,
  toastData: Ev,
  title: Rv,
  message: Sv,
  dragging: Iv,
  closeButton: Pv,
  belowTabs: xv,
};

const Av = "InmPF5d0";
const Lv = "-yE9w2BE";
const Mv = "-gCyC6KA";
const Ov = "YQDdKE40";
const Yn = { badge: Av, red: Lv, green: Mv, blue: Ov };
function $v({ type: e }) {
  const t =
    e === "like"
      ? Yn.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? Yn.green
      : Yn.blue;
  return n("div", {
    className: `${Yn.badge} ${t}`,
    children: [
      e === "follow" && n(rr, { size: 12 }),
      ["wall_post", "reply"].includes(e) && n(nr, { size: 12, filled: true }),
      e === "like" && n(co, { size: 12, filled: true }),
      e === "repost" && n(no, { size: 12 }),
    ],
  });
}
const Dv = sn(null);
function Bv({ children: e }) {
  const [t, o] = A([]);

  const r = S((c) => {
    const u = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    o((l) => [
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
    o((u) => u.filter((l) => l.id !== c));
  }, []);

  const i = S(() => {
    o([]);
  }, []);

  const a = rc();

  W(() => {
    if (a) {
      const c = Hv(a.type);

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

      ln.setState({ lastSseToast: null });
    }
  }, [a, r]);

  return n(Dv.Provider, {
    value: { toasts: t, addToast: r, removeToast: s, clearAll: i },
    children: [e, n(Uv, { toasts: t, onRemove: s, onClearAll: i })],
  });
}
function Uv({ toasts: e, onRemove: t, onClearAll: o }) {
  const [r, s] = A(false);

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
      o();
      s(false);
    }, 300);
  };

  return n("div", {
    className: `${Qe.container} ${i ? Qe.belowTabs : ""}`,
    children: [
      n("div", {
        className: `${Qe.toastList} ${r ? Qe.clearing : ""}`,
        children: a.map((u, l) =>
          n(
            Vv,
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
        n(Oe, {
          className: Qe.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const Fv = 80;
function Hv(e) {
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
function Wv(e) {
  const {
    apiType: t,
    entityId: o,
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

  if (t && o && s) {
    if (a.includes(t)) {
      return `/@${s}/post/${o}`;
    }
    if (c.includes(t)) {
      return r ? `/@${s}/post/${r}?comment=${o}` : `/@${s}/post/${o}`;
    }
  }
  return t && ["follow", "follow_request", "follow_accepted"].includes(t) && s
    ? `/@${s}`
    : i || "/notifications";
}
function Vv({
  toast: e,
  onRemove: t,
  clearingDelay: o = 0,
  isClearing: r = false,
}) {
  const s = x(null);
  const [i, a] = A(0);
  const [c, u] = A(false);
  const [l, h] = A(false);
  const d = x(0);
  const f = x(false);

  const m = (C) => {
    d.current = C.clientX;
    f.current = false;
    u(true);
  };

  const N = S(
    (C) => {
      if (!c) {
        return;
      }
      const P = C.clientX - d.current;

      if (Math.abs(P) > 5) {
        f.current = true;
      }

      a(P);
    },
    [c]
  );

  const w = S(() => {
    if (c) {
      u(false);

      if (Math.abs(i) > Fv) {
        h(true);
        a(i > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!f.current) {
          const C = Wv(e);

          if (C) {
            $(C);
            t(e.id);
          }
        }
      }
    }
  }, [c, i, t, e]);

  W(() => {
    if (c) {
      document.addEventListener("mousemove", N);
      document.addEventListener("mouseup", w);

      return () => {
        document.removeEventListener("mousemove", N);
        document.removeEventListener("mouseup", w);
      };
    }
  }, [c, N, w]);

  const g = (C) => {
    d.current = C.touches[0].clientX;
    u(true);
  };

  const v = (C) => {
    if (!c) {
      return;
    }
    const P = C.touches[0].clientX - d.current;
    a(P);
  };

  const p = () => {
    w();
  };

  const T = l || r ? 0 : Math.max(0, 1 - Math.abs(i) / 200);
  const _ = r ? 400 : i;
  return n("div", {
    ref: s,
    className: `${Qe.toast} ${c ? Qe.dragging : ""}`,
    style: {
      transform: `translateX(${_}px)`,
      opacity: T,
      transition: c
        ? "none"
        : `transform 0.3s ease ${o}ms, opacity 0.3s ease ${o}ms`,
    },
    onMouseDown: m,
    onTouchStart: g,
    onTouchMove: v,
    onTouchEnd: p,
    children: [
      n("div", {
        className: Qe.toastLeft,
        children: [
          n(ot, {
            src: e.actorAvatar || "",
            badge: n($v, { type: e.notificationType }),
          }),
          n("div", {
            className: Qe.toastData,
            children: [
              e.actorName &&
                n("div", {
                  className: Qe.title,
                  children: n(Mn, { name: e.actorName }),
                }),
              n("p", { className: Qe.message, children: e.message }),
            ],
          }),
        ],
      }),
      n("button", {
        className: Qe.closeButton,
        onClick: (C) => {
          C.stopPropagation();
          t(e.id);
        },
        onMouseDown: (C) => C.stopPropagation(),
        onTouchStart: (C) => C.stopPropagation(),
        children: n(wt, { size: 16 }),
      }),
    ],
  });
}
const jv = "Ud6qvRRd";
const zv = "kzTK4YgB";
const Yv = "a7Cxtsok";
const Xv = "D1RDF-pF";
const qv = "wPhOb3DB";
const Zv = "rrrryD13";
const Gv = "pO3FId5P";
const Kv = "Y-gzFyZu";
const Jv = "Bnd7yPWS";
const Qv = "vVObi6FX";
const e1 = "erZ4kzKX";
const t1 = "nyzroaD5";

const zt = {
  container: jv,
  toast: zv,
  slideUp: Yv,
  leaving: Xv,
  fadeOut: qv,
  info: Zv,
  icon: Gv,
  message: Kv,
  closeButton: Jv,
  success: Qv,
  warning: e1,
  error: t1,
};

const n1 = { success: Ec, error: yc, warning: Sc, info: Cc };
function o1({ id: e, type: t, message: o, onRemove: r }) {
  const [s, i] = A(false);
  const n1_t = n1[t];

  const c = S(() => {
    i(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return n("div", {
    className: `${zt.toast} ${zt[t]} ${s ? zt.leaving : ""}`,
    children: [
      n("span", { className: zt.icon, children: n(n1_t, { size: 20 }) }),
      n("span", { className: zt.message, children: o }),
      n("button", {
        className: zt.closeButton,
        onClick: c,
        children: n(wt, { size: 14 }),
      }),
    ],
  });
}
function r1() {
  const e = nn((o) => o.toasts);

  const t = nn((o) => o.removeToast);

  return (
    e.length === 0 ||
    n("div", {
      className: zt.container,
      children: e.map((o) =>
        n(o1, { id: o.id, type: o.type, message: o.message, onRemove: t }, o.id)
      ),
    })
  );
}
const s1 = "bDtnMOtP";
const i1 = "NCty1Mw6";
const a1 = "DPhGAlZS";
const c1 = "Ea-iW9dx";
const Xn = { tabs: s1, indicator: i1, button: a1, active: c1 };
function l1({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: o,
  onChange: r,
  className: s = "",
}) {
  const [i, a] = A(t);
  const c = o !== undefined ? o : i;
  const [u, l] = A({});
  const h = x([]);
  const d = x(null);

  const f = S(() => {
    const g = h.current[c];
    if (g) {
      const g_parentElement = g.parentElement;
      const p = g_parentElement
        ? parseFloat(getComputedStyle(g_parentElement).paddingLeft)
        : 0;
      l({
        width: g.offsetWidth,
        transform: `translateX(${g.offsetLeft - p}px)`,
      });
    }
  }, [c]);

  W(() => {
    f();
  }, [f]);

  W(() => {
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
    if (o === undefined) {
      a(g);
    }

    r?.(g, e[g]);
  };

  const N = (g) => (typeof g == "string" ? g : g.label);

  const w = (g, v) => (typeof g == "string" ? `${v}` : g.id);

  return n("div", {
    ref: d,
    className: `${Xn.tabs} ${s}`,
    children: [
      n("div", { className: Xn.indicator, style: u }),
      e.map((g, v) =>
        n(
          "button",
          {
            ref: (p) => {
              h.current[v] = p;
            },
            onClick: () => m(v),
            className: `${Xn.button} ${c === v ? Xn.active : ""}`,
            children: N(g),
          },
          w(g, v)
        )
      ),
    ],
  });
}
const u1 = "NVOOxjgX";
const d1 = "Y1pJGa1C";
const h1 = "Y-AJ8Bcl";
const f1 = "UoWopgfe";
const m1 = "_8Vne0lg2";
const p1 = "_28Ha-lQH";
const g1 = "vfJEvaRM";
const v1 = "KTWTUpWU";
const w1 = "iPq57X43";
const _1 = "LgYwhGUE";

const xt = {
  inputWrapper: u1,
  label: d1,
  hint: h1,
  input: f1,
  error: m1,
  small: p1,
  medium: g1,
  large: v1,
  default: "nPKZPuOS",
  outline: w1,
  errorText: _1,
};

function us({
  value: e,
  onChange: t,
  label: o,
  hint: r,
  error: s,
  size: i = "medium",
  variant: a = "default",
  className: c,
  ...u
}) {
  const l = (h) => {
    t?.(h.currentTarget.value);
  };
  return n("div", {
    className: xt.inputWrapper,
    children: [
      o &&
        n("label", {
          className: xt.label,
          children: [o, r && n("span", { className: xt.hint, children: r })],
        }),
      n("input", {
        className: `${xt.input} ${xt[i]} ${xt[a]} ${s ? xt.error : ""} ${
          c || ""
        }`,
        value: e,
        onInput: l,
        ...u,
      }),
      s && n("span", { className: xt.errorText, children: s }),
    ],
  });
}
const y1 = "auLTZ1kb";
const C1 = "ew-0JcAX";
const N1 = "PUBzv9z1";
const T1 = "YTQ-O-Jq";
const qn = { content: y1, title: C1, subtitle: N1, actions: T1 };
function b1({ onClose: e }) {
  const t = async () => {
    await Ce.getState().deleteAccount();
    e();
  };
  return n(nt, {
    onClose: e,
    showHeader: false,
    children: n("div", {
      className: qn.content,
      children: [
        n("h2", { className: qn.title, children: "Удалить аккаунт?" }),
        n("p", {
          className: qn.subtitle,
          children:
            "Вы действительно хотите удалить аккаунт? У вас будет 30 дней на восстановление аккаунта, если вы передумаете.",
        }),
        n("div", {
          className: qn.actions,
          children: [
            n(Oe, {
              variant: "secondary",
              onClick: (o) => {
                o.stopPropagation();
                e();
              },
              children: "Отмена",
            }),
            n(Oe, {
              variant: "danger",
              onClick: (o) => {
                o.stopPropagation();
                t();
              },
              children: "Удалить аккаунт",
            }),
          ],
        }),
      ],
    }),
  });
}
const k1 = "pLfPrgJ5";
const E1 = "mieIfajF";
const R1 = "BbGOi3lO";
const S1 = "MbkPeeiM";
const I1 = "qZD40Z6k";
const P1 = "hQr2usrz";
const x1 = "pf7q9vs0";
const A1 = "V5xmKxYo";
const L1 = "rvWQR6Xa";
const M1 = "_7yzPm4JT";
const O1 = "MMIk7qf0";
const $1 = "KPGEssbG";
const D1 = "iYFBq1pq";
const B1 = "Q7pQ-w1E";
const U1 = "_2qKSMSK0";
const F1 = "Vd3Omle7";
const H1 = "_9lJIfmJW";
const W1 = "h9xdn3cX";
const V1 = "iYLHTDhv";
const j1 = "aNx8mglN";
const z1 = "yZwuPX7N";
const Y1 = "doLL9-3u";
const X1 = "rS40gGQ1";
const q1 = "rO7FJKjS";
const Z1 = "sKTJO-8u";
const G1 = "O34mZMP-";
const K1 = "qFEgm3nA";
const J1 = "_8QZBocZJ";
const Q1 = "CS8kW48F";
const ew = "Xbe8XAiR";
const tw = "PoMEkcnH";
const nw = "i-crt3Uo";
const ow = "_9Si0cK4K";
const rw = "FkHpXk4J";
const sw = "_9Mmd-Oyx";
const iw = "_2T7P171x";
const aw = "SsHbiTj4";
const cw = "_4RLslTa2";
const lw = "MErHFAft";
const uw = "zCq-iLoM";
const dw = "L3ey0Xp8";
const hw = "Dis44184";
const fw = "_0JZ-djug";
const mw = "_3wpSaahs";
const pw = "J5--smNi";

const O = {
  modalContainer: k1,
  settingsModal: E1,
  sidebar: R1,
  sidebarTitle: S1,
  navItem: I1,
  active: P1,
  contentWrapper: x1,
  content: A1,
  actionBar: L1,
  confirmOverlay: M1,
  confirmDialog: O1,
  confirmText: $1,
  confirmActions: D1,
  contentTitle: B1,
  section: U1,
  sectionTitle: F1,
  settingItem: H1,
  clickable: W1,
  column: V1,
  settingInfo: j1,
  settingIcon: z1,
  blue: Y1,
  red: X1,
  purple: q1,
  settingText: Z1,
  settingTitle: G1,
  settingDescription: K1,
  settingControl: J1,
  avatarDisplay: Q1,
  pinGrid: ew,
  pinItem: tw,
  pinActive: nw,
  pinImage: ow,
  pinName: rw,
  bioTextarea: sw,
  fieldError: iw,
  saveError: aw,
  emptyBlocklist: cw,
  blockedUsersList: lw,
  blockedUserItem: uw,
  blockedUserInfo: dw,
  blockedUserName: hw,
  blockedUserUsername: fw,
  deleteAccountButton: mw,
  logoutButton: pw,
};

const G_ = xn(({ onDirtyChange: t, onSavingChange: o, onClose: r }, s) => {
  const i = Ce((F) => F.profile);

  const a = Ce((F) => F.logout);

  const { openModal: c, closeModal: u } = qt();
  const l = vt();
  const [h] = An();
  const d = h?.url || window.location.pathname;
  const [f, m] = A(true);
  const [N, w] = A(false);
  const [g, v] = A(false);
  const [p, T] = A({});
  const [_, C] = A(null);
  const [P, k] = A(null);
  const [E, b] = A({ name: "", username: "", bio: "", avatar: "😀" });
  const [M, y] = A([]);
  const [B, D] = A(null);
  const X = x(null);
  const [oe, K] = A(true);

  W(() => {
    if (i) {
      const F = {
        name: i.displayName,
        username: i.username || "",
        bio: i.bio || "",
        avatar: i.avatar,
      };
      b(F);
      k(F);
      m(false);
      const q = i.pin ?? null;
      D(q);
      X.current = q;
    }
  }, [i]);

  W(() => {
    pt.getMyPins()
      .then((F) => {
        y(F.pins);

        if (F.activePin && !X.current) {
          const q = F.pins.find((U) => U.slug === F.activePin);

          if (q) {
            D(q);
            X.current = q;
          }
        }
      })
      .catch(() => y([]))
      .finally(() => K(false));
  }, []);

  W(() => {
    t(g);
  }, [g]);

  W(() => {
    o(N);
  }, [N]);

  const Y = S(
    (F, q) => {
      if (!P) {
        return false;
      }

      const U = Object.keys(F).some((V) => F[V] !== P[V]);

      const $ = (q?.slug ?? null) !== (X.current?.slug ?? null);
      return U || $;
    },
    [P]
  );

  const j = (F, q) => {
    if (p[F]) {
      T((U) => {
        const $ = { ...U };
        delete $[F];
        return $;
      });
    }

    C(null);

    b((U) => {
      const $ = { ...U, [F]: q };
      v(Y($, B));
      return $;
    });
  };

  const G = S(
    (F) => {
      const q = B?.slug === F.slug || F;
      D(q);
      v(Y(E, q));
    },
    [B, E, Y]
  );

  const re = async () => {
    if (!g || N) {
      return;
    }
    w(true);
    T({});
    C(null);
    const F = P?.username;
    const E_username = E.username;
    try {
      if (P && Object.keys(E).some((H) => E[H] !== P[H])) {
        await pt.updateProfile({
          displayName: E.name,
          username: E.username || undefined,
          bio: E.bio || null,
        });
      }

      if ((B?.slug ?? null) !== (X.current?.slug ?? null)) {
        if (B) {
          await pt.setActivePin(B.slug);
        } else {
          await pt.removeActivePin();
        }
      }

      k({ ...E });
      X.current = B;
      v(false);
      const V = Ce.getState().profile;

      if (V) {
        Ce.getState().setProfile({
          ...V,
          displayName: E.name,
          username: E.username,
          bio: E.bio || null,
          pin: B,
        });
      }

      if (
        E_username &&
        E_username !== F &&
        (d === `/@${F}` || d === `/@${i?.id}`)
      ) {
        $(`/@${E_username}`);
      }
    } catch (U) {
      console.error("Failed to save profile:", U);

      if (Le(U)) {
        if (U.errors) {
          const $ = {};
          for (const [V, H] of Object.entries(U.errors)) {
            $[V] = H[0] || "Ошибка валидации";
          }
          T($);
        } else {
          C(U.message || "Не удалось сохранить изменения");
        }
      } else {
        C("Не удалось сохранить изменения");
      }
    } finally {
      w(false);
    }
  };

  const z = () => {
    if (P) {
      b({ ...P });
      D(X.current);
      v(false);
    }
  };

  cn(s, () => ({
    save: re,
    discard: z,
  }));

  return f
    ? n(Te, {
        children: [
          n("h2", { className: O.contentTitle, children: "Аккаунт" }),
          n(ut, {}),
        ],
      })
    : n(Te, {
        children: [
          n("h2", { className: O.contentTitle, children: "Аккаунт" }),
          n("div", {
            className: O.section,
            children: [
              n("div", {
                className: O.settingItem,
                children: [
                  n("div", {
                    className: O.settingInfo,
                    children: n("div", {
                      className: O.settingText,
                      children: [
                        n("span", {
                          className: O.settingTitle,
                          children: "Эмоджи-клан",
                        }),
                        n("span", {
                          className: O.settingDescription,
                          children: "Выбран при регистрации. Изменить нельзя",
                        }),
                      ],
                    }),
                  }),
                  n("div", {
                    className: O.avatarDisplay,
                    children: E.avatar,
                  }),
                ],
              }),
              n("div", {
                className: O.settingItem,
                children: [
                  n("div", {
                    className: O.settingInfo,
                    children: n("div", {
                      className: O.settingText,
                      children: [
                        n("span", {
                          className: O.settingTitle,
                          children: "Имя",
                        }),
                        n("span", {
                          className: O.settingDescription,
                          children: "Ваше отображаемое имя",
                        }),
                      ],
                    }),
                  }),
                  n("div", {
                    className: O.settingControl,
                    children: [
                      n(us, {
                        value: E.name,
                        onChange: (F) => j("name", F),
                      }),
                      p.displayName &&
                        n("span", {
                          className: O.fieldError,
                          children: p.displayName,
                        }),
                    ],
                  }),
                ],
              }),
              n("div", {
                className: O.settingItem,
                children: [
                  n("div", {
                    className: O.settingInfo,
                    children: n("div", {
                      className: O.settingText,
                      children: [
                        n("span", {
                          className: O.settingTitle,
                          children: "Username",
                        }),
                        n("span", {
                          className: O.settingDescription,
                          children:
                            "Ваш уникальный идентификатор (только латиница, цифры и _)",
                        }),
                      ],
                    }),
                  }),
                  n("div", {
                    className: O.settingControl,
                    children: [
                      n(us, {
                        value: E.username,
                        onChange: (F) => j("username", F),
                      }),
                      p.username &&
                        n("span", {
                          className: O.fieldError,
                          children: p.username,
                        }),
                    ],
                  }),
                ],
              }),
              n("div", {
                className: `${O.settingItem} ${O.column}`,
                children: [
                  n("div", {
                    className: O.settingInfo,
                    children: n("div", {
                      className: O.settingText,
                      children: [
                        n("span", {
                          className: O.settingTitle,
                          children: "О себе",
                        }),
                        n("span", {
                          className: O.settingDescription,
                          children: "Расскажите немного о себе",
                        }),
                      ],
                    }),
                  }),
                  n("textarea", {
                    className: O.bioTextarea,
                    value: E.bio,
                    onChange: (F) => j("bio", F.target.value),
                    placeholder: "Напиши что-нибудь о себе...",
                    rows: 3,
                  }),
                  p.bio &&
                    n("span", { className: O.fieldError, children: p.bio }),
                ],
              }),
              !oe &&
                M.length > 0 &&
                n("div", {
                  className: `${O.settingItem} ${O.column}`,
                  children: [
                    n("div", {
                      className: O.settingInfo,
                      children: n("div", {
                        className: O.settingText,
                        children: [
                          n("span", {
                            className: O.settingTitle,
                            children: "Пин",
                          }),
                          n("span", {
                            className: O.settingDescription,
                            children: "Отображается рядом с именем",
                          }),
                        ],
                      }),
                    }),
                    n("div", {
                      className: O.pinGrid,
                      children: M.map((F) =>
                        n(
                          "button",
                          {
                            className: `${O.pinItem} ${
                              B?.slug === F.slug ? O.pinActive : ""
                            }`,
                            onClick: () => G(F),
                            disabled: N,
                            title: F.description || F.name,
                            type: "button",
                            children: [
                              n("img", {
                                src: `/assets/pins/${F.slug}.png`,
                                alt: F.name,
                                className: O.pinImage,
                              }),
                              n("span", {
                                className: O.pinName,
                                children: F.name,
                              }),
                            ],
                          },
                          F.slug
                        )
                      ),
                    }),
                  ],
                }),
              _ && n("div", { className: O.saveError, children: _ }),
            ],
          }),
          l &&
            n("div", {
              className: O.section,
              children: n("button", {
                type: "button",
                className: O.logoutButton,
                onClick: () => {
                  a();
                  r();
                },
                children: [
                  n(di, { size: 20 }),
                  n("span", { children: "Выйти из аккаунта" }),
                ],
              }),
            }),
          n("div", {
            className: O.section,
            children: n("button", {
              type: "button",
              className: O.deleteAccountButton,
              onClick: () => c(n(b1, { onClose: u })),
              children: "Удалить аккаунт",
            }),
          }),
        ],
      });
});

const gw = "VTYYWVhN";
const vw = "xJNAnk3E";
const ww = "Jb9vmr45";
const _w = "otok2a-L";
const yw = "gRf2HMVj";
const Cw = "zNll7clI";
const Nw = "ayLHJkUj";

const Ht = {
  selectWrapper: gw,
  select: vw,
  open: ww,
  selectedValue: _w,
  dropdown: yw,
  option: Cw,
  selected: Nw,
};

function ds({ value: e, options: t, onChange: o, disabled: r }) {
  const [s, i] = A(false);
  const a = x(null);

  const c = t.find((l) => l.value === e);

  W(() => {
    const l = (h) => {
      if (a.current && !a.current.contains(h.target)) {
        i(false);
      }
    };

    if (s) {
      document.addEventListener("mousedown", l);
    }

    return () => {
      document.removeEventListener("mousedown", l);
    };
  }, [s]);
  const u = (l) => {
    o(l);
    i(false);
  };
  return n("div", {
    ref: a,
    className: Ht.selectWrapper,
    children: [
      n("button", {
        type: "button",
        className: `${Ht.select} ${s ? Ht.open : ""}`,
        onClick: (l) => {
          l.stopPropagation();

          if (!r) {
            i(!s);
          }
        },
        disabled: r,
        children: [
          n("span", { className: Ht.selectedValue, children: c?.label }),
          n(Ic, { size: 16 }),
        ],
      }),
      s &&
        n("div", {
          className: Ht.dropdown,
          children: t.map((l) =>
            n(
              "button",
              {
                type: "button",
                className: `${Ht.option} ${l.value === e ? Ht.selected : ""}`,
                onClick: () => u(l.value),
                children: l.label,
              },
              l.value
            )
          ),
        }),
    ],
  });
}

const hs = [
  { value: "everyone", label: "Все" },
  { value: "followers", label: "Подписчики" },
  { value: "mutual", label: "Взаимные подписчики" },
  { value: "nobody", label: "Никто" },
];

const K_ = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Тёмная" },
  { value: "system", label: "Системная" },
];

const Tw = "yIp1zbgr";
const bw = "SGtMRtjC";
const fs = { toggle: Tw, active: bw };
function At({ checked: e, onChange: t, disabled: o }) {
  const r = (s) => {
    s.stopPropagation();

    if (!o) {
      t(!e);
    }
  };
  return n("button", {
    type: "button",
    className: `${fs.toggle} ${e ? fs.active : ""}`,
    onClick: r,
    disabled: o,
    role: "switch",
    "aria-checked": e,
  });
}

const J_ = xn(({ onDirtyChange: t, onSavingChange: o }, r) => {
  const { settings: s, fetchSettings: i, updateSettings: a } = ln();

  const [c, u] = A({
    webEnabled: true,
    soundEnabled: true,
    follows: true,
    reactions: true,
    replies: true,
    mentions: true,
    wallPosts: true,
  });

  const [l, h] = A(null);
  const [d, f] = A(false);
  const [m, N] = A(false);
  const [w, g] = A(false);

  W(() => {
    if (!w && !s) {
      i();
    }
  }, [w]);

  W(() => {
    if (s && !w) {
      const _ = {
        webEnabled: s.webEnabled,
        soundEnabled: s.soundEnabled,
        follows: s.preferences.follows,
        reactions: s.preferences.reactions,
        replies: s.preferences.replies,
        mentions: s.preferences.mentions,
        wallPosts: s.preferences.wallPosts,
      };
      u(_);
      h(_);
      f(false);
      g(true);
    }
  }, [s, w]);

  W(() => {
    t(d);
  }, [d]);

  W(() => {
    o(m);
  }, [m]);

  const v = (_, C) => {
    const P = { ...c, [_]: C };
    u(P);

    if (l) {
      const k = Object.keys(P).some((E) => P[E] !== l[E]);
      f(k);
    }
  };

  const p = async () => {
    if (!(!d || m)) {
      N(true);
      try {
        await a({
          webEnabled: c.webEnabled,
          soundEnabled: c.soundEnabled,
          preferences: {
            follows: c.follows,
            reactions: c.reactions,
            replies: c.replies,
            mentions: c.mentions,
            wallPosts: c.wallPosts,
          },
        });

        h({ ...c });
        f(false);
        Ve.success("Настройки уведомлений сохранены");
      } catch (_) {
        console.error("Failed to save notification settings:", _);
        Ve.error("Не удалось сохранить настройки");
      } finally {
        N(false);
      }
    }
  };

  const T = () => {
    if (l) {
      u({ ...l });
      f(false);
    }
  };

  cn(r, () => ({
    save: p,
    discard: T,
  }));

  return n(Te, {
    children: [
      n("h2", { className: O.contentTitle, children: "Уведомления" }),
      n("div", {
        className: O.section,
        children: [
          n("div", { className: O.sectionTitle, children: "Основные" }),
          n("div", {
            className: `${O.settingItem} ${O.clickable}`,
            onClick: () => v("webEnabled", !c.webEnabled),
            children: [
              n("div", {
                className: O.settingInfo,
                children: [
                  n("div", {
                    className: `${O.settingIcon} ${O.blue}`,
                    children: n(or, { size: 20 }),
                  }),
                  n("div", {
                    className: O.settingText,
                    children: [
                      n("span", {
                        className: O.settingTitle,
                        children: "Уведомления",
                      }),
                      n("span", {
                        className: O.settingDescription,
                        children: "Включение или отключение всех уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              n(At, {
                checked: c.webEnabled,
                onChange: (_) => v("webEnabled", _),
              }),
            ],
          }),
          n("div", {
            className: `${O.settingItem} ${O.clickable}`,
            onClick: () => v("soundEnabled", !c.soundEnabled),
            children: [
              n("div", {
                className: O.settingInfo,
                children: [
                  n("div", {
                    className: `${O.settingIcon} ${O.blue}`,
                    children: n(Oc, { size: 20 }),
                  }),
                  n("div", {
                    className: O.settingText,
                    children: [
                      n("span", {
                        className: O.settingTitle,
                        children: "Уведомления со звуком",
                      }),
                      n("span", {
                        className: O.settingDescription,
                        children: "Воспроизводить звуки уведомлений",
                      }),
                    ],
                  }),
                ],
              }),
              n(At, {
                checked: c.soundEnabled,
                onChange: (_) => v("soundEnabled", _),
              }),
            ],
          }),
        ],
      }),
      n("div", {
        className: O.section,
        children: [
          n("div", { className: O.sectionTitle, children: "Пользователи" }),
          n("div", {
            className: `${O.settingItem} ${O.clickable}`,
            onClick: () => v("follows", !c.follows),
            children: [
              n("div", {
                className: O.settingInfo,
                children: [
                  n("div", {
                    className: `${O.settingIcon} ${O.blue}`,
                    children: n($c, { size: 20 }),
                  }),
                  n("div", {
                    className: O.settingText,
                    children: [
                      n("span", {
                        className: O.settingTitle,
                        children: "Подписки",
                      }),
                      n("span", {
                        className: O.settingDescription,
                        children: "Уведомления о подписках и запросах в друзья",
                      }),
                    ],
                  }),
                ],
              }),
              n(At, {
                checked: c.follows,
                onChange: (_) => v("follows", _),
              }),
            ],
          }),
          n("div", {
            className: `${O.settingItem} ${O.clickable}`,
            onClick: () => v("wallPosts", !c.wallPosts),
            children: [
              n("div", {
                className: O.settingInfo,
                children: [
                  n("div", {
                    className: `${O.settingIcon} ${O.blue}`,
                    children: n(Vr, { size: 20 }),
                  }),
                  n("div", {
                    className: O.settingText,
                    children: [
                      n("span", {
                        className: O.settingTitle,
                        children: "Посты на стене",
                      }),
                      n("span", {
                        className: O.settingDescription,
                        children: "Уведомления о новых постах на вашей стене",
                      }),
                    ],
                  }),
                ],
              }),
              n(At, {
                checked: c.wallPosts,
                onChange: (_) => v("wallPosts", _),
              }),
            ],
          }),
        ],
      }),
      n("div", {
        className: O.section,
        children: [
          n("div", { className: O.sectionTitle, children: "Посты" }),
          n("div", {
            className: `${O.settingItem} ${O.clickable}`,
            onClick: () => v("reactions", !c.reactions),
            children: [
              n("div", {
                className: O.settingInfo,
                children: [
                  n("div", {
                    className: `${O.settingIcon} ${O.red}`,
                    children: n(Lc, { size: 20 }),
                  }),
                  n("div", {
                    className: O.settingText,
                    children: [
                      n("span", {
                        className: O.settingTitle,
                        children: "Лайки и реакции",
                      }),
                      n("span", {
                        className: O.settingDescription,
                        children:
                          "Уведомления о реакциях на ваши посты и комментарии",
                      }),
                    ],
                  }),
                ],
              }),
              n(At, {
                checked: c.reactions,
                onChange: (_) => v("reactions", _),
              }),
            ],
          }),
          n("div", {
            className: `${O.settingItem} ${O.clickable}`,
            onClick: () => v("replies", !c.replies),
            children: [
              n("div", {
                className: O.settingInfo,
                children: [
                  n("div", {
                    className: `${O.settingIcon} ${O.blue}`,
                    children: n(Vr, { size: 20 }),
                  }),
                  n("div", {
                    className: O.settingText,
                    children: [
                      n("span", {
                        className: O.settingTitle,
                        children: "Комментарии и ответы",
                      }),
                      n("span", {
                        className: O.settingDescription,
                        children: "Уведомления о новых комментариях и ответах",
                      }),
                    ],
                  }),
                ],
              }),
              n(At, {
                checked: c.replies,
                onChange: (_) => v("replies", _),
              }),
            ],
          }),
          n("div", {
            className: `${O.settingItem} ${O.clickable}`,
            onClick: () => v("mentions", !c.mentions),
            children: [
              n("div", {
                className: O.settingInfo,
                children: [
                  n("div", {
                    className: `${O.settingIcon} ${O.purple}`,
                    children: n(Mc, { size: 20 }),
                  }),
                  n("div", {
                    className: O.settingText,
                    children: [
                      n("span", {
                        className: O.settingTitle,
                        children: "Упоминания",
                      }),
                      n("span", {
                        className: O.settingDescription,
                        children: "Уведомления когда вас упоминают в постах",
                      }),
                    ],
                  }),
                ],
              }),
              n(At, {
                checked: c.mentions,
                onChange: (_) => v("mentions", _),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const Q_ = xn(({ onDirtyChange: t, onSavingChange: o }, r) => {
  const [s, i] = A({
    isPrivate: false,
    whoCanPostOnWall: "everyone",
    whoCanSeeMyPostReactions: "everyone",
    showLastSeen: true,
  });

  const [a, c] = A(null);
  const [u, l] = A(false);
  const [h, d] = A(false);
  const [f, m] = A(false);
  const [N, w] = A(false);
  const [g, v] = A([]);
  const [p, T] = A(null);
  const [_, C] = A(true);
  const [P, k] = A(false);
  const [E, b] = A(false);

  W(() => {
    M();

    if (!E) {
      y();
    }
  }, []);

  W(() => {
    t(u);
  }, [u]);

  W(() => {
    o(h);
  }, [h]);

  const M = async () => {
    if (!N) {
      m(true);
    }

    try {
      const Y = await pt.getPrivacySettings();

      const j = {
        isPrivate: Y.isPrivate ?? false,
        whoCanPostOnWall: Y.whoCanPostOnWall ?? "everyone",
        whoCanSeeMyPostReactions: Y.whoCanSeeMyPostReactions ?? "everyone",
        showLastSeen: Y.showLastSeen ?? true,
      };

      i(j);
      c(j);
      l(false);
      w(true);
    } catch (Y) {
      console.error("Failed to load privacy settings:", Y);
    } finally {
      m(false);
    }
  };

  const y = async (Y) => {
    if (!P) {
      k(true);
      try {
        const j = await En.getBlockedUsers({ cursor: Y, limit: 20 });

        v(Y ? (G) => [...G, ...j.users] : j.users);

        T(j.nextCursor);
        C(j.hasMore);
        b(true);
      } catch (j) {
        console.error("Failed to load blocked users:", j);
      } finally {
        k(false);
      }
    }
  };

  const B = async (Y) => {
    try {
      await En.unblockUser(Y);

      v((j) => j.filter((G) => G.id !== Y));

      Ve.success("Пользователь разблокирован");
    } catch (j) {
      console.error("Failed to unblock user:", j);
      Ve.error("Не удалось разблокировать пользователя");
    }
  };

  const D = () => {
    if (_ && p) {
      y(p);
    }
  };

  const X = (Y, j) => {
    const G = { ...s, [Y]: j };
    i(G);

    if (a) {
      const re = Object.keys(G).some((z) => G[z] !== a[z]);
      l(re);
    }
  };

  const oe = async () => {
    if (!(!u || h)) {
      d(true);
      try {
        await pt.updatePrivacySettings({
          whoCanPostOnWall: s.whoCanPostOnWall,
          whoCanSeeMyPostReactions: s.whoCanSeeMyPostReactions,
          showLastSeen: s.showLastSeen,
        });

        c({ ...s });
        l(false);
        Ve.success("Настройки приватности сохранены");
      } catch (Y) {
        console.error("Failed to save privacy settings:", Y);
        Ve.error("Не удалось сохранить настройки");
      } finally {
        d(false);
      }
    }
  };

  const K = () => {
    if (a) {
      i({ ...a });
      l(false);
    }
  };

  cn(r, () => ({
    save: oe,
    discard: K,
  }));

  return n(Te, {
    children: [
      n("h2", { className: O.contentTitle, children: "Приватность" }),
      N &&
        n("div", {
          className: O.section,
          children: [
            n("div", {
              className: O.settingItem,
              children: [
                n("div", {
                  className: O.settingInfo,
                  children: n("div", {
                    className: O.settingText,
                    children: [
                      n("span", {
                        className: O.settingTitle,
                        children: "Стена",
                      }),
                      n("span", {
                        className: O.settingDescription,
                        children: "Кто может писать на вашей стене",
                      }),
                    ],
                  }),
                }),
                n(ds, {
                  value: s.whoCanPostOnWall,
                  options: hs,
                  onChange: (Y) => X("whoCanPostOnWall", Y),
                }),
              ],
            }),
            n("div", {
              className: O.settingItem,
              children: [
                n("div", {
                  className: O.settingInfo,
                  children: n("div", {
                    className: O.settingText,
                    children: [
                      n("span", {
                        className: O.settingTitle,
                        children: "Лайки",
                      }),
                      n("span", {
                        className: O.settingDescription,
                        children: "Кто может видеть ваши лайкнутые посты",
                      }),
                    ],
                  }),
                }),
                n(ds, {
                  value: s.whoCanSeeMyPostReactions,
                  options: hs,
                  onChange: (Y) => X("whoCanSeeMyPostReactions", Y),
                }),
              ],
            }),
            n("div", {
              className: `${O.settingItem} ${O.clickable}`,
              onClick: () => X("showLastSeen", !s.showLastSeen),
              children: [
                n("div", {
                  className: O.settingInfo,
                  children: n("div", {
                    className: O.settingText,
                    children: [
                      n("span", {
                        className: O.settingTitle,
                        children: "Онлайн-статус",
                      }),
                      n("span", {
                        className: O.settingDescription,
                        children: "Показывать время последнего визита",
                      }),
                    ],
                  }),
                }),
                n(At, {
                  checked: s.showLastSeen,
                  onChange: (Y) => X("showLastSeen", Y),
                }),
              ],
            }),
          ],
        }),
      n("div", {
        className: O.section,
        children: [
          n("div", {
            className: O.sectionTitle,
            children: "Чёрный список",
          }),
          P && !E
            ? n(ut, {})
            : E
            ? n(Te, {
                children:
                  g.length === 0
                    ? n("div", {
                        className: O.emptyBlocklist,
                        children: "Чёрный список пуст",
                      })
                    : n("div", {
                        className: O.blockedUsersList,
                        children: [
                          g.map((Y) =>
                            n(
                              "div",
                              {
                                className: O.blockedUserItem,
                                children: [
                                  n(ot, {
                                    src: Y.avatar,
                                    alt: Y.displayName,
                                    size: "sm",
                                  }),
                                  n("div", {
                                    className: O.blockedUserInfo,
                                    children: [
                                      n("span", {
                                        className: O.blockedUserName,
                                        children: Y.displayName,
                                      }),
                                      Y.username &&
                                        n("span", {
                                          className: O.blockedUserUsername,
                                          children: ["@", Y.username],
                                        }),
                                    ],
                                  }),
                                  n(Oe, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: () => B(Y.id),
                                    children: "Разблокировать",
                                  }),
                                ],
                              },
                              Y.id
                            )
                          ),
                          _ &&
                            n(Oe, {
                              variant: "secondary",
                              onClick: D,
                              disabled: P,
                              children: P ? "Загрузка..." : "Загрузить ещё",
                            }),
                        ],
                      }),
              })
            : null,
        ],
      }),
    ],
  });
});

function kw(e) {
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

  const [o, r] = A(t);

  W(() => {
    const s = () => r(t());
    window.addEventListener("resize", s);

    return () => window.removeEventListener("resize", s);
  }, [t]);

  return o;
}
function Ew() {
  W(() => {
    const e = window.innerWidth - document.documentElement.clientWidth;
    const document_documentElement = document.documentElement;
    const o = document_documentElement.style.overflow;
    document_documentElement.style.overflow = "hidden";

    if (e > 0) {
      document_documentElement.style.setProperty(
        "--scrollbar-compensation",
        `${e}px`
      );
    }

    return () => {
      document_documentElement.style.overflow = o;
      document_documentElement.style.setProperty(
        "--scrollbar-compensation",
        "0px"
      );
    };
  }, []);
}
function Rw({ onClose: e, onPrev: t, onNext: o }) {
  W(() => {
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
          o();
          break;
        }
      }
    };
    window.addEventListener("keydown", r, true);

    return () => window.removeEventListener("keydown", r, true);
  }, [e, t, o]);
}
function Sw({ initialIndex: e, total: t }) {
  const [o, r] = A(e);
  const [s, i] = A(false);
  const a = x(null);

  const c = S(() => {
    if (a.current) {
      clearTimeout(a.current);
      a.current = null;
      i(false);
    }
  }, []);

  const u = S(
    (d) => {
      if (d !== o && d >= 0 && d >= 0 && d < t) {
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
    [o, t, c]
  );

  const l = S(() => {
    if (o > 0) {
      u(o - 1);
    }
  }, [o, u]);

  const h = S(() => {
    if (o < t - 1) {
      u(o + 1);
    }
  }, [o, t, u]);

  return {
    currentIndex: o,
    setCurrentIndex: r,
    isAnimating: s,
    setIsAnimating: i,
    cancelAnimation: c,
    goToIndex: u,
    goToPrev: l,
    goToNext: h,
  };
}
const Ro = 150;
const Iw = 0.3;
function ms(e, t) {
  const o = e.clientX - t.clientX;
  const r = e.clientY - t.clientY;
  return Math.sqrt(o * o + r * r);
}
function Pw({
  currentIndex: e,
  imagesCount: t,
  imageSizes: o,
  isMobile: r,
  isAnimating: s,
  setIsAnimating: i,
  cancelAnimation: a,
  onIndexChange: c,
  onClose: u,
}) {
  const [l, h] = A(0);
  const [d, f] = A(0);
  const [m, N] = A(false);
  const [w, g] = A(1);
  const [v, p] = A(null);
  const [T, _] = A(1);
  const [C, P] = A(0);
  const [k, E] = A(0);
  const [b, M] = A(false);
  const y = x(1);
  const B = x({ x: 0, y: 0 });
  const D = x(false);
  const X = x(false);
  const oe = x(0);
  const K = x(0);
  const Y = x(0);
  const j = x(1);
  const G = x({ x: 0, y: 0 });
  const re = x({ x: 0, y: 0 });
  const z = x({ x: 0, y: 0 });
  const F = x(null);
  const q = x(false);
  const U = x(null);
  const $ = x(null);
  const V = x(false);

  const H = S((I) => {
    y.current = I;
    _(I);
  }, []);

  const te = S((I, R) => {
    B.current = { x: I, y: R };
    P(I);
    E(R);
  }, []);

  const Q = S(() => {
    M(true);
    H(1);
    te(0, 0);

    setTimeout(() => M(false), 300);
  }, [H, te]);

  W(() => {
    y.current = 1;
    B.current = { x: 0, y: 0 };
    _(1);
    P(0);
    E(0);
    M(false);
  }, [e]);

  W(
    () => () => {
      if (U.current) {
        clearTimeout(U.current);
        U.current = null;
      }
    },
    []
  );

  const ne = S(
    (I) => {
      let R = I;

      if ((e === 0 && R > 0) || (e === t - 1 && R < 0)) {
        R *= Iw;
      }

      return R;
    },
    [e, t]
  );

  const ae = S(
    () =>
      Math.abs(d) > Ro
        ? (u(r), true)
        : (i(true),
          f(0),
          g(1),
          (U.current = window.setTimeout(() => {
            U.current = null;
            i(false);
          }, 300)),
          false),
    [d, r, u, i]
  );

  const he = S(
    (I) => {
      if (!r && t > 1) {
        if (t > 1) {
          a();
          U.current && (clearTimeout(U.current), (U.current = null));
          $.current !== null && (c($.current), ($.current = null));
          i(false);
          p(null);
          h(0);
          N(true);
          q.current = false;
          z.current = { x: I.clientX, y: I.clientY };
          F.current = null;
          I.preventDefault();
        }
      }
    },
    [r, t, a, c, i]
  );

  const ve = S(
    (I) => {
      if (!m || r) {
        return;
      }
      const R = I.clientX - z.current.x;
      const L = I.clientY - z.current.y;

      if (!F.current && (Math.abs(R) > 10 || Math.abs(L) > 10)) {
        F.current = Math.abs(R) > Math.abs(L) ? "x" : "y";
        q.current = true;
      }

      if (F.current === "x") {
        h(ne(R));
      } else if (F.current === "y") {
        f(L);
        const ee = Math.min(Math.abs(L) / Ro, 1);
        g(1 - ee * 0.5);
      }
    },
    [m, r, ne]
  );

  const ce = S(() => {
    if (!(!m || r)) {
      N(false);

      if (F.current === "x") {
        const R = $.current ?? e;
        let L = R;

        if (l < -80 && R < t - 1) {
          L = R + 1;
        } else if (l > 80 && R > 0) {
          L = R - 1;
        }

        if (L !== R) {
          const ee = o[L]?.width || 0;
          const se = o[R]?.width || 0;
          const ie = L > R ? -se : ee;
          i(true);
          p(L);
          h(ie);
          $.current = L;

          U.current = window.setTimeout(() => {
            U.current = null;
            i(false);
            p(null);
            h(0);
            $.current = null;
            c(L);
          }, 500);
        } else {
          i(true);
          h(0);

          U.current = window.setTimeout(() => {
            U.current = null;
            i(false);
          }, 300);
        }
      } else {
        if (F.current === "y") {
          ae();
        }
      }

      F.current = null;
    }
  }, [m, r, e, l, t, o, ae, c, i]);

  const ze = S(
    (I) => {
      if (!r) {
        return;
      }
      K.current = Math.max(K.current, I.touches.length);

      if (I.touches.length === 2) {
        D.current = true;
        X.current = true;
        Y.current = ms(I.touches[0], I.touches[1]);
        j.current = y.current;
        N(false);
        F.current = null;
        h(0);
        f(0);
        g(1);
        M(false);
        return;
      }

      if (y.current > 1) {
        K.current = 1;
        G.current = { x: I.touches[0].clientX, y: I.touches[0].clientY };
        re.current = { ...B.current };
        N(true);
        q.current = false;
        F.current = null;
        M(false);
        const I_target_1 = I.target;
        V.current =
          I_target_1.tagName === "IMG" &&
          I_target_1.hasAttribute("data-viewer-image");
        return;
      }
      K.current = 1;
      X.current = false;
      a();

      if (U.current) {
        clearTimeout(U.current);
        U.current = null;
      }

      i(false);
      h(0);
      const I_target = I.target;
      V.current =
        I_target.tagName === "IMG" &&
        I_target.hasAttribute("data-viewer-image");
      z.current = { x: I.touches[0].clientX, y: I.touches[0].clientY };
      F.current = null;
      N(true);
    },
    [r, a, i]
  );

  const Ye = S(
    (I) => {
      if (!r) {
        return;
      }
      K.current = Math.max(K.current, I.touches.length);

      if (D.current && I.touches.length >= 2) {
        const ee = ms(I.touches[0], I.touches[1]);
        const se = j.current * (ee / Y.current);
        H(Math.min(Math.max(se, 0.5), 5));
        return;
      }

      if (y.current > 1 && m && !D.current) {
        const ee = I.touches[0].clientX - G.current.x;
        const se = I.touches[0].clientY - G.current.y;

        if (Math.abs(ee) > 5 || Math.abs(se) > 5) {
          q.current = true;
        }

        te(re.current.x + ee, re.current.y + se);
        return;
      }
      if (!m) {
        return;
      }
      const R = I.touches[0].clientX - z.current.x;
      const L = I.touches[0].clientY - z.current.y;

      if (!F.current && (Math.abs(R) > 10 || Math.abs(L) > 10)) {
        F.current = Math.abs(R) > Math.abs(L) ? "x" : "y";
      }

      if (F.current === "x") {
        h(ne(R));
      } else if (F.current === "y") {
        f(L);
        const ee = Math.min(Math.abs(L) / Ro, 1);
        g(Math.round((1 - ee * 0.7) * 100) / 100);
      }
    },
    [r, m, H, te, ne]
  );

  const Pe = S(() => {
    if (r) {
      if (D.current) {
        D.current = false;
        oe.current = Date.now();

        if (y.current < 1.1) {
          Q();
        }

        return;
      }
      if (y.current > 1) {
        N(false);
        return;
      }
      if (K.current > 1 || X.current) {
        N(false);
        f(0);
        g(1);
        F.current = null;
        return;
      }
      if (Date.now() - oe.current < 300) {
        N(false);
        f(0);
        g(1);
        F.current = null;
        return;
      }
      if (m) {
        N(false);

        if (!V.current) {
          if (!F.current) {
            u(true);
            return;
          }
          if (F.current === "y" && d > 30) {
            u(true);
            return;
          }
        }

        if (F.current === "x") {
          let R = e;

          if (l < -50 && e < t - 1) {
            R = e + 1;
          } else if (l > 50 && e > 0) {
            R = e - 1;
          }

          i(true);
          h(0);

          if (R !== e) {
            c(R);
          }

          U.current = window.setTimeout(() => {
            U.current = null;
            i(false);
          }, 500);
        } else {
          if (F.current === "y") {
            ae();
          }
        }
        F.current = null;
      }
    }
  }, [r, m, e, l, d, t, ae, c, u, i, Q]);

  const rt = S(() => {
    const I = $.current ?? e;
    const R = o[I] || { width: 600, height: 400 };
    if (s && v !== null) {
      const L = o[v] || R;
      return { width: L.width, height: L.height };
    }
    if (m && F.current === "x" && l !== 0) {
      const L = l < 0 ? Math.min(I + 1, t - 1) : Math.max(I - 1, 0);
      if (L === I) {
        return R;
      }
      const ee = o[L] || R;
      const se = R.width / 2 + ee.width / 2;
      const ie = Math.min(Math.abs(l) / se, 1);
      return {
        width: R.width + (ee.width - R.width) * ie,
        height: R.height + (ee.height - R.height) * ie,
      };
    }
    return R;
  }, [o, e, s, v, m, l, t]);

  const ye = S(() => {
    i(true);
    f(window.innerHeight);
    g(0);
  }, [i]);

  return {
    offsetX: l,
    offsetY: d,
    isDragging: m,
    opacity: w,
    wasDragging: q,
    displaySize: rt(),
    animateClose: ye,
    zoom: { scale: T, panX: C, panY: k, isAnimating: b },
    desktopHandlers: {
      onMouseDown: he,
      onMouseMove: ve,
      onMouseUp: ce,
      onMouseLeave: ce,
    },
    mobileHandlers: { onTouchStart: ze, onTouchMove: Ye, onTouchEnd: Pe },
  };
}
const xw = "CNP0fBGd";
const Aw = "FxpoCP7s";
const Lw = "qO26zEBn";
const Mw = "-iyRv-th";
const Ow = "liHkL9mP";
const $w = "U70eja-G";
const Dw = "q1lrkTZi";
const Bw = "oxBkKER-";
const Uw = "d4VkyUQq";
const Fw = "UK-OMndz";
const Hw = "_2CH2oEyg";
const Ww = "gGVStb2K";
const Vw = "_7Ac4a5ul";
const jw = "ZyoB5yJC";
const zw = "DWdVTu-N";

const Be = {
  viewer: xw,
  closeButton: Aw,
  counter: Lw,
  windowContainer: Mw,
  track: Ow,
  slide: $w,
  mobileContainer: Dw,
  mobileTrack: Bw,
  mobileSlide: Uw,
  navArea: Fw,
  navLeft: Hw,
  navRight: Ww,
  dots: Vw,
  dot: jw,
  active: zw,
};

function Yw({ onClick: e }) {
  return n("button", {
    className: Be.closeButton,
    onClick: e,
    children: n("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: n("path", { d: "M18 6L6 18M6 6l12 12" }),
    }),
  });
}
function Xw({ current: e, total: t }) {
  return (
    t <= 1 || n("div", { className: Be.counter, children: [e + 1, " / ", t] })
  );
}
function qw({ currentIndex: e, total: t, onPrev: o, onNext: r }) {
  return (
    t <= 1 ||
    n(Te, {
      children: [
        n("button", {
          className: `${Be.navArea} ${Be.navLeft}`,
          onClick: o,
          disabled: e === 0,
          children: n("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: n("path", { d: "M15 18l-6-6 6-6" }),
          }),
        }),
        n("button", {
          className: `${Be.navArea} ${Be.navRight}`,
          onClick: r,
          disabled: e === t - 1,
          children: n("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: n("path", { d: "M9 18l6-6-6-6" }),
          }),
        }),
      ],
    })
  );
}
function Zw({ total: e, currentIndex: t, onDotClick: o }) {
  return (
    e <= 1 ||
    n("div", {
      className: Be.dots,
      children: Array.from({ length: e }, (r, s) =>
        n(
          "button",
          {
            className: `${Be.dot} ${s === t ? Be.active : ""}`,
            onClick: () => o(s),
          },
          s
        )
      ),
    })
  );
}
function Gw({
  images: e,
  imageSizes: t,
  currentIndex: o,
  offsetX: r,
  offsetY: s,
  isAnimating: i,
  displaySize: a,
  handlers: c,
  onImageClick: u,
}) {
  const l = x(null);

  const h = () => {
    let d = 0;
    for (let f = 0; f < o; f++) {
      d += t[f]?.width || 0;
    }
    return d;
  };

  return n("div", {
    className: Be.windowContainer,
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
    children: n("div", {
      ref: l,
      className: Be.track,
      style: {
        transform: `translateX(${-h() + r}px)`,
        transition: i
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: e.map((d, f) =>
        n(
          "div",
          {
            className: Be.slide,
            onClick: u,
            children: n("img", {
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
function Kw({
  images: e,
  currentIndex: t,
  offsetX: o,
  offsetY: r,
  isAnimating: s,
  isClosing: i,
  handlers: a,
  onImageClick: c,
  zoom: u,
}) {
  return n("div", {
    className: Be.mobileContainer,
    style: {
      transform: `translateY(${r}px)`,
      transition: s
        ? `transform ${i ? "0.15s" : "0.3s"} cubic-bezier(0.32, 0.72, 0, 1)`
        : "none",
    },
    onTouchStart: a.onTouchStart,
    onTouchMove: a.onTouchMove,
    onTouchEnd: a.onTouchEnd,
    children: n("div", {
      className: Be.mobileTrack,
      style: {
        transform: `translateX(calc(-${t * 100}% + ${o}px))`,
        transition: s
          ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      children: e.map((l, h) =>
        n(
          "div",
          {
            className: Be.mobileSlide,
            onClick: c,
            children: n("img", {
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
function Jw({ images: e, initialIndex: t, onClose: o }) {
  const r = x(null);
  const s = vt();
  const i = kw(e);
  const a = Sw({ initialIndex: t, total: e.length });
  Ew();

  const c = S(
    (d = false) => {
      if (d && s) {
        u.animateClose();
        setTimeout(o, 150);
      } else {
        o();
      }
    },
    [s, o]
  );

  const u = Pw({
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

  Rw({ onClose: c, onPrev: a.goToPrev, onNext: a.goToNext });

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

  return Rt(
    n("div", {
      ref: r,
      className: Be.viewer,
      style: {
        "--opacity": u.opacity,
        transition: a.isAnimating
          ? "opacity 0.3s cubic-bezier(0.32, 0.72, 0, 1)"
          : "none",
      },
      onClick: l,
      children: [
        !s && n(Yw, { onClick: c }),
        n(Xw, { current: a.currentIndex, total: e.length }),
        !s &&
          n(Gw, {
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
          n(Kw, {
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
          n(qw, {
            currentIndex: a.currentIndex,
            total: e.length,
            onPrev: a.goToPrev,
            onNext: a.goToNext,
          }),
        n(Zw, {
          total: e.length,
          currentIndex: a.currentIndex,
          onDotClick: a.goToIndex,
        }),
      ],
    }),
    document.body
  );
}
function Qw() {
  const { isOpen: e, images: t, initialIndex: o, close: r } = Js();
  return e ? n(Jw, { images: t, initialIndex: o, onClose: r }) : null;
}
function e_({ children: e, currentPath: t }) {
  const o = qa();

  const r = Ce((i) => i.initialize);

  W(() => {
    if (o === "idle") {
      r();
    }
  }, [o, r]);

  W(() => {
    if (o === "loading" || o === "idle") {
      return;
    }
    const i = zr.some((a) => t.startsWith(a));

    if (o === "unauthenticated" && !i) {
      $(ke.LOGIN);
    } else if (o === "needs_profile" && t !== ke.ONBOARDING) {
      $(ke.ONBOARDING);
    } else if (
      o === "authenticated" &&
      (t === ke.LOGIN ||
        t === ke.REGISTER ||
        t === ke.REGISTER ||
        t === ke.ONBOARDING)
    ) {
      $(ke.HOME);
    }
  }, [o, t]);

  const s = zr.some((i) => t.startsWith(i));
  return o === "idle" || (o === "loading" && !s)
    ? null
    : o === "service_error"
    ? n(t_, {})
    : o === "account_deleted"
    ? n(n_, {})
    : n(Te, { children: e });
}
function t_() {
  const e = Ce((s) => s.initialize);

  const [t, o] = A(false);
  return n("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: n("div", {
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
        n("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Сервис недоступен",
        }),
        n("p", {
          style: {
            fontSize: "15px",
            color: "var(--text-secondary)",
            margin: 0,
            lineHeight: 1.5,
          },
          children:
            "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
        }),
        n("div", {
          style: { marginTop: "8px" },
          children: n(Oe, {
            onClick: async () => {
              o(true);
              try {
                await e();
              } finally {
                o(false);
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
function n_() {
  const e = Ce((u) => u.canRestore);

  const t = Ce((u) => u.restoreDeadline);

  const o = Ce((u) => u.restoreAccount);

  const r = Ce((u) => u.logout);

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
      await o();
    } catch {
      i(false);
    }
  };

  return n("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: n("div", {
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
        n("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Аккаунт удалён",
        }),
        s
          ? n("p", {
              style: {
                fontSize: "15px",
                color: "var(--text-secondary)",
                margin: 0,
              },
              children: "Восстановление аккаунта...",
            })
          : e
          ? n(Te, {
              children: [
                n("p", {
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
                n("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "8px",
                    width: "100%",
                  },
                  children: [
                    n(Oe, { onClick: c, children: "Восстановить аккаунт" }),
                    n("button", {
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
          : n(Te, {
              children: [
                n("p", {
                  style: {
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    margin: 0,
                  },
                  children: "Срок восстановления аккаунта истёк.",
                }),
                n("div", {
                  style: { marginTop: "8px" },
                  children: n(Oe, { onClick: () => r(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
function o_({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: o = 5,
  gap: r = 0,
  getItemKey: s = (a) => a,
  initialMeasuredHeights: i,
}) {
  const [, a] = A(0);
  const c = x(typeof window !== "undefined" ? window.scrollY : 0);
  const u = x(i ?? new Map());
  const l = x(null);
  const h = x(null);
  const d = x(new Map());

  const f = (T) => u.current.get(T) ?? t;

  const m = (T) => {
    let _ = 0;
    for (let C = 0; C < T; C++) {
      _ += f(C) + r;
    }
    return _;
  };

  const N = () => {
    if (e === 0) {
      return 0;
    }
    let T = 0;
    for (let _ = 0; _ < e; _++) {
      T += f(_);
    }
    T += Math.max(0, e - 1) * r;
    return T;
  };

  const w = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const c_current = c.current;
    const window_innerHeight = window.innerHeight;
    let C = 0;
    let P = 0;
    for (let b = 0; b < e; b++) {
      const M = f(b) + r;
      if (P + M > c_current) {
        C = b;
        break;
      }
      P += M;
    }
    let k = C;
    let E = 0;
    for (
      let b = C;
      b < e && ((E += f(b) + r), (k = b), !(E >= window_innerHeight));
      b++
    ) {}
    return { start: Math.max(0, C - o), end: Math.min(e - 1, k + o) };
  };

  const g = () => {
    if (e === 0) {
      return [];
    }
    const { start: T, end: _ } = w();
    const C = [];
    for (let P = T; P <= _; P++) {
      C.push({ index: P, key: s(P), start: m(P) });
    }
    return C;
  };

  if (!h.current) {
    h.current = new ResizeObserver((T) => {
      let _ = false;
      for (const C of T) {
        const C_target = C.target;
        const k = d.current.get(C_target);
        if (k === undefined) {
          continue;
        }
        const E = C.contentRect.height;

        if (E > 0 && u.current.get(k) !== E) {
          u.current.set(k, E);
          _ = true;
        }
      }

      if (_) {
        a((C) => C + 1);
      }
    });
  }

  const v = S((T, _) => {
    if (!T) {
      return;
    }
    d.current.set(T, _);
    h.current?.observe(T);
    const C = T.getBoundingClientRect().height;

    if (C > 0 && u.current.get(_) !== C) {
      u.current.set(_, C);
      a((P) => P + 1);
    }
  }, []);
  W(() => {
    const T = () => {
      if (!l.current) {
        l.current = requestAnimationFrame(() => {
          l.current = null;
          c.current = window.scrollY;

          a((_) => _ + 1);
        });
      }
    };
    window.addEventListener("scroll", T, { passive: true });
    c.current = window.scrollY;

    a((_) => _ + 1);

    return () => {
      window.removeEventListener("scroll", T);

      if (l.current) {
        cancelAnimationFrame(l.current);
      }

      h.current?.disconnect();
      d.current.clear();
    };
  }, []);
  const p = S(() => new Map(u.current), []);
  return {
    virtualItems: g(),
    totalSize: N(),
    measureElement: v,
    getMeasuredHeights: p,
  };
}
const r_ = "IWKvHh6o";
const s_ = "B0hQs8NU";
const i_ = "q8F-aimP";
const a_ = "qkSaz-qE";

const Zn = {
  virtualFeed: r_,
  virtualContent: s_,
  virtualItem: i_,
  loadingMore: a_,
};

function c_({
  posts: e,
  renderPost: t,
  isLoadingMore: o = false,
  hasMore: r = false,
  onLoadMore: s,
  estimatedPostHeight: i = 300,
  overscan: a = 5,
  gap: c = 10,
  initialMeasuredHeights: u,
  onMeasuredHeightsChange: l,
}) {
  const h = x(null);
  const d = x(false);
  const [f, m] = A(null);
  const [N, w] = A(window.innerWidth < 1174);

  const g = me((b) => b.highlightedPostId);

  const v = me((b) => b.clearHighlightedPost);

  W(() => {
    const b = () => w(window.innerWidth < 1174);
    window.addEventListener("resize", b);

    return () => window.removeEventListener("resize", b);
  }, []);
  const p = N ? 0 : c;

  const T = S(
    (b) => {
      const e_b = e[b];
      if (!e_b) {
        return b;
      }
      const y = e_b.attachments?.[0]?.id ?? "";
      return `${e_b.id}-${y}`;
    },
    [e]
  );

  const {
    virtualItems: _,
    totalSize: C,
    measureElement: P,
    getMeasuredHeights: k,
  } = o_({
    itemCount: e.length,
    estimatedItemHeight: i,
    overscan: a,
    gap: p,
    getItemKey: T,
    initialMeasuredHeights: u,
  });

  W(
    () => () => {
      if (l) {
        l(k());
      }
    },
    [l, k]
  );

  W(() => {
    if (!g) {
      return;
    }
    h.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const b = setTimeout(() => {
      m(g);
      v();

      setTimeout(() => m(null), 600);
    }, 300);
    return () => clearTimeout(b);
  }, [g, v]);

  const E = S(() => {
    if (!s || !r || !r || o) {
      return;
    }
    const b =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (b < 500 && !d.current) {
      d.current = true;
      s();
    }

    if (b > 600) {
      d.current = false;
    }
  }, [s, r, o]);

  W(() => {
    if (!o) {
      d.current = false;
    }
  }, [o]);

  W(() => {
    window.addEventListener("scroll", E, { passive: true });

    return () => window.removeEventListener("scroll", E);
  }, [E]);

  return n("div", {
    ref: h,
    className: Zn.virtualFeed,
    children: [
      n("div", {
        className: Zn.virtualContent,
        style: { height: `${C}px` },
        children: _.map((b) => {
          const M = e[b.index];
          return M
            ? n(
                "div",
                {
                  ref: (y) => P(y, b.index),
                  className: Zn.virtualItem,
                  style: { transform: `translateY(${b.start}px)` },
                  children: t(M, b.index, M.id === f),
                },
                b.key
              )
            : null;
        }),
      }),
      o &&
        n("div", {
          className: Zn.loadingMore,
          children: n(ut, { size: "sm" }),
        }),
    ],
  });
}
const l_ = "qX9ObwT9";
const u_ = "QAdxKv6R";
const d_ = "nTcZk3Cv";
const h_ = "_5UYumbfd";
const Gn = { content: l_, icon: u_, text: d_, button: h_ };
const ps = "phone-verification-required";
function f_() {
  const [e, t] = A(false);

  const o = Ce((s) => s.profile?.id ?? "");

  W(() => {
    const s = () => t(true);
    window.addEventListener(ps, s);

    return () => window.removeEventListener(ps, s);
  }, []);

  if (!e) {
    return null;
  }

  const r = `https://t.me/itd_verification_bot?start=${o}`;
  return n(nt, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: n("div", {
      className: Gn.content,
      children: [
        n("div", {
          className: Gn.icon,
          children: n("svg", {
            width: "48",
            height: "48",
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              n("circle", {
                cx: "24",
                cy: "24",
                r: "24",
                fill: "#2AABEE",
                "fill-opacity": "0.12",
              }),
              n("svg", {
                x: "8",
                y: "8",
                width: "32",
                height: "32",
                viewBox: "0 0 1000 1000",
                children: n("path", {
                  d: "M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z",
                  fill: "#2AABEE",
                }),
              }),
            ],
          }),
        }),
        n("p", {
          className: Gn.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        n("a", {
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          className: Gn.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
const m_ = "NoLqdGhZ";
const p_ = "ZJgdLwPI";
const g_ = "r9t-7AuI";
const So = { layout: m_, wrapper: p_, content: g_ };
const v_ = ["/login", "/register", "/forgot-password", "/verify-email"];

const w_ = [
  "/terms",
  "/privacy",
  "/cookies",
  "/external",
  "/careers",
  "/support",
  "/delete-account",
  "/child-safety",
];

const __ = ({ children: e }) => {
  const t = vt();
  const o = dc();
  const [r, s] = A(window.location.pathname);
  W(() => {
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
  const i = v_.includes(r);
  const a = w_.includes(r);
  return i
    ? n(Te, { children: e })
    : n(uc.Provider, {
        value: { isHidden: o },
        children: n("div", {
          className: So.layout,
          children: n("div", {
            className: So.wrapper,
            children: [
              !a && (t ? n(Mh, {}) : n(Pl, {})),
              !a && !t && n($l, {}),
              n("div", { className: So.content, children: e }),
            ],
          }),
        }),
      });
};

const y_ = "bpf4GYjz";
const C_ = "crrL7XgI";
const N_ = "yhENW-7a";
const T_ = "_928LvLhD";
const b_ = "_6eF0w9KX";

const pn = {
  page: y_,
  createPostWrapper: C_,
  tabsWrapper: N_,
  error: T_,
  empty: b_,
};

const k_ = (e) => {
  const t = me((k) => k.posts);

  const o = me((k) => k.activeFeed);

  const r = me((k) => k.isLoading);

  const s = me((k) => k.isLoadingMore);

  const i = me((k) => k.hasMore);

  const a = me((k) => k.error);

  const c = me((k) => k.feedScrollPosition);

  const u = me((k) => k.feedMeasuredHeights);

  const l = me((k) => k.setActiveFeed);

  const h = me((k) => k.fetchFeed);

  const d = me((k) => k.loadMoreFeed);

  const f = me((k) => k.createPost);

  const m = me((k) => k.setFeedScrollPosition);

  const N = me((k) => k.setFeedMeasuredHeights);

  const w = Ce((k) => k.profile);

  const g = Ce((k) => k.status);

  const v = x(false);

  const p = Ne(() => t.map((k) => k.author.id), [t]);

  za(p);

  W(() => {
    if (g === "authenticated" && t.length === 0 && !r) {
      h();
    }
  }, [o, g]);

  W(() => {
    if (t.length > 0 && c > 0 && !v.current) {
      v.current = true;

      requestAnimationFrame(() => {
        window.scrollTo(0, c);
      });
    }
  }, [t.length, c]);

  W(
    () => () => {
      m(window.scrollY);
    },
    [m]
  );

  const T = (k) => {
    const b = ["global", "clan", "following"][k] ?? "global";

    if (b !== o) {
      l(b);
    }
  };

  const _ = async (k, E, b, M) => {
    if (w) {
      await f(w.id, k, E, b, M);
    }
  };

  const C = S(() => {
    if (i && !s) {
      d();
    }
  }, [i, s, d]);

  const P = S((k, E, b) => n(yv, { post: k, isHighlighted: b }, k.id), []);

  return n("div", {
    className: pn.page,
    children: [
      n("div", {
        className: pn.tabsWrapper,
        children: n(l1, {
          tabs: ["Для вас", "Лента кланов", "Подписки"],
          activeIndex: o === "global" ? 0 : o === "clan" ? 1 : 2,
          onChange: T,
        }),
      }),
      n("div", {
        className: pn.createPostWrapper,
        children: [
          w && n(ot, { src: w.avatar ?? "", alt: w.displayName, size: "sm" }),
          n(Ei, { onSubmit: _ }),
        ],
      }),
      a
        ? n("div", {
            className: pn.error,
            children: [
              n("p", { children: a }),
              n("button", { onClick: () => h(), children: "Повторить" }),
            ],
          })
        : r && t.length === 0
        ? n(ut, {})
        : t.length === 0
        ? n("div", { className: pn.empty, children: "Нет постов" })
        : t.length > 0
        ? n(c_, {
            posts: t,
            renderPost: P,
            isLoadingMore: s,
            hasMore: i,
            onLoadMore: C,
            estimatedPostHeight: 250,
            overscan: 3,
            initialMeasuredHeights: u,
            onMeasuredHeightsChange: N,
          })
        : null,
    ],
  });
};

const E_ = Ee(() =>
  Re(() => import("./index-DLiNWf-h.js"), __vite__mapDeps([0, 1, 2])).then(
    (e) => ({
      default: e.Profile,
    })
  )
);

const R_ = Ee(() =>
  Re(() => import("./index-BSx7i-hq.js"), __vite__mapDeps([3, 1, 4])).then(
    (e) => ({
      default: e.Notifications,
    })
  )
);

const S_ = Ee(() =>
  Re(() => import("./index-Bs0qi3Bs.js"), __vite__mapDeps([5, 6])).then(
    (e) => ({
      default: e.About,
    })
  )
);

const Li = Ee(() =>
  Re(() => import("./index-DWMc0Uo9.js"), __vite__mapDeps([7, 8])).then(
    (e) => ({
      default: e.NotFound,
    })
  )
);

const I_ = Ee(() =>
  Re(() => import("./index-B2qhGbm8.js"), __vite__mapDeps([9, 10, 11])).then(
    (e) => ({
      default: e.PostPage,
    })
  )
);

const P_ = Ee(() =>
  Re(
    () => import("./index-Kq8A-oTg.js"),
    __vite__mapDeps([12, 13, 14, 15, 16, 17, 18])
  ).then((e) => ({
    default: e.Login,
  }))
);

const x_ = Ee(() =>
  Re(
    () => import("./index-Ddho1Rxc.js"),
    __vite__mapDeps([19, 13, 14, 15, 16, 17, 20])
  ).then((e) => ({
    default: e.Register,
  }))
);

const A_ = Ee(() =>
  Re(
    () => import("./index-CSW7FjxK.js"),
    __vite__mapDeps([21, 13, 14, 17, 22])
  ).then((e) => ({
    default: e.ForgotPassword,
  }))
);

const L_ = Ee(() =>
  Re(() => import("./index-mOqAoLuH.js"), __vite__mapDeps([23, 17, 24])).then(
    (e) => ({
      default: e.ResetPassword,
    })
  )
);

const M_ = Ee(() =>
  Re(() => import("./index-C4rarzDu.js"), []).then((e) => ({
    default: e.VerifyEmail,
  }))
);

const O_ = Ee(() =>
  Re(() => import("./index-C1sG57He.js"), __vite__mapDeps([25, 10, 26])).then(
    (e) => ({
      default: e.Terms,
    })
  )
);

const $_ = Ee(() =>
  Re(() => import("./index-Dk_Pervk.js"), __vite__mapDeps([27, 10, 28])).then(
    (e) => ({
      default: e.Privacy,
    })
  )
);

const D_ = Ee(() =>
  Re(() => import("./index-Fc4r9Do7.js"), __vite__mapDeps([29, 10, 30])).then(
    (e) => ({
      default: e.Cookies,
    })
  )
);

const B_ = Ee(() =>
  Re(() => import("./index-CnvYv39W.js"), __vite__mapDeps([31, 32])).then(
    (e) => ({
      default: e.Onboarding,
    })
  )
);

const U_ = Ee(() =>
  Re(() => import("./index-CpebGf30.js"), __vite__mapDeps([33, 34])).then(
    (e) => ({
      default: e.Search,
    })
  )
);

const F_ = Ee(() =>
  Re(() => import("./index-CQpI-RV2.js"), __vite__mapDeps([35, 10, 36])).then(
    (e) => ({
      default: e.Hashtag,
    })
  )
);

const H_ = Ee(() =>
  Re(() => import("./index-4dBPO8k6.js"), __vite__mapDeps([37, 10, 38])).then(
    (e) => ({
      default: e.ExternalLink,
    })
  )
);

const W_ = Ee(() =>
  Re(() => import("./index-BLCUR-xB.js"), __vite__mapDeps([39, 10, 40])).then(
    (e) => ({
      default: e.Careers,
    })
  )
);

const V_ = Ee(() =>
  Re(() => import("./index-CYB8cC8i.js"), __vite__mapDeps([41, 10, 42])).then(
    (e) => ({
      default: e.Support,
    })
  )
);

const j_ = Ee(() =>
  Re(() => import("./index-CrIasEWe.js"), __vite__mapDeps([43, 10, 44])).then(
    (e) => ({
      default: e.DeleteAccount,
    })
  )
);

const z_ = Ee(() =>
  Re(() => import("./index-1W-Z__Gn.js"), __vite__mapDeps([45, 10, 46])).then(
    (e) => ({
      default: e.ChildSafety,
    })
  )
);

const Y_ = Ee(() =>
  Re(() => import("./index-D__vzu0g.js"), __vite__mapDeps([47, 48])).then(
    (e) => ({
      default: e.Event,
    })
  )
);

const X_ = Ee(() =>
  Re(() => import("./index-UJf7d6Pa.js"), []).then((e) => ({
    default: e.Verification,
  }))
);

const q_ = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return n(Li, {});
  }
  const t = e.slice(1);
  return n(E_, { username: t });
};

function Z_() {
  const [e, t] = A(window.location.pathname);
  return n(Bv, {
    children: n(Gl, {
      children: n(e_, {
        currentPath: e,
        children: [
          n(Qw, {}),
          n(r1, {}),
          n(f_, {}),
          n(__, {
            children: n(Cn, {
              fallback: null,
              children: n(Ks, {
                onChange: (r) => {
                  const s = e;
                  t(r.url);

                  if (r.url !== "/" && r.url !== s) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  n(k_, { path: "/" }),
                  n(R_, { path: "/notifications" }),
                  n(S_, { path: "/about" }),
                  n(P_, { path: "/login" }),
                  n(x_, { path: "/register" }),
                  n(A_, { path: "/forgot-password" }),
                  n(L_, { path: "/reset-password" }),
                  n(M_, { path: "/verify-email" }),
                  n(O_, { path: "/terms" }),
                  n($_, { path: "/privacy" }),
                  n(D_, { path: "/cookies" }),
                  n(B_, { path: "/onboarding" }),
                  n(U_, { path: "/search" }),
                  n(F_, { path: "/hashtag/:name" }),
                  n(H_, { path: "/external" }),
                  n(W_, { path: "/careers" }),
                  n(V_, { path: "/support" }),
                  n(j_, { path: "/delete-account" }),
                  n(z_, { path: "/child-safety" }),
                  n(Y_, { path: "/event" }),
                  n(X_, { path: "/verification" }),
                  n(I_, { path: "/:username/post/:postId" }),
                  n(q_, { path: "/:slug" }),
                  n(Li, { default: true }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
fa(document.getElementById("root")).render(n(Xs, { children: n(Z_, {}) }));
export {
  $ as $,
  x as A,
  Oe as B,
  Ve as C,
  Ii as D,
  vi as E,
  dd as F,
  We as G,
  me as H,
  us as I,
  vt as J,
  ti as K,
  om as L,
  nt as M,
  J_ as N,
  Lh as O,
  Q_ as P,
  l1 as Q,
  Ri as R,
  ds as S,
  Ne as T,
  Mn as U,
  Ei as V,
  c_ as W,
  yv as X,
  ln as Y,
  ni as Z,
  ci as __1,
  Tt as a,
  Mc as a0,
  nr as a1,
  co as a2,
  no as a3,
  rs as a4,
  Qn as a5,
  pv as a6,
  xi as a7,
  _e as a8,
  wc as a9,
  Rt as aa,
  Du as ab,
  Z as ac,
  J as ad,
  Qo as ae,
  gi as af,
  oi as ag,
  tr as ah,
  ps as ai,
  Ce as b,
  Pa as c,
  A as d,
  mi as e,
  Dc as f,
  or as g,
  G_ as h,
  Le as i,
  qt as j,
  Te as k,
  En as l,
  ut as m,
  ot as n,
  wt as o,
  pt as p,
  S as q,
  tn as r,
  O as s,
  K_ as t,
  n as u,
  hi as v,
  Hc as w,
  ui as x,
  W as y,
  rr as z,
};
