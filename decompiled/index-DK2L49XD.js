const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BNSyjeK1.js",
      "assets/index-CaSta-ME.js",
      "assets/index-Dz_Khg45.css",
      "assets/IconInfo-BXVcVzDs.js",
      "assets/IconNotificationMention-Mmyqgueu.js",
      "assets/IconChevronRight-RPPARUHe.js",
      "assets/IconChevronLeft-BrPnNM4b.js",
      "assets/index-BwfzUdDj.css",
      "assets/index-BbqHoLvp.js",
      "assets/index-CmRaL8Nu.css",
      "assets/VoiceInput-hXSZaEo3.js",
      "assets/IconPlay-tOKVVPuK.js",
      "assets/VoiceInput-Cs5mKTxZ.css",
      "assets/PostMediaVideo-DZo9BpZp.js",
      "assets/VolumeGlyph-BiXmcgfO.js",
      "assets/PostMediaVideo-CCFCFiye.css",
      "assets/index-BnMYV2yp.js",
      "assets/IconCheckCircle-ID7LkJzI.js",
      "assets/index-CvbUrItB.css",
      "assets/index-Cttn60Za.js",
      "assets/index-WiJPcD4K.css",
      "assets/index-EAMLABPq.js",
      "assets/index-Cft2rZR1.css",
      "assets/index-D-YykTQg.js",
      "assets/index-Cp9rzJjd.css",
      "assets/index-B1ffFiJ9.js",
      "assets/index-BumsjZIM.css",
      "assets/index-C0ha_WhZ.js",
      "assets/useBodyScrollLock-KACPNB5c.js",
      "assets/index-CU-sjHVA.css",
      "assets/index-CICgvrh2.js",
      "assets/index-BpA_FuDQ.css",
      "assets/index-DHk4V3qZ.js",
      "assets/index-D0dekcSx.css",
      "assets/index-BLfGXQ3Q.js",
      "assets/index-DZB5BBin.css",
      "assets/index-CmwQWSou.js",
      "assets/IconCheck-BbDhqs9N.js",
      "assets/index-qOC6Zob0.css",
      "assets/index-D5Rk02Iz.js",
      "assets/index-DJ0S0AxJ.css",
      "assets/index-BpSqSPAR.js",
      "assets/index-B6TyWhVi.css",
      "assets/index-KAp3EFSQ.js",
      "assets/index-Dk9r7xck.css",
      "assets/index-LHzdazyI.js",
      "assets/index-CfltavEG.css",
      "assets/index-DZSTFEKT.js",
      "assets/index-cEkISw4s.css",
      "assets/index-C6im29D0.js",
      "assets/index-CHUgqSVv.css",
      "assets/index-DYgL0emE.js",
      "assets/index-DvqeFtAE.css",
      "assets/index-C4NFgIul.js",
      "assets/index-dsAf2RuQ.css",
      "assets/index-C6du8mtf.js",
      "assets/index-DhUbg9TO.css",
      "assets/index-B43Dkix0.js",
      "assets/index-DuahbDqa.css",
      "assets/index-CiDy7J-m.js",
      "assets/index-BwUrop3f.css",
      "assets/index-zY0bvYi9.js",
      "assets/index-CWGK9SpB.css",
      "assets/index-Dp67zKLD.js",
      "assets/index-BuFAv4OM.css",
      "assets/index-BLkquVW2.js",
      "assets/SubscriptionTerms.module-cADD5pzv.js",
      "assets/SubscriptionTerms-BWx4O3ZJ.css",
      "assets/index-Dxabrp2y.js",
      "assets/index-qLTD7FDU.js",
      "assets/index-CyfpzJs8.js",
      "assets/index-C8g2N1V5.css",
      "assets/index-RmzjTx3s.js",
      "assets/index--JuNOpNY.css",
      "assets/IconEyeOff-89JgB8fW.js",
      "assets/index-DjHzfCkT.css",
      "assets/index-C1SB6Xhf.js",
      "assets/index-sK4Reivb.css",
      "assets/index-DNSxDFtK.js",
      "assets/index-CbQDqJY2.css",
      "assets/index-CmjnLA-y.js",
      "assets/index-D_KnCcDn.css",
      "assets/index-BCRb8Aiu.js",
      "assets/index-BtRokQw-.css",
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
      (e._sentryDebugIds[t] = "af1ca87c-cad1-46a3-ae35-f9ef21374694");
      (e._sentryDebugIdIdentifier = "sentry-dbid-af1ca87c-cad1-46a3-ae35-f9ef21374694");
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
let Fo;
let te;
let Zl;
let nn;
let Aa;
let Jl;
let eu;
let ls;
let vr;
let No;
let tu;
let Mi;
let Ks;
let Xs;
let nu;
const Rr = {};
const Ar = [];
const zf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const Array_isArray = Array.isArray;
function At(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Di(e) {
  if (e && e.parentNode) {
    e.parentNode.removeChild(e);
  }
}
function Et(e, t, n) {
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
    (a.children = arguments.length > 3 ? Fo.call(arguments, 2) : n);
  }

  if (typeof e == "function" && e.defaultProps != null) {
    for (s in e.defaultProps) {
      if (a[s] === undefined) {
        (a[s] = e.defaultProps[s]);
      }
    }
  }

  return To(e, a, o, r, null);
}
function To(e, t, n, o, r) {
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
    __v: r ?? ++Zl,
    __i: -1,
    __u: 0,
  };

  if (r == null && te.vnode != null) {
    te.vnode(s);
  }

  return s;
}
function qf() {
  return { current: null };
}
function ve(e) {
  return e.children;
}

class ut {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  setState(e, t) {
    let n;

    (n = this.__s != null && this.__s != this.state
      ? this.__s
      : (this.__s = At({}, this.state)));

    if (typeof e == "function") {
      (e = e(At({}, n), this.props));
    }

    if (e) {
      At(n, e);
    }

    if (e != null && this.__v) {
      t && this._sb.push(t);
      Qs(this);
    }
  }

  forceUpdate(e) {
    if (this.__v) {
      (this.__e = true);
      e && this.__h.push(e);
      Qs(this);
    }
  }
}

function Rn(e, t) {
  if (t == null) {
    return e.__ ? Rn(e.__, e.__i + 1) : null;
  }
  let n;
  for (; t < e.__k.length; t++) {
    if ((n = e.__k[t]) != null && n.__e != null) {
      return n.__e;
    }
  }
  return typeof e.type == "function" ? Rn(e) : null;
}
function Gf(e) {
  if (e.__P && e.__d) {
    const e_v = e.__v;
    const e_v___e = e_v.__e;
    const o = [];
    const r = [];
    const s = At({}, e_v);
    (s.__v = e_v.__v + 1);

    if (te.vnode) {
      te.vnode(s);
    }

    Ui(
      e.__P,
      s,
      e_v,
      e.__n,
      e.__P.namespaceURI,
      32 & e_v.__u ? [e_v___e] : null,
      o,
      e_v___e ?? Rn(e_v),
      !!(32 & e_v.__u),
      r
    );

    (s.__v = e_v.__v);
    (s.__.__k[s.__i] = s);
    au(o, s, r);
    e_v.__e = null;
    e_v.__ = null;

    if (s.__e != e_v___e) {
      ou(s);
    }
  }
}
function ou(e) {
  if ((e = e.__) != null && e.__c != null) {
    e.__e = null;
    e.__c.base = null;

    e.__k.some(t => {
      if (t != null && t.__e != null) {
        return (e.__e = e.__c.base = t.__e);
      }
    });

    return ou(e);
  }
}
function Qs(e) {
  if (((!e.__d && (e.__d = true) && nn.push(e) && !Lr.__r++) || Aa != te.debounceRendering)) {
    ((Aa = te.debounceRendering) || Jl)(Lr);
  }
}
function Lr() {
  try {
    let e;
    let t = 1;

    while (nn.length) {
      if (nn.length > t) {
        nn.sort(eu);
      }

      (e = nn.shift());
      (t = nn.length);
      Gf(e);
    }
  } finally {
    nn.length = 0;
    Lr.__r = 0;
  }
}
function ru(e, t, n, o, r, s, a, c, l, u, d) {
  let p;
  let f;
  let h;
  let m;
  let _;
  let v;
  const g = (o && o.__k) || Ar;
  const t_length = t.length;
  l = Yf(n, t, g, l, t_length);

  for (p = 0; p < t_length; p++) {
    if ((h = n.__k[p]) != null) {
      (f = (h.__i != -1 && g[h.__i]) || Rr);
      (h.__i = p);
      (v = Ui(e, h, f, r, s, a, c, l, u, d));
      (m = h.__e);

      h.ref &&
        f.ref != h.ref &&
        (f.ref && Fi(f.ref, null, h), d.push(h.ref, h.__c || m, h));

      _ == null && m != null && (_ = m);

      4 & h.__u
        ? ((l = su(h, l, e)), f.__e && (f.__e = null))
        : typeof h.type == "function" && v !== undefined
        ? (l = v)
        : m && (l = m.nextSibling);

      (h.__u &= -7);
    }
  }

  (n.__e = _);
  return l;
}
function Yf(e, t, n, o, r) {
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
            ? (a = e.__k[s] = To(null, a, null, null, null))
            : Array_isArray(a)
            ? (a = e.__k[s] = To(ve, { children: a }, null, null, null))
            : a.constructor === undefined && a.__b > 0
            ? (a = e.__k[s] =
                To(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v))
            : (e.__k[s] = a);

      (l = s + f);
      (a.__ = e);
      (a.__b = e.__b + 1);
      (c = null);
      (u = a.__i = Kf(a, n, l, p)) != -1 && (p--, (c = n[u]) && (c.__u |= 2));

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
        c.__e == o && (o = Rn(c));
        lu(c, c);
      }
    }
  }
  return o;
}
function su(e, t, n) {
  let o;
  let r;
  if (typeof e.type == "function") {
    o = e.__k;

    for (r = 0; o && r < o.length; r++) {
      if (o[r]) {
        (o[r].__ = e);
        (t = su(o[r], t, n));
      }
    }

    return t;
  }

  if (e.__e != t) {
    t && e.type && !t.parentNode && (t = Rn(e));
    (t = n.insertBefore(e.__e, t || null));
  }

  do {
    t = t && t.nextSibling;
  } while (t != null && t.nodeType == 8);
  return t;
}
function wt(e, t) {
  (t = t || []);

  if (e != null && typeof e != "boolean") {
    if (Array_isArray(e)) {
      e.some(n => {
              wt(n, t);
            });
    } else {
      t.push(e);
    }
  }

  return t;
}
function Kf(e, t, n, o) {
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
function La(e, t, n) {
  if (t[0] == "-") {
    e.setProperty(t, n ?? "");
  } else {
    (e[t] = n == null ? "" : typeof n != "number" || zf.test(t) ? n : `${n}px`);
  }
}
function Zo(e, t, n, o, r) {
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
            La(e.style, t, "");
          }
        }
      }

      if (n) {
        for (t in n) {
          if (!o || n[t] != o[t]) {
            La(e.style, t, n[t]);
          }
        }
      }
    }
  } else if (t[0] == "o" && t[1] == "n") {
    (s = t != (t = t.replace(tu, "$1")));
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
        (n[No] = o[No]);
      } else {
        (n[No] = Mi);
        e.addEventListener(t, s ? Xs : Ks, s);
      }
    } else {
      e.removeEventListener(t, s ? Xs : Ks, s);
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
function Pa(e) {
  return function (t) {
    if (this.l) {
      const n = this.l[t.type + e];
      if (t[vr] == null) {
        t[vr] = Mi++;
      } else if (t[vr] < n[No]) {
        return;
      }
      return n(te.event ? te.event(t) : t);
    }
  };
}
function Ui(e, t, n, o, r, s, a, c, l, u) {
  let d;
  let p;
  let f;
  let h;
  let m;
  let _;
  let v;
  let g;
  let E;
  let y;
  let k;
  let C;
  let b;
  let w;
  let N;
  let T;
  const t_type = t.type;
  if (t.constructor !== undefined) {
    return null;
  }

  if (128 & n.__u) {
    (l = !!(32 & n.__u));
    (s = [(c = t.__e = n.__e)]);
  }

  if ((d = te.__b)) {
    d(t);
  }

  e: if (typeof t_type == "function") {
    p = a.length;
    try {
      (E = t.props);
      (y = t_type.prototype && t_type.prototype.render);
      (k = (d = t_type.contextType) && o[d.__c]);
      (C = d ? (k ? k.props.value : d.__) : o);

      if (n.__c) {
        (g = (f = t.__c = n.__c).__ = f.__E);
      } else {
        y
              ? (t.__c = f = new t_type(E, C))
              : ((t.__c = f = new ut(E, C)),
                (f.constructor = t_type),
                (f.render = Qf));

        k && k.sub(f);
        f.state || (f.state = {});
        (f.__n = o);
        (h = f.__d = true);
        (f.__h = []);
        (f._sb = []);
      }

      if (y && f.__s == null) {
        (f.__s = f.state);
      }

      if (y &&
        t_type.getDerivedStateFromProps != null) {
        f.__s == f.state && (f.__s = At({}, f.__s));
        At(f.__s, t_type.getDerivedStateFromProps(E, f.__s));
      }

      (m = f.props);
      (_ = f.state);
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
            E !== m &&
            f.componentWillReceiveProps != null) {
          f.componentWillReceiveProps(E, C);
        }

        if (t.__v == n.__v ||
          (!f.__e &&
            f.shouldComponentUpdate != null &&
            f.shouldComponentUpdate(E, f.__s, C) === false)) {
          if (t.__v != n.__v) {
            (f.props = E);
            (f.state = f.__s);
            (f.__d = false);
          }

          (t.__e = n.__e);
          (t.__k = n.__k);

          t.__k.some(P => {
            if (P) {
              (P.__ = t);
            }
          });

          Ar.push.apply(f.__h, f._sb);
          (f._sb = []);

          if (f.__h.length) {
            a.push(f);
          }

          (c = Rn(n));
          break e;
        }

        if (f.componentWillUpdate != null) {
          f.componentWillUpdate(E, f.__s, C);
        }

        if (y &&
          f.componentDidUpdate != null) {
          f.__h.push(() => {
            f.componentDidUpdate(m, _, v);
          });
        }
      }

      (f.context = C);
      (f.props = E);
      (f.__P = e);
      (f.__e = false);
      (b = te.__r);
      (w = 0);

      if (y) {
        (f.state = f.__s);
        (f.__d = false);

        if (b) {
          b(t);
        }

        (d = f.render(f.props, f.state, f.context));
        Ar.push.apply(f.__h, f._sb);
        (f._sb = []);
      } else {
        do {
          (f.__d = false);

          if (b) {
            b(t);
          }

          (d = f.render(f.props, f.state, f.context));
          (f.state = f.__s);
        } while (f.__d && ++w < 25);
      }

      (f.state = f.__s);

      if (f.getChildContext != null) {
        (o = At(At({}, o), f.getChildContext()));
      }

      if (y &&
        !h &&
        f.getSnapshotBeforeUpdate != null) {
        (v = f.getSnapshotBeforeUpdate(m, _));
      }

      (N = d != null && d.type === ve && d.key == null
        ? cu(d.props.children)
        : d);

      (c = ru(e, Array_isArray(N) ? N : [N], t, n, o, r, s, a, c, l, u));
      (f.base = t.__e);
      (t.__u &= -161);

      if (f.__h.length) {
        a.push(f);
      }

      if (g) {
        (f.__E = f.__ = null);
      }
    } catch (P) {
      (a.length = p);
      (t.__v = null);

      if (l || s != null) {
        if (P.then) {
          for (t.__u |= l ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) {
            c = c.nextSibling;
          }

          if (s != null) {
            (s[s.indexOf(c)] = null);
          }

          (t.__e = c);
        } else if (s != null) {
          for (T = s.length; T--; ) {
            Di(s[T]);
          }
        }
      } else {
        t.__e = n.__e;
      }

      if (t.__k == null) {
        (t.__k = n.__k || []);
      }

      if (!P.then) {
        iu(t);
      }

      te.__e(P, t, n);
    }
  } else {
    if (s == null && t.__v == n.__v) {
      (t.__k = n.__k);
      (t.__e = n.__e);
    } else {
      (c = t.__e = Xf(n.__e, t, n, o, r, s, a, l, u));
    }
  }

  if ((d = te.diffed)) {
    d(t);
  }

  return 128 & t.__u ? undefined : c;
}
function iu(e) {
  if (e) {
    e.__c && (e.__c.__e = true);
    e.__k && e.__k.some(iu);
  }
}
function au(e, t, n) {
  for (let o = 0; o < n.length; o++) {
    Fi(n[o], n[++o], n[++o]);
  }

  if (te.__c) {
    te.__c(t, e);
  }

  e.some(r => {
    try {
      (e = r.__h);
      (r.__h = []);

      e.some(s => {
        s.call(r);
      });
    } catch (s) {
      te.__e(s, r.__v);
    }
  });
}
function cu(e) {
  return typeof e != "object" || e == null || e.__b > 0
    ? e
    : Array_isArray(e)
    ? e.map(cu)
    : e.constructor !== undefined
    ? null
    : At({}, e);
}
function Xf(e, t, n, o, r, s, a, c, l) {
  let u;
  let d;
  let p;
  let f;
  let h;
  let m;
  let _;
  let v = n.props || Rr;

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
      te.__m && te.__m(t, s);
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
      : s && Fo.call(e.childNodes));

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
        Zo(e, u, null, h, r);
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
        (_ = h);
        break;
      default:
        Zo(e, u, h, v[u], r);
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

      ru(
        t.type == "template" ? e.content : e,
        Array_isArray(f) ? f : [f],
        t,
        n,
        o,
        type == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r,
        s,
        a,
        s ? s[0] : n.__k && Rn(n, 0),
        c,
        l
      );

      if (s != null) {
        for (u = s.length; u--; ) {
          Di(s[u]);
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
          Zo(e, u, m, v[u], r);

      (u = "checked");
      _ != null && _ != e[u] && Zo(e, u, _, v[u], r);
    }
  }
  return e;
}
function Fi(e, t, n) {
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
    te.__e(r, n);
  }
}
function lu(e, t, n) {
  let o;
  let r;

  if (te.unmount) {
    te.unmount(e);
  }

  if ((o = e.ref)) {
    if (!o.current || o.current == e.__e) {
      Fi(o, null, t);
    }
  }

  if ((o = e.__c) != null) {
    if (o.componentWillUnmount) {
      try {
        o.componentWillUnmount();
      } catch (s) {
        te.__e(s, t);
      }
    }
    o.base = null;
    o.__P = null;
    o.__n = null;
  }

  if ((o = e.__k)) {
    for (r = 0; r < o.length; r++) {
      if (o[r]) {
        lu(o[r], t, n || typeof e.type != "function");
      }
    }
  }

  if (!n) {
    Di(e.__e);
  }

  e.__c = undefined;
  e.__ = undefined;
  e.__e = undefined;
}
function Qf(e, t, n) {
  return this.constructor(e, n);
}
function Po(e, t, n) {
  let o;
  let r;
  let s;
  let a;

  if (t == document) {
    (t = document.documentElement);
  }

  if (te.__) {
    te.__(e, t);
  }

  (r = (o = typeof n == "function") ? null : (n && n.__k) || t.__k);
  (s = []);
  (a = []);

  Ui(
    t,
    (e = ((!o && n) || t).__k = Et(ve, null, [e])),
    r || Rr,
    Rr,
    t.namespaceURI,
    !o && n ? [n] : r ? null : t.firstChild ? Fo.call(t.childNodes) : null,
    s,
    !o && n ? n : r ? r.__e : t.firstChild,
    o,
    a
  );

  au(s, e, a);
  (e.props.children = null);
}
function uu(e, t) {
  Po(e, t, uu);
}
function du(e, t, n) {
  let o;
  let r;
  let s;
  let a;
  const c = At({}, e.props);

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
    (c.children = arguments.length > 3 ? Fo.call(arguments, 2) : n);
  }

  return To(e.type, c, o || e.key, r || e.ref, null);
}
function eo(e) {
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
            Qs(a);
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
  (t.__c = `__cC${nu++}`);
  (t.__ = e);
  t.Provider = t;
  t.__l = t;

  (t.Consumer = (n, o) => n.children(o)).contextType = t;

  return t;
}
(Fo = Ar.slice);

(te = {
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

(Zl = 0);

(ut.prototype.render = ve);
(nn = []);

(Jl = typeof Promise == "function"
  ? Promise.prototype.then.bind(Promise.resolve())
  : setTimeout);

(eu = (e, t) => e.__v.__b - t.__v.__b);

(Lr.__r = 0);
(ls = Math.random().toString(8));
(vr = `__d${ls}`);
(No = `__a${ls}`);
(tu = /(PointerCapture)$|Capture$/i);
(Mi = 0);
(Ks = Pa(false));
(Xs = Pa(true));
(nu = 0);
let Zf = 0;
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
    __v: --Zf,
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

  if (te.vnode) {
    te.vnode(u);
  }

  return u;
}
const ee = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const fe = globalThis;
const kn = "10.71.0";
function zr() {
  qr(fe);
  return fe;
}
function qr(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {});
  (t.version = t.version || kn);
  (t[kn] = t[kn] || {});
  return t[kn];
}
function to(e, t, n = fe) {
  const o = (n.__SENTRY__ = n.__SENTRY__ || {});
  const r = (o[kn] = o[kn] || {});
  return r[e] || (r[e] = t());
}
const Jf = ["debug", "info", "warn", "error", "log", "assert", "trace"];
const ep = "Sentry Logger ";
const Pr = {};
function no(e) {
  if (!("console" in fe)) {
    return e();
  }
  const fe_console = fe.console;
  const n = {};
  const o = Object.keys(Pr);
  o.forEach((r) => {
    const Pr_r = Pr[r];
    (n[r] = fe_console[r]);
    (fe_console[r] = Pr_r);
  });
  try {
    return e();
  } finally {
    o.forEach((r) => {
      fe_console[r] = n[r];
    });
  }
}
function tp() {
  Hi().enabled = true;
}
function np() {
  Hi().enabled = false;
}
function fu() {
  return Hi().enabled;
}
function op(...e) {
  Bi("log", ...e);
}
function rp(...e) {
  Bi("warn", ...e);
}
function sp(...e) {
  Bi("error", ...e);
}
function Bi(e, ...t) {
  if (ee &&
    fu()) {
    no(() => {
      fe.console[e](`${ep}[${e}]:`, ...t);
    });
  }
}
function Hi() {
  return ee ? to("loggerSettings", () => ({
    enabled: false
  })) : { enabled: false };
}

const Y = {
    enable: tp,
    disable: np,
    isEnabled: fu,
    log: op,
    warn: rp,
    error: sp,
  };

const pu = 50;
const An = "?";
const Oa = /\(error: (.*)\)/;
const xa = /captureMessage|captureException/;
function hu(...e) {
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

      const u = Oa.test(a_c) ? a_c.replace(Oa, "$1") : a_c;
      if (!u.includes("Error: ")) {
        for (const d of t) {
          const p = d(u);
          if (p) {
            s.push(p);
            break;
          }
        }
        if (s.length >= pu + r) {
          break;
        }
      }
    }
    return ap(s.slice(r));
  };
}
function ip(e) {
  return Array.isArray(e) ? hu(...e) : e;
}
function ap(e) {
  if (!e.length) {
    return [];
  }
  const t = Array.from(e);

  if (/sentryWrapped/.test(Jo(t).function || "")) {
    t.pop();
  }

  t.reverse();

  if (xa.test(Jo(t).function || "")) {
    t.pop();
    xa.test(Jo(t).function || "") && t.pop();
  }

  return t
    .slice(0, pu)
    .map(n => ({
    ...n,
    filename: n.filename || Jo(t).filename,
    function: n.function || An
  }));
}
function Jo(e) {
  return e[e.length - 1] || {};
}
const us = "<anonymous>";
function an(e) {
  try {
    return !e || typeof e != "function" ? us : e.name || us;
  } catch {
    return us;
  }
}
function $a(e) {
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
const wo = {};
const Ma = {};
function Pn(e, t) {
  (wo[e] = wo[e] || []);
  wo[e].push(t);

  return () => {
    const wo_e = wo[e];
    if (wo_e) {
      const o = wo_e.indexOf(t);

      if (o !== -1) {
        wo_e.splice(o, 1);
      }
    }
  };
}
function On(e, t) {
  if (!Ma[e]) {
    Ma[e] = true;
    try {
      t();
    } catch (n) {
      if (ee) {
        Y.error(`Error while instrumenting ${e}`, n);
      }
    }
  }
}
function bt(e, t) {
  const n = e && wo[e];
  if (n) {
    for (const o of n) {
      try {
        o(t);
      } catch (r) {
        if (ee) {
          Y.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${an(o)}
Error:`,
            r
          );
        }
      }
    }
  }
}
let ds = null;
function cp(e) {
  const t = "error";
  Pn(t, e);
  On(t, lp);
}
function lp(...args) {
  (ds = fe.onerror);

  (fe.onerror = function (e, t, n, o, r) {
    bt("error", { column: o, error: r, line: n, msg: e, url: t });
    return ds ? ds.apply(this, args) : false;
  });

  (fe.onerror.__SENTRY_INSTRUMENTED__ = true);
}
let fs = null;
function up(e) {
  const t = "unhandledrejection";
  Pn(t, e);
  On(t, dp);
}
function dp(...args) {
  (fs = fe.onunhandledrejection);

  (fe.onunhandledrejection = function (e) {
    bt("unhandledrejection", e);
    return fs ? fs.apply(this, args) : true;
  });

  (fe.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true);
}
const mu = Object.prototype.toString;
function Ot(e) {
  switch (mu.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      {
        return true;
      }
    default:
      {
        return Wi(e, Error);
      }
  }
}
function oo(e, t) {
  return mu.call(e) === `[object ${t}]`;
}
function gu(e) {
  return oo(e, "ErrorEvent");
}
function Da(e) {
  return oo(e, "DOMError");
}
function fp(e) {
  return oo(e, "DOMException");
}
function zt(e) {
  return oo(e, "String");
}
function Vi(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function Ho(e) {
  return (
    e === null || Vi(e) || (typeof e != "object" && typeof e != "function")
  );
}
function Oo(e) {
  return oo(e, "Object");
}
function Gr(e) {
  return typeof e == "object" && e !== null;
}
function Yr(e) {
  return typeof Event !== "undefined" && Wi(e, Event);
}
function pp(e) {
  return oo(e, "RegExp");
}
function Vo(e) {
  return !!(e?.then && typeof e.then == "function");
}
function Wi(e, t) {
  try {
    return e instanceof t;
  } catch {
    return false;
  }
}
function _u(e) {
  return typeof Request !== "undefined" && Wi(e, Request);
}
function rt(e, t, n) {
  if (!(t in e)) {
    return;
  }
  const e_t = e[t];
  if (typeof e_t != "function") {
    return;
  }
  const r = n(e_t);

  if (typeof r == "function") {
    vu(r, e_t);
  }

  try {
    e[t] = r;
  } catch {
    if (ee) {
      Y.log(`Failed to replace method "${t}" in object`, e);
    }
  }
}
function cn(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: true, configurable: true });
  } catch {
    if (ee) {
      Y.log(
        `Failed to add non-enumerable property "${String(t)}" to object`,
        e
      );
    }
  }
}
function vu(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = n;
    t.prototype = n;
    cn(e, "__sentry_original__", t);
  } catch {}
}
function ji(e) {
  return e.__sentry_original__;
}
function yu(e) {
  if (Ot(e)) {
    return { message: e.message, name: e.name, stack: e.stack, ...Ua(e) };
  }
  if (Yr(e)) {
    const { type, target, currentTarget, detail } = e;
    return {
      type: type,
      target: target,
      currentTarget: currentTarget,
      ...(detail ? { detail: detail } : {}),
      ...Ua(e),
    };
  }
  return e;
}
function Ua(e) {
  return Gr(e) ? Object.fromEntries(Object.entries(e)) : {};
}
function hp(e) {
  const t = Object.keys(yu(e));
  t.sort();
  return t[0] ? t.join(", ") : "[object has no keys]";
}
let Mn;
function Kr(e) {
  if (Mn !== undefined) {
    return Mn ? Mn(e) : e();
  }
  const t = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const n = fe;
  return t in n && typeof n[t] == "function"
    ? ((Mn = n[t]), Mn(e))
    : ((Mn = null), e());
}
function Or() {
  return Kr(() => Math.random());
}
function ro() {
  return Kr(() => Date.now());
}
const mp = Symbol.for("sentry.skipNormalization");
const gp = Symbol.for("sentry.overrideNormalizationDepth");
function _p(e) {
  return !!e[mp];
}
function vp(e) {
  const e_gp = e[gp];
  return typeof e_gp == "number" ? e_gp : undefined;
}
let Zs;
function wu(e) {
  Zs = e;
}
function Vt(e, t = 100, n = Infinity) {
  try {
    return Js("", e, t, n);
  } catch (o) {
    return { ERROR: `**non-serializable** (${o})` };
  }
}
function bu(e, t = 3, n = 100 * 1024) {
  const o = Vt(e, t);
  return bp(o) > n ? bu(e, t - 1, n) : o;
}
function Js(e, t, n = Infinity, o = Infinity, r = Ep()) {
  const [s, a] = r;
  if (t == null ||
  ["boolean", "string"].includes(typeof t) ||
  (typeof t == "number" && Number.isFinite(t))) {
    return t;
  }
  const c = Eu(e, t);
  if (!c.startsWith("[object ")) {
    return c;
  }
  if (_p(t)) {
    return t;
  }
  const l = vp(t);
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
      return Js("", m, u - 1, o, r);
    } catch {}
  }
  const p = Array.isArray(t) ? [] : {};
  let f = 0;
  const h = yu(t);
  for (const m in h) {
    if (!Object.prototype.hasOwnProperty.call(h, m)) {
      continue;
    }
    if (f >= o) {
      p[m] = "[MaxProperties ~]";
      break;
    }
    const h_m = h[m];
    (p[m] = Js(m, h_m, u - 1, o, r));
    f++;
  }
  a(t);
  return p;
}
function Eu(e, t) {
  try {
    if (Zs) {
      const o = Zs(t);
      if (o) {
        return o;
      }
    }
    return typeof global !== "undefined" && t === global
      ? "[Global]"
      : typeof t == "number" && !Number.isFinite(t)
      ? `[${t}]`
      : typeof t == "function"
      ? `[Function: ${an(t)}]`
      : typeof t == "symbol"
      ? `[${String(t)}]`
      : typeof t == "bigint"
      ? `[BigInt: ${String(t)}]`
      : `[object ${yp(t)}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function yp(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function wp(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function bp(e) {
  return wp(JSON.stringify(e));
}
function Ep() {
  const e = new WeakSet();
  function t(o) {
    return e.has(o) ? true : (e.add(o), false);
  }
  function n(o) {
    e.delete(o);
  }
  return [t, n];
}
function ei(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function Fa(e, t) {
  if (!Array.isArray(e)) {
    return "";
  }
  const n = [];

  for (const r of e) {
    if (Ho(r)) {
      n.push(String(r));
    } else if (r instanceof Error) {
      n.push(r.message ? `${r.name}: ${r.message}` : r.name);
    } else {
      n.push(Eu(undefined, r));
    }
  }

  return n.join(t);
}
function Io(e, t, n = false) {
  return zt(e)
    ? pp(t)
      ? t.test(e)
      : zt(t)
      ? n
        ? e === t
        : e.includes(t)
      : typeof t == "function"
      ? t(e)
      : false
    : false;
}
function Wo(e, t = [], n = false) {
  for (const o of t) {
    if (Io(e, o, n)) {
      return true;
    }
  }
  return false;
}
function Sp() {
  const e = fe;
  return e.crypto || e.msCrypto;
}
let ps;
function Cp() {
  return Or() * 16;
}
function dt(e = Sp()) {
  try {
    if (e?.randomUUID) {
      return Kr(() => e.randomUUID()).replace(/-/g, "");
    }
  } catch {}

  if (!ps) {
    (ps = `10000000100040008000${100000000000/* 1e11 */}`);
  }

  return ps.replace(/[018]/g, t => (t ^ ((Cp() & 15) >> (t / 4))).toString(16));
}
function Su(e) {
  return e.exception?.values?.[0];
}
function wn(e) {
  const { message, event_id } = e;
  if (message) {
    return message;
  }
  const o = Su(e);
  return o
    ? o.type && o.value
      ? `${o.type}: ${o.value}`
      : o.type || o.value || event_id || "<unknown>"
    : event_id || "<unknown>";
}
function ti(e, t, n) {
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
function Nn(e, t) {
  const n = Su(e);
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
function Ba(e) {
  if (kp(e)) {
    return true;
  }
  try {
    cn(e, "__sentry_captured__", true);
  } catch {}
  return false;
}
function kp(e) {
  try {
    return e.__sentry_captured__;
  } catch {}
}
const Cu = 1000/* 1e3 */;
function jo() {
  return ro() / Cu;
}
function Np() {
  const { performance } = fe;
  if (!performance?.now || !performance.timeOrigin) {
    return jo;
  }
  const e_timeOrigin = performance.timeOrigin;
  return () => (e_timeOrigin + Kr(() => performance.now())) / Cu;
}
let Ha;
function qt() {
  return (Ha ?? (Ha = Np()))();
}
function Tp(e) {
  const t = qt();

  const n = {
    sid: dt(),
    init: true,
    timestamp: t,
    started: t,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => Rp(n),
  };

  if (e) {
    Kn(n, e);
  }

  return n;
}
function Kn(e, t = {}) {
  if (t.user) {
    !e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address);

    !e.did &&
      !t.did &&
      (e.did = t.user.id || t.user.email || t.user.username);
  }

  (e.timestamp = t.timestamp || qt());

  if (t.abnormal_mechanism) {
    (e.abnormal_mechanism = t.abnormal_mechanism);
  }

  if (t.ignoreDuration) {
    (e.ignoreDuration = t.ignoreDuration);
  }

  if (t.sid) {
    (e.sid = t.sid.length === 32 ? t.sid : dt());
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
function Ip(e, t) {
  let n = {};

  if (e.status === "ok") {
    (n = { status: "exited" });
  }

  Kn(e, n);
}
function Rp(e) {
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
function zo(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0) {
    return t;
  }
  if (e && Object.keys(t).length === 0) {
    return e;
  }
  const o = { ...e };
  for (const r in t) {
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      (o[r] = zo(o[r], t[r], n - 1));
    }
  }
  return o;
}
function Va() {
  return dt();
}
function ku() {
  return dt().substring(16);
}
function Ap(e) {
  try {
    const fe_WeakRef = fe.WeakRef;
    if (typeof fe_WeakRef == "function") {
      return new fe_WeakRef(e);
    }
  } catch {}
  return e;
}
function Nu(e) {
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
const ni = "_sentrySpan";
function Wa(e, t) {
  if (t) {
    cn(e, ni, Ap(t));
  } else {
    delete e[ni];
  }
}
function ja(e) {
  return Nu(e[ni]);
}
const Lp = 100;
class xt {
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
    (this._propagationContext = { traceId: Va(), sampleRand: Or() });
  }
  clone() {
    const t = new xt();
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
    Wa(t, ja(this));
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
      Kn(this._session, { user: t });
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
    const o = n instanceof xt ? n.getScopeData() : Oo(n) ? t : undefined;

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
    Wa(this, undefined);
    (this._attachments = []);
    this.setPropagationContext({ traceId: Va(), sampleRand: Or() });
    this._notifyScopeListeners();
    return this;
  }
  addBreadcrumb(t, n) {
    const o = typeof n == "number" ? n : Lp;
    if (o <= 0) {
      return this;
    }
    const r = {
      timestamp: jo(),
      ...t,
      message: t.message ? ei(t.message, 2048) : t.message,
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
      span: ja(this),
      conversationId: this._conversationId,
    };
  }
  setSDKProcessingMetadata(t) {
    (this._sdkProcessingMetadata = zo(this._sdkProcessingMetadata, t, 2));
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
    const o = n?.event_id || dt();
    if (!this._client) {
      if (ee) {
        Y.warn("No client configured on scope - will not capture exception!");
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
    const r = o?.event_id || dt();
    if (!this._client) {
      if (ee) {
        Y.warn("No client configured on scope - will not capture message!");
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
    const o = t.event_id || n?.event_id || dt();
    return this._client
      ? (this._client.captureEvent(t, { ...n, event_id: o }, this), o)
      : (ee &&
          Y.warn("No client configured on scope - will not capture event!"),
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
function Pp() {
  return to("defaultCurrentScope", () => new xt());
}
function Op() {
  return to("defaultIsolationScope", () => new xt());
}

const za = e => e instanceof Promise && !e[Tu];

const Tu = Symbol("chained PromiseLike");

const xp = (e, t, n) => {
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
  return za(o) && za(e) ? o : $p(e, o);
};

const $p = (e, t) => {
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
    Object.assign(t, { [Tu]: true });
  }

  return t;
};

class Mp {
  constructor(t, n) {
    let o;

    if (t) {
      (o = t);
    } else {
      (o = new xt());
    }

    let r;

    if (n) {
      (r = n);
    } else {
      (r = new xt());
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
    return Vo(o)
      ? xp(
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
function Xn() {
  const e = zr();
  const t = qr(e);
  return (t.stack = t.stack || new Mp(Pp(), Op()));
}
function Dp(e) {
  return Xn().withScope(e);
}
function Up(e, t) {
  const n = Xn();
  return n.withScope(() => {
    (n.getStackTop().scope = e);
    return t(e);
  });
}
function qa(e) {
  return Xn().withScope(() => e(Xn().getIsolationScope()));
}
function Fp() {
  return {
    withIsolationScope: qa,
    withScope: Dp,
    withSetScope: Up,
    withSetIsolationScope: (e, t) => qa(t),
    getCurrentScope: () => Xn().getScope(),
    getIsolationScope: () => Xn().getIsolationScope(),
  };
}
function zi(e) {
  const t = qr(e);
  return t.acs ? t.acs : Fp();
}
function Bp(e) {
  return (
    typeof e == "object" &&
    e != null &&
    !Array.isArray(e) &&
    Object.keys(e).includes("value")
  );
}
function Hp(e, t) {
  const { value, unit } = Bp(e) ? e : { value: e, unit: undefined };
  const r = Vp(value);
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
function Ga(e, t = false) {
  const n = {};
  for (const [o, r] of Object.entries(e ?? {})) {
    const s = Hp(r, t);

    if (s) {
      (n[o] = s);
    }
  }
  return n;
}
function Vp(e) {
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
function $t() {
  const e = zr();
  return zi(e).getCurrentScope();
}
function Mt() {
  const e = zr();
  return zi(e).getIsolationScope();
}
function Wp() {
  return to("globalScope", () => new xt());
}
function Iu(...e) {
  const t = zr();
  const n = zi(t);
  if (e.length === 2) {
    const [o, r] = e;
    return o ? n.withSetScope(o, r) : n.withScope(r);
  }
  return n.withScope(e[0]);
}
function Be() {
  return $t().getClient();
}
function jp(e) {
  const { traceId, parentSpanId, propagationSpanId } = e.getPropagationContext();
  const s = { trace_id: traceId, span_id: propagationSpanId || ku() };

  if (parentSpanId) {
    (s.parent_span_id = parentSpanId);
  }

  return s;
}
const zp = "sentry.source";
const qp = "sentry.sample_rate";
const Gp = "sentry.previous_trace_sample_rate";
const Ru = "sentry.op";
const Yp = "sentry.origin";
const Au = "sentry.profile_id";
const Lu = "sentry.exclusive_time";
const Kp = "gen_ai.conversation.id";
const Xp = 0;
const Qp = 1;
const Zp = "_sentryScope";
const Jp = "_sentryIsolationScope";
function oi(e) {
  const t = e;
  return { scope: t[Zp], isolationScope: Nu(t[Jp]) };
}
const Ya = "sentry-";
function eh(e) {
  const t = th(e);
  if (!t) {
    return;
  }
  const n = Object.entries(t).reduce((o, [r, s]) => {
    if (r.startsWith(Ya)) {
      const a = r.slice(Ya.length);
      o[a] = s;
    }
    return o;
  }, {});
  if (Object.keys(n).length > 0) {
    return n;
  }
}
function th(e) {
  if (!(!e || (!zt(e) && !Array.isArray(e)))) {
    return Array.isArray(e)
      ? e.reduce((t, n) => {
      const o = Ka(n);

      Object.entries(o).forEach(([r, s]) => {
        t[r] = s;
      });

      return t;
    }, {})
      : Ka(e);
  }
}
function Ka(e) {
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
const nh = /^o(\d+)\./;

const oh =
  /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;

function rh(e) {
  return e === "http" || e === "https";
}
function so(e, t = false) {
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
function sh(e) {
  const t = oh.exec(e);
  if (!t) {
    no(() => {
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

  return Pu({
    host: s,
    pass: r,
    path: l,
    projectId: u,
    port: a,
    protocol: n,
    publicKey: o,
  });
}
function Pu(e) {
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
function ih(e) {
  if (!ee) {
    return true;
  }
  const { port, projectId, protocol } = e;
  return ["protocol", "publicKey", "host", "projectId"].find(a => e[a] ? false : (Y.error(`Invalid Sentry Dsn: ${a} missing`), true)
  )
    ? false
    : projectId.match(/^\d+$/)
    ? rh(protocol)
      ? port && isNaN(parseInt(port, 10))
        ? (Y.error(`Invalid Sentry Dsn: Invalid port ${port}`), false)
        : true
      : (Y.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`), false)
    : (Y.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`), false);
}
function ah(e) {
  return e.match(nh)?.[1];
}
function ch(e) {
  const t = e.getOptions();
  const { host } = e.getDsn() || {};
  let o;

  if (t.orgId) {
    (o = String(t.orgId));
  } else if (host) {
    (o = ah(host));
  }

  return o;
}
function Ou(e) {
  const t = typeof e == "string" ? sh(e) : Pu(e);
  if (!(!t || !ih(t))) {
    return t;
  }
}
function lh(e) {
  if (typeof e == "boolean") {
    return Number(e);
  }
  const t = typeof e == "string" ? parseFloat(e) : e;
  if (!(typeof t != "number" || isNaN(t) || t < 0 || t > 1)) {
    return t;
  }
}
const xu = 1;
function uh(e) {
  const { spanId, traceId, isRemote } = e.spanContext();
  const r = isRemote ? spanId : Xr(e).parent_span_id;
  const s = oi(e).scope;
  const a = isRemote ? s?.getPropagationContext().propagationSpanId || ku() : spanId;
  return { parent_span_id: r, span_id: a, trace_id: traceId };
}
function dh(e) {
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
        sampled: o === xu,
        attributes: s,
        ...r
      })
    );
  }
}
function Qa(e) {
  if (typeof e == "number") {
    return Za(e);
  }

  if (Array.isArray(e)) {
    return e[0] + e[1] / 1000000000/* 1e9 */;
  }

  if (e instanceof Date) {
    return Za(e.getTime());
  }

  return qt();
}
function Za(e) {
  return e > 9999999999 ? e / 1000/* 1e3 */ : e;
}
function Xr(e) {
  if (mh(e)) {
    return e.getSpanJSON();
  }
  const { spanId, traceId } = e.spanContext();
  if (hh(e)) {
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
      parent_span_id: fh(e),
      start_timestamp: Qa(startTime),
      timestamp: Qa(endTime) || undefined,
      status: _h(status),
      op: attributes[Ru],
      origin: attributes[Yp],
      links: dh(links),
    };
  }
  return { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
}
function fh(e) {
  return "parentSpanId" in e
    ? e.parentSpanId
    : "parentSpanContext" in e
    ? e.parentSpanContext?.spanId
    : undefined;
}
function ph(e) {
  return {
    ...e,
    attributes: Ga(e.attributes),
    links: e.links?.map(t => ({
      ...t,
      attributes: Ga(t.attributes)
    })),
  };
}
function hh(e) {
  const t = e;
  return (
    !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
  );
}
function mh(e) {
  return typeof e.getSpanJSON == "function";
}
function gh(e) {
  const { traceFlags } = e.spanContext();
  return traceFlags === xu;
}
function _h(e) {
  if (!(!e || e.code === Xp)) {
    return e.code === Qp ? "ok" : e.message || "internal_error";
  }
}
const vh = "_sentryRootSpan";
const $u = yh;
function yh(e) {
  return e[vh] || e;
}
function Ja() {
  if (!Xa) {
    no(() => {
        console.warn(
          "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`."
        );
      });

    (Xa = true);
  }
}
function ec(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const t = e || Be()?.getOptions();
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler);
}
function tc(e) {
  Y.log(
    `Ignoring span ${e.op} - ${e.description} because it matches \`ignoreSpans\`.`
  );
}
function nc(e, t) {
  if (!t?.length) {
    return false;
  }
  for (const n of t) {
    if (Eh(n)) {
      if (e.description && Io(e.description, n)) {
        if (ee) {
          tc(e);
        }

        return true;
      }
      continue;
    }
    const o = !!n.attributes && Object.keys(n.attributes).length > 0;
    if (!n.name && !n.op && !o) {
      continue;
    }
    const r = n.name ? e.description && Io(e.description, n.name) : true;
    const s = n.op ? e.op && Io(e.op, n.op) : true;

    const a = n.attributes
      ? Object.entries(n.attributes).every(([c, l]) => wh(e.attributes?.[c], l)
        )
      : true;

    if (r && s && a) {
      if (ee) {
        tc(e);
      }

      return true;
    }
  }
  return false;
}
function wh(e, t) {
  return typeof e == "string" && (typeof t == "string" || t instanceof RegExp)
    ? Io(e, t)
    : Array.isArray(e) && Array.isArray(t)
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e === t;
}
function bh(e, t) {
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
function Eh(e) {
  return typeof e == "string" || e instanceof RegExp;
}
const Sh = Symbol.for("sentry.nonRecordingSpan");
function Ch(e) {
  return !!e && e[Sh] === true;
}
const qi = "production";
const kh = "_frozenDsc";
function Mu(e, t) {
  const n = t.getOptions();
  const { publicKey } = t.getDsn() || {};

  const r = {
    environment: n.environment || qi,
    release: n.release,
    public_key: publicKey,
    trace_id: e,
    org_id: ch(t),
  };

  t.emit("createDsc", r);
  return r;
}
function Du(e, t) {
  const n = t.getPropagationContext();
  return n.dsc || Mu(n.traceId, e);
}
function Nh(e) {
  const t = Be();
  if (!t) {
    return {};
  }
  const n = $u(e);

  const {
    data,
    description
  } = Xr(n);

  const s = n.spanContext().traceState;
  const a = s?.get("sentry.sample_rate") ?? data[qp] ?? data[Gp];
  function c(v) {
    if ((typeof a == "number" || typeof a == "string")) {
      (v.sample_rate = `${a}`);
    }

    return v;
  }
  const n_kh = n[kh];
  if (n_kh) {
    return c(n_kh);
  }
  const u = Ch(n);
  const d = u && n.dropReason === "ignored";
  if (u && (!ec(t.getOptions()) || d)) {
    const v = oi(n).scope;
    if (v) {
      const g = { ...Du(t, v) };

      if (d) {
        (g.sampled = "false");
      }

      return c(g);
    }
  }
  const p = s?.get("sentry.dsc");
  const f = p && eh(p);
  if (f) {
    return c(f);
  }
  const h = Mu(e.spanContext().traceId, t);
  const m = data[zp] ?? data["sentry.segment.name.source"];

  if (m !== "url" && description) {
    (h.transaction = description);
  }

  if (ec()) {
    (h.sampled = String(gh(n)));

    (h.sample_rand = s?.get("sentry.sample_rand") ??
    oi(n).scope?.getPropagationContext().sampleRand.toString());
  }

  c(h);
  t.emit("createDsc", h, n);
  return h;
}
function Th(e) {
  return !!e && typeof e == "function" && "_streamed" in e && !!e._streamed;
}
function io(e, t = []) {
  return [e, t];
}
function oc(e, t) {
  const [n, o] = e;
  return [n, [...o, t]];
}
function ri(e, t) {
  const [, n] = e;
  for (const o of n) {
    const r = o[0].type;
    if (t(o, r)) {
      return true;
    }
  }
  return false;
}
function Ih(e, t) {
  return ri(e, (n, o) => t.includes(o));
}
function si(e) {
  const t = qr(fe);
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e);
}
function Rh(e) {
  const [t, n] = e;
  let o = JSON.stringify(t);
  function r(s) {
    if (typeof o == "string") {
      (o = typeof s == "string" ? o + s : [si(o), s]);
    } else {
      o.push(typeof s == "string" ? si(s) : s);
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
        l = JSON.stringify(Vt(c));
      }
      r(l);
    }
  }
  return typeof o == "string" ? o : Ah(o);
}
function Ah(e) {
  const t = e.reduce((r, s) => r + s.length, 0);

  const n = new Uint8Array(t);
  let o = 0;
  for (const r of e) {
    n.set(r, o);
    (o += r.length);
  }
  return n;
}
function Lh(e) {
  const t = typeof e.data == "string" ? si(e.data) : e.data;
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
const Uu = {
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
function Ph(e) {
  return e in Uu;
}
function rc(e) {
  return Ph(e) ? Uu[e] : e;
}
function Fu(e) {
  if (!e?.sdk) {
    return;
  }
  const { name, version } = e.sdk;
  return { name: name, version: version };
}
function Oh(e, t, n, o) {
  const r = e.sdkProcessingMetadata?.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date(ro()).toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && o && { dsn: so(o) }),
    ...(r && { trace: r }),
  };
}
function xh(e, t) {
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
function $h(e, t, n, o) {
  const r = Fu(n);

  const s = {
    sent_at: new Date(ro()).toISOString(),
    ...(r && { sdk: r }),
    ...(!!o && t && { dsn: so(t) }),
  };

  const a =
    "aggregates" in e
      ? [{ type: "sessions" }, e]
      : [{ type: "session" }, e.toJSON()];

  return io(s, [a]);
}
function Mh(e, t, n, o) {
  const r = Fu(n);
  const s = e.type && e.type !== "replay_event" ? e.type : "event";
  xh(e, n?.sdk);
  const a = Oh(e, r, o, t);
  delete e.sdkProcessingMetadata;
  return io(a, [[{ type: s }, e]]);
}
function Dh(e) {
  return e.getOptions().traceLifecycle === "stream";
}
function Uh(e, t) {
  const {
    fingerprint,
    span,
    breadcrumbs,
    sdkProcessingMetadata,
  } = t;
  Fh(e, t);

  if (span) {
    Vh(e, span);
  }

  Wh(e, fingerprint);
  Bh(e, breadcrumbs);
  Hh(e, sdkProcessingMetadata);
}
function sc(e, t) {
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
  lo(e, "extra", extra);
  lo(e, "tags", tags);
  lo(e, "attributes", attributes);
  lo(e, "user", user);
  lo(e, "contexts", contexts);
  (e.sdkProcessingMetadata = zo(e.sdkProcessingMetadata, sdkProcessingMetadata, 2));

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
function lo(e, t, n) {
  e[t] = zo(e[t], n, 1);
}
function Bu(e, t) {
  const n = Wp().getScopeData();

  if (e) {
    sc(n, e.getScopeData());
  }

  if (t) {
    sc(n, t.getScopeData());
  }

  return n;
}
function Fh(e, t) {
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
function Bh(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : undefined;
}
function Hh(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function Vh(e, t) {
  (e.contexts = { trace: uh(t), ...e.contexts });

  (e.sdkProcessingMetadata = {
      dynamicSamplingContext: Nh(t),
      ...e.sdkProcessingMetadata,
    });

  const n = $u(t);
  const o = Xr(n).description;

  if (o && !e.transaction && e.type === "transaction") {
    (e.transaction = o);
  }
}
function Wh(e, t) {
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
const jh = "url.full";
function Hu(e, t) {
  const n = e.attributes ?? (e.attributes = {});
  Object.entries(t).forEach(([o, r]) => {
    if (r != null && !(o in n)) {
      (n[o] = r);
    }
  });
}
const hs = 0;
const ic = 1;
const ac = 2;
function qo(e) {
  return new xo((t) => {
    t(e);
  });
}
function Vu(e) {
  return new xo((t, n) => {
    n(e);
  });
}
class xo {
  constructor(t) {
    (this._state = hs);
    (this._handlers = []);
    this._runExecutor(t);
  }
  then(t, n) {
    return new xo((o, r) => {
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
    return new xo((n, o) => {
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
    if (this._state === hs) {
      return;
    }
    const t = this._handlers.slice();
    (this._handlers = []);

    t.forEach((n) => {
      if (!n[0]) {
        this._state === ic && n[1](this._value);
        this._state === ac && n[2](this._value);
        (n[0] = true);
      }
    });
  }
  _runExecutor(t) {
    const n = (s, a) => {
        if (this._state === hs) {
          if (Vo(a)) {
            a.then(o, r);
            return;
          }
          (this._state = s);
          (this._value = a);
          this._executeHandlers();
        }
      };

    const o = (s) => {
      n(ic, s);
    };

    const r = (s) => {
      n(ac, s);
    };

    try {
      t(o, r);
    } catch (s) {
      r(s);
    }
  }
}
function zh(e, t, n, o = 0) {
  try {
    const r = ii(t, n, e, o);
    return Vo(r) ? r : qo(r);
  } catch (r) {
    return Vu(r);
  }
}
function ii(e, t, n, o) {
  const n_o = n[o];
  if (!e || !n_o) {
    return e;
  }
  const s = n_o({ ...e }, t);

  if (ee && s === null) {
    Y.log(`Event processor "${n_o.id || "?"}" dropped event`);
  }

  return Vo(s) ? s.then(a => ii(a, t, n, o + 1)) : ii(s, t, n, o + 1);
}
let fn;
let cc;
let lc;
let Xt;
function qh(e) {
  const {
    _sentryDebugIds,
    _debugIds
  } = fe;

  if (!_sentryDebugIds && !_debugIds) {
    return {};
  }
  const o = _sentryDebugIds ? Object.keys(_sentryDebugIds) : [];
  const r = _debugIds ? Object.keys(_debugIds) : [];
  if (Xt && o.length === cc && r.length === lc) {
    return Xt;
  }
  (cc = o.length);
  (lc = r.length);
  (Xt = {});

  if (!fn) {
    (fn = {});
  }

  const s = (a, c) => {
    for (const l of a) {
      const c_l = c[l];
      const d = fn?.[l];
      if (d && Xt && c_l) {
        (Xt[d[0]] = c_l);

        if (fn) {
          (fn[l] = [d[0], c_l]);
        }
      } else if (c_l) {
        const p = e(l);
        for (let f = p.length - 1; f >= 0; f--) {
          const m = p[f]?.filename;
          if (m && Xt && fn) {
            (Xt[m] = c_l);
            (fn[l] = [m, c_l]);
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

  return Xt;
}
function Gh(e, t, n, o, r, s) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000/* 1e3 */ } = e;

  const l = {
    ...t,
    event_id: t.event_id || n.event_id || dt(),
    timestamp: t.timestamp || jo(),
  };

  const u = n.integrations || e.integrations.map(g => g.name);

  Yh(l, e);
  Qh(l, u);

  if (r) {
    r.emit("applyFrameMetadata", t);
  }

  if (t.type === undefined) {
    Kh(l, e.stackParser);
  }

  const d = Jh(o, n.captureContext);

  if (n.mechanism) {
    Nn(l, n.mechanism);
  }

  const p = r ? r.getEventProcessors() : [];
  const f = Bu(s, d);
  const h = [...(n.attachments || []), ...f.attachments];

  if (h.length) {
    (n.attachments = h);
  }

  Uh(l, f);
  const m = [...p, ...f.eventProcessors];
  return (n.data && n.data.__sentry__ === true ? qo(l) : zh(m, l, n)).then(
    g => {
      if (g) {
        Xh(g);
      }

      return typeof normalizeDepth == "number" && normalizeDepth > 0 ? Zh(g, normalizeDepth, normalizeMaxBreadth) : g;
    }
  );
}
function Yh(e, t) {
  const { environment, release, dist, maxValueLength } = t;
  (e.environment = e.environment || environment || qi);

  if (!e.release && release) {
    (e.release = release);
  }

  if (!e.dist && dist) {
    (e.dist = dist);
  }

  const e_request = e.request;

  if (e_request?.url && maxValueLength) {
    (e_request.url = ei(e_request.url, maxValueLength));
  }

  if (maxValueLength) {
    e.exception?.values?.forEach((c) => {
      if (c.value) {
        (c.value = ei(c.value, maxValueLength));
      }
    });
  }
}
function Kh(e, t) {
  const n = qh(t);
  e.exception?.values?.forEach((o) => {
    o.stacktrace?.frames?.forEach((r) => {
      if (r.filename) {
        (r.debug_id = n[r.filename]);
      }
    });
  });
}
function Xh(e) {
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
function Qh(e, t) {
  if (t.length > 0) {
    (e.sdk = e.sdk || {});
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]);
  }
}
function Zh(e, t, n) {
  if (!e) {
    return null;
  }
  const o = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(r => ({
        ...r,
        ...(r.data && { data: Vt(r.data, t, n) })
      })),
    }),
    ...(e.user && { user: Vt(e.user, t, n) }),
    ...(e.contexts && { contexts: Vt(e.contexts, t, n) }),
    ...(e.extra && { extra: Vt(e.extra, t, n) }),
  };

  if (e.contexts?.trace &&
    o.contexts) {
    (o.contexts.trace = e.contexts.trace);

    e.contexts.trace.data &&
      (o.contexts.trace.data = Vt(e.contexts.trace.data, t, n));
  }

  if (e.spans) {
    (o.spans = e.spans.map(r => ({
      ...r,
      ...(r.data && { data: Vt(r.data, t, n) })
    })));
  }

  if (e.contexts?.flags &&
    o.contexts) {
    (o.contexts.flags = Vt(e.contexts.flags, 3, n));
  }

  return o;
}
function Jh(e, t) {
  if (!t) {
    return e;
  }
  const n = e ? e.clone() : new xt();
  n.update(t);
  return n;
}
function em(e) {
  if (e) {
    return tm(e) ? { captureContext: e } : om(e) ? { captureContext: e } : e;
  }
}
function tm(e) {
  return e instanceof xt || typeof e == "function";
}
const nm = [
  "user",
  "level",
  "extra",
  "contexts",
  "tags",
  "fingerprint",
  "propagationContext",
];
function om(e) {
  return Object.keys(e).some(t => nm.includes(t));
}
function Wu(e, t) {
  return $t().captureException(e, em(t));
}
function ju(e, t) {
  return $t().captureEvent(e, t);
}
function rm(e, t) {
  Mt().setContext(e, t);
}
function uc(e) {
  Mt().setUser(e);
}
function sm() {
  return Mt().lastEventId();
}
function dc(e) {
  const t = Mt();
  const { user } = Bu(t, $t());
  const { userAgent } = fe.navigator || {};
  const r = Tp({ user: user, ...(userAgent && { userAgent: userAgent }), ...e });
  const s = t.getSession();

  if (s?.status === "ok") {
    Kn(s, { status: "exited" });
  }

  zu();
  t.setSession(r);
  return r;
}
function zu() {
  const e = Mt();
  const n = $t().getSession() || e.getSession();

  if (n) {
    Ip(n);
  }

  qu();
  e.setSession();
}
function qu() {
  const e = Mt();
  const t = Be();
  const n = e.getSession();

  if (n && t) {
    t.captureSession(n);
  }
}
function ms(e = false) {
  if (e) {
    zu();
    return;
  }
  qu();
}
function Gu(e) {
  if (typeof e == "object" && typeof e.unref == "function") {
    e.unref();
  }

  return e;
}
const im = "7";
function Yu(e) {
  const t = e.protocol ? `${e.protocol}:` : "";
  const n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function am(e) {
  return `${Yu(e)}${e.projectId}/envelope/`;
}
function cm(e, t) {
  const n = { sentry_version: im };

  if (e.publicKey) {
    (n.sentry_key = e.publicKey);
  }

  if (t) {
    (n.sentry_client = `${t.name}/${t.version}`);
  }

  return new URLSearchParams(n).toString();
}
function lm(e, t, n) {
  return t || `${am(e)}?${cm(e, n)}`;
}
function um(e, t) {
  const n = Ou(e);
  if (!n) {
    return "";
  }
  const o = `${Yu(n)}embed/error-page/`;
  let r = `dsn=${so(n)}`;
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
const fc = [];
function dm(e) {
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
function fm(e) {
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
  return dm(o);
}
function pm(e, t) {
  const n = {};

  t.forEach((o) => {
    if (o?.beforeSetup) {
      o.beforeSetup(e);
    }
  });

  t.forEach((o) => {
    if (o) {
      Ku(e, o, n);
    }
  });

  return n;
}
function pc(e, t) {
  for (const n of t) {
    if (n?.afterAllSetup) {
      n.afterAllSetup(e);
    }
  }
}
function Ku(e, t, n) {
  if (n[t.name]) {
    if (ee) {
      Y.log(`Integration skipped because it was already installed: ${t.name}`);
    }

    return;
  }
  (n[t.name] = t);

  if (!fc.includes(t.name) &&
    typeof t.setupOnce == "function") {
    t.setupOnce();
    fc.push(t.name);
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

  if (ee) {
    Y.log(`Integration installed: ${t.name}`);
  }
}
function hm() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function mm() {
  return "npm";
}
function gm() {
  return (!hm() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) ===
    "[object process]");
}
function Gi() {
  return typeof window !== "undefined" && (!gm() || _m());
}
function _m() {
  return fe.process?.type === "renderer";
}
function vm(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "log",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.log+json",
    },
    {
      version: 2,
      ...(Gi() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function ym(e, t, n, o, r) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && o) {
    (s.dsn = so(o));
  }

  return io(s, [vm(e, r)]);
}
function wm(e, t) {
  const n = t ?? bm(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const o = e.getOptions();

  const r = ym(
    n,
    o._metadata,
    o.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  Xu().set(e, []);
  e.emit("flushLogs");
  e.sendEnvelope(r);
}
function bm(e) {
  return Xu().get(e);
}
function Xu() {
  return to("clientToLogBufferMap", () => new WeakMap());
}
function Em(e, t) {
  const n = t ? "auto" : "never";
  return [
    {
      type: "trace_metric",
      item_count: e.length,
      content_type: "application/vnd.sentry.items.trace-metric+json",
    },
    {
      version: 2,
      ...(Gi() && { ingest_settings: { infer_ip: n, infer_user_agent: n } }),
      items: e,
    },
  ];
}
function Sm(e, t, n, o, r) {
  const s = {};

  if (t?.sdk) {
    (s.sdk = { name: t.sdk.name, version: t.sdk.version });
  }

  if (n && o) {
    (s.dsn = so(o));
  }

  return io(s, [Em(e, r)]);
}
function Cm(e, t) {
  const n = t ?? km(e) ?? [];
  if (n.length === 0) {
    return;
  }
  const o = e.getOptions();

  const r = Sm(
    n,
    o._metadata,
    o.tunnel,
    e.getDsn(),
    e.getDataCollectionOptions().userInfo
  );

  Qu().set(e, []);
  e.emit("flushMetrics");
  e.sendEnvelope(r);
}
function km(e) {
  return Qu().get(e);
}
function Qu() {
  return to("clientToMetricBufferMap", () => new WeakMap());
}
function Nm(e) {
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
  return ph(t);
}
function Tm(e, t) {
  if (e.type !== "transaction" ||
  !e.spans?.length ||
  !e.sdkProcessingMetadata?.hasGenAiSpans ||
  t.getOptions().streamGenAiSpans === false ||
  Dh(t)) {
    return;
  }
  const n = [];
  const o = [];
  for (const s of e.spans) {
    if (s.op?.startsWith("gen_ai.")) {
      n.push(Nm(s));
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
      ...(Gi() && { ingest_settings: { infer_ip: r, infer_user_agent: r } }),
      items: n,
    },
  ];
}
const Yi = Symbol.for("SentryBufferFullError");
function Ki(e = 100) {
  const t = new Set();
  function n() {
    return t.size < e;
  }
  function o(a) {
    t.delete(a);
  }
  function r(a) {
    if (!n()) {
      return Vu(Yi);
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
      return qo(true);
    }
    const c = Promise.allSettled(Array.from(t)).then(() => true);
    if (!a) {
      return c;
    }
    const l = [c, new Promise(u => Gu(setTimeout(() => u(false), a)))];
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
const Im = 60 * 1000/* 1e3 */;
function Rm(e, t = ro()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) {
    return n * 1000/* 1e3 */;
  }
  const o = Date.parse(`${e}`);
  return isNaN(o) ? Im : o - t;
}
function Am(e, t) {
  return e[t] || e.all || 0;
}
function Lm(e, t, n = ro()) {
  return Am(e, t) > n;
}
function Pm(e, { statusCode: t, headers: n }, o = ro()) {
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
      (r.all = o + Rm(a, o));
    } else if (t === 429) {
      (r.all = o + 60 * 1000/* 1e3 */);
    }
  }
  return r;
}
const Zu = 64;
function Om(e, t, n = Ki(e.bufferSize || Zu)) {
  let o = {};
  const r = a => n.drain(a);
  function s(a) {
    const c = [];

    ri(a, (p, f) => {
      const h = rc(f);

      if (Lm(o, h)) {
        e.recordDroppedEvent("ratelimit_backoff", h);
      } else {
        c.push(p);
      }
    });

    if (c.length === 0) {
      return Promise.resolve({});
    }

    const l = io(a[0], c);

    const u = (p) => {
      if (Ih(l, ["client_report"])) {
        if (ee) {
          Y.warn(
            `Dropping client report. Will not send outcomes (reason: ${p}).`
          );
        }

        return;
      }
      ri(l, (f, h) => {
        e.recordDroppedEvent(p, rc(h));
      });
    };

    const d = () => t({ body: Rh(l) }).then(
      p => p.statusCode === 413
        ? (ee &&
            Y.error(
              "Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."
            ),
          u("send_error"),
          p)
        : (ee &&
            p.statusCode !== undefined &&
            (p.statusCode < 200 || p.statusCode >= 300) &&
            Y.warn(
              `Sentry responded with status code ${p.statusCode} to sent event.`
            ),
          (o = Pm(o, p)),
          p),
      (p) => {
        u("network_error");

        if (ee) {
          Y.error("Encountered error running transport request:", p);
        }

        throw p;
      }
    );

    return n.add(d).then(
      p => p,
      (p) => {
        if (p === Yi) {
          if (ee) {
            Y.error("Skipped sending event because buffer is full.");
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
function xm(e, t, n) {
  const o = [
    { type: "client_report" },
    { timestamp: jo(), discarded_events: e },
  ];
  return io(t ? { dsn: t } : {}, [o]);
}
function Ju(e) {
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
function $m(e) {
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
    profile_id: data?.[Au],
    exclusive_time: data?.[Lu],
    measurements: e.measurements,
    is_segment: true,
  };
}
function Mm(e) {
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
          ...(e.profile_id && { [Au]: e.profile_id }),
          ...(e.exclusive_time && { [Lu]: e.exclusive_time }),
        },
      },
    },
    measurements: e.measurements,
  };
}
const er = ["forwarded", "-ip", "remote-", "via", "-user"];
function Dm(e) {
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
        cookies: { deny: er },
        httpHeaders: { request: { deny: er }, response: { deny: er } },
        httpBodies: [],
        urlQueryParams: { deny: er },
        graphQL: { document: true, variables: true },
        genAI: { inputs: false, outputs: false },
        databaseQueryData: false,
        stackFrameVariables: true,
        frameContextLines: 7,
      };
}
const Um = {
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
function Fm(e) {
  const t = e.dataCollection != null ? Um : Dm(e.sendDefaultPii);
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
const hc = "Not capturing exception because it's already been captured.";
const mc = "Discarded session because of missing or non-string release";
const ed = Symbol.for("SentryInternalError");
const td = Symbol.for("SentryDoNotSendEventError");
const Bm = 5000/* 5e3 */;
function yr(e) {
  return { message: e, [ed]: true };
}
function gs(e) {
  return { message: e, [td]: true };
}
function gc(e) {
  return Gr(e) && ed in e;
}
function _c(e) {
  return Gr(e) && td in e;
}
function vc(e, t, n, o, r) {
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
      const u = e.getOptions()._flushInterval ?? Bm;

      if (u > 0) {
        (c = true);

        (a = Gu(
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
class Hm {
  constructor(t) {
    (this._options = t);
    (this._integrations = {});
    (this._numProcessing = 0);
    (this._outcomes = {});
    (this._hooks = {});
    (this._eventProcessors = []);
    (this._promiseBuffer = Ki(t.transportOptions?.bufferSize ?? Zu));
    (this._dataCollection = Fm(t));

    if (t.dsn) {
      (this._dsn = Ou(t.dsn));
    } else if (ee) {
      Y.warn("No DSN provided, client will not send events.");
    }

    if (this._dsn) {
      const o = lm(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : undefined);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: o,
      });
    }

    (this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs ?? true);

    if (this._options.enableLogs) {
      vc(this, "afterCaptureLog", "flushLogs", zm, wm);
    }

    if ((this._options.enableMetrics ??
      this._options._experiments?.enableMetrics ?? true)) {
      vc(this, "afterCaptureMetric", "flushMetrics", jm, Cm);
    }
  }
  captureException(t, n, o) {
    const r = dt();
    if (Ba(t)) {
      if (ee) {
        Y.log(hc);
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
    const s = { event_id: dt(), ...o };
    const a = Vi(t) ? t : String(t);
    const c = Ho(t);
    const l = c ? this.eventFromMessage(a, n, s) : this.eventFromException(t, s);

    this._process(
      () => l.then(u => this._captureEvent(u, s, r)),
      c ? "unknown" : "error"
    );

    return s.event_id;
  }
  captureEvent(t, n, o) {
    const r = dt();
    if (n?.originalException && Ba(n.originalException)) {
      if (ee) {
        Y.log(hc);
      }

      return r;
    }
    const s = { event_id: r, ...n };

    const {
      capturedSpanScope,
      capturedSpanIsolationScope
    } = t.sdkProcessingMetadata || {};

    const u = yc(t.type);

    this._process(() => this._captureEvent(t, s, capturedSpanScope || o, capturedSpanIsolationScope), u);

    return s.event_id;
  }
  captureSession(t) {
    this.sendSession(t);
    Kn(t, { init: false });
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

    Ku(this, t, this._integrations);

    if (!n) {
      pc(this, [t]);
    }
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    const o = Tm(t, this);
    let r = Mh(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) {
      r = oc(r, Lh(s));
    }

    if (o) {
      (r = oc(r, o));
    }

    this.sendEnvelope(r).then(s => this.emit("afterSendEvent", t, s));
  }
  sendSession(t) {
    const { release, environment = qi } = this._options;
    if ("aggregates" in t) {
      const s = t.attrs || {};
      if (!s.release && !release) {
        if (ee) {
          Y.warn(mc);
        }

        return;
      }
      (s.release = s.release || release);
      (s.environment = s.environment || environment);
      (t.attrs = s);
    } else {
      if (!t.release && !release) {
        if (ee) {
          Y.warn(mc);
        }

        return;
      }
      (t.release = t.release || release);
      (t.environment = t.environment || environment);
    }
    this.emit("beforeSendSession", t);
    const r = $h(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(r);
  }
  recordDroppedEvent(t, n, o = 1) {
    if (this._options.sendClientReports) {
      const r = `${t}:${n}`;

      if (ee) {
        Y.log(`Recording outcome: "${r}"${o > 1 ? ` (${o} times)` : ""}`);
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
        if (ee) {
          Y.error("Error while sending envelope:", n);
        }

        return {};
      }
    }

    if (ee) {
      Y.error("Transport disabled");
    }

    return {};
  }
  registerCleanup(t) {}
  dispose() {}
  _setupIntegrations() {
    const { integrations } = this._options;
    (this._integrations = pm(this, integrations));
    pc(this, integrations);
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
      Kn(t, {
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

    return Gh(s, t, n, o, this, r).then((c) => {
      if (c === null) {
        return c;
      }
      this.emit("postprocessEvent", c, n);

      (c.contexts = {
          trace: { ...c.contexts?.trace, ...jp(o) },
          ...c.contexts,
        });

      const l = Du(this, o);

      (c.sdkProcessingMetadata = {
        dynamicSamplingContext: l,
        ...c.sdkProcessingMetadata,
      });

      return c;
    });
  }
  _captureEvent(t, n = {}, o = $t(), r = Mt()) {
    if (ee &&
      ai(t)) {
      Y.log(`Captured error event \`${Ju(t)[0] || "<unknown>"}\``);
    }

    return this._processEvent(t, n, o, r).then(
      s => s.event_id,
      (s) => {
        if (ee) {
          if (_c(s)) {
            Y.log(s.message);
          } else if (gc(s)) {
            Y.warn(s.message);
          } else {
            Y.warn(s);
          }
        }
      }
    );
  }
  _processEvent(t, n, o, r) {
    const s = this.getOptions();
    const { sampleRate } = s;
    const c = nd(t);
    const l = ai(t);
    const d = `before send for type \`${t.type || "error"}\``;
    const p = typeof sampleRate === "undefined" ? undefined : lh(sampleRate);
    const f = yc(t.type);
    return this._prepareEvent(t, n, o, r)
      .then((h) => {
        if (h === null) {
          this.recordDroppedEvent("event_processor", f);
          throw gs("An event processor returned `null`, will not send event.");
        }
        if (n.data?.__sentry__ === true) {
          return h;
        }
        const _ = Wm(this, s, h, n);
        return Vm(_, d);
      })
      .then((h) => {
      if (h === null) {
        this.recordDroppedEvent("before_send", f);

        if (c) {
          const g = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", g);
        }

        throw gs(`${d} returned \`null\`, will not send event.`);
      }
      const m = o.getSession() || r.getSession();

      if (l && m) {
        this._updateSessionFromEvent(m, h);
      }

      if (l && typeof p == "number" && Or() > p) {
        this.recordDroppedEvent("sample_rate", "error");

        throw gs(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        );
      }

      if (c) {
        const v = h.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const g = h.spans ? h.spans.length : 0;
        const E = v - g;

        if (E > 0) {
          this.recordDroppedEvent("before_send", "span", E);
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
        throw _c(h) || gc(h)
          ? h
          : (this.captureException(h, {
              mechanism: { handled: false, type: "internal" },
              data: { __sentry__: true },
              originalException: h,
            }),
            yr(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
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

        if (o === Yi) {
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
    if (ee) {
      Y.log("Flushing outcomes...");
    }

    const t = this._clearOutcomes();
    if (t.length === 0) {
      if (ee) {
        Y.log("No outcomes to send");
      }

      return;
    }
    if (!this._dsn) {
      if (ee) {
        Y.log("No dsn provided, will not send outcomes");
      }

      return;
    }

    if (ee) {
      Y.log("Sending outcomes:", t);
    }

    const n = xm(t, this._options.tunnel && so(this._dsn));
    this.sendEnvelope(n);
  }
}
function yc(e) {
  return e === "replay_event" ? "replay" : e || "error";
}
function Vm(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (Vo(e)) {
    return e.then(
      (o) => {
        if (!Oo(o) && o !== null) {
          throw yr(n);
        }
        return o;
      },
      (o) => {
        throw yr(`${t} rejected with ${o}`);
      }
    );
  }
  if (!Oo(e) && e !== null) {
    throw yr(n);
  }
  return e;
}
function Wm(e, t, n, o) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = t;
  const c = !Th(t.beforeSendSpan) && t.beforeSendSpan;
  let l = n;
  if (ai(l) && beforeSend) {
    return beforeSend(l, o);
  }
  if (nd(l)) {
    if (c || ignoreSpans) {
      const u = $m(l);
      if (ignoreSpans?.length &&
      nc({ description: u.description, op: u.op, attributes: u.data }, ignoreSpans)) {
        return null;
      }
      if (c) {
        const d = c(u);

        if (d) {
          (l = zo(n, Mm(d)));
        } else {
          Ja();
        }
      }
      if (l.spans) {
        const d = [];
        const l_spans = l.spans;
        for (const h of l_spans) {
          if (
            ignoreSpans?.length &&
            nc({ description: h.description, op: h.op, attributes: h.data }, ignoreSpans)
          ) {
            bh(l_spans, h);
            continue;
          }
          if (c) {
            const m = c(h);

            if (m) {
              d.push(m);
            } else {
              Ja();
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
function ai(e) {
  return e.type === undefined;
}
function nd(e) {
  return e.type === "transaction";
}
function jm(e) {
  let t = 0;

  if (e.name) {
    (t += e.name.length * 2);
  }

  (t += 8);
  return t + od(e.attributes);
}
function zm(e) {
  let t = 0;

  if (e.message) {
    (t += e.message.length * 2);
  }

  return t + od(e.attributes);
}
function od(e) {
  if (!e) {
    return 0;
  }
  let t = 0;

  Object.values(e).forEach((n) => {
    if (Array.isArray(n)) {
      (t += n.length * wc(n[0]));
    } else if (Ho(n)) {
      (t += wc(n));
    } else {
      (t += 100);
    }
  });

  return t;
}
function wc(e) {
  return typeof e == "string"
    ? e.length * 2
    : typeof e == "number"
    ? 8
    : typeof e == "boolean"
    ? 4
    : 0;
}
function qm(e, t) {
  if (t.debug === true) {
    if (ee) {
      Y.enable();
    } else {
      no(() => {
              console.warn(
                "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
              );
            });
    }
  }

  $t().update(t.initialScope);
  const o = new e(t);
  Gm(o);
  o.init();
  return o;
}
function Gm(e) {
  $t().setClient(e);
}
function _s(e) {
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
function Ym(e, t = true) {
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
function Km(e) {
  if ("aggregates" in e) {
    if (e.attrs?.ip_address === undefined) {
      (e.attrs = { ...e.attrs, ip_address: "{{auto}}" });
    }
  } else if (e.ipAddress === undefined) {
    (e.ipAddress = "{{auto}}");
  }
}
function rd(e, t, n = [t], o = "npm") {
  const r = ((e._metadata = e._metadata || {}).sdk = e._metadata.sdk || {});

  if (!r.name) {
    (r.name = `sentry.javascript.${t}`);

    (r.packages = n.map(s => ({
      name: `${o}:@sentry/${s}`,
      version: kn
    })));

    (r.version = kn);
  }
}
const Xm = 100;
function Ln(e, t) {
  const n = Be();
  const o = Mt();
  if (!n) {
    return;
  }
  const { beforeBreadcrumb = null, maxBreadcrumbs = Xm } = n.getOptions();
  if (maxBreadcrumbs <= 0) {
    return;
  }
  const c = { timestamp: jo(), ...e };

  const l = beforeBreadcrumb ? no(() => beforeBreadcrumb(c, t)) : c;

  if (l !== null) {
    n.emit && n.emit("beforeAddBreadcrumb", l, t);
    o.addBreadcrumb(l, maxBreadcrumbs);
  }
}
const Qm = "FunctionToString";
const bc = new WeakMap();

const Jm = () => ({
  name: Qm,

  setupOnce() {
    const e = Function.prototype.toString;
    try {
      Function.prototype.toString = function (...t) {
        const n = ji(this);
        let o;
        try {
          if (bc.has(Be()) && n !== undefined) {
            (o = n);
          }
        } catch {}
        return e.apply(o ?? this, t);
      };
    } catch {}
  },

  setup(e) {
    bc.set(e, true);
  }
});

const eg = [
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

const tg = "EventFilters";

const ng = (e = {}) => {
  let t;
  return {
    name: tg,
    setup(n) {
      const o = n.getOptions();
      t = Ec(e, o);
    },
    processEvent(n, o, r) {
      if (!t) {
        const s = r.getOptions();
        t = Ec(e, s);
      }
      return rg(n, t) ? null : n;
    },
  };
};

const og = (e = {}) => ({
  ...ng(e),
  name: "InboundFilters"
});

function Ec(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : eg),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
    ],
  };
}
function rg(e, t) {
  if (e.type) {
    if (e.type === "transaction" && ig(e, t.ignoreTransactions)) {
      if (ee) {
        Y.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${wn(e)}`);
      }

      return true;
    }
  } else {
    if (sg(e, t.ignoreErrors)) {
      if (ee) {
        Y.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${wn(e)}`);
      }

      return true;
    }
    if (ug(e)) {
      if (ee) {
        Y.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${wn(e)}`);
      }

      return true;
    }
    if (ag(e, t.denyUrls)) {
      if (ee) {
        Y.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${wn(e)}.
Url: ${xr(e)}`);
      }

      return true;
    }
    if (!cg(e, t.allowUrls)) {
      if (ee) {
        Y.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${wn(e)}.
Url: ${xr(e)}`);
      }

      return true;
    }
  }
  return false;
}
function sg(e, t) {
  return t?.length ? Ju(e).some(n => Wo(n, t)) : false;
}
function ig(e, t) {
  if (!t?.length) {
    return false;
  }
  const e_transaction = e.transaction;
  return e_transaction ? Wo(e_transaction, t) : false;
}
function ag(e, t) {
  if (!t?.length) {
    return false;
  }
  const n = xr(e);
  return n ? Wo(n, t) : false;
}
function cg(e, t) {
  if (!t?.length) {
    return true;
  }
  const n = xr(e);
  return n ? Wo(n, t) : true;
}
function lg(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const e_t = e[t];
    if (e_t && e_t.filename !== "<anonymous>" && e_t.filename !== "[native code]") {
      return e_t.filename || null;
    }
  }
  return null;
}
function xr(e) {
  try {
    const n = [...(e.exception?.values ?? [])]
      .reverse()
      .find(
        o => o.mechanism?.parent_id === undefined && o.stacktrace?.frames?.length
      )?.stacktrace?.frames;
    return n ? lg(n) : null;
  } catch {
    if (ee) {
      Y.error(`Cannot extract url for event ${wn(e)}`);
    }

    return null;
  }
}
function ug(e) {
  return e.exception?.values?.length
    ? !e.message &&
        !e.exception.values.some(
          t => t.stacktrace || (t.type && t.type !== "Error") || t.value
        )
    : false;
}
function dg(e, t, n, o, r, s) {
  if (!r.exception?.values || !s || !Ot(s.originalException)) {
    return;
  }
  const a =
    r.exception.values.length > 0
      ? r.exception.values[r.exception.values.length - 1]
      : undefined;

  if (a) {
    (r.exception.values = ci(
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
function ci(e, t, n, o, r, s, a, c) {
  if (s.length >= n + 1) {
    return s;
  }
  let l = [...s];
  if (Ot(o[r])) {
    Sc(a, c, o);
    const u = e(t, o[r]);
    const l_length = l.length;
    Cc(u, r, l_length, c);
    (l = ci(e, t, n, o[r], r, [u, ...l], u, l_length));
  }

  if (sd(o)) {
    o.errors.forEach((u, d) => {
      if (Ot(u)) {
        Sc(a, c, o);
        const p = e(t, u);
        const l_length = l.length;
        Cc(p, `errors[${d}]`, l_length, c);
        (l = ci(e, t, n, u, r, [p, ...l], p, l_length));
      }
    });
  }

  return l;
}
function sd(e) {
  return Array.isArray(e.errors);
}
function Sc(e, t, n) {
  e.mechanism = {
    handled: true,
    type: "auto.core.linked_errors",
    ...(sd(n) && { is_exception_group: true }),
    ...e.mechanism,
    exception_id: t,
  };
}
function Cc(e, t, n, o) {
  e.mechanism = {
    handled: true,
    ...e.mechanism,
    type: "chained",
    source: t,
    exception_id: n,
    parent_id: o,
  };
}
function fg(e) {
  return (
    Ot(e) &&
    "__sentry_fetch_url_host__" in e &&
    typeof e.__sentry_fetch_url_host__ == "string"
  );
}
function kc(e) {
  return fg(e) ? `${e.message} (${e.__sentry_fetch_url_host__})` : e.message;
}
const Nc = new Set([]);
function pg(e) {
  const t = "console";
  const n = Pn(t, e);
  On(t, hg);
  return n;
}
const Tc = new Set();
function hg() {
  if ("console" in fe) {
    Jf.forEach(e => {
      if (!Tc.has(e) && (e in fe.console)) {
        Tc.add(e);

        rt(fe.console, e, t => {
          (Pr[e] = t);

          return (...n) => {
            const [o] = n;
            const Pr_e = Pr[e];
            const s = Nc.size && typeof o == "string" && Wo(o, Nc);

            if (!s) {
              bt("console", { args: n, level: e });
            }

            if ((!s || (ee && Y.isEnabled()))) {
              Pr_e?.apply(fe.console, n);
            }
          };
        });
      }
    });
  }
}
function mg(e) {
  return e === "warn"
    ? "warning"
    : ["fatal", "error", "warning", "log", "info", "debug"].includes(e)
    ? e
    : "log";
}
const gg = "Dedupe";

const vg = () => {
  let e;
  return {
    name: gg,
    processEvent(t) {
      if (t.type) {
        return t;
      }
      try {
        if (yg(t, e)) {
          if (ee) {
            Y.warn(
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

function yg(e, t) {
  return t ? !!(wg(e, t) || bg(e, t)) : false;
}
function wg(e, t) {
  const e_message = e.message;
  const t_message = t.message;
  return !(
    (!e_message && !t_message) ||
    (e_message && !t_message) ||
    (!e_message && t_message) ||
    e_message !== t_message ||
    !ad(e, t) ||
    !id(e, t)
  );
}
function bg(e, t) {
  const n = Ic(t);
  const o = Ic(e);
  return !(
    !n ||
    !o ||
    n.type !== o.type ||
    n.value !== o.value ||
    !ad(e, t) ||
    !id(e, t)
  );
}
function id(e, t) {
  let n = $a(e);
  let o = $a(t);
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
function ad(e, t) {
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
function Ic(e) {
  return e.exception?.values?.[0];
}
const Eg = "ConversationId";

const Cg = () => ({
  name: Eg,

  setup(e) {
    e.on("spanStart", (t) => {
      const n = $t().getScopeData();
      const o = Mt().getScopeData();
      const r = n.conversationId || o.conversationId;
      if (r) {
        const { op: op_1, data, description } = Xr(t);
        if (!op_1?.startsWith("gen_ai.") &&
        !data["ai.operationId"] &&
        !description?.startsWith("ai.")) {
          return;
        }
        t.setAttribute(Kp, r);
      }
    });
  }
});

function cd(e) {
  if (e !== undefined) {
    return e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : undefined;
  }
}
const $o = fe;
function kg() {
  return "history" in $o && !!$o.history;
}
function Ng() {
  if (!("fetch" in $o)) {
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
function li(e) {
  return (e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString()));
}
function Tg() {
  if (typeof EdgeRuntime == "string") {
    return true;
  }
  if (!Ng()) {
    return false;
  }
  if (li($o.fetch)) {
    return true;
  }
  let e = false;
  const $o_document = $o.document;
  if ($o_document && typeof $o_document.createElement == "function") {
    try {
      const n = $o_document.createElement("iframe");
      (n.hidden = true);
      $o_document.head.appendChild(n);

      if (n.contentWindow?.fetch) {
        (e = li(n.contentWindow.fetch));
      }

      $o_document.head.removeChild(n);
    } catch (n) {
      if (ee) {
        Y.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n
        );
      }
    }
  }
  return e;
}
function Ig(e, t) {
  const n = "fetch";
  const o = Pn(n, e);

  On(n, () => Rg(undefined, t));

  return o;
}
function Rg(e, t = false) {
  if (!t || Tg()) {
    rt(fe, "fetch", n => (...o) => {
      const r = new Error();
      const { method, url } = Ag(o);

      const c = {
        args: o,
        fetchData: { method: method, url: url },
        startTimestamp: qt() * 1000/* 1e3 */,
        virtualError: r,
        headers: Lg(o),
      };

      bt("fetch", { ...c });

      return n.apply(fe, o).then(
        async l => {
          bt("fetch", { ...c, endTimestamp: qt() * 1000/* 1e3 */, response: l });
          return l;
        },
        (l) => {
          bt("fetch", { ...c, endTimestamp: qt() * 1000/* 1e3 */, error: l });

          if (Ot(l) &&
            l.stack === undefined) {
            (l.stack = r.stack);
            cn(l, "framesToPop", 1);
          }

          const d =
            Be()?.getOptions().enhanceFetchErrorMessages ?? "always";
          if (d !== false &&
          Ot(l) &&
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
                cn(l, "__sentry_fetch_url_host__", h);
              }
            } catch {}
          }
          throw l;
        }
      );
    });
  }
}
function wr(e, t) {
  return Gr(e) && !!e[t];
}
function Rc(e) {
  return typeof e == "string"
    ? e
    : e
    ? wr(e, "url")
      ? e.url
      : e.toString
      ? e.toString()
      : ""
    : "";
}
function Ag(e) {
  if (e.length === 0) {
    return { method: "GET", url: "" };
  }
  if (e.length === 2) {
    const [n, o] = e;
    return {
      url: Rc(n),
      method: wr(o, "method")
        ? String(o.method).toUpperCase()
        : _u(n) && wr(n, "method")
        ? String(n.method).toUpperCase()
        : "GET",
    };
  }
  const [t] = e;
  return {
    url: Rc(t),
    method: wr(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
function Lg(e) {
  const [t, n] = e;
  try {
    if (typeof n == "object" && n !== null && "headers" in n && n.headers) {
      return new Headers(n.headers);
    }
    if (_u(t)) {
      return new Headers(t.headers);
    }
  } catch {}
}
const ld = fe;
function Xi() {
  try {
    return ld.document.location.href;
  } catch {
    return "";
  }
}
function Pg(e, t = 5) {
  if (!ld.HTMLElement) {
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
const ye = fe;
let ui = 0;
function ud() {
  return ui > 0;
}
function Og() {
  ui++;

  setTimeout(() => {
    ui--;
  });
}
function Qn(e, t = {}) {
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
    if (ji(e)) {
      return e;
    }
  } catch {
    return e;
  }
  const o = function (...r) {
    fe._sentryWrappedDepth = (fe._sentryWrappedDepth || 0) + 1;
    try {
      const s = r.map(a => Qn(a, t));
      return e.apply(this, s);
    } catch (s) {
      Og();

      Iu((a) => {
        a.addEventProcessor(
          c => {
            if (t.mechanism) {
              ti(c, undefined);
              Nn(c, t.mechanism);
            }

            (c.extra = { ...c.extra, arguments: r });
            return c;
          }
        );

        Wu(s);
      });

      throw s;
    } finally {
      fe._sentryWrappedDepth = (fe._sentryWrappedDepth || 0) - 1;
    }
  };
  try {
    for (const r in e) {
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        (o[r] = e[r]);
      }
    }
  } catch {}
  vu(o, e);
  cn(e, "__sentry_wrapped__", o);
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
function Ac() {
  const e = Xi();
  const { referrer } = ye.document || {};
  const { userAgent } = ye.navigator || {};
  const o = { ...(referrer && { Referer: referrer }), ...(userAgent && { "User-Agent": userAgent }) };
  return { url: e, headers: o };
}
function Qi(e, t) {
  const n = Qr(e, t);
  const o = { type: Ug(t), value: Fg(t) };

  if (n.length) {
    (o.stacktrace = { frames: n });
  }

  if (o.type === undefined &&
    o.value === "") {
    (o.value = "Unrecoverable error caught");
  }

  return o;
}
function xg(e, t, n, o) {
  const s = Be()?.getOptions().normalizeDepth;
  const a = jg(t);
  const c = { __serialized__: bu(t, s) };
  if (a) {
    return { exception: { values: [Qi(e, a)] }, extra: c };
  }
  const l = {
    exception: {
      values: [
        {
          type: Yr(t) ? t.constructor.name : o ? "UnhandledRejection" : "Error",
          value: Vg(t, { isUnhandledRejection: o }),
        },
      ],
    },
    extra: c,
  };
  if (n) {
    const u = Qr(e, n);

    if (u.length) {
      (l.exception.values[0].stacktrace = { frames: u });
    }
  }
  return l;
}
function vs(e, t) {
  return { exception: { values: [Qi(e, t)] } };
}
function Qr(e, t) {
  const n = t.stacktrace || t.stack || "";
  const o = Mg(t);
  const r = Dg(t);
  try {
    return e(n, o, r);
  } catch {}
  return [];
}
const $g = /Minified React error #\d+;/i;
function Mg(e) {
  return e && $g.test(e.message) ? 1 : 0;
}
function Dg(e) {
  return typeof e.framesToPop == "number" ? e.framesToPop : 0;
}
function dd(e) {
  return typeof WebAssembly !== "undefined" && typeof WebAssembly.Exception !== "undefined"
    ? e instanceof WebAssembly.Exception
    : false;
}
function Ug(e) {
  const t = e?.name;
  return !t && dd(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : "WebAssembly.Exception"
    : t;
}
function Fg(e) {
  const t = e?.message;
  return dd(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : "wasm exception"
    : t
    ? t.error && typeof t.error.message == "string"
      ? kc(t.error)
      : kc(e)
    : "No error message";
}
function Bg(e, t, n, o) {
  const r = n?.syntheticException || undefined;
  const s = Zi(e, t, r, o);
  Nn(s);
  (s.level = "error");

  if (n?.event_id) {
    (s.event_id = n.event_id);
  }

  return qo(s);
}
function Hg(e, t, n = "info", o, r) {
  const s = o?.syntheticException || undefined;
  const a = di(e, t, s, r);
  (a.level = n);

  if (o?.event_id) {
    (a.event_id = o.event_id);
  }

  return qo(a);
}
function Zi(e, t, n, o, r) {
  let s;
  if (gu(t) && t.error) {
    return vs(e, t.error);
  }
  if (Da(t) || fp(t)) {
    const a = t;
    if ("stack" in t) {
      s = vs(e, t);
      const c = s.exception?.values?.[0];
      if (o && n && c && !c.stacktrace) {
        const l = Qr(e, n);

        if (l.length) {
          (c.stacktrace = { frames: l });
          Nn(s, { synthetic: true });
        }
      }
    } else {
      const c = a.name || (Da(a) ? "DOMError" : "DOMException");
      const l = a.message ? `${c}: ${a.message}` : c;
      (s = di(e, l, n, o));
      ti(s, l);
    }

    if ("code" in a) {
      (s.tags = { ...s.tags, "DOMException.code": `${a.code}` });
    }

    return s;
  }

  if (Ot(t)) {
    return vs(e, t);
  }

  if (Oo(t) || Yr(t)) {
    (s = xg(e, t, n, r));
    Nn(s, { synthetic: true });
    return s;
  }

  (s = di(e, t, n, o));
  ti(s, `${t}`);
  Nn(s, { synthetic: true });
  return s;
}
function di(e, t, n, o) {
  const r = {};
  if (o && n) {
    const s = Qr(e, n);

    if (s.length) {
      (r.exception = { values: [{ value: t, stacktrace: { frames: s } }] });
    }

    Nn(r, { synthetic: true });
  }
  if (Vi(t)) {
    const { __sentry_template_string__, __sentry_template_values__ } = t;
    (r.logentry = { message: __sentry_template_string__, params: __sentry_template_values__ });
    return r;
  }
  (r.message = t);
  return r;
}
function Vg(e, { isUnhandledRejection: t }) {
  const n = hp(e);
  const o = t ? "promise rejection" : "exception";
  return gu(e)
    ? `Event \`ErrorEvent\` captured as ${o} with message \`${e.message}\``
    : Yr(e)
    ? `Event \`${Wg(e)}\` (type=${e.type}) captured as ${o}`
    : `Object captured as ${o} with keys: ${n}`;
}
function Wg(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : undefined;
  } catch {}
}
function jg(e) {
  return Object.values(e).find(Ot);
}
class zg extends Hm {
  constructor(t) {
    const n = qg(t);
    const o = ye.SENTRY_SDK_SOURCE || mm();
    rd(n, "browser", ["browser"], o);
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
      this.on("beforeSendSession", Km);
    }
  }
  eventFromException(t, n) {
    return Bg(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", o) {
    return Hg(
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
function qg(e) {
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
const Gg = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const Pe = fe;
function Lc(e, t, n) {
  if (Pe.document) {
    Pe.addEventListener(e, t, n);
  }
}
function Pc(e, t, n) {
  if (Pe.document) {
    Pe.removeEventListener(e, t, n);
  }
}

const Yg = (e) => {
  return () => {
    if (!t) {
      e();
      (t = true);
    }
  };
};

const Kg = (e) => {
  const t = Pe.requestIdleCallback || Pe.setTimeout;

  if (Pe.document?.visibilityState === "hidden") {
    e();
  } else {
    (e = Yg(e));
    Lc("visibilitychange", e, { once: true, capture: true });
    Lc("pagehide", e, { once: true, capture: true });

    t(() => {
      e();
      Pc("visibilitychange", e, { capture: true });
      Pc("pagehide", e, { capture: true });
    });
  }
};

const Xg = 80;
const _n = {};
try {
  if (typeof Node !== "undefined") {
    (_n.parentNode = Object.getOwnPropertyDescriptor(
        Node.prototype,
        "parentNode"
      ).get);
  }

  if (typeof Element !== "undefined") {
    (_n.tagName = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "tagName"
      ).get);

    (_n.id = Object.getOwnPropertyDescriptor(Element.prototype, "id").get);

    (_n.className = Object.getOwnPropertyDescriptor(
        Element.prototype,
        "className"
      ).get);

    (_n.getAttribute = Element.prototype.getAttribute);
  }

  if (typeof HTMLElement !== "undefined") {
    (_n.dataset = Object.getOwnPropertyDescriptor(
        HTMLElement.prototype,
        "dataset"
      ).get);
  }
} catch {}
function Jt(e, t, n) {
  const _n_t = _n[t];
  if (_n_t) {
    try {
      return _n_t.call(e, n);
    } catch {}
  }
  const e_t = e[t];
  return typeof e_t == "function" ? e_t.call(e, n) : e_t;
}
function fd(e, t = {}) {
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
    const p = (!Array.isArray(t) && t.maxStringLength) || Xg;

    while (n &&
         s++ < o &&
         ((u = Qg(n, d)),
         !(u === "html" || (s > 1 && a + r.length * c_length + u.length >= p)))) {
      r.push(u);
      (a += u.length);
      (n = Jt(n, "parentNode"));
    }

    return r.reverse().join(c);
  } catch {
    return "<unknown>";
  }
}
function Qg(e, t) {
  const n = [];
  const o = Jt(e, "tagName");
  if (!o) {
    return "";
  }
  if (typeof HTMLElement !== "undefined" && e instanceof HTMLElement) {
    const s = Jt(e, "dataset");
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
        .filter(s => Jt(e, "getAttribute", s))
        .map(s => [s, Jt(e, "getAttribute", s)])
    : null;
  if (r?.length) {
    r.forEach((s) => {
      n.push(`[${s[0]}="${s[1]}"]`);
    });
  } else {
    const s = Jt(e, "id");

    if (s) {
      n.push(`#${s}`);
    }

    const a = Jt(e, "className");
    if (a && zt(a)) {
      const c = a.split(/\s+/);
      for (const l of c) {
        n.push(`.${l}`);
      }
    }
  }
  for (const s of ["aria-label", "type", "name", "title", "alt"]) {
    const a = Jt(e, "getAttribute", s);

    if (a) {
      n.push(`[${s}="${a}"]`);
    }
  }
  return n.join("");
}
const Zg = 1000/* 1e3 */;
let Oc;
let fi;
let pi;
function Jg(e) {
  Pn("dom", e);
  On("dom", e_);
}
function e_() {
  if (!Pe.document) {
    return;
  }
  const e = bt.bind(null, "dom");
  const t = xc(e, true);
  Pe.document.addEventListener("click", t, false);
  Pe.document.addEventListener("keypress", t, false);

  ["EventTarget", "Node"].forEach((n) => {
    const r = Pe[n]?.prototype;

    if (r?.hasOwnProperty?.("addEventListener")) {
      rt(r, "addEventListener", s => (function(a, c, l) {
        if (a === "click" || a == "keypress") {
          try {
            const u = (this.__sentry_instrumentation_handlers__ =
                this.__sentry_instrumentation_handlers__ || {});

            const d = (u[a] = u[a] || { refCount: 0 });
            if (!d.handler) {
              const p = xc(e);
              (d.handler = p);
              s.call(this, a, p, l);
            }
            d.refCount++;
          } catch {}
        }
        return s.call(this, a, c, l);
      }));

      rt(r, "removeEventListener", s => (function(a, c, l) {
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
function t_(e) {
  if (e.type !== fi) {
    return false;
  }
  try {
    if (!e.target || e.target._sentryId !== pi) {
      return false;
    }
  } catch {}
  return true;
}
function n_(e, t) {
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
function xc(e, t = false) {
  return (n) => {
    if (!n || n._sentryCaptured) {
      return;
    }
    const o = o_(n);
    if (n_(n.type, o)) {
      return;
    }
    cn(n, "_sentryCaptured", true);

    if (o && !o._sentryId) {
      cn(o, "_sentryId", dt());
    }

    const r = n.type === "keypress" ? "input" : n.type;

    if (!t_(n)) {
      e({ event: n, name: r, global: t });
      (fi = n.type);
      (pi = o ? o._sentryId : undefined);
    }

    clearTimeout(Oc);

    (Oc = Pe.setTimeout(() => {
      (pi = undefined);
      (fi = undefined);
    }, Zg));
  };
}
function o_(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
let tr;
function pd(e) {
  const t = "history";
  Pn(t, e);
  On(t, r_);
}
function r_() {
  Pe.addEventListener("popstate", () => {
    const t = Pe.location.href;
    const n = tr;
    (tr = t);

    if (n === t) {
      return;
    }

    bt("history", { from: n, to: t });
  });

  if (!kg()) {
    return;
  }

  class e {
    constructor(t) {
      return function (...n) {
        const o = n.length > 2 ? n[2] : undefined;
        if (o) {
          const r = tr;
          const s = s_(String(o));
          (tr = s);

          if (r === s) {
            return t.apply(this, n);
          }

          bt("history", { from: r, to: s });
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

  rt(Pe.history, "pushState", e);
  rt(Pe.history, "replaceState", e);
}
function s_(e) {
  try {
    return new URL(e, Pe.location.origin).toString();
  } catch {
    return e;
  }
}
const br = {};
function i_(e) {
  const br_e = br[e];
  if (br_e) {
    return br_e;
  }
  let n = Pe[e];
  if (li(n)) {
    return (br[e] = n.bind(Pe));
  }
  const {
    document
  } = Pe;
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
      if (Gg) {
        Y.warn(
          `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
          r
        );
      }
    }
  }
  return n && (br[e] = n.bind(Pe));
}
function a_(e) {
  br[e] = undefined;
}
const bo = "__sentry_xhr_v3__";
function c_(e) {
  Pn("xhr", e);
  On("xhr", l_);
}
function l_() {
  if (!Pe.XMLHttpRequest) {
    return;
  }
  const XMLHttpRequest_prototype = XMLHttpRequest.prototype;

  (XMLHttpRequest_prototype.open = new Proxy(XMLHttpRequest_prototype.open, {
    apply(t, n, o) {
      const r = new Error();
      const s = qt() * 1000/* 1e3 */;
      const a = zt(o[0]) ? o[0].toUpperCase() : undefined;
      const c = u_(o[1]);
      if (!a || !c) {
        return t.apply(n, o);
      }
      (n[bo] = { method: a, url: c, request_headers: {} });

      if (a === "POST" &&
        c.match(/sentry_key/)) {
        (n.__sentry_own_request__ = true);
      }

      const l = () => {
        const n_bo = n[bo];
        if (n_bo && n.readyState === 4) {
          try {
            n_bo.status_code = n.status;
          } catch {}
          const d = {
            endTimestamp: qt() * 1000/* 1e3 */,
            startTimestamp: s,
            xhr: n,
            virtualError: r,
          };
          bt("xhr", d);
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
          const d_bo = d[bo];

          if (d_bo && zt(f) && zt(h)) {
            (d_bo.request_headers[f.toLowerCase()] = h);
          }

          return u.apply(d, p);
        },
      }));

      return t.apply(n, o);
    },
  }));

  (XMLHttpRequest_prototype.send = new Proxy(XMLHttpRequest_prototype.send, {
      apply(t, n, o) {
        const n_bo = n[bo];
        if (!n_bo) {
          return t.apply(n, o);
        }

        if (o[0] !== undefined) {
          (n_bo.body = o[0]);
        }

        const s = { startTimestamp: qt() * 1000/* 1e3 */, xhr: n };
        bt("xhr", s);
        return t.apply(n, o);
      },
    }));
}
function u_(e) {
  if (zt(e)) {
    return e;
  }
  try {
    return e.toString();
  } catch {}
}
function d_(e) {
  if (typeof Element === "undefined") {
    return false;
  }
  try {
    return e instanceof Element;
  } catch {
    return false;
  }
}
const f_ = 40;
function p_(e, t = i_("fetch")) {
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
      a_("fetch");
      throw l;
    } finally {
      (n -= a);
      o--;
    }
  }
  return Om(e, r, Ki(e.bufferSize || f_));
}
const Zn = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const h_ = 30;
const m_ = 50;
function hi(e, t, n, o) {
  const r = { filename: e, function: t === "<anonymous>" ? An : t, in_app: true };

  if (n !== undefined) {
    (r.lineno = n);
  }

  if (o !== undefined) {
    (r.colno = o);
  }

  return r;
}
const g_ = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;

const __ =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;

const v_ = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const y_ = /at (.+?) ?\(data:(.+?),/;

const w_ = (e) => {
  const t = e.match(y_);
  if (t) {
    return { filename: `<data:${t[2]}>`, function: t[1] };
  }
  const n = g_.exec(e);
  if (n) {
    const [, r, s, a] = n;
    return hi(r, An, Number(s), Number(a));
  }
  const o = __.exec(e);
  if (o) {
    if (o[2]?.indexOf("eval") === 0) {
      const c = v_.exec(o[2]);

      if (c) {
        (o[2] = c[1]);
        (o[3] = c[2]);
        (o[4] = c[3]);
      }
    }
    const [s, a] = hd(o[1] || An, o[2]);
    return hi(a, s, o[3] ? +o[3] : undefined, o[4] ? +o[4] : undefined);
  }
};

const b_ = [h_, w_];

const E_ =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;

const S_ = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

const C_ = (e) => {
  const t = E_.exec(e);
  if (t) {
    if (t[3] && t[3].includes(" > eval")) {
      const s = S_.exec(t[3]);

      if (s) {
        (t[1] = t[1] || "eval");
        (t[3] = s[1]);
        (t[4] = s[2]);
        (t[5] = "");
      }
    }
    let [,,, o] = t;
    let r = t[1] || An;
    ([r, o] = hd(r, o));
    return hi(o, r, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
  }
};

const k_ = [m_, C_];
const N_ = [b_, k_];
const T_ = hu(...N_);

const hd = (e, t) => {
  const n = e.includes("safari-extension");
  const o = e.includes("safari-web-extension");
  return n || o
    ? [
        e.includes("@") ? e.split("@")[0] : An,
        n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
      ]
    : [e, t];
};

const nr = 1024;
const I_ = "Breadcrumbs";

const A_ = (e = {}) => {
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
    name: I_,
    setup(n) {
      if (t.console) {
        pg(O_(n));
      }

      if (t.dom) {
        Jg(P_(n, t.dom));
      }

      if (t.xhr) {
        c_(x_(n));
      }

      if (t.fetch) {
        Ig($_(n));
      }

      if (t.history) {
        pd(M_(n));
      }

      if (t.sentry) {
        n.on("beforeSendEvent", L_(n));
      }
    },
  };
};

function L_(e) {
  return n => {
    if (Be() === e) {
      Ln(
        {
          category: `sentry.${
            n.type === "transaction" ? "transaction" : "event"
          }`,
          event_id: n.event_id,
          level: n.level,
          message: wn(n),
        },
        { event: n }
      );
    }
  };
}
function P_(e, t) {
  return o => {
    if (Be() !== e) {
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
      c > nr) {
      Zn &&
          Y.warn(
            `\`dom.maxStringLength\` cannot exceed ${nr}, but a value of ${c} was configured. Sentry will use ${nr} instead.`
          );

      (c = nr);
    }

    if (typeof a == "string") {
      (a = [a]);
    }

    try {
      const o_event = o.event;
      const d = D_(o_event) ? o_event.target : o_event;
      (r = fd(d, { keyAttrs: a, maxStringLength: c }));
      (s = Pg(d));
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

    Ln(l, { event: o.event, name: o.name, global: o.global });
  };
}
function O_(e) {
  return function (n) {
    if (Be() !== e) {
      return;
    }
    const o = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: mg(n.level),
      message: Fa(n.args, " "),
    };
    if (n.level === "assert") {
      if (n.args[0] === false) {
        (o.message = `Assertion failed: ${
          Fa(n.args.slice(1), " ") || "console.assert"
        }`);

        (o.data.arguments = n.args.slice(1));
      } else {
        return;
      }
    }
    Ln(o, { input: n.args, level: n.level });
  };
}
function x_(e) {
  return n => {
    if (Be() !== e) {
      return;
    }
    const { startTimestamp, endTimestamp } = n;
    const s = n.xhr[bo];
    if (!startTimestamp || !endTimestamp || !s) {
      return;
    }
    const { method, url, status_code, body } = s;
    const d = { method: method, url: url, status_code: status_code };
    const p = { xhr: n.xhr, input: body, startTimestamp: startTimestamp, endTimestamp: endTimestamp };
    const f = { category: "xhr", data: d, type: "http", level: cd(status_code) };
    e.emit("beforeOutgoingRequestBreadcrumb", f, p);
    Ln(f, p);
  };
}
function $_(e) {
  return n => {
    if (Be() !== e) {
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
        Ln(a, s);
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
          level: cd(a.status_code),
        };

        e.emit("beforeOutgoingRequestBreadcrumb", l, c);
        Ln(l, c);
      }
    }
  };
}
function M_(e) {
  return n => {
    if (Be() !== e) {
      return;
    }

    let {
      from,
      to: to_2
    } = n;

    const s = _s(ye.location.href);
    let a = from ? _s(from) : undefined;
    const c = _s(to_2);

    if (!a?.path) {
      (a = s);
    }

    if (s.protocol === c.protocol && s.host === c.host) {
      (to_2 = c.relative);
    }

    if (s.protocol === a.protocol && s.host === a.host) {
      (from = a.relative);
    }

    Ln({ category: "navigation", data: { from: from, to: to_2 } });
  };
}
function D_(e) {
  return !!e && !!e.target;
}

const U_ =
    "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
      ","
    );

const F_ = "BrowserApiErrors";

const H_ = (e = {}) => {
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
    name: F_,
    setupOnce() {
      if (t.setTimeout) {
        rt(ye, "setTimeout", $c);
      }

      if (t.setInterval) {
        rt(ye, "setInterval", $c);
      }

      if (t.requestAnimationFrame) {
        rt(ye, "requestAnimationFrame", V_);
      }

      if (t.XMLHttpRequest &&
        "XMLHttpRequest" in ye) {
        rt(XMLHttpRequest.prototype, "send", W_);
      }

      const t_eventTarget = t.eventTarget;

      if (t_eventTarget) {
        (Array.isArray(t_eventTarget) ? t_eventTarget : U_).forEach(r => j_(r, t));
      }
    },
  };
};

function $c(e) {
  return function (...t) {
    const [n] = t;

    (t[0] = Qn(n, {
      mechanism: {
        handled: false,
        type: `auto.browser.browserapierrors.${an(e)}`,
      },
    }));

    return e.apply(this, t);
  };
}
function V_(e) {
  return function (t) {
    return e.apply(this, [
      Qn(t, {
        mechanism: {
          data: { handler: an(e) },
          handled: false,
          type: "auto.browser.browserapierrors.requestAnimationFrame",
        },
      }),
    ]);
  };
}
function W_(e) {
  return function (...t) {
    const n = this;

    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
      if (r in n &&
        typeof n[r] == "function") {
        rt(n, r, s => {
          const a = {
              mechanism: {
                data: { handler: an(s) },
                handled: false,
                type: `auto.browser.browserapierrors.xhr.${r}`,
              },
            };

          const c = ji(s);

          if (c) {
            (a.mechanism.data.handler = an(c));
          }

          return Qn(s, a);
        });
      }
    });

    return e.apply(this, t);
  };
}
function j_(e, t) {
  const o = ye[e]?.prototype;

  if (o?.hasOwnProperty?.("addEventListener")) {
    rt(o, "addEventListener", r => (function(s, a, c) {
      try {
        if (z_(a)) {
          (a.handleEvent = Qn(a.handleEvent, {
              mechanism: {
                data: { handler: an(a), target: e },
                handled: false,
                type: "auto.browser.browserapierrors.handleEvent",
              },
            }));
        }
      } catch {}

      if (t.unregisterOriginalCallbacks) {
        q_(this, s, a);
      }

      return r.apply(this, [
        s,
        Qn(a, {
          mechanism: {
            data: { handler: an(a), target: e },
            handled: false,
            type: "auto.browser.browserapierrors.addEventListener",
          },
        }),
        c,
      ]);
    }));

    rt(o, "removeEventListener", r => (function(s, a, c) {
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
function z_(e) {
  return typeof e.handleEvent == "function";
}
function q_(e, t, n) {
  if (e &&
    typeof e == "object" &&
    "removeEventListener" in e &&
    typeof e.removeEventListener == "function") {
    e.removeEventListener(t, n);
  }
}

const G_ = (e = {}) => {
    const t = e.lifecycle ?? "route";
    return {
      name: "BrowserSession",
      setupOnce() {
        if (typeof ye.document === "undefined") {
          if (Zn) {
            Y.warn(
              "Using the `browserSessionIntegration` in non-browser environments is not supported."
            );
          }

          return;
        }
        dc({ ignoreDuration: true });
        let n = false;
        Kg(() => {
          if (!n) {
            ms();
            (n = true);
          }
        });
        const o = Mt();
        let r = o.getUser();

        o.addScopeListener((s) => {
          const a = s.getUser();

          if ((r?.id !== a?.id || r?.ip_address !== a?.ip_address)) {
            (r = a);
            n && ms();
          }
        });

        if (t === "route") {
          pd(({ from: s, to: a }) => {
            if (s !== a) {
              dc({ ignoreDuration: true });
              ms();
              (n = true);
            }
          });
        }
      },
    };
  };

const Y_ = "CultureContext";

const X_ = () => ({
  name: Y_,

  preprocessEvent(e) {
    const t = Mc();

    if (t) {
      (e.contexts = {
          ...e.contexts,
          culture: { ...t, ...e.contexts?.culture },
        });
    }
  },

  processSegmentSpan(e) {
    const t = Mc();

    if (t) {
      Hu(e, {
        "culture.locale": t.locale,
        "culture.timezone": t.timezone,
        "culture.calendar": t.calendar,
      });
    }
  }
});

function Mc() {
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
const Q_ = "GlobalHandlers";

const J_ = (e = {}) => {
  const t = { onerror: true, onunhandledrejection: true, ...e };
  return {
    name: Q_,
    setupOnce() {
      Error.stackTraceLimit = 50;
    },
    setup(n) {
      if (t.onerror) {
        ev(n);
        Dc("onerror");
      }

      if (t.onunhandledrejection) {
        tv(n);
        Dc("onunhandledrejection");
      }
    },
  };
};

function ev(e) {
  cp((t) => {
    const { stackParser, attachStacktrace } = md();
    if (Be() !== e || ud()) {
      return;
    }
    const { msg, url, line, column, error } = t;
    const u = rv(Zi(stackParser, error || msg, undefined, attachStacktrace, false), url, line, column);
    (u.level = "error");

    ju(u, {
      originalException: error,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onerror",
      },
    });
  });
}
function tv(e) {
  up((t) => {
    const { stackParser, attachStacktrace } = md();
    if (Be() !== e || ud()) {
      return;
    }
    const r = nv(t);
    const s = Ho(r) ? ov(r) : Zi(stackParser, r, undefined, attachStacktrace, true);
    (s.level = "error");

    ju(s, {
      originalException: r,
      mechanism: {
        handled: false,
        type: "auto.browser.global_handlers.onunhandledrejection",
      },
    });
  });
}
function nv(e) {
  if (Ho(e)) {
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
function ov(e) {
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
function rv(e, t, n, o) {
  const r = (e.exception = e.exception || {});
  const s = (r.values = r.values || []);
  const a = (s[0] = s[0] || {});
  const c = (a.stacktrace = a.stacktrace || {});
  const l = (c.frames = c.frames || []);

  if (l.length === 0) {
    l.push({
      colno: o,
      lineno: n,
      filename: sv(t) ?? Xi(),
      function: An,
      in_app: true,
    });
  }

  return e;
}
function Dc(e) {
  if (Zn) {
    Y.log(`Global Handler attached: ${e}`);
  }
}
function md() {
  return Be()?.getOptions() || { stackParser: () => [], attachStacktrace: false };
}
function sv(e) {
  if (!(!zt(e) || e.length === 0)) {
    return e.startsWith("data:") ? `<${Ym(e, false)}>` : e;
  }
}

const iv = () => ({
  name: "HttpContext",

  preprocessEvent(e) {
    if (!ye.navigator && !ye.location && !ye.document) {
      return;
    }
    const t = Ac();
    const n = { ...t.headers, ...e.request?.headers };
    e.request = { ...t, ...e.request, headers: n };
  },

  processSegmentSpan(e) {
    const t = e.attributes?.[Ru];
    if (!ye.navigator && !ye.location && !ye.document) {
      return;
    }
    const n = Ac();
    Hu(e, {
      [jh]: t !== "http.client" ? n.url : undefined,
      "http.request.header.user_agent": n.headers["User-Agent"],
      "http.request.header.referer": n.headers.Referer,
    });
  }
});

const av = "cause";
const cv = 5;
const lv = "LinkedErrors";

const dv = (e = {}) => {
  const t = e.limit || cv;
  const n = e.key || av;
  return {
    name: lv,
    preprocessEvent(o, r, s) {
      const a = s.getOptions();
      dg(Qi, a.stackParser, n, t, o, r);
    },
  };
};

const fv = /^HTML(\w*)Element$/;
function gd(e) {
  if (typeof window !== "undefined" && e === window) {
    return "[Window]";
  }
  if (typeof document !== "undefined" && e === document) {
    return "[Document]";
  }
  if (d_(e)) {
    const t = pv(e);
    if (fv.test(t)) {
      return `[HTMLElement: ${fd(e)}]`;
    }
  }
}
function pv(e) {
  const t = Object.getPrototypeOf(e);
  return t?.constructor ? t.constructor.name : "null prototype";
}
function hv() {
  return mv()
    ? (Zn &&
        no(() => {
          console.error(
            "[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
          );
        }),
      true)
    : false;
}
function mv() {
  if (typeof ye.window === "undefined") {
    return false;
  }
  const e = ye;
  if (e.nw || !(e.chrome || e.browser)?.runtime?.id) {
    return false;
  }
  const n = Xi();
  return !(
    ye === ye.top &&
    /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(
      n
    )
  );
}
function gv(e) {
  return [og(), Jm(), Cg(), H_(), A_(), J_(), dv(), vg(), iv(), X_(), G_()];
}
function _v(e = {}) {
  const t = !e.skipBrowserExtensionCheck && hv();
  let n = e.defaultIntegrations == null ? gv() : e.defaultIntegrations;
  const o = {
    ...e,
    enabled: t ? false : e.enabled,
    stackParser: ip(e.stackParser || T_),
    integrations: fm({ integrations: e.integrations, defaultIntegrations: n }),
    transport: e.transport || p_,
  };
  wu(gd);
  return qm(zg, o);
}
function Uc(e = {}) {
  const ye_document = ye.document;
  const n = ye_document?.head || ye_document?.body;
  if (!n) {
    if (Zn) {
      Y.error("[showReportDialog] Global document not defined");
    }

    return;
  }
  const o = $t();
  const s = Be()?.getDsn();
  if (!s) {
    if (Zn) {
      Y.error("[showReportDialog] DSN not configured");
    }

    return;
  }

  const a = {
      ...e,
      user: { ...o.getUser(), ...e.user },
      eventId: e.eventId || sm(),
    };

  const c = ye.document.createElement("script");
  (c.async = true);
  (c.crossOrigin = "anonymous");
  (c.src = um(s, a));
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
let ln;
let ke;
let ys;
let Fc;
let Jn = 0;
const _d = [];
const Le = te;

const {
  __b,
  __r,
  diffed,
  __c,
  unmount,
  __: __1
} = Le;

function ao(e, t) {
  if (Le.__h) {
    Le.__h(ke, e, Jn || t);
  }

  (Jn = 0);
  const n = ke.__H || (ke.__H = { __: [], __h: [] });

  if (e >= n.__.length) {
    n.__.push({});
  }

  return n.__[e];
}
function L(e) {
  (Jn = 1);
  return Ji(wd, e);
}
function Ji(e, t, n) {
  const o = ao(ln++, 2);
  (o.t = e);

  if (!o.__c &&
    ((o.__ = [
      n ? n(t) : wd(undefined, t),
      c => {
        const l = o.__N ? o.__N[0] : o.__[0];
        const u = o.t(l, c);

        if (l !== u) {
          (o.__N = [u, o.__[1]]);
          o.__c.setState({});
        }
      },
    ]),
    (o.__c = ke),
    !ke.__f)) {
    const r = function (c, l, u) {
      if (!o.__c.__H) {
        return true;
      }
      let d = false;
      let p = o.__c.props !== c;

      o.__c.__H.__.some(h => {
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
    ke.__f = true;

    var {
      shouldComponentUpdate,
      componentWillUpdate
    } = ke;

    (ke.componentWillUpdate = function (c, l, u) {
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

    (ke.shouldComponentUpdate = r);
  }

  return o.__N || o.__;
}
function U(e, t) {
  const n = ao(ln++, 3);

  if (!Le.__s && ta(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    ke.__H.__h.push(n);
  }
}
function St(e, t) {
  const n = ao(ln++, 4);

  if (!Le.__s && ta(n.__H, t)) {
    (n.__ = e);
    (n.u = t);
    ke.__h.push(n);
  }
}
function x(e) {
  (Jn = 5);

  return Te(() => ({
    current: e
  }), []);
}
function ea(e, t, n) {
  (Jn = 6);

  St(
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
function Te(e, t) {
  const n = ao(ln++, 7);

  if (ta(n.__H, t)) {
    (n.__ = e());
    (n.__H = t);
    (n.__h = e);
  }

  return n.__;
}
function I(e, t) {
  (Jn = 8);

  return Te(() => e, t);
}
function Go(e) {
  const t = ke.context[e.__c];
  const n = ao(ln++, 9);
  (n.c = e);
  return t ? (n.__ == null && ((n.__ = true), t.sub(ke)), t.props.value) : e.__;
}
function vd(e, t) {
  if (Le.useDebugValue) {
    Le.useDebugValue(t ? t(e) : e);
  }
}
function yd() {
  const e = ao(ln++, 11);
  if (!e.__) {
    for (var t = ke.__v; t !== null && !t.__m && t.__ !== null; ) {
      t = t.__;
    }
    const n = t.__m || (t.__m = [0, 0]);
    e.__ = `P${n[0]}-${n[1]++}`;
  }
  return e.__;
}
function vv() {
  for (let e; (e = _d.shift()); ) {
    const e_H = e.__H;
    if (e.__P && e_H) {
      try {
        e_H.__h.some(Er);
        e_H.__h.some(mi);
        (e_H.__h = []);
      } catch (n) {
        (e_H.__h = []);
        Le.__e(n, e.__v);
      }
    }
  }
}

(Le.__b = e => {
  (ke = null);

  if (__b) {
    __b(e);
  }
});

(Le.__ = (e, t) => {
  if (e && t.__k && t.__k.__m) {
    (e.__m = t.__k.__m);
  }

  if (__1) {
    __1(e, t);
  }
});

(Le.__r = e => {
  if (__r) {
    __r(e);
  }

  (ln = 0);
  const t = (ke = e.__c).__H;

  if (t) {
    if (ys === ke) {
      (t.__h = []);
      (ke.__h = []);

      t.__.some(n => {
        if (n.__N) {
          (n.__ = n.__N);
        }

        n.u = undefined;
        n.__N = undefined;
      });
    } else {
      t.__h.some(Er);
      t.__h.some(mi);
      (t.__h = []);
      (ln = 0);
    }
  }

  (ys = ke);
});

(Le.diffed = e => {
  if (diffed) {
    diffed(e);
  }

  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__h.length &&
        ((_d.push(e_c) !== 1 && Fc === Le.requestAnimationFrame) ||
          ((Fc = Le.requestAnimationFrame) || yv)(vv));

    e_c.__H.__.some(n => {
      if (n.u) {
        (n.__H = n.u);
        (n.u = undefined);
      }
    });
  }

  ys = null;
  ke = null;
});

(Le.__c = (e, t) => {
  t.some(n => {
    try {
      n.__h.some(Er);

      (n.__h = n.__h.filter(o => !o.__ || mi(o)));
    } catch (o) {
      t.some(r => {
        if (r.__h) {
          (r.__h = []);
        }
      });

      (t = []);
      Le.__e(o, n.__v);
    }
  });

  if (__c) {
    __c(e, t);
  }
});

(Le.unmount = e => {
  if (unmount) {
    unmount(e);
  }

  let t;
  const e_c = e.__c;

  if (e_c &&
    e_c.__H) {
    e_c.__H.__.some(o => {
        try {
          Er(o);
        } catch (r) {
          t = r;
        }
      });

    (e_c.__H = undefined);
    t && Le.__e(t, e_c.__v);
  }
});

const qc = typeof requestAnimationFrame == "function";
function yv(e) {
  let t;

  const n = () => {
    clearTimeout(o);

    if (qc) {
      cancelAnimationFrame(t);
    }

    setTimeout(e);
  };

  var o = setTimeout(n, 35);

  if (qc) {
    (t = requestAnimationFrame(n));
  }
}
function Er(e) {
  const t = ke;
  const e_c = e.__c;

  if (typeof e_c == "function") {
    (e.__c = undefined);
    e_c();
  }

  (ke = t);
}
function mi(e) {
  const t = ke;
  (e.__c = e.__());
  (ke = t);
}
function ta(e, t) {
  return !e ||
  e.length !== t.length ||
  t.some((n, o) => n !== e[o]);
}
function wd(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bd(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function gi(e, t) {
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
function Ed(e, t) {
  const n = t();
  const o = L({ t: { __: n, u: t } });
  const r = o[0].t;
  const [, s] = o;

  St(
    () => {
      (r.__ = n);
      (r.u = t);

      if (ws(r)) {
        s({ t: r });
      }
    },
    [e, n, t]
  );

  U(
    () => {
      if (ws(r)) {
        s({ t: r });
      }

      return e(() => {
        if (ws(r)) {
          s({ t: r });
        }
      });
    },
    [e]
  );

  return n;
}
function ws(e) {
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
function Sd(e) {
  e();
}
function Cd(e) {
  return e;
}
function kd() {
  return [false, Sd];
}
const Nd = St;

class _i {
  constructor(e, t) {
    (this.props = e);
    (this.context = t);
  }

  shouldComponentUpdate(e, t) {
      return gi(this.props, e) || gi(this.state, t);
    }
}

function Zr(e, t) {
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

    return gi(this.props, r);
  }
  function o(r) {
    (this.shouldComponentUpdate = n);
    return Et(e, r);
  }
  (o.displayName = `Memo(${e.displayName || e.name})`);
  o.__f = true;
  o.prototype.isReactComponent = true;
  (o.type = e);
  return o;
}
((_i.prototype = new ut()).isPureReactComponent = true);

const {
  __b: _b_1,
  __e,
  unmount: unmount_2,
  event,
  vnode,
  __r: _r_1,
  diffed: diffed_2
} = te;

te.__b = e => {
  if (e.type && e.type.__f && e.ref) {
    (e.props.ref = e.ref);
    (e.ref = null);
  }

  if (_b_1) {
    _b_1(e);
  }
};
const wv =
  (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.forward_ref")) ||
  3911;
function Td(e) {
  class t {
    constructor(n) {
      const o = bd({}, n);
      delete o.ref;
      return e(o, n.ref || null);
    }

    static componentWillUnmount() {
      Po(null, t.v);
      (t.v = null);
      (t.h = null);
    }
  }

  (t.$$typeof = wv);
  (t.render = e);
  t.prototype.isReactComponent = true;
  t.__f = true;
  (t.displayName = `ForwardRef(${e.displayName || e.name})`);
  return t;
}

const Yc = (e, t) => e == null ? null : wt(wt(e).map(t));

const bv = {
  map: Yc,
  forEach: Yc,
  count(e) {
    return e ? wt(e).length : 0;
  },
  only(e) {
    const t = wt(e);
    if (t.length !== 1) {
      throw "Children.only";
    }
    return t[0];
  },
  toArray: wt,
};

te.__e = (e, t, n, o) => {
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
function Id(e, t, n) {
  if (e) {
    e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(o => {
      if (typeof o.__c == "function") {
        o.__c();
      }
    }),
        (e.__c.__H = null));

    (e = bd({}, e)).__c != null &&
      (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = true), (e.__c = null));

    (e.__k = e.__k &&
    e.__k.map(o => Id(o, t, n)));
  }

  return e;
}
function Rd(e, t, n) {
  if (e &&
    n) {
    (e.__v = null);

    (e.__k = e.__k &&
    e.__k.map(o => Rd(o, t, n)));

    e.__c &&
      e.__c.__P === t &&
      (e.__e && n.appendChild(e.__e), (e.__c.__e = true), (e.__c.__P = n));
  }

  return e;
}

class De {
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
        this.__v.__k[0] = Id(this.__b, n, (o.__O = o.__P));
      }
      this.__b = null;
    }
    const r = t.__a && Et(ve, null, e.fallback);

    if (r) {
      (r.__u &= -33);
    }

    return [Et(ve, null, t.__a ? null : e.children), r];
  }
}

function Ad(e) {
  const t = e.__ && e.__.__c;
  return t && t.__a && t.__a(e);
}
function ce(e) {
  let t;
  let n;
  let o;
  let r = null;
  function s(a) {
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
    return r ? Et(r, a) : null;
  }
  (s.displayName = "Lazy");
  (s.__f = true);
  return s;
}

class Eo {
  constructor() {
    (this.i = null);
    (this.l = null);
  }

  render(e) {
    (this.i = null);
    (this.l = new Map());
    const t = wt(e.children);

    if (e.revealOrder && e.revealOrder[0] === "b") {
      t.reverse();
    }

    for (let n = t.length; n--; ) {
      this.l.set(t[n], (this.i = [1, 0, this.i]));
    }
    return e.children;
  }
}

(te.unmount = e => {
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

((De.prototype = new ut()).__c = function (e, t) {
  const t_c = t.__c;
  const o = this;

  if (o.o == null) {
    (o.o = []);
  }

  o.o.push(t_c);
  const r = Ad(o.__v);

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
        o.__v.__k[0] = Rd(u, u.__c.__P, u.__c.__O);
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

const Xc = (e, t, n) => {
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
function Sv(e) {
  (this.getChildContext = () => e.context);

  return e.children;
}
function Cv(e) {
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

  Po(Et(Sv, { context: t.context }, e.__v), t.v);
}

export function $(e, t) {
  const n = Et(Cv, { __v: e, h: t });
  (n.containerInfo = t);
  return n;
}

((Eo.prototype = new ut()).__a = function (e) {
  const t = this;
  const n = Ad(t.__v);
  const o = t.l.get(e);
  o[0]++;

  return r => {
    const s = () => {
      if (t.props.revealOrder) {
        o.push(r);
        Xc(t, e, o);
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

(Eo.prototype.componentDidUpdate = Eo.prototype.componentDidMount =
    function () {
      const e = this;
      this.l.forEach((t, n) => {
        Xc(e, n, t);
      });
    });

const Ld =
    (typeof Symbol !== "undefined" && Symbol.for && Symbol.for("react.element")) || 60103;

const kv =
  /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;

const Nv = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const Tv = /[A-Z0-9]/g;
const Iv = typeof document !== "undefined";

const Rv = e => (
  typeof Symbol !== "undefined" && typeof Symbol() == "symbol"
    ? /fil|che|rad/
    : /fil|che|ra/
).test(e);

function Pd(e, t, n) {
  if (t.__k == null) {
    (t.textContent = "");
  }

  Po(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
function Av(e, t, n) {
  uu(e, t);

  if (typeof n == "function") {
    n();
  }

  return e ? e.__c : null;
}
(ut.prototype.isReactComponent = true);

[
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate",
].forEach(e => {
  Object.defineProperty(ut.prototype, e, {
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

te.event = e => {
  if (event) {
    (e = event(e));
  }

  (e.nativeEvent = e);
  return e.nativeEvent;
};
let na;

const Lv = {
  configurable: true,
  get() {
    return this.class;
  },
};

te.vnode = e => {
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
            (Iv && a === "children" && type === "noscript") ||
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
                  Rv(props.type)) {
              if (l === "onfocus") {
                (a = "onfocusin");
              } else if (l === "onblur") {
                (a = "onfocusout");
              } else if (Nv.test(a)) {
                (a = l);
              }
            } else {
              (l = a = "oninput");
            }
          } else if (s && kv.test(a)) {
            (a = a.replace(Tv, "-$&").toLowerCase());
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
            (r.value = wt(props.children).forEach(u => {
              u.props.selected = r.value.includes(u.props.value);
            }));

        r.defaultValue != null &&
          (r.value = wt(props.children).forEach(u => {
            u.props.selected = r.multiple
              ? r.defaultValue.includes(u.props.value)
              : r.defaultValue == u.props.value;
          }));
      }

      if (props.class && !props.className) {
        (r.class = props.class);
        Object.defineProperty(r, "className", Lv);
      } else if (props.className) {
        (r.class = r.className = props.className);
      }

      (t.props = r);
    })(e);
  }

  (e.$$typeof = Ld);

  if (vnode) {
    vnode(e);
  }
};
te.__r = e => {
  if (_r_1) {
    _r_1(e);
  }

  (na = e.__c);
};
te.diffed = e => {
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

  (na = null);
};

const Pv = {
    ReactCurrentDispatcher: {
      current: {
        readContext(e) {
          return na.__n[e.__c].props.value;
        },
        useCallback: I,
        useContext: Go,
        useDebugValue: vd,
        useDeferredValue: Cd,
        useEffect: U,
        useId: yd,
        useImperativeHandle: ea,
        useInsertionEffect: Nd,
        useLayoutEffect: St,
        useMemo: Te,
        useReducer: Ji,
        useRef: x,
        useState: L,
        useSyncExternalStore: Ed,
        useTransition: kd,
      },
    },
  };

const Od = "18.3.1";
function Ov(e) {
  return Et.bind(null, e);
}
function Yo(e) {
  return !!e && e.$$typeof === Ld;
}
function xv(e) {
  return Yo(e) && e.type === ve;
}
function $v(e) {
  return (
    !!e &&
    typeof e.displayName == "string" &&
    e.displayName.indexOf("Memo(") == 0
  );
}
function Mv(e) {
  return Yo(e) ? du(...arguments) : e;
}
function xd(e) {
  return !!e.__k && (Po(null, e), true);
}
function Dv(e) {
  return (e && (e.base || (e.nodeType === 1 && e))) || null;
}

const Uv = (e, t) => e(t);

const Fv = (e, t) => {
  let n;
  const te_debounceRendering = te.debounceRendering;
  te.debounceRendering = s => {
    n = s;
  };
  try {
    const r = e(t);

    if (n) {
      n();
    }

    return r;
  } finally {
    te.debounceRendering = te_debounceRendering;
  }
};

const Bv = Yo;

const So = {
  useState: L,
  useId: yd,
  useReducer: Ji,
  useEffect: U,
  useLayoutEffect: St,
  useInsertionEffect: Nd,
  useTransition: kd,
  useDeferredValue: Cd,
  useSyncExternalStore: Ed,
  startTransition: Sd,
  useRef: x,
  useImperativeHandle: ea,
  useMemo: Te,
  useCallback: I,
  useContext: Go,
  useDebugValue: vd,
  version: "18.3.1",
  Children: bv,
  render: Pd,
  hydrate: Av,
  unmountComponentAtNode: xd,
  createPortal: $,
  createElement: Et,
  createContext: eo,
  createFactory: Ov,
  cloneElement: Mv,
  createRef: qf,
  Fragment: ve,
  isValidElement: Yo,
  isElement: Bv,
  isFragment: xv,
  isMemo: $v,
  findDOMNode: Dv,
  Component: ut,
  PureComponent: _i,
  memo: Zr,
  forwardRef: Td,
  flushSync: Fv,
  unstable_batchedUpdates: Uv,
  StrictMode: ve,
  Suspense: De,
  SuspenseList: Eo,
  lazy: ce,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Pv,
};

function Hv(e) {
  return (
    Oo(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function Vv(e) {
  const t = { ...e };
  rd(t, "react");
  rm("react", { version: Od });
  const n = _v(t);
  wu(Wv);
  return n;
}
function Wv(e) {
  return Hv(e) ? "[SyntheticEvent]" : gd(e);
}
function jv(e) {
  const t = e.match(/^([^.]+)/);
  return t !== null && parseInt(t[0]) >= 17;
}
function zv(e, t) {
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
function qv(e, { componentStack: t }, n) {
  if (jv(Od) && Ot(e) && t) {
    const o = new Error(e.message);
    (o.name = `React ErrorBoundary ${e.name}`);
    (o.stack = t);
    zv(e, o);
  }
  return Wu(e, n);
}
const Gv = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
const bs = { componentStack: null, error: null, eventId: null };
class Yv extends ut {
  constructor(t) {
    super(t);
    (this.state = bs);
    (this._openFallbackReportDialog = true);
    const n = Be();

    if (n &&
      t.showDialog) {
      (this._openFallbackReportDialog = false);

      (this._cleanupHook = n.on("afterSendEvent", (o) => {
        if (!o.type &&
          this._lastEventId &&
          o.event_id === this._lastEventId) {
          Uc({ ...t.dialogOptions, eventId: this._lastEventId });
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

    Iu((l) => {
      if (beforeCapture) {
        beforeCapture(l, t, componentStack);
      }

      const u =
          this.props.handled != null
            ? this.props.handled
            : !!this.props.fallback;

      const d = qv(t, n, {
        mechanism: { handled: u, type: "auto.function.react.error_boundary" },
      });

      if (onError) {
        onError(t, componentStack, d);
      }

      if (showDialog) {
        (this._lastEventId = d);
        this._openFallbackReportDialog && Uc({ ...dialogOptions, eventId: d });
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
      if (this.state === bs) {
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

    this.setState(bs);
  }
  render() {
    const { fallback, children } = this.props;
    const o = this.state;
    if (o.componentStack === null) {
      return typeof children == "function" ? children() : children;
    }
    const r =
      typeof fallback == "function"
        ? Et(fallback, {
            error: o.error,
            componentStack: o.componentStack,
            resetError: () => this.resetErrorBoundary(),
            eventId: o.eventId,
          })
        : fallback;
    return Yo(r)
      ? r
      : (fallback && Gv && Y.warn("fallback did not produce a valid ReactElement"),
        null);
  }
}
Vv({
  dsn: "https://693c388031bcee4cd87e917055abf6a2@sentry.xn--d1ah4a.com/2",
  environment: "production",
  enabled: true,
  sendDefaultPii: true,
  tracesSampleRate: 0.1,
  release: "1.1.2",
});
function Kv(e) {
  return {
    render(t) {
      Pd(t, e);
    },
    unmount() {
      xd(e);
    },
  };
}
const Xv = "modulepreload";

const Qv = e => `/${e}`;

const tl = {};

const se = (t, n, o) => {
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
        (u = Qv(u));

        if (u in tl) {
          return;
        }

        tl[u] = true;
        const d = u.endsWith(".css");
        const p = d ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${u}"]${p}`)) {
          return;
        }
        const f = document.createElement("link");
        (f.rel = d ? "stylesheet" : Xv);

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
  return r.then((a) => {
    for (const c of a || []) {
      if (c.status === "rejected") {
        s(c.reason);
      }
    }
    return t().catch(s);
  });
};

const Zv = {};
function or(e, t) {
  for (const n in t) {
    e[n] = t[n];
  }
  return e;
}
function Jv(e, t, n) {
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
  (e = vi(e.replace(r, "")));
  (t = vi(t || ""));
  for (let d = Math.max(e.length, t.length), p = 0; p < d; p++) {
    if (t[p] && t[p].charAt(0) === ":") {
      const f = t[p].replace(/(^:|[+*?]+$)/g, "");
      const h = (t[p].match(/[+*?]+$/) || Zv)[0] || "";
      const m = ~h.indexOf("+");
      const _ = ~h.indexOf("*");
      const v = e[p] || "";
      if (!v && !_ && (!h.includes("?") || m)) {
        o = false;
        break;
      }
      (a[f] = decodeURIComponent(v));

      if (m || _) {
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
function ey(e, t) {
  return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index;
}
function ty(e, t) {
  (e.index = t);

  (e.rank = (n => n.props.default ? 0 : vi(n.props.path).map(ny).join(""))(e));

  return e.props;
}
function vi(e) {
  return e.replace(/(^\/+|\/+$)/g, "").split("/");
}
function ny(e) {
  return e.charAt(0) == ":"
    ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4
    : 5;
}
const oy = {};
const Tn = [];
const Ro = [];
let ot = null;
const oa = { url: ra() };
const $d = eo(oa);
function Jr() {
  const e = Go($d);
  if (e === oa) {
    const t = L()[1];
    U(() => {
      Ro.push(t);

      return () => Ro.splice(Ro.indexOf(t), 1);
    }, []);
  }
  return [e, Ye];
}
function ra() {
  let e;
  return `${(e =
  ot && ot.location
    ? ot.location
    : ot && ot.getCurrentLocation
    ? ot.getCurrentLocation()
    : typeof location !== "undefined"
    ? location
    : oy).pathname || ""}${e.search || ""}`;
}
function Ye(e, t = false) {
  if (typeof e != "string" && e.url) {
    (t = e.replace);
    (e = e.url);
  }

  if ((n => {
    for (let o = Tn.length; o--; ) {
      if (Tn[o].canRoute(n)) {
        return true;
      }
    }
    return false;
  })(e)) {
    ((n, o = "push") => {
      if (ot && ot[o]) {
        ot[o](n);
      } else if (typeof history !== "undefined" &&
          history[`${o}State`]) {
        history[`${o}State`](null, null, n);
      }
    })(e, t ? "replace" : "push");
  }

  return Md(e);
}
function Md(e) {
  let t = false;
  for (let n = 0; n < Tn.length; n++) {
    if (Tn[n].routeTo(e)) {
      (t = true);
    }
  }
  return t;
}
function ry(e) {
  if (e && e.getAttribute) {
    const t = e.getAttribute("href");
    const n = e.getAttribute("target");
    if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i))) {
      return Ye(t);
    }
  }
}
function sy(e) {
  if (e.stopImmediatePropagation) {
    e.stopImmediatePropagation();
  }

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  e.preventDefault();
  return false;
}
function iy(e) {
  if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
    let e_target = e.target;
    do {
      if (e_target.localName === "a" && e_target.getAttribute("href")) {
        if (e_target.hasAttribute("data-native") || e_target.hasAttribute("native")) {
          return;
        }
        if (ry(e_target)) {
          return sy(e);
        }
      }
    } while ((e_target = e_target.parentNode));
  }
}
function Dd(e) {
  if (e.history) {
    (ot = e.history);
  }

  (this.state = { url: e.url || ra() });
}
or((Dd.prototype = new ut()), {
  shouldComponentUpdate(e) {
    return (e.static !== true ||
    e.url !== this.props.url || e.onChange !== this.props.onChange);
  },
  canRoute(e) {
    const t = wt(this.props.children);
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

    if (!nl) {
      (nl = true);

      ot ||
        addEventListener("popstate", () => {
          Md(ra());
        });

      addEventListener("click", iy);
    }

    Tn.push(this);

    if (ot) {
      (this.u = ot.listen(t => {
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

    Tn.splice(Tn.indexOf(this), 1);
  },
  componentWillUpdate() {
    this.p = true;
  },
  componentDidUpdate() {
    this.p = false;
  },
  g(e, t) {
    e = e.filter(ty).sort(ey);

    for (const o of e) {
      const r = Jv(t, o.props.path, o.props);
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
    const c = this.g(wt(e.children), t_url);

    if (c) {
      (o = du(
            c[0],
            or(or({ url: t_url, matches: (n = c[1]) }, n), {
              key: undefined,
              ref: undefined,
            })
          ));
    }

    if (t_url !== (a && a.url)) {
      or(
        oa,
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
      for (let l = Ro.length; l--; ) {
        Ro[l]({});
      }

      if (typeof e_onChange == "function") {
        e_onChange(a);
      }
    }

    return Et($d.Provider, { value: a }, o);
  },
});

const ol = (e) => {
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

const ay = e => e ? ol(e) : ol;

const cy = e => e;

function ly(e, t = cy) {
  const n = So.useSyncExternalStore(
    e.subscribe,
    So.useCallback(() => t(e.getState()), [e, t]),
    So.useCallback(() => t(e.getInitialState()), [e, t])
  );
  So.useDebugValue(n);
  return n;
}

const rl = (e) => {
  const t = ay(e);

  const n = o => ly(t, o);

  Object.assign(n, t);
  return n;
};

const et = e => e ? rl(e) : rl;

function sa(e, t) {
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

const yi = e => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(o) {
              return yi(o)(n);
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
          return yi(o)(n);
        },
      };
    }
  };

const Ud = (e, t) => (n, o, r) => {
  let s = {
      storage: sa(() => window.localStorage),
      partialize: v => v,
      version: 0,
      merge: (v, g) => ({
        ...g,
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
  r.setState = (v, g) => {
    r_setState(v, g);
    return p();
  };
  const h = e((...v) => {
    n(...v);
    return p();
  }, o, r);
  r.getInitialState = () => h;
  let m;
  const _ = () => {
    let g;
    if (!s_storage) {
      return;
    }
    const E = ++c;
    (a = false);

    l.forEach((k) => {
      let C;
      return k((C = o()) != null ? C : h);
    });

    const y =
      ((g = s.onRehydrateStorage) == null
        ? undefined
        : g.call(s, (v = o()) != null ? v : h)) || undefined;
    return yi(s_storage.getItem.bind(s_storage))(s.name)
      .then((k) => {
        if (k) {
          if (typeof k.version == "number" && k.version !== s.version) {
            if (s.migrate) {
              const C = s.migrate(k.state, k.version);
              return C instanceof Promise ? C.then(b => [true, b]) : [true, C];
            }
            console.error(
              "State loaded from storage couldn't be migrated since no migrate function was provided"
            );
          } else {
            return [false, k.state];
          }
        }
        return [false, undefined];
      })
      .then((k) => {
      let C;
      if (E !== c) {
        return;
      }
      const [b, w] = k;
      (m = s.merge(w, (C = o()) != null ? C : h));
      n(m, true);

      if (b) {
        return p();
      }
    })
      .then(() => {
      if (E === c) {
        y?.(o(), undefined);
        (m = o());
        (a = true);
        u.forEach(k => k(m));
      }
    })
      .catch((k) => {
      if (E === c) {
        y?.(undefined, k);
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
      ++c;
      s_storage?.removeItem(s.name);
    },
    getOptions: () => s,
    rehydrate: () => _(),
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
    _();
  }

  return m || h;
};

const Fd = et((e, t) => ({
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

const dy = et((e, t) => ({
  isOpen: false,
  options: null,
  session: 0,
  open: n => e({ isOpen: true, options: n, session: t().session + 1 }),
  close: () => e({ isOpen: false, options: null })
}));

const fy = et((e, t) => ({
  navigatedInApp: false,

  markNavigated: () => {
    if (!t().navigatedInApp) {
      e({ navigatedInApp: true });
    }
  }
}));

const Ze = {
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

function $e(e) {
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

const py = 4000/* 4e3 */;

const $r = et((e, t) => ({
  toasts: [],

  addToast: (n) => {
    const o = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const r = n.duration ?? py;

    e(s => ({
      toasts: [...s.toasts, { ...n, id: o, duration: r }]
    }));

    if (r > 0) {
      setTimeout(() => {
        t().removeToast(o);
      }, r);
    }

    return o;
  },

  removeToast: (n) => {
    e(o => ({
      toasts: o.toasts.filter(r => r.id !== n)
    }));
  }
}));

const vt = {
  success: (e, t) => $r.getState().addToast({ type: "success", message: e, duration: t }),
  error: (e, t) => $r.getState().addToast({ type: "error", message: e, duration: t }),
};

const hy = {
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

const my = {
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

const gy = [
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

const _y = {
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

function Bd(e) {
  return _y[e] ?? e;
}
function vy(e) {
  const my_e = my[e];
  if (my_e) {
    return my_e;
  }
  for (const { pattern, translate } of gy) {
    const r = e.match(pattern);
    if (r) {
      return translate(r);
    }
  }
  return e;
}
function ia(e, t = "Произошла ошибка") {
  const n = vy(t);
  return n !== t || /[А-Яа-яЁё]/.test(n) || !e ? n : hy[Bd(e)] ?? n;
}
const Hd = "/api";

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

let Mo = null;
const wi = new Set();
function un() {
  return Mo;
}
function Vd(e) {
  if (Mo !== e) {
    Mo = e;
    for (const t of wi) {
      t(e);
    }
  }
}
function yy(e) {
  wi.add(e);

  return () => {
    wi.delete(e);
  };
}
function sl() {
  return Mo ? { Authorization: `Bearer ${Mo}` } : {};
}
let bi = null;
function wy(e) {
  bi = e;
}
async function by(e) {
  const navigator_locks = navigator.locks;
  return navigator_locks?.request ? await navigator_locks.request("auth:refresh", e) : e();
}
async function Ei() {
  return bi
    ? uo ||
        ((uo = by(bi).finally(() => {
          uo = null;
        })),
        uo)
    : null;
}
async function Ey(e, t = {}) {
  const n = () => {
    const s = new Headers(t.headers);
    const a = un();

    if (a) {
      s.set("Authorization", `Bearer ${a}`);
    }

    return fetch(e, { credentials: "include", ...t, headers: s });
  };

  const o = await n();
  return o.status !== 401 || !(await Ei()) ? o : n();
}
function Sy() {
  const e = "device_id";
  let t = localStorage.getItem(e);

  if (!t) {
    (t = crypto.randomUUID());
    localStorage.setItem(e, t);
  }

  return t;
}
const il = Sy();
class Wd {
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
    if (t.status !== Ze.UNAUTHORIZED) {
      if (t.code === "PHONE_VERIFICATION_REQUIRED") {
        window.dispatchEvent(new Event("phone-verification-required"));
        return;
      }
      if (t.code === "WRITE_ACCESS_RESTRICTED") {
        vt.error("Вы не можете сделать это сегодня. Попробуйте завтра.");
        return;
      }
      vt.error(ia(t.code, t.message || "Произошла ошибка"));
    }
  }
  buildUrl(t) {
    const n = this.baseURL.replace(/\/$/, "");
    const o = t.startsWith("/") ? t : `/${t}`;
    return `${n}${o}`;
  }
  buildHeaders(t) {
    const n = new Headers({ ...this.defaultHeaders, ...t, ...sl() });
    n.set("X-Device-Id", il);
    return n;
  }
  async handleResponse(t) {
    if (t.status === Ze.NO_CONTENT) {
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
      case Ze.BAD_REQUEST:
        {
          return H.BAD_REQUEST;
        }
      case Ze.UNAUTHORIZED:
        {
          return H.UNAUTHORIZED;
        }
      case Ze.FORBIDDEN:
        {
          return H.ACCESS_DENIED;
        }
      case Ze.NOT_FOUND:
        {
          return H.ENTITY_NOT_FOUND;
        }
      case Ze.CONFLICT:
        {
          return H.ENTITY_ALREADY_EXISTS;
        }
      case Ze.UNPROCESSABLE_ENTITY:
        {
          return H.VALIDATION_ERROR;
        }
      case Ze.TOO_MANY_REQUESTS:
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
    (s.code = Bd(o));
    (s.errors = r);
    (s.name = "ApiError");
    return s;
  }
  async executeRequest(t, n, o, r, s = false) {
    const a = this.buildUrl(n);
    const c = this.buildHeaders(r?.headers);
    const l = new AbortController();
    const u = r?.timeout ?? this.defaultTimeout;

    const d = setTimeout(() => l.abort(), u);

    try {
      const f =
          o instanceof ArrayBuffer ||
          (typeof Uint8Array !== "undefined" && o instanceof Uint8Array) ||
          (typeof Blob !== "undefined" && o instanceof Blob)
            ? o
            : o != null
            ? JSON.stringify(o)
            : undefined;

      const { headers, skipErrorToast, ..._ } = r ?? {};

      const v = await fetch(a, {
        method: t,
        body: f,
        signal: l.signal,
        credentials: "include",
        ..._,
        headers: c,
      });

      clearTimeout(d);
      const g =
        n.startsWith("/auth/") ||
        n.startsWith("/sign-") ||
        n.startsWith("/verify-") ||
        n.startsWith("/resend-") ||
        n.startsWith("/refresh") ||
        n.startsWith("/forgot-") ||
        n.startsWith("/reset-") ||
        n.startsWith("/login/");
      if (v.status === Ze.UNAUTHORIZED && !s && !g && un()) {
        if (await Ei()) {
          return this.executeRequest(t, n, o, r, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Ze.UNAUTHORIZED,
          "Session expired",
          H.UNAUTHORIZED
        );
      }
      return await this.handleResponse(v);
    } catch (p) {
      clearTimeout(d);

      if (p instanceof Error) {
        const f = m => !s && !this.isToastSkipped(r?.skipErrorToast, m.status);
        if (p.name === "AbortError") {
          const m = this.createApiError(0, "Request timeout", H.TIMEOUT);

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
          H.NETWORK_ERROR
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
    const a = { "X-Requested-With": "XMLHttpRequest", "X-Device-Id": il, ...sl() };
    const c = new AbortController();
    const l = o?.timeout ?? this.defaultTimeout;

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

      if (d.status === Ze.UNAUTHORIZED && !r && un()) {
        if (await Ei()) {
          return this.uploadFormData(t, n, o, true);
        }
        this.onUnauthorizedCallback?.();

        throw this.createApiError(
          Ze.UNAUTHORIZED,
          "Session expired",
          H.UNAUTHORIZED
        );
      }

      return await this.handleResponse(d);
    } catch (d) {
      clearTimeout(u);

      if (d instanceof Error) {
        if (d.name === "AbortError") {
          const f = this.createApiError(0, "Request timeout", H.TIMEOUT);

          if (!r) {
            this.notifyError(f);
          }

          throw f;
        }
        if (d.name === "ApiError") {
          if (!r) {
            this.notifyError(d);
          }

          throw d;
        }
        const p = this.createApiError(
          0,
          d.message || "Network error",
          H.NETWORK_ERROR
        );

        if (!r) {
          this.notifyError(p);
        }

        throw p;
      }

      throw d;
    }
  }
}
const O = new Wd({ baseURL: Hd, timeout: 30000/* 3e4 */ });
const kt = new Wd({ baseURL: "/api/v1/auth", timeout: 30000/* 3e4 */ });

const es = et((e, t) => ({
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

const jd = () => es(e => e.portal);

const GL = () => es(e => e.loaded);

const Cy = "/public/events/aliceai";
function zd(e) {
  if (!e.active || !e.url) {
    return false;
  }
  try {
    return new URL(e.url, window.location.origin).pathname.startsWith(`${Cy}/`);
  } catch {
    return false;
  }
}
const Do = new Set();
let Ao = null;
const ky = 30000/* 3e4 */;
function Ny() {
  if (Ao === null) {
    (Ao = window.setInterval(() => {
        Do.forEach(e => e());
      }, ky));
  }
}
function Ty() {
  if (Ao !== null) {
    clearInterval(Ao);
    (Ao = null);
  }
}
function Iy(e) {
  Do.add(e);

  if (Do.size === 1) {
    Ny();
  }
}
function Ry(e) {
  Do.delete(e);

  if (Do.size === 0) {
    Ty();
  }
}
function Es(e) {
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
function qd(e) {
  const t = new Date(e).getTime();
  const n = !isNaN(t);
  const o = n ? t : 0;

  const [r, s] = L(() => n ? Es(new Date(o)) : "");

  U(() => {
    if (!n) {
      s("");
      return;
    }
    const a = new Date(o);
    s(Es(a));
    const c = () => {
      s(Es(a));
    };
    Iy(c);

    return () => Ry(c);
  }, [o, n]);

  return r;
}
const al = 1174;
function Yt() {
  const [e, t] = L(() => typeof window === "undefined" ? false : window.innerWidth < al);

  U(() => {
    const n = window.matchMedia(`(max-width: ${al - 1}px)`);

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
const Ay = eo({ isHidden: false });

const Ly = () => {
  const [e, t] = L(false);
  const n = x(0);

  U(() => {
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

function ts(e = "", t = []) {
  const [n, o] = L(e);
  const [r, s] = L(t);
  const a = x(null);

  const c = I((d, p) => {
    o(d);
    s(p);
  }, []);

  const l = I((d) => {
    a.current?.insertText(d);
  }, []);

  const u = I(() => {
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
function Py({
  sentinelRef: e,
  hasMore: t,
  isLoading: n,
  onLoadMore: o,
  rootMargin: r = "100px",
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
          o();
        }
      },
      { rootMargin: r }
    );
    a.observe(e_current);

    return () => a.disconnect();
  }, [t, n, o, r, e]);
}
function Oy({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  gap: o = 0,
  getItemKey: r = l => l,
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

  const p = x(s ?? new Map());
  const f = x(null);
  const h = x(null);
  const m = x(new Map());
  const _ = x(r);
  _.current = r;

  const v = w => p.current.get(r(w)) ?? t;

  const g = (w) => {
    let N = 0;
    for (let T = 0; T < w; T++) {
      N += v(T) + o;
    }
    return N;
  };

  const E = () => {
    if (e === 0) {
      return 0;
    }
    let w = 0;
    for (let N = 0; N < e; N++) {
      w += v(N);
    }
    (w += Math.max(0, e - 1) * o);
    return w;
  };

  const y = () => {
    if (e === 0) {
      return { start: 0, end: 0 };
    }
    const w = u();
    const N = d();
    let T = 0;
    let S = 0;
    for (let A = 0; A < e; A++) {
      const B = v(A) + o;
      if (S + B > w) {
        T = A;
        break;
      }
      S += B;
    }
    let P = T;
    let R = 0;
    for (let A = T; A < e && ((R += v(A) + o), (P = A), !(R >= N)); A++)
      {}
    return { start: Math.max(0, T - n), end: Math.min(e - 1, P + n) };
  };

  const k = () => {
    if (e === 0) {
      return [];
    }
    const { start, end } = y();
    const T = [];
    for (let S = start; S <= end; S++) {
      T.push({ index: S, key: r(S), start: g(S) });
    }
    return T;
  };

  if (!h.current) {
    (h.current = new ResizeObserver((w) => {
      let N = false;
      for (const T of w) {
        const T_target = T.target;
        const P = m.current.get(T_target);
        if (P === undefined) {
          continue;
        }
        const R = T.borderBoxSize && T.borderBoxSize[0];
        const A = R ? R.blockSize : T_target.getBoundingClientRect().height;

        if (A > 0 && p.current.get(P) !== A) {
          p.current.set(P, A);
          (N = true);
        }
      }

      if (N) {
        l(T => T + 1);
      }
    }));
  }

  const C = I((w, N) => {
    if (!w) {
      return;
    }
    const T = _.current(N);
    m.current.set(w, T);
    h.current?.observe(w, { box: "border-box" });
    const S = w.getBoundingClientRect().height;

    if (S > 0 && p.current.get(T) !== S) {
      p.current.set(T, S);
      l(P => P + 1);
    }
  }, []);

  St(() => {
    const w = a ?? window;

    const N = () => {
      if (!f.current) {
        (f.current = requestAnimationFrame(() => {
          (f.current = null);

          l(T => T + 1);
        }));
      }
    };

    w.addEventListener("scroll", N, { passive: true });

    l(T => T + 1);

    return () => {
      w.removeEventListener("scroll", N);

      if (f.current) {
        cancelAnimationFrame(f.current);
      }
    };
  }, [a]);

  U(
    () => () => {
      h.current?.disconnect();
      m.current.clear();
    },
    []
  );

  const b = I(() => new Map(p.current), []);
  return {
    virtualItems: k(),
    totalSize: E(),
    measureElement: C,
    getMeasuredHeights: b,
  };
}
const xy = "https://cdn.xn--d1ah4a.com/public/assets/icons";
const cl = "itd:icons:checkedAt";
const $y = 1800 * 1000/* 1e3 */;
const Mr = new Map();
const Ss = new Map();
const Sr = new Map();

const My = e => `${xy}/${e}.svg`;

const Dy = (() => {
  try {
    const e = Number(localStorage.getItem(cl) ?? 0);
    return Date.now() - e < $y
      ? false
      : (localStorage.setItem(cl, String(Date.now())), true);
  } catch {
    return false;
  }
})();

const Uy = e => /^\s*<svg[\s>]/i.test(e) &&
!/<script|<foreignObject|\son[a-z]+\s*=/i.test(e);

const Fy = { liked: "--accent-liked" };
const By = /fill\s*=\s*["'](#[0-9a-fA-F]{3,8})["']/;

const Hy = (e, t) => {
  const Fy_e = Fy[e];
  if (!Fy_e || typeof document === "undefined") {
    return;
  }
  const o = By.exec(t)?.[1];

  if (o) {
    document.documentElement.style.setProperty(Fy_e, o);
  }
};

const Vy = (e, t) => {
  Mr.set(e, t);
  Hy(e, t);

  Sr.get(e)?.forEach(n => n(t));
};

const Wy = (e, t = false) => {
  if (!t) {
    const r = Mr.get(e);
    if (r) {
      return Promise.resolve(r);
    }
    const s = Ss.get(e);
    if (s) {
      return s;
    }
  }
  const n = t ? "reload" : Dy ? "no-cache" : "force-cache";

  const o = fetch(My(e), { cache: n })
    .then(async (r) => {
      if (!r.ok) {
        return null;
      }
      const s = await r.text();
      return Uy(s) ? (Vy(e, s), s) : null;
    })
    .catch(() => null)
    .finally(() => Ss.delete(e));

  Ss.set(e, o);
  return o;
};

const jy = (e, t) => e.replace(/<svg\b([^>]*)>/i, (n, o) => {
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

const aa = ({ name: e, size: t = 20, className: n }) => {
  const [o, r] = L(() => Mr.get(e) ?? null);
  U(() => {
    r(Mr.get(e) ?? null);
    const a = Sr.get(e) ?? new Set();
    a.add(r);
    Sr.set(e, a);
    Wy(e);

    return () => {
      a.delete(r);

      if (a.size === 0) {
        Sr.delete(e);
      }
    };
  }, [e]);
  const s = typeof t == "number" ? `${t}px` : t;
  return i("span", {
    "data-icon": e,
    "aria-hidden": "true",
    className: n,
    style: { display: "block", width: s, height: s, lineHeight: 0 },
    dangerouslySetInnerHTML: o ? { __html: jy(o, t) } : undefined,
  });
};

const zy = ({ size: e = 18 }) => i("svg", {
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

const qy = ({ size: e = 18 }) => i("svg", {
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

const Gy = ({ size: e = 18 }) => i("svg", {
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

const Gd = ({ size: e = 18 }) => i("svg", {
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

const Yy = ({ size: e = 18 }) => i("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", {
    d: "M10 8c-2.2 0-4 1.8-4 4v6h6v-6H8c0-1.1.9-2 2-2V8zm8 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2V8z",
  }),
});

const Ky = ({ size: e = 18 }) => i("svg", {
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

const Xy = ({ size: e = 18 }) => i("svg", {
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

const Qy = ({ size: e = 18 }) => i("svg", {
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

const Zy = ({ size: e = 18 }) => i("svg", {
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

const Jy = ({ size: e = 24 }) => i("svg", {
  width: e,
  height: e,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: i("path", { d: "M8 5v14l11-7z" }),
});

const e0 = ({ size: e = 24 }) => i("svg", {
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

const Yd = ({ size: e = 20 }) => i("svg", {
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

const t0 = ({ size: e = 8 }) => i("svg", {
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

const n0 = ({ size: e = 8 }) => i("svg", {
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

const o0 = () => i("svg", {
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

const ft = ({ size: e = 24 }) => i("svg", {
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

const Kd = ({ size: e = 20 }) => i(aa, { name: "comment", size: e });

const Xd = ({ size: e = 18 }) => i("svg", {
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

const r0 = ({ size: e = 24 }) => i("svg", {
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

const Qd = () => i("svg", {
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

const Zd = ({ size: e = 18 }) => i("svg", {
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

const Jd = ({ size: e = 24 }) => i("svg", {
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

const ca = ({ filled: e = false, size: t = 20, className: n }) => i(aa, { name: e ? "liked" : "like", size: t, className: n });

const la = ({ size: e = 24 }) => i("svg", {
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

const s0 = ({ size: e = 24 }) => i("svg", {
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

const ef = ({ size: e = 18 }) => i("svg", {
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

const ua = ({ size: e = 24 }) => i("svg", {
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

const i0 = ({ size: e = 24 }) => i("svg", {
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

const Si = ({ size: e = 24 }) => i("svg", {
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

const ll = ({ size: e = 18 }) => i("svg", {
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

const da = ({ size: e = 24 }) => i("svg", {
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

const a0 = ({ size: e = 20 }) => i("svg", {
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

const fa = ({ size: e = 20 }) => i(aa, { name: "share", size: e });

const tf = ({ size: e = 24 }) => i("svg", {
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

const nf = ({ size: e = 24 }) => i("svg", {
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

const c0 = ({ size: e = 20, color: t = "currentColor" }) => i("svg", {
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

const l0 = ({ size: e = 24 }) => i("svg", {
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

const u0 = ({ size: e = 48 }) => i("svg", {
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

const of = ({ size: e = 18 }) => i("svg", {
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

const d0 = ({ size: e = 16 }) => i("svg", {
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

const f0 = ({ size: e = 20 }) => i("svg", {
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

const p0 = "ZG2D";
const h0 = "vMiE";
const m0 = "gS94";
const g0 = "rF7f";
const _0 = "D8Os";
const v0 = "jxZH";
const y0 = "aXaQ";
const w0 = "ZnQe";
const b0 = "F3iB";
const E0 = "qdYt";
const S0 = "PD8Q";
const C0 = "cBu4";
const k0 = "Gp1F";

const Ve = {
  aside: p0,
  asideBottom: h0,
  logoutButton: m0,
  asideBrand: g0,
  asideBrandVersion: _0,
  nav: v0,
  navItem: y0,
  active: w0,
  iconWrapper: b0,
  portalButton: E0,
  portalActive: S0,
  portalImage: C0,
  badge: k0,
};

const le = {
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

const ul = [
  le.SHOP,
  le.LOGIN,
  le.REGISTER,
  le.FORGOT_PASSWORD,
  le.RESET_PASSWORD,
  le.VERIFY_EMAIL,
  le.TERMS,
  le.PRIVACY,
  le.COOKIES,
  le.EXTERNAL,
  le.SUPPORT,
  le.CHILD_SAFETY,
  le.SUBSCRIPTION_TERMS,
];

const pa = [
  le.LOGIN,
  le.REGISTER,
  le.FORGOT_PASSWORD,
  le.RESET_PASSWORD,
  le.VERIFY_EMAIL,
  le.ONBOARDING,
];

const N0 = {
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

function ha(e) {
  const t = e.type === "repost" ? null : e.subjectId ?? null;
  return {
    id: e.id,
    type: N0[e.type] ?? "follow",
    entityId: t ?? e.targetId ?? null,
    parentEntityId: t ? e.targetId ?? null : null,
    isRead: e.read ?? false,
    payload: {
      actors: e.actor ? [e.actor] : [],
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

const fo = {
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
      const a = await O.get(s);
      const c = a.notifications ?? [];
      const l = a.hasMore ? String(o + c.length) : null;
      return { notifications: c.map(ha), nextCursor: l };
    },
    async getUnreadCount() {
      return (await O.get(D.notifications.count)).count;
    },
    async getUnreadStatus() {
      return O.get(D.notifications.count);
    },
    async markAllAsRead() {
      await O.post(D.notifications.markAllRead);
    },
    async getSettings() {
      const e = await O.get(D.notifications.settings);
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

      await O.put(D.notifications.settings, t);
    },
  };

const dl = [1000/* 1e3 */, 2000/* 2e3 */, 4000/* 4e3 */, 8000/* 8e3 */, 16000/* 16e3 */, 30000/* 3e4 */];
const T0 = 0.3;
const I0 = 15;
function R0(e) {
  const t = dl[Math.min(e, dl.length - 1)];
  const n = t * T0 * (Math.random() * 2 - 1);
  return Math.round(t + n);
}
function A0(e) {
  const { url, onMessage, onStatusChange } = e;
  let r = null;
  let s = null;
  let a = 0;
  let c = null;
  function l() {
    if (r || s) {
      return;
    }
    if (!un()) {
      onStatusChange("error");
      return;
    }
    onStatusChange("connecting");
    const d = new AbortController();
    (r = d);

    (async () => {
      try {
        const f = await Ey(url, {
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
        const m = new TextDecoder();
        let _ = "";
        let v = "";
        let g = [];

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
          _ += m.decode(value, { stream: true });
          const k = _.split(`
`);
          _ = k.pop() || "";
          for (const C of k) {
            const b = C.replace(/\r$/, "");
            if (b.startsWith("event:")) {
              v = b.slice(6).replace(/^ /, "");
            } else if (b.startsWith("data:")) {
              g.push(b.slice(5).replace(/^ /, ""));
            } else if (b === "") {
              if (g.length) {
                try {
                  const w = JSON.parse(
                      g.join(`
`)
                    );

                  const N = v || w.type;
                  onMessage(N, w);
                } catch {
                  console.error("SSE message parse error");
                }
              }
              (v = "");
              (g = []);
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

        if (a >= I0) {
          console.warn(
            "SSE: Max reconnect attempts reached, stopping reconnection"
          );
          return;
        }

        const h = R0(a);
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
const L0 = "/assets/chalk_icon-D6lU3ica.svg";
const P0 = "/assets/curtain_gathered-C9r-YF7B.png";
const O0 = "/assets/curtain_spread-BNRn2v1V.png";
const x0 = "/assets/curtains_icon-d6IVj7Uz.svg";
const $0 = "/assets/cushion_fart-CMDuTici.mp3";
const M0 = "/assets/glass_break-dVY7K4gp.wav";
const Ci = "/assets/icon-37-CNQcYznR.svg";
const ki = "/assets/icon2-44-BljxXBI-.svg";
const D0 = "/assets/iconsh-B7n-__fE.svg";
const U0 = "/assets/school_bell-D__r0mih.mp3";
const F0 = "/assets/sticker_5plus-DOjFwL6Q.png";
const B0 = "/assets/sticker_apple-5NwAflFs.png";
const H0 = "/assets/sticker_bow-9c7EnTly.png";
const V0 = "/assets/sticker_school_03-2EGjbexw.webp";
const W0 = "/assets/sticker_school_04-DH5V9MQf.webp";
const j0 = "/assets/sticker_school_05-xwkb2oon.webp";
const z0 = "/assets/sticker_school_06-DQXC4ZRO.webp";
const q0 = "/assets/sticker_school_07-CCPZolQF.webp";
const G0 = "/assets/sticker_school_08-Ce8D6oEP.webp";
const Y0 = "/assets/sticker_school_09-BZQ2O5f3.webp";
const K0 = "/assets/sticker_school_10-CmxZNY21.webp";
const X0 = "/assets/sticker_school_12-wmL479lE.webp";
const Q0 = "/assets/sticker_school_13-ByMYsie6.webp";
const Z0 = "/assets/sticker_school_14-DZtvzIpA.webp";
const J0 = "/assets/sticker_school_15-BgTh_9NX.webp";
const ew = "/assets/sticker_school_16-Do43bu8c.webp";
const tw = "/assets/sticker_school_17-BSU7xYJ4.webp";
const nw = "/assets/sticker_school_18-Bf7-nXq4.webp";
const ow = "/assets/sticker_school_19-ul_n3YVs.webp";
const rw = "/assets/sticker_school_20-jjiIUXq1.webp";
const sw = "/assets/sticker_school_21-58wdQpEs.webp";
const iw = "/assets/sticker_school_22-JECzGGuo.webp";
const aw = "/assets/sticker_school_23-BuMgtXwl.webp";
const cw = "/assets/sticker_school_24-CnPPU6Zu.webp";
const lw = "/assets/sticker_school_25-JTb-mSYd.webp";
const uw = "/assets/sticker_school_26-D-SnyQaj.webp";
const dw = "/assets/sticker_school_27-6ffXdqoL.webp";
const fw = "/assets/sticker_school_28-CZD3KsIr.webp";
const pw = "/assets/sticker_school_29-CLYxT5sy.webp";
const hw = "/assets/sticker_school_30-BxFYZtbi.webp";
const mw = "/assets/sticker_school_31-BVMKrhQS.webp";
const gw = "/assets/sticker_school_32-C2ha650b.webp";
const _w = "/assets/sticker_school_33-rvcEWDwh.webp";
const vw = "/assets/sticker_school_46-DS4CbHRm.webp";
const yw = "/assets/sticker_school_47-DHE3Yp0j.webp";
const ww = "/assets/sticker_school_alice_mark-CfF7bkcq.webp";
const bw = "/assets/sticker_school_alice_text-DcPXYUHD.webp";
const Ew = "/assets/sticker_school_photo-DnJFBmUP.webp";
const Sw = "/assets/sticker_school_skull-Cieg1sS4.webp";
const Cw = "/assets/sticker_scrape_1-kIXTTbQP.png";
const kw = "/assets/sticker_scrape_2-DEG3iIMX.png";
const Nw = "/assets/sticker_scrape_3-BQF48-v6.png";
const Tw = "/assets/sticker_star-DCXLHvZd.png";
const Iw = "/assets/sticker_tear_2-BNerZgX5.png";
const Rw = "/assets/sticker_tear_3-DBLwz7Xa.png";
const Aw = "/assets/sticker_toad-k--DanVa.png";
const Lw = "/assets/water_stain-CUu1kwL2.svg";
const Pw = "/assets/window-D5KYvQsI.png";
const Ow = "/assets/window_broken-D0oHzxbP.png";

const xw = Object.assign({
  "./assets/chalk_icon.svg": L0,
  "./assets/curtain_gathered.png": P0,
  "./assets/curtain_spread.png": O0,
  "./assets/curtains_icon.svg": x0,
  "./assets/cushion_fart.mp3": $0,
  "./assets/glass_break.wav": M0,
  "./assets/icon-37.svg": Ci,
  "./assets/icon2-44.svg": ki,
  "./assets/iconsh.svg": D0,
  "./assets/school_bell.mp3": U0,
  "./assets/sticker_5plus.png": F0,
  "./assets/sticker_apple.png": B0,
  "./assets/sticker_bow.png": H0,
  "./assets/sticker_school_03.webp": V0,
  "./assets/sticker_school_04.webp": W0,
  "./assets/sticker_school_05.webp": j0,
  "./assets/sticker_school_06.webp": z0,
  "./assets/sticker_school_07.webp": q0,
  "./assets/sticker_school_08.webp": G0,
  "./assets/sticker_school_09.webp": Y0,
  "./assets/sticker_school_10.webp": K0,
  "./assets/sticker_school_12.webp": X0,
  "./assets/sticker_school_13.webp": Q0,
  "./assets/sticker_school_14.webp": Z0,
  "./assets/sticker_school_15.webp": J0,
  "./assets/sticker_school_16.webp": ew,
  "./assets/sticker_school_17.webp": tw,
  "./assets/sticker_school_18.webp": nw,
  "./assets/sticker_school_19.webp": ow,
  "./assets/sticker_school_20.webp": rw,
  "./assets/sticker_school_21.webp": sw,
  "./assets/sticker_school_22.webp": iw,
  "./assets/sticker_school_23.webp": aw,
  "./assets/sticker_school_24.webp": cw,
  "./assets/sticker_school_25.webp": lw,
  "./assets/sticker_school_26.webp": uw,
  "./assets/sticker_school_27.webp": dw,
  "./assets/sticker_school_28.webp": fw,
  "./assets/sticker_school_29.webp": pw,
  "./assets/sticker_school_30.webp": hw,
  "./assets/sticker_school_31.webp": mw,
  "./assets/sticker_school_32.webp": gw,
  "./assets/sticker_school_33.webp": _w,
  "./assets/sticker_school_46.webp": vw,
  "./assets/sticker_school_47.webp": yw,
  "./assets/sticker_school_alice_mark.webp": ww,
  "./assets/sticker_school_alice_text.webp": bw,
  "./assets/sticker_school_photo.webp": Ew,
  "./assets/sticker_school_skull.webp": Sw,
  "./assets/sticker_scrape_1.png": Cw,
  "./assets/sticker_scrape_2.png": kw,
  "./assets/sticker_scrape_3.png": Nw,
  "./assets/sticker_star.png": Tw,
  "./assets/sticker_tear_2.png": Iw,
  "./assets/sticker_tear_3.png": Rw,
  "./assets/sticker_toad.png": Aw,
  "./assets/water_stain.svg": Lw,
  "./assets/window.png": Pw,
  "./assets/window_broken.png": Ow,
});

const In = {};
for (const [e, t] of Object.entries(xw)) {
  In[e.slice(9)] = t;
}

const $w = e => In[`${e}.webp`] ?? In[`${e}.svg`] ?? In[`${e}.png`] ?? "";

const {
  "glass_break.wav": glass_breakWav,
  "school_bell.mp3": school_bellMp3,
  "cushion_fart.mp3": cushion_fartMp3
} = In;

function Dw(e, t = 0.65, n = Date.now() + 60000/* 6e4 */) {
  if (!e || Date.now() >= n) {
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

    if (!(r || Date.now() >= n)) {
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

  return () => {
    (r = true);
    c();
    o.pause();
  };
}

const fl = {
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

const rr = new Map();
const Ni = new Set();
let Cs;
let Dn = null;
let Co = null;
let Cr = 0;
let Ke = 0;
function rf(e, t = true) {
  if (!e.eventId ||
  !e.expiresAt ||
  !Number.isFinite(Date.parse(e.expiresAt)) ||
  Date.parse(e.expiresAt) <= Date.now()) {
    return;
  }
  const n = ha(e);
  const o = We.getState();

  const r = o.notifications.some(a => a.id === e.id);

  let s = Ni.has(e.id);
  try {
    s ||= sessionStorage.getItem(`alice-reminder:${e.id}`) === "shown";
  } catch {}

  if (t &&
      !r) {
    We.setState({
      notifications: [n, ...o.notifications],
      unreadCount: o.unreadCount + (e.read || s ? 0 : 1),
    });
  }

  if (!(s || e.read || o.settings?.webEnabled === false)) {
    Ni.add(e.id);
    try {
      sessionStorage.setItem(`alice-reminder:${e.id}`, "shown");
    } catch {}

    We.setState({
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
      sf();
    }
  }
}
function Ti(e) {
  We.setState((t) => {
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
function po() {
  if (We.getState().isInitialized) {
    Co || qn.connect();
    Date.now() - Cr > 15000/* 15e3 */ && We.getState().fetchUnreadCount();
  }
}

const qn = A0({
    url: `${Hd}${D.notifications.stream}`,
    onMessage: (e, t) => {
      if (e === "notification.event-ended") {
        Ti(t.eventId);
        We.getState().fetchUnreadCount();
        return;
      }
      if (e === "notification.event" && t.type === "alice_task_reminder") {
        rf(t);
        return;
      }
      if (e === "alice.bell") {
        const n = t;
        const o = Date.parse(n.expiresAt ?? "");
        if (n.id && o > Date.now() && !rr.has(n.id)) {
          for (const [r, s] of rr) {
            if (s <= Date.now()) {
              rr.delete(r);
            }
          }
          rr.set(n.id, o);

          if (We.getState().settings?.soundEnabled !== false) {
            Dw(school_bellMp3, 0.65, o);
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
        const n = ha(t);
        const o = n.payload.actors[0];

        const r = {
          actorId: o?.id,
          id: n.id,
          type: n.type,
          actorName: o?.displayName || "Пользователь",
          actorUsername: o?.username || "",
          actorAvatar: o?.avatar || "",
          count: n.payload.count,
          message: Fw(
            n.type,
            o?.displayName || "Пользователь",
            n.payload.count
          ),
          entityId: n.entityId,
          parentEntityId: n.parentEntityId,
        };

        We.setState(s => ({
          notifications: [n, ...s.notifications],
          unreadCount: s.unreadCount + 1,
          lastSseToast: r
        }));

        if (t.sound) {
          sf();
        }
      }
    },
    onStatusChange: (e) => {
      We.setState({
        sseStatus: e,
        error: e === "error" ? "SSE connection error" : null,
      });

      if (e === "connected" &&
        We.getState().isInitialized) {
        We.getState().fetchUnreadCount();
      }
    },
  });

const We = et()((e, t) => ({
  ...fl,

  initialize: () => {
    if (t().isInitialized) {
      if (!Co) {
        qn.connect();
      }

      return;
    }
    e({ isInitialized: true });
    const n = Ke;

    (Co = t()
      .fetchSettings()
      .then(() => {
        if (n === Ke) {
          qn.connect();
          return t().fetchUnreadCount();
        }
      })
      .finally(() => {
      if (n === Ke) {
        (Co = null);
      }
    }));

    window.addEventListener("focus", po);
    window.addEventListener("online", po);
    const o = 300000/* 3e5 */ + Math.random() * 60000/* 6e4 */;
    Cs = setInterval(() => {
      Ti();

      if (!document.hidden && Date.now() - Cr > o) {
        po();
      }
    }, 1000/* 1e3 */);
  },

  fetchNotifications: async (n = false) => {
    const o = Ke;
    const { status, nextCursor, notifications } = t();
    if (status !== "loading" && !(!n && nextCursor === null && notifications.length > 0)) {
      e({ status: "loading", error: null });
      try {
        const c = n ? undefined : nextCursor ?? undefined;
        const l = await fo.getNotifications({ cursor: c, limit: 20 });
        if (o !== Ke) {
          return;
        }
        e({
          notifications: n ? l.notifications : [...notifications, ...l.notifications],
          nextCursor: l.nextCursor,
          status: "success",
        });
      } catch (c) {
        if (o !== Ke) {
          return;
        }
        const l =
          c instanceof Error ? c.message : "Failed to fetch notifications";
        e({ status: "error", error: l });
      }
    }
  },

  fetchUnreadCount: async () => {
    if (Dn) {
      return Dn;
    }
    Cr = Date.now();
    const n = Ke;

    (Dn = (async () => {
      try {
        const o = await fo.getUnreadStatus();
        if (!t().isInitialized || n !== Ke) {
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
              Ti(s);
            }
          }

          if (o_eventReminders.latest) {
            rf(o_eventReminders.latest, false);
          }
        }
        e({ unreadCount: o.count });
      } catch {
      } finally {
        if (n === Ke) {
          (Dn = null);
        }
      }
    })());

    return Dn;
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
      await fo.markAllAsRead();
    } catch {}
  },

  connectSSE: () => qn.connect(),
  disconnectSSE: () => qn.disconnect(),

  fetchSettings: async () => {
    const n = Ke;
    e({ settingsLoading: true });
    try {
      const o = await fo.getSettings();
      if (n !== Ke) {
        return;
      }
      e({ settings: o, settingsLoading: false });
    } catch {
      if (n === Ke) {
        e({ settingsLoading: false });
      }
    }
  },

  updateSettings: async (n) => {
    const o = Ke;
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
      await fo.updateSettings(n);
    } catch {
      if (o === Ke) {
        e({ settings: r });
      }
    }
  },

  reset: () => {
    Ke++;
    (Co = null);
    (Dn = null);
    (Cr = 0);
    qn.disconnect();

    if (Cs) {
      clearInterval(Cs);
    }

    window.removeEventListener("focus", po);
    window.removeEventListener("online", po);
    Ni.clear();

    window.dispatchEvent(
      new CustomEvent("alice-reminder-expired", { detail: { all: true } })
    );

    e(fl);
  }
}));

const Uw = {
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

function Fw(e, t, n) {
  const Uw_e = Uw[e];
  return Uw_e ? Uw_e(t, n) : "Новое уведомление";
}
function sf() {
  try {
    const e = new Audio("/assets/notification.ogg");
    (e.volume = 0.5);
    e.play().catch(() => {});
  } catch {}
}

const af = () => We(e => e.unreadCount);

const Bw = () => We(e => e.lastSseToast);

const Hw = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/avif",
  "image/heic",
  "image/heif",
];

const Vw = ["video/mp4", "video/webm", "video/quicktime"];
const Ii = ".jpg,.jpeg,.png,.gif,.webp,.avif,.heic,.heif";
const Ww = ".mp4,.webm,.mov";

const Gn = {
  async uploadMedia(e) {
    const t = new FormData();
    t.append("file", e);
    return await O.uploadFormData(D.files.upload, t, { timeout: 300 * 1000/* 1e3 */ });
  },
  async uploadAvatar(e) {
    const t = new FormData();
    t.append("file", e);
    return O.uploadFormData(D.files.uploadAvatar, t, { timeout: 120 * 1000/* 1e3 */ });
  },
  async deleteFile(e) {
    await O.delete(D.files.delete(e));
  },
  isValidImageType(e) {
    return Hw.includes(e.type);
  },
  isValidVideoType(e) {
    return Vw.includes(e.type);
  },
  isValidMediaType(e) {
    return this.isValidImageType(e) || this.isValidVideoType(e);
  },
};

const jw = {
  async getChangelog() {
    const e = await O.get(D.platform.changelog);
    return Array.isArray(e) ? e : e?.data ?? [];
  },
  async getAnnouncements() {
    const e = await O.get(D.platform.announcements);
    return Array.isArray(e) ? e : e?.announcements ?? [];
  },
};

class ma {
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
function pl(e) {
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
const en = new ma(100, 300 * 1000/* 1e3 */);
const zw = 60 * 1000/* 1e3 */;
setInterval(() => en.cleanup(), 120 * 1000/* 1e3 */);
const sr = {
  async checkUsername(e) {
    return (
      await O.get(`/users/check-username?username=${encodeURIComponent(e)}`)
    ).available;
  },
  async createProfile(e) {
    return await O.post("/users/profile", e);
  },
  async getMyProfile() {
    const e = await O.get(D.users.me);
    return pl(e);
  },
  async updateProfile(e) {
    return await O.put(D.users.updateProfile, e);
  },
  async getProfileByUsername(e) {
    const t = e.toLowerCase();
    const n = en.get(t);

    if (n && en.isFresh(t, zw)) {
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
    return en.get(e.toLowerCase()) ?? null;
  },
  async _fetchAndCacheProfile(e, t) {
    const n = await O.get(D.users.profile(e), {
        skipErrorToast: [Ze.NOT_FOUND],
      });

    const o = pl(n);
    en.set(t, o);
    return o;
  },
  invalidateProfileCache(e) {
    en.delete(e.toLowerCase());
  },
  updateProfileCache(e, t) {
    const n = e.toLowerCase();
    const o = en.get(n);

    if (o) {
      en.set(n, { ...o, ...t });
    }
  },
  async followUser(e) {
    await O.post(D.users.follow(e), {});
  },
  async unfollowUser(e) {
    await O.delete(D.users.follow(e));
  },
  async pinPost(e) {
    await O.post(D.posts.pin(e));
  },
  async unpinPost(e) {
    await O.delete(D.posts.pin(e));
  },
  async getPrivacySettings() {
    const e = await O.get(D.users.privacy);
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

    await O.put(D.users.privacy, t);
  },
  async getVerificationStatus() {
    try {
      return await O.get(D.verification.status);
    } catch (e) {
      if (e && typeof e == "object" && "status" in e && e.status === 404) {
        return null;
      }
      throw e;
    }
  },
  async submitVerificationRequest(e) {
    return await O.post(D.verification.submit, { videoUrl: e });
  },
  async getMyPins() {
    const e = await O.get(D.users.pins);
    const t = e.data ?? e;
    return { pins: t.pins ?? [], activePin: t.activePin ?? null };
  },
  async setActivePin(e) {
    await O.put(D.users.setPin, { slug: e });
  },
  async removeActivePin() {
    await O.delete(D.users.setPin);
  },
  async deleteAccount() {
    await O.delete(D.users.deleteAccount);
  },
  async restoreAccount() {
    await O.post(D.users.restoreAccount);
  },
};
function hl(e) {
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
const Wt = et(e => ({
  statuses: {},

  setStatuses: t => e(n => ({
    statuses: { ...n.statuses, ...t }
  })),

  setStatus: (t, n) => e(o => ({
    statuses: { ...o.statuses, [t]: n }
  })),

  clear: () => e({ statuses: {} })
}));
let Ri = new Set();
function qw() {
  if (!ks) {
    (null = setTimeout(async () => {
      ks = null;
      const e = Array.from(Ri);
      Ri.clear();

      if (e.length !== 0) {
        for (let t = 0; t < e.length; t += 20) {
          const n = e.slice(t, t + 20);
          try {
            const o = await Ai.batchFollowStatus(n);
            Wt.getState().setStatuses(o);
          } catch {}
        }
      }
    }, 50));
  }
}
function Gw(e) {
  const t = ge(s => s.profile?.id);

  const n = Wt(s => s.statuses);

  const o = x("");

  U(() => {
    if (!t) {
      return;
    }

    const s = e.filter(c => c !== t && n[c] === undefined);

    const a = s.sort().join(",");
    if (!(a === o.current || a === "")) {
      o.current = a;
      for (const c of s) {
        Ri.add(c);
      }
      qw();
    }
  }, [e, t]);

  return {
    getStatus: I(
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
const vn = new ma(500, 120 * 1000/* 1e3 */);
setInterval(() => vn.cleanup(), 60 * 1000/* 1e3 */);
const Ai = {
  async followUser(e) {
    const t = await O.post(D.users.follow(e), {});
    vn.delete(e);
    Wt.getState().setStatus(e, true);
    return t.following ? "following" : t.status ?? "following";
  },
  async unfollowUser(e) {
    await O.delete(D.users.follow(e));
    vn.delete(e);
    Wt.getState().setStatus(e, false);
  },
  async getFollowers(e, t = {}) {
    const n = new URLSearchParams();
    const o = t.limit ?? 20;
    n.set("limit", o.toString());
    const r = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", r.toString());
    const s = n.toString();
    const a = `${D.users.followers(e)}${s ? `?${s}` : ""}`;
    const c = await O.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.followers ?? [];
    const p = l.pagination?.hasMore ?? false ? String(r + 1) : null;
    return { data: u.map(hl), nextCursor: p };
  },
  async getFollowing(e, t = {}) {
    const n = new URLSearchParams();
    const o = t.limit ?? 20;
    n.set("limit", o.toString());
    const r = t.cursor ? parseInt(t.cursor) : t.page ?? 1;
    n.set("page", r.toString());
    const s = n.toString();
    const a = `${D.users.following(e)}${s ? `?${s}` : ""}`;
    const c = await O.get(a);
    const l = c.data ?? c;
    const u = l.users ?? l.following ?? [];
    const p = l.pagination?.hasMore ?? false ? String(r + 1) : null;
    return { data: u.map(hl), nextCursor: p };
  },
  async blockUser(e) {
    await O.post(D.users.block(e), {});
    vn.delete(e);
  },
  async unblockUser(e) {
    await O.delete(D.users.block(e));
    vn.delete(e);
  },
  async getBlockedUsers(e = {}) {
    const t = new URLSearchParams();
    const n = e.limit ?? 20;
    t.set("limit", n.toString());
    const o = e.cursor ? parseInt(e.cursor) : e.page ?? 1;
    t.set("page", o.toString());
    const r = t.toString();
    const s = `${D.users.blocked}${r ? `?${r}` : ""}`;
    const a = await O.get(s);
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

    return (await O.post(D.users.followStatus, { userIds: e })).data ?? {};
  },
  invalidateSocialCache(e) {
    vn.delete(e);
  },
  clearSocialCache() {
    vn.clear();
  },
};
function Yw(e) {
  const t = Wt(r => r.statuses[e]);

  const n = I(async () => {
    Wt.getState().setStatus(e, true);
    try {
      await Ai.followUser(e);
    } catch {
      Wt.getState().setStatus(e, false);
    }
  }, [e]);

  const o = I(async () => {
    Wt.getState().setStatus(e, false);
    try {
      await Ai.unfollowUser(e);
    } catch {
      Wt.getState().setStatus(e, true);
    }
  }, [e]);

  return { isFollowing: t, follow: n, unfollow: o };
}
const Kw = "f3yv";
const Xw = "tRL2";
const Qw = "ZW2W";
const Zw = "dXpe";
const Jw = "uFl0";
const eb = "YjSX";
const tb = "Mp4N";
const nb = "eiri";
const ob = "rWbC";
const rb = "Lh88";
const sb = "ofXC";
const ib = "e8j0";
const ab = "KTCW";
const cb = "fnIl";

const Xe = {
  overlay: Kw,
  modalWrapper: Xw,
  wide: Qw,
  modal: Zw,
  frameless: Jw,
  header: eb,
  title: tb,
  closeButton: nb,
  externalCloseButton: ob,
  mobileOverlay: rb,
  closing: sb,
  bottomSheet: ib,
  dragHandle: ab,
  dragIndicator: cb,
};

const lb = eo(null);
const ub = 100;
const db = 0.5;
function xn({
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
  const d = x(null);
  const p = x(null);
  const f = x(null);
  const h = Yt();
  const m = x(0);
  const _ = x(false);
  const [v, g] = L(false);
  const E = x(0);
  const y = x(0);
  const k = x(0);
  U(() => {
    const G = (ae) => {
        if (ae.key === "Escape") {
          if (u && !u()) {
            return;
          }
          t();
        }
      };

    const J = document.documentElement.style.overflow;
    (document.documentElement.style.overflow = "hidden");
    document.addEventListener("keydown", G);

    return () => {
      document.removeEventListener("keydown", G);
      (document.documentElement.style.overflow = J);
    };
  }, [t]);

  const C = (G) => {
      f.current = G.target;
    };

  const b = (G) => {
    if (f.current === d.current && G.target === d.current) {
      if (h) {
        w();
      } else {
        if (u && !u()) {
          return;
        }
        t();
      }
    }
    f.current = null;
  };

  const w = I(() => {
    if (u && !u()) {
      P(0, "transform 0.2s ease-out");
      R(0);
      (m.current = 0);
      return;
    }
    g(true);

    setTimeout(() => {
      t();
    }, 200);
  }, [t, u]);

  const N = x(false);
  const T = x(false);

  const S = (G) => {
    let J = G;

    while (J && J !== p.current) {
      const W = window.getComputedStyle(J).overflowY;
      if ((W === "auto" || W === "scroll") && J.scrollHeight > J.clientHeight) {
        return J;
      }
      J = J.parentElement;
    }

    return null;
  };

  const P = (G, J) => {
    if (p.current) {
      (p.current.style.transform = G > 0 ? `translateY(${G}px)` : "");
      (p.current.style.transition = J || "");
    }
  };

  const R = (G) => {
    if (d.current && G > 0) {
      (d.current.style.backgroundColor = `rgba(0, 0, 0, ${Math.max(
            0,
            0.4 - G / 500
          )})`);
    } else if (d.current) {
      (d.current.style.backgroundColor = "");
    }
  };

  const A = (G) => {
    if (!h) {
      return;
    }
    (E.current = G.touches[0].clientY);
    (y.current = Date.now());
    (k.current = G.touches[0].clientY);
    const G_target = G.target;
    if (G_target.closest(`.${Xe.dragHandle}`)) {
      (N.current = true);
      (T.current = true);
      (_.current = true);

      if (p.current) {
        (p.current.style.transition = "none");
      }

      return;
    }
    (N.current = false);

    if (G_target.closest('button, a, input, textarea, select, video, [role="button"]')) {
      T.current = false;
      return;
    }

    if (G_target.tagName === "CANVAS" || G_target.closest("canvas")) {
      T.current = false;
      return;
    }
    const oe = S(G_target);
    T.current = !oe || oe.scrollTop === 0;
  };

  const B = (G) => {
    if (!h) {
      return;
    }
    const J = G.touches[0].clientY;
    const ae = J - E.current;
    (k.current = J);

    if (N.current) {
      if (ae > 0) {
        (m.current = ae);
        P(ae);
        R(ae);
        G.preventDefault();
      }

      return;
    }

    if (T.current) {
      if (_.current && m.current > 0) {
        if (ae > 0) {
          (m.current = ae);
          P(ae);
          R(ae);
          G.preventDefault();
        } else {
          (m.current = 0);
          (_.current = false);
          P(0);
          R(0);
        }

        return;
      }

      if (ae > 0) {
        _.current ||
            ((_.current = true),
            p.current && (p.current.style.transition = "none"));

        (m.current = ae);
        P(ae);
        R(ae);
        G.preventDefault();
      }
    }
  };

  const q = () => {
    if (!h) {
      return;
    }
    const G = k.current - E.current;
    const J = Date.now() - y.current;
    const ae = G / J;

    if (_.current && (G > ub || ae > db)) {
      w();
    } else if (m.current > 0) {
      P(0, "transform 0.2s ease-out");
      R(0);
      (m.current = 0);
    }

    (_.current = false);
    (N.current = false);
    (T.current = false);
  };

  const Q = (() => {
    if (h && v) {
      return {
        transform: "translateY(100%)",
        transition: "transform 0.2s ease-out",
      };
    }
  })();

  const he = { onClose: t, isMobile: h, isClosing: v, handleClose: w };
  return i(lb.Provider, {
    value: he,
    children: i("div", {
      ref: d,
      className: `${Xe.overlay} ${h ? Xe.mobileOverlay : ""} ${
        v ? Xe.closing : ""
      }`,
      onMouseDown: C,
      onMouseUp: b,
      children: i("div", {
        ref: p,
        className: `${Xe.modalWrapper} ${l === "wide" ? Xe.wide : ""} ${
          h ? Xe.bottomSheet : ""
        }`,
        style: Q,
        onTouchStart: A,
        onTouchMove: B,
        onTouchEnd: q,
        children: [
          s &&
            !h &&
            i("button", {
              type: "button",
              className: Xe.externalCloseButton,
              onClick: (G) => {
                G.stopPropagation();
                t();
              },
              children: i(ft, { size: 24 }),
            }),
          h &&
            i("div", {
              className: Xe.dragHandle,
              children: i("div", { className: Xe.dragIndicator }),
            }),
          i("div", {
            className: `${Xe.modal} ${s ? Xe.frameless : ""} ${a || ""} ${
              c || ""
            }`,
            children: [
              !s &&
                o &&
                !h &&
                i("div", {
                  className: Xe.header,
                  children: [
                    i("span", { className: Xe.title, children: n }),
                    r &&
                      i("button", {
                        type: "button",
                        className: Xe.closeButton,
                        onClick: (G) => {
                          G.stopPropagation();
                          t();
                        },
                        children: i(ft, { size: 16 }),
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
const fb = "pZJT";
const pb = "Q1Kp";
const hb = "RGcm";
const mb = "dlfC";
const gb = "YG3y";
const _b = "dBBB";
const ml = { spinner: fb, spin: pb, xs: hb, sm: mb, md: gb, lg: _b };
function cf({ size: e = "md", className: t }) {
  const n = [ml.spinner, ml[e], t].filter(Boolean).join(" ");
  return i("div", { className: n, children: i(la, {}) });
}
const vb = "ISz6";
const yb = "lwaE";
const wb = "d6sJ";
const bb = "NUz5";
const Eb = "E0L9";
const Sb = "VSjy";
const Cb = "cmy4";
const kb = "IjAk";
const Nb = "Oy7z";
const Tb = "GffS";
const Ib = "kEvA";
const Rb = "ENXD";

const Un = {
  button: vb,
  primary: yb,
  secondary: wb,
  ghost: bb,
  accent: Eb,
  danger: Sb,
  sm: Cb,
  md: kb,
  lg: Nb,
  fullWidth: Tb,
  iconOnly: Ib,
  loading: Rb,
};

function Fe({
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
    Un.button,
    Un[t],
    Un[n],
    o && Un.fullWidth,
    r && Un.iconOnly,
    s && Un.loading,
    a,
  ]
    .filter(Boolean)
    .join(" ");
  return i("button", {
    type: c,
    className: d,
    disabled: l || s,
    ...u,
    children: s ? i(cf, { size: "sm" }) : e,
  });
}
const Ab = "ThTu";
const Lb = "v8Fk";
const Pb = "cx9V";
const Ob = "QvFN";
const ir = { content: Ab, title: Lb, subtitle: Pb, actions: Ob };
function xb({ displayName: e, onConfirm: t, onClose: n }) {
  return i(xn, {
    onClose: n,
    showHeader: false,
    children: i("div", {
      className: ir.content,
      children: [
        i("h2", { className: ir.title, children: "Отписаться?" }),
        i("p", {
          className: ir.subtitle,
          children: [
            "Вы действительно хотите отписаться от ",
            i("strong", { children: e }),
            "?",
          ],
        }),
        i("div", {
          className: ir.actions,
          children: [
            i(Fe, {
              variant: "secondary",
              onClick: (o) => {
                o.stopPropagation();
                n();
              },
              children: "Отмена",
            }),
            i(Fe, {
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
const lf = eo(null);
let $b = 0;
function Mb({ children: e }) {
  const [t, n] = L([]);

  const o = I((a) => {
    const c = `modal-${++$b}`;

    n(l => [...l, { id: c, component: a }]);

    return c;
  }, []);

  const r = I((a) => {
    n(c => a ? c.filter(l => l.id !== a) : c.slice(0, -1));
  }, []);

  const s = I(() => {
    n([]);
  }, []);

  U(() => {
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

  return i(lf.Provider, {
    value: { openModal: o, closeModal: r, closeAllModals: s },
    children: [e, t.length > 0 && i(Db, { modals: t })],
  });
}
function Db({ modals: e }) {
  return $(
    i(ve, {
      children: e.map(({ id: t, component: n }) => i(De, { fallback: null, children: n }, t)
      ),
    }),
    document.body
  );
}
function Kt() {
  const e = Go(lf);
  if (!e) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return e;
}
const Ub = "bQNJ";
const Fb = "vwco";
const Bb = "bb9m";
const Hb = "bBXS";
const Vb = "dBPS";
const Wb = "KYI0";
const jb = "HDch";
const zb = "NpWi";
const qb = "asJL";
const Gb = "aiDX";
const Yb = "cxgG";
const Kb = "xVJm";

const Qt = {
  avatar: Ub,
  xs: Fb,
  emoji: Bb,
  onlineDot: Hb,
  sm: Vb,
  md: Wb,
  lg: jb,
  xl: zb,
  badge: qb,
  followBadge: Gb,
  notFollowing: Yb,
  following: Kb,
};

function Xb(e) {
  return (
    e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/")
  );
}
function pt({
  src: e,
  alt: t,
  size: n = "md",
  badge: o,
  online: r,
  followBadge: s,
  onFollowBadgeClick: a,
  className: c,
}) {
  const l = e ? Xb(e) : false;
  return i("div", {
    className: `${Qt.avatar} ${Qt[n]} ${c || ""}`,
    children: [
      l && e
        ? i("img", { src: e, alt: t || "" })
        : i("span", { className: Qt.emoji, children: e || "👤" }),
      o && i("div", { className: Qt.badge, children: o }),
      s !== undefined
        ? i("button", {
            type: "button",
            className: `${Qt.followBadge} ${
              s ? Qt.following : Qt.notFollowing
            }`,
            onClick: (u) => {
              u.preventDefault();
              u.stopPropagation();
              a?.(u);
            },
            children: s ? i(n0, { size: 8 }) : i(t0, { size: 8 }),
          })
        : r && i("span", { className: Qt.onlineDot }),
    ],
  });
}
const Qb = "CmY2";
const Zb = "Zh3y";
const Jb = "wDWg";
const eE = "AeBU";
const tE = "DnLn";
const nE = "xdCF";
const oE = "zMra";
const rE = "KdzL";
const sE = "fyEE";
const iE = "fL73";
const aE = "o3mZ";
const cE = "uw3U";
const lE = "ZmBx";
const uE = "ZYe2";
const dE = "oek6";
const fE = "p8nS";
const pE = "pGqd";
const hE = "kkoI";
const mE = "OBm4";
const gE = "fGSC";
const _E = "uJrB";
const vE = "ZD6v";
const yE = "uHKK";
const wE = "TF5n";

const Re = {
  userName: Qb,
  identity: Zb,
  badges: Jb,
  pinBadge: eE,
  text: tE,
  nukstaGlow: nE,
  xs: oE,
  sm: rE,
  md: sE,
  lg: iE,
  nameEnding: aE,
  pinWrapper: cE,
  nickname: lE,
  schoolSilver: uE,
  withNickname: dE,
  trailing: fE,
  plain: pE,
  compact: hE,
  pinClickable: mE,
  pinTooltip: gE,
  pinTooltipFadeIn: _E,
  pinTooltipRow: vE,
  pinTooltipLabel: yE,
  pinTooltipArrow: wE,
};

function gl(e) {
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
function bE(e) {
  let t = gl(e);
  return (n) => {
    const o = gl(n);
    return o === t ? false : ((t = o), true);
  };
}
function ga(e) {
  const t = bE(un());
  return yy((n) => {
    if (t(n)) {
      e();
    }
  });
}
const Gt = et(() => ({
  status: "checking",
  enabled: false
}));
let Fn = null;
let Ns = 0;
let Li = 0;
function Dr(e = false) {
  if (Fn || (!e && Gt.getState().status !== "checking")) {
    return Fn;
  }
  const t = ++Ns;

  const n = O.get("/v1/event/status", { skipErrorToast: true })
    .then((o) => {
      if (Ns !== t) {
        return;
      }
      const r = o?.enabled === true;
      Gt.setState({ status: r ? "allowed" : "denied", enabled: r });
    })
    .catch(() => {
    if (Ns === t) {
      Gt.setState({ status: "error" });
    }
  })
    .finally(() => {
    if (Fn === n) {
      (Fn = null);
    }
  });

  (Fn = n);
  return n;
}
function ar() {
  if (Gt.getState().status === "error" && Date.now() - Li >= 15000/* 15e3 */) {
    (Li = Date.now());
    Dr(true);
  }
}
function uf() {
  return Gt.getState().enabled;
}
function EE() {
  Dr();
}
function SE(e) {
  let t = Gt.getState().enabled;
  return Gt.subscribe((n) => {
    if (n.enabled !== t) {
      (t = n.enabled);
      e(n.enabled);
    }
  });
}
function Ko() {
  const e = ge(r => r.status);

  const t = Gt(r => r.status);

  const n = Gt(r => r.enabled);

  U(() => {
    Dr();
  }, []);

  U(
    () => {
      window.addEventListener("online", ar);
      window.addEventListener("focus", ar);

      return () => {
        window.removeEventListener("online", ar);
        window.removeEventListener("focus", ar);
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
      (Li = Date.now());
      Dr(true);
    },
  };
}
const st = new Map();
const CE = 512;
let Ts = 0;
let Is = false;
let cr;
let Sn = 0;
const df = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function ff() {
  Sn++;
  for (const e of st.values()) {
    (e.value = null);
    (e.deadline = 0);
    (e.refreshAt = 0);
    (e.optimistic = undefined);

    e.listeners.forEach(t => t());
  }
  _a();
}
function Pi() {
  const e = performance.now();
  for (const [t, n] of st) {
    if (!n.listeners.size &&
      (!n.value || n.deadline <= e || st.size > CE)) {
      st.delete(t);
    }
  }
}
function Ur() {
  Sn++;
  for (const e of st.values()) {
    e.refreshAt = 0;
  }
  Oi();
}
function _l(e) {
  const e_detail = e.detail;
  if (
    e_detail &&
    typeof e_detail.userId == "string" &&
    df.test(e_detail.userId) &&
    (e_detail.label === null || (typeof e_detail.label == "string" && e_detail.label.length <= 128))
  ) {
    const n = st.get(e_detail.userId);

    if (n) {
      (n.optimistic = { label: e_detail.label, until: performance.now() + 30000/* 3e4 */ });
      n.listeners.forEach(o => o());
    }
  }
  Ur();
}
async function _a() {
  if (Is || document.hidden || !un() || !uf()) {
    return;
  }
  const e = [...st]
    .filter(([, n]) => n.listeners.size && n.refreshAt <= performance.now())
    .map(([n]) => n);
  if (!e.length) {
    return;
  }
  Is = true;
  const t = Sn;
  try {
    for (let n = 0; n < e.length; n += 200) {
      const o = e.slice(n, n + 200);
      const r = performance.now();

      const s = await O.get(`/event-nicknames/?ids=${o.join(",")}`, {
        skipErrorToast: true,
      });

      if (t !== Sn) {
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
        const u = st.get(l);
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
    for (const n of t === Sn ? e : []) {
      const o = st.get(n);

      if (o) {
        (o.refreshAt = performance.now() + 10000/* 1e4 */);
      }
    }
  } finally {
    (Is = false);

    if (t !== Sn) {
      _a();
    }
  }
}
function Oi() {
  for (const e of st.values()) {
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
  _a();
}
function vl() {
  if (!document.hidden) {
    Ur();
  }
}
ga(() => {
  ff();
  Pi();
});
SE(() => ff());
function va(e) {
  const [, t] = L(0);
  U(() => {
    if (!e || !df.test(e)) {
      return;
    }
    EE();
    Pi();
    let o = st.get(e);

    if (!o) {
      (o = { listeners: new Set(), value: null, deadline: 0, refreshAt: 0 });
      st.set(e, o);
    }

    const r = () => t(a => a + 1);
    o.listeners.add(r);
    Ts++;

    if (!cr) {
      (cr = setInterval(Oi, 1000/* 1e3 */));
      document.addEventListener("visibilitychange", vl);
      window.addEventListener("online", Ur);
      window.addEventListener("event-nickname-changed", _l);
    }

    const s = setTimeout(Oi, 0);
    return () => {
      clearTimeout(s);
      o.listeners.delete(r);
      Ts--;
      Pi();

      if (!Ts) {
        clearInterval(cr);
        (cr = undefined);
        document.removeEventListener("visibilitychange", vl);
        window.removeEventListener("online", Ur);
        window.removeEventListener("event-nickname-changed", _l);
        Sn++;
      }
    };
  }, [e]);
  const n = e ? st.get(e) : undefined;
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

const kE = ce(() => se(
  () => import("./index-BNSyjeK1.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
  );

const NE = { xs: 12, sm: 14, md: 16, lg: 22 };
const TE = "subscription_nuksta";
function Xo({
  userId: e,
  compact: t,
  trailing: n,
  name: o,
  verified: r,
  hasNuksta: s,
  pin: a,
  size: c = "md",
  className: l,
}) {
  const u = va(e);
  const NE_c = NE[c];
  const p = x(null);
  const [f, h] = L(null);
  const [m, _] = L(false);
  const [v, g] = L(null);
  const E = !!a?.url && v === a.url;
  const y = a?.slug === TE;

  const k = I(() => {
    if (!p.current) {
      return;
    }
    const S = p.current.getBoundingClientRect();
    h({ x: S.left + S.width / 2, y: S.top });
  }, []);

  const C = I(() => {
    h(null);
  }, []);

  const b =
    u &&
    i("span", {
      className: Re.nickname,
      "data-nickname": u.id,
      title: u.label.toLocaleLowerCase("ru-RU"),
      children: i("bdi", {
        className: u.styleKey === "school_gold" ? Re.schoolSilver : undefined,
        children: u.label.toLocaleLowerCase("ru-RU"),
      }),
    });

  const w = S => s
    ? i("span", {
        className: Re.nukstaGlow,
        children: i("span", { className: Re.text, children: S }),
      })
    : i("span", { className: Re.text, children: S });

  const N = c === "lg" && (r || E) ? /\S+$/u.exec(o) : null;

  const T =
    (r || a) &&
    i("span", {
      className: Re.badges,
      children: [
        r && i(d0, {}),
        a &&
          i("span", {
            ref: p,
            className: `${Re.pinWrapper} ${y ? Re.pinClickable : ""}`,
            style: E ? undefined : { display: "none" },
            onMouseEnter: k,
            onMouseLeave: C,
            onClick: y
              ? (S) => {
              S.stopPropagation();
              S.preventDefault();
              _(true);
            }
              : undefined,
            children: [
              i("img", {
                src: a.url,
                alt: a.name,
                className: Re.pinBadge,
                width: NE_c,
                height: NE_c,
                onLoad: () => g(a.url || null),
                onError: () => g(null),
              }),
              f &&
                $(
                  i("div", {
                    className: Re.pinTooltip,
                    style: { left: `${f.x}px`, top: `${f.y}px` },
                    children: [
                      i("span", {
                        className: Re.pinTooltipRow,
                        children: [
                          i("span", {
                            className: Re.pinTooltipLabel,
                            children: "Пин:",
                          }),
                          " ",
                          a.name,
                        ],
                      }),
                      a.description &&
                        i("span", {
                          className: Re.pinTooltipRow,
                          children: [
                            i("span", {
                              className: Re.pinTooltipLabel,
                              children: "Ивент:",
                            }),
                            " ",
                            a.description,
                          ],
                        }),
                      i("span", { className: Re.pinTooltipArrow }),
                    ],
                  }),
                  document.body
                ),
            ],
          }),
      ],
    });

  return i("span", {
    className: `${Re.userName} ${Re[c]} ${t && u ? Re.compact : ""} ${
      u ? Re.withNickname : Re.plain
    } ${l || ""}`,
    "data-user-name": e,
    children: [
      u || c === "lg"
        ? i("span", {
            className: Re.identity,
            children: N
              ? i(ve, {
                  children: [
                    w(o.slice(0, N.index)),
                    i("span", {
                      className: Re.nameEnding,
                      children: [w(N[0]), T],
                    }),
                    b,
                  ],
                })
              : i(ve, { children: [w(o), T, b] }),
          })
        : i(ve, { children: [w(o), T] }),
      n &&
        i("span", {
          className: Re.trailing,
          onClick: (S) => {
            S.preventDefault();
            S.stopPropagation();
          },
          children: n,
        }),
      m &&
        i(De, {
          fallback: null,
          children: i(kE, { isOpen: true, onClose: () => _(false) }),
        }),
    ],
  });
}
function IE(e) {
  return "accessToken" in e;
}
function RE(e) {
  return "accessToken" in e;
}
const pn = { skipErrorToast: true };

const Zt = {
  async register(e) {
    return await kt.post(D.auth.signUp, e, pn);
  },
  async login(e) {
    return await kt.post(D.auth.signIn, e, pn);
  },
  async verifyOtp(e) {
    return await kt.post(D.auth.verifyOtp, e, pn);
  },
  async resendOtp(e) {
    await kt.post(D.auth.resendOtp, e, pn);
  },
  async refreshSession() {
    return await kt.post(D.auth.refresh);
  },
  async logout() {
    await kt.post(D.auth.logout);
  },
  async logoutAll() {
    await kt.post(`${D.auth.logout}-all`);
  },
  async forgotPassword(e) {
    return await kt.post(D.auth.forgotPassword, e, pn);
  },
  async resetPassword(e) {
    await kt.post(D.auth.resetPassword, e, pn);
  },
  async changePassword(e) {
    await kt.post(D.auth.changePassword, e, pn);
  },
};

function hn(e, t) {
  if (!e) {
    uc(null);
    return;
  }
  uc({ id: e.id, username: e.username ?? undefined, email: t ?? undefined });
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

const ge = et()(
  Ud(
    (e, t) => {
      const n = Vd;

      wy(async () => {
        try {
          const s = await Zt.refreshSession();
          n(s.accessToken);
          return s.accessToken;
        } catch (s) {
          return $e(s) && s.status >= 500
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
            const s = await Zt.register(r);

            e({
              status: "needs_verification",
              pendingEmail: r.email,
              pendingPassword: r.password,
              flowToken: s.flowToken ?? null,
            });

            return s.nextStep;
          } catch (s) {
            const a = $e(s) ? s.message : "Registration failed";
            const c = $e(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        login: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          try {
            const s = await Zt.login(r);
            if (RE(s)) {
              n(s.accessToken);
              try {
                await t().fetchProfile();

                if (t().status !== "account_deleted") {
                  e({
                      status: "authenticated",
                      pendingEmail: null,
                      email: r.email,
                    });

                  hn(t().profile, r.email);
                }
              } catch (c) {
                if ($e(c) &&
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
            const a = $e(s) ? s.message : "Login failed";
            const c = $e(s) ? s.code : null;
            e({ status: "unauthenticated", error: a, errorCode: c });
            throw s;
          }
        },
        verifyOtp: async (r) => {
          e({ status: "loading", error: null, errorCode: null });
          const { pendingEmail: s, pendingPassword: a, flowToken: c } = t();
          try {
            const l = await Zt.verifyOtp({
              email: s || "",
              password: a || "",
              otp: r,
              flowToken: c || "",
            });
            e({ pendingPassword: null });

            if (IE(l)) {
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

                  hn(t().profile, u);
                }
              } catch (d) {
                if ($e(d) &&
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
            const u = $e(l) ? l.message : "Verification failed";
            const d = $e(l) ? l.code : null;
            e({ status: "needs_verification", error: u, errorCode: d });
            throw l;
          }
        },
        resendOtp: async () => {
          e({ error: null, errorCode: null });
          const { pendingEmail: r, flowToken: s } = t();
          try {
            await Zt.resendOtp({ email: r || "", flowToken: s || "" });
          } catch (a) {
            const c = $e(a) ? a.message : "Failed to resend code";
            const l = $e(a) ? a.code : null;
            e({ error: c, errorCode: l });
            throw a;
          }
        },
        createProfile: async (r) => {
          e({ error: null, errorCode: null });
          try {
            await sr.createProfile(r);
            await t().fetchProfile();
            e({ status: "authenticated" });
            hn(t().profile, t().email);
          } catch (s) {
            const a = $e(s) ? s.message : "Failed to create profile";
            const c = $e(s) ? s.code : null;
            e({ error: a, errorCode: c });
            throw s;
          }
        },
        logout: async () => {
          try {
            await Zt.logout();
          } catch {
          } finally {
            n(null);
            e({ ...lr, status: "unauthenticated" });
            hn(null, null);
          }
        },
        logoutAll: async () => {
          try {
            await Zt.logoutAll();
          } catch {
          } finally {
            n(null);
            e({ ...lr, status: "unauthenticated" });
            hn(null, null);
          }
        },
        refreshSession: async () => {
          try {
            const r = await Zt.refreshSession();
            n(r.accessToken);
            return r.accessToken;
          } catch (r) {
            return $e(r) && r.status >= 500
              ? (e({ status: "service_error" }), null)
              : (t().reset(), null);
          }
        },
        fetchProfile: async () => {
          const r = await sr.getMyProfile();
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
                hn(t().profile, t().email);
              }
            } catch (a) {
              if ($e(a) &&
              (a.code === H.ENTITY_NOT_FOUND || a.status === 404)) {
                e({ status: "needs_profile" });
              } else {
                throw a;
              }
            }
          } catch (s) {
            if ($e(s) && s.status >= 500) {
              e({ status: "service_error" });
            } else {
              e({ status: "unauthenticated" });
            }
          }
        },
        deleteAccount: async () => {
          await sr.deleteAccount();
          await t().logout();
        },
        restoreAccount: async () => {
          await sr.restoreAccount();
          await t().fetchProfile();
          const { status: r } = t();

          if (r === "account_deleted") {
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
          e({ ...lr, status: "unauthenticated" });
          hn(null, null);
        },
        setProfile: (r) => {
          e({ profile: r });
        },
      };
    },
    {
      name: "auth-storage",
      storage: sa(() => sessionStorage),
      partialize: e => ({
        profile: e.profile,
        email: e.email
      }),
    }
  )
);

const pf = () => ge(e => e.status);

const ns = () => ge(e => e.profile);

const os = () => ge(e => e.status === "authenticated");

const AE = "wpOK";
const LE = "oyyv";
const PE = "y9p9";
const OE = "bR5r";
const xE = "ND1o";
const $E = "PQDx";

const Bn = {
  screen: AE,
  fullscreen: LE,
  image: PE,
  title: OE,
  description: xE,
  action: $E,
};

const ME = {
  notFound:
    "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/404.png",
  server: "https://cdn.xn--d1ah4a.com/public/assets/frontend-errors/500.png",
};

const hf = ({ kind: e, title: t, description: n, action: o, fullscreen: r = false }) => i("div", {
  className: `${Bn.screen} ${r ? Bn.fullscreen : ""}`,
  children: [
    i("img", {
      className: Bn.image,
      src: ME[e],
      alt: "",
      width: 256,
      height: 256,
      "aria-hidden": "true",
    }),
    i("h1", { className: Bn.title, children: t }),
    n && i("p", { className: Bn.description, children: n }),
    o && i("div", { className: Bn.action, children: o }),
  ],
});

function DE({ children: e, currentPath: t }) {
  const n = pf();

  const o = ge(s => s.initialize);

  U(() => {
    if (n === "idle") {
      o();
    }
  }, [n, o]);

  U(() => {
    if (n === "loading" || n === "idle") {
      return;
    }
    const s = ul.some(a => t.startsWith(a));

    if (n === "unauthenticated" && !s) {
      if (!Ye(le.LOGIN)) {
        window.location.replace(le.LOGIN);
      }
    } else if (n === "needs_profile" && t !== le.ONBOARDING) {
      if (!Ye(le.ONBOARDING)) {
        window.location.replace(le.ONBOARDING);
      }
    } else if (n === "authenticated" &&
        (t === le.LOGIN || t === le.REGISTER || t === le.ONBOARDING)) {
      Ye(le.HOME);
    }
  }, [n, t]);

  const r = ul.some(s => t.startsWith(s));
  return n === "idle" || (n === "loading" && !r)
    ? null
    : n === "service_error"
    ? i(UE, {})
    : n === "account_deleted"
    ? i(FE, {})
    : (n === "unauthenticated" && !r) ||
      (n === "needs_profile" && t !== le.ONBOARDING)
    ? null
    : i(ve, { children: e });
}
function UE() {
  const e = ge(r => r.initialize);

  const [t, n] = L(false);
  return i(hf, {
    kind: "server",
    fullscreen: true,
    title: "Сервис недоступен",
    description:
      "Не удалось подключиться к серверу. Попробуйте обновить страницу или повторите попытку позже.",
    action: i(Fe, {
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
function FE() {
  const e = ge(l => l.canRestore);

  const t = ge(l => l.restoreDeadline);

  const n = ge(l => l.restoreAccount);

  const o = ge(l => l.logout);

  const [r, s] = L(false);

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
          ? i(ve, {
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
                    i(Fe, { onClick: c, children: "Восстановить аккаунт" }),
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
          : i(ve, {
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
                  children: i(Fe, { onClick: () => o(), children: "Выйти" }),
                }),
              ],
            }),
      ],
    }),
  });
}
const BE = "AT4F";
const HE = "B1nl";
const VE = "bHLv";
const WE = "FWOX";
const ur = { content: BE, icon: HE, text: VE, button: WE };
const yl = "phone-verification-required";
function jE() {
  const [e, t] = L(false);

  const n = ge(r => r.profile?.id ?? "");

  U(() => {
    const r = () => t(true);
    window.addEventListener(yl, r);

    return () => window.removeEventListener(yl, r);
  }, []);

  if (!e) {
    return null;
  }

  const o = `https://t.me/itd_verification_bot?start=${n}`;
  return i(xn, {
    onClose: () => t(false),
    title: "Подтверждение телефона",
    children: i("div", {
      className: ur.content,
      children: [
        i("div", { className: ur.icon, children: i(u0, { size: 48 }) }),
        i("p", {
          className: ur.text,
          children:
            "Для публикации постов и комментариев необходимо подтвердить номер телефона через Telegram-бота.",
        }),
        i("a", {
          href: o,
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
function mf(e = () => performance.now()) {
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
function Fr(e, t, n = performance.now()) {
  return Date.parse(e.serverTime) + Math.max(0, n - t);
}
const rs = mf();

const Lt = et(() => ({
  posts: {},
  received: {},
  inventory: null,
  generation: 0
}));

const It = new Map();
let dr;
let As;
let rn = 0;
let ho;
function ya() {
  if (!un()) {
    Lt.setState({ inventory: null });
    return Promise.resolve();
  }
  if (ho?.generation === rn) {
    return ho.promise;
  }
  const e = rn;

  const t = Promise.resolve()
    .then(async () => {
      try {
        const n = await O.get("/red-pens/inventory", { skipErrorToast: true });

        if (e === rn) {
          Lt.setState({ inventory: n.data });
        }
      } catch (n) {
        if (e === rn) {
          Lt.setState({ inventory: null });
        }

        throw n;
      }
    })
    .finally(() => {
    if (ho?.promise === t) {
      (ho = undefined);
    }
  });

  (ho = { generation: e, promise: t });
  return t;
}
async function ss(e = [...It.keys()]) {
  if (!e.length) {
    return;
  }
  const t = rn;
  const n = performance.now();

  const o = await O.get(`/red-pens/state?ids=${e.join(",")}`, {
    skipErrorToast: true,
  });

  if (t !== rn) {
    return;
  }
  if (!o?.data || typeof o.data != "object" || Array.isArray(o.data)) {
    throw new Error("Invalid event state response");
  }

  const r = e
      .map((c) => {
        const l = o.data[c] ?? null;
        return [c, rs.replace(c, l, n)];
      })
      .filter(([c]) => It.has(c));

  const s = Object.fromEntries(r.map(([c, l]) => [c, l.state]));

  const a = Object.fromEntries(r.map(([c, l]) => [c, l.received]));

  Lt.setState(c => ({
    posts: { ...c.posts, ...s },
    received: { ...c.received, ...a }
  }));
}
function Hn() {
  if (document.hidden || As) {
    return;
  }
  const e = [...It.keys()];
  As = Promise.all([
    ya(),
    (async () => {
      for (let t = 0; t < e.length; t += 100) {
        await ss(e.slice(t, t + 100));
      }
    })(),
  ])
    .then(() => {})
    .catch(() => {})
    .finally(() => {
      As = undefined;
    });
}
function zE(e) {
  It.set(e, (It.get(e) ?? 0) + 1);

  if (!dr) {
    (dr = setInterval(Hn, 15000/* 15e3 */));
    window.addEventListener("focus", Hn);
    document.addEventListener("visibilitychange", Hn);
  }

  if (!Rs) {
    (Rs = true);

    queueMicrotask(() => {
      (Rs = false);
      Hn();
    });
  }

  return () => {
    const t = (It.get(e) ?? 1) - 1;

    if (t) {
      It.set(e, t);
    } else {
      It.delete(e);

      Lt.setState((n) => {
        const o = { ...n.posts };
        const r = { ...n.received };
        delete o[e];
        delete r[e];
        return { posts: o, received: r };
      });
    }

    if (!It.size) {
      clearInterval(dr);
      (dr = undefined);
      window.removeEventListener("focus", Hn);
      document.removeEventListener("visibilitychange", Hn);
      Lt.setState({ inventory: null });
    }
  };
}
ga(() => {
  rn++;
  rs.clear();
  Lt.setState({ posts: {}, received: {}, inventory: null, generation: rn });

  if (It.size) {
    ss().catch(() => {});
    ya().catch(() => {});
  }
});
const is = mf();

const Pt = et(() => ({
  posts: {},
  received: {},
  inventory: null,
  generation: 0
}));

const Rt = new Map();
let fr;
let Ps;
let sn = 0;
let mo;
function wa() {
  if (!un()) {
    Pt.setState({ inventory: null });
    return Promise.resolve();
  }
  if (mo?.generation === sn) {
    return mo.promise;
  }
  const e = sn;

  const t = Promise.resolve()
    .then(async () => {
      try {
        const n = await O.get("/correctors/inventory", {
          skipErrorToast: true,
        });

        if (e === sn) {
          Pt.setState({ inventory: n.data });
        }
      } catch (n) {
        if (e === sn) {
          Pt.setState({ inventory: null });
        }

        throw n;
      }
    })
    .finally(() => {
    if (mo?.promise === t) {
      (mo = undefined);
    }
  });

  (mo = { generation: e, promise: t });
  return t;
}
async function as(e = [...Rt.keys()]) {
  if (!e.length) {
    return;
  }
  const t = sn;
  const n = performance.now();

  const o = await O.get(`/correctors/state?ids=${e.join(",")}`, {
    skipErrorToast: true,
  });

  if (t !== sn) {
    return;
  }
  if (!o?.data || typeof o.data != "object" || Array.isArray(o.data)) {
    throw new Error("Invalid event state response");
  }

  const r = e
      .map((c) => {
        const l = o.data[c] ?? null;
        return [c, is.replace(c, l, n)];
      })
      .filter(([c]) => Rt.has(c));

  const s = Object.fromEntries(r.map(([c, l]) => [c, l.state]));

  const a = Object.fromEntries(r.map(([c, l]) => [c, l.received]));

  Pt.setState(c => ({
    posts: { ...c.posts, ...s },
    received: { ...c.received, ...a }
  }));
}
function Vn() {
  if (document.hidden || Ps) {
    return;
  }
  const e = [...Rt.keys()];
  Ps = Promise.all([
    wa(),
    (async () => {
      for (let t = 0; t < e.length; t += 100) {
        await as(e.slice(t, t + 100));
      }
    })(),
  ])
    .then(() => {})
    .catch(() => {})
    .finally(() => {
      Ps = undefined;
    });
}
function qE(e) {
  Rt.set(e, (Rt.get(e) ?? 0) + 1);

  if (!fr) {
    (fr = setInterval(Vn, 15000/* 15e3 */));
    window.addEventListener("focus", Vn);
    document.addEventListener("visibilitychange", Vn);
  }

  if (!Ls) {
    (Ls = true);

    queueMicrotask(() => {
      (Ls = false);
      Vn();
    });
  }

  return () => {
    const t = (Rt.get(e) ?? 1) - 1;

    if (t) {
      Rt.set(e, t);
    } else {
      Rt.delete(e);

      Pt.setState((n) => {
        const o = { ...n.posts };
        const r = { ...n.received };
        delete o[e];
        delete r[e];
        return { posts: o, received: r };
      });
    }

    if (!Rt.size) {
      clearInterval(fr);
      (fr = undefined);
      window.removeEventListener("focus", Vn);
      document.removeEventListener("visibilitychange", Vn);
      Pt.setState({ inventory: null });
    }
  };
}
ga(() => {
  sn++;
  is.clear();
  Pt.setState({ posts: {}, received: {}, inventory: null, generation: sn });

  if (Rt.size) {
    as().catch(() => {});
    wa().catch(() => {});
  }
});
function go(e) {
  return e.pagination?.nextCursor ?? e.cursor ?? null;
}
const gt = new ma(50, 300 * 1000/* 1e3 */);
const GE = 60 * 1000/* 1e3 */;
setInterval(() => gt.cleanup(), 120 * 1000/* 1e3 */);
function YE(e) {
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
function tn(e) {
  const t = uf();

  const o = (e.attachments ?? []).map((p) => {
    if (p.type === "poll") {
      const f = p;

      const h = f.options.map(m => ({
        id: m.id,
        text: m.text,
        votes: m.votesCount ?? m.voteCount ?? m.votes ?? 0
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
    author: YE(e.author),
    wallOwnerId: e.wallOwnerId ?? e.authorId ?? e.author?.id,
    text: d,
    spans: e.spans ?? [],
    corrector: t ? is.receive(e.id, e.corrector) : undefined,
    redPen: t ? rs.receive(e.id, e.redPen) : undefined,
    notebook:
      t && (e.notebook?.style === "grid" || e.notebook?.style === "ruled")
        ? { style: e.notebook.style }
        : undefined,
    attachments: o,
    reactions: { total: r, myReaction: l },
    stats: { views: s, comments: a, reposts: c },
    reposted: u,
    originalPost: e.originalPost ? tn(e.originalPost) : null,
    dominantEmoji: e.dominantEmoji ?? null,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
    vs: typeof e.vs == "string" ? e.vs : undefined,
  };
}

const Ue = {
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
      const s = await O.get(r);
      return { data: s.data.posts.map(tn), nextCursor: go(s.data) };
    },
    async getPost(e) {
      const t = await O.get(D.posts.single(e));
      return tn(t.data);
    },
    async getUserWall(e, t = {}) {
      if (!t.cursor) {
        const n = e;
        const o = gt.get(n);
        const r = o && o.pinnedPostId === (t.pinnedPostId ?? null);

        if (o && r && gt.isFresh(n, GE)) {
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
      const n = gt.get(e);
      return !n || n.pinnedPostId !== (t ?? null)
        ? null
        : { data: n.posts, nextCursor: n.nextCursor };
    },
    async _fetchAndCacheWall(e, t, n) {
      const o = await this._fetchWall(e, t);

      gt.set(n, {
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
      const s = await O.get(r);
      return { data: s.data.posts.map(tn), nextCursor: go(s.data) };
    },
    invalidateWallCache(e) {
      gt.delete(e);
    },
    invalidateAllWallCaches() {
      gt.clear();
    },
    updatePostInWallCache(e, t, n) {
      const o = gt.get(e);
      if (o) {
        const r = o.posts.map(s => s.id === t ? { ...s, ...n } : s);
        gt.set(e, { ...o, posts: r });
      }
    },
    removePostFromWallCache(e, t) {
      const n = gt.get(e);
      if (n) {
        const o = n.posts.filter(r => r.id !== t);
        gt.set(e, { ...n, posts: o });
      }
    },
    async likePost(e) {
      return await O.post(D.posts.like(e));
    },
    async unlikePost(e) {
      return await O.delete(D.posts.like(e));
    },
    async createPost(e) {
      return await O.post(D.posts.create, {
        content: e.text,
        spans: e.spans,
        wallRecipientId: e.wallOwnerId,
        attachmentIds: e.attachmentIds,
        poll: e.poll,
        notebook: e.notebook,
      });
    },
    async createRepost(e, t) {
      const n = await O.post(D.posts.repost(e), { content: t });
      return tn(n);
    },
    async getPostsStats(e) {
      if (e.length === 0) {
        return [];
      }

      return (await O.post(`${D.posts.list}/stats`, { ids: e })).posts ?? [];
    },
    async editPost(e, t) {
      const n = t.content ?? t.text;
      await O.put(D.posts.update(e), { content: n, spans: t.spans });
    },
    async deletePost(e) {
      await O.delete(D.posts.delete(e));
    },
    async restorePost(e) {
      await O.post(D.posts.restore(e));
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
      const s = await O.get(r);
      return { data: s.data.posts.map(tn), nextCursor: go(s.data) };
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
      const s = await O.get(r);
      return { data: s.data.posts.map(tn), nextCursor: go(s.data) };
    },
    async pinPost(e) {
      await O.post(D.posts.pin(e));
    },
    async unpinPost(e) {
      await O.delete(D.posts.pin(e));
    },
    async votePoll(e, t) {
      const n = await O.post(D.posts.pollVote(e), { optionIds: t });
      return n.data ?? n;
    },
    async unrepost(e) {
      await O.delete(D.posts.repost(e));
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
      const s = await O.get(r);
      return { data: s.data.posts.map(tn), nextCursor: go(s.data) };
    },
  };

const KE = { new: "newest", old: "oldest", popular: "popular" };
function XE(e) {
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
function xi(e) {
  const t = e.stats?.reactions ?? e.likesCount ?? 0;
  const n = e.stats?.replies ?? e.repliesCount ?? 0;
  const o = e.viewerStatus?.reaction ?? (e.isLiked ? "like" : null);
  const r = e.text ?? e.content ?? "";
  return {
    id: e.id,
    postId: e.postId,
    author: XE(e.author),
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
        ? (e.previewReplies ?? e.replies).map(xi)
        : undefined,
    createdAt: e.createdAt,
    editedAt: e.editedAt ?? null,
  };
}
const Nt = {
  async getComments(e, t = {}) {
    const n = new URLSearchParams();

    if (t.limit) {
      n.set("limit", t.limit.toString());
    }

    if (t.sort) {
      n.set("sort", KE[t.sort]);
    }

    if (t.cursor) {
      n.set("cursor", t.cursor);
    }

    const o = n.toString();
    const r = `${D.posts.comments(e)}${o ? `?${o}` : ""}`;
    const s = await O.get(r);
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
    return { data: a.map(xi), nextCursor: c };
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
    const s = await O.get(r);
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
    return { data: a.map(xi), nextCursor: c };
  },
  async createComment(e, t, n, o, r) {
    return await O.post(D.posts.comments(e), {
      content: t,
      attachmentIds: r?.map(s => s.mediaId),
    });
  },
  async createReply(e, t, n, o, r) {
    return await O.post(D.comments.replies(e), {
      content: t,
      replyToUserId: o,
      attachmentIds: r?.map(s => s.mediaId),
    });
  },
  async editComment(e, t, n) {
    await O.patch(D.comments.edit(e), { content: t });
  },
  async deleteComment(e) {
    await O.delete(D.comments.delete(e));
  },
  async likeComment(e) {
    await O.post(D.comments.like(e));
  },
  async unlikeComment(e) {
    await O.delete(D.comments.like(e));
  },
};
function kr(e, t, n) {
  const o = e.originalPost ? kr(e.originalPost, t, n) : e.originalPost;

  const r =
    e.author.id === t && e.author.avatar !== n
      ? { ...e.author, avatar: n }
      : e.author;

  return r !== e.author || o !== e.originalPost
    ? { ...e, author: r, originalPost: o }
    : e;
}

const ie = et((e, t) => ({
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
        const a = await Ue.getFeed(o, { limit: 20 });
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
          error: $e(a) ? ia(a.code, a.message) : "Не удалось загрузить ленту",
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
        const a = await Ue.getFeed(n, { limit: 20, cursor: s ?? undefined });
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
    text: o,
    spans: r = [],
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

      const { id: d } = await Ue.createPost({
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

      Ue.invalidateWallCache(n);
      try {
        const h = await Ue.getPost(d);
        e(m => ({
          posts: m.posts.map(_ => _.id === d ? h : _)
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
    const o = t().posts.find(r => r.id === n);
    if (o) {
      e({ currentPost: o, currentPostLoading: false, currentPostError: false });
      return;
    }
    if (t().currentPost?.id !== n) {
      e({ currentPostLoading: true, currentPost: null, currentPostError: false });
      try {
        const r = await Ue.getPost(n);
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
    await Ue.editPost(n, { text: o, spans: r });
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
      Ue.updatePostInWallCache(l.wallOwnerId, n, {
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
      await Ue.deletePost(n);
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
      Ue.removePostFromWallCache(a.author.username ?? a.author.id, n);
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
    Ue.invalidateAllWallCaches();

    e((r) => {
      const s = Object.fromEntries(
        Object.entries(r.feedCache).map(([a, c]) => [
          a,
          c && { ...c, posts: c.posts.map(l => kr(l, n, o)) },
        ])
      );
      return {
        posts: r.posts.map(a => kr(a, n, o)),
        currentPost: r.currentPost ? kr(r.currentPost, n, o) : null,
        feedCache: s,
      };
    });
  },

  reset: () => {
    t().feedMeasuredHeights.clear();

    se(async () => {
      const { useCommentsStore: n } = await Promise.resolve().then(
        () => e1
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

const Os = Object.freeze(
  Object.defineProperty(
    { __proto__: null, usePostsStore: ie },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Nr = et()(
  Ud(
    e => ({
      commentsSort: "popular",

      setCommentsSort: (t) => {
        e({ commentsSort: t });
      }
    }),
    { name: "settings", storage: sa(() => localStorage) }
  )
);

const lt = new Map();
const QE = 60 * 1000/* 1e3 */;
const ZE = 300 * 1000/* 1e3 */;
const wl = 20;
const bl = 500;
function JE() {
  const e = Date.now();
  for (const [t, n] of lt.entries()) {
    if (e - n.timestamp > ZE) {
      lt.delete(t);
    }
  }
  if (lt.size > wl) {
    const t = Array.from(lt.entries()).sort(
      (o, r) => o[1].timestamp - r[1].timestamp
    );
    t.slice(0, t.length - wl).forEach(([o]) => lt.delete(o));
  }
}

const on = et((e, t) => ({
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
    const { usePostsStore: o } = await se(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => Os);
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
    JE();
    const s = Nr.getState().commentsSort;
    const a = n;
    const c = lt.get(a);
    const l = Date.now();
    if (c && c.sort === s) {
      if (l - c.timestamp < QE) {
        e({
          comments: c.comments,
          commentsNextCursor: c.nextCursor,
          commentsHasMore: c.hasMore,
          commentsLoading: false,
        });

        Nt.getComments(n, { limit: 100, sort: s })
          .then((d) => {
          const d_data = d.data;

          lt.set(a, {
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
      const u = await Nt.getComments(n, { limit: 100, sort: s });
      const u_data = u.data;

      lt.set(a, {
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
    const a = Nr.getState().commentsSort;
    e({ commentsLoadingMore: true });
    try {
      const c = await Nt.getComments(n, {
        limit: 100,
        sort: a,
        cursor: s ?? undefined,
      });
      e((l) => {
        const u = [...l.comments, ...c.data];
        return {
          comments: u.length > bl ? u.slice(-bl) : u,
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

    let r = o.findIndex(_ => _.id === n);

    let s = false;
    let a = -1;
    let c = -1;
    if (r === -1) {
      for (let _ = 0; _ < o.length; _++) {
        const g = (o[_].previewReplies ?? []).findIndex(E => E.id === n);
        if (g !== -1) {
          (s = true);
          (a = _);
          (c = g);
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
    const m = [...o];
    if (s) {
      const _ = [...(m[a].previewReplies ?? [])];
      (_[c] = { ..._[c], reactions: { total: f, myReaction: h } });
      (m[a] = { ...m[a], previewReplies: _ });
    } else {
      m[r] = { ...m[r], reactions: { total: f, myReaction: h } };
    }
    e({ comments: m });
    try {
      if (p) {
        await Nt.unlikeComment(n);
      } else {
        await Nt.likeComment(n);
      }
    } catch (_) {
      console.error("Failed to toggle comment like:", _);
      const v = [...t().comments];
      if (s) {
        const g = v.findIndex(E => E.previewReplies?.some(y => y.id === n)
        );
        if (g !== -1) {
          const E = v[g].previewReplies.findIndex(y => y.id === n);
          if (E !== -1) {
            const y = [...v[g].previewReplies];
            (y[E] = { ...y[E], reactions: { total: d, myReaction: u } });
            (v[g] = { ...v[g], previewReplies: y });
          }
        }
      } else {
        const g = v.findIndex(E => E.id === n);

        if (g !== -1) {
          (v[g] = { ...v[g], reactions: { total: d, myReaction: u } });
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
          ? await Nt.createReply(s, o, r, c, a)
          : await Nt.createComment(n, o, r, undefined, a);

      const d = ge.getState().profile;
      if (d) {
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
            comments: g.comments.map(E => E.id === s
              ? {
                  ...E,
                  previewReplies: [...(E.previewReplies || []), v],
                  stats: { ...E.stats, replies: E.stats.replies + 1 },
                }
              : E
            ),

            highlightedCommentId: u.id
          })
            : g => ({
            comments: [v, ...g.comments],
            highlightedCommentId: u.id
          })
        );
      }

      const { usePostsStore: p } = await se(async () => {
          const { usePostsStore: _ } = await Promise.resolve().then(() => Os);
          return { usePostsStore: _ };
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

      const h = Nr.getState().commentsSort;
      const m = lt.get(n);

      if (m) {
        lt.set(n, { ...m, comments: t().comments, timestamp: Date.now() });
      } else {
        lt.set(n, {
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
        const s = await Nt.getReplies(n, { limit: 100 });
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
      await Nt.editComment(n, o, r);
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

    const { usePostsStore: c } = await se(async () => {
        const { usePostsStore: u } = await Promise.resolve().then(() => Os);
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
      await Nt.deleteComment(n);
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
    lt.clear();

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

const e1 = Object.freeze(
  Object.defineProperty(
    { __proto__: null, useCommentsStore: on },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const Br = {
  feed_global: 1,
  feed_following: 2,
  feed_clan: 3,
  profile: 4,
  hashtag: 5,
  post_page: 6,
  link: 7,
  search: 8,
};

const t1 = 0;
const n1 = 1;
const o1 = 2;
const r1 = 3;
const El = 4;
const s1 = 5;
const i1 = 250;
const a1 = 0.5;
const c1 = 30000/* 3e4 */;
const l1 = 2000/* 2e3 */;
const u1 = 20;
const Sl = "dwell_sid";

const d1 = [
  0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,
  0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
];

function f1() {
  try {
    let e = sessionStorage.getItem(Sl);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Sl, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
function p1(e) {
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
  return ((intersectionRect ? intersectionRect.height / boundingClientRect.height : 0) >= a1 ||
  (rootBounds ? intersectionRect.height >= rootBounds.height / 2 : false) || e.intersectionRatio > 0.95);
}
class h1 {
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
    (this.sessionId = f1());

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
        { threshold: d1 }
      ));

    const t = () => {
        this.lastActivityAt = Date.now();
      };

    const n = ["mousemove", "scroll", "keydown", "touchstart", "wheel"];
    for (const o of n) {
      window.addEventListener(o, t, { passive: true });
    }

    document.addEventListener("visibilitychange", () => {
      const o = document.hidden ? o1 : null;
      this.evaluateAll(o);

      if (document.hidden) {
        this.flushBeacon();
      }
    });

    window.addEventListener("blur", () => {
      setTimeout(() => {
        if (!document.hidden) {
          this.evaluateAll(n1);
        }
      }, 50);
    });

    window.addEventListener("focus", () => this.evaluateAll(null));

    setInterval(() => this.evaluateAll(null), 5000/* 5e3 */);

    window.addEventListener("pagehide", () => {
      this.evaluateAll(r1);
      this.flushBeacon();
    });

    setInterval(() => this.flush(), l1);
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
        this.evaluate(c, El);
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
      this.evaluate(o, El);
      this.posts.delete(n);
    }
  }
  isUserActive() {
    return Date.now() - this.lastActivityAt < c1 && !document.hidden;
  }
  evaluateAll(t) {
    for (const n of this.posts.values()) {
      this.evaluate(n, t);
    }
  }
  evaluate(t, n) {
    const t_lastEntry = t.lastEntry;
    const r = !!t_lastEntry && p1(t_lastEntry);
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

      if (u < i1) {
        return;
      }

      const d = n ?? (r ? s1 : t1);
      const p = this.seenPostIds.has(t.postId);
      this.seenPostIds.add(t.postId);
      const f = t.source === "post_page" || t.source === "link";
      const h = { md: u, et: t_visibleSince, xt: c, r: d, v: t.vs };

      if (t.sourceContext) {
        (h.sc = t.sourceContext);
      }

      if (f) {
        (h.s = Br[t.source]);
      }

      if (p) {
        (h.b = 1);
      }

      this.enqueue(h, t.postId, Br[t.source]);
    }
  }
  enqueue(t, n, o) {
    this.buffer.push(t);

    if (this.buffer.length >= u1) {
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
    O.post(D.posts.dwellLog, o, { headers: r }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    O.post(
      D.posts.dwellLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const Cl = new h1();
function m1(e, t, n, o = "", r = undefined) {
  U(() => {
    const t_current = t.current;
    if (!(!t_current || !r)) {
      Cl.observe(t_current, e, n, o, r);

      return () => {
        Cl.unobserve(t_current);
      };
    }
  }, [e, t, n, o, r]);
}
function ba(e) {
  const t = ie(n => n.postStatsCache[e.id]);
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
const gf = "shop-cart";
function kl() {
  try {
    const e = localStorage.getItem(gf);
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
function _f() {
  const [e, t] = L(kl);

  U(() => {
    const n = (o) => {
      if (o.key === null || o.key === gf) {
        t(kl());
      }
    };
    window.addEventListener("storage", n);

    return () => window.removeEventListener("storage", n);
  }, []);

  return e;
}

const g1 = ce(() => se(() => import("./index-BbqHoLvp.js"), __vite__mapDeps([8, 9])).then(
  e => ({
    default: e.ChangelogModal
  })
)
  );

const _1 = ce(() => se(
  () => import("./index-BNSyjeK1.js"),
  __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
).then(e => ({
  default: e.SubscriptionModal
}))
);

const vf = ({
  href: e,
  icon: t,
  children: n,
  badge: o,
  onActiveClick: r,
  isActive: s = false,
}) => {
  const [a] = Jr();
  const c = a.url || "/";
  const u = c === e || c.startsWith(`${e}/`) || s;
  return i("a", {
    href: e,
    className: `${Ve.navItem} ${u ? Ve.active : ""}`,
    onClick: (d) => {
      if (u && r) {
        d.preventDefault();
        r();
      }
    },
    children: [
      i("span", {
        className: Ve.iconWrapper,
        children: [
          t,
          o !== undefined &&
            o > 0 &&
            i("span", { className: Ve.badge, children: o > 99 ? "99+" : o }),
        ],
      }),
      i("span", { children: n }),
    ],
  });
};

const pr = e => i(vf, { ...e });

const v1 = () => {
  const e = Ko();
  const [t] = Jr();

  const n = ie(N => N.fetchFeed);

  const o = ie(N => N.isRefreshing);

  const r = ge(N => N.logout);

  const s = os();
  const a = ns();
  const c = af();
  const l = _f();
  const [u, d] = L(false);
  const [p, f] = L(false);
  const h = jd();

  const m = es(N => N.fetchPortal);

  const _ = zd(h);
  const v = !_ && h.active && !!h.url;
  const g = _ ? le.ALICE_EVENT : v ? h.url : le.EVENT;
  const E = (t.url || "/").startsWith(le.EVENT);
  const y = a?.username ? `/@${a.username}` : "/profile";
  U(() => {
    m();
  }, [m]);

  const k = I(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      n(true);
    }
  }, [n]);

  const C = I(() => {
    r();
  }, [r]);

  const b = Te(() => {
    const N = t.url || "/";
    return pa.some(T => N.startsWith(T));
  }, [t.url]);

  const w = Te(() => {
    const N = t.url || "/";
    return a?.username
      ? N === `/@${a.username}` || N.startsWith(`/@${a.username}/`)
      : false;
  }, [t.url, a?.username]);

  return b
    ? null
    : i("aside", {
        className: Ve.aside,
        children: [
          i("div", {
            className: Ve.asideTop,
            children: [
              i("div", {
                className: Ve.asideBrand,
                children: [
                  i(o0, {}),
                  i("button", {
                    className: Ve.asideBrandVersion,
                    onClick: () => d(true),
                    title: "Что нового",
                    children: ["v", "1.1.2"],
                  }),
                ],
              }),
              i("nav", {
                className: Ve.nav,
                children: [
                  i(pr, {
                    href: "/",
                    icon: o ? i(la, {}) : i(Qd, {}),
                    onActiveClick: k,
                    children: "Лента",
                  }),
                  i(pr, {
                    href: "/search",
                    icon: i(tf, {}),
                    children: "Поиск",
                  }),
                  i(pr, {
                    href: "/shop",
                    icon: i(nf, {}),
                    badge: l,
                    children: "Магаз",
                  }),
                  ((h.active && h.url) || e.status === "allowed") &&
                    i("a", {
                      href: g,
                      target: v ? "_blank" : undefined,
                      rel: v ? "noopener noreferrer" : undefined,
                      className: `${Ve.portalButton} ${
                        h.active ? Ve.portalActive : ""
                      } ${E ? Ve.active : ""}`,
                      title: "Ивент",
                      children: [
                        i("img", {
                          src: h.active
                            ? "/assets/portal/portal-active.gif"
                            : "/assets/portal/portal-inactive.png",
                          alt: "Ивент",
                          className: Ve.portalImage,
                        }),
                        i("span", { children: "Ивент" }),
                      ],
                    }),
                  i(pr, {
                    href: "/notifications",
                    icon: i(ua, {}),
                    badge: c,
                    children: "Уведомления",
                  }),
                  i(vf, {
                    href: y,
                    icon: i(Si, {}),
                    isActive: w,
                    children: "Профиль",
                  }),
                ],
              }),
            ],
          }),
          i("div", {
            className: Ve.asideBottom,
            children: s
              ? i(ve, {
                  children: [
                    !a?.subscription?.isActive &&
                      i("button", {
                        className: Ve.logoutButton,
                        onClick: () => f(true),
                        children: [
                          i("span", { children: "⭐" }),
                          i("span", { children: "ИТД НУКСТА" }),
                        ],
                      }),
                    i("button", {
                      className: Ve.logoutButton,
                      onClick: C,
                      children: [
                        i(s0, { size: 20 }),
                        i("span", { children: "Выйти" }),
                      ],
                    }),
                  ],
                })
              : i("a", {
                  className: Ve.logoutButton,
                  href: le.LOGIN,
                  children: [
                    i(Si, { size: 20 }),
                    i("span", { children: "Войти" }),
                  ],
                }),
          }),
          u &&
            i(De, {
              fallback: null,
              children: i(g1, { isOpen: u, onClose: () => d(false) }),
            }),
          p &&
            i(De, {
              fallback: null,
              children: i(_1, { isOpen: p, onClose: () => f(false) }),
            }),
        ],
      });
};

const y1 = "k3ZA";
const w1 = "QiWP";
const b1 = "KFN5";
const E1 = "bDiZ";
const _o = { sidebar: y1, sidebarContent: w1, sidebarBottom: b1, legalLinks: E1 };

const S1 = () => {
  const [e] = Jr();
  return Te(() => {
    const n = e.url || "/";
    return pa.some(o => n.startsWith(o));
  }, [e.url])
    ? null
    : i("aside", {
        className: _o.sidebar,
        children: [
          i("div", { className: _o.sidebarContent }),
          i("div", {
            className: _o.sidebarBottom,
            children: [
              i("ul", {
                className: _o.legalLinks,
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
                className: _o.copyright,
                children: "© 2026 ООО «ИТД»",
              }),
            ],
          }),
        ],
      });
};

const C1 = "B1v0";
const k1 = "crLn";
const N1 = "NDAi";
const T1 = "hTzn";
const I1 = "qpDR";
const R1 = "KmLB";
const A1 = "oMKJ";
const L1 = "Ucqx";
const P1 = "lXH2";
const O1 = "LShW";
const x1 = "iigY";
const $1 = "WhpW";

const Qe = {
  mobileNavigationWrapper: C1,
  navigation: k1,
  indicator: N1,
  indicatorHidden: T1,
  navItem: I1,
  label: R1,
  active: A1,
  createButton: L1,
  iconWrapper: P1,
  portalImage: O1,
  portalImageActive: x1,
  badge: $1,
};

const Nl = e => Symbol.iterator in e;

const Tl = e => "entries" in e;

const Il = (e, t) => {
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

const M1 = (e, t) => {
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

function D1(e, t) {
  return Object.is(e, t)
    ? true
    : typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null ||
      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    ? false
    : Nl(e) && Nl(t)
    ? Tl(e) && Tl(t)
      ? Il(e, t)
      : M1(e, t)
    : Il(
        { entries: () => Object.entries(e) },
        { entries: () => Object.entries(t) }
      );
}
function Rl(e) {
  const t = So.useRef(undefined);
  return (n) => {
    const o = e(n);
    return D1(t.current, o) ? t.current : (t.current = o);
  };
}
const U1 = "M52X";
const F1 = "W5pA";
const B1 = "dJfY";
const H1 = "vvWS";
const V1 = "kPZ1";
const W1 = "mT0V";
const j1 = "oT5M";
const z1 = "uDXD";
const q1 = "URTH";
const G1 = "rYKB";
const Y1 = "ctoC";
const K1 = "BEcS";
const X1 = "Slbg";
const Q1 = "Fzgj";
const Z1 = "kuoc";
const J1 = "epn4";
const eS = "KcsD";
const tS = "dkck";
const nS = "XGHQ";
const oS = "NDeO";
const rS = "YRcr";
const sS = "Eynl";
const iS = "scwC";

const re = {
  skeleton: U1,
  comment: F1,
  content: B1,
  header: H1,
  headerLeft: V1,
  body: W1,
  actions: j1,
  likeBtn: z1,
  shimmer: q1,
  avatar: G1,
  more: Y1,
  likeIcon: K1,
  name: X1,
  time: Q1,
  line: Z1,
  w100: J1,
  w85: eS,
  w65: tS,
  w50: nS,
  w40: oS,
  replyLabel: rS,
  likeCount: sS,
  list: iS,
};

function aS(e) {
  switch (e) {
    case "short":
      {
        return i("div", {
          className: re.body,
          children: i("div", { className: `${re.shimmer} ${re.line} ${re.w50}` }),
        });
      }
    case "medium":
      {
        return i("div", {
          className: re.body,
          children: [
            i("div", { className: `${re.shimmer} ${re.line} ${re.w100}` }),
            i("div", { className: `${re.shimmer} ${re.line} ${re.w65}` }),
          ],
        });
      }
    case "long":
      {
        return i("div", {
          className: re.body,
          children: [
            i("div", { className: `${re.shimmer} ${re.line} ${re.w100}` }),
            i("div", { className: `${re.shimmer} ${re.line} ${re.w85}` }),
            i("div", { className: `${re.shimmer} ${re.line} ${re.w40}` }),
          ],
        });
      }
  }
}
function Ea({ variant: e = "medium", delayMs: t = 0 }) {
  const n = t ? { "--shimmer-delay": `${t}ms` } : undefined;
  return i("div", {
    className: re.skeleton,
    "aria-hidden": "true",
    style: n,
    children: i("div", {
      className: re.comment,
      children: [
        i("div", { className: `${re.shimmer} ${re.avatar}` }),
        i("div", {
          className: re.content,
          children: [
            i("div", {
              className: re.header,
              children: [
                i("div", {
                  className: re.headerLeft,
                  children: [
                    i("div", { className: `${re.shimmer} ${re.name}` }),
                    i("div", { className: `${re.shimmer} ${re.time}` }),
                  ],
                }),
                i("div", { className: `${re.shimmer} ${re.more}` }),
              ],
            }),
            aS(e),
            i("div", {
              className: re.actions,
              children: [
                i("div", { className: `${re.shimmer} ${re.replyLabel}` }),
                i("div", {
                  className: re.likeBtn,
                  children: [
                    i("div", { className: `${re.shimmer} ${re.likeIcon}` }),
                    i("div", { className: `${re.shimmer} ${re.likeCount}` }),
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
const Al = ["medium", "short", "long", "medium", "short"];
function cS({ count: e = 4 }) {
  return i("div", {
    className: re.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка комментариев",
    children: Array.from({ length: e }, (t, n) => i(Ea, { variant: Al[n % Al.length], delayMs: n * 120 }, n)
    ),
  });
}

const jt = {
    MAX_CHARS: 1000/* 1e3 */,
    MIN_POLL_OPTIONS: 2,
    MAX_POLL_OPTIONS: 10,
    MAX_POLL_QUESTION_LENGTH: 200,
    MAX_POLL_OPTION_LENGTH: 100,
    MAX_TEXTAREA_HEIGHT: 400,
  };

const xs = {
  question: "",
  options: [
    { id: "1", text: "" },
    { id: "2", text: "" },
  ],
  multipleChoice: false,
};

function lS() {
  const [e, t] = L(false);
  const [n, o] = L(xs);

  const r = I((m) => {
    if (m.length <= jt.MAX_POLL_QUESTION_LENGTH) {
      o(_ => ({
        ..._,
        question: m
      }));
    }
  }, []);

  const s = I((m, _) => {
    if (_.length <= jt.MAX_POLL_OPTION_LENGTH) {
      o(v => ({
        ...v,
        options: v.options.map(g => g.id === m ? { ...g, text: _ } : g)
      }));
    }
  }, []);

  const a = I(() => {
    if (n.options.length < jt.MAX_POLL_OPTIONS) {
      o(m => ({
        ...m,
        options: [...m.options, { id: Date.now().toString(), text: "" }]
      }));
    }
  }, [n.options.length]);

  const c = I(
    (m) => {
      if (n.options.length > jt.MIN_POLL_OPTIONS) {
        o(_ => ({
          ..._,
          options: _.options.filter(v => v.id !== m)
        }));
      }
    },
    [n.options.length]
  );

  const l = I(() => {
    o(m => ({
      ...m,
      multipleChoice: !m.multipleChoice
    }));
  }, []);

  const u = I(() => {
    t(false);
    o(xs);
  }, []);

  const d = I(() => {
    t(m => !m);
  }, []);

  const p = I(() => {
    if (!e) {
      return true;
    }
    const m = n.question.trim().length > 0;

    const _ = n.options.filter(v => v.text.trim().length > 0);

    return m && _.length >= jt.MIN_POLL_OPTIONS;
  }, [e, n]);

  const f = I(() => {
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

  const h = I(() => {
    t(false);
    o(xs);
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
function yf(e = 10, t = false) {
  const [n, o] = L([]);
  const [r, s] = L([]);
  const a = x(null);
  const c = x(n);
  const l = x(r);
  (c.current = n);
  (l.current = r);

  U(
    () => () => {
      c.current.forEach(y => URL.revokeObjectURL(y.previewUrl));

      l.current.forEach(y => URL.revokeObjectURL(y.previewUrl));
    },
    []
  );

  const u = r.length > 0;

  const d = n.some(y => y.type === "video") || r.some(y => y.type === "video");

  const p = n.some(y => y.type === "image") || r.some(y => y.type === "image");

  const f = I(() => {
    a.current?.click();
  }, []);

  const h = I(
    async (y) => {
      const k = Gn.isValidVideoType(y);
      const C = Gn.isValidImageType(y);
      if (k && !t) {
        vt.error(
          "Загрузка видео доступна только верифицированным пользователям"
        );
        return;
      }
      if (!C && !k) {
        vt.error("Неподдерживаемый формат файла");
        return;
      }
      const c_current = c.current;
      const l_current = l.current;

      const N =
        c_current.some(A => A.type === "video") ||
        l_current.some(A => A.type === "video");

      const T =
        c_current.some(A => A.type === "image") ||
        l_current.some(A => A.type === "image");

      if (k && T) {
        vt.error("Нельзя добавить видео вместе с изображениями");
        return;
      }
      if (C && N) {
        vt.error("Нельзя добавить изображения вместе с видео");
        return;
      }
      if (k && N) {
        vt.error("Можно загрузить только 1 видео");
        return;
      }
      const S = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const P = URL.createObjectURL(y);
      const R = k ? "video" : "image";
      s(A => [
        ...A,
        { id: S, file: y, previewUrl: P, progress: 0, type: R },
      ]);
      try {
        const A = await Gn.uploadMedia(y);

        s(B => B.filter(q => q.id !== S));

        o(B => [
          ...B,
          {
            id: `img-${Date.now()}-${Math.random().toString(36).slice(2)}`,
            mediaId: A.id,
            url: A.url,
            previewUrl: P,
            type: R,
          },
        ]);
      } catch (A) {
        let B = "Ошибка загрузки";

        if ($e(A)) {
          (B = ia(A.code, A.message));
        } else if (A instanceof Error) {
          (B = A.message);
        }

        vt.error(B);

        s(q => q.filter(ne => ne.id !== S));

        URL.revokeObjectURL(P);
      }
    },
    [t]
  );

  const m = I(
    (y) => {
      const y_target = y.target;
      const y_target_files = y_target.files;
      if (!y_target_files || y_target_files.length === 0) {
        return;
      }
      const b = n.length + r.length;
      const w = e - b;
      if (w <= 0) {
        return;
      }
      Array.from(y_target_files).slice(0, w).forEach(h);
      (y_target.value = "");
    },
    [n.length, r.length, e, h]
  );

  const _ = I((y) => {
    o((k) => {
      const C = k.find(b => b.id === y);

      if (C) {
        URL.revokeObjectURL(C.previewUrl);
      }

      return k.filter(b => b.id !== y);
    });

    s((k) => {
      const C = k.find(b => b.id === y);

      if (C) {
        URL.revokeObjectURL(C.previewUrl);
      }

      return k.filter(b => b.id !== y);
    });
  }, []);

  const v = I(
    (y) => {
      const k = y.filter(w => t ? Gn.isValidMediaType(w) : Gn.isValidImageType(w)
      );
      if (k.length === 0) {
        return;
      }
      const C = c.current.length + l.current.length;
      const b = e - C;

      if (b > 0) {
        k.slice(0, b).forEach(h);
      }
    },
    [e, h, t]
  );

  const g = I(
    async (y) => {
      const [k, C] = y.split(",");
      const b = k.match(/:(.*?);/)?.[1] || "image/png";
      const w = atob(C);
      const N = new Uint8Array(w.length);
      for (let P = 0; P < w.length; P++) {
        N[P] = w.charCodeAt(P);
      }
      const T = new Blob([N], { type: b });
      const S = new File([T], `drawing-${Date.now()}.png`, { type: "image/png" });
      h(S);
    },
    [h]
  );

  const E = I(() => {
    n.forEach(y => URL.revokeObjectURL(y.previewUrl));

    r.forEach(y => URL.revokeObjectURL(y.previewUrl));

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
    removeImage: _,
    addImage: g,
    uploadFiles: v,
    clearAll: E,
    fileInputRef: a,
    handleFileChange: m,
  };
}
const uS = "pafp";
const dS = "RPR1";
const fS = "DMKN";
const pS = "GBiz";
const hS = "kQx1";
const mS = "QpX5";
const gS = "Wjjv";
const _S = "zz2n";
const vS = "ENqk";
const yS = "rwGv";
const wS = "efN4";
const bS = "zz7D";
const ES = "pbZU";
const SS = "O4sr";
const CS = "pVFC";
const kS = "USNU";
const NS = "YThT";
const TS = "i8UK";
const IS = "fiSP";
const RS = "ccK8";
const AS = "rXPp";
const LS = "rkd6";
const PS = "evfq";
const OS = "AY3O";
const xS = "sVYM";
const $S = "RPqO";
const MS = "qce0";
const DS = "tJ4r";
const US = "sl3i";
const FS = "w7GV";
const BS = "FV8s";
const HS = "ABPH";
const VS = "hN3G";
const WS = "CtJT";
const jS = "HBt7";
const zS = "dXJo";
const qS = "QAJk";
const GS = "qo6F";
const YS = "Lr9X";
const KS = "wefP";
const XS = "Os7k";
const QS = "U8im";
const ZS = "SwD8";
const JS = "ufwD";
const eC = "U6RE";
const tC = "psIX";
const nC = "B9am";
const oC = "gn7F";
const rC = "kSD5";
const sC = "ix9f";
const iC = "Qn9G";

const j = {
  form: uS,
  notebookGrid: dS,
  notebookRuled: fS,
  editor: pS,
  mediaButton: hS,
  dragActive: mS,
  whatsNew: gS,
  dragOverlay: _S,
  attachments: vS,
  attachmentPreview: yS,
  uploading: wS,
  uploadError: bS,
  videoPreviewWrapper: ES,
  videoPlayIcon: SS,
  uploadOverlay: CS,
  spinner: kS,
  errorOverlay: NS,
  errorText: TS,
  removeAttachment: IS,
  actions: RS,
  mediaButtons: AS,
  submitGroup: LS,
  charCount: PS,
  error: OS,
  pollContainer: xS,
  pollHeader: $S,
  pollTitle: MS,
  pollClose: DS,
  pollQuestion: US,
  pollOptions: FS,
  pollOptionRow: BS,
  pollOption: HS,
  removeOption: VS,
  addOption: WS,
  pollFooter: jS,
  pollToggle: zS,
  active: qS,
  notebookLabel: GS,
  notebookPicker: YS,
  notebookPickerHeader: KS,
  notebookOptions: XS,
  notebookOptionRow: QS,
  notebookOption: ZS,
  notebookOptionActive: JS,
  gridSwatch: eC,
  ruledSwatch: tC,
  notebookBuy: nC,
  notebookUnavailable: oC,
  notebookButton: rC,
  notebookIcon: sC,
  submitError: iC,
};

function Ll({ src: e, type: t }) {
  return t === "video"
    ? i("div", {
        className: j.videoPreviewWrapper,
        children: [
          i("video", { src: e, preload: "metadata" }),
          i("div", {
            className: j.videoPlayIcon,
            children: i(Jy, { size: 24 }),
          }),
        ],
      })
    : i("img", { src: e, alt: "" });
}
function wf({ images: e, uploadingImages: t, onRemove: n }) {
  return e.length > 0 || t.length > 0
    ? i("div", {
        className: j.attachments,
        children: [
          e.map(r => i(
            "div",
            {
              className: j.attachmentPreview,
              children: [
                i(Ll, { src: r.previewUrl, type: r.type }),
                i("button", {
                  className: j.removeAttachment,
                  onClick: () => n(r.id),
                  children: i(ft, {}),
                }),
              ],
            },
            r.id
          )
          ),
          t.map(r => i(
            "div",
            {
              className: `${j.attachmentPreview} ${
                r.error ? j.uploadError : j.uploading
              }`,
              children: [
                i(Ll, { src: r.previewUrl, type: r.type }),
                !r.error &&
                  i("div", {
                    className: j.uploadOverlay,
                    children: i("div", { className: j.spinner }),
                  }),
                r.error &&
                  i("div", {
                    className: j.errorOverlay,
                    children: i("span", {
                      className: j.errorText,
                      children: r.error,
                    }),
                  }),
                i("button", {
                  className: j.removeAttachment,
                  onClick: () => n(r.id),
                  children: i(ft, {}),
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
function aC({
  poll: e,
  onQuestionChange: t,
  onOptionChange: n,
  onAddOption: o,
  onRemoveOption: r,
  onMultipleChoiceToggle: s,
  onClose: a,
}) {
  return i("div", {
    className: j.pollContainer,
    children: [
      i("div", {
        className: j.pollHeader,
        children: [
          i("span", { className: j.pollTitle, children: "Опрос" }),
          i("button", {
            className: j.pollClose,
            onClick: a,
            children: i(ft, {}),
          }),
        ],
      }),
      i("input", {
        type: "text",
        className: j.pollQuestion,
        placeholder: "Вопрос опроса",
        value: e.question,
        onInput: c => t(c.target.value),
      }),
      i("div", {
        className: j.pollOptions,
        children: e.options.map((c, l) => i(
          "div",
          {
            className: j.pollOptionRow,
            children: [
              i("input", {
                type: "text",
                className: j.pollOption,
                placeholder: `Вариант ${l + 1}`,
                value: c.text,
                maxLength: 50,
                onInput: u => n(c.id, u.target.value),
              }),
              e.options.length > jt.MIN_POLL_OPTIONS &&
                i("button", {
                  className: j.removeOption,
                  onClick: () => r(c.id),
                  children: i(ft, {}),
                }),
            ],
          },
          c.id
        )
        ),
      }),
      e.options.length < jt.MAX_POLL_OPTIONS &&
        i("button", {
          className: j.addOption,
          onClick: o,
          children: [i(da, {}), i("span", { children: "Добавить вариант" })],
        }),
      i("div", {
        className: j.pollFooter,
        children: i("label", {
          className: j.pollToggle,
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
const cC = "scPZ";
const lC = "A3Qd";
const uC = "msjF";
const dC = "I4og";
const fC = "EnwJ";
const pC = "Af2E";
const hC = "lXXQ";
const mC = "JG0P";
const gC = "K9DB";
const _C = "LPKu";
const vC = "M9II";
const yC = "pxxW";
const wC = "o5sX";
const bC = "cVUn";
const EC = "oeRQ";
const SC = "z3qa";

const Ge = {
  editor: cC,
  empty: lC,
  bold: uC,
  italic: dC,
  underline: fC,
  strike: pC,
  spoiler: hC,
  monospace: mC,
  quote: gC,
  link: _C,
  menu: vC,
  buttons: yC,
  button: wC,
  linkForm: bC,
  linkInput: EC,
  linkSubmit: SC,
};

const Hr = {
  bold: Ge.bold,
  italic: Ge.italic,
  underline: Ge.underline,
  strike: Ge.strike,
  spoiler: Ge.spoiler,
  monospace: Ge.monospace,
  quote: Ge.quote,
  link: Ge.link,
};

function $s(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}
function CC(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function kC(e) {
  return e !== "mention" && e !== "hashtag";
}
function Pl(e, t) {
  if (t.length === 0) {
    return e;
  }
  let n = e;
  for (const o of t) {
    if (!kC(o.type)) {
      continue;
    }
    const r = Hr[o.type];
    const s = o.type === "link" ? ` data-url="${CC(o.url)}"` : "";
    n = `<span class="${r}"${s}>${n}</span>`;
  }
  return n;
}
function NC(e, t, n) {
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
function TC(e, t) {
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
function IC(e) {
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
      for (const [u, d] of Object.entries(Hr)) {
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
function RC(e, t) {
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
function AC(e) {
  const e_parentNode = e.parentNode;
  if (e_parentNode) {
    while (e.firstChild) {
      e_parentNode.insertBefore(e.firstChild, e);
    }

    e_parentNode.removeChild(e);
  }
}

const LC = [
    { type: "bold", icon: zy, title: "Жирный" },
    { type: "italic", icon: Gy, title: "Курсив" },
    { type: "underline", icon: Qy, title: "Подчёркнутый" },
    { type: "strike", icon: Xy, title: "Зачёркнутый" },
    { type: "spoiler", icon: Ky, title: "Спойлер" },
    { type: "monospace", icon: qy, title: "Моноширинный" },
    { type: "quote", icon: Yy, title: "Цитата" },
    { type: "link", icon: Gd, title: "Ссылка" },
  ];

const cs = Td((
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
  const m = x(null);
  const [_, v] = L(false);
  const [g, E] = L({ x: 0, y: 0 });
  const [y, k] = L(false);
  const [C, b] = L("");
  const w = x(null);
  const N = x(null);
  const T = x(null);
  const S = x(false);
  const P = x(false);
  const R = x(t);
  const A = x(n);
  const B = x(o);

  U(() => {
    (R.current = t);
    (A.current = n);
    (B.current = o);
  }, [t, n, o]);

  ea(
    h,
    () => ({
      insertText: ($) => {
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        m_current.focus();
        const K = window.getSelection();
        if (!K) {
          return;
        }
        let de = 0;
        if (K.rangeCount > 0) {
          const ue = K.getRangeAt(0);
          de = NC(m_current, ue.startContainer, ue.startOffset);
        }
        const R_current = R.current;
        const A_current = A.current;
        const me = R_current.slice(0, de) + $ + R_current.slice(de);

        const Ie = A_current.map(ue => ue.offset >= de
          ? { ...ue, offset: ue.offset + $.length }
          : ue.offset + ue.length > de
          ? { ...ue, length: ue.length + $.length }
          : ue
        );

        (P.current = true);
        (R.current = me);
        (A.current = Ie);
        const Se = document.createTextNode($);
        if (K.rangeCount > 0) {
          const ue = K.getRangeAt(0);
          ue.deleteContents();
          ue.insertNode(Se);
          ue.setStartAfter(Se);
          ue.setEndAfter(Se);
          K.removeAllRanges();
          K.addRange(ue);
        }
        B.current(me, Ie);
      },

      focus: () => {
        m.current?.focus();
      }
    }),
    []
  );

  const q = I(() => {
    if (!t) {
      return "";
    }
    if (n.length === 0) {
      return $s(t);
    }

    const $ = [...n].sort((Z, me) => Z.offset - me.offset);

    const V = [];
    for (const Z of $) {
      V.push({ pos: Z.offset, type: "start", span: Z });
      V.push({ pos: Z.offset + Z.length, type: "end", span: Z });
    }
    V.sort((Z, me) => Z.pos !== me.pos
      ? Z.pos - me.pos
      : Z.type !== me.type
      ? Z.type === "end"
        ? -1
        : 1
      : 0
    );
    let K = "";
    let de = 0;
    const X = [];
    for (const Z of V) {
      if (Z.pos > de) {
        const me = t.substring(de, Z.pos);
        (K += Pl($s(me), X));
        (de = Z.pos);
      }
      if (Z.type === "start") {
        X.push(Z.span);
      } else {
        const me = X.indexOf(Z.span);

        if (me !== -1) {
          X.splice(me, 1);
        }
      }
    }
    if (de < t.length) {
      const Z = t.substring(de);
      K += Pl($s(Z), X);
    }
    return K || "<br>";
  }, [t, n]);

  U(() => {
    if (P.current) {
      P.current = false;
      return;
    }
    const m_current = m.current;
    if (!m_current || (document.activeElement === m_current && t !== "")) {
      return;
    }
    const V = q();

    if (m_current.innerHTML !== V) {
      (m_current.innerHTML = V);
    }
  }, [q, t]);

  U(() => {
    if (a && m.current) {
      const m_current = m.current;
      m_current.focus();

      if (m_current.childNodes.length > 0) {
        const V = window.getSelection();
        if (V) {
          const K = document.createRange();
          K.selectNodeContents(m_current);
          K.collapse(false);
          V.removeAllRanges();
          V.addRange(K);
        }
      }
    }
  }, [a]);

  U(() => {
    if (y && N.current) {
      N.current.focus();
    }
  }, [y]);

  const ne = I(
      ($) => {
        if (S.current) {
          return;
        }
        const m_current = m.current;
        if (!m_current) {
          return;
        }
        if ($?.data === " ") {
          const X = window.getSelection();
          if (X && X.rangeCount > 0) {
            const me = X.getRangeAt(0).startContainer;
            let Ie = null;
            let Se = me;

            while (Se && Se !== m_current) {
              if (Se.nodeType === Node.ELEMENT_NODE) {
                const ue = Se;
                if (ue.tagName === "SPAN" && ue.className) {
                  Ie = ue;
                  break;
                }
              }
              Se = Se.parentNode;
            }

            if (Ie) {
              const ue = Ie.textContent || "";
              if (ue.endsWith(" ")) {
                Ie.textContent = ue.slice(0, -1);
                const ht = document.createTextNode(" ");
                Ie.parentNode?.insertBefore(ht, Ie.nextSibling);
                const Ct = document.createRange();
                Ct.setStartAfter(ht);
                Ct.setEndAfter(ht);
                X.removeAllRanges();
                X.addRange(Ct);
              }
            }
          }
        }
        const K = m_current.innerText.replace(/\n$/, "");
        if (K.length > s) {
          const X = K.substring(0, s);
          (P.current = true);
          o(X, TC(n, X));
          return;
        }
        const de = IC(m_current);
        (P.current = true);
        o(K, de);
      },
      [s, o, n]
    );

  const Q = I(
    ($) => {
      if (p) {
        return;
      }
      const V = window.getSelection();
      if (!V || V.isCollapsed) {
        return;
      }
      $.preventDefault();
      (T.current = V.getRangeAt(0).cloneRange());

      const K = Math.max(
          10,
          Math.min($.clientX - 150, window.innerWidth - 310)
        );

      const de = Math.max(10, $.clientY - 50);
      E({ x: K, y: de });
      v(true);
    },
    [p]
  );

  const he = I(
    ($) => {
      $.preventDefault();

      if (f && $.clipboardData?.files?.length) {
        const Z = Array.from($.clipboardData.files).filter(me => me.type.startsWith("image/")
        );
        if (Z.length > 0) {
          f(Z);
          return;
        }
      }

      const V = $.clipboardData?.getData("text/plain") || "";
      if (!V) {
        return;
      }
      const K = window.getSelection();
      if (!K || !K.rangeCount) {
        return;
      }
      const de = K.getRangeAt(0);
      de.deleteContents();
      const X = document.createTextNode(V);
      de.insertNode(X);
      de.setStartAfter(X);
      de.setEndAfter(X);
      K.removeAllRanges();
      K.addRange(de);
      ne();
    },
    [ne, f]
  );

  const G = I(() => {
    const m_current = m.current;
    if (m_current && !R.current) {
      const V = window.getSelection();
      if (V) {
        const K = document.createRange();
        K.setStart(m_current, 0);
        K.collapse(true);
        V.removeAllRanges();
        V.addRange(K);
      }
    }
  }, []);

  const J = I(
    ($) => {
      if ($.key === "Enter" && !$.shiftKey && d) {
        $.preventDefault();
        d();
        return;
      }
      if (!p && ($.ctrlKey || $.metaKey)) {
        let V = null;
        switch ($.key.toLowerCase()) {
          case "b":
            {
              V = "bold";
              break;
            }
          case "i":
            {
              V = "italic";
              break;
            }
          case "u":
            {
              V = "underline";
              break;
            }
        }

        if (V) {
          $.preventDefault();
          ae(V);
        }
      }
    },
    [d, p]
  );

  const ae = I(
    ($, V) => {
      const m_current = m.current;
      if (!m_current) {
        return;
      }
      const de = window.getSelection();
      if (!de ||
      (T.current && (de.removeAllRanges(), de.addRange(T.current)),
      de.isCollapsed)) {
        return;
      }
      const X = de.getRangeAt(0);
      const Z = document.createElement("span");
      (Z.className = Hr[$]);

      if ($ === "link" && V) {
        (Z.dataset.url = V);
      }

      const me = RC(X.commonAncestorContainer, Hr[$]);
      if (me) {
        AC(me);
      } else {
        try {
          X.surroundContents(Z);
        } catch {
          const Ie = X.extractContents();
          Z.appendChild(Ie);
          X.insertNode(Z);
        }
      }
      ne();
      v(false);
      k(false);
      b("");
      (T.current = null);
      m_current.focus();
    },
    [ne]
  );

  const W = I(
    ($) => {
      if ($ === "link") {
        k(true);
      } else {
        ae($);
      }
    },
    [ae]
  );

  const we = I(
    ($) => {
      $.preventDefault();

      if (C.trim()) {
        ae("link", C.trim());
      }
    },
    [ae, C]
  );

  U(() => {
    if (!_) {
      return;
    }

    const $ = (K) => {
      if (w.current &&
        !w.current.contains(K.target)) {
        v(false);
        k(false);
        b("");
        (T.current = null);
      }
    };

    const V = () => {
      v(false);
      k(false);
      b("");
      (T.current = null);
    };

    document.addEventListener("mousedown", $);
    window.addEventListener("scroll", V, true);

    return () => {
      document.removeEventListener("mousedown", $);
      window.removeEventListener("scroll", V, true);
    };
  }, [_]);
  const oe = !t;
  return i(ve, {
    children: [
      i("div", {
        ref: m,
        className: `${Ge.editor} ${c} ${oe ? Ge.empty : ""}`,
        contentEditable: true,
        "data-placeholder": r,
        onInput: $ => ne($),
        onFocus: G,
        onPaste: he,
        onContextMenu: Q,
        onKeyDown: J,
        onCompositionStart: () => {
          S.current = true;
        },
        onCompositionEnd: () => {
          (S.current = false);
          ne();
        },
        style: { minHeight: l, maxHeight: u },
      }),
      _ &&
        $(
          i("div", {
            ref: w,
            className: Ge.menu,
            style: { left: g.x, top: g.y },
            children: y
              ? i("form", {
                  className: Ge.linkForm,
                  onSubmit: we,
                  children: [
                    i("input", {
                      ref: N,
                      type: "url",
                      className: Ge.linkInput,
                      placeholder: "https://...",
                      value: C,
                      onInput: $ => b($.target.value),
                    }),
                    i("button", {
                      type: "submit",
                      className: Ge.linkSubmit,
                      disabled: !C.trim(),
                      children: "OK",
                    }),
                  ],
                })
              : i("div", {
                  className: Ge.buttons,
                  children: LC.map(({ type: $, icon: V, title: K }) => i(
                    "button",
                    {
                      type: "button",
                      className: Ge.button,
                      onClick: () => W($),
                      title: K,
                      children: i(V, { size: 16 }),
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

const PC = "sNnb";
const OC = "AiEy";
const xC = "IAcb";
const $C = "Diu7";
const MC = "ZfJu";
const DC = "rVri";
const UC = "sDRg";
const FC = "GuzB";
const BC = "yObr";
const HC = "cWKE";
const VC = "iK0m";
const WC = "IfB9";
const jC = "XB51";
const zC = "yqSa";
const qC = "Depb";
const GC = "HTkR";
const YC = "Boxk";
const KC = "vuvp";
const XC = "dyMF";
const QC = "hWbD";
const ZC = "MqjL";

const Ae = {
  commentInput: PC,
  replyMode: OC,
  inputRow: xC,
  attachmentStrip: $C,
  circleButton: MC,
  micButton: DC,
  sendButton: UC,
  submitting: FC,
  textareaContainer: BC,
  expanded: HC,
  voiceMode: VC,
  inputWrapper: WC,
  commentCharCount: jC,
  error: zC,
  input: qC,
  replyHeader: GC,
  replyText: YC,
  replyName: KC,
  replyClose: XC,
  dragActive: QC,
  dragOverlay: ZC,
};

const JC = "mDoo";
const ek = "ODZh";
const tk = "Gpdi";
const Ms = { textInput: JC, entering: ek, sendButton: tk };
const nk = 1000/* 1e3 */;
function ok({
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
  const d = nk - e.length;
  const p = d < 0;
  const f = [Ms.textInput, s ? Ms.entering : ""].filter(Boolean).join(" ");
  return i("div", {
    className: f,
    children: [
      i("div", {
        className: Ae.inputWrapper,
        children: [
          i(cs, {
            value: e,
            spans: t,
            onChange: n,
            placeholder: o,
            autoFocus: a,
            className: Ae.input,
            minHeight: 24,
            maxHeight: 200,
            onSubmit: p ? undefined : r,
            disableFormatting: true,
            onImagePaste: u,
          }),
          p &&
            i("span", {
              className: `${Ae.commentCharCount} ${Ae.error}`,
              children: d,
            }),
        ],
      }),
      i("button", {
        className: `${Ae.circleButton} ${Ae.sendButton} ${Ms.sendButton} ${
          c ? Ae.submitting : ""
        }`,
        onClick: r,
        disabled: c || l || p,
        children: c ? i(cf, { size: "xs" }) : i(e0, { size: 20 }),
      }),
    ],
  });
}
const rk = ce(() => se(
  () => import("./VoiceInput-hXSZaEo3.js"),
  __vite__mapDeps([10, 11, 12])
).then(e => ({
  default: e.VoiceInput
}))
);
function bf({
  onSubmit: e,
  onVoiceSend: t,
  placeholder: n = "Написать комментарий...",
  replyTo: o,
  onCancelReply: r,
  autoFocus: s,
}) {
  const { text: a, spans: c, handleChange: l, reset: u } = ts();
  const [d, p] = L("text");
  const [f, h] = L(false);
  const [m, _] = L(false);
  const [v, g] = L(false);
  const [E, y] = L(false);
  const k = x(false);
  const C = x(null);
  const b = x(0);

  const {
    images: w,
    uploadingImages: N,
    isUploading: T,
    openFilePicker: S,
    removeImage: P,
    uploadFiles: R,
    clearAll: A,
    fileInputRef: B,
    handleFileChange: q,
  } = yf(4);

  U(
    () => () => {
      if (C.current) {
        clearTimeout(C.current);
      }
    },
    []
  );
  const ne = w.length > 0 || N.length > 0;
  const Q = a.length > 0 || v || ne;
  const he = d === "voice";
  const G = 1000/* 1e3 */;

  const J = async () => {
    const X = a.trim().length > 0;
    const Z = w.length > 0;
    if ((!X && !Z) || v || T || a.length > G) {
      return;
    }
    const me = a.trim();
    const Ie = [...c];

    const Se = w.map(ue => ({
      mediaId: ue.mediaId
    }));

    g(true);
    try {
      await e(me, Ie, Se.length > 0 ? Se : undefined);
      u();
      A();
    } catch (ue) {
      console.error("Failed to submit comment:", ue);
    } finally {
      g(false);
    }
  };

  const ae = () => {
    (k.current = true);
    p("voice");
    _(false);
  };

  const W = () => {
    h(true);
  };

  const we = () => {
    h(false);
    p("text");
    _(true);

    if (C.current) {
      clearTimeout(C.current);
    }

    (C.current = window.setTimeout(() => {
      (C.current = null);
      _(false);
    }, 300));
  };

  const oe = I((X) => {
    X.preventDefault();
    X.stopPropagation();
    b.current++;

    if (X.dataTransfer?.types.includes("Files")) {
      y(true);
    }
  }, []);

  const $ = I((X) => {
    X.preventDefault();
    X.stopPropagation();
  }, []);

  const V = I((X) => {
    X.preventDefault();
    X.stopPropagation();
    b.current--;

    if (b.current === 0) {
      y(false);
    }
  }, []);

  const K = I(
    (X) => {
      X.preventDefault();
      X.stopPropagation();
      (b.current = 0);
      y(false);
      const Z = X.dataTransfer?.files;

      if (Z && Z.length > 0) {
        R(Array.from(Z));
      }
    },
    [R]
  );

  const de = [
    Ae.commentInput,
    Q ? Ae.expanded : "",
    he ? Ae.voiceMode : "",
    o ? Ae.replyMode : "",
    E ? Ae.dragActive : "",
  ]
    .filter(Boolean)
    .join(" ");

  return i("div", {
    className: de,
    onDragEnter: oe,
    onDragOver: $,
    onDragLeave: V,
    onDrop: K,
    children: [
      E &&
        i("div", {
          className: Ae.dragOverlay,
          children: [
            i(Jd, { size: 24 }),
            i("span", { children: "Перетащите изображение" }),
          ],
        }),
      o &&
        i("div", {
          className: Ae.replyHeader,
          children: [
            i("span", {
              className: Ae.replyText,
              children: [
                "Ответ для ",
                i("span", { className: Ae.replyName, children: o.authorName }),
              ],
            }),
            i("button", {
              className: Ae.replyClose,
              onClick: r,
              children: i(ft, { size: 16 }),
            }),
          ],
        }),
      !he &&
        !f &&
        ne &&
        i("div", {
          className: Ae.attachmentStrip,
          children: i(wf, { images: w, uploadingImages: N, onRemove: P }),
        }),
      i("div", {
        className: Ae.inputRow,
        children: [
          i("button", {
            className: Ae.circleButton,
            onClick: he ? W : S,
            children: he ? i(ft, { size: 20 }) : i(Yd, { size: 20 }),
          }),
          i("div", {
            className: Ae.textareaContainer,
            children:
              he || f
                ? i(De, {
                    fallback: null,
                    children: i(rk, {
                      onCancel: W,
                      onSend: t,
                      isExiting: f,
                      onExitComplete: we,
                    }),
                  })
                : i(ok, {
                    text: a,
                    spans: c,
                    onChange: l,
                    placeholder: n,
                    onSubmit: J,
                    isEntering: m,
                    autoFocus: s,
                    isSubmitting: v,
                    sendDisabled: T,
                    onImagePaste: R,
                  }),
          }),
          !he &&
            !f &&
            i("button", {
              className: `${Ae.circleButton} ${Ae.micButton}`,
              onClick: ae,
              children: i(Zy, { size: 20 }),
            }),
        ],
      }),
      i("input", {
        ref: B,
        type: "file",
        accept: Ii,
        multiple: true,
        onChange: q,
        style: { display: "none" },
      }),
    ],
  });
}
const sk = "WZjF";
const ik = "Kcql";
const ak = "YFLU";
const ck = "imgK";
const lk = "ZotB";
const uk = "blPm";
const dk = "gmkd";

const mn = {
  counter: sk,
  digit: ik,
  prev: ak,
  current: ck,
  animating: lk,
  up: uk,
  down: dk,
};

function fk(e) {
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
function ko({ value: e }) {
  const t = fk(e);
  const n = x(e);
  const o = x(t.length);
  const r = x(Date.now());

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

  U(() => {
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

    const m = s.map(k => k.char);

    const _ = Math.max(h.length, m.length);
    const v = m.join("").padStart(_, " ").split("");

    const E = h
      .join("")
      .padStart(_, " ")
      .split("")
      .map((k, C) => {
      const b = v[C] || " ";
      const w = s[C - (_ - s.length)];
      return k !== b
        ? (o.current++,
          { char: k, prevChar: b, isAnimating: true, key: o.current })
        : { char: k, prevChar: k, isAnimating: false, key: w?.key ?? C };
    })
      .filter(k => k.char !== " " || k.isAnimating);

    a(E);
    const y = setTimeout(() => {
      a(k => k.map(C => ({
        ...C,
        isAnimating: false
      })));

      l(null);
    }, 300);
    return () => clearTimeout(y);
  }, [e]);

  if (!s.some(p => p.isAnimating)) {
    return i("span", { children: t });
  }

  const d = c === "up" ? mn.up : c === "down" ? mn.down : "";
  return i("span", {
    className: mn.counter,
    children: s.map(p => p.isAnimating
      ? i(
          "span",
          {
            className: `${mn.digit} ${mn.animating} ${d}`,
            children: [
              i("span", { className: mn.prev, children: p.prevChar }),
              i("span", { className: mn.current, children: p.char }),
            ],
          },
          p.key
        )
      : i("span", { children: p.char }, p.key)
    ),
  });
}
const pk = "Qjce";
const hk = "hvmS";
const mk = "vPNk";
const gk = "uQPf";
const _k = "IzZn";
const vk = "iZN1";
const yk = "fLLJ";
const wk = "m8wd";
const bk = "GVM1";

const Ft = {
  dropdownWrapper: pk,
  trigger: hk,
  menu: mk,
  hidden: gk,
  menuItem: _k,
  danger: vk,
  itemIcon: yk,
  itemLabel: wk,
  divider: bk,
};

function Ef({
  trigger: e,
  items: t,
  position: n = "bottom-right",
  dividerAfter: o = [],
  className: r,
}) {
  const [s, a] = L(false);
  const [c, l] = L(false);
  const [u, d] = L({ top: 0, left: 0 });
  const p = x(null);
  const f = x(null);

  const h = I(() => {
    if (!p.current) {
      return;
    }
    const g = p.current.getBoundingClientRect();
    const E = f.current?.offsetHeight || 150;
    const y = f.current?.offsetWidth || 160;
    let k = 0;
    let C = 0;

    if (n.startsWith("bottom")) {
      (k = g.bottom + 4);
    } else {
      (k = g.top - E - 4);
    }

    if (n.endsWith("right")) {
      (C = g.right - y);
    } else {
      (C = g.left);
    }

    const {
      innerWidth,
      innerHeight
    } = window;

    if (C + y > innerWidth) {
      (C = innerWidth - y - 8);
    }

    if (C < 8) {
      (C = 8);
    }

    if (k + E > innerHeight) {
      (k = g.top - E - 4);
    }

    if (k < 8) {
      (k = g.bottom + 4);
    }

    d({ top: k, left: C });
    l(true);
  }, [n]);

  const m = I((g) => {
    const g_target = g.target;

    if (p.current &&
      !p.current.contains(g_target) &&
      f.current &&
      !f.current.contains(g_target)) {
      a(false);
      l(false);
    }
  }, []);

  U(() => {
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
      a(false);
      l(false);
    } else {
      a(true);
    }
  };

  const v = (g, E) => {
    g.stopPropagation();
    E.onClick();
    a(false);
    l(false);
  };

  return i("div", {
    className: `${Ft.dropdownWrapper} ${r || ""}`,
    children: [
      i("div", { ref: p, className: Ft.trigger, onClick: _, children: e }),
      s &&
        $(
          i("div", {
            ref: f,
            className: `${Ft.menu} ${c ? "" : Ft.hidden}`,
            style: { top: u.top, left: u.left },
            children: t.map((g, E) => i(
              "div",
              {
                children: [
                  i("button", {
                    type: "button",
                    className: `${Ft.menuItem} ${g.danger ? Ft.danger : ""}`,
                    onClick: y => v(y, g),
                    children: [
                      g.icon &&
                        i("span", {
                          className: Ft.itemIcon,
                          children: g.icon,
                        }),
                      i("span", {
                        className: Ft.itemLabel,
                        children: g.label,
                      }),
                    ],
                  }),
                  o.includes(g.id) &&
                    E < t.length - 1 &&
                    i("div", { className: Ft.divider }),
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

const Ek = [
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

const Tr = Ek.map(([e, t]) => {
  const n = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="28" viewBox="0 0 120 28" preserveAspectRatio="none"><path d="${e}" fill="#fffef7" stroke="#cecbbc" stroke-width=".6" vector-effect="non-scaling-stroke"/><path d="${t}" fill="none" stroke="#e6e2d4" stroke-width=".55"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(n)}`;
});

function Sk(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++) {
    t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  }
  return t >>> 0;
}
function Ck(e) {
  const t = new Map();
  const n = new Set();
  let o = -1;
  for (const r of e) {
    if (t.has(r.id)) {
      continue;
    }

    if (n.size === Tr.length) {
      n.clear();
    }

    let s = Sk(r.id) % Tr.length;

    while (n.has(s) || (!n.size && s === o)) {
      s = (s + 1) % Tr.length;
    }

    t.set(r.id, s);
    n.add(s);
    (o = s);
  }
  return t;
}
const kk = "M6ie";
const Nk = "vjBL";
const Tk = "zR63";
const Ik = "dq6p";
const Rk = "QcmL";
const Ak = "XZs2";
const Lk = "SCZm";
const Pk = "ZzoO";
const Ok = "y6gx";

const Bt = {
  underline: kk,
  monospace: Nk,
  quote: Tk,
  spoiler: Ik,
  revealed: Rk,
  link: Ak,
  mention: Lk,
  hashtag: Pk,
  corrector: Ok,
};

function xk(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return false;
  }
}
function $k(e) {
  if (!xk(e)) {
    return "#";
  }
  const n = new TextEncoder().encode(e);
  const o = String.fromCharCode(...n);
  const r = btoa(o);
  return `/external?url=${encodeURIComponent(r)}`;
}
function Sa({
  text: e,
  spans: t = [],
  className: n = "",
  correctorMarks: o = [],
}) {
  const r = Te(() => Ck(o), [o]);

  const [s, a] = L(new Set());

  const c = Te(() => {
    if (t.length === 0) {
      return [{ text: e, offset: 0, styles: new Set() }];
    }
    const d = [];

    t.forEach((m, _) => {
      d.push({ pos: m.offset, type: "start", span: m, index: _ });
      d.push({ pos: m.offset + m.length, type: "end", span: m, index: _ });
    });

    d.sort((m, _) => m.pos !== _.pos
      ? m.pos - _.pos
      : m.type !== _.type
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
        const _ = e.substring(f, m.pos);
        const v = new Set();
        let g;
        let E;
        let y;

        h.forEach((k) => {
          v.add(k.type);

          if (k.type === "link" && k.url) {
            (g = k.url);
          }

          if (k.type === "mention" &&
            (k.username || k.id)) {
            (E = k.username || k.id);
          }

          if (k.type === "hashtag" && k.tag) {
            (y = k.tag);
          }
        });

        p.push({
          text: _,
          offset: f,
          styles: v,
          url: g,
          mentionId: E,
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
    const h = o.filter(
      m => m.start < d.offset + d.text.length && m.end > d.offset
    );
    if (h.length) {
      const m = new Set([0, d.text.length]);
      for (const v of h) {
        m.add(Math.max(0, v.start - d.offset));
        m.add(Math.min(d.text.length, v.end - d.offset));
      }
      const _ = [...m].sort((v, g) => v - g);
      d_text = _.slice(0, -1).map((v, g) => {
        const E = d.text.slice(v, _[g + 1]);

        const y = h.find(C => C.start <= v + d.offset && C.end > v + d.offset);

        const k = y ? r.get(y.id) : 0;
        return y
          ? i(
              "span",
              {
                className: Bt.corrector,
                "data-corrector-mark": true,
                "data-corrector-id": y.id,
                "data-corrector-variant": k,
                style: { backgroundImage: `url("${Tr[k]}")` },
                "aria-label": "Текст замазан дежурным",
                onClick: (C) => {
                  C.preventDefault();
                  C.stopPropagation();
                },
                children: i("span", { "aria-hidden": "true", children: E }),
              },
              v
            )
          : E;
      });
    }

    if (d.styles.has("bold")) {
      (d_text = i("strong", { children: d_text }));
    }

    if (d.styles.has("italic")) {
      (d_text = i("em", { children: d_text }));
    }

    if (d.styles.has("underline")) {
      (d_text = i("span", { className: Bt.underline, children: d_text }));
    }

    if (d.styles.has("strike")) {
      (d_text = i("s", { children: d_text }));
    }

    if (d.styles.has("monospace")) {
      (d_text = i("code", { className: Bt.monospace, children: d_text }));
    }

    if (d.styles.has("quote")) {
      (d_text = i("span", { className: Bt.quote, children: d_text }));
    }

    if (d.styles.has("spoiler")) {
      const m = s.has(p);
      d_text = i("span", {
        className: `${Bt.spoiler} ${m ? Bt.revealed : ""}`,
        onClick: _ => l(_, p),
        children: d_text,
      });
    }

    if (d.styles.has("link") && d.url) {
      const m = $k(d.url);
      d_text = i("a", {
        href: m,
        target: "_blank",
        rel: "noopener noreferrer",
        className: Bt.link,
        onClick: _ => _.stopPropagation(),
        children: d_text,
      });
    }
    if (d.styles.has("mention") && d.mentionId) {
      const m = `/@${d.mentionId}`;
      d_text = i("a", {
        href: m,
        className: Bt.mention,
        onClick: (_) => {
          _.preventDefault();
          _.stopPropagation();
          Ye(m);
        },
        children: d_text,
      });
    }
    if (d.styles.has("hashtag") && d.hashtag) {
      const m = `/hashtag/${encodeURIComponent(d.hashtag)}`;
      d_text = i("a", {
        href: m,
        className: Bt.hashtag,
        onClick: (_) => {
          _.preventDefault();
          _.stopPropagation();
          Ye(m);
        },
        children: d_text,
      });
    }
    return i("span", { children: d_text }, p);
  };

  return i("span", { className: n, children: c.map((d, p) => u(d, p)) });
}
function Mk(e, t, n) {
  const { isVisible: o, isRevealing: r, onRevealComplete: s } = n;
  const a = x([]);
  const c = x(null);
  const l = x(null);
  const u = x({ width: 0, height: 0 });
  const d = x(1);

  const p = I((_, v) => {
    const g = Math.random() * 80 + 60;
    return {
      x: Math.random() * _,
      y: Math.random() * v,
      size: Math.random() * 1.2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      life: Math.random() * g,
      maxLife: g,
    };
  }, []);

  const f = I(
    (_, v) => {
      const g = Math.floor((_ * v) / 600);
      const E = [];
      for (let y = 0; y < g; y++) {
        E.push(p(_, v));
      }
      a.current = E;
    },
    [p]
  );

  const h = I(() => {
    const e_current = e.current;
    const t_current = t.current;
    if (!e_current || !t_current) {
      return;
    }
    const g = t_current.getBoundingClientRect();
    if (g.width === 0 || g.height === 0) {
      return;
    }
    const E = window.devicePixelRatio || 1;
    if (u.current.width !== g.width || u.current.height !== g.height) {
      (u.current = { width: g.width, height: g.height });
      (e_current.width = g.width * E);
      (e_current.height = g.height * E);
      (e_current.style.width = `${g.width}px`);
      (e_current.style.height = `${g.height}px`);
      const y = e_current.getContext("2d");

      if (y) {
        y.setTransform(E, 0, 0, E, 0, 0);
        (l.current = y);
      }

      f(g.width, g.height);
    }
  }, [e, t, f]);

  const m = I(() => {
    d.current = 1;
  }, []);

  U(() => {
    if (!o) {
      if (c.current) {
        cancelAnimationFrame(c.current);
        (c.current = null);
      }

      return;
    }
    h();
    const _ = () => {
      const l_current = l.current;
      const { width: g, height: E } = u.current;
      if (!l_current || g === 0 || E === 0) {
        c.current = requestAnimationFrame(_);
        return;
      }
      if (r && ((d.current -= 0.05), d.current <= 0)) {
        s();
        return;
      }
      l_current.clearRect(0, 0, g, E);

      a.current.forEach((y, k) => {
        (y.x += y.speedX);
        (y.y += y.speedY);
        y.life--;

        if (y.x < 0) {
          (y.x = g);
        }

        if (y.x > g) {
          (y.x = 0);
        }

        if (y.y < 0) {
          (y.y = E);
        }

        if (y.y > E) {
          (y.y = 0);
        }

        if (y.life <= 0) {
          a.current[k] = p(g, E);
          return;
        }

        const C = y.life / y.maxLife;
        const b = C < 0.3 ? C / 0.3 : 1;
        const w = y.opacity * b * d.current;
        l_current.beginPath();
        l_current.arc(y.x, y.y, y.size, 0, Math.PI * 2);
        (l_current.fillStyle = `rgba(255, 255, 255, ${w})`);
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
  }, [o, r, p, h, s]);

  return { resetOpacity: m };
}
const Dk = "wpj5";
const Uk = "Rphh";
const Fk = "pWeY";
const Bk = "Yh15";
const Hk = "dQAk";
const vo = { container: Dk, hidden: Uk, image: Fk, revealing: Bk, canvas: Hk };
const Ol = 5;
function xl({
  src: e,
  alt: t = "",
  spoiler: n = false,
  width: o,
  height: r,
  className: s = "",
  onClick: a,
}) {
  const [c, l] = L(!n);
  const [u, d] = L(false);
  const [p, f] = L(false);
  const h = x(null);
  const m = x(null);
  const _ = x(null);
  const v = x(false);

  const { resetOpacity: g } = Mk(h, m, {
    isVisible: p && !c && n,
    isRevealing: u,
    onRevealComplete: () => l(true),
  });

  U(() => {
    const m_current = m.current;
    if (!m_current) {
      return;
    }
    const N = new IntersectionObserver(
      (T) => {
        T.forEach((S) => {
          f(S.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "0px 200px 0px 200px" }
    );
    N.observe(m_current);

    return () => {
      N.disconnect();
    };
  }, []);

  const E = (w) => {
    (_.current = { x: w.clientX, y: w.clientY });
    (v.current = false);
  };

  const y = (w) => {
    if (!_.current) {
      return;
    }
    const N = Math.abs(w.clientX - _.current.x);
    const T = Math.abs(w.clientY - _.current.y);

    if ((N > Ol || T > Ol)) {
      (v.current = true);
    }
  };

  const k = (w) => {
    if (v.current) {
      (v.current = false);
      w.stopPropagation();
      return;
    }

    if (!c && !u && n) {
      w.stopPropagation();
      d(true);
      g();
    } else if (a) {
      a(w);
    }
  };

  const C = !c && n;
  const b = o && r ? { aspectRatio: `${o} / ${r}` } : undefined;
  return n
    ? i("div", {
        ref: m,
        className: `${vo.container} ${s} ${C ? vo.hidden : ""} ${
          u ? vo.revealing : ""
        }`,
        style: b,
        onPointerDown: E,
        onPointerMove: y,
        onClick: k,
        children: [
          i("img", {
            src: e,
            alt: t,
            className: vo.image,
            loading: "lazy",
            width: o,
            height: r,
            draggable: false,
            "data-post-media-image": true,
          }),
          C && i("canvas", { ref: h, className: vo.canvas }),
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
function Vk(e) {
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
function Ds(e, t) {
  const o =
      (e
        ? [
            ...(e.matches("img") ? [e] : []),
            ...Array.from(e.querySelectorAll("img")),
          ]
        : []
      ).find((v) => {
        const g = v.getBoundingClientRect();
        return g.width > 0 && g.height > 0;
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
  const m = Math.max(0, f - d);
  const _ = Math.max(0, h - p);
  return m <= 0 || _ <= 0
    ? null
    : {
        left: d,
        top: p,
        width: m,
        height: _,
        hiddenLeft: d - r.left,
        hiddenTop: p - r.top,
        hiddenRight: r.right - f,
        hiddenBottom: r.bottom - h,
        borderRadius: Vk(o),
      };
}
const $l = { photo_open: 1, video_progress: 2 };
const Wk = 2000/* 2e3 */;
const jk = 20;
const Ml = "dwell_sid";
function zk() {
  try {
    let e = sessionStorage.getItem(Ml);

    if (!e) {
      (e = crypto.randomUUID());
      sessionStorage.setItem(Ml, e);
    }

    return e;
  } catch {
    return crypto.randomUUID();
  }
}
class qk {
  buffer = [];
  sessionId = "";
  bound = false;
  ensureInit() {
    if (!this.bound && typeof window !== "undefined") {
      (this.bound = true);
      (this.sessionId = zk());
      window.setInterval(() => this.flush(), Wk);
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
    const s = { t: $l.photo_open, v: t, ai: n };

    if (o !== undefined) {
      (s.mi = o);
    }

    if (r) {
      (s.s = Br[r]);
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
      t: $l.video_progress,
      v: t,
      ai: n,
      pm: Math.round(o),
      dm: Math.round(r),
    };

    if (s) {
      (a.s = Br[s]);
    }

    this.enqueue(a);
  }
  enqueue(t) {
    this.buffer.push(t);

    if (this.buffer.length >= jk) {
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
    O.post(D.posts.interactionLog, o, { headers: r }).catch(() => {});
  }
  flushBeacon() {
    if (this.buffer.length === 0) {
      return;
    }
    const t = this.buffer;
    (this.buffer = []);

    O.post(
      D.posts.interactionLog,
      { sid: this.sessionId, e: t },
      { keepalive: true }
    ).catch(() => {});
  }
}
const Gk = new qk();
function Yk(e, t) {
  return I(
    (n, o) => {
      if (!e || !n) {
        return;
      }
      const r = t === "post_page" || t === "link";
      Gk.trackPhotoOpen(e, n, o, r ? t : undefined);
    },
    [e, t]
  );
}
const Kk = "VxVR";
const Xk = "O0Q5";
const Qk = "SkYb";
const Zk = "Uvrj";
const Jk = "jTci";
const eN = "RJ5h";
const tN = "oJkX";

const He = {
  mediaWrapper: Kk,
  isFeed: Xk,
  single: Qk,
  image: Zk,
  singleVideo: Jk,
  media: eN,
  dragging: tN,
};

const Dl = ce(() => se(
  () => import("./PostMediaVideo-DZo9BpZp.js"),
  __vite__mapDeps([13, 14, 15])
).then(e => ({
  default: e.PostMediaVideo
}))
);

const nN = 5;
const oN = 0.95;
const Us = 0.5;
const rN = 650;
const sN = 500;
const iN = 300;
function aN(e, t, n, o) {
  const r = e / t;
  return r > n / o ? Math.min(e, n) : Math.min(t, o) * r;
}
function Ca({ media: e, isFeed: t = false, postVs: n, source: o }) {
  const r = e?.filter(R => R.type === "image") ?? [];

  const s = e?.filter(R => R.type === "video") ?? [];

  const a = x(null);

  const c = Fd(R => R.open);

  const u = Yt() ? iN : sN;
  const d = Yk(n, o);
  const p = x(false);
  const f = x(0);
  const h = x(0);
  const m = x(false);
  const _ = x(0);
  const v = x(0);
  const g = x(0);
  const E = x(null);

  const y = () => {
    if (E.current) {
      cancelAnimationFrame(E.current);
      (E.current = null);
    }
  };

  const k = () => {
    const a_current = a.current;
    if (a_current) {
      (g.current *= oN);

      if (Math.abs(g.current) < Us) {
        y();
        return;
      }

      (a_current.scrollLeft += g.current);
      (E.current = requestAnimationFrame(k));
    }
  };

  const C = (R) => {
    const a_current = a.current;

    if (a_current && r.length + s.length > 1) {
      y();
      (p.current = true);
      a_current.classList.add(He.dragging);
      (f.current = R.clientX);
      (_.current = R.clientX);
      (v.current = Date.now());
      (h.current = a_current.scrollLeft);
      (m.current = false);
      (g.current = 0);
      R.preventDefault();
    }
  };

  const b = (R) => {
    if (!p.current) {
      return;
    }
    const a_current = a.current;
    if (!a_current) {
      return;
    }
    const B = Date.now();
    const q = R.clientX - f.current;
    const ne = R.clientX - _.current;
    const Q = B - v.current;

    if (Math.abs(q) > nN) {
      (m.current = true);
    }

    if (Q > 0) {
      (g.current = (-ne / Q) * 16);
    }

    (_.current = R.clientX);
    (v.current = B);
    (a_current.scrollLeft = h.current - q);
  };

  const w = () => {
    if (p.current && Math.abs(g.current) > Us) {
      k();
    }

    (p.current = false);
    a.current?.classList.remove(He.dragging);
  };

  const N = () => {
    if (p.current) {
      Math.abs(g.current) > Us && k();
      (p.current = false);
      a.current?.classList.remove(He.dragging);
    }
  };

  U(
    () => () => {
      y();
      a.current?.classList.remove(He.dragging);
    },
    []
  );

  const T = (R, A) => {
    if (m.current) {
      (m.current = false);
      A.stopPropagation();
      return;
    }
    const r_R = r[R];

    if (r_R) {
      d(r_R.id, R);
    }

    const q = A.currentTarget ?? null;
    const ne = Ds(q, a.current);

    const Q = (he) => {
      const a_current = a.current;
      if (!a_current) {
        return he !== R || !q?.isConnected ? null : Ds(q, null);
      }
      const J = a_current.querySelectorAll("[data-post-media-image]")[he];
      return J
        ? (J.scrollIntoView({
            behavior: "instant",
            inline: "center",
            block: "nearest",
          }),
          Ds(J, a_current))
        : null;
    };

    c(
      r.map(he => ({
        id: he.id,
        url: he.url,
        width: he.width || 800,
        height: he.height || 600
      })),
      R,
      ne,
      Q
    );
  };

  const S = (R) => {
    R.stopPropagation();
    (m.current = false);
  };

  if (r.length === 0 && s.length === 0) {
    return null;
  }
  const P = r.length + s.length;
  if (P === 1) {
    if (r.length === 1) {
      const [R] = r;

      const A =
        R.width && R.height
          ? {
              width: `${Math.round(aN(R.width, R.height, rN, u))}px`,
              aspectRatio: `${R.width} / ${R.height}`,
            }
          : undefined;

      return i("div", {
        className: `${He.mediaWrapper} ${t ? He.isFeed : ""}`,
        "data-count": 1,
        children: i("div", {
          className: He.single,
          style: A,
          onClick: (B) => {
            B.stopPropagation();
            T(0, B);
          },
          children: i(
            xl,
            {
              src: R.url,
              spoiler: R.spoiler,
              width: R.width,
              height: R.height,
              className: He.image,
              onClick: (B) => {
                B.stopPropagation();
                T(0, B);
              },
            },
            R.id
          ),
        }),
      });
    }
    if (s.length === 1) {
      const [R] = s;
      return i("div", {
        className: `${He.mediaWrapper} ${t ? He.isFeed : ""}`,
        "data-count": 1,
        onClick: A => A.stopPropagation(),
        children: i("div", {
          className: He.singleVideo,
          children: i(De, {
            fallback: null,
            children: i(
              Dl,
              {
                src: R.url,
                spoiler: R.spoiler,
                width: R.width,
                height: R.height,
                duration: R.duration,
                postVs: n,
                source: o,
                attachmentId: R.id,
              },
              R.id
            ),
          }),
        }),
      });
    }
  }
  return i("div", {
    className: `${He.mediaWrapper} ${t ? He.isFeed : ""}`,
    "data-count": P,
    children: i("div", {
      ref: a,
      className: `${He.media} ${t ? He.isFeed : ""}`,
      "data-count": P,
      onClick: S,
      onMouseDown: C,
      onMouseMove: b,
      onMouseUp: w,
      onMouseLeave: N,
      children: [
        s.map(R => i(
          De,
          {
            fallback: null,
            children: i(Dl, {
              src: R.url,
              spoiler: R.spoiler,
              width: R.width,
              height: R.height,
              duration: R.duration,
              className: He.image,
              postVs: n,
              source: o,
              attachmentId: R.id,
            }),
          },
          R.id
        )
        ),
        r.map((R, A) => i(
          xl,
          {
            src: R.url,
            spoiler: R.spoiler,
            width: R.width,
            height: R.height,
            className: He.image,
            onClick: B => T(A, B),
          },
          R.id
        )
        ),
      ],
    }),
  });
}
function Sf(e, t) {
  Pt(f => f.posts[e]);

  Pt(f => f.generation);

  const [n, o] = L(0);
  const r = is.read(t);
  const s = r?.state;
  const a = r?.received;
  const c = s && a !== undefined ? Fr(s, a) : Infinity;
  const l = !!t;

  U(() => l ? qE(e) : undefined, [e, l]);

  U(() => {
    if (!s || a === undefined) {
      return;
    }

    const f = () => o(_ => _ + 1);

    const h = [...s.events, ...s.marks]
      .map(_ => Date.parse(_.endsAt))
      .filter(_ => _ > c);

    const m = h.length
      ? setTimeout(
          f,
          Math.min(2147483647, Math.max(1, Math.min(...h) - Fr(s, a) + 10))
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
const cN = "YBQb";
const lN = "qbLq";
const uN = "yTnw";
const dN = "iVrB";
const fN = "C23r";
const pN = "iDP3";

const Wn = {
  overlay: cN,
  dialog: lN,
  title: uN,
  message: dN,
  actions: fN,
  column: pN,
};

const hN = { default: "primary", cancel: "secondary", destructive: "danger" };
function ka({
  title: e,
  message: t,
  actions: n,
  dialogClassName: o,
  stackActions: r = false,
  onDismiss: s,
}) {
  const a = n.some(c => c.loading);

  U(() => {
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

  return $(
    i("div", {
      className: Wn.overlay,
      onClick: (c) => {
        if (c.target === c.currentTarget && !a) {
          s?.();
        }
      },
      children: i("div", {
        role: "alertdialog",
        "aria-modal": "true",
        className: `${Wn.dialog} ${o ?? ""}`,
        children: [
          i("h2", { className: Wn.title, children: e }),
          t !== undefined && i("p", { className: Wn.message, children: t }),
          i("div", {
            className: `${Wn.actions} ${n.length > 2 || r ? Wn.column : ""}`,
            children: n.map(c => i(
              Fe,
              {
                variant: hN[c.role ?? "default"],
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
const mN = "V6pN";
const gN = "gUix";
const _N = "M0Ys";
const vN = "frOu";
const yN = "CePP";
const wN = "rfwL";

const gn = {
  dialog: mN,
  title: gN,
  copy: _N,
  bullets: vN,
  price: yN,
  unavailable: wN,
};

const bN = {
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

function Na({ productId: e, icon: t, onClose: n, postId: o, eventId: r }) {
  const [s, a] = L("loading");
  const [c, l] = L(null);

  const u = I(async () => {
    a("loading");
    try {
      const m =
        (await O.get("/v1/aliceai/shop", { skipErrorToast: true })).items.find(
          _ => _.id === e
        ) ?? null;
      l(m);
      a(m?.isAvailable ? "available" : "unavailable");
    } catch {
      a("error");
    }
  }, [e]);

  U(() => {
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
                Ye(`/event/alice-ai?${h.toString()}`);
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

  const f = c ?? bN[e];
  return i(ka, {
    title: i("span", {
      className: gn.title,
      children: [t, e === "post_notebook" ? "Тетрадка" : f.title],
    }),
    message: i("span", {
      className: gn.copy,
      children: [
        i("span", { children: f.details }),
        f.bullets.length > 0 &&
          i("span", {
            className: gn.bullets,
            children: f.bullets.map(h => i("span", { children: ["— ", h] }, h)
            ),
          }),
        c &&
          i("span", {
            className: gn.price,
            children: ["Цена: ", c.price, " мелков"],
          }),
        s === "loading" &&
          i("span", { role: "status", children: "Проверяем витрину…" }),
        s === "unavailable" &&
          i("span", {
            role: "status",
            className: gn.unavailable,
            children: "Сейчас купить нельзя.",
          }),
        s === "error" &&
          i("span", {
            role: "alert",
            className: gn.unavailable,
            children: "Не удалось проверить витрину. Попробуй ещё раз.",
          }),
      ],
    }),
    actions: p,
    dialogClassName: gn.dialog,
    onDismiss: n,
  });
}
const EN = "eDxQ";
const SN = "t7Tp";
const CN = "V3ao";
const kN = "F96F";
const NN = "uq6q";
const TN = "HLG9";
const IN = "ChMS";
const RN = "a3nk";
const AN = "t4XP";
const LN = "Kpit";
const PN = "bbYx";
const ON = "nVNQ";
const xN = "KXp9";
const $N = "HfmV";
const MN = "QWxU";

const Me = {
  panel: EN,
  panelBody: SN,
  heading: CN,
  toolHint: kN,
  actionButton: NN,
  preview: TN,
  invalid: IN,
  error: RN,
  signature: AN,
  signatureAction: LN,
  signatureText: PN,
  actor: ON,
  stamp: xN,
  signatureMenu: $N,
  srOnly: MN,
};

function DN({ marks: e, postId: t, userId: n, onClose: o }) {
  const [r, s] = L(false);
  const [a, c] = L(null);
  const [l, u] = L("");

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
          await O.post(
            "/correctors/cancel",
            { postId: t },
            { skipErrorToast: true }
          );

          await as([t]);
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
            await O.post(
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

  return i(ka, {
    title: "Корректор",
    stackActions: true,
    onDismiss: o,
    actions: f,
    message: i(ve, {
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
function Cf({ marks: e, postId: t }) {
  const [n, o] = L(false);
  const { openModal: r, closeModal: s } = Kt();

  const a = ge(l => l.profile?.id);

  const c = [...new Map(e.map(l => [l.actor.id, l.actor])).values()];

  return c.length
    ? i(ve, {
        children: [
          i("span", {
            className: Me.signature,
            "data-corrector-signature": true,
            children: [
              i("button", {
                type: "button",
                className: Me.signatureAction,
                "aria-label": "О корректоре",
                onClick: (l) => {
                  l.stopPropagation();
                  o(true);
                },
              }),
              i("span", {
                className: Me.stamp,
                "aria-hidden": "true",
                children: i("img", { src: Ci, alt: "" }),
              }),
              i("span", {
                className: Me.signatureText,
                children: [
                  c.length === 1 ? "Проверил дежурный" : "Проверили дежурные",
                  " ",
                  c.map((l, u) => i(
                    "span",
                    {
                      className: Me.actor,
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
                  className: Me.signatureMenu,
                  "aria-label": "Действия с корректором",
                  onClick: (l) => {
                    l.stopPropagation();
                    const u = r(
                      i(DN, {
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
            i(Na, {
              productId: "duty_corrector",
              icon: i("img", { src: Ci, alt: "" }),
              postId: t,
              eventId: e[0].eventId,
              onClose: () => o(false),
            }),
        ],
      })
    : null;
}
function UN(e, t) {
  St(() => {
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

      const m =
        p + Math.max(f, parseFloat(h.getPropertyValue("--safe-top")) || 0);

      let _ =
        p +
        u -
        Math.max(f, parseFloat(h.getPropertyValue("--safe-bottom")) || 0);
      for (const N of document.querySelectorAll("nav")) {
        const T = N.getBoundingClientRect();

        if (T.width > l / 2 &&
          T.top > p + u / 2 &&
          T.top < _ &&
          T.bottom >= p + u - 120) {
          (_ = Math.min(_, T.top - f));
        }
      }
      (e_current.style.width = `${Math.max(1, Math.min(352, l - f * 2))}px`);

      e_current.style.setProperty(
        "--bubble-max-height",
        `${Math.max(80, _ - m)}px`
      );

      const v = e_current.getBoundingClientRect();
      const g = _ - t.bottom - f;
      const E = t.top - f - m;
      let y = "below";
      let k = t.bottom + f;

      if (g < v.height) {
        if (E >= v.height) {
          (y = "above");
          (k = t.top - f - v.height);
        } else if (Math.max(E, g) >= 240) {
          (y = E > g ? "above" : "below");
          e_current.style.setProperty("--bubble-max-height", `${Math.max(E, g)}px`);

          (k = y === "above"
            ? t.top - f - e_current.getBoundingClientRect().height
            : t.bottom + f);
        } else {
          (y = "floating");
          (k = Math.max(m, Math.min(k, _ - v.height)));
        }
      }

      const C = (t.left + t.right) / 2;
      const b = Math.max(d + f, Math.min(C - v.width / 2, d + l - f - v.width));
      const w = Math.max(m, Math.min(k, _ - e_current.getBoundingClientRect().height));

      if (Math.abs(w - k) > 1) {
        (y = "floating");
      }

      (e_current.style.left = `${b}px`);
      (e_current.style.top = `${w}px`);

      e_current.style.setProperty(
        "--arrow-x",
        `${Math.max(24, Math.min(C - b, v.width - 24))}px`
      );

      (e_current.dataset.placement = y);
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
function kf(e, t) {
  Lt(m => m.posts[e]);

  Lt(m => m.generation);

  const [n, o] = L(0);
  const r = rs.read(t);
  const s = r?.state;
  const a = r?.received;
  const c = s && a !== undefined ? Fr(s, a) : Infinity;
  const l = !!t;

  U(() => l ? zE(e) : undefined, [e, l]);

  U(() => {
    if (!s || a === undefined) {
      return;
    }

    const m = () => o(g => g + 1);

    const _ = [...s.events, ...(s.claims ?? (s.claim ? [s.claim] : []))]
      .map(g => Date.parse(g.endsAt))
      .filter(g => g > c);

    const v = _.length
      ? setTimeout(
          m,
          Math.min(2147483647, Math.max(1, Math.min(..._) - Fr(s, a) + 10))
        )
      : undefined;

    window.addEventListener("focus", m);

    return () => {
      clearTimeout(v);
      window.removeEventListener("focus", m);
    };
  }, [s, a, n, c]);

  const u = (s?.claims ?? (s?.claim ? [s.claim] : [])).filter(
      m => Date.parse(m.endsAt) > c
    );

  const d = u.find(m => m.isOwner) ?? u[0] ?? null;

  const p = u.find(m => m.isOwner) ?? null;

  const f = !!s && !!t && s.revision !== t.revision;

  const h =
    s?.events.find(m => m.id === d?.eventId && Date.parse(m.endsAt) > c) ??
    s?.events.find(m => Date.parse(m.endsAt) > c);

  return {
    state: s,
    claim: d,
    ownClaim: p,
    claims: u,
    corrections: f || !u.length ? [] : s?.corrections ?? [],
    event: f ? undefined : h,
    locked: u.length > 0,
    staleText: f,
  };
}
const Nf = /^[\p{L}\p{M}]+(?:[-'’][\p{L}\p{M}]+)*$/u;
const Ul = /[\p{L}\p{M}\p{N}_'’-]/u;
const Uo = 10;
const Tf = new Intl.Segmenter("ru", { granularity: "grapheme" });
function FN(e) {
  return [...Tf.segment(e)]
    .slice(0, Uo)
    .map(t => t.segment)
    .join("");
}
function Fs(e, t, n) {
  return Nf.test(e.slice(t, n))
    ? Ul.test(Array.from(e.slice(0, t)).at(-1) ?? "") ||
      Ul.test(Array.from(e.slice(n))[0] ?? "")
      ? "Выделите слово целиком"
      : ""
    : "Выделите одно слово без пробелов";
}
function Bs(e, t, n = false) {
  return t
    ? Nf.test(t)
      ? [...Tf.segment(t)].length > Uo
        ? `Не больше ${Uo} символов`
        : !n && t.normalize("NFC") === e.normalize("NFC")
        ? "Введите другое слово"
        : ""
      : "Введите одно слово без пробелов"
    : "";
}
function If(e, t, n) {
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
function BN(e, t) {
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
        const p = If(s, d.start, d.end)?.getClientRects()[0];
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
const HN = "GMWl";
const VN = "bqRt";
const WN = "yDSF";
const jN = "gz7P";
const zN = "VtcN";
const qN = "PZel";
const GN = "KmJc";
const YN = "e0LA";
const KN = "Of7h";
const XN = "bELb";

const yt = {
  textLayer: HN,
  withCorrections: VN,
  overlay: WN,
  strike: jN,
  handwriting: zN,
  tools: qN,
  selected: GN,
  replacement: YN,
  penIcon: KN,
  signatureText: XN,
};

function QN({ root: e, corrections: t }) {
  const [n, o] = L([]);

  St(() => {
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
      const _ = new Map();
      for (const g of [...t].sort((E, y) => E.start - y.start)) {
        const E = If(e_current, g.start, g.end);
        if (!E) {
          continue;
        }
        const y = [...E.getClientRects()].filter(S => S.width > 0);
        if (!y.length) {
          continue;
        }
        const k = 14;
        const [C] = y;
        const b = Math.min(19, Math.max(16, m * 0.8));
        const w = Math.max(-k, C.top - p.top - k);

        const N = {
          id: g.id,
          text: g.replacement,
          left: C.left - p.left,
          top: w,
          font: b,
          strikes: y.map(S => ({
            left: S.left - p.left,
            top: S.top - p.top + S.height * 0.55,
            width: S.width
          })),
        };

        const T = Math.round((C.top - p.top) / m);
        _.set(T, [...(_.get(T) ?? []), N]);
      }
      const v = [];
      for (const g of _.values()) {
        let E = g[0].font;
        const y = () => g.map(
          b => {
            (h.font = `600 ${E}px EventCaveat`);
            return h.measureText(b.text).width + 4;
          }
        );
        let k = y();

        while (k.reduce((b, w) => b + w, 0) + 4 * (g.length - 1) > p.width &&
             E > 14) {
          (E -= 0.5);
          (k = y());
        }

        let C = 0;
        g.forEach((b, w) => {
          (b.font = E);

          (b.left = Math.max(
              C,
              Math.min(
                b.left + (b.strikes[0].width - k[w]) / 2,
                p.width - k[w]
              )
            ));

          (C = b.left + k[w] + 4);
        });
        for (let b = g.length - 1; b >= 0; b--) {
          g[b].left = Math.max(
            0,
            Math.min(
              g[b].left,
              (b === g.length - 1 ? p.width : g[b + 1].left - 4) - k[b]
            )
          );
        }
        v.push(...g);
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
    className: yt.overlay,
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
              className: yt.strike,
              style: { left: s.left, top: s.top, width: s.width },
              "aria-hidden": "true",
            },
            a
          )
          ),
          i("span", {
            className: yt.handwriting,
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
function ZN({ postId: e, claims: t, userId: n, onClose: o }) {
  const [r, s] = L(false);
  const [a, c] = L(null);
  const [l, u] = L("");

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
          await O.post(
            "/red-pens/cancel",
            { postId: e, claimId: d.id },
            { skipErrorToast: true }
          );

          await ss([e]);
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
            await O.post(
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

  return i(ka, {
    title: "Красная ручка",
    stackActions: true,
    onDismiss: o,
    actions: f,
    message: i(ve, {
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
function Rf({ claims: e, visible: t, postId: n }) {
  const [o, r] = L(false);
  const { openModal: s, closeModal: a } = Kt();

  const c = ge(l => l.profile?.id);

  return !e.length || !t
    ? null
    : i(ve, {
        children: [
          i("span", {
            className: Me.signature,
            "data-red-pen-signature": true,
            children: [
              i("button", {
                type: "button",
                className: Me.signatureAction,
                "aria-label": "О красной ручке",
                onClick: (l) => {
                  l.stopPropagation();
                  r(true);
                },
              }),
              i("span", {
                className: yt.penIcon,
                children: i("img", { src: ki, alt: "" }),
              }),
              i("span", {
                className: `${Me.signatureText} ${yt.signatureText}`,
                children: [
                  "Исправлено красной ручкой",
                  " ",
                  e.map((l, u) => i(
                    "span",
                    {
                      className: Me.actor,
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
                  className: Me.signatureMenu,
                  type: "button",
                  "aria-label": "Действия с правкой",
                  onClick: (l) => {
                    l.stopPropagation();
                    const u = s(
                      i(ZN, {
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
            i(Na, {
              productId: "red_pen",
              icon: i("img", { src: ki, alt: "" }),
              postId: n,
              eventId: e[0].eventId,
              onClose: () => r(false),
            }),
        ],
      });
}
function JN(e, t) {
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
const Fl = new Intl.Segmenter("ru", { granularity: "grapheme" });
const Hs = 3;
function Ta({
  postId: e,
  authorId: t,
  text: n,
  spans: o,
  initial: r,
  initialRedPen: s,
  selectable: a = true,
  signature: c = true,
}) {
  const l = x(null);
  const u = x(null);
  const d = x(false);
  const p = Sf(e, r);
  const f = kf(e, s);

  const h = Te(() => JN(p.marks, f.corrections), [p.marks, f.corrections]);

  const m = ge(M => M.profile?.id);

  const _ = Pt(M => M.inventory);

  const v = Lt(M => M.inventory);

  const g = _?.events.find(M => M.id === p.event?.id)?.balance;

  const E = v?.events.find(M => M.id === f.event?.id)?.balance;

  const y = !!t && t === m;
  const k = !!p.event && !y && (g ?? 0) > 0;
  const C = !!f.event && t !== m && ((E ?? 0) > 0 || !!f.ownClaim);
  const b = a && !!m && (k || C);
  const [w, N] = L(null);
  const [T, S] = L("pen");
  const [P, R] = L("");
  const [A, B] = L("");
  const [q, ne] = L(false);
  const [Q, he] = L(null);
  const [G, J] = L("");
  const [ae, W] = L("");
  const we = !!w && w.actorId === m && (b || q || !!Q);
  const oe = Q?.tool ?? (T === "pen" && C ? "pen" : k ? "corrector" : "pen");
  UN(u, we ? w?.anchor : undefined);

  St(() => {
    let M = false;
    if (
      !w ||
      !P ||
      !l.current ||
      Fs(n, w.start, w.end) ||
      Bs(
        w.text,
        P,
        f.corrections.some(Ce => Ce.start === w.start && Ce.end === w.end)
      )
    ) {
      W("");
      return;
    }
    const be = () => {
      if (M || !l.current) {
        return;
      }
      const Ce = BN(l.current, [
        ...h.corrections.filter(
          Oe => Oe.start !== w.start || Oe.end !== w.end
        ),
        { start: w.start, end: w.end, replacement: P },
      ]);
      W(Ce ? "" : "Правки не помещаются в строке. Выберите слово короче");
    };
    be();
    document.fonts.load("600 14px EventCaveat").then(be);
    document.fonts.addEventListener("loadingdone", be);

    return () => {
      (M = true);
      document.fonts.removeEventListener("loadingdone", be);
    };
  }, [w, P, n, f.corrections, h.corrections]);

  U(() => {
    if (!b) {
      return;
    }
    let M;

    const be = () => {
      if (d.current || Q || u.current?.contains(document.activeElement)) {
        return;
      }
      const Oe = window.getSelection();
      const l_current = l.current;
      if (!l_current || !Oe?.rangeCount || Oe.isCollapsed) {
        N(null);
        return;
      }
      const je = Oe.getRangeAt(0);
      if (
        !l_current.contains(je.startContainer) ||
        !l_current.contains(je.endContainer)
      ) {
        N(null);
        return;
      }
      const tt = je.cloneRange();
      tt.selectNodeContents(l_current);
      tt.setEnd(je.startContainer, je.startOffset);
      const mt = tt.toString().length;
      const it = je.toString();
      const dn = mt + it.length;
      if (n.slice(mt, dn) !== it) {
        return;
      }
      const Ut = je.getBoundingClientRect();

      if (Ut.width) {
        if (w?.start !== mt || w.end !== dn || w.actorId !== m) {
          N({
                start: mt,
                end: dn,
                text: it,
                count: [...Fl.segment(it)].filter(
                  $n => !/^\s+$/u.test($n.segment)
                ).length,
                anchor: {
                  left: Ut.left,
                  right: Ut.right,
                  top: Ut.top,
                  bottom: Ut.bottom,
                },
                actorId: m,
                operationId: crypto.randomUUID(),
                penRevision: f.state?.revision,
                paintRevision: p.state?.revision,
              });

          S(C ? "pen" : "corrector");
          R("");
          B("");
          J("");
        }
      }
    };

    const Ce = () => {
      clearTimeout(M);
      (M = setTimeout(be, 350));
    };

    document.addEventListener("selectionchange", Ce);

    return () => {
      clearTimeout(M);
      document.removeEventListener("selectionchange", Ce);
    };
  }, [b, m, n, f.state, p.state, C, Q, w]);

  U(() => {
    if (!w) {
      return;
    }

    const M = () => {
      if (!d.current && !Q) {
        N(null);
      }
    };

    const be = (Ne) => {
      if (!u.current?.contains(Ne.target) &&
        !l.current?.contains(Ne.target)) {
        M();
      }
    };

    const Ce = (Ne) => {
      if (Ne.key === "Escape") {
        M();
        l.current?.focus();
      }
    };

    const Oe = (Ne) => {
      if (!u.current?.contains(Ne.target) &&
        !u.current?.contains(document.activeElement)) {
        M();
      }
    };

    document.addEventListener("pointerdown", be);
    document.addEventListener("keydown", Ce);
    document.addEventListener("scroll", Oe, true);

    return () => {
      document.removeEventListener("pointerdown", be);
      document.removeEventListener("keydown", Ce);
      document.removeEventListener("scroll", Oe, true);
    };
  }, [w, Q]);

  const $ =
      !!w &&
      p.marks.some(
        M => M.start < w.end &&
        M.end > w.start &&
        (M.start !== w.start || M.end !== w.end)
      );

  const V =
    !!w &&
    f.corrections.some(
      M => M.start < w.end &&
      M.end > w.start &&
      (M.start !== w.start || M.end !== w.end)
    );

  const K =
    !!w &&
    p.marks.some(
      M => M.actor.id === m && M.start === w.start && M.end === w.end
    );

  const de =
    !!w &&
    h.corrections.some(
      M => M.start === w.start && M.end === w.end && M.replacement === P
    );

  const X =
    !!w &&
    o?.some(
      M => ["link", "mention", "hashtag", "spoiler"].includes(M.type) &&
      M.offset < w.end &&
      M.offset + M.length > w.start
    );

  const Z = p.event
    ? p.event.applicationsEnabled
      ? w && (w.count < 1 || w.count > 10)
        ? "Выберите от 1 до 10 символов без учёта пробелов"
        : p.event.used >= 3
        ? "На этом посте вы уже использовали 3 корректора"
        : K
        ? "Вы уже закрасили этот фрагмент"
        : $
        ? "Выделите весь закрашенный фрагмент"
        : V
        ? "Выделите всё исправленное слово"
        : g === 0
        ? "У вас пока нет корректоров"
        : ""
      : "Применение временно недоступно"
    : "Ивент завершён";

  const me = f.event
    ? f.event.applicationsEnabled
      ? f.ownClaim && f.ownClaim.used >= Hs
        ? `Вы уже исправили ${Hs} слов`
        : w && Fs(n, w.start, w.end)
        ? Fs(n, w.start, w.end)
        : X
        ? "Ссылки, упоминания и скрытый текст исправлять нельзя"
        : $
        ? "Выделите весь закрашенный фрагмент"
        : V
        ? "Выделите всё исправленное слово"
        : de
        ? "Это слово уже так исправлено"
        : w
        ? Bs(
            w.text,
            P,
            f.corrections.some(M => M.start === w.start && M.end === w.end)
          )
        : ""
      : "Исправления временно недоступны"
    : "Ивент завершён";

  const Ie = oe === "pen" ? me || ae : Z;

  const Se = w
    ? [...Fl.segment(w.text)]
        .map(M => p.marks.some(
    be => be.start < w.start + M.index + M.segment.length &&
    be.end > w.start + M.index
  ) && !/^\s+$/u.test(M.segment)
    ? "■"
    : M.segment
        )
        .join("")
    : "";

  const ue = () => Promise.allSettled([
    ...(r ? [as([e]), wa()] : []),
    ...(s ? [ss([e]), ya()] : []),
  ]);

  async function ht() {
    if (!w || d.current) {
      return;
    }
    const M = oe === "pen" ? f.event : p.event;
    const be = oe === "pen" ? w.penRevision : w.paintRevision;
    if (!Q && (!M || !be || Ie || (oe === "pen" && !P))) {
      return;
    }
    const Ce = Q ?? {
      tool: oe,
      body: {
        eventId: M.id,
        postId: e,
        revision: be,
        start: w.start,
        end: w.end,
        operationId: w.operationId,
        ...(oe === "pen" ? { replacement: P } : {}),
      },
    };
    (d.current = true);
    ne(true);
    B("");
    try {
      await O.post(
        Ce.tool === "pen" ? "/red-pens/apply" : "/correctors/apply",
        Ce.body,
        { skipErrorToast: true }
      );

      he(null);
      J(Ce.tool === "pen" ? "Слово исправлено" : "Текст закрашен");
      N(null);
      window.getSelection()?.removeAllRanges();
      await ue();
    } catch (Oe) {
      const Ne = Oe;
      he(!Ne.status || Ne.status >= 500 ? Ce : null);
      B(Ne.message || "Не удалось получить ответ. Повторите запрос");
      await ue();
    } finally {
      (d.current = false);
      ne(false);
    }
  }
  const Ct = () => {
    if (!d.current) {
      N(null);
      B("");
      he(null);
      window.getSelection()?.removeAllRanges();
    }
  };
  return i(ve, {
    children: [
      i("span", {
        className: `${yt.textLayer} ${
          h.corrections.length > 0 ? yt.withCorrections : ""
        }`,
        "data-post-tool-text": true,
        children: [
          i("span", {
            ref: l,
            "data-corrector-text": e,
            "data-corrector-applied": G === "Текст закрашен" || undefined,
            tabIndex: b ? 0 : undefined,
            onCopy: h.marks.length
              ? (M) => {
              const be = window.getSelection();
              if (!be?.rangeCount || !l.current) {
                return;
              }
              const Ce = be.getRangeAt(0);
              if (
                !l.current.contains(Ce.startContainer) ||
                !l.current.contains(Ce.endContainer)
              ) {
                M.preventDefault();
                return;
              }
              const Oe = Ce.cloneRange();
              Oe.selectNodeContents(l.current);
              Oe.setEnd(Ce.startContainer, Ce.startOffset);
              let Ne = Oe.toString().length;
              const je = Array.from(be.toString())
                .map((tt) => {
                const mt = Ne;
                (Ne += tt.length);

                return h.marks.some(it => mt >= it.start && mt < it.end) &&
                !/\s/u.test(tt)
                  ? "■"
                  : tt;
              })
                .join("");
              M.preventDefault();
              M.clipboardData?.setData("text/plain", je);
            }
              : undefined,
            children:
              p.staleText || f.staleText
                ? i("span", { children: "Пост изменился. Обновите страницу" })
                : i(Sa, { text: n, spans: o, correctorMarks: h.marks }),
          }),
          h.corrections.length > 0 &&
            i(QN, { root: l, corrections: h.corrections }),
        ],
      }),
      c &&
        i(ve, {
          children: [
            i(Cf, { marks: p.marks, postId: e }),
            i(Rf, {
              claims: f.claims,
              visible: f.corrections.length > 0,
              postId: e,
            }),
          ],
        }),
      G && i("span", { className: Me.srOnly, role: "status", children: G }),
      we &&
        w &&
        $(
          i("div", {
            ref: u,
            role: "dialog",
            "aria-label": oe === "pen" ? "Красная ручка" : "Закрасить текст",
            "data-corrector-panel": true,
            "data-post-tool-panel": true,
            className: Me.panel,
            onClick: M => M.stopPropagation(),
            children: i("div", {
              className: Me.panelBody,
              children: [
                i("div", {
                  className: Me.heading,
                  children: [
                    i("strong", {
                      children: oe === "pen" ? "Красная ручка" : "Корректор",
                    }),
                    i(Fe, {
                      variant: "secondary",
                      size: "sm",
                      iconOnly: true,
                      "aria-label": "Закрыть",
                      disabled: q,
                      onClick: Ct,
                      children: i(ft, { size: 18 }),
                    }),
                  ],
                }),
                i("p", {
                  className: Me.toolHint,
                  children:
                    oe === "pen"
                      ? `Одно слово до ${Uo} символов · до ${Hs} правок на пост`
                      : "До 10 символов за одно применение",
                }),
                C &&
                  k &&
                  i("div", {
                    className: yt.tools,
                    "aria-label": "Предметы",
                    children: [
                      i(Fe, {
                        size: "sm",
                        variant: "secondary",
                        className: oe === "pen" ? yt.selected : "",
                        "aria-pressed": oe === "pen",
                        disabled: q || !!Q,
                        onClick: () => {
                          S("pen");
                          B("");
                        },
                        children: "Ручка",
                      }),
                      i(Fe, {
                        size: "sm",
                        variant: "secondary",
                        className: oe === "corrector" ? yt.selected : "",
                        "aria-pressed": oe === "corrector",
                        disabled: q || !!Q,
                        onClick: () => {
                          S("corrector");
                          B("");
                        },
                        children: "Корректор",
                      }),
                    ],
                  }),
                i("div", {
                  className: Me.preview,
                  "data-corrector-preview": true,
                  children: [
                    i("span", { children: Se }),
                    oe === "corrector" &&
                      i("b", {
                        className: w.count > 10 ? Me.invalid : "",
                        children: [w.count, "/10"],
                      }),
                  ],
                }),
                oe === "pen" &&
                  i("label", {
                    className: yt.replacement,
                    children: [
                      "Новое слово",
                      i("input", {
                        "aria-label": "Новое слово",
                        placeholder: `До ${Uo} символов`,
                        value: P,
                        disabled:
                          q ||
                          !!Q ||
                          (!!me &&
                            me !==
                              Bs(
                                w.text,
                                P,
                                f.corrections.some(
                                  M => M.start === w.start && M.end === w.end
                                )
                              )),
                        autoComplete: "off",
                        onInput: (M) => {
                          R(FN(M.currentTarget.value));
                          B("");
                        },
                        onKeyDown: (M) => {
                          if (M.key === "Enter" &&
                            !M.isComposing) {
                            M.preventDefault();
                            ht();
                          }
                        },
                      }),
                    ],
                  }),
                (Ie || A) &&
                  i("p", {
                    className: Me.error,
                    role: "status",
                    children: A || Ie,
                  }),
                i(Fe, {
                  size: "md",
                  fullWidth: true,
                  className: Me.actionButton,
                  disabled:
                    q || (!Q && (!!Ie || (oe === "pen" ? !P : g === undefined))),
                  onClick: ht,
                  children: q
                    ? "Сохраняем…"
                    : Q
                    ? "Проверить и повторить"
                    : oe === "pen"
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

const eT = e => e === "window" ? "layer_window" : e === "stain" ? "splash" : e;

const tT = "alice-profile-changed";
const nT = "alice-sticker-placed";
function XL(e) {
  window.dispatchEvent(new CustomEvent(tT, { detail: e }));
}
function QL(e) {
  window.dispatchEvent(new CustomEvent(nT, { detail: e }));
}
const $i = "alice-balloon-thrown";
function ZL(e) {
  window.dispatchEvent(new CustomEvent($i, { detail: e }));
}
function oT(e, t, n) {
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

const rT = e => ({
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

const Af = {
  profileRaw: e => O.get(`/v1/aliceai/profiles/${encodeURIComponent(e)}`, {
    skipErrorToast: true,
  }),
  profile: async e => rT(await Af.profileRaw(e)),
  throwBalloon: (e, t, n, o) => O.post(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/balloons`,
    { inventoryItemId: t, ...n },
    { headers: { "Idempotency-Key": o }, skipErrorToast: true }
  ),
  throwCushion: (e, t, n, o) => O.post(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/cushion`,
    { inventoryItemId: t, ...o },
    { headers: { "Idempotency-Key": n }, skipErrorToast: true }
  ),
  claimCushion: e => O.post(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/cushion/claim`,
    {},
    { skipErrorToast: true }
  ),
  setCurtains: (e, t) => O.put(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/curtains`,
    { closed: t },
    { skipErrorToast: true }
  ),
  donateCurtains: (e, t, n) => O.post(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/curtains/donations`,
    { amount: t },
    { headers: { "Idempotency-Key": n }, skipErrorToast: true }
  ),
  recyclePost: (e, t) => O.post(
    `/v1/aliceai/waste-paper/posts/${encodeURIComponent(e)}`,
    {},
    { headers: { "Idempotency-Key": t }, skipErrorToast: true }
  ),
  balance: () => O.get("/v1/aliceai/balance", { skipErrorToast: true }).then(
    e => e.balance
  ),
  nicknames: () => O.get("/v1/aliceai/nicknames", { skipErrorToast: true }),
  setActiveNickname: e => O.put(
    "/v1/aliceai/nicknames/active",
    { form: e },
    { skipErrorToast: true }
  ),
  inventory: async () => ({
    items: (
      await O.get("/v1/aliceai/inventory", { skipErrorToast: true })
    ).items.map(t => ({
      ...t,
      kind: eT(t.kind)
    }))
  }),
  profileAvatar: () => O.get("/profile-avatar/", { skipErrorToast: true }).then(e => e.data),
  removeProfileAvatar: () => O.delete("/profile-avatar/", { skipErrorToast: true }).then(e => e.data),
  place: (e, t, n, o, r) => O.post(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/placements`,
    { inventoryItemId: t, ...n, ...(r ? { anchor: r } : {}) },
    { headers: { "Idempotency-Key": o } }
  ),
  breakWindow: (e, t, n) => O.post(
    `/v1/aliceai/profiles/${encodeURIComponent(e)}/window/break`,
    { inventoryItemId: t },
    { headers: { "Idempotency-Key": n } }
  ),
  erase: (e, t, n) => O.post(
    `/v1/aliceai/profiles/${encodeURIComponent(
      e
    )}/placements/${encodeURIComponent(t)}/erase`,
    {},
    { headers: { "Idempotency-Key": n } }
  ),
};

const sT = "AZUe";
const iT = "iuiE";
const aT = "pMAe";
const Vs = { layer: sT, stain: iT, arriving: aT };
function cT({ placements: e, anchorKind: t, anchorId: n, className: o = "" }) {
  const [r] = L(Date.now);
  const [s, a] = L([]);
  U(() => {
    const l = [];

    const u = (d) => {
      const d_detail = d.detail;
      const [f] = oT([d_detail], t, n);

      if (f) {
        a(h => h.some(m => m.id === f.id) ? h : [...h, f]);

        l.push(
          window.setTimeout(
            () => a(h => h.filter(m => m.id !== f.id)),
            Math.max(0, Date.parse(d_detail.expiresAt) - Date.now())
          )
        );
      }
    };

    window.addEventListener($i, u);

    return () => {
      window.removeEventListener($i, u);
      l.forEach(window.clearTimeout);
    };
  }, [t, n]);
  const c = [...e, ...s.filter(l => !e.some(u => u.id === l.id))];
  return c.length === 0
    ? null
    : i("div", {
        className: `${Vs.layer} ${o}`,
        "aria-hidden": "true",
        children: c.map(l => i(
          "img",
          {
            "data-alice-water-placement-id": l.id,
            className: `${Vs.stain} ${
              r - Date.parse(l.createdAt) < 3000/* 3e3 */ ? Vs.arriving : ""
            }`,
            src: $w(l.asset),
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
function lT() {
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
function uT() {
  return i("svg", {
    viewBox: "0 0 40 40",
    "aria-hidden": "true",
    focusable: "false",
    children: i("path", {
      d: "M20 5.5c-3.7 0-6.7 4.3-11.5 12.5C3.8 26 3.5 30.2 7 33c3.4 2.8 22.6 2.8 26 0 3.5-2.8 3.2-7-1.5-15C26.7 9.8 23.7 5.5 20 5.5Z",
    }),
  });
}
function Lf({ className: e, disabled: t = false }) {
  const [n, o] = L(false);
  return i(ve, {
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
        children: [i(uT, {}), "Тетрадка"],
      }),
      n &&
        i(Na, {
          productId: "post_notebook",
          icon: i(lT, {}),
          onClose: () => o(false),
        }),
    ],
  });
}

const dT = {
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

const hr = new Map();
const Ws = new Set();
async function fT(e, t) {
  if (Ws.has(e)) {
    return;
  }
  const n = hr.get(e) ?? crypto.randomUUID();
  hr.set(e, n);
  Ws.add(e);
  try {
    await Af.recyclePost(e, n);
    hr.delete(e);
    t(e);
    vt.success("Пост сдан и сразу учтён в сборе макулатуры");
  } catch (o) {
    const r = $e(o) ? dT[o.code] : undefined;

    if (r) {
      hr.delete(e);
    }

    vt.error(r ?? "Не получилось сдать пост. Попробуй ещё раз");
  } finally {
    Ws.delete(e);
  }
}
const Pf = 0.5;
const pT = 250;
const hT = 1000/* 1e3 */;
const mT = 50;
const gT = [0, Pf, 1];
const Cn = new Set();
const Ir = new WeakMap();
const bn = new Map();
const En = new Map();
const Vr = new Set();
const mr = new Set();
let js = null;
let Yn = null;
function _T(e) {
  if (Vr.size !== 0) {
    mr.add(e);

    js === null &&
      (js = setTimeout(() => {
      (js = null);

      if (mr.size === 0) {
        return;
      }

      const t = Array.from(mr);
      mr.clear();
      const n = t.length > 20 ? t.slice(0, 20) : t;
      for (const o of Vr) {
        o(n);
      }
    }, mT));
  }
}
function vT() {
  return (Yn || (typeof IntersectionObserver === "undefined" ? null : ((Yn = new IntersectionObserver(
        (e) => {
          for (const t of e) {
            const n = Ir.get(t.target);
            if (!n || n.length === 0) {
              continue;
            }
            const o = t.intersectionRatio >= Pf;
            for (const r of n) {
              if (o) {
                const s = En.get(r);
                if (s !== undefined) {
                  clearTimeout(s);
                  En.delete(r);
                  continue;
                }
                if (Cn.has(r) || bn.has(r)) {
                  continue;
                }
                const a = setTimeout(() => {
                  bn.delete(r);
                  Cn.add(r);
                  _T(r);
                }, pT);
                bn.set(r, a);
              } else {
                const s = bn.get(r);

                if (s !== undefined) {
                  clearTimeout(s);
                  bn.delete(r);
                }

                if (!Cn.has(r) || En.has(r)) {
                  continue;
                }

                const a = setTimeout(() => {
                  En.delete(r);
                  Cn.delete(r);
                }, hT);
                En.set(r, a);
              }
            }
          }
        },
        { threshold: gT }
      )), Yn)));
}

const Wr = {
    observe(e, t) {
      const n = vT();
      if (!n) {
        return;
      }
      const o = Array.isArray(t) ? t.filter(Boolean) : [t];

      if (o.length !== 0) {
        Ir.set(e, o);
        n.observe(e);
      }
    },
    unobserve(e) {
      if (!Yn) {
        return;
      }
      const t = Ir.get(e);
      Yn.unobserve(e);
      Ir.delete(e);

      if (!!t) {
        for (const n of t) {
          const o = bn.get(n);

          if (o !== undefined) {
            clearTimeout(o);
            bn.delete(n);
          }

          const r = En.get(n);

          if (r !== undefined) {
            clearTimeout(r);
            En.delete(n);
          }

          Cn.delete(n);
        }
      }
    },
    getSnapshot() {
      return Array.from(Cn);
    },
    size() {
      return Cn.size;
    },
    onAppear(e) {
      Vr.add(e);

      return () => {
        Vr.delete(e);
      };
    },
  };

const yT = "UKcT";
const wT = "KvdL";
const bT = "cewR";
const zs = { hint: yT, multiline: wT, arrow: bT };
function Lo({ text: e, children: t, className: n, multiline: o }) {
  const r = x(null);
  const [s, a] = L(null);

  const c = I(() => {
    if (!r.current) {
      return;
    }
    const d = r.current.getBoundingClientRect();
    a({ x: d.left + d.width / 2, y: d.top });
  }, []);

  const l = I(() => {
    a(null);
  }, []);

  const u = I(
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

  U(() => {
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
        $(
          i("div", {
            className: `${zs.hint} ${o ? zs.multiline : ""}`,
            style: { left: `${s.x}px`, top: `${s.y}px` },
            children: [e, i("span", { className: zs.arrow })],
          }),
          document.body
        ),
    ],
  });
}
const ET = "Ng6D";
const ST = "VETZ";
const CT = "ryb2";
const kT = "jSsc";
const NT = "tE0q";
const TT = "FMQG";
const IT = "y0Zb";
const RT = "S3zm";
const AT = "NoH9";
const LT = "mZxL";

const at = {
  header: ET,
  headerMain: ST,
  headerAccessory: CT,
  hasAccessory: kT,
  authorInfo: NT,
  moreDropdown: TT,
  pinnedBadge: IT,
  authorLink: RT,
  time: AT,
  edited: LT,
};

function PT({ size: e = 16 }) {
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
const OT = 2160 * 60 * 60 * 1000/* 1e3 */;

const xT = e => Date.now() - new Date(e).getTime() >= OT;

function $T({
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
  onWastePaper: m,
}) {
  const _ = qd(o);
  const v = va(n.id);

  const g = ge(N => N.profile?.id);

  const E = n.id === g;
  const y = 2880 * 60 * 1000/* 1e3 */;
  const k = E && !t && Date.now() - new Date(o).getTime() < y;
  const C = Ko().status === "allowed";
  const b = !!m && E && C && xT(o);

  const w = Te(() => {
    const N = [];

    N.push({
      id: "copy-link",
      label: "Скопировать ссылку",
      icon: i(Gd, { size: 16 }),
      onClick: () => h?.(s),
    });

    if (k) {
      N.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Xd, { size: 16 }),
        onClick: () => d?.(s),
      });
    }

    if (c) {
      N.push({
        id: "pin",
        label: l ? "Открепить" : "Закрепить",
        icon: i(ll, { size: 16 }),
        onClick: () => f?.(s),
      });
    }

    if (b) {
      N.push({
        id: "waste-paper",
        label: "Сдать в макулатуру",
        icon: i(PT, { size: 16 }),
        onClick: () => m?.(s),
      });
    }

    if ((E || c)) {
      N.push({
        id: "delete",
        label: "Удалить",
        icon: i(of, { size: 16 }),
        danger: true,
        onClick: () => p?.(s),
      });
    }

    if (!E) {
      N.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(Zd, { size: 16 }),
        danger: true,
        onClick: () => u?.(s),
      });
    }

    return N;
  }, [E, k, b, c, l, s, d, p, f, u, h, m]);

  return i("header", {
    className: at.header,
    children: [
      l &&
        i("div", {
          className: at.pinnedBadge,
          children: [
            i(ll, { size: 14 }),
            i("span", { children: "Закреплённый пост" }),
          ],
        }),
      i("div", {
        className: `${at.headerMain} ${e ? at.hasAccessory : ""}`,
        children: [
          a &&
            i("a", {
              href: `/@${n.username}`,
              children: i(pt, {
                src: n.avatar,
                alt: n.displayName,
                size: "sm",
                online: n.online,
              }),
            }),
          i("div", {
            className: at.authorInfo,
            children: [
              i("a", {
                href: `/@${n.username}`,
                className: at.authorLink,
                children: i(Xo, {
                  userId: n.id,
                  name: n.displayName,
                  verified: n.isVerified,
                  hasNuksta: n.hasNuksta,
                  pin: n.pin,
                  size: "sm",
                  trailing: v
                    ? i("time", {
                        dateTime: o,
                        className: at.time,
                        "data-post-time": true,
                        children: [
                          _,
                          r &&
                            i(Lo, {
                              text: new Date(r).toLocaleString("ru-RU"),
                              children: i("span", {
                                className: at.edited,
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
                  className: at.time,
                  "data-post-time": true,
                  children: [
                    _,
                    r &&
                      i(Lo, {
                        text: new Date(r).toLocaleString("ru-RU"),
                        children: i("span", {
                          className: at.edited,
                          children: " (ред.)",
                        }),
                      }),
                  ],
                }),
            ],
          }),
          e && i("div", { className: at.headerAccessory, children: e }),
          i(Ef, {
            trigger: i(ef, { size: 18 }),
            items: w,
            position: "bottom-right",
            className: at.moreDropdown,
          }),
        ],
      }),
    ],
  });
}
const MT = "RAMt";
const DT = "cVrs";
const UT = "PROg";
const FT = "s3gl";
const BT = "ybeJ";
const HT = "UedJ";
const VT = "j90U";
const WT = "U6VV";
const jT = "WMmo";
const zT = "iXF9";
const qT = "KeLy";
const GT = "zIse";
const YT = "uFxW";
const KT = "Dzh3";
const XT = "uyJE";
const QT = "ck7t";
const ZT = "onnu";
const JT = "OFly";

const xe = {
  actions: MT,
  compact: DT,
  action: UT,
  views: FT,
  flush: BT,
  actionsLeft: HT,
  disabled: VT,
  liked: WT,
  unliked: jT,
  reposted: zT,
  noAnimation: qT,
  reactionWrapper: GT,
  actionsRight: YT,
  captured: KT,
  capturedEmoji: XT,
  capturedText: QT,
  capturedMobile: ZT,
  capturedSolo: JT,
};

function Of({
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
  infiniteLike: m = false,
}) {
  const _ = x(false);
  const v = p ? 17 : 20;
  return i("footer", {
    className: `${xe.actions} ${p ? xe.compact : ""} ${h ? xe.flush : ""}`,
    children: [
      i("div", {
        className: xe.actionsLeft,
        children: [
          i("div", {
            className: xe.reactionWrapper,
            onClick: g => g.stopPropagation(),
            children: i("button", {
              className: `${xe.action} ${e ? xe.liked : ""} ${
                _.current && !e ? xe.unliked : ""
              } ${!_.current && e ? xe.noAnimation : ""}`,
              onClick: (g) => {
                g.stopPropagation();
                (_.current = true);
                c();
              },
              "aria-label": "Нравится",
              children: [
                i(
                  ca,
                  { filled: e, size: v },
                  m ? `liked-${n}` : e ? "liked" : "not-liked"
                ),
                i(ko, { value: n }),
              ],
            }),
          }),
          i("button", {
            className: xe.action,
            onClick: (g) => {
              g.stopPropagation();
              u();
            },
            "aria-label": "Комментировать",
            children: [i(Kd, { size: v }), i(ko, { value: r })],
          }),
          i("button", {
            className: `${xe.action} ${t ? xe.reposted : ""} ${
              d ? xe.disabled : ""
            }`,
            onClick: (g) => {
              g.stopPropagation();

              if (!d) {
                l();
              }
            },
            disabled: d,
            "aria-label": "Репост",
            children: [i(fa, { size: v }), i(ko, { value: o })],
          }),
        ],
      }),
      i("div", {
        className: xe.actionsRight,
        children: [
          a &&
            (f
              ? i(Lo, {
                  text: "Эмоджи, которое чаще всего лайкало этот пост",
                  className: xe.capturedSolo,
                  children: i("span", {
                    className: xe.capturedEmoji,
                    children: a,
                  }),
                })
              : i(ve, {
                  children: [
                    i(Lo, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: xe.captured,
                      children: [
                        i("span", { className: xe.capturedEmoji, children: a }),
                        i("span", {
                          className: xe.capturedText,
                          children: "Пост захвачен",
                        }),
                      ],
                    }),
                    i(Lo, {
                      text: "Эмоджи, которое чаще всего лайкало этот пост",
                      className: xe.capturedMobile,
                      children: i("span", { children: a }),
                    }),
                  ],
                })),
          i("span", {
            className: xe.views,
            children: [i(f0, { size: v }), i(ko, { value: s })],
          }),
        ],
      }),
    ],
  });
}
const eI = ce(() => se(() => import("./index-BnMYV2yp.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function xf(e, t) {
  const { openModal: n, closeModal: o, onDelete: r } = t;
  const s = Yt();

  const a = ie(S => S.deletePost);

  const c = ie(S => S.updatePostLike);

  const l = ie(S => S.beginLikeMutation);

  const u = ie(S => S.endLikeMutation);

  const d = ie(S => S.updatePollVote);

  const p = ie(S => S.updatePollData);

  const f = ba(e);
  const h = f.myReaction !== null;
  const f_likesTotal = f.likesTotal;

  const _ = Te(() => Mf(e.attachments), [e.attachments]);

  const v = I(async () => {
    const S = h;
    const P = S ? -1 : 1;
    c(e.id, S ? null : "love", P);
    l(e.id);
    try {
      const R = S ? await Ue.unlikePost(e.id) : await Ue.likePost(e.id);
      u(e.id, R?.likesCount);
    } catch (R) {
      c(e.id, S ? "love" : null, -P);
      u(e.id);
      console.error("Failed to toggle like:", R);
    }
  }, [e.id, h, c, l, u]);

  const g = I(() => {
    if (!h) {
      v();
    }
  }, [h, v]);

  const E = I(
    (S) => {
      const P = e.author.username ?? e.author.id;
      const R = `${window.location.origin}/@${P}/post/${S}`;
      navigator.clipboard.writeText(R);
      vt.success("Ссылка скопирована");
    },
    [e.author.username, e.author.id]
  );

  const y = I(
    (S) => {
      n(i(eI, { targetType: "post", targetId: S, onClose: o }));
    },
    [n, o]
  );

  const k = I(
    (S) => {
      n(
        i(n2, {
          postId: e.id,
          initialText: e.text ?? "",
          initialSpans: e.spans ?? [],
        })
      );
    },
    [n, e.id, e.text, e.spans]
  );

  const C = I(
    async (S) => {
      if (confirm("Вы уверены, что хотите удалить этот пост?")) {
        try {
          await a(S);
          r?.(S);
        } catch (P) {
          console.error("Failed to delete post:", P);
        }
      }
    },
    [a, r]
  );

  const b = I(() => {
    if (s) {
      n(i(BR, { postId: e.id, onClose: o }));
    } else {
      const S = e.author.username ?? e.author.id;
      Ye(`/@${S}/post/${e.id}`);
    }
  }, [e.author.username, e.author.id, e.id, s, n, o]);

  const w = I(() => {
    n(i(f2, { post: e, onClose: o }));
  }, [n, o, e]);

  const N = I(
    async (S) => {
      const P = _?.myVote ?? null;
      d(e.id, S, P);
      try {
        const R = await Ue.votePoll(e.id, [S]);
        if (R) {
          p(e.id, R);
          return R;
        }
      } catch (R) {
        console.error("[Poll] Failed to vote:", R);

        if (P) {
          d(e.id, P, S);
        }
      }
      return null;
    },
    [e.id, _?.myVote, d, p]
  );

  const T = I(
    async (S) => {
      try {
        const P = await Ue.votePoll(e.id, S);
        if (P) {
          p(e.id, P);
          return P;
        }
      } catch (P) {
        console.error("[Poll] Failed to vote multiple:", P);
      }
      return null;
    },
    [e.id, p]
  );

  return {
    liked: h,
    totalLikes: f_likesTotal,
    handleLike: v,
    handleDoubleTap: g,
    handleComment: b,
    handleRepost: w,
    handleReport: y,
    handleEdit: k,
    handleDelete: C,
    handleCopyLink: E,
    handlePollVote: N,
    handlePollVoteMultiple: T,
  };
}
function $f(e) {
  const t = I(() => {
      ie.getState().updatePostLike(e, "love", 1);
    }, [e]);

  const n = I(() => {
    const { postStatsCache: r, applyStatsUpdates: s } = ie.getState();
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

  const o = I(() => {
    ie.getState().updatePostReposted(e, true, 1);
  }, [e]);

  return { handleLike: t, handleComment: n, handleRepost: o };
}
const tI = "OAX3";
const nI = "LwHs";
const oI = "UIHj";
const rI = "lCHz";
const sI = "LVWE";
const iI = "wChw";
const aI = "LMAu";
const cI = "qJiW";
const lI = "HSJq";
const uI = "xszU";
const dI = "gWD9";
const fI = "KaYd";
const pI = "nVsF";
const hI = "aZ7O";
const mI = "Iwff";
const gI = "R49S";
const _I = "WSKG";
const vI = "nlwp";
const yI = "WGcq";
const wI = "Vgyz";

const Ee = {
  post: tI,
  notebookPost: nI,
  originalNotebook: oI,
  text: rI,
  notebookGrid: sI,
  notebookRuled: iI,
  notebookLabel: aI,
  postInner: cI,
  isFeed: lI,
  postBody: uI,
  avatarLink: dI,
  postContent: fI,
  textWrapper: pI,
  collapsed: hI,
  expandButton: mI,
  originalPost: gI,
  originalPostText: _I,
  originalPostHeader: vI,
  originalPostTime: yI,
  originalPostMedia: wI,
};

function bI(e) {
  if (!e) {
    return "";
  }
  const t = new Date(e);
  return isNaN(t.getTime())
    ? ""
    : t.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
}
function EI({ attachments: e, postVs: t, source: n }) {
  const o = Te(() => jr(e), [e]);
  return o.length === 0
    ? null
    : i("div", {
        className: Ee.originalPostMedia,
        children: i(Ca, { media: o, postVs: t, source: n }),
      });
}
function SI({ originalPost: e, source: t, showcase: n = false }) {
  const o = bI(e.createdAt);
  const { openModal: r, closeModal: s } = Kt();

  const {
    liked: a,
    totalLikes: c,
    handleLike: l,
    handleComment: u,
    handleRepost: d,
  } = xf(e, { openModal: r, closeModal: s });

  const { handleLike: p, handleComment: f, handleRepost: h } = $f(e.id);
  const m = ba(e);

  const _ = I(
    (v) => {
      v.stopPropagation();

      if (n) {
        return;
      }

      const g = e.author.username ?? e.author.id;
      Ye(`/@${g}/post/${e.id}`);
    },
    [e.author.username, e.author.id, e.id, n]
  );

  return i("div", {
    className: `${Ee.originalPost} ${e.notebook ? Ee.originalNotebook : ""} ${
      e.notebook?.style === "grid" ? Ee.notebookGrid : ""
    } ${e.notebook?.style === "ruled" ? Ee.notebookRuled : ""}`,
    onClick: _,
    children: [
      i("div", {
        className: Ee.originalPostHeader,
        children: [
          i(fa, { size: 14 }),
          i(pt, {
            src: e.author.avatar ?? "",
            alt: e.author.displayName,
            size: "xs",
          }),
          i(Xo, {
            userId: e.author.id,
            name: e.author.displayName,
            verified: e.author.isVerified,
            hasNuksta: e.author.hasNuksta,
            pin: e.author.pin,
            size: "xs",
          }),
          i("span", { className: Ee.originalPostTime, children: o }),
        ],
      }),
      e.notebook && i(Lf, { className: Ee.notebookLabel, disabled: n }),
      e.text &&
        i("div", {
          className: Ee.originalPostText,
          children:
            e.corrector || e.redPen
              ? i(Ta, {
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
        i(EI, { attachments: e.attachments, postVs: e.vs, source: t }),
      i(Of, {
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
const CI = ce(() => se(() => import("./index-Cttn60Za.js"), __vite__mapDeps([19, 20])).then(
  e => ({
    default: e.Poll
  })
)
);
function kI(e) {
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
function jr(e) {
  return e
    .filter(
      t => t.type === "image" ||
      t.type === "video" ||
      (t.type === "media" && "media" in t)
    )
    .map(t => t.type === "media" && "media" in t ? t.media : t);
}
function Mf(e) {
  return e.find(t => t.type === "poll");
}
const NI = 300;
const TI = 500;

const II = Zr(
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
    const m = n === "feed";
    const _ = Yt();
    const { openModal: v, closeModal: g } = Kt();

    const E = ie(F => F.setCurrentPost);

    const y = ie(F => F.removePost);

    const k = ie(F => F.seedPostStats);

    const C = ie(F => F.posts.find(pe => pe.id === t.id));

    const b = ge(F => F.profile);

    const w = Sf(t.id, t.corrector);
    const N = kf(t.id, t.redPen);
    U(() => {
      k(t);
    }, [t, k]);
    const T = ba(t);
    const { isFollowing: S, follow: P, unfollow: R } = Yw(t.author.id);
    const A = m && b?.id !== t.author.id ? S : undefined;

    const {
      liked: B,
      totalLikes: q,
      handleLike: ne,
      handleDoubleTap: Q,
      handleComment: he,
      handleRepost: G,
      handleReport: J,
      handleEdit: ae,
      handleDelete: W,
      handleCopyLink: we,
      handlePollVote: oe,
      handlePollVoteMultiple: $,
    } = xf(t, { openModal: v, closeModal: g, onDelete: f });

    const { handleLike: V, handleComment: K, handleRepost: de } = $f(t.id);

    const X = I(() => {
      if (A !== undefined) {
        if (A) {
          v(
                  i(xb, {
                    displayName: t.author.displayName,
                    onConfirm: R,
                    onClose: g,
                  })
                );
        } else {
          P();
        }
      }
    }, [A, t.author.displayName, P, R, v, g]);

    const Z = I(
      (F) => {
        fT(F, (pe) => {
          y(pe);
          f?.(pe);
        });
      },
      [y, f]
    );

    const me = x(null);
    const Ie = x(null);
    const Se = x(null);
    const [ue, ht] = L(NI);
    const [Ct, M] = L(0);
    const be = Ct > ue;
    U(
      () => () => {
        if (Se.current) {
          cancelAnimationFrame(Se.current);
          (Se.current = null);
        }
      },
      []
    );

    const Ce = I(
        (F) => {
          if (F &&
            m) {
            Se.current && cancelAnimationFrame(Se.current);

            (Se.current = requestAnimationFrame(() => {
              (Se.current = null);
              M(F.scrollHeight);
            }));
          }

          if (Ie) {
            (Ie.current = F);
          }
        },
        [m]
      );

    const Oe = I((F) => {
      F.stopPropagation();

      ht(pe => pe + TI);
    }, []);

    m1(t.id, me, c, l, t.vs);
    const Ne = t.originalPost?.id;
    U(() => {
      const me_current = me.current;
      if (!me_current) {
        return;
      }
      const pe = Ne ? [t.id, Ne] : t.id;
      Wr.observe(me_current, pe);

      return () => Wr.unobserve(me_current);
    }, [t.id, Ne]);
    const je = x(null);
    const tt = x(0);

    const mt = I((F) => {
      je.current = F.target;
    }, []);

    const it = I(() => {
      E(C ?? t);
      const pe = t.author.username ?? t.author.id;
      Ye(`/@${pe}/post/${t.id}`);
    }, [t, C, E]);

    const dn = I(
      (F) => {
        const F_target = F.target;
        if (F_target.closest("button") ||
        F_target.closest("a") ||
        F_target.closest("video") ||
        F_target.closest("img")) {
          return;
        }
        if (_) {
          const co = Date.now();
          if (co - tt.current < 300) {
            (tt.current = 0);
            Q();
            return;
          }
          tt.current = co;
          return;
        }
        if (je.current !== F_target) {
          je.current = null;
          return;
        }
        je.current = null;
        const ze = window.getSelection();

        if (!ze || ze.toString().length <= 0) {
          it();
        }
      },
      [_, Q, it]
    );

    const Ut = Te(() => kI(t.author), [t.author]);

    const $n = Te(() => jr(t.attachments), [t.attachments]);

    const nt = Te(() => Mf(t.attachments), [t.attachments]);

    const Qo = i("div", {
      className: `${Ee.postInner} ${m ? Ee.isFeed : ""} ${o || ""}`,
      children: [
        m &&
          i("a", {
            href: `/@${t.author.username ?? t.author.id}`,
            className: Ee.avatarLink,
            children: i(pt, {
              src: t.author.avatar ?? "",
              alt: t.author.displayName,
              size: "sm",
              followBadge: A,
              onFollowBadgeClick: X,
            }),
          }),
        i("div", {
          className: Ee.postContent,
          children: [
            i($T, {
              author: Ut,
              createdAt: t.createdAt,
              editedAt: t.editedAt,
              postId: t.id,
              showAvatar: !m,
              isOnOwnProfile: r,
              isPinned: s,
              onReport: J,
              onEdit: d ?? ae,
              onDelete: W,
              onPin: p,
              onCopyLink: we,
              onWastePaper: u ? undefined : Z,
              editLocked: w.locked || N.locked,
              accessory: t.notebook
                ? i(Lf, { className: Ee.notebookLabel, disabled: u })
                : null,
            }),
            i("div", {
              className: Ee.postBody,
              children: [
                t.text &&
                  i("div", {
                    className: Ee.textWrapper,
                    children: [
                      i("div", {
                        ref: Ce,
                        className: `${Ee.text} ${be ? Ee.collapsed : ""}`,
                        style: m && be ? { maxHeight: `${ue}px` } : undefined,
                        children:
                          t.corrector || t.redPen
                            ? i(Ta, {
                                postId: t.id,
                                authorId: t.author.id,
                                text: t.text,
                                spans: t.spans,
                                initial: t.corrector,
                                initialRedPen: t.redPen,
                                signature: false,
                                selectable: !be && !u,
                              })
                            : i(Sa, { text: t.text, spans: t.spans ?? [] }),
                      }),
                      m &&
                        be &&
                        i("button", {
                          type: "button",
                          className: Ee.expandButton,
                          onClick: Oe,
                          children: "Читать далее",
                        }),
                    ],
                  }),
                $n.length > 0 &&
                  i(Ca, { media: $n, isFeed: m, postVs: t.vs, source: c }),
                nt &&
                  i(De, {
                    fallback: null,
                    children: i(CI, {
                      title: nt.question,
                      options: nt.options.map(F => ({
                        id: F.id,
                        text: F.text,
                        votes: F.votes ?? 0
                      })),
                      totalVotes: nt.totalVotes ?? 0,
                      voted:
                        (nt.myVotes ?? []).length > 0 ||
                        (nt.myVote !== undefined && nt.myVote !== null),
                      selectedOptionId: nt.myVote,
                      selectedOptionIds: nt.myVotes ?? [],
                      multipleChoice: nt.multipleChoice ?? false,
                      onVote: oe,
                      onVoteMultiple: $,
                      disabled: nt.id.startsWith("temp-"),
                    }),
                  }),
                t.originalPost &&
                  i(SI, {
                    originalPost: t.originalPost,
                    source: c,
                    showcase: u,
                  }),
                t.corrector && i(Cf, { marks: w.marks, postId: t.id }),
                t.redPen &&
                  i(Rf, {
                    claims: N.claims,
                    visible: N.corrections.length > 0,
                    postId: t.id,
                  }),
                i(Of, {
                  compact: u,
                  emojiOnly: u,
                  flush: u,
                  infiniteLike: u,
                  liked: B,
                  reposted: T.reposted,
                  likesCount: q,
                  repostsCount: T.repostsCount,
                  commentsCount: T.commentsCount,
                  viewsCount: T.viewsCount,
                  dominantEmoji: T.dominantEmoji,
                  onLike: u ? V : ne,
                  onRepost: u ? de : G,
                  onComment: u ? K : he,
                }),
              ],
            }),
          ],
        }),
      ],
    });

    return m
      ? i("article", {
          ref: me,
          className: `${Ee.post} ${t.notebook ? Ee.notebookPost : ""} ${
            t.notebook?.style === "grid" ? Ee.notebookGrid : ""
          } ${t.notebook?.style === "ruled" ? Ee.notebookRuled : ""} ${
            a ? "flash-highlight" : ""
          }`,
          "data-alice-water-anchor-kind": "post",
          "data-alice-water-anchor-id": t.id,
          onMouseDown: mt,
          onClick: dn,
          children: [
            i(cT, { placements: h, anchorKind: "post", anchorId: t.id }),
            Qo,
          ],
        })
      : i("div", {
          ref: me,
          className: `${t.notebook ? Ee.notebookPost : ""} ${
            t.notebook?.style === "grid" ? Ee.notebookGrid : ""
          } ${t.notebook?.style === "ruled" ? Ee.notebookRuled : ""}`,
          children: Qo,
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

const RI = "Y2Df";
const AI = "kalH";
const LI = "SjFq";
const PI = "Vgcy";
const OI = "sbnL";
const xI = "QhWc";
const $I = "vmkt";
const MI = "mImC";
const DI = "aCHZ";
const UI = "XGcf";
const FI = "PFhl";
const BI = "TlD3";
const HI = "nAJv";
const VI = "GMDd";
const WI = "t2bh";
const jI = "EUhM";
const zI = "det4";
const qI = "GnL1";
const GI = "SlMf";
const YI = "ZnyA";
const KI = "syBP";
const XI = "kGYL";
const QI = "V80g";
const ZI = "w39E";

const _e = {
  commentWrapper: RI,
  threadItem: AI,
  avatarWrapper: LI,
  threadLine: PI,
  commentBody: OI,
  showMoreBtn: xI,
  avatarPlaceholder: $I,
  comment: MI,
  small: DI,
  commentTime: UI,
  commentText: FI,
  commentActions: BI,
  commentContent: HI,
  avatarLink: VI,
  authorLink: WI,
  commentHeader: jI,
  moreButton: zI,
  commentHeaderLeft: qI,
  replyMention: GI,
  commentMedia: YI,
  reactionWrapper: KI,
  commentAction: XI,
  liked: QI,
  replyButton: ZI,
};

const JI = ce(() => se(() => import("./index-EAMLABPq.js"), __vite__mapDeps([21, 11, 22])).then(
  e => ({
    default: e.VoiceMessage
  })
)
);

const eR = Zr((
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
    onDelete: m,
    replyTo: _,
    hideAvatar: v = false,
    isWallOwner: g = false,
  }
) => {
  const E = qd(a);
  const y = va(t.id);

  const k = ge(S => S.profile?.id);

  const C = t.id === k;
  const b = C || g;
  const w = u === "xs";

  const N = Te(() => {
    const S = [];

    if (C &&
      h) {
      S.push({
        id: "edit",
        label: "Редактировать",
        icon: i(Xd, { size: 16 }),
        onClick: () => h(n),
      });
    }

    if (b &&
      m) {
      S.push({
        id: "delete",
        label: "Удалить",
        icon: i(of, { size: 16 }),
        danger: true,
        onClick: () => m(n),
      });
    }

    if (!C) {
      S.push({
        id: "report",
        label: "Пожаловаться",
        icon: i(Zd, { size: 16 }),
        danger: true,
        onClick: () => f(n),
      });
    }

    return S;
  }, [C, b, n, h, m, f]);

  const T = `/@${t.username ?? t.id}`;
  return i("div", {
    className: `${_e.comment} ${w ? _e.small : ""}`,
    children: [
      !v &&
        i("a", {
          href: T,
          className: _e.avatarLink,
          children: i(pt, { src: t.avatar, alt: t.displayName, size: u }),
        }),
      i("div", {
        className: _e.commentContent,
        children: [
          i("div", {
            className: _e.commentHeader,
            children: [
              i("div", {
                className: _e.commentHeaderLeft,
                children: [
                  i("a", {
                    href: T,
                    className: _e.authorLink,
                    children: i(Xo, {
                      userId: t.id,
                      name: t.displayName,
                      verified: t.isVerified,
                      hasNuksta: t.hasNuksta,
                      pin: t.pin,
                      size: u,
                      trailing: y
                        ? i("span", {
                            className: _e.commentTime,
                            "data-comment-time": true,
                            children: E,
                          })
                        : undefined,
                    }),
                  }),
                  !y &&
                    i("span", {
                      className: _e.commentTime,
                      "data-comment-time": true,
                      children: E,
                    }),
                ],
              }),
              i(Ef, {
                trigger: i(ef, { size: w ? 14 : 16 }),
                items: N,
                position: "bottom-right",
                className: _e.moreButton,
              }),
            ],
          }),
          (_ || o) &&
            i("div", {
              className: _e.commentText,
              children: [
                _ &&
                  i(ve, {
                    children: [
                      i("a", {
                        href: `/@${_.username}`,
                        className: _e.replyMention,
                        children: ["@", _.displayName],
                      }),
                      ", ",
                    ],
                  }),
                o && i(Sa, { text: o, spans: r }),
              ],
            }),
          jr(s).length > 0 &&
            i("div", {
              className: _e.commentMedia,
              children: i(Ca, { media: jr(s) }),
            }),
          s
            .filter(S => S.type === "audio")
            .map(S => i(
            De,
            {
              fallback: null,
              children: i(JI, { src: S.url, duration: S.duration }),
            },
            S.id
          )
            ),
          i("div", {
            className: _e.commentActions,
            children: [
              i("button", {
                className: _e.replyButton,
                onClick: p,
                children: "Ответить",
              }),
              i("div", {
                className: _e.reactionWrapper,
                children: i("button", {
                  className: `${_e.commentAction} ${l ? _e.liked : ""}`,
                  onClick: () => d(),
                  children: [
                    i(ca, { size: 14, filled: l }),
                    i(ko, { value: c }),
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

const Df = Zr((
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
    flashingCommentId: m,
    isWallOwner: _ = false,
  }
) => {
  const v = r?.commentId === t.id;

  const g = {
    id: t.author.id,
    username: t.author.username,
    avatar: t.author.avatar ?? "",
    displayName: t.author.displayName,
    isVerified: t.author.isVerified,
    pin: t.author.pin,
  };

  const E = t.previewReplies ?? [];
  const y = m === t.id;
  const k = t.stats.replies > E.length;

  const C = [
    { type: "parent", data: t, author: g },
    ...E.map(b => ({
      type: "reply",
      data: b,

      author: {
        id: b.author.id,
        username: b.author.username,
        avatar: b.author.avatar ?? "",
        displayName: b.author.displayName,
        isVerified: b.author.isVerified,
        pin: b.author.pin,
      }
    })),
  ];

  return i("div", {
    className: `${_e.commentWrapper} ${y ? "flash-highlight" : ""}`,
    "data-comment-id": t.id,
    children: [
      C.map((b, w) => {
        const T = !(w === C.length - 1 && !v && !k);
        const S = m === b.data.id;
        return i(
          "div",
          {
            "data-comment-id": b.data.id,
            className: `${_e.threadItem} ${S ? "flash-highlight" : ""}`,
            children: [
              i("div", {
                className: _e.avatarWrapper,
                children: [
                  i("a", {
                    href: `/@${b.author.username ?? b.author.id}`,
                    className: _e.avatarLink,
                    children: i(pt, {
                      src: b.author.avatar,
                      alt: b.author.displayName,
                      size: "sm",
                    }),
                  }),
                  T && i("div", { className: _e.threadLine }),
                ],
              }),
              i("div", {
                className: _e.commentBody,
                children: i(eR, {
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
                  onLike: b.type === "parent" ? n : () => o(b.data.id),
                  onReply: () => b.type === "parent"
                    ? s(
                        t.id,
                        t.author.username ?? t.author.id,
                        t.author.displayName,
                        t.author.id
                      )
                    : s(
                        t.id,
                        b.data.author.username ?? b.data.author.id,
                        b.data.author.displayName,
                        b.data.author.id,
                        b.data.id
                      ),
                  onReport: d,
                  onEdit: p,
                  onDelete: f,
                  hideAvatar: true,
                  isWallOwner: _,
                }),
              }),
            ],
          },
          b.data.id
        );
      }),
      v &&
        i("div", {
          className: _e.threadItem,
          children: [
            i("div", {
              className: _e.avatarWrapper,
              children: [
                i("div", { className: _e.avatarPlaceholder }),
                k && i("div", { className: _e.threadLine }),
              ],
            }),
            i("div", {
              className: _e.commentBody,
              children: i(bf, {
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
      k &&
        !h &&
        i("button", {
          className: _e.showMoreBtn,
          onClick: () => u(t.id),
          children: ["Показать ещё ", t.stats.replies - E.length, " ответов"],
        }),
    ],
  });
});

function tR({
  itemCount: e,
  estimatedItemHeight: t,
  overscan: n = 5,
  getItemKey: o = r => r,
}) {
  const r = x(null);
  const [s, a] = L(0);
  const [c, l] = L(0);
  const u = x(new Map());
  const d = x(new Map());
  const p = x(0);

  if (p.current !== e) {
    (p.current = e);
    d.current.clear();
  }

  const f = I(
      (C) => {
        const b = o(C);
        return u.current.get(b) ?? t;
      },
      [o, t]
    );

  const h = I(
    (C) => {
      if (C === 0) {
        return 0;
      }
      const b = d.current.get(C);
      if (b !== undefined) {
        return b;
      }
      let w = 0;
      let N = 0;
      for (let T = C - 1; T >= 0; T--) {
        const S = d.current.get(T);
        if (S !== undefined) {
          (w = T);
          (N = S);
          break;
        }
      }
      for (let T = w; T < C; T++) {
        N += f(T);
      }
      d.current.set(C, N);
      return N;
    },
    [f]
  );

  const m = Te(() => e === 0 ? 0 : h(e - 1) + f(e - 1), [e, h, f]);

  const { startIndex: _, endIndex: v } = Te(() => {
    if (e === 0 || c === 0) {
      return { startIndex: 0, endIndex: 0 };
    }
    let C = 0;
    let b = e - 1;

    while (C < b) {
      const S = Math.floor((C + b) / 2);
      const P = h(S);
      const R = f(S);

      if (P + R < s) {
        (C = S + 1);
      } else {
        (b = S);
      }
    }

    const w = Math.max(0, C - n);
    let N = C;
    let T = h(C) - s;

    while (N < e && T < c + t * n) {
      (T += f(N));
      N++;
    }

    (N = Math.min(e - 1, N + n));
    return { startIndex: w, endIndex: N };
  }, [e, s, c, h, f, n, t]);

  const g = Te(() => {
    if (e === 0) {
      return [];
    }
    const C = [];
    for (let b = _; b <= v; b++) {
      C.push({ index: b, key: o(b), start: h(b), size: f(b) });
    }
    return C;
  }, [_, v, o, h, f, e]);

  const E = I(
    (C, b) => {
      if (!C) {
        return;
      }
      const w = o(b);
      const N = C.getBoundingClientRect().height;
      if (N <= 0) {
        return;
      }
      const T = u.current.get(w);

      if ((T === undefined || Math.abs(T - N) > 2)) {
        u.current.set(w, N);
        d.current.clear();
      }
    },
    [o]
  );

  const y = I(() => {
    if (r.current) {
      a(r.current.scrollTop);
    }
  }, []);

  const k = I(
    (C) => {
      if (r.current) {
        r.current.removeEventListener("scroll", y);
      }

      (r.current = C);

      if (C) {
        l(C.clientHeight);
        a(C.scrollTop);
        C.addEventListener("scroll", y, { passive: true });
      }
    },
    [y]
  );

  U(() => {
    if (!r.current) {
      return;
    }
    const C = new ResizeObserver((b) => {
      for (const w of b) {
        l(w.contentRect.height);
      }
    });
    C.observe(r.current);

    return () => C.disconnect();
  }, []);

  U(
    () => () => {
      if (r.current) {
        r.current.removeEventListener("scroll", y);
      }
    },
    [y]
  );

  return { containerRef: k, virtualItems: g, totalSize: m, measureElement: E };
}
const nR = "DVxv";
const oR = "KVe4";
const rR = "YYo4";
const sR = "D1Vv";
const iR = "Toi9";
const aR = "Ov4q";
const cR = "XyhY";
const lR = "WqLt";
const uR = "YCOF";
const dR = "u4qw";
const fR = "XU3Y";

const _t = {
  comments: nR,
  sortWrapper: oR,
  sortSelect: rR,
  commentsList: sR,
  commentItem: iR,
  empty: aR,
  loadMoreSentinel: cR,
  virtualContainer: lR,
  virtualContent: uR,
  virtualItem: dR,
  inputWrapper: fR,
};

const pR = 120;
function hR({
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
  onLoadReplies: m,
  onReport: _,
  onEdit: v,
  onDelete: g,
}) {
  const E = x(false);

  const {
    containerRef: y,
    virtualItems: k,
    totalSize: C,
    measureElement: b,
  } = tR({
    itemCount: e.length,
    estimatedItemHeight: pR,
    overscan: 3,
    getItemKey: N => e[N]?.id ?? N,
  });

  U(() => {
    if (!t || n || k.length === 0) {
      E.current = false;
      return;
    }
    const N = k[k.length - 1]?.index ?? 0;
    const T = e.length - 5;

    if (N >= T && !E.current) {
      (E.current = true);
      o();
    }
  }, [k, e.length, t, n, o]);

  U(() => {
    if (!n) {
      (E.current = false);
    }
  }, [n]);

  const w = I(
    (N, T) => {
      b(N, T);
    },
    [b]
  );
  return i("div", {
    ref: y,
    className: _t.virtualContainer,
    "data-comments-scroll": true,
    children: [
      i("div", {
        className: _t.virtualContent,
        style: { height: `${C}px` },
        children: k.map((N) => {
          const T = e[N.index];
          return T
            ? i(
                "div",
                {
                  ref: S => w(S, N.index),
                  className: _t.virtualItem,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${N.start}px)`,
                  },
                  children: i(Df, {
                    comment: T,
                    onLike: () => l(T.id),
                    onLikeReply: u,
                    replyingTo: r?.commentId === T.id ? r : null,
                    onStartReply: d,
                    onCancelReply: p,
                    onSubmitReply: f,
                    onVoiceSend: h,
                    onLoadReplies: m,
                    onReport: _,
                    onEdit: v,
                    onDelete: g,
                    isLoadingReplies: a === T.id,
                    flashingCommentId: s,
                    isWallOwner: c,
                  }),
                },
                N.key
              )
            : null;
        }),
      }),
      n && i(Ea, { variant: "medium" }),
    ],
  });
}
const mR = "VM20";
const gR = "zwue";
const _R = "iiKD";
const qs = { wrapper: mR, popup: gR, closing: _R };

const vR = ce(() => se(() => import("./index-D-YykTQg.js"), __vite__mapDeps([23, 24])).then(
  e => ({
    default: e.EmojiPicker
  })
)
);

const Bl = 280;
const Hl = 380;
const Gs = 8;
const yR = 100;
const Vl = 150;
const wR = 150;
function Ia({ onEmojiSelect: e, buttonClassName: t, size: n = 20 }) {
  const [o, r] = L(false);
  const [s, a] = L(false);
  const [c, l] = L(null);
  const u = x(null);
  const d = x(null);
  const p = x(null);
  const f = x(null);
  const h = x(null);
  const m = x(null);

  const _ = I(() => {
    const u_current = u.current;
    if (!u_current) {
      return;
    }
    const N = u_current.getBoundingClientRect();

    const {
      innerHeight,
      innerWidth
    } = window;

    const P = innerHeight - N.bottom;
    const R = innerWidth - N.left;
    const N_right = N.right;
    const B = P >= Hl + Gs ? "bottom" : "top";
    const q = R >= Bl || R > N_right ? "left" : "right";
    let ne;
    let Q;

    if (B === "top") {
      (ne = N.top - Hl - Gs);
    } else {
      (ne = N.bottom + Gs);
    }

    if (q === "left") {
      (Q = N.left);
    } else {
      (Q = N.right - Bl);
    }

    l({
      top: ne,
      left: Q,
      transformOrigin: `${B === "top" ? "bottom" : "top"} ${
        q === "left" ? "left" : "right"
      }`,
    });
  }, []);

  const v = I(() => {
    if (!o && !s) {
      _();
      r(true);
    }
  }, [o, s, _]);

  const g = I(() => {
    if (o && !s) {
      a(true);

      (m.current = window.setTimeout(() => {
        r(false);
        a(false);
      }, wR));
    }
  }, [o, s]);

  const E = () => {
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

    if (!o) {
      (f.current = window.setTimeout(() => {
          v();
        }, yR));
    }
  };

  const y = () => {
    if (f.current) {
      clearTimeout(f.current);
      (f.current = null);
    }

    (h.current = window.setTimeout(() => {
        g();
      }, Vl));
  };

  U(
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

  const k = () => {
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

  const C = () => {
    h.current = window.setTimeout(() => {
      g();
    }, Vl);
  };

  const b = (w) => {
    w.preventDefault();
  };

  return i("div", {
    ref: d,
    className: qs.wrapper,
    onMouseEnter: E,
    onMouseLeave: y,
    onMouseDown: b,
    children: [
      i("button", {
        ref: u,
        className: t,
        title: "Добавить эмоджи",
        children: i(c0, { size: n }),
      }),
      o &&
        c &&
        $(
          i("div", {
            ref: p,
            className: `${qs.popup} ${s ? qs.closing : ""}`,
            style: {
              position: "fixed",
              top: c.top,
              left: c.left,
              transformOrigin: c.transformOrigin,
            },
            onMouseEnter: k,
            onMouseLeave: C,
            onMouseDown: b,
            children: i(De, {
              fallback: null,
              children: i(vR, { onEmojiSelect: e }),
            }),
          }),
          document.body
        ),
    ],
  });
}
const bR = "mggg";
const ER = "LruQ";
const SR = "woEK";
const CR = "Fou9";
const kR = "aGZp";
const NR = "pPjn";
const TR = "bEvt";
const IR = "nGKJ";
const RR = "rMzR";
const AR = "Wvd0";
const LR = "QOs2";
const PR = "jB8V";

const ct = {
  editCommentModal: bR,
  form: ER,
  header: SR,
  title: CR,
  content: kR,
  editor: NR,
  actions: TR,
  mediaButtons: IR,
  mediaButton: RR,
  submitGroup: AR,
  charCount: LR,
  error: PR,
};

const Wl = 2000/* 2e3 */;
function OR({ commentId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: o } = Kt();

  const r = on(C => C.editComment);

  const s = ge(C => C.profile);

  const a = Yt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: d,
    insertText: p,
  } = ts(t, n);

  const [f, h] = L(false);
  const m = Wl - c.length;
  const _ = m < 0;
  const v = c !== t;
  const g = JSON.stringify(l) !== JSON.stringify(n);
  const E = v || g;

  const y = I(
    (C) => {
      p(C.emoji);
    },
    [p]
  );

  const k = I(async () => {
    if (!(!c.trim() || _ || !E || f)) {
      h(true);
      try {
        await r(e, c, l);
        o();
      } catch (C) {
        console.error("Failed to update comment:", C);
      } finally {
        h(false);
      }
    }
  }, [c, l, _, E, f, r, e, o]);

  return i(xn, {
    frameless: true,
    onClose: o,
    className: ct.editCommentModal,
    children: i("div", {
      className: ct.form,
      children: [
        i("div", {
          className: ct.header,
          children: i("span", {
            className: ct.title,
            children: "Редактирование комментария",
          }),
        }),
        i("div", {
          className: ct.content,
          children: [
            i(pt, { src: s?.avatar ?? "", size: "sm" }),
            i(cs, {
              ref: u,
              value: c,
              spans: l,
              onChange: d,
              placeholder: "Комментарий...",
              maxLength: Wl,
              autoFocus: true,
              className: ct.editor,
              minHeight: 40,
              maxHeight: 300,
              disableFormatting: true,
            }),
          ],
        }),
        i("div", {
          className: ct.actions,
          children: [
            i("div", {
              className: ct.mediaButtons,
              children:
                !a &&
                i(Ia, { onEmojiSelect: y, buttonClassName: ct.mediaButton }),
            }),
            i("div", {
              className: ct.submitGroup,
              children: [
                _ &&
                  i("span", {
                    className: `${ct.charCount} ${ct.error}`,
                    children: m,
                  }),
                i(Fe, {
                  size: "md",
                  variant: "ghost",
                  onClick: () => o(),
                  children: "Отмена",
                }),
                i(Fe, {
                  size: "md",
                  disabled: !c.trim() || _ || !E || f,
                  onClick: k,
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
const xR = ce(() => se(() => import("./index-BnMYV2yp.js"), __vite__mapDeps([16, 17, 18])).then(
  e => ({
    default: e.ReportModal
  })
)
);
function $R({
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
  const m = Yt() && p === "modal";
  const [_, v] = L(null);
  const [g, E] = L(null);
  const [y, k] = L(null);
  const [C, b] = L(null);
  const w = x(null);
  const { openModal: N } = Kt();

  const T = on(W => W.highlightedCommentId);

  const S = on(W => W.clearHighlightedComment);

  const P = on(W => W.loadReplies);

  const R = on(W => W.deleteComment);

  const A = on(W => W.toggleCommentLike);

  Py({
    sentinelRef: w,
    hasMore: o,
    isLoading: n,
    onLoadMore: u,
    rootMargin: "200px",
  });

  U(
    () => () => {
      S();
    },
    [S]
  );

  U(() => {
    if (!T) {
      return;
    }
    let W = false;
    const we = [];

    const oe = ($) => {
      if (W) {
        return;
      }
      const V = document.querySelector(`[data-comment-id="${T}"]`);
      if (!V) {
        if ($ > 0) {
          we.push(window.setTimeout(() => oe($ - 1), 150));
        } else {
          S();
        }

        return;
      }
      V.scrollIntoView({ behavior: "smooth", block: "center" });
      E(T);
      S();

      we.push(window.setTimeout(() => E(null), 900));
    };

    oe(40);

    return () => {
      (W = true);

      we.forEach($ => clearTimeout($));
    };
  }, [T, S]);

  const B = async (W, we, oe) => {
    if (_) {
      await c({
          text: W,
          spans: we,
          parentId: _.commentId,
          replyToUserId: _.userId,
          replyToInfo: {
            id: _.userId,
            username: _.username,
            displayName: _.displayName,
          },
          attachments: oe,
        });

      v(null);
    }
  };

  const q = (W, we, oe, $, V) => {
    v({ commentId: W, username: we, displayName: oe, userId: $, replyId: V });
  };

  const ne = () => {
    v(null);
  };

  const Q = I(
    (W) => {
      A(W);
    },
    [A]
  );

  const he = I(
    async (W) => {
      k(W);
      try {
        await P(W);
      } finally {
        k(null);
      }
    },
    [P]
  );

  const G = I((W) => {
    b(W);
  }, []);

  const J = I(
    (W) => {
      let we = "";
      let oe = [];
      for (const $ of e) {
        if ($.id === W) {
          (we = $.text);
          (oe = $.spans ?? []);
          break;
        }
        const V = $.previewReplies?.find(K => K.id === W);
        if (V) {
          (we = V.text);
          (oe = V.spans ?? []);
          break;
        }
      }
      N(i(OR, { commentId: W, initialText: we, initialSpans: oe }));
    },
    [e, N]
  );

  const ae = I(
    (W) => {
      if (confirm("Вы уверены, что хотите удалить этот комментарий?")) {
        R(W);
      }
    },
    [R]
  );

  return i("div", {
    className: _t.comments,
    children: [
      i("div", {
        className: _t.sortWrapper,
        children: i("select", {
          value: r,
          onChange: W => s(W.target.value),
          className: _t.sortSelect,
          children: [
            i("option", { value: "new", children: "Новые" }),
            i("option", { value: "old", children: "Старые" }),
            i("option", { value: "popular", children: "Популярные" }),
          ],
        }),
      }),
      t
        ? i(cS, { count: 5 })
        : e.length === 0
        ? i("div", { className: _t.empty, children: "Нет комментариев" })
        : m
        ? i(hR, {
            comments: e,
            hasMore: o,
            isLoadingMore: n,
            onLoadMore: u,
            replyingTo: _,
            flashingCommentId: g,
            loadingRepliesId: y,
            isWallOwner: d,
            onLikeComment: a,
            onLikeReply: Q,
            onStartReply: q,
            onCancelReply: ne,
            onSubmitReply: B,
            onVoiceSend: l,
            onLoadReplies: he,
            onReport: G,
            onEdit: J,
            onDelete: ae,
          })
        : i("div", {
            className: _t.commentsList,
            children: [
              e.map(W => i(
                "div",
                {
                  className: _t.commentItem,
                  children: i(Df, {
                    comment: W,
                    onLike: () => a(W.id),
                    onLikeReply: Q,
                    replyingTo: _?.commentId === W.id ? _ : null,
                    onStartReply: q,
                    onCancelReply: ne,
                    onSubmitReply: B,
                    onVoiceSend: l,
                    onLoadReplies: he,
                    onReport: G,
                    onEdit: J,
                    onDelete: ae,
                    isLoadingReplies: y === W.id,
                    flashingCommentId: g,
                    isWallOwner: d,
                  }),
                },
                W.id
              )
              ),
              o &&
                i("div", {
                  ref: w,
                  className: _t.loadMoreSentinel,
                  children: n && i(Ea, { variant: "medium" }),
                }),
            ],
          }),
      !f &&
        i("div", {
          className: _t.inputWrapper,
          children: i(bf, {
            onSubmit: (W, we, oe) => c({ text: W, spans: we, attachments: oe }),
            onVoiceSend: l,
          }),
        }),
      C &&
        i(De, {
          fallback: null,
          children: i(xR, {
            targetType: "comment",
            targetId: C,
            onClose: () => b(null),
          }),
        }),
    ],
  });
}
const MR = "Gt1C";
const DR = "JOTS";
const UR = "ZiAJ";
const FR = "C1FO";
const gr = { commentsModal: MR, header: DR, title: UR, content: FR };
function BR({ postId: e, onClose: t }) {
  const n = x(null);

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
  } = on(
    Rl(y => ({
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

  const { commentsSort: f, setCommentsSort: h } = Nr(
    Rl(y => ({
      commentsSort: y.commentsSort,
      setCommentsSort: y.setCommentsSort
    }))
  );

  if (n.current !== e) {
    (n.current = e);
    c();
  }

  U(() => {
    l(e);
  }, [e, l]);

  const m = I(
      (y) => {
        h(y);
        l(e);
      },
      [h, l, e]
    );

  const _ = I(() => {
    if (a && !s) {
      u(e);
    }
  }, [a, s, u, e]);

  const v = I(
    (y) => {
      d(y);
    },
    [d]
  );

  const g = I(
    async (y) => {
      await p(e, y);
    },
    [p, e]
  );

  const E = I(
    async (y) => {
      const k = `voice_${Date.now()}.webm`;
      const C = new File([y], k, { type: y.type || "audio/webm" });
      const b = await Gn.uploadMedia(C);
      await p(e, { text: "", attachments: [{ mediaId: b.id }] });
    },
    [p, e]
  );

  return i(xn, {
    frameless: true,
    onClose: t,
    className: gr.commentsModal,
    children: [
      i("div", {
        className: gr.header,
        children: i("span", { className: gr.title, children: "Комментарии" }),
      }),
      i("div", {
        className: gr.content,
        "data-comments-modal": true,
        children: i($R, {
          comments: o,
          isLoading: r,
          isLoadingMore: s,
          hasMore: a,
          sort: f,
          onSortChange: m,
          onLikeComment: v,
          onAddComment: g,
          onVoiceSend: E,
          onLoadMore: _,
        }),
      }),
    ],
  });
}

const HR = {
    inventory: async () => (await O.get(D.postNotebooks.inventory, { skipErrorToast: true })).data,
  };

const VR = ce(() => se(() => import("./index-B1ffFiJ9.js"), __vite__mapDeps([25, 26])).then(
  e => ({
    default: e.DrawingCanvas
  })
)
);

function Uf({
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
    } = ts();

  const [u, d] = L(false);
  const [p, f] = L(false);
  const [h, m] = L(false);
  const [_, v] = L(null);
  const [g, E] = L(null);
  const [y, k] = L(false);
  const [C, b] = L("");
  const w = x(null);
  const N = x(0);
  const T = Yt();
  const P = ns()?.subscription?.isActive ?? false;
  const R = Ko().status === "allowed";
  U(() => {
    if (!R) {
      v(null);
      return;
    }
    let F = true;
    let pe = false;
    const ze = async () => {
      if (!pe) {
        pe = true;
        try {
          const jf = await HR.inventory();

          if (F) {
            v(jf);
          }
        } catch {
        } finally {
          pe = false;
        }
      }
    };
    ze();
    const co = y
      ? window.setInterval(() => {
          ze();
        }, 1500)
      : undefined;
    return () => {
      (F = false);

      if (co !== undefined) {
        window.clearInterval(co);
      }
    };
  }, [y, R]);

  const {
      images: A,
      uploadingImages: B,
      isUploading: q,
      hasVideo: ne,
      openFilePicker: Q,
      removeImage: he,
      addImage: G,
      uploadFiles: J,
      clearAll: ae,
      fileInputRef: W,
      handleFileChange: we,
    } = yf(10, P);

  const {
    isPollOpen: oe,
    poll: $,
    togglePoll: V,
    handlePollQuestionChange: K,
    handlePollOptionChange: de,
    handleAddPollOption: X,
    handleRemovePollOption: Z,
    handleMultipleChoiceToggle: me,
    handleClosePoll: Ie,
    isPollValid: Se,
    getPollData: ue,
    resetPoll: ht,
  } = lS();

  const Ct = jt.MAX_CHARS - o.length;
  const M = Ct < 0;
  const be = oe && Se();
  const Ce = A.length > 0 || B.length > 0;
  const Oe = o.trim().length > 0 || be || Ce;
  const Ne = P ? `${Ii},${Ww}` : Ii;

  const je = I(async () => {
    if (!(!Oe || M || q || p)) {
      f(true);
      b("");
      try {
        const F = A.map(ze => ({
          mediaId: ze.mediaId,
          url: ze.url
        }));

        const pe =
          g && _
            ? {
                eventId: _.eventId,
                style: g,
                operationId: w.current ?? (w.current = crypto.randomUUID()),
              }
            : undefined;

        await e?.(o, r, F, ue(), pe);
        l();
        ae();
        ht();

        if (g &&
          _) {
          v(
            ze => ze && {
              ...ze,
              balance: {
                ...ze.balance,
                [g]: Math.max(0, ze.balance[g] - 1),
              },
            }
          );
        }

        E(null);
        k(false);
        (w.current = null);
      } catch (F) {
        b(
          $e(F)
            ? {
                NO_POST_NOTEBOOKS:
                  "Такой тетрадки уже нет в рюкзаке. Выберите другое оформление или купите новое.",
                POST_NOTEBOOK_EVENT_ENDED:
                  "Ивент уже завершён. Пост сохранён в черновике и не был опубликован.",
                POST_NOTEBOOK_PAUSED:
                  "Оформление постов временно недоступно. Пост сохранён в черновике.",
                OPERATION_CONFLICT:
                  "Не удалось безопасно повторить публикацию. Обновите страницу и попробуйте снова.",
              }[F.code] ??
                F.message ??
                "Не удалось опубликовать пост. Попробуйте ещё раз."
            : "Не удалось опубликовать пост. Попробуйте ещё раз."
        );
      } finally {
        f(false);
      }
    }
  }, [Oe, M, q, p, o, r, A, ue, e, l, ae, ht, g, _]);

  const tt = I(
    (F) => {
      if (_?.applicationsEnabled && _.balance[F] >= 1) {
        E(pe => pe === F ? null : F);
        b("");
        (w.current = null);
      }
    },
    [_]
  );

  const mt = I((F) => {
    const pe = window.location.pathname;
    Ye(
      `/event/alice-ai?product=post_notebook&variant=${F}&returnTo=${encodeURIComponent(
        pe
      )}`
    );
  }, []);

  const it = I(
    (F) => {
      G(F);
    },
    [G]
  );

  const dn = I(
    (F) => {
      c(F.emoji);
    },
    [c]
  );

  const Ut = I((F) => {
    F.preventDefault();
    F.stopPropagation();
    N.current++;

    if (F.dataTransfer?.types.includes("Files")) {
      m(true);
    }
  }, []);

  const $n = I((F) => {
    F.preventDefault();
    F.stopPropagation();
  }, []);

  const nt = I((F) => {
    F.preventDefault();
    F.stopPropagation();
    N.current--;

    if (N.current === 0) {
      m(false);
    }
  }, []);

  const Qo = I(
    (F) => {
      F.preventDefault();
      F.stopPropagation();
      (N.current = 0);
      m(false);
      const pe = F.dataTransfer?.files;

      if (pe && pe.length > 0) {
        J(Array.from(pe));
      }
    },
    [J]
  );

  return i("div", {
    className: `${j.form} ${h ? j.dragActive : ""} ${
      g === "grid" ? j.notebookGrid : ""
    } ${g === "ruled" ? j.notebookRuled : ""}`,
    onDragEnter: Ut,
    onDragOver: $n,
    onDragLeave: nt,
    onDrop: Qo,
    children: [
      h &&
        i("div", {
          className: j.dragOverlay,
          children: [
            i(Jd, { size: 32 }),
            i("span", {
              children: P ? "Перетащите файл" : "Перетащите изображение",
            }),
          ],
        }),
      g &&
        i("div", {
          className: j.notebookLabel,
          children: ["Тетрадка ", g === "grid" ? "в клетку" : "в линейку"],
        }),
      i("div", {
        className: j.whatsNew,
        children: i(cs, {
          ref: s,
          value: o,
          spans: r,
          onChange: a,
          placeholder: n,
          autoFocus: t,
          className: j.editor,
          minHeight: 40,
          maxHeight: jt.MAX_TEXTAREA_HEIGHT,
          onImagePaste: J,
        }),
      }),
      i(wf, { images: A, uploadingImages: B, onRemove: he }),
      i("input", {
        ref: W,
        type: "file",
        accept: Ne,
        multiple: !ne,
        onChange: we,
        style: { display: "none" },
      }),
      oe &&
        i(aC, {
          poll: $,
          onQuestionChange: K,
          onOptionChange: de,
          onAddOption: X,
          onRemoveOption: Z,
          onMultipleChoiceToggle: me,
          onClose: Ie,
        }),
      y &&
        _ &&
        i("div", {
          className: j.notebookPicker,
          role: "dialog",
          "aria-label": "Оформление поста",
          children: [
            i("div", {
              className: j.notebookPickerHeader,
              children: [
                i("strong", { children: "Оформление поста" }),
                i("button", {
                  type: "button",
                  onClick: () => k(false),
                  "aria-label": "Закрыть",
                  children: i(ft, { size: 16 }),
                }),
              ],
            }),
            i("p", {
              children:
                "Одно оформление расходуется после успешной публикации.",
            }),
            i("div", {
              className: j.notebookOptions,
              children: ["grid", "ruled"].map((F) => {
                const pe = _.balance[F];
                const ze = F === "grid" ? "В клетку" : "В линейку";
                return i(
                  "div",
                  {
                    className: j.notebookOptionRow,
                    children: [
                      i("button", {
                        type: "button",
                        className: `${j.notebookOption} ${
                          g === F ? j.notebookOptionActive : ""
                        }`,
                        disabled: !_.applicationsEnabled || pe < 1,
                        onClick: () => tt(F),
                        children: [
                          i("span", {
                            className:
                              F === "grid" ? j.gridSwatch : j.ruledSwatch,
                            "aria-hidden": "true",
                          }),
                          i("span", {
                            children: [
                              i("strong", { children: ze }),
                              i("small", { children: ["В рюкзаке: ", pe] }),
                            ],
                          }),
                        ],
                      }),
                      pe < 1 &&
                        i("button", {
                          type: "button",
                          className: j.notebookBuy,
                          onClick: () => mt(F),
                          children: "Купить",
                        }),
                    ],
                  },
                  F
                );
              }),
            }),
            !_.applicationsEnabled &&
              i("p", {
                className: j.notebookUnavailable,
                children: "Оформление постов временно недоступно.",
              }),
          ],
        }),
      C && i("p", { className: j.submitError, role: "alert", children: C }),
      i("div", {
        className: j.actions,
        children: [
          i("div", {
            className: j.mediaButtons,
            children: [
              i("button", {
                className: j.mediaButton,
                onClick: Q,
                title: P ? "Добавить медиа" : "Добавить изображение",
                children: i(Yd, {}),
              }),
              !T &&
                i(Ia, { onEmojiSelect: dn, buttonClassName: j.mediaButton }),
              i("button", {
                className: j.mediaButton,
                onClick: () => d(true),
                title: "Нарисовать",
                disabled: ne,
                children: i(i0, { size: 20 }),
              }),
              i("button", {
                className: `${j.mediaButton} ${oe ? j.active : ""}`,
                onClick: V,
                title: "Добавить опрос",
                children: i(a0, {}),
              }),
              _ &&
                i("button", {
                  type: "button",
                  className: `${j.mediaButton} ${j.notebookButton} ${
                    g ? j.active : ""
                  }`,
                  onClick: () => k(F => !F),
                  title: "Оформление поста",
                  "aria-label": "Оформление поста",
                  "aria-expanded": y,
                  children: i("span", {
                    className: j.notebookIcon,
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
            ],
          }),
          i("div", {
            className: j.submitGroup,
            children: [
              M &&
                i("span", {
                  className: `${j.charCount} ${j.error}`,
                  children: Ct,
                }),
              i(Fe, {
                size: "lg",
                disabled: !Oe || M || q || p,
                loading: p,
                onClick: je,
                children: "Опубликовать",
              }),
            ],
          }),
        ],
      }),
      u &&
        i(De, {
          fallback: null,
          children: i(VR, {
            isOpen: u,
            onClose: () => d(false),
            onSave: it,
            mode: "post",
          }),
        }),
    ],
  });
}
const WR = "vwRL";
const jR = "n0GV";
const jl = { createPostModal: WR, title: jR };
function zR({ wallOwnerId: e, placeholder: t, onPostCreated: n }) {
  const { closeModal: o } = Kt();

  const r = ge(c => c.profile);

  const s = ie(c => c.createPost);

  const a = async (c, l, u, d, p) => {
    if (!r) {
      return;
    }
    const f = e ?? r.id;

    await s({
      wallOwnerId: f,
      text: c,
      spans: l,
      attachments: u,
      poll: d,
      notebook: p,
    });

    await n?.();
    o();
  };

  return i(xn, {
    frameless: true,
    onClose: o,
    className: jl.createPostModal,
    children: [
      i("h2", { className: jl.title, children: "Создать пост" }),
      i(Uf, { onSubmit: a, autoFocus: true, placeholder: t }),
    ],
  });
}
const qR = "TrvE";
const GR = "LPtK";
const YR = "odCr";
const KR = "RyVT";
const XR = "abrm";
const QR = "dp8y";
const ZR = "zmmq";
const JR = "Vzzx";
const e2 = "jPxO";
const t2 = "atoq";

const Tt = {
  editPostModal: qR,
  form: GR,
  whatsNew: YR,
  editor: KR,
  actions: XR,
  mediaButtons: QR,
  mediaButton: ZR,
  submitGroup: JR,
  charCount: e2,
  error: t2,
};

const zl = 5000/* 5e3 */;
function n2({ postId: e, initialText: t, initialSpans: n = [] }) {
  const { closeModal: o } = Kt();

  const r = ie(C => C.editPost);

  const s = ge(C => C.profile);

  const a = Yt();

  const {
    text: c,
    spans: l,
    editorRef: u,
    handleChange: d,
    insertText: p,
  } = ts(t, n);

  const [f, h] = L(false);
  const m = zl - c.length;
  const _ = m < 0;
  const v = c !== t;
  const g = JSON.stringify(l) !== JSON.stringify(n);
  const E = v || g;

  const y = I(
    (C) => {
      p(C.emoji);
    },
    [p]
  );

  const k = I(async () => {
    if (!(!c.trim() || _ || !E || f)) {
      h(true);
      try {
        await r(e, c, l);
        o();
      } catch (C) {
        console.error("Failed to update post:", C);
      } finally {
        h(false);
      }
    }
  }, [c, l, _, E, f, r, e, o]);

  return i(xn, {
    frameless: true,
    onClose: o,
    className: Tt.editPostModal,
    children: i("div", {
      className: Tt.form,
      children: [
        i("div", {
          className: Tt.whatsNew,
          children: [
            i(pt, { src: s?.avatar ?? "", size: "md" }),
            i(cs, {
              ref: u,
              value: c,
              spans: l,
              onChange: d,
              placeholder: "Что нового?",
              maxLength: zl,
              autoFocus: true,
              className: Tt.editor,
              minHeight: 40,
              maxHeight: 400,
            }),
          ],
        }),
        i("div", {
          className: Tt.actions,
          children: [
            i("div", {
              className: Tt.mediaButtons,
              children:
                !a &&
                i(Ia, { onEmojiSelect: y, buttonClassName: Tt.mediaButton }),
            }),
            i("div", {
              className: Tt.submitGroup,
              children: [
                _ &&
                  i("span", {
                    className: `${Tt.charCount} ${Tt.error}`,
                    children: m,
                  }),
                i(Fe, {
                  size: "lg",
                  disabled: !c.trim() || _ || !E,
                  loading: f,
                  onClick: k,
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
const o2 = "iPEV";
const r2 = "IS0A";
const s2 = "i0Id";
const i2 = "lvn6";
const a2 = "a90m";
const c2 = "gllW";
const l2 = "rtpD";
const u2 = "eLyr";
const d2 = "IPlO";

const Ht = {
  repostModal: o2,
  content: r2,
  title: s2,
  inputSection: i2,
  textarea: a2,
  originalPost: c2,
  postHeader: l2,
  postText: u2,
  actions: d2,
};

function f2({ post: e, onClose: t, onSuccess: n }) {
  const [o, r] = L("");
  const [s, a] = L(false);

  const c = ge(p => p.profile);

  const l = ie(p => p.updatePostReposted);

  const u = ie(p => p.prependPost);

  const d = async () => {
    a(true);
    try {
      const p = await Ue.createRepost(e.id, o.trim() || undefined);
      l(e.id, true, e.reposted ? 0 : 1);
      u(p);

      if (c?.username) {
        Ue.invalidateWallCache(c.username);
      }

      n?.();
      t();
    } catch (p) {
      console.error("Failed to create repost:", p);
    } finally {
      a(false);
    }
  };

  return i(xn, {
    onClose: t,
    showHeader: false,
    frameless: false,
    className: Ht.repostModal,
    children: i("div", {
      className: Ht.content,
      children: [
        i("h2", { className: Ht.title, children: "Репост" }),
        i("div", {
          className: Ht.inputSection,
          children: [
            c && i(pt, { src: c.avatar, alt: c.displayName, size: "sm" }),
            i("textarea", {
              className: Ht.textarea,
              placeholder: "Добавьте комментарий к репосту...",
              value: o,
              onInput: p => r(p.target.value),
              rows: 3,
            }),
          ],
        }),
        i("div", {
          className: Ht.originalPost,
          children: [
            i("div", {
              className: Ht.postHeader,
              children: [
                i(pt, {
                  src: e.author.avatar ?? "",
                  alt: e.author.displayName,
                  size: "xs",
                }),
                i(Xo, {
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
              className: Ht.postText,
              children:
                e.corrector || e.redPen
                  ? i(Ta, {
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
          className: Ht.actions,
          children: [
            i(Fe, {
              variant: "secondary",
              onClick: (p) => {
                p.stopPropagation();
                t();
              },
              disabled: s,
              children: "Отмена",
            }),
            i(Fe, {
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

const p2 = ({ showCreateButton: e = true }) => {
  const t = Ko();
  const n = ns();
  const o = os();
  const r = jd();

  const s = es(A => A.fetchPortal);

  const a = zd(r);
  const c = !a && r.active && !!r.url;
  const l = a ? le.ALICE_EVENT : c ? r.url : le.EVENT;
  U(() => {
    s();
  }, [s]);
  const u = n?.username ? `/@${n.username}` : "/profile";

  const d = Te(
    () => [
      { id: "feed", label: "Лента", icon: Qd, href: "/" },
      { id: "shop", label: "Магаз", icon: nf, href: "/shop" },
      ...((r.active && r.url) || t.status === "allowed"
        ? [
            {
              id: "event",
              label: "Ивент",
              icon: null,
              href: l,
              match: le.EVENT,
            },
          ]
        : []),
      {
        id: "notifications",
        label: "Уведы",
        icon: ua,
        href: "/notifications",
      },
      { id: "profile", label: "Профиль", icon: Si, href: u },
    ],
    [u, l, r.active, r.url, t.status]
  );

  const [p, f] = L({});
  const [h, m] = L(true);
  const _ = x([]);
  const v = x(null);
  const [g] = Jr();
  const { openModal: E } = Kt();

  const y = ie(A => A.fetchFeed);

  const k = ie(A => A.isRefreshing);

  const C = af();
  const b = _f();

  const w = I(() => {
    if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      y(true);
    }
  }, [y]);

  const N = Te(() => {
    const A = g.url || "/";
    return pa.some(B => A.startsWith(B));
  }, [g.url]);

  const T = Te(() => {
    const A = g.url || "/";
    return n?.username
      ? A === `/@${n.username}` || A.startsWith(`/@${n.username}/`)
      : false;
  }, [g.url, n?.username]);

  const S = x(null);

  const P = I((A, B = false) => {
    if (!B && S.current === A) {
      return;
    }
    S.current = A;
    const q = _.current[A];
    const v_current = v.current;
    if (q && v_current) {
      const Q = parseFloat(getComputedStyle(v_current).paddingLeft) || 0;

      f({
        width: q.offsetWidth,
        transform: `translateX(${q.offsetLeft - Q}px)`,
      });

      m(true);
    }
  }, []);

  U(() => {
    const A = g.url || "/";

    const B = d.findIndex((q) => {
      const ne = q.match ?? q.href;
      return (
        A === ne || A.startsWith(`${ne}/`) || (q.id === "profile" && T)
      );
    });

    if (B === -1) {
      m(false);
    } else {
      P(B, true);
    }
  }, [g.url, d, T, P]);

  U(() => {
    const v_current = v.current;
    if (!v_current) {
      return;
    }
    const B = v_current.querySelector(`.${Qe.active}`);
    if (B) {
      const q = _.current.indexOf(B);

      if (q !== -1) {
        (S.current = null);
        P(q);
      }
    }
  }, [P]);

  U(() => {
    const v_current = v.current;
    if (!v_current) {
      return;
    }

    const B = () => {
        const ne = v_current.querySelector(`.${Qe.active}`);
        if (ne) {
          const Q = _.current.indexOf(ne);

          if (Q !== -1) {
            P(Q, true);
          }
        }
      };

    const q = new ResizeObserver(B);
    q.observe(v_current);
    window.addEventListener("resize", B);

    return () => {
      q.disconnect();
      window.removeEventListener("resize", B);
    };
  }, [P]);

  const R = () => {
    E(i(zR, {}));
  };
  return N
    ? null
    : i("div", {
        className: Qe.mobileNavigationWrapper,
        children: [
          i("nav", {
            ref: v,
            className: Qe.navigation,
            children: [
              i("div", {
                className: `${Qe.indicator} ${h ? "" : Qe.indicatorHidden}`,
                style: p,
              }),
              d.map((A, B) => {
                const A_icon = A.icon;
                const ne = A.id === "event";
                const Q = ne && c;
                const he = g.url || "/";
                const G = A.match ?? A.href;

                const ae =
                  he === G ||
                  he.startsWith(`${G}/`) ||
                  (A.id === "profile" && T);

                return i(
                  "a",
                  {
                    href: A.href,
                    target: Q ? "_blank" : undefined,
                    rel: Q ? "noopener noreferrer" : undefined,
                    ref: (W) => {
                      (_.current[B] = W);

                      if (W && ae) {
                        P(B);
                      }
                    },
                    className: `${Qe.navItem} ${ae ? Qe.active : ""}`,
                    onClick: (W) => {
                      if (ae && A.id === "feed") {
                        W.preventDefault();
                        w();
                      }
                    },
                    children: [
                      i("span", {
                        className: Qe.iconWrapper,
                        children: ne
                          ? i("img", {
                              src: r.active
                                ? "/assets/portal/portal-active.gif"
                                : "/assets/portal/portal-inactive.png",
                              alt: "Ивент",
                              className: `${Qe.portalImage} ${
                                r.active ? Qe.portalImageActive : ""
                              }`,
                            })
                          : i(ve, {
                              children: [
                                A.id === "feed" && k ? i(la, {}) : i(A_icon, {}),
                                A.id === "notifications" &&
                                  C > 0 &&
                                  i("span", {
                                    className: Qe.badge,
                                    children: C > 99 ? "99+" : C,
                                  }),
                                A.id === "shop" &&
                                  b > 0 &&
                                  i("span", {
                                    className: Qe.badge,
                                    children: b,
                                  }),
                              ],
                            }),
                      }),
                      i("span", { className: Qe.label, children: A.label }),
                    ],
                  },
                  A.id
                );
              }),
            ],
          }),
          o &&
            e &&
            i("button", {
              className: Qe.createButton,
              onClick: R,
              "aria-label": "Создать пост",
              children: i(da, {}),
            }),
        ],
      });
};

const h2 = "skU2";
const m2 = "u0X6";
const g2 = "oHSo";
const _2 = "qnkl";
const v2 = "ASbf";
const yo = { badge: h2, red: m2, green: g2, blue: _2, violet: v2 };
function Ff({ type: e }) {
  const t =
    e === "like"
      ? yo.red
      : e === "bell"
      ? yo.violet
      : ["wall_post", "reply", "repost"].includes(e)
      ? yo.green
      : yo.blue;
  return i("div", {
    className: `${yo.badge} ${t}`,
    children: [
      e === "follow" && i(da, { size: 12 }),
      ["wall_post", "reply"].includes(e) && i(Kd, { size: 12, filled: true }),
      e === "like" && i(ca, { size: 12, filled: true }),
      e === "repost" && i(fa, { size: 12 }),
      e === "bell" && i(ua, { size: 12 }),
    ],
  });
}
const y2 = "bmgB";
const w2 = "GUu2";
const b2 = "dLD5";
const E2 = "i4A5";
const S2 = "i4BI";
const C2 = "KJGx";
const k2 = "Bqy4";
const N2 = "Qxyd";
const T2 = "zv8A";
const I2 = "wfoK";
const R2 = "huQM";
const A2 = "pkOo";
const L2 = "kdan";

const Je = {
  container: y2,
  clearAllButton: w2,
  toastList: b2,
  toast: E2,
  toastLeft: S2,
  toastData: C2,
  title: k2,
  message: N2,
  highlightedUsername: T2,
  dragging: I2,
  closeButton: R2,
  eventReminder: A2,
  belowTabs: L2,
};

const P2 = "H16d";
const O2 = { avatar: P2 };
function x2() {
  return i(pt, {
    src: "🔔",
    alt: "Напоминание",
    size: "md",
    className: O2.avatar,
    badge: i(Ff, { type: "bell" }),
  });
}
const Bf = eo(null);
function JL() {
  const e = Go(Bf);
  if (!e) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return e;
}
function $2({ children: e }) {
  const [t, n] = L([]);

  const o = I((c) => {
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

  const r = I((c) => {
    n(l => l.filter(u => u.id !== c));
  }, []);

  const s = I(() => {
    n([]);
  }, []);

  U(() => {
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

  U(() => {
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

  const a = Bw();

  U(() => {
    if (a) {
      const c = U2(a.type);

      o({
        id: a.id,
        eventId: a.eventId,
        expiresAt: a.expiresAt,
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

      We.setState({ lastSseToast: null });
    }
  }, [a, o]);

  return i(Bf.Provider, {
    value: { toasts: t, addToast: o, removeToast: r, clearAll: s },
    children: [e, i(M2, { toasts: t, onRemove: r, onClearAll: s })],
  });
}
function M2({ toasts: e, onRemove: t, onClearAll: n }) {
  const [o, r] = L(false);

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
    className: `${Je.container} ${s ? Je.belowTabs : ""} ym-hide-content`,
    children: [
      i("div", {
        className: `${Je.toastList} ${o ? Je.clearing : ""}`,
        children: a.map((l, u) => i(
          F2,
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
        i(Fe, {
          className: Je.clearAllButton,
          onClick: c,
          children: "Скрыть все",
        }),
    ],
  });
}
const D2 = 80;
function U2(e) {
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
function ql(e) {
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
function F2({
  toast: e,
  onRemove: t,
  clearingDelay: n = 0,
  isClearing: o = false,
}) {
  const r = x(null);
  const [s, a] = L(0);
  const [c, l] = L(false);
  const [u, d] = L(false);
  const p = x(0);
  const f = x(0);
  const h = x(false);

  const m = (b) => {
    (p.current = b.clientX);
    (h.current = false);
    l(true);
  };

  const _ = I(
    (b) => {
      if (!c) {
        return;
      }
      const w = b.clientX - p.current;

      if (Math.abs(w) > 5) {
        (h.current = true);
      }

      a(w);
    },
    [c]
  );

  const v = I(() => {
    if (c) {
      l(false);

      Math.abs(s) > D2
        ? (d(true), a(s > 0 ? 400 : -400), setTimeout(() => t(e.id), 200))
        : a(0);
    }
  }, [c, s, t, e]);

  U(() => {
    if (c) {
      document.addEventListener("mousemove", _);
      document.addEventListener("mouseup", v);

      return () => {
        document.removeEventListener("mousemove", _);
        document.removeEventListener("mouseup", v);
      };
    }
  }, [c, _, v]);

  const g = (b) => {
    (p.current = b.touches[0].clientX);
    (f.current = b.touches[0].clientY);
    (h.current = false);
    l(true);
  };

  const E = (b) => {
    if (!c) {
      return;
    }
    const w = b.touches[0].clientX - p.current;
    const N = b.touches[0].clientY - f.current;

    if ((Math.abs(w) > 5 || Math.abs(N) > 5)) {
      (h.current = true);
    }

    if (!(Math.abs(N) > Math.abs(w))) {
      a(w);
    }
  };

  const y = () => {
    v();
  };

  const k = u || o ? 0 : Math.max(0, 1 - Math.abs(s) / 200);
  const C = o ? 400 : s;
  return i("div", {
    ref: r,
    className: `${Je.toast} ${e.eventId ? Je.eventReminder : ""} ${
      c ? Je.dragging : ""
    }`,
    role: "button",
    tabIndex: 0,
    onClick: () => {
      if (h.current) {
        return;
      }
      const b = ql(e);

      if (b) {
        Ye(b);
        t(e.id);
      }
    },
    onKeyDown: (b) => {
      if ((b.key === "Enter" || b.key === " ")) {
        b.preventDefault();
        Ye(ql(e) ?? "/notifications");
        t(e.id);
      }
    },
    style: {
      transform: `translateX(${C}px)`,
      opacity: k,
      transition: c
        ? "none"
        : `transform 0.3s ease ${n}ms, opacity 0.3s ease ${n}ms`,
    },
    onMouseDown: m,
    onTouchStart: g,
    onTouchMove: E,
    onTouchEnd: y,
    children: [
      i("div", {
        className: Je.toastLeft,
        children: [
          e.eventId
            ? i(x2, {})
            : i(pt, {
                src: e.actorAvatar || "",
                badge: i(Ff, { type: e.notificationType }),
              }),
          i("div", {
            className: Je.toastData,
            children: [
              e.actorName &&
                i("div", {
                  className: Je.title,
                  children: e.eventId
                    ? i("span", { children: e.actorName })
                    : i(Xo, { userId: e.actorId, name: e.actorName }),
                }),
              i("p", {
                className: Je.message,
                children: [
                  e.highlightedUsername &&
                    i("span", {
                      className: Je.highlightedUsername,
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
        className: Je.closeButton,
        "aria-label": "Скрыть уведомление",
        onClick: (b) => {
          b.stopPropagation();
          t(e.id);
        },
        onMouseDown: b => b.stopPropagation(),
        onTouchStart: b => b.stopPropagation(),
        children: i(ft, { size: 16 }),
      }),
    ],
  });
}
const B2 = "M5dQ";
const H2 = "mbwf";
const V2 = "YsYf";
const W2 = "pHUn";
const j2 = "SCiu";
const z2 = "ifNf";
const q2 = "uJ3M";
const G2 = "tp40";
const Y2 = "mSmm";
const K2 = "S6wH";

const yn = {
  container: B2,
  toast: H2,
  slideUp: V2,
  leaving: W2,
  fadeOut: j2,
  success: z2,
  icon: q2,
  message: G2,
  closeButton: Y2,
  error: K2,
};

const X2 = { success: l0, error: r0 };
function Q2({ id: e, type: t, message: n, onRemove: o }) {
  const [r, s] = L(false);
  const X2_t = X2[t];

  const c = I(() => {
    s(true);

    setTimeout(() => {
      o(e);
    }, 300);
  }, [e, o]);

  return i("div", {
    className: `${yn.toast} ${yn[t]} ${r ? yn.leaving : ""}`,
    children: [
      i("span", { className: yn.icon, children: i(X2_t, { size: 20 }) }),
      i("span", { className: yn.message, children: n }),
      i("button", {
        className: yn.closeButton,
        onClick: c,
        children: i(ft, { size: 14 }),
      }),
    ],
  });
}
function Z2() {
  const e = $r(n => n.toasts);

  const t = $r(n => n.removeToast);

  return e.length === 0
    ? null
    : i("div", {
        className: yn.container,
        children: e.map(n => i(
          Q2,
          { id: n.id, type: n.type, message: n.message, onRemove: t },
          n.id
        )
        ),
      });
}
const J2 = "yZad";
const eA = "J5QU";
const tA = "yLu9";
const nA = "KraX";
const _r = { tabs: J2, indicator: eA, button: tA, active: nA };
function oA({
  tabs: e,
  defaultTab: t = 0,
  activeIndex: n,
  onChange: o,
  className: r = "",
}) {
  const [s, a] = L(t);
  const c = n !== undefined ? n : s;
  const [l, u] = L({});
  const d = x([]);
  const p = x(null);
  const f = x(false);

  const h = I(() => {
    const g = d.current[c];
    if (g) {
      const g_parentElement = g.parentElement;
      const y = g_parentElement ? parseFloat(getComputedStyle(g_parentElement).paddingLeft) : 0;
      const k = !f.current;

      u({
        width: g.offsetWidth,
        transform: `translateX(${g.offsetLeft - y}px)`,
        ...(k ? { transition: "none" } : {}),
      });

      if (k) {
        requestAnimationFrame(() => {
          (f.current = true);

          u((C) => {
            const { transition: b, ...w } = C;
            return w;
          });
        });
      }
    }
  }, [c]);

  U(() => {
    h();
  }, [h]);

  U(() => {
    const p_current = p.current;
    if (!p_current) {
      return;
    }
    const E = new ResizeObserver(() => {
      h();
    });
    E.observe(p_current);

    return () => {
      E.disconnect();
    };
  }, [h]);

  const m = (g) => {
    if (n === undefined) {
      a(g);
    }

    o?.(g, e[g]);
  };

  const _ = g => typeof g == "string" ? g : g.label;

  const v = (g, E) => typeof g == "string" ? `${E}` : g.id;

  return i("div", {
    ref: p,
    className: `${_r.tabs} ${r}`,
    children: [
      i("div", { className: _r.indicator, style: l }),
      e.map((g, E) => i(
        "button",
        {
          ref: (y) => {
            d.current[E] = y;
          },
          onClick: () => m(E),
          className: `${_r.button} ${c === E ? _r.active : ""}`,
          children: _(g),
        },
        v(g, E)
      )
      ),
    ],
  });
}
const rA = ce(() => se(
  () => import("./index-C0ha_WhZ.js"),
  __vite__mapDeps([27, 28, 6, 5, 29])
).then(e => ({
  default: e.ImageViewer
}))
);
function sA() {
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
  } = Fd();
  return e
    ? i(De, {
        fallback: null,
        children: i(
          rA,
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
const iA = "aLG4";
const aA = "rQxR";
const cA = "gOfR";
const lA = "GoKB";
const uA = "NyPX";
const dA = "Wbj4";

const jn = {
  layout: iA,
  layoutEvent: aA,
  wrapper: cA,
  wrapperShop: lA,
  content: uA,
  wrapperEvent: dA,
};

const fA = ce(() => se(() => import("./index-CICgvrh2.js"), __vite__mapDeps([30, 31])).then(
  e => ({
    default: e.AuthLayout
  })
)
);

const pA = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

const hA = [
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

const mA = ["/shop"];

const gA = ({ children: e }) => {
  const t = Yt();
  const n = os();
  const o = ns()?.id;

  const r = We(m => m.initialize);

  const s = We(m => m.reset);

  const a = Ly();
  const [c, l] = L(window.location.pathname);

  U(() => {
    if (!(!n || !o)) {
      r();
      return s;
    }
  }, [n, o, r, s]);

  U(() => {
    const m = () => {
      l(window.location.pathname);
    };
    window.addEventListener("popstate", m);
    const _ = history.pushState.bind(history);
    const v = history.replaceState.bind(history);

    (history.pushState = (...g) => {
      _(...g);
      m();
    });

    (history.replaceState = (...g) => {
      v(...g);
      m();
    });

    return () => {
      window.removeEventListener("popstate", m);
      (history.pushState = _);
      (history.replaceState = v);
    };
  }, []);

  const u = pA.includes(c);
  const d = hA.includes(c);

  const p = mA.some(m => c === m || c.startsWith(`${m}/`));

  const f = c === le.ALICE_EVENT || c.startsWith(`${le.ALICE_EVENT}/`);
  const h = (n || p) && !d;
  return u
    ? i(De, { fallback: null, children: i(fA, { children: e }) })
    : i(Ay.Provider, {
        value: { isHidden: a },
        children: i("div", {
          className: `${jn.layout} ${f ? jn.layoutEvent : ""}`,
          children: i("div", {
            className: `${jn.wrapper} ${p ? jn.wrapperShop : ""} ${
              f ? jn.wrapperEvent : ""
            }`,
            children: [
              h && (t ? i(p2, { showCreateButton: !f }) : i(v1, {})),
              h && !t && i(S1, {}),
              i("div", { className: jn.content, children: e }),
            ],
          }),
        }),
      });
};

function _A() {
  if (!Gl) {
    (Gl = true);

    (window.setNativeAuth = (e) => {
      if (e?.token) {
        Vd(e.token);
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
const vA = "X9ab";
const yA = "J5DZ";
const wA = "kVbu";
const bA = "Bka4";
const EA = "H4bF";
const SA = "J1zJ";
const CA = "rP0j";
const kA = "YjCC";
const NA = "aySc";
const TA = "swNm";
const IA = "oU6o";
const RA = "EweJ";
const AA = "g1Qv";
const LA = "blyo";
const PA = "tvd2";

const qe = {
  overlay: vA,
  card: yA,
  imageWrap: wA,
  image: bA,
  body: EA,
  titleRow: SA,
  title: CA,
  badge: kA,
  texts: NA,
  text: TA,
  moreButton: IA,
  buttons: RA,
  button: AA,
  primary: LA,
  secondary: PA,
};

const Hf = "seen_announcements";
function Vf() {
  try {
    const e = localStorage.getItem(Hf);
    if (!e) {
      return [];
    }
    const t = JSON.parse(e);
    return Array.isArray(t) ? t.filter(n => typeof n == "string") : [];
  } catch {
    return [];
  }
}
function OA(e) {
  try {
    const t = Vf();

    if (!t.includes(e)) {
      t.push(e);
      localStorage.setItem(Hf, JSON.stringify(t));
    }
  } catch {}
}
function xA() {
  const e = os();
  const [t, n] = L(null);
  const [o, r] = L(false);

  const s = I(() => {
    r(false);

    n(m => {
      if (m) {
        OA(m.id);
      }

      return null;
    });
  }, []);

  U(() => {
    if (!e) {
      return;
    }
    let m = false;

    jw
      .getAnnouncements()
      .then((_) => {
      if (m) {
        return;
      }
      const v = Vf();

      const g = _.find(E => E?.id && !v.includes(E.id));

      if (g) {
        n(g);
      }
    })
      .catch(() => {});

    return () => {
      m = true;
    };
  }, [e]);

  U(() => {
    if (!t) {
      return;
    }

    const m = (v) => {
      if (v.key === "Escape") {
        s();
      }
    };

    const _ = document.documentElement.style.overflow;
    (document.documentElement.style.overflow = "hidden");
    document.addEventListener("keydown", m);

    return () => {
      (document.documentElement.style.overflow = _);
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
        Ye(m_action.url);
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
      className: qe.overlay,
      onClick: c,
      children: i("div", {
        className: qe.card,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": d,
        children: [
          l?.url &&
            i("div", {
              className: qe.imageWrap,
              style:
                l.width && l.height
                  ? { aspectRatio: `${l.width} / ${l.height}` }
                  : undefined,
              children: i("img", {
                className: qe.image,
                src: l.url,
                alt: "",
                width: l.width,
                height: l.height,
              }),
            }),
          i("div", {
            className: qe.body,
            children: [
              i("div", {
                className: qe.titleRow,
                children: [
                  i("h2", { className: qe.title, children: d }),
                  u && i("span", { className: qe.badge, children: u }),
                ],
              }),
              (p || f) &&
                i("div", {
                  className: qe.texts,
                  children: [
                    p && i("p", { className: qe.text, children: p }),
                    f &&
                      (o
                        ? i("p", { className: qe.text, children: f })
                        : i("button", {
                            type: "button",
                            className: qe.moreButton,
                            onClick: () => r(true),
                            children: "Подробнее",
                          })),
                  ],
                }),
              !!h?.length &&
                i("div", {
                  className: qe.buttons,
                  children: h.map((m, _) => i(
                    "button",
                    {
                      type: "button",
                      className: `${qe.button} ${
                        m.style === "secondary" ? qe.secondary : qe.primary
                      }`,
                      onClick: () => a(m),
                      children: m.title,
                    },
                    _
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
const Yl = 3000/* 3e3 */;
const $A = 500;
const MA = 30000/* 3e4 */;
const Kl = ["mousemove", "keydown", "touchstart", "wheel", "scroll"];
function DA() {
  const e = ie(n => n.applyStatsUpdates);

  const t = pf();
  U(() => {
    if (t !== "authenticated") {
      return;
    }
    let n = null;
    let o = Infinity;
    let r = false;
    let s = false;
    let a = Date.now();

    const c = () => Date.now() - a > MA;

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
      const h = Wr.getSnapshot();
      if (h.length === 0) {
        return;
      }
      r = true;
      const m = Date.now();
      try {
        const _ = h.length > 20 ? h.slice(0, 20) : h;
        const v = await Ue.getPostsStats(_);

        if (v.length > 0) {
          e(v, m);
        }
      } catch {
      } finally {
        r = false;
      }
    };

    const u = (h) => {
      const m = Date.now() + h;

      if (m < o) {
        n !== null && clearTimeout(n);
        (o = m);

        (n = setTimeout(async () => {
          (n = null);
          (o = Infinity);
          await l();

          if (!s) {
            u(Yl);
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

    for (const h of Kl) {
      window.addEventListener(h, d, { passive: true });
    }
    const p = () => {
      if (!document.hidden) {
        d();
      }
    };
    document.addEventListener("visibilitychange", p);
    const f = Wr.onAppear(() => {
      if (!s && !document.hidden) {
        u($A);
      }
    });
    u(Yl);

    return () => {
      if (n !== null) {
        clearTimeout(n);
      }

      document.removeEventListener("visibilitychange", p);
      for (const h of Kl) {
        window.removeEventListener(h, d);
      }
      f();
    };
  }, [e, t]);
}

const Ra = () => i(hf, {
  kind: "notFound",
  title: "Страница не найдена",
  description:
    "Такой страницы нет — возможно, ссылка устарела или в адресе опечатка.",
  action: i(Fe, {
    onClick: () => Ye("/"),
    children: "Вернуться на главную",
  }),
});

const UA = "Gok2";
const FA = "rBA2";
const BA = "eW91";
const HA = "aAl8";
const VA = "VMlU";
const WA = "Qabh";
const jA = "uMdu";
const zA = "ZQrJ";
const qA = "frNq";
const GA = "WCID";
const YA = "D9Aw";
const KA = "WYj7";
const XA = "tIqU";
const QA = "LSkm";
const ZA = "RgfU";
const JA = "uNsP";
const eL = "fGTW";
const tL = "DKfZ";
const nL = "Aj6F";
const oL = "zLxa";
const rL = "ti5G";
const sL = "bPcA";

const z = {
  skeleton: UA,
  inner: FA,
  content: BA,
  header: HA,
  body: VA,
  actions: WA,
  shimmer: jA,
  avatar: zA,
  name: qA,
  time: GA,
  line: YA,
  w100: KA,
  w92: XA,
  w85: QA,
  w78: ZA,
  w65: JA,
  w50: eL,
  w40: tL,
  media: nL,
  mediaTall: oL,
  pill: rL,
  list: sL,
};

function iL(e) {
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
function Wf({ variant: e = "medium", delayMs: t = 0 }) {
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
            iL(e),
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
const Xl = ["medium", "media", "short", "long", "mediaTall"];
function aL({ count: e = 4 }) {
  return i("div", {
    className: z.list,
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    "aria-label": "Загрузка постов",
    children: Array.from({ length: e }, (t, n) => i(Wf, { variant: Xl[n % Xl.length], delayMs: n * 120 }, n)
    ),
  });
}
const cL = "zgiZ";
const lL = "Ugx4";
const uL = "Cv44";
const Ys = { virtualFeed: cL, virtualContent: lL, virtualItem: uL };
function dL({
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
  const d = x(null);
  const p = x(false);
  const [f, h] = L(null);
  const [m, _] = L(window.innerWidth < 1174);

  const v = ie(T => T.highlightedPostId);

  const g = ie(T => T.clearHighlightedPost);

  U(() => {
    const T = () => _(window.innerWidth < 1174);
    window.addEventListener("resize", T);

    return () => window.removeEventListener("resize", T);
  }, []);
  const E = m ? 0 : c;

  const y = I(
    (T) => {
      const e_T = e[T];
      if (!e_T) {
        return T;
      }
      const P = e_T.attachments?.[0]?.id ?? "";
      return `${e_T.id}-${P}`;
    },
    [e]
  );

  const {
    virtualItems: k,
    totalSize: C,
    measureElement: b,
    getMeasuredHeights: w,
  } = Oy({
    itemCount: e.length,
    estimatedItemHeight: s,
    overscan: a,
    gap: E,
    getItemKey: y,
    initialMeasuredHeights: l,
  });

  U(
    () => () => {
      if (u) {
        u(w());
      }
    },
    [u, w]
  );

  U(() => {
    if (!v) {
      return;
    }
    d.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const T = setTimeout(() => {
      h(v);
      g();

      setTimeout(() => h(null), 600);
    }, 300);
    return () => clearTimeout(T);
  }, [v, g]);

  const N = I(() => {
    if (!r || !o || n) {
      return;
    }
    const T =
      document.documentElement.scrollHeight -
      window.scrollY -
      window.innerHeight;

    if (T < 500 && !p.current) {
      (p.current = true);
      r();
    }

    if (T > 600) {
      (p.current = false);
    }
  }, [r, o, n]);

  U(() => {
    if (!n) {
      (p.current = false);
    }
  }, [n]);

  U(
    () => {
      window.addEventListener("scroll", N, { passive: true });

      return () => window.removeEventListener("scroll", N);
    },
    [N]
  );

  return i("div", {
    ref: d,
    className: Ys.virtualFeed,
    children: [
      i("div", {
        className: Ys.virtualContent,
        style: { height: `${C}px` },
        children: k.map((T) => {
          const S = e[T.index];
          return S
            ? i(
                "div",
                {
                  ref: P => b(P, T.index),
                  className: Ys.virtualItem,
                  style: { transform: `translateY(${T.start}px)` },
                  children: t(S, T.index, S.id === f),
                },
                T.key
              )
            : null;
        }),
      }),
      n &&
        i("div", {
          style: { marginTop: `${E}px` },
          children: i(Wf, { variant: "medium" }),
        }),
    ],
  });
}
const fL = "RBBK";
const pL = "Kg1O";
const hL = "qypR";
const mL = "qtEP";
const gL = "ypvS";
const _L = "m6T2";

const zn = {
  page: fL,
  createPostWrapper: pL,
  tabsWrapper: hL,
  searchButton: mL,
  error: gL,
  empty: _L,
};

const vL = (e) => {
  const t = ie(S => S.posts);

  const n = ie(S => S.activeFeed);

  const o = ie(S => S.isLoading);

  const r = ie(S => S.isLoadingMore);

  const s = ie(S => S.hasMore);

  const a = ie(S => S.error);

  const c = ie(S => S.feedScrollPosition);

  const l = ie(S => S.feedMeasuredHeights);

  const u = ie(S => S.feedRestoreToken);

  const d = ie(S => S.setActiveFeed);

  const p = ie(S => S.fetchFeed);

  const f = ie(S => S.loadMoreFeed);

  const h = ie(S => S.createPost);

  const m = ie(S => S.cacheFeedHeights);

  const _ = ge(S => S.profile);

  const v = ge(S => S.status);

  const g = x(false);

  const E = Te(() => t.map(S => S.author.id), [t]);

  Gw(E);

  U(() => {
    if (v === "authenticated" && t.length === 0 && !o) {
      p();
    }
  }, [n, v]);

  St(() => {
    if (!g.current) {
      if (t.length !== 0) {
        (g.current = true);

        c > 0 &&
          (window.scrollTo(0, c),
          requestAnimationFrame(() => window.scrollTo(0, c)));
      }
    }
  }, [t.length, c]);

  const y = x(null);
  St(() => {
    if (y.current === null) {
      y.current = u;
      return;
    }
    if (y.current === u) {
      return;
    }
    y.current = u;
    const S = c;
    window.scrollTo(0, S);

    requestAnimationFrame(() => window.scrollTo(0, S));
  }, [u, c]);

  const k = I(
      (S) => {
        m(n, S);
      },
      [n, m]
    );

  const C = (S) => {
    const R = ["global", "clan", "following"][S] ?? "global";

    if (R !== n) {
      d(R);
    } else if (window.scrollY > 1) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      p(true);
    }
  };

  const b = async (S, P, R, A, B) => {
    if (_) {
      (await h({
          wallOwnerId: _.id,
          text: S,
          spans: P,
          attachments: R,
          poll: A,
          notebook: B,
        }));
    }
  };

  const w = I(() => {
    if (s && !r) {
      f();
    }
  }, [s, r, f]);

  const N =
    n === "global"
      ? "feed_global"
      : n === "following"
      ? "feed_following"
      : "feed_clan";

  const T = I(
    (S, P, R) => i(II, { post: S, isHighlighted: R, source: N }, S.id),
    [N]
  );

  return i("div", {
    className: zn.page,
    children: [
      i("div", {
        className: zn.tabsWrapper,
        children: [
          i(oA, {
            tabs: ["Для вас", "Лента кланов", "Подписки"],
            activeIndex: n === "global" ? 0 : n === "clan" ? 1 : 2,
            onChange: C,
          }),
          i("a", {
            href: "/search",
            className: zn.searchButton,
            "aria-label": "Поиск",
            children: i(tf, {}),
          }),
        ],
      }),
      i("div", {
        className: zn.createPostWrapper,
        children: [
          _ && i(pt, { src: _.avatar ?? "", alt: _.displayName, size: "sm" }),
          i(Uf, { onSubmit: b }),
        ],
      }),
      a
        ? i("div", {
            className: zn.error,
            children: [
              i("p", { children: a }),
              i("button", { onClick: () => p(), children: "Повторить" }),
            ],
          })
        : o && t.length === 0
        ? i(aL, { count: 4 })
        : t.length === 0
        ? i("div", { className: zn.empty, children: "Нет постов" })
        : t.length > 0
        ? i(
            dL,
            {
              posts: t,
              renderPost: T,
              isLoadingMore: r,
              hasMore: s,
              onLoadMore: w,
              estimatedPostHeight: 250,
              overscan: 3,
              initialMeasuredHeights: l,
              onMeasuredHeightsChange: k,
            },
            n
          )
        : null,
    ],
  });
};

const yL = ce(() => se(
  () => import("./index-DHk4V3qZ.js"),
  __vite__mapDeps([32, 28, 14, 33])
).then(e => ({
  default: e.GlobalVideoPlayer
}))
);

_A();

const wL = ce(() => se(() => import("./index-BLfGXQ3Q.js"), __vite__mapDeps([34, 6, 35])).then(
  e => ({
    default: e.Hashtag
  })
)
  );

const bL = ce(() => se(
  () => import("./index-CmwQWSou.js"),
  __vite__mapDeps([36, 37, 6, 1, 2, 38])
).then(e => ({
  default: e.Profile
}))
);

const EL = ce(() => se(() => import("./index-D5Rk02Iz.js"), __vite__mapDeps([39, 6, 40])).then(
  e => ({
    default: e.PostPage
  })
)
);

const SL = ce(() => se(
  () => import("./index-BpSqSPAR.js"),
  __vite__mapDeps([41, 4, 37, 42])
).then(e => ({
  default: e.Notifications
}))
);

const CL = ce(() => se(() => import("./index-KAp3EFSQ.js"), __vite__mapDeps([43, 44])).then(
  e => ({
    default: e.Search
  })
)
);

const kL = ce(() => se(() => import("./index-LHzdazyI.js"), __vite__mapDeps([45, 46])).then(
  e => ({
    default: e.ShopFrame
  })
)
);

const NL = ce(() => se(() => import("./index-DZSTFEKT.js"), __vite__mapDeps([47, 48])).then(
  e => ({
    default: e.EventFrame
  })
)
);

function TL({ children: e }) {
  const t = Ko();
  return t.status === "denied"
    ? i(Ra, {})
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
    : i(ve, { children: e });
}

const IL = ce(() => se(() => import("./index-C6im29D0.js"), __vite__mapDeps([49, 6, 50])).then(
  e => ({
    default: e.DeleteAccount
  })
)
  );

const RL = ce(() => se(() => import("./index-DYgL0emE.js"), __vite__mapDeps([51, 6, 52])).then(
  e => ({
    default: e.Terms
  })
)
);

const AL = ce(() => se(() => import("./index-C4NFgIul.js"), __vite__mapDeps([53, 6, 54])).then(
  e => ({
    default: e.Privacy
  })
)
);

const LL = ce(() => se(() => import("./index-C6du8mtf.js"), __vite__mapDeps([55, 6, 56])).then(
  e => ({
    default: e.Cookies
  })
)
);

const PL = ce(() => se(
  () => import("./index-B43Dkix0.js"),
  __vite__mapDeps([57, 6, 3, 58])
).then(e => ({
  default: e.ExternalLink
}))
);

const OL = ce(() => se(() => import("./index-CiDy7J-m.js"), __vite__mapDeps([59, 6, 60])).then(
  e => ({
    default: e.Support
  })
)
);

const xL = ce(() => se(() => import("./index-zY0bvYi9.js"), __vite__mapDeps([61, 6, 62])).then(
  e => ({
    default: e.ChildSafety
  })
)
);

const $L = ce(() => se(() => import("./index-Dp67zKLD.js"), __vite__mapDeps([63, 64])).then(
  e => ({
    default: e.Event
  })
)
);

const ML = ce(() => se(
  () => import("./index-BLkquVW2.js"),
  __vite__mapDeps([65, 66, 67, 6])
).then(e => ({
  default: e.SubscriptionTerms
}))
);

const DL = ce(() => se(
  () => import("./index-Dxabrp2y.js"),
  __vite__mapDeps([68, 66, 67, 6])
).then(e => ({
  default: e.RecurringTerms
}))
);

const UL = ce(() => se(
  () => import("./index-qLTD7FDU.js"),
  __vite__mapDeps([69, 70, 71, 72, 73, 74, 75])
).then(e => ({
  default: e.Login
}))
);

const FL = ce(() => se(
  () => import("./index-C1SB6Xhf.js"),
  __vite__mapDeps([76, 70, 71, 72, 73, 74, 77])
).then(e => ({
  default: e.Register
}))
);

const BL = ce(() => se(
  () => import("./index-DNSxDFtK.js"),
  __vite__mapDeps([78, 70, 71, 74, 79])
).then(e => ({
  default: e.ForgotPassword
}))
);

const HL = ce(() => se(() => import("./index-CmjnLA-y.js"), __vite__mapDeps([80, 74, 81])).then(
  e => ({
    default: e.ResetPassword
  })
)
);

const VL = ce(() => se(() => import("./index-BIrIRxjJ.js"), []).then(e => ({
  default: e.VerifyEmail
}))
);

const WL = ce(() => se(() => import("./index-BCRb8Aiu.js"), __vite__mapDeps([82, 83])).then(
  e => ({
    default: e.Onboarding
  })
)
);

const jL = ce(() => se(() => import("./index-CYHSelDF.js"), []).then(e => ({
  default: e.Verification
}))
);

function Ql(e) {
  const t = e.match(/^\/@([^/]+)\/?$/);
  return t ? t[1] : null;
}
const zL = ({ slug: e }) => {
  if (!e?.startsWith("@")) {
    return i(Ra, {});
  }
  const t = e.slice(1);
  return i(bL, { username: t });
};
function qL() {
  const [e, t] = L(window.location.pathname);

  const n = dy(r => r.isOpen);

  DA();

  return i($2, {
    children: i(Mb, {
      children: i(DE, {
        currentPath: e,
        children: [
          i(sA, {}),
          n && i(De, { fallback: null, children: i(yL, {}) }),
          i(Z2, {}),
          i(jE, {}),
          i(xA, {}),
          i(gA, {
            children: i(De, {
              fallback: null,
              children: i(Dd, {
                onChange: (r) => {
                  const s = e;
                  t(r.url);

                  if (r.url === s) {
                    return;
                  }

                  fy.getState().markNavigated();
                  const a = ie.getState();
                  if (s === "/" || s === "") {
                    a.setFeedScrollPosition(window.scrollY);
                  } else {
                    const u = Ql(s);

                    if (u) {
                      a.setProfileScrollPosition(u, window.scrollY);
                    }
                  }
                  const c = r.url === "/";
                  const l = !!Ql(r.url);

                  if (!c && !l) {
                    window.scrollTo(0, 0);
                  }
                },
                children: [
                  i(vL, { path: "/" }),
                  i(SL, { path: "/notifications" }),
                  i(UL, { path: "/login" }),
                  i(FL, { path: "/register" }),
                  i(BL, { path: "/forgot-password" }),
                  i(HL, { path: "/reset-password" }),
                  i(VL, { path: "/verify-email" }),
                  i(RL, { path: "/terms" }),
                  i(AL, { path: "/privacy" }),
                  i(LL, { path: "/cookies" }),
                  i(WL, { path: "/onboarding" }),
                  i(CL, { path: "/search" }),
                  i(kL, { path: "/shop/:rest*" }),
                  i(TL, {
                    path: "/event/alice-ai/:rest*",
                    children: i(NL, {}),
                  }),
                  i(wL, { path: "/hashtag/:name" }),
                  i(PL, { path: "/external" }),
                  i(OL, { path: "/support" }),
                  i(IL, { path: "/delete-account" }),
                  i(xL, { path: "/child-safety" }),
                  i($L, { path: "/event" }),
                  i(jL, { path: "/verification" }),
                  i(ML, { path: "/subscription-terms" }),
                  i(DL, { path: "/recurring-terms" }),
                  i(EL, { path: "/:username/post/:postId" }),
                  i(zL, { path: "/:slug" }),
                  i(Ra, { default: true }),
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

Kv(document.getElementById("root")).render(
  i(ve, {
    children: i(Yv, {
      fallback: i("div", { children: "Something went wrong" }),
      children: i(qL, {}),
    }),
  })
);
export {
  $ as $,
  x as A,
  Fe as B,
  Kt as C,
  Ef as D,
  XL as E,
  D0 as F,
  ft as G,
  QL as H,
  ef as I,
  ZL as J,
  $e as K,
  ka as L,
  xn as M,
  Ko as N,
  sr as O,
  aL as P,
  Gn as Q,
  i0 as R,
  ve as S,
  of as T,
  cT as U,
  dL as V,
  oT as W,
  Xo as X,
  ge as Y,
  Ze as Z,
  St as __1,
  dy as a,
  Ai as a0,
  Yt as a1,
  os as a2,
  xb as a3,
  zR as a4,
  Te as a5,
  hf as a6,
  oA as a7,
  Uf as a8,
  Rl as a9,
  Ei as aA,
  H as aB,
  o0 as aC,
  Zt as aD,
  ia as aE,
  yl as aF,
  e0 as aG,
  et as aH,
  Ud as aI,
  vy as aJ,
  Td as aK,
  Jr as aL,
  ea as aM,
  s0 as aN,
  Lo as aO,
  la as aP,
  ua as aQ,
  Si as aR,
  Zr as aS,
  Gk as aT,
  Mk as aU,
  jw as aV,
  Gw as aW,
  Wt as aX,
  Yw as aY,
  on as aa,
  fy as ab,
  Nr as ac,
  $R as ad,
  bf as ae,
  x2 as af,
  Xd as ag,
  Kd as ah,
  ca as ai,
  fa as aj,
  We as ak,
  af as al,
  Py as am,
  cf as an,
  O as ao,
  D as ap,
  ma as aq,
  tf as ar,
  yy as as,
  un as at,
  jd as au,
  GL as av,
  es as aw,
  zd as ax,
  le as ay,
  Cy as az,
  ie as b,
  II as c,
  L as d,
  Ye as e,
  pt as f,
  d0 as g,
  U as h,
  Zd as i,
  ns as j,
  De as k,
  se as l,
  da as m,
  $w as n,
  JL as o,
  Ue as p,
  I as q,
  Af as r,
  tT as s,
  nT as t,
  i as u,
  Dw as v,
  cushion_fartMp3 as w,
  glass_breakWav as x,
  vt as y,
  ce as z,
};
