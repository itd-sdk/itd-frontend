const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DePV4dJ9.js",
      "assets/index-DuSvDQSt.js",
      "assets/index-D3yAEQyJ.css",
      "assets/IconInfo-73_MrmWM.js",
      "assets/IconNotificationMention-YqJTFSdv.js",
      "assets/IconChevronRight-DUtTz2G4.js",
      "assets/IconChevronLeft-BFqryDV6.js",
      "assets/index-Zl9yzyQd.css",
      "assets/index-BQ6DAL2g.js",
      "assets/index-Cany892_.css",
      "assets/VoiceInput-B-OTfoyy.js",
      "assets/IconPlay-Bjb4z6bI.js",
      "assets/VoiceInput-DAVQvdqy.css",
      "assets/PostMediaVideo-LZMjQMs5.js",
      "assets/VolumeGlyph-5Z1UAFst.js",
      "assets/PostMediaVideo-CIFfq52q.css",
      "assets/index-BkSLRGEp.js",
      "assets/IconCheckCircle-CjvHQc8H.js",
      "assets/index-Dm4HGnc9.css",
      "assets/index-Ba5CilJg.js",
      "assets/index-BkwaJ-NY.css",
      "assets/index-qoqV4m0D.js",
      "assets/index-DpoVwQYr.css",
      "assets/index-DnF4A_Vm.js",
      "assets/index-DsSa94iy.css",
      "assets/index-hoIGeE1G.js",
      "assets/index-CZo3Xe2K.css",
      "assets/index-CWuLxraS.js",
      "assets/useBodyScrollLock-DywDeMut.js",
      "assets/index-Bqg7y3d2.css",
      "assets/index-CqBYbvIN.js",
      "assets/index-iLFzLKrw.css",
      "assets/index-BJEvD0_d.js",
      "assets/index-BYbaxV3Q.css",
      "assets/index-D5CdJvfN.js",
      "assets/index-Bk97n9sw.css",
      "assets/index-BCXXIi9B.js",
      "assets/IconCheck-BgG3lvCE.js",
      "assets/index-CklvKbL5.css",
      "assets/index-CGkgiUEs.js",
      "assets/index-chW_WwqM.css",
      "assets/index-B3Zv61eu.js",
      "assets/index-quyVw6eK.css",
      "assets/index-BzplxDT3.js",
      "assets/index-CtFOqy0b.css",
      "assets/index-DpsIboyr.js",
      "assets/index-BUb-JaA_.css",
      "assets/index-Bj5fjJOT.js",
      "assets/index-B7AcLSGG.css",
      "assets/index-CMX13lrU.js",
      "assets/index-7PDjtL-u.css",
      "assets/index-TjFqBIIx.js",
      "assets/index-F2S8UtDF.css",
      "assets/index-CMqzhqhE.js",
      "assets/index-Dt6h9sXD.css",
      "assets/index-Bx45K3Bf.js",
      "assets/index-BoA4xzx9.css",
      "assets/index-C-Cqfqs7.js",
      "assets/index-DKAMitxY.css",
      "assets/index-CdARrh9i.js",
      "assets/index-CKVAC-kr.css",
      "assets/index-C__tVi_N.js",
      "assets/index-B6C6UwNl.js",
      "assets/index-BrBBVcng.css",
      "assets/index-THyoRVyh.js",
      "assets/index-CjMyQxfm.css",
      "assets/IconEyeOff-iWQmBgHn.js",
      "assets/index-CgSXMhjD.css",
      "assets/index-B3OAXi26.js",
      "assets/index-CcN3qtNY.css",
      "assets/index-Dl5z1nZl.js",
      "assets/index-Bm6mfyZG.css",
      "assets/index-96j2QPWj.js",
      "assets/index-DK2KamdG.css",
      "assets/index-C3uVNDIt.js",
      "assets/index-Dka6XqRj.css",
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
    e.SENTRY_RELEASE = { id: "1.1.2" };
    const t = new e.Error().stack;

    if (t) {
      (e._sentryDebugIds = e._sentryDebugIds || {});
      (e._sentryDebugIds[t] = "10d0af99-0e89-4e73-b514-2b40990f420c");
      (e._sentryDebugIdIdentifier = "sentry-dbid-10d0af99-0e89-4e73-b514-2b40990f420c");
    }
  } catch {}
})();
(() => {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) {
    return;
  }
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) {
    o(r);
  }
  new MutationObserver((r) => {
    for (const s of r) {
      if (s.type === "childList") {
        for (const a of s.addedNodes) {
          if (a.tagName === "LINK" && a.rel === "modulepreload") {
            o(a);
          }
        }
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function n(r) {
    const s = {};

    if (r.integrity) {
      (s.integrity = r.integrity);
    }

    if (r.referrerPolicy) {
      (s.referrerPolicy = r.referrerPolicy);
    }

    if (r.crossOrigin === "use-credentials") {
      (s.credentials = "include");
    } else if (r.crossOrigin === "anonymous") {
      (s.credentials = "omit");
    } else {
      (s.credentials = "same-origin");
    }

    return s;
  }
  function o(r) {
    if (r.ep) {
      return;
    }
    r.ep = true;
    const s = n(r);
    fetch(r.href, s);
  }
})();
let Jr;
let re;
let Xf;
let xn;
let Wl;
let Qf;
let Zf;
let Xi;
let Vs;
let xr;
let Jf;
let Dc;
let za;
let qa;
let ep;
const oi = {};
const ri = [];
const Ig = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function en(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Uc(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function jt(e, t, n) {
  let o;
  let r;
  let s;
  const a = {};
  for (s in t) {
    if (s == "key") {
      (o = t[s]);
    } else if (s == "ref") {
      (r = t[s]);
    } else {
      (a[s] = t[s]);
    }
  }

  if (arguments.length > 2) {
    (a.children = arguments.length > 3 ? Jr.call(arguments, 2) : n);
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (s in e.defaultProps) {
      if (a[s] === undefined) {
        (a[s] = e.defaultProps[s]);
      }
    }
  }

  return Lr(e, a, o, r, null);
}
function Lr(e, t, n, o, r) {
  const s = {
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
    __v: r ?? ++Xf,
    __i: -1,
    __u: 0,
  };

  if (r == null && re.vnode != null) {
    re.vnode(s);
  }

  return s;
}
function $g() {
  return { current: null };
}
function ue(e) {
  return e.children;
}

class It {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  setState(e, t) {
    let n;

    (n = this.__s != null && this.__s != this.state
      ? this.__s
      : (this.__s = en({}, this.state)));

    if (typeof e == "function") {
      (e = e(en({}, n), this.props));
    }

    if (e) {
      en(n, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      Ga(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      (this.__e = true);
      e && this.__h.push(e);
      Ga(this);
    }
  }
}

function _o(e, t) {
  if (t == null) {
    return e.__ ? _o(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? _o(e) : null;
}
function Rg(e) {
  if (e.__P && e.__d) {
    const e_v = e.__v;
    const e_v___e = e_v.__e;
    const o = [];
    const r = [];
    const s = en({}, e_v);
    (s.__v = e_v.__v + 1);

    if (re.vnode) {
      re.vnode(s);
    }

    Fc(
      e.__P,
      s,
      e_v,
      e.__n,
      e.__P.namespaceURI,
      32 & e_v.__u ? [e_v___e] : null,
      o,
      e_v___e ?? _o(e_v),
      !!(32 & e_v.__u),
      r
    );

    (s.__v = e_v.__v);
    (s.__.__k[s.__i] = s);
    sp(o, s, r);
    e_v.__e = null;
    e_v.__ = null;

    if (s.__e != e_v___e) {
      tp(s);
    }
  }
}
function tp(e) {
  if ((e = e.__) != null && e.__c != null) {
    e.__e = null;
    e.__c.base = null;

    e.__k.some(t => {
      if (t != null && t.__e != null) {
        return (e.__e = e.__c.base = t.__e);
      }
    });

    return tp(e);
  }
}
function Ga(e) {
  if (((!e.__d && (e.__d = true) && xn.push(e) && !si.__r++) || Wl != re.debounceRendering)) {
    ((Wl = re.debounceRendering) || Qf)(si);
  }
}
function si() {
  try {
    let e;
    let t = 1;

    while (xn.length) {
      if (xn.length > t) {
        xn.sort(Zf);
      }

      (e = xn.shift());
      (t = xn.length);
      Rg(e);
    }
  } finally {
    xn.length = 0;
    si.__r = 0;
  }
}
function np(e, t, n, o, r, s, a, c, l, u, d) {
  let p;
  let f;
  let h;
  let g;
  let m;
  let v;
  const _ = (o && o.__k) || ri;
  const t_length = t.length;
  l = Ag(n, t, _, l, t_length);

  for (p = 0; p < t_length; p++) {
    if ((h = n.__k[p]) != null) {
      (f = (h.__i != -1 && _[h.__i]) || oi);
      (h.__i = p);
      (v = Fc(e, h, f, r, s, a, c, l, u, d));
      (g = h.__e);

      h.ref &&
        f.ref != h.ref &&
        (f.ref && Bc(f.ref, null, h), d.push(h.ref, h.__c || g, h));

      m == null && g != null && (m = g);

      4 & h.__u
        ? ((l = op(h, l, e)), f.__e && (f.__e = null))
        : typeof h.type == "function" && v !== undefined
        ? (l = v)
        : g && (l = g.nextSibling);

      (h.__u &= -7);
    }
  }

  (n.__e = m);
  return l;
}
function Ag(e, t, n, o, r) {
  let s;
  let a;
  let c;
  let l;
  let u;
  const n_length = n.length;
  let p = n_length;
  let f = 0;
  e.__k = new Array(r);

  for (s = 0; s < r; s++) {
    if ((a = t[s]) != null && typeof a != "boolean" && typeof a != "function") {
      typeof a == "string" ||
          typeof a == "number" ||
          typeof a == "bigint" ||
          a.constructor == String
            ? (a = e.__k[s] = Lr(null, a, null, null, null))
            : Array_isArray(a)
            ? (a = e.__k[s] = Lr(ue, { children: a }, null, null, null))
            : a.constructor === undefined && a.__b > 0
            ? (a = e.__k[s] =
                Lr(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
            : (e.__k[s] = a);

      (l = s + f);
      (a.__ = e);
      (a.__b = e.__b + 1);
      (c = null);
      (u = a.__i = xg(a, n, l, p)) != -1 && (p--, (c = n[u]) && (c.__u |= 2));

      c == null || c.__v == null
        ? (u == -1 && (r > n_length ? f-- : r < n_length && f++),
          typeof a.type != "function" && (a.__u |= 4))
        : u != l &&
          (u == l - 1
            ? f--
            : u == l + 1
            ? f++
            : (u > l ? f-- : f++, (a.__u |= 4)));
    } else {
      (e.__k[s] = null);
    }
  }

  if (p) {
    for (s = 0; s < n_length; s++) {
      if ((c = n[s]) != null &&
        (2 & c.__u) == 0) {
        c.__e == o && (o = _o(c));
        ap(c, c);
      }
    }
  }
  return o;
}
function op(e, t, n) {
  let o;
  let r;
  if (typeof e.type == "function") {
    o = e.__k;

    for (r = 0; o && r < o.length; r++) {
      if (o[r]) {
        (o[r].__ = e);
        (t = op(o[r], t, n));
      }
    }

    return t;
  }

  if (e.__e != t) {
    t && e.type && !t.parentNode && (t = _o(e));
    (t = n.insertBefore(e.__e, t || null));
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function Bt(e, t) {
  (t = t || []);

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some(n => {
              Bt(n, t);
            });
    } else {
      t.push(e);
    }
  }

  return t;
}
function xg(e, t, n, o) {
  let r;
  let s;
  let a;

  const {
    key,
    type
  } = e;

  let t_n = t[n];
  const d = t_n != null && (2 & t_n.__u) == 0;
  if ((t_n === null && key == null) || (d && key == t_n.key && type == t_n.type)) {
    return n;
  }
  if (o > (d ? 1 : 0)) {
    r = n - 1;

    for (s = n + 1; r >= 0 || s < t.length; ) {
      if ((t_n = t[(a = r >= 0 ? r-- : s++)]) != null &&
      (2 & t_n.__u) == 0 &&
      key == t_n.key &&
      type == t_n.type) {
        return a;
      }
    }
  }
  return -1;
}
function jl(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    (e[t] = n == null ? "" : typeof n != "number" || Ig.test(t) ? n : `${n}px`);
  }
}
function ys(e, t, n, o, r) {
  let s;
  let a;
  e: if (t == "style") {
    if (typeof n == "string") {
      e.style.cssText = n;
    } else {
      if (typeof o == "string") {
        (e.style.cssText = o = "");
      }

      if (o) {
        for (t in o) {
          if (!n || t in n) {
            jl(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!o || n[t] != o[t]) {
            jl(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    (s = t != (t = t.replace(Jf, "$1")));
    (a = t.toLowerCase());

    (t = a in e || t == "onFocusOut" || t == "onFocusIn"
      ? a.slice(2)
      : t.slice(2));

    if (!e.l) {
      (e.l = {});
    }

    (e.l[t + s] = n);

    if (n) {
      if (o) {
        (n[xr] = o[xr]);
      } else {
        (n[xr] = Dc);
        e.addEventListener(t, s ? qa : za, s);
      }
    } else {
      e.removeEventListener(t, s ? qa : za, s);
    }
  } else {
    if (r == "http://www.w3.org/2000/svg") {
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
function zl(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t[Vs] == null) {
        t[Vs] = Dc++;
      } else if (t[Vs] < n[xr]) {
        return;
      }
      return n(re.event ? re.event(t) : t);
    }
  };
}
function Fc(e, t, n, o, r, s, a, c, l, u) {
  let d;
  let p;
  let f;
  let h;
  let g;
  let m;
  let v;
  let _;
  let y;
  let w;
  let N;
  let k;
  let S;
  let b;
  let T;
  let C;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & n.__u) {
    (l = !!(32 & n.__u));
    (s = [(c = t.__e = n.__e)]);
  }

  if ((d = re.__b)) {
    d(t);
  }

  e: if (typeof t_type == "function") {
    p = a.length;
    try {
      (y = t.props);
      (w = t_type.prototype && t_type.prototype.render);
      (N = (d = t_type.contextType) && o[d.__c]);
      (k = d ? (N ? N.props.value : d.__) : o);

      if (n.__c) {
        (_ = (f = t.__c = n.__c).__ = f.__E);
      } else {
        w
              ? (t.__c = f = new t_type(y, k))
              : ((t.__c = f = new It(y, k)),
                (f.constructor = t_type),
                (f.render = Pg));

        N && N.sub(f);
        f.state || (f.state = {});
        (f.__n = o);
        (h = f.__d = true);
        (f.__h = []);
        (f._sb = []);
      }

      if (w && f.__s == null) {
        (f.__s = f.state);
      }

      if (w &&
        t_type.getDerivedStateFromProps != null) {
        f.__s == f.state && (f.__s = en({}, f.__s));
        en(f.__s, t_type.getDerivedStateFromProps(y, f.__s));
      }

      (g = f.props);
      (m = f.state);
      (f.__v = t);

      if (h) {
        if (w &&
          t_type.getDerivedStateFromProps == null &&
          f.componentWillMount != null) {
          f.componentWillMount();
        }

        if (w && f.componentDidMount != null) {
          f.__h.push(f.componentDidMount);
        }
      } else {
        if (w &&
            t_type.getDerivedStateFromProps == null &&
            y !== g &&
            f.componentWillReceiveProps != null) {
          f.componentWillReceiveProps(y, k);
        }

        if (t.__v == n.__v ||
          (!f.__e &&
            f.shouldComponentUpdate != null &&
            f.shouldComponentUpdate(y, f.__s, k) === false)) {
          if (t.__v != n.__v) {
            (f.props = y);
            (f.state = f.__s);
            (f.__d = false);
          }

          (t.__e = n.__e);
          (t.__k = n.__k);

          t.__k.some(x => {
            if (x) {
              (x.__ = t);
            }
          });

          ri.push.apply(f.__h, f._sb);
          (f._sb = []);

          if (f.__h.length) {
            a.push(f);
          }

          (c = _o(n));
          break e;
        }

        if (f.componentWillUpdate != null) {
          f.componentWillUpdate(y, f.__s, k);
        }

        if (w &&
          f.componentDidUpdate != null) {
          f.__h.push(() => {
            f.componentDidUpdate(g, m, v);
          });
        }
      }

      (f.context = k);
      (f.props = y);
      (f.__P = e);
      (f.__e = false);
      (S = re.__r);
      (b = 0);

      if (w) {
        (f.state = f.__s);
        (f.__d = false);

        if (S) {
          S(t);
        }

        (d = f.render(f.props, f.state, f.context));
        ri.push.apply(f.__h, f._sb);
        (f._sb = []);
      } else {
        do {
          (f.__d = false);

          if (S) {
            S(t);
          }

          (d = f.render(f.props, f.state, f.context));
          (f.state = f.__s);
        } while (f.__d && ++b < 25);
      }

      (f.state = f.__s);

      if (f.getChildContext != null) {
        (o = en(en({}, o), f.getChildContext()));
      }

      if (w &&
        !h &&
        f.getSnapshotBeforeUpdate != null) {
        (v = f.getSnapshotBeforeUpdate(g, m));
      }

      (T = d != null && d.type === ue && d.key == null
        ? ip(d.props.children)
        : d);

      (c = np(e, Array_isArray(T) ? T : [T], t, n, o, r, s, a, c, l, u));
      (f.base = t.__e);
      (t.__u &= -161);

      if (f.__h.length) {
        a.push(f);
      }

      if (_) {
        (f.__E = f.__ = null);
      }
    } catch (x) {
      (a.length = p);
      (t.__v = null);

      if (l || s != null) {
        if (x.then) {
          for (t.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) {
            c = c.nextSibling;
          }

          if (s != null) {
            (s[s.indexOf(c)] = null);
          }

          (t.__e = c);
        } else if (s != null) {
          for (C = s.length; C--; ) {
            Uc(s[C]);
          }
        }
      } else {
        t.__e = n.__e;
      }

      if (t.__k == null) {
        (t.__k = n.__k || []);
      }

      if (!x.then) {
        rp(t);
      }

      re.__e(x, t, n);
    }
  } else {
    if (s == null && t.__v == n.__v) {
      (t.__k = n.__k);
      (t.__e = n.__e);
    } else {
      (c = t.__e = Lg(n.__e, t, n, o, r, s, a, l, u));
    }
  }

  if ((d = re.diffed)) {
    d(t);
  }

  return 128 & t.__u ? undefined : c;
}
function rp(e) {
  if (e) {
    e.__c && (e.__c.__e = true);
    e.__k && e.__k.some(rp);
  }
}
function sp(e, t, n) {
  for (let o = 0; o < n.length; o++) {
    Bc(n[o], n[++o], n[++o]);
  }

  if (re.__c) {
    re.__c(t, e);
  }

  e.some(r => {
    try {
      (e = r.__h);
      (r.__h = []);

      e.some(s => {
        s.call(r);
      });
    } catch (s) {
      re.__e(s, r.__v);
    }
  });
}
function ip(e) {
  return typeof e != "object" || e == null || e.__b > 0
    ? e
    : Array_isArray(e)
    ? e.map(ip)
    : e.constructor !== undefined
    ? null
    : en({}, e);
}
function Lg(e, t, n, o, r, s, a, c, l) {
  let u;
  let d;
  let p;
  let f;
  let h;
  let g;
  let m;
  let v = n.props || oi;

  const {
    props,
    type
  } = t;

  if (type == "svg") {
    (r = "http://www.w3.org/2000/svg");
  } else if (type == "math") {
    (r = "http://www.w3.org/1998/Math/MathML");
  } else if (!r) {
    (r = "http://www.w3.org/1999/xhtml");
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
    (e = document.createElementNS(r, type, props.is && props));

    if (c) {
      re.__m && re.__m(t, s);
      (c = false);
    }

    (s = null);
  }
  if (type == null) {
    if (v !== props && (!c || e.data != props)) {
      (e.data = props);
    }
  } else {
    (s = type == "textarea" && props.defaultValue != null
      ? null
      : s && Jr.call(e.childNodes));

    if (!c && s != null) {
      v = {};

      for (u = 0; u < e.attributes.length; u++) {
        v[(h = e.attributes[u]).name] = h.value;
      }
    }

    for (u in v) {
      (h = v[u]);

      if (u == "dangerouslySetInnerHTML") {
        (p = h);
      } else if (u != "children" && u in props && (u != "value" || "defaultValue" in props) && (u != "checked" || "defaultChecked" in props)) {
        ys(e, u, null, h, r);
      }
    }
    for (u in props) {
      (h = props[u]);

      switch (u) {
      case "children":
        (f = h);
        break;
      case "dangerouslySetInnerHTML":
        (d = h);
        break;
      case "value":
        (g = h);
        break;
      case "checked":
        (m = h);
        break;
      default:
        ys(e, u, h, v[u], r);
        break;
      }
    }
    if (d) {
      if (!c && (!p || d.__html != p.__html && d.__html != e.innerHTML)) {
        (e.innerHTML = d.__html);
      }

      (t.__k = []);
    } else {
      if (p) {
        (e.innerHTML = "");
      }

      np(
        t.type == "template" ? e.content : e,
        Array_isArray(f) ? f : [f],
        t,
        n,
        o,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r,
        s,
        a,
        s ? s[0] : n.__k && _o(n, 0),
        c,
        l
      );

      if (s != null) {
        for (u = s.length; u--; ) {
          Uc(s[u]);
        }
      }
    }

    if (!c || type == "textarea") {
      (u = "value");

      type == "progress" && g == null
        ? e.removeAttribute("value")
        : g != null &&
          (g !== e[u] ||
            (type == "progress" && !g) ||
            (type == "option" && g != v[u])) &&
          ys(e, u, g, v[u], r);

      (u = "checked");
      m != null && m != e[u] && ys(e, u, m, v[u], r);
    }
  }
  return e;
}
function Bc(e, t, n) {
  try {
    if (typeof e == "function") {
      const o = typeof e.__u == "function";

      if (o) {
        e.__u();
      }

      if (!o || t != null) {
        (e.__u = e(t));
      }
    } else {
      e.current = t;
    }
  } catch (r) {
    re.__e(r, n);
  }
}
function ap(e, t, n) {
  let o;
  let r;

  if (re.unmount) {
    re.unmount(e);
  }

  if ((o = e.ref)) {
    if (!o.current || o.current == e.__e) {
      Bc(o, null, t);
    }
  }

  if ((o = e.__c) != null) {
    if (o.componentWillUnmount) {
      try {
        o.componentWillUnmount();
      } catch (s) {
        re.__e(s, t);
      }
    }
    o.base = null;
    o.__P = null;
    o.__n = null;
  }

  if ((o = e.__k)) {
    for (r = 0; r < o.length; r++) {
      if (o[r]) {
        ap(o[r], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    Uc(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function Pg(e, t, n) {
  return this.constructor(e, n);
}
function Hr(e, t, n) {
  let o;
  let r;
  let s;
  let a;

  if (t == document) {
    (t = document.documentElement);
  }

  if (re.__) {
    re.__(e, t);
  }

  (r = (o = typeof n == "function") ? null : (n && n.__k) || t.__k);
  (s = []);
  (a = []);

  Fc(
    t,
    (e = ((!o && n) || t).__k = jt(ue, null, [e])),
    r || oi,
    oi,
    t.namespaceURI,
    !o && n ? [n] : r ? null : t.firstChild ? Jr.call(t.childNodes) : null,
    s,
    !o && n ? n : r ? r.__e : t.firstChild,
    o,
    a
  );

  sp(s, e, a);
  (e.props.children = null);
}
function cp(e, t) {
  Hr(e, t, cp);
}
function lp(e, t, n) {
  let o;
  let r;
  let s;
  let a;
  const c = en({}, e.props);

  if (e.type && e.type.defaultProps) {
    (a = e.type.defaultProps);
  }

  for (s in t) {
    if (s == "key") {
      (o = t[s]);
    } else if (s == "ref") {
      (r = t[s]);
    } else {
      (c[s] = t[s] === undefined && a != null ? a[s] : t[s]);
    }
  }

  if (arguments.length > 2) {
    (c.children = arguments.length > 3 ? Jr.call(arguments, 2) : n);
  }

  return Lr(e.type, c, o || e.key, r || e.ref, null);
}
function er(e) {
  function t(n) {
    if (!this.getChildContext) {
      (o = new Set());
      r = {};
      r[t.__c] = this;
      (this.getChildContext = () => r);

      (this.componentWillUnmount = () => {
          o = null;
        });

      (this.shouldComponentUpdate = function (s) {
        if (this.props.value != s.value) {
          o.forEach(a => {
            (a.__e = true);
            Ga(a);
          });
        }
      });

      (this.sub = s => {
          o.add(s);
          const s_componentWillUnmount = s.componentWillUnmount;
          s.componentWillUnmount = () => {
            if (o) {
              o.delete(s);
            }

            if (s_componentWillUnmount) {
              s_componentWillUnmount.call(s);
            }
          };
        });
    }

    return n.children;
  }
  (t.__c = `__cC${ep++}`);
  (t.__ = e);
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, o) => n.children(o)).contextType = t;

  return t;
}
(Jr = ri.slice);

(re = {
    __e(e, t, n, o) {
      let r;
      let s;
      let a;

      while ((t = t.__)) {
        if ((r = t.__c) && !r.__) {
          try {
            if ((s = r.constructor) &&
                s.getDerivedStateFromError != null) {
              r.setState(s.getDerivedStateFromError(e));
              (a = r.__d);
            }

            if (r.componentDidCatch != null) {
              r.componentDidCatch(e, o || {});
              (a = r.__d);
            }

            if (a) {
              return (r.__E = r);
            }
          } catch (c) {
            e = c;
          }
        }
      }

      throw e;
    },
  });

(Xf = 0);

(It.prototype.render = ue);
(xn = []);

(Qf = typeof Promise == "function"
  ? Promise.prototype.then.bind(Promise.resolve())
  : setTimeout);

(Zf = (e, t) => e.__v.__b - t.__v.__b);

(si.__r = 0);
(Xi = Math.random().toString(8));
(Vs = `__d${Xi}`);
(xr = `__a${Xi}`);
(Jf = /(PointerCapture)$|Capture$/i);
(Dc = 0);
(za = zl(false));
(qa = zl(true));
(ep = 0);
let Mg = 0;
function i(e, t, n, o, r, s) {
  if (!t) {
    (t = {});
  }

  let a;
  let c;
  let l = t;
  if ("ref" in l) {
    (l = {});

    for (c in t) {
      if (c == "ref") {
        (a = t[c]);
      } else {
        (l[c] = t[c]);
      }
    }
  }
  const u = {
    type: e,
    props: l,
    key: n,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: undefined,
    __v: --Mg,
    __i: -1,
    __u: 0,
    __source: r,
    __self: s,
  };
  if (typeof e == "function" && (a = e.defaultProps)) {
    for (c in a) {
      if (l[c] === undefined) {
        (l[c] = a[c]);
      }
    }
  }

  if (re.vnode) {
    re.vnode(u);
  }

  return u;
}
const oe = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const _e = globalThis;
const uo = "10.69.0";
function Ri() {
  Ai(_e);
  return _e;
}
function Ai(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  (t.version = t.version || uo);
  (t[uo] = t[uo] || {});
  return t[uo];
}
function tr(e, t, n = _e) {
  const o = (n.__SENTRY__ = n.__SENTRY__ || {});
  const r = (o[uo] = o[uo] || {});
  return r[e] || (r[e] = t());
}
const Og = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const Dg = "Sentry Logger ";
const ii = {};
function nr(e) {
  if (!("console" in _e)) {
    return e();
  }
  const _e_console = _e.console;
  const n = {};
  const o = Object.keys(ii);
  o.forEach((r) => {
    const ii_r = ii[r];
    (n[r] = _e_console[r]);
    (_e_console[r] = ii_r);
  });
  try {
    return e();
  } finally {
    o.forEach((r) => {
      _e_console[r] = n[r];
    });
  }
}
function Ug() {
  Vc().enabled = true;
}
function Fg() {
  Vc().enabled = false;
}
function up() {
  return Vc().enabled;
}
function Bg(...e) {
  Hc("log", ...e);
}
function Hg(...e) {
  Hc("warn", ...e);
}
function Vg(...e) {
  Hc("error", ...e);
}
function Hc(e, ...t) {
  if (oe &&
    up()) {
    nr(() => {
      _e.console[e](`${Dg}[${e}]:`, ...t);
    });
  }
}
function Vc() {
  return oe ? tr("loggerSettings", () => ({
    enabled: false
  })) : { enabled: false };
}

const K = {
    enable: Ug,
    disable: Fg,
    isEnabled: up,
    log: Bg,
    warn: Hg,
    error: Vg,
  };

const dp = 50;
const vo = "?";
const ql = /\(error: (.*)\)/;
const Gl = /captureMessage|captureException/;
function fp(...e) {
  const t = e.sort((n, o) => n[0] - o[0]).map(n => n[1]);
  return (n, o = 0, r = 0) => {
    const s = [];

    const a = n.split(`
`);

    for (let c = o; c < a.length; c++) {
      let a_c = a[c];

      if (a_c.length > 1024) {
        (a_c = a_c.slice(0, 1024));
      }

      const u = ql.test(a_c) ? a_c.replace(ql, "$1") : a_c;
      if (!u.includes("Error: ")) {
        for (const d of t) {
          const p = d(u);
          if (p) {
            s.push(p);
            break;
          }
        }
        if (s.length >= dp + r) {
          break;
        }
      }
    }
    return jg(s.slice(r));
  };
}
function Wg(e) {
  return Array.isArray(e) ? fp(...e) : e;
}
function jg(e) {
  if (!e.length) {
    return [];
  }
  const t = Array.from(e);

  if (/sentryWrapped/.test(ws(t).function || "")) {
    t.pop();
  }

  t.reverse();

  if (Gl.test(ws(t).function || "")) {
    t.pop();
    Gl.test(ws(t).function || "") && t.pop();
  }

  return t
    .slice(0, dp)
    .map(n => ({
    ...n,
    filename: n.filename || ws(t).filename,
    function: n.function || vo
  }));
}
function ws(e) {
  return e[e.length - 1] || {};
}
const Qi = "<anonymous>";
function On(e) {
  try {
    return !e || typeof e != "function" ? Qi : e.name || Qi;
  } catch {
    return Qi;
  }
}
function Yl(e) {
  const e_exception = e.exception;
  if (e_exception) {
    const n = [];
    try {
      e_exception.values.forEach((o) => {
        if (o.stacktrace.frames) {
          n.push(...o.stacktrace.frames);
        }
      });

      return n;
    } catch {
      return;
    }
  }
}
const Cr = {};
const Kl = {};
function bo(e, t) {
  (Cr[e] = Cr[e] || []);
  Cr[e].push(t);

  return () => {
    const Cr_e = Cr[e];
    if (Cr_e) {
      const o = Cr_e.indexOf(t);

      if (o !== -1) {
        Cr_e.splice(o, 1);
      }
    }
  };
}
function Eo(e, t) {
  if (!Kl[e]) {
    Kl[e] = true;
    try {
      t();
    } catch (n) {
      if (oe) {
        K.error(`Error while instrumenting ${e}`, n);
      }
    }
  }
}
function Ht(e, t) {
  const n = e && Cr[e];
  if (n) {
    for (const o of n) {
      try {
        o(t);
      } catch (r) {
        if (oe) {
          K.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${On(o)}
Error:`,
            r
          );
        }
      }
    }
  }
}
let Zi = null;
function zg(e) {
  const t = "error";
  bo(t, e);
  Eo(t, qg);
}
function qg(...args) {
  (Zi = _e.onerror);

  (_e.onerror = function (e, t, n, o, r) {
    Ht("error", { column: o, error: r, line: n, msg: e, url: t });
    return Zi ? Zi.apply(this, args) : false;
  });

  (_e.onerror.__SENTRY_INSTRUMENTED__ = true);
}
let Ji = null;
function Gg(e) {
  const t = "unhandledrejection";
  bo(t, e);
  Eo(t, Yg);
}
function Yg(...args) {
  (Ji = _e.onunhandledrejection);

  (_e.onunhandledrejection = function (e) {
    Ht("unhandledrejection", e);
    return Ji ? Ji.apply(this, args) : true;
  });

  (_e.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true);
}
const pp = Object.prototype.toString;
function ts(e) {
  switch (pp.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      {
        return true;
      }
    default:
      {
        return zo(e, Error);
      }
  }
}
function or(e, t) {
  return pp.call(e) === `[object ${t}]`;
}
function hp(e) {
  return or(e, "ErrorEvent");
}
function Xl(e) {
  return or(e, "DOMError");
}
function Kg(e) {
  return or(e, "DOMException");
}
function vn(e) {
  return or(e, "String");
}
function Wc(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function ns(e) {
  return (
    e === null || Wc(e) || (typeof e != "object" && typeof e != "function")
  );
}
function Vr(e) {
  return or(e, "Object");
}
function xi(e) {
  return typeof e == "object" && e !== null;
}
function Li(e) {
  return typeof Event !== "undefined" && zo(e, Event);
}
function Xg(e) {
  return or(e, "RegExp");
}
function os(e) {
  return !!(e?.then && typeof e.then == "function");
}
function zo(e, t) {
  try {
    return e instanceof t;
  } catch {
    return false;
  }
}
function mp(e) {
  return typeof Request !== "undefined" && zo(e, Request);
}
function yt(e, t, n) {
  if (!(t in e)) {
    return;
  }
  const e_t = e[t];
  if (typeof e_t != "function") {
    return;
  }
  const r = n(e_t);

  if (typeof r == "function") {
    gp(r, e_t);
  }

  try {
    e[t] = r;
  } catch {
    if (oe) {
      K.log(`Failed to replace method "${t}" in object`, e);
    }
  }
}
function Dn(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: true, configurable: true });
  } catch {
    if (oe) {
      K.log(
        `Failed to add non-enumerable property "${String(t)}" to object`,
        e
      );
    }
  }
}
function gp(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = n;
    t.prototype = n;
    Dn(e, "__sentry_original__", t);
  } catch {}
}
function jc(e) {
  return e.__sentry_original__;
}
function _p(e) {
  if (ts(e)) {
    return { message: e.message, name: e.name, stack: e.stack, ...Ql(e) };
  }
  if (Li(e)) {
    const { type, target, currentTarget, detail } = e;
    return {
      type: type,
      target: target,
      currentTarget: currentTarget,
      ...(detail ? { detail: detail } : {}),
      ...Ql(e),
    };
  }
  return e;
}
function Ql(e) {
  return xi(e) ? Object.fromEntries(Object.entries(e)) : {};
}
function Qg(e) {
  const t = Object.keys(_p(e));
  t.sort();
  return t[0] ? t.join(", ") : "[object has no keys]";
}
let Co;
function Pi(e) {
  if (Co !== undefined) {
    return Co ? Co(e) : e();
  }
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const n = _e;
  return t in n && typeof n[t] == "function"
    ? ((Co = n[t]), Co(e))
    : ((Co = null), e());
}
function ai() {
  return Pi(() => Math.random());
}
function rr() {
  return Pi(() => Date.now());
}
const Zg = Symbol.for("sentry.skipNormalization");
const Jg = Symbol.for("sentry.overrideNormalizationDepth");
function e_(e) {
  return !!e[Zg];
}
function t_(e) {
  const e_Jg = e[Jg];
  return typeof e_Jg == "number" ? e_Jg : undefined;
}
let Ya;
function vp(e) {
  Ya = e;
}
function mn(e, t = 100, n = Infinity) {
  try {
    return Ka("", e, t, n);
  } catch (o) {
    return { ERROR: `**non-serializable** (${o})` };
  }
}
function yp(e, t = 3, n = 100 * 1024) {
  const o = mn(e, t);
  return r_(o) > n ? yp(e, t - 1, n) : o;
}
function Ka(e, t, n = Infinity, o = Infinity, r = s_()) {
  const [s, a] = r;
  if (t == null ||
  ["boolean", "string"].includes(typeof t) ||
  (typeof t == "number" && Number.isFinite(t))) {
    return t;
  }
  const c = wp(e, t);
  if (!c.startsWith("[object ")) {
    return c;
  }
  if (e_(t)) {
    return t;
  }
  const l = t_(t);
  const u = l !== undefined ? l : n;
  if (u === 0) {
    return c.replace("object ", "");
  }
  if (s(t)) {
    return "[Circular ~]";
  }
  const d = t;
  if (d && typeof d.toJSON == "function") {
    try {
      const g = d.toJSON();
      return Ka("", g, u - 1, o, r);
    } catch {}
  }
  const p = Array.isArray(t) ? [] : {};
  let f = 0;
  const h = _p(t);
  for (const g in h) {
    if (!Object.prototype.hasOwnProperty.call(h, g)) {
      continue;
    }
    if (f >= o) {
      p[g] = "[MaxProperties ~]";
      break;
    }
    const h_g = h[g];
    (p[g] = Ka(g, h_g, u - 1, o, r));
    f++;
  }
  a(t);
  return p;
}
function wp(e, t) {
  try {
    if (Ya) {
      const o = Ya(t);
      if (o) {
        return o;
      }
    }
    return typeof global !== "undefined" && t === global
      ? "[Global]"
      : typeof t == "number" && !Number.isFinite(t)
      ? `[${t}]`
      : typeof t == "function"
      ? `[Function: ${On(t)}]`
      : typeof t == "symbol"
      ? `[${String(t)}]`
      : typeof t == "bigint"
      ? `[BigInt: ${String(t)}]`
      : `[object ${n_(t)}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function n_(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function o_(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function r_(e) {
  return o_(JSON.stringify(e));
}
function s_() {
  const e = new WeakSet();
  function t(o) {
    return e.has(o) ? true : (e.add(o), false);
  }
  function n(o) {
    e.delete(o);
  }
  return [t, n];
}
function Xa(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function Zl(e, t) {
  if (!Array.isArray(e)) {
    return "";
  }
  const n = [];

  for (const r of e) {
    if (ns(r)) {
      n.push(String(r));
    } else if (r instanceof Error) {
      n.push(r.message ? `${r.name}: ${r.message}` : r.name);
    } else {
      n.push(wp(undefined, r));
    }
  }

  return n.join(t);
}
function Pr(e, t, n = false) {
  return vn(e)
    ? Xg(t)
      ? t.test(e)
      : vn(t)
      ? n
        ? e === t
        : e.includes(t)
      : typeof t == "function"
      ? t(e)
      : false
    : false;
}
function rs(e, t = [], n = false) {
  for (const o of t) {
    if (Pr(e, o, n)) {
      return true;
    }
  }
  return false;
}
function i_() {
  const e = _e;
  return e.crypto || e.msCrypto;
}
let ea;
function a_() {
  return ai() * 16;
}
function $t(e = i_()) {
  try {
    if (e?.randomUUID) {
      return Pi(() => e.randomUUID()).replace(/-/g, "");
    }
  } catch {}

  if (!ea) {
    (ea = `10000000100040008000${100000000000/* 1e11 */}`);
  }

  return ea.replace(/[018]/g, t => (t ^ ((a_() & 15) >> (t / 4))).toString(16));
}
function bp(e) {
  return e.exception?.values?.[0];
}
function so(e) {
  const { message, event_id } = e;
  if (message) {
    return message;
  }
  const o = bp(e);
  return o
    ? o.type && o.value
      ? `${o.type}: ${o.value}`
      : o.type || o.value || event_id || "<unknown>"
    : event_id || "<unknown>";
}
function Qa(e, t, n) {
  const o = (e.exception = e.exception || {});
  const r = (o.values = o.values || []);
  const s = (r[0] = r[0] || {});

  if (!s.value) {
    (s.value = t || "");
  }

  if (!s.type) {
    (s.type = "Error");
  }
}
function fo(e, t) {
  const n = bp(e);
  if (!n) {
    return;
  }
  const o = { type: "generic", handled: true };
  const n_mechanism = n.mechanism;
  (n.mechanism = { ...o, ...n_mechanism, ...t });

  if (t && "data" in t) {
    const s = { ...n_mechanism?.data, ...t.data };
    n.mechanism.data = s;
  }
}
function Jl(e) {
  if (c_(e)) {
    return true;
  }
  try {
    Dn(e, "__sentry_captured__", true);
  } catch {}
  return false;
}
function c_(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
const Ep = 1000/* 1e3 */;
function ss() {
  return rr() / Ep;
}
function l_() {
  const { performance } = _e;
  if (!performance?.now || !performance.timeOrigin) {
    return ss;
  }
  const e_timeOrigin = performance.timeOrigin;
  return () => (e_timeOrigin + Pi(() => performance.now())) / Ep;
}
let eu;
function yn() {
  return (eu ?? (eu = l_()))();
}
function u_(e) {
  const t = yn();

  const n = {
    sid: $t(),
    init: true,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => f_(n),
  };

  if (e) {
    qo(n, e);
  }

  return n;
}
function qo(e, t = {}) {
  if (t.user) {
    !e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address);

    !e.did &&
      !t.did &&
      (e.did = t.user.id || t.user.email || t.user.username);
  }

  (e.timestamp = t.timestamp || yn());

  if (t.abnormal_mechanism) {
    (e.abnormal_mechanism = t.abnormal_mechanism);
  }

  if (t.ignoreDuration) {
    (e.ignoreDuration = t.ignoreDuration);
  }

  if (t.sid) {
    (e.sid = t.sid.length === 32 ? t.sid : $t());
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
function d_(e, t) {
  let n = {};

  if (e.status === "ok") {
    (n = { status: "exited" });
  }

  qo(e, n);
}
function f_(e) {
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
function is(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0) {
    return t;
  }
  if (e && Object.keys(t).length === 0) {
    return e;
  }
  const o = { ...e };
  for (const r in t) {
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      (o[r] = is(o[r], t[r], n - 1));
    }
  }
  return o;
}
function tu() {
  return $t();
}
function Sp() {
  return $t().substring(16);
}
function p_(e) {
  try {
    const _e_WeakRef = _e.WeakRef;
    if (typeof _e_WeakRef == "function") {
      return new _e_WeakRef(e);
    }
  } catch {}
  return e;
}
function kp(e) {
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
const Za = "_sentrySpan";
function nu(e, t) {
  if (t) {
    Dn(e, Za, p_(t));
  } else {
    delete e[Za];
  }
}
function ou(e) {
  return kp(e[Za]);
}
const h_ = 100;
class sn {
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
    (this._propagationContext = { traceId: tu(), sampleRand: ai() });
  }
  clone() {
    const t = new sn();
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
    nu(t, ou(this));
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
      qo(this._session, { user: t });
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
    const o = n instanceof sn ? n.getScopeData() : Vr(n) ? t : undefined;

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
    } = o || {};

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
    nu(this, undefined);
    (this._attachments = []);
    this.setPropagationContext({ traceId: tu(), sampleRand: ai() });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(t, n) {
    const o = typeof n == "number" ? n : h_;
    if (o <= 0) {
      return this;
    }
    const r = {
      timestamp: ss(),
      ...t,
      message: t.message ? Xa(t.message, 2048) : t.message,
    };
    this._breadcrumbs.push(r);

    if (this._breadcrumbs.length > o) {
      (this._breadcrumbs = this._breadcrumbs.slice(-o));
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
      span: ou(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(t) {
    (this._sdkProcessingMetadata = is(this._sdkProcessingMetadata, t, 2));
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
    const o = n?.event_id || $t();
    if (!this._client) {
      if (oe) {
        K.warn("No client configured on scope - will not capture exception!");
      }

      return o;
    }
    const r = new Error("Sentry syntheticException");

    this._client.captureException(
      t,
      { originalException: t, syntheticException: r, ...n, event_id: o },
      this
    );

    return o;
  }
  captureMessage(t, n, o) {
    const r = o?.event_id || $t();
    if (!this._client) {
      if (oe) {
        K.warn("No client configured on scope - will not capture message!");
      }

      return r;
    }
    const s = o?.syntheticException ?? new Error(t);

    this._client.captureMessage(
      t,
      n,
      { originalException: t, syntheticException: s, ...o, event_id: r },
      this
    );

    return r;
  }
  captureEvent(t, n) {
    const o = t.event_id || n?.event_id || $t();
    return this._client
      ? (this._client.captureEvent(t, { ...n, event_id: o }, this), o)
      : (oe &&
          K.warn("No client configured on scope - will not capture event!"),
        o);
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
function m_() {
  return tr("defaultCurrentScope", () => new sn());
}
function g_() {
  return tr("defaultIsolationScope", () => new sn());
}

const ru = e => e instanceof Promise && !e[Np];

const Np = Symbol("chained PromiseLike");

const __ = (e, t, n) => {
  const o = e.then(
    r => {
      t(r);
      return r;
    },
    (r) => {
      n(r);
      throw r;
    }
  );
  return ru(o) && ru(e) ? o : v_(e, o);
};

const v_ = (e, t) => {
  if (!t) {
    return e;
  }
  let n = false;
  for (const o in e) {
    if (o in t) {
      continue;
    }
    n = true;
    const e_o = e[o];

    if (typeof e_o == "function") {
      Object.defineProperty(t, o, {
            value: (...s) => e_o.apply(e, s),
            enumerable: true,
            configurable: true,
            writable: true,
          });
    } else {
      (t[o] = e_o);
    }
  }

  if (n) {
    Object.assign(t, { [Np]: true });
  }

  return t;
};

class y_ {
  constructor(t, n) {
    let o;

    if (t) {
      (o = t);
    } else {
      (o = new sn());
    }

    let r;

    if (n) {
      (r = n);
    } else {
      (r = new sn());
    }

    (this._stack = [{ scope: o }]);
    (this._isolationScope = r);
  }
  withScope(t) {
    const n = this._pushScope();
    let o;
    try {
      o = t(n);
    } catch (r) {
      this._popScope();
      throw r;
    }
    return os(o)
      ? __(
          o,
          () => this._popScope(),
          () => this._popScope()
        )
      : (this._popScope(), o);
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
function Go() {
  const e = Ri();
  const t = Ai(e);
  return (t.stack = t.stack || new y_(m_(), g_()));
}
function w_(e) {
  return Go().withScope(e);
}
function b_(e, t) {
  const n = Go();
  return n.withScope(() => {
    (n.getStackTop().scope = e);
    return t(e);
  });
}
function su(e) {
  return Go().withScope(() => e(Go().getIsolationScope()));
}
function E_() {
  return {
    withIsolationScope: su,
    withScope: w_,
    withSetScope: b_,
    withSetIsolationScope: (e, t) => su(t),
    getCurrentScope: () => Go().getScope(),
    getIsolationScope: () => Go().getIsolationScope(),
  };
}
function zc(e) {
  const t = Ai(e);
  return t.acs ? t.acs : E_();
}
function S_(e) {
  return (
    typeof e == "object" &&
    e != null &&
    !Array.isArray(e) &&
    Object.keys(e).includes("value")
  );
}
function k_(e, t) {
  const { value, unit } = S_(e) ? e : { value: e, unit: undefined };
  const r = N_(value);
  const s = unit && typeof unit == "string" ? { unit: unit } : {};
  if (r) {
    return { ...r, ...s };
  }
  if (!t || (t === "skip-undefined" && value === undefined)) {
    return;
  }
  let a = "";
  try {
    a = JSON.stringify(value) ?? "";
  } catch {}
  return { value: a, type: "string", ...s };
}
function iu(e, t = false) {
  const n = {};
  for (const [o, r] of Object.entries(e ?? {})) {
    const s = k_(r, t);

    if (s) {
      (n[o] = s);
    }
  }
  return n;
}
function N_(e) {
  if (Array.isArray(e)) {
    return { value: e, type: "array" };
  }
  const t =
    typeof e == "string"
      ? "string"
      : typeof e == "boolean"
      ? "boolean"
      : typeof e == "number" && !Number.isNaN(e)
      ? Number.isInteger(e)
        ? "integer"
        : "double"
      : null;
  if (t) {
    return { value: e, type: t };
  }
}
function ln() {
  const e = Ri();
  return zc(e).getCurrentScope();
}
function un() {
  const e = Ri();
  return zc(e).getIsolationScope();
}
function C_() {
  return tr("globalScope", () => new sn());
}
function Cp(...e) {
  const t = Ri();
  const n = zc(t);
  if (e.length === 2) {
    const [o, r] = e;
    return o ? n.withSetScope(o, r) : n.withScope(r);
  }
  return n.withScope(e[0]);
}
function nt() {
  return ln().getClient();
}
function T_(e) {
  const { traceId, parentSpanId, propagationSpanId } = e.getPropagationContext();
  const s = { trace_id: traceId, span_id: propagationSpanId || Sp() };

  if (parentSpanId) {
    (s.parent_span_id = parentSpanId);
  }

  return s;
}
const I_ = "sentry.source";
const $_ = "sentry.sample_rate";
const R_ = "sentry.previous_trace_sample_rate";
const Tp = "sentry.op";
const A_ = "sentry.origin";
const Ip = "sentry.profile_id";
const $p = "sentry.exclusive_time";
const x_ = "gen_ai.conversation.id";
const L_ = 0;
const P_ = 1;
const M_ = "_sentryScope";
const O_ = "_sentryIsolationScope";
function Ja(e) {
  const t = e;
  return { scope: t[M_], isolationScope: kp(t[O_]) };
}
const au = "sentry-";
function D_(e) {
  const t = U_(e);
  if (!t) {
    return;
  }
  const n = Object.entries(t).reduce((o, [r, s]) => {
    if (r.startsWith(au)) {
      const a = r.slice(au.length);
      o[a] = s;
    }
    return o;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function U_(e) {
  if (!(!e || (!vn(e) && !Array.isArray(e)))) {
    return Array.isArray(e)
      ? e.reduce((t, n) => {
      const o = cu(n);

      Object.entries(o).forEach(([r, s]) => {
        t[r] = s;
      });

      return t;
    }, {})
      : cu(e);
  }
}
function cu(e) {
  return e
    .split(",")
    .map((t) => {
    const n = t.indexOf("=");
    if (n === -1) {
      return [];
    }
    const o = t.slice(0, n);
    const r = t.slice(n + 1);
    return [o, r].map((s) => {
      try {
        return decodeURIComponent(s.trim());
      } catch {
        return;
      }
    });
  })
    .reduce((t, [n, o]) => {
    if (n && o) {
      (t[n] = o);
    }

    return t;
  }, {});
}
const F_ = /^o(\d+)\./;

const B_ =
  /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function H_(e) {
  return e === "http" || e === "https";
}
function sr(e, t = false) {
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
function V_(e) {
  const t = B_.exec(e);
  if (!t) {
    nr(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [n, o, r = "", s = "", a = "", c = ""] = t.slice(1);
  let l = "";
  let u = c;
  const d = u.split("/");

  if (d.length > 1) {
    (l = d.slice(0, -1).join("/"));
    (u = d.pop());
  }

  if (u) {
    const p = u.match(/^\d+/);

    if (p) {
      (u = p[0]);
    }
  }

  return Rp({
    host: s,
    pass: r,
    path: l,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: o,
  });
}
function Rp(e) {
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
function W_(e) {
  if (!oe) {
    return true;
  }
  const { port, projectId, protocol } = e;
  return ["protocol", "publicKey", "host", "projectId"].find(a => e[a] ? false : (K.error(`Invalid Sentry Dsn: ${a} missing`), true)
  )
    ? false
    : projectId.match(/^\d+$/)
    ? H_(protocol)
      ? port && isNaN(parseInt(port, 10))
        ? (K.error(`Invalid Sentry Dsn: Invalid port ${port}`), false)
        : true
      : (K.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`), false)
    : (K.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`), false);
}
function j_(e) {
  return e.match(F_)?.[1];
}
function z_(e) {
  const t = e.getOptions();
  const { host } = e.getDsn() || {};
  let o;

  if (t.orgId) {
    (o = String(t.orgId));
  } else if (host) {
    (o = j_(host));
  }

  return o;
}
function Ap(e) {
  const t = typeof e == "string" ? V_(e) : Rp(e);
  if (!(!t || !W_(t))) {
    return t;
  }
}
function q_(e) {
  if (typeof e == "boolean") {
    return Number(e);
  }
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) {
    return t;
  }
}
const xp = 1;
function G_(e) {
  const { spanId, traceId, isRemote } = e.spanContext();
  const r = isRemote ? spanId : Mi(e).parent_span_id;
  const s = Ja(e).scope;
  const a = isRemote ? s?.getPropagationContext().propagationSpanId || Sp() : spanId;
  return { parent_span_id: r, span_id: a, trace_id: traceId };
}
function Y_(e) {
  if (e && e.length > 0) {
    return e.map(
      (
        {
          context: { spanId: t, traceId: n, traceFlags: o, ...r },
          attributes: s,
        }
      ) => ({
        span_id: t,
        trace_id: n,
        sampled: o === xp,
        attributes: s,
        ...r
      })
    );
  }
}
function uu(e) {
  if (typeof e == "number") {
    return du(e);
  }

  if (Array.isArray(e)) {
    return e[0] + e[1] / 1000000000/* 1e9 */;
  }

  if (e instanceof Date) {
    return du(e.getTime());
  }

  return yn();
}
function du(e) {
  return e > 9999999999 ? e / 1000/* 1e3 */ : e;
}
function Mi(e) {
  if (Z_(e)) {
    return e.getSpanJSON();
  }
  const { spanId, traceId } = e.spanContext();
  if (Q_(e)) {
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
      parent_span_id: K_(e),
      start_timestamp: uu(startTime),
      timestamp: uu(endTime) || undefined,
      status: ev(status),
      op: attributes[Tp],
      origin: attributes[A_],
      links: Y_(links),
    };
  }
  return { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
}
function K_(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
    ? e.parentSpanContext?.spanId
    : undefined;
}
function X_(e) {
  return {
    ...e,
    attributes: iu(e.attributes),
    links: e.links?.map(t => ({
      ...t,
      attributes: iu(t.attributes)
    })),
  };
}
function Q_(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function Z_(e) {
  return typeof e.getSpanJSON == "function";
}
function J_(e) {
  const { traceFlags } = e.spanContext();
  return traceFlags === xp;
}
function ev(e) {
  if (!(!e || e.code === L_)) {
    return e.code === P_ ? "ok" : e.message || "internal_error";
  }
}
const tv = "_sentryRootSpan";
const Lp = nv;
function nv(e) {
  return e[tv] || e;
}
function fu() {
  if (!lu) {
    nr(() => {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
        );
      });

    (lu = true);
  }
}
function pu(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const t = e || nt()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function hu(e) {
  K.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`
  );
}
function mu(e, t) {
  if (!t?.length) {
    return false;
  }
  for (const n of t) {
    if (sv(n)) {
      if (e.description && Pr(e.description, n)) {
        if (oe) {
          hu(e);
        }

        return true;
      }
      continue;
    }
    const o = !!n.attributes && Object.keys(n.attributes).length > 0;
    if (!n.name && !n.op && !o) {
      continue;
    }
    const r = n.name ? e.description && Pr(e.description, n.name) : true;
    const s = n.op ? e.op && Pr(e.op, n.op) : true;

    const a = n.attributes
      ? Object.entries(n.attributes).every(([c, l]) => ov(e.attributes?.[c], l)
        )
      : true;

    if (r && s && a) {
      if (oe) {
        hu(e);
      }

      return true;
    }
  }
  return false;
}
function ov(e, t) {
  return typeof e == "string" && (typeof t == "string" || t instanceof RegExp)
    ? Pr(e, t)
    : Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e === t;
}
function rv(e, t) {
  const {
    parent_span_id,
    span_id
  } = t;

  if (parent_span_id) {
    for (const r of e) {
      if (r.parent_span_id === span_id) {
        (r.parent_span_id = parent_span_id);
      }
    }
  }
}
function sv(e) {
  return typeof e == "string" || e instanceof RegExp;
}
const iv = Symbol.for("sentry.nonRecordingSpan");
function av(e) {
  return !!e && e[iv] === true;
}
const qc = "production";
const cv = "_frozenDsc";
function Pp(e, t) {
  const n = t.getOptions();
  const { publicKey } = t.getDsn() || {};

  const r = {
    environment: n.environment || qc,
    release: n.release,
    public_key: publicKey,
    trace_id: e,
    org_id: z_(t),
  };

  t.emit("createDsc", r);
  return r;
}
function Mp(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || Pp(n.traceId, e);
}
function lv(e) {
  const t = nt();
  if (!t) {
    return {};
  }
  const n = Lp(e);

  const {
    data,
    description
  } = Mi(n);

  const s = n.spanContext().traceState;
  const a = s?.get("sentry.sample_rate") ?? data[$_] ?? data[R_];
  function c(v) {
    if ((typeof a == "number" || typeof a == "string")) {
      (v.sample_rate = `${a}`);
    }

    return v;
  }
  const n_cv = n[cv];
  if (n_cv) {
    return c(n_cv);
  }
  const u = av(n);
  const d = u && n.dropReason === "ignored";
  if (u && (!pu(t.getOptions()) || d)) {
    const v = Ja(n).scope;
    if (v) {
      const _ = { ...Mp(t, v) };

      if (d) {
        (_.sampled = "false");
      }

      return c(_);
    }
  }
  const p = s?.get("sentry.dsc");
  const f = p && D_(p);
  if (f) {
    return c(f);
  }
  const h = Pp(e.spanContext().traceId, t);
  const g = data[I_] ?? data["sentry.segment.name.source"];

  if (g !== "url" && description) {
    (h.transaction = description);
  }

  if (pu()) {
    (h.sampled = String(J_(n)));

    (h.sample_rand = s?.get("sentry.sample_rand") ??
    Ja(n).scope?.getPropagationContext().sampleRand.toString());
  }

  c(h);
  t.emit("createDsc", h, n);
  return h;
}
function uv(e) {
  return !!e && typeof e == "function" && "_streamed" in e && !!e._streamed;
}
function ir(e, t = []) {
  return [e, t];
}
function gu(e, t) {
  const [n, o] = e;
  return [n, [...o, t]];
}
function ec(e, t) {
  const [, n] = e;
  for (const o of n) {
    const r = o[0].type;
    if (t(o, r)) {
      return true;
    }
  }
  return false;
}
function dv(e, t) {
  return ec(e, (n, o) => t.includes(o));
}
function tc(e) {
  const t = Ai(_e);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function fv(e) {
  const [t, n] = e;
  let o = JSON.stringify(t);
  function r(s) {
    if (typeof o == "string") {
      (o = typeof s == "string" ? o + s : [tc(o), s]);
    } else {
      o.push(typeof s == "string" ? tc(s) : s);
    }
  }
  for (const s of n) {
    const [a, c] = s;

    r(`
${JSON.stringify(a)}
`);

    if (typeof c == "string" || c instanceof Uint8Array) {
      r(c);
    } else {
      let l;
      try {
        l = JSON.stringify(c);
      } catch {
        l = JSON.stringify(mn(c));
      }
      r(l);
    }
  }
  return typeof o == "string" ? o : pv(o);
}
function pv(e) {
  const t = e.reduce((r, s) => r + s.length, 0);

  const n = new Uint8Array(t);
  let o = 0;
  for (const r of e) {
    n.set(r, o);
    (o += r.length);
  }
  return n;
}
function hv(e) {
  const t = typeof e.data == "string" ? tc(e.data) : e.data;
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
const Op = {
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
function mv(e) {
  return e in Op;
}
function _u(e) {
  return mv(e) ? Op[e] : e;
}
function Dp(e) {
  if (!e?.sdk) {
    return;
  }
  const { name, version } = e.sdk;
  return { name: name, version: version };
}
function gv(e, t, n, o) {
  const r = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date(rr()).toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && o && { dsn: sr(o) }),
    ...(r && { trace: r }),
  };
}
function _v(e, t) {
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
function vv(e, t, n, o) {
  const r = Dp(n);

  const s = {
    sent_at: new Date(rr()).toISOString(),
    ...(r && { sdk: r }),
    ...(!!o && t && { dsn: sr(t) }),
  };

  const a =
    "aggregates" in e
      ? [{ type: "sessions" }, e]
      : [{ type: "session" }, e.toJSON()];

  return ir(s, [a]);
}
function yv(e, t, n, o) {
  const r = Dp(n);
  const s = e.type && e.type !== "replay_event" ? e.type : "event";
  _v(e, n?.sdk);
  const a = gv(e, r, o, t);
  delete e.sdkProcessingMetadata;
  return ir(a, [[{ type: s }, e]]);
}
function wv(e) {
  return e.getOptions().traceLifecycle === "stream";
}
function bv(e, t) {
  const {
    fingerprint,
    span,
    breadcrumbs,
    sdkProcessingMetadata,
  } = t;
  Ev(e, t);

  if (span) {
    Nv(e, span);
  }

  Cv(e, fingerprint);
  Sv(e, breadcrumbs);
  kv(e, sdkProcessingMetadata);
}
function vu(e, t) {
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
  mr(e, "extra", extra);
  mr(e, "tags", tags);
  mr(e, "attributes", attributes);
  mr(e, "user", user);
  mr(e, "contexts", contexts);
  (e.sdkProcessingMetadata = is(e.sdkProcessingMetadata, sdkProcessingMetadata, 2));

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
function mr(e, t, n) {
  e[t] = is(e[t], n, 1);
}
function Up(e, t) {
  const n = C_().getScopeData();

  if (e) {
    vu(n, e.getScopeData());
  }

  if (t) {
    vu(n, t.getScopeData());
  }

  return n;
}
function Ev(e, t) {
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
function Sv(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : undefined;
}
function kv(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function Nv(e, t) {
  (e.contexts = { trace: G_(t), ...e.contexts });

  (e.sdkProcessingMetadata = {
      dynamicSamplingContext: lv(t),
      ...e.sdkProcessingMetadata,
    });

  const n = Lp(t);
  const o = Mi(n).description;

  if (o && !e.transaction && e.type === "transaction") {
    (e.transaction = o);
  }
}
function Cv(e, t) {
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
const Tv = "url.full";
function Fp(e, t) {
  const n = e.attributes ?? (e.attributes = {});
  Object.entries(t).forEach(([o, r]) => {
    if (r != null && !(o in n)) {
      (n[o] = r);
    }
  });
}
const ta = 0;
const yu = 1;
const wu = 2;
function as(e) {
  return new Wr((t) => {
    t(e);
  });
}
function Gc(e) {
  return new Wr((t, n) => {
    n(e);
  });
}
class Wr {
  constructor(t) {
    (this._state = ta);
    (this._handlers = []);
    this._runExecutor(t);
  }
  then(t, n) {
    return new Wr((o, r) => {
      this._handlers.push([
        false,
        (s) => {
          if (!t) {
            o(s);
          } else {
            try {
              o(t(s));
            } catch (a) {
              r(a);
            }
          }
        },
        (s) => {
          if (!n) {
            r(s);
          } else {
            try {
              o(n(s));
            } catch (a) {
              r(a);
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
    return new Wr((n, o) => {
      let r;
      let s;
      return this.then(
        (a) => {
          (s = false);
          (r = a);

          if (t) {
            t();
          }
        },
        (a) => {
          (s = true);
          (r = a);

          if (t) {
            t();
          }
        }
      ).then(() => {
        if (s) {
          o(r);
          return;
        }
        n(r);
      });
    });
  }
  _executeHandlers() {
    if (this._state === ta) {
      return;
    }
    const t = this._handlers.slice();
    (this._handlers = []);

    t.forEach((n) => {
      if (!n[0]) {
        this._state === yu && n[1](this._value);
        this._state === wu && n[2](this._value);
        (n[0] = true);
      }
    });
  }
  _runExecutor(t) {
    const n = (s, a) => {
        if (this._state === ta) {
          if (os(a)) {
            a.then(o, r);
            return;
          }
          (this._state = s);
          (this._value = a);
          this._executeHandlers();
        }
      };

    const o = (s) => {
      n(yu, s);
    };

    const r = (s) => {
      n(wu, s);
    };

    try {
      t(o, r);
    } catch (s) {
      r(s);
    }
  }
}
function Iv(e, t, n, o = 0) {
  try {
    const r = nc(t, n, e, o);
    return os(r) ? r : as(r);
  } catch (r) {
    return Gc(r);
  }
}
function nc(e, t, n, o) {
  const n_o = n[o];
  if (!e || !n_o) {
    return e;
  }
  const s = n_o({ ...e }, t);

  if (oe && s === null) {
    K.log(`Event processor "${n_o.id || "?"}" dropped event`);
  }

  return os(s) ? s.then(a => nc(a, t, n, o + 1)) : nc(s, t, n, o + 1);
}
let Wn;
let bu;
let Eu;
let Sn;
function $v(e) {
  const {
    _sentryDebugIds,
    _debugIds
  } = _e;

  if (!_sentryDebugIds && !_debugIds) {
    return {};
  }
  const o = _sentryDebugIds ? Object.keys(_sentryDebugIds) : [];
  const r = _debugIds ? Object.keys(_debugIds) : [];
  if (Sn && o.length === bu && r.length === Eu) {
    return Sn;
  }
  (bu = o.length);
  (Eu = r.length);
  (Sn = {});

  if (!Wn) {
    (Wn = {});
  }

  const s = (a, c) => {
    for (const l of a) {
      const c_l = c[l];
      const d = Wn?.[l];
      if (d && Sn && c_l) {
        (Sn[d[0]] = c_l);

        if (Wn) {
          (Wn[l] = [d[0], c_l]);
        }
      } else if (c_l) {
        const p = e(l);
        for (let f = p.length - 1; f >= 0; f--) {
          const g = p[f]?.filename;
          if (g && Sn && Wn) {
            (Sn[g] = c_l);
            (Wn[l] = [g, c_l]);
            break;
          }
        }
      }
    }
  };

  if (_sentryDebugIds) {
    s(o, _sentryDebugIds);
  }

  if (_debugIds) {
    s(r, _debugIds);
  }

  return Sn;
}
function Rv(e, t, n, o, r, s) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000/* 1e3 */ } = e;

  const l = {
    ...t,
    event_id: t.event_id || n.event_id || $t(),
    timestamp: t.timestamp || ss(),
  };

  const u = n.integrations || e.integrations.map(_ => _.name);

  Av(l, e);
  Pv(l, u);

  if (r) {
    r.emit("applyFrameMetadata", t);
  }

  if (t.type === undefined) {
    xv(l, e.stackParser);
  }

  const d = Ov(o, n.captureContext);

  if (n.mechanism) {
    fo(l, n.mechanism);
  }

  const p = r ? r.getEventProcessors() : [];
  const f = Up(s, d);
  const h = [...(n.attachments || []), ...f.attachments];

  if (h.length) {
    (n.attachments = h);
  }

  bv(l, f);
  const g = [...p, ...f.eventProcessors];
  return (n.data && n.data.__sentry__ === true ? as(l) : Iv(g, l, n)).then(
    _ => {
      if (_) {
        Lv(_);
      }

      return typeof normalizeDepth == "number" && normalizeDepth > 0 ? Mv(_, normalizeDepth, normalizeMaxBreadth) : _;
    }
  );
}
function Av(e, t) {
  const { environment, release, dist, maxValueLength } = t;
  (e.environment = e.environment || environment || qc);

  if (!e.release && release) {
    (e.release = release);
  }

  if (!e.dist && dist) {
    (e.dist = dist);
  }

  const e_request = e.request;

  if (e_request?.url && maxValueLength) {
    (e_request.url = Xa(e_request.url, maxValueLength));
  }

  if (maxValueLength) {
    e.exception?.values?.forEach((c) => {
      if (c.value) {
        (c.value = Xa(c.value, maxValueLength));
      }
    });
  }
}
function xv(e, t) {
  const n = $v(t);
  e.exception?.values?.forEach((o) => {
    o.stacktrace?.frames?.forEach((r) => {
      if (r.filename) {
        (r.debug_id = n[r.filename]);
      }
    });
  });
}
function Lv(e) {
  const t = {};

  e.exception?.values?.forEach((o) => {
      o.stacktrace?.frames?.forEach((r) => {
        if (r.debug_id) {
          r.abs_path
              ? (t[r.abs_path] = r.debug_id)
              : r.filename && (t[r.filename] = r.debug_id);

          delete r.debug_id;
        }
      });
    });

  if (Object.keys(t).length === 0) {
    return;
  }

  (e.debug_meta = e.debug_meta || {});
  (e.debug_meta.images = e.debug_meta.images || []);
  const n = e.debug_meta.images;
  Object.entries(t).forEach(([o, r]) => {
    n.push({ type: "sourcemap", code_file: o, debug_id: r });
  });
}
function Pv(e, t) {
  if (t.length > 0) {
    (e.sdk = e.sdk || {});
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]);
  }
}
function Mv(e, t, n) {
  if (!e) {
    return null;
  }
  const o = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(r => ({
        ...r,
        ...(r.data && { data: mn(r.data, t, n) })
      })),
    }),
    ...(e.user && { user: mn(e.user, t, n) }),
    ...(e.contexts && { contexts: mn(e.contexts, t, n) }),
    ...(e.extra && { extra: mn(e.extra, t, n) }),
  };

  if (e.contexts?.trace &&
    o.contexts) {
    (o.contexts.trace = e.contexts.trace);

    e.contexts.trace.data &&
      (o.contexts.trace.data = mn(e.contexts.trace.data, t, n));
  }

  if (e.spans) {
    (o.spans = e.spans.map(r => ({
      ...r,
      ...(r.data && { data: mn(r.data, t, n) })
    })));
  }

  if (e.contexts?.flags &&
    o.contexts) {
    (o.contexts.flags = mn(e.contexts.flags, 3, n));
  }

  return o;
}
function Ov(e, t) {
  if (!t) {
    return e;
  }
  const n = e ? e.clone() : new sn();
  n.update(t);
  return n;
}
function Dv(e) {
  if (e) {
    return Uv(e) ? { captureContext: e } : Bv(e) ? { captureContext: e } : e;
  }
}
function Uv(e) {
  return e instanceof sn || typeof e == "function";
}
const Fv = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function Bv(e) {
  return Object.keys(e).some(t => Fv.includes(t));
}
function Bp(e, t) {
  return ln().captureException(e, Dv(t));
}
function Hp(e, t) {
  return ln().captureEvent(e, t);
}
function Hv(e, t) {
  un().setContext(e, t);
}
function Su(e) {
  un().setUser(e);
}
function Vv() {
  return un().lastEventId();
}
function ku(e) {
  const t = un();
  const { user } = Up(t, ln());
  const { userAgent } = _e.navigator || {};
  const r = u_({ user: user, ...(userAgent && { userAgent: userAgent }), ...e });
  const s = t.getSession();

  if (s?.status === "ok") {
    qo(s, { status: "exited" });
  }

  Vp();
  t.setSession(r);
  return r;
}
function Vp() {
  const e = un();
  const n = ln().getSession() || e.getSession();

  if (n) {
    d_(n);
  }

  Wp();
  e.setSession();
}
function Wp() {
  const e = un();
  const t = nt();
  const n = e.getSession();

  if (n && t) {
    t.captureSession(n);
  }
}
function na(e = false) {
  if (e) {
    Vp();
    return;
  }
  Wp();
}
function jp(e) {
  if (typeof e == "object" && typeof e.unref == "function") {
    e.unref();
  }

  return e;
}
const Wv = "7";
function zp(e) {
  const t = e.protocol ? `${e.protocol}:` : "";
  const n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function jv(e) {
  return `${zp(e)}${e.projectId}/envelope/`;
}
function zv(e, t) {
  const n = { sentry_version: Wv };

  if (e.publicKey) {
    (n.sentry_key = e.publicKey);
  }

  if (t) {
    (n.sentry_client = `${t.name}/${t.version}`);
  }

  return new URLSearchParams(n).toString();
}
function qv(e, t, n) {
  return t || `${jv(e)}?${zv(e, n)}`;
}
function Gv(e, t) {
  const n = Ap(e);
  if (!n) {
    return "";
  }
  const o = `${zp(n)}embed/error-page/`;
  let r = `dsn=${sr(n)}`;
  for (const s in t) {
    if (s !== "dsn" && s !== "onClose") {
      if (s === "user") {
        const t_user = t.user;
        if (!t_user) {
          continue;
        }

        if (t_user.name) {
          (r += `&name=${encodeURIComponent(t_user.name)}`);
        }

        if (t_user.email) {
          (r += `&email=${encodeURIComponent(t_user.email)}`);
        }
      } else {
        r += `&${encodeURIComponent(s)}=${encodeURIComponent(t[s])}`;
      }
    }
  }
  return `${o}?${r}`;
}
const Nu = [];
function Yv(e) {
  const t = {};

  e.forEach((n) => {
    const { name } = n;
    const t_o = t[o];

    if (!t_o || t_o.isDefaultInstance || !n.isDefaultInstance) {
      (t[o] = n);
    }
  });

  return Object.values(t);
}
function Kv(e) {
  const t = e.defaultIntegrations || [];
  const e_integrations = e.integrations;
  t.forEach((r) => {
    r.isDefaultInstance = true;
  });
  let o;
  if (Array.isArray(e_integrations)) {
    o = [...t, ...e_integrations];
  } else if (typeof e_integrations == "function") {
    const r = e_integrations(t);
    o = Array.isArray(r) ? r : [r];
  } else {
    o = t;
  }
  return Yv(o);
}
function Xv(e, t) {
  const n = {};

  t.forEach((o) => {
    if (o?.beforeSetup) {
      o.beforeSetup(e);
    }
  });

  t.forEach((o) => {
    if (o) {
      qp(e, o, n);
    }
  });

  return n;
}
function Cu(e, t) {
  for (const n of t) {
    if (n?.afterAllSetup) {
      n.afterAllSetup(e);
    }
  }
}
function qp(e, t, n) {
  if (n[t.name]) {
    if (oe) {
      K.log(`Integration skipped because it was already installed: ${t.name}`);
    }

    return;
  }
  (n[t.name] = t);

  if (!Nu.includes(t.name) &&
    typeof t.setupOnce == "function") {
    t.setupOnce();
    Nu.push(t.name);
  }

  if (t.setup && typeof t.setup == "function") {
    t.setup(e);
  }

  if (typeof t.preprocessEvent == "function") {
    const o = t.preprocessEvent.bind(t);
    e.on("preprocessEvent", (r, s) => o(r, s, e));
  }

  if (typeof t.processEvent == "function") {
    const o = t.processEvent.bind(t);

    const r = Object.assign((s, a) => o(s, a, e), { id: t.name });

    e.addEventProcessor(r);
  }

  ["processSpan", "processSegmentSpan"].forEach((o) => {
    const t_o = t[o];

    if (typeof t_o == "function") {
      e.on(o, s => t_o.call(t, s, e));
    }
  });

  if (oe) {
    K.log(`Integration installed: ${t.name}`);
  }
}
function Qv() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function Zv() {
  return "npm";
}
function Jv() {
  return (!Qv() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) ===
    "[object process]");
}
function Yc() {
  return typeof window !== "undefined" && (!Jv() || e0());
}
function e0() {
  return _e.process?.type === "renderer";
}
function t0(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...(Yc() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function n0(e, t, n, o, r) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && o) {
    (s.dsn = sr(o));
  }

  return ir(s, [t0(e, r)]);
}
function o0(e, t) {
  const n = t ?? r0(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const o = e.getOptions();

  const r = n0(
    n,
    o._metadata,
    o.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  Gp().set(e, []);
  e.emit("flushLogs");
  e.sendEnvelope(r);
}
function r0(e) {
  return Gp().get(e);
}
function Gp() {
  return tr("clientToLogBufferMap", () => new WeakMap());
}
function s0(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    {
      version: 2,
      ...(Yc() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function i0(e, t, n, o, r) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && o) {
    (s.dsn = sr(o));
  }

  return ir(s, [s0(e, r)]);
}
function a0(e, t) {
  const n = t ?? c0(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const o = e.getOptions();

  const r = i0(
    n,
    o._metadata,
    o.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  Yp().set(e, []);
  e.emit("flushMetrics");
  e.sendEnvelope(r);
}
function c0(e) {
  return Yp().get(e);
}
function Yp() {
  return tr("clientToMetricBufferMap", () => new WeakMap());
}
function l0(e) {
  const t = {
    trace_id: e.trace_id,
    span_id: e.span_id,
    parent_span_id: e.parent_span_id,
    name: e.description || "",
    start_timestamp: e.start_timestamp,
    end_timestamp: e.timestamp || e.start_timestamp,
    status:
      !e.status || e.status === "ok" || e.status === "cancelled"
        ? "ok"
        : "error",
    is_segment: false,
    attributes: { ...e.data },
    links: e.links,
  };
  return X_(t);
}
function u0(e, t) {
  if (e.type !== "transaction" ||
  !e.spans?.length ||
  !e.sdkProcessingMetadata?.hasGenAiSpans ||
  t.getOptions().streamGenAiSpans === false ||
  wv(t)) {
    return;
  }
  const n = [];
  const o = [];
  for (const s of e.spans) {
    if (s.op?.startsWith("gen_ai.")) {
      n.push(l0(s));
    } else {
      o.push(s);
    }
  }
  if (n.length === 0) {
    return;
  }
  e.spans = o;
  const r = t.getDataCollectionOptions().userInfo ? "auto" : "never";
  return [
    {
      type: "span",
      item_count: n.length,
      content_type: "application/vnd.sentry.items.span.v2+json",
    },
    {
      version: 2,
      ...(Yc() && { ingest_settings: { infer_ip: r, infer_user_agent: r } }),
      items: n,
    },
  ];
}
const Kc = Symbol.for("SentryBufferFullError");
function Xc(e = 100) {
  const t = new Set();
  function n() {
    return t.size < e;
  }
  function o(a) {
    t.delete(a);
  }
  function r(a) {
    if (!n()) {
      return Gc(Kc);
    }
    const c = a();
    t.add(c);

    c.then(
      () => o(c),
      () => o(c)
    );

    return c;
  }
  function s(a) {
    if (!t.size) {
      return as(true);
    }
    const c = Promise.allSettled(Array.from(t)).then(() => true);
    if (!a) {
      return c;
    }
    const l = [c, new Promise(u => jp(setTimeout(() => u(false), a)))];
    return Promise.race(l);
  }
  return {
    get $() {
      return Array.from(t);
    },
    add: r,
    drain: s,
  };
}
const d0 = 60 * 1000/* 1e3 */;
function f0(e, t = rr()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) {
    return n * 1000/* 1e3 */;
  }
  const o = Date.parse(`${e}`);
  return isNaN(o) ? d0 : o - t;
}
function p0(e, t) {
  return e[t] || e.all || 0;
}
function h0(e, t, n = rr()) {
  return p0(e, t) > n;
}
function m0(e, { statusCode: t, headers: n }, o = rr()) {
  const r = { ...e };
  const s = n?.["x-sentry-rate-limits"];
  const a = n?.["retry-after"];
  if (s) {
    for (const c of s.trim().split(",")) {
      const [l, u, , , d] = c.split(":", 5);
      const p = parseInt(l, 10);
      const f = (isNaN(p) ? 60 : p) * 1000/* 1e3 */;
      if (!u) {
        r.all = o + f;
      } else {
        for (const h of u.split(";")) {
          if (h === "metric_bucket") {
            if ((!d || d.split(";").includes("custom"))) {
              (r[h] = o + f);
            }
          } else {
            (r[h] = o + f);
          }
        }
      }
    }
  } else {
    if (a) {
      (r.all = o + f0(a, o));
    } else if (t === 429) {
      (r.all = o + 60 * 1000/* 1e3 */);
    }
  }
  return r;
}
const Kp = 64;
function g0(e, t, n = Xc(e.bufferSize || Kp)) {
  let o = {};
  const r = a => n.drain(a);
  function s(a) {
    const c = [];

    ec(a, (p, f) => {
      const h = _u(f);

      if (h0(o, h)) {
        e.recordDroppedEvent("ratelimit_backoff", h);
      } else {
        c.push(p);
      }
    });

    if (c.length === 0) {
      return Promise.resolve({});
    }

    const l = ir(a[0], c);

    const u = (p) => {
      if (dv(l, ["client_report"])) {
        if (oe) {
          K.warn(
            `Dropping client report. Will not send outcomes (reason: ${p}).`
          );
        }

        return;
      }
      ec(l, (f, h) => {
        e.recordDroppedEvent(p, _u(h));
      });
    };

    const d = () => t({ body: fv(l) }).then(
      p => p.statusCode === 413
        ? (oe &&
            K.error(
              "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
            ),
          u("send_error"),
          p)
        : (oe &&
            p.statusCode !== undefined &&
            (p.statusCode < 200 || p.statusCode >= 300) &&
            K.warn(
              `Sentry responded with status code ${p.statusCode} to sent event.`
            ),
          (o = m0(o, p)),
          p),
      (p) => {
        u("network_error");

        if (oe) {
          K.error("Encountered error running transport request:", p);
        }

        throw p;
      }
    );

    return n.add(d).then(
      p => p,
      (p) => {
        if (p === Kc) {
          if (oe) {
            K.error("Skipped sending event because buffer is full.");
          }

          u("queue_overflow");
          return Promise.resolve({});
        }
        throw p;
      }
    );
  }
  return { send: s, flush: r };
}
function _0(e, t, n) {
  const o = [
    { type: "client_report" },
    { timestamp: ss(), discarded_events: e },
  ];
  return ir(t ? { dsn: t } : {}, [o]);
}
function Xp(e) {
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
function v0(e) {
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
    profile_id: data?.[Ip],
    exclusive_time: data?.[$p],
    measurements: e.measurements,
    is_segment: true,
  };
}
function y0(e) {
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
          ...(e.profile_id && { [Ip]: e.profile_id }),
          ...(e.exclusive_time && { [$p]: e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
const bs = ["forwarded", "-ip", "remote-", "via", "-user"];
function w0(e) {
  return e === true
    ? {
        userInfo: true,
        cookies: true,
        httpHeaders: { request: true, response: true },
        httpBodies: [
          "incomingRequest",
          "outgoingRequest",
          "incomingResponse",
          "outgoingResponse",
        ],
        urlQueryParams: true,
        graphQL: { document: true, variables: true },
        genAI: { inputs: true, outputs: true },
        databaseQueryData: true,
        stackFrameVariables: true,
        frameContextLines: 7,
      }
    : {
        userInfo: false,
        cookies: { deny: bs },
        httpHeaders: { request: { deny: bs }, response: { deny: bs } },
        httpBodies: [],
        urlQueryParams: { deny: bs },
        graphQL: { document: true, variables: true },
        genAI: { inputs: false, outputs: false },
        databaseQueryData: false,
        stackFrameVariables: true,
        frameContextLines: 7,
      };
}
const b0 = {
  userInfo: true,
  cookies: true,
  httpHeaders: { request: true, response: true },
  httpBodies: [
    "incomingRequest",
    "outgoingRequest",
    "incomingResponse",
    "outgoingResponse",
  ],
  urlQueryParams: true,
  graphQL: { document: true, variables: true },
  genAI: { inputs: true, outputs: true },
  databaseQueryData: true,
  stackFrameVariables: true,
  frameContextLines: 5,
};
function E0(e) {
  const t = e.dataCollection != null ? b0 : w0(e.sendDefaultPii);
  const n = e.dataCollection ?? {};
  return {
    userInfo: n.userInfo ?? t.userInfo,
    cookies: n.cookies ?? t.cookies,
    httpHeaders: {
      request: n.httpHeaders?.request ?? t.httpHeaders.request,
      response: n.httpHeaders?.response ?? t.httpHeaders.response,
    },
    httpBodies: n.httpBodies ?? t.httpBodies,
    urlQueryParams: n.urlQueryParams ?? n.queryParams ?? t.urlQueryParams,
    graphQL: {
      document: n.graphQL?.document ?? t.graphQL.document,
      variables: n.graphQL?.variables ?? t.graphQL.variables,
    },
    genAI: {
      inputs: n.genAI?.inputs ?? t.genAI.inputs,
      outputs: n.genAI?.outputs ?? t.genAI.outputs,
    },
    databaseQueryData: n.databaseQueryData ?? t.databaseQueryData,
    stackFrameVariables: n.stackFrameVariables ?? t.stackFrameVariables,
    frameContextLines: n.frameContextLines ?? t.frameContextLines,
  };
}
const Tu = "Not capturing exception because it's already been captured.";
const Iu = "Discarded session because of missing or non-string release";
const Qp = Symbol.for("SentryInternalError");
const Zp = Symbol.for("SentryDoNotSendEventError");
const S0 = 5000/* 5e3 */;
function Ws(e) {
  return { message: e, [Qp]: true };
}
function oa(e) {
  return { message: e, [Zp]: true };
}
function $u(e) {
  return xi(e) && Qp in e;
}
function Ru(e) {
  return xi(e) && Zp in e;
}
function Au(e, t, n, o, r) {
  let s = 0;
  let a;
  let c = false;

  e.on(n, () => {
    (s = 0);
    clearTimeout(a);
    (c = false);
  });

  e.on(t, (l) => {
    (s += o(l));

    if (s >= 800000/* 8e5 */) {
      r(e);
    } else if (!c) {
      const u = e.getOptions()._flushInterval ?? S0;

      if (u > 0) {
        (c = true);

        (a = jp(
            setTimeout(() => {
              r(e);
            }, u)
          ));
      }
    }
  });

  e.on("flush", () => {
    r(e);
  });
}
class k0 {
  constructor(t) {
    (this._options = t);
    (this._integrations = {});
    (this._numProcessing = 0);
    (this._outcomes = {});
    (this._hooks = {});
    (this._eventProcessors = []);
    (this._promiseBuffer = Xc(t.transportOptions?.bufferSize ?? Kp));
    (this._dataCollection = E0(t));

    if (t.dsn) {
      (this._dsn = Ap(t.dsn));
    } else if (oe) {
      K.warn("No DSN provided, client will not send events.");
    }

    if (this._dsn) {
      const o = qv(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : undefined);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: o,
      });
    }

    (this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs);

    if (this._options.enableLogs) {
      Au(this, "afterCaptureLog", "flushLogs", I0, o0);
    }

    if ((this._options.enableMetrics ??
      this._options._experiments?.enableMetrics ?? true)) {
      Au(this, "afterCaptureMetric", "flushMetrics", T0, a0);
    }
  }
  captureException(t, n, o) {
    const r = $t();
    if (Jl(t)) {
      if (oe) {
        K.log(Tu);
      }

      return r;
    }
    const s = { event_id: r, ...n };

    this._process(
      () => this.eventFromException(t, s)
        .then(a => this._captureEvent(a, s, o))
        .then(a => a),
      "error"
    );

    return s.event_id;
  }
  captureMessage(t, n, o, r) {
    const s = { event_id: $t(), ...o };
    const a = Wc(t) ? t : String(t);
    const c = ns(t);
    const l = c ? this.eventFromMessage(a, n, s) : this.eventFromException(t, s);

    this._process(
      () => l.then(u => this._captureEvent(u, s, r)),
      c ? "unknown" : "error"
    );

    return s.event_id;
  }
  captureEvent(t, n, o) {
    const r = $t();
    if (n?.originalException && Jl(n.originalException)) {
      if (oe) {
        K.log(Tu);
      }

      return r;
    }
    const s = { event_id: r, ...n };

    const {
      capturedSpanScope,
      capturedSpanIsolationScope
    } = t.sdkProcessingMetadata || {};

    const u = xu(t.type);

    this._process(() => this._captureEvent(t, s, capturedSpanScope || o, capturedSpanIsolationScope), u);

    return s.event_id;
  }
  captureSession(t) {
    this.sendSession(t);
    qo(t, { init: false });
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getDataCollectionOptions() {
    return this._dataCollection;
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

    const o = await this._isClientDoneProcessing(t);
    const r = await n.flush(t);
    return o && r;
  }
  async close(t) {
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
  getIntegrationNames() {
    return Object.keys(this._integrations);
  }
  addIntegration(t) {
    const n = this._integrations[t.name];

    if (!n && t.beforeSetup) {
      t.beforeSetup(this);
    }

    qp(this, t, this._integrations);

    if (!n) {
      Cu(this, [t]);
    }
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    const o = u0(t, this);
    let r = yv(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) {
      r = gu(r, hv(s));
    }

    if (o) {
      (r = gu(r, o));
    }

    this.sendEnvelope(r).then(s => this.emit("afterSendEvent", t, s));
  }
  sendSession(t) {
    const { release, environment = qc } = this._options;
    if ("aggregates" in t) {
      const s = t.attrs || {};
      if (!s.release && !release) {
        if (oe) {
          K.warn(Iu);
        }

        return;
      }
      (s.release = s.release || release);
      (s.environment = s.environment || environment);
      (t.attrs = s);
    } else {
      if (!t.release && !release) {
        if (oe) {
          K.warn(Iu);
        }

        return;
      }
      (t.release = t.release || release);
      (t.environment = t.environment || environment);
    }
    this.emit("beforeSendSession", t);
    const r = vv(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(r);
  }
  recordDroppedEvent(t, n, o = 1) {
    if (this._options.sendClientReports) {
      const r = `${t}:${n}`;

      if (oe) {
        K.log(`Recording outcome: "${r}"${o > 1 ? ` (${o} times)` : ""}`);
      }

      (this._outcomes[r] = (this._outcomes[r] || 0) + o);
    }
  }
  on(t, n) {
    const o = (this._hooks[t] = this._hooks[t] || new Set());

    const r = (...s) => n(...s);

    o.add(r);

    return () => {
      o.delete(r);
    };
  }
  emit(t, ...n) {
    const o = this._hooks[t];

    if (o) {
      o.forEach(r => r(...n));
    }
  }
  async sendEnvelope(t) {
    this.emit("beforeEnvelope", t);

    if (this._isEnabled() && this._transport) {
      try {
        return await this._transport.send(t);
      } catch (n) {
        if (oe) {
          K.error("Error while sending envelope:", n);
        }

        return {};
      }
    }

    if (oe) {
      K.error("Transport disabled");
    }

    return {};
  }
  registerCleanup(t) {}
  dispose() {}
  _setupIntegrations() {
    const { integrations } = this._options;
    (this._integrations = Xv(this, integrations));
    Cu(this, integrations);
  }
  _updateSessionFromEvent(t, n) {
    let o = n.level === "fatal";
    let r = false;
    const s = n.exception?.values;
    if (s) {
      (r = true);
      (o = false);
      for (const l of s) {
        if (l.mechanism?.handled === false) {
          o = true;
          break;
        }
      }
    }
    const a = t.status === "ok";

    if (((a && t.errors === 0) || (a && o))) {
      qo(t, {
          ...(o && { status: "crashed" }),
          errors: t.errors || Number(r || o),
        });

      this.captureSession(t);
    }
  }
  async _isClientDoneProcessing(t) {
    let n = 0;

    while (!t || n < t) {
      await new Promise(o => setTimeout(o, 1));

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
  _prepareEvent(t, n, o, r) {
    const s = this.getOptions();
    const a = this.getIntegrationNames();

    if (!n.integrations && a.length) {
      (n.integrations = a);
    }

    this.emit("preprocessEvent", t, n);

    if (!t.type) {
      r.setLastEventId(t.event_id || n.event_id);
    }

    return Rv(s, t, n, o, this, r).then((c) => {
      if (c === null) {
        return c;
      }
      this.emit("postprocessEvent", c, n);

      (c.contexts = {
          trace: { ...c.contexts?.trace, ...T_(o) },
          ...c.contexts,
        });

      const l = Mp(this, o);

      (c.sdkProcessingMetadata = {
        dynamicSamplingContext: l,
        ...c.sdkProcessingMetadata,
      });

      return c;
    });
  }
  _captureEvent(t, n = {}, o = ln(), r = un()) {
    if (oe &&
      oc(t)) {
      K.log(`Captured error event \`${Xp(t)[0] || "<unknown>"}\``);
    }

    return this._processEvent(t, n, o, r).then(
      s => s.event_id,
      (s) => {
        if (oe) {
          if (Ru(s)) {
            K.log(s.message);
          } else if ($u(s)) {
            K.warn(s.message);
          } else {
            K.warn(s);
          }
        }
      }
    );
  }
  _processEvent(t, n, o, r) {
    const s = this.getOptions();
    const { sampleRate } = s;
    const c = Jp(t);
    const l = oc(t);
    const d = `before send for type \`${t.type || "error"}\``;
    const p = typeof sampleRate === "undefined" ? undefined : q_(sampleRate);
    if (l && typeof p == "number" && ai() > p) {
      this.recordDroppedEvent("sample_rate", "error");

      return Gc(
        oa(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        )
      );
    }
    const f = xu(t.type);
    return this._prepareEvent(t, n, o, r)
      .then((h) => {
        if (h === null) {
          this.recordDroppedEvent("event_processor", f);
          throw oa("An event processor returned `null`, will not send event.");
        }
        if (n.data?.__sentry__ === true) {
          return h;
        }
        const m = C0(this, s, h, n);
        return N0(m, d);
      })
      .then((h) => {
      if (h === null) {
        this.recordDroppedEvent("before_send", f);

        if (c) {
          const _ = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", _);
        }

        throw oa(`${d} returned \`null\`, will not send event.`);
      }
      const g = o.getSession() || r.getSession();

      if (l && g) {
        this._updateSessionFromEvent(g, h);
      }

      if (c) {
        const v = h.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const _ = h.spans ? h.spans.length : 0;
        const y = v - _;

        if (y > 0) {
          this.recordDroppedEvent("before_send", "span", y);
        }
      }

      const h_transaction_info = h.transaction_info;
      if (c && h_transaction_info && h.transaction !== t.transaction) {
        const v = "custom";
        h.transaction_info = { ...h_transaction_info, source: v };
      }
      this.sendEvent(h, n);
      return h;
    })
      .then(null, (h) => {
        throw Ru(h) || $u(h)
          ? h
          : (this.captureException(h, {
              mechanism: { handled: false, type: "internal" },
              data: { __sentry__: true },
              originalException: h,
            }),
            Ws(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${h}`));
      });
  }
  _process(t, n) {
    this._numProcessing++;

    this._promiseBuffer.add(t).then(
      o => {
        this._numProcessing--;
        return o;
      },
      o => {
        this._numProcessing--;

        if (o === Kc) {
          this.recordDroppedEvent("queue_overflow", n);
        }

        return o;
      }
    );
  }
  _clearOutcomes() {
    const t = this._outcomes;
    (this._outcomes = {});

    return Object.entries(t).map(([n, o]) => {
      const [r, s] = n.split(":");
      return { reason: r, category: s, quantity: o };
    });
  }
  _flushOutcomes() {
    if (oe) {
      K.log("Flushing outcomes...");
    }

    const t = this._clearOutcomes();
    if (t.length === 0) {
      if (oe) {
        K.log("No outcomes to send");
      }

      return;
    }
    if (!this._dsn) {
      if (oe) {
        K.log("No dsn provided, will not send outcomes");
      }

      return;
    }

    if (oe) {
      K.log("Sending outcomes:", t);
    }

    const n = _0(t, this._options.tunnel && sr(this._dsn));
    this.sendEnvelope(n);
  }
}
function xu(e) {
  return e === "replay_event" ? "replay" : e || "error";
}
function N0(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (os(e)) {
    return e.then(
      (o) => {
        if (!Vr(o) && o !== null) {
          throw Ws(n);
        }
        return o;
      },
      (o) => {
        throw Ws(`${t} rejected with ${o}`);
      }
    );
  }
  if (!Vr(e) && e !== null) {
    throw Ws(n);
  }
  return e;
}
function C0(e, t, n, o) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = t;
  const c = !uv(t.beforeSendSpan) && t.beforeSendSpan;
  let l = n;
  if (oc(l) && beforeSend) {
    return beforeSend(l, o);
  }
  if (Jp(l)) {
    if (c || ignoreSpans) {
      const u = v0(l);
      if (ignoreSpans?.length &&
      mu({ description: u.description, op: u.op, attributes: u.data }, ignoreSpans)) {
        return null;
      }
      if (c) {
        const d = c(u);

        if (d) {
          (l = is(n, y0(d)));
        } else {
          fu();
        }
      }
      if (l.spans) {
        const d = [];
        const l_spans = l.spans;
        for (const h of l_spans) {
          if (
            ignoreSpans?.length &&
            mu({ description: h.description, op: h.op, attributes: h.data }, ignoreSpans)
          ) {
            rv(l_spans, h);
            continue;
          }
          if (c) {
            const g = c(h);

            if (g) {
              d.push(g);
            } else {
              fu();
              d.push(h);
            }
          } else {
            d.push(h);
          }
        }
        const f = l.spans.length - d.length;

        if (f) {
          e.recordDroppedEvent("before_send", "span", f);
        }

        (l.spans = d);
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
      return beforeSendTransaction(l, o);
    }
  }
  return l;
}
function oc(e) {
  return e.type === undefined;
}
function Jp(e) {
  return e.type === "transaction";
}
function T0(e) {
  let t = 0;

  if (e.name) {
    (t += e.name.length * 2);
  }

  (t += 8);
  return t + eh(e.attributes);
}
function I0(e) {
  let t = 0;

  if (e.message) {
    (t += e.message.length * 2);
  }

  return t + eh(e.attributes);
}
function eh(e) {
  if (!e) {
    return 0;
  }
  let t = 0;

  Object.values(e).forEach((n) => {
    if (Array.isArray(n)) {
      (t += n.length * Lu(n[0]));
    } else if (ns(n)) {
      (t += Lu(n));
    } else {
      (t += 100);
    }
  });

  return t;
}
function Lu(e) {
  return typeof e == "string"
    ? e.length * 2
    : typeof e == "number"
    ? 8
    : typeof e == "boolean"
    ? 4
    : 0;
}
function $0(e, t) {
  if (t.debug === true) {
    if (oe) {
      K.enable();
    } else {
      nr(() => {
              console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              );
            });
    }
  }

  ln().update(t.initialScope);
  const o = new e(t);
  R0(o);
  o.init();
  return o;
}
function R0(e) {
  ln().setClient(e);
}
function ra(e) {
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
  const o = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: o,
    relative: t[5] + n + o,
  };
}
function A0(e, t = true) {
  if (e.startsWith("data:")) {
    const n = e.match(/^data:([^;,]+)/);
    const o = n ? n[1] : "text/plain";
    const r = e.includes(";base64,");
    const s = e.indexOf(",");
    let a = "";
    if (t && s !== -1) {
      const c = e.slice(s + 1);
      a = c.length > 10 ? `${c.slice(0, 10)}... [truncated]` : c;
    }
    return `data:${o}${r ? ",base64" : ""}${a ? `,${a}` : ""}`;
  }
  return e;
}
function x0(e) {
  if ("aggregates" in e) {
    if (e.attrs?.ip_address === undefined) {
      (e.attrs = { ...e.attrs, ip_address: "{{auto}}" });
    }
  } else if (e.ipAddress === undefined) {
    (e.ipAddress = "{{auto}}");
  }
}
function th(e, t, n = [t], o = "npm") {
  const r = ((e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {});

  if (!r.name) {
    (r.name = `sentry.javascript.${t}`);

    (r.packages = n.map(s => ({
      name: `${o}:@sentry/${s}`,
      version: uo
    })));

    (r.version = uo);
  }
}
const L0 = 100;
function yo(e, t) {
  const n = nt();
  const o = un();
  if (!n) {
    return;
  }
  const { beforeBreadcrumb = null, maxBreadcrumbs = L0 } = n.getOptions();
  if (maxBreadcrumbs <= 0) {
    return;
  }
  const c = { timestamp: ss(), ...e };

  const l = beforeBreadcrumb ? nr(() => beforeBreadcrumb(c, t)) : c;

  if (l !== null) {
    n.emit && n.emit("beforeAddBreadcrumb", l, t);
    o.addBreadcrumb(l, maxBreadcrumbs);
  }
}
const P0 = "FunctionToString";
const Pu = new WeakMap();

const O0 = () => ({
  name: P0,

  setupOnce() {
    const e = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const n = jc(this);
        let o;
        try {
          if (Pu.has(nt()) && n !== undefined) {
            (o = n);
          }
        } catch {}
        return e.apply(o ?? this, t);
      };
    } catch {}
  },

  setup(e) {
    Pu.set(e, true);
  }
});

const D0 = [
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

const U0 = "EventFilters";

const F0 = (e = {}) => {
  let t;
  return {
    name: U0,
    setup(n) {
      const o = n.getOptions();
      t = Mu(e, o);
    },
    processEvent(n, o, r) {
      if (!t) {
        const s = r.getOptions();
        t = Mu(e, s);
      }
      return H0(n, t) ? null : n;
    },
  };
};

const B0 = (e = {}) => ({
  ...F0(e),
  name: "InboundFilters"
});

function Mu(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : D0),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function H0(e, t) {
  if (e.type) {
    if (e.type === "transaction" && W0(e, t.ignoreTransactions)) {
      if (oe) {
        K.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${so(e)}`);
      }

      return true;
    }
  } else {
    if (V0(e, t.ignoreErrors)) {
      if (oe) {
        K.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${so(e)}`);
      }

      return true;
    }
    if (G0(e)) {
      if (oe) {
        K.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${so(e)}`);
      }

      return true;
    }
    if (j0(e, t.denyUrls)) {
      if (oe) {
        K.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${so(e)}.
Url: ${ci(e)}`);
      }

      return true;
    }
    if (!z0(e, t.allowUrls)) {
      if (oe) {
        K.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${so(e)}.
Url: ${ci(e)}`);
      }

      return true;
    }
  }
  return false;
}
function V0(e, t) {
  return t?.length ? Xp(e).some(n => rs(n, t)) : false;
}
function W0(e, t) {
  if (!t?.length) {
    return false;
  }
  const e_transaction = e.transaction;
  return e_transaction ? rs(e_transaction, t) : false;
}
function j0(e, t) {
  if (!t?.length) {
    return false;
  }
  const n = ci(e);
  return n ? rs(n, t) : false;
}
function z0(e, t) {
  if (!t?.length) {
    return true;
  }
  const n = ci(e);
  return n ? rs(n, t) : true;
}
function q0(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const e_t = e[t];
    if (e_t && e_t.filename !== "<anonymous>" && e_t.filename !== "[native code]") {
      return e_t.filename || null;
    }
  }
  return null;
}
function ci(e) {
  try {
    const n = [...(e.exception?.values ?? [])]
      .reverse()
      .find(
        o => o.mechanism?.parent_id === undefined && o.stacktrace?.frames?.length
      )?.stacktrace?.frames;
    return n ? q0(n) : null;
  } catch {
    if (oe) {
      K.error(`Cannot extract url for event ${so(e)}`);
    }

    return null;
  }
}
function G0(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          t => t.stacktrace || (t.type && t.type !== "Error") || t.value
        )
    : false;
}
function Y0(e, t, n, o, r, s) {
  if (!r.exception?.values || !s || !zo(s.originalException, Error)) {
    return;
  }
  const a =
    r.exception.values.length > 0
      ? r.exception.values[r.exception.values.length - 1]
      : undefined;

  if (a) {
    (r.exception.values = rc(
        e,
        t,
        o,
        s.originalException,
        n,
        r.exception.values,
        a,
        0
      ));
  }
}
function rc(e, t, n, o, r, s, a, c) {
  if (s.length >= n + 1) {
    return s;
  }
  let l = [...s];
  if (zo(o[r], Error)) {
    Ou(a, c, o);
    const u = e(t, o[r]);
    const l_length = l.length;
    Du(u, r, l_length, c);
    (l = rc(e, t, n, o[r], r, [u, ...l], u, l_length));
  }

  if (nh(o)) {
    o.errors.forEach((u, d) => {
      if (zo(u, Error)) {
        Ou(a, c, o);
        const p = e(t, u);
        const l_length = l.length;
        Du(p, `errors[${d}]`, l_length, c);
        (l = rc(e, t, n, u, r, [p, ...l], p, l_length));
      }
    });
  }

  return l;
}
function nh(e) {
  return Array.isArray(e.errors);
}
function Ou(e, t, n) {
  e.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...(nh(n) && { is_exception_group: true }),
    ...e.mechanism,
    exception_id: t,
  };
}
function Du(e, t, n, o) {
  e.mechanism = {
    handled: true,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: o,
  };
}
function K0(e) {
  return (
    ts(e) &&
    "__sentry_fetch_url_host__" in e &&
    typeof e.__sentry_fetch_url_host__ == "string"
  );
}
function Uu(e) {
  return K0(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
}
const Fu = new Set([]);
function X0(e) {
  const t = "console";
  const n = bo(t, e);
  Eo(t, Q0);
  return n;
}
const Bu = new Set();
function Q0() {
  if ("console" in _e) {
    Og.forEach(e => {
      if (!Bu.has(e) && (e in _e.console)) {
        Bu.add(e);

        yt(_e.console, e, t => {
          (ii[e] = t);

          return (...n) => {
            const [o] = n;
            const ii_e = ii[e];
            const s = Fu.size && typeof o == "string" && rs(o, Fu);

            if (!s) {
              Ht("console", { args: n, level: e });
            }

            if ((!s || (oe && K.isEnabled()))) {
              ii_e?.apply(_e.console, n);
            }
          };
        });
      }
    });
  }
}
function Z0(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
    ? e
    : "log";
}
const J0 = "Dedupe";

const ty = () => {
  let e;
  return {
    name: J0,
    processEvent(t) {
      if (t.type) {
        return t;
      }
      try {
        if (ny(t, e)) {
          if (oe) {
            K.warn(
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

function ny(e, t) {
  return t ? !!(oy(e, t) || ry(e, t)) : false;
}
function oy(e, t) {
  const e_message = e.message;
  const t_message = t.message;
  return !(
    (!e_message && !t_message) ||
    (e_message && !t_message) ||
    (!e_message && t_message) ||
    e_message !== t_message ||
    !rh(e, t) ||
    !oh(e, t)
  );
}
function ry(e, t) {
  const n = Hu(t);
  const o = Hu(e);
  return !(
    !n ||
    !o ||
    n.type !== o.type ||
    n.value !== o.value ||
    !rh(e, t) ||
    !oh(e, t)
  );
}
function oh(e, t) {
  let n = Yl(e);
  let o = Yl(t);
  if (!n && !o) {
    return true;
  }
  if ((n && !o) || (!n && o) || ((n = n), (o = o), o.length !== n.length)) {
    return false;
  }
  for (let r = 0; r < o.length; r++) {
    const o_r = o[r];
    const n_r = n[r];
    if (o_r.filename !== n_r.filename ||
    o_r.lineno !== n_r.lineno ||
    o_r.colno !== n_r.colno ||
    o_r.function !== n_r.function) {
      return false;
    }
  }
  return true;
}
function rh(e, t) {
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
function Hu(e) {
  return e.exception?.values?.[0];
}
const sy = "ConversationId";

const ay = () => ({
  name: sy,

  setup(e) {
    e.on("spanStart", (t) => {
      const n = ln().getScopeData();
      const o = un().getScopeData();
      const r = n.conversationId || o.conversationId;
      if (r) {
        const { op: op_1, data, description } = Mi(t);
        if (!op_1?.startsWith("gen_ai.") &&
        !data["ai.operationId"] &&
        !description?.startsWith("ai.")) {
          return;
        }
        t.setAttribute(x_, r);
      }
    });
  }
});

function sh(e) {
  if (e !== undefined) {
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : undefined;
  }
}
const jr = _e;
function cy() {
  return "history" in jr && !!jr.history;
}
function ly() {
  if (!("fetch" in jr)) {
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
function sc(e) {
  return (e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString()));
}
function uy() {
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!ly()) {
    return false;
  }
  if (sc(jr.fetch)) {
    return true;
  }
  let e = false;
  const jr_document = jr.document;
  if (jr_document && typeof jr_document.createElement == "function") {
    try {
      const n = jr_document.createElement("iframe");
      (n.hidden = true);
      jr_document.head.appendChild(n);

      if (n.contentWindow?.fetch) {
        (e = sc(n.contentWindow.fetch));
      }

      jr_document.head.removeChild(n);
    } catch (n) {
      if (oe) {
        K.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
      }
    }
  }
  return e;
}
function dy(e, t) {
  const n = "fetch";
  const o = bo(n, e);

  Eo(n, () => fy(undefined, t));

  return o;
}
function fy(e, t = false) {
  if (!t || uy()) {
    yt(_e, "fetch", n => (...o) => {
      const r = new Error();
      const { method, url } = py(o);

      const c = {
        args: o,
        fetchData: { method: method, url: url },
        startTimestamp: yn() * 1000/* 1e3 */,
        virtualError: r,
        headers: hy(o),
      };

      Ht("fetch", { ...c });

      return n.apply(_e, o).then(
        async l => {
          Ht("fetch", { ...c, endTimestamp: yn() * 1000/* 1e3 */, response: l });
          return l;
        },
        (l) => {
          Ht("fetch", { ...c, endTimestamp: yn() * 1000/* 1e3 */, error: l });

          if (ts(l) &&
            l.stack === undefined) {
            (l.stack = r.stack);
            Dn(l, "framesToPop", 1);
          }

          const d =
            nt()?.getOptions().enhanceFetchErrorMessages ?? "always";
          if (d !== false &&
          l instanceof TypeError &&
          (l.message === "Failed to fetch" ||
            l.message === "Load failed" ||
            l.message ===
              "NetworkError when attempting to fetch resource.")) {
            try {
              const h = new URL(c.fetchData.url).host;

              if (d === "always") {
                (l.message = `${l.message} (${h})`);
              } else {
                Dn(l, "__sentry_fetch_url_host__", h);
              }
            } catch {}
          }
          throw l;
        }
      );
    });
  }
}
function js(e, t) {
  return xi(e) && !!e[t];
}
function Vu(e) {
  return typeof e == "string"
    ? e
    : e
    ? js(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function py(e) {
  if (e.length === 0) {
    return { method: "GET", url: "" };
  }
  if (e.length === 2) {
    const [n, o] = e;
    return {
      url: Vu(n),
      method: js(o, "method")
        ? String(o.method).toUpperCase()
        : mp(n) && js(n, "method")
        ? String(n.method).toUpperCase()
        : "GET",
    };
  }
  const [t] = e;
  return {
    url: Vu(t),
    method: js(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function hy(e) {
  const [t, n] = e;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (mp(t)) {
      return new Headers(t.headers);
    }
  } catch {}
}
const ih = _e;
function Qc() {
  try {
    return ih.document.location.href;
  } catch {
    return "";
  }
}
function my(e, t = 5) {
  if (!ih.HTMLElement) {
    return null;
  }
  let n = e;
  for (let o = 0; o < t; o++) {
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
const Ne = _e;
let ic = 0;
function ah() {
  return ic > 0;
}
function gy() {
  ic++;

  setTimeout(() => {
    ic--;
  });
}
function Yo(e, t = {}) {
  function n(r) {
    return typeof r == "function";
  }
  if (!n(e)) {
    return e;
  }
  try {
    if (Object.prototype.hasOwnProperty.call(e, "__sentry_wrapped__")) {
      const e_sentry_wrapped = e.__sentry_wrapped__;
      return typeof e_sentry_wrapped == "function" ? e_sentry_wrapped : e;
    }
    if (jc(e)) {
      return e;
    }
  } catch {
    return e;
  }
  const o = function (...r) {
    _e._sentryWrappedDepth = (_e._sentryWrappedDepth || 0) + 1;
    try {
      const s = r.map(a => Yo(a, t));
      return e.apply(this, s);
    } catch (s) {
      gy();

      Cp((a) => {
        a.addEventProcessor(
          c => {
            if (t.mechanism) {
              Qa(c, undefined);
              fo(c, t.mechanism);
            }

            (c.extra = { ...c.extra, arguments: r });
            return c;
          }
        );

        Bp(s);
      });

      throw s;
    } finally {
      _e._sentryWrappedDepth = (_e._sentryWrappedDepth || 0) - 1;
    }
  };
  try {
    for (const r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        (o[r] = e[r]);
      }
    }
  } catch {}
  gp(o, e);
  Dn(e, "__sentry_wrapped__", o);
  try {
    if (Object.getOwnPropertyDescriptor(o, "name").configurable) {
      Object.defineProperty(o, "name", {
        get() {
          return e.name;
        },
      });
    }
  } catch {}
  return o;
}
function Wu() {
  const e = Qc();
  const { referrer } = Ne.document || {};
  const { userAgent } = Ne.navigator || {};
  const o = { ...(referrer && { Referer: referrer }), ...(userAgent && { "User-Agent": userAgent }) };
  return { url: e, headers: o };
}
function Zc(e, t) {
  const n = Oi(e, t);
  const o = { type: by(t), value: Ey(t) };

  if (n.length) {
    (o.stacktrace = { frames: n });
  }

  if (o.type === undefined &&
    o.value === "") {
    (o.value = "Unrecoverable error caught");
  }

  return o;
}
function _y(e, t, n, o) {
  const s = nt()?.getOptions().normalizeDepth;
  const a = Ty(t);
  const c = { __serialized__: yp(t, s) };
  if (a) {
    return { exception: { values: [Zc(e, a)] }, extra: c };
  }
  const l = {
    exception: {
      values: [
        {
          type: Li(t) ? t.constructor.name : o ? "UnhandledRejection" : "Error",
          value: Ny(t, { isUnhandledRejection: o }),
        },
      ],
    },
    extra: c,
  };
  if (n) {
    const u = Oi(e, n);

    if (u.length) {
      (l.exception.values[0].stacktrace = { frames: u });
    }
  }
  return l;
}
function sa(e, t) {
  return { exception: { values: [Zc(e, t)] } };
}
function Oi(e, t) {
  const n = t.stacktrace || t.stack || "";
  const o = yy(t);
  const r = wy(t);
  try {
    return e(n, o, r);
  } catch {}
  return [];
}
const vy = /Minified React error #\d+;/i;
function yy(e) {
  return e && vy.test(e.message) ? 1 : 0;
}
function wy(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function ch(e) {
  return typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined"
    ? e instanceof WebAssembly.Exception
    : false;
}
function by(e) {
  const t = e?.name;
  return !t && ch(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function Ey(e) {
  const t = e?.message;
  return ch(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : "wasm exception"
    : t
    ? t.error && typeof t.error.message == "string"
      ? Uu(t.error)
      : Uu(e)
    : "No error message";
}
function Sy(e, t, n, o) {
  const r = n?.syntheticException || undefined;
  const s = Jc(e, t, r, o);
  fo(s);
  (s.level = "error");

  if (n?.event_id) {
    (s.event_id = n.event_id);
  }

  return as(s);
}
function ky(e, t, n = "info", o, r) {
  const s = o?.syntheticException || undefined;
  const a = ac(e, t, s, r);
  (a.level = n);

  if (o?.event_id) {
    (a.event_id = o.event_id);
  }

  return as(a);
}
function Jc(e, t, n, o, r) {
  let s;
  if (hp(t) && t.error) {
    return sa(e, t.error);
  }
  if (Xl(t) || Kg(t)) {
    const a = t;
    if ("stack" in t) {
      s = sa(e, t);
      const c = s.exception?.values?.[0];
      if (o && n && c && !c.stacktrace) {
        const l = Oi(e, n);

        if (l.length) {
          (c.stacktrace = { frames: l });
          fo(s, { synthetic: true });
        }
      }
    } else {
      const c = a.name || (Xl(a) ? "DOMError" : "DOMException");
      const l = a.message ? `${c}: ${a.message}` : c;
      (s = ac(e, l, n, o));
      Qa(s, l);
    }

    if ("code" in a) {
      (s.tags = { ...s.tags, "DOMException.code": `${a.code}` });
    }

    return s;
  }

  if (ts(t)) {
    return sa(e, t);
  }

  if (Vr(t) || Li(t)) {
    (s = _y(e, t, n, r));
    fo(s, { synthetic: true });
    return s;
  }

  (s = ac(e, t, n, o));
  Qa(s, `${t}`);
  fo(s, { synthetic: true });
  return s;
}
function ac(e, t, n, o) {
  const r = {};
  if (o && n) {
    const s = Oi(e, n);

    if (s.length) {
      (r.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
    }

    fo(r, { synthetic: true });
  }
  if (Wc(t)) {
    const { __sentry_template_string__, __sentry_template_values__ } = t;
    (r.logentry = { message: __sentry_template_string__, params: __sentry_template_values__ });
    return r;
  }
  (r.message = t);
  return r;
}
function Ny(e, { isUnhandledRejection: t }) {
  const n = Qg(e);
  const o = t ? "promise rejection" : "exception";
  return hp(e)
    ? `Event \`ErrorEvent\` captured as ${o} with message \`${e.message}\``
    : Li(e)
    ? `Event \`${Cy(e)}\` (type=${e.type}) captured as ${o}`
    : `Object captured as ${o} with keys: ${n}`;
}
function Cy(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : undefined;
  } catch {}
}
function Ty(e) {
  return Object.values(e).find(t => t instanceof Error);
}
class Iy extends k0 {
  constructor(t) {
    const n = $y(t);
    const o = Ne.SENTRY_SDK_SOURCE || Zv();
    th(n, "browser", ["browser"], o);
    super(n);
    const { userInfo } = this.getDataCollectionOptions();

    if (n._metadata?.sdk) {
      (n._metadata.sdk.settings = {
          infer_ip: userInfo ? "auto" : "never",
          ...n._metadata.sdk.settings,
        });
    }

    const { sendClientReports } = this._options;

    if (Ne.document) {
      Ne.document.addEventListener("visibilitychange", () => {
        if (Ne.document.visibilityState === "hidden") {
          sendClientReports && this._flushOutcomes();

          queueMicrotask(() => {
            this.flush();
          });
        }
      });
    }

    if (userInfo) {
      this.on("beforeSendSession", x0);
    }
  }
  eventFromException(t, n) {
    return Sy(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", o) {
    return ky(
      this._options.stackParser,
      t,
      n,
      o,
      this._options.attachStacktrace
    );
  }
  _prepareEvent(t, n, o, r) {
    (t.platform = t.platform || "javascript");
    return super._prepareEvent(t, n, o, r);
  }
}
function $y(e) {
  return {
    release:
      typeof __SENTRY_RELEASE__ == "string"
        ? __SENTRY_RELEASE__
        : Ne.SENTRY_RELEASE?.id,
    sendClientReports: true,
    parentSpanIsAlwaysRootSpan: true,
    ...e,
  };
}
const Ry = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const We = _e;
function ju(e, t, n) {
  if (We.document) {
    We.addEventListener(e, t, n);
  }
}
function zu(e, t, n) {
  if (We.document) {
    We.removeEventListener(e, t, n);
  }
}

const Ay = (e) => {
  return () => {
    if (!t) {
      e();
      (t = true);
    }
  };
};

const xy = (e) => {
  const t = We.requestIdleCallback || We.setTimeout;

  if (We.document?.visibilityState === "hidden") {
    e();
  } else {
    (e = Ay(e));
    ju("visibilitychange", e, { once: true, capture: true });
    ju("pagehide", e, { once: true, capture: true });

    t(() => {
      e();
      zu("visibilitychange", e, { capture: true });
      zu("pagehide", e, { capture: true });
    });
  }
};

const Ly = 80;
const Jn = {};
try {
  if (typeof Node !== "undefined") {
    (Jn.parentNode = Object.getOwnPropertyDescriptor(
        Node.prototype,
        "parentNode"
      ).get);
  }

  if (typeof Element !== "undefined") {
    (Jn.tagName = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "tagName"
      ).get);

    (Jn.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get);

    (Jn.className = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "className"
      ).get);

    (Jn.getAttribute = Element.prototype.getAttribute);
  }

  if (typeof HTMLElement !== "undefined") {
    (Jn.dataset = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        "dataset"
      ).get);
  }
} catch {}
function $n(e, t, n) {
  const Jn_t = Jn[t];
  if (Jn_t) {
    try {
      return Jn_t.call(e, n);
    } catch {}
  }
  const e_t = e[t];
  return typeof e_t == "function" ? e_t.call(e, n) : e_t;
}
function lh(e, t = {}) {
  if (!e) {
    return "<unknown>";
  }
  try {
    let n = e;
    const o = 5;
    const r = [];
    let s = 0;
    let a = 0;
    const c = " > ";
    const c_length = c.length;
    let u;
    const d = Array.isArray(t) ? t : t.keyAttrs;
    const p = (!Array.isArray(t) && t.maxStringLength) || Ly;

    while (n &&
         s++ < o &&
         ((u = Py(n, d)),
         !(u === "html" || (s > 1 && a + r.length * c_length + u.length >= p)))) {
      r.push(u);
      (a += u.length);
      (n = $n(n, "parentNode"));
    }

    return r.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function Py(e, t) {
  const n = [];
  const o = $n(e, "tagName");
  if (!o) {
    return "";
  }
  if (typeof HTMLElement !== "undefined" && e instanceof HTMLElement) {
    const s = $n(e, "dataset");
    if (s) {
      if (s.sentryComponent) {
        return s.sentryComponent;
      }
      if (s.sentryElement) {
        return s.sentryElement;
      }
    }
  }
  n.push(o.toLowerCase());
  const r = t?.length
    ? t
        .filter(s => $n(e, "getAttribute", s))
        .map(s => [s, $n(e, "getAttribute", s)])
    : null;
  if (r?.length) {
    r.forEach((s) => {
      n.push(`[${s[0]}="${s[1]}"]`);
    });
  } else {
    const s = $n(e, "id");

    if (s) {
      n.push(`#${s}`);
    }

    const a = $n(e, "className");
    if (a && vn(a)) {
      const c = a.split(/\s+/);
      for (const l of c) {
        n.push(`.${l}`);
      }
    }
  }
  for (const s of ["aria-label", "type", "name", "title", "alt"]) {
    const a = $n(e, "getAttribute", s);

    if (a) {
      n.push(`[${s}="${a}"]`);
    }
  }
  return n.join("");
}
const My = 1000/* 1e3 */;
let qu;
let cc;
let lc;
function Oy(e) {
  bo("dom", e);
  Eo("dom", Dy);
}
function Dy() {
  if (!We.document) {
    return;
  }
  const e = Ht.bind(null, "dom");
  const t = Gu(e, true);
  We.document.addEventListener("click", t, false);
  We.document.addEventListener("keypress", t, false);

  ["EventTarget", "Node"].forEach((n) => {
    const r = We[n]?.prototype;

    if (r?.hasOwnProperty?.("addEventListener")) {
      yt(r, "addEventListener", s => (function(a, c, l) {
        if (a === "click" || a == "keypress") {
          try {
            const u = (this.__sentry_instrumentation_handlers__ =
                this.__sentry_instrumentation_handlers__ || {});

            const d = (u[a] = u[a] || { refCount: 0 });
            if (!d.handler) {
              const p = Gu(e);
              (d.handler = p);
              s.call(this, a, p, l);
            }
            d.refCount++;
          } catch {}
        }
        return s.call(this, a, c, l);
      }));

      yt(r, "removeEventListener", s => (function(a, c, l) {
        if (a === "click" || a == "keypress") {
          try {
            const u = this.__sentry_instrumentation_handlers__ || {};
            const u_a = u[a];

            if (u_a) {
              u_a.refCount--;

              u_a.refCount <= 0 &&
                (s.call(this, a, u_a.handler, l),
                (u_a.handler = undefined),
                delete u[a]);

              Object.keys(u).length === 0 &&
                delete this.__sentry_instrumentation_handlers__;
            }
          } catch {}
        }
        return s.call(this, a, c, l);
      }));
    }
  });
}
function Uy(e) {
  if (e.type !== cc) {
    return false;
  }
  try {
    if (!e.target || e.target._sentryId !== lc) {
      return false;
    }
  } catch {}
  return true;
}
function Fy(e, t) {
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
function Gu(e, t = false) {
  return (n) => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const o = By(n);
    if (Fy(n.type, o)) {
      return;
    }
    Dn(n, "_sentryCaptured", true);

    if (o && !o._sentryId) {
      Dn(o, "_sentryId", $t());
    }

    const r = n.type === "keypress" ? "input" : n.type;

    if (!Uy(n)) {
      e({ event: n, name: r, global: t });
      (cc = n.type);
      (lc = o ? o._sentryId : undefined);
    }

    clearTimeout(qu);

    (qu = We.setTimeout(() => {
      (lc = undefined);
      (cc = undefined);
    }, My));
  };
}
function By(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let Es;
function uh(e) {
  const t = "history";
  bo(t, e);
  Eo(t, Hy);
}
function Hy() {
  We.addEventListener("popstate", () => {
    const t = We.location.href;
    const n = Es;
    (Es = t);

    if (n === t) {
      return;
    }

    Ht("history", { from: n, to: t });
  });

  if (!cy()) {
    return;
  }

  class e {
    constructor(t) {
      return function (...n) {
        const o = n.length > 2 ? n[2] : undefined;
        if (o) {
          const r = Es;
          const s = Vy(String(o));
          (Es = s);

          if (r === s) {
            return t.apply(this, n);
          }

          Ht("history", { from: r, to: s });
        }
        return t.apply(this, n);
      };
    }

    static persist() {}

    static isPropagationStopped() {
      return this.cancelBubble;
    }

    static isDefaultPrevented() {
      return this.defaultPrevented;
    }
  }

  yt(We.history, "pushState", e);
  yt(We.history, "replaceState", e);
}
function Vy(e) {
  try {
    return new URL(e, We.location.origin).toString();
  } catch {
    return e;
  }
}
const zs = {};
function Wy(e) {
  const zs_e = zs[e];
  if (zs_e) {
    return zs_e;
  }
  let n = We[e];
  if (sc(n)) {
    return (zs[e] = n.bind(We));
  }
  const {
    document
  } = We;
  if (document && typeof document.createElement == "function") {
    try {
      const r = document.createElement("iframe");
      (r.hidden = true);
      document.head.appendChild(r);
      const r_contentWindow = r.contentWindow;

      if (r_contentWindow?.[e]) {
        (n = r_contentWindow[e]);
      }

      document.head.removeChild(r);
    } catch (r) {
      if (Ry) {
        K.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          r
        );
      }
    }
  }
  return n && (zs[e] = n.bind(We));
}
function jy(e) {
  zs[e] = undefined;
}
const Tr = "__sentry_xhr_v3__";
function zy(e) {
  bo("xhr", e);
  Eo("xhr", qy);
}
function qy() {
  if (!We.XMLHttpRequest) {
    return;
  }
  const XMLHttpRequest_prototype = XMLHttpRequest.prototype;

  (XMLHttpRequest_prototype.open = new Proxy(XMLHttpRequest_prototype.open, {
    apply(t, n, o) {
      const r = new Error();
      const s = yn() * 1000/* 1e3 */;
      const a = vn(o[0]) ? o[0].toUpperCase() : undefined;
      const c = Gy(o[1]);
      if (!a || !c) {
        return t.apply(n, o);
      }
      (n[Tr] = { method: a, url: c, request_headers: {} });

      if (a === "POST" &&
        c.match(/sentry_key/)) {
        (n.__sentry_own_request__ = true);
      }

      const l = () => {
        const n_Tr = n[Tr];
        if (n_Tr && n.readyState === 4) {
          try {
            n_Tr.status_code = n.status;
          } catch {}
          const d = {
            endTimestamp: yn() * 1000/* 1e3 */,
            startTimestamp: s,
            xhr: n,
            virtualError: r,
          };
          Ht("xhr", d);
          n.removeEventListener("readystatechange", l);
        }
      };

      if ("onreadystatechange" in n && typeof n.onreadystatechange == "function") {
        (n.onreadystatechange = new Proxy(n.onreadystatechange, {
              apply(u, d, p) {
                l();
                return u.apply(d, p);
              },
            }));
      } else {
        n.addEventListener("readystatechange", l);
      }

      (n.setRequestHeader = new Proxy(n.setRequestHeader, {
        apply(u, d, p) {
          const [f, h] = p;
          const d_Tr = d[Tr];

          if (d_Tr && vn(f) && vn(h)) {
            (d_Tr.request_headers[f.toLowerCase()] = h);
          }

          return u.apply(d, p);
        },
      }));

      return t.apply(n, o);
    },
  }));

  (XMLHttpRequest_prototype.send = new Proxy(XMLHttpRequest_prototype.send, {
      apply(t, n, o) {
        const n_Tr = n[Tr];
        if (!n_Tr) {
          return t.apply(n, o);
        }

        if (o[0] !== undefined) {
          (n_Tr.body = o[0]);
        }

        const s = { startTimestamp: yn() * 1000/* 1e3 */, xhr: n };
        Ht("xhr", s);
        return t.apply(n, o);
      },
    }));
}
function Gy(e) {
  if (vn(e)) {
    return e;
  }
  try {
    return e.toString();
  } catch {}
}
function Yy(e) {
  if (typeof Element === "undefined") {
    return false;
  }
  try {
    return e instanceof Element;
  } catch {
    return false;
  }
}
const Ky = 40;
function Xy(e, t = Wy("fetch")) {
  let n = 0;
  let o = 0;
  async function r(s) {
    const a = s.body.length;
    (n += a);
    o++;
    const c = {
      body: s.body,
      method: "POST",
      referrerPolicy: "strict-origin",
      headers: e.headers,
      keepalive: n <= 60000/* 6e4 */ && o < 15,
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
      jy("fetch");
      throw l;
    } finally {
      (n -= a);
      o--;
    }
  }
  return g0(e, r, Xc(e.bufferSize || Ky));
}
const Ko = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Qy = 30;
const Zy = 50;
function uc(e, t, n, o) {
  const r = { filename: e, function: t === "<anonymous>" ? vo : t, in_app: true };

  if (n !== undefined) {
    (r.lineno = n);
  }

  if (o !== undefined) {
    (r.colno = o);
  }

  return r;
}
const Jy = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;

const ew =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const tw = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const nw = /at (.+?) ?\(data:(.+?),/;

const ow = (e) => {
  const t = e.match(nw);
  if (t) {
    return { filename: `<data:${t[2]}>`, function: t[1] };
  }
  const n = Jy.exec(e);
  if (n) {
    const [, r, s, a] = n;
    return uc(r, vo, Number(s), Number(a));
  }
  const o = ew.exec(e);
  if (o) {
    if (o[2]?.indexOf("eval") === 0) {
      const c = tw.exec(o[2]);

      if (c) {
        (o[2] = c[1]);
        (o[3] = c[2]);
        (o[4] = c[3]);
      }
    }
    const [s, a] = dh(o[1] || vo, o[2]);
    return uc(a, s, o[3] ? +o[3] : undefined, o[4] ? +o[4] : undefined);
  }
};

const rw = [Qy, ow];

const sw =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;

const iw = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

const aw = (e) => {
  const t = sw.exec(e);
  if (t) {
    if (t[3] && t[3].includes(" > eval")) {
      const s = iw.exec(t[3]);

      if (s) {
        (t[1] = t[1] || "eval");
        (t[3] = s[1]);
        (t[4] = s[2]);
        (t[5] = "");
      }
    }
    let [,,, o] = t;
    let r = t[1] || vo;
    ([r, o] = dh(r, o));
    return uc(o, r, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
  }
};

const cw = [Zy, aw];
const lw = [rw, cw];
const uw = fp(...lw);

const dh = (e, t) => {
  const n = e.includes("safari-extension");
  const o = e.includes("safari-web-extension");
  return n || o
    ? [
        e.includes("@") ? e.split("@")[0] : vo,
        n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
      ]
    : [e, t];
};

const Ss = 1024;
const dw = "Breadcrumbs";

const pw = (e = {}) => {
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
    name: dw,
    setup(n) {
      if (t.console) {
        X0(gw(n));
      }

      if (t.dom) {
        Oy(mw(n, t.dom));
      }

      if (t.xhr) {
        zy(_w(n));
      }

      if (t.fetch) {
        dy(vw(n));
      }

      if (t.history) {
        uh(yw(n));
      }

      if (t.sentry) {
        n.on("beforeSendEvent", hw(n));
      }
    },
  };
};

function hw(e) {
  return n => {
    if (nt() === e) {
      yo(
        {
          category: `sentry.${
            n.type === "transaction" ? "transaction" : "event"
          }`,
          event_id: n.event_id,
          level: n.level,
          message: so(n),
        },
        { event: n }
      );
    }
  };
}
function mw(e, t) {
  return o => {
    if (nt() !== e) {
      return;
    }
    let r;
    let s;
    let a = typeof t == "object" ? t.serializeAttribute : undefined;

    let c =
      typeof t == "object" && typeof t.maxStringLength == "number"
        ? t.maxStringLength
        : undefined;

    if (c &&
      c > Ss) {
      Ko &&
          K.warn(
            `\`dom.maxStringLength\` cannot exceed ${Ss}, but a value of ${c} was configured. Sentry will use ${Ss} instead.`
          );

      (c = Ss);
    }

    if (typeof a == "string") {
      (a = [a]);
    }

    try {
      const o_event = o.event;
      const d = ww(o_event) ? o_event.target : o_event;
      (r = lh(d, { keyAttrs: a, maxStringLength: c }));
      (s = my(d));
    } catch {
      r = "<unknown>";
    }
    if (r.length === 0) {
      return;
    }
    const l = { category: `ui.${o.name}`, message: r };

    if (s) {
      (l.data = { "ui.component_name": s });
    }

    yo(l, { event: o.event, name: o.name, global: o.global });
  };
}
function gw(e) {
  return function (n) {
    if (nt() !== e) {
      return;
    }
    const o = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: Z0(n.level),
      message: Zl(n.args, " "),
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        (o.message = `Assertion failed: ${
          Zl(n.args.slice(1), " ") || "console.assert"
        }`);

        (o.data.arguments = n.args.slice(1));
      } else {
        return;
      }
    }
    yo(o, { input: n.args, level: n.level });
  };
}
function _w(e) {
  return n => {
    if (nt() !== e) {
      return;
    }
    const { startTimestamp, endTimestamp } = n;
    const s = n.xhr[Tr];
    if (!startTimestamp || !endTimestamp || !s) {
      return;
    }
    const { method, url, status_code, body } = s;
    const d = { method: method, url: url, status_code: status_code };
    const p = { xhr: n.xhr, input: body, startTimestamp: startTimestamp, endTimestamp: endTimestamp };
    const f = { category: "xhr", data: d, type: "http", level: sh(status_code) };
    e.emit("beforeOutgoingRequestBreadcrumb", f, p);
    yo(f, p);
  };
}
function vw(e) {
  return n => {
    if (nt() !== e) {
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

        const a = {
          category: "fetch",
          data: n.fetchData,
          level: "error",
          type: "http",
        };

        e.emit("beforeOutgoingRequestBreadcrumb", a, s);
        yo(a, s);
      } else {
        const n_response = n.response;
        const a = { ...n.fetchData, status_code: n_response?.status };

        const c = {
          input: n.args,
          response: n_response,
          startTimestamp: startTimestamp,
          endTimestamp: endTimestamp,
        };

        const l = {
          category: "fetch",
          data: a,
          type: "http",
          level: sh(a.status_code),
        };

        e.emit("beforeOutgoingRequestBreadcrumb", l, c);
        yo(l, c);
      }
    }
  };
}
function yw(e) {
  return n => {
    if (nt() !== e) {
      return;
    }

    let {
      from,
      to: to_2
    } = n;

    const s = ra(Ne.location.href);
    let a = from ? ra(from) : undefined;
    const c = ra(to_2);

    if (!a?.path) {
      (a = s);
    }

    if (s.protocol === c.protocol && s.host === c.host) {
      (to_2 = c.relative);
    }

    if (s.protocol === a.protocol && s.host === a.host) {
      (from = a.relative);
    }

    yo({ category: "navigation", data: { from: from, to: to_2 } });
  };
}
function ww(e) {
  return !!e && !!e.target;
}

const bw =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ","
    );

const Ew = "BrowserApiErrors";

const kw = (e = {}) => {
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
    name: Ew,
    setupOnce() {
      if (t.setTimeout) {
        yt(Ne, "setTimeout", Yu);
      }

      if (t.setInterval) {
        yt(Ne, "setInterval", Yu);
      }

      if (t.requestAnimationFrame) {
        yt(Ne, "requestAnimationFrame", Nw);
      }

      if (t.XMLHttpRequest &&
        "XMLHttpRequest" in Ne) {
        yt(XMLHttpRequest.prototype, "send", Cw);
      }

      const t_eventTarget = t.eventTarget;

      if (t_eventTarget) {
        (Array.isArray(t_eventTarget) ? t_eventTarget : bw).forEach(r => Tw(r, t));
      }
    },
  };
};

function Yu(e) {
  return function (...t) {
    const [n] = t;

    (t[0] = Yo(n, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${On(e)}`,
      },
    }));

    return e.apply(this, t);
  };
}
function Nw(e) {
  return function (t) {
    return e.apply(this, [
      Yo(t, {
        mechanism: {
          data: { handler: On(e) },
          handled: false,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function Cw(e) {
  return function (...t) {
    const n = this;

    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
      if (r in n &&
        typeof n[r] == "function") {
        yt(n, r, s => {
          const a = {
              mechanism: {
                data: { handler: On(s) },
                handled: false,
                type: `auto.browser.browserapierrors.xhr.${r}`,
              },
            };

          const c = jc(s);

          if (c) {
            (a.mechanism.data.handler = On(c));
          }

          return Yo(s, a);
        });
      }
    });

    return e.apply(this, t);
  };
}
function Tw(e, t) {
  const o = Ne[e]?.prototype;

  if (o?.hasOwnProperty?.("addEventListener")) {
    yt(o, "addEventListener", r => (function(s, a, c) {
      try {
        if (Iw(a)) {
          (a.handleEvent = Yo(a.handleEvent, {
              mechanism: {
                data: { handler: On(a), target: e },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent",
              },
            }));
        }
      } catch {}

      if (t.unregisterOriginalCallbacks) {
        $w(this, s, a);
      }

      return r.apply(this, [
        s,
        Yo(a, {
          mechanism: {
            data: { handler: On(a), target: e },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener",
          },
        }),
        c,
      ]);
    }));

    yt(o, "removeEventListener", r => (function(s, a, c) {
      try {
        if (Object.prototype.hasOwnProperty.call(a, "__sentry_wrapped__")) {
          const a_sentry_wrapped = a.__sentry_wrapped__;

          if (a_sentry_wrapped) {
            r.call(this, s, a_sentry_wrapped, c);
          }
        }
      } catch {}
      return r.call(this, s, a, c);
    }));
  }
}
function Iw(e) {
  return typeof e.handleEvent == "function";
}
function $w(e, t, n) {
  if (e &&
    typeof e == "object" &&
    "removeEventListener" in e &&
    typeof e.removeEventListener == "function") {
    e.removeEventListener(t, n);
  }
}

const Rw = (e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (typeof Ne.document === "undefined") {
          if (Ko) {
            K.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported."
            );
          }

          return;
        }
        ku({ ignoreDuration: true });
        let n = false;
        xy(() => {
          if (!n) {
            na();
            (n = true);
          }
        });
        const o = un();
        let r = o.getUser();

        o.addScopeListener((s) => {
          const a = s.getUser();

          if ((r?.id !== a?.id || r?.ip_address !== a?.ip_address)) {
            (r = a);
            n && na();
          }
        });

        if (t === "route") {
          uh(({ from: s, to: a }) => {
            if (s !== a) {
              ku({ ignoreDuration: true });
              na();
              (n = true);
            }
          });
        }
      },
    };
  };

const Aw = "CultureContext";

const Lw = () => ({
  name: Aw,

  preprocessEvent(e) {
    const t = Ku();

    if (t) {
      (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    }
  },

  processSegmentSpan(e) {
    const t = Ku();

    if (t) {
      Fp(e, {
        "culture.locale": t.locale,
        "culture.timezone": t.timezone,
        "culture.calendar": t.calendar,
      });
    }
  }
});

function Ku() {
  try {
    const Ne_Intl = Ne.Intl;
    if (!Ne_Intl) {
      return;
    }
    const t = Ne_Intl.DateTimeFormat().resolvedOptions();
    return { locale: t.locale, timezone: t.timeZone, calendar: t.calendar };
  } catch {
    return;
  }
}
const Pw = "GlobalHandlers";

const Ow = (e = {}) => {
  const t = { onerror: true, onunhandledrejection: true, ...e };
  return {
    name: Pw,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (t.onerror) {
        Dw(n);
        Xu("onerror");
      }

      if (t.onunhandledrejection) {
        Uw(n);
        Xu("onunhandledrejection");
      }
    },
  };
};

function Dw(e) {
  zg((t) => {
    const { stackParser, attachStacktrace } = fh();
    if (nt() !== e || ah()) {
      return;
    }
    const { msg, url, line, column, error } = t;
    const u = Hw(Jc(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
    (u.level = "error");

    Hp(u, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror",
      },
    });
  });
}
function Uw(e) {
  Gg((t) => {
    const { stackParser, attachStacktrace } = fh();
    if (nt() !== e || ah()) {
      return;
    }
    const r = Fw(t);
    const s = ns(r) ? Bw(r) : Jc(stackParser, r, undefined, attachStacktrace, true);
    (s.level = "error");

    Hp(s, {
      originalException: r,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection",
      },
    });
  });
}
function Fw(e) {
  if (ns(e)) {
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
function Bw(e) {
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
function Hw(e, t, n, o) {
  const r = (e.exception = e.exception || {});
  const s = (r.values = r.values || []);
  const a = (s[0] = s[0] || {});
  const c = (a.stacktrace = a.stacktrace || {});
  const l = (c.frames = c.frames || []);

  if (l.length === 0) {
    l.push({
      colno: o,
      lineno: n,
      filename: Vw(t) ?? Qc(),
      function: vo,
      in_app: true,
    });
  }

  return e;
}
function Xu(e) {
  if (Ko) {
    K.log(`Global Handler attached: ${e}`);
  }
}
function fh() {
  return nt()?.getOptions() || { stackParser: () => [], attachStacktrace: false };
}
function Vw(e) {
  if (!(!vn(e) || e.length === 0)) {
    return e.startsWith("data:") ? `<${A0(e, false)}>` : e;
  }
}

const Ww = () => ({
  name: "HttpContext",

  preprocessEvent(e) {
    if (!Ne.navigator && !Ne.location && !Ne.document) {
      return;
    }
    const t = Wu();
    const n = { ...t.headers, ...e.request?.headers };
    e.request = { ...t, ...e.request, headers: n };
  },

  processSegmentSpan(e) {
    const t = e.attributes?.[Tp];
    if (!Ne.navigator && !Ne.location && !Ne.document) {
      return;
    }
    const n = Wu();
    Fp(e, {
      [Tv]: t !== "http.client" ? n.url : undefined,
      "http.request.header.user_agent": n.headers["User-Agent"],
      "http.request.header.referer": n.headers.Referer,
    });
  }
});

const jw = "cause";
const zw = 5;
const qw = "LinkedErrors";

const Yw = (e = {}) => {
  const t = e.limit || zw;
  const n = e.key || jw;
  return {
    name: qw,
    preprocessEvent(o, r, s) {
      const a = s.getOptions();
      Y0(Zc, a.stackParser, n, t, o, r);
    },
  };
};

const Kw = /^HTML(\w*)Element$/;
function ph(e) {
  if (typeof window !== "undefined" && e === window) {
    return "[Window]";
  }
  if (typeof document !== "undefined" && e === document) {
    return "[Document]";
  }
  if (Yy(e)) {
    const t = Xw(e);
    if (Kw.test(t)) {
      return `[HTMLElement: ${lh(e)}]`;
    }
  }
}
function Xw(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function Qw() {
  return Zw()
    ? (Ko &&
        nr(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
          );
        }),
      true)
    : false;
}
function Zw() {
  if (typeof Ne.window === "undefined") {
    return false;
  }
  const e = Ne;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) {
    return false;
  }
  const n = Qc();
  return !(
    Ne === Ne.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      n
    )
  );
}
function Jw(e) {
  return [B0(), O0(), ay(), kw(), pw(), Ow(), Yw(), ty(), Ww(), Lw(), Rw()];
}
function eb(e = {}) {
  const t = !e.skipBrowserExtensionCheck && Qw();
  let n = e.defaultIntegrations == null ? Jw() : e.defaultIntegrations;
  const o = {
    ...e,
    enabled: t ? false : e.enabled,
    stackParser: Wg(e.stackParser || uw),
    integrations: Kv({ integrations: e.integrations, defaultIntegrations: n }),
    transport: e.transport || Xy,
  };
  vp(ph);
  return $0(Iy, o);
}
function Qu(e = {}) {
  const Ne_document = Ne.document;
  const n = Ne_document?.head || Ne_document?.body;
  if (!n) {
    if (Ko) {
      K.error("[showReportDialog] Global document not defined");
    }

    return;
  }
  const o = ln();
  const s = nt()?.getDsn();
  if (!s) {
    if (Ko) {
      K.error("[showReportDialog] DSN not configured");
    }

    return;
  }

  const a = {
      ...e,
      user: { ...o.getUser(), ...e.user },
      eventId: e.eventId || Vv(),
    };

  const c = Ne.document.createElement("script");
  (c.async = true);
  (c.crossOrigin = "anonymous");
  (c.src = Gv(s, a));
  const { onLoad, onClose } = a;

  if (onLoad) {
    (c.onload = onLoad);
  }

  if (onClose) {
    const d = (p) => {
      if (p.data === "__sentry_reportdialog_closed__") {
        try {
          onClose();
        } finally {
          Ne.removeEventListener("message", d);
        }
      }
    };
    Ne.addEventListener("message", d);
  }

  n.appendChild(c);
}
let Un;
let Re;
let ia;
let Zu;
let Xo = 0;
const hh = [];
const Ue = re;

const {
  __b,
  __r,
  diffed,
  __c,
  unmount,
  __: __1
} = Ue;

function ar(e, t) {
  if (Ue.__h) {
    Ue.__h(Re, e, Xo || t);
  }

  (Xo = 0);
  const n = Re.__H || (Re.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function $(e) {
  (Xo = 1);
  return el(gh, e);
}
function el(e, t, n) {
  const o = ar(Un++, 2);
  (o.t = e);

  if (!o.__c &&
    ((o.__ = [
      n ? n(t) : gh(undefined, t),
      c => {
        const l = o.__N ? o.__N[0] : o.__[0];
        const u = o.t(l, c);

        if (l !== u) {
          (o.__N = [u, o.__[1]]);
          o.__c.setState({});
        }
      },
    ]),
    (o.__c = Re),
    !Re.__f)) {
    const r = function (c, l, u) {
      if (!o.__c.__H) {
        return true;
      }
      let d = false;
      let p = o.__c.props !== c;

      o.__c.__H.__.some(h => {
          if (h.__N) {
            d = true;
            const g = h.__[0];
            (h.__ = h.__N);
            (h.__N = undefined);

            if (g !== h.__[0]) {
              (p = true);
            }
          }
        });

      if (shouldComponentUpdate) {
        const f = shouldComponentUpdate.call(this, c, l, u);
        return d ? f || p : f;
      }

      return !d || p;
    };
    Re.__f = true;

    var {
      shouldComponentUpdate,
      componentWillUpdate
    } = Re;

    (Re.componentWillUpdate = function (c, l, u) {
      if (this.__e) {
        const d = shouldComponentUpdate;
        (shouldComponentUpdate = undefined);
        r(c, l, u);
        (shouldComponentUpdate = d);
      }

      if (componentWillUpdate) {
        componentWillUpdate.call(this, c, l, u);
      }
    });

    (Re.shouldComponentUpdate = r);
  }

  return o.__N || o.__;
}
function M(e, t) {
  const n = ar(Un++, 3);

  if (!Ue.__s && nl(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    Re.__H.__h.push(n);
  }
}
function ct(e, t) {
  const n = ar(Un++, 4);

  if (!Ue.__s && nl(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    Re.__h.push(n);
  }
}
function R(e) {
  (Xo = 5);

  return Ie(() => ({
    current: e
  }), []);
}
function tl(e, t, n) {
  (Xo = 6);

  ct(
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
        (e.current = t());

        return () => e.current = null;
      }
    },
    n == null ? n : n.concat(e)
  );
}
function Ie(e, t) {
  const n = ar(Un++, 7);

  if (nl(n.__H, t)) {
    (n.__ = e());
    (n.__H = t);
    (n.__h = e);
  }

  return n.__;
}
function A(e, t) {
  (Xo = 8);

  return Ie(() => e, t);
}
function cs(e) {
  const t = Re.context[e.__c];
  const n = ar(Un++, 9);
  (n.c = e);
  return t ? (n.__ == null && ((n.__ = true), t.sub(Re)), t.props.value) : e.__;
}
function mh(e, t) {
  if (Ue.useDebugValue) {
    Ue.useDebugValue(t ? t(e) : e);
  }
}
function ls() {
  const e = ar(Un++, 11);
  if (!e.__) {
    for (var t = Re.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function tb() {
  for (let e; (e = hh.shift()); ) {
    const e_H = e.__H;
    if (e.__P && e_H) {
      try {
        e_H.__h.some(qs);
        e_H.__h.some(dc);
        (e_H.__h = []);
      } catch (n) {
        (e_H.__h = []);
        Ue.__e(n, e.__v);
      }
    }
  }
}

(Ue.__b = e => {
  (Re = null);

  if (__b) {
    __b(e);
  }
});

(Ue.__ = (e, t) => {
  if (e && t.__k && t.__k.__m) {
    (e.__m = t.__k.__m);
  }

  if (__1) {
    __1(e, t);
  }
});

(Ue.__r = e => {
  if (__r) {
    __r(e);
  }

  (Un = 0);
  const t = (Re = e.__c).__H;

  if (t) {
    if (ia === Re) {
      (t.__h = []);
      (Re.__h = []);

      t.__.some(n => {
        if (n.__N) {
          (n.__ = n.__N);
        }

        n.u = undefined;
        n.__N = undefined;
      });
    } else {
      t.__h.some(qs);
      t.__h.some(dc);
      (t.__h = []);
      (Un = 0);
    }
  }

  (ia = Re);
});

(Ue.diffed = e => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__h.length &&
        ((hh.push(e_c) !== 1 && Zu === Ue.requestAnimationFrame) ||
          ((Zu = Ue.requestAnimationFrame) || nb)(tb));

    e_c.__H.__.some(n => {
      if (n.u) {
        (n.__H = n.u);
        (n.u = undefined);
      }
    });
  }

  ia = null;
  Re = null;
});

(Ue.__c = (e, t) => {
  t.some(n => {
    try {
      n.__h.some(qs);

      (n.__h = n.__h.filter(o => !o.__ || dc(o)));
    } catch (o) {
      t.some(r => {
        if (r.__h) {
          (r.__h = []);
        }
      });

      (t = []);
      Ue.__e(o, n.__v);
    }
  });

  if (__c) {
    __c(e, t);
  }
});

(Ue.unmount = e => {
  if (unmount) {
    unmount(e);
  }

  let t;
  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__.some(o => {
        try {
          qs(o);
        } catch (r) {
          t = r;
        }
      });

    (e_c.__H = undefined);
    t && Ue.__e(t, e_c.__v);
  }
});

const sd = typeof requestAnimationFrame == "function";
function nb(e) {
  let t;

  const n = () => {
    clearTimeout(o);

    if (sd) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var o = setTimeout(n, 35);

  if (sd) {
    (t = requestAnimationFrame(n));
  }
}
function qs(e) {
  const t = Re;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    (e.__c = undefined);
    e_c();
  }

  (Re = t);
}
function dc(e) {
  const t = Re;
  (e.__c = e.__());
  (Re = t);
}
function nl(e, t) {
  return !e ||
  e.length !== t.length ||
  t.some((n, o) => n !== e[o]);
}
function gh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _h(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function fc(e, t) {
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
function vh(e, t) {
  const n = t();
  const o = $({ t: { __: n, u: t } });
  const r = o[0].t;
  const [, s] = o;

  ct(
    () => {
      (r.__ = n);
      (r.u = t);

      if (aa(r)) {
        s({ t: r });
      }
    },
    [e, n, t]
  );

  M(
    () => {
      if (aa(r)) {
        s({ t: r });
      }

      return e(() => {
        if (aa(r)) {
          s({ t: r });
        }
      });
    },
    [e]
  );

  return n;
}
function aa(e) {
  try {
    return !(
      ((t = e.__) === (n = e.u()) && (t !== 0 || 1 / t == 1 / n)) ||
      (t != t && n != n)
    );
  } catch {
    return true;
  }
  var t;
  var n;
}
function yh(e) {
  e();
}
function wh(e) {
  return e;
}
function bh() {
  return [false, yh];
}
const Eh = ct;

class pc {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  shouldComponentUpdate(e, t) {
      return fc(this.props, e) || fc(this.state, t);
    }
}

function Di(e, t) {
  function n(r) {
    const s = this.props.ref;

    if (s != r.ref &&
      s) {
      if (typeof s == "function") {
        s(null);
      } else {
        (s.current = null);
      }
    }

    if (t) {
      if (!!t(this.props, r)) {
        return s != r.ref;
      }
    }

    return fc(this.props, r);
  }
  function o(r) {
    (this.shouldComponentUpdate = n);
    return jt(e, r);
  }
  (o.displayName = `Memo(${e.displayName || e.name})`);
  o.__f = true;
  o.prototype.isReactComponent = true;
  (o.type = e);
  return o;
}
((pc.prototype = new It()).isPureReactComponent = true);

const {
  __b: _b_1,
  __e,
  unmount: unmount_2,
  event,
  vnode,
  __r: _r_1,
  diffed: diffed_2
} = re;

re.__b = e => {
  if (e.type && e.type.__f && e.ref) {
    (e.props.ref = e.ref);
    (e.ref = null);
  }

  if (_b_1) {
    _b_1(e);
  }
};
const ob =
  (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function Sh(e) {
  class t {
    constructor(n) {
      const o = _h({}, n);
      delete o.ref;
      return e(o, n.ref || null);
    }

    static componentWillUnmount() {
      Hr(null, t.v);
      (t.v = null);
      (t.h = null);
    }
  }

  (t.$$typeof = ob);
  (t.render = e);
  t.prototype.isReactComponent = true;
  t.__f = true;
  (t.displayName = `ForwardRef(${e.displayName || e.name})`);
  return t;
}

const ad = (e, t) => e == null ? null : Bt(Bt(e).map(t));

const rb = {
  map: ad,
  forEach: ad,
  count(e) {
    return e ? Bt(e).length : 0;
  },
  only(e) {
    const t = Bt(e);
    if (t.length !== 1) {
      throw "Children.only";
    }
    return t[0];
  },
  toArray: Bt,
};

re.__e = (e, t, n, o) => {
  if (e.then) {
    let r;
    for (let s = t; (s = s.__); ) {
      if ((r = s.__c) && r.__c) {
        if (t.__e == null) {
          (t.__e = n.__e);
          (t.__k = n.__k || []);
        }

        return r.__c(e, t);
      }
    }
  }
  __e(e, t, n, o);
};
function kh(e, t, n) {
  if (e) {
    e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(o => {
      if (typeof o.__c == "function") {
        o.__c();
      }
    }),
        (e.__c.__H = null));

    (e = _h({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    (e.__k = e.__k &&
    e.__k.map(o => kh(o, t, n)));
  }

  return e;
}
function Nh(e, t, n) {
  if (e &&
    n) {
    (e.__v = null);

    (e.__k = e.__k &&
    e.__k.map(o => Nh(o, t, n)));

    e.__c &&
      e.__c.__P === t &&
      (e.__e && n.appendChild(e.__e), (e.__c.__e = true), (e.__c.__P = n));
  }

  return e;
}

class Xe {
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
        const o = this.__v.__k[0].__c;
        this.__v.__k[0] = kh(this.__b, n, (o.__O = o.__P));
      }
      this.__b = null;
    }
    const r = t.__a && jt(ue, null, e.fallback);

    if (r) {
      (r.__u &= -33);
    }

    return [jt(ue, null, t.__a ? null : e.children), r];
  }
}

function Ch(e) {
  const t = e.__ && e.__.__c;
  return t && t.__a && t.__a(e);
}
function me(e) {
  let t;
  let n;
  let o;
  let r = null;
  function Lazy(a) {
    if (!t) {
      (e()).then(
        c => {
          if (c) {
            (r = c.default || c);
          }

          (o = true);
        },
        c => {
          (n = c);
          (o = true);
        }
      );
    }

    if (n) {
      throw n;
    }

    if (!o) {
      throw t;
    }
    return r ? jt(r, a) : null;
  }
  (Lazy.displayName = "Lazy");
  (Lazy.__f = true);
  return Lazy;
}

class Ir {
  constructor() {
    (this.i = null);
    (this.l = null);
  }

  render(e) {
    (this.i = null);
    (this.l = new Map());
    const t = Bt(e.children);

    if (e.revealOrder && e.revealOrder[0] === "b") {
      t.reverse();
    }

    for (let n = t.length; n--; ) {
      this.l.set(t[n], (this.i = [1, 0, this.i]));
    }
    return e.children;
  }
}

(re.unmount = e => {
  const e_c = e.__c;

  if (e_c) {
    (e_c.__z = true);
  }

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

((Xe.prototype = new It()).__c = function (e, t) {
  const t_c = t.__c;
  const o = this;

  if (o.o == null) {
    (o.o = []);
  }

  o.o.push(t_c);
  const r = Ch(o.__v);

  const a = () => {
    if (!s && !o.__z) {
      (s = true);
      (t_c.__R = null);
      r ? r(l) : l();
    }
  };

  t_c.__R = a;
  const t_c___P = t_c.__P;
  t_c.__P = null;
  var l = () => {
    if (!--o.__u) {
      if (o.state.__a) {
        const u = o.state.__a;
        o.__v.__k[0] = Nh(u, u.__c.__P, u.__c.__O);
      }
      let d;
      for (o.setState({ __a: (o.__b = null) }); (d = o.o.pop()); ) {
        (d.__P = t_c___P);
        d.forceUpdate();
      }
    }
  };

  if (!o.__u++ && 32 & t.__u) {
    o.setState({ __a: (o.__b = o.__v.__k[0]) });
  }

  e.then(a, a);
});

const ld = (e, t, n) => {
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
function ib(e) {
  (this.getChildContext = () => e.context);

  return e.children;
}
function ab(e) {
  const t = this;
  const e_h = e.h;

  if (t.h && t.h !== e_h) {
    t.componentWillUnmount();
  }

  if (!t.v) {
    for (var o = t.__v; o !== null && !o.__m && o.__ !== null; ) {
      o = o.__;
    }
    (t.h = e_h);

    (t.v = {
        nodeType: 1,
        parentNode: e_h,
        childNodes: [],
        __k: { __m: o.__m },
        contains() {
          return true;
        },
        namespaceURI: e_h.namespaceURI,
        insertBefore(r, s) {
          this.childNodes.push(r);
          t.h.insertBefore(r, s);
        },
        removeChild(r) {
          this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1);
          t.h.removeChild(r);
        },
      });
  }

  Hr(jt(ib, { context: t.context }, e.__v), t.v);
}
function ft(e, t) {
  const n = jt(ab, { __v: e, h: t });
  (n.containerInfo = t);
  return n;
}

((Ir.prototype = new It()).__a = function (e) {
  const t = this;
  const n = Ch(t.__v);
  const o = t.l.get(e);
  o[0]++;

  return r => {
    const s = () => {
      if (t.props.revealOrder) {
        o.push(r);
        ld(t, e, o);
      } else {
        r();
      }
    };

    if (n) {
      n(s);
    } else {
      s();
    }
  };
});

(Ir.prototype.componentDidUpdate = Ir.prototype.componentDidMount =
    function () {
      const e = this;
      this.l.forEach((t, n) => {
        ld(e, n, t);
      });
    });

const Th =
    (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.element")) || 60103;

const cb =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const lb = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const ub = /[A-Z0-9]/g;
const db = typeof document !== "undefined";

const fb = e => (
  typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
).test(e);

function Ih(e, t, n) {
  if (t.__k == null) {
    (t.textContent = "");
  }

  Hr(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function pb(e, t, n) {
  cp(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
(It.prototype.isReactComponent = true);

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach(e => {
  Object.defineProperty(It.prototype, e, {
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

re.event = e => {
  if (event) {
    (e = event(e));
  }

  (e.nativeEvent = e);
  return e.nativeEvent;
};
let ol;

const hb = {
  configurable: true,
  get() {
    return this.class;
  },
};

re.vnode = e => {
  if (typeof e.type == "string") {
    (t => {
      const {
        props,
        type
      } = t;

      const r = {};
      const s = !type.includes("-");
      for (let a in props) {
        let props_a = props[a];
        if (
          !(
            (a === "value" && "defaultValue" in props && props_a == null) ||
            (db && a === "children" && type === "noscript") ||
            a === "class" ||
            a === "className"
          )
        ) {
          let l = a.toLowerCase();

          if (a === "defaultValue" && "value" in props && props.value == null) {
            (a = "value");
          } else if (a === "download" && props_a === true) {
            (props_a = "");
          } else if (l === "translate" && props_a === "no") {
            (props_a = false);
          } else if (l[0] === "o" && l[1] === "n") {
            if (l === "ondoubleclick") {
              (a = "ondblclick");
            } else if (l !== "onchange" ||
                  (type !== "input" && type !== "textarea") ||
                  fb(props.type)) {
              if (l === "onfocus") {
                (a = "onfocusin");
              } else if (l === "onblur") {
                (a = "onfocusout");
              } else if (lb.test(a)) {
                (a = l);
              }
            } else {
              (l = a = "oninput");
            }
          } else if (s && cb.test(a)) {
            (a = a.replace(ub, "-$&").toLowerCase());
          } else if (props_a === null) {
            (props_a = undefined);
          }

          if (l === "oninput" && r[(a = l)]) {
            (a = "oninputCapture");
          }

          (r[a] = props_a);
        }
      }

      if (type == "select") {
        r.multiple &&
            Array.isArray(r.value) &&
            (r.value = Bt(props.children).forEach(u => {
              u.props.selected = r.value.includes(u.props.value);
            }));

        r.defaultValue != null &&
          (r.value = Bt(props.children).forEach(u => {
            u.props.selected = r.multiple
              ? r.defaultValue.includes(u.props.value)
              : r.defaultValue == u.props.value;
          }));
      }

      if (props.class && !props.className) {
        (r.class = props.class);
        Object.defineProperty(r, "className", hb);
      } else if (props.className) {
        (r.class = r.className = props.className);
      }

      (t.props = r);
    })(e);
  }

  (e.$$typeof = Th);

  if (vnode) {
    vnode(e);
  }
};
re.__r = e => {
  if (_r_1) {
    _r_1(e);
  }

  (ol = e.__c);
};
re.diffed = e => {
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

  (ol = null);
};

const mb = {
    ReactCurrentDispatcher: {
      current: {
        readContext(e) {
          return ol.__n[e.__c].props.value;
        },
        useCallback: A,
        useContext: cs,
        useDebugValue: mh,
        useDeferredValue: wh,
        useEffect: M,
        useId: ls,
        useImperativeHandle: tl,
        useInsertionEffect: Eh,
        useLayoutEffect: ct,
        useMemo: Ie,
        useReducer: el,
        useRef: R,
        useState: $,
        useSyncExternalStore: vh,
        useTransition: bh,
      },
    },
  };

const $h = "18.3.1";
function gb(e) {
  return jt.bind(null, e);
}
function us(e) {
  return !!e && e.$$typeof === Th;
}
function _b(e) {
  return us(e) && e.type === ue;
}
function vb(e) {
  return (
    !!e &&
    typeof e.displayName == "string" &&
    e.displayName.indexOf("Memo(") == 0
  );
}
function yb(e) {
  return us(e) ? lp(...arguments) : e;
}
function Rh(e) {
  return !!e.__k && (Hr(null, e), true);
}
function wb(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const bb = (e, t) => e(t);

const Eb = (e, t) => {
  let n;
  const re_debounceRendering = re.debounceRendering;
  re.debounceRendering = s => {
    n = s;
  };
  try {
    const r = e(t);

    if (n) {
      n();
    }

    return r;
  } finally {
    re.debounceRendering = re_debounceRendering;
  }
};

const Sb = us;

const $r = {
  useState: $,
  useId: ls,
  useReducer: el,
  useEffect: M,
  useLayoutEffect: ct,
  useInsertionEffect: Eh,
  useTransition: bh,
  useDeferredValue: wh,
  useSyncExternalStore: vh,
  startTransition: yh,
  useRef: R,
  useImperativeHandle: tl,
  useMemo: Ie,
  useCallback: A,
  useContext: cs,
  useDebugValue: mh,
  version: "18.3.1",
  Children: rb,
  render: Ih,
  hydrate: pb,
  unmountComponentAtNode: Rh,
  createPortal: ft,
  createElement: jt,
  createContext: er,
  createFactory: gb,
  cloneElement: yb,
  createRef: $g,
  Fragment: ue,
  isValidElement: us,
  isElement: Sb,
  isFragment: _b,
  isMemo: vb,
  findDOMNode: wb,
  Component: It,
  PureComponent: pc,
  memo: Di,
  forwardRef: Sh,
  flushSync: Eb,
  unstable_batchedUpdates: bb,
  StrictMode: ue,
  Suspense: Xe,
  SuspenseList: Ir,
  lazy: me,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: mb,
};

function kb(e) {
  return (
    Vr(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function Nb(e) {
  const t = { ...e };
  th(t, "react");
  Hv("react", { version: $h });
  const n = eb(t);
  vp(Cb);
  return n;
}
function Cb(e) {
  return kb(e) ? "[SyntheticEvent]" : ph(e);
}
function Tb(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function Ib(e, t) {
  const n = new WeakSet();
  function o(r, s) {
    if (!n.has(r)) {
      if (r.cause) {
        n.add(r);
        return o(r.cause, s);
      }
      r.cause = s;
    }
  }
  o(e, t);
}
function $b(e, { componentStack: t }, n) {
  if (Tb($h) && ts(e) && t) {
    const o = new Error(e.message);
    (o.name = `React ErrorBoundary ${e.name}`);
    (o.stack = t);
    Ib(e, o);
  }
  return Bp(e, n);
}
const Rb = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const ca = { componentStack: null, error: null, eventId: null };
class Ab extends It {
  constructor(t) {
    super(t);
    (this.state = ca);
    (this._openFallbackReportDialog = true);
    const n = nt();

    if (n &&
      t.showDialog) {
      (this._openFallbackReportDialog = false);

      (this._cleanupHook = n.on("afterSendEvent", (o) => {
        if (!o.type &&
          this._lastEventId &&
          o.event_id === this._lastEventId) {
          Qu({ ...t.dialogOptions, eventId: this._lastEventId });
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

    Cp((l) => {
      if (beforeCapture) {
        beforeCapture(l, t, componentStack);
      }

      const u =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback;

      const d = $b(t, n, {
        mechanism: { handled: u, type: "auto.function.react.error_boundary" },
      });

      if (onError) {
        onError(t, componentStack, d);
      }

      if (showDialog) {
        (this._lastEventId = d);
        this._openFallbackReportDialog && Qu({ ...dialogOptions, eventId: d });
      }

      this.setState({ error: t, componentStack: componentStack, eventId: d });
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
      if (this.state === ca) {
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

    this.setState(ca);
  }
  render() {
    const { fallback, children } = this.props;
    const o = this.state;
    if (o.componentStack === null) {
      return typeof children == "function" ? children() : children;
    }
    const r =
      typeof fallback == "function"
        ? jt(fallback, {
            error: o.error,
            componentStack: o.componentStack,
            resetError: () => this.resetErrorBoundary(),
            eventId: o.eventId,
          })
        : fallback;
    return us(r)
      ? r
      : (fallback && Rb && K.warn("fallback did not produce a valid ReactElement"),
        null);
  }
}
Nb({
  dsn: "https://693c388031bcee4cd87e917055abf6a2@sentry.xn--d1ah4a.com/2",
  environment: "production",
  enabled: true,
  sendDefaultPii: true,
  tracesSampleRate: 0.1,
  release: "1.1.2",
});
function xb(e) {
  return {
    render(t) {
      Ih(t, e);
    },
    unmount() {
      Rh(e);
    },
  };
}
const Lb = "modulepreload";

const Pb = e => `/${e}`;

const hd = {};

const de = (t, n, o) => {
  let r = Promise.resolve();
  if (n && n.length > 0) {
    let l = u => Promise.all(
      u.map(d => Promise.resolve(d).then(
        p => ({
          status: "fulfilled",
          value: p
        }),
        p => ({
          status: "rejected",
          reason: p
        })
      )
      )
    );
    document.getElementsByTagName("link");
    const a = document.querySelector("meta[property=csp-nonce]");
    const c = a?.nonce || a?.getAttribute("nonce");
    r = l(
      n.map((u) => {
        (u = Pb(u));

        if (u in hd) {
          return;
        }

        hd[u] = true;
        const d = u.endsWith(".css");
        const p = d ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${p}`)) {
          return;
        }
        const f = document.createElement("link");
        (f.rel = d ? "stylesheet" : Lb);

        if (!d) {
          (f.as = "script");
        }

        (f.crossOrigin = "");
        (f.href = u);

        if (c) {
          f.setAttribute("nonce", c);
        }

        document.head.appendChild(f);

        if (d) {
          return new Promise((h, g) => {
            f.addEventListener("load", h);

            f.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${u}`))
            );
          });
        }
      })
    );
  }
  function s(a) {
    const c = new Event("vite:preloadError", { cancelable: true });
    (c.payload = a);
    window.dispatchEvent(c);

    if (!c.defaultPrevented) {
      throw a;
    }
  }
  return r.then((a) => {
    for (const c of a || []) {
      if (c.status === "rejected") {
        s(c.reason);
      }
    }
    return t().catch(s);
  });
};

const Mb = {};
function ks(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Ob(e, t, n) {
  let o;
  const r = /(?:\?([^#]*))?(#.*)?$/;
  const s = e.match(r);
  const a = {};
  if (s && s[1]) {
    for (let c = s[1].split("&"), l = 0; l < c.length; l++) {
      const u = c[l].split("=");
      a[decodeURIComponent(u[0])] = decodeURIComponent(u.slice(1).join("="));
    }
  }
  (e = hc(e.replace(r, "")));
  (t = hc(t || ""));
  for (let d = Math.max(e.length, t.length), p = 0; p < d; p++) {
    if (t[p] && t[p].charAt(0) === ":") {
      const f = t[p].replace(/(^:|[+*?]+$)/g, "");
      const h = (t[p].match(/[+*?]+$/) || Mb)[0] || "";
      const g = ~h.indexOf("+");
      const m = ~h.indexOf("*");
      const v = e[p] || "";
      if (!v && !m && (!h.includes("?") || g)) {
        o = false;
        break;
      }
      (a[f] = decodeURIComponent(v));

      if (g || m) {
        a[f] = e.slice(p).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[p] !== e[p]) {
      o = false;
      break;
    }
  }
  return (n.default === true || o !== false) && a;
}
function Db(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function Ub(e, t) {
  (e.index = t);

  (e.rank = (n => n.props.default ? 0 : hc(n.props.path).map(Fb).join(""))(e));

  return e.props;
}
function hc(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function Fb(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const Bb = {};
const po = [];
const Mr = [];
let vt = null;
const rl = { url: sl() };
const Ah = er(rl);
function ds() {
  const e = cs(Ah);
  if (e === rl) {
    const t = $()[1];
    M(() => {
      Mr.push(t);

      return () => Mr.splice(Mr.indexOf(t), 1);
    }, []);
  }
  return [e, Ae];
}
function sl() {
  let e;
  return `${(e =
  vt && vt.location
    ? vt.location
    : vt && vt.getCurrentLocation
    ? vt.getCurrentLocation()
    : typeof location !== "undefined"
    ? location
    : Bb).pathname || ""}${e.search || ""}`;
}
function Ae(e, t = false) {
  if (typeof e != "string" && e.url) {
    (t = e.replace);
    (e = e.url);
  }

  if ((n => {
    for (let o = po.length; o--; ) {
      if (po[o].canRoute(n)) {
        return true;
      }
    }
    return false;
  })(e)) {
    ((n, o = "push") => {
      if (vt && vt[o]) {
        vt[o](n);
      } else if (typeof history !== "undefined" &&
          history[`${o}State`]) {
        history[`${o}State`](null, null, n);
      }
    })(e, t ? "replace" : "push");
  }

  return xh(e);
}
function xh(e) {
  let t = false;
  for (let n = 0; n < po.length; n++) {
    if (po[n].routeTo(e)) {
      (t = true);
    }
  }
  return t;
}
function Hb(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return Ae(t);
    }
  }
}
function Vb(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function Wb(e) {
  if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (e_target.hasAttribute("data-native") || e_target.hasAttribute("native")) {
          return;
        }
        if (Hb(e_target)) {
          return Vb(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function Lh(e) {
  if (e.history) {
    (vt = e.history);
  }

  (this.state = { url: e.url || sl() });
}
ks((Lh.prototype = new It()), {
  shouldComponentUpdate(e) {
    return (e.static !== true ||
    e.url !== this.props.url || e.onChange !== this.props.onChange);
  },
  canRoute(e) {
    const t = Bt(this.props.children);
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

    if (!md) {
      (md = true);

      vt ||
        addEventListener("popstate", () => {
          xh(sl());
        });

      addEventListener("click", Wb);
    }

    po.push(this);

    if (vt) {
      (this.u = vt.listen(t => {
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

    po.splice(po.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(Ub).sort(Db);

    for (const o of e) {
      const r = Ob(t, o.props.path, o.props);
      if (r) {
        return [o, r];
      }
    }
  },
  render(e, t) {
    let n;
    let o;
    const e_onChange = e.onChange;
    const t_url = t.url;
    let a = this.c;
    const c = this.g(Bt(e.children), t_url);

    if (c) {
      (o = lp(
            c[0],
            ks(ks({ url: t_url, matches: (n = c[1]) }, n), {
              key: undefined,
              ref: undefined,
            })
          ));
    }

    if (t_url !== (a && a.url)) {
      ks(
        rl,
        (a = this.c =
          {
            url: t_url,
            previous: a && a.url,
            current: o,
            path: o ? o.props.path : null,
            matches: n,
          })
      );

      (a.router = this);
      (a.active = o ? [o] : []);
      for (let l = Mr.length; l--; ) {
        Mr[l]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return jt(Ah.Provider, { value: a }, o);
  },
});

const gd = (e) => {
  let t;
  const n = new Set();

  const o = (u, d) => {
    const p = typeof u == "function" ? u(t) : u;
    if (!Object.is(p, t)) {
      const f = t;

      (t = d ?? (typeof p != "object" || p === null)
        ? p
        : Object.assign({}, t, p));

      n.forEach(h => h(t, f));
    }
  };

  const r = () => t;

  const c = {
    setState: o,
    getState: r,
    getInitialState: () => l,
    subscribe: u => {
      n.add(u);

      return () => n.delete(u);
    },
  };

  const l = (t = e(o, r, c));
  return c;
};

const jb = e => e ? gd(e) : gd;

const zb = e => e;

function qb(e, t = zb) {
  const n = $r.useSyncExternalStore(
    e.subscribe,
    $r.useCallback(() => t(e.getState()), [e, t]),
    $r.useCallback(() => t(e.getInitialState()), [e, t])
  );
  $r.useDebugValue(n);
  return n;
}

const _d = (e) => {
  const t = jb(e);

  const n = o => qb(t, o);

  Object.assign(n, t);
  return n;
};

const rt = e => e ? _d(e) : _d;

function il(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (r) => {
      let s;

      const a = l => l === null ? null : JSON.parse(l, undefined);

      const c = (s = n.getItem(r)) != null ? s : null;
      return c instanceof Promise ? c.then(a) : a(c);
    },
    setItem: (r, s) => n.setItem(r, JSON.stringify(s, undefined)),
    removeItem: r => n.removeItem(r),
  };
}

const mc = e => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(o) {
              return mc(o)(n);
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
          return mc(o)(n);
        },
      };
    }
  };

const Ph = (e, t) => (n, o, r) => {
  let s = {
      storage: il(() => window.localStorage),
      partialize: v => v,
      version: 0,
      merge: (v, _) => ({
        ..._,
        ...v
      }),
      ...t,
    };

  let a = false;
  let c = 0;
  const l = new Set();
  const u = new Set();
  let s_storage = s.storage;
  if (!s_storage) {
    return e(
      (...v) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
        );

        n(...v);
      },
      o,
      r
    );
  }

  const p = () => {
      const v = s.partialize({ ...o() });
      return s_storage.setItem(s.name, { state: v, version: s.version });
    };

  const r_setState = r.setState;
  r.setState = (v, _) => {
    r_setState(v, _);
    return p();
  };
  const h = e((...v) => {
    n(...v);
    return p();
  }, o, r);
  r.getInitialState = () => h;
  let g;
  const m = () => {
    let _;
    if (!s_storage) {
      return;
    }
    const y = ++c;
    (a = false);

    l.forEach((N) => {
      let k;
      return N((k = o()) != null ? k : h);
    });

    const w =
      ((_ = s.onRehydrateStorage) == null
        ? undefined
        : _.call(s, (v = o()) != null ? v : h)) || undefined;
    return mc(s_storage.getItem.bind(s_storage))(s.name)
      .then((N) => {
        if (N) {
          if (typeof N.version == "number" && N.version !== s.version) {
            if (s.migrate) {
              const k = s.migrate(N.state, N.version);
              return k instanceof Promise ? k.then(S => [true, S]) : [true, k];
            }
            console.error(
              "State loaded from storage couldn't be migrated since no migrate function was provided"
            );
          } else {
            return [false, N.state];
          }
        }
        return [false, undefined];
      })
      .then((N) => {
      let k;
      if (y !== c) {
        return;
      }
      const [S, b] = N;
      (g = s.merge(b, (k = o()) != null ? k : h));
      n(g, true);

      if (S) {
        return p();
      }
    })
      .then(() => {
      if (y === c) {
        w?.(o(), undefined);
        (g = o());
        (a = true);
        u.forEach(N => N(g));
      }
    })
      .catch((N) => {
      if (y === c) {
        w?.(undefined, N);
      }
    });
  };

  (r.persist = {
    setOptions: (v) => {
      (s = { ...s, ...v });

      if (v.storage) {
        (s_storage = v.storage);
      }
    },
    clearStorage: () => {
      s_storage?.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => m(),
    hasHydrated: () => a,
    onHydrate: v => {
      l.add(v);

      return () => {
        l.delete(v);
      };
    },
    onFinishHydration: v => {
      u.add(v);

      return () => {
        u.delete(v);
      };
    },
  });

  if (!s.skipHydration) {
    m();
  }

  return g || h;
};

const Mh = rt((e, t) => ({
  isOpen: false,
  images: [],
  initialIndex: 0,
  sourceRect: null,
  resolveSourceRect: null,
  session: 0,
  zoomable: false,
  thumbs: false,

  open: (n, o = 0, r = null, s = null, a) => e({
    isOpen: true,
    images: n,
    initialIndex: o,
    sourceRect: r,
    resolveSourceRect: s,
    zoomable: a?.zoomable ?? false,
    thumbs: a?.thumbs ?? false,
    session: t().session + 1,
  }),

  close: (n) => {
    if (n === undefined || n === t().session) {
      e({
        isOpen: false,
        images: [],
        initialIndex: 0,
        sourceRect: null,
        resolveSourceRect: null,
        zoomable: false,
        thumbs: false,
      });
    }
  }
}));

const Yb = rt((e, t) => ({
  isOpen: false,
  options: null,
  session: 0,
  open: n => e({ isOpen: true, options: n, session: t().session + 1 }),
  close: () => e({ isOpen: false, options: null })
}));

const Kb = rt((e, t) => ({
  navigatedInApp: false,

  markNavigated: () => {
    if (!t().navigatedInApp) {
      e({ navigatedInApp: true });
    }
  }
}));

const pt = {
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

function Ge(e) {
  return (
    e instanceof Error && "status" in e && "code" in e && e.name === "ApiError"
  );
}

const H = {
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
    PROFILE_USERNAME_RESERVED: "PROFILE_USERNAME_RESERVED",
    PROFILE_RESTRICTION_ACTIVE: "PROFILE_RESTRICTION_ACTIVE",
    PROFILE_MODIFICATION_RESTRICTED: "PROFILE_MODIFICATION_RESTRICTED",
    CONTENT_MODERATION_FAILED: "CONTENT_MODERATION_FAILED",
    FILE_TOO_LARGE: "FILE_TOO_LARGE",
    UNSUPPORTED_FILE_TYPE: "UNSUPPORTED_FILE_TYPE",
    UPLOAD_FAILED: "UPLOAD_FAILED",
    VIDEO_REQUIRES_VERIFICATION: "VIDEO_REQUIRES_VERIFICATION",
  };

const Xb = 4000/* 4e3 */;

const li = rt((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const o = t().toasts.find(
      a => a.type === n.type && a.message === n.message
    );
    if (o) {
      return o.id;
    }
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const s = n.duration ?? Xb;

    e(a => ({
      toasts: [...a.toasts, { ...n, id: r, duration: s }]
    }));

    if (s > 0) {
      setTimeout(() => {
        t().removeToast(r);
      }, s);
    }

    return r;
  },

  removeToast: (n) => {
    e(o => ({
      toasts: o.toasts.filter(r => r.id !== n)
    }));
  }
}));

const Dt = {
  success: (e, t) => li.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) => li.getState().addToast({ type: "error", message: e, duration: t }),
};

const Qb = {
  [H.CONTENT_MODERATION_FAILED]: "Изображение содержит запрещённый контент",
  [H.FILE_TOO_LARGE]: "Файл слишком большой",
  [H.UNSUPPORTED_FILE_TYPE]: "Неподдерживаемый формат файла",
  [H.UPLOAD_FAILED]: "Не удалось загрузить файл",
  [H.VIDEO_REQUIRES_VERIFICATION]:
    "Видео — только для верифицированных пользователей",
  [H.RATE_LIMIT_EXCEEDED]: "Слишком много запросов. Попробуйте позже",
  [H.UNAUTHORIZED]: "Требуется авторизация",
  [H.ACCESS_DENIED]: "Доступ запрещён",
  [H.NETWORK_ERROR]: "Ошибка сети. Проверьте подключение",
  [H.TIMEOUT]: "Превышено время ожидания",
  [H.VALIDATION_ERROR]: "Проверьте правильность введённых данных",
  [H.ENTITY_NOT_FOUND]: "Запрошенные данные не найдены",
  [H.ENTITY_ALREADY_EXISTS]: "Такая запись уже существует",
  [H.CAPTCHA_FAILED]: "Проверка captcha не пройдена. Попробуйте снова",
  [H.OTP_INVALID]: "Неверный код. Попробуйте снова",
  [H.ACCOUNT_DEACTIVATED]: "Аккаунт деактивирован",
  [H.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED]:
    "Почта этого домена не поддерживается",
  [H.ACCOUNT_INVALID_CREDENTIALS]: "Неверный email или пароль",
  [H.ACCOUNT_TEMPORARILY_LOCKED]:
    "Аккаунт временно заблокирован. Попробуйте позже",
  [H.ACCOUNT_CURRENT_PASSWORD_INCORRECT]: "Неверный текущий пароль",
  [H.MISSING_FLOW_TOKEN]: "Сессия истекла. Начните заново",
  [H.PROFILE_USERNAME_TAKEN]: "Этот username уже занят",
  [H.PROFILE_USERNAME_RESERVED]: "Этот username зарезервирован системой",
};

const Zb = {
  rate_limited: "Слишком много действий. Попробуйте позже",
  "This username is reserved by the system":
    "Этот username зарезервирован системой",
  "Username is already taken": "Этот username уже занят",
  "Profile not found. Please create your profile first.":
    "Сначала создайте профиль",
  "Please create your profile first": "Сначала создайте профиль",
  "Profile not found": "Профиль не найден",
  "User not found": "Пользователь не найден",
  "Banner file not found": "Файл обложки не найден",
  "You can only use your own files as banner":
    "Можно использовать только свои файлы",
  "Cannot follow yourself": "Нельзя подписаться на себя",
  "Cannot follow this user": "Подписка на пользователя недоступна",
  "Already following this user": "Вы уже подписаны",
  "Cannot block yourself": "Нельзя заблокировать себя",
  "User already blocked": "Пользователь уже заблокирован",
  "User is not blocked": "Пользователь не заблокирован",
  "You do not own this pin": "Этот значок вам не принадлежит",
  "Bio too long": "Описание профиля слишком длинное",
  "Username is required": "Укажите username",
  "Username cannot be empty": "Username не может быть пустым",
  "Username must start with a letter": "Username должен начинаться с буквы",
  "Display name is required": "Укажите отображаемое имя",
  "Display name cannot be empty": "Отображаемое имя не может быть пустым",
  "Display name is too complex": "Отображаемое имя слишком сложное",
  "Display name must contain letters, numbers, or emoji":
    "Имя должно содержать буквы, цифры или эмодзи",
  "Name contains invalid characters": "Имя содержит недопустимые символы",
  "Name contains invalid invisible characters":
    "Имя содержит недопустимые невидимые символы",
  "Avatar cannot be empty": "Выберите аватар",
  "Avatar must be a single valid emoji":
    "Аватар должен состоять из одного эмодзи",
  "This symbol is not allowed": "Этот символ нельзя использовать",
  "Banner cannot be NSFW content": "Обложка содержит недопустимый контент",
  "Banner must be an image": "Обложка должна быть изображением",
  "Post not found": "Пост не найден",
  "Comment not found": "Комментарий не найден",
  "Repost not found": "Репост не найден",
  "Wall recipient not found": "Владелец стены не найден",
  "Post contains prohibited content": "Пост содержит запрещённый контент",
  "Comment contains prohibited content":
    "Комментарий содержит запрещённый контент",
  "Not allowed to edit this post": "Нельзя редактировать этот пост",
  "Not allowed to delete this post": "Нельзя удалить этот пост",
  "Not allowed to restore this post": "Нельзя восстановить этот пост",
  "Not allowed to edit this comment": "Нельзя редактировать этот комментарий",
  "Not allowed to delete this comment": "Нельзя удалить этот комментарий",
  "Not allowed to restore this comment":
    "Нельзя восстановить этот комментарий",
  "Content cannot be empty": "Текст не может быть пустым",
  "Content or attachments required": "Добавьте текст или вложение",
  "Content, attachments or poll required":
    "Добавьте текст, вложение или опрос",
  "Maximum 10 attachments allowed per post": "Максимум 10 файлов в посте",
  "Cannot write on this wall": "Публикация на этой стене недоступна",
  "Cannot write on your own wall": "Создайте обычный пост",
  "This account is private": "Это закрытый аккаунт",
  "This user has closed their wall": "Стена пользователя закрыта",
  "You do not have permission to write on this wall":
    "Нельзя публиковать на этой стене",
  "Can only pin your own posts or posts on your wall":
    "Можно закреплять только свои посты",
  "This post is not pinned": "Этот пост не закреплён",
};

const Jb = [
  {
    pattern: /^text must be at most (\d+) characters$/i,
    translate: e => `Максимум ${e[1]} символов`,
  },
  {
    pattern: /^max (\d+) attachments per message$/i,
    translate: e => `Максимум ${e[1]} файлов в сообщении`,
  },
  {
    pattern: /^file not found(?:: .+)?$/i,
    translate: () => "Вложение не найдено",
  },
  {
    pattern: /^file .+ not owned by sender$/i,
    translate: () => "Можно отправлять только свои файлы",
  },
  {
    pattern: /^Username must be at least (\d+) characters$/i,
    translate: e => `Username: минимум ${e[1]} символов`,
  },
  {
    pattern: /^Username must be at most (\d+) characters$/i,
    translate: e => `Username: максимум ${e[1]} символов`,
  },
  {
    pattern: /^Display name must be between (\d+) and (\d+) characters$/i,
    translate: e => `Имя: от ${e[1]} до ${e[2]} символов`,
  },
];

const e1 = {
  INVALID_EMAIL: H.VALIDATION_ERROR,
  INVALID_PASSWORD: H.VALIDATION_ERROR,
  EMAIL_DOMAIN_NOT_ALLOWED: H.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED,
  CONFLICT: H.ENTITY_ALREADY_EXISTS,
  INVALID_CREDENTIALS: H.ACCOUNT_INVALID_CREDENTIALS,
  USER_INACTIVE: H.ACCOUNT_DEACTIVATED,
  TURNSTILE_TOKEN_MISSING: H.CAPTCHA_FAILED,
  TURNSTILE_API_ERROR: H.CAPTCHA_FAILED,
  TURNSTILE_ERROR: H.CAPTCHA_FAILED,
  TURNSTILE_VERIFICATION_FAILED: H.CAPTCHA_FAILED,
  INVALID_FLOW_TOKEN: H.MISSING_FLOW_TOKEN,
  NO_PENDING_OTP: H.MISSING_FLOW_TOKEN,
  INVALID_OTP_FORMAT: H.OTP_INVALID,
  ACCOUNT_NOT_FOUND: H.ENTITY_NOT_FOUND,
  CURRENT_PASSWORD_INCORRECT: H.ACCOUNT_CURRENT_PASSWORD_INCORRECT,
  INVALID_OLD_PASSWORD: H.ACCOUNT_CURRENT_PASSWORD_INCORRECT,
  USERNAME_TAKEN: H.PROFILE_USERNAME_TAKEN,
  USERNAME_RESERVED: H.PROFILE_USERNAME_RESERVED,
  PROFILE_NOT_FOUND: H.ENTITY_NOT_FOUND,
  USER_NOT_FOUND: H.ENTITY_NOT_FOUND,
  FILE_NOT_FOUND: H.ENTITY_NOT_FOUND,
  NOT_FOUND: H.ENTITY_NOT_FOUND,
  FORBIDDEN: H.ACCESS_DENIED,
  TOO_MANY_REQUESTS: H.RATE_LIMIT_EXCEEDED,
};

function Oh(e) {
  return e1[e] ?? e;
}
function t1(e) {
  const Zb_e = Zb[e];
  if (Zb_e) {
    return Zb_e;
  }
  for (const { pattern, translate } of Jb) {
    const r = e.match(pattern);
    if (r) {
      return translate(r);
    }
  }
  return e;
}
function al(e, t = "Произошла ошибка") {
  const n = t1(t);
  return n !== t || /[А-Яа-яЁё]/.test(n) || !e ? n : Qb[Oh(e)] ?? n;
}
const Dh = "/api";

const D = {
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
  },
  users: {
    me: "/users/me",
    profile: e => `/users/${e}`,
    updateProfile: "/users/me",
    privacy: "/users/me/privacy",
    follow: e => `/users/${e}/follow`,
    followers: e => `/users/${e}/followers`,
    following: e => `/users/${e}/following`,
    topClans: "/users/stats/top-clans",
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
  postNotebooks: { inventory: "/post-notebooks/inventory" },
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
    markAllRead: "/notifications/read-all",
    stream: "/notifications/stream",
    settings: "/notifications/settings",
  },
  files: {
    upload: "/files/upload",
    uploadAvatar: "/files/avatar",
    delete: e => `/files/${e}`,
  },
  profileAvatar: { state: "/profile-avatar/" },
  reports: { create: "/reports" },
  hashtags: {
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
  platform: {
    changelog: "/platform/changelog",
    announcements: "/platform/announcements",
  },
  sessions: {
    list: "/v1/auth/sessions",
    revoke: e => `/v1/auth/sessions/${e}`,
    revokeOthers: "/v1/auth/sessions",
  },
};

let zr = null;
const gc = new Set();
function an() {
  return zr;
}
function cl(e) {
  if (zr !== e) {
    zr = e;
    for (const t of gc) {
      t(e);
    }
  }
}
function ll(e) {
  gc.add(e);

  return () => {
    gc.delete(e);
  };
}
function _c() {
  return zr ? { Authorization: `Bearer ${zr}` } : {};
}
let vc = null;
function Uh(e) {
  vc = e;
}
async function n1(e) {
  const navigator_locks = navigator.locks;
  return navigator_locks?.request ? await navigator_locks.request("auth:refresh", e) : e();
}
async function Qo() {
  return vc
    ? gr ||
        ((gr = n1(vc).finally(() => {
          gr = null;
        })),
        gr)
    : null;
}
async function Fh(e, t = {}) {
  const n = () => {
    const s = new Headers(t.headers);
    const a = an();

    if (a) {
      s.set("Authorization", `Bearer ${a}`);
    }

    return fetch(e, { credentials: "include", ...t, headers: s });
  };

  const o = await n();
  return o.status !== 401 || !(await Qo()) ? o : n();
}
function o1(e, t = Date.now()) {
  if (e && /^\d+(\.\d+)?$/.test(e.trim())) {
    const o = Number(e);
    if (Number.isFinite(o)) {
      return Math.max(1, Math.ceil(o));
    }
  }
  const n = e ? Date.parse(e) : NaN;
  return Number.isFinite(n) ? Math.max(1, Math.ceil((n - t) / 1000/* 1e3 */)) : 30;
}
function vd(e, t) {
  const n = e.split("?")[0];
  return `${t}:${n}`;
}
class r1 {
  deadlines = new Map();
  generation = 0;
  now;
  constructor(t = Date.now) {
    this.now = t;
  }
  clear() {
    this.deadlines.clear();
    this.generation++;
  }
  blocked(t, n) {
    const o = vd(t, n);
    const r = Math.max(this.deadlines.get(o) ?? 0, this.deadlines.get("*") ?? 0);
    return r <= this.now()
      ? (this.deadlines.delete(o), null)
      : this.error(Math.ceil((r - this.now()) / 1000/* 1e3 */));
  }
  observe(t, n, o, r) {
    const s = o1(t.headers.get("Retry-After"), this.now());
    if (r === this.generation) {
      for (const [l, u] of this.deadlines) {
        if (u <= this.now()) {
          this.deadlines.delete(l);
        }
      }

      if (this.deadlines.size >= 256) {
        this.deadlines.delete(this.deadlines.keys().next().value);
      }

      const a = t.headers.get("X-RateLimit-Scope");
      const c = a === "ip_flood" || a === "global_flood" ? "*" : vd(n, o);
      this.deadlines.set(
        c,
        Math.max(this.deadlines.get(c) ?? 0, this.now() + s * 1000/* 1e3 */)
      );
    }
    return this.error(s);
  }
  error(t) {
    return Object.assign(
      new Error(`Слишком много запросов. Повторите через ${t} сек.`),
      {
        name: "ApiError",
        status: 429,
        code: "RATE_LIMIT_EXCEEDED",
        retryAfterSeconds: t,
      }
    );
  }
}
function yd(e) {
  if (!e) {
    return "guest";
  }
  try {
    const t = e.split(".");
    if (t.length !== 3) {
      throw new Error("Not a JWT");
    }
    const n = t[1].replace(/-/g, "+").replace(/_/g, "/");
    const o = JSON.parse(atob(n.padEnd(Math.ceil(n.length / 4) * 4, "=")));
    if (typeof o.sub != "string" ||
    !o.sub ||
    (o.iss !== undefined && typeof o.iss != "string")) {
      throw new Error("No identity");
    }
    return JSON.stringify(["viewer", o.iss ?? "", o.sub]);
  } catch {
    return `opaque:${e}`;
  }
}
function s1(e) {
  let t = yd(e);
  return (n) => {
    const o = yd(n);
    return o === t ? false : ((t = o), true);
  };
}
function Ui(e) {
  const t = s1(an());
  return ll((n) => {
    if (t(n)) {
      e();
    }
  });
}
const eo = new r1();
Ui(() => eo.clear());
function i1() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    (t = crypto.randomUUID());
    localStorage.setItem(e, t);
  }

  return t;
}
const wd = i1();
class ul {
  baseURL;
  defaultTimeout;
  defaultHeaders;
  onUnauthorizedCallback = null;
  constructor(t) {
    (this.baseURL = t.baseURL);
    (this.defaultTimeout = t.timeout ?? 30000/* 3e4 */);

    (this.defaultHeaders = {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        ...t.headers,
      });
  }
  setOnUnauthorizedCallback(t) {
    this.onUnauthorizedCallback = t;
  }
  isToastSkipped(t, n) {
    return t ? t === true || t.includes(n) : false;
  }
  notifyError(t) {
    if (t.status !== pt.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        Dt.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      Dt.error(al(t.code, t.message || "Произошла ошибка"));
    }
  }
  buildUrl(t) {
    const n = this.baseURL.replace(/\/$/, "");
    const o = t.startsWith("/") ? t : `/${t}`;
    return `${n}${o}`;
  }
  buildHeaders(t) {
    const n = new Headers({ ...this.defaultHeaders, ...t, ..._c() });
    n.set("X-Device-Id", wd);
    return n;
  }
  async handleResponse(t) {
    if (t.status === pt.NO_CONTENT) {
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
      const s = o_error && typeof o_error == "object" ? o_error : o;
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
      case pt.BAD_REQUEST:
        {
          return H.BAD_REQUEST;
        }
      case pt.UNAUTHORIZED:
        {
          return H.UNAUTHORIZED;
        }
      case pt.FORBIDDEN:
        {
          return H.ACCESS_DENIED;
        }
      case pt.NOT_FOUND:
        {
          return H.ENTITY_NOT_FOUND;
        }
      case pt.CONFLICT:
        {
          return H.ENTITY_ALREADY_EXISTS;
        }
      case pt.UNPROCESSABLE_ENTITY:
        {
          return H.VALIDATION_ERROR;
        }
      case pt.TOO_MANY_REQUESTS:
        {
          return H.RATE_LIMIT_EXCEEDED;
        }
      default:
        {
          return H.UNKNOWN_ERROR;
        }
    }
  }
  createApiError(t, n, o, r) {
    const s = new Error(n);
    (s.status = t);
    (s.code = Oh(o));
    (s.errors = r);
    (s.name = "ApiError");
    return s;
  }
  async executeRequest(t, n, o, r, s = false) {
    const a = this.buildUrl(n);
    const c = this.buildHeaders(r?.headers);
    const eo_generation = eo.generation;
    const u = new AbortController();
    const d = r?.timeout ?? this.defaultTimeout;

    const p = setTimeout(() => u.abort(), d);

    try {
      const f = eo.blocked(a, t);
      if (f) {
        throw f;
      }

      const g =
          o instanceof ArrayBuffer ||
          (typeof Uint8Array !== "undefined" && o instanceof Uint8Array) ||
          (typeof Blob !== "undefined" && o instanceof Blob)
            ? o
            : o != null
            ? JSON.stringify(o)
            : undefined;

      const m = { ...r };
      delete m.headers;
      delete m.skipErrorToast;
      const v = await fetch(a, {
        method: t,
        body: g,
        signal: u.signal,
        credentials: "include",
        ...m,
        headers: c,
      });
      clearTimeout(p);

      if (v.status === 429) {
        throw eo.observe(v, a, t, eo_generation);
      }

      const _ =
        n.startsWith("/auth/") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/reset-") ||
        n.startsWith("/login/");
      if (v.status === pt.UNAUTHORIZED && !s && !_ && an()) {
        if (await Qo()) {
          return this.executeRequest(t, n, o, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          pt.UNAUTHORIZED,
          "Session expired",
          H.UNAUTHORIZED
        );
      }
      return await this.handleResponse(v);
    } catch (f) {
      clearTimeout(p);

      if (f instanceof Error) {
        const h = m => !s && !this.isToastSkipped(r?.skipErrorToast, m.status);
        if (f.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", H.TIMEOUT);

          if (h(m)) {
            this.notifyError(m);
          }

          throw m;
        }
        if (f.name === "ApiError") {
          const m = f;

          if (h(m)) {
            this.notifyError(m);
          }

          throw f;
        }
        const g = this.createApiError(
          0,
          f.message || "Network error",
          H.NETWORK_ERROR
        );

        if (h(g)) {
          this.notifyError(g);
        }

        throw g;
      }

      throw f;
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
  async uploadFormData(t, n, o, r = false) {
    const s = this.buildUrl(t);
    const eo_generation = eo.generation;
    const c = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": wd, ..._c() };
    const l = new AbortController();
    const u = o?.timeout ?? this.defaultTimeout;

    const d = setTimeout(() => l.abort(), u);

    try {
      const p = eo.blocked(s, "POST");
      if (p) {
        throw p;
      }
      const f = await fetch(s, {
        method: "POST",
        headers: c,
        body: n,
        signal: l.signal,
        credentials: "include",
      });
      clearTimeout(d);

      if (f.status === 429) {
        throw eo.observe(f, s, "POST", eo_generation);
      }

      if (f.status === pt.UNAUTHORIZED && !r && an()) {
        if (await Qo()) {
          return this.uploadFormData(t, n, o, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          pt.UNAUTHORIZED,
          "Session expired",
          H.UNAUTHORIZED
        );
      }
      return await this.handleResponse(f);
    } catch (p) {
      clearTimeout(d);

      if (p instanceof Error) {
        if (p.name === "AbortError") {
          const h = this.createApiError(0, "Request timeout", H.TIMEOUT);

          if (!r) {
            this.notifyError(h);
          }

          throw h;
        }
        if (p.name === "ApiError") {
          if (!r) {
            this.notifyError(p);
          }

          throw p;
        }
        const f = this.createApiError(
          0,
          p.message || "Network error",
          H.NETWORK_ERROR
        );

        if (!r) {
          this.notifyError(f);
        }

        throw f;
      }

      throw p;
    }
  }
}
const L = new ul({ baseURL: Dh, timeout: 30000/* 3e4 */ });
const Pt = new ul({ baseURL: "/api/v1/auth", timeout: 30000/* 3e4 */ });
const qr = new Set();
let Or = null;
const a1 = 30000/* 3e4 */;
function c1() {
  if (Or === null) {
    (Or = window.setInterval(() => {
        qr.forEach(e => e());
      }, a1));
  }
}
function l1() {
  if (Or !== null) {
    clearInterval(Or);
    (Or = null);
  }
}
function u1(e) {
  qr.add(e);

  if (qr.size === 1) {
    c1();
  }
}
function d1(e) {
  qr.delete(e);

  if (qr.size === 0) {
    l1();
  }
}
function la(e) {
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
function Bh(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const o = n ? t : 0;

  const [r, s] = $(() => n ? la(new Date(o)) : "");

  M(() => {
    if (!n) {
      s("");
      return;
    }
    const a = new Date(o);
    s(la(a));
    const c = () => {
      s(la(a));
    };
    u1(c);

    return () => d1(c);
  }, [o, n]);

  return r;
}
const bd = 1174;
function bn() {
  const [e, t] = $(() => typeof window === "undefined" ? false : window.innerWidth < bd);

  M(() => {
    const n = window.matchMedia(`(max-width: ${bd - 1}px)`);

    const o = (r) => {
      t(r.matches);
    };

    t(n.matches);
    n.addEventListener("change", o);

    return () => {
      n.removeEventListener("change", o);
    };
  }, []);

  return e;
}
const f1 = er({ isHidden: false });

const p1 = () => {
  const [e, t] = $(false);
  const n = R(0);

  M(() => {
    const o = () => {
      const window_scrollY = window.scrollY;
      const s = window_scrollY - n.current;

      if (s > 10 && window_scrollY > 50) {
        t(true);
      } else if (s < -10) {
        t(false);
      }

      (n.current = window_scrollY);
    };
    window.addEventListener("scroll", o, { passive: true });

    return () => window.removeEventListener("scroll", o);
  }, []);

  return e;
};

function Fi(e = "", t = []) {
  const [n, o] = $(e);
  const [r, s] = $(t);
  const a = R(null);

  const c = A((d, p) => {
    o(d);
    s(p);
  }, []);

  const l = A((d) => {
    a.current?.insertText(d);
  }, []);

  const u = A(() => {
    o("");
    s([]);
  }, []);

  return {
    text: n,
    spans: r,
    editorRef: a,
    handleChange: c,
    insertText: l,
    reset: u,
    setText: o,
    setSpans: s,
  };
}
function h1({
  sentinelRef: e,
  hasMore: t,
  isLoading: n,
  onLoadMore: o,
  rootMargin: r = "100px",
}) {
  M(() => {
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
          o();
        }
      },
      { rootMargin: r }
    );
    a.observe(e_current);

    return () => a.disconnect();
  }, [t, n, o, r, e]);
}
function m1({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  gap: o = 0,
  getItemKey: r = l => l,
  initialMeasuredHeights: s,
  scrollElement: a,
  initialScrollTop: c,
}) {
  const [, l] = $(0);

  const u = () => a
    ? Math.max(0, a.scrollTop)
    : c !== undefined
    ? c
    : typeof window !== "undefined"
    ? Math.max(0, window.scrollY)
    : 0;

  const d = () => a ? a.clientHeight : typeof window !== "undefined" ? window.innerHeight : 0;

  const p = R(s ?? new Map());
  const f = R(null);
  const h = R(null);
  const g = R(new Map());
  const m = R(r);
  m.current = r;

  const v = b => p.current.get(r(b)) ?? t;

  const _ = (b) => {
    let T = 0;
    for (let C = 0; C < b; C++) {
      T += v(C) + o;
    }
    return T;
  };

  const y = () => {
    if (e === 0) {
      return 0;
    }
    let b = 0;
    for (let T = 0; T < e; T++) {
      b += v(T);
    }
    (b += Math.max(0, e - 1) * o);
    return b;
  };

  const w = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const b = u();
    const T = d();
    let C = 0;
    let E = 0;
    for (let P = 0; P < e; P++) {
      const j = v(P) + o;
      if (E + j > b) {
        C = P;
        break;
      }
      E += j;
    }
    let x = C;
    let I = 0;
    for (let P = C; P < e && ((I += v(P) + o), (x = P), !(I >= T)); P++)
      {}
    return { start: Math.max(0, C - n), end: Math.min(e - 1, x + n) };
  };

  const N = () => {
    if (e === 0) {
      return [];
    }
    const { start, end } = w();
    const C = [];
    for (let E = start; E <= end; E++) {
      C.push({ index: E, key: r(E), start: _(E) });
    }
    return C;
  };

  if (!h.current) {
    (h.current = new ResizeObserver((b) => {
      let T = false;
      for (const C of b) {
        const C_target = C.target;
        const x = g.current.get(C_target);
        if (x === undefined) {
          continue;
        }
        const I = C.borderBoxSize && C.borderBoxSize[0];
        const P = I ? I.blockSize : C_target.getBoundingClientRect().height;

        if (P > 0 && p.current.get(x) !== P) {
          p.current.set(x, P);
          (T = true);
        }
      }

      if (T) {
        l(C => C + 1);
      }
    }));
  }

  const k = A((b, T) => {
    if (!b) {
      return;
    }
    const C = m.current(T);
    g.current.set(b, C);
    h.current?.observe(b, { box: "border-box" });
    const E = b.getBoundingClientRect().height;

    if (E > 0 && p.current.get(C) !== E) {
      p.current.set(C, E);
      l(x => x + 1);
    }
  }, []);

  ct(() => {
    const b = a ?? window;

    const T = () => {
      if (!f.current) {
        (f.current = requestAnimationFrame(() => {
          (f.current = null);

          l(C => C + 1);
        }));
      }
    };

    b.addEventListener("scroll", T, { passive: true });

    l(C => C + 1);

    return () => {
      b.removeEventListener("scroll", T);

      if (f.current) {
        cancelAnimationFrame(f.current);
      }
    };
  }, [a]);

  M(
    () => () => {
      h.current?.disconnect();
      g.current.clear();
    },
    []
  );

  const S = A(() => new Map(p.current), []);
  return {
    virtualItems: N(),
    totalSize: y(),
    measureElement: k,
    getMeasuredHeights: S,
  };
}
const g1 = "https://cdn.xn--d1ah4a.com/public/assets/icons";
const Ed = "itd:icons:checkedAt";
const _1 = 1800 * 1000/* 1e3 */;
const ui = new Map();
const ua = new Map();
const Gs = new Map();

const v1 = e => `${g1}/${e}.svg`;

const y1 = (() => {
  try {
    const e = Number(localStorage.getItem(Ed) ?? 0);
    return Date.now() - e < _1
      ? false
      : (localStorage.setItem(Ed, String(Date.now())), true);
  } catch {
    return false;
  }
})();

const w1 = e => /^\s*<svg[\s>]/i.test(e) &&
!/<script|<foreignObject|\son[a-z]+\s*=/i.test(e);

const b1 = { liked: "--accent-liked" };
const E1 = /fill\s*=\s*["'](#[0-9a-fA-F]{3,8})["']/;

const S1 = (e, t) => {
  const b1_e = b1[e];
  if (!b1_e || typeof document === "undefined") {
    return;
  }
  const o = E1.exec(t)?.[1];

  if (o) {
    document.documentElement.style.setProperty(b1_e, o);
  }
};

const k1 = (e, t) => {
  ui.set(e, t);
  S1(e, t);

  Gs.get(e)?.forEach(n => n(t));
};

const N1 = (e, t = false) => {
  if (!t) {
    const r = ui.get(e);
    if (r) {
      return Promise.resolve(r);
    }
    const s = ua.get(e);
    if (s) {
      return s;
    }
  }
  const n = t ? "reload" : y1 ? "no-cache" : "force-cache";

  const o = fetch(v1(e), { cache: n })
    .then(async (r) => {
      if (!r.ok) {
        return null;
      }
      const s = await r.text();
      return w1(s) ? (k1(e, s), s) : null;
    })
    .catch(() => null)
    .finally(() => ua.delete(e));

  ua.set(e, o);
  return o;
};

const C1 = (e, t) => e.replace(/<svg\b([^>]*)>/i, (n, o) => {
  const r = /\bwidth\s*=\s*["']([^"']+)["']/i.exec(o)?.[1];
  const s = /\bheight\s*=\s*["']([^"']+)["']/i.exec(o)?.[1];
  let a = o.replace(/\s(width|height)\s*=\s*["'][^"']*["']/gi, "");

  if (!/\bviewBox\s*=/i.test(a) &&
    r &&
    s) {
    (a += ` viewBox="0 0 ${r} ${s}"`);
  }

  return `<svg${a} width="${t}" height="${t}">`;
});

const dl = ({ name: e, size: t = 20, className: n }) => {
  const [o, r] = $(() => ui.get(e) ?? null);
  M(() => {
    r(ui.get(e) ?? null);
    const a = Gs.get(e) ?? new Set();
    a.add(r);
    Gs.set(e, a);
    N1(e);

    return () => {
      a.delete(r);

      if (a.size === 0) {
        Gs.delete(e);
      }
    };
  }, [e]);
  const s = typeof t == "number" ? `${t}px` : t;
  return i("span", {
    "data-icon": e,
    "aria-hidden": "true",
    className: n,
    style: { display: "block", width: s, height: s, lineHeight: 0 },
    dangerouslySetInnerHTML: o ? { __html: C1(o, t) } : undefined,
  });
};

const T1 = ({ size: e = 18 }) => i("svg", {
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
    i("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
    i("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }),
  ],
});

const I1 = ({ size: e = 18 }) => i("svg", {
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
    i("polyline", { points: "16 18 22 12 16 6" }),
    i("polyline", { points: "8 6 2 12 8 18" }),
  ],
});

const $1 = ({ size: e = 18 }) => i("svg", {
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
    i("line", { x1: "19", y1: "4", x2: "10", y2: "4" }),
    i("line", { x1: "14", y1: "20", x2: "5", y2: "20" }),
    i("line", { x1: "15", y1: "4", x2: "9", y2: "20" }),
  ],
});

const Hh = ({ size: e = 18 }) => i("svg", {
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
    i("path", {
      d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    }),
    i("path", {
      d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    }),
  ],
});

const R1 = ({ size: e = 18 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", {
    d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
  }),
});

const A1 = ({ size: e = 18 }) => i("svg", {
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
    i("path", {
      d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94",
    }),
    i("path", {
      d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19",
    }),
    i("line", { x1: "1", y1: "1", x2: "23", y2: "23" }),
    i("path", { d: "M14.12 14.12a3 3 0 1 1-4.24-4.24" }),
  ],
});

const x1 = ({ size: e = 18 }) => i("svg", {
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
    i("path", { d: "M16 4H9a3 3 0 0 0-3 3c0 1.66 1.34 3 3 3h6" }),
    i("path", { d: "M8 20h7a3 3 0 0 0 3-3c0-1.66-1.34-3-3-3H4" }),
    i("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
  ],
});

const L1 = ({ size: e = 18 }) => i("svg", {
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
    i("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }),
    i("line", { x1: "4", y1: "21", x2: "20", y2: "21" }),
  ],
});

const P1 = ({ size: e = 18 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 18 18",
  children: i("g", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    children: [
      i("path", {
        d: "M9 2c-.53 0-1.04.219-1.414.608C7.21 2.998 7 3.526 7 4.077v4.846c0 .55.21 1.08.586 1.469.375.39.884.608 1.414.608.53 0 1.04-.219 1.414-.608.375-.39.586-.918.586-1.469V4.077c0-.55-.21-1.08-.586-1.469A1.963 1.963 0 0 0 9 2Z",
      }),
      i("path", {
        d: "M14 8v1.333c0 1.238-.527 2.425-1.464 3.3C11.598 13.508 10.326 14 9 14s-2.598-.492-3.536-1.367C4.527 11.758 4 10.571 4 9.333V8M9 14v2",
      }),
    ],
  }),
});

const M1 = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", { d: "M8 5v14l11-7z" }),
});

const O1 = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    i("path", {
      d: "M5 12L12 5L19 12",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    i("path", {
      d: "M12 19V5",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  ],
});

const Vh = ({ size: e = 20 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 20 20",
  children: i("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.833",
    d: "m17.867 9.208-7.659 7.659a5.003 5.003 0 1 1-7.075-7.075l7.659-7.659a3.335 3.335 0 1 1 4.716 4.717l-7.666 7.658a1.667 1.667 0 1 1-2.359-2.358l7.075-7.067",
  }),
});

const D1 = ({ size: e = 8 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 8 8",
  children: [
    i("g", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      clipPath: "url(#af)",
      children: i("path", { d: "M1 4h6M4 1v6" }),
    }),
    i("defs", {
      children: i("clipPath", {
        id: "af",
        children: i("path", { fill: "#fff", d: "M0 0h8v8H0z" }),
      }),
    }),
  ],
});

const U1 = ({ size: e = 8 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 8 8",
  children: i("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M1 4h6",
  }),
});

const F1 = () => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "36",
  height: "18",
  fill: "none",
  children: [
    i("path", { fill: "currentColor", d: "M12 3V0h12v3h-4v11h-4V3h-4Z" }),
    i("path", {
      fill: "currentColor",
      d: "M12 3V0h12v3h-4v11h-4V3h-4ZM9 0 3 9V0H0v14h3l6-9v9h3V0H9Z",
    }),
    i("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      d: "M34 11h2v7h-3v-4h-9v4h-3v-7c3 0 3-4 3-11h10v11Zm-7-8v8h4V3h-4Z",
      "clip-rule": "evenodd",
    }),
  ],
});

const Rt = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    i("path", {
      d: "M18 6L6 18",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    i("path", {
      d: "M6 6L18 18",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  ],
});

const fl = ({ size: e = 20 }) => i(dl, { name: "comment", size: e });

const Wh = ({ size: e = 18 }) => i("svg", {
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
    i("path", {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
    }),
    i("path", {
      d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
    }),
  ],
});

const B1 = ({ size: e = 24 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: [
    i("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      strokeWidth: "2",
    }),
    i("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "2",
      d: "M15 9l-6 6m0-6l6 6",
    }),
  ],
});

const jh = () => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none",
  children: i("path", {
    fill: "currentColor",
    "fill-rule": "evenodd",
    d: "M20.689 10.968a2.806 2.806 0 0 0-2.244-1.108H5.555c-.887 0-1.705.404-2.244 1.107a2.808 2.808 0 0 0-.485 2.455l1.65 6.112a2.83 2.83 0 0 0 2.729 2.09h9.589a2.832 2.832 0 0 0 2.729-2.09l1.65-6.111a2.804 2.804 0 0 0-.484-2.455ZM8.436 3.875h7.125a.75.75 0 0 0 0-1.5H8.436a.75.75 0 0 0 0 1.5ZM5.682 7.253h12.634a.75.75 0 0 0 0-1.5H5.682a.75.75 0 0 0 0 1.5Z",
    "clip-rule": "evenodd",
  }),
});

const zh = ({ size: e = 18 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: i("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.0463 8.361L19.6973 3.35C19.8203 3.118 19.8133 2.839 19.6773 2.613C19.5413 2.387 19.2973 2.25 19.0343 2.25H4.96533C4.55133 2.25 4.21533 2.586 4.21533 3V21C4.21533 21.414 4.55133 21.75 4.96533 21.75C5.37933 21.75 5.71533 21.414 5.71533 21V14.544L19.0443 14.365C19.3073 14.361 19.5483 14.221 19.6813 13.995C19.8143 13.768 19.8183 13.489 19.6943 13.258L17.0463 8.361Z",
    fill: "currentColor",
  }),
});

const qh = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [
    i("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2",
    }),
    i("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
    i("polyline", { points: "21 15 16 10 5 21" }),
  ],
});

const pl = ({ filled: e = false, size: t = 20, className: n }) => i(dl, { name: e ? "liked" : "like", size: t, className: n });

const hl = ({ size: e = 24 }) => i("svg", {
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
  children: i("path", { d: "M19 12a7 7 0 1 1-4.83-6.66" }),
});

const H1 = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    i("path", {
      d: "M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    i("path", {
      d: "M16 17L21 12L16 7",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    i("path", {
      d: "M21 12H9",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  ],
});

const Gh = ({ size: e = 18 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 18 18",
  children: i("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM14.25 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM3.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
  }),
});

const ml = ({ size: e = 24 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: i("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.742 13.807c-.86-1.832-.837-2.52-.798-3.773.01-.296.02-.617.02-.986C18.964 6.122 16.804 2 12 2 7.197 2 5.036 6.122 5.036 9.048c0 .368.01.69.02.986.04 1.252.062 1.941-.807 3.797-.372.928-.327 1.73.135 2.382C5.492 17.783 8.7 18 12 18s6.508-.216 7.616-1.787c.463-.653.508-1.454.125-2.406Zm-4.686 5.198c-1.848.193-3.852.192-6.13-.002a.873.873 0 0 0-.835.437.763.763 0 0 0 .125.893C9.236 21.407 10.578 22 11.994 22h.002c1.42 0 2.765-.592 3.788-1.667a.765.765 0 0 0 .122-.9c-.162-.294-.495-.458-.85-.428Z",
    clipRule: "evenodd",
  }),
});

const V1 = ({ size: e = 24 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  children: i("path", {
    fill: "currentColor",
    d: "M12 3c5 0 9 3.6 9 8a5 5 0 0 1-5 5h-1.8a1.5 1.5 0 0 0-1.5 1.5q0 .6.4 1 .3.4.4 1-.2 1.3-1.5 1.5c-5 0-9-4-9-9s4-9 9-9m-4.7 8a1.3 1.3 0 1 0 0 2.5 1.3 1.3 0 0 0 0-2.5m9-2a1.3 1.3 0 1 0 0 2.5 1.3 1.3 0 0 0 0-2.5m-7-2a1.2 1.2 0 1 0 0 2.5 1.2 1.2 0 0 0 0-2.5m4-1a1.3 1.3 0 1 0 0 2.5 1.3 1.3 0 0 0 0-2.5",
  }),
});

const yc = ({ size: e = 24 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: i("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.998 11a3.996 3.996 0 0 0 4-4c.084-2.213-1.702-4-4-4A3.995 3.995 0 0 0 8 7c0 2.213 1.787 4 3.998 4Zm6.94 6.878c-.3-1.04-.9-1.986-2.097-2.743C15.843 14.473 14.246 14 12.05 14c-4.292 0-6.39 1.892-6.987 3.878-.2.568.1 1.136.598 1.42C7.458 20.431 9.654 21 12.05 21c2.296 0 4.492-.662 6.288-1.703.5-.284.8-.851.6-1.419Z",
    clipRule: "evenodd",
  }),
});

const Sd = ({ size: e = 18 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: i("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.0397 9.25349L14.7397 3.95349C13.9837 3.19649 12.6657 3.19649 11.9097 3.95349L11.3187 4.54549C10.7487 5.11449 10.5767 5.96749 10.8957 6.75249C11.0497 7.12649 10.9647 7.55249 10.6797 7.83949L9.34373 9.17449C9.22773 9.28849 9.08673 9.37449 8.93473 9.42249L5.77073 10.4125C5.46773 10.5085 5.18573 10.6795 4.95673 10.9065C4.57773 11.2855 4.36973 11.7875 4.36973 12.3225C4.36973 12.8575 4.57873 13.3585 4.95673 13.7355L7.07573 15.8545L3.59573 19.3345C3.30273 19.6275 3.30273 20.1025 3.59573 20.3955C3.74173 20.5415 3.93373 20.6145 4.12573 20.6145C4.31773 20.6145 4.50973 20.5415 4.65573 20.3955L8.13573 16.9145L10.2577 19.0365C10.6467 19.4255 11.1587 19.6195 11.6707 19.6195C12.1837 19.6195 12.6957 19.4245 13.0867 19.0355C13.3147 18.8055 13.4847 18.5235 13.5797 18.2205L14.5687 15.0605C14.6187 14.9045 14.7037 14.7635 14.8167 14.6505L16.1537 13.3125C16.4387 13.0265 16.8627 12.9415 17.2737 13.1085C18.0197 13.4155 18.8747 13.2465 19.4477 12.6745L20.0397 12.0815C20.8187 11.3015 20.8187 10.0325 20.0397 9.25349Z",
    fill: "currentColor",
  }),
});

const gl = ({ size: e = 24 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: i("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M5 12h14M12 5v14",
  }),
});

const W1 = ({ size: e = 20 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: i("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M18 20V10M12 20V4M6 20v-6",
  }),
});

const Bi = ({ size: e = 20 }) => i(dl, { name: "share", size: e });

const Yh = ({ size: e = 24 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "none",
  children: i("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3",
    d: "m19.5 19.5-3-3M11 4.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Z",
  }),
});

const Kh = ({ size: e = 24 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: i("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 14.8a4 4 0 0 1-3.9-3.5.7.7 0 0 1 1.5-.1q0 .8.7 1.4.7.7 1.7.7c1.2 0 2.2-1 2.4-2.1q.1-.7.8-.7.6 0 .7.9c-.3 2-2 3.4-3.9 3.4m0-11c1.5 0 2.8 1.2 3 2.7H9a3 3 0 0 1 3-2.6m4.6 2.7A4.6 4.6 0 0 0 12 2.4a4.6 4.6 0 0 0-4.6 4.1C4.7 6.8 3 8.8 3 11.8v4.5c0 3.2 2 5.3 5 5.3H16c3 0 5-2.1 5-5.3v-4.5q-.2-4.7-4.4-5.3",
    clipRule: "evenodd",
  }),
});

const j1 = ({ size: e = 20, color: t = "currentColor" }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    i("path", {
      d: "M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z",
      stroke: t,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    i("path", {
      d: "M7.6 11.908c.585.76 1.445 1.234 2.4 1.234.956 0 1.816-.474 2.4-1.234M7.308 7.504v-.043m-.038-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374ZM12.692 7.504v-.043m-.005-.127a.188.188 0 1 0 .002.374.188.188 0 0 0-.002-.374Z",
      stroke: t,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  ],
});

const z1 = ({ size: e = 24 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 24 24",
  children: [
    i("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      strokeWidth: "2",
    }),
    i("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M8 12l3 3 5-6",
    }),
  ],
});

const q1 = ({ size: e = 48 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    i("circle", {
      cx: "24",
      cy: "24",
      r: "24",
      fill: "#2AABEE",
      fillOpacity: "0.12",
    }),
    i("svg", {
      x: "8",
      y: "8",
      width: "32",
      height: "32",
      viewBox: "0 0 1000 1000",
      children: i("path", {
        d: "M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z",
        fill: "#2AABEE",
      }),
    }),
  ],
});

const Xh = ({ size: e = 18 }) => i("svg", {
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
    i("polyline", { points: "3 6 5 6 21 6" }),
    i("path", {
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    }),
    i("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
    i("line", { x1: "14", y1: "11", x2: "14", y2: "17" }),
  ],
});

const G1 = ({ size: e = 16 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 16 16",
  children: [
    i("path", {
      fill: "#0080FF",
      d: "M6.724.821a1.63 1.63 0 0 1 2.858.051l.556 1.042a1.634 1.634 0 0 0 1.672.856l1.155-.166c1.263-.181 2.238 1.108 1.742 2.303L14.253 6a1.69 1.69 0 0 0 .385 1.863l.847.815c.927.891.544 2.47-.685 2.821l-1.122.32a1.663 1.663 0 0 0-1.192 1.468l-.098 1.181c-.108 1.294-1.56 1.974-2.596 1.216l-.946-.693a1.62 1.62 0 0 0-1.872-.033l-.969.658c-1.06.721-2.49-.01-2.552-1.306l-.058-1.184a1.666 1.666 0 0 0-1.141-1.51l-1.11-.36C-.073 10.864-.402 9.272.556 8.413l.874-.783a1.69 1.69 0 0 0 .448-1.849l-.416-1.108c-.454-1.212.565-2.466 1.821-2.24l1.148.207a1.632 1.632 0 0 0 1.7-.796L6.724.82Z",
    }),
    i("path", {
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.333",
      d: "M10.667 6.667 7.11 10.222 5.334 8.444",
    }),
  ],
});

const Qh = ({ size: e = 20 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  fill: "none",
  viewBox: "0 0 20 20",
  children: [
    i("path", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      d: "M2 10s2.91-6 8-6 8 6 8 6-2.91 6-8 6-8-6-8-6Z",
    }),
    i("path", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      d: "M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    }),
  ],
});

const Y1 = "Jc1P";
const K1 = "gygN";
const X1 = "DhJy";
const Q1 = "r9Vp";
const Z1 = "CZX6";
const J1 = "c4AO";
const eE = "S2Zq";
const tE = "wmLy";
const nE = "GUZ3";
const oE = "FuAm";
const rE = "ylVs";
const sE = "JP6N";
const iE = "c3tN";
const aE = "ickT";
const cE = "M8eH";
const lE = "wJCu";
const uE = "Xoyz";

const qe = {
  aside: Y1,
  asideBottom: K1,
  logoutButton: X1,
  asideBrand: Q1,
  asideBrandVersion: Z1,
  nav: J1,
  navItem: eE,
  active: tE,
  iconWrapper: nE,
  portalButton: oE,
  portalActive: rE,
  portalImage: sE,
  badge: iE,
  brandSpider: aE,
  spiderThread: cE,
  spiderBody: lE,
  spiderLegs: uE,
};

const he = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  VERIFY_EMAIL: "/verify-email",
  RESET_PASSWORD: "/reset-password",
  ONBOARDING: "/onboarding",
  TERMS: "/terms",
  PRIVACY: "/privacy",
  LEGAL: "/legal",
  COOKIES: "/cookies",
  EXTERNAL: "/external",
  SUPPORT: "/support",
  CHILD_SAFETY: "/child-safety",
  EVENT: "/event",
  ALICE_EVENT: "/event/alice-ai",
  SHOP: "/shop",
  SUBSCRIPTION_TERMS: "/subscription-terms",
  RECURRING_TERMS: "/recurring-terms",
};

const kd = [
  he.SHOP,
  he.LOGIN,
  he.REGISTER,
  he.FORGOT_PASSWORD,
  he.RESET_PASSWORD,
  he.VERIFY_EMAIL,
  he.TERMS,
  he.PRIVACY,
  he.LEGAL,
  he.COOKIES,
  he.EXTERNAL,
  he.SUPPORT,
  he.CHILD_SAFETY,
  he.SUBSCRIPTION_TERMS,
  he.RECURRING_TERMS,
];

const _l = [
  he.LOGIN,
  he.REGISTER,
  he.FORGOT_PASSWORD,
  he.RESET_PASSWORD,
  he.VERIFY_EMAIL,
  he.ONBOARDING,
];

function dE() {
  const e = rt(() => ({
    status: "checking",
    enabled: false
  }));
  let t = 0;
  function n(o) {
    return typeof o != "boolean"
      ? false
      : (t++, e.setState({ status: o ? "allowed" : "denied", enabled: o }), true);
  }
  return {
    store: e,
    applyPresence: n,
    beginProbe: () => ++t,
    resolveProbe(o, r) {
      if (o !== t) {
        return;
      }
      const s = r && typeof r == "object" ? r.enabled : undefined;

      if (!n(s)) {
        e.setState({ status: "error" });
      }
    },
    rejectProbe(o) {
      if (o === t) {
        e.setState({ status: "error" });
      }
    },
  };
}
const vl = dE();
const vl_store = vl.store;

const fE = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      HttpClient: ul,
      authHeader: _c,
      authHttpClient: Pt,
      authorizedFetch: Fh,
      getAccessToken: an,
      httpClient: L,
      refreshAccessToken: Qo,
      setAccessToken: cl,
      setRefreshHandler: Uh,
      subscribeAccessToken: ll,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const pE = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const hE = ["video/mp4", "video/webm", "video/quicktime"];
const di = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const mE = ".mp4,.webm,.mov";

const Uo = {
  async uploadBannerDrawing(e) {
    return L.post("/files/banner-drawing", e);
  },
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await L.uploadFormData(D.files.upload, t, { timeout: 300 * 1000/* 1e3 */ });
  },
  async uploadAvatar(e) {
    const t = new FormData();
    t.append("file", e);
    return L.uploadFormData(D.files.uploadAvatar, t, { timeout: 120 * 1000/* 1e3 */ });
  },
  async deleteFile(e) {
    await L.delete(D.files.delete(e));
  },
  isValidImageType(e) {
    return pE.includes(e.type);
  },
  isValidVideoType(e) {
    return hE.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

const gE = {
  async getChangelog() {
    const e = await L.get(D.platform.changelog);
    return Array.isArray(e) ? e : e?.data ?? [];
  },
  async getAnnouncements() {
    const e = await L.get(D.platform.announcements);
    return Array.isArray(e) ? e : e?.announcements ?? [];
  },
};

class yl {
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
const da = { maxContours: 24, maxPointsPerContour: 96, maxTotalPoints: 720 };
function _E(e) {
  if (!Array.isArray(e) || e.length < 1 || e.length > da.maxContours) {
    return null;
  }
  const n = [];
  for (const o of e) {
    if (!Array.isArray(o) ||
    o.length < 3 ||
    o.length > da.maxPointsPerContour ||
    (t += o.length) > da.maxTotalPoints) {
      return null;
    }
    const r = [];
    for (const u of o) {
      if (!Array.isArray(u) ||
      u.length !== 2 ||
      ![u[0], u[1]].every(f => Number.isInteger(f) && f >= 0 && f <= 1000/* 1e3 */)) {
        return null;
      }
      const d = [u[0] === 0 ? 0 : u[0], u[1] === 0 ? 0 : u[1]];
      const p = r.at(-1);

      if ((!p || p[0] !== d[0] || p[1] !== d[1])) {
        r.push(d);
      }
    }
    const s = r[0];
    const a = r.at(-1);

    if (s && a && s[0] === a[0] && s[1] === a[1]) {
      r.pop();
    }

    if (r.length < 3 || new Set(r.map(u => u.join(","))).size < 3) {
      return null;
    }

    const [c, l] = r;
    if (!r.some(
      u => (l[0] - c[0]) * (u[1] - c[1]) !== (l[1] - c[1]) * (u[0] - c[0])
    )) {
      return null;
    }
    n.push(r);
  }
  return n;
}
function Zh(e) {
  const t = _E(e);
  return t !== null && JSON.stringify(t) === JSON.stringify(e);
}
const Nd = {
  pumpkin: [
    "halloween.pumpkin.grin",
    "halloween.pumpkin.wink",
    "halloween.pumpkin.cat",
    "halloween.pumpkin.custom",
  ],
  frame: ["halloween.frame.sweet-tooth"],
  pin: ["halloween.pin.full-jar", "halloween.pin.participant"],
};
function vE({ assetKey: e, parameters: t }) {
  const n = Object.keys(t).sort();
  const { glow, thanks, templateId } = t;

  const a = n.filter(c => c !== "glow" && c !== "thanks").join(",");

  return (n.includes("glow") &&
    !(Number.isSafeInteger(glow) && glow >= 0 && glow <= 5)) ||
    (n.includes("thanks") && !(Number.isSafeInteger(thanks) && thanks >= 0)) ||
    typeof templateId != "string"
    ? false
    : templateId === "custom"
    ? e === "halloween.pumpkin.custom" &&
      a === "contours,templateId" &&
      Zh(t.contours)
    : a === "templateId" && e === `halloween.pumpkin.${templateId}`;
}
function yE(e) {
  return e.slot === "pumpkin" ? vE(e) : Object.keys(e.parameters).length === 0;
}
function cr(e) {
  if (!e || typeof e != "object") {
    return null;
  }
  const t = e;
  if (typeof t.eventId != "string" ||
  !/^[a-z0-9][a-z0-9_-]{0,99}$/.test(t.eventId) ||
  !Number.isSafeInteger(t.lifecycleEpoch) ||
  t.lifecycleEpoch < 1 ||
  !Number.isSafeInteger(t.revision) ||
  t.revision < 1 ||
  typeof t.expiresAt != "string" ||
  !Number.isFinite(Date.parse(t.expiresAt)) ||
  !Array.isArray(t.effects) ||
  t.effects.length > 3) {
    return null;
  }
  const n = new Set();
  for (const o of t.effects) {
    if (!o ||
    typeof o != "object" ||
    Array.isArray(o) ||
    Object.keys(o).sort().join(",") !== "assetKey,parameters,slot" ||
    typeof o.slot != "string" ||
    typeof o.assetKey != "string" ||
    !Object.hasOwn(Nd, o.slot) ||
    n.has(o.slot) ||
    !Nd[o.slot].includes(o.assetKey) ||
    !o.parameters ||
    typeof o.parameters != "object" ||
    Array.isArray(o.parameters) ||
    !yE(o)) {
      return null;
    }
    n.add(o.slot);
  }
  return {
    ...t,
    effects: t.effects.map(o => ({
      ...o,
      parameters: structuredClone(o.parameters)
    })),
  };
}
function wE(e, t, n) {
  const o = cr(e);
  return !o ||
    !t ||
    t.slug !== "halloween" ||
    !t.visible ||
    t.eventId !== o.eventId ||
    t.lifecycleEpoch !== o.lifecycleEpoch ||
    !t.startsAt ||
    !t.displayUntil ||
    Date.parse(t.startsAt) > n ||
    !Number.isFinite(Date.parse(t.startsAt)) ||
    !Number.isFinite(Date.parse(t.displayUntil)) ||
    Math.min(Date.parse(o.expiresAt), Date.parse(t.displayUntil)) <= n
    ? null
    : o;
}
function Cd(e) {
  const t = { ...e };
  (t.halloween = cr(e.halloween));

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
      "isBlocking" in t ||
      "isBlockedByThem" in t)) {
    (t.interaction = {
        isFollowing: t.isFollowing ?? false,
        isFollowedBy: t.isFollowedBy ?? false,
        hasOutgoingRequest: t.hasOutgoingRequest ?? false,
        hasIncomingRequest: t.hasIncomingRequest ?? false,
        isBlocking: t.isBlocking ?? t.isBlockedByMe ?? false,
        isBlockedBy: t.isBlockedBy ?? t.isBlockedByThem ?? false,
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
const Rn = new yl(100, 300 * 1000/* 1e3 */);
const bE = 60 * 1000/* 1e3 */;
setInterval(() => Rn.cleanup(), 120 * 1000/* 1e3 */);
const Ns = {
  async checkUsername(e) {
    return (
      await L.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await L.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await L.get(D.users.me);
    return Cd(e);
  },
  async updateProfile(e) {
    return await L.put(D.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = Rn.get(t);

    if (n && Rn.isFresh(t, bE)) {
      this._fetchAndCacheProfile(e, t).catch(() => {});
      return n;
    }

    if (n) {
      this._fetchAndCacheProfile(e, t).catch(() => {});
      return n;
    }

    return this._fetchAndCacheProfile(e, t);
  },
  getCachedProfile(e) {
    return Rn.get(e.toLowerCase()) ?? null;
  },
  async _fetchAndCacheProfile(e, t) {
    const n = await L.get(D.users.profile(e), {
        skipErrorToast: [pt.NOT_FOUND],
      });

    const o = Cd(n);
    Rn.set(t, o);
    return o;
  },
  invalidateProfileCache(e) {
    Rn.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const o = Rn.get(n);

    if (o) {
      Rn.set(n, { ...o, ...t });
    }
  },
  async followUser(e) {
    await L.post(D.users.follow(e), {});
  },
  async unfollowUser(e) {
    await L.delete(D.users.follow(e));
  },
  async pinPost(e) {
    await L.post(D.posts.pin(e));
  },
  async unpinPost(e) {
    await L.delete(D.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await L.get(D.users.privacy);
    return {
      isPrivate: e.isPrivate ?? false,
      showLastSeen: e.showLastSeen ?? true,
      whoCanPostOnWall: e.whoCanPostOnWall ?? e.wallAccess ?? "everyone",
      whoCanSeeMyPostReactions:
        e.whoCanSeeMyPostReactions ?? e.likesVisibility ?? "everyone",
      whoCanMessageMe: e.whoCanMessageMe ?? e.messageAccess ?? "everyone",
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

    if (e.whoCanMessageMe) {
      (t.messageAccess = e.whoCanMessageMe);
    }

    if (e.showLastSeen !== undefined) {
      (t.showLastSeen = e.showLastSeen);
    }

    await L.put(D.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await L.get(D.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await L.post(D.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await L.get(D.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await L.put(D.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await L.delete(D.users.setPin);
  },
  async deleteAccount() {
    await L.delete(D.users.deleteAccount);
  },
  async restoreAccount() {
    await L.post(D.users.restoreAccount);
  },
};
function Td(e) {
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
    halloween: cr(t.halloween),
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
function EE(e) {
  return "accessToken" in e;
}
function SE(e) {
  return "accessToken" in e;
}
const jn = { skipErrorToast: true };

const zn = {
  async register(e) {
    return await Pt.post(D.auth.signUp, e, jn);
  },
  async login(e) {
    return await Pt.post(D.auth.signIn, e, jn);
  },
  async verifyOtp(e) {
    return await Pt.post(D.auth.verifyOtp, e, jn);
  },
  async resendOtp(e) {
    await Pt.post(D.auth.resendOtp, e, jn);
  },
  async refreshSession() {
    return await Pt.post(D.auth.refresh);
  },
  async logout() {
    await Pt.post(D.auth.logout);
  },
  async logoutAll() {
    await Pt.post(`${D.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await Pt.post(D.auth.forgotPassword, e, jn);
  },
  async resetPassword(e) {
    await Pt.post(D.auth.resetPassword, e, jn);
  },
  async changePassword(e) {
    await Pt.post(D.auth.changePassword, e, jn);
  },
};

const kE = "HgxG";
const NE = "fa7e";
const CE = "bNUU";
const TE = "fz9P";
const IE = "r3kj";
const $E = "T52F";
const Id = { spinner: kE, spin: NE, xs: CE, sm: TE, md: IE, lg: $E };
function Jh({ size: e = "md", className: t }) {
  const n = [Id.spinner, Id[e], t].filter(Boolean).join(" ");
  return i("div", { className: n, children: i(hl, {}) });
}
const RE = "ZXax";
const AE = "crZG";
const xE = "PZMP";
const LE = "J9La";
const PE = "mXVP";
const ME = "sKo2";
const OE = "wQNK";
const DE = "Y48L";
const UE = "fgSK";
const FE = "ExtO";
const BE = "T9Ed";
const HE = "Pw5c";

const To = {
  button: RE,
  primary: AE,
  secondary: xE,
  ghost: LE,
  accent: PE,
  danger: ME,
  sm: OE,
  md: DE,
  lg: UE,
  fullWidth: FE,
  iconOnly: BE,
  loading: HE,
};

function tt({
  children: e,
  variant: t = "primary",
  size: n = "md",
  fullWidth: o = false,
  iconOnly: r = false,
  loading: s = false,
  className: a,
  type: c = "button",
  disabled: l,
  ...u
}) {
  const d = [
    To.button,
    To[t],
    To[n],
    o && To.fullWidth,
    r && To.iconOnly,
    s && To.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return i("button", {
    type: c,
    className: d,
    disabled: l || s,
    ...u,
    children: s ? i(Jh, { size: "sm" }) : e,
  });
}
const VE = "ilu3";
const WE = "Wxii";
const jE = "mv6h";
const zE = "Vo8W";
const qE = "U5Hr";
const GE = "F5Ah";

const Io = {
  screen: VE,
  fullscreen: WE,
  image: jE,
  title: zE,
  description: qE,
  action: GE,
};

const YE = {
  notFound:
    "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/404.png",
  server: "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/500.png",
};

const em = ({ kind: e, title: t, description: n, action: o, fullscreen: r = false }) => i("div", {
  className: `${Io.screen} ${r ? Io.fullscreen : ""}`,
  children: [
    i("img", {
      className: Io.image,
      src: YE[e],
      alt: "",
      width: 256,
      height: 256,
      "aria-hidden": "true",
    }),
    i("h1", { className: Io.title, children: t }),
    n && i("p", { className: Io.description, children: n }),
    o && i("div", { className: Io.action, children: o }),
  ],
});

function KE({ children: e, currentPath: t }) {
  const n = dm();

  const o = ye(a => a.initialize);

  const r = t.split(/[?#]/, 1)[0] || "/";

  M(() => {
    if (n === "idle") {
      o();
    }
  }, [n, o]);

  M(() => {
    if (n === "loading" || n === "idle") {
      return;
    }
    const a = kd.some(c => r === c || r.startsWith(`${c}/`));

    if (n === "unauthenticated" && !a) {
      if (!Ae(he.LOGIN)) {
        window.location.replace(he.LOGIN);
      }
    } else if (n === "needs_profile" && r !== he.ONBOARDING && !a) {
      if (!Ae(he.ONBOARDING)) {
        window.location.replace(he.ONBOARDING);
      }
    } else if (n === "authenticated" &&
        (r === he.LOGIN || r === he.REGISTER || r === he.ONBOARDING)) {
      Ae(he.HOME);
    }
  }, [n, r]);

  const s = kd.some(a => r === a || r.startsWith(`${a}/`));
  return n === "idle" || (n === "loading" && !s)
    ? null
    : n === "service_error"
    ? i(XE, {})
    : n === "account_deleted"
    ? i(QE, {})
    : (n === "unauthenticated" && !s) ||
      (n === "needs_profile" && r !== he.ONBOARDING && !s)
    ? null
    : i(ue, { children: e });
}
function XE() {
  const e = ye(r => r.initialize);

  const [t, n] = $(false);
  return i(em, {
    kind: "server",
    fullscreen: true,
    title: "Сервис недоступен",
    description:
      "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
    action: i(tt, {
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
  });
}
function QE() {
  const e = ye(l => l.canRestore);

  const t = ye(l => l.restoreDeadline);

  const n = ye(l => l.restoreAccount);

  const o = ye(l => l.logout);

  const [r, s] = $(false);

  const a = t
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

  return i("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: "24px",
    },
    children: i("div", {
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
        i("h1", {
          style: {
            fontSize: "24px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: 0,
          },
          children: "Аккаунт удалён",
        }),
        r
          ? i("p", {
              style: {
                fontSize: "15px",
                color: "var(--text-secondary)",
                margin: 0,
              },
              children: "Восстановление аккаунта...",
            })
          : e
          ? i(ue, {
              children: [
                i("p", {
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
                i("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "8px",
                    width: "100%",
                  },
                  children: [
                    i(tt, { onClick: c, children: "Восстановить аккаунт" }),
                    i("button", {
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
          : i(ue, {
              children: [
                i("p", {
                  style: {
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    margin: 0,
                  },
                  children: "Срок восстановления аккаунта истёк.",
                }),
                i("div", {
                  style: { marginTop: "8px" },
                  children: i(tt, { onClick: () => o(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
const ZE = "evMa";
const JE = "teou";
const eS = "QpkU";
const tS = "MneG";
const nS = "yr3N";
const oS = "xhne";
const rS = "xpYS";
const sS = "DJq7";
const iS = "OaLp";
const aS = "SaYM";
const cS = "IS1P";
const lS = "DX8q";
const uS = "nMS7";
const dS = "lIhb";

const lt = {
  overlay: ZE,
  modalWrapper: JE,
  wide: eS,
  modal: tS,
  frameless: nS,
  header: oS,
  title: rS,
  closeButton: sS,
  externalCloseButton: iS,
  mobileOverlay: aS,
  closing: cS,
  bottomSheet: lS,
  dragHandle: uS,
  dragIndicator: dS,
};

const fS = er(null);
const pS = 100;
const hS = 0.5;
function So({
  children: e,
  onClose: t,
  title: n,
  showHeader: o = true,
  showCloseButton: r = true,
  frameless: s = false,
  className: a,
  contentClassName: c,
  size: l = "default",
  onBeforeClose: u,
}) {
  const d = R(null);
  const p = R(null);
  const f = R(null);
  const h = bn();
  const g = R(0);
  const m = R(false);
  const [v, _] = $(false);
  const y = R(0);
  const w = R(0);
  const N = R(0);
  M(() => {
    const X = (fe) => {
        if (fe.key === "Escape") {
          if (u && !u()) {
            return;
          }
          t();
        }
      };

    const ne = document.documentElement.style.overflow;
    (document.documentElement.style.overflow = "hidden");
    document.addEventListener("keydown", X);

    return () => {
      document.removeEventListener("keydown", X);
      (document.documentElement.style.overflow = ne);
    };
  }, [t]);

  const k = (X) => {
      f.current = X.target;
    };

  const S = (X) => {
    if (f.current === d.current && X.target === d.current) {
      if (h) {
        b();
      } else {
        if (u && !u()) {
          return;
        }
        t();
      }
    }
    f.current = null;
  };

  const b = A(() => {
    if (u && !u()) {
      x(0, "transform 0.2s ease-out");
      I(0);
      (g.current = 0);
      return;
    }
    _(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, u]);

  const T = R(false);
  const C = R(false);

  const E = (X) => {
    let ne = X;

    while (ne && ne !== p.current) {
      const q = window.getComputedStyle(ne).overflowY;
      if ((q === "auto" || q === "scroll") &&
      ne.scrollHeight > ne.clientHeight) {
        return ne;
      }
      ne = ne.parentElement;
    }

    return null;
  };

  const x = (X, ne) => {
    if (p.current) {
      (p.current.style.transform = X > 0 ? `translateY(${X}px)` : "");
      (p.current.style.transition = ne || "");
    }
  };

  const I = (X) => {
    if (d.current && X > 0) {
      (d.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
            0,
            0.4 - X / 500
          )})`);
    } else if (d.current) {
      (d.current.style.backgroundColor = "");
    }
  };

  const P = (X) => {
    if (!h) {
      return;
    }
    (y.current = X.touches[0].clientY);
    (w.current = Date.now());
    (N.current = X.touches[0].clientY);
    const X_target = X.target;
    if (X_target.closest(`.${lt.dragHandle}`)) {
      (T.current = true);
      (C.current = true);
      (m.current = true);

      if (p.current) {
        (p.current.style.transition = "none");
      }

      return;
    }
    (T.current = false);

    if (X_target.closest(
      'button, a, input, textarea, select, video, [role="button"]'
    )) {
      C.current = false;
      return;
    }

    if (X_target.tagName === "CANVAS" || X_target.closest("canvas")) {
      C.current = false;
      return;
    }
    const ce = E(X_target);
    C.current = !ce || ce.scrollTop === 0;
  };

  const j = (X) => {
    if (!h) {
      return;
    }
    const ne = X.touches[0].clientY;
    const fe = ne - y.current;
    (N.current = ne);

    if (T.current) {
      if (fe > 0) {
        (g.current = fe);
        x(fe);
        I(fe);
        X.preventDefault();
      }

      return;
    }

    if (C.current) {
      if (m.current && g.current > 0) {
        if (fe > 0) {
          (g.current = fe);
          x(fe);
          I(fe);
          X.preventDefault();
        } else {
          (g.current = 0);
          (m.current = false);
          x(0);
          I(0);
        }

        return;
      }

      if (fe > 0) {
        m.current ||
            ((m.current = true),
            p.current && (p.current.style.transition = "none"));

        (g.current = fe);
        x(fe);
        I(fe);
        X.preventDefault();
      }
    }
  };

  const G = () => {
    if (!h) {
      return;
    }
    const X = N.current - y.current;
    const ne = Date.now() - w.current;
    const fe = X / ne;

    if (m.current && (X > pS || fe > hS)) {
      b();
    } else if (g.current > 0) {
      x(0, "transform 0.2s ease-out");
      I(0);
      (g.current = 0);
    }

    (m.current = false);
    (T.current = false);
    (C.current = false);
  };

  const se = (() => {
    if (h && v) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const we = { onClose: t, isMobile: h, isClosing: v, handleClose: b };
  return i(fS.Provider, {
    value: we,
    children: i("div", {
      ref: d,
      className: `${lt.overlay} ${h ? lt.mobileOverlay : ""} ${
        v ? lt.closing : ""
      }`,
      onMouseDown: k,
      onMouseUp: S,
      children: i("div", {
        ref: p,
        className: `${lt.modalWrapper} ${l === "wide" ? lt.wide : ""} ${
          h ? lt.bottomSheet : ""
        }`,
        style: se,
        onTouchStart: P,
        onTouchMove: j,
        onTouchEnd: G,
        children: [
          s &&
            !h &&
            i("button", {
              type: "button",
              className: lt.externalCloseButton,
              onClick: (X) => {
                X.stopPropagation();
                t();
              },
              children: i(Rt, { size: 24 }),
            }),
          h &&
            i("div", {
              className: lt.dragHandle,
              children: i("div", { className: lt.dragIndicator }),
            }),
          i("div", {
            className: `${lt.modal} ${s ? lt.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !s &&
                o &&
                !h &&
                i("div", {
                  className: lt.header,
                  children: [
                    i("span", { className: lt.title, children: n }),
                    r &&
                      i("button", {
                        type: "button",
                        className: lt.closeButton,
                        onClick: (X) => {
                          X.stopPropagation();
                          t();
                        },
                        children: i(Rt, { size: 16 }),
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
const mS = "wcaL";
const gS = "qItJ";
const _S = "ZCv6";
const vS = "kQ0X";
const Cs = { content: mS, icon: gS, text: _S, button: vS };
const $d = "phone-verification-required";
function yS() {
  const [e, t] = $(false);

  const n = ye(r => r.profile?.id ?? "");

  M(() => {
    const r = () => t(true);
    window.addEventListener($d, r);

    return () => window.removeEventListener($d, r);
  }, []);

  if (!e) {
    return null;
  }

  const o = `https://t.me/itd_verification_bot?start=${n}`;
  return i(So, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: i("div", {
      className: Cs.content,
      children: [
        i("div", { className: Cs.icon, children: i(q1, { size: 48 }) }),
        i("p", {
          className: Cs.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        i("a", {
          href: o,
          target: "_blank",
          rel: "noopener noreferrer",
          className: Cs.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
const _n = rt(e => ({
  statuses: {},

  setStatuses: t => e(n => ({
    statuses: { ...n.statuses, ...t }
  })),

  setStatus: (t, n) => e(o => ({
    statuses: { ...o.statuses, [t]: n }
  })),

  clear: () => e({ statuses: {} })
}));
let wc = new Set();
function wS() {
  if (!fa) {
    (null = setTimeout(async () => {
      fa = null;
      const e = Array.from(wc);
      wc.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const o = await bc.batchFollowStatus(n);
            _n.getState().setStatuses(o);
          } catch {}
        }
      }
    }, 50));
  }
}
function bS(e) {
  const t = ye(s => s.profile?.id);

  const n = _n(s => s.statuses);

  const o = R("");

  M(() => {
    if (!t) {
      return;
    }

    const s = e.filter(c => c !== t && n[c] === undefined);

    const a = s.sort().join(",");
    if (!(a === o.current || a === "")) {
      o.current = a;
      for (const c of s) {
        wc.add(c);
      }
      wS();
    }
  }, [e, t]);

  return {
    getStatus: A(
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
const to = new yl(500, 120 * 1000/* 1e3 */);
setInterval(() => to.cleanup(), 60 * 1000/* 1e3 */);
const bc = {
  async followUser(e) {
    const t = await L.post(D.users.follow(e), {});
    to.delete(e);
    _n.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await L.delete(D.users.follow(e));
    to.delete(e);
    _n.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const n = new URLSearchParams();
    const o = t.limit ?? 20;
    n.set("limit", o.toString());
    const r = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", r.toString());
    const s = n.toString();
    const a = `${D.users.followers(e)}${s ? `?${s}` : ""}`;
    const c = await L.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.followers ?? [];
    const p = l.pagination?.hasMore ?? false ? String(r + 1) : null;
    return { data: u.map(Td), nextCursor: p };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const o = t.limit ?? 20;
    n.set("limit", o.toString());
    const r = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", r.toString());
    const s = n.toString();
    const a = `${D.users.following(e)}${s ? `?${s}` : ""}`;
    const c = await L.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.following ?? [];
    const p = l.pagination?.hasMore ?? false ? String(r + 1) : null;
    return { data: u.map(Td), nextCursor: p };
  },
  async blockUser(e) {
    await L.post(D.users.block(e), {});
    to.delete(e);
  },
  async unblockUser(e) {
    await L.delete(D.users.block(e));
    to.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const o = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", o.toString());
    const r = t.toString();
    const s = `${D.users.blocked}${r ? `?${r}` : ""}`;
    const a = await L.get(s);
    const c = a.data ?? a;
    let l = [];

    if (Array.isArray(c.users)) {
      (l = c.users);
    } else if (Array.isArray(c)) {
      (l = c);
    }

    const u = l.map((f) => {
        const h = f.user ?? f;
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

    const d = c.pagination?.hasMore ?? false;
    const p = d ? String(o + 1) : null;
    return { users: u, nextCursor: p, hasMore: d };
  },
  async batchFollowStatus(e) {
    if (e.length === 0) {
      return {};
    }

    return (await L.post(D.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    to.delete(e);
  },
  clearSocialCache() {
    to.clear();
  },
};
function ES(e) {
  const t = _n(r => r.statuses[e]);

  const n = A(async () => {
    _n.getState().setStatus(e, true);
    try {
      await bc.followUser(e);
    } catch {
      _n.getState().setStatus(e, false);
    }
  }, [e]);

  const o = A(async () => {
    _n.getState().setStatus(e, false);
    try {
      await bc.unfollowUser(e);
    } catch {
      _n.getState().setStatus(e, true);
    }
  }, [e]);

  return { isFollowing: t, follow: n, unfollow: o };
}
const SS = "Rk0w";
const kS = "Bupt";
const NS = "ILU5";
const CS = "ueEY";
const Ts = { content: SS, title: kS, subtitle: NS, actions: CS };
function TS({ displayName: e, onConfirm: t, onClose: n }) {
  return i(So, {
    onClose: n,
    showHeader: false,
    children: i("div", {
      className: Ts.content,
      children: [
        i("h2", { className: Ts.title, children: "Отписаться?" }),
        i("p", {
          className: Ts.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            i("strong", { children: e }),
            "?",
          ],
        }),
        i("div", {
          className: Ts.actions,
          children: [
            i(tt, {
              variant: "secondary",
              onClick: (o) => {
                o.stopPropagation();
                n();
              },
              children: "Отмена",
            }),
            i(tt, {
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
const tm = er(null);
let IS = 0;
function $S({ children: e }) {
  const [t, n] = $([]);

  const o = A((a) => {
    const c = `modal-${++IS}`;

    n(l => [...l, { id: c, component: a }]);

    return c;
  }, []);

  const r = A((a) => {
    n(c => a ? c.filter(l => l.id !== a) : c.slice(0, -1));
  }, []);

  const s = A(() => {
    n([]);
  }, []);

  M(() => {
    let a = window.location.pathname + window.location.search;
    const c = () => {
      const d = window.location.pathname + window.location.search;

      if (d !== a) {
        (a = d);
        n([]);
      }
    };
    window.addEventListener("popstate", c);

    const {
      pushState,
      replaceState
    } = history;

    history.pushState = function (...d) {
      pushState.apply(this, d);
      c();
    };

    (history.replaceState = function (...d) {
      replaceState.apply(this, d);
      c();
    });

    return () => {
      window.removeEventListener("popstate", c);
      (history.pushState = pushState);
      (history.replaceState = replaceState);
    };
  }, []);

  return i(tm.Provider, {
    value: { openModal: o, closeModal: r, closeAllModals: s },
    children: [e, t.length > 0 && i(RS, { modals: t })],
  });
}
function RS({ modals: e }) {
  return ft(
    i(ue, {
      children: e.map(({ id: t, component: n }) => i(Xe, { fallback: null, children: n }, t)
      ),
    }),
    document.body
  );
}
function En() {
  const e = cs(tm);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const $o = new Map();
let pa = 0;
const Rd = [];
function AS(e) {
  const t = e.toLowerCase();
  const n = $o.get(t);
  if (n) {
    return n;
  }
  const o = (async () => {
    if (pa >= 2) {
      await new Promise(r => Rd.push(r));
    } else {
      pa++;
    }

    try {
      const { httpClient } = await de(async () => {
          const { httpClient: httpClient_1 } = await Promise.resolve().then(() => fE);
          return { httpClient: httpClient_1 };
        }, undefined);

      const s = await httpClient.get(`/users/${encodeURIComponent(e)}`, {
        skipErrorToast: true,
      });

      const a = s.clanAvatar ?? s.avatar ?? null;
      return typeof a == "string" && !/^(?:https?:|\/)/.test(a) ? a : null;
    } catch {
      $o.delete(t);
      return null;
    } finally {
      const r = Rd.shift();

      if (r) {
        r();
      } else {
        pa--;
      }
    }
  })();
  $o.set(t, o);

  if ($o.size > 512) {
    $o.delete($o.keys().next().value);
  }

  return o;
}
const xS = "H5aL";
const LS = "egrE";
const PS = "zpez";
const MS = "WZgZ";
const OS = "dFAC";
const DS = "jKTI";
const US = "rZjz";
const FS = "BeT8";
const BS = "tPFm";
const HS = "x7wX";
const VS = "mMTq";
const WS = "iOs6";

const kn = {
  avatar: xS,
  xs: LS,
  emoji: PS,
  onlineDot: MS,
  sm: OS,
  md: DS,
  lg: US,
  xl: FS,
  badge: BS,
  followBadge: HS,
  notFollowing: VS,
  following: WS,
};

function jS(e) {
  return (
    e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/")
  );
}
function gt({
  src: e,
  username: t,
  fallback: n,
  baseAvatar: o,
  alt: r,
  size: s = "md",
  badge: a,
  online: c,
  followBadge: l,
  onFollowBadgeClick: u,
  className: d,
}) {
  n ??= o;
  const p = Jk();
  const [f, h] = $(null);
  const g = !!e?.includes("/images/avatars/");
  const m = e;

  M(() => {
    let _ = true;
    if (!p && g && m && t && !n) {
      const y = m;
      AS(t).then((w) => {
        if (_) {
          h({ src: y, value: w });
        }
      });
    }
    return () => {
      _ = false;
    };
  }, [p, g, m, t, n]);

  if (!p && g) {
    (e = n ?? (f?.src === e ? f.value : null));
  }

  const v = e ? jS(e) : false;
  return i("div", {
    className: `${kn.avatar} ${kn[s]} ${d || ""}`,
    children: [
      v && e
        ? i("img", { src: e, alt: r || "" })
        : i("span", { className: kn.emoji, children: e || "👤" }),
      a && i("div", { className: kn.badge, children: a }),
      l !== undefined
        ? i("button", {
            type: "button",
            className: `${kn.followBadge} ${
              l ? kn.following : kn.notFollowing
            }`,
            onClick: (_) => {
              _.preventDefault();
              _.stopPropagation();
              u?.(_);
            },
            children: l ? i(U1, { size: 8 }) : i(D1, { size: 8 }),
          })
        : c && i("span", { className: kn.onlineDot }),
    ],
  });
}
const zS = "kCsK";
const qS = "IX8g";
const GS = "jRNs";
const YS = "SzST";
const KS = "kuxf";
const XS = "MiF6";
const QS = "HZmF";
const ZS = "GdVb";
const JS = "SGiQ";
const ek = "CzNH";
const tk = "V3Y9";
const nk = "Yxxd";
const ok = "ACc9";
const rk = "DgPm";
const sk = "I8ov";
const ik = "vaYH";
const ak = "J4bX";
const ck = "kW99";
const lk = "uUlS";
const uk = "lmOF";
const dk = "skyj";
const fk = "lDIo";
const pk = "J7xq";
const hk = "GeIT";

const Oe = {
  userName: zS,
  identity: qS,
  badges: GS,
  pinBadge: YS,
  text: KS,
  nukstaGlow: XS,
  xs: QS,
  sm: ZS,
  md: JS,
  lg: ek,
  nameEnding: tk,
  pinWrapper: nk,
  nickname: ok,
  schoolSilver: rk,
  withNickname: sk,
  trailing: ik,
  plain: ak,
  compact: ck,
  pinClickable: lk,
  pinTooltip: uk,
  pinTooltipFadeIn: dk,
  pinTooltipRow: fk,
  pinTooltipLabel: pk,
  pinTooltipArrow: hk,
};

const wt = new Map();
const mk = 512;
let ha = 0;
let ma = false;
let Is;
let co = 0;
const nm = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function om() {
  co++;
  for (const e of wt.values()) {
    (e.value = null);
    (e.deadline = 0);
    (e.refreshAt = 0);
    (e.optimistic = undefined);

    e.listeners.forEach(t => t());
  }
  wl();
}
function Ec() {
  const e = performance.now();
  for (const [t, n] of wt) {
    if (!n.listeners.size &&
      (!n.value || n.deadline <= e || wt.size > mk)) {
      wt.delete(t);
    }
  }
}
function fi() {
  co++;
  for (const e of wt.values()) {
    e.refreshAt = 0;
  }
  Sc();
}
function Ad(e) {
  const e_detail = e.detail;
  if (
    e_detail &&
    typeof e_detail.userId == "string" &&
    nm.test(e_detail.userId) &&
    (e_detail.label === null || (typeof e_detail.label == "string" && e_detail.label.length <= 128))
  ) {
    const n = wt.get(e_detail.userId);

    if (n) {
      (n.optimistic = { label: e_detail.label, until: performance.now() + 30000/* 3e4 */ });
      n.listeners.forEach(o => o());
    }
  }
  fi();
}
async function wl() {
  if (ma || document.hidden || !an() || !cn()) {
    return;
  }
  const e = [...wt]
    .filter(([, n]) => n.listeners.size && n.refreshAt <= performance.now())
    .map(([n]) => n);
  if (!e.length) {
    return;
  }
  ma = true;
  const t = co;
  try {
    for (let n = 0; n < e.length; n += 200) {
      const o = e.slice(n, n + 200);
      const r = performance.now();

      const s = await L.get(`/event-nicknames/?ids=${o.join(",")}`, {
        skipErrorToast: true,
      });

      if (t !== co) {
        return;
      }
      if (!s?.data || typeof s.data != "object" || Array.isArray(s.data)) {
        throw new Error("Invalid nickname response");
      }
      const a = Date.parse(s.serverTime);
      const c = Math.min(60000/* 6e4 */, Date.parse(s.displayValidUntil) - a);
      if (!Number.isFinite(a) || !Number.isFinite(c)) {
        throw new Error("Invalid nickname clock");
      }
      for (const l of o) {
        const u = wt.get(l);
        if (!u) {
          continue;
        }
        const d = s.data[l];
        if (
          u.optimistic &&
          performance.now() < u.optimistic.until &&
          (d?.label ?? null) !== u.optimistic.label
        ) {
          u.refreshAt = r + 1000/* 1e3 */;
          continue;
        }
        u.optimistic = undefined;
        const p = d ? Date.parse(d.expiresAt) - a : 0;

        (u.value = d &&
        typeof d.label == "string" &&
        d.label.length <= 128 &&
        Number.isFinite(p) &&
        p > 0
          ? d
          : null);

        (u.deadline = r + (Number.isFinite(p) ? Math.max(0, p) : 0));
        (u.refreshAt = r + Math.max(5000/* 5e3 */, Math.min(30000/* 3e4 */, Number.isFinite(c) ? c / 2 : 5000/* 5e3 */)));

        u.listeners.forEach(f => f());
      }
    }
  } catch {
    for (const n of t === co ? e : []) {
      const o = wt.get(n);

      if (o) {
        (o.refreshAt = performance.now() + 10000/* 1e4 */);
      }
    }
  } finally {
    (ma = false);

    if (t !== co) {
      wl();
    }
  }
}
function Sc() {
  for (const e of wt.values()) {
    if (e.optimistic &&
      performance.now() >= e.optimistic.until) {
      (e.optimistic = undefined);
      (e.refreshAt = 0);
      e.listeners.forEach(t => t());
    }

    if (e.value &&
      performance.now() >= e.deadline) {
      (e.value = null);
      e.listeners.forEach(t => t());
    }
  }
  wl();
}
function xd() {
  if (!document.hidden) {
    fi();
  }
}
Ui(() => {
  om();
  Ec();
});
ps(() => om());
function bl(e) {
  const [, t] = $(0);
  M(() => {
    if (!e || !nm.test(e)) {
      return;
    }
    eN();
    Ec();
    let o = wt.get(e);

    if (!o) {
      (o = { listeners: new Set(), value: null, deadline: 0, refreshAt: 0 });
      wt.set(e, o);
    }

    const r = () => t(a => a + 1);
    o.listeners.add(r);
    ha++;

    if (!Is) {
      (Is = setInterval(Sc, 1000/* 1e3 */));
      document.addEventListener("visibilitychange", xd);
      window.addEventListener("online", fi);
      window.addEventListener("event-nickname-changed", Ad);
    }

    const s = setTimeout(Sc, 0);
    return () => {
      clearTimeout(s);
      o.listeners.delete(r);
      ha--;
      Ec();

      if (!ha) {
        clearInterval(Is);
        (Is = undefined);
        document.removeEventListener("visibilitychange", xd);
        window.removeEventListener("online", fi);
        window.removeEventListener("event-nickname-changed", Ad);
        co++;
      }
    };
  }, [e]);
  const n = e ? wt.get(e) : undefined;
  if (n?.optimistic && performance.now() < n.optimistic.until) {
    const o = n.optimistic.label;
    return o
      ? {
          id: `pending:${o}`,
          label: o,
          styleKey: "school_gold",
          eventId: "aliceai",
          expiresAt: "",
          stateVersion: 0,
        }
      : null;
  }
  return n?.value ?? null;
}
function gk(e, t, n) {
  if (!e || n) {
    return e;
  }
  let o = false;
  try {
    o = new URL(e, "https://itd.invalid").pathname.includes("/images/avatars/");
  } catch {}
  return o ? t ?? null : e;
}
function _k(e, t) {
  return t ? e : undefined;
}
const vk = "Vsgw";
const yk = "sfWm";
const wk = "PW6y";
const bk = "d8xW";
const Ek = "TpWL";
const Sk = "fkuZ";
const kk = "LAet";

const Nn = {
  pumpkin: vk,
  pumpkinView: yk,
  carver: wk,
  thanks: bk,
  viewActions: Ek,
  share: Sk,
  close: kk,
};

const Nk = {};
let F = "";
let pi = "";
let kc = "";

const rm = [
    "full-moon.webp",
    "scratches.webp",
    "web-corner.webp",
    "web-corner-br.webp",
    "cursor-salt.png",
    "cursor-water.png",
    "cursor-chalk.png",
    "cursor-book.png",
  ];

const sm = e => `--hw-asset-${e.replaceAll(".", "-")}`;

function Ck(e, t, n) {
  const o = e;
  if (!t.releaseId ||
  !/^halloween-[a-z0-9-]{1,70}$/.test(t.releaseId) ||
  o?.version !== 1 ||
  o.releaseId !== t.releaseId ||
  o.hash !== t.assetManifestHash ||
  typeof o.hash != "string" ||
  !/^[a-f0-9]{64}$/.test(o.hash) ||
  !o.assets ||
  Object.keys(o.assets).length > 10000/* 1e4 */) {
    throw Error("Invalid release assets");
  }
  const r = new URL(n);
  if (r.protocol !== "https:" ||
  r.pathname !== "/" ||
  r.username ||
  r.password ||
  r.search ||
  r.hash) {
    throw Error("Unreviewed asset origin");
  }
  const s = `${r.origin}/event-files/${o.releaseId}/`;
  for (const [a, c] of Object.entries(o.assets)) {
    if (!/^[a-zA-Z0-9][a-zA-Z0-9._/-]*$/.test(a) ||
    a.split("/").some(l => !l || l === "." || l === "..") ||
    c.url !== s + a ||
    !/^[a-f0-9]{64}$/.test(c.sha256) ||
    !Number.isSafeInteger(c.bytes) ||
    c.bytes < 1) {
      throw Error("Asset escaped manifest");
    }
  }
  if (!o.assets["sfx/wings.mp3"]) {
    throw Error("Incomplete event assets");
  }
  return { art: `${s}art`, sounds: `${s}sfx` };
}
function ga() {
  (F = "");
  (pi = "");
  (kc = "");

  if (typeof document !== "undefined") {
    for (const e of rm) {
      document.documentElement?.style.removeProperty(sm(e));
    }
  }
}
function Tk(e) {
  if (!/^[a-z-]+$/.test(e) || !pi) {
    throw Error("Event assets not ready");
  }
  return `${pi}/${e}.mp3`;
}
async function Ik(e, t) {
  const n = `${e.releaseId}:${e.assetManifestHash}`;
  if (kc === n && F) {
    return;
  }
  if (e.assetManifestUrl !== `/api/v1/event-assets/${e.releaseId}`) {
    throw Error("Invalid manifest endpoint");
  }

  const o = await L.get(`/v1/event-assets/${e.releaseId}`, {
      skipErrorToast: true,
      signal: t,
    });

  const r = Ck(
    o,
    e,
    Nk?.VITE_HALLOWEEN_ASSET_ORIGIN || "https://cdn.xn--d1ah4a.com"
  );

  if (t.aborted) {
    throw Error("Stale manifest request");
  }
  (F = r.art);
  (pi = r.sounds);
  (kc = n);

  if (typeof document !== "undefined") {
    for (const s of rm) {
      document.documentElement?.style.setProperty(sm(s), `url("${F}/${s}")`);
    }
  }
}
const $s = { skipErrorToast: true };

const qn = () => ({
  skipErrorToast: true,
  headers: { "Idempotency-Key": crypto.randomUUID() }
});

const Lt = "/v1/halloween";

const At = {
  feedState: e => L.get(
    `${Lt}/feed-state?posts=${e.map(encodeURIComponent).join(",")}`,
    $s
  ),
  hold: e => L.post(`${Lt}/possessions/${encodeURIComponent(e)}/hold`, {}, qn()),
  call: e => L.post(`${Lt}/possessions/${encodeURIComponent(e)}/call`, {}, qn()),
  thanks: e => L.post(`${Lt}/possessions/${encodeURIComponent(e)}/thanks`, {}, qn()),
  werewolf: e => L.post(`${Lt}/werewolves`, e, qn()),
  react: e => L.post(`${Lt}/werewolves/${encodeURIComponent(e)}/react`, {}, qn()),
  me: () => L.get(`${Lt}/me`, $s),
  settings: e => L.put(`${Lt}/me/settings`, { sounds: e, soundsAsked: true }, qn()),
  jar: () => L.get(`${Lt}/jar`, $s),
  notices: () => L.get(`${Lt}/notices`, $s),
  readNotices: e => L.post(`${Lt}/notices/read`, { ids: e }, qn()),
};

const $k = "RP5U";
const Rk = { lit: $k };

const Ld = {
  grin: [
    "22,46 27,38 33,33 39,38 44,46 33,43",
    "67,43 56,46 61,38 67,33 73,38 78,46",
    "22,61 30,65 38,67 38,63 44,63 44,68 50,68.5 56,68 56,63 62,63 62,67 70,65 78,61 72,72 64,78 56,81 50,82 44,81 36,78 28,72",
  ],
  wink: [
    "22,46 27,38 33,33 39,38 44,46 33,43",
    "57,43 63,39.5 70,38.5 76,40 81,44 75,42.5 70,42 63,43",
    "26,64 40,68 55,68 68,64 77,58 73,68 63,75 50,78 38,76 30,71",
  ],
  cat: [
    "20,37 30,36 40,40 44,47 34,47 25,44",
    "75,44 66,47 56,47 60,40 70,36 80,37",
    "46,60 54,60 51,65 56,70 63,70 68,65 70,67 64,74 55,74 50,70 45,74 36,74 30,67 32,65 37,70 44,70 49,65",
  ],
};

function im(e, t) {
  return (e === "custom" ? !Zh(t) : !Object.hasOwn(Ld, e))
    ? null
    : e === "custom"
    ? t.map(n => n.map(([o, r]) => `${o / 10},${r / 10}`).join(" "))
    : Ld[e];
}
const am = e => `${e} ${e % 10 === 1 && e % 100 !== 11 ? "человека" : "человек"}`;
function Ak(e, t) {
  const n = (3 + e * 2) * (t ? 0.5 : 1);
  return e
    ? `drop-shadow(0 0 ${n}px rgba(255, 160, 50, ${(0.45 + e * 0.1).toFixed(
        2
      )})) brightness(${1 + e * 0.05})`
    : "saturate(.6) brightness(.9)";
}
function Pd({
  templateId: e,
  contours: t,
  glow: n = 0,
  thanks: o,
  className: r,
  style: s,
  inline: a = false,
}) {
  const c = `pumpkin-face-${ls()}`;
  const l = im(e, t);
  return l
    ? i("svg", {
        className: `${r ?? ""} ${n ? Rk.lit : ""}`,
        style: { ...s, filter: Ak(n, a) },
        viewBox: "0 0 100 100",
        "aria-hidden": "true",
        focusable: "false",
        children: [
          !!o && i("title", { children: `спасибо от ${am(o)}` }),
          i("defs", {
            children: i("clipPath", {
              id: c,
              children: i("ellipse", {
                cx: "50",
                cy: "58",
                rx: "33.5",
                ry: "27.5",
              }),
            }),
          }),
          i("image", {
            href: `${F}/pumpkin-body.webp`,
            width: "100",
            height: "100",
          }),
          i("g", {
            clipPath: `url(#${c})`,
            fill: "#ffd35a",
            stroke: "#5a2410",
            strokeWidth: "1.1",
            strokeLinejoin: "round",
            children: l.map((u, d) => i("polygon", { points: u }, d)),
          }),
        ],
      })
    : null;
}
const Pn = rt(() => ({
  list: []
}));
let xk = 0;
let jo = [];
const on = new Map();
function cm(e, t) {
  on.set(e, { left: t, since: Date.now(), timer: setTimeout(() => hi(e), t) });
}
function hi(e) {
  clearTimeout(on.get(e)?.timer);
  on.delete(e);

  (jo = jo.filter(n => n.toast.id !== e));

  Pn.setState(n => ({
    list: n.list.filter(o => o.id !== e)
  }));

  const t = Pn.getState().list.length < 3 && jo.shift();

  if (t) {
    lm(t.toast, t.ms);
  }
}
function Lk() {
  for (const e of on.values()) {
    clearTimeout(e.timer);
  }
  on.clear();
  (jo = []);
  Pn.setState({ list: [] });
}
function Md(e, t) {
  const n = on.get(e);

  if (n && t === !!n.timer) {
    clearTimeout(n.timer);

    t
      ? on.set(e, { left: n.left - (Date.now() - n.since), since: 0 })
      : cm(e, Math.max(n.left, 2000/* 2e3 */));
  }
}
function lm(e, t) {
  Pn.setState(o => ({
    list: [...o.list, e]
  }));
  const n = t ?? (e.actions?.length ? 0 : 10000/* 1e4 */);

  if (n) {
    cm(e.id, n);
  }
}
function Le(e, t) {
  const n =
    e.key &&
    [...Pn.getState().list, ...jo.map(s => s.toast)].find(
      s => s.key === e.key
    );
  if (n) {
    return n.id;
  }
  const o = { ...e, id: ++xk };
  const r = Pn.getState().list;
  if (r.length >= 3) {
    const [s] = r;
    const a = on.get(s.id)?.left;
    clearTimeout(on.get(s.id)?.timer);
    on.delete(s.id);

    Pn.setState(c => ({
      list: c.list.slice(1)
    }));

    if (s.actions?.length) {
      jo.unshift({ toast: s, ms: a });
    }
  }
  lm(o, t);
  return o.id;
}
const St = 1080;
const Ro = 1350;
const _r = 860;
const Gn = 150;
function Od(e) {
  return new Promise((t, n) => {
    const o = new Image();

    (o.onload = () => t(o));

    (o.onerror = n);
    (o.crossOrigin = "anonymous");
    (o.src = e);
  });
}
const Pk = "Pangolin, system-ui, sans-serif";

const Mk = ["cyrillic", "latin"].map(
  e => `${F.replace(/\/art$/, "")}/fonts/pangolin-normal-${e}.woff2`
);

let Dd = null;
function Ok() {
  (Dd ??= Promise.all(
    Mk.map(e => new FontFace("Pangolin", `url(${e})`)
      .load()
      .then(t => document.fonts.add(t))
    )
  ).catch(() => {}));

  return Dd;
}
const Dk = e => /^(https?:)?\/\//.test(e) || e.startsWith("/");
async function Uk(e) {
  const t = im(e.templateId, e.contours);
  if (!t) {
    throw new Error("Unknown pumpkin");
  }

  const [n, o] = await Promise.all([
      Od(`${F}/pumpkin-body.webp`),
      Od(`${F}/courtyard.webp`),
      Ok(),
    ]);

  const r = document.createElement("canvas");
  (r.width = St);
  (r.height = Ro);
  const s = r.getContext("2d");
  const a = Pk;
  const c = Math.max(St / o.width, Ro / o.height);

  s.drawImage(
    o,
    (St - o.width * c) / 2,
    (Ro - o.height * c) / 2,
    o.width * c,
    o.height * c
  );

  (s.fillStyle = "rgba(14, 10, 20, 0.62)");
  s.fillRect(0, 0, St, Ro);
  const l = s.createRadialGradient(St / 2, Gn + 500, 40, St / 2, Gn + 500, 620);
  l.addColorStop(0, "rgba(255, 150, 40, 0.32)");
  l.addColorStop(1, "rgba(255, 150, 40, 0)");
  (s.fillStyle = l);
  s.fillRect(0, 0, St, Ro);
  const u = (St - _r) / 2;
  const d = _r / 100;
  s.drawImage(n, u, Gn, _r, _r);
  s.save();
  s.beginPath();
  s.ellipse(u + 50 * d, Gn + 58 * d, 33.5 * d, 27.5 * d, 0, 0, Math.PI * 2);
  s.clip();
  (s.fillStyle = "#ffd35a");
  (s.strokeStyle = "#5a2410");
  (s.lineWidth = 1.1 * d);
  (s.lineJoin = "round");
  (s.shadowColor = "rgba(255, 190, 80, 0.9)");
  (s.shadowBlur = 30);
  for (const w of t) {
    s.beginPath();
    for (const [N, k] of w.split(" ").entries()) {
      const [S, b] = k.split(",").map(Number);

      if (N) {
        s.lineTo(u + S * d, Gn + b * d);
      } else {
        s.moveTo(u + S * d, Gn + b * d);
      }
    }
    s.closePath();
    s.fill();
    s.stroke();
  }
  s.restore();
  const p = e.avatar && !Dk(e.avatar) ? e.avatar : null;
  (s.textBaseline = "middle");
  (s.font = `64px ${a}`);
  const f = Array.from(e.name);
  const h = f.length > 24 ? `${f.slice(0, 23).join("")}…` : e.name;
  const g = St - 80 - (p ? 112 : 0);
  const m = Math.min(g, s.measureText(h).width);
  const v = (p ? 112 : 0) + m;
  let _ = (St - v) / 2;
  const y = Gn + _r + 60;

  if (p) {
    (s.fillStyle = "#1f1c26");
    s.beginPath();
    s.arc(_ + 44, y, 44, 0, Math.PI * 2);
    s.fill();
    (s.font = `52px ${a}`);
    (s.textAlign = "center");
    s.fillText(p, _ + 44, y + 3);
    (_ += 112);
  }

  (s.textAlign = "left");
  (s.font = `64px ${a}`);
  (s.fillStyle = "#f4efe6");
  s.fillText(h, _, y, g);
  (s.textAlign = "center");

  if (e.username) {
    (s.font = `40px ${a}`);
    (s.fillStyle = "#a49dae");
    s.fillText(`@${e.username}`, St / 2, y + 70);
  }

  (s.font = `38px ${a}`);
  (s.fillStyle = "#ffb14a");
  s.fillText("Тыква с Хеллоуина в ИТД", St / 2, Ro - 56);

  return new Promise((w, N) => r.toBlob(
    k => k ? w(k) : N(new Error("Canvas export failed")),
    "image/png"
  )
  );
}
async function Fk(e) {
  try {
    await navigator.clipboard.write([
      new ClipboardItem({ "image/png": Promise.resolve(e) }),
    ]);

    Le({ title: "Картинка скопирована", sub: "Вставь её в пост или в чат" });
  } catch {
    Le({ title: "Не получилось скопировать", sub: "Попробуй «Поделиться»" });
  }
}
const Bk = () => typeof ClipboardItem !== "undefined" && typeof navigator.clipboard?.write == "function";
async function Hk(e, t) {
  let n;
  try {
    n = await t;
  } catch {
    Le({ title: "Не получилось сделать картинку", sub: "Попробуй ещё раз" });
    return;
  }
  const o = new File([n], "pumpkin.png", { type: "image/png" });
  const r = e.username ? `${location.origin}/@${e.username}` : location.href;
  if (navigator.canShare?.({ files: [o] })) {
    try {
      await navigator.share({ files: [o], text: `Тыква ${e.name}`, url: r });
      return;
    } catch (a) {
      if (a?.name === "AbortError") {
        return;
      }
    }
  }
  const s = document.createElement("a");
  (s.href = URL.createObjectURL(n));
  (s.download = "pumpkin.png");
  s.click();

  setTimeout(() => URL.revokeObjectURL(s.href), 1000/* 1e3 */);

  Le({ title: "Картинка сохранена", sub: "Отправь её друзьям" });
}
const Vk = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Wk(e, t, n, o) {
  let r = null;
  for (const s of n) {
    if (!o(s) && !Vk(e[s], t[s])) {
      (r ??= { ...e });
      t[s] ? (r[s] = t[s]) : delete r[s];
    }
  }
  return r ?? e;
}

const um = (e, t) => Math.abs(e - t) < 1000/* 1e3 */;

const mt = {
  route: "/event/halloween",
  framePath: "/public/events/halloween",
  title: "Хеллоуин",
};

function jk(e) {
  if (!e || typeof e != "object") {
    throw new Error("Invalid Halloween portal");
  }
  const t = e;
  if (typeof t.active == "boolean" &&
  !Object.hasOwn(t, "event") &&
  typeof e.url == "string") {
    return {
      active: false,
      event: null,
      serverTime: new Date().toISOString(),
      revision: "0000000000000000",
    };
  }
  if (typeof t.active != "boolean" ||
  typeof t.serverTime != "string" ||
  !Number.isFinite(Date.parse(t.serverTime)) ||
  typeof t.revision != "string" ||
  !/^[a-f0-9]{16}$/.test(t.revision)) {
    throw new Error("Invalid Halloween portal");
  }
  if (t.event === null && !t.active) {
    return {
      active: false,
      serverTime: t.serverTime,
      revision: t.revision,
      event: null,
    };
  }
  const t_event = t.event;
  if (!t_event ||
  typeof t_event != "object" ||
  t_event.slug !== "halloween" ||
  t_event.route !== mt.route ||
  typeof t_event.framePath != "string" ||
  t_event.framePath.replace(/\/$/, "") !== mt.framePath ||
  typeof t_event.eventId != "string" ||
  !/^[a-z0-9][a-z0-9_-]{0,99}$/.test(t_event.eventId) ||
  typeof t_event.visible != "boolean" ||
  t.active !== t_event.visible ||
  typeof t_event.actionsEnabled != "boolean" ||
  !["scheduled", "active", "closed"].includes(t_event.phase) ||
  !Number.isSafeInteger(t_event.lifecycleEpoch) ||
  t_event.lifecycleEpoch < 1 ||
  [t_event.startsAt, t_event.endsAt, t_event.displayUntil].some(
    o => typeof o != "string" || !Number.isFinite(Date.parse(o))
  ) ||
  Date.parse(t_event.startsAt) >= Date.parse(t_event.endsAt) ||
  Date.parse(t_event.endsAt) > Date.parse(t_event.displayUntil) ||
  !t_event.capabilities ||
  typeof t_event.capabilities != "object" ||
  Array.isArray(t_event.capabilities) ||
  Object.values(t_event.capabilities).some(o => typeof o != "boolean")) {
    throw new Error("Invalid Halloween event");
  }
  return {
    releaseId: t.releaseId,
    assetManifestUrl: t.assetManifestUrl,
    assetManifestHash: t.assetManifestHash,
    active: t.active,
    serverTime: t.serverTime,
    revision: t.revision,
    event: { ...t_event, ...mt },
  };
}

const Nc = {
    event: null,
    lastEvent: null,
    loaded: false,
    error: false,
    owner: null,
    serverOffsetMs: 0,
    revision: null,
  };

const Ke = rt(() => Nc);

function Dr() {
  return Date.now() + Ke.getState().serverOffsetMs;
}
function zk(e, t) {
  return Date.parse(e.displayUntil) <= t
    ? { ...e, visible: false, actionsEnabled: false, phase: "closed" }
    : e.phase === "active" && Date.parse(e.endsAt) <= t
    ? {
        ...e,
        actionsEnabled: false,
        phase: "closed",
        capabilities: { ...e.capabilities, pumpkins: false },
      }
    : e;
}
function qk(e, t) {
  if (!e.visible) {
    return null;
  }
  const n = [e.phase === "active" ? e.endsAt : null, e.displayUntil]
    .filter(o => !!o && Date.parse(o) > t)
    .map(o => Date.parse(o) - t);
  return n.length ? Math.min(Math.max(1, Math.min(...n)), 2147483647) : null;
}
let Cn = 0;
function Gk(e) {
  const t = ++Cn;
  ga();
  Ke.setState({ ...Nc, owner: e });
  let n = false;
  let o;
  let r;
  let s = 0;
  let a = -Infinity;
  const c = new AbortController();

  const l = () => {
    if (t !== Cn) {
      return;
    }
    clearTimeout(o);
    const f = Date.now() + s;
    const h = Ke.getState();
    const g = h.event ?? h.lastEvent;
    if (!g?.visible) {
      return;
    }
    const m = zk(g, f);
    Ke.setState({ event: h.event ? m : null, lastEvent: m });
    const v = qk(m, f);

    if (v !== null) {
      (o = setTimeout(l, v));
    }
  };

  const u = async () => {
    if (n || document.hidden || t !== Cn) {
      return;
    }
    n = true;
    const f = new AbortController();

    const h = () => f.abort();

    c.signal.addEventListener("abort", h, { once: true });
    const g = setTimeout(h, 15000/* 15e3 */);
    try {
      const m = jk(
          await L.get("/v1/portal", { skipErrorToast: true, signal: f.signal })
        );

      const v = Date.parse(m.serverTime);

      if (m.event?.visible) {
        (await Ik(m, f.signal));
      }

      if (t === Cn &&
        v >= a) {
        clearTimeout(r);

        (r = setTimeout(() => {
          if (t === Cn) {
            Ke.setState({ event: null, error: true });
          }
        }, 45000/* 45e3 */));

        (a = v);
        m.event?.visible || ga();

        Ke.setState((_) => {
          const y = v - Date.now();
          s = um(_.serverOffsetMs, y) ? _.serverOffsetMs : y;
          const w =
            JSON.stringify(m.event) === JSON.stringify(_.event)
              ? _.event
              : m.event;
          return _.loaded &&
            !_.error &&
            _.revision === m.revision &&
            w === _.event &&
            s === _.serverOffsetMs
            ? _
            : {
                event: w,
                lastEvent: w,
                loaded: true,
                error: false,
                serverOffsetMs: s,
                revision: m.revision,
              };
        });

        l();
      }
    } catch {
      if (t === Cn) {
        Ke.setState({ error: true });
      }
    } finally {
      clearTimeout(g);
      c.signal.removeEventListener("abort", h);
      (n = false);
    }
  };

  u();

  const d = window.setInterval(() => {
      u();
    }, 15000/* 15e3 */);

  const p = () => {
    l();

    if (!document.hidden) {
      u();
    }
  };

  window.addEventListener("focus", p);
  window.addEventListener("online", p);
  document.addEventListener("visibilitychange", p);

  return () => {
    if (t === Cn) {
      Cn++;
      ga();
      Ke.setState(Nc);
    }

    c.abort();
    clearTimeout(o);
    clearTimeout(r);
    clearInterval(d);
    window.removeEventListener("focus", p);
    window.removeEventListener("online", p);
    document.removeEventListener("visibilitychange", p);
  };
}
const mi = new Map();
let Ud;
function Cc() {
  clearTimeout(Ud);
  const e = [...mi.values()].filter(t => t > Dr());

  if (e.length) {
    (Ud = setTimeout(() => {
        for (const [t, n] of mi) {
          if (n <= Dr()) {
            t();
          }
        }
        Cc();
      }, Math.min(2147483647, Math.max(1, Math.min(...e) - Dr()))));
  }
}
function Yk(e) {
  const t = Ke(a => a.event);

  const n = Ke(a => a.serverOffsetMs);

  const [o, r] = $(Dr);

  const s = Math.min(
    Date.parse(e?.expiresAt ?? ""),
    Date.parse(t?.displayUntil ?? "")
  );

  M(() => {
    if (!Number.isFinite(s)) {
      return;
    }
    const a = () => r(Dr());
    queueMicrotask(a);
    mi.set(a, s);
    Cc();
    const c = () => a();
    window.addEventListener("focus", c);
    document.addEventListener("visibilitychange", c);

    return () => {
      mi.delete(a);
      Cc();
      window.removeEventListener("focus", c);
      document.removeEventListener("visibilitychange", c);
    };
  }, [s, n]);

  return wE(e, t ?? undefined, o);
}
function Kk({
  pumpkin: e,
  name: t,
  username: n,
  avatar: o,
  baseAvatar: r,
  interactive: s = true,
}) {
  const [a, c] = $(false);

  const l = vl.store(_ => _.enabled);

  const u = R(null);
  const d = R(null);
  const p = R(null);
  const f = e?.templateId;
  const h = gk(o ?? null, r, l) ?? r;

  const g = f
    ? { templateId: f, contours: e.contours, name: t, username: n, avatar: h }
    : null;

  const m = () => {
    c(false);
    u.current?.focus();
  };

  M(() => {
    c(false);
    (p.current = null);
  }, [e, s]);

  M(() => {
    if (!a || !g) {
      return;
    }
    d.current?.focus();
    const _ = Uk(g);
    const y = { promise: _ };
    (p.current = y);

    _.then((N) => {
      y.blob = N;
    }).catch(() => {});

    const w = (N) => {
      if (N.key === "Escape") {
        N.stopPropagation();
        m();
      }
    };
    window.addEventListener("keydown", w);

    return () => {
      window.removeEventListener("keydown", w);
      u.current?.focus();
    };
  }, [a]);

  if (!g) {
    return null;
  }

  const v = e.thanks ? `, спасибо: ${e.thanks}` : "";
  return i(ue, {
    children: [
      i("span", {
        ref: u,
        className: Nn.pumpkin,
        "data-halloween-pumpkin": true,
        role: s ? "button" : undefined,
        tabIndex: s ? 0 : undefined,
        "aria-expanded": s ? a : undefined,
        "aria-label": `Тыква: ${t}`,
        title: `Хеллоуинская тыква${v}${s ? ". Нажми, чтобы рассмотреть" : ""}`,
        onClick: s
          ? (_) => {
          _.preventDefault();
          _.stopPropagation();
          c(true);
        }
          : undefined,
        onKeyDown: s
          ? (_) => {
          if (_.key === "Enter" || _.key === " ") {
            _.preventDefault();
            _.stopPropagation();
            _.repeat || c(true);
          }
        }
          : undefined,
        children: i(Pd, {
          templateId: g.templateId,
          contours: e.contours,
          glow: e.glow,
          thanks: e.thanks,
          inline: true,
        }),
      }),
      s &&
        a &&
        ft(
          i("div", {
            className: Nn.pumpkinView,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": `Тыква: ${t}`,
            onClick: (_) => {
              _.stopPropagation();

              if (_.target === _.currentTarget) {
                m();
              }
            },
            children: [
              i(Pd, {
                templateId: g.templateId,
                contours: e.contours,
                glow: e.glow,
                thanks: e.thanks,
              }),
              i("div", {
                className: Nn.carver,
                children: [
                  i(gt, { src: h ?? null, baseAvatar: r, alt: t, size: "md" }),
                  i("div", {
                    children: [
                      i("b", { children: t }),
                      n && i("span", { children: ["@", n] }),
                    ],
                  }),
                ],
              }),
              !!e.thanks &&
                i("p", {
                  className: Nn.thanks,
                  children: ["Фонарь светит: спасибо от ", am(e.thanks)],
                }),
              i("div", {
                className: Nn.viewActions,
                children: [
                  i("button", {
                    type: "button",
                    className: Nn.share,
                    onClick: () => p.current &&
                    void Hk(g, p.current.blob ?? p.current.promise),
                    children: "Поделиться",
                  }),
                  Bk() &&
                    i("button", {
                      type: "button",
                      className: Nn.close,
                      onClick: () => p.current &&
                      void Fk(p.current.blob ?? p.current.promise),
                      children: "Скопировать",
                    }),
                  i("button", {
                    type: "button",
                    className: Nn.close,
                    ref: d,
                    onClick: m,
                    children: "Закрыть",
                  }),
                ],
              }),
            ],
          }),
          document.body
        ),
    ],
  });
}

const Xk = me(() => de(
  () => import("./index-DePV4dJ9.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
  );

const Qk = { xs: 12, sm: 14, md: 16, lg: 22 };
const Zk = "subscription_nuksta";
function fs({
  userId: e,
  compact: t,
  trailing: n,
  name: o,
  verified: r,
  hasNuksta: s,
  pin: a,
  halloween: c,
  size: l = "md",
  className: u,
  owner: d,
}) {
  const p = bl(e);

  const f = Yk(c)?.effects.find(P => P.slot === "pumpkin")?.parameters;

  const Qk_l = Qk[l];
  const g = R(null);
  const [m, v] = $(null);
  const [_, y] = $(false);
  const [w, N] = $(null);
  const k = !!a?.url && w === a.url;
  const S = a?.slug === Zk;

  const b = A(() => {
    if (!g.current) {
      return;
    }
    const P = g.current.getBoundingClientRect();
    v({ x: P.left + P.width / 2, y: P.top });
  }, []);

  const T = A(() => {
    v(null);
  }, []);

  const C =
    p &&
    i("span", {
      className: Oe.nickname,
      "data-nickname": p.id,
      title: p.label.toLocaleLowerCase("ru-RU"),
      children: i("bdi", {
        className: p.styleKey === "school_gold" ? Oe.schoolSilver : undefined,
        children: p.label.toLocaleLowerCase("ru-RU"),
      }),
    });

  const E = P => s
    ? i("span", {
        className: Oe.nukstaGlow,
        children: i("span", { className: Oe.text, children: P }),
      })
    : i("span", { className: Oe.text, children: P });

  const x = l === "lg" && (r || k || f) ? /\S+$/u.exec(o) : null;

  const I =
    (r || a || f) &&
    i("span", {
      className: Oe.badges,
      children: [
        r && i(G1, {}),
        a &&
          i("span", {
            ref: g,
            className: `${Oe.pinWrapper} ${S ? Oe.pinClickable : ""}`,
            style: k ? undefined : { display: "none" },
            onMouseEnter: b,
            onMouseLeave: T,
            onClick: S
              ? (P) => {
              P.stopPropagation();
              P.preventDefault();
              y(true);
            }
              : undefined,
            children: [
              i("img", {
                src: a.url,
                alt: a.name,
                className: Oe.pinBadge,
                width: Qk_l,
                height: Qk_l,
                onLoad: () => N(a.url || null),
                onError: () => N(null),
              }),
              m &&
                ft(
                  i("div", {
                    className: Oe.pinTooltip,
                    style: { left: `${m.x}px`, top: `${m.y}px` },
                    children: [
                      i("span", {
                        className: Oe.pinTooltipRow,
                        children: [
                          i("span", {
                            className: Oe.pinTooltipLabel,
                            children: "Пин:",
                          }),
                          " ",
                          a.name,
                        ],
                      }),
                      a.description &&
                        i("span", {
                          className: Oe.pinTooltipRow,
                          children: [
                            i("span", {
                              className: Oe.pinTooltipLabel,
                              children: "Ивент:",
                            }),
                            " ",
                            a.description,
                          ],
                        }),
                      i("span", { className: Oe.pinTooltipArrow }),
                    ],
                  }),
                  document.body
                ),
            ],
          }),
        f && i(Kk, { pumpkin: f, name: o, ...d }),
      ],
    });

  return i("span", {
    className: `${Oe.userName} ${Oe[l]} ${t && p ? Oe.compact : ""} ${
      p ? Oe.withNickname : Oe.plain
    } ${u || ""}`,
    "data-user-name": e,
    children: [
      p || l === "lg"
        ? i("span", {
            className: Oe.identity,
            children: x
              ? i(ue, {
                  children: [
                    E(o.slice(0, x.index)),
                    i("span", {
                      className: Oe.nameEnding,
                      children: [E(x[0]), I],
                    }),
                    C,
                  ],
                })
              : i(ue, { children: [E(o), I, C] }),
          })
        : i(ue, { children: [E(o), I] }),
      n &&
        i("span", {
          className: Oe.trailing,
          onClick: (P) => {
            P.preventDefault();
            P.stopPropagation();
          },
          children: n,
        }),
      _ &&
        i(Xe, {
          fallback: null,
          children: i(Xk, { isOpen: true, onClose: () => y(false) }),
        }),
    ],
  });
}
function Fd(e) {
  return !Ge(e) || e.status === 0 || e.status === 429 || e.status >= 500;
}
function Yn(e, t) {
  if (!e) {
    Su(null);
    return;
  }
  Su({ id: e.id, username: e.username ?? undefined, email: t ?? undefined });
}

const Rs = {
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

const ye = rt()(
  Ph(
    (e, t) => {
      const n = cl;

      Uh(async () => {
        try {
          const s = await zn.refreshSession();
          n(s.accessToken);
          return s.accessToken;
        } catch (s) {
          if (Fd(s)) {
            if (t().status !== "authenticated") {
              e({ status: "service_error" });
            }

            throw s;
          }
          t().reset();
          return null;
        }
      });

      L.setOnUnauthorizedCallback(() => {
        if (t().status !== "service_error") {
          t().reset();
        }
      });

      return {
        ...Rs,
        register: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await zn.register(r);

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: s.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const a = Ge(s) ? s.message : "Registration failed";
            const c = Ge(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        login: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await zn.login(r);
            if (SE(s)) {
              n(s.accessToken);
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                      status: "authenticated",
                      pendingEmail: null,
                      email: r.email,
                    });

                  Yn(t().profile, r.email);
                }
              } catch (c) {
                if (Ge(c) &&
                (c.code === H.ENTITY_NOT_FOUND || c.status === 404)) {
                  e({
                    status: "needs_profile",
                    pendingEmail: null,
                    email: r.email,
                  });
                } else {
                  throw c;
                }
              }
              return "authenticated";
            }
            const a = s;

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: a.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const a = Ge(s) ? s.message : "Login failed";
            const c = Ge(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        verifyOtp: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail, pendingPassword, flowToken } = t();
          try {
            const l = await zn.verifyOtp({
              email: pendingEmail || "",
              password: pendingPassword || "",
              otp: r,
              flowToken: flowToken || "",
            });
            e({ pendingPassword: null });

            if (EE(l)) {
              n(l.accessToken);
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

                  Yn(t().profile, u);
                }
              } catch (d) {
                if (Ge(d) &&
                (d.code === H.ENTITY_NOT_FOUND || d.status === 404)) {
                  e({
                    status: "needs_profile",
                    pendingEmail: null,
                    pendingPassword: null,
                    flowToken: null,
                    email: u,
                  });
                } else {
                  throw d;
                }
              }
              return "authenticated";
            }

            e({ status: "needs_verification" });
            return "password_reset";
          } catch (l) {
            const u = Ge(l) ? l.message : "Verification failed";
            const d = Ge(l) ? l.code : null;
            e({ status: "needs_verification", error: u, errorCode: d });
            throw l;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail, flowToken } = t();
          try {
            await zn.resendOtp({ email: pendingEmail || "", flowToken: flowToken || "" });
          } catch (a) {
            const c = Ge(a) ? a.message : "Failed to resend code";
            const l = Ge(a) ? a.code : null;
            e({ error: c, errorCode: l });
            throw a;
          }
        },
        createProfile: async (r) => {
          e({ error: null, errorCode: null });
          try {
            await Ns.createProfile(r);
            await t().fetchProfile();
            e({ status: "authenticated" });
            Yn(t().profile, t().email);
          } catch (s) {
            const a = Ge(s) ? s.message : "Failed to create profile";
            const c = Ge(s) ? s.code : null;
            e({ error: a, errorCode: c });
            throw s;
          }
        },
        logout: async () => {
          try {
            await zn.logout();
          } catch {
          } finally {
            n(null);
            e({ ...Rs, status: "unauthenticated" });
            Yn(null, null);
          }
        },
        logoutAll: async () => {
          try {
            await zn.logoutAll();
          } catch {
          } finally {
            n(null);
            e({ ...Rs, status: "unauthenticated" });
            Yn(null, null);
          }
        },
        refreshSession: async () => {
          try {
            return await Qo();
          } catch (r) {
            return Fd(r)
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const r = await Ns.getMyProfile();
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
              .some(s => s.trim().startsWith("is_auth="))
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
                Yn(t().profile, t().email);
              }
            } catch (a) {
              if (Ge(a) &&
              (a.code === H.ENTITY_NOT_FOUND || a.status === 404)) {
                e({ status: "needs_profile" });
              } else {
                throw a;
              }
            }
          } catch (s) {
            if (Ge(s) && s.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await Ns.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await Ns.restoreAccount();
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
          n(null);
          e({ ...Rs, status: "unauthenticated" });
          Yn(null, null);
        },
        setProfile: (r) => {
          e({ profile: r });
        },
      };
    },
    {
      name: "auth-storage",
      storage: il(() => sessionStorage),
      partialize: e => ({
        profile: e.profile,
        email: e.email
      }),
    }
  )
);

const dm = () => ye(e => e.status);

const lr = () => ye(e => e.profile);

const Hi = () => ye(e => e.status === "authenticated");

let Ao = null;
let _a = 0;
let Tc = 0;
let Hd;
let Vd;
function El() {
  if (!Bd) {
    (Bd = setInterval(() => {
      if (!document.hidden) {
        Mn(true);
      }
    }, 15000/* 15e3 */));

    window.addEventListener("focus", () => {
      Mn(true);
    });

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        Mn(true);
      }
    });
  }
}
function Mn(e = false) {
  if (Ao || (!e && vl_store.getState().status !== "checking")) {
    return Ao;
  }
  const t = ++_a;

  const n = L.get("/v1/event/status", { skipErrorToast: true })
    .then((o) => {
    if (_a !== t) {
      return;
    }
    if (typeof o?.enabled != "boolean") {
      throw new Error("Invalid event status");
    }
    clearTimeout(Hd);

    (Hd = setTimeout(
        () => vl_store.setState({ status: "error", enabled: false }),
        45000/* 45e3 */
      ));

    const o_enabled = o.enabled;
    clearTimeout(Vd);

    if (o_enabled &&
      typeof o.endsInSec == "number" &&
      Number.isFinite(o.endsInSec) &&
      o.endsInSec >= 0) {
      (Vd = setTimeout(
          () => vl_store.setState({ status: "denied", enabled: false }),
          Math.min(o.endsInSec * 1000/* 1e3 */, 2147483647)
        ));
    }

    vl_store.setState({ status: o_enabled ? "allowed" : "denied", enabled: o_enabled });
  })
    .catch(() => {
    if (_a === t) {
      vl_store.setState({ status: "error" });
    }
  })
    .finally(() => {
    if (Ao === n) {
      (Ao = null);
    }
  });

  (Ao = n);
  return n;
}
function As() {
  if (vl_store.getState().status === "error" && Date.now() - Tc >= 15000/* 15e3 */) {
    (Tc = Date.now());
    Mn(true);
  }
}
function cn() {
  return vl_store.getState().enabled;
}
function Jk() {
  M(() => {
    El();
    Mn();
  }, []);

  return vl_store(e => e.enabled);
}
function eN() {
  El();
  Mn();
}
function ps(e) {
  let t = vl_store.getState().enabled;
  return vl_store.subscribe((n) => {
    if (n.enabled !== t) {
      (t = n.enabled);
      e(n.enabled);
    }
  });
}
function ur() {
  const e = ye(r => r.status);

  const t = vl_store(r => r.status);

  const n = vl_store(r => r.enabled);

  M(() => {
    El();
    Mn();
  }, []);

  M(
    () => {
      window.addEventListener("online", As);
      window.addEventListener("focus", As);

      return () => {
        window.removeEventListener("online", As);
        window.removeEventListener("focus", As);
      };
    },
    []
  );

  return {
    status:
      e === "unauthenticated"
        ? "denied"
        : e !== "authenticated"
        ? "checking"
        : t === "error" && n
        ? "allowed"
        : t,
    retry: () => {
      (Tc = Date.now());
      Mn(true);
    },
  };
}
const tN = {
  alice_task_reminder: "alice_task_reminder",
  like: "post_reaction",
  comment_like: "comment_reaction",
  comment: "post_comment",
  reply: "comment_reply",
  repost: "post_repost",
  mention: "post_mention",
  follow: "follow",
  wall_post: "wall_post",
};
function Sl(e) {
  const t = e.type === "repost" ? null : e.subjectId ?? null;
  return {
    id: e.id,
    type: tN[e.type] ?? "follow",
    entityId: t ?? e.targetId ?? null,
    parentEntityId: t ? e.targetId ?? null : null,
    isRead: e.read ?? false,
    payload: {
      actors: e.actor ? [{ ...e.actor, halloween: cr(e.actor.halloween) }] : [],
      count: 1,
      entityPreview: e.preview ?? null,
      commentId: t ?? undefined,
      ...(e.type === "alice_task_reminder" && {
        title: e.title ?? "",
        eventId: e.eventId ?? undefined,
        expiresAt: e.expiresAt ?? undefined,
        clickUrl: "/event/alice-ai?source=push_tasks_reminder",
      }),
    },
    createdAt: e.createdAt,
    updatedAt: e.readAt ?? e.createdAt,
  };
}

const vr = {
    async getNotifications(e = {}) {
      const t = new URLSearchParams();
      const n = e.limit ?? 20;
      t.set("limit", n.toString());
      const o = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

      if (o > 0) {
        t.set("offset", o.toString());
      }

      const r = t.toString();
      const s = `${D.notifications.list}${r ? `?${r}` : ""}`;
      const a = await L.get(s);
      const c = a.notifications ?? [];
      const l = a.hasMore ? String(o + c.length) : null;
      return { notifications: c.map(Sl), nextCursor: l };
    },
    async getUnreadCount() {
      return (await L.get(D.notifications.count)).count;
    },
    async getUnreadStatus() {
      return L.get(D.notifications.count);
    },
    async markAllAsRead() {
      await L.post(D.notifications.markAllRead);
    },
    async getSettings() {
      const e = await L.get(D.notifications.settings);
      return {
        webEnabled: e.enabled ?? true,
        soundEnabled: e.sound ?? true,
        preferences: {
          follows: e.follows ?? true,
          reactions: e.likes ?? true,
          replies: e.comments ?? true,
          mentions: e.mentions ?? true,
          wallPosts: e.wallPosts ?? true,
        },
      };
    },
    async updateSettings(e) {
      const t = {};

      if (e.webEnabled !== undefined) {
        (t.enabled = e.webEnabled);
      }

      if (e.soundEnabled !== undefined) {
        (t.sound = e.soundEnabled);
      }

      const e_preferences = e.preferences;

      if (e_preferences?.follows !== undefined) {
        (t.follows = e_preferences.follows);
      }

      if (e_preferences?.reactions !== undefined) {
        (t.likes = e_preferences.reactions);
      }

      if (e_preferences?.replies !== undefined) {
        (t.comments = e_preferences.replies);
      }

      if (e_preferences?.mentions !== undefined) {
        (t.mentions = e_preferences.mentions);
      }

      if (e_preferences?.wallPosts !== undefined) {
        (t.wallPosts = e_preferences.wallPosts);
      }

      await L.put(D.notifications.settings, t);
    },
  };

const Wd = [1000/* 1e3 */, 2000/* 2e3 */, 4000/* 4e3 */, 8000/* 8e3 */, 16000/* 16e3 */, 30000/* 3e4 */];
const nN = 0.3;
const oN = 15;
function rN(e) {
  const t = Wd[Math.min(e, Wd.length - 1)];
  const n = t * nN * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
function sN(e) {
  const { url, onMessage, onStatusChange } = e;
  let r = null;
  let s = null;
  let a = 0;
  let c = null;
  function l() {
    if (r || s) {
      return;
    }
    if (!an()) {
      onStatusChange("error");
      return;
    }
    onStatusChange("connecting");
    const d = new AbortController();
    (r = d);

    (async () => {
      try {
        const f = await Fh(url, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            "Cache-Control": "no-cache",
          },
          signal: d.signal,
        });
        if (d.signal.aborted || r !== d) {
          await f.body?.cancel();
          return;
        }
        if (!f.ok) {
          if (f.status === 401) {
            (r = null);
            onStatusChange("error");
            return;
          }
          throw new Error(`SSE connection failed: ${f.status}`);
        }
        if (!f.body) {
          throw new Error("SSE response has no body");
        }
        (a = 0);
        onStatusChange("connected");

        if (c) {
          c.cancel().catch(() => {});
          (c = null);
        }

        const h = f.body.getReader();
        c = h;
        const g = new TextDecoder();
        let m = "";
        let v = "";
        let _ = [];

        while (true) {
          const { done, value } = await h.read();
          if (done) {
            if (d.signal.aborted || r !== d) {
              return;
            }
            throw new Error("SSE stream closed");
          }
          if (d.signal.aborted || r !== d) {
            return;
          }
          m += g.decode(value, { stream: true });
          const N = m.split(`
`);
          m = N.pop() || "";
          for (const k of N) {
            const S = k.replace(/\r$/, "");
            if (S.startsWith("event:")) {
              v = S.slice(6).replace(/^ /, "");
            } else if (S.startsWith("data:")) {
              _.push(S.slice(5).replace(/^ /, ""));
            } else if (S === "") {
              if (_.length) {
                try {
                  const b = JSON.parse(
                      _.join(`
`)
                    );

                  const T = v || b.type;
                  onMessage(T, b);
                } catch {
                  console.error("SSE message parse error");
                }
              }
              (v = "");
              (_ = []);
            }
          }
        }
      } catch (f) {
        if (d.signal.aborted || r !== d || f.name === "AbortError") {
          return;
        }

        if (c) {
          c.cancel().catch(() => {});
        }

        (c = null);
        (r = null);
        onStatusChange("error");

        if (a >= oN) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );
          return;
        }

        const h = rN(a);
        a++;

        (s = setTimeout(() => {
          (s = null);
          l();
        }, h));
      }
    })();
  }
  function u() {
    if (s) {
      clearTimeout(s);
      (s = null);
    }

    if (c) {
      c.cancel().catch(() => {});
      (c = null);
    }

    if (r) {
      r.abort();
      (r = null);
    }

    (a = 0);
    onStatusChange("disconnected");
  }
  return { connect: l, disconnect: u };
}
const iN = "/assets/chalk_icon-mgaQZG0s.svg";
const aN = "/assets/curtain_gathered-C9r-YF7B.png";
const cN = "/assets/curtain_spread-BNRn2v1V.png";
const lN = "/assets/curtains_icon-DktWcCFP.svg";
const uN = "/assets/cushion_fart-CMDuTici.mp3";
const dN = "/assets/glass_break-dVY7K4gp.wav";
const Ic = "/assets/icon-37-WRaw5P7H.svg";
const $c = "/assets/icon2-44-Dv1BiWsO.svg";
const fN = "/assets/iconsh-DyKtHiQX.svg";
const pN = "/assets/school_bell-D__r0mih.mp3";
const hN = "/assets/sticker_5plus-DOjFwL6Q.png";
const mN = "/assets/sticker_apple-5NwAflFs.png";
const gN = "/assets/sticker_bow-9c7EnTly.png";
const _N = "/assets/sticker_school_03-2EGjbexw.webp";
const vN = "/assets/sticker_school_04-DH5V9MQf.webp";
const yN = "/assets/sticker_school_05-xwkb2oon.webp";
const wN = "/assets/sticker_school_06-DQXC4ZRO.webp";
const bN = "/assets/sticker_school_07-CCPZolQF.webp";
const EN = "/assets/sticker_school_08-Ce8D6oEP.webp";
const SN = "/assets/sticker_school_09-BZQ2O5f3.webp";
const kN = "/assets/sticker_school_10-CmxZNY21.webp";
const NN = "/assets/sticker_school_12-wmL479lE.webp";
const CN = "/assets/sticker_school_13-ByMYsie6.webp";
const TN = "/assets/sticker_school_14-DZtvzIpA.webp";
const IN = "/assets/sticker_school_15-BgTh_9NX.webp";
const $N = "/assets/sticker_school_16-Do43bu8c.webp";
const RN = "/assets/sticker_school_17-BSU7xYJ4.webp";
const AN = "/assets/sticker_school_18-Bf7-nXq4.webp";
const xN = "/assets/sticker_school_19-ul_n3YVs.webp";
const LN = "/assets/sticker_school_20-jjiIUXq1.webp";
const PN = "/assets/sticker_school_21-58wdQpEs.webp";
const MN = "/assets/sticker_school_22-JECzGGuo.webp";
const ON = "/assets/sticker_school_23-BuMgtXwl.webp";
const DN = "/assets/sticker_school_24-CnPPU6Zu.webp";
const UN = "/assets/sticker_school_25-JTb-mSYd.webp";
const FN = "/assets/sticker_school_26-D-SnyQaj.webp";
const BN = "/assets/sticker_school_27-6ffXdqoL.webp";
const HN = "/assets/sticker_school_28-CZD3KsIr.webp";
const VN = "/assets/sticker_school_29-CLYxT5sy.webp";
const WN = "/assets/sticker_school_30-BxFYZtbi.webp";
const jN = "/assets/sticker_school_31-BVMKrhQS.webp";
const zN = "/assets/sticker_school_32-C2ha650b.webp";
const qN = "/assets/sticker_school_33-rvcEWDwh.webp";
const GN = "/assets/sticker_school_46-DS4CbHRm.webp";
const YN = "/assets/sticker_school_47-DHE3Yp0j.webp";
const KN = "/assets/sticker_school_alice_mark-CfF7bkcq.webp";
const XN = "/assets/sticker_school_alice_text-DcPXYUHD.webp";
const QN = "/assets/sticker_school_photo-DnJFBmUP.webp";
const ZN = "/assets/sticker_school_skull-Cieg1sS4.webp";
const JN = "/assets/sticker_scrape_1-kIXTTbQP.png";
const eC = "/assets/sticker_scrape_2-DEG3iIMX.png";
const tC = "/assets/sticker_scrape_3-BQF48-v6.png";
const nC = "/assets/sticker_star-DCXLHvZd.png";
const oC = "/assets/sticker_tear_2-BNerZgX5.png";
const rC = "/assets/sticker_tear_3-DBLwz7Xa.png";
const sC = "/assets/sticker_toad-k--DanVa.png";
const iC = "/assets/water_stain-CsPqi72P.svg";
const aC = "/assets/window-D5KYvQsI.png";
const cC = "/assets/window_broken-D0oHzxbP.png";

const lC = Object.assign({
  "./assets/chalk_icon.svg": iN,
  "./assets/curtain_gathered.png": aN,
  "./assets/curtain_spread.png": cN,
  "./assets/curtains_icon.svg": lN,
  "./assets/cushion_fart.mp3": uN,
  "./assets/glass_break.wav": dN,
  "./assets/icon-37.svg": Ic,
  "./assets/icon2-44.svg": $c,
  "./assets/iconsh.svg": fN,
  "./assets/school_bell.mp3": pN,
  "./assets/sticker_5plus.png": hN,
  "./assets/sticker_apple.png": mN,
  "./assets/sticker_bow.png": gN,
  "./assets/sticker_school_03.webp": _N,
  "./assets/sticker_school_04.webp": vN,
  "./assets/sticker_school_05.webp": yN,
  "./assets/sticker_school_06.webp": wN,
  "./assets/sticker_school_07.webp": bN,
  "./assets/sticker_school_08.webp": EN,
  "./assets/sticker_school_09.webp": SN,
  "./assets/sticker_school_10.webp": kN,
  "./assets/sticker_school_12.webp": NN,
  "./assets/sticker_school_13.webp": CN,
  "./assets/sticker_school_14.webp": TN,
  "./assets/sticker_school_15.webp": IN,
  "./assets/sticker_school_16.webp": $N,
  "./assets/sticker_school_17.webp": RN,
  "./assets/sticker_school_18.webp": AN,
  "./assets/sticker_school_19.webp": xN,
  "./assets/sticker_school_20.webp": LN,
  "./assets/sticker_school_21.webp": PN,
  "./assets/sticker_school_22.webp": MN,
  "./assets/sticker_school_23.webp": ON,
  "./assets/sticker_school_24.webp": DN,
  "./assets/sticker_school_25.webp": UN,
  "./assets/sticker_school_26.webp": FN,
  "./assets/sticker_school_27.webp": BN,
  "./assets/sticker_school_28.webp": HN,
  "./assets/sticker_school_29.webp": VN,
  "./assets/sticker_school_30.webp": WN,
  "./assets/sticker_school_31.webp": jN,
  "./assets/sticker_school_32.webp": zN,
  "./assets/sticker_school_33.webp": qN,
  "./assets/sticker_school_46.webp": GN,
  "./assets/sticker_school_47.webp": YN,
  "./assets/sticker_school_alice_mark.webp": KN,
  "./assets/sticker_school_alice_text.webp": XN,
  "./assets/sticker_school_photo.webp": QN,
  "./assets/sticker_school_skull.webp": ZN,
  "./assets/sticker_scrape_1.png": JN,
  "./assets/sticker_scrape_2.png": eC,
  "./assets/sticker_scrape_3.png": tC,
  "./assets/sticker_star.png": nC,
  "./assets/sticker_tear_2.png": oC,
  "./assets/sticker_tear_3.png": rC,
  "./assets/sticker_toad.png": sC,
  "./assets/water_stain.svg": iC,
  "./assets/window.png": aC,
  "./assets/window_broken.png": cC,
});

const ho = {};
for (const [e, t] of Object.entries(lC)) {
  ho[e.slice(9)] = t;
}

const uC = e => ho[`${e}.webp`] ?? ho[`${e}.svg`] ?? ho[`${e}.png`] ?? "";

const {
  "glass_break.wav": glass_breakWav,
  "school_bell.mp3": school_bellMp3,
  "cushion_fart.mp3": cushion_fartMp3
} = ho;

function fC(e, t = 0.65, n = Date.now() + 60000/* 6e4 */) {
  if (!cn() || !e || Date.now() >= n) {
    return () => {};
  }
  const o = new Audio(e);
  o.volume = t;
  let r = false;
  let s = false;
  let a;

  const c = () => {
    window.removeEventListener("pointerdown", l);
    window.removeEventListener("keydown", l);
    window.clearTimeout(a);
    (s = false);
  };

  const l = () => {
    c();

    if (!(!cn() || r || Date.now() >= n)) {
      o.play().catch(() => {});
    }
  };

  o.play().catch(() => {
    if (!r && !s && Date.now() < n) {
      (s = true);
      window.addEventListener("pointerdown", l, { once: true });
      window.addEventListener("keydown", l, { once: true });
      (a = window.setTimeout(c, Math.max(0, n - Date.now())));
    }
  });

  const u = () => {
    (r = true);
    c();
    o.pause();
    d();
  };

  const d = ps((p) => {
    if (!p) {
      u();
    }
  });

  return () => {
    d();
    (r = true);
    c();
    o.pause();
  };
}

const jd = {
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

const xs = new Map();
const Rc = new Set();
let va;
let xo = null;
let Rr = null;
let Ys = 0;
let ut = 0;
function fm(e, t = true) {
  if (!cn() ||
  !e.eventId ||
  !e.expiresAt ||
  !Number.isFinite(Date.parse(e.expiresAt)) ||
  Date.parse(e.expiresAt) <= Date.now()) {
    return;
  }
  const n = Sl(e);
  const o = et.getState();

  const r = o.notifications.some(a => a.id === e.id);

  let s = Rc.has(e.id);
  try {
    s ||= sessionStorage.getItem(`alice-reminder:${e.id}`) === "shown";
  } catch {}

  if (t &&
      !r) {
    et.setState({
      notifications: [n, ...o.notifications],
      unreadCount: o.unreadCount + (e.read || s ? 0 : 1),
    });
  }

  if (!(s || e.read || o.settings?.webEnabled === false)) {
    Rc.add(e.id);
    try {
      sessionStorage.setItem(`alice-reminder:${e.id}`, "shown");
    } catch {}

    et.setState({
      lastSseToast: {
        id: e.id,
        type: "alice_task_reminder",
        actorName: e.title ?? "",
        actorUsername: "",
        actorAvatar: "",
        count: 1,
        message: e.preview ?? "",
        clickUrl: n.payload.clickUrl,
        eventId: e.eventId,
        expiresAt: e.expiresAt,
      },
    });

    if (e.sound && o.settings?.soundEnabled !== false) {
      pm();
    }
  }
}
function gi(e) {
  et.setState((t) => {
    const n = t.notifications.filter(
      o => o.type === "alice_task_reminder" &&
      (e
        ? o.payload.eventId === e
        : Date.parse(o.payload.expiresAt ?? "") <= Date.now())
    );
    return n.length
      ? {
          notifications: t.notifications.filter(o => !n.includes(o)),
          unreadCount: Math.max(
            0,
            t.unreadCount - n.filter(o => !o.isRead).length
          ),
        }
      : t;
  });

  window.dispatchEvent(
    new CustomEvent("alice-reminder-expired", { detail: { eventId: e } })
  );
}
function yr() {
  if (et.getState().isInitialized) {
    Rr || Fo.connect();
    Date.now() - Ys > 15000/* 15e3 */ && et.getState().fetchUnreadCount();
  }
}

const Fo = sN({
    url: `${Dh}${D.notifications.stream}`,
    onMessage: (e, t) => {
      if (e === "notification.event-ended") {
        gi(t.eventId);
        et.getState().fetchUnreadCount();
        return;
      }
      if (e === "notification.event" && t.type === "alice_task_reminder") {
        fm(t);
        return;
      }
      if (e === "alice.bell") {
        if (!cn()) {
          return;
        }
        const n = t;
        const o = Date.parse(n.expiresAt ?? "");
        if (n.id && o > Date.now() && !xs.has(n.id)) {
          for (const [r, s] of xs) {
            if (s <= Date.now()) {
              xs.delete(r);
            }
          }
          xs.set(n.id, o);

          if (et.getState().settings?.soundEnabled !== false) {
            fC(school_bellMp3, 0.65, o);
          }

          window.dispatchEvent(
            new CustomEvent("alice-bell-toast", {
              detail: {
                buyerUsername:
                  typeof n.buyerUsername == "string"
                    ? n.buyerUsername.replace(/^@/, "")
                    : "",
              },
            })
          );
        }
        return;
      }
      if (e === "notification") {
        const n = Sl(t);
        const o = n.payload.actors[0];

        const r = {
          actorId: o?.id,
          actorHalloween: o?.halloween,
          id: n.id,
          type: n.type,
          actorName: o?.displayName || "Пользователь",
          actorUsername: o?.username || "",
          actorAvatar: o?.avatar || "",
          count: n.payload.count,
          message: hC(
            n.type,
            o?.displayName || "Пользователь",
            n.payload.count
          ),
          entityId: n.entityId,
          parentEntityId: n.parentEntityId,
        };

        et.setState(s => ({
          notifications: [n, ...s.notifications],
          unreadCount: s.unreadCount + 1,
          lastSseToast: r
        }));

        if (t.sound) {
          pm();
        }
      }
    },
    onStatusChange: (e) => {
      et.setState({
        sseStatus: e,
        error: e === "error" ? "SSE connection error" : null,
      });

      if (e === "connected" &&
        et.getState().isInitialized) {
        et.getState().fetchUnreadCount();
      }
    },
  });

const et = rt()((e, t) => ({
  ...jd,

  initialize: () => {
    if (t().isInitialized) {
      if (!Rr) {
        Fo.connect();
      }

      return;
    }
    e({ isInitialized: true });
    const n = ut;

    (Rr = t()
      .fetchSettings()
      .then(() => {
        if (n === ut) {
          Fo.connect();
          return t().fetchUnreadCount();
        }
      })
      .finally(() => {
      if (n === ut) {
        (Rr = null);
      }
    }));

    window.addEventListener("focus", yr);
    window.addEventListener("online", yr);
    const o = 300000/* 3e5 */ + Math.random() * 60000/* 6e4 */;
    va = setInterval(() => {
      gi();

      if (!document.hidden && Date.now() - Ys > o) {
        yr();
      }
    }, 1000/* 1e3 */);
  },

  fetchNotifications: async (n = false) => {
    const o = ut;
    const { status, nextCursor, notifications } = t();
    if (status !== "loading" && !(!n && nextCursor === null && notifications.length > 0)) {
      e({ status: "loading", error: null });
      try {
        const c = n ? undefined : nextCursor ?? undefined;
        const l = await vr.getNotifications({ cursor: c, limit: 20 });
        if (o !== ut) {
          return;
        }
        e({
          notifications: n ? l.notifications : [...notifications, ...l.notifications],
          nextCursor: l.nextCursor,
          status: "success",
        });
      } catch (c) {
        if (o !== ut) {
          return;
        }
        const l =
          c instanceof Error ? c.message : "Failed to fetch notifications";
        e({ status: "error", error: l });
      }
    }
  },

  fetchUnreadCount: async () => {
    if (xo) {
      return xo;
    }
    Ys = Date.now();
    const n = ut;

    (xo = (async () => {
      try {
        const o = await vr.getUnreadStatus();
        if (!t().isInitialized || n !== ut) {
          return;
        }
        const o_eventReminders = o.eventReminders;
        if (o_eventReminders) {
          window.dispatchEvent(
            new CustomEvent("alice-reminder-active", {
              detail: o_eventReminders.activeEventIds,
            })
          );
          for (const s of new Set(
            t()
              .notifications.filter(a => a.type === "alice_task_reminder")
              .map(a => a.payload.eventId)
          )) {
            if (s && !o_eventReminders.activeEventIds.includes(s)) {
              gi(s);
            }
          }

          if (o_eventReminders.latest) {
            fm(o_eventReminders.latest, false);
          }
        }
        e({ unreadCount: o.count });
      } catch {
      } finally {
        if (n === ut) {
          (xo = null);
        }
      }
    })());

    return xo;
  },

  markAllAsRead: async () => {
    e(n => ({
      notifications: n.notifications.map(o => ({
        ...o,
        isRead: true
      })),

      unreadCount: 0
    }));
    try {
      await vr.markAllAsRead();
    } catch {}
  },

  connectSSE: () => Fo.connect(),
  disconnectSSE: () => Fo.disconnect(),

  fetchSettings: async () => {
    const n = ut;
    e({ settingsLoading: true });
    try {
      const o = await vr.getSettings();
      if (n !== ut) {
        return;
      }
      e({ settings: o, settingsLoading: false });
    } catch {
      if (n === ut) {
        e({ settingsLoading: false });
      }
    }
  },

  updateSettings: async (n) => {
    const o = ut;
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
      await vr.updateSettings(n);
    } catch {
      if (o === ut) {
        e({ settings: r });
      }
    }
  },

  reset: () => {
    ut++;
    (Rr = null);
    (xo = null);
    (Ys = 0);
    Fo.disconnect();

    if (va) {
      clearInterval(va);
    }

    window.removeEventListener("focus", yr);
    window.removeEventListener("online", yr);
    Rc.clear();

    window.dispatchEvent(
      new CustomEvent("alice-reminder-expired", { detail: { all: true } })
    );

    e(jd);
  }
}));

const pC = {
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
};

function hC(e, t, n) {
  const pC_e = pC[e];
  return pC_e ? pC_e(t, n) : "Новое уведомление";
}
function pm() {
  try {
    const e = new Audio("/assets/notification.ogg");
    (e.volume = 0.5);
    e.play().catch(() => {});
  } catch {}
}

const hm = () => et(e => e.unreadCount);

const mC = () => et(e => e.lastSseToast);

ps((e) => {
  if (!e) {
    gi("aliceai-2026");

    window.dispatchEvent(
      new CustomEvent("alice-reminder-active", { detail: [] })
    );
  }
});
function mm(e = () => performance.now()) {
  const t = new WeakMap();
  const n = new Map();
  let o = 0;
  return {
    receive(r, s) {
      if (!s) {
        const c = n.get(r)?.deref();

        if (c) {
          (c.state = null);
          (c.received = e());
        }

        return s;
      }
      if (t.has(s)) {
        return s;
      }
      if (++o % 100 === 0) {
        for (const [c, l] of n) {
          if (!l.deref()) {
            n.delete(c);
          }
        }
      }
      const a = n.get(r)?.deref() ?? { state: null, received: 0 };
      (a.state = s);
      (a.received = e());
      t.set(s, a);
      n.set(r, new WeakRef(a));
      return s;
    },
    read(r) {
      return r ? t.get(r) : undefined;
    },
    replace(r, s, a = e()) {
      const c = n.get(r)?.deref();

      if (c && a >= c.received) {
        (c.state = s);
        (c.received = a);
      }

      return c ?? { state: s, received: a };
    },
    clear() {
      const r = e();
      for (const s of n.values()) {
        const a = s.deref();

        if (a) {
          (a.state = null);
          (a.received = r);
        }
      }
    },
  };
}
function _i(e, t, n = performance.now()) {
  return Date.parse(e.serverTime) + Math.max(0, n - t);
}
function gm(e) {
  const t = e.now ?? Date.now;
  const n = new Map();
  let o;
  let r = false;
  let s = false;
  let a = -Infinity;
  let c = 0;

  const l = () => {
      if (!e.hidden()) {
        if (r) {
          s = true;
          return;
        }

        if (!o) {
          (undefined = setTimeout(() => {
            (o = undefined);
            u();
          }, Math.max(100, 1000/* 1e3 */ - (t() - a))));
        }
      }
    };

  const u = async () => {
    if (r || e.hidden()) {
      return;
    }
    const d = e.ids();
    if (!d.length) {
      return;
    }
    const p = new Set(d);
    for (const g of n.keys()) {
      if (!p.has(g)) {
        n.delete(g);
      }
    }
    const f = d.filter(g => t() - (n.get(g) ?? -Infinity) >= 15000/* 15e3 */);
    (r = true);
    (a = t());
    const h = c;
    try {
      await e.inventory().catch(() => {});
      for (let g = 0; g < f.length && !(h !== c || e.hidden()); g += 100) {
        const m = f.slice(g, g + 100);
        await e.states(m);

        if (h === c) {
          for (const v of m) {
            n.set(v, t());
          }
        }
      }
    } catch {
    } finally {
      (r = false);

      if (s) {
        (s = false);
        l();
      }
    }
  };

  return {
    request: l,
    reset() {
      c++;
      n.clear();
      (a = -Infinity);

      if (o) {
        clearTimeout(o);
      }

      (o = undefined);
      (s = false);
    },
  };
}
const hs = mm();

const Vt = rt(() => ({
  posts: {},
  received: {},
  inventory: null,
  generation: 0
}));

const Zt = new Map();
let Ls;
let Gr = -Infinity;
let tn = 0;
let wr;
function _m(e = true) {
  if (!cn() || !an()) {
    Vt.setState({ inventory: null });
    return Promise.resolve();
  }
  if (wr?.generation === tn) {
    return wr.promise;
  }
  if (!e && Date.now() - Gr < 15000/* 15e3 */) {
    return Promise.resolve();
  }
  const t = tn;

  const n = Promise.resolve()
    .then(async () => {
      try {
        const o = await L.get("/red-pens/inventory", { skipErrorToast: true });

        if (t === tn) {
          (Gr = Date.now());
          Vt.setState({ inventory: o.data });
        }
      } catch (o) {
        if (t === tn &&
            Ge(o) &&
            o.status > 0 &&
            o.status < 500 &&
            o.status !== 429) {
          Vt.setState({ inventory: null });
        }

        throw o;
      }
    })
    .finally(() => {
    if (wr?.promise === n) {
      (wr = undefined);
    }
  });

  (wr = { generation: t, promise: n });
  return n;
}
async function kl(e = [...Zt.keys()]) {
  if (!e.length || !cn()) {
    return;
  }
  const t = tn;
  const n = performance.now();

  const o = await L.get(`/red-pens/state?ids=${e.join(",")}`, {
    skipErrorToast: true,
  });

  if (t !== tn) {
    return;
  }
  if (!o?.data || typeof o.data != "object" || Array.isArray(o.data)) {
    throw new Error("Invalid event state response");
  }

  const r = e
      .map((c) => {
        const l = o.data[c] ?? null;
        return [c, hs.replace(c, l, n)];
      })
      .filter(([c]) => Zt.has(c));

  const s = Object.fromEntries(r.map(([c, l]) => [c, l.state]));

  const a = Object.fromEntries(r.map(([c, l]) => [c, l.received]));

  Vt.setState(c => ({
    posts: { ...c.posts, ...s },
    received: { ...c.received, ...a }
  }));
}

const Vi = gm({
    ids: () => [...Zt.keys()],
    inventory: () => _m(false),
    states: kl,
    hidden: () => document.hidden,
  });

const Vi_request = Vi.request;
function gC(e) {
  Zt.set(e, (Zt.get(e) ?? 0) + 1);

  if (!Ls) {
    (Ls = setInterval(Vi_request, 15000/* 15e3 */));
    window.addEventListener("focus", Vi_request);
    document.addEventListener("visibilitychange", Vi_request);
  }

  Vi_request();

  return () => {
    const t = (Zt.get(e) ?? 1) - 1;

    if (t) {
      Zt.set(e, t);
    } else {
      Zt.delete(e);

      Vt.setState((n) => {
        const o = { ...n.posts };
        const r = { ...n.received };
        delete o[e];
        delete r[e];
        return { posts: o, received: r };
      });
    }

    if (!Zt.size) {
      Vi.reset();
      (Gr = -Infinity);
      clearInterval(Ls);
      (Ls = undefined);
      window.removeEventListener("focus", Vi_request);
      document.removeEventListener("visibilitychange", Vi_request);
      Vt.setState({ inventory: null });
    }
  };
}
Ui(() => {
  tn++;
  (Gr = -Infinity);
  Vi.reset();
  hs.clear();
  Vt.setState({ posts: {}, received: {}, inventory: null, generation: tn });

  if (Zt.size) {
    Vi_request();
  }
});
ps((e) => {
  if (!e) {
    tn++;
    (Gr = -Infinity);
    Vi.reset();
    hs.clear();
    Vt.setState({ posts: {}, received: {}, inventory: null, generation: tn });
  }
});
const ms = mm();

const Wt = rt(() => ({
  posts: {},
  received: {},
  inventory: null,
  generation: 0
}));

const Jt = new Map();
let Ps;
let Yr = -Infinity;
let nn = 0;
let br;
function vm(e = true) {
  if (!cn() || !an()) {
    Wt.setState({ inventory: null });
    return Promise.resolve();
  }
  if (br?.generation === nn) {
    return br.promise;
  }
  if (!e && Date.now() - Yr < 15000/* 15e3 */) {
    return Promise.resolve();
  }
  const t = nn;

  const n = Promise.resolve()
    .then(async () => {
      try {
        const o = await L.get("/correctors/inventory", {
          skipErrorToast: true,
        });

        if (t === nn) {
          (Yr = Date.now());
          Wt.setState({ inventory: o.data });
        }
      } catch (o) {
        if (t === nn &&
            Ge(o) &&
            o.status > 0 &&
            o.status < 500 &&
            o.status !== 429) {
          Wt.setState({ inventory: null });
        }

        throw o;
      }
    })
    .finally(() => {
    if (br?.promise === n) {
      (br = undefined);
    }
  });

  (br = { generation: t, promise: n });
  return n;
}
async function Nl(e = [...Jt.keys()]) {
  if (!e.length || !cn()) {
    return;
  }
  const t = nn;
  const n = performance.now();

  const o = await L.get(`/correctors/state?ids=${e.join(",")}`, {
    skipErrorToast: true,
  });

  if (t !== nn) {
    return;
  }
  if (!o?.data || typeof o.data != "object" || Array.isArray(o.data)) {
    throw new Error("Invalid event state response");
  }

  const r = e
      .map((c) => {
        const l = o.data[c] ?? null;
        return [c, ms.replace(c, l, n)];
      })
      .filter(([c]) => Jt.has(c));

  const s = Object.fromEntries(r.map(([c, l]) => [c, l.state]));

  const a = Object.fromEntries(r.map(([c, l]) => [c, l.received]));

  Wt.setState(c => ({
    posts: { ...c.posts, ...s },
    received: { ...c.received, ...a }
  }));
}

const Wi = gm({
    ids: () => [...Jt.keys()],
    inventory: () => vm(false),
    states: Nl,
    hidden: () => document.hidden,
  });

const Wi_request = Wi.request;
function _C(e) {
  Jt.set(e, (Jt.get(e) ?? 0) + 1);

  if (!Ps) {
    (Ps = setInterval(Wi_request, 15000/* 15e3 */));
    window.addEventListener("focus", Wi_request);
    document.addEventListener("visibilitychange", Wi_request);
  }

  Wi_request();

  return () => {
    const t = (Jt.get(e) ?? 1) - 1;

    if (t) {
      Jt.set(e, t);
    } else {
      Jt.delete(e);

      Wt.setState((n) => {
        const o = { ...n.posts };
        const r = { ...n.received };
        delete o[e];
        delete r[e];
        return { posts: o, received: r };
      });
    }

    if (!Jt.size) {
      Wi.reset();
      (Yr = -Infinity);
      clearInterval(Ps);
      (Ps = undefined);
      window.removeEventListener("focus", Wi_request);
      document.removeEventListener("visibilitychange", Wi_request);
      Wt.setState({ inventory: null });
    }
  };
}
Ui(() => {
  nn++;
  (Yr = -Infinity);
  Wi.reset();
  ms.clear();
  Wt.setState({ posts: {}, received: {}, inventory: null, generation: nn });

  if (Jt.size) {
    Wi_request();
  }
});
ps((e) => {
  if (!e) {
    nn++;
    (Yr = -Infinity);
    Wi.reset();
    ms.clear();
    Wt.setState({ posts: {}, received: {}, inventory: null, generation: nn });
  }
});
function Er(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const Mt = new yl(50, 300 * 1000/* 1e3 */);
const vC = 60 * 1000/* 1e3 */;
setInterval(() => Mt.cleanup(), 120 * 1000/* 1e3 */);
function yC(e) {
  return {
    id: e.id,
    username: e.username,
    displayName: e.displayName,
    avatar: e.avatar,
    baseAvatar:
      typeof e.baseAvatar == "string" || e.baseAvatar === null
        ? e.baseAvatar
        : undefined,
    isVerified: e.isVerified ?? e.verified ?? false,
    hasNuksta: e.hasNuksta ?? false,
    pin: e.pin ?? null,
    halloween: cr(e.halloween),
  };
}
function An(e) {
  const t = cn();

  const o = (e.attachments ?? []).map((p) => {
    if (p.type === "poll") {
      const f = p;

      const h = f.options.map(g => ({
        id: g.id,
        text: g.text,
        votes: g.votesCount ?? g.voteCount ?? g.votes ?? 0
      }));

      return {
        ...p,
        options: h,
        totalVotes: f.totalVotes ?? 0,
        multipleChoice: f.multipleChoice ?? false,
        myVotes: f.votedOptionIds?.length
          ? f.votedOptionIds
          : e.viewerStatus?.pollVote
          ? [e.viewerStatus.pollVote]
          : [],
        myVote: f.votedOptionIds?.[0] ?? e.viewerStatus?.pollVote ?? null,
      };
    }
    return p;
  });

  if (e.poll && !o.some(p => p.type === "poll")) {
    const e_poll = e.poll;

    const f = {
      id: e_poll.id,
      type: "poll",
      question: e_poll.question,
      multipleChoice: e_poll.multipleChoice ?? false,
      options: (e_poll.options ?? []).map(h => ({
        id: h.id,
        text: h.text,
        votes: h.votesCount ?? h.voteCount ?? 0
      })),
      totalVotes: e_poll.totalVotes ?? 0,
      myVotes: e_poll.votedOptionIds ?? [],
      myVote: e_poll.votedOptionIds?.length > 0 ? e_poll.votedOptionIds[0] : null,
    };

    o.push(f);
  }
  const r = e.stats?.reactions ?? e.likesCount ?? 0;
  const s = e.stats?.views ?? e.viewsCount ?? 0;
  const a = e.stats?.comments ?? e.commentsCount ?? 0;
  const c = e.stats?.reposts ?? e.repostsCount ?? 0;
  const l = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const u = e.viewerStatus?.isReposted ?? e.isReposted ?? false;
  const d = e.text ?? e.content ?? "";
  return {
    id: e.id,
    author: yC(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: d,
    spans: e.spans ?? [],
    corrector: t ? ms.receive(e.id, e.corrector) : undefined,
    redPen: t ? hs.receive(e.id, e.redPen) : undefined,
    notebook:
      t && (e.notebook?.style === "grid" || e.notebook?.style === "ruled")
        ? { style: e.notebook.style }
        : undefined,
    attachments: o,
    reactions: { total: r, myReaction: l },
    stats: { views: s, comments: a, reposts: c },
    reposted: u,
    originalPost: e.originalPost ? An(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
    vs: typeof e.vs == "string" ? e.vs : undefined,
  };
}

const Ze = {
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
      const r = `${D.posts.list}${o ? `?${o}` : ""}`;
      const s = await L.get(r);
      return { data: s.data.posts.map(An), nextCursor: Er(s.data) };
    },
    async getPost(e) {
      const t = await L.get(D.posts.single(e));
      return An(t.data);
    },
    async getUserWall(e, t = {}) {
      if (!t.cursor) {
        const n = e;
        const o = Mt.get(n);
        const r = o && o.pinnedPostId === (t.pinnedPostId ?? null);

        if (o && r && Mt.isFresh(n, vC)) {
          this._fetchAndCacheWall(e, t, n).catch(() => {});
          return { data: o.posts, nextCursor: o.nextCursor };
        }

        if (o && r) {
          this._fetchAndCacheWall(e, t, n).catch(() => {});
          return { data: o.posts, nextCursor: o.nextCursor };
        }

        return this._fetchAndCacheWall(e, t, n);
      }
      return this._fetchWall(e, t);
    },
    getCachedWall(e, t) {
      const n = Mt.get(e);
      return !n || n.pinnedPostId !== (t ?? null)
        ? null
        : { data: n.posts, nextCursor: n.nextCursor };
    },
    async _fetchAndCacheWall(e, t, n) {
      const o = await this._fetchWall(e, t);

      Mt.set(n, {
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
      const r = `${D.posts.byUser(e)}${o ? `?${o}` : ""}`;
      const s = await L.get(r);
      return { data: s.data.posts.map(An), nextCursor: Er(s.data) };
    },
    invalidateWallCache(e) {
      Mt.delete(e);
    },
    invalidateAllWallCaches() {
      Mt.clear();
    },
    updatePostInWallCache(e, t, n) {
      const o = Mt.get(e);
      if (o) {
        const r = o.posts.map(s => s.id === t ? { ...s, ...n } : s);
        Mt.set(e, { ...o, posts: r });
      }
    },
    removePostFromWallCache(e, t) {
      const n = Mt.get(e);
      if (n) {
        const o = n.posts.filter(r => r.id !== t);
        Mt.set(e, { ...n, posts: o });
      }
    },
    async likePost(e) {
      return await L.post(D.posts.like(e));
    },
    async unlikePost(e) {
      return await L.delete(D.posts.like(e));
    },
    async createPost(e) {
      return await L.post(D.posts.create, {
        content: e.text,
        spans: e.spans,
        wallRecipientId: e.wallOwnerId,
        attachmentIds: e.attachmentIds,
        poll: e.poll,
        notebook: e.notebook,
      });
    },
    async createRepost(e, t) {
      const n = await L.post(D.posts.repost(e), { content: t });
      return An(n);
    },
    async getPostsStats(e) {
      if (e.length === 0) {
        return [];
      }

      return (await L.post(`${D.posts.list}/stats`, { ids: e })).posts ?? [];
    },
    async editPost(e, t) {
      const n = t.content ?? t.text;
      await L.put(D.posts.update(e), { content: n, spans: t.spans });
    },
    async deletePost(e) {
      await L.delete(D.posts.delete(e));
    },
    async restorePost(e) {
      await L.post(D.posts.restore(e));
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
      const r = `${D.posts.byUser(e)}${o ? `?${o}` : ""}`;
      const s = await L.get(r);
      return { data: s.data.posts.map(An), nextCursor: Er(s.data) };
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
      const r = `${D.posts.likedByUser(e)}${o ? `?${o}` : ""}`;
      const s = await L.get(r);
      return { data: s.data.posts.map(An), nextCursor: Er(s.data) };
    },
    async pinPost(e) {
      await L.post(D.posts.pin(e));
    },
    async unpinPost(e) {
      await L.delete(D.posts.pin(e));
    },
    async votePoll(e, t) {
      const n = await L.post(D.posts.pollVote(e), { optionIds: t });
      return n.data ?? n;
    },
    async unrepost(e) {
      await L.delete(D.posts.repost(e));
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
      const r = `${D.hashtags.posts(e)}${o ? `?${o}` : ""}`;
      const s = await L.get(r);
      return { data: s.data.posts.map(An), nextCursor: Er(s.data) };
    },
  };

const wC = { new: "newest", old: "oldest", popular: "popular" };
function bC(e) {
  return {
    id: e.id,
    username: e.username,
    displayName: e.displayName,
    avatar: e.avatar,
    baseAvatar:
      typeof e.baseAvatar == "string" || e.baseAvatar === null
        ? e.baseAvatar
        : undefined,
    isVerified: e.isVerified ?? e.verified ?? false,
    hasNuksta: e.hasNuksta ?? false,
    pin: e.pin ?? null,
    halloween: cr(e.halloween),
  };
}
function Ac(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const o = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const r = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: bC(e.author),
    parentId: e.parentId,
    rootId: e.rootId ?? null,
    text: r,
    spans: e.spans ?? [],
    attachments: e.attachments ?? [],
    reactions: { total: t, myReaction: o },
    stats: { replies: n },
    replyTo: e.replyTo ?? null,
    previewReplies:
      e.previewReplies ?? e.replies
        ? (e.previewReplies ?? e.replies).map(Ac)
        : undefined,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}
const Kt = {
  async getComments(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.sort) {
      n.set("sort", wC[t.sort]);
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const o = n.toString();
    const r = `${D.posts.comments(e)}${o ? `?${o}` : ""}`;
    const s = await L.get(r);
    let a = [];
    let c = null;

    if (Array.isArray(s.data)) {
      (a = s.data);
    } else if (s.data && "comments" in s.data) {
      (a = s.data.comments);
      (c = s.data.nextCursor ?? null);
    } else if (s.comments) {
      (a = s.comments);
    }

    (c = c ?? s.cursor ?? s.meta?.cursor?.next ?? null);
    return { data: a.map(Ac), nextCursor: c };
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
    const r = `${D.comments.replies(e)}${o ? `?${o}` : ""}`;
    const s = await L.get(r);
    let a = [];
    let c = null;

    if (Array.isArray(s.data)) {
      (a = s.data);
    } else if (s.data && "replies" in s.data) {
      (a = s.data.replies);
      (c = s.data.nextCursor ?? null);
    } else if (s.replies) {
      (a = s.replies);
    }

    (c = c ?? s.cursor ?? s.meta?.cursor?.next ?? null);
    return { data: a.map(Ac), nextCursor: c };
  },
  async createComment(e, t, n, o, r) {
    return await L.post(D.posts.comments(e), {
      content: t,
      attachmentIds: r?.map(s => s.mediaId),
    });
  },
  async createReply(e, t, n, o, r) {
    return await L.post(D.comments.replies(e), {
      content: t,
      replyToUserId: o,
      attachmentIds: r?.map(s => s.mediaId),
    });
  },
  async editComment(e, t, n) {
    await L.patch(D.comments.edit(e), { content: t });
  },
  async deleteComment(e) {
    await L.delete(D.comments.delete(e));
  },
  async likeComment(e) {
    await L.post(D.comments.like(e));
  },
  async unlikeComment(e) {
    await L.delete(D.comments.like(e));
  },
};
function Ks(e, t, n) {
  const o = e.originalPost ? Ks(e.originalPost, t, n) : null;
  const r = e.author.id === t ? { ...e.author, halloween: n } : e.author;
  return r !== e.author || o !== e.originalPost
    ? { ...e, author: r, originalPost: o }
    : e;
}
function Xs(e, t, n) {
  const o = e.originalPost ? Xs(e.originalPost, t, n) : e.originalPost;

  const r =
    e.author.id === t && e.author.avatar !== n
      ? { ...e.author, avatar: n }
      : e.author;

  return r !== e.author || o !== e.originalPost
    ? { ...e, author: r, originalPost: o }
    : e;
}

const le = rt((e, t) => ({
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
  feedCache: {},
  feedRestoreToken: 0,
  profileScrollByUser: {},
  profileMeasuredHeightsByUser: {},
  highlightedPostId: null,
  postStatsCache: {},
  _lastPostEdit: null,
  _lastLikeUpdate: null,
  _lastRepostUpdate: null,
  _lastStatsBatch: null,
  _likePending: {},
  _likeSettledAt: {},
  currentPost: null,
  currentPostLoading: false,
  currentPostError: false,

  setActiveFeed: (n) => {
    const o = t();
    if (o.activeFeed === n) {
      return;
    }
    const r = o.feedCache[o.activeFeed];

    const s = {
      ...o.feedCache,
      [o.activeFeed]: {
        posts: o.posts,
        nextCursor: o.nextCursor,
        hasMore: o.hasMore,
        scrollPosition: typeof window !== "undefined" ? window.scrollY : 0,
        measuredHeights: r?.measuredHeights ?? o.feedMeasuredHeights,
      },
    };

    const s_n = s[n];

    if (s_n && s_n.posts.length > 0) {
      e({
            activeFeed: n,
            posts: s_n.posts,
            nextCursor: s_n.nextCursor,
            hasMore: s_n.hasMore,
            isLoading: false,
            isLoadingMore: false,
            error: null,
            feedScrollPosition: s_n.scrollPosition,
            feedMeasuredHeights: s_n.measuredHeights,
            feedCache: s,
            feedRestoreToken: o.feedRestoreToken + 1,
          });
    } else {
      e({
            activeFeed: n,
            posts: [],
            hasMore: true,
            nextCursor: null,
            isLoading: false,
            error: null,
            feedScrollPosition: 0,
            feedMeasuredHeights: new Map(),
            feedCache: s,
            feedRestoreToken: o.feedRestoreToken + 1,
          });
    }
  },

  fetchFeed: async (n = false) => {
    const { activeFeed: o, isLoading: r, isRefreshing: s } = t();
    if (!(r || s)) {
      e({ isLoading: !n, isRefreshing: n, error: null });
      try {
        const a = await Ze.getFeed(o, { limit: 20 });
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
          error: Ge(a) ? al(a.code, a.message) : "Не удалось загрузить ленту",
        });
      }
    }
  },

  loadMoreFeed: async () => {
    const {
      activeFeed: n,
      isLoadingMore: o,
      hasMore: r,
      nextCursor: s,
    } = t();
    if (!(o || !r)) {
      e({ isLoadingMore: true });
      try {
        const a = await Ze.getFeed(n, { limit: 20, cursor: s ?? undefined });
        e((c) => {
          const l = new Set(c.posts.map(u => u.id));
          return {
            posts: [...c.posts, ...a.data.filter(u => !l.has(u.id))],
            nextCursor: a.nextCursor,
            hasMore: a.nextCursor !== null,
            isLoadingMore: false,
          };
        });
      } catch {
        e({ isLoadingMore: false });
      }
    }
  },

  createPost: async ({
    wallOwnerId: n,
    text: o,
    spans: r = [],
    attachments: s = [],
    poll: a,
    notebook: c,
  }) => {
    const l = ye.getState().profile;
    if (!l) {
      throw new Error("Not authenticated");
    }
    try {
      const u = s.map(({ mediaId: h }) => h);

      const { id: d } = await Ze.createPost({
        wallOwnerId: n !== l.id ? n : undefined,
        text: o,
        spans: r.length > 0 ? r : undefined,
        attachmentIds: u.length > 0 ? u : undefined,
        poll: a
          ? {
              question: a.question,
              options: a.options,
              multipleChoice: a.multipleChoice ?? false,
            }
          : undefined,
        notebook: c,
      });

      const p = s.map(({ url: h }, g) => ({
        id: `temp-${g}`,
        url: h,
        type: "image"
      }));

      if (a) {
        p.push({
          id: `temp-poll-${Date.now()}`,
          type: "poll",
          question: a.question,
          options: a.options.map((h, g) => ({
            id: `temp-opt-${g}`,
            text: h.text,
            votes: 0
          })),
          totalVotes: 0,
          myVote: null,
        });
      }

      const f = {
        id: d,
        author: {
          id: l.id,
          username: l.username,
          displayName: l.displayName,
          avatar: l.avatar,
          isVerified: l.isVerified,
        },
        wallOwnerId: n,
        text: o,
        spans: r,
        notebook: c ? { style: c.style } : undefined,
        attachments: p,
        reactions: { total: 0, myReaction: null },
        stats: { views: 0, comments: 0, reposts: 0 },
        reposted: false,
        originalPost: null,
        dominantEmoji: null,
        createdAt: new Date().toISOString(),
        editedAt: null,
      };

      e(h => ({
        posts: [f, ...h.posts],
        highlightedPostId: d
      }));

      Ze.invalidateWallCache(n);
      try {
        const h = await Ze.getPost(d);
        e(g => ({
          posts: g.posts.map(m => m.id === d ? h : m)
        }));
      } catch {}
      return d;
    } catch (u) {
      console.error("Failed to create post:", u);
      throw u;
    }
  },

  clearHighlightedPost: () => {
    e({ highlightedPostId: null });
  },

  fetchPost: async (n) => {
    const o = t().posts.find(r => r.id === n);
    if (o) {
      e({ currentPost: o, currentPostLoading: false, currentPostError: false });
      return;
    }
    if (t().currentPost?.id !== n) {
      e({ currentPostLoading: true, currentPost: null, currentPostError: false });
      try {
        const r = await Ze.getPost(n);
        e({ currentPost: r, currentPostLoading: false, currentPostError: false });
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

  editPost: async (n, o, r) => {
    await Ze.editPost(n, { text: o, spans: r });
    const { posts: s, currentPost: a } = t();
    const c = new Date().toISOString();

    const l = s.find(u => u.id === n);

    e({
      posts: s.map(u => u.id === n ? { ...u, text: o, spans: r ?? u.spans, editedAt: c } : u
      ),
      currentPost:
        a?.id === n ? { ...a, text: o, spans: r ?? a.spans, editedAt: c } : a,
      _lastPostEdit: { postId: n, text: o, spans: r ?? [], editedAt: c },
    });

    if (l?.wallOwnerId) {
      Ze.updatePostInWallCache(l.wallOwnerId, n, {
        text: o,
        spans: r ?? l.spans,
        editedAt: c,
      });
    }
  },

  deletePost: async (n) => {
    const { posts: o, currentPost: r } = t();
    const s = o;

    const a = o.find(c => c.id === n);

    e({
      posts: o.filter(c => c.id !== n),
      currentPost: r?.id === n ? null : r,
    });
    try {
      await Ze.deletePost(n);
    } catch (c) {
      console.error("Failed to delete post:", c);

      if (a) {
        e({ posts: s });
      }

      throw c;
    }
  },

  removePost: (n) => {
    const { posts: o, currentPost: r, feedCache: s } = t();

    const a = o.find(c => c.id === n) ?? (r?.id === n ? r : undefined);

    e({
      posts: o.filter(c => c.id !== n),
      currentPost: r?.id === n ? null : r,
      feedCache: Object.fromEntries(
        Object.entries(s).map(([c, l]) => [
          c,
          l && { ...l, posts: l.posts.filter(u => u.id !== n) },
        ])
      ),
    });

    if (a) {
      Ze.removePostFromWallCache(a.author.username ?? a.author.id, n);
    }
  },

  updatePostLike: (n, o, r) => {
    e((s) => {
      const a = s.postStatsCache[n];

      const c = a
        ? {
            ...s.postStatsCache,
            [n]: {
              ...a,
              myReaction: o,
              likesTotal: Math.max(0, a.likesTotal + r),
            },
          }
        : s.postStatsCache;

      return {
        posts: s.posts.map(l => l.id === n
          ? {
              ...l,
              reactions: {
                ...l.reactions,
                myReaction: o,
                total: Math.max(0, l.reactions.total + r),
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
                  myReaction: o,
                  total: Math.max(0, s.currentPost.reactions.total + r),
                },
              }
            : s.currentPost,
        postStatsCache: c,
        _lastLikeUpdate: { postId: n, myReaction: o, totalDelta: r },
      };
    });
  },

  updatePostReposted: (n, o, r) => {
    e((s) => {
      const a = s.postStatsCache[n];

      const c = a
        ? {
            ...s.postStatsCache,
            [n]: {
              ...a,
              reposted: o,
              repostsCount: Math.max(0, a.repostsCount + r),
            },
          }
        : s.postStatsCache;

      return {
        posts: s.posts.map(l => l.id === n
          ? {
              ...l,
              reposted: o,
              stats: {
                ...l.stats,
                reposts: Math.max(0, l.stats.reposts + r),
              },
            }
          : l
        ),
        currentPost:
          s.currentPost?.id === n
            ? {
                ...s.currentPost,
                reposted: o,
                stats: {
                  ...s.currentPost.stats,
                  reposts: Math.max(0, s.currentPost.stats.reposts + r),
                },
              }
            : s.currentPost,
        postStatsCache: c,
        _lastRepostUpdate: { postId: n, reposted: o, countDelta: r },
      };
    });
  },

  prependPost: (n) => {
    e(o => ({
      posts: o.posts.some(r => r.id === n.id) ? o.posts : [n, ...o.posts],
      highlightedPostId: n.id
    }));

    t().seedPostStats(n);
  },

  seedPostStats: (n) => {
    e((o) => {
      const o_postStatsCache = o.postStatsCache;
      const s = {};

      const a = (l) => {
        if (!o_postStatsCache[l.id] &&
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
          a(l.originalPost);
        }
      };

      a(n);
      return Object.keys(s).length === 0 ? o : { postStatsCache: { ...o_postStatsCache, ...s } };
    });
  },

  beginLikeMutation: (n) => {
    e(o => ({
      _likePending: { ...o._likePending, [n]: (o._likePending[n] ?? 0) + 1 }
    }));
  },

  endLikeMutation: (n, o) => {
    e((r) => {
      const s = (r._likePending[n] ?? 1) - 1;
      const a = { ...r._likePending };

      if (s > 0) {
        (a[n] = s);
      } else {
        delete a[n];
      }

      const c = r.postStatsCache[n];
      const l = s === 0 && o !== undefined && c;
      return {
        _likePending: a,
        _likeSettledAt: { ...r._likeSettledAt, [n]: Date.now() },
        postStatsCache: l
          ? { ...r.postStatsCache, [n]: { ...c, likesTotal: o } }
          : r.postStatsCache,
        posts: l
          ? r.posts.map(u => u.id === n
          ? { ...u, reactions: { ...u.reactions, total: o } }
          : u
            )
          : r.posts,
      };
    });
  },

  applyStatsUpdates: (n, o = Date.now()) => {
    if (n.length === 0) {
      return;
    }
    const { _likePending: r, _likeSettledAt: s } = t();

    const a = u => (r[u] ?? 0) > 0 || (s[u] ?? 0) > o;

    const c = new Map(n.map(u => [u.id, u]));

    const l = (u) => {
      const d = c.get(u.id);
      const p = u.originalPost ? l(u.originalPost) : u.originalPost;
      return !d && p === u.originalPost
        ? u
        : {
            ...u,
            ...(d && {
              reactions: {
                ...u.reactions,
                total: a(u.id) ? u.reactions.total : d.likesCount,
              },
              stats: {
                ...u.stats,
                views: d.viewsCount,
                comments: d.commentsCount,
                reposts: d.repostsCount,
              },
              dominantEmoji: d.dominantEmoji,
            }),
            originalPost: p,
          };
    };

    e((u) => {
      const d = { ...u.postStatsCache };
      for (const p of n) {
        const f = d[p.id];

        if (f) {
          (d[p.id] = {
              ...f,
              likesTotal: a(p.id) ? f.likesTotal : p.likesCount,
              commentsCount: p.commentsCount,
              repostsCount: p.repostsCount,
              viewsCount: p.viewsCount,
              dominantEmoji: p.dominantEmoji,
            });
        }
      }
      return {
        posts: u.posts.map(l),
        currentPost: u.currentPost ? l(u.currentPost) : u.currentPost,
        postStatsCache: d,
        _lastStatsBatch: n.map(p => a(p.id)
          ? { ...p, likesCount: d[p.id]?.likesTotal ?? p.likesCount }
          : p
        ),
      };
    });
  },

  updatePollVote: (n, o, r) => {
    const s = (a) => {
      const c = a.attachments.findIndex(h => h.type === "poll");
      if (c === -1) {
        return a;
      }
      const l = a.attachments[c];

      const u = l.options.map(h => h.id === o
        ? { ...h, votes: (h.votes ?? 0) + 1 }
        : h.id === r
        ? { ...h, votes: Math.max(0, (h.votes ?? 0) - 1) }
        : h
      );

      const d = r ? 0 : 1;

      const p = {
        ...l,
        options: u,
        totalVotes: (l.totalVotes ?? 0) + d,
        myVote: o,
      };

      const f = [...a.attachments];
      (f[c] = p);
      return { ...a, attachments: f };
    };
    e((a) => {
      const c = a.posts.map(u => u.id === n ? s(u) : u);

      const l = a.currentPost?.id === n ? s(a.currentPost) : a.currentPost;
      return { posts: c, currentPost: l };
    });
  },

  updatePollData: (n, o) => {
    const r = (s) => {
      const a = s.attachments.findIndex(u => u.type === "poll");
      if (a === -1) {
        return s;
      }

      const c = {
          ...s.attachments[a],
          options: (o.options ?? []).map(u => ({
            id: u.id,
            text: u.text,
            votes: u.votesCount ?? u.voteCount ?? 0
          })),
          totalVotes: o.totalVotes ?? 0,
          myVote:
            (o.votedOptionIds?.length ?? 0) > 0 ? o.votedOptionIds[0] : null,
        };

      const l = [...s.attachments];
      (l[a] = c);
      return { ...s, attachments: l };
    };
    e((s) => {
      const a = s.posts.map(l => l.id === n ? r(l) : l);

      const c = s.currentPost?.id === n ? r(s.currentPost) : s.currentPost;
      return { posts: a, currentPost: c };
    });
  },

  setFeedScrollPosition: (n) => {
    e({ feedScrollPosition: n });
  },

  setFeedMeasuredHeights: (n) => {
    e({ feedMeasuredHeights: n });
  },

  cacheFeedHeights: (n, o) => {
    e((r) => {
      const s = r.feedCache[n];
      return {
        feedCache: {
          ...r.feedCache,
          [n]: {
            posts: s?.posts ?? [],
            nextCursor: s?.nextCursor ?? null,
            hasMore: s?.hasMore ?? true,
            scrollPosition: s?.scrollPosition ?? 0,
            measuredHeights: o,
          },
        },
        ...(r.activeFeed === n ? { feedMeasuredHeights: o } : {}),
      };
    });
  },

  setProfileScrollPosition: (n, o) => {
    e(r => ({
      profileScrollByUser: { ...r.profileScrollByUser, [n]: o }
    }));
  },

  setProfileMeasuredHeights: (n, o) => {
    e(r => ({
      profileMeasuredHeightsByUser: {
        ...r.profileMeasuredHeightsByUser,
        [n]: o,
      }
    }));
  },

  replaceAuthorAvatar: (n, o) => {
    Ze.invalidateAllWallCaches();

    e((r) => {
      const s = Object.fromEntries(
        Object.entries(r.feedCache).map(([a, c]) => [
          a,
          c && { ...c, posts: c.posts.map(l => Xs(l, n, o)) },
        ])
      );
      return {
        posts: r.posts.map(a => Xs(a, n, o)),
        currentPost: r.currentPost ? Xs(r.currentPost, n, o) : null,
        feedCache: s,
      };
    });
  },

  replaceAuthorHalloween: (n, o) => {
    Ze.invalidateAllWallCaches();

    e(r => ({
      posts: r.posts.map(s => Ks(s, n, o)),
      currentPost: r.currentPost ? Ks(r.currentPost, n, o) : null,

      feedCache: Object.fromEntries(
        Object.entries(r.feedCache).map(([s, a]) => [
          s,
          a && { ...a, posts: a.posts.map(c => Ks(c, n, o)) },
        ])
      )
    }));
  },

  reset: () => {
    t().feedMeasuredHeights.clear();

    de(async () => {
      const { useCommentsStore: n } = await Promise.resolve().then(
        () => NC
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
      feedCache: {},
      feedRestoreToken: 0,
      profileScrollByUser: {},
      profileMeasuredHeightsByUser: {},
      highlightedPostId: null,
      _lastPostEdit: null,
      _lastLikeUpdate: null,
      _lastRepostUpdate: null,
      _lastStatsBatch: null,
      _likePending: {},
      _likeSettledAt: {},
      postStatsCache: {},
      currentPost: null,
      currentPostLoading: false,
      currentPostError: false,
    });
  }
}));

const ya = Object.freeze(
  Object.defineProperty(
    { __proto__: null, usePostsStore: le },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Qs = rt()(
  Ph(
    e => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      }
    }),
    { name: "settings", storage: il(() => localStorage) }
  )
);

const Ct = new Map();
const EC = 60 * 1000/* 1e3 */;
const SC = 300 * 1000/* 1e3 */;
const zd = 20;
const qd = 500;
function kC() {
  const e = Date.now();
  for (const [t, n] of Ct.entries()) {
    if (e - n.timestamp > SC) {
      Ct.delete(t);
    }
  }
  if (Ct.size > zd) {
    const t = Array.from(Ct.entries()).sort(
      (o, r) => o[1].timestamp - r[1].timestamp
    );
    t.slice(0, t.length - zd).forEach(([o]) => Ct.delete(o));
  }
}

const Ln = rt((e, t) => ({
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
    const { usePostsStore: o } = await de(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => ya);
        return { usePostsStore: u };
      }, undefined);

    const r = o.getState().currentPost;
    if (r && r.id === n && r.stats.comments === 0) {
      e({
        comments: [],
        commentsLoading: false,
        commentsHasMore: false,
        commentsNextCursor: null,
      });
      return;
    }
    kC();
    const s = Qs.getState().commentsSort;
    const a = n;
    const c = Ct.get(a);
    const l = Date.now();
    if (c && c.sort === s) {
      if (l - c.timestamp < EC) {
        e({
          comments: c.comments,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.hasMore,
          commentsLoading: false,
        });

        Kt.getComments(n, { limit: 100, sort: s })
          .then((d) => {
          const d_data = d.data;

          Ct.set(a, {
            comments: d_data,
            hasMore: d.nextCursor !== null,
            nextCursor: d.nextCursor,
            timestamp: Date.now(),
            sort: s,
          });

          e(f => f.comments.length > 0 && f.comments[0]?.postId === n
            ? {
                comments: d_data,
                commentsNextCursor: d.nextCursor,
                commentsHasMore: d.nextCursor !== null,
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
      const u = await Kt.getComments(n, { limit: 100, sort: s });
      const u_data = u.data;

      Ct.set(a, {
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
      commentsLoadingMore: o,
      commentsHasMore: r,
      commentsNextCursor: s,
    } = t();
    if (o || !r) {
      return;
    }
    const a = Qs.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await Kt.getComments(n, {
        limit: 100,
        sort: a,
        cursor: s ?? undefined,
      });
      e((l) => {
        const u = [...l.comments, ...c.data];
        return {
          comments: u.length > qd ? u.slice(-qd) : u,
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
    const { comments: o } = t();

    let r = o.findIndex(m => m.id === n);

    let s = false;
    let a = -1;
    let c = -1;
    if (r === -1) {
      for (let m = 0; m < o.length; m++) {
        const _ = (o[m].previewReplies ?? []).findIndex(y => y.id === n);
        if (_ !== -1) {
          (s = true);
          (a = m);
          (c = _);
          break;
        }
      }
    }
    if (r === -1 && !s) {
      return;
    }
    const l = s ? o[a].previewReplies[c] : o[r];
    const u = l.reactions.myReaction;
    const d = l.reactions.total;
    const p = u !== null;
    const f = p ? Math.max(0, d - 1) : d + 1;
    const h = p ? null : "love";
    const g = [...o];
    if (s) {
      const m = [...(g[a].previewReplies ?? [])];
      (m[c] = { ...m[c], reactions: { total: f, myReaction: h } });
      (g[a] = { ...g[a], previewReplies: m });
    } else {
      g[r] = { ...g[r], reactions: { total: f, myReaction: h } };
    }
    e({ comments: g });
    try {
      if (p) {
        await Kt.unlikeComment(n);
      } else {
        await Kt.likeComment(n);
      }
    } catch (m) {
      console.error("Failed to toggle comment like:", m);
      const v = [...t().comments];
      if (s) {
        const _ = v.findIndex(y => y.previewReplies?.some(w => w.id === n)
        );
        if (_ !== -1) {
          const y = v[_].previewReplies.findIndex(w => w.id === n);
          if (y !== -1) {
            const w = [...v[_].previewReplies];
            (w[y] = { ...w[y], reactions: { total: d, myReaction: u } });
            (v[_] = { ...v[_], previewReplies: w });
          }
        }
      } else {
        const _ = v.findIndex(y => y.id === n);

        if (_ !== -1) {
          (v[_] = { ...v[_], reactions: { total: d, myReaction: u } });
        }
      }
      e({ comments: v });
    }
  },

  addComment: async (
    n,
    {
      text: o,
      spans: r = [],
      parentId: s,
      attachments: a,
      replyToUserId: c,
      replyToInfo: l,
    }
  ) => {
    try {
      const u = s
          ? await Kt.createReply(s, o, r, c, a)
          : await Kt.createComment(n, o, r, undefined, a);

      const d = ye.getState().profile;
      if (d) {
        const m = (u.attachments || [])
            .filter(_ => typeof _ == "object" && _ !== null)
            .map(_ => _.type === "media" && _.media
          ? {
              id: _.media.id,
              type: _.media.type,
              url: _.media.url,
              duration: _.media.duration,
            }
          : { id: _.id, type: _.type, url: _.url, duration: _.duration }
            );

        const v = {
          id: u.id,
          postId: n,
          author: {
            id: d.id,
            username: d.username,
            displayName: d.displayName,
            avatar: d.avatar,
            isVerified: d.isVerified,
          },
          parentId: s ?? null,
          rootId: s ?? null,
          text: u.text ?? u.content ?? o,
          spans: u.spans,
          attachments: m,
          replyTo: u.replyTo ?? l ?? null,
          reactions: { total: 0, myReaction: null },
          stats: { replies: 0 },
          createdAt: new Date().toISOString(),
          editedAt: null,
        };

        e(
          s
            ? _ => ({
            comments: _.comments.map(y => y.id === s
              ? {
                  ...y,
                  previewReplies: [...(y.previewReplies || []), v],
                  stats: { ...y.stats, replies: y.stats.replies + 1 },
                }
              : y
            ),

            highlightedCommentId: u.id
          })
            : _ => ({
            comments: [v, ..._.comments],
            highlightedCommentId: u.id
          })
        );
      }

      const { usePostsStore: p } = await de(async () => {
          const { usePostsStore: m } = await Promise.resolve().then(() => ya);
          return { usePostsStore: m };
        }, undefined);

      const f = p.getState();

      if (f.currentPost &&
        f.currentPost.id === n) {
        p.setState({
          currentPost: {
            ...f.currentPost,
            stats: {
              ...f.currentPost.stats,
              comments: f.currentPost.stats.comments + 1,
            },
          },
        });
      }

      const h = Qs.getState().commentsSort;
      const g = Ct.get(n);

      if (g) {
        Ct.set(n, { ...g, comments: t().comments, timestamp: Date.now() });
      } else {
        Ct.set(n, {
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
    const { comments: o } = t();
    if (o.findIndex(s => s.id === n) !== -1) {
      try {
        const s = await Kt.getReplies(n, { limit: 100 });
        e(a => ({
          comments: a.comments.map(c => c.id === n ? { ...c, previewReplies: s.data } : c
          )
        }));
      } catch (s) {
        console.error("Failed to load replies:", s);
      }
    }
  },

  editComment: async (n, o, r) => {
    const { comments: s } = t();

    const a = l => l.map(u => u.id === n
      ? {
          ...u,
          text: o,
          spans: r ?? u.spans,
          editedAt: new Date().toISOString(),
        }
      : u.previewReplies
      ? {
          ...u,
          previewReplies: u.previewReplies.map(d => d.id === n
            ? {
                ...d,
                text: o,
                spans: r ?? d.spans,
                editedAt: new Date().toISOString(),
              }
            : d
          ),
        }
      : u
    );

    const c = s;
    e({ comments: a(s) });
    try {
      await Kt.editComment(n, o, r);
    } catch (l) {
      console.error("Failed to edit comment:", l);
      e({ comments: c });
      throw l;
    }
  },

  deleteComment: async (n) => {
    const { comments: o } = t();

    const r = o.some(u => u.id === n);

    const s = o.find(u => u.previewReplies?.some(d => d.id === n));

    const a = o;

    if (r) {
      e({ comments: o.filter(u => u.id !== n) });
    } else if (s) {
      e({
        comments: o.map(u => u.id === s.id
          ? {
              ...u,
              previewReplies: u.previewReplies?.filter(d => d.id !== n),
              stats: { ...u.stats, replies: u.stats.replies - 1 },
            }
          : u
        ),
      });
    }

    const { usePostsStore: c } = await de(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => ya);
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
      await Kt.deleteComment(n);
    } catch (u) {
      console.error("Failed to delete comment:", u);
      e({ comments: a });
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
    Ct.clear();

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

const NC = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useCommentsStore: Ln },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const vi = {
  feed_global: 1,
  feed_following: 2,
  feed_clan: 3,
  profile: 4,
  hashtag: 5,
  post_page: 6,
  link: 7,
  search: 8,
};

const CC = 0;
const TC = 1;
const IC = 2;
const $C = 3;
const Gd = 4;
const RC = 5;
const AC = 250;
const xC = 0.5;
const LC = 30000/* 3e4 */;
const PC = 2000/* 2e3 */;
const MC = 20;
const Yd = "dwell_sid";

const OC = [
  0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
  0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
];

function DC() {
  try {
    let e = sessionStorage.getItem(Yd);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Yd, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
function UC(e) {
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
  return ((intersectionRect ? intersectionRect.height / boundingClientRect.height : 0) >= xC ||
  (rootBounds ? intersectionRect.height >= rootBounds.height / 2 : false) || e.intersectionRatio > 0.95);
}
class FC {
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
    (this.sessionId = DC());

    (this.observer = new IntersectionObserver(
        (o) => {
          for (const r of o) {
            const s = this.elementToPostId.get(r.target);
            if (!s) {
              continue;
            }
            const a = this.posts.get(s);

            if (a) {
              (a.lastEntry = r);
              this.evaluate(a, null);
            }
          }
        },
        { threshold: OC }
      ));

    const t = () => {
        this.lastActivityAt = Date.now();
      };

    const n = ["mousemove", "scroll", "keydown", "touchstart", "wheel"];
    for (const o of n) {
      window.addEventListener(o, t, { passive: true });
    }

    document.addEventListener("visibilitychange", () => {
      const o = document.hidden ? IC : null;
      this.evaluateAll(o);

      if (document.hidden) {
        this.flushBeacon();
      }
    });

    window.addEventListener("blur", () => {
      setTimeout(() => {
        if (!document.hidden) {
          this.evaluateAll(TC);
        }
      }, 50);
    });

    window.addEventListener("focus", () => this.evaluateAll(null));

    setInterval(() => this.evaluateAll(null), 5000/* 5e3 */);

    window.addEventListener("pagehide", () => {
      this.evaluateAll($C);
      this.flushBeacon();
    });

    setInterval(() => this.flush(), PC);
  }
  observe(t, n, o, r, s) {
    if (!this.observer) {
      this.init();
    }

    if (!this.observer) {
      return;
    }

    const a = this.elementToPostId.get(t);
    if (a && a !== n) {
      const c = this.posts.get(a);

      if (c && c.element === t) {
        this.evaluate(c, Gd);
        this.posts.delete(a);
      }
    }
    this.elementToPostId.set(t, n);

    this.posts.set(n, {
      postId: n,
      source: o,
      sourceContext: r,
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

    const o = this.posts.get(n);

    if (o) {
      this.evaluate(o, Gd);
      this.posts.delete(n);
    }
  }
  isUserActive() {
    return Date.now() - this.lastActivityAt < LC && !document.hidden;
  }
  evaluateAll(t) {
    for (const n of this.posts.values()) {
      this.evaluate(n, t);
    }
  }
  evaluate(t, n) {
    const t_lastEntry = t.lastEntry;
    const r = !!t_lastEntry && UC(t_lastEntry);
    const s = r && this.isUserActive() && n === null;
    const a = t.visibleSince !== null;
    const c = Date.now();
    if (!a && s) {
      t.visibleSince = c;
      return;
    }
    if (a && !s) {
      const t_visibleSince = t.visibleSince;
      const u = c - t_visibleSince;
      (t.visibleSince = null);

      if (u < AC) {
        return;
      }

      const d = n ?? (r ? RC : CC);
      const p = this.seenPostIds.has(t.postId);
      this.seenPostIds.add(t.postId);
      const f = t.source === "post_page" || t.source === "link";
      const h = { md: u, et: t_visibleSince, xt: c, r: d, v: t.vs };

      if (t.sourceContext) {
        (h.sc = t.sourceContext);
      }

      if (f) {
        (h.s = vi[t.source]);
      }

      if (p) {
        (h.b = 1);
      }

      this.enqueue(h, t.postId, vi[t.source]);
    }
  }
  enqueue(t, n, o) {
    this.buffer.push(t);

    if (this.buffer.length >= MC) {
      this.flush();
    }
  }
  async maybeCompress(t) {
    const n = { "Content-Type": "application/json" };
    if (typeof CompressionStream === "undefined" || t.length < 512) {
      return { body: new TextEncoder().encode(t), headers: n };
    }
    try {
      const o = new Blob([t])
          .stream()
          .pipeThrough(new CompressionStream("deflate"));

      const r = await new Response(o).arrayBuffer();
      if (r.byteLength < t.length) {
        return { body: r, headers: { ...n, "Content-Encoding": "deflate" } };
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
    const { body: o, headers: r } = await this.maybeCompress(n);
    L.post(D.posts.dwellLog, o, { headers: r }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    L.post(
      D.posts.dwellLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const Kd = new FC();
function BC(e, t, n, o = "", r = undefined) {
  M(() => {
    const t_current = t.current;
    if (!(!t_current || !r)) {
      Kd.observe(t_current, e, n, o, r);

      return () => {
        Kd.unobserve(t_current);
      };
    }
  }, [e, t, n, o, r]);
}
function Cl(e) {
  const t = le(n => n.postStatsCache[e.id]);
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
const ym = "shop-cart";
function Xd() {
  try {
    const e = localStorage.getItem(ym);
    if (!e) {
      return 0;
    }
    const t = JSON.parse(e)?.state?.items;
    return Array.isArray(t)
      ? t.reduce((n, o) => n + (Number(o?.qty) || 0), 0)
      : 0;
  } catch {
    return 0;
  }
}
function wm() {
  const [e, t] = $(Xd);

  M(() => {
    const n = (o) => {
      if (o.key === null || o.key === ym) {
        t(Xd());
      }
    };
    window.addEventListener("storage", n);

    return () => window.removeEventListener("storage", n);
  }, []);

  return e;
}

const HC = me(() => de(() => import("./index-BQ6DAL2g.js"), __vite__mapDeps([8, 9])).then(
  e => ({
    default: e.ChangelogModal
  })
)
  );

const VC = me(() => de(
  () => import("./index-DePV4dJ9.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const bm = ({
  href: e,
  icon: t,
  children: n,
  badge: o,
  onActiveClick: r,
  isActive: s = false,
}) => {
  const [a] = ds();
  const c = a.url || "/";
  const u = c === e || c.startsWith(`${e}/`) || s;
  return i("a", {
    href: e,
    className: `${qe.navItem} ${u ? qe.active : ""}`,
    onClick: (d) => {
      if (u && r) {
        d.preventDefault();
        r();
      }
    },
    children: [
      i("span", {
        className: qe.iconWrapper,
        children: [
          t,
          o !== undefined &&
            o > 0 &&
            i("span", { className: qe.badge, children: o > 99 ? "99+" : o }),
        ],
      }),
      i("span", { children: n }),
    ],
  });
};

const Ms = e => i(bm, { ...e });

const WC = () => {
  const t = Ke(N => N.event)?.visible === true;

  const [n] = ds();

  const o = le(N => N.fetchFeed);

  const r = le(N => N.isRefreshing);

  const s = ye(N => N.logout);

  const a = Hi();
  const c = lr();
  const l = hm();
  const u = wm();
  const [d, p] = $(false);
  const [f, h] = $(false);
  const g = (n.url || "/").startsWith(he.EVENT);
  const m = c?.username ? `/@${c.username}` : "/profile";

  const v = A(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      o(true);
    }
  }, [o]);

  const _ = A(() => {
    s();
  }, [s]);

  const y = Ie(() => {
    const N = n.url || "/";
    return _l.some(k => N.startsWith(k));
  }, [n.url]);

  const w = Ie(() => {
    const N = n.url || "/";
    return c?.username
      ? N === `/@${c.username}` || N.startsWith(`/@${c.username}/`)
      : false;
  }, [n.url, c?.username]);

  return y
    ? null
    : i("aside", {
        className: qe.aside,
        children: [
          i("div", {
            className: qe.asideTop,
            children: [
              i("div", {
                className: qe.asideBrand,
                children: [
                  i(F1, {}),
                  t &&
                    i("span", {
                      className: qe.brandSpider,
                      "aria-hidden": "true",
                      children: [
                        i("i", { className: qe.spiderThread }),
                        i("span", {
                          className: qe.spiderBody,
                          children: [
                            i("svg", {
                              viewBox: "0 0 14 60",
                              children: i("ellipse", {
                                cx: "7",
                                cy: "31.5",
                                rx: "3",
                                ry: "3.8",
                                fill: "currentColor",
                              }),
                            }),
                            i("svg", {
                              className: qe.spiderLegs,
                              viewBox: "0 0 14 60",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "1",
                              strokeLinecap: "round",
                              children: i("path", {
                                d: "M4.5 29.5 1 27.5M4.2 31.5H.7M4.5 33.5 1.2 36M9.5 29.5 13 27.5M9.8 31.5h3.5M9.5 33.5l3.3 2.5",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  i("button", {
                    className: qe.asideBrandVersion,
                    onClick: () => p(true),
                    title: "Что нового",
                    children: ["v", "1.1.2"],
                  }),
                ],
              }),
              i("nav", {
                className: qe.nav,
                children: [
                  i(Ms, {
                    href: "/",
                    icon: r ? i(hl, {}) : i(jh, {}),
                    onActiveClick: v,
                    children: "Лента",
                  }),
                  i(Ms, {
                    href: "/search",
                    icon: i(Yh, {}),
                    children: "Поиск",
                  }),
                  i(Ms, {
                    href: "/shop",
                    icon: i(Kh, {}),
                    badge: u,
                    children: "Магаз",
                  }),
                  i("a", {
                    href: t ? mt.route : undefined,
                    "aria-disabled": !t,
                    className: `${qe.portalButton} ${
                      t ? qe.portalActive : ""
                    } ${g ? qe.active : ""}`,
                    title: "Ивент",
                    children: [
                      i("img", {
                        src: t
                          ? "/assets/portal/portal-active.gif"
                          : "/assets/portal/portal-inactive.png",
                        alt: "Ивент",
                        className: qe.portalImage,
                      }),
                      i("span", { children: "Ивент" }),
                    ],
                  }),
                  i(Ms, {
                    href: "/notifications",
                    icon: i(ml, {}),
                    badge: l,
                    children: "Уведомления",
                  }),
                  i(bm, {
                    href: m,
                    icon: i(yc, {}),
                    isActive: w,
                    children: "Профиль",
                  }),
                ],
              }),
            ],
          }),
          i("div", {
            className: qe.asideBottom,
            children: a
              ? i(ue, {
                  children: [
                    !c?.subscription?.isActive &&
                      i("button", {
                        className: qe.logoutButton,
                        onClick: () => h(true),
                        children: [
                          i("span", { children: "⭐" }),
                          i("span", { children: "ИТД НУКСТА" }),
                        ],
                      }),
                    i("button", {
                      className: qe.logoutButton,
                      onClick: _,
                      children: [
                        i(H1, { size: 20 }),
                        i("span", { children: "Выйти" }),
                      ],
                    }),
                  ],
                })
              : i("a", {
                  className: qe.logoutButton,
                  href: he.LOGIN,
                  children: [
                    i(yc, { size: 20 }),
                    i("span", { children: "Войти" }),
                  ],
                }),
          }),
          d &&
            i(Xe, {
              fallback: null,
              children: i(HC, { isOpen: d, onClose: () => p(false) }),
            }),
          f &&
            i(Xe, {
              fallback: null,
              children: i(VC, { isOpen: f, onClose: () => h(false) }),
            }),
        ],
      });
};

const jC = "ojKE";
const zC = "tsSm";
const qC = "zldj";
const GC = "wRMG";
const Sr = { sidebar: jC, sidebarContent: zC, sidebarBottom: qC, legalLinks: GC };

const YC = () => {
  const [e] = ds();
  return Ie(() => {
    const n = e.url || "/";
    return _l.some(o => n.startsWith(o));
  }, [e.url])
    ? null
    : i("aside", {
        className: Sr.sidebar,
        children: [
          i("div", { className: Sr.sidebarContent }),
          i("div", {
            className: Sr.sidebarBottom,
            children: [
              i("ul", {
                className: Sr.legalLinks,
                children: [
                  i("li", {
                    children: i("a", {
                      href: "https://статус.итд.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Статус серверов",
                    }),
                  }),
                  i("li", {
                    children: i("a", {
                      href: "/terms",
                      children: "Условия использования",
                    }),
                  }),
                  i("li", {
                    children: i("a", {
                      href: "/privacy",
                      children: "Конфиденциальность",
                    }),
                  }),
                  i("li", {
                    children: i("a", {
                      href: "/cookies",
                      children: "Политика Cookies",
                    }),
                  }),
                ],
              }),
              i("span", {
                className: Sr.copyright,
                children: "© 2026 ООО «ИТД»",
              }),
            ],
          }),
        ],
      });
};

const KC = "fhyA";
const XC = "xV9i";
const QC = "R1TK";
const ZC = "SB56";
const JC = "ypxh";
const e2 = "atks";
const t2 = "KSfJ";
const n2 = "CvdS";
const o2 = "cxKj";
const r2 = "ocJb";
const s2 = "HHI8";
const i2 = "UNLM";

const dt = {
  mobileNavigationWrapper: KC,
  navigation: XC,
  indicator: QC,
  indicatorHidden: ZC,
  navItem: JC,
  label: e2,
  active: t2,
  createButton: n2,
  iconWrapper: o2,
  portalImage: r2,
  portalImageActive: s2,
  badge: i2,
};

const Qd = e => Symbol.iterator in e;

const Zd = e => "entries" in e;

const Jd = (e, t) => {
  const n = e instanceof Map ? e : new Map(e.entries());
  const o = t instanceof Map ? t : new Map(t.entries());
  if (n.size !== o.size) {
    return false;
  }
  for (const [r, s] of n) {
    if (!o.has(r) || !Object.is(s, o.get(r))) {
      return false;
    }
  }
  return true;
};

const a2 = (e, t) => {
  const n = e[Symbol.iterator]();
  const o = t[Symbol.iterator]();
  let r = n.next();
  let s = o.next();

  while (!r.done && !s.done) {
    if (!Object.is(r.value, s.value)) {
      return false;
    }
    (r = n.next());
    (s = o.next());
  }

  return !!r.done && !!s.done;
};

function c2(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : Qd(e) && Qd(t)
    ? Zd(e) && Zd(t)
      ? Jd(e, t)
      : a2(e, t)
    : Jd(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function ef(e) {
  const t = $r.useRef(undefined);
  return (n) => {
    const o = e(n);
    return c2(t.current, o) ? t.current : (t.current = o);
  };
}
const l2 = "i59r";
const u2 = "Z8gJ";
const d2 = "CFUM";
const f2 = "j9fD";
const p2 = "B1G3";
const h2 = "mRtk";
const m2 = "oXNJ";
const g2 = "eb24";
const _2 = "qaRf";
const v2 = "wWuq";
const y2 = "Gjol";
const w2 = "zvtN";
const b2 = "QvhJ";
const E2 = "aA4V";
const S2 = "PXKv";
const k2 = "PyWw";
const N2 = "HCnN";
const C2 = "vnpf";
const T2 = "EUy8";
const I2 = "tlSm";
const $2 = "SsXS";
const R2 = "Idcf";
const A2 = "NgYS";

const ie = {
  skeleton: l2,
  comment: u2,
  content: d2,
  header: f2,
  headerLeft: p2,
  body: h2,
  actions: m2,
  likeBtn: g2,
  shimmer: _2,
  avatar: v2,
  more: y2,
  likeIcon: w2,
  name: b2,
  time: E2,
  line: S2,
  w100: k2,
  w85: N2,
  w65: C2,
  w50: T2,
  w40: I2,
  replyLabel: $2,
  likeCount: R2,
  list: A2,
};

function x2(e) {
  switch (e) {
    case "short":
      {
        return i("div", {
          className: ie.body,
          children: i("div", { className: `${ie.shimmer} ${ie.line} ${ie.w50}` }),
        });
      }
    case "medium":
      {
        return i("div", {
          className: ie.body,
          children: [
            i("div", { className: `${ie.shimmer} ${ie.line} ${ie.w100}` }),
            i("div", { className: `${ie.shimmer} ${ie.line} ${ie.w65}` }),
          ],
        });
      }
    case "long":
      {
        return i("div", {
          className: ie.body,
          children: [
            i("div", { className: `${ie.shimmer} ${ie.line} ${ie.w100}` }),
            i("div", { className: `${ie.shimmer} ${ie.line} ${ie.w85}` }),
            i("div", { className: `${ie.shimmer} ${ie.line} ${ie.w40}` }),
          ],
        });
      }
  }
}
function Tl({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return i("div", {
    className: ie.skeleton,
    "aria-hidden": "true",
    style: n,
    children: i("div", {
      className: ie.comment,
      children: [
        i("div", { className: `${ie.shimmer} ${ie.avatar}` }),
        i("div", {
          className: ie.content,
          children: [
            i("div", {
              className: ie.header,
              children: [
                i("div", {
                  className: ie.headerLeft,
                  children: [
                    i("div", { className: `${ie.shimmer} ${ie.name}` }),
                    i("div", { className: `${ie.shimmer} ${ie.time}` }),
                  ],
                }),
                i("div", { className: `${ie.shimmer} ${ie.more}` }),
              ],
            }),
            x2(e),
            i("div", {
              className: ie.actions,
              children: [
                i("div", { className: `${ie.shimmer} ${ie.replyLabel}` }),
                i("div", {
                  className: ie.likeBtn,
                  children: [
                    i("div", { className: `${ie.shimmer} ${ie.likeIcon}` }),
                    i("div", { className: `${ie.shimmer} ${ie.likeCount}` }),
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
const tf = ["medium", "short", "long", "medium", "short"];
function L2({ count: e = 4 }) {
  return i("div", {
    className: ie.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка комментариев",
    children: Array.from({ length: e }, (t, n) => i(Tl, { variant: tf[n % tf.length], delayMs: n * 120 }, n)
    ),
  });
}

const Ft = {
    MAX_CHARS: 1000/* 1e3 */,
    MAX_IMAGES: 10,
    MIN_POLL_OPTIONS: 2,
    MAX_POLL_OPTIONS: 10,
    MAX_POLL_QUESTION_LENGTH: 200,
    MAX_POLL_OPTION_LENGTH: 100,
    MAX_TEXTAREA_HEIGHT: 400,
  };

const wa = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};

function P2() {
  const [e, t] = $(false);
  const [n, o] = $(wa);

  const r = A((g) => {
    if (g.length <= Ft.MAX_POLL_QUESTION_LENGTH) {
      o(m => ({
        ...m,
        question: g
      }));
    }
  }, []);

  const s = A((g, m) => {
    if (m.length <= Ft.MAX_POLL_OPTION_LENGTH) {
      o(v => ({
        ...v,
        options: v.options.map(_ => _.id === g ? { ..._, text: m } : _)
      }));
    }
  }, []);

  const a = A(() => {
    if (n.options.length < Ft.MAX_POLL_OPTIONS) {
      o(g => ({
        ...g,
        options: [...g.options, { id: Date.now().toString(), text: "" }]
      }));
    }
  }, [n.options.length]);

  const c = A(
    (g) => {
      if (n.options.length > Ft.MIN_POLL_OPTIONS) {
        o(m => ({
          ...m,
          options: m.options.filter(v => v.id !== g)
        }));
      }
    },
    [n.options.length]
  );

  const l = A(() => {
    o(g => ({
      ...g,
      multipleChoice: !g.multipleChoice
    }));
  }, []);

  const u = A(() => {
    t(false);
    o(wa);
  }, []);

  const d = A(() => {
    t(g => !g);
  }, []);

  const p = A(() => {
    if (!e) {
      return true;
    }
    const g = n.question.trim().length > 0;

    const m = n.options.filter(v => v.text.trim().length > 0);

    return g && m.length >= Ft.MIN_POLL_OPTIONS;
  }, [e, n]);

  const f = A(() => {
    if (!(!e || !p())) {
      return {
        question: n.question.trim(),
        options: n.options
          .filter(g => g.text.trim().length > 0)
          .map(g => ({
          text: g.text.trim()
        })),
        multipleChoice: n.multipleChoice,
      };
    }
  }, [e, p, n]);

  const h = A(() => {
    t(false);
    o(wa);
  }, []);

  return {
    isPollOpen: e,
    poll: n,
    togglePoll: d,
    handlePollQuestionChange: r,
    handlePollOptionChange: s,
    handleAddPollOption: a,
    handleRemovePollOption: c,
    handleMultipleChoiceToggle: l,
    handleClosePoll: u,
    isPollValid: p,
    getPollData: f,
    resetPoll: h,
  };
}
function Il(e = 10, t = false) {
  const [n, o] = $([]);
  const [r, s] = $([]);
  const a = R(null);
  const c = R(n);
  const l = R(r);
  (c.current = n);
  (l.current = r);

  M(
    () => () => {
      c.current.forEach(w => URL.revokeObjectURL(w.previewUrl));

      l.current.forEach(w => URL.revokeObjectURL(w.previewUrl));
    },
    []
  );

  const u = r.length > 0;

  const d = n.some(w => w.type === "video") || r.some(w => w.type === "video");

  const p = n.some(w => w.type === "image") || r.some(w => w.type === "image");

  const f = A(() => {
    a.current?.click();
  }, []);

  const h = A(
    async (w) => {
      const N = Uo.isValidVideoType(w);
      const k = Uo.isValidImageType(w);
      if (N && !t) {
        Dt.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!k && !N) {
        Dt.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const l_current = l.current;

      const T =
        c_current.some(P => P.type === "video") ||
        l_current.some(P => P.type === "video");

      const C =
        c_current.some(P => P.type === "image") ||
        l_current.some(P => P.type === "image");

      if (N && C) {
        Dt.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (k && T) {
        Dt.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (N && T) {
        Dt.error("Можно загрузить только 1 видео");
        return;
      }
      const E = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const x = URL.createObjectURL(w);
      const I = N ? "video" : "image";
      s(P => [
        ...P,
        { id: E, file: w, previewUrl: x, progress: 0, type: I },
      ]);
      try {
        const P = await Uo.uploadMedia(w);

        s(j => j.filter(G => G.id !== E));

        o(j => [
          ...j,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: P.id,
            url: P.url,
            previewUrl: x,
            type: I,
          },
        ]);
      } catch (P) {
        let j = "Ошибка загрузки";

        if (Ge(P)) {
          (j = al(P.code, P.message));
        } else if (P instanceof Error) {
          (j = P.message);
        }

        Dt.error(j);

        s(G => G.filter(ae => ae.id !== E));

        URL.revokeObjectURL(x);
      }
    },
    [t]
  );

  const g = A(
    (w) => {
      const w_target = w.target;
      const w_target_files = w_target.files;
      if (!w_target_files || w_target_files.length === 0) {
        return;
      }
      const S = n.length + r.length;
      const b = e - S;
      if (b <= 0) {
        return;
      }
      Array.from(w_target_files).slice(0, b).forEach(h);
      (w_target.value = "");
    },
    [n.length, r.length, e, h]
  );

  const m = A((w) => {
    o((N) => {
      const k = N.find(S => S.id === w);

      if (k) {
        URL.revokeObjectURL(k.previewUrl);
      }

      return N.filter(S => S.id !== w);
    });

    s((N) => {
      const k = N.find(S => S.id === w);

      if (k) {
        URL.revokeObjectURL(k.previewUrl);
      }

      return N.filter(S => S.id !== w);
    });
  }, []);

  const v = A(
    (w) => {
      const N = w.filter(b => t ? Uo.isValidMediaType(b) : Uo.isValidImageType(b)
      );
      if (N.length === 0) {
        return;
      }
      const k = c.current.length + l.current.length;
      const S = e - k;

      if (S > 0) {
        N.slice(0, S).forEach(h);
      }
    },
    [e, h, t]
  );

  const _ = A(
    async (w) => {
      const [N, k] = w.split(",");
      const S = N.match(/:(.*?);/)?.[1] || "image/png";
      const b = atob(k);
      const T = new Uint8Array(b.length);
      for (let x = 0; x < b.length; x++) {
        T[x] = b.charCodeAt(x);
      }
      const C = new Blob([T], { type: S });
      const E = new File([C], `drawing-${Date.now()}.png`, { type: "image/png" });
      h(E);
    },
    [h]
  );

  const y = A(() => {
    n.forEach(w => URL.revokeObjectURL(w.previewUrl));

    r.forEach(w => URL.revokeObjectURL(w.previewUrl));

    o([]);
    s([]);
  }, [n, r]);

  return {
    images: n,
    uploadingImages: r,
    isUploading: u,
    hasVideo: d,
    hasImages: p,
    openFilePicker: f,
    removeImage: m,
    addImage: _,
    uploadFiles: v,
    clearAll: y,
    fileInputRef: a,
    handleFileChange: g,
  };
}
const M2 = "Kkgj";
const O2 = "i5UH";
const D2 = "kFw4";
const U2 = "wvHe";
const F2 = "NRHv";
const B2 = "vlNx";
const H2 = "A0YH";
const V2 = "u3oM";
const W2 = "ofXY";
const j2 = "KOUI";
const z2 = "WFQv";
const q2 = "xO7L";
const G2 = "qmLr";
const Y2 = "GItP";
const K2 = "WEJp";
const X2 = "rN6M";
const Q2 = "AYP0";
const Z2 = "k6QG";
const J2 = "l09p";
const eT = "h1pf";
const tT = "ESzu";
const nT = "BDDU";
const oT = "v0Zk";
const rT = "pAt2";
const sT = "X6Bv";
const iT = "LPxT";
const aT = "Lmhj";
const cT = "GDMp";
const lT = "g9E4";
const uT = "WbXr";
const dT = "f5d6";
const fT = "K0p6";
const pT = "szdr";
const hT = "fb7O";
const mT = "tFQO";
const gT = "sdNu";
const _T = "vLhR";
const vT = "sEsW";
const yT = "iCqb";
const wT = "dxYN";
const bT = "TUry";
const ET = "sKUa";
const ST = "EwL7";
const kT = "XRqA";
const NT = "r40q";
const CT = "w5fR";
const TT = "bXrX";
const IT = "QaoC";
const $T = "NpqM";
const RT = "LDYM";
const AT = "cI4L";

const W = {
  form: M2,
  notebookGrid: O2,
  notebookRuled: D2,
  editor: U2,
  mediaButton: F2,
  dragActive: B2,
  whatsNew: H2,
  dragOverlay: V2,
  attachments: W2,
  attachmentPreview: j2,
  uploading: z2,
  uploadError: q2,
  videoPreviewWrapper: G2,
  videoPlayIcon: Y2,
  uploadOverlay: K2,
  spinner: X2,
  errorOverlay: Q2,
  errorText: Z2,
  removeAttachment: J2,
  actions: eT,
  mediaButtons: tT,
  submitGroup: nT,
  charCount: oT,
  error: rT,
  pollContainer: sT,
  pollHeader: iT,
  pollTitle: aT,
  pollClose: cT,
  pollQuestion: lT,
  pollOptions: uT,
  pollOptionRow: dT,
  pollOption: fT,
  removeOption: pT,
  addOption: hT,
  pollFooter: mT,
  pollToggle: gT,
  active: _T,
  notebookLabel: vT,
  notebookPicker: yT,
  notebookPickerHeader: wT,
  notebookOptions: bT,
  notebookOptionRow: ET,
  notebookOption: ST,
  notebookOptionActive: kT,
  gridSwatch: NT,
  ruledSwatch: CT,
  notebookBuy: TT,
  notebookUnavailable: IT,
  notebookButton: $T,
  notebookIcon: RT,
  submitError: AT,
};

function nf({ src: e, type: t }) {
  return t === "video"
    ? i("div", {
        className: W.videoPreviewWrapper,
        children: [
          i("video", { src: e, preload: "metadata" }),
          i("div", {
            className: W.videoPlayIcon,
            children: i(M1, { size: 24 }),
          }),
        ],
      })
    : i("img", { src: e, alt: "" });
}
function $l({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? i("div", {
        className: W.attachments,
        children: [
          e.map(r => i(
            "div",
            {
              className: W.attachmentPreview,
              children: [
                i(nf, { src: r.previewUrl, type: r.type }),
                i("button", {
                  className: W.removeAttachment,
                  onClick: () => n(r.id),
                  children: i(Rt, {}),
                }),
              ],
            },
            r.id
          )
          ),
          t.map(r => i(
            "div",
            {
              className: `${W.attachmentPreview} ${
                r.error ? W.uploadError : W.uploading
              }`,
              children: [
                i(nf, { src: r.previewUrl, type: r.type }),
                !r.error &&
                  i("div", {
                    className: W.uploadOverlay,
                    children: i("div", { className: W.spinner }),
                  }),
                r.error &&
                  i("div", {
                    className: W.errorOverlay,
                    children: i("span", {
                      className: W.errorText,
                      children: r.error,
                    }),
                  }),
                i("button", {
                  className: W.removeAttachment,
                  onClick: () => n(r.id),
                  children: i(Rt, {}),
                }),
              ],
            },
            r.id
          )
          ),
        ],
      })
    : null;
}
function xT({
  poll: e,
  onQuestionChange: t,
  onOptionChange: n,
  onAddOption: o,
  onRemoveOption: r,
  onMultipleChoiceToggle: s,
  onClose: a,
}) {
  return i("div", {
    className: W.pollContainer,
    children: [
      i("div", {
        className: W.pollHeader,
        children: [
          i("span", { className: W.pollTitle, children: "Опрос" }),
          i("button", {
            className: W.pollClose,
            onClick: a,
            children: i(Rt, {}),
          }),
        ],
      }),
      i("input", {
        type: "text",
        className: W.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: c => t(c.target.value),
      }),
      i("div", {
        className: W.pollOptions,
        children: e.options.map((c, l) => i(
          "div",
          {
            className: W.pollOptionRow,
            children: [
              i("input", {
                type: "text",
                className: W.pollOption,
                placeholder: `Вариант ${l + 1}`,
                value: c.text,
                maxLength: 50,
                onInput: u => n(c.id, u.target.value),
              }),
              e.options.length > Ft.MIN_POLL_OPTIONS &&
                i("button", {
                  className: W.removeOption,
                  onClick: () => r(c.id),
                  children: i(Rt, {}),
                }),
            ],
          },
          c.id
        )
        ),
      }),
      e.options.length < Ft.MAX_POLL_OPTIONS &&
        i("button", {
          className: W.addOption,
          onClick: o,
          children: [i(gl, {}), i("span", { children: "Добавить вариант" })],
        }),
      i("div", {
        className: W.pollFooter,
        children: i("label", {
          className: W.pollToggle,
          children: [
            i("input", {
              type: "checkbox",
              checked: e.multipleChoice,
              onChange: s,
            }),
            i("span", { children: "Несколько вариантов ответа" }),
          ],
        }),
      }),
    ],
  });
}
const LT = "TPnZ";
const PT = "GnnJ";
const MT = "f43R";
const OT = "hHa3";
const DT = "bAtx";
const UT = "vKGT";
const FT = "bm6I";
const BT = "xnaA";
const HT = "LtRC";
const VT = "L8mt";
const WT = "y4uz";
const jT = "tkNf";
const zT = "pFGJ";
const qT = "qVkR";
const GT = "N4u9";
const YT = "AlnX";

const at = {
  editor: LT,
  empty: PT,
  bold: MT,
  italic: OT,
  underline: DT,
  strike: UT,
  spoiler: FT,
  monospace: BT,
  quote: HT,
  link: VT,
  menu: WT,
  buttons: jT,
  button: zT,
  linkForm: qT,
  linkInput: GT,
  linkSubmit: YT,
};

const yi = {
  bold: at.bold,
  italic: at.italic,
  underline: at.underline,
  strike: at.strike,
  spoiler: at.spoiler,
  monospace: at.monospace,
  quote: at.quote,
  link: at.link,
};

function ba(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function KT(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function XT(e) {
  return e !== "mention" && e !== "hashtag";
}
function of(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const o of t) {
    if (!XT(o.type)) {
      continue;
    }
    const r = yi[o.type];
    const s = o.type === "link" ? ` data-url="${KT(o.url)}"` : "";
    n = `<span class="${r}"${s}>${n}</span>`;
  }
  return n;
}
function QT(e, t, n) {
  let o = 0;
  const r = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let s = r.nextNode();

  while (s) {
    if (s === t) {
      return o + n;
    }
    (o += s.textContent?.length || 0);
    (s = r.nextNode());
  }

  return o;
}
function ZT(e, t) {
  return e
    .map((n) => {
      const o = n.offset + n.length;
      return n.offset >= t.length
        ? null
        : o > t.length
        ? { ...n, length: t.length - n.offset }
        : n;
    })
    .filter(n => n !== null);
}
function JT(e) {
  const t = [];

  const n = (o, r) => {
    if (o.nodeType === Node.TEXT_NODE) {
      return r + (o.textContent?.length || 0);
    }
    if (o.nodeType === Node.ELEMENT_NODE) {
      const s = o;
      if (s.tagName === "BR") {
        return r + 1;
      }
      let a = null;
      for (const [u, d] of Object.entries(yi)) {
        if (s.classList.contains(d)) {
          a = u;
          break;
        }
      }
      const c = r;
      let l = r;
      for (const u of Array.from(o.childNodes)) {
        l = n(u, l);
      }
      if (a && l > c) {
        const u =
          a === "link"
            ? {
                type: "link",
                url: s.dataset.url || "",
                offset: c,
                length: l - c,
              }
            : { type: a, offset: c, length: l - c };
        t.push(u);
      }
      return l;
    }
    return r;
  };

  n(e, 0);
  return t;
}
function eI(e, t) {
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
function tI(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}

const nI = [
    { type: "bold", icon: T1, title: "Жирный" },
    { type: "italic", icon: $1, title: "Курсив" },
    { type: "underline", icon: L1, title: "Подчёркнутый" },
    { type: "strike", icon: x1, title: "Зачёркнутый" },
    { type: "spoiler", icon: A1, title: "Спойлер" },
    { type: "monospace", icon: I1, title: "Моноширинный" },
    { type: "quote", icon: R1, title: "Цитата" },
    { type: "link", icon: Hh, title: "Ссылка" },
  ];

const ji = Sh((
  {
    value: t,
    spans: n,
    onChange: o,
    placeholder: r = "Написать...",
    maxLength: s = 5000/* 5e3 */,
    autoFocus: a = false,
    className: c = "",
    minHeight: l = 40,
    maxHeight: u = 400,
    onSubmit: d,
    disableFormatting: p = false,
    onImagePaste: f,
  },
  h
) => {
  const g = R(null);
  const [m, v] = $(false);
  const [_, y] = $({ x: 0, y: 0 });
  const [w, N] = $(false);
  const [k, S] = $("");
  const b = R(null);
  const T = R(null);
  const C = R(null);
  const E = R(false);
  const x = R(false);
  const I = R(t);
  const P = R(n);
  const j = R(o);

  M(() => {
    (I.current = t);
    (P.current = n);
    (j.current = o);
  }, [t, n, o]);

  tl(
    h,
    () => ({
      insertText: (O) => {
        const g_current = g.current;
        if (!g_current) {
          return;
        }
        g_current.focus();
        const Q = window.getSelection();
        if (!Q) {
          return;
        }
        let ge = 0;
        if (Q.rangeCount > 0) {
          const pe = Q.getRangeAt(0);
          ge = QT(g_current, pe.startContainer, pe.startOffset);
        }
        const I_current = I.current;
        const P_current = P.current;
        const be = I_current.slice(0, ge) + O + I_current.slice(ge);

        const Fe = P_current.map(pe => pe.offset >= ge
          ? { ...pe, offset: pe.offset + O.length }
          : pe.offset + pe.length > ge
          ? { ...pe, length: pe.length + O.length }
          : pe
        );

        (x.current = true);
        (I.current = be);
        (P.current = Fe);
        const je = document.createTextNode(O);
        if (Q.rangeCount > 0) {
          const pe = Q.getRangeAt(0);
          pe.deleteContents();
          pe.insertNode(je);
          pe.setStartAfter(je);
          pe.setEndAfter(je);
          Q.removeAllRanges();
          Q.addRange(pe);
        }
        j.current(be, Fe);
      },

      focus: () => {
        g.current?.focus();
      }
    }),
    []
  );

  const G = A(() => {
    if (!t) {
      return "";
    }
    if (n.length === 0) {
      return ba(t);
    }

    const O = [...n].sort((J, be) => J.offset - be.offset);

    const B = [];
    for (const J of O) {
      B.push({ pos: J.offset, type: "start", span: J });
      B.push({ pos: J.offset + J.length, type: "end", span: J });
    }
    B.sort((J, be) => J.pos !== be.pos
      ? J.pos - be.pos
      : J.type !== be.type
      ? J.type === "end"
        ? -1
        : 1
      : 0
    );
    let Q = "";
    let ge = 0;
    const Z = [];
    for (const J of B) {
      if (J.pos > ge) {
        const be = t.substring(ge, J.pos);
        (Q += of(ba(be), Z));
        (ge = J.pos);
      }
      if (J.type === "start") {
        Z.push(J.span);
      } else {
        const be = Z.indexOf(J.span);

        if (be !== -1) {
          Z.splice(be, 1);
        }
      }
    }
    if (ge < t.length) {
      const J = t.substring(ge);
      Q += of(ba(J), Z);
    }
    return Q || "<br>";
  }, [t, n]);

  M(() => {
    if (x.current) {
      x.current = false;
      return;
    }
    const g_current = g.current;
    if (!g_current || (document.activeElement === g_current && t !== "")) {
      return;
    }
    const B = G();

    if (g_current.innerHTML !== B) {
      (g_current.innerHTML = B);
    }
  }, [G, t]);

  M(() => {
    if (a && g.current) {
      const g_current = g.current;
      g_current.focus();

      if (g_current.childNodes.length > 0) {
        const B = window.getSelection();
        if (B) {
          const Q = document.createRange();
          Q.selectNodeContents(g_current);
          Q.collapse(false);
          B.removeAllRanges();
          B.addRange(Q);
        }
      }
    }
  }, [a]);

  M(() => {
    if (w && T.current) {
      T.current.focus();
    }
  }, [w]);

  const ae = A(
      (O) => {
        if (E.current) {
          return;
        }
        const g_current = g.current;
        if (!g_current) {
          return;
        }
        if (O?.data === " ") {
          const Z = window.getSelection();
          if (Z && Z.rangeCount > 0) {
            const be = Z.getRangeAt(0).startContainer;
            let Fe = null;
            let je = be;

            while (je && je !== g_current) {
              if (je.nodeType === Node.ELEMENT_NODE) {
                const pe = je;
                if (pe.tagName === "SPAN" && pe.className) {
                  Fe = pe;
                  break;
                }
              }
              je = je.parentNode;
            }

            if (Fe) {
              const pe = Fe.textContent || "";
              if (pe.endsWith(" ")) {
                Fe.textContent = pe.slice(0, -1);
                const qt = document.createTextNode(" ");
                Fe.parentNode?.insertBefore(qt, Fe.nextSibling);
                const Gt = document.createRange();
                Gt.setStartAfter(qt);
                Gt.setEndAfter(qt);
                Z.removeAllRanges();
                Z.addRange(Gt);
              }
            }
          }
        }
        const Q = g_current.innerText.replace(/\n$/, "");
        if (Q.length > s) {
          const Z = Q.substring(0, s);
          (x.current = true);
          o(Z, ZT(n, Z));
          return;
        }
        const ge = JT(g_current);
        (x.current = true);
        o(Q, ge);
      },
      [s, o, n]
    );

  const se = A(
    (O) => {
      if (p) {
        return;
      }
      const B = window.getSelection();
      if (!B || B.isCollapsed) {
        return;
      }
      O.preventDefault();
      (C.current = B.getRangeAt(0).cloneRange());

      const Q = Math.max(
          10,
          Math.min(O.clientX - 150, window.innerWidth - 310)
        );

      const ge = Math.max(10, O.clientY - 50);
      y({ x: Q, y: ge });
      v(true);
    },
    [p]
  );

  const we = A(
    (O) => {
      O.preventDefault();

      if (f && O.clipboardData?.files?.length) {
        const J = Array.from(O.clipboardData.files).filter(be => be.type.startsWith("image/")
        );
        if (J.length > 0) {
          f(J);
          return;
        }
      }

      const B = O.clipboardData?.getData("text/plain") || "";
      if (!B) {
        return;
      }
      const Q = window.getSelection();
      if (!Q || !Q.rangeCount) {
        return;
      }
      const ge = Q.getRangeAt(0);
      ge.deleteContents();
      const Z = document.createTextNode(B);
      ge.insertNode(Z);
      ge.setStartAfter(Z);
      ge.setEndAfter(Z);
      Q.removeAllRanges();
      Q.addRange(ge);
      ae();
    },
    [ae, f]
  );

  const X = A(() => {
    const g_current = g.current;
    if (g_current && !I.current) {
      const B = window.getSelection();
      if (B) {
        const Q = document.createRange();
        Q.setStart(g_current, 0);
        Q.collapse(true);
        B.removeAllRanges();
        B.addRange(Q);
      }
    }
  }, []);

  const ne = A(
    (O) => {
      if (O.key === "Enter" && !O.shiftKey && d) {
        O.preventDefault();
        d();
        return;
      }
      if (!p && (O.ctrlKey || O.metaKey)) {
        let B = null;
        switch (O.key.toLowerCase()) {
          case "b":
            {
              B = "bold";
              break;
            }
          case "i":
            {
              B = "italic";
              break;
            }
          case "u":
            {
              B = "underline";
              break;
            }
        }

        if (B) {
          O.preventDefault();
          fe(B);
        }
      }
    },
    [d, p]
  );

  const fe = A(
    (O, B) => {
      const g_current = g.current;
      if (!g_current) {
        return;
      }
      const ge = window.getSelection();
      if (!ge ||
      (C.current && (ge.removeAllRanges(), ge.addRange(C.current)),
      ge.isCollapsed)) {
        return;
      }
      const Z = ge.getRangeAt(0);
      const J = document.createElement("span");
      (J.className = yi[O]);

      if (O === "link" && B) {
        (J.dataset.url = B);
      }

      const be = eI(Z.commonAncestorContainer, yi[O]);
      if (be) {
        tI(be);
      } else {
        try {
          Z.surroundContents(J);
        } catch {
          const Fe = Z.extractContents();
          J.appendChild(Fe);
          Z.insertNode(J);
        }
      }
      ae();
      v(false);
      N(false);
      S("");
      (C.current = null);
      g_current.focus();
    },
    [ae]
  );

  const q = A(
    (O) => {
      if (O === "link") {
        N(true);
      } else {
        fe(O);
      }
    },
    [fe]
  );

  const Se = A(
    (O) => {
      O.preventDefault();

      if (k.trim()) {
        fe("link", k.trim());
      }
    },
    [fe, k]
  );

  M(() => {
    if (!m) {
      return;
    }

    const O = (Q) => {
      if (b.current &&
        !b.current.contains(Q.target)) {
        v(false);
        N(false);
        S("");
        (C.current = null);
      }
    };

    const B = () => {
      v(false);
      N(false);
      S("");
      (C.current = null);
    };

    document.addEventListener("mousedown", O);
    window.addEventListener("scroll", B, true);

    return () => {
      document.removeEventListener("mousedown", O);
      window.removeEventListener("scroll", B, true);
    };
  }, [m]);
  const ce = !t;
  return i(ue, {
    children: [
      i("div", {
        ref: g,
        className: `${at.editor} ${c} ${ce ? at.empty : ""}`,
        contentEditable: true,
        "data-placeholder": r,
        onInput: O => ae(O),
        onFocus: X,
        onPaste: we,
        onContextMenu: se,
        onKeyDown: ne,
        onCompositionStart: () => {
          E.current = true;
        },
        onCompositionEnd: () => {
          (E.current = false);
          ae();
        },
        style: { minHeight: l, maxHeight: u },
      }),
      m &&
        ft(
          i("div", {
            ref: b,
            className: at.menu,
            style: { left: _.x, top: _.y },
            children: w
              ? i("form", {
                  className: at.linkForm,
                  onSubmit: Se,
                  children: [
                    i("input", {
                      ref: T,
                      type: "url",
                      className: at.linkInput,
                      placeholder: "https://...",
                      value: k,
                      onInput: O => S(O.target.value),
                    }),
                    i("button", {
                      type: "submit",
                      className: at.linkSubmit,
                      disabled: !k.trim(),
                      children: "OK",
                    }),
                  ],
                })
              : i("div", {
                  className: at.buttons,
                  children: nI.map(({ type: O, icon: B, title: Q }) => i(
                    "button",
                    {
                      type: "button",
                      className: at.button,
                      onClick: () => q(O),
                      title: Q,
                      children: i(B, { size: 16 }),
                    },
                    O
                  )
                  ),
                }),
          }),
          document.body
        ),
    ],
  });
});

const oI = "G4wq";
const rI = "UEDF";
const sI = "Z7Wb";
const iI = "zbS2";
const aI = "v269";
const cI = "RzsG";
const lI = "jlAk";
const uI = "lM62";
const dI = "fRNO";
const fI = "YCRt";
const pI = "kbSV";
const hI = "grxZ";
const mI = "BnGw";
const gI = "yswe";
const _I = "oOLu";
const vI = "ly7B";
const yI = "HJkQ";
const wI = "eUuP";
const bI = "Wnif";
const EI = "kYLX";
const SI = "TYKo";

const De = {
  commentInput: oI,
  replyMode: rI,
  inputRow: sI,
  attachmentStrip: iI,
  circleButton: aI,
  micButton: cI,
  sendButton: lI,
  submitting: uI,
  textareaContainer: dI,
  expanded: fI,
  voiceMode: pI,
  inputWrapper: hI,
  commentCharCount: mI,
  error: gI,
  input: _I,
  replyHeader: vI,
  replyText: yI,
  replyName: wI,
  replyClose: bI,
  dragActive: EI,
  dragOverlay: SI,
};

const kI = "qu72";
const NI = "xgSn";
const CI = "XBvY";
const Ea = { textInput: kI, entering: NI, sendButton: CI };
const TI = 1000/* 1e3 */;
function II({
  text: e,
  spans: t,
  onChange: n,
  placeholder: o,
  onSubmit: r,
  isEntering: s,
  autoFocus: a,
  isSubmitting: c,
  sendDisabled: l,
  onImagePaste: u,
}) {
  const d = TI - e.length;
  const p = d < 0;
  const f = [Ea.textInput, s ? Ea.entering : ""].filter(Boolean).join(" ");
  return i("div", {
    className: f,
    children: [
      i("div", {
        className: De.inputWrapper,
        children: [
          i(ji, {
            value: e,
            spans: t,
            onChange: n,
            placeholder: o,
            autoFocus: a,
            className: De.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: p ? undefined : r,
            disableFormatting: true,
            onImagePaste: u,
          }),
          p &&
            i("span", {
              className: `${De.commentCharCount} ${De.error}`,
              children: d,
            }),
        ],
      }),
      i("button", {
        className: `${De.circleButton} ${De.sendButton} ${Ea.sendButton} ${
          c ? De.submitting : ""
        }`,
        onClick: r,
        disabled: c || l || p,
        children: c ? i(Jh, { size: "xs" }) : i(O1, { size: 20 }),
      }),
    ],
  });
}
const $I = me(() => de(
  () => import("./VoiceInput-B-OTfoyy.js"),
  __vite__mapDeps([10, 11, 12])
).then(e => ({
  default: e.VoiceInput
}))
);
function Em({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: o,
  onCancelReply: r,
  autoFocus: s,
}) {
  const { text: a, spans: c, handleChange: l, reset: u } = Fi();
  const [d, p] = $("text");
  const [f, h] = $(false);
  const [g, m] = $(false);
  const [v, _] = $(false);
  const [y, w] = $(false);
  const N = R(false);
  const k = R(null);
  const S = R(0);

  const {
    images: b,
    uploadingImages: T,
    isUploading: C,
    openFilePicker: E,
    removeImage: x,
    uploadFiles: I,
    clearAll: P,
    fileInputRef: j,
    handleFileChange: G,
  } = Il(4);

  M(
    () => () => {
      if (k.current) {
        clearTimeout(k.current);
      }
    },
    []
  );
  const ae = b.length > 0 || T.length > 0;
  const se = a.length > 0 || v || ae;
  const we = d === "voice";
  const X = 1000/* 1e3 */;

  const ne = async () => {
    const Z = a.trim().length > 0;
    const J = b.length > 0;
    if ((!Z && !J) || v || C || a.length > X) {
      return;
    }
    const be = a.trim();
    const Fe = [...c];

    const je = b.map(pe => ({
      mediaId: pe.mediaId
    }));

    _(true);
    try {
      await e(be, Fe, je.length > 0 ? je : undefined);
      u();
      P();
    } catch (pe) {
      console.error("Failed to submit comment:", pe);
    } finally {
      _(false);
    }
  };

  const fe = () => {
    (N.current = true);
    p("voice");
    m(false);
  };

  const q = () => {
    h(true);
  };

  const Se = () => {
    h(false);
    p("text");
    m(true);

    if (k.current) {
      clearTimeout(k.current);
    }

    (k.current = window.setTimeout(() => {
      (k.current = null);
      m(false);
    }, 300));
  };

  const ce = A((Z) => {
    Z.preventDefault();
    Z.stopPropagation();
    S.current++;

    if (Z.dataTransfer?.types.includes("Files")) {
      w(true);
    }
  }, []);

  const O = A((Z) => {
    Z.preventDefault();
    Z.stopPropagation();
  }, []);

  const B = A((Z) => {
    Z.preventDefault();
    Z.stopPropagation();
    S.current--;

    if (S.current === 0) {
      w(false);
    }
  }, []);

  const Q = A(
    (Z) => {
      Z.preventDefault();
      Z.stopPropagation();
      (S.current = 0);
      w(false);
      const J = Z.dataTransfer?.files;

      if (J && J.length > 0) {
        I(Array.from(J));
      }
    },
    [I]
  );

  const ge = [
    De.commentInput,
    se ? De.expanded : "",
    we ? De.voiceMode : "",
    o ? De.replyMode : "",
    y ? De.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return i("div", {
    className: ge,
    onDragEnter: ce,
    onDragOver: O,
    onDragLeave: B,
    onDrop: Q,
    children: [
      y &&
        i("div", {
          className: De.dragOverlay,
          children: [
            i(qh, { size: 24 }),
            i("span", { children: "Перетащите изображение" }),
          ],
        }),
      o &&
        i("div", {
          className: De.replyHeader,
          children: [
            i("span", {
              className: De.replyText,
              children: [
                "Ответ для ",
                i("span", { className: De.replyName, children: o.authorName }),
              ],
            }),
            i("button", {
              className: De.replyClose,
              onClick: r,
              children: i(Rt, { size: 16 }),
            }),
          ],
        }),
      !we &&
        !f &&
        ae &&
        i("div", {
          className: De.attachmentStrip,
          children: i($l, { images: b, uploadingImages: T, onRemove: x }),
        }),
      i("div", {
        className: De.inputRow,
        children: [
          i("button", {
            className: De.circleButton,
            onClick: we ? q : E,
            children: we ? i(Rt, { size: 20 }) : i(Vh, { size: 20 }),
          }),
          i("div", {
            className: De.textareaContainer,
            children:
              we || f
                ? i(Xe, {
                    fallback: null,
                    children: i($I, {
                      onCancel: q,
                      onSend: t,
                      isExiting: f,
                      onExitComplete: Se,
                    }),
                  })
                : i(II, {
                    text: a,
                    spans: c,
                    onChange: l,
                    placeholder: n,
                    onSubmit: ne,
                    isEntering: g,
                    autoFocus: s,
                    isSubmitting: v,
                    sendDisabled: C,
                    onImagePaste: I,
                  }),
          }),
          !we &&
            !f &&
            i("button", {
              className: `${De.circleButton} ${De.micButton}`,
              onClick: fe,
              children: i(P1, { size: 20 }),
            }),
        ],
      }),
      i("input", {
        ref: j,
        type: "file",
        accept: di,
        multiple: true,
        onChange: G,
        style: { display: "none" },
      }),
    ],
  });
}
const RI = "S7sm";
const AI = "mzhV";
const xI = "Jr1F";
const LI = "Wsbz";
const PI = "XxEj";
const MI = "Zx1s";
const OI = "Oovj";

const Kn = {
  counter: RI,
  digit: AI,
  prev: xI,
  current: LI,
  animating: PI,
  up: MI,
  down: OI,
};

function DI(e) {
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
function Ar({ value: e }) {
  const t = DI(e);
  const n = R(e);
  const o = R(t.length);
  const r = R(Date.now());

  const [s, a] = $(() => t
    .split("")
    .map((p, f) => ({
    char: p,
    prevChar: p,
    isAnimating: false,
    key: f
  }))
  );

  const [c, l] = $(null);

  M(() => {
    if (Date.now() - r.current < 100) {
      n.current = e;
      return;
    }
    if (e === n.current) {
      return;
    }
    const f = e > n.current ? "up" : "down";
    l(f);
    (n.current = e);
    const h = t.split("");

    const g = s.map(N => N.char);

    const m = Math.max(h.length, g.length);
    const v = g.join("").padStart(m, " ").split("");

    const y = h
      .join("")
      .padStart(m, " ")
      .split("")
      .map((N, k) => {
      const S = v[k] || " ";
      const b = s[k - (m - s.length)];
      return N !== S
        ? (o.current++,
          { char: N, prevChar: S, isAnimating: true, key: o.current })
        : { char: N, prevChar: N, isAnimating: false, key: b?.key ?? k };
    })
      .filter(N => N.char !== " " || N.isAnimating);

    a(y);
    const w = setTimeout(() => {
      a(N => N.map(k => ({
        ...k,
        isAnimating: false
      })));

      l(null);
    }, 300);
    return () => clearTimeout(w);
  }, [e]);

  if (!s.some(p => p.isAnimating)) {
    return i("span", { children: t });
  }

  const d = c === "up" ? Kn.up : c === "down" ? Kn.down : "";
  return i("span", {
    className: Kn.counter,
    children: s.map(p => p.isAnimating
      ? i(
          "span",
          {
            className: `${Kn.digit} ${Kn.animating} ${d}`,
            children: [
              i("span", { className: Kn.prev, children: p.prevChar }),
              i("span", { className: Kn.current, children: p.char }),
            ],
          },
          p.key
        )
      : i("span", { children: p.char }, p.key)
    ),
  });
}
const UI = "Anfg";
const FI = "iJtc";
const BI = "zNju";
const HI = "cfhh";
const VI = "AivD";
const WI = "GWuE";
const jI = "XR1f";
const zI = "Ymbj";
const qI = "CPX5";

const dn = {
  dropdownWrapper: UI,
  trigger: FI,
  menu: BI,
  hidden: HI,
  menuItem: VI,
  danger: WI,
  itemIcon: jI,
  itemLabel: zI,
  divider: qI,
};

function Sm({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: o = [],
  className: r,
}) {
  const [s, a] = $(false);
  const [c, l] = $(false);
  const [u, d] = $({ top: 0, left: 0 });
  const p = R(null);
  const f = R(null);

  const h = A(() => {
    if (!p.current) {
      return;
    }
    const _ = p.current.getBoundingClientRect();
    const y = f.current?.offsetHeight || 150;
    const w = f.current?.offsetWidth || 160;
    let N = 0;
    let k = 0;

    if (n.startsWith("bottom")) {
      (N = _.bottom + 4);
    } else {
      (N = _.top - y - 4);
    }

    if (n.endsWith("right")) {
      (k = _.right - w);
    } else {
      (k = _.left);
    }

    const {
      innerWidth,
      innerHeight
    } = window;

    if (k + w > innerWidth) {
      (k = innerWidth - w - 8);
    }

    if (k < 8) {
      (k = 8);
    }

    if (N + y > innerHeight) {
      (N = _.top - y - 4);
    }

    if (N < 8) {
      (N = _.bottom + 4);
    }

    d({ top: N, left: k });
    l(true);
  }, [n]);

  const g = A((_) => {
    const _target = _.target;

    if (p.current &&
      !p.current.contains(_target) &&
      f.current &&
      !f.current.contains(_target)) {
      a(false);
      l(false);
    }
  }, []);

  M(() => {
    if (s) {
      h();
      document.addEventListener("mousedown", g);
      window.addEventListener("scroll", h, true);
      window.addEventListener("resize", h);

      return () => {
        document.removeEventListener("mousedown", g);
        window.removeEventListener("scroll", h, true);
        window.removeEventListener("resize", h);
      };
    }
  }, [s, g, h]);

  const m = (_) => {
    _.stopPropagation();

    if (s) {
      a(false);
      l(false);
    } else {
      a(true);
    }
  };

  const v = (_, y) => {
    _.stopPropagation();
    y.onClick();
    a(false);
    l(false);
  };

  return i("div", {
    className: `${dn.dropdownWrapper} ${r || ""}`,
    children: [
      i("div", { ref: p, className: dn.trigger, onClick: m, children: e }),
      s &&
        ft(
          i("div", {
            ref: f,
            className: `${dn.menu} ${c ? "" : dn.hidden}`,
            style: { top: u.top, left: u.left },
            children: t.map((_, y) => i(
              "div",
              {
                children: [
                  i("button", {
                    type: "button",
                    className: `${dn.menuItem} ${_.danger ? dn.danger : ""}`,
                    onClick: w => v(w, _),
                    children: [
                      _.icon &&
                        i("span", {
                          className: dn.itemIcon,
                          children: _.icon,
                        }),
                      i("span", {
                        className: dn.itemLabel,
                        children: _.label,
                      }),
                    ],
                  }),
                  o.includes(_.id) &&
                    y < t.length - 1 &&
                    i("div", { className: dn.divider }),
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

const GI = [
    [
      "M1 5L9 3 18 4 27 2 40 3 53 1 65 3 82 2 95 3 109 1 118 3 117 9 120 16 117 23 103 24 92 26 76 24 64 26 48 24 33 26 20 24 8 26 2 23 3 15Z",
      "M7 9Q40 6 113 8M5 19Q60 16 113 19M18 23L88 22",
    ],
    [
      "M2 8Q4 4 15 5L37 3 58 4 81 2 108 4Q116 3 119 8L116 14 118 20Q114 25 105 23L83 25 66 23 45 25 21 23 5 24 1 20 4 14Z",
      "M10 8L44 7 80 6 109 8M8 17Q58 20 111 16M22 22L69 22",
    ],
    [
      "M1 9L13 6 24 7 32 4 49 5 63 2 78 4 94 2 114 3 119 6 117 11 119 19 110 21 94 20 81 24 68 23 55 26 39 24 23 26 8 24 2 21 4 15Z",
      "M8 12Q51 5 111 7M12 21Q68 19 108 15M28 24L72 21",
    ],
    [
      "M2 4L17 2 28 4 39 3 50 5 67 3 78 5 96 4 116 7 119 12 116 16 118 23 109 25 92 23 77 25 61 22 49 24 33 22 19 24 3 21 1 16 4 11Z",
      "M9 7Q60 8 112 11M6 17L38 18 66 17 110 21M20 21L76 23",
    ],
    [
      "M2 7Q4 2 12 4Q17 1 26 4Q33 2 41 4Q48 1 58 3Q69 1 77 4Q85 2 94 4Q105 1 115 5Q121 7 117 13Q121 18 115 24Q105 27 97 24Q87 27 78 24Q67 27 57 24Q47 27 37 24Q23 27 17 24Q7 27 2 22L4 15Z",
      "M9 10Q39 6 65 9T112 9M8 20Q40 24 65 20T112 21",
    ],
    [
      "M1 6L8 4 34 3 58 5 87 3 111 4 119 8 115 13 118 22 113 25 86 23 62 25 36 23 10 25 2 21 5 15Z",
      "M8 8L33 6 59 8 86 6 112 9M7 18L35 20 65 18 93 21 113 19M11 23L47 22M74 23L105 24",
    ],
    [
      "M3 5L15 2 21 4 29 2 37 5 48 3 57 5 70 2 79 4 90 2 99 4 115 3 118 7 116 12 120 19 116 24 103 23 92 26 81 24 68 26 58 23 45 25 33 23 24 26 12 24 1 23 3 17 1 11Z",
      "M8 8L24 7M31 7L63 8M73 6L112 7M6 13L41 12M53 13L111 11M10 21L54 22M66 22L111 21",
    ],
    [
      "M1 11Q7 4 18 5L35 3 52 4 70 2 88 4 106 3Q117 2 119 8L116 14 120 20Q115 25 104 24L87 26 69 24 51 26 34 23 16 25Q3 25 2 20L4 15Z",
      "M7 11Q42 5 77 8T112 7M8 17Q50 21 84 18T113 18M16 23L48 24M91 23L108 22",
    ],
  ];

const Zs = GI.map(([e, t]) => {
  const n = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="28" viewBox="0 0 120 28" preserveAspectRatio="none"><path d="${e}" fill="#fffef7" stroke="#cecbbc" stroke-width=".6" vector-effect="non-scaling-stroke"/><path d="${t}" fill="none" stroke="#e6e2d4" stroke-width=".55"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(n)}`;
});

function YI(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++) {
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  }
  return t >>> 0;
}
function KI(e) {
  const t = new Map();
  const n = new Set();
  let o = -1;
  for (const r of e) {
    if (t.has(r.id)) {
      continue;
    }

    if (n.size === Zs.length) {
      n.clear();
    }

    let s = YI(r.id) % Zs.length;

    while (n.has(s) || (!n.size && s === o)) {
      s = (s + 1) % Zs.length;
    }

    t.set(r.id, s);
    n.add(s);
    (o = s);
  }
  return t;
}
const XI = "QIy2";
const QI = "awyX";
const ZI = "iJtJ";
const JI = "nbgy";
const e$ = "sH3d";
const t$ = "BENm";
const n$ = "s2bH";
const o$ = "ZZ1f";
const r$ = "Rptl";

const fn = {
  underline: XI,
  monospace: QI,
  quote: ZI,
  spoiler: JI,
  revealed: e$,
  link: t$,
  mention: n$,
  hashtag: o$,
  corrector: r$,
};

function s$(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function i$(e) {
  if (!s$(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const o = String.fromCharCode(...n);
  const r = btoa(o);
  return `/external?url=${encodeURIComponent(r)}`;
}
function wi({
  text: e,
  spans: t = [],
  className: n = "",
  correctorMarks: o = [],
}) {
  const r = Ie(() => KI(o), [o]);

  const [s, a] = $(new Set());

  const c = Ie(() => {
    if (t.length === 0) {
      return [{ text: e, offset: 0, styles: new Set() }];
    }
    const d = [];

    t.forEach((g, m) => {
      d.push({ pos: g.offset, type: "start", span: g, index: m });
      d.push({ pos: g.offset + g.length, type: "end", span: g, index: m });
    });

    d.sort((g, m) => g.pos !== m.pos
      ? g.pos - m.pos
      : g.type !== m.type
      ? g.type === "end"
        ? -1
        : 1
      : 0
    );

    const p = [];
    let f = 0;
    const h = new Map();
    for (const g of d) {
      if (g.pos > f) {
        const m = e.substring(f, g.pos);
        const v = new Set();
        let _;
        let y;
        let w;

        h.forEach((N) => {
          v.add(N.type);

          if (N.type === "link" && N.url) {
            (_ = N.url);
          }

          if (N.type === "mention" &&
            (N.username || N.id)) {
            (y = N.username || N.id);
          }

          if (N.type === "hashtag" && N.tag) {
            (w = N.tag);
          }
        });

        p.push({
          text: m,
          offset: f,
          styles: v,
          url: _,
          mentionId: y,
          hashtag: w,
        });
      }

      if (g.type === "start") {
        h.set(g.index, g.span);
      } else {
        h.delete(g.index);
      }

      (f = g.pos);
    }

    if (f < e.length) {
      p.push({ text: e.substring(f), offset: f, styles: new Set() });
    }

    return p;
  }, [e, t]);

  const l = (d, p) => {
    d.stopPropagation();

    a((f) => {
      const h = new Set(f);

      if (h.has(p)) {
        h.delete(p);
      } else {
        h.add(p);
      }

      return h;
    });
  };

  const u = (d, p) => {
    let d_text = d.text;
    const h = o.filter(
      g => g.start < d.offset + d.text.length && g.end > d.offset
    );
    if (h.length) {
      const g = new Set([0, d.text.length]);
      for (const v of h) {
        g.add(Math.max(0, v.start - d.offset));
        g.add(Math.min(d.text.length, v.end - d.offset));
      }
      const m = [...g].sort((v, _) => v - _);
      d_text = m.slice(0, -1).map((v, _) => {
        const y = d.text.slice(v, m[_ + 1]);

        const w = h.find(k => k.start <= v + d.offset && k.end > v + d.offset);

        const N = w ? r.get(w.id) : 0;
        return w
          ? i(
              "span",
              {
                className: fn.corrector,
                "data-corrector-mark": true,
                "data-corrector-id": w.id,
                "data-corrector-variant": N,
                style: { backgroundImage: `url("${Zs[N]}")` },
                "aria-label": "Текст замазан дежурным",
                onClick: (k) => {
                  k.preventDefault();
                  k.stopPropagation();
                },
                children: i("span", { "aria-hidden": "true", children: y }),
              },
              v
            )
          : y;
      });
    }

    if (d.styles.has("bold")) {
      (d_text = i("strong", { children: d_text }));
    }

    if (d.styles.has("italic")) {
      (d_text = i("em", { children: d_text }));
    }

    if (d.styles.has("underline")) {
      (d_text = i("span", { className: fn.underline, children: d_text }));
    }

    if (d.styles.has("strike")) {
      (d_text = i("s", { children: d_text }));
    }

    if (d.styles.has("monospace")) {
      (d_text = i("code", { className: fn.monospace, children: d_text }));
    }

    if (d.styles.has("quote")) {
      (d_text = i("span", { className: fn.quote, children: d_text }));
    }

    if (d.styles.has("spoiler")) {
      const g = s.has(p);
      d_text = i("span", {
        className: `${fn.spoiler} ${g ? fn.revealed : ""}`,
        onClick: m => l(m, p),
        children: d_text,
      });
    }

    if (d.styles.has("link") && d.url) {
      const g = i$(d.url);
      d_text = i("a", {
        href: g,
        target: "_blank",
        rel: "noopener noreferrer",
        className: fn.link,
        onClick: m => m.stopPropagation(),
        children: d_text,
      });
    }
    if (d.styles.has("mention") && d.mentionId) {
      const g = `/@${d.mentionId}`;
      d_text = i("a", {
        href: g,
        className: fn.mention,
        onClick: (m) => {
          m.preventDefault();
          m.stopPropagation();
          Ae(g);
        },
        children: d_text,
      });
    }
    if (d.styles.has("hashtag") && d.hashtag) {
      const g = `/hashtag/${encodeURIComponent(d.hashtag)}`;
      d_text = i("a", {
        href: g,
        className: fn.hashtag,
        onClick: (m) => {
          m.preventDefault();
          m.stopPropagation();
          Ae(g);
        },
        children: d_text,
      });
    }
    return i("span", { children: d_text }, p);
  };

  return i("span", { className: n, children: c.map((d, p) => u(d, p)) });
}
function a$(e, t, n) {
  const { isVisible: o, isRevealing: r, onRevealComplete: s } = n;
  const a = R([]);
  const c = R(null);
  const l = R(null);
  const u = R({ width: 0, height: 0 });
  const d = R(1);

  const p = A((m, v) => {
    const _ = Math.random() * 80 + 60;
    return {
      x: Math.random() * m,
      y: Math.random() * v,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * _,
      maxLife: _,
    };
  }, []);

  const f = A(
    (m, v) => {
      const _ = Math.floor((m * v) / 600);
      const y = [];
      for (let w = 0; w < _; w++) {
        y.push(p(m, v));
      }
      a.current = y;
    },
    [p]
  );

  const h = A(() => {
    const e_current = e.current;
    const t_current = t.current;
    if (!e_current || !t_current) {
      return;
    }
    const _ = t_current.getBoundingClientRect();
    if (_.width === 0 || _.height === 0) {
      return;
    }
    const y = window.devicePixelRatio || 1;
    if (u.current.width !== _.width || u.current.height !== _.height) {
      (u.current = { width: _.width, height: _.height });
      (e_current.width = _.width * y);
      (e_current.height = _.height * y);
      (e_current.style.width = `${_.width}px`);
      (e_current.style.height = `${_.height}px`);
      const w = e_current.getContext("2d");

      if (w) {
        w.setTransform(y, 0, 0, y, 0, 0);
        (l.current = w);
      }

      f(_.width, _.height);
    }
  }, [e, t, f]);

  const g = A(() => {
    d.current = 1;
  }, []);

  M(() => {
    if (!o) {
      if (c.current) {
        cancelAnimationFrame(c.current);
        (c.current = null);
      }

      return;
    }
    h();
    const m = () => {
      const l_current = l.current;
      const { width: _, height: y } = u.current;
      if (!l_current || _ === 0 || y === 0) {
        c.current = requestAnimationFrame(m);
        return;
      }
      if (r && ((d.current -= 0.05), d.current <= 0)) {
        s();
        return;
      }
      l_current.clearRect(0, 0, _, y);

      a.current.forEach((w, N) => {
        (w.x += w.speedX);
        (w.y += w.speedY);
        w.life--;

        if (w.x < 0) {
          (w.x = _);
        }

        if (w.x > _) {
          (w.x = 0);
        }

        if (w.y < 0) {
          (w.y = y);
        }

        if (w.y > y) {
          (w.y = 0);
        }

        if (w.life <= 0) {
          a.current[N] = p(_, y);
          return;
        }

        const k = w.life / w.maxLife;
        const S = k < 0.3 ? k / 0.3 : 1;
        const b = w.opacity * S * d.current;
        l_current.beginPath();
        l_current.arc(w.x, w.y, w.size, 0, Math.PI * 2);
        (l_current.fillStyle = `rgba(255, 255, 255, ${b})`);
        l_current.fill();
      });

      (c.current = requestAnimationFrame(m));
    };
    (c.current = requestAnimationFrame(m));
    window.addEventListener("resize", h);

    return () => {
      if (c.current) {
        cancelAnimationFrame(c.current);
      }

      window.removeEventListener("resize", h);
    };
  }, [o, r, p, h, s]);

  return { resetOpacity: g };
}
const c$ = "NPAl";
const l$ = "m66F";
const u$ = "tgzK";
const d$ = "bTMt";
const f$ = "guqW";
const kr = { container: c$, hidden: l$, image: u$, revealing: d$, canvas: f$ };
const rf = 5;
function sf({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: o,
  height: r,
  className: s = "",
  onClick: a,
}) {
  const [c, l] = $(!n);
  const [u, d] = $(false);
  const [p, f] = $(false);
  const h = R(null);
  const g = R(null);
  const m = R(null);
  const v = R(false);

  const { resetOpacity: _ } = a$(h, g, {
    isVisible: p && !c && n,
    isRevealing: u,
    onRevealComplete: () => l(true),
  });

  M(() => {
    const g_current = g.current;
    if (!g_current) {
      return;
    }
    const T = new IntersectionObserver(
      (C) => {
        C.forEach((E) => {
          f(E.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    T.observe(g_current);

    return () => {
      T.disconnect();
    };
  }, []);

  const y = (b) => {
    (m.current = { x: b.clientX, y: b.clientY });
    (v.current = false);
  };

  const w = (b) => {
    if (!m.current) {
      return;
    }
    const T = Math.abs(b.clientX - m.current.x);
    const C = Math.abs(b.clientY - m.current.y);

    if ((T > rf || C > rf)) {
      (v.current = true);
    }
  };

  const N = (b) => {
    if (v.current) {
      (v.current = false);
      b.stopPropagation();
      return;
    }

    if (!c && !u && n) {
      b.stopPropagation();
      d(true);
      _();
    } else if (a) {
      a(b);
    }
  };

  const k = !c && n;
  const S = o && r ? { aspectRatio: `${o} / ${r}` } : undefined;
  return n
    ? i("div", {
        ref: g,
        className: `${kr.container} ${s} ${k ? kr.hidden : ""} ${
          u ? kr.revealing : ""
        }`,
        style: S,
        onPointerDown: y,
        onPointerMove: w,
        onClick: N,
        children: [
          i("img", {
            src: e,
            alt: t,
            className: kr.image,
            loading: "lazy",
            width: o,
            height: r,
            draggable: false,
            "data-post-media-image": true,
          }),
          k && i("canvas", { ref: h, className: kr.canvas }),
        ],
      })
    : i("img", {
        src: e,
        alt: t,
        className: s,
        loading: "lazy",
        draggable: false,
        width: o,
        height: r,
        style: o && r ? { aspectRatio: `${o} / ${r}` } : undefined,
        onClick: a,
        "data-post-media-image": true,
      });
}
function p$(e) {
  let t = e;
  let n = 0;

  while (t && n < 4) {
    const o = window.getComputedStyle(t).borderRadius;
    if (o && o !== "0px" && o !== "0%") {
      return o;
    }
    (t = t.parentElement);
    n++;
  }

  return "0px";
}
function Sa(e, t) {
  const o =
      (e
        ? [
            ...(e.matches("img") ? [e] : []),
            ...Array.from(e.querySelectorAll("img")),
          ]
        : []
      ).find((v) => {
        const _ = v.getBoundingClientRect();
        return _.width > 0 && _.height > 0;
      }) ?? e;

  const r = o?.getBoundingClientRect();
  if (!r || r.width <= 0 || r.height <= 0) {
    return null;
  }
  const s = t?.getBoundingClientRect();
  const a = Math.max(0, s ? s.left : 0);
  const c = Math.max(0, s ? s.top : 0);
  const l = Math.min(window.innerWidth, s ? s.right : Infinity);
  const u = Math.min(window.innerHeight, s ? s.bottom : Infinity);
  const d = Math.max(r.left, a);
  const p = Math.max(r.top, c);
  const f = Math.min(r.right, l);
  const h = Math.min(r.bottom, u);
  const g = Math.max(0, f - d);
  const m = Math.max(0, h - p);
  return g <= 0 || m <= 0
    ? null
    : {
        left: d,
        top: p,
        width: g,
        height: m,
        hiddenLeft: d - r.left,
        hiddenTop: p - r.top,
        hiddenRight: r.right - f,
        hiddenBottom: r.bottom - h,
        borderRadius: p$(o),
      };
}
const af = { photo_open: 1, video_progress: 2 };
const h$ = 2000/* 2e3 */;
const m$ = 20;
const cf = "dwell_sid";
function g$() {
  try {
    let e = sessionStorage.getItem(cf);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(cf, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
class _$ {
  buffer = [];
  sessionId = "";
  bound = false;
  ensureInit() {
    if (!this.bound && typeof window !== "undefined") {
      (this.bound = true);
      (this.sessionId = g$());
      window.setInterval(() => this.flush(), h$);
      window.addEventListener("pagehide", () => this.flushBeacon());

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          this.flushBeacon();
        }
      });
    }
  }
  trackPhotoOpen(t, n, o, r) {
    if (!t || !n) {
      return;
    }
    this.ensureInit();
    const s = { t: af.photo_open, v: t, ai: n };

    if (o !== undefined) {
      (s.mi = o);
    }

    if (r) {
      (s.s = vi[r]);
    }

    this.enqueue(s);
  }
  trackVideoProgress(t, n, o, r, s) {
    if (!t ||
    !n ||
    !Number.isFinite(o) ||
    o <= 0 ||
    !Number.isFinite(r) ||
    r <= 0) {
      return;
    }
    this.ensureInit();
    const a = {
      t: af.video_progress,
      v: t,
      ai: n,
      pm: Math.round(o),
      dm: Math.round(r),
    };

    if (s) {
      (a.s = vi[s]);
    }

    this.enqueue(a);
  }
  enqueue(t) {
    this.buffer.push(t);

    if (this.buffer.length >= m$) {
      this.flush();
    }
  }
  async maybeCompress(t) {
    const n = { "Content-Type": "application/json" };
    if (typeof CompressionStream === "undefined" || t.length < 512) {
      return { body: new TextEncoder().encode(t), headers: n };
    }
    try {
      const o = new Blob([t])
          .stream()
          .pipeThrough(new CompressionStream("deflate"));

      const r = await new Response(o).arrayBuffer();
      if (r.byteLength < t.length) {
        return { body: r, headers: { ...n, "Content-Encoding": "deflate" } };
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
    const { body: o, headers: r } = await this.maybeCompress(n);
    L.post(D.posts.interactionLog, o, { headers: r }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    L.post(
      D.posts.interactionLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const v$ = new _$();
function y$(e, t) {
  return A(
    (n, o) => {
      if (!e || !n) {
        return;
      }
      const r = t === "post_page" || t === "link";
      v$.trackPhotoOpen(e, n, o, r ? t : undefined);
    },
    [e, t]
  );
}
const w$ = "kLg4";
const b$ = "tyIq";
const E$ = "Z83D";
const S$ = "akXd";
const k$ = "ULrz";
const N$ = "z25N";
const C$ = "fRX9";

const ot = {
  mediaWrapper: w$,
  isFeed: b$,
  single: E$,
  image: S$,
  singleVideo: k$,
  media: N$,
  dragging: C$,
};

const lf = me(() => de(
  () => import("./PostMediaVideo-LZMjQMs5.js"),
  __vite__mapDeps([13, 14, 15])
).then(e => ({
  default: e.PostMediaVideo
}))
);

const T$ = 5;
const I$ = 0.95;
const ka = 0.5;
const $$ = 650;
const R$ = 500;
const A$ = 300;
function x$(e, t, n, o) {
  const r = e / t;
  return r > n / o ? Math.min(e, n) : Math.min(t, o) * r;
}
function Kr({ media: e, isFeed: t = false, postVs: n, source: o }) {
  const r = e?.filter(I => I.type === "image") ?? [];

  const s = e?.filter(I => I.type === "video") ?? [];

  const a = R(null);

  const c = Mh(I => I.open);

  const u = bn() ? A$ : R$;
  const d = y$(n, o);
  const p = R(false);
  const f = R(0);
  const h = R(0);
  const g = R(false);
  const m = R(0);
  const v = R(0);
  const _ = R(0);
  const y = R(null);

  const w = () => {
    if (y.current) {
      cancelAnimationFrame(y.current);
      (y.current = null);
    }
  };

  const N = () => {
    const a_current = a.current;
    if (a_current) {
      (_.current *= I$);

      if (Math.abs(_.current) < ka) {
        w();
        return;
      }

      (a_current.scrollLeft += _.current);
      (y.current = requestAnimationFrame(N));
    }
  };

  const k = (I) => {
    const a_current = a.current;

    if (a_current && r.length + s.length > 1) {
      w();
      (p.current = true);
      a_current.classList.add(ot.dragging);
      (f.current = I.clientX);
      (m.current = I.clientX);
      (v.current = Date.now());
      (h.current = a_current.scrollLeft);
      (g.current = false);
      (_.current = 0);
      I.preventDefault();
    }
  };

  const S = (I) => {
    if (!p.current) {
      return;
    }
    const a_current = a.current;
    if (!a_current) {
      return;
    }
    const j = Date.now();
    const G = I.clientX - f.current;
    const ae = I.clientX - m.current;
    const se = j - v.current;

    if (Math.abs(G) > T$) {
      (g.current = true);
    }

    if (se > 0) {
      (_.current = (-ae / se) * 16);
    }

    (m.current = I.clientX);
    (v.current = j);
    (a_current.scrollLeft = h.current - G);
  };

  const b = () => {
    if (p.current && Math.abs(_.current) > ka) {
      N();
    }

    (p.current = false);
    a.current?.classList.remove(ot.dragging);
  };

  const T = () => {
    if (p.current) {
      Math.abs(_.current) > ka && N();
      (p.current = false);
      a.current?.classList.remove(ot.dragging);
    }
  };

  M(
    () => () => {
      w();
      a.current?.classList.remove(ot.dragging);
    },
    []
  );

  const C = (I, P) => {
    if (g.current) {
      (g.current = false);
      P.stopPropagation();
      return;
    }
    const r_I = r[I];

    if (r_I) {
      d(r_I.id, I);
    }

    const G = P.currentTarget ?? null;
    const ae = Sa(G, a.current);

    const se = (we) => {
      const a_current = a.current;
      if (!a_current) {
        return we !== I || !G?.isConnected ? null : Sa(G, null);
      }
      const ne = a_current.querySelectorAll("[data-post-media-image]")[we];
      return ne
        ? (ne.scrollIntoView({
            behavior: "instant",
            inline: "center",
            block: "nearest",
          }),
          Sa(ne, a_current))
        : null;
    };

    c(
      r.map(we => ({
        id: we.id,
        url: we.url,
        width: we.width || 800,
        height: we.height || 600
      })),
      I,
      ae,
      se
    );
  };

  const E = (I) => {
    I.stopPropagation();
    (g.current = false);
  };

  if (r.length === 0 && s.length === 0) {
    return null;
  }
  const x = r.length + s.length;
  if (x === 1) {
    if (r.length === 1) {
      const [I] = r;

      const P =
        I.width && I.height
          ? {
              width: `${Math.round(x$(I.width, I.height, $$, u))}px`,
              aspectRatio: `${I.width} / ${I.height}`,
            }
          : undefined;

      return i("div", {
        className: `${ot.mediaWrapper} ${t ? ot.isFeed : ""}`,
        "data-count": 1,
        children: i("div", {
          className: ot.single,
          style: P,
          onClick: (j) => {
            j.stopPropagation();
            C(0, j);
          },
          children: i(
            sf,
            {
              src: I.url,
              spoiler: I.spoiler,
              width: I.width,
              height: I.height,
              className: ot.image,
              onClick: (j) => {
                j.stopPropagation();
                C(0, j);
              },
            },
            I.id
          ),
        }),
      });
    }
    if (s.length === 1) {
      const [I] = s;
      return i("div", {
        className: `${ot.mediaWrapper} ${t ? ot.isFeed : ""}`,
        "data-count": 1,
        onClick: P => P.stopPropagation(),
        children: i("div", {
          className: ot.singleVideo,
          children: i(Xe, {
            fallback: null,
            children: i(
              lf,
              {
                src: I.url,
                spoiler: I.spoiler,
                width: I.width,
                height: I.height,
                duration: I.duration,
                postVs: n,
                source: o,
                attachmentId: I.id,
              },
              I.id
            ),
          }),
        }),
      });
    }
  }
  return i("div", {
    className: `${ot.mediaWrapper} ${t ? ot.isFeed : ""}`,
    "data-count": x,
    children: i("div", {
      ref: a,
      className: `${ot.media} ${t ? ot.isFeed : ""}`,
      "data-count": x,
      onClick: E,
      onMouseDown: k,
      onMouseMove: S,
      onMouseUp: b,
      onMouseLeave: T,
      children: [
        s.map(I => i(
          Xe,
          {
            fallback: null,
            children: i(lf, {
              src: I.url,
              spoiler: I.spoiler,
              width: I.width,
              height: I.height,
              duration: I.duration,
              className: ot.image,
              postVs: n,
              source: o,
              attachmentId: I.id,
            }),
          },
          I.id
        )
        ),
        r.map((I, P) => i(
          sf,
          {
            src: I.url,
            spoiler: I.spoiler,
            width: I.width,
            height: I.height,
            className: ot.image,
            onClick: j => C(P, j),
          },
          I.id
        )
        ),
      ],
    }),
  });
}
function km(e, t) {
  Wt(h => h.posts[e]);

  Wt(h => h.generation);

  const [n, o] = $(0);
  const r = ur().status === "allowed";
  const s = ms.read(t);
  const a = s?.state;
  const c = s?.received;
  const l = a && c !== undefined ? _i(a, c) : Infinity;
  const u = r && !!t;

  M(() => u ? _C(e) : undefined, [e, u]);

  M(() => {
    if (!a || c === undefined) {
      return;
    }

    const h = () => o(v => v + 1);

    const g = [...a.events, ...a.marks]
      .map(v => Date.parse(v.endsAt))
      .filter(v => v > l);

    const m = g.length
      ? setTimeout(
          h,
          Math.min(2147483647, Math.max(1, Math.min(...g) - _i(a, c) + 10))
        )
      : undefined;

    window.addEventListener("focus", h);

    return () => {
      clearTimeout(m);
      window.removeEventListener("focus", h);
    };
  }, [a, c, n, l]);

  const d = a?.marks.filter(h => Date.parse(h.endsAt) > l) ?? [];

  const p = !!a && !!t && a.revision !== t.revision;

  const f =
    a?.events.find(
      h => Date.parse(h.endsAt) > l && h.applicationsEnabled
    ) ?? a?.events.find(h => Date.parse(h.endsAt) > l);

  return r
    ? {
        state: a,
        marks: p ? [] : d,
        event: p ? undefined : f,
        locked: d.length > 0,
        staleText: p,
      }
    : { state: undefined, marks: [], event: undefined, locked: false, staleText: false };
}
const L$ = "xTnr";
const P$ = "UE1B";
const M$ = "Kl3S";
const O$ = "LUM6";
const D$ = "Z9N7";
const U$ = "WGSY";

const Lo = {
  overlay: L$,
  dialog: P$,
  title: M$,
  message: O$,
  actions: D$,
  column: U$,
};

const F$ = { default: "primary", cancel: "secondary", destructive: "danger" };
function Rl({
  title: e,
  message: t,
  actions: n,
  dialogClassName: o,
  stackActions: r = false,
  onDismiss: s,
}) {
  const a = n.some(c => c.loading);

  M(() => {
    const c = (u) => {
      if (u.key === "Escape") {
        u.stopPropagation();
        s?.();
      }
    };
    document.addEventListener("keydown", c);
    const l = document.body.style.overflow;
    (document.body.style.overflow = "hidden");

    return () => {
      document.removeEventListener("keydown", c);
      (document.body.style.overflow = l);
    };
  }, []);

  return ft(
    i("div", {
      className: Lo.overlay,
      onClick: (c) => {
        if (c.target === c.currentTarget && !a) {
          s?.();
        }
      },
      children: i("div", {
        role: "alertdialog",
        "aria-modal": "true",
        className: `${Lo.dialog} ${o ?? ""}`,
        children: [
          i("h2", { className: Lo.title, children: e }),
          t !== undefined && i("p", { className: Lo.message, children: t }),
          i("div", {
            className: `${Lo.actions} ${n.length > 2 || r ? Lo.column : ""}`,
            children: n.map(c => i(
              tt,
              {
                variant: F$[c.role ?? "default"],
                size: "lg",
                loading: c.loading,
                disabled: a && !c.loading,
                autofocus: c.role === "cancel",
                onClick: (l) => {
                  l.stopPropagation();
                  c.onClick();
                },
                children: c.label,
              },
              c.label
            )
            ),
          }),
        ],
      }),
    }),
    document.body
  );
}
const B$ = "z5To";
const H$ = "oqxd";
const V$ = "qjSz";
const W$ = "gF6V";
const j$ = "iZWh";
const z$ = "icz9";

const Xn = {
  dialog: B$,
  title: H$,
  copy: V$,
  bullets: W$,
  price: j$,
  unavailable: z$,
};

const q$ = {
  post_notebook: {
    title: "Тетрадка",
    details:
      "Оформи один пост как страницу школьной тетради. В магазине перед покупкой выберешь клетку или линейку.",
    bullets: [
      "Одна покупка — один пост",
      "Выбор клетки или линейки",
      "Предпросмотр до публикации",
    ],
  },
  duty_corrector: {
    title: "Дежурный",
    details:
      "Корректором можно замазать часть текста в чужом посте. Точные ограничения и цену увидишь в карточке, когда товар вернётся в магазин.",
    bullets: ["Только чужие посты", "Правку видят все"],
  },
  red_pen: {
    title: "Красная ручка",
    details:
      "Красной ручкой можно исправить слова в чужом посте. Точные ограничения и цену увидишь в карточке, когда товар вернётся в магазин.",
    bullets: ["Только чужие посты"],
  },
};

function Al({ productId: e, icon: t, onClose: n, postId: o, eventId: r }) {
  const [s, a] = $("loading");
  const [c, l] = $(null);

  const u = A(async () => {
    a("loading");
    try {
      const g =
        (await L.get("/v1/aliceai/shop", { skipErrorToast: true })).items.find(
          m => m.id === e
        ) ?? null;
      l(g);
      a(g?.isAvailable ? "available" : "unavailable");
    } catch {
      a("error");
    }
  }, [e]);

  M(() => {
    u();
  }, [u]);

  const p =
      s === "available"
        ? [
            { label: "Закрыть", role: "cancel", onClick: n },
            {
              label: "Купить в магазине",
              onClick: () => {
                const h = new URLSearchParams({
                  product: e,
                  returnTo: window.location.pathname,
                });

                if (o &&
                  r) {
                  h.set("source", "post-signature");
                  h.set("postId", o);
                  h.set("eventId", r);
                }

                n();
                Ae(`/event/alice-ai?${h.toString()}`);
              },
            },
          ]
        : s === "error"
        ? [
            { label: "Закрыть", role: "cancel", onClick: n },
            {
              label: "Повторить",
              onClick: () => {
                u();
              },
            },
          ]
        : [{ label: "Понятно", role: "cancel", onClick: n }];

  const f = c ?? q$[e];
  return i(Rl, {
    title: i("span", {
      className: Xn.title,
      children: [t, e === "post_notebook" ? "Тетрадка" : f.title],
    }),
    message: i("span", {
      className: Xn.copy,
      children: [
        i("span", { children: f.details }),
        f.bullets.length > 0 &&
          i("span", {
            className: Xn.bullets,
            children: f.bullets.map(h => i("span", { children: ["— ", h] }, h)
            ),
          }),
        c &&
          i("span", {
            className: Xn.price,
            children: ["Цена: ", c.price, " мелков"],
          }),
        s === "loading" &&
          i("span", { role: "status", children: "Проверяем витрину…" }),
        s === "unavailable" &&
          i("span", {
            role: "status",
            className: Xn.unavailable,
            children: "Сейчас купить нельзя.",
          }),
        s === "error" &&
          i("span", {
            role: "alert",
            className: Xn.unavailable,
            children: "Не удалось проверить витрину. Попробуй ещё раз.",
          }),
      ],
    }),
    actions: p,
    dialogClassName: Xn.dialog,
    onDismiss: n,
  });
}
const G$ = "Ppjk";
const Y$ = "OxWD";
const K$ = "U0e3";
const X$ = "rsSL";
const Q$ = "EyCY";
const Z$ = "jd5X";
const J$ = "NqRi";
const eR = "tCEq";
const tR = "ot9e";
const nR = "AALN";
const oR = "tlS3";
const rR = "oTq4";
const sR = "We4q";
const iR = "VRTx";
const aR = "sTtP";

const Ye = {
  panel: G$,
  panelBody: Y$,
  heading: K$,
  toolHint: X$,
  actionButton: Q$,
  preview: Z$,
  invalid: J$,
  error: eR,
  signature: tR,
  signatureAction: nR,
  signatureText: oR,
  actor: rR,
  stamp: sR,
  signatureMenu: iR,
  srOnly: aR,
};

function cR({ marks: e, postId: t, userId: n, onClose: o }) {
  const [r, s] = $(false);
  const [a, c] = $(null);
  const [l, u] = $("");

  const d = e.some(h => h.actor.id === n);

  const p = [
    ...new Map(
      e.filter(h => h.actor.id !== n).map(h => [h.actor.id, h])
    ).values(),
  ];

  const f = [];

  if (d) {
    f.push({
      label: r ? "Удалить закрашивания" : "Удалить мои закрашивания",
      role: "destructive",
      loading: a === "delete",
      onClick: async () => {
        if (!r) {
          s(true);
          return;
        }
        c("delete");
        u("");
        try {
          await L.post(
            "/correctors/cancel",
            { postId: t },
            { skipErrorToast: true }
          );

          await Nl([t]);
          o();
        } catch {
          u("Не удалось удалить закрашивания. Попробуйте ещё раз");
        } finally {
          c(null);
        }
      },
    });
  }

  if (!r) {
    for (const h of p) {
      f.push({
        label: `Пожаловаться на ${
          h.actor.username ? `@${h.actor.username}` : h.actor.displayName
        }`,
        role: "default",
        loading: a === h.actor.id,
        onClick: async () => {
          c(h.actor.id);
          u("");
          try {
            await L.post(
              "/correctors/report",
              { postId: t, markId: h.id, reason: "Неприемлемая правка" },
              { skipErrorToast: true }
            );

            u("Жалоба отправлена");
          } catch {
            u("Не удалось отправить жалобу. Попробуйте ещё раз");
          } finally {
            c(null);
          }
        },
      });
    }
  }

  f.push({
    label: r ? "Назад" : "Закрыть",
    role: "cancel",
    onClick: () => r ? s(false) : o(),
  });

  return i(Rl, {
    title: "Корректор",
    stackActions: true,
    onDismiss: o,
    actions: f,
    message: i(ue, {
      children: [
        d
          ? r
            ? "Удалить все ваши закрашивания в этом посте? Корректор не вернётся."
            : "Свои закрашивания можно удалить. Потраченный корректор не вернётся."
          : "Выберите, на чью правку пожаловаться.",
        l && i("span", { role: "status", children: [" ", l] }),
      ],
    }),
  });
}
function Nm({ marks: e, postId: t }) {
  const [n, o] = $(false);
  const { openModal: r, closeModal: s } = En();

  const a = ye(l => l.profile?.id);

  const c = [...new Map(e.map(l => [l.actor.id, l.actor])).values()];

  return c.length
    ? i(ue, {
        children: [
          i("span", {
            className: Ye.signature,
            "data-corrector-signature": true,
            children: [
              i("button", {
                type: "button",
                className: Ye.signatureAction,
                "aria-label": "О корректоре",
                onClick: (l) => {
                  l.stopPropagation();
                  o(true);
                },
              }),
              i("span", {
                className: Ye.stamp,
                "aria-hidden": "true",
                children: i("img", { src: Ic, alt: "" }),
              }),
              i("span", {
                className: Ye.signatureText,
                children: [
                  c.length === 1 ? "Проверил дежурный" : "Проверили дежурные",
                  " ",
                  c.map((l, u) => i(
                    "span",
                    {
                      className: Ye.actor,
                      children: [
                        l.username
                          ? i("a", {
                              href: `/@${l.username}`,
                              onClick: d => d.stopPropagation(),
                              children: ["@", l.username],
                            })
                          : l.displayName,
                        u < c.length - 1 ? ", " : "",
                      ],
                    },
                    l.id
                  )
                  ),
                ],
              }),
              a &&
                i("button", {
                  type: "button",
                  className: Ye.signatureMenu,
                  "aria-label": "Действия с корректором",
                  onClick: (l) => {
                    l.stopPropagation();
                    const u = r(
                      i(cR, {
                        marks: e,
                        postId: t,
                        userId: a,
                        onClose: () => s(u),
                      })
                    );
                  },
                  children: "···",
                }),
            ],
          }),
          n &&
            i(Al, {
              productId: "duty_corrector",
              icon: i("img", { src: Ic, alt: "" }),
              postId: t,
              eventId: e[0].eventId,
              onClose: () => o(false),
            }),
        ],
      })
    : null;
}
function lR(e, t) {
  ct(() => {
    const e_current = e.current;
    if (!e_current || !t) {
      return;
    }
    let o = 0;

    const r = () => {
      const window_visualViewport = window.visualViewport;
      const l = window_visualViewport?.width ?? window.innerWidth;
      const u = window_visualViewport?.height ?? window.innerHeight;
      const d = window_visualViewport?.offsetLeft ?? 0;
      const p = window_visualViewport?.offsetTop ?? 0;
      const f = 16;
      const h = getComputedStyle(e_current);

      const g =
        p + Math.max(f, parseFloat(h.getPropertyValue("--safe-top")) || 0);

      let m =
        p +
        u -
        Math.max(f, parseFloat(h.getPropertyValue("--safe-bottom")) || 0);
      for (const T of document.querySelectorAll("nav")) {
        const C = T.getBoundingClientRect();

        if (C.width > l / 2 &&
          C.top > p + u / 2 &&
          C.top < m &&
          C.bottom >= p + u - 120) {
          (m = Math.min(m, C.top - f));
        }
      }
      (e_current.style.width = `${Math.max(1, Math.min(352, l - f * 2))}px`);

      e_current.style.setProperty(
        "--bubble-max-height",
        `${Math.max(80, m - g)}px`
      );

      const v = e_current.getBoundingClientRect();
      const _ = m - t.bottom - f;
      const y = t.top - f - g;
      let w = "below";
      let N = t.bottom + f;

      if (_ < v.height) {
        if (y >= v.height) {
          (w = "above");
          (N = t.top - f - v.height);
        } else if (Math.max(y, _) >= 240) {
          (w = y > _ ? "above" : "below");
          e_current.style.setProperty("--bubble-max-height", `${Math.max(y, _)}px`);

          (N = w === "above"
            ? t.top - f - e_current.getBoundingClientRect().height
            : t.bottom + f);
        } else {
          (w = "floating");
          (N = Math.max(g, Math.min(N, m - v.height)));
        }
      }

      const k = (t.left + t.right) / 2;
      const S = Math.max(d + f, Math.min(k - v.width / 2, d + l - f - v.width));
      const b = Math.max(g, Math.min(N, m - e_current.getBoundingClientRect().height));

      if (Math.abs(b - N) > 1) {
        (w = "floating");
      }

      (e_current.style.left = `${S}px`);
      (e_current.style.top = `${b}px`);

      e_current.style.setProperty(
        "--arrow-x",
        `${Math.max(24, Math.min(k - S, v.width - 24))}px`
      );

      (e_current.dataset.placement = w);
      (e_current.style.visibility = "visible");
    };

    const s = () => {
      cancelAnimationFrame(o);
      (o = requestAnimationFrame(r));
    };

    const a = new ResizeObserver(s);
    a.observe(e_current);
    window.visualViewport?.addEventListener("resize", s);
    window.visualViewport?.addEventListener("scroll", s);
    s();

    return () => {
      cancelAnimationFrame(o);
      a.disconnect();
      window.visualViewport?.removeEventListener("resize", s);
      window.visualViewport?.removeEventListener("scroll", s);
    };
  }, [e, t]);
}
function Cm(e, t) {
  Vt(m => m.posts[e]);

  Vt(m => m.generation);

  const [n, o] = $(0);
  const r = ur().status === "allowed";
  const s = hs.read(t);
  const a = s?.state;
  const c = s?.received;
  const l = a && c !== undefined ? _i(a, c) : Infinity;
  const u = r && !!t;

  M(() => u ? gC(e) : undefined, [e, u]);

  M(() => {
    if (!a || c === undefined) {
      return;
    }

    const m = () => o(y => y + 1);

    const v = [...a.events, ...(a.claims ?? (a.claim ? [a.claim] : []))]
      .map(y => Date.parse(y.endsAt))
      .filter(y => y > l);

    const _ = v.length
      ? setTimeout(
          m,
          Math.min(2147483647, Math.max(1, Math.min(...v) - _i(a, c) + 10))
        )
      : undefined;

    window.addEventListener("focus", m);

    return () => {
      clearTimeout(_);
      window.removeEventListener("focus", m);
    };
  }, [a, c, n, l]);

  const d = (a?.claims ?? (a?.claim ? [a.claim] : [])).filter(
      m => Date.parse(m.endsAt) > l
    );

  const p = d.find(m => m.isOwner) ?? d[0] ?? null;

  const f = d.find(m => m.isOwner) ?? null;

  const h = !!a && !!t && a.revision !== t.revision;

  const g =
    a?.events.find(m => m.id === p?.eventId && Date.parse(m.endsAt) > l) ??
    a?.events.find(m => Date.parse(m.endsAt) > l);

  return r
    ? {
        state: a,
        claim: p,
        ownClaim: f,
        claims: d,
        corrections: h || !d.length ? [] : a?.corrections ?? [],
        event: h ? undefined : g,
        locked: d.length > 0,
        staleText: h,
      }
    : {
        state: undefined,
        claim: null,
        ownClaim: null,
        claims: [],
        corrections: [],
        event: undefined,
        locked: false,
        staleText: false,
      };
}
const Tm = /^[\p{L}\p{M}]+(?:[-'’][\p{L}\p{M}]+)*$/u;
const uf = /[\p{L}\p{M}\p{N}_'’-]/u;
const Xr = 10;
const Im = new Intl.Segmenter("ru", { granularity: "grapheme" });
function uR(e) {
  return [...Im.segment(e)]
    .slice(0, Xr)
    .map(t => t.segment)
    .join("");
}
function Na(e, t, n) {
  return Tm.test(e.slice(t, n))
    ? uf.test(Array.from(e.slice(0, t)).at(-1) ?? "") ||
      uf.test(Array.from(e.slice(n))[0] ?? "")
      ? "Выделите слово целиком"
      : ""
    : "Выделите одно слово без пробелов";
}
function Ca(e, t, n = false) {
  return t
    ? Tm.test(t)
      ? [...Im.segment(t)].length > Xr
        ? `Не больше ${Xr} символов`
        : !n && t.normalize("NFC") === e.normalize("NFC")
        ? "Введите другое слово"
        : ""
      : "Введите одно слово без пробелов"
    : "";
}
function $m(e, t, n) {
  const o = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let r = 0;
  let s;
  let a;
  let c;

  while ((s = o.nextNode())) {
    const u = s.textContent?.length ?? 0;

    if (!a && t < r + u) {
      (a = { node: s, offset: t - r });
    }

    if (!c && n <= r + u) {
      (c = { node: s, offset: n - r });
    }

    (r += u);
  }

  if (!a || !c) {
    return null;
  }
  const l = document.createRange();
  l.setStart(a.node, a.offset);
  l.setEnd(c.node, c.offset);
  return l;
}
function dR(e, t) {
  const n = getComputedStyle(e);
  const o = document.createElement("canvas");
  const r = o.getContext("2d");
  r.font = "600 14px EventCaveat";
  const s = e.cloneNode(true);
  s.removeAttribute("data-corrector-text");
  s.removeAttribute("tabindex");
  s.setAttribute("aria-hidden", "true");

  Object.assign(s.style, {
    position: "fixed",
    left: "0",
    top: "-20000px",
    display: "block",
    visibility: "hidden",
    pointerEvents: "none",
    font: n.font,
    letterSpacing: n.letterSpacing,
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
  });

  document.body.appendChild(s);
  try {
    for (const a of new Set([
      220,
      288,
      358,
      e.parentElement.getBoundingClientRect().width,
    ])) {
      s.style.width = `${a}px`;
      const c = new Map();
      const l = s.getBoundingClientRect().top;
      const u = parseFloat(n.lineHeight) || 22.5;
      for (const d of t) {
        const p = $m(s, d.start, d.end)?.getClientRects()[0];
        if (!p) {
          return false;
        }
        const f = Math.round((p.top - l) / u);
        c.set(f, (c.get(f) ?? 0) + r.measureText(d.replacement).width + 8);
      }
      if ([...c.values()].some(d => d > a - 4)) {
        return false;
      }
    }
    return true;
  } finally {
    s.remove();
  }
}
const fR = "CiAG";
const pR = "rn2b";
const hR = "N3DQ";
const mR = "up6v";
const gR = "XqAO";
const _R = "xWyc";
const vR = "sMLA";
const yR = "TMMk";
const wR = "iONr";
const bR = "CeEO";

const Ut = {
  textLayer: fR,
  withCorrections: pR,
  overlay: hR,
  strike: mR,
  handwriting: gR,
  tools: _R,
  selected: vR,
  replacement: yR,
  penIcon: wR,
  signatureText: bR,
};

function ER({ root: e, corrections: t }) {
  const [n, o] = $([]);

  ct(() => {
    const e_current = e.current;
    const s = e_current?.parentElement;
    if (!e_current || !s) {
      return;
    }
    let a = 0;
    let c = false;

    const l = () => {
      if (c) {
        return;
      }
      const p = s.getBoundingClientRect();
      const f = document.createElement("canvas");
      const h = f.getContext("2d");
      const g = parseFloat(getComputedStyle(e_current).lineHeight) || 22.5;
      const m = new Map();
      for (const _ of [...t].sort((y, w) => y.start - w.start)) {
        const y = $m(e_current, _.start, _.end);
        if (!y) {
          continue;
        }
        const w = [...y.getClientRects()].filter(E => E.width > 0);
        if (!w.length) {
          continue;
        }
        const N = 14;
        const [k] = w;
        const S = Math.min(19, Math.max(16, g * 0.8));
        const b = Math.max(-N, k.top - p.top - N);

        const T = {
          id: _.id,
          text: _.replacement,
          left: k.left - p.left,
          top: b,
          font: S,
          strikes: w.map(E => ({
            left: E.left - p.left,
            top: E.top - p.top + E.height * 0.55,
            width: E.width
          })),
        };

        const C = Math.round((k.top - p.top) / g);
        m.set(C, [...(m.get(C) ?? []), T]);
      }
      const v = [];
      for (const _ of m.values()) {
        let y = _[0].font;
        const w = () => _.map(
          S => {
            (h.font = `600 ${y}px EventCaveat`);
            return h.measureText(S.text).width + 4;
          }
        );
        let N = w();

        while (N.reduce((S, b) => S + b, 0) + 4 * (_.length - 1) > p.width &&
             y > 14) {
          (y -= 0.5);
          (N = w());
        }

        let k = 0;
        _.forEach((S, b) => {
          (S.font = y);

          (S.left = Math.max(
              k,
              Math.min(
                S.left + (S.strikes[0].width - N[b]) / 2,
                p.width - N[b]
              )
            ));

          (k = S.left + N[b] + 4);
        });
        for (let S = _.length - 1; S >= 0; S--) {
          _[S].left = Math.max(
            0,
            Math.min(
              _[S].left,
              (S === _.length - 1 ? p.width : _[S + 1].left - 4) - N[S]
            )
          );
        }
        v.push(..._);
      }
      o(v);
    };

    const u = () => {
      cancelAnimationFrame(a);
      (a = requestAnimationFrame(l));
    };

    const d = new ResizeObserver(u);
    d.observe(s);
    document.fonts.load("600 22px EventCaveat").then(u);
    document.fonts.ready.then(u);
    document.fonts.addEventListener("loadingdone", u);
    window.addEventListener("resize", u);
    u();

    return () => {
      (c = true);
      cancelAnimationFrame(a);
      d.disconnect();
      window.removeEventListener("resize", u);
      document.fonts.removeEventListener("loadingdone", u);
    };
  }, [e, t]);

  return i("span", {
    className: Ut.overlay,
    "data-red-pen-overlay": true,
    "aria-label": t.map(r => `Исправлено: ${r.replacement}`).join("; "),
    children: n.map(r => i(
      "span",
      {
        "data-red-pen-mark": r.id,
        children: [
          r.strikes.map((s, a) => i(
            "span",
            {
              className: Ut.strike,
              style: { left: s.left, top: s.top, width: s.width },
              "aria-hidden": "true",
            },
            a
          )
          ),
          i("span", {
            className: Ut.handwriting,
            "data-red-pen-label": true,
            style: { left: r.left, top: r.top, fontSize: r.font },
            "aria-hidden": "true",
            children: r.text,
          }),
        ],
      },
      r.id
    )
    ),
  });
}
function SR({ postId: e, claims: t, userId: n, onClose: o }) {
  const [r, s] = $(false);
  const [a, c] = $(null);
  const [l, u] = $("");

  const d = t.find(h => h.actor.id === n);

  const p = t.filter(h => h.actor.id !== n);

  const f = [];

  if (d) {
    f.push({
      label: r ? "Удалить правки" : "Удалить мои правки",
      role: "destructive",
      loading: a === "delete",
      onClick: async () => {
        if (!r) {
          s(true);
          return;
        }
        c("delete");
        u("");
        try {
          await L.post(
            "/red-pens/cancel",
            { postId: e, claimId: d.id },
            { skipErrorToast: true }
          );

          await kl([e]);
          o();
        } catch {
          u("Не удалось удалить правки. Попробуйте ещё раз");
        } finally {
          c(null);
        }
      },
    });
  }

  if (!r) {
    for (const h of p) {
      f.push({
        label: `Пожаловаться на ${
          h.actor.username ? `@${h.actor.username}` : h.actor.displayName
        }`,
        loading: a === h.id,
        onClick: async () => {
          c(h.id);
          u("");
          try {
            await L.post(
              "/red-pens/report",
              { postId: e, claimId: h.id, reason: "Неприемлемая правка" },
              { skipErrorToast: true }
            );

            u("Жалоба отправлена");
          } catch {
            u("Не удалось отправить жалобу. Попробуйте ещё раз");
          } finally {
            c(null);
          }
        },
      });
    }
  }

  f.push({
    label: r ? "Назад" : "Закрыть",
    role: "cancel",
    onClick: () => r ? s(false) : o(),
  });

  return i(Rl, {
    title: "Красная ручка",
    stackActions: true,
    onDismiss: o,
    actions: f,
    message: i(ue, {
      children: [
        r
          ? "Удалить все ваши правки в этом посте? Ручка и использованные слова не вернутся."
          : d
          ? p.length
            ? "Можно удалить свои правки или пожаловаться на чужие."
            : "Свои правки можно удалить. Потраченная ручка не вернётся."
          : "Выберите, на чью правку пожаловаться.",
        l && i("span", { role: "status", children: [" ", l] }),
      ],
    }),
  });
}
function Rm({ claims: e, visible: t, postId: n }) {
  const [o, r] = $(false);
  const { openModal: s, closeModal: a } = En();

  const c = ye(l => l.profile?.id);

  return !e.length || !t
    ? null
    : i(ue, {
        children: [
          i("span", {
            className: Ye.signature,
            "data-red-pen-signature": true,
            children: [
              i("button", {
                type: "button",
                className: Ye.signatureAction,
                "aria-label": "О красной ручке",
                onClick: (l) => {
                  l.stopPropagation();
                  r(true);
                },
              }),
              i("span", {
                className: Ut.penIcon,
                children: i("img", { src: $c, alt: "" }),
              }),
              i("span", {
                className: `${Ye.signatureText} ${Ut.signatureText}`,
                children: [
                  "Исправлено красной ручкой",
                  " ",
                  e.map((l, u) => i(
                    "span",
                    {
                      className: Ye.actor,
                      children: [
                        l.actor.username
                          ? i("a", {
                              href: `/@${l.actor.username}`,
                              onClick: d => d.stopPropagation(),
                              children: ["@", l.actor.username],
                            })
                          : l.actor.displayName,
                        u < e.length - 1 ? ", " : "",
                      ],
                    },
                    l.id
                  )
                  ),
                ],
              }),
              c &&
                i("button", {
                  className: Ye.signatureMenu,
                  type: "button",
                  "aria-label": "Действия с правкой",
                  onClick: (l) => {
                    l.stopPropagation();
                    const u = s(
                      i(SR, {
                        postId: n,
                        claims: e,
                        userId: c,
                        onClose: () => a(u),
                      })
                    );
                  },
                  children: "···",
                }),
            ],
          }),
          o &&
            i(Al, {
              productId: "red_pen",
              icon: i("img", { src: $c, alt: "" }),
              postId: n,
              eventId: e[0].eventId,
              onClose: () => r(false),
            }),
        ],
      });
}
function kR(e, t) {
  const n = new Map();
  for (const o of [
    ...e.map(r => ({
      kind: "paint",
      ...r
    })),
    ...t.map(r => ({
      kind: "pen",
      ...r
    })),
  ]) {
    const r = `${o.start}:${o.end}`;

    const s =
      o.createdAtMicros ?? (o.createdAt ? Date.parse(o.createdAt) * 1000/* 1e3 */ : 0);

    const a = n.get(r);

    if ((!a || s > a.at || (s === a.at && o.id > a.id))) {
      n.set(r, { kind: o.kind, id: o.id, at: s });
    }
  }
  return {
    marks: e.filter(o => n.get(`${o.start}:${o.end}`)?.id === o.id),
    corrections: t.filter(o => n.get(`${o.start}:${o.end}`)?.id === o.id),
  };
}
const df = new Intl.Segmenter("ru", { granularity: "grapheme" });
const Ta = 3;
function xl({
  postId: e,
  authorId: t,
  text: n,
  spans: o,
  initial: r,
  initialRedPen: s,
  selectable: a = true,
  signature: c = true,
}) {
  const l = R(null);
  const u = R(null);
  const d = R(false);
  const p = km(e, r);
  const f = Cm(e, s);

  const h = Ie(() => kR(p.marks, f.corrections), [p.marks, f.corrections]);

  const g = ye(U => U.profile?.id);

  const m = Wt(U => U.inventory);

  const v = Vt(U => U.inventory);

  const _ = m?.events.find(U => U.id === p.event?.id)?.balance;

  const y = v?.events.find(U => U.id === f.event?.id)?.balance;

  const w = !!t && t === g;
  const N = !!p.event && !w && (_ ?? 0) > 0;
  const k = !!f.event && t !== g && ((y ?? 0) > 0 || !!f.ownClaim);
  const S = a && !!g && (N || k);
  const [b, T] = $(null);
  const [C, E] = $("pen");
  const [x, I] = $("");
  const [P, j] = $("");
  const [G, ae] = $(false);
  const [se, we] = $(null);
  const [X, ne] = $("");
  const [fe, q] = $("");
  const Se = !!b && b.actorId === g && (S || G || !!se);
  const ce = se?.tool ?? (C === "pen" && k ? "pen" : N ? "corrector" : "pen");
  lR(u, Se ? b?.anchor : undefined);

  ct(() => {
    let U = false;
    if (
      !b ||
      !x ||
      !l.current ||
      Na(n, b.start, b.end) ||
      Ca(
        b.text,
        x,
        f.corrections.some(Te => Te.start === b.start && Te.end === b.end)
      )
    ) {
      q("");
      return;
    }
    const xe = () => {
      if (U || !l.current) {
        return;
      }
      const Te = dR(l.current, [
        ...h.corrections.filter(
          Be => Be.start !== b.start || Be.end !== b.end
        ),
        { start: b.start, end: b.end, replacement: x },
      ]);
      q(Te ? "" : "Правки не помещаются в строке. Выберите слово короче");
    };
    xe();
    document.fonts.load("600 14px EventCaveat").then(xe);
    document.fonts.addEventListener("loadingdone", xe);

    return () => {
      (U = true);
      document.fonts.removeEventListener("loadingdone", xe);
    };
  }, [b, x, n, f.corrections, h.corrections]);

  M(() => {
    if (!S) {
      return;
    }
    let U;

    const xe = () => {
      if (d.current || se || u.current?.contains(document.activeElement)) {
        return;
      }
      const Be = window.getSelection();
      const l_current = l.current;
      if (!l_current || !Be?.rangeCount || Be.isCollapsed) {
        T(null);
        return;
      }
      const ze = Be.getRangeAt(0);
      if (
        !l_current.contains(ze.startContainer) ||
        !l_current.contains(ze.endContainer)
      ) {
        T(null);
        return;
      }
      const $e = ze.cloneRange();
      $e.selectNodeContents(l_current);
      $e.setEnd(ze.startContainer, ze.startOffset);
      const st = $e.toString().length;
      const xt = ze.toString();
      const Vn = st + xt.length;
      if (n.slice(st, Vn) !== xt) {
        return;
      }
      const Et = ze.getBoundingClientRect();

      if (Et.width) {
        if (b?.start !== st || b.end !== Vn || b.actorId !== g) {
          T({
                start: st,
                end: Vn,
                text: xt,
                count: [...df.segment(xt)].filter(
                  fr => !/^\s+$/u.test(fr.segment)
                ).length,
                anchor: {
                  left: Et.left,
                  right: Et.right,
                  top: Et.top,
                  bottom: Et.bottom,
                },
                actorId: g,
                operationId: crypto.randomUUID(),
                penRevision: f.state?.revision,
                paintRevision: p.state?.revision,
              });

          E(k ? "pen" : "corrector");
          I("");
          j("");
          ne("");
        }
      }
    };

    const Te = () => {
      clearTimeout(U);
      (U = setTimeout(xe, 350));
    };

    document.addEventListener("selectionchange", Te);

    return () => {
      clearTimeout(U);
      document.removeEventListener("selectionchange", Te);
    };
  }, [S, g, n, f.state, p.state, k, se, b]);

  M(() => {
    if (!b) {
      return;
    }

    const U = () => {
      if (!d.current && !se) {
        T(null);
      }
    };

    const xe = (Pe) => {
      if (!u.current?.contains(Pe.target) &&
        !l.current?.contains(Pe.target)) {
        U();
      }
    };

    const Te = (Pe) => {
      if (Pe.key === "Escape") {
        U();
        l.current?.focus();
      }
    };

    const Be = (Pe) => {
      if (!u.current?.contains(Pe.target) &&
        !u.current?.contains(document.activeElement)) {
        U();
      }
    };

    document.addEventListener("pointerdown", xe);
    document.addEventListener("keydown", Te);
    document.addEventListener("scroll", Be, true);

    return () => {
      document.removeEventListener("pointerdown", xe);
      document.removeEventListener("keydown", Te);
      document.removeEventListener("scroll", Be, true);
    };
  }, [b, se]);

  const O =
      !!b &&
      p.marks.some(
        U => U.start < b.end &&
        U.end > b.start &&
        (U.start !== b.start || U.end !== b.end)
      );

  const B =
    !!b &&
    f.corrections.some(
      U => U.start < b.end &&
      U.end > b.start &&
      (U.start !== b.start || U.end !== b.end)
    );

  const Q =
    !!b &&
    p.marks.some(
      U => U.actor.id === g && U.start === b.start && U.end === b.end
    );

  const ge =
    !!b &&
    h.corrections.some(
      U => U.start === b.start && U.end === b.end && U.replacement === x
    );

  const Z =
    !!b &&
    o?.some(
      U => ["link", "mention", "hashtag", "spoiler"].includes(U.type) &&
      U.offset < b.end &&
      U.offset + U.length > b.start
    );

  const J = p.event
    ? p.event.applicationsEnabled
      ? b && (b.count < 1 || b.count > 10)
        ? "Выберите от 1 до 10 символов без учёта пробелов"
        : p.event.used >= 3
        ? "На этом посте вы уже использовали 3 корректора"
        : Q
        ? "Вы уже закрасили этот фрагмент"
        : O
        ? "Выделите весь закрашенный фрагмент"
        : B
        ? "Выделите всё исправленное слово"
        : _ === 0
        ? "У вас пока нет корректоров"
        : ""
      : "Применение временно недоступно"
    : "Ивент завершён";

  const be = f.event
    ? f.event.applicationsEnabled
      ? f.ownClaim && f.ownClaim.used >= Ta
        ? `Вы уже исправили ${Ta} слов`
        : b && Na(n, b.start, b.end)
        ? Na(n, b.start, b.end)
        : Z
        ? "Ссылки, упоминания и скрытый текст исправлять нельзя"
        : O
        ? "Выделите весь закрашенный фрагмент"
        : B
        ? "Выделите всё исправленное слово"
        : ge
        ? "Это слово уже так исправлено"
        : b
        ? Ca(
            b.text,
            x,
            f.corrections.some(U => U.start === b.start && U.end === b.end)
          )
        : ""
      : "Исправления временно недоступны"
    : "Ивент завершён";

  const Fe = ce === "pen" ? be || fe : J;

  const je = b
    ? [...df.segment(b.text)]
        .map(U => p.marks.some(
    xe => xe.start < b.start + U.index + U.segment.length &&
    xe.end > b.start + U.index
  ) && !/^\s+$/u.test(U.segment)
    ? "■"
    : U.segment
        )
        .join("")
    : "";

  const pe = () => Promise.allSettled([
    ...(r ? [Nl([e]), vm()] : []),
    ...(s ? [kl([e]), _m()] : []),
  ]);

  async function qt() {
    if (!b || d.current) {
      return;
    }
    const U = ce === "pen" ? f.event : p.event;
    const xe = ce === "pen" ? b.penRevision : b.paintRevision;
    if (!se && (!U || !xe || Fe || (ce === "pen" && !x))) {
      return;
    }
    const Te = se ?? {
      tool: ce,
      body: {
        eventId: U.id,
        postId: e,
        revision: xe,
        start: b.start,
        end: b.end,
        operationId: b.operationId,
        ...(ce === "pen" ? { replacement: x } : {}),
      },
    };
    (d.current = true);
    ae(true);
    j("");
    try {
      await L.post(
        Te.tool === "pen" ? "/red-pens/apply" : "/correctors/apply",
        Te.body,
        { skipErrorToast: true }
      );

      we(null);
      ne(Te.tool === "pen" ? "Слово исправлено" : "Текст закрашен");
      T(null);
      window.getSelection()?.removeAllRanges();
      await pe();
    } catch (Be) {
      const Pe = Be;
      we(!Pe.status || Pe.status >= 500 ? Te : null);
      j(Pe.message || "Не удалось получить ответ. Повторите запрос");
      await pe();
    } finally {
      (d.current = false);
      ae(false);
    }
  }
  const Gt = () => {
    if (!d.current) {
      T(null);
      j("");
      we(null);
      window.getSelection()?.removeAllRanges();
    }
  };
  return i(ue, {
    children: [
      i("span", {
        className: `${Ut.textLayer} ${
          h.corrections.length > 0 ? Ut.withCorrections : ""
        }`,
        "data-post-tool-text": true,
        children: [
          i("span", {
            ref: l,
            "data-corrector-text": e,
            "data-corrector-applied": X === "Текст закрашен" || undefined,
            tabIndex: S ? 0 : undefined,
            onCopy: h.marks.length
              ? (U) => {
              const xe = window.getSelection();
              if (!xe?.rangeCount || !l.current) {
                return;
              }
              const Te = xe.getRangeAt(0);
              if (
                !l.current.contains(Te.startContainer) ||
                !l.current.contains(Te.endContainer)
              ) {
                U.preventDefault();
                return;
              }
              const Be = Te.cloneRange();
              Be.selectNodeContents(l.current);
              Be.setEnd(Te.startContainer, Te.startOffset);
              let Pe = Be.toString().length;
              const ze = Array.from(xe.toString())
                .map(($e) => {
                const st = Pe;
                (Pe += $e.length);

                return h.marks.some(xt => st >= xt.start && st < xt.end) &&
                !/\s/u.test($e)
                  ? "■"
                  : $e;
              })
                .join("");
              U.preventDefault();
              U.clipboardData?.setData("text/plain", ze);
            }
              : undefined,
            children:
              p.staleText || f.staleText
                ? i("span", { children: "Пост изменился. Обновите страницу" })
                : i(wi, { text: n, spans: o, correctorMarks: h.marks }),
          }),
          h.corrections.length > 0 &&
            i(ER, { root: l, corrections: h.corrections }),
        ],
      }),
      c &&
        i(ue, {
          children: [
            i(Nm, { marks: p.marks, postId: e }),
            i(Rm, {
              claims: f.claims,
              visible: f.corrections.length > 0,
              postId: e,
            }),
          ],
        }),
      X && i("span", { className: Ye.srOnly, role: "status", children: X }),
      Se &&
        b &&
        ft(
          i("div", {
            ref: u,
            role: "dialog",
            "aria-label": ce === "pen" ? "Красная ручка" : "Закрасить текст",
            "data-corrector-panel": true,
            "data-post-tool-panel": true,
            className: Ye.panel,
            onClick: U => U.stopPropagation(),
            children: i("div", {
              className: Ye.panelBody,
              children: [
                i("div", {
                  className: Ye.heading,
                  children: [
                    i("strong", {
                      children: ce === "pen" ? "Красная ручка" : "Корректор",
                    }),
                    i(tt, {
                      variant: "secondary",
                      size: "sm",
                      iconOnly: true,
                      "aria-label": "Закрыть",
                      disabled: G,
                      onClick: Gt,
                      children: i(Rt, { size: 18 }),
                    }),
                  ],
                }),
                i("p", {
                  className: Ye.toolHint,
                  children:
                    ce === "pen"
                      ? `Одно слово до ${Xr} символов · до ${Ta} правок на пост`
                      : "До 10 символов за одно применение",
                }),
                k &&
                  N &&
                  i("div", {
                    className: Ut.tools,
                    "aria-label": "Предметы",
                    children: [
                      i(tt, {
                        size: "sm",
                        variant: "secondary",
                        className: ce === "pen" ? Ut.selected : "",
                        "aria-pressed": ce === "pen",
                        disabled: G || !!se,
                        onClick: () => {
                          E("pen");
                          j("");
                        },
                        children: "Ручка",
                      }),
                      i(tt, {
                        size: "sm",
                        variant: "secondary",
                        className: ce === "corrector" ? Ut.selected : "",
                        "aria-pressed": ce === "corrector",
                        disabled: G || !!se,
                        onClick: () => {
                          E("corrector");
                          j("");
                        },
                        children: "Корректор",
                      }),
                    ],
                  }),
                i("div", {
                  className: Ye.preview,
                  "data-corrector-preview": true,
                  children: [
                    i("span", { children: je }),
                    ce === "corrector" &&
                      i("b", {
                        className: b.count > 10 ? Ye.invalid : "",
                        children: [b.count, "/10"],
                      }),
                  ],
                }),
                ce === "pen" &&
                  i("label", {
                    className: Ut.replacement,
                    children: [
                      "Новое слово",
                      i("input", {
                        "aria-label": "Новое слово",
                        placeholder: `До ${Xr} символов`,
                        value: x,
                        disabled:
                          G ||
                          !!se ||
                          (!!be &&
                            be !==
                              Ca(
                                b.text,
                                x,
                                f.corrections.some(
                                  U => U.start === b.start && U.end === b.end
                                )
                              )),
                        autoComplete: "off",
                        onInput: (U) => {
                          I(uR(U.currentTarget.value));
                          j("");
                        },
                        onKeyDown: (U) => {
                          if (U.key === "Enter" &&
                            !U.isComposing) {
                            U.preventDefault();
                            qt();
                          }
                        },
                      }),
                    ],
                  }),
                (Fe || P) &&
                  i("p", {
                    className: Ye.error,
                    role: "status",
                    children: P || Fe,
                  }),
                i(tt, {
                  size: "md",
                  fullWidth: true,
                  className: Ye.actionButton,
                  disabled:
                    G || (!se && (!!Fe || (ce === "pen" ? !x : _ === undefined))),
                  onClick: qt,
                  children: G
                    ? "Сохраняем…"
                    : se
                    ? "Проверить и повторить"
                    : ce === "pen"
                    ? "Исправить"
                    : "Закрасить · 1 корректор",
                }),
              ],
            }),
          }),
          document.body
        ),
    ],
  });
}

const NR = e => e === "window" ? "layer_window" : e === "stain" ? "splash" : e;

const CR = "alice-profile-changed";
const TR = "alice-sticker-placed";
function g8(e) {
  window.dispatchEvent(new CustomEvent(CR, { detail: e }));
}
function _8(e) {
  window.dispatchEvent(new CustomEvent(TR, { detail: e }));
}
const xc = "alice-balloon-thrown";
function v8(e) {
  window.dispatchEvent(new CustomEvent(xc, { detail: e }));
}
function IR(e, t, n) {
  const o = Date.now();
  return (e ?? [])
    .filter(
      r => r.anchor?.kind === t && r.anchor.id === n && Date.parse(r.expiresAt) > o
    )
    .map((r, s) => ({
    id: r.id,
    kind: "splash",
    asset: "water_stain",
    x: r.x,
    y: r.y,
    size: 0.22,
    angle: r.angle,
    z: s + 1,
    createdBy: "",
    createdAt: r.thrownAt,
    anchor: { kind: t, id: n }
  }));
}

const $R = e => ({
  ...e,

  layers: [
    ...(e.window.broken
      ? [
          {
            slot: "window",
            asset: e.window.asset ?? "window_broken",
            setBy: "",
            setAt: e.window.brokenAt ?? "",
          },
        ]
      : []),
    ...(e.curtains.closed
      ? [
          {
            slot: "curtains",
            asset: "curtain_spread",
            setBy: e.profileId,
            setAt: "",
          },
        ]
      : []),
  ],

  placements: e.placements.map(t => ({
    ...t,
    kind: t.kind === "stain" ? "splash" : "sticker",

    wear: {
      stage: t.wear,
      float: 0,
      holes: 0,
      seed: 0,
      erasesLeft: Math.max(0, 4 - t.wear),
    }
  }))
});

const Am = {
  profileRaw: e => L.get(`/v1/aliceai/profiles/${encodeURIComponent(e)}`, {
    skipErrorToast: true,
  }),
  profile: async e => $R(await Am.profileRaw(e)),
  throwBalloon: (e, t, n, o) => L.post(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/balloons`,
    { inventoryItemId: t, ...n },
    { headers: { "Idempotency-Key": o }, skipErrorToast: true }
  ),
  throwCushion: (e, t, n, o) => L.post(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/cushion`,
    { inventoryItemId: t, ...o },
    { headers: { "Idempotency-Key": n }, skipErrorToast: true }
  ),
  claimCushion: e => L.post(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/cushion/claim`,
    {},
    { skipErrorToast: true }
  ),
  setCurtains: (e, t) => L.put(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/curtains`,
    { closed: t },
    { skipErrorToast: true }
  ),
  donateCurtains: (e, t, n) => L.post(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/curtains/donations`,
    { amount: t },
    { headers: { "Idempotency-Key": n }, skipErrorToast: true }
  ),
  recyclePost: (e, t) => L.post(
    `/v1/aliceai/waste-paper/posts/${encodeURIComponent(e)}`,
    {},
    { headers: { "Idempotency-Key": t }, skipErrorToast: true }
  ),
  balance: () => L.get("/v1/aliceai/balance", { skipErrorToast: true }).then(
    e => e.balance
  ),
  nicknames: () => L.get("/v1/aliceai/nicknames", { skipErrorToast: true }),
  setActiveNickname: e => L.put(
    "/v1/aliceai/nicknames/active",
    { form: e },
    { skipErrorToast: true }
  ),
  inventory: async () => ({
    items: (
      await L.get("/v1/aliceai/inventory", { skipErrorToast: true })
    ).items.map(t => ({
      ...t,
      kind: NR(t.kind)
    }))
  }),
  profileAvatar: () => L.get("/profile-avatar/", { skipErrorToast: true }).then(e => e.data),
  removeProfileAvatar: () => L.delete("/profile-avatar/", { skipErrorToast: true }).then(e => e.data),
  place: (e, t, n, o, r) => L.post(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/placements`,
    { inventoryItemId: t, ...n, ...(r ? { anchor: r } : {}) },
    { headers: { "Idempotency-Key": o } }
  ),
  breakWindow: (e, t, n) => L.post(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/window/break`,
    { inventoryItemId: t },
    { headers: { "Idempotency-Key": n } }
  ),
  erase: (e, t, n) => L.post(
    `/v1/aliceai/profiles/${encodeURIComponent(
      e
    )}/placements/${encodeURIComponent(t)}/erase`,
    {},
    { headers: { "Idempotency-Key": n } }
  ),
};

const RR = "qHnY";
const AR = "Cww9";
const xR = "uq4P";
const Ia = { layer: RR, stain: AR, arriving: xR };
function LR({ placements: e, anchorKind: t, anchorId: n, className: o = "" }) {
  const [r] = $(Date.now);
  const [s, a] = $([]);
  M(() => {
    const l = [];

    const u = (d) => {
      const d_detail = d.detail;
      const [f] = IR([d_detail], t, n);

      if (f) {
        a(h => h.some(g => g.id === f.id) ? h : [...h, f]);

        l.push(
          window.setTimeout(
            () => a(h => h.filter(g => g.id !== f.id)),
            Math.max(0, Date.parse(d_detail.expiresAt) - Date.now())
          )
        );
      }
    };

    window.addEventListener(xc, u);

    return () => {
      window.removeEventListener(xc, u);
      l.forEach(window.clearTimeout);
    };
  }, [t, n]);
  const c = [...e, ...s.filter(l => !e.some(u => u.id === l.id))];
  return c.length === 0
    ? null
    : i("div", {
        className: `${Ia.layer} ${o}`,
        "aria-hidden": "true",
        children: c.map(l => i(
          "img",
          {
            "data-alice-water-placement-id": l.id,
            className: `${Ia.stain} ${
              r - Date.parse(l.createdAt) < 3000/* 3e3 */ ? Ia.arriving : ""
            }`,
            src: uC(l.asset),
            alt: "",
            draggable: false,
            style: {
              left: `${l.x * 100}%`,
              top: `${l.y * 100}%`,
              width: `${l.size * 100}%`,
              zIndex: l.z,
              transform: `translate(-50%, -50%) rotate(${l.angle}deg)`,
            },
          },
          l.id
        )
        ),
      });
}
function PR() {
  return i("svg", {
    viewBox: "0 0 32 32",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      i("path", {
        fill: "#252747",
        d: "M6 3.5c6-.5 14-.5 20 .2 1.4.2 2.1 1 2.1 2.3v21c0 1.4-.8 2.2-2.2 2.4-6.8.8-14.2.7-20.8.2-1.4-.1-2.2-1-2.2-2.3V6c0-1.4 1-2.3 3.1-2.5Z",
      }),
      i("path", {
        fill: "#fffaf0",
        d: "M7 5.1c5.5-.4 12.1-.3 18.4.2v21.8c-6.2.5-12.3.5-18.4.1V5.1Z",
      }),
      i("path", {
        fill: "none",
        stroke: "#8564ba",
        "stroke-width": "1.6",
        "stroke-linecap": "round",
        d: "M10 11.2h12.8M10 15.2h12.8M10 19.2h12.8M10 23.2h12.8",
      }),
      i("path", {
        fill: "none",
        stroke: "#c65e85",
        "stroke-width": "1.6",
        d: "M11.6 5.4v21.5",
      }),
      i("path", {
        fill: "none",
        stroke: "#a84b70",
        "stroke-width": "2.4",
        "stroke-linecap": "round",
        d: "M6 4.2v24",
      }),
      i("path", {
        fill: "#8c53d4",
        d: "m25.5 1.2.6 2 .6-2 .6 2-.6.8-.6-.8-.6.8-.6-.8ZM28.5 5.5l.5 1.1 1.1.5-1.1.5-.5 1.1-.5-1.1-1.1-.5 1.1-.5Z",
      }),
    ],
  });
}
function MR() {
  return i("svg", {
    viewBox: "0 0 40 40",
    "aria-hidden": "true",
    focusable: "false",
    children: i("path", {
      d: "M20 5.5c-3.7 0-6.7 4.3-11.5 12.5C3.8 26 3.5 30.2 7 33c3.4 2.8 22.6 2.8 26 0 3.5-2.8 3.2-7-1.5-15C26.7 9.8 23.7 5.5 20 5.5Z",
    }),
  });
}
function xm({ className: e, disabled: t = false }) {
  const [n, o] = $(false);
  return i(ue, {
    children: [
      i("button", {
        type: "button",
        className: e,
        onClick: (r) => {
          r.stopPropagation();

          if (!t) {
            o(true);
          }
        },
        "aria-label": "Тетрадка: узнать о покупке",
        children: [i(MR, {}), "Тетрадка"],
      }),
      n &&
        i(Al, {
          productId: "post_notebook",
          icon: i(PR, {}),
          onClose: () => o(false),
        }),
    ],
  });
}

const OR = {
    WASTE_PAPER_POST_TOO_NEW: "Сдать можно только пост старше трёх месяцев",
    WASTE_PAPER_NOT_OWNER: "Сдать можно только свой пост",
    WASTE_PAPER_EVENT_ENDED: "Сбор макулатуры сейчас закрыт",
    WASTE_PAPER_CLOSED: "Сбор завершён: 10000 постов уже сдано",
    WASTE_PAPER_DAILY_LIMIT:
      "Сегодня уже сдано три поста — это дневной предел. Заходи завтра",
    EVENT_APPLICATIONS_DISABLED: "Сбор макулатуры сейчас закрыт",
    WASTE_PAPER_PAUSED: "Сбор макулатуры сейчас закрыт",
    WASTE_PAPER_POST_NOT_FOUND: "Пост уже недоступен",
  };

const Os = new Map();
const $a = new Set();
async function DR(e, t) {
  if ($a.has(e)) {
    return;
  }
  const n = Os.get(e) ?? crypto.randomUUID();
  Os.set(e, n);
  $a.add(e);
  try {
    await Am.recyclePost(e, n);
    Os.delete(e);
    t(e);
    Dt.success("Пост сдан и сразу учтён в сборе макулатуры");
  } catch (o) {
    const r = Ge(o) ? OR[o.code] : undefined;

    if (r) {
      Os.delete(e);
    }

    Dt.error(r ?? "Не получилось сдать пост. Попробуй ещё раз");
  } finally {
    $a.delete(e);
  }
}
const Lm = 0.5;
const UR = 250;
const FR = 1000/* 1e3 */;
const BR = 50;
const HR = [0, Lm, 1];
const lo = new Set();
const Js = new WeakMap();
const io = new Map();
const ao = new Map();
const bi = new Set();
const Ds = new Set();
let Ra = null;
let Vo = null;
function VR(e) {
  if (bi.size !== 0) {
    Ds.add(e);

    Ra === null &&
      (Ra = setTimeout(() => {
      (Ra = null);

      if (Ds.size === 0) {
        return;
      }

      const t = Array.from(Ds);
      Ds.clear();
      const n = t.length > 20 ? t.slice(0, 20) : t;
      for (const o of bi) {
        o(n);
      }
    }, BR));
  }
}
function WR() {
  return (Vo || (typeof IntersectionObserver === "undefined" ? null : ((Vo = new IntersectionObserver(
        (e) => {
          for (const t of e) {
            const n = Js.get(t.target);
            if (!n || n.length === 0) {
              continue;
            }
            const o = t.intersectionRatio >= Lm;
            for (const r of n) {
              if (o) {
                const s = ao.get(r);
                if (s !== undefined) {
                  clearTimeout(s);
                  ao.delete(r);
                  continue;
                }
                if (lo.has(r) || io.has(r)) {
                  continue;
                }
                const a = setTimeout(() => {
                  io.delete(r);
                  lo.add(r);
                  VR(r);
                }, UR);
                io.set(r, a);
              } else {
                const s = io.get(r);

                if (s !== undefined) {
                  clearTimeout(s);
                  io.delete(r);
                }

                if (!lo.has(r) || ao.has(r)) {
                  continue;
                }

                const a = setTimeout(() => {
                  ao.delete(r);
                  lo.delete(r);
                }, FR);
                ao.set(r, a);
              }
            }
          }
        },
        { threshold: HR }
      )), Vo)));
}

const Qr = {
    observe(e, t) {
      const n = WR();
      if (!n) {
        return;
      }
      const o = Array.isArray(t) ? t.filter(Boolean) : [t];

      if (o.length !== 0) {
        Js.set(e, o);
        n.observe(e);
      }
    },
    unobserve(e) {
      if (!Vo) {
        return;
      }
      const t = Js.get(e);
      Vo.unobserve(e);
      Js.delete(e);

      if (!!t) {
        for (const n of t) {
          const o = io.get(n);

          if (o !== undefined) {
            clearTimeout(o);
            io.delete(n);
          }

          const r = ao.get(n);

          if (r !== undefined) {
            clearTimeout(r);
            ao.delete(n);
          }

          lo.delete(n);
        }
      }
    },
    getSnapshot() {
      return Array.from(lo);
    },
    size() {
      return lo.size;
    },
    onAppear(e) {
      bi.add(e);

      return () => {
        bi.delete(e);
      };
    },
  };

const ff = ["salt", "water", "trap", "latin"];
function jR(e) {
  let t = 0;
  for (const n of e) {
    t = (t * 31 + n.charCodeAt(0)) >>> 0;
  }
  return ff[t % ff.length];
}

const zR = {
    salt: "Соль и огонь. Винчестеры бы одобрили",
    water: "Святая вода...",
    trap: "Ловушка захлопнулась. Призраку пора на выход",
    latin: "Exorcizamus te. Изыди, и без обид",
  };

const Zo = e => e.username ? `@${e.username}` : "кто-то";

const qR = ["calm", "angry", "rage", "taken"];
const GR = ["right", "left", "top", "bottom", "inside"];
const YR = ["cloud", "wisps", "swirl", "fog", "sparks"];

const Bo = e => e && typeof e == "object" && !Array.isArray(e) ? e : null;

const Lc = e => typeof e == "string" && Number.isFinite(Date.parse(e));

function KR(e) {
  if (!(
    !e ||
    typeof e.id != "string" ||
    !qR.includes(e.stage) ||
    !Lc(e.spawnedAt) ||
    !Lc(e.takenAt) ||
    !Array.isArray(e.holders)
  )) {
    return {
      ...e,
      mist: YR.includes(e.mist) ? e.mist : "cloud",
      edge: GR.includes(e.edge) ? e.edge : "top",
      threshold: Number(e.threshold) || 2,
      weakness: Math.max(0, Math.min(100, Number(e.weakness) || 0)),
      holders: e.holders.filter(pf),
      ...(Array.isArray(e.savers) ? { savers: e.savers.filter(pf) } : {}),
    };
  }
}
function XR(e) {
  if (!e || typeof e.night != "boolean") {
    return;
  }
  const t = e.revealed === true;
  return !(e.night || t) || typeof e.text != "string"
    ? { night: false, revealed: t }
    : {
        night: e.night,
        revealed: t,
        text: e.text,
        images: Array.isArray(e.images)
          ? e.images.filter(n => typeof n == "string")
          : [],
      };
}
function QR(e) {
  const t = Bo(e);
  const n = Bo(t?.posts);
  if (!t || !n || !Lc(t.serverNow)) {
    return null;
  }
  const o = {};
  for (const [r, s] of Object.entries(n)) {
    const a = Bo(s);
    const c = {};
    const l = KR(Bo(a?.possession));
    const u = XR(Bo(a?.werewolf));

    if (l) {
      (c.possession = l);
    }

    if (u) {
      (c.werewolf = u);
    }

    if ((c.possession || c.werewolf)) {
      (o[r] = c);
    }
  }
  return {
    serverNow: Date.parse(t.serverNow),
    night: t.night === true,
    posts: o,
  };
}
function ZR(e, t, n = 50) {
  const o = new Set(e);
  return [...new Set([...t.filter(r => o.has(r)), ...o])].slice(0, n);
}
function JR(e, t, n) {
  return e - (t + n) / 2;
}
function eA(e, t) {
  const n = Math.max(0, Math.ceil((Date.parse(e) - t) / 1000/* 1e3 */));
  return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, "0")}`;
}
function pf(e) {
  const t = Bo(e);
  return (
    !!t &&
    typeof t.userId == "string" &&
    (typeof t.username == "string" || t.username === null)
  );
}
function tA(e) {
  if (e.stage === "taken") {
    return { pose: "sit", paws: "", hops: false, pace: 1 };
  }

  if (e.heldByMe) {
    if (e.holders.length >= e.threshold - 1) {
      return { pose: "weak", paws: "weak", hops: false, pace: 1 };
    }

    return { pose: "strain", paws: "held", hops: false, pace: 1 };
  }

  if (e.stage === "rage") {
    return { pose: "rage", paws: "scratch", hops: true, pace: 0.55 };
  }

  if (e.stage === "angry") {
    return { pose: "angry", paws: "scratch", hops: true, pace: 0.75 };
  }

  return { pose: "idle", paws: "", hops: false, pace: 1 };
}
function nA(e, t, n) {
  return t === "taken" ? "top" : n ? "inside" : e === "bottom" ? "right" : e;
}
function oA(e, t = 4, n = Math.random) {
  const o = [...e];
  if (o.length < 4) {
    return e;
  }
  for (let r = 0; r < t; r++) {
    const s = 1 + Math.floor(n() * (o.length - 2));

    if (new RegExp("\\p{L}", "u").test(o[s]) &&
      new RegExp("\\p{L}", "u").test(o[s + 1] ?? "")) {
      ([o[s], o[s + 1]] = [o[s + 1], o[s]]);
    }
  }
  return o.join("");
}

const hf = [
    "Повторка",
    "Дежавю",
    "Снова здравствуйте",
    "Дубль, можно дарить",
    "Ну привет ещё раз",
    "Копия-копия",
  ];

const rA = (e, t) => `${e}. ${hf[t % hf.length]}`;

function Pm(e) {
  return e.isNew || e.count <= 1 ? `Конфета: ${e.name}` : rA(e.name, e.count);
}
function sA(e) {
  return e.length >= 2
    ? `Двойной улов: ${e[0].name} и ${e[1].name}`
    : e[0]
    ? Pm(e[0])
    : "Призрак упокоен";
}
function Mm(e, t) {
  const n = t - e;
  return n >= 2
    ? `Нужно ещё ${["", "", "двое", "трое"][n] ?? n}`
    : "Нужен ещё один";
}
function iA(e, t, n) {
  const o = t.filter(r => r.userId !== n).map(Zo);

  if (t.some(r => r.userId === n)) {
    o.unshift("ты");
  }

  return {
    verb: e === "freed" ? "Пост освобождён" : "Призрак изгнан",
    names:
      o.length > 1
        ? `${o.slice(0, -1).join(", ")} и ${o.at(-1)}`
        : o[0] ?? "",
  };
}
function aA(e, t) {
  return `имена спасителей видны ещё ${Math.max(
    1,
    Math.ceil((Date.parse(e) - t) / 60000/* 6e4 */)
  )} мин`;
}
function Om(e) {
  const [t] = e;
  return t
    ? e.length === 1
      ? `${Zo(t)} спас(ла) твой пост от призрака`
      : `${Zo(t)} и ещё ${e.length - 1} спасли твой пост`
    : "Твой пост спасли от призрака";
}
function cA(e = 0.25, t = 30000/* 3e4 */) {
  const n = new Map();
  return (o, r = Date.now(), s = Math.random()) => r - (n.get(o) ?? -Infinity) < t || s >= e ? false : (n.set(o, r), true);
}
function lA(e, t, n) {
  const o = new Date(n + 3600000/* 36e5 */).toISOString();
  return {
    resolved: e,
    resolvedAt: new Date(n).toISOString(),
    stampUntil: o,
    savers: t,
  };
}
const Dm = { offset: 0, night: false, posts: {} };

const wn = rt(() => Dm);

const Fn = () => Date.now() + wn.getState().offset;

const Ho = new Map();
let Ur = null;
function Um(e) {
  M(() => {
    if (e) {
      Ho.set(e, (Ho.get(e) ?? 0) + 1);
      Ur?.();

      return () => {
        const t = (Ho.get(e) ?? 1) - 1;

        if (t > 0) {
          Ho.set(e, t);
        } else {
          Ho.delete(e);
        }
      };
    }
  }, [e]);

  return wn(t => e ? t.posts[e] : undefined);
}
function Fr() {
  Ur?.();
}
const Fm = new Map();
function Bm(e, t) {
  Fm.set(e, Date.now());

  wn.setState((n) => {
    const o = "posts";
    const r = n.posts[e];
    return r?.possession
      ? {
          [o]: {
            ...n[o],
            [e]: { ...r, possession: { ...r.possession, ...t } },
          },
        }
      : n;
  });
}
function uA() {
  let e = true;
  let t = false;
  let n = false;
  let o;

  const r = async () => {
      if (!e || document.hidden || document.querySelector("[data-holding]")) {
        return;
      }
      if (t) {
        n = true;
        return;
      }
      const l = ZR(Ho.keys(), Qr.getSnapshot());
      if (l.length) {
        t = true;
        try {
          const u = Date.now();
          const d = QR(await At.feedState(l));
          if (!e || !d) {
            return;
          }
          const p = JR(d.serverNow, u, Date.now());
          wn.setState((f) => {
            const h = v => (Fm.get(v) ?? 0) > u;

            const g = Wk(f.posts, d.posts, l, h);
            const m = um(f.offset, p) ? f.offset : p;
            return g === f.posts && d.night === f.night && m === f.offset
              ? f
              : { offset: m, night: d.night, posts: g };
          });
        } catch {
        } finally {
          (t = false);

          if (n && e) {
            (n = false);
            s();
          }
        }
      }
    };

  const s = () => {
    clearTimeout(o);

    (o = setTimeout(() => {
        r();
      }, 300));
  };

  const a = () => {
    if (!document.hidden) {
      s();
    }
  };

  (Ur = s);
  s();
  const c = setInterval(() => {
    r();
  }, 20000/* 2e4 */);
  window.addEventListener("focus", a);
  document.addEventListener("visibilitychange", a);

  return () => {
    (e = false);

    if (Ur === s) {
      (Ur = null);
    }

    clearTimeout(o);
    clearInterval(c);
    window.removeEventListener("focus", a);
    document.removeEventListener("visibilitychange", a);
    wn.setState(Dm);
  };
}

const Qn = (e, t) => e + Math.random() * (t - e);

const dA = 24;
function fA() {
  return Array.from({ length: dA }, (e, t) => {
    const n = t % 4;
    return {
      ...(n < 2
        ? { left: `${Qn(0, 100)}%`, top: `${n ? Qn(85, 95) : Qn(2, 12)}%` }
        : {
            top: `${Qn(10, 90)}%`,
            left: `${n === 2 ? Qn(1, 6) : Qn(94, 99)}%`,
          }),
      animationDelay: `${-Qn(0, 2.8)}s`,
      "--n": String(t),
    };
  });
}
function mf(e, t) {
  let n = 2166136261;
  for (const r of `${e}:${t}`) {
    n = Math.imul(n ^ r.charCodeAt(0), 16777619) >>> 0;
  }
  const o = (r, s) => {
    (n = (Math.imul(n, 1664525) + 1013904223) >>> 0);
    return r + (n % s);
  };
  return {
    route: ["across", "return", "dip"][o(0, 3)],
    style: {
      "--bat-top": `${o(22, 47)}%`,
      "--bat-size": `${o(27, 18)}px`,
      "--bat-opacity": `${o(55, 26) / 100}`,
      "--bat-duration": `${o(110, 120) / 10}s`,
      "--bat-delay": `-${o(0, 200) / 10}s`,
      "--beat": `${o(18, 15) / 100}s`,
      "--bat-rise": `${o(12, 28)}px`,
      "--bat-fall": `${o(8, 22)}px`,
    },
  };
}
const pA = e => e.stopPropagation();
function ko({ panelRef: e, children: t, ...n }) {
  return i("div", { ref: e, ...n, onClick: pA, children: t });
}
const hA = "bOOM";
const mA = "KVgb";
const gA = "EQCk";
const _A = "J2Kk";
const vA = "lbJs";
const yA = "N0FF";
const wA = "w9Vc";
const bA = "MxtJ";
const EA = "K8Cr";
const SA = "l8Nr";
const kA = "Uj35";
const NA = "hHsX";
const CA = "w1pV";
const TA = "LjSz";
const IA = "JJXw";
const $A = "GvUE";
const RA = "p4wQ";
const AA = "g3Xe";
const xA = "WzPZ";
const LA = "pMvl";
const PA = "Y0CV";
const MA = "Md80";
const OA = "qvzJ";
const DA = "pDw2";
const UA = "F0cJ";
const FA = "TB2C";
const BA = "qsiP";
const HA = "aarj";
const VA = "DpOv";
const WA = "dwuO";
const jA = "bj6C";
const zA = "W0UQ";
const qA = "Ne5W";
const GA = "ygUi";
const YA = "e3Eo";
const KA = "PavK";
const XA = "zA6Q";
const QA = "Dipc";
const ZA = "YqQD";
const JA = "iN1q";
const ex = "XvUS";
const tx = "mPUp";
const nx = "iwIo";
const ox = "zI5v";
const rx = "uTvd";
const sx = "gY3h";
const ix = "Cpg3";
const ax = "FnAn";
const cx = "BF2j";
const lx = "bm5M";
const ux = "gWP8";
const dx = "eaTc";
const fx = "nqWc";
const px = "MEd0";
const hx = "MyiI";
const mx = "yMlI";
const gx = "WPyn";
const _x = "rNg4";
const vx = "bof5";
const yx = "dRdU";
const wx = "o2nU";
const bx = "QX6d";
const Ex = "hpFX";
const Sx = "IUEA";
const kx = "tMsV";
const Nx = "CVE0";
const Cx = "AaFG";
const Tx = "Mhkr";
const Ix = "MzB5";
const $x = "X6EV";
const Rx = "clfk";
const Ax = "GZ2E";
const xx = "nQy0";
const Lx = "kUl5";

const V = {
  levitate: hA,
  flicker: mA,
  cloud: gA,
  fadeIn: _A,
  twinkle: vA,
  layer: yA,
  lair: wA,
  bat: bA,
  swoop: EA,
  swoopBack: SA,
  swoopDip: kA,
  bob: NA,
  wingL: CA,
  wingR: TA,
  win: IA,
  paws: $A,
  questFrame: RA,
  clip: AA,
  peek: xA,
  ring: LA,
  grain: PA,
  chalk: MA,
  drop: OA,
  sigil: DA,
  latin: UA,
  latinSpin: FA,
  paw: BA,
  l: HA,
  r: VA,
  tremble: WA,
  scratch: jA,
  hole: zA,
  tip: qA,
  tipIn: GA,
  nudge: YA,
  nudgeR: KA,
  nudgeE: XA,
  nudgeW: QA,
  over: ZA,
  nudgeDown: JA,
  fx: ex,
  bar: tx,
  stamp: nx,
  ghostly: ox,
  icon: rx,
  count: sx,
  slots: ix,
  slot: ax,
  filled: cx,
  join: lx,
  empty: ux,
  timer: dx,
  note: fx,
  grow: px,
  takenInfo: hx,
  weak: mx,
  primary: gx,
  jar: _x,
  jarCandies: vx,
  jarCount: yx,
  dupe: wx,
  stampIn: bx,
  candles: Ex,
  flicker2: Sx,
  stampWho: kx,
  names: Nx,
  savers: Cx,
  saver: Tx,
  burn: Ix,
  thankLantern: $x,
  webs: Rx,
  webGrow: Ax,
  urgent: xx,
  rage: Lx,
};

function Px({ dupe: e }) {
  const t = () => {
    e.answer(false);
    Ae(`${mt.route}/jar`);
  };
  return i(ko, {
    className: V.dupe,
    children: [
      i("b", {
        children: ["Такая уже есть: ", e.drop.name, " ×", e.drop.count],
      }),
      i("div", {
        children: [
          i("button", {
            type: "button",
            onClick: () => e.answer(true),
            children: "В банку",
          }),
          i("button", {
            type: "button",
            className: V.ghostly,
            onClick: t,
            children: "Подарить другу",
          }),
          i("button", {
            type: "button",
            className: V.ghostly,
            onClick: t,
            children: "Разбить",
          }),
        ],
      }),
    ],
  });
}
const Mx = "icBe";
const Ox = "naNh";
const Dx = "ep07";
const Aa = { hint: Mx, multiline: Ox, arrow: Dx };
function mo({ text: e, children: t, className: n, multiline: o }) {
  const r = R(null);
  const [s, a] = $(null);

  const c = A(() => {
    if (!r.current) {
      return;
    }
    const d = r.current.getBoundingClientRect();
    a({ x: d.left + d.width / 2, y: d.top });
  }, []);

  const l = A(() => {
    a(null);
  }, []);

  const u = A(
    (d) => {
      d.stopPropagation();

      if (s) {
        l();
      } else {
        c();
      }
    },
    [s, c, l]
  );

  M(() => {
    if (!s) {
      return;
    }
    const d = (p) => {
      if (r.current && !r.current.contains(p.target)) {
        l();
      }
    };
    document.addEventListener("touchstart", d);
    document.addEventListener("mousedown", d);
    window.addEventListener("scroll", l, true);

    return () => {
      document.removeEventListener("touchstart", d);
      document.removeEventListener("mousedown", d);
      window.removeEventListener("scroll", l, true);
    };
  }, [s, l]);

  return i("span", {
    ref: r,
    className: n,
    onMouseEnter: c,
    onMouseLeave: l,
    onClick: u,
    children: [
      t,
      s &&
        ft(
          i("div", {
            className: `${Aa.hint} ${o ? Aa.multiline : ""}`,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, i("span", { className: Aa.arrow })],
          }),
          document.body
        ),
    ],
  });
}
function Ux(e) {
  if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.button) {
    e.preventDefault();
    Ae(e.currentTarget.getAttribute("href"));
  }
}
function Hm({ username: e, name: t, avatar: n, className: o }) {
  const r = i(gt, { src: n ?? null, alt: t, size: "xs" });
  return i(mo, {
    text: t,
    children: e
      ? i("a", {
          href: `/@${e}`,
          className: o,
          "aria-label": t,
          onClick: Ux,
          children: r,
        })
      : i("span", { className: o, role: "img", "aria-label": t, children: r }),
  });
}
function Fx({ holders: e, heldByMe: t, threshold: n }, o) {
  return e.length === 0
    ? "Одному не справиться"
    : t
    ? o
      ? Mm(e.length, n)
      : "Призрак всё ещё здесь"
    : null;
}
function Bx({
  possession: e,
  justHeld: t,
  timer: n,
  urgent: o,
  callFriends: r,
}) {
  const { holders: s, threshold: a } = e;
  const c = Fx(e, t);

  const l = Array.from({ length: Math.min(a, 5) }, (u, d) => {
    const s_d = s[d];
    return s_d
      ? i(
          Hm,
          {
            username: s_d.username,
            name: s_d.displayName || Zo(s_d),
            avatar: s_d.avatar,
            className: `${V.slot} ${V.filled}`,
          },
          s_d.userId
        )
      : i("span", { className: `${V.slot} ${V.empty}` }, d);
  });

  return i(ko, {
    className: V.bar,
    "data-haunt-bar": "",
    children: [
      i("img", { className: V.icon, src: `${F}/hand-grab.webp`, alt: "" }),
      i("b", {
        children: [
          "Изгоняют",
          " ",
          i("span", { className: V.count, children: [s.length, " из ", a] }),
        ],
      }),
      i("span", {
        className: V.slots,
        style: { "--fill": s.length / a },
        children: l,
      }),
      n &&
        i("span", {
          className: `${V.timer} ${o ? V.urgent : ""}`,
          children: n,
        }),
      c && i("span", { className: V.note, children: c }),
      i("span", { className: V.grow }),
      i("button", {
        type: "button",
        className: V.ghostly,
        onClick: r,
        children: "Позвать друзей",
      }),
    ],
  });
}
const Hx = "EXORCIZAMUS TE · OMNIS IMMUNDUS SPIRITUS · VADE RETRO · ";

const Vx = `M${Array.from({ length: 121 }, (e, t) => {
  const n = t / 120;
  const o = n * 6.4 * Math.PI - Math.PI / 2;
  const r = 2 + 34 * n;
  return `${(50 + r * Math.cos(o)).toFixed(1)} ${(
    50 +
    r * Math.sin(o)
  ).toFixed(1)}`;
}).join("L")}`;

const Wx = (e) => {
  for (const t of e?.querySelectorAll("circle, path") ?? []) {
    t.style.setProperty("--len", String(t.getTotalLength()));
  }
};

function jx({ tool: e, id: t }) {
  return e === "trap"
    ? i("svg", {
        ref: Wx,
        className: V.sigil,
        viewBox: "0 0 100 100",
        "aria-hidden": "true",
        children: [
          i("circle", { cx: "50", cy: "50", r: "47" }),
          i("circle", { cx: "50", cy: "50", r: "40" }),
          i("path", { d: Vx }),
        ],
      })
    : e === "latin"
    ? i("svg", {
        className: `${V.sigil} ${V.latin}`,
        viewBox: "0 0 100 100",
        "aria-hidden": "true",
        children: [
          i("path", {
            id: `hw-latin-${t}`,
            d: "M50 6a44 44 0 1 1 0 88a44 44 0 1 1 0-88",
            fill: "none",
          }),
          i("text", {
            children: i("textPath", { href: `#hw-latin-${t}`, children: Hx }),
          }),
        ],
      })
    : null;
}
function gf({ side: e }) {
  return i("svg", {
    className: `${V.paw} ${V[e]}`,
    viewBox: "0 0 18 16",
    "aria-hidden": "true",
    children: [
      i("path", {
        d: "M2 9C1 4 4 1 9 1s8 3 7 8v2c0 3-2 4-3.3 2.6-.7 1.9-3.2 1.9-3.7 0-.5 1.9-3 1.9-3.7 0C4 15 2 14 2 11Z",
        fill: "#f9f1e8",
        stroke: "#2b1a14",
        strokeWidth: "1.5",
        strokeLinejoin: "round",
      }),
      i("path", {
        d: "M6.6 10.4v2.4M11.4 10.4v2.4",
        stroke: "#2b1a14",
        strokeWidth: "1.2",
        strokeLinecap: "round",
      }),
    ],
  });
}
function zx({
  rig: e,
  id: t,
  stage: n,
  tool: o,
  hint: r,
  startHold: s,
  cancelHold: a,
}) {
  const { layer: c, peek: l, ring: u, paws: d, pointer: p } = e;
  const f = n === "taken";

  const h = (v) => {
    p.current = { x: v.clientX, y: v.clientY };
  };

  const g = (v) => {
    h(v);
    v.currentTarget.setPointerCapture?.(v.pointerId);
    s();
  };

  const m = (v) => {
    if ((v.key === "Enter" || v.key === " ") && !v.repeat) {
      v.preventDefault();
      s();
    }
  };

  return i(ko, {
    panelRef: c,
    className: V.layer,
    "data-tool": o,
    children: [
      i("span", { className: V.hole, "aria-hidden": "true" }),
      i("div", {
        className: V.win,
        children: i("div", {
          className: V.clip,
          children: i("button", {
            ref: l,
            type: "button",
            className: V.peek,
            "aria-label": f ? "Призрак захватил пост" : "Изгнать призрака",
            "aria-disabled": f || undefined,
            onPointerDown: g,
            onPointerMove: h,
            onPointerUp: a,
            onPointerCancel: a,
            onLostPointerCapture: a,
            onPointerEnter: r.onHover(true),
            onPointerLeave: r.onHover(false),
            onFocus: r.onHover(true),
            onBlur: r.onHover(false),
            onKeyDown: m,
            onContextMenu: v => v.preventDefault(),
            children: i("span", {
              ref: u,
              className: V.ring,
              children: i(jx, { tool: o, id: t }),
            }),
          }),
        }),
      }),
      i("div", {
        ref: d,
        className: V.paws,
        "aria-hidden": "true",
        children: [i(gf, { side: "l" }), i(gf, { side: "r" })],
      }),
      r.show &&
        i(
          "div",
          {
            className: V.tip,
            role: "tooltip",
            children: [
              i("img", { src: `${F}/hand-point.webp`, alt: "" }),
              r.text,
            ],
          },
          r.kind
        ),
    ],
  });
}
function wo(e) {
  try {
    return localStorage.getItem(e) === "1";
  } catch {
    return true;
  }
}
function Bn(e) {
  try {
    localStorage.setItem(e, "1");
  } catch {}
}

const Vm = e => e === "hold" ? "halloween-hold-hint" : `halloween-hint-${e}`;

const xa = e => wo(Vm(e));

const Ei = e => Bn(Vm(e));

const La = new Set();
const Wm = "halloween-hint-at-";
const qx = 120000/* 12e4 */;
function Gx(e, t = Date.now()) {
  try {
    return t - Number(sessionStorage.getItem(Wm + e) ?? 0) >= qx;
  } catch {
    return true;
  }
}
function Yx(e) {
  try {
    sessionStorage.setItem(Wm + e, String(Date.now()));
  } catch {}
}
const jm = e => e === "hold" || e === "friend";
function Kx(e, t) {
  return e.resolved
    ? t.stampLive
      ? "stamp"
      : null
    : t.gone || t.mineToFree
    ? null
    : e.stage === "taken"
    ? "taken"
    : e.heldByMe
    ? e.holders.length < e.threshold
      ? "friend"
      : null
    : "hold";
}
async function _f(e, t) {
  const n = o => e?.contentWindow?.postMessage(
    { type: "itd-event:auth", token: o },
    window.location.origin
  );
  try {
    n(t ? await Qo() : an());
  } catch {
    n(null);
  }
}
const Xx = matchMedia("(prefers-reduced-motion: reduce)");

const bt = () => Xx.matches;

const rn = "cubic-bezier(.34,1.56,.64,1)";

const Ce = (e, t, n = {}) => e.animate(t, {
  duration: 420,
  easing: "cubic-bezier(.2,.8,.2,1)",
  fill: "forwards",
  ...n,
  ...(bt() ? { duration: 1, delay: 0 } : {}),
}).finished;

const zi = e => new Promise(t => setTimeout(t, bt() ? 0 : e));

function Qx(e) {
  const t = R(null);
  const n = R(e);
  (n.current = e);

  M(() => {
    const o = t.current?.parentElement;

    if (o) {
      (o.dataset.quest = "");

      o.scrollIntoView({
        block: "nearest",
        behavior: bt() ? "auto" : "smooth",
      });
    }

    const r = (a) => {
      if (a.origin !== location.origin ||
      a.source !== t.current?.contentWindow) {
        return;
      }
      const a_data = a.data;

      switch (a_data?.type) {
      case "itd-event:auth-request":
        _f(t.current, a_data.expired === true);
        break;
      case "itd-event:quest-close":
        n.current(a_data.freed === true);
        break;
      case "itd-event:navigate":
        n.current(false);
        break;
      }
    };

    const s = ll(() => {
      _f(t.current, false);
    });

    window.addEventListener("message", r);

    return () => {
      s();
      window.removeEventListener("message", r);

      if (o) {
        delete o.dataset.quest;
      }
    };
  }, []);

  return t;
}
function Zx({ possessionId: e, onClose: t }) {
  const n = Qx(t);
  return i("iframe", {
    ref: n,
    className: V.questFrame,
    src: `${mt.framePath}/quest/${encodeURIComponent(e)}?embed=1`,
    title: "Освободить пост",
    sandbox: "allow-scripts allow-same-origin",
  });
}
function Jx({ possession: e }) {
  const t = lr();
  const n = t?.id ?? null;
  const o = e.savers ?? [];
  const r = iA(e.resolved, o, n);

  const s = [...o]
    .sort((a, c) => +(c.userId === n) - +(a.userId === n))
    .slice(0, 3)
    .map((a) => {
    const c = a.userId === n;

    const l = e.holders.find(u => u.userId === a.userId);

    return i(
      Hm,
      {
        username: a.username,
        name: c ? "Ты" : l?.displayName || Zo(a),
        avatar: c ? t?.avatar : l?.avatar,
        className: V.saver,
      },
      a.userId
    );
  });

  return i(ko, {
    className: V.stamp,
    children: [
      i("span", {
        className: V.candles,
        "aria-hidden": "true",
        "data-hint-at": "stamp",
        children: [
          i("img", { src: `${F}/candle.webp`, alt: "" }),
          i("img", { src: `${F}/candle.webp`, alt: "" }),
        ],
      }),
      i("span", {
        className: V.stampWho,
        children: [
          r.names ? `${r.verb}:` : r.verb,
          r.names &&
            i(ue, {
              children: [
                i("span", { className: V.savers, children: s }),
                i("span", { className: V.names, children: r.names }),
              ],
            }),
        ],
      }),
      i("small", { className: V.burn, children: aA(e.stampUntil, Fn()) }),
    ],
  });
}
const eL = () => location.host === "xn--d1ah4a.com" ? "https://итд.com" : location.origin;
function tL(e, t, n, o) {
  const r = e % 10;
  const s = e % 100;
  return r === 1 && s !== 11
    ? `${e} ${t}`
    : r >= 2 && r <= 4 && (s < 12 || s > 14)
    ? `${e} ${n}`
    : `${e} ${o}`;
}
const vf = e => ({
  label: "Скопировать ссылку",

  run: () => {
    navigator.clipboard?.writeText(`${eL()}${e}`).then(
      () => Le({ title: "Ссылка скопирована", sub: "Отправь её другу в чат" }),
      () => {}
    );
  }
});
function zm(e, t) {
  At.call(e).then(
    ({ called: n }) => Le(
      n
        ? {
            title: `Позвали ${tL(n, "друга", "друзей", "друзей")}`,
            sub: "Им придёт уведомление. Держите призрака вместе",
            actions: [vf(t)],
          }
        : {
            title: "Звать пока некого",
            sub: "Зов приходит тем, с кем вы подписаны друг на друга",
            actions: [vf(t)],
          }
    ),
    n => Le({
      title:
        n?.status && n.status < 500 && n.message
          ? n.message
          : "Не получилось позвать друзей. Попробуй ещё раз",
    })
  );
}
function nL({ weakness: e, mineToFree: t, callFriends: n, play: o }) {
  return i(ko, {
    className: `${V.bar} ${V.takenBar}`,
    children: [
      i("img", { className: V.icon, src: `${F}/ghost-orig.webp`, alt: "" }),
      i("span", {
        className: V.takenInfo,
        children: [
          i("span", {
            children: [
              i("b", { children: "Пост захвачен" }),
              ", призрак ослаб на ",
              Math.round(e),
              "%",
            ],
          }),
          i("span", {
            className: V.weak,
            children: i("i", { style: { width: `${e}%` } }),
          }),
        ],
      }),
      t
        ? i("button", {
            type: "button",
            className: V.primary,
            onClick: n,
            children: "Позвать друзей",
          })
        : i("button", {
            type: "button",
            className: V.primary,
            onClick: o,
            "data-hint-at": "taken",
            children: [
              i("img", { src: `${F}/lantern.webp`, alt: "" }),
              "Освободить",
            ],
          }),
    ],
  });
}
function oL({ savers: e, meId: t, thanked: n, thank: o }) {
  return i(ko, {
    className: V.bar,
    children: [
      i("b", { children: Om(e.filter(r => r.userId !== t)) }),
      i("span", { className: V.grow }),
      n
        ? i("span", { className: V.note, children: "Спасибо отправлено" })
        : i("button", {
            type: "button",
            onClick: r => o(r.currentTarget),
            children: "Сказать спасибо",
          }),
    ],
  });
}

const Si = {
    idle: {
      face: "smirk",
      amp: 6,
      speed: 2.4,
      shake: 0,
      sx: 1,
      sy: 1,
      tilt: 0,
      sway: 2.5,
      op: 1,
      armL: 0,
      armR: 0,
      armSwing: 5,
    },
    strain: {
      face: "strain",
      amp: 1.5,
      speed: 5,
      shake: 1.6,
      sx: 1.06,
      sy: 0.93,
      tilt: 0,
      sway: 0,
      op: 1,
      armL: 5,
      armR: 5,
      armSwing: 1,
    },
    weak: {
      face: "weak",
      amp: 3,
      speed: 1.3,
      shake: 0,
      sx: 0.97,
      sy: 0.97,
      tilt: -5,
      sway: 5,
      op: 0.72,
      armL: -5,
      armR: -5,
      armSwing: 1.5,
    },
    angry: {
      face: "smirk",
      amp: 4,
      speed: 3.6,
      shake: 0.5,
      sx: 1,
      sy: 1,
      tilt: 0,
      sway: 4,
      op: 1,
      armL: 0,
      armR: 0,
      armSwing: 0,
    },
    rage: {
      face: "smirk",
      amp: 3,
      speed: 6,
      shake: 1.3,
      sx: 1.03,
      sy: 0.98,
      tilt: 0,
      sway: 6,
      op: 1,
      armL: 0,
      armR: 0,
      armSwing: 0,
    },
    poof: {
      face: "surprised",
      amp: 2,
      speed: 3,
      shake: 0,
      sx: 1,
      sy: 1,
      tilt: 0,
      sway: 0,
      op: 1,
      armL: 6,
      armR: 6,
      armSwing: 0,
    },
    sit: {
      face: "smirk",
      amp: 1.2,
      speed: 1.6,
      shake: 0,
      sx: 1.03,
      sy: 0.97,
      tilt: 0,
      sway: 2,
      op: 1,
      armL: -2,
      armR: -2,
      armSwing: 3,
    },
  };

const rL = [
  "amp",
  "speed",
  "shake",
  "sx",
  "sy",
  "tilt",
  "sway",
  "op",
  "armL",
  "armR",
  "armSwing",
];

const Jo = new Map();
let ki = 0;
let Pc = 0;
const qm = new IntersectionObserver(
  (e) => {
    for (const t of e) {
      const n = Jo.get(t.target);

      if (n) {
        (n.visible = t.isIntersecting);
      }
    }
  },
  { rootMargin: "120px" }
);
function sL(e) {
  const t = document.createElement("div");
  (t.className = "hw-ghost");
  t.style.setProperty("--gw", e);
  (t.innerHTML = `<span class="hw-shadow"></span><div class="hw-rig"><img class="hw-body" src="${F}/g-body.webp" alt=""><img class="hw-arm hw-l" src="${F}/g-arm-l.webp" alt=""><img class="hw-arm hw-r" src="${F}/g-arm-r.webp" alt=""><img class="hw-face" src="${F}/g-face-smirk.webp" alt=""></div>`);
  const n = o => t.querySelector(o);

  Jo.set(t, {
    el: n(".hw-rig"),
    shadow: n(".hw-shadow"),
    face: n(".hw-face"),
    armL: n(".hw-arm.hw-l"),
    armR: n(".hw-arm.hw-r"),
    state: "idle",
    tgt: Si.idle,
    cur: { ...Si.idle },
    phase: Math.random() * 6,
    prevY: 0,
    blinkAt: performance.now() + 2000/* 2e3 */,
    visible: false,
  });

  qm.observe(t);

  if (!ki) {
    (Pc = performance.now());
    (ki = requestAnimationFrame(Gm));
  }

  return t;
}
function iL(e) {
  Jo.delete(e);
  qm.unobserve(e);
}
function dr(e, t) {
  const n = Jo.get(e);

  if (n && n.state !== t) {
    (n.state = t);
    (n.tgt = Si[t]);
    (n.face.src = `${F}/g-face-${Si[t].face}.webp`);
  }
}
function Gm(e) {
  if (!Jo.size) {
    ki = 0;
    return;
  }
  const t = Math.min(0.05, (e - Pc) / 1000/* 1e3 */);
  Pc = e;
  const n = bt() ? 0 : 1;
  for (const o of Jo.values()) {
    if (!o.visible || !o.el.isConnected) {
      continue;
    }
    const o_cur = o.cur;
    const s = 1 - Math.exp(-t * 6);
    for (const g of rL) {
      o_cur[g] += (o.tgt[g] - o_cur[g]) * s;
    }
    o.phase += t * o_cur.speed * n;
    const a = -Math.sin(o.phase) * o_cur.amp * n;
    const c = (a - o.prevY) / Math.max(t, 0.001);
    o.prevY = a;
    const l = Math.max(-0.035, Math.min(0.035, -c * 0.002));
    const u = o_cur.shake * n * (Math.sin(e * 0.055) + 0.6 * Math.sin(e * 0.089));
    const d = o_cur.tilt + Math.sin(o.phase * 0.5) * o_cur.sway * n;

    (o.el.style.transform = `translate3d(${u.toFixed(2)}px, ${a.toFixed(
      2
    )}px, 0) rotate(${d.toFixed(2)}deg) scale(${(o_cur.sx * (1 - l * 0.6)).toFixed(
      4
    )}, ${(o_cur.sy * (1 + l)).toFixed(4)})`);

    (o.el.style.opacity = o_cur.op.toFixed(3));
    const p = Math.sin(o.phase * 2 + 0.9) * o_cur.armSwing * n;

    const f = g => Math.max(-6, Math.min(6, g));

    (o.armL.style.transform = `rotate(${f(o_cur.armL + p).toFixed(2)}deg)`);
    (o.armR.style.transform = `rotate(${f(-o_cur.armR + p).toFixed(2)}deg)`);
    const h = Math.max(0, -a) / 14;
    (o.shadow.style.transform = `scale(${(1 - h * 0.25).toFixed(3)})`);
    (o.shadow.style.opacity = (1 - h * 0.4).toFixed(3));

    if (o.state === "idle" &&
      n &&
      e > o.blinkAt) {
      (o.face.src = `${F}/g-face-blink.webp`);

      setTimeout(() => {
        if (o.state === "idle") {
          (o.face.src = `${F}/g-face-smirk.webp`);
        }
      }, 130);

      (o.blinkAt = e + 2500 + Math.random() * 3000/* 3e3 */);
    }
  }
  ki = requestAnimationFrame(Gm);
}
const Ni = "translateY(95px)";

const aL = [
  { transform: "none" },
  { transform: "rotate(-14deg)", offset: 0.25 },
  { transform: "rotate(-14deg)", offset: 0.4 },
  { transform: "rotate(11deg)", offset: 0.7 },
  { transform: "none" },
];

const cL = [
  { transform: "none" },
  { transform: "translateY(13px)", offset: 0.3 },
  { transform: "translateY(13px)", offset: 0.6 },
  { transform: "translateY(-5px)", offset: 0.8 },
  { transform: "none" },
];

const Ym = () => matchMedia("(max-width: 1173px)").matches;

function Zr(e, t, n, o = {}) {
  const r = e.loop.current;

  (e.loop.current = e.peek.current.animate(t, {
    duration: bt() ? 1 : n,
    easing: "ease-in-out",
    fill: "forwards",
    ...o,
  }));

  r?.cancel();
  return e.loop.current.finished;
}
function Km(e, t) {
  const n = e.layer.current;
  if (!n) {
    return;
  }
  n.dataset.edge = t;
  const o =
    t === "inside" && n.parentElement?.querySelector("[data-haunt-bar]");

  if (o) {
    n.style.setProperty(
      "--hole-y",
      `${o.getBoundingClientRect().top - n.getBoundingClientRect().top}px`
    );
  }
}
function Ci(e, t) {
  const n = e.paws.current;
  return n
    ? t
      ? Ce(
          n,
          [
            { opacity: 0, transform: "translateY(-7px)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 240, easing: rn }
        )
      : Ce(n, [{ opacity: 1 }, { opacity: 0, transform: "translateY(-6px)" }], {
          duration: 200,
          easing: "ease",
        })
    : null;
}
function Ti(e) {
  const { stage: t, view: n } = e.live.current;

  if (e.ghost.current && !e.holding.current) {
    dr(e.ghost.current, n.pose);
  }

  if (e.layer.current) {
    (e.layer.current.dataset.stage = t);
    (e.layer.current.dataset.paws = n.paws);
  }

  const o = e.fx.current?.parentElement;

  if (o) {
    (o.dataset.haunt = t);
  }
}
async function lL(e, t) {
  const n = e.layer.current?.dataset.edge;

  const r = (Ym() ? ["top", "inside"] : ["right", "left", "top", "inside"]).filter(
    c => c !== n
  );

  const s = e.live.current.view.pace;
  Ci(e, false);

  await Zr(e, [{ transform: "none" }, { transform: Ni }], 380 * s, {
    easing: "ease-in",
  });

  if (t !== e.run.current) {
    return;
  }

  const a = r[Math.floor(Math.random() * r.length)];
  Km(e, a);
  await zi(a === "inside" ? 300 : 120);
  await Ci(e, true);

  await Zr(e, [{ transform: Ni }, { transform: "none" }], 600 * s, {
    easing: rn,
  });
}
function uL(e) {
  const { stage: t, view: n } = e.live.current;
  return (
    bt() ||
    e.holding.current ||
    n.paws === "held" ||
    n.paws === "weak" ||
    t === "taken"
  );
}
async function dL(e, t) {
  try {
    while (t === e.run.current) {
      if (uL(e)) {
        await new Promise(o => setTimeout(o, 3000/* 3e3 */));
        continue;
      }
      const { view: n } = e.live.current;
      await Zr(e, aL, 2600 * n.pace);

      if (n.hops) {
        await lL(e, t);
      } else {
        await Zr(e, cL, 2600);
      }
    }
  } catch {}
}
async function fL(e, t) {
  await Ci(e, true);

  await Zr(e, [{ transform: Ni }, { transform: "none" }], 900, {
    easing: rn,
  });

  if (t === e.run.current) {
    dL(e, t);
  }
}
function pL(e, t) {
  const n = tA(e);

  const o = {
    layer: R(null),
    paws: R(null),
    peek: R(null),
    ring: R(null),
    fx: R(null),
    mist: R(null),
    ghost: R(null),
    loop: R(null),
    run: R(0),
    holding: R(false),
    pointer: R(null),
    candy: R(null),
    live: R({ stage: e.stage, view: n }),
  };

  o.live.current = { stage: e.stage, view: n };
  const { stage: r } = e;
  const s = R(r);

  M(() => {
    const a = o.peek.current;
    if (t || !a) {
      return;
    }
    const c = sL("72px");
    a.prepend(c);
    (o.ghost.current = c);
    Km(o, nA(e.edge, r, Ym()));
    Ti(o);
    (a.style.transform = Ni);
    const l = ++o.run.current;

    zi(400)
      .then(() => {
        if (l === o.run.current) {
          return fL(o, l);
        }
      })
      .catch(() => {});

    return () => {
      o.run.current++;
      (o.holding.current = false);
      o.loop.current?.cancel();
      iL(c);
      (o.ghost.current = null);
    };
  }, [t]);

  M(() => {
    const a = o.fx.current?.parentElement;

    if (t && a) {
      delete a.dataset.haunt;
    }

    return () => {
      if (a) {
        delete a.dataset.haunt;
      }
    };
  }, [t]);

  M(() => {
    if (!t) {
      Ti(o);
    }
  }, [r, n.pose, n.paws, t]);

  M(() => {
    const s_current = s.current;
    (s.current = r);

    if (!(t || s_current === r || r !== "taken")) {
      ++o.run.current;
      Ci(o, false);
    }
  }, [r, t]);

  return o;
}
const hL = {
  hold: "Нажми на призрака и удерживай нажатие. Когда соберётся команда, он исчезнет",
  taken: "Пост захвачен. Жми «Освободить» и лови призрака фонарём",
  stamp: "Имена спасителей видны под постом в течение часа",
};
function mL(e, { holders: t, threshold: n }) {
  if (e !== "friend") {
    return hL[e];
  }
  const o = n - t.length > 1 ? "друзей" : "друга";
  return `${Mm(t.length, n)}, зови ${o}`;
}
const gL = 6000/* 6e3 */;
const Pa = "halloween-hint-shown";
function _L(e, t, n) {
  const [o, r] = $(false);
  const [s, a] = $(false);
  const c = R();
  const l = ls();

  const u = () => {
    clearTimeout(c.current);
    a(false);
  };

  M(() => {
    const p = (f) => {
      if (f.detail !== l) {
        u();
      }
    };
    window.addEventListener(Pa, p);

    return () => window.removeEventListener(Pa, p);
  }, [l]);
  const d = (p) => {
    window.dispatchEvent(new CustomEvent(Pa, { detail: l }));
    a(true);
    clearTimeout(c.current);

    (c.current = setTimeout(() => {
      a(false);

      if (p === "stamp") {
        Ei(p);
      }
    }, gL));
  };

  M(() => {
    if (!t || xa(t) || La.size || !Gx(t)) {
      return;
    }
    const p = setTimeout(() => {
      if (!La.size) {
        La.add(t);
        Yx(t);
        d(t);
      }
    }, 1400);
    return () => clearTimeout(p);
  }, [t]);

  M(() => {
    const p = n.fx.current?.parentElement;
    if (!t || !p) {
      return;
    }
    let f = false;
    const h = (g) => {
      if (!f && !xa(t) && !n.holding.current && (g.type !== "pointerdown" || g.pointerType !== "mouse") && (g.type !== "focusin" || g.target.matches(":focus-visible"))) {
        (f = true);
        d(t);
      }
    };
    p.addEventListener("pointerdown", h);
    p.addEventListener("focusin", h);

    return () => {
      p.removeEventListener("pointerdown", h);
      p.removeEventListener("focusin", h);
      u();
    };
  }, [t]);

  return {
    kind: t,
    text: t ? mL(t, e) : "",
    show: !!t && (s || (o && !xa(t))),
    onHover: p => () => r(p && !n.holding.current),
    dismiss: () => {
      r(false);
      u();
    },
  };
}
function Xm() {
  const e = document.createElement("label");
  (e.ariaHidden = "true");
  (e.style.display = "none");
  const t = document.createElement("input");
  (t.type = "checkbox");
  t.setAttribute("switch", "");
  e.append(t);
  document.head.append(e);
  e.click();
  e.remove();
}
function Qm(e) {
  try {
    if (navigator.vibrate) {
      navigator.vibrate(e);
    } else {
      Xm();
    }
  } catch {}
}
function vL(e) {
  if (!navigator.vibrate) {
    return Xm();
  }
  const t = [];
  for (let n = 0, o = 260; n < e; o = Math.max(60, o * 0.8)) {
    t.push(14, o);
    (n += 14 + o);
  }
  Qm(t);
}

const yL = () => Qm([30, 50, 18]);

const wL = () => navigator.vibrate?.(0);

function bL(e) {
  const t = e.getBoundingClientRect();
  for (let n = 0; n < 6; n++) {
    const o = document.createElement("img");
    (o.src = `${F}/lantern.webp`);
    (o.alt = "");
    (o.className = V.thankLantern);

    Object.assign(o.style, {
      left: `${t.left + t.width / 2}px`,
      top: `${t.top}px`,
      opacity: "0",
    });

    document.body.append(o);
    const r = (n - 2.5) * 22 + (Math.random() - 0.5) * 12;
    const s = -90 - Math.random() * 60;
    Ce(
      o,
      [
        { transform: "translate(-50%, 0) scale(.4)", opacity: 0 },
        {
          transform: `translate(calc(-50% + ${r / 2}px), ${s / 2}px) scale(1)`,
          opacity: 1,
          offset: 0.35,
        },
        {
          transform: `translate(calc(-50% + ${r}px), ${s}px) scale(.8)`,
          opacity: 0,
        },
      ],
      { duration: 1100 + n * 90, delay: n * 50, easing: "ease-out" }
    ).then(() => o.remove());
  }
}
function EL(e, t, n) {
  const o = e.getBoundingClientRect();
  const r = n.getBoundingClientRect();
  const s = document.createElement("i");
  (s.className = V.drop);

  Object.assign(s.style, {
    left: `${t.x - o.left}px`,
    top: `${t.y - o.top}px`,
  });

  e.append(s);
  const a = r.left + r.width * (0.3 + Math.random() * 0.4) - t.x;
  const c = r.top + r.height * (0.3 + Math.random() * 0.4) - t.y;
  Ce(
    s,
    [
      { transform: "none", opacity: 1 },
      {
        transform: `translate(${a / 2}px, ${Math.min(c, 0) / 2 - 24}px)`,
        opacity: 1,
        offset: 0.5,
      },
      { transform: `translate(${a}px, ${c}px) scale(.6)`, opacity: 0.2 },
    ],
    { duration: 420, easing: "ease-in" }
  ).then(() => s.remove());
}
function yf(e, t, n) {
  const o = e.getBoundingClientRect();
  const r = document.createElement("i");
  (r.className = n);

  Object.assign(r.style, {
    left: `${t.x - o.left + (Math.random() - 0.5) * 6}px`,
    top: `${t.y - o.top}px`,
  });

  e.append(r);

  Ce(
    r,
    [
      { transform: "none", opacity: 1 },
      {
        transform: `translate(${(Math.random() - 0.5) * 16}px, ${
          24 + Math.random() * 18
        }px)`,
        opacity: 0,
      },
    ],
    { duration: 480, easing: "ease-in" }
  ).then(() => r.remove());
}
function SL(e, t, n, o, r) {
  if (e === "salt" && t % 2 === 0) {
    yf(n, o, V.grain);
  } else if (e === "trap" && t % 3 === 0) {
    yf(n, o, `${V.grain} ${V.chalk}`);
  } else if (e === "water" && t % 5 === 0) {
    EL(n, o, r);
  }
}

const Wo = e => typeof e == "number" && Number.isFinite(e) ? e : 0;

const zt = e => typeof e == "string" ? e : "";

const qi = e => zt(e?.username);

const Ii = e => Zo({ username: qi(e.from) || null });

function Ma(e, t, n, o) {
  const r = e % 10;
  const s = e % 100;
  return r === 1 && s !== 11
    ? `${e} ${t}`
    : r >= 2 && r <= 4 && (s < 12 || s > 14)
    ? `${e} ${n}`
    : `${e} ${o}`;
}

const Ll = { label: "Открыть банку", run: () => Ae(`${mt.route}/jar`) };

const kL = { label: "Подарить другу", run: () => Ae(`${mt.route}/jar`) };

const NL = { label: "Что было ночью", run: () => Ae(`${mt.route}/notices`) };

const CL = { label: "Мой фонарь", run: () => Ae(`${mt.route}/pumpkin`) };

const Gi = (e, t) => ({
  label: "Открыть пост",
  run: () => Ae(`/@${e}/post/${t}`)
});

const Zm = "Уже в банке";

const TL = {
  toffee: "Ириску",
  "chocolate-bat": "Шоколадную мышь",
  "eye-lollipop": "Леденец-глаз",
  "wolf-fang": "Волчий клык",
  "sour-ghost": "Кислого призрака",
  "moon-lollipop": "Лунный леденец",
};

function IL(e) {
  if (!e || typeof e != "object") {
    return null;
  }
  const t = e;
  return typeof t.kind == "string" && typeof t.name == "string" ? t : null;
}
function $L(e) {
  const t = Wo(e.candies);
  const n = Wo(e.thanks);
  const o = Wo(e.gifts);
  const r = Wo(e.werewolves);

  const s = [
    t ? Ma(t, "конфета", "конфеты", "конфет") : "",
    n ? `${n} спасибо` : "",
    o ? Ma(o, "подарок", "подарка", "подарков") : "",
    r ? Ma(r, "оборотень", "оборотня", "оборотней") : "",
  ].filter(Boolean);

  return s.length
    ? {
        toast: {
          title: "Что было за ночь",
          sub: s.join(", "),
          img: `${F}/moon.webp`,
          actions: [NL],
        },
      }
    : null;
}
function RL(e) {
  const t = ye.getState().profile?.username;
  const n = zt(e.postId);

  const o = {
    label: "Позвать друзей",
    run: () => zm(zt(e.possessionId), `/@${t}/post/${n}`),
  };

  return {
    toast: {
      title: "Призрак захватил твой пост",
      sub: "Зови друзей: пусть жмут «Освободить» и ловят призрака фонарём",
      img: `${F}/ghost-orig.webp`,
      actions: t && n ? [Gi(t, n), o] : undefined,
    },
  };
}
function AL(e) {
  const t = zt(e.possessionId);
  const n = Array.isArray(e.savers) ? e.savers : [];
  function o() {
    At.thanks(t).then(
      () => Le({
        title: "Спасибо отправлено",
        sub: "Фонарь спасителей стал чуть ярче",
        img: `${F}/lantern.webp`,
      }),
      () => Le({
        title: "Спасибо не отправилось",
        sub: "Проверь интернет и нажми «Повторить»",
        actions: [{ label: "Повторить", run: o }],
      })
    );
  }
  const r = !!t && e.thanked !== true;
  const s = ye.getState().profile?.username;
  const a = zt(e.postId);

  const c = [
    ...(r ? [{ label: "Сказать спасибо", run: o }] : []),
    ...(s && a ? [Gi(s, a)] : []),
  ];

  return {
    toast: {
      title: Om(n),
      sub:
        e.thanked === true
          ? "Спасибо уже отправлено, фонарь спасителя стал ярче"
          : "Скажи спасибо, фонарь спасителя станет ярче",
      img: `${F}/lantern.webp`,
      actions: c.length ? c : undefined,
    },
  };
}
function xL(e) {
  const t = zt(e.kind);
  const n = zt(e.name);
  return !t || !n
    ? null
    : {
        toast: {
          title: `${Ii(e)} подарил(а) тебе ${TL[t] ?? n}`,
          sub: Zm,
          img: `${F}/${t}.webp`,
          actions: [Ll],
        },
      };
}
function wf(e) {
  const t = (Array.isArray(e.candies) ? e.candies : [])
      .map(IL)
      .filter(r => !!r);

  const n = t.some(r => r.isNew);

  let o = "Конфета не выпала. Лови следующего, повезёт";

  if (n) {
    (o = Zm);
  } else if (t.length) {
    (o = t.length > 1
      ? "Повторы можно подарить другу"
      : "Повтор можно подарить другу");
  }

  return {
    toast: {
      title: sA(t),
      sub: o,
      img: t[0] ? `${F}/${t[0].kind}.webp` : `${F}/puff.webp`,
      actions: n ? [Ll] : t.length ? [kL] : undefined,
    },
  };
}
function LL(e) {
  const t = qi(e.author);
  const n = zt(e.postId);
  return {
    toast: {
      title: e.taken
        ? `${Ii(e)} зовёт освободить пост`
        : `${Ii(e)} зовёт прогнать призрака`,
      sub: e.taken
        ? "Призрак захватил пост. Жми «Освободить» и лови его фонарём"
        : "Нажми на призрака и держи, пока он не ослабнет",
      img: `${F}/ghost-orig.webp`,
      actions: t && n ? [Gi(t, n)] : undefined,
    },
  };
}
const bf = {
  morning: $L,
  call: LL,
  taken: RL,
  saved: AL,
  gift: xL,
  exorcised: wf,
  freed: wf,
  thanks: (e) => {
    const t = qi(e.from);
    const n = zt(e.postId);
    return {
      toast: {
        title: "Тебе сказали спасибо",
        sub: `${Ii(e)}, за спасённый пост`,
        img: `${F}/lantern.webp`,
        actions: t && n ? [Gi(t, n)] : undefined,
      },
    };
  },
  lantern: e => ({
    toast: {
      title: "Тебе сказали спасибо",
      sub: `Фонарь горит ярче: уровень ${Wo(e.level)}`,
      img: `${F}/lantern.webp`,
      actions: [CL],
    }
  }),
};
function PL(e) {
  const t = e.payload ?? {};
  const n = Object.hasOwn(bf, e.kind) ? bf[e.kind] : undefined;
  return n ? n(t) : zt(t.text) ? { toast: { title: zt(t.text) } } : null;
}
function ML(e) {
  const t = e;
  return (
    (t?.status && t.status >= 400 && t.status < 500 && t.message) ||
    "Не получилось изгнать. Попробуй ещё раз"
  );
}
function Ef(e, t) {
  if (!wo(e)) {
    Bn(e);
    Le(t, 12000/* 12e3 */);
  }
}
const Sf = "Изгоняй призраков в ленте и собирай конфеты";
function OL(e, t, n) {
  let r = 0;
  let s = 0;
  const a = (c) => {
    const l = e.ghost.current;
    if (!e.holding.current) {
      e.ring.current?.style.setProperty("--p", "0");

      if (l) {
        (l.style.translate = "");
      }

      return;
    }
    s ||= c;
    const u = Math.min(100, ((c - s) / 2600) * 100);
    e.ring.current?.style.setProperty("--p", String(u));

    if (l &&
      !bt()) {
      (l.style.translate = `${(Math.sin(c / 28) * u) / 30}px ${
          (Math.cos(c / 37) * u) / 50
        }px`);
    }

    if (e.pointer.current &&
      e.fx.current &&
      l &&
      !bt()) {
      SL(t, r++, e.fx.current, e.pointer.current, l);
    }

    if (u < 100) {
      requestAnimationFrame(a);
      return;
    }

    if (l) {
      (l.style.translate = "");
    }

    yL();
    n();
  };
  vL(2600);
  requestAnimationFrame(a);
}
function DL(e, t, n, o, r) {
  const [s, a] = $(false);
  const [c, l] = $(false);
  const { holding: u, candy: d } = e;
  const p = R(null);
  M(() => {
    const p_current = p.current;

    if (r.gone && p_current !== null) {
      (p.current = null);

      Ef("halloween-first-banish", {
        title: "Первый призрак изгнан!",
        sub: p_current,
        img: `${F}/jar.webp`,
        actions: [Ll],
      });
    }
  }, [r.gone]);
  async function f() {
    a(true);
    try {
      const m = await At.hold(t.id);
      Ei("hold");

      if (m.holders.length >= 2) {
        Ei("friend");
      }

      (d.current = m.candy ?? null);

      const v = m.holders.map(y => ({
        userId: y.userId,
        username: y.username
      }));

      const _ = m.resolved ? lA(m.resolved, v, Fn()) : {};
      Bm(n, { holders: m.holders, threshold: m.threshold, heldByMe: true, ..._ });
      l(true);

      if (m.resolved) {
        (p.current = m.candy ? `Конфета уже летит в банку. ${Sf}` : Sf);
      } else if (m.holders.length < m.threshold) {
        Ef("halloween-first-hold", {
          title: "Ты ослабил призрака",
          sub: "Позови друзей на помощь. Когда призрак появится снова, нажмите на него и удерживайте нажатие. После изгнания участники получат конфеты",
          img: `${F}/ghost-orig.webp`,
          actions: [{ label: "Позвать друзей", run: r.callFriends }],
        });
      }
    } catch (m) {
      Le({ title: ML(m) });
      e.loop.current?.play();
      Fr();
    } finally {
      (u.current = false);
      delete e.layer.current?.dataset.holding;
      Fr();
      e.ring.current?.style.setProperty("--p", "0");
      a(false);
      Ti(e);
    }
  }
  function h() {
    const { heldByMe: m, resolved: v, stage: _ } = t;
    if (r.mine && !v && !r.gone) {
      Le(
        {
          key: "own-post",
          title: "Ты не можешь спасти свой пост сам. Зови друзей на помощь",
          actions: [{ label: "Позвать друзей", run: r.callFriends }],
        },
        8000/* 8e3 */
      );
      return;
    }

    if (!s && !u.current && !m && !v && _ !== "taken" && e.ghost.current) {
      (u.current = true);
      r.onStart();
      e.loop.current?.pause();
      dr(e.ghost.current, "strain");

      e.layer.current &&
        ((e.layer.current.dataset.paws = "held"),
        (e.layer.current.dataset.holding = ""));

      OL(e, o, () => {
        f();
      });
    }
  }
  function g() {
    if (u.current && !s) {
      wL();
      (u.current = false);
      delete e.layer.current?.dataset.holding;
      Fr();
      e.loop.current?.play();
      Ti(e);
    }
  }
  return { busy: s, justHeld: c, startHold: h, cancelHold: g };
}
function UL(e) {
  const t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  const n = [];
  for (let o = t.nextNode(); o; o = t.nextNode()) {
    if (o.data.trim().length >= 4) {
      n.push(o);
    }
  }
  return n;
}
function FL(e) {
  const t = UL(e);
  const n = t[Math.floor(Math.random() * t.length)];
  if (!n) {
    return null;
  }
  const n_data = n.data;
  const r = oA(n_data);
  (n.data = r);

  return () => {
    if (n.data === r) {
      (n.data = n_data);
    }
  };
}
function BL(e, t, n) {
  const { stage: o, resolved: r, takenAt: s } = e;
  const [a, c] = $("");
  const [l, u] = $(null);

  M(() => {
    if (o !== "rage" || r) {
      c("");
      u(null);
      return;
    }
    let d = false;
    const p = () => {
      const h = eA(s, Fn());
      const g = Date.parse(s) - Fn();
      c(`До захвата ${h}`);

      if (g <= 60000/* 6e4 */) {
        u(m => m ?? Math.min(60, 60 - g / 1000/* 1e3 */));
      }

      if (h === "0:00" && !d) {
        (d = true);
        Fr();
      }
    };
    p();
    const f = setInterval(p, 1000/* 1e3 */);
    return () => clearInterval(f);
  }, [o, r, s]);

  M(() => {
    const d = n.current?.parentElement?.querySelector("[data-haunt-text]");
    if (t || o !== "rage" || !d || bt()) {
      return;
    }
    let p = null;
    const f = setInterval(() => {
      if (p || Math.random() > 0.35) {
        return;
      }
      const h = FL(d);

      if (h) {
        (p = () => {
          h();
          (p = null);
        });

        setTimeout(() => p?.(), 160);
      }
    }, 250);
    return () => {
      clearInterval(f);
      p?.();
    };
  }, [o, t]);

  return { timer: a, webFrom: l };
}
async function Jm(e, t, n = 1.6) {
  const o = e.getBoundingClientRect();
  const r = t.getBoundingClientRect();
  const s = document.createElement("img");
  (s.src = `${F}/puff.webp`);
  (s.alt = "");
  const a = o.width * n;

  Object.assign(s.style, {
    position: "absolute",
    zIndex: "4",
    width: `${a}px`,
    left: `${o.left - r.left + o.width / 2 - a / 2}px`,
    top: `${o.top - r.top + o.height / 2 - a / 2}px`,
  });

  t.append(s);

  await Ce(
    s,
    [
      { transform: "scale(.2)", opacity: 0 },
      { transform: "scale(1.05)", opacity: 1, offset: 0.4 },
      { transform: "scale(1.3)", opacity: 0 },
    ],
    { duration: 900, easing: "ease-out" }
  );

  s.remove();
}
function eg(e, t, n, o) {
  const r = document.createElement("i");

  Object.assign(r.style, {
    position: "absolute",
    zIndex: "4",
    left: `${t}px`,
    top: `${n}px`,
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: "#ffc35a",
    boxShadow: "0 0 6px 1px #ff7a1a",
    opacity: "0",
  });

  e.append(r);

  Ce(
    r,
    [
      { transform: "none", opacity: 1 },
      {
        transform: `translate(${(Math.random() - 0.5) * 40}px, ${
          -50 - Math.random() * 50
        }px) scale(.3)`,
        opacity: 0,
      },
    ],
    { duration: 900 + Math.random() * 400, delay: o, easing: "ease-out" }
  ).then(() => r.remove());
}
function HL(e, t, n, o) {
  const r = document.createElement("i");

  Object.assign(r.style, {
    position: "absolute",
    zIndex: "4",
    left: `${t - 9}px`,
    top: `${n - 9}px`,
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    background:
      "radial-gradient(closest-side, rgba(255, 255, 255, .9), rgba(220, 235, 255, 0))",
    opacity: "0",
  });

  e.append(r);

  Ce(
    r,
    [
      { transform: "scale(.6)", opacity: 0.9 },
      {
        transform: `translate(${
          (Math.random() - 0.5) * 24
        }px, -60px) scale(2.2)`,
        opacity: 0,
      },
    ],
    { duration: 1100, delay: o, easing: "ease-out" }
  ).then(() => r.remove());
}
async function VL(e, t) {
  dr(e, "poof");
  const n = e.getBoundingClientRect();
  const o = t.getBoundingClientRect();
  const r = n.width * 1.4;
  const s = (r * 256) / 220;
  const a = n.left - o.left + n.width / 2;
  const c = n.bottom - o.top + n.height * 0.1;
  const l = document.createElement("img");
  (l.src = `${F}/fire.webp`);
  (l.alt = "");

  Object.assign(l.style, {
    width: `${r}px`,
    left: `${a - r / 2}px`,
    top: `${c - s}px`,
    zIndex: "4",
    transformOrigin: "50% 100%",
  });

  t.append(l);
  const u = bt()
    ? null
    : l.animate(
        [
          { scale: "1 1" },
          { scale: "1.05 .93" },
          { scale: ".96 1.06" },
          { scale: "1 1" },
        ],
        { duration: 300, iterations: Infinity, composite: "add" }
      );
  await Ce(
    l,
    [
      { transform: "scale(.2, 0)" },
      { transform: "scale(1, 1.15)", offset: 0.7 },
      { transform: "none" },
    ],
    { duration: 380, easing: "ease-out" }
  );
  for (let p = 0; p < 12; p++) {
    eg(
      t,
      a + (Math.random() - 0.5) * r * 0.7,
      c - s * (0.3 + Math.random() * 0.4),
      p * 60
    );
  }
  await Ce(
    e,
    [
      { transform: "none", filter: "none", opacity: 1 },
      {
        transform: "translateX(-3px) scale(1.04, .96)",
        filter: "sepia(1) saturate(3) hue-rotate(-25deg) brightness(.9)",
        opacity: 1,
        offset: 0.3,
      },
      {
        transform: "translate(3px, 20%) scale(.7, .6)",
        filter: "sepia(1) saturate(4) hue-rotate(-30deg) brightness(.45)",
        opacity: 0.8,
        offset: 0.65,
      },
      {
        transform: "translateY(55%) scale(.2, .1)",
        filter: "brightness(0)",
        opacity: 0,
      },
    ],
    { duration: 1600, easing: "ease-in" }
  );
  const d = Jm(l, t, 1);

  await Ce(
    l,
    [
      { transform: "none", opacity: 1 },
      { transform: "scale(.3, .1)", opacity: 0 },
    ],
    { duration: 420, easing: "ease-in" }
  );

  u?.cancel();
  l.remove();
  await d;
}
async function WL(e, t) {
  dr(e, "poof");
  const n = e.getBoundingClientRect();
  const o = t.getBoundingClientRect();
  const r = n.left - o.left + n.width / 2;
  const s = n.top - o.top + n.height / 2;
  for (let a = 0; a < 7; a++) {
    HL(
      t,
      r + (Math.random() - 0.5) * n.width * 0.8,
      s + (Math.random() - 0.2) * n.height * 0.5,
      a * 110
    );
  }

  await Ce(
    e,
    [
      { transform: "none", filter: "none", opacity: 1 },
      {
        transform: "translateX(-2px) scale(1.04, .96)",
        filter: "brightness(1.3) saturate(.4)",
        opacity: 1,
        offset: 0.25,
      },
      {
        transform: "translate(2px, -10%) scale(.95, 1.1)",
        filter: "brightness(1.8) saturate(0) blur(1px)",
        opacity: 0.7,
        offset: 0.6,
      },
      {
        transform: "translateY(-45%) scale(.7, 1.3)",
        filter: "brightness(2.2) saturate(0) blur(6px)",
        opacity: 0,
      },
    ],
    { duration: 1900, easing: "ease-in" }
  );

  await Jm(e, t, 1.2);
}
async function jL(e, t) {
  dr(e, "poof");
  const n = e.getBoundingClientRect();
  const o = t.getBoundingClientRect();
  const r = n.width * 1.6;
  const s = document.createElement("i");

  Object.assign(s.style, {
    position: "absolute",
    zIndex: "4",
    left: `${n.left - o.left + n.width / 2 - r / 2}px`,
    top: `${n.top - o.top + n.height / 2 - r / 2}px`,
    width: `${r}px`,
    height: `${r}px`,
    borderRadius: "50%",
    background:
      "radial-gradient(closest-side, rgba(255, 250, 235, .95), rgba(255, 214, 120, .5) 45%, rgba(255, 180, 80, 0))",
    opacity: "0",
  });

  t.append(s);

  Ce(
    s,
    [
      { transform: "scale(.3)", opacity: 0 },
      { transform: "scale(1)", opacity: 1, offset: 0.35 },
      { transform: "scale(1.3)", opacity: 0 },
    ],
    { duration: 900, easing: "ease-out" }
  ).then(() => s.remove());

  await Ce(
    e,
    [
      { transform: "none", opacity: 1 },
      {
        transform: "scale(1.08, .9) rotate(-6deg)",
        opacity: 1,
        offset: 0.25,
      },
      {
        transform: "translateY(8%) scale(.6) rotate(90deg)",
        opacity: 1,
        offset: 0.6,
      },
      { transform: "translateY(20%) scale(0) rotate(240deg)", opacity: 0 },
    ],
    { duration: 1500, easing: "cubic-bezier(.5, 0, .8, .4)" }
  );
}
async function zL(e, t) {
  dr(e, "poof");
  const n = e.getBoundingClientRect();
  const o = t.getBoundingClientRect();
  for (let r = 0; r < 10; r++) {
    eg(
      t,
      n.left - o.left + n.width * Math.random(),
      n.top - o.top + n.height * (0.3 + Math.random() * 0.6),
      r * 70
    );
  }
  await Ce(
    e,
    [
      { transform: "none", opacity: 1 },
      { transform: "rotate(180deg) scale(.9, 1.1)", opacity: 1, offset: 0.35 },
      {
        transform: "translateY(-30%) rotate(540deg) scale(.5, 1.5)",
        opacity: 0.8,
        offset: 0.7,
      },
      { transform: "translateY(-90%) rotate(900deg) scale(.1, 2)", opacity: 0 },
    ],
    { duration: 1800, easing: "ease-in" }
  );
}
function qL(e, t, n) {
  return { salt: VL, water: WL, trap: jL, latin: zL }[e](t, n);
}

const Oa = [
    [25, 77],
    [42, 79],
    [59, 79],
    [76, 77],
    [23, 64],
    [41, 65],
    [60, 65],
    [78, 64],
  ];

const kf = e => At.jar().then(
  t => (t.kinds ?? [])
    .filter(n => n.count > 0 && n.id !== e)
    .map(n => n.id),
  () => []
);

function Br(e, t) {
  const n = document.createElement("img");
  (n.src = e);
  (n.alt = "");
  return n;
}
function GL(e) {
  const t = document.createElement("div");
  const n = document.createElement("span");
  (t.className = V.jar);
  (n.className = V.jarCandies);
  const o = (r, s) => {
    const a = Br(`${F}/${r}.webp`);
    const [c, l] = Oa[s];

    Object.assign(a.style, {
      left: `${c}%`,
      top: `${l}%`,
      zIndex: s < 4 ? "2" : "1",
      rotate: `${((s % 3) - 1) * 10}deg`,
    });

    n.append(a);
    return a;
  };
  e.slice(0, Oa.length).forEach(o);
  t.append(Br(`${F}/jar.webp`), n, Br(`${F}/jar-front.webp`));

  return { jar: t, put: r => e.length < Oa.length ? o(r, e.length) : null };
}
function YL(e, t, n) {
  const o = document.createElement("span");
  (o.className = V.jarCount);
  (o.textContent = `×${e}`);
  Object.assign(o.style, { left: `${t}px`, top: `${n}px`, opacity: "0" });
  return o;
}
async function KL(e, t, n, o, r, s, a) {
  const c = Math.max(8, r - 210);
  const l = s - 4;
  const { jar: u, put: d } = GL(o);
  Object.assign(u.style, { left: `${c}px`, top: `${l}px` });
  const p = YL(n.count, c + 42, l + 92);
  e.append(u, p);

  await Ce(
    u,
    [
      { transform: "scale(0)", opacity: 0 },
      { transform: "none", opacity: 1 },
    ],
    { easing: rn, duration: 450 }
  );

  const f = c + 42 - r;
  const h = l + 30 - (s + 32);
  await Ce(
    t,
    [
      { transform: a, opacity: 1 },
      {
        transform: `translate(${f / 2}px, -110px) rotate(-180deg) scale(.8)`,
        opacity: 1,
        offset: 0.5,
      },
      {
        transform: `translate(${f}px, ${h}px) rotate(-340deg) scale(.45, .3)`,
        opacity: 0,
      },
    ],
    { duration: 650, easing: "cubic-bezier(.45,0,.55,1)" }
  );
  const g = n.isNew || n.count <= 1 ? d(n.kind) : null;

  if (g) {
    Ce(
      g,
      [
        { translate: "0 -30px", opacity: 0 },
        { translate: "0 0", opacity: 1 },
      ],
      { easing: rn, duration: 500 }
    );
  }

  Ce(
    p,
    [
      { opacity: 0, transform: "translate(-50%, 6px) scale(.6)" },
      { opacity: 1, transform: "translate(-50%, 0)" },
    ],
    { easing: rn, duration: 400 }
  );

  await Ce(
    u,
    [
      { transform: "none" },
      { transform: "scale(1.12, .86)", offset: 0.2 },
      { transform: "rotate(-8deg)", offset: 0.45 },
      { transform: "rotate(6deg)", offset: 0.7 },
      { transform: "none" },
    ],
    { duration: 650, easing: "ease-out" }
  );

  await zi(900);
  const m = (v, _) => Ce(v, [{ opacity: 1 }, { opacity: 0, transform: _ }], { duration: 400 });

  await Promise.all([
    m(u, "translateY(10px) scale(.8)"),
    m(p, "translate(-50%, -8px)"),
  ]);

  u.remove();
  p.remove();
}
async function XL(e, t, n) {
  const o = Br(`${F}/wrapper-closed.webp`);

  Object.assign(o.style, {
    width: "110px",
    left: `${t - 55}px`,
    top: `${n}px`,
  });

  e.append(o);

  await Ce(
    o,
    [
      { transform: "translateY(-40px) rotate(-20deg) scale(.4)", opacity: 0 },
      { transform: "none", opacity: 1 },
    ],
    { easing: rn, duration: 600 }
  );

  await Ce(
    o,
    [
      { transform: "rotate(0)" },
      { transform: "rotate(-8deg)" },
      { transform: "rotate(8deg)" },
      { transform: "rotate(0)" },
    ],
    { duration: 380 }
  );

  (o.src = `${F}/wrapper-open.webp`);

  Ce(o, [{ opacity: 1 }, { opacity: 0, transform: "scale(1.2)" }], {
    duration: 700,
    delay: 300,
  });

  return o;
}
async function QL(e, t, n, o) {
  const r = e.getBoundingClientRect().top;
  const s = t.isNew || t.count <= 1;
  const a = s ? kf(t.kind) : null;
  const c = e.clientWidth - 90;
  const l = Math.max(30, Math.min(e.clientHeight - 150, 90 - r));
  const u = await XL(e, c, l);
  const d = Br(`${F}/${t.kind}.webp`);

  Object.assign(d.style, {
    width: "84px",
    left: `${c - 42}px`,
    top: `${l - 10}px`,
    opacity: "0",
  });

  e.append(d);
  const p = "translateY(-36px) scale(1.1)";

  await Ce(
    d,
    [
      { transform: "translateY(10px) scale(.2)", opacity: 0 },
      { transform: p, opacity: 1 },
    ],
    { easing: rn, duration: 600 }
  );

  Le({ title: Pm(t), sub: o, img: `${F}/${t.kind}.webp` });
  let f = true;

  if (s) {
    await zi(700);
  } else {
    (f = await n());
  }

  if (f) {
    await KL(e, d, t, await (a ?? kf(t.kind)), c, l, p);
  } else {
    await Ce(
          d,
          [
            { opacity: 1 },
            { opacity: 0, transform: "translateY(-60px) scale(.6)" },
          ],
          { duration: 500 }
        );
  }

  u.remove();
  d.remove();
}
async function ZL(e, t, n, o) {
  try {
    e.loop.current?.commitStyles();
  } catch {}
  e.loop.current?.cancel();

  if (e.paws.current) {
    Ce(
      e.paws.current,
      [
        { opacity: 1 },
        { opacity: 0, transform: "translateY(-5px) scale(.6)" },
      ],
      { duration: 300 }
    );
  }

  if (e.ghost.current &&
    e.fx.current) {
    (await qL(t, e.ghost.current, e.fx.current).catch(() => {}));
  }

  if (e.mist.current) {
    Ce(e.mist.current, [{ opacity: 1 }, { opacity: 0 }], { duration: 600 });
  }

  const r = e.candy.current;
  (e.candy.current = null);

  if (r &&
    e.fx.current &&
    n === e.run.current) {
    (await QL(e.fx.current, r, () => o(r), zR[t]));
  }
}
function JL(e, t, n, o, r) {
  const { resolved: s } = t;
  const [a, c] = $(null);
  const l = R(s);
  const { run: u } = e;

  M(() => {
    const l_current = l.current;
    (l.current = s);

    if (o || l_current || !s) {
      return;
    }

    const p = ++u.current;
    ZL(
      e,
      n,
      p,
      h => new Promise(g => c({
        drop: h,
        answer: (m) => {
          c(null);
          g(m);
        },
      })
      )
    ).then(() => r(true));
  }, [s, o]);

  return a;
}
function eP(e, t) {
  const [n, o] = $(false);
  async function r(s) {
    try {
      await At.thanks(e);

      if (!bt()) {
        bL(s);
      }

      Le({
        title: "Спасибо отправлено",
        sub: "Фонарь спасителей стал чуть ярче",
        img: `${F}/lantern.webp`,
      });

      o(true);
      Bm(t, { canThank: false });
    } catch {
      Le({ title: "Не получилось. Попробуй ещё раз" });
    }
  }
  return { thanked: n, thank: r };
}
function Pl(e, t) {
  const [, n] = $(0);
  M(() => {
    if (!e) {
      return;
    }
    const o = setInterval(() => n(r => r + 1), t);
    return () => clearInterval(o);
  }, [e, t]);
}
function tP({ postId: e }) {
  const t = Ie(() => [mf(e, 0), mf(e, 1)], [e]);

  const n = o => i(
    "span",
    {
      className: V.bat,
      "data-flight": t[o].route,
      style: t[o].style,
      children: i("span", {
        children: [
          i("img", { src: `${F}/bat-wing-l.webp`, alt: "" }),
          i("img", { src: `${F}/bat-wing-r.webp`, alt: "" }),
          i("img", { src: `${F}/bat-body.webp`, alt: "" }),
        ],
      }),
    },
    o
  );

  return i("div", {
    className: V.lair,
    "aria-hidden": "true",
    children: [0, 1].map(n),
  });
}
const Da = 26;
const nP = 10;
function oP(e, t, n) {
  const o = t.getBoundingClientRect();
  const r = n.getBoundingClientRect();
  const s = r.left + r.width / 2 - o.left;
  const a = s > o.width / 2;
  (e.dataset.side = a ? "right" : "left");
  (e.style.left = a ? "" : `${s + Da}px`);
  (e.style.right = a ? `${o.width - s + Da}px` : "");
  (e.style.bottom = `${o.bottom - r.top + nP}px`);
  (e.style.maxWidth = `${Math.min(260, (a ? s : o.width - s) - Da - 8)}px`);
}
function rP({ hint: e }) {
  const t = R(null);
  const n = e.show && !jm(e.kind);

  ct(() => {
    const t_current = t.current;
    const r = t_current?.parentElement;
    const s = r?.querySelector(`[data-hint-at='${e.kind}']`);
    if (!t_current || !r || !s) {
      return;
    }
    const a = () => oP(t_current, r, s);
    a();
    addEventListener("resize", a);

    return () => removeEventListener("resize", a);
  }, [n, e.kind]);

  return n
    ? i("div", {
        ref: t,
        className: `${V.tip} ${V.over}`,
        role: "tooltip",
        children: [
          i("img", { src: `${F}/hand-point.webp`, alt: "" }),
          e.text,
        ],
      })
    : null;
}
function Nf({ postId: e, possession: t, authorUsername: n }) {
  const o = lr();
  const r = o?.id ?? null;
  const { id: s, stage: a, resolved: c, stampUntil: l } = t;
  const u = !!o && (n === o.username || n === r);
  const d = jR(s);

  const p = () => zm(s, `/@${n}/post/${e}`);

  const [f, h] = $(!!c);
  const [g, m] = $(false);

  const v = Ie(() => fA(), []);

  const _ = pL(t, f);
  const { fx: y, mist: w } = _;
  const N = JL(_, t, d, f, h);
  const { timer: k, webFrom: S } = BL(t, f, _.fx);
  Pl(!!c && !!l, 30000/* 3e4 */);
  const b = !!c && !!l && Date.parse(l) > Fn();
  const T = _L(t, Kx(t, { gone: f, stampLive: b, mineToFree: u }), _);

  const C = DL(_, t, e, d, {
    onStart: T.dismiss,
    callFriends: p,
    gone: f,
    mine: u,
  });

  const { thanked: E, thank: x } = eP(s, e);
  if (f && !b && !t.canThank && !E) {
    return null;
  }
  const I = (P) => {
    m(false);

    if (P) {
      Ei("taken");
    }

    Fr();
  };
  return i(ue, {
    children: [
      !f && a === "taken" && !c && i(tP, { postId: e }),
      !f &&
        a !== "taken" &&
        i("div", {
          ref: w,
          className: V.cloud,
          "aria-hidden": "true",
          children: v.map((P, j) => i("i", { style: P }, j)),
        }),
      !f &&
        i(zx, {
          rig: _,
          id: s,
          stage: a,
          tool: d,
          hint: jm(T.kind) ? T : { ...T, show: false },
          startHold: C.startHold,
          cancelHold: C.cancelHold,
        }),
      S !== null &&
        !f &&
        i("div", {
          className: V.webs,
          style: { animationDelay: `${-S}s` },
          "aria-hidden": "true",
          children: [i("i", {}), i("i", {})],
        }),
      i("div", { ref: y, className: V.fx, "aria-hidden": "true" }),
      N && i(Px, { dupe: N }),
      !c &&
        a !== "taken" &&
        i(Bx, {
          possession: t,
          justHeld: C.justHeld,
          timer: k,
          urgent: S !== null,
          callFriends: p,
        }),
      !c &&
        a === "taken" &&
        i(nL, {
          weakness: t.weakness,
          mineToFree: u,
          callFriends: p,
          play: () => m(true),
        }),
      g && i(Zx, { possessionId: s, onClose: I }),
      b && i(Jx, { possession: { ...t, resolved: c, stampUntil: l } }),
      i(rP, { hint: T }),
      (t.canThank || E) &&
        i(oL, { savers: t.savers ?? [], meId: r, thanked: E, thank: x }),
    ],
  });
}
const Cf = 86400000/* 864e5 */;
const sP = 10800000/* 108e5 */;

const tg = e => Cf - ((e + sP) % Cf);

function ng(e) {
  const t = Math.ceil(e / 60000/* 6e4 */);
  const n = Math.floor(t / 60);
  return [n && `${n} ч`, t % 60 && `${t % 60} мин`].filter(Boolean).join(" ");
}
function iP(e) {
  return e.night
    ? "🌙 Сейчас: ночь (будет ещё до 9:00). Лайкай посты-оборотни с ушками и получай ночные конфеты!"
    : e.moonDay
    ? "🌕 Полнолуние. Призраков вдвое больше. Итоги в полночь"
    : `🎃 До полуночи ${ng(
        e.msToMidnight
      )}. Изгоняй призраков в ленте и собирай конфеты`;
}
let go = null;
let Ml = false;
const aP = cA();
const Tf = new Map();
function og(e, t) {
  let n = Tf.get(t);

  if (!n) {
    (n = fetch(Tk(t))
        .then(o => o.ok ? o.arrayBuffer() : Promise.reject())
        .then(o => e.decodeAudioData(o))
        .catch(() => null));

    Tf.set(t, n);
  }

  return n;
}
function rg() {
  if (Ml && go) {
    for (const e of Object.keys(ig)) {
      og(go, e);
    }
  }
}
function sg() {
  try {
    (go ??= new AudioContext());
    go.resume();
  } catch {
    go = null;
  }
  rg();
}
function Mc(e) {
  (Ml = e);
  rg();
}
function If(e, t) {
  const n = e.createBuffer(1, Math.ceil(e.sampleRate * t), e.sampleRate);
  const o = n.getChannelData(0);
  for (let s = 0; s < o.length; s++) {
    o[s] = Math.random() * 2 - 1;
  }
  const r = e.createBufferSource();
  (r.buffer = n);
  return r;
}
function Us(e, t, n, o = 1) {
  const r = e.createBiquadFilter();
  (r.type = t);
  (r.frequency.value = n);
  (r.Q.value = o);
  return r;
}
const ig = {
  wings: (e, t, n) => {
    const o = If(e, 0.7);
    const r = Us(e, "bandpass", 1100, 0.8);
    const s = e.createGain();
    s.gain.setValueAtTime(0, n);
    for (let a = 0; a < 6; a++) {
      s.gain.linearRampToValueAtTime(0.5 - a * 0.06, n + a * 0.1 + 0.03);
      s.gain.linearRampToValueAtTime(0.02, n + a * 0.1 + 0.09);
    }
    o.connect(r).connect(s).connect(t);
    o.start(n);
    o.stop(n + 0.7);
  },
  feather: (e, t, n) => {
    const o = If(e, 0.5);
    const r = Us(e, "bandpass", 4200, 2.5);
    const s = e.createGain();
    s.gain.setValueAtTime(0, n);
    for (let a = 0; a < 4; a++) {
      const c = n + a * 0.11 + Math.random() * 0.03;
      s.gain.linearRampToValueAtTime(0.35, c + 0.02);
      s.gain.linearRampToValueAtTime(0, c + 0.08);
    }
    o.connect(r).connect(s).connect(t);
    o.start(n);
    o.stop(n + 0.5);
  },
  door: (e, t, n) => {
    const o = e.createOscillator();
    const r = Us(e, "bandpass", 700, 9);
    const s = e.createGain();
    (o.type = "sawtooth");
    o.frequency.setValueAtTime(18, n);
    o.frequency.linearRampToValueAtTime(42, n + 0.6);
    o.frequency.linearRampToValueAtTime(26, n + 1.2);
    r.frequency.setValueAtTime(620, n);
    r.frequency.linearRampToValueAtTime(900, n + 1.2);
    s.gain.setValueAtTime(0, n);
    s.gain.linearRampToValueAtTime(0.6, n + 0.1);
    s.gain.setValueAtTime(0.6, n + 1);
    s.gain.linearRampToValueAtTime(0, n + 1.3);
    o.connect(r).connect(s).connect(t);
    o.start(n);
    o.stop(n + 1.3);
  },
  howl: (e, t, n) => {
    const o = e.createOscillator();
    const r = e.createOscillator();
    const s = e.createGain();
    const a = Us(e, "lowpass", 1400);
    const c = e.createGain();
    (o.type = "triangle");
    o.frequency.setValueAtTime(280, n);
    o.frequency.exponentialRampToValueAtTime(620, n + 0.7);
    o.frequency.exponentialRampToValueAtTime(430, n + 2.2);
    (r.frequency.value = 5.5);
    (s.gain.value = 9);
    r.connect(s).connect(o.frequency);
    c.gain.setValueAtTime(0, n);
    c.gain.linearRampToValueAtTime(0.35, n + 0.4);
    c.gain.setValueAtTime(0.35, n + 1.6);
    c.gain.linearRampToValueAtTime(0, n + 2.3);
    o.connect(a).connect(c).connect(t);
    o.start(n);
    r.start(n);
    o.stop(n + 2.3);
    r.stop(n + 2.3);
  },
  candy: (e, t, n) => {
    for (const [o, r] of [
      [0, 1320],
      [0.09, 1760],
    ]) {
      const s = e.createOscillator();
      const a = e.createGain();
      (s.frequency.value = r);
      a.gain.setValueAtTime(0.3, n + o);
      a.gain.exponentialRampToValueAtTime(0.001, n + o + 0.25);
      s.connect(a).connect(t);
      s.start(n + o);
      s.stop(n + o + 0.25);
    }
  },
};
function gs(e, t = false) {
  if (!Ml || !go || (!t && !aP(e))) {
    return;
  }
  const n = go;

  if (n.state === "suspended") {
    n.resume();
  }

  og(n, e).then((o) => {
    try {
      const r = n.createGain();
      (r.gain.value = 0.5);
      r.connect(n.destination);
      const s = n.currentTime + 0.02;
      if (!o) {
        return ig[e](n, r, s);
      }
      const a = n.createBufferSource();
      (a.buffer = o);
      a.connect(r);
      a.start(s);
    } catch {}
  });
}
const cP = "YURz";
const lP = "zOUE";
const uP = "olwO";
const dP = "t4BG";
const fP = "vwVx";
const pP = "Z9aR";
const hP = "G43A";
const mP = "Y4GS";
const gP = "VgaQ";
const _P = "TOWV";
const vP = "PmMB";
const yP = "QP6d";
const wP = "Dn4g";
const bP = "DWZk";
const EP = "S2pD";
const SP = "Sm63";
const kP = "aq3n";
const NP = "s8s7";
const CP = "RVVt";
const TP = "T5uL";
const IP = "CCTl";
const $P = "FVXN";
const RP = "qvyO";
const AP = "sL6d";
const xP = "CQ4g";
const LP = "XZKn";
const PP = "JeFO";
const MP = "qiUU";
const OP = "F0tb";
const DP = "Wx3r";
const UP = "o73T";
const FP = "KYKb";
const BP = "MLsp";
const HP = "f31j";
const VP = "THPD";
const WP = "Qozt";
const jP = "BqC8";
const zP = "l5GY";
const qP = "cY8Q";
const GP = "KN40";
const YP = "kjzN";

const te = {
  moon: cP,
  moonLabel: lP,
  moonWrap: uP,
  help: dP,
  dot: fP,
  compose: pP,
  nightEditor: hP,
  when: mP,
  nightText: gP,
  wolf: _P,
  ear: vP,
  l: yP,
  r: wP,
  badge: bP,
  chip: EP,
  flip: SP,
  ears: kP,
  helpDialog: NP,
  helpBody: CP,
  helpClose: TP,
  stage: IP,
  skyMoon: $P,
  miniCard: RP,
  miniFace: AP,
  day: xP,
  night: LP,
  miniBody: PP,
  miniHead: MP,
  miniAvatar: OP,
  miniActions: DP,
  miniEar: UP,
  miniLiked: FP,
  miniViews: BP,
  miniBadge: HP,
  miniCandy: VP,
  miniClock: WP,
  helpText: jP,
  helpNav: zP,
  helpDots: qP,
  helpBack: GP,
  helpOk: YP,
};

const Oc = { on: false, night: false, text: "", images: [], uploading: false };

const $f = e => e.on && (!e.text.trim() || e.uploading);

const te_compose = te.compose;
function XP(e) {
  return e.text.trim() || e.images.length || e.uploading
    ? { ...e, night: false }
    : { ...Oc };
}
function QP(e, t) {
  return t
    ? "Вернуться к дневной версии"
    : e.on
    ? "Ночная версия"
    : "Пост-оборотень: ночная версия поста";
}
async function ZP(e, t) {
  try {
    await At.werewolf({
      postId: e,
      nightText: t.text.trim(),
      nightImages: t.images,
    });

    Le({
      title: "Пост стал оборотнем",
      sub: "В полночь перевернётся. Ночная сторона видна до 9 утра",
      img: `${F}/full-moon.webp`,
    });
  } catch (n) {
    Le({
      title: "Пост опубликован, но оборотнем не стал",
      sub: n?.message || undefined,
    });
  }
}
function ag(e) {
  At.react(e).then(
    (t) => {
      if (t.candy) {
        gs("candy", true);

        Le({
          title: `Ночная конфета: ${t.candy.name}`,
          sub: t.candy.count > 1 ? `В банке ${t.candy.count}` : undefined,
          img: `${F}/${t.candy.kind}.webp`,
        });
      }
    },
    () => {}
  );
}
const cg = new Set();

const JP = e => cg.delete(e);

function lg(e, t, n = false) {
  const o = t?.werewolf;

  if (o && !o.night) {
    cg.add(e);
  }

  return o && (o.night || (n && o.revealed)) && o.text !== undefined ? o : null;
}

const eM = e => `через ${ng(tg(e))}`;

const tM = "nH8s";
const nM = "qKxW";
const oM = "gzVE";
const Fs = { burst: tM, fly: nM, bat: oM };
const rM = "JYQK";
const sM = "GlIf";
const iM = "UCa3";
const aM = "cCZf";
const cM = "Y84K";
const lM = "v5T8";
const uM = "saGa";
const dM = "zlLT";
const fM = "GF7j";
const pM = "kYFH";
const hM = "TGDe";
const mM = "TDa6";
const gM = "f0KR";
const _M = "KUSo";
const vM = "JdyU";

const Ve = {
  sky: rM,
  back: sM,
  flight: iM,
  bat: aM,
  hit: cM,
  caught: lM,
  mini: uM,
  shoo: dM,
  spark: fM,
  flip: pM,
  burst: hM,
  hover: mM,
  eclipse: gM,
  flee: _M,
  entry: vM,
};

const yM = "wLJG";
const wM = "aTXl";
const bM = "XcZ3";
const EM = "erWn";
const SM = "ZMar";
const kM = "SxfY";
const NM = "e9GR";
const CM = "Qeq4";

const gn = {
  thanks: yM,
  lamp: wM,
  text: bM,
  level: EM,
  dots: SM,
  lit: kM,
  moonlight: NM,
  moon: CM,
};

const Y = (e, t) => e + Math.random() * (t - e);

const Rf = [
  "кыш!",
  "ай, за что",
  "я тут вообще-то летаю",
  "пи-пи-пи",
  "ладно-ладно, улетаю",
];

const Qt = e => `${e}px`;

const ei = (e, t = 0, n = 0) => ({
  x: Qt(e.x + t),
  y: Qt(e.y + n)
});

const Ua = e => () => {
  for (const t of e) {
    t.remove();
  }
};

function ti(e, t, n, o = () => e.remove()) {
  e.setAttribute("class", t);
  e.setAttribute("aria-hidden", "true");
  for (const [r, s] of Object.entries(n)) {
    e.style.setProperty(`--${r}`, s);
  }
  e.addEventListener("animationend", o);
  document.body.append(e);
  return e;
}
const ni = [
  e => {
    e.classList.add(Ve.flip);
    return () => {};
  },
  (e, t) => {
    e.classList.add(Ve.burst);
    const n = Math.random() < 0.5 ? 5 : 6;
    return Ua(
      Array.from({ length: n }, (o, r) => {
        const s = (r / (n - 1) - 0.5) * 2.4;
        const a = Y(70, 110);
        return ti(e.cloneNode(true), `${Ve.bat} ${Ve.mini}`, {
          ...ei(t),
          size: Qt(t.size * 0.45),
          dx: Qt(Math.cos(s) * a * t.dir),
          dy: Qt(Math.sin(s) * a),
        });
      })
    );
  },
  (e, t) => {
    e.classList.add(Ve.hover);
    const n = document.createElement("span");
    (n.textContent = Rf[Math.floor(Math.random() * Rf.length)]);
    return Ua([ti(n, Ve.shoo, ei(t, 0, -t.size / 2))]);
  },
  (e, t) => {
    e.classList.add(Ve.hover);

    return Ua(
      Array.from({ length: 6 + Math.floor(Math.random() * 3) }, () => ti(document.createElement("i"), Ve.spark, {
        ...ei(t, Y(-0.4, 0.4) * t.size),
        dx: Qt(Y(-24, 24)),
        dy: Qt(Y(50, 90)),
        delay: `${Y(0, 0.3)}s`,
      })
      )
    );
  },
  (e, t) => {
    const n = document.querySelector(`.${gn.moon}`)?.getBoundingClientRect();

    if (n) {
      e.style.setProperty("--mx", Qt(n.x + n.width / 2 - t.x));
      e.style.setProperty("--my", Qt(n.y + n.height / 2 - t.y));
    }

    e.classList.add(Ve.eclipse);
    return () => {};
  },
];
let Fa = Math.floor(Math.random() * ni.length);
let Af = false;
let xf = 0;
function TM(e, t, n) {
  const o = e.getBoundingClientRect();
  const r = { x: o.x + o.width / 2, y: o.y + o.height / 2, size: t, dir: n };
  const s = e.cloneNode(true);
  (e.style.visibility = "hidden");
  s.removeAttribute("role");
  s.removeAttribute("aria-label");

  ti(
    s,
    `${Ve.bat} ${Ve.caught}`,
    {
      ...ei(r),
      dir: String(n),
      flee: Qt(n > 0 ? innerWidth - r.x + 60 : -r.x - 60),
    },
    () => {
      if (!s.classList.contains(Ve.flee)) {
        s.classList.add(Ve.flee);
        return;
      }
      s.remove();
      a();
    }
  );

  (Fa = (Fa + 1 + Math.floor(Math.random() * (ni.length - 1))) % ni.length);
  const a = ni[Fa](s, r);

  if (Date.now() - xf >= 2000/* 2e3 */) {
    (xf = Date.now());
    gs("wings", true);
  }

  if (!Af) {
    (Af = true);

    Le({
      title: "Поймал мышь)",
      sub: "В полнолуние они тут хозяйничают. Пугай сколько хочешь, конфет за это не дают",
      img: `${F}/bat.webp`,
    });
  }
}
const IM = 4;

const _t = rt(() => ({
  thanks: null,
  moonDay: false,
  blackout: null,
  batCall: null
}));

function $M(e) {
  _t.setState({ thanks: e });
}

const ug = e => _t.setState({ moonDay: e });

const RM = () => _t.setState({ blackout: Date.now() });

const AM = () => _t.setState({ batCall: Date.now() });

const xM = () => _t.setState({ blackout: null });

const LM = () => Le({
  title: "ПОЛНОЛУНИЕ",
  img: `${F}/moon.webp`,
  sub: "Призраков вдвое больше. В полночь подведём итоги",
  actions: [
    { label: "Как идёт мой Хеллоуин", run: () => Ae(`${mt.route}/finale`) },
    { label: "Позже", run: () => {} },
  ],
});

const Lf = () => _t.setState({ thanks: null });

const PM = () => _t.setState({ thanks: null, moonDay: false, blackout: null, batCall: null });

function Hn(e) {
  return !!e && e.visible && e.phase === "active" && e.actionsEnabled === true;
}

const Ol =
    "M12 11 11 10Q9.5 8 8 8.5 7 6 5 6.5 4 4 1 3 6 2 10.5 5.5L11 3 12 4.5 13 3 13.5 5.5Q18 2 23 3 20 4 19 6.5 17 6 16 8.5 14.5 8 13 10Z";

const Dl =
  "M12 11 11 9.5Q9 10.5 8 12.5 6.5 11.5 5 13 4 10.5 2 9 6 6 10.5 5.5L11 3 12 4.5 13 3 13.5 5.5Q18 6 22 9 20 10.5 19 13 17.5 11.5 16 12.5 15 10.5 13 9.5Z";

function MM(e = false) {
  return {
    id: Date.now() + Math.random(),
    back: e || Math.random() < 0.5,
    top: e ? Y(6, 12) : Y(12, 50),
    rise: e ? Y(10, 25) : Y(8, 20) * (Math.random() < 0.5 ? -1 : 1),
    time: Y(3.5, 5),
    bats: Array.from({ length: Math.round(e ? Y(4, 6) : Y(2, 4)) }, (t, n) => ({
      size: e ? Y(38, 52) : Y(24, 34),
      x: -n * Y(34, 52),
      y: Y(-18, 18),
      phase: -Y(0, 0.8),
      flap: Y(0.18, 0.26)
    })),
  };
}
const Pf = "halloween-bat-burst";
function OM() {
  return Array.from({ length: 16 }, (t, n) => {
    const o = ((n + Y(-0.35, 0.35)) / 16) * Math.PI * 2;
    const r = Y(65, 85);
    return {
      id: n,
      style: {
        "--dx": `${Math.cos(o) * r}vmax`,
        "--dy": `${Math.sin(o) * r}vmax`,
        "--size": `${Y(30, 54)}px`,
        "--delay": `${Y(0, 0.25)}s`,
        "--time": `${Y(1.1, 1.6)}s`,
        "--flap": `${Y(0.12, 0.18)}s`,
        "--phase": `${-Y(0, 0.4)}s`,
      },
    };
  });
}
function DM() {
  const [e, t] = $(() => {
    try {
      if (sessionStorage.getItem(Pf)) {
        return null;
      }
      sessionStorage.setItem(Pf, "1");
    } catch {
      return null;
    }
    return matchMedia("(prefers-reduced-motion: reduce)").matches ? null : OM();
  });

  M(() => {
    if (!e) {
      return;
    }
    gs("wings", true);
    const n = setTimeout(() => t(null), 2200);
    return () => clearTimeout(n);
  }, [e]);

  return e
    ? i("div", {
        className: `${Ve.sky} ${Ve.entry}`,
        "aria-hidden": "true",
        children: e.map(n => i(
          "svg",
          {
            className: Ve.bat,
            viewBox: "0 0 24 16",
            style: n.style,
            children: [i("path", { d: Ol }), i("path", { d: Dl })],
          },
          n.id
        )
        ),
      })
    : null;
}
function UM() {
  const e = Hn(Ke(c => c.event) ?? undefined);

  const t = _t(c => c.moonDay);

  const [n, o] = $([]);
  const r = t;

  const s = _t(c => c.batCall);

  const a = (c = false) => o(l => [...l, MM(c)]);

  M(() => {
    if (s) {
      a(true);
    }
  }, [s]);

  M(() => {
    if (!e || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    let c;

    const l = (d = (r ? Y(25, 45) : Y(150, 240)) * 1000/* 1e3 */) => {
      clearTimeout(c);

      if (!document.hidden) {
        (c = setTimeout(() => {
          a();
          l();
        }, d));
      }
    };

    const u = () => document.hidden ? clearTimeout(c) : l();

    l();
    document.addEventListener("visibilitychange", u);

    return () => {
      clearTimeout(c);
      document.removeEventListener("visibilitychange", u);
      o([]);
    };
  }, [e, r]);

  return e
    ? i(ue, {
        children: [
          i(DM, {}),
          n.map(c => i(
            "div",
            {
              className: `${Ve.sky} ${c.back ? Ve.back : ""}`,
              "aria-hidden": !r,
              children: i("div", {
                className: Ve.flight,
                style: {
                  "--top": `${c.top}vh`,
                  "--rise": `${c.rise}vh`,
                  "--time": `${c.time}s`,
                },
                onAnimationEnd: l => l.target === l.currentTarget &&
                o(u => u.filter(d => d !== c)),
                children: c.bats.map(l => i(
                  "svg",
                  {
                    className: r ? `${Ve.bat} ${Ve.hit}` : Ve.bat,
                    viewBox: "0 0 24 16",
                    role: r ? "button" : undefined,
                    "aria-label": r ? "Летучая мышь" : undefined,
                    onPointerDown: r
                      ? u => TM(u.currentTarget, l.size, c.back ? -1 : 1)
                      : undefined,
                    style: {
                      "--size": `${l.size}px`,
                      "--x": `${l.x}px`,
                      "--y": `${l.y}px`,
                      "--phase": `${l.phase}s`,
                      "--flap": `${l.flap}s`,
                    },
                    children: [
                      i("path", { d: Ol }),
                      i("path", { d: Dl }),
                    ],
                  },
                  l.x
                )
                ),
              }),
            },
            c.id
          )
          ),
        ],
      })
    : null;
}
const FM =
  "M12 9.2 13.6 5.4 14.5 9.4Q18.4 9.2 22.5 5.8 20.8 9.6 21.5 13.6 19.2 11.4 17.3 13.8 15.2 13.4 14.5 16.8 12.9 16 12 18.6 11.1 16 9.5 16.8 8.8 13.4 6.7 13.8 4.8 11.4 2.5 13.6 3.2 9.6 1.5 5.8 5.6 9.2 9.5 9.4L10.4 5.4Z";
function dg({ size: e, filled: t }) {
  return i("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    "data-icon": "halloween-like",
    "aria-hidden": "true",
    fill: t ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: i("path", { d: FM }),
  });
}
const Tn = (e, t) => e + Math.random() * (t - e);
function BM() {
  return Array.from({ length: Math.round(Tn(5, 8)) }, () => {
    const e = Tn(-165, -15) * (Math.PI / 180);
    const t = Tn(60, 140);
    const n = Math.round(Tn(550, 850));
    return {
      size: Math.round(Tn(14, 24)),
      style: {
        "--dx": `${Math.cos(e) * t}px`,
        "--dy": `${Math.sin(e) * t}px`,
        "--r": `${Tn(-35, 35)}deg`,
        "--flap": `${Tn(0.09, 0.15)}s`,
        "--ms": `${n}ms`,
        "--delay": `${Math.round(Tn(0, 90))}ms`,
      },
    };
  });
}
function HM({ origin: e, onDone: t }) {
  const [n] = $(BM);
  const o = R(n.length);
  return ft(
    i("span", {
      className: Fs.burst,
      style: { left: e.x, top: e.y },
      "aria-hidden": "true",
      onAnimationEnd: (r) => {
        if (r.target.classList.contains(Fs.fly)) {
          (o.current -= 1);
          o.current === 0 && t();
        }
      },
      children: n.map(({ size: r, style: s }, a) => i(
        "span",
        {
          className: Fs.fly,
          style: s,
          children: i("svg", {
            className: Fs.bat,
            width: r,
            height: r * (16 / 24),
            viewBox: "0 0 24 16",
            children: [i("path", { d: Ol }), i("path", { d: Dl })],
          }),
        },
        a
      )
      ),
    }),
    document.body
  );
}
function Mf({ className: e, badge: t, text: n, liked: o }) {
  return i("div", {
    className: `${te.miniFace} ${e}`,
    children: [
      i("i", { className: te.miniAvatar, children: "🎃" }),
      i("div", {
        className: te.miniBody,
        children: [
          i("div", {
            className: te.miniHead,
            children: [
              i("b", { children: "Ночной Чечик" }),
              i("span", { children: "сейчас" }),
            ],
          }),
          t &&
            i("span", {
              className: te.miniBadge,
              children: [
                i("img", { src: `${F}/ear-l.webp`, alt: "" }),
                i("img", { src: `${F}/ear-r.webp`, alt: "" }),
                t,
              ],
            }),
          i("p", { children: n }),
          i("div", {
            className: te.miniActions,
            children: [
              i("span", {
                className: o ? te.miniLiked : undefined,
                children: [i(dg, { size: 17, filled: o }), o ? 13 : 12],
              }),
              i("span", { children: [i(fl, { size: 17 }), "4"] }),
              i("span", { children: [i(Bi, { size: 17 }), "1"] }),
              i("span", {
                className: te.miniViews,
                children: [i(Qh, { size: 17 }), "87"],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function VM({ scene: e }) {
  const [t, n] = $(e !== "write");

  M(() => {
    if (e !== "flip") {
      return n(e === "like");
    }
    n(false);
    const o = setTimeout(() => n(true), 700);
    return () => clearTimeout(o);
  }, [e]);

  return i("div", {
    className: te.stage,
    "data-scene": e,
    "data-night": t || undefined,
    "aria-hidden": "true",
    children: [
      i("span", { className: te.miniClock, children: t ? "00:00" : "23:59" }),
      i("img", { className: te.skyMoon, src: `${F}/moon.webp`, alt: "" }),
      i("div", {
        className: te.miniCard,
        children: [
          i("img", {
            className: `${te.miniEar} ${te.l}`,
            src: `${F}/ear-l.webp`,
            alt: "",
          }),
          i("img", {
            className: `${te.miniEar} ${te.r}`,
            src: `${F}/ear-r.webp`,
            alt: "",
          }),
          i(Mf, {
            className: te.day,
            badge: "",
            text: "Ну и погодка сегодня, конечно",
            liked: false,
          }),
          i(Mf, {
            className: te.night,
            badge: "Ночная сторона до 9:00",
            text: "А ночью я оборотень, р-р-р",
            liked: e === "like",
          }),
        ],
      }),
      e === "like" &&
        i("img", {
          className: te.miniCandy,
          src: `${F}/wolf-fang.webp`,
          alt: "",
        }),
    ],
  });
}
function Ul({ composing: e = false }) {
  const [t, n] = $(false);
  const [o, r] = $(0);
  const s = ls();

  const a = [
    {
      scene: "write",
      title: "Две версии одного поста",
      text: e
        ? "Напиши обычный пост, затем нажми луну и добавь ночную версию. В ней могут быть свой текст и картинки."
        : "У этого поста есть обычная и ночная версии. До полуночи остальные видят только обычную.",
    },
    {
      scene: "flip",
      title: "В полночь переворачивается",
      text: "С 00:00 до 9 утра все видят ночную версию. Потом её можно глянуть и днём, кнопкой «Перевернуть».",
    },
    {
      scene: "like",
      title: "Ночные конфеты за лайки",
      text: "Лайкни чужого оборотня ночью и лови ночную конфету. До трёх за ночь, за свой пост не дают.",
    },
  ];

  const a_o = a[o];
  const l = o === a.length - 1;

  const u = d => d.closest("dialog")?.close();

  return i(ue, {
    children: [
      i("button", {
        type: "button",
        className: te.help,
        "aria-haspopup": "dialog",
        onClick: () => {
          r(0);
          n(true);
        },
        children: "что это?",
      }),
      t &&
        ft(
          i("dialog", {
            ref: (d) => {
              if (d && !d.open) {
                d.showModal();
              }
            },
            className: te.helpDialog,
            "aria-modal": "true",
            "aria-labelledby": s,
            onClose: () => n(false),
            onClick: d => d.target === d.currentTarget && d.currentTarget.close(),
            onKeyDown: (d) => {
              if (d.key === "Escape") {
                d.stopPropagation();
              }

              if (d.key === "ArrowRight" && !l) {
                r(o + 1);
              }

              if (d.key === "ArrowLeft" && o) {
                r(o - 1);
              }
            },
            children: i("div", {
              className: te.helpBody,
              children: [
                i("button", {
                  type: "button",
                  className: te.helpClose,
                  "aria-label": "Закрыть",
                  onClick: d => u(d.currentTarget),
                  children: "×",
                }),
                i(VM, { scene: a_o.scene }),
                i(
                  "div",
                  {
                    className: te.helpText,
                    children: [
                      i("h2", { id: s, children: a_o.title }),
                      i("p", { children: a_o.text }),
                    ],
                  },
                  o
                ),
                i("div", {
                  className: te.helpNav,
                  children: [
                    i("span", {
                      className: te.helpDots,
                      children: a.map((d, p) => i(
                        "button",
                        {
                          type: "button",
                          "aria-label": `Шаг ${p + 1}`,
                          "aria-current": p === o ? "step" : undefined,
                          onClick: () => r(p),
                        },
                        d.scene
                      )
                      ),
                    }),
                    o > 0 &&
                      i("button", {
                        type: "button",
                        className: te.helpBack,
                        onClick: () => r(o - 1),
                        children: "Назад",
                      }),
                    i("button", {
                      type: "button",
                      className: te.helpOk,
                      autoFocus: true,
                      onClick: d => l ? u(d.currentTarget) : r(o + 1),
                      children: l ? "Понятно" : "Дальше",
                    }),
                  ],
                }),
              ],
            }),
          }),
          document.body
        ),
    ],
  });
}
function WM({ wolf: e, own: t, flipped: n, onFlip: o }) {
  const r = !e.night && e.revealed && e.text !== undefined;
  const s = !e.night && !r;
  Pl(s && t, 30000/* 3e4 */);

  return s && !t
    ? null
    : i(ko, {
        className: te.badge,
        children: [
          i(mo, {
            multiline: true,
            className: te.chip,
            text: e.night
              ? "Это ночная версия поста. В 9 утра вернётся обычная"
              : r
              ? "Ночная версия уже открыта. Жми «Перевернуть» и смотри, что автор прятал"
              : "Это видишь только ты. Остальные узнают в полночь",
            children: [
              i("span", {
                className: te.ears,
                "aria-hidden": "true",
                children: [
                  i("img", { src: `${F}/ear-l.webp`, alt: "" }),
                  i("img", { src: `${F}/ear-r.webp`, alt: "" }),
                ],
              }),
              e.night
                ? "Ночная сторона до 9:00"
                : r
                ? "Оборотень"
                : `Твой оборотень, обернётся ${eM(Fn())}`,
            ],
          }),
          r &&
            i("button", {
              type: "button",
              className: te.flip,
              onClick: () => o(!n),
              children: n ? "Вернуть" : "Перевернуть",
            }),
          i(Ul, {}),
        ],
      });
}
const jM = e => [
  { transform: `perspective(900px) rotateY(${e ? -90 : 90}deg)` },
  { transform: "none" },
];
function Of({ postId: e, night: t }) {
  const n = R(null);
  const o = R(null);

  ct(() => {
    const r = n.current?.parentElement;
    const o_current = o.current;
    o.current = { postId: e, night: t };
    const a = o_current?.postId === e && o_current.night !== t;
    const c = t && JP(e);
    if (!r || (!a && !c) || bt()) {
      return;
    }
    const l = r.animate(jM(t), { duration: 420, easing: rn, fill: "none" });
    return () => l.cancel();
  }, [e, t]);

  return i("span", {
    ref: n,
    className: t ? te.wolf : undefined,
    hidden: !t,
    "aria-hidden": "true",
    children:
      t &&
      i(ue, {
        children: [
          i("img", {
            className: `${te.ear} ${te.l}`,
            src: `${F}/ear-l.webp`,
            alt: "",
          }),
          i("img", {
            className: `${te.ear} ${te.r}`,
            src: `${F}/ear-r.webp`,
            alt: "",
          }),
        ],
      }),
  });
}
const zM = "T1G7";
const qM = "Z22T";
const GM = "Viga";
const YM = "WL1N";
const KM = "pKQe";
const XM = "cNUM";
const QM = "XSff";
const ZM = "cbup";
const JM = "t6aO";
const eO = "IwhS";

const kt = {
  header: zM,
  headerMain: qM,
  headerAccessory: GM,
  hasAccessory: YM,
  authorInfo: KM,
  moreDropdown: XM,
  pinnedBadge: QM,
  authorLink: ZM,
  time: JM,
  edited: eO,
};

function tO({ size: e = 16 }) {
  return i("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      i("path", { d: "M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" }),
      i("path", { d: "M6 8V5h12v3M8 12h8M8 16h5M12 8v12" }),
    ],
  });
}
const nO = 2160 * 60 * 60 * 1000/* 1e3 */;

const oO = e => Date.now() - new Date(e).getTime() >= nO;

function rO({
  accessory: e,
  editLocked: t = false,
  author: n,
  createdAt: o,
  editedAt: r,
  postId: s,
  showAvatar: a = true,
  isOnOwnProfile: c = false,
  isPinned: l = false,
  onReport: u,
  onEdit: d,
  onDelete: p,
  onPin: f,
  onCopyLink: h,
  onWastePaper: g,
}) {
  const m = Bh(o);
  const v = bl(n.id);

  const _ = ye(T => T.profile?.id);

  const y = n.id === _;
  const w = 2880 * 60 * 1000/* 1e3 */;
  const N = y && !t && Date.now() - new Date(o).getTime() < w;
  const k = ur().status === "allowed";
  const S = !!g && y && k && oO(o);

  const b = Ie(() => {
    const T = [];

    T.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: i(Hh, { size: 16 }),
      onClick: () => h?.(s),
    });

    if (N) {
      T.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Wh, { size: 16 }),
        onClick: () => d?.(s),
      });
    }

    if (c) {
      T.push({
        id: "pin",
        label: l ? "Открепить" : "Закрепить",
        icon: i(Sd, { size: 16 }),
        onClick: () => f?.(s),
      });
    }

    if (S) {
      T.push({
        id: "waste-paper",
        label: "Сдать в макулатуру",
        icon: i(tO, { size: 16 }),
        onClick: () => g?.(s),
      });
    }

    if ((y || c)) {
      T.push({
        id: "delete",
        label: "Удалить",
        icon: i(Xh, { size: 16 }),
        danger: true,
        onClick: () => p?.(s),
      });
    }

    if (!y) {
      T.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(zh, { size: 16 }),
        danger: true,
        onClick: () => u?.(s),
      });
    }

    return T;
  }, [y, N, S, c, l, s, d, p, f, u, h, g]);

  return i("header", {
    className: kt.header,
    children: [
      l &&
        i("div", {
          className: kt.pinnedBadge,
          children: [
            i(Sd, { size: 14 }),
            i("span", { children: "Закреплённый пост" }),
          ],
        }),
      i("div", {
        className: `${kt.headerMain} ${e ? kt.hasAccessory : ""}`,
        children: [
          a &&
            i("a", {
              href: `/@${n.username}`,
              children: i(gt, {
                username: n.username,
                src: n.avatar,
                baseAvatar: n.baseAvatar,
                alt: n.displayName,
                size: "sm",
                online: n.online,
                halloween: n.halloween,
              }),
            }),
          i("div", {
            className: kt.authorInfo,
            children: [
              i("a", {
                href: `/@${n.username}`,
                className: kt.authorLink,
                children: i(fs, {
                  userId: n.id,
                  halloween: n.halloween,
                  name: n.displayName,
                  owner: n,
                  verified: n.isVerified,
                  hasNuksta: n.hasNuksta,
                  pin: n.pin,
                  size: "sm",
                  trailing: v
                    ? i("time", {
                        dateTime: o,
                        className: kt.time,
                        "data-post-time": true,
                        children: [
                          m,
                          r &&
                            i(mo, {
                              text: new Date(r).toLocaleString("ru-RU"),
                              children: i("span", {
                                className: kt.edited,
                                children: " (ред.)",
                              }),
                            }),
                        ],
                      })
                    : undefined,
                }),
              }),
              !v &&
                i("time", {
                  dateTime: o,
                  className: kt.time,
                  "data-post-time": true,
                  children: [
                    m,
                    r &&
                      i(mo, {
                        text: new Date(r).toLocaleString("ru-RU"),
                        children: i("span", {
                          className: kt.edited,
                          children: " (ред.)",
                        }),
                      }),
                  ],
                }),
            ],
          }),
          e && i("div", { className: kt.headerAccessory, children: e }),
          i(Sm, {
            trigger: i(Gh, { size: 18 }),
            items: b,
            position: "bottom-right",
            className: kt.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
const sO = "p2Au";
const iO = "RZve";
const aO = "DkSL";
const cO = "IOIZ";
const lO = "MxRL";
const uO = "tvm9";
const dO = "CvFu";
const fO = "kTpO";
const pO = "bIiN";
const hO = "QLPB";
const mO = "uVcn";
const gO = "ZMjO";
const _O = "vyLv";
const vO = "eBmH";
const yO = "AJyk";
const wO = "KglC";
const bO = "CPTH";
const EO = "jtWF";
const SO = "MRQf";

const He = {
  actions: sO,
  compact: iO,
  action: aO,
  views: cO,
  flush: lO,
  actionsLeft: uO,
  disabled: dO,
  liked: fO,
  unliked: pO,
  reposted: hO,
  noAnimation: mO,
  reactionWrapper: gO,
  batAnchor: _O,
  actionsRight: vO,
  captured: yO,
  capturedEmoji: wO,
  capturedText: bO,
  capturedMobile: EO,
  capturedSolo: SO,
};

function fg({
  liked: e,
  reposted: t,
  likesCount: n,
  repostsCount: o,
  commentsCount: r,
  viewsCount: s,
  dominantEmoji: a,
  onLike: c,
  onRepost: l,
  onComment: u,
  disableRepost: d = false,
  compact: p = false,
  emojiOnly: f = false,
  flush: h = false,
  infiniteLike: g = false,
}) {
  const [m, v] = $(false);
  const [_, y] = $(null);
  const w = R(null);

  const N = Hn(Ke(T => T.event) ?? undefined);

  const k = R(e);
  M(() => {
    const T = e && !k.current;
    k.current = e;
    const C = w.current?.getBoundingClientRect();

    if (T && N && C) {
      y(E => ({
        n: (E?.n ?? 0) + 1,
        x: C.left + C.width / 2,
        y: C.top + C.height / 2
      }));
    }
  }, [e, N]);
  const S = g ? `liked-${n}` : e ? "liked" : "not-liked";
  const b = p ? 17 : 20;
  return i("footer", {
    className: `${He.actions} ${p ? He.compact : ""} ${h ? He.flush : ""}`,
    children: [
      i("div", {
        className: He.actionsLeft,
        children: [
          i("div", {
            className: He.reactionWrapper,
            onClick: T => T.stopPropagation(),
            children: i("button", {
              className: `${He.action} ${e ? He.liked : ""} ${
                m && !e ? He.unliked : ""
              } ${!m && e ? He.noAnimation : ""}`,
              onClick: (T) => {
                T.stopPropagation();
                v(true);
                c();
              },
              "aria-label": "Нравится",
              children: [
                N
                  ? i("span", {
                      ref: w,
                      className: He.batAnchor,
                      children: [
                        i(dg, { filled: e, size: b }, S),
                        _ && i(HM, { origin: _, onDone: () => y(null) }, _.n),
                      ],
                    })
                  : i(pl, { filled: e, size: b }, S),
                i(Ar, { value: n }),
              ],
            }),
          }),
          i("button", {
            className: He.action,
            onClick: (T) => {
              T.stopPropagation();
              u();
            },
            "aria-label": "Комментировать",
            children: [i(fl, { size: b }), i(Ar, { value: r })],
          }),
          i("button", {
            className: `${He.action} ${t ? He.reposted : ""} ${
              d ? He.disabled : ""
            }`,
            onClick: (T) => {
              T.stopPropagation();

              if (!d) {
                l();
              }
            },
            disabled: d,
            "aria-label": "Репост",
            children: [i(Bi, { size: b }), i(Ar, { value: o })],
          }),
        ],
      }),
      i("div", {
        className: He.actionsRight,
        children: [
          a &&
            (f
              ? i(mo, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: He.capturedSolo,
                  children: i("span", {
                    className: He.capturedEmoji,
                    children: a,
                  }),
                })
              : i(ue, {
                  children: [
                    i(mo, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: He.captured,
                      children: [
                        i("span", { className: He.capturedEmoji, children: a }),
                        i("span", {
                          className: He.capturedText,
                          children: "Пост захвачен",
                        }),
                      ],
                    }),
                    i(mo, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: He.capturedMobile,
                      children: i("span", { children: a }),
                    }),
                  ],
                })),
          i("span", {
            className: He.views,
            children: [i(Qh, { size: b }), i(Ar, { value: s })],
          }),
        ],
      }),
    ],
  });
}
const kO = me(() => de(() => import("./index-BkSLRGEp.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function pg(e, t) {
  const { openModal: n, closeModal: o, onDelete: r } = t;
  const s = bn();

  const a = le(E => E.deletePost);

  const c = le(E => E.updatePostLike);

  const l = le(E => E.beginLikeMutation);

  const u = le(E => E.endLikeMutation);

  const d = le(E => E.updatePollVote);

  const p = le(E => E.updatePollData);

  const f = Cl(e);
  const h = f.myReaction !== null;
  const f_likesTotal = f.likesTotal;

  const m = Ie(() => mg(e.attachments), [e.attachments]);

  const v = A(async () => {
    const E = h;
    const x = E ? -1 : 1;
    c(e.id, E ? null : "love", x);
    l(e.id);
    try {
      const I = E ? await Ze.unlikePost(e.id) : await Ze.likePost(e.id);
      u(e.id, I?.likesCount);
    } catch (I) {
      c(e.id, E ? "love" : null, -x);
      u(e.id);
      console.error("Failed to toggle like:", I);
    }
  }, [e.id, h, c, l, u]);

  const _ = A(() => {
    if (!h) {
      v();
    }
  }, [h, v]);

  const y = A(
    (E) => {
      const x = e.author.username ?? e.author.id;
      const I = `${window.location.origin}/@${x}/post/${E}`;
      navigator.clipboard.writeText(I);
      Dt.success("Ссылка скопирована");
    },
    [e.author.username, e.author.id]
  );

  const w = A(
    (E) => {
      n(i(kO, { targetType: "post", targetId: E, onClose: o }));
    },
    [n, o]
  );

  const N = A(
    (E) => {
      n(
        i(R3, {
          postId: e.id,
          initialText: e.text ?? "",
          initialSpans: e.spans ?? [],
        })
      );
    },
    [n, e.id, e.text, e.spans]
  );

  const k = A(
    async (E) => {
      if (confirm("Вы уверены, что хотите удалить этот пост?")) {
        try {
          await a(E);
          r?.(E);
        } catch (x) {
          console.error("Failed to delete post:", x);
        }
      }
    },
    [a, r]
  );

  const S = A(() => {
    if (s) {
      n(i(d3, { postId: e.id, onClose: o }));
    } else {
      const E = e.author.username ?? e.author.id;
      Ae(`/@${E}/post/${e.id}`);
    }
  }, [e.author.username, e.author.id, e.id, s, n, o]);

  const b = A(() => {
    n(i(B3, { post: e, onClose: o }));
  }, [n, o, e]);

  const T = A(
    async (E) => {
      const x = m?.myVote ?? null;
      d(e.id, E, x);
      try {
        const I = await Ze.votePoll(e.id, [E]);
        if (I) {
          p(e.id, I);
          return I;
        }
      } catch (I) {
        console.error("[Poll] Failed to vote:", I);

        if (x) {
          d(e.id, x, E);
        }
      }
      return null;
    },
    [e.id, m?.myVote, d, p]
  );

  const C = A(
    async (E) => {
      try {
        const x = await Ze.votePoll(e.id, E);
        if (x) {
          p(e.id, x);
          return x;
        }
      } catch (x) {
        console.error("[Poll] Failed to vote multiple:", x);
      }
      return null;
    },
    [e.id, p]
  );

  return {
    liked: h,
    totalLikes: f_likesTotal,
    handleLike: v,
    handleDoubleTap: _,
    handleComment: S,
    handleRepost: b,
    handleReport: w,
    handleEdit: N,
    handleDelete: k,
    handleCopyLink: y,
    handlePollVote: T,
    handlePollVoteMultiple: C,
  };
}
function hg(e) {
  const t = A(() => {
      le.getState().updatePostLike(e, "love", 1);
    }, [e]);

  const n = A(() => {
    const { postStatsCache: r, applyStatsUpdates: s } = le.getState();
    const r_e = r[e];

    if (r_e) {
      s([
        {
          id: e,
          likesCount: r_e.likesTotal,
          commentsCount: r_e.commentsCount + 1,
          repostsCount: r_e.repostsCount,
          viewsCount: r_e.viewsCount,
          dominantEmoji: r_e.dominantEmoji,
        },
      ]);
    }
  }, [e]);

  const o = A(() => {
    le.getState().updatePostReposted(e, true, 1);
  }, [e]);

  return { handleLike: t, handleComment: n, handleRepost: o };
}
const NO = "LVBi";
const CO = "RZUa";
const TO = "pFvB";
const IO = "JBTj";
const $O = "oed9";
const RO = "ucic";
const AO = "G8Tq";
const xO = "zqWr";
const LO = "FqOI";
const PO = "HmRB";
const MO = "qhgV";
const OO = "M6RA";
const DO = "mn91";
const UO = "aFIg";
const FO = "uZ8j";
const BO = "yxp8";
const HO = "VJzK";
const VO = "XAih";
const WO = "EECe";
const jO = "iU5G";
const zO = "pM4k";

const ke = {
  post: NO,
  notebookPost: CO,
  originalNotebook: TO,
  text: IO,
  notebookGrid: $O,
  notebookRuled: RO,
  notebookLabel: AO,
  postInner: xO,
  isFeed: LO,
  postBody: PO,
  avatarLink: MO,
  postContent: OO,
  textWrapper: DO,
  collapsed: UO,
  expandButton: FO,
  originalPost: BO,
  originalPostText: HO,
  originalPostHeader: VO,
  originalPostTime: WO,
  originalPostMedia: jO,
  haunted: zO,
};

function qO(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function GO({ attachments: e, postVs: t, source: n }) {
  const o = Ie(() => $i(e), [e]);
  return o.length === 0
    ? null
    : i("div", {
        className: ke.originalPostMedia,
        children: i(Kr, { media: o, postVs: t, source: n }),
      });
}
function YO({ originalPost: e, source: t, showcase: n = false }) {
  const o = vl.store(k => k.enabled);

  const r = _k(e.notebook, o);
  const s = qO(e.createdAt);
  const { openModal: a, closeModal: c } = En();

  const {
    liked: l,
    totalLikes: u,
    handleLike: d,
    handleComment: p,
    handleRepost: f,
  } = pg(e, { openModal: a, closeModal: c });

  const { handleLike: h, handleComment: g, handleRepost: m } = hg(e.id);
  const v = Cl(e);
  const _ = Um(n ? undefined : e.id);
  const y = lg(e.id, _);

  const w = A(async () => {
    const k = l;
    await d();

    if (!k) {
      ag(e.id);
    }
  }, [l, d, e.id]);

  const N = A(
    (k) => {
      k.stopPropagation();

      if (n) {
        return;
      }

      const S = e.author.username ?? e.author.id;
      Ae(`/@${S}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id, n]
  );

  return i("div", {
    className: `${ke.originalPost} ${r ? ke.originalNotebook : ""} ${
      r?.style === "grid" ? ke.notebookGrid : ""
    } ${r?.style === "ruled" ? ke.notebookRuled : ""}`,
    "data-night": y ? "" : undefined,
    onClick: N,
    children: [
      i("div", {
        className: ke.originalPostHeader,
        children: [
          i(Bi, { size: 14 }),
          i(gt, {
            src: e.author.avatar ?? "",
            baseAvatar: e.author.baseAvatar,
            alt: e.author.displayName,
            size: "xs",
            halloween: e.author.halloween,
          }),
          i(fs, {
            userId: e.author.id,
            halloween: e.author.halloween,
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          i("span", { className: ke.originalPostTime, children: s }),
        ],
      }),
      r && i(xm, { className: ke.notebookLabel, disabled: n }),
      y
        ? i(ue, {
            children: [
              y.text &&
                i("div", { className: ke.originalPostText, children: y.text }),
              !!y.images?.length &&
                i("div", {
                  className: ke.originalPostMedia,
                  children: i(Kr, {
                    media: y.images.map((k, S) => ({
                      id: `night-${S}`,
                      type: "image",
                      url: k
                    })),
                    source: t,
                  }),
                }),
            ],
          })
        : e.text &&
          i("div", {
            className: ke.originalPostText,
            children:
              e.corrector || e.redPen
                ? i(xl, {
                    postId: e.id,
                    authorId: e.author.id,
                    text: e.text,
                    spans: e.spans,
                    initial: e.corrector,
                    initialRedPen: e.redPen,
                    selectable: false,
                  })
                : e.text,
          }),
      !y &&
        e.attachments &&
        e.attachments.length > 0 &&
        i(GO, { attachments: e.attachments, postVs: e.vs, source: t }),
      i(fg, {
        liked: l,
        reposted: v.reposted,
        likesCount: u,
        repostsCount: v.repostsCount,
        commentsCount: v.commentsCount,
        viewsCount: v.viewsCount,
        dominantEmoji: v.dominantEmoji,
        onLike: n ? h : _?.werewolf?.night ? w : d,
        onRepost: n ? m : f,
        onComment: n ? g : p,
        compact: true,
        emojiOnly: n,
        infiniteLike: n,
      }),
    ],
  });
}
const KO = me(() => de(() => import("./index-Ba5CilJg.js"), __vite__mapDeps([19, 20])).then(
  e => ({
    default: e.Poll
  })
)
);
function XO(e) {
  return {
    id: e.id,
    username: e.username ?? "",
    displayName: e.displayName,
    avatar: e.avatar ?? "",
    baseAvatar: e.baseAvatar,
    isVerified: e.isVerified,
    hasNuksta: e.hasNuksta ?? false,
    pin: e.pin ?? null,
    halloween: e.halloween,
  };
}
function $i(e) {
  return e
    .filter(
      t => t.type === "image" ||
      t.type === "video" ||
      (t.type === "media" && "media" in t)
    )
    .map(t => t.type === "media" && "media" in t ? t.media : t);
}
function mg(e) {
  return e.find(t => t.type === "poll");
}
const QO = 300;
const ZO = 500;

const JO = Di(
  (
    {
      post: t,
      variant: n = "feed",
      className: o,
      isOnOwnProfile: r = false,
      isPinned: s = false,
      isHighlighted: a = false,
      source: c,
      sourceContext: l = "",
      showcase: u = false,
      onEdit: d,
      onPin: p,
      onDelete: f,
      aliceWaterStains: h = [],
    }
  ) => {
    const g = ur().status === "allowed";
    const m = g ? t.notebook : undefined;
    const v = n === "feed";
    const _ = bn();
    const { openModal: y, closeModal: w } = En();

    const N = le(ve => ve.setCurrentPost);

    const k = le(ve => ve.removePost);

    const S = le(ve => ve.seedPostStats);

    const b = le(ve => ve.posts.find(Je => Je.id === t.id));

    const T = ye(ve => ve.profile);

    const C = km(t.id, t.corrector);
    const E = Cm(t.id, t.redPen);
    M(() => {
      S(t);
    }, [t, S]);
    const x = Cl(t);
    const I = Um(u ? undefined : t.id);
    const [P, j] = $(false);
    const G = lg(t.id, I, P);
    const ae = u ? undefined : I?.possession;
    const { isFollowing: se, follow: we, unfollow: X } = ES(t.author.id);
    const ne = v && T?.id !== t.author.id ? se : undefined;

    const {
      liked: fe,
      totalLikes: q,
      handleLike: Se,
      handleDoubleTap: ce,
      handleComment: O,
      handleRepost: B,
      handleReport: Q,
      handleEdit: ge,
      handleDelete: Z,
      handleCopyLink: J,
      handlePollVote: be,
      handlePollVoteMultiple: Fe,
    } = pg(t, { openModal: y, closeModal: w, onDelete: f });

    const je = !!I?.werewolf?.night;

    const pe = A(async () => {
      const ve = fe;
      await Se();

      if (!ve) {
        ag(t.id);
      }
    }, [fe, Se, t.id]);

    const { handleLike: qt, handleComment: Gt, handleRepost: U } = hg(t.id);

    const xe = A(() => {
      if (ne !== undefined) {
        if (ne) {
          y(
                  i(TS, {
                    displayName: t.author.displayName,
                    onConfirm: X,
                    onClose: w,
                  })
                );
        } else {
          we();
        }
      }
    }, [ne, t.author.displayName, we, X, y, w]);

    const Te = A(
      (ve) => {
        DR(ve, (Je) => {
          k(Je);
          f?.(Je);
        });
      },
      [k, f]
    );

    const Be = R(null);
    const Pe = R(null);
    const ze = R(null);
    const [$e, st] = $(QO);
    const [xt, Vn] = $(0);
    const Et = xt > $e;
    M(
      () => () => {
        if (ze.current) {
          cancelAnimationFrame(ze.current);
          (ze.current = null);
        }
      },
      []
    );

    const fr = A(
        (ve) => {
          if (ve &&
            v) {
            ze.current && cancelAnimationFrame(ze.current);

            (ze.current = requestAnimationFrame(() => {
              (ze.current = null);
              Vn(ve.scrollHeight);
            }));
          }

          if (Pe) {
            (Pe.current = ve);
          }
        },
        [v]
      );

    const Yi = A((ve) => {
      ve.stopPropagation();

      st(Je => Je + ZO);
    }, []);

    BC(t.id, Be, c, l, t.vs);
    const pr = t.originalPost?.id;
    M(() => {
      const Be_current = Be.current;
      if (!Be_current) {
        return;
      }
      const Je = pr ? [t.id, pr] : t.id;
      Qr.observe(Be_current, Je);

      return () => Qr.unobserve(Be_current);
    }, [t.id, pr]);
    const No = R(null);
    const hr = R(0);

    const Ki = A((ve) => {
      No.current = ve.target;
    }, []);

    const _s = A(() => {
      N(b ?? t);
      const Je = t.author.username ?? t.author.id;
      Ae(`/@${Je}/post/${t.id}`);
    }, [t, b, N]);

    const ee = A(
      (ve) => {
        const ve_target = ve.target;
        if (ve_target.closest("button") ||
        ve_target.closest("a") ||
        ve_target.closest("video") ||
        ve_target.closest("img")) {
          return;
        }
        if (_) {
          const Vl = Date.now();
          if (Vl - hr.current < 300) {
            (hr.current = 0);

            if (je && !fe) {
              pe();
            } else {
              ce();
            }

            return;
          }
          hr.current = Vl;
          return;
        }
        if (No.current !== ve_target) {
          No.current = null;
          return;
        }
        No.current = null;
        const Hl = window.getSelection();

        if (!Hl || Hl.toString().length <= 0) {
          _s();
        }
      },
      [_, ce, _s, je, fe, pe]
    );

    const Qe = Ie(() => XO(t.author), [t.author]);

    const Yt = Ie(() => $i(t.attachments), [t.attachments]);

    const Me = Ie(() => mg(t.attachments), [t.attachments]);

    const vs = i("div", {
      className: `${ke.postInner} ${v ? ke.isFeed : ""} ${o || ""}`,
      children: [
        v &&
          i("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            className: ke.avatarLink,
            style: G ? { position: "relative" } : undefined,
            children: i(gt, {
              username: t.author.username,
              src: t.author.avatar ?? "",
              baseAvatar: t.author.baseAvatar,
              alt: t.author.displayName,
              size: "sm",
              followBadge: ne,
              onFollowBadgeClick: xe,
              halloween: t.author.halloween,
            }),
          }),
        i("div", {
          className: ke.postContent,
          children: [
            i(rO, {
              author: Qe,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !v,
              isOnOwnProfile: r,
              isPinned: s,
              onReport: Q,
              onEdit: d ?? ge,
              onDelete: Z,
              onPin: p,
              onCopyLink: J,
              onWastePaper: u ? undefined : Te,
              editLocked: C.locked || E.locked,
              accessory: m
                ? i(xm, { className: ke.notebookLabel, disabled: u })
                : null,
            }),
            I?.werewolf &&
              i(WM, {
                wolf: I.werewolf,
                own: T?.id === t.author.id,
                flipped: P,
                onFlip: j,
              }),
            i("div", {
              className: ke.postBody,
              children: [
                (G ? G.text : t.text) &&
                  i("div", {
                    className: ke.textWrapper,
                    children: [
                      i("div", {
                        ref: fr,
                        className: `${ke.text} ${Et ? ke.collapsed : ""}`,
                        style: v && Et ? { maxHeight: `${$e}px` } : undefined,
                        "data-haunt-text": true,
                        children: G
                          ? i(wi, { text: G.text ?? "", spans: [] })
                          : t.corrector || t.redPen
                          ? i(xl, {
                              postId: t.id,
                              authorId: t.author.id,
                              text: t.text,
                              spans: t.spans,
                              initial: t.corrector,
                              initialRedPen: t.redPen,
                              signature: false,
                              selectable: !Et && !u,
                            })
                          : i(wi, { text: t.text, spans: t.spans ?? [] }),
                      }),
                      v &&
                        Et &&
                        i("button", {
                          type: "button",
                          className: ke.expandButton,
                          onClick: Yi,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                !!G?.images?.length &&
                  i(Kr, {
                    media: G.images.map((ve, Je) => ({
                      id: `night-${Je}`,
                      type: "image",
                      url: ve
                    })),
                    isFeed: v,
                  }),
                !G &&
                  Yt.length > 0 &&
                  i(Kr, { media: Yt, isFeed: v, postVs: t.vs, source: c }),
                !G &&
                  Me &&
                  i(Xe, {
                    fallback: null,
                    children: i(KO, {
                      title: Me.question,
                      options: Me.options.map(ve => ({
                        id: ve.id,
                        text: ve.text,
                        votes: ve.votes ?? 0
                      })),
                      totalVotes: Me.totalVotes ?? 0,
                      voted:
                        (Me.myVotes ?? []).length > 0 ||
                        (Me.myVote !== undefined && Me.myVote !== null),
                      selectedOptionId: Me.myVote,
                      selectedOptionIds: Me.myVotes ?? [],
                      multipleChoice: Me.multipleChoice ?? false,
                      onVote: be,
                      onVoteMultiple: Fe,
                      disabled: Me.id.startsWith("temp-"),
                    }),
                  }),
                !G &&
                  t.originalPost &&
                  i(YO, {
                    originalPost: t.originalPost,
                    source: c,
                    showcase: u,
                  }),
                !G &&
                  t.corrector &&
                  i(Nm, { marks: C.marks, postId: t.id }),
                !G &&
                  t.redPen &&
                  i(Rm, {
                    claims: E.claims,
                    visible: E.corrections.length > 0,
                    postId: t.id,
                  }),
                i(fg, {
                  compact: u,
                  emojiOnly: u || !!ae,
                  flush: u,
                  infiniteLike: u,
                  liked: fe,
                  reposted: x.reposted,
                  likesCount: q,
                  repostsCount: x.repostsCount,
                  commentsCount: x.commentsCount,
                  viewsCount: x.viewsCount,
                  dominantEmoji: x.dominantEmoji,
                  onLike: u ? qt : je ? pe : Se,
                  onRepost: u ? U : B,
                  onComment: u ? Gt : O,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return v
      ? i("article", {
          ref: Be,
          className: `${ke.post} ${m ? ke.notebookPost : ""} ${
            m?.style === "grid" ? ke.notebookGrid : ""
          } ${m?.style === "ruled" ? ke.notebookRuled : ""} ${
            a ? "flash-highlight" : ""
          }`,
          "data-alice-water-anchor-kind": "post",
          "data-alice-water-anchor-id": t.id,
          "data-night": G ? "" : undefined,
          onMouseDown: Ki,
          onClick: ee,
          children: [
            g && i(LR, { placements: h, anchorKind: "post", anchorId: t.id }),
            vs,
            I?.werewolf && i(Of, { postId: t.id, night: !!G }),
            ae &&
              i(
                Nf,
                {
                  postId: t.id,
                  possession: ae,
                  authorUsername: t.author.username ?? t.author.id,
                },
                ae.id
              ),
          ],
        })
      : i("div", {
          ref: Be,
          className: `${m ? ke.notebookPost : ""} ${
            m?.style === "grid" ? ke.notebookGrid : ""
          } ${m?.style === "ruled" ? ke.notebookRuled : ""} ${
            ae || G ? ke.haunted : ""
          }`,
          "data-night": G ? "" : undefined,
          children: [
            vs,
            I?.werewolf && i(Of, { postId: t.id, night: !!G }),
            ae &&
              i(
                Nf,
                {
                  postId: t.id,
                  possession: ae,
                  authorUsername: t.author.username ?? t.author.id,
                },
                ae.id
              ),
          ],
        });
  },
  (e, t) => e.post.id === t.post.id &&
  e.post.text === t.post.text &&
  e.post.spans === t.post.spans &&
  e.post.corrector === t.post.corrector &&
  e.post.redPen === t.post.redPen &&
  e.post.notebook?.style === t.post.notebook?.style &&
  e.post.editedAt === t.post.editedAt &&
  e.post.attachments === t.post.attachments &&
  e.post.originalPost === t.post.originalPost &&
  e.variant === t.variant &&
  e.isOnOwnProfile === t.isOnOwnProfile &&
  e.isPinned === t.isPinned &&
  e.isHighlighted === t.isHighlighted &&
  e.source === t.source &&
  e.showcase === t.showcase &&
  e.sourceContext === t.sourceContext &&
  e.aliceWaterStains === t.aliceWaterStains
);

const e4 = "acUp";
const t4 = "oxCm";
const n4 = "QBnm";
const o4 = "nfg1";
const r4 = "AJG6";
const s4 = "SpcR";
const i4 = "PKmT";
const a4 = "D9iX";
const c4 = "Rpkv";
const l4 = "MDbi";
const u4 = "En90";
const d4 = "Ypxv";
const f4 = "tAnj";
const p4 = "fDW2";
const h4 = "wHtH";
const m4 = "JcKQ";
const g4 = "ATnx";
const _4 = "YUzU";
const v4 = "p9Ff";
const y4 = "kNCd";
const w4 = "Pec9";
const b4 = "xQBK";
const E4 = "gpi2";
const S4 = "opve";

const Ee = {
  commentWrapper: e4,
  threadItem: t4,
  avatarWrapper: n4,
  threadLine: o4,
  commentBody: r4,
  showMoreBtn: s4,
  avatarPlaceholder: i4,
  comment: a4,
  small: c4,
  commentTime: l4,
  commentText: u4,
  commentActions: d4,
  commentContent: f4,
  avatarLink: p4,
  authorLink: h4,
  commentHeader: m4,
  moreButton: g4,
  commentHeaderLeft: _4,
  replyMention: v4,
  commentMedia: y4,
  reactionWrapper: w4,
  commentAction: b4,
  liked: E4,
  replyButton: S4,
};

const k4 = me(() => de(() => import("./index-qoqV4m0D.js"), __vite__mapDeps([21, 11, 22])).then(
  e => ({
    default: e.VoiceMessage
  })
)
);

const N4 = Di((
  {
    author: t,
    commentId: n,
    text: o,
    spans: r = [],
    attachments: s = [],
    createdAt: a,
    reactionsCount: c,
    isReacted: l,
    size: u = "sm",
    onLike: d,
    onReply: p,
    onReport: f,
    onEdit: h,
    onDelete: g,
    replyTo: m,
    hideAvatar: v = false,
    isWallOwner: _ = false,
  }
) => {
  const y = Bh(a);
  const w = bl(t.id);

  const N = ye(E => E.profile?.id);

  const k = t.id === N;
  const S = k || _;
  const b = u === "xs";

  const T = Ie(() => {
    const E = [];

    if (k &&
      h) {
      E.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Wh, { size: 16 }),
        onClick: () => h(n),
      });
    }

    if (S &&
      g) {
      E.push({
        id: "delete",
        label: "Удалить",
        icon: i(Xh, { size: 16 }),
        danger: true,
        onClick: () => g(n),
      });
    }

    if (!k) {
      E.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(zh, { size: 16 }),
        danger: true,
        onClick: () => f(n),
      });
    }

    return E;
  }, [k, S, n, h, g, f]);

  const C = `/@${t.username ?? t.id}`;
  return i("div", {
    className: `${Ee.comment} ${b ? Ee.small : ""}`,
    children: [
      !v &&
        i("a", {
          href: C,
          className: Ee.avatarLink,
          children: i(gt, {
            username: t.username,
            src: t.avatar,
            baseAvatar: t.baseAvatar,
            alt: t.displayName,
            size: u,
            halloween: t.halloween,
          }),
        }),
      i("div", {
        className: Ee.commentContent,
        children: [
          i("div", {
            className: Ee.commentHeader,
            children: [
              i("div", {
                className: Ee.commentHeaderLeft,
                children: [
                  i("a", {
                    href: C,
                    className: Ee.authorLink,
                    children: i(fs, {
                      userId: t.id,
                      halloween: t.halloween,
                      name: t.displayName,
                      verified: t.isVerified,
                      hasNuksta: t.hasNuksta,
                      pin: t.pin,
                      size: u,
                      trailing: w
                        ? i("span", {
                            className: Ee.commentTime,
                            "data-comment-time": true,
                            children: y,
                          })
                        : undefined,
                    }),
                  }),
                  !w &&
                    i("span", {
                      className: Ee.commentTime,
                      "data-comment-time": true,
                      children: y,
                    }),
                ],
              }),
              i(Sm, {
                trigger: i(Gh, { size: b ? 14 : 16 }),
                items: T,
                position: "bottom-right",
                className: Ee.moreButton,
              }),
            ],
          }),
          (m || o) &&
            i("div", {
              className: Ee.commentText,
              children: [
                m &&
                  i(ue, {
                    children: [
                      i("a", {
                        href: `/@${m.username}`,
                        className: Ee.replyMention,
                        children: ["@", m.displayName],
                      }),
                      ", ",
                    ],
                  }),
                o && i(wi, { text: o, spans: r }),
              ],
            }),
          $i(s).length > 0 &&
            i("div", {
              className: Ee.commentMedia,
              children: i(Kr, { media: $i(s) }),
            }),
          s
            .filter(E => E.type === "audio")
            .map(E => i(
            Xe,
            {
              fallback: null,
              children: i(k4, { src: E.url, duration: E.duration }),
            },
            E.id
          )
            ),
          i("div", {
            className: Ee.commentActions,
            children: [
              i("button", {
                className: Ee.replyButton,
                onClick: p,
                children: "Ответить",
              }),
              i("div", {
                className: Ee.reactionWrapper,
                children: i("button", {
                  className: `${Ee.commentAction} ${l ? Ee.liked : ""}`,
                  onClick: () => d(),
                  children: [
                    i(pl, { size: 14, filled: l }),
                    i(Ar, { value: c }),
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

const gg = Di((
  {
    comment: t,
    onLike: n,
    onLikeReply: o,
    replyingTo: r,
    onStartReply: s,
    onCancelReply: a,
    onSubmitReply: c,
    onVoiceSend: l,
    onLoadReplies: u,
    onReport: d,
    onEdit: p,
    onDelete: f,
    isLoadingReplies: h = false,
    flashingCommentId: g,
    isWallOwner: m = false,
  }
) => {
  const v = r?.commentId === t.id;

  const _ = {
    id: t.author.id,
    username: t.author.username,
    avatar: t.author.avatar ?? "",
    baseAvatar: t.author.baseAvatar,
    displayName: t.author.displayName,
    isVerified: t.author.isVerified,
    pin: t.author.pin,
    halloween: t.author.halloween,
  };

  const y = t.previewReplies ?? [];
  const w = g === t.id;
  const N = t.stats.replies > y.length;

  const k = [
    { type: "parent", data: t, author: _ },
    ...y.map(S => ({
      type: "reply",
      data: S,

      author: {
        id: S.author.id,
        username: S.author.username,
        avatar: S.author.avatar ?? "",
        baseAvatar: S.author.baseAvatar,
        displayName: S.author.displayName,
        isVerified: S.author.isVerified,
        pin: S.author.pin,
        halloween: S.author.halloween,
      }
    })),
  ];

  return i("div", {
    className: `${Ee.commentWrapper} ${w ? "flash-highlight" : ""}`,
    "data-comment-id": t.id,
    children: [
      k.map((S, b) => {
        const C = !(b === k.length - 1 && !v && !N);
        const E = g === S.data.id;
        return i(
          "div",
          {
            "data-comment-id": S.data.id,
            className: `${Ee.threadItem} ${E ? "flash-highlight" : ""}`,
            children: [
              i("div", {
                className: Ee.avatarWrapper,
                children: [
                  i("a", {
                    href: `/@${S.author.username ?? S.author.id}`,
                    className: Ee.avatarLink,
                    children: i(gt, {
                      username: S.author.username,
                      src: S.author.avatar,
                      baseAvatar: S.author.baseAvatar,
                      alt: S.author.displayName,
                      size: "sm",
                      halloween: S.author.halloween,
                    }),
                  }),
                  C && i("div", { className: Ee.threadLine }),
                ],
              }),
              i("div", {
                className: Ee.commentBody,
                children: i(N4, {
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
                  onLike: S.type === "parent" ? n : () => o(S.data.id),
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
                  onReport: d,
                  onEdit: p,
                  onDelete: f,
                  hideAvatar: true,
                  isWallOwner: m,
                }),
              }),
            ],
          },
          S.data.id
        );
      }),
      v &&
        i("div", {
          className: Ee.threadItem,
          children: [
            i("div", {
              className: Ee.avatarWrapper,
              children: [
                i("div", { className: Ee.avatarPlaceholder }),
                N && i("div", { className: Ee.threadLine }),
              ],
            }),
            i("div", {
              className: Ee.commentBody,
              children: i(Em, {
                placeholder: "Написать ответ...",
                replyTo: { id: r.commentId, authorName: r.displayName },
                onCancelReply: a,
                onSubmit: c,
                onVoiceSend: l,
                autoFocus: true,
              }),
            }),
          ],
        }),
      N &&
        !h &&
        i("button", {
          className: Ee.showMoreBtn,
          onClick: () => u(t.id),
          children: ["Показать ещё ", t.stats.replies - y.length, " ответов"],
        }),
    ],
  });
});

function C4({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: o = r => r,
}) {
  const r = R(null);
  const [s, a] = $(0);
  const [c, l] = $(0);
  const u = R(new Map());
  const d = R(new Map());
  const p = R(0);

  if (p.current !== e) {
    (p.current = e);
    d.current.clear();
  }

  const f = A(
      (k) => {
        const S = o(k);
        return u.current.get(S) ?? t;
      },
      [o, t]
    );

  const h = A(
    (k) => {
      if (k === 0) {
        return 0;
      }
      const S = d.current.get(k);
      if (S !== undefined) {
        return S;
      }
      let b = 0;
      let T = 0;
      for (let C = k - 1; C >= 0; C--) {
        const E = d.current.get(C);
        if (E !== undefined) {
          (b = C);
          (T = E);
          break;
        }
      }
      for (let C = b; C < k; C++) {
        T += f(C);
      }
      d.current.set(k, T);
      return T;
    },
    [f]
  );

  const g = Ie(() => e === 0 ? 0 : h(e - 1) + f(e - 1), [e, h, f]);

  const { startIndex: m, endIndex: v } = Ie(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let k = 0;
    let S = e - 1;

    while (k < S) {
      const E = Math.floor((k + S) / 2);
      const x = h(E);
      const I = f(E);

      if (x + I < s) {
        (k = E + 1);
      } else {
        (S = E);
      }
    }

    const b = Math.max(0, k - n);
    let T = k;
    let C = h(k) - s;

    while (T < e && C < c + t * n) {
      (C += f(T));
      T++;
    }

    (T = Math.min(e - 1, T + n));
    return { startIndex: b, endIndex: T };
  }, [e, s, c, h, f, n, t]);

  const _ = Ie(() => {
    if (e === 0) {
      return [];
    }
    const k = [];
    for (let S = m; S <= v; S++) {
      k.push({ index: S, key: o(S), start: h(S), size: f(S) });
    }
    return k;
  }, [m, v, o, h, f, e]);

  const y = A(
    (k, S) => {
      if (!k) {
        return;
      }
      const b = o(S);
      const T = k.getBoundingClientRect().height;
      if (T <= 0) {
        return;
      }
      const C = u.current.get(b);

      if ((C === undefined || Math.abs(C - T) > 2)) {
        u.current.set(b, T);
        d.current.clear();
      }
    },
    [o]
  );

  const w = A(() => {
    if (r.current) {
      a(r.current.scrollTop);
    }
  }, []);

  const N = A(
    (k) => {
      if (r.current) {
        r.current.removeEventListener("scroll", w);
      }

      (r.current = k);

      if (k) {
        l(k.clientHeight);
        a(k.scrollTop);
        k.addEventListener("scroll", w, { passive: true });
      }
    },
    [w]
  );

  M(() => {
    if (!r.current) {
      return;
    }
    const k = new ResizeObserver((S) => {
      for (const b of S) {
        l(b.contentRect.height);
      }
    });
    k.observe(r.current);

    return () => k.disconnect();
  }, []);

  M(
    () => () => {
      if (r.current) {
        r.current.removeEventListener("scroll", w);
      }
    },
    [w]
  );

  return { containerRef: N, virtualItems: _, totalSize: g, measureElement: y };
}
const T4 = "WJqX";
const I4 = "xBZv";
const $4 = "XLgx";
const R4 = "Xdah";
const A4 = "Xowb";
const x4 = "ugWX";
const L4 = "Q29Q";
const P4 = "fUTY";
const M4 = "bLTo";
const O4 = "V6qq";
const D4 = "WHyg";

const Ot = {
  comments: T4,
  sortWrapper: I4,
  sortSelect: $4,
  commentsList: R4,
  commentItem: A4,
  empty: x4,
  loadMoreSentinel: L4,
  virtualContainer: P4,
  virtualContent: M4,
  virtualItem: O4,
  inputWrapper: D4,
};

const U4 = 120;
function F4({
  comments: e,
  hasMore: t,
  isLoadingMore: n,
  onLoadMore: o,
  replyingTo: r,
  flashingCommentId: s,
  loadingRepliesId: a,
  isWallOwner: c,
  onLikeComment: l,
  onLikeReply: u,
  onStartReply: d,
  onCancelReply: p,
  onSubmitReply: f,
  onVoiceSend: h,
  onLoadReplies: g,
  onReport: m,
  onEdit: v,
  onDelete: _,
}) {
  const y = R(false);

  const {
    containerRef: w,
    virtualItems: N,
    totalSize: k,
    measureElement: S,
  } = C4({
    itemCount: e.length,
    estimatedItemHeight: U4,
    overscan: 3,
    getItemKey: T => e[T]?.id ?? T,
  });

  M(() => {
    if (!t || n || N.length === 0) {
      y.current = false;
      return;
    }
    const T = N[N.length - 1]?.index ?? 0;
    const C = e.length - 5;

    if (T >= C && !y.current) {
      (y.current = true);
      o();
    }
  }, [N, e.length, t, n, o]);

  M(() => {
    if (!n) {
      (y.current = false);
    }
  }, [n]);

  const b = A(
    (T, C) => {
      S(T, C);
    },
    [S]
  );
  return i("div", {
    ref: w,
    className: Ot.virtualContainer,
    "data-comments-scroll": true,
    children: [
      i("div", {
        className: Ot.virtualContent,
        style: { height: `${k}px` },
        children: N.map((T) => {
          const C = e[T.index];
          return C
            ? i(
                "div",
                {
                  ref: E => b(E, T.index),
                  className: Ot.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${T.start}px)`,
                  },
                  children: i(gg, {
                    comment: C,
                    onLike: () => l(C.id),
                    onLikeReply: u,
                    replyingTo: r?.commentId === C.id ? r : null,
                    onStartReply: d,
                    onCancelReply: p,
                    onSubmitReply: f,
                    onVoiceSend: h,
                    onLoadReplies: g,
                    onReport: m,
                    onEdit: v,
                    onDelete: _,
                    isLoadingReplies: a === C.id,
                    flashingCommentId: s,
                    isWallOwner: c,
                  }),
                },
                T.key
              )
            : null;
        }),
      }),
      n && i(Tl, { variant: "medium" }),
    ],
  });
}
const B4 = "hbEF";
const H4 = "X2gT";
const V4 = "ucub";
const Ba = { wrapper: B4, popup: H4, closing: V4 };

const W4 = me(() => de(() => import("./index-DnF4A_Vm.js"), __vite__mapDeps([23, 24])).then(
  e => ({
    default: e.EmojiPicker
  })
)
);

const Df = 280;
const Uf = 380;
const Ha = 8;
const j4 = 100;
const Ff = 150;
const z4 = 150;
function Fl({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [o, r] = $(false);
  const [s, a] = $(false);
  const [c, l] = $(null);
  const u = R(null);
  const d = R(null);
  const p = R(null);
  const f = R(null);
  const h = R(null);
  const g = R(null);

  const m = A(() => {
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
    const I = innerWidth - T.left;
    const T_right = T.right;
    const j = x >= Uf + Ha ? "bottom" : "top";
    const G = I >= Df || I > T_right ? "left" : "right";
    let ae;
    let se;

    if (j === "top") {
      (ae = T.top - Uf - Ha);
    } else {
      (ae = T.bottom + Ha);
    }

    if (G === "left") {
      (se = T.left);
    } else {
      (se = T.right - Df);
    }

    l({
      top: ae,
      left: se,
      transformOrigin: `${j === "top" ? "bottom" : "top"} ${
        G === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const v = A(() => {
    if (!o && !s) {
      m();
      r(true);
    }
  }, [o, s, m]);

  const _ = A(() => {
    if (o && !s) {
      a(true);

      (g.current = window.setTimeout(() => {
        r(false);
        a(false);
      }, z4));
    }
  }, [o, s]);

  const y = () => {
    if (h.current) {
      clearTimeout(h.current);
      (h.current = null);
    }

    if (g.current) {
      clearTimeout(g.current);
      (g.current = null);
    }

    if (s) {
      a(false);
    }

    if (!o) {
      (f.current = window.setTimeout(() => {
          v();
        }, j4));
    }
  };

  const w = () => {
    if (f.current) {
      clearTimeout(f.current);
      (f.current = null);
    }

    (h.current = window.setTimeout(() => {
        _();
      }, Ff));
  };

  M(
    () => () => {
      if (f.current) {
        clearTimeout(f.current);
      }

      if (h.current) {
        clearTimeout(h.current);
      }

      if (g.current) {
        clearTimeout(g.current);
      }
    },
    []
  );

  const N = () => {
    if (h.current) {
      clearTimeout(h.current);
      (h.current = null);
    }

    if (g.current) {
      clearTimeout(g.current);
      (g.current = null);
    }

    if (s) {
      a(false);
    }
  };

  const k = () => {
    h.current = window.setTimeout(() => {
      _();
    }, Ff);
  };

  const S = (b) => {
    b.preventDefault();
  };

  return i("div", {
    ref: d,
    className: Ba.wrapper,
    onMouseEnter: y,
    onMouseLeave: w,
    onMouseDown: S,
    children: [
      i("button", {
        ref: u,
        className: t,
        title: "Добавить эмоджи",
        children: i(j1, { size: n }),
      }),
      o &&
        c &&
        ft(
          i("div", {
            ref: p,
            className: `${Ba.popup} ${s ? Ba.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: N,
            onMouseLeave: k,
            onMouseDown: S,
            children: i(Xe, {
              fallback: null,
              children: i(W4, { onEmojiSelect: e }),
            }),
          }),
          document.body
        ),
    ],
  });
}
const q4 = "RUU1";
const G4 = "myvT";
const Y4 = "bfNj";
const K4 = "wgDE";
const X4 = "ymoS";
const Q4 = "rJDq";
const Z4 = "HvFX";
const J4 = "peXq";
const e3 = "g2IM";
const t3 = "ETfN";
const n3 = "qaLz";
const o3 = "KOlV";

const Nt = {
  editCommentModal: q4,
  form: G4,
  header: Y4,
  title: K4,
  content: X4,
  editor: Q4,
  actions: Z4,
  mediaButtons: J4,
  mediaButton: e3,
  submitGroup: t3,
  charCount: n3,
  error: o3,
};

const Bf = 2000/* 2e3 */;
function r3({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: o } = En();

  const r = Ln(k => k.editComment);

  const s = ye(k => k.profile);

  const a = bn();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: d,
    insertText: p,
  } = Fi(t, n);

  const [f, h] = $(false);
  const g = Bf - c.length;
  const m = g < 0;
  const v = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const y = v || _;

  const w = A(
    (k) => {
      p(k.emoji);
    },
    [p]
  );

  const N = A(async () => {
    if (!(!c.trim() || m || !y || f)) {
      h(true);
      try {
        await r(e, c, l);
        o();
      } catch (k) {
        console.error("Failed to update comment:", k);
      } finally {
        h(false);
      }
    }
  }, [c, l, m, y, f, r, e, o]);

  return i(So, {
    frameless: true,
    onClose: o,
    className: Nt.editCommentModal,
    children: i("div", {
      className: Nt.form,
      children: [
        i("div", {
          className: Nt.header,
          children: i("span", {
            className: Nt.title,
            children: "Редактирование комментария",
          }),
        }),
        i("div", {
          className: Nt.content,
          children: [
            i(gt, {
              username: s?.username,
              src: s?.avatar ?? "",
              baseAvatar: s?.baseAvatar,
              size: "sm",
            }),
            i(ji, {
              ref: u,
              value: c,
              spans: l,
              onChange: d,
              placeholder: "Комментарий...",
              maxLength: Bf,
              autoFocus: true,
              className: Nt.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        i("div", {
          className: Nt.actions,
          children: [
            i("div", {
              className: Nt.mediaButtons,
              children:
                !a &&
                i(Fl, { onEmojiSelect: w, buttonClassName: Nt.mediaButton }),
            }),
            i("div", {
              className: Nt.submitGroup,
              children: [
                m &&
                  i("span", {
                    className: `${Nt.charCount} ${Nt.error}`,
                    children: g,
                  }),
                i(tt, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => o(),
                  children: "Отмена",
                }),
                i(tt, {
                  size: "md",
                  disabled: !c.trim() || m || !y || f,
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
const s3 = me(() => de(() => import("./index-BkSLRGEp.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function i3({
  comments: e,
  isLoading: t,
  isLoadingMore: n,
  hasMore: o,
  sort: r,
  onSortChange: s,
  onLikeComment: a,
  onAddComment: c,
  onVoiceSend: l,
  onLoadMore: u,
  isWallOwner: d = false,
  variant: p = "modal",
  hideInput: f = false,
}) {
  const g = bn() && p === "modal";
  const [m, v] = $(null);
  const [_, y] = $(null);
  const [w, N] = $(null);
  const [k, S] = $(null);
  const b = R(null);
  const { openModal: T } = En();

  const C = Ln(q => q.highlightedCommentId);

  const E = Ln(q => q.clearHighlightedComment);

  const x = Ln(q => q.loadReplies);

  const I = Ln(q => q.deleteComment);

  const P = Ln(q => q.toggleCommentLike);

  h1({
    sentinelRef: b,
    hasMore: o,
    isLoading: n,
    onLoadMore: u,
    rootMargin: "200px",
  });

  M(
    () => () => {
      E();
    },
    [E]
  );

  M(() => {
    if (!C) {
      return;
    }
    let q = false;
    const Se = [];

    const ce = (O) => {
      if (q) {
        return;
      }
      const B = document.querySelector(`[data-comment-id="${C}"]`);
      if (!B) {
        if (O > 0) {
          Se.push(window.setTimeout(() => ce(O - 1), 150));
        } else {
          E();
        }

        return;
      }
      B.scrollIntoView({ behavior: "smooth", block: "center" });
      y(C);
      E();

      Se.push(window.setTimeout(() => y(null), 900));
    };

    ce(40);

    return () => {
      (q = true);

      Se.forEach(O => clearTimeout(O));
    };
  }, [C, E]);

  const j = async (q, Se, ce) => {
    if (m) {
      await c({
          text: q,
          spans: Se,
          parentId: m.commentId,
          replyToUserId: m.userId,
          replyToInfo: {
            id: m.userId,
            username: m.username,
            displayName: m.displayName,
          },
          attachments: ce,
        });

      v(null);
    }
  };

  const G = (q, Se, ce, O, B) => {
    v({ commentId: q, username: Se, displayName: ce, userId: O, replyId: B });
  };

  const ae = () => {
    v(null);
  };

  const se = A(
    (q) => {
      P(q);
    },
    [P]
  );

  const we = A(
    async (q) => {
      N(q);
      try {
        await x(q);
      } finally {
        N(null);
      }
    },
    [x]
  );

  const X = A((q) => {
    S(q);
  }, []);

  const ne = A(
    (q) => {
      let Se = "";
      let ce = [];
      for (const O of e) {
        if (O.id === q) {
          (Se = O.text);
          (ce = O.spans ?? []);
          break;
        }
        const B = O.previewReplies?.find(Q => Q.id === q);
        if (B) {
          (Se = B.text);
          (ce = B.spans ?? []);
          break;
        }
      }
      T(i(r3, { commentId: q, initialText: Se, initialSpans: ce }));
    },
    [e, T]
  );

  const fe = A(
    (q) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        I(q);
      }
    },
    [I]
  );

  return i("div", {
    className: Ot.comments,
    children: [
      i("div", {
        className: Ot.sortWrapper,
        children: i("select", {
          value: r,
          onChange: q => s(q.target.value),
          className: Ot.sortSelect,
          children: [
            i("option", { value: "new", children: "Новые" }),
            i("option", { value: "old", children: "Старые" }),
            i("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? i(L2, { count: 5 })
        : e.length === 0
        ? i("div", { className: Ot.empty, children: "Нет комментариев" })
        : g
        ? i(F4, {
            comments: e,
            hasMore: o,
            isLoadingMore: n,
            onLoadMore: u,
            replyingTo: m,
            flashingCommentId: _,
            loadingRepliesId: w,
            isWallOwner: d,
            onLikeComment: a,
            onLikeReply: se,
            onStartReply: G,
            onCancelReply: ae,
            onSubmitReply: j,
            onVoiceSend: l,
            onLoadReplies: we,
            onReport: X,
            onEdit: ne,
            onDelete: fe,
          })
        : i("div", {
            className: Ot.commentsList,
            children: [
              e.map(q => i(
                "div",
                {
                  className: Ot.commentItem,
                  children: i(gg, {
                    comment: q,
                    onLike: () => a(q.id),
                    onLikeReply: se,
                    replyingTo: m?.commentId === q.id ? m : null,
                    onStartReply: G,
                    onCancelReply: ae,
                    onSubmitReply: j,
                    onVoiceSend: l,
                    onLoadReplies: we,
                    onReport: X,
                    onEdit: ne,
                    onDelete: fe,
                    isLoadingReplies: w === q.id,
                    flashingCommentId: _,
                    isWallOwner: d,
                  }),
                },
                q.id
              )
              ),
              o &&
                i("div", {
                  ref: b,
                  className: Ot.loadMoreSentinel,
                  children: n && i(Tl, { variant: "medium" }),
                }),
            ],
          }),
      !f &&
        i("div", {
          className: Ot.inputWrapper,
          children: i(Em, {
            onSubmit: (q, Se, ce) => c({ text: q, spans: Se, attachments: ce }),
            onVoiceSend: l,
          }),
        }),
      k &&
        i(Xe, {
          fallback: null,
          children: i(s3, {
            targetType: "comment",
            targetId: k,
            onClose: () => S(null),
          }),
        }),
    ],
  });
}
const a3 = "Lm7s";
const c3 = "P5m5";
const l3 = "G0Zp";
const u3 = "lKt6";
const Bs = { commentsModal: a3, header: c3, title: l3, content: u3 };
function d3({ postId: e, onClose: t }) {
  const n = R(null);

  const {
    comments: o,
    commentsLoading: r,
    commentsLoadingMore: s,
    commentsHasMore: a,
    clearComments: c,
    fetchComments: l,
    loadMoreComments: u,
    toggleCommentLike: d,
    addComment: p,
  } = Ln(
    ef(w => ({
      comments: w.comments,
      commentsLoading: w.commentsLoading,
      commentsLoadingMore: w.commentsLoadingMore,
      commentsHasMore: w.commentsHasMore,
      clearComments: w.clearComments,
      fetchComments: w.fetchComments,
      loadMoreComments: w.loadMoreComments,
      toggleCommentLike: w.toggleCommentLike,
      addComment: w.addComment
    }))
  );

  const { commentsSort: f, setCommentsSort: h } = Qs(
    ef(w => ({
      commentsSort: w.commentsSort,
      setCommentsSort: w.setCommentsSort
    }))
  );

  if (n.current !== e) {
    (n.current = e);
    c();
  }

  M(() => {
    l(e);
  }, [e, l]);

  const g = A(
      (w) => {
        h(w);
        l(e);
      },
      [h, l, e]
    );

  const m = A(() => {
    if (a && !s) {
      u(e);
    }
  }, [a, s, u, e]);

  const v = A(
    (w) => {
      d(w);
    },
    [d]
  );

  const _ = A(
    async (w) => {
      await p(e, w);
    },
    [p, e]
  );

  const y = A(
    async (w) => {
      const N = `voice_${Date.now()}.webm`;
      const k = new File([w], N, { type: w.type || "audio/webm" });
      const S = await Uo.uploadMedia(k);
      await p(e, { text: "", attachments: [{ mediaId: S.id }] });
    },
    [p, e]
  );

  return i(So, {
    frameless: true,
    onClose: t,
    className: Bs.commentsModal,
    children: [
      i("div", {
        className: Bs.header,
        children: i("span", { className: Bs.title, children: "Комментарии" }),
      }),
      i("div", {
        className: Bs.content,
        "data-comments-modal": true,
        children: i(i3, {
          comments: o,
          isLoading: r,
          isLoadingMore: s,
          hasMore: a,
          sort: f,
          onSortChange: g,
          onLikeComment: v,
          onAddComment: _,
          onVoiceSend: y,
          onLoadMore: m,
        }),
      }),
    ],
  });
}

const f3 = {
    inventory: async () => (await L.get(D.postNotebooks.inventory, { skipErrorToast: true })).data,
  };

const _g = 2000/* 2e3 */;
function p3() {
  const [e, t] = $(Oc);
  const n = Il(Ft.MAX_IMAGES, false);
  const o = R(null);
  return {
    draft: {
      ...e,
      images: n.images.map(s => s.url),
      uploading: n.isUploading,
    },
    media: n,
    textRef: o,
    set: t,
    reset() {
      t(Oc);
      n.clearAll();
    },
    insert(s) {
      const o_current = o.current;
      const c = o_current?.selectionStart ?? e.text.length;
      const l = o_current?.selectionEnd ?? c;
      const u = e.text.slice(0, c) + s + e.text.slice(l);
      if (u.length > _g) {
        return;
      }
      t({ ...e, text: u });
      const d = c + s.length;
      requestAnimationFrame(() => {
        o_current?.focus();
        o_current?.setSelectionRange(d, d);
      });
    },
  };
}
function h3({ night: e, hidden: t }) {
  const { draft: n, media: o } = e;
  return i("div", {
    className: te.nightEditor,
    hidden: t,
    children: [
      i("p", {
        className: te.when,
        children: [
          i("span", { children: "Ночная версия видна с 00:00 до 09:00" }),
          " ",
          i(Ul, { composing: true }),
          " ",
          i("button", { type: "button", onClick: e.reset, children: "убрать" }),
        ],
      }),
      i("textarea", {
        ref: e.textRef,
        className: te.nightText,
        placeholder: "Что покажется в полночь?",
        "aria-label": "Что покажется в полночь?",
        maxLength: _g,
        rows: 2,
        value: n.text,
        onInput: r => e.set({ ...n, text: r.currentTarget.value }),
        onPaste: (r) => {
          const s = Array.from(r.clipboardData?.files ?? []).filter(a => a.type.startsWith("image/")
          );

          if (s.length) {
            r.preventDefault();
            o.uploadFiles(s);
          }
        },
      }),
      i($l, {
        images: o.images,
        uploadingImages: o.uploadingImages,
        onRemove: o.removeImage,
      }),
      i("input", {
        ref: o.fileInputRef,
        type: "file",
        accept: di,
        multiple: true,
        onChange: o.handleFileChange,
        hidden: true,
      }),
    ],
  });
}
function m3({ value: e, onChange: t }) {
  const n = Hn(Ke(a => a.event) ?? undefined);

  const o = R(null);
  if (!n) {
    return null;
  }
  const r = e.on && e.night;
  async function s() {
    const a = r ? XP(e) : { ...e, on: true, night: true };

    const c =
      o.current?.parentElement?.parentElement?.parentElement?.parentElement
        ?.parentElement;

    if (!c || bt()) {
      t(a);
      return;
    }
    const l = c.animate(
      [
        { transform: "perspective(1400px) rotateY(0)" },
        { transform: "perspective(1400px) rotateY(90deg)" },
      ],
      { duration: 160, easing: "ease-in", fill: "forwards" }
    );
    await l.finished.catch(() => {});
    t(a);
    await new Promise(requestAnimationFrame);
    const u = c.animate(
      [
        { transform: "perspective(1400px) rotateY(-90deg)" },
        { transform: "none" },
      ],
      { duration: 320, easing: rn }
    );
    l.cancel();
    await u.finished.catch(() => {});
  }
  return i("span", {
    className: te.moonWrap,
    children: [
      i("button", {
        ref: o,
        type: "button",
        className: te.moon,
        onClick: () => {
          s();
        },
        "aria-pressed": r,
        title: QP(e, r),
        children: [
          i("img", { src: `${F}/moon.webp`, alt: "" }),
          i("span", {
            className: te.moonLabel,
            children: r ? "День" : "Ночная версия",
          }),
          !r &&
            e.on &&
            (e.text.trim() || e.images.length > 0) &&
            i("i", {
              className: te.dot,
              role: "img",
              "aria-label": "есть ночная версия",
            }),
        ],
      }),
      !r && i(Ul, { composing: true }),
    ],
  });
}
const g3 = me(() => de(() => import("./index-hoIGeE1G.js"), __vite__mapDeps([25, 26])).then(
  e => ({
    default: e.DrawingCanvas
  })
)
);
function vg({
  onSubmit: e,
  autoFocus: t = false,
  placeholder: n = "Что нового?",
}) {
  const {
      text: o,
      spans: r,
      editorRef: s,
      handleChange: a,
      insertText: c,
      reset: l,
    } = Fi();

  const [u, d] = $(false);
  const [p, f] = $(false);
  const [h, g] = $(false);
  const [m, v] = $(null);
  const [_, y] = $(null);
  const [w, N] = $(false);
  const [k, S] = $("");
  const b = p3();
  const b_draft = b.draft;
  const C = R(null);
  const E = R(0);
  const x = bn();
  const P = lr()?.subscription?.isActive ?? false;
  const j = ur().status === "allowed";
  M(() => {
    if (!j) {
      v(null);
      return;
    }
    let ee = true;
    let Qe = false;
    const Yt = async () => {
      if (!Qe) {
        Qe = true;
        try {
          const vs = await f3.inventory();

          if (ee) {
            v(vs);
          }
        } catch {
        } finally {
          Qe = false;
        }
      }
    };
    Yt();
    const Me = w
      ? window.setInterval(() => {
          Yt();
        }, 1500)
      : undefined;
    return () => {
      (ee = false);

      if (Me !== undefined) {
        window.clearInterval(Me);
      }
    };
  }, [w, j]);

  const {
      images: G,
      uploadingImages: ae,
      isUploading: se,
      hasVideo: we,
      openFilePicker: X,
      removeImage: ne,
      addImage: fe,
      uploadFiles: q,
      clearAll: Se,
      fileInputRef: ce,
      handleFileChange: O,
    } = Il(Ft.MAX_IMAGES, P);

  const {
    isPollOpen: B,
    poll: Q,
    togglePoll: ge,
    handlePollQuestionChange: Z,
    handlePollOptionChange: J,
    handleAddPollOption: be,
    handleRemovePollOption: Fe,
    handleMultipleChoiceToggle: je,
    handleClosePoll: pe,
    isPollValid: qt,
    getPollData: Gt,
    resetPoll: U,
  } = P2();

  const xe = Ft.MAX_CHARS - o.length;
  const Te = xe < 0;
  const Be = B && qt();
  const Pe = G.length > 0 || ae.length > 0;
  const ze = o.trim().length > 0 || Be || Pe;
  const $e = b_draft.on && b_draft.night;

  const st = $e
    ? b.media
    : { openFilePicker: X, addImage: fe, uploadFiles: q, hasVideo: we };

  const xt = P ? `${di},${mE}` : di;

  const Vn = A(async () => {
    if (!(!ze || Te || se || p || $f(b_draft))) {
      f(true);
      S("");
      try {
        const ee = G.map(Me => ({
          mediaId: Me.mediaId,
          url: Me.url
        }));

        const Qe =
          _ && m
            ? {
                eventId: m.eventId,
                style: _,
                operationId: C.current ?? (C.current = crypto.randomUUID()),
              }
            : undefined;

        const Yt = await e?.(o, r, ee, Gt(), Qe);

        if (b_draft.on && typeof Yt == "string") {
          ZP(Yt, b_draft);
        }

        b.reset();
        l();
        Se();
        U();

        if (_ &&
          m) {
          v(
            Me => Me && {
              ...Me,
              balance: {
                ...Me.balance,
                [_]: Math.max(0, Me.balance[_] - 1),
              },
            }
          );
        }

        y(null);
        N(false);
        (C.current = null);
      } catch (ee) {
        S(
          Ge(ee)
            ? {
                NO_POST_NOTEBOOKS:
                  "Такой тетрадки уже нет в рюкзаке. Выберите другое оформление или купите новое",
                POST_NOTEBOOK_EVENT_ENDED:
                  "Ивент уже завершён. Пост сохранён в черновике и не был опубликован",
                POST_NOTEBOOK_PAUSED:
                  "Оформление постов временно недоступно. Пост сохранён в черновике",
                OPERATION_CONFLICT:
                  "Не удалось безопасно повторить публикацию. Обновите страницу и попробуйте снова",
              }[ee.code] ??
                ee.message ??
                "Не удалось опубликовать пост. Попробуйте ещё раз"
            : "Не удалось опубликовать пост. Попробуйте ещё раз"
        );
      } finally {
        f(false);
      }
    }
  }, [ze, Te, se, p, o, r, G, Gt, e, l, Se, U, _, m, b_draft, b.reset]);

  const Et = A(
    (ee) => {
      if (m?.applicationsEnabled && m.balance[ee] >= 1) {
        y(Qe => Qe === ee ? null : ee);
        S("");
        (C.current = null);
      }
    },
    [m]
  );

  const fr = A((ee) => {
    const Qe = window.location.pathname;
    Ae(
      `/event/alice-ai?product=post_notebook&variant=${ee}&returnTo=${encodeURIComponent(
        Qe
      )}`
    );
  }, []);

  const Yi = A(
    (ee) => {
      st.addImage(ee);
    },
    [st.addImage]
  );

  const pr = A(
    (ee) => {
      if ($e) {
        b.insert(ee.emoji);
      } else {
        c(ee.emoji);
      }
    },
    [c, $e, b.insert]
  );

  const No = A((ee) => {
    ee.preventDefault();
    ee.stopPropagation();
    E.current++;

    if (ee.dataTransfer?.types.includes("Files")) {
      g(true);
    }
  }, []);

  const hr = A((ee) => {
    ee.preventDefault();
    ee.stopPropagation();
  }, []);

  const Ki = A((ee) => {
    ee.preventDefault();
    ee.stopPropagation();
    E.current--;

    if (E.current === 0) {
      g(false);
    }
  }, []);

  const _s = A(
    (ee) => {
      ee.preventDefault();
      ee.stopPropagation();
      (E.current = 0);
      g(false);
      const Qe = ee.dataTransfer?.files;

      if (Qe && Qe.length > 0) {
        st.uploadFiles(Array.from(Qe));
      }
    },
    [st.uploadFiles]
  );

  return i("div", {
    className: `${W.form} ${h ? W.dragActive : ""} ${
      _ === "grid" ? W.notebookGrid : ""
    } ${_ === "ruled" ? W.notebookRuled : ""} ${$e ? te_compose : ""}`,
    onDragEnter: No,
    onDragOver: hr,
    onDragLeave: Ki,
    onDrop: _s,
    children: [
      h &&
        i("div", {
          className: W.dragOverlay,
          children: [
            i(qh, { size: 32 }),
            i("span", {
              children: P ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      _ &&
        i("div", {
          className: W.notebookLabel,
          children: ["Тетрадка ", _ === "grid" ? "в клетку" : "в линейку"],
        }),
      i("div", {
        className: W.whatsNew,
        style: $e ? { display: "none" } : undefined,
        children: i(ji, {
          ref: s,
          value: o,
          spans: r,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: W.editor,
          minHeight: 40,
          maxHeight: Ft.MAX_TEXTAREA_HEIGHT,
          onImagePaste: q,
        }),
      }),
      b_draft.on && i(h3, { night: b, hidden: !$e }),
      !$e && i($l, { images: G, uploadingImages: ae, onRemove: ne }),
      i("input", {
        ref: ce,
        type: "file",
        accept: xt,
        multiple: !we,
        onChange: O,
        style: { display: "none" },
      }),
      B &&
        !$e &&
        i(xT, {
          poll: Q,
          onQuestionChange: Z,
          onOptionChange: J,
          onAddOption: be,
          onRemoveOption: Fe,
          onMultipleChoiceToggle: je,
          onClose: pe,
        }),
      w &&
        m &&
        !$e &&
        i("div", {
          className: W.notebookPicker,
          role: "dialog",
          "aria-label": "Оформление поста",
          children: [
            i("div", {
              className: W.notebookPickerHeader,
              children: [
                i("strong", { children: "Оформление поста" }),
                i("button", {
                  type: "button",
                  onClick: () => N(false),
                  "aria-label": "Закрыть",
                  children: i(Rt, { size: 16 }),
                }),
              ],
            }),
            i("p", {
              children: "Одно оформление расходуется после успешной публикации",
            }),
            i("div", {
              className: W.notebookOptions,
              children: ["grid", "ruled"].map((ee) => {
                const Qe = m.balance[ee];
                const Yt = ee === "grid" ? "В клетку" : "В линейку";
                return i(
                  "div",
                  {
                    className: W.notebookOptionRow,
                    children: [
                      i("button", {
                        type: "button",
                        className: `${W.notebookOption} ${
                          _ === ee ? W.notebookOptionActive : ""
                        }`,
                        disabled: !m.applicationsEnabled || Qe < 1,
                        onClick: () => Et(ee),
                        children: [
                          i("span", {
                            className:
                              ee === "grid" ? W.gridSwatch : W.ruledSwatch,
                            "aria-hidden": "true",
                          }),
                          i("span", {
                            children: [
                              i("strong", { children: Yt }),
                              i("small", { children: ["В рюкзаке: ", Qe] }),
                            ],
                          }),
                        ],
                      }),
                      Qe < 1 &&
                        i("button", {
                          type: "button",
                          className: W.notebookBuy,
                          onClick: () => fr(ee),
                          children: "Купить",
                        }),
                    ],
                  },
                  ee
                );
              }),
            }),
            !m.applicationsEnabled &&
              i("p", {
                className: W.notebookUnavailable,
                children: "Оформление постов временно недоступно",
              }),
          ],
        }),
      k && i("p", { className: W.submitError, role: "alert", children: k }),
      i("div", {
        className: W.actions,
        children: [
          i("div", {
            className: W.mediaButtons,
            children: [
              i("button", {
                className: W.mediaButton,
                onClick: st.openFilePicker,
                title: P && !$e ? "Добавить медиа" : "Добавить изображение",
                children: i(Vh, {}),
              }),
              !x &&
                i(Fl, { onEmojiSelect: pr, buttonClassName: W.mediaButton }),
              i("button", {
                className: W.mediaButton,
                onClick: () => d(true),
                title: "Нарисовать",
                disabled: st.hasVideo,
                children: i(V1, { size: 20 }),
              }),
              i("button", {
                className: `${W.mediaButton} ${B && !$e ? W.active : ""}`,
                onClick: ge,
                disabled: $e,
                title: $e
                  ? "Опрос — только в дневной версии"
                  : "Добавить опрос",
                children: i(W1, {}),
              }),
              m &&
                i("button", {
                  type: "button",
                  className: `${W.mediaButton} ${W.notebookButton} ${
                    _ ? W.active : ""
                  }`,
                  onClick: () => N(ee => !ee),
                  disabled: $e,
                  title: $e
                    ? "Оформление — только в дневной версии"
                    : "Оформление поста",
                  "aria-label": "Оформление поста",
                  "aria-expanded": w,
                  children: i("span", {
                    className: W.notebookIcon,
                    "aria-hidden": "true",
                    children: i("svg", {
                      viewBox: "0 0 24 24",
                      focusable: "false",
                      children: i("path", {
                        d: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z",
                      }),
                    }),
                  }),
                }),
              i(m3, { value: b_draft, onChange: b.set }),
            ],
          }),
          i("div", {
            className: W.submitGroup,
            children: [
              Te &&
                i("span", {
                  className: `${W.charCount} ${W.error}`,
                  children: xe,
                }),
              i(tt, {
                size: "lg",
                disabled: !ze || Te || se || p || $f(b_draft),
                loading: p,
                onClick: Vn,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      u &&
        i(Xe, {
          fallback: null,
          children: i(g3, {
            isOpen: u,
            onClose: () => d(false),
            onSave: Yi,
            mode: "post",
          }),
        }),
    ],
  });
}
const _3 = "eHrZ";
const v3 = "dsvK";
const Hf = { createPostModal: _3, title: v3 };
function y3({ wallOwnerId: e, placeholder: t, onPostCreated: n }) {
  const { closeModal: o } = En();

  const r = ye(c => c.profile);

  const s = le(c => c.createPost);

  const a = async (c, l, u, d, p) => {
    if (!r) {
      return;
    }
    const f = e ?? r.id;

    const h = await s({
      wallOwnerId: f,
      text: c,
      spans: l,
      attachments: u,
      poll: d,
      notebook: p,
    });

    await n?.();
    o();
    return h;
  };

  return i(So, {
    frameless: true,
    onClose: o,
    className: Hf.createPostModal,
    children: [
      i("h2", { className: Hf.title, children: "Создать пост" }),
      i(vg, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}
const w3 = "KdPo";
const b3 = "G1VW";
const E3 = "lXQx";
const S3 = "Meu2";
const k3 = "OSVM";
const N3 = "Fv6g";
const C3 = "IJCH";
const T3 = "kBbO";
const I3 = "eLfR";
const $3 = "lRAL";

const Xt = {
  editPostModal: w3,
  form: b3,
  whatsNew: E3,
  editor: S3,
  actions: k3,
  mediaButtons: N3,
  mediaButton: C3,
  submitGroup: T3,
  charCount: I3,
  error: $3,
};

const Vf = 5000/* 5e3 */;
function R3({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: o } = En();

  const r = le(k => k.editPost);

  const s = ye(k => k.profile);

  const a = bn();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: d,
    insertText: p,
  } = Fi(t, n);

  const [f, h] = $(false);
  const g = Vf - c.length;
  const m = g < 0;
  const v = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const y = v || _;

  const w = A(
    (k) => {
      p(k.emoji);
    },
    [p]
  );

  const N = A(async () => {
    if (!(!c.trim() || m || !y || f)) {
      h(true);
      try {
        await r(e, c, l);
        o();
      } catch (k) {
        console.error("Failed to update post:", k);
      } finally {
        h(false);
      }
    }
  }, [c, l, m, y, f, r, e, o]);

  return i(So, {
    frameless: true,
    onClose: o,
    className: Xt.editPostModal,
    children: i("div", {
      className: Xt.form,
      children: [
        i("div", {
          className: Xt.whatsNew,
          children: [
            i(gt, {
              username: s?.username,
              src: s?.avatar ?? "",
              baseAvatar: s?.baseAvatar,
              size: "md",
            }),
            i(ji, {
              ref: u,
              value: c,
              spans: l,
              onChange: d,
              placeholder: "Что нового?",
              maxLength: Vf,
              autoFocus: true,
              className: Xt.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        i("div", {
          className: Xt.actions,
          children: [
            i("div", {
              className: Xt.mediaButtons,
              children:
                !a &&
                i(Fl, { onEmojiSelect: w, buttonClassName: Xt.mediaButton }),
            }),
            i("div", {
              className: Xt.submitGroup,
              children: [
                m &&
                  i("span", {
                    className: `${Xt.charCount} ${Xt.error}`,
                    children: g,
                  }),
                i(tt, {
                  size: "lg",
                  disabled: !c.trim() || m || !y,
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
const A3 = "KnZF";
const x3 = "b7nw";
const L3 = "KB1U";
const P3 = "Lxcr";
const M3 = "yMqE";
const O3 = "oSmn";
const D3 = "xai0";
const U3 = "IGwS";
const F3 = "qn0x";

const pn = {
  repostModal: A3,
  content: x3,
  title: L3,
  inputSection: P3,
  textarea: M3,
  originalPost: O3,
  postHeader: D3,
  postText: U3,
  actions: F3,
};

function B3({ post: e, onClose: t, onSuccess: n }) {
  const [o, r] = $("");
  const [s, a] = $(false);

  const c = ye(h => h.profile);

  const l = le(h => h.updatePostReposted);

  const u = le(h => h.prependPost);

  const d = wn(h => h.posts[e.id]?.werewolf);

  const p = d?.night ? d.text : undefined;

  const f = async () => {
    a(true);
    try {
      const h = await Ze.createRepost(e.id, o.trim() || undefined);
      l(e.id, true, e.reposted ? 0 : 1);
      u(h);

      if (c?.username) {
        Ze.invalidateWallCache(c.username);
      }

      n?.();
      t();
    } catch (h) {
      console.error("Failed to create repost:", h);
    } finally {
      a(false);
    }
  };

  return i(So, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: pn.repostModal,
    children: i("div", {
      className: pn.content,
      children: [
        i("h2", { className: pn.title, children: "Репост" }),
        i("div", {
          className: pn.inputSection,
          children: [
            c &&
              i(gt, {
                username: c.username,
                src: c.avatar,
                baseAvatar: c.baseAvatar,
                alt: c.displayName,
                size: "sm",
              }),
            i("textarea", {
              className: pn.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: o,
              onInput: h => r(h.target.value),
              rows: 3,
            }),
          ],
        }),
        i("div", {
          className: pn.originalPost,
          children: [
            i("div", {
              className: pn.postHeader,
              children: [
                i(gt, {
                  username: e.author.username,
                  src: e.author.avatar ?? "",
                  baseAvatar: e.author.baseAvatar,
                  alt: e.author.displayName,
                  size: "xs",
                  halloween: e.author.halloween,
                }),
                i(fs, {
                  userId: e.author.id,
                  halloween: e.author.halloween,
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  hasNuksta: e.author.hasNuksta,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            i("div", {
              className: pn.postText,
              children:
                p !== undefined
                  ? p
                  : e.corrector || e.redPen
                  ? i(xl, {
                      postId: e.id,
                      authorId: e.author.id,
                      text: e.text,
                      spans: e.spans,
                      initial: e.corrector,
                      initialRedPen: e.redPen,
                      selectable: false,
                    })
                  : e.text,
            }),
          ],
        }),
        i("div", {
          className: pn.actions,
          children: [
            i(tt, {
              variant: "secondary",
              onClick: (h) => {
                h.stopPropagation();
                t();
              },
              disabled: s,
              children: "Отмена",
            }),
            i(tt, {
              variant: "primary",
              onClick: (h) => {
                h.stopPropagation();
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

const H3 = ({ showCreateButton: e = true }) => {
  const t = Ke(C => C.event);

  const n = lr();
  const o = Hi();
  const r = t?.visible === true;
  const s = n?.username ? `/@${n.username}` : "/profile";

  const a = Ie(
    () => [
      { id: "feed", label: "Лента", icon: jh, href: "/" },
      { id: "shop", label: "Магаз", icon: Kh, href: "/shop" },
      {
        id: "event",
        label: "Ивент",
        icon: null,
        href: r ? mt.route : he.EVENT,
        match: he.EVENT,
      },
      {
        id: "notifications",
        label: "Уведы",
        icon: ml,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: yc, href: s },
    ],
    [s, r]
  );

  const [c, l] = $({});
  const [u, d] = $(true);
  const p = R([]);
  const f = R(null);
  const [h] = ds();
  const { openModal: g } = En();

  const m = le(C => C.fetchFeed);

  const v = le(C => C.isRefreshing);

  const _ = hm();
  const y = wm();

  const w = A(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      m(true);
    }
  }, [m]);

  const N = Ie(() => {
    const C = h.url || "/";
    return _l.some(E => C.startsWith(E));
  }, [h.url]);

  const k = Ie(() => {
    const C = h.url || "/";
    return n?.username
      ? C === `/@${n.username}` || C.startsWith(`/@${n.username}/`)
      : false;
  }, [h.url, n?.username]);

  const S = R(null);

  const b = A((C, E = false) => {
    if (!E && S.current === C) {
      return;
    }
    S.current = C;
    const x = p.current[C];
    const f_current = f.current;
    if (x && f_current) {
      const P = parseFloat(getComputedStyle(f_current).paddingLeft) || 0;

      l({
        width: x.offsetWidth,
        transform: `translateX(${x.offsetLeft - P}px)`,
      });

      d(true);
    }
  }, []);

  M(() => {
    const C = h.url || "/";

    const E = a.findIndex((x) => {
      const I = x.match ?? x.href;
      return C === I || C.startsWith(`${I}/`) || (x.id === "profile" && k);
    });

    if (E === -1) {
      d(false);
    } else {
      b(E, true);
    }
  }, [h.url, a, k, b]);

  M(() => {
    const f_current = f.current;
    if (!f_current) {
      return;
    }
    const E = f_current.querySelector(`.${dt.active}`);
    if (E) {
      const x = p.current.indexOf(E);

      if (x !== -1) {
        (S.current = null);
        b(x);
      }
    }
  }, [b]);

  M(() => {
    const f_current = f.current;
    if (!f_current) {
      return;
    }

    const E = () => {
        const I = f_current.querySelector(`.${dt.active}`);
        if (I) {
          const P = p.current.indexOf(I);

          if (P !== -1) {
            b(P, true);
          }
        }
      };

    const x = new ResizeObserver(E);
    x.observe(f_current);
    window.addEventListener("resize", E);

    return () => {
      x.disconnect();
      window.removeEventListener("resize", E);
    };
  }, [b]);

  const T = () => {
    g(i(y3, {}));
  };
  return N
    ? null
    : i("div", {
        className: dt.mobileNavigationWrapper,
        children: [
          i("nav", {
            ref: f,
            className: dt.navigation,
            children: [
              i("div", {
                className: `${dt.indicator} ${u ? "" : dt.indicatorHidden}`,
                style: c,
              }),
              a.map((C, E) => {
                const C_icon = C.icon;
                const I = C.id === "event";
                const P = h.url || "/";
                const j = C.match ?? C.href;

                const ae =
                  P === j ||
                  P.startsWith(`${j}/`) ||
                  (C.id === "profile" && k);

                return i(
                  "a",
                  {
                    href: I && !r ? undefined : C.href,
                    "aria-disabled": I && !r ? "true" : undefined,
                    ref: (se) => {
                      (p.current[E] = se);

                      if (se && ae) {
                        b(E);
                      }
                    },
                    className: `${dt.navItem} ${ae ? dt.active : ""}`,
                    onClick: (se) => {
                      if (I && !r) {
                        se.preventDefault();
                        return;
                      }

                      if (ae && C.id === "feed") {
                        se.preventDefault();
                        w();
                      }
                    },
                    children: [
                      i("span", {
                        className: dt.iconWrapper,
                        children: I
                          ? i("img", {
                              src: r
                                ? "/assets/portal/portal-active.gif"
                                : "/assets/portal/portal-inactive.png",
                              alt: "Ивент",
                              className: `${dt.portalImage} ${
                                r ? dt.portalImageActive : ""
                              }`,
                            })
                          : i(ue, {
                              children: [
                                C.id === "feed" && v ? i(hl, {}) : i(C_icon, {}),
                                C.id === "notifications" &&
                                  _ > 0 &&
                                  i("span", {
                                    className: dt.badge,
                                    children: _ > 99 ? "99+" : _,
                                  }),
                                C.id === "shop" &&
                                  y > 0 &&
                                  i("span", {
                                    className: dt.badge,
                                    children: y,
                                  }),
                              ],
                            }),
                      }),
                      i("span", { className: dt.label, children: C.label }),
                    ],
                  },
                  C.id
                );
              }),
            ],
          }),
          o &&
            e &&
            i("button", {
              className: dt.createButton,
              onClick: T,
              "aria-label": "Создать пост",
              children: i(gl, {}),
            }),
        ],
      });
};

const V3 = "MJNq";
const W3 = "mH6A";
const j3 = "orMk";
const z3 = "u08E";
const q3 = "mLfT";
const Nr = { badge: V3, red: W3, green: j3, blue: z3, violet: q3 };
function yg({ type: e }) {
  const t =
    e === "like"
      ? Nr.red
      : e === "bell"
      ? Nr.violet
      : ["wall_post", "reply", "repost"].includes(e)
      ? Nr.green
      : Nr.blue;
  return i("div", {
    className: `${Nr.badge} ${t}`,
    children: [
      e === "follow" && i(gl, { size: 12 }),
      ["wall_post", "reply"].includes(e) && i(fl, { size: 12, filled: true }),
      e === "like" && i(pl, { size: 12, filled: true }),
      e === "repost" && i(Bi, { size: 12 }),
      e === "bell" && i(ml, { size: 12 }),
    ],
  });
}
const G3 = "jOfr";
const Y3 = "syHY";
const K3 = "OYs2";
const X3 = "Ec3p";
const Q3 = "YyJV";
const Z3 = "f2ch";
const J3 = "zpiF";
const e5 = "uTen";
const t5 = "WBeV";
const n5 = "yvy1";
const o5 = "xP65";
const r5 = "p7mz";
const s5 = "qWJN";

const ht = {
  container: G3,
  clearAllButton: Y3,
  toastList: K3,
  toast: X3,
  toastLeft: Q3,
  toastData: Z3,
  title: J3,
  message: e5,
  highlightedUsername: t5,
  dragging: n5,
  closeButton: o5,
  eventReminder: r5,
  belowTabs: s5,
};

const i5 = "z0V3";
const a5 = { avatar: i5 };
function c5() {
  return i(gt, {
    src: "🔔",
    alt: "Напоминание",
    size: "md",
    className: a5.avatar,
    badge: i(yg, { type: "bell" }),
  });
}
const wg = er(null);
function y8() {
  const e = cs(wg);
  if (!e) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return e;
}
function l5({ children: e }) {
  const [t, n] = $([]);

  const o = A((c) => {
    const l =
      c.id ?? `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    n(u => [
      ...u.filter(
        d => d.id !== l && (!c.eventId || d.eventId !== c.eventId)
      ),
      {
        id: l,
        eventId: c.eventId,
        expiresAt: c.expiresAt,
        message: c.message,
        notificationType: c.notificationType || "follow",
        actorName: c.actorName,
        actorId: c.actorId,
        actorHalloween: c.actorHalloween,
        actorUsername: c.actorUsername,
        actorAvatar: c.actorAvatar,
        highlightedUsername: c.highlightedUsername,
        clickUrl: c.clickUrl,
        apiType: c.apiType,
        entityId: c.entityId,
        parentEntityId: c.parentEntityId,
      },
    ]);
  }, []);

  const r = A((c) => {
    n(l => l.filter(u => u.id !== c));
  }, []);

  const s = A(() => {
    n([]);
  }, []);

  M(() => {
    const c = (u) => {
      const u_detail = u.detail;
      n((p) => {
        const f = u_detail?.all
          ? []
          : p.filter(
              h => !h.eventId ||
              (h.eventId !== u_detail?.eventId &&
                Date.parse(h.expiresAt ?? "") > Date.now())
            );
        return f.length === p.length ? p : f;
      });
    };
    window.addEventListener("alice-reminder-expired", c);
    const l = (u) => {
      const u_detail = u.detail;
      n((p) => {
        const f = p.filter(h => !h.eventId || u_detail.includes(h.eventId));
        return f.length === p.length ? p : f;
      });
    };
    window.addEventListener("alice-reminder-active", l);

    return () => {
      window.removeEventListener("alice-reminder-expired", c);
      window.removeEventListener("alice-reminder-active", l);
    };
  }, []);

  M(() => {
    const c = (l) => {
      const u = l.detail?.buyerUsername;
      o({
        message: u
          ? "запустил школьный звонок!"
          : "Прозвенел школьный звонок!",
        highlightedUsername: u,
        notificationType: "bell",
        clickUrl: u ? `/@${encodeURIComponent(u)}` : "/event/alice-ai",
      });
    };
    window.addEventListener("alice-bell-toast", c);

    return () => window.removeEventListener("alice-bell-toast", c);
  }, [o]);

  const a = mC();

  M(() => {
    if (a) {
      const c = f5(a.type);

      o({
        id: a.id,
        eventId: a.eventId,
        expiresAt: a.expiresAt,
        message: a.message,
        notificationType: c,
        actorName: a.actorName,
        actorId: a.actorId,
        actorHalloween: a.actorHalloween,
        actorUsername: a.actorUsername,
        actorAvatar: a.actorAvatar,
        clickUrl: a.clickUrl,
        apiType: a.type,
        entityId: a.entityId,
        parentEntityId: a.parentEntityId,
      });

      et.setState({ lastSseToast: null });
    }
  }, [a, o]);

  return i(wg.Provider, {
    value: { toasts: t, addToast: o, removeToast: r, clearAll: s },
    children: [e, i(u5, { toasts: t, onRemove: r, onClearAll: s })],
  });
}
function u5({ toasts: e, onRemove: t, onClearAll: n }) {
  const [o, r] = $(false);

  const s =
    typeof window !== "undefined" &&
    (window.location.pathname === "/" || window.location.pathname === "");

  if (e.length === 0) {
    return null;
  }
  const a = e.slice(-4);

  const c = () => {
    r(true);

    setTimeout(() => {
      n();
      r(false);
    }, 300);
  };

  return i("div", {
    className: `${ht.container} ${s ? ht.belowTabs : ""} ym-hide-content`,
    children: [
      i("div", {
        className: `${ht.toastList} ${o ? ht.clearing : ""}`,
        children: a.map((l, u) => i(
          p5,
          {
            toast: l,
            onRemove: t,
            clearingDelay: o ? u * 50 : 0,
            isClearing: o,
          },
          l.id
        )
        ),
      }),
      e.length > 1 &&
        i(tt, {
          className: ht.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const d5 = 80;
function f5(e) {
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
function Wf(e) {
  const {
      apiType: t,
      entityId: n,
      parentEntityId: o,
      actorUsername: r,
      clickUrl: s,
    } = e;

  const a = ["post_reaction", "post_repost", "post_mention", "wall_post"];

  const c = [
    "post_comment",
    "comment_reaction",
    "comment_reply",
    "comment_mention",
  ];

  if (t && n && r) {
    if (a.includes(t)) {
      return `/@${r}/post/${n}`;
    }
    if (c.includes(t)) {
      return o ? `/@${r}/post/${o}?comment=${n}` : `/@${r}/post/${n}`;
    }
  }
  return t && ["follow", "follow_request", "follow_accepted"].includes(t) && r
    ? `/@${r}`
    : s || "/notifications";
}
function p5({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: o = false,
}) {
  const r = R(null);
  const [s, a] = $(0);
  const [c, l] = $(false);
  const [u, d] = $(false);
  const p = R(0);
  const f = R(0);
  const h = R(false);

  const g = (S) => {
    (p.current = S.clientX);
    (h.current = false);
    l(true);
  };

  const m = A(
    (S) => {
      if (!c) {
        return;
      }
      const b = S.clientX - p.current;

      if (Math.abs(b) > 5) {
        (h.current = true);
      }

      a(b);
    },
    [c]
  );

  const v = A(() => {
    if (c) {
      l(false);

      Math.abs(s) > d5
        ? (d(true), a(s > 0 ? 400 : -400), setTimeout(() => t(e.id), 200))
        : a(0);
    }
  }, [c, s, t, e]);

  M(() => {
    if (c) {
      document.addEventListener("mousemove", m);
      document.addEventListener("mouseup", v);

      return () => {
        document.removeEventListener("mousemove", m);
        document.removeEventListener("mouseup", v);
      };
    }
  }, [c, m, v]);

  const _ = (S) => {
    (p.current = S.touches[0].clientX);
    (f.current = S.touches[0].clientY);
    (h.current = false);
    l(true);
  };

  const y = (S) => {
    if (!c) {
      return;
    }
    const b = S.touches[0].clientX - p.current;
    const T = S.touches[0].clientY - f.current;

    if ((Math.abs(b) > 5 || Math.abs(T) > 5)) {
      (h.current = true);
    }

    if (!(Math.abs(T) > Math.abs(b))) {
      a(b);
    }
  };

  const w = () => {
    v();
  };

  const N = u || o ? 0 : Math.max(0, 1 - Math.abs(s) / 200);
  const k = o ? 400 : s;
  return i("div", {
    ref: r,
    className: `${ht.toast} ${e.eventId ? ht.eventReminder : ""} ${
      c ? ht.dragging : ""
    }`,
    role: "button",
    tabIndex: 0,
    onClick: () => {
      if (h.current) {
        return;
      }
      const S = Wf(e);

      if (S) {
        Ae(S);
        t(e.id);
      }
    },
    onKeyDown: (S) => {
      if ((S.key === "Enter" || S.key === " ")) {
        S.preventDefault();
        Ae(Wf(e) ?? "/notifications");
        t(e.id);
      }
    },
    style: {
      transform: `translateX(${k}px)`,
      opacity: N,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: g,
    onTouchStart: _,
    onTouchMove: y,
    onTouchEnd: w,
    children: [
      i("div", {
        className: ht.toastLeft,
        children: [
          e.eventId
            ? i(c5, {})
            : i(gt, {
                src: e.actorAvatar || "",
                badge: i(yg, { type: e.notificationType }),
              }),
          i("div", {
            className: ht.toastData,
            children: [
              e.actorName &&
                i("div", {
                  className: ht.title,
                  children: e.eventId
                    ? i("span", { children: e.actorName })
                    : i(fs, {
                        userId: e.actorId,
                        halloween: e.actorHalloween,
                        name: e.actorName,
                      }),
                }),
              i("p", {
                className: ht.message,
                children: [
                  e.highlightedUsername &&
                    i("span", {
                      className: ht.highlightedUsername,
                      children: ["@", e.highlightedUsername, " "],
                    }),
                  e.message,
                ],
              }),
            ],
          }),
        ],
      }),
      i("button", {
        className: ht.closeButton,
        "aria-label": "Скрыть уведомление",
        onClick: (S) => {
          S.stopPropagation();
          t(e.id);
        },
        onMouseDown: S => S.stopPropagation(),
        onTouchStart: S => S.stopPropagation(),
        children: i(Rt, { size: 16 }),
      }),
    ],
  });
}
const h5 = "d5Bi";
const m5 = "gkIk";
const g5 = "Cdmi";
const _5 = "c5qG";
const v5 = "a9yu";
const y5 = "A9pE";
const w5 = "Z9qv";
const b5 = "ebwo";
const E5 = "d9u1";
const S5 = "QElh";

const ro = {
  container: h5,
  toast: m5,
  slideUp: g5,
  leaving: _5,
  fadeOut: v5,
  success: y5,
  icon: w5,
  message: b5,
  closeButton: E5,
  error: S5,
};

const k5 = { success: z1, error: B1 };
function N5({ id: e, type: t, message: n, onRemove: o }) {
  const [r, s] = $(false);
  const k5_t = k5[t];

  const c = A(() => {
    s(true);

    setTimeout(() => {
      o(e);
    }, 300);
  }, [e, o]);

  return i("div", {
    className: `${ro.toast} ${ro[t]} ${r ? ro.leaving : ""}`,
    children: [
      i("span", { className: ro.icon, children: i(k5_t, { size: 20 }) }),
      i("span", { className: ro.message, children: n }),
      i("button", {
        className: ro.closeButton,
        onClick: c,
        children: i(Rt, { size: 14 }),
      }),
    ],
  });
}
function C5() {
  const e = li(n => n.toasts);

  const t = li(n => n.removeToast);

  return e.length === 0
    ? null
    : i("div", {
        className: ro.container,
        children: e.map(n => i(
          N5,
          { id: n.id, type: n.type, message: n.message, onRemove: t },
          n.id
        )
        ),
      });
}
const T5 = "AiwN";
const I5 = "DUXG";
const $5 = "NSUj";
const R5 = "qZj7";
const Hs = { tabs: T5, indicator: I5, button: $5, active: R5 };
function A5({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: o,
  className: r = "",
}) {
  const [s, a] = $(t);
  const c = n !== undefined ? n : s;
  const [l, u] = $({});
  const d = R([]);
  const p = R(null);
  const f = R(false);

  const h = A(() => {
    const _ = d.current[c];
    if (_) {
      const _parentElement = _.parentElement;
      const w = _parentElement ? parseFloat(getComputedStyle(_parentElement).paddingLeft) : 0;
      const N = !f.current;

      u({
        width: _.offsetWidth,
        transform: `translateX(${_.offsetLeft - w}px)`,
        ...(N ? { transition: "none" } : {}),
      });

      if (N) {
        requestAnimationFrame(() => {
          (f.current = true);

          u((k) => {
            const { transition: S, ...b } = k;
            return b;
          });
        });
      }
    }
  }, [c]);

  M(() => {
    h();
  }, [h]);

  M(() => {
    const p_current = p.current;
    if (!p_current) {
      return;
    }
    const y = new ResizeObserver(() => {
      h();
    });
    y.observe(p_current);

    return () => {
      y.disconnect();
    };
  }, [h]);

  const g = (_) => {
    if (n === undefined) {
      a(_);
    }

    o?.(_, e[_]);
  };

  const m = _ => typeof _ == "string" ? _ : _.label;

  const v = (_, y) => typeof _ == "string" ? `${y}` : _.id;

  return i("div", {
    ref: p,
    className: `${Hs.tabs} ${r}`,
    children: [
      i("div", { className: Hs.indicator, style: l }),
      e.map((_, y) => i(
        "button",
        {
          ref: (w) => {
            d.current[y] = w;
          },
          onClick: () => g(y),
          className: `${Hs.button} ${c === y ? Hs.active : ""}`,
          children: m(_),
        },
        v(_, y)
      )
      ),
    ],
  });
}
const x5 = me(() => de(
  () => import("./index-CWuLxraS.js"),
  __vite__mapDeps([27, 28, 6, 5, 29])
).then(e => ({
  default: e.ImageViewer
}))
);
function L5() {
  const {
    isOpen: e,
    images: t,
    initialIndex: n,
    sourceRect: o,
    resolveSourceRect: r,
    zoomable: s,
    thumbs: a,
    session: c,
    close: l,
  } = Mh();
  return e
    ? i(Xe, {
        fallback: null,
        children: i(
          x5,
          {
            images: t,
            initialIndex: n,
            sourceRect: o,
            resolveSourceRect: r,
            zoomable: s,
            thumbs: a,
            onClose: () => l(c),
          },
          c
        ),
      })
    : null;
}
const P5 = "uhjC";
const M5 = "BrKW";
const O5 = "cK8v";
const D5 = "P7iz";
const U5 = "C02w";
const F5 = "YCFv";
const B5 = "RpKs";

const Zn = {
  layout: P5,
  layoutEvent: M5,
  wrapper: O5,
  wrapperLegal: D5,
  wrapperShop: U5,
  content: F5,
  wrapperEvent: B5,
};

const H5 = "ZkL5";
const V5 = "z44Y";
const W5 = "DWru";
const j5 = "JCrM";
const z5 = "pIgl";
const Po = { webs: H5, corner: V5, topRight: W5, bottomLeft: j5, moonlight: z5 };
function q5() {
  const e = Ke(t => t.event);
  return Hn(e ?? undefined)
    ? i("div", {
        className: Po.webs,
        "aria-hidden": "true",
        children: [
          i("div", {
            className: Po.moonlight,
            children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(t => i("i", { style: { "--i": t } }, t)
            ),
          }),
          i("img", {
            className: `${Po.corner} ${Po.topRight}`,
            src: `${F}/web-corner.webp`,
            alt: "",
          }),
          i("img", {
            className: `${Po.corner} ${Po.bottomLeft}`,
            src: `${F}/web-corner.webp`,
            alt: "",
          }),
        ],
      })
    : null;
}
const G5 = "drW7";
const Y5 = "tg9c";
const K5 = "fhQm";
const X5 = "zurZ";
const Q5 = "aCZ0";
const Z5 = "Bh68";
const J5 = "JEo0";
const eD = "O3iK";

const hn = {
  blackout: G5,
  dark: Y5,
  dust: K5,
  flyer: X5,
  mouth: Q5,
  portal: Z5,
  caption: J5,
  torchCursor: eD,
};

const tD = 12000/* 12e3 */;
const bg = 60000/* 6e4 */;
const Eg = "halloween-blackout-next";
function nD() {
  try {
    return Number(localStorage.getItem(Eg)) || null;
  } catch {
    return null;
  }
}
function jf() {
  const e = Date.now() + Y(30, 120) * bg;
  try {
    localStorage.setItem(Eg, String(e));
  } catch {}
  return e;
}
function oD() {
  return Array.from({ length: Math.round(Y(3, 5)) }, (e, t) => {
    const n = `${Y(0.4, 1.6) + t * 1.8}s`;
    return Math.random() < 0.5
      ? {
          id: t,
          kind: "peek",
          style: {
            "--left": `${Y(10, 80)}vw`,
            "--top": `${Y(25, 75)}vh`,
            "--size": `${Y(80, 110)}px`,
            "--time": `${Y(4.5, 6)}s`,
            "--delay": n,
            "--r1": `${Y(-14, -4)}deg`,
            "--r2": `${Y(4, 14)}deg`,
          },
        }
      : {
          id: t,
          kind: "fly",
          style: {
            "--top": `${Y(15, 70)}vh`,
            "--size": `${Y(90, 130)}px`,
            "--time": `${Y(12, 16)}s`,
            "--delay": n,
            "--dir": Math.random() < 0.5 ? 1 : -1,
            "--y1": `${Y(-90, 90)}px`,
            "--y2": `${Y(-90, 90)}px`,
            "--y3": `${Y(-90, 90)}px`,
            "--r1": `${Y(-12, 12)}deg`,
            "--r2": `${Y(-12, 12)}deg`,
          },
        };
  });
}
function rD() {
  return Array.from({ length: 70 }, (e, t) => ({
    id: t,

    style: {
      "--left": `${Y(0, 100)}vw`,
      "--top": `${Y(0, 100)}vh`,
      "--size": `${Y(1, 2.6)}px`,
      "--time": `${Y(6, 14)}s`,
      "--delay": `${-Y(0, 14)}s`,
      "--dx": `${Y(-40, 40)}px`,
      "--dy": `${Y(-60, 20)}px`,
    }
  }));
}
function sD() {
  const e = Hn(Ke(s => s.event) ?? undefined);

  const t = _t(s => s.moonDay);

  const n = wn(s => s.night);

  const o = t || n;

  const r = _t(s => s.blackout);

  M(() => {
    if (!e || !o) {
      return;
    }
    let s;

    const a = () => {
      if (document.hidden) {
        return document.addEventListener("visibilitychange", a, {
          once: true,
        });
      }
      RM();
      c(jf() - Date.now());
    };

    const c = (l) => {
      clearTimeout(s);
      (s = setTimeout(a, l));
    };

    c(Math.max((nD() ?? jf()) - Date.now(), Y(1, 3) * bg));

    return () => {
      clearTimeout(s);
      document.removeEventListener("visibilitychange", a);
    };
  }, [e, o]);

  return e && r ? i(iD, {}, r) : null;
}
function iD() {
  const e = R(null);
  const [t] = $(oD);
  const [n] = $(rD);

  M(() => {
    const document_documentElement = document.documentElement;
    document_documentElement.classList.add(hn.torchCursor);
    const r = { x: innerWidth / 2, y: innerHeight * 0.45 };

    const s = (f) => {
      (r.x = f.clientX);
      (r.y = f.clientY);
      e.current?.style.setProperty("--x", `${r.x}px`);
      e.current?.style.setProperty("--y", `${r.y}px`);
    };

    const a = e.current?.style;
    let c = [];
    let l = performance.now() + Y(3000/* 3e3 */, 6000/* 6e3 */);
    const u = (f) => {
      if (f >= l) {
        const h =
          Math.random() < 0.3
            ? [
                [0.6, 60],
                [1, 80],
                [0, 140],
                [0.8, 60],
              ]
            : [
                [0.75, 50],
                [1, 90],
                [0.55, 60],
              ];
        let g = f;
        c = [];
        for (const [m, v] of h) {
          (g += v);
          c.push([m, g]);
        }
        l = f + Y(4000/* 4e3 */, 8000/* 8e3 */);
      }

      while (c.length && c[0][1] < f) {
        c.shift();
      }

      a?.setProperty(
        "--beam",
        String(c[0]?.[0] ?? 0.985 + Math.random() * 0.015)
      );
    };
    let d = requestAnimationFrame(function f(h) {
      u(h);
      for (const g of e.current?.querySelectorAll(
        "[data-ghost]:not([data-scared])"
      ) ?? []) {
        const m = g.querySelector("img").getBoundingClientRect();
        const v = m.x + m.width / 2 - r.x;
        const _ = m.y + m.height / 2 - r.y;
        const y = Math.hypot(v, _);

        if (m.width && y <= 130) {
          g.style.setProperty("--fx", `${(v / (y || 1)) * 700}px`);
          g.style.setProperty("--fy", `${(_ / (y || 1)) * 700}px`);
          (g.dataset.scared = "");
        }
      }
      d = requestAnimationFrame(f);
    });
    window.addEventListener("pointermove", s, { passive: true });
    window.addEventListener("pointerdown", s, { passive: true });
    const p = setTimeout(xM, tD);
    return () => {
      document_documentElement.classList.remove(hn.torchCursor);
      window.removeEventListener("pointermove", s);
      window.removeEventListener("pointerdown", s);
      clearTimeout(p);
      cancelAnimationFrame(d);
    };
  }, []);

  return i("div", {
    ref: e,
    className: hn.blackout,
    "aria-hidden": "true",
    children: [
      t.map(o => o.kind === "peek"
        ? i(
            "span",
            {
              className: hn.portal,
              style: o.style,
              "data-ghost": true,
              children: i("span", {
                className: hn.mouth,
                children: i("img", { src: `${F}/ghost.webp`, alt: "" }),
              }),
            },
            o.id
          )
        : i(
            "span",
            {
              className: hn.flyer,
              style: o.style,
              "data-ghost": true,
              children: i("img", { src: `${F}/ghost.webp`, alt: "" }),
            },
            o.id
          )
      ),
      n.map(o => i("i", { className: hn.dust, style: o.style }, o.id)),
      i("div", { className: hn.dark }),
      i("p", {
        className: hn.caption,
        children: "Свет вырубило. Свети фонариком",
      }),
    ],
  });
}
function aD({ thanks: e }) {
  M(() => {
    const s = setTimeout(Lf, 7000/* 7e3 */);
    return () => clearTimeout(s);
  }, [e]);
  const [t, ...n] = e.from;
  const o = n.length ? ` и ещё ${n.length}` : "";
  const r = t ? `@${t}${o}` : "Автор поста";
  return i("div", {
    className: gn.thanks,
    role: "status",
    onClick: Lf,
    children: [
      i("span", {
        className: gn.lamp,
        "aria-hidden": "true",
        children: [
          i("img", { src: `${F}/lantern.webp`, alt: "" }),
          i("i", {}),
          i("i", {}),
          i("i", {}),
          i("i", {}),
          i("i", {}),
        ],
      }),
      i("div", {
        className: gn.text,
        children: [
          i("b", {
            children: [r, " ", n.length ? "говорят" : "говорит", " спасибо"],
          }),
          i("span", { children: "за спасённый пост" }),
          e.level !== null &&
            i("span", {
              className: gn.level,
              children: [
                "Фонарь ярче: уровень ",
                e.level,
                i("span", {
                  className: gn.dots,
                  children: [1, 2, 3, 4, 5].map(s => i(
                    "i",
                    {
                      className: s <= e.level ? gn.lit : "",
                      style: { animationDelay: `${s * 120}ms` },
                    },
                    s
                  )
                  ),
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function cD() {
  const e = _t(n => n.thanks);

  const t = _t(n => n.moonDay);

  return ft(
    i(ue, {
      children: [
        t &&
          i(ue, {
            children: [
              i("div", { className: gn.moonlight, "aria-hidden": "true" }),
              i("button", {
                type: "button",
                className: gn.moon,
                style: { backgroundImage: `url(${F}/moon.webp)` },
                "aria-label": "Луна",
                onClick: (n) => {
                  for (const o of n.currentTarget.getAnimations()) {
                    o.cancel();
                  }

                  n.currentTarget.animate(
                    [
                      { rotate: "0deg" },
                      { rotate: "-12deg" },
                      { rotate: "9deg" },
                      { rotate: "0deg" },
                    ],
                    { duration: 450 }
                  );

                  AM();
                },
              }),
            ],
          }),
        e && i(aD, { thanks: e }),
      ],
    }),
    document.body
  );
}
const lD = "v8BR";
const uD = "u2a5";
const dD = "iZ8H";
const fD = "Kckl";
const pD = "ebki";
const hD = "AnPG";

const Mo = {
  stack: lD,
  toast: uD,
  body: dD,
  actions: fD,
  secondary: pD,
  close: hD,
};

function mD() {
  const e = Pn(t => t.list);
  return e.length
    ? ft(
        i("div", {
          className: Mo.stack,
          children: e.map(t => i(
            "div",
            {
              className: Mo.toast,
              role: "status",
              onPointerEnter: () => Md(t.id, true),
              onPointerLeave: () => Md(t.id, false),
              children: [
                t.img && i("img", { src: t.img, alt: "" }),
                i("div", {
                  className: Mo.body,
                  children: [
                    i("b", { children: t.title }),
                    t.sub && i("span", { children: t.sub }),
                    !!t.actions?.length &&
                      i("div", {
                        className: Mo.actions,
                        children: t.actions.map((n, o) => i(
                          "button",
                          {
                            type: "button",
                            className: o ? Mo.secondary : "",
                            onClick: () => {
                              hi(t.id);
                              n.run();
                            },
                            children: n.label,
                          },
                          n.label
                        )
                        ),
                      }),
                  ],
                }),
                !!t.actions?.length &&
                  i("button", {
                    type: "button",
                    className: Mo.close,
                    "aria-label": "Закрыть",
                    onClick: () => {
                      hi(t.id);
                      t.onClose?.();
                    },
                    children: "×",
                  }),
              ],
            },
            t.id
          )
          ),
        }),
        document.body
      )
    : null;
}

const gD = {
    post_reaction: "wings",
    comment_reaction: "wings",
    post_comment: "feather",
    comment_reply: "feather",
    follow: "door",
  };

const Sg = () => new Date(Fn() + 3 * 3600000/* 36e5 */).toISOString().slice(0, 10);

function _D(e, t) {
  const n = e.eventDay === IM;
  const o = `halloween-moon:${t}:${Sg()}`;
  ug(n);

  if (!(!n || wo(o))) {
    Bn(o);
    LM();
  }
}
function vD(e, t) {
  const n = (r) => {
    if (t()) {
      Bn(e);

      At.settings(r)
        .then(() => {
        if (t()) {
          Mc(r);
        }
      })
        .catch(() => {
        if (t()) {
          Le({
            key: `${e}:save-error`,
            title: "Не удалось сохранить настройку звука",
            sub: "Попробуй ещё раз в разделе «Звук и эффекты»",
          });
        }
      });
    }
  };

  const o = () => {
    sg();
    n(true);
  };

  return Le({
    key: e,
    title: "В ИТД завелась нечисть. Включить звуки?",
    img: `${F}/ghost-orig.webp`,
    actions: [
      { label: "Включить", run: o },
      { label: "Не сейчас", run: () => n(false) },
    ],
    onClose: () => {
      if (t()) {
        Bn(e);
      }
    },
  });
}
function yD(e) {
  const t = `halloween-midnight:${e}:${Sg()}`;

  if (!wo(t)) {
    Bn(t);

    Le({
      title: "Полночь. Посты-оборотни перевернулись",
      sub: "Видишь пост с ушками? Лайкни его и получишь ночную конфету. До 9 утра",
      img: `${F}/moon.webp`,
    });

    gs("howl");
  }
}
function wD(e, t) {
  const n = et.subscribe((r, s) => {
    const r_lastSseToast = r.lastSseToast;
    const c = r_lastSseToast && r_lastSseToast !== s.lastSseToast ? gD[r_lastSseToast.type] : undefined;

    if (c) {
      gs(c);
    }
  });

  const o = wn.subscribe((r, s) => {
    if (r.night !== s.night) {
      e();
    }

    if (r.night && !s.night) {
      yD(t);
    }
  });

  return () => {
    n();
    o();
  };
}
function bD(e, t, n = 0) {
  ct(() => {
    if (!e || !t) {
      return;
    }
    let o = true;
    let r = 0;
    let s;
    const a = `halloween-sounds-asked:${t}`;

    const c = () => {
      if (s !== undefined) {
        hi(s);
      }

      (s = undefined);
    };

    const l = async (h) => {
      const g = ++r;
      try {
        const m = await At.me();
        if (!o || g !== r) {
          return;
        }
        _D(m, t);
        Mc(m.settings?.sounds === true);

        if (h && !m.settings?.sounds && !m.settings?.soundsAsked && !wo(a)) {
          (s = vD(a, () => o));
        } else if ((m.settings?.sounds || m.settings?.soundsAsked || wo(a))) {
          c();
        }
      } catch {}
    };

    l(true);

    const u = () => {
      c();
      l(false);
    };

    const d = (h) => {
      if (h.key === a && h.newValue === "1") {
        u();
      }
    };

    const p = () => sg();

    window.addEventListener("halloween-settings-changed", u);
    window.addEventListener("storage", d);
    window.addEventListener("pointerdown", p, { once: true });
    const f = wD(() => {
      l(false);
    }, t);
    return () => {
      (o = false);
      c();
      ug(false);
      Mc(false);
      window.removeEventListener("halloween-settings-changed", u);
      window.removeEventListener("storage", d);
      window.removeEventListener("pointerdown", p);
      f();
    };
  }, [e, t, n]);
}
function ED(e) {
  if (!e.length) {
    return;
  }

  const t = e
      .filter(o => o.kind === "lantern")
      .map(o => Wo(o.payload?.level));

  const n = e
    .filter(o => o.kind === "thanks")
    .map(o => qi(o.payload?.from))
    .filter(Boolean);

  $M({ from: [...new Set(n)], level: t.length ? Math.max(...t) : null });
}
async function SD(e, t, n) {
  const o = (await At.notices()).notices ?? [];
  if (!t()) {
    return;
  }

  const r = o.filter(l => !l.readAt && !e.has(l.id));

  const s = r.filter(l => l.kind === "thanks" || l.kind === "lantern");

  ED(s);
  const a = r.filter(l => !s.includes(l)).slice(0, 3);
  for (const l of a) {
    const u = PL(l);

    if (u) {
      Le({ ...u.toast, key: `halloween-notice:${n}:${l.id}` }, u.ms);
    }
  }
  const c = [...s, ...a];
  for (const l of c) {
    e.add(l.id);
  }

  if (c.length) {
    (await At.readNotices(c.map(l => l.id)));
  }
}
function kD(e, t, n = 0) {
  ct(() => {
    if (!e || !t) {
      return;
    }
    let o = true;
    const r = new Set();
    let s = false;
    const a = async () => {
      if (!(!o || s || document.hidden)) {
        s = true;
        try {
          await SD(r, () => o, t);
        } catch {
        } finally {
          s = false;
        }
      }
    };
    a();

    const c = setInterval(() => {
        a();
      }, 60000/* 6e4 */);

    const l = () => {
      if (!document.hidden) {
        a();
      }
    };

    window.addEventListener("focus", l);
    document.addEventListener("visibilitychange", l);

    return () => {
      (o = false);
      clearInterval(c);
      window.removeEventListener("focus", l);
      document.removeEventListener("visibilitychange", l);
    };
  }, [e, t, n]);
}
function ND({ ownerId: e }) {
  const t = Ke(r => r.event);

  const n = !!e && Hn(t ?? undefined);
  const o = t?.lifecycleEpoch ?? 0;

  ct(
    () => () => {
      Lk();
      PM();
    },
    [n, e, o]
  );

  M(() => {
    if (n) {
      return uA();
    }
  }, [n, e, o]);

  kD(n, e, o);
  bD(n, e, o);

  return n
    ? i(ue, {
        children: [
          i("svg", {
            width: "0",
            height: "0",
            style: { position: "absolute" },
            "aria-hidden": "true",
            children: [
              i("filter", {
                id: "hw-wobble",
                children: [
                  i("feTurbulence", {
                    type: "fractalNoise",
                    baseFrequency: "0.01 0.05",
                    numOctaves: 1,
                    seed: 3,
                  }),
                  i("feDisplacementMap", { in: "SourceGraphic", scale: 2.5 }),
                ],
              }),
              i("filter", {
                id: "hw-wobble2",
                children: [
                  i("feTurbulence", {
                    type: "fractalNoise",
                    baseFrequency: "0.012 0.06",
                    numOctaves: 1,
                    seed: 5,
                  }),
                  i("feDisplacementMap", { in: "SourceGraphic", scale: 3 }),
                ],
              }),
              i("filter", {
                id: "hw-wobble3",
                children: [
                  i("feTurbulence", {
                    type: "fractalNoise",
                    baseFrequency: "0.016 0.08",
                    numOctaves: 2,
                    seed: 9,
                  }),
                  i("feDisplacementMap", { in: "SourceGraphic", scale: 4 }),
                ],
              }),
            ],
          }),
          i(mD, {}),
          i(cD, {}),
        ],
      })
    : null;
}

const CD = me(() => de(() => import("./index-CqBYbvIN.js"), __vite__mapDeps([30, 31])).then(
  e => ({
    default: e.AuthLayout
  })
)
  );

const TD = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

const kg = [
  "/legal",
  "/terms",
  "/privacy",
  "/cookies",
  "/child-safety",
  "/subscription-terms",
  "/recurring-terms",
];

const ID = [...kg, "/external", "/support", "/delete-account"];
const $D = ["/shop"];

const RD = ({ children: e }) => {
  const t = bn();
  const n = Hi();
  const o = lr()?.id;

  const r = et(m => m.initialize);

  const s = et(m => m.reset);

  const a = p1();
  const [c] = ds();

  const l =
    (c.url || window.location.pathname)
      .split(/[?#]/, 1)[0]
      .replace(/\/+$/, "") || "/";

  M(() => {
    if (!(!n || !o)) {
      return Gk(o);
    }
  }, [n, o]);

  M(() => {
    if (!(!n || !o)) {
      r();
      return s;
    }
  }, [n, o, r, s]);

  const u = TD.includes(l);

  const d = ID.some(m => l === m || l.startsWith(`${m}/`));

  const p = kg.some(m => l === m || l.startsWith(`${m}/`));

  const f = $D.some(m => l === m || l.startsWith(`${m}/`));

  const h = l === he.EVENT || l.startsWith(`${he.EVENT}/`);
  const g = (n || f) && !d;
  return u
    ? i(Xe, { fallback: null, children: i(CD, { children: e }) })
    : i(f1.Provider, {
        value: { isHidden: a },
        children: [
          window.self === window.top &&
            !d &&
            i(ue, {
              children: [
                n && !h && i(q5, {}),
                n && !h && i(UM, {}),
                n && !h && i(sD, {}),
                i(ND, { ownerId: n ? o ?? null : null }),
              ],
            }),
          i("div", {
            className: `${Zn.layout} ${h ? Zn.layoutEvent : ""}`,
            children: i("div", {
              className: `${Zn.wrapper} ${p ? Zn.wrapperLegal : ""} ${
                f ? Zn.wrapperShop : ""
              } ${h ? Zn.wrapperEvent : ""}`,
              children: [
                g && (t ? i(H3, { showCreateButton: !h }) : i(WC, {})),
                g && !t && !h && i(YC, {}),
                i("div", { className: Zn.content, children: e }),
              ],
            }),
          }),
        ],
      });
};

function AD() {
  if (!zf) {
    (zf = true);

    (window.setNativeAuth = (e) => {
      if (e?.token) {
        cl(e.token);
        ye.setState({ status: "loading" });

        ye
          .getState()
          .fetchProfile()
          .then(() => {
          if (ye.getState().status !== "account_deleted") {
            ye.setState({ status: "authenticated" });
          }
        })
          .catch(() => ye.setState({ status: "unauthenticated" }));
      }
    });

    window.webkit?.messageHandlers?.iosBridge
      ? window.webkit.messageHandlers.iosBridge.postMessage("requestAuth")
      : window.AndroidBridge?.requestAuth();
  }
}
const xD = "rVie";
const LD = "DP5F";
const PD = "fBdM";
const MD = "knOO";
const OD = "NqHH";
const DD = "Dg2M";
const UD = "Mmks";
const FD = "nnff";
const BD = "b5ex";
const HD = "Ccn0";
const VD = "p2rw";
const WD = "krwk";
const jD = "CbFe";
const zD = "Z94e";
const qD = "wX4b";

const it = {
  overlay: xD,
  card: LD,
  imageWrap: PD,
  image: MD,
  body: OD,
  titleRow: DD,
  title: UD,
  badge: FD,
  texts: BD,
  text: HD,
  moreButton: VD,
  buttons: WD,
  button: jD,
  primary: zD,
  secondary: qD,
};

const Ng = "seen_announcements";
function Cg() {
  try {
    const e = localStorage.getItem(Ng);
    if (!e) {
      return [];
    }
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.filter(n => typeof n == "string") : [];
  } catch {
    return [];
  }
}
function GD(e) {
  try {
    const t = Cg();

    if (!t.includes(e)) {
      t.push(e);
      localStorage.setItem(Ng, JSON.stringify(t));
    }
  } catch {}
}
function YD() {
  const e = Hi();
  const [t, n] = $(null);
  const [o, r] = $(false);

  const s = A(() => {
    r(false);

    n(g => {
      if (g) {
        GD(g.id);
      }

      return null;
    });
  }, []);

  M(() => {
    if (!e) {
      return;
    }
    let g = false;

    gE
      .getAnnouncements()
      .then((m) => {
      if (g) {
        return;
      }
      const v = Cg();

      const _ = m.find(y => y?.id && !v.includes(y.id));

      if (_) {
        n(_);
      }
    })
      .catch(() => {});

    return () => {
      g = true;
    };
  }, [e]);

  M(() => {
    if (!t) {
      return;
    }

    const g = (v) => {
      if (v.key === "Escape") {
        s();
      }
    };

    const m = document.documentElement.style.overflow;
    (document.documentElement.style.overflow = "hidden");
    document.addEventListener("keydown", g);

    return () => {
      (document.documentElement.style.overflow = m);
      document.removeEventListener("keydown", g);
    };
  }, [t, s]);

  if (!t) {
    return null;
  }

  const a = (g) => {
    const g_action = g.action;

    if (g_action?.type === "link" &&
      g_action.url) {
      if (/^https?:\/\//.test(g_action.url)) {
        window.open(g_action.url, "_blank", "noopener,noreferrer");
      } else {
        Ae(g_action.url);
      }
    }

    s();
  };

  const c = (g) => {
    if (g.target === g.currentTarget) {
      s();
    }
  };

  const {
    image: l,
    badge: u,
    title: d,
    description: p,
    additional_text: f,
    buttons: h,
  } = t;

  return ft(
    i("div", {
      className: it.overlay,
      onClick: c,
      children: i("div", {
        className: it.card,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": d,
        children: [
          l?.url &&
            i("div", {
              className: it.imageWrap,
              style:
                l.width && l.height
                  ? { aspectRatio: `${l.width} / ${l.height}` }
                  : undefined,
              children: i("img", {
                className: it.image,
                src: l.url,
                alt: "",
                width: l.width,
                height: l.height,
              }),
            }),
          i("div", {
            className: it.body,
            children: [
              i("div", {
                className: it.titleRow,
                children: [
                  i("h2", { className: it.title, children: d }),
                  u && i("span", { className: it.badge, children: u }),
                ],
              }),
              (p || f) &&
                i("div", {
                  className: it.texts,
                  children: [
                    p && i("p", { className: it.text, children: p }),
                    f &&
                      (o
                        ? i("p", { className: it.text, children: f })
                        : i("button", {
                            type: "button",
                            className: it.moreButton,
                            onClick: () => r(true),
                            children: "Подробнее",
                          })),
                  ],
                }),
              !!h?.length &&
                i("div", {
                  className: it.buttons,
                  children: h.map((g, m) => i(
                    "button",
                    {
                      type: "button",
                      className: `${it.button} ${
                        g.style === "secondary" ? it.secondary : it.primary
                      }`,
                      onClick: () => a(g),
                      children: g.title,
                    },
                    m
                  )
                  ),
                }),
            ],
          }),
        ],
      }),
    }),
    document.body
  );
}
const qf = 3000/* 3e3 */;
const KD = 500;
const XD = 30000/* 3e4 */;
const Gf = ["mousemove", "keydown", "touchstart", "wheel", "scroll"];
function QD() {
  const e = le(n => n.applyStatsUpdates);

  const t = dm();
  M(() => {
    if (t !== "authenticated") {
      return;
    }
    let n = null;
    let o = Infinity;
    let r = false;
    let s = false;
    let a = Date.now();

    const c = () => Date.now() - a > XD;

    const l = async () => {
      if (r || (typeof document !== "undefined" && document.hidden)) {
        return;
      }
      if (c()) {
        (s = true);

        if (n !== null) {
          clearTimeout(n);
          (n = null);
        }

        (o = Infinity);
        return;
      }
      const h = Qr.getSnapshot();
      if (h.length === 0) {
        return;
      }
      r = true;
      const g = Date.now();
      try {
        const m = h.length > 20 ? h.slice(0, 20) : h;
        const v = await Ze.getPostsStats(m);

        if (v.length > 0) {
          e(v, g);
        }
      } catch {
      } finally {
        r = false;
      }
    };

    const u = (h) => {
      const g = Date.now() + h;

      if (g < o) {
        n !== null && clearTimeout(n);
        (o = g);

        (n = setTimeout(async () => {
          (n = null);
          (o = Infinity);
          await l();

          if (!s) {
            u(qf);
          }
        }, h));
      }
    };

    const d = () => {
      (a = Date.now());

      if (s) {
        (s = false);
        u(0);
      }
    };

    for (const h of Gf) {
      window.addEventListener(h, d, { passive: true });
    }
    const p = () => {
      if (!document.hidden) {
        d();
      }
    };
    document.addEventListener("visibilitychange", p);
    const f = Qr.onAppear(() => {
      if (!s && !document.hidden) {
        u(KD);
      }
    });
    u(qf);

    return () => {
      if (n !== null) {
        clearTimeout(n);
      }

      document.removeEventListener("visibilitychange", p);
      for (const h of Gf) {
        window.removeEventListener(h, d);
      }
      f();
    };
  }, [e, t]);
}

const Bl = () => i(em, {
  kind: "notFound",
  title: "Страница не найдена",
  description:
    "Такой страницы нет — возможно, ссылка устарела или в адресе опечатка.",
  action: i(tt, {
    onClick: () => Ae("/"),
    children: "Вернуться на главную",
  }),
});

const ZD = "urOI";
const JD = "raGw";
const e6 = "RnOf";
const t6 = "IeKg";
const n6 = "gYvS";
const o6 = "GxKU";
const r6 = "j3ii";
const s6 = "dH35";
const i6 = "UdOA";
const a6 = "B6Gg";
const c6 = "xuSf";
const l6 = "e3pq";
const u6 = "OD6S";
const d6 = "SfMn";
const f6 = "vaLR";
const p6 = "RG0W";
const h6 = "XHPQ";
const m6 = "YyGi";
const g6 = "cyeP";
const _6 = "gUQm";
const v6 = "TgYd";
const y6 = "zSyX";

const z = {
  skeleton: ZD,
  inner: JD,
  content: e6,
  header: t6,
  body: n6,
  actions: o6,
  shimmer: r6,
  avatar: s6,
  name: i6,
  time: a6,
  line: c6,
  w100: l6,
  w92: u6,
  w85: d6,
  w78: f6,
  w65: p6,
  w50: h6,
  w40: m6,
  media: g6,
  mediaTall: _6,
  pill: v6,
  list: y6,
};

function w6(e) {
  switch (e) {
    case "short":
      {
        return i("div", {
          className: z.body,
          children: i("div", { className: `${z.shimmer} ${z.line} ${z.w65}` }),
        });
      }
    case "medium":
      {
        return i("div", {
          className: z.body,
          children: [
            i("div", { className: `${z.shimmer} ${z.line} ${z.w100}` }),
            i("div", { className: `${z.shimmer} ${z.line} ${z.w78}` }),
          ],
        });
      }
    case "long":
      {
        return i("div", {
          className: z.body,
          children: [
            i("div", { className: `${z.shimmer} ${z.line} ${z.w100}` }),
            i("div", { className: `${z.shimmer} ${z.line} ${z.w92}` }),
            i("div", { className: `${z.shimmer} ${z.line} ${z.w85}` }),
            i("div", { className: `${z.shimmer} ${z.line} ${z.w50}` }),
          ],
        });
      }
    case "media":
      {
        return i("div", {
          className: z.body,
          children: [
            i("div", { className: `${z.shimmer} ${z.line} ${z.w92}` }),
            i("div", { className: `${z.shimmer} ${z.line} ${z.w40}` }),
            i("div", { className: `${z.shimmer} ${z.media}` }),
          ],
        });
      }
    case "mediaTall":
      {
        return i("div", {
          className: z.body,
          children: [
            i("div", { className: `${z.shimmer} ${z.line} ${z.w78}` }),
            i("div", { className: `${z.shimmer} ${z.mediaTall}` }),
          ],
        });
      }
  }
}
function Tg({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return i("article", {
    className: z.skeleton,
    "aria-hidden": "true",
    style: n,
    children: i("div", {
      className: z.inner,
      children: [
        i("div", { className: `${z.shimmer} ${z.avatar}` }),
        i("div", {
          className: z.content,
          children: [
            i("div", {
              className: z.header,
              children: [
                i("div", { className: `${z.shimmer} ${z.name}` }),
                i("div", { className: `${z.shimmer} ${z.time}` }),
              ],
            }),
            w6(e),
            i("div", {
              className: z.actions,
              children: [
                i("div", { className: `${z.shimmer} ${z.pill}` }),
                i("div", { className: `${z.shimmer} ${z.pill}` }),
                i("div", { className: `${z.shimmer} ${z.pill}` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Yf = ["medium", "media", "short", "long", "mediaTall"];
function b6({ count: e = 4 }) {
  return i("div", {
    className: z.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка постов",
    children: Array.from({ length: e }, (t, n) => i(Tg, { variant: Yf[n % Yf.length], delayMs: n * 120 }, n)
    ),
  });
}
const E6 = "gWhb";
const S6 = "JMcp";
const k6 = "uL70";
const Va = { virtualFeed: E6, virtualContent: S6, virtualItem: k6 };
function N6({
  posts: e,
  renderPost: t,
  isLoadingMore: n = false,
  hasMore: o = false,
  onLoadMore: r,
  estimatedPostHeight: s = 300,
  overscan: a = 5,
  gap: c = 10,
  initialMeasuredHeights: l,
  onMeasuredHeightsChange: u,
}) {
  const d = R(null);
  const p = R(false);
  const [f, h] = $(null);
  const [g, m] = $(window.innerWidth < 1174);

  const v = le(E => E.highlightedPostId);

  const _ = le(E => E.clearHighlightedPost);

  M(() => {
    const E = () => m(window.innerWidth < 1174);
    window.addEventListener("resize", E);

    return () => window.removeEventListener("resize", E);
  }, []);
  const y = g ? 0 : c;

  const w = Ie(() => {
    const E = new Map();

    e.forEach((x, I) => {
      if (!E.has(x.id)) {
        E.set(x.id, I);
      }
    });

    return E;
  }, [e]);

  const N = A(
    (E) => {
      const e_E = e[E];
      if (!e_E) {
        return E;
      }
      const I = e_E.attachments?.[0]?.id ?? "";
      const P = w.get(e_E.id) === E ? "" : `-${E}`;
      return `${e_E.id}-${I}${P}`;
    },
    [e, w]
  );

  const {
    virtualItems: k,
    totalSize: S,
    measureElement: b,
    getMeasuredHeights: T,
  } = m1({
    itemCount: e.length,
    estimatedItemHeight: s,
    overscan: a,
    gap: y,
    getItemKey: N,
    initialMeasuredHeights: l,
  });

  M(
    () => () => {
      if (u) {
        u(T());
      }
    },
    [u, T]
  );

  M(() => {
    if (!v) {
      return;
    }
    d.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const E = setTimeout(() => {
      h(v);
      _();

      setTimeout(() => h(null), 600);
    }, 300);
    return () => clearTimeout(E);
  }, [v, _]);

  const C = A(() => {
    if (!r || !o || n) {
      return;
    }
    const E =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (E < 500 && !p.current) {
      (p.current = true);
      r();
    }

    if (E > 600) {
      (p.current = false);
    }
  }, [r, o, n]);

  M(() => {
    if (!n) {
      (p.current = false);
    }
  }, [n]);

  M(
    () => {
      window.addEventListener("scroll", C, { passive: true });

      return () => window.removeEventListener("scroll", C);
    },
    [C]
  );

  return i("div", {
    ref: d,
    className: Va.virtualFeed,
    children: [
      i("div", {
        className: Va.virtualContent,
        style: { height: `${S}px` },
        children: k.map((E) => {
          const x = e[E.index];
          return x
            ? i(
                "div",
                {
                  ref: I => b(I, E.index),
                  className: Va.virtualItem,
                  style: { transform: `translateY(${E.start}px)` },
                  children: t(x, E.index, x.id === f),
                },
                E.key
              )
            : null;
        }),
      }),
      n &&
        i("div", {
          style: { marginTop: `${y}px` },
          children: i(Tg, { variant: "medium" }),
        }),
    ],
  });
}
const C6 = "gaDZ";
const T6 = "dLzz";
const I6 = "fnbl";
const $6 = "l0Ad";
const R6 = "VSA0";
const A6 = "VqJR";
const Oo = { intro: C6, art: T6, body: I6, actions: $6, primary: R6, close: A6 };
const Wa = "halloween-intro-seen";
function x6() {
  const e = Hn(Ke(c => c.event) ?? undefined);

  const [t, n] = $(() => !wo(Wa));

  const o = R(null);
  if (!(e && t)) {
    return null;
  }

  const s = () => {
      Bn(Wa);
      const o_current = o.current;
      if (!o_current) {
        return n(false);
      }
      Ce(
        o_current,
        [
          { height: `${o_current.offsetHeight}px` },
          {
            height: "0px",
            paddingTop: "0px",
            paddingBottom: "0px",
            opacity: 0,
          },
        ],
        { duration: 260, easing: "ease-in" }
      ).then(() => n(false));
    };

  const a = () => {
    Bn(Wa);
    n(false);
    Ae(`${mt.route}/book`);
  };

  return i("section", {
    ref: o,
    className: Oo.intro,
    children: [
      i("img", { className: Oo.art, src: `${F}/ghost-hat.webp`, alt: "" }),
      i("div", {
        className: Oo.body,
        children: [
          i("h2", {
            children: "ААА!! ВНИМАНИЕ!! В ИТД проникли тёмные силы!!",
          }),
          i("p", {
            children:
              "Будь аккуратен, с сегодняшней ночи в посты вселяются призраки! Ты должен дать им отпор! Лови привидений, помогай друзьям и получай за это конфеты!",
          }),
          i("div", {
            className: Oo.actions,
            children: [
              i("button", {
                type: "button",
                className: Oo.primary,
                onClick: a,
                children: "Узнать больше",
              }),
              i("button", { type: "button", onClick: s, children: "Понятно" }),
            ],
          }),
        ],
      }),
      i("button", {
        type: "button",
        className: Oo.close,
        "aria-label": "Закрыть",
        onClick: s,
        children: "×",
      }),
    ],
  });
}
const L6 = "rEFa";
const P6 = "F4qo";
const ja = { bar: L6, moonDay: P6 };
function M6() {
  const e = Hn(Ke(o => o.event) ?? undefined);

  const t = wn(o => o.night);

  const n = _t(o => o.moonDay);

  Pl(e, 30000/* 3e4 */);

  return e
    ? i("a", {
        href: mt.route,
        className: n ? `${ja.bar} ${ja.moonDay}` : ja.bar,
        children: iP({ night: t, moonDay: n, msToMidnight: tg(Fn()) }),
      })
    : null;
}
const O6 = "yaNg";
const D6 = "EJRH";
const U6 = "Hvq1";
const F6 = "s4r9";
const B6 = "D7l6";
const H6 = "O2KN";

const Do = {
  page: O6,
  createPostWrapper: D6,
  tabsWrapper: U6,
  searchButton: F6,
  error: B6,
  empty: H6,
};

const V6 = (e) => {
  const t = le(E => E.posts);

  const n = le(E => E.activeFeed);

  const o = le(E => E.isLoading);

  const r = le(E => E.isLoadingMore);

  const s = le(E => E.hasMore);

  const a = le(E => E.error);

  const c = le(E => E.feedScrollPosition);

  const l = le(E => E.feedMeasuredHeights);

  const u = le(E => E.feedRestoreToken);

  const d = le(E => E.setActiveFeed);

  const p = le(E => E.fetchFeed);

  const f = le(E => E.loadMoreFeed);

  const h = le(E => E.createPost);

  const g = le(E => E.cacheFeedHeights);

  const m = ye(E => E.profile);

  const v = ye(E => E.status);

  const _ = R(false);

  const y = Ie(() => t.map(E => E.author.id), [t]);

  bS(y);

  M(() => {
    if (v === "authenticated" && t.length === 0 && !o) {
      p();
    }
  }, [n, v]);

  ct(() => {
    if (!_.current) {
      if (t.length !== 0) {
        (_.current = true);

        c > 0 &&
          (window.scrollTo(0, c),
          requestAnimationFrame(() => window.scrollTo(0, c)));
      }
    }
  }, [t.length, c]);

  const w = R(null);
  ct(() => {
    if (w.current === null) {
      w.current = u;
      return;
    }
    if (w.current === u) {
      return;
    }
    w.current = u;
    const E = c;
    window.scrollTo(0, E);

    requestAnimationFrame(() => window.scrollTo(0, E));
  }, [u, c]);

  const N = A(
      (E) => {
        g(n, E);
      },
      [n, g]
    );

  const k = (E) => {
    const I = ["global", "clan", "following"][E] ?? "global";

    if (I !== n) {
      d(I);
    } else if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      p(true);
    }
  };

  const S = async (E, x, I, P, j) => {
    if (m) {
      return h({
        wallOwnerId: m.id,
        text: E,
        spans: x,
        attachments: I,
        poll: P,
        notebook: j,
      });
    }
  };

  const b = A(() => {
    if (s && !r) {
      f();
    }
  }, [s, r, f]);

  const T =
    n === "global"
      ? "feed_global"
      : n === "following"
      ? "feed_following"
      : "feed_clan";

  const C = A(
    (E, x, I) => i(JO, { post: E, isHighlighted: I, source: T }, E.id),
    [T]
  );

  return i("div", {
    className: Do.page,
    children: [
      i("div", {
        className: Do.tabsWrapper,
        children: [
          i(A5, {
            tabs: ["Для вас", "Лента кланов", "Подписки"],
            activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
            onChange: k,
          }),
          i("a", {
            href: "/search",
            className: Do.searchButton,
            "aria-label": "Поиск",
            children: i(Yh, {}),
          }),
        ],
      }),
      i("div", {
        className: Do.createPostWrapper,
        children: [
          m &&
            i(gt, {
              username: m.username,
              src: m.avatar ?? "",
              baseAvatar: m.baseAvatar,
              alt: m.displayName,
              size: "sm",
            }),
          i(vg, { onSubmit: S }),
        ],
      }),
      i(M6, {}),
      i(x6, {}),
      a
        ? i("div", {
            className: Do.error,
            children: [
              i("p", { children: a }),
              i("button", { onClick: () => p(), children: "Повторить" }),
            ],
          })
        : o && t.length === 0
        ? i(b6, { count: 4 })
        : t.length === 0
        ? i("div", { className: Do.empty, children: "Нет постов" })
        : t.length > 0
        ? i(
            N6,
            {
              posts: t,
              renderPost: C,
              isLoadingMore: r,
              hasMore: s,
              onLoadMore: b,
              estimatedPostHeight: 250,
              overscan: 3,
              initialMeasuredHeights: l,
              onMeasuredHeightsChange: N,
            },
            n
          )
        : null,
    ],
  });
};

const W6 = me(() => de(
  () => import("./index-BJEvD0_d.js"),
  __vite__mapDeps([32, 28, 14, 33])
).then(e => ({
  default: e.GlobalVideoPlayer
}))
);

AD();

const j6 = me(() => de(() => import("./index-D5CdJvfN.js"), __vite__mapDeps([34, 6, 35])).then(
  e => ({
    default: e.Hashtag
  })
)
  );

const z6 = me(() => de(
  () => import("./index-BCXXIi9B.js"),
  __vite__mapDeps([36, 37, 6, 1, 2, 38])
).then(e => ({
  default: e.Profile
}))
);

const q6 = me(() => de(() => import("./index-CGkgiUEs.js"), __vite__mapDeps([39, 6, 40])).then(
  e => ({
    default: e.PostPage
  })
)
);

const G6 = me(() => de(
  () => import("./index-B3Zv61eu.js"),
  __vite__mapDeps([41, 4, 37, 42])
).then(e => ({
  default: e.Notifications
}))
);

const Y6 = me(() => de(() => import("./index-BzplxDT3.js"), __vite__mapDeps([43, 44])).then(
  e => ({
    default: e.Search
  })
)
);

const K6 = me(() => de(() => import("./index-DpsIboyr.js"), __vite__mapDeps([45, 46])).then(
  e => ({
    default: e.ShopFrame
  })
)
);

const X6 = me(() => de(() => import("./index-Bj5fjJOT.js"), __vite__mapDeps([47, 48])).then(
  e => ({
    default: e.EventFrame
  })
)
);

const Q6 = me(() => de(() => import("./index-CMX13lrU.js"), __vite__mapDeps([49, 50])).then(
  e => ({
    default: e.EventFrame
  })
)
);

function Z6({ children: e }) {
  const t = ur();
  return t.status === "denied"
    ? i(Bl, {})
    : t.status === "error"
    ? i("main", {
        role: "alert",
        style: { padding: "48px 24px", textAlign: "center" },
        children: [
          i("p", { children: "Не удалось проверить доступ к странице." }),
          i("button", {
            type: "button",
            onClick: t.retry,
            children: "Повторить",
          }),
        ],
      })
    : t.status !== "allowed"
    ? null
    : i(ue, { children: e });
}

const J6 = me(() => de(() => import("./index-TjFqBIIx.js"), __vite__mapDeps([51, 6, 52])).then(
  e => ({
    default: e.DeleteAccount
  })
)
  );

const e8 = me(() => de(() => import("./index-CMqzhqhE.js"), __vite__mapDeps([53, 6, 54])).then(
  e => ({
    default: e.LegalDocumentsPage
  })
)
);

const In = me(() => de(() => import("./index-CMqzhqhE.js"), __vite__mapDeps([53, 6, 54])).then(
  e => ({
    default: e.LegalDocumentPage
  })
)
);

const t8 = me(() => de(() => import("./index-CMqzhqhE.js"), __vite__mapDeps([53, 6, 54])).then(
  e => ({
    default: e.LegalHistoryPage
  })
)
);

const n8 = me(() => de(
  () => import("./index-Bx45K3Bf.js"),
  __vite__mapDeps([55, 6, 3, 56])
).then(e => ({
  default: e.ExternalLink
}))
);

const o8 = me(() => de(() => import("./index-C-Cqfqs7.js"), __vite__mapDeps([57, 6, 58])).then(
  e => ({
    default: e.Support
  })
)
);

const r8 = me(() => de(() => import("./index-CdARrh9i.js"), __vite__mapDeps([59, 60])).then(
  e => ({
    default: e.EventsPage
  })
)
);

const s8 = me(() => de(
  () => import("./index-C__tVi_N.js"),
  __vite__mapDeps([61, 62, 63, 64, 65, 66, 67])
).then(e => ({
  default: e.Login
}))
);

const i8 = me(() => de(
  () => import("./index-B3OAXi26.js"),
  __vite__mapDeps([68, 62, 63, 64, 65, 66, 69])
).then(e => ({
  default: e.Register
}))
);

const a8 = me(() => de(
  () => import("./index-Dl5z1nZl.js"),
  __vite__mapDeps([70, 62, 63, 66, 71])
).then(e => ({
  default: e.ForgotPassword
}))
);

const c8 = me(() => de(() => import("./index-96j2QPWj.js"), __vite__mapDeps([72, 66, 73])).then(
  e => ({
    default: e.ResetPassword
  })
)
);

const l8 = me(() => de(() => import("./index-D_oibcEr.js"), []).then(e => ({
  default: e.VerifyEmail
}))
);

const u8 = me(() => de(() => import("./index-C3uVNDIt.js"), __vite__mapDeps([74, 75])).then(
  e => ({
    default: e.Onboarding
  })
)
);

const d8 = me(() => de(() => import("./index-BfvmRwRj.js"), []).then(e => ({
  default: e.Verification
}))
);

function Kf(e) {
  const t = e.match(/^\/@([^/]+)\/?$/);
  return t ? t[1] : null;
}
const f8 = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return i(Bl, {});
  }
  const t = e.slice(1);
  return i(z6, { username: t });
};
function p8() {
  const [e, t] = $(window.location.pathname);

  const n = Yb(r => r.isOpen);

  QD();

  return i(l5, {
    children: i($S, {
      children: i(KE, {
        currentPath: e,
        children: [
          i(L5, {}),
          n && i(Xe, { fallback: null, children: i(W6, {}) }),
          i(C5, {}),
          i(yS, {}),
          i(YD, {}),
          i(RD, {
            children: i(Xe, {
              fallback: null,
              children: i(Lh, {
                onChange: (r) => {
                  const s = e;
                  t(r.url);

                  if (r.url === s) {
                    return;
                  }

                  Kb.getState().markNavigated();
                  const a = le.getState();
                  if (s === "/" || s === "") {
                    a.setFeedScrollPosition(window.scrollY);
                  } else {
                    const u = Kf(s);

                    if (u) {
                      a.setProfileScrollPosition(u, window.scrollY);
                    }
                  }
                  const c = r.url === "/";
                  const l = !!Kf(r.url);

                  if (!c && !l) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  i(e8, { path: "/legal" }),
                  i(t8, { path: "/legal/:slug/history" }),
                  i(In, { path: "/legal/:slug/versions/:version" }),
                  i(In, { path: "/legal/:slug" }),
                  i(V6, { path: "/" }),
                  i(G6, { path: "/notifications" }),
                  i(s8, { path: "/login" }),
                  i(i8, { path: "/register" }),
                  i(a8, { path: "/forgot-password" }),
                  i(c8, { path: "/reset-password" }),
                  i(l8, { path: "/verify-email" }),
                  i(In, { path: "/terms", slug: "terms" }),
                  i(In, { path: "/privacy", slug: "privacy" }),
                  i(In, { path: "/cookies", slug: "cookies" }),
                  i(u8, { path: "/onboarding" }),
                  i(Y6, { path: "/search" }),
                  i(K6, { path: "/shop/:rest*" }),
                  i(Z6, {
                    path: "/event/alice-ai/:rest*",
                    children: i(Q6, {}),
                  }),
                  i(X6, { path: "/event/halloween/:rest*" }),
                  i(j6, { path: "/hashtag/:name" }),
                  i(n8, { path: "/external" }),
                  i(o8, { path: "/support" }),
                  i(J6, { path: "/delete-account" }),
                  i(In, { path: "/child-safety", slug: "child-safety" }),
                  i(r8, { path: "/event" }),
                  i(d8, { path: "/verification" }),
                  i(In, {
                    path: "/subscription-terms",
                    slug: "subscription-terms",
                  }),
                  i(In, {
                    path: "/recurring-terms",
                    slug: "recurring-terms",
                  }),
                  i(q6, { path: "/:username/post/:postId" }),
                  i(f8, { path: "/:slug" }),
                  i(Bl, { default: true }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}

if ("scrollRestoration" in history) {
  (history.scrollRestoration = "manual");
}

xb(document.getElementById("root")).render(
  i(ue, {
    children: i(Ab, {
      fallback: i("div", { children: "Something went wrong" }),
      children: i(p8, {}),
    }),
  })
);
export {
  Ae as $,
  R as A,
  tt as B,
  i3 as C,
  Wh as D,
  fl as E,
  pl as F,
  Bi as G,
  mt as H,
  F1 as I,
  et as J,
  hm as K,
  h1 as L,
  So as M,
  bc as N,
  Jh as O,
  $d as P,
  L as Q,
  D as R,
  ue as S,
  Ie as T,
  fs as U,
  N6 as V,
  cr as W,
  yl as X,
  Yh as Y,
  rt as Z,
  he as __1,
  ye as a,
  Qo as a0,
  g8 as a1,
  hl as a2,
  En as a3,
  Rt as a4,
  TS as a5,
  Ns as a6,
  bS as a7,
  _n as a8,
  ES as a9,
  fC as aA,
  cushion_fartMp3 as aB,
  glass_breakWav as aC,
  fN as aD,
  _8 as aE,
  v8 as aF,
  Rl as aG,
  ur as aH,
  V1 as aI,
  LR as aJ,
  IR as aK,
  Ks as aL,
  pt as aM,
  Hi as aN,
  y3 as aO,
  em as aP,
  A5 as aQ,
  vg as aR,
  Ph as aS,
  t1 as aT,
  Sh as aU,
  ds as aV,
  tl as aW,
  H1 as aX,
  mo as aY,
  ml as aZ,
  yc as a_,
  Yb as aa,
  ct as ab,
  Xe as ac,
  al as ad,
  me as ae,
  de as af,
  _f as ag,
  O1 as ah,
  v$ as ai,
  bn as aj,
  a$ as ak,
  Di as al,
  Xh as am,
  Dt as an,
  Sm as ao,
  Gh as ap,
  G1 as aq,
  lr as ar,
  zh as as,
  uC as at,
  y8 as au,
  cn as av,
  Am as aw,
  CR as ax,
  TR as ay,
  ps as az,
  le as b,
  b6 as c,
  $ as d,
  JO as e,
  ef as f,
  Ln as g,
  M as h,
  Kb as i,
  Qs as j,
  Em as k,
  an as l,
  Uo as m,
  Ke as n,
  Ge as o,
  Ze as p,
  A as q,
  H as r,
  ll as s,
  zn as t,
  i as u,
  ft as v,
  gE as w,
  c5 as x,
  gt as y,
  gl as z,
};
