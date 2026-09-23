const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-CyjxWqQR.js",
      "assets/index-DAU3jmJU.js",
      "assets/index-C67GaVm9.css",
      "assets/IconInfo-DFYa2e8T.js",
      "assets/IconNotificationMention-DZxRi2_K.js",
      "assets/api-B7pJeSy-.js",
      "assets/IconChevronRight-CQP7oqfs.js",
      "assets/IconChevronLeft-DjelCr6A.js",
      "assets/index-De1dA9C0.css",
      "assets/index-CMZUIgIP.js",
      "assets/index-CD1aKAiV.css",
      "assets/VoiceInput-oSD2viz6.js",
      "assets/IconPlay-CPVHR2f4.js",
      "assets/VoiceInput-C0N2RSuJ.css",
      "assets/PostMediaVideo-Ddt7Ffci.js",
      "assets/VolumeGlyph-BikmA2y8.js",
      "assets/PostMediaVideo-C8cTBSXy.css",
      "assets/index-B0fEdRE7.js",
      "assets/IconCheckCircle-dQMUHu9c.js",
      "assets/index-BtJ28dg-.css",
      "assets/index-Bzf--J7E.js",
      "assets/index-jgxox3PI.css",
      "assets/index-2_D1cGUk.js",
      "assets/index-eLCrxr0j.css",
      "assets/index-BA2skYPV.js",
      "assets/index-C_tnlE2B.css",
      "assets/index-XGMH48nR.js",
      "assets/index-3zWvDMul.css",
      "assets/index-CPmTW4bA.js",
      "assets/useBodyScrollLock-cBCPbJow.js",
      "assets/index-J_tKrhMR.css",
      "assets/index-D2twE9wB.js",
      "assets/index-ClrOwWK9.css",
      "assets/index-BqawV4Ce.js",
      "assets/index-BVpvrnRq.css",
      "assets/index-CUvhLV8U.js",
      "assets/index-CPmrX-TD.css",
      "assets/index-BFGMKId0.js",
      "assets/IconCheck-D-vR3Acr.js",
      "assets/index-BaSCCEO8.css",
      "assets/index-Car6UAq5.js",
      "assets/index-fmnioEQO.css",
      "assets/index-CfjRbUGN.js",
      "assets/index-CtJCOpOf.css",
      "assets/index-DFxsT11Q.js",
      "assets/index-BZddY3ZO.css",
      "assets/index-C_rcTJdH.js",
      "assets/index-CtrhVBuS.css",
      "assets/index-DKH-ONXF.js",
      "assets/index-OF4ajoQW.css",
      "assets/index-RD6D-mzD.js",
      "assets/index-DzdIa16W.css",
      "assets/index-BrnKjQlG.js",
      "assets/index-BM8_hlLg.css",
      "assets/index-4sMBxaMy.js",
      "assets/index-CqzfvAxP.css",
      "assets/index-BJTWicWf.js",
      "assets/index-CzZD5jpy.css",
      "assets/index-CnK1hYQQ.js",
      "assets/index-CB_uqrYj.css",
      "assets/index-DOF6s1x8.js",
      "assets/index-B4SW_vLQ.css",
      "assets/index-YqSi7ONJ.js",
      "assets/index-BaYrdW4R.css",
      "assets/index-Df9DQ29e.js",
      "assets/index-0jON2u4a.css",
      "assets/index-DzjNB-_Q.js",
      "assets/SubscriptionTerms.module-D0WHgiVN.js",
      "assets/SubscriptionTerms-aQrSSxMS.css",
      "assets/index-CAwKmeqJ.js",
      "assets/index-U03qmzBk.js",
      "assets/index-CyFcwqk9.js",
      "assets/index-DtFyogKX.css",
      "assets/index-BB70SdwT.js",
      "assets/index-Cf4vJE-p.css",
      "assets/IconEyeOff-BbmM5Yy0.js",
      "assets/index-aTZWweZC.css",
      "assets/index-BieKjs-5.js",
      "assets/index-BuBhODZH.css",
      "assets/index-Cxmd7gAV.js",
      "assets/index-DKC5roGi.css",
      "assets/index-D6L27FTx.js",
      "assets/index-CqE8h-1Z.css",
      "assets/index-Dvyanpyt.js",
      "assets/index-HyXQyCn1.css",
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
      (e._sentryDebugIds[t] = "0dd05e35-e3cb-4742-92e4-352b8e672f89");
      (e._sentryDebugIdIdentifier = "sentry-dbid-0dd05e35-e3cb-4742-92e4-352b8e672f89");
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
        for (const a of s.addedNodes) {
          if (a.tagName === "LINK" && a.rel === "modulepreload") {
            r(a);
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
let Lr;
let oe;
let xl;
let Zt;
let fa;
let $l;
let Ml;
let es;
let po;
let yr;
let Dl;
let vi;
let $s;
let Ms;
let Ul;
const So = {};
const Co = [];
const yf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function Ct(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function yi(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function ht(e, t, n) {
  let r;
  let o;
  let s;
  const a = {};
  for (s in t) {
    if (s == "key") {
      (r = t[s]);
    } else if (s == "ref") {
      (o = t[s]);
    } else {
      (a[s] = t[s]);
    }
  }

  if (arguments.length > 2) {
    (a.children = arguments.length > 3 ? Lr.call(arguments, 2) : n);
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (s in e.defaultProps) {
      if (a[s] === undefined) {
        (a[s] = e.defaultProps[s]);
      }
    }
  }

  return wr(e, a, r, o, null);
}
function wr(e, t, n, r, o) {
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
    __v: o ?? ++xl,
    __i: -1,
    __u: 0,
  };

  if (o == null && oe.vnode != null) {
    oe.vnode(s);
  }

  return s;
}
function wf() {
  return { current: null };
}
function Ne(e) {
  return e.children;
}

class at {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  setState(e, t) {
    let n;

    (n = this.__s != null && this.__s != this.state
      ? this.__s
      : (this.__s = Ct({}, this.state)));

    if (typeof e == "function") {
      (e = e(Ct({}, n), this.props));
    }

    if (e) {
      Ct(n, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      Ds(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      (this.__e = true);
      e && this.__h.push(e);
      Ds(this);
    }
  }
}

function Nn(e, t) {
  if (t == null) {
    return e.__ ? Nn(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? Nn(e) : null;
}
function Ef(e) {
  if (e.__P && e.__d) {
    const e_v = e.__v;
    const e_v___e = e_v.__e;
    const r = [];
    const o = [];
    const s = Ct({}, e_v);
    (s.__v = e_v.__v + 1);

    if (oe.vnode) {
      oe.vnode(s);
    }

    wi(
      e.__P,
      s,
      e_v,
      e.__n,
      e.__P.namespaceURI,
      32 & e_v.__u ? [e_v___e] : null,
      r,
      e_v___e ?? Nn(e_v),
      !!(32 & e_v.__u),
      o
    );

    (s.__v = e_v.__v);
    (s.__.__k[s.__i] = s);
    Wl(r, s, o);
    e_v.__e = null;
    e_v.__ = null;

    if (s.__e != e_v___e) {
      Fl(s);
    }
  }
}
function Fl(e) {
  if ((e = e.__) != null && e.__c != null) {
    e.__e = null;
    e.__c.base = null;

    e.__k.some(t => {
      if (t != null && t.__e != null) {
        return (e.__e = e.__c.base = t.__e);
      }
    });

    return Fl(e);
  }
}
function Ds(e) {
  if (((!e.__d && (e.__d = true) && Zt.push(e) && !No.__r++) || fa != oe.debounceRendering)) {
    ((fa = oe.debounceRendering) || $l)(No);
  }
}
function No() {
  try {
    let e;
    let t = 1;

    while (Zt.length) {
      if (Zt.length > t) {
        Zt.sort(Ml);
      }

      (e = Zt.shift());
      (t = Zt.length);
      Ef(e);
    }
  } finally {
    Zt.length = 0;
    No.__r = 0;
  }
}
function Bl(e, t, n, r, o, s, a, c, l, u, d) {
  let p;
  let f;
  let h;
  let m;
  let g;
  let v;
  const _ = (r && r.__k) || Co;
  const t_length = t.length;
  l = bf(n, t, _, l, t_length);

  for (p = 0; p < t_length; p++) {
    if ((h = n.__k[p]) != null) {
      (f = (h.__i != -1 && _[h.__i]) || So);
      (h.__i = p);
      (v = wi(e, h, f, o, s, a, c, l, u, d));
      (m = h.__e);

      h.ref &&
        f.ref != h.ref &&
        (f.ref && Ei(f.ref, null, h), d.push(h.ref, h.__c || m, h));

      g == null && m != null && (g = m);

      4 & h.__u
        ? ((l = Hl(h, l, e)), f.__e && (f.__e = null))
        : typeof h.type == "function" && v !== undefined
        ? (l = v)
        : m && (l = m.nextSibling);

      (h.__u &= -7);
    }
  }

  (n.__e = g);
  return l;
}
function bf(e, t, n, r, o) {
  let s;
  let a;
  let c;
  let l;
  let u;
  const n_length = n.length;
  let p = n_length;
  let f = 0;
  e.__k = new Array(o);

  for (s = 0; s < o; s++) {
    if ((a = t[s]) != null && typeof a != "boolean" && typeof a != "function") {
      typeof a == "string" ||
          typeof a == "number" ||
          typeof a == "bigint" ||
          a.constructor == String
            ? (a = e.__k[s] = wr(null, a, null, null, null))
            : Array_isArray(a)
            ? (a = e.__k[s] = wr(Ne, { children: a }, null, null, null))
            : a.constructor === undefined && a.__b > 0
            ? (a = e.__k[s] =
                wr(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
            : (e.__k[s] = a);

      (l = s + f);
      (a.__ = e);
      (a.__b = e.__b + 1);
      (c = null);
      (u = a.__i = Sf(a, n, l, p)) != -1 && (p--, (c = n[u]) && (c.__u |= 2));

      c == null || c.__v == null
        ? (u == -1 && (o > n_length ? f-- : o < n_length && f++),
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
        c.__e == r && (r = Nn(c));
        zl(c, c);
      }
    }
  }
  return r;
}
function Hl(e, t, n) {
  let r;
  let o;
  if (typeof e.type == "function") {
    r = e.__k;

    for (o = 0; r && o < r.length; o++) {
      if (r[o]) {
        (r[o].__ = e);
        (t = Hl(r[o], t, n));
      }
    }

    return t;
  }

  if (e.__e != t) {
    t && e.type && !t.parentNode && (t = Nn(e));
    (t = n.insertBefore(e.__e, t || null));
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function ft(e, t) {
  (t = t || []);

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some(n => {
              ft(n, t);
            });
    } else {
      t.push(e);
    }
  }

  return t;
}
function Sf(e, t, n, r) {
  let o;
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
  if (r > (d ? 1 : 0)) {
    o = n - 1;

    for (s = n + 1; o >= 0 || s < t.length; ) {
      if ((t_n = t[(a = o >= 0 ? o-- : s++)]) != null &&
      (2 & t_n.__u) == 0 &&
      key == t_n.key &&
      type == t_n.type) {
        return a;
      }
    }
  }
  return -1;
}
function pa(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    (e[t] = n == null ? "" : typeof n != "number" || yf.test(t) ? n : `${n}px`);
  }
}
function zr(e, t, n, r, o) {
  let s;
  let a;
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
            pa(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!r || n[t] != r[t]) {
            pa(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    (s = t != (t = t.replace(Dl, "$1")));
    (a = t.toLowerCase());

    (t = a in e || t == "onFocusOut" || t == "onFocusIn"
      ? a.slice(2)
      : t.slice(2));

    if (!e.l) {
      (e.l = {});
    }

    (e.l[t + s] = n);

    if (n) {
      if (r) {
        (n[yr] = r[yr]);
      } else {
        (n[yr] = vi);
        e.addEventListener(t, s ? Ms : $s, s);
      }
    } else {
      e.removeEventListener(t, s ? Ms : $s, s);
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
function ha(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t[po] == null) {
        t[po] = vi++;
      } else if (t[po] < n[yr]) {
        return;
      }
      return n(oe.event ? oe.event(t) : t);
    }
  };
}
function wi(e, t, n, r, o, s, a, c, l, u) {
  let d;
  let p;
  let f;
  let h;
  let m;
  let g;
  let v;
  let _;
  let S;
  let y;
  let C;
  let b;
  let w;
  let T;
  let I;
  let N;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & n.__u) {
    (l = !!(32 & n.__u));
    (s = [(c = t.__e = n.__e)]);
  }

  if ((d = oe.__b)) {
    d(t);
  }

  e: if (typeof t_type == "function") {
    p = a.length;
    try {
      (S = t.props);
      (y = t_type.prototype && t_type.prototype.render);
      (C = (d = t_type.contextType) && r[d.__c]);
      (b = d ? (C ? C.props.value : d.__) : r);

      if (n.__c) {
        (_ = (f = t.__c = n.__c).__ = f.__E);
      } else {
        y
              ? (t.__c = f = new t_type(S, b))
              : ((t.__c = f = new at(S, b)),
                (f.constructor = t_type),
                (f.render = Nf));

        C && C.sub(f);
        f.state || (f.state = {});
        (f.__n = r);
        (h = f.__d = true);
        (f.__h = []);
        (f._sb = []);
      }

      if (y && f.__s == null) {
        (f.__s = f.state);
      }

      if (y &&
        t_type.getDerivedStateFromProps != null) {
        f.__s == f.state && (f.__s = Ct({}, f.__s));
        Ct(f.__s, t_type.getDerivedStateFromProps(S, f.__s));
      }

      (m = f.props);
      (g = f.state);
      (f.__v = t);

      if (h) {
        if (y &&
          t_type.getDerivedStateFromProps == null &&
          f.componentWillMount != null) {
          f.componentWillMount();
        }

        if (y && f.componentDidMount != null) {
          f.__h.push(f.componentDidMount);
        }
      } else {
        if (y &&
            t_type.getDerivedStateFromProps == null &&
            S !== m &&
            f.componentWillReceiveProps != null) {
          f.componentWillReceiveProps(S, b);
        }

        if (t.__v == n.__v ||
          (!f.__e &&
            f.shouldComponentUpdate != null &&
            f.shouldComponentUpdate(S, f.__s, b) === false)) {
          if (t.__v != n.__v) {
            (f.props = S);
            (f.state = f.__s);
            (f.__d = false);
          }

          (t.__e = n.__e);
          (t.__k = n.__k);

          t.__k.some(A => {
            if (A) {
              (A.__ = t);
            }
          });

          Co.push.apply(f.__h, f._sb);
          (f._sb = []);

          if (f.__h.length) {
            a.push(f);
          }

          (c = Nn(n));
          break e;
        }

        if (f.componentWillUpdate != null) {
          f.componentWillUpdate(S, f.__s, b);
        }

        if (y &&
          f.componentDidUpdate != null) {
          f.__h.push(() => {
            f.componentDidUpdate(m, g, v);
          });
        }
      }

      (f.context = b);
      (f.props = S);
      (f.__P = e);
      (f.__e = false);
      (w = oe.__r);
      (T = 0);

      if (y) {
        (f.state = f.__s);
        (f.__d = false);

        if (w) {
          w(t);
        }

        (d = f.render(f.props, f.state, f.context));
        Co.push.apply(f.__h, f._sb);
        (f._sb = []);
      } else {
        do {
          (f.__d = false);

          if (w) {
            w(t);
          }

          (d = f.render(f.props, f.state, f.context));
          (f.state = f.__s);
        } while (f.__d && ++T < 25);
      }

      (f.state = f.__s);

      if (f.getChildContext != null) {
        (r = Ct(Ct({}, r), f.getChildContext()));
      }

      if (y &&
        !h &&
        f.getSnapshotBeforeUpdate != null) {
        (v = f.getSnapshotBeforeUpdate(m, g));
      }

      (I = d != null && d.type === Ne && d.key == null
        ? jl(d.props.children)
        : d);

      (c = Bl(e, Array_isArray(I) ? I : [I], t, n, r, o, s, a, c, l, u));
      (f.base = t.__e);
      (t.__u &= -161);

      if (f.__h.length) {
        a.push(f);
      }

      if (_) {
        (f.__E = f.__ = null);
      }
    } catch (A) {
      (a.length = p);
      (t.__v = null);

      if (l || s != null) {
        if (A.then) {
          for (t.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) {
            c = c.nextSibling;
          }

          if (s != null) {
            (s[s.indexOf(c)] = null);
          }

          (t.__e = c);
        } else if (s != null) {
          for (N = s.length; N--; ) {
            yi(s[N]);
          }
        }
      } else {
        t.__e = n.__e;
      }

      if (t.__k == null) {
        (t.__k = n.__k || []);
      }

      if (!A.then) {
        Vl(t);
      }

      oe.__e(A, t, n);
    }
  } else {
    if (s == null && t.__v == n.__v) {
      (t.__k = n.__k);
      (t.__e = n.__e);
    } else {
      (c = t.__e = Cf(n.__e, t, n, r, o, s, a, l, u));
    }
  }

  if ((d = oe.diffed)) {
    d(t);
  }

  return 128 & t.__u ? undefined : c;
}
function Vl(e) {
  if (e) {
    e.__c && (e.__c.__e = true);
    e.__k && e.__k.some(Vl);
  }
}
function Wl(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    Ei(n[r], n[++r], n[++r]);
  }

  if (oe.__c) {
    oe.__c(t, e);
  }

  e.some(o => {
    try {
      (e = o.__h);
      (o.__h = []);

      e.some(s => {
        s.call(o);
      });
    } catch (s) {
      oe.__e(s, o.__v);
    }
  });
}
function jl(e) {
  return typeof e != "object" || e == null || e.__b > 0
    ? e
    : Array_isArray(e)
    ? e.map(jl)
    : e.constructor !== undefined
    ? null
    : Ct({}, e);
}
function Cf(e, t, n, r, o, s, a, c, l) {
  let u;
  let d;
  let p;
  let f;
  let h;
  let m;
  let g;
  let v = n.props || So;

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
      oe.__m && oe.__m(t, s);
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
      : s && Lr.call(e.childNodes));

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
        zr(e, u, null, h, o);
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
        (m = h);
        break;
      case "checked":
        (g = h);
        break;
      default:
        zr(e, u, h, v[u], o);
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

      Bl(
        t.type == "template" ? e.content : e,
        Array_isArray(f) ? f : [f],
        t,
        n,
        r,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
        s,
        a,
        s ? s[0] : n.__k && Nn(n, 0),
        c,
        l
      );

      if (s != null) {
        for (u = s.length; u--; ) {
          yi(s[u]);
        }
      }
    }

    if (!c || type == "textarea") {
      (u = "value");

      type == "progress" && m == null
        ? e.removeAttribute("value")
        : m != null &&
          (m !== e[u] ||
            (type == "progress" && !m) ||
            (type == "option" && m != v[u])) &&
          zr(e, u, m, v[u], o);

      (u = "checked");
      g != null && g != e[u] && zr(e, u, g, v[u], o);
    }
  }
  return e;
}
function Ei(e, t, n) {
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
    oe.__e(o, n);
  }
}
function zl(e, t, n) {
  let r;
  let o;

  if (oe.unmount) {
    oe.unmount(e);
  }

  if ((r = e.ref)) {
    if (!r.current || r.current == e.__e) {
      Ei(r, null, t);
    }
  }

  if ((r = e.__c) != null) {
    if (r.componentWillUnmount) {
      try {
        r.componentWillUnmount();
      } catch (s) {
        oe.__e(s, t);
      }
    }
    r.base = null;
    r.__P = null;
    r.__n = null;
  }

  if ((r = e.__k)) {
    for (o = 0; o < r.length; o++) {
      if (r[o]) {
        zl(r[o], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    yi(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function Nf(e, t, n) {
  return this.constructor(e, n);
}
function Nr(e, t, n) {
  let r;
  let o;
  let s;
  let a;

  if (t == document) {
    (t = document.documentElement);
  }

  if (oe.__) {
    oe.__(e, t);
  }

  (o = (r = typeof n == "function") ? null : (n && n.__k) || t.__k);
  (s = []);
  (a = []);

  wi(
    t,
    (e = ((!r && n) || t).__k = ht(Ne, null, [e])),
    o || So,
    So,
    t.namespaceURI,
    !r && n ? [n] : o ? null : t.firstChild ? Lr.call(t.childNodes) : null,
    s,
    !r && n ? n : o ? o.__e : t.firstChild,
    r,
    a
  );

  Wl(s, e, a);
  (e.props.children = null);
}
function ql(e, t) {
  Nr(e, t, ql);
}
function Gl(e, t, n) {
  let r;
  let o;
  let s;
  let a;
  const c = Ct({}, e.props);

  if (e.type && e.type.defaultProps) {
    (a = e.type.defaultProps);
  }

  for (s in t) {
    if (s == "key") {
      (r = t[s]);
    } else if (s == "ref") {
      (o = t[s]);
    } else {
      (c[s] = t[s] === undefined && a != null ? a[s] : t[s]);
    }
  }

  if (arguments.length > 2) {
    (c.children = arguments.length > 3 ? Lr.call(arguments, 2) : n);
  }

  return wr(e.type, c, r || e.key, o || e.ref, null);
}
function qn(e) {
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
          r.forEach(a => {
            (a.__e = true);
            Ds(a);
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
  (t.__c = `__cC${Ul++}`);
  (t.__ = e);
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, r) => n.children(r)).contextType = t;

  return t;
}
(Lr = Co.slice);

(oe = {
    __e(e, t, n, r) {
      let o;
      let s;
      let a;

      while ((t = t.__)) {
        if ((o = t.__c) && !o.__) {
          try {
            if ((s = o.constructor) &&
                s.getDerivedStateFromError != null) {
              o.setState(s.getDerivedStateFromError(e));
              (a = o.__d);
            }

            if (o.componentDidCatch != null) {
              o.componentDidCatch(e, r || {});
              (a = o.__d);
            }

            if (a) {
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

(xl = 0);

(at.prototype.render = Ne);
(Zt = []);

($l = typeof Promise == "function"
  ? Promise.prototype.then.bind(Promise.resolve())
  : setTimeout);

(Ml = (e, t) => e.__v.__b - t.__v.__b);

(No.__r = 0);
(es = Math.random().toString(8));
(po = `__d${es}`);
(yr = `__a${es}`);
(Dl = /(PointerCapture)$|Capture$/i);
(vi = 0);
($s = ha(false));
(Ms = ha(true));
(Ul = 0);
let Tf = 0;
function i(e, t, n, r, o, s) {
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
    __v: --Tf,
    __i: -1,
    __u: 0,
    __source: o,
    __self: s,
  };
  if (typeof e == "function" && (a = e.defaultProps)) {
    for (c in a) {
      if (l[c] === undefined) {
        (l[c] = a[c]);
      }
    }
  }

  if (oe.vnode) {
    oe.vnode(u);
  }

  return u;
}
const re = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const me = globalThis;
const En = "10.71.0";
function Do() {
  Uo(me);
  return me;
}
function Uo(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  (t.version = t.version || En);
  (t[En] = t[En] || {});
  return t[En];
}
function Gn(e, t, n = me) {
  const r = (n.__SENTRY__ = n.__SENTRY__ || {});
  const o = (r[En] = r[En] || {});
  return o[e] || (o[e] = t());
}
const If = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const kf = "Sentry Logger ";
const To = {};
function Yn(e) {
  if (!("console" in me)) {
    return e();
  }
  const me_console = me.console;
  const n = {};
  const r = Object.keys(To);
  r.forEach((o) => {
    const To_o = To[o];
    (n[o] = me_console[o]);
    (me_console[o] = To_o);
  });
  try {
    return e();
  } finally {
    r.forEach((o) => {
      me_console[o] = n[o];
    });
  }
}
function Rf() {
  Si().enabled = true;
}
function Af() {
  Si().enabled = false;
}
function Yl() {
  return Si().enabled;
}
function Of(...e) {
  bi("log", ...e);
}
function Lf(...e) {
  bi("warn", ...e);
}
function Pf(...e) {
  bi("error", ...e);
}
function bi(e, ...t) {
  if (re &&
    Yl()) {
    Yn(() => {
      me.console[e](`${kf}[${e}]:`, ...t);
    });
  }
}
function Si() {
  return re ? Gn("loggerSettings", () => ({
    enabled: false
  })) : { enabled: false };
}

const K = {
    enable: Rf,
    disable: Af,
    isEnabled: Yl,
    log: Of,
    warn: Lf,
    error: Pf,
  };

const Kl = 50;
const Tn = "?";
const ma = /\(error: (.*)\)/;
const ga = /captureMessage|captureException/;
function Xl(...e) {
  const t = e.sort((n, r) => n[0] - r[0]).map(n => n[1]);
  return (n, r = 0, o = 0) => {
    const s = [];

    const a = n.split(`
`);

    for (let c = r; c < a.length; c++) {
      let a_c = a[c];

      if (a_c.length > 1024) {
        (a_c = a_c.slice(0, 1024));
      }

      const u = ma.test(a_c) ? a_c.replace(ma, "$1") : a_c;
      if (!u.includes("Error: ")) {
        for (const d of t) {
          const p = d(u);
          if (p) {
            s.push(p);
            break;
          }
        }
        if (s.length >= Kl + o) {
          break;
        }
      }
    }
    return $f(s.slice(o));
  };
}
function xf(e) {
  return Array.isArray(e) ? Xl(...e) : e;
}
function $f(e) {
  if (!e.length) {
    return [];
  }
  const t = Array.from(e);

  if (/sentryWrapped/.test(qr(t).function || "")) {
    t.pop();
  }

  t.reverse();

  if (ga.test(qr(t).function || "")) {
    t.pop();
    ga.test(qr(t).function || "") && t.pop();
  }

  return t
    .slice(0, Kl)
    .map(n => ({
    ...n,
    filename: n.filename || qr(t).filename,
    function: n.function || Tn
  }));
}
function qr(e) {
  return e[e.length - 1] || {};
}
const ts = "<anonymous>";
function en(e) {
  try {
    return !e || typeof e != "function" ? ts : e.name || ts;
  } catch {
    return ts;
  }
}
function _a(e) {
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
const fr = {};
const va = {};
function Rn(e, t) {
  (fr[e] = fr[e] || []);
  fr[e].push(t);

  return () => {
    const fr_e = fr[e];
    if (fr_e) {
      const r = fr_e.indexOf(t);

      if (r !== -1) {
        fr_e.splice(r, 1);
      }
    }
  };
}
function An(e, t) {
  if (!va[e]) {
    va[e] = true;
    try {
      t();
    } catch (n) {
      if (re) {
        K.error(`Error while instrumenting ${e}`, n);
      }
    }
  }
}
function pt(e, t) {
  const n = e && fr[e];
  if (n) {
    for (const r of n) {
      try {
        r(t);
      } catch (o) {
        if (re) {
          K.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${en(r)}
Error:`,
            o
          );
        }
      }
    }
  }
}
let ns = null;
function Mf(e) {
  const t = "error";
  Rn(t, e);
  An(t, Df);
}
function Df(...args) {
  (ns = me.onerror);

  (me.onerror = function (e, t, n, r, o) {
    pt("error", { column: r, error: o, line: n, msg: e, url: t });
    return ns ? ns.apply(this, args) : false;
  });

  (me.onerror.__SENTRY_INSTRUMENTED__ = true);
}
let rs = null;
function Uf(e) {
  const t = "unhandledrejection";
  Rn(t, e);
  An(t, Ff);
}
function Ff(...args) {
  (rs = me.onunhandledrejection);

  (me.onunhandledrejection = function (e) {
    pt("unhandledrejection", e);
    return rs ? rs.apply(this, args) : true;
  });

  (me.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true);
}
const Zl = Object.prototype.toString;
function It(e) {
  switch (Zl.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      {
        return true;
      }
    default:
      {
        return Ni(e, Error);
      }
  }
}
function Kn(e, t) {
  return Zl.call(e) === `[object ${t}]`;
}
function Ql(e) {
  return Kn(e, "ErrorEvent");
}
function ya(e) {
  return Kn(e, "DOMError");
}
function Bf(e) {
  return Kn(e, "DOMException");
}
function Bt(e) {
  return Kn(e, "String");
}
function Ci(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function xr(e) {
  return (
    e === null || Ci(e) || (typeof e != "object" && typeof e != "function")
  );
}
function Tr(e) {
  return Kn(e, "Object");
}
function Fo(e) {
  return typeof e == "object" && e !== null;
}
function Bo(e) {
  return typeof Event !== "undefined" && Ni(e, Event);
}
function Hf(e) {
  return Kn(e, "RegExp");
}
function $r(e) {
  return !!(e?.then && typeof e.then == "function");
}
function Ni(e, t) {
  try {
    return e instanceof t;
  } catch {
    return false;
  }
}
function Jl(e) {
  return typeof Request !== "undefined" && Ni(e, Request);
}
function tt(e, t, n) {
  if (!(t in e)) {
    return;
  }
  const e_t = e[t];
  if (typeof e_t != "function") {
    return;
  }
  const o = n(e_t);

  if (typeof o == "function") {
    eu(o, e_t);
  }

  try {
    e[t] = o;
  } catch {
    if (re) {
      K.log(`Failed to replace method "${t}" in object`, e);
    }
  }
}
function tn(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: true, configurable: true });
  } catch {
    if (re) {
      K.log(
        `Failed to add non-enumerable property "${String(t)}" to object`,
        e
      );
    }
  }
}
function eu(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = n;
    t.prototype = n;
    tn(e, "__sentry_original__", t);
  } catch {}
}
function Ti(e) {
  return e.__sentry_original__;
}
function tu(e) {
  if (It(e)) {
    return { message: e.message, name: e.name, stack: e.stack, ...wa(e) };
  }
  if (Bo(e)) {
    const { type, target, currentTarget, detail } = e;
    return {
      type: type,
      target: target,
      currentTarget: currentTarget,
      ...(detail ? { detail: detail } : {}),
      ...wa(e),
    };
  }
  return e;
}
function wa(e) {
  return Fo(e) ? Object.fromEntries(Object.entries(e)) : {};
}
function Vf(e) {
  const t = Object.keys(tu(e));
  t.sort();
  return t[0] ? t.join(", ") : "[object has no keys]";
}
let On;
function Ho(e) {
  if (On !== undefined) {
    return On ? On(e) : e();
  }
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const n = me;
  return t in n && typeof n[t] == "function"
    ? ((On = n[t]), On(e))
    : ((On = null), e());
}
function Io() {
  return Ho(() => Math.random());
}
function Xn() {
  return Ho(() => Date.now());
}
const Wf = Symbol.for("sentry.skipNormalization");
const jf = Symbol.for("sentry.overrideNormalizationDepth");
function zf(e) {
  return !!e[Wf];
}
function qf(e) {
  const e_jf = e[jf];
  return typeof e_jf == "number" ? e_jf : undefined;
}
let Us;
function nu(e) {
  Us = e;
}
function xt(e, t = 100, n = Infinity) {
  try {
    return Fs("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function ru(e, t = 3, n = 100 * 1024) {
  const r = xt(e, t);
  return Kf(r) > n ? ru(e, t - 1, n) : r;
}
function Fs(e, t, n = Infinity, r = Infinity, o = Xf()) {
  const [s, a] = o;
  if (t == null ||
  ["boolean", "string"].includes(typeof t) ||
  (typeof t == "number" && Number.isFinite(t))) {
    return t;
  }
  const c = ou(e, t);
  if (!c.startsWith("[object ")) {
    return c;
  }
  if (zf(t)) {
    return t;
  }
  const l = qf(t);
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
      const m = d.toJSON();
      return Fs("", m, u - 1, r, o);
    } catch {}
  }
  const p = Array.isArray(t) ? [] : {};
  let f = 0;
  const h = tu(t);
  for (const m in h) {
    if (!Object.prototype.hasOwnProperty.call(h, m)) {
      continue;
    }
    if (f >= r) {
      p[m] = "[MaxProperties ~]";
      break;
    }
    const h_m = h[m];
    (p[m] = Fs(m, h_m, u - 1, r, o));
    f++;
  }
  a(t);
  return p;
}
function ou(e, t) {
  try {
    if (Us) {
      const r = Us(t);
      if (r) {
        return r;
      }
    }
    return typeof global !== "undefined" && t === global
      ? "[Global]"
      : typeof t == "number" && !Number.isFinite(t)
      ? `[${t}]`
      : typeof t == "function"
      ? `[Function: ${en(t)}]`
      : typeof t == "symbol"
      ? `[${String(t)}]`
      : typeof t == "bigint"
      ? `[BigInt: ${String(t)}]`
      : `[object ${Gf(t)}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function Gf(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function Yf(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function Kf(e) {
  return Yf(JSON.stringify(e));
}
function Xf() {
  const e = new WeakSet();
  function t(r) {
    return e.has(r) ? true : (e.add(r), false);
  }
  function n(r) {
    e.delete(r);
  }
  return [t, n];
}
function Bs(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function Ea(e, t) {
  if (!Array.isArray(e)) {
    return "";
  }
  const n = [];

  for (const o of e) {
    if (xr(o)) {
      n.push(String(o));
    } else if (o instanceof Error) {
      n.push(o.message ? `${o.name}: ${o.message}` : o.name);
    } else {
      n.push(ou(undefined, o));
    }
  }

  return n.join(t);
}
function Er(e, t, n = false) {
  return Bt(e)
    ? Hf(t)
      ? t.test(e)
      : Bt(t)
      ? n
        ? e === t
        : e.includes(t)
      : typeof t == "function"
      ? t(e)
      : false
    : false;
}
function Mr(e, t = [], n = false) {
  for (const r of t) {
    if (Er(e, r, n)) {
      return true;
    }
  }
  return false;
}
function Zf() {
  const e = me;
  return e.crypto || e.msCrypto;
}
let os;
function Qf() {
  return Io() * 16;
}
function ct(e = Zf()) {
  try {
    if (e?.randomUUID) {
      return Ho(() => e.randomUUID()).replace(/-/g, "");
    }
  } catch {}

  if (!os) {
    (os = `10000000100040008000${100000000000/* 1e11 */}`);
  }

  return os.replace(/[018]/g, t => (t ^ ((Qf() & 15) >> (t / 4))).toString(16));
}
function su(e) {
  return e.exception?.values?.[0];
}
function gn(e) {
  const { message, event_id } = e;
  if (message) {
    return message;
  }
  const r = su(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || event_id || "<unknown>"
    : event_id || "<unknown>";
}
function Hs(e, t, n) {
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
function bn(e, t) {
  const n = su(e);
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
function ba(e) {
  if (Jf(e)) {
    return true;
  }
  try {
    tn(e, "__sentry_captured__", true);
  } catch {}
  return false;
}
function Jf(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
const iu = 1000/* 1e3 */;
function Dr() {
  return Xn() / iu;
}
function ep() {
  const { performance } = me;
  if (!performance?.now || !performance.timeOrigin) {
    return Dr;
  }
  const e_timeOrigin = performance.timeOrigin;
  return () => (e_timeOrigin + Ho(() => performance.now())) / iu;
}
let Sa;
function Ht() {
  return (Sa ?? (Sa = ep()))();
}
function tp(e) {
  const t = Ht();

  const n = {
    sid: ct(),
    init: true,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => rp(n),
  };

  if (e) {
    Hn(n, e);
  }

  return n;
}
function Hn(e, t = {}) {
  if (t.user) {
    !e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address);

    !e.did &&
      !t.did &&
      (e.did = t.user.id || t.user.email || t.user.username);
  }

  (e.timestamp = t.timestamp || Ht());

  if (t.abnormal_mechanism) {
    (e.abnormal_mechanism = t.abnormal_mechanism);
  }

  if (t.ignoreDuration) {
    (e.ignoreDuration = t.ignoreDuration);
  }

  if (t.sid) {
    (e.sid = t.sid.length === 32 ? t.sid : ct());
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
function np(e, t) {
  let n = {};

  if (e.status === "ok") {
    (n = { status: "exited" });
  }

  Hn(e, n);
}
function rp(e) {
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
function Ur(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0) {
    return t;
  }
  if (e && Object.keys(t).length === 0) {
    return e;
  }
  const r = { ...e };
  for (const o in t) {
    if (Object.prototype.hasOwnProperty.call(t, o)) {
      (r[o] = Ur(r[o], t[o], n - 1));
    }
  }
  return r;
}
function Ca() {
  return ct();
}
function au() {
  return ct().substring(16);
}
function op(e) {
  try {
    const me_WeakRef = me.WeakRef;
    if (typeof me_WeakRef == "function") {
      return new me_WeakRef(e);
    }
  } catch {}
  return e;
}
function cu(e) {
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
const Vs = "_sentrySpan";
function Na(e, t) {
  if (t) {
    tn(e, Vs, op(t));
  } else {
    delete e[Vs];
  }
}
function Ta(e) {
  return cu(e[Vs]);
}
const sp = 100;
class kt {
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
    (this._propagationContext = { traceId: Ca(), sampleRand: Io() });
  }
  clone() {
    const t = new kt();
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
    Na(t, Ta(this));
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
      Hn(this._session, { user: t });
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
    const r = n instanceof kt ? n.getScopeData() : Tr(n) ? t : undefined;

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
    Na(this, undefined);
    (this._attachments = []);
    this.setPropagationContext({ traceId: Ca(), sampleRand: Io() });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : sp;
    if (r <= 0) {
      return this;
    }
    const o = {
      timestamp: Dr(),
      ...t,
      message: t.message ? Bs(t.message, 2048) : t.message,
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
      span: Ta(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(t) {
    (this._sdkProcessingMetadata = Ur(this._sdkProcessingMetadata, t, 2));
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
    const r = n?.event_id || ct();
    if (!this._client) {
      if (re) {
        K.warn("No client configured on scope - will not capture exception!");
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
    const o = r?.event_id || ct();
    if (!this._client) {
      if (re) {
        K.warn("No client configured on scope - will not capture message!");
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
    const r = t.event_id || n?.event_id || ct();
    return this._client
      ? (this._client.captureEvent(t, { ...n, event_id: r }, this), r)
      : (re &&
          K.warn("No client configured on scope - will not capture event!"),
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
function ip() {
  return Gn("defaultCurrentScope", () => new kt());
}
function ap() {
  return Gn("defaultIsolationScope", () => new kt());
}

const Ia = e => e instanceof Promise && !e[lu];

const lu = Symbol("chained PromiseLike");

const cp = (e, t, n) => {
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
  return Ia(r) && Ia(e) ? r : lp(e, r);
};

const lp = (e, t) => {
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
    Object.assign(t, { [lu]: true });
  }

  return t;
};

class up {
  constructor(t, n) {
    let r;

    if (t) {
      (r = t);
    } else {
      (r = new kt());
    }

    let o;

    if (n) {
      (o = n);
    } else {
      (o = new kt());
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
    return $r(r)
      ? cp(
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
function Vn() {
  const e = Do();
  const t = Uo(e);
  return (t.stack = t.stack || new up(ip(), ap()));
}
function dp(e) {
  return Vn().withScope(e);
}
function fp(e, t) {
  const n = Vn();
  return n.withScope(() => {
    (n.getStackTop().scope = e);
    return t(e);
  });
}
function ka(e) {
  return Vn().withScope(() => e(Vn().getIsolationScope()));
}
function pp() {
  return {
    withIsolationScope: ka,
    withScope: dp,
    withSetScope: fp,
    withSetIsolationScope: (e, t) => ka(t),
    getCurrentScope: () => Vn().getScope(),
    getIsolationScope: () => Vn().getIsolationScope(),
  };
}
function Ii(e) {
  const t = Uo(e);
  return t.acs ? t.acs : pp();
}
function hp(e) {
  return (
    typeof e == "object" &&
    e != null &&
    !Array.isArray(e) &&
    Object.keys(e).includes("value")
  );
}
function mp(e, t) {
  const { value, unit } = hp(e) ? e : { value: e, unit: undefined };
  const o = gp(value);
  const s = unit && typeof unit == "string" ? { unit: unit } : {};
  if (o) {
    return { ...o, ...s };
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
function Ra(e, t = false) {
  const n = {};
  for (const [r, o] of Object.entries(e ?? {})) {
    const s = mp(o, t);

    if (s) {
      (n[r] = s);
    }
  }
  return n;
}
function gp(e) {
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
function Rt() {
  const e = Do();
  return Ii(e).getCurrentScope();
}
function At() {
  const e = Do();
  return Ii(e).getIsolationScope();
}
function _p() {
  return Gn("globalScope", () => new kt());
}
function uu(...e) {
  const t = Do();
  const n = Ii(t);
  if (e.length === 2) {
    const [r, o] = e;
    return r ? n.withSetScope(r, o) : n.withScope(o);
  }
  return n.withScope(e[0]);
}
function Ue() {
  return Rt().getClient();
}
function vp(e) {
  const { traceId, parentSpanId, propagationSpanId } = e.getPropagationContext();
  const s = { trace_id: traceId, span_id: propagationSpanId || au() };

  if (parentSpanId) {
    (s.parent_span_id = parentSpanId);
  }

  return s;
}
const yp = "sentry.source";
const wp = "sentry.sample_rate";
const Ep = "sentry.previous_trace_sample_rate";
const du = "sentry.op";
const bp = "sentry.origin";
const fu = "sentry.profile_id";
const pu = "sentry.exclusive_time";
const Sp = "gen_ai.conversation.id";
const Cp = 0;
const Np = 1;
const Tp = "_sentryScope";
const Ip = "_sentryIsolationScope";
function Ws(e) {
  const t = e;
  return { scope: t[Tp], isolationScope: cu(t[Ip]) };
}
const Aa = "sentry-";
function kp(e) {
  const t = Rp(e);
  if (!t) {
    return;
  }
  const n = Object.entries(t).reduce((r, [o, s]) => {
    if (o.startsWith(Aa)) {
      const a = o.slice(Aa.length);
      r[a] = s;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function Rp(e) {
  if (!(!e || (!Bt(e) && !Array.isArray(e)))) {
    return Array.isArray(e)
      ? e.reduce((t, n) => {
      const r = Oa(n);

      Object.entries(r).forEach(([o, s]) => {
        t[o] = s;
      });

      return t;
    }, {})
      : Oa(e);
  }
}
function Oa(e) {
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
const Ap = /^o(\d+)\./;

const Op =
  /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function Lp(e) {
  return e === "http" || e === "https";
}
function Zn(e, t = false) {
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
function Pp(e) {
  const t = Op.exec(e);
  if (!t) {
    Yn(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [n, r, o = "", s = "", a = "", c = ""] = t.slice(1);
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

  return hu({
    host: s,
    pass: o,
    path: l,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: r,
  });
}
function hu(e) {
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
function xp(e) {
  if (!re) {
    return true;
  }
  const { port, projectId, protocol } = e;
  return ["protocol", "publicKey", "host", "projectId"].find(a => e[a] ? false : (K.error(`Invalid Sentry Dsn: ${a} missing`), true)
  )
    ? false
    : projectId.match(/^\d+$/)
    ? Lp(protocol)
      ? port && isNaN(parseInt(port, 10))
        ? (K.error(`Invalid Sentry Dsn: Invalid port ${port}`), false)
        : true
      : (K.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`), false)
    : (K.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`), false);
}
function $p(e) {
  return e.match(Ap)?.[1];
}
function Mp(e) {
  const t = e.getOptions();
  const { host } = e.getDsn() || {};
  let r;

  if (t.orgId) {
    (r = String(t.orgId));
  } else if (host) {
    (r = $p(host));
  }

  return r;
}
function mu(e) {
  const t = typeof e == "string" ? Pp(e) : hu(e);
  if (!(!t || !xp(t))) {
    return t;
  }
}
function Dp(e) {
  if (typeof e == "boolean") {
    return Number(e);
  }
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) {
    return t;
  }
}
const gu = 1;
function Up(e) {
  const { spanId, traceId, isRemote } = e.spanContext();
  const o = isRemote ? spanId : Vo(e).parent_span_id;
  const s = Ws(e).scope;
  const a = isRemote ? s?.getPropagationContext().propagationSpanId || au() : spanId;
  return { parent_span_id: o, span_id: a, trace_id: traceId };
}
function Fp(e) {
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
        sampled: r === gu,
        attributes: s,
        ...o
      })
    );
  }
}
function Pa(e) {
  if (typeof e == "number") {
    return xa(e);
  }

  if (Array.isArray(e)) {
    return e[0] + e[1] / 1000000000/* 1e9 */;
  }

  if (e instanceof Date) {
    return xa(e.getTime());
  }

  return Ht();
}
function xa(e) {
  return e > 9999999999 ? e / 1000/* 1e3 */ : e;
}
function Vo(e) {
  if (Wp(e)) {
    return e.getSpanJSON();
  }
  const { spanId, traceId } = e.spanContext();
  if (Vp(e)) {
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
      parent_span_id: Bp(e),
      start_timestamp: Pa(startTime),
      timestamp: Pa(endTime) || undefined,
      status: zp(status),
      op: attributes[du],
      origin: attributes[bp],
      links: Fp(links),
    };
  }
  return { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
}
function Bp(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
    ? e.parentSpanContext?.spanId
    : undefined;
}
function Hp(e) {
  return {
    ...e,
    attributes: Ra(e.attributes),
    links: e.links?.map(t => ({
      ...t,
      attributes: Ra(t.attributes)
    })),
  };
}
function Vp(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function Wp(e) {
  return typeof e.getSpanJSON == "function";
}
function jp(e) {
  const { traceFlags } = e.spanContext();
  return traceFlags === gu;
}
function zp(e) {
  if (!(!e || e.code === Cp)) {
    return e.code === Np ? "ok" : e.message || "internal_error";
  }
}
const qp = "_sentryRootSpan";
const _u = Gp;
function Gp(e) {
  return e[qp] || e;
}
function $a() {
  if (!La) {
    Yn(() => {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
        );
      });

    (La = true);
  }
}
function Ma(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const t = e || Ue()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function Da(e) {
  K.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`
  );
}
function Ua(e, t) {
  if (!t?.length) {
    return false;
  }
  for (const n of t) {
    if (Xp(n)) {
      if (e.description && Er(e.description, n)) {
        if (re) {
          Da(e);
        }

        return true;
      }
      continue;
    }
    const r = !!n.attributes && Object.keys(n.attributes).length > 0;
    if (!n.name && !n.op && !r) {
      continue;
    }
    const o = n.name ? e.description && Er(e.description, n.name) : true;
    const s = n.op ? e.op && Er(e.op, n.op) : true;

    const a = n.attributes
      ? Object.entries(n.attributes).every(([c, l]) => Yp(e.attributes?.[c], l)
        )
      : true;

    if (o && s && a) {
      if (re) {
        Da(e);
      }

      return true;
    }
  }
  return false;
}
function Yp(e, t) {
  return typeof e == "string" && (typeof t == "string" || t instanceof RegExp)
    ? Er(e, t)
    : Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e === t;
}
function Kp(e, t) {
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
function Xp(e) {
  return typeof e == "string" || e instanceof RegExp;
}
const Zp = Symbol.for("sentry.nonRecordingSpan");
function Qp(e) {
  return !!e && e[Zp] === true;
}
const ki = "production";
const Jp = "_frozenDsc";
function vu(e, t) {
  const n = t.getOptions();
  const { publicKey } = t.getDsn() || {};

  const o = {
    environment: n.environment || ki,
    release: n.release,
    public_key: publicKey,
    trace_id: e,
    org_id: Mp(t),
  };

  t.emit("createDsc", o);
  return o;
}
function yu(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || vu(n.traceId, e);
}
function eh(e) {
  const t = Ue();
  if (!t) {
    return {};
  }
  const n = _u(e);

  const {
    data,
    description
  } = Vo(n);

  const s = n.spanContext().traceState;
  const a = s?.get("sentry.sample_rate") ?? data[wp] ?? data[Ep];
  function c(v) {
    if ((typeof a == "number" || typeof a == "string")) {
      (v.sample_rate = `${a}`);
    }

    return v;
  }
  const n_Jp = n[Jp];
  if (n_Jp) {
    return c(n_Jp);
  }
  const u = Qp(n);
  const d = u && n.dropReason === "ignored";
  if (u && (!Ma(t.getOptions()) || d)) {
    const v = Ws(n).scope;
    if (v) {
      const _ = { ...yu(t, v) };

      if (d) {
        (_.sampled = "false");
      }

      return c(_);
    }
  }
  const p = s?.get("sentry.dsc");
  const f = p && kp(p);
  if (f) {
    return c(f);
  }
  const h = vu(e.spanContext().traceId, t);
  const m = data[yp] ?? data["sentry.segment.name.source"];

  if (m !== "url" && description) {
    (h.transaction = description);
  }

  if (Ma()) {
    (h.sampled = String(jp(n)));

    (h.sample_rand = s?.get("sentry.sample_rand") ??
    Ws(n).scope?.getPropagationContext().sampleRand.toString());
  }

  c(h);
  t.emit("createDsc", h, n);
  return h;
}
function th(e) {
  return !!e && typeof e == "function" && "_streamed" in e && !!e._streamed;
}
function Qn(e, t = []) {
  return [e, t];
}
function Fa(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function js(e, t) {
  const [, n] = e;
  for (const r of n) {
    const o = r[0].type;
    if (t(r, o)) {
      return true;
    }
  }
  return false;
}
function nh(e, t) {
  return js(e, (n, r) => t.includes(r));
}
function zs(e) {
  const t = Uo(me);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function rh(e) {
  const [t, n] = e;
  let r = JSON.stringify(t);
  function o(s) {
    if (typeof r == "string") {
      (r = typeof s == "string" ? r + s : [zs(r), s]);
    } else {
      r.push(typeof s == "string" ? zs(s) : s);
    }
  }
  for (const s of n) {
    const [a, c] = s;

    o(`
${JSON.stringify(a)}
`);

    if (typeof c == "string" || c instanceof Uint8Array) {
      o(c);
    } else {
      let l;
      try {
        l = JSON.stringify(c);
      } catch {
        l = JSON.stringify(xt(c));
      }
      o(l);
    }
  }
  return typeof r == "string" ? r : oh(r);
}
function oh(e) {
  const t = e.reduce((o, s) => o + s.length, 0);

  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e) {
    n.set(o, r);
    (r += o.length);
  }
  return n;
}
function sh(e) {
  const t = typeof e.data == "string" ? zs(e.data) : e.data;
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
const wu = {
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
function ih(e) {
  return e in wu;
}
function Ba(e) {
  return ih(e) ? wu[e] : e;
}
function Eu(e) {
  if (!e?.sdk) {
    return;
  }
  const { name, version } = e.sdk;
  return { name: name, version: version };
}
function ah(e, t, n, r) {
  const o = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date(Xn()).toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: Zn(r) }),
    ...(o && { trace: o }),
  };
}
function ch(e, t) {
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
function lh(e, t, n, r) {
  const o = Eu(n);

  const s = {
    sent_at: new Date(Xn()).toISOString(),
    ...(o && { sdk: o }),
    ...(!!r && t && { dsn: Zn(t) }),
  };

  const a =
    "aggregates" in e
      ? [{ type: "sessions" }, e]
      : [{ type: "session" }, e.toJSON()];

  return Qn(s, [a]);
}
function uh(e, t, n, r) {
  const o = Eu(n);
  const s = e.type && e.type !== "replay_event" ? e.type : "event";
  ch(e, n?.sdk);
  const a = ah(e, o, r, t);
  delete e.sdkProcessingMetadata;
  return Qn(a, [[{ type: s }, e]]);
}
function dh(e) {
  return e.getOptions().traceLifecycle === "stream";
}
function fh(e, t) {
  const {
    fingerprint,
    span,
    breadcrumbs,
    sdkProcessingMetadata,
  } = t;
  ph(e, t);

  if (span) {
    gh(e, span);
  }

  _h(e, fingerprint);
  hh(e, breadcrumbs);
  mh(e, sdkProcessingMetadata);
}
function Ha(e, t) {
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
  rr(e, "extra", extra);
  rr(e, "tags", tags);
  rr(e, "attributes", attributes);
  rr(e, "user", user);
  rr(e, "contexts", contexts);
  (e.sdkProcessingMetadata = Ur(e.sdkProcessingMetadata, sdkProcessingMetadata, 2));

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
function rr(e, t, n) {
  e[t] = Ur(e[t], n, 1);
}
function bu(e, t) {
  const n = _p().getScopeData();

  if (e) {
    Ha(n, e.getScopeData());
  }

  if (t) {
    Ha(n, t.getScopeData());
  }

  return n;
}
function ph(e, t) {
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
function hh(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : undefined;
}
function mh(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function gh(e, t) {
  (e.contexts = { trace: Up(t), ...e.contexts });

  (e.sdkProcessingMetadata = {
      dynamicSamplingContext: eh(t),
      ...e.sdkProcessingMetadata,
    });

  const n = _u(t);
  const r = Vo(n).description;

  if (r && !e.transaction && e.type === "transaction") {
    (e.transaction = r);
  }
}
function _h(e, t) {
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
const vh = "url.full";
function Su(e, t) {
  const n = e.attributes ?? (e.attributes = {});
  Object.entries(t).forEach(([r, o]) => {
    if (o != null && !(r in n)) {
      (n[r] = o);
    }
  });
}
const ss = 0;
const Va = 1;
const Wa = 2;
function Fr(e) {
  return new Ir((t) => {
    t(e);
  });
}
function Cu(e) {
  return new Ir((t, n) => {
    n(e);
  });
}
class Ir {
  constructor(t) {
    (this._state = ss);
    (this._handlers = []);
    this._runExecutor(t);
  }
  then(t, n) {
    return new Ir((r, o) => {
      this._handlers.push([
        false,
        (s) => {
          if (!t) {
            r(s);
          } else {
            try {
              r(t(s));
            } catch (a) {
              o(a);
            }
          }
        },
        (s) => {
          if (!n) {
            o(s);
          } else {
            try {
              r(n(s));
            } catch (a) {
              o(a);
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
    return new Ir((n, r) => {
      let o;
      let s;
      return this.then(
        (a) => {
          (s = false);
          (o = a);

          if (t) {
            t();
          }
        },
        (a) => {
          (s = true);
          (o = a);

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
    if (this._state === ss) {
      return;
    }
    const t = this._handlers.slice();
    (this._handlers = []);

    t.forEach((n) => {
      if (!n[0]) {
        this._state === Va && n[1](this._value);
        this._state === Wa && n[2](this._value);
        (n[0] = true);
      }
    });
  }
  _runExecutor(t) {
    const n = (s, a) => {
        if (this._state === ss) {
          if ($r(a)) {
            a.then(r, o);
            return;
          }
          (this._state = s);
          (this._value = a);
          this._executeHandlers();
        }
      };

    const r = (s) => {
      n(Va, s);
    };

    const o = (s) => {
      n(Wa, s);
    };

    try {
      t(r, o);
    } catch (s) {
      o(s);
    }
  }
}
function yh(e, t, n, r = 0) {
  try {
    const o = qs(t, n, e, r);
    return $r(o) ? o : Fr(o);
  } catch (o) {
    return Cu(o);
  }
}
function qs(e, t, n, r) {
  const n_r = n[r];
  if (!e || !n_r) {
    return e;
  }
  const s = n_r({ ...e }, t);

  if (re && s === null) {
    K.log(`Event processor "${n_r.id || "?"}" dropped event`);
  }

  return $r(s) ? s.then(a => qs(a, t, n, r + 1)) : qs(s, t, n, r + 1);
}
let cn;
let ja;
let za;
let jt;
function wh(e) {
  const {
    _sentryDebugIds,
    _debugIds
  } = me;

  if (!_sentryDebugIds && !_debugIds) {
    return {};
  }
  const r = _sentryDebugIds ? Object.keys(_sentryDebugIds) : [];
  const o = _debugIds ? Object.keys(_debugIds) : [];
  if (jt && r.length === ja && o.length === za) {
    return jt;
  }
  (ja = r.length);
  (za = o.length);
  (jt = {});

  if (!cn) {
    (cn = {});
  }

  const s = (a, c) => {
    for (const l of a) {
      const c_l = c[l];
      const d = cn?.[l];
      if (d && jt && c_l) {
        (jt[d[0]] = c_l);

        if (cn) {
          (cn[l] = [d[0], c_l]);
        }
      } else if (c_l) {
        const p = e(l);
        for (let f = p.length - 1; f >= 0; f--) {
          const m = p[f]?.filename;
          if (m && jt && cn) {
            (jt[m] = c_l);
            (cn[l] = [m, c_l]);
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

  return jt;
}
function Eh(e, t, n, r, o, s) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000/* 1e3 */ } = e;

  const l = {
    ...t,
    event_id: t.event_id || n.event_id || ct(),
    timestamp: t.timestamp || Dr(),
  };

  const u = n.integrations || e.integrations.map(_ => _.name);

  bh(l, e);
  Nh(l, u);

  if (o) {
    o.emit("applyFrameMetadata", t);
  }

  if (t.type === undefined) {
    Sh(l, e.stackParser);
  }

  const d = Ih(r, n.captureContext);

  if (n.mechanism) {
    bn(l, n.mechanism);
  }

  const p = o ? o.getEventProcessors() : [];
  const f = bu(s, d);
  const h = [...(n.attachments || []), ...f.attachments];

  if (h.length) {
    (n.attachments = h);
  }

  fh(l, f);
  const m = [...p, ...f.eventProcessors];
  return (n.data && n.data.__sentry__ === true ? Fr(l) : yh(m, l, n)).then(
    _ => {
      if (_) {
        Ch(_);
      }

      return typeof normalizeDepth == "number" && normalizeDepth > 0 ? Th(_, normalizeDepth, normalizeMaxBreadth) : _;
    }
  );
}
function bh(e, t) {
  const { environment, release, dist, maxValueLength } = t;
  (e.environment = e.environment || environment || ki);

  if (!e.release && release) {
    (e.release = release);
  }

  if (!e.dist && dist) {
    (e.dist = dist);
  }

  const e_request = e.request;

  if (e_request?.url && maxValueLength) {
    (e_request.url = Bs(e_request.url, maxValueLength));
  }

  if (maxValueLength) {
    e.exception?.values?.forEach((c) => {
      if (c.value) {
        (c.value = Bs(c.value, maxValueLength));
      }
    });
  }
}
function Sh(e, t) {
  const n = wh(t);
  e.exception?.values?.forEach((r) => {
    r.stacktrace?.frames?.forEach((o) => {
      if (o.filename) {
        (o.debug_id = n[o.filename]);
      }
    });
  });
}
function Ch(e) {
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
function Nh(e, t) {
  if (t.length > 0) {
    (e.sdk = e.sdk || {});
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]);
  }
}
function Th(e, t, n) {
  if (!e) {
    return null;
  }
  const r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(o => ({
        ...o,
        ...(o.data && { data: xt(o.data, t, n) })
      })),
    }),
    ...(e.user && { user: xt(e.user, t, n) }),
    ...(e.contexts && { contexts: xt(e.contexts, t, n) }),
    ...(e.extra && { extra: xt(e.extra, t, n) }),
  };

  if (e.contexts?.trace &&
    r.contexts) {
    (r.contexts.trace = e.contexts.trace);

    e.contexts.trace.data &&
      (r.contexts.trace.data = xt(e.contexts.trace.data, t, n));
  }

  if (e.spans) {
    (r.spans = e.spans.map(o => ({
      ...o,
      ...(o.data && { data: xt(o.data, t, n) })
    })));
  }

  if (e.contexts?.flags &&
    r.contexts) {
    (r.contexts.flags = xt(e.contexts.flags, 3, n));
  }

  return r;
}
function Ih(e, t) {
  if (!t) {
    return e;
  }
  const n = e ? e.clone() : new kt();
  n.update(t);
  return n;
}
function kh(e) {
  if (e) {
    return Rh(e) ? { captureContext: e } : Oh(e) ? { captureContext: e } : e;
  }
}
function Rh(e) {
  return e instanceof kt || typeof e == "function";
}
const Ah = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function Oh(e) {
  return Object.keys(e).some(t => Ah.includes(t));
}
function Nu(e, t) {
  return Rt().captureException(e, kh(t));
}
function Tu(e, t) {
  return Rt().captureEvent(e, t);
}
function Lh(e, t) {
  At().setContext(e, t);
}
function qa(e) {
  At().setUser(e);
}
function Ph() {
  return At().lastEventId();
}
function Ga(e) {
  const t = At();
  const { user } = bu(t, Rt());
  const { userAgent } = me.navigator || {};
  const o = tp({ user: user, ...(userAgent && { userAgent: userAgent }), ...e });
  const s = t.getSession();

  if (s?.status === "ok") {
    Hn(s, { status: "exited" });
  }

  Iu();
  t.setSession(o);
  return o;
}
function Iu() {
  const e = At();
  const n = Rt().getSession() || e.getSession();

  if (n) {
    np(n);
  }

  ku();
  e.setSession();
}
function ku() {
  const e = At();
  const t = Ue();
  const n = e.getSession();

  if (n && t) {
    t.captureSession(n);
  }
}
function is(e = false) {
  if (e) {
    Iu();
    return;
  }
  ku();
}
function Ru(e) {
  if (typeof e == "object" && typeof e.unref == "function") {
    e.unref();
  }

  return e;
}
const xh = "7";
function Au(e) {
  const t = e.protocol ? `${e.protocol}:` : "";
  const n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function $h(e) {
  return `${Au(e)}${e.projectId}/envelope/`;
}
function Mh(e, t) {
  const n = { sentry_version: xh };

  if (e.publicKey) {
    (n.sentry_key = e.publicKey);
  }

  if (t) {
    (n.sentry_client = `${t.name}/${t.version}`);
  }

  return new URLSearchParams(n).toString();
}
function Dh(e, t, n) {
  return t || `${$h(e)}?${Mh(e, n)}`;
}
function Uh(e, t) {
  const n = mu(e);
  if (!n) {
    return "";
  }
  const r = `${Au(n)}embed/error-page/`;
  let o = `dsn=${Zn(n)}`;
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
const Ya = [];
function Fh(e) {
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
function Bh(e) {
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
  return Fh(r);
}
function Hh(e, t) {
  const n = {};

  t.forEach((r) => {
    if (r?.beforeSetup) {
      r.beforeSetup(e);
    }
  });

  t.forEach((r) => {
    if (r) {
      Ou(e, r, n);
    }
  });

  return n;
}
function Ka(e, t) {
  for (const n of t) {
    if (n?.afterAllSetup) {
      n.afterAllSetup(e);
    }
  }
}
function Ou(e, t, n) {
  if (n[t.name]) {
    if (re) {
      K.log(`Integration skipped because it was already installed: ${t.name}`);
    }

    return;
  }
  (n[t.name] = t);

  if (!Ya.includes(t.name) &&
    typeof t.setupOnce == "function") {
    t.setupOnce();
    Ya.push(t.name);
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

    const o = Object.assign((s, a) => r(s, a, e), { id: t.name });

    e.addEventProcessor(o);
  }

  ["processSpan", "processSegmentSpan"].forEach((r) => {
    const t_r = t[r];

    if (typeof t_r == "function") {
      e.on(r, s => t_r.call(t, s, e));
    }
  });

  if (re) {
    K.log(`Integration installed: ${t.name}`);
  }
}
function Vh() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function Wh() {
  return "npm";
}
function jh() {
  return (!Vh() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) ===
    "[object process]");
}
function Ri() {
  return typeof window !== "undefined" && (!jh() || zh());
}
function zh() {
  return me.process?.type === "renderer";
}
function qh(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...(Ri() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function Gh(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = Zn(r));
  }

  return Qn(s, [qh(e, o)]);
}
function Yh(e, t) {
  const n = t ?? Kh(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();

  const o = Gh(
    n,
    r._metadata,
    r.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  Lu().set(e, []);
  e.emit("flushLogs");
  e.sendEnvelope(o);
}
function Kh(e) {
  return Lu().get(e);
}
function Lu() {
  return Gn("clientToLogBufferMap", () => new WeakMap());
}
function Xh(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    {
      version: 2,
      ...(Ri() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function Zh(e, t, n, r, o) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && r) {
    (s.dsn = Zn(r));
  }

  return Qn(s, [Xh(e, o)]);
}
function Qh(e, t) {
  const n = t ?? Jh(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const r = e.getOptions();

  const o = Zh(
    n,
    r._metadata,
    r.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  Pu().set(e, []);
  e.emit("flushMetrics");
  e.sendEnvelope(o);
}
function Jh(e) {
  return Pu().get(e);
}
function Pu() {
  return Gn("clientToMetricBufferMap", () => new WeakMap());
}
function em(e) {
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
  return Hp(t);
}
function tm(e, t) {
  if (e.type !== "transaction" ||
  !e.spans?.length ||
  !e.sdkProcessingMetadata?.hasGenAiSpans ||
  t.getOptions().streamGenAiSpans === false ||
  dh(t)) {
    return;
  }
  const n = [];
  const r = [];
  for (const s of e.spans) {
    if (s.op?.startsWith("gen_ai.")) {
      n.push(em(s));
    } else {
      r.push(s);
    }
  }
  if (n.length === 0) {
    return;
  }
  e.spans = r;
  const o = t.getDataCollectionOptions().userInfo ? "auto" : "never";
  return [
    {
      type: "span",
      item_count: n.length,
      content_type: "application/vnd.sentry.items.span.v2+json",
    },
    {
      version: 2,
      ...(Ri() && { ingest_settings: { infer_ip: o, infer_user_agent: o } }),
      items: n,
    },
  ];
}
const Ai = Symbol.for("SentryBufferFullError");
function Oi(e = 100) {
  const t = new Set();
  function n() {
    return t.size < e;
  }
  function r(a) {
    t.delete(a);
  }
  function o(a) {
    if (!n()) {
      return Cu(Ai);
    }
    const c = a();
    t.add(c);

    c.then(
      () => r(c),
      () => r(c)
    );

    return c;
  }
  function s(a) {
    if (!t.size) {
      return Fr(true);
    }
    const c = Promise.allSettled(Array.from(t)).then(() => true);
    if (!a) {
      return c;
    }
    const l = [c, new Promise(u => Ru(setTimeout(() => u(false), a)))];
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
const nm = 60 * 1000/* 1e3 */;
function rm(e, t = Xn()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) {
    return n * 1000/* 1e3 */;
  }
  const r = Date.parse(`${e}`);
  return isNaN(r) ? nm : r - t;
}
function om(e, t) {
  return e[t] || e.all || 0;
}
function sm(e, t, n = Xn()) {
  return om(e, t) > n;
}
function im(e, { statusCode: t, headers: n }, r = Xn()) {
  const o = { ...e };
  const s = n?.["x-sentry-rate-limits"];
  const a = n?.["retry-after"];
  if (s) {
    for (const c of s.trim().split(",")) {
      const [l, u, , , d] = c.split(":", 5);
      const p = parseInt(l, 10);
      const f = (isNaN(p) ? 60 : p) * 1000/* 1e3 */;
      if (!u) {
        o.all = r + f;
      } else {
        for (const h of u.split(";")) {
          if (h === "metric_bucket") {
            if ((!d || d.split(";").includes("custom"))) {
              (o[h] = r + f);
            }
          } else {
            (o[h] = r + f);
          }
        }
      }
    }
  } else {
    if (a) {
      (o.all = r + rm(a, r));
    } else if (t === 429) {
      (o.all = r + 60 * 1000/* 1e3 */);
    }
  }
  return o;
}
const xu = 64;
function am(e, t, n = Oi(e.bufferSize || xu)) {
  let r = {};
  const o = a => n.drain(a);
  function s(a) {
    const c = [];

    js(a, (p, f) => {
      const h = Ba(f);

      if (sm(r, h)) {
        e.recordDroppedEvent("ratelimit_backoff", h);
      } else {
        c.push(p);
      }
    });

    if (c.length === 0) {
      return Promise.resolve({});
    }

    const l = Qn(a[0], c);

    const u = (p) => {
      if (nh(l, ["client_report"])) {
        if (re) {
          K.warn(
            `Dropping client report. Will not send outcomes (reason: ${p}).`
          );
        }

        return;
      }
      js(l, (f, h) => {
        e.recordDroppedEvent(p, Ba(h));
      });
    };

    const d = () => t({ body: rh(l) }).then(
      p => p.statusCode === 413
        ? (re &&
            K.error(
              "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
            ),
          u("send_error"),
          p)
        : (re &&
            p.statusCode !== undefined &&
            (p.statusCode < 200 || p.statusCode >= 300) &&
            K.warn(
              `Sentry responded with status code ${p.statusCode} to sent event.`
            ),
          (r = im(r, p)),
          p),
      (p) => {
        u("network_error");

        if (re) {
          K.error("Encountered error running transport request:", p);
        }

        throw p;
      }
    );

    return n.add(d).then(
      p => p,
      (p) => {
        if (p === Ai) {
          if (re) {
            K.error("Skipped sending event because buffer is full.");
          }

          u("queue_overflow");
          return Promise.resolve({});
        }
        throw p;
      }
    );
  }
  return { send: s, flush: o };
}
function cm(e, t, n) {
  const r = [
    { type: "client_report" },
    { timestamp: Dr(), discarded_events: e },
  ];
  return Qn(t ? { dsn: t } : {}, [r]);
}
function $u(e) {
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
function lm(e) {
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
    profile_id: data?.[fu],
    exclusive_time: data?.[pu],
    measurements: e.measurements,
    is_segment: true,
  };
}
function um(e) {
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
          ...(e.profile_id && { [fu]: e.profile_id }),
          ...(e.exclusive_time && { [pu]: e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
const Gr = ["forwarded", "-ip", "remote-", "via", "-user"];
function dm(e) {
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
        cookies: { deny: Gr },
        httpHeaders: { request: { deny: Gr }, response: { deny: Gr } },
        httpBodies: [],
        urlQueryParams: { deny: Gr },
        graphQL: { document: true, variables: true },
        genAI: { inputs: false, outputs: false },
        databaseQueryData: false,
        stackFrameVariables: true,
        frameContextLines: 7,
      };
}
const fm = {
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
function pm(e) {
  const t = e.dataCollection != null ? fm : dm(e.sendDefaultPii);
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
const Xa = "Not capturing exception because it's already been captured.";
const Za = "Discarded session because of missing or non-string release";
const Mu = Symbol.for("SentryInternalError");
const Du = Symbol.for("SentryDoNotSendEventError");
const hm = 5000/* 5e3 */;
function ho(e) {
  return { message: e, [Mu]: true };
}
function as(e) {
  return { message: e, [Du]: true };
}
function Qa(e) {
  return Fo(e) && Mu in e;
}
function Ja(e) {
  return Fo(e) && Du in e;
}
function ec(e, t, n, r, o) {
  let s = 0;
  let a;
  let c = false;

  e.on(n, () => {
    (s = 0);
    clearTimeout(a);
    (c = false);
  });

  e.on(t, (l) => {
    (s += r(l));

    if (s >= 800000/* 8e5 */) {
      o(e);
    } else if (!c) {
      const u = e.getOptions()._flushInterval ?? hm;

      if (u > 0) {
        (c = true);

        (a = Ru(
            setTimeout(() => {
              o(e);
            }, u)
          ));
      }
    }
  });

  e.on("flush", () => {
    o(e);
  });
}
class mm {
  constructor(t) {
    (this._options = t);
    (this._integrations = {});
    (this._numProcessing = 0);
    (this._outcomes = {});
    (this._hooks = {});
    (this._eventProcessors = []);
    (this._promiseBuffer = Oi(t.transportOptions?.bufferSize ?? xu));
    (this._dataCollection = pm(t));

    if (t.dsn) {
      (this._dsn = mu(t.dsn));
    } else if (re) {
      K.warn("No DSN provided, client will not send events.");
    }

    if (this._dsn) {
      const r = Dh(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : undefined);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: r,
      });
    }

    (this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs ?? true);

    if (this._options.enableLogs) {
      ec(this, "afterCaptureLog", "flushLogs", ym, Yh);
    }

    if ((this._options.enableMetrics ??
      this._options._experiments?.enableMetrics ?? true)) {
      ec(this, "afterCaptureMetric", "flushMetrics", vm, Qh);
    }
  }
  captureException(t, n, r) {
    const o = ct();
    if (ba(t)) {
      if (re) {
        K.log(Xa);
      }

      return o;
    }
    const s = { event_id: o, ...n };

    this._process(
      () => this.eventFromException(t, s)
        .then(a => this._captureEvent(a, s, r))
        .then(a => a),
      "error"
    );

    return s.event_id;
  }
  captureMessage(t, n, r, o) {
    const s = { event_id: ct(), ...r };
    const a = Ci(t) ? t : String(t);
    const c = xr(t);
    const l = c ? this.eventFromMessage(a, n, s) : this.eventFromException(t, s);

    this._process(
      () => l.then(u => this._captureEvent(u, s, o)),
      c ? "unknown" : "error"
    );

    return s.event_id;
  }
  captureEvent(t, n, r) {
    const o = ct();
    if (n?.originalException && ba(n.originalException)) {
      if (re) {
        K.log(Xa);
      }

      return o;
    }
    const s = { event_id: o, ...n };

    const {
      capturedSpanScope,
      capturedSpanIsolationScope
    } = t.sdkProcessingMetadata || {};

    const u = tc(t.type);

    this._process(() => this._captureEvent(t, s, capturedSpanScope || r, capturedSpanIsolationScope), u);

    return s.event_id;
  }
  captureSession(t) {
    this.sendSession(t);
    Hn(t, { init: false });
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

    const r = await this._isClientDoneProcessing(t);
    const o = await n.flush(t);
    return r && o;
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

    Ou(this, t, this._integrations);

    if (!n) {
      Ka(this, [t]);
    }
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    const r = tm(t, this);
    let o = uh(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) {
      o = Fa(o, sh(s));
    }

    if (r) {
      (o = Fa(o, r));
    }

    this.sendEnvelope(o).then(s => this.emit("afterSendEvent", t, s));
  }
  sendSession(t) {
    const { release, environment = ki } = this._options;
    if ("aggregates" in t) {
      const s = t.attrs || {};
      if (!s.release && !release) {
        if (re) {
          K.warn(Za);
        }

        return;
      }
      (s.release = s.release || release);
      (s.environment = s.environment || environment);
      (t.attrs = s);
    } else {
      if (!t.release && !release) {
        if (re) {
          K.warn(Za);
        }

        return;
      }
      (t.release = t.release || release);
      (t.environment = t.environment || environment);
    }
    this.emit("beforeSendSession", t);
    const o = lh(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(o);
  }
  recordDroppedEvent(t, n, r = 1) {
    if (this._options.sendClientReports) {
      const o = `${t}:${n}`;

      if (re) {
        K.log(`Recording outcome: "${o}"${r > 1 ? ` (${r} times)` : ""}`);
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
        if (re) {
          K.error("Error while sending envelope:", n);
        }

        return {};
      }
    }

    if (re) {
      K.error("Transport disabled");
    }

    return {};
  }
  registerCleanup(t) {}
  dispose() {}
  _setupIntegrations() {
    const { integrations } = this._options;
    (this._integrations = Hh(this, integrations));
    Ka(this, integrations);
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
    const a = t.status === "ok";

    if (((a && t.errors === 0) || (a && r))) {
      Hn(t, {
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
    const a = this.getIntegrationNames();

    if (!n.integrations && a.length) {
      (n.integrations = a);
    }

    this.emit("preprocessEvent", t, n);

    if (!t.type) {
      o.setLastEventId(t.event_id || n.event_id);
    }

    return Eh(s, t, n, r, this, o).then((c) => {
      if (c === null) {
        return c;
      }
      this.emit("postprocessEvent", c, n);

      (c.contexts = {
          trace: { ...c.contexts?.trace, ...vp(r) },
          ...c.contexts,
        });

      const l = yu(this, r);

      (c.sdkProcessingMetadata = {
        dynamicSamplingContext: l,
        ...c.sdkProcessingMetadata,
      });

      return c;
    });
  }
  _captureEvent(t, n = {}, r = Rt(), o = At()) {
    if (re &&
      Gs(t)) {
      K.log(`Captured error event \`${$u(t)[0] || "<unknown>"}\``);
    }

    return this._processEvent(t, n, r, o).then(
      s => s.event_id,
      (s) => {
        if (re) {
          if (Ja(s)) {
            K.log(s.message);
          } else if (Qa(s)) {
            K.warn(s.message);
          } else {
            K.warn(s);
          }
        }
      }
    );
  }
  _processEvent(t, n, r, o) {
    const s = this.getOptions();
    const { sampleRate } = s;
    const c = Uu(t);
    const l = Gs(t);
    const d = `before send for type \`${t.type || "error"}\``;
    const p = typeof sampleRate === "undefined" ? undefined : Dp(sampleRate);
    const f = tc(t.type);
    return this._prepareEvent(t, n, r, o)
      .then((h) => {
        if (h === null) {
          this.recordDroppedEvent("event_processor", f);
          throw as("An event processor returned `null`, will not send event.");
        }
        if (n.data?.__sentry__ === true) {
          return h;
        }
        const g = _m(this, s, h, n);
        return gm(g, d);
      })
      .then((h) => {
      if (h === null) {
        this.recordDroppedEvent("before_send", f);

        if (c) {
          const _ = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", _);
        }

        throw as(`${d} returned \`null\`, will not send event.`);
      }
      const m = r.getSession() || o.getSession();

      if (l && m) {
        this._updateSessionFromEvent(m, h);
      }

      if (l && typeof p == "number" && Io() > p) {
        this.recordDroppedEvent("sample_rate", "error");

        throw as(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        );
      }

      if (c) {
        const v = h.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const _ = h.spans ? h.spans.length : 0;
        const S = v - _;

        if (S > 0) {
          this.recordDroppedEvent("before_send", "span", S);
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
        throw Ja(h) || Qa(h)
          ? h
          : (this.captureException(h, {
              mechanism: { handled: false, type: "internal" },
              data: { __sentry__: true },
              originalException: h,
            }),
            ho(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
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

        if (r === Ai) {
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
    if (re) {
      K.log("Flushing outcomes...");
    }

    const t = this._clearOutcomes();
    if (t.length === 0) {
      if (re) {
        K.log("No outcomes to send");
      }

      return;
    }
    if (!this._dsn) {
      if (re) {
        K.log("No dsn provided, will not send outcomes");
      }

      return;
    }

    if (re) {
      K.log("Sending outcomes:", t);
    }

    const n = cm(t, this._options.tunnel && Zn(this._dsn));
    this.sendEnvelope(n);
  }
}
function tc(e) {
  return e === "replay_event" ? "replay" : e || "error";
}
function gm(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if ($r(e)) {
    return e.then(
      (r) => {
        if (!Tr(r) && r !== null) {
          throw ho(n);
        }
        return r;
      },
      (r) => {
        throw ho(`${t} rejected with ${r}`);
      }
    );
  }
  if (!Tr(e) && e !== null) {
    throw ho(n);
  }
  return e;
}
function _m(e, t, n, r) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = t;
  const c = !th(t.beforeSendSpan) && t.beforeSendSpan;
  let l = n;
  if (Gs(l) && beforeSend) {
    return beforeSend(l, r);
  }
  if (Uu(l)) {
    if (c || ignoreSpans) {
      const u = lm(l);
      if (ignoreSpans?.length &&
      Ua({ description: u.description, op: u.op, attributes: u.data }, ignoreSpans)) {
        return null;
      }
      if (c) {
        const d = c(u);

        if (d) {
          (l = Ur(n, um(d)));
        } else {
          $a();
        }
      }
      if (l.spans) {
        const d = [];
        const l_spans = l.spans;
        for (const h of l_spans) {
          if (
            ignoreSpans?.length &&
            Ua({ description: h.description, op: h.op, attributes: h.data }, ignoreSpans)
          ) {
            Kp(l_spans, h);
            continue;
          }
          if (c) {
            const m = c(h);

            if (m) {
              d.push(m);
            } else {
              $a();
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
      return beforeSendTransaction(l, r);
    }
  }
  return l;
}
function Gs(e) {
  return e.type === undefined;
}
function Uu(e) {
  return e.type === "transaction";
}
function vm(e) {
  let t = 0;

  if (e.name) {
    (t += e.name.length * 2);
  }

  (t += 8);
  return t + Fu(e.attributes);
}
function ym(e) {
  let t = 0;

  if (e.message) {
    (t += e.message.length * 2);
  }

  return t + Fu(e.attributes);
}
function Fu(e) {
  if (!e) {
    return 0;
  }
  let t = 0;

  Object.values(e).forEach((n) => {
    if (Array.isArray(n)) {
      (t += n.length * nc(n[0]));
    } else if (xr(n)) {
      (t += nc(n));
    } else {
      (t += 100);
    }
  });

  return t;
}
function nc(e) {
  return typeof e == "string"
    ? e.length * 2
    : typeof e == "number"
    ? 8
    : typeof e == "boolean"
    ? 4
    : 0;
}
function wm(e, t) {
  if (t.debug === true) {
    if (re) {
      K.enable();
    } else {
      Yn(() => {
              console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              );
            });
    }
  }

  Rt().update(t.initialScope);
  const r = new e(t);
  Em(r);
  r.init();
  return r;
}
function Em(e) {
  Rt().setClient(e);
}
function cs(e) {
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
function bm(e, t = true) {
  if (e.startsWith("data:")) {
    const n = e.match(/^data:([^;,]+)/);
    const r = n ? n[1] : "text/plain";
    const o = e.includes(";base64,");
    const s = e.indexOf(",");
    let a = "";
    if (t && s !== -1) {
      const c = e.slice(s + 1);
      a = c.length > 10 ? `${c.slice(0, 10)}... [truncated]` : c;
    }
    return `data:${r}${o ? ",base64" : ""}${a ? `,${a}` : ""}`;
  }
  return e;
}
function Sm(e) {
  if ("aggregates" in e) {
    if (e.attrs?.ip_address === undefined) {
      (e.attrs = { ...e.attrs, ip_address: "{{auto}}" });
    }
  } else if (e.ipAddress === undefined) {
    (e.ipAddress = "{{auto}}");
  }
}
function Bu(e, t, n = [t], r = "npm") {
  const o = ((e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {});

  if (!o.name) {
    (o.name = `sentry.javascript.${t}`);

    (o.packages = n.map(s => ({
      name: `${r}:@sentry/${s}`,
      version: En
    })));

    (o.version = En);
  }
}
const Cm = 100;
function In(e, t) {
  const n = Ue();
  const r = At();
  if (!n) {
    return;
  }
  const { beforeBreadcrumb = null, maxBreadcrumbs = Cm } = n.getOptions();
  if (maxBreadcrumbs <= 0) {
    return;
  }
  const c = { timestamp: Dr(), ...e };

  const l = beforeBreadcrumb ? Yn(() => beforeBreadcrumb(c, t)) : c;

  if (l !== null) {
    n.emit && n.emit("beforeAddBreadcrumb", l, t);
    r.addBreadcrumb(l, maxBreadcrumbs);
  }
}
const Nm = "FunctionToString";
const rc = new WeakMap();

const Im = () => ({
  name: Nm,

  setupOnce() {
    const e = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const n = Ti(this);
        let r;
        try {
          if (rc.has(Ue()) && n !== undefined) {
            (r = n);
          }
        } catch {}
        return e.apply(r ?? this, t);
      };
    } catch {}
  },

  setup(e) {
    rc.set(e, true);
  }
});

const km = [
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

const Rm = "EventFilters";

const Am = (e = {}) => {
  let t;
  return {
    name: Rm,
    setup(n) {
      const r = n.getOptions();
      t = oc(e, r);
    },
    processEvent(n, r, o) {
      if (!t) {
        const s = o.getOptions();
        t = oc(e, s);
      }
      return Lm(n, t) ? null : n;
    },
  };
};

const Om = (e = {}) => ({
  ...Am(e),
  name: "InboundFilters"
});

function oc(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : km),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function Lm(e, t) {
  if (e.type) {
    if (e.type === "transaction" && xm(e, t.ignoreTransactions)) {
      if (re) {
        K.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${gn(e)}`);
      }

      return true;
    }
  } else {
    if (Pm(e, t.ignoreErrors)) {
      if (re) {
        K.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${gn(e)}`);
      }

      return true;
    }
    if (Um(e)) {
      if (re) {
        K.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${gn(e)}`);
      }

      return true;
    }
    if ($m(e, t.denyUrls)) {
      if (re) {
        K.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${gn(e)}.
Url: ${ko(e)}`);
      }

      return true;
    }
    if (!Mm(e, t.allowUrls)) {
      if (re) {
        K.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${gn(e)}.
Url: ${ko(e)}`);
      }

      return true;
    }
  }
  return false;
}
function Pm(e, t) {
  return t?.length ? $u(e).some(n => Mr(n, t)) : false;
}
function xm(e, t) {
  if (!t?.length) {
    return false;
  }
  const e_transaction = e.transaction;
  return e_transaction ? Mr(e_transaction, t) : false;
}
function $m(e, t) {
  if (!t?.length) {
    return false;
  }
  const n = ko(e);
  return n ? Mr(n, t) : false;
}
function Mm(e, t) {
  if (!t?.length) {
    return true;
  }
  const n = ko(e);
  return n ? Mr(n, t) : true;
}
function Dm(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const e_t = e[t];
    if (e_t && e_t.filename !== "<anonymous>" && e_t.filename !== "[native code]") {
      return e_t.filename || null;
    }
  }
  return null;
}
function ko(e) {
  try {
    const n = [...(e.exception?.values ?? [])]
      .reverse()
      .find(
        r => r.mechanism?.parent_id === undefined && r.stacktrace?.frames?.length
      )?.stacktrace?.frames;
    return n ? Dm(n) : null;
  } catch {
    if (re) {
      K.error(`Cannot extract url for event ${gn(e)}`);
    }

    return null;
  }
}
function Um(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          t => t.stacktrace || (t.type && t.type !== "Error") || t.value
        )
    : false;
}
function Fm(e, t, n, r, o, s) {
  if (!o.exception?.values || !s || !It(s.originalException)) {
    return;
  }
  const a =
    o.exception.values.length > 0
      ? o.exception.values[o.exception.values.length - 1]
      : undefined;

  if (a) {
    (o.exception.values = Ys(
        e,
        t,
        r,
        s.originalException,
        n,
        o.exception.values,
        a,
        0
      ));
  }
}
function Ys(e, t, n, r, o, s, a, c) {
  if (s.length >= n + 1) {
    return s;
  }
  let l = [...s];
  if (It(r[o])) {
    sc(a, c, r);
    const u = e(t, r[o]);
    const l_length = l.length;
    ic(u, o, l_length, c);
    (l = Ys(e, t, n, r[o], o, [u, ...l], u, l_length));
  }

  if (Hu(r)) {
    r.errors.forEach((u, d) => {
      if (It(u)) {
        sc(a, c, r);
        const p = e(t, u);
        const l_length = l.length;
        ic(p, `errors[${d}]`, l_length, c);
        (l = Ys(e, t, n, u, o, [p, ...l], p, l_length));
      }
    });
  }

  return l;
}
function Hu(e) {
  return Array.isArray(e.errors);
}
function sc(e, t, n) {
  e.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...(Hu(n) && { is_exception_group: true }),
    ...e.mechanism,
    exception_id: t,
  };
}
function ic(e, t, n, r) {
  e.mechanism = {
    handled: true,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: r,
  };
}
function Bm(e) {
  return (
    It(e) &&
    "__sentry_fetch_url_host__" in e &&
    typeof e.__sentry_fetch_url_host__ == "string"
  );
}
function ac(e) {
  return Bm(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
}
const cc = new Set([]);
function Hm(e) {
  const t = "console";
  const n = Rn(t, e);
  An(t, Vm);
  return n;
}
const lc = new Set();
function Vm() {
  if ("console" in me) {
    If.forEach(e => {
      if (!lc.has(e) && (e in me.console)) {
        lc.add(e);

        tt(me.console, e, t => {
          (To[e] = t);

          return (...n) => {
            const [r] = n;
            const To_e = To[e];
            const s = cc.size && typeof r == "string" && Mr(r, cc);

            if (!s) {
              pt("console", { args: n, level: e });
            }

            if ((!s || (re && K.isEnabled()))) {
              To_e?.apply(me.console, n);
            }
          };
        });
      }
    });
  }
}
function Wm(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
    ? e
    : "log";
}
const jm = "Dedupe";

const qm = () => {
  let e;
  return {
    name: jm,
    processEvent(t) {
      if (t.type) {
        return t;
      }
      try {
        if (Gm(t, e)) {
          if (re) {
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

function Gm(e, t) {
  return t ? !!(Ym(e, t) || Km(e, t)) : false;
}
function Ym(e, t) {
  const e_message = e.message;
  const t_message = t.message;
  return !(
    (!e_message && !t_message) ||
    (e_message && !t_message) ||
    (!e_message && t_message) ||
    e_message !== t_message ||
    !Wu(e, t) ||
    !Vu(e, t)
  );
}
function Km(e, t) {
  const n = uc(t);
  const r = uc(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !Wu(e, t) ||
    !Vu(e, t)
  );
}
function Vu(e, t) {
  let n = _a(e);
  let r = _a(t);
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
function Wu(e, t) {
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
function uc(e) {
  return e.exception?.values?.[0];
}
const Xm = "ConversationId";

const Qm = () => ({
  name: Xm,

  setup(e) {
    e.on("spanStart", (t) => {
      const n = Rt().getScopeData();
      const r = At().getScopeData();
      const o = n.conversationId || r.conversationId;
      if (o) {
        const { op: op_1, data, description } = Vo(t);
        if (!op_1?.startsWith("gen_ai.") &&
        !data["ai.operationId"] &&
        !description?.startsWith("ai.")) {
          return;
        }
        t.setAttribute(Sp, o);
      }
    });
  }
});

function ju(e) {
  if (e !== undefined) {
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : undefined;
  }
}
const kr = me;
function Jm() {
  return "history" in kr && !!kr.history;
}
function eg() {
  if (!("fetch" in kr)) {
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
function Ks(e) {
  return (e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString()));
}
function tg() {
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!eg()) {
    return false;
  }
  if (Ks(kr.fetch)) {
    return true;
  }
  let e = false;
  const kr_document = kr.document;
  if (kr_document && typeof kr_document.createElement == "function") {
    try {
      const n = kr_document.createElement("iframe");
      (n.hidden = true);
      kr_document.head.appendChild(n);

      if (n.contentWindow?.fetch) {
        (e = Ks(n.contentWindow.fetch));
      }

      kr_document.head.removeChild(n);
    } catch (n) {
      if (re) {
        K.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
      }
    }
  }
  return e;
}
function ng(e, t) {
  const n = "fetch";
  const r = Rn(n, e);

  An(n, () => rg(undefined, t));

  return r;
}
function rg(e, t = false) {
  if (!t || tg()) {
    tt(me, "fetch", n => (...r) => {
      const o = new Error();
      const { method, url } = og(r);

      const c = {
        args: r,
        fetchData: { method: method, url: url },
        startTimestamp: Ht() * 1000/* 1e3 */,
        virtualError: o,
        headers: sg(r),
      };

      pt("fetch", { ...c });

      return n.apply(me, r).then(
        async l => {
          pt("fetch", { ...c, endTimestamp: Ht() * 1000/* 1e3 */, response: l });
          return l;
        },
        (l) => {
          pt("fetch", { ...c, endTimestamp: Ht() * 1000/* 1e3 */, error: l });

          if (It(l) &&
            l.stack === undefined) {
            (l.stack = o.stack);
            tn(l, "framesToPop", 1);
          }

          const d =
            Ue()?.getOptions().enhanceFetchErrorMessages ?? "always";
          if (d !== false &&
          It(l) &&
          l.name === "TypeError" &&
          (l.message === "Failed to fetch" ||
            l.message === "Load failed" ||
            l.message ===
              "NetworkError when attempting to fetch resource.")) {
            try {
              const h = new URL(c.fetchData.url).host;

              if (d === "always") {
                (l.message = `${l.message} (${h})`);
              } else {
                tn(l, "__sentry_fetch_url_host__", h);
              }
            } catch {}
          }
          throw l;
        }
      );
    });
  }
}
function mo(e, t) {
  return Fo(e) && !!e[t];
}
function dc(e) {
  return typeof e == "string"
    ? e
    : e
    ? mo(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function og(e) {
  if (e.length === 0) {
    return { method: "GET", url: "" };
  }
  if (e.length === 2) {
    const [n, r] = e;
    return {
      url: dc(n),
      method: mo(r, "method")
        ? String(r.method).toUpperCase()
        : Jl(n) && mo(n, "method")
        ? String(n.method).toUpperCase()
        : "GET",
    };
  }
  const [t] = e;
  return {
    url: dc(t),
    method: mo(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function sg(e) {
  const [t, n] = e;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (Jl(t)) {
      return new Headers(t.headers);
    }
  } catch {}
}
const zu = me;
function Li() {
  try {
    return zu.document.location.href;
  } catch {
    return "";
  }
}
function ig(e, t = 5) {
  if (!zu.HTMLElement) {
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
const ye = me;
let Xs = 0;
function qu() {
  return Xs > 0;
}
function ag() {
  Xs++;

  setTimeout(() => {
    Xs--;
  });
}
function Wn(e, t = {}) {
  function n(o) {
    return typeof o == "function";
  }
  if (!n(e)) {
    return e;
  }
  try {
    if (Object.prototype.hasOwnProperty.call(e, "__sentry_wrapped__")) {
      const e_sentry_wrapped = e.__sentry_wrapped__;
      return typeof e_sentry_wrapped == "function" ? e_sentry_wrapped : e;
    }
    if (Ti(e)) {
      return e;
    }
  } catch {
    return e;
  }
  const r = function (...o) {
    me._sentryWrappedDepth = (me._sentryWrappedDepth || 0) + 1;
    try {
      const s = o.map(a => Wn(a, t));
      return e.apply(this, s);
    } catch (s) {
      ag();

      uu((a) => {
        a.addEventProcessor(
          c => {
            if (t.mechanism) {
              Hs(c, undefined);
              bn(c, t.mechanism);
            }

            (c.extra = { ...c.extra, arguments: o });
            return c;
          }
        );

        Nu(s);
      });

      throw s;
    } finally {
      me._sentryWrappedDepth = (me._sentryWrappedDepth || 0) - 1;
    }
  };
  try {
    for (const o in e) {
      if (Object.prototype.hasOwnProperty.call(e, o)) {
        (r[o] = e[o]);
      }
    }
  } catch {}
  eu(r, e);
  tn(e, "__sentry_wrapped__", r);
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
function fc() {
  const e = Li();
  const { referrer } = ye.document || {};
  const { userAgent } = ye.navigator || {};
  const r = { ...(referrer && { Referer: referrer }), ...(userAgent && { "User-Agent": userAgent }) };
  return { url: e, headers: r };
}
function Pi(e, t) {
  const n = Wo(e, t);
  const r = { type: fg(t), value: pg(t) };

  if (n.length) {
    (r.stacktrace = { frames: n });
  }

  if (r.type === undefined &&
    r.value === "") {
    (r.value = "Unrecoverable error caught");
  }

  return r;
}
function cg(e, t, n, r) {
  const s = Ue()?.getOptions().normalizeDepth;
  const a = vg(t);
  const c = { __serialized__: ru(t, s) };
  if (a) {
    return { exception: { values: [Pi(e, a)] }, extra: c };
  }
  const l = {
    exception: {
      values: [
        {
          type: Bo(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
          value: gg(t, { isUnhandledRejection: r }),
        },
      ],
    },
    extra: c,
  };
  if (n) {
    const u = Wo(e, n);

    if (u.length) {
      (l.exception.values[0].stacktrace = { frames: u });
    }
  }
  return l;
}
function ls(e, t) {
  return { exception: { values: [Pi(e, t)] } };
}
function Wo(e, t) {
  const n = t.stacktrace || t.stack || "";
  const r = ug(t);
  const o = dg(t);
  try {
    return e(n, r, o);
  } catch {}
  return [];
}
const lg = /Minified React error #\d+;/i;
function ug(e) {
  return e && lg.test(e.message) ? 1 : 0;
}
function dg(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function Gu(e) {
  return typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined"
    ? e instanceof WebAssembly.Exception
    : false;
}
function fg(e) {
  const t = e?.name;
  return !t && Gu(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function pg(e) {
  const t = e?.message;
  return Gu(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : "wasm exception"
    : t
    ? t.error && typeof t.error.message == "string"
      ? ac(t.error)
      : ac(e)
    : "No error message";
}
function hg(e, t, n, r) {
  const o = n?.syntheticException || undefined;
  const s = xi(e, t, o, r);
  bn(s);
  (s.level = "error");

  if (n?.event_id) {
    (s.event_id = n.event_id);
  }

  return Fr(s);
}
function mg(e, t, n = "info", r, o) {
  const s = r?.syntheticException || undefined;
  const a = Zs(e, t, s, o);
  (a.level = n);

  if (r?.event_id) {
    (a.event_id = r.event_id);
  }

  return Fr(a);
}
function xi(e, t, n, r, o) {
  let s;
  if (Ql(t) && t.error) {
    return ls(e, t.error);
  }
  if (ya(t) || Bf(t)) {
    const a = t;
    if ("stack" in t) {
      s = ls(e, t);
      const c = s.exception?.values?.[0];
      if (r && n && c && !c.stacktrace) {
        const l = Wo(e, n);

        if (l.length) {
          (c.stacktrace = { frames: l });
          bn(s, { synthetic: true });
        }
      }
    } else {
      const c = a.name || (ya(a) ? "DOMError" : "DOMException");
      const l = a.message ? `${c}: ${a.message}` : c;
      (s = Zs(e, l, n, r));
      Hs(s, l);
    }

    if ("code" in a) {
      (s.tags = { ...s.tags, "DOMException.code": `${a.code}` });
    }

    return s;
  }

  if (It(t)) {
    return ls(e, t);
  }

  if (Tr(t) || Bo(t)) {
    (s = cg(e, t, n, o));
    bn(s, { synthetic: true });
    return s;
  }

  (s = Zs(e, t, n, r));
  Hs(s, `${t}`);
  bn(s, { synthetic: true });
  return s;
}
function Zs(e, t, n, r) {
  const o = {};
  if (r && n) {
    const s = Wo(e, n);

    if (s.length) {
      (o.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
    }

    bn(o, { synthetic: true });
  }
  if (Ci(t)) {
    const { __sentry_template_string__, __sentry_template_values__ } = t;
    (o.logentry = { message: __sentry_template_string__, params: __sentry_template_values__ });
    return o;
  }
  (o.message = t);
  return o;
}
function gg(e, { isUnhandledRejection: t }) {
  const n = Vf(e);
  const r = t ? "promise rejection" : "exception";
  return Ql(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : Bo(e)
    ? `Event \`${_g(e)}\` (type=${e.type}) captured as ${r}`
    : `Object captured as ${r} with keys: ${n}`;
}
function _g(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : undefined;
  } catch {}
}
function vg(e) {
  return Object.values(e).find(It);
}
class yg extends mm {
  constructor(t) {
    const n = wg(t);
    const r = ye.SENTRY_SDK_SOURCE || Wh();
    Bu(n, "browser", ["browser"], r);
    super(n);
    const { userInfo } = this.getDataCollectionOptions();

    if (n._metadata?.sdk) {
      (n._metadata.sdk.settings = {
          infer_ip: userInfo ? "auto" : "never",
          ...n._metadata.sdk.settings,
        });
    }

    const { sendClientReports } = this._options;

    if (ye.document) {
      ye.document.addEventListener("visibilitychange", () => {
        if (ye.document.visibilityState === "hidden") {
          sendClientReports && this._flushOutcomes();

          queueMicrotask(() => {
            this.flush();
          });
        }
      });
    }

    if (userInfo) {
      this.on("beforeSendSession", Sm);
    }
  }
  eventFromException(t, n) {
    return hg(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", r) {
    return mg(
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
function wg(e) {
  return {
    release:
      typeof __SENTRY_RELEASE__ == "string"
        ? __SENTRY_RELEASE__
        : ye.SENTRY_RELEASE?.id,
    sendClientReports: true,
    parentSpanIsAlwaysRootSpan: true,
    ...e,
  };
}
const Eg = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Oe = me;
function pc(e, t, n) {
  if (Oe.document) {
    Oe.addEventListener(e, t, n);
  }
}
function hc(e, t, n) {
  if (Oe.document) {
    Oe.removeEventListener(e, t, n);
  }
}

const bg = (e) => {
  return () => {
    if (!t) {
      e();
      (t = true);
    }
  };
};

const Sg = (e) => {
  const t = Oe.requestIdleCallback || Oe.setTimeout;

  if (Oe.document?.visibilityState === "hidden") {
    e();
  } else {
    (e = bg(e));
    pc("visibilitychange", e, { once: true, capture: true });
    pc("pagehide", e, { once: true, capture: true });

    t(() => {
      e();
      hc("visibilitychange", e, { capture: true });
      hc("pagehide", e, { capture: true });
    });
  }
};

const Cg = 80;
const pn = {};
try {
  if (typeof Node !== "undefined") {
    (pn.parentNode = Object.getOwnPropertyDescriptor(
        Node.prototype,
        "parentNode"
      ).get);
  }

  if (typeof Element !== "undefined") {
    (pn.tagName = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "tagName"
      ).get);

    (pn.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get);

    (pn.className = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "className"
      ).get);

    (pn.getAttribute = Element.prototype.getAttribute);
  }

  if (typeof HTMLElement !== "undefined") {
    (pn.dataset = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        "dataset"
      ).get);
  }
} catch {}
function Yt(e, t, n) {
  const pn_t = pn[t];
  if (pn_t) {
    try {
      return pn_t.call(e, n);
    } catch {}
  }
  const e_t = e[t];
  return typeof e_t == "function" ? e_t.call(e, n) : e_t;
}
function Yu(e, t = {}) {
  if (!e) {
    return "<unknown>";
  }
  try {
    let n = e;
    const r = 5;
    const o = [];
    let s = 0;
    let a = 0;
    const c = " > ";
    const c_length = c.length;
    let u;
    const d = Array.isArray(t) ? t : t.keyAttrs;
    const p = (!Array.isArray(t) && t.maxStringLength) || Cg;

    while (n &&
         s++ < r &&
         ((u = Ng(n, d)),
         !(u === "html" || (s > 1 && a + o.length * c_length + u.length >= p)))) {
      o.push(u);
      (a += u.length);
      (n = Yt(n, "parentNode"));
    }

    return o.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function Ng(e, t) {
  const n = [];
  const r = Yt(e, "tagName");
  if (!r) {
    return "";
  }
  if (typeof HTMLElement !== "undefined" && e instanceof HTMLElement) {
    const s = Yt(e, "dataset");
    if (s) {
      if (s.sentryComponent) {
        return s.sentryComponent;
      }
      if (s.sentryElement) {
        return s.sentryElement;
      }
    }
  }
  n.push(r.toLowerCase());
  const o = t?.length
    ? t
        .filter(s => Yt(e, "getAttribute", s))
        .map(s => [s, Yt(e, "getAttribute", s)])
    : null;
  if (o?.length) {
    o.forEach((s) => {
      n.push(`[${s[0]}="${s[1]}"]`);
    });
  } else {
    const s = Yt(e, "id");

    if (s) {
      n.push(`#${s}`);
    }

    const a = Yt(e, "className");
    if (a && Bt(a)) {
      const c = a.split(/\s+/);
      for (const l of c) {
        n.push(`.${l}`);
      }
    }
  }
  for (const s of ["aria-label", "type", "name", "title", "alt"]) {
    const a = Yt(e, "getAttribute", s);

    if (a) {
      n.push(`[${s}="${a}"]`);
    }
  }
  return n.join("");
}
const Tg = 1000/* 1e3 */;
let mc;
let Qs;
let Js;
function Ig(e) {
  Rn("dom", e);
  An("dom", kg);
}
function kg() {
  if (!Oe.document) {
    return;
  }
  const e = pt.bind(null, "dom");
  const t = gc(e, true);
  Oe.document.addEventListener("click", t, false);
  Oe.document.addEventListener("keypress", t, false);

  ["EventTarget", "Node"].forEach((n) => {
    const o = Oe[n]?.prototype;

    if (o?.hasOwnProperty?.("addEventListener")) {
      tt(o, "addEventListener", s => (function(a, c, l) {
        if (a === "click" || a == "keypress") {
          try {
            const u = (this.__sentry_instrumentation_handlers__ =
                this.__sentry_instrumentation_handlers__ || {});

            const d = (u[a] = u[a] || { refCount: 0 });
            if (!d.handler) {
              const p = gc(e);
              (d.handler = p);
              s.call(this, a, p, l);
            }
            d.refCount++;
          } catch {}
        }
        return s.call(this, a, c, l);
      }));

      tt(o, "removeEventListener", s => (function(a, c, l) {
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
function Rg(e) {
  if (e.type !== Qs) {
    return false;
  }
  try {
    if (!e.target || e.target._sentryId !== Js) {
      return false;
    }
  } catch {}
  return true;
}
function Ag(e, t) {
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
function gc(e, t = false) {
  return (n) => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const r = Og(n);
    if (Ag(n.type, r)) {
      return;
    }
    tn(n, "_sentryCaptured", true);

    if (r && !r._sentryId) {
      tn(r, "_sentryId", ct());
    }

    const o = n.type === "keypress" ? "input" : n.type;

    if (!Rg(n)) {
      e({ event: n, name: o, global: t });
      (Qs = n.type);
      (Js = r ? r._sentryId : undefined);
    }

    clearTimeout(mc);

    (mc = Oe.setTimeout(() => {
      (Js = undefined);
      (Qs = undefined);
    }, Tg));
  };
}
function Og(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let Yr;
function Ku(e) {
  const t = "history";
  Rn(t, e);
  An(t, Lg);
}
function Lg() {
  Oe.addEventListener("popstate", () => {
    const t = Oe.location.href;
    const n = Yr;
    (Yr = t);

    if (n === t) {
      return;
    }

    pt("history", { from: n, to: t });
  });

  if (!Jm()) {
    return;
  }

  class e {
    constructor(t) {
      return function (...n) {
        const r = n.length > 2 ? n[2] : undefined;
        if (r) {
          const o = Yr;
          const s = Pg(String(r));
          (Yr = s);

          if (o === s) {
            return t.apply(this, n);
          }

          pt("history", { from: o, to: s });
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

  tt(Oe.history, "pushState", e);
  tt(Oe.history, "replaceState", e);
}
function Pg(e) {
  try {
    return new URL(e, Oe.location.origin).toString();
  } catch {
    return e;
  }
}
const go = {};
function xg(e) {
  const go_e = go[e];
  if (go_e) {
    return go_e;
  }
  let n = Oe[e];
  if (Ks(n)) {
    return (go[e] = n.bind(Oe));
  }
  const {
    document
  } = Oe;
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
      if (Eg) {
        K.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          o
        );
      }
    }
  }
  return n && (go[e] = n.bind(Oe));
}
function $g(e) {
  go[e] = undefined;
}
const pr = "__sentry_xhr_v3__";
function Mg(e) {
  Rn("xhr", e);
  An("xhr", Dg);
}
function Dg() {
  if (!Oe.XMLHttpRequest) {
    return;
  }
  const XMLHttpRequest_prototype = XMLHttpRequest.prototype;

  (XMLHttpRequest_prototype.open = new Proxy(XMLHttpRequest_prototype.open, {
    apply(t, n, r) {
      const o = new Error();
      const s = Ht() * 1000/* 1e3 */;
      const a = Bt(r[0]) ? r[0].toUpperCase() : undefined;
      const c = Ug(r[1]);
      if (!a || !c) {
        return t.apply(n, r);
      }
      (n[pr] = { method: a, url: c, request_headers: {} });

      if (a === "POST" &&
        c.match(/sentry_key/)) {
        (n.__sentry_own_request__ = true);
      }

      const l = () => {
        const n_pr = n[pr];
        if (n_pr && n.readyState === 4) {
          try {
            n_pr.status_code = n.status;
          } catch {}
          const d = {
            endTimestamp: Ht() * 1000/* 1e3 */,
            startTimestamp: s,
            xhr: n,
            virtualError: o,
          };
          pt("xhr", d);
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
          const d_pr = d[pr];

          if (d_pr && Bt(f) && Bt(h)) {
            (d_pr.request_headers[f.toLowerCase()] = h);
          }

          return u.apply(d, p);
        },
      }));

      return t.apply(n, r);
    },
  }));

  (XMLHttpRequest_prototype.send = new Proxy(XMLHttpRequest_prototype.send, {
      apply(t, n, r) {
        const n_pr = n[pr];
        if (!n_pr) {
          return t.apply(n, r);
        }

        if (r[0] !== undefined) {
          (n_pr.body = r[0]);
        }

        const s = { startTimestamp: Ht() * 1000/* 1e3 */, xhr: n };
        pt("xhr", s);
        return t.apply(n, r);
      },
    }));
}
function Ug(e) {
  if (Bt(e)) {
    return e;
  }
  try {
    return e.toString();
  } catch {}
}
function Fg(e) {
  if (typeof Element === "undefined") {
    return false;
  }
  try {
    return e instanceof Element;
  } catch {
    return false;
  }
}
const Bg = 40;
function Hg(e, t = xg("fetch")) {
  let n = 0;
  let r = 0;
  async function o(s) {
    const a = s.body.length;
    (n += a);
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
      $g("fetch");
      throw l;
    } finally {
      (n -= a);
      r--;
    }
  }
  return am(e, o, Oi(e.bufferSize || Bg));
}
const jn = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Vg = 30;
const Wg = 50;
function ei(e, t, n, r) {
  const o = { filename: e, function: t === "<anonymous>" ? Tn : t, in_app: true };

  if (n !== undefined) {
    (o.lineno = n);
  }

  if (r !== undefined) {
    (o.colno = r);
  }

  return o;
}
const jg = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;

const zg =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const qg = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const Gg = /at (.+?) ?\(data:(.+?),/;

const Yg = (e) => {
  const t = e.match(Gg);
  if (t) {
    return { filename: `<data:${t[2]}>`, function: t[1] };
  }
  const n = jg.exec(e);
  if (n) {
    const [, o, s, a] = n;
    return ei(o, Tn, Number(s), Number(a));
  }
  const r = zg.exec(e);
  if (r) {
    if (r[2]?.indexOf("eval") === 0) {
      const c = qg.exec(r[2]);

      if (c) {
        (r[2] = c[1]);
        (r[3] = c[2]);
        (r[4] = c[3]);
      }
    }
    const [s, a] = Xu(r[1] || Tn, r[2]);
    return ei(a, s, r[3] ? +r[3] : undefined, r[4] ? +r[4] : undefined);
  }
};

const Kg = [Vg, Yg];

const Xg =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;

const Zg = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

const Qg = (e) => {
  const t = Xg.exec(e);
  if (t) {
    if (t[3] && t[3].includes(" > eval")) {
      const s = Zg.exec(t[3]);

      if (s) {
        (t[1] = t[1] || "eval");
        (t[3] = s[1]);
        (t[4] = s[2]);
        (t[5] = "");
      }
    }
    let [,,, r] = t;
    let o = t[1] || Tn;
    ([o, r] = Xu(o, r));
    return ei(r, o, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
  }
};

const Jg = [Wg, Qg];
const e_ = [Kg, Jg];
const t_ = Xl(...e_);

const Xu = (e, t) => {
  const n = e.includes("safari-extension");
  const r = e.includes("safari-web-extension");
  return n || r
    ? [
        e.includes("@") ? e.split("@")[0] : Tn,
        n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
      ]
    : [e, t];
};

const Kr = 1024;
const n_ = "Breadcrumbs";

const o_ = (e = {}) => {
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
    name: n_,
    setup(n) {
      if (t.console) {
        Hm(a_(n));
      }

      if (t.dom) {
        Ig(i_(n, t.dom));
      }

      if (t.xhr) {
        Mg(c_(n));
      }

      if (t.fetch) {
        ng(l_(n));
      }

      if (t.history) {
        Ku(u_(n));
      }

      if (t.sentry) {
        n.on("beforeSendEvent", s_(n));
      }
    },
  };
};

function s_(e) {
  return n => {
    if (Ue() === e) {
      In(
        {
          category: `sentry.${
            n.type === "transaction" ? "transaction" : "event"
          }`,
          event_id: n.event_id,
          level: n.level,
          message: gn(n),
        },
        { event: n }
      );
    }
  };
}
function i_(e, t) {
  return r => {
    if (Ue() !== e) {
      return;
    }
    let o;
    let s;
    let a = typeof t == "object" ? t.serializeAttribute : undefined;

    let c =
      typeof t == "object" && typeof t.maxStringLength == "number"
        ? t.maxStringLength
        : undefined;

    if (c &&
      c > Kr) {
      jn &&
          K.warn(
            `\`dom.maxStringLength\` cannot exceed ${Kr}, but a value of ${c} was configured. Sentry will use ${Kr} instead.`
          );

      (c = Kr);
    }

    if (typeof a == "string") {
      (a = [a]);
    }

    try {
      const r_event = r.event;
      const d = d_(r_event) ? r_event.target : r_event;
      (o = Yu(d, { keyAttrs: a, maxStringLength: c }));
      (s = ig(d));
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

    In(l, { event: r.event, name: r.name, global: r.global });
  };
}
function a_(e) {
  return function (n) {
    if (Ue() !== e) {
      return;
    }
    const r = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: Wm(n.level),
      message: Ea(n.args, " "),
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        (r.message = `Assertion failed: ${
          Ea(n.args.slice(1), " ") || "console.assert"
        }`);

        (r.data.arguments = n.args.slice(1));
      } else {
        return;
      }
    }
    In(r, { input: n.args, level: n.level });
  };
}
function c_(e) {
  return n => {
    if (Ue() !== e) {
      return;
    }
    const { startTimestamp, endTimestamp } = n;
    const s = n.xhr[pr];
    if (!startTimestamp || !endTimestamp || !s) {
      return;
    }
    const { method, url, status_code, body } = s;
    const d = { method: method, url: url, status_code: status_code };
    const p = { xhr: n.xhr, input: body, startTimestamp: startTimestamp, endTimestamp: endTimestamp };
    const f = { category: "xhr", data: d, type: "http", level: ju(status_code) };
    e.emit("beforeOutgoingRequestBreadcrumb", f, p);
    In(f, p);
  };
}
function l_(e) {
  return n => {
    if (Ue() !== e) {
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
        In(a, s);
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
          level: ju(a.status_code),
        };

        e.emit("beforeOutgoingRequestBreadcrumb", l, c);
        In(l, c);
      }
    }
  };
}
function u_(e) {
  return n => {
    if (Ue() !== e) {
      return;
    }

    let {
      from,
      to: to_2
    } = n;

    const s = cs(ye.location.href);
    let a = from ? cs(from) : undefined;
    const c = cs(to_2);

    if (!a?.path) {
      (a = s);
    }

    if (s.protocol === c.protocol && s.host === c.host) {
      (to_2 = c.relative);
    }

    if (s.protocol === a.protocol && s.host === a.host) {
      (from = a.relative);
    }

    In({ category: "navigation", data: { from: from, to: to_2 } });
  };
}
function d_(e) {
  return !!e && !!e.target;
}

const f_ =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ","
    );

const p_ = "BrowserApiErrors";

const m_ = (e = {}) => {
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
    name: p_,
    setupOnce() {
      if (t.setTimeout) {
        tt(ye, "setTimeout", _c);
      }

      if (t.setInterval) {
        tt(ye, "setInterval", _c);
      }

      if (t.requestAnimationFrame) {
        tt(ye, "requestAnimationFrame", g_);
      }

      if (t.XMLHttpRequest &&
        "XMLHttpRequest" in ye) {
        tt(XMLHttpRequest.prototype, "send", __);
      }

      const t_eventTarget = t.eventTarget;

      if (t_eventTarget) {
        (Array.isArray(t_eventTarget) ? t_eventTarget : f_).forEach(o => v_(o, t));
      }
    },
  };
};

function _c(e) {
  return function (...t) {
    const [n] = t;

    (t[0] = Wn(n, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${en(e)}`,
      },
    }));

    return e.apply(this, t);
  };
}
function g_(e) {
  return function (t) {
    return e.apply(this, [
      Wn(t, {
        mechanism: {
          data: { handler: en(e) },
          handled: false,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function __(e) {
  return function (...t) {
    const n = this;

    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((o) => {
      if (o in n &&
        typeof n[o] == "function") {
        tt(n, o, s => {
          const a = {
              mechanism: {
                data: { handler: en(s) },
                handled: false,
                type: `auto.browser.browserapierrors.xhr.${o}`,
              },
            };

          const c = Ti(s);

          if (c) {
            (a.mechanism.data.handler = en(c));
          }

          return Wn(s, a);
        });
      }
    });

    return e.apply(this, t);
  };
}
function v_(e, t) {
  const r = ye[e]?.prototype;

  if (r?.hasOwnProperty?.("addEventListener")) {
    tt(r, "addEventListener", o => (function(s, a, c) {
      try {
        if (y_(a)) {
          (a.handleEvent = Wn(a.handleEvent, {
              mechanism: {
                data: { handler: en(a), target: e },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent",
              },
            }));
        }
      } catch {}

      if (t.unregisterOriginalCallbacks) {
        w_(this, s, a);
      }

      return o.apply(this, [
        s,
        Wn(a, {
          mechanism: {
            data: { handler: en(a), target: e },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener",
          },
        }),
        c,
      ]);
    }));

    tt(r, "removeEventListener", o => (function(s, a, c) {
      try {
        if (Object.prototype.hasOwnProperty.call(a, "__sentry_wrapped__")) {
          const a_sentry_wrapped = a.__sentry_wrapped__;

          if (a_sentry_wrapped) {
            o.call(this, s, a_sentry_wrapped, c);
          }
        }
      } catch {}
      return o.call(this, s, a, c);
    }));
  }
}
function y_(e) {
  return typeof e.handleEvent == "function";
}
function w_(e, t, n) {
  if (e &&
    typeof e == "object" &&
    "removeEventListener" in e &&
    typeof e.removeEventListener == "function") {
    e.removeEventListener(t, n);
  }
}

const E_ = (e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (typeof ye.document === "undefined") {
          if (jn) {
            K.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported."
            );
          }

          return;
        }
        Ga({ ignoreDuration: true });
        let n = false;
        Sg(() => {
          if (!n) {
            is();
            (n = true);
          }
        });
        const r = At();
        let o = r.getUser();

        r.addScopeListener((s) => {
          const a = s.getUser();

          if ((o?.id !== a?.id || o?.ip_address !== a?.ip_address)) {
            (o = a);
            n && is();
          }
        });

        if (t === "route") {
          Ku(({ from: s, to: a }) => {
            if (s !== a) {
              Ga({ ignoreDuration: true });
              is();
              (n = true);
            }
          });
        }
      },
    };
  };

const b_ = "CultureContext";

const C_ = () => ({
  name: b_,

  preprocessEvent(e) {
    const t = vc();

    if (t) {
      (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    }
  },

  processSegmentSpan(e) {
    const t = vc();

    if (t) {
      Su(e, {
        "culture.locale": t.locale,
        "culture.timezone": t.timezone,
        "culture.calendar": t.calendar,
      });
    }
  }
});

function vc() {
  try {
    const ye_Intl = ye.Intl;
    if (!ye_Intl) {
      return;
    }
    const t = ye_Intl.DateTimeFormat().resolvedOptions();
    return { locale: t.locale, timezone: t.timeZone, calendar: t.calendar };
  } catch {
    return;
  }
}
const N_ = "GlobalHandlers";

const I_ = (e = {}) => {
  const t = { onerror: true, onunhandledrejection: true, ...e };
  return {
    name: N_,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (t.onerror) {
        k_(n);
        yc("onerror");
      }

      if (t.onunhandledrejection) {
        R_(n);
        yc("onunhandledrejection");
      }
    },
  };
};

function k_(e) {
  Mf((t) => {
    const { stackParser, attachStacktrace } = Zu();
    if (Ue() !== e || qu()) {
      return;
    }
    const { msg, url, line, column, error } = t;
    const u = L_(xi(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
    (u.level = "error");

    Tu(u, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror",
      },
    });
  });
}
function R_(e) {
  Uf((t) => {
    const { stackParser, attachStacktrace } = Zu();
    if (Ue() !== e || qu()) {
      return;
    }
    const o = A_(t);
    const s = xr(o) ? O_(o) : xi(stackParser, o, undefined, attachStacktrace, true);
    (s.level = "error");

    Tu(s, {
      originalException: o,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection",
      },
    });
  });
}
function A_(e) {
  if (xr(e)) {
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
function O_(e) {
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
function L_(e, t, n, r) {
  const o = (e.exception = e.exception || {});
  const s = (o.values = o.values || []);
  const a = (s[0] = s[0] || {});
  const c = (a.stacktrace = a.stacktrace || {});
  const l = (c.frames = c.frames || []);

  if (l.length === 0) {
    l.push({
      colno: r,
      lineno: n,
      filename: P_(t) ?? Li(),
      function: Tn,
      in_app: true,
    });
  }

  return e;
}
function yc(e) {
  if (jn) {
    K.log(`Global Handler attached: ${e}`);
  }
}
function Zu() {
  return Ue()?.getOptions() || { stackParser: () => [], attachStacktrace: false };
}
function P_(e) {
  if (!(!Bt(e) || e.length === 0)) {
    return e.startsWith("data:") ? `<${bm(e, false)}>` : e;
  }
}

const x_ = () => ({
  name: "HttpContext",

  preprocessEvent(e) {
    if (!ye.navigator && !ye.location && !ye.document) {
      return;
    }
    const t = fc();
    const n = { ...t.headers, ...e.request?.headers };
    e.request = { ...t, ...e.request, headers: n };
  },

  processSegmentSpan(e) {
    const t = e.attributes?.[du];
    if (!ye.navigator && !ye.location && !ye.document) {
      return;
    }
    const n = fc();
    Su(e, {
      [vh]: t !== "http.client" ? n.url : undefined,
      "http.request.header.user_agent": n.headers["User-Agent"],
      "http.request.header.referer": n.headers.Referer,
    });
  }
});

const $_ = "cause";
const M_ = 5;
const D_ = "LinkedErrors";

const F_ = (e = {}) => {
  const t = e.limit || M_;
  const n = e.key || $_;
  return {
    name: D_,
    preprocessEvent(r, o, s) {
      const a = s.getOptions();
      Fm(Pi, a.stackParser, n, t, r, o);
    },
  };
};

const B_ = /^HTML(\w*)Element$/;
function Qu(e) {
  if (typeof window !== "undefined" && e === window) {
    return "[Window]";
  }
  if (typeof document !== "undefined" && e === document) {
    return "[Document]";
  }
  if (Fg(e)) {
    const t = H_(e);
    if (B_.test(t)) {
      return `[HTMLElement: ${Yu(e)}]`;
    }
  }
}
function H_(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function V_() {
  return W_()
    ? (jn &&
        Yn(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
          );
        }),
      true)
    : false;
}
function W_() {
  if (typeof ye.window === "undefined") {
    return false;
  }
  const e = ye;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) {
    return false;
  }
  const n = Li();
  return !(
    ye === ye.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      n
    )
  );
}
function j_(e) {
  return [Om(), Im(), Qm(), m_(), o_(), I_(), F_(), qm(), x_(), C_(), E_()];
}
function z_(e = {}) {
  const t = !e.skipBrowserExtensionCheck && V_();
  let n = e.defaultIntegrations == null ? j_() : e.defaultIntegrations;
  const r = {
    ...e,
    enabled: t ? false : e.enabled,
    stackParser: xf(e.stackParser || t_),
    integrations: Bh({ integrations: e.integrations, defaultIntegrations: n }),
    transport: e.transport || Hg,
  };
  nu(Qu);
  return wm(yg, r);
}
function wc(e = {}) {
  const ye_document = ye.document;
  const n = ye_document?.head || ye_document?.body;
  if (!n) {
    if (jn) {
      K.error("[showReportDialog] Global document not defined");
    }

    return;
  }
  const r = Rt();
  const s = Ue()?.getDsn();
  if (!s) {
    if (jn) {
      K.error("[showReportDialog] DSN not configured");
    }

    return;
  }

  const a = {
      ...e,
      user: { ...r.getUser(), ...e.user },
      eventId: e.eventId || Ph(),
    };

  const c = ye.document.createElement("script");
  (c.async = true);
  (c.crossOrigin = "anonymous");
  (c.src = Uh(s, a));
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
          ye.removeEventListener("message", d);
        }
      }
    };
    ye.addEventListener("message", d);
  }

  n.appendChild(c);
}
let nn;
let Ce;
let us;
let Ec;
let zn = 0;
const Ju = [];
const ke = oe;

const {
  __b,
  __r,
  diffed,
  __c,
  unmount,
  __: __1
} = ke;

function Jn(e, t) {
  if (ke.__h) {
    ke.__h(Ce, e, zn || t);
  }

  (zn = 0);
  const n = Ce.__H || (Ce.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function L(e) {
  (zn = 1);
  return $i(nd, e);
}
function $i(e, t, n) {
  const r = Jn(nn++, 2);
  (r.t = e);

  if (!r.__c &&
    ((r.__ = [
      n ? n(t) : nd(undefined, t),
      c => {
        const l = r.__N ? r.__N[0] : r.__[0];
        const u = r.t(l, c);

        if (l !== u) {
          (r.__N = [u, r.__[1]]);
          r.__c.setState({});
        }
      },
    ]),
    (r.__c = Ce),
    !Ce.__f)) {
    const o = function (c, l, u) {
      if (!r.__c.__H) {
        return true;
      }
      let d = false;
      let p = r.__c.props !== c;

      r.__c.__H.__.some(h => {
          if (h.__N) {
            d = true;
            const m = h.__[0];
            (h.__ = h.__N);
            (h.__N = undefined);

            if (m !== h.__[0]) {
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
    Ce.__f = true;

    var {
      shouldComponentUpdate,
      componentWillUpdate
    } = Ce;

    (Ce.componentWillUpdate = function (c, l, u) {
      if (this.__e) {
        const d = shouldComponentUpdate;
        (shouldComponentUpdate = undefined);
        o(c, l, u);
        (shouldComponentUpdate = d);
      }

      if (componentWillUpdate) {
        componentWillUpdate.call(this, c, l, u);
      }
    });

    (Ce.shouldComponentUpdate = o);
  }

  return r.__N || r.__;
}
function D(e, t) {
  const n = Jn(nn++, 3);

  if (!ke.__s && Di(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    Ce.__H.__h.push(n);
  }
}
function mt(e, t) {
  const n = Jn(nn++, 4);

  if (!ke.__s && Di(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    Ce.__h.push(n);
  }
}
function O(e) {
  (zn = 5);

  return Re(() => ({
    current: e
  }), []);
}
function Mi(e, t, n) {
  (zn = 6);

  mt(
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
function Re(e, t) {
  const n = Jn(nn++, 7);

  if (Di(n.__H, t)) {
    (n.__ = e());
    (n.__H = t);
    (n.__h = e);
  }

  return n.__;
}
function R(e, t) {
  (zn = 8);

  return Re(() => e, t);
}
function jo(e) {
  const t = Ce.context[e.__c];
  const n = Jn(nn++, 9);
  (n.c = e);
  return t ? (n.__ == null && ((n.__ = true), t.sub(Ce)), t.props.value) : e.__;
}
function ed(e, t) {
  if (ke.useDebugValue) {
    ke.useDebugValue(t ? t(e) : e);
  }
}
function td() {
  const e = Jn(nn++, 11);
  if (!e.__) {
    for (var t = Ce.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function q_() {
  for (let e; (e = Ju.shift()); ) {
    const e_H = e.__H;
    if (e.__P && e_H) {
      try {
        e_H.__h.some(_o);
        e_H.__h.some(ti);
        (e_H.__h = []);
      } catch (n) {
        (e_H.__h = []);
        ke.__e(n, e.__v);
      }
    }
  }
}

(ke.__b = e => {
  (Ce = null);

  if (__b) {
    __b(e);
  }
});

(ke.__ = (e, t) => {
  if (e && t.__k && t.__k.__m) {
    (e.__m = t.__k.__m);
  }

  if (__1) {
    __1(e, t);
  }
});

(ke.__r = e => {
  if (__r) {
    __r(e);
  }

  (nn = 0);
  const t = (Ce = e.__c).__H;

  if (t) {
    if (us === Ce) {
      (t.__h = []);
      (Ce.__h = []);

      t.__.some(n => {
        if (n.__N) {
          (n.__ = n.__N);
        }

        n.u = undefined;
        n.__N = undefined;
      });
    } else {
      t.__h.some(_o);
      t.__h.some(ti);
      (t.__h = []);
      (nn = 0);
    }
  }

  (us = Ce);
});

(ke.diffed = e => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__h.length &&
        ((Ju.push(e_c) !== 1 && Ec === ke.requestAnimationFrame) ||
          ((Ec = ke.requestAnimationFrame) || G_)(q_));

    e_c.__H.__.some(n => {
      if (n.u) {
        (n.__H = n.u);
        (n.u = undefined);
      }
    });
  }

  us = null;
  Ce = null;
});

(ke.__c = (e, t) => {
  t.some(n => {
    try {
      n.__h.some(_o);

      (n.__h = n.__h.filter(r => !r.__ || ti(r)));
    } catch (r) {
      t.some(o => {
        if (o.__h) {
          (o.__h = []);
        }
      });

      (t = []);
      ke.__e(r, n.__v);
    }
  });

  if (__c) {
    __c(e, t);
  }
});

(ke.unmount = e => {
  if (unmount) {
    unmount(e);
  }

  let t;
  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__.some(r => {
        try {
          _o(r);
        } catch (o) {
          t = o;
        }
      });

    (e_c.__H = undefined);
    t && ke.__e(t, e_c.__v);
  }
});

const kc = typeof requestAnimationFrame == "function";
function G_(e) {
  let t;

  const n = () => {
    clearTimeout(r);

    if (kc) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var r = setTimeout(n, 35);

  if (kc) {
    (t = requestAnimationFrame(n));
  }
}
function _o(e) {
  const t = Ce;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    (e.__c = undefined);
    e_c();
  }

  (Ce = t);
}
function ti(e) {
  const t = Ce;
  (e.__c = e.__());
  (Ce = t);
}
function Di(e, t) {
  return !e ||
  e.length !== t.length ||
  t.some((n, r) => n !== e[r]);
}
function nd(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function rd(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function ni(e, t) {
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
function od(e, t) {
  const n = t();
  const r = L({ t: { __: n, u: t } });
  const o = r[0].t;
  const [, s] = r;

  mt(
    () => {
      (o.__ = n);
      (o.u = t);

      if (ds(o)) {
        s({ t: o });
      }
    },
    [e, n, t]
  );

  D(
    () => {
      if (ds(o)) {
        s({ t: o });
      }

      return e(() => {
        if (ds(o)) {
          s({ t: o });
        }
      });
    },
    [e]
  );

  return n;
}
function ds(e) {
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
function sd(e) {
  e();
}
function id(e) {
  return e;
}
function ad() {
  return [false, sd];
}
const cd = mt;

class ri {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  shouldComponentUpdate(e, t) {
      return ni(this.props, e) || ni(this.state, t);
    }
}

function zo(e, t) {
  function n(o) {
    const s = this.props.ref;

    if (s != o.ref &&
      s) {
      if (typeof s == "function") {
        s(null);
      } else {
        (s.current = null);
      }
    }

    if (t) {
      if (!!t(this.props, o)) {
        return s != o.ref;
      }
    }

    return ni(this.props, o);
  }
  function r(o) {
    (this.shouldComponentUpdate = n);
    return ht(e, o);
  }
  (r.displayName = `Memo(${e.displayName || e.name})`);
  r.__f = true;
  r.prototype.isReactComponent = true;
  (r.type = e);
  return r;
}
((ri.prototype = new at()).isPureReactComponent = true);

const {
  __b: _b_1,
  __e,
  unmount: unmount_2,
  event,
  vnode,
  __r: _r_1,
  diffed: diffed_2
} = oe;

oe.__b = e => {
  if (e.type && e.type.__f && e.ref) {
    (e.props.ref = e.ref);
    (e.ref = null);
  }

  if (_b_1) {
    _b_1(e);
  }
};
const Y_ =
  (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function ld(e) {
  class t {
    constructor(n) {
      const r = rd({}, n);
      delete r.ref;
      return e(r, n.ref || null);
    }

    static componentWillUnmount() {
      Nr(null, t.v);
      (t.v = null);
      (t.h = null);
    }
  }

  (t.$$typeof = Y_);
  (t.render = e);
  t.prototype.isReactComponent = true;
  t.__f = true;
  (t.displayName = `ForwardRef(${e.displayName || e.name})`);
  return t;
}

const Ac = (e, t) => e == null ? null : ft(ft(e).map(t));

const K_ = {
  map: Ac,
  forEach: Ac,
  count(e) {
    return e ? ft(e).length : 0;
  },
  only(e) {
    const t = ft(e);
    if (t.length !== 1) {
      throw "Children.only";
    }
    return t[0];
  },
  toArray: ft,
};

oe.__e = (e, t, n, r) => {
  if (e.then) {
    let o;
    for (let s = t; (s = s.__); ) {
      if ((o = s.__c) && o.__c) {
        if (t.__e == null) {
          (t.__e = n.__e);
          (t.__k = n.__k || []);
        }

        return o.__c(e, t);
      }
    }
  }
  __e(e, t, n, r);
};
function ud(e, t, n) {
  if (e) {
    e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(r => {
      if (typeof r.__c == "function") {
        r.__c();
      }
    }),
        (e.__c.__H = null));

    (e = rd({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    (e.__k = e.__k &&
    e.__k.map(r => ud(r, t, n)));
  }

  return e;
}
function dd(e, t, n) {
  if (e &&
    n) {
    (e.__v = null);

    (e.__k = e.__k &&
    e.__k.map(r => dd(r, t, n)));

    e.__c &&
      e.__c.__P === t &&
      (e.__e && n.appendChild(e.__e), (e.__c.__e = true), (e.__c.__P = n));
  }

  return e;
}

class $e {
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
        this.__v.__k[0] = ud(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    const o = t.__a && ht(Ne, null, e.fallback);

    if (o) {
      (o.__u &= -33);
    }

    return [ht(Ne, null, t.__a ? null : e.children), o];
  }
}

function fd(e) {
  const t = e.__ && e.__.__c;
  return t && t.__a && t.__a(e);
}
function de(e) {
  let t;
  let n;
  let r;
  let o = null;
  function s(a) {
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
    return o ? ht(o, a) : null;
  }
  (s.displayName = "Lazy");
  (s.__f = true);
  return s;
}

class hr {
  constructor() {
    (this.i = null);
    (this.l = null);
  }

  render(e) {
    (this.i = null);
    (this.l = new Map());
    const t = ft(e.children);

    if (e.revealOrder && e.revealOrder[0] === "b") {
      t.reverse();
    }

    for (let n = t.length; n--; ) {
      this.l.set(t[n], (this.i = [1, 0, this.i]));
    }
    return e.children;
  }
}

(oe.unmount = e => {
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

(($e.prototype = new at()).__c = function (e, t) {
  const t_c = t.__c;
  const r = this;

  if (r.o == null) {
    (r.o = []);
  }

  r.o.push(t_c);
  const o = fd(r.__v);

  const a = () => {
    if (!s && !r.__z) {
      (s = true);
      (t_c.__R = null);
      o ? o(l) : l();
    }
  };

  t_c.__R = a;
  const t_c___P = t_c.__P;
  t_c.__P = null;
  var l = () => {
    if (!--r.__u) {
      if (r.state.__a) {
        const u = r.state.__a;
        r.__v.__k[0] = dd(u, u.__c.__P, u.__c.__O);
      }
      let d;
      for (r.setState({ __a: (r.__b = null) }); (d = r.o.pop()); ) {
        (d.__P = t_c___P);
        d.forceUpdate();
      }
    }
  };

  if (!r.__u++ && 32 & t.__u) {
    r.setState({ __a: (r.__b = r.__v.__k[0]) });
  }

  e.then(a, a);
});

const Lc = (e, t, n) => {
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
function Z_(e) {
  (this.getChildContext = () => e.context);

  return e.children;
}
function Q_(e) {
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
        namespaceURI: e_h.namespaceURI,
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

  Nr(ht(Z_, { context: t.context }, e.__v), t.v);
}

export function $(e, t) {
  const n = ht(Q_, { __v: e, h: t });
  (n.containerInfo = t);
  return n;
}

((hr.prototype = new at()).__a = function (e) {
  const t = this;
  const n = fd(t.__v);
  const r = t.l.get(e);
  r[0]++;

  return o => {
    const s = () => {
      if (t.props.revealOrder) {
        r.push(o);
        Lc(t, e, r);
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

(hr.prototype.componentDidUpdate = hr.prototype.componentDidMount =
    function () {
      const e = this;
      this.l.forEach((t, n) => {
        Lc(e, n, t);
      });
    });

const pd =
    (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.element")) || 60103;

const J_ =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const ev = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const tv = /[A-Z0-9]/g;
const nv = typeof document !== "undefined";

const rv = e => (
  typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
).test(e);

function hd(e, t, n) {
  if (t.__k == null) {
    (t.textContent = "");
  }

  Nr(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function ov(e, t, n) {
  ql(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
(at.prototype.isReactComponent = true);

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach(e => {
  Object.defineProperty(at.prototype, e, {
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

oe.event = e => {
  if (event) {
    (e = event(e));
  }

  (e.nativeEvent = e);
  return e.nativeEvent;
};
let Ui;

const sv = {
  configurable: true,
  get() {
    return this.class;
  },
};

oe.vnode = e => {
  if (typeof e.type == "string") {
    (t => {
      const {
        props,
        type
      } = t;

      const o = {};
      const s = !type.includes("-");
      for (let a in props) {
        let props_a = props[a];
        if (
          !(
            (a === "value" && "defaultValue" in props && props_a == null) ||
            (nv && a === "children" && type === "noscript") ||
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
                  rv(props.type)) {
              if (l === "onfocus") {
                (a = "onfocusin");
              } else if (l === "onblur") {
                (a = "onfocusout");
              } else if (ev.test(a)) {
                (a = l);
              }
            } else {
              (l = a = "oninput");
            }
          } else if (s && J_.test(a)) {
            (a = a.replace(tv, "-$&").toLowerCase());
          } else if (props_a === null) {
            (props_a = undefined);
          }

          if (l === "oninput" && o[(a = l)]) {
            (a = "oninputCapture");
          }

          (o[a] = props_a);
        }
      }

      if (type == "select") {
        o.multiple &&
            Array.isArray(o.value) &&
            (o.value = ft(props.children).forEach(u => {
              u.props.selected = o.value.includes(u.props.value);
            }));

        o.defaultValue != null &&
          (o.value = ft(props.children).forEach(u => {
            u.props.selected = o.multiple
              ? o.defaultValue.includes(u.props.value)
              : o.defaultValue == u.props.value;
          }));
      }

      if (props.class && !props.className) {
        (o.class = props.class);
        Object.defineProperty(o, "className", sv);
      } else if (props.className) {
        (o.class = o.className = props.className);
      }

      (t.props = o);
    })(e);
  }

  (e.$$typeof = pd);

  if (vnode) {
    vnode(e);
  }
};
oe.__r = e => {
  if (_r_1) {
    _r_1(e);
  }

  (Ui = e.__c);
};
oe.diffed = e => {
  if (diffed_2) {
    diffed_2(e);
  }

  const {
    props,
    __e: _e
  } = e;

  if (_e != null &&
    e.type === "textarea" &&
    "value" in props &&
    props.value !== _e.value) {
    (_e.value = props.value == null ? "" : props.value);
  }

  (Ui = null);
};

const iv = {
    ReactCurrentDispatcher: {
      current: {
        readContext(e) {
          return Ui.__n[e.__c].props.value;
        },
        useCallback: R,
        useContext: jo,
        useDebugValue: ed,
        useDeferredValue: id,
        useEffect: D,
        useId: td,
        useImperativeHandle: Mi,
        useInsertionEffect: cd,
        useLayoutEffect: mt,
        useMemo: Re,
        useReducer: $i,
        useRef: O,
        useState: L,
        useSyncExternalStore: od,
        useTransition: ad,
      },
    },
  };

const md = "18.3.1";
function av(e) {
  return ht.bind(null, e);
}
function Br(e) {
  return !!e && e.$$typeof === pd;
}
function cv(e) {
  return Br(e) && e.type === Ne;
}
function lv(e) {
  return (
    !!e &&
    typeof e.displayName == "string" &&
    e.displayName.indexOf("Memo(") == 0
  );
}
function uv(e) {
  return Br(e) ? Gl(...arguments) : e;
}
function gd(e) {
  return !!e.__k && (Nr(null, e), true);
}
function dv(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const fv = (e, t) => e(t);

const pv = (e, t) => {
  let n;
  const oe_debounceRendering = oe.debounceRendering;
  oe.debounceRendering = s => {
    n = s;
  };
  try {
    const o = e(t);

    if (n) {
      n();
    }

    return o;
  } finally {
    oe.debounceRendering = oe_debounceRendering;
  }
};

const hv = Br;

const mr = {
  useState: L,
  useId: td,
  useReducer: $i,
  useEffect: D,
  useLayoutEffect: mt,
  useInsertionEffect: cd,
  useTransition: ad,
  useDeferredValue: id,
  useSyncExternalStore: od,
  startTransition: sd,
  useRef: O,
  useImperativeHandle: Mi,
  useMemo: Re,
  useCallback: R,
  useContext: jo,
  useDebugValue: ed,
  version: "18.3.1",
  Children: K_,
  render: hd,
  hydrate: ov,
  unmountComponentAtNode: gd,
  createPortal: $,
  createElement: ht,
  createContext: qn,
  createFactory: av,
  cloneElement: uv,
  createRef: wf,
  Fragment: Ne,
  isValidElement: Br,
  isElement: hv,
  isFragment: cv,
  isMemo: lv,
  findDOMNode: dv,
  Component: at,
  PureComponent: ri,
  memo: zo,
  forwardRef: ld,
  flushSync: pv,
  unstable_batchedUpdates: fv,
  StrictMode: Ne,
  Suspense: $e,
  SuspenseList: hr,
  lazy: de,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: iv,
};

function mv(e) {
  return (
    Tr(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function gv(e) {
  const t = { ...e };
  Bu(t, "react");
  Lh("react", { version: md });
  const n = z_(t);
  nu(_v);
  return n;
}
function _v(e) {
  return mv(e) ? "[SyntheticEvent]" : Qu(e);
}
function vv(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function yv(e, t) {
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
function wv(e, { componentStack: t }, n) {
  if (vv(md) && It(e) && t) {
    const r = new Error(e.message);
    (r.name = `React ErrorBoundary ${e.name}`);
    (r.stack = t);
    yv(e, r);
  }
  return Nu(e, n);
}
const Ev = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const fs = { componentStack: null, error: null, eventId: null };
class bv extends at {
  constructor(t) {
    super(t);
    (this.state = fs);
    (this._openFallbackReportDialog = true);
    const n = Ue();

    if (n &&
      t.showDialog) {
      (this._openFallbackReportDialog = false);

      (this._cleanupHook = n.on("afterSendEvent", (r) => {
        if (!r.type &&
          this._lastEventId &&
          r.event_id === this._lastEventId) {
          wc({ ...t.dialogOptions, eventId: this._lastEventId });
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

    uu((l) => {
      if (beforeCapture) {
        beforeCapture(l, t, componentStack);
      }

      const u =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback;

      const d = wv(t, n, {
        mechanism: { handled: u, type: "auto.function.react.error_boundary" },
      });

      if (onError) {
        onError(t, componentStack, d);
      }

      if (showDialog) {
        (this._lastEventId = d);
        this._openFallbackReportDialog && wc({ ...dialogOptions, eventId: d });
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
      if (this.state === fs) {
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

    this.setState(fs);
  }
  render() {
    const { fallback, children } = this.props;
    const r = this.state;
    if (r.componentStack === null) {
      return typeof children == "function" ? children() : children;
    }
    const o =
      typeof fallback == "function"
        ? ht(fallback, {
            error: r.error,
            componentStack: r.componentStack,
            resetError: () => this.resetErrorBoundary(),
            eventId: r.eventId,
          })
        : fallback;
    return Br(o)
      ? o
      : (fallback && Ev && K.warn("fallback did not produce a valid ReactElement"),
        null);
  }
}
gv({
  dsn: "https://693c388031bcee4cd87e917055abf6a2@sentry.xn--d1ah4a.com/2",
  environment: "production",
  enabled: true,
  sendDefaultPii: true,
  tracesSampleRate: 0.1,
  release: "1.1.2",
});
function Sv(e) {
  return {
    render(t) {
      hd(t, e);
    },
    unmount() {
      gd(e);
    },
  };
}
const Cv = "modulepreload";

const Nv = e => `/${e}`;

const Dc = {};

const ae = (t, n, r) => {
  let o = Promise.resolve();
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
    o = l(
      n.map((u) => {
        (u = Nv(u));

        if (u in Dc) {
          return;
        }

        Dc[u] = true;
        const d = u.endsWith(".css");
        const p = d ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${p}`)) {
          return;
        }
        const f = document.createElement("link");
        (f.rel = d ? "stylesheet" : Cv);

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
          return new Promise((h, m) => {
            f.addEventListener("load", h);

            f.addEventListener("error", () => m(new Error(`Unable to preload CSS for ${u}`))
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
  return o.then((a) => {
    for (const c of a || []) {
      if (c.status === "rejected") {
        s(c.reason);
      }
    }
    return t().catch(s);
  });
};

const Tv = {};
function Xr(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Iv(e, t, n) {
  let r;
  const o = /(?:\?([^#]*))?(#.*)?$/;
  const s = e.match(o);
  const a = {};
  if (s && s[1]) {
    for (let c = s[1].split("&"), l = 0; l < c.length; l++) {
      const u = c[l].split("=");
      a[decodeURIComponent(u[0])] = decodeURIComponent(u.slice(1).join("="));
    }
  }
  (e = oi(e.replace(o, "")));
  (t = oi(t || ""));
  for (let d = Math.max(e.length, t.length), p = 0; p < d; p++) {
    if (t[p] && t[p].charAt(0) === ":") {
      const f = t[p].replace(/(^:|[+*?]+$)/g, "");
      const h = (t[p].match(/[+*?]+$/) || Tv)[0] || "";
      const m = ~h.indexOf("+");
      const g = ~h.indexOf("*");
      const v = e[p] || "";
      if (!v && !g && (!h.includes("?") || m)) {
        r = false;
        break;
      }
      (a[f] = decodeURIComponent(v));

      if (m || g) {
        a[f] = e.slice(p).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t[p] !== e[p]) {
      r = false;
      break;
    }
  }
  return (n.default === true || r !== false) && a;
}
function kv(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function Rv(e, t) {
  (e.index = t);

  (e.rank = (n => n.props.default ? 0 : oi(n.props.path).map(Av).join(""))(e));

  return e.props;
}
function oi(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function Av(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const Ov = {};
const Sn = [];
const br = [];
let et = null;
const Fi = { url: Bi() };
const _d = qn(Fi);
function qo() {
  const e = jo(_d);
  if (e === Fi) {
    const t = L()[1];
    D(() => {
      br.push(t);

      return () => br.splice(br.indexOf(t), 1);
    }, []);
  }
  return [e, je];
}
function Bi() {
  let e;
  return `${(e =
  et && et.location
    ? et.location
    : et && et.getCurrentLocation
    ? et.getCurrentLocation()
    : typeof location !== "undefined"
    ? location
    : Ov).pathname || ""}${e.search || ""}`;
}
function je(e, t = false) {
  if (typeof e != "string" && e.url) {
    (t = e.replace);
    (e = e.url);
  }

  if ((n => {
    for (let r = Sn.length; r--; ) {
      if (Sn[r].canRoute(n)) {
        return true;
      }
    }
    return false;
  })(e)) {
    ((n, r = "push") => {
      if (et && et[r]) {
        et[r](n);
      } else if (typeof history !== "undefined" &&
          history[`${r}State`]) {
        history[`${r}State`](null, null, n);
      }
    })(e, t ? "replace" : "push");
  }

  return vd(e);
}
function vd(e) {
  let t = false;
  for (let n = 0; n < Sn.length; n++) {
    if (Sn[n].routeTo(e)) {
      (t = true);
    }
  }
  return t;
}
function Lv(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return je(t);
    }
  }
}
function Pv(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function xv(e) {
  if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (e_target.hasAttribute("data-native") || e_target.hasAttribute("native")) {
          return;
        }
        if (Lv(e_target)) {
          return Pv(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function yd(e) {
  if (e.history) {
    (et = e.history);
  }

  (this.state = { url: e.url || Bi() });
}
Xr((yd.prototype = new at()), {
  shouldComponentUpdate(e) {
    return (e.static !== true ||
    e.url !== this.props.url || e.onChange !== this.props.onChange);
  },
  canRoute(e) {
    const t = ft(this.props.children);
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

    if (!Uc) {
      (Uc = true);

      et ||
        addEventListener("popstate", () => {
          vd(Bi());
        });

      addEventListener("click", xv);
    }

    Sn.push(this);

    if (et) {
      (this.u = et.listen(t => {
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

    Sn.splice(Sn.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(Rv).sort(kv);

    for (const r of e) {
      const o = Iv(t, r.props.path, r.props);
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
    let a = this.c;
    const c = this.g(ft(e.children), t_url);

    if (c) {
      (r = Gl(
            c[0],
            Xr(Xr({ url: t_url, matches: (n = c[1]) }, n), {
              key: undefined,
              ref: undefined,
            })
          ));
    }

    if (t_url !== (a && a.url)) {
      Xr(
        Fi,
        (a = this.c =
          {
            url: t_url,
            previous: a && a.url,
            current: r,
            path: r ? r.props.path : null,
            matches: n,
          })
      );

      (a.router = this);
      (a.active = r ? [r] : []);
      for (let l = br.length; l--; ) {
        br[l]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return ht(_d.Provider, { value: a }, r);
  },
});

const Fc = (e) => {
  let t;
  const n = new Set();

  const r = (u, d) => {
    const p = typeof u == "function" ? u(t) : u;
    if (!Object.is(p, t)) {
      const f = t;

      (t = d ?? (typeof p != "object" || p === null)
        ? p
        : Object.assign({}, t, p));

      n.forEach(h => h(t, f));
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

const $v = e => e ? Fc(e) : Fc;

const Mv = e => e;

function Dv(e, t = Mv) {
  const n = mr.useSyncExternalStore(
    e.subscribe,
    mr.useCallback(() => t(e.getState()), [e, t]),
    mr.useCallback(() => t(e.getInitialState()), [e, t])
  );
  mr.useDebugValue(n);
  return n;
}

const Bc = (e) => {
  const t = $v(e);

  const n = r => Dv(t, r);

  Object.assign(n, t);
  return n;
};

const Xe = e => e ? Bc(e) : Bc;

function Hi(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (o) => {
      let s;

      const a = l => l === null ? null : JSON.parse(l, undefined);

      const c = (s = n.getItem(o)) != null ? s : null;
      return c instanceof Promise ? c.then(a) : a(c);
    },
    setItem: (o, s) => n.setItem(o, JSON.stringify(s, undefined)),
    removeItem: o => n.removeItem(o),
  };
}

const si = e => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return si(r)(n);
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
          return si(r)(n);
        },
      };
    }
  };

const wd = (e, t) => (n, r, o) => {
  let s = {
      storage: Hi(() => window.localStorage),
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
      r,
      o
    );
  }

  const p = () => {
      const v = s.partialize({ ...r() });
      return s_storage.setItem(s.name, { state: v, version: s.version });
    };

  const o_setState = o.setState;
  o.setState = (v, _) => {
    o_setState(v, _);
    return p();
  };
  const h = e((...v) => {
    n(...v);
    return p();
  }, r, o);
  o.getInitialState = () => h;
  let m;
  const g = () => {
    let _;
    if (!s_storage) {
      return;
    }
    const S = ++c;
    (a = false);

    l.forEach((C) => {
      let b;
      return C((b = r()) != null ? b : h);
    });

    const y =
      ((_ = s.onRehydrateStorage) == null
        ? undefined
        : _.call(s, (v = r()) != null ? v : h)) || undefined;
    return si(s_storage.getItem.bind(s_storage))(s.name)
      .then((C) => {
        if (C) {
          if (typeof C.version == "number" && C.version !== s.version) {
            if (s.migrate) {
              const b = s.migrate(C.state, C.version);
              return b instanceof Promise ? b.then(w => [true, w]) : [true, b];
            }
            console.error(
              "State loaded from storage couldn't be migrated since no migrate function was provided"
            );
          } else {
            return [false, C.state];
          }
        }
        return [false, undefined];
      })
      .then((C) => {
      let b;
      if (S !== c) {
        return;
      }
      const [w, T] = C;
      (m = s.merge(T, (b = r()) != null ? b : h));
      n(m, true);

      if (w) {
        return p();
      }
    })
      .then(() => {
      if (S === c) {
        y?.(r(), undefined);
        (m = r());
        (a = true);
        u.forEach(C => C(m));
      }
    })
      .catch((C) => {
      if (S === c) {
        y?.(undefined, C);
      }
    });
  };

  (o.persist = {
    setOptions: (v) => {
      (s = { ...s, ...v });

      if (v.storage) {
        (s_storage = v.storage);
      }
    },
    clearStorage: () => {
      ++c;
      s_storage?.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => g(),
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
    g();
  }

  return m || h;
};

const Ed = Xe((e, t) => ({
  isOpen: false,
  images: [],
  initialIndex: 0,
  sourceRect: null,
  resolveSourceRect: null,
  session: 0,
  zoomable: false,
  thumbs: false,

  open: (n, r = 0, o = null, s = null, a) => e({
    isOpen: true,
    images: n,
    initialIndex: r,
    sourceRect: o,
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

const Fv = Xe((e, t) => ({
  isOpen: false,
  options: null,
  session: 0,
  open: n => e({ isOpen: true, options: n, session: t().session + 1 }),
  close: () => e({ isOpen: false, options: null })
}));

const Bv = Xe((e, t) => ({
  navigatedInApp: false,

  markNavigated: () => {
    if (!t().navigatedInApp) {
      e({ navigatedInApp: true });
    }
  }
}));

const Ke = {
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

function xe(e) {
  return (
    e instanceof Error && "status" in e && "code" in e && e.name === "ApiError"
  );
}

const B = {
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

const Hv = 4000/* 4e3 */;

const Ro = Xe((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const o = n.duration ?? Hv;

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

const $t = {
  success: (e, t) => Ro.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) => Ro.getState().addToast({ type: "error", message: e, duration: t }),
};

const Vv = {
  [B.CONTENT_MODERATION_FAILED]: "Изображение содержит запрещённый контент",
  [B.FILE_TOO_LARGE]: "Файл слишком большой",
  [B.UNSUPPORTED_FILE_TYPE]: "Неподдерживаемый формат файла",
  [B.UPLOAD_FAILED]: "Не удалось загрузить файл",
  [B.VIDEO_REQUIRES_VERIFICATION]:
    "Видео — только для верифицированных пользователей",
  [B.RATE_LIMIT_EXCEEDED]: "Слишком много запросов. Попробуйте позже",
  [B.UNAUTHORIZED]: "Требуется авторизация",
  [B.ACCESS_DENIED]: "Доступ запрещён",
  [B.NETWORK_ERROR]: "Ошибка сети. Проверьте подключение",
  [B.TIMEOUT]: "Превышено время ожидания",
  [B.VALIDATION_ERROR]: "Проверьте правильность введённых данных",
  [B.ENTITY_NOT_FOUND]: "Запрошенные данные не найдены",
  [B.ENTITY_ALREADY_EXISTS]: "Такая запись уже существует",
  [B.CAPTCHA_FAILED]: "Проверка captcha не пройдена. Попробуйте снова",
  [B.OTP_INVALID]: "Неверный код. Попробуйте снова",
  [B.ACCOUNT_DEACTIVATED]: "Аккаунт деактивирован",
  [B.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED]:
    "Почта этого домена не поддерживается",
  [B.ACCOUNT_INVALID_CREDENTIALS]: "Неверный email или пароль",
  [B.ACCOUNT_TEMPORARILY_LOCKED]:
    "Аккаунт временно заблокирован. Попробуйте позже",
  [B.ACCOUNT_CURRENT_PASSWORD_INCORRECT]: "Неверный текущий пароль",
  [B.MISSING_FLOW_TOKEN]: "Сессия истекла. Начните заново",
  [B.PROFILE_USERNAME_TAKEN]: "Этот username уже занят",
  [B.PROFILE_USERNAME_RESERVED]: "Этот username зарезервирован системой",
};

const Wv = {
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

const jv = [
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

const zv = {
  INVALID_EMAIL: B.VALIDATION_ERROR,
  INVALID_PASSWORD: B.VALIDATION_ERROR,
  EMAIL_DOMAIN_NOT_ALLOWED: B.ACCOUNT_EMAIL_DOMAIN_NOT_ALLOWED,
  CONFLICT: B.ENTITY_ALREADY_EXISTS,
  INVALID_CREDENTIALS: B.ACCOUNT_INVALID_CREDENTIALS,
  USER_INACTIVE: B.ACCOUNT_DEACTIVATED,
  TURNSTILE_TOKEN_MISSING: B.CAPTCHA_FAILED,
  TURNSTILE_API_ERROR: B.CAPTCHA_FAILED,
  TURNSTILE_ERROR: B.CAPTCHA_FAILED,
  TURNSTILE_VERIFICATION_FAILED: B.CAPTCHA_FAILED,
  INVALID_FLOW_TOKEN: B.MISSING_FLOW_TOKEN,
  NO_PENDING_OTP: B.MISSING_FLOW_TOKEN,
  INVALID_OTP_FORMAT: B.OTP_INVALID,
  ACCOUNT_NOT_FOUND: B.ENTITY_NOT_FOUND,
  CURRENT_PASSWORD_INCORRECT: B.ACCOUNT_CURRENT_PASSWORD_INCORRECT,
  INVALID_OLD_PASSWORD: B.ACCOUNT_CURRENT_PASSWORD_INCORRECT,
  USERNAME_TAKEN: B.PROFILE_USERNAME_TAKEN,
  USERNAME_RESERVED: B.PROFILE_USERNAME_RESERVED,
  PROFILE_NOT_FOUND: B.ENTITY_NOT_FOUND,
  USER_NOT_FOUND: B.ENTITY_NOT_FOUND,
  FILE_NOT_FOUND: B.ENTITY_NOT_FOUND,
  NOT_FOUND: B.ENTITY_NOT_FOUND,
  FORBIDDEN: B.ACCESS_DENIED,
  TOO_MANY_REQUESTS: B.RATE_LIMIT_EXCEEDED,
};

function bd(e) {
  return zv[e] ?? e;
}
function qv(e) {
  const Wv_e = Wv[e];
  if (Wv_e) {
    return Wv_e;
  }
  for (const { pattern, translate } of jv) {
    const o = e.match(pattern);
    if (o) {
      return translate(o);
    }
  }
  return e;
}
function Vi(e, t = "Произошла ошибка") {
  const n = qv(t);
  return n !== t || /[А-Яа-яЁё]/.test(n) || !e ? n : Vv[bd(e)] ?? n;
}
const Sd = "/api";

const M = {
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

let Rr = null;
const ii = new Set();
function rn() {
  return Rr;
}
function Cd(e) {
  if (Rr !== e) {
    Rr = e;
    for (const t of ii) {
      t(e);
    }
  }
}
function Gv(e) {
  ii.add(e);

  return () => {
    ii.delete(e);
  };
}
function Hc() {
  return Rr ? { Authorization: `Bearer ${Rr}` } : {};
}
let ai = null;
function Yv(e) {
  ai = e;
}
async function Kv(e) {
  const navigator_locks = navigator.locks;
  return navigator_locks?.request ? await navigator_locks.request("auth:refresh", e) : e();
}
async function ci() {
  return ai
    ? or ||
        ((or = Kv(ai).finally(() => {
          or = null;
        })),
        or)
    : null;
}
async function Xv(e, t = {}) {
  const n = () => {
    const s = new Headers(t.headers);
    const a = rn();

    if (a) {
      s.set("Authorization", `Bearer ${a}`);
    }

    return fetch(e, { credentials: "include", ...t, headers: s });
  };

  const r = await n();
  return r.status !== 401 || !(await ci()) ? r : n();
}
function Zv() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    (t = crypto.randomUUID());
    localStorage.setItem(e, t);
  }

  return t;
}
const Vc = Zv();
class Nd {
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
    if (t.status !== Ke.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        $t.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      $t.error(Vi(t.code, t.message || "Произошла ошибка"));
    }
  }
  buildUrl(t) {
    const n = this.baseURL.replace(/\/$/, "");
    const r = t.startsWith("/") ? t : `/${t}`;
    return `${n}${r}`;
  }
  buildHeaders(t) {
    const n = new Headers({ ...this.defaultHeaders, ...t, ...Hc() });
    n.set("X-Device-Id", Vc);
    return n;
  }
  async handleResponse(t) {
    if (t.status === Ke.NO_CONTENT) {
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
      case Ke.BAD_REQUEST:
        {
          return B.BAD_REQUEST;
        }
      case Ke.UNAUTHORIZED:
        {
          return B.UNAUTHORIZED;
        }
      case Ke.FORBIDDEN:
        {
          return B.ACCESS_DENIED;
        }
      case Ke.NOT_FOUND:
        {
          return B.ENTITY_NOT_FOUND;
        }
      case Ke.CONFLICT:
        {
          return B.ENTITY_ALREADY_EXISTS;
        }
      case Ke.UNPROCESSABLE_ENTITY:
        {
          return B.VALIDATION_ERROR;
        }
      case Ke.TOO_MANY_REQUESTS:
        {
          return B.RATE_LIMIT_EXCEEDED;
        }
      default:
        {
          return B.UNKNOWN_ERROR;
        }
    }
  }
  createApiError(t, n, r, o) {
    const s = new Error(n);
    (s.status = t);
    (s.code = bd(r));
    (s.errors = o);
    (s.name = "ApiError");
    return s;
  }
  async executeRequest(t, n, r, o, s = false) {
    const a = this.buildUrl(n);
    const c = this.buildHeaders(o?.headers);
    const l = new AbortController();
    const u = o?.timeout ?? this.defaultTimeout;

    const d = setTimeout(() => l.abort(), u);

    try {
      const f =
          r instanceof ArrayBuffer ||
          (typeof Uint8Array !== "undefined" && r instanceof Uint8Array) ||
          (typeof Blob !== "undefined" && r instanceof Blob)
            ? r
            : r != null
            ? JSON.stringify(r)
            : undefined;

      const { headers, skipErrorToast, ...g } = o ?? {};

      const v = await fetch(a, {
        method: t,
        body: f,
        signal: l.signal,
        credentials: "include",
        ...g,
        headers: c,
      });

      clearTimeout(d);
      const _ =
        n.startsWith("/auth/") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/reset-") ||
        n.startsWith("/login/");
      if (v.status === Ke.UNAUTHORIZED && !s && !_ && rn()) {
        if (await ci()) {
          return this.executeRequest(t, n, r, o, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Ke.UNAUTHORIZED,
          "Session expired",
          B.UNAUTHORIZED
        );
      }
      return await this.handleResponse(v);
    } catch (p) {
      clearTimeout(d);

      if (p instanceof Error) {
        const f = m => !s && !this.isToastSkipped(o?.skipErrorToast, m.status);
        if (p.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", B.TIMEOUT);

          if (f(m)) {
            this.notifyError(m);
          }

          throw m;
        }
        if (p.name === "ApiError") {
          const m = p;

          if (f(m)) {
            this.notifyError(m);
          }

          throw p;
        }
        const h = this.createApiError(
          0,
          p.message || "Network error",
          B.NETWORK_ERROR
        );

        if (f(h)) {
          this.notifyError(h);
        }

        throw h;
      }

      throw p;
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
  async uploadFormData(t, n, r, o = false) {
    const s = this.buildUrl(t);
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": Vc, ...Hc() };
    const c = new AbortController();
    const l = r?.timeout ?? this.defaultTimeout;

    const u = setTimeout(() => c.abort(), l);

    try {
      const d = await fetch(s, {
        method: "POST",
        headers: a,
        body: n,
        signal: c.signal,
        credentials: "include",
      });
      clearTimeout(u);

      if (d.status === Ke.UNAUTHORIZED && !o && rn()) {
        if (await ci()) {
          return this.uploadFormData(t, n, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Ke.UNAUTHORIZED,
          "Session expired",
          B.UNAUTHORIZED
        );
      }

      return await this.handleResponse(d);
    } catch (d) {
      clearTimeout(u);

      if (d instanceof Error) {
        if (d.name === "AbortError") {
          const f = this.createApiError(0, "Request timeout", B.TIMEOUT);

          if (!o) {
            this.notifyError(f);
          }

          throw f;
        }
        if (d.name === "ApiError") {
          if (!o) {
            this.notifyError(d);
          }

          throw d;
        }
        const p = this.createApiError(
          0,
          d.message || "Network error",
          B.NETWORK_ERROR
        );

        if (!o) {
          this.notifyError(p);
        }

        throw p;
      }

      throw d;
    }
  }
}
const x = new Nd({ baseURL: Sd, timeout: 30000/* 3e4 */ });
const yt = new Nd({ baseURL: "/api/v1/auth", timeout: 30000/* 3e4 */ });

const Go = Xe((e, t) => ({
  portal: { active: false },
  loaded: false,

  fetchPortal: async () => {
    if (!t().loaded) {
      try {
        const n = await x.get("/v1/portal");
        e({ portal: n, loaded: true });
      } catch {
        e({ loaded: true });
      }
    }
  }
}));

const Td = () => Go(e => e.portal);

const V2 = () => Go(e => e.loaded);

const Qv = "/public/events/aliceai";
function Id(e) {
  if (!e.active || !e.url) {
    return false;
  }
  try {
    return new URL(e.url, window.location.origin).pathname.startsWith(`${Qv}/`);
  } catch {
    return false;
  }
}
const Ar = new Set();
let Sr = null;
const Jv = 30000/* 3e4 */;
function ey() {
  if (Sr === null) {
    (Sr = window.setInterval(() => {
        Ar.forEach(e => e());
      }, Jv));
  }
}
function ty() {
  if (Sr !== null) {
    clearInterval(Sr);
    (Sr = null);
  }
}
function ny(e) {
  Ar.add(e);

  if (Ar.size === 1) {
    ey();
  }
}
function ry(e) {
  Ar.delete(e);

  if (Ar.size === 0) {
    ty();
  }
}
function ps(e) {
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
function kd(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const r = n ? t : 0;

  const [o, s] = L(() => n ? ps(new Date(r)) : "");

  D(() => {
    if (!n) {
      s("");
      return;
    }
    const a = new Date(r);
    s(ps(a));
    const c = () => {
      s(ps(a));
    };
    ny(c);

    return () => ry(c);
  }, [r, n]);

  return o;
}
const Wc = 1174;
function Wt() {
  const [e, t] = L(() => typeof window === "undefined" ? false : window.innerWidth < Wc);

  D(() => {
    const n = window.matchMedia(`(max-width: ${Wc - 1}px)`);

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
const oy = qn({ isHidden: false });

const sy = () => {
  const [e, t] = L(false);
  const n = O(0);

  D(() => {
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

function Yo(e = "", t = []) {
  const [n, r] = L(e);
  const [o, s] = L(t);
  const a = O(null);

  const c = R((d, p) => {
    r(d);
    s(p);
  }, []);

  const l = R((d) => {
    a.current?.insertText(d);
  }, []);

  const u = R(() => {
    r("");
    s([]);
  }, []);

  return {
    text: n,
    spans: o,
    editorRef: a,
    handleChange: c,
    insertText: l,
    reset: u,
    setText: r,
    setSpans: s,
  };
}
function iy({
  sentinelRef: e,
  hasMore: t,
  isLoading: n,
  onLoadMore: r,
  rootMargin: o = "100px",
}) {
  D(() => {
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
      { rootMargin: o }
    );
    a.observe(e_current);

    return () => a.disconnect();
  }, [t, n, r, o, e]);
}
function ay({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  gap: r = 0,
  getItemKey: o = l => l,
  initialMeasuredHeights: s,
  scrollElement: a,
  initialScrollTop: c,
}) {
  const [, l] = L(0);

  const u = () => a
    ? Math.max(0, a.scrollTop)
    : c !== undefined
    ? c
    : typeof window !== "undefined"
    ? Math.max(0, window.scrollY)
    : 0;

  const d = () => a ? a.clientHeight : typeof window !== "undefined" ? window.innerHeight : 0;

  const p = O(s ?? new Map());
  const f = O(null);
  const h = O(null);
  const m = O(new Map());
  const g = O(o);
  g.current = o;

  const v = T => p.current.get(o(T)) ?? t;

  const _ = (T) => {
    let I = 0;
    for (let N = 0; N < T; N++) {
      I += v(N) + r;
    }
    return I;
  };

  const S = () => {
    if (e === 0) {
      return 0;
    }
    let T = 0;
    for (let I = 0; I < e; I++) {
      T += v(I);
    }
    (T += Math.max(0, e - 1) * r);
    return T;
  };

  const y = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const T = u();
    const I = d();
    let N = 0;
    let E = 0;
    for (let P = 0; P < e; P++) {
      const G = v(P) + r;
      if (E + G > T) {
        N = P;
        break;
      }
      E += G;
    }
    let A = N;
    let k = 0;
    for (let P = N; P < e && ((k += v(P) + r), (A = P), !(k >= I)); P++)
      {}
    return { start: Math.max(0, N - n), end: Math.min(e - 1, A + n) };
  };

  const C = () => {
    if (e === 0) {
      return [];
    }
    const { start, end } = y();
    const N = [];
    for (let E = start; E <= end; E++) {
      N.push({ index: E, key: o(E), start: _(E) });
    }
    return N;
  };

  if (!h.current) {
    (h.current = new ResizeObserver((T) => {
      let I = false;
      for (const N of T) {
        const N_target = N.target;
        const A = m.current.get(N_target);
        if (A === undefined) {
          continue;
        }
        const k = N.borderBoxSize && N.borderBoxSize[0];
        const P = k ? k.blockSize : N_target.getBoundingClientRect().height;

        if (P > 0 && p.current.get(A) !== P) {
          p.current.set(A, P);
          (I = true);
        }
      }

      if (I) {
        l(N => N + 1);
      }
    }));
  }

  const b = R((T, I) => {
    if (!T) {
      return;
    }
    const N = g.current(I);
    m.current.set(T, N);
    h.current?.observe(T, { box: "border-box" });
    const E = T.getBoundingClientRect().height;

    if (E > 0 && p.current.get(N) !== E) {
      p.current.set(N, E);
      l(A => A + 1);
    }
  }, []);

  mt(() => {
    const T = a ?? window;

    const I = () => {
      if (!f.current) {
        (f.current = requestAnimationFrame(() => {
          (f.current = null);

          l(N => N + 1);
        }));
      }
    };

    T.addEventListener("scroll", I, { passive: true });

    l(N => N + 1);

    return () => {
      T.removeEventListener("scroll", I);

      if (f.current) {
        cancelAnimationFrame(f.current);
      }
    };
  }, [a]);

  D(
    () => () => {
      h.current?.disconnect();
      m.current.clear();
    },
    []
  );

  const w = R(() => new Map(p.current), []);
  return {
    virtualItems: C(),
    totalSize: S(),
    measureElement: b,
    getMeasuredHeights: w,
  };
}
const cy = "https://cdn.xn--d1ah4a.com/public/assets/icons";
const jc = "itd:icons:checkedAt";
const ly = 1800 * 1000/* 1e3 */;
const Ao = new Map();
const hs = new Map();
const vo = new Map();

const uy = e => `${cy}/${e}.svg`;

const dy = (() => {
  try {
    const e = Number(localStorage.getItem(jc) ?? 0);
    return Date.now() - e < ly
      ? false
      : (localStorage.setItem(jc, String(Date.now())), true);
  } catch {
    return false;
  }
})();

const fy = e => /^\s*<svg[\s>]/i.test(e) &&
!/<script|<foreignObject|\son[a-z]+\s*=/i.test(e);

const py = { liked: "--accent-liked" };
const hy = /fill\s*=\s*["'](#[0-9a-fA-F]{3,8})["']/;

const my = (e, t) => {
  const py_e = py[e];
  if (!py_e || typeof document === "undefined") {
    return;
  }
  const r = hy.exec(t)?.[1];

  if (r) {
    document.documentElement.style.setProperty(py_e, r);
  }
};

const gy = (e, t) => {
  Ao.set(e, t);
  my(e, t);

  vo.get(e)?.forEach(n => n(t));
};

const _y = (e, t = false) => {
  if (!t) {
    const o = Ao.get(e);
    if (o) {
      return Promise.resolve(o);
    }
    const s = hs.get(e);
    if (s) {
      return s;
    }
  }
  const n = t ? "reload" : dy ? "no-cache" : "force-cache";

  const r = fetch(uy(e), { cache: n })
    .then(async (o) => {
      if (!o.ok) {
        return null;
      }
      const s = await o.text();
      return fy(s) ? (gy(e, s), s) : null;
    })
    .catch(() => null)
    .finally(() => hs.delete(e));

  hs.set(e, r);
  return r;
};

const vy = (e, t) => e.replace(/<svg\b([^>]*)>/i, (n, r) => {
  const o = /\bwidth\s*=\s*["']([^"']+)["']/i.exec(r)?.[1];
  const s = /\bheight\s*=\s*["']([^"']+)["']/i.exec(r)?.[1];
  let a = r.replace(/\s(width|height)\s*=\s*["'][^"']*["']/gi, "");

  if (!/\bviewBox\s*=/i.test(a) &&
    o &&
    s) {
    (a += ` viewBox="0 0 ${o} ${s}"`);
  }

  return `<svg${a} width="${t}" height="${t}">`;
});

const Wi = ({ name: e, size: t = 20, className: n }) => {
  const [r, o] = L(() => Ao.get(e) ?? null);
  D(() => {
    o(Ao.get(e) ?? null);
    const a = vo.get(e) ?? new Set();
    a.add(o);
    vo.set(e, a);
    _y(e);

    return () => {
      a.delete(o);

      if (a.size === 0) {
        vo.delete(e);
      }
    };
  }, [e]);
  const s = typeof t == "number" ? `${t}px` : t;
  return i("span", {
    "data-icon": e,
    "aria-hidden": "true",
    className: n,
    style: { display: "block", width: s, height: s, lineHeight: 0 },
    dangerouslySetInnerHTML: r ? { __html: vy(r, t) } : undefined,
  });
};

const yy = ({ size: e = 18 }) => i("svg", {
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

const wy = ({ size: e = 18 }) => i("svg", {
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

const Ey = ({ size: e = 18 }) => i("svg", {
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

const Rd = ({ size: e = 18 }) => i("svg", {
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

const by = ({ size: e = 18 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", {
    d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
  }),
});

const Sy = ({ size: e = 18 }) => i("svg", {
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

const Cy = ({ size: e = 18 }) => i("svg", {
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

const Ny = ({ size: e = 18 }) => i("svg", {
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

const Ty = ({ size: e = 18 }) => i("svg", {
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

const Iy = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", { d: "M8 5v14l11-7z" }),
});

const ky = ({ size: e = 24 }) => i("svg", {
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

const Ad = ({ size: e = 20 }) => i("svg", {
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

const Ry = ({ size: e = 8 }) => i("svg", {
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

const Ay = ({ size: e = 8 }) => i("svg", {
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

const Oy = () => i("svg", {
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

const gt = ({ size: e = 24 }) => i("svg", {
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

const Od = ({ size: e = 20 }) => i(Wi, { name: "comment", size: e });

const Ld = ({ size: e = 18 }) => i("svg", {
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

const Ly = ({ size: e = 24 }) => i("svg", {
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

const Pd = () => i("svg", {
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

const xd = ({ size: e = 18 }) => i("svg", {
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

const $d = ({ size: e = 24 }) => i("svg", {
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

const ji = ({ filled: e = false, size: t = 20, className: n }) => i(Wi, { name: e ? "liked" : "like", size: t, className: n });

const zi = ({ size: e = 24 }) => i("svg", {
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

const Py = ({ size: e = 24 }) => i("svg", {
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

const Md = ({ size: e = 18 }) => i("svg", {
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

const Dd = ({ size: e = 24 }) => i("svg", {
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

const xy = ({ size: e = 24 }) => i("svg", {
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

const li = ({ size: e = 24 }) => i("svg", {
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

const zc = ({ size: e = 18 }) => i("svg", {
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

const qi = ({ size: e = 24 }) => i("svg", {
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

const $y = ({ size: e = 20 }) => i("svg", {
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

const Gi = ({ size: e = 20 }) => i(Wi, { name: "share", size: e });

const Ud = ({ size: e = 24 }) => i("svg", {
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

const Fd = ({ size: e = 24 }) => i("svg", {
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

const My = ({ size: e = 20, color: t = "currentColor" }) => i("svg", {
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

const Dy = ({ size: e = 24 }) => i("svg", {
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

const Uy = ({ size: e = 48 }) => i("svg", {
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

const Bd = ({ size: e = 18 }) => i("svg", {
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

const Fy = ({ size: e = 16 }) => i("svg", {
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

const By = ({ size: e = 20 }) => i("svg", {
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

const Hy = "gdKM";
const Vy = "Yr0a";
const Wy = "NwFQ";
const jy = "sORr";
const zy = "nKBW";
const qy = "Gp1v";
const Gy = "vwMb";
const Yy = "vpx7";
const Ky = "Lzdr";
const Xy = "DBpl";
const Zy = "QW0w";
const Qy = "DrD5";
const Jy = "b8H5";

const Be = {
  aside: Hy,
  asideBottom: Vy,
  logoutButton: Wy,
  asideBrand: jy,
  asideBrandVersion: zy,
  nav: qy,
  navItem: Gy,
  active: Yy,
  iconWrapper: Ky,
  portalButton: Xy,
  portalActive: Zy,
  portalImage: Qy,
  badge: Jy,
};

const pe = {
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
  EVENT: "/event",
  ALICE_EVENT: "/event/alice-ai",
  SHOP: "/shop",
  SUBSCRIPTION_TERMS: "/subscription-terms",
};

const qc = [
  pe.SHOP,
  pe.LOGIN,
  pe.REGISTER,
  pe.FORGOT_PASSWORD,
  pe.RESET_PASSWORD,
  pe.VERIFY_EMAIL,
  pe.TERMS,
  pe.PRIVACY,
  pe.COOKIES,
  pe.EXTERNAL,
  pe.SUPPORT,
  pe.CHILD_SAFETY,
  pe.SUBSCRIPTION_TERMS,
];

const Yi = [
  pe.LOGIN,
  pe.REGISTER,
  pe.FORGOT_PASSWORD,
  pe.RESET_PASSWORD,
  pe.VERIFY_EMAIL,
  pe.ONBOARDING,
];

const e0 = {
  like: "post_reaction",
  comment_like: "comment_reaction",
  comment: "post_comment",
  reply: "comment_reply",
  repost: "post_repost",
  mention: "post_mention",
  follow: "follow",
  wall_post: "wall_post",
};

function Hd(e) {
  const t = e.type === "repost" ? null : e.subjectId ?? null;
  return {
    id: e.id,
    type: e0[e.type] ?? "follow",
    entityId: t ?? e.targetId ?? null,
    parentEntityId: t ? e.targetId ?? null : null,
    isRead: e.read ?? false,
    payload: {
      actors: e.actor ? [e.actor] : [],
      count: 1,
      entityPreview: e.preview ?? null,
      commentId: t ?? undefined,
    },
    createdAt: e.createdAt,
    updatedAt: e.readAt ?? e.createdAt,
  };
}

const sr = {
    async getNotifications(e = {}) {
      const t = new URLSearchParams();
      const n = e.limit ?? 20;
      t.set("limit", n.toString());
      const r = e.cursor ? parseInt(e.cursor) : e.offset ?? 0;

      if (r > 0) {
        t.set("offset", r.toString());
      }

      const o = t.toString();
      const s = `${M.notifications.list}${o ? `?${o}` : ""}`;
      const a = await x.get(s);
      const c = a.notifications ?? [];
      const l = a.hasMore ? String(r + c.length) : null;
      return { notifications: c.map(Hd), nextCursor: l };
    },
    async getUnreadCount() {
      return (await x.get(M.notifications.count)).count;
    },
    async markAllAsRead() {
      await x.post(M.notifications.markAllRead);
    },
    async getSettings() {
      const e = await x.get(M.notifications.settings);
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

      await x.put(M.notifications.settings, t);
    },
  };

const Gc = [1000/* 1e3 */, 2000/* 2e3 */, 4000/* 4e3 */, 8000/* 8e3 */, 16000/* 16e3 */, 30000/* 3e4 */];
const t0 = 0.3;
const n0 = 15;
function r0(e) {
  const t = Gc[Math.min(e, Gc.length - 1)];
  const n = t * t0 * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
let zt = null;
let Zr = null;
let ir = 0;
let ln = null;
function o0(e) {
  const { url, onMessage, onStatusChange } = e;
  function o() {
    if (zt) {
      return;
    }
    if (!rn()) {
      onStatusChange("error");
      return;
    }
    onStatusChange("connecting");
    (zt = new AbortController());

    (async () => {
      try {
        const c = await Xv(url, {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
            "Cache-Control": "no-cache",
          },
          signal: zt?.signal,
        });
        if (!c.ok) {
          if (c.status === 401) {
            onStatusChange("error");
            return;
          }
          throw new Error(`SSE connection failed: ${c.status}`);
        }
        if (!c.body) {
          throw new Error("SSE response has no body");
        }
        (ir = 0);
        onStatusChange("connected");

        if (ln) {
          ln.cancel().catch(() => {});
          (ln = null);
        }

        const l = c.body.getReader();
        ln = l;
        const u = new TextDecoder();
        let d = "";

        while (true) {
          const { done, value } = await l.read();
          if (done) {
            break;
          }
          d += u.decode(value, { stream: true });
          const h = d.split(`
`);
          d = h.pop() || "";
          let m = "";
          let g = "";
          for (const v of h) {
            if (v.startsWith("event: ")) {
              m = v.slice(7);
            } else if (v.startsWith("data: ")) {
              g = v.slice(6);
            } else if (v === "" && g) {
              try {
                const _ = JSON.parse(g);
                const S = m || _.type;
                onMessage(S, _);
              } catch (_) {
                console.error("SSE message parse error:", _, g);
              }
              (m = "");
              (g = "");
            }
          }
        }
      } catch (c) {
        if (c.name === "AbortError") {
          return;
        }
        onStatusChange("error");

        if (ir >= n0) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );

          (zt = null);
          return;
        }

        const l = r0(ir);
        ir++;

        (Zr = setTimeout(() => {
          (zt = null);
          o();
        }, l));
      }
    })();
  }
  function s() {
    if (Zr) {
      clearTimeout(Zr);
      (Zr = null);
    }

    if (ln) {
      ln.cancel().catch(() => {});
      (ln = null);
    }

    if (zt) {
      zt.abort();
      (zt = null);
    }

    (ir = 0);
    onStatusChange("disconnected");
  }
  return { connect: o, disconnect: s };
}

const Yc = {
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

const Qr = o0({
  url: `${Sd}${M.notifications.stream}`,
  onMessage: (e, t) => {
    if (e === "notification") {
      const n = Hd(t);
      const r = n.payload.actors[0];

      const o = {
        actorId: r?.id,
        id: n.id,
        type: n.type,
        actorName: r?.displayName || "Пользователь",
        actorUsername: r?.username || "",
        actorAvatar: r?.avatar || "",
        count: n.payload.count,
        message: i0(
          n.type,
          r?.displayName || "Пользователь",
          n.payload.count
        ),
        entityId: n.entityId,
        parentEntityId: n.parentEntityId,
      };

      kn.setState(s => ({
        notifications: [n, ...s.notifications],
        unreadCount: s.unreadCount + 1,
        lastSseToast: o
      }));

      if (t.sound) {
        a0();
      }
    }
  },
  onStatusChange: (e) => {
    kn.setState({
      sseStatus: e,
      error: e === "error" ? "SSE connection error" : null,
    });
  },
});

const kn = Xe()((e, t) => ({
  ...Yc,

  initialize: () => {
    if (!t().isInitialized) {
      e({ isInitialized: true });
      Qr.connect();
      t().fetchUnreadCount();
    }
  },

  fetchNotifications: async (n = false) => {
    const { status, nextCursor, notifications } = t();
    if (status !== "loading" && !(!n && nextCursor === null && notifications.length > 0)) {
      e({ status: "loading", error: null });
      try {
        const a = n ? undefined : nextCursor ?? undefined;
        const c = await sr.getNotifications({ cursor: a, limit: 20 });
        e({
          notifications: n ? c.notifications : [...notifications, ...c.notifications],
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
      const n = await sr.getUnreadCount();
      e({ unreadCount: n });
    } catch {}
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
      await sr.markAllAsRead();
    } catch {}
  },

  connectSSE: () => Qr.connect(),
  disconnectSSE: () => Qr.disconnect(),

  fetchSettings: async () => {
    e({ settingsLoading: true });
    try {
      const n = await sr.getSettings();
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
      await sr.updateSettings(n);
    } catch {
      e({ settings: r });
    }
  },

  reset: () => {
    Qr.disconnect();
    e(Yc);
  }
}));

const s0 = {
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

function i0(e, t, n) {
  const s0_e = s0[e];
  return s0_e ? s0_e(t, n) : "Новое уведомление";
}
function a0() {
  try {
    const e = new Audio("/assets/notification.ogg");
    (e.volume = 0.5);
    e.play().catch(() => {});
  } catch {}
}

const Vd = () => kn(e => e.unreadCount);

const c0 = () => kn(e => e.lastSseToast);

const l0 = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const u0 = ["video/mp4", "video/webm", "video/quicktime"];
const ui = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const d0 = ".mp4,.webm,.mov";

const Un = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await x.uploadFormData(M.files.upload, t, { timeout: 300 * 1000/* 1e3 */ });
  },
  async uploadAvatar(e) {
    const t = new FormData();
    t.append("file", e);
    return x.uploadFormData(M.files.uploadAvatar, t, { timeout: 120 * 1000/* 1e3 */ });
  },
  async deleteFile(e) {
    await x.delete(M.files.delete(e));
  },
  isValidImageType(e) {
    return l0.includes(e.type);
  },
  isValidVideoType(e) {
    return u0.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

const f0 = {
  async getChangelog() {
    const e = await x.get(M.platform.changelog);
    return Array.isArray(e) ? e : e?.data ?? [];
  },
  async getAnnouncements() {
    const e = await x.get(M.platform.announcements);
    return Array.isArray(e) ? e : e?.announcements ?? [];
  },
};

class Ki {
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
function Kc(e) {
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
const Kt = new Ki(100, 300 * 1000/* 1e3 */);
const p0 = 60 * 1000/* 1e3 */;
setInterval(() => Kt.cleanup(), 120 * 1000/* 1e3 */);
const Jr = {
  async checkUsername(e) {
    return (
      await x.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await x.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await x.get(M.users.me);
    return Kc(e);
  },
  async updateProfile(e) {
    return await x.put(M.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = Kt.get(t);

    if (n && Kt.isFresh(t, p0)) {
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
    return Kt.get(e.toLowerCase()) ?? null;
  },
  async _fetchAndCacheProfile(e, t) {
    const n = await x.get(M.users.profile(e), {
        skipErrorToast: [Ke.NOT_FOUND],
      });

    const r = Kc(n);
    Kt.set(t, r);
    return r;
  },
  invalidateProfileCache(e) {
    Kt.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const r = Kt.get(n);

    if (r) {
      Kt.set(n, { ...r, ...t });
    }
  },
  async followUser(e) {
    await x.post(M.users.follow(e), {});
  },
  async unfollowUser(e) {
    await x.delete(M.users.follow(e));
  },
  async pinPost(e) {
    await x.post(M.posts.pin(e));
  },
  async unpinPost(e) {
    await x.delete(M.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await x.get(M.users.privacy);
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

    await x.put(M.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await x.get(M.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await x.post(M.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await x.get(M.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await x.put(M.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await x.delete(M.users.setPin);
  },
  async deleteAccount() {
    await x.delete(M.users.deleteAccount);
  },
  async restoreAccount() {
    await x.post(M.users.restoreAccount);
  },
};
function Xc(e) {
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
const Mt = Xe(e => ({
  statuses: {},

  setStatuses: t => e(n => ({
    statuses: { ...n.statuses, ...t }
  })),

  setStatus: (t, n) => e(r => ({
    statuses: { ...r.statuses, [t]: n }
  })),

  clear: () => e({ statuses: {} })
}));
let di = new Set();
function h0() {
  if (!ms) {
    (null = setTimeout(async () => {
      ms = null;
      const e = Array.from(di);
      di.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const r = await fi.batchFollowStatus(n);
            Mt.getState().setStatuses(r);
          } catch {}
        }
      }
    }, 50));
  }
}
function m0(e) {
  const t = ge(s => s.profile?.id);

  const n = Mt(s => s.statuses);

  const r = O("");

  D(() => {
    if (!t) {
      return;
    }

    const s = e.filter(c => c !== t && n[c] === undefined);

    const a = s.sort().join(",");
    if (!(a === r.current || a === "")) {
      r.current = a;
      for (const c of s) {
        di.add(c);
      }
      h0();
    }
  }, [e, t]);

  return {
    getStatus: R(
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
const hn = new Ki(500, 120 * 1000/* 1e3 */);
setInterval(() => hn.cleanup(), 60 * 1000/* 1e3 */);
const fi = {
  async followUser(e) {
    const t = await x.post(M.users.follow(e), {});
    hn.delete(e);
    Mt.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await x.delete(M.users.follow(e));
    hn.delete(e);
    Mt.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const o = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", o.toString());
    const s = n.toString();
    const a = `${M.users.followers(e)}${s ? `?${s}` : ""}`;
    const c = await x.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.followers ?? [];
    const p = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map(Xc), nextCursor: p };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const r = t.limit ?? 20;
    n.set("limit", r.toString());
    const o = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", o.toString());
    const s = n.toString();
    const a = `${M.users.following(e)}${s ? `?${s}` : ""}`;
    const c = await x.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.following ?? [];
    const p = l.pagination?.hasMore ?? false ? String(o + 1) : null;
    return { data: u.map(Xc), nextCursor: p };
  },
  async blockUser(e) {
    await x.post(M.users.block(e), {});
    hn.delete(e);
  },
  async unblockUser(e) {
    await x.delete(M.users.block(e));
    hn.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const r = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", r.toString());
    const o = t.toString();
    const s = `${M.users.blocked}${o ? `?${o}` : ""}`;
    const a = await x.get(s);
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
    const p = d ? String(r + 1) : null;
    return { users: u, nextCursor: p, hasMore: d };
  },
  async batchFollowStatus(e) {
    if (e.length === 0) {
      return {};
    }

    return (await x.post(M.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    hn.delete(e);
  },
  clearSocialCache() {
    hn.clear();
  },
};
function g0(e) {
  const t = Mt(o => o.statuses[e]);

  const n = R(async () => {
    Mt.getState().setStatus(e, true);
    try {
      await fi.followUser(e);
    } catch {
      Mt.getState().setStatus(e, false);
    }
  }, [e]);

  const r = R(async () => {
    Mt.getState().setStatus(e, false);
    try {
      await fi.unfollowUser(e);
    } catch {
      Mt.getState().setStatus(e, true);
    }
  }, [e]);

  return { isFollowing: t, follow: n, unfollow: r };
}
const _0 = "BpYX";
const v0 = "FmqU";
const y0 = "UuHm";
const w0 = "Qouo";
const E0 = "tFiI";
const b0 = "tTIM";
const S0 = "U7bJ";
const C0 = "lHli";
const N0 = "l7N0";
const T0 = "fxVP";
const I0 = "EZXJ";
const k0 = "MftO";
const R0 = "qcnJ";
const A0 = "e9On";

const qe = {
  overlay: _0,
  modalWrapper: v0,
  wide: y0,
  modal: w0,
  frameless: E0,
  header: b0,
  title: S0,
  closeButton: C0,
  externalCloseButton: N0,
  mobileOverlay: T0,
  closing: I0,
  bottomSheet: k0,
  dragHandle: R0,
  dragIndicator: A0,
};

const O0 = qn(null);
const L0 = 100;
const P0 = 0.5;
function on({
  children: e,
  onClose: t,
  title: n,
  showHeader: r = true,
  showCloseButton: o = true,
  frameless: s = false,
  className: a,
  contentClassName: c,
  size: l = "default",
  onBeforeClose: u,
}) {
  const d = O(null);
  const p = O(null);
  const f = O(null);
  const h = Wt();
  const m = O(0);
  const g = O(false);
  const [v, _] = L(false);
  const S = O(0);
  const y = O(0);
  const C = O(0);
  D(() => {
    const W = (ue) => {
        if (ue.key === "Escape") {
          if (u && !u()) {
            return;
          }
          t();
        }
      };

    const ne = document.documentElement.style.overflow;
    (document.documentElement.style.overflow = "hidden");
    document.addEventListener("keydown", W);

    return () => {
      document.removeEventListener("keydown", W);
      (document.documentElement.style.overflow = ne);
    };
  }, [t]);

  const b = (W) => {
      f.current = W.target;
    };

  const w = (W) => {
    if (f.current === d.current && W.target === d.current) {
      if (h) {
        T();
      } else {
        if (u && !u()) {
          return;
        }
        t();
      }
    }
    f.current = null;
  };

  const T = R(() => {
    if (u && !u()) {
      A(0, "transform 0.2s ease-out");
      k(0);
      (m.current = 0);
      return;
    }
    _(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, u]);

  const I = O(false);
  const N = O(false);

  const E = (W) => {
    let ne = W;

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

  const A = (W, ne) => {
    if (p.current) {
      (p.current.style.transform = W > 0 ? `translateY(${W}px)` : "");
      (p.current.style.transition = ne || "");
    }
  };

  const k = (W) => {
    if (d.current && W > 0) {
      (d.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
            0,
            0.4 - W / 500
          )})`);
    } else if (d.current) {
      (d.current.style.backgroundColor = "");
    }
  };

  const P = (W) => {
    if (!h) {
      return;
    }
    (S.current = W.touches[0].clientY);
    (y.current = Date.now());
    (C.current = W.touches[0].clientY);
    const W_target = W.target;
    if (W_target.closest(`.${qe.dragHandle}`)) {
      (I.current = true);
      (N.current = true);
      (g.current = true);

      if (p.current) {
        (p.current.style.transition = "none");
      }

      return;
    }
    (I.current = false);

    if (W_target.closest(
      'button, a, input, textarea, select, video, [role="button"]'
    )) {
      N.current = false;
      return;
    }

    if (W_target.tagName === "CANVAS" || W_target.closest("canvas")) {
      N.current = false;
      return;
    }
    const _e = E(W_target);
    N.current = !_e || _e.scrollTop === 0;
  };

  const G = (W) => {
    if (!h) {
      return;
    }
    const ne = W.touches[0].clientY;
    const ue = ne - S.current;
    (C.current = ne);

    if (I.current) {
      if (ue > 0) {
        (m.current = ue);
        A(ue);
        k(ue);
        W.preventDefault();
      }

      return;
    }

    if (N.current) {
      if (g.current && m.current > 0) {
        if (ue > 0) {
          (m.current = ue);
          A(ue);
          k(ue);
          W.preventDefault();
        } else {
          (m.current = 0);
          (g.current = false);
          A(0);
          k(0);
        }

        return;
      }

      if (ue > 0) {
        g.current ||
            ((g.current = true),
            p.current && (p.current.style.transition = "none"));

        (m.current = ue);
        A(ue);
        k(ue);
        W.preventDefault();
      }
    }
  };

  const F = () => {
    if (!h) {
      return;
    }
    const W = C.current - S.current;
    const ne = Date.now() - y.current;
    const ue = W / ne;

    if (g.current && (W > L0 || ue > P0)) {
      T();
    } else if (m.current > 0) {
      A(0, "transform 0.2s ease-out");
      k(0);
      (m.current = 0);
    }

    (g.current = false);
    (I.current = false);
    (N.current = false);
  };

  const ce = (() => {
    if (h && v) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const se = { onClose: t, isMobile: h, isClosing: v, handleClose: T };
  return i(O0.Provider, {
    value: se,
    children: i("div", {
      ref: d,
      className: `${qe.overlay} ${h ? qe.mobileOverlay : ""} ${
        v ? qe.closing : ""
      }`,
      onMouseDown: b,
      onMouseUp: w,
      children: i("div", {
        ref: p,
        className: `${qe.modalWrapper} ${l === "wide" ? qe.wide : ""} ${
          h ? qe.bottomSheet : ""
        }`,
        style: ce,
        onTouchStart: P,
        onTouchMove: G,
        onTouchEnd: F,
        children: [
          s &&
            !h &&
            i("button", {
              type: "button",
              className: qe.externalCloseButton,
              onClick: (W) => {
                W.stopPropagation();
                t();
              },
              children: i(gt, { size: 24 }),
            }),
          h &&
            i("div", {
              className: qe.dragHandle,
              children: i("div", { className: qe.dragIndicator }),
            }),
          i("div", {
            className: `${qe.modal} ${s ? qe.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !s &&
                r &&
                !h &&
                i("div", {
                  className: qe.header,
                  children: [
                    i("span", { className: qe.title, children: n }),
                    o &&
                      i("button", {
                        type: "button",
                        className: qe.closeButton,
                        onClick: (W) => {
                          W.stopPropagation();
                          t();
                        },
                        children: i(gt, { size: 16 }),
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
const x0 = "xKTx";
const $0 = "bdaP";
const M0 = "ywAA";
const D0 = "E0PE";
const U0 = "eoY1";
const F0 = "Rfqc";
const Zc = { spinner: x0, spin: $0, xs: M0, sm: D0, md: U0, lg: F0 };
function Wd({ size: e = "md", className: t }) {
  const n = [Zc.spinner, Zc[e], t].filter(Boolean).join(" ");
  return i("div", { className: n, children: i(zi, {}) });
}
const B0 = "LDu2";
const H0 = "CQx1";
const V0 = "KJDP";
const W0 = "g1eh";
const j0 = "OZXq";
const z0 = "VCZx";
const q0 = "q7QF";
const G0 = "Cr32";
const Y0 = "JX1E";
const K0 = "ox90";
const X0 = "weCP";
const Z0 = "UqnE";

const Ln = {
  button: B0,
  primary: H0,
  secondary: V0,
  ghost: W0,
  accent: j0,
  danger: z0,
  sm: q0,
  md: G0,
  lg: Y0,
  fullWidth: K0,
  iconOnly: X0,
  loading: Z0,
};

function De({
  children: e,
  variant: t = "primary",
  size: n = "md",
  fullWidth: r = false,
  iconOnly: o = false,
  loading: s = false,
  className: a,
  type: c = "button",
  disabled: l,
  ...u
}) {
  const d = [
    Ln.button,
    Ln[t],
    Ln[n],
    r && Ln.fullWidth,
    o && Ln.iconOnly,
    s && Ln.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return i("button", {
    type: c,
    className: d,
    disabled: l || s,
    ...u,
    children: s ? i(Wd, { size: "sm" }) : e,
  });
}
const Q0 = "ucIl";
const J0 = "ZJgA";
const ew = "nZdp";
const tw = "SBdn";
const eo = { content: Q0, title: J0, subtitle: ew, actions: tw };
function nw({ displayName: e, onConfirm: t, onClose: n }) {
  return i(on, {
    onClose: n,
    showHeader: false,
    children: i("div", {
      className: eo.content,
      children: [
        i("h2", { className: eo.title, children: "Отписаться?" }),
        i("p", {
          className: eo.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            i("strong", { children: e }),
            "?",
          ],
        }),
        i("div", {
          className: eo.actions,
          children: [
            i(De, {
              variant: "secondary",
              onClick: (r) => {
                r.stopPropagation();
                n();
              },
              children: "Отмена",
            }),
            i(De, {
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
const jd = qn(null);
let rw = 0;
function ow({ children: e }) {
  const [t, n] = L([]);

  const r = R((a) => {
    const c = `modal-${++rw}`;

    n(l => [...l, { id: c, component: a }]);

    return c;
  }, []);

  const o = R((a) => {
    n(c => a ? c.filter(l => l.id !== a) : c.slice(0, -1));
  }, []);

  const s = R(() => {
    n([]);
  }, []);

  D(() => {
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

  return i(jd.Provider, {
    value: { openModal: r, closeModal: o, closeAllModals: s },
    children: [e, t.length > 0 && i(sw, { modals: t })],
  });
}
function sw({ modals: e }) {
  return $(
    i(Ne, {
      children: e.map(({ id: t, component: n }) => i($e, { fallback: null, children: n }, t)
      ),
    }),
    document.body
  );
}
function sn() {
  const e = jo(jd);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const iw = "ll1j";
const aw = "G2tr";
const cw = "e2pI";
const lw = "uCjs";
const uw = "uZbn";
const dw = "OG23";
const fw = "x1Vp";
const pw = "cIdN";
const hw = "UM1G";
const mw = "irIq";
const gw = "ntAb";
const _w = "yxBA";

const qt = {
  avatar: iw,
  xs: aw,
  emoji: cw,
  onlineDot: lw,
  sm: uw,
  md: dw,
  lg: fw,
  xl: pw,
  badge: hw,
  followBadge: mw,
  notFollowing: gw,
  following: _w,
};

function vw(e) {
  return (
    e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/")
  );
}
function _t({
  src: e,
  alt: t,
  size: n = "md",
  badge: r,
  online: o,
  followBadge: s,
  onFollowBadgeClick: a,
  className: c,
}) {
  const l = e ? vw(e) : false;
  return i("div", {
    className: `${qt.avatar} ${qt[n]} ${c || ""}`,
    children: [
      l && e
        ? i("img", { src: e, alt: t || "" })
        : i("span", { className: qt.emoji, children: e || "👤" }),
      r && i("div", { className: qt.badge, children: r }),
      s !== undefined
        ? i("button", {
            type: "button",
            className: `${qt.followBadge} ${
              s ? qt.following : qt.notFollowing
            }`,
            onClick: (u) => {
              u.preventDefault();
              u.stopPropagation();
              a?.(u);
            },
            children: s ? i(Ay, { size: 8 }) : i(Ry, { size: 8 }),
          })
        : o && i("span", { className: qt.onlineDot }),
    ],
  });
}
const yw = "gdXs";
const ww = "BTKs";
const Ew = "e3t2";
const bw = "tz8g";
const Sw = "lvym";
const Cw = "lRTG";
const Nw = "syq5";
const Tw = "L67Z";
const Iw = "sbsu";
const kw = "CEZy";
const Rw = "xZ92";
const Aw = "MoTN";
const Ow = "jDdr";
const Lw = "O3uc";
const Pw = "lSVR";
const xw = "XkUe";
const $w = "n80e";
const Mw = "hL43";
const Dw = "C1xT";
const Uw = "ys7Y";
const Fw = "tudl";
const Bw = "RtJA";
const Hw = "H563";
const Vw = "eOL1";

const Te = {
  userName: yw,
  identity: ww,
  badges: Ew,
  pinBadge: bw,
  text: Sw,
  nukstaGlow: Cw,
  xs: Nw,
  sm: Tw,
  md: Iw,
  lg: kw,
  nameEnding: Rw,
  pinWrapper: Aw,
  nickname: Ow,
  gold: Lw,
  withNickname: Pw,
  trailing: xw,
  plain: $w,
  compact: Mw,
  pinClickable: Dw,
  pinTooltip: Uw,
  pinTooltipFadeIn: Fw,
  pinTooltipRow: Bw,
  pinTooltipLabel: Hw,
  pinTooltipArrow: Vw,
};

function Qc(e) {
  if (!e) {
    return "guest";
  }
  try {
    const t = e.split(".");
    if (t.length !== 3) {
      throw new Error("Not a JWT");
    }
    const n = t[1].replace(/-/g, "+").replace(/_/g, "/");
    const r = JSON.parse(atob(n.padEnd(Math.ceil(n.length / 4) * 4, "=")));
    if (typeof r.sub != "string" ||
    !r.sub ||
    (r.iss !== undefined && typeof r.iss != "string")) {
      throw new Error("No identity");
    }
    return JSON.stringify(["viewer", r.iss ?? "", r.sub]);
  } catch {
    return `opaque:${e}`;
  }
}
function Ww(e) {
  let t = Qc(e);
  return (n) => {
    const r = Qc(n);
    return r === t ? false : ((t = r), true);
  };
}
function Xi(e) {
  const t = Ww(rn());
  return Gv((n) => {
    if (t(n)) {
      e();
    }
  });
}
const lt = new Map();
const jw = 512;
let gs = 0;
let _s = false;
let to;
let yn = 0;
const zw = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function qw() {
  yn++;
  for (const e of lt.values()) {
    (e.value = null);
    (e.deadline = 0);
    (e.refreshAt = 0);

    e.listeners.forEach(t => t());
  }
  Zi();
}
function pi() {
  const e = performance.now();
  for (const [t, n] of lt) {
    if (!n.listeners.size &&
      (!n.value || n.deadline <= e || lt.size > jw)) {
      lt.delete(t);
    }
  }
}
function gr() {
  yn++;
  for (const e of lt.values()) {
    e.refreshAt = 0;
  }
  hi();
}
async function Zi() {
  if (_s || document.hidden || !rn()) {
    return;
  }
  const e = [...lt]
    .filter(([, n]) => n.listeners.size && n.refreshAt <= performance.now())
    .map(([n]) => n);
  if (!e.length) {
    return;
  }
  _s = true;
  const t = yn;
  try {
    for (let n = 0; n < e.length; n += 200) {
      const r = e.slice(n, n + 200);
      const o = performance.now();

      const s = await x.get(`/event-nicknames/?ids=${r.join(",")}`, {
        skipErrorToast: true,
      });

      if (t !== yn) {
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
      for (const l of r) {
        const u = lt.get(l);
        if (!u) {
          continue;
        }
        const d = s.data[l];
        const p = d ? Date.parse(d.expiresAt) - a : 0;

        (u.value = d &&
        typeof d.label == "string" &&
        d.label.length <= 128 &&
        Number.isFinite(p) &&
        p > 0
          ? d
          : null);

        (u.deadline = o + (Number.isFinite(p) ? Math.max(0, p) : 0));
        (u.refreshAt = o + Math.max(5000/* 5e3 */, Math.min(30000/* 3e4 */, Number.isFinite(c) ? c / 2 : 5000/* 5e3 */)));

        u.listeners.forEach(f => f());
      }
    }
  } catch {
    for (const n of t === yn ? e : []) {
      const r = lt.get(n);

      if (r) {
        (r.refreshAt = performance.now() + 10000/* 1e4 */);
      }
    }
  } finally {
    (_s = false);

    if (t !== yn) {
      Zi();
    }
  }
}
function hi() {
  for (const e of lt.values()) {
    if (e.value &&
      performance.now() >= e.deadline) {
      (e.value = null);
      e.listeners.forEach(t => t());
    }
  }
  Zi();
}
function Jc() {
  if (!document.hidden) {
    gr();
  }
}
Xi(() => {
  qw();
  pi();
});
function Qi(e) {
  const [, t] = L(0);

  D(() => {
    if (!e || !zw.test(e)) {
      return;
    }
    pi();
    let n = lt.get(e);

    if (!n) {
      (n = { listeners: new Set(), value: null, deadline: 0, refreshAt: 0 });
      lt.set(e, n);
    }

    const r = () => t(s => s + 1);
    n.listeners.add(r);
    gs++;

    if (!to) {
      (to = setInterval(hi, 1000/* 1e3 */));
      document.addEventListener("visibilitychange", Jc);
      window.addEventListener("online", gr);
      window.addEventListener("event-nickname-changed", gr);
    }

    const o = setTimeout(hi, 0);
    return () => {
      clearTimeout(o);
      n.listeners.delete(r);
      gs--;
      pi();

      if (!gs) {
        clearInterval(to);
        (to = undefined);
        document.removeEventListener("visibilitychange", Jc);
        window.removeEventListener("online", gr);
        window.removeEventListener("event-nickname-changed", gr);
        yn++;
      }
    };
  }, [e]);

  return (e ? lt.get(e)?.value : null) ?? null;
}

const Gw = de(() => ae(
  () => import("./index-CyjxWqQR.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])
).then(e => ({
  default: e.SubscriptionModal
}))
  );

const Yw = { xs: 12, sm: 14, md: 16, lg: 22 };
const Kw = "subscription_nuksta";
function Hr({
  userId: e,
  compact: t,
  trailing: n,
  name: r,
  verified: o,
  hasNuksta: s,
  pin: a,
  size: c = "md",
  className: l,
}) {
  const u = Qi(e);
  const Yw_c = Yw[c];
  const p = O(null);
  const [f, h] = L(null);
  const [m, g] = L(false);
  const [v, _] = L(null);
  const S = !!a?.url && v === a.url;
  const y = a?.slug === Kw;

  const C = R(() => {
    if (!p.current) {
      return;
    }
    const A = p.current.getBoundingClientRect();
    h({ x: A.left + A.width / 2, y: A.top });
  }, []);

  const b = R(() => {
    h(null);
  }, []);

  const w =
    u &&
    i("span", {
      className: Te.nickname,
      "data-nickname": u.id,
      title: u.label,
      children: i("bdi", {
        className: u.styleKey === "school_gold" ? Te.gold : undefined,
        children: u.label,
      }),
    });

  const T = A => s
    ? i("span", {
        className: Te.nukstaGlow,
        children: i("span", { className: Te.text, children: A }),
      })
    : i("span", { className: Te.text, children: A });

  const I = Array.from(r).at(-1) || "";

  const N =
    c === "lg" && (o || S)
      ? typeof Intl.Segmenter == "function"
        ? [
            ...new Intl.Segmenter(undefined, {
              granularity: "grapheme",
            }).segment(r),
          ].at(-1)
        : { segment: I, index: r.length - I.length }
      : undefined;

  const E =
    (o || a) &&
    i("span", {
      className: Te.badges,
      children: [
        o && i(Fy, {}),
        a &&
          i("span", {
            ref: p,
            className: `${Te.pinWrapper} ${y ? Te.pinClickable : ""}`,
            style: S ? undefined : { display: "none" },
            onMouseEnter: C,
            onMouseLeave: b,
            onClick: y
              ? (A) => {
              A.stopPropagation();
              A.preventDefault();
              g(true);
            }
              : undefined,
            children: [
              i("img", {
                src: a.url,
                alt: a.name,
                className: Te.pinBadge,
                width: Yw_c,
                height: Yw_c,
                onLoad: () => _(a.url || null),
                onError: () => _(null),
              }),
              f &&
                $(
                  i("div", {
                    className: Te.pinTooltip,
                    style: { left: `${f.x}px`, top: `${f.y}px` },
                    children: [
                      i("span", {
                        className: Te.pinTooltipRow,
                        children: [
                          i("span", {
                            className: Te.pinTooltipLabel,
                            children: "Пин:",
                          }),
                          " ",
                          a.name,
                        ],
                      }),
                      a.description &&
                        i("span", {
                          className: Te.pinTooltipRow,
                          children: [
                            i("span", {
                              className: Te.pinTooltipLabel,
                              children: "Ивент:",
                            }),
                            " ",
                            a.description,
                          ],
                        }),
                      i("span", { className: Te.pinTooltipArrow }),
                    ],
                  }),
                  document.body
                ),
            ],
          }),
      ],
    });

  return i("span", {
    className: `${Te.userName} ${Te[c]} ${t && u ? Te.compact : ""} ${
      u ? Te.withNickname : Te.plain
    } ${l || ""}`,
    "data-user-name": e,
    children: [
      u || c === "lg"
        ? i("span", {
            className: Te.identity,
            children: N
              ? i(Ne, {
                  children: [
                    T(r.slice(0, N.index)),
                    i("span", {
                      className: Te.nameEnding,
                      children: [T(N.segment), w, E],
                    }),
                  ],
                })
              : i(Ne, { children: [T(r), w, E] }),
          })
        : i(Ne, { children: [T(r), E] }),
      n &&
        i("span", {
          className: Te.trailing,
          onClick: (A) => {
            A.preventDefault();
            A.stopPropagation();
          },
          children: n,
        }),
      m &&
        i($e, {
          fallback: null,
          children: i(Gw, { isOpen: true, onClose: () => g(false) }),
        }),
    ],
  });
}
function Xw(e) {
  return "accessToken" in e;
}
function Zw(e) {
  return "accessToken" in e;
}
const un = { skipErrorToast: true };

const Gt = {
  async register(e) {
    return await yt.post(M.auth.signUp, e, un);
  },
  async login(e) {
    return await yt.post(M.auth.signIn, e, un);
  },
  async verifyOtp(e) {
    return await yt.post(M.auth.verifyOtp, e, un);
  },
  async resendOtp(e) {
    await yt.post(M.auth.resendOtp, e, un);
  },
  async refreshSession() {
    return await yt.post(M.auth.refresh);
  },
  async logout() {
    await yt.post(M.auth.logout);
  },
  async logoutAll() {
    await yt.post(`${M.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await yt.post(M.auth.forgotPassword, e, un);
  },
  async resetPassword(e) {
    await yt.post(M.auth.resetPassword, e, un);
  },
  async changePassword(e) {
    await yt.post(M.auth.changePassword, e, un);
  },
};

function dn(e, t) {
  if (!e) {
    qa(null);
    return;
  }
  qa({ id: e.id, username: e.username ?? undefined, email: t ?? undefined });
}

const no = {
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

const ge = Xe()(
  wd(
    (e, t) => {
      const n = Cd;

      Yv(async () => {
        try {
          const s = await Gt.refreshSession();
          n(s.accessToken);
          return s.accessToken;
        } catch (s) {
          return xe(s) && s.status >= 500
            ? (e({ status: "service_error" }), null)
            : (t().reset(), null);
        }
      });

      x.setOnUnauthorizedCallback(() => {
        if (t().status !== "service_error") {
          t().reset();
        }
      });

      return {
        ...no,
        register: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await Gt.register(o);

            e({
              status: "needs_verification",
              pendingEmail: o.email,
              pendingPassword: o.password,
              flowToken: s.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const a = xe(s) ? s.message : "Registration failed";
            const c = xe(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        login: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await Gt.login(o);
            if (Zw(s)) {
              n(s.accessToken);
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                      status: "authenticated",
                      pendingEmail: null,
                      email: o.email,
                    });

                  dn(t().profile, o.email);
                }
              } catch (c) {
                if (xe(c) &&
                (c.code === B.ENTITY_NOT_FOUND || c.status === 404)) {
                  e({
                    status: "needs_profile",
                    pendingEmail: null,
                    email: o.email,
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
              pendingEmail: o.email,
              pendingPassword: o.password,
              flowToken: a.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const a = xe(s) ? s.message : "Login failed";
            const c = xe(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        verifyOtp: async (o) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail: s, pendingPassword: a, flowToken: c } = t();
          try {
            const l = await Gt.verifyOtp({
              email: s || "",
              password: a || "",
              otp: o,
              flowToken: c || "",
            });
            e({ pendingPassword: null });

            if (Xw(l)) {
              n(l.accessToken);
              const u = s;
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

                  dn(t().profile, u);
                }
              } catch (d) {
                if (xe(d) &&
                (d.code === B.ENTITY_NOT_FOUND || d.status === 404)) {
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
            const u = xe(l) ? l.message : "Verification failed";
            const d = xe(l) ? l.code : null;
            e({ status: "needs_verification", error: u, errorCode: d });
            throw l;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail: o, flowToken: s } = t();
          try {
            await Gt.resendOtp({ email: o || "", flowToken: s || "" });
          } catch (a) {
            const c = xe(a) ? a.message : "Failed to resend code";
            const l = xe(a) ? a.code : null;
            e({ error: c, errorCode: l });
            throw a;
          }
        },
        createProfile: async (o) => {
          e({ error: null, errorCode: null });
          try {
            await Jr.createProfile(o);
            await t().fetchProfile();
            e({ status: "authenticated" });
            dn(t().profile, t().email);
          } catch (s) {
            const a = xe(s) ? s.message : "Failed to create profile";
            const c = xe(s) ? s.code : null;
            e({ error: a, errorCode: c });
            throw s;
          }
        },
        logout: async () => {
          try {
            await Gt.logout();
          } catch {
          } finally {
            n(null);
            e({ ...no, status: "unauthenticated" });
            dn(null, null);
          }
        },
        logoutAll: async () => {
          try {
            await Gt.logoutAll();
          } catch {
          } finally {
            n(null);
            e({ ...no, status: "unauthenticated" });
            dn(null, null);
          }
        },
        refreshSession: async () => {
          try {
            const o = await Gt.refreshSession();
            n(o.accessToken);
            return o.accessToken;
          } catch (o) {
            return xe(o) && o.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const o = await Jr.getMyProfile();
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
                dn(t().profile, t().email);
              }
            } catch (a) {
              if (xe(a) &&
              (a.code === B.ENTITY_NOT_FOUND || a.status === 404)) {
                e({ status: "needs_profile" });
              } else {
                throw a;
              }
            }
          } catch (s) {
            if (xe(s) && s.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await Jr.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await Jr.restoreAccount();
          await t().fetchProfile();
          const { status: o } = t();

          if (o === "account_deleted") {
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
          e({ ...no, status: "unauthenticated" });
          dn(null, null);
        },
        setProfile: (o) => {
          e({ profile: o });
        },
      };
    },
    {
      name: "auth-storage",
      storage: Hi(() => sessionStorage),
      partialize: e => ({
        profile: e.profile,
        email: e.email
      }),
    }
  )
);

const zd = () => ge(e => e.status);

const Ji = () => ge(e => e.profile);

const Ko = () => ge(e => e.status === "authenticated");

const Qw = "Je24";
const Jw = "Sdua";
const eE = "CToe";
const tE = "TPGQ";
const nE = "Ol3M";
const rE = "pw63";

const Pn = {
  screen: Qw,
  fullscreen: Jw,
  image: eE,
  title: tE,
  description: nE,
  action: rE,
};

const oE = {
  notFound:
    "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/404.png",
  server: "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/500.png",
};

const qd = ({ kind: e, title: t, description: n, action: r, fullscreen: o = false }) => i("div", {
  className: `${Pn.screen} ${o ? Pn.fullscreen : ""}`,
  children: [
    i("img", {
      className: Pn.image,
      src: oE[e],
      alt: "",
      width: 256,
      height: 256,
      "aria-hidden": "true",
    }),
    i("h1", { className: Pn.title, children: t }),
    n && i("p", { className: Pn.description, children: n }),
    r && i("div", { className: Pn.action, children: r }),
  ],
});

function sE({ children: e, currentPath: t }) {
  const n = zd();

  const r = ge(s => s.initialize);

  D(() => {
    if (n === "idle") {
      r();
    }
  }, [n, r]);

  D(() => {
    if (n === "loading" || n === "idle") {
      return;
    }
    const s = qc.some(a => t.startsWith(a));

    if (n === "unauthenticated" && !s) {
      if (!je(pe.LOGIN)) {
        window.location.replace(pe.LOGIN);
      }
    } else if (n === "needs_profile" && t !== pe.ONBOARDING) {
      if (!je(pe.ONBOARDING)) {
        window.location.replace(pe.ONBOARDING);
      }
    } else if (n === "authenticated" &&
        (t === pe.LOGIN || t === pe.REGISTER || t === pe.ONBOARDING)) {
      je(pe.HOME);
    }
  }, [n, t]);

  const o = qc.some(s => t.startsWith(s));
  return n === "idle" || (n === "loading" && !o)
    ? null
    : n === "service_error"
    ? i(iE, {})
    : n === "account_deleted"
    ? i(aE, {})
    : (n === "unauthenticated" && !o) ||
      (n === "needs_profile" && t !== pe.ONBOARDING)
    ? null
    : i(Ne, { children: e });
}
function iE() {
  const e = ge(o => o.initialize);

  const [t, n] = L(false);
  return i(qd, {
    kind: "server",
    fullscreen: true,
    title: "Сервис недоступен",
    description:
      "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
    action: i(De, {
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
function aE() {
  const e = ge(l => l.canRestore);

  const t = ge(l => l.restoreDeadline);

  const n = ge(l => l.restoreAccount);

  const r = ge(l => l.logout);

  const [o, s] = L(false);

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
        o
          ? i("p", {
              style: {
                fontSize: "15px",
                color: "var(--text-secondary)",
                margin: 0,
              },
              children: "Восстановление аккаунта...",
            })
          : e
          ? i(Ne, {
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
                    i(De, { onClick: c, children: "Восстановить аккаунт" }),
                    i("button", {
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
          : i(Ne, {
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
                  children: i(De, { onClick: () => r(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
const cE = "V0FM";
const lE = "cPsj";
const uE = "H08Z";
const dE = "u2EP";
const ro = { content: cE, icon: lE, text: uE, button: dE };
const el = "phone-verification-required";
function fE() {
  const [e, t] = L(false);

  const n = ge(o => o.profile?.id ?? "");

  D(() => {
    const o = () => t(true);
    window.addEventListener(el, o);

    return () => window.removeEventListener(el, o);
  }, []);

  if (!e) {
    return null;
  }

  const r = `https://t.me/itd_verification_bot?start=${n}`;
  return i(on, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: i("div", {
      className: ro.content,
      children: [
        i("div", { className: ro.icon, children: i(Uy, { size: 48 }) }),
        i("p", {
          className: ro.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        i("a", {
          href: r,
          target: "_blank",
          rel: "noopener noreferrer",
          className: ro.button,
          onClick: () => t(false),
          children: "Подтвердить через Telegram",
        }),
      ],
    }),
  });
}
function Gd(e = () => performance.now()) {
  const t = new WeakMap();
  const n = new Map();
  let r = 0;
  return {
    receive(o, s) {
      if (!s) {
        const c = n.get(o)?.deref();

        if (c) {
          (c.state = null);
          (c.received = e());
        }

        return s;
      }
      if (t.has(s)) {
        return s;
      }
      if (++r % 100 === 0) {
        for (const [c, l] of n) {
          if (!l.deref()) {
            n.delete(c);
          }
        }
      }
      const a = n.get(o)?.deref() ?? { state: null, received: 0 };
      (a.state = s);
      (a.received = e());
      t.set(s, a);
      n.set(o, new WeakRef(a));
      return s;
    },
    read(o) {
      return o ? t.get(o) : undefined;
    },
    replace(o, s, a = e()) {
      const c = n.get(o)?.deref();

      if (c && a >= c.received) {
        (c.state = s);
        (c.received = a);
      }

      return c ?? { state: s, received: a };
    },
    clear() {
      const o = e();
      for (const s of n.values()) {
        const a = s.deref();

        if (a) {
          (a.state = null);
          (a.received = o);
        }
      }
    },
  };
}
function Oo(e, t, n = performance.now()) {
  return Date.parse(e.serverTime) + Math.max(0, n - t);
}
const Xo = Gd();

const Nt = Xe(() => ({
  posts: {},
  received: {},
  inventory: null,
  generation: 0
}));

const bt = new Map();
let oo;
let ys;
let Ut = 0;
let ar;
function ea() {
  if (!rn()) {
    Nt.setState({ inventory: null });
    return Promise.resolve();
  }
  if (ar?.generation === Ut) {
    return ar.promise;
  }
  const e = Ut;

  const t = Promise.resolve()
    .then(async () => {
      try {
        const n = await x.get("/red-pens/inventory", { skipErrorToast: true });

        if (e === Ut) {
          Nt.setState({ inventory: n.data });
        }
      } catch (n) {
        if (e === Ut) {
          Nt.setState({ inventory: null });
        }

        throw n;
      }
    })
    .finally(() => {
    if (ar?.promise === t) {
      (ar = undefined);
    }
  });

  (ar = { generation: e, promise: t });
  return t;
}
async function ta(e = [...bt.keys()]) {
  if (!e.length) {
    return;
  }
  const t = Ut;
  const n = performance.now();

  const r = await x.get(`/red-pens/state?ids=${e.join(",")}`, {
    skipErrorToast: true,
  });

  if (t !== Ut) {
    return;
  }
  if (!r?.data || typeof r.data != "object" || Array.isArray(r.data)) {
    throw new Error("Invalid event state response");
  }

  const o = e
      .filter(c => bt.has(c))
      .map((c) => {
        const l = r.data[c] ?? null;
        return [c, Xo.replace(c, l, n)];
      });

  const s = Object.fromEntries(o.map(([c, l]) => [c, l.state]));

  const a = Object.fromEntries(o.map(([c, l]) => [c, l.received]));

  Nt.setState(c => ({
    posts: { ...c.posts, ...s },
    received: { ...c.received, ...a }
  }));
}
function xn() {
  if (document.hidden || ys) {
    return;
  }
  const e = [...bt.keys()];
  ys = Promise.all([
    ea(),
    (async () => {
      for (let t = 0; t < e.length; t += 100) {
        await ta(e.slice(t, t + 100));
      }
    })(),
  ])
    .then(() => {})
    .catch(() => {})
    .finally(() => {
      ys = undefined;
    });
}
function pE(e) {
  bt.set(e, (bt.get(e) ?? 0) + 1);

  if (!oo) {
    (oo = setInterval(xn, 15000/* 15e3 */));
    window.addEventListener("focus", xn);
    document.addEventListener("visibilitychange", xn);
  }

  if (!vs) {
    (vs = true);

    queueMicrotask(() => {
      (vs = false);
      xn();
    });
  }

  return () => {
    const t = (bt.get(e) ?? 1) - 1;

    if (t) {
      bt.set(e, t);
    } else {
      bt.delete(e);

      Nt.setState((n) => {
        const r = { ...n.posts };
        const o = { ...n.received };
        delete r[e];
        delete o[e];
        return { posts: r, received: o };
      });
    }

    if (!bt.size) {
      clearInterval(oo);
      (oo = undefined);
      window.removeEventListener("focus", xn);
      document.removeEventListener("visibilitychange", xn);
      Ut++;
      Nt.setState({ inventory: null });
    }
  };
}
Xi(() => {
  Ut++;
  Xo.clear();
  Nt.setState({ posts: {}, received: {}, inventory: null, generation: Ut });

  if (bt.size) {
    ta().catch(() => {});
    ea().catch(() => {});
  }
});
const Zo = Gd();

const Tt = Xe(() => ({
  posts: {},
  received: {},
  inventory: null,
  generation: 0
}));

const St = new Map();
let so;
let Es;
let Ft = 0;
let cr;
function na() {
  if (!rn()) {
    Tt.setState({ inventory: null });
    return Promise.resolve();
  }
  if (cr?.generation === Ft) {
    return cr.promise;
  }
  const e = Ft;

  const t = Promise.resolve()
    .then(async () => {
      try {
        const n = await x.get("/correctors/inventory", {
          skipErrorToast: true,
        });

        if (e === Ft) {
          Tt.setState({ inventory: n.data });
        }
      } catch (n) {
        if (e === Ft) {
          Tt.setState({ inventory: null });
        }

        throw n;
      }
    })
    .finally(() => {
    if (cr?.promise === t) {
      (cr = undefined);
    }
  });

  (cr = { generation: e, promise: t });
  return t;
}
async function ra(e = [...St.keys()]) {
  if (!e.length) {
    return;
  }
  const t = Ft;
  const n = performance.now();

  const r = await x.get(`/correctors/state?ids=${e.join(",")}`, {
    skipErrorToast: true,
  });

  if (t !== Ft) {
    return;
  }
  if (!r?.data || typeof r.data != "object" || Array.isArray(r.data)) {
    throw new Error("Invalid event state response");
  }

  const o = e
      .filter(c => St.has(c))
      .map((c) => {
        const l = r.data[c] ?? null;
        return [c, Zo.replace(c, l, n)];
      });

  const s = Object.fromEntries(o.map(([c, l]) => [c, l.state]));

  const a = Object.fromEntries(o.map(([c, l]) => [c, l.received]));

  Tt.setState(c => ({
    posts: { ...c.posts, ...s },
    received: { ...c.received, ...a }
  }));
}
function $n() {
  if (document.hidden || Es) {
    return;
  }
  const e = [...St.keys()];
  Es = Promise.all([
    na(),
    (async () => {
      for (let t = 0; t < e.length; t += 100) {
        await ra(e.slice(t, t + 100));
      }
    })(),
  ])
    .then(() => {})
    .catch(() => {})
    .finally(() => {
      Es = undefined;
    });
}
function hE(e) {
  St.set(e, (St.get(e) ?? 0) + 1);

  if (!so) {
    (so = setInterval($n, 15000/* 15e3 */));
    window.addEventListener("focus", $n);
    document.addEventListener("visibilitychange", $n);
  }

  if (!ws) {
    (ws = true);

    queueMicrotask(() => {
      (ws = false);
      $n();
    });
  }

  return () => {
    const t = (St.get(e) ?? 1) - 1;

    if (t) {
      St.set(e, t);
    } else {
      St.delete(e);

      Tt.setState((n) => {
        const r = { ...n.posts };
        const o = { ...n.received };
        delete r[e];
        delete o[e];
        return { posts: r, received: o };
      });
    }

    if (!St.size) {
      clearInterval(so);
      (so = undefined);
      window.removeEventListener("focus", $n);
      document.removeEventListener("visibilitychange", $n);
      Ft++;
      Tt.setState({ inventory: null });
    }
  };
}
Xi(() => {
  Ft++;
  Zo.clear();
  Tt.setState({ posts: {}, received: {}, inventory: null, generation: Ft });

  if (St.size) {
    ra().catch(() => {});
    na().catch(() => {});
  }
});
function lr(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const ut = new Ki(50, 300 * 1000/* 1e3 */);
const mE = 60 * 1000/* 1e3 */;
setInterval(() => ut.cleanup(), 120 * 1000/* 1e3 */);
function gE(e) {
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
function Xt(e) {
  const n = (e.attachments ?? []).map((d) => {
    if (d.type === "poll") {
      const p = d;

      const f = p.options.map(h => ({
        id: h.id,
        text: h.text,
        votes: h.votesCount ?? h.voteCount ?? h.votes ?? 0
      }));

      return {
        ...d,
        options: f,
        totalVotes: p.totalVotes ?? 0,
        multipleChoice: p.multipleChoice ?? false,
        myVotes: p.votedOptionIds?.length
          ? p.votedOptionIds
          : e.viewerStatus?.pollVote
          ? [e.viewerStatus.pollVote]
          : [],
        myVote: p.votedOptionIds?.[0] ?? e.viewerStatus?.pollVote ?? null,
      };
    }
    return d;
  });
  if (e.poll && !n.some(d => d.type === "poll")) {
    const e_poll = e.poll;

    const p = {
      id: e_poll.id,
      type: "poll",
      question: e_poll.question,
      multipleChoice: e_poll.multipleChoice ?? false,
      options: (e_poll.options ?? []).map(f => ({
        id: f.id,
        text: f.text,
        votes: f.votesCount ?? f.voteCount ?? 0
      })),
      totalVotes: e_poll.totalVotes ?? 0,
      myVotes: e_poll.votedOptionIds ?? [],
      myVote: e_poll.votedOptionIds?.length > 0 ? e_poll.votedOptionIds[0] : null,
    };

    n.push(p);
  }
  const r = e.stats?.reactions ?? e.likesCount ?? 0;
  const o = e.stats?.views ?? e.viewsCount ?? 0;
  const s = e.stats?.comments ?? e.commentsCount ?? 0;
  const a = e.stats?.reposts ?? e.repostsCount ?? 0;
  const c = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const l = e.viewerStatus?.isReposted ?? e.isReposted ?? false;
  const u = e.text ?? e.content ?? "";
  return {
    id: e.id,
    author: gE(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: u,
    spans: e.spans ?? [],
    corrector: Zo.receive(e.id, e.corrector),
    redPen: Xo.receive(e.id, e.redPen),
    notebook:
      e.notebook?.style === "grid" || e.notebook?.style === "ruled"
        ? { style: e.notebook.style }
        : undefined,
    attachments: n,
    reactions: { total: r, myReaction: c },
    stats: { views: o, comments: s, reposts: a },
    reposted: l,
    originalPost: e.originalPost ? Xt(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
    vs: typeof e.vs == "string" ? e.vs : undefined,
  };
}

const He = {
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
      const o = `${M.posts.list}${r ? `?${r}` : ""}`;
      const s = await x.get(o);
      return { data: s.data.posts.map(Xt), nextCursor: lr(s.data) };
    },
    async getPost(e) {
      const t = await x.get(M.posts.single(e));
      return Xt(t.data);
    },
    async getUserWall(e, t = {}) {
      if (!t.cursor) {
        const n = e;
        const r = ut.get(n);
        const o = r && r.pinnedPostId === (t.pinnedPostId ?? null);

        if (r && o && ut.isFresh(n, mE)) {
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
    getCachedWall(e, t) {
      const n = ut.get(e);
      return !n || n.pinnedPostId !== (t ?? null)
        ? null
        : { data: n.posts, nextCursor: n.nextCursor };
    },
    async _fetchAndCacheWall(e, t, n) {
      const r = await this._fetchWall(e, t);

      ut.set(n, {
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
      const o = `${M.posts.byUser(e)}${r ? `?${r}` : ""}`;
      const s = await x.get(o);
      return { data: s.data.posts.map(Xt), nextCursor: lr(s.data) };
    },
    invalidateWallCache(e) {
      ut.delete(e);
    },
    invalidateAllWallCaches() {
      ut.clear();
    },
    updatePostInWallCache(e, t, n) {
      const r = ut.get(e);
      if (r) {
        const o = r.posts.map(s => s.id === t ? { ...s, ...n } : s);
        ut.set(e, { ...r, posts: o });
      }
    },
    removePostFromWallCache(e, t) {
      const n = ut.get(e);
      if (n) {
        const r = n.posts.filter(o => o.id !== t);
        ut.set(e, { ...n, posts: r });
      }
    },
    async likePost(e) {
      return await x.post(M.posts.like(e));
    },
    async unlikePost(e) {
      return await x.delete(M.posts.like(e));
    },
    async createPost(e) {
      return await x.post(M.posts.create, {
        content: e.text,
        spans: e.spans,
        wallRecipientId: e.wallOwnerId,
        attachmentIds: e.attachmentIds,
        poll: e.poll,
        notebook: e.notebook,
      });
    },
    async createRepost(e, t) {
      const n = await x.post(M.posts.repost(e), { content: t });
      return Xt(n);
    },
    async getPostsStats(e) {
      if (e.length === 0) {
        return [];
      }

      return (await x.post(`${M.posts.list}/stats`, { ids: e })).posts ?? [];
    },
    async editPost(e, t) {
      const n = t.content ?? t.text;
      await x.put(M.posts.update(e), { content: n, spans: t.spans });
    },
    async deletePost(e) {
      await x.delete(M.posts.delete(e));
    },
    async restorePost(e) {
      await x.post(M.posts.restore(e));
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
      const o = `${M.posts.byUser(e)}${r ? `?${r}` : ""}`;
      const s = await x.get(o);
      return { data: s.data.posts.map(Xt), nextCursor: lr(s.data) };
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
      const o = `${M.posts.likedByUser(e)}${r ? `?${r}` : ""}`;
      const s = await x.get(o);
      return { data: s.data.posts.map(Xt), nextCursor: lr(s.data) };
    },
    async pinPost(e) {
      await x.post(M.posts.pin(e));
    },
    async unpinPost(e) {
      await x.delete(M.posts.pin(e));
    },
    async votePoll(e, t) {
      const n = await x.post(M.posts.pollVote(e), { optionIds: t });
      return n.data ?? n;
    },
    async unrepost(e) {
      await x.delete(M.posts.repost(e));
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
      const o = `${M.hashtags.posts(e)}${r ? `?${r}` : ""}`;
      const s = await x.get(o);
      return { data: s.data.posts.map(Xt), nextCursor: lr(s.data) };
    },
  };

const _E = { new: "newest", old: "oldest", popular: "popular" };
function vE(e) {
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
function mi(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const r = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const o = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: vE(e.author),
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
        ? (e.previewReplies ?? e.replies).map(mi)
        : undefined,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}
const wt = {
  async getComments(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.sort) {
      n.set("sort", _E[t.sort]);
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const r = n.toString();
    const o = `${M.posts.comments(e)}${r ? `?${r}` : ""}`;
    const s = await x.get(o);
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
    return { data: a.map(mi), nextCursor: c };
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
    const o = `${M.comments.replies(e)}${r ? `?${r}` : ""}`;
    const s = await x.get(o);
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
    return { data: a.map(mi), nextCursor: c };
  },
  async createComment(e, t, n, r, o) {
    return await x.post(M.posts.comments(e), {
      content: t,
      attachmentIds: o?.map(s => s.mediaId),
    });
  },
  async createReply(e, t, n, r, o) {
    return await x.post(M.comments.replies(e), {
      content: t,
      replyToUserId: r,
      attachmentIds: o?.map(s => s.mediaId),
    });
  },
  async editComment(e, t, n) {
    await x.patch(M.comments.edit(e), { content: t });
  },
  async deleteComment(e) {
    await x.delete(M.comments.delete(e));
  },
  async likeComment(e) {
    await x.post(M.comments.like(e));
  },
  async unlikeComment(e) {
    await x.delete(M.comments.like(e));
  },
};
function yo(e, t, n) {
  const r = e.originalPost ? yo(e.originalPost, t, n) : e.originalPost;

  const o =
    e.author.id === t && e.author.avatar !== n
      ? { ...e.author, avatar: n }
      : e.author;

  return o !== e.author || r !== e.originalPost
    ? { ...e, author: o, originalPost: r }
    : e;
}

const le = Xe((e, t) => ({
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
    const r = t();
    if (r.activeFeed === n) {
      return;
    }
    const o = r.feedCache[r.activeFeed];

    const s = {
      ...r.feedCache,
      [r.activeFeed]: {
        posts: r.posts,
        nextCursor: r.nextCursor,
        hasMore: r.hasMore,
        scrollPosition: typeof window !== "undefined" ? window.scrollY : 0,
        measuredHeights: o?.measuredHeights ?? r.feedMeasuredHeights,
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
            feedRestoreToken: r.feedRestoreToken + 1,
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
            feedRestoreToken: r.feedRestoreToken + 1,
          });
    }
  },

  fetchFeed: async (n = false) => {
    const { activeFeed: r, isLoading: o, isRefreshing: s } = t();
    if (!(o || s)) {
      e({ isLoading: !n, isRefreshing: n, error: null });
      try {
        const a = await He.getFeed(r, { limit: 20 });
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
          error: xe(a) ? Vi(a.code, a.message) : "Не удалось загрузить ленту",
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
        const a = await He.getFeed(n, { limit: 20, cursor: s ?? undefined });
        e(c => ({
          posts: [...c.posts, ...a.data],
          nextCursor: a.nextCursor,
          hasMore: a.nextCursor !== null,
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
    poll: a,
    notebook: c,
  }) => {
    const l = ge.getState().profile;
    if (!l) {
      throw new Error("Not authenticated");
    }
    try {
      const u = s.map(({ mediaId: h }) => h);

      const { id: d } = await He.createPost({
        wallOwnerId: n !== l.id ? n : undefined,
        text: r,
        spans: o.length > 0 ? o : undefined,
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

      const p = s.map(({ url: h }, m) => ({
        id: `temp-${m}`,
        url: h,
        type: "image"
      }));

      if (a) {
        p.push({
          id: `temp-poll-${Date.now()}`,
          type: "poll",
          question: a.question,
          options: a.options.map((h, m) => ({
            id: `temp-opt-${m}`,
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
        text: r,
        spans: o,
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

      He.invalidateWallCache(n);
      try {
        const h = await He.getPost(d);
        e(m => ({
          posts: m.posts.map(g => g.id === d ? h : g)
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
    const r = t().posts.find(o => o.id === n);
    if (r) {
      e({ currentPost: r, currentPostLoading: false, currentPostError: false });
      return;
    }
    if (t().currentPost?.id !== n) {
      e({ currentPostLoading: true, currentPost: null, currentPostError: false });
      try {
        const o = await He.getPost(n);
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
    await He.editPost(n, { text: r, spans: o });
    const { posts: s, currentPost: a } = t();
    const c = new Date().toISOString();

    const l = s.find(u => u.id === n);

    e({
      posts: s.map(u => u.id === n ? { ...u, text: r, spans: o ?? u.spans, editedAt: c } : u
      ),
      currentPost:
        a?.id === n ? { ...a, text: r, spans: o ?? a.spans, editedAt: c } : a,
      _lastPostEdit: { postId: n, text: r, spans: o ?? [], editedAt: c },
    });

    if (l?.wallOwnerId) {
      He.updatePostInWallCache(l.wallOwnerId, n, {
        text: r,
        spans: o ?? l.spans,
        editedAt: c,
      });
    }
  },

  deletePost: async (n) => {
    const { posts: r, currentPost: o } = t();
    const s = r;

    const a = r.find(c => c.id === n);

    e({
      posts: r.filter(c => c.id !== n),
      currentPost: o?.id === n ? null : o,
    });
    try {
      await He.deletePost(n);
    } catch (c) {
      console.error("Failed to delete post:", c);

      if (a) {
        e({ posts: s });
      }

      throw c;
    }
  },

  updatePostLike: (n, r, o) => {
    e((s) => {
      const a = s.postStatsCache[n];

      const c = a
        ? {
            ...s.postStatsCache,
            [n]: {
              ...a,
              myReaction: r,
              likesTotal: Math.max(0, a.likesTotal + o),
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
      const a = s.postStatsCache[n];

      const c = a
        ? {
            ...s.postStatsCache,
            [n]: {
              ...a,
              reposted: r,
              repostsCount: Math.max(0, a.repostsCount + o),
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

      const a = (l) => {
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
          a(l.originalPost);
        }
      };

      a(n);
      return Object.keys(s).length === 0 ? r : { postStatsCache: { ...r_postStatsCache, ...s } };
    });
  },

  beginLikeMutation: (n) => {
    e(r => ({
      _likePending: { ...r._likePending, [n]: (r._likePending[n] ?? 0) + 1 }
    }));
  },

  endLikeMutation: (n, r) => {
    e((o) => {
      const s = (o._likePending[n] ?? 1) - 1;
      const a = { ...o._likePending };

      if (s > 0) {
        (a[n] = s);
      } else {
        delete a[n];
      }

      const c = o.postStatsCache[n];
      const l = s === 0 && r !== undefined && c;
      return {
        _likePending: a,
        _likeSettledAt: { ...o._likeSettledAt, [n]: Date.now() },
        postStatsCache: l
          ? { ...o.postStatsCache, [n]: { ...c, likesTotal: r } }
          : o.postStatsCache,
        posts: l
          ? o.posts.map(u => u.id === n
          ? { ...u, reactions: { ...u.reactions, total: r } }
          : u
            )
          : o.posts,
      };
    });
  },

  applyStatsUpdates: (n, r = Date.now()) => {
    if (n.length === 0) {
      return;
    }
    const { _likePending: o, _likeSettledAt: s } = t();

    const a = u => (o[u] ?? 0) > 0 || (s[u] ?? 0) > r;

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

  updatePollVote: (n, r, o) => {
    const s = (a) => {
      const c = a.attachments.findIndex(h => h.type === "poll");
      if (c === -1) {
        return a;
      }
      const l = a.attachments[c];

      const u = l.options.map(h => h.id === r
        ? { ...h, votes: (h.votes ?? 0) + 1 }
        : h.id === o
        ? { ...h, votes: Math.max(0, (h.votes ?? 0) - 1) }
        : h
      );

      const d = o ? 0 : 1;

      const p = {
        ...l,
        options: u,
        totalVotes: (l.totalVotes ?? 0) + d,
        myVote: r,
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

  updatePollData: (n, r) => {
    const o = (s) => {
      const a = s.attachments.findIndex(u => u.type === "poll");
      if (a === -1) {
        return s;
      }

      const c = {
          ...s.attachments[a],
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
      (l[a] = c);
      return { ...s, attachments: l };
    };
    e((s) => {
      const a = s.posts.map(l => l.id === n ? o(l) : l);

      const c = s.currentPost?.id === n ? o(s.currentPost) : s.currentPost;
      return { posts: a, currentPost: c };
    });
  },

  setFeedScrollPosition: (n) => {
    e({ feedScrollPosition: n });
  },

  setFeedMeasuredHeights: (n) => {
    e({ feedMeasuredHeights: n });
  },

  cacheFeedHeights: (n, r) => {
    e((o) => {
      const s = o.feedCache[n];
      return {
        feedCache: {
          ...o.feedCache,
          [n]: {
            posts: s?.posts ?? [],
            nextCursor: s?.nextCursor ?? null,
            hasMore: s?.hasMore ?? true,
            scrollPosition: s?.scrollPosition ?? 0,
            measuredHeights: r,
          },
        },
        ...(o.activeFeed === n ? { feedMeasuredHeights: r } : {}),
      };
    });
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

  replaceAuthorAvatar: (n, r) => {
    He.invalidateAllWallCaches();

    e((o) => {
      const s = Object.fromEntries(
        Object.entries(o.feedCache).map(([a, c]) => [
          a,
          c && { ...c, posts: c.posts.map(l => yo(l, n, r)) },
        ])
      );
      return {
        posts: o.posts.map(a => yo(a, n, r)),
        currentPost: o.currentPost ? yo(o.currentPost, n, r) : null,
        feedCache: s,
      };
    });
  },

  reset: () => {
    t().feedMeasuredHeights.clear();

    ae(async () => {
      const { useCommentsStore: n } = await Promise.resolve().then(
        () => bE
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

const bs = Object.freeze(
  Object.defineProperty(
    { __proto__: null, usePostsStore: le },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const wo = Xe()(
  wd(
    e => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      }
    }),
    { name: "settings", storage: Hi(() => localStorage) }
  )
);

const ot = new Map();
const yE = 60 * 1000/* 1e3 */;
const wE = 300 * 1000/* 1e3 */;
const tl = 20;
const nl = 500;
function EE() {
  const e = Date.now();
  for (const [t, n] of ot.entries()) {
    if (e - n.timestamp > wE) {
      ot.delete(t);
    }
  }
  if (ot.size > tl) {
    const t = Array.from(ot.entries()).sort(
      (r, o) => r[1].timestamp - o[1].timestamp
    );
    t.slice(0, t.length - tl).forEach(([r]) => ot.delete(r));
  }
}

const Jt = Xe((e, t) => ({
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
    const { usePostsStore: r } = await ae(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => bs);
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
    EE();
    const s = wo.getState().commentsSort;
    const a = n;
    const c = ot.get(a);
    const l = Date.now();
    if (c && c.sort === s) {
      if (l - c.timestamp < yE) {
        e({
          comments: c.comments,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.hasMore,
          commentsLoading: false,
        });

        wt
          .getComments(n, { limit: 100, sort: s })
          .then((d) => {
          const d_data = d.data;

          ot.set(a, {
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
      const u = await wt.getComments(n, { limit: 100, sort: s });
      const u_data = u.data;

      ot.set(a, {
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
    const a = wo.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await wt.getComments(n, {
        limit: 100,
        sort: a,
        cursor: s ?? undefined,
      });
      e((l) => {
        const u = [...l.comments, ...c.data];
        return {
          comments: u.length > nl ? u.slice(-nl) : u,
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

    let o = r.findIndex(g => g.id === n);

    let s = false;
    let a = -1;
    let c = -1;
    if (o === -1) {
      for (let g = 0; g < r.length; g++) {
        const _ = (r[g].previewReplies ?? []).findIndex(S => S.id === n);
        if (_ !== -1) {
          (s = true);
          (a = g);
          (c = _);
          break;
        }
      }
    }
    if (o === -1 && !s) {
      return;
    }
    const l = s ? r[a].previewReplies[c] : r[o];
    const u = l.reactions.myReaction;
    const d = l.reactions.total;
    const p = u !== null;
    const f = p ? Math.max(0, d - 1) : d + 1;
    const h = p ? null : "love";
    const m = [...r];
    if (s) {
      const g = [...(m[a].previewReplies ?? [])];
      (g[c] = { ...g[c], reactions: { total: f, myReaction: h } });
      (m[a] = { ...m[a], previewReplies: g });
    } else {
      m[o] = { ...m[o], reactions: { total: f, myReaction: h } };
    }
    e({ comments: m });
    try {
      if (p) {
        await wt.unlikeComment(n);
      } else {
        await wt.likeComment(n);
      }
    } catch (g) {
      console.error("Failed to toggle comment like:", g);
      const v = [...t().comments];
      if (s) {
        const _ = v.findIndex(S => S.previewReplies?.some(y => y.id === n)
        );
        if (_ !== -1) {
          const S = v[_].previewReplies.findIndex(y => y.id === n);
          if (S !== -1) {
            const y = [...v[_].previewReplies];
            (y[S] = { ...y[S], reactions: { total: d, myReaction: u } });
            (v[_] = { ...v[_], previewReplies: y });
          }
        }
      } else {
        const _ = v.findIndex(S => S.id === n);

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
      text: r,
      spans: o = [],
      parentId: s,
      attachments: a,
      replyToUserId: c,
      replyToInfo: l,
    }
  ) => {
    try {
      const u = s
          ? await wt.createReply(s, r, o, c, a)
          : await wt.createComment(n, r, o, undefined, a);

      const d = ge.getState().profile;
      if (d) {
        const g = (u.attachments || [])
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
          text: u.text ?? u.content ?? r,
          spans: u.spans,
          attachments: g,
          replyTo: u.replyTo ?? l ?? null,
          reactions: { total: 0, myReaction: null },
          stats: { replies: 0 },
          createdAt: new Date().toISOString(),
          editedAt: null,
        };

        e(
          s
            ? _ => ({
            comments: _.comments.map(S => S.id === s
              ? {
                  ...S,
                  previewReplies: [...(S.previewReplies || []), v],
                  stats: { ...S.stats, replies: S.stats.replies + 1 },
                }
              : S
            ),

            highlightedCommentId: u.id
          })
            : _ => ({
            comments: [v, ..._.comments],
            highlightedCommentId: u.id
          })
        );
      }

      const { usePostsStore: p } = await ae(async () => {
          const { usePostsStore: g } = await Promise.resolve().then(() => bs);
          return { usePostsStore: g };
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

      const h = wo.getState().commentsSort;
      const m = ot.get(n);

      if (m) {
        ot.set(n, { ...m, comments: t().comments, timestamp: Date.now() });
      } else {
        ot.set(n, {
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
        const s = await wt.getReplies(n, { limit: 100 });
        e(a => ({
          comments: a.comments.map(c => c.id === n ? { ...c, previewReplies: s.data } : c
          )
        }));
      } catch (s) {
        console.error("Failed to load replies:", s);
      }
    }
  },

  editComment: async (n, r, o) => {
    const { comments: s } = t();

    const a = l => l.map(u => u.id === n
      ? {
          ...u,
          text: r,
          spans: o ?? u.spans,
          editedAt: new Date().toISOString(),
        }
      : u.previewReplies
      ? {
          ...u,
          previewReplies: u.previewReplies.map(d => d.id === n
            ? {
                ...d,
                text: r,
                spans: o ?? d.spans,
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
      await wt.editComment(n, r, o);
    } catch (l) {
      console.error("Failed to edit comment:", l);
      e({ comments: c });
      throw l;
    }
  },

  deleteComment: async (n) => {
    const { comments: r } = t();

    const o = r.some(u => u.id === n);

    const s = r.find(u => u.previewReplies?.some(d => d.id === n));

    const a = r;

    if (o) {
      e({ comments: r.filter(u => u.id !== n) });
    } else if (s) {
      e({
        comments: r.map(u => u.id === s.id
          ? {
              ...u,
              previewReplies: u.previewReplies?.filter(d => d.id !== n),
              stats: { ...u.stats, replies: u.stats.replies - 1 },
            }
          : u
        ),
      });
    }

    const { usePostsStore: c } = await ae(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => bs);
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
      await wt.deleteComment(n);
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
    ot.clear();

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

const bE = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useCommentsStore: Jt },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Lo = {
  feed_global: 1,
  feed_following: 2,
  feed_clan: 3,
  profile: 4,
  hashtag: 5,
  post_page: 6,
  link: 7,
  search: 8,
};

const SE = 0;
const CE = 1;
const NE = 2;
const TE = 3;
const rl = 4;
const IE = 5;
const kE = 250;
const RE = 0.5;
const AE = 30000/* 3e4 */;
const OE = 2000/* 2e3 */;
const LE = 20;
const ol = "dwell_sid";

const PE = [
  0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
  0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
];

function xE() {
  try {
    let e = sessionStorage.getItem(ol);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(ol, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
function $E(e) {
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
  return ((intersectionRect ? intersectionRect.height / boundingClientRect.height : 0) >= RE ||
  (rootBounds ? intersectionRect.height >= rootBounds.height / 2 : false) || e.intersectionRatio > 0.95);
}
class ME {
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
    (this.sessionId = xE());

    (this.observer = new IntersectionObserver(
        (r) => {
          for (const o of r) {
            const s = this.elementToPostId.get(o.target);
            if (!s) {
              continue;
            }
            const a = this.posts.get(s);

            if (a) {
              (a.lastEntry = o);
              this.evaluate(a, null);
            }
          }
        },
        { threshold: PE }
      ));

    const t = () => {
        this.lastActivityAt = Date.now();
      };

    const n = ["mousemove", "scroll", "keydown", "touchstart", "wheel"];
    for (const r of n) {
      window.addEventListener(r, t, { passive: true });
    }

    document.addEventListener("visibilitychange", () => {
      const r = document.hidden ? NE : null;
      this.evaluateAll(r);

      if (document.hidden) {
        this.flushBeacon();
      }
    });

    window.addEventListener("blur", () => {
      setTimeout(() => {
        if (!document.hidden) {
          this.evaluateAll(CE);
        }
      }, 50);
    });

    window.addEventListener("focus", () => this.evaluateAll(null));

    setInterval(() => this.evaluateAll(null), 5000/* 5e3 */);

    window.addEventListener("pagehide", () => {
      this.evaluateAll(TE);
      this.flushBeacon();
    });

    setInterval(() => this.flush(), OE);
  }
  observe(t, n, r, o, s) {
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
        this.evaluate(c, rl);
        this.posts.delete(a);
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
      this.evaluate(r, rl);
      this.posts.delete(n);
    }
  }
  isUserActive() {
    return Date.now() - this.lastActivityAt < AE && !document.hidden;
  }
  evaluateAll(t) {
    for (const n of this.posts.values()) {
      this.evaluate(n, t);
    }
  }
  evaluate(t, n) {
    const t_lastEntry = t.lastEntry;
    const o = !!t_lastEntry && $E(t_lastEntry);
    const s = o && this.isUserActive() && n === null;
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

      if (u < kE) {
        return;
      }

      const d = n ?? (o ? IE : SE);
      const p = this.seenPostIds.has(t.postId);
      this.seenPostIds.add(t.postId);
      const f = t.source === "post_page" || t.source === "link";
      const h = { md: u, et: t_visibleSince, xt: c, r: d, v: t.vs };

      if (t.sourceContext) {
        (h.sc = t.sourceContext);
      }

      if (f) {
        (h.s = Lo[t.source]);
      }

      if (p) {
        (h.b = 1);
      }

      this.enqueue(h, t.postId, Lo[t.source]);
    }
  }
  enqueue(t, n, r) {
    this.buffer.push(t);

    if (this.buffer.length >= LE) {
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
    x.post(M.posts.dwellLog, r, { headers: o }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    x
      .post(
        M.posts.dwellLog,
        { sid: this.sessionId, e: t },
        { keepalive: true }
      )
      .catch(() => {});
  }
}
const sl = new ME();
function DE(e, t, n, r = "", o = undefined) {
  D(() => {
    const t_current = t.current;
    if (!(!t_current || !o)) {
      sl.observe(t_current, e, n, r, o);

      return () => {
        sl.unobserve(t_current);
      };
    }
  }, [e, t, n, r, o]);
}
function oa(e) {
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
const Yd = "shop-cart";
function il() {
  try {
    const e = localStorage.getItem(Yd);
    if (!e) {
      return 0;
    }
    const t = JSON.parse(e)?.state?.items;
    return Array.isArray(t)
      ? t.reduce((n, r) => n + (Number(r?.qty) || 0), 0)
      : 0;
  } catch {
    return 0;
  }
}
function Kd() {
  const [e, t] = L(il);

  D(() => {
    const n = (r) => {
      if (r.key === null || r.key === Yd) {
        t(il());
      }
    };
    window.addEventListener("storage", n);

    return () => window.removeEventListener("storage", n);
  }, []);

  return e;
}
const Cn = Xe(() => ({
  status: "checking"
}));
let Fn = null;
let Qt = null;
let _r = 0;
let gi = 0;
function UE() {
  if (Fn || Qt || Cn.getState().status !== "checking") {
    _r++;
    (Fn = null);
    (Qt = null);
    (gi = 0);
    Cn.setState({ status: "checking" });
  }
}
function _i(e, t = false) {
  if ((Qt && Fn === e) || (!t && Fn === e)) {
    return Qt;
  }

  if (Fn !== e) {
    _r++;
  }

  const n = _r;
  (Fn = e);
  Cn.setState({ status: "checking" });
  const r = x
    .get("/v1/aliceai/shop", { skipErrorToast: true })
    .then(() => {
    if (_r === n) {
      Cn.setState({ status: "allowed" });
    }
  })
    .catch((o) => {
    if (_r === n) {
      Cn.setState({
        status:
          xe(o) && (o.status === 401 || o.status === 403 || o.status === 404)
            ? "denied"
            : "error",
      });
    }
  })
    .finally(() => {
    if (Qt === r) {
      (Qt = null);
    }
  });
  (Qt = r);
  return r;
}
function io() {
  if (Cn.getState().status !== "error" || Date.now() - gi < 15000/* 15e3 */) {
    return;
  }
  const e = ge.getState();

  if (e.status === "authenticated" && e.profile?.id) {
    (gi = Date.now());
    _i(e.profile.id, true);
  }
}
function sa() {
  const e = ge(r => r.status);

  const t = ge(r => r.profile?.id ?? null);

  const n = Cn(r => r.status);

  D(() => {
    if (e === "authenticated" && t) {
      _i(t);
    } else {
      UE();
    }
  }, [e, t]);

  D(
    () => {
      window.addEventListener("online", io);
      window.addEventListener("focus", io);

      return () => {
        window.removeEventListener("online", io);
        window.removeEventListener("focus", io);
      };
    },
    []
  );

  return {
    status:
      e === "authenticated" && t
        ? n
        : e === "unauthenticated"
        ? "denied"
        : "checking",
    retry: () => {
      if (e === "authenticated" && t) {
        _i(t, true);
      }
    },
  };
}

const FE = de(() => ae(() => import("./index-CMZUIgIP.js"), __vite__mapDeps([9, 10])).then(
  e => ({
    default: e.ChangelogModal
  })
)
  );

const BE = de(() => ae(
  () => import("./index-CyjxWqQR.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const Xd = ({
  href: e,
  icon: t,
  children: n,
  badge: r,
  onActiveClick: o,
  isActive: s = false,
}) => {
  const [a] = qo();
  const c = a.url || "/";
  const u = c === e || c.startsWith(`${e}/`) || s;
  return i("a", {
    href: e,
    className: `${Be.navItem} ${u ? Be.active : ""}`,
    onClick: (d) => {
      if (u && o) {
        d.preventDefault();
        o();
      }
    },
    children: [
      i("span", {
        className: Be.iconWrapper,
        children: [
          t,
          r !== undefined &&
            r > 0 &&
            i("span", { className: Be.badge, children: r > 99 ? "99+" : r }),
        ],
      }),
      i("span", { children: n }),
    ],
  });
};

const ao = e => i(Xd, { ...e });

const HE = () => {
  const e = sa();
  const [t] = qo();

  const n = le(E => E.fetchFeed);

  const r = le(E => E.isRefreshing);

  const o = ge(E => E.logout);

  const s = Ko();
  const a = Ji();
  const c = Vd();
  const l = Kd();
  const { initialize: u, disconnectSSE: d } = kn();
  const [p, f] = L(false);
  const [h, m] = L(false);
  const g = Td();

  const v = Go(E => E.fetchPortal);

  const _ = Id(g);
  const S = !_ && g.active && !!g.url;
  const y = _ ? pe.ALICE_EVENT : S ? g.url : pe.EVENT;
  const C = (t.url || "/").startsWith(pe.EVENT);
  const b = a?.username ? `/@${a.username}` : "/profile";

  D(
    () => {
      if (s) {
        u();
      }

      return () => {
        d();
      };
    },
    [s, u, d]
  );

  D(() => {
    v();
  }, [v]);

  const w = R(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      n(true);
    }
  }, [n]);

  const T = R(() => {
    o();
  }, [o]);

  const I = Re(() => {
    const E = t.url || "/";
    return Yi.some(A => E.startsWith(A));
  }, [t.url]);

  const N = Re(() => {
    const E = t.url || "/";
    return a?.username
      ? E === `/@${a.username}` || E.startsWith(`/@${a.username}/`)
      : false;
  }, [t.url, a?.username]);

  return I
    ? null
    : i("aside", {
        className: Be.aside,
        children: [
          i("div", {
            className: Be.asideTop,
            children: [
              i("div", {
                className: Be.asideBrand,
                children: [
                  i(Oy, {}),
                  i("button", {
                    className: Be.asideBrandVersion,
                    onClick: () => f(true),
                    title: "Что нового",
                    children: ["v", "1.1.2"],
                  }),
                ],
              }),
              i("nav", {
                className: Be.nav,
                children: [
                  i(ao, {
                    href: "/",
                    icon: r ? i(zi, {}) : i(Pd, {}),
                    onActiveClick: w,
                    children: "Лента",
                  }),
                  i(ao, {
                    href: "/search",
                    icon: i(Ud, {}),
                    children: "Поиск",
                  }),
                  i(ao, {
                    href: "/shop",
                    icon: i(Fd, {}),
                    badge: l,
                    children: "Магаз",
                  }),
                  ((g.active && g.url) || e.status === "allowed") &&
                    i("a", {
                      href: y,
                      target: S ? "_blank" : undefined,
                      rel: S ? "noopener noreferrer" : undefined,
                      className: `${Be.portalButton} ${
                        g.active ? Be.portalActive : ""
                      } ${C ? Be.active : ""}`,
                      title: "Ивент",
                      children: [
                        i("img", {
                          src: g.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: Be.portalImage,
                        }),
                        i("span", { children: "Ивент" }),
                      ],
                    }),
                  i(ao, {
                    href: "/notifications",
                    icon: i(Dd, {}),
                    badge: c,
                    children: "Уведомления",
                  }),
                  i(Xd, {
                    href: b,
                    icon: i(li, {}),
                    isActive: N,
                    children: "Профиль",
                  }),
                ],
              }),
            ],
          }),
          i("div", {
            className: Be.asideBottom,
            children: s
              ? i(Ne, {
                  children: [
                    !a?.subscription?.isActive &&
                      i("button", {
                        className: Be.logoutButton,
                        onClick: () => m(true),
                        children: [
                          i("span", { children: "⭐" }),
                          i("span", { children: "ИТД НУКСТА" }),
                        ],
                      }),
                    i("button", {
                      className: Be.logoutButton,
                      onClick: T,
                      children: [
                        i(Py, { size: 20 }),
                        i("span", { children: "Выйти" }),
                      ],
                    }),
                  ],
                })
              : i("a", {
                  className: Be.logoutButton,
                  href: pe.LOGIN,
                  children: [
                    i(li, { size: 20 }),
                    i("span", { children: "Войти" }),
                  ],
                }),
          }),
          p &&
            i($e, {
              fallback: null,
              children: i(FE, { isOpen: p, onClose: () => f(false) }),
            }),
          h &&
            i($e, {
              fallback: null,
              children: i(BE, { isOpen: h, onClose: () => m(false) }),
            }),
        ],
      });
};

const VE = "JVj9";
const WE = "QqPb";
const jE = "ebaS";
const zE = "oAHY";
const ur = { sidebar: VE, sidebarContent: WE, sidebarBottom: jE, legalLinks: zE };

const qE = () => {
  const [e] = qo();
  return Re(() => {
    const n = e.url || "/";
    return Yi.some(r => n.startsWith(r));
  }, [e.url])
    ? null
    : i("aside", {
        className: ur.sidebar,
        children: [
          i("div", { className: ur.sidebarContent }),
          i("div", {
            className: ur.sidebarBottom,
            children: [
              i("ul", {
                className: ur.legalLinks,
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
                className: ur.copyright,
                children: "© 2026 ООО «ИТД»",
              }),
            ],
          }),
        ],
      });
};

const GE = "i6L5";
const YE = "KWV4";
const KE = "yHce";
const XE = "xkXT";
const ZE = "FTzV";
const QE = "G509";
const JE = "z7oN";
const e1 = "AD3A";
const t1 = "BujJ";
const n1 = "nmvd";
const r1 = "cfLa";
const o1 = "jU2Y";

const Ge = {
  mobileNavigationWrapper: GE,
  navigation: YE,
  indicator: KE,
  indicatorHidden: XE,
  navItem: ZE,
  label: QE,
  active: JE,
  createButton: e1,
  iconWrapper: t1,
  portalImage: n1,
  portalImageActive: r1,
  badge: o1,
};

const al = e => Symbol.iterator in e;

const cl = e => "entries" in e;

const ll = (e, t) => {
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

const s1 = (e, t) => {
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

function i1(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : al(e) && al(t)
    ? cl(e) && cl(t)
      ? ll(e, t)
      : s1(e, t)
    : ll(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function ul(e) {
  const t = mr.useRef(undefined);
  return (n) => {
    const r = e(n);
    return i1(t.current, r) ? t.current : (t.current = r);
  };
}
const a1 = "zFfv";
const c1 = "pmll";
const l1 = "E0LZ";
const u1 = "T6Vv";
const d1 = "BqH3";
const f1 = "FAaE";
const p1 = "bS8y";
const h1 = "LMe9";
const m1 = "CVuy";
const g1 = "mhxZ";
const _1 = "yYvt";
const v1 = "mQdH";
const y1 = "VO7X";
const w1 = "gj4s";
const E1 = "niqS";
const b1 = "inKN";
const S1 = "KCqR";
const C1 = "ldwz";
const N1 = "vYQ2";
const T1 = "s4Sq";
const I1 = "x54a";
const k1 = "duR2";
const R1 = "fZNd";

const ie = {
  skeleton: a1,
  comment: c1,
  content: l1,
  header: u1,
  headerLeft: d1,
  body: f1,
  actions: p1,
  likeBtn: h1,
  shimmer: m1,
  avatar: g1,
  more: _1,
  likeIcon: v1,
  name: y1,
  time: w1,
  line: E1,
  w100: b1,
  w85: S1,
  w65: C1,
  w50: N1,
  w40: T1,
  replyLabel: I1,
  likeCount: k1,
  list: R1,
};

function A1(e) {
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
function ia({ variant: e = "medium", delayMs: t = 0 }) {
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
            A1(e),
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
const dl = ["medium", "short", "long", "medium", "short"];
function O1({ count: e = 4 }) {
  return i("div", {
    className: ie.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка комментариев",
    children: Array.from({ length: e }, (t, n) => i(ia, { variant: dl[n % dl.length], delayMs: n * 120 }, n)
    ),
  });
}

const Dt = {
    MAX_CHARS: 1000/* 1e3 */,
    MIN_POLL_OPTIONS: 2,
    MAX_POLL_OPTIONS: 10,
    MAX_POLL_QUESTION_LENGTH: 200,
    MAX_POLL_OPTION_LENGTH: 100,
    MAX_TEXTAREA_HEIGHT: 400,
  };

const Ss = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};

function L1() {
  const [e, t] = L(false);
  const [n, r] = L(Ss);

  const o = R((m) => {
    if (m.length <= Dt.MAX_POLL_QUESTION_LENGTH) {
      r(g => ({
        ...g,
        question: m
      }));
    }
  }, []);

  const s = R((m, g) => {
    if (g.length <= Dt.MAX_POLL_OPTION_LENGTH) {
      r(v => ({
        ...v,
        options: v.options.map(_ => _.id === m ? { ..._, text: g } : _)
      }));
    }
  }, []);

  const a = R(() => {
    if (n.options.length < Dt.MAX_POLL_OPTIONS) {
      r(m => ({
        ...m,
        options: [...m.options, { id: Date.now().toString(), text: "" }]
      }));
    }
  }, [n.options.length]);

  const c = R(
    (m) => {
      if (n.options.length > Dt.MIN_POLL_OPTIONS) {
        r(g => ({
          ...g,
          options: g.options.filter(v => v.id !== m)
        }));
      }
    },
    [n.options.length]
  );

  const l = R(() => {
    r(m => ({
      ...m,
      multipleChoice: !m.multipleChoice
    }));
  }, []);

  const u = R(() => {
    t(false);
    r(Ss);
  }, []);

  const d = R(() => {
    t(m => !m);
  }, []);

  const p = R(() => {
    if (!e) {
      return true;
    }
    const m = n.question.trim().length > 0;

    const g = n.options.filter(v => v.text.trim().length > 0);

    return m && g.length >= Dt.MIN_POLL_OPTIONS;
  }, [e, n]);

  const f = R(() => {
    if (!(!e || !p())) {
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
  }, [e, p, n]);

  const h = R(() => {
    t(false);
    r(Ss);
  }, []);

  return {
    isPollOpen: e,
    poll: n,
    togglePoll: d,
    handlePollQuestionChange: o,
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
function Zd(e = 10, t = false) {
  const [n, r] = L([]);
  const [o, s] = L([]);
  const a = O(null);
  const c = O(n);
  const l = O(o);
  (c.current = n);
  (l.current = o);

  D(
    () => () => {
      c.current.forEach(y => URL.revokeObjectURL(y.previewUrl));

      l.current.forEach(y => URL.revokeObjectURL(y.previewUrl));
    },
    []
  );

  const u = o.length > 0;

  const d = n.some(y => y.type === "video") || o.some(y => y.type === "video");

  const p = n.some(y => y.type === "image") || o.some(y => y.type === "image");

  const f = R(() => {
    a.current?.click();
  }, []);

  const h = R(
    async (y) => {
      const C = Un.isValidVideoType(y);
      const b = Un.isValidImageType(y);
      if (C && !t) {
        $t.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!b && !C) {
        $t.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const l_current = l.current;

      const I =
        c_current.some(P => P.type === "video") ||
        l_current.some(P => P.type === "video");

      const N =
        c_current.some(P => P.type === "image") ||
        l_current.some(P => P.type === "image");

      if (C && N) {
        $t.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (b && I) {
        $t.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (C && I) {
        $t.error("Можно загрузить только 1 видео");
        return;
      }
      const E = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const A = URL.createObjectURL(y);
      const k = C ? "video" : "image";
      s(P => [
        ...P,
        { id: E, file: y, previewUrl: A, progress: 0, type: k },
      ]);
      try {
        const P = await Un.uploadMedia(y);

        s(G => G.filter(F => F.id !== E));

        r(G => [
          ...G,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: P.id,
            url: P.url,
            previewUrl: A,
            type: k,
          },
        ]);
      } catch (P) {
        let G = "Ошибка загрузки";

        if (xe(P)) {
          (G = Vi(P.code, P.message));
        } else if (P instanceof Error) {
          (G = P.message);
        }

        $t.error(G);

        s(F => F.filter(V => V.id !== E));

        URL.revokeObjectURL(A);
      }
    },
    [t]
  );

  const m = R(
    (y) => {
      const y_target = y.target;
      const y_target_files = y_target.files;
      if (!y_target_files || y_target_files.length === 0) {
        return;
      }
      const w = n.length + o.length;
      const T = e - w;
      if (T <= 0) {
        return;
      }
      Array.from(y_target_files).slice(0, T).forEach(h);
      (y_target.value = "");
    },
    [n.length, o.length, e, h]
  );

  const g = R((y) => {
    r((C) => {
      const b = C.find(w => w.id === y);

      if (b) {
        URL.revokeObjectURL(b.previewUrl);
      }

      return C.filter(w => w.id !== y);
    });

    s((C) => {
      const b = C.find(w => w.id === y);

      if (b) {
        URL.revokeObjectURL(b.previewUrl);
      }

      return C.filter(w => w.id !== y);
    });
  }, []);

  const v = R(
    (y) => {
      const C = y.filter(T => t ? Un.isValidMediaType(T) : Un.isValidImageType(T)
      );
      if (C.length === 0) {
        return;
      }
      const b = c.current.length + l.current.length;
      const w = e - b;

      if (w > 0) {
        C.slice(0, w).forEach(h);
      }
    },
    [e, h, t]
  );

  const _ = R(
    async (y) => {
      const [C, b] = y.split(",");
      const w = C.match(/:(.*?);/)?.[1] || "image/png";
      const T = atob(b);
      const I = new Uint8Array(T.length);
      for (let A = 0; A < T.length; A++) {
        I[A] = T.charCodeAt(A);
      }
      const N = new Blob([I], { type: w });
      const E = new File([N], `drawing-${Date.now()}.png`, { type: "image/png" });
      h(E);
    },
    [h]
  );

  const S = R(() => {
    n.forEach(y => URL.revokeObjectURL(y.previewUrl));

    o.forEach(y => URL.revokeObjectURL(y.previewUrl));

    r([]);
    s([]);
  }, [n, o]);

  return {
    images: n,
    uploadingImages: o,
    isUploading: u,
    hasVideo: d,
    hasImages: p,
    openFilePicker: f,
    removeImage: g,
    addImage: _,
    uploadFiles: v,
    clearAll: S,
    fileInputRef: a,
    handleFileChange: m,
  };
}
const P1 = "J5hf";
const x1 = "w8DM";
const $1 = "RRnf";
const M1 = "tv2s";
const D1 = "tsjo";
const U1 = "o0Es";
const F1 = "oBLV";
const B1 = "PWAe";
const H1 = "PLPV";
const V1 = "Qn0m";
const W1 = "IeRH";
const j1 = "uRJc";
const z1 = "EUKQ";
const q1 = "svRh";
const G1 = "t0r2";
const Y1 = "dff4";
const K1 = "yO1F";
const X1 = "bIJk";
const Z1 = "NXKT";
const Q1 = "iMNd";
const J1 = "hd12";
const eb = "Ch8s";
const tb = "WRC2";
const nb = "ut6e";
const rb = "SxHl";
const ob = "lx5M";
const sb = "pH3F";
const ib = "c60f";
const ab = "l8ID";
const cb = "EaJj";
const lb = "Kno0";
const ub = "zxM4";
const db = "GvZY";
const fb = "hJdA";
const pb = "OXu2";
const hb = "NCkR";
const mb = "BH4M";
const gb = "OFuY";
const _b = "DNPB";
const vb = "URyH";
const yb = "jxeX";
const wb = "D2eq";
const Eb = "Jw2N";
const bb = "HWX5";
const Sb = "mSRz";
const Cb = "zENa";
const Nb = "PwWD";
const Tb = "g0Cj";
const Ib = "VrCz";
const kb = "x38w";

const z = {
  form: P1,
  notebookGrid: x1,
  notebookRuled: $1,
  editor: M1,
  mediaButton: D1,
  dragActive: U1,
  whatsNew: F1,
  dragOverlay: B1,
  attachments: H1,
  attachmentPreview: V1,
  uploading: W1,
  uploadError: j1,
  videoPreviewWrapper: z1,
  videoPlayIcon: q1,
  uploadOverlay: G1,
  spinner: Y1,
  errorOverlay: K1,
  errorText: X1,
  removeAttachment: Z1,
  actions: Q1,
  mediaButtons: J1,
  submitGroup: eb,
  charCount: tb,
  error: nb,
  pollContainer: rb,
  pollHeader: ob,
  pollTitle: sb,
  pollClose: ib,
  pollQuestion: ab,
  pollOptions: cb,
  pollOptionRow: lb,
  pollOption: ub,
  removeOption: db,
  addOption: fb,
  pollFooter: pb,
  pollToggle: hb,
  active: mb,
  notebookLabel: gb,
  notebookPicker: _b,
  notebookPickerHeader: vb,
  notebookOptions: yb,
  notebookOptionRow: wb,
  notebookOption: Eb,
  notebookOptionActive: bb,
  gridSwatch: Sb,
  ruledSwatch: Cb,
  notebookBuy: Nb,
  notebookUnavailable: Tb,
  notebookIcon: Ib,
  submitError: kb,
};

function fl({ src: e, type: t }) {
  return t === "video"
    ? i("div", {
        className: z.videoPreviewWrapper,
        children: [
          i("video", { src: e, preload: "metadata" }),
          i("div", {
            className: z.videoPlayIcon,
            children: i(Iy, { size: 24 }),
          }),
        ],
      })
    : i("img", { src: e, alt: "" });
}
function Qd({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? i("div", {
        className: z.attachments,
        children: [
          e.map(o => i(
            "div",
            {
              className: z.attachmentPreview,
              children: [
                i(fl, { src: o.previewUrl, type: o.type }),
                i("button", {
                  className: z.removeAttachment,
                  onClick: () => n(o.id),
                  children: i(gt, {}),
                }),
              ],
            },
            o.id
          )
          ),
          t.map(o => i(
            "div",
            {
              className: `${z.attachmentPreview} ${
                o.error ? z.uploadError : z.uploading
              }`,
              children: [
                i(fl, { src: o.previewUrl, type: o.type }),
                !o.error &&
                  i("div", {
                    className: z.uploadOverlay,
                    children: i("div", { className: z.spinner }),
                  }),
                o.error &&
                  i("div", {
                    className: z.errorOverlay,
                    children: i("span", {
                      className: z.errorText,
                      children: o.error,
                    }),
                  }),
                i("button", {
                  className: z.removeAttachment,
                  onClick: () => n(o.id),
                  children: i(gt, {}),
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
function Rb({
  poll: e,
  onQuestionChange: t,
  onOptionChange: n,
  onAddOption: r,
  onRemoveOption: o,
  onMultipleChoiceToggle: s,
  onClose: a,
}) {
  return i("div", {
    className: z.pollContainer,
    children: [
      i("div", {
        className: z.pollHeader,
        children: [
          i("span", { className: z.pollTitle, children: "Опрос" }),
          i("button", {
            className: z.pollClose,
            onClick: a,
            children: i(gt, {}),
          }),
        ],
      }),
      i("input", {
        type: "text",
        className: z.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: c => t(c.target.value),
      }),
      i("div", {
        className: z.pollOptions,
        children: e.options.map((c, l) => i(
          "div",
          {
            className: z.pollOptionRow,
            children: [
              i("input", {
                type: "text",
                className: z.pollOption,
                placeholder: `Вариант ${l + 1}`,
                value: c.text,
                maxLength: 50,
                onInput: u => n(c.id, u.target.value),
              }),
              e.options.length > Dt.MIN_POLL_OPTIONS &&
                i("button", {
                  className: z.removeOption,
                  onClick: () => o(c.id),
                  children: i(gt, {}),
                }),
            ],
          },
          c.id
        )
        ),
      }),
      e.options.length < Dt.MAX_POLL_OPTIONS &&
        i("button", {
          className: z.addOption,
          onClick: r,
          children: [i(qi, {}), i("span", { children: "Добавить вариант" })],
        }),
      i("div", {
        className: z.pollFooter,
        children: i("label", {
          className: z.pollToggle,
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
const Ab = "IzhI";
const Ob = "HOpP";
const Lb = "UAxG";
const Pb = "pDvp";
const xb = "MNir";
const $b = "Dkbj";
const Mb = "dZpy";
const Db = "zBJe";
const Ub = "gk7H";
const Fb = "Sfwy";
const Bb = "TYiO";
const Hb = "sm0A";
const Vb = "ox2b";
const Wb = "cdOW";
const jb = "yEAE";
const zb = "ZOtV";

const We = {
  editor: Ab,
  empty: Ob,
  bold: Lb,
  italic: Pb,
  underline: xb,
  strike: $b,
  spoiler: Mb,
  monospace: Db,
  quote: Ub,
  link: Fb,
  menu: Bb,
  buttons: Hb,
  button: Vb,
  linkForm: Wb,
  linkInput: jb,
  linkSubmit: zb,
};

const Po = {
  bold: We.bold,
  italic: We.italic,
  underline: We.underline,
  strike: We.strike,
  spoiler: We.spoiler,
  monospace: We.monospace,
  quote: We.quote,
  link: We.link,
};

function Cs(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function qb(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function Gb(e) {
  return e !== "mention" && e !== "hashtag";
}
function pl(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const r of t) {
    if (!Gb(r.type)) {
      continue;
    }
    const o = Po[r.type];
    const s = r.type === "link" ? ` data-url="${qb(r.url)}"` : "";
    n = `<span class="${o}"${s}>${n}</span>`;
  }
  return n;
}
function Yb(e, t, n) {
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
function Kb(e, t) {
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
function Xb(e) {
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
      let a = null;
      for (const [u, d] of Object.entries(Po)) {
        if (s.classList.contains(d)) {
          a = u;
          break;
        }
      }
      const c = o;
      let l = o;
      for (const u of Array.from(r.childNodes)) {
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
    return o;
  };

  n(e, 0);
  return t;
}
function Zb(e, t) {
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
function Qb(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}

const Jb = [
    { type: "bold", icon: yy, title: "Жирный" },
    { type: "italic", icon: Ey, title: "Курсив" },
    { type: "underline", icon: Ny, title: "Подчёркнутый" },
    { type: "strike", icon: Cy, title: "Зачёркнутый" },
    { type: "spoiler", icon: Sy, title: "Спойлер" },
    { type: "monospace", icon: wy, title: "Моноширинный" },
    { type: "quote", icon: by, title: "Цитата" },
    { type: "link", icon: Rd, title: "Ссылка" },
  ];

const Qo = ld((
  {
    value: t,
    spans: n,
    onChange: r,
    placeholder: o = "Написать...",
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
  const m = O(null);
  const [g, v] = L(false);
  const [_, S] = L({ x: 0, y: 0 });
  const [y, C] = L(false);
  const [b, w] = L("");
  const T = O(null);
  const I = O(null);
  const N = O(null);
  const E = O(false);
  const A = O(false);
  const k = O(t);
  const P = O(n);
  const G = O(r);

  D(() => {
    (k.current = t);
    (P.current = n);
    (G.current = r);
  }, [t, n, r]);

  Mi(
    h,
    () => ({
      insertText: ($) => {
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        m_current.focus();
        const Z = window.getSelection();
        if (!Z) {
          return;
        }
        let fe = 0;
        if (Z.rangeCount > 0) {
          const Y = Z.getRangeAt(0);
          fe = Yb(m_current, Y.startContainer, Y.startOffset);
        }
        const k_current = k.current;
        const P_current = P.current;
        const he = k_current.slice(0, fe) + $ + k_current.slice(fe);

        const Pe = P_current.map(Y => Y.offset >= fe
          ? { ...Y, offset: Y.offset + $.length }
          : Y.offset + Y.length > fe
          ? { ...Y, length: Y.length + $.length }
          : Y
        );

        (A.current = true);
        (k.current = he);
        (P.current = Pe);
        const U = document.createTextNode($);
        if (Z.rangeCount > 0) {
          const Y = Z.getRangeAt(0);
          Y.deleteContents();
          Y.insertNode(U);
          Y.setStartAfter(U);
          Y.setEndAfter(U);
          Z.removeAllRanges();
          Z.addRange(Y);
        }
        G.current(he, Pe);
      },

      focus: () => {
        m.current?.focus();
      }
    }),
    []
  );

  const F = R(() => {
    if (!t) {
      return "";
    }
    if (n.length === 0) {
      return Cs(t);
    }

    const $ = [...n].sort((J, he) => J.offset - he.offset);

    const H = [];
    for (const J of $) {
      H.push({ pos: J.offset, type: "start", span: J });
      H.push({ pos: J.offset + J.length, type: "end", span: J });
    }
    H.sort((J, he) => J.pos !== he.pos
      ? J.pos - he.pos
      : J.type !== he.type
      ? J.type === "end"
        ? -1
        : 1
      : 0
    );
    let Z = "";
    let fe = 0;
    const X = [];
    for (const J of H) {
      if (J.pos > fe) {
        const he = t.substring(fe, J.pos);
        (Z += pl(Cs(he), X));
        (fe = J.pos);
      }
      if (J.type === "start") {
        X.push(J.span);
      } else {
        const he = X.indexOf(J.span);

        if (he !== -1) {
          X.splice(he, 1);
        }
      }
    }
    if (fe < t.length) {
      const J = t.substring(fe);
      Z += pl(Cs(J), X);
    }
    return Z || "<br>";
  }, [t, n]);

  D(() => {
    if (A.current) {
      A.current = false;
      return;
    }
    const m_current = m.current;
    if (!m_current || (document.activeElement === m_current && t !== "")) {
      return;
    }
    const H = F();

    if (m_current.innerHTML !== H) {
      (m_current.innerHTML = H);
    }
  }, [F, t]);

  D(() => {
    if (a && m.current) {
      const m_current = m.current;
      m_current.focus();

      if (m_current.childNodes.length > 0) {
        const H = window.getSelection();
        if (H) {
          const Z = document.createRange();
          Z.selectNodeContents(m_current);
          Z.collapse(false);
          H.removeAllRanges();
          H.addRange(Z);
        }
      }
    }
  }, [a]);

  D(() => {
    if (y && I.current) {
      I.current.focus();
    }
  }, [y]);

  const V = R(
      ($) => {
        if (E.current) {
          return;
        }
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        if ($?.data === " ") {
          const X = window.getSelection();
          if (X && X.rangeCount > 0) {
            const he = X.getRangeAt(0).startContainer;
            let Pe = null;
            let U = he;

            while (U && U !== m_current) {
              if (U.nodeType === Node.ELEMENT_NODE) {
                const Y = U;
                if (Y.tagName === "SPAN" && Y.className) {
                  Pe = Y;
                  break;
                }
              }
              U = U.parentNode;
            }

            if (Pe) {
              const Y = Pe.textContent || "";
              if (Y.endsWith(" ")) {
                Pe.textContent = Y.slice(0, -1);
                const we = document.createTextNode(" ");
                Pe.parentNode?.insertBefore(we, Pe.nextSibling);
                const be = document.createRange();
                be.setStartAfter(we);
                be.setEndAfter(we);
                X.removeAllRanges();
                X.addRange(be);
              }
            }
          }
        }
        const Z = m_current.innerText.replace(/\n$/, "");
        if (Z.length > s) {
          const X = Z.substring(0, s);
          (A.current = true);
          r(X, Kb(n, X));
          return;
        }
        const fe = Xb(m_current);
        (A.current = true);
        r(Z, fe);
      },
      [s, r, n]
    );

  const ce = R(
    ($) => {
      if (p) {
        return;
      }
      const H = window.getSelection();
      if (!H || H.isCollapsed) {
        return;
      }
      $.preventDefault();
      (N.current = H.getRangeAt(0).cloneRange());

      const Z = Math.max(
          10,
          Math.min($.clientX - 150, window.innerWidth - 310)
        );

      const fe = Math.max(10, $.clientY - 50);
      S({ x: Z, y: fe });
      v(true);
    },
    [p]
  );

  const se = R(
    ($) => {
      $.preventDefault();

      if (f && $.clipboardData?.files?.length) {
        const J = Array.from($.clipboardData.files).filter(he => he.type.startsWith("image/")
        );
        if (J.length > 0) {
          f(J);
          return;
        }
      }

      const H = $.clipboardData?.getData("text/plain") || "";
      if (!H) {
        return;
      }
      const Z = window.getSelection();
      if (!Z || !Z.rangeCount) {
        return;
      }
      const fe = Z.getRangeAt(0);
      fe.deleteContents();
      const X = document.createTextNode(H);
      fe.insertNode(X);
      fe.setStartAfter(X);
      fe.setEndAfter(X);
      Z.removeAllRanges();
      Z.addRange(fe);
      V();
    },
    [V, f]
  );

  const W = R(() => {
    const m_current = m.current;
    if (m_current && !k.current) {
      const H = window.getSelection();
      if (H) {
        const Z = document.createRange();
        Z.setStart(m_current, 0);
        Z.collapse(true);
        H.removeAllRanges();
        H.addRange(Z);
      }
    }
  }, []);

  const ne = R(
    ($) => {
      if ($.key === "Enter" && !$.shiftKey && d) {
        $.preventDefault();
        d();
        return;
      }
      if (!p && ($.ctrlKey || $.metaKey)) {
        let H = null;
        switch ($.key.toLowerCase()) {
          case "b":
            {
              H = "bold";
              break;
            }
          case "i":
            {
              H = "italic";
              break;
            }
          case "u":
            {
              H = "underline";
              break;
            }
        }

        if (H) {
          $.preventDefault();
          ue(H);
        }
      }
    },
    [d, p]
  );

  const ue = R(
    ($, H) => {
      const m_current = m.current;
      if (!m_current) {
        return;
      }
      const fe = window.getSelection();
      if (!fe ||
      (N.current && (fe.removeAllRanges(), fe.addRange(N.current)),
      fe.isCollapsed)) {
        return;
      }
      const X = fe.getRangeAt(0);
      const J = document.createElement("span");
      (J.className = Po[$]);

      if ($ === "link" && H) {
        (J.dataset.url = H);
      }

      const he = Zb(X.commonAncestorContainer, Po[$]);
      if (he) {
        Qb(he);
      } else {
        try {
          X.surroundContents(J);
        } catch {
          const Pe = X.extractContents();
          J.appendChild(Pe);
          X.insertNode(J);
        }
      }
      V();
      v(false);
      C(false);
      w("");
      (N.current = null);
      m_current.focus();
    },
    [V]
  );

  const q = R(
    ($) => {
      if ($ === "link") {
        C(true);
      } else {
        ue($);
      }
    },
    [ue]
  );

  const Q = R(
    ($) => {
      $.preventDefault();

      if (b.trim()) {
        ue("link", b.trim());
      }
    },
    [ue, b]
  );

  D(() => {
    if (!g) {
      return;
    }

    const $ = (Z) => {
      if (T.current &&
        !T.current.contains(Z.target)) {
        v(false);
        C(false);
        w("");
        (N.current = null);
      }
    };

    const H = () => {
      v(false);
      C(false);
      w("");
      (N.current = null);
    };

    document.addEventListener("mousedown", $);
    window.addEventListener("scroll", H, true);

    return () => {
      document.removeEventListener("mousedown", $);
      window.removeEventListener("scroll", H, true);
    };
  }, [g]);
  const _e = !t;
  return i(Ne, {
    children: [
      i("div", {
        ref: m,
        className: `${We.editor} ${c} ${_e ? We.empty : ""}`,
        contentEditable: true,
        "data-placeholder": o,
        onInput: $ => V($),
        onFocus: W,
        onPaste: se,
        onContextMenu: ce,
        onKeyDown: ne,
        onCompositionStart: () => {
          E.current = true;
        },
        onCompositionEnd: () => {
          (E.current = false);
          V();
        },
        style: { minHeight: l, maxHeight: u },
      }),
      g &&
        $(
          i("div", {
            ref: T,
            className: We.menu,
            style: { left: _.x, top: _.y },
            children: y
              ? i("form", {
                  className: We.linkForm,
                  onSubmit: Q,
                  children: [
                    i("input", {
                      ref: I,
                      type: "url",
                      className: We.linkInput,
                      placeholder: "https://...",
                      value: b,
                      onInput: $ => w($.target.value),
                    }),
                    i("button", {
                      type: "submit",
                      className: We.linkSubmit,
                      disabled: !b.trim(),
                      children: "OK",
                    }),
                  ],
                })
              : i("div", {
                  className: We.buttons,
                  children: Jb.map(({ type: $, icon: H, title: Z }) => i(
                    "button",
                    {
                      type: "button",
                      className: We.button,
                      onClick: () => q($),
                      title: Z,
                      children: i(H, { size: 16 }),
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
});

const eS = "uFVo";
const tS = "zNIb";
const nS = "FS7O";
const rS = "HuD9";
const oS = "cmBs";
const sS = "Wunm";
const iS = "Dx0l";
const aS = "e7HJ";
const cS = "Rkul";
const lS = "eyuH";
const uS = "BoQC";
const dS = "mmr7";
const fS = "vVOI";
const pS = "fnRI";
const hS = "JZR4";
const mS = "Zmv1";
const gS = "GTnS";
const _S = "BiBA";
const vS = "hHPz";
const yS = "Sg9a";
const wS = "ESJP";

const Ie = {
  commentInput: eS,
  replyMode: tS,
  inputRow: nS,
  attachmentStrip: rS,
  circleButton: oS,
  micButton: sS,
  sendButton: iS,
  submitting: aS,
  textareaContainer: cS,
  expanded: lS,
  voiceMode: uS,
  inputWrapper: dS,
  commentCharCount: fS,
  error: pS,
  input: hS,
  replyHeader: mS,
  replyText: gS,
  replyName: _S,
  replyClose: vS,
  dragActive: yS,
  dragOverlay: wS,
};

const ES = "Ctzs";
const bS = "I5WC";
const SS = "gvKS";
const Ns = { textInput: ES, entering: bS, sendButton: SS };
const CS = 1000/* 1e3 */;
function NS({
  text: e,
  spans: t,
  onChange: n,
  placeholder: r,
  onSubmit: o,
  isEntering: s,
  autoFocus: a,
  isSubmitting: c,
  sendDisabled: l,
  onImagePaste: u,
}) {
  const d = CS - e.length;
  const p = d < 0;
  const f = [Ns.textInput, s ? Ns.entering : ""].filter(Boolean).join(" ");
  return i("div", {
    className: f,
    children: [
      i("div", {
        className: Ie.inputWrapper,
        children: [
          i(Qo, {
            value: e,
            spans: t,
            onChange: n,
            placeholder: r,
            autoFocus: a,
            className: Ie.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: p ? undefined : o,
            disableFormatting: true,
            onImagePaste: u,
          }),
          p &&
            i("span", {
              className: `${Ie.commentCharCount} ${Ie.error}`,
              children: d,
            }),
        ],
      }),
      i("button", {
        className: `${Ie.circleButton} ${Ie.sendButton} ${Ns.sendButton} ${
          c ? Ie.submitting : ""
        }`,
        onClick: o,
        disabled: c || l || p,
        children: c ? i(Wd, { size: "xs" }) : i(ky, { size: 20 }),
      }),
    ],
  });
}
const TS = de(() => ae(
  () => import("./VoiceInput-oSD2viz6.js"),
  __vite__mapDeps([11, 12, 13])
).then(e => ({
  default: e.VoiceInput
}))
);
function Jd({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: r,
  onCancelReply: o,
  autoFocus: s,
}) {
  const { text: a, spans: c, handleChange: l, reset: u } = Yo();
  const [d, p] = L("text");
  const [f, h] = L(false);
  const [m, g] = L(false);
  const [v, _] = L(false);
  const [S, y] = L(false);
  const C = O(false);
  const b = O(null);
  const w = O(0);

  const {
    images: T,
    uploadingImages: I,
    isUploading: N,
    openFilePicker: E,
    removeImage: A,
    uploadFiles: k,
    clearAll: P,
    fileInputRef: G,
    handleFileChange: F,
  } = Zd(4);

  D(
    () => () => {
      if (b.current) {
        clearTimeout(b.current);
      }
    },
    []
  );
  const V = T.length > 0 || I.length > 0;
  const ce = a.length > 0 || v || V;
  const se = d === "voice";
  const W = 1000/* 1e3 */;

  const ne = async () => {
    const X = a.trim().length > 0;
    const J = T.length > 0;
    if ((!X && !J) || v || N || a.length > W) {
      return;
    }
    const he = a.trim();
    const Pe = [...c];

    const U = T.map(Y => ({
      mediaId: Y.mediaId
    }));

    _(true);
    try {
      await e(he, Pe, U.length > 0 ? U : undefined);
      u();
      P();
    } catch (Y) {
      console.error("Failed to submit comment:", Y);
    } finally {
      _(false);
    }
  };

  const ue = () => {
    (C.current = true);
    p("voice");
    g(false);
  };

  const q = () => {
    h(true);
  };

  const Q = () => {
    h(false);
    p("text");
    g(true);

    if (b.current) {
      clearTimeout(b.current);
    }

    (b.current = window.setTimeout(() => {
      (b.current = null);
      g(false);
    }, 300));
  };

  const _e = R((X) => {
    X.preventDefault();
    X.stopPropagation();
    w.current++;

    if (X.dataTransfer?.types.includes("Files")) {
      y(true);
    }
  }, []);

  const $ = R((X) => {
    X.preventDefault();
    X.stopPropagation();
  }, []);

  const H = R((X) => {
    X.preventDefault();
    X.stopPropagation();
    w.current--;

    if (w.current === 0) {
      y(false);
    }
  }, []);

  const Z = R(
    (X) => {
      X.preventDefault();
      X.stopPropagation();
      (w.current = 0);
      y(false);
      const J = X.dataTransfer?.files;

      if (J && J.length > 0) {
        k(Array.from(J));
      }
    },
    [k]
  );

  const fe = [
    Ie.commentInput,
    ce ? Ie.expanded : "",
    se ? Ie.voiceMode : "",
    r ? Ie.replyMode : "",
    S ? Ie.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return i("div", {
    className: fe,
    onDragEnter: _e,
    onDragOver: $,
    onDragLeave: H,
    onDrop: Z,
    children: [
      S &&
        i("div", {
          className: Ie.dragOverlay,
          children: [
            i($d, { size: 24 }),
            i("span", { children: "Перетащите изображение" }),
          ],
        }),
      r &&
        i("div", {
          className: Ie.replyHeader,
          children: [
            i("span", {
              className: Ie.replyText,
              children: [
                "Ответ для ",
                i("span", { className: Ie.replyName, children: r.authorName }),
              ],
            }),
            i("button", {
              className: Ie.replyClose,
              onClick: o,
              children: i(gt, { size: 16 }),
            }),
          ],
        }),
      !se &&
        !f &&
        V &&
        i("div", {
          className: Ie.attachmentStrip,
          children: i(Qd, { images: T, uploadingImages: I, onRemove: A }),
        }),
      i("div", {
        className: Ie.inputRow,
        children: [
          i("button", {
            className: Ie.circleButton,
            onClick: se ? q : E,
            children: se ? i(gt, { size: 20 }) : i(Ad, { size: 20 }),
          }),
          i("div", {
            className: Ie.textareaContainer,
            children:
              se || f
                ? i($e, {
                    fallback: null,
                    children: i(TS, {
                      onCancel: q,
                      onSend: t,
                      isExiting: f,
                      onExitComplete: Q,
                    }),
                  })
                : i(NS, {
                    text: a,
                    spans: c,
                    onChange: l,
                    placeholder: n,
                    onSubmit: ne,
                    isEntering: m,
                    autoFocus: s,
                    isSubmitting: v,
                    sendDisabled: N,
                    onImagePaste: k,
                  }),
          }),
          !se &&
            !f &&
            i("button", {
              className: `${Ie.circleButton} ${Ie.micButton}`,
              onClick: ue,
              children: i(Ty, { size: 20 }),
            }),
        ],
      }),
      i("input", {
        ref: G,
        type: "file",
        accept: ui,
        multiple: true,
        onChange: F,
        style: { display: "none" },
      }),
    ],
  });
}
const IS = "La9x";
const kS = "HAbn";
const RS = "ho1f";
const AS = "Zgte";
const OS = "hjCO";
const LS = "zHiB";
const PS = "RFgt";

const fn = {
  counter: IS,
  digit: kS,
  prev: RS,
  current: AS,
  animating: OS,
  up: LS,
  down: PS,
};

function xS(e) {
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
function vr({ value: e }) {
  const t = xS(e);
  const n = O(e);
  const r = O(t.length);
  const o = O(Date.now());

  const [s, a] = L(() => t
    .split("")
    .map((p, f) => ({
    char: p,
    prevChar: p,
    isAnimating: false,
    key: f
  }))
  );

  const [c, l] = L(null);

  D(() => {
    if (Date.now() - o.current < 100) {
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

    const m = s.map(C => C.char);

    const g = Math.max(h.length, m.length);
    const v = m.join("").padStart(g, " ").split("");

    const S = h
      .join("")
      .padStart(g, " ")
      .split("")
      .map((C, b) => {
      const w = v[b] || " ";
      const T = s[b - (g - s.length)];
      return C !== w
        ? (r.current++,
          { char: C, prevChar: w, isAnimating: true, key: r.current })
        : { char: C, prevChar: C, isAnimating: false, key: T?.key ?? b };
    })
      .filter(C => C.char !== " " || C.isAnimating);

    a(S);
    const y = setTimeout(() => {
      a(C => C.map(b => ({
        ...b,
        isAnimating: false
      })));

      l(null);
    }, 300);
    return () => clearTimeout(y);
  }, [e]);

  if (!s.some(p => p.isAnimating)) {
    return i("span", { children: t });
  }

  const d = c === "up" ? fn.up : c === "down" ? fn.down : "";
  return i("span", {
    className: fn.counter,
    children: s.map(p => p.isAnimating
      ? i(
          "span",
          {
            className: `${fn.digit} ${fn.animating} ${d}`,
            children: [
              i("span", { className: fn.prev, children: p.prevChar }),
              i("span", { className: fn.current, children: p.char }),
            ],
          },
          p.key
        )
      : i("span", { children: p.char }, p.key)
    ),
  });
}
const $S = "gXPl";
const MS = "uZix";
const DS = "jBVk";
const US = "ZQ08";
const FS = "v0g3";
const BS = "TI7p";
const HS = "FUG1";
const VS = "hSHr";
const WS = "vi34";

const Ot = {
  dropdownWrapper: $S,
  trigger: MS,
  menu: DS,
  hidden: US,
  menuItem: FS,
  danger: BS,
  itemIcon: HS,
  itemLabel: VS,
  divider: WS,
};

function ef({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: r = [],
  className: o,
}) {
  const [s, a] = L(false);
  const [c, l] = L(false);
  const [u, d] = L({ top: 0, left: 0 });
  const p = O(null);
  const f = O(null);

  const h = R(() => {
    if (!p.current) {
      return;
    }
    const _ = p.current.getBoundingClientRect();
    const S = f.current?.offsetHeight || 150;
    const y = f.current?.offsetWidth || 160;
    let C = 0;
    let b = 0;

    if (n.startsWith("bottom")) {
      (C = _.bottom + 4);
    } else {
      (C = _.top - S - 4);
    }

    if (n.endsWith("right")) {
      (b = _.right - y);
    } else {
      (b = _.left);
    }

    const {
      innerWidth,
      innerHeight
    } = window;

    if (b + y > innerWidth) {
      (b = innerWidth - y - 8);
    }

    if (b < 8) {
      (b = 8);
    }

    if (C + S > innerHeight) {
      (C = _.top - S - 4);
    }

    if (C < 8) {
      (C = _.bottom + 4);
    }

    d({ top: C, left: b });
    l(true);
  }, [n]);

  const m = R((_) => {
    const _target = _.target;

    if (p.current &&
      !p.current.contains(_target) &&
      f.current &&
      !f.current.contains(_target)) {
      a(false);
      l(false);
    }
  }, []);

  D(() => {
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

  const g = (_) => {
    _.stopPropagation();

    if (s) {
      a(false);
      l(false);
    } else {
      a(true);
    }
  };

  const v = (_, S) => {
    _.stopPropagation();
    S.onClick();
    a(false);
    l(false);
  };

  return i("div", {
    className: `${Ot.dropdownWrapper} ${o || ""}`,
    children: [
      i("div", { ref: p, className: Ot.trigger, onClick: g, children: e }),
      s &&
        $(
          i("div", {
            ref: f,
            className: `${Ot.menu} ${c ? "" : Ot.hidden}`,
            style: { top: u.top, left: u.left },
            children: t.map((_, S) => i(
              "div",
              {
                children: [
                  i("button", {
                    type: "button",
                    className: `${Ot.menuItem} ${_.danger ? Ot.danger : ""}`,
                    onClick: y => v(y, _),
                    children: [
                      _.icon &&
                        i("span", {
                          className: Ot.itemIcon,
                          children: _.icon,
                        }),
                      i("span", {
                        className: Ot.itemLabel,
                        children: _.label,
                      }),
                    ],
                  }),
                  r.includes(_.id) &&
                    S < t.length - 1 &&
                    i("div", { className: Ot.divider }),
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

const jS = [
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

const Eo = jS.map(([e, t]) => {
  const n = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="28" viewBox="0 0 120 28" preserveAspectRatio="none"><path d="${e}" fill="#fffef7" stroke="#cecbbc" stroke-width=".6" vector-effect="non-scaling-stroke"/><path d="${t}" fill="none" stroke="#e6e2d4" stroke-width=".55"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(n)}`;
});

function zS(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++) {
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  }
  return t >>> 0;
}
function qS(e) {
  const t = new Map();
  const n = new Set();
  let r = -1;
  for (const o of e) {
    if (t.has(o.id)) {
      continue;
    }

    if (n.size === Eo.length) {
      n.clear();
    }

    let s = zS(o.id) % Eo.length;

    while (n.has(s) || (!n.size && s === r)) {
      s = (s + 1) % Eo.length;
    }

    t.set(o.id, s);
    n.add(s);
    (r = s);
  }
  return t;
}
const GS = "lcT7";
const YS = "TAgj";
const KS = "z8Sb";
const XS = "u2uS";
const ZS = "ATA2";
const QS = "K7Ew";
const JS = "KnZJ";
const eC = "Zq9K";
const tC = "lmVF";

const Lt = {
  underline: GS,
  monospace: YS,
  quote: KS,
  spoiler: XS,
  revealed: ZS,
  link: QS,
  mention: JS,
  hashtag: eC,
  corrector: tC,
};

function nC(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function rC(e) {
  if (!nC(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const r = String.fromCharCode(...n);
  const o = btoa(r);
  return `/external?url=${encodeURIComponent(o)}`;
}
function aa({
  text: e,
  spans: t = [],
  className: n = "",
  correctorMarks: r = [],
}) {
  const o = Re(() => qS(r), [r]);

  const [s, a] = L(new Set());

  const c = Re(() => {
    if (t.length === 0) {
      return [{ text: e, offset: 0, styles: new Set() }];
    }
    const d = [];

    t.forEach((m, g) => {
      d.push({ pos: m.offset, type: "start", span: m, index: g });
      d.push({ pos: m.offset + m.length, type: "end", span: m, index: g });
    });

    d.sort((m, g) => m.pos !== g.pos
      ? m.pos - g.pos
      : m.type !== g.type
      ? m.type === "end"
        ? -1
        : 1
      : 0
    );

    const p = [];
    let f = 0;
    const h = new Map();
    for (const m of d) {
      if (m.pos > f) {
        const g = e.substring(f, m.pos);
        const v = new Set();
        let _;
        let S;
        let y;

        h.forEach((C) => {
          v.add(C.type);

          if (C.type === "link" && C.url) {
            (_ = C.url);
          }

          if (C.type === "mention" &&
            (C.username || C.id)) {
            (S = C.username || C.id);
          }

          if (C.type === "hashtag" && C.tag) {
            (y = C.tag);
          }
        });

        p.push({
          text: g,
          offset: f,
          styles: v,
          url: _,
          mentionId: S,
          hashtag: y,
        });
      }

      if (m.type === "start") {
        h.set(m.index, m.span);
      } else {
        h.delete(m.index);
      }

      (f = m.pos);
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
    const h = r.filter(
      m => m.start < d.offset + d.text.length && m.end > d.offset
    );
    if (h.length) {
      const m = new Set([0, d.text.length]);
      for (const v of h) {
        m.add(Math.max(0, v.start - d.offset));
        m.add(Math.min(d.text.length, v.end - d.offset));
      }
      const g = [...m].sort((v, _) => v - _);
      d_text = g.slice(0, -1).map((v, _) => {
        const S = d.text.slice(v, g[_ + 1]);

        const y = h.find(b => b.start <= v + d.offset && b.end > v + d.offset);

        const C = y ? o.get(y.id) : 0;
        return y
          ? i(
              "span",
              {
                className: Lt.corrector,
                "data-corrector-mark": true,
                "data-corrector-id": y.id,
                "data-corrector-variant": C,
                style: { backgroundImage: `url("${Eo[C]}")` },
                "aria-label": "Текст замазан дежурным",
                onClick: (b) => {
                  b.preventDefault();
                  b.stopPropagation();
                },
                children: i("span", { "aria-hidden": "true", children: S }),
              },
              v
            )
          : S;
      });
    }

    if (d.styles.has("bold")) {
      (d_text = i("strong", { children: d_text }));
    }

    if (d.styles.has("italic")) {
      (d_text = i("em", { children: d_text }));
    }

    if (d.styles.has("underline")) {
      (d_text = i("span", { className: Lt.underline, children: d_text }));
    }

    if (d.styles.has("strike")) {
      (d_text = i("s", { children: d_text }));
    }

    if (d.styles.has("monospace")) {
      (d_text = i("code", { className: Lt.monospace, children: d_text }));
    }

    if (d.styles.has("quote")) {
      (d_text = i("span", { className: Lt.quote, children: d_text }));
    }

    if (d.styles.has("spoiler")) {
      const m = s.has(p);
      d_text = i("span", {
        className: `${Lt.spoiler} ${m ? Lt.revealed : ""}`,
        onClick: g => l(g, p),
        children: d_text,
      });
    }

    if (d.styles.has("link") && d.url) {
      const m = rC(d.url);
      d_text = i("a", {
        href: m,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Lt.link,
        onClick: g => g.stopPropagation(),
        children: d_text,
      });
    }
    if (d.styles.has("mention") && d.mentionId) {
      const m = `/@${d.mentionId}`;
      d_text = i("a", {
        href: m,
        className: Lt.mention,
        onClick: (g) => {
          g.preventDefault();
          g.stopPropagation();
          je(m);
        },
        children: d_text,
      });
    }
    if (d.styles.has("hashtag") && d.hashtag) {
      const m = `/hashtag/${encodeURIComponent(d.hashtag)}`;
      d_text = i("a", {
        href: m,
        className: Lt.hashtag,
        onClick: (g) => {
          g.preventDefault();
          g.stopPropagation();
          je(m);
        },
        children: d_text,
      });
    }
    return i("span", { children: d_text }, p);
  };

  return i("span", { className: n, children: c.map((d, p) => u(d, p)) });
}
function oC(e, t, n) {
  const { isVisible: r, isRevealing: o, onRevealComplete: s } = n;
  const a = O([]);
  const c = O(null);
  const l = O(null);
  const u = O({ width: 0, height: 0 });
  const d = O(1);

  const p = R((g, v) => {
    const _ = Math.random() * 80 + 60;
    return {
      x: Math.random() * g,
      y: Math.random() * v,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * _,
      maxLife: _,
    };
  }, []);

  const f = R(
    (g, v) => {
      const _ = Math.floor((g * v) / 600);
      const S = [];
      for (let y = 0; y < _; y++) {
        S.push(p(g, v));
      }
      a.current = S;
    },
    [p]
  );

  const h = R(() => {
    const e_current = e.current;
    const t_current = t.current;
    if (!e_current || !t_current) {
      return;
    }
    const _ = t_current.getBoundingClientRect();
    if (_.width === 0 || _.height === 0) {
      return;
    }
    const S = window.devicePixelRatio || 1;
    if (u.current.width !== _.width || u.current.height !== _.height) {
      (u.current = { width: _.width, height: _.height });
      (e_current.width = _.width * S);
      (e_current.height = _.height * S);
      (e_current.style.width = `${_.width}px`);
      (e_current.style.height = `${_.height}px`);
      const y = e_current.getContext("2d");

      if (y) {
        y.setTransform(S, 0, 0, S, 0, 0);
        (l.current = y);
      }

      f(_.width, _.height);
    }
  }, [e, t, f]);

  const m = R(() => {
    d.current = 1;
  }, []);

  D(() => {
    if (!r) {
      if (c.current) {
        cancelAnimationFrame(c.current);
        (c.current = null);
      }

      return;
    }
    h();
    const g = () => {
      const l_current = l.current;
      const { width: _, height: S } = u.current;
      if (!l_current || _ === 0 || S === 0) {
        c.current = requestAnimationFrame(g);
        return;
      }
      if (o && ((d.current -= 0.05), d.current <= 0)) {
        s();
        return;
      }
      l_current.clearRect(0, 0, _, S);

      a.current.forEach((y, C) => {
        (y.x += y.speedX);
        (y.y += y.speedY);
        y.life--;

        if (y.x < 0) {
          (y.x = _);
        }

        if (y.x > _) {
          (y.x = 0);
        }

        if (y.y < 0) {
          (y.y = S);
        }

        if (y.y > S) {
          (y.y = 0);
        }

        if (y.life <= 0) {
          a.current[C] = p(_, S);
          return;
        }

        const b = y.life / y.maxLife;
        const w = b < 0.3 ? b / 0.3 : 1;
        const T = y.opacity * w * d.current;
        l_current.beginPath();
        l_current.arc(y.x, y.y, y.size, 0, Math.PI * 2);
        (l_current.fillStyle = `rgba(255, 255, 255, ${T})`);
        l_current.fill();
      });

      (c.current = requestAnimationFrame(g));
    };
    (c.current = requestAnimationFrame(g));
    window.addEventListener("resize", h);

    return () => {
      if (c.current) {
        cancelAnimationFrame(c.current);
      }

      window.removeEventListener("resize", h);
    };
  }, [r, o, p, h, s]);

  return { resetOpacity: m };
}
const sC = "P6if";
const iC = "pndg";
const aC = "zDi7";
const cC = "MSku";
const lC = "dAq4";
const dr = { container: sC, hidden: iC, image: aC, revealing: cC, canvas: lC };
const hl = 5;
function ml({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: r,
  height: o,
  className: s = "",
  onClick: a,
}) {
  const [c, l] = L(!n);
  const [u, d] = L(false);
  const [p, f] = L(false);
  const h = O(null);
  const m = O(null);
  const g = O(null);
  const v = O(false);

  const { resetOpacity: _ } = oC(h, m, {
    isVisible: p && !c && n,
    isRevealing: u,
    onRevealComplete: () => l(true),
  });

  D(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const I = new IntersectionObserver(
      (N) => {
        N.forEach((E) => {
          f(E.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    I.observe(m_current);

    return () => {
      I.disconnect();
    };
  }, []);

  const S = (T) => {
    (g.current = { x: T.clientX, y: T.clientY });
    (v.current = false);
  };

  const y = (T) => {
    if (!g.current) {
      return;
    }
    const I = Math.abs(T.clientX - g.current.x);
    const N = Math.abs(T.clientY - g.current.y);

    if ((I > hl || N > hl)) {
      (v.current = true);
    }
  };

  const C = (T) => {
    if (v.current) {
      (v.current = false);
      T.stopPropagation();
      return;
    }

    if (!c && !u && n) {
      T.stopPropagation();
      d(true);
      _();
    } else if (a) {
      a(T);
    }
  };

  const b = !c && n;
  const w = r && o ? { aspectRatio: `${r} / ${o}` } : undefined;
  return n
    ? i("div", {
        ref: m,
        className: `${dr.container} ${s} ${b ? dr.hidden : ""} ${
          u ? dr.revealing : ""
        }`,
        style: w,
        onPointerDown: S,
        onPointerMove: y,
        onClick: C,
        children: [
          i("img", {
            src: e,
            alt: t,
            className: dr.image,
            loading: "lazy",
            width: r,
            height: o,
            draggable: false,
            "data-post-media-image": true,
          }),
          b && i("canvas", { ref: h, className: dr.canvas }),
        ],
      })
    : i("img", {
        src: e,
        alt: t,
        className: s,
        loading: "lazy",
        draggable: false,
        width: r,
        height: o,
        style: r && o ? { aspectRatio: `${r} / ${o}` } : undefined,
        onClick: a,
        "data-post-media-image": true,
      });
}
function uC(e) {
  let t = e;
  let n = 0;

  while (t && n < 4) {
    const r = window.getComputedStyle(t).borderRadius;
    if (r && r !== "0px" && r !== "0%") {
      return r;
    }
    (t = t.parentElement);
    n++;
  }

  return "0px";
}
function Ts(e, t) {
  const r =
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

  const o = r?.getBoundingClientRect();
  if (!o || o.width <= 0 || o.height <= 0) {
    return null;
  }
  const s = t?.getBoundingClientRect();
  const a = Math.max(0, s ? s.left : 0);
  const c = Math.max(0, s ? s.top : 0);
  const l = Math.min(window.innerWidth, s ? s.right : Infinity);
  const u = Math.min(window.innerHeight, s ? s.bottom : Infinity);
  const d = Math.max(o.left, a);
  const p = Math.max(o.top, c);
  const f = Math.min(o.right, l);
  const h = Math.min(o.bottom, u);
  const m = Math.max(0, f - d);
  const g = Math.max(0, h - p);
  return m <= 0 || g <= 0
    ? null
    : {
        left: d,
        top: p,
        width: m,
        height: g,
        hiddenLeft: d - o.left,
        hiddenTop: p - o.top,
        hiddenRight: o.right - f,
        hiddenBottom: o.bottom - h,
        borderRadius: uC(r),
      };
}
const gl = { photo_open: 1, video_progress: 2 };
const dC = 2000/* 2e3 */;
const fC = 20;
const _l = "dwell_sid";
function pC() {
  try {
    let e = sessionStorage.getItem(_l);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(_l, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
class hC {
  buffer = [];
  sessionId = "";
  bound = false;
  ensureInit() {
    if (!this.bound && typeof window !== "undefined") {
      (this.bound = true);
      (this.sessionId = pC());
      window.setInterval(() => this.flush(), dC);
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
    const s = { t: gl.photo_open, v: t, ai: n };

    if (r !== undefined) {
      (s.mi = r);
    }

    if (o) {
      (s.s = Lo[o]);
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
    const a = {
      t: gl.video_progress,
      v: t,
      ai: n,
      pm: Math.round(r),
      dm: Math.round(o),
    };

    if (s) {
      (a.s = Lo[s]);
    }

    this.enqueue(a);
  }
  enqueue(t) {
    this.buffer.push(t);

    if (this.buffer.length >= fC) {
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
    x.post(M.posts.interactionLog, r, { headers: o }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    x
      .post(
        M.posts.interactionLog,
        { sid: this.sessionId, e: t },
        { keepalive: true }
      )
      .catch(() => {});
  }
}
const mC = new hC();
function gC(e, t) {
  return R(
    (n, r) => {
      if (!e || !n) {
        return;
      }
      const o = t === "post_page" || t === "link";
      mC.trackPhotoOpen(e, n, r, o ? t : undefined);
    },
    [e, t]
  );
}
const _C = "Mco2";
const vC = "hTMF";
const yC = "JbX3";
const wC = "PLrK";
const EC = "T3bS";
const bC = "JfBA";
const SC = "FW1C";

const Fe = {
  mediaWrapper: _C,
  isFeed: vC,
  single: yC,
  image: wC,
  singleVideo: EC,
  media: bC,
  dragging: SC,
};

const vl = de(() => ae(
  () => import("./PostMediaVideo-Ddt7Ffci.js"),
  __vite__mapDeps([14, 15, 16])
).then(e => ({
  default: e.PostMediaVideo
}))
);

const CC = 5;
const NC = 0.95;
const Is = 0.5;
const TC = 650;
const IC = 500;
const kC = 300;
function RC(e, t, n, r) {
  const o = e / t;
  return o > n / r ? Math.min(e, n) : Math.min(t, r) * o;
}
function ca({ media: e, isFeed: t = false, postVs: n, source: r }) {
  const o = e?.filter(k => k.type === "image") ?? [];

  const s = e?.filter(k => k.type === "video") ?? [];

  const a = O(null);

  const c = Ed(k => k.open);

  const u = Wt() ? kC : IC;
  const d = gC(n, r);
  const p = O(false);
  const f = O(0);
  const h = O(0);
  const m = O(false);
  const g = O(0);
  const v = O(0);
  const _ = O(0);
  const S = O(null);

  const y = () => {
    if (S.current) {
      cancelAnimationFrame(S.current);
      (S.current = null);
    }
  };

  const C = () => {
    const a_current = a.current;
    if (a_current) {
      (_.current *= NC);

      if (Math.abs(_.current) < Is) {
        y();
        return;
      }

      (a_current.scrollLeft += _.current);
      (S.current = requestAnimationFrame(C));
    }
  };

  const b = (k) => {
    const a_current = a.current;

    if (a_current && o.length + s.length > 1) {
      y();
      (p.current = true);
      a_current.classList.add(Fe.dragging);
      (f.current = k.clientX);
      (g.current = k.clientX);
      (v.current = Date.now());
      (h.current = a_current.scrollLeft);
      (m.current = false);
      (_.current = 0);
      k.preventDefault();
    }
  };

  const w = (k) => {
    if (!p.current) {
      return;
    }
    const a_current = a.current;
    if (!a_current) {
      return;
    }
    const G = Date.now();
    const F = k.clientX - f.current;
    const V = k.clientX - g.current;
    const ce = G - v.current;

    if (Math.abs(F) > CC) {
      (m.current = true);
    }

    if (ce > 0) {
      (_.current = (-V / ce) * 16);
    }

    (g.current = k.clientX);
    (v.current = G);
    (a_current.scrollLeft = h.current - F);
  };

  const T = () => {
    if (p.current && Math.abs(_.current) > Is) {
      C();
    }

    (p.current = false);
    a.current?.classList.remove(Fe.dragging);
  };

  const I = () => {
    if (p.current) {
      Math.abs(_.current) > Is && C();
      (p.current = false);
      a.current?.classList.remove(Fe.dragging);
    }
  };

  D(
    () => () => {
      y();
      a.current?.classList.remove(Fe.dragging);
    },
    []
  );

  const N = (k, P) => {
    if (m.current) {
      (m.current = false);
      P.stopPropagation();
      return;
    }
    const o_k = o[k];

    if (o_k) {
      d(o_k.id, k);
    }

    const F = P.currentTarget ?? null;
    const V = Ts(F, a.current);

    const ce = (se) => {
      const a_current = a.current;
      if (!a_current) {
        return se !== k || !F?.isConnected ? null : Ts(F, null);
      }
      const ne = a_current.querySelectorAll("[data-post-media-image]")[se];
      return ne
        ? (ne.scrollIntoView({
            behavior: "instant",
            inline: "center",
            block: "nearest",
          }),
          Ts(ne, a_current))
        : null;
    };

    c(
      o.map(se => ({
        id: se.id,
        url: se.url,
        width: se.width || 800,
        height: se.height || 600
      })),
      k,
      V,
      ce
    );
  };

  const E = (k) => {
    k.stopPropagation();
    (m.current = false);
  };

  if (o.length === 0 && s.length === 0) {
    return null;
  }
  const A = o.length + s.length;
  if (A === 1) {
    if (o.length === 1) {
      const [k] = o;

      const P =
        k.width && k.height
          ? {
              width: `${Math.round(RC(k.width, k.height, TC, u))}px`,
              aspectRatio: `${k.width} / ${k.height}`,
            }
          : undefined;

      return i("div", {
        className: `${Fe.mediaWrapper} ${t ? Fe.isFeed : ""}`,
        "data-count": 1,
        children: i("div", {
          className: Fe.single,
          style: P,
          onClick: (G) => {
            G.stopPropagation();
            N(0, G);
          },
          children: i(
            ml,
            {
              src: k.url,
              spoiler: k.spoiler,
              width: k.width,
              height: k.height,
              className: Fe.image,
              onClick: (G) => {
                G.stopPropagation();
                N(0, G);
              },
            },
            k.id
          ),
        }),
      });
    }
    if (s.length === 1) {
      const [k] = s;
      return i("div", {
        className: `${Fe.mediaWrapper} ${t ? Fe.isFeed : ""}`,
        "data-count": 1,
        onClick: P => P.stopPropagation(),
        children: i("div", {
          className: Fe.singleVideo,
          children: i($e, {
            fallback: null,
            children: i(
              vl,
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
  return i("div", {
    className: `${Fe.mediaWrapper} ${t ? Fe.isFeed : ""}`,
    "data-count": A,
    children: i("div", {
      ref: a,
      className: `${Fe.media} ${t ? Fe.isFeed : ""}`,
      "data-count": A,
      onClick: E,
      onMouseDown: b,
      onMouseMove: w,
      onMouseUp: T,
      onMouseLeave: I,
      children: [
        s.map(k => i(
          $e,
          {
            fallback: null,
            children: i(vl, {
              src: k.url,
              spoiler: k.spoiler,
              width: k.width,
              height: k.height,
              duration: k.duration,
              className: Fe.image,
              postVs: n,
              source: r,
              attachmentId: k.id,
            }),
          },
          k.id
        )
        ),
        o.map((k, P) => i(
          ml,
          {
            src: k.url,
            spoiler: k.spoiler,
            width: k.width,
            height: k.height,
            className: Fe.image,
            onClick: G => N(P, G),
          },
          k.id
        )
        ),
      ],
    }),
  });
}
function tf(e, t) {
  Tt(f => f.posts[e]);

  Tt(f => f.generation);

  const [n, r] = L(0);
  const o = Zo.read(t);
  const s = o?.state;
  const a = o?.received;
  const c = s && a !== undefined ? Oo(s, a) : Infinity;
  const l = !!t;

  D(() => l ? hE(e) : undefined, [e, l]);

  D(() => {
    if (!s || a === undefined) {
      return;
    }

    const f = () => r(g => g + 1);

    const h = [...s.events, ...s.marks]
      .map(g => Date.parse(g.endsAt))
      .filter(g => g > c);

    const m = h.length
      ? setTimeout(
          f,
          Math.min(2147483647, Math.max(1, Math.min(...h) - Oo(s, a) + 10))
        )
      : undefined;

    window.addEventListener("focus", f);

    return () => {
      clearTimeout(m);
      window.removeEventListener("focus", f);
    };
  }, [s, a, n, c]);

  const u = s?.marks.filter(f => Date.parse(f.endsAt) > c) ?? [];

  const d = !!s && !!t && s.revision !== t.revision;

  const p =
    s?.events.find(
      f => Date.parse(f.endsAt) > c && f.applicationsEnabled
    ) ?? s?.events.find(f => Date.parse(f.endsAt) > c);

  return {
    state: s,
    marks: d ? [] : u,
    event: d ? undefined : p,
    locked: u.length > 0,
    staleText: d,
  };
}
function AC({ size: e = 20 }) {
  return i("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    "data-duty-cap": true,
    children: [
      i("path", {
        d: "M4.5 11v5c3.8 3.3 11.2 3.3 15 0v-5L12 7.7 4.5 11Z",
        fill: "currentColor",
        opacity: ".55",
      }),
      i("path", {
        d: "m1.5 8.5 10.5-5 10.5 5-10.5 5-10.5-5Z",
        fill: "currentColor",
      }),
      i("path", {
        d: "m12 8.5 8 3.7v5.3",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      i("path", { d: "m20 16.5-1.2 3h2.4l-1.2-3Z", fill: "currentColor" }),
    ],
  });
}
function OC() {
  return (e) => {
    if (!e.eventId) {
      return;
    }
    const t = new URLSearchParams({
      product: "duty_corrector",
      source: e.source,
      postId: e.postId,
      eventId: e.eventId,
    });
    je(`/event/alice-ai?${t.toString()}`);
  };
}
const LC = "d5IP";
const PC = "ooPy";
const xC = "bcCM";
const $C = "YfTl";
const MC = "Rw7W";
const DC = "SiKE";
const UC = "uihA";
const FC = "D98m";
const BC = "ntxM";
const HC = "oLeR";
const VC = "nbWI";
const WC = "C7Vi";
const jC = "ycRc";
const zC = "Lh6w";
const qC = "I2K8";

const Me = {
  panel: LC,
  panelBody: PC,
  heading: xC,
  toolHint: $C,
  actionButton: MC,
  preview: DC,
  invalid: UC,
  error: FC,
  signature: BC,
  signatureAction: HC,
  signatureText: VC,
  actor: WC,
  stamp: jC,
  shopPlaceholder: zC,
  srOnly: qC,
};

function nf({ marks: e, postId: t }) {
  const n = OC();

  const r = [...new Map(e.map(o => [o.actor.id, o.actor])).values()];

  return r.length
    ? i("span", {
        className: Me.signature,
        "data-corrector-signature": true,
        children: [
          i("button", {
            type: "button",
            className: Me.signatureAction,
            "aria-label": "Открыть корректор в магазине",
            onClick: (o) => {
              o.stopPropagation();

              n({
                product: "corrector",
                eventId: e[0].eventId,
                postId: t,
                source: "post-signature",
              });
            },
          }),
          i("span", {
            className: Me.stamp,
            "aria-hidden": "true",
            children: i(AC, { size: 20 }),
          }),
          i("span", {
            className: Me.signatureText,
            children: [
              r.length === 1 ? "Проверил дежурный" : "Проверили дежурные",
              " ",
              r.map((o, s) => i(
                "span",
                {
                  className: Me.actor,
                  children: [
                    o.username
                      ? i("a", {
                          href: `/@${o.username}`,
                          onClick: a => a.stopPropagation(),
                          children: ["@", o.username],
                        })
                      : o.displayName,
                    s < r.length - 1 ? ", " : "",
                  ],
                },
                o.id
              )
              ),
            ],
          }),
        ],
      })
    : null;
}
function GC(e, t) {
  mt(() => {
    const e_current = e.current;
    if (!e_current || !t) {
      return;
    }
    let r = 0;

    const o = () => {
      const window_visualViewport = window.visualViewport;
      const l = window_visualViewport?.width ?? window.innerWidth;
      const u = window_visualViewport?.height ?? window.innerHeight;
      const d = window_visualViewport?.offsetLeft ?? 0;
      const p = window_visualViewport?.offsetTop ?? 0;
      const f = 16;
      const h = getComputedStyle(e_current);

      const m =
        p + Math.max(f, parseFloat(h.getPropertyValue("--safe-top")) || 0);

      let g =
        p +
        u -
        Math.max(f, parseFloat(h.getPropertyValue("--safe-bottom")) || 0);
      for (const I of document.querySelectorAll("nav")) {
        const N = I.getBoundingClientRect();

        if (N.width > l / 2 &&
          N.top > p + u / 2 &&
          N.top < g &&
          N.bottom >= p + u - 120) {
          (g = Math.min(g, N.top - f));
        }
      }
      (e_current.style.width = `${Math.max(1, Math.min(352, l - f * 2))}px`);

      e_current.style.setProperty(
        "--bubble-max-height",
        `${Math.max(80, g - m)}px`
      );

      const v = e_current.getBoundingClientRect();
      const _ = g - t.bottom - f;
      const S = t.top - f - m;
      let y = "below";
      let C = t.bottom + f;

      if (_ < v.height) {
        if (S >= v.height) {
          (y = "above");
          (C = t.top - f - v.height);
        } else if (Math.max(S, _) >= 240) {
          (y = S > _ ? "above" : "below");
          e_current.style.setProperty("--bubble-max-height", `${Math.max(S, _)}px`);

          (C = y === "above"
            ? t.top - f - e_current.getBoundingClientRect().height
            : t.bottom + f);
        } else {
          (y = "floating");
          (C = Math.max(m, Math.min(C, g - v.height)));
        }
      }

      const b = (t.left + t.right) / 2;
      const w = Math.max(d + f, Math.min(b - v.width / 2, d + l - f - v.width));
      const T = Math.max(m, Math.min(C, g - e_current.getBoundingClientRect().height));

      if (Math.abs(T - C) > 1) {
        (y = "floating");
      }

      (e_current.style.left = `${w}px`);
      (e_current.style.top = `${T}px`);

      e_current.style.setProperty(
        "--arrow-x",
        `${Math.max(24, Math.min(b - w, v.width - 24))}px`
      );

      (e_current.dataset.placement = y);
      (e_current.style.visibility = "visible");
    };

    const s = () => {
      cancelAnimationFrame(r);
      (r = requestAnimationFrame(o));
    };

    const a = new ResizeObserver(s);
    a.observe(e_current);
    window.visualViewport?.addEventListener("resize", s);
    window.visualViewport?.addEventListener("scroll", s);
    s();

    return () => {
      cancelAnimationFrame(r);
      a.disconnect();
      window.visualViewport?.removeEventListener("resize", s);
      window.visualViewport?.removeEventListener("scroll", s);
    };
  }, [e, t]);
}
function rf(e, t) {
  Nt(f => f.posts[e]);

  Nt(f => f.generation);

  const [n, r] = L(0);
  const o = Xo.read(t);
  const s = o?.state;
  const a = o?.received;
  const c = s && a !== undefined ? Oo(s, a) : Infinity;
  const l = !!t;

  D(() => l ? pE(e) : undefined, [e, l]);

  D(() => {
    if (!s || a === undefined) {
      return;
    }

    const f = () => r(g => g + 1);

    const h = [...s.events, ...(s.claim ? [s.claim] : [])]
      .map(g => Date.parse(g.endsAt))
      .filter(g => g > c);

    const m = h.length
      ? setTimeout(
          f,
          Math.min(2147483647, Math.max(1, Math.min(...h) - Oo(s, a) + 10))
        )
      : undefined;

    window.addEventListener("focus", f);

    return () => {
      clearTimeout(m);
      window.removeEventListener("focus", f);
    };
  }, [s, a, n, c]);

  const u = s?.claim && Date.parse(s.claim.endsAt) > c ? s.claim : null;
  const d = !!s && !!t && s.revision !== t.revision;

  const p =
    s?.events.find(f => f.id === u?.eventId && Date.parse(f.endsAt) > c) ??
    s?.events.find(f => Date.parse(f.endsAt) > c);

  return {
    state: s,
    claim: u,
    corrections: d || !u ? [] : s?.corrections ?? [],
    event: d ? undefined : p,
    locked: !!u,
    staleText: d,
  };
}
const of = /^[\p{L}\p{M}]+(?:[-'’][\p{L}\p{M}]+)*$/u;
const yl = /[\p{L}\p{M}\p{N}_'’-]/u;
const Or = 10;
const sf = new Intl.Segmenter("ru", { granularity: "grapheme" });
function YC(e) {
  return [...sf.segment(e)]
    .slice(0, Or)
    .map(t => t.segment)
    .join("");
}
function ks(e, t, n) {
  return of.test(e.slice(t, n))
    ? yl.test(Array.from(e.slice(0, t)).at(-1) ?? "") ||
      yl.test(Array.from(e.slice(n))[0] ?? "")
      ? "Выделите слово целиком"
      : ""
    : "Выделите одно слово без пробелов";
}
function Rs(e, t) {
  return t
    ? of.test(t)
      ? [...sf.segment(t)].length > Or
        ? `Не больше ${Or} символов`
        : t.normalize("NFC") === e.normalize("NFC")
        ? "Введите другое слово"
        : ""
      : "Введите одно слово без пробелов"
    : "";
}
function af(e, t, n) {
  const r = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  let o = 0;
  let s;
  let a;
  let c;

  while ((s = r.nextNode())) {
    const u = s.textContent?.length ?? 0;

    if (!a && t < o + u) {
      (a = { node: s, offset: t - o });
    }

    if (!c && n <= o + u) {
      (c = { node: s, offset: n - o });
    }

    (o += u);
  }

  if (!a || !c) {
    return null;
  }
  const l = document.createRange();
  l.setStart(a.node, a.offset);
  l.setEnd(c.node, c.offset);
  return l;
}
function KC(e, t) {
  const n = getComputedStyle(e);
  const r = document.createElement("canvas");
  const o = r.getContext("2d");
  o.font = "600 14px EventCaveat";
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
        const p = af(s, d.start, d.end)?.getClientRects()[0];
        if (!p) {
          return false;
        }
        const f = Math.round((p.top - l) / u);
        c.set(f, (c.get(f) ?? 0) + o.measureText(d.replacement).width + 8);
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
const XC = "bAUN";
const ZC = "WSWN";
const QC = "fPkg";
const JC = "gNeD";
const eN = "Ng5w";
const tN = "pOsB";
const nN = "hZHJ";
const rN = "rujO";
const oN = "OkyY";
const sN = "Ky0a";
const iN = "vnt9";

const it = {
  textLayer: XC,
  withCorrections: ZC,
  overlay: QC,
  strike: JC,
  handwriting: eN,
  tools: tN,
  selected: nN,
  replacement: rN,
  penIcon: oN,
  report: sN,
  signatureText: iN,
};

function aN({ root: e, corrections: t }) {
  const [n, r] = L([]);

  mt(() => {
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
      const m = parseFloat(getComputedStyle(e_current).lineHeight) || 22.5;
      const g = new Map();
      for (const _ of [...t].sort((S, y) => S.start - y.start)) {
        const S = af(e_current, _.start, _.end);
        if (!S) {
          continue;
        }
        const y = [...S.getClientRects()].filter(E => E.width > 0);
        if (!y.length) {
          continue;
        }
        const C = 14;
        const [b] = y;
        const w = Math.min(19, Math.max(16, m * 0.8));
        const T = Math.max(-C, b.top - p.top - C);

        const I = {
          id: _.id,
          text: _.replacement,
          left: b.left - p.left,
          top: T,
          font: w,
          strikes: y.map(E => ({
            left: E.left - p.left,
            top: E.top - p.top + E.height * 0.55,
            width: E.width
          })),
        };

        const N = Math.round((b.top - p.top) / m);
        g.set(N, [...(g.get(N) ?? []), I]);
      }
      const v = [];
      for (const _ of g.values()) {
        let S = _[0].font;
        const y = () => _.map(
          w => {
            (h.font = `600 ${S}px EventCaveat`);
            return h.measureText(w.text).width + 4;
          }
        );
        let C = y();

        while (C.reduce((w, T) => w + T, 0) + 4 * (_.length - 1) > p.width &&
             S > 14) {
          (S -= 0.5);
          (C = y());
        }

        let b = 0;
        _.forEach((w, T) => {
          (w.font = S);

          (w.left = Math.max(
              b,
              Math.min(
                w.left + (w.strikes[0].width - C[T]) / 2,
                p.width - C[T]
              )
            ));

          (b = w.left + C[T] + 4);
        });
        for (let w = _.length - 1; w >= 0; w--) {
          _[w].left = Math.max(
            0,
            Math.min(
              _[w].left,
              (w === _.length - 1 ? p.width : _[w + 1].left - 4) - C[w]
            )
          );
        }
        v.push(..._);
      }
      r(v);
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
    className: it.overlay,
    "data-red-pen-overlay": true,
    "aria-label": t.map(o => `Исправлено: ${o.replacement}`).join("; "),
    children: n.map(o => i(
      "span",
      {
        "data-red-pen-mark": o.id,
        children: [
          o.strikes.map((s, a) => i(
            "span",
            {
              className: it.strike,
              style: { left: s.left, top: s.top, width: s.width },
              "aria-hidden": "true",
            },
            a
          )
          ),
          i("span", {
            className: it.handwriting,
            "data-red-pen-label": true,
            style: { left: o.left, top: o.top, fontSize: o.font },
            "aria-hidden": "true",
            children: o.text,
          }),
        ],
      },
      o.id
    )
    ),
  });
}
function cN() {
  return i("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [
      i("path", { d: "m15 4 5 5M4 20l2-7L17 2l5 5-11 11-7 2Z" }),
      i("path", { d: "m6 13 5 5M3 22h18" }),
    ],
  });
}
function lN({ postId: e, claimId: t, onClose: n }) {
  const [r, o] = L(false);
  const [s, a] = L("");
  return i(on, {
    onClose: n,
    title: "Пожаловаться на правку",
    children: i("div", {
      className: Me.shopPlaceholder,
      children: [
        i("p", {
          children:
            "Жалоба относится к исправлениям красной ручкой, а не к автору поста.",
        }),
        s && i("p", { role: "status", children: s }),
        i(De, {
          fullWidth: true,
          disabled: r || s === "Жалоба отправлена",
          onClick: async () => {
            o(true);
            try {
              await x.post(
                "/red-pens/report",
                { postId: e, claimId: t, reason: "Неприемлемая правка" },
                { skipErrorToast: true }
              );

              a("Жалоба отправлена");
            } catch {
              a("Не удалось отправить. Попробуйте ещё раз");
            } finally {
              o(false);
            }
          },
          children: "Отправить жалобу",
        }),
      ],
    }),
  });
}
function cf({ claim: e, postId: t }) {
  const { openModal: n, closeModal: r } = sn();

  const o = ge(a => a.profile?.id);

  if (!e) {
    return null;
  }
  const s = () => {
    const a = new URLSearchParams({
      product: "red_pen",
      source: "post-signature",
      postId: t,
      eventId: e.eventId,
    });
    je(`/event/alice-ai?${a.toString()}`);
  };
  return i("span", {
    className: Me.signature,
    "data-red-pen-signature": true,
    children: [
      i("button", {
        type: "button",
        className: Me.signatureAction,
        "aria-label": "Открыть красную ручку в магазине",
        onClick: (a) => {
          a.stopPropagation();
          s();
        },
      }),
      i("span", { className: it.penIcon, children: i(cN, {}) }),
      i("span", {
        className: `${Me.signatureText} ${it.signatureText}`,
        children: [
          "Исправлено красной ручкой",
          " ",
          i("span", {
            className: Me.actor,
            children: e.actor.username
              ? i("a", {
                  href: `/@${e.actor.username}`,
                  onClick: a => a.stopPropagation(),
                  children: ["@", e.actor.username],
                })
              : e.actor.displayName,
          }),
        ],
      }),
      o &&
        i("button", {
          className: it.report,
          type: "button",
          "aria-label": "Пожаловаться на правку",
          onClick: (a) => {
            a.stopPropagation();
            const c = n(
              i(lN, { postId: t, claimId: e.id, onClose: () => r(c) })
            );
          },
          children: "···",
        }),
    ],
  });
}
const wl = new Intl.Segmenter("ru", { granularity: "grapheme" });
const El = 5;
function la({
  postId: e,
  authorId: t,
  text: n,
  spans: r,
  initial: o,
  initialRedPen: s,
  selectable: a = true,
  signature: c = true,
}) {
  const l = O(null);
  const u = O(null);
  const d = O(false);
  const p = tf(e, o);
  const f = rf(e, s);

  const h = ge(U => U.profile?.id);

  const m = Tt(U => U.inventory);

  const g = Nt(U => U.inventory);

  const v = m?.events.find(U => U.id === p.event?.id)?.balance;

  const _ = g?.events.find(U => U.id === f.event?.id)?.balance;

  const S = !!t && t === h;
  const y = !!p.event && !S && (v ?? 0) > 0;
  const C = !!f.event && t !== h && ((_ ?? 0) > 0 || !!f.claim?.isOwner);
  const b = a && !!h && (y || C);
  const [w, T] = L(null);
  const [I, N] = L("pen");
  const [E, A] = L("");
  const [k, P] = L("");
  const [G, F] = L(false);
  const [V, ce] = L(null);
  const [se, W] = L("");
  const [ne, ue] = L("");
  const q = !!w && w.actorId === h && (b || G || !!V);
  const Q = V?.tool ?? (I === "pen" && C ? "pen" : y ? "corrector" : "pen");
  GC(u, q ? w?.anchor : undefined);

  mt(() => {
    let U = false;
    if (!w || !E || !l.current || ks(n, w.start, w.end) || Rs(w.text, E)) {
      ue("");
      return;
    }
    const Y = () => {
      if (U || !l.current) {
        return;
      }
      const we = KC(l.current, [
        ...f.corrections,
        { start: w.start, end: w.end, replacement: E },
      ]);
      ue(we ? "" : "Правки не помещаются в строке. Выберите слово короче");
    };
    Y();
    document.fonts.load("600 14px EventCaveat").then(Y);
    document.fonts.addEventListener("loadingdone", Y);

    return () => {
      (U = true);
      document.fonts.removeEventListener("loadingdone", Y);
    };
  }, [w, E, n, f.corrections]);

  D(() => {
    if (!b) {
      return;
    }
    let U;

    const Y = () => {
      if (d.current || V || u.current?.contains(document.activeElement)) {
        return;
      }
      const be = window.getSelection();
      const l_current = l.current;
      if (!l_current || !be?.rangeCount || be.isCollapsed) {
        T(null);
        return;
      }
      const Ze = be.getRangeAt(0);
      if (
        !l_current.contains(Ze.startContainer) ||
        !l_current.contains(Ze.endContainer)
      ) {
        T(null);
        return;
      }
      const ze = Ze.cloneRange();
      ze.selectNodeContents(l_current);
      ze.setEnd(Ze.startContainer, Ze.startOffset);
      const Ye = ze.toString().length;
      const Qe = Ze.toString();
      const an = Ye + Qe.length;
      if (n.slice(Ye, an) !== Qe) {
        return;
      }
      const vt = Ze.getBoundingClientRect();

      if (vt.width) {
        if (w?.start !== Ye || w.end !== an || w.actorId !== h) {
          T({
                start: Ye,
                end: an,
                text: Qe,
                count: [...wl.segment(Qe)].filter(
                  er => !/^\s+$/u.test(er.segment)
                ).length,
                anchor: {
                  left: vt.left,
                  right: vt.right,
                  top: vt.top,
                  bottom: vt.bottom,
                },
                actorId: h,
                operationId: crypto.randomUUID(),
                penRevision: f.state?.revision,
                paintRevision: p.state?.revision,
              });

          N(C ? "pen" : "corrector");
          A("");
          P("");
          W("");
        }
      }
    };

    const we = () => {
      clearTimeout(U);
      (U = setTimeout(Y, 350));
    };

    document.addEventListener("selectionchange", we);

    return () => {
      clearTimeout(U);
      document.removeEventListener("selectionchange", we);
    };
  }, [b, h, n, f.state, p.state, C, V, w]);

  D(() => {
    if (!w) {
      return;
    }

    const U = () => {
      if (!d.current && !V) {
        T(null);
      }
    };

    const Y = (Ae) => {
      if (!u.current?.contains(Ae.target) &&
        !l.current?.contains(Ae.target)) {
        U();
      }
    };

    const we = (Ae) => {
      if (Ae.key === "Escape") {
        U();
        l.current?.focus();
      }
    };

    const be = (Ae) => {
      if (!u.current?.contains(Ae.target) &&
        !u.current?.contains(document.activeElement)) {
        U();
      }
    };

    document.addEventListener("pointerdown", Y);
    document.addEventListener("keydown", we);
    document.addEventListener("scroll", be, true);

    return () => {
      document.removeEventListener("pointerdown", Y);
      document.removeEventListener("keydown", we);
      document.removeEventListener("scroll", be, true);
    };
  }, [w, V]);

  const _e = !!w && p.marks.some(U => U.start < w.end && U.end > w.start);

  const $ =
    !!w &&
    r?.some(
      U => ["link", "mention", "hashtag", "spoiler"].includes(U.type) &&
      U.offset < w.end &&
      U.offset + U.length > w.start
    );

  const H = f.locked
    ? "Этот пост уже исправили красной ручкой. Корректор недоступен"
    : p.event
    ? p.event.applicationsEnabled
      ? w && (w.count < 1 || w.count > 10)
        ? "Выберите от 1 до 10 символов без учёта пробелов"
        : p.event.used >= 3
        ? "На этом посте вы уже использовали 3 корректора"
        : _e
        ? "Этот фрагмент уже закрашен. Выберите другой"
        : v === 0
        ? "У вас пока нет корректоров"
        : ""
      : "Применение временно недоступно"
    : "Ивент завершён";

  const Z = p.locked
    ? "Этот пост уже замазан корректором. Красная ручка недоступна"
    : f.claim && !f.claim.isOwner
    ? "Этот пост уже исправили красной ручкой"
    : f.event
    ? f.event.applicationsEnabled
      ? f.claim && f.claim.used >= El
        ? `Вы уже исправили ${El} слов`
        : w && ks(n, w.start, w.end)
        ? ks(n, w.start, w.end)
        : $
        ? "Ссылки, упоминания и скрытый текст исправлять нельзя"
        : w && f.corrections.some(U => U.start < w.end && U.end > w.start)
        ? "Это слово уже исправлено"
        : w
        ? Rs(w.text, E)
        : ""
      : "Исправления временно недоступны"
    : "Ивент завершён";

  const fe = Q === "pen" ? Z || ne : H;

  const X = w
    ? [...wl.segment(w.text)]
        .map(U => p.marks.some(
    Y => Y.start < w.start + U.index + U.segment.length &&
    Y.end > w.start + U.index
  ) && !/^\s+$/u.test(U.segment)
    ? "■"
    : U.segment
        )
        .join("")
    : "";

  const J = () => Promise.allSettled([
    ...(o ? [ra([e]), na()] : []),
    ...(s ? [ta([e]), ea()] : []),
  ]);

  async function he() {
    if (!w || d.current) {
      return;
    }
    const U = Q === "pen" ? f.event : p.event;
    const Y = Q === "pen" ? w.penRevision : w.paintRevision;
    if (!V && (!U || !Y || fe || (Q === "pen" && !E))) {
      return;
    }
    const we = V ?? {
      tool: Q,
      body: {
        eventId: U.id,
        postId: e,
        revision: Y,
        start: w.start,
        end: w.end,
        operationId: w.operationId,
        ...(Q === "pen" ? { replacement: E } : {}),
      },
    };
    (d.current = true);
    F(true);
    P("");
    try {
      await x.post(
        we.tool === "pen" ? "/red-pens/apply" : "/correctors/apply",
        we.body,
        { skipErrorToast: true }
      );

      ce(null);
      W(we.tool === "pen" ? "Слово исправлено" : "Текст закрашен");
      T(null);
      window.getSelection()?.removeAllRanges();
      await J();
    } catch (be) {
      const Ae = be;
      ce(!Ae.status || Ae.status >= 500 ? we : null);
      P(Ae.message || "Не удалось получить ответ. Повторите запрос");
      await J();
    } finally {
      (d.current = false);
      F(false);
    }
  }
  const Pe = () => {
    if (!d.current) {
      T(null);
      P("");
      ce(null);
      window.getSelection()?.removeAllRanges();
    }
  };
  return i(Ne, {
    children: [
      i("span", {
        className: `${it.textLayer} ${
          f.corrections.length > 0 ? it.withCorrections : ""
        }`,
        "data-post-tool-text": true,
        children: [
          i("span", {
            ref: l,
            "data-corrector-text": e,
            "data-corrector-applied": se === "Текст закрашен" || undefined,
            tabIndex: b ? 0 : undefined,
            onCopy: p.marks.length
              ? (U) => {
              const Y = window.getSelection();
              if (!Y?.rangeCount || !l.current) {
                return;
              }
              const we = Y.getRangeAt(0);
              if (
                !l.current.contains(we.startContainer) ||
                !l.current.contains(we.endContainer)
              ) {
                U.preventDefault();
                return;
              }
              const be = we.cloneRange();
              be.selectNodeContents(l.current);
              be.setEnd(we.startContainer, we.startOffset);
              let Ae = be.toString().length;
              const Ze = Array.from(Y.toString())
                .map((ze) => {
                const Ye = Ae;
                (Ae += ze.length);

                return p.marks.some(Qe => Ye >= Qe.start && Ye < Qe.end) &&
                !/\s/u.test(ze)
                  ? "■"
                  : ze;
              })
                .join("");
              U.preventDefault();
              U.clipboardData?.setData("text/plain", Ze);
            }
              : undefined,
            children:
              p.staleText || f.staleText
                ? i("span", { children: "Пост изменился. Обновите страницу" })
                : i(aa, { text: n, spans: r, correctorMarks: p.marks }),
          }),
          f.corrections.length > 0 &&
            i(aN, { root: l, corrections: f.corrections }),
        ],
      }),
      c &&
        i(Ne, {
          children: [
            i(nf, { marks: p.marks, postId: e }),
            i(cf, { claim: f.claim, postId: e }),
          ],
        }),
      se && i("span", { className: Me.srOnly, role: "status", children: se }),
      q &&
        w &&
        $(
          i("div", {
            ref: u,
            role: "dialog",
            "aria-label": Q === "pen" ? "Красная ручка" : "Закрасить текст",
            "data-corrector-panel": true,
            "data-post-tool-panel": true,
            className: Me.panel,
            onClick: U => U.stopPropagation(),
            children: i("div", {
              className: Me.panelBody,
              children: [
                i("div", {
                  className: Me.heading,
                  children: [
                    i("strong", {
                      children: Q === "pen" ? "Красная ручка" : "Корректор",
                    }),
                    i(De, {
                      variant: "secondary",
                      size: "sm",
                      iconOnly: true,
                      "aria-label": "Закрыть",
                      disabled: G,
                      onClick: Pe,
                      children: i(gt, { size: 18 }),
                    }),
                  ],
                }),
                i("p", {
                  className: Me.toolHint,
                  children:
                    Q === "pen"
                      ? `Одно слово до ${Or} символов · до 5 правок на пост`
                      : "До 10 символов за одно применение",
                }),
                C &&
                  y &&
                  i("div", {
                    className: it.tools,
                    "aria-label": "Предметы",
                    children: [
                      i(De, {
                        size: "sm",
                        variant: "secondary",
                        className: Q === "pen" ? it.selected : "",
                        "aria-pressed": Q === "pen",
                        disabled: G || !!V,
                        onClick: () => {
                          N("pen");
                          P("");
                        },
                        children: "Ручка",
                      }),
                      i(De, {
                        size: "sm",
                        variant: "secondary",
                        className: Q === "corrector" ? it.selected : "",
                        "aria-pressed": Q === "corrector",
                        disabled: G || !!V,
                        onClick: () => {
                          N("corrector");
                          P("");
                        },
                        children: "Корректор",
                      }),
                    ],
                  }),
                i("div", {
                  className: Me.preview,
                  "data-corrector-preview": true,
                  children: [
                    i("span", { children: X }),
                    Q === "corrector" &&
                      i("b", {
                        className: w.count > 10 ? Me.invalid : "",
                        children: [w.count, "/10"],
                      }),
                  ],
                }),
                Q === "pen" &&
                  i("label", {
                    className: it.replacement,
                    children: [
                      "Новое слово",
                      i("input", {
                        "aria-label": "Новое слово",
                        placeholder: `До ${Or} символов`,
                        value: E,
                        disabled: G || !!V || (!!Z && Z !== Rs(w.text, E)),
                        autoComplete: "off",
                        onInput: (U) => {
                          A(YC(U.currentTarget.value));
                          P("");
                        },
                        onKeyDown: (U) => {
                          if (U.key === "Enter" &&
                            !U.isComposing) {
                            U.preventDefault();
                            he();
                          }
                        },
                      }),
                    ],
                  }),
                (fe || k) &&
                  i("p", {
                    className: Me.error,
                    role: "status",
                    children: k || fe,
                  }),
                i(De, {
                  size: "md",
                  fullWidth: true,
                  className: Me.actionButton,
                  disabled:
                    G || (!V && (!!fe || (Q === "pen" ? !E : v === undefined))),
                  onClick: he,
                  children: G
                    ? "Сохраняем…"
                    : V
                    ? "Проверить и повторить"
                    : Q === "pen"
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
const uN = "rvRB";
const dN = "ziwx";
const bl = { layer: uN, stain: dN };

const fN = e => `/assets/alice-ai/${e}.png`;

function pN({ placements: e, className: t = "" }) {
  return e.length === 0
    ? null
    : i("div", {
        className: `${bl.layer} ${t}`,
        "aria-hidden": "true",
        children: e.map(n => i(
          "img",
          {
            className: bl.stain,
            src: fN(n.asset),
            alt: "",
            draggable: false,
            style: {
              left: `${n.x * 100}%`,
              top: `${n.y * 100}%`,
              width: `${n.size * 100}%`,
              zIndex: n.z,
              transform: `translate(-50%, -50%) rotate(${n.angle}deg)`,
            },
          },
          n.id
        )
        ),
      });
}
const lf = 0.5;
const hN = 250;
const mN = 1000/* 1e3 */;
const gN = 50;
const _N = [0, lf, 1];
const wn = new Set();
const bo = new WeakMap();
const _n = new Map();
const vn = new Map();
const xo = new Set();
const co = new Set();
let As = null;
let Bn = null;
function vN(e) {
  if (xo.size !== 0) {
    co.add(e);

    As === null &&
      (As = setTimeout(() => {
      (As = null);

      if (co.size === 0) {
        return;
      }

      const t = Array.from(co);
      co.clear();
      const n = t.length > 20 ? t.slice(0, 20) : t;
      for (const r of xo) {
        r(n);
      }
    }, gN));
  }
}
function yN() {
  return (Bn || (typeof IntersectionObserver === "undefined" ? null : ((Bn = new IntersectionObserver(
        (e) => {
          for (const t of e) {
            const n = bo.get(t.target);
            if (!n || n.length === 0) {
              continue;
            }
            const r = t.intersectionRatio >= lf;
            for (const o of n) {
              if (r) {
                const s = vn.get(o);
                if (s !== undefined) {
                  clearTimeout(s);
                  vn.delete(o);
                  continue;
                }
                if (wn.has(o) || _n.has(o)) {
                  continue;
                }
                const a = setTimeout(() => {
                  _n.delete(o);
                  wn.add(o);
                  vN(o);
                }, hN);
                _n.set(o, a);
              } else {
                const s = _n.get(o);

                if (s !== undefined) {
                  clearTimeout(s);
                  _n.delete(o);
                }

                if (!wn.has(o) || vn.has(o)) {
                  continue;
                }

                const a = setTimeout(() => {
                  vn.delete(o);
                  wn.delete(o);
                }, mN);
                vn.set(o, a);
              }
            }
          }
        },
        { threshold: _N }
      )), Bn)));
}

const $o = {
    observe(e, t) {
      const n = yN();
      if (!n) {
        return;
      }
      const r = Array.isArray(t) ? t.filter(Boolean) : [t];

      if (r.length !== 0) {
        bo.set(e, r);
        n.observe(e);
      }
    },
    unobserve(e) {
      if (!Bn) {
        return;
      }
      const t = bo.get(e);
      Bn.unobserve(e);
      bo.delete(e);

      if (!!t) {
        for (const n of t) {
          const r = _n.get(n);

          if (r !== undefined) {
            clearTimeout(r);
            _n.delete(n);
          }

          const o = vn.get(n);

          if (o !== undefined) {
            clearTimeout(o);
            vn.delete(n);
          }

          wn.delete(n);
        }
      }
    },
    getSnapshot() {
      return Array.from(wn);
    },
    size() {
      return wn.size;
    },
    onAppear(e) {
      xo.add(e);

      return () => {
        xo.delete(e);
      };
    },
  };

const wN = "ozRj";
const EN = "aBba";
const bN = "mczD";
const Os = { hint: wN, multiline: EN, arrow: bN };
function Cr({ text: e, children: t, className: n, multiline: r }) {
  const o = O(null);
  const [s, a] = L(null);

  const c = R(() => {
    if (!o.current) {
      return;
    }
    const d = o.current.getBoundingClientRect();
    a({ x: d.left + d.width / 2, y: d.top });
  }, []);

  const l = R(() => {
    a(null);
  }, []);

  const u = R(
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

  D(() => {
    if (!s) {
      return;
    }
    const d = (p) => {
      if (o.current && !o.current.contains(p.target)) {
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
    ref: o,
    className: n,
    onMouseEnter: c,
    onMouseLeave: l,
    onClick: u,
    children: [
      t,
      s &&
        $(
          i("div", {
            className: `${Os.hint} ${r ? Os.multiline : ""}`,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, i("span", { className: Os.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const SN = "iaFb";
const CN = "bsNQ";
const NN = "OgJN";
const TN = "Cg6H";
const IN = "kb2B";
const kN = "EUIL";
const RN = "tADk";
const AN = "ofJe";
const ON = "Egqv";
const LN = "bakm";

const nt = {
  header: SN,
  headerMain: CN,
  headerAccessory: NN,
  hasAccessory: TN,
  moreDropdown: IN,
  pinnedBadge: kN,
  authorInfo: RN,
  authorLink: AN,
  time: ON,
  edited: LN,
};

function PN({
  accessory: e,
  editLocked: t = false,
  author: n,
  createdAt: r,
  editedAt: o,
  postId: s,
  showAvatar: a = true,
  isOnOwnProfile: c = false,
  isPinned: l = false,
  onReport: u,
  onEdit: d,
  onDelete: p,
  onPin: f,
  onCopyLink: h,
}) {
  const m = kd(r);
  const g = Qi(n.id);

  const v = ge(b => b.profile?.id);

  const _ = n.id === v;
  const S = 2880 * 60 * 1000/* 1e3 */;
  const y = _ && !t && Date.now() - new Date(r).getTime() < S;

  const C = Re(() => {
    const b = [];

    b.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: i(Rd, { size: 16 }),
      onClick: () => h?.(s),
    });

    if (y) {
      b.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Ld, { size: 16 }),
        onClick: () => d?.(s),
      });
    }

    if (c) {
      b.push({
        id: "pin",
        label: l ? "Открепить" : "Закрепить",
        icon: i(zc, { size: 16 }),
        onClick: () => f?.(s),
      });
    }

    if ((_ || c)) {
      b.push({
        id: "delete",
        label: "Удалить",
        icon: i(Bd, { size: 16 }),
        danger: true,
        onClick: () => p?.(s),
      });
    }

    if (!_) {
      b.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(xd, { size: 16 }),
        danger: true,
        onClick: () => u?.(s),
      });
    }

    return b;
  }, [_, y, c, l, s, d, p, f, u, h]);

  return i("header", {
    className: nt.header,
    children: [
      l &&
        i("div", {
          className: nt.pinnedBadge,
          children: [
            i(zc, { size: 14 }),
            i("span", { children: "Закреплённый пост" }),
          ],
        }),
      i("div", {
        className: `${nt.headerMain} ${e ? nt.hasAccessory : ""}`,
        children: [
          a &&
            i("a", {
              href: `/@${n.username}`,
              children: i(_t, {
                src: n.avatar,
                alt: n.displayName,
                size: "sm",
                online: n.online,
              }),
            }),
          i("div", {
            className: nt.authorInfo,
            children: [
              i("a", {
                href: `/@${n.username}`,
                className: nt.authorLink,
                children: i(Hr, {
                  userId: n.id,
                  name: n.displayName,
                  verified: n.isVerified,
                  hasNuksta: n.hasNuksta,
                  pin: n.pin,
                  size: "sm",
                  trailing: g
                    ? i("time", {
                        dateTime: r,
                        className: nt.time,
                        "data-post-time": true,
                        children: [
                          m,
                          o &&
                            i(Cr, {
                              text: new Date(o).toLocaleString("ru-RU"),
                              children: i("span", {
                                className: nt.edited,
                                children: " (ред.)",
                              }),
                            }),
                        ],
                      })
                    : undefined,
                }),
              }),
              !g &&
                i("time", {
                  dateTime: r,
                  className: nt.time,
                  "data-post-time": true,
                  children: [
                    m,
                    o &&
                      i(Cr, {
                        text: new Date(o).toLocaleString("ru-RU"),
                        children: i("span", {
                          className: nt.edited,
                          children: " (ред.)",
                        }),
                      }),
                  ],
                }),
            ],
          }),
          e && i("div", { className: nt.headerAccessory, children: e }),
          i(ef, {
            trigger: i(Md, { size: 18 }),
            items: C,
            position: "bottom-right",
            className: nt.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
const xN = "hF8a";
const $N = "rCMN";
const MN = "SLBm";
const DN = "JgyZ";
const UN = "JnIZ";
const FN = "WZU0";
const BN = "Um9R";
const HN = "qiDy";
const VN = "IRw6";
const WN = "h0qj";
const jN = "OCdc";
const zN = "zG6v";
const qN = "EgdP";
const GN = "ry93";
const YN = "Tz2E";
const KN = "cFJj";
const XN = "LWf0";
const ZN = "MFTp";

const Le = {
  actions: xN,
  compact: $N,
  action: MN,
  views: DN,
  flush: UN,
  actionsLeft: FN,
  disabled: BN,
  liked: HN,
  unliked: VN,
  reposted: WN,
  noAnimation: jN,
  reactionWrapper: zN,
  actionsRight: qN,
  captured: GN,
  capturedEmoji: YN,
  capturedText: KN,
  capturedMobile: XN,
  capturedSolo: ZN,
};

function uf({
  liked: e,
  reposted: t,
  likesCount: n,
  repostsCount: r,
  commentsCount: o,
  viewsCount: s,
  dominantEmoji: a,
  onLike: c,
  onRepost: l,
  onComment: u,
  disableRepost: d = false,
  compact: p = false,
  emojiOnly: f = false,
  flush: h = false,
  infiniteLike: m = false,
}) {
  const g = O(false);
  const v = p ? 17 : 20;
  return i("footer", {
    className: `${Le.actions} ${p ? Le.compact : ""} ${h ? Le.flush : ""}`,
    children: [
      i("div", {
        className: Le.actionsLeft,
        children: [
          i("div", {
            className: Le.reactionWrapper,
            onClick: _ => _.stopPropagation(),
            children: i("button", {
              className: `${Le.action} ${e ? Le.liked : ""} ${
                g.current && !e ? Le.unliked : ""
              } ${!g.current && e ? Le.noAnimation : ""}`,
              onClick: (_) => {
                _.stopPropagation();
                (g.current = true);
                c();
              },
              "aria-label": "Нравится",
              children: [
                i(
                  ji,
                  { filled: e, size: v },
                  m ? `liked-${n}` : e ? "liked" : "not-liked"
                ),
                i(vr, { value: n }),
              ],
            }),
          }),
          i("button", {
            className: Le.action,
            onClick: (_) => {
              _.stopPropagation();
              u();
            },
            "aria-label": "Комментировать",
            children: [i(Od, { size: v }), i(vr, { value: o })],
          }),
          i("button", {
            className: `${Le.action} ${t ? Le.reposted : ""} ${
              d ? Le.disabled : ""
            }`,
            onClick: (_) => {
              _.stopPropagation();

              if (!d) {
                l();
              }
            },
            disabled: d,
            "aria-label": "Репост",
            children: [i(Gi, { size: v }), i(vr, { value: r })],
          }),
        ],
      }),
      i("div", {
        className: Le.actionsRight,
        children: [
          a &&
            (f
              ? i(Cr, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: Le.capturedSolo,
                  children: i("span", {
                    className: Le.capturedEmoji,
                    children: a,
                  }),
                })
              : i(Ne, {
                  children: [
                    i(Cr, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: Le.captured,
                      children: [
                        i("span", { className: Le.capturedEmoji, children: a }),
                        i("span", {
                          className: Le.capturedText,
                          children: "Пост захвачен",
                        }),
                      ],
                    }),
                    i(Cr, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: Le.capturedMobile,
                      children: i("span", { children: a }),
                    }),
                  ],
                })),
          i("span", {
            className: Le.views,
            children: [i(By, { size: v }), i(vr, { value: s })],
          }),
        ],
      }),
    ],
  });
}
const QN = de(() => ae(() => import("./index-B0fEdRE7.js"), __vite__mapDeps([17, 18, 19])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function df(e, t) {
  const { openModal: n, closeModal: r, onDelete: o } = t;
  const s = Wt();

  const a = le(E => E.deletePost);

  const c = le(E => E.updatePostLike);

  const l = le(E => E.beginLikeMutation);

  const u = le(E => E.endLikeMutation);

  const d = le(E => E.updatePollVote);

  const p = le(E => E.updatePollData);

  const f = oa(e);
  const h = f.myReaction !== null;
  const f_likesTotal = f.likesTotal;

  const g = Re(() => pf(e.attachments), [e.attachments]);

  const v = R(async () => {
    const E = h;
    const A = E ? -1 : 1;
    c(e.id, E ? null : "love", A);
    l(e.id);
    try {
      const k = E ? await He.unlikePost(e.id) : await He.likePost(e.id);
      u(e.id, k?.likesCount);
    } catch (k) {
      c(e.id, E ? "love" : null, -A);
      u(e.id);
      console.error("Failed to toggle like:", k);
    }
  }, [e.id, h, c, l, u]);

  const _ = R(() => {
    if (!h) {
      v();
    }
  }, [h, v]);

  const S = R(
    (E) => {
      const A = e.author.username ?? e.author.id;
      const k = `${window.location.origin}/@${A}/post/${E}`;
      navigator.clipboard.writeText(k);
      $t.success("Ссылка скопирована");
    },
    [e.author.username, e.author.id]
  );

  const y = R(
    (E) => {
      n(i(QN, { targetType: "post", targetId: E, onClose: r }));
    },
    [n, r]
  );

  const C = R(
    (E) => {
      n(
        i(ek, {
          postId: e.id,
          initialText: e.text ?? "",
          initialSpans: e.spans ?? [],
        })
      );
    },
    [n, e.id, e.text, e.spans]
  );

  const b = R(
    async (E) => {
      if (confirm("Вы уверены, что хотите удалить этот пост?")) {
        try {
          await a(E);
          o?.(E);
        } catch (A) {
          console.error("Failed to delete post:", A);
        }
      }
    },
    [a, o]
  );

  const w = R(() => {
    if (s) {
      n(i(UI, { postId: e.id, onClose: r }));
    } else {
      const E = e.author.username ?? e.author.id;
      je(`/@${E}/post/${e.id}`);
    }
  }, [e.author.username, e.author.id, e.id, s, n, r]);

  const T = R(() => {
    n(i(uk, { post: e, onClose: r }));
  }, [n, r, e]);

  const I = R(
    async (E) => {
      const A = g?.myVote ?? null;
      d(e.id, E, A);
      try {
        const k = await He.votePoll(e.id, [E]);
        if (k) {
          p(e.id, k);
          return k;
        }
      } catch (k) {
        console.error("[Poll] Failed to vote:", k);

        if (A) {
          d(e.id, A, E);
        }
      }
      return null;
    },
    [e.id, g?.myVote, d, p]
  );

  const N = R(
    async (E) => {
      try {
        const A = await He.votePoll(e.id, E);
        if (A) {
          p(e.id, A);
          return A;
        }
      } catch (A) {
        console.error("[Poll] Failed to vote multiple:", A);
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
    handleComment: w,
    handleRepost: T,
    handleReport: y,
    handleEdit: C,
    handleDelete: b,
    handleCopyLink: S,
    handlePollVote: I,
    handlePollVoteMultiple: N,
  };
}
function ff(e) {
  const t = R(() => {
      le.getState().updatePostLike(e, "love", 1);
    }, [e]);

  const n = R(() => {
    const { postStatsCache: o, applyStatsUpdates: s } = le.getState();
    const o_e = o[e];

    if (o_e) {
      s([
        {
          id: e,
          likesCount: o_e.likesTotal,
          commentsCount: o_e.commentsCount + 1,
          repostsCount: o_e.repostsCount,
          viewsCount: o_e.viewsCount,
          dominantEmoji: o_e.dominantEmoji,
        },
      ]);
    }
  }, [e]);

  const r = R(() => {
    le.getState().updatePostReposted(e, true, 1);
  }, [e]);

  return { handleLike: t, handleComment: n, handleRepost: r };
}
const JN = "EfDr";
const eT = "cmxD";
const tT = "FtiB";
const nT = "SfVS";
const rT = "MEXd";
const oT = "JzSI";
const sT = "orO0";
const iT = "FCMK";
const aT = "OUOn";
const cT = "Nrk3";
const lT = "weTl";
const uT = "D5i6";
const dT = "ygHB";
const fT = "XnU0";
const pT = "ro7Z";
const hT = "uRez";
const mT = "y1LG";
const gT = "x4Vn";
const _T = "ZTtt";
const vT = "Ohi1";

const Se = {
  post: JN,
  notebookPost: eT,
  originalNotebook: tT,
  text: nT,
  notebookGrid: rT,
  notebookRuled: oT,
  notebookLabel: sT,
  postInner: iT,
  isFeed: aT,
  avatarLink: cT,
  postContent: lT,
  postBody: uT,
  textWrapper: dT,
  collapsed: fT,
  expandButton: pT,
  originalPost: hT,
  originalPostText: mT,
  originalPostHeader: gT,
  originalPostTime: _T,
  originalPostMedia: vT,
};

function yT(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function wT({ attachments: e, postVs: t, source: n }) {
  const r = Re(() => Mo(e), [e]);
  return r.length === 0
    ? null
    : i("div", {
        className: Se.originalPostMedia,
        children: i(ca, { media: r, postVs: t, source: n }),
      });
}
function ET({ originalPost: e, source: t, showcase: n = false }) {
  const r = yT(e.createdAt);
  const { openModal: o, closeModal: s } = sn();

  const {
    liked: a,
    totalLikes: c,
    handleLike: l,
    handleComment: u,
    handleRepost: d,
  } = df(e, { openModal: o, closeModal: s });

  const { handleLike: p, handleComment: f, handleRepost: h } = ff(e.id);
  const m = oa(e);

  const g = R(
    (v) => {
      v.stopPropagation();

      if (n) {
        return;
      }

      const _ = e.author.username ?? e.author.id;
      je(`/@${_}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id, n]
  );

  return i("div", {
    className: `${Se.originalPost} ${e.notebook ? Se.originalNotebook : ""} ${
      e.notebook?.style === "grid" ? Se.notebookGrid : ""
    } ${e.notebook?.style === "ruled" ? Se.notebookRuled : ""}`,
    onClick: g,
    children: [
      i("div", {
        className: Se.originalPostHeader,
        children: [
          i(Gi, { size: 14 }),
          i(_t, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          i(Hr, {
            userId: e.author.id,
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          i("span", { className: Se.originalPostTime, children: r }),
        ],
      }),
      e.notebook &&
        i("a", {
          className: Se.notebookLabel,
          href: `/event/alice-ai?product=post_notebook&variant=${
            e.notebook.style
          }&returnTo=${encodeURIComponent(window.location.pathname)}`,
          onClick: v => v.stopPropagation(),
          children: [
            "Тетрадка ",
            e.notebook.style === "grid" ? "в клетку" : "в линейку",
          ],
        }),
      e.text &&
        i("div", {
          className: Se.originalPostText,
          children:
            e.corrector || e.redPen
              ? i(la, {
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
      e.attachments &&
        e.attachments.length > 0 &&
        i(wT, { attachments: e.attachments, postVs: e.vs, source: t }),
      i(uf, {
        liked: a,
        reposted: m.reposted,
        likesCount: c,
        repostsCount: m.repostsCount,
        commentsCount: m.commentsCount,
        viewsCount: m.viewsCount,
        dominantEmoji: m.dominantEmoji,
        onLike: n ? p : l,
        onRepost: n ? h : d,
        onComment: n ? f : u,
        compact: true,
        emojiOnly: n,
        infiniteLike: n,
      }),
    ],
  });
}
const bT = de(() => ae(() => import("./index-Bzf--J7E.js"), __vite__mapDeps([20, 21])).then(
  e => ({
    default: e.Poll
  })
)
);
function ST(e) {
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
function Mo(e) {
  return e
    .filter(
      t => t.type === "image" ||
      t.type === "video" ||
      (t.type === "media" && "media" in t)
    )
    .map(t => t.type === "media" && "media" in t ? t.media : t);
}
function pf(e) {
  return e.find(t => t.type === "poll");
}
const CT = 300;
const NT = 500;

const TT = zo(
  (
    {
      post: t,
      variant: n = "feed",
      className: r,
      isOnOwnProfile: o = false,
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
    const m = n === "feed";
    const g = Wt();
    const { openModal: v, closeModal: _ } = sn();

    const S = le(ee => ee.setCurrentPost);

    const y = le(ee => ee.seedPostStats);

    const C = le(ee => ee.posts.find(Ee => Ee.id === t.id));

    const b = ge(ee => ee.profile);

    const w = tf(t.id, t.corrector);
    const T = rf(t.id, t.redPen);
    D(() => {
      y(t);
    }, [t, y]);
    const I = oa(t);
    const { isFollowing: N, follow: E, unfollow: A } = g0(t.author.id);
    const k = m && b?.id !== t.author.id ? N : undefined;

    const {
      liked: P,
      totalLikes: G,
      handleLike: F,
      handleDoubleTap: V,
      handleComment: ce,
      handleRepost: se,
      handleReport: W,
      handleEdit: ne,
      handleDelete: ue,
      handleCopyLink: q,
      handlePollVote: Q,
      handlePollVoteMultiple: _e,
    } = df(t, { openModal: v, closeModal: _, onDelete: f });

    const { handleLike: $, handleComment: H, handleRepost: Z } = ff(t.id);

    const fe = R(() => {
      if (k !== undefined) {
        if (k) {
          v(
                  i(nw, {
                    displayName: t.author.displayName,
                    onConfirm: A,
                    onClose: _,
                  })
                );
        } else {
          E();
        }
      }
    }, [k, t.author.displayName, E, A, v, _]);

    const X = O(null);
    const J = O(null);
    const he = O(null);
    const [Pe, U] = L(CT);
    const [Y, we] = L(0);
    const be = Y > Pe;
    D(
      () => () => {
        if (he.current) {
          cancelAnimationFrame(he.current);
          (he.current = null);
        }
      },
      []
    );

    const Ae = R(
        (ee) => {
          if (ee &&
            m) {
            he.current && cancelAnimationFrame(he.current);

            (he.current = requestAnimationFrame(() => {
              (he.current = null);
              we(ee.scrollHeight);
            }));
          }

          if (J) {
            (J.current = ee);
          }
        },
        [m]
      );

    const Ze = R((ee) => {
      ee.stopPropagation();

      U(Ee => Ee + NT);
    }, []);

    DE(t.id, X, c, l, t.vs);
    const ze = t.originalPost?.id;
    D(() => {
      const X_current = X.current;
      if (!X_current) {
        return;
      }
      const Ee = ze ? [t.id, ze] : t.id;
      $o.observe(X_current, Ee);

      return () => $o.unobserve(X_current);
    }, [t.id, ze]);
    const Ye = O(null);
    const Qe = O(0);

    const an = R((ee) => {
      Ye.current = ee.target;
    }, []);

    const vt = R(() => {
      S(C ?? t);
      const Ee = t.author.username ?? t.author.id;
      je(`/@${Ee}/post/${t.id}`);
    }, [t, C, S]);

    const er = R(
      (ee) => {
        const ee_target = ee.target;
        if (ee_target.closest("button") ||
        ee_target.closest("a") ||
        ee_target.closest("video") ||
        ee_target.closest("img")) {
          return;
        }
        if (g) {
          const jr = Date.now();
          if (jr - Qe.current < 300) {
            (Qe.current = 0);
            V();
            return;
          }
          Qe.current = jr;
          return;
        }
        if (Ye.current !== ee_target) {
          Ye.current = null;
          return;
        }
        Ye.current = null;
        const nr = window.getSelection();

        if (!nr || nr.toString().length <= 0) {
          vt();
        }
      },
      [g, V, vt]
    );

    const Jo = Re(() => ST(t.author), [t.author]);

    const Vr = Re(() => Mo(t.attachments), [t.attachments]);

    const Je = Re(() => pf(t.attachments), [t.attachments]);

    const tr =
      t.notebook?.style === "grid"
        ? "Тетрадка в клетку"
        : t.notebook?.style === "ruled"
        ? "Тетрадка в линейку"
        : null;

    const Wr = tr
      ? `/event/alice-ai?product=post_notebook&variant=${
          t.notebook.style
        }&returnTo=${encodeURIComponent(window.location.pathname)}`
      : null;

    const te = i("div", {
      className: `${Se.postInner} ${m ? Se.isFeed : ""} ${r || ""}`,
      children: [
        m &&
          i("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            className: Se.avatarLink,
            children: i(_t, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: k,
              onFollowBadgeClick: fe,
            }),
          }),
        i("div", {
          className: Se.postContent,
          children: [
            i(PN, {
              author: Jo,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !m,
              isOnOwnProfile: o,
              isPinned: s,
              onReport: W,
              onEdit: d ?? ne,
              onDelete: ue,
              onPin: p,
              onCopyLink: q,
              editLocked: w.locked || T.locked,
              accessory:
                tr && Wr
                  ? i("a", {
                      className: Se.notebookLabel,
                      href: Wr,
                      onClick: ee => ee.stopPropagation(),
                      children: tr,
                    })
                  : null,
            }),
            i("div", {
              className: Se.postBody,
              children: [
                t.text &&
                  i("div", {
                    className: Se.textWrapper,
                    children: [
                      i("div", {
                        ref: Ae,
                        className: `${Se.text} ${be ? Se.collapsed : ""}`,
                        style: m && be ? { maxHeight: `${Pe}px` } : undefined,
                        children:
                          t.corrector || t.redPen
                            ? i(la, {
                                postId: t.id,
                                authorId: t.author.id,
                                text: t.text,
                                spans: t.spans,
                                initial: t.corrector,
                                initialRedPen: t.redPen,
                                signature: false,
                                selectable: !be && !u,
                              })
                            : i(aa, { text: t.text, spans: t.spans ?? [] }),
                      }),
                      m &&
                        be &&
                        i("button", {
                          type: "button",
                          className: Se.expandButton,
                          onClick: Ze,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                Vr.length > 0 &&
                  i(ca, { media: Vr, isFeed: m, postVs: t.vs, source: c }),
                Je &&
                  i($e, {
                    fallback: null,
                    children: i(bT, {
                      title: Je.question,
                      options: Je.options.map(ee => ({
                        id: ee.id,
                        text: ee.text,
                        votes: ee.votes ?? 0
                      })),
                      totalVotes: Je.totalVotes ?? 0,
                      voted:
                        (Je.myVotes ?? []).length > 0 ||
                        (Je.myVote !== undefined && Je.myVote !== null),
                      selectedOptionId: Je.myVote,
                      selectedOptionIds: Je.myVotes ?? [],
                      multipleChoice: Je.multipleChoice ?? false,
                      onVote: Q,
                      onVoteMultiple: _e,
                      disabled: Je.id.startsWith("temp-"),
                    }),
                  }),
                t.originalPost &&
                  i(ET, {
                    originalPost: t.originalPost,
                    source: c,
                    showcase: u,
                  }),
                t.corrector && i(nf, { marks: w.marks, postId: t.id }),
                t.redPen && i(cf, { claim: T.claim, postId: t.id }),
                i(uf, {
                  compact: u,
                  emojiOnly: u,
                  flush: u,
                  infiniteLike: u,
                  liked: P,
                  reposted: I.reposted,
                  likesCount: G,
                  repostsCount: I.repostsCount,
                  commentsCount: I.commentsCount,
                  viewsCount: I.viewsCount,
                  dominantEmoji: I.dominantEmoji,
                  onLike: u ? $ : F,
                  onRepost: u ? Z : se,
                  onComment: u ? H : ce,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return m
      ? i("article", {
          ref: X,
          className: `${Se.post} ${t.notebook ? Se.notebookPost : ""} ${
            t.notebook?.style === "grid" ? Se.notebookGrid : ""
          } ${t.notebook?.style === "ruled" ? Se.notebookRuled : ""} ${
            a ? "flash-highlight" : ""
          }`,
          "data-alice-water-anchor-kind": "post",
          "data-alice-water-anchor-id": t.id,
          onMouseDown: an,
          onClick: er,
          children: [i(pN, { placements: h }), te],
        })
      : i("div", {
          ref: X,
          className: `${t.notebook ? Se.notebookPost : ""} ${
            t.notebook?.style === "grid" ? Se.notebookGrid : ""
          } ${t.notebook?.style === "ruled" ? Se.notebookRuled : ""}`,
          children: te,
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

const IT = "a647";
const kT = "fSWP";
const RT = "YN8E";
const AT = "fXSv";
const OT = "XznR";
const LT = "BXwP";
const PT = "paOU";
const xT = "tVR5";
const $T = "Jxw5";
const MT = "xv1M";
const DT = "G4NV";
const UT = "WCi1";
const FT = "HpdJ";
const BT = "NDdI";
const HT = "jLAf";
const VT = "DLBx";
const WT = "VcuI";
const jT = "RAhY";
const zT = "lTss";
const qT = "TYe7";
const GT = "fzdn";
const YT = "pTmm";
const KT = "I53E";
const XT = "ypeB";

const ve = {
  commentWrapper: IT,
  threadItem: kT,
  avatarWrapper: RT,
  threadLine: AT,
  commentBody: OT,
  showMoreBtn: LT,
  avatarPlaceholder: PT,
  comment: xT,
  small: $T,
  commentTime: MT,
  commentText: DT,
  commentActions: UT,
  commentContent: FT,
  avatarLink: BT,
  authorLink: HT,
  commentHeader: VT,
  moreButton: WT,
  commentHeaderLeft: jT,
  replyMention: zT,
  commentMedia: qT,
  reactionWrapper: GT,
  commentAction: YT,
  liked: KT,
  replyButton: XT,
};

const ZT = de(() => ae(() => import("./index-2_D1cGUk.js"), __vite__mapDeps([22, 12, 23])).then(
  e => ({
    default: e.VoiceMessage
  })
)
);

const QT = zo((
  {
    author: t,
    commentId: n,
    text: r,
    spans: o = [],
    attachments: s = [],
    createdAt: a,
    reactionsCount: c,
    isReacted: l,
    size: u = "sm",
    onLike: d,
    onReply: p,
    onReport: f,
    onEdit: h,
    onDelete: m,
    replyTo: g,
    hideAvatar: v = false,
    isWallOwner: _ = false,
  }
) => {
  const S = kd(a);
  const y = Qi(t.id);

  const C = ge(E => E.profile?.id);

  const b = t.id === C;
  const w = b || _;
  const T = u === "xs";

  const I = Re(() => {
    const E = [];

    if (b &&
      h) {
      E.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Ld, { size: 16 }),
        onClick: () => h(n),
      });
    }

    if (w &&
      m) {
      E.push({
        id: "delete",
        label: "Удалить",
        icon: i(Bd, { size: 16 }),
        danger: true,
        onClick: () => m(n),
      });
    }

    if (!b) {
      E.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(xd, { size: 16 }),
        danger: true,
        onClick: () => f(n),
      });
    }

    return E;
  }, [b, w, n, h, m, f]);

  const N = `/@${t.username ?? t.id}`;
  return i("div", {
    className: `${ve.comment} ${T ? ve.small : ""}`,
    children: [
      !v &&
        i("a", {
          href: N,
          className: ve.avatarLink,
          children: i(_t, { src: t.avatar, alt: t.displayName, size: u }),
        }),
      i("div", {
        className: ve.commentContent,
        children: [
          i("div", {
            className: ve.commentHeader,
            children: [
              i("div", {
                className: ve.commentHeaderLeft,
                children: [
                  i("a", {
                    href: N,
                    className: ve.authorLink,
                    children: i(Hr, {
                      userId: t.id,
                      name: t.displayName,
                      verified: t.isVerified,
                      hasNuksta: t.hasNuksta,
                      pin: t.pin,
                      size: u,
                      trailing: y
                        ? i("span", {
                            className: ve.commentTime,
                            "data-comment-time": true,
                            children: S,
                          })
                        : undefined,
                    }),
                  }),
                  !y &&
                    i("span", {
                      className: ve.commentTime,
                      "data-comment-time": true,
                      children: S,
                    }),
                ],
              }),
              i(ef, {
                trigger: i(Md, { size: T ? 14 : 16 }),
                items: I,
                position: "bottom-right",
                className: ve.moreButton,
              }),
            ],
          }),
          (g || r) &&
            i("div", {
              className: ve.commentText,
              children: [
                g &&
                  i(Ne, {
                    children: [
                      i("a", {
                        href: `/@${g.username}`,
                        className: ve.replyMention,
                        children: ["@", g.displayName],
                      }),
                      ", ",
                    ],
                  }),
                r && i(aa, { text: r, spans: o }),
              ],
            }),
          Mo(s).length > 0 &&
            i("div", {
              className: ve.commentMedia,
              children: i(ca, { media: Mo(s) }),
            }),
          s
            .filter(E => E.type === "audio")
            .map(E => i(
            $e,
            {
              fallback: null,
              children: i(ZT, { src: E.url, duration: E.duration }),
            },
            E.id
          )
            ),
          i("div", {
            className: ve.commentActions,
            children: [
              i("button", {
                className: ve.replyButton,
                onClick: p,
                children: "Ответить",
              }),
              i("div", {
                className: ve.reactionWrapper,
                children: i("button", {
                  className: `${ve.commentAction} ${l ? ve.liked : ""}`,
                  onClick: () => d(),
                  children: [
                    i(ji, { size: 14, filled: l }),
                    i(vr, { value: c }),
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

const hf = zo((
  {
    comment: t,
    onLike: n,
    onLikeReply: r,
    replyingTo: o,
    onStartReply: s,
    onCancelReply: a,
    onSubmitReply: c,
    onVoiceSend: l,
    onLoadReplies: u,
    onReport: d,
    onEdit: p,
    onDelete: f,
    isLoadingReplies: h = false,
    flashingCommentId: m,
    isWallOwner: g = false,
  }
) => {
  const v = o?.commentId === t.id;

  const _ = {
    id: t.author.id,
    username: t.author.username,
    avatar: t.author.avatar ?? "",
    displayName: t.author.displayName,
    isVerified: t.author.isVerified,
    pin: t.author.pin,
  };

  const S = t.previewReplies ?? [];
  const y = m === t.id;
  const C = t.stats.replies > S.length;

  const b = [
    { type: "parent", data: t, author: _ },
    ...S.map(w => ({
      type: "reply",
      data: w,

      author: {
        id: w.author.id,
        username: w.author.username,
        avatar: w.author.avatar ?? "",
        displayName: w.author.displayName,
        isVerified: w.author.isVerified,
        pin: w.author.pin,
      }
    })),
  ];

  return i("div", {
    className: `${ve.commentWrapper} ${y ? "flash-highlight" : ""}`,
    "data-comment-id": t.id,
    children: [
      b.map((w, T) => {
        const N = !(T === b.length - 1 && !v && !C);
        const E = m === w.data.id;
        return i(
          "div",
          {
            "data-comment-id": w.data.id,
            className: `${ve.threadItem} ${E ? "flash-highlight" : ""}`,
            children: [
              i("div", {
                className: ve.avatarWrapper,
                children: [
                  i("a", {
                    href: `/@${w.author.username ?? w.author.id}`,
                    className: ve.avatarLink,
                    children: i(_t, {
                      src: w.author.avatar,
                      alt: w.author.displayName,
                      size: "sm",
                    }),
                  }),
                  N && i("div", { className: ve.threadLine }),
                ],
              }),
              i("div", {
                className: ve.commentBody,
                children: i(QT, {
                  author: w.author,
                  commentId: w.data.id,
                  text: w.data.text,
                  spans: w.data.spans ?? [],
                  attachments: w.data.attachments ?? [],
                  replyTo: w.data.replyTo,
                  createdAt: w.data.createdAt,
                  reactionsCount: w.data.reactions.total,
                  isReacted: w.data.reactions.myReaction !== null,
                  size: "sm",
                  onLike: w.type === "parent" ? n : () => r(w.data.id),
                  onReply: () => w.type === "parent"
                    ? s(
                        t.id,
                        t.author.username ?? t.author.id,
                        t.author.displayName,
                        t.author.id
                      )
                    : s(
                        t.id,
                        w.data.author.username ?? w.data.author.id,
                        w.data.author.displayName,
                        w.data.author.id,
                        w.data.id
                      ),
                  onReport: d,
                  onEdit: p,
                  onDelete: f,
                  hideAvatar: true,
                  isWallOwner: g,
                }),
              }),
            ],
          },
          w.data.id
        );
      }),
      v &&
        i("div", {
          className: ve.threadItem,
          children: [
            i("div", {
              className: ve.avatarWrapper,
              children: [
                i("div", { className: ve.avatarPlaceholder }),
                C && i("div", { className: ve.threadLine }),
              ],
            }),
            i("div", {
              className: ve.commentBody,
              children: i(Jd, {
                placeholder: "Написать ответ...",
                replyTo: { id: o.commentId, authorName: o.displayName },
                onCancelReply: a,
                onSubmit: c,
                onVoiceSend: l,
                autoFocus: true,
              }),
            }),
          ],
        }),
      C &&
        !h &&
        i("button", {
          className: ve.showMoreBtn,
          onClick: () => u(t.id),
          children: ["Показать ещё ", t.stats.replies - S.length, " ответов"],
        }),
    ],
  });
});

function JT({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: r = o => o,
}) {
  const o = O(null);
  const [s, a] = L(0);
  const [c, l] = L(0);
  const u = O(new Map());
  const d = O(new Map());
  const p = O(0);

  if (p.current !== e) {
    (p.current = e);
    d.current.clear();
  }

  const f = R(
      (b) => {
        const w = r(b);
        return u.current.get(w) ?? t;
      },
      [r, t]
    );

  const h = R(
    (b) => {
      if (b === 0) {
        return 0;
      }
      const w = d.current.get(b);
      if (w !== undefined) {
        return w;
      }
      let T = 0;
      let I = 0;
      for (let N = b - 1; N >= 0; N--) {
        const E = d.current.get(N);
        if (E !== undefined) {
          (T = N);
          (I = E);
          break;
        }
      }
      for (let N = T; N < b; N++) {
        I += f(N);
      }
      d.current.set(b, I);
      return I;
    },
    [f]
  );

  const m = Re(() => e === 0 ? 0 : h(e - 1) + f(e - 1), [e, h, f]);

  const { startIndex: g, endIndex: v } = Re(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let b = 0;
    let w = e - 1;

    while (b < w) {
      const E = Math.floor((b + w) / 2);
      const A = h(E);
      const k = f(E);

      if (A + k < s) {
        (b = E + 1);
      } else {
        (w = E);
      }
    }

    const T = Math.max(0, b - n);
    let I = b;
    let N = h(b) - s;

    while (I < e && N < c + t * n) {
      (N += f(I));
      I++;
    }

    (I = Math.min(e - 1, I + n));
    return { startIndex: T, endIndex: I };
  }, [e, s, c, h, f, n, t]);

  const _ = Re(() => {
    if (e === 0) {
      return [];
    }
    const b = [];
    for (let w = g; w <= v; w++) {
      b.push({ index: w, key: r(w), start: h(w), size: f(w) });
    }
    return b;
  }, [g, v, r, h, f, e]);

  const S = R(
    (b, w) => {
      if (!b) {
        return;
      }
      const T = r(w);
      const I = b.getBoundingClientRect().height;
      if (I <= 0) {
        return;
      }
      const N = u.current.get(T);

      if ((N === undefined || Math.abs(N - I) > 2)) {
        u.current.set(T, I);
        d.current.clear();
      }
    },
    [r]
  );

  const y = R(() => {
    if (o.current) {
      a(o.current.scrollTop);
    }
  }, []);

  const C = R(
    (b) => {
      if (o.current) {
        o.current.removeEventListener("scroll", y);
      }

      (o.current = b);

      if (b) {
        l(b.clientHeight);
        a(b.scrollTop);
        b.addEventListener("scroll", y, { passive: true });
      }
    },
    [y]
  );

  D(() => {
    if (!o.current) {
      return;
    }
    const b = new ResizeObserver((w) => {
      for (const T of w) {
        l(T.contentRect.height);
      }
    });
    b.observe(o.current);

    return () => b.disconnect();
  }, []);

  D(
    () => () => {
      if (o.current) {
        o.current.removeEventListener("scroll", y);
      }
    },
    [y]
  );

  return { containerRef: C, virtualItems: _, totalSize: m, measureElement: S };
}
const eI = "h0UP";
const tI = "riTD";
const nI = "RVQz";
const rI = "OIvV";
const oI = "ErjD";
const sI = "mj07";
const iI = "uxPv";
const aI = "n7OW";
const cI = "yhL6";
const lI = "z2XF";
const uI = "GmXA";

const dt = {
  comments: eI,
  sortWrapper: tI,
  sortSelect: nI,
  commentsList: rI,
  commentItem: oI,
  empty: sI,
  loadMoreSentinel: iI,
  virtualContainer: aI,
  virtualContent: cI,
  virtualItem: lI,
  inputWrapper: uI,
};

const dI = 120;
function fI({
  comments: e,
  hasMore: t,
  isLoadingMore: n,
  onLoadMore: r,
  replyingTo: o,
  flashingCommentId: s,
  loadingRepliesId: a,
  isWallOwner: c,
  onLikeComment: l,
  onLikeReply: u,
  onStartReply: d,
  onCancelReply: p,
  onSubmitReply: f,
  onVoiceSend: h,
  onLoadReplies: m,
  onReport: g,
  onEdit: v,
  onDelete: _,
}) {
  const S = O(false);

  const {
    containerRef: y,
    virtualItems: C,
    totalSize: b,
    measureElement: w,
  } = JT({
    itemCount: e.length,
    estimatedItemHeight: dI,
    overscan: 3,
    getItemKey: I => e[I]?.id ?? I,
  });

  D(() => {
    if (!t || n || C.length === 0) {
      S.current = false;
      return;
    }
    const I = C[C.length - 1]?.index ?? 0;
    const N = e.length - 5;

    if (I >= N && !S.current) {
      (S.current = true);
      r();
    }
  }, [C, e.length, t, n, r]);

  D(() => {
    if (!n) {
      (S.current = false);
    }
  }, [n]);

  const T = R(
    (I, N) => {
      w(I, N);
    },
    [w]
  );
  return i("div", {
    ref: y,
    className: dt.virtualContainer,
    "data-comments-scroll": true,
    children: [
      i("div", {
        className: dt.virtualContent,
        style: { height: `${b}px` },
        children: C.map((I) => {
          const N = e[I.index];
          return N
            ? i(
                "div",
                {
                  ref: E => T(E, I.index),
                  className: dt.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${I.start}px)`,
                  },
                  children: i(hf, {
                    comment: N,
                    onLike: () => l(N.id),
                    onLikeReply: u,
                    replyingTo: o?.commentId === N.id ? o : null,
                    onStartReply: d,
                    onCancelReply: p,
                    onSubmitReply: f,
                    onVoiceSend: h,
                    onLoadReplies: m,
                    onReport: g,
                    onEdit: v,
                    onDelete: _,
                    isLoadingReplies: a === N.id,
                    flashingCommentId: s,
                    isWallOwner: c,
                  }),
                },
                I.key
              )
            : null;
        }),
      }),
      n && i(ia, { variant: "medium" }),
    ],
  });
}
const pI = "m6pd";
const hI = "NcP4";
const mI = "gpLY";
const Ls = { wrapper: pI, popup: hI, closing: mI };

const gI = de(() => ae(() => import("./index-BA2skYPV.js"), __vite__mapDeps([24, 25])).then(
  e => ({
    default: e.EmojiPicker
  })
)
);

const Sl = 280;
const Cl = 380;
const Ps = 8;
const _I = 100;
const Nl = 150;
const vI = 150;
function ua({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [r, o] = L(false);
  const [s, a] = L(false);
  const [c, l] = L(null);
  const u = O(null);
  const d = O(null);
  const p = O(null);
  const f = O(null);
  const h = O(null);
  const m = O(null);

  const g = R(() => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }
    const I = u_current.getBoundingClientRect();

    const {
      innerHeight,
      innerWidth
    } = window;

    const A = innerHeight - I.bottom;
    const k = innerWidth - I.left;
    const I_right = I.right;
    const G = A >= Cl + Ps ? "bottom" : "top";
    const F = k >= Sl || k > I_right ? "left" : "right";
    let V;
    let ce;

    if (G === "top") {
      (V = I.top - Cl - Ps);
    } else {
      (V = I.bottom + Ps);
    }

    if (F === "left") {
      (ce = I.left);
    } else {
      (ce = I.right - Sl);
    }

    l({
      top: V,
      left: ce,
      transformOrigin: `${G === "top" ? "bottom" : "top"} ${
        F === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const v = R(() => {
    if (!r && !s) {
      g();
      o(true);
    }
  }, [r, s, g]);

  const _ = R(() => {
    if (r && !s) {
      a(true);

      (m.current = window.setTimeout(() => {
        o(false);
        a(false);
      }, vI));
    }
  }, [r, s]);

  const S = () => {
    if (h.current) {
      clearTimeout(h.current);
      (h.current = null);
    }

    if (m.current) {
      clearTimeout(m.current);
      (m.current = null);
    }

    if (s) {
      a(false);
    }

    if (!r) {
      (f.current = window.setTimeout(() => {
          v();
        }, _I));
    }
  };

  const y = () => {
    if (f.current) {
      clearTimeout(f.current);
      (f.current = null);
    }

    (h.current = window.setTimeout(() => {
        _();
      }, Nl));
  };

  D(
    () => () => {
      if (f.current) {
        clearTimeout(f.current);
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

  const C = () => {
    if (h.current) {
      clearTimeout(h.current);
      (h.current = null);
    }

    if (m.current) {
      clearTimeout(m.current);
      (m.current = null);
    }

    if (s) {
      a(false);
    }
  };

  const b = () => {
    h.current = window.setTimeout(() => {
      _();
    }, Nl);
  };

  const w = (T) => {
    T.preventDefault();
  };

  return i("div", {
    ref: d,
    className: Ls.wrapper,
    onMouseEnter: S,
    onMouseLeave: y,
    onMouseDown: w,
    children: [
      i("button", {
        ref: u,
        className: t,
        title: "Добавить эмоджи",
        children: i(My, { size: n }),
      }),
      r &&
        c &&
        $(
          i("div", {
            ref: p,
            className: `${Ls.popup} ${s ? Ls.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: C,
            onMouseLeave: b,
            onMouseDown: w,
            children: i($e, {
              fallback: null,
              children: i(gI, { onEmojiSelect: e }),
            }),
          }),
          document.body
        ),
    ],
  });
}
const yI = "qqMx";
const wI = "mMN8";
const EI = "vdiV";
const bI = "oFAK";
const SI = "rZzH";
const CI = "WNYE";
const NI = "QgHq";
const TI = "E5sl";
const II = "tAcz";
const kI = "iKd4";
const RI = "oyyX";
const AI = "jiCA";

const rt = {
  editCommentModal: yI,
  form: wI,
  header: EI,
  title: bI,
  content: SI,
  editor: CI,
  actions: NI,
  mediaButtons: TI,
  mediaButton: II,
  submitGroup: kI,
  charCount: RI,
  error: AI,
};

const Tl = 2000/* 2e3 */;
function OI({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = sn();

  const o = Jt(b => b.editComment);

  const s = ge(b => b.profile);

  const a = Wt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: d,
    insertText: p,
  } = Yo(t, n);

  const [f, h] = L(false);
  const m = Tl - c.length;
  const g = m < 0;
  const v = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const S = v || _;

  const y = R(
    (b) => {
      p(b.emoji);
    },
    [p]
  );

  const C = R(async () => {
    if (!(!c.trim() || g || !S || f)) {
      h(true);
      try {
        await o(e, c, l);
        r();
      } catch (b) {
        console.error("Failed to update comment:", b);
      } finally {
        h(false);
      }
    }
  }, [c, l, g, S, f, o, e, r]);

  return i(on, {
    frameless: true,
    onClose: r,
    className: rt.editCommentModal,
    children: i("div", {
      className: rt.form,
      children: [
        i("div", {
          className: rt.header,
          children: i("span", {
            className: rt.title,
            children: "Редактирование комментария",
          }),
        }),
        i("div", {
          className: rt.content,
          children: [
            i(_t, { src: s?.avatar ?? "", size: "sm" }),
            i(Qo, {
              ref: u,
              value: c,
              spans: l,
              onChange: d,
              placeholder: "Комментарий...",
              maxLength: Tl,
              autoFocus: true,
              className: rt.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        i("div", {
          className: rt.actions,
          children: [
            i("div", {
              className: rt.mediaButtons,
              children:
                !a &&
                i(ua, { onEmojiSelect: y, buttonClassName: rt.mediaButton }),
            }),
            i("div", {
              className: rt.submitGroup,
              children: [
                g &&
                  i("span", {
                    className: `${rt.charCount} ${rt.error}`,
                    children: m,
                  }),
                i(De, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => r(),
                  children: "Отмена",
                }),
                i(De, {
                  size: "md",
                  disabled: !c.trim() || g || !S || f,
                  onClick: C,
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
const LI = de(() => ae(() => import("./index-B0fEdRE7.js"), __vite__mapDeps([17, 18, 19])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function PI({
  comments: e,
  isLoading: t,
  isLoadingMore: n,
  hasMore: r,
  sort: o,
  onSortChange: s,
  onLikeComment: a,
  onAddComment: c,
  onVoiceSend: l,
  onLoadMore: u,
  isWallOwner: d = false,
  variant: p = "modal",
  hideInput: f = false,
}) {
  const m = Wt() && p === "modal";
  const [g, v] = L(null);
  const [_, S] = L(null);
  const [y, C] = L(null);
  const [b, w] = L(null);
  const T = O(null);
  const { openModal: I } = sn();

  const N = Jt(q => q.highlightedCommentId);

  const E = Jt(q => q.clearHighlightedComment);

  const A = Jt(q => q.loadReplies);

  const k = Jt(q => q.deleteComment);

  const P = Jt(q => q.toggleCommentLike);

  iy({
    sentinelRef: T,
    hasMore: r,
    isLoading: n,
    onLoadMore: u,
    rootMargin: "200px",
  });

  D(
    () => () => {
      E();
    },
    [E]
  );

  D(() => {
    if (!N) {
      return;
    }
    let q = false;
    const Q = [];

    const _e = ($) => {
      if (q) {
        return;
      }
      const H = document.querySelector(`[data-comment-id="${N}"]`);
      if (!H) {
        if ($ > 0) {
          Q.push(window.setTimeout(() => _e($ - 1), 150));
        } else {
          E();
        }

        return;
      }
      H.scrollIntoView({ behavior: "smooth", block: "center" });
      S(N);
      E();

      Q.push(window.setTimeout(() => S(null), 900));
    };

    _e(40);

    return () => {
      (q = true);

      Q.forEach($ => clearTimeout($));
    };
  }, [N, E]);

  const G = async (q, Q, _e) => {
    if (g) {
      await c({
          text: q,
          spans: Q,
          parentId: g.commentId,
          replyToUserId: g.userId,
          replyToInfo: {
            id: g.userId,
            username: g.username,
            displayName: g.displayName,
          },
          attachments: _e,
        });

      v(null);
    }
  };

  const F = (q, Q, _e, $, H) => {
    v({ commentId: q, username: Q, displayName: _e, userId: $, replyId: H });
  };

  const V = () => {
    v(null);
  };

  const ce = R(
    (q) => {
      P(q);
    },
    [P]
  );

  const se = R(
    async (q) => {
      C(q);
      try {
        await A(q);
      } finally {
        C(null);
      }
    },
    [A]
  );

  const W = R((q) => {
    w(q);
  }, []);

  const ne = R(
    (q) => {
      let Q = "";
      let _e = [];
      for (const $ of e) {
        if ($.id === q) {
          (Q = $.text);
          (_e = $.spans ?? []);
          break;
        }
        const H = $.previewReplies?.find(Z => Z.id === q);
        if (H) {
          (Q = H.text);
          (_e = H.spans ?? []);
          break;
        }
      }
      I(i(OI, { commentId: q, initialText: Q, initialSpans: _e }));
    },
    [e, I]
  );

  const ue = R(
    (q) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        k(q);
      }
    },
    [k]
  );

  return i("div", {
    className: dt.comments,
    children: [
      i("div", {
        className: dt.sortWrapper,
        children: i("select", {
          value: o,
          onChange: q => s(q.target.value),
          className: dt.sortSelect,
          children: [
            i("option", { value: "new", children: "Новые" }),
            i("option", { value: "old", children: "Старые" }),
            i("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? i(O1, { count: 5 })
        : e.length === 0
        ? i("div", { className: dt.empty, children: "Нет комментариев" })
        : m
        ? i(fI, {
            comments: e,
            hasMore: r,
            isLoadingMore: n,
            onLoadMore: u,
            replyingTo: g,
            flashingCommentId: _,
            loadingRepliesId: y,
            isWallOwner: d,
            onLikeComment: a,
            onLikeReply: ce,
            onStartReply: F,
            onCancelReply: V,
            onSubmitReply: G,
            onVoiceSend: l,
            onLoadReplies: se,
            onReport: W,
            onEdit: ne,
            onDelete: ue,
          })
        : i("div", {
            className: dt.commentsList,
            children: [
              e.map(q => i(
                "div",
                {
                  className: dt.commentItem,
                  children: i(hf, {
                    comment: q,
                    onLike: () => a(q.id),
                    onLikeReply: ce,
                    replyingTo: g?.commentId === q.id ? g : null,
                    onStartReply: F,
                    onCancelReply: V,
                    onSubmitReply: G,
                    onVoiceSend: l,
                    onLoadReplies: se,
                    onReport: W,
                    onEdit: ne,
                    onDelete: ue,
                    isLoadingReplies: y === q.id,
                    flashingCommentId: _,
                    isWallOwner: d,
                  }),
                },
                q.id
              )
              ),
              r &&
                i("div", {
                  ref: T,
                  className: dt.loadMoreSentinel,
                  children: n && i(ia, { variant: "medium" }),
                }),
            ],
          }),
      !f &&
        i("div", {
          className: dt.inputWrapper,
          children: i(Jd, {
            onSubmit: (q, Q, _e) => c({ text: q, spans: Q, attachments: _e }),
            onVoiceSend: l,
          }),
        }),
      b &&
        i($e, {
          fallback: null,
          children: i(LI, {
            targetType: "comment",
            targetId: b,
            onClose: () => w(null),
          }),
        }),
    ],
  });
}
const xI = "X1fc";
const $I = "SZmq";
const MI = "mlov";
const DI = "fHID";
const lo = { commentsModal: xI, header: $I, title: MI, content: DI };
function UI({ postId: e, onClose: t }) {
  const n = O(null);

  const {
    comments: r,
    commentsLoading: o,
    commentsLoadingMore: s,
    commentsHasMore: a,
    clearComments: c,
    fetchComments: l,
    loadMoreComments: u,
    toggleCommentLike: d,
    addComment: p,
  } = Jt(
    ul(y => ({
      comments: y.comments,
      commentsLoading: y.commentsLoading,
      commentsLoadingMore: y.commentsLoadingMore,
      commentsHasMore: y.commentsHasMore,
      clearComments: y.clearComments,
      fetchComments: y.fetchComments,
      loadMoreComments: y.loadMoreComments,
      toggleCommentLike: y.toggleCommentLike,
      addComment: y.addComment
    }))
  );

  const { commentsSort: f, setCommentsSort: h } = wo(
    ul(y => ({
      commentsSort: y.commentsSort,
      setCommentsSort: y.setCommentsSort
    }))
  );

  if (n.current !== e) {
    (n.current = e);
    c();
  }

  D(() => {
    l(e);
  }, [e, l]);

  const m = R(
      (y) => {
        h(y);
        l(e);
      },
      [h, l, e]
    );

  const g = R(() => {
    if (a && !s) {
      u(e);
    }
  }, [a, s, u, e]);

  const v = R(
    (y) => {
      d(y);
    },
    [d]
  );

  const _ = R(
    async (y) => {
      await p(e, y);
    },
    [p, e]
  );

  const S = R(
    async (y) => {
      const C = `voice_${Date.now()}.webm`;
      const b = new File([y], C, { type: y.type || "audio/webm" });
      const w = await Un.uploadMedia(b);
      await p(e, { text: "", attachments: [{ mediaId: w.id }] });
    },
    [p, e]
  );

  return i(on, {
    frameless: true,
    onClose: t,
    className: lo.commentsModal,
    children: [
      i("div", {
        className: lo.header,
        children: i("span", { className: lo.title, children: "Комментарии" }),
      }),
      i("div", {
        className: lo.content,
        "data-comments-modal": true,
        children: i(PI, {
          comments: r,
          isLoading: o,
          isLoadingMore: s,
          hasMore: a,
          sort: f,
          onSortChange: m,
          onLikeComment: v,
          onAddComment: _,
          onVoiceSend: S,
          onLoadMore: g,
        }),
      }),
    ],
  });
}

const FI = {
    inventory: async () => (await x.get(M.postNotebooks.inventory, { skipErrorToast: true })).data,
  };

const BI = de(() => ae(() => import("./index-XGMH48nR.js"), __vite__mapDeps([26, 27])).then(
  e => ({
    default: e.DrawingCanvas
  })
)
);

function mf({
  onSubmit: e,
  autoFocus: t = false,
  placeholder: n = "Что нового?",
}) {
  const {
      text: r,
      spans: o,
      editorRef: s,
      handleChange: a,
      insertText: c,
      reset: l,
    } = Yo();

  const [u, d] = L(false);
  const [p, f] = L(false);
  const [h, m] = L(false);
  const [g, v] = L(null);
  const [_, S] = L(null);
  const [y, C] = L(false);
  const [b, w] = L("");
  const T = O(null);
  const I = O(0);
  const N = Wt();
  const A = Ji()?.subscription?.isActive ?? false;
  D(() => {
    let te = true;
    let ee = false;
    const Ee = async () => {
      if (!ee) {
        ee = true;
        try {
          const jr = await FI.inventory();

          if (te) {
            v(jr);
          }
        } catch {
        } finally {
          ee = false;
        }
      }
    };
    Ee();
    const nr = y
      ? window.setInterval(() => {
          Ee();
        }, 1500)
      : undefined;
    return () => {
      (te = false);

      if (nr !== undefined) {
        window.clearInterval(nr);
      }
    };
  }, [y]);

  const {
      images: k,
      uploadingImages: P,
      isUploading: G,
      hasVideo: F,
      openFilePicker: V,
      removeImage: ce,
      addImage: se,
      uploadFiles: W,
      clearAll: ne,
      fileInputRef: ue,
      handleFileChange: q,
    } = Zd(10, A);

  const {
    isPollOpen: Q,
    poll: _e,
    togglePoll: $,
    handlePollQuestionChange: H,
    handlePollOptionChange: Z,
    handleAddPollOption: fe,
    handleRemovePollOption: X,
    handleMultipleChoiceToggle: J,
    handleClosePoll: he,
    isPollValid: Pe,
    getPollData: U,
    resetPoll: Y,
  } = L1();

  const we = Dt.MAX_CHARS - r.length;
  const be = we < 0;
  const Ae = Q && Pe();
  const Ze = k.length > 0 || P.length > 0;
  const ze = r.trim().length > 0 || Ae || Ze;
  const Ye = A ? `${ui},${d0}` : ui;

  const Qe = R(async () => {
    if (!(!ze || be || G || p)) {
      f(true);
      w("");
      try {
        const te = k.map(Ee => ({
          mediaId: Ee.mediaId,
          url: Ee.url
        }));

        const ee =
          _ && g
            ? {
                eventId: g.eventId,
                style: _,
                operationId: T.current ?? (T.current = crypto.randomUUID()),
              }
            : undefined;

        await e?.(r, o, te, U(), ee);
        l();
        ne();
        Y();

        if (_ &&
          g) {
          v(
            Ee => Ee && {
              ...Ee,
              balance: {
                ...Ee.balance,
                [_]: Math.max(0, Ee.balance[_] - 1),
              },
            }
          );
        }

        S(null);
        C(false);
        (T.current = null);
      } catch (te) {
        w(
          xe(te)
            ? {
                NO_POST_NOTEBOOKS:
                  "Такой тетрадки уже нет в рюкзаке. Выберите другое оформление или купите новое.",
                POST_NOTEBOOK_EVENT_ENDED:
                  "Ивент уже завершён. Пост сохранён в черновике и не был опубликован.",
                POST_NOTEBOOK_PAUSED:
                  "Оформление постов временно недоступно. Пост сохранён в черновике.",
                OPERATION_CONFLICT:
                  "Не удалось безопасно повторить публикацию. Обновите страницу и попробуйте снова.",
              }[te.code] ??
                te.message ??
                "Не удалось опубликовать пост. Попробуйте ещё раз."
            : "Не удалось опубликовать пост. Попробуйте ещё раз."
        );
      } finally {
        f(false);
      }
    }
  }, [ze, be, G, p, r, o, k, U, e, l, ne, Y, _, g]);

  const an = R(
    (te) => {
      if (g?.applicationsEnabled && g.balance[te] >= 1) {
        S(ee => ee === te ? null : te);
        w("");
        (T.current = null);
      }
    },
    [g]
  );

  const vt = R((te) => {
    const ee = window.location.pathname;
    je(
      `/event/alice-ai?product=post_notebook&variant=${te}&returnTo=${encodeURIComponent(
        ee
      )}`
    );
  }, []);

  const er = R(
    (te) => {
      se(te);
    },
    [se]
  );

  const Jo = R(
    (te) => {
      c(te.emoji);
    },
    [c]
  );

  const Vr = R((te) => {
    te.preventDefault();
    te.stopPropagation();
    I.current++;

    if (te.dataTransfer?.types.includes("Files")) {
      m(true);
    }
  }, []);

  const Je = R((te) => {
    te.preventDefault();
    te.stopPropagation();
  }, []);

  const tr = R((te) => {
    te.preventDefault();
    te.stopPropagation();
    I.current--;

    if (I.current === 0) {
      m(false);
    }
  }, []);

  const Wr = R(
    (te) => {
      te.preventDefault();
      te.stopPropagation();
      (I.current = 0);
      m(false);
      const ee = te.dataTransfer?.files;

      if (ee && ee.length > 0) {
        W(Array.from(ee));
      }
    },
    [W]
  );

  return i("div", {
    className: `${z.form} ${h ? z.dragActive : ""} ${
      _ === "grid" ? z.notebookGrid : ""
    } ${_ === "ruled" ? z.notebookRuled : ""}`,
    onDragEnter: Vr,
    onDragOver: Je,
    onDragLeave: tr,
    onDrop: Wr,
    children: [
      h &&
        i("div", {
          className: z.dragOverlay,
          children: [
            i($d, { size: 32 }),
            i("span", {
              children: A ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      _ &&
        i("div", {
          className: z.notebookLabel,
          children: ["Тетрадка ", _ === "grid" ? "в клетку" : "в линейку"],
        }),
      i("div", {
        className: z.whatsNew,
        children: i(Qo, {
          ref: s,
          value: r,
          spans: o,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: z.editor,
          minHeight: 40,
          maxHeight: Dt.MAX_TEXTAREA_HEIGHT,
          onImagePaste: W,
        }),
      }),
      i(Qd, { images: k, uploadingImages: P, onRemove: ce }),
      i("input", {
        ref: ue,
        type: "file",
        accept: Ye,
        multiple: !F,
        onChange: q,
        style: { display: "none" },
      }),
      Q &&
        i(Rb, {
          poll: _e,
          onQuestionChange: H,
          onOptionChange: Z,
          onAddOption: fe,
          onRemoveOption: X,
          onMultipleChoiceToggle: J,
          onClose: he,
        }),
      y &&
        g &&
        i("div", {
          className: z.notebookPicker,
          role: "dialog",
          "aria-label": "Оформление поста",
          children: [
            i("div", {
              className: z.notebookPickerHeader,
              children: [
                i("strong", { children: "Оформление поста" }),
                i("button", {
                  type: "button",
                  onClick: () => C(false),
                  "aria-label": "Закрыть",
                  children: "×",
                }),
              ],
            }),
            i("p", {
              children:
                "Одно оформление расходуется после успешной публикации.",
            }),
            i("div", {
              className: z.notebookOptions,
              children: ["grid", "ruled"].map((te) => {
                const ee = g.balance[te];
                const Ee = te === "grid" ? "В клетку" : "В линейку";
                return i(
                  "div",
                  {
                    className: z.notebookOptionRow,
                    children: [
                      i("button", {
                        type: "button",
                        className: `${z.notebookOption} ${
                          _ === te ? z.notebookOptionActive : ""
                        }`,
                        disabled: !g.applicationsEnabled || ee < 1,
                        onClick: () => an(te),
                        children: [
                          i("span", {
                            className:
                              te === "grid" ? z.gridSwatch : z.ruledSwatch,
                            "aria-hidden": "true",
                          }),
                          i("span", {
                            children: [
                              i("strong", { children: Ee }),
                              i("small", { children: ["В рюкзаке: ", ee] }),
                            ],
                          }),
                        ],
                      }),
                      ee < 1 &&
                        i("button", {
                          type: "button",
                          className: z.notebookBuy,
                          onClick: () => vt(te),
                          children: "Купить",
                        }),
                    ],
                  },
                  te
                );
              }),
            }),
            !g.applicationsEnabled &&
              i("p", {
                className: z.notebookUnavailable,
                children: "Оформление постов временно недоступно.",
              }),
          ],
        }),
      b && i("p", { className: z.submitError, role: "alert", children: b }),
      i("div", {
        className: z.actions,
        children: [
          i("div", {
            className: z.mediaButtons,
            children: [
              i("button", {
                className: z.mediaButton,
                onClick: V,
                title: A ? "Добавить медиа" : "Добавить изображение",
                children: i(Ad, {}),
              }),
              !N &&
                i(ua, { onEmojiSelect: Jo, buttonClassName: z.mediaButton }),
              i("button", {
                className: z.mediaButton,
                onClick: () => d(true),
                title: "Нарисовать",
                disabled: F,
                children: i(xy, { size: 20 }),
              }),
              i("button", {
                className: `${z.mediaButton} ${Q ? z.active : ""}`,
                onClick: $,
                title: "Добавить опрос",
                children: i($y, {}),
              }),
              g &&
                i("button", {
                  type: "button",
                  className: `${z.mediaButton} ${_ ? z.active : ""}`,
                  onClick: () => C(te => !te),
                  title: "Оформление поста",
                  "aria-label": "Оформление поста",
                  "aria-expanded": y,
                  children: i("span", {
                    className: z.notebookIcon,
                    "aria-hidden": "true",
                    children: "📓",
                  }),
                }),
            ],
          }),
          i("div", {
            className: z.submitGroup,
            children: [
              be &&
                i("span", {
                  className: `${z.charCount} ${z.error}`,
                  children: we,
                }),
              i(De, {
                size: "lg",
                disabled: !ze || be || G || p,
                loading: p,
                onClick: Qe,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      u &&
        i($e, {
          fallback: null,
          children: i(BI, {
            isOpen: u,
            onClose: () => d(false),
            onSave: er,
            mode: "post",
          }),
        }),
    ],
  });
}
const HI = "wmJ8";
const VI = "dBop";
const Il = { createPostModal: HI, title: VI };
function WI({ wallOwnerId: e, placeholder: t, onPostCreated: n }) {
  const { closeModal: r } = sn();

  const o = ge(c => c.profile);

  const s = le(c => c.createPost);

  const a = async (c, l, u, d, p) => {
    if (!o) {
      return;
    }
    const f = e ?? o.id;

    await s({
      wallOwnerId: f,
      text: c,
      spans: l,
      attachments: u,
      poll: d,
      notebook: p,
    });

    await n?.();
    r();
  };

  return i(on, {
    frameless: true,
    onClose: r,
    className: Il.createPostModal,
    children: [
      i("h2", { className: Il.title, children: "Создать пост" }),
      i(mf, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}
const jI = "hzEN";
const zI = "n2Xb";
const qI = "gRi4";
const GI = "e3P7";
const YI = "Dh7K";
const KI = "oAlx";
const XI = "KBlq";
const ZI = "C3Hl";
const QI = "CeSW";
const JI = "E6KL";

const Et = {
  editPostModal: jI,
  form: zI,
  whatsNew: qI,
  editor: GI,
  actions: YI,
  mediaButtons: KI,
  mediaButton: XI,
  submitGroup: ZI,
  charCount: QI,
  error: JI,
};

const kl = 5000/* 5e3 */;
function ek({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: r } = sn();

  const o = le(b => b.editPost);

  const s = ge(b => b.profile);

  const a = Wt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: d,
    insertText: p,
  } = Yo(t, n);

  const [f, h] = L(false);
  const m = kl - c.length;
  const g = m < 0;
  const v = c !== t;
  const _ = JSON.stringify(l) !== JSON.stringify(n);
  const S = v || _;

  const y = R(
    (b) => {
      p(b.emoji);
    },
    [p]
  );

  const C = R(async () => {
    if (!(!c.trim() || g || !S || f)) {
      h(true);
      try {
        await o(e, c, l);
        r();
      } catch (b) {
        console.error("Failed to update post:", b);
      } finally {
        h(false);
      }
    }
  }, [c, l, g, S, f, o, e, r]);

  return i(on, {
    frameless: true,
    onClose: r,
    className: Et.editPostModal,
    children: i("div", {
      className: Et.form,
      children: [
        i("div", {
          className: Et.whatsNew,
          children: [
            i(_t, { src: s?.avatar ?? "", size: "md" }),
            i(Qo, {
              ref: u,
              value: c,
              spans: l,
              onChange: d,
              placeholder: "Что нового?",
              maxLength: kl,
              autoFocus: true,
              className: Et.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        i("div", {
          className: Et.actions,
          children: [
            i("div", {
              className: Et.mediaButtons,
              children:
                !a &&
                i(ua, { onEmojiSelect: y, buttonClassName: Et.mediaButton }),
            }),
            i("div", {
              className: Et.submitGroup,
              children: [
                g &&
                  i("span", {
                    className: `${Et.charCount} ${Et.error}`,
                    children: m,
                  }),
                i(De, {
                  size: "lg",
                  disabled: !c.trim() || g || !S,
                  loading: f,
                  onClick: C,
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
const tk = "SxCC";
const nk = "gZWY";
const rk = "lKwV";
const ok = "A3xv";
const sk = "YC1h";
const ik = "qFgH";
const ak = "TEli";
const ck = "qx0M";
const lk = "Gt6J";

const Pt = {
  repostModal: tk,
  content: nk,
  title: rk,
  inputSection: ok,
  textarea: sk,
  originalPost: ik,
  postHeader: ak,
  postText: ck,
  actions: lk,
};

function uk({ post: e, onClose: t, onSuccess: n }) {
  const [r, o] = L("");
  const [s, a] = L(false);

  const c = ge(p => p.profile);

  const l = le(p => p.updatePostReposted);

  const u = le(p => p.prependPost);

  const d = async () => {
    a(true);
    try {
      const p = await He.createRepost(e.id, r.trim() || undefined);
      l(e.id, true, e.reposted ? 0 : 1);
      u(p);

      if (c?.username) {
        He.invalidateWallCache(c.username);
      }

      n?.();
      t();
    } catch (p) {
      console.error("Failed to create repost:", p);
    } finally {
      a(false);
    }
  };

  return i(on, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: Pt.repostModal,
    children: i("div", {
      className: Pt.content,
      children: [
        i("h2", { className: Pt.title, children: "Репост" }),
        i("div", {
          className: Pt.inputSection,
          children: [
            c && i(_t, { src: c.avatar, alt: c.displayName, size: "sm" }),
            i("textarea", {
              className: Pt.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: r,
              onInput: p => o(p.target.value),
              rows: 3,
            }),
          ],
        }),
        i("div", {
          className: Pt.originalPost,
          children: [
            i("div", {
              className: Pt.postHeader,
              children: [
                i(_t, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                i(Hr, {
                  userId: e.author.id,
                  name: e.author.displayName,
                  verified: e.author.isVerified,
                  hasNuksta: e.author.hasNuksta,
                  pin: e.author.pin,
                  size: "xs",
                }),
              ],
            }),
            i("div", {
              className: Pt.postText,
              children:
                e.corrector || e.redPen
                  ? i(la, {
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
          className: Pt.actions,
          children: [
            i(De, {
              variant: "secondary",
              onClick: (p) => {
                p.stopPropagation();
                t();
              },
              disabled: s,
              children: "Отмена",
            }),
            i(De, {
              variant: "primary",
              onClick: (p) => {
                p.stopPropagation();
                d();
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

const dk = ({ showCreateButton: e = true }) => {
  const t = sa();
  const n = Ji();
  const r = Ko();
  const { initialize: o, disconnectSSE: s } = kn();
  const a = Td();

  const c = Go(F => F.fetchPortal);

  const l = Id(a);
  const u = !l && a.active && !!a.url;
  const d = l ? pe.ALICE_EVENT : u ? a.url : pe.EVENT;

  D(
    () => {
      if (r) {
        o();
      }

      return () => {
        s();
      };
    },
    [r, o, s]
  );

  D(() => {
    c();
  }, [c]);

  const p = n?.username ? `/@${n.username}` : "/profile";

  const f = Re(
    () => [
      { id: "feed", label: "Лента", icon: Pd, href: "/" },
      { id: "shop", label: "Магаз", icon: Fd, href: "/shop" },
      ...((a.active && a.url) || t.status === "allowed"
        ? [
            {
              id: "event",
              label: "Ивент",
              icon: null,
              href: d,
              match: pe.EVENT,
            },
          ]
        : []),
      {
        id: "notifications",
        label: "Уведы",
        icon: Dd,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: li, href: p },
    ],
    [p, d, a.active, a.url, t.status]
  );

  const [h, m] = L({});
  const [g, v] = L(true);
  const _ = O([]);
  const S = O(null);
  const [y] = qo();
  const { openModal: C } = sn();

  const b = le(F => F.fetchFeed);

  const w = le(F => F.isRefreshing);

  const T = Vd();
  const I = Kd();

  const N = R(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      b(true);
    }
  }, [b]);

  const E = Re(() => {
    const F = y.url || "/";
    return Yi.some(V => F.startsWith(V));
  }, [y.url]);

  const A = Re(() => {
    const F = y.url || "/";
    return n?.username
      ? F === `/@${n.username}` || F.startsWith(`/@${n.username}/`)
      : false;
  }, [y.url, n?.username]);

  const k = O(null);

  const P = R((F, V = false) => {
    if (!V && k.current === F) {
      return;
    }
    k.current = F;
    const ce = _.current[F];
    const S_current = S.current;
    if (ce && S_current) {
      const W = parseFloat(getComputedStyle(S_current).paddingLeft) || 0;

      m({
        width: ce.offsetWidth,
        transform: `translateX(${ce.offsetLeft - W}px)`,
      });

      v(true);
    }
  }, []);

  D(() => {
    const F = y.url || "/";

    const V = f.findIndex((ce) => {
      const se = ce.match ?? ce.href;
      return (
        F === se || F.startsWith(`${se}/`) || (ce.id === "profile" && A)
      );
    });

    if (V === -1) {
      v(false);
    } else {
      P(V, true);
    }
  }, [y.url, f, A, P]);

  D(() => {
    const S_current = S.current;
    if (!S_current) {
      return;
    }
    const V = S_current.querySelector(`.${Ge.active}`);
    if (V) {
      const ce = _.current.indexOf(V);

      if (ce !== -1) {
        (k.current = null);
        P(ce);
      }
    }
  }, [P]);

  D(() => {
    const S_current = S.current;
    if (!S_current) {
      return;
    }

    const V = () => {
        const se = S_current.querySelector(`.${Ge.active}`);
        if (se) {
          const W = _.current.indexOf(se);

          if (W !== -1) {
            P(W, true);
          }
        }
      };

    const ce = new ResizeObserver(V);
    ce.observe(S_current);
    window.addEventListener("resize", V);

    return () => {
      ce.disconnect();
      window.removeEventListener("resize", V);
    };
  }, [P]);

  const G = () => {
    C(i(WI, {}));
  };
  return E
    ? null
    : i("div", {
        className: Ge.mobileNavigationWrapper,
        children: [
          i("nav", {
            ref: S,
            className: Ge.navigation,
            children: [
              i("div", {
                className: `${Ge.indicator} ${g ? "" : Ge.indicatorHidden}`,
                style: h,
              }),
              f.map((F, V) => {
                const F_icon = F.icon;
                const se = F.id === "event";
                const W = se && u;
                const ne = y.url || "/";
                const ue = F.match ?? F.href;

                const Q =
                  ne === ue ||
                  ne.startsWith(`${ue}/`) ||
                  (F.id === "profile" && A);

                return i(
                  "a",
                  {
                    href: F.href,
                    target: W ? "_blank" : undefined,
                    rel: W ? "noopener noreferrer" : undefined,
                    ref: (_e) => {
                      (_.current[V] = _e);

                      if (_e && Q) {
                        P(V);
                      }
                    },
                    className: `${Ge.navItem} ${Q ? Ge.active : ""}`,
                    onClick: (_e) => {
                      if (Q && F.id === "feed") {
                        _e.preventDefault();
                        N();
                      }
                    },
                    children: [
                      i("span", {
                        className: Ge.iconWrapper,
                        children: se
                          ? i("img", {
                              src: a.active
                                ? "/assets/portal/portal-active.gif"
                                : "/assets/portal/portal-inactive.png",
                              alt: "Ивент",
                              className: `${Ge.portalImage} ${
                                a.active ? Ge.portalImageActive : ""
                              }`,
                            })
                          : i(Ne, {
                              children: [
                                F.id === "feed" && w ? i(zi, {}) : i(F_icon, {}),
                                F.id === "notifications" &&
                                  T > 0 &&
                                  i("span", {
                                    className: Ge.badge,
                                    children: T > 99 ? "99+" : T,
                                  }),
                                F.id === "shop" &&
                                  I > 0 &&
                                  i("span", {
                                    className: Ge.badge,
                                    children: I,
                                  }),
                              ],
                            }),
                      }),
                      i("span", { className: Ge.label, children: F.label }),
                    ],
                  },
                  F.id
                );
              }),
            ],
          }),
          r &&
            e &&
            i("button", {
              className: Ge.createButton,
              onClick: G,
              "aria-label": "Создать пост",
              children: i(qi, {}),
            }),
        ],
      });
};

const fk = "M9QW";
const pk = "vGFl";
const hk = "J0jQ";
const mk = "gjCI";
const uo = { badge: fk, red: pk, green: hk, blue: mk };
function gk({ type: e }) {
  const t =
    e === "like"
      ? uo.red
      : ["wall_post", "reply", "repost"].includes(e)
      ? uo.green
      : uo.blue;
  return i("div", {
    className: `${uo.badge} ${t}`,
    children: [
      e === "follow" && i(qi, { size: 12 }),
      ["wall_post", "reply"].includes(e) && i(Od, { size: 12, filled: true }),
      e === "like" && i(ji, { size: 12, filled: true }),
      e === "repost" && i(Gi, { size: 12 }),
    ],
  });
}
const _k = "qAOs";
const vk = "DZGR";
const yk = "tagR";
const wk = "olEt";
const Ek = "x2Yl";
const bk = "TNTp";
const Sk = "irxM";
const Ck = "ST49";
const Nk = "Ne6f";
const Tk = "sF7k";
const Ik = "fLd7";

const st = {
  container: _k,
  clearAllButton: vk,
  toastList: yk,
  toast: wk,
  toastLeft: Ek,
  toastData: bk,
  title: Sk,
  message: Ck,
  dragging: Nk,
  closeButton: Tk,
  belowTabs: Ik,
};

const kk = qn(null);
function Rk({ children: e }) {
  const [t, n] = L([]);

  const r = R((c) => {
    const l = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    n(u => [
      ...u,
      {
        id: l,
        message: c.message,
        notificationType: c.notificationType || "follow",
        actorName: c.actorName,
        actorId: c.actorId,
        actorUsername: c.actorUsername,
        actorAvatar: c.actorAvatar,
        clickUrl: c.clickUrl,
        apiType: c.apiType,
        entityId: c.entityId,
        parentEntityId: c.parentEntityId,
      },
    ]);
  }, []);

  const o = R((c) => {
    n(l => l.filter(u => u.id !== c));
  }, []);

  const s = R(() => {
    n([]);
  }, []);

  const a = c0();

  D(() => {
    if (a) {
      const c = Lk(a.type);

      r({
        message: a.message,
        notificationType: c,
        actorName: a.actorName,
        actorId: a.actorId,
        actorUsername: a.actorUsername,
        actorAvatar: a.actorAvatar,
        clickUrl: a.clickUrl,
        apiType: a.type,
        entityId: a.entityId,
        parentEntityId: a.parentEntityId,
      });

      kn.setState({ lastSseToast: null });
    }
  }, [a, r]);

  return i(kk.Provider, {
    value: { toasts: t, addToast: r, removeToast: o, clearAll: s },
    children: [e, i(Ak, { toasts: t, onRemove: o, onClearAll: s })],
  });
}
function Ak({ toasts: e, onRemove: t, onClearAll: n }) {
  const [r, o] = L(false);

  const s =
    typeof window !== "undefined" &&
    (window.location.pathname === "/" || window.location.pathname === "");

  if (e.length === 0) {
    return null;
  }
  const a = e.slice(-4);

  const c = () => {
    o(true);

    setTimeout(() => {
      n();
      o(false);
    }, 300);
  };

  return i("div", {
    className: `${st.container} ${s ? st.belowTabs : ""} ym-hide-content`,
    children: [
      i("div", {
        className: `${st.toastList} ${r ? st.clearing : ""}`,
        children: a.map((l, u) => i(
          xk,
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
        i(De, {
          className: st.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const Ok = 80;
function Lk(e) {
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
function Pk(e) {
  const {
      apiType: t,
      entityId: n,
      parentEntityId: r,
      actorUsername: o,
      clickUrl: s,
    } = e;

  const a = ["post_reaction", "post_repost", "post_mention", "wall_post"];

  const c = [
    "post_comment",
    "comment_reaction",
    "comment_reply",
    "comment_mention",
  ];

  if (t && n && o) {
    if (a.includes(t)) {
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
function xk({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: r = false,
}) {
  const o = O(null);
  const [s, a] = L(0);
  const [c, l] = L(false);
  const [u, d] = L(false);
  const p = O(0);
  const f = O(false);

  const h = (b) => {
    (p.current = b.clientX);
    (f.current = false);
    l(true);
  };

  const m = R(
    (b) => {
      if (!c) {
        return;
      }
      const w = b.clientX - p.current;

      if (Math.abs(w) > 5) {
        (f.current = true);
      }

      a(w);
    },
    [c]
  );

  const g = R(() => {
    if (c) {
      l(false);

      if (Math.abs(s) > Ok) {
        d(true);
        a(s > 0 ? 400 : -400);

        setTimeout(() => t(e.id), 200);
      } else {
        a(0);

        if (!f.current) {
          const b = Pk(e);

          if (b) {
            je(b);
            t(e.id);
          }
        }
      }
    }
  }, [c, s, t, e]);

  D(() => {
    if (c) {
      document.addEventListener("mousemove", m);
      document.addEventListener("mouseup", g);

      return () => {
        document.removeEventListener("mousemove", m);
        document.removeEventListener("mouseup", g);
      };
    }
  }, [c, m, g]);

  const v = (b) => {
    (p.current = b.touches[0].clientX);
    l(true);
  };

  const _ = (b) => {
    if (!c) {
      return;
    }
    const w = b.touches[0].clientX - p.current;
    a(w);
  };

  const S = () => {
    g();
  };

  const y = u || r ? 0 : Math.max(0, 1 - Math.abs(s) / 200);
  const C = r ? 400 : s;
  return i("div", {
    ref: o,
    className: `${st.toast} ${c ? st.dragging : ""}`,
    style: {
      transform: `translateX(${C}px)`,
      opacity: y,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: h,
    onTouchStart: v,
    onTouchMove: _,
    onTouchEnd: S,
    children: [
      i("div", {
        className: st.toastLeft,
        children: [
          i(_t, {
            src: e.actorAvatar || "",
            badge: i(gk, { type: e.notificationType }),
          }),
          i("div", {
            className: st.toastData,
            children: [
              e.actorName &&
                i("div", {
                  className: st.title,
                  children: i(Hr, { userId: e.actorId, name: e.actorName }),
                }),
              i("p", { className: st.message, children: e.message }),
            ],
          }),
        ],
      }),
      i("button", {
        className: st.closeButton,
        onClick: (b) => {
          b.stopPropagation();
          t(e.id);
        },
        onMouseDown: b => b.stopPropagation(),
        onTouchStart: b => b.stopPropagation(),
        children: i(gt, { size: 16 }),
      }),
    ],
  });
}
const $k = "wMB5";
const Mk = "h513";
const Dk = "QMoo";
const Uk = "oVeB";
const Fk = "qaaM";
const Bk = "CH81";
const Hk = "FjuC";
const Vk = "YYMl";
const Wk = "XQ4J";
const jk = "FALA";

const mn = {
  container: $k,
  toast: Mk,
  slideUp: Dk,
  leaving: Uk,
  fadeOut: Fk,
  success: Bk,
  icon: Hk,
  message: Vk,
  closeButton: Wk,
  error: jk,
};

const zk = { success: Dy, error: Ly };
function qk({ id: e, type: t, message: n, onRemove: r }) {
  const [o, s] = L(false);
  const zk_t = zk[t];

  const c = R(() => {
    s(true);

    setTimeout(() => {
      r(e);
    }, 300);
  }, [e, r]);

  return i("div", {
    className: `${mn.toast} ${mn[t]} ${o ? mn.leaving : ""}`,
    children: [
      i("span", { className: mn.icon, children: i(zk_t, { size: 20 }) }),
      i("span", { className: mn.message, children: n }),
      i("button", {
        className: mn.closeButton,
        onClick: c,
        children: i(gt, { size: 14 }),
      }),
    ],
  });
}
function Gk() {
  const e = Ro(n => n.toasts);

  const t = Ro(n => n.removeToast);

  return e.length === 0
    ? null
    : i("div", {
        className: mn.container,
        children: e.map(n => i(
          qk,
          { id: n.id, type: n.type, message: n.message, onRemove: t },
          n.id
        )
        ),
      });
}
const Yk = "fHtf";
const Kk = "fd6e";
const Xk = "Plcb";
const Zk = "BXYy";
const fo = { tabs: Yk, indicator: Kk, button: Xk, active: Zk };
function Qk({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: r,
  className: o = "",
}) {
  const [s, a] = L(t);
  const c = n !== undefined ? n : s;
  const [l, u] = L({});
  const d = O([]);
  const p = O(null);
  const f = O(false);

  const h = R(() => {
    const _ = d.current[c];
    if (_) {
      const _parentElement = _.parentElement;
      const y = _parentElement ? parseFloat(getComputedStyle(_parentElement).paddingLeft) : 0;
      const C = !f.current;

      u({
        width: _.offsetWidth,
        transform: `translateX(${_.offsetLeft - y}px)`,
        ...(C ? { transition: "none" } : {}),
      });

      if (C) {
        requestAnimationFrame(() => {
          (f.current = true);

          u((b) => {
            const { transition: w, ...T } = b;
            return T;
          });
        });
      }
    }
  }, [c]);

  D(() => {
    h();
  }, [h]);

  D(() => {
    const p_current = p.current;
    if (!p_current) {
      return;
    }
    const S = new ResizeObserver(() => {
      h();
    });
    S.observe(p_current);

    return () => {
      S.disconnect();
    };
  }, [h]);

  const m = (_) => {
    if (n === undefined) {
      a(_);
    }

    r?.(_, e[_]);
  };

  const g = _ => typeof _ == "string" ? _ : _.label;

  const v = (_, S) => typeof _ == "string" ? `${S}` : _.id;

  return i("div", {
    ref: p,
    className: `${fo.tabs} ${o}`,
    children: [
      i("div", { className: fo.indicator, style: l }),
      e.map((_, S) => i(
        "button",
        {
          ref: (y) => {
            d.current[S] = y;
          },
          onClick: () => m(S),
          className: `${fo.button} ${c === S ? fo.active : ""}`,
          children: g(_),
        },
        v(_, S)
      )
      ),
    ],
  });
}
const Jk = de(() => ae(
  () => import("./index-CPmTW4bA.js"),
  __vite__mapDeps([28, 29, 7, 6, 30])
).then(e => ({
  default: e.ImageViewer
}))
);
function eR() {
  const {
    isOpen: e,
    images: t,
    initialIndex: n,
    sourceRect: r,
    resolveSourceRect: o,
    zoomable: s,
    thumbs: a,
    session: c,
    close: l,
  } = Ed();
  return e
    ? i($e, {
        fallback: null,
        children: i(
          Jk,
          {
            images: t,
            initialIndex: n,
            sourceRect: r,
            resolveSourceRect: o,
            zoomable: s,
            thumbs: a,
            onClose: () => l(c),
          },
          c
        ),
      })
    : null;
}
const tR = "Im5m";
const nR = "jJLP";
const rR = "oYvA";
const oR = "oTkB";
const sR = "qdRK";
const iR = "vaEc";

const Mn = {
  layout: tR,
  layoutEvent: nR,
  wrapper: rR,
  wrapperShop: oR,
  content: sR,
  wrapperEvent: iR,
};

const aR = de(() => ae(() => import("./index-D2twE9wB.js"), __vite__mapDeps([31, 32])).then(
  e => ({
    default: e.AuthLayout
  })
)
);

const cR = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

const lR = [
  "/terms",
  "/privacy",
  "/cookies",
  "/external",
  "/support",
  "/delete-account",
  "/child-safety",
  "/subscription-terms",
  "/recurring-terms",
];

const uR = ["/shop"];

const dR = ({ children: e }) => {
  const t = Wt();
  const n = Ko();
  const r = sy();
  const [o, s] = L(window.location.pathname);
  D(() => {
    const p = () => {
      s(window.location.pathname);
    };
    window.addEventListener("popstate", p);
    const f = history.pushState.bind(history);
    const h = history.replaceState.bind(history);

    (history.pushState = (...m) => {
      f(...m);
      p();
    });

    (history.replaceState = (...m) => {
      h(...m);
      p();
    });

    return () => {
      window.removeEventListener("popstate", p);
      (history.pushState = f);
      (history.replaceState = h);
    };
  }, []);
  const a = cR.includes(o);
  const c = lR.includes(o);

  const l = uR.some(p => o === p || o.startsWith(`${p}/`));

  const u = o === pe.ALICE_EVENT || o.startsWith(`${pe.ALICE_EVENT}/`);
  const d = (n || l) && !c;
  return a
    ? i($e, { fallback: null, children: i(aR, { children: e }) })
    : i(oy.Provider, {
        value: { isHidden: r },
        children: i("div", {
          className: `${Mn.layout} ${u ? Mn.layoutEvent : ""}`,
          children: i("div", {
            className: `${Mn.wrapper} ${l ? Mn.wrapperShop : ""} ${
              u ? Mn.wrapperEvent : ""
            }`,
            children: [
              d && (t ? i(dk, { showCreateButton: !u }) : i(HE, {})),
              d && !t && i(qE, {}),
              i("div", { className: Mn.content, children: e }),
            ],
          }),
        }),
      });
};

function fR() {
  if (!Rl) {
    (Rl = true);

    (window.setNativeAuth = (e) => {
      if (e?.token) {
        Cd(e.token);
        ge.setState({ status: "loading" });

        ge
          .getState()
          .fetchProfile()
          .then(() => {
          if (ge.getState().status !== "account_deleted") {
            ge.setState({ status: "authenticated" });
          }
        })
          .catch(() => ge.setState({ status: "unauthenticated" }));
      }
    });

    window.webkit?.messageHandlers?.iosBridge
      ? window.webkit.messageHandlers.iosBridge.postMessage("requestAuth")
      : window.AndroidBridge?.requestAuth();
  }
}
const pR = "RHhG";
const hR = "yEaD";
const mR = "tRjC";
const gR = "eUSJ";
const _R = "I0ZZ";
const vR = "t7nY";
const yR = "OxiN";
const wR = "wVw7";
const ER = "j93j";
const bR = "IFnI";
const SR = "jib4";
const CR = "bC2P";
const NR = "ntBx";
const TR = "alvr";
const IR = "Qdyc";

const Ve = {
  overlay: pR,
  card: hR,
  imageWrap: mR,
  image: gR,
  body: _R,
  titleRow: vR,
  title: yR,
  badge: wR,
  texts: ER,
  text: bR,
  moreButton: SR,
  buttons: CR,
  button: NR,
  primary: TR,
  secondary: IR,
};

const gf = "seen_announcements";
function _f() {
  try {
    const e = localStorage.getItem(gf);
    if (!e) {
      return [];
    }
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.filter(n => typeof n == "string") : [];
  } catch {
    return [];
  }
}
function kR(e) {
  try {
    const t = _f();

    if (!t.includes(e)) {
      t.push(e);
      localStorage.setItem(gf, JSON.stringify(t));
    }
  } catch {}
}
function RR() {
  const e = Ko();
  const [t, n] = L(null);
  const [r, o] = L(false);

  const s = R(() => {
    o(false);

    n(m => {
      if (m) {
        kR(m.id);
      }

      return null;
    });
  }, []);

  D(() => {
    if (!e) {
      return;
    }
    let m = false;

    f0
      .getAnnouncements()
      .then((g) => {
      if (m) {
        return;
      }
      const v = _f();

      const _ = g.find(S => S?.id && !v.includes(S.id));

      if (_) {
        n(_);
      }
    })
      .catch(() => {});

    return () => {
      m = true;
    };
  }, [e]);

  D(() => {
    if (!t) {
      return;
    }

    const m = (v) => {
      if (v.key === "Escape") {
        s();
      }
    };

    const g = document.documentElement.style.overflow;
    (document.documentElement.style.overflow = "hidden");
    document.addEventListener("keydown", m);

    return () => {
      (document.documentElement.style.overflow = g);
      document.removeEventListener("keydown", m);
    };
  }, [t, s]);

  if (!t) {
    return null;
  }

  const a = (m) => {
    const m_action = m.action;

    if (m_action?.type === "link" &&
      m_action.url) {
      if (/^https?:\/\//.test(m_action.url)) {
        window.open(m_action.url, "_blank", "noopener,noreferrer");
      } else {
        je(m_action.url);
      }
    }

    s();
  };

  const c = (m) => {
    if (m.target === m.currentTarget) {
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

  return $(
    i("div", {
      className: Ve.overlay,
      onClick: c,
      children: i("div", {
        className: Ve.card,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": d,
        children: [
          l?.url &&
            i("div", {
              className: Ve.imageWrap,
              style:
                l.width && l.height
                  ? { aspectRatio: `${l.width} / ${l.height}` }
                  : undefined,
              children: i("img", {
                className: Ve.image,
                src: l.url,
                alt: "",
                width: l.width,
                height: l.height,
              }),
            }),
          i("div", {
            className: Ve.body,
            children: [
              i("div", {
                className: Ve.titleRow,
                children: [
                  i("h2", { className: Ve.title, children: d }),
                  u && i("span", { className: Ve.badge, children: u }),
                ],
              }),
              (p || f) &&
                i("div", {
                  className: Ve.texts,
                  children: [
                    p && i("p", { className: Ve.text, children: p }),
                    f &&
                      (r
                        ? i("p", { className: Ve.text, children: f })
                        : i("button", {
                            type: "button",
                            className: Ve.moreButton,
                            onClick: () => o(true),
                            children: "Подробнее",
                          })),
                  ],
                }),
              !!h?.length &&
                i("div", {
                  className: Ve.buttons,
                  children: h.map((m, g) => i(
                    "button",
                    {
                      type: "button",
                      className: `${Ve.button} ${
                        m.style === "secondary" ? Ve.secondary : Ve.primary
                      }`,
                      onClick: () => a(m),
                      children: m.title,
                    },
                    g
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
const Al = 3000/* 3e3 */;
const AR = 500;
const OR = 30000/* 3e4 */;
const Ol = ["mousemove", "keydown", "touchstart", "wheel", "scroll"];
function LR() {
  const e = le(n => n.applyStatsUpdates);

  const t = zd();
  D(() => {
    if (t !== "authenticated") {
      return;
    }
    let n = null;
    let r = Infinity;
    let o = false;
    let s = false;
    let a = Date.now();

    const c = () => Date.now() - a > OR;

    const l = async () => {
      if (o || (typeof document !== "undefined" && document.hidden)) {
        return;
      }
      if (c()) {
        (s = true);

        if (n !== null) {
          clearTimeout(n);
          (n = null);
        }

        (r = Infinity);
        return;
      }
      const h = $o.getSnapshot();
      if (h.length === 0) {
        return;
      }
      o = true;
      const m = Date.now();
      try {
        const g = h.length > 20 ? h.slice(0, 20) : h;
        const v = await He.getPostsStats(g);

        if (v.length > 0) {
          e(v, m);
        }
      } catch {
      } finally {
        o = false;
      }
    };

    const u = (h) => {
      const m = Date.now() + h;

      if (m < r) {
        n !== null && clearTimeout(n);
        (r = m);

        (n = setTimeout(async () => {
          (n = null);
          (r = Infinity);
          await l();

          if (!s) {
            u(Al);
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

    for (const h of Ol) {
      window.addEventListener(h, d, { passive: true });
    }
    const p = () => {
      if (!document.hidden) {
        d();
      }
    };
    document.addEventListener("visibilitychange", p);
    const f = $o.onAppear(() => {
      if (!s && !document.hidden) {
        u(AR);
      }
    });
    u(Al);

    return () => {
      if (n !== null) {
        clearTimeout(n);
      }

      document.removeEventListener("visibilitychange", p);
      for (const h of Ol) {
        window.removeEventListener(h, d);
      }
      f();
    };
  }, [e, t]);
}

const da = () => i(qd, {
  kind: "notFound",
  title: "Страница не найдена",
  description:
    "Такой страницы нет — возможно, ссылка устарела или в адресе опечатка.",
  action: i(De, {
    onClick: () => je("/"),
    children: "Вернуться на главную",
  }),
});

const PR = "Z9kz";
const xR = "vwi9";
const $R = "Uvww";
const MR = "vnTS";
const DR = "Fq3J";
const UR = "cGRE";
const FR = "OX1x";
const BR = "B5xY";
const HR = "KNkr";
const VR = "KZ08";
const WR = "euek";
const jR = "qPq1";
const zR = "WftR";
const qR = "ETTw";
const GR = "AY3r";
const YR = "MSUc";
const KR = "jT9n";
const XR = "ZvwV";
const ZR = "gQvN";
const QR = "bEYr";
const JR = "XzqF";
const e2 = "mYdO";

const j = {
  skeleton: PR,
  inner: xR,
  content: $R,
  header: MR,
  body: DR,
  actions: UR,
  shimmer: FR,
  avatar: BR,
  name: HR,
  time: VR,
  line: WR,
  w100: jR,
  w92: zR,
  w85: qR,
  w78: GR,
  w65: YR,
  w50: KR,
  w40: XR,
  media: ZR,
  mediaTall: QR,
  pill: JR,
  list: e2,
};

function t2(e) {
  switch (e) {
    case "short":
      {
        return i("div", {
          className: j.body,
          children: i("div", { className: `${j.shimmer} ${j.line} ${j.w65}` }),
        });
      }
    case "medium":
      {
        return i("div", {
          className: j.body,
          children: [
            i("div", { className: `${j.shimmer} ${j.line} ${j.w100}` }),
            i("div", { className: `${j.shimmer} ${j.line} ${j.w78}` }),
          ],
        });
      }
    case "long":
      {
        return i("div", {
          className: j.body,
          children: [
            i("div", { className: `${j.shimmer} ${j.line} ${j.w100}` }),
            i("div", { className: `${j.shimmer} ${j.line} ${j.w92}` }),
            i("div", { className: `${j.shimmer} ${j.line} ${j.w85}` }),
            i("div", { className: `${j.shimmer} ${j.line} ${j.w50}` }),
          ],
        });
      }
    case "media":
      {
        return i("div", {
          className: j.body,
          children: [
            i("div", { className: `${j.shimmer} ${j.line} ${j.w92}` }),
            i("div", { className: `${j.shimmer} ${j.line} ${j.w40}` }),
            i("div", { className: `${j.shimmer} ${j.media}` }),
          ],
        });
      }
    case "mediaTall":
      {
        return i("div", {
          className: j.body,
          children: [
            i("div", { className: `${j.shimmer} ${j.line} ${j.w78}` }),
            i("div", { className: `${j.shimmer} ${j.mediaTall}` }),
          ],
        });
      }
  }
}
function vf({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return i("article", {
    className: j.skeleton,
    "aria-hidden": "true",
    style: n,
    children: i("div", {
      className: j.inner,
      children: [
        i("div", { className: `${j.shimmer} ${j.avatar}` }),
        i("div", {
          className: j.content,
          children: [
            i("div", {
              className: j.header,
              children: [
                i("div", { className: `${j.shimmer} ${j.name}` }),
                i("div", { className: `${j.shimmer} ${j.time}` }),
              ],
            }),
            t2(e),
            i("div", {
              className: j.actions,
              children: [
                i("div", { className: `${j.shimmer} ${j.pill}` }),
                i("div", { className: `${j.shimmer} ${j.pill}` }),
                i("div", { className: `${j.shimmer} ${j.pill}` }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Ll = ["medium", "media", "short", "long", "mediaTall"];
function n2({ count: e = 4 }) {
  return i("div", {
    className: j.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка постов",
    children: Array.from({ length: e }, (t, n) => i(vf, { variant: Ll[n % Ll.length], delayMs: n * 120 }, n)
    ),
  });
}
const r2 = "IvYV";
const o2 = "Mg3V";
const s2 = "ZKuF";
const xs = { virtualFeed: r2, virtualContent: o2, virtualItem: s2 };
function i2({
  posts: e,
  renderPost: t,
  isLoadingMore: n = false,
  hasMore: r = false,
  onLoadMore: o,
  estimatedPostHeight: s = 300,
  overscan: a = 5,
  gap: c = 10,
  initialMeasuredHeights: l,
  onMeasuredHeightsChange: u,
}) {
  const d = O(null);
  const p = O(false);
  const [f, h] = L(null);
  const [m, g] = L(window.innerWidth < 1174);

  const v = le(N => N.highlightedPostId);

  const _ = le(N => N.clearHighlightedPost);

  D(() => {
    const N = () => g(window.innerWidth < 1174);
    window.addEventListener("resize", N);

    return () => window.removeEventListener("resize", N);
  }, []);
  const S = m ? 0 : c;

  const y = R(
    (N) => {
      const e_N = e[N];
      if (!e_N) {
        return N;
      }
      const A = e_N.attachments?.[0]?.id ?? "";
      return `${e_N.id}-${A}`;
    },
    [e]
  );

  const {
    virtualItems: C,
    totalSize: b,
    measureElement: w,
    getMeasuredHeights: T,
  } = ay({
    itemCount: e.length,
    estimatedItemHeight: s,
    overscan: a,
    gap: S,
    getItemKey: y,
    initialMeasuredHeights: l,
  });

  D(
    () => () => {
      if (u) {
        u(T());
      }
    },
    [u, T]
  );

  D(() => {
    if (!v) {
      return;
    }
    d.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const N = setTimeout(() => {
      h(v);
      _();

      setTimeout(() => h(null), 600);
    }, 300);
    return () => clearTimeout(N);
  }, [v, _]);

  const I = R(() => {
    if (!o || !r || n) {
      return;
    }
    const N =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (N < 500 && !p.current) {
      (p.current = true);
      o();
    }

    if (N > 600) {
      (p.current = false);
    }
  }, [o, r, n]);

  D(() => {
    if (!n) {
      (p.current = false);
    }
  }, [n]);

  D(
    () => {
      window.addEventListener("scroll", I, { passive: true });

      return () => window.removeEventListener("scroll", I);
    },
    [I]
  );

  return i("div", {
    ref: d,
    className: xs.virtualFeed,
    children: [
      i("div", {
        className: xs.virtualContent,
        style: { height: `${b}px` },
        children: C.map((N) => {
          const E = e[N.index];
          return E
            ? i(
                "div",
                {
                  ref: A => w(A, N.index),
                  className: xs.virtualItem,
                  style: { transform: `translateY(${N.start}px)` },
                  children: t(E, N.index, E.id === f),
                },
                N.key
              )
            : null;
        }),
      }),
      n &&
        i("div", {
          style: { marginTop: `${S}px` },
          children: i(vf, { variant: "medium" }),
        }),
    ],
  });
}
const a2 = "W3zk";
const c2 = "YZlW";
const l2 = "RQcp";
const u2 = "w8SA";
const d2 = "mD0d";
const f2 = "Jnc9";

const Dn = {
  page: a2,
  createPostWrapper: c2,
  tabsWrapper: l2,
  searchButton: u2,
  error: d2,
  empty: f2,
};

const p2 = (e) => {
  const t = le(E => E.posts);

  const n = le(E => E.activeFeed);

  const r = le(E => E.isLoading);

  const o = le(E => E.isLoadingMore);

  const s = le(E => E.hasMore);

  const a = le(E => E.error);

  const c = le(E => E.feedScrollPosition);

  const l = le(E => E.feedMeasuredHeights);

  const u = le(E => E.feedRestoreToken);

  const d = le(E => E.setActiveFeed);

  const p = le(E => E.fetchFeed);

  const f = le(E => E.loadMoreFeed);

  const h = le(E => E.createPost);

  const m = le(E => E.cacheFeedHeights);

  const g = ge(E => E.profile);

  const v = ge(E => E.status);

  const _ = O(false);

  const S = Re(() => t.map(E => E.author.id), [t]);

  m0(S);

  D(() => {
    if (v === "authenticated" && t.length === 0 && !r) {
      p();
    }
  }, [n, v]);

  mt(() => {
    if (!_.current) {
      if (t.length !== 0) {
        (_.current = true);

        c > 0 &&
          (window.scrollTo(0, c),
          requestAnimationFrame(() => window.scrollTo(0, c)));
      }
    }
  }, [t.length, c]);

  const y = O(null);
  mt(() => {
    if (y.current === null) {
      y.current = u;
      return;
    }
    if (y.current === u) {
      return;
    }
    y.current = u;
    const E = c;
    window.scrollTo(0, E);

    requestAnimationFrame(() => window.scrollTo(0, E));
  }, [u, c]);

  const C = R(
      (E) => {
        m(n, E);
      },
      [n, m]
    );

  const b = (E) => {
    const k = ["global", "clan", "following"][E] ?? "global";

    if (k !== n) {
      d(k);
    } else if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      p(true);
    }
  };

  const w = async (E, A, k, P, G) => {
    if (g) {
      (await h({
          wallOwnerId: g.id,
          text: E,
          spans: A,
          attachments: k,
          poll: P,
          notebook: G,
        }));
    }
  };

  const T = R(() => {
    if (s && !o) {
      f();
    }
  }, [s, o, f]);

  const I =
    n === "global"
      ? "feed_global"
      : n === "following"
      ? "feed_following"
      : "feed_clan";

  const N = R(
    (E, A, k) => i(TT, { post: E, isHighlighted: k, source: I }, E.id),
    [I]
  );

  return i("div", {
    className: Dn.page,
    children: [
      i("div", {
        className: Dn.tabsWrapper,
        children: [
          i(Qk, {
            tabs: ["Для вас", "Лента кланов", "Подписки"],
            activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
            onChange: b,
          }),
          i("a", {
            href: "/search",
            className: Dn.searchButton,
            "aria-label": "Поиск",
            children: i(Ud, {}),
          }),
        ],
      }),
      i("div", {
        className: Dn.createPostWrapper,
        children: [
          g && i(_t, { src: g.avatar ?? "", alt: g.displayName, size: "sm" }),
          i(mf, { onSubmit: w }),
        ],
      }),
      a
        ? i("div", {
            className: Dn.error,
            children: [
              i("p", { children: a }),
              i("button", { onClick: () => p(), children: "Повторить" }),
            ],
          })
        : r && t.length === 0
        ? i(n2, { count: 4 })
        : t.length === 0
        ? i("div", { className: Dn.empty, children: "Нет постов" })
        : t.length > 0
        ? i(
            i2,
            {
              posts: t,
              renderPost: N,
              isLoadingMore: o,
              hasMore: s,
              onLoadMore: T,
              estimatedPostHeight: 250,
              overscan: 3,
              initialMeasuredHeights: l,
              onMeasuredHeightsChange: C,
            },
            n
          )
        : null,
    ],
  });
};

const h2 = de(() => ae(
  () => import("./index-BqawV4Ce.js"),
  __vite__mapDeps([33, 29, 15, 34])
).then(e => ({
  default: e.GlobalVideoPlayer
}))
);

fR();

const m2 = de(() => ae(() => import("./index-CUvhLV8U.js"), __vite__mapDeps([35, 7, 36])).then(
  e => ({
    default: e.Hashtag
  })
)
  );

const g2 = de(() => ae(
  () => import("./index-BFGMKId0.js"),
  __vite__mapDeps([37, 5, 38, 7, 1, 2, 39])
).then(e => ({
  default: e.Profile
}))
);

const _2 = de(() => ae(() => import("./index-Car6UAq5.js"), __vite__mapDeps([40, 7, 41])).then(
  e => ({
    default: e.PostPage
  })
)
);

const v2 = de(() => ae(
  () => import("./index-CfjRbUGN.js"),
  __vite__mapDeps([42, 4, 38, 43])
).then(e => ({
  default: e.Notifications
}))
);

const y2 = de(() => ae(() => import("./index-DFxsT11Q.js"), __vite__mapDeps([44, 45])).then(
  e => ({
    default: e.Search
  })
)
);

const w2 = de(() => ae(() => import("./index-C_rcTJdH.js"), __vite__mapDeps([46, 47])).then(
  e => ({
    default: e.ShopFrame
  })
)
);

const E2 = de(() => ae(() => import("./index-DKH-ONXF.js"), __vite__mapDeps([48, 5, 49])).then(
  e => ({
    default: e.EventFrame
  })
)
);

function b2({ children: e }) {
  const t = sa();
  return t.status === "denied"
    ? i(da, {})
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
    : i(Ne, { children: e });
}

const S2 = de(() => ae(() => import("./index-RD6D-mzD.js"), __vite__mapDeps([50, 7, 51])).then(
  e => ({
    default: e.DeleteAccount
  })
)
  );

const C2 = de(() => ae(() => import("./index-BrnKjQlG.js"), __vite__mapDeps([52, 7, 53])).then(
  e => ({
    default: e.Terms
  })
)
);

const N2 = de(() => ae(() => import("./index-4sMBxaMy.js"), __vite__mapDeps([54, 7, 55])).then(
  e => ({
    default: e.Privacy
  })
)
);

const T2 = de(() => ae(() => import("./index-BJTWicWf.js"), __vite__mapDeps([56, 7, 57])).then(
  e => ({
    default: e.Cookies
  })
)
);

const I2 = de(() => ae(
  () => import("./index-CnK1hYQQ.js"),
  __vite__mapDeps([58, 7, 3, 59])
).then(e => ({
  default: e.ExternalLink
}))
);

const k2 = de(() => ae(() => import("./index-DOF6s1x8.js"), __vite__mapDeps([60, 7, 61])).then(
  e => ({
    default: e.Support
  })
)
);

const R2 = de(() => ae(() => import("./index-YqSi7ONJ.js"), __vite__mapDeps([62, 7, 63])).then(
  e => ({
    default: e.ChildSafety
  })
)
);

const A2 = de(() => ae(() => import("./index-Df9DQ29e.js"), __vite__mapDeps([64, 65])).then(
  e => ({
    default: e.Event
  })
)
);

const O2 = de(() => ae(
  () => import("./index-DzjNB-_Q.js"),
  __vite__mapDeps([66, 67, 68, 7])
).then(e => ({
  default: e.SubscriptionTerms
}))
);

const L2 = de(() => ae(
  () => import("./index-CAwKmeqJ.js"),
  __vite__mapDeps([69, 67, 68, 7])
).then(e => ({
  default: e.RecurringTerms
}))
);

const P2 = de(() => ae(
  () => import("./index-U03qmzBk.js"),
  __vite__mapDeps([70, 71, 72, 73, 74, 75, 76])
).then(e => ({
  default: e.Login
}))
);

const x2 = de(() => ae(
  () => import("./index-BieKjs-5.js"),
  __vite__mapDeps([77, 71, 72, 73, 74, 75, 78])
).then(e => ({
  default: e.Register
}))
);

const $2 = de(() => ae(
  () => import("./index-Cxmd7gAV.js"),
  __vite__mapDeps([79, 71, 72, 75, 80])
).then(e => ({
  default: e.ForgotPassword
}))
);

const M2 = de(() => ae(() => import("./index-D6L27FTx.js"), __vite__mapDeps([81, 75, 82])).then(
  e => ({
    default: e.ResetPassword
  })
)
);

const D2 = de(() => ae(() => import("./index-BQWp6SHm.js"), []).then(e => ({
  default: e.VerifyEmail
}))
);

const U2 = de(() => ae(() => import("./index-Dvyanpyt.js"), __vite__mapDeps([83, 84])).then(
  e => ({
    default: e.Onboarding
  })
)
);

const F2 = de(() => ae(() => import("./index-Bt7xG9iI.js"), []).then(e => ({
  default: e.Verification
}))
);

function Pl(e) {
  const t = e.match(/^\/@([^/]+)\/?$/);
  return t ? t[1] : null;
}
const B2 = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return i(da, {});
  }
  const t = e.slice(1);
  return i(g2, { username: t });
};
function H2() {
  const [e, t] = L(window.location.pathname);

  const n = Fv(o => o.isOpen);

  LR();

  return i(Rk, {
    children: i(ow, {
      children: i(sE, {
        currentPath: e,
        children: [
          i(eR, {}),
          n && i($e, { fallback: null, children: i(h2, {}) }),
          i(Gk, {}),
          i(fE, {}),
          i(RR, {}),
          i(dR, {
            children: i($e, {
              fallback: null,
              children: i(yd, {
                onChange: (o) => {
                  const s = e;
                  t(o.url);

                  if (o.url === s) {
                    return;
                  }

                  Bv.getState().markNavigated();
                  const a = le.getState();
                  if (s === "/" || s === "") {
                    a.setFeedScrollPosition(window.scrollY);
                  } else {
                    const u = Pl(s);

                    if (u) {
                      a.setProfileScrollPosition(u, window.scrollY);
                    }
                  }
                  const c = o.url === "/";
                  const l = !!Pl(o.url);

                  if (!c && !l) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  i(p2, { path: "/" }),
                  i(v2, { path: "/notifications" }),
                  i(P2, { path: "/login" }),
                  i(x2, { path: "/register" }),
                  i($2, { path: "/forgot-password" }),
                  i(M2, { path: "/reset-password" }),
                  i(D2, { path: "/verify-email" }),
                  i(C2, { path: "/terms" }),
                  i(N2, { path: "/privacy" }),
                  i(T2, { path: "/cookies" }),
                  i(U2, { path: "/onboarding" }),
                  i(y2, { path: "/search" }),
                  i(w2, { path: "/shop/:rest*" }),
                  i(b2, {
                    path: "/event/alice-ai/:rest*",
                    children: i(E2, {}),
                  }),
                  i(m2, { path: "/hashtag/:name" }),
                  i(I2, { path: "/external" }),
                  i(k2, { path: "/support" }),
                  i(S2, { path: "/delete-account" }),
                  i(R2, { path: "/child-safety" }),
                  i(A2, { path: "/event" }),
                  i(F2, { path: "/verification" }),
                  i(O2, { path: "/subscription-terms" }),
                  i(L2, { path: "/recurring-terms" }),
                  i(_2, { path: "/:username/post/:postId" }),
                  i(B2, { path: "/:slug" }),
                  i(da, { default: true }),
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

Sv(document.getElementById("root")).render(
  i(Ne, {
    children: i(bv, {
      fallback: i("div", { children: "Something went wrong" }),
      children: i(H2, {}),
    }),
  })
);
export {
  $ as $,
  O as A,
  De as B,
  pN as C,
  ef as D,
  ge as E,
  fi as F,
  Wt as G,
  Ke as H,
  Md as I,
  Ko as J,
  nw as K,
  WI as L,
  on as M,
  qd as N,
  Qk as O,
  n2 as P,
  mf as Q,
  ul as R,
  Ne as S,
  Re as T,
  Hr as U,
  i2 as V,
  Jt as W,
  Bv as X,
  wo as Y,
  PI as Z,
  mt as __1,
  Fv as a,
  Jd as a0,
  Ld as a1,
  Od as a2,
  ji as a3,
  Gi as a4,
  kn as a5,
  Vd as a6,
  iy as a7,
  Wd as a8,
  x as a9,
  zi as aA,
  Dd as aB,
  li as aC,
  zo as aD,
  mC as aE,
  oC as aF,
  f0 as aG,
  m0 as aH,
  Mt as aI,
  g0 as aJ,
  M as aa,
  Ki as ab,
  Ud as ac,
  Gv as ad,
  rn as ae,
  Td as af,
  V2 as ag,
  Go as ah,
  Id as ai,
  pe as aj,
  Qv as ak,
  ci as al,
  B as am,
  Oy as an,
  Gt as ao,
  Vi as ap,
  el as aq,
  ky as ar,
  Xe as as,
  wd as at,
  qv as au,
  ld as av,
  qo as aw,
  Mi as ax,
  Py as ay,
  Cr as az,
  le as b,
  TT as c,
  L as d,
  je as e,
  _t as f,
  Fy as g,
  D as h,
  xd as i,
  Ji as j,
  $e as k,
  ae as l,
  qi as m,
  sn as n,
  gt as o,
  He as p,
  R as q,
  xe as r,
  sa as s,
  $t as t,
  i as u,
  Jr as v,
  Un as w,
  xy as x,
  Bd as y,
  de as z,
};
