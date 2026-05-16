const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BbFs5PEb.js",
      "assets/IconNotificationMention-Bj1axzUH.js",
      "assets/IconInfo-DBMb_x9i.js",
      "assets/index-CE7OEdwr.css",
      "assets/index-a9okhgYQ.js",
      "assets/index-Bw1-qCBO.css",
      "assets/VoiceInput-ChV7G67p.js",
      "assets/IconPlay-B0iljPxh.js",
      "assets/VoiceInput-BqKj0OxS.css",
      "assets/PostMediaVideo-D_-qfrtw.js",
      "assets/PostMediaVideo-rN5rkA4G.css",
      "assets/index-CdjLILCq.js",
      "assets/IconCheckCircle-CrO7iazj.js",
      "assets/index-B1ytOp-8.css",
      "assets/index-BWK2H0GS.js",
      "assets/index-B1JjxOU6.css",
      "assets/index-D-elPXGA.js",
      "assets/index-Do4HXZd4.css",
      "assets/index-BQd7bGEm.js",
      "assets/index-Be2g9EP0.css",
      "assets/index-BGTT52-5.js",
      "assets/index-DMdBFEHe.css",
      "assets/index--76wyuRk.js",
      "assets/IconChevronLeft-WQg0EXIc.js",
      "assets/index-RlxcSYKm.css",
      "assets/index-B-KEYRI1.js",
      "assets/index-CIAST4MB.css",
      "assets/index-BRrJ6PP6.js",
      "assets/index-BOsEjaUl.css",
      "assets/index-Dw-tOZoW.js",
      "assets/IconCheck-BU1vahVZ.js",
      "assets/index-BV7F_JG6.css",
      "assets/index-C2pyJKK4.js",
      "assets/index-DLIrQr-q.css",
      "assets/index-DKdCXyD9.js",
      "assets/index-DPm0ZIXU.css",
      "assets/index-DV08n4_y.js",
      "assets/index-C2fFvnxS.css",
      "assets/index-Tu53j-Ps.js",
      "assets/index-D1qlZ_2V.css",
      "assets/index-CaEcjIfj.js",
      "assets/index-CHIxXmBA.css",
      "assets/index-B3Lgu7nN.js",
      "assets/index-BWI0r5Pg.css",
      "assets/index--aUx-lOv.js",
      "assets/index-DE9tfKjW.css",
      "assets/index-DCXjv-o4.js",
      "assets/index-CcIoFkYP.css",
      "assets/index-CK3riRCp.js",
      "assets/index-BsdNLFhH.css",
      "assets/index-EfssCGOc.js",
      "assets/index-BKIdcXW6.css",
      "assets/index-BOx5EJaN.js",
      "assets/index-D5II16ML.css",
      "assets/index-DlA0JsEf.js",
      "assets/index-CfAcxC8g.css",
      "assets/index-BVkd6DD7.js",
      "assets/index-BDEp0-_x.js",
      "assets/index-CrONNnnl.css",
      "assets/index-DMsDt-7k.js",
      "assets/index-BYJQxbXk.css",
      "assets/IconEyeOff-CTY4FkhJ.js",
      "assets/index-M347wDf5.css",
      "assets/index-CkOxAxgU.js",
      "assets/index-M9IoxPyN.css",
      "assets/index-KTvs1f9W.js",
      "assets/index-Ck7h_5Lm.css",
      "assets/index-CogzhWuV.js",
      "assets/index-BdHdpnIQ.css",
      "assets/index-CIp_B2nj.js",
      "assets/index-0JOmf8Kg.css",
    ])
) => i.map(i => d[i]);
(() => {
  try {
    const e =
      typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : {};
    e.SENTRY_RELEASE = { id: "1.1.1" };
    const t = new e.Error().stack;

    if (t) {
      (e._sentryDebugIds = e._sentryDebugIds || {});
      (e._sentryDebugIds[t] = "3db45f45-2e17-4cdf-a550-3206b63a14e5");
      (e._sentryDebugIdIdentifier = "sentry-dbid-3db45f45-2e17-4cdf-a550-3206b63a14e5");
    }
  } catch {}
})();
(() => {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) {
    return;
  }
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) {
    r(o);
  }
  new MutationObserver((o) => {
    for (const s of o) {
      if (s.type === "childList") {
        for (const i of s.addedNodes) {
          if (i.tagName === "LINK" && i.rel === "modulepreload") {
            r(i);
          }
        }
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function n(o) {
    const s = {};

    if (o.integrity) {
      (s.integrity = o.integrity);
    }

    if (o.referrerPolicy) {
      (s.referrerPolicy = o.referrerPolicy);
    }

    if (o.crossOrigin === "use-credentials") {
      (s.credentials = "include");
    } else if (o.crossOrigin === "anonymous") {
      (s.credentials = "omit");
    } else {
      (s.credentials = "same-origin");
    }

    return s;
  }
  function r(o) {
    if (o.ep) {
      return;
    }
    o.ep = true;
    const s = n(o);
    fetch(o.href, s);
  }
})();
let qn;
let Z;
let ja;
let zt;
let Ms;
let za;
let qa;
let Ga;
let Xo;
let vo;
let wo;
let Ya;
const Bn = {};
const Xa = [];
const uu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function it(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Ko(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function tt(e, t, n) {
  let r;
  let o;
  let s;
  const i = {};
  for (s in t) {
    if (s == "key") {
      (r = t[s]);
    } else if (s == "ref") {
      (o = t[s]);
    } else {
      (i[s] = t[s]);
    }
  }

  if (arguments.length > 2) {
    (i.children = arguments.length > 3 ? qn.call(arguments, 2) : n);
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (s in e.defaultProps) {
      if (i[s] === undefined) {
        (i[s] = e.defaultProps[s]);
      }
    }
  }

  return Mn(e, i, r, o, null);
}
function Mn(e, t, n, r, o) {
  const s = {
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
    __v: o ?? ++ja,
    __i: -1,
    __u: 0,
  };

  if (o == null && Z.vnode != null) {
    Z.vnode(s);
  }

  return s;
}
function du() {
  return { current: null };
}
function ke(e) {
  return e.children;
}

class Ye {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  setState(e, t) {
    let n;

    (n = this.__s != null && this.__s != this.state
      ? this.__s
      : (this.__s = it({}, this.state)));

    if (typeof e == "function") {
      (e = e(it({}, n), this.props));
    }

    if (e) {
      it(n, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      Eo(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      (this.__e = true);
      e && this.__h.push(e);
      Eo(this);
    }
  }
}

function dn(e, t) {
  if (t == null) {
    return e.__ ? dn(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? dn(e) : null;
}
function Ka(e) {
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

    return Ka(e);
  }
}
function Eo(e) {
  if (((!e.__d && (e.__d = true) && zt.push(e) && !Sr.__r++) || Ms != Z.debounceRendering)) {
    ((Ms = Z.debounceRendering) || za)(Sr);
  }
}
function Sr() {
  let e;
  let t;
  let n;
  let r;
  let o;
  let s;
  let i;
  let c = 1;

  while (zt.length) {
    if (zt.length > c) {
      zt.sort(qa);
    }

    (e = zt.shift());
    (c = zt.length);

    if (e.__d) {
      (n = undefined);
      (r = undefined);
      (o = (r = (t = e).__v).__e);
      (s = []);
      (i = []);

      t.__P &&
        (((n = it({}, r)).__v = r.__v + 1),
        Z.vnode && Z.vnode(n),
        Zo(
          t.__P,
          n,
          r,
          t.__n,
          t.__P.namespaceURI,
          32 & r.__u ? [o] : null,
          s,
          o ?? dn(r),
          !!(32 & r.__u),
          i
        ),
        (n.__v = r.__v),
        (n.__.__k[n.__i] = n),
        Qa(s, n, i),
        (r.__e = r.__ = null),
        n.__e != o && Ka(n));
    }
  }

  Sr.__r = 0;
}
function Za(e, t, n, r, o, s, i, c, l, u, f) {
  let d;
  let p;
  let h;
  let m;
  let _;
  let b;
  let g;
  const y = (r && r.__k) || Xa;
  const t_length = t.length;
  l = fu(n, t, y, l, t_length);

  for (d = 0; d < t_length; d++) {
    if ((h = n.__k[d]) != null) {
      (p = h.__i == -1 ? Bn : y[h.__i] || Bn);
      (h.__i = d);
      (b = Zo(e, h, p, o, s, i, c, l, u, f));
      (m = h.__e);

      h.ref &&
        p.ref != h.ref &&
        (p.ref && Jo(p.ref, null, h), f.push(h.ref, h.__c || m, h));

      _ == null && m != null && (_ = m);

      (g = !!(4 & h.__u)) || p.__k === h.__k
        ? (l = Ja(h, l, e, g))
        : typeof h.type == "function" && b !== undefined
        ? (l = b)
        : m && (l = m.nextSibling);

      (h.__u &= -7);
    }
  }

  (n.__e = _);
  return l;
}
function fu(e, t, n, r, o) {
  let s;
  let i;
  let c;
  let l;
  let u;
  const n_length = n.length;
  let d = n_length;
  let p = 0;
  e.__k = new Array(o);

  for (s = 0; s < o; s++) {
    if ((i = t[s]) != null && typeof i != "boolean" && typeof i != "function") {
      typeof i == "string" ||
          typeof i == "number" ||
          typeof i == "bigint" ||
          i.constructor == String
            ? (i = e.__k[s] = Mn(null, i, null, null, null))
            : Array_isArray(i)
            ? (i = e.__k[s] = Mn(ke, { children: i }, null, null, null))
            : i.constructor === undefined && i.__b > 0
            ? (i = e.__k[s] =
                Mn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v))
            : (e.__k[s] = i);

      (l = s + p);
      (i.__ = e);
      (i.__b = e.__b + 1);
      (c = null);
      (u = i.__i = hu(i, n, l, d)) != -1 && (d--, (c = n[u]) && (c.__u |= 2));

      c == null || c.__v == null
        ? (u == -1 && (o > n_length ? p-- : o < n_length && p++),
          typeof i.type != "function" && (i.__u |= 4))
        : u != l &&
          (u == l - 1
            ? p--
            : u == l + 1
            ? p++
            : (u > l ? p-- : p++, (i.__u |= 4)));
    } else {
      (e.__k[s] = null);
    }
  }

  if (d) {
    for (s = 0; s < n_length; s++) {
      if ((c = n[s]) != null &&
        (2 & c.__u) == 0) {
        c.__e == r && (r = dn(c));
        tc(c, c);
      }
    }
  }
  return r;
}
function Ja(e, t, n, r) {
  let o;
  let s;
  if (typeof e.type == "function") {
    o = e.__k;

    for (s = 0; o && s < o.length; s++) {
      if (o[s]) {
        (o[s].__ = e);
        (t = Ja(o[s], t, n, r));
      }
    }

    return t;
  }

  if (e.__e != t) {
    r &&
        (t && e.type && !t.parentNode && (t = dn(e)),
        n.insertBefore(e.__e, t || null));

    (t = e.__e);
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function Qe(e, t) {
  (t = t || []);

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some(n => {
              Qe(n, t);
            });
    } else {
      t.push(e);
    }
  }

  return t;
}
function hu(e, t, n, r) {
  let o;
  let s;
  let i;

  const {
    key,
    type
  } = e;

  let t_n = t[n];
  const f = t_n != null && (2 & t_n.__u) == 0;
  if ((t_n === null && key == null) || (f && key == t_n.key && type == t_n.type)) {
    return n;
  }
  if (r > (f ? 1 : 0)) {
    o = n - 1;

    for (s = n + 1; o >= 0 || s < t.length; ) {
      if ((t_n = t[(i = o >= 0 ? o-- : s++)]) != null &&
      (2 & t_n.__u) == 0 &&
      key == t_n.key &&
      type == t_n.type) {
        return i;
      }
    }
  }
  return -1;
}
function Ds(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    (e[t] = n == null ? "" : typeof n != "number" || uu.test(t) ? n : `${n}px`);
  }
}
function nr(e, t, n, r, o) {
  let s;
  let i;
  e: if (t == "style") {
    if (typeof n == "string") {
      e.style.cssText = n;
    } else {
      if (typeof r == "string") {
        (e.style.cssText = r = "");
      }

      if (r) {
        for (t in r) {
          if (!n || t in n) {
            Ds(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!r || n[t] != r[t]) {
            Ds(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    (s = t != (t = t.replace(Ga, "$1")));
    (i = t.toLowerCase());

    (t = i in e || t == "onFocusOut" || t == "onFocusIn"
      ? i.slice(2)
      : t.slice(2));

    if (!e.l) {
      (e.l = {});
    }

    (e.l[t + s] = n);

    if (n) {
      if (r) {
        (n.u = r.u);
      } else {
        (n.u = Xo);
        e.addEventListener(t, s ? wo : vo, s);
      }
    } else {
      e.removeEventListener(t, s ? wo : vo, s);
    }
  } else {
    if (o == "http://www.w3.org/2000/svg") {
      t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    } else if (t != "width" &&
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
    t in e) {
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
function Us(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t.t == null) {
        t.t = Xo++;
      } else if (t.t < n.u) {
        return;
      }
      return n(Z.event ? Z.event(t) : t);
    }
  };
}
function Zo(e, t, n, r, o, s, i, c, l, u) {
  let f;
  let d;
  let p;
  let h;
  let m;
  let _;
  let b;
  let g;
  let y;
  let v;
  let I;
  let E;
  let S;
  let C;
  let T;
  let w;
  let P;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & n.__u) {
    (l = !!(32 & n.__u));
    (s = [(c = t.__e = n.__e)]);
  }

  if ((f = Z.__b)) {
    f(t);
  }

  e: if (typeof t_type == "function") {
    try {
      (g = t.props);
      (y = "prototype" in t_type && t_type.prototype.render);
      (v = (f = t_type.contextType) && r[f.__c]);
      (I = f ? (v ? v.props.value : f.__) : r);

      if (n.__c) {
        (b = (d = t.__c = n.__c).__ = d.__E);
      } else {
        y
              ? (t.__c = d = new t_type(g, I))
              : ((t.__c = d = new Ye(g, I)),
                (d.constructor = t_type),
                (d.render = mu));

        v && v.sub(d);
        d.state || (d.state = {});
        (d.__n = r);
        (p = d.__d = true);
        (d.__h = []);
        (d._sb = []);
      }

      if (y && d.__s == null) {
        (d.__s = d.state);
      }

      if (y &&
        t_type.getDerivedStateFromProps != null) {
        d.__s == d.state && (d.__s = it({}, d.__s));
        it(d.__s, t_type.getDerivedStateFromProps(g, d.__s));
      }

      (h = d.props);
      (m = d.state);
      (d.__v = t);

      if (p) {
        if (y &&
          t_type.getDerivedStateFromProps == null &&
          d.componentWillMount != null) {
          d.componentWillMount();
        }

        if (y && d.componentDidMount != null) {
          d.__h.push(d.componentDidMount);
        }
      } else {
        if (y &&
            t_type.getDerivedStateFromProps == null &&
            g !== h &&
            d.componentWillReceiveProps != null) {
          d.componentWillReceiveProps(g, I);
        }

        if (t.__v == n.__v ||
          (!d.__e &&
            d.shouldComponentUpdate != null &&
            d.shouldComponentUpdate(g, d.__s, I) === false)) {
          if (t.__v != n.__v) {
            (d.props = g);
            (d.state = d.__s);
            (d.__d = false);
          }

          t.__e = n.__e;
          t.__k = n.__k;

          t.__k.some(k => {
            if (k) {
              (k.__ = t);
            }
          });

          for (E = 0; E < d._sb.length; E++) {
            d.__h.push(d._sb[E]);
          }

          (d._sb = []);

          if (d.__h.length) {
            i.push(d);
          }

          break e;
        }

        if (d.componentWillUpdate != null) {
          d.componentWillUpdate(g, d.__s, I);
        }

        if (y &&
          d.componentDidUpdate != null) {
          d.__h.push(() => {
            d.componentDidUpdate(h, m, _);
          });
        }
      }

      (d.context = I);
      (d.props = g);
      (d.__P = e);
      (d.__e = false);
      (S = Z.__r);
      (C = 0);

      if (y) {
        d.state = d.__s;
        d.__d = false;

        if (S) {
          S(t);
        }

        f = d.render(d.props, d.state, d.context);

        for (T = 0; T < d._sb.length; T++) {
          d.__h.push(d._sb[T]);
        }

        d._sb = [];
      } else {
        do {
          (d.__d = false);

          if (S) {
            S(t);
          }

          (f = d.render(d.props, d.state, d.context));
          (d.state = d.__s);
        } while (d.__d && ++C < 25);
      }

      (d.state = d.__s);

      if (d.getChildContext != null) {
        (r = it(it({}, r), d.getChildContext()));
      }

      if (y &&
        !p &&
        d.getSnapshotBeforeUpdate != null) {
        (_ = d.getSnapshotBeforeUpdate(h, m));
      }

      (w = f);

      if (f != null &&
        f.type === ke &&
        f.key == null) {
        (w = ec(f.props.children));
      }

      (c = Za(e, Array_isArray(w) ? w : [w], t, n, r, o, s, i, c, l, u));
      (d.base = t.__e);
      (t.__u &= -161);

      if (d.__h.length) {
        i.push(d);
      }

      if (b) {
        (d.__E = d.__ = null);
      }
    } catch (k) {
      (t.__v = null);

      if (l || s != null) {
        if (k.then) {
          for (t.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) {
            c = c.nextSibling;
          }
          (s[s.indexOf(c)] = null);
          (t.__e = c);
        } else {
          for (P = s.length; P--; ) {
            Ko(s[P]);
          }
          So(t);
        }
      } else {
        (t.__e = n.__e);
        (t.__k = n.__k);

        if (!k.then) {
          So(t);
        }
      }

      Z.__e(k, t, n);
    }
  } else {
    if (s == null && t.__v == n.__v) {
      (t.__k = n.__k);
      (t.__e = n.__e);
    } else {
      (c = t.__e = pu(n.__e, t, n, r, o, s, i, l, u));
    }
  }

  if ((f = Z.diffed)) {
    f(t);
  }

  return 128 & t.__u ? undefined : c;
}
function So(e) {
  if (e && e.__c) {
    (e.__c.__e = true);
  }

  if (e && e.__k) {
    e.__k.forEach(So);
  }
}
function Qa(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    Jo(n[r], n[++r], n[++r]);
  }

  if (Z.__c) {
    Z.__c(t, e);
  }

  e.some(o => {
    try {
      (e = o.__h);
      (o.__h = []);

      e.some(s => {
        s.call(o);
      });
    } catch (s) {
      Z.__e(s, o.__v);
    }
  });
}
function ec(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : Array_isArray(e)
    ? e.map(ec)
    : it({}, e);
}
function pu(e, t, n, r, o, s, i, c, l) {
  let u;
  let f;
  let d;
  let p;
  let h;
  let m;
  let _;
  let b = n.props || Bn;

  const {
    props,
    type
  } = t;

  if (type == "svg") {
    (o = "http://www.w3.org/2000/svg");
  } else if (type == "math") {
    (o = "http://www.w3.org/1998/Math/MathML");
  } else if (!o) {
    (o = "http://www.w3.org/1999/xhtml");
  }

  if (s != null) {
    for (u = 0; u < s.length; u++) {
      if (
        (h = s[u]) &&
        "setAttribute" in h == !!type &&
        (type ? h.localName == type : h.nodeType == 3)
      ) {
        (e = h);
        (s[u] = null);
        break;
      }
    }
  }

  if (e == null) {
    if (type == null) {
      return document.createTextNode(props);
    }
    (e = document.createElementNS(o, type, props.is && props));

    if (c) {
      Z.__m && Z.__m(t, s);
      (c = false);
    }

    (s = null);
  }
  if (type == null) {
    if (b !== props && (!c || e.data != props)) {
      (e.data = props);
    }
  } else {
    (s = s && qn.call(e.childNodes));

    if (!c && s != null) {
      b = {};

      for (u = 0; u < e.attributes.length; u++) {
        b[(h = e.attributes[u]).name] = h.value;
      }
    }

    for (u in b) {
      (h = b[u]);

      if (u != "children") {
        if (u == "dangerouslySetInnerHTML") {
          d = h;
        } else if (!(u in props)) {
          if ((u == "value" && "defaultValue" in props) ||
          (u == "checked" && "defaultChecked" in props)) {
            continue;
          }
          nr(e, u, null, h, o);
        }
      }
    }
    for (u in props) {
      (h = props[u]);

      switch (u) {
      case "children":
        (p = h);
        break;
      case "dangerouslySetInnerHTML":
        (f = h);
        break;
      case "value":
        (m = h);
        break;
      case "checked":
        (_ = h);
        break;
      default:
        nr(e, u, h, b[u], o);
        break;
      }
    }
    if (f) {
      if (!c && (!d || f.__html != d.__html && f.__html != e.innerHTML)) {
        (e.innerHTML = f.__html);
      }

      (t.__k = []);
    } else {
      if (d) {
        (e.innerHTML = "");
      }

      Za(
        t.type == "template" ? e.content : e,
        Array_isArray(p) ? p : [p],
        t,
        n,
        r,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
        s,
        i,
        s ? s[0] : n.__k && dn(n, 0),
        c,
        l
      );

      if (s != null) {
        for (u = s.length; u--; ) {
          Ko(s[u]);
        }
      }
    }

    if (!c) {
      (u = "value");

      type == "progress" && m == null
        ? e.removeAttribute("value")
        : m != null &&
          (m !== e[u] ||
            (type == "progress" && !m) ||
            (type == "option" && m != b[u])) &&
          nr(e, u, m, b[u], o);

      (u = "checked");
      _ != null && _ != e[u] && nr(e, u, _, b[u], o);
    }
  }
  return e;
}
function Jo(e, t, n) {
  try {
    if (typeof e == "function") {
      const r = typeof e.__u == "function";

      if (r) {
        e.__u();
      }

      if (!r || t != null) {
        (e.__u = e(t));
      }
    } else {
      e.current = t;
    }
  } catch (o) {
    Z.__e(o, n);
  }
}
function tc(e, t, n) {
  let r;
  let o;

  if (Z.unmount) {
    Z.unmount(e);
  }

  if ((r = e.ref)) {
    if (!r.current || r.current == e.__e) {
      Jo(r, null, t);
    }
  }

  if ((r = e.__c) != null) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (s) {
        Z.__e(s, t);
      }
    }
    r.base = null;
    r.__P = null;
  }

  if ((r = e.__k)) {
    for (o = 0; o < r.length; o++) {
      if (r[o]) {
        tc(r[o], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    Ko(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function mu(e, t, n) {
  return this.constructor(e, n);
}
function Hn(e, t, n) {
  let r;
  let o;
  let s;
  let i;

  if (t == document) {
    (t = document.documentElement);
  }

  if (Z.__) {
    Z.__(e, t);
  }

  (o = (r = typeof n == "function") ? null : (n && n.__k) || t.__k);
  (s = []);
  (i = []);

  Zo(
    t,
    (e = ((!r && n) || t).__k = tt(ke, null, [e])),
    o || Bn,
    Bn,
    t.namespaceURI,
    !r && n ? [n] : o ? null : t.firstChild ? qn.call(t.childNodes) : null,
    s,
    !r && n ? n : o ? o.__e : t.firstChild,
    r,
    i
  );

  Qa(s, e, i);
}
function nc(e, t) {
  Hn(e, t, nc);
}
function rc(e, t, n) {
  let r;
  let o;
  let s;
  let i;
  const c = it({}, e.props);

  if (e.type && e.type.defaultProps) {
    (i = e.type.defaultProps);
  }

  for (s in t) {
    if (s == "key") {
      (r = t[s]);
    } else if (s == "ref") {
      (o = t[s]);
    } else {
      (c[s] = t[s] === undefined && i != null ? i[s] : t[s]);
    }
  }

  if (arguments.length > 2) {
    (c.children = arguments.length > 3 ? qn.call(arguments, 2) : n);
  }

  return Mn(e.type, c, r || e.key, o || e.ref, null);
}
function yn(e) {
  function t(n) {
    if (!this.getChildContext) {
      (r = new Set());
      o = {};
      o[t.__c] = this;
      (this.getChildContext = () => o);

      (this.componentWillUnmount = () => {
          r = null;
        });

      (this.shouldComponentUpdate = function (s) {
        if (this.props.value != s.value) {
          r.forEach(i => {
            (i.__e = true);
            Eo(i);
          });
        }
      });

      (this.sub = s => {
          r.add(s);
          const s_componentWillUnmount = s.componentWillUnmount;
          s.componentWillUnmount = () => {
            if (r) {
              r.delete(s);
            }

            if (s_componentWillUnmount) {
              s_componentWillUnmount.call(s);
            }
          };
        });
    }

    return n.children;
  }
  (t.__c = `__cC${Ya++}`);
  (t.__ = e);
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, r) => n.children(r)).contextType = t;

  return t;
}
(qn = Xa.slice);

(Z = {
    __e(e, t, n, r) {
      let o;
      let s;
      let i;

      while ((t = t.__)) {
        if ((o = t.__c) && !o.__) {
          try {
            if ((s = o.constructor) &&
                s.getDerivedStateFromError != null) {
              o.setState(s.getDerivedStateFromError(e));
              (i = o.__d);
            }

            if (o.componentDidCatch != null) {
              o.componentDidCatch(e, r || {});
              (i = o.__d);
            }

            if (i) {
              return (o.__E = o);
            }
          } catch (c) {
            e = c;
          }
        }
      }

      throw e;
    },
  });

(ja = 0);

(Ye.prototype.render = ke);
(zt = []);

(za = typeof Promise == "function"
  ? Promise.prototype.then.bind(Promise.resolve())
  : setTimeout);

(qa = (e, t) => e.__v.__b - t.__v.__b);

(Sr.__r = 0);
(Ga = /(PointerCapture)$|Capture$/i);
(Xo = 0);
(vo = Us(false));
(wo = Us(true));
(Ya = 0);
let gu = 0;
function a(e, t, n, r, o, s) {
  if (!t) {
    (t = {});
  }

  let i;
  let c;
  let l = t;
  if ("ref" in l) {
    (l = {});

    for (c in t) {
      if (c == "ref") {
        (i = t[c]);
      } else {
        (l[c] = t[c]);
      }
    }
  }
  const u = {
    type: e,
    props: l,
    key: n,
    ref: i,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: --gu,
    __i: -1,
    __u: 0,
    __source: o,
    __self: s,
  };
  if (typeof e == "function" && (i = e.defaultProps)) {
    for (c in i) {
      if (l[c] === undefined) {
        (l[c] = i[c]);
      }
    }
  }

  if (Z.vnode) {
    Z.vnode(u);
  }

  return u;
}
const K = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const ie = globalThis;
const Kt = "10.52.0";
function Or() {
  xr(ie);
  return ie;
}
function xr(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  (t.version = t.version || Kt);
  (t[Kt] = t[Kt] || {});
  return t[Kt];
}
function vn(e, t, n = ie) {
  const r = (n.__SENTRY__ = n.__SENTRY__ || {});
  const o = (r[Kt] = r[Kt] || {});
  return o[e] || (o[e] = t());
}
const _u = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const yu = "Sentry Logger ";
const br = {};
function wn(e) {
  if (!("console" in ie)) {
    return e();
  }
  const ie_console = ie.console;
  const n = {};
  const r = Object.keys(br);
  r.forEach((o) => {
    const br_o = br[o];
    (n[o] = ie_console[o]);
    (ie_console[o] = br_o);
  });
  try {
    return e();
  } finally {
    r.forEach((o) => {
      ie_console[o] = n[o];
    });
  }
}
function vu() {
  es().enabled = true;
}
function wu() {
  es().enabled = false;
}
function oc() {
  return es().enabled;
}
function Eu(...e) {
  Qo("log", ...e);
}
function Su(...e) {
  Qo("warn", ...e);
}
function bu(...e) {
  Qo("error", ...e);
}
function Qo(e, ...t) {
  if (K &&
    oc()) {
    wn(() => {
      ie.console[e](`${yu}[${e}]:`, ...t);
    });
  }
}
function es() {
  return K ? vn("loggerSettings", () => ({
    enabled: false
  })) : { enabled: false };
}

const V = {
    enable: vu,
    disable: wu,
    isEnabled: oc,
    log: Eu,
    warn: Su,
    error: bu,
  };

const sc = 50;
const Jt = "?";
const Fs = /\(error: (.*)\)/;
const Bs = /captureMessage|captureException/;
function ic(...e) {
  const t = e.sort((n, r) => n[0] - r[0]).map(n => n[1]);
  return (n, r = 0, o = 0) => {
    const s = [];

    const i = n.split(`
`);

    for (let c = r; c < i.length; c++) {
      let i_c = i[c];

      if (i_c.length > 1024) {
        (i_c = i_c.slice(0, 1024));
      }

      const u = Fs.test(i_c) ? i_c.replace(Fs, "$1") : i_c;
      if (!u.includes("Error: ")) {
        for (const f of t) {
          const d = f(u);
          if (d) {
            s.push(d);
            break;
          }
        }
        if (s.length >= sc + o) {
          break;
        }
      }
    }
    return Tu(s.slice(o));
  };
}
function Cu(e) {
  return Array.isArray(e) ? ic(...e) : e;
}
function Tu(e) {
  if (!e.length) {
    return [];
  }
  const t = Array.from(e);

  if (/sentryWrapped/.test(rr(t).function || "")) {
    t.pop();
  }

  t.reverse();

  if (Bs.test(rr(t).function || "")) {
    t.pop();
    Bs.test(rr(t).function || "") && t.pop();
  }

  return t
    .slice(0, sc)
    .map(n => ({
    ...n,
    filename: n.filename || rr(t).filename,
    function: n.function || Jt
  }));
}
function rr(e) {
  return e[e.length - 1] || {};
}
const qr = "<anonymous>";
function At(e) {
  try {
    return !e || typeof e != "function" ? qr : e.name || qr;
  } catch {
    return qr;
  }
}
function Hs(e) {
  const e_exception = e.exception;
  if (e_exception) {
    const n = [];
    try {
      e_exception.values.forEach((r) => {
        if (r.stacktrace.frames) {
          n.push(...r.stacktrace.frames);
        }
      });

      return n;
    } catch {
      return;
    }
  }
}
function ac(e) {
  return "__v_isVNode" in e && e.__v_isVNode ? "[VueVNode]" : "[VueViewModel]";
}
const An = {};
const Vs = {};
function en(e, t) {
  (An[e] = An[e] || []);
  An[e].push(t);

  return () => {
    const An_e = An[e];
    if (An_e) {
      const r = An_e.indexOf(t);

      if (r !== -1) {
        An_e.splice(r, 1);
      }
    }
  };
}
function tn(e, t) {
  if (!Vs[e]) {
    Vs[e] = true;
    try {
      t();
    } catch (n) {
      if (K) {
        V.error(`Error while instrumenting ${e}`, n);
      }
    }
  }
}
function et(e, t) {
  const n = e && An[e];
  if (n) {
    for (const r of n) {
      try {
        r(t);
      } catch (o) {
        if (K) {
          V.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${At(r)}
Error:`,
            o
          );
        }
      }
    }
  }
}
let Gr = null;
function Iu(e) {
  const t = "error";
  en(t, e);
  tn(t, Nu);
}
function Nu(...args) {
  (Gr = ie.onerror);

  (ie.onerror = function (e, t, n, r, o) {
    et("error", { column: r, error: o, line: n, msg: e, url: t });
    return Gr ? Gr.apply(this, args) : false;
  });

  (ie.onerror.__SENTRY_INSTRUMENTED__ = true);
}
let Yr = null;
function ku(e) {
  const t = "unhandledrejection";
  en(t, e);
  tn(t, Ru);
}
function Ru(...args) {
  (Yr = ie.onunhandledrejection);

  (ie.onunhandledrejection = function (e) {
    et("unhandledrejection", e);
    return Yr ? Yr.apply(this, args) : true;
  });

  (ie.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true);
}
const cc = Object.prototype.toString;
function Yn(e) {
  switch (cc.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      {
        return true;
      }
    default:
      {
        return Ot(e, Error);
      }
  }
}
function En(e, t) {
  return cc.call(e) === `[object ${t}]`;
}
function lc(e) {
  return En(e, "ErrorEvent");
}
function Ws(e) {
  return En(e, "DOMError");
}
function Pu(e) {
  return En(e, "DOMException");
}
function wt(e) {
  return En(e, "String");
}
function ts(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function Lr(e) {
  return (
    e === null || ts(e) || (typeof e != "object" && typeof e != "function")
  );
}
function Vn(e) {
  return En(e, "Object");
}
function $r(e) {
  return typeof Event !== "undefined" && Ot(e, Event);
}
function Au(e) {
  return typeof Element !== "undefined" && Ot(e, Element);
}
function Ou(e) {
  return En(e, "RegExp");
}
function Xn(e) {
  return !!(e?.then && typeof e.then == "function");
}
function xu(e) {
  return (
    Vn(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function Ot(e, t) {
  try {
    return e instanceof t;
  } catch {
    return false;
  }
}
function uc(e) {
  return !!(
    typeof e == "object" &&
    e !== null &&
    (e.__isVue || e._isVue || e.__v_isVNode)
  );
}
function dc(e) {
  return typeof Request !== "undefined" && Ot(e, Request);
}
const ns = ie;
const Lu = 80;
function fc(e, t = {}) {
  if (!e) {
    return "<unknown>";
  }
  try {
    let n = e;
    const r = 5;
    const o = [];
    let s = 0;
    let i = 0;
    const c = " > ";
    const c_length = c.length;
    let u;
    const f = Array.isArray(t) ? t : t.keyAttrs;
    const d = (!Array.isArray(t) && t.maxStringLength) || Lu;

    while (n &&
         s++ < r &&
         ((u = $u(n, f)),
         !(u === "html" || (s > 1 && i + o.length * c_length + u.length >= d)))) {
      o.push(u);
      (i += u.length);
      (n = n.parentNode);
    }

    return o.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function $u(e, t) {
  const n = e;
  const r = [];
  if (!n?.tagName) {
    return "";
  }
  if (ns.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) {
      return n.dataset.sentryComponent;
    }
    if (n.dataset.sentryElement) {
      return n.dataset.sentryElement;
    }
  }
  r.push(n.tagName.toLowerCase());
  const o = t?.length
    ? t.filter(s => n.getAttribute(s)).map(s => [s, n.getAttribute(s)])
    : null;
  if (o?.length) {
    o.forEach((s) => {
      r.push(`[${s[0]}="${s[1]}"]`);
    });
  } else {
    if (n.id) {
      r.push(`#${n.id}`);
    }

    const n_className = n.className;
    if (n_className && wt(n_className)) {
      const i = n_className.split(/\s+/);
      for (const c of i) {
        r.push(`.${c}`);
      }
    }
  }
  for (const s of ["aria-label", "type", "name", "title", "alt"]) {
    const i = n.getAttribute(s);

    if (i) {
      r.push(`[${s}="${i}"]`);
    }
  }
  return r.join("");
}
function rs() {
  try {
    return ns.document.location.href;
  } catch {
    return "";
  }
}
function Mu(e, t = 5) {
  if (!ns.HTMLElement) {
    return null;
  }
  let n = e;
  for (let r = 0; r < t; r++) {
    if (!n) {
      return null;
    }
    if (n instanceof HTMLElement) {
      if (n.dataset.sentryComponent) {
        return n.dataset.sentryComponent;
      }
      if (n.dataset.sentryElement) {
        return n.dataset.sentryElement;
      }
    }
    n = n.parentNode;
  }
  return null;
}
function je(e, t, n) {
  if (!(t in e)) {
    return;
  }
  const e_t = e[t];
  if (typeof e_t != "function") {
    return;
  }
  const o = n(e_t);

  if (typeof o == "function") {
    hc(o, e_t);
  }

  try {
    e[t] = o;
  } catch {
    if (K) {
      V.log(`Failed to replace method "${t}" in object`, e);
    }
  }
}
function xt(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: true, configurable: true });
  } catch {
    if (K) {
      V.log(
        `Failed to add non-enumerable property "${String(t)}" to object`,
        e
      );
    }
  }
}
function hc(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = n;
    t.prototype = n;
    xt(e, "__sentry_original__", t);
  } catch {}
}
function os(e) {
  return e.__sentry_original__;
}
function pc(e) {
  if (Yn(e)) {
    return { message: e.message, name: e.name, stack: e.stack, ...zs(e) };
  }
  if ($r(e)) {
    const t = {
      type: e.type,
      target: js(e.target),
      currentTarget: js(e.currentTarget),
      ...zs(e),
    };

    if (typeof CustomEvent !== "undefined" && Ot(e, CustomEvent)) {
      (t.detail = e.detail);
    }

    return t;
  } else {
    return e;
  }
}
function js(e) {
  try {
    return Au(e) ? fc(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
}
function zs(e) {
  return typeof e == "object" && e !== null
    ? Object.fromEntries(Object.entries(e))
    : {};
}
function Du(e) {
  const t = Object.keys(pc(e));
  t.sort();
  return t[0] ? t.join(", ") : "[object has no keys]";
}
let sn;
function Mr(e) {
  if (sn !== undefined) {
    return sn ? sn(e) : e();
  }
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const n = ie;
  return t in n && typeof n[t] == "function"
    ? ((sn = n[t]), sn(e))
    : ((sn = null), e());
}
function Cr() {
  return Mr(() => Math.random());
}
function Dr() {
  return Mr(() => Date.now());
}
function bo(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function qs(e, t) {
  if (!Array.isArray(e)) {
    return "";
  }
  const n = [];

  for (const o of e) {
    try {
      if (uc(o)) {
        n.push(ac(o));
      } else {
        n.push(String(o));
      }
    } catch {
      n.push("[value cannot be serialized]");
    }
  }

  return n.join(t);
}
function Dn(e, t, n = false) {
  return wt(e)
    ? Ou(t)
      ? t.test(e)
      : wt(t)
      ? n
        ? e === t
        : e.includes(t)
      : typeof t == "function"
      ? t(e)
      : false
    : false;
}
function Ur(e, t = [], n = false) {
  return t.some(r => Dn(e, r, n));
}
function Uu() {
  const e = ie;
  return e.crypto || e.msCrypto;
}
let Xr;
function Fu() {
  return Cr() * 16;
}
function Xe(e = Uu()) {
  try {
    if (e?.randomUUID) {
      return Mr(() => e.randomUUID()).replace(/-/g, "");
    }
  } catch {}

  if (!Xr) {
    (Xr = `10000000100040008000${100000000000/* 1e11 */}`);
  }

  return Xr.replace(/[018]/g, t => (t ^ ((Fu() & 15) >> (t / 4))).toString(16));
}
function mc(e) {
  return e.exception?.values?.[0];
}
function qt(e) {
  const { message, event_id } = e;
  if (message) {
    return message;
  }
  const r = mc(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || event_id || "<unknown>"
    : event_id || "<unknown>";
}
function Co(e, t, n) {
  const r = (e.exception = e.exception || {});
  const o = (r.values = r.values || []);
  const s = (o[0] = o[0] || {});

  if (!s.value) {
    (s.value = t || "");
  }

  if (!s.type) {
    (s.type = "Error");
  }
}
function fn(e, t) {
  const n = mc(e);
  if (!n) {
    return;
  }
  const r = { type: "generic", handled: true };
  const n_mechanism = n.mechanism;
  (n.mechanism = { ...r, ...n_mechanism, ...t });

  if (t && "data" in t) {
    const s = { ...n_mechanism?.data, ...t.data };
    n.mechanism.data = s;
  }
}
function Gs(e) {
  if (Bu(e)) {
    return true;
  }
  try {
    xt(e, "__sentry_captured__", true);
  } catch {}
  return false;
}
function Bu(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
const gc = 1000/* 1e3 */;
function Kn() {
  return Dr() / gc;
}
function Hu() {
  const { performance } = ie;
  if (!performance?.now || !performance.timeOrigin) {
    return Kn;
  }
  const e_timeOrigin = performance.timeOrigin;
  return () => (e_timeOrigin + Mr(() => performance.now())) / gc;
}
let Ys;
function Et() {
  return (Ys ?? (Ys = Hu()))();
}
function Vu(e) {
  const t = Et();

  const n = {
    sid: Xe(),
    init: true,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => ju(n),
  };

  if (e) {
    hn(n, e);
  }

  return n;
}
function hn(e, t = {}) {
  if (t.user) {
    !e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address);

    !e.did &&
      !t.did &&
      (e.did = t.user.id || t.user.email || t.user.username);
  }

  (e.timestamp = t.timestamp || Et());

  if (t.abnormal_mechanism) {
    (e.abnormal_mechanism = t.abnormal_mechanism);
  }

  if (t.ignoreDuration) {
    (e.ignoreDuration = t.ignoreDuration);
  }

  if (t.sid) {
    (e.sid = t.sid.length === 32 ? t.sid : Xe());
  }

  if (t.init !== undefined) {
    (e.init = t.init);
  }

  if (!e.did && t.did) {
    (e.did = `${t.did}`);
  }

  if (typeof t.started == "number") {
    (e.started = t.started);
  }

  if (e.ignoreDuration) {
    e.duration = undefined;
  } else if (typeof t.duration == "number") {
    e.duration = t.duration;
  } else {
    const n = e.timestamp - e.started;
    e.duration = n >= 0 ? n : 0;
  }

  if (t.release) {
    (e.release = t.release);
  }

  if (t.environment) {
    (e.environment = t.environment);
  }

  if (!e.ipAddress && t.ipAddress) {
    (e.ipAddress = t.ipAddress);
  }

  if (!e.userAgent && t.userAgent) {
    (e.userAgent = t.userAgent);
  }

  if (typeof t.errors == "number") {
    (e.errors = t.errors);
  }

  if (t.status) {
    (e.status = t.status);
  }
}
function Wu(e, t) {
  let n = {};

  if (e.status === "ok") {
    (n = { status: "exited" });
  }

  hn(e, n);
}
function ju(e) {
  return {
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1000/* 1e3 */).toISOString(),
    timestamp: new Date(e.timestamp * 1000/* 1e3 */).toISOString(),
    status: e.status,
    errors: e.errors,
    did:
      typeof e.did == "number" || typeof e.did == "string"
        ? `${e.did}`
        : undefined,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  };
}
function Zn(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0) {
    return t;
  }
  if (e && Object.keys(t).length === 0) {
    return e;
  }
  const r = { ...e };
  for (const o in t) {
    if (Object.prototype.hasOwnProperty.call(t, o)) {
      (r[o] = Zn(r[o], t[o], n - 1));
    }
  }
  return r;
}
function Xs() {
  return Xe();
}
function _c() {
  return Xe().substring(16);
}
const To = "_sentrySpan";
function Ks(e, t) {
  if (t) {
    xt(e, To, t);
  } else {
    delete e[To];
  }
}
function Zs(e) {
  return e[To];
}
const zu = 100;
class at {
  constructor() {
    (this._notifyingListeners = false);
    (this._scopeListeners = []);
    (this._eventProcessors = []);
    (this._breadcrumbs = []);
    (this._attachments = []);
    (this._user = {});
    (this._tags = {});
    (this._attributes = {});
    (this._extra = {});
    (this._contexts = {});
    (this._sdkProcessingMetadata = {});
    (this._propagationContext = { traceId: Xs(), sampleRand: Cr() });
  }
  clone() {
    const t = new at();
    (t._breadcrumbs = [...this._breadcrumbs]);
    (t._tags = { ...this._tags });
    (t._attributes = { ...this._attributes });
    (t._extra = { ...this._extra });
    (t._contexts = { ...this._contexts });

    if (this._contexts.flags) {
      (t._contexts.flags = { values: [...this._contexts.flags.values] });
    }

    (t._user = this._user);
    (t._level = this._level);
    (t._session = this._session);
    (t._transactionName = this._transactionName);
    (t._fingerprint = this._fingerprint);
    (t._eventProcessors = [...this._eventProcessors]);
    (t._attachments = [...this._attachments]);
    (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata });
    (t._propagationContext = { ...this._propagationContext });
    (t._client = this._client);
    (t._lastEventId = this._lastEventId);
    (t._conversationId = this._conversationId);
    Ks(t, Zs(this));
    return t;
  }
  setClient(t) {
    this._client = t;
  }
  setLastEventId(t) {
    this._lastEventId = t;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  addEventProcessor(t) {
    this._eventProcessors.push(t);
    return this;
  }
  setUser(t) {
    (this._user = t || {
      email: undefined,
      id: undefined,
      ip_address: undefined,
      username: undefined,
    });

    if (this._session) {
      hn(this._session, { user: t });
    }

    this._notifyScopeListeners();
    return this;
  }
  getUser() {
    return this._user;
  }
  setConversationId(t) {
    (this._conversationId = t || undefined);
    this._notifyScopeListeners();
    return this;
  }
  setTags(t) {
    (this._tags = { ...this._tags, ...t });
    this._notifyScopeListeners();
    return this;
  }
  setTag(t, n) {
    return this.setTags({ [t]: n });
  }
  setAttributes(t) {
    (this._attributes = { ...this._attributes, ...t });
    this._notifyScopeListeners();
    return this;
  }
  setAttribute(t, n) {
    return this.setAttributes({ [t]: n });
  }
  removeAttribute(t) {
    if (t in this._attributes) {
      delete this._attributes[t];
      this._notifyScopeListeners();
    }

    return this;
  }
  setExtras(t) {
    (this._extra = { ...this._extra, ...t });
    this._notifyScopeListeners();
    return this;
  }
  setExtra(t, n) {
    (this._extra = { ...this._extra, [t]: n });
    this._notifyScopeListeners();
    return this;
  }
  setFingerprint(t) {
    (this._fingerprint = t);
    this._notifyScopeListeners();
    return this;
  }
  setLevel(t) {
    (this._level = t);
    this._notifyScopeListeners();
    return this;
  }
  setTransactionName(t) {
    (this._transactionName = t);
    this._notifyScopeListeners();
    return this;
  }
  setContext(t, n) {
    if (n === null) {
      delete this._contexts[t];
    } else {
      (this._contexts[t] = n);
    }

    this._notifyScopeListeners();
    return this;
  }
  setSession(t) {
    if (t) {
      (this._session = t);
    } else {
      delete this._session;
    }

    this._notifyScopeListeners();
    return this;
  }
  getSession() {
    return this._session;
  }
  update(t) {
    if (!t) {
      return this;
    }
    const n = typeof t == "function" ? t(this) : t;
    const r = n instanceof at ? n.getScopeData() : Vn(n) ? t : undefined;

    const {
      tags,
      attributes,
      extra,
      user,
      contexts,
      level,
      fingerprint = [],
      propagationContext,
      conversationId,
    } = r || {};

    (this._tags = { ...this._tags, ...tags });
    (this._attributes = { ...this._attributes, ...attributes });
    (this._extra = { ...this._extra, ...extra });
    (this._contexts = { ...this._contexts, ...contexts });

    if (user && Object.keys(user).length) {
      (this._user = user);
    }

    if (level) {
      (this._level = level);
    }

    if (fingerprint.length) {
      (this._fingerprint = fingerprint);
    }

    if (propagationContext) {
      (this._propagationContext = propagationContext);
    }

    if (conversationId) {
      (this._conversationId = conversationId);
    }

    return this;
  }
  clear() {
    (this._breadcrumbs = []);
    (this._tags = {});
    (this._attributes = {});
    (this._extra = {});
    (this._user = {});
    (this._contexts = {});
    (this._level = undefined);
    (this._transactionName = undefined);
    (this._fingerprint = undefined);
    (this._session = undefined);
    (this._conversationId = undefined);
    Ks(this, undefined);
    (this._attachments = []);
    this.setPropagationContext({ traceId: Xs(), sampleRand: Cr() });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : zu;
    if (r <= 0) {
      return this;
    }
    const o = {
      timestamp: Kn(),
      ...t,
      message: t.message ? bo(t.message, 2048) : t.message,
    };
    this._breadcrumbs.push(o);

    if (this._breadcrumbs.length > r) {
      (this._breadcrumbs = this._breadcrumbs.slice(-r));
      this._client?.recordDroppedEvent("buffer_overflow", "log_item");
    }

    this._notifyScopeListeners();
    return this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    (this._breadcrumbs = []);
    this._notifyScopeListeners();
    return this;
  }
  addAttachment(t) {
    this._attachments.push(t);
    return this;
  }
  clearAttachments() {
    (this._attachments = []);
    return this;
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      attributes: this._attributes,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: Zs(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(t) {
    (this._sdkProcessingMetadata = Zn(this._sdkProcessingMetadata, t, 2));
    return this;
  }
  setPropagationContext(t) {
    (this._propagationContext = t);
    return this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(t, n) {
    const r = n?.event_id || Xe();
    if (!this._client) {
      if (K) {
        V.warn("No client configured on scope - will not capture exception!");
      }

      return r;
    }
    const o = new Error("Sentry syntheticException");

    this._client.captureException(
      t,
      { originalException: t, syntheticException: o, ...n, event_id: r },
      this
    );

    return r;
  }
  captureMessage(t, n, r) {
    const o = r?.event_id || Xe();
    if (!this._client) {
      if (K) {
        V.warn("No client configured on scope - will not capture message!");
      }

      return o;
    }
    const s = r?.syntheticException ?? new Error(t);

    this._client.captureMessage(
      t,
      n,
      { originalException: t, syntheticException: s, ...r, event_id: o },
      this
    );

    return o;
  }
  captureEvent(t, n) {
    const r = t.event_id || n?.event_id || Xe();
    return this._client
      ? (this._client.captureEvent(t, { ...n, event_id: r }, this), r)
      : (K && V.warn("No client configured on scope - will not capture event!"),
        r);
  }
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      (this._notifyingListeners = true);

      this._scopeListeners.forEach((t) => {
        t(this);
      });

      (this._notifyingListeners = false);
    }
  }
}
function qu() {
  return vn("defaultCurrentScope", () => new at());
}
function Gu() {
  return vn("defaultIsolationScope", () => new at());
}

const Js = e => e instanceof Promise && !e[yc];

const yc = Symbol("chained PromiseLike");

const Yu = (e, t, n) => {
  const r = e.then(
    o => {
      t(o);
      return o;
    },
    (o) => {
      n(o);
      throw o;
    }
  );
  return Js(r) && Js(e) ? r : Xu(e, r);
};

const Xu = (e, t) => {
  if (!t) {
    return e;
  }
  let n = false;
  for (const r in e) {
    if (r in t) {
      continue;
    }
    n = true;
    const e_r = e[r];

    if (typeof e_r == "function") {
      Object.defineProperty(t, r, {
            value: (...s) => e_r.apply(e, s),
            enumerable: true,
            configurable: true,
            writable: true,
          });
    } else {
      (t[r] = e_r);
    }
  }

  if (n) {
    Object.assign(t, { [yc]: true });
  }

  return t;
};

class Ku {
  constructor(t, n) {
    let r;

    if (t) {
      (r = t);
    } else {
      (r = new at());
    }

    let o;

    if (n) {
      (o = n);
    } else {
      (o = new at());
    }

    (this._stack = [{ scope: r }]);
    (this._isolationScope = o);
  }
  withScope(t) {
    const n = this._pushScope();
    let r;
    try {
      r = t(n);
    } catch (o) {
      this._popScope();
      throw o;
    }
    return Xn(r)
      ? Yu(
          r,
          () => this._popScope(),
          () => this._popScope()
        )
      : (this._popScope(), r);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const t = this.getScope().clone();
    this._stack.push({ client: this.getClient(), scope: t });
    return t;
  }
  _popScope() {
    return this._stack.length <= 1 ? false : !!this._stack.pop();
  }
}
function pn() {
  const e = Or();
  const t = xr(e);
  return (t.stack = t.stack || new Ku(qu(), Gu()));
}
function Zu(e) {
  return pn().withScope(e);
}
function Ju(e, t) {
  const n = pn();
  return n.withScope(() => {
    (n.getStackTop().scope = e);
    return t(e);
  });
}
function Qs(e) {
  return pn().withScope(() => e(pn().getIsolationScope()));
}
function Qu() {
  return {
    withIsolationScope: Qs,
    withScope: Zu,
    withSetScope: Ju,
    withSetIsolationScope: (e, t) => Qs(t),
    getCurrentScope: () => pn().getScope(),
    getIsolationScope: () => pn().getIsolationScope(),
  };
}
function ss(e) {
  const t = xr(e);
  return t.acs ? t.acs : Qu();
}
function lt() {
  const e = Or();
  return ss(e).getCurrentScope();
}
function ut() {
  const e = Or();
  return ss(e).getIsolationScope();
}
function ed() {
  return vn("globalScope", () => new at());
}
function is(...e) {
  const t = Or();
  const n = ss(t);
  if (e.length === 2) {
    const [r, o] = e;
    return r ? n.withSetScope(r, o) : n.withScope(o);
  }
  return n.withScope(e[0]);
}
function Re() {
  return lt().getClient();
}
function td(e) {
  const { traceId, parentSpanId, propagationSpanId } = e.getPropagationContext();
  const s = { trace_id: traceId, span_id: propagationSpanId || _c() };

  if (parentSpanId) {
    (s.parent_span_id = parentSpanId);
  }

  return s;
}
const nd = "sentry.source";
const rd = "sentry.sample_rate";
const od = "sentry.previous_trace_sample_rate";
const sd = "sentry.op";
const id = "sentry.origin";
const vc = "sentry.profile_id";
const wc = "sentry.exclusive_time";
const ad = "gen_ai.conversation.id";
const cd = 0;
const ld = 1;
function ud(e) {
  if (e) {
    if (typeof e == "object" && "deref" in e && typeof e.deref == "function") {
      try {
        return e.deref();
      } catch {
        return;
      }
    }
    return e;
  }
}
const dd = "_sentryScope";
const fd = "_sentryIsolationScope";
function Ec(e) {
  const t = e;
  return { scope: t[dd], isolationScope: ud(t[fd]) };
}
const ei = "sentry-";
function hd(e) {
  const t = pd(e);
  if (!t) {
    return;
  }
  const n = Object.entries(t).reduce((r, [o, s]) => {
    if (o.startsWith(ei)) {
      const i = o.slice(ei.length);
      r[i] = s;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function pd(e) {
  if (!(!e || (!wt(e) && !Array.isArray(e)))) {
    return Array.isArray(e)
      ? e.reduce((t, n) => {
      const r = ti(n);

      Object.entries(r).forEach(([o, s]) => {
        t[o] = s;
      });

      return t;
    }, {})
      : ti(e);
  }
}
function ti(e) {
  return e
    .split(",")
    .map((t) => {
    const n = t.indexOf("=");
    if (n === -1) {
      return [];
    }
    const r = t.slice(0, n);
    const o = t.slice(n + 1);
    return [r, o].map((s) => {
      try {
        return decodeURIComponent(s.trim());
      } catch {
        return;
      }
    });
  })
    .reduce((t, [n, r]) => {
    if (n && r) {
      (t[n] = r);
    }

    return t;
  }, {});
}
const md = /^o(\d+)\./;

const gd =
  /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function _d(e) {
  return e === "http" || e === "https";
}
function Sn(e, t = false) {
  const {
    host,
    path,
    pass,
    port,
    projectId,
    protocol,
    publicKey,
  } = e;
  return `${protocol}://${publicKey}${t && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${
    path && `${path}/`
  }${projectId}`;
}
function yd(e) {
  const t = gd.exec(e);
  if (!t) {
    wn(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [n, r, o = "", s = "", i = "", c = ""] = t.slice(1);
  let l = "";
  let u = c;
  const f = u.split("/");

  if (f.length > 1) {
    (l = f.slice(0, -1).join("/"));
    (u = f.pop());
  }

  if (u) {
    const d = u.match(/^\d+/);

    if (d) {
      (u = d[0]);
    }
  }

  return Sc({
    host: s,
    pass: o,
    path: l,
    projectId: u,
    port: i,
    protocol: n,
    publicKey: r,
  });
}
function Sc(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId,
  };
}
function vd(e) {
  if (!K) {
    return true;
  }
  const { port, projectId, protocol } = e;
  return ["protocol", "publicKey", "host", "projectId"].find(i => e[i] ? false : (V.error(`Invalid Sentry Dsn: ${i} missing`), true)
  )
    ? false
    : projectId.match(/^\d+$/)
    ? _d(protocol)
      ? port && isNaN(parseInt(port, 10))
        ? (V.error(`Invalid Sentry Dsn: Invalid port ${port}`), false)
        : true
      : (V.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`), false)
    : (V.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`), false);
}
function wd(e) {
  return e.match(md)?.[1];
}
function Ed(e) {
  const t = e.getOptions();
  const { host } = e.getDsn() || {};
  let r;

  if (t.orgId) {
    (r = String(t.orgId));
  } else if (host) {
    (r = wd(host));
  }

  return r;
}
function bc(e) {
  const t = typeof e == "string" ? yd(e) : Sc(e);
  if (!(!t || !vd(t))) {
    return t;
  }
}
function Sd(e) {
  if (typeof e == "boolean") {
    return Number(e);
  }
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) {
    return t;
  }
}
const Cc = 1;
function bd(e) {
  const { spanId, traceId, isRemote } = e.spanContext();
  const o = isRemote ? spanId : Fr(e).parent_span_id;
  const s = Ec(e).scope;
  const i = isRemote ? s?.getPropagationContext().propagationSpanId || _c() : spanId;
  return { parent_span_id: o, span_id: i, trace_id: traceId };
}
function Cd(e) {
  if (e && e.length > 0) {
    return e.map(
      (
        {
          context: { spanId: t, traceId: n, traceFlags: r, ...o },
          attributes: s,
        }
      ) => ({
        span_id: t,
        trace_id: n,
        sampled: r === Cc,
        attributes: s,
        ...o
      })
    );
  }
}
function ri(e) {
  if (typeof e == "number") {
    return oi(e);
  }

  if (Array.isArray(e)) {
    return e[0] + e[1] / 1000000000/* 1e9 */;
  }

  if (e instanceof Date) {
    return oi(e.getTime());
  }

  return Et();
}
function oi(e) {
  return e > 9999999999 ? e / 1000/* 1e3 */ : e;
}
function Fr(e) {
  if (Nd(e)) {
    return e.getSpanJSON();
  }
  const { spanId, traceId } = e.spanContext();
  if (Id(e)) {
    const {
      attributes,
      startTime,
      name,
      endTime,
      status,
      links,
    } = e;
    return {
      span_id: spanId,
      trace_id: traceId,
      data: attributes,
      description: name,
      parent_span_id: Td(e),
      start_timestamp: ri(startTime),
      timestamp: ri(endTime) || undefined,
      status: Rd(status),
      op: attributes[sd],
      origin: attributes[id],
      links: Cd(links),
    };
  }
  return { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
}
function Td(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
    ? e.parentSpanContext?.spanId
    : undefined;
}
function Id(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function Nd(e) {
  return typeof e.getSpanJSON == "function";
}
function kd(e) {
  const { traceFlags } = e.spanContext();
  return traceFlags === Cc;
}
function Rd(e) {
  if (!(!e || e.code === cd)) {
    return e.code === ld ? "ok" : e.message || "internal_error";
  }
}
const Pd = "_sentryRootSpan";
const Tc = Ad;
function Ad(e) {
  return e[Pd] || e;
}
function si() {
  if (!ni) {
    wn(() => {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
        );
      });

    (ni = true);
  }
}
function Od(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const t = Re()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function ii(e) {
  V.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`
  );
}
function ai(e, t) {
  if (!t?.length) {
    return false;
  }
  for (const n of t) {
    if ($d(n)) {
      if (e.description && Dn(e.description, n)) {
        if (K) {
          ii(e);
        }

        return true;
      }
      continue;
    }
    const r = !!n.attributes && Object.keys(n.attributes).length > 0;
    if (!n.name && !n.op && !r) {
      continue;
    }
    const o = n.name ? e.description && Dn(e.description, n.name) : true;
    const s = n.op ? e.op && Dn(e.op, n.op) : true;

    const i = n.attributes
      ? Object.entries(n.attributes).every(([c, l]) => xd(e.attributes?.[c], l)
        )
      : true;

    if (o && s && i) {
      if (K) {
        ii(e);
      }

      return true;
    }
  }
  return false;
}
function xd(e, t) {
  return typeof e == "string" && (typeof t == "string" || t instanceof RegExp)
    ? Dn(e, t)
    : Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e === t;
}
function Ld(e, t) {
  const {
    parent_span_id,
    span_id
  } = t;

  if (parent_span_id) {
    for (const o of e) {
      if (o.parent_span_id === span_id) {
        (o.parent_span_id = parent_span_id);
      }
    }
  }
}
function $d(e) {
  return typeof e == "string" || e instanceof RegExp;
}
const as = "production";
const Md = "_frozenDsc";
function Ic(e, t) {
  const n = t.getOptions();
  const { publicKey } = t.getDsn() || {};

  const o = {
    environment: n.environment || as,
    release: n.release,
    public_key: publicKey,
    trace_id: e,
    org_id: Ed(t),
  };

  t.emit("createDsc", o);
  return o;
}
function Dd(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || Ic(n.traceId, e);
}
function Ud(e) {
  const t = Re();
  if (!t) {
    return {};
  }
  const n = Tc(e);

  const {
    data,
    description
  } = Fr(n);

  const s = n.spanContext().traceState;
  const i = s?.get("sentry.sample_rate") ?? data[rd] ?? data[od];
  function c(m) {
    if ((typeof i == "number" || typeof i == "string")) {
      (m.sample_rate = `${i}`);
    }

    return m;
  }
  const n_Md = n[Md];
  if (n_Md) {
    return c(n_Md);
  }
  const u = s?.get("sentry.dsc");
  const f = u && hd(u);
  if (f) {
    return c(f);
  }
  const d = Ic(e.spanContext().traceId, t);
  const p = data[nd] ?? data["sentry.span.source"];

  if (p !== "url" && description) {
    (d.transaction = description);
  }

  if (Od()) {
    (d.sampled = String(kd(n)));

    (d.sample_rand = s?.get("sentry.sample_rand") ??
    Ec(n).scope?.getPropagationContext().sampleRand.toString());
  }

  c(d);
  t.emit("createDsc", d, n);
  return d;
}
function Fd(e) {
  return !!e && typeof e == "function" && "_streamed" in e && !!e._streamed;
}
const Bd = Symbol.for("sentry.skipNormalization");
const Hd = Symbol.for("sentry.overrideNormalizationDepth");
function Vd(e) {
  return !!e[Bd];
}
function Wd(e) {
  const e_Hd = e[Hd];
  return typeof e_Hd == "number" ? e_Hd : undefined;
}
function gt(e, t = 100, n = Infinity) {
  try {
    return Io("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function Nc(e, t = 3, n = 100 * 1024) {
  const r = gt(e, t);
  return Gd(r) > n ? Nc(e, t - 1, n) : r;
}
function Io(e, t, n = Infinity, r = Infinity, o = Yd()) {
  const [s, i] = o;
  if (t == null ||
  ["boolean", "string"].includes(typeof t) ||
  (typeof t == "number" && Number.isFinite(t))) {
    return t;
  }
  const c = jd(e, t);
  if (!c.startsWith("[object ")) {
    return c;
  }
  if (Vd(t)) {
    return t;
  }
  const l = Wd(t);
  const u = l !== undefined ? l : n;
  if (u === 0) {
    return c.replace("object ", "");
  }
  if (s(t)) {
    return "[Circular ~]";
  }
  const f = t;
  if (f && typeof f.toJSON == "function") {
    try {
      const m = f.toJSON();
      return Io("", m, u - 1, r, o);
    } catch {}
  }
  const d = Array.isArray(t) ? [] : {};
  let p = 0;
  const h = pc(t);
  for (const m in h) {
    if (!Object.prototype.hasOwnProperty.call(h, m)) {
      continue;
    }
    if (p >= r) {
      d[m] = "[MaxProperties ~]";
      break;
    }
    const h_m = h[m];
    (d[m] = Io(m, h_m, u - 1, r, o));
    p++;
  }
  i(t);
  return d;
}
function jd(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events) {
      return "[Domain]";
    }
    if (e === "domainEmitter") {
      return "[DomainEmitter]";
    }
    if (typeof global !== "undefined" && t === global) {
      return "[Global]";
    }
    if (typeof window !== "undefined" && t === window) {
      return "[Window]";
    }
    if (typeof document !== "undefined" && t === document) {
      return "[Document]";
    }
    if (uc(t)) {
      return ac(t);
    }
    if (xu(t)) {
      return "[SyntheticEvent]";
    }
    if (typeof t == "number" && !Number.isFinite(t)) {
      return `[${t}]`;
    }
    if (typeof t == "function") {
      return `[Function: ${At(t)}]`;
    }
    if (typeof t == "symbol") {
      return `[${String(t)}]`;
    }
    if (typeof t == "bigint") {
      return `[BigInt: ${String(t)}]`;
    }
    const n = zd(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function zd(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function qd(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function Gd(e) {
  return qd(JSON.stringify(e));
}
function Yd() {
  const e = new WeakSet();
  function t(r) {
    return e.has(r) ? true : (e.add(r), false);
  }
  function n(r) {
    e.delete(r);
  }
  return [t, n];
}
function bn(e, t = []) {
  return [e, t];
}
function Xd(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function No(e, t) {
  const [, n] = e;
  for (const r of n) {
    const o = r[0].type;
    if (t(r, o)) {
      return true;
    }
  }
  return false;
}
function Kd(e, t) {
  return No(e, (n, r) => t.includes(r));
}
function ko(e) {
  const t = xr(ie);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function Zd(e) {
  const [t, n] = e;
  let r = JSON.stringify(t);
  function o(s) {
    if (typeof r == "string") {
      (r = typeof s == "string" ? r + s : [ko(r), s]);
    } else {
      r.push(typeof s == "string" ? ko(s) : s);
    }
  }
  for (const s of n) {
    const [i, c] = s;

    o(`
${JSON.stringify(i)}
`);

    if (typeof c == "string" || c instanceof Uint8Array) {
      o(c);
    } else {
      let l;
      try {
        l = JSON.stringify(c);
      } catch {
        l = JSON.stringify(gt(c));
      }
      o(l);
    }
  }
  return typeof r == "string" ? r : Jd(r);
}
function Jd(e) {
  const t = e.reduce((o, s) => o + s.length, 0);

  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e) {
    n.set(o, r);
    (r += o.length);
  }
  return n;
}
function Qd(e) {
  const t = typeof e.data == "string" ? ko(e.data) : e.data;
  return [
    {
      type: "attachment",
      length: t.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    },
    t,
  ];
}
const kc = {
  sessions: "session",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile_chunk: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  raw_security: "security",
  log: "log_item",
  trace_metric: "metric",
};
function ef(e) {
  return e in kc;
}
function ci(e) {
  return ef(e) ? kc[e] : e;
}
function Rc(e) {
  if (!e?.sdk) {
    return;
  }
  const { name, version } = e.sdk;
  return { name: name, version: version };
}
function tf(e, t, n, r) {
  const o = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: Sn(r) }),
    ...(o && { trace: o }),
  };
}
function nf(e, t) {
  if (!t) {
    return e;
  }
  const n = e.sdk || {};

  (e.sdk = {
    ...n,
    name: n.name || t.name,
    version: n.version || t.version,
    integrations: [...(e.sdk?.integrations || []), ...(t.integrations || [])],
    packages: [...(e.sdk?.packages || []), ...(t.packages || [])],
    settings:
      e.sdk?.settings || t.settings
        ? { ...e.sdk?.settings, ...t.settings }
        : undefined,
  });

  return e;
}
function rf(e, t, n, r) {
  const o = Rc(n);

  const s = {
    sent_at: new Date().toISOString(),
    ...(o && { sdk: o }),
    ...(!!r && t && { dsn: Sn(t) }),
  };

  const i =
    "aggregates" in e
      ? [{ type: "sessions" }, e]
      : [{ type: "session" }, e.toJSON()];

  return bn(s, [i]);
}
function of(e, t, n, r) {
  const o = Rc(n);
  const s = e.type && e.type !== "replay_event" ? e.type : "event";
  nf(e, n?.sdk);
  const i = tf(e, o, r, t);
  delete e.sdkProcessingMetadata;
  return bn(i, [[{ type: s }, e]]);
}
function sf(e, t) {
  const {
    fingerprint,
    span,
    breadcrumbs,
    sdkProcessingMetadata,
  } = t;
  af(e, t);

  if (span) {
    uf(e, span);
  }

  df(e, fingerprint);
  cf(e, breadcrumbs);
  lf(e, sdkProcessingMetadata);
}
function li(e, t) {
  const {
    extra,
    tags,
    attributes,
    user,
    contexts,
    level,
    sdkProcessingMetadata,
    breadcrumbs,
    fingerprint,
    eventProcessors,
    attachments,
    propagationContext,
    transactionName,
    span,
  } = t;
  In(e, "extra", extra);
  In(e, "tags", tags);
  In(e, "attributes", attributes);
  In(e, "user", user);
  In(e, "contexts", contexts);
  (e.sdkProcessingMetadata = Zn(e.sdkProcessingMetadata, sdkProcessingMetadata, 2));

  if (level) {
    (e.level = level);
  }

  if (transactionName) {
    (e.transactionName = transactionName);
  }

  if (span) {
    (e.span = span);
  }

  if (breadcrumbs.length) {
    (e.breadcrumbs = [...e.breadcrumbs, ...breadcrumbs]);
  }

  if (fingerprint.length) {
    (e.fingerprint = [...e.fingerprint, ...fingerprint]);
  }

  if (eventProcessors.length) {
    (e.eventProcessors = [...e.eventProcessors, ...eventProcessors]);
  }

  if (attachments.length) {
    (e.attachments = [...e.attachments, ...attachments]);
  }

  (e.propagationContext = { ...e.propagationContext, ...propagationContext });
}
function In(e, t, n) {
  e[t] = Zn(e[t], n, 1);
}
function Pc(e, t) {
  const n = ed().getScopeData();

  if (e) {
    li(n, e.getScopeData());
  }

  if (t) {
    li(n, t.getScopeData());
  }

  return n;
}
function af(e, t) {
  const {
    extra,
    tags,
    user,
    contexts,
    level,
    transactionName,
  } = t;

  if (Object.keys(extra).length) {
    (e.extra = { ...extra, ...e.extra });
  }

  if (Object.keys(tags).length) {
    (e.tags = { ...tags, ...e.tags });
  }

  if (Object.keys(user).length) {
    (e.user = { ...user, ...e.user });
  }

  if (Object.keys(contexts).length) {
    (e.contexts = { ...contexts, ...e.contexts });
  }

  if (level) {
    (e.level = level);
  }

  if (transactionName && e.type !== "transaction") {
    (e.transaction = transactionName);
  }
}
function cf(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : undefined;
}
function lf(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function uf(e, t) {
  (e.contexts = { trace: bd(t), ...e.contexts });

  (e.sdkProcessingMetadata = {
      dynamicSamplingContext: Ud(t),
      ...e.sdkProcessingMetadata,
    });

  const n = Tc(t);
  const r = Fr(n).description;

  if (r && !e.transaction && e.type === "transaction") {
    (e.transaction = r);
  }
}
function df(e, t) {
  (e.fingerprint = e.fingerprint
    ? Array.isArray(e.fingerprint)
      ? e.fingerprint
      : [e.fingerprint]
    : []);

  if (t) {
    (e.fingerprint = e.fingerprint.concat(t));
  }

  if (!e.fingerprint.length) {
    delete e.fingerprint;
  }
}
function Kr(e) {
  if (!e) {
    return {};
  }
  const t = e.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
  );
  if (!t) {
    return {};
  }
  const n = t[6] || "";
  const r = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: r,
    relative: t[5] + n + r,
  };
}
function ff(e, t = true) {
  if (e.startsWith("data:")) {
    const n = e.match(/^data:([^;,]+)/);
    const r = n ? n[1] : "text/plain";
    const o = e.includes(";base64,");
    const s = e.indexOf(",");
    let i = "";
    if (t && s !== -1) {
      const c = e.slice(s + 1);
      i = c.length > 10 ? `${c.slice(0, 10)}... [truncated]` : c;
    }
    return `data:${r}${o ? ",base64" : ""}${i ? `,${i}` : ""}`;
  }
  return e;
}
function Ac(e, t) {
  const n = e.attributes ?? (e.attributes = {});
  Object.entries(t).forEach(([r, o]) => {
    if (o != null && !(r in n)) {
      (n[r] = o);
    }
  });
}
const Zr = 0;
const ui = 1;
const di = 2;
function Jn(e) {
  return new Wn((t) => {
    t(e);
  });
}
function cs(e) {
  return new Wn((t, n) => {
    n(e);
  });
}
class Wn {
  constructor(t) {
    (this._state = Zr);
    (this._handlers = []);
    this._runExecutor(t);
  }
  then(t, n) {
    return new Wn((r, o) => {
      this._handlers.push([
        false,
        (s) => {
          if (!t) {
            r(s);
          } else {
            try {
              r(t(s));
            } catch (i) {
              o(i);
            }
          }
        },
        (s) => {
          if (!n) {
            o(s);
          } else {
            try {
              r(n(s));
            } catch (i) {
              o(i);
            }
          }
        },
      ]);

      this._executeHandlers();
    });
  }
  catch(t) {
    return this.then(n => n, t);
  }
  finally(t) {
    return new Wn((n, r) => {
      let o;
      let s;
      return this.then(
        (i) => {
          (s = false);
          (o = i);

          if (t) {
            t();
          }
        },
        (i) => {
          (s = true);
          (o = i);

          if (t) {
            t();
          }
        }
      ).then(() => {
        if (s) {
          r(o);
          return;
        }
        n(o);
      });
    });
  }
  _executeHandlers() {
    if (this._state === Zr) {
      return;
    }
    const t = this._handlers.slice();
    (this._handlers = []);

    t.forEach((n) => {
      if (!n[0]) {
        this._state === ui && n[1](this._value);
        this._state === di && n[2](this._value);
        (n[0] = true);
      }
    });
  }
  _runExecutor(t) {
    const n = (s, i) => {
        if (this._state === Zr) {
          if (Xn(i)) {
            i.then(r, o);
            return;
          }
          (this._state = s);
          (this._value = i);
          this._executeHandlers();
        }
      };

    const r = (s) => {
      n(ui, s);
    };

    const o = (s) => {
      n(di, s);
    };

    try {
      t(r, o);
    } catch (s) {
      o(s);
    }
  }
}
function hf(e, t, n, r = 0) {
  try {
    const o = Ro(t, n, e, r);
    return Xn(o) ? o : Jn(o);
  } catch (o) {
    return cs(o);
  }
}
function Ro(e, t, n, r) {
  const n_r = n[r];
  if (!e || !n_r) {
    return e;
  }
  const s = n_r({ ...e }, t);

  if (K && s === null) {
    V.log(`Event processor "${n_r.id || "?"}" dropped event`);
  }

  return Xn(s) ? s.then(i => Ro(i, t, n, r + 1)) : Ro(s, t, n, r + 1);
}
let Mt;
let fi;
let hi;
let Ct;
function pf(e) {
  const {
    _sentryDebugIds,
    _debugIds
  } = ie;

  if (!_sentryDebugIds && !_debugIds) {
    return {};
  }
  const r = _sentryDebugIds ? Object.keys(_sentryDebugIds) : [];
  const o = _debugIds ? Object.keys(_debugIds) : [];
  if (Ct && r.length === fi && o.length === hi) {
    return Ct;
  }
  (fi = r.length);
  (hi = o.length);
  (Ct = {});

  if (!Mt) {
    (Mt = {});
  }

  const s = (i, c) => {
    for (const l of i) {
      const c_l = c[l];
      const f = Mt?.[l];
      if (f && Ct && c_l) {
        (Ct[f[0]] = c_l);

        if (Mt) {
          (Mt[l] = [f[0], c_l]);
        }
      } else if (c_l) {
        const d = e(l);
        for (let p = d.length - 1; p >= 0; p--) {
          const m = d[p]?.filename;
          if (m && Ct && Mt) {
            (Ct[m] = c_l);
            (Mt[l] = [m, c_l]);
            break;
          }
        }
      }
    }
  };

  if (_sentryDebugIds) {
    s(r, _sentryDebugIds);
  }

  if (_debugIds) {
    s(o, _debugIds);
  }

  return Ct;
}
function mf(e, t, n, r, o, s) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000/* 1e3 */ } = e;

  const l = {
    ...t,
    event_id: t.event_id || n.event_id || Xe(),
    timestamp: t.timestamp || Kn(),
  };

  const u = n.integrations || e.integrations.map(g => g.name);

  gf(l, e);
  vf(l, u);

  if (o) {
    o.emit("applyFrameMetadata", t);
  }

  if (t.type === undefined) {
    _f(l, e.stackParser);
  }

  const f = Ef(r, n.captureContext);

  if (n.mechanism) {
    fn(l, n.mechanism);
  }

  const d = o ? o.getEventProcessors() : [];
  const p = Pc(s, f);
  const h = [...(n.attachments || []), ...p.attachments];

  if (h.length) {
    (n.attachments = h);
  }

  sf(l, p);
  const m = [...d, ...p.eventProcessors];
  return (n.data && n.data.__sentry__ === true ? Jn(l) : hf(m, l, n)).then(
    g => {
      if (g) {
        yf(g);
      }

      return typeof normalizeDepth == "number" && normalizeDepth > 0 ? wf(g, normalizeDepth, normalizeMaxBreadth) : g;
    }
  );
}
function gf(e, t) {
  const { environment, release, dist, maxValueLength } = t;
  (e.environment = e.environment || environment || as);

  if (!e.release && release) {
    (e.release = release);
  }

  if (!e.dist && dist) {
    (e.dist = dist);
  }

  const e_request = e.request;

  if (e_request?.url && maxValueLength) {
    (e_request.url = bo(e_request.url, maxValueLength));
  }

  if (maxValueLength) {
    e.exception?.values?.forEach((c) => {
      if (c.value) {
        (c.value = bo(c.value, maxValueLength));
      }
    });
  }
}
function _f(e, t) {
  const n = pf(t);
  e.exception?.values?.forEach((r) => {
    r.stacktrace?.frames?.forEach((o) => {
      if (o.filename) {
        (o.debug_id = n[o.filename]);
      }
    });
  });
}
function yf(e) {
  const t = {};

  e.exception?.values?.forEach((r) => {
      r.stacktrace?.frames?.forEach((o) => {
        if (o.debug_id) {
          o.abs_path
              ? (t[o.abs_path] = o.debug_id)
              : o.filename && (t[o.filename] = o.debug_id);

          delete o.debug_id;
        }
      });
    });

  if (Object.keys(t).length === 0) {
    return;
  }

  (e.debug_meta = e.debug_meta || {});
  (e.debug_meta.images = e.debug_meta.images || []);
  const n = e.debug_meta.images;
  Object.entries(t).forEach(([r, o]) => {
    n.push({ type: "sourcemap", code_file: r, debug_id: o });
  });
}
function vf(e, t) {
  if (t.length > 0) {
    (e.sdk = e.sdk || {});
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]);
  }
}
function wf(e, t, n) {
  if (!e) {
    return null;
  }
  const r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(o => ({
        ...o,
        ...(o.data && { data: gt(o.data, t, n) })
      })),
    }),
    ...(e.user && { user: gt(e.user, t, n) }),
    ...(e.contexts && { contexts: gt(e.contexts, t, n) }),
    ...(e.extra && { extra: gt(e.extra, t, n) }),
  };

  if (e.contexts?.trace &&
    r.contexts) {
    (r.contexts.trace = e.contexts.trace);

    e.contexts.trace.data &&
      (r.contexts.trace.data = gt(e.contexts.trace.data, t, n));
  }

  if (e.spans) {
    (r.spans = e.spans.map(o => ({
      ...o,
      ...(o.data && { data: gt(o.data, t, n) })
    })));
  }

  if (e.contexts?.flags &&
    r.contexts) {
    (r.contexts.flags = gt(e.contexts.flags, 3, n));
  }

  return r;
}
function Ef(e, t) {
  if (!t) {
    return e;
  }
  const n = e ? e.clone() : new at();
  n.update(t);
  return n;
}
function Sf(e) {
  if (e) {
    return bf(e) ? { captureContext: e } : Tf(e) ? { captureContext: e } : e;
  }
}
function bf(e) {
  return e instanceof at || typeof e == "function";
}
const Cf = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function Tf(e) {
  return Object.keys(e).some(t => Cf.includes(t));
}
function Oc(e, t) {
  return lt().captureException(e, Sf(t));
}
function xc(e, t) {
  return lt().captureEvent(e, t);
}
function If(e, t) {
  ut().setContext(e, t);
}
function pi(e) {
  ut().setUser(e);
}
function Nf() {
  return ut().lastEventId();
}
function mi(e) {
  const t = ut();
  const { user } = Pc(t, lt());
  const { userAgent } = ie.navigator || {};
  const o = Vu({ user: user, ...(userAgent && { userAgent: userAgent }), ...e });
  const s = t.getSession();

  if (s?.status === "ok") {
    hn(s, { status: "exited" });
  }

  Lc();
  t.setSession(o);
  return o;
}
function Lc() {
  const e = ut();
  const n = lt().getSession() || e.getSession();

  if (n) {
    Wu(n);
  }

  $c();
  e.setSession();
}
function $c() {
  const e = ut();
  const t = Re();
  const n = e.getSession();

  if (n && t) {
    t.captureSession(n);
  }
}
function Jr(e = false) {
  if (e) {
    Lc();
    return;
  }
  $c();
}
const kf = "7";
function Mc(e) {
  const t = e.protocol ? `${e.protocol}:` : "";
  const n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function Rf(e) {
  return `${Mc(e)}${e.projectId}/envelope/`;
}
function Pf(e, t) {
  const n = { sentry_version: kf };

  if (e.publicKey) {
    (n.sentry_key = e.publicKey);
  }

  if (t) {
    (n.sentry_client = `${t.name}/${t.version}`);
  }

  return new URLSearchParams(n).toString();
}
function Af(e, t, n) {
  return t || `${Rf(e)}?${Pf(e, n)}`;
}
function Of(e, t) {
  const n = bc(e);
  if (!n) {
    return "";
  }
  const r = `${Mc(n)}embed/error-page/`;
  let o = `dsn=${Sn(n)}`;
  for (const s in t) {
    if (s !== "dsn" && s !== "onClose") {
      if (s === "user") {
        const t_user = t.user;
        if (!t_user) {
          continue;
        }

        if (t_user.name) {
          (o += `&name=${encodeURIComponent(t_user.name)}`);
        }

        if (t_user.email) {
          (o += `&email=${encodeURIComponent(t_user.email)}`);
        }
      } else {
        o += `&${encodeURIComponent(s)}=${encodeURIComponent(t[s])}`;
      }
    }
  }
  return `${r}?${o}`;
}
const gi = [];
function xf(e) {
  const t = {};

  e.forEach((n) => {
    const { name } = n;
    const t_r = t[r];

    if (!t_r || t_r.isDefaultInstance || !n.isDefaultInstance) {
      (t[r] = n);
    }
  });

  return Object.values(t);
}
function Lf(e) {
  const t = e.defaultIntegrations || [];
  const e_integrations = e.integrations;
  t.forEach((o) => {
    o.isDefaultInstance = true;
  });
  let r;
  if (Array.isArray(e_integrations)) {
    r = [...t, ...e_integrations];
  } else if (typeof e_integrations == "function") {
    const o = e_integrations(t);
    r = Array.isArray(o) ? o : [o];
  } else {
    r = t;
  }
  return xf(r);
}
function $f(e, t) {
  const n = {};

  t.forEach((r) => {
    if (r?.beforeSetup) {
      r.beforeSetup(e);
    }
  });

  t.forEach((r) => {
    if (r) {
      Dc(e, r, n);
    }
  });

  return n;
}
function _i(e, t) {
  for (const n of t) {
    if (n?.afterAllSetup) {
      n.afterAllSetup(e);
    }
  }
}
function Dc(e, t, n) {
  if (n[t.name]) {
    if (K) {
      V.log(`Integration skipped because it was already installed: ${t.name}`);
    }

    return;
  }
  (n[t.name] = t);

  if (!gi.includes(t.name) &&
    typeof t.setupOnce == "function") {
    t.setupOnce();
    gi.push(t.name);
  }

  if (t.setup && typeof t.setup == "function") {
    t.setup(e);
  }

  if (typeof t.preprocessEvent == "function") {
    const r = t.preprocessEvent.bind(t);
    e.on("preprocessEvent", (o, s) => r(o, s, e));
  }

  if (typeof t.processEvent == "function") {
    const r = t.processEvent.bind(t);

    const o = Object.assign((s, i) => r(s, i, e), { id: t.name });

    e.addEventProcessor(o);
  }

  ["processSpan", "processSegmentSpan"].forEach((r) => {
    const t_r = t[r];

    if (typeof t_r == "function") {
      e.on(r, s => t_r.call(t, s, e));
    }
  });

  if (K) {
    V.log(`Integration installed: ${t.name}`);
  }
}
function Mf() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function Df() {
  return "npm";
}
function Uf() {
  return (!Mf() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) ===
    "[object process]");
}
function Uc() {
  return typeof window !== "undefined" && (!Uf() || Ff());
}
function Ff() {
  return ie.process?.type === "renderer";
}
function Bf(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...(Uc() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function Hf(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = Sn(r));
  }

  return bn(s, [Bf(e, o)]);
}
function Po(e, t) {
  const n = t ?? Vf(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();
  const o = Hf(n, r._metadata, r.tunnel, e.getDsn(), r.sendDefaultPii);
  Fc().set(e, []);
  e.emit("flushLogs");
  e.sendEnvelope(o);
}
function Vf(e) {
  return Fc().get(e);
}
function Fc() {
  return vn("clientToLogBufferMap", () => new WeakMap());
}
function Wf(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    {
      version: 2,
      ...(Uc() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function jf(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = Sn(r));
  }

  return bn(s, [Wf(e, o)]);
}
function Bc(e, t) {
  const n = t ?? zf(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();
  const o = jf(n, r._metadata, r.tunnel, e.getDsn(), r.sendDefaultPii);
  Hc().set(e, []);
  e.emit("flushMetrics");
  e.sendEnvelope(o);
}
function zf(e) {
  return Hc().get(e);
}
function Hc() {
  return vn("clientToMetricBufferMap", () => new WeakMap());
}
function Vc(e) {
  if (typeof e == "object" && typeof e.unref == "function") {
    e.unref();
  }

  return e;
}
const ls = Symbol.for("SentryBufferFullError");
function us(e = 100) {
  const t = new Set();
  function n() {
    return t.size < e;
  }
  function r(i) {
    t.delete(i);
  }
  function o(i) {
    if (!n()) {
      return cs(ls);
    }
    const c = i();
    t.add(c);

    c.then(
      () => r(c),
      () => r(c)
    );

    return c;
  }
  function s(i) {
    if (!t.size) {
      return Jn(true);
    }
    const c = Promise.allSettled(Array.from(t)).then(() => true);
    if (!i) {
      return c;
    }
    const l = [c, new Promise(u => Vc(setTimeout(() => u(false), i)))];
    return Promise.race(l);
  }
  return {
    get $() {
      return Array.from(t);
    },
    add: o,
    drain: s,
  };
}
const qf = 60 * 1000/* 1e3 */;
function Gf(e, t = Dr()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) {
    return n * 1000/* 1e3 */;
  }
  const r = Date.parse(`${e}`);
  return isNaN(r) ? qf : r - t;
}
function Yf(e, t) {
  return e[t] || e.all || 0;
}
function Xf(e, t, n = Dr()) {
  return Yf(e, t) > n;
}
function Kf(e, { statusCode: t, headers: n }, r = Dr()) {
  const o = { ...e };
  const s = n?.["x-sentry-rate-limits"];
  const i = n?.["retry-after"];
  if (s) {
    for (const c of s.trim().split(",")) {
      const [l, u, , , f] = c.split(":", 5);
      const d = parseInt(l, 10);
      const p = (isNaN(d) ? 60 : d) * 1000/* 1e3 */;
      if (!u) {
        o.all = r + p;
      } else {
        for (const h of u.split(";")) {
          if (h === "metric_bucket") {
            if ((!f || f.split(";").includes("custom"))) {
              (o[h] = r + p);
            }
          } else {
            (o[h] = r + p);
          }
        }
      }
    }
  } else {
    if (i) {
      (o.all = r + Gf(i, r));
    } else if (t === 429) {
      (o.all = r + 60 * 1000/* 1e3 */);
    }
  }
  return o;
}
const Wc = 64;
function Zf(e, t, n = us(e.bufferSize || Wc)) {
  let r = {};
  const o = i => n.drain(i);
  function s(i) {
    const c = [];

    No(i, (d, p) => {
      const h = ci(p);

      if (Xf(r, h)) {
        e.recordDroppedEvent("ratelimit_backoff", h);
      } else {
        c.push(d);
      }
    });

    if (c.length === 0) {
      return Promise.resolve({});
    }

    const l = bn(i[0], c);

    const u = (d) => {
      if (Kd(l, ["client_report"])) {
        if (K) {
          V.warn(
            `Dropping client report. Will not send outcomes (reason: ${d}).`
          );
        }

        return;
      }
      No(l, (p, h) => {
        e.recordDroppedEvent(d, ci(h));
      });
    };

    const f = () => t({ body: Zd(l) }).then(
      d => d.statusCode === 413
        ? (K &&
            V.error(
              "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
            ),
          u("send_error"),
          d)
        : (K &&
            d.statusCode !== undefined &&
            (d.statusCode < 200 || d.statusCode >= 300) &&
            V.warn(
              `Sentry responded with status code ${d.statusCode} to sent event.`
            ),
          (r = Kf(r, d)),
          d),
      (d) => {
        u("network_error");

        if (K) {
          V.error("Encountered error running transport request:", d);
        }

        throw d;
      }
    );

    return n.add(f).then(
      d => d,
      (d) => {
        if (d === ls) {
          if (K) {
            V.error("Skipped sending event because buffer is full.");
          }

          u("queue_overflow");
          return Promise.resolve({});
        }
        throw d;
      }
    );
  }
  return { send: s, flush: o };
}
function Jf(e, t, n) {
  const r = [
    { type: "client_report" },
    { timestamp: Kn(), discarded_events: e },
  ];
  return bn(t ? { dsn: t } : {}, [r]);
}
function jc(e) {
  const t = [];

  if (e.message) {
    t.push(e.message);
  }

  try {
    const n = e.exception.values[e.exception.values.length - 1];

    if (n?.value) {
      t.push(n.value);
      n.type && t.push(`${n.type}: ${n.value}`);
    }
  } catch {}
  return t;
}
function Qf(e) {
  const {
    trace_id,
    parent_span_id,
    span_id,
    status,
    origin,
    data,
    op: op_1,
  } = e.contexts?.trace ?? {};
  return {
    data: data ?? {},
    description: e.transaction,
    op: op_1,
    parent_span_id: parent_span_id,
    span_id: span_id ?? "",
    start_timestamp: e.start_timestamp ?? 0,
    status: status,
    timestamp: e.timestamp,
    trace_id: trace_id ?? "",
    origin: origin,
    profile_id: data?.[vc],
    exclusive_time: data?.[wc],
    measurements: e.measurements,
    is_segment: true,
  };
}
function eh(e) {
  return {
    type: "transaction",
    timestamp: e.timestamp,
    start_timestamp: e.start_timestamp,
    transaction: e.description,
    contexts: {
      trace: {
        trace_id: e.trace_id,
        span_id: e.span_id,
        parent_span_id: e.parent_span_id,
        op: e.op,
        status: e.status,
        origin: e.origin,
        data: {
          ...e.data,
          ...(e.profile_id && { [vc]: e.profile_id }),
          ...(e.exclusive_time && { [wc]: e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
const yi = "Not capturing exception because it's already been captured.";
const vi = "Discarded session because of missing or non-string release";
const zc = Symbol.for("SentryInternalError");
const qc = Symbol.for("SentryDoNotSendEventError");
const th = 5000/* 5e3 */;
function gr(e) {
  return { message: e, [zc]: true };
}
function Qr(e) {
  return { message: e, [qc]: true };
}
function wi(e) {
  return !!e && typeof e == "object" && zc in e;
}
function Ei(e) {
  return !!e && typeof e == "object" && qc in e;
}
function Si(e, t, n, r, o) {
  let s = 0;
  let i;
  let c = false;

  e.on(n, () => {
    (s = 0);
    clearTimeout(i);
    (c = false);
  });

  e.on(t, (l) => {
    (s += r(l));

    if (s >= 800000/* 8e5 */) {
      o(e);
    } else if (!c) {
      (c = true);

      (i = Vc(
            setTimeout(() => {
              o(e);
            }, th)
          ));
    }
  });

  e.on("flush", () => {
    o(e);
  });
}
class nh {
  constructor(t) {
    (this._options = t);
    (this._integrations = {});
    (this._numProcessing = 0);
    (this._outcomes = {});
    (this._hooks = {});
    (this._eventProcessors = []);
    (this._promiseBuffer = us(t.transportOptions?.bufferSize ?? Wc));

    if (t.dsn) {
      (this._dsn = bc(t.dsn));
    } else if (K) {
      V.warn("No DSN provided, client will not send events.");
    }

    if (this._dsn) {
      const r = Af(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : undefined);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: r,
      });
    }

    (this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs);

    if (this._options.enableLogs) {
      Si(this, "afterCaptureLog", "flushLogs", ih, Po);
    }

    if ((this._options.enableMetrics ??
      this._options._experiments?.enableMetrics ?? true)) {
      Si(this, "afterCaptureMetric", "flushMetrics", sh, Bc);
    }
  }
  captureException(t, n, r) {
    const o = Xe();
    if (Gs(t)) {
      if (K) {
        V.log(yi);
      }

      return o;
    }
    const s = { event_id: o, ...n };

    this._process(
      () => this.eventFromException(t, s)
        .then(i => this._captureEvent(i, s, r))
        .then(i => i),
      "error"
    );

    return s.event_id;
  }
  captureMessage(t, n, r, o) {
    const s = { event_id: Xe(), ...r };
    const i = ts(t) ? t : String(t);
    const c = Lr(t);
    const l = c ? this.eventFromMessage(i, n, s) : this.eventFromException(t, s);

    this._process(
      () => l.then(u => this._captureEvent(u, s, o)),
      c ? "unknown" : "error"
    );

    return s.event_id;
  }
  captureEvent(t, n, r) {
    const o = Xe();
    if (n?.originalException && Gs(n.originalException)) {
      if (K) {
        V.log(yi);
      }

      return o;
    }
    const s = { event_id: o, ...n };

    const {
      capturedSpanScope,
      capturedSpanIsolationScope
    } = t.sdkProcessingMetadata || {};

    const u = bi(t.type);

    this._process(() => this._captureEvent(t, s, capturedSpanScope || r, capturedSpanIsolationScope), u);

    return s.event_id;
  }
  captureSession(t) {
    this.sendSession(t);
    hn(t, { init: false });
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  async flush(t) {
    const n = this._transport;
    this.emit("flush");

    if (!n) {
      return true;
    }

    const r = await this._isClientDoneProcessing(t);
    const o = await n.flush(t);
    return r && o;
  }
  async close(t) {
    Po(this);
    const n = await this.flush(t);
    (this.getOptions().enabled = false);
    this.emit("close");
    return n;
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(t) {
    this._eventProcessors.push(t);
  }
  init() {
    if ((this._isEnabled() || this._options.integrations.some(({ name: t }) => t.startsWith("Spotlight")
    ))) {
      this._setupIntegrations();
    }
  }
  getIntegrationByName(t) {
    return this._integrations[t];
  }
  addIntegration(t) {
    const n = this._integrations[t.name];

    if (!n && t.beforeSetup) {
      t.beforeSetup(this);
    }

    Dc(this, t, this._integrations);

    if (!n) {
      _i(this, [t]);
    }
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    let r = of(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const o of n.attachments || []) {
      r = Xd(r, Qd(o));
    }
    this.sendEnvelope(r).then(o => this.emit("afterSendEvent", t, o));
  }
  sendSession(t) {
    const { release, environment = as } = this._options;
    if ("aggregates" in t) {
      const s = t.attrs || {};
      if (!s.release && !release) {
        if (K) {
          V.warn(vi);
        }

        return;
      }
      (s.release = s.release || release);
      (s.environment = s.environment || environment);
      (t.attrs = s);
    } else {
      if (!t.release && !release) {
        if (K) {
          V.warn(vi);
        }

        return;
      }
      (t.release = t.release || release);
      (t.environment = t.environment || environment);
    }
    this.emit("beforeSendSession", t);
    const o = rf(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(o);
  }
  recordDroppedEvent(t, n, r = 1) {
    if (this._options.sendClientReports) {
      const o = `${t}:${n}`;

      if (K) {
        V.log(`Recording outcome: "${o}"${r > 1 ? ` (${r} times)` : ""}`);
      }

      (this._outcomes[o] = (this._outcomes[o] || 0) + r);
    }
  }
  on(t, n) {
    const r = (this._hooks[t] = this._hooks[t] || new Set());

    const o = (...s) => n(...s);

    r.add(o);

    return () => {
      r.delete(o);
    };
  }
  emit(t, ...n) {
    const r = this._hooks[t];

    if (r) {
      r.forEach(o => o(...n));
    }
  }
  async sendEnvelope(t) {
    this.emit("beforeEnvelope", t);

    if (this._isEnabled() && this._transport) {
      try {
        return await this._transport.send(t);
      } catch (n) {
        if (K) {
          V.error("Error while sending envelope:", n);
        }

        return {};
      }
    }

    if (K) {
      V.error("Transport disabled");
    }

    return {};
  }
  registerCleanup(t) {}
  dispose() {}
  _setupIntegrations() {
    const { integrations } = this._options;
    (this._integrations = $f(this, integrations));
    _i(this, integrations);
  }
  _updateSessionFromEvent(t, n) {
    let r = n.level === "fatal";
    let o = false;
    const s = n.exception?.values;
    if (s) {
      (o = true);
      (r = false);
      for (const l of s) {
        if (l.mechanism?.handled === false) {
          r = true;
          break;
        }
      }
    }
    const i = t.status === "ok";

    if (((i && t.errors === 0) || (i && r))) {
      hn(t, {
          ...(r && { status: "crashed" }),
          errors: t.errors || Number(o || r),
        });

      this.captureSession(t);
    }
  }
  async _isClientDoneProcessing(t) {
    let n = 0;

    while (!t || n < t) {
      await new Promise(r => setTimeout(r, 1));

      if (!this._numProcessing) {
        return true;
      }

      n++;
    }

    return false;
  }
  _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== undefined;
  }
  _prepareEvent(t, n, r, o) {
    const s = this.getOptions();
    const i = Object.keys(this._integrations);

    if (!n.integrations && i?.length) {
      (n.integrations = i);
    }

    this.emit("preprocessEvent", t, n);

    if (!t.type) {
      o.setLastEventId(t.event_id || n.event_id);
    }

    return mf(s, t, n, r, this, o).then((c) => {
      if (c === null) {
        return c;
      }
      this.emit("postprocessEvent", c, n);

      (c.contexts = {
          trace: { ...c.contexts?.trace, ...td(r) },
          ...c.contexts,
        });

      const l = Dd(this, r);

      (c.sdkProcessingMetadata = {
        dynamicSamplingContext: l,
        ...c.sdkProcessingMetadata,
      });

      return c;
    });
  }
  _captureEvent(t, n = {}, r = lt(), o = ut()) {
    if (K &&
      Ao(t)) {
      V.log(`Captured error event \`${jc(t)[0] || "<unknown>"}\``);
    }

    return this._processEvent(t, n, r, o).then(
      s => s.event_id,
      (s) => {
        if (K) {
          if (Ei(s)) {
            V.log(s.message);
          } else if (wi(s)) {
            V.warn(s.message);
          } else {
            V.warn(s);
          }
        }
      }
    );
  }
  _processEvent(t, n, r, o) {
    const s = this.getOptions();
    const { sampleRate } = s;
    const c = Gc(t);
    const l = Ao(t);
    const f = `before send for type \`${t.type || "error"}\``;
    const d = typeof sampleRate === "undefined" ? undefined : Sd(sampleRate);
    if (l && typeof d == "number" && Cr() > d) {
      this.recordDroppedEvent("sample_rate", "error");

      return cs(
        Qr(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        )
      );
    }
    const p = bi(t.type);
    return this._prepareEvent(t, n, r, o)
      .then((h) => {
        if (h === null) {
          this.recordDroppedEvent("event_processor", p);
          throw Qr("An event processor returned `null`, will not send event.");
        }
        if (n.data?.__sentry__ === true) {
          return h;
        }
        const _ = oh(this, s, h, n);
        return rh(_, f);
      })
      .then((h) => {
      if (h === null) {
        this.recordDroppedEvent("before_send", p);

        if (c) {
          const g = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", g);
        }

        throw Qr(`${f} returned \`null\`, will not send event.`);
      }
      const m = r.getSession() || o.getSession();

      if (l && m) {
        this._updateSessionFromEvent(m, h);
      }

      if (c) {
        const b = h.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const g = h.spans ? h.spans.length : 0;
        const y = b - g;

        if (y > 0) {
          this.recordDroppedEvent("before_send", "span", y);
        }
      }

      const h_transaction_info = h.transaction_info;
      if (c && h_transaction_info && h.transaction !== t.transaction) {
        const b = "custom";
        h.transaction_info = { ...h_transaction_info, source: b };
      }
      this.sendEvent(h, n);
      return h;
    })
      .then(null, (h) => {
        throw Ei(h) || wi(h)
          ? h
          : (this.captureException(h, {
              mechanism: { handled: false, type: "internal" },
              data: { __sentry__: true },
              originalException: h,
            }),
            gr(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${h}`));
      });
  }
  _process(t, n) {
    this._numProcessing++;

    this._promiseBuffer.add(t).then(
      r => {
        this._numProcessing--;
        return r;
      },
      r => {
        this._numProcessing--;

        if (r === ls) {
          this.recordDroppedEvent("queue_overflow", n);
        }

        return r;
      }
    );
  }
  _clearOutcomes() {
    const t = this._outcomes;
    (this._outcomes = {});

    return Object.entries(t).map(([n, r]) => {
      const [o, s] = n.split(":");
      return { reason: o, category: s, quantity: r };
    });
  }
  _flushOutcomes() {
    if (K) {
      V.log("Flushing outcomes...");
    }

    const t = this._clearOutcomes();
    if (t.length === 0) {
      if (K) {
        V.log("No outcomes to send");
      }

      return;
    }
    if (!this._dsn) {
      if (K) {
        V.log("No dsn provided, will not send outcomes");
      }

      return;
    }

    if (K) {
      V.log("Sending outcomes:", t);
    }

    const n = Jf(t, this._options.tunnel && Sn(this._dsn));
    this.sendEnvelope(n);
  }
}
function bi(e) {
  return e === "replay_event" ? "replay" : e || "error";
}
function rh(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (Xn(e)) {
    return e.then(
      (r) => {
        if (!Vn(r) && r !== null) {
          throw gr(n);
        }
        return r;
      },
      (r) => {
        throw gr(`${t} rejected with ${r}`);
      }
    );
  }
  if (!Vn(e) && e !== null) {
    throw gr(n);
  }
  return e;
}
function oh(e, t, n, r) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = t;
  const c = !Fd(t.beforeSendSpan) && t.beforeSendSpan;
  let l = n;
  if (Ao(l) && beforeSend) {
    return beforeSend(l, r);
  }
  if (Gc(l)) {
    if (c || ignoreSpans) {
      const u = Qf(l);
      if (ignoreSpans?.length &&
      ai({ description: u.description, op: u.op, attributes: u.data }, ignoreSpans)) {
        return null;
      }
      if (c) {
        const f = c(u);

        if (f) {
          (l = Zn(n, eh(f)));
        } else {
          si();
        }
      }
      if (l.spans) {
        const f = [];
        const l_spans = l.spans;
        for (const h of l_spans) {
          if (
            ignoreSpans?.length &&
            ai({ description: h.description, op: h.op, attributes: h.data }, ignoreSpans)
          ) {
            Ld(l_spans, h);
            continue;
          }
          if (c) {
            const m = c(h);

            if (m) {
              f.push(m);
            } else {
              si();
              f.push(h);
            }
          } else {
            f.push(h);
          }
        }
        const p = l.spans.length - f.length;

        if (p) {
          e.recordDroppedEvent("before_send", "span", p);
        }

        (l.spans = f);
      }
    }
    if (beforeSendTransaction) {
      if (l.spans) {
        const u = l.spans.length;
        l.sdkProcessingMetadata = {
          ...n.sdkProcessingMetadata,
          spanCountBeforeProcessing: u,
        };
      }
      return beforeSendTransaction(l, r);
    }
  }
  return l;
}
function Ao(e) {
  return e.type === undefined;
}
function Gc(e) {
  return e.type === "transaction";
}
function sh(e) {
  let t = 0;

  if (e.name) {
    (t += e.name.length * 2);
  }

  (t += 8);
  return t + Yc(e.attributes);
}
function ih(e) {
  let t = 0;

  if (e.message) {
    (t += e.message.length * 2);
  }

  return t + Yc(e.attributes);
}
function Yc(e) {
  if (!e) {
    return 0;
  }
  let t = 0;

  Object.values(e).forEach((n) => {
    if (Array.isArray(n)) {
      (t += n.length * Ci(n[0]));
    } else if (Lr(n)) {
      (t += Ci(n));
    } else {
      (t += 100);
    }
  });

  return t;
}
function Ci(e) {
  return typeof e == "string"
    ? e.length * 2
    : typeof e == "number"
    ? 8
    : typeof e == "boolean"
    ? 4
    : 0;
}
function ah(e) {
  return (
    Yn(e) &&
    "__sentry_fetch_url_host__" in e &&
    typeof e.__sentry_fetch_url_host__ == "string"
  );
}
function Ti(e) {
  return ah(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
}
function ch(e, t) {
  if (t.debug === true) {
    if (K) {
      V.enable();
    } else {
      wn(() => {
              console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              );
            });
    }
  }

  lt().update(t.initialScope);
  const r = new e(t);
  lh(r);
  r.init();
  return r;
}
function lh(e) {
  lt().setClient(e);
}
function uh(e) {
  if ("aggregates" in e) {
    if (e.attrs?.ip_address === undefined) {
      (e.attrs = { ...e.attrs, ip_address: "{{auto}}" });
    }
  } else if (e.ipAddress === undefined) {
    (e.ipAddress = "{{auto}}");
  }
}
function Xc(e, t, n = [t], r = "npm") {
  const o = ((e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {});

  if (!o.name) {
    (o.name = `sentry.javascript.${t}`);

    (o.packages = n.map(s => ({
      name: `${r}:@sentry/${s}`,
      version: Kt
    })));

    (o.version = Kt);
  }
}
const dh = 100;
function Qt(e, t) {
  const n = Re();
  const r = ut();
  if (!n) {
    return;
  }
  const { beforeBreadcrumb = null, maxBreadcrumbs = dh } = n.getOptions();
  if (maxBreadcrumbs <= 0) {
    return;
  }
  const c = { timestamp: Kn(), ...e };

  const l = beforeBreadcrumb ? wn(() => beforeBreadcrumb(c, t)) : c;

  if (l !== null) {
    n.emit && n.emit("beforeAddBreadcrumb", l, t);
    r.addBreadcrumb(l, maxBreadcrumbs);
  }
}
let Ii;
const fh = "FunctionToString";
const Ni = new WeakMap();

const ph = () => ({
  name: fh,

  setupOnce() {
    Ii = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...e) {
        const t = os(this);
        const n = Ni.has(Re()) && t !== undefined ? t : this;
        return Ii.apply(n, e);
      };
    } catch {}
  },

  setup(e) {
    Ni.set(e, true);
  }
});

const mh = [
  /^Script error\.?$/,
  /^Javascript error: Script error\.? on line 0$/,
  /^ResizeObserver loop completed with undelivered notifications.$/,
  /^Cannot redefine property: googletag$/,
  /^Can't find variable: gmo$/,
  /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
  /can't redefine non-configurable property "solana"/,
  /vv\(\)\.getRestrictions is not a function/,
  /Can't find variable: _AutofillCallbackHandler/,
  /Object Not Found Matching Id:\d+, MethodName:simulateEvent/,
  /^Java exception was raised during method invocation$/,
];

const gh = "EventFilters";

const _h = (e = {}) => {
  let t;
  return {
    name: gh,
    setup(n) {
      const r = n.getOptions();
      t = ki(e, r);
    },
    processEvent(n, r, o) {
      if (!t) {
        const s = o.getOptions();
        t = ki(e, s);
      }
      return vh(n, t) ? null : n;
    },
  };
};

const yh = (e = {}) => ({
  ..._h(e),
  name: "InboundFilters"
});

function ki(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : mh),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function vh(e, t) {
  if (e.type) {
    if (e.type === "transaction" && Eh(e, t.ignoreTransactions)) {
      if (K) {
        V.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${qt(e)}`);
      }

      return true;
    }
  } else {
    if (wh(e, t.ignoreErrors)) {
      if (K) {
        V.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${qt(e)}`);
      }

      return true;
    }
    if (Th(e)) {
      if (K) {
        V.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${qt(e)}`);
      }

      return true;
    }
    if (Sh(e, t.denyUrls)) {
      if (K) {
        V.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${qt(e)}.
Url: ${Tr(e)}`);
      }

      return true;
    }
    if (!bh(e, t.allowUrls)) {
      if (K) {
        V.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${qt(e)}.
Url: ${Tr(e)}`);
      }

      return true;
    }
  }
  return false;
}
function wh(e, t) {
  return t?.length ? jc(e).some(n => Ur(n, t)) : false;
}
function Eh(e, t) {
  if (!t?.length) {
    return false;
  }
  const e_transaction = e.transaction;
  return e_transaction ? Ur(e_transaction, t) : false;
}
function Sh(e, t) {
  if (!t?.length) {
    return false;
  }
  const n = Tr(e);
  return n ? Ur(n, t) : false;
}
function bh(e, t) {
  if (!t?.length) {
    return true;
  }
  const n = Tr(e);
  return n ? Ur(n, t) : true;
}
function Ch(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const e_t = e[t];
    if (e_t && e_t.filename !== "<anonymous>" && e_t.filename !== "[native code]") {
      return e_t.filename || null;
    }
  }
  return null;
}
function Tr(e) {
  try {
    const n = [...(e.exception?.values ?? [])]
      .reverse()
      .find(
        r => r.mechanism?.parent_id === undefined && r.stacktrace?.frames?.length
      )?.stacktrace?.frames;
    return n ? Ch(n) : null;
  } catch {
    if (K) {
      V.error(`Cannot extract url for event ${qt(e)}`);
    }

    return null;
  }
}
function Th(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          t => t.stacktrace || (t.type && t.type !== "Error") || t.value
        )
    : false;
}
function Ih(e, t, n, r, o, s) {
  if (!o.exception?.values || !s || !Ot(s.originalException, Error)) {
    return;
  }
  const i =
    o.exception.values.length > 0
      ? o.exception.values[o.exception.values.length - 1]
      : undefined;

  if (i) {
    (o.exception.values = Oo(
        e,
        t,
        r,
        s.originalException,
        n,
        o.exception.values,
        i,
        0
      ));
  }
}
function Oo(e, t, n, r, o, s, i, c) {
  if (s.length >= n + 1) {
    return s;
  }
  let l = [...s];
  if (Ot(r[o], Error)) {
    Ri(i, c, r);
    const u = e(t, r[o]);
    const l_length = l.length;
    Pi(u, o, l_length, c);
    (l = Oo(e, t, n, r[o], o, [u, ...l], u, l_length));
  }

  if (Kc(r)) {
    r.errors.forEach((u, f) => {
      if (Ot(u, Error)) {
        Ri(i, c, r);
        const d = e(t, u);
        const l_length = l.length;
        Pi(d, `errors[${f}]`, l_length, c);
        (l = Oo(e, t, n, u, o, [d, ...l], d, l_length));
      }
    });
  }

  return l;
}
function Kc(e) {
  return Array.isArray(e.errors);
}
function Ri(e, t, n) {
  e.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...(Kc(n) && { is_exception_group: true }),
    ...e.mechanism,
    exception_id: t,
  };
}
function Pi(e, t, n, r) {
  e.mechanism = {
    handled: true,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: r,
  };
}
function Nh(e) {
  const t = "console";
  const n = en(t, e);
  tn(t, kh);
  return n;
}
function kh() {
  if ("console" in ie) {
    _u.forEach(e => {
      if (e in ie.console) {
        je(ie.console, e, t => {
          (br[e] = t);

          return (...n) => {
            et("console", { args: n, level: e });
            br[e]?.apply(ie.console, n);
          };
        });
      }
    });
  }
}
function Rh(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
    ? e
    : "log";
}
const Ph = "Dedupe";

const Oh = () => {
  let e;
  return {
    name: Ph,
    processEvent(t) {
      if (t.type) {
        return t;
      }
      try {
        if (xh(t, e)) {
          if (K) {
            V.warn(
              "Event dropped due to being a duplicate of previously captured event."
            );
          }

          return null;
        }
      } catch {}
      return (e = t);
    },
  };
};

function xh(e, t) {
  return t ? !!(Lh(e, t) || $h(e, t)) : false;
}
function Lh(e, t) {
  const e_message = e.message;
  const t_message = t.message;
  return !(
    (!e_message && !t_message) ||
    (e_message && !t_message) ||
    (!e_message && t_message) ||
    e_message !== t_message ||
    !Jc(e, t) ||
    !Zc(e, t)
  );
}
function $h(e, t) {
  const n = Ai(t);
  const r = Ai(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !Jc(e, t) ||
    !Zc(e, t)
  );
}
function Zc(e, t) {
  let n = Hs(e);
  let r = Hs(t);
  if (!n && !r) {
    return true;
  }
  if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length)) {
    return false;
  }
  for (let o = 0; o < r.length; o++) {
    const r_o = r[o];
    const n_o = n[o];
    if (r_o.filename !== n_o.filename ||
    r_o.lineno !== n_o.lineno ||
    r_o.colno !== n_o.colno ||
    r_o.function !== n_o.function) {
      return false;
    }
  }
  return true;
}
function Jc(e, t) {
  let e_fingerprint = e.fingerprint;
  let t_fingerprint = t.fingerprint;
  if (!e_fingerprint && !t_fingerprint) {
    return true;
  }
  if ((e_fingerprint && !t_fingerprint) || (!e_fingerprint && t_fingerprint)) {
    return false;
  }
  (e_fingerprint = e_fingerprint);
  (t_fingerprint = t_fingerprint);
  try {
    return e_fingerprint.join("") === t_fingerprint.join("");
  } catch {
    return false;
  }
}
function Ai(e) {
  return e.exception?.values?.[0];
}
const Mh = "ConversationId";

const Uh = () => ({
  name: Mh,

  setup(e) {
    e.on("spanStart", (t) => {
      const n = lt().getScopeData();
      const r = ut().getScopeData();
      const o = n.conversationId || r.conversationId;
      if (o) {
        const { op: op_1, data, description } = Fr(t);
        if (!op_1?.startsWith("gen_ai.") &&
        !data["ai.operationId"] &&
        !description?.startsWith("ai.")) {
          return;
        }
        t.setAttribute(ad, o);
      }
    });
  }
});

function Qc(e) {
  if (e !== undefined) {
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : undefined;
  }
}
const jn = ie;
function Fh() {
  return "history" in jn && !!jn.history;
}
function Bh() {
  if (!("fetch" in jn)) {
    return false;
  }
  try {
    new Headers();
    new Request("data:,");
    new Response();
    return true;
  } catch {
    return false;
  }
}
function xo(e) {
  return (e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString()));
}
function Hh() {
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!Bh()) {
    return false;
  }
  if (xo(jn.fetch)) {
    return true;
  }
  let e = false;
  const jn_document = jn.document;
  if (jn_document && typeof jn_document.createElement == "function") {
    try {
      const n = jn_document.createElement("iframe");
      (n.hidden = true);
      jn_document.head.appendChild(n);

      if (n.contentWindow?.fetch) {
        (e = xo(n.contentWindow.fetch));
      }

      jn_document.head.removeChild(n);
    } catch (n) {
      if (K) {
        V.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
      }
    }
  }
  return e;
}
function Vh(e, t) {
  const n = "fetch";
  const r = en(n, e);

  tn(n, () => Wh(undefined, t));

  return r;
}
function Wh(e, t = false) {
  if (!t || Hh()) {
    je(ie, "fetch", n => (...r) => {
      const o = new Error();
      const { method, url } = jh(r);

      const c = {
        args: r,
        fetchData: { method: method, url: url },
        startTimestamp: Et() * 1000/* 1e3 */,
        virtualError: o,
        headers: zh(r),
      };

      et("fetch", { ...c });

      return n.apply(ie, r).then(
        async l => {
          et("fetch", { ...c, endTimestamp: Et() * 1000/* 1e3 */, response: l });
          return l;
        },
        (l) => {
          et("fetch", { ...c, endTimestamp: Et() * 1000/* 1e3 */, error: l });

          if (Yn(l) &&
            l.stack === undefined) {
            (l.stack = o.stack);
            xt(l, "framesToPop", 1);
          }

          const f =
            Re()?.getOptions().enhanceFetchErrorMessages ?? "always";
          if (f !== false &&
          l instanceof TypeError &&
          (l.message === "Failed to fetch" ||
            l.message === "Load failed" ||
            l.message ===
              "NetworkError when attempting to fetch resource.")) {
            try {
              const h = new URL(c.fetchData.url).host;

              if (f === "always") {
                (l.message = `${l.message} (${h})`);
              } else {
                xt(l, "__sentry_fetch_url_host__", h);
              }
            } catch {}
          }
          throw l;
        }
      );
    });
  }
}
function _r(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function Oi(e) {
  return typeof e == "string"
    ? e
    : e
    ? _r(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function jh(e) {
  if (e.length === 0) {
    return { method: "GET", url: "" };
  }
  if (e.length === 2) {
    const [n, r] = e;
    return {
      url: Oi(n),
      method: _r(r, "method")
        ? String(r.method).toUpperCase()
        : dc(n) && _r(n, "method")
        ? String(n.method).toUpperCase()
        : "GET",
    };
  }
  const [t] = e;
  return {
    url: Oi(t),
    method: _r(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function zh(e) {
  const [t, n] = e;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (dc(t)) {
      return new Headers(t.headers);
    }
  } catch {}
}
const ue = ie;
let Lo = 0;
function el() {
  return Lo > 0;
}
function qh() {
  Lo++;

  setTimeout(() => {
    Lo--;
  });
}
function mn(e, t = {}) {
  function n(o) {
    return typeof o == "function";
  }
  if (!n(e)) {
    return e;
  }
  try {
    const e_sentry_wrapped = e.__sentry_wrapped__;
    if (e_sentry_wrapped) {
      return typeof e_sentry_wrapped == "function" ? e_sentry_wrapped : e;
    }
    if (os(e)) {
      return e;
    }
  } catch {
    return e;
  }
  const r = function (...o) {
    try {
      const s = o.map(i => mn(i, t));
      return e.apply(this, s);
    } catch (s) {
      qh();

      is((i) => {
        i.addEventProcessor(
          c => {
            if (t.mechanism) {
              Co(c, undefined);
              fn(c, t.mechanism);
            }

            (c.extra = { ...c.extra, arguments: o });
            return c;
          }
        );

        Oc(s);
      });

      throw s;
    }
  };
  try {
    for (const o in e) {
      if (Object.prototype.hasOwnProperty.call(e, o)) {
        (r[o] = e[o]);
      }
    }
  } catch {}
  hc(r, e);
  xt(e, "__sentry_wrapped__", r);
  try {
    if (Object.getOwnPropertyDescriptor(r, "name").configurable) {
      Object.defineProperty(r, "name", {
        get() {
          return e.name;
        },
      });
    }
  } catch {}
  return r;
}
function xi() {
  const e = rs();
  const { referrer } = ue.document || {};
  const { userAgent } = ue.navigator || {};
  const r = { ...(referrer && { Referer: referrer }), ...(userAgent && { "User-Agent": userAgent }) };
  return { url: e, headers: r };
}
function ds(e, t) {
  const n = fs(e, t);
  const r = { type: Zh(t), value: Jh(t) };

  if (n.length) {
    (r.stacktrace = { frames: n });
  }

  if (r.type === undefined &&
    r.value === "") {
    (r.value = "Unrecoverable error caught");
  }

  return r;
}
function Gh(e, t, n, r) {
  const s = Re()?.getOptions().normalizeDepth;
  const i = rp(t);
  const c = { __serialized__: Nc(t, s) };
  if (i) {
    return { exception: { values: [ds(e, i)] }, extra: c };
  }
  const l = {
    exception: {
      values: [
        {
          type: $r(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
          value: tp(t, { isUnhandledRejection: r }),
        },
      ],
    },
    extra: c,
  };
  if (n) {
    const u = fs(e, n);

    if (u.length) {
      (l.exception.values[0].stacktrace = { frames: u });
    }
  }
  return l;
}
function eo(e, t) {
  return { exception: { values: [ds(e, t)] } };
}
function fs(e, t) {
  const n = t.stacktrace || t.stack || "";
  const r = Xh(t);
  const o = Kh(t);
  try {
    return e(n, r, o);
  } catch {}
  return [];
}
const Yh = /Minified React error #\d+;/i;
function Xh(e) {
  return e && Yh.test(e.message) ? 1 : 0;
}
function Kh(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function tl(e) {
  return typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined"
    ? e instanceof WebAssembly.Exception
    : false;
}
function Zh(e) {
  const t = e?.name;
  return !t && tl(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function Jh(e) {
  const t = e?.message;
  return tl(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : "wasm exception"
    : t
    ? t.error && typeof t.error.message == "string"
      ? Ti(t.error)
      : Ti(e)
    : "No error message";
}
function Qh(e, t, n, r) {
  const o = n?.syntheticException || undefined;
  const s = hs(e, t, o, r);
  fn(s);
  (s.level = "error");

  if (n?.event_id) {
    (s.event_id = n.event_id);
  }

  return Jn(s);
}
function ep(e, t, n = "info", r, o) {
  const s = r?.syntheticException || undefined;
  const i = $o(e, t, s, o);
  (i.level = n);

  if (r?.event_id) {
    (i.event_id = r.event_id);
  }

  return Jn(i);
}
function hs(e, t, n, r, o) {
  let s;
  if (lc(t) && t.error) {
    return eo(e, t.error);
  }
  if (Ws(t) || Pu(t)) {
    const i = t;
    if ("stack" in t) {
      s = eo(e, t);
    } else {
      const c = i.name || (Ws(i) ? "DOMError" : "DOMException");
      const l = i.message ? `${c}: ${i.message}` : c;
      (s = $o(e, l, n, r));
      Co(s, l);
    }

    if ("code" in i) {
      (s.tags = { ...s.tags, "DOMException.code": `${i.code}` });
    }

    return s;
  }

  if (Yn(t)) {
    return eo(e, t);
  }

  if (Vn(t) || $r(t)) {
    (s = Gh(e, t, n, o));
    fn(s, { synthetic: true });
    return s;
  }

  (s = $o(e, t, n, r));
  Co(s, `${t}`);
  fn(s, { synthetic: true });
  return s;
}
function $o(e, t, n, r) {
  const o = {};
  if (r && n) {
    const s = fs(e, n);

    if (s.length) {
      (o.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
    }

    fn(o, { synthetic: true });
  }
  if (ts(t)) {
    const { __sentry_template_string__, __sentry_template_values__ } = t;
    (o.logentry = { message: __sentry_template_string__, params: __sentry_template_values__ });
    return o;
  }
  (o.message = t);
  return o;
}
function tp(e, { isUnhandledRejection: t }) {
  const n = Du(e);
  const r = t ? "promise rejection" : "exception";
  return lc(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : $r(e)
    ? `Event \`${np(e)}\` (type=${e.type}) captured as ${r}`
    : `Object captured as ${r} with keys: ${n}`;
}
function np(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : undefined;
  } catch {}
}
function rp(e) {
  return Object.values(e).find(t => t instanceof Error);
}
class op extends nh {
  constructor(t) {
    const n = sp(t);
    const r = ue.SENTRY_SDK_SOURCE || Df();
    Xc(n, "browser", ["browser"], r);

    if (n._metadata?.sdk) {
      (n._metadata.sdk.settings = {
          infer_ip: n.sendDefaultPii ? "auto" : "never",
          ...n._metadata.sdk.settings,
        });
    }

    super(n);

    const {
        sendDefaultPii,
        sendClientReports,
        enableLogs,
        _experiments,
        enableMetrics,
      } = this._options;

    const u = enableMetrics ?? _experiments?.enableMetrics ?? true;

    if (ue.document &&
      (sendClientReports || enableLogs || u)) {
      ue.document.addEventListener("visibilitychange", () => {
        if (ue.document.visibilityState === "hidden") {
          sendClientReports && this._flushOutcomes();
          enableLogs && Po(this);
          u && Bc(this);
        }
      });
    }

    if (sendDefaultPii) {
      this.on("beforeSendSession", uh);
    }
  }
  eventFromException(t, n) {
    return Qh(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", r) {
    return ep(
      this._options.stackParser,
      t,
      n,
      r,
      this._options.attachStacktrace
    );
  }
  _prepareEvent(t, n, r, o) {
    (t.platform = t.platform || "javascript");
    return super._prepareEvent(t, n, r, o);
  }
}
function sp(e) {
  return {
    release:
      typeof __SENTRY_RELEASE__ == "string"
        ? __SENTRY_RELEASE__
        : ue.SENTRY_RELEASE?.id,
    sendClientReports: true,
    parentSpanIsAlwaysRootSpan: true,
    ...e,
  };
}
const ip = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Ue = ie;
const ap = 1000/* 1e3 */;
let Li;
let Mo;
let Do;
function cp(e) {
  en("dom", e);
  tn("dom", lp);
}
function lp() {
  if (!Ue.document) {
    return;
  }
  const e = et.bind(null, "dom");
  const t = $i(e, true);
  Ue.document.addEventListener("click", t, false);
  Ue.document.addEventListener("keypress", t, false);

  ["EventTarget", "Node"].forEach((n) => {
    const o = Ue[n]?.prototype;

    if (o?.hasOwnProperty?.("addEventListener")) {
      je(o, "addEventListener", s => (function(i, c, l) {
        if (i === "click" || i == "keypress") {
          try {
            const u = (this.__sentry_instrumentation_handlers__ =
                this.__sentry_instrumentation_handlers__ || {});

            const f = (u[i] = u[i] || { refCount: 0 });
            if (!f.handler) {
              const d = $i(e);
              (f.handler = d);
              s.call(this, i, d, l);
            }
            f.refCount++;
          } catch {}
        }
        return s.call(this, i, c, l);
      }));

      je(o, "removeEventListener", s => (function(i, c, l) {
        if (i === "click" || i == "keypress") {
          try {
            const u = this.__sentry_instrumentation_handlers__ || {};
            const u_i = u[i];

            if (u_i) {
              u_i.refCount--;

              u_i.refCount <= 0 &&
                (s.call(this, i, u_i.handler, l),
                (u_i.handler = undefined),
                delete u[i]);

              Object.keys(u).length === 0 &&
                delete this.__sentry_instrumentation_handlers__;
            }
          } catch {}
        }
        return s.call(this, i, c, l);
      }));
    }
  });
}
function up(e) {
  if (e.type !== Mo) {
    return false;
  }
  try {
    if (!e.target || e.target._sentryId !== Do) {
      return false;
    }
  } catch {}
  return true;
}
function dp(e, t) {
  return e !== "keypress"
    ? false
    : t?.tagName
    ? !(
        t.tagName === "INPUT" ||
        t.tagName === "TEXTAREA" ||
        t.isContentEditable
      )
    : true;
}
function $i(e, t = false) {
  return (n) => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const r = fp(n);
    if (dp(n.type, r)) {
      return;
    }
    xt(n, "_sentryCaptured", true);

    if (r && !r._sentryId) {
      xt(r, "_sentryId", Xe());
    }

    const o = n.type === "keypress" ? "input" : n.type;

    if (!up(n)) {
      e({ event: n, name: o, global: t });
      (Mo = n.type);
      (Do = r ? r._sentryId : undefined);
    }

    clearTimeout(Li);

    (Li = Ue.setTimeout(() => {
      (Do = undefined);
      (Mo = undefined);
    }, ap));
  };
}
function fp(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let or;
function nl(e) {
  const t = "history";
  en(t, e);
  tn(t, hp);
}
function hp() {
  Ue.addEventListener("popstate", () => {
    const t = Ue.location.href;
    const n = or;
    (or = t);

    if (n === t) {
      return;
    }

    et("history", { from: n, to: t });
  });

  if (!Fh()) {
    return;
  }

  function e(t) {
    return function (...n) {
      const r = n.length > 2 ? n[2] : undefined;
      if (r) {
        const o = or;
        const s = pp(String(r));
        (or = s);

        if (o === s) {
          return t.apply(this, n);
        }

        et("history", { from: o, to: s });
      }
      return t.apply(this, n);
    };
  }
  je(Ue.history, "pushState", e);
  je(Ue.history, "replaceState", e);
}
function pp(e) {
  try {
    return new URL(e, Ue.location.origin).toString();
  } catch {
    return e;
  }
}
const yr = {};
function mp(e) {
  const yr_e = yr[e];
  if (yr_e) {
    return yr_e;
  }
  let n = Ue[e];
  if (xo(n)) {
    return (yr[e] = n.bind(Ue));
  }
  const {
    document
  } = Ue;
  if (document && typeof document.createElement == "function") {
    try {
      const o = document.createElement("iframe");
      (o.hidden = true);
      document.head.appendChild(o);
      const o_contentWindow = o.contentWindow;

      if (o_contentWindow?.[e]) {
        (n = o_contentWindow[e]);
      }

      document.head.removeChild(o);
    } catch (o) {
      if (ip) {
        V.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          o
        );
      }
    }
  }
  return n && (yr[e] = n.bind(Ue));
}
function gp(e) {
  yr[e] = undefined;
}
const On = "__sentry_xhr_v3__";
function _p(e) {
  en("xhr", e);
  tn("xhr", yp);
}
function yp() {
  if (!Ue.XMLHttpRequest) {
    return;
  }
  const XMLHttpRequest_prototype = XMLHttpRequest.prototype;

  (XMLHttpRequest_prototype.open = new Proxy(XMLHttpRequest_prototype.open, {
    apply(t, n, r) {
      const o = new Error();
      const s = Et() * 1000/* 1e3 */;
      const i = wt(r[0]) ? r[0].toUpperCase() : undefined;
      const c = vp(r[1]);
      if (!i || !c) {
        return t.apply(n, r);
      }
      (n[On] = { method: i, url: c, request_headers: {} });

      if (i === "POST" &&
        c.match(/sentry_key/)) {
        (n.__sentry_own_request__ = true);
      }

      const l = () => {
        const n_On = n[On];
        if (n_On && n.readyState === 4) {
          try {
            n_On.status_code = n.status;
          } catch {}
          const f = {
            endTimestamp: Et() * 1000/* 1e3 */,
            startTimestamp: s,
            xhr: n,
            virtualError: o,
          };
          et("xhr", f);
        }
      };

      if ("onreadystatechange" in n && typeof n.onreadystatechange == "function") {
        (n.onreadystatechange = new Proxy(n.onreadystatechange, {
              apply(u, f, d) {
                l();
                return u.apply(f, d);
              },
            }));
      } else {
        n.addEventListener("readystatechange", l);
      }

      (n.setRequestHeader = new Proxy(n.setRequestHeader, {
        apply(u, f, d) {
          const [p, h] = d;
          const f_On = f[On];

          if (f_On && wt(p) && wt(h)) {
            (f_On.request_headers[p.toLowerCase()] = h);
          }

          return u.apply(f, d);
        },
      }));

      return t.apply(n, r);
    },
  }));

  (XMLHttpRequest_prototype.send = new Proxy(XMLHttpRequest_prototype.send, {
      apply(t, n, r) {
        const n_On = n[On];
        if (!n_On) {
          return t.apply(n, r);
        }

        if (r[0] !== undefined) {
          (n_On.body = r[0]);
        }

        const s = { startTimestamp: Et() * 1000/* 1e3 */, xhr: n };
        et("xhr", s);
        return t.apply(n, r);
      },
    }));
}
function vp(e) {
  if (wt(e)) {
    return e;
  }
  try {
    return e.toString();
  } catch {}
}
const wp = 40;
function Ep(e, t = mp("fetch")) {
  let n = 0;
  let r = 0;
  async function o(s) {
    const i = s.body.length;
    (n += i);
    r++;
    const c = {
      body: s.body,
      method: "POST",
      referrerPolicy: "strict-origin",
      headers: e.headers,
      keepalive: n <= 60000/* 6e4 */ && r < 15,
      ...e.fetchOptions,
    };
    try {
      const l = await t(e.url, c);
      return {
        statusCode: l.status,
        headers: {
          "x-sentry-rate-limits": l.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": l.headers.get("Retry-After"),
        },
      };
    } catch (l) {
      gp("fetch");
      throw l;
    } finally {
      (n -= i);
      r--;
    }
  }
  return Zf(e, o, us(e.bufferSize || wp));
}
const gn = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Sp = 30;
const bp = 50;
function Uo(e, t, n, r) {
  const o = { filename: e, function: t === "<anonymous>" ? Jt : t, in_app: true };

  if (n !== undefined) {
    (o.lineno = n);
  }

  if (r !== undefined) {
    (o.colno = r);
  }

  return o;
}
const Cp = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;

const Tp =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const Ip = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const Np = /at (.+?) ?\(data:(.+?),/;

const kp = (e) => {
  const t = e.match(Np);
  if (t) {
    return { filename: `<data:${t[2]}>`, function: t[1] };
  }
  const n = Cp.exec(e);
  if (n) {
    const [, o, s, i] = n;
    return Uo(o, Jt, Number(s), Number(i));
  }
  const r = Tp.exec(e);
  if (r) {
    if (r[2]?.indexOf("eval") === 0) {
      const c = Ip.exec(r[2]);

      if (c) {
        (r[2] = c[1]);
        (r[3] = c[2]);
        (r[4] = c[3]);
      }
    }
    const [s, i] = rl(r[1] || Jt, r[2]);
    return Uo(i, s, r[3] ? +r[3] : undefined, r[4] ? +r[4] : undefined);
  }
};

const Rp = [Sp, kp];

const Pp =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;

const Ap = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

const Op = (e) => {
  const t = Pp.exec(e);
  if (t) {
    if (t[3] && t[3].includes(" > eval")) {
      const s = Ap.exec(t[3]);

      if (s) {
        (t[1] = t[1] || "eval");
        (t[3] = s[1]);
        (t[4] = s[2]);
        (t[5] = "");
      }
    }
    let [,,, r] = t;
    let o = t[1] || Jt;
    ([o, r] = rl(o, r));
    return Uo(r, o, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
  }
};

const xp = [bp, Op];
const Lp = [Rp, xp];
const $p = ic(...Lp);

const rl = (e, t) => {
  const n = e.includes("safari-extension");
  const r = e.includes("safari-web-extension");
  return n || r
    ? [
        e.includes("@") ? e.split("@")[0] : Jt,
        n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
      ]
    : [e, t];
};

const sr = 1024;
const Mp = "Breadcrumbs";

const Up = (e = {}) => {
  const t = {
    console: true,
    dom: true,
    fetch: true,
    history: true,
    sentry: true,
    xhr: true,
    ...e,
  };
  return {
    name: Mp,
    setup(n) {
      if (t.console) {
        Nh(Hp(n));
      }

      if (t.dom) {
        cp(Bp(n, t.dom));
      }

      if (t.xhr) {
        _p(Vp(n));
      }

      if (t.fetch) {
        Vh(Wp(n));
      }

      if (t.history) {
        nl(jp(n));
      }

      if (t.sentry) {
        n.on("beforeSendEvent", Fp(n));
      }
    },
  };
};

function Fp(e) {
  return n => {
    if (Re() === e) {
      Qt(
        {
          category: `sentry.${
            n.type === "transaction" ? "transaction" : "event"
          }`,
          event_id: n.event_id,
          level: n.level,
          message: qt(n),
        },
        { event: n }
      );
    }
  };
}
function Bp(e, t) {
  return r => {
    if (Re() !== e) {
      return;
    }
    let o;
    let s;
    let i = typeof t == "object" ? t.serializeAttribute : undefined;

    let c =
      typeof t == "object" && typeof t.maxStringLength == "number"
        ? t.maxStringLength
        : undefined;

    if (c &&
      c > sr) {
      gn &&
          V.warn(
            `\`dom.maxStringLength\` cannot exceed ${sr}, but a value of ${c} was configured. Sentry will use ${sr} instead.`
          );

      (c = sr);
    }

    if (typeof i == "string") {
      (i = [i]);
    }

    try {
      const r_event = r.event;
      const f = zp(r_event) ? r_event.target : r_event;
      (o = fc(f, { keyAttrs: i, maxStringLength: c }));
      (s = Mu(f));
    } catch {
      o = "<unknown>";
    }
    if (o.length === 0) {
      return;
    }
    const l = { category: `ui.${r.name}`, message: o };

    if (s) {
      (l.data = { "ui.component_name": s });
    }

    Qt(l, { event: r.event, name: r.name, global: r.global });
  };
}
function Hp(e) {
  return function (n) {
    if (Re() !== e) {
      return;
    }
    const r = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: Rh(n.level),
      message: qs(n.args, " "),
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        (r.message = `Assertion failed: ${
          qs(n.args.slice(1), " ") || "console.assert"
        }`);

        (r.data.arguments = n.args.slice(1));
      } else {
        return;
      }
    }
    Qt(r, { input: n.args, level: n.level });
  };
}
function Vp(e) {
  return n => {
    if (Re() !== e) {
      return;
    }
    const { startTimestamp, endTimestamp } = n;
    const s = n.xhr[On];
    if (!startTimestamp || !endTimestamp || !s) {
      return;
    }
    const { method, url, status_code, body } = s;
    const f = { method: method, url: url, status_code: status_code };
    const d = { xhr: n.xhr, input: body, startTimestamp: startTimestamp, endTimestamp: endTimestamp };
    const p = { category: "xhr", data: f, type: "http", level: Qc(status_code) };
    e.emit("beforeOutgoingRequestBreadcrumb", p, d);
    Qt(p, d);
  };
}
function Wp(e) {
  return n => {
    if (Re() !== e) {
      return;
    }
    const { startTimestamp, endTimestamp } = n;
    if (endTimestamp &&
    !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST")) {
      if (n.error) {
        const s = {
            data: n.error,
            input: n.args,
            startTimestamp: startTimestamp,
            endTimestamp: endTimestamp,
          };

        const i = {
          category: "fetch",
          data: n.fetchData,
          level: "error",
          type: "http",
        };

        e.emit("beforeOutgoingRequestBreadcrumb", i, s);
        Qt(i, s);
      } else {
        const n_response = n.response;
        const i = { ...n.fetchData, status_code: n_response?.status };

        const c = {
          input: n.args,
          response: n_response,
          startTimestamp: startTimestamp,
          endTimestamp: endTimestamp,
        };

        const l = {
          category: "fetch",
          data: i,
          type: "http",
          level: Qc(i.status_code),
        };

        e.emit("beforeOutgoingRequestBreadcrumb", l, c);
        Qt(l, c);
      }
    }
  };
}
function jp(e) {
  return n => {
    if (Re() !== e) {
      return;
    }

    let {
      from,
      to: to_2
    } = n;

    const s = Kr(ue.location.href);
    let i = from ? Kr(from) : undefined;
    const c = Kr(to_2);

    if (!i?.path) {
      (i = s);
    }

    if (s.protocol === c.protocol && s.host === c.host) {
      (to_2 = c.relative);
    }

    if (s.protocol === i.protocol && s.host === i.host) {
      (from = i.relative);
    }

    Qt({ category: "navigation", data: { from: from, to: to_2 } });
  };
}
function zp(e) {
  return !!e && !!e.target;
}

const qp =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ","
    );

const Gp = "BrowserApiErrors";

const Xp = (e = {}) => {
  const t = {
    XMLHttpRequest: true,
    eventTarget: true,
    requestAnimationFrame: true,
    setInterval: true,
    setTimeout: true,
    unregisterOriginalCallbacks: false,
    ...e,
  };
  return {
    name: Gp,
    setupOnce() {
      if (t.setTimeout) {
        je(ue, "setTimeout", Mi);
      }

      if (t.setInterval) {
        je(ue, "setInterval", Mi);
      }

      if (t.requestAnimationFrame) {
        je(ue, "requestAnimationFrame", Kp);
      }

      if (t.XMLHttpRequest &&
        "XMLHttpRequest" in ue) {
        je(XMLHttpRequest.prototype, "send", Zp);
      }

      const t_eventTarget = t.eventTarget;

      if (t_eventTarget) {
        (Array.isArray(t_eventTarget) ? t_eventTarget : qp).forEach(o => Jp(o, t));
      }
    },
  };
};

function Mi(e) {
  return function (...t) {
    const [n] = t;

    (t[0] = mn(n, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${At(e)}`,
      },
    }));

    return e.apply(this, t);
  };
}
function Kp(e) {
  return function (t) {
    return e.apply(this, [
      mn(t, {
        mechanism: {
          data: { handler: At(e) },
          handled: false,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function Zp(e) {
  return function (...t) {
    const n = this;

    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((o) => {
      if (o in n &&
        typeof n[o] == "function") {
        je(n, o, s => {
          const i = {
              mechanism: {
                data: { handler: At(s) },
                handled: false,
                type: `auto.browser.browserapierrors.xhr.${o}`,
              },
            };

          const c = os(s);

          if (c) {
            (i.mechanism.data.handler = At(c));
          }

          return mn(s, i);
        });
      }
    });

    return e.apply(this, t);
  };
}
function Jp(e, t) {
  const r = ue[e]?.prototype;

  if (r?.hasOwnProperty?.("addEventListener")) {
    je(r, "addEventListener", o => (function(s, i, c) {
      try {
        if (Qp(i)) {
          (i.handleEvent = mn(i.handleEvent, {
              mechanism: {
                data: { handler: At(i), target: e },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent",
              },
            }));
        }
      } catch {}

      if (t.unregisterOriginalCallbacks) {
        em(this, s, i);
      }

      return o.apply(this, [
        s,
        mn(i, {
          mechanism: {
            data: { handler: At(i), target: e },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener",
          },
        }),
        c,
      ]);
    }));

    je(r, "removeEventListener", o => (function(s, i, c) {
      try {
        const i_sentry_wrapped = i.__sentry_wrapped__;

        if (i_sentry_wrapped) {
          o.call(this, s, i_sentry_wrapped, c);
        }
      } catch {}
      return o.call(this, s, i, c);
    }));
  }
}
function Qp(e) {
  return typeof e.handleEvent == "function";
}
function em(e, t, n) {
  if (e &&
    typeof e == "object" &&
    "removeEventListener" in e &&
    typeof e.removeEventListener == "function") {
    e.removeEventListener(t, n);
  }
}

const tm = (e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (typeof ue.document === "undefined") {
          if (gn) {
            V.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported."
            );
          }

          return;
        }
        mi({ ignoreDuration: true });
        Jr();
        const n = ut();
        let r = n.getUser();

        n.addScopeListener((o) => {
          const s = o.getUser();

          if ((r?.id !== s?.id || r?.ip_address !== s?.ip_address)) {
            Jr();
            (r = s);
          }
        });

        if (t === "route") {
          nl(({ from: o, to: s }) => {
            if (o !== s) {
              mi({ ignoreDuration: true });
              Jr();
            }
          });
        }
      },
    };
  };

const nm = "CultureContext";

const om = () => ({
  name: nm,

  preprocessEvent(e) {
    const t = Di();

    if (t) {
      (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    }
  },

  processSegmentSpan(e) {
    const t = Di();

    if (t) {
      Ac(e, {
        "culture.locale": t.locale,
        "culture.timezone": t.timezone,
        "culture.calendar": t.calendar,
      });
    }
  }
});

function Di() {
  try {
    const ue_Intl = ue.Intl;
    if (!ue_Intl) {
      return;
    }
    const t = ue_Intl.DateTimeFormat().resolvedOptions();
    return { locale: t.locale, timezone: t.timeZone, calendar: t.calendar };
  } catch {
    return;
  }
}
const sm = "GlobalHandlers";

const am = (e = {}) => {
  const t = { onerror: true, onunhandledrejection: true, ...e };
  return {
    name: sm,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (t.onerror) {
        cm(n);
        Ui("onerror");
      }

      if (t.onunhandledrejection) {
        lm(n);
        Ui("onunhandledrejection");
      }
    },
  };
};

function cm(e) {
  Iu((t) => {
    const { stackParser, attachStacktrace } = ol();
    if (Re() !== e || el()) {
      return;
    }
    const { msg, url, line, column, error } = t;
    const u = fm(hs(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
    (u.level = "error");

    xc(u, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror",
      },
    });
  });
}
function lm(e) {
  ku((t) => {
    const { stackParser, attachStacktrace } = ol();
    if (Re() !== e || el()) {
      return;
    }
    const o = um(t);
    const s = Lr(o) ? dm(o) : hs(stackParser, o, undefined, attachStacktrace, true);
    (s.level = "error");

    xc(s, {
      originalException: o,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection",
      },
    });
  });
}
function um(e) {
  if (Lr(e)) {
    return e;
  }
  try {
    if ("reason" in e) {
      return e.reason;
    }
    if ("detail" in e && "reason" in e.detail) {
      return e.detail.reason;
    }
  } catch {}
  return e;
}
function dm(e) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(
            e
          )}`,
        },
      ],
    },
  };
}
function fm(e, t, n, r) {
  const o = (e.exception = e.exception || {});
  const s = (o.values = o.values || []);
  const i = (s[0] = s[0] || {});
  const c = (i.stacktrace = i.stacktrace || {});
  const l = (c.frames = c.frames || []);

  if (l.length === 0) {
    l.push({
      colno: r,
      lineno: n,
      filename: hm(t) ?? rs(),
      function: Jt,
      in_app: true,
    });
  }

  return e;
}
function Ui(e) {
  if (gn) {
    V.log(`Global Handler attached: ${e}`);
  }
}
function ol() {
  return Re()?.getOptions() || { stackParser: () => [], attachStacktrace: false };
}
function hm(e) {
  if (!(!wt(e) || e.length === 0)) {
    return e.startsWith("data:") ? `<${ff(e, false)}>` : e;
  }
}

const pm = () => ({
  name: "HttpContext",

  preprocessEvent(e) {
    if (!ue.navigator && !ue.location && !ue.document) {
      return;
    }
    const t = xi();
    const n = { ...t.headers, ...e.request?.headers };
    e.request = { ...t, ...e.request, headers: n };
  },

  processSegmentSpan(e) {
    if (!ue.navigator && !ue.location && !ue.document) {
      return;
    }
    const t = xi();
    Ac(e, {
      "url.full": t.url || undefined,
      "http.request.header.user_agent": t.headers["User-Agent"],
      "http.request.header.referer": t.headers.Referer,
    });
  }
});

const mm = "cause";
const gm = 5;
const _m = "LinkedErrors";

const vm = (e = {}) => {
  const t = e.limit || gm;
  const n = e.key || mm;
  return {
    name: _m,
    preprocessEvent(r, o, s) {
      const i = s.getOptions();
      Ih(ds, i.stackParser, n, t, r, o);
    },
  };
};

function wm() {
  return Em()
    ? (gn &&
        wn(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
          );
        }),
      true)
    : false;
}
function Em() {
  if (typeof ue.window === "undefined") {
    return false;
  }
  const e = ue;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) {
    return false;
  }
  const n = rs();
  return !(
    ue === ue.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      n
    )
  );
}
function Sm(e) {
  return [yh(), ph(), Uh(), Xp(), Up(), am(), vm(), Oh(), pm(), om(), tm()];
}
function bm(e = {}) {
  const t = !e.skipBrowserExtensionCheck && wm();
  let n = e.defaultIntegrations == null ? Sm() : e.defaultIntegrations;
  const r = {
    ...e,
    enabled: t ? false : e.enabled,
    stackParser: Cu(e.stackParser || $p),
    integrations: Lf({ integrations: e.integrations, defaultIntegrations: n }),
    transport: e.transport || Ep,
  };
  return ch(op, r);
}
function Fi(e = {}) {
  const ue_document = ue.document;
  const n = ue_document?.head || ue_document?.body;
  if (!n) {
    if (gn) {
      V.error("[showReportDialog] Global document not defined");
    }

    return;
  }
  const r = lt();
  const s = Re()?.getDsn();
  if (!s) {
    if (gn) {
      V.error("[showReportDialog] DSN not configured");
    }

    return;
  }

  const i = {
      ...e,
      user: { ...r.getUser(), ...e.user },
      eventId: e.eventId || Nf(),
    };

  const c = ue.document.createElement("script");
  (c.async = true);
  (c.crossOrigin = "anonymous");
  (c.src = Of(s, i));
  const { onLoad, onClose } = i;

  if (onLoad) {
    (c.onload = onLoad);
  }

  if (onClose) {
    const f = (d) => {
      if (d.data === "__sentry_reportdialog_closed__") {
        try {
          onClose();
        } finally {
          ue.removeEventListener("message", f);
        }
      }
    };
    ue.addEventListener("message", f);
  }

  n.appendChild(c);
}
let Lt;
let _e;
let to;
let Bi;
let _n = 0;
const sl = [];
const ve = Z;

const {
  __b,
  __r,
  diffed,
  __c,
  unmount,
  __: __1
} = ve;

function Cn(e, t) {
  if (ve.__h) {
    ve.__h(_e, e, _n || t);
  }

  (_n = 0);
  const n = _e.__H || (_e.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function L(e) {
  (_n = 1);
  return ps(cl, e);
}
function ps(e, t, n) {
  const r = Cn(Lt++, 2);
  (r.t = e);

  if (!r.__c &&
    ((r.__ = [
      n ? n(t) : cl(undefined, t),
      c => {
        const l = r.__N ? r.__N[0] : r.__[0];
        const u = r.t(l, c);

        if (l !== u) {
          (r.__N = [u, r.__[1]]);
          r.__c.setState({});
        }
      },
    ]),
    (r.__c = _e),
    !_e.__f)) {
    const o = function (c, l, u) {
      if (!r.__c.__H) {
        return true;
      }
      const f = r.__c.__H.__.filter(p => !!p.__c);
      if (f.every(p => !p.__N)) {
        return !shouldComponentUpdate || shouldComponentUpdate.call(this, c, l, u);
      }
      let d = r.__c.props !== c;

      f.forEach(p => {
        if (p.__N) {
          const h = p.__[0];
          (p.__ = p.__N);
          (p.__N = undefined);

          if (h !== p.__[0]) {
            (d = true);
          }
        }
      });

      return (shouldComponentUpdate && shouldComponentUpdate.call(this, c, l, u)) || d;
    };
    _e.__f = true;

    var {
      shouldComponentUpdate,
      componentWillUpdate
    } = _e;

    (_e.componentWillUpdate = function (c, l, u) {
      if (this.__e) {
        const f = shouldComponentUpdate;
        (shouldComponentUpdate = undefined);
        o(c, l, u);
        (shouldComponentUpdate = f);
      }

      if (componentWillUpdate) {
        componentWillUpdate.call(this, c, l, u);
      }
    });

    (_e.shouldComponentUpdate = o);
  }

  return r.__N || r.__;
}
function F(e, t) {
  const n = Cn(Lt++, 3);

  if (!ve.__s && gs(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    _e.__H.__h.push(n);
  }
}
function Tn(e, t) {
  const n = Cn(Lt++, 4);

  if (!ve.__s && gs(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    _e.__h.push(n);
  }
}
function R(e) {
  (_n = 5);

  return Se(() => ({
    current: e
  }), []);
}
function ms(e, t, n) {
  (_n = 6);

  Tn(
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
        (e.current = t());

        return () => e.current = null;
      }
    },
    n == null ? n : n.concat(e)
  );
}
function Se(e, t) {
  const n = Cn(Lt++, 7);

  if (gs(n.__H, t)) {
    (n.__ = e());
    (n.__H = t);
    (n.__h = e);
  }

  return n.__;
}
function N(e, t) {
  (_n = 8);

  return Se(() => e, t);
}
function Br(e) {
  const t = _e.context[e.__c];
  const n = Cn(Lt++, 9);
  (n.c = e);
  return t ? (n.__ == null && ((n.__ = true), t.sub(_e)), t.props.value) : e.__;
}
function il(e, t) {
  if (ve.useDebugValue) {
    ve.useDebugValue(t ? t(e) : e);
  }
}
function al() {
  const e = Cn(Lt++, 11);
  if (!e.__) {
    for (var t = _e.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function Cm() {
  for (let e; (e = sl.shift()); ) {
    if (e.__P && e.__H) {
      try {
        e.__H.__h.forEach(vr);
        e.__H.__h.forEach(Fo);
        (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []);
        ve.__e(t, e.__v);
      }
    }
  }
}

(ve.__b = e => {
  (_e = null);

  if (__b) {
    __b(e);
  }
});

(ve.__ = (e, t) => {
  if (e && t.__k && t.__k.__m) {
    (e.__m = t.__k.__m);
  }

  if (__1) {
    __1(e, t);
  }
});

(ve.__r = e => {
  if (__r) {
    __r(e);
  }

  (Lt = 0);
  const t = (_e = e.__c).__H;

  if (t) {
    if (to === _e) {
      (t.__h = []);
      (_e.__h = []);

      t.__.forEach(n => {
        if (n.__N) {
          (n.__ = n.__N);
        }

        n.u = undefined;
        n.__N = undefined;
      });
    } else {
      t.__h.forEach(vr);
      t.__h.forEach(Fo);
      (t.__h = []);
      (Lt = 0);
    }
  }

  (to = _e);
});

(ve.diffed = e => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__h.length &&
        ((sl.push(e_c) !== 1 && Bi === ve.requestAnimationFrame) ||
          ((Bi = ve.requestAnimationFrame) || Tm)(Cm));

    e_c.__H.__.forEach(n => {
      if (n.u) {
        (n.__H = n.u);
      }

      (n.u = undefined);
    });
  }

  to = null;
  _e = null;
});

(ve.__c = (e, t) => {
  t.some(n => {
    try {
      n.__h.forEach(vr);

      (n.__h = n.__h.filter(r => !r.__ || Fo(r)));
    } catch (r) {
      t.some(o => {
        if (o.__h) {
          (o.__h = []);
        }
      });

      (t = []);
      ve.__e(r, n.__v);
    }
  });

  if (__c) {
    __c(e, t);
  }
});

(ve.unmount = e => {
  if (unmount) {
    unmount(e);
  }

  let t;
  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__.forEach(r => {
        try {
          vr(r);
        } catch (o) {
          t = o;
        }
      });

    (e_c.__H = undefined);
    t && ve.__e(t, e_c.__v);
  }
});

const Gi = typeof requestAnimationFrame == "function";
function Tm(e) {
  let t;

  const n = () => {
    clearTimeout(r);

    if (Gi) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var r = setTimeout(n, 35);

  if (Gi) {
    (t = requestAnimationFrame(n));
  }
}
function vr(e) {
  const t = _e;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    (e.__c = undefined);
    e_c();
  }

  (_e = t);
}
function Fo(e) {
  const t = _e;
  (e.__c = e.__());
  (_e = t);
}
function gs(e, t) {
  return !e ||
  e.length !== t.length ||
  t.some((n, r) => n !== e[r]);
}
function cl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ll(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Bo(e, t) {
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
function ul(e, t) {
  const n = t();
  const r = L({ t: { __: n, u: t } });
  const o = r[0].t;
  const [, s] = r;

  Tn(
    () => {
      (o.__ = n);
      (o.u = t);

      if (no(o)) {
        s({ t: o });
      }
    },
    [e, n, t]
  );

  F(
    () => {
      if (no(o)) {
        s({ t: o });
      }

      return e(() => {
        if (no(o)) {
          s({ t: o });
        }
      });
    },
    [e]
  );

  return n;
}
function no(e) {
  let t;
  let n;

  const {
    u,
    __: _
  } = e;

  try {
    const s = u();
    return !(
      ((t = _) === (n = s) && (t !== 0 || 1 / t == 1 / n)) ||
      (t != t && n != n)
    );
  } catch {
    return true;
  }
}
function dl(e) {
  e();
}
function fl(e) {
  return e;
}
function hl() {
  return [false, dl];
}
const pl = Tn;

class Ho {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  shouldComponentUpdate(e, t) {
      return Bo(this.props, e) || Bo(this.state, t);
    }
}

function Hr(e, t) {
  function n(o) {
    const s = this.props.ref;
    const i = s == o.ref;

    if (!i && s) {
      if (s.call) {
        s(null);
      } else {
        (s.current = null);
      }
    }

    if (t) {
      if (!!t(this.props, o)) {
        return !i;
      }
    }

    return Bo(this.props, o);
  }
  function r(o) {
    (this.shouldComponentUpdate = n);
    return tt(e, o);
  }
  (r.displayName = `Memo(${e.displayName || e.name})`);
  (r.prototype.isReactComponent = true);
  (r.__f = true);
  (r.type = e);
  return r;
}
((Ho.prototype = new Ye()).isPureReactComponent = true);

const {
  __b: _b_1,
  __e,
  unmount: unmount_2,
  event,
  vnode,
  __r: _r_1,
  diffed: diffed_2
} = Z;

Z.__b = e => {
  if (e.type && e.type.__f && e.ref) {
    (e.props.ref = e.ref);
    (e.ref = null);
  }

  if (_b_1) {
    _b_1(e);
  }
};
const Im =
  (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function ml(e) {
  class t {
    constructor(n) {
      const r = ll({}, n);
      delete r.ref;
      return e(r, n.ref || null);
    }

    static componentWillUnmount() {
      Hn(null, t.v);
      (t.v = null);
      (t.h = null);
    }
  }

  (t.$$typeof = Im);
  (t.render = e);
  t.prototype.isReactComponent = true;
  t.__f = true;
  (t.displayName = `ForwardRef(${e.displayName || e.name})`);
  return t;
}

const Xi = (e, t) => e == null ? null : Qe(Qe(e).map(t));

const Nm = {
  map: Xi,
  forEach: Xi,
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

Z.__e = (e, t, n, r) => {
  if (e.then) {
    let o;
    for (let s = t; (s = s.__); ) {
      if ((o = s.__c) && o.__c) {
        if (t.__e == null) {
          (t.__e = n.__e);
          (t.__k = n.__k);
        }

        return o.__c(e, t);
      }
    }
  }
  __e(e, t, n, r);
};
function gl(e, t, n) {
  if (e) {
    e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(r => {
      if (typeof r.__c == "function") {
        r.__c();
      }
    }),
        (e.__c.__H = null));

    (e = ll({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    (e.__k = e.__k &&
    e.__k.map(r => gl(r, t, n)));
  }

  return e;
}
function _l(e, t, n) {
  if (e &&
    n) {
    (e.__v = null);

    (e.__k = e.__k &&
    e.__k.map(r => _l(r, t, n)));

    e.__c &&
      e.__c.__P === t &&
      (e.__e && n.appendChild(e.__e), (e.__c.__e = true), (e.__c.__P = n));
  }

  return e;
}

class Te {
  constructor() {
    (this.__u = 0);
    (this.o = null);
    (this.__b = null);
  }

  componentWillUnmount() {
      this.o = [];
    }

  render(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        const n = document.createElement("div");
        const r = this.__v.__k[0].__c;
        this.__v.__k[0] = gl(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    const o = t.__a && tt(ke, null, e.fallback);

    if (o) {
      (o.__u &= -33);
    }

    return [tt(ke, null, t.__a ? null : e.children), o];
  }
}

function yl(e) {
  const t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function ne(e) {
  let t;
  let n;
  let r;
  let o = null;
  function s(i) {
    if (!t) {
      (e()).then(
        c => {
          if (c) {
            (o = c.default || c);
          }

          (r = true);
        },
        c => {
          (n = c);
          (r = true);
        }
      );
    }

    if (n) {
      throw n;
    }

    if (!r) {
      throw t;
    }
    return o ? tt(o, i) : null;
  }
  (s.displayName = "Lazy");
  (s.__f = true);
  return s;
}

class xn {
  constructor() {
    (this.i = null);
    (this.l = null);
  }

  render(e) {
    (this.i = null);
    (this.l = new Map());
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

(Z.unmount = e => {
  const e_c = e.__c;

  if (e_c && e_c.__R) {
    e_c.__R();
  }

  if (e_c && 32 & e.__u) {
    (e.type = null);
  }

  if (unmount_2) {
    unmount_2(e);
  }
});

((Te.prototype = new Ye()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    (r.o = []);
  }

  r.o.push(t_c);
  const o = yl(r.__v);

  const i = () => {
    if (!s) {
      (s = true);
      (t_c.__R = null);
      o ? o(c) : c();
    }
  };

  t_c.__R = i;
  var c = () => {
    if (!--r.__u) {
      if (r.state.__a) {
        const l = r.state.__a;
        r.__v.__k[0] = _l(l, l.__c.__P, l.__c.__O);
      }
      let u;
      for (r.setState({ __a: (r.__b = null) }); (u = r.o.pop()); ) {
        u.forceUpdate();
      }
    }
  };

  if (!r.__u++ && 32 & t.__u) {
    r.setState({ __a: (r.__b = r.__v.__k[0]) });
  }

  e.then(i, i);
});

const Zi = (e, t, n) => {
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
function Rm(e) {
  (this.getChildContext = () => e.context);

  return e.children;
}
function Pm(e) {
  const t = this;
  const e_h = e.h;

  if (t.h && t.h !== e_h) {
    t.componentWillUnmount();
  }

  if (!t.v) {
    for (var r = t.__v; r !== null && !r.__m && r.__ !== null; ) {
      r = r.__;
    }
    (t.h = e_h);

    (t.v = {
        nodeType: 1,
        parentNode: e_h,
        childNodes: [],
        __k: { __m: r.__m },
        contains() {
          return true;
        },
        insertBefore(o, s) {
          this.childNodes.push(o);
          t.h.insertBefore(o, s);
        },
        removeChild(o) {
          this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1);
          t.h.removeChild(o);
        },
      });
  }

  Hn(tt(Rm, { context: t.context }, e.__v), t.v);
}
function nn(e, t) {
  const n = tt(Pm, { __v: e, h: t });
  (n.containerInfo = t);
  return n;
}

((xn.prototype = new Ye()).__a = function (e) {
  const t = this;
  const n = yl(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return o => {
    const s = () => {
      if (t.props.revealOrder) {
        r.push(o);
        Zi(t, e, r);
      } else {
        o();
      }
    };

    if (n) {
      n(s);
    } else {
      s();
    }
  };
});

(xn.prototype.componentDidUpdate = xn.prototype.componentDidMount =
    function () {
      const e = this;
      this.l.forEach((t, n) => {
        Zi(e, n, t);
      });
    });

const vl =
    (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.element")) || 60103;

const Am =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const Om = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const xm = /[A-Z0-9]/g;
const Lm = typeof document !== "undefined";

const $m = e => (
  typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
).test(e);

function wl(e, t, n) {
  if (t.__k == null) {
    (t.textContent = "");
  }

  Hn(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function Mm(e, t, n) {
  nc(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
(Ye.prototype.isReactComponent = {});

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach(e => {
  Object.defineProperty(Ye.prototype, e, {
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

function Dm() {}
function Um() {
  return this.cancelBubble;
}
function Fm() {
  return this.defaultPrevented;
}
Z.event = e => {
  if (event) {
    (e = event(e));
  }

  (e.persist = Dm);
  (e.isPropagationStopped = Um);
  (e.isDefaultPrevented = Fm);
  (e.nativeEvent = e);
  return e.nativeEvent;
};
let _s;

const Bm = {
  enumerable: false,
  configurable: true,
  get() {
    return this.class;
  },
};

Z.vnode = e => {
  if (typeof e.type == "string") {
    (t => {
      const {
        props,
        type
      } = t;

      const o = {};
      const s = !type.includes("-");
      for (let i in props) {
        let props_i = props[i];
        if (
          !(
            (i === "value" && "defaultValue" in props && props_i == null) ||
            (Lm && i === "children" && type === "noscript") ||
            i === "class" ||
            i === "className"
          )
        ) {
          let l = i.toLowerCase();

          if (i === "defaultValue" && "value" in props && props.value == null) {
            (i = "value");
          } else if (i === "download" && props_i === true) {
            (props_i = "");
          } else if (l === "translate" && props_i === "no") {
            (props_i = false);
          } else if (l[0] === "o" && l[1] === "n") {
            if (l === "ondoubleclick") {
              (i = "ondblclick");
            } else if (l !== "onchange" ||
                  (type !== "input" && type !== "textarea") ||
                  $m(props.type)) {
              if (l === "onfocus") {
                (i = "onfocusin");
              } else if (l === "onblur") {
                (i = "onfocusout");
              } else if (Om.test(i)) {
                (i = l);
              }
            } else {
              (l = i = "oninput");
            }
          } else if (s && Am.test(i)) {
            (i = i.replace(xm, "-$&").toLowerCase());
          } else if (props_i === null) {
            (props_i = undefined);
          }

          if (l === "oninput" && o[(i = l)]) {
            (i = "oninputCapture");
          }

          (o[i] = props_i);
        }
      }

      if (type == "select" &&
        o.multiple &&
        Array.isArray(o.value)) {
        (o.value = Qe(props.children).forEach(u => {
            u.props.selected = o.value.includes(u.props.value);
          }));
      }

      if (type == "select" &&
        o.defaultValue != null) {
        (o.value = Qe(props.children).forEach(u => {
            u.props.selected = o.multiple
              ? o.defaultValue.includes(u.props.value)
              : o.defaultValue == u.props.value;
          }));
      }

      if (props.class && !props.className) {
        (o.class = props.class);
        Object.defineProperty(o, "className", Bm);
      } else if (((props.className && !props.class) || (props.class && props.className))) {
        (o.class = o.className = props.className);
      }

      (t.props = o);
    })(e);
  }

  (e.$$typeof = vl);

  if (vnode) {
    vnode(e);
  }
};
Z.__r = e => {
  if (_r_1) {
    _r_1(e);
  }

  (_s = e.__c);
};
Z.diffed = e => {
  if (diffed_2) {
    diffed_2(e);
  }

  const {
    props,
    __e: _e_1
  } = e;

  if (_e_1 != null &&
    e.type === "textarea" &&
    "value" in props &&
    props.value !== _e_1.value) {
    (_e_1.value = props.value == null ? "" : props.value);
  }

  (_s = null);
};

const Hm = {
    ReactCurrentDispatcher: {
      current: {
        readContext(e) {
          return _s.__n[e.__c].props.value;
        },
        useCallback: N,
        useContext: Br,
        useDebugValue: il,
        useDeferredValue: fl,
        useEffect: F,
        useId: al,
        useImperativeHandle: ms,
        useInsertionEffect: pl,
        useLayoutEffect: Tn,
        useMemo: Se,
        useReducer: ps,
        useRef: R,
        useState: L,
        useSyncExternalStore: ul,
        useTransition: hl,
      },
    },
  };

const El = "18.3.1";
function Vm(e) {
  return tt.bind(null, e);
}
function Qn(e) {
  return !!e && e.$$typeof === vl;
}
function Wm(e) {
  return Qn(e) && e.type === ke;
}
function jm(e) {
  return (
    !!e &&
    !!e.displayName &&
    (typeof e.displayName == "string" || e.displayName instanceof String) &&
    e.displayName.startsWith("Memo(")
  );
}
function zm(e) {
  return Qn(e) ? rc(...arguments) : e;
}
function Sl(e) {
  return !!e.__k && (Hn(null, e), true);
}
function qm(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const Gm = (e, t) => e(t);

const Ym = (e, t) => e(t);

const bl = ke;
const Xm = Qn;

const Ln = {
  useState: L,
  useId: al,
  useReducer: ps,
  useEffect: F,
  useLayoutEffect: Tn,
  useInsertionEffect: pl,
  useTransition: hl,
  useDeferredValue: fl,
  useSyncExternalStore: ul,
  startTransition: dl,
  useRef: R,
  useImperativeHandle: ms,
  useMemo: Se,
  useCallback: N,
  useContext: Br,
  useDebugValue: il,
  version: "18.3.1",
  Children: Nm,
  render: wl,
  hydrate: Mm,
  unmountComponentAtNode: Sl,
  createPortal: nn,
  createElement: tt,
  createContext: yn,
  createFactory: Vm,
  cloneElement: zm,
  createRef: du,
  Fragment: ke,
  isValidElement: Qn,
  isElement: Xm,
  isFragment: Wm,
  isMemo: jm,
  findDOMNode: qm,
  Component: Ye,
  PureComponent: Ho,
  memo: Hr,
  forwardRef: ml,
  flushSync: Ym,
  unstable_batchedUpdates: Gm,
  StrictMode: bl,
  Suspense: Te,
  SuspenseList: xn,
  lazy: ne,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Hm,
};

function Km(e) {
  const t = { ...e };
  Xc(t, "react");
  If("react", { version: El });
  return bm(t);
}
function Zm(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function Jm(e, t) {
  const n = new WeakSet();
  function r(o, s) {
    if (!n.has(o)) {
      if (o.cause) {
        n.add(o);
        return r(o.cause, s);
      }
      o.cause = s;
    }
  }
  r(e, t);
}
function Qm(e, { componentStack: t }, n) {
  if (Zm(El) && Yn(e) && t) {
    const r = new Error(e.message);
    (r.name = `React ErrorBoundary ${e.name}`);
    (r.stack = t);
    Jm(e, r);
  }
  return is(r => {
    r.setContext("react", { componentStack: t });
    return Oc(e, n);
  });
}
const eg = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const ro = { componentStack: null, error: null, eventId: null };
class tg extends Ye {
  constructor(t) {
    super(t);
    (this.state = ro);
    (this._openFallbackReportDialog = true);
    const n = Re();

    if (n &&
      t.showDialog) {
      (this._openFallbackReportDialog = false);

      (this._cleanupHook = n.on("afterSendEvent", (r) => {
        if (!r.type &&
          this._lastEventId &&
          r.event_id === this._lastEventId) {
          Fi({ ...t.dialogOptions, eventId: this._lastEventId });
        }
      }));
    }
  }
  componentDidCatch(t, n) {
    const { componentStack } = n;

    const {
      beforeCapture,
      onError,
      showDialog,
      dialogOptions,
    } = this.props;

    is((l) => {
      if (beforeCapture) {
        beforeCapture(l, t, componentStack);
      }

      const u =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback;

      const f = Qm(t, n, {
        mechanism: { handled: u, type: "auto.function.react.error_boundary" },
      });

      if (onError) {
        onError(t, componentStack, f);
      }

      if (showDialog) {
        (this._lastEventId = f);
        this._openFallbackReportDialog && Fi({ ...dialogOptions, eventId: f });
      }

      this.setState({ error: t, componentStack: componentStack, eventId: f });
    });
  }
  componentDidMount() {
    const { onMount } = this.props;

    if (onMount) {
      onMount();
    }
  }
  componentWillUnmount() {
    const { error, componentStack, eventId } = this.state;
    const { onUnmount } = this.props;

    if (onUnmount) {
      if (this.state === ro) {
        onUnmount(null, null, null);
      } else {
        onUnmount(error, componentStack, eventId);
      }
    }

    if (this._cleanupHook) {
      this._cleanupHook();
      (this._cleanupHook = undefined);
    }
  }
  resetErrorBoundary() {
    const { onReset } = this.props;
    const { error, componentStack, eventId } = this.state;

    if (onReset) {
      onReset(error, componentStack, eventId);
    }

    this.setState(ro);
  }
  render() {
    const { fallback, children } = this.props;
    const r = this.state;
    if (r.componentStack === null) {
      return typeof children == "function" ? children() : children;
    }
    const o =
      typeof fallback == "function"
        ? tt(fallback, {
            error: r.error,
            componentStack: r.componentStack,
            resetError: () => this.resetErrorBoundary(),
            eventId: r.eventId,
          })
        : fallback;
    return Qn(o)
      ? o
      : (fallback && eg && V.warn("fallback did not produce a valid ReactElement"),
        null);
  }
}
Km({
  dsn: "https://693c388031bcee4cd87e917055abf6a2@sentry.xn--d1ah4a.com/2",
  environment: "production",
  enabled: true,
  sendDefaultPii: true,
  tracesSampleRate: 0.1,
  release: "1.1.1",
});
function ng(e) {
  return {
    render(t) {
      wl(t, e);
    },
    unmount() {
      Sl(e);
    },
  };
}
const rg = "modulepreload";

const og = e => `/${e}`;

const na = {};

const Q = (t, n, r) => {
  let o = Promise.resolve();
  if (n && n.length > 0) {
    let l = u => Promise.all(
      u.map(f => Promise.resolve(f).then(
        d => ({
          status: "fulfilled",
          value: d
        }),
        d => ({
          status: "rejected",
          reason: d
        })
      )
      )
    );
    document.getElementsByTagName("link");
    const i = document.querySelector("meta[property=csp-nonce]");
    const c = i?.nonce || i?.getAttribute("nonce");
    o = l(
      n.map((u) => {
        (u = og(u));

        if (u in na) {
          return;
        }

        na[u] = true;
        const f = u.endsWith(".css");
        const d = f ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${d}`)) {
          return;
        }
        const p = document.createElement("link");
        (p.rel = f ? "stylesheet" : rg);

        if (!f) {
          (p.as = "script");
        }

        (p.crossOrigin = "");
        (p.href = u);

        if (c) {
          p.setAttribute("nonce", c);
        }

        document.head.appendChild(p);

        if (f) {
          return new Promise((h, m) => {
            p.addEventListener("load", h);

            p.addEventListener("error", () => m(new Error(`Unable to preload CSS for ${u}`))
            );
          });
        }
      })
    );
  }
  function s(i) {
    const c = new Event("vite:preloadError", { cancelable: true });
    (c.payload = i);
    window.dispatchEvent(c);

    if (!c.defaultPrevented) {
      throw i;
    }
  }
  return o.then((i) => {
    for (const c of i || []) {
      if (c.status === "rejected") {
        s(c.reason);
      }
    }
    return t().catch(s);
  });
};

const sg = {};
function ir(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Cl(e, t, n) {
  let r;
  const o = /(?:\?([^#]*))?(#.*)?$/;
  const s = e.match(o);
  const i = {};
  if (s && s[1]) {
    for (let c = s[1].split("&"), l = 0; l < c.length; l++) {
      const u = c[l].split("=");
      i[decodeURIComponent(u[0])] = decodeURIComponent(u.slice(1).join("="));
    }
  }
  (e = Vo(e.replace(o, "")));
  (t = Vo(t || ""));
  for (let f = Math.max(e.length, t.length), d = 0; d < f; d++) {
    if (t[d] && t[d].charAt(0) === ":") {
      const p = t[d].replace(/(^:|[+*?]+$)/g, "");
      const h = (t[d].match(/[+*?]+$/) || sg)[0] || "";
      const m = ~h.indexOf("+");
      const _ = ~h.indexOf("*");
      const b = e[d] || "";
      if (!b && !_ && (!h.includes("?") || m)) {
        r = false;
        break;
      }
      (i[p] = decodeURIComponent(b));

      if (m || _) {
        i[p] = e.slice(d).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[d] !== e[d]) {
      r = false;
      break;
    }
  }
  return (n.default === true || r !== false) && i;
}
function ig(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function ag(e, t) {
  (e.index = t);

  (e.rank = (n => n.props.default ? 0 : Vo(n.props.path).map(cg).join(""))(e));

  return e.props;
}
function Vo(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function cg(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const lg = {};
const Zt = [];
const Un = [];
let We = null;
const ys = { url: vs() };
const Tl = yn(ys);
function er() {
  const e = Br(Tl);
  if (e === ys) {
    const t = L()[1];
    F(() => {
      Un.push(t);

      return () => Un.splice(Un.indexOf(t), 1);
    }, []);
  }
  return [e, Ke];
}
function vs() {
  let e;
  return `${(e =
  We && We.location
    ? We.location
    : We && We.getCurrentLocation
    ? We.getCurrentLocation()
    : typeof location !== "undefined"
    ? location
    : lg).pathname || ""}${e.search || ""}`;
}
function Ke(e, t = false) {
  if (typeof e != "string" && e.url) {
    (t = e.replace);
    (e = e.url);
  }

  if ((n => {
    for (let r = Zt.length; r--; ) {
      if (Zt[r].canRoute(n)) {
        return true;
      }
    }
    return false;
  })(e)) {
    ((n, r = "push") => {
      if (We && We[r]) {
        We[r](n);
      } else if (typeof history !== "undefined" &&
          history[`${r}State`]) {
        history[`${r}State`](null, null, n);
      }
    })(e, t ? "replace" : "push");
  }

  return Il(e);
}
function Il(e) {
  let t = false;
  for (let n = 0; n < Zt.length; n++) {
    if (Zt[n].routeTo(e)) {
      (t = true);
    }
  }
  return t;
}
function ug(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return Ke(t);
    }
  }
}
function dg(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function fg(e) {
  if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (e_target.hasAttribute("data-native") || e_target.hasAttribute("native")) {
          return;
        }
        if (ug(e_target)) {
          return dg(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function Nl(e) {
  if (e.history) {
    (We = e.history);
  }

  (this.state = { url: e.url || vs() });
}
ir((Nl.prototype = new Ye()), {
  shouldComponentUpdate(e) {
    return (e.static !== true ||
    e.url !== this.props.url || e.onChange !== this.props.onChange);
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

    if (!ra) {
      (ra = true);

      We ||
        addEventListener("popstate", () => {
          Il(vs());
        });

      addEventListener("click", fg);
    }

    Zt.push(this);

    if (We) {
      (this.u = We.listen(t => {
          const n = t.location || t;
          e.routeTo(`${n.pathname || ""}${n.search || ""}`);
        }));
    }

    (this.p = false);
  },
  componentWillUnmount() {
    if (typeof this.u == "function") {
      this.u();
    }

    Zt.splice(Zt.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(ag).sort(ig);

    for (const r of e) {
      const o = Cl(t, r.props.path, r.props);
      if (o) {
        return [r, o];
      }
    }
  },
  render(e, t) {
    let n;
    let r;
    const e_onChange = e.onChange;
    const t_url = t.url;
    let i = this.c;
    const c = this.g(Qe(e.children), t_url);

    if (c) {
      (r = rc(
            c[0],
            ir(ir({ url: t_url, matches: (n = c[1]) }, n), {
              key: undefined,
              ref: undefined,
            })
          ));
    }

    if (t_url !== (i && i.url)) {
      ir(
        ys,
        (i = this.c =
          {
            url: t_url,
            previous: i && i.url,
            current: r,
            path: r ? r.props.path : null,
            matches: n,
          })
      );

      (i.router = this);
      (i.active = r ? [r] : []);
      for (let l = Un.length; l--; ) {
        Un[l]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(i);
      }
    }

    return tt(Tl.Provider, { value: i }, r);
  },
});

const oa = (e) => {
  let t;
  const n = new Set();

  const r = (u, f) => {
    const d = typeof u == "function" ? u(t) : u;
    if (!Object.is(d, t)) {
      const p = t;

      (t = f ?? (typeof d != "object" || d === null)
        ? d
        : Object.assign({}, t, d));

      n.forEach(h => h(t, p));
    }
  };

  const o = () => t;

  const c = {
    setState: r,
    getState: o,
    getInitialState: () => l,
    subscribe: u => {
      n.add(u);

      return () => n.delete(u);
    },
  };

  const l = (t = e(r, o, c));
  return c;
};

const hg = e => e ? oa(e) : oa;

const pg = e => e;

function mg(e, t = pg) {
  const n = Ln.useSyncExternalStore(
    e.subscribe,
    Ln.useCallback(() => t(e.getState()), [e, t]),
    Ln.useCallback(() => t(e.getInitialState()), [e, t])
  );
  Ln.useDebugValue(n);
  return n;
}

const sa = (e) => {
  const t = hg(e);

  const n = r => mg(t, r);

  Object.assign(n, t);
  return n;
};

const rt = e => e ? sa(e) : sa;

function ws(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      let s;

      const i = l => l === null ? null : JSON.parse(l, undefined);

      const c = (s = n.getItem(o)) != null ? s : null;
      return c instanceof Promise ? c.then(i) : i(c);
    },
    setItem: (o, s) => n.setItem(o, JSON.stringify(s, undefined)),
    removeItem: o => n.removeItem(o),
  };
}

const Wo = e => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return Wo(r)(n);
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
          return Wo(r)(n);
        },
      };
    }
  };

const kl = (e, t) => (n, r, o) => {
  let s = {
      storage: ws(() => localStorage),
      partialize: _ => _,
      version: 0,
      merge: (_, b) => ({
        ...b,
        ..._
      }),
      ...t,
    };

  let i = false;
  const c = new Set();
  const l = new Set();
  let s_storage = s.storage;
  if (!s_storage) {
    return e(
      (..._) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        );

        n(..._);
      },
      r,
      o
    );
  }

  const f = () => {
      const _ = s.partialize({ ...r() });
      return s_storage.setItem(s.name, { state: _, version: s.version });
    };

  const o_setState = o.setState;
  o.setState = (_, b) => {
    o_setState(_, b);
    return f();
  };
  const p = e((..._) => {
    n(..._);
    return f();
  }, r, o);
  o.getInitialState = () => p;
  let h;
  const m = () => {
    let b;
    if (!s_storage) {
      return;
    }
    (i = false);

    c.forEach((y) => {
      let v;
      return y((v = r()) != null ? v : p);
    });

    const g =
      ((b = s.onRehydrateStorage) == null
        ? undefined
        : b.call(s, (_ = r()) != null ? _ : p)) || undefined;
    return Wo(s_storage.getItem.bind(s_storage))(s.name)
      .then((y) => {
        if (y) {
          if (typeof y.version == "number" && y.version !== s.version) {
            if (s.migrate) {
              const v = s.migrate(y.state, y.version);
              return v instanceof Promise ? v.then(I => [true, I]) : [true, v];
            }
            console.error(
              "State loaded from storage couldn't be migrated since no migrate function was provided"
            );
          } else {
            return [false, y.state];
          }
        }
        return [false, undefined];
      })
      .then((y) => {
      let v;
      const [I, E] = y;
      (h = s.merge(E, (v = r()) != null ? v : p));
      n(h, true);

      if (I) {
        return f();
      }
    })
      .then(() => {
      g?.(h, undefined);
      (h = r());
      (i = true);

      l.forEach(y => y(h));
    })
      .catch((y) => {
        g?.(undefined, y);
      });
  };

  (o.persist = {
    setOptions: (_) => {
      (s = { ...s, ..._ });

      if (_.storage) {
        (s_storage = _.storage);
      }
    },
    clearStorage: () => {
      s_storage?.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => m(),
    hasHydrated: () => i,
    onHydrate: _ => {
      c.add(_);

      return () => {
        c.delete(_);
      };
    },
    onFinishHydration: _ => {
      l.add(_);

      return () => {
        l.delete(_);
      };
    },
  });

  if (!s.skipHydration) {
    m();
  }

  return h || p;
};

const Rl = rt(e => ({
  isOpen: false,
  images: [],
  initialIndex: 0,
  sourceRect: null,
  resolveSourceRect: null,

  open: (t, n = 0, r = null, o = null) => e({
    isOpen: true,
    images: t,
    initialIndex: n,
    sourceRect: r,
    resolveSourceRect: o,
  }),

  close: () => e({
    isOpen: false,
    images: [],
    initialIndex: 0,
    sourceRect: null,
    resolveSourceRect: null,
  })
}));

const _g = rt(e => ({
  isOpen: false,
  url: null,
  open: t => e({ isOpen: true, url: t }),
  close: () => e({ isOpen: false, url: null })
}));

const yg = rt((e, t) => ({
  navigatedInApp: false,

  markNavigated: () => {
    if (!t().navigatedInApp) {
      e({ navigatedInApp: true });
    }
  }
}));

const Ve = {
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

function Oe(e) {
  return (
    e instanceof Error && "status" in e && "code" in e && e.name === "ApiError"
  );
}

const le = {
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

const vg = 4000/* 4e3 */;

const Ir = rt((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const o = n.duration ?? vg;

    e(s => ({
      toasts: [...s.toasts, { ...n, id: r, duration: o }]
    }));

    if (o > 0) {
      setTimeout(() => {
        t().removeToast(r);
      }, o);
    }

    return r;
  },

  removeToast: (n) => {
    e(r => ({
      toasts: r.toasts.filter(o => o.id !== n)
    }));
  }
}));

const _t = {
  success: (e, t) => Ir.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) => Ir.getState().addToast({ type: "error", message: e, duration: t }),
};

function wg() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    (t = crypto.randomUUID());
    localStorage.setItem(e, t);
  }

  return t;
}
const ia = wg();
class Pl {
  baseURL;
  defaultTimeout;
  defaultHeaders;
  accessToken = null;
  refreshTokenCallback = null;
  onUnauthorizedCallback = null;
  isRefreshing = false;
  refreshPromise = null;
  constructor(t) {
    (this.baseURL = t.baseURL);
    (this.defaultTimeout = t.timeout ?? 30000/* 3e4 */);

    (this.defaultHeaders = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        ...t.headers,
      });
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
    if (t.status !== Ve.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        _t.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      _t.error(t.message || "Произошла ошибка");
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

    n.set("X-Device-Id", ia);
    return n;
  }
  async handleResponse(t) {
    if (t.status === Ve.NO_CONTENT) {
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
      const s = r_error && typeof r_error == "object" ? r_error : r;
      let s_errors = s.errors;
      if (s.violations && Array.isArray(s.violations)) {
        s_errors = {};
        for (const c of s.violations) {
          if (!s_errors[c.field]) {
            (s_errors[c.field] = []);
          }

          s_errors[c.field].push(c.message);
        }
      }
      throw this.createApiError(
        t.status,
        s.detail || s.message || s.title || "Request failed",
        s.code || this.mapStatusToErrorCode(t.status),
        s_errors
      );
    }
    return n;
  }
  mapStatusToErrorCode(t) {
    switch (t) {
      case Ve.BAD_REQUEST:
        {
          return le.BAD_REQUEST;
        }
      case Ve.UNAUTHORIZED:
        {
          return le.UNAUTHORIZED;
        }
      case Ve.FORBIDDEN:
        {
          return le.ACCESS_DENIED;
        }
      case Ve.NOT_FOUND:
        {
          return le.ENTITY_NOT_FOUND;
        }
      case Ve.CONFLICT:
        {
          return le.ENTITY_ALREADY_EXISTS;
        }
      case Ve.UNPROCESSABLE_ENTITY:
        {
          return le.VALIDATION_ERROR;
        }
      case Ve.TOO_MANY_REQUESTS:
        {
          return le.RATE_LIMIT_EXCEEDED;
        }
      default:
        {
          return le.UNKNOWN_ERROR;
        }
    }
  }
  createApiError(t, n, r, o) {
    const s = new Error(n);
    (s.status = t);
    (s.code = r);
    (s.errors = o);
    (s.name = "ApiError");
    return s;
  }
  async refreshAccessToken() {
    return this.refreshTokenCallback
      ? this.isRefreshing && this.refreshPromise
        ? this.refreshPromise
        : ((this.isRefreshing = true),
          (this.refreshPromise = this.refreshTokenCallback().finally(() => {
      (this.isRefreshing = false);
      (this.refreshPromise = null);
    })),
          this.refreshPromise)
      : null;
  }
  async executeRequest(t, n, r, o, s = false) {
    const i = this.buildUrl(n);
    const c = this.buildHeaders(o?.headers);
    const l = new AbortController();
    const u = o?.timeout ?? this.defaultTimeout;

    const f = setTimeout(() => l.abort(), u);

    try {
      const p =
          r instanceof ArrayBuffer ||
          (typeof Uint8Array !== "undefined" && r instanceof Uint8Array) ||
          (typeof Blob !== "undefined" && r instanceof Blob)
            ? r
            : r != null
            ? JSON.stringify(r)
            : undefined;

      const { headers, ...m } = o ?? {};

      const _ = await fetch(i, {
        method: t,
        body: p,
        signal: l.signal,
        credentials: "include",
        ...m,
        headers: c,
      });

      clearTimeout(f);
      const b =
        n.startsWith("/auth/") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/reset-") ||
        n.startsWith("/login/");
      if (_.status === Ve.UNAUTHORIZED && !s && !b && this.accessToken) {
        const g = await this.refreshAccessToken();
        if (g) {
          this.setAccessToken(g);
          return this.executeRequest(t, n, r, o, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Ve.UNAUTHORIZED,
          "Session expired",
          le.UNAUTHORIZED
        );
      }
      return await this.handleResponse(_);
    } catch (d) {
      clearTimeout(f);

      if (d instanceof Error) {
        if (d.name === "AbortError") {
          const h = this.createApiError(0, "Request timeout", le.TIMEOUT);

          if (!s) {
            this.notifyError(h);
          }

          throw h;
        }
        if (d.name === "ApiError") {
          if (!s) {
            this.notifyError(d);
          }

          throw d;
        }
        const p = this.createApiError(
          0,
          d.message || "Network error",
          le.NETWORK_ERROR
        );

        if (!s) {
          this.notifyError(p);
        }

        throw p;
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
    const o = this.buildHeaders(n?.headers);
    const s = new AbortController();
    const i = n?.timeout ?? this.defaultTimeout;

    const c = setTimeout(() => s.abort(), i);

    try {
      const l = await fetch(r, {
        method: "HEAD",
        headers: o,
        signal: s.signal,
        credentials: "include",
      });
      clearTimeout(c);
      return l.status;
    } catch (l) {
      clearTimeout(c);

      throw l instanceof Error && l.name === "AbortError"
        ? this.createApiError(0, "Request timeout", le.TIMEOUT)
        : this.createApiError(0, "Network error", le.NETWORK_ERROR);
    }
  }
  async uploadFormData(t, n, r, o = false) {
    const s = this.buildUrl(t);
    const i = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": ia };

    if (this.accessToken) {
      (i.Authorization = `Bearer ${this.accessToken}`);
    }

    const c = new AbortController();
    const l = r?.timeout ?? this.defaultTimeout;

    const u = setTimeout(() => c.abort(), l);

    try {
      const f = await fetch(s, {
        method: "POST",
        headers: i,
        body: n,
        signal: c.signal,
        credentials: "include",
      });
      clearTimeout(u);

      if (f.status === Ve.UNAUTHORIZED && !o && this.accessToken) {
        const d = await this.refreshAccessToken();
        if (d) {
          this.setAccessToken(d);
          return this.uploadFormData(t, n, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Ve.UNAUTHORIZED,
          "Session expired",
          le.UNAUTHORIZED
        );
      }

      return await this.handleResponse(f);
    } catch (f) {
      clearTimeout(u);

      if (f instanceof Error) {
        if (f.name === "AbortError") {
          const p = this.createApiError(0, "Request timeout", le.TIMEOUT);

          if (!o) {
            this.notifyError(p);
          }

          throw p;
        }
        if (f.name === "ApiError") {
          if (!o) {
            this.notifyError(f);
          }

          throw f;
        }
        const d = this.createApiError(
          0,
          f.message || "Network error",
          le.NETWORK_ERROR
        );

        if (!o) {
          this.notifyError(d);
        }

        throw d;
      }

      throw f;
    }
  }
}
const O = new Pl({ baseURL: "/api", timeout: 30000/* 3e4 */ });
const Ne = new Pl({ baseURL: "/api/v1/auth", timeout: 30000/* 3e4 */ });

const Es = rt((e, t) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    if (!t().loaded) {
      try {
        const n = await O.get("/v1/portal");
        e({ portal: n, loaded: true });
      } catch {
        e({ loaded: true });
      }
    }
  }
}));

const Al = () => Es(e => e.portal);

const zn = new Set();
let Fn = null;
const Eg = 30000/* 3e4 */;
function Sg() {
  if (Fn === null) {
    (Fn = window.setInterval(() => {
        zn.forEach(e => e());
      }, Eg));
  }
}
function bg() {
  if (Fn !== null) {
    clearInterval(Fn);
    (Fn = null);
  }
}
function Cg(e) {
  zn.add(e);

  if (zn.size === 1) {
    Sg();
  }
}
function Tg(e) {
  zn.delete(e);

  if (zn.size === 0) {
    bg();
  }
}
function oo(e) {
  const t = Date.now();
  const n = Math.floor((t - e.getTime()) / 1000/* 1e3 */);
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
function Ol(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const r = n ? t : 0;

  const [o, s] = L(() => n ? oo(new Date(r)) : "");

  F(() => {
    if (!n) {
      s("");
      return;
    }
    const i = new Date(r);
    s(oo(i));
    const c = () => {
      s(oo(i));
    };
    Cg(c);

    return () => Tg(c);
  }, [r, n]);

  return o;
}
const aa = 1174;
function St() {
  const [e, t] = L(() => typeof window === "undefined" ? false : window.innerWidth < aa);

  F(() => {
    const n = window.matchMedia(`(max-width: ${aa - 1}px)`);

    const r = (o) => {
      t(o.matches);
    };

    t(n.matches);
    n.addEventListener("change", r);

    return () => {
      n.removeEventListener("change", r);
    };
  }, []);

  return e;
}
const Ig = yn({ isHidden: false });

const Ng = () => {
  const [e, t] = L(false);
  const n = R(0);

  F(() => {
    const r = () => {
      const window_scrollY = window.scrollY;
      const s = window_scrollY - n.current;

      if (s > 10 && window_scrollY > 50) {
        t(true);
      } else if (s < -10) {
        t(false);
      }

      (n.current = window_scrollY);
    };
    window.addEventListener("scroll", r, { passive: true });

    return () => window.removeEventListener("scroll", r);
  }, []);

  return e;
};

function Vr(e = "", t = []) {
  const [n, r] = L(e);
  const [o, s] = L(t);
  const i = R(null);

  const c = N((f, d) => {
    r(f);
    s(d);
  }, []);

  const l = N((f) => {
    i.current?.insertText(f);
  }, []);

  const u = N(() => {
    r("");
    s([]);
  }, []);

  return {
    text: n,
    spans: o,
    editorRef: i,
    handleChange: c,
    insertText: l,
    reset: u,
    setText: r,
    setSpans: s,
  };
}
function kg({
  sentinelRef: e,
  hasMore: t,
  isLoading: n,
  onLoadMore: r,
  rootMargin: o = "100px",
}) {
  F(() => {
    if (!t || n) {
      return;
    }
    const e_current = e.current;
    if (!e_current) {
      return;
    }
    const i = new IntersectionObserver(
      (c) => {
        if (c[0].isIntersecting) {
          r();
        }
      },
      { rootMargin: o }
    );
    i.observe(e_current);

    return () => i.disconnect();
  }, [t, n, r, o, e]);
}
function Rg({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  gap: r = 0,
  getItemKey: o = l => l,
  initialMeasuredHeights: s,
  scrollElement: i,
  initialScrollTop: c,
}) {
  const [, l] = L(0);

  const u = () => i
    ? Math.max(0, i.scrollTop)
    : c !== undefined
    ? c
    : typeof window !== "undefined"
    ? Math.max(0, window.scrollY)
    : 0;

  const f = () => i ? i.clientHeight : typeof window !== "undefined" ? window.innerHeight : 0;

  const d = R(s ?? new Map());
  const p = R(null);
  const h = R(null);
  const m = R(new Map());

  const _ = S => d.current.get(S) ?? t;

  const b = (S) => {
    let C = 0;
    for (let T = 0; T < S; T++) {
      C += _(T) + r;
    }
    return C;
  };

  const g = () => {
    if (e === 0) {
      return 0;
    }
    let S = 0;
    for (let C = 0; C < e; C++) {
      S += _(C);
    }
    (S += Math.max(0, e - 1) * r);
    return S;
  };

  const y = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const S = u();
    const C = f();
    let T = 0;
    let w = 0;
    for (let k = 0; k < e; k++) {
      const D = _(k) + r;
      if (w + D > S) {
        T = k;
        break;
      }
      w += D;
    }
    let P = T;
    let x = 0;
    for (let k = T; k < e && ((x += _(k) + r), (P = k), !(x >= C)); k++)
      {}
    return { start: Math.max(0, T - n), end: Math.min(e - 1, P + n) };
  };

  const v = () => {
    if (e === 0) {
      return [];
    }
    const { start, end } = y();
    const T = [];
    for (let w = start; w <= end; w++) {
      T.push({ index: w, key: o(w), start: b(w) });
    }
    return T;
  };

  if (!h.current) {
    (h.current = new ResizeObserver((S) => {
      let C = false;
      for (const T of S) {
        const T_target = T.target;
        const P = m.current.get(T_target);
        if (P === undefined) {
          continue;
        }
        const x = T.contentRect.height;

        if (x > 0 && d.current.get(P) !== x) {
          d.current.set(P, x);
          (C = true);
        }
      }

      if (C) {
        l(T => T + 1);
      }
    }));
  }

  const I = N((S, C) => {
    if (!S) {
      return;
    }
    m.current.set(S, C);
    h.current?.observe(S);
    const T = S.getBoundingClientRect().height;

    if (T > 0 && d.current.get(C) !== T) {
      d.current.set(C, T);
      l(w => w + 1);
    }
  }, []);

  Tn(() => {
    const S = i ?? window;

    const C = () => {
      if (!p.current) {
        (p.current = requestAnimationFrame(() => {
          (p.current = null);

          l(T => T + 1);
        }));
      }
    };

    S.addEventListener("scroll", C, { passive: true });

    l(T => T + 1);

    return () => {
      S.removeEventListener("scroll", C);

      if (p.current) {
        cancelAnimationFrame(p.current);
      }
    };
  }, [i]);

  F(
    () => () => {
      h.current?.disconnect();
      m.current.clear();
    },
    []
  );

  const E = N(() => new Map(d.current), []);
  return {
    virtualItems: v(),
    totalSize: g(),
    measureElement: I,
    getMeasuredHeights: E,
  };
}

const Pg = ({ size: e = 18 }) => a("svg", {
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
    a("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
    a("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
  ],
});

const Ag = ({ size: e = 18 }) => a("svg", {
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
    a("polyline", { points: "16 18 22 12 16 6" }),
    a("polyline", { points: "8 6 2 12 8 18" }),
  ],
});

const Og = ({ size: e = 18 }) => a("svg", {
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
    a("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
    a("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
    a("line", { x1: "15", y1: "4", x2: "9", y2: "20" }),
  ],
});

const xl = ({ size: e = 18 }) => a("svg", {
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
    a("path", {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    }),
    a("path", {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    }),
  ],
});

const xg = ({ size: e = 18 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: a("path", {
    d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
  }),
});

const Lg = ({ size: e = 18 }) => a("svg", {
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
    a("path", {
      d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94",
    }),
    a("path", {
      d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19",
    }),
    a("line", { x1: "1", y1: "1", x2: "23", y2: "23" }),
    a("path", { d: "M14.12 14.12a3 3 0 1 1-4.24-4.24" }),
  ],
});

const $g = ({ size: e = 18 }) => a("svg", {
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
    a("path", { d: "M16 4H9a3 3 0 0 0-3 3c0 1.66 1.34 3 3 3h6" }),
    a("path", { d: "M8 20h7a3 3 0 0 0 3-3c0-1.66-1.34-3-3-3H4" }),
    a("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
  ],
});

const Mg = ({ size: e = 18 }) => a("svg", {
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
    a("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
    a("line", { x1: "4", y1: "21", x2: "20", y2: "21" }),
  ],
});

const Dg = ({ size: e = 18 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 18 18",
  children: a("g", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    children: [
      a("path", {
        d: "M9 2c-.53 0-1.04.219-1.414.608C7.21 2.998 7 3.526 7 4.077v4.846c0 .55.21 1.08.586 1.469.375.39.884.608 1.414.608.53 0 1.04-.219 1.414-.608.375-.39.586-.918.586-1.469V4.077c0-.55-.21-1.08-.586-1.469A1.963 1.963 0 0 0 9 2Z",
      }),
      a("path", {
        d: "M14 8v1.333c0 1.238-.527 2.425-1.464 3.3C11.598 13.508 10.326 14 9 14s-2.598-.492-3.536-1.367C4.527 11.758 4 10.571 4 9.333V8M9 14v2",
      }),
    ],
  }),
});

const Ug = ({ size: e = 24 }) => a("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: a("path", { d: "M8 5v14l11-7z" }),
});

const Fg = ({ size: e = 24 }) => a("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    a("path", {
      d: "M5 12L12 5L19 12",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    a("path", {
      d: "M12 19V5",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  ],
});

const Ll = ({ size: e = 20 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 20 20",
  children: a("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.833",
    d: "m17.867 9.208-7.659 7.659a5.003 5.003 0 1 1-7.075-7.075l7.659-7.659a3.335 3.335 0 1 1 4.716 4.717l-7.666 7.658a1.667 1.667 0 1 1-2.359-2.358l7.075-7.067",
  }),
});

const Bg = ({ size: e = 8 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 8 8",
  children: [
    a("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      clipPath: "url(#af)",
      children: a("path", { d: "M1 4h6M4 1v6" }),
    }),
    a("defs", {
      children: a("clipPath", {
        id: "af",
        children: a("path", { fill: "#fff", d: "M0 0h8v8H0z" }),
      }),
    }),
  ],
});

const Hg = ({ size: e = 8 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 8 8",
  children: a("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M1 4h6",
  }),
});

const Vg = () => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "36",
  height: "18",
  fill: "none",
  children: [
    a("path", { fill: "currentColor", d: "M12 3V0h12v3h-4v11h-4V3h-4Z" }),
    a("path", {
      fill: "currentColor",
      d: "M12 3V0h12v3h-4v11h-4V3h-4ZM9 0 3 9V0H0v14h3l6-9v9h3V0H9Z",
    }),
    a("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M34 11h2v7h-3v-4h-9v4h-3v-7c3 0 3-4 3-11h10v11Zm-7-8v8h4V3h-4Z",
      "clip-rule": "evenodd",
    }),
  ],
});

const ct = ({ size: e = 24 }) => a("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    a("path", {
      d: "M18 6L6 18",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    a("path", {
      d: "M6 6L18 18",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  ],
});

const $l = ({ filled: e = false, size: t = 20 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: t,
  height: t,
  fill: "none",
  viewBox: "0 0 20 20",
  children: a("path", {
    stroke: "currentColor",
    strokeWidth: 2,
    d: "M14.953 5.046c-2.73-2.728-7.173-2.728-9.903 0-2.07 2.07-2.634 5.247-1.41 7.888.136.336.232.59.232.798 0 .247-.105.553-.205.849-.195.573-.416 1.222.058 1.696.475.475 1.125.251 1.697.055.294-.1.598-.205.84-.205.215 0 .486.109.798.235a7.034 7.034 0 0 0 7.893-1.412c2.73-2.73 2.73-7.172 0-9.904Z",
    clipRule: "evenodd",
    fill: e ? "currentColor" : "none",
  }),
});

const Ml = ({ size: e = 18 }) => a("svg", {
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
    a("path", {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
    }),
    a("path", {
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
    }),
  ],
});

const Wg = ({ size: e = 24 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: [
    a("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      strokeWidth: "2",
    }),
    a("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M15 9l-6 6m0-6l6 6",
    }),
  ],
});

const Dl = () => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  children: a("path", {
    fill: "currentColor",
    "fill-rule": "evenodd",
    d: "M20.689 10.968a2.806 2.806 0 0 0-2.244-1.108H5.555c-.887 0-1.705.404-2.244 1.107a2.808 2.808 0 0 0-.485 2.455l1.65 6.112a2.83 2.83 0 0 0 2.729 2.09h9.589a2.832 2.832 0 0 0 2.729-2.09l1.65-6.111a2.804 2.804 0 0 0-.484-2.455ZM8.436 3.875h7.125a.75.75 0 0 0 0-1.5H8.436a.75.75 0 0 0 0 1.5ZM5.682 7.253h12.634a.75.75 0 0 0 0-1.5H5.682a.75.75 0 0 0 0 1.5Z",
    "clip-rule": "evenodd",
  }),
});

const Ul = ({ size: e = 18 }) => a("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: a("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.0463 8.361L19.6973 3.35C19.8203 3.118 19.8133 2.839 19.6773 2.613C19.5413 2.387 19.2973 2.25 19.0343 2.25H4.96533C4.55133 2.25 4.21533 2.586 4.21533 3V21C4.21533 21.414 4.55133 21.75 4.96533 21.75C5.37933 21.75 5.71533 21.414 5.71533 21V14.544L19.0443 14.365C19.3073 14.361 19.5483 14.221 19.6813 13.995C19.8143 13.768 19.8183 13.489 19.6943 13.258L17.0463 8.361Z",
    fill: "currentColor",
  }),
});

const Fl = ({ size: e = 24 }) => a("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [
    a("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    a("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
    a("polyline", { points: "21 15 16 10 5 21" }),
  ],
});

const Ss = ({ filled: e = false, size: t = 20, className: n }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: t,
  height: t,
  viewBox: "0 0 20 20",
  fill: "none",
  className: n,
  children: a("path", {
    fill: e ? "currentColor" : "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.667",
    d: "M10 4.583C8.75 2.917 6.25 2.5 4.583 3.75 2.917 5 2.083 7.5 3.333 10S10 16.667 10 16.667 15.417 12.5 16.667 10s0-5-1.667-6.25-4.167-.833-5 .833Z",
  }),
});

const bs = ({ size: e = 24 }) => a("svg", {
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
  children: a("path", { d: "M19 12a7 7 0 1 1-4.83-6.66" }),
});

const jg = ({ size: e = 24 }) => a("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    a("path", {
      d: "M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    a("path", {
      d: "M16 17L21 12L16 7",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    a("path", {
      d: "M21 12H9",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  ],
});

const Bl = ({ size: e = 18 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 18 18",
  children: a("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14.25 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
  }),
});

const Hl = ({ size: e = 24 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: a("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.742 13.807c-.86-1.832-.837-2.52-.798-3.773.01-.296.02-.617.02-.986C18.964 6.122 16.804 2 12 2 7.197 2 5.036 6.122 5.036 9.048c0 .368.01.69.02.986.04 1.252.062 1.941-.807 3.797-.372.928-.327 1.73.135 2.382C5.492 17.783 8.7 18 12 18s6.508-.216 7.616-1.787c.463-.653.508-1.454.125-2.406Zm-4.686 5.198c-1.848.193-3.852.192-6.13-.002a.873.873 0 0 0-.835.437.763.763 0 0 0 .125.893C9.236 21.407 10.578 22 11.994 22h.002c1.42 0 2.765-.592 3.788-1.667a.765.765 0 0 0 .122-.9c-.162-.294-.495-.458-.85-.428Z",
    clipRule: "evenodd",
  }),
});

const zg = ({ size: e = 20 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 20 20",
  fill: "none",
  children: a("path", {
    fill: "currentColor",
    d: "M10.004 1C14.92 1 18.976 4.61 19 8.955c0 2.747-2.255 5-5.002 5h-1.797a1.477 1.477 0 0 0-1.502 1.501c0 .426.134.753.395 1.013.231.26.393.618.393 1.011 0 .848-.65 1.52-1.483 1.52C5.052 19 1 14.95 1 10s4.052-9 9.004-9ZM5.25 9a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm9-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-7-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4-1a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
  }),
});

const Vl = ({ size: e = 24 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: a("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.998 11a3.996 3.996 0 0 0 4-4c.084-2.213-1.702-4-4-4A3.995 3.995 0 0 0 8 7c0 2.213 1.787 4 3.998 4Zm6.94 6.878c-.3-1.04-.9-1.986-2.097-2.743C15.843 14.473 14.246 14 12.05 14c-4.292 0-6.39 1.892-6.987 3.878-.2.568.1 1.136.598 1.42C7.458 20.431 9.654 21 12.05 21c2.296 0 4.492-.662 6.288-1.703.5-.284.8-.851.6-1.419Z",
    clipRule: "evenodd",
  }),
});

const ca = ({ size: e = 18 }) => a("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: a("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.0397 9.25349L14.7397 3.95349C13.9837 3.19649 12.6657 3.19649 11.9097 3.95349L11.3187 4.54549C10.7487 5.11449 10.5767 5.96749 10.8957 6.75249C11.0497 7.12649 10.9647 7.55249 10.6797 7.83949L9.34373 9.17449C9.22773 9.28849 9.08673 9.37449 8.93473 9.42249L5.77073 10.4125C5.46773 10.5085 5.18573 10.6795 4.95673 10.9065C4.57773 11.2855 4.36973 11.7875 4.36973 12.3225C4.36973 12.8575 4.57873 13.3585 4.95673 13.7355L7.07573 15.8545L3.59573 19.3345C3.30273 19.6275 3.30273 20.1025 3.59573 20.3955C3.74173 20.5415 3.93373 20.6145 4.12573 20.6145C4.31773 20.6145 4.50973 20.5415 4.65573 20.3955L8.13573 16.9145L10.2577 19.0365C10.6467 19.4255 11.1587 19.6195 11.6707 19.6195C12.1837 19.6195 12.6957 19.4245 13.0867 19.0355C13.3147 18.8055 13.4847 18.5235 13.5797 18.2205L14.5687 15.0605C14.6187 14.9045 14.7037 14.7635 14.8167 14.6505L16.1537 13.3125C16.4387 13.0265 16.8627 12.9415 17.2737 13.1085C18.0197 13.4155 18.8747 13.2465 19.4477 12.6745L20.0397 12.0815C20.8187 11.3015 20.8187 10.0325 20.0397 9.25349Z",
    fill: "currentColor",
  }),
});

const Cs = ({ size: e = 24 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: a("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M5 12h14M12 5v14",
  }),
});

const qg = ({ size: e = 20 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: a("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M18 20V10M12 20V4M6 20v-6",
  }),
});

const Ts = ({ size: e = 20 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: [
    a("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m2 9 3-3 3 3",
    }),
    a("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 18H7a2 2 0 0 1-2-2V6M22 15l-3 3-3-3",
    }),
    a("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11 6h6a2 2 0 0 1 2 2v10",
    }),
  ],
});

const Wl = ({ size: e = 24 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  children: a("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3",
    d: "m19.5 19.5-3-3M11 4.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Z",
  }),
});

const Gg = ({ size: e = 20, color: t = "currentColor" }) => a("svg", {
  width: e,
  height: e,
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    a("path", {
      d: "M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z",
      stroke: t,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    a("path", {
      d: "M7.6 11.908c.585.76 1.445 1.234 2.4 1.234.956 0 1.816-.474 2.4-1.234M7.308 7.504v-.043m-.038-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374ZM12.692 7.504v-.043m-.005-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374Z",
      stroke: t,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  ],
});

const Yg = ({ size: e = 24 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: [
    a("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      strokeWidth: "2",
    }),
    a("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M8 12l3 3 5-6",
    }),
  ],
});

const Xg = ({ size: e = 48 }) => a("svg", {
  width: e,
  height: e,
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    a("circle", {
      cx: "24",
      cy: "24",
      r: "24",
      fill: "#2AABEE",
      fillOpacity: "0.12",
    }),
    a("svg", {
      x: "8",
      y: "8",
      width: "32",
      height: "32",
      viewBox: "0 0 1000 1000",
      children: a("path", {
        d: "M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z",
        fill: "#2AABEE",
      }),
    }),
  ],
});

const jl = ({ size: e = 18 }) => a("svg", {
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
    a("polyline", { points: "3 6 5 6 21 6" }),
    a("path", {
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    }),
    a("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
    a("line", { x1: "14", y1: "11", x2: "14", y2: "17" }),
  ],
});

const Kg = ({ size: e = 16 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 16 16",
  children: [
    a("path", {
      fill: "#0080FF",
      d: "M6.724.821a1.63 1.63 0 0 1 2.858.051l.556 1.042a1.634 1.634 0 0 0 1.672.856l1.155-.166c1.263-.181 2.238 1.108 1.742 2.303L14.253 6a1.69 1.69 0 0 0 .385 1.863l.847.815c.927.891.544 2.47-.685 2.821l-1.122.32a1.663 1.663 0 0 0-1.192 1.468l-.098 1.181c-.108 1.294-1.56 1.974-2.596 1.216l-.946-.693a1.62 1.62 0 0 0-1.872-.033l-.969.658c-1.06.721-2.49-.01-2.552-1.306l-.058-1.184a1.666 1.666 0 0 0-1.141-1.51l-1.11-.36C-.073 10.864-.402 9.272.556 8.413l.874-.783a1.69 1.69 0 0 0 .448-1.849l-.416-1.108c-.454-1.212.565-2.466 1.821-2.24l1.148.207a1.632 1.632 0 0 0 1.7-.796L6.724.82Z",
    }),
    a("path", {
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.333",
      d: "M10.667 6.667 7.11 10.222 5.334 8.444",
    }),
  ],
});

const Zg = ({ size: e = 20 }) => a("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 20 20",
  children: [
    a("path", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      d: "M2 10s2.91-6 8-6 8 6 8 6-2.91 6-8 6-8-6-8-6Z",
    }),
    a("path", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      d: "M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    }),
  ],
});

function Jg(e) {
  const t = er()[0];
  return e.children({
    url: t.url,
    path: t.path,
    matches: Cl(t.path || t.url, e.path, {}) !== false,
  });
}
const Qg = "x1r0";
const e_ = "R1L0";
const t_ = "uUJ7";
const n_ = "nBTO";
const r_ = "fSTq";
const o_ = "WPet";
const s_ = "mKLY";
const i_ = "p40b";
const a_ = "ULud";
const c_ = "pvHm";
const l_ = "gZUg";
const u_ = "RsLP";
const d_ = "W9sS";

const xe = {
  aside: Qg,
  asideBottom: e_,
  logoutButton: t_,
  asideBrand: n_,
  asideBrandVersion: r_,
  nav: o_,
  navItem: s_,
  active: i_,
  iconWrapper: a_,
  portalButton: c_,
  portalActive: l_,
  portalImage: u_,
  badge: d_,
};

const ge = {
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

const la = [
  ge.LOGIN,
  ge.REGISTER,
  ge.FORGOT_PASSWORD,
  ge.RESET_PASSWORD,
  ge.VERIFY_EMAIL,
  ge.TERMS,
  ge.PRIVACY,
  ge.COOKIES,
  ge.EXTERNAL,
  ge.SUPPORT,
  ge.CHILD_SAFETY,
  ge.SUBSCRIPTION_TERMS,
];

const Is = [
  ge.LOGIN,
  ge.REGISTER,
  ge.FORGOT_PASSWORD,
  ge.RESET_PASSWORD,
  ge.VERIFY_EMAIL,
  ge.ONBOARDING,
];

const $ = {
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
    profile: e => `/users/${e}`,
    updateProfile: "/users/me",
    privacy: "/users/me/privacy",
    follow: e => `/users/${e}/follow`,
    followers: e => `/users/${e}/followers`,
    following: e => `/users/${e}/following`,
    whoToFollow: "/users/suggestions/who-to-follow",
    topClans: "/users/stats/top-clans",
    search: "/users/search",
    pins: "/users/me/pins",
    setPin: "/users/me/pin",
    followStatus: "/users/follow-status",
    block: e => `/users/${e}/block`,
    blocked: "/users/me/blocked",
    checkUsername: "/users/check-username",
    deleteAccount: "/users/me",
    restoreAccount: "/users/me/restore",
  },
  posts: {
    list: "/posts",
    single: e => `/posts/${e}`,
    create: "/posts",
    update: e => `/posts/${e}`,
    delete: e => `/posts/${e}`,
    restore: e => `/posts/${e}/restore`,
    like: e => `/posts/${e}/like`,
    repost: e => `/posts/${e}/repost`,
    dwellLog: "/v1/i",
    interactionLog: "/v1/x",
    pin: e => `/posts/${e}/pin`,
    pollVote: e => `/posts/${e}/poll/vote`,
    byUser: e => `/posts/user/${e}`,
    likedByUser: e => `/posts/user/${e}/liked`,
    comments: e => `/posts/${e}/comments`,
  },
  comments: {
    edit: e => `/comments/${e}`,
    delete: e => `/comments/${e}`,
    restore: e => `/comments/${e}/restore`,
    like: e => `/comments/${e}/like`,
    replies: e => `/comments/${e}/replies`,
  },
  notifications: {
    list: "/notifications/",
    count: "/notifications/count",
    markRead: e => `/notifications/${e}/read`,
    markReadBatch: "/notifications/read-batch",
    markAllRead: "/notifications/read-all",
    stream: "/notifications/stream",
    settings: "/notifications/settings",
  },
  files: {
    upload: "/files/upload",
    get: e => `/files/${e}`,
    delete: e => `/files/${e}`,
  },
  reports: { create: "/reports" },
  hashtags: {
    search: "/hashtags",
    trending: "/hashtags/trending",
    posts: e => `/hashtags/${encodeURIComponent(e)}/posts`,
  },
  search: { global: "/search" },
  subscription: {
    status: "/v1/subscription/",
    pay: "/v1/subscription/pay",
    autoRenewal: "/v1/subscription/auto-renewal",
    bindCard: "/v1/subscription/bind-card",
    methods: "/v1/subscription/methods",
    methodDefault: e => `/v1/subscription/methods/${e}/default`,
    methodDelete: e => `/v1/subscription/methods/${e}`,
  },
  verification: {
    status: "/verification/status",
    submit: "/verification/submit",
  },
  platform: { changelog: "/platform/changelog" },
};

const f_ = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const h_ = ["video/mp4", "video/webm", "video/quicktime"];
const jo = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const p_ = ".mp4,.webm,.mov";

const ln = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await O.uploadFormData($.files.upload, t, { timeout: 300 * 1000/* 1e3 */ });
  },
  async deleteFile(e) {
    await O.delete($.files.delete(e));
  },
  isValidImageType(e) {
    return f_.includes(e.type);
  },
  isValidVideoType(e) {
    return h_.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

const m_ = {
  [le.CONTENT_MODERATION_FAILED]: "Изображение содержит запрещённый контент",
  [le.FILE_TOO_LARGE]: "Файл слишком большой",
  [le.UNSUPPORTED_FILE_TYPE]: "Неподдерживаемый формат файла",
  [le.UPLOAD_FAILED]: "Не удалось загрузить файл",
  [le.VIDEO_REQUIRES_VERIFICATION]:
    "Загрузка видео доступна только верифицированным пользователям",
  [le.RATE_LIMIT_EXCEEDED]: "Слишком много запросов. Попробуйте позже",
  [le.UNAUTHORIZED]: "Требуется авторизация",
  [le.ACCESS_DENIED]: "Доступ запрещён",
  [le.NETWORK_ERROR]: "Ошибка сети. Проверьте подключение",
  [le.TIMEOUT]: "Превышено время ожидания",
};

function g_(e, t = "Произошла ошибка") {
  return e ? m_[e] ?? t : t;
}
class Ns {
  cache = new Map();
  maxSize;
  ttl;
  constructor(t = 100, n = 300 * 1000/* 1e3 */) {
    (this.maxSize = t);
    (this.ttl = n);
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
function ua(e) {
  const t = { ...e };

  if ("verified" in t && !("isVerified" in t)) {
    (t.isVerified = t.verified);
  }

  if ("isVerified" in t) {
    (t.isVerified = false);
  }

  if ((!("isPrivate" in t) || t.isPrivate === undefined)) {
    (t.isPrivate = false);
  }

  if (typeof t.banner == "string") {
    (t.banner = { url: t.banner });
  }

  if (!t.stats &&
    ("followersCount" in t || "followingCount" in t)) {
    (t.stats = {
        followers: t.followersCount ?? 0,
        following: t.followingCount ?? 0,
      });
  }

  if (!t.interaction &&
    ("isFollowing" in t ||
      "isFollowedBy" in t ||
      "isBlockedByMe" in t ||
      "isBlocking" in t)) {
    (t.interaction = {
        isFollowing: t.isFollowing ?? false,
        isFollowedBy: t.isFollowedBy ?? false,
        hasOutgoingRequest: t.hasOutgoingRequest ?? false,
        hasIncomingRequest: t.hasIncomingRequest ?? false,
        isBlocking: t.isBlocking ?? t.isBlockedByMe ?? false,
        isBlockedBy: t.isBlockedBy ?? false,
      });
  }

  if (!t.privacySettings &&
    ("wallAccess" in t || "likesVisibility" in t)) {
    (t.privacySettings = {
        whoCanPostOnWall: t.wallAccess ?? "everyone",
        whoCanSeeMyPostReactions: t.likesVisibility ?? "everyone",
      });
  }

  return t;
}
const Vt = new Ns(100, 300 * 1000/* 1e3 */);
const __ = 60 * 1000/* 1e3 */;
setInterval(() => Vt.cleanup(), 120 * 1000/* 1e3 */);
const ar = {
  async checkUsername(e) {
    return (
      await O.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await O.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await O.get($.users.me);
    return ua(e);
  },
  async updateProfile(e) {
    return await O.put($.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = Vt.get(t);

    if (n && Vt.isFresh(t, __)) {
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
    const n = await O.get($.users.profile(e));
    const r = ua(n);
    Vt.set(t, r);
    return r;
  },
  invalidateProfileCache(e) {
    Vt.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const r = Vt.get(n);

    if (r) {
      Vt.set(n, { ...r, ...t });
    }
  },
  async followUser(e) {
    await O.post($.users.follow(e), {});
  },
  async unfollowUser(e) {
    await O.delete($.users.follow(e));
  },
  async pinPost(e) {
    await O.post($.posts.pin(e));
  },
  async unpinPost(e) {
    await O.delete($.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await O.get($.users.privacy);
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
      (t.wallAccess = e.whoCanPostOnWall);
    }

    if (e.whoCanSeeMyPostReactions) {
      (t.likesVisibility = e.whoCanSeeMyPostReactions);
    }

    if (e.showLastSeen !== undefined) {
      (t.showLastSeen = e.showLastSeen);
    }

    await O.put($.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await O.get($.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await O.post($.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await O.get($.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await O.put($.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await O.delete($.users.setPin);
  },
  async deleteAccount() {
    await O.delete($.users.deleteAccount);
  },
  async restoreAccount() {
    await O.post($.users.restoreAccount);
  },
};
function da(e) {
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
const yt = rt(e => ({
  statuses: {},

  setStatuses: t => e(n => ({
    statuses: { ...n.statuses, ...t }
  })),

  setStatus: (t, n) => e(r => ({
    statuses: { ...r.statuses, [t]: n }
  })),

  clear: () => e({ statuses: {} })
}));
let zo = new Set();
function y_() {
  if (!so) {
    (null = setTimeout(async () => {
      so = null;
      const e = Array.from(zo);
      zo.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const r = await qo.batchFollowStatus(n);
            yt.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50));
  }
}
function v_(e) {
  const t = we(s => s.profile?.id);

  const n = yt(s => s.statuses);

  const r = R("");

  F(() => {
    if (!t) {
      return;
    }

    const s = e.filter(c => c !== t && n[c] === undefined);

    const i = s.sort().join(",");
    if (!(i === r.current || i === "")) {
      r.current = i;
      for (const c of s) {
        zo.add(c);
      }
      y_();
    }
  }, [e, t]);

  return {
    getStatus: N(
      (s) => {
        if (s !== t) {
          return n[s];
        }
      },
      [n, t]
    ),
    statuses: n,
  };
}
const Wt = new Ns(500, 120 * 1000/* 1e3 */);
setInterval(() => Wt.cleanup(), 60 * 1000/* 1e3 */);
const qo = {
  async followUser(e) {
    const t = await O.post($.users.follow(e), {});
    Wt.delete(e);
    yt.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await O.delete($.users.follow(e));
    Wt.delete(e);
    yt.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const o = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", o.toString());
    const s = n.toString();
    const i = `${$.users.followers(e)}${s ? `?${s}` : ""}`;
    const c = await O.get(i);
    const l = c.data ?? c;
    const u = l.users ?? l.followers ?? [];
    const d = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map(da), nextCursor: d };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const o = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", o.toString());
    const s = n.toString();
    const i = `${$.users.following(e)}${s ? `?${s}` : ""}`;
    const c = await O.get(i);
    const l = c.data ?? c;
    const u = l.users ?? l.following ?? [];
    const d = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map(da), nextCursor: d };
  },
  async blockUser(e) {
    await O.post($.users.block(e), {});
    Wt.delete(e);
  },
  async unblockUser(e) {
    await O.delete($.users.block(e));
    Wt.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", r.toString());
    const o = t.toString();
    const s = `${$.users.blocked}${o ? `?${o}` : ""}`;
    const i = await O.get(s);
    const c = i.data ?? i;
    let l = [];

    if (Array.isArray(c.users)) {
      (l = c.users);
    } else if (Array.isArray(c)) {
      (l = c);
    }

    const u = l.map((p) => {
        const h = p.user ?? p;
        return {
          id: h.id,
          username: h.username ?? null,
          displayName: h.displayName ?? "",
          avatar: h.avatar ?? null,
          isVerified: h.isVerified ?? h.verified ?? false,
          isPrivate: h.isPrivate ?? false,
          isBlocked: true,
        };
      });

    const f = c.pagination?.hasMore ?? false;
    const d = f ? String(r + 1) : null;
    return { users: u, nextCursor: d, hasMore: f };
  },
  async batchFollowStatus(e) {
    if (e.length === 0) {
      return {};
    }

    return (await O.post($.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    Wt.delete(e);
  },
  clearSocialCache() {
    Wt.clear();
  },
};
function w_(e) {
  const t = yt(o => o.statuses[e]);

  const n = N(async () => {
    yt.getState().setStatus(e, true);
    try {
      await qo.followUser(e);
    } catch {
      yt.getState().setStatus(e, false);
    }
  }, [e]);

  const r = N(async () => {
    yt.getState().setStatus(e, false);
    try {
      await qo.unfollowUser(e);
    } catch {
      yt.getState().setStatus(e, true);
    }
  }, [e]);

  return { isFollowing: t, follow: n, unfollow: r };
}
const E_ = "K9L7";
const S_ = "tUUe";
const b_ = "Ef0H";
const C_ = "T0yM";
const T_ = "Q4k2";
const I_ = "Iogu";
const N_ = "yMr9";
const k_ = "i81O";
const R_ = "hFUn";
const P_ = "QE0e";
const A_ = "rnNU";
const O_ = "jpun";
const x_ = "pa9D";
const L_ = "HjeQ";

const Me = {
  overlay: E_,
  modalWrapper: S_,
  wide: b_,
  modal: C_,
  frameless: T_,
  header: I_,
  title: N_,
  closeButton: k_,
  externalCloseButton: R_,
  mobileOverlay: P_,
  closing: A_,
  bottomSheet: O_,
  dragHandle: x_,
  dragIndicator: L_,
};

const $_ = yn(null);
const M_ = 100;
const D_ = 0.5;
function rn({
  children: e,
  onClose: t,
  title: n,
  showHeader: r = true,
  showCloseButton: o = true,
  frameless: s = false,
  className: i,
  contentClassName: c,
  size: l = "default",
  onBeforeClose: u,
}) {
  const f = R(null);
  const d = R(null);
  const p = R(null);
  const h = St();
  const m = R(0);
  const _ = R(false);
  const [b, g] = L(false);
  const y = R(0);
  const v = R(0);
  const I = R(0);
  F(() => {
    const q = (W) => {
        if (W.key === "Escape") {
          if (u && !u()) {
            return;
          }
          t();
        }
      };

    const ee = document.documentElement.style.overflow;
    (document.documentElement.style.overflow = "hidden");
    document.addEventListener("keydown", q);

    return () => {
      document.removeEventListener("keydown", q);
      (document.documentElement.style.overflow = ee);
    };
  }, [t]);

  const E = (q) => {
      p.current = q.target;
    };

  const S = (q) => {
    if (p.current === f.current && q.target === f.current) {
      if (h) {
        C();
      } else {
        if (u && !u()) {
          return;
        }
        t();
      }
    }
    p.current = null;
  };

  const C = N(() => {
    if (u && !u()) {
      x(0, "transform 0.2s ease-out");
      k(0);
      (m.current = 0);
      return;
    }
    g(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, u]);

  const T = R(false);
  const w = R(false);

  const P = (q) => {
    let ee = q;

    while (ee && ee !== d.current) {
      const M = window.getComputedStyle(ee).overflowY;
      if ((M === "auto" || M === "scroll") &&
      ee.scrollHeight > ee.clientHeight) {
        return ee;
      }
      ee = ee.parentElement;
    }

    return null;
  };

  const x = (q, ee) => {
    if (d.current) {
      (d.current.style.transform = q > 0 ? `translateY(${q}px)` : "");
      (d.current.style.transition = ee || "");
    }
  };

  const k = (q) => {
    if (f.current && q > 0) {
      (f.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
            0,
            0.4 - q / 500
          )})`);
    } else if (f.current) {
      (f.current.style.backgroundColor = "");
    }
  };

  const D = (q) => {
    if (!h) {
      return;
    }
    (y.current = q.touches[0].clientY);
    (v.current = Date.now());
    (I.current = q.touches[0].clientY);
    const q_target = q.target;
    if (q_target.closest(`.${Me.dragHandle}`)) {
      (T.current = true);
      (w.current = true);
      (_.current = true);

      if (d.current) {
        (d.current.style.transition = "none");
      }

      return;
    }
    (T.current = false);

    if (q_target.closest(
      'button, a, input, textarea, select, video, [role="button"]'
    )) {
      w.current = false;
      return;
    }

    if (q_target.tagName === "CANVAS" || q_target.closest("canvas")) {
      w.current = false;
      return;
    }
    const G = P(q_target);
    w.current = !G || G.scrollTop === 0;
  };

  const Y = (q) => {
    if (!h) {
      return;
    }
    const ee = q.touches[0].clientY;
    const W = ee - y.current;
    (I.current = ee);

    if (T.current) {
      if (W > 0) {
        (m.current = W);
        x(W);
        k(W);
        q.preventDefault();
      }

      return;
    }

    if (w.current) {
      if (_.current && m.current > 0) {
        if (W > 0) {
          (m.current = W);
          x(W);
          k(W);
          q.preventDefault();
        } else {
          (m.current = 0);
          (_.current = false);
          x(0);
          k(0);
        }

        return;
      }

      if (W > 0) {
        _.current ||
            ((_.current = true),
            d.current && (d.current.style.transition = "none"));

        (m.current = W);
        x(W);
        k(W);
        q.preventDefault();
      }
    }
  };

  const he = () => {
    if (!h) {
      return;
    }
    const q = I.current - y.current;
    const ee = Date.now() - v.current;
    const W = q / ee;

    if (_.current && (q > M_ || W > D_)) {
      C();
    } else if (m.current > 0) {
      x(0, "transform 0.2s ease-out");
      k(0);
      (m.current = 0);
    }

    (_.current = false);
    (T.current = false);
    (w.current = false);
  };

  const pe = (() => {
    if (h && b) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const de = { onClose: t, isMobile: h, isClosing: b, handleClose: C };
  return a($_.Provider, {
    value: de,
    children: a("div", {
      ref: f,
      className: `${Me.overlay} ${h ? Me.mobileOverlay : ""} ${
        b ? Me.closing : ""
      }`,
      onMouseDown: E,
      onMouseUp: S,
      children: a("div", {
        ref: d,
        className: `${Me.modalWrapper} ${l === "wide" ? Me.wide : ""} ${
          h ? Me.bottomSheet : ""
        }`,
        style: pe,
        onTouchStart: D,
        onTouchMove: Y,
        onTouchEnd: he,
        children: [
          s &&
            !h &&
            a("button", {
              type: "button",
              className: Me.externalCloseButton,
              onClick: (q) => {
                q.stopPropagation();
                t();
              },
              children: a(ct, { size: 24 }),
            }),
          h &&
            a("div", {
              className: Me.dragHandle,
              children: a("div", { className: Me.dragIndicator }),
            }),
          a("div", {
            className: `${Me.modal} ${s ? Me.frameless : ""} ${i || ""} ${
              c || ""
            }`,
            children: [
              !s &&
                r &&
                !h &&
                a("div", {
                  className: Me.header,
                  children: [
                    a("span", { className: Me.title, children: n }),
                    o &&
                      a("button", {
                        type: "button",
                        className: Me.closeButton,
                        onClick: (q) => {
                          q.stopPropagation();
                          t();
                        },
                        children: a(ct, { size: 16 }),
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
const U_ = "k7od";
const F_ = "DisK";
const B_ = "HhWl";
const H_ = "GPcH";
const V_ = "kxzR";
const W_ = "kX5y";
const fa = { spinner: U_, spin: F_, xs: B_, sm: H_, md: V_, lg: W_ };
function zl({ size: e = "md", className: t }) {
  const n = [fa.spinner, fa[e], t].filter(Boolean).join(" ");
  return a("div", { className: n, children: a(bs, {}) });
}
const j_ = "JtQq";
const z_ = "HU2x";
const q_ = "dpKM";
const G_ = "XruC";
const Y_ = "LcVk";
const X_ = "IZkm";
const K_ = "l1eC";
const Z_ = "rJC9";
const J_ = "ZZJG";
const Q_ = "AHB5";
const ey = "hX1c";
const ty = "nH1V";

const an = {
  button: j_,
  primary: z_,
  secondary: q_,
  ghost: G_,
  accent: Y_,
  danger: X_,
  sm: K_,
  md: Z_,
  lg: J_,
  fullWidth: Q_,
  iconOnly: ey,
  loading: ty,
};

function Ze({
  children: e,
  variant: t = "primary",
  size: n = "md",
  fullWidth: r = false,
  iconOnly: o = false,
  loading: s = false,
  className: i,
  type: c = "button",
  disabled: l,
  ...u
}) {
  const f = [
    an.button,
    an[t],
    an[n],
    r && an.fullWidth,
    o && an.iconOnly,
    s && an.loading,
    i,
  ]
    .filter(Boolean)
    .join(" ");
  return a("button", {
    type: c,
    className: f,
    disabled: l || s,
    ...u,
    children: s ? a(zl, { size: "sm" }) : e,
  });
}
const ny = "OvjW";
const ry = "ILAz";
const oy = "FTbt";
const sy = "poI5";
const cr = { content: ny, title: ry, subtitle: oy, actions: sy };
function iy({ displayName: e, onConfirm: t, onClose: n }) {
  return a(rn, {
    onClose: n,
    showHeader: false,
    children: a("div", {
      className: cr.content,
      children: [
        a("h2", { className: cr.title, children: "Отписаться?" }),
        a("p", {
          className: cr.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            a("strong", { children: e }),
            "?",
          ],
        }),
        a("div", {
          className: cr.actions,
          children: [
            a(Ze, {
              variant: "secondary",
              onClick: (r) => {
                r.stopPropagation();
                n();
              },
              children: "Отмена",
            }),
            a(Ze, {
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
const ql = yn(null);
let ay = 0;
function cy({ children: e }) {
  const [t, n] = L([]);

  const r = N((i) => {
    const c = `modal-${++ay}`;

    n(l => [...l, { id: c, component: i }]);

    return c;
  }, []);

  const o = N((i) => {
    n(c => i ? c.filter(l => l.id !== i) : c.slice(0, -1));
  }, []);

  const s = N(() => {
    n([]);
  }, []);

  F(() => {
    let i = window.location.pathname + window.location.search;
    const c = () => {
      const f = window.location.pathname + window.location.search;

      if (f !== i) {
        (i = f);
        n([]);
      }
    };
    window.addEventListener("popstate", c);

    const {
      pushState,
      replaceState
    } = history;

    history.pushState = function (...f) {
      pushState.apply(this, f);
      c();
    };

    (history.replaceState = function (...f) {
      replaceState.apply(this, f);
      c();
    });

    return () => {
      window.removeEventListener("popstate", c);
      (history.pushState = pushState);
      (history.replaceState = replaceState);
    };
  }, []);

  return a(ql.Provider, {
    value: { openModal: r, closeModal: o, closeAllModals: s },
    children: [e, t.length > 0 && a(ly, { modals: t })],
  });
}
function ly({ modals: e }) {
  return nn(
    a(ke, {
      children: e.map(({ id: t, component: n }) => a(Te, { fallback: null, children: n }, t)
      ),
    }),
    document.body
  );
}
function on() {
  const e = Br(ql);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const uy = "FRPh";
const dy = "KlM9";
const fy = "qANd";
const hy = "nRXr";
const py = "Iap8";
const my = "y21a";
const gy = "phxQ";
const _y = "iNAs";
const yy = "NBPu";
const vy = "D5yc";
const wy = "kBYM";
const Ey = "QAHZ";

const Tt = {
  avatar: uy,
  xs: dy,
  emoji: fy,
  onlineDot: hy,
  sm: py,
  md: my,
  lg: gy,
  xl: _y,
  badge: yy,
  followBadge: vy,
  notFollowing: wy,
  following: Ey,
};

function Sy(e) {
  return (
    e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/")
  );
}
function nt({
  src: e,
  alt: t,
  size: n = "md",
  badge: r,
  online: o,
  followBadge: s,
  onFollowBadgeClick: i,
  className: c,
}) {
  const l = e ? Sy(e) : false;
  return a("div", {
    className: `${Tt.avatar} ${Tt[n]} ${c || ""}`,
    children: [
      l && e
        ? a("img", { src: e, alt: t || "" })
        : a("span", { className: Tt.emoji, children: e || "👤" }),
      r && a("div", { className: Tt.badge, children: r }),
      s !== undefined
        ? a("button", {
            type: "button",
            className: `${Tt.followBadge} ${
              s ? Tt.following : Tt.notFollowing
            }`,
            onClick: (u) => {
              u.preventDefault();
              u.stopPropagation();
              i?.(u);
            },
            children: s ? a(Hg, { size: 8 }) : a(Bg, { size: 8 }),
          })
        : o && a("span", { className: Tt.onlineDot }),
    ],
  });
}
const by = "NGIa";
const Cy = "kKWf";
const Ty = "MF3T";
const Iy = "sHc6";
const Ny = "LYdR";
const ky = "gDul";
const Ry = "x6Pn";
const Py = "Y1Rg";
const Ay = "u47n";
const Oy = "o4cz";
const xy = "Acm6";
const Ly = "yIAR";
const $y = "wzzj";
const My = "lijM";
const Dy = "IgYb";

const Fe = {
  userName: by,
  pinBadge: Cy,
  text: Ty,
  nukstaGlow: Iy,
  xs: Ny,
  sm: ky,
  md: Ry,
  lg: Py,
  pinWrapper: Ay,
  pinClickable: Oy,
  pinTooltip: xy,
  pinTooltipFadeIn: Ly,
  pinTooltipRow: $y,
  pinTooltipLabel: My,
  pinTooltipArrow: Dy,
};

const Uy = ne(() => Q(() => import("./index-BbFs5PEb.js"), __vite__mapDeps([0, 1, 2, 3])).then(
  e => ({
    default: e.SubscriptionModal
  })
)
);

const Fy = { xs: 12, sm: 14, md: 16, lg: 22 };
const By = "subscription_nuksta";
function tr({
  name: e,
  verified: t,
  hasNuksta: n,
  pin: r,
  size: o = "md",
  className: s,
}) {
  const Fy_o = Fy[o];
  const c = R(null);
  const [l, u] = L(null);
  const [f, d] = L(false);
  const p = r?.slug === By;

  const h = N(() => {
    if (!c.current) {
      return;
    }
    const _ = c.current.getBoundingClientRect();
    u({ x: _.left + _.width / 2, y: _.top });
  }, []);

  const m = N(() => {
    u(null);
  }, []);

  return a("span", {
    className: `${Fe.userName} ${Fe[o]} ${s || ""}`,
    children: [
      n
        ? a("span", {
            className: Fe.nukstaGlow,
            children: a("span", { className: Fe.text, children: e }),
          })
        : a("span", { className: Fe.text, children: e }),
      t && a(Kg, {}),
      r &&
        a("span", {
          ref: c,
          className: `${Fe.pinWrapper} ${p ? Fe.pinClickable : ""}`,
          onMouseEnter: h,
          onMouseLeave: m,
          onClick: p
            ? (_) => {
            _.stopPropagation();
            _.preventDefault();
            d(true);
          }
            : undefined,
          children: [
            a("img", {
              src: r.url,
              alt: r.name,
              className: Fe.pinBadge,
              width: Fy_o,
              height: Fy_o,
            }),
            l &&
              nn(
                a("div", {
                  className: Fe.pinTooltip,
                  style: { left: `${l.x}px`, top: `${l.y}px` },
                  children: [
                    a("span", {
                      className: Fe.pinTooltipRow,
                      children: [
                        a("span", {
                          className: Fe.pinTooltipLabel,
                          children: "Пин:",
                        }),
                        " ",
                        r.name,
                      ],
                    }),
                    r.description &&
                      a("span", {
                        className: Fe.pinTooltipRow,
                        children: [
                          a("span", {
                            className: Fe.pinTooltipLabel,
                            children: "Ивент:",
                          }),
                          " ",
                          r.description,
                        ],
                      }),
                    a("span", { className: Fe.pinTooltipArrow }),
                  ],
                }),
                document.body
              ),
          ],
        }),
      f &&
        a(Te, {
          fallback: null,
          children: a(Uy, { isOpen: true, onClose: () => d(false) }),
        }),
    ],
  });
}
function Hy(e) {
  return "accessToken" in e;
}
function Vy(e) {
  return "accessToken" in e;
}
const pt = {
  async register(e) {
    return await Ne.post($.auth.signUp, e);
  },
  async login(e) {
    return await Ne.post($.auth.signIn, e);
  },
  async verifyOtp(e) {
    return await Ne.post($.auth.verifyOtp, e);
  },
  async resendOtp(e) {
    await Ne.post($.auth.resendOtp, e);
  },
  async refreshSession() {
    return await Ne.post($.auth.refresh);
  },
  async logout() {
    await Ne.post($.auth.logout);
  },
  async logoutAll() {
    await Ne.post(`${$.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await Ne.post($.auth.forgotPassword, e);
  },
  async resetPassword(e) {
    await Ne.post($.auth.resetPassword, e);
  },
  async changePassword(e) {
    await Ne.post($.auth.changePassword, e);
  },
};
function Dt(e, t) {
  if (!e) {
    pi(null);
    return;
  }
  pi({ id: e.id, username: e.username ?? undefined, email: t ?? undefined });
}

const lr = {
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

const we = rt()(
  kl(
    (e, t) => {
      O.setRefreshTokenCallback(async () => {
        try {
          const r = await pt.refreshSession();
          O.setAccessToken(r.accessToken);
          Ne.setAccessToken(r.accessToken);
          return r.accessToken;
        } catch (r) {
          return Oe(r) && r.status >= 500
            ? (e({ status: "service_error" }), null)
            : (t().reset(), null);
        }
      });

      O.setOnUnauthorizedCallback(() => {
        if (t().status !== "service_error") {
          t().reset();
        }
      });

      return {
        ...lr,
        register: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const o = await pt.register(r);

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: o.flowToken ?? null,
            });

            return o.nextStep;
          } catch (o) {
            const s = Oe(o) ? o.message : "Registration failed";
            const i = Oe(o) ? o.code : null;
            e({ status: "unauthenticated", error: s, errorCode: i });
            throw o;
          }
        },
        login: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const o = await pt.login(r);
            if (Vy(o)) {
              O.setAccessToken(o.accessToken);
              Ne.setAccessToken(o.accessToken);
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                      status: "authenticated",
                      pendingEmail: null,
                      email: r.email,
                    });

                  Dt(t().profile, r.email);
                }
              } catch (i) {
                if (Oe(i) &&
                (i.code === le.ENTITY_NOT_FOUND || i.status === 404)) {
                  e({
                    status: "needs_profile",
                    pendingEmail: null,
                    email: r.email,
                  });
                } else {
                  throw i;
                }
              }
              return "authenticated";
            }
            const s = o;

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: s.flowToken ?? null,
            });

            return o.nextStep;
          } catch (o) {
            const s = Oe(o) ? o.message : "Login failed";
            const i = Oe(o) ? o.code : null;
            e({ status: "unauthenticated", error: s, errorCode: i });
            throw o;
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

            if (Hy(c)) {
              O.setAccessToken(c.accessToken);
              Ne.setAccessToken(c.accessToken);
              const l = pendingEmail;
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                      status: "authenticated",
                      pendingEmail: null,
                      pendingPassword: null,
                      flowToken: null,
                      email: l,
                    });

                  Dt(t().profile, l);
                }
              } catch (u) {
                if (Oe(u) &&
                (u.code === le.ENTITY_NOT_FOUND || u.status === 404)) {
                  e({
                    status: "needs_profile",
                    pendingEmail: null,
                    pendingPassword: null,
                    flowToken: null,
                    email: l,
                  });
                } else {
                  throw u;
                }
              }
              return "authenticated";
            }

            e({ status: "needs_verification" });
            return "password_reset";
          } catch (c) {
            const l = Oe(c) ? c.message : "Verification failed";
            const u = Oe(c) ? c.code : null;
            e({ status: "needs_verification", error: l, errorCode: u });
            throw c;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail, flowToken } = t();
          try {
            await pt.resendOtp({ email: pendingEmail || "", flowToken: flowToken || "" });
          } catch (s) {
            const i = Oe(s) ? s.message : "Failed to resend code";
            const c = Oe(s) ? s.code : null;
            e({ error: i, errorCode: c });
            throw s;
          }
        },
        createProfile: async (r) => {
          e({ error: null, errorCode: null });
          try {
            await ar.createProfile(r);
            await t().fetchProfile();
            e({ status: "authenticated" });
            Dt(t().profile, t().email);
          } catch (o) {
            const s = Oe(o) ? o.message : "Failed to create profile";
            const i = Oe(o) ? o.code : null;
            e({ error: s, errorCode: i });
            throw o;
          }
        },
        logout: async () => {
          try {
            await pt.logout();
          } catch {
          } finally {
            O.setAccessToken(null);
            Ne.setAccessToken(null);
            e({ ...lr, status: "unauthenticated" });
            Dt(null, null);
          }
        },
        logoutAll: async () => {
          try {
            await pt.logoutAll();
          } catch {
          } finally {
            O.setAccessToken(null);
            Ne.setAccessToken(null);
            e({ ...lr, status: "unauthenticated" });
            Dt(null, null);
          }
        },
        refreshSession: async () => {
          try {
            const r = await pt.refreshSession();
            O.setAccessToken(r.accessToken);
            Ne.setAccessToken(r.accessToken);
            return r.accessToken;
          } catch (r) {
            return Oe(r) && r.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const r = await ar.getMyProfile();
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
              .some(o => o.trim().startsWith("is_auth="))
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
                Dt(t().profile, t().email);
              }
            } catch (s) {
              if (Oe(s) &&
              (s.code === le.ENTITY_NOT_FOUND || s.status === 404)) {
                e({ status: "needs_profile" });
              } else {
                throw s;
              }
            }
          } catch (o) {
            if (Oe(o) && o.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await ar.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await ar.restoreAccount();
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
          O.setAccessToken(null);
          Ne.setAccessToken(null);
          e({ ...lr, status: "unauthenticated" });
          Dt(null, null);
        },
        setProfile: (r) => {
          e({ profile: r });
        },
      };
    },
    {
      name: "auth-storage",
      storage: ws(() => sessionStorage),
      partialize: e => ({
        profile: e.profile,
        email: e.email
      }),
    }
  )
);

const Wy = () => we(e => e.status);

const ks = () => we(e => e.profile);

const Gl = () => we(e => e.status === "authenticated");

function jy({ children: e, currentPath: t }) {
  const n = Wy();

  const r = we(s => s.initialize);

  F(() => {
    if (n === "idle") {
      r();
    }
  }, [n, r]);

  F(() => {
    if (n === "loading" || n === "idle") {
      return;
    }
    const s = la.some(i => t.startsWith(i));

    if (n === "unauthenticated" && !s) {
      Ke(ge.LOGIN);
    } else if (n === "needs_profile" && t !== ge.ONBOARDING) {
      Ke(ge.ONBOARDING);
    } else if (n === "authenticated" &&
        (t === ge.LOGIN || t === ge.REGISTER || t === ge.ONBOARDING)) {
      Ke(ge.HOME);
    }
  }, [n, t]);

  const o = la.some(s => t.startsWith(s));
  return n === "idle" || (n === "loading" && !o)
    ? null
    : n === "service_error"
    ? a(zy, {})
    : n === "account_deleted"
    ? a(qy, {})
    : a(ke, { children: e });
}
function zy() {
  const e = we(o => o.initialize);

  const [t, n] = L(false);
  return a("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: a("div", {
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
        a("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Сервис недоступен",
        }),
        a("p", {
          style: {
            fontSize: "15px",
            color: "var(--text-secondary)",
            margin: 0,
            lineHeight: 1.5,
          },
          children:
            "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
        }),
        a("div", {
          style: { marginTop: "8px" },
          children: a(Ze, {
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
function qy() {
  const e = we(l => l.canRestore);

  const t = we(l => l.restoreDeadline);

  const n = we(l => l.restoreAccount);

  const r = we(l => l.logout);

  const [o, s] = L(false);

  const i = t
    ? new Date(t).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const c = async () => {
    s(true);
    try {
      await n();
    } catch {
      s(false);
    }
  };

  return a("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: a("div", {
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
        a("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Аккаунт удалён",
        }),
        o
          ? a("p", {
              style: {
                fontSize: "15px",
                color: "var(--text-secondary)",
                margin: 0,
              },
              children: "Восстановление аккаунта...",
            })
          : e
          ? a(ke, {
              children: [
                a("p", {
                  style: {
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    margin: 0,
                    lineHeight: 1.5,
                  },
                  children: [
                    "Ваш аккаунт был удалён. Вы можете восстановить его",
                    i ? ` до ${i}` : "",
                    ".",
                  ],
                }),
                a("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "8px",
                    width: "100%",
                  },
                  children: [
                    a(Ze, { onClick: c, children: "Восстановить аккаунт" }),
                    a("button", {
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
          : a(ke, {
              children: [
                a("p", {
                  style: {
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    margin: 0,
                  },
                  children: "Срок восстановления аккаунта истёк.",
                }),
                a("div", {
                  style: { marginTop: "8px" },
                  children: a(Ze, { onClick: () => r(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
const Gy = "vH31";
const Yy = "RY9L";
const Xy = "gtFE";
const Ky = "gUwF";
const ur = { content: Gy, icon: Yy, text: Xy, button: Ky };
const ha = "phone-verification-required";
function Zy() {
  const [e, t] = L(false);

  const n = we(o => o.profile?.id ?? "");

  F(() => {
    const o = () => t(true);
    window.addEventListener(ha, o);

    return () => window.removeEventListener(ha, o);
  }, []);

  if (!e) {
    return null;
  }

  const r = `https://t.me/itd_verification_bot?start=${n}`;
  return a(rn, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: a("div", {
      className: ur.content,
      children: [
        a("div", { className: ur.icon, children: a(Xg, { size: 48 }) }),
        a("p", {
          className: ur.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        a("a", {
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          className: ur.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
const Jy = {
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
function Yl(e) {
  const t = Jy[e.type] ?? "follow";
  const n = e.entityId ?? e.targetId ?? null;
  const r = e.isRead ?? e.read ?? false;
  let o = [];

  if (e.payload?.actors) {
    (o = e.payload.actors);
  } else if (e.actor) {
    (o = [
          {
            id: e.actor.id,
            username: e.actor.username,
            displayName: e.actor.displayName,
            avatar: e.actor.avatar,
            isFollowing: e.actor.isFollowing,
            isFollowedBy: e.actor.isFollowedBy,
          },
        ]);
  }

  const s = e.payload?.entityPreview ?? e.preview ?? null;
  return {
    id: e.id,
    type: t,
    entityId: n,
    parentEntityId: e.parentEntityId ?? null,
    isRead: r,
    payload: {
      actors: o,
      count: e.payload?.count ?? 1,
      clickUrl: e.payload?.clickUrl,
      entityPreview: s,
    },
    createdAt: e.createdAt,
    updatedAt: e.updatedAt ?? e.readAt ?? e.createdAt,
  };
}

const Ut = {
    async getNotifications(e = {}) {
      const t = new URLSearchParams();
      const n = e.limit ?? 20;
      t.set("limit", n.toString());
      const r = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

      if (r > 0) {
        t.set("offset", r.toString());
      }

      const o = t.toString();
      const s = `${$.notifications.list}${o ? `?${o}` : ""}`;
      const i = await O.get(s);
      const c = i.notifications ?? i.data ?? [];
      const u = i.hasMore ?? false ? String(r + c.length) : null;
      return { notifications: c.map(Yl), nextCursor: u };
    },
    async getUnreadCount() {
      return (await O.get($.notifications.count)).count;
    },
    async markAsRead(e) {
      if (e.length === 1) {
        const r = await O.post($.notifications.markRead(e[0]));
        return { markedCount: r.markedCount ?? r.marked ?? 1 };
      }
      const t = 20;
      let n = 0;
      for (let r = 0; r < e.length; r += t) {
        const o = e.slice(r, r + t);
        const s = await O.post($.notifications.markReadBatch, { ids: o });
        n += s.markedCount ?? s.marked ?? o.length;
      }
      return { markedCount: n };
    },
    async markAllAsRead() {
      const e = await O.post($.notifications.markAllRead);
      return { markedCount: e.markedCount ?? e.marked ?? 0 };
    },
    async getSettings() {
      const e = await O.get($.notifications.settings);
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
        (t.enabled = e.webEnabled);
      }

      if (e.soundEnabled !== undefined) {
        (t.sound = e.soundEnabled);
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

      await O.put($.notifications.settings, t);
    },
  };

const pa = [1000/* 1e3 */, 2000/* 2e3 */, 4000/* 4e3 */, 8000/* 8e3 */, 16000/* 16e3 */, 30000/* 3e4 */];
const Qy = 0.3;
const ev = 15;
function ma(e) {
  const t = pa[Math.min(e, pa.length - 1)];
  const n = t * Qy * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
let dt = null;
let Nn = null;
let Ft = 0;
let Bt = null;
function tv(e) {
  const {
    url,
    getToken,
    onRefreshToken,
    onMessage,
    onStatusChange: s,
  } = e;
  function i() {
    if (dt) {
      return;
    }
    const l = getToken();
    if (!l) {
      s("error");
      return;
    }
    s("connecting");
    (dt = new AbortController());

    (async () => {
      try {
        const f = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            Authorization: `Bearer ${l}`,
            "Cache-Control": "no-cache",
          },
          signal: dt?.signal,
        });
        if (!f.ok) {
          if (f.status === 401) {
            try {
              await onRefreshToken();
              (dt = null);
              const m = ma(Ft);
              Ft++;
              (Nn = setTimeout(i, m));
              return;
            } catch {
              s("error");
              return;
            }
          }
          throw new Error(`SSE connection failed: ${f.status}`);
        }
        if (!f.body) {
          throw new Error("SSE response has no body");
        }
        (Ft = 0);
        s("connected");

        if (Bt) {
          Bt.cancel().catch(() => {});
          (Bt = null);
        }

        const d = f.body.getReader();
        Bt = d;
        const p = new TextDecoder();
        let h = "";

        while (true) {
          const { done: m, value: _ } = await d.read();
          if (m) {
            break;
          }
          h += p.decode(_, { stream: true });
          const b = h.split(`
`);
          h = b.pop() || "";
          let g = "";
          let y = "";
          for (const v of b) {
            if (v.startsWith("event: ")) {
              g = v.slice(7);
            } else if (v.startsWith("data: ")) {
              y = v.slice(6);
            } else if (v === "" && y) {
              try {
                const I = JSON.parse(y);
                const E = g || I.type;
                onMessage(E, I);
              } catch (I) {
                console.error("SSE message parse error:", I, y);
              }
              (g = "");
              (y = "");
            }
          }
        }
      } catch (f) {
        if (f.name === "AbortError") {
          return;
        }
        s("error");

        if (Ft >= ev) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          (dt = null);
          return;
        }

        const d = ma(Ft);
        Ft++;

        (Nn = setTimeout(() => {
          (dt = null);
          i();
        }, d));
      }
    })();
  }
  function c() {
    if (Nn) {
      clearTimeout(Nn);
      (Nn = null);
    }

    if (Bt) {
      Bt.cancel().catch(() => {});
      (Bt = null);
    }

    if (dt) {
      dt.abort();
      (dt = null);
    }

    (Ft = 0);
    s("disconnected");
  }
  return { connect: i, disconnect: c };
}
const ga = {
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
function nv(e) {
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
  return Yl(t);
}

const dr = tv({
    url: "/api/notifications/stream",
    getToken: () => O.getAccessToken(),
    onRefreshToken: async () => {
      const e = await pt.refreshSession();
      O.setAccessToken(e.accessToken);
      Ne.setAccessToken(e.accessToken);
      return e.accessToken;
    },
    onMessage: (e, t) => {
      if (e === "notification") {
        const n = t.payload ?? t;
        const r = nv(n);
        const o = r.payload.actors[0];

        const s = {
          id: r.id,
          type: r.type,
          actorName: o?.displayName || "Пользователь",
          actorUsername: o?.username || "",
          actorAvatar: o?.avatar || "",
          count: r.payload.count,
          message: ov(
            r.type,
            o?.displayName || "Пользователь",
            r.payload.count
          ),
          clickUrl: r.payload.clickUrl,
          entityId: r.entityId,
          parentEntityId: r.parentEntityId,
        };

        Pt.setState(i => ({
          notifications: [r, ...i.notifications],
          unreadCount: t.unreadCount ?? i.unreadCount,
          lastSseToast: s
        }));

        if (t.sound) {
          sv();
        }
      } else {
        if (e === "unread_count") {
          Pt.setState({ unreadCount: t.payload?.count ?? 0 });
        }
      }
    },
    onStatusChange: (e) => {
      Pt.setState({
        sseStatus: e,
        error: e === "error" ? "SSE connection error" : null,
      });
    },
  });

const Pt = rt()((e, t) => ({
  ...ga,

  initialize: () => {
    if (!t().isInitialized) {
      e({ isInitialized: true });
      dr.connect();
      t().fetchUnreadCount();
    }
  },

  fetchNotifications: async (n = false) => {
    const { status: r, nextCursor: o, notifications: s } = t();
    if (r !== "loading" && !(!n && o === null && s.length > 0)) {
      e({ status: "loading", error: null });
      try {
        const i = n ? undefined : o ?? undefined;
        const c = await Ut.getNotifications({ cursor: i, limit: 20 });
        e({
          notifications: n ? c.notifications : [...s, ...c.notifications],
          nextCursor: c.nextCursor,
          status: "success",
        });
      } catch (i) {
        const c =
          i instanceof Error ? i.message : "Failed to fetch notifications";
        e({ status: "error", error: c });
      }
    }
  },

  fetchUnreadCount: async () => {
    try {
      const n = await Ut.getUnreadCount();
      e({ unreadCount: n });
    } catch {}
  },

  markAsRead: async (n) => {
    if (n.length === 0) {
      return;
    }
    const r = t();

    const o = n.filter((s) => {
      const i = r.notifications.find(c => c.id === s);
      return i && !i.isRead;
    });

    e(s => ({
      notifications: s.notifications.map(i => n.includes(i.id) ? { ...i, isRead: true } : i
      ),

      unreadCount: Math.max(0, s.unreadCount - o.length)
    }));
    try {
      await Ut.markAsRead(n);
    } catch {}
  },

  markAsReadSilent: async (n) => {
    if (n.length !== 0) {
      e(r => ({
        unreadCount: Math.max(0, r.unreadCount - n.length)
      }));
      try {
        await Ut.markAsRead(n);
      } catch {}
    }
  },

  markAllAsRead: async () => {
    e(n => ({
      notifications: n.notifications.map(r => ({
        ...r,
        isRead: true
      })),

      unreadCount: 0
    }));
    try {
      await Ut.markAllAsRead();
    } catch {}
  },

  connectSSE: () => dr.connect(),
  disconnectSSE: () => dr.disconnect(),

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const n = await Ut.getSettings();
      e({ settings: n, settingsLoading: false });
    } catch {
      e({ settingsLoading: false });
    }
  },

  updateSettings: async (n) => {
    const { settings: r } = t();
    if (r) {
      const o = {
        webEnabled: n.webEnabled ?? r.webEnabled,
        soundEnabled: n.soundEnabled ?? r.soundEnabled,
        preferences: { ...r.preferences, ...n.preferences },
      };
      e({ settings: o });
    }
    try {
      await Ut.updateSettings(n);
    } catch {
      e({ settings: r });
    }
  },

  reset: () => {
    dr.disconnect();
    e(ga);
  }
}));

const rv = {
  follow: (e, t) => t > 1
    ? `${e} и ещё ${t - 1} подписались на вас`
    : `${e} подписался(-ась) на вас`,
  follow_request: e => `${e} хочет подписаться на вас`,
  follow_accepted: e => `${e} принял(а) вашу заявку`,
  post_reaction: (e, t) => t > 1
    ? `${e} и ещё ${t - 1} оценили ваш пост`
    : `${e} оценил(а) ваш пост`,
  post_comment: e => `${e} прокомментировал(а) ваш пост`,
  post_repost: (e, t) => t > 1 ? `${e} и ещё ${t - 1} сделали репост` : `${e} сделал(а) репост`,
  comment_reaction: (e, t) => t > 1
    ? `${e} и ещё ${t - 1} оценили ваш комментарий`
    : `${e} оценил(а) ваш комментарий`,
  comment_reply: e => `${e} ответил(а) на ваш комментарий`,
  post_mention: e => `${e} упомянул(а) вас в посте`,
  comment_mention: e => `${e} упомянул(а) вас в комментарии`,
  wall_post: e => `${e} написал(а) на вашей стене`,
  like: (e, t) => t > 1
    ? `${e} и ещё ${t - 1} оценили ваш пост`
    : `${e} оценил(а) ваш пост`,
  comment: e => `${e} прокомментировал(а) ваш пост`,
  reply: e => `${e} ответил(а) на ваш комментарий`,
  repost: (e, t) => t > 1 ? `${e} и ещё ${t - 1} сделали репост` : `${e} сделал(а) репост`,
  mention: e => `${e} упомянул(а) вас в посте`,
};

function ov(e, t, n) {
  const rv_e = rv[e];
  return rv_e ? rv_e(t, n) : "Новое уведомление";
}
function sv() {
  try {
    const e = new Audio("/assets/notification.ogg");
    (e.volume = 0.5);
    e.play().catch(() => {});
  } catch {}
}

const Xl = () => Pt(e => e.unreadCount);

const iv = () => Pt(e => e.lastSseToast);

function kn(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const mt = new Ns(50, 300 * 1000/* 1e3 */);
const av = 60 * 1000/* 1e3 */;
setInterval(() => mt.cleanup(), 120 * 1000/* 1e3 */);
function cv(e) {
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
function kt(e) {
  const n = (e.attachments ?? []).map((f) => {
    if (f.type === "poll") {
      const d = f;

      const p = d.options.map(h => ({
        id: h.id,
        text: h.text,
        votes: h.votesCount ?? h.voteCount ?? h.votes ?? 0
      }));

      return {
        ...f,
        options: p,
        totalVotes: d.totalVotes ?? 0,
        multipleChoice: d.multipleChoice ?? false,
        myVotes: d.votedOptionIds?.length
          ? d.votedOptionIds
          : e.viewerStatus?.pollVote
          ? [e.viewerStatus.pollVote]
          : [],
        myVote: d.votedOptionIds?.[0] ?? e.viewerStatus?.pollVote ?? null,
      };
    }
    return f;
  });
  if (e.poll && !n.some(f => f.type === "poll")) {
    const e_poll = e.poll;

    const d = {
      id: e_poll.id,
      type: "poll",
      question: e_poll.question,
      multipleChoice: e_poll.multipleChoice ?? false,
      options: (e_poll.options ?? []).map(p => ({
        id: p.id,
        text: p.text,
        votes: p.votesCount ?? p.voteCount ?? 0
      })),
      totalVotes: e_poll.totalVotes ?? 0,
      myVotes: e_poll.votedOptionIds ?? [],
      myVote: e_poll.votedOptionIds?.length > 0 ? e_poll.votedOptionIds[0] : null,
    };

    n.push(d);
  }
  const r = e.stats?.reactions ?? e.likesCount ?? 0;
  const o = e.stats?.views ?? e.viewsCount ?? 0;
  const s = e.stats?.comments ?? e.commentsCount ?? 0;
  const i = e.stats?.reposts ?? e.repostsCount ?? 0;
  const c = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const l = e.viewerStatus?.isReposted ?? e.isReposted ?? false;
  const u = e.text ?? e.content ?? "";
  return {
    id: e.id,
    author: cv(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: u,
    spans: e.spans ?? [],
    attachments: n,
    reactions: { total: r, myReaction: c },
    stats: { views: o, comments: s, reposts: i },
    reposted: l,
    originalPost: e.originalPost ? kt(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
    vs: typeof e.vs == "string" ? e.vs : undefined,
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

      const r = n.toString();
      const o = `${$.posts.list}${r ? `?${r}` : ""}`;
      const s = await O.get(o);
      return { data: s.data.posts.map(kt), nextCursor: kn(s.data) };
    },
    async getPost(e) {
      const t = await O.get($.posts.single(e));
      return kt(t.data);
    },
    async getUserWall(e, t = {}) {
      if (!t.cursor) {
        const n = e;
        const r = mt.get(n);
        const o = r && r.pinnedPostId === (t.pinnedPostId ?? null);

        if (r && o && mt.isFresh(n, av)) {
          this._fetchAndCacheWall(e, t, n).catch(() => {});
          return { data: r.posts, nextCursor: r.nextCursor };
        }

        if (r && o) {
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
      const o = `${$.posts.byUser(e)}${r ? `?${r}` : ""}`;
      const s = await O.get(o);
      return { data: s.data.posts.map(kt), nextCursor: kn(s.data) };
    },
    invalidateWallCache(e) {
      mt.delete(e);
    },
    updatePostInWallCache(e, t, n) {
      const r = mt.get(e);
      if (r) {
        const o = r.posts.map(s => s.id === t ? { ...s, ...n } : s);
        mt.set(e, { ...r, posts: o });
      }
    },
    removePostFromWallCache(e, t) {
      const n = mt.get(e);
      if (n) {
        const r = n.posts.filter(o => o.id !== t);
        mt.set(e, { ...n, posts: r });
      }
    },
    async likePost(e) {
      await O.post($.posts.like(e));
    },
    async unlikePost(e) {
      await O.delete($.posts.like(e));
    },
    async createPost(e) {
      return await O.post($.posts.create, {
        content: e.text,
        spans: e.spans,
        wallRecipientId: e.wallOwnerId,
        attachmentIds: e.attachmentIds,
        poll: e.poll,
      });
    },
    async createRepost(e, t) {
      const n = await O.post($.posts.repost(e), { content: t });
      return kt(n);
    },
    async getPostsStats(e) {
      if (e.length === 0) {
        return [];
      }

      return (await O.post(`${$.posts.list}/stats`, { ids: e })).posts ?? [];
    },
    async editPost(e, t) {
      const n = t.content ?? t.text;
      await O.put($.posts.update(e), { content: n, spans: t.spans });
    },
    async deletePost(e) {
      await O.delete($.posts.delete(e));
    },
    async restorePost(e) {
      await O.post($.posts.restore(e));
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
      const o = `${$.posts.byUser(e)}${r ? `?${r}` : ""}`;
      const s = await O.get(o);
      return { data: s.data.posts.map(kt), nextCursor: kn(s.data) };
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
      const o = `${$.posts.likedByUser(e)}${r ? `?${r}` : ""}`;
      const s = await O.get(o);
      return { data: s.data.posts.map(kt), nextCursor: kn(s.data) };
    },
    async pinPost(e) {
      await O.post($.posts.pin(e));
    },
    async unpinPost(e) {
      await O.delete($.posts.pin(e));
    },
    async votePoll(e, t) {
      const n = await O.post($.posts.pollVote(e), { optionIds: t });
      return n.data ?? n;
    },
    async unrepost(e) {
      await O.delete($.posts.repost(e));
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
      const o = `${$.hashtags.posts(e)}${r ? `?${r}` : ""}`;
      const s = await O.get(o);
      return { data: s.data.posts.map(kt), nextCursor: kn(s.data) };
    },
  };

const lv = { new: "newest", old: "oldest", popular: "popular" };
function uv(e) {
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
function Go(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const o = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: uv(e.author),
    parentId: e.parentId,
    rootId: e.rootId ?? null,
    text: o,
    spans: e.spans ?? [],
    attachments: e.attachments ?? [],
    reactions: { total: t, myReaction: r },
    stats: { replies: n },
    replyTo: e.replyTo ?? null,
    previewReplies:
      e.previewReplies ?? e.replies
        ? (e.previewReplies ?? e.replies).map(Go)
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
        n.set("sort", lv[t.sort]);
      }

      if (t.cursor) {
        n.set("cursor", t.cursor);
      }

      const r = n.toString();
      const o = `${$.posts.comments(e)}${r ? `?${r}` : ""}`;
      const s = await O.get(o);
      let i = [];
      let c = null;

      if (Array.isArray(s.data)) {
        (i = s.data);
      } else if (s.data && "comments" in s.data) {
        (i = s.data.comments);
        (c = s.data.nextCursor ?? null);
      } else if (s.comments) {
        (i = s.comments);
      }

      (c = c ?? s.cursor ?? s.meta?.cursor?.next ?? null);
      return { data: i.map(Go), nextCursor: c };
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
      const o = `${$.comments.replies(e)}${r ? `?${r}` : ""}`;
      const s = await O.get(o);
      let i = [];
      let c = null;

      if (Array.isArray(s.data)) {
        (i = s.data);
      } else if (s.data && "replies" in s.data) {
        (i = s.data.replies);
        (c = s.data.nextCursor ?? null);
      } else if (s.replies) {
        (i = s.replies);
      }

      (c = c ?? s.cursor ?? s.meta?.cursor?.next ?? null);
      return { data: i.map(Go), nextCursor: c };
    },
    async createComment(e, t, n, r, o) {
      return await O.post($.posts.comments(e), {
        content: t,
        attachmentIds: o?.map(s => s.mediaId),
      });
    },
    async createReply(e, t, n, r, o) {
      return await O.post($.comments.replies(e), {
        content: t,
        replyToUserId: r,
        attachmentIds: o?.map(s => s.mediaId),
      });
    },
    async editComment(e, t, n) {
      await O.patch($.comments.edit(e), { content: t });
    },
    async deleteComment(e) {
      await O.delete($.comments.delete(e));
    },
    async likeComment(e) {
      await O.post($.comments.like(e));
    },
    async unlikeComment(e) {
      await O.delete($.comments.like(e));
    },
  };

const oe = rt((e, t) => ({
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
  profileScrollByUser: {},
  profileMeasuredHeightsByUser: {},
  highlightedPostId: null,
  postStatsCache: {},
  _lastPostEdit: null,
  _lastLikeUpdate: null,
  _lastRepostUpdate: null,
  _lastStatsBatch: null,
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
    const { activeFeed: r, isLoading: o, isRefreshing: s } = t();
    if (!(o || s)) {
      e({ isLoading: !n, isRefreshing: n, error: null });
      try {
        const i = await Le.getFeed(r, { limit: 20 });
        e({
          posts: i.data,
          nextCursor: i.nextCursor,
          hasMore: i.nextCursor !== null,
          isLoading: false,
          isRefreshing: false,
        });
      } catch (i) {
        e({
          isLoading: false,
          isRefreshing: false,
          error: i instanceof Error ? i.message : "Ошибка загрузки",
        });
      }
    }
  },

  loadMoreFeed: async () => {
    const {
      activeFeed: n,
      isLoadingMore: r,
      hasMore: o,
      nextCursor: s,
    } = t();
    if (!(r || !o)) {
      e({ isLoadingMore: true });
      try {
        const i = await Le.getFeed(n, { limit: 20, cursor: s ?? undefined });
        e(c => ({
          posts: [...c.posts, ...i.data],
          nextCursor: i.nextCursor,
          hasMore: i.nextCursor !== null,
          isLoadingMore: false
        }));
      } catch {
        e({ isLoadingMore: false });
      }
    }
  },

  createPost: async ({
    wallOwnerId: n,
    text: r,
    spans: o = [],
    attachments: s = [],
    poll: i,
  }) => {
    const c = we.getState().profile;
    if (!c) {
      throw new Error("Not authenticated");
    }
    try {
      const l = s.map(({ mediaId: p }) => p);

      const { id: u } = await Le.createPost({
        wallOwnerId: n !== c.id ? n : undefined,
        text: r,
        spans: o.length > 0 ? o : undefined,
        attachmentIds: l.length > 0 ? l : undefined,
        poll: i
          ? {
              question: i.question,
              options: i.options,
              multipleChoice: i.multipleChoice ?? false,
            }
          : undefined,
      });

      const f = s.map(({ url: p }, h) => ({
        id: `temp-${h}`,
        url: p,
        type: "image"
      }));

      if (i) {
        f.push({
          id: `temp-poll-${Date.now()}`,
          type: "poll",
          question: i.question,
          options: i.options.map((p, h) => ({
            id: `temp-opt-${h}`,
            text: p.text,
            votes: 0
          })),
          totalVotes: 0,
          myVote: null,
        });
      }

      const d = {
        id: u,
        author: {
          id: c.id,
          username: c.username,
          displayName: c.displayName,
          avatar: c.avatar,
          isVerified: c.isVerified,
        },
        wallOwnerId: n,
        text: r,
        spans: o,
        attachments: f,
        reactions: { total: 0, myReaction: null },
        stats: { views: 0, comments: 0, reposts: 0 },
        reposted: false,
        originalPost: null,
        dominantEmoji: null,
        createdAt: new Date().toISOString(),
        editedAt: null,
      };

      e(p => ({
        posts: [d, ...p.posts],
        highlightedPostId: u
      }));

      Le.invalidateWallCache(n);
      try {
        const p = await Le.getPost(u);
        e(h => ({
          posts: h.posts.map(m => m.id === u ? p : m)
        }));
      } catch {}
    } catch (l) {
      console.error("Failed to create post:", l);
      throw l;
    }
  },

  clearHighlightedPost: () => {
    e({ highlightedPostId: null });
  },

  fetchPost: async (n) => {
    const r = t().posts.find(o => o.id === n);
    if (r) {
      e({ currentPost: r, currentPostLoading: false, currentPostError: false });
      return;
    }
    if (t().currentPost?.id !== n) {
      e({ currentPostLoading: true, currentPost: null, currentPostError: false });
      try {
        const o = await Le.getPost(n);
        e({ currentPost: o, currentPostLoading: false, currentPostError: false });
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

  editPost: async (n, r, o) => {
    await Le.editPost(n, { text: r, spans: o });
    const { posts: s, currentPost: i } = t();
    const c = new Date().toISOString();

    const l = s.find(u => u.id === n);

    e({
      posts: s.map(u => u.id === n ? { ...u, text: r, spans: o ?? u.spans, editedAt: c } : u
      ),
      currentPost:
        i?.id === n ? { ...i, text: r, spans: o ?? i.spans, editedAt: c } : i,
      _lastPostEdit: { postId: n, text: r, spans: o ?? [], editedAt: c },
    });

    if (l?.wallOwnerId) {
      Le.updatePostInWallCache(l.wallOwnerId, n, {
        text: r,
        spans: o ?? l.spans,
        editedAt: c,
      });
    }
  },

  deletePost: async (n) => {
    const { posts: r, currentPost: o } = t();
    const s = r;

    const i = r.find(c => c.id === n);

    e({
      posts: r.filter(c => c.id !== n),
      currentPost: o?.id === n ? null : o,
    });
    try {
      await Le.deletePost(n);
    } catch (c) {
      console.error("Failed to delete post:", c);

      if (i) {
        e({ posts: s });
      }

      throw c;
    }
  },

  updatePostLike: (n, r, o) => {
    e((s) => {
      const i = s.postStatsCache[n];

      const c = i
        ? {
            ...s.postStatsCache,
            [n]: {
              ...i,
              myReaction: r,
              likesTotal: Math.max(0, i.likesTotal + o),
            },
          }
        : s.postStatsCache;

      return {
        posts: s.posts.map(l => l.id === n
          ? {
              ...l,
              reactions: {
                ...l.reactions,
                myReaction: r,
                total: Math.max(0, l.reactions.total + o),
              },
            }
          : l
        ),
        currentPost:
          s.currentPost?.id === n
            ? {
                ...s.currentPost,
                reactions: {
                  ...s.currentPost.reactions,
                  myReaction: r,
                  total: Math.max(0, s.currentPost.reactions.total + o),
                },
              }
            : s.currentPost,
        postStatsCache: c,
        _lastLikeUpdate: { postId: n, myReaction: r, totalDelta: o },
      };
    });
  },

  updatePostReposted: (n, r, o) => {
    e((s) => {
      const i = s.postStatsCache[n];

      const c = i
        ? {
            ...s.postStatsCache,
            [n]: {
              ...i,
              reposted: r,
              repostsCount: Math.max(0, i.repostsCount + o),
            },
          }
        : s.postStatsCache;

      return {
        posts: s.posts.map(l => l.id === n
          ? {
              ...l,
              reposted: r,
              stats: {
                ...l.stats,
                reposts: Math.max(0, l.stats.reposts + o),
              },
            }
          : l
        ),
        currentPost:
          s.currentPost?.id === n
            ? {
                ...s.currentPost,
                reposted: r,
                stats: {
                  ...s.currentPost.stats,
                  reposts: Math.max(0, s.currentPost.stats.reposts + o),
                },
              }
            : s.currentPost,
        postStatsCache: c,
        _lastRepostUpdate: { postId: n, reposted: r, countDelta: o },
      };
    });
  },

  prependPost: (n) => {
    e(r => ({
      posts: r.posts.some(o => o.id === n.id) ? r.posts : [n, ...r.posts],
      highlightedPostId: n.id
    }));

    t().seedPostStats(n);
  },

  seedPostStats: (n) => {
    e((r) => {
      const r_postStatsCache = r.postStatsCache;
      const s = {};

      const i = (l) => {
        if (!r_postStatsCache[l.id] &&
          !s[l.id]) {
          (s[l.id] = {
              likesTotal: l.reactions.total,
              myReaction: l.reactions.myReaction,
              commentsCount: l.stats.comments,
              repostsCount: l.stats.reposts,
              viewsCount: l.stats.views,
              dominantEmoji: l.dominantEmoji,
              reposted: l.reposted,
            });
        }

        if (l.originalPost) {
          i(l.originalPost);
        }
      };

      i(n);
      return Object.keys(s).length === 0 ? r : { postStatsCache: { ...r_postStatsCache, ...s } };
    });
  },

  applyStatsUpdates: (n) => {
    if (n.length === 0) {
      return;
    }

    const r = new Map(n.map(s => [s.id, s]));

    const o = (s) => {
      const i = r.get(s.id);
      const c = s.originalPost ? o(s.originalPost) : s.originalPost;
      return !i && c === s.originalPost
        ? s
        : {
            ...s,
            ...(i && {
              reactions: { ...s.reactions, total: i.likesCount },
              stats: {
                ...s.stats,
                views: i.viewsCount,
                comments: i.commentsCount,
                reposts: i.repostsCount,
              },
              dominantEmoji: i.dominantEmoji,
            }),
            originalPost: c,
          };
    };

    e((s) => {
      const i = { ...s.postStatsCache };
      for (const c of n) {
        const l = i[c.id];

        if (l) {
          (i[c.id] = {
              ...l,
              likesTotal: c.likesCount,
              commentsCount: c.commentsCount,
              repostsCount: c.repostsCount,
              viewsCount: c.viewsCount,
              dominantEmoji: c.dominantEmoji,
            });
        }
      }
      return {
        posts: s.posts.map(o),
        currentPost: s.currentPost ? o(s.currentPost) : s.currentPost,
        postStatsCache: i,
        _lastStatsBatch: n,
      };
    });
  },

  updatePollVote: (n, r, o) => {
    const s = (i) => {
      const c = i.attachments.findIndex(h => h.type === "poll");
      if (c === -1) {
        return i;
      }
      const l = i.attachments[c];

      const u = l.options.map(h => h.id === r
        ? { ...h, votes: (h.votes ?? 0) + 1 }
        : h.id === o
        ? { ...h, votes: Math.max(0, (h.votes ?? 0) - 1) }
        : h
      );

      const f = o ? 0 : 1;

      const d = {
        ...l,
        options: u,
        totalVotes: (l.totalVotes ?? 0) + f,
        myVote: r,
      };

      const p = [...i.attachments];
      (p[c] = d);
      return { ...i, attachments: p };
    };
    e((i) => {
      const c = i.posts.map(u => u.id === n ? s(u) : u);

      const l = i.currentPost?.id === n ? s(i.currentPost) : i.currentPost;
      return { posts: c, currentPost: l };
    });
  },

  updatePollData: (n, r) => {
    const o = (s) => {
      const i = s.attachments.findIndex(u => u.type === "poll");
      if (i === -1) {
        return s;
      }

      const c = {
          ...s.attachments[i],
          options: (r.options ?? []).map(u => ({
            id: u.id,
            text: u.text,
            votes: u.votesCount ?? u.voteCount ?? 0
          })),
          totalVotes: r.totalVotes ?? 0,
          myVote:
            (r.votedOptionIds?.length ?? 0) > 0 ? r.votedOptionIds[0] : null,
        };

      const l = [...s.attachments];
      (l[i] = c);
      return { ...s, attachments: l };
    };
    e((s) => {
      const i = s.posts.map(l => l.id === n ? o(l) : l);

      const c = s.currentPost?.id === n ? o(s.currentPost) : s.currentPost;
      return { posts: i, currentPost: c };
    });
  },

  setFeedScrollPosition: (n) => {
    e({ feedScrollPosition: n });
  },

  setFeedMeasuredHeights: (n) => {
    e({ feedMeasuredHeights: n });
  },

  setProfileScrollPosition: (n, r) => {
    e(o => ({
      profileScrollByUser: { ...o.profileScrollByUser, [n]: r }
    }));
  },

  setProfileMeasuredHeights: (n, r) => {
    e(o => ({
      profileMeasuredHeightsByUser: {
        ...o.profileMeasuredHeightsByUser,
        [n]: r,
      }
    }));
  },

  reset: () => {
    t().feedMeasuredHeights.clear();

    Q(async () => {
      const { useCommentsStore: n } = await Promise.resolve().then(
        () => pv
      );
      return { useCommentsStore: n };
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
      profileScrollByUser: {},
      profileMeasuredHeightsByUser: {},
      highlightedPostId: null,
      _lastPostEdit: null,
      _lastLikeUpdate: null,
      _lastRepostUpdate: null,
      _lastStatsBatch: null,
      postStatsCache: {},
      currentPost: null,
      currentPostLoading: false,
      currentPostError: false,
    });
  }
}));

const io = Object.freeze(
  Object.defineProperty(
    { __proto__: null, usePostsStore: oe },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const wr = rt()(
  kl(
    e => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      }
    }),
    { name: "settings", storage: ws(() => localStorage) }
  )
);

const qe = new Map();
const dv = 60 * 1000/* 1e3 */;
const fv = 300 * 1000/* 1e3 */;
const _a = 20;
const ya = 500;
function hv() {
  const e = Date.now();
  for (const [t, n] of qe.entries()) {
    if (e - n.timestamp > fv) {
      qe.delete(t);
    }
  }
  if (qe.size > _a) {
    const t = Array.from(qe.entries()).sort(
      (r, o) => r[1].timestamp - o[1].timestamp
    );
    t.slice(0, t.length - _a).forEach(([r]) => qe.delete(r));
  }
}

const Rt = rt((e, t) => ({
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
    const { usePostsStore: r } = await Q(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => io);
        return { usePostsStore: u };
      }, undefined);

    const o = r.getState().currentPost;
    if (o && o.id === n && o.stats.comments === 0) {
      e({
        comments: [],
        commentsLoading: false,
        commentsHasMore: false,
        commentsNextCursor: null,
      });
      return;
    }
    hv();
    const s = wr.getState().commentsSort;
    const i = n;
    const c = qe.get(i);
    const l = Date.now();
    if (c && c.sort === s) {
      if (l - c.timestamp < dv) {
        e({
          comments: c.comments,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.hasMore,
          commentsLoading: false,
        });

        ot
          .getComments(n, { limit: 100, sort: s })
          .then((f) => {
          const f_data = f.data;

          qe.set(i, {
            comments: f_data,
            hasMore: f.nextCursor !== null,
            nextCursor: f.nextCursor,
            timestamp: Date.now(),
            sort: s,
          });

          e(p => p.comments.length > 0 && p.comments[0]?.postId === n
            ? {
                comments: f_data,
                commentsNextCursor: f.nextCursor,
                commentsHasMore: f.nextCursor !== null,
              }
            : p
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
      const u = await ot.getComments(n, { limit: 100, sort: s });
      const u_data = u.data;

      qe.set(i, {
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
    const {
      commentsLoadingMore: r,
      commentsHasMore: o,
      commentsNextCursor: s,
    } = t();
    if (r || !o) {
      return;
    }
    const i = wr.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await ot.getComments(n, {
        limit: 100,
        sort: i,
        cursor: s ?? undefined,
      });
      e((l) => {
        const u = [...l.comments, ...c.data];
        return {
          comments: u.length > ya ? u.slice(-ya) : u,
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
    const { comments: r } = t();

    let o = r.findIndex(_ => _.id === n);

    let s = false;
    let i = -1;
    let c = -1;
    if (o === -1) {
      for (let _ = 0; _ < r.length; _++) {
        const g = (r[_].previewReplies ?? []).findIndex(y => y.id === n);
        if (g !== -1) {
          (s = true);
          (i = _);
          (c = g);
          break;
        }
      }
    }
    if (o === -1 && !s) {
      return;
    }
    const l = s ? r[i].previewReplies[c] : r[o];
    const u = l.reactions.myReaction;
    const f = l.reactions.total;
    const d = u !== null;
    const p = d ? Math.max(0, f - 1) : f + 1;
    const h = d ? null : "love";
    const m = [...r];
    if (s) {
      const _ = [...(m[i].previewReplies ?? [])];
      (_[c] = { ..._[c], reactions: { total: p, myReaction: h } });
      (m[i] = { ...m[i], previewReplies: _ });
    } else {
      m[o] = { ...m[o], reactions: { total: p, myReaction: h } };
    }
    e({ comments: m });
    try {
      if (d) {
        await ot.unlikeComment(n);
      } else {
        await ot.likeComment(n);
      }
    } catch (_) {
      console.error("Failed to toggle comment like:", _);
      const b = [...t().comments];
      if (s) {
        const g = b.findIndex(y => y.previewReplies?.some(v => v.id === n)
        );
        if (g !== -1) {
          const y = b[g].previewReplies.findIndex(v => v.id === n);
          if (y !== -1) {
            const v = [...b[g].previewReplies];
            (v[y] = { ...v[y], reactions: { total: f, myReaction: u } });
            (b[g] = { ...b[g], previewReplies: v });
          }
        }
      } else {
        const g = b.findIndex(y => y.id === n);

        if (g !== -1) {
          (b[g] = { ...b[g], reactions: { total: f, myReaction: u } });
        }
      }
      e({ comments: b });
    }
  },

  addComment: async (
    n,
    {
      text: r,
      spans: o = [],
      parentId: s,
      attachments: i,
      replyToUserId: c,
      replyToInfo: l,
    }
  ) => {
    try {
      const u = s
          ? await ot.createReply(s, r, o, c, i)
          : await ot.createComment(n, r, o, undefined, i);

      const f = we.getState().profile;
      if (f) {
        const _ = (u.attachments || [])
            .filter(g => typeof g == "object" && g !== null)
            .map(g => g.type === "media" && g.media
          ? {
              id: g.media.id,
              type: g.media.type,
              url: g.media.url,
              duration: g.media.duration,
            }
          : { id: g.id, type: g.type, url: g.url, duration: g.duration }
            );

        const b = {
          id: u.id,
          postId: n,
          author: {
            id: f.id,
            username: f.username,
            displayName: f.displayName,
            avatar: f.avatar,
            isVerified: f.isVerified,
          },
          parentId: s ?? null,
          rootId: s ?? null,
          text: u.text ?? u.content ?? r,
          spans: u.spans,
          attachments: _,
          replyTo: u.replyTo ?? l ?? null,
          reactions: { total: 0, myReaction: null },
          stats: { replies: 0 },
          createdAt: new Date().toISOString(),
          editedAt: null,
        };

        e(
          s
            ? g => ({
            comments: g.comments.map(y => y.id === s
              ? {
                  ...y,
                  previewReplies: [...(y.previewReplies || []), b],
                  stats: { ...y.stats, replies: y.stats.replies + 1 },
                }
              : y
            ),

            highlightedCommentId: u.id
          })
            : g => ({
            comments: [b, ...g.comments],
            highlightedCommentId: u.id
          })
        );
      }

      const { usePostsStore: d } = await Q(async () => {
          const { usePostsStore: _ } = await Promise.resolve().then(() => io);
          return { usePostsStore: _ };
        }, undefined);

      const p = d.getState();

      if (p.currentPost &&
        p.currentPost.id === n) {
        d.setState({
          currentPost: {
            ...p.currentPost,
            stats: {
              ...p.currentPost.stats,
              comments: p.currentPost.stats.comments + 1,
            },
          },
        });
      }

      const h = wr.getState().commentsSort;
      const m = qe.get(n);

      if (m) {
        qe.set(n, { ...m, comments: t().comments, timestamp: Date.now() });
      } else {
        qe.set(n, {
              comments: t().comments,
              hasMore: t().commentsHasMore,
              nextCursor: t().commentsNextCursor,
              timestamp: Date.now(),
              sort: h,
            });
      }
    } catch (u) {
      console.error("Failed to add comment:", u);
      throw u;
    }
  },

  loadReplies: async (n) => {
    const { comments: r } = t();
    if (r.findIndex(s => s.id === n) !== -1) {
      try {
        const s = await ot.getReplies(n, { limit: 100 });
        e(i => ({
          comments: i.comments.map(c => c.id === n ? { ...c, previewReplies: s.data } : c
          )
        }));
      } catch (s) {
        console.error("Failed to load replies:", s);
      }
    }
  },

  editComment: async (n, r, o) => {
    const { comments: s } = t();

    const i = l => l.map(u => u.id === n
      ? {
          ...u,
          text: r,
          spans: o ?? u.spans,
          editedAt: new Date().toISOString(),
        }
      : u.previewReplies
      ? {
          ...u,
          previewReplies: u.previewReplies.map(f => f.id === n
            ? {
                ...f,
                text: r,
                spans: o ?? f.spans,
                editedAt: new Date().toISOString(),
              }
            : f
          ),
        }
      : u
    );

    const c = s;
    e({ comments: i(s) });
    try {
      await ot.editComment(n, r, o);
    } catch (l) {
      console.error("Failed to edit comment:", l);
      e({ comments: c });
      throw l;
    }
  },

  deleteComment: async (n) => {
    const { comments: r } = t();

    const o = r.some(u => u.id === n);

    const s = r.find(u => u.previewReplies?.some(f => f.id === n));

    const i = r;

    if (o) {
      e({ comments: r.filter(u => u.id !== n) });
    } else if (s) {
      e({
        comments: r.map(u => u.id === s.id
          ? {
              ...u,
              previewReplies: u.previewReplies?.filter(f => f.id !== n),
              stats: { ...u.stats, replies: u.stats.replies - 1 },
            }
          : u
        ),
      });
    }

    const { usePostsStore: c } = await Q(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => io);
        return { usePostsStore: u };
      }, undefined);

    const l = c.getState().currentPost;

    if (l) {
      c.setState({
        currentPost: {
          ...l,
          stats: { ...l.stats, comments: Math.max(0, l.stats.comments - 1) },
        },
      });
    }

    try {
      await ot.deleteComment(n);
    } catch (u) {
      console.error("Failed to delete comment:", u);
      e({ comments: i });
      throw u;
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
  }
}));

const pv = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useCommentsStore: Rt },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Nr = {
  feed_global: 1,
  feed_following: 2,
  feed_clan: 3,
  profile: 4,
  hashtag: 5,
  post_page: 6,
  link: 7,
  search: 8,
};

const mv = 0;
const gv = 1;
const _v = 2;
const yv = 3;
const va = 4;
const vv = 5;
const wv = 250;
const Ev = 0.5;
const Sv = 30000/* 3e4 */;
const bv = 2000/* 2e3 */;
const Cv = 20;
const wa = "dwell_sid";

const Tv = [
  0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
  0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
];

function Iv() {
  try {
    let e = sessionStorage.getItem(wa);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(wa, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
function Nv(e) {
  if (!e.isIntersecting) {
    return false;
  }

  const {
    boundingClientRect,
    intersectionRect,
    rootBounds
  } = e;

  if (!boundingClientRect || boundingClientRect.height === 0) {
    return false;
  }
  return ((intersectionRect ? intersectionRect.height / boundingClientRect.height : 0) >= Ev ||
  (rootBounds ? intersectionRect.height >= rootBounds.height / 2 : false) || e.intersectionRatio > 0.95);
}
class kv {
  observer = null;
  elementToPostId = new WeakMap();
  posts = new Map();
  buffer = [];
  seenPostIds = new Set();
  recentEvents = [];
  lastActivityAt = Date.now();
  sessionId = "";
  bound = false;
  init() {
    if (this.bound || typeof window === "undefined") {
      return;
    }
    (this.bound = true);
    (this.sessionId = Iv());

    (this.observer = new IntersectionObserver(
        (r) => {
          for (const o of r) {
            const s = this.elementToPostId.get(o.target);
            if (!s) {
              continue;
            }
            const i = this.posts.get(s);

            if (i) {
              (i.lastEntry = o);
              this.evaluate(i, null);
            }
          }
        },
        { threshold: Tv }
      ));

    const t = () => {
        this.lastActivityAt = Date.now();
      };

    const n = ["mousemove", "scroll", "keydown", "touchstart", "wheel"];
    for (const r of n) {
      window.addEventListener(r, t, { passive: true });
    }

    document.addEventListener("visibilitychange", () => {
      const r = document.hidden ? _v : null;
      this.evaluateAll(r);

      if (document.hidden) {
        this.flushBeacon();
      }
    });

    window.addEventListener("blur", () => {
      setTimeout(() => {
        if (!document.hidden) {
          this.evaluateAll(gv);
        }
      }, 50);
    });

    window.addEventListener("focus", () => this.evaluateAll(null));

    setInterval(() => this.evaluateAll(null), 5000/* 5e3 */);

    window.addEventListener("pagehide", () => {
      this.evaluateAll(yv);
      this.flushBeacon();
    });

    setInterval(() => this.flush(), bv);
  }
  observe(t, n, r, o, s) {
    if (!this.observer) {
      this.init();
    }

    if (!this.observer) {
      return;
    }

    const i = this.elementToPostId.get(t);
    if (i && i !== n) {
      const c = this.posts.get(i);

      if (c && c.element === t) {
        this.evaluate(c, va);
        this.posts.delete(i);
      }
    }
    this.elementToPostId.set(t, n);

    this.posts.set(n, {
      postId: n,
      source: r,
      sourceContext: o,
      vs: s,
      element: t,
      visibleSince: null,
      lastEntry: null,
    });

    this.observer.observe(t);
  }
  getActivePosts() {
    return [];
  }
  getRecentEvents() {
    return [];
  }
  unobserve(t) {
    if (!this.observer) {
      return;
    }
    const n = this.elementToPostId.get(t);
    this.observer.unobserve(t);
    this.elementToPostId.delete(t);

    if (!n) {
      return;
    }

    const r = this.posts.get(n);

    if (r) {
      this.evaluate(r, va);
      this.posts.delete(n);
    }
  }
  isUserActive() {
    return Date.now() - this.lastActivityAt < Sv && !document.hidden;
  }
  evaluateAll(t) {
    for (const n of this.posts.values()) {
      this.evaluate(n, t);
    }
  }
  evaluate(t, n) {
    const t_lastEntry = t.lastEntry;
    const o = !!t_lastEntry && Nv(t_lastEntry);
    const s = o && this.isUserActive() && n === null;
    const i = t.visibleSince !== null;
    const c = Date.now();
    if (!i && s) {
      t.visibleSince = c;
      return;
    }
    if (i && !s) {
      const t_visibleSince = t.visibleSince;
      const u = c - t_visibleSince;
      (t.visibleSince = null);

      if (u < wv) {
        return;
      }

      const f = n ?? (o ? vv : mv);
      const d = this.seenPostIds.has(t.postId);
      this.seenPostIds.add(t.postId);
      const p = t.source === "post_page" || t.source === "link";
      const h = { md: u, et: t_visibleSince, xt: c, r: f, v: t.vs };

      if (t.sourceContext) {
        (h.sc = t.sourceContext);
      }

      if (p) {
        (h.s = Nr[t.source]);
      }

      if (d) {
        (h.b = 1);
      }

      this.enqueue(h, t.postId, Nr[t.source]);
    }
  }
  enqueue(t, n, r) {
    this.buffer.push(t);

    if (this.buffer.length >= Cv) {
      this.flush();
    }
  }
  async maybeCompress(t) {
    const n = { "Content-Type": "application/json" };
    if (typeof CompressionStream === "undefined" || t.length < 512) {
      return { body: new TextEncoder().encode(t), headers: n };
    }
    try {
      const r = new Blob([t])
          .stream()
          .pipeThrough(new CompressionStream("deflate"));

      const o = await new Response(r).arrayBuffer();
      if (o.byteLength < t.length) {
        return { body: o, headers: { ...n, "Content-Encoding": "deflate" } };
      }
    } catch {}
    return { body: new TextEncoder().encode(t), headers: n };
  }
  async flush() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    this.buffer = [];
    const n = JSON.stringify({ sid: this.sessionId, e: t });
    const { body: r, headers: o } = await this.maybeCompress(n);
    O.post($.posts.dwellLog, r, { headers: o }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    O.post(
      $.posts.dwellLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const Ea = new kv();
function Rv(e, t, n, r = "", o = undefined) {
  F(() => {
    const t_current = t.current;
    if (!(!t_current || !o)) {
      Ea.observe(t_current, e, n, r, o);

      return () => {
        Ea.unobserve(t_current);
      };
    }
  }, [e, t, n, r, o]);
}
function Rs(e) {
  const t = oe(n => n.postStatsCache[e.id]);
  return (
    t || {
      likesTotal: e.reactions.total,
      myReaction: e.reactions.myReaction,
      commentsCount: e.stats.comments,
      repostsCount: e.stats.reposts,
      viewsCount: e.stats.views,
      dominantEmoji: e.dominantEmoji,
      reposted: e.reposted,
    }
  );
}

const Pv = ne(() => Q(() => import("./index-a9okhgYQ.js"), __vite__mapDeps([4, 5])).then(
  e => ({
    default: e.ChangelogModal
  })
)
  );

const Av = ne(() => Q(() => import("./index-BbFs5PEb.js"), __vite__mapDeps([0, 1, 2, 3])).then(
  e => ({
    default: e.SubscriptionModal
  })
)
);

const Kl = ({
  href: e,
  icon: t,
  children: n,
  badge: r,
  onActiveClick: o,
  isActive: s = false,
}) => {
  const [i] = er();
  const c = i.url || "/";
  const u = c === e || c.startsWith(`${e}/`) || s;
  return a("a", {
    href: e,
    className: `${xe.navItem} ${u ? xe.active : ""}`,
    onClick: (f) => {
      if (u && o) {
        f.preventDefault();
        o();
      }
    },
    children: [
      a("span", {
        className: xe.iconWrapper,
        children: [
          t,
          r !== undefined &&
            r > 0 &&
            a("span", { className: xe.badge, children: r > 99 ? "99+" : r }),
        ],
      }),
      a("span", { children: n }),
    ],
  });
};

const ao = e => a(Kl, { ...e });

const Ov = () => {
  const [e] = er();

  const t = oe(I => I.fetchFeed);

  const n = oe(I => I.isRefreshing);

  const r = we(I => I.logout);

  const o = Gl();
  const s = ks();
  const i = Xl();
  const { initialize: c, disconnectSSE: l } = Pt();
  const [u, f] = L(false);
  const [d, p] = L(false);
  const h = Al();

  const m = Es(I => I.fetchPortal);

  const _ = s?.username ? `/@${s.username}` : "/profile";

  F(
    () => {
      if (o) {
        c();
      }

      return () => {
        l();
      };
    },
    [o, c, l]
  );

  F(() => {
    m();
  }, [m]);

  const b = N(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    t(true);
  }, [t]);

  const g = N(() => {
    r();
  }, [r]);

  const y = Se(() => {
    const I = e.url || "/";
    return Is.some(E => I.startsWith(E));
  }, [e.url]);

  const v = Se(() => {
    const I = e.url || "/";
    return s?.username
      ? I === `/@${s.username}` || I.startsWith(`/@${s.username}/`)
      : false;
  }, [e.url, s?.username]);

  return y
    ? null
    : a("aside", {
        className: xe.aside,
        children: [
          a("div", {
            className: xe.asideTop,
            children: [
              a("div", {
                className: xe.asideBrand,
                children: [
                  a(Vg, {}),
                  a("button", {
                    className: xe.asideBrandVersion,
                    onClick: () => f(true),
                    title: "Что нового",
                    children: ["v", "1.1.1"],
                  }),
                ],
              }),
              a("nav", {
                className: xe.nav,
                children: [
                  a(ao, {
                    href: "/",
                    icon: n ? a(bs, {}) : a(Dl, {}),
                    onActiveClick: b,
                    children: "Лента",
                  }),
                  a(ao, {
                    href: "/search",
                    icon: a(Wl, {}),
                    children: "Поиск",
                  }),
                  a(Jg, {
                    path: "/event",
                    children: ({ matches: I }) => a("a", {
                      href: h.active && h.url ? h.url : "/event",
                      target: h.active && h.url ? "_blank" : undefined,
                      rel:
                        h.active && h.url ? "noopener noreferrer" : undefined,
                      className: `${xe.portalButton} ${
                        h.active ? xe.portalActive : ""
                      } ${I ? xe.active : ""}`,
                      title: "Ивент",
                      children: [
                        a("img", {
                          src: h.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: xe.portalImage,
                        }),
                        a("span", { children: "Ивент" }),
                      ],
                    }),
                  }),
                  a(ao, {
                    href: "/notifications",
                    icon: a(Hl, {}),
                    badge: i,
                    children: "Уведомления",
                  }),
                  a(Kl, {
                    href: _,
                    icon: a(Vl, {}),
                    isActive: v,
                    children: "Профиль",
                  }),
                ],
              }),
            ],
          }),
          a("div", {
            className: xe.asideBottom,
            children: [
              !s?.subscription?.isActive &&
                a("button", {
                  className: xe.logoutButton,
                  onClick: () => p(true),
                  children: [
                    a("span", { children: "⭐" }),
                    a("span", { children: "ИТД НУКСТА" }),
                  ],
                }),
              a("button", {
                className: xe.logoutButton,
                onClick: g,
                children: [
                  a(jg, { size: 20 }),
                  a("span", { children: "Выйти" }),
                ],
              }),
            ],
          }),
          u &&
            a(Te, {
              fallback: null,
              children: a(Pv, { isOpen: u, onClose: () => f(false) }),
            }),
          d &&
            a(Te, {
              fallback: null,
              children: a(Av, { isOpen: d, onClose: () => p(false) }),
            }),
        ],
      });
};

const xv = "qzGG";
const Lv = "SE5r";
const $v = "btwX";
const Mv = "FOj5";
const Rn = { sidebar: xv, sidebarContent: Lv, sidebarBottom: $v, legalLinks: Mv };

const Dv = () => {
  const [e] = er();
  return Se(() => {
    const n = e.url || "/";
    return Is.some(r => n.startsWith(r));
  }, [e.url])
    ? null
    : a("aside", {
        className: Rn.sidebar,
        children: [
          a("div", { className: Rn.sidebarContent }),
          a("div", {
            className: Rn.sidebarBottom,
            children: [
              a("ul", {
                className: Rn.legalLinks,
                children: [
                  a("li", {
                    children: a("a", {
                      href: "https://статус.итд.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Статус серверов",
                    }),
                  }),
                  a("li", {
                    children: a("a", {
                      href: "/terms",
                      children: "Условия использования",
                    }),
                  }),
                  a("li", {
                    children: a("a", {
                      href: "/privacy",
                      children: "Конфиденциальность",
                    }),
                  }),
                  a("li", {
                    children: a("a", {
                      href: "/cookies",
                      children: "Политика Cookies",
                    }),
                  }),
                ],
              }),
              a("span", {
                className: Rn.copyright,
                children: "© 2026 ООО «ИТД»",
              }),
            ],
          }),
        ],
      });
};

const Uv = "fLiM";
const Fv = "vCEQ";
const Bv = "Qi6P";
const Hv = "z40Q";
const Vv = "Ofb4";
const Wv = "sJjv";
const jv = "RrxH";
const zv = "YC66";
const qv = "U1Bj";
const Gv = "btWf";
const Yv = "wf0m";
const Xv = "Mx7p";

const Be = {
  mobileNavigationWrapper: Uv,
  navigation: Fv,
  indicator: Bv,
  indicatorHidden: Hv,
  navItem: Vv,
  label: Wv,
  active: jv,
  createButton: zv,
  iconWrapper: qv,
  portalImage: Gv,
  portalImageActive: Yv,
  badge: Xv,
};

const Sa = e => Symbol.iterator in e;

const ba = e => "entries" in e;

const Ca = (e, t) => {
  const n = e instanceof Map ? e : new Map(e.entries());
  const r = t instanceof Map ? t : new Map(t.entries());
  if (n.size !== r.size) {
    return false;
  }
  for (const [o, s] of n) {
    if (!r.has(o) || !Object.is(s, r.get(o))) {
      return false;
    }
  }
  return true;
};

const Kv = (e, t) => {
  const n = e[Symbol.iterator]();
  const r = t[Symbol.iterator]();
  let o = n.next();
  let s = r.next();

  while (!o.done && !s.done) {
    if (!Object.is(o.value, s.value)) {
      return false;
    }
    (o = n.next());
    (s = r.next());
  }

  return !!o.done && !!s.done;
};

function Zv(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : Sa(e) && Sa(t)
    ? ba(e) && ba(t)
      ? Ca(e, t)
      : Kv(e, t)
    : Ca(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function Ta(e) {
  const t = Ln.useRef(undefined);
  return (n) => {
    const r = e(n);
    return Zv(t.current, r) ? t.current : (t.current = r);
  };
}
const Jv = "X03g";
const Qv = "BRR7";
const e0 = "K2Rp";
const t0 = "M70E";
const n0 = "WwLg";
const r0 = "hGWy";
const o0 = "WuXm";
const s0 = "uXbP";
const i0 = "fCeY";
const a0 = "hLj0";
const c0 = "TRhw";
const l0 = "lOGA";
const u0 = "P0dq";
const d0 = "J9p4";
const f0 = "KXc7";
const h0 = "ADOT";
const p0 = "qrwi";
const m0 = "S9z6";
const g0 = "c6A3";
const _0 = "NBQK";
const y0 = "kjqg";
const v0 = "tSjd";
const w0 = "Px12";

const X = {
  skeleton: Jv,
  comment: Qv,
  content: e0,
  header: t0,
  headerLeft: n0,
  body: r0,
  actions: o0,
  likeBtn: s0,
  shimmer: i0,
  avatar: a0,
  more: c0,
  likeIcon: l0,
  name: u0,
  time: d0,
  line: f0,
  w100: h0,
  w85: p0,
  w65: m0,
  w50: g0,
  w40: _0,
  replyLabel: y0,
  likeCount: v0,
  list: w0,
};

function E0(e) {
  switch (e) {
    case "short":
      {
        return a("div", {
          className: X.body,
          children: a("div", { className: `${X.shimmer} ${X.line} ${X.w50}` }),
        });
      }
    case "medium":
      {
        return a("div", {
          className: X.body,
          children: [
            a("div", { className: `${X.shimmer} ${X.line} ${X.w100}` }),
            a("div", { className: `${X.shimmer} ${X.line} ${X.w65}` }),
          ],
        });
      }
    case "long":
      {
        return a("div", {
          className: X.body,
          children: [
            a("div", { className: `${X.shimmer} ${X.line} ${X.w100}` }),
            a("div", { className: `${X.shimmer} ${X.line} ${X.w85}` }),
            a("div", { className: `${X.shimmer} ${X.line} ${X.w40}` }),
          ],
        });
      }
  }
}
function Ps({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return a("div", {
    className: X.skeleton,
    "aria-hidden": "true",
    style: n,
    children: a("div", {
      className: X.comment,
      children: [
        a("div", { className: `${X.shimmer} ${X.avatar}` }),
        a("div", {
          className: X.content,
          children: [
            a("div", {
              className: X.header,
              children: [
                a("div", {
                  className: X.headerLeft,
                  children: [
                    a("div", { className: `${X.shimmer} ${X.name}` }),
                    a("div", { className: `${X.shimmer} ${X.time}` }),
                  ],
                }),
                a("div", { className: `${X.shimmer} ${X.more}` }),
              ],
            }),
            E0(e),
            a("div", {
              className: X.actions,
              children: [
                a("div", { className: `${X.shimmer} ${X.replyLabel}` }),
                a("div", {
                  className: X.likeBtn,
                  children: [
                    a("div", { className: `${X.shimmer} ${X.likeIcon}` }),
                    a("div", { className: `${X.shimmer} ${X.likeCount}` }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Ia = ["medium", "short", "long", "medium", "short"];
function S0({ count: e = 4 }) {
  return a("div", {
    className: X.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка комментариев",
    children: Array.from({ length: e }, (t, n) => a(Ps, { variant: Ia[n % Ia.length], delayMs: n * 120 }, n)
    ),
  });
}

const vt = {
    MAX_CHARS: 1000/* 1e3 */,
    MIN_POLL_OPTIONS: 2,
    MAX_POLL_OPTIONS: 10,
    MAX_POLL_QUESTION_LENGTH: 200,
    MAX_POLL_OPTION_LENGTH: 100,
    MAX_TEXTAREA_HEIGHT: 400,
  };

const co = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};

function b0() {
  const [e, t] = L(false);
  const [n, r] = L(co);

  const o = N((m) => {
    if (m.length <= vt.MAX_POLL_QUESTION_LENGTH) {
      r(_ => ({
        ..._,
        question: m
      }));
    }
  }, []);

  const s = N((m, _) => {
    if (_.length <= vt.MAX_POLL_OPTION_LENGTH) {
      r(b => ({
        ...b,
        options: b.options.map(g => g.id === m ? { ...g, text: _ } : g)
      }));
    }
  }, []);

  const i = N(() => {
    if (n.options.length < vt.MAX_POLL_OPTIONS) {
      r(m => ({
        ...m,
        options: [...m.options, { id: Date.now().toString(), text: "" }]
      }));
    }
  }, [n.options.length]);

  const c = N(
    (m) => {
      if (n.options.length > vt.MIN_POLL_OPTIONS) {
        r(_ => ({
          ..._,
          options: _.options.filter(b => b.id !== m)
        }));
      }
    },
    [n.options.length]
  );

  const l = N(() => {
    r(m => ({
      ...m,
      multipleChoice: !m.multipleChoice
    }));
  }, []);

  const u = N(() => {
    t(false);
    r(co);
  }, []);

  const f = N(() => {
    t(m => !m);
  }, []);

  const d = N(() => {
    if (!e) {
      return true;
    }
    const m = n.question.trim().length > 0;

    const _ = n.options.filter(b => b.text.trim().length > 0);

    return m && _.length >= vt.MIN_POLL_OPTIONS;
  }, [e, n]);

  const p = N(() => {
    if (!(!e || !d())) {
      return {
        question: n.question.trim(),
        options: n.options
          .filter(m => m.text.trim().length > 0)
          .map(m => ({
          text: m.text.trim()
        })),
        multipleChoice: n.multipleChoice,
      };
    }
  }, [e, d, n]);

  const h = N(() => {
    t(false);
    r(co);
  }, []);

  return {
    isPollOpen: e,
    poll: n,
    togglePoll: f,
    handlePollQuestionChange: o,
    handlePollOptionChange: s,
    handleAddPollOption: i,
    handleRemovePollOption: c,
    handleMultipleChoiceToggle: l,
    handleClosePoll: u,
    isPollValid: d,
    getPollData: p,
    resetPoll: h,
  };
}
function Zl(e = 10, t = false) {
  const [n, r] = L([]);
  const [o, s] = L([]);
  const i = R(null);
  const c = R(n);
  const l = R(o);
  (c.current = n);
  (l.current = o);

  F(
    () => () => {
      c.current.forEach(v => URL.revokeObjectURL(v.previewUrl));

      l.current.forEach(v => URL.revokeObjectURL(v.previewUrl));
    },
    []
  );

  const u = o.length > 0;

  const f = n.some(v => v.type === "video") || o.some(v => v.type === "video");

  const d = n.some(v => v.type === "image") || o.some(v => v.type === "image");

  const p = N(() => {
    i.current?.click();
  }, []);

  const h = N(
    async (v) => {
      const I = ln.isValidVideoType(v);
      const E = ln.isValidImageType(v);
      if (I && !t) {
        _t.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!E && !I) {
        _t.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const l_current = l.current;

      const T =
        c_current.some(D => D.type === "video") ||
        l_current.some(D => D.type === "video");

      const w =
        c_current.some(D => D.type === "image") ||
        l_current.some(D => D.type === "image");

      if (I && w) {
        _t.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (E && T) {
        _t.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (I && T) {
        _t.error("Можно загрузить только 1 видео");
        return;
      }
      const P = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const x = URL.createObjectURL(v);
      const k = I ? "video" : "image";
      s(D => [
        ...D,
        { id: P, file: v, previewUrl: x, progress: 0, type: k },
      ]);
      try {
        const D = await ln.uploadMedia(v);

        s(Y => Y.filter(he => he.id !== P));

        r(Y => [
          ...Y,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: D.id,
            url: D.url,
            previewUrl: x,
            type: k,
          },
        ]);
      } catch (D) {
        let Y = "Ошибка загрузки";

        if (Oe(D)) {
          (Y = g_(D.code, D.message));
        } else if (D instanceof Error) {
          (Y = D.message);
        }

        _t.error(Y);

        s(he => he.filter(se => se.id !== P));

        URL.revokeObjectURL(x);
      }
    },
    [t]
  );

  const m = N(
    (v) => {
      const v_target = v.target;
      const v_target_files = v_target.files;
      if (!v_target_files || v_target_files.length === 0) {
        return;
      }
      const S = n.length + o.length;
      const C = e - S;
      if (C <= 0) {
        return;
      }
      Array.from(v_target_files).slice(0, C).forEach(h);
      (v_target.value = "");
    },
    [n.length, o.length, e, h]
  );

  const _ = N((v) => {
    r((I) => {
      const E = I.find(S => S.id === v);

      if (E) {
        URL.revokeObjectURL(E.previewUrl);
      }

      return I.filter(S => S.id !== v);
    });

    s((I) => {
      const E = I.find(S => S.id === v);

      if (E) {
        URL.revokeObjectURL(E.previewUrl);
      }

      return I.filter(S => S.id !== v);
    });
  }, []);

  const b = N(
    (v) => {
      const I = v.filter(C => t ? ln.isValidMediaType(C) : ln.isValidImageType(C)
      );
      if (I.length === 0) {
        return;
      }
      const E = c.current.length + l.current.length;
      const S = e - E;

      if (S > 0) {
        I.slice(0, S).forEach(h);
      }
    },
    [e, h, t]
  );

  const g = N(
    async (v) => {
      const [I, E] = v.split(",");
      const S = I.match(/:(.*?);/)?.[1] || "image/png";
      const C = atob(E);
      const T = new Uint8Array(C.length);
      for (let x = 0; x < C.length; x++) {
        T[x] = C.charCodeAt(x);
      }
      const w = new Blob([T], { type: S });
      const P = new File([w], `drawing-${Date.now()}.png`, { type: "image/png" });
      h(P);
    },
    [h]
  );

  const y = N(() => {
    n.forEach(v => URL.revokeObjectURL(v.previewUrl));

    o.forEach(v => URL.revokeObjectURL(v.previewUrl));

    r([]);
    s([]);
  }, [n, o]);

  return {
    images: n,
    uploadingImages: o,
    isUploading: u,
    hasVideo: f,
    hasImages: d,
    openFilePicker: p,
    removeImage: _,
    addImage: g,
    uploadFiles: b,
    clearAll: y,
    fileInputRef: i,
    handleFileChange: m,
  };
}
const C0 = "vi8K";
const T0 = "vb9q";
const I0 = "qCbI";
const N0 = "GyG0";
const k0 = "pPSR";
const R0 = "Xd4L";
const P0 = "Vofm";
const A0 = "kRGi";
const O0 = "WCm2";
const x0 = "TLK9";
const L0 = "Tfh0";
const $0 = "cgmy";
const M0 = "r9CQ";
const D0 = "XcKa";
const U0 = "rhc5";
const F0 = "tVAX";
const B0 = "m6WN";
const H0 = "J5Cx";
const V0 = "WhMN";
const W0 = "x7Ub";
const j0 = "xRSH";
const z0 = "wKm6";
const q0 = "G7U2";
const G0 = "Ympd";
const Y0 = "GHAI";
const X0 = "ek4A";
const K0 = "iQVN";
const Z0 = "Kvo1";
const J0 = "k1cT";
const Q0 = "Mdpg";
const ew = "OGjG";
const tw = "Ifg6";
const nw = "vDf2";
const rw = "nDFb";
const ow = "itD8";

const J = {
  form: C0,
  dragActive: T0,
  whatsNew: I0,
  editor: N0,
  dragOverlay: k0,
  attachments: R0,
  attachmentPreview: P0,
  uploading: A0,
  uploadError: O0,
  videoPreviewWrapper: x0,
  videoPlayIcon: L0,
  uploadOverlay: $0,
  spinner: M0,
  errorOverlay: D0,
  errorText: U0,
  removeAttachment: F0,
  actions: B0,
  mediaButtons: H0,
  mediaButton: V0,
  submitGroup: W0,
  charCount: j0,
  error: z0,
  pollContainer: q0,
  pollHeader: G0,
  pollTitle: Y0,
  pollClose: X0,
  pollQuestion: K0,
  pollOptions: Z0,
  pollOptionRow: J0,
  pollOption: Q0,
  removeOption: ew,
  addOption: tw,
  pollFooter: nw,
  pollToggle: rw,
  active: ow,
};

function Na({ src: e, type: t }) {
  return t === "video"
    ? a("div", {
        className: J.videoPreviewWrapper,
        children: [
          a("video", { src: e, preload: "metadata" }),
          a("div", {
            className: J.videoPlayIcon,
            children: a(Ug, { size: 24 }),
          }),
        ],
      })
    : a("img", { src: e, alt: "" });
}
function Jl({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? a("div", {
        className: J.attachments,
        children: [
          e.map(o => a(
            "div",
            {
              className: J.attachmentPreview,
              children: [
                a(Na, { src: o.previewUrl, type: o.type }),
                a("button", {
                  className: J.removeAttachment,
                  onClick: () => n(o.id),
                  children: a(ct, {}),
                }),
              ],
            },
            o.id
          )
          ),
          t.map(o => a(
            "div",
            {
              className: `${J.attachmentPreview} ${
                o.error ? J.uploadError : J.uploading
              }`,
              children: [
                a(Na, { src: o.previewUrl, type: o.type }),
                !o.error &&
                  a("div", {
                    className: J.uploadOverlay,
                    children: a("div", { className: J.spinner }),
                  }),
                o.error &&
                  a("div", {
                    className: J.errorOverlay,
                    children: a("span", {
                      className: J.errorText,
                      children: o.error,
                    }),
                  }),
                a("button", {
                  className: J.removeAttachment,
                  onClick: () => n(o.id),
                  children: a(ct, {}),
                }),
              ],
            },
            o.id
          )
          ),
        ],
      })
    : null;
}
function sw({
  poll: e,
  onQuestionChange: t,
  onOptionChange: n,
  onAddOption: r,
  onRemoveOption: o,
  onMultipleChoiceToggle: s,
  onClose: i,
}) {
  return a("div", {
    className: J.pollContainer,
    children: [
      a("div", {
        className: J.pollHeader,
        children: [
          a("span", { className: J.pollTitle, children: "Опрос" }),
          a("button", {
            className: J.pollClose,
            onClick: i,
            children: a(ct, {}),
          }),
        ],
      }),
      a("input", {
        type: "text",
        className: J.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: c => t(c.target.value),
      }),
      a("div", {
        className: J.pollOptions,
        children: e.options.map((c, l) => a(
          "div",
          {
            className: J.pollOptionRow,
            children: [
              a("input", {
                type: "text",
                className: J.pollOption,
                placeholder: `Вариант ${l + 1}`,
                value: c.text,
                maxLength: 50,
                onInput: u => n(c.id, u.target.value),
              }),
              e.options.length > vt.MIN_POLL_OPTIONS &&
                a("button", {
                  className: J.removeOption,
                  onClick: () => o(c.id),
                  children: a(ct, {}),
                }),
            ],
          },
          c.id
        )
        ),
      }),
      e.options.length < vt.MAX_POLL_OPTIONS &&
        a("button", {
          className: J.addOption,
          onClick: r,
          children: [a(Cs, {}), a("span", { children: "Добавить вариант" })],
        }),
      a("div", {
        className: J.pollFooter,
        children: a("label", {
          className: J.pollToggle,
          children: [
            a("input", {
              type: "checkbox",
              checked: e.multipleChoice,
              onChange: s,
            }),
            a("span", { children: "Несколько вариантов ответа" }),
          ],
        }),
      }),
    ],
  });
}
const iw = "CyDn";
const aw = "jsxY";
const cw = "ZYrP";
const lw = "NQ3C";
const uw = "G68z";
const dw = "uYHK";
const fw = "xFbR";
const hw = "SZzi";
const pw = "iNIn";
const mw = "O1ov";
const gw = "qslA";
const _w = "yNqO";
const yw = "iiUm";
const vw = "Xdfq";
const ww = "jLOj";
const Ew = "bz26";

const $e = {
  editor: iw,
  empty: aw,
  bold: cw,
  italic: lw,
  underline: uw,
  strike: dw,
  spoiler: fw,
  monospace: hw,
  quote: pw,
  link: mw,
  menu: gw,
  buttons: _w,
  button: yw,
  linkForm: vw,
  linkInput: ww,
  linkSubmit: Ew,
};

const kr = {
  bold: $e.bold,
  italic: $e.italic,
  underline: $e.underline,
  strike: $e.strike,
  spoiler: $e.spoiler,
  monospace: $e.monospace,
  quote: $e.quote,
  link: $e.link,
};

function lo(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function Sw(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function bw(e) {
  return e !== "mention" && e !== "hashtag";
}
function ka(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const r of t) {
    if (!bw(r.type)) {
      continue;
    }
    const o = kr[r.type];
    const s = r.type === "link" ? ` data-url="${Sw(r.url)}"` : "";
    n = `<span class="${o}"${s}>${n}</span>`;
  }
  return n;
}
function Cw(e, t, n) {
  let r = 0;
  const o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let s = o.nextNode();

  while (s) {
    if (s === t) {
      return r + n;
    }
    (r += s.textContent?.length || 0);
    (s = o.nextNode());
  }

  return r;
}
function Tw(e, t) {
  return e
    .map((n) => {
      const r = n.offset + n.length;
      return n.offset >= t.length
        ? null
        : r > t.length
        ? { ...n, length: t.length - n.offset }
        : n;
    })
    .filter(n => n !== null);
}
function Iw(e) {
  const t = [];

  const n = (r, o) => {
    if (r.nodeType === Node.TEXT_NODE) {
      return o + (r.textContent?.length || 0);
    }
    if (r.nodeType === Node.ELEMENT_NODE) {
      const s = r;
      if (s.tagName === "BR") {
        return o + 1;
      }
      let i = null;
      for (const [u, f] of Object.entries(kr)) {
        if (s.classList.contains(f)) {
          i = u;
          break;
        }
      }
      const c = o;
      let l = o;
      for (const u of Array.from(r.childNodes)) {
        l = n(u, l);
      }
      if (i && l > c) {
        const u =
          i === "link"
            ? {
                type: "link",
                url: s.dataset.url || "",
                offset: c,
                length: l - c,
              }
            : { type: i, offset: c, length: l - c };
        t.push(u);
      }
      return l;
    }
    return o;
  };

  n(e, 0);
  return t;
}
function Nw(e, t) {
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
function kw(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}

const Rw = [
    { type: "bold", icon: Pg, title: "Жирный" },
    { type: "italic", icon: Og, title: "Курсив" },
    { type: "underline", icon: Mg, title: "Подчёркнутый" },
    { type: "strike", icon: $g, title: "Зачёркнутый" },
    { type: "spoiler", icon: Lg, title: "Спойлер" },
    { type: "monospace", icon: Ag, title: "Моноширинный" },
    { type: "quote", icon: xg, title: "Цитата" },
    { type: "link", icon: xl, title: "Ссылка" },
  ];

const Wr = ml((
  {
    value: t,
    spans: n,
    onChange: r,
    placeholder: o = "Написать...",
    maxLength: s = 5000/* 5e3 */,
    autoFocus: i = false,
    className: c = "",
    minHeight: l = 40,
    maxHeight: u = 400,
    onSubmit: f,
    disableFormatting: d = false,
    onImagePaste: p,
  },
  h
) => {
  const m = R(null);
  const [_, b] = L(false);
  const [g, y] = L({ x: 0, y: 0 });
  const [v, I] = L(false);
  const [E, S] = L("");
  const C = R(null);
  const T = R(null);
  const w = R(null);
  const P = R(false);
  const x = R(false);
  const k = R(t);
  const D = R(n);
  const Y = R(r);

  F(() => {
    (k.current = t);
    (D.current = n);
    (Y.current = r);
  }, [t, n, r]);

  ms(
    h,
    () => ({
      insertText: (A) => {
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        m_current.focus();
        const H = window.getSelection();
        if (!H) {
          return;
        }
        let te = 0;
        if (H.rangeCount > 0) {
          const re = H.getRangeAt(0);
          te = Cw(m_current, re.startContainer, re.startOffset);
        }
        const k_current = k.current;
        const D_current = D.current;
        const ae = k_current.slice(0, te) + A + k_current.slice(te);

        const Ce = D_current.map(re => re.offset >= te
          ? { ...re, offset: re.offset + A.length }
          : re.offset + re.length > te
          ? { ...re, length: re.length + A.length }
          : re
        );

        (x.current = true);
        (k.current = ae);
        (D.current = Ce);
        const be = document.createTextNode(A);
        if (H.rangeCount > 0) {
          const re = H.getRangeAt(0);
          re.deleteContents();
          re.insertNode(be);
          re.setStartAfter(be);
          re.setEndAfter(be);
          H.removeAllRanges();
          H.addRange(re);
        }
        Y.current(ae, Ce);
      },

      focus: () => {
        m.current?.focus();
      }
    }),
    []
  );

  const he = N(() => {
    if (!t) {
      return "";
    }
    if (n.length === 0) {
      return lo(t);
    }

    const A = [...n].sort((z, ae) => z.offset - ae.offset);

    const U = [];
    for (const z of A) {
      U.push({ pos: z.offset, type: "start", span: z });
      U.push({ pos: z.offset + z.length, type: "end", span: z });
    }
    U.sort((z, ae) => z.pos !== ae.pos
      ? z.pos - ae.pos
      : z.type !== ae.type
      ? z.type === "end"
        ? -1
        : 1
      : 0
    );
    let H = "";
    let te = 0;
    const j = [];
    for (const z of U) {
      if (z.pos > te) {
        const ae = t.substring(te, z.pos);
        (H += ka(lo(ae), j));
        (te = z.pos);
      }
      if (z.type === "start") {
        j.push(z.span);
      } else {
        const ae = j.indexOf(z.span);

        if (ae !== -1) {
          j.splice(ae, 1);
        }
      }
    }
    if (te < t.length) {
      const z = t.substring(te);
      H += ka(lo(z), j);
    }
    return H || "<br>";
  }, [t, n]);

  F(() => {
    if (x.current) {
      x.current = false;
      return;
    }
    const m_current = m.current;
    if (!m_current || (document.activeElement === m_current && t !== "")) {
      return;
    }
    const U = he();

    if (m_current.innerHTML !== U) {
      (m_current.innerHTML = U);
    }
  }, [he, t]);

  F(() => {
    if (i && m.current) {
      const m_current = m.current;
      m_current.focus();

      if (m_current.childNodes.length > 0) {
        const U = window.getSelection();
        if (U) {
          const H = document.createRange();
          H.selectNodeContents(m_current);
          H.collapse(false);
          U.removeAllRanges();
          U.addRange(H);
        }
      }
    }
  }, [i]);

  F(() => {
    if (v && T.current) {
      T.current.focus();
    }
  }, [v]);

  const se = N(
      (A) => {
        if (P.current) {
          return;
        }
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        if (A?.data === " ") {
          const j = window.getSelection();
          if (j && j.rangeCount > 0) {
            const ae = j.getRangeAt(0).startContainer;
            let Ce = null;
            let be = ae;

            while (be && be !== m_current) {
              if (be.nodeType === Node.ELEMENT_NODE) {
                const re = be;
                if (re.tagName === "SPAN" && re.className) {
                  Ce = re;
                  break;
                }
              }
              be = be.parentNode;
            }

            if (Ce) {
              const re = Ce.textContent || "";
              if (re.endsWith(" ")) {
                Ce.textContent = re.slice(0, -1);
                const $t = document.createTextNode(" ");
                Ce.parentNode?.insertBefore($t, Ce.nextSibling);
                const bt = document.createRange();
                bt.setStartAfter($t);
                bt.setEndAfter($t);
                j.removeAllRanges();
                j.addRange(bt);
              }
            }
          }
        }
        const H = m_current.innerText.replace(/\n$/, "");
        if (H.length > s) {
          const j = H.substring(0, s);
          (x.current = true);
          r(j, Tw(n, j));
          return;
        }
        const te = Iw(m_current);
        (x.current = true);
        r(H, te);
      },
      [s, r, n]
    );

  const pe = N(
    (A) => {
      if (d) {
        return;
      }
      const U = window.getSelection();
      if (!U || U.isCollapsed) {
        return;
      }
      A.preventDefault();
      (w.current = U.getRangeAt(0).cloneRange());

      const H = Math.max(
          10,
          Math.min(A.clientX - 150, window.innerWidth - 310)
        );

      const te = Math.max(10, A.clientY - 50);
      y({ x: H, y: te });
      b(true);
    },
    [d]
  );

  const de = N(
    (A) => {
      A.preventDefault();

      if (p && A.clipboardData?.files?.length) {
        const z = Array.from(A.clipboardData.files).filter(ae => ae.type.startsWith("image/")
        );
        if (z.length > 0) {
          p(z);
          return;
        }
      }

      const U = A.clipboardData?.getData("text/plain") || "";
      if (!U) {
        return;
      }
      const H = window.getSelection();
      if (!H || !H.rangeCount) {
        return;
      }
      const te = H.getRangeAt(0);
      te.deleteContents();
      const j = document.createTextNode(U);
      te.insertNode(j);
      te.setStartAfter(j);
      te.setEndAfter(j);
      H.removeAllRanges();
      H.addRange(te);
      se();
    },
    [se, p]
  );

  const q = N(() => {
    const m_current = m.current;
    if (m_current && !k.current) {
      const U = window.getSelection();
      if (U) {
        const H = document.createRange();
        H.setStart(m_current, 0);
        H.collapse(true);
        U.removeAllRanges();
        U.addRange(H);
      }
    }
  }, []);

  const ee = N(
    (A) => {
      if (A.key === "Enter" && !A.shiftKey && f) {
        A.preventDefault();
        f();
        return;
      }
      if (!d && (A.ctrlKey || A.metaKey)) {
        let U = null;
        switch (A.key.toLowerCase()) {
          case "b":
            {
              U = "bold";
              break;
            }
          case "i":
            {
              U = "italic";
              break;
            }
          case "u":
            {
              U = "underline";
              break;
            }
        }

        if (U) {
          A.preventDefault();
          W(U);
        }
      }
    },
    [f, d]
  );

  const W = N(
    (A, U) => {
      const m_current = m.current;
      if (!m_current) {
        return;
      }
      const te = window.getSelection();
      if (!te ||
      (w.current && (te.removeAllRanges(), te.addRange(w.current)),
      te.isCollapsed)) {
        return;
      }
      const j = te.getRangeAt(0);
      const z = document.createElement("span");
      (z.className = kr[A]);

      if (A === "link" && U) {
        (z.dataset.url = U);
      }

      const ae = Nw(j.commonAncestorContainer, kr[A]);
      if (ae) {
        kw(ae);
      } else {
        try {
          j.surroundContents(z);
        } catch {
          const Ce = j.extractContents();
          z.appendChild(Ce);
          j.insertNode(z);
        }
      }
      se();
      b(false);
      I(false);
      S("");
      (w.current = null);
      m_current.focus();
    },
    [se]
  );

  const M = N(
    (A) => {
      if (A === "link") {
        I(true);
      } else {
        W(A);
      }
    },
    [W]
  );

  const fe = N(
    (A) => {
      A.preventDefault();

      if (E.trim()) {
        W("link", E.trim());
      }
    },
    [W, E]
  );

  F(() => {
    if (!_) {
      return;
    }

    const A = (H) => {
      if (C.current &&
        !C.current.contains(H.target)) {
        b(false);
        I(false);
        S("");
        (w.current = null);
      }
    };

    const U = () => {
      b(false);
      I(false);
      S("");
      (w.current = null);
    };

    document.addEventListener("mousedown", A);
    window.addEventListener("scroll", U, true);

    return () => {
      document.removeEventListener("mousedown", A);
      window.removeEventListener("scroll", U, true);
    };
  }, [_]);
  const G = !t;
  return a(ke, {
    children: [
      a("div", {
        ref: m,
        className: `${$e.editor} ${c} ${G ? $e.empty : ""}`,
        contentEditable: true,
        "data-placeholder": o,
        onInput: A => se(A),
        onFocus: q,
        onPaste: de,
        onContextMenu: pe,
        onKeyDown: ee,
        onCompositionStart: () => {
          P.current = true;
        },
        onCompositionEnd: () => {
          (P.current = false);
          se();
        },
        style: { minHeight: l, maxHeight: u },
      }),
      _ &&
        nn(
          a("div", {
            ref: C,
            className: $e.menu,
            style: { left: g.x, top: g.y },
            children: v
              ? a("form", {
                  className: $e.linkForm,
                  onSubmit: fe,
                  children: [
                    a("input", {
                      ref: T,
                      type: "url",
                      className: $e.linkInput,
                      placeholder: "https://...",
                      value: E,
                      onInput: A => S(A.target.value),
                    }),
                    a("button", {
                      type: "submit",
                      className: $e.linkSubmit,
                      disabled: !E.trim(),
                      children: "OK",
                    }),
                  ],
                })
              : a("div", {
                  className: $e.buttons,
                  children: Rw.map(({ type: A, icon: U, title: H }) => a(
                    "button",
                    {
                      type: "button",
                      className: $e.button,
                      onClick: () => M(A),
                      title: H,
                      children: a(U, { size: 16 }),
                    },
                    A
                  )
                  ),
                }),
          }),
          document.body
        ),
    ],
  });
});

const Pw = "oYDx";
const Aw = "xnqD";
const Ow = "AG4A";
const xw = "ZMZ5";
const Lw = "kiW0";
const $w = "Xl0e";
const Mw = "Pidm";
const Dw = "lm64";
const Uw = "FFQK";
const Fw = "snNN";
const Bw = "rmhg";
const Hw = "bVNH";
const Vw = "cibr";
const Ww = "a5m6";
const jw = "kvug";
const zw = "agGj";
const qw = "RkHE";
const Gw = "utUc";
const Yw = "WnRi";
const Xw = "fqvu";
const Kw = "BiRL";

const ye = {
  commentInput: Pw,
  replyMode: Aw,
  inputRow: Ow,
  attachmentStrip: xw,
  circleButton: Lw,
  micButton: $w,
  sendButton: Mw,
  submitting: Dw,
  textareaContainer: Uw,
  expanded: Fw,
  voiceMode: Bw,
  inputWrapper: Hw,
  commentCharCount: Vw,
  error: Ww,
  input: jw,
  replyHeader: zw,
  replyText: qw,
  replyName: Gw,
  replyClose: Yw,
  dragActive: Xw,
  dragOverlay: Kw,
};

const Zw = "Wbye";
const Jw = "bEDp";
const Qw = "c1TP";
const uo = { textInput: Zw, entering: Jw, sendButton: Qw };
const eE = 1000/* 1e3 */;
function tE({
  text: e,
  spans: t,
  onChange: n,
  placeholder: r,
  onSubmit: o,
  isEntering: s,
  autoFocus: i,
  isSubmitting: c,
  sendDisabled: l,
  onImagePaste: u,
}) {
  const f = eE - e.length;
  const d = f < 0;
  const p = [uo.textInput, s ? uo.entering : ""].filter(Boolean).join(" ");
  return a("div", {
    className: p,
    children: [
      a("div", {
        className: ye.inputWrapper,
        children: [
          a(Wr, {
            value: e,
            spans: t,
            onChange: n,
            placeholder: r,
            autoFocus: i,
            className: ye.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: d ? undefined : o,
            disableFormatting: true,
            onImagePaste: u,
          }),
          d &&
            a("span", {
              className: `${ye.commentCharCount} ${ye.error}`,
              children: f,
            }),
        ],
      }),
      a("button", {
        className: `${ye.circleButton} ${ye.sendButton} ${uo.sendButton} ${
          c ? ye.submitting : ""
        }`,
        onClick: o,
        disabled: c || l || d,
        children: c ? a(zl, { size: "xs" }) : a(Fg, { size: 20 }),
      }),
    ],
  });
}
const nE = ne(() => Q(() => import("./VoiceInput-ChV7G67p.js"), __vite__mapDeps([6, 7, 8])).then(
  e => ({
    default: e.VoiceInput
  })
)
);
function Ql({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: r,
  onCancelReply: o,
  autoFocus: s,
}) {
  const { text: i, spans: c, handleChange: l, reset: u } = Vr();
  const [f, d] = L("text");
  const [p, h] = L(false);
  const [m, _] = L(false);
  const [b, g] = L(false);
  const [y, v] = L(false);
  const I = R(false);
  const E = R(null);
  const S = R(0);

  const {
    images: C,
    uploadingImages: T,
    isUploading: w,
    openFilePicker: P,
    removeImage: x,
    uploadFiles: k,
    clearAll: D,
    fileInputRef: Y,
    handleFileChange: he,
  } = Zl(4);

  F(
    () => () => {
      if (E.current) {
        clearTimeout(E.current);
      }
    },
    []
  );
  const se = C.length > 0 || T.length > 0;
  const pe = i.length > 0 || b || se;
  const de = f === "voice";
  const q = 1000/* 1e3 */;

  const ee = async () => {
    const j = i.trim().length > 0;
    const z = C.length > 0;
    if ((!j && !z) || b || w || i.length > q) {
      return;
    }
    const ae = i.trim();
    const Ce = [...c];

    const be = C.map(re => ({
      mediaId: re.mediaId
    }));

    g(true);
    try {
      await e(ae, Ce, be.length > 0 ? be : undefined);
      u();
      D();
    } catch (re) {
      console.error("Failed to submit comment:", re);
    } finally {
      g(false);
    }
  };

  const W = () => {
    (I.current = true);
    d("voice");
    _(false);
  };

  const M = () => {
    h(true);
  };

  const fe = () => {
    h(false);
    d("text");
    _(true);

    if (E.current) {
      clearTimeout(E.current);
    }

    (E.current = window.setTimeout(() => {
      (E.current = null);
      _(false);
    }, 300));
  };

  const G = N((j) => {
    j.preventDefault();
    j.stopPropagation();
    S.current++;

    if (j.dataTransfer?.types.includes("Files")) {
      v(true);
    }
  }, []);

  const A = N((j) => {
    j.preventDefault();
    j.stopPropagation();
  }, []);

  const U = N((j) => {
    j.preventDefault();
    j.stopPropagation();
    S.current--;

    if (S.current === 0) {
      v(false);
    }
  }, []);

  const H = N(
    (j) => {
      j.preventDefault();
      j.stopPropagation();
      (S.current = 0);
      v(false);
      const z = j.dataTransfer?.files;

      if (z && z.length > 0) {
        k(Array.from(z));
      }
    },
    [k]
  );

  const te = [
    ye.commentInput,
    pe ? ye.expanded : "",
    de ? ye.voiceMode : "",
    r ? ye.replyMode : "",
    y ? ye.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return a("div", {
    className: te,
    onDragEnter: G,
    onDragOver: A,
    onDragLeave: U,
    onDrop: H,
    children: [
      y &&
        a("div", {
          className: ye.dragOverlay,
          children: [
            a(Fl, { size: 24 }),
            a("span", { children: "Перетащите изображение" }),
          ],
        }),
      r &&
        a("div", {
          className: ye.replyHeader,
          children: [
            a("span", {
              className: ye.replyText,
              children: [
                "Ответ для ",
                a("span", { className: ye.replyName, children: r.authorName }),
              ],
            }),
            a("button", {
              className: ye.replyClose,
              onClick: o,
              children: a(ct, { size: 16 }),
            }),
          ],
        }),
      !de &&
        !p &&
        se &&
        a("div", {
          className: ye.attachmentStrip,
          children: a(Jl, { images: C, uploadingImages: T, onRemove: x }),
        }),
      a("div", {
        className: ye.inputRow,
        children: [
          a("button", {
            className: ye.circleButton,
            onClick: de ? M : P,
            children: de ? a(ct, { size: 20 }) : a(Ll, { size: 20 }),
          }),
          a("div", {
            className: ye.textareaContainer,
            children:
              de || p
                ? a(Te, {
                    fallback: null,
                    children: a(nE, {
                      onCancel: M,
                      onSend: t,
                      isExiting: p,
                      onExitComplete: fe,
                    }),
                  })
                : a(tE, {
                    text: i,
                    spans: c,
                    onChange: l,
                    placeholder: n,
                    onSubmit: ee,
                    isEntering: m,
                    autoFocus: s,
                    isSubmitting: b,
                    sendDisabled: w,
                    onImagePaste: k,
                  }),
          }),
          !de &&
            !p &&
            a("button", {
              className: `${ye.circleButton} ${ye.micButton}`,
              onClick: W,
              children: a(Dg, { size: 20 }),
            }),
        ],
      }),
      a("input", {
        ref: Y,
        type: "file",
        accept: jo,
        multiple: true,
        onChange: he,
        style: { display: "none" },
      }),
    ],
  });
}
const rE = "It8V";
const oE = "X3tF";
const sE = "MCB2";
const iE = "FkfE";
const aE = "Y7FM";
const cE = "SbAK";
const lE = "vPey";

const Ht = {
  counter: rE,
  digit: oE,
  prev: sE,
  current: iE,
  animating: aE,
  up: cE,
  down: lE,
};

function uE(e) {
  if (e >= 1000000/* 1e6 */) {
    const t = e / 1000000/* 1e6 */;
    return t % 1 === 0 ? `${t}M` : `${t.toFixed(1)}M`;
  }
  if (e >= 1000/* 1e3 */) {
    const t = e / 1000/* 1e3 */;
    return t % 1 === 0 ? `${t}K` : `${t.toFixed(1)}K`;
  }
  return e.toString();
}
function $n({ value: e }) {
  const t = uE(e);
  const n = R(e);
  const r = R(t.length);
  const o = R(Date.now());

  const [s, i] = L(() => t
    .split("")
    .map((d, p) => ({
    char: d,
    prevChar: d,
    isAnimating: false,
    key: p
  }))
  );

  const [c, l] = L(null);

  F(() => {
    if (Date.now() - o.current < 100) {
      n.current = e;
      return;
    }
    if (e === n.current) {
      return;
    }
    const p = e > n.current ? "up" : "down";
    l(p);
    (n.current = e);
    const h = t.split("");

    const m = s.map(I => I.char);

    const _ = Math.max(h.length, m.length);
    const b = m.join("").padStart(_, " ").split("");

    const y = h
      .join("")
      .padStart(_, " ")
      .split("")
      .map((I, E) => {
      const S = b[E] || " ";
      const C = s[E - (_ - s.length)];
      return I !== S
        ? (r.current++,
          { char: I, prevChar: S, isAnimating: true, key: r.current })
        : { char: I, prevChar: I, isAnimating: false, key: C?.key ?? E };
    })
      .filter(I => I.char !== " " || I.isAnimating);

    i(y);
    const v = setTimeout(() => {
      i(I => I.map(E => ({
        ...E,
        isAnimating: false
      })));

      l(null);
    }, 300);
    return () => clearTimeout(v);
  }, [e]);

  if (!s.some(d => d.isAnimating)) {
    return a("span", { children: t });
  }

  const f = c === "up" ? Ht.up : c === "down" ? Ht.down : "";
  return a("span", {
    className: Ht.counter,
    children: s.map(d => d.isAnimating
      ? a(
          "span",
          {
            className: `${Ht.digit} ${Ht.animating} ${f}`,
            children: [
              a("span", { className: Ht.prev, children: d.prevChar }),
              a("span", { className: Ht.current, children: d.char }),
            ],
          },
          d.key
        )
      : a("span", { children: d.char }, d.key)
    ),
  });
}
const dE = "CjoC";
const fE = "yVgx";
const hE = "eiGi";
const pE = "yrgE";
const mE = "FEv3";
const gE = "uhZO";
const _E = "PDVJ";
const yE = "isax";
const vE = "hTvh";

const ft = {
  dropdownWrapper: dE,
  trigger: fE,
  menu: hE,
  hidden: pE,
  menuItem: mE,
  danger: gE,
  itemIcon: _E,
  itemLabel: yE,
  divider: vE,
};

function eu({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: r = [],
  className: o,
}) {
  const [s, i] = L(false);
  const [c, l] = L(false);
  const [u, f] = L({ top: 0, left: 0 });
  const d = R(null);
  const p = R(null);

  const h = N(() => {
    if (!d.current) {
      return;
    }
    const g = d.current.getBoundingClientRect();
    const y = p.current?.offsetHeight || 150;
    const v = p.current?.offsetWidth || 160;
    let I = 0;
    let E = 0;

    if (n.startsWith("bottom")) {
      (I = g.bottom + 4);
    } else {
      (I = g.top - y - 4);
    }

    if (n.endsWith("right")) {
      (E = g.right - v);
    } else {
      (E = g.left);
    }

    const {
      innerWidth,
      innerHeight
    } = window;

    if (E + v > innerWidth) {
      (E = innerWidth - v - 8);
    }

    if (E < 8) {
      (E = 8);
    }

    if (I + y > innerHeight) {
      (I = g.top - y - 4);
    }

    if (I < 8) {
      (I = g.bottom + 4);
    }

    f({ top: I, left: E });
    l(true);
  }, [n]);

  const m = N((g) => {
    const g_target = g.target;

    if (d.current &&
      !d.current.contains(g_target) &&
      p.current &&
      !p.current.contains(g_target)) {
      i(false);
      l(false);
    }
  }, []);

  F(() => {
    if (s) {
      h();
      document.addEventListener("mousedown", m);
      window.addEventListener("scroll", h, true);
      window.addEventListener("resize", h);

      return () => {
        document.removeEventListener("mousedown", m);
        window.removeEventListener("scroll", h, true);
        window.removeEventListener("resize", h);
      };
    }
  }, [s, m, h]);

  const _ = (g) => {
    g.stopPropagation();

    if (s) {
      i(false);
      l(false);
    } else {
      i(true);
    }
  };

  const b = (g, y) => {
    g.stopPropagation();
    y.onClick();
    i(false);
    l(false);
  };

  return a("div", {
    className: `${ft.dropdownWrapper} ${o || ""}`,
    children: [
      a("div", { ref: d, className: ft.trigger, onClick: _, children: e }),
      s &&
        nn(
          a("div", {
            ref: p,
            className: `${ft.menu} ${c ? "" : ft.hidden}`,
            style: { top: u.top, left: u.left },
            children: t.map((g, y) => a(
              "div",
              {
                children: [
                  a("button", {
                    type: "button",
                    className: `${ft.menuItem} ${g.danger ? ft.danger : ""}`,
                    onClick: v => b(v, g),
                    children: [
                      g.icon &&
                        a("span", {
                          className: ft.itemIcon,
                          children: g.icon,
                        }),
                      a("span", {
                        className: ft.itemLabel,
                        children: g.label,
                      }),
                    ],
                  }),
                  r.includes(g.id) &&
                    y < t.length - 1 &&
                    a("div", { className: ft.divider }),
                ],
              },
              g.id
            )
            ),
          }),
          document.body
        ),
    ],
  });
}
const wE = "bHnO";
const EE = "yY6Q";
const SE = "XPGr";
const bE = "zwac";
const CE = "vvOv";
const TE = "CRI8";
const IE = "ngl8";
const NE = "kJF3";

const It = {
  underline: wE,
  monospace: EE,
  quote: SE,
  spoiler: bE,
  revealed: CE,
  link: TE,
  mention: IE,
  hashtag: NE,
};

function kE(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function RE(e) {
  if (!kE(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const r = String.fromCharCode(...n);
  const o = btoa(r);
  return `/external?url=${encodeURIComponent(o)}`;
}
function tu({ text: e, spans: t = [], className: n = "" }) {
  const [r, o] = L(new Set());

  const s = Se(() => {
    if (t.length === 0) {
      return [{ text: e, styles: new Set() }];
    }
    const l = [];

    t.forEach((p, h) => {
      l.push({ pos: p.offset, type: "start", span: p, index: h });
      l.push({ pos: p.offset + p.length, type: "end", span: p, index: h });
    });

    l.sort((p, h) => p.pos !== h.pos
      ? p.pos - h.pos
      : p.type !== h.type
      ? p.type === "end"
        ? -1
        : 1
      : 0
    );

    const u = [];
    let f = 0;
    const d = new Map();
    for (const p of l) {
      if (p.pos > f) {
        const h = e.substring(f, p.pos);
        const m = new Set();
        let _;
        let b;
        let g;

        d.forEach((y) => {
          m.add(y.type);

          if (y.type === "link" && y.url) {
            (_ = y.url);
          }

          if (y.type === "mention" &&
            (y.username || y.id)) {
            (b = y.username || y.id);
          }

          if (y.type === "hashtag" && y.tag) {
            (g = y.tag);
          }
        });

        u.push({ text: h, styles: m, url: _, mentionId: b, hashtag: g });
      }

      if (p.type === "start") {
        d.set(p.index, p.span);
      } else {
        d.delete(p.index);
      }

      (f = p.pos);
    }

    if (f < e.length) {
      u.push({ text: e.substring(f), styles: new Set() });
    }

    return u;
  }, [e, t]);

  const i = (l, u) => {
    l.stopPropagation();

    o((f) => {
      const d = new Set(f);

      if (d.has(u)) {
        d.delete(u);
      } else {
        d.add(u);
      }

      return d;
    });
  };

  const c = (l, u) => {
    let l_text = l.text;

    if (l.styles.has("bold")) {
      (l_text = a("strong", { children: l_text }));
    }

    if (l.styles.has("italic")) {
      (l_text = a("em", { children: l_text }));
    }

    if (l.styles.has("underline")) {
      (l_text = a("span", { className: It.underline, children: l_text }));
    }

    if (l.styles.has("strike")) {
      (l_text = a("s", { children: l_text }));
    }

    if (l.styles.has("monospace")) {
      (l_text = a("code", { className: It.monospace, children: l_text }));
    }

    if (l.styles.has("quote")) {
      (l_text = a("span", { className: It.quote, children: l_text }));
    }

    if (l.styles.has("spoiler")) {
      const d = r.has(u);
      l_text = a("span", {
        className: `${It.spoiler} ${d ? It.revealed : ""}`,
        onClick: p => i(p, u),
        children: l_text,
      });
    }

    if (l.styles.has("link") && l.url) {
      const d = RE(l.url);
      l_text = a("a", {
        href: d,
        target: "_blank",
        rel: "noopener noreferrer",
        className: It.link,
        onClick: p => p.stopPropagation(),
        children: l_text,
      });
    }
    if (l.styles.has("mention") && l.mentionId) {
      const d = `/@${l.mentionId}`;
      l_text = a("a", {
        href: d,
        className: It.mention,
        onClick: (p) => {
          p.preventDefault();
          p.stopPropagation();
          Ke(d);
        },
        children: l_text,
      });
    }
    if (l.styles.has("hashtag") && l.hashtag) {
      const d = `/hashtag/${encodeURIComponent(l.hashtag)}`;
      l_text = a("a", {
        href: d,
        className: It.hashtag,
        onClick: (p) => {
          p.preventDefault();
          p.stopPropagation();
          Ke(d);
        },
        children: l_text,
      });
    }
    return a("span", { children: l_text }, u);
  };

  return a("span", { className: n, children: s.map((l, u) => c(l, u)) });
}
function PE(e, t, n) {
  const { isVisible: r, isRevealing: o, onRevealComplete: s } = n;
  const i = R([]);
  const c = R(null);
  const l = R(null);
  const u = R({ width: 0, height: 0 });
  const f = R(1);

  const d = N((_, b) => {
    const g = Math.random() * 80 + 60;
    return {
      x: Math.random() * _,
      y: Math.random() * b,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * g,
      maxLife: g,
    };
  }, []);

  const p = N(
    (_, b) => {
      const g = Math.floor((_ * b) / 600);
      const y = [];
      for (let v = 0; v < g; v++) {
        y.push(d(_, b));
      }
      i.current = y;
    },
    [d]
  );

  const h = N(() => {
    const e_current = e.current;
    const t_current = t.current;
    if (!e_current || !t_current) {
      return;
    }
    const g = t_current.getBoundingClientRect();
    if (g.width === 0 || g.height === 0) {
      return;
    }
    const y = window.devicePixelRatio || 1;
    if (u.current.width !== g.width || u.current.height !== g.height) {
      (u.current = { width: g.width, height: g.height });
      (e_current.width = g.width * y);
      (e_current.height = g.height * y);
      (e_current.style.width = `${g.width}px`);
      (e_current.style.height = `${g.height}px`);
      const v = e_current.getContext("2d");

      if (v) {
        v.setTransform(y, 0, 0, y, 0, 0);
        (l.current = v);
      }

      p(g.width, g.height);
    }
  }, [e, t, p]);

  const m = N(() => {
    f.current = 1;
  }, []);

  F(() => {
    if (!r) {
      if (c.current) {
        cancelAnimationFrame(c.current);
        (c.current = null);
      }

      return;
    }
    h();
    const _ = () => {
      const l_current = l.current;
      const { width: g, height: y } = u.current;
      if (!l_current || g === 0 || y === 0) {
        c.current = requestAnimationFrame(_);
        return;
      }
      if (o && ((f.current -= 0.05), f.current <= 0)) {
        s();
        return;
      }
      l_current.clearRect(0, 0, g, y);

      i.current.forEach((v, I) => {
        (v.x += v.speedX);
        (v.y += v.speedY);
        v.life--;

        if (v.x < 0) {
          (v.x = g);
        }

        if (v.x > g) {
          (v.x = 0);
        }

        if (v.y < 0) {
          (v.y = y);
        }

        if (v.y > y) {
          (v.y = 0);
        }

        if (v.life <= 0) {
          i.current[I] = d(g, y);
          return;
        }

        const E = v.life / v.maxLife;
        const S = E < 0.3 ? E / 0.3 : 1;
        const C = v.opacity * S * f.current;
        l_current.beginPath();
        l_current.arc(v.x, v.y, v.size, 0, Math.PI * 2);
        (l_current.fillStyle = `rgba(255, 255, 255, ${C})`);
        l_current.fill();
      });

      (c.current = requestAnimationFrame(_));
    };
    (c.current = requestAnimationFrame(_));
    window.addEventListener("resize", h);

    return () => {
      if (c.current) {
        cancelAnimationFrame(c.current);
      }

      window.removeEventListener("resize", h);
    };
  }, [r, o, d, h, s]);

  return { resetOpacity: m };
}
const AE = "in24";
const OE = "b7l0";
const xE = "qDye";
const LE = "eA0c";
const $E = "B8sD";
const Pn = { container: AE, hidden: OE, image: xE, revealing: LE, canvas: $E };
const Ra = 5;
function Pa({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: r,
  height: o,
  className: s = "",
  onClick: i,
}) {
  const [c, l] = L(!n);
  const [u, f] = L(false);
  const [d, p] = L(false);
  const h = R(null);
  const m = R(null);
  const _ = R(null);
  const b = R(false);

  const { resetOpacity: g } = PE(h, m, {
    isVisible: d && !c && n,
    isRevealing: u,
    onRevealComplete: () => l(true),
  });

  F(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const T = new IntersectionObserver(
      (w) => {
        w.forEach((P) => {
          p(P.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    T.observe(m_current);

    return () => {
      T.disconnect();
    };
  }, []);

  const y = (C) => {
    (_.current = { x: C.clientX, y: C.clientY });
    (b.current = false);
  };

  const v = (C) => {
    if (!_.current) {
      return;
    }
    const T = Math.abs(C.clientX - _.current.x);
    const w = Math.abs(C.clientY - _.current.y);

    if ((T > Ra || w > Ra)) {
      (b.current = true);
    }
  };

  const I = (C) => {
    if (b.current) {
      (b.current = false);
      C.stopPropagation();
      return;
    }

    if (!c && !u && n) {
      C.stopPropagation();
      f(true);
      g();
    } else if (i) {
      i(C);
    }
  };

  const E = !c && n;
  const S = r && o ? { aspectRatio: `${r} / ${o}` } : undefined;
  return n
    ? a("div", {
        ref: m,
        className: `${Pn.container} ${s} ${E ? Pn.hidden : ""} ${
          u ? Pn.revealing : ""
        }`,
        style: S,
        onPointerDown: y,
        onPointerMove: v,
        onClick: I,
        children: [
          a("img", {
            src: e,
            alt: t,
            className: Pn.image,
            loading: "lazy",
            width: r,
            height: o,
            draggable: false,
          }),
          E && a("canvas", { ref: h, className: Pn.canvas }),
        ],
      })
    : a("img", {
        src: e,
        alt: t,
        className: s,
        loading: "lazy",
        draggable: false,
        width: r,
        height: o,
        style: r && o ? { aspectRatio: `${r} / ${o}` } : undefined,
        onClick: i,
      });
}
const Aa = { photo_open: 1, video_progress: 2 };
const ME = 2000/* 2e3 */;
const DE = 20;
const Oa = "dwell_sid";
function UE() {
  try {
    let e = sessionStorage.getItem(Oa);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Oa, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
class FE {
  buffer = [];
  sessionId = "";
  bound = false;
  ensureInit() {
    if (!this.bound && typeof window !== "undefined") {
      (this.bound = true);
      (this.sessionId = UE());
      window.setInterval(() => this.flush(), ME);
      window.addEventListener("pagehide", () => this.flushBeacon());

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          this.flushBeacon();
        }
      });
    }
  }
  trackPhotoOpen(t, n, r, o) {
    if (!t || !n) {
      return;
    }
    this.ensureInit();
    const s = { t: Aa.photo_open, v: t, ai: n };

    if (r !== undefined) {
      (s.mi = r);
    }

    if (o) {
      (s.s = Nr[o]);
    }

    this.enqueue(s);
  }
  trackVideoProgress(t, n, r, o, s) {
    if (!t ||
    !n ||
    !Number.isFinite(r) ||
    r <= 0 ||
    !Number.isFinite(o) ||
    o <= 0) {
      return;
    }
    this.ensureInit();
    const i = {
      t: Aa.video_progress,
      v: t,
      ai: n,
      pm: Math.round(r),
      dm: Math.round(o),
    };

    if (s) {
      (i.s = Nr[s]);
    }

    this.enqueue(i);
  }
  enqueue(t) {
    this.buffer.push(t);

    if (this.buffer.length >= DE) {
      this.flush();
    }
  }
  async maybeCompress(t) {
    const n = { "Content-Type": "application/json" };
    if (typeof CompressionStream === "undefined" || t.length < 512) {
      return { body: new TextEncoder().encode(t), headers: n };
    }
    try {
      const r = new Blob([t])
          .stream()
          .pipeThrough(new CompressionStream("deflate"));

      const o = await new Response(r).arrayBuffer();
      if (o.byteLength < t.length) {
        return { body: o, headers: { ...n, "Content-Encoding": "deflate" } };
      }
    } catch {}
    return { body: new TextEncoder().encode(t), headers: n };
  }
  async flush() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    this.buffer = [];
    const n = JSON.stringify({ sid: this.sessionId, e: t });
    const { body: r, headers: o } = await this.maybeCompress(n);
    O.post($.posts.interactionLog, r, { headers: o }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    O.post(
      $.posts.interactionLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const BE = new FE();
function HE(e, t) {
  return N(
    (n, r) => {
      if (!e || !n) {
        return;
      }
      const o = t === "post_page" || t === "link";
      BE.trackPhotoOpen(e, n, r, o ? t : undefined);
    },
    [e, t]
  );
}
const VE = "wvVu";
const WE = "qFZK";
const jE = "tNw5";
const zE = "v4t6";
const qE = "QZ09";
const GE = "JBqw";
const YE = "Z6sD";

const Pe = {
  mediaWrapper: VE,
  isFeed: WE,
  single: jE,
  image: zE,
  singleVideo: qE,
  media: GE,
  dragging: YE,
};

const xa = ne(() => Q(
  () => import("./PostMediaVideo-D_-qfrtw.js"),
  __vite__mapDeps([9, 10])
).then(e => ({
  default: e.PostMediaVideo
}))
);

const XE = 5;
const KE = 0.95;
const fo = 0.5;
const ZE = 650;
const JE = 500;
const QE = 300;
function eS(e, t, n, r) {
  const o = e / t;
  return o > n / r ? Math.min(e, n) : Math.min(t, r) * o;
}
function As({ media: e, isFeed: t = false, postVs: n, source: r }) {
  const o = e?.filter(k => k.type === "image") ?? [];

  const s = e?.filter(k => k.type === "video") ?? [];

  const i = R(null);

  const c = Rl(k => k.open);

  const u = St() ? QE : JE;
  const f = HE(n, r);
  const d = R(false);
  const p = R(0);
  const h = R(0);
  const m = R(false);
  const _ = R(0);
  const b = R(0);
  const g = R(0);
  const y = R(null);

  const v = () => {
    if (y.current) {
      cancelAnimationFrame(y.current);
      (y.current = null);
    }
  };

  const I = () => {
    const i_current = i.current;
    if (i_current) {
      (g.current *= KE);

      if (Math.abs(g.current) < fo) {
        v();
        return;
      }

      (i_current.scrollLeft += g.current);
      (y.current = requestAnimationFrame(I));
    }
  };

  const E = (k) => {
    const i_current = i.current;

    if (i_current && o.length + s.length > 1) {
      v();
      (d.current = true);
      i_current.classList.add(Pe.dragging);
      (p.current = k.clientX);
      (_.current = k.clientX);
      (b.current = Date.now());
      (h.current = i_current.scrollLeft);
      (m.current = false);
      (g.current = 0);
      k.preventDefault();
    }
  };

  const S = (k) => {
    if (!d.current) {
      return;
    }
    const i_current = i.current;
    if (!i_current) {
      return;
    }
    const Y = Date.now();
    const he = k.clientX - p.current;
    const se = k.clientX - _.current;
    const pe = Y - b.current;

    if (Math.abs(he) > XE) {
      (m.current = true);
    }

    if (pe > 0) {
      (g.current = (-se / pe) * 16);
    }

    (_.current = k.clientX);
    (b.current = Y);
    (i_current.scrollLeft = h.current - he);
  };

  const C = () => {
    if (d.current && Math.abs(g.current) > fo) {
      I();
    }

    (d.current = false);
    i.current?.classList.remove(Pe.dragging);
  };

  const T = () => {
    if (d.current) {
      Math.abs(g.current) > fo && I();
      (d.current = false);
      i.current?.classList.remove(Pe.dragging);
    }
  };

  F(
    () => () => {
      v();
      i.current?.classList.remove(Pe.dragging);
    },
    []
  );

  const w = (k, D) => {
    if (m.current) {
      (m.current = false);
      D.stopPropagation();
      return;
    }
    const o_k = o[k];

    if (o_k) {
      f(o_k.id, k);
    }

    const he = (W) => {
      let M = W;
      let fe = 0;

      while (M && fe < 4) {
        const G = window.getComputedStyle(M).borderRadius;
        if (G && G !== "0px" && G !== "0%") {
          return G;
        }
        (M = M.parentElement);
        fe++;
      }

      return "0px";
    };

    const se = D.currentTarget ?? null;
    const pe = se?.querySelector("img") ?? se;
    const de = pe?.getBoundingClientRect();
    let q = null;
    if (de) {
      const W = i.current?.getBoundingClientRect();
      const M = Math.max(0, W ? W.left : 0);
      const fe = Math.max(0, W ? W.top : 0);

      const G = Math.min(
        typeof window !== "undefined" ? window.innerWidth : Infinity,
        W ? W.right : Infinity
      );

      const A = Math.min(
        typeof window !== "undefined" ? window.innerHeight : Infinity,
        W ? W.bottom : Infinity
      );

      const U = Math.max(de.left, M);
      const H = Math.max(de.top, fe);
      const te = Math.min(de.right, G);
      const j = Math.min(de.bottom, A);
      const z = Math.max(0, te - U);
      const ae = Math.max(0, j - H);

      if (z > 0 &&
        ae > 0) {
        (q = {
            left: U,
            top: H,
            width: z,
            height: ae,
            hiddenLeft: U - de.left,
            hiddenTop: H - de.top,
            hiddenRight: de.right - te,
            hiddenBottom: de.bottom - j,
            borderRadius: he(pe),
          });
      }
    }
    const ee = (W) => {
      const i_current = i.current;
      if (!i_current) {
        return null;
      }
      const G = i_current.querySelectorAll("img")[W];
      if (!G) {
        return null;
      }
      G.scrollIntoView({
        behavior: "instant",
        inline: "center",
        block: "nearest",
      });
      const A = G.getBoundingClientRect();
      return {
        left: A.left,
        top: A.top,
        width: A.width,
        height: A.height,
        borderRadius: he(G),
      };
    };
    c(
      o.map(W => ({
        id: W.id,
        url: W.url,
        width: W.width || 800,
        height: W.height || 600
      })),
      k,
      q,
      ee
    );
  };

  const P = (k) => {
    k.stopPropagation();
    (m.current = false);
  };

  if (o.length === 0 && s.length === 0) {
    return null;
  }
  const x = o.length + s.length;
  if (x === 1) {
    if (o.length === 1) {
      const [k] = o;

      const D =
        k.width && k.height
          ? {
              width: `${Math.round(eS(k.width, k.height, ZE, u))}px`,
              aspectRatio: `${k.width} / ${k.height}`,
            }
          : undefined;

      return a("div", {
        className: `${Pe.mediaWrapper} ${t ? Pe.isFeed : ""}`,
        "data-count": 1,
        children: a("div", {
          className: Pe.single,
          style: D,
          onClick: (Y) => {
            Y.stopPropagation();
            w(0, Y);
          },
          children: a(
            Pa,
            {
              src: k.url,
              spoiler: k.spoiler,
              width: k.width,
              height: k.height,
              className: Pe.image,
              onClick: (Y) => {
                Y.stopPropagation();
                w(0, Y);
              },
            },
            k.id
          ),
        }),
      });
    }
    if (s.length === 1) {
      const [k] = s;
      return a("div", {
        className: `${Pe.mediaWrapper} ${t ? Pe.isFeed : ""}`,
        "data-count": 1,
        onClick: D => D.stopPropagation(),
        children: a("div", {
          className: Pe.singleVideo,
          children: a(Te, {
            fallback: null,
            children: a(
              xa,
              {
                src: k.url,
                spoiler: k.spoiler,
                width: k.width,
                height: k.height,
                duration: k.duration,
                postVs: n,
                source: r,
                attachmentId: k.id,
              },
              k.id
            ),
          }),
        }),
      });
    }
  }
  return a("div", {
    className: `${Pe.mediaWrapper} ${t ? Pe.isFeed : ""}`,
    "data-count": x,
    children: a("div", {
      ref: i,
      className: `${Pe.media} ${t ? Pe.isFeed : ""}`,
      "data-count": x,
      onClick: P,
      onMouseDown: E,
      onMouseMove: S,
      onMouseUp: C,
      onMouseLeave: T,
      children: [
        s.map(k => a(
          Te,
          {
            fallback: null,
            children: a(xa, {
              src: k.url,
              spoiler: k.spoiler,
              width: k.width,
              height: k.height,
              duration: k.duration,
              className: Pe.image,
              postVs: n,
              source: r,
              attachmentId: k.id,
            }),
          },
          k.id
        )
        ),
        o.map((k, D) => a(
          Pa,
          {
            src: k.url,
            spoiler: k.spoiler,
            width: k.width,
            height: k.height,
            className: Pe.image,
            onClick: Y => w(D, Y),
          },
          k.id
        )
        ),
      ],
    }),
  });
}
const nu = 0.5;
const tS = 250;
const nS = 1000/* 1e3 */;
const rS = 50;
const oS = [0, nu, 1];
const Xt = new Set();
const Er = new WeakMap();
const Gt = new Map();
const Yt = new Map();
const Rr = new Set();
const fr = new Set();
let ho = null;
let un = null;
function sS(e) {
  if (Rr.size !== 0) {
    fr.add(e);

    ho === null &&
      (ho = setTimeout(() => {
      (ho = null);

      if (fr.size === 0) {
        return;
      }

      const t = Array.from(fr);
      fr.clear();
      const n = t.length > 20 ? t.slice(0, 20) : t;
      for (const r of Rr) {
        r(n);
      }
    }, rS));
  }
}
function iS() {
  return (un || (typeof IntersectionObserver === "undefined" ? null : ((un = new IntersectionObserver(
        (e) => {
          for (const t of e) {
            const n = Er.get(t.target);
            if (!n || n.length === 0) {
              continue;
            }
            const r = t.intersectionRatio >= nu;
            for (const o of n) {
              if (r) {
                const s = Yt.get(o);
                if (s !== undefined) {
                  clearTimeout(s);
                  Yt.delete(o);
                  continue;
                }
                if (Xt.has(o) || Gt.has(o)) {
                  continue;
                }
                const i = setTimeout(() => {
                  Gt.delete(o);
                  Xt.add(o);
                  sS(o);
                }, tS);
                Gt.set(o, i);
              } else {
                const s = Gt.get(o);

                if (s !== undefined) {
                  clearTimeout(s);
                  Gt.delete(o);
                }

                if (!Xt.has(o) || Yt.has(o)) {
                  continue;
                }

                const i = setTimeout(() => {
                  Yt.delete(o);
                  Xt.delete(o);
                }, nS);
                Yt.set(o, i);
              }
            }
          }
        },
        { threshold: oS }
      )), un)));
}

const Pr = {
    observe(e, t) {
      const n = iS();
      if (!n) {
        return;
      }
      const r = Array.isArray(t) ? t.filter(Boolean) : [t];

      if (r.length !== 0) {
        Er.set(e, r);
        n.observe(e);
      }
    },
    unobserve(e) {
      if (!un) {
        return;
      }
      const t = Er.get(e);
      un.unobserve(e);
      Er.delete(e);

      if (!!t) {
        for (const n of t) {
          const r = Gt.get(n);

          if (r !== undefined) {
            clearTimeout(r);
            Gt.delete(n);
          }

          const o = Yt.get(n);

          if (o !== undefined) {
            clearTimeout(o);
            Yt.delete(n);
          }

          Xt.delete(n);
        }
      }
    },
    getSnapshot() {
      return Array.from(Xt);
    },
    size() {
      return Xt.size;
    },
    onAppear(e) {
      Rr.add(e);

      return () => {
        Rr.delete(e);
      };
    },
  };

const aS = "BGRZ";
const cS = "UOaQ";
const lS = "P2pK";
const po = { hint: aS, multiline: cS, arrow: lS };
function Yo({ text: e, children: t, className: n, multiline: r }) {
  const o = R(null);
  const [s, i] = L(null);

  const c = N(() => {
    if (!o.current) {
      return;
    }
    const f = o.current.getBoundingClientRect();
    i({ x: f.left + f.width / 2, y: f.top });
  }, []);

  const l = N(() => {
    i(null);
  }, []);

  const u = N(
    (f) => {
      f.stopPropagation();

      if (s) {
        l();
      } else {
        c();
      }
    },
    [s, c, l]
  );

  F(() => {
    if (!s) {
      return;
    }
    const f = (d) => {
      if (o.current && !o.current.contains(d.target)) {
        l();
      }
    };
    document.addEventListener("touchstart", f);
    document.addEventListener("mousedown", f);
    window.addEventListener("scroll", l, true);

    return () => {
      document.removeEventListener("touchstart", f);
      document.removeEventListener("mousedown", f);
      window.removeEventListener("scroll", l, true);
    };
  }, [s, l]);

  return a("span", {
    ref: o,
    className: n,
    onMouseEnter: c,
    onMouseLeave: l,
    onClick: u,
    children: [
      t,
      s &&
        nn(
          a("div", {
            className: `${po.hint} ${r ? po.multiline : ""}`,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, a("span", { className: po.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const uS = "t47h";
const dS = "sRoD";
const fS = "pGdT";
const hS = "c1A5";
const pS = "V4es";
const mS = "nE8m";
const gS = "ERkK";
const _S = "WbJq";

const Nt = {
  header: uS,
  headerMain: dS,
  moreDropdown: fS,
  pinnedBadge: hS,
  authorInfo: pS,
  authorLink: mS,
  time: gS,
  edited: _S,
};

function yS({
  author: e,
  createdAt: t,
  editedAt: n,
  postId: r,
  showAvatar: o = true,
  isOnOwnProfile: s = false,
  isPinned: i = false,
  onReport: c,
  onEdit: l,
  onDelete: u,
  onPin: f,
  onCopyLink: d,
}) {
  const p = Ol(t);

  const h = we(y => y.profile?.id);

  const m = e.id === h;
  const _ = 2880 * 60 * 1000/* 1e3 */;
  const b = m && Date.now() - new Date(t).getTime() < _;

  const g = Se(() => {
    const y = [];

    y.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: a(xl, { size: 16 }),
      onClick: () => d?.(r),
    });

    if (b) {
      y.push({
        id: "edit",
        label: "Редактировать",
        icon: a(Ml, { size: 16 }),
        onClick: () => l?.(r),
      });
    }

    if (s) {
      y.push({
        id: "pin",
        label: i ? "Открепить" : "Закрепить",
        icon: a(ca, { size: 16 }),
        onClick: () => f?.(r),
      });
    }

    if ((m || s)) {
      y.push({
        id: "delete",
        label: "Удалить",
        icon: a(jl, { size: 16 }),
        danger: true,
        onClick: () => u?.(r),
      });
    }

    if (!m) {
      y.push({
        id: "report",
        label: "Пожаловаться",
        icon: a(Ul, { size: 16 }),
        danger: true,
        onClick: () => c?.(r),
      });
    }

    return y;
  }, [m, b, s, i, r, l, u, f, c, d]);

  return a("header", {
    className: Nt.header,
    children: [
      i &&
        a("div", {
          className: Nt.pinnedBadge,
          children: [
            a(ca, { size: 14 }),
            a("span", { children: "Закреплённый пост" }),
          ],
        }),
      a("div", {
        className: Nt.headerMain,
        children: [
          o &&
            a("a", {
              href: `/@${e.username}`,
              children: a(nt, {
                src: e.avatar,
                alt: e.displayName,
                size: "sm",
                online: e.online,
              }),
            }),
          a("div", {
            className: Nt.authorInfo,
            children: [
              a("a", {
                href: `/@${e.username}`,
                className: Nt.authorLink,
                children: a(tr, {
                  name: e.displayName,
                  verified: e.isVerified,
                  hasNuksta: e.hasNuksta,
                  pin: e.pin,
                  size: "sm",
                }),
              }),
              a("time", {
                dateTime: t,
                className: Nt.time,
                children: [
                  p,
                  n &&
                    a(Yo, {
                      text: new Date(n).toLocaleString("ru-RU"),
                      children: a("span", {
                        className: Nt.edited,
                        children: " (ред.)",
                      }),
                    }),
                ],
              }),
            ],
          }),
          a(eu, {
            trigger: a(Bl, { size: 18 }),
            items: g,
            position: "bottom-right",
            className: Nt.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
const vS = "UZmD";
const wS = "hClD";
const ES = "cmJf";
const SS = "RONs";
const bS = "ti31";
const CS = "BBq6";
const TS = "y7Fh";
const IS = "M2LP";
const NS = "WFD5";
const kS = "ZF4G";
const RS = "nYFD";
const PS = "dZbk";
const AS = "zfJP";
const OS = "d8bq";
const xS = "rLmj";

const Ae = {
  actions: vS,
  compact: wS,
  action: ES,
  views: SS,
  actionsLeft: bS,
  disabled: CS,
  liked: TS,
  reposted: IS,
  noAnimation: NS,
  reactionWrapper: kS,
  actionsRight: RS,
  captured: PS,
  capturedEmoji: AS,
  capturedText: OS,
  capturedMobile: xS,
};

function ru({
  liked: e,
  reposted: t,
  likesCount: n,
  repostsCount: r,
  commentsCount: o,
  viewsCount: s,
  dominantEmoji: i,
  onLike: c,
  onRepost: l,
  onComment: u,
  disableRepost: f = false,
  compact: d = false,
}) {
  const p = R(false);
  const h = d ? 17 : 20;
  return a("footer", {
    className: `${Ae.actions} ${d ? Ae.compact : ""}`,
    children: [
      a("div", {
        className: Ae.actionsLeft,
        children: [
          a("div", {
            className: Ae.reactionWrapper,
            onClick: m => m.stopPropagation(),
            children: a("button", {
              className: `${Ae.action} ${e ? Ae.liked : ""} ${
                !p.current && e ? Ae.noAnimation : ""
              }`,
              onClick: (m) => {
                m.stopPropagation();
                (p.current = true);
                c();
              },
              "aria-label": "Нравится",
              children: [
                a(Ss, { filled: e, size: h }, e ? "liked" : "not-liked"),
                a($n, { value: n }),
              ],
            }),
          }),
          a("button", {
            className: Ae.action,
            onClick: (m) => {
              m.stopPropagation();
              u();
            },
            "aria-label": "Комментировать",
            children: [a($l, { size: h }), a($n, { value: o })],
          }),
          a("button", {
            className: `${Ae.action} ${t ? Ae.reposted : ""} ${
              f ? Ae.disabled : ""
            }`,
            onClick: (m) => {
              m.stopPropagation();

              if (!f) {
                l();
              }
            },
            disabled: f,
            "aria-label": "Репост",
            children: [a(Ts, { size: h }), a($n, { value: r })],
          }),
        ],
      }),
      a("div", {
        className: Ae.actionsRight,
        children: [
          i &&
            a(ke, {
              children: [
                a(Yo, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Ae.captured,
                  children: [
                    a("span", { className: Ae.capturedEmoji, children: i }),
                    a("span", {
                      className: Ae.capturedText,
                      children: "Пост захвачен",
                    }),
                  ],
                }),
                a(Yo, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Ae.capturedMobile,
                  children: a("span", { children: i }),
                }),
              ],
            }),
          a("span", {
            className: Ae.views,
            children: [a(Zg, { size: h }), a($n, { value: s })],
          }),
        ],
      }),
    ],
  });
}
const LS = ne(() => Q(() => import("./index-CdjLILCq.js"), __vite__mapDeps([11, 12, 13])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function ou(e, t) {
  const { openModal: n, closeModal: r, onDelete: o } = t;
  const s = St();

  const i = oe(T => T.deletePost);

  const c = oe(T => T.updatePostLike);

  const l = oe(T => T.updatePollVote);

  const u = oe(T => T.updatePollData);

  const f = Rs(e);
  const d = f.myReaction !== null;
  const f_likesTotal = f.likesTotal;

  const h = Se(() => su(e.attachments), [e.attachments]);

  const m = N(async () => {
    const T = d;
    const w = T ? -1 : 1;
    c(e.id, T ? null : "love", w);
    try {
      if (T) {
        await Le.unlikePost(e.id);
      } else {
        await Le.likePost(e.id);
      }
    } catch (P) {
      c(e.id, T ? "love" : null, -w);
      console.error("Failed to toggle like:", P);
    }
  }, [e.id, d, c]);

  const _ = N(() => {
    if (!d) {
      m();
    }
  }, [d, m]);

  const b = N(
    (T) => {
      const w = e.author.username ?? e.author.id;
      const P = `${window.location.origin}/@${w}/post/${T}`;
      navigator.clipboard.writeText(P);
      _t.success("Ссылка скопирована");
    },
    [e.author.username, e.author.id]
  );

  const g = N(
    (T) => {
      n(a(LS, { targetType: "post", targetId: T, onClose: r }));
    },
    [n, r]
  );

  const y = N(
    (T) => {
      n(
        a(Pb, {
          postId: e.id,
          initialText: e.text ?? "",
          initialSpans: e.spans ?? [],
        })
      );
    },
    [n, e.id, e.text, e.spans]
  );

  const v = N(
    async (T) => {
      if (confirm("Вы уверены, что хотите удалить этот пост?")) {
        try {
          await i(T);
          o?.(T);
        } catch (w) {
          console.error("Failed to delete post:", w);
        }
      }
    },
    [i, o]
  );

  const I = N(() => {
    if (s) {
      n(a(mb, { postId: e.id, onClose: r }));
    } else {
      const T = e.author.username ?? e.author.id;
      Ke(`/@${T}/post/${e.id}`);
    }
  }, [e.author.username, e.author.id, e.id, s, n, r]);

  const E = N(() => {
    n(a(Bb, { post: e, onClose: r }));
  }, [n, r, e]);

  const S = N(
    async (T) => {
      const w = h?.myVote ?? null;
      l(e.id, T, w);
      try {
        const P = await Le.votePoll(e.id, [T]);
        if (P) {
          u(e.id, P);
          return P;
        }
      } catch (P) {
        console.error("[Poll] Failed to vote:", P);

        if (w) {
          l(e.id, w, T);
        }
      }
      return null;
    },
    [e.id, h?.myVote, l, u]
  );

  const C = N(
    async (T) => {
      try {
        const w = await Le.votePoll(e.id, T);
        if (w) {
          u(e.id, w);
          return w;
        }
      } catch (w) {
        console.error("[Poll] Failed to vote multiple:", w);
      }
      return null;
    },
    [e.id, u]
  );

  return {
    liked: d,
    totalLikes: f_likesTotal,
    handleLike: m,
    handleDoubleTap: _,
    handleComment: I,
    handleRepost: E,
    handleReport: g,
    handleEdit: y,
    handleDelete: v,
    handleCopyLink: b,
    handlePollVote: S,
    handlePollVoteMultiple: C,
  };
}
const $S = "DOkg";
const MS = "QxdA";
const DS = "IiFh";
const US = "F25U";
const FS = "fQlk";
const BS = "Q0R7";
const HS = "JQIQ";
const VS = "xl2H";
const WS = "NHgc";
const jS = "N7Sm";
const zS = "RIl6";
const qS = "mLBM";
const GS = "bVw4";
const YS = "eQqh";
const XS = "jIvj";

const De = {
  post: $S,
  postInner: MS,
  isFeed: DS,
  avatarLink: US,
  postContent: FS,
  postBody: BS,
  textWrapper: HS,
  text: VS,
  collapsed: WS,
  expandButton: jS,
  originalPost: zS,
  originalPostHeader: qS,
  originalPostTime: GS,
  originalPostText: YS,
  originalPostMedia: XS,
};

function KS(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function ZS({ attachments: e, postVs: t, source: n }) {
  const r = Se(() => Ar(e), [e]);
  return r.length === 0
    ? null
    : a("div", {
        className: De.originalPostMedia,
        children: a(As, { media: r, postVs: t, source: n }),
      });
}
function JS({ originalPost: e, source: t }) {
  const n = KS(e.createdAt);
  const { openModal: r, closeModal: o } = on();

  const {
    liked: s,
    totalLikes: i,
    handleLike: c,
    handleComment: l,
    handleRepost: u,
  } = ou(e, { openModal: r, closeModal: o });

  const f = Rs(e);

  const d = N(
    (p) => {
      p.stopPropagation();
      const h = e.author.username ?? e.author.id;
      Ke(`/@${h}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id]
  );

  return a("div", {
    className: De.originalPost,
    onClick: d,
    children: [
      a("div", {
        className: De.originalPostHeader,
        children: [
          a(Ts, { size: 14 }),
          a(nt, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          a(tr, {
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          a("span", { className: De.originalPostTime, children: n }),
        ],
      }),
      e.text && a("div", { className: De.originalPostText, children: e.text }),
      e.attachments &&
        e.attachments.length > 0 &&
        a(ZS, { attachments: e.attachments, postVs: e.vs, source: t }),
      a(ru, {
        liked: s,
        reposted: f.reposted,
        likesCount: i,
        repostsCount: f.repostsCount,
        commentsCount: f.commentsCount,
        viewsCount: f.viewsCount,
        dominantEmoji: f.dominantEmoji,
        onLike: c,
        onRepost: u,
        onComment: l,
        compact: true,
      }),
    ],
  });
}
const QS = ne(() => Q(() => import("./index-BWK2H0GS.js"), __vite__mapDeps([14, 15])).then(
  e => ({
    default: e.Poll
  })
)
);
function e1(e) {
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
function Ar(e) {
  return e
    .filter(
      t => t.type === "image" ||
      t.type === "video" ||
      (t.type === "media" && "media" in t)
    )
    .map(t => t.type === "media" && "media" in t ? t.media : t);
}
function su(e) {
  return e.find(t => t.type === "poll");
}
const t1 = 300;
const n1 = 500;

const r1 = Hr(
  (
    {
      post: t,
      variant: n = "feed",
      className: r,
      isOnOwnProfile: o = false,
      isPinned: s = false,
      isHighlighted: i = false,
      source: c,
      sourceContext: l = "",
      onEdit: u,
      onPin: f,
      onDelete: d,
    }
  ) => {
    const p = n === "feed";
    const h = St();
    const { openModal: m, closeModal: _ } = on();

    const b = oe(me => me.setCurrentPost);

    const g = oe(me => me.seedPostStats);

    const y = oe(me => me.posts.find(He => He.id === t.id));

    const v = we(me => me.profile);

    F(() => {
      g(t);
    }, [t, g]);
    const I = Rs(t);
    const { isFollowing: E, follow: S, unfollow: C } = w_(t.author.id);
    const T = p && v?.id !== t.author.id ? E : undefined;

    const {
      liked: w,
      totalLikes: P,
      handleLike: x,
      handleDoubleTap: k,
      handleComment: D,
      handleRepost: Y,
      handleReport: he,
      handleEdit: se,
      handleDelete: pe,
      handleCopyLink: de,
      handlePollVote: q,
      handlePollVoteMultiple: ee,
    } = ou(t, { openModal: m, closeModal: _, onDelete: d });

    const W = N(() => {
      if (T !== undefined) {
        if (T) {
          m(
                  a(iy, {
                    displayName: t.author.displayName,
                    onConfirm: C,
                    onClose: _,
                  })
                );
        } else {
          S();
        }
      }
    }, [T, t.author.displayName, S, C, m, _]);

    const M = R(null);
    const fe = R(null);
    const G = R(null);
    const [A, U] = L(t1);
    const [H, te] = L(0);
    const j = H > A;
    F(
      () => () => {
        if (G.current) {
          cancelAnimationFrame(G.current);
          (G.current = null);
        }
      },
      []
    );

    const z = N(
        (me) => {
          if (me &&
            p) {
            G.current && cancelAnimationFrame(G.current);

            (G.current = requestAnimationFrame(() => {
              (G.current = null);
              te(me.scrollHeight);
            }));
          }

          if (fe) {
            (fe.current = me);
          }
        },
        [p]
      );

    const ae = N((me) => {
      me.stopPropagation();

      U(He => He + n1);
    }, []);

    Rv(t.id, M, c, l, t.vs);
    const Ce = t.originalPost?.id;
    F(() => {
      const M_current = M.current;
      if (!M_current) {
        return;
      }
      const He = Ce ? [t.id, Ce] : t.id;
      Pr.observe(M_current, He);

      return () => Pr.unobserve(M_current);
    }, [t.id, Ce]);
    const be = R(null);
    const re = R(0);

    const $t = N((me) => {
      be.current = me.target;
    }, []);

    const bt = N(() => {
      b(y ?? t);
      const He = t.author.username ?? t.author.id;
      Ke(`/@${He}/post/${t.id}`);
    }, [t, y, b]);

    const jr = N(
      (me) => {
        const me_target = me.target;
        if (me_target.closest("button") ||
        me_target.closest("a") ||
        me_target.closest("video") ||
        me_target.closest("img")) {
          return;
        }
        if (h) {
          const $s = Date.now();
          if ($s - re.current < 300) {
            (re.current = 0);
            k();
            return;
          }
          re.current = $s;
          return;
        }
        if (be.current !== me_target) {
          be.current = null;
          return;
        }
        be.current = null;
        const Ls = window.getSelection();

        if (!Ls || Ls.toString().length <= 0) {
          bt();
        }
      },
      [h, k, bt]
    );

    const zr = Se(() => e1(t.author), [t.author]);

    const Ee = Se(() => Ar(t.attachments), [t.attachments]);

    const Ie = Se(() => su(t.attachments), [t.attachments]);

    const xs = a("div", {
      className: `${De.postInner} ${p ? De.isFeed : ""} ${r || ""}`,
      children: [
        p &&
          a("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            className: De.avatarLink,
            children: a(nt, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: T,
              onFollowBadgeClick: W,
            }),
          }),
        a("div", {
          className: De.postContent,
          children: [
            a(yS, {
              author: zr,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !p,
              isOnOwnProfile: o,
              isPinned: s,
              onReport: he,
              onEdit: u ?? se,
              onDelete: pe,
              onPin: f,
              onCopyLink: de,
            }),
            a("div", {
              className: De.postBody,
              children: [
                t.text &&
                  a("div", {
                    className: De.textWrapper,
                    children: [
                      a("div", {
                        ref: z,
                        className: `${De.text} ${j ? De.collapsed : ""}`,
                        style: p && j ? { maxHeight: `${A}px` } : undefined,
                        children: a(tu, {
                          text: t.text,
                          spans: t.spans ?? [],
                        }),
                      }),
                      p &&
                        j &&
                        a("button", {
                          type: "button",
                          className: De.expandButton,
                          onClick: ae,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                Ee.length > 0 &&
                  a(As, { media: Ee, isFeed: p, postVs: t.vs, source: c }),
                Ie &&
                  a(Te, {
                    fallback: null,
                    children: a(QS, {
                      title: Ie.question,
                      options: Ie.options.map(me => ({
                        id: me.id,
                        text: me.text,
                        votes: me.votes ?? 0
                      })),
                      totalVotes: Ie.totalVotes ?? 0,
                      voted:
                        (Ie.myVotes ?? []).length > 0 ||
                        (Ie.myVote !== undefined && Ie.myVote !== null),
                      selectedOptionId: Ie.myVote,
                      selectedOptionIds: Ie.myVotes ?? [],
                      multipleChoice: Ie.multipleChoice ?? false,
                      onVote: q,
                      onVoteMultiple: ee,
                      disabled: Ie.id.startsWith("temp-"),
                    }),
                  }),
                t.originalPost &&
                  a(JS, { originalPost: t.originalPost, source: c }),
                a(ru, {
                  liked: w,
                  reposted: I.reposted,
                  likesCount: P,
                  repostsCount: I.repostsCount,
                  commentsCount: I.commentsCount,
                  viewsCount: I.viewsCount,
                  dominantEmoji: I.dominantEmoji,
                  onLike: x,
                  onRepost: Y,
                  onComment: D,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return p
      ? a("article", {
          ref: M,
          className: `${De.post} ${i ? "flash-highlight" : ""}`,
          onMouseDown: $t,
          onClick: jr,
          children: xs,
        })
      : a("div", { ref: M, children: xs });
  },
  (e, t) => e.post.id === t.post.id &&
  e.post.text === t.post.text &&
  e.post.spans === t.post.spans &&
  e.post.editedAt === t.post.editedAt &&
  e.post.attachments === t.post.attachments &&
  e.post.originalPost === t.post.originalPost &&
  e.variant === t.variant &&
  e.isOnOwnProfile === t.isOnOwnProfile &&
  e.isPinned === t.isPinned &&
  e.isHighlighted === t.isHighlighted &&
  e.source === t.source &&
  e.sourceContext === t.sourceContext
);

const o1 = "Z150";
const s1 = "Hcfv";
const i1 = "xgxp";
const a1 = "Fma2";
const c1 = "BvTO";
const l1 = "oRY6";
const u1 = "uTqa";
const d1 = "qXXk";
const f1 = "vihk";
const h1 = "bK0U";
const p1 = "SXBU";
const m1 = "qvCY";
const g1 = "qGqr";
const _1 = "aPJ3";
const y1 = "Wb73";
const v1 = "LBYT";
const w1 = "NrhO";
const E1 = "d0YW";
const S1 = "Wv5p";
const b1 = "mWLx";
const C1 = "sMQY";
const T1 = "Pjyd";
const I1 = "YeRa";
const N1 = "ypfD";

const ce = {
  commentWrapper: o1,
  threadItem: s1,
  avatarWrapper: i1,
  threadLine: a1,
  commentBody: c1,
  showMoreBtn: l1,
  avatarPlaceholder: u1,
  comment: d1,
  small: f1,
  commentTime: h1,
  commentText: p1,
  commentActions: m1,
  commentContent: g1,
  avatarLink: _1,
  authorLink: y1,
  commentHeader: v1,
  moreButton: w1,
  commentHeaderLeft: E1,
  replyMention: S1,
  commentMedia: b1,
  reactionWrapper: C1,
  commentAction: T1,
  liked: I1,
  replyButton: N1,
};

const k1 = ne(() => Q(() => import("./index-D-elPXGA.js"), __vite__mapDeps([16, 7, 17])).then(
  e => ({
    default: e.VoiceMessage
  })
)
);

const R1 = Hr((
  {
    author: t,
    commentId: n,
    text: r,
    spans: o = [],
    attachments: s = [],
    createdAt: i,
    reactionsCount: c,
    isReacted: l,
    size: u = "sm",
    onLike: f,
    onReply: d,
    onReport: p,
    onEdit: h,
    onDelete: m,
    replyTo: _,
    hideAvatar: b = false,
    isWallOwner: g = false,
  }
) => {
  const y = Ol(i);

  const v = we(w => w.profile?.id);

  const I = t.id === v;
  const E = I || g;
  const S = u === "xs";

  const C = Se(() => {
    const w = [];

    if (I &&
      h) {
      w.push({
        id: "edit",
        label: "Редактировать",
        icon: a(Ml, { size: 16 }),
        onClick: () => h(n),
      });
    }

    if (E &&
      m) {
      w.push({
        id: "delete",
        label: "Удалить",
        icon: a(jl, { size: 16 }),
        danger: true,
        onClick: () => m(n),
      });
    }

    if (!I) {
      w.push({
        id: "report",
        label: "Пожаловаться",
        icon: a(Ul, { size: 16 }),
        danger: true,
        onClick: () => p(n),
      });
    }

    return w;
  }, [I, E, n, h, m, p]);

  const T = `/@${t.username ?? t.id}`;
  return a("div", {
    className: `${ce.comment} ${S ? ce.small : ""}`,
    children: [
      !b &&
        a("a", {
          href: T,
          className: ce.avatarLink,
          children: a(nt, { src: t.avatar, alt: t.displayName, size: u }),
        }),
      a("div", {
        className: ce.commentContent,
        children: [
          a("div", {
            className: ce.commentHeader,
            children: [
              a("div", {
                className: ce.commentHeaderLeft,
                children: [
                  a("a", {
                    href: T,
                    className: ce.authorLink,
                    children: a(tr, {
                      name: t.displayName,
                      verified: t.isVerified,
                      hasNuksta: t.hasNuksta,
                      pin: t.pin,
                      size: u,
                    }),
                  }),
                  a("span", { className: ce.commentTime, children: y }),
                ],
              }),
              a(eu, {
                trigger: a(Bl, { size: S ? 14 : 16 }),
                items: C,
                position: "bottom-right",
                className: ce.moreButton,
              }),
            ],
          }),
          (_ || r) &&
            a("div", {
              className: ce.commentText,
              children: [
                _ &&
                  a(ke, {
                    children: [
                      a("a", {
                        href: `/@${_.username}`,
                        className: ce.replyMention,
                        children: ["@", _.displayName],
                      }),
                      ", ",
                    ],
                  }),
                r && a(tu, { text: r, spans: o }),
              ],
            }),
          Ar(s).length > 0 &&
            a("div", {
              className: ce.commentMedia,
              children: a(As, { media: Ar(s) }),
            }),
          s
            .filter(w => w.type === "audio")
            .map(w => a(
            Te,
            {
              fallback: null,
              children: a(k1, { src: w.url, duration: w.duration }),
            },
            w.id
          )
            ),
          a("div", {
            className: ce.commentActions,
            children: [
              a("button", {
                className: ce.replyButton,
                onClick: d,
                children: "Ответить",
              }),
              a("div", {
                className: ce.reactionWrapper,
                children: a("button", {
                  className: `${ce.commentAction} ${l ? ce.liked : ""}`,
                  onClick: () => f(),
                  children: [
                    a(Ss, { size: 14, filled: l }),
                    a($n, { value: c }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
});

const iu = Hr((
  {
    comment: t,
    onLike: n,
    onLikeReply: r,
    replyingTo: o,
    onStartReply: s,
    onCancelReply: i,
    onSubmitReply: c,
    onVoiceSend: l,
    onLoadReplies: u,
    onReport: f,
    onEdit: d,
    onDelete: p,
    isLoadingReplies: h = false,
    flashingCommentId: m,
    isWallOwner: _ = false,
  }
) => {
  const b = o?.commentId === t.id;

  const g = {
    id: t.author.id,
    username: t.author.username,
    avatar: t.author.avatar ?? "",
    displayName: t.author.displayName,
    isVerified: t.author.isVerified,
    pin: t.author.pin,
  };

  const y = t.previewReplies ?? [];
  const v = m === t.id;
  const I = t.stats.replies > y.length;

  const E = [
    { type: "parent", data: t, author: g },
    ...y.map(S => ({
      type: "reply",
      data: S,

      author: {
        id: S.author.id,
        username: S.author.username,
        avatar: S.author.avatar ?? "",
        displayName: S.author.displayName,
        isVerified: S.author.isVerified,
        pin: S.author.pin,
      }
    })),
  ];

  return a("div", {
    className: `${ce.commentWrapper} ${v ? "flash-highlight" : ""}`,
    "data-comment-id": t.id,
    children: [
      E.map((S, C) => {
        const w = !(C === E.length - 1 && !b && !I);
        const P = m === S.data.id;
        return a(
          "div",
          {
            "data-comment-id": S.data.id,
            className: `${ce.threadItem} ${P ? "flash-highlight" : ""}`,
            children: [
              a("div", {
                className: ce.avatarWrapper,
                children: [
                  a("a", {
                    href: `/@${S.author.username ?? S.author.id}`,
                    className: ce.avatarLink,
                    children: a(nt, {
                      src: S.author.avatar,
                      alt: S.author.displayName,
                      size: "sm",
                    }),
                  }),
                  w && a("div", { className: ce.threadLine }),
                ],
              }),
              a("div", {
                className: ce.commentBody,
                children: a(R1, {
                  author: S.author,
                  commentId: S.data.id,
                  text: S.data.text,
                  spans: S.data.spans ?? [],
                  attachments: S.data.attachments ?? [],
                  replyTo: S.data.replyTo,
                  createdAt: S.data.createdAt,
                  reactionsCount: S.data.reactions.total,
                  isReacted: S.data.reactions.myReaction !== null,
                  size: "sm",
                  onLike: S.type === "parent" ? n : () => r(S.data.id),
                  onReply: () => S.type === "parent"
                    ? s(
                        t.id,
                        t.author.username ?? t.author.id,
                        t.author.displayName,
                        t.author.id
                      )
                    : s(
                        t.id,
                        S.data.author.username ?? S.data.author.id,
                        S.data.author.displayName,
                        S.data.author.id,
                        S.data.id
                      ),
                  onReport: f,
                  onEdit: d,
                  onDelete: p,
                  hideAvatar: true,
                  isWallOwner: _,
                }),
              }),
            ],
          },
          S.data.id
        );
      }),
      b &&
        a("div", {
          className: ce.threadItem,
          children: [
            a("div", {
              className: ce.avatarWrapper,
              children: [
                a("div", { className: ce.avatarPlaceholder }),
                I && a("div", { className: ce.threadLine }),
              ],
            }),
            a("div", {
              className: ce.commentBody,
              children: a(Ql, {
                placeholder: "Написать ответ...",
                replyTo: { id: o.commentId, authorName: o.displayName },
                onCancelReply: i,
                onSubmit: c,
                onVoiceSend: l,
                autoFocus: true,
              }),
            }),
          ],
        }),
      I &&
        !h &&
        a("button", {
          className: ce.showMoreBtn,
          onClick: () => u(t.id),
          children: ["Показать ещё ", t.stats.replies - y.length, " ответов"],
        }),
    ],
  });
});

function P1({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: r = o => o,
}) {
  const o = R(null);
  const [s, i] = L(0);
  const [c, l] = L(0);
  const u = R(new Map());
  const f = R(new Map());
  const d = R(0);

  if (d.current !== e) {
    (d.current = e);
    f.current.clear();
  }

  const p = N(
      (E) => {
        const S = r(E);
        return u.current.get(S) ?? t;
      },
      [r, t]
    );

  const h = N(
    (E) => {
      if (E === 0) {
        return 0;
      }
      const S = f.current.get(E);
      if (S !== undefined) {
        return S;
      }
      let C = 0;
      let T = 0;
      for (let w = E - 1; w >= 0; w--) {
        const P = f.current.get(w);
        if (P !== undefined) {
          (C = w);
          (T = P);
          break;
        }
      }
      for (let w = C; w < E; w++) {
        T += p(w);
      }
      f.current.set(E, T);
      return T;
    },
    [p]
  );

  const m = Se(() => e === 0 ? 0 : h(e - 1) + p(e - 1), [e, h, p]);

  const { startIndex: _, endIndex: b } = Se(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let E = 0;
    let S = e - 1;

    while (E < S) {
      const P = Math.floor((E + S) / 2);
      const x = h(P);
      const k = p(P);

      if (x + k < s) {
        (E = P + 1);
      } else {
        (S = P);
      }
    }

    const C = Math.max(0, E - n);
    let T = E;
    let w = h(E) - s;

    while (T < e && w < c + t * n) {
      (w += p(T));
      T++;
    }

    (T = Math.min(e - 1, T + n));
    return { startIndex: C, endIndex: T };
  }, [e, s, c, h, p, n, t]);

  const g = Se(() => {
    if (e === 0) {
      return [];
    }
    const E = [];
    for (let S = _; S <= b; S++) {
      E.push({ index: S, key: r(S), start: h(S), size: p(S) });
    }
    return E;
  }, [_, b, r, h, p, e]);

  const y = N(
    (E, S) => {
      if (!E) {
        return;
      }
      const C = r(S);
      const T = E.getBoundingClientRect().height;
      if (T <= 0) {
        return;
      }
      const w = u.current.get(C);

      if ((w === undefined || Math.abs(w - T) > 2)) {
        u.current.set(C, T);
        f.current.clear();
      }
    },
    [r]
  );

  const v = N(() => {
    if (o.current) {
      i(o.current.scrollTop);
    }
  }, []);

  const I = N(
    (E) => {
      if (o.current) {
        o.current.removeEventListener("scroll", v);
      }

      (o.current = E);

      if (E) {
        l(E.clientHeight);
        i(E.scrollTop);
        E.addEventListener("scroll", v, { passive: true });
      }
    },
    [v]
  );

  F(() => {
    if (!o.current) {
      return;
    }
    const E = new ResizeObserver((S) => {
      for (const C of S) {
        l(C.contentRect.height);
      }
    });
    E.observe(o.current);

    return () => E.disconnect();
  }, []);

  F(
    () => () => {
      if (o.current) {
        o.current.removeEventListener("scroll", v);
      }
    },
    [v]
  );

  return { containerRef: I, virtualItems: g, totalSize: m, measureElement: y };
}
const A1 = "Rs2q";
const O1 = "pFCb";
const x1 = "T3sE";
const L1 = "kLp5";
const $1 = "Rkhy";
const M1 = "AU9Q";
const D1 = "WArB";
const U1 = "P5kC";
const F1 = "iy1v";
const B1 = "RskO";
const H1 = "Kjhm";

const Je = {
  comments: A1,
  sortWrapper: O1,
  sortSelect: x1,
  commentsList: L1,
  commentItem: $1,
  empty: M1,
  loadMoreSentinel: D1,
  virtualContainer: U1,
  virtualContent: F1,
  virtualItem: B1,
  inputWrapper: H1,
};

const V1 = 120;
function W1({
  comments: e,
  hasMore: t,
  isLoadingMore: n,
  onLoadMore: r,
  replyingTo: o,
  flashingCommentId: s,
  loadingRepliesId: i,
  isWallOwner: c,
  onLikeComment: l,
  onLikeReply: u,
  onStartReply: f,
  onCancelReply: d,
  onSubmitReply: p,
  onVoiceSend: h,
  onLoadReplies: m,
  onReport: _,
  onEdit: b,
  onDelete: g,
}) {
  const y = R(false);

  const {
    containerRef: v,
    virtualItems: I,
    totalSize: E,
    measureElement: S,
  } = P1({
    itemCount: e.length,
    estimatedItemHeight: V1,
    overscan: 3,
    getItemKey: T => e[T]?.id ?? T,
  });

  F(() => {
    if (!t || n || I.length === 0) {
      y.current = false;
      return;
    }
    const T = I[I.length - 1]?.index ?? 0;
    const w = e.length - 5;

    if (T >= w && !y.current) {
      (y.current = true);
      r();
    }
  }, [I, e.length, t, n, r]);

  F(() => {
    if (!n) {
      (y.current = false);
    }
  }, [n]);

  const C = N(
    (T, w) => {
      S(T, w);
    },
    [S]
  );
  return a("div", {
    ref: v,
    className: Je.virtualContainer,
    "data-comments-scroll": true,
    children: [
      a("div", {
        className: Je.virtualContent,
        style: { height: `${E}px` },
        children: I.map((T) => {
          const w = e[T.index];
          return w
            ? a(
                "div",
                {
                  ref: P => C(P, T.index),
                  className: Je.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${T.start}px)`,
                  },
                  children: a(iu, {
                    comment: w,
                    onLike: () => l(w.id),
                    onLikeReply: u,
                    replyingTo: o?.commentId === w.id ? o : null,
                    onStartReply: f,
                    onCancelReply: d,
                    onSubmitReply: p,
                    onVoiceSend: h,
                    onLoadReplies: m,
                    onReport: _,
                    onEdit: b,
                    onDelete: g,
                    isLoadingReplies: i === w.id,
                    flashingCommentId: s,
                    isWallOwner: c,
                  }),
                },
                T.key
              )
            : null;
        }),
      }),
      n && a(Ps, { variant: "medium" }),
    ],
  });
}
const j1 = "RRLe";
const z1 = "SVsA";
const q1 = "nI0H";
const mo = { wrapper: j1, popup: z1, closing: q1 };

const G1 = ne(() => Q(() => import("./index-BQd7bGEm.js"), __vite__mapDeps([18, 19])).then(
  e => ({
    default: e.EmojiPicker
  })
)
);

const La = 280;
const $a = 380;
const go = 8;
const Y1 = 100;
const Ma = 150;
const X1 = 150;
function Os({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [r, o] = L(false);
  const [s, i] = L(false);
  const [c, l] = L(null);
  const u = R(null);
  const f = R(null);
  const d = R(null);
  const p = R(null);
  const h = R(null);
  const m = R(null);

  const _ = N(() => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }
    const T = u_current.getBoundingClientRect();

    const {
      innerHeight,
      innerWidth
    } = window;

    const x = innerHeight - T.bottom;
    const k = innerWidth - T.left;
    const T_right = T.right;
    const Y = x >= $a + go ? "bottom" : "top";
    const he = k >= La || k > T_right ? "left" : "right";
    let se;
    let pe;

    if (Y === "top") {
      (se = T.top - $a - go);
    } else {
      (se = T.bottom + go);
    }

    if (he === "left") {
      (pe = T.left);
    } else {
      (pe = T.right - La);
    }

    l({
      top: se,
      left: pe,
      transformOrigin: `${Y === "top" ? "bottom" : "top"} ${
        he === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const b = N(() => {
    if (!r && !s) {
      _();
      o(true);
    }
  }, [r, s, _]);

  const g = N(() => {
    if (r && !s) {
      i(true);

      (m.current = window.setTimeout(() => {
        o(false);
        i(false);
      }, X1));
    }
  }, [r, s]);

  const y = () => {
    if (h.current) {
      clearTimeout(h.current);
      (h.current = null);
    }

    if (m.current) {
      clearTimeout(m.current);
      (m.current = null);
    }

    if (s) {
      i(false);
    }

    if (!r) {
      (p.current = window.setTimeout(() => {
          b();
        }, Y1));
    }
  };

  const v = () => {
    if (p.current) {
      clearTimeout(p.current);
      (p.current = null);
    }

    (h.current = window.setTimeout(() => {
        g();
      }, Ma));
  };

  F(
    () => () => {
      if (p.current) {
        clearTimeout(p.current);
      }

      if (h.current) {
        clearTimeout(h.current);
      }

      if (m.current) {
        clearTimeout(m.current);
      }
    },
    []
  );

  const I = () => {
    if (h.current) {
      clearTimeout(h.current);
      (h.current = null);
    }

    if (m.current) {
      clearTimeout(m.current);
      (m.current = null);
    }

    if (s) {
      i(false);
    }
  };

  const E = () => {
    h.current = window.setTimeout(() => {
      g();
    }, Ma);
  };

  const S = (C) => {
    C.preventDefault();
  };

  return a("div", {
    ref: f,
    className: mo.wrapper,
    onMouseEnter: y,
    onMouseLeave: v,
    onMouseDown: S,
    children: [
      a("button", {
        ref: u,
        className: t,
        title: "Добавить эмоджи",
        children: a(Gg, { size: n }),
      }),
      r &&
        c &&
        nn(
          a("div", {
            ref: d,
            className: `${mo.popup} ${s ? mo.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: I,
            onMouseLeave: E,
            onMouseDown: S,
            children: a(Te, {
              fallback: null,
              children: a(G1, { onEmojiSelect: e }),
            }),
          }),
          document.body
        ),
    ],
  });
}
const K1 = "TFWn";
const Z1 = "izYl";
const J1 = "hg3E";
const Q1 = "FhQa";
const eb = "eqLh";
const tb = "xfxJ";
const nb = "fUMl";
const rb = "YKNM";
const ob = "geqL";
const sb = "LnY4";
const ib = "IC2Z";
const ab = "Sl2p";

const ze = {
  editCommentModal: K1,
  form: Z1,
  header: J1,
  title: Q1,
  content: eb,
  editor: tb,
  actions: nb,
  mediaButtons: rb,
  mediaButton: ob,
  submitGroup: sb,
  charCount: ib,
  error: ab,
};

const Da = 2000/* 2e3 */;
function cb({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = on();

  const o = Rt(E => E.editComment);

  const s = we(E => E.profile);

  const i = St();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: f,
    insertText: d,
  } = Vr(t, n);

  const [p, h] = L(false);
  const m = Da - c.length;
  const _ = m < 0;
  const b = c !== t;
  const g = JSON.stringify(l) !== JSON.stringify(n);
  const y = b || g;

  const v = N(
    (E) => {
      d(E.emoji);
    },
    [d]
  );

  const I = N(async () => {
    if (!(!c.trim() || _ || !y || p)) {
      h(true);
      try {
        await o(e, c, l);
        r();
      } catch (E) {
        console.error("Failed to update comment:", E);
      } finally {
        h(false);
      }
    }
  }, [c, l, _, y, p, o, e, r]);

  return a(rn, {
    frameless: true,
    onClose: r,
    className: ze.editCommentModal,
    children: a("div", {
      className: ze.form,
      children: [
        a("div", {
          className: ze.header,
          children: a("span", {
            className: ze.title,
            children: "Редактирование комментария",
          }),
        }),
        a("div", {
          className: ze.content,
          children: [
            a(nt, { src: s?.avatar ?? "", size: "sm" }),
            a(Wr, {
              ref: u,
              value: c,
              spans: l,
              onChange: f,
              placeholder: "Комментарий...",
              maxLength: Da,
              autoFocus: true,
              className: ze.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        a("div", {
          className: ze.actions,
          children: [
            a("div", {
              className: ze.mediaButtons,
              children:
                !i &&
                a(Os, { onEmojiSelect: v, buttonClassName: ze.mediaButton }),
            }),
            a("div", {
              className: ze.submitGroup,
              children: [
                _ &&
                  a("span", {
                    className: `${ze.charCount} ${ze.error}`,
                    children: m,
                  }),
                a(Ze, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => r(),
                  children: "Отмена",
                }),
                a(Ze, {
                  size: "md",
                  disabled: !c.trim() || _ || !y || p,
                  onClick: I,
                  children: p ? "Сохранение..." : "Сохранить",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const lb = ne(() => Q(() => import("./index-CdjLILCq.js"), __vite__mapDeps([11, 12, 13])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function ub({
  comments: e,
  isLoading: t,
  isLoadingMore: n,
  hasMore: r,
  sort: o,
  onSortChange: s,
  onLikeComment: i,
  onAddComment: c,
  onVoiceSend: l,
  onLoadMore: u,
  isWallOwner: f = false,
  variant: d = "modal",
  hideInput: p = false,
}) {
  const m = St() && d === "modal";
  const [_, b] = L(null);
  const [g, y] = L(null);
  const [v, I] = L(null);
  const [E, S] = L(null);
  const C = R(null);
  const { openModal: T } = on();

  const w = Rt(M => M.highlightedCommentId);

  const P = Rt(M => M.clearHighlightedComment);

  const x = Rt(M => M.loadReplies);

  const k = Rt(M => M.deleteComment);

  const D = Rt(M => M.toggleCommentLike);

  kg({
    sentinelRef: C,
    hasMore: r,
    isLoading: n,
    onLoadMore: u,
    rootMargin: "200px",
  });

  F(() => {
    if (!w) {
      return;
    }
    const M =
      document.querySelector("[data-comments-scroll]") ||
      document.querySelector("[data-comments-modal]");
    if (M) {
      M.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const G = document.querySelector("[data-comments-section]");

      if (G) {
        G.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    const fe = window.setTimeout(() => {
      y(w);
      P();
      const G = window.setTimeout(() => {
        y(null);
      }, 600);
      return () => clearTimeout(G);
    }, 300);
    return () => clearTimeout(fe);
  }, [w, P]);

  const Y = async (M, fe, G) => {
    if (_) {
      await c({
          text: M,
          spans: fe,
          parentId: _.commentId,
          replyToUserId: _.userId,
          replyToInfo: {
            id: _.userId,
            username: _.username,
            displayName: _.displayName,
          },
          attachments: G,
        });

      b(null);
    }
  };

  const he = (M, fe, G, A, U) => {
    b({ commentId: M, username: fe, displayName: G, userId: A, replyId: U });
  };

  const se = () => {
    b(null);
  };

  const pe = N(
    (M) => {
      D(M);
    },
    [D]
  );

  const de = N(
    async (M) => {
      I(M);
      try {
        await x(M);
      } finally {
        I(null);
      }
    },
    [x]
  );

  const q = N((M) => {
    S(M);
  }, []);

  const ee = N(
    (M) => {
      let fe = "";
      let G = [];
      for (const A of e) {
        if (A.id === M) {
          (fe = A.text);
          (G = A.spans ?? []);
          break;
        }
        const U = A.previewReplies?.find(H => H.id === M);
        if (U) {
          (fe = U.text);
          (G = U.spans ?? []);
          break;
        }
      }
      T(a(cb, { commentId: M, initialText: fe, initialSpans: G }));
    },
    [e, T]
  );

  const W = N(
    (M) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        k(M);
      }
    },
    [k]
  );

  return a("div", {
    className: Je.comments,
    children: [
      a("div", {
        className: Je.sortWrapper,
        children: a("select", {
          value: o,
          onChange: M => s(M.target.value),
          className: Je.sortSelect,
          children: [
            a("option", { value: "new", children: "Новые" }),
            a("option", { value: "old", children: "Старые" }),
            a("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? a(S0, { count: 5 })
        : e.length === 0
        ? a("div", { className: Je.empty, children: "Нет комментариев" })
        : m
        ? a(W1, {
            comments: e,
            hasMore: r,
            isLoadingMore: n,
            onLoadMore: u,
            replyingTo: _,
            flashingCommentId: g,
            loadingRepliesId: v,
            isWallOwner: f,
            onLikeComment: i,
            onLikeReply: pe,
            onStartReply: he,
            onCancelReply: se,
            onSubmitReply: Y,
            onVoiceSend: l,
            onLoadReplies: de,
            onReport: q,
            onEdit: ee,
            onDelete: W,
          })
        : a("div", {
            className: Je.commentsList,
            children: [
              e.map(M => a(
                "div",
                {
                  className: Je.commentItem,
                  children: a(iu, {
                    comment: M,
                    onLike: () => i(M.id),
                    onLikeReply: pe,
                    replyingTo: _?.commentId === M.id ? _ : null,
                    onStartReply: he,
                    onCancelReply: se,
                    onSubmitReply: Y,
                    onVoiceSend: l,
                    onLoadReplies: de,
                    onReport: q,
                    onEdit: ee,
                    onDelete: W,
                    isLoadingReplies: v === M.id,
                    flashingCommentId: g,
                    isWallOwner: f,
                  }),
                },
                M.id
              )
              ),
              r &&
                a("div", {
                  ref: C,
                  className: Je.loadMoreSentinel,
                  children: n && a(Ps, { variant: "medium" }),
                }),
            ],
          }),
      !p &&
        a("div", {
          className: Je.inputWrapper,
          children: a(Ql, {
            onSubmit: (M, fe, G) => c({ text: M, spans: fe, attachments: G }),
            onVoiceSend: l,
          }),
        }),
      E &&
        a(Te, {
          fallback: null,
          children: a(lb, {
            targetType: "comment",
            targetId: E,
            onClose: () => S(null),
          }),
        }),
    ],
  });
}
const db = "Z5jC";
const fb = "d7xe";
const hb = "Okv1";
const pb = "uQEF";
const hr = { commentsModal: db, header: fb, title: hb, content: pb };
function mb({ postId: e, onClose: t }) {
  const n = R(null);

  const {
    comments: r,
    commentsLoading: o,
    commentsLoadingMore: s,
    commentsHasMore: i,
    clearComments: c,
    fetchComments: l,
    loadMoreComments: u,
    toggleCommentLike: f,
    addComment: d,
  } = Rt(
    Ta(v => ({
      comments: v.comments,
      commentsLoading: v.commentsLoading,
      commentsLoadingMore: v.commentsLoadingMore,
      commentsHasMore: v.commentsHasMore,
      clearComments: v.clearComments,
      fetchComments: v.fetchComments,
      loadMoreComments: v.loadMoreComments,
      toggleCommentLike: v.toggleCommentLike,
      addComment: v.addComment
    }))
  );

  const { commentsSort: p, setCommentsSort: h } = wr(
    Ta(v => ({
      commentsSort: v.commentsSort,
      setCommentsSort: v.setCommentsSort
    }))
  );

  if (n.current !== e) {
    (n.current = e);
    c();
  }

  F(() => {
    l(e);
  }, [e, l]);

  const m = N(
      (v) => {
        h(v);
        l(e);
      },
      [h, l, e]
    );

  const _ = N(() => {
    if (i && !s) {
      u(e);
    }
  }, [i, s, u, e]);

  const b = N(
    (v) => {
      f(v);
    },
    [f]
  );

  const g = N(
    async (v) => {
      await d(e, v);
    },
    [d, e]
  );

  const y = N(
    async (v) => {
      const I = `voice_${Date.now()}.webm`;
      const E = new File([v], I, { type: v.type || "audio/webm" });
      const S = await ln.uploadMedia(E);
      await d(e, { text: "", attachments: [{ mediaId: S.id }] });
    },
    [d, e]
  );

  return a(rn, {
    frameless: true,
    onClose: t,
    className: hr.commentsModal,
    children: [
      a("div", {
        className: hr.header,
        children: a("span", { className: hr.title, children: "Комментарии" }),
      }),
      a("div", {
        className: hr.content,
        "data-comments-modal": true,
        children: a(ub, {
          comments: r,
          isLoading: o,
          isLoadingMore: s,
          hasMore: i,
          sort: p,
          onSortChange: m,
          onLikeComment: b,
          onAddComment: g,
          onVoiceSend: y,
          onLoadMore: _,
        }),
      }),
    ],
  });
}
const gb = ne(() => Q(() => import("./index-BGTT52-5.js"), __vite__mapDeps([20, 21])).then(
  e => ({
    default: e.DrawingCanvas
  })
)
);
function au({
  onSubmit: e,
  autoFocus: t = false,
  placeholder: n = "Что нового?",
}) {
  const {
      text: r,
      spans: o,
      editorRef: s,
      handleChange: i,
      insertText: c,
      reset: l,
    } = Vr();

  const [u, f] = L(false);
  const [d, p] = L(false);
  const [h, m] = L(false);
  const _ = R(0);
  const b = St();
  const y = ks()?.subscription?.isActive ?? false;

  const {
    images: v,
    uploadingImages: I,
    isUploading: E,
    hasVideo: S,
    openFilePicker: C,
    removeImage: T,
    addImage: w,
    uploadFiles: P,
    clearAll: x,
    fileInputRef: k,
    handleFileChange: D,
  } = Zl(10, y);

  const {
    isPollOpen: Y,
    poll: he,
    togglePoll: se,
    handlePollQuestionChange: pe,
    handlePollOptionChange: de,
    handleAddPollOption: q,
    handleRemovePollOption: ee,
    handleMultipleChoiceToggle: W,
    handleClosePoll: M,
    isPollValid: fe,
    getPollData: G,
    resetPoll: A,
  } = b0();

  const U = vt.MAX_CHARS - r.length;
  const H = U < 0;
  const te = Y && fe();
  const j = v.length > 0 || I.length > 0;
  const z = r.trim().length > 0 || te || j;
  const ae = y ? `${jo},${p_}` : jo;

  const Ce = N(async () => {
    if (!(!z || H || E || d)) {
      p(true);
      try {
        const Ee = v.map(Ie => ({
          mediaId: Ie.mediaId,
          url: Ie.url
        }));
        await e?.(r, o, Ee, G());
        l();
        x();
        A();
      } catch {
      } finally {
        p(false);
      }
    }
  }, [z, H, E, d, r, o, v, G, e, l, x, A]);

  const be = N(
    (Ee) => {
      w(Ee);
    },
    [w]
  );

  const re = N(
    (Ee) => {
      c(Ee.emoji);
    },
    [c]
  );

  const $t = N((Ee) => {
    Ee.preventDefault();
    Ee.stopPropagation();
    _.current++;

    if (Ee.dataTransfer?.types.includes("Files")) {
      m(true);
    }
  }, []);

  const bt = N((Ee) => {
    Ee.preventDefault();
    Ee.stopPropagation();
  }, []);

  const jr = N((Ee) => {
    Ee.preventDefault();
    Ee.stopPropagation();
    _.current--;

    if (_.current === 0) {
      m(false);
    }
  }, []);

  const zr = N(
    (Ee) => {
      Ee.preventDefault();
      Ee.stopPropagation();
      (_.current = 0);
      m(false);
      const Ie = Ee.dataTransfer?.files;

      if (Ie && Ie.length > 0) {
        P(Array.from(Ie));
      }
    },
    [P]
  );

  return a("div", {
    className: `${J.form} ${h ? J.dragActive : ""}`,
    onDragEnter: $t,
    onDragOver: bt,
    onDragLeave: jr,
    onDrop: zr,
    children: [
      h &&
        a("div", {
          className: J.dragOverlay,
          children: [
            a(Fl, { size: 32 }),
            a("span", {
              children: y ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      a("div", {
        className: J.whatsNew,
        children: a(Wr, {
          ref: s,
          value: r,
          spans: o,
          onChange: i,
          placeholder: n,
          autoFocus: t,
          className: J.editor,
          minHeight: 40,
          maxHeight: vt.MAX_TEXTAREA_HEIGHT,
          onImagePaste: P,
        }),
      }),
      a(Jl, { images: v, uploadingImages: I, onRemove: T }),
      a("input", {
        ref: k,
        type: "file",
        accept: ae,
        multiple: !S,
        onChange: D,
        style: { display: "none" },
      }),
      Y &&
        a(sw, {
          poll: he,
          onQuestionChange: pe,
          onOptionChange: de,
          onAddOption: q,
          onRemoveOption: ee,
          onMultipleChoiceToggle: W,
          onClose: M,
        }),
      a("div", {
        className: J.actions,
        children: [
          a("div", {
            className: J.mediaButtons,
            children: [
              a("button", {
                className: J.mediaButton,
                onClick: C,
                title: y ? "Добавить медиа" : "Добавить изображение",
                children: a(Ll, {}),
              }),
              !b &&
                a(Os, { onEmojiSelect: re, buttonClassName: J.mediaButton }),
              a("button", {
                className: J.mediaButton,
                onClick: () => f(true),
                title: "Нарисовать",
                disabled: S,
                children: a(zg, {}),
              }),
              a("button", {
                className: `${J.mediaButton} ${Y ? J.active : ""}`,
                onClick: se,
                title: "Добавить опрос",
                children: a(qg, {}),
              }),
            ],
          }),
          a("div", {
            className: J.submitGroup,
            children: [
              H &&
                a("span", {
                  className: `${J.charCount} ${J.error}`,
                  children: U,
                }),
              a(Ze, {
                size: "lg",
                disabled: !z || H || E || d,
                loading: d,
                onClick: Ce,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      u &&
        a(Te, {
          fallback: null,
          children: a(gb, {
            isOpen: u,
            onClose: () => f(false),
            onSave: be,
            mode: "post",
          }),
        }),
    ],
  });
}
const _b = "XUfm";
const yb = "EMUl";
const Ua = { createPostModal: _b, title: yb };
function vb({ wallOwnerId: e, placeholder: t, onPostCreated: n }) {
  const { closeModal: r } = on();

  const o = we(c => c.profile);

  const s = oe(c => c.createPost);

  const i = async (c, l, u, f) => {
    if (!o) {
      return;
    }
    const d = e ?? o.id;
    await s({ wallOwnerId: d, text: c, spans: l, attachments: u, poll: f });
    await n?.();
    r();
  };

  return a(rn, {
    frameless: true,
    onClose: r,
    className: Ua.createPostModal,
    children: [
      a("h2", { className: Ua.title, children: "Создать пост" }),
      a(au, { onSubmit: i, autoFocus: true, placeholder: t }),
    ],
  });
}
const wb = "tPbJ";
const Eb = "Fd3d";
const Sb = "sAQw";
const bb = "qUvR";
const Cb = "lpVD";
const Tb = "lQUF";
const Ib = "gAKp";
const Nb = "Irq2";
const kb = "fQBR";
const Rb = "pgOP";

const st = {
  editPostModal: wb,
  form: Eb,
  whatsNew: Sb,
  editor: bb,
  actions: Cb,
  mediaButtons: Tb,
  mediaButton: Ib,
  submitGroup: Nb,
  charCount: kb,
  error: Rb,
};

const Fa = 5000/* 5e3 */;
function Pb({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = on();

  const o = oe(E => E.editPost);

  const s = we(E => E.profile);

  const i = St();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: f,
    insertText: d,
  } = Vr(t, n);

  const [p, h] = L(false);
  const m = Fa - c.length;
  const _ = m < 0;
  const b = c !== t;
  const g = JSON.stringify(l) !== JSON.stringify(n);
  const y = b || g;

  const v = N(
    (E) => {
      d(E.emoji);
    },
    [d]
  );

  const I = N(async () => {
    if (!(!c.trim() || _ || !y || p)) {
      h(true);
      try {
        await o(e, c, l);
        r();
      } catch (E) {
        console.error("Failed to update post:", E);
      } finally {
        h(false);
      }
    }
  }, [c, l, _, y, p, o, e, r]);

  return a(rn, {
    frameless: true,
    onClose: r,
    className: st.editPostModal,
    children: a("div", {
      className: st.form,
      children: [
        a("div", {
          className: st.whatsNew,
          children: [
            a(nt, { src: s?.avatar ?? "", size: "md" }),
            a(Wr, {
              ref: u,
              value: c,
              spans: l,
              onChange: f,
              placeholder: "Что нового?",
              maxLength: Fa,
              autoFocus: true,
              className: st.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        a("div", {
          className: st.actions,
          children: [
            a("div", {
              className: st.mediaButtons,
              children:
                !i &&
                a(Os, { onEmojiSelect: v, buttonClassName: st.mediaButton }),
            }),
            a("div", {
              className: st.submitGroup,
              children: [
                _ &&
                  a("span", {
                    className: `${st.charCount} ${st.error}`,
                    children: m,
                  }),
                a(Ze, {
                  size: "lg",
                  disabled: !c.trim() || _ || !y,
                  loading: p,
                  onClick: I,
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
const Ab = "AkxN";
const Ob = "pB2x";
const xb = "wdXA";
const Lb = "yGtG";
const $b = "MFkx";
const Mb = "aZ5w";
const Db = "zsS6";
const Ub = "XCWD";
const Fb = "lUxl";

const ht = {
  repostModal: Ab,
  content: Ob,
  title: xb,
  inputSection: Lb,
  textarea: $b,
  originalPost: Mb,
  postHeader: Db,
  postText: Ub,
  actions: Fb,
};

function Bb({ post: e, onClose: t, onSuccess: n }) {
  const [r, o] = L("");
  const [s, i] = L(false);

  const c = we(d => d.profile);

  const l = oe(d => d.updatePostReposted);

  const u = oe(d => d.prependPost);

  const f = async () => {
    i(true);
    try {
      const d = await Le.createRepost(e.id, r.trim() || undefined);
      l(e.id, true, e.reposted ? 0 : 1);
      u(d);

      if (c?.username) {
        Le.invalidateWallCache(c.username);
      }

      n?.();
      t();
    } catch (d) {
      console.error("Failed to create repost:", d);
    } finally {
      i(false);
    }
  };

  return a(rn, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: ht.repostModal,
    children: a("div", {
      className: ht.content,
      children: [
        a("h2", { className: ht.title, children: "Репост" }),
        a("div", {
          className: ht.inputSection,
          children: [
            c && a(nt, { src: c.avatar, alt: c.displayName, size: "sm" }),
            a("textarea", {
              className: ht.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: r,
              onInput: d => o(d.target.value),
              rows: 3,
            }),
          ],
        }),
        a("div", {
          className: ht.originalPost,
          children: [
            a("div", {
              className: ht.postHeader,
              children: [
                a(nt, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                a(tr, {
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  hasNuksta: e.author.hasNuksta,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            a("p", { className: ht.postText, children: e.text }),
          ],
        }),
        a("div", {
          className: ht.actions,
          children: [
            a(Ze, {
              variant: "secondary",
              onClick: (d) => {
                d.stopPropagation();
                t();
              },
              disabled: s,
              children: "Отмена",
            }),
            a(Ze, {
              variant: "primary",
              onClick: (d) => {
                d.stopPropagation();
                f();
              },
              disabled: s,
              children: s ? "Репост..." : "Репостнуть",
            }),
          ],
        }),
      ],
    }),
  });
}

const Hb = () => {
  const e = ks();
  const t = Gl();
  const { initialize: n, disconnectSSE: r } = Pt();
  const o = Al();

  const s = Es(w => w.fetchPortal);

  F(
    () => {
      if (t) {
        n();
      }

      return () => {
        r();
      };
    },
    [t, n, r]
  );

  F(() => {
    s();
  }, [s]);

  const i = e?.username ? `/@${e.username}` : "/profile";

  const c = Se(
    () => [
      { id: "feed", label: "Лента", icon: Dl, href: "/" },
      { id: "event", label: "Ивент", icon: null, href: "/event" },
      {
        id: "notifications",
        label: "Уведы",
        icon: Hl,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: Vl, href: i },
    ],
    [i]
  );

  const [l, u] = L({});
  const [f, d] = L(true);
  const p = R([]);
  const h = R(null);
  const [m] = er();
  const { openModal: _ } = on();

  const b = oe(w => w.fetchFeed);

  const g = oe(w => w.isRefreshing);

  const y = Xl();

  const v = N(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    b(true);
  }, [b]);

  const I = Se(() => {
    const w = m.url || "/";
    return Is.some(P => w.startsWith(P));
  }, [m.url]);

  const E = Se(() => {
    const w = m.url || "/";
    return e?.username
      ? w === `/@${e.username}` || w.startsWith(`/@${e.username}/`)
      : false;
  }, [m.url, e?.username]);

  const S = R(null);

  const C = N((w, P = false) => {
    if (!P && S.current === w) {
      return;
    }
    S.current = w;
    const x = p.current[w];
    const h_current = h.current;
    if (x && h_current) {
      const D = parseFloat(getComputedStyle(h_current).paddingLeft) || 0;

      u({
        width: x.offsetWidth,
        transform: `translateX(${x.offsetLeft - D}px)`,
      });

      d(true);
    }
  }, []);

  F(() => {
    const w = m.url || "/";

    if (!c.some(x => x.href === w)) {
      d(false);
    }
  }, [m.url, c]);

  F(() => {
    const h_current = h.current;
    if (!h_current) {
      return;
    }
    const P = h_current.querySelector(`.${Be.active}`);
    if (P) {
      const x = p.current.indexOf(P);

      if (x !== -1) {
        (S.current = null);
        C(x);
      }
    }
  }, []);

  F(() => {
    const h_current = h.current;
    if (!h_current) {
      return;
    }

    const P = () => {
        const k = h_current.querySelector(`.${Be.active}`);
        if (k) {
          const D = p.current.indexOf(k);

          if (D !== -1) {
            C(D, true);
          }
        }
      };

    const x = new ResizeObserver(P);
    x.observe(h_current);
    window.addEventListener("resize", P);

    return () => {
      x.disconnect();
      window.removeEventListener("resize", P);
    };
  }, [C]);

  const T = () => {
    _(a(vb, {}));
  };
  return I
    ? null
    : a("div", {
        className: Be.mobileNavigationWrapper,
        children: [
          a("nav", {
            ref: h,
            className: Be.navigation,
            children: [
              a("div", {
                className: `${Be.indicator} ${f ? "" : Be.indicatorHidden}`,
                style: l,
              }),
              c.map((w, P) => {
                const w_icon = w.icon;
                const k = w.id === "event";
                const D = k && o.active && !!o.url;
                const Y = m.url || "/";

                const se =
                  Y === w.href ||
                  Y.startsWith(`${w.href}/`) ||
                  (w.id === "profile" && E);

                return a(
                  "a",
                  {
                    href: D ? o.url : w.href,
                    target: D ? "_blank" : undefined,
                    rel: D ? "noopener noreferrer" : undefined,
                    ref: (pe) => {
                      (p.current[P] = pe);

                      if (pe && se) {
                        C(P);
                      }
                    },
                    className: `${Be.navItem} ${se ? Be.active : ""}`,
                    onClick: (pe) => {
                      if (se && w.id === "feed") {
                        pe.preventDefault();
                        v();
                      }
                    },
                    children: [
                      a("span", {
                        className: Be.iconWrapper,
                        children: k
                          ? a("img", {
                              src: o.active
                                ? "/assets/portal/portal-active.gif"
                                : "/assets/portal/portal-inactive.png",
                              alt: "Ивент",
                              className: `${Be.portalImage} ${
                                o.active ? Be.portalImageActive : ""
                              }`,
                            })
                          : a(ke, {
                              children: [
                                w.id === "feed" && g ? a(bs, {}) : a(w_icon, {}),
                                w.id === "notifications" &&
                                  y > 0 &&
                                  a("span", {
                                    className: Be.badge,
                                    children: y > 99 ? "99+" : y,
                                  }),
                              ],
                            }),
                      }),
                      a("span", { className: Be.label, children: w.label }),
                    ],
                  },
                  w.id
                );
              }),
            ],
          }),
          a("button", {
            className: Be.createButton,
            onClick: T,
            "aria-label": "Создать пост",
            children: a(Cs, {}),
          }),
        ],
      });
};

const Vb = "SMQt";
const Wb = "J5rB";
const jb = "H2Ti";
const zb = "s4o6";
const pr = { badge: Vb, red: Wb, green: jb, blue: zb };
function qb({ type: e }) {
  const t =
    e === "like"
      ? pr.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? pr.green
      : pr.blue;
  return a("div", {
    className: `${pr.badge} ${t}`,
    children: [
      e === "follow" && a(Cs, { size: 12 }),
      ["wall_post", "reply"].includes(e) && a($l, { size: 12, filled: true }),
      e === "like" && a(Ss, { size: 12, filled: true }),
      e === "repost" && a(Ts, { size: 12 }),
    ],
  });
}
const Gb = "VANg";
const Yb = "kNVq";
const Xb = "i7aP";
const Kb = "iWS0";
const Zb = "q9fM";
const Jb = "HA45";
const Qb = "lOBu";
const eC = "sc7Z";
const tC = "z1Do";
const nC = "S0AN";
const rC = "UzmB";

const Ge = {
  container: Gb,
  clearAllButton: Yb,
  toastList: Xb,
  toast: Kb,
  toastLeft: Zb,
  toastData: Jb,
  title: Qb,
  message: eC,
  dragging: tC,
  closeButton: nC,
  belowTabs: rC,
};

const oC = yn(null);
function sC({ children: e }) {
  const [t, n] = L([]);

  const r = N((c) => {
    const l = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    n(u => [
      ...u,
      {
        id: l,
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

  const o = N((c) => {
    n(l => l.filter(u => u.id !== c));
  }, []);

  const s = N(() => {
    n([]);
  }, []);

  const i = iv();

  F(() => {
    if (i) {
      const c = cC(i.type);

      r({
        message: i.message,
        notificationType: c,
        actorName: i.actorName,
        actorUsername: i.actorUsername,
        actorAvatar: i.actorAvatar,
        clickUrl: i.clickUrl,
        apiType: i.type,
        entityId: i.entityId,
        parentEntityId: i.parentEntityId,
      });

      Pt.setState({ lastSseToast: null });
    }
  }, [i, r]);

  return a(oC.Provider, {
    value: { toasts: t, addToast: r, removeToast: o, clearAll: s },
    children: [e, a(iC, { toasts: t, onRemove: o, onClearAll: s })],
  });
}
function iC({ toasts: e, onRemove: t, onClearAll: n }) {
  const [r, o] = L(false);

  const s =
    typeof window !== "undefined" &&
    (window.location.pathname === "/" || window.location.pathname === "");

  if (e.length === 0) {
    return null;
  }
  const i = e.slice(-4);

  const c = () => {
    o(true);

    setTimeout(() => {
      n();
      o(false);
    }, 300);
  };

  return a("div", {
    className: `${Ge.container} ${s ? Ge.belowTabs : ""} ym-hide-content`,
    children: [
      a("div", {
        className: `${Ge.toastList} ${r ? Ge.clearing : ""}`,
        children: i.map((l, u) => a(
          uC,
          {
            toast: l,
            onRemove: t,
            clearingDelay: r ? u * 50 : 0,
            isClearing: r,
          },
          l.id
        )
        ),
      }),
      e.length > 1 &&
        a(Ze, {
          className: Ge.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const aC = 80;
function cC(e) {
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
function lC(e) {
  const {
      apiType: t,
      entityId: n,
      parentEntityId: r,
      actorUsername: o,
      clickUrl: s,
    } = e;

  const i = ["post_reaction", "post_repost", "post_mention", "wall_post"];

  const c = [
    "post_comment",
    "comment_reaction",
    "comment_reply",
    "comment_mention",
  ];

  if (t && n && o) {
    if (i.includes(t)) {
      return `/@${o}/post/${n}`;
    }
    if (c.includes(t)) {
      return r ? `/@${o}/post/${r}?comment=${n}` : `/@${o}/post/${n}`;
    }
  }
  return t && ["follow", "follow_request", "follow_accepted"].includes(t) && o
    ? `/@${o}`
    : s || "/notifications";
}
function uC({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: r = false,
}) {
  const o = R(null);
  const [s, i] = L(0);
  const [c, l] = L(false);
  const [u, f] = L(false);
  const d = R(0);
  const p = R(false);

  const h = (E) => {
    (d.current = E.clientX);
    (p.current = false);
    l(true);
  };

  const m = N(
    (E) => {
      if (!c) {
        return;
      }
      const S = E.clientX - d.current;

      if (Math.abs(S) > 5) {
        (p.current = true);
      }

      i(S);
    },
    [c]
  );

  const _ = N(() => {
    if (c) {
      l(false);

      if (Math.abs(s) > aC) {
        f(true);
        i(s > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        i(0);

        if (!p.current) {
          const E = lC(e);

          if (E) {
            Ke(E);
            t(e.id);
          }
        }
      }
    }
  }, [c, s, t, e]);

  F(() => {
    if (c) {
      document.addEventListener("mousemove", m);
      document.addEventListener("mouseup", _);

      return () => {
        document.removeEventListener("mousemove", m);
        document.removeEventListener("mouseup", _);
      };
    }
  }, [c, m, _]);

  const b = (E) => {
    (d.current = E.touches[0].clientX);
    l(true);
  };

  const g = (E) => {
    if (!c) {
      return;
    }
    const S = E.touches[0].clientX - d.current;
    i(S);
  };

  const y = () => {
    _();
  };

  const v = u || r ? 0 : Math.max(0, 1 - Math.abs(s) / 200);
  const I = r ? 400 : s;
  return a("div", {
    ref: o,
    className: `${Ge.toast} ${c ? Ge.dragging : ""}`,
    style: {
      transform: `translateX(${I}px)`,
      opacity: v,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: h,
    onTouchStart: b,
    onTouchMove: g,
    onTouchEnd: y,
    children: [
      a("div", {
        className: Ge.toastLeft,
        children: [
          a(nt, {
            src: e.actorAvatar || "",
            badge: a(qb, { type: e.notificationType }),
          }),
          a("div", {
            className: Ge.toastData,
            children: [
              e.actorName &&
                a("div", {
                  className: Ge.title,
                  children: a(tr, { name: e.actorName }),
                }),
              a("p", { className: Ge.message, children: e.message }),
            ],
          }),
        ],
      }),
      a("button", {
        className: Ge.closeButton,
        onClick: (E) => {
          E.stopPropagation();
          t(e.id);
        },
        onMouseDown: E => E.stopPropagation(),
        onTouchStart: E => E.stopPropagation(),
        children: a(ct, { size: 16 }),
      }),
    ],
  });
}
const dC = "gB5X";
const fC = "DxZ6";
const hC = "E5f7";
const pC = "pyLe";
const mC = "ZRxl";
const gC = "HxzT";
const _C = "WZzE";
const yC = "U0jH";
const vC = "iQhJ";
const wC = "NmFg";

const jt = {
  container: dC,
  toast: fC,
  slideUp: hC,
  leaving: pC,
  fadeOut: mC,
  success: gC,
  icon: _C,
  message: yC,
  closeButton: vC,
  error: wC,
};

const EC = { success: Yg, error: Wg };
function SC({ id: e, type: t, message: n, onRemove: r }) {
  const [o, s] = L(false);
  const EC_t = EC[t];

  const c = N(() => {
    s(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return a("div", {
    className: `${jt.toast} ${jt[t]} ${o ? jt.leaving : ""}`,
    children: [
      a("span", { className: jt.icon, children: a(EC_t, { size: 20 }) }),
      a("span", { className: jt.message, children: n }),
      a("button", {
        className: jt.closeButton,
        onClick: c,
        children: a(ct, { size: 14 }),
      }),
    ],
  });
}
function bC() {
  const e = Ir(n => n.toasts);

  const t = Ir(n => n.removeToast);

  return e.length === 0
    ? null
    : a("div", {
        className: jt.container,
        children: e.map(n => a(
          SC,
          { id: n.id, type: n.type, message: n.message, onRemove: t },
          n.id
        )
        ),
      });
}
const CC = "Lk2Z";
const TC = "srRz";
const IC = "aKMw";
const NC = "TwVf";
const mr = { tabs: CC, indicator: TC, button: IC, active: NC };
function kC({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: r,
  className: o = "",
}) {
  const [s, i] = L(t);
  const c = n !== undefined ? n : s;
  const [l, u] = L({});
  const f = R([]);
  const d = R(null);
  const p = R(false);

  const h = N(() => {
    const g = f.current[c];
    if (g) {
      const g_parentElement = g.parentElement;
      const v = g_parentElement ? parseFloat(getComputedStyle(g_parentElement).paddingLeft) : 0;
      const I = !p.current;

      u({
        width: g.offsetWidth,
        transform: `translateX(${g.offsetLeft - v}px)`,
        ...(I ? { transition: "none" } : {}),
      });

      if (I) {
        requestAnimationFrame(() => {
          (p.current = true);

          u((E) => {
            const { transition: S, ...C } = E;
            return C;
          });
        });
      }
    }
  }, [c]);

  F(() => {
    h();
  }, [h]);

  F(() => {
    const d_current = d.current;
    if (!d_current) {
      return;
    }
    const y = new ResizeObserver(() => {
      h();
    });
    y.observe(d_current);

    return () => {
      y.disconnect();
    };
  }, [h]);

  const m = (g) => {
    if (n === undefined) {
      i(g);
    }

    r?.(g, e[g]);
  };

  const _ = g => typeof g == "string" ? g : g.label;

  const b = (g, y) => typeof g == "string" ? `${y}` : g.id;

  return a("div", {
    ref: d,
    className: `${mr.tabs} ${o}`,
    children: [
      a("div", { className: mr.indicator, style: l }),
      e.map((g, y) => a(
        "button",
        {
          ref: (v) => {
            f.current[y] = v;
          },
          onClick: () => m(y),
          className: `${mr.button} ${c === y ? mr.active : ""}`,
          children: _(g),
        },
        b(g, y)
      )
      ),
    ],
  });
}
const RC = ne(() => Q(() => import("./index--76wyuRk.js"), __vite__mapDeps([22, 23, 24])).then(
  e => ({
    default: e.ImageViewer
  })
)
);
function PC() {
  const {
    isOpen: e,
    images: t,
    initialIndex: n,
    sourceRect: r,
    resolveSourceRect: o,
    close: s,
  } = Rl();
  return e
    ? a(Te, {
        fallback: null,
        children: a(RC, {
          images: t,
          initialIndex: n,
          sourceRect: r,
          resolveSourceRect: o,
          onClose: s,
        }),
      })
    : null;
}
const AC = "OABs";
const OC = "SnGd";
const xC = "ZEjw";
const _o = { layout: AC, wrapper: OC, content: xC };
const LC = ["/login", "/register", "/forgot-password", "/verify-email"];

const $C = [
  "/terms",
  "/privacy",
  "/cookies",
  "/external",
  "/support",
  "/delete-account",
  "/child-safety",
];

const MC = [];

const DC = ({ children: e }) => {
  const t = St();
  const n = Ng();
  const [r, o] = L(window.location.pathname);
  F(() => {
    const l = () => {
      o(window.location.pathname);
    };
    window.addEventListener("popstate", l);
    const u = history.pushState.bind(history);
    const f = history.replaceState.bind(history);

    (history.pushState = (...d) => {
      u(...d);
      l();
    });

    (history.replaceState = (...d) => {
      f(...d);
      l();
    });

    return () => {
      window.removeEventListener("popstate", l);
      (history.pushState = u);
      (history.replaceState = f);
    };
  }, []);
  const s = LC.includes(r);
  const i = $C.includes(r);
  const c = MC.includes(r);
  return s
    ? a(ke, { children: e })
    : a(Ig.Provider, {
        value: { isHidden: n },
        children: a("div", {
          className: _o.layout,
          children: a("div", {
            className: _o.wrapper,
            children: [
              !i && !(t && c) && (t ? a(Hb, {}) : a(Ov, {})),
              !i && !t && a(Dv, {}),
              a("div", { className: _o.content, children: e }),
            ],
          }),
        }),
      });
};

const Ba = 3000/* 3e3 */;
const UC = 500;
const FC = 30000/* 3e4 */;
const Ha = ["mousemove", "keydown", "touchstart", "wheel", "scroll"];
function BC() {
  const e = oe(t => t.applyStatsUpdates);
  F(() => {
    let t = null;
    let n = Infinity;
    let r = false;
    let o = false;
    let s = Date.now();

    const i = () => Date.now() - s > FC;

    const c = async () => {
      if (r || (typeof document !== "undefined" && document.hidden)) {
        return;
      }
      if (i()) {
        (o = true);

        if (t !== null) {
          clearTimeout(t);
          (t = null);
        }

        (n = Infinity);
        return;
      }
      const p = Pr.getSnapshot();
      if (p.length !== 0) {
        r = true;
        try {
          const h = p.length > 20 ? p.slice(0, 20) : p;
          const m = await Le.getPostsStats(h);

          if (m.length > 0) {
            e(m);
          }
        } catch {
        } finally {
          r = false;
        }
      }
    };

    const l = (p) => {
      const h = Date.now() + p;

      if (h < n) {
        t !== null && clearTimeout(t);
        (n = h);

        (t = setTimeout(async () => {
          (t = null);
          (n = Infinity);
          await c();

          if (!o) {
            l(Ba);
          }
        }, p));
      }
    };

    const u = () => {
      (s = Date.now());

      if (o) {
        (o = false);
        l(0);
      }
    };

    for (const p of Ha) {
      window.addEventListener(p, u, { passive: true });
    }
    const f = () => {
      if (!document.hidden) {
        u();
      }
    };
    document.addEventListener("visibilitychange", f);
    const d = Pr.onAppear(() => {
      if (!o && !document.hidden) {
        l(UC);
      }
    });
    l(Ba);

    return () => {
      if (t !== null) {
        clearTimeout(t);
      }

      document.removeEventListener("visibilitychange", f);
      for (const p of Ha) {
        window.removeEventListener(p, u);
      }
      d();
    };
  }, [e]);
}

const cu = e => {
  Ke("/", true);
  return null;
};

const HC = "xJJA";
const VC = "ihnf";
const WC = "SzPy";
const jC = "X4iH";
const zC = "HBWT";
const qC = "ed29";
const GC = "sbLb";
const YC = "LJnD";
const XC = "ftPJ";
const KC = "kNV3";
const ZC = "cYYv";
const JC = "H7Wp";
const QC = "ZjjT";
const eT = "SUdt";
const tT = "X0jj";
const nT = "J56O";
const rT = "RM5J";
const oT = "jMGh";
const sT = "tTJ2";
const iT = "d9Ah";
const aT = "f5Sq";
const cT = "FseL";

const B = {
  skeleton: HC,
  inner: VC,
  content: WC,
  header: jC,
  body: zC,
  actions: qC,
  shimmer: GC,
  avatar: YC,
  name: XC,
  time: KC,
  line: ZC,
  w100: JC,
  w92: QC,
  w85: eT,
  w78: tT,
  w65: nT,
  w50: rT,
  w40: oT,
  media: sT,
  mediaTall: iT,
  pill: aT,
  list: cT,
};

function lT(e) {
  switch (e) {
    case "short":
      {
        return a("div", {
          className: B.body,
          children: a("div", { className: `${B.shimmer} ${B.line} ${B.w65}` }),
        });
      }
    case "medium":
      {
        return a("div", {
          className: B.body,
          children: [
            a("div", { className: `${B.shimmer} ${B.line} ${B.w100}` }),
            a("div", { className: `${B.shimmer} ${B.line} ${B.w78}` }),
          ],
        });
      }
    case "long":
      {
        return a("div", {
          className: B.body,
          children: [
            a("div", { className: `${B.shimmer} ${B.line} ${B.w100}` }),
            a("div", { className: `${B.shimmer} ${B.line} ${B.w92}` }),
            a("div", { className: `${B.shimmer} ${B.line} ${B.w85}` }),
            a("div", { className: `${B.shimmer} ${B.line} ${B.w50}` }),
          ],
        });
      }
    case "media":
      {
        return a("div", {
          className: B.body,
          children: [
            a("div", { className: `${B.shimmer} ${B.line} ${B.w92}` }),
            a("div", { className: `${B.shimmer} ${B.line} ${B.w40}` }),
            a("div", { className: `${B.shimmer} ${B.media}` }),
          ],
        });
      }
    case "mediaTall":
      {
        return a("div", {
          className: B.body,
          children: [
            a("div", { className: `${B.shimmer} ${B.line} ${B.w78}` }),
            a("div", { className: `${B.shimmer} ${B.mediaTall}` }),
          ],
        });
      }
  }
}
function lu({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return a("article", {
    className: B.skeleton,
    "aria-hidden": "true",
    style: n,
    children: a("div", {
      className: B.inner,
      children: [
        a("div", { className: `${B.shimmer} ${B.avatar}` }),
        a("div", {
          className: B.content,
          children: [
            a("div", {
              className: B.header,
              children: [
                a("div", { className: `${B.shimmer} ${B.name}` }),
                a("div", { className: `${B.shimmer} ${B.time}` }),
              ],
            }),
            lT(e),
            a("div", {
              className: B.actions,
              children: [
                a("div", { className: `${B.shimmer} ${B.pill}` }),
                a("div", { className: `${B.shimmer} ${B.pill}` }),
                a("div", { className: `${B.shimmer} ${B.pill}` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Va = ["medium", "media", "short", "long", "mediaTall"];
function uT({ count: e = 4 }) {
  return a("div", {
    className: B.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка постов",
    children: Array.from({ length: e }, (t, n) => a(lu, { variant: Va[n % Va.length], delayMs: n * 120 }, n)
    ),
  });
}
const dT = "fgeN";
const fT = "pyxI";
const hT = "lc33";
const yo = { virtualFeed: dT, virtualContent: fT, virtualItem: hT };
function pT({
  posts: e,
  renderPost: t,
  isLoadingMore: n = false,
  hasMore: r = false,
  onLoadMore: o,
  estimatedPostHeight: s = 300,
  overscan: i = 5,
  gap: c = 10,
  initialMeasuredHeights: l,
  onMeasuredHeightsChange: u,
}) {
  const f = R(null);
  const d = R(false);
  const [p, h] = L(null);
  const [m, _] = L(window.innerWidth < 1174);

  const b = oe(w => w.highlightedPostId);

  const g = oe(w => w.clearHighlightedPost);

  F(() => {
    const w = () => _(window.innerWidth < 1174);
    window.addEventListener("resize", w);

    return () => window.removeEventListener("resize", w);
  }, []);
  const y = m ? 0 : c;

  const v = N(
    (w) => {
      const e_w = e[w];
      if (!e_w) {
        return w;
      }
      const x = e_w.attachments?.[0]?.id ?? "";
      return `${e_w.id}-${x}`;
    },
    [e]
  );

  const {
    virtualItems: I,
    totalSize: E,
    measureElement: S,
    getMeasuredHeights: C,
  } = Rg({
    itemCount: e.length,
    estimatedItemHeight: s,
    overscan: i,
    gap: y,
    getItemKey: v,
    initialMeasuredHeights: l,
  });

  F(
    () => () => {
      if (u) {
        u(C());
      }
    },
    [u, C]
  );

  F(() => {
    if (!b) {
      return;
    }
    f.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const w = setTimeout(() => {
      h(b);
      g();

      setTimeout(() => h(null), 600);
    }, 300);
    return () => clearTimeout(w);
  }, [b, g]);

  const T = N(() => {
    if (!o || !r || n) {
      return;
    }
    const w =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (w < 500 && !d.current) {
      (d.current = true);
      o();
    }

    if (w > 600) {
      (d.current = false);
    }
  }, [o, r, n]);

  F(() => {
    if (!n) {
      (d.current = false);
    }
  }, [n]);

  F(
    () => {
      window.addEventListener("scroll", T, { passive: true });

      return () => window.removeEventListener("scroll", T);
    },
    [T]
  );

  return a("div", {
    ref: f,
    className: yo.virtualFeed,
    children: [
      a("div", {
        className: yo.virtualContent,
        style: { height: `${E}px` },
        children: I.map((w) => {
          const P = e[w.index];
          return P
            ? a(
                "div",
                {
                  ref: x => S(x, w.index),
                  className: yo.virtualItem,
                  style: { transform: `translateY(${w.start}px)` },
                  children: t(P, w.index, P.id === p),
                },
                w.key
              )
            : null;
        }),
      }),
      n && a(lu, { variant: "medium" }),
    ],
  });
}
const mT = "n8Ml";
const gT = "zqJw";
const _T = "Vx8q";
const yT = "MT3T";
const vT = "h4LC";
const wT = "mOXi";

const cn = {
  page: mT,
  createPostWrapper: gT,
  tabsWrapper: _T,
  searchButton: yT,
  error: vT,
  empty: wT,
};

const ET = (e) => {
  const t = oe(C => C.posts);

  const n = oe(C => C.activeFeed);

  const r = oe(C => C.isLoading);

  const o = oe(C => C.isLoadingMore);

  const s = oe(C => C.hasMore);

  const i = oe(C => C.error);

  const c = oe(C => C.feedScrollPosition);

  const l = oe(C => C.feedMeasuredHeights);

  const u = oe(C => C.setActiveFeed);

  const f = oe(C => C.fetchFeed);

  const d = oe(C => C.loadMoreFeed);

  const p = oe(C => C.createPost);

  const h = oe(C => C.setFeedMeasuredHeights);

  const m = we(C => C.profile);

  const _ = we(C => C.status);

  const b = R(false);

  const g = Se(() => t.map(C => C.author.id), [t]);

  v_(g);

  F(() => {
    if (_ === "authenticated" && t.length === 0 && !r) {
      f();
    }
  }, [n, _]);

  F(() => {
    if (t.length > 0 &&
      c > 0 &&
      !b.current) {
      (b.current = true);

      requestAnimationFrame(() => {
        window.scrollTo(0, c);
      });
    }
  }, [t.length, c]);

  const y = (C) => {
    const w = ["global", "clan", "following"][C] ?? "global";

    if (w !== n) {
      u(w);
    }
  };

  const v = async (C, T, w, P) => {
    if (m) {
      (await p({
          wallOwnerId: m.id,
          text: C,
          spans: T,
          attachments: w,
          poll: P,
        }));
    }
  };

  const I = N(() => {
    if (s && !o) {
      d();
    }
  }, [s, o, d]);

  const E =
    n === "global"
      ? "feed_global"
      : n === "following"
      ? "feed_following"
      : "feed_clan";

  const S = N(
    (C, T, w) => a(r1, { post: C, isHighlighted: w, source: E }, C.id),
    [E]
  );

  return a("div", {
    className: cn.page,
    children: [
      a("div", {
        className: cn.tabsWrapper,
        children: [
          a(kC, {
            tabs: ["Для вас", "Лента кланов", "Подписки"],
            activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
            onChange: y,
          }),
          a("a", {
            href: "/search",
            className: cn.searchButton,
            "aria-label": "Поиск",
            children: a(Wl, {}),
          }),
        ],
      }),
      a("div", {
        className: cn.createPostWrapper,
        children: [
          m && a(nt, { src: m.avatar ?? "", alt: m.displayName, size: "sm" }),
          a(au, { onSubmit: v }),
        ],
      }),
      i
        ? a("div", {
            className: cn.error,
            children: [
              a("p", { children: i }),
              a("button", { onClick: () => f(), children: "Повторить" }),
            ],
          })
        : r && t.length === 0
        ? a(uT, { count: 4 })
        : t.length === 0
        ? a("div", { className: cn.empty, children: "Нет постов" })
        : t.length > 0
        ? a(pT, {
            posts: t,
            renderPost: S,
            isLoadingMore: o,
            hasMore: s,
            onLoadMore: I,
            estimatedPostHeight: 250,
            overscan: 3,
            initialMeasuredHeights: l,
            onMeasuredHeightsChange: h,
          })
        : null,
    ],
  });
};

const ST = ne(() => Q(() => import("./index-B-KEYRI1.js"), __vite__mapDeps([25, 26])).then(
  e => ({
    default: e.GlobalVideoPlayer
  })
)
);

const bT = ne(() => Q(() => import("./index-BRrJ6PP6.js"), __vite__mapDeps([27, 23, 28])).then(
  e => ({
    default: e.Hashtag
  })
)
);

const CT = ne(() => Q(() => import("./index-Dw-tOZoW.js"), __vite__mapDeps([29, 30, 31])).then(
  e => ({
    default: e.Profile
  })
)
);

const TT = ne(() => Q(() => import("./index-C2pyJKK4.js"), __vite__mapDeps([32, 23, 33])).then(
  e => ({
    default: e.PostPage
  })
)
);

const IT = ne(() => Q(
  () => import("./index-DKdCXyD9.js"),
  __vite__mapDeps([34, 1, 30, 35])
).then(e => ({
  default: e.Notifications
}))
);

const NT = ne(() => Q(() => import("./index-DV08n4_y.js"), __vite__mapDeps([36, 37])).then(
  e => ({
    default: e.Search
  })
)
);

const kT = ne(() => Q(() => import("./index-Tu53j-Ps.js"), __vite__mapDeps([38, 23, 39])).then(
  e => ({
    default: e.DeleteAccount
  })
)
);

const RT = ne(() => Q(() => import("./index-CaEcjIfj.js"), __vite__mapDeps([40, 23, 41])).then(
  e => ({
    default: e.Terms
  })
)
);

const PT = ne(() => Q(() => import("./index-B3Lgu7nN.js"), __vite__mapDeps([42, 23, 43])).then(
  e => ({
    default: e.Privacy
  })
)
);

const AT = ne(() => Q(() => import("./index--aUx-lOv.js"), __vite__mapDeps([44, 23, 45])).then(
  e => ({
    default: e.Cookies
  })
)
);

const OT = ne(() => Q(
  () => import("./index-DCXjv-o4.js"),
  __vite__mapDeps([46, 23, 2, 47])
).then(e => ({
  default: e.ExternalLink
}))
);

const xT = ne(() => Q(() => import("./index-CK3riRCp.js"), __vite__mapDeps([48, 23, 49])).then(
  e => ({
    default: e.Support
  })
)
);

const LT = ne(() => Q(() => import("./index-EfssCGOc.js"), __vite__mapDeps([50, 23, 51])).then(
  e => ({
    default: e.ChildSafety
  })
)
);

const $T = ne(() => Q(() => import("./index-BOx5EJaN.js"), __vite__mapDeps([52, 53])).then(
  e => ({
    default: e.Event
  })
)
);

const MT = ne(() => Q(() => import("./index-DlA0JsEf.js"), __vite__mapDeps([54, 23, 55])).then(
  e => ({
    default: e.SubscriptionTerms
  })
)
);

const DT = ne(() => Q(
  () => import("./index-BVkd6DD7.js"),
  __vite__mapDeps([56, 57, 58, 59, 60, 61, 62])
).then(e => ({
  default: e.Login
}))
);

const UT = ne(() => Q(
  () => import("./index-CkOxAxgU.js"),
  __vite__mapDeps([63, 57, 58, 59, 60, 61, 64])
).then(e => ({
  default: e.Register
}))
);

const FT = ne(() => Q(
  () => import("./index-KTvs1f9W.js"),
  __vite__mapDeps([65, 57, 58, 61, 66])
).then(e => ({
  default: e.ForgotPassword
}))
);

const BT = ne(() => Q(() => import("./index-CogzhWuV.js"), __vite__mapDeps([67, 61, 68])).then(
  e => ({
    default: e.ResetPassword
  })
)
);

const HT = ne(() => Q(() => import("./index-CJI4pyrU.js"), []).then(e => ({
  default: e.VerifyEmail
}))
);

const VT = ne(() => Q(() => import("./index-CIp_B2nj.js"), __vite__mapDeps([69, 70])).then(
  e => ({
    default: e.Onboarding
  })
)
);

const WT = ne(() => Q(() => import("./index-x6ZnSQSS.js"), []).then(e => ({
  default: e.Verification
}))
);

function Wa(e) {
  const t = e.match(/^\/@([^/]+)\/?$/);
  return t ? t[1] : null;
}
const jT = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return a(cu, {});
  }
  const t = e.slice(1);
  return a(CT, { username: t });
};
function zT() {
  const [e, t] = L(window.location.pathname);

  const n = _g(o => o.isOpen);

  BC();

  return a(sC, {
    children: a(cy, {
      children: a(jy, {
        currentPath: e,
        children: [
          a(PC, {}),
          n && a(Te, { fallback: null, children: a(ST, {}) }),
          a(bC, {}),
          a(Zy, {}),
          a(DC, {
            children: a(Te, {
              fallback: null,
              children: a(Nl, {
                onChange: (o) => {
                  const s = e;
                  t(o.url);

                  if (o.url === s) {
                    return;
                  }

                  yg.getState().markNavigated();
                  const i = oe.getState();
                  if (s === "/" || s === "") {
                    i.setFeedScrollPosition(window.scrollY);
                  } else {
                    const u = Wa(s);

                    if (u) {
                      i.setProfileScrollPosition(u, window.scrollY);
                    }
                  }
                  const c = o.url === "/";
                  const l = !!Wa(o.url);

                  if (!c && !l) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  a(ET, { path: "/" }),
                  a(IT, { path: "/notifications" }),
                  a(DT, { path: "/login" }),
                  a(UT, { path: "/register" }),
                  a(FT, { path: "/forgot-password" }),
                  a(BT, { path: "/reset-password" }),
                  a(HT, { path: "/verify-email" }),
                  a(RT, { path: "/terms" }),
                  a(PT, { path: "/privacy" }),
                  a(AT, { path: "/cookies" }),
                  a(VT, { path: "/onboarding" }),
                  a(NT, { path: "/search" }),
                  a(bT, { path: "/hashtag/:name" }),
                  a(OT, { path: "/external" }),
                  a(xT, { path: "/support" }),
                  a(kT, { path: "/delete-account" }),
                  a(LT, { path: "/child-safety" }),
                  a($T, { path: "/event" }),
                  a(WT, { path: "/verification" }),
                  a(MT, { path: "/subscription-terms" }),
                  a(TT, { path: "/:username/post/:postId" }),
                  a(jT, { path: "/:slug" }),
                  a(cu, { default: true }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
ng(document.getElementById("root")).render(
  a(bl, {
    children: a(tg, {
      fallback: a("div", { children: "Something went wrong" }),
      children: a(zT, {}),
    }),
  })
);
export {
  nn as $,
  R as A,
  Ze as B,
  qo as C,
  eu as D,
  St as E,
  Gl as F,
  iy as G,
  vb as H,
  ct as I,
  kC as J,
  au as K,
  Ta as L,
  rn as M,
  Rt as N,
  yg as O,
  uT as P,
  wr as Q,
  ub as R,
  Ql as S,
  Se as T,
  tr as U,
  pT as V,
  Ml as W,
  $l as X,
  Ss as Y,
  Ts as Z,
  Q as __1,
  a,
  Pt as a0,
  Xl as a1,
  kg as a2,
  zl as a3,
  O as a4,
  $ as a5,
  Ns as a6,
  Wl as a7,
  Al as a8,
  Es as a9,
  Oe as aa,
  le as ab,
  Vg as ac,
  pt as ad,
  ha as ae,
  Tn as af,
  Fg as ag,
  rt as ah,
  kl as ai,
  ml as aj,
  er as ak,
  ms as al,
  jg as am,
  Hl as an,
  Vl as ao,
  Yo as ap,
  Hr as aq,
  bs as ar,
  BE as as,
  PE as at,
  v_ as au,
  yt as av,
  w_ as aw,
  Ug as b,
  oe as c,
  L as d,
  r1 as e,
  Ke as f,
  nt as g,
  Bl as h,
  Kg as i,
  Ul as j,
  ks as k,
  Te as l,
  ke as m,
  Cs as n,
  on as o,
  Le as p,
  N as q,
  ar as r,
  ln as s,
  _t as t,
  _g as u,
  zg as v,
  jl as w,
  we as x,
  F as y,
  ne as z,
};
